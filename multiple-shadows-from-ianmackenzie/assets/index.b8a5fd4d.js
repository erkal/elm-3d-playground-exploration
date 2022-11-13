(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Br(e,r,n){return n.a=e,n.f=r,n}function $(e){return Br(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Br(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return Br(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Br(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ze(e){return Br(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ga(e){return Br(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return Br(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function go(e){return Br(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ho(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ia(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function dv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var pv=[];function bv(e){return e.length}var gv=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),hv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),_v=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var yv=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Sv()),r});function Sv(e){return"<internals>"}function hn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ar(e,r){for(var n,a=[],t=Nt(e,r,0,a);t&&(n=a.pop());t=Nt(n.a,n.b,0,a));return t}function Nt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&hn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=Ei(e),r=Ei(r));for(var t in e)if(!Nt(e[t],r[t],n+1,a))return!1;return!0}$(Ar);$(function(e,r){return!Ar(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var xv=$(function(e,r){var n=I(e,r);return n<0?ol:n?vs:tl}),Wn=0;function z(e,r){return{a:e,b:r}}function D(e,r,n){return{a:e,b:r,c:n}}function ir(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$($e);function $e(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=sr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=sr(e.a,r);return n}var P={$:0};function sr(e,r){return{$:1,a:e,b:r}}var Cv=$(sr);function b(e){for(var r=P,n=e.length;n--;)r=sr(e[n],r);return r}function Oa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var wv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return b(i)});Ze(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(Oa(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return b(Oa(r).sort(function(n,a){var t=o(e,n,a);return t===tl?0:t===ol?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Lv=$(Math.pow);$(function(e,r){return r%e});var Pv=$(function(e,r){var n=r%e;return e===0?hn(11):n>0&&e<0||n<0&&e>0?n+e:n}),zv=Math.PI,Mv=Math.cos,Tv=Math.sin,kv=Math.tan,Dv=Math.acos,Av=Math.atan;$(Math.atan2);function Bv(e){return e}function Fv(e){return e===1/0||e===-1/0}var Vv=Math.ceil,Uv=Math.floor,Ev=Math.round,Yv=Math.sqrt,Ci=Math.log,jv=isNaN;function Rv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Nv=$(function(e,r){return e+r});function Hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function Wv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Iv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Ov=$(function(e,r){return r.split(e)}),Jv=$(function(e,r){return r.join(e)}),qv=S(function(e,r,n){return n.slice(e,r)});function Zv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Kv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Xv=$(function(e,r){return r.indexOf(e)>-1}),Qv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var e$=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Dc(e){return e+""}function r$(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function n$(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function a$(e){return Oa(e).join("")}function t$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function o$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function i$(e){return{$:0,a:e}}function _o(e){return{$:2,b:e}}var c$=_o(function(e){return typeof e=="boolean"?fe(e):or("a BOOL",e)}),l$=_o(function(e){return typeof e=="number"?fe(e):or("a FLOAT",e)}),u$=_o(function(e){return typeof e=="string"?fe(e):e instanceof String?fe(e+""):or("a STRING",e)});function v$(e){return{$:3,b:e}}var $$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Fr(e,r){return{$:9,f:e,g:r}}var f$=$(function(e,r){return{$:10,b:r,h:e}}),s$=$(function(e,r){return Fr(e,[r])}),m$=S(function(e,r,n){return Fr(e,[r,n])});U(function(e,r,n,a){return Fr(e,[r,n,a])});he(function(e,r,n,a,t){return Fr(e,[r,n,a,t])});Ze(function(e,r,n,a,t,i){return Fr(e,[r,n,a,t,i])});Ga(function(e,r,n,a,t,i,c){return Fr(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return Fr(e,[r,n,a,t,i,c,l])});go(function(e,r,n,a,t,i,c,l,u){return Fr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ie(e,n)}catch(a){return xe(o(Do,"This is not valid JSON! "+a.message,r))}});var Ac=$(function(e,r){return Ie(e,r)});function Ie(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?fe(e.c):or("null",r);case 3:return ta(r)?wi(e.b,r,b):or("a LIST",r);case 4:return ta(r)?wi(e.b,r,d$):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var v=Ie(e.b,r[n]);return Qe(v)?v:xe(o(Yi,n,v.a));case 7:var a=e.e;if(!ta(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ie(e.b,r[a]);return Qe(v)?v:xe(o(il,a,v.a));case 8:if(typeof r!="object"||r===null||ta(r))return or("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ie(e.b,r[i]);if(!Qe(v))return xe(o(Yi,i,v.a));t=sr(z(i,v.a),t)}return fe(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ie(l[u],r);if(!Qe(v))return v;c=c(v.a)}return fe(c);case 10:var v=Ie(e.b,r);return Qe(v)?Ie(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Ie(m.a,r);if(Qe(v))return v;s=sr(v.a,s)}return xe($s(Re(s)));case 1:return xe(o(Do,e.a,r));case 0:return fe(e.a)}}function wi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ie(e,r[i]);if(!Qe(c))return xe(o(il,i,c.a));t[i]=c.a}return fe(n(t))}function ta(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function d$(e){return o(zs,e.length,function(r){return e[r]})}function or(e,r){return xe(o(Do,"Expecting "+e,r))}function un(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return un(e.b,r.b);case 6:return e.d===r.d&&un(e.b,r.b);case 7:return e.e===r.e&&un(e.b,r.b);case 9:return e.f===r.f&&Li(e.g,r.g);case 10:return e.h===r.h&&un(e.b,r.b);case 11:return Li(e.g,r.g)}}function Li(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!un(e[a],r[a]))return!1;return!0}var p$=$(function(e,r){return JSON.stringify(r,null,e)+""});function Bc(e){return e}S(function(e,r,n){return n[e]=r,n});function Xr(e){return{$:0,a:e}}function b$(e){return{$:1,a:e}}function Lr(e){return{$:2,b:e,c:null}}var Ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function g$(e){return{$:5,b:e}}var h$=0;function yo(e){var r={$:0,e:h$++,f:e,g:null,h:[]};return So(r),r}function Fc(e){return Lr(function(r){r(Xr(yo(e)))})}function Vc(e,r){e.h.push(r),So(e)}var _$=$(function(e,r){return Lr(function(n){Vc(e,r),n(Xr(Wn))})}),ht=!1,Pi=[];function So(e){if(Pi.push(e),!ht){for(ht=!0;e=Pi.shift();)y$(e);ht=!1}}function y$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,So(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return xo(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function xo(e,r,n,a,t,i){var c=o(Ac,e,r?r.flags:void 0);Qe(c)||hn(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=S$(l,d);function d(f,h){var g=o(a,f,v);s(v=g.a,h),Mi(l,g.b,t(v))}return Mi(l,u.b,t(v)),m?{ports:m}:{}}var ur={};function S$(e,r){var n;for(var a in ur){var t=ur[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=C$(t,r)}return n}function x$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function C$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ht,l,g$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=yo(o(Ht,l,e.b))}var w$=$(function(e,r){return Lr(function(n){e.g(r),n(Xr(Wn))})});$(function(e,r){return o(_$,e.h,{$:0,a:r})});function Uc(e){return function(r){return{$:1,k:e,l:r}}}function L$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var zi=[],_t=!1;function Mi(e,r,n){if(zi.push({p:e,q:r,r:n}),!_t){_t=!0;for(var a;a=zi.shift();)P$(a.p,a.q,a.r);_t=!1}}function P$(e,r,n){var a={};Ca(!0,r,a,null),Ca(!1,n,a,null);for(var t in e)Vc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function Ca(e,r,n,a){switch(r.$){case 1:var t=r.k,i=z$(e,t,a,r.l);n[t]=M$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Ca(e,c.a,n,a);return;case 3:Ca(e,r.o,n,{s:r.n,t:a});return}}function z$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ur[r].e:ur[r].f;return o(i,t,a)}function M$(e,r,n){return n=n||{i:P,j:P},e?n.i=sr(r,n.i):n.j=sr(r,n.j),n}function T$(e){ur[e]&&hn(3)}$(function(e,r){return r});function k$(e,r){return T$(e),ur[e]={f:D$,u:r,a:A$},Uc(e)}var D$=$(function(e,r){return function(n){return e(r(n))}});function A$(e,r){var n=P,a=ur[e].u,t=Xr(null);ur[e].b=t,ur[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(Ac,a,c);Qe(l)||hn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var wa,_r=typeof document<"u"?document:{};function Co(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Tr(e,function(){}),t),{}});function Wt(e){return{$:0,a:e}}var Ec=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:wo(n),e:t,f:e,b:i}})}),Qr=Ec(void 0),B$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:wo(n),e:t,f:e,b:i}})}),F$=B$(void 0);function V$(e,r,n,a){return{$:3,d:wo(e),g:r,h:n,i:a}}var U$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Vr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Vr([e,r],function(){return e(r)})});S(function(e,r,n){return Vr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Vr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Vr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ze(function(e,r,n,a,t,i){return Vr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ga(function(e,r,n,a,t,i,c){return Vr([e,r,n,a,t,i,c],function(){return Se(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return Vr([e,r,n,a,t,i,c,l],function(){return ho(e,r,n,a,t,i,c,l)})});go(function(e,r,n,a,t,i,c,l,u){return Vr([e,r,n,a,t,i,c,l,u],function(){return Ia(e,r,n,a,t,i,c,l,u)})});var Yc=$(function(e,r){return{$:"a0",n:e,o:r}}),E$=$(function(e,r){return{$:"a1",n:e,o:r}}),jc=$(function(e,r){return{$:"a2",n:e,o:r}}),Ur=$(function(e,r){return{$:"a3",n:e,o:r}}),Y$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function j$(e){return e=="script"?"p":e}function R$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Yc,r.n,N$(e,r.o)):r});function N$(e,r){var n=Uo(r);return{$:r.$,a:n?p(Ms,n<3?H$:W$,Ee(e),r.a):o(Ma,e,r.a)}}var H$=$(function(e,r){return z(e(r.a),r.b)}),W$=$(function(e,r){return{am:e(r.am),cQ:r.cQ,cE:r.cE}});function wo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ti(c,t,i):c[t]=i}return r}function Ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Tr(e,r){var n=e.$;if(n===5)return Tr(e.k||(e.k=e.m()),r);if(n===0)return _r.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Tr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Gt(c,r,e.d),c}var c=e.f?_r.createElementNS(e.f,e.c):_r.createElement(e.c);wa&&e.c=="a"&&c.addEventListener("click",wa(c)),Gt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Co(c,Tr(n===1?l[u]:l[u].b,r));return c}function Gt(e,r,n){for(var a in n){var t=n[a];a==="a1"?G$(e,t):a==="a0"?J$(e,r,t):a==="a3"?I$(e,t):a==="a4"?O$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function G$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function I$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function O$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function J$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=q$(r,i),e.addEventListener(t,c,Lo&&{passive:Uo(i)<2}),a[t]=c}}var Lo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Lo=!0}}))}catch{}function q$(e,r){function n(a){var t=n.q,i=Ie(t.a,a);if(!!Qe(i)){for(var c=Uo(t),l=i.a,u=c?c<3?l.a:l.am:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function Z$(e,r){return e.$==r.$&&un(e.a,r.a)}function Rc(e,r){var n=[];return er(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function er(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=tf(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];er(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){_e(n,0,a,r);return}(f?!K$(m,d):m!==d)&&_e(n,2,a,d),er(h,g,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ki(e,r,n,a,X$);return;case 2:ki(e,r,n,a,Q$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=Po(e.d,r.d);y&&_e(n,4,a,y);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function K$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ki(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Po(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Po(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Po(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Z$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function X$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];er(s,i[v],n,++a),a+=s.b||0}}function Q$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],g=u[d],y=h.a,x=g.a,_=h.b,w=g.b,T=void 0,R=void 0;if(y===x){f++,er(_,w,t,f),f+=_.b||0,m++,d++;continue}var Y=l[m+1],E=u[d+1];if(Y){var j=Y.a,N=Y.b;R=x===j}if(E){var F=E.a,Z=E.b;T=y===F}if(T&&R){f++,er(_,Z,t,f),Cn(i,t,y,w,d,c),f+=_.b||0,f++,wn(i,t,y,N,f),f+=N.b||0,m+=2,d+=2;continue}if(T){f++,Cn(i,t,x,w,d,c),er(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(R){f++,wn(i,t,y,_,f),f+=_.b||0,f++,er(N,w,t,f),f+=N.b||0,m+=2,d+=1;continue}if(Y&&j===F){f++,wn(i,t,y,_,f),Cn(i,t,x,w,d,c),f+=_.b||0,f++,er(N,Z,t,f),f+=N.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;wn(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],g=u[d];Cn(i,t,g.a,g.b,void 0,X),d++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var Nc="_elmW6BL";function Cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];er(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Cn(e,r,n+Nc,a,t,i)}function wn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];er(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}wn(e,r,n+Nc,a,t)}function Hc(e,r,n,a){Ln(e,r,n,0,0,r.b,a)}function Ln(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Hc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Ln(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Ln(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Ln(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,y=0;y<h.length;y++){t++;var x=d===1?h[y]:h[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=Ln(g[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Wc(e,r,n,a){return n.length===0?e:(Hc(e,r,n,a),La(e,n))}function La(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=ef(t,a);t===e&&(e=i)}return e}function ef(e,r){switch(r.$){case 0:return rf(e,r.s,r.u);case 4:return Gt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return La(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Tr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=La(e,i.w),e;case 8:return nf(e,r);case 5:return r.s(e);default:hn(10)}}function rf(e,r,n){var a=e.parentNode,t=Tr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function nf(e,r){var n=r.s,a=af(n.y,r);e=La(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Tr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Co(e,a),e}function af(e,r){if(!!e){for(var n=_r.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Co(n,i.c===2?i.s:Tr(i.z,r.u))}return n}}function zo(e){if(e.nodeType===3)return Wt(e.textContent);if(e.nodeType!==1)return Wt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=sr(o(Ur,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=sr(zo(v[a]),u);return p(Qr,l,r,u)}function tf(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var of=U(function(e,r,n,a){return xo(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=zo(l);return Gc(i,function(v){var s=c(v),m=Rc(u,s);l=Wc(l,u,m,t),u=s})})});U(function(e,r,n,a){return xo(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=_r.title,v=_r.body,s=zo(v);return Gc(i,function(m){wa=c;var d=l(m),f=Qr("body")(P)(d.er),h=Rc(s,f);v=Wc(v,s,h,t),s=f,wa=0,u!==d.fJ&&(_r.title=u=d.fJ)})})});var Pa=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Gc(e,r){r(e);var n=0;function a(){n=n===1?0:(Pa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Pa(a),n=2)}}$(function(e,r){return o(jo,Eo,Lr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(jo,Eo,Lr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(jo,Eo,Lr(function(){history.replaceState({},"",r),e()}))});var cf={addEventListener:function(){},removeEventListener:function(){}},lf=typeof window<"u"?window:cf;S(function(e,r,n){return Fc(Lr(function(a){function t(i){yo(n(i))}return e.addEventListener(r,t,Lo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ie(e,r);return Qe(n)?ne(n.a):q});function Ic(e,r){return Lr(function(n){Pa(function(){var a=document.getElementById(e);n(a?Xr(r(a)):b$(ks(e)))})})}function uf(e){return Lr(function(r){Pa(function(){r(Xr(e()))})})}$(function(e,r){return Ic(r,function(n){return n[e](),Wn})});$(function(e,r){return uf(function(){return lf.scroll(e,r),Wn})});S(function(e,r,n){return Ic(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Wn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var vf=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var $f=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):q}a.push(L(Rl,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(L(Rl,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Di=0;function En(e,r){for(;r.b;r=r.b)e(r.a)}function Mo(e){for(var r=0;e.b;e=e.b)r++;return r}var ff=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},sf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),mf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),df=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),pf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),bf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),gf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),hf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),_f=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),yf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Sf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},xf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Cf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Oc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Jc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Lf=function(e){e.gl.disable(e.gl.CULL_FACE)},Pf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},zf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Mf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Ai=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Tf=[xf,Cf,wf,Oc,Jc,Lf,Pf,zf,Mf];function Bi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function kf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function qc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Df(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,y,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?y[x]:y[x][_];else i.forEach(function(w){for(_=0;_<h;_++)f[g++]=h===1?y[w][x]:y[w][x][_]})}var u=qc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Mo(n.b)*s);En(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Af(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=Bf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*Mo(r.b),indexBuffer:null,buffers:{}}}function Bf(e,r){var n=new Uint32Array(Mo(e)*r),a=0,t;return En(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Fi(e,r){return e+"#"+r}var Zc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Oc(n),Jc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Fi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Di++,v||(v=Bi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Di++,s||(s=Bi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=kf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Ff(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Fi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Vf(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Af(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Df(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var y=qc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(h+w),a.vertexAttribPointer(h+w,y.size,y.baseType,!1,_,x*w)}for(n.toggle=!n.toggle,En(B0(n),i.a),u=0;u<Ai.length;u++){var T=n[Ai[u]];T.toggle!==n.toggle&&T.enabled&&(Tf[u](n),T.enabled=!1,T.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dQ,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,g.numIndices)}}return En(t,e.g),r});function Ff(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,y=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var w=l.textures.get(_);w||(w=_.eA(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[g]!==_&&(e.uniform1i(y,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Vf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Uf=S(function(e,r,n){return V$(r,{g:n,f:{},h:e},Wf,Gf)}),Ef=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Yf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),jf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Rf=$(function(e,r){e.contextAttributes.antialias=!0}),Nf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Hf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Wf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};En(function(t){return o(A0,r,t)},e.h);var n=_r.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),ff(function(){return o(Zc,e,n)})):(n=_r.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Gf(e,r){return r.f=e.f,Zc(r)}var If=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Of(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Of(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var To=new Float64Array(3),Vi=new Float64Array(3),Ui=new Float64Array(3),Jf=S(function(e,r,n){return new Float64Array([e,r,n])}),qf=function(e){return e[0]},Zf=function(e){return e[1]},Kf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Xf=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Kc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Kc);function Xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),za(Kc(e,r,n),n)}$(Xc);function Qc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function za(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Qc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Qf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Pn);function It(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(It);$(function(e,r){var n,a=To,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Pn(r,a)+e[14])/n,t});var es=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var rs=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},ns=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/as(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function as(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var ts=new Float64Array(16),os=new Float64Array(16),is=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},cs=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function el(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ze(el);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return el(c,l,i,t,n,a)});function rl(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ze(rl);U(function(e,r,n,a){return rl(e,r,n,a,-1,1)});function nl(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],x=e[14],_=e[15],w=r[0],T=r[1],R=r[2],Y=r[3],E=r[4],j=r[5],N=r[6],F=r[7],Z=r[8],X=r[9],ue=r[10],se=r[11],ce=r[12],pe=r[13],Fe=r[14],ze=r[15];return n[0]=a*w+l*T+m*R+g*Y,n[1]=t*w+u*T+d*R+y*Y,n[2]=i*w+v*T+f*R+x*Y,n[3]=c*w+s*T+h*R+_*Y,n[4]=a*E+l*j+m*N+g*F,n[5]=t*E+u*j+d*N+y*F,n[6]=i*E+v*j+f*N+x*F,n[7]=c*E+s*j+h*N+_*F,n[8]=a*Z+l*X+m*ue+g*se,n[9]=t*Z+u*X+d*ue+y*se,n[10]=i*Z+v*X+f*ue+x*se,n[11]=c*Z+s*X+h*ue+_*se,n[12]=a*ce+l*pe+m*Fe+g*ze,n[13]=t*ce+u*pe+d*Fe+y*ze,n[14]=i*ce+v*pe+f*Fe+x*ze,n[15]=c*ce+s*pe+h*Fe+_*ze,n}$(nl);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],g=r[0],y=r[1],x=r[2],_=r[4],w=r[5],T=r[6],R=r[8],Y=r[9],E=r[10],j=r[12],N=r[13],F=r[14];return n[0]=a*g+c*y+v*x,n[1]=t*g+l*y+s*x,n[2]=i*g+u*y+m*x,n[3]=0,n[4]=a*_+c*w+v*T,n[5]=t*_+l*w+s*T,n[6]=i*_+u*w+m*T,n[7]=0,n[8]=a*R+c*Y+v*E,n[9]=t*R+l*Y+s*E,n[10]=i*R+u*Y+m*E,n[11]=0,n[12]=a*j+c*N+v*F+d,n[13]=t*j+l*N+s*F+f,n[14]=i*j+u*N+m*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=za(r,To);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Qc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,g=i*l*v,y=c*l*v,x=i*i*v+u,_=h+f,w=g-d,T=h-f,R=c*c*v+u,Y=y+m,E=g+d,j=y-m,N=l*l*v+u,F=n[0],Z=n[1],X=n[2],ue=n[3],se=n[4],ce=n[5],pe=n[6],Fe=n[7],ze=n[8],zr=n[9],Mr=n[10],gt=n[11],$v=n[12],fv=n[13],sv=n[14],mv=n[15];return a[0]=F*x+se*_+ze*w,a[1]=Z*x+ce*_+zr*w,a[2]=X*x+pe*_+Mr*w,a[3]=ue*x+Fe*_+gt*w,a[4]=F*T+se*R+ze*Y,a[5]=Z*T+ce*R+zr*Y,a[6]=X*T+pe*R+Mr*Y,a[7]=ue*T+Fe*R+gt*Y,a[8]=F*E+se*j+ze*N,a[9]=Z*E+ce*j+zr*N,a[10]=X*E+pe*j+Mr*N,a[11]=ue*E+Fe*j+gt*N,a[12]=$v,a[13]=fv,a[14]=sv,a[15]=mv,a});function ls(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(ls);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function us(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(us);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=g,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=g,n[10]=y,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});S(function(e,r,n){var a=Xc(e,r,To),t=za(It(n,a,Vi),Vi),i=za(It(a,t,Ui),Ui),c=ts,l=os;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,nl(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var B=Cv,oa=yv,al=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(oa,e,l,v)}else{var u=c.a;return p(oa,i,l,u)}});return p(oa,i,p(oa,e,r,t),a)}),ko=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ko,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ei=function(e){return p(ko,S(function(r,n,a){return o(B,z(r,n),a)}),P,e)},tl=1,vs=2,ol=0,xe=function(e){return{$:1,a:e}},Do=$(function(e,r){return{$:3,a:e,b:r}}),Yi=$(function(e,r){return{$:0,a:e,b:r}}),il=$(function(e,r){return{$:1,a:e,b:r}}),fe=function(e){return{$:0,a:e}},$s=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},fs=Kv,ss=p$,je=Dc,Nr=$(function(e,r){return o(Jv,e,Oa(r))}),Ao=$(function(e,r){return b(o(Ov,e,r))}),cl=function(e){return o(Nr,`
    `,o(Ao,`
`,e))},Gn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Zr=function(e){return p(Gn,$(function(r,n){return n+1}),0,e)},ms=wv,ds=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),xr=$(function(e,r){return p(ds,e,r,P)}),ll=$(function(e,r){return p(ms,e,o(xr,0,Zr(r)-1),r)}),vr=t$,ul=function(e){var r=vr(e);return 97<=r&&r<=122},vl=function(e){var r=vr(e);return r<=90&&65<=r},ps=function(e){return ul(e)||vl(e)},bs=function(e){var r=vr(e);return r<=57&&48<=r},gs=function(e){return ul(e)||vl(e)||bs(e)},Re=function(e){return p(Gn,B,P,e)},_n=Hv,hs=$(function(e,r){return`

(`+(je(e+1)+(") "+cl(_s(r))))}),_s=function(e){return o(ys,e,P)},ys=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=_n(n);if(g.$===1)return!1;var y=g.a,x=y.a,_=y.b;return ps(x)&&o(fs,gs,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(je(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Nr,"",Re(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(je(Zr(s))+" ways:"));return o(Nr,`

`,o(B,h,o(ll,hs,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Nr,"",Re(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Nr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return h+(cl(o(ss,4,f))+(`

`+d))}}),Ne=32,Ot=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Jt=pv,Bo=Vv,Fo=$(function(e,r){return Ci(r)/Ci(e)}),Ss=Bv,Yn=Bo(o(Fo,2,Ne)),$l=L(Ot,0,Yn,Jt,Jt),fl=gv,sl=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var ml=Uv,qt=bv,Be=$(function(e,r){return I(e,r)>0?e:r}),xs=function(e){return{$:0,a:e}},Vo=hv,Cs=$(function(e,r){e:for(;;){var n=o(Vo,Ne,e),a=n.a,t=n.b,i=o(B,xs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),ws=function(e){var r=e.a;return r},Ls=$(function(e,r){e:for(;;){var n=Bo(r/Ne);if(n===1)return o(Vo,Ne,e).a;var a=o(Cs,e,P),t=n;e=a,r=t;continue e}}),dl=$(function(e,r){if(r.l){var n=r.l*Ne,a=ml(o(Fo,Ne,n-1)),t=e?Re(r.z):r.z,i=o(Ls,t,r.l);return L(Ot,qt(r.p)+n,o(Be,5,a*Yn),i,r.p)}else return L(Ot,qt(r.p),Yn,Jt,r.p)}),Ps=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(dl,!1,{z:a,l:n/Ne|0,p:t});var i=sl(p(fl,Ne,r,e)),c=e,l=r-Ne,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),zs=$(function(e,r){if(e<=0)return $l;var n=e%Ne,a=p(fl,n,e-n,r),t=e-n-Ne;return C(Ps,r,t,e,P,a)}),Qe=function(e){return!e.$},A=f$,K=c$,k=$$,me=l$,Ma=s$,Ms=m$,Ee=i$,Uo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Qr("div"),Ts=function(e){return{$:2,a:e}},pl=$(function(e,r){return e}),bl=$(function(e,r){return{D:r.D,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Wr=function(e){return e},ks=Wr,ji=Ze(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),Ds=Xv,Hr=Wv,vn=qv,In=$(function(e,r){return e<1?r:p(vn,e,Hr(r),r)}),Ja=e$,qa=function(e){return e===""},Za=$(function(e,r){return e<1?"":p(vn,0,e,r)}),gl=r$,Ri=he(function(e,r,n,a,t){if(qa(t)||o(Ds,"@",t))return q;var i=o(Ja,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=gl(o(In,c+1,t));if(l.$===1)return q;var u=l;return ne(Se(ji,e,o(Za,c,t),u,r,n,a))}else return ne(Se(ji,e,t,q,r,n,a))}),Ni=U(function(e,r,n,a){if(qa(a))return q;var t=o(Ja,"/",a);if(t.b){var i=t.a;return C(Ri,e,o(In,i,a),r,n,o(Za,i,a))}else return C(Ri,e,"/",r,n,a)}),Hi=S(function(e,r,n){if(qa(n))return q;var a=o(Ja,"?",n);if(a.b){var t=a.a;return L(Ni,e,ne(o(In,t+1,n)),r,o(Za,t,n))}else return L(Ni,e,q,r,n)});$(function(e,r){if(qa(r))return q;var n=o(Ja,"#",r);if(n.b){var a=n.a;return p(Hi,e,ne(o(In,a+1,r)),o(Za,a,r))}else return p(Hi,e,q,r)});var As=Qv,Eo=function(e){},On=Xr,Bs=On(0),hl=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Gn,e,r,Re(m)):L(hl,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Pr=S(function(e,r,n){return L(hl,e,r,0,n)}),Q=$(function(e,r){return p(Pr,$(function(n,a){return o(B,e(n),a)}),P,r)}),Ta=Ht,Yo=$(function(e,r){return o(Ta,function(n){return On(e(n))},r)}),Fs=S(function(e,r,n){return o(Ta,function(a){return o(Ta,function(t){return On(o(e,a,t))},n)},r)}),Vs=function(e){return p(Pr,Fs(B),On(P),e)},Us=w$,Es=$(function(e,r){var n=r;return Fc(o(Ta,Us(e),n))}),Ys=S(function(e,r,n){return o(Yo,function(a){return 0},Vs(o(Q,Es(e),r)))}),js=S(function(e,r,n){return On(0)}),Rs=$(function(e,r){var n=r;return o(Yo,e,n)});ur.Task=x$(Bs,Ys,js,Rs);var Ns=Uc("Task"),jo=$(function(e,r){return Ns(o(Yo,e,r))}),Hs=of,Ws=Rv,ka={$:1},_l=function(e){return{$:2,a:e}},Ka={$:0},Oe=$(function(e,r){return{$:0,a:e,b:r}}),oe=S(function(e,r,n){return r(e(n))}),yn=function(e){var r=e.b.B;return r.a},Gs=function(e){var r=e.a,n=e.b.U,a=e.b.B,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return ne(o(Oe,r,{B:i,ac:c,U:o(B,a,n)}))}else return q},yl=function(e){var r=e.b;return o(Oe,Ka,r)},mr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Is=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?yl(n):n;case 2:var i=a.a.cR;return(I(i+r.eH,yn(n).D)>0?o(oe,Gs,mr(o(Oe,ka,t))):Wr)(o(Oe,_l({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(bl,l.ey,ir(r,{D:l.D+r.eH})),s=o(e,v,u);return o(Oe,Ka,{B:z(v,s),ac:P,U:o(B,t.B,t.U)})}}),Sl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Os=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Js=$(function(e,r){return Re(p(Os,e,r,P))}),xl=S(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,g=h.a,y=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,g,o(Js,r-4,y))))):o(B,_,o(B,c,o(B,s,o(B,g,p(xl,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),qs=$(function(e,r){return p(xl,0,e,r)}),Zs=$(function(e,r){var n=r.b.U,a=r.b.B,t=r.b.ac,i=$e(Re(n),$e(b([a]),t)),c=o(qs,e,i),l=o(Sl,e,i);if(l.b){var u=l.a,v=l.b;return o(Oe,ka,{B:u,ac:v,U:Re(c)})}else{var s=Re(c);if(s.b){var m=s.a,d=s.b;return o(Oe,ka,{B:m,ac:P,U:d})}else return r}}),Ks=function(e){var r=e.b;return o(Oe,ka,r)},Xs=function(e){var r=e.b;return o(Oe,_l({cR:yn(e).D}),r)},Qs=$(function(e,r){switch(e.$){case 1:return Ks(r);case 2:return yl(r);case 3:return Xs(r);default:var n=e.a;return o(Zs,n,r)}}),Cl=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),em=$(function(e,r){return ir(r,{aw:e(r.aw)})}),rm=function(e){return{$:3,a:e}},nm=function(e){return{$:2,a:e}},wl=$(function(e,r){return{$:0,a:e,b:r}}),Ll=$(function(e,r){return{$:1,a:e,b:r}}),we=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),O=function(e){return e<0?-e:e},Ro=n$,am=S(function(e,r,n){return o(mr,0/0,Ro(o(e,r,n)))}),Pl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),tm=Iv,zl=function(e){return p(tm,B,P,e)},om=$(function(e,r){var n=o(Pl,function(a){return a!=="0"&&a!=="."},zl(r));return $e(e&&n?"-":"",r)}),ie=Dc,Zt=Nv,Ml=o$,Tl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=_n(n);if(a.$===1)return"01";var t=a.a;return o(Zt,"0",Tl(t))}else{var i=vr(r);return i>=48&&i<57?o(Zt,Ml(i+1),n):"0"}},Kt=Fv,im=jv,Xa=function(e){return o(Zt,e,"")},kl=S(function(e,r,n){return e<=0?n:p(kl,e>>1,$e(r,r),e&1?$e(n,r):n)}),jn=$(function(e,r){return p(kl,e,r,"")}),Xt=S(function(e,r,n){return $e(n,o(jn,e-Hr(n),Xa(r)))}),Qt=Gv,Dl=function(e){var r=o(Ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},cm=function(e){var r=o(Ao,"e",ie(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(mr,0,gl(o(As,"+",t)?o(In,1,t):t)),c=Dl(n),l=c.a,u=c.b,v=$e(l,u),s=i<0?o(mr,"0",o(we,function(m){var d=m.a,f=m.b;return d+("."+f)},o(we,Cl(Xa),_n($e(o(jn,O(i),"0"),v))))):p(Xt,i+1,"0",v);return $e(e<0?"-":"",s)}else{var n=r.a;return $e(e<0?"-":"",n)}else return""},lm=S(function(e,r,n){if(Kt(n)||im(n))return ie(n);var a=n<0,t=Dl(cm(O(n))),i=t.a,c=t.b,l=Hr(i)+r,u=$e(o(jn,-l+1,"0"),p(Xt,l,"0",$e(i,c))),v=Hr(u),s=o(Be,1,l),m=o(e,a,p(vn,s,v,u)),d=p(vn,0,s,u),f=m?Qt(o(mr,"1",o(we,Tl,_n(Qt(d))))):d,h=Hr(f),g=f==="0"?f:r<=0?$e(f,o(jn,O(r),"0")):I(r,Hr(c))<0?p(vn,0,h-r,f)+("."+p(vn,h-r,h,f)):$e(i+".",p(Xt,r,"0",c));return o(om,a,g)}),Al=lm($(function(e,r){var n=_n(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(vr(t))})),um=am(Al),vm=S(function(e,r,n){var a=o(Fo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(um,t,n)}),Bl=xv,Qa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Bl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),dr={$:-2},dn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return C(W,0,r,n,C(W,1,v,s,m,d),C(W,1,i,c,l,u))}else return C(W,e,i,c,C(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,y=f.d,x=f.e,d=a.e;return C(W,0,v,s,C(W,1,h,g,y,x),C(W,1,r,n,d,t))}else return C(W,e,r,n,a,t)}),eo=S(function(e,r,n){if(n.$===-2)return C(W,0,e,r,dr,dr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Bl,e,t);switch(u){case 0:return C(dn,a,t,i,p(eo,e,r,c),l);case 1:return C(W,a,t,r,c,l);default:return C(dn,a,t,i,c,p(eo,e,r,l))}}),kn=S(function(e,r,n){var a=p(eo,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(W,1,t,i,c,l)}else{var u=a;return u}}),$m=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Fl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,g=d.d,y=d.e,x=v.e;return C(W,0,f,h,C(W,1,n,a,C(W,0,i,c,l,u),g),C(W,1,s,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,x=w.e;return C(W,1,n,a,C(W,0,i,c,l,u),C(W,0,s,m,d,x))}else return e},Wi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,g=f.c,y=f.d,x=f.e;return C(W,0,i,c,C(W,1,u,v,s,m),C(W,1,n,a,d,C(W,0,h,g,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,T=e.e;T.a;var h=T.b,g=T.c,y=T.d,x=T.e;return C(W,1,n,a,C(W,0,i,c,w,d),C(W,0,h,g,y,x))}else return e},fm=Ga(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(W,n,l,u,v,C(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Wi(r)}else break e;else return c.a,c.d,Wi(r);else break e;return r}}),pa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(W,r,n,a,pa(t),l);var u=Fl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(dn,v,s,m,pa(d),f)}else return dr}else return C(W,r,n,a,pa(t),l)}else return dr},Dn=$(function(e,r){if(r.$===-2)return dr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(W,n,a,t,o(Dn,e,i),c);var u=Fl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(dn,v,s,m,o(Dn,e,d),f)}else return dr}else return C(W,n,a,t,o(Dn,e,i),c);else return o(sm,e,ho(fm,e,r,n,a,t,i,c))}),sm=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Ar(e,a)){var l=$m(c);if(l.$===-1){var u=l.b,v=l.c;return C(dn,n,u,v,i,pa(c))}else return dr}else return C(dn,n,a,t,i,o(Dn,e,c))}else return dr}),mm=$(function(e,r){var n=o(Dn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(W,1,a,t,i,c)}else{var l=n;return l}}),ia=S(function(e,r,n){var a=r(o(Qa,e,n));if(a.$)return o(mm,e,n);var t=a.a;return p(kn,e,t,n)}),dm=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(ia,r,we(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ll,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(ia,r,we(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(wl,z(i,c),p(vm,i,c,n))}));case 3:var r=e.a,n=e.b;return o(ia,r,we(function(a){return a.$===3?rm(n):a}));default:var r=e.a,n=e.b;return o(ia,r,we(function(a){return a.$===2?nm(n):a}))}},pm=function(e){return em(dm(e))},bm=$(function(e,r){return o(Q,pm(e),r)}),gm=$(function(e,r){return ir(r,{ey:o(bm,e,r.ey)})}),hm=$(function(e,r){var n=r.a,a=r.b;return o(Oe,n,ir(a,{B:o(Cl,gm(e),a.B)}))}),_m=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),ym=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Oe,a,ir(t,{B:o(_m,o(e,i.a,r),i)}))}),Sm=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ir(a,{aM:!a.aM});case 2:var t=n.a;return ir(a,{H:p(Is,e,t,a.H)});case 3:var i=n.a;return ir(a,{H:o(hm,i,a.H)});case 4:var c=n.a;return ir(a,{H:p(ym,r,c,a.H)});default:var l=n.a;return ir(a,{H:o(Qs,l,a.H)})}}),xm=$(function(e,r){return o(Oe,Ka,{B:z(e,r(e)),ac:P,U:P})}),Cm=L$,Gi=Cm(P),Da=v$,Rn=u$,wm=k$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ee({D:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(k,"clock",me))},o(k,"devicePixelRatio",me))},o(k,"dt",me))},o(k,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(m){return Ee({ek:m,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(k,"alt",K))},o(k,"control",K))},o(k,"down",K))},o(k,"downs",Da(Rn)))},o(k,"left",K))},o(k,"pressedKeys",Da(Rn)))},o(k,"right",K))},o(k,"shift",K))},o(k,"up",K))))},o(k,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Ee({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(k,"down",K))},o(k,"isDown",K))},o(k,"move",K))},o(k,"rightDown",K))},o(k,"rightUp",K))},o(k,"up",K))},o(k,"x",me))},o(k,"y",me))))},o(k,"screen",o(A,function(r){return o(A,function(n){return Ee({eV:n,fS:r})},o(k,"height",me))},o(k,"width",me))))},o(k,"wheel",o(A,function(e){return o(A,function(r){return Ee({eC:r,eD:e})},o(k,"deltaX",me))},o(k,"deltaY",me))))),Lm=function(e){return{$:4,a:e}},Pm={$:0},zm=Bc,Ke=$(function(e,r){return o(jc,e,zm(r))}),G=Ke("className"),Mm=function(e){var r=e.b.B;return r.b},Aa=Ke("id"),Tm=U$,Ba=Tm,km=E$,ae=km,Dm={$:1},Am=function(e){return{$:3,a:e}},Bm=function(e){return{$:5,a:e}},Ii=Qr("a"),No=Qr("button"),Oi=function(e){return o(Ke,"href",R$(e))},Fm=Ur("clip-rule"),Me=Ur("d"),Vm=Ur("fill"),Vl=Ec("http://www.w3.org/2000/svg"),Um=Vl("svg"),Em=Ur("viewBox"),Ym=o(Y$,"http://www.w3.org/XML/1998/namespace","xml:space"),We=Um(b([Em("0 0 24 24"),Vm("currentColor"),o(ae,"width","100%"),o(ae,"height","100%"),Ym("http://www.w3.org/2000/svg")])),jm=Ur("fill-rule"),Te=Vl("path"),Gr={eB:We(b([o(Te,b([Me("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eP:We(b([o(Te,b([Me("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eU:We(b([o(Te,b([Me("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fc:We(b([o(Te,b([Me("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Te,b([Me("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fd:We(b([o(Te,b([Me("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Te,b([Me("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fn:We(b([o(Te,b([Me("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fo:We(b([o(Te,b([Me("M7 5V19L18 12L7 5Z")]),P)])),fp:We(b([o(Te,b([Me("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fq:We(b([o(Te,b([Me("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fL:We(b([o(Te,b([jm("evenodd"),Fm("evenodd"),Me("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fM:We(b([o(Te,b([Me("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:We(b([o(Te,b([Me("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Rm=function(e){return{$:0,a:e}},Ul=Yc,El=$(function(e,r){return o(Ul,e,Rm(r))}),Ho=function(e){return o(El,"click",Ee(e))},Ji=Ke("target"),Nm=Ke("title"),ro=$(function(e,r){if(r.$===-2)return dr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(W,n,a,o(e,a,t),o(ro,e,i),o(ro,e,c))}),Hm=Wt,Cr=Hm,Wm=function(e){return p(ko,S(function(r,n,a){return o(B,n,a)}),P,e)},Gm=$(function(e,r){return{$:3,a:e,b:r}}),Im=$(function(e,r){return{$:2,a:e,b:r}}),Om=$(function(e,r){return{$:0,a:e,b:r}}),Jm=$(function(e,r){return{$:1,a:e,b:r}}),Xe=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),qm=L(Xe,0/255,0/255,0/255,1),Zm=Bc,Yl=$(function(e,r){return o(jc,e,Zm(r))}),Km=Yl("checked"),nr=Ev,Xm=S(function(e,r,n){return $e(o(jn,e-Hr(n),Xa(r)),n)}),Fa=Pv,jl=function(e){var r=function(n){return n<10?je(n):Xa(Ml(87+n))};return e<16?r(e):$e(jl(e/16|0),r(o(Fa,16,e)))},Qm=o(oe,jl,o(Xm,2,"0")),Wo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b1:a,b7:n,cG:r}},ed=function(e){var r=Wo(e),n=r.cG,a=r.b7,t=r.b1;return o(Nr,"",o(B,"#",o(Q,o(oe,nr,Qm),b([n*255,a*255,t*255]))))},no=Ke("htmlFor"),ao=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Va=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),rd=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),et=$(function(e,r){return p(Pr,rd(e),P,r)}),Rl=U(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),nd=$f,ad=a$,td=$(function(e,r){if(r.$)return xe(e);var n=r.a;return fe(n)}),od=vf,id=function(e){return o(od,{et:!1,fe:!1},e)},rt=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},cd=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return fe(e(n))}}),ld=function(e){return{$:2,a:e}},ud=function(e){return{$:0,a:e}},vd=function(e){return{$:1,a:e}},yt=$(function(e,r){return vr(r)-vr(e)}),St=S(function(e,r,n){var a=vr(n);return I(vr(e),a)<1&&I(a,vr(r))<1}),$d=$(function(e,r){var n=function(t){return I(t,e)<0?fe(t):xe(vd(r))},a=p(St,"0","9",r)?fe(o(yt,"0",r)):p(St,"a","z",r)?fe(10+o(yt,"a",r)):p(St,"A","Z",r)?fe(10+o(yt,"A",r)):xe(ud(r));return o(Va,n,a)}),Nl=$(function(e,r){var n=_n(r);if(n.$===1)return fe(0);var a=n.a,t=a.a,i=a.b;return o(Va,function(c){return o(Va,function(l){return fe(c+l*e)},o(Nl,e,i))},o($d,e,t))}),fd=$(function(e,r){return 2<=e&&e<=36?o(Nl,e,Qt(r)):xe(ld(e))}),sd=fd(16),md=S(function(e,r,n){return L(Xe,e,r,n,1)}),dd=U(function(e,r,n,a){return L(Xe,e,r,n,a)}),Jn=Lv,pd=$(function(e,r){var n=o(Jn,10,e);return nr(r*n)/n}),bd=Zv,gd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=zl(n);if(a.b&&!a.b.b){var t=a.a;return ad(b([t,t]))}else return n};return o(oe,bd,o(oe,function(n){return o(we,function(a){return p(nd,1,a,n)},id(e))},o(oe,ao(rt),o(oe,we(function(n){return n.fE}),o(oe,we(et(Wr)),o(oe,td("Parsing hex regex failed"),Va(function(n){var a=o(Q,o(oe,r,o(oe,sd,cd(Ss))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return fe(L(dd,t/255,c/255,u/255,o(pd,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return fe(p(md,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),Ua=Qr("input"),to=Qr("label"),oo=Ke("name"),Hl=$(function(e,r){return p(Pr,k,r,e)}),hd=o(Hl,b(["target","checked"]),K),_d=function(e){return o(El,"change",o(Ma,e,hd))},yd=function(e){return z(e,!0)},Sd=function(e){return{$:1,a:e}},xd=$(function(e,r){return o(Ul,e,Sd(r))}),Cd=o(Hl,b(["target","value"]),Rn),Go=function(e){return o(xd,"input",o(Ma,yd,o(Ma,e,Cd)))},Wl=Ke("max"),Gl=Ke("min"),Il=function(e){return o(Ke,"step",e)},Ea=Ke("type"),Io=Ke("value"),qi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(J,P,b([o(to,b([no(r)]),b([o(J,b([G("relative w-full")]),b([o(J,b([G("inline-block")]),b([Cr(r)])),o(J,b([G("inline-block float-right")]),b([Cr(ie(n))]))]))])),o(Ua,b([Ea("range"),o(ae,"width","100%"),Aa(r),oo(r),Gl(ie(a)),Wl(ie(t)),Io(ie(n)),Il(ie(i)),Go(o(oe,Ro,o(oe,mr(42),c)))]),P)]))},wd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ld=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,b([G("h-12 py-4")]),b([o(to,b([G("block"),no(e)]),b([o(Ua,b([G("relative bottom-[1px] align-middle mr-2"),Ea("checkbox"),Aa(e),oo(e),_d(Gm(e)),Km(c)]),P),Cr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return qi({b9:e,cl:i,cp:t,ct:Om(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return qi({b9:e,cl:i,cp:t,ct:o(oe,nr,Jm(e)),cP:1,cW:c});default:var c=r.a;return o(J,P,b([o(J,b([o(ae,"margin-bottom","6px")]),b([o(to,b([no(e)]),b([Cr(e)]))])),o(Ua,b([Ea("color"),o(ae,"width","100%"),o(ae,"height","26px"),o(ae,"padding","0px"),Aa(e),oo(e),Go(function(l){return o(Im,e,o(wd,qm,gd(l)))}),Io(ed(c))]),P)]))}}),Pd=function(e){return o(J,b([G("p-4 border-y-[0.5px] border-white20")]),b([o(J,b([G("text-lg pb-2")]),b([Cr(e.ff)])),o(J,b([G("pl-2 pr-2")]),Wm(o(ro,Ld,e.aw)))]))},zd=function(e){return o(J,b([G("text-xs text-white60")]),o(Q,Pd,e))},Md=function(e){return o(J,b([G("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Cr("clock: "+o(Al,3,yn(e).D))]))},Td=function(e){e.a;var r=e.b.U;return o(we,function(n){return nr(60/(yn(e).D-n))},o(we,o(oe,ws,function(n){return n.D}),rt(o(Sl,59,r))))},kd=function(e){return o(J,b([G("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Td(e);if(r.$===1)return b([Cr("... Fps")]);var n=r.a;return b([Cr(je(n)+" Fps")])}())},Dd=function(e){return{$:0,a:e}},Ad=function(e){var r=e.b.U;return Zr(r)},Bd=function(e){var r=e.b.U;e.b.B;var n=e.b.ac;return Zr(r)+1+Zr(n)},Fd=function(e){return o(Ua,b([G("absolute w-full"),Ea("range"),Gl(je(0)),Wl(je(Bd(e)-1)),Io(je(Ad(e))),Il(je(1)),Go(o(oe,Ro,o(oe,mr(42),o(oe,nr,Dd))))]),P)},Zi={$:1},Ki={$:3},Xi={$:2},io=function(e){return!e.b},Ol=Yl("disabled"),xt=S(function(e,r,n){return o(No,b([G("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),G(n),Ol(e),Ho(r)]),b([Cr("REC")]))}),Ct=S(function(e,r,n){return o(No,b([G("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Ol(e),Ho(n)]),b([o(J,b([G("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),Vd=function(e){var r=e.a,n=e.b.ac;return o(J,b([G("py-1")]),b([function(){switch(r.$){case 0:return p(xt,!1,Zi,"text-red-500 font-bold");case 1:return p(xt,!1,Xi,"text-white60 hover:text-white80 font-bold");default:return p(xt,!0,Xi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ct,io(n),Gr.fo,Ki);case 1:return p(Ct,io(n),Gr.fo,Ki);default:return p(Ct,!1,Gr.fn,Zi)}}()]))},Ud=function(e){return o(J,b([G("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Fd(e),Vd(e),kd(e),Md(e)]))},Ed=function(e){var r=e.a;return Ar(r,Ka)},Yd=$(function(e,r){var n=Ed(r.H)?o(J,P,P):o(J,b([G("absolute pointer-events-none w-8 h-8"),o(ae,"left",ie(e.fq.fU+.5*e.cM.fS)+"px"),o(ae,"top",ie(-e.fq.fY+.5*e.cM.eV)+"px")]),b([o(J,b([G(e.fq.e1?"text-black80":"text-black40")]),b([Gr.fq]))]));return o(J,P,b([n]))}),jd=$(function(e,r){var n=o(No,b([G(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ho(Dm),Nm("Distraction Free Mode")]),b([Gr.f0])),a=40,t=260,i=o(J,b([G("absolute w-8 bottom-12")]),b([o(Ii,b([G("text-twitterBlue40 hover:text-twitterBlue"),Oi("https://twitter.com/AzizErkalSelman"),Ji("_blank")]),b([Gr.fM]))])),c=80,l=o(J,b([G("absolute w-8 bottom-2")]),b([o(Ii,b([G("text-githubCat40 hover:text-githubCat"),Oi("https://github.com/erkal/elm-3d-playground-exploration"),Ji("_blank")]),b([Gr.eP]))])),u=e.cM.fS>640?D(e.cM.eV,a+t,e.cM.fS-(a+t)):D(e.cM.eV-c,a,e.cM.fS-a),v=u.a,s=u.b,m=u.c;return r.aM?o(J,b([G("fixed w-10 h-10 p-1")]),b([n])):o(J,P,b([o(J,b([G("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ae,"width",ie(a)+"px")]),b([n,i,l])),o(J,b([G("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ae,"width",ie(t)+"px"),o(ae,"height",ie(v)+"px")]),b([o(Ba,Am,zd(yn(r.H).ey))])),o(J,b([G("absolute bottom-0"),o(ae,"left",ie(s)+"px"),o(ae,"height",ie(c)+"px"),o(ae,"width",ie(m)+"px")]),b([o(Ba,Bm,Ud(r.H))])),o(Yd,e,r)]))}),Rd=S(function(e,r,n){var a=Mm(n.H),t=yn(n.H);return o(J,b([G("bg-black40"),G("select-none"),G("antialiased"),G("font-mono"),o(ae,"width",ie(t.cM.fS)+"px"),o(ae,"height",ie(t.cM.eV)+"px")]),b([o(J,b([G("fixed")]),b([o(Ba,pl(Pm),o(e,t,a))])),o(J,b([Aa("gui")]),b([o(jd,t,n),o(Ba,Lm,o(r,t,a))]))]))}),Nd=Ze(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Sm,r,i,u,v),Gi)}),l=function(u){var v=o(bl,n,u.e0);return z({aM:u.e0.cM.fS<500,H:o(xm,v,a)},Gi)};return Hs({e$:l,fF:pl(wm(Ts)),fN:c,fP:o(Rd,e,t)})}),Hd=U(function(e,r,n,a){return Se(Nd,e,r,n,a,$(function(t,i){return o(J,P,P)}),S(function(t,i,c){return c}))}),Wd=function(e){return{}},Gd=S(function(e,r,n){return{aw:n,e2:r,ff:e}}),Jl=dr,Id=function(e){return p(Gn,$(function(r,n){var a=r.a,t=r.b;return p(kn,a,t,n)}),Jl,e)},Od=S(function(e,r,n){return p(Gd,e,r,Id(n))}),Qi=Od,xn=S(function(e,r,n){var a=r.a,t=r.b;return z(e,o(wl,z(a,t),n))}),Jd=S(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Ll,z(a,t),n))}),ye=zv,qd=b([p(Qi,"Parameters",!0,b([p(Jd,"number of tree blocks",z(1,20),16),p(xn,"turning speed of the tree",z(.1,4),1)])),p(Qi,"Lighting",!0,b([p(xn,"azimuth for third light",z(-ye,ye),1),p(xn,"elevation for third light",z(-ye,ye),-2),p(xn,"azimuth for fourth light",z(-ye,ye),1),p(xn,"elevation for fourth light",z(-ye,ye),-2)]))]),Zd=$(function(e,r){return r}),Kd=Av,hr=Yv,Xd=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Be,O(c),o(Be,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,m=hr(s*s+v*v+u*u);return ne({fU:s/m,fY:v/m,c$:u/m})}else return q}),ba=function(e){return e},Oo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),ga=function(e){var r=e,n=o(Be,O(r.fU),o(Be,O(r.fY),O(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return ne({fU:i/c,fY:t/c,c$:a/c})}else return q},Ya=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Qd=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),ql=$(function(e,r){var n=e,a=r;return I(a,n)>0}),e0=$(function(e,r){var n=e,a=r;return I(a,n)<0}),r0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),n0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),a0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},cr=0,Zl={fU:0,fY:0,c$:0},t0=S(function(e,r,n){return o(ao,function(a){var t=o(r0,o(n0,a,r),r);return o(ao,function(i){var c=o(Oo,r,e),l=o(Qd,n,c),u=o(ql,cr,l)?c:o(e0,cr,l)?a0(c):Zl;return o(we,function(v){return D(a,i,v)},ga(u))},ga(t))},ga(e))}),o0=function(e){var r=e,n=O(r.c$),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=hr(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(I(a,n)<1){var i=hr(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},Jo=function(e){var r=o0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return z(r,c)},$n=function(e){var r=e;return r},ar=function(e){return e},i0=$(function(e,r){var n=Jo(e),a=n.a,t=n.b;return ar({cu:r,cZ:a,c_:t,c0:e})}),c0=function(e){var r=o(Ya,e.aS,e.dc),n=$n(e.ee),a=o(Oo,r,n),t=p(t0,r,n,a);if(t.$){var v=ga(r);if(v.$){var m=Jo(e.ee),d=m.a,f=m.b;return ar({cu:e.dc,cZ:f,c_:e.ee,c0:d})}else{var s=v.a;return o(i0,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ar({cu:e.dc,cZ:u,c_:l,c0:c})}},ke={fU:0,fY:0,c$:0},l0=function(e){return{$:0,a:e}},le=function(e){var r=e;return O(r)},ha=function(e){var r=e;return .5*r},u0=kv,v0=function(e){var r=e;return u0(r)},$0=function(e){var r=ha(le(e.ef)),n=v0(r);return{cF:l0(n),cX:e.cX}},yr=function(e){return e},nt=yr({fU:0,fY:1,c$:0}),pr=function(e){return e},f0=function(e){var r=e.aS,n=e.dc,a=e.ee;return $0({ef:pr(2*Kd(.5)),cX:c0({dc:ba(n),aS:ba(r),ee:o(mr,nt,o(Xd,ke,ba(a)))})})},s0=f0({dc:{fU:5,fY:5,c$:12},aS:{fU:0,fY:1,c$:0},ee:{fU:0,fY:1,c$:0}}),qo=function(e){return e},Kl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),m0=function(e){var r=e;return r},d0=function(e){var r=p(Kl,1667,25e3,m0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return qo({fU:n,fY:a})},p0=function(e){return e},b0=function(e){return{$:0,a:e}},g0=b0,h0={$:3},_0=h0,y0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),S0=y0,x0=$(function(e,r){return r.b?p(Pr,B,r,e):e}),Je=function(e){return p(Pr,x0,P,e)},Zo=$(function(e,r){return Je(o(Q,e,r))}),C0=function(e){return{$:1,a:e}},w0=C0,L0=function(e){return o(Ur,"height",je(e))},P0=function(e){return F$(j$(e))},z0=P0,M0=function(e){return{$:2,a:e}},T0=M0,k0=function(e){return o(Nr,"",e)},D0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return nr(l*1e3)/1e3},c=function(l){return nr(l*1e4)/100};return k0(b(["rgba(",ie(c(r)),"%,",ie(c(n)),"%,",ie(c(a)),"%,",ie(i(t)),")"]))},A0=$(function(e,r){switch(r.$){case 0:return o(Ef,e,r);case 1:return o(Yf,e,r);case 2:return o(jf,e,r);case 3:return o(Rf,e,r);case 4:return o(Nf,e,r);default:return o(Hf,e,r)}}),B0=$(function(e,r){switch(r.$){case 0:return o(mf,e,r);case 1:return o(df,e,r);case 2:return o(pf,e,r);case 3:return o(bf,e,r);case 4:return o(gf,e,r);case 5:return o(hf,e,r);case 6:return o(_f,e,r);case 7:return o(yf,e,r);default:return Sf(e)}}),F0=S(function(e,r,n){return p(Uf,e,r,n)}),ec=function(e){var r=e;return r},Sn=es,wt=L(Sn,1,1,1,1),tr=S(function(e,r,n){return o(Q,function(a){return o(a,r,n)},e)}),V0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),U0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(V0,n*a/t,n,n*(1-a-t)/t)}),qn=Jf,E0=function(e){var r=e.a,n=e.b,a=e.c;return p(qn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},at=$(function(e,r){return E0(o(U0,e,r))}),Xl=$(function(e,r){return{dk:Ar(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.bW,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.bW,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.bW,bW:e.bW*r.bW}}),lr=is,Y0=function(e){return lr({ds:e.q,dt:e.t,du:e.w,dv:e.I,dw:e.r,dx:e.u,dy:e.x,dz:e.J,dA:e.s,dB:e.v,dC:e.y,dD:e.K,dE:0,dF:0,dG:0,dH:1})},Lt=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=L(Sn,a.bW,a.bW,a.bW,i);return Se(t,e,c,Y0(a),a.dk,r,n)}),Ql=Ze(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Xl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,g=o(B,C(Lt,e,r,n,a,h),i.N);return{N:g,V:i.V,fz:i.fz};case 3:var y=t.b,x=o(B,C(Lt,e,r,n,a,y),i.V);return{N:i.N,V:x,fz:i.fz};case 2:var _=t.a,w=o(B,C(Lt,e,r,n,a,_),i.fz);return{N:i.N,V:i.V,fz:w};default:var T=t.a;return p(Gn,L(Ql,e,r,n,a),i,T)}}),j0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),eu=j0,Ko=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),R0=function(e){var r=e._,n=e.X,a=e.W;return L(Ko,518,r,n,a)},N0=$(function(e,r){return{$:6,a:e,b:r}}),H0=N0,ru=b([R0({W:1,X:0,_:!1}),L(eu,!1,!1,!1,!1),o(H0,0,1)]),pn=519,Xo=8,nu=15,fn=7681,W0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},te=sf,G0=$(function(e,r){return{$:0,a:e,b:r}}),I0=G0({c8:1,dh:0,dQ:5}),Ye=If,O0=I0(b([{dY:o(Ye,-1,-1)},{dY:o(Ye,1,-1)},{dY:o(Ye,-1,1)},{dY:o(Ye,1,1)}])),J0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},q0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Qo=S(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(oe,c(v.bm),o(oe,l(v.a9),o(oe,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(q0,a,t,i)))}),ei=function(e){return p(Qo,{ci:e.ci,cH:e.cH,cY:e.cY},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},ri=function(e){return C(te,b([ei(e),L(eu,!1,!1,!1,!1)]),J0,W0,O0,{})},Z0=ri({a9:fn,ci:0,cH:Xo,bm:pn,cY:nu,bu:fn,bv:fn}),K0=516,rc=5386,Le=7680,X0=function(e){return o(Jn,2,e+4)},au=function(e){return ri({a9:Le,ci:nu,cH:Xo,bm:K0,cY:X0(e),bu:rc,bv:rc})},Q0=S(function(e,r,n){return Je(b([p(tr,e,n,ru),b([au(r),Z0])]))}),ep=$(function(e,r){return Je(o(ll,Q0(e),r))}),rp=function(e){var r=e._,n=e.X,a=e.W;return L(Ko,513,r,n,a)},np=rp({W:1,X:0,_:!0}),ap=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},tp=function(e){var r=e.bU,n=e.bF,a=e.bz,t=e.bw,i=e.bB,c=e.aI,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,g=v.c;return ap(s)(m)(d)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},op=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),nc=$(function(e,r){var n=e,a=r;return p(op,32774,n,a)}),ip=1,ac=771,cp=770,ni=tp({bw:0,aI:o(nc,ip,ac),bz:0,bB:o(nc,cp,ac),bF:0,bU:0}),on=b([np,ni]),lp=function(e){var r=e;return r.dJ},up=function(e){var r=e;return r.dK},tu=function(e){var r=e;return r.dL},vp=function(e){var r=e;return r.dM},$p=function(e){var r=e;return r.dN},ou=function(e){var r=e;return r.dO},Sr=$(function(e,r){var n=e,a=r;return a-n}),iu=function(e){return D(o(Sr,vp(e),lp(e)),o(Sr,$p(e),up(e)),o(Sr,ou(e),tu(e)))},en=function(e){var r=e;return r.cu},tc=function(e){var r=e;return en(r)},fp=function(e){return e},sp=function(e){return ar({cu:fp({fU:e.I,fY:e.J,c$:e.K}),cZ:yr({fU:e.q,fY:e.r,c$:e.s}),c_:yr({fU:e.t,fY:e.u,c$:e.v}),c0:yr({fU:e.w,fY:e.x,c$:e.y})})},Pt=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),cu=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,m=n.c_,d=m,f=n.cZ,h=f;return{fU:c*h.fU+l*h.fY+u*h.c$,fY:c*d.fU+l*d.fY+u*d.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),Er=function(e){var r=e;return r.cZ},Yr=function(e){var r=e;return r.c_},jr=function(e){var r=e;return r.c0},lu=$(function(e,r){return{cu:o(cu,e,en(r)),cZ:o(Pt,e,Er(r)),c_:o(Pt,e,Yr(r)),c0:o(Pt,e,jr(r))}}),kr=S(function(e,r,n){return{fU:e,fY:r,c$:n}}),ja=function(e){var r=e;return r},ve=$(function(e,r){var n=e,a=r;return o(Be,n,a)}),An=$(function(e,r){return I(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(An,n,a)}),mp=$(function(e,r){var n=ja(r),a=ja(e);return{dJ:o(ve,a.dJ,n.dJ),dK:o(ve,a.dK,n.dK),dL:o(ve,a.dL,n.dL),dM:o(de,a.dM,n.dM),dN:o(de,a.dN,n.dN),dO:o(de,a.dO,n.dO)}}),qe=function(e){var r=e;return r},dp=function(e){var r=e;return D(r.fU,r.fY,r.c$)},Bn=$(function(e,r){var n=e,a=r;return a+n}),pp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ha(le(a)),c=ha(le(n)),l=ha(le(t)),u=dp(r),v=u.a,s=u.b,m=u.c;return{dJ:o(Bn,c,v),dK:o(Bn,i,s),dL:o(Bn,l,m),dM:o(Sr,c,v),dN:o(Sr,i,s),dO:o(Sr,l,m)}}),oc=U(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,m=qe(jr(e)),d=O(l*m.fU)+O(c*m.fY)+O(i*m.c$),f=qe(Yr(e)),h=O(l*f.fU)+O(c*f.fY)+O(i*f.c$),g=qe(Er(e)),y=O(l*g.fU)+O(c*g.fY)+O(i*g.c$),x=o(pp,D(y,h,d),o(cu,e,p(kr,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(mp,_,x))}),co=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 1:var c=t.a,l=L(oc,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 2:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 3:var c=t.a,l=L(oc,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 4:var u=t.a,f=e,h=r,g=L(co,e,r,n,u),y=i;e=f,r=h,n=g,a=y;continue e;default:var v=t.a,s=t.b,m=o(lu,sp(v),e),d=r*v.bW,f=e,h=r,g=L(co,m,d,n,b([s])),y=i;e=f,r=h,n=g,a=y;continue e}}else return n}),rn=qf,nn=Zf,an=Kf,uu=function(e){return{$:4,a:e}},bp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Zn=function(e){return uu(o(bp,e,P))},gp={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,bW:1},hp=function(e){var r=e;return r},ic=ri({a9:fn,ci:0,cH:Xo,bm:pn,cY:255,bu:fn,bv:fn}),_p=function(e){var r=e,n=o(Be,O(r.fU),o(Be,O(r.fY),O(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return cr},Ue={bz:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fU:0,fY:0,c$:0},Ge=$(function(e,r){var n=e,a=r;return lr({ds:n.fU,dt:n.bU,du:a.fU,dv:a.bU,dw:n.fY,dx:n.bF,dy:a.fY,dz:a.bF,dA:n.c$,dB:n.bz,dC:a.c$,dD:a.bz,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),zn=z({be:o(Ge,Ue,Ue),bK:o(Ge,Ue,Ue),bL:o(Ge,Ue,Ue),bM:o(Ge,Ue,Ue)},L(Sn,0,0,0,0)),ee=$(function(e,r){var n=r;return e*n}),cc=function(e){var r=e;return-r},vu=514,$u=function(e){var r=e._,n=e.X,a=e.W;return L(Ko,515,r,n,a)},fu=240,yp=b([$u({W:1,X:0,_:!0}),ei({a9:Le,ci:fu,cH:0,bm:vu,cY:0,bu:Le,bv:Le}),ni]),Sp=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=le(a),l=c,u=le(t),v=u,s=n.cF;if(s.$){var d=s.a;return Kt(v)?lr({ds:2/(i*d),dt:0,du:0,dv:0,dw:0,dx:2/d,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):lr({ds:2/(i*d),dt:0,du:0,dv:0,dw:0,dx:2/d,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var m=s.a;return Kt(v)?lr({ds:1/(i*m),dt:0,du:0,dv:0,dw:0,dx:1/m,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):lr({ds:1/(i*m),dt:0,du:0,dv:0,dw:0,dx:1/m,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),ca=$(function(e,r){return(1&e>>r)===1?0:1}),xp=function(e){return b([$u({W:1,X:0,_:!0}),ei({a9:Le,ci:fu,cH:e,bm:vu,cY:0,bu:Le,bv:Le}),ni])},Cp=S(function(e,r,n){return Je(o(Q,function(a){var t=a<<4,i=L(Sn,o(ca,a,0),o(ca,a,1),o(ca,a,2),o(ca,a,3));return p(tr,e,z(r,i),xp(t))},o(xr,1,o(Jn,2,n)-1)))}),Dr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},sn=function(e){var r=e;return r},wp=cs,lc=function(e){var r=e;return Dr(jr(r))},su=yr({fU:1,fY:0,c$:0}),ai=su,ti=nt,oi=yr({fU:0,fY:0,c$:1}),mu=oi,Lp={cu:ke,cZ:ai,c_:ti,c0:mu},Kn=function(e){var r=e;return r},Pp=function(e){var r=Kn(en(e)),n=qe(jr(e)),a=qe(Yr(e)),t=qe(Er(e));return lr({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},zp=$(function(e,r){var n=r;return Pp(o(lu,n,e))}),Mp=function(e){return o(zp,Lp,e)},Tp=function(e){var r=e;return r.cX},kp=function(e){var r=e;return Er(r)},Dp=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Ap=function(e){var r=e;return Yr(r)},Bp=function(e){var r=Tp(e.es),n=ar({cu:tc(r),cZ:kp(r),c_:Ap(r),c0:Dr(lc(r))}),a=Zn(e.aQ),t=a,i=L(co,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=Mp(r),u=o(ee,.99,o(ve,le(e.ex),cc(tu(c)))),v=iu(c),s=v.a,m=v.b,d=v.c,f=_p(p(Dp,s,m,d)),h=o(ee,1.01,o(Bn,f,cc(ou(c)))),g=o(Sp,e.es,{en:e.en,eO:h,fg:u}),y=wp(g).dH,x=y?qe(Dr(lc(r))):sn(tc(r)),_=function(){var ce=e.fK;switch(ce.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var pe=ce.a;return z(3,pe);case 4:var pe=ce.a;return z(4,pe);default:return z(5,0)}}(),w=_.a,T=_.b,R=e.eM,Y=R,E=o(at,Y,e.fR),j=E,N=lr({ds:0,dt:x.fU,du:rn(j),dv:e.d8,dw:0,dx:x.fY,dy:nn(j),dz:hp(f),dA:0,dB:x.c$,dC:an(j),dD:w,dE:0,dF:y,dG:0,dH:T}),F=Se(Ql,N,l,g,gp,t,{N:P,V:P,fz:P}),Z=e.e8;switch(Z.$){case 0:var X=Z.a;return Je(b([p(tr,F.N,z(X,wt),on),p(tr,F.V,zn,on)]));case 1:var X=Z.a;return Je(b([p(tr,F.N,zn,on),b([ic]),p(tr,F.fz,X.be,ru),b([au(0)]),p(tr,F.N,z(X,wt),yp),p(tr,F.V,zn,on)]));default:var ue=Z.a,se=Z.b;return Je(b([p(tr,F.N,z(se,wt),on),b([ic]),o(ep,F.fz,ue),p(Cp,F.N,se,Zr(ue)),p(tr,F.V,zn,on)]))}},Fp=function(e){return o(Ur,"width",je(e))},Vp=$(function(e,r){var n=b([w0(1),T0(0),g0(!0),L(S0,0,0,0,0)]),a=function(){var w=e.el;switch(w.$){case 0:return D(n,"0",1);case 1:return D(o(B,_0,n),"1",1);default:var T=w.a;return D(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=ec(v),m=o(ae,"height",je(s)+"px"),d=ec(u),f=d/s,h=o(Zo,function(w){return Bp({en:f,es:e.es,ex:e.ex,aQ:w.aQ,eM:w.eM,e8:w.e8,d8:c,fK:w.fK,fR:w.fR})},r),g=o(ae,"width",je(d)+"px"),y=e.aJ,x=y,_=D0(x);return p(z0,"div",b([o(ae,"padding","0px"),g,m]),b([z(i,p(F0,t,b([Fp(nr(d*c)),L0(nr(s*c)),g,m,o(ae,"display","block"),o(ae,"background-color",_)]),h))]))}),Up=function(e){return{$:2,a:e}},Ep=function(e){return Up(e)},Yp=function(e){return o(Vp,{el:Ep(e.b5),aJ:e.aJ,es:e.es,ex:e.ex,aL:e.aL},b([{aQ:e.aQ,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},uc=function(e){return e},$r=function(e){return e},jp=function(e){var r=e;return r},tt=function(e){var r=e;return jp(r.eo)},du=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Rp=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),pu=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),bu=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Np=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Hp=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Wp=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ii=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Wp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(du,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(Rp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(pu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Hp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(bu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(Np,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ci={$:0},Gp=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ja(c(u)),m=o(de,s.dM,e),d=o(ve,s.dJ,r),f=o(de,s.dN,n),h=o(ve,s.dK,a),g=o(de,s.dO,t),y=o(ve,s.dL,i),x=c,_=v;e=m,r=d,n=f,a=h,t=g,i=y,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),Ip=S(function(e,r,n){var a=ja(e(r));return Ia(Gp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),zt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),gu=function(e){return o(zt,e.dJ,e.dM)&&o(zt,e.dK,e.dN)&&o(zt,e.dL,e.dO)?e:{dJ:o(ve,e.dM,e.dJ),dK:o(ve,e.dN,e.dK),dL:o(ve,e.dO,e.dL),dM:o(de,e.dM,e.dJ),dN:o(de,e.dN,e.dK),dO:o(de,e.dO,e.dL)}},Nn=function(e){var r=e;return r},Ir=function(e){var r=e;return r.fU},Or=function(e){var r=e;return r.fY},Jr=function(e){var r=e;return r.c$},hu=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=Ir(n),c=Or(n),l=Jr(n),u=Ir(a),v=Or(a),s=Jr(a),m=Ir(t),d=Or(t),f=Jr(t);return gu({dJ:o(ve,i,o(ve,u,m)),dK:o(ve,c,o(ve,v,d)),dL:o(ve,l,o(ve,s,f)),dM:o(de,i,o(de,u,m)),dN:o(de,c,o(de,v,d)),dO:o(de,l,o(de,s,f))})},_u=Xf,De=function(e){return _u(Kn(e))},yu=function(e){var r=e;return r},ot=function(e){return _u(yu(e))},Su=function(e){return e},Op=$(function(e,r){var n=e,a=r,t=o(Be,O(a.fU),o(Be,O(a.fY),O(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return Zl}),Jp=Op(Su(1)),xu=S(function(e,r,n){var a=o(Ya,r,n),t=o(Ya,e,r);return Jp(o(Oo,a,t))}),qp=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=ot(p(xu,n,a,t));return D({o:i,dY:De(n)},{o:i,dY:De(a)},{o:i,dY:De(t)})},Zp=$(function(e,r){return{$:2,a:e,b:r}}),Cu=Zp({c8:3,dh:0,dQ:4}),Kp=function(e){if(e.b){var r=e.a,n=e.b,a=Cu(o(Q,qp,e)),t=p(Ip,hu,r,n);return L(du,t,e,a,0)}else return ci},Ve=S(function(e,r,n){return D(e,r,n)}),be=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),wu=function(){var e=$r(1),r=$r(1),n=$r(1),a=o(ee,-.5,e),t=o(ee,-.5,r),i=o(ee,-.5,n),c=p(be,i,t,a),l=o(ee,.5,e),u=p(be,i,t,l),v=o(ee,.5,r),s=p(be,i,v,a),m=p(be,i,v,l),d=o(ee,.5,n),f=p(be,d,t,a),h=p(be,d,v,a),g=p(be,d,t,l),y=p(be,d,v,l);return ii(Kp(b([p(Ve,c,h,f),p(Ve,c,s,h),p(Ve,u,g,y),p(Ve,u,y,m),p(Ve,f,h,y),p(Ve,f,y,g),p(Ve,c,m,s),p(Ve,c,u,m),p(Ve,c,f,g),p(Ve,c,g,u),p(Ve,s,y,h),p(Ve,s,m,y)])))}(),la={$:0},Xp=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Qp=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ot(p(xu,u,l,c)),s={o:v,dY:De(u)},m={o:v,dY:De(l)},d={o:v,dY:De(c)};return o(B,s,o(B,m,o(B,d,n)))}),li=function(e){var r=e;return r.E},e1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),lo=4294967295>>>32-Yn,uo=_v,r1=S(function(e,r,n){e:for(;;){var a=lo&r>>>e,t=o(uo,a,n);if(t.$){var v=t.a;return o(uo,lo&r,v)}else{var i=t.a,c=e-Yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),n1=function(e){return e>>>5<<5},a1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,n1(n))>-1?ne(o(uo,lo&e,i)):ne(p(r1,a,e,t))}),ui=function(e){var r=e;return r.ai},Mt=$(function(e,r){return o(a1,e,ui(r))}),t1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(e1,S(function(c,l,u){return D(c,l,u)}),o(Mt,a,e),o(Mt,t,e),o(Mt,i,e))};return o(et,r,li(e))},o1=S(function(e,r,n){e:for(;;){var a=o(Vo,Ne,e),t=a.a,i=a.b;if(I(qt(t),Ne)<0)return o(dl,!0,{z:r,l:n,p:t});var c=i,l=o(B,sl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),vi=function(e){return e.b?p(o1,e,P,0):$l},i1=S(function(e,r,n){return e(r(n))}),c1=$(function(e,r){return!o(Pl,o(i1,Ws,e),r)}),l1=$(function(e,r){return p(Pr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),u1=function(e){var r=e.a;return r},Lu=$(function(e,r){var n=u1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(c1,a,r)?{E:r,ai:e}:{E:o(l1,a,r),ai:e}}),v1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Xn=v1({c8:1,dh:3,dQ:4}),_a=$(function(e,r){var n=sn(r),a=sn(e);return z(D(a.fU,a.fY,a.c$),D(n.fU,n.fY,n.c$))}),vc=p(qn,0,0,0),Tt=Ze(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Qa,o(_a,e,r),t);if(v.$){var m={o:vc,dY:De(r)},d={o:vc,dY:De(e)},f=u+1,h=u;return D(o(B,D(n,h,f),o(B,D(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return D(o(B,D(n,s,a),c),l,u)}}),$1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,g=a,y=e,x=r,_=v,w=a+3,T=Se(Tt,s,d,f,g,r,Se(Tt,m,s,h,f,r,Se(Tt,d,m,g,h,r,t)));e=y,r=x,n=_,a=w,t=T;continue e}else{var R=t,Y=R.a,E=R.b;return z(Y,Re(E))}}),f1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,g=n,y=p(kn,o(_a,d,s),f,p(kn,o(_a,s,m),h,p(kn,o(_a,m,d),g,t))),x=o(B,D(g,h,f),a),_=e,w=v,T=n+3,R=x,Y=y;e=_,r=w,n=T,a=R,t=Y;continue e}else return D(a,t,n)}),Rr=S(function(e,r,n){var a=t1(n),t=p(Pr,Qp(r),P,a),i=C(f1,r,a,0,P,Jl),c=i.a,l=i.b,u=i.c,v=C($1,r,l,a,0,D(c,P,u)),s=v.a,m=v.b,d=io(m)?t:$e(t,m);return p(Xp,e,o(Lu,vi(d),s),o(Xn,d,s))}),vo=function(e){return{E:o(Q,function(r){return D(3*r,3*r+1,3*r+2)},o(xr,0,Zr(e)-1)),ai:vi(Je(o(Q,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Pu=function(e){switch(e.$){case 0:return la;case 1:var a=e.a,r=e.b,n=o(Q,Nn,r);return p(Rr,a,Wr,vo(n));case 2:var a=e.a,r=e.b,n=o(Q,Nn,r);return p(Rr,a,Wr,vo(n));case 3:var a=e.a,t=e.b;return p(Rr,a,Wr,t);case 4:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 8:return la;case 9:return la;default:return la}},$c=Pu(wu),it=function(e){var r=e;return r.aL},zu={$:0},M=zu,ge=$(function(e,r){return{$:1,a:e,b:r}}),s1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},m1=1029,d1=function(e){return{$:5,a:e}},Mu=function(e){var r=e;return d1(r)},p1=Mu(m1),b1=1028,g1=Mu(b1),Ae=S(function(e,r,n){return r===1?e?o(B,p1,n):o(B,g1,n):n}),Tu={src:`
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
    `,attributes:{position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kt=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){return C(te,p(Ae,l,a,m),Tu,s1,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),$i={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ax"}},ku={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},br=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){return C(te,p(Ae,l,a,m),ku,$i,n,{ax:e,b:c,c:i,d:v,e:t,f:u})}))}),Du=$(function(e,r){return{$:3,a:e,b:r}}),h1={src:`
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
    `,attributes:{},uniforms:{constantColor:"ax",pointRadius:"bS",sceneProperties:"e"}},Au={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_1=U(function(e,r,n,a){return o(Du,n,re(function(t,i,c,l,u,v,s,m){return C(te,m,Au,h1,a,{ax:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),fi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Qn=function(e){var r=e;return r},ct=Qf,gr=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,m,d){return C(te,p(Ae,u,t,d),ku,fi,a,{aO:o(ct,Qn(r),e),b:l,c,d:s,e:i,f:v})}))}),y1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bS",sceneProperties:"e"}},S1=he(function(e,r,n,a,t){return o(Du,a,re(function(i,c,l,u,v,s,m,d){return C(te,d,Au,y1,t,{aO:o(ct,Qn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},Fu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ua=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(te,p(Ae,l,a,m),Fu,Bu,n,{Q:f,be:d.be,bK:d.bK,bL:d.bL,bM:d.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),Vu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Uu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},x1=Ze(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return C(te,p(Ae,v,i,f),Uu,Vu,t,{Q:g,be:h.be,bK:h.bK,bL:h.bL,bM:h.bM,ck:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f:s})}))}),Eu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aX",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},C1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,re(function(m,d,f,h,g,y,x,_){var w=x.a,T=x.b;return C(te,p(Ae,h,s,_),Uu,Eu,v,{b0:e,b2:r,b3:i,b4:a,Q:T,be:w.be,bK:w.bK,bL:w.bL,bM:w.bM,co:t,b:f,c:d,aX:c,d:y,cL:n,e:m,a0:l,f:g})}))}}}}}}}}}}},Yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},va=Ze(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return C(te,p(Ae,v,i,f),Fu,Yu,t,{b$:e,Q:g,be:h.be,bK:h.bK,bL:h.bL,bM:h.bM,cn:n,b:u,c:l,d:m,cK:r,e:c,f:s})}))}),w1=function(e){return{$:0,a:e}},fc=$(function(e,r){return{$:1,a:e,b:r}}),Fn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),L1=function(e){return L(Sn,rn(e),nn(e),an(e),1)},si=L(Sn,0,0,0,0),ya=$(function(e,r){if(r.$){var a=r.a.C;return z(a,si)}else{var n=r.a;return z(e,L1(n))}}),ju=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(fc,z(t,si),o(Fn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(fc,o(ya,t,e),o(Fn,t,r))}else{var a=n.a.a;return n.b.a,w1(a)}}),P1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),$a=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),z1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),M1=function(e){return o(Ye,e,1)},$o=o(Ye,0,0),cn=$(function(e,r){if(r.$){var a=r.a.C;return z(a,$o)}else{var n=r.a;return z(e,M1(n))}}),Ru=U(function(e,r,n,a){var t=L(z1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L($a,z(u,si),o(cn,u,r),o(cn,u,n),o(Fn,u,a))}else if(t.b.$){var u=t.b.a.C;return L($a,o(ya,u,e),z(u,$o),o(cn,u,n),o(Fn,u,a))}else if(t.c.$){var u=t.c.a.C;return L($a,o(ya,u,e),o(cn,u,r),z(u,$o),o(Fn,u,a))}else if(t.d.$){var u=t.d.a.C;return L($a,o(ya,u,e),o(cn,u,r),o(cn,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(P1,i,c,l)}}),T1={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},Dt=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,m,d){return C(te,p(Ae,u,t,d),Tu,T1,a,{bZ:Qn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Nu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},k1=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(te,p(Ae,l,a,m),Nu,Vu,n,{Q:f,be:d.be,bK:d.bK,bL:d.bL,bM:d.bM,ck:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),D1=go(function(e,r,n,a,t,i,c,l,u){return o(ge,c,re(function(v,s,m,d,f,h,g,y){var x=g.a,_=g.b;return C(te,p(Ae,d,u,y),Nu,Eu,l,{b0:e,b2:r,b3:i,b4:a,Q:_,be:x.be,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:m,c:s,aX:e,d:h,cL:n,e:v,a0:0,f})}))}),Hn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),A1=function(e){var r=e;return p(Hn,r.dM,r.dJ,.5)},B1=function(e){var r=e;return p(Hn,r.dN,r.dK,.5)},F1=function(e){var r=e;return p(Hn,r.dO,r.dL,.5)},V1=function(e){return p(be,A1(e),B1(e),F1(e))},H=function(e){var r=iu(e),n=r.a,a=r.b,t=r.c;return{ev:Kn(V1(e)),eR:n/2,eS:a/2,eT:t/2}},mi=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return L(kt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(kt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(kt,l,H(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 8:var t=r.a,c=r.c;return L(br,n,H(t),c,0);case 9:var t=r.a,c=r.c;return L(br,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(_1,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return C(Dt,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(Dt,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(Dt,l,v,H(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(gr,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return C(gr,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return C(gr,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(S1,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,Y=e.c,m=o(ju,s,Y);if(m.$){var h=m.a,g=h.a;h.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return L(k1,g,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Se(x1,g,x,_,H(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var d=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return L(ua,d,H(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return L(ua,d,H(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return L(ua,d,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(ua,d,H(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var w=e.b,T=e.c,R=e.d,Y=e.e,E=L(Ru,w,T,R,Y);if(E.$){var Z=E.a,X=Z.a,ue=Z.b,se=E.b,ce=se.a,pe=se.b,Fe=E.c,ze=Fe.a,zr=Fe.b,Mr=E.d,x=Mr.a,_=Mr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return dv(D1,X,ue,ce,pe,ze,zr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C1(X)(ue)(ce)(pe)(ze)(zr)(x)(_)(H(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var j=E.a,N=E.b,F=E.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return Se(va,j,N,F,H(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return Se(va,j,N,F,H(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Se(va,j,N,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Se(va,j,N,F,H(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),At=function(e){var r=e;return r.fU},Bt=function(e){var r=e;return r.fY},Ft=function(e){var r=e;return r.c$},U1=function(e){var r=e,n=Ft(r.c0),a=Bt(r.c0),t=At(r.c0),i=Ft(r.c_),c=Bt(r.c_),l=At(r.c_),u=Ft(r.cZ),v=Bt(r.cZ),s=At(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},E1=function(e){var r=Kn(en(e)),n=qe(jr(e)),a=qe(Yr(e)),t=qe(Er(e));return{dk:U1(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,I:r.fU,J:r.fY,K:r.c$,bW:1}},ln=$(function(e,r){return{$:5,a:e,b:r}}),Hu=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(Xl,a,e);return o(ln,i,t);case 1:return o(ln,e,n);case 3:return o(ln,e,n);case 2:return o(ln,e,n);default:return o(ln,e,n)}}),Wu=$(function(e,r){return o(Hu,E1(e),r)}),lt=function(e){return{$:2,a:e}},Y1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),j1=ns,R1=rs,sc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=R1(a),h=f.fU,g=f.fY,y=f.c$,x=f.ei,_=j1({ei:x,fU:h*s,fY:g*m,c$:y*d});return Ia(r,n,_,t,i,c,l,u,v)}}}}}}}}}},fo=$(function(e,r){switch(r.$){case 0:return zu;case 5:var n=r.a,a=r.b;return o(ln,n,o(fo,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(Y1,e,t),o(sc,e,i));case 3:return r;case 2:var i=r.a;return lt(o(sc,e,i));default:var c=r.a;return uu(o(Q,fo(e),c))}}),di=$(function(e,r){var n=r;return o(fo,e,n)}),pi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Gu=7683,Iu=7682,N1=p(Qo,{ci:0,cH:0,cY:15},{a9:Le,bm:pn,bu:Le,bv:Gu},{a9:Le,bm:pn,bu:Le,bv:Iu}),H1=p(Qo,{ci:0,cH:0,cY:15},{a9:Le,bm:pn,bu:Le,bv:Iu},{a9:Le,bm:pn,bu:Le,bv:Gu}),bi=$(function(e,r){return e?o(B,H1,r):o(B,N1,r)}),W1={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},G1=function(e){if(e.$){var r=e.c;return ne(re(function(n,a,t,i,c,l,u,v){return C(te,o(bi,i,v),W1,pi,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Ra=function(e){var r=G1(e);if(r.$)return M;var n=r.a;return lt(n)},I1=U(function(e,r,n,a){var t=o(mi,n,wu),i=function(){var s=z(e,r);return s.a?s.b?Zn(b([t,Ra($c)])):t:s.b?Ra($c):M}(),c=it(a),l=c.a,u=c.b,v=c.c;return o(Wu,tt(a),o(di,D(l,u,v),i))}),O1=$(function(e,r){return L(I1,!0,!0,e,r)}),so=function(e){return{$:0,a:e}},Ou=$(function(e,r){return{$:0,a:e,b:r}}),J1=function(e){var r=Wo(e),n=r.cG,a=r.b7,t=r.b1;return p(qn,n,a,t)},q1=function(e){return o(Ou,0,so(J1(e)))},gi=function(e){var r=e;return r.k},Kr=Mv,Vn=function(e){var r=e;return Kr(r)},Z1=$(function(e,r){var n=r;return n/e}),bn=Tv,mc=function(e){var r=e;return{fU:Kr(r),fY:bn(r)}},K1=$(function(e,r){var n=e.dY,a=e.o;return o(B,{o:ot(a),dY:De(n)},r)}),X1=Ga(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=an(l.dY),s=nn(l.dY),m=rn(l.dY),d=o(An,e,m),f=o(Be,r,m),h=o(An,n,s),g=o(Be,a,s),y=o(An,t,v),x=o(Be,i,v),_=u;e=d,r=f,n=h,a=g,t=y,i=x,c=_;continue e}else return gu({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Ju=$(function(e,r){var n=an(e.dY),a=nn(e.dY),t=rn(e.dY);return ho(X1,t,t,a,a,n,n,r)}),Q1=function(e){var r=p(al,K1,P,ui(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,li(e)),i=o(Ju,n,a);return L(pu,i,e,t,0)}else return ci},qu=yr({fU:0,fY:0,c$:-1}),dc=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c$:a.fU*l.c$+a.fY*i.c$}}),Na=function(e){var r=e;return bn(r)},mo=function(e){return pr(2*ye*e)},e3=Wr,pc=e3({cu:ke,cZ:ai,c_:ti}),Zu=function(){var e=72,r=o(Z1,e,mo(1)),n=$r(1),a=$n(oi),t=$n(qu),i=$r(1),c=o(ee,.5,i),l=p(be,cr,cr,c),u=o(ee,-.5,i),v=p(be,cr,cr,u),s=function(f){var h=o(ee,f,r),g=$n(o(dc,pc,mc(h))),y=o(ee,Vn(h),n),x=o(ee,Na(h),n),_=p(be,y,x,c),w=p(be,y,x,u),T=o(Fa,e,f+1),R=o(ee,T,r),Y=$n(o(dc,pc,mc(R))),E=o(ee,Vn(R),n),j=o(ee,Na(R),n),N=p(be,E,j,u),F=p(be,E,j,c);return b([D({o:t,dY:v},{o:t,dY:N},{o:t,dY:w}),D({o:g,dY:w},{o:Y,dY:N},{o:Y,dY:F}),D({o:g,dY:w},{o:Y,dY:F},{o:g,dY:_}),D({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},m=o(Q,s,o(xr,0,e-1)),d=vo(Je(m));return ii(Q1(d))}(),bc=Pu(Zu),Ku=function(e){var r=e;return r.eF},Xu=function(e){var r=e;return r.cu},r3=function(e){var r=Ku(e),n=Jo(r),a=n.a,t=n.b;return ar({cu:Xu(e),cZ:a,c_:t,c0:r})},Qu=function(e){var r=e;return r.e6},ev=function(e){var r=e;return r.fs},n3=U(function(e,r,n,a){var t=r3(gi(a)),i=o(mi,n,Zu),c=function(){var m=z(e,r);return m.a?m.b?Zn(b([i,Ra(bc)])):i:m.b?Ra(bc):M}(),l=ev(a),u=l,v=Qu(a),s=v;return o(Wu,t,o(di,D(u,u,s),c))}),a3=$(function(e,r){return L(n3,!0,!0,e,r)}),gc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},hc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Mn=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=sn(n),c=sn(a),l=sn(t);return lr({ds:i.fU,dt:c.fU,du:l.fU,dv:0,dw:i.fY,dx:c.fY,dy:l.fY,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},fa=Cu(b([D({cS:0},{cS:1},{cS:2})])),t3=$(function(e,r){var n=hu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var t=e.b.a;return o(ge,a,re(function(_,w,T,R,Y,E,j,N){return C(te,p(Ae,R,0,N),gc,$i,fa,{ax:t,b:T,c:w,d:E,e:_,br:Mn(r),f:Y})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return o(ge,a,re(function(_,w,T,R,Y,E,j,N){return C(te,p(Ae,R,0,N),gc,fi,fa,{aO:o(ct,Qn(c),i),b:T,c:w,d:E,e:_,br:Mn(r),f:Y})}));case 2:e.a;var l=e.b,f=e.c,u=o(ju,l,f);if(u.$)return M;var v=u.a;return o(ge,a,re(function(_,w,T,R,Y,E,j,N){var F=j.a,Z=j.b;return C(te,p(Ae,R,0,N),hc,Bu,fa,{Q:Z,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:T,c:w,d:E,e:_,br:Mn(r),f:Y})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,h=L(Ru,s,m,d,f);if(h.$)return M;var g=h.a,y=h.b,x=h.c;return o(ge,a,re(function(_,w,T,R,Y,E,j,N){var F=j.a,Z=j.b;return C(te,p(Ae,R,0,N),hc,Yu,fa,{b$:g,Q:Z,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cn:x,b:T,c:w,d:E,cK:y,e:_,br:Mn(r),f:Y})}))}}),o3=function(){var e=b([{a$:o(Ye,0,1)},{a$:o(Ye,1,1)},{a$:o(Ye,2,1)},{a$:o(Ye,0,-1)},{a$:o(Ye,1,-1)},{a$:o(Ye,2,-1)}]),r=b([D(0,1,2),D(3,5,4),D(3,4,1),D(3,1,0),D(4,5,2),D(4,2,1),D(5,3,0),D(5,0,2)]);return o(Xn,e,r)}(),i3={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"br",viewMatrix:"f"}},_c=function(e){return lt(re(function(r,n,a,t,i,c,l,u){return C(te,o(bi,t,u),i3,pi,o3,{b:a,c:n,d:c,e:r,bX:l,br:Mn(e),f:i})}))},c3=U(function(e,r,n,a){var t=o(t3,n,a),i=z(e,r);return i.a?i.b?Zn(b([t,_c(a)])):t:i.b?_c(a):M}),l3=$(function(e,r){return L(c3,!0,!0,e,r)}),hi=function(e){var r=e;return r},u3=$(function(e,r){var n=Jr(r),a=Jr(e),t=Or(r),i=Or(e),c=Ir(r),l=Ir(e);return{dJ:o(ve,l,c),dK:o(ve,i,t),dL:o(ve,a,n),dM:o(de,l,c),dN:o(de,i,t),dO:o(de,a,n)}}),v3=function(e){var r=hi(e),n=r.a,a=r.b;return o(u3,n,a)},yc={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},$3=$(function(e,r){return{$:1,a:e,b:r}}),f3=$3({c8:2,dh:0,dQ:1}),Sc=f3(b([z({dr:0},{dr:1})])),s3=$(function(e,r){var n=v3(r),a=H(n),t=hi(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var l=e.b.a;return o(ge,a,re(function(v,s,m,d,f,h,g,y){return C(te,y,yc,$i,Sc,{ax:l,dp:De(c),dq:De(i),b:m,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return o(ge,a,re(function(s,m,d,f,h,g,y,x){return C(te,x,yc,fi,Sc,{aO:o(ct,Qn(u),l),dp:De(c),dq:De(i),b:d,c:m,d:g,e:s,f:h})}));case 2:return M;default:return M}}),m3=$(function(e,r){return o(s3,e,r)}),ut=function(e){var r=e;return r.ev},vt=function(e){var r=e;return r.fs},sa=function(e){return pr(ye*(e/180))},xc=$(function(e,r){var n=e,a=r;return n/a}),d3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(Ar(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),Cc=$(function(e,r){return e<1?P:C(d3,0,e,e,r,P)}),p3=$(function(e,r){var n=e.dY,a=e.o,t=e.M,i=t,c=i.a,l=i.b;return o(B,{o:ot(a),dY:De(n),M:o(Ye,c,l)},r)}),b3=function(e){var r=p(al,p3,P,ui(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,li(e)),i=o(Ju,n,a);return L(bu,i,e,t,0)}else return ci},_i=$(function(e,r){var n=e,a=r,t=Kr(a);return{fU:t*Kr(n),fY:t*bn(n),c$:bn(a)}}),g3=function(){var e=$r(1),r=72,n=o(xr,0,r-1),a=o(Cc,r,o(Hn,cr,mo(1))),t=Bo(r/2),i=o(xr,0,t-1),c=o(Cc,t,o(Hn,sa(90),sa(-90))),l=vi(Je(o(Q,function(s){return o(Q,function(m){return{o:$n(o(_i,s,m)),dY:p(be,o(ee,Vn(m)*Vn(s),e),o(ee,Vn(m)*Na(s),e),o(ee,Na(m),e)),M:z(o(xc,s,mo(1)),o(xc,o(Bn,sa(90),m),sa(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Je(o(Q,function(s){return Je(o(Q,function(m){var d=o(u,s+1,m),f=o(u,s,m),h=o(u,s+1,m+1),g=o(u,s,m+1);return b([D(g,h,d),D(g,d,f)])},i))},n));return ii(b3(o(Lu,l,v)))}(),Ha=72,ma=2*Ha,h3=$(function(e,r){e:for(;;){var n=ma+1,a=o(Fa,ma,2*e+3),t=o(Fa,ma,2*e+2),i=2*e+1,c=2*e,l=ma,u=o(B,D(l,c,t),o(B,D(c,a,t),o(B,D(c,i,a),o(B,D(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),_3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),y3=$(function(e,r){e:for(;;){var n=p(_3,0,2*ye,e/Ha),a={bx:n,bP:0,bV:1},t={bx:n,bP:1,bV:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),S3=function(){var e=o(y3,Ha-1,b([{bx:0,bP:0,bV:0},{bx:0,bP:1,bV:0}])),r=o(h3,Ha-1,P);return o(Xn,e,r)}(),x3={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},wc=function(e){return lt(re(function(r,n,a,t,i,c,l,u){return C(te,o(bi,!0,u),x3,pi,S3,{ax:p(qn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},C3=function(e){var r=yu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:r.fU,J:r.fY,K:r.c$,bW:1}},w3=$(function(e,r){return o(Hu,C3(e),r)}),L3=U(function(e,r,n,a){var t=o(mi,n,g3),i=function(){var u=z(e,r);return u.a?u.b?Zn(b([t,wc()])):t:u.b?wc():M}(),c=vt(a),l=c;return o(w3,o(Ya,ke,ut(a)),o(di,D(l,l,l),i))}),P3=$(function(e,r){return L(L3,!0,!0,e,r)}),z3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),rv=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),M3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),T3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Ou,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(z3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(rv,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(M3,n,a,t,i,c)}},k3=T3,nv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(O1,t,r)]);case 1:var t=e.a,n=e.b;return b([o(l3,t,n)]);case 3:var t=e.a,a=e.b;return b([o(P3,k3(t),a)]);case 2:var t=e.a,i=e.b;return b([o(a3,t,i)]);case 4:var c=e.a,l=e.b;return b([o(m3,q1(c),l)]);default:var u=e.a;return o(Zo,nv,u)}},D3=function(e){return o(Zo,nv,e)},A3=$(function(e,r){return Yp({el:e.el,aJ:p0(e.ep),es:e.es,ex:$r(e.ex),b5:e.b5,aL:z(uc(nr(e.cM.fS)),uc(nr(e.cM.eV))),aQ:D3(r),eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),av=function(e){return e},B3=$(function(e,r){var n=e,a=qe(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(at,r.bH,r.aK),u=l;return{bz:an(u),eu:n,bF:nn(u),cD:0,bU:rn(u),cT:1,fU:-t,fY:-i,c$:-c}}),F3=function(e){return o(B3,av(!0),{aK:e.aK,eF:o(_i,pr(e.by),pr(e.bD)),bH:e.bH})},V3=function(e){return e},U3=function(e){return V3(1.2*o(Jn,2,e))},Vt=qo({fU:.37208,fY:.37529}),E3=$(function(e,r){return{$:2,a:e,b:r}}),tv=function(e){return{$:0,a:e}},da=function(e){var r=e;return r},Y3=function(e){var r=e;return r.eu},j3=tv(zn.a),R3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(Pr,n,z(P,P),r)}),N3=function(e){var r=e;return lr({ds:r.fU,dt:r.bU,du:0,dv:0,dw:r.fY,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.bz,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},H3=re(function(e,r,n,a,t,i,c,l){var u=o(R3,Y3,b([da(e),da(r),da(n),da(a)])),v=u.a,s=u.b;if(v.b){var m=$e(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,g=f.b,y=g.a,x=g.b,_=x.a;return o(E3,o(Q,N3,v),{be:o(Ge,d,h),bK:o(Ge,y,_),bL:o(Ge,t,i),bM:o(Ge,c,l)})}else return j3}else return tv({be:o(Ge,e,r),bK:o(Ge,n,a),bL:o(Ge,t,i),bM:o(Ge,c,l)})}),W3=U(function(e,r,n,a){return Ia(H3,e,r,n,a,Ue,Ue,Ue,Ue)}),G3=$(function(e,r){return o(we,function(n){if(n.$)return 0;var a=n.b;return a},o(Qa,e,r.aw))}),I3=$(function(e,r){return o(mr,0,rt(o(et,G3(e),r)))}),O3=$(function(e,r){return o(I3,e,r.ey)}),Tn=O3,J3={$:5},q3=J3,Z3=qo({fU:.44757,fY:.40745}),K3=function(e){return e},ov=L(Xe,114/255,159/255,207/255,1),Lc=function(e){return e},Ut=function(e){return e},X3={$:1},Q3=X3,eb=$(function(e,r){var n=e,a=Kn(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(at,r.bH,r.aK),u=l;return{bz:an(u),eu:n,bF:nn(u),cD:0,bU:rn(u),cT:2,fU:t,fY:i,c$:c}}),Pc=function(e){return o(eb,av(!0),{aK:e.aK,bH:e.bH,dY:ba(e.dY)})},iv=L(Xe,52/255,101/255,164/255,1),ea=$(function(e,r){return{$:0,a:e,b:r}}),Et=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Yt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),rb=yr({fU:-1,fY:0,c$:0}),nb=yr({fU:0,fY:-1,c$:0}),ab=Ze(function(e,r,n,a,t,i){var c=o(Et,n,i)?oi:qu,l=o(Et,r,t)?nt:nb,u=o(Et,e,a)?su:rb,v=D(le(o(Sr,e,a)),le(o(Sr,r,t)),le(o(Sr,n,i))),s=p(be,o(Yt,e,a),o(Yt,r,t),o(Yt,n,i)),m=ar({cu:s,cZ:u,c_:l,c0:c});return{eo:m,aL:v}}),cv=$(function(e,r){return Se(ab,Ir(e),Or(e),Jr(e),Ir(r),Or(r),Jr(r))}),mn=$(function(e,r){var n=r/2;return o(ea,e,o(cv,p(kr,-n,-n,-n),p(kr,n,n,n)))}),$t=function(e){return{$:5,a:e}},He=function(e){return $t(e)},lv=L(Xe,138/255,226/255,52/255,1),tb=L(Xe,173/255,127/255,168/255,1),jt=function(e){return p(Kl,0,1,e<=.04045?e/12.92:o(Jn,(e+.055)/1.055,2.4))},ob=function(e){var r=Wo(e),n=r.cG,a=r.b7,t=r.b1;return p(qn,jt(n),jt(a),jt(t))},Pe=function(e){return p(rv,0,so(ob(e)),so(0))},ft=$(function(e,r){return{$:2,a:e,b:r}}),yi=$(function(e,r){return{$:4,a:e,b:r}}),st=$(function(e,r){return{$:3,a:e,b:r}}),mt=$(function(e,r){return{$:1,a:e,b:r}}),ib=S(function(e,r,n){return{fU:e,fY:r,c$:n}}),ra=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c$:a.c$+n.c$}}),cb=$(function(e,r){return ar({cu:o(ra,e,en(r)),cZ:Er(r),c_:Yr(r),c0:jr(r)})}),lb=$(function(e,r){return{eo:o(cb,e,tt(r)),aL:it(r)}}),tn=$(function(e,r){return{eF:r,cu:e}}),ub=$(function(e,r){var n=r;return o(tn,o(ra,e,n.cu),n.eF)}),vb=$(function(e,r){var n=r;return{k:o(ub,e,n.k),e6:n.e6,fs:n.fs}}),$b=function(e){return e},Si=$(function(e,r){var n=hi(r),a=n.a,t=n.b;return $b(z(e(a),e(t)))}),fb=$(function(e,r){return o(Si,ra(e),r)}),dt=$(function(e,r){return{ev:r,fs:le(e)}}),sb=$(function(e,r){return o(dt,vt(r),o(ra,e,ut(r)))}),xi=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return D(e(a),e(t),e(i))}),mb=$(function(e,r){return o(xi,ra(e),r)}),pt=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(ib,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ea,s,o(lb,i,c));case 1:var s=r.a,l=r.b;return o(mt,s,o(mb,i,l));case 3:var s=r.a,u=r.b;return o(st,s,o(sb,i,u));case 2:var s=r.a,v=r.b;return o(ft,s,o(vb,i,v));case 4:var s=r.a,m=r.b;return o(yi,s,o(fb,i,m));default:var d=r.a;return $t(o(Q,pt(D(n,a,t)),d))}}),wr=function(e){return pt(D(e,0,0))},Ce=function(e){return pt(D(0,e,0))},Sa=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Kr(c),u=bn(c),v=a.eF,s=v,m=s.fU*u,d=l*m,f=m*m,h=s.fY*u,g=l*h,y=m*h,x=h*h,_=1-2*(f+x),w=s.c$*u,T=l*w,R=2*(y-T),Y=2*(y+T),E=m*w,j=2*(E+g),N=2*(E-g),F=h*w,Z=2*(F-d),X=2*(F+d),ue=w*w,se=1-2*(x+ue),ce=1-2*(f+ue);return{fU:se*i.fU+R*i.fY+j*i.c$,fY:Y*i.fU+ce*i.fY+Z*i.c$,c$:N*i.fU+X*i.fY+_*i.c$}}),na=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Kr(c),u=bn(c),v=a.cu,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c$-s.c$,h=a.eF,g=h,y=g.fU*u,x=l*y,_=y*y,w=g.fY*u,T=l*w,R=y*w,Y=w*w,E=1-2*(_+Y),j=g.c$*u,N=l*j,F=2*(R-N),Z=2*(R+N),X=y*j,ue=2*(X+T),se=2*(X-T),ce=w*j,pe=2*(ce-x),Fe=2*(ce+x),ze=j*j,zr=1-2*(Y+ze),Mr=1-2*(_+ze);return{fU:s.fU+zr*m+F*d+ue*f,fY:s.fY+Z*m+Mr*d+pe*f,c$:s.c$+se*m+Fe*d+E*f}}),db=S(function(e,r,n){return ar({cu:p(na,e,r,en(n)),cZ:p(Sa,e,r,Er(n)),c_:p(Sa,e,r,Yr(n)),c0:p(Sa,e,r,jr(n))})}),pb=S(function(e,r,n){return{eo:p(db,e,r,tt(n)),aL:it(n)}}),bb=$(function(e,r){var n=o(na,e,r),a=o(Sa,e,r);return function(t){var i=t;return o(tn,n(i.cu),a(i.eF))}}),gb=S(function(e,r,n){var a=n;return{k:p(bb,e,r,a.k),e6:a.e6,fs:a.fs}}),hb=S(function(e,r,n){return o(Si,o(na,e,r),n)}),_b=S(function(e,r,n){return o(dt,vt(n),p(na,e,r,ut(n)))}),yb=S(function(e,r,n){return o(xi,o(na,e,r),n)}),bt=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ea,l,p(pb,e,r,a));case 1:var l=n.a,t=n.b;return o(mt,l,p(yb,e,r,t));case 3:var l=n.a,i=n.b;return o(st,l,p(_b,e,r,i));case 2:var l=n.a,c=n.b;return o(ft,l,p(gb,e,r,c));case 4:var l=n.a,u=n.b;return o(yi,l,p(hb,e,r,u));default:var v=n.a;return $t(o(Q,o(bt,e,r),v))}}),Sb=o(tn,ke,ai),Wa=$(function(e,r){return p(bt,Sb,pr(e),r)}),xb=o(tn,ke,ti),fr=$(function(e,r){return p(bt,xb,pr(e),r)}),Cb=o(tn,ke,mu),gn=$(function(e,r){return p(bt,Cb,pr(e),r)}),uv=$(function(e,r){return(r-ml(r/e)*e)/e}),rr=$(function(e,r){return 360*o(uv,e,r)}),wb=Dv,qr=function(e){return e*ye/180},Lb=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(mt,e,p(Ve,p(kr,n.fU,n.fY,n.c$),p(kr,a.fU,a.fY,a.c$),p(kr,t.fU,t.fY,t.c$)))}),xa=L(Xe,255/255,255/255,255/255,1),vv=function(){var e=hr(3)/2,r=o(Lb,Pe(xa),D({fU:e,fY:0,c$:0},{fU:0,fY:.5,c$:0},{fU:0,fY:-.5,c$:0})),n=o(wr,-(e/3),o(fr,wb(1/3),r));return o(Ce,-(e/3),o(Wa,qr(90),He(b([o(wr,-(e/3),r),n,o(gn,qr(120),n),o(gn,qr(240),n)]))))}(),Pb=function(e){var r=function(n){return o(gn,o(rr,300,e.D),o(fr,o(rr,300,e.D),o(Wa,o(rr,300,e.D),n)))};return He(b([o(Ce,2,o(wr,-2,r(o(mn,Pe(lv),1)))),o(Ce,2,o(wr,2,r(o(mn,Pe(iv),1)))),o(Ce,4,r(o(mn,Pe(tb),1))),o(Ce,1.5,r(vv))]))},po=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=D(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ea,e,o(cv,p(kr,-c,-l,-u),p(kr,c,l,u)))}),zb=S(function(e,r,n){return{k:o(tn,e,r),e6:le(n.e6),fs:le(n.fs)}}),Mb=S(function(e,r,n){return o(ft,e,p(zb,ke,nt,{e6:$r(n),fs:$r(r)}))}),aa=S(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c$:a.c$+r*(t.c$-a.c$)}}),Tb=S(function(e,r,n){var a=tt(n),t=Er(a),i=Yr(a),c=jr(a),l=p(aa,e,r,en(a)),u=r>=0?ar({cu:l,cZ:t,c_:i,c0:c}):ar({cu:l,cZ:Dr(t),c_:Dr(i),c0:Dr(c)}),v=it(n),s=v.a,m=v.b,d=v.c,f=le(o(ee,r,s)),h=le(o(ee,r,m)),g=le(o(ee,r,d));return{eo:u,aL:D(f,h,g)}}),zc=function(e){return Ku(gi(e))},kb=function(e){return Xu(gi(e))},Db=S(function(e,r,n){var a=le(o(ee,r,ev(n))),t=le(o(ee,r,Qu(n))),i=r>=0?zc(n):Dr(zc(n)),c=p(aa,e,r,kb(n));return{k:o(tn,c,i),e6:t,fs:a}}),Ab=S(function(e,r,n){return o(Si,o(aa,e,r),n)}),Bb=S(function(e,r,n){return o(dt,o(ee,O(r),vt(n)),p(aa,e,r,ut(n)))}),Fb=S(function(e,r,n){return o(xi,o(aa,e,r),n)}),Un=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ea,c,p(Tb,ke,e,n));case 1:var c=r.a,a=r.b;return o(mt,c,p(Fb,ke,e,a));case 3:var c=r.a,t=r.b;return o(st,c,p(Bb,ke,e,t));case 2:var c=r.a,i=r.b;return o(ft,c,p(Db,ke,e,i));case 4:var c=r.a,l=r.b;return o(yi,c,p(Ab,ke,e,l));default:var u=r.a;return $t(o(Q,Un(e),u))}}),Vb=function(){var e=He(b([o(mn,Pe(xa),1),o(fr,qr(45),o(mn,Pe(xa),1))]));return He(b([He(b([e,o(Ce,-.4,o(Un,1.3,e))])),o(Ce,-.7,p(Mb,Pe(xa),1,.5))]))}(),Mc=L(Xe,211/255,215/255,207/255,1),Ub=L(Xe,193/255,125/255,17/255,1),Eb=$(function(e,r){return o(we,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Qa,e,r.aw))}),Yb=$(function(e,r){return o(mr,0,rt(o(et,Eb(e),r)))}),jb=$(function(e,r){return o(Yb,e,r.ey)}),Rb=jb,Nb=U(function(e,r,n,a){var t=D(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return L(Xe,f,d,m,a)}),Hb=S(function(e,r,n){return L(Nb,e,r,n,1)}),Wb=function(e){return 2*ye*e},bo=U(function(e,r,n,a){return e+(r-e)*(1+Kr(Wb(o(uv,n,a))))/2}),Gb=function(e){var r=o(Rb,"number of tree blocks",e),n=function(a){var t=o(An,2,.2*(r-a)),i=p(Hb,L(bo,a/r,1,10,e.D),.6,.6),c=.25;return o(fr,o(Tn,"turning speed of the tree",e)*a*L(bo,3,5,10,e.D),o(Ce,a*1.2*c,o(po,Pe(i),D(t,c,t))))};return He(b([o(po,Pe(Ub),D(.2,8,.2)),He(o(Q,n,o(xr,0,r-1)))]))},Ib=function(e){var r=function(a){return o(Ce,-1,o(po,a,D(10,1,10)))},n=function(a){return He(b([r(a),o(fr,qr(45),r(a))]))};return o(fr,o(rr,1e3,e.D),He(b([Vb,n(Pe(Mc)),o(Ce,-.1,o(Un,1.1,n(Pe(iv)))),o(Ce,-.2,o(Un,1.2,n(Pe(Mc)))),o(Ce,1,o(wr,5,Gb(e))),He(o(Q,function(a){return o(fr,qr(a*45),o(Ce,-1/3,o(wr,5.5,o(Un,2,vv))))},o(xr,1,7)))])))},Ob=L(Xe,245/255,121/255,0/255,1),Jb=function(e){var r=14;return He(o(Q,function(n){return o(Ce,4,o(gn,o(rr,1e3,e.D),o(Wa,o(rr,1e3,e.D),o(fr,-o(rr,200,e.D),o(fr,-(n/r*qr(360)),o(wr,1.3,o(Ce,L(bo,-1,1,10,e.D),o(Wa,o(rr,600,e.D),o(gn,o(rr,300,e.D),o(mn,Pe(Ob),.3))))))))))},o(xr,0,r-1)))},qb=function(e){return pt(D(0,0,e))},Tc=$(function(e,r){return o(st,e,o(dt,$r(r),ke))}),Zb=function(e){return He(b([o(fr,-o(rr,640,e.D),o(qb,3.5,o(gn,o(rr,100,e.D),He(b([o(wr,-.02,o(Tc,Pe(ov),.5)),o(wr,.02,o(Tc,Pe(lv),.5))])))))]))},Kb=$(function(e,r){return b([Ib(e),Pb(e),Jb(e),Zb(e)])}),kc=function(e){var r=e;return r},Xb=function(e){e:for(;;){if(Ar(e.di,cr)&&Ar(e.dj,cr))return Ue;if(o(ql,le(e.di),le(e.dj))){var r={aK:e.aK,di:e.dj,dj:e.di,ee:Dr(e.ee)};e=r;continue e}else{var n=O(kc(e.dj)/ye),a=O(kc(e.di)/ye),t=qe(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(at,Su(1),e.aK),v=u;return{bz:a*an(v),eu:!1,bF:a*nn(v),cD:n/a,bU:a*rn(v),cT:3,fU:i,fY:c,c$:l}}}},Qb=function(e){return Xb({aK:e.aK,di:e.di,dj:e.dj,ee:o(_i,pr(e.by),pr(e.bD))})},eg=$(function(e,r){var n=F3({by:o(Tn,"azimuth for third light",e),aK:d0(K3(2e3)),bD:o(Tn,"elevation for third light",e),bH:Ut(120)}),a=Pc({aK:Vt,bH:Lc(6e3),dY:{fU:2,fY:3,c$:1}}),t=Qb({by:o(Tn,"azimuth for fourth light",e),aK:Vt,bD:o(Tn,"elevation for fourth light",e),di:Ut(20),dj:Ut(10)}),i=Pc({aK:Z3,bH:Lc(6e3),dY:{fU:-2,fY:4,c$:1}});return o(A3,{el:Q3,ep:ov,es:s0,ex:.1,b5:e.b5,eM:U3(6),e8:L(W3,i,a,n,t),cM:e.cM,fK:q3,fR:Vt},o(Kb,e,r))}),rg=L(Hd,eg,Zd,qd,Wd);const ng={Main:{init:rg(o(A,function(e){return Ee({e0:e})},o(k,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ee({D:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(k,"clock",me))},o(k,"devicePixelRatio",me))},o(k,"dt",me))},o(k,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(m){return Ee({ek:m,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(k,"alt",K))},o(k,"control",K))},o(k,"down",K))},o(k,"downs",Da(Rn)))},o(k,"left",K))},o(k,"pressedKeys",Da(Rn)))},o(k,"right",K))},o(k,"shift",K))},o(k,"up",K))))},o(k,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Ee({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(k,"down",K))},o(k,"isDown",K))},o(k,"move",K))},o(k,"rightDown",K))},o(k,"rightUp",K))},o(k,"up",K))},o(k,"x",me))},o(k,"y",me))))},o(k,"screen",o(A,function(r){return o(A,function(n){return Ee({eV:n,fS:r})},o(k,"height",me))},o(k,"width",me))))},o(k,"wheel",o(A,function(e){return o(A,function(r){return Ee({eC:r,eD:e})},o(k,"deltaX",me))},o(k,"deltaY",me)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ag=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},tg=()=>{Rt("pointerdown"),Rt("wheel"),Rt("keydown")},Rt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},og=ng.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});tg();ag(og);
