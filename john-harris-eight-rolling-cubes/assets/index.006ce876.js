const $v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};$v();function zr(e,r,n){return n.a=e,n.f=r,n}function v(e){return zr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return zr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return zr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return zr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return zr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ra(e){return zr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return zr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function to(e){return zr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function oo(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ja(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function fv(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var sv=[];function dv(e){return e.length}var mv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),pv=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),bv=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var gv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+hv()),r});function hv(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ue(e,r){for(var n,a=[],t=Lt(e,r,0,a);t&&(n=a.pop());t=Lt(n.a,n.b,0,a));return t}function Lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=Ti(e),r=Ti(r));for(var t in e)if(!Lt(e[t],r[t],n+1,a))return!1;return!0}v(Ue);v(function(e,r){return!Ue(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return O(e,r)<0});v(function(e,r){return O(e,r)<1});v(function(e,r){return O(e,r)>0});v(function(e,r){return O(e,r)>=0});var _v=v(function(e,r){var n=O(e,r);return n<0?qc:n?os:Uc}),Fn=0;function P(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function We(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=vr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=vr(e.a,r);return n}var z={$:0};function vr(e,r){return{$:1,a:e,b:r}}var wv=v(vr);function h(e){for(var r=z,n=e.length;n--;)r=vr(e[n],r);return r}function Na(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var yv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});v(function(e,r){return h(Na(r).sort(function(n,a){return O(e(n),e(a))}))});v(function(e,r){return h(Na(r).sort(function(n,a){var t=o(e,n,a);return t===Uc?0:t===qc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var xv=v(Math.pow);v(function(e,r){return r%e});var Sv=v(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Cv=Math.PI,Pv=Math.cos,Lv=Math.sin,zv=Math.tan,kv=Math.atan;v(Math.atan2);function Tv(e){return e}function Mv(e){return e===1/0||e===-1/0}var Dv=Math.ceil,Av=Math.floor,Bv=Math.round,Fv=Math.sqrt,pi=Math.log,Vv=isNaN;function Ev(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Rv=v(function(e,r){return e+r});function jv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function Nv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Yv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Wv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Hv=v(function(e,r){return r.split(e)}),Gv=v(function(e,r){return r.join(e)}),Iv=y(function(e,r,n){return n.slice(e,r)});function Ov(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Uv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),qv=v(function(e,r){return r.indexOf(e)>-1}),Jv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Xv=v(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function wc(e){return e+""}function Zv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Qv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Kv(e){return Na(e).join("")}function e$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function r$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function n$(e){return{$:0,a:e}}function io(e){return{$:2,b:e}}var a$=io(function(e){return typeof e=="boolean"?ve(e):nr("a BOOL",e)}),t$=io(function(e){return typeof e=="number"?ve(e):nr("a FLOAT",e)}),o$=io(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):nr("a STRING",e)});function i$(e){return{$:3,b:e}}var c$=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function kr(e,r){return{$:9,f:e,g:r}}var l$=v(function(e,r){return{$:10,b:r,h:e}}),u$=v(function(e,r){return kr(e,[r])}),v$=y(function(e,r,n){return kr(e,[r,n])});E(function(e,r,n,a){return kr(e,[r,n,a])});ge(function(e,r,n,a,t){return kr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return kr(e,[r,n,a,t,i])});Ra(function(e,r,n,a,t,i,c){return kr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return kr(e,[r,n,a,t,i,c,l])});to(function(e,r,n,a,t,i,c,l,u){return kr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ye(e,n)}catch(a){return we(o(ho,"This is not valid JSON! "+a.message,r))}});var yc=v(function(e,r){return Ye(e,r)});function Ye(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):nr("null",r);case 3:return Jn(r)?bi(e.b,r,h):nr("a LIST",r);case 4:return Jn(r)?bi(e.b,r,$$):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var $=Ye(e.b,r[n]);return Xe($)?$:we(o(Mi,n,$.a));case 7:var a=e.e;if(!Jn(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ye(e.b,r[a]);return Xe($)?$:we(o(Jc,a,$.a));case 8:if(typeof r!="object"||r===null||Jn(r))return nr("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var $=Ye(e.b,r[i]);if(!Xe($))return we(o(Mi,i,$.a));t=vr(P(i,$.a),t)}return ve(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ye(l[u],r);if(!Xe($))return $;c=c($.a)}return ve(c);case 10:var $=Ye(e.b,r);return Xe($)?Ye(e.h($.a),r):$;case 11:for(var s=z,d=e.g;d.b;d=d.b){var $=Ye(d.a,r);if(Xe($))return $;s=vr($.a,s)}return we(is(Ve(s)));case 1:return we(o(ho,e.a,r));case 0:return ve(e.a)}}function bi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ye(e,r[i]);if(!Xe(c))return we(o(Jc,i,c.a));t[i]=c.a}return ve(n(t))}function Jn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function $$(e){return o(Ss,e.length,function(r){return e[r]})}function nr(e,r){return we(o(ho,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&gi(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return gi(e.g,r.g)}}function gi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var f$=v(function(e,r){return JSON.stringify(r,null,e)+""});function xc(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function s$(e){return{$:1,a:e}}function hr(e){return{$:2,b:e,c:null}}var zt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function d$(e){return{$:5,b:e}}var m$=0;function co(e){var r={$:0,e:m$++,f:e,g:null,h:[]};return lo(r),r}function Sc(e){return hr(function(r){r(Rr(co(e)))})}function Cc(e,r){e.h.push(r),lo(e)}var p$=v(function(e,r){return hr(function(n){Cc(e,r),n(Rr(Fn))})}),rt=!1,hi=[];function lo(e){if(hi.push(e),!rt){for(rt=!0;e=hi.shift();)b$(e);rt=!1}}function b$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,lo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return uo(r,a,e.e7,e.fR,e.fL,function(){return function(){}})});function uo(e,r,n,a,t,i){var c=o(yc,e,r?r.flags:void 0);Xe(c)||nn(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=g$(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),wi(l,b.b,t($))}return wi(l,u.b,t($)),d?{ports:d}:{}}var ir={};function g$(e,r){var n;for(var a in ir){var t=ir[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=_$(t,r)}return n}function h$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function _$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(zt,l,d$(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=co(o(zt,l,e.b))}var w$=v(function(e,r){return hr(function(n){e.g(r),n(Rr(Fn))})});v(function(e,r){return o(p$,e.h,{$:0,a:r})});function Pc(e){return function(r){return{$:1,k:e,l:r}}}function y$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var _i=[],nt=!1;function wi(e,r,n){if(_i.push({p:e,q:r,r:n}),!nt){nt=!0;for(var a;a=_i.shift();)x$(a.p,a.q,a.r);nt=!1}}function x$(e,r,n){var a={};pa(!0,r,a,null),pa(!1,n,a,null);for(var t in e)Cc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function pa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=S$(e,t,a,r.l);n[t]=C$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)pa(e,c.a,n,a);return;case 3:pa(e,r.o,n,{s:r.n,t:a});return}}function S$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ir[r].e:ir[r].f;return o(i,t,a)}function C$(e,r,n){return n=n||{i:z,j:z},e?n.i=vr(r,n.i):n.j=vr(r,n.j),n}function P$(e){ir[e]&&nn(3)}v(function(e,r){return r});function L$(e,r){return P$(e),ir[e]={f:z$,u:r,a:k$},Pc(e)}var z$=v(function(e,r){return function(n){return e(r(n))}});function k$(e,r){var n=z,a=ir[e].u,t=Rr(null);ir[e].b=t,ir[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(yc,a,c);Xe(l)||nn(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ba,pr=typeof document!="undefined"?document:{};function vo(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Sr(e,function(){}),t),{}});function kt(e){return{$:0,a:e}}var Lc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:$o(n),e:t,f:e,b:i}})}),_r=Lc(void 0),T$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:$o(n),e:t,f:e,b:i}})}),M$=T$(void 0);function D$(e,r,n,a){return{$:3,d:$o(e),g:r,h:n,i:a}}var A$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Tr([e,r],function(){return e(r)})});y(function(e,r,n){return Tr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Tr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Tr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return Tr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ra(function(e,r,n,a,t,i,c){return Tr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Tr([e,r,n,a,t,i,c,l],function(){return oo(e,r,n,a,t,i,c,l)})});to(function(e,r,n,a,t,i,c,l,u){return Tr([e,r,n,a,t,i,c,l,u],function(){return ja(e,r,n,a,t,i,c,l,u)})});var zc=v(function(e,r){return{$:"a0",n:e,o:r}}),B$=v(function(e,r){return{$:"a1",n:e,o:r}}),kc=v(function(e,r){return{$:"a2",n:e,o:r}}),Vn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function F$(e){return e=="script"?"p":e}function V$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(zc,r.n,E$(e,r.o)):r});function E$(e,r){var n=So(r);return{$:r.$,a:n?p(Cs,n<3?R$:j$,De(e),r.a):o(wa,e,r.a)}}var R$=v(function(e,r){return P(e(r.a),r.b)}),j$=v(function(e,r){return{ak:e(r.ak),c$:r.c$,cP:r.cP}});function $o(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?yi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?yi(c,t,i):c[t]=i}return r}function yi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Sr(e,r){var n=e.$;if(n===5)return Sr(e.k||(e.k=e.m()),r);if(n===0)return pr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Sr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Tt(c,r,e.d),c}var c=e.f?pr.createElementNS(e.f,e.c):pr.createElement(e.c);ba&&e.c=="a"&&c.addEventListener("click",ba(c)),Tt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)vo(c,Sr(n===1?l[u]:l[u].b,r));return c}function Tt(e,r,n){for(var a in n){var t=n[a];a==="a1"?N$(e,t):a==="a0"?H$(e,r,t):a==="a3"?Y$(e,t):a==="a4"?W$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function N$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Y$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function W$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function H$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=G$(r,i),e.addEventListener(t,c,fo&&{passive:So(i)<2}),a[t]=c}}var fo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){fo=!0}}))}catch{}function G$(e,r){function n(a){var t=n.q,i=Ye(t.a,a);if(!!Xe(i)){for(var c=So(t),l=i.a,u=c?c<3?l.a:l.ak:l,$=c==1?l.b:c==3&&l.c$,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cP)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function I$(e,r){return e.$==r.$&&Or(e.a,r.a)}function Tc(e,r){var n=[];return Ze(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ze(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=K$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ze(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!O$(d,m):d!==m)&&he(n,2,a,m),Ze(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:xi(e,r,n,a,U$);return;case 2:xi(e,r,n,a,q$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=so(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function O$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function xi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=so(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function so(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=so(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&I$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function U$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ze(s,i[$],n,++a),a+=s.b||0}}function q$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,T=void 0,Y=void 0;if(w===x){f++,Ze(_,C,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;Y=x===N}if(R){var F=R.a,J=R.b;T=w===F}if(T&&Y){f++,Ze(_,J,t,f),sn(i,t,w,C,m,c),f+=_.b||0,f++,dn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,sn(i,t,x,C,m,c),Ze(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(Y){f++,dn(i,t,w,_,f),f+=_.b||0,f++,Ze(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,dn(i,t,w,_,f),sn(i,t,x,C,m,c),f+=_.b||0,f++,Ze(W,J,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;dn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];sn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var Mc="_elmW6BL";function sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ze(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}sn(e,r,n+Mc,a,t,i)}function dn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ze(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}dn(e,r,n+Mc,a,t)}function Dc(e,r,n,a){mn(e,r,n,0,0,r.b,a)}function mn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)Dc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&mn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&mn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return mn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=mn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Ac(e,r,n,a){return n.length===0?e:(Dc(e,r,n,a),ga(e,n))}function ga(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=J$(t,a);t===e&&(e=i)}return e}function J$(e,r){switch(r.$){case 0:return X$(e,r.s,r.u);case 4:return Tt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ga(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Sr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ga(e,i.w),e;case 8:return Z$(e,r);case 5:return r.s(e);default:nn(10)}}function X$(e,r,n){var a=e.parentNode,t=Sr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Z$(e,r){var n=r.s,a=Q$(n.y,r);e=ga(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Sr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&vo(e,a),e}function Q$(e,r){if(!!e){for(var n=pr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;vo(n,i.c===2?i.s:Sr(i.z,r.u))}return n}}function mo(e){if(e.nodeType===3)return kt(e.textContent);if(e.nodeType!==1)return kt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=vr(o(Vn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,$=e.childNodes,a=$.length;a--;)u=vr(mo($[a]),u);return p(_r,l,r,u)}function K$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ef=E(function(e,r,n,a){return uo(r,a,e.e7,e.fR,e.fL,function(t,i){var c=e.fU,l=a.node,u=mo(l);return Bc(i,function($){var s=c($),d=Tc(u,s);l=Ac(l,u,d,t),u=s})})});E(function(e,r,n,a){return uo(r,a,e.e7,e.fR,e.fL,function(t,i){var c=e.cX&&e.cX(t),l=e.fU,u=pr.title,$=pr.body,s=mo($);return Bc(i,function(d){ba=c;var m=l(d),f=_r("body")(z)(m.eB),g=Tc(s,f);$=Ac($,s,g,t),s=f,ba=0,u!==m.fP&&(pr.title=u=m.fP)})})});var ha=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Bc(e,r){r(e);var n=0;function a(){n=n===1?0:(ha(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ha(a),n=2)}}v(function(e,r){return o(Lo,Co,hr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(Lo,Co,hr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(Lo,Co,hr(function(){history.replaceState({},"",r),e()}))});var rf={addEventListener:function(){},removeEventListener:function(){}},nf=typeof window!="undefined"?window:rf;y(function(e,r,n){return Sc(hr(function(a){function t(i){co(n(i))}return e.addEventListener(r,t,fo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ye(e,r);return Xe(n)?re(n.a):q});function Fc(e,r){return hr(function(n){ha(function(){var a=document.getElementById(e);n(a?Rr(r(a)):s$(Ls(e)))})})}function af(e){return hr(function(r){ha(function(){r(Rr(e()))})})}v(function(e,r){return Fc(r,function(n){return n[e](),Fn})});v(function(e,r){return af(function(){return nf.scroll(e,r),Fn})});y(function(e,r,n){return Fc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Fn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var tf=v(function(e,r){var n="g";e.fk&&(n+="m"),e.eD&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var of=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):q}a.push(L(Ll,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):q}return n(L(Ll,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var cf=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/lf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function lf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var po=new Float64Array(3),Si=new Float64Array(3),Ci=new Float64Array(3),uf=y(function(e,r,n){return new Float64Array([e,r,n])}),vf=function(e){return e[0]},$f=function(e){return e[1]},ff=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var sf=function(e){return new Float64Array([e.fY,e.f0,e.da])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Vc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Vc);function Ec(e,r,n){return n===void 0&&(n=new Float64Array(3)),_a(Vc(e,r,n),n)}v(Ec);function Rc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function _a(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Rc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var df=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(pn);function Mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Mt);v(function(e,r){var n,a=po,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(pn(r,a)+e[14])/n,t});var mf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var pf=function(e){return{fY:e[0],f0:e[1],da:e[2],et:e[3]}},bf=function(e){return new Float64Array([e.fY,e.f0,e.da,e.et])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/gf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function gf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var hf=new Float64Array(16),_f=new Float64Array(16),wf=function(e){var r=new Float64Array(16);return r[0]=e.dC,r[1]=e.dG,r[2]=e.dK,r[3]=e.dO,r[4]=e.dD,r[5]=e.dH,r[6]=e.dL,r[7]=e.dP,r[8]=e.dE,r[9]=e.dI,r[10]=e.dM,r[11]=e.dQ,r[12]=e.dF,r[13]=e.dJ,r[14]=e.dN,r[15]=e.dR,r},yf=function(e){return{dC:e[0],dG:e[1],dK:e[2],dO:e[3],dD:e[4],dH:e[5],dL:e[6],dP:e[7],dE:e[8],dI:e[9],dM:e[10],dQ:e[11],dF:e[12],dJ:e[13],dN:e[14],dR:e[15]}};function jc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(jc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return jc(c,l,i,t,n,a)});function Nc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(Nc);E(function(e,r,n,a){return Nc(e,r,n,a,-1,1)});function Yc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],Y=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],J=r[8],Q=r[9],ie=r[10],$e=r[11],oe=r[12],de=r[13],Te=r[14],Ce=r[15];return n[0]=a*C+l*T+d*Y+b*j,n[1]=t*C+u*T+m*Y+w*j,n[2]=i*C+$*T+f*Y+x*j,n[3]=c*C+s*T+g*Y+_*j,n[4]=a*R+l*N+d*W+b*F,n[5]=t*R+u*N+m*W+w*F,n[6]=i*R+$*N+f*W+x*F,n[7]=c*R+s*N+g*W+_*F,n[8]=a*J+l*Q+d*ie+b*$e,n[9]=t*J+u*Q+m*ie+w*$e,n[10]=i*J+$*Q+f*ie+x*$e,n[11]=c*J+s*Q+g*ie+_*$e,n[12]=a*oe+l*de+d*Te+b*Ce,n[13]=t*oe+u*de+m*Te+w*Ce,n[14]=i*oe+$*de+f*Te+x*Ce,n[15]=c*oe+s*de+g*Te+_*Ce,n}v(Yc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],Y=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+$*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*Y+c*j+$*R,n[9]=t*Y+l*j+s*R,n[10]=i*Y+u*j+d*R,n[11]=0,n[12]=a*N+c*W+$*F+m,n[13]=t*N+l*W+s*F+f,n[14]=i*N+u*W+d*F+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=_a(r,po);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Rc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,C=b-m,T=g-f,Y=c*c*$+u,j=w+d,R=b+m,N=w-d,W=l*l*$+u,F=n[0],J=n[1],Q=n[2],ie=n[3],$e=n[4],oe=n[5],de=n[6],Te=n[7],Ce=n[8],yr=n[9],xr=n[10],et=n[11],cv=n[12],lv=n[13],uv=n[14],vv=n[15];return a[0]=F*x+$e*_+Ce*C,a[1]=J*x+oe*_+yr*C,a[2]=Q*x+de*_+xr*C,a[3]=ie*x+Te*_+et*C,a[4]=F*T+$e*Y+Ce*j,a[5]=J*T+oe*Y+yr*j,a[6]=Q*T+de*Y+xr*j,a[7]=ie*T+Te*Y+et*j,a[8]=F*R+$e*N+Ce*W,a[9]=J*R+oe*N+yr*W,a[10]=Q*R+de*N+xr*W,a[11]=ie*R+Te*N+et*W,a[12]=cv,a[13]=lv,a[14]=uv,a[15]=vv,a});function xf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(xf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Sf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Sf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Ec(e,r,po),t=_a(Mt(n,a,Si),Si),i=_a(Mt(a,t,Ci),Ci),c=hf,l=_f;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Yc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Pi=0;function zn(e,r){for(;r.b;r=r.b)e(r.a)}function bo(e){for(var r=0;e.b;e=e.b)r++;return r}var Cf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Pf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Lf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),zf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),kf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Tf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Mf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Df=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Af=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Bf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ff=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Vf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ef=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Rf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Hc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},jf=function(e){e.gl.disable(e.gl.CULL_FACE)},Nf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Yf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Li=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Hf=[Vf,Ef,Rf,Wc,Hc,jf,Nf,Yf,Wf];function zi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Gf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function If(e,r,n,a){for(var t=n.a.dj,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(bo(n.b)*s);zn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Of(e,r){if(r.a.ds>0){var n=e.createBuffer(),a=Uf(r.c,r.a.ds);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dj*bo(r.b),indexBuffer:null,buffers:{}}}function Uf(e,r){var n=new Uint32Array(bo(e)*r),a=0,t;return zn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ki(e,r){return e+"#"+r}var Ic=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Wc(n),Hc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ki(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=Pi++,$||($=zi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Pi++,s||(s=zi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Gf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=qf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ki(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Jf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Of(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=If(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,zn(eb(n),i.a),u=0;u<Li.length;u++){var T=n[Li[u]];T.toggle!==n.toggle&&T.enabled&&(Hf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.d_,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d_,0,b.numIndices)}}return zn(t,e.g),r});function qf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eJ(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Jf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Xf=y(function(e,r,n){return D$(r,{g:n,f:{},h:e},as,ts)}),Zf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Qf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Kf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),es=v(function(e,r){e.contextAttributes.antialias=!0}),rs=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),ns=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function as(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};zn(function(t){return o(Kp,r,t)},e.h);var n=pr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Cf(function(){return o(Ic,e,n)})):(n=pr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ts(e,r){return r.f=e.f,Ic(r)}var D=wv,Xn=gv,Oc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Xn,e,l,$)}else{var u=c.a;return p(Xn,i,l,u)}});return p(Xn,i,p(Xn,e,r,t),a)}),go=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(go,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),Ti=function(e){return p(go,y(function(r,n,a){return o(D,P(r,n),a)}),z,e)},Uc=1,os=2,qc=0,we=function(e){return{$:1,a:e}},ho=v(function(e,r){return{$:3,a:e,b:r}}),Mi=v(function(e,r){return{$:0,a:e,b:r}}),Jc=v(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},is=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},cs=Uv,ls=f$,Be=wc,Br=v(function(e,r){return o(Gv,e,Na(r))}),_o=v(function(e,r){return h(o(Hv,e,r))}),Xc=function(e){return o(Br,`
    `,o(_o,`
`,e))},En=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Er=function(e){return p(En,v(function(r,n){return n+1}),0,e)},us=yv,vs=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),Zr=v(function(e,r){return p(vs,e,r,z)}),Zc=v(function(e,r){return p(us,e,o(Zr,0,Er(r)-1),r)}),cr=e$,Qc=function(e){var r=cr(e);return 97<=r&&r<=122},Kc=function(e){var r=cr(e);return r<=90&&65<=r},$s=function(e){return Qc(e)||Kc(e)},fs=function(e){var r=cr(e);return r<=57&&48<=r},ss=function(e){return Qc(e)||Kc(e)||fs(e)},Ve=function(e){return p(En,D,z,e)},an=jv,ds=v(function(e,r){return`

(`+(Be(e+1)+(") "+Xc(ms(r))))}),ms=function(e){return o(ps,e,z)},ps=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return $s(x)&&o(cs,ss,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(D,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,$=o(D,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Br,"",Ve(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Er(s))+" ways:"));return o(Br,`

`,o(D,g,o(Zc,ds,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Br,"",Ve(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Br,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(Xc(o(ls,4,f))+(`

`+m))}}),Ee=32,Dt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),At=sv,wo=Dv,yo=v(function(e,r){return pi(r)/pi(e)}),bs=Tv,kn=wo(o(yo,2,Ee)),el=L(Dt,0,kn,At,At),rl=mv,nl=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var gs=Av,Bt=dv,He=v(function(e,r){return O(e,r)>0?e:r}),hs=function(e){return{$:0,a:e}},xo=pv,_s=v(function(e,r){e:for(;;){var n=o(xo,Ee,e),a=n.a,t=n.b,i=o(D,hs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),ws=function(e){var r=e.a;return r},ys=v(function(e,r){e:for(;;){var n=wo(r/Ee);if(n===1)return o(xo,Ee,e).a;var a=o(_s,e,z),t=n;e=a,r=t;continue e}}),al=v(function(e,r){if(r.l){var n=r.l*Ee,a=gs(o(yo,Ee,n-1)),t=e?Ve(r.y):r.y,i=o(ys,t,r.l);return L(Dt,Bt(r.o)+n,o(He,5,a*kn),i,r.o)}else return L(Dt,Bt(r.o),kn,At,r.o)}),xs=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(al,!1,{y:a,l:n/Ee|0,o:t});var i=nl(p(rl,Ee,r,e)),c=e,l=r-Ee,u=n,$=o(D,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),Ss=v(function(e,r){if(e<=0)return el;var n=e%Ee,a=p(rl,n,e-n,r),t=e-n-Ee;return S(xs,r,t,e,z,a)}),Xe=function(e){return!e.$},A=l$,Z=a$,M=c$,fe=t$,wa=u$,Cs=v$,De=n$,So=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=_r("div"),Ps=function(e){return{$:2,a:e}},tl=v(function(e,r){return e}),ol=v(function(e,r){return{bB:r.bB,eH:e,cd:r.cd,eQ:r.eQ,fd:r.fd,cO:r.cO,b_:r.b_,fV:r.fV}}),lr=function(e){return e},Ls=lr,Di=qe(function(e,r,n,a,t,i){return{$7:i,dq:r,d2:a,d5:n,d8:e,d9:t}}),zs=qv,Fr=Nv,Ur=Iv,Rn=v(function(e,r){return e<1?r:p(Ur,e,Fr(r),r)}),Ya=Xv,Wa=function(e){return e===""},Ha=v(function(e,r){return e<1?"":p(Ur,0,e,r)}),il=Zv,Ai=ge(function(e,r,n,a,t){if(Wa(t)||o(zs,"@",t))return q;var i=o(Ya,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=il(o(Rn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(Di,e,o(Ha,c,t),u,r,n,a))}else return re(_e(Di,e,t,q,r,n,a))}),Bi=E(function(e,r,n,a){if(Wa(a))return q;var t=o(Ya,"/",a);if(t.b){var i=t.a;return S(Ai,e,o(Rn,i,a),r,n,o(Ha,i,a))}else return S(Ai,e,"/",r,n,a)}),Fi=y(function(e,r,n){if(Wa(n))return q;var a=o(Ya,"?",n);if(a.b){var t=a.a;return L(Bi,e,re(o(Rn,t+1,n)),r,o(Ha,t,n))}else return L(Bi,e,q,r,n)});v(function(e,r){if(Wa(r))return q;var n=o(Ya,"#",r);if(n.b){var a=n.a;return p(Fi,e,re(o(Rn,a+1,r)),o(Ha,a,r))}else return p(Fi,e,q,r)});var ks=Jv,Co=function(e){},jn=Rr,Ts=jn(0),cl=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(En,e,r,Ve(d)):L(cl,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),wr=y(function(e,r,n){return L(cl,e,r,0,n)}),ne=v(function(e,r){return p(wr,v(function(n,a){return o(D,e(n),a)}),z,r)}),ya=zt,Po=v(function(e,r){return o(ya,function(n){return jn(e(n))},r)}),Ms=y(function(e,r,n){return o(ya,function(a){return o(ya,function(t){return jn(o(e,a,t))},n)},r)}),Ds=function(e){return p(wr,Ms(D),jn(z),e)},As=w$,Bs=v(function(e,r){var n=r;return Sc(o(ya,As(e),n))}),Fs=y(function(e,r,n){return o(Po,function(a){return 0},Ds(o(ne,Bs(e),r)))}),Vs=y(function(e,r,n){return jn(0)}),Es=v(function(e,r){var n=r;return o(Po,e,n)});ir.Task=h$(Ts,Fs,Vs,Es);var Rs=Pc("Task"),Lo=v(function(e,r){return Rs(o(Po,e,r))}),js=ef,Ns=Ev,xa={$:1},ll=function(e){return{$:2,a:e}},Ga={$:0},Ge=v(function(e,r){return{$:0,a:e,b:r}}),K=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.A;return r.a},Ys=function(e){var r=e.a,n=e.b.S,a=e.b.A,t=e.b.aa;if(t.b){var i=t.a,c=t.b;return re(o(Ge,r,{A:i,aa:c,S:o(D,a,n)}))}else return q},ul=function(e){var r=e.b;return o(Ge,Ga,r)},$r=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ws=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cO.di?ul(n):n;case 2:var i=a.a.c0;return(O(i+r.eQ,tn(n).bB)>0?o(K,Ys,$r(o(Ge,xa,t))):lr)(o(Ge,ll({c0:i+r.eQ}),t));default:var c=t.A,l=c.a,u=c.b,$=o(ol,l.eH,We(r,{bB:l.bB+r.eQ})),s=o(e,$,u);return o(Ge,Ga,{A:P($,s),aa:z,S:o(D,t.A,t.S)})}}),vl=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Gs=v(function(e,r){return Ve(p(Hs,e,r,z))}),$l=y(function(e,r,n){if(r<=0)return z;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(D,_,o(D,c,o(D,s,o(D,b,o(Gs,r-4,w))))):o(D,_,o(D,c,o(D,s,o(D,b,p($l,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Is=v(function(e,r){return p($l,0,e,r)}),Os=v(function(e,r){var n=r.b.S,a=r.b.A,t=r.b.aa,i=ue(Ve(n),ue(h([a]),t)),c=o(Is,e,i),l=o(vl,e,i);if(l.b){var u=l.a,$=l.b;return o(Ge,xa,{A:u,aa:$,S:Ve(c)})}else{var s=Ve(c);if(s.b){var d=s.a,m=s.b;return o(Ge,xa,{A:d,aa:z,S:m})}else return r}}),Us=function(e){var r=e.b;return o(Ge,xa,r)},qs=function(e){var r=e.b;return o(Ge,ll({c0:tn(e).bB}),r)},Js=v(function(e,r){switch(e.$){case 1:return Us(r);case 2:return ul(r);case 3:return qs(r);default:var n=e.a;return o(Os,n,r)}}),fl=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Xs=v(function(e,r){return We(r,{au:e(r.au)})}),Zs=function(e){return{$:3,a:e}},sl=function(e){return{$:2,a:e}},dl=v(function(e,r){return{$:0,a:e,b:r}}),Qs=v(function(e,r){return{$:1,a:e,b:r}}),ye=v(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),X=function(e){return e<0?-e:e},zo=Qv,Ks=y(function(e,r,n){return o($r,0/0,zo(o(e,r,n)))}),ko=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ed=Wv,ml=function(e){return p(ed,D,z,e)},rd=v(function(e,r){var n=o(ko,function(a){return a!=="0"&&a!=="."},ml(r));return ue(e&&n?"-":"",r)}),pe=wc,Ft=Rv,pl=r$,bl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(Ft,"0",bl(t))}else{var i=cr(r);return i>=48&&i<57?o(Ft,pl(i+1),n):"0"}},Vt=Mv,nd=Vv,Ia=function(e){return o(Ft,e,"")},gl=y(function(e,r,n){return e<=0?n:p(gl,e>>1,ue(r,r),e&1?ue(n,r):n)}),Tn=v(function(e,r){return p(gl,e,r,"")}),Et=y(function(e,r,n){return ue(n,o(Tn,e-Fr(n),Ia(r)))}),Rt=Yv,hl=function(e){var r=o(_o,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},ad=function(e){var r=o(_o,"e",pe(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o($r,0,il(o(ks,"+",t)?o(Rn,1,t):t)),c=hl(n),l=c.a,u=c.b,$=ue(l,u),s=i<0?o($r,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,fl(Ia),an(ue(o(Tn,X(i),"0"),$))))):p(Et,i+1,"0",$);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},td=y(function(e,r,n){if(Vt(n)||nd(n))return pe(n);var a=n<0,t=hl(ad(X(n))),i=t.a,c=t.b,l=Fr(i)+r,u=ue(o(Tn,-l+1,"0"),p(Et,l,"0",ue(i,c))),$=Fr(u),s=o(He,1,l),d=o(e,a,p(Ur,s,$,u)),m=p(Ur,0,s,u),f=d?Rt(o($r,"1",o(ye,bl,an(Rt(m))))):m,g=Fr(f),b=f==="0"?f:r<=0?ue(f,o(Tn,X(r),"0")):O(r,Fr(c))<0?p(Ur,0,g-r,f)+("."+p(Ur,g-r,g,f)):ue(i+".",p(Et,r,"0",c));return o(rd,a,b)}),_l=td(v(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(cr(t))})),od=Ks(_l),id=y(function(e,r,n){var a=o(yo,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(od,t,n)}),wl=_v,Oa=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(wl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),fr={$:-2},Qr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,$,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,$,s,S(G,1,g,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),jt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,fr,fr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(wl,e,t);switch(u){case 0:return S(Qr,a,t,i,p(jt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(Qr,a,t,i,c,p(jt,e,r,l))}}),wn=y(function(e,r,n){var a=p(jt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),cd=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},yl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},Vi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,$,s,d),S(G,1,n,a,m,S(G,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,x))}else return e},ld=Ra(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(G,n,l,u,$,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Vi(r)}else break e;else return c.a,c.d,Vi(r);else break e;return r}}),ua=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,ua(t),l);var u=yl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Qr,$,s,d,ua(m),f)}else return fr}else return S(G,r,n,a,ua(t),l)}else return fr},yn=v(function(e,r){if(r.$===-2)return fr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(yn,e,i),c);var u=yl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Qr,$,s,d,o(yn,e,m),f)}else return fr}else return S(G,n,a,t,o(yn,e,i),c);else return o(ud,e,oo(ld,e,r,n,a,t,i,c))}),ud=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Ue(e,a)){var l=cd(c);if(l.$===-1){var u=l.b,$=l.c;return S(Qr,n,u,$,i,ua(c))}else return fr}else return S(Qr,n,a,t,i,o(yn,e,c))}else return fr}),vd=v(function(e,r){var n=o(yn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),Zn=y(function(e,r,n){var a=r(o(Oa,e,n));if(a.$)return o(vd,e,n);var t=a.a;return p(wn,e,t,n)}),$d=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Zn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Qs,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Zn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(dl,P(i,c),p(id,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Zn,r,ye(function(a){return a.$===3?Zs(n):a}));default:var r=e.a,n=e.b;return o(Zn,r,ye(function(a){return a.$===2?sl(n):a}))}},fd=function(e){return Xs($d(e))},sd=v(function(e,r){return o(ne,fd(e),r)}),dd=v(function(e,r){return We(r,{eH:o(sd,e,r.eH)})}),md=v(function(e,r){var n=r.a,a=r.b;return o(Ge,n,We(a,{A:o(fl,dd(e),a.A)}))}),pd=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),bd=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ge,a,We(t,{A:o(pd,o(e,i.a,r),i)}))}),gd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return We(a,{aL:!a.aL});case 2:var t=n.a;return We(a,{F:p(Ws,e,t,a.F)});case 3:var i=n.a;return We(a,{F:o(md,i,a.F)});case 4:var c=n.a;return We(a,{F:p(bd,r,c,a.F)});default:var l=n.a;return We(a,{F:o(Js,l,a.F)})}}),hd=v(function(e,r){return o(Ge,Ga,{A:P(e,r(e)),aa:z,S:z})}),_d=y$,Ei=_d(z),Sa=i$,Mn=o$,wd=L$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fV:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return De({ev:d,eI:s,di:$,eP:u,fe:l,fv:c,fA:i,fF:t,eo:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Sa(Mn)))},o(M,"left",Z))},o(M,"pressedKeys",Sa(Mn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return De({di:$,dt:u,fj:l,fB:c,fC:i,eo:t,fY:a,f0:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(A,function(r){return o(A,function(n){return De({e1:n,fW:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(A,function(e){return o(A,function(r){return De({eK:r,eL:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe))))),yd=function(e){return{$:4,a:e}},xd={$:0},Sd=xc,Je=v(function(e,r){return o(kc,e,Sd(r))}),U=Je("className"),Cd=function(e){var r=e.b.A;return r.b},Ca=Je("id"),Pd=A$,Pa=Pd,Ld=B$,le=Ld,zd={$:1},kd=function(e){return{$:3,a:e}},Td=function(e){return{$:5,a:e}},Ri=_r("a"),To=_r("button"),Md=Vn("d"),xl=Lc("http://www.w3.org/2000/svg"),Dd=xl("path"),Ad=xl("svg"),Bd=Vn("viewBox"),xn=function(e){return o(Ad,h([Bd("0 0 100 100"),o(le,"width","100%"),o(le,"height","100%")]),h([o(Dd,h([Md(e)]),z)]))},ji=function(e){return o(Je,"href",V$(e))},qr={eO:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eX:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",e0:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ft:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fu:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",cO:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fx:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fH:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fQ:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fS:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f4:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Fd=function(e){return{$:0,a:e}},Sl=zc,Cl=v(function(e,r){return o(Sl,e,Fd(r))}),Mo=function(e){return o(Cl,"click",De(e))},Ni=Je("target"),Vd=Je("title"),Nt=v(function(e,r){if(r.$===-2)return fr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Nt,e,i),o(Nt,e,c))}),Ed=kt,Fe=Ed,Rd=function(e){return p(go,y(function(r,n,a){return o(D,n,a)}),z,e)},jd=v(function(e,r){return{$:3,a:e,b:r}}),Nd=v(function(e,r){return{$:2,a:e,b:r}}),Yd=v(function(e,r){return{$:0,a:e,b:r}}),Wd=v(function(e,r){return{$:1,a:e,b:r}}),Ua=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Do=L(Ua,0/255,0/255,0/255,1),Hd=xc,Gd=v(function(e,r){return o(kc,e,Hd(r))}),Id=Gd("checked"),Re=Bv,Od=y(function(e,r,n){return ue(o(Tn,e-Fr(n),Ia(r)),n)}),La=Sv,Pl=function(e){var r=function(n){return n<10?Be(n):Ia(pl(87+n))};return e<16?r(e):ue(Pl(e/16|0),r(o(La,16,e)))},Ud=o(K,Pl,o(Od,2,"0")),Ao=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b8:a,cf:n,cR:r}},qd=function(e){var r=Ao(e),n=r.cR,a=r.cf,t=r.b8;return o(Br,"",o(D,"#",o(ne,o(K,Re,Ud),h([n*255,a*255,t*255]))))},Yt=Je("htmlFor"),Jd=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),za=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Xd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),Nn=v(function(e,r){return p(wr,Xd(e),z,r)}),Ll=E(function(e,r,n,a){return{e6:r,fh:e,fo:n,fK:a}}),Zd=of,Qd=Kv,Kd=v(function(e,r){if(r.$)return we(e);var n=r.a;return ve(n)}),em=tf,rm=function(e){return o(em,{eD:!1,fk:!1},e)},on=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},nm=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ve(e(n))}}),am=function(e){return{$:2,a:e}},tm=function(e){return{$:0,a:e}},om=function(e){return{$:1,a:e}},at=v(function(e,r){return cr(r)-cr(e)}),tt=y(function(e,r,n){var a=cr(n);return O(cr(e),a)<1&&O(a,cr(r))<1}),im=v(function(e,r){var n=function(t){return O(t,e)<0?ve(t):we(om(r))},a=p(tt,"0","9",r)?ve(o(at,"0",r)):p(tt,"a","z",r)?ve(10+o(at,"a",r)):p(tt,"A","Z",r)?ve(10+o(at,"A",r)):we(tm(r));return o(za,n,a)}),zl=v(function(e,r){var n=an(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(za,function(c){return o(za,function(l){return ve(c+l*e)},o(zl,e,i))},o(im,e,t))}),cm=v(function(e,r){return 2<=e&&e<=36?o(zl,e,Rt(r)):we(am(e))}),lm=cm(16),um=y(function(e,r,n){return L(Ua,e,r,n,1)}),kl=E(function(e,r,n,a){return L(Ua,e,r,n,a)}),Yn=xv,vm=v(function(e,r){var n=o(Yn,10,e);return Re(r*n)/n}),$m=Ov,fm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ml(n);if(a.b&&!a.b.b){var t=a.a;return Qd(h([t,t]))}else return n};return o(K,$m,o(K,function(n){return o(ye,function(a){return p(Zd,1,a,n)},rm(e))},o(K,Jd(on),o(K,ye(function(n){return n.fK}),o(K,ye(Nn(lr)),o(K,Kd("Parsing hex regex failed"),za(function(n){var a=o(ne,o(K,r,o(K,lm,nm(bs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ve(L(kl,t/255,c/255,u/255,o(vm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(um,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ka=_r("input"),Wt=_r("label"),Ht=Je("name"),Tl=v(function(e,r){return p(wr,M,r,e)}),sm=o(Tl,h(["target","checked"]),Z),dm=function(e){return o(Cl,"change",o(wa,e,sm))},mm=function(e){return P(e,!0)},pm=function(e){return{$:1,a:e}},bm=v(function(e,r){return o(Sl,e,pm(r))}),gm=o(Tl,h(["target","value"]),Mn),Bo=function(e){return o(bm,"input",o(wa,mm,o(wa,e,gm)))},Ml=Je("max"),Dl=Je("min"),Al=function(e){return o(Je,"step",e)},Ta=Je("type"),Fo=Je("value"),Yi=function(e){var r=e.ci,n=e.c5,a=e.cy,t=e.cu,i=e.c_,c=e.cD;return o(I,z,h([o(Wt,h([Yt(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([Fe(r)])),o(I,h([U("inline-block float-right")]),h([Fe(pe(n))]))]))])),o(ka,h([Ta("range"),o(le,"width","100%"),Ca(r),Ht(r),Dl(pe(a)),Ml(pe(t)),Fo(pe(n)),Al(pe(i)),Bo(o(K,zo,o(K,$r(42),c)))]),z)]))},hm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),_m=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,z,h([o(I,h([U("mb-2")]),h([o(Wt,h([Yt(e)]),h([Fe(e)]))])),o(ka,h([Ta("checkbox"),Ca(e),Ht(e),dm(jd(e)),Id(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Yi({ci:e,cu:i,cy:t,cD:Yd(e),c_:.01*(i-t),c5:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Yi({ci:e,cu:i,cy:t,cD:o(K,Re,Wd(e)),c_:1,c5:c});default:var c=r.a;return o(I,z,h([o(I,h([o(le,"margin-bottom","6px")]),h([o(Wt,h([Yt(e)]),h([Fe(e)]))])),o(ka,h([Ta("color"),o(le,"width","100%"),o(le,"height","26px"),o(le,"padding","0px"),Ca(e),Ht(e),Bo(function(l){return o(Nd,e,o(hm,Do,fm(l)))}),Fo(qd(c))]),z)]))}}),wm=function(e){return o(I,h([U("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([Fe(e.fl)])),o(I,h([U("pl-2 pr-2")]),Rd(o(Nt,_m,e.au)))]))},ym=function(e){return o(I,h([U("text-xs text-white60")]),o(ne,wm,e))},xm=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([Fe("clock: "+o(_l,3,tn(e).bB))]))},Sm=function(e){e.a;var r=e.b.S;return o(ye,function(n){return Re(60/(tn(e).bB-n))},o(ye,o(K,ws,function(n){return n.bB}),on(o(vl,59,r))))},Cm=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Sm(e);if(r.$===1)return h([Fe("... Fps")]);var n=r.a;return h([Fe(Be(n)+" Fps")])}())},Pm=function(e){return{$:0,a:e}},Lm=function(e){var r=e.b.S;return Er(r)},zm=function(e){var r=e.b.S;e.b.A;var n=e.b.aa;return Er(r)+1+Er(n)},km=function(e){return o(ka,h([U("absolute w-full"),Ta("range"),Dl(Be(0)),Ml(Be(zm(e)-1)),Fo(Be(Lm(e))),Al(Be(1)),Bo(o(K,zo,o(K,$r(42),o(K,Re,Pm))))]),z)},Wi={$:1},Tm={$:3},Mm={$:2},Bl=function(e){return!e.b},Hi=v(function(e,r){return o(To,h([U("px-2 bg-black40"),U(r),Mo(e)]),h([Fe("REC")]))}),Gi=v(function(e,r){return o(To,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),Mo(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([xn(e)]))]))}),Dm=function(e){var r=e.a,n=e.b.aa;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(Hi,Wi,"text-red-500 font-bold");case 1:return o(Hi,Mm,"text-white80 font-bold");default:return o(I,z,z)}}(),function(){switch(r.$){case 0:return o(I,z,z);case 1:return Bl(n)?o(I,z,z):o(Gi,qr.fu,Tm);default:return o(Gi,qr.ft,Wi)}}()]))},Am=function(e){return o(I,h([U("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([km(e),Dm(e),Cm(e),xm(e)]))},Bm=function(e){var r=e.a;return Ue(r,Ga)},Fm=v(function(e,r){var n=Bm(r.F)?o(I,z,z):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(le,"left",pe(e.cO.fY+.5*e.b_.fW)+"px"),o(le,"top",pe(-e.cO.f0+.5*e.b_.e1)+"px")]),h([o(I,h([U(e.cO.dt?"fill-black80":"fill-white40")]),h([xn(qr.cO)]))]));return o(I,z,h([n]))}),Vm=v(function(e,r){var n=o(To,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Mo(zd),Vd("Distraction Free Mode")]),h([xn(qr.f4)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(Ri,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),ji("https://twitter.com/AzizErkalSelman"),Ni("_blank")]),h([xn(qr.fQ)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(Ri,h([U("fill-githubCat40 hover:fill-githubCat"),ji("https://github.com/erkal/elm-3d-playground-exploration"),Ni("_blank")]),h([xn(qr.eX)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,z,h([o(I,h([U("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(le,"height",pe(e.b_.e1-80)+"px")]),h([o(Pa,kd,ym(tn(r.F).eH))])),o(I,h([U("absolute bottom-0 left-10 h-20"),o(le,"width",e.b_.fW>600?"600px":pe(e.b_.fW-40)+"px")]),h([o(Pa,Td,Am(r.F))])),o(Fm,e,r)]))}),Em=y(function(e,r,n){var a=Cd(n.F),t=tn(n.F);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(le,"width",pe(t.b_.fW)+"px"),o(le,"height",pe(t.b_.e1)+"px")]),h([o(I,h([U("fixed")]),h([o(Pa,tl(xd),o(e,t,a))])),o(I,h([Ca("gui")]),h([o(Vm,t,n),o(Pa,yd,o(r,t,a))]))]))}),Rm=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return P(L(gd,r,i,u,$),Ei)}),l=function(u){var $=o(ol,n,u.e8);return P({aL:u.e8.b_.fW<500,F:o(hd,$,a)},Ei)};return js({e7:l,fL:tl(wd(Ps)),fR:c,fU:o(Em,e,t)})}),jm=E(function(e,r,n,a){return _e(Rm,e,r,n,a,v(function(t,i){return o(I,z,z)}),y(function(t,i,c){return c}))}),Fl={$:0},mr=v(function(e,r){return{$:0,a:e,b:r}}),Pe=v(function(e,r){return{$:0,a:e,b:r}}),Nm=h([o(mr,P(-1,1),o(Pe,2,0)),o(mr,P(-1,0),o(Pe,2,0)),o(mr,P(-1,-1),o(Pe,2,0)),o(mr,P(0,-1),o(Pe,2,0)),o(mr,P(0,1),o(Pe,2,0)),o(mr,P(1,1),o(Pe,2,0)),o(mr,P(1,0),o(Pe,2,0)),o(mr,P(1,-1),o(Pe,2,0))]),Ym=function(e){return{aB:Fl,bt:Nm}},ot=v(function(e,r){return P(e,sl(r))}),Wm=y(function(e,r,n){return{au:n,fb:r,fl:e}}),Vl=fr,Hm=function(e){return p(En,v(function(r,n){var a=r.a,t=r.b;return p(wn,a,t,n)}),Vl,e)},Gm=y(function(e,r,n){return p(Wm,e,r,Hm(n))}),it=Gm,Dr=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(dl,P(a,t),n))}),Me=Cv,ct=function(e){return e/255},lt=y(function(e,r,n){return L(Ua,ct(e),ct(r),ct(n),1)}),Im=h([p(it,"Camera",!0,h([p(Dr,"camera distance",P(3,20),10),p(Dr,"camera azimuth",P(-Me,Me),0),p(Dr,"camera elevation",P(-Me/2,Me/2),0)])),p(it,"Parameters",!0,h([p(Dr,"cubes side length",P(.5,1),.9),p(Dr,"duration of rolling animation",P(.1,1),.25)])),p(it,"Colors and light",!0,h([o(ot,"color 1",p(lt,244,88,67)),o(ot,"color 2",p(lt,47,41,43)),o(ot,"board color",p(lt,223,224,226)),p(Dr,"sunlight azimuth",P(-Me,Me),2),p(Dr,"sunlight elevation",P(-Me,0),-2)]))]),Om=v(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Oa,e,r.au))}),Um=v(function(e,r){return o($r,0,on(o(Nn,Om(e),r)))}),qm=v(function(e,r){return o(Um,e,r.eH)}),br=qm,Jm=kv,El=function(e){return e},Qe=function(e){return e},Ma=function(e){var r=e;return-r},Xm=v(function(e,r){var n=e,a=r;return{fY:n.f0*a.da-n.da*a.f0,f0:n.da*a.fY-n.fY*a.da,da:n.fY*a.f0-n.f0*a.fY}}),Rl=function(e){var r=e;return r.c8},jl=function(e){var r=e;return r.c9},Zm=function(e){return o(Xm,Rl(e),jl(e))},cn=function(e){var r=e;return r.cE},Kr=Pv,en=Lv,va=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Kr(c),u=en(c),$=a.eN,s=$,d=s.fY*u,m=l*d,f=d*d,g=s.f0*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.da*u,T=l*C,Y=2*(w-T),j=2*(w+T),R=d*C,N=2*(R+b),W=2*(R-b),F=g*C,J=2*(F-m),Q=2*(F+m),ie=C*C,$e=1-2*(x+ie),oe=1-2*(f+ie);return{fY:$e*i.fY+Y*i.f0+N*i.da,f0:j*i.fY+oe*i.f0+J*i.da,da:W*i.fY+Q*i.f0+_*i.da}}),Wn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Kr(c),u=en(c),$=a.cE,s=$,d=i.fY-s.fY,m=i.f0-s.f0,f=i.da-s.da,g=a.eN,b=g,w=b.fY*u,x=l*w,_=w*w,C=b.f0*u,T=l*C,Y=w*C,j=C*C,R=1-2*(_+j),N=b.da*u,W=l*N,F=2*(Y-W),J=2*(Y+W),Q=w*N,ie=2*(Q+T),$e=2*(Q-T),oe=C*N,de=2*(oe-x),Te=2*(oe+x),Ce=N*N,yr=1-2*(j+Ce),xr=1-2*(_+Ce);return{fY:s.fY+yr*d+F*m+ie*f,f0:s.f0+J*d+xr*m+de*f,da:s.da+$e*d+Te*m+R*f}}),jr=function(e){return e},Nr=function(e){var r=e;return r.c8},Yr=function(e){var r=e;return r.c9},Wr=function(e){var r=e;return r.db},Nl=y(function(e,r,n){return jr({cE:p(Wn,e,r,cn(n)),c8:p(va,e,r,Nr(n)),c9:p(va,e,r,Yr(n)),db:p(va,e,r,Wr(n))})}),Ii=y(function(e,r,n){return p(Nl,e(n),r,n)}),Vo=function(e){var r=e;return r.eN},ln=v(function(e,r){var n=e,a=r;return{fY:a.fY+n.fY,f0:a.f0+n.f0,da:a.da+n.da}}),Yl=v(function(e,r){return jr({cE:o(ln,e,cn(r)),c8:Nr(r),c9:Yr(r),db:Wr(r)})}),Qm=v(function(e,r){var n=e,a=r;return{fY:n*a.fY,f0:n*a.f0,da:n*a.da}}),Km=y(function(e,r,n){return o(Yl,o(Qm,r,e),n)}),e0=y(function(e,r,n){return p(Km,Vo(e(n)),r,n)}),er=v(function(e,r){return{eN:r,cE:e}}),r0=function(e){var r=e;return o(er,r.cE,r.c8)},n0=function(e){var r=e;return o(er,r.cE,r.c9)},a0=function(e){var r=e;return o(er,r.cE,r.db)},t0=function(e){var r=jr({cE:e.aR,c8:jl(e.dp),c9:Zm(e.dp),db:Rl(e.dp)}),n=p(e0,a0,e.ce,p(Ii,r0,Ma(e.bE),p(Ii,n0,e.by,r)));return n},o0=function(e){return{$:0,a:e}},Se=function(e){var r=e;return X(r)},$a=function(e){var r=e;return .5*r},i0=zv,c0=function(e){var r=e;return i0(r)},l0=function(e){var r=$a(Se(e.eq)),n=c0(r);return{cQ:o0(n),c6:e.c6}},Ke=function(e){return e},Mr={fY:0,f0:0,da:0},Wl=lr,ur=function(e){return e},Hl=ur({fY:1,f0:0,da:0}),qa=Hl,Eo=ur({fY:0,f0:0,da:1}),Hn=Eo,u0=Wl({cE:Mr,c8:Hn,c9:qa}),v0=function(e){var r=e.aR,n=e.by,a=e.bE,t=e.ce;return l0({eq:Ke(2*Jm(.5)),c6:t0({by:Ke(n),ce:Qe(t),bE:Ke(a),aR:El(r),dp:u0})})},Gl=function(e){return v0({by:o(br,"camera azimuth",e),ce:o(br,"camera distance",e),bE:o(br,"camera elevation",e),aR:{fY:0,f0:0,da:0}})},$0={$:0},Ro=v(function(e,r){return p(wr,v(function(n,a){return e(n)?o(D,n,a):a}),z,r)}),f0={$:1},s0=v(function(e,r){return{$:2,a:e,b:r}}),d0=function(e){return ko(function(r){var n=r.a;return Ue(e,n)})},m0=function(e){var r=e.a,n=e.b;return O(r,-1)>-1&&r<=1&&O(n,-1)>-1&&n<=1},p0=v(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return P(n,a+1);case 1:return P(n,a-1);case 2:return P(n-1,a);default:return P(n+1,a)}}),Il=function(e){return e?0:1},Qn=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(Pe,r,n);case 1:return o(Pe,2,n);default:return o(Pe,1,Il(n))}},Kn=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(Pe,2,Il(n));case 1:return o(Pe,r,n);default:return o(Pe,0,n)}},b0=function(e){switch(e){case 0:return o(K,Qn,o(K,Qn,Qn));case 1:return Qn;case 2:return o(K,Kn,o(K,Kn,Kn));default:return Kn}},g0=v(function(e,r){var n=r.a,a=r.b;return o(mr,o(p0,e,n),o(b0,e,a))}),h0=v(function(e,r){var n=e.a,a=on(o(Nn,function(l){var u=o(g0,l,e),$=u.a;return o(d0,$,r)||!m0($)?q:re(P(u,l))},h([0,1,2,3])));if(a.$===1)return f0;var t=a.a,i=t.a,c=t.b;return o(s0,c,o(D,i,o(Ro,function(l){var u=l.a;return!Ue(u,n)},r)))}),_0=v(function(e,r){var n=function(i){var c=i.a;return Ue(c,e)},a=on(o(Ro,n,r));if(a.$===1)return $0;var t=a.a;return o(h0,t,r)}),w0=function(e){return{$:1,a:e}},y0=ge(function(e,r,n,a,t){var i=t.aB;return i.$?t:We(t,{aB:w0({cz:a,ec:n,eh:r,cZ:e.bB})})}),x0=y(function(e,r,n){var a=e.fY,t=e.f0,i=P(Re(a),Re(t)),c=o(_0,i,n.bt);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return S(y0,r,i,l,u,n)}}),S0=y(function(e,r,n){return{fY:e,f0:r,da:n}}),bn=function(e){return Ke(Me*(e/180))},ea=function(e){return e},fa=function(e){var r=e;return r},C0=v(function(e,r){var n=e,a=r;return a.fY*n.fY+a.f0*n.f0+a.da*n.da}),te=v(function(e,r){var n=r;return e*n}),Ol=function(e){var r=e;return r.cE},P0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.fn,l=c;return(a.fY-i.fY)*l.fY+(a.f0-i.f0)*l.f0+(a.da-i.da)*l.da}),L0=y(function(e,r,n){var a=e,t=r,i=n;return{fY:i.fY+t*a.fY,f0:i.f0+t*a.f0,da:i.da+t*a.da}}),z0=v(function(e,r){var n=Vo(r),a=e,t=a.fn,i=o(C0,t,n);if(i){var c=Ol(r),l=o(P0,e,c),u=o(te,-1/i,l);return re(p(L0,n,u,c))}else return q}),k0=v(function(e,r){return{fY:e,f0:r}}),Oi=v(function(e,r){var n=e,a=r;return n*a}),T0=function(e){var r=e;return r},Ui=function(e){var r=e;return T0(r.ey)},M0=function(e){var r=e;return r.aK},Vr=Fv,D0=function(e){var r=e,n=o(He,X(r.fY),o(He,X(r.f0),X(r.da)));if(n){var a=r.da/n,t=r.f0/n,i=r.fY/n,c=Vr(i*i+t*t+a*a);return re({fY:i/c,f0:t/c,da:a/c})}else return q},Ul=v(function(e,r){var n=r;return n/e}),Gt=function(e){var r=e;return cn(r)},jo=ur({fY:0,f0:0,da:-1}),A0=v(function(e,r){var n=e,a=r;return a/n}),B0=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fY:$.fY*a.fY+l.fY*a.f0+i.fY*a.da,f0:$.f0*a.fY+l.f0*a.f0+i.f0*a.da,da:$.da*a.fY+l.da*a.f0+i.da*a.da}}),Dn=function(e){var r=e;return{fY:-r.fY,f0:-r.f0,da:-r.da}},It=function(e){var r=e;return Dn(Wr(r))},F0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c8,l=c;return(a.fY-i.fY)*l.fY+(a.f0-i.f0)*l.f0}),No=y(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,da:i}}),V0=E(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cE,$=u,s=t.db,d=s,m=t.c9,f=m,g=t.c8,b=g;return{fY:$.fY+i*b.fY+c*f.fY+l*d.fY,f0:$.f0+i*b.f0+c*f.f0+l*d.f0,da:$.da+i*b.da+c*f.da+l*d.da}}),E0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c9,l=c;return(a.fY-i.fY)*l.fY+(a.f0-i.f0)*l.f0}),tr=0,R0=y(function(e,r,n){var a=e,t=o(E0,Ui(r),n),i=o(F0,Ui(r),n),c=a.c6,l=c,u=M0(r);u.a;var $=u.b,s=a.cQ;if(s.$){var g=s.a,b=o(A0,$,g),w=L(V0,l,o(Oi,b,i),o(Oi,b,t),tr);return o(er,w,It(a.c6))}else{var d=s.a,m=Ma(o(Ul,d,o(te,.5,$))),f=o(B0,l,o($r,jo,D0(p(No,i,t,m))));return o(er,Gt(a.c6),f)}}),Ot=function(e){var r=e;return{fY:Kr(r),f0:en(r)}},j0=function(e){var r=e;return{fY:-r.f0,f0:r.fY}},N0=function(e){return e},Y0=v(function(e,r){return N0({cE:r,c8:e,c9:j0(e)})}),W0=v(function(e,r){return o(Y0,Ot(e),r)}),H0=y(function(e,r,n){var a=e.a,t=e.b;return{ey:o(W0,r,n),aK:P(Se(a),Se(t))}}),Cr=function(e){var r=e;return r.fY},G0=v(function(e,r){var n=e,a=r;return{fY:n,f0:a}}),Pr=function(e){var r=e;return r.f0},Lr=function(e){var r=e;return r.da},I0=E(function(e,r,n,a){var t=n.fY,i=n.f0,c=function($){return p(S0,fa(Cr($)),fa(Pr($)),fa(Lr($)))},l=p(H0,P(ea(r.fW),ea(r.e1)),bn(0),o(k0,0,0)),u=o(G0,ea(t),ea(i));return o(ye,c,o(z0,a,p(R0,e,l,u)))}),O0=v(function(e,r){return{fn:e,cE:r}}),U0=v(function(e,r){var n=r;return o(O0,n.fn,o(ln,e,n.cE))}),q0=v(function(e,r){return{fn:r,cE:e}}),J0=o(q0,Mr,Hn),X0=E(function(e,r,n,a){return L(I0,r,n,a,o(U0,p(No,Qe(0),Qe(0),Qe(e)),J0))}),Z0=v(function(e,r){if(e.cO.dt){var n=L(X0,o(br,"cubes side length",e),Gl(e),e.b_,e.cO);if(n.$===1)return r;var a=n.a;return p(x0,a,e,r)}else return r}),Q0=v(function(e,r){var n=r.aB;if(n.$){var a=n.a.cZ,t=n.a.cz;return O(e.bB-a,o(br,"duration of rolling animation",e))>0?We(r,{aB:Fl,bt:t}):r}else return r}),K0=v(function(e,r){return o(Q0,e,o(Z0,e,r))}),ep=_r("br"),qi=_r("p"),rp=o(I,h([U("absolute w-full text-center")]),h([o(I,h([U("font-bold pt-2 text-lg")]),h([Fe("Eight Rolling Cubes Puzzle"),o(ep,z,z),Fe("by John Harris")])),o(qi,z,h([Fe("Can you make all the red faces look down")])),o(qi,z,h([Fe(" with the center cell vacant?")]))])),Yo=v(function(e,r){return{$:0,a:e,b:r}}),ut=v(function(e,r){var n=e,a=r;return O(a,n)>-1}),vt=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),gr=v(function(e,r){var n=e,a=r;return a-n}),np=ur({fY:-1,f0:0,da:0}),ap=ur({fY:0,f0:-1,da:0}),ql=ur({fY:0,f0:1,da:0}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,da:i}}),tp=qe(function(e,r,n,a,t,i){var c=o(ut,n,i)?Eo:jo,l=o(ut,r,t)?ql:ap,u=o(ut,e,a)?Hl:np,$=B(Se(o(gr,e,a)),Se(o(gr,r,t)),Se(o(gr,n,i))),s=p(me,o(vt,e,a),o(vt,r,t),o(vt,n,i)),d=jr({cE:s,c8:u,c9:l,db:c});return{ey:d,aK:$}}),op=v(function(e,r){return _e(tp,Cr(e),Pr(e),Lr(e),Cr(r),Pr(r),Lr(r))}),Ut=y(function(e,r,n){return{fY:e,f0:r,da:n}}),Da=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Yo,e,o(op,p(Ut,-c,-l,-u),p(Ut,c,l,u)))}),ar=function(e){return e*Me/180},ip=v(function(e,r){return o(ye,function(n){if(n.$===2){var a=n.a;return a}else return Do},o(Oa,e,r.au))}),cp=v(function(e,r){return o($r,Do,on(o(Nn,ip(e),r)))}),lp=v(function(e,r){return o(cp,e,r.eH)}),qt=lp,Wo=function(e){return{$:5,a:e}},Ho=function(e){return Wo(e)},Jt=function(e){return{$:0,a:e}},Jl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Xl=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),$t=function(e){return p(Xl,0,1,e<=.04045?e/12.92:o(Yn,(e+.055)/1.055,2.4))},Gn=uf,up=function(e){var r=Ao(e),n=r.cR,a=r.cf,t=r.b8;return p(Gn,$t(n),$t(a),$t(t))},Aa=function(e){return p(Jl,0,Jt(up(e)),Jt(0))},Zl=v(function(e,r){return{$:2,a:e,b:r}}),Ql=v(function(e,r){return{$:4,a:e,b:r}}),Kl=v(function(e,r){return{$:3,a:e,b:r}}),eu=v(function(e,r){return{$:1,a:e,b:r}}),vp=y(function(e,r,n){return{fY:e,f0:r,da:n}}),$p=function(e){var r=e;return r},Go=function(e){var r=e;return $p(r.ey)},Io=function(e){var r=e;return r.aK},fp=v(function(e,r){return{ey:o(Yl,e,Go(r)),aK:Io(r)}}),sp=v(function(e,r){var n=r;return o(er,o(ln,e,n.cE),n.eN)}),dp=v(function(e,r){var n=r;return{k:o(sp,e,n.k),ff:n.ff,fw:n.fw}}),Oo=function(e){var r=e;return r},mp=function(e){return e},ru=v(function(e,r){var n=Oo(r),a=n.a,t=n.b;return mp(P(e(a),e(t)))}),pp=v(function(e,r){return o(ru,ln(e),r)}),Uo=function(e){var r=e;return r.eF},qo=function(e){var r=e;return r.fw},nu=v(function(e,r){return{eF:r,fw:Se(e)}}),bp=v(function(e,r){return o(nu,qo(r),o(ln,e,Uo(r)))}),au=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),gp=v(function(e,r){return o(au,ln(e),r)}),Ja=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(vp,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Yo,s,o(fp,i,c));case 1:var s=r.a,l=r.b;return o(eu,s,o(gp,i,l));case 3:var s=r.a,u=r.b;return o(Kl,s,o(bp,i,u));case 2:var s=r.a,$=r.b;return o(Zl,s,o(dp,i,$));case 4:var s=r.a,d=r.b;return o(Ql,s,o(pp,i,d));default:var m=r.a;return Wo(o(ne,Ja(B(n,a,t)),m))}}),tu=function(e){return Ja(B(e,0,0))},sa=function(e){return Ja(B(0,0,e))},hp=y(function(e,r,n){return{ey:p(Nl,e,r,Go(n)),aK:Io(n)}}),_p=v(function(e,r){var n=o(Wn,e,r),a=o(va,e,r);return function(t){var i=t;return o(er,n(i.cE),a(i.eN))}}),wp=y(function(e,r,n){var a=n;return{k:p(_p,e,r,a.k),ff:a.ff,fw:a.fw}}),yp=y(function(e,r,n){return o(ru,o(Wn,e,r),n)}),xp=y(function(e,r,n){return o(nu,qo(n),p(Wn,e,r,Uo(n)))}),Sp=y(function(e,r,n){return o(au,o(Wn,e,r),n)}),In=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Yo,l,p(hp,e,r,a));case 1:var l=n.a,t=n.b;return o(eu,l,p(Sp,e,r,t));case 3:var l=n.a,i=n.b;return o(Kl,l,p(xp,e,r,i));case 2:var l=n.a,c=n.b;return o(Zl,l,p(wp,e,r,c));case 4:var l=n.a,u=n.b;return o(Ql,l,p(yp,e,r,u));default:var $=n.a;return Wo(o(ne,o(In,e,r),$))}}),Cp=o(er,Mr,Hn),ft=v(function(e,r){return p(In,Cp,Ke(e),r)}),Pp=function(e){var r=o(qt,"board color",e),n=o(tu,-1.55,o(Da,Aa(r),B(.1,3.2,.2))),a=o(sa,-.5,o(Da,Aa(r),B(3,3,1)));return Ho(h([n,o(ft,ar(90),n),o(ft,ar(180),n),o(ft,ar(270),n),a]))},Lp=function(e){return Ja(B(0,e,0))},Sn=v(function(e,r){return O(e,r)<0?e:r}),zp=v(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(In,o(er,El(n),ur({fY:t,f0:i,da:c})),Ke(r))}),kp=y(function(e,r,n){var a=r.aB;if(a.$){var t=a.a.cZ,i=a.a.eh,c=a.a.ec;if(a.a.cz,Ue(i,n)){var l=o(br,"duration of rolling animation",e),u=(e.bB-t)/l,$=u,s=o(Sn,ar(90),$*ar(90)),d=function(){switch(c){case 0:return P({fY:.5,f0:.5,da:-.5},B(-1,0,0));case 1:return P({fY:-.5,f0:-.5,da:-.5},B(1,0,0));case 2:return P({fY:-.5,f0:.5,da:-.5},B(0,-1,0));default:return P({fY:.5,f0:-.5,da:-.5},B(0,1,0))}}();return o(zp,d,s)}else return lr}else return lr}),Tp=o(er,Mr,qa),st=v(function(e,r){return p(In,Tp,Ke(e),r)}),Jo=ql,Mp=o(er,Mr,Jo),Ji=v(function(e,r){return p(In,Mp,Ke(e),r)}),Dp=y(function(e,r,n){var a=n.a,t=a.a,i=a.b,c=n.b,l=o(br,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,st(ar(180));case 1:return c.a,c.b,st(ar(90));default:return c.a,c.b,Ji(-ar(90))}else switch(c.a){case 2:return c.a,c.b,lr;case 1:return c.a,c.b,st(-ar(90));default:return c.a,c.b,Ji(ar(90))}}(),$=o(qt,"color 2",e),s=o(qt,"color 1",e),d=o(sa,l/4,o(Da,Aa(s),B(l,l,l/2))),m=o(sa,-(l/4),o(Da,Aa($),B(l,l,l/2)));return o(Lp,i,o(tu,t,o(sa,l/2,L(kp,e,r,P(t,i),u(Ho(h([d,m])))))))}),Ap=v(function(e,r){return Ho(o(ne,o(Dp,e,r),r.bt))}),Bp=function(e){return e},Fp=function(e){return Qe(.01*e)},Xi=function(e){return e},Vp=function(e){return e},Ep=function(e){return{$:0,a:e}},Rp=Ep,jp={$:3},Np=jp,Yp=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Wp=Yp,Hp=v(function(e,r){return r.b?p(wr,D,r,e):e}),Ie=function(e){return p(wr,Hp,z,e)},Xo=v(function(e,r){return Ie(o(ne,e,r))}),Gp=function(e){return{$:1,a:e}},Ip=Gp,Op=function(e){return o(Vn,"height",Be(e))},Up=function(e){return M$(F$(e))},qp=Up,Jp=function(e){return{$:2,a:e}},Xp=Jp,Zp=function(e){return o(Br,"",e)},Qp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Re(l*1e3)/1e3},c=function(l){return Re(l*1e4)/100};return Zp(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},Kp=v(function(e,r){switch(r.$){case 0:return o(Zf,e,r);case 1:return o(Qf,e,r);case 2:return o(Kf,e,r);case 3:return o(es,e,r);case 4:return o(rs,e,r);default:return o(ns,e,r)}}),eb=v(function(e,r){switch(r.$){case 0:return o(Lf,e,r);case 1:return o(zf,e,r);case 2:return o(kf,e,r);case 3:return o(Tf,e,r);case 4:return o(Mf,e,r);case 5:return o(Df,e,r);case 6:return o(Af,e,r);case 7:return o(Bf,e,r);default:return Ff(e)}}),rb=y(function(e,r,n){return p(Xf,e,r,n)}),Zi=function(e){var r=e;return r},un=mf,dt=L(un,1,1,1,1),rr=y(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),nb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ab=v(function(e,r){var n=e,a=r.fY,t=r.f0;return p(nb,n*a/t,n,n*(1-a-t)/t)}),tb=function(e){var r=e.a,n=e.b,a=e.c;return p(Gn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Zo=v(function(e,r){return tb(o(ab,e,r))}),ou=v(function(e,r){return{du:Ue(e.du,r.du),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,G:r.G+(e.G*r.p+e.H*r.s+e.I*r.v)*r.bZ,H:r.H+(e.G*r.q+e.H*r.t+e.I*r.w)*r.bZ,I:r.I+(e.G*r.r+e.H*r.u+e.I*r.x)*r.bZ,bZ:e.bZ*r.bZ}}),or=wf,ob=function(e){return or({dC:e.p,dD:e.s,dE:e.v,dF:e.G,dG:e.q,dH:e.t,dI:e.w,dJ:e.H,dK:e.r,dL:e.u,dM:e.x,dN:e.I,dO:0,dP:0,dQ:0,dR:1})},mt=ge(function(e,r,n,a,t){var i=a.du?1:-1,c=L(un,a.bZ,a.bZ,a.bZ,i);return _e(t,e,c,ob(a),a.du,r,n)}),iu=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(ou,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(D,S(mt,e,r,n,a,g),i.L);return{L:b,T:i.T,fE:i.fE};case 3:var w=t.b,x=o(D,S(mt,e,r,n,a,w),i.T);return{L:i.L,T:x,fE:i.fE};case 2:var _=t.a,C=o(D,S(mt,e,r,n,a,_),i.fE);return{L:i.L,T:i.T,fE:C};default:var T=t.a;return p(En,L(iu,e,r,n,a),i,T)}}),ib=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cu=ib,Qo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),cb=function(e){var r=e.Y,n=e.V,a=e.U;return L(Qo,518,r,n,a)},lb=v(function(e,r){return{$:6,a:e,b:r}}),ub=lb,lu=h([cb({U:1,V:0,Y:!1}),L(cu,!1,!1,!1,!1),o(ub,0,1)]),rn=519,Ko=8,uu=15,Jr=7681,vb={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=Pf,$b=v(function(e,r){return{$:0,a:e,b:r}}),fb=$b({dj:1,ds:0,d_:5}),Ae=cf,sb=fb(h([{bV:o(Ae,-1,-1)},{bV:o(Ae,1,-1)},{bV:o(Ae,-1,1)},{bV:o(Ae,1,1)}])),db={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bV"},uniforms:{}},mb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},ei=y(function(e,r,n){var a=e.cS,t=e.cr,i=e.c7,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(K,c($.bl),o(K,l($.a8),o(K,l($.bu),l($.bv))))};return o(u,n,o(u,r,p(mb,a,t,i)))}),ri=function(e){return p(ei,{cr:e.cr,cS:e.cS,c7:e.c7},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv})},ni=function(e){return S(ae,h([ri(e),L(cu,!1,!1,!1,!1)]),db,vb,sb,{})},pb=ni({a8:Jr,cr:0,cS:Ko,bl:rn,c7:uu,bu:Jr,bv:Jr}),bb=516,Qi=5386,xe=7680,gb=function(e){return o(Yn,2,e+4)},vu=function(e){return ni({a8:xe,cr:uu,cS:Ko,bl:bb,c7:gb(e),bu:Qi,bv:Qi})},hb=y(function(e,r,n){return Ie(h([p(rr,e,n,lu),h([vu(r),pb])]))}),_b=v(function(e,r){return Ie(o(Zc,hb(e),r))}),wb=function(e){var r=e.Y,n=e.V,a=e.U;return L(Qo,513,r,n,a)},yb=wb({U:1,V:0,Y:!0}),xb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},Sb=function(e){var r=e.bX,n=e.bH,a=e.bz,t=e.bw,i=e.bC,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return xb(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Cb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ki=v(function(e,r){var n=e,a=r;return p(Cb,32774,n,a)}),Pb=1,ec=771,Lb=770,ai=Sb({bw:0,aH:o(Ki,Pb,ec),bz:0,bC:o(Ki,Lb,ec),bH:0,bX:0}),Hr=h([yb,ai]),zb=function(e){var r=e;return r.dT},kb=function(e){var r=e;return r.dU},$u=function(e){var r=e;return r.dV},Tb=function(e){var r=e;return r.dW},Mb=function(e){var r=e;return r.dX},fu=function(e){var r=e;return r.dY},su=function(e){return B(o(gr,Tb(e),zb(e)),o(gr,Mb(e),kb(e)),o(gr,fu(e),$u(e)))},Db=function(e){return e},Ab=function(e){return jr({cE:Db({fY:e.G,f0:e.H,da:e.I}),c8:ur({fY:e.p,f0:e.q,da:e.r}),c9:ur({fY:e.s,f0:e.t,da:e.u}),db:ur({fY:e.v,f0:e.w,da:e.x})})},pt=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fY:a.fY*$.fY+a.f0*$.f0+a.da*$.da,f0:a.fY*l.fY+a.f0*l.f0+a.da*l.da,da:a.fY*i.fY+a.f0*i.f0+a.da*i.da}}),du=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=a.fY-i.fY,l=a.f0-i.f0,u=a.da-i.da,$=n.db,s=$,d=n.c9,m=d,f=n.c8,g=f;return{fY:c*g.fY+l*g.f0+u*g.da,f0:c*m.fY+l*m.f0+u*m.da,da:c*s.fY+l*s.f0+u*s.da}}),mu=v(function(e,r){return{cE:o(du,e,cn(r)),c8:o(pt,e,Nr(r)),c9:o(pt,e,Yr(r)),db:o(pt,e,Wr(r))}}),Ba=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(He,n,a)}),se=v(function(e,r){var n=e,a=r;return o(Sn,n,a)}),Bb=v(function(e,r){var n=Ba(r),a=Ba(e);return{dT:o(ce,a.dT,n.dT),dU:o(ce,a.dU,n.dU),dV:o(ce,a.dV,n.dV),dW:o(se,a.dW,n.dW),dX:o(se,a.dX,n.dX),dY:o(se,a.dY,n.dY)}}),Oe=function(e){var r=e;return r},Fb=function(e){var r=e;return B(r.fY,r.f0,r.da)},Cn=v(function(e,r){var n=e,a=r;return a+n}),Vb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=$a(Se(a)),c=$a(Se(n)),l=$a(Se(t)),u=Fb(r),$=u.a,s=u.b,d=u.c;return{dT:o(Cn,c,$),dU:o(Cn,i,s),dV:o(Cn,l,d),dW:o(gr,c,$),dX:o(gr,i,s),dY:o(gr,l,d)}}),rc=E(function(e,r,n,a){var t=n.eF,i=2*n.e$*r,c=2*n.e_*r,l=2*n.eZ*r,u=t.da*r,$=t.f0*r,s=t.fY*r,d=Oe(Wr(e)),m=X(l*d.fY)+X(c*d.f0)+X(i*d.da),f=Oe(Yr(e)),g=X(l*f.fY)+X(c*f.f0)+X(i*f.da),b=Oe(Nr(e)),w=X(l*b.fY)+X(c*b.f0)+X(i*b.da),x=o(Vb,B(w,g,m),o(du,e,p(Ut,s,$,u)));if(a.$)return re(x);var _=a.a;return re(o(Bb,_,x))}),Xt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(rc,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(rc,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Xt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(mu,Ab($),e),m=r*$.bZ,f=e,g=r,b=L(Xt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),vn=vf,$n=$f,fn=ff,pu=function(e){return{$:4,a:e}},Eb=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),On=function(e){return pu(o(Eb,e,z))},Rb={du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:0,H:0,I:0,bZ:1},nc=ni({a8:Jr,cr:0,cS:Ko,bl:rn,c7:255,bu:Jr,bv:Jr}),jb=function(e){var r=e,n=o(He,X(r.fY),o(He,X(r.f0),X(r.da)));if(n){var a=r.da/n,t=r.f0/n,i=r.fY/n,c=Vr(i*i+t*t+a*a);return c*n}else return tr},Le={bz:0,eE:!1,bH:0,cN:0,bX:0,c2:0,fY:0,f0:0,da:0},Ne=v(function(e,r){var n=e,a=r;return or({dC:n.fY,dD:n.bX,dE:a.fY,dF:a.bX,dG:n.f0,dH:n.bH,dI:a.f0,dJ:a.bH,dK:n.da,dL:n.bz,dM:a.da,dN:a.bz,dO:n.c2,dP:n.cN,dQ:a.c2,dR:a.cN})}),gn=P({bd:o(Ne,Le,Le),bM:o(Ne,Le,Le),bN:o(Ne,Le,Le),bO:o(Ne,Le,Le)},L(un,0,0,0,0)),bu=514,gu=function(e){var r=e.Y,n=e.V,a=e.U;return L(Qo,515,r,n,a)},hu=240,Nb=h([gu({U:1,V:0,Y:!0}),ri({a8:xe,cr:hu,cS:0,bl:bu,c7:0,bu:xe,bv:xe}),ai]),Yb=v(function(e,r){var n=e,a=r.fm,t=r.eW,i=r.ex,c=Se(a),l=c,u=Se(t),$=u,s=n.cQ;if(s.$){var m=s.a;return Vt($)?or({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:0,dN:-1,dO:0,dP:0,dQ:0,dR:1}):or({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:-2/($-l),dN:-($+l)/($-l),dO:0,dP:0,dQ:0,dR:1})}else{var d=s.a;return Vt($)?or({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-1,dN:-2*l,dO:0,dP:0,dQ:-1,dR:0}):or({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-($+l)/($-l),dN:-2*$*l/($-l),dO:0,dP:0,dQ:-1,dR:0})}}),ra=v(function(e,r){return(1&e>>r)===1?0:1}),Wb=function(e){return h([gu({U:1,V:0,Y:!0}),ri({a8:xe,cr:hu,cS:e,bl:bu,c7:0,bu:xe,bv:xe}),ai])},Hb=y(function(e,r,n){return Ie(o(ne,function(a){var t=a<<4,i=L(un,o(ra,a,0),o(ra,a,1),o(ra,a,2),o(ra,a,3));return p(rr,e,P(r,i),Wb(t))},o(Zr,1,o(Yn,2,n)-1)))}),Xr=function(e){var r=e;return r},Gb=yf,Ib={cE:Mr,c8:qa,c9:Jo,db:Hn},Xa=function(e){var r=e;return r},Ob=function(e){var r=Xa(cn(e)),n=Oe(Wr(e)),a=Oe(Yr(e)),t=Oe(Nr(e));return or({dC:t.fY,dD:a.fY,dE:n.fY,dF:r.fY,dG:t.f0,dH:a.f0,dI:n.f0,dJ:r.f0,dK:t.da,dL:a.da,dM:n.da,dN:r.da,dO:0,dP:0,dQ:0,dR:1})},Ub=v(function(e,r){var n=r;return Ob(o(mu,n,e))}),qb=function(e){return o(Ub,Ib,e)},Jb=function(e){var r=e;return r.c6},Xb=function(e){var r=e;return Nr(r)},Zb=function(e){var r=e;return Yr(r)},Qb=function(e){var r=Jb(e.eC),n=jr({cE:Gt(r),c8:Xb(r),c9:Zb(r),db:Dn(It(r))}),a=On(e.aP),t=a,i=L(Xt,n,1,q,h([t]));if(i.$===1)return z;var c=i.a,l=qb(r),u=o(te,.99,o(ce,Se(e.aJ),Ma($u(c)))),$=su(c),s=$.a,d=$.b,m=$.c,f=jb(p(No,s,d,m)),g=o(te,1.01,o(Cn,f,Ma(fu(c)))),b=o(Yb,e.eC,{ex:e.ex,eW:g,fm:u}),w=Gb(b).dR,x=w?Oe(Dn(It(r))):Xr(Gt(r)),_=function(){var oe=e.b0;switch(oe.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var de=oe.a;return P(3,de);case 4:var de=oe.a;return P(4,de);default:return P(5,0)}}(),C=_.a,T=_.b,Y=e.bF,j=Y,R=o(Zo,j,e.b2),N=R,W=or({dC:0,dD:x.fY,dE:vn(N),dF:e.ej,dG:0,dH:x.f0,dI:$n(N),dJ:fa(f),dK:0,dL:x.da,dM:fn(N),dN:C,dO:0,dP:w,dQ:0,dR:T}),F=_e(iu,W,l,b,Rb,t,{L:z,T:z,fE:z}),J=e.bL;switch(J.$){case 0:var Q=J.a;return Ie(h([p(rr,F.L,P(Q,dt),Hr),p(rr,F.T,gn,Hr)]));case 1:var Q=J.a;return Ie(h([p(rr,F.L,gn,Hr),h([nc]),p(rr,F.fE,Q.bd,lu),h([vu(0)]),p(rr,F.L,P(Q,dt),Nb),p(rr,F.T,gn,Hr)]));default:var ie=J.a,$e=J.b;return Ie(h([p(rr,F.L,P($e,dt),Hr),h([nc]),o(_b,F.fE,ie),p(Hb,F.L,$e,Er(ie)),p(rr,F.T,gn,Hr)]))}},Kb=function(e){return o(Vn,"width",Be(e))},e3=v(function(e,r){var n=h([Ip(1),Xp(0),Rp(!0),L(Wp,0,0,0,0)]),a=function(){var C=e.b3;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(D,Np,n),"1",1);default:var T=C.a;return B(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Zi($),d=o(le,"height",Be(s)+"px"),m=Zi(u),f=m/s,g=o(Xo,function(C){return Qb({ex:f,eC:e.eC,aJ:e.aJ,aP:C.aP,bF:C.bF,bL:C.bL,ej:c,b0:C.b0,b2:C.b2})},r),b=o(le,"width",Be(m)+"px"),w=e.aI,x=w,_=Qp(x);return p(qp,"div",h([o(le,"padding","0px"),b,d]),h([P(i,p(rb,t,h([Kb(Re(m*c)),Op(Re(s*c)),b,d,o(le,"display","block"),o(le,"background-color",_)]),g))]))}),r3=function(e){return o(e3,{b3:e.b3,aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bF:e.bF,bL:e.bL,b0:e.b0,b2:e.b2}]))},_u=function(e){return e},ac=_u({fY:.31271,f0:.32902}),n3=v(function(e,r){var n=e,a=Oe(r.eN),t=a.fY,i=a.f0,c=a.da,l=o(Zo,r.cg,r.b9),u=l;return{bz:fn(u),eE:n,bH:$n(u),cN:0,bX:vn(u),c2:1,fY:-t,f0:-i,da:-c}}),a3=function(e){return e},t3=function(e){return a3(1.2*o(Yn,2,e))},bt=function(e){return e},o3={$:0},i3=o3,wu=function(e){return e},c3=v(function(e,r){var n=e,a=r;return O(a,n)>0}),tc=function(e){var r=e;return r},l3=function(e){e:for(;;){if(Ue(e.e9,tr)&&Ue(e.fa,tr))return Le;if(o(c3,Se(e.e9),Se(e.fa))){var r={b9:e.b9,e9:e.fa,fa:e.e9,ep:Dn(e.ep)};e=r;continue e}else{var n=X(tc(e.fa)/Me),a=X(tc(e.e9)/Me),t=Oe(e.ep),i=t.fY,c=t.f0,l=t.da,u=o(Zo,wu(1),e.b9),$=u;return{bz:a*fn($),eE:!1,bH:a*$n($),cN:n/a,bX:a*vn($),c2:3,fY:i,f0:c,da:l}}}},oc=function(e){return l3({b9:e.b9,e9:e.cg,fa:tr,ep:e.ep})},u3=function(e){var r=e;return r},yu=function(e){var r=p(Xl,1667,25e3,u3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return _u({fY:n,f0:a})},xu=function(e){return e},v3=yu(xu(12e3)),$3=yu(xu(5600)),f3=function(e){return{$:2,a:e}},s3=function(e){return f3(e)},d3=v(function(e,r){return{$:2,a:e,b:r}}),Su=function(e){return{$:0,a:e}},na=function(e){var r=e;return r},m3=function(e){var r=e;return r.eE},p3=Su(gn.a),b3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(D,a,i),c):P(i,o(D,a,c))});return p(wr,n,P(z,z),r)}),g3=function(e){var r=e;return or({dC:r.fY,dD:r.bX,dE:0,dF:0,dG:r.f0,dH:r.bH,dI:0,dJ:0,dK:r.da,dL:r.bz,dM:0,dN:0,dO:r.c2,dP:r.cN,dQ:0,dR:0})},h3=ee(function(e,r,n,a,t,i,c,l){var u=o(b3,m3,h([na(e),na(r),na(n),na(a)])),$=u.a,s=u.b;if($.b){var d=ue($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(d3,o(ne,g3,$),{bd:o(Ne,m,g),bM:o(Ne,w,_),bN:o(Ne,t,i),bO:o(Ne,c,l)})}else return p3}else return Su({bd:o(Ne,e,r),bM:o(Ne,n,a),bN:o(Ne,t,i),bO:o(Ne,c,l)})}),_3=y(function(e,r,n){return ja(h3,e,r,n,Le,Le,Le,Le,Le)}),w3=function(e){var r=o(n3,Vp(e.fE),{b9:$3,eN:e.fN,cg:bt(8e4)}),n=oc({b9:v3,cg:bt(2e4),ep:e.ep}),a=oc({b9:ac,cg:bt(15e3),ep:Dn(e.ep)}),t=p(_3,r,n,a);return r3({b3:s3(e.cd),aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK,aP:e.aP,bF:t3(15),bL:t,b0:i3,b2:ac})},Cu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),y3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Pu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Lu=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),x3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),S3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),C3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ti=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(C3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Cu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(y3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(Pu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(S3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(Lu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(x3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},oi={$:0},P3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Ba(c(u)),d=o(se,s.dW,e),m=o(ce,s.dT,r),f=o(se,s.dX,n),g=o(ce,s.dU,a),b=o(se,s.dY,t),w=o(ce,s.dV,i),x=c,_=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dT:r,dU:a,dV:i,dW:e,dX:n,dY:t}}),L3=y(function(e,r,n){var a=Ba(e(r));return ja(P3,a.dW,a.dT,a.dX,a.dU,a.dY,a.dV,e,n)}),gt=v(function(e,r){var n=e,a=r;return O(a,n)<1}),zu=function(e){return o(gt,e.dT,e.dW)&&o(gt,e.dU,e.dX)&&o(gt,e.dV,e.dY)?e:{dT:o(ce,e.dW,e.dT),dU:o(ce,e.dX,e.dU),dV:o(ce,e.dY,e.dV),dW:o(se,e.dW,e.dT),dX:o(se,e.dX,e.dU),dY:o(se,e.dY,e.dV)}},An=function(e){var r=e;return r},ku=function(e){var r=An(e),n=r.a,a=r.b,t=r.c,i=Cr(n),c=Pr(n),l=Lr(n),u=Cr(a),$=Pr(a),s=Lr(a),d=Cr(t),m=Pr(t),f=Lr(t);return zu({dT:o(ce,i,o(ce,u,d)),dU:o(ce,c,o(ce,$,m)),dV:o(ce,l,o(ce,s,f)),dW:o(se,i,o(se,u,d)),dX:o(se,c,o(se,$,m)),dY:o(se,l,o(se,s,f))})},Tu=sf,ze=function(e){return Tu(Xa(e))},Mu=function(e){var r=e;return r},Za=function(e){return Tu(Mu(e))},z3=v(function(e,r){var n=e,a=r;return{fY:a.f0*n.da-a.da*n.f0,f0:a.da*n.fY-a.fY*n.da,da:a.fY*n.f0-a.f0*n.fY}}),Zt=v(function(e,r){var n=e,a=r;return{fY:a.fY-n.fY,f0:a.f0-n.f0,da:a.da-n.da}}),k3={fY:0,f0:0,da:0},T3=v(function(e,r){var n=e,a=r,t=o(He,X(a.fY),o(He,X(a.f0),X(a.da)));if(t){var i=a.da/t,c=a.f0/t,l=a.fY/t,u=Vr(l*l+c*c+i*i);return{fY:n*l/u,f0:n*c/u,da:n*i/u}}else return k3}),M3=T3(wu(1)),Du=y(function(e,r,n){var a=o(Zt,r,n),t=o(Zt,e,r);return M3(o(z3,a,t))}),D3=function(e){var r=An(e),n=r.a,a=r.b,t=r.c,i=Za(p(Du,n,a,t));return B({n:i,bV:ze(n)},{n:i,bV:ze(a)},{n:i,bV:ze(t)})},A3=v(function(e,r){return{$:2,a:e,b:r}}),Au=A3({dj:3,ds:0,d_:4}),B3=function(e){if(e.b){var r=e.a,n=e.b,a=Au(o(ne,D3,e)),t=p(L3,ku,r,n);return L(Cu,t,e,a,0)}else return oi},je=y(function(e,r,n){return B(e,r,n)}),Bu=function(){var e=Qe(1),r=Qe(1),n=Qe(1),a=o(te,-.5,e),t=o(te,-.5,r),i=o(te,-.5,n),c=p(me,i,t,a),l=o(te,.5,e),u=p(me,i,t,l),$=o(te,.5,r),s=p(me,i,$,a),d=p(me,i,$,l),m=o(te,.5,n),f=p(me,m,t,a),g=p(me,m,$,a),b=p(me,m,t,l),w=p(me,m,$,l);return ti(B3(h([p(je,c,g,f),p(je,c,s,g),p(je,u,b,w),p(je,u,w,d),p(je,f,g,w),p(je,f,w,b),p(je,c,d,s),p(je,c,u,d),p(je,c,f,b),p(je,c,b,u),p(je,s,w,g),p(je,s,d,w)])))}(),aa={$:0},F3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),V3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Za(p(Du,u,l,c)),s={n:$,bV:ze(u)},d={n:$,bV:ze(l)},m={n:$,bV:ze(c)};return o(D,s,o(D,d,o(D,m,n)))}),ii=function(e){var r=e;return r.C},E3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Qt=4294967295>>>32-kn,Kt=bv,R3=y(function(e,r,n){e:for(;;){var a=Qt&r>>>e,t=o(Kt,a,n);if(t.$){var $=t.a;return o(Kt,Qt&r,$)}else{var i=t.a,c=e-kn,l=r,u=i;e=c,r=l,n=u;continue e}}}),j3=function(e){return e>>>5<<5},N3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,j3(n))>-1?re(o(Kt,Qt&e,i)):re(p(R3,a,e,t))}),ci=function(e){var r=e;return r.ag},ht=v(function(e,r){return o(N3,e,ci(r))}),Y3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(E3,y(function(c,l,u){return B(c,l,u)}),o(ht,a,e),o(ht,t,e),o(ht,i,e))};return o(Nn,r,ii(e))},W3=y(function(e,r,n){e:for(;;){var a=o(xo,Ee,e),t=a.a,i=a.b;if(O(Bt(t),Ee)<0)return o(al,!0,{y:r,l:n,o:t});var c=i,l=o(D,nl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),li=function(e){return e.b?p(W3,e,z,0):el},H3=y(function(e,r,n){return e(r(n))}),G3=v(function(e,r){return!o(ko,o(H3,Ns,e),r)}),I3=function(e){var r=e.a;return r},Fu=v(function(e,r){var n=I3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(G3,a,r)?{C:r,ag:e}:{C:o(Ro,a,r),ag:e}}),O3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Un=O3({dj:1,ds:3,d_:4}),da=v(function(e,r){var n=Xr(r),a=Xr(e);return P(B(a.fY,a.f0,a.da),B(n.fY,n.f0,n.da))}),ic=p(Gn,0,0,0),_t=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(Oa,o(da,e,r),t);if($.$){var d={n:ic,bV:ze(r)},m={n:ic,bV:ze(e)},f=u+1,g=u;return B(o(D,B(n,g,f),o(D,B(n,f,a),c)),o(D,d,o(D,m,l)),u+2)}else{var s=$.a;return B(o(D,B(n,s,a),c),l,u)}}),U3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=$,C=a+3,T=_e(_t,s,m,f,b,r,_e(_t,d,s,g,f,r,_e(_t,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var Y=t,j=Y.a,R=Y.b;return P(j,Ve(R))}}),q3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(wn,o(da,m,s),f,p(wn,o(da,s,d),g,p(wn,o(da,d,m),b,t))),x=o(D,B(b,g,f),a),_=e,C=$,T=n+3,Y=x,j=w;e=_,r=C,n=T,a=Y,t=j;continue e}else return B(a,t,n)}),Ar=y(function(e,r,n){var a=Y3(n),t=p(wr,V3(r),z,a),i=S(q3,r,a,0,z,Vl),c=i.a,l=i.b,u=i.c,$=S(U3,r,l,a,0,B(c,z,u)),s=$.a,d=$.b,m=Bl(d)?t:ue(t,d);return p(F3,e,o(Fu,li(m),s),o(Un,m,s))}),eo=function(e){return{C:o(ne,function(r){return B(3*r,3*r+1,3*r+2)},o(Zr,0,Er(e)-1)),ag:li(Ie(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Vu=function(e){switch(e.$){case 0:return aa;case 1:var a=e.a,r=e.b,n=o(ne,An,r);return p(Ar,a,lr,eo(n));case 2:var a=e.a,r=e.b,n=o(ne,An,r);return p(Ar,a,lr,eo(n));case 3:var a=e.a,t=e.b;return p(Ar,a,lr,t);case 4:var a=e.a,t=e.b;return p(Ar,a,function(i){return i.bV},t);case 5:var a=e.a,t=e.b;return p(Ar,a,function(i){return i.bV},t);case 6:var a=e.a,t=e.b;return p(Ar,a,function(i){return i.bV},t);case 7:var a=e.a,t=e.b;return p(Ar,a,function(i){return i.bV},t);case 8:return aa;case 9:return aa;default:return aa}},cc=Vu(Bu),Eu={$:0},k=Eu,be=v(function(e,r){return{$:1,a:e,b:r}}),J3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bD"}},X3=1029,Z3=function(e){return{$:5,a:e}},Ru=function(e){var r=e;return Z3(r)},Q3=Ru(X3),K3=1028,eg=Ru(K3),ke=y(function(e,r,n){return r===1?e?o(D,Q3,n):o(D,eg,n):n}),ju={src:`
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
    `,attributes:{position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wt=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return S(ae,p(ke,l,a,d),ju,J3,n,{bD:e,b:c,c:i,d:$,e:t,f:u})}))}),ui={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"av"}},Nu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sr=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return S(ae,p(ke,l,a,d),Nu,ui,n,{av:e,b:c,c:i,d:$,e:t,f:u})}))}),Yu=v(function(e,r){return{$:3,a:e,b:r}}),rg={src:`
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
    `,attributes:{},uniforms:{constantColor:"av",pointRadius:"bU",sceneProperties:"e"}},Wu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bU",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ng=E(function(e,r,n,a){return o(Yu,n,ee(function(t,i,c,l,u,$,s,d){return S(ae,d,Wu,rg,a,{av:e,b:c,c:i,bU:r,d:$,e:t,f:u})}))}),vi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},qn=function(e){var r=e;return r},Qa=df,dr=ge(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return S(ae,p(ke,u,t,m),Nu,vi,a,{aN:o(Qa,qn(r),e),b:l,c,d:s,e:i,f:$})}))}),ag={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bU",sceneProperties:"e"}},tg=ge(function(e,r,n,a,t){return o(Yu,a,ee(function(i,c,l,u,$,s,d,m){return S(ae,m,Wu,ag,t,{aN:o(Qa,qn(r),e),b:l,c,bU:n,d:s,e:i,f:$})}))}),Hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColor:"cs",sceneProperties:"e",viewMatrix:"f"}},Gu={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ta=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),Gu,Hu,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,cs:e,b:c,c:i,d:$,e:t,f:u})}))}),Iu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColorTexture:"ct",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Ou={src:`
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
    `,attributes:{normal:"n",position:"bV",tangent:"el",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},og=qe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(ke,$,i,f),Ou,Iu,t,{O:b,bd:g.bd,bM:g.bM,bN:g.bN,bO:g.bO,ct:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Uu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b7",constantBaseColor:"ca",constantMetallic:"cb",constantRoughness:"cc",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallicTexture:"cx",normalMapTexture:"aW",roughnessTexture:"cW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},ig=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(be,u,ee(function(d,m,f,g,b,w,x,_){var C=x.a,T=x.b;return S(ae,p(ke,g,s,_),Ou,Uu,$,{b7:e,ca:r,cb:i,cc:a,O:T,bd:C.bd,bM:C.bM,bN:C.bN,bO:C.bO,cx:t,b:f,c:m,aW:c,d:w,cW:n,e:d,a$:l,f:b})}))}}}}}}}}}}},qu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b6",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallic:"cw",roughness:"cV",sceneProperties:"e",viewMatrix:"f"}},oa=qe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(ke,$,i,f),Gu,qu,t,{b6:e,O:b,bd:g.bd,bM:g.bM,bN:g.bN,bO:g.bO,cw:n,b:u,c:l,d,cV:r,e:c,f:s})}))}),cg=function(e){return{$:0,a:e}},lc=v(function(e,r){return{$:1,a:e,b:r}}),Pn=v(function(e,r){if(r.$){var n=r.a.B;return P(n,1)}else return r.a,P(e,0)}),lg=function(e){return L(un,vn(e),$n(e),fn(e),1)},$i=L(un,0,0,0,0),ma=v(function(e,r){if(r.$){var a=r.a.B;return P(a,$i)}else{var n=r.a;return P(e,lg(n))}}),Ju=v(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.B;return o(lc,P(t,$i),o(Pn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(lc,o(ma,t,e),o(Pn,t,r))}else{var a=n.a.a;return n.b.a,cg(a)}}),ug=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ia=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),vg=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$g=function(e){return o(Ae,e,1)},ro=o(Ae,0,0),Gr=v(function(e,r){if(r.$){var a=r.a.B;return P(a,ro)}else{var n=r.a;return P(e,$g(n))}}),Xu=E(function(e,r,n,a){var t=L(vg,e,r,n,a);if(t.a.$){var u=t.a.a.B;return L(ia,P(u,$i),o(Gr,u,r),o(Gr,u,n),o(Pn,u,a))}else if(t.b.$){var u=t.b.a.B;return L(ia,o(ma,u,e),P(u,ro),o(Gr,u,n),o(Pn,u,a))}else if(t.c.$){var u=t.c.a.B;return L(ia,o(ma,u,e),o(Gr,u,r),P(u,ro),o(Pn,u,a))}else if(t.d.$){var u=t.d.a.B;return L(ia,o(ma,u,e),o(Gr,u,r),o(Gr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(ug,i,c,l)}}),fg={src:`
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
    `,attributes:{},uniforms:{backlight:"b4",colorTexture:"bD",sceneProperties:"e"}},yt=ge(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return S(ae,p(ke,u,t,m),ju,fg,a,{b4:qn(r),bD:e,b:l,c,d:s,e:i,f:$})}))}),Zu={src:`
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
    `,attributes:{normal:"n",position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sg=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),Zu,Iu,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,ct:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),dg=to(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function($,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(ke,m,u,w),Zu,Uu,l,{b7:e,ca:r,cb:i,cc:a,O:_,bd:x.bd,bM:x.bM,bN:x.bN,bO:x.bO,cx:t,b:d,c:s,aW:e,d:g,cW:n,e:$,a$:0,f})}))}),Bn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),mg=function(e){var r=e;return p(Bn,r.dW,r.dT,.5)},pg=function(e){var r=e;return p(Bn,r.dX,r.dU,.5)},bg=function(e){var r=e;return p(Bn,r.dY,r.dV,.5)},gg=function(e){return p(me,mg(e),pg(e),bg(e))},H=function(e){var r=su(e),n=r.a,a=r.b,t=r.c;return{eF:Xa(gg(e)),eZ:n/2,e_:a/2,e$:t/2}},fi=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(wt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(wt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(wt,l,H(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(sr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return L(sr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return L(sr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(ng,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(yt,l,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(yt,l,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(yt,l,$,H(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(dr,u,$,H(t),c,a);case 8:var t=r.a,c=r.c;return S(dr,u,$,H(t),c,0);case 9:var t=r.a,c=r.c;return S(dr,u,$,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(tg,u,$,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Ju,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(sg,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(og,b,x,_,H(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(ta,m,H(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(ta,m,H(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(ta,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(ta,m,H(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,Y=e.d,j=e.e,R=L(Xu,C,T,Y,j);if(R.$){var J=R.a,Q=J.a,ie=J.b,$e=R.b,oe=$e.a,de=$e.b,Te=R.c,Ce=Te.a,yr=Te.b,xr=R.d,x=xr.a,_=xr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return fv(dg,Q,ie,oe,de,Ce,yr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ig(Q)(ie)(oe)(de)(Ce)(yr)(x)(_)(H(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(oa,N,W,F,H(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(oa,N,W,F,H(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(oa,N,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(oa,N,W,F,H(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),xt=function(e){var r=e;return r.fY},St=function(e){var r=e;return r.f0},Ct=function(e){var r=e;return r.da},hg=function(e){var r=e,n=Ct(r.db),a=St(r.db),t=xt(r.db),i=Ct(r.c9),c=St(r.c9),l=xt(r.c9),u=Ct(r.c8),$=St(r.c8),s=xt(r.c8);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},_g=function(e){var r=Xa(cn(e)),n=Oe(Wr(e)),a=Oe(Yr(e)),t=Oe(Nr(e));return{du:hg(e),p:t.fY,q:t.f0,r:t.da,s:a.fY,t:a.f0,u:a.da,v:n.fY,w:n.f0,x:n.da,G:r.fY,H:r.f0,I:r.da,bZ:1}},Ir=v(function(e,r){return{$:5,a:e,b:r}}),Qu=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(ou,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Ku=v(function(e,r){return o(Qu,_g(e),r)}),Ka=function(e){return{$:2,a:e}},wg=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eF;return{eF:{fY:n*i.fY,f0:a*i.f0,da:t*i.da},eZ:n*r.eZ,e_:a*r.e_,e$:t*r.e$}}),yg=bf,xg=pf,uc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=xg(a),g=f.fY,b=f.f0,w=f.da,x=f.et,_=yg({et:x,fY:g*s,f0:b*d,da:w*m});return ja(r,n,_,t,i,c,l,u,$)}}}}}}}}}},no=v(function(e,r){switch(r.$){case 0:return Eu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(no,e,a));case 1:var t=r.a,i=r.b;return o(be,o(wg,e,t),o(uc,e,i));case 3:return r;case 2:var i=r.a;return Ka(o(uc,e,i));default:var c=r.a;return pu(o(ne,no(e),c))}}),si=v(function(e,r){var n=r;return o(no,e,n)}),di={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ev=7683,rv=7682,Sg=p(ei,{cr:0,cS:0,c7:15},{a8:xe,bl:rn,bu:xe,bv:ev},{a8:xe,bl:rn,bu:xe,bv:rv}),Cg=p(ei,{cr:0,cS:0,c7:15},{a8:xe,bl:rn,bu:xe,bv:rv},{a8:xe,bl:rn,bu:xe,bv:ev}),mi=v(function(e,r){return e?o(D,Cg,r):o(D,Sg,r)}),Pg={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},Lg=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,$){return S(ae,o(mi,i,$),Pg,di,r,{b:t,c:a,d:l,e:n,b$:u,f:c})}))}else return q},Fa=function(e){var r=Lg(e);if(r.$)return k;var n=r.a;return Ka(n)},zg=E(function(e,r,n,a){var t=o(fi,n,Bu),i=function(){var s=P(e,r);return s.a?s.b?On(h([t,Fa(cc)])):t:s.b?Fa(cc):k}(),c=Io(a),l=c.a,u=c.b,$=c.c;return o(Ku,Go(a),o(si,B(l,u,$),i))}),kg=v(function(e,r){return L(zg,!0,!0,e,r)}),nv=v(function(e,r){return{$:0,a:e,b:r}}),Tg=function(e){var r=Ao(e),n=r.cR,a=r.cf,t=r.b8;return p(Gn,n,a,t)},Mg=function(e){return o(nv,0,Jt(Tg(e)))},Dg=function(e){var r=e;return r.k},Ln=function(e){var r=e;return Kr(r)},Ag=v(function(e,r){var n=e.bV,a=e.n;return o(D,{n:Za(a),bV:ze(n)},r)}),Bg=Ra(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=fn(l.bV),s=$n(l.bV),d=vn(l.bV),m=o(Sn,e,d),f=o(He,r,d),g=o(Sn,n,s),b=o(He,a,s),w=o(Sn,t,$),x=o(He,i,$),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return zu({dT:r,dU:a,dV:i,dW:e,dX:n,dY:t})}),av=v(function(e,r){var n=fn(e.bV),a=$n(e.bV),t=vn(e.bV);return oo(Bg,t,t,a,a,n,n,r)}),Fg=function(e){var r=p(Oc,Ag,z,ci(e));if(r.b){var n=r.a,a=r.b,t=o(Un,r,ii(e)),i=o(av,n,a);return L(Pu,i,e,t,0)}else return oi},vc=v(function(e,r){var n=e,a=r,t=n.c9,i=t,c=n.c8,l=c;return{fY:a.fY*l.fY+a.f0*i.fY,f0:a.fY*l.f0+a.f0*i.f0,da:a.fY*l.da+a.f0*i.da}}),Va=function(e){var r=e;return en(r)},hn=function(e){var r=e;return r},ao=function(e){return Ke(2*Me*e)},$c=Wl({cE:Mr,c8:qa,c9:Jo}),tv=function(){var e=72,r=o(Ul,e,ao(1)),n=Qe(1),a=hn(Eo),t=hn(jo),i=Qe(1),c=o(te,.5,i),l=p(me,tr,tr,c),u=o(te,-.5,i),$=p(me,tr,tr,u),s=function(f){var g=o(te,f,r),b=hn(o(vc,$c,Ot(g))),w=o(te,Ln(g),n),x=o(te,Va(g),n),_=p(me,w,x,c),C=p(me,w,x,u),T=o(La,e,f+1),Y=o(te,T,r),j=hn(o(vc,$c,Ot(Y))),R=o(te,Ln(Y),n),N=o(te,Va(Y),n),W=p(me,R,N,u),F=p(me,R,N,c);return h([B({n:t,bV:$},{n:t,bV:W},{n:t,bV:C}),B({n:b,bV:C},{n:j,bV:W},{n:j,bV:F}),B({n:b,bV:C},{n:j,bV:F},{n:b,bV:_}),B({n:a,bV:l},{n:a,bV:_},{n:a,bV:F})])},d=o(ne,s,o(Zr,0,e-1)),m=eo(Ie(d));return ti(Fg(m))}(),fc=Vu(tv),Vg=function(e){var r=e,n=X(r.da),a=X(r.f0),t=X(r.fY);if(O(t,a)<1)if(O(t,n)<1){var i=Vr(r.da*r.da+r.f0*r.f0);return{fY:0,f0:-r.da/i,da:r.f0/i}}else{var i=Vr(r.f0*r.f0+r.fY*r.fY);return{fY:-r.f0/i,f0:r.fY/i,da:0}}else if(O(a,n)<1){var i=Vr(r.da*r.da+r.fY*r.fY);return{fY:r.da/i,f0:0,da:-r.fY/i}}else{var i=Vr(r.fY*r.fY+r.f0*r.f0);return{fY:-r.f0/i,f0:r.fY/i,da:0}}},Eg=function(e){var r=Vg(e),n=r,a=n,t=e,i=t,c={fY:i.f0*a.da-i.da*a.f0,f0:i.da*a.fY-i.fY*a.da,da:i.fY*a.f0-i.f0*a.fY};return P(r,c)},Rg=function(e){var r=Vo(e),n=Eg(r),a=n.a,t=n.b;return jr({cE:Ol(e),c8:a,c9:t,db:r})},jg=function(e){var r=e;return r.ff},Ng=function(e){var r=e;return r.fw},Yg=E(function(e,r,n,a){var t=Rg(Dg(a)),i=o(fi,n,tv),c=function(){var d=P(e,r);return d.a?d.b?On(h([i,Fa(fc)])):i:d.b?Fa(fc):k}(),l=Ng(a),u=l,$=jg(a),s=$;return o(Ku,t,o(si,B(u,u,s),c))}),Wg=v(function(e,r){return L(Yg,!0,!0,e,r)}),sc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},_n=function(e){var r=An(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return or({dC:i.fY,dD:c.fY,dE:l.fY,dF:0,dG:i.f0,dH:c.f0,dI:l.f0,dJ:0,dK:i.da,dL:c.da,dM:l.da,dN:0,dO:0,dP:0,dQ:0,dR:0})},ca=Au(h([B({c1:0},{c1:1},{c1:2})])),Hg=v(function(e,r){var n=ku(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,k;var t=e.b.a;return o(be,a,ee(function(_,C,T,Y,j,R,N,W){return S(ae,p(ke,Y,0,W),sc,ui,ca,{av:t,b:T,c:C,d:R,e:_,bq:_n(r),f:j})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,ee(function(_,C,T,Y,j,R,N,W){return S(ae,p(ke,Y,0,W),sc,vi,ca,{aN:o(Qa,qn(c),i),b:T,c:C,d:R,e:_,bq:_n(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Ju,l,f);if(u.$)return k;var $=u.a;return o(be,a,ee(function(_,C,T,Y,j,R,N,W){var F=N.a,J=N.b;return S(ae,p(ke,Y,0,W),dc,Hu,ca,{O:J,bd:F.bd,bM:F.bM,bN:F.bN,bO:F.bO,cs:$,b:T,c:C,d:R,e:_,bq:_n(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Xu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(be,a,ee(function(_,C,T,Y,j,R,N,W){var F=N.a,J=N.b;return S(ae,p(ke,Y,0,W),dc,qu,ca,{b6:b,O:J,bd:F.bd,bM:F.bM,bN:F.bN,bO:F.bO,cw:x,b:T,c:C,d:R,cV:w,e:_,bq:_n(r),f:j})}))}}),Gg=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Un,e,r)}(),Ig={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",triangleVertexPositions:"bq",viewMatrix:"f"}},mc=function(e){return Ka(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(mi,t,u),Ig,di,Gg,{b:a,c:n,d:c,e:r,b$:l,bq:_n(e),f:i})}))},Og=E(function(e,r,n,a){var t=o(Hg,n,a),i=P(e,r);return i.a?i.b?On(h([t,mc(a)])):t:i.b?mc(a):k}),Ug=v(function(e,r){return L(Og,!0,!0,e,r)}),qg=v(function(e,r){var n=Lr(r),a=Lr(e),t=Pr(r),i=Pr(e),c=Cr(r),l=Cr(e);return{dT:o(ce,l,c),dU:o(ce,i,t),dV:o(ce,a,n),dW:o(se,l,c),dX:o(se,i,t),dY:o(se,a,n)}}),Jg=function(e){var r=Oo(e),n=r.a,a=r.b;return o(qg,n,a)},pc={src:`
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
    `,attributes:{lineSegmentVertex:"dB"},uniforms:{lineSegmentEndPoint:"dz",lineSegmentStartPoint:"dA",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xg=v(function(e,r){return{$:1,a:e,b:r}}),Zg=Xg({dj:2,ds:0,d_:1}),bc=Zg(h([P({dB:0},{dB:1})])),Qg=v(function(e,r){var n=Jg(r),a=H(n),t=Oo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,k;var l=e.b.a;return o(be,a,ee(function($,s,d,m,f,g,b,w){return S(ae,w,pc,ui,bc,{av:l,dz:ze(c),dA:ze(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,d,m,f,g,b,w,x){return S(ae,x,pc,vi,bc,{aN:o(Qa,qn(u),l),dz:ze(c),dA:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),Kg=v(function(e,r){return o(Qg,e,r)}),gc=v(function(e,r){var n=e,a=r;return n/a}),eh=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(Ue(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),hc=v(function(e,r){return e<1?z:S(eh,0,e,e,r,z)}),rh=v(function(e,r){var n=e.bV,a=e.n,t=e.K,i=t,c=i.a,l=i.b;return o(D,{n:Za(a),bV:ze(n),K:o(Ae,c,l)},r)}),nh=function(e){var r=p(Oc,rh,z,ci(e));if(r.b){var n=r.a,a=r.b,t=o(Un,r,ii(e)),i=o(av,n,a);return L(Lu,i,e,t,0)}else return oi},ov=v(function(e,r){var n=e,a=r,t=Kr(a);return{fY:t*Kr(n),f0:t*en(n),da:en(a)}}),ah=function(){var e=Qe(1),r=72,n=o(Zr,0,r-1),a=o(hc,r,o(Bn,tr,ao(1))),t=wo(r/2),i=o(Zr,0,t-1),c=o(hc,t,o(Bn,bn(90),bn(-90))),l=li(Ie(o(ne,function(s){return o(ne,function(d){return{n:hn(o(ov,s,d)),bV:p(me,o(te,Ln(d)*Ln(s),e),o(te,Ln(d)*Va(s),e),o(te,Va(d),e)),K:P(o(gc,s,ao(1)),o(gc,o(Cn,bn(90),d),bn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ie(o(ne,function(s){return Ie(o(ne,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return ti(nh(o(Fu,l,$)))}(),Ea=72,la=2*Ea,th=v(function(e,r){e:for(;;){var n=la+1,a=o(La,la,2*e+3),t=o(La,la,2*e+2),i=2*e+1,c=2*e,l=la,u=o(D,B(l,c,t),o(D,B(c,a,t),o(D,B(c,i,a),o(D,B(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),oh=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ih=v(function(e,r){e:for(;;){var n=p(oh,0,2*Me,e/Ea),a={bx:n,bR:0,bY:1},t={bx:n,bR:1,bY:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ch=function(){var e=o(ih,Ea-1,h([{bx:0,bR:0,bY:0},{bx:0,bR:1,bY:0}])),r=o(th,Ea-1,z);return o(Un,e,r)}(),lh={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bR",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},_c=function(e){return Ka(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(mi,!0,u),lh,di,ch,{av:p(Gn,0,0,1),b:a,c:n,d:c,e:r,b$:l,f:i})}))},uh=function(e){var r=Mu(e);return{du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:r.fY,H:r.f0,I:r.da,bZ:1}},vh=v(function(e,r){return o(Qu,uh(e),r)}),$h=E(function(e,r,n,a){var t=o(fi,n,ah),i=function(){var u=P(e,r);return u.a?u.b?On(h([t,_c()])):t:u.b?_c():k}(),c=qo(a),l=c;return o(vh,o(Zt,Mr,Uo(a)),o(si,B(l,l,l),i))}),fh=v(function(e,r){return L($h,!0,!0,e,r)}),sh=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),dh=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),mh=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(nv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(sh,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Jl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(dh,n,a,t,i,c)}},ph=mh,iv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(kg,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Ug,t,n)]);case 3:var t=e.a,a=e.b;return h([o(fh,ph(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Wg,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Kg,Mg(c),l)]);default:var u=e.a;return o(Xo,iv,u)}},bh=function(e){return o(Xo,iv,e)},gh=v(function(e,r){return w3({aI:Bp(e.ez),eC:e.eC,aJ:Fp(.5),cd:e.cd,aK:P(Xi(Re(e.b_.fW)),Xi(Re(e.b_.e1))),aP:bh(r),fE:!0,fN:o(ov,Ke(e.fM),Ke(e.fO)),ep:Hn})}),hh=v(function(e,r){return o(gh,{ez:L(kl,0,0,0,0),eC:Gl(e),cd:e.cd,b_:e.b_,fM:o(br,"sunlight azimuth",e),fO:o(br,"sunlight elevation",e)},h([Pp(e),o(Ap,e,r)]))}),_h=v(function(e,r){return o(I,h([o(le,"width","100%")]),h([rp,o(hh,e,r)]))}),wh=L(jm,_h,K0,Im,Ym);const yh={Main:{init:wh(o(A,function(e){return De({e8:e})},o(M,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fV:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return De({ev:d,eI:s,di:$,eP:u,fe:l,fv:c,fA:i,fF:t,eo:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Sa(Mn)))},o(M,"left",Z))},o(M,"pressedKeys",Sa(Mn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return De({di:$,dt:u,fj:l,fB:c,fC:i,eo:t,fY:a,f0:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(A,function(r){return o(A,function(n){return De({e1:n,fW:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(A,function(e){return o(A,function(r){return De({eK:r,eL:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},xh=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},Sh=()=>{Pt("pointerdown"),Pt("wheel"),Pt("keydown")},Pt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Ch=yh.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Sh();xh(Ch);
