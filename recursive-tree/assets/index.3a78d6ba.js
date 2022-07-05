const Ku=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ku();function _r(e,r,n){return n.a=e,n.f=r,n}function $(e){return _r(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return _r(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return _r(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return _r(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ve(e){return _r(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ma(e){return _r(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return _r(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ot(e){return _r(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Da(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function ev(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var rv=[];function nv(e){return e.length}var av=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),tv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),ov=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var iv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+cv()),r});function cv(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=gt(e,r,0,a);t&&(n=a.pop());t=gt(n.a,n.b,0,a));return t}function gt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=xi(e),r=xi(r));for(var t in e)if(!gt(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var lv=$(function(e,r){var n=I(e,r);return n<0?Ic:n?Of:Uc}),kn=0;function z(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var uv=$(nr);function _(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function Ba(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var vv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Ve(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ba(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return _(Ba(r).sort(function(n,a){var t=o(e,n,a);return t===Uc?0:t===Ic?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var $v=$(Math.pow);$(function(e,r){return r%e});var fv=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),sv=Math.PI,mv=Math.cos,dv=Math.sin,pv=Math.tan,bv=$(Math.atan2);function gv(e){return e}function hv(e){return e===1/0||e===-1/0}var _v=Math.ceil,wv=Math.floor,yv=Math.round,xv=Math.sqrt,ui=Math.log,Sv=isNaN;function Tv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Cv=$(function(e,r){return e+r});function Lv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function Pv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function zv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var kv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Mv=$(function(e,r){return r.split(e)}),Dv=$(function(e,r){return r.join(e)}),Bv=y(function(e,r,n){return n.slice(e,r)});function Av(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Fv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Vv=$(function(e,r){return r.indexOf(e)>-1}),Ev=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Rv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function hc(e){return e+""}function jv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function Nv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function Gv(e){return Ba(e).join("")}function Wv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Hv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Xv(e){return{$:0,a:e}}function qt(e){return{$:2,b:e}}var Uv=qt(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Iv=qt(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),Ov=qt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function Jv(e){return{$:3,b:e}}var qv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var Yv=$(function(e,r){return{$:10,b:r,h:e}}),Zv=$(function(e,r){return wr(e,[r])}),Qv=y(function(e,r,n){return wr(e,[r,n])});E(function(e,r,n,a){return wr(e,[r,n,a])});_e(function(e,r,n,a,t){return wr(e,[r,n,a,t])});Ve(function(e,r,n,a,t,i){return wr(e,[r,n,a,t,i])});Ma(function(e,r,n,a,t,i,c){return wr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return wr(e,[r,n,a,t,i,c,l])});Ot(function(e,r,n,a,t,i,c,l,u){return wr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(co,"This is not valid JSON! "+a.message,r))}});var _c=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return Hn(r)?vi(e.b,r,_):Ze("a LIST",r);case 4:return Hn(r)?vi(e.b,r,Kv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Xe(v)?v:ye(o(Si,n,v.a));case 7:var a=e.e;if(!Hn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Xe(v)?v:ye(o(Oc,a,v.a));case 8:if(typeof r!="object"||r===null||Hn(r))return Ze("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Xe(v))return ye(o(Si,i,v.a));t=nr(z(i,v.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Xe(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Xe(v)?je(e.h(v.a),r):v;case 11:for(var s=L,m=e.g;m.b;m=m.b){var v=je(m.a,r);if(Xe(v))return v;s=nr(v.a,s)}return ye(Jf(Ae(s)));case 1:return ye(o(co,e.a,r));case 0:return ue(e.a)}}function vi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Xe(c))return ye(o(Oc,i,c.a));t[i]=c.a}return ue(n(t))}function Hn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Kv(e){return o($s,e.length,function(r){return e[r]})}function Ze(e,r){return ye(o(co,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&$i(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return $i(e.g,r.g)}}function $i(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var e$=$(function(e,r){return JSON.stringify(r,null,e)+""});function wc(e){return e}y(function(e,r,n){return n[e]=r,n});function jr(e){return{$:0,a:e}}function r$(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function n$(e){return{$:5,b:e}}var a$=0;function Yt(e){var r={$:0,e:a$++,f:e,g:null,h:[]};return Zt(r),r}function yc(e){return sr(function(r){r(jr(Yt(e)))})}function xc(e,r){e.h.push(r),Zt(e)}var t$=$(function(e,r){return sr(function(n){xc(e,r),n(jr(kn))})}),Ya=!1,fi=[];function Zt(e){if(fi.push(e),!Ya){for(Ya=!0;e=fi.shift();)o$(e);Ya=!1}}function o$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Zt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Qt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Qt(e,r,n,a,t,i){var c=o(_c,e,r?r.flags:void 0);Xe(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=i$(l,d);function d(f,b){var g=o(a,f,v);s(v=g.a,b),mi(l,g.b,t(v))}return mi(l,u.b,t(v)),m?{ports:m}:{}}var er={};function i$(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=l$(t,r)}return n}function c$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function l$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ht,l,n$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Yt(o(ht,l,e.b))}var u$=$(function(e,r){return sr(function(n){e.g(r),n(jr(kn))})});$(function(e,r){return o(t$,e.h,{$:0,a:r})});function Sc(e){return function(r){return{$:1,k:e,l:r}}}function v$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var si=[],Za=!1;function mi(e,r,n){if(si.push({p:e,q:r,r:n}),!Za){Za=!0;for(var a;a=si.shift();)$$(a.p,a.q,a.r);Za=!1}}function $$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)xc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=f$(e,t,a,r.l);n[t]=s$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function f$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function s$(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function m$(e){er[e]&&an(3)}$(function(e,r){return r});function d$(e,r){return m$(e),er[e]={f:p$,u:r,a:b$},Sc(e)}var p$=$(function(e,r){return function(n){return e(r(n))}});function b$(e,r){var n=L,a=er[e].u,t=jr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(_c,a,c);Xe(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var va,cr=typeof document!="undefined"?document:{};function Kt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function _t(e){return{$:0,a:e}}var Tc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:eo(n),e:t,f:e,b:i}})}),Nr=Tc(void 0),g$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:eo(n),e:t,f:e,b:i}})}),h$=g$(void 0);function _$(e,r,n,a){return{$:3,d:eo(e),g:r,h:n,i:a}}var w$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return yr([e,r],function(){return e(r)})});y(function(e,r,n){return yr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return yr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return yr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ve(function(e,r,n,a,t,i){return yr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ma(function(e,r,n,a,t,i,c){return yr([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return yr([e,r,n,a,t,i,c,l],function(){return Jt(e,r,n,a,t,i,c,l)})});Ot(function(e,r,n,a,t,i,c,l,u){return yr([e,r,n,a,t,i,c,l,u],function(){return Da(e,r,n,a,t,i,c,l,u)})});var Cc=$(function(e,r){return{$:"a0",n:e,o:r}}),y$=$(function(e,r){return{$:"a1",n:e,o:r}}),Lc=$(function(e,r){return{$:"a2",n:e,o:r}}),Mn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function x$(e){return e=="script"?"p":e}function S$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Cc,r.n,T$(e,r.o)):r});function T$(e,r){var n=fo(r);return{$:r.$,a:n?p(fs,n<3?C$:L$,Me(e),r.a):o(ma,e,r.a)}}var C$=$(function(e,r){return z(e(r.a),r.b)}),L$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function eo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?di(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?di(c,t,i):c[t]=i}return r}function di(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Kt(c,br(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?P$(e,t):a==="a0"?M$(e,r,t):a==="a3"?z$(e,t):a==="a4"?k$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function P$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function z$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function k$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function M$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=D$(r,i),e.addEventListener(t,c,ro&&{passive:fo(i)<2}),a[t]=c}}var ro;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ro=!0}}))}catch{}function D$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Xe(i)){for(var c=fo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function B$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function Pc(e,r){var n=[];return Ue(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ue(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=G$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ue(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,b=e.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){we(n,0,a,r);return}(f?!A$(m,d):m!==d)&&we(n,2,a,d),Ue(b,g,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:pi(e,r,n,a,F$);return;case 2:pi(e,r,n,a,V$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=no(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function A$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function pi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=no(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function no(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=no(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&B$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function F$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ue(s,i[v],n,++a),a+=s.b||0}}function V$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var b=l[m],g=u[d],w=b.a,x=g.a,h=b.b,T=g.b,k=void 0,G=void 0;if(w===x){f++,Ue(h,T,t,f),f+=h.b||0,m++,d++;continue}var j=l[m+1],R=u[d+1];if(j){var N=j.a,W=j.b;G=x===N}if(R){var F=R.a,Y=R.b;k=w===F}if(k&&G){f++,Ue(h,Y,t,f),$n(i,t,w,T,d,c),f+=h.b||0,f++,fn(i,t,w,W,f),f+=W.b||0,m+=2,d+=2;continue}if(k){f++,$n(i,t,x,T,d,c),Ue(h,Y,t,f),f+=h.b||0,m+=1,d+=2;continue}if(G){f++,fn(i,t,w,h,f),f+=h.b||0,f++,Ue(W,T,t,f),f+=W.b||0,m+=2,d+=1;continue}if(j&&N===F){f++,fn(i,t,w,h,f),$n(i,t,x,T,d,c),f+=h.b||0,f++,Ue(W,Y,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var b=l[m],h=b.b;fn(i,t,b.a,h,f),f+=h.b||0,m++}for(;d<s;){var Q=Q||[],g=u[d];$n(i,t,g.a,g.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&we(n,8,a,{w:t,x:c,y:Q})}var zc="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+zc,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ue(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}fn(e,r,n+zc,a,t)}function kc(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)kc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,w=0;w<b.length;w++){t++;var x=d===1?b[w]:b[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=sn(g[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function Mc(e,r,n,a){return n.length===0?e:(kc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=E$(t,a);t===e&&(e=i)}return e}function E$(e,r){switch(r.$){case 0:return R$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return j$(e,r);case 5:return r.s(e);default:an(10)}}function R$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function j$(e,r){var n=r.s,a=N$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Kt(e,a),e}function N$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Kt(n,i.c===2?i.s:br(i.z,r.u))}return n}}function ao(e){if(e.nodeType===3)return _t(e.textContent);if(e.nodeType!==1)return _t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(Mn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=nr(ao(v[a]),u);return p(Nr,l,r,u)}function G$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var W$=E(function(e,r,n,a){return Qt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=ao(l);return Dc(i,function(v){var s=c(v),m=Pc(u,s);l=Mc(l,u,m,t),u=s})})});E(function(e,r,n,a){return Qt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=cr.title,v=cr.body,s=ao(v);return Dc(i,function(m){va=c;var d=l(m),f=Nr("body")(L)(d.eu),b=Pc(s,f);v=Mc(v,s,b,t),s=f,va=0,u!==d.fK&&(cr.title=u=d.fK)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Dc(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}$(function(e,r){return o(po,so,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(po,so,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(po,so,sr(function(){history.replaceState({},"",r),e()}))});var H$={addEventListener:function(){},removeEventListener:function(){}},X$=typeof window!="undefined"?window:H$;y(function(e,r,n){return yc(sr(function(a){function t(i){Yt(n(i))}return e.addEventListener(r,t,ro&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Xe(n)?ne(n.a):q});function Bc(e,r){return sr(function(n){fa(function(){var a=document.getElementById(e);n(a?jr(r(a)):r$(ms(e)))})})}function U$(e){return sr(function(r){fa(function(){r(jr(e()))})})}$(function(e,r){return Bc(r,function(n){return n[e](),kn})});$(function(e,r){return U$(function(){return X$.scroll(e,r),kn})});y(function(e,r,n){return Bc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,kn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var I$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var O$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):q}a.push(C(Cl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(C(Cl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var J$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var to=new Float64Array(3),bi=new Float64Array(3),gi=new Float64Array(3),Y$=y(function(e,r,n){return new Float64Array([e,r,n])}),Z$=function(e){return e[0]},Q$=function(e){return e[1]},K$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var ef=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Ac(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Ac);function Fc(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(Ac(e,r,n),n)}$(Fc);function Vc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Vc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var rf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function yt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(yt);$(function(e,r){var n,a=to,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var nf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var af=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},tf=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/of(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function of(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var cf=new Float64Array(16),lf=new Float64Array(16),uf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},vf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Ec(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ve(Ec);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Ec(c,l,i,t,n,a)});function Rc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ve(Rc);E(function(e,r,n,a){return Rc(e,r,n,a,-1,1)});function jc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],b=e[11],g=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],pe=r[13],ke=r[14],Se=r[15];return n[0]=a*T+l*k+m*G+g*j,n[1]=t*T+u*k+d*G+w*j,n[2]=i*T+v*k+f*G+x*j,n[3]=c*T+s*k+b*G+h*j,n[4]=a*R+l*N+m*W+g*F,n[5]=t*R+u*N+d*W+w*F,n[6]=i*R+v*N+f*W+x*F,n[7]=c*R+s*N+b*W+h*F,n[8]=a*Y+l*Q+m*ie+g*ve,n[9]=t*Y+u*Q+d*ie+w*ve,n[10]=i*Y+v*Q+f*ie+x*ve,n[11]=c*Y+s*Q+b*ie+h*ve,n[12]=a*oe+l*pe+m*ke+g*Se,n[13]=t*oe+u*pe+d*ke+w*Se,n[14]=i*oe+v*pe+f*ke+x*Se,n[15]=c*oe+s*pe+b*ke+h*Se,n}$(jc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],b=e[14],g=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*g+c*w+v*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+m*x,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+m*k,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+m*R,n[11]=0,n[12]=a*N+c*W+v*F+d,n[13]=t*N+l*W+s*F+f,n[14]=i*N+u*W+m*F+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=sa(r,to);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Vc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,b=i*c*v,g=i*l*v,w=c*l*v,x=i*i*v+u,h=b+f,T=g-d,k=b-f,G=c*c*v+u,j=w+m,R=g+d,N=w-m,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],pe=n[6],ke=n[7],Se=n[8],dr=n[9],pr=n[10],qa=n[11],qu=n[12],Yu=n[13],Zu=n[14],Qu=n[15];return a[0]=F*x+ve*h+Se*T,a[1]=Y*x+oe*h+dr*T,a[2]=Q*x+pe*h+pr*T,a[3]=ie*x+ke*h+qa*T,a[4]=F*k+ve*G+Se*j,a[5]=Y*k+oe*G+dr*j,a[6]=Q*k+pe*G+pr*j,a[7]=ie*k+ke*G+qa*j,a[8]=F*R+ve*N+Se*W,a[9]=Y*R+oe*N+dr*W,a[10]=Q*R+pe*N+pr*W,a[11]=ie*R+ke*N+qa*W,a[12]=qu,a[13]=Yu,a[14]=Zu,a[15]=Qu,a});function $f(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y($f);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function ff(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(ff);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],b=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=b,t[10]=g,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+b*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],b=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=b,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+b*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Fc(e,r,to),t=sa(yt(n,a,bi),bi),i=sa(yt(a,t,gi),gi),c=cf,l=lf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,jc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var hi=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function oo(e){for(var r=0;e.b;e=e.b)r++;return r}var sf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},mf=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),df=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),pf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),bf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),gf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),hf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),_f=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),wf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),yf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),xf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Sf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Tf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Cf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Nc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Gc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Lf=function(e){e.gl.disable(e.gl.CULL_FACE)},Pf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},zf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},kf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},_i=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Mf=[Sf,Tf,Cf,Nc,Gc,Lf,Pf,zf,kf];function wi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Df(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Wc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Bf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,b,g,w,x){var h;if(t===1)for(h=0;h<b;h++)f[g++]=b===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<b;h++)f[g++]=b===1?w[T][x]:w[T][x][h]})}var u=Wc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(oo(n.b)*s);Sn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Af(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Ff(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*oo(r.b),indexBuffer:null,buffers:{}}}function Ff(e,r){var n=new Uint32Array(oo(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function yi(e,r){return e+"#"+r}var Hc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Nc(n),Gc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=yi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=hi++,v||(v=wi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=hi++,s||(s=wi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Df(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Vf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(b)}c=yi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Ef(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Af(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],b=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Bf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Wc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(b+T),a.vertexAttribPointer(b+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,Sn(tp(n),i.a),u=0;u<_i.length;u++){var k=n[_i[u]];k.toggle!==n.toggle&&k.enabled&&(Mf[u](n),k.enabled=!1,k.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return Sn(t,e.g),r});function Vf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,b){var g=b.name,w=e.getUniformLocation(f,g);switch(b.type){case e.INT:return function(h){i[g]!==h&&(e.uniform1i(w,h),i[g]=h)};case e.FLOAT:return function(h){i[g]!==h&&(e.uniform1f(w,h),i[g]=h)};case e.FLOAT_VEC2:return function(h){i[g]!==h&&(e.uniform2f(w,h[0],h[1]),i[g]=h)};case e.FLOAT_VEC3:return function(h){i[g]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[g]=h)};case e.FLOAT_VEC4:return function(h){i[g]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[g]=h)};case e.FLOAT_MAT4:return function(h){i[g]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[g]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[g]!==h&&(e.uniform1i(w,x),i[g]=h)};case e.BOOL:return function(h){i[g]!==h&&(e.uniform1i(w,h),i[g]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Ef(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Rf=y(function(e,r,n){return _$(r,{g:n,f:{},h:e},Uf,If)}),jf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Nf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Gf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Wf=$(function(e,r){e.contextAttributes.antialias=!0}),Hf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Xf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Uf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(ap,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),sf(function(){return o(Hc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function If(e,r){return r.f=e.f,Hc(r)}var D=uv,Xn=iv,Xc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Xn,e,l,v)}else{var u=c.a;return p(Xn,i,l,u)}});return p(Xn,i,p(Xn,e,r,t),a)}),io=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(io,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),xi=function(e){return p(io,y(function(r,n,a){return o(D,z(r,n),a)}),L,e)},Uc=1,Of=2,Ic=0,ye=function(e){return{$:1,a:e}},co=$(function(e,r){return{$:3,a:e,b:r}}),Si=$(function(e,r){return{$:0,a:e,b:r}}),Oc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Jf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},qf=Fv,Yf=e$,Be=hc,Lr=$(function(e,r){return o(Dv,e,Ba(r))}),lo=$(function(e,r){return _(o(Mv,e,r))}),Jc=function(e){return o(Lr,`
    `,o(lo,`
`,e))},Dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Vr=function(e){return p(Dn,$(function(r,n){return n+1}),0,e)},Zf=vv,Qf=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),Qr=$(function(e,r){return p(Qf,e,r,L)}),qc=$(function(e,r){return p(Zf,e,o(Qr,0,Vr(r)-1),r)}),rr=Wv,Yc=function(e){var r=rr(e);return 97<=r&&r<=122},Zc=function(e){var r=rr(e);return r<=90&&65<=r},Kf=function(e){return Yc(e)||Zc(e)},es=function(e){var r=rr(e);return r<=57&&48<=r},rs=function(e){return Yc(e)||Zc(e)||es(e)},Ae=function(e){return p(Dn,D,L,e)},tn=Lv,ns=$(function(e,r){return`

(`+(Be(e+1)+(") "+Jc(as(r))))}),as=function(e){return o(ts,e,L)},ts=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=tn(n);if(g.$===1)return!1;var w=g.a,x=w.a,h=w.b;return Kf(x)&&o(qf,rs,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(D,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(D,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Lr,"",Ae(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Be(Vr(s))+" ways:"));return o(Lr,`

`,o(D,b,o(qc,ns,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Lr,"",Ae(r)):"!"}();default:var d=e.a,f=e.b,b=function(){return r.b?"Problem with the value at json"+(o(Lr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return b+(Jc(o(Yf,4,f))+(`

`+d))}}),Fe=32,xt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),St=rv,uo=_v,vo=$(function(e,r){return ui(r)/ui(e)}),os=gv,Tn=uo(o(vo,2,Fe)),Qc=C(xt,0,Tn,St,St),Kc=av,el=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var rl=wv,Tt=nv,ze=$(function(e,r){return I(e,r)>0?e:r}),is=function(e){return{$:0,a:e}},$o=tv,cs=$(function(e,r){e:for(;;){var n=o($o,Fe,e),a=n.a,t=n.b,i=o(D,is(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),ls=function(e){var r=e.a;return r},us=$(function(e,r){e:for(;;){var n=uo(r/Fe);if(n===1)return o($o,Fe,e).a;var a=o(cs,e,L),t=n;e=a,r=t;continue e}}),nl=$(function(e,r){if(r.l){var n=r.l*Fe,a=rl(o(vo,Fe,n-1)),t=e?Ae(r.z):r.z,i=o(us,t,r.l);return C(xt,Tt(r.p)+n,o(ze,5,a*Tn),i,r.p)}else return C(xt,Tt(r.p),Tn,St,r.p)}),vs=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(nl,!1,{z:a,l:n/Fe|0,p:t});var i=el(p(Kc,Fe,r,e)),c=e,l=r-Fe,u=n,v=o(D,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),$s=$(function(e,r){if(e<=0)return Qc;var n=e%Fe,a=p(Kc,n,e-n,r),t=e-n-Fe;return S(vs,r,t,e,L,a)}),Xe=function(e){return!e.$},B=Yv,Z=Uv,M=qv,$e=Iv,ma=Zv,fs=Qv,Me=Xv,fo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=Nr("div"),ss=function(e){return{$:2,a:e}},al=$(function(e,r){return e}),tl=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Mr=function(e){return e},ms=Mr,Ti=Ve(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ds=Vv,Pr=Pv,Or=Bv,Bn=$(function(e,r){return e<1?r:p(Or,e,Pr(r),r)}),Aa=Rv,Fa=function(e){return e===""},Va=$(function(e,r){return e<1?"":p(Or,0,e,r)}),ol=jv,Ci=_e(function(e,r,n,a,t){if(Fa(t)||o(ds,"@",t))return q;var i=o(Aa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=ol(o(Bn,c+1,t));if(l.$===1)return q;var u=l;return ne(se(Ti,e,o(Va,c,t),u,r,n,a))}else return ne(se(Ti,e,t,q,r,n,a))}),Li=E(function(e,r,n,a){if(Fa(a))return q;var t=o(Aa,"/",a);if(t.b){var i=t.a;return S(Ci,e,o(Bn,i,a),r,n,o(Va,i,a))}else return S(Ci,e,"/",r,n,a)}),Pi=y(function(e,r,n){if(Fa(n))return q;var a=o(Aa,"?",n);if(a.b){var t=a.a;return C(Li,e,ne(o(Bn,t+1,n)),r,o(Va,t,n))}else return C(Li,e,q,r,n)});$(function(e,r){if(Fa(r))return q;var n=o(Aa,"#",r);if(n.b){var a=n.a;return p(Pi,e,ne(o(Bn,a+1,r)),o(Va,a,r))}else return p(Pi,e,q,r)});var ps=Ev,so=function(e){},An=jr,bs=An(0),il=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Dn,e,r,Ae(m)):C(il,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=y(function(e,r,n){return C(il,e,r,0,n)}),re=$(function(e,r){return p(mr,$(function(n,a){return o(D,e(n),a)}),L,r)}),da=ht,mo=$(function(e,r){return o(da,function(n){return An(e(n))},r)}),gs=y(function(e,r,n){return o(da,function(a){return o(da,function(t){return An(o(e,a,t))},n)},r)}),hs=function(e){return p(mr,gs(D),An(L),e)},_s=u$,ws=$(function(e,r){var n=r;return yc(o(da,_s(e),n))}),ys=y(function(e,r,n){return o(mo,function(a){return 0},hs(o(re,ws(e),r)))}),xs=y(function(e,r,n){return An(0)}),Ss=$(function(e,r){var n=r;return o(mo,e,n)});er.Task=c$(bs,ys,xs,Ss);var Ts=Sc("Task"),po=$(function(e,r){return Ts(o(mo,e,r))}),Cs=W$,Ls=Tv,pa={$:1},cl=function(e){return{$:2,a:e}},Ea={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},Ps=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Ne,r,{B:i,ab:c,T:o(D,a,n)}))}else return q},ll=function(e){var r=e.b;return o(Ne,Ea,r)},$r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),zs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?ll(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,on(n).a4)>0?o(te,Ps,$r(o(Ne,pa,t))):Mr)(o(Ne,cl({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(tl,l.eA,Qe(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(Ne,Ea,{B:z(v,s),ab:L,T:o(D,t.B,t.T)})}}),ul=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ks=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Ms=$(function(e,r){return Ae(p(ks,e,r,L))}),vl=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,h=m.a,d=m.b,c=d.a,f=d.b,s=f.a,b=f.b,g=b.a,w=b.b;return e>1e3?o(D,h,o(D,c,o(D,s,o(D,g,o(Ms,r-4,w))))):o(D,h,o(D,c,o(D,s,o(D,g,p(vl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),Ds=$(function(e,r){return p(vl,0,e,r)}),Bs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(_([a]),t)),c=o(Ds,e,i),l=o(ul,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,pa,{B:u,ab:v,T:Ae(c)})}else{var s=Ae(c);if(s.b){var m=s.a,d=s.b;return o(Ne,pa,{B:m,ab:L,T:d})}else return r}}),As=function(e){var r=e.b;return o(Ne,pa,r)},Fs=function(e){var r=e.b;return o(Ne,cl({cY:on(e).a4}),r)},Vs=$(function(e,r){switch(e.$){case 1:return As(r);case 2:return ll(r);case 3:return Fs(r);default:var n=e.a;return o(Bs,n,r)}}),$l=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Es=$(function(e,r){return Qe(r,{av:e(r.av)})}),Rs=function(e){return{$:3,a:e}},js=function(e){return{$:2,a:e}},fl=$(function(e,r){return{$:0,a:e,b:r}}),Ns=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),O=function(e){return e<0?-e:e},bo=Nv,Gs=y(function(e,r,n){return o($r,0/0,bo(o(e,r,n)))}),sl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ws=kv,ml=function(e){return p(Ws,D,L,e)},Hs=$(function(e,r){var n=o(sl,function(a){return a!=="0"&&a!=="."},ml(r));return le(e&&n?"-":"",r)}),ge=hc,Ct=Cv,dl=Hv,pl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(Ct,"0",pl(t))}else{var i=rr(r);return i>=48&&i<57?o(Ct,dl(i+1),n):"0"}},Lt=hv,Xs=Sv,Ra=function(e){return o(Ct,e,"")},bl=y(function(e,r,n){return e<=0?n:p(bl,e>>1,le(r,r),e&1?le(n,r):n)}),Cn=$(function(e,r){return p(bl,e,r,"")}),Pt=y(function(e,r,n){return le(n,o(Cn,e-Pr(n),Ra(r)))}),zt=zv,gl=function(e){var r=o(lo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Us=function(e){var r=o(lo,"e",ge(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o($r,0,ol(o(ps,"+",t)?o(Bn,1,t):t)),c=gl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o($r,"0",o(Ce,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Ce,$l(Ra),tn(le(o(Cn,O(i),"0"),v))))):p(Pt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Is=y(function(e,r,n){if(Lt(n)||Xs(n))return ge(n);var a=n<0,t=gl(Us(O(n))),i=t.a,c=t.b,l=Pr(i)+r,u=le(o(Cn,-l+1,"0"),p(Pt,l,"0",le(i,c))),v=Pr(u),s=o(ze,1,l),m=o(e,a,p(Or,s,v,u)),d=p(Or,0,s,u),f=m?zt(o($r,"1",o(Ce,pl,tn(zt(d))))):d,b=Pr(f),g=f==="0"?f:r<=0?le(f,o(Cn,O(r),"0")):I(r,Pr(c))<0?p(Or,0,b-r,f)+("."+p(Or,b-r,b,f)):le(i+".",p(Pt,r,"0",c));return o(Hs,a,g)}),hl=Is($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Os=Gs(hl),Js=y(function(e,r,n){var a=o(vo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Os,t,n)}),_l=lv,go=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(_l,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},Kr=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(X,0,r,n,S(X,1,v,s,m,d),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var b=f.b,g=f.c,w=f.d,x=f.e,d=a.e;return S(X,0,v,s,S(X,1,b,g,w,x),S(X,1,r,n,d,t))}else return S(X,e,r,n,a,t)}),kt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(_l,e,t);switch(u){case 0:return S(Kr,a,t,i,p(kt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Kr,a,t,i,c,p(kt,e,r,l))}}),gn=y(function(e,r,n){var a=p(kt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),qs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},wl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,b=d.c,g=d.d,w=d.e,x=v.e;return S(X,0,f,b,S(X,1,n,a,S(X,0,i,c,l,u),g),S(X,1,s,m,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,m,d,x))}else return e},zi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var b=f.b,g=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,m),S(X,1,n,a,d,S(X,0,b,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,d=h.e,k=e.e;k.a;var b=k.b,g=k.c,w=k.d,x=k.e;return S(X,1,n,a,S(X,0,i,c,T,d),S(X,0,b,g,w,x))}else return e},Ys=Ma(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,zi(r)}else break e;else return c.a,c.d,zi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ra(t),l);var u=wl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Kr,v,s,m,ra(d),f)}else return ar}else return S(X,r,n,a,ra(t),l)}else return ar},hn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(hn,e,i),c);var u=wl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Kr,v,s,m,o(hn,e,d),f)}else return ar}else return S(X,n,a,t,o(hn,e,i),c);else return o(Zs,e,Jt(Ys,e,r,n,a,t,i,c))}),Zs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=qs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Kr,n,u,v,i,ra(c))}else return ar}else return S(Kr,n,a,t,i,o(hn,e,c))}else return ar}),Qs=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Un=y(function(e,r,n){var a=r(o(go,e,n));if(a.$)return o(Qs,e,n);var t=a.a;return p(gn,e,t,n)}),Ks=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Un,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ns,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Un,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(fl,z(i,c),p(Js,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Un,r,Ce(function(a){return a.$===3?Rs(n):a}));default:var r=e.a,n=e.b;return o(Un,r,Ce(function(a){return a.$===2?js(n):a}))}},em=function(e){return Es(Ks(e))},rm=$(function(e,r){return o(re,em(e),r)}),nm=$(function(e,r){return Qe(r,{eA:o(rm,e,r.eA)})}),am=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Qe(a,{B:o($l,nm(e),a.B)}))}),tm=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),om=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Qe(t,{B:o(tm,o(e,i.a,r),i)}))}),im=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(zs,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(am,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(om,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Vs,l,a.G)})}}),cm=$(function(e,r){return o(Ne,Ea,{B:z(e,r(e)),ab:L,T:L})}),lm=v$,ki=lm(L),ba=Jv,Ln=Ov,um=d$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Me({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(m){return Me({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ba(Ln)))},o(M,"left",Z))},o(M,"pressedKeys",ba(Ln)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(B,function(r){return o(B,function(n){return Me({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(B,function(e){return o(B,function(r){return Me({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),vm=function(e){return{$:4,a:e}},$m={$:0},fm=wc,He=$(function(e,r){return o(Lc,e,fm(r))}),J=He("className"),sm=function(e){var r=e.b.B;return r.b},ga=He("id"),mm=w$,ha=mm,dm=y$,me=dm,pm={$:1},bm=function(e){return{$:3,a:e}},gm=function(e){return{$:5,a:e}},Mi=Nr("a"),ho=Nr("button"),hm=Mn("d"),yl=Tc("http://www.w3.org/2000/svg"),_m=yl("path"),wm=yl("svg"),ym=Mn("viewBox"),_n=function(e){return o(wm,_([ym("0 0 100 100"),o(me,"width","100%"),o(me,"height","100%")]),_([o(_m,_([hm(e)]),L)]))},Di=function(e){return o(He,"href",S$(e))},qr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},xm=function(e){return{$:0,a:e}},xl=Cc,Sl=$(function(e,r){return o(xl,e,xm(r))}),_o=function(e){return o(Sl,"click",Me(e))},Bi=He("target"),Sm=He("title"),Mt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Mt,e,i),o(Mt,e,c))}),Tm=_t,fr=Tm,Cm=function(e){return p(io,y(function(r,n,a){return o(D,n,a)}),L,e)},Lm=$(function(e,r){return{$:3,a:e,b:r}}),Pm=$(function(e,r){return{$:2,a:e,b:r}}),zm=$(function(e,r){return{$:0,a:e,b:r}}),km=$(function(e,r){return{$:1,a:e,b:r}}),Gr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mm=C(Gr,0/255,0/255,0/255,1),Dm=wc,Bm=$(function(e,r){return o(Lc,e,Dm(r))}),Am=Bm("checked"),Je=yv,Fm=y(function(e,r,n){return le(o(Cn,e-Pr(n),Ra(r)),n)}),_a=fv,Tl=function(e){var r=function(n){return n<10?Be(n):Ra(dl(87+n))};return e<16?r(e):le(Tl(e/16|0),r(o(_a,16,e)))},Vm=o(te,Tl,o(Fm,2,"0")),wo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Em=function(e){var r=wo(e),n=r.cN,a=r.cd,t=r.b6;return o(Lr,"",o(D,"#",o(re,o(te,Je,Vm),_([n*255,a*255,t*255]))))},Dt=He("htmlFor"),Bt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wa=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Rm=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),yo=$(function(e,r){return p(mr,Rm(e),L,r)}),Cl=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),jm=O$,Nm=Gv,Gm=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Wm=I$,Hm=function(e){return o(Wm,{ew:!1,fe:!1},e)},xo=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},Xm=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Um=function(e){return{$:2,a:e}},Im=function(e){return{$:0,a:e}},Om=function(e){return{$:1,a:e}},Qa=$(function(e,r){return rr(r)-rr(e)}),Ka=y(function(e,r,n){var a=rr(n);return I(rr(e),a)<1&&I(a,rr(r))<1}),Jm=$(function(e,r){var n=function(t){return I(t,e)<0?ue(t):ye(Om(r))},a=p(Ka,"0","9",r)?ue(o(Qa,"0",r)):p(Ka,"a","z",r)?ue(10+o(Qa,"a",r)):p(Ka,"A","Z",r)?ue(10+o(Qa,"A",r)):ye(Im(r));return o(wa,n,a)}),Ll=$(function(e,r){var n=tn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return ue(c+l*e)},o(Ll,e,i))},o(Jm,e,t))}),qm=$(function(e,r){return 2<=e&&e<=36?o(Ll,e,zt(r)):ye(Um(e))}),Ym=qm(16),Zm=y(function(e,r,n){return C(Gr,e,r,n,1)}),Qm=E(function(e,r,n,a){return C(Gr,e,r,n,a)}),Er=$v,Km=$(function(e,r){var n=o(Er,10,e);return Je(r*n)/n}),ed=Av,rd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ml(n);if(a.b&&!a.b.b){var t=a.a;return Nm(_([t,t]))}else return n};return o(te,ed,o(te,function(n){return o(Ce,function(a){return p(jm,1,a,n)},Hm(e))},o(te,Bt(xo),o(te,Ce(function(n){return n.fF}),o(te,Ce(yo(Mr)),o(te,Gm("Parsing hex regex failed"),wa(function(n){var a=o(re,o(te,r,o(te,Ym,Xm(os))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Qm,t/255,c/255,u/255,o(Km,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ue(p(Zm,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ya=Nr("input"),At=Nr("label"),Ft=He("name"),Pl=$(function(e,r){return p(mr,M,r,e)}),nd=o(Pl,_(["target","checked"]),Z),ad=function(e){return o(Sl,"change",o(ma,e,nd))},td=function(e){return z(e,!0)},od=function(e){return{$:1,a:e}},id=$(function(e,r){return o(xl,e,od(r))}),cd=o(Pl,_(["target","value"]),Ln),So=function(e){return o(id,"input",o(ma,td,o(ma,e,cd)))},zl=He("max"),kl=He("min"),Ml=function(e){return o(He,"step",e)},xa=He("type"),To=He("value"),Ai=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(U,L,_([o(At,_([Dt(r)]),_([o(U,_([J("relative w-full")]),_([o(U,_([J("inline-block")]),_([fr(r)])),o(U,_([J("inline-block float-right")]),_([fr(ge(n))]))]))])),o(ya,_([xa("range"),o(me,"width","100%"),ga(r),Ft(r),kl(ge(a)),zl(ge(t)),To(ge(n)),Ml(ge(i)),So(o(te,bo,o(te,$r(42),c)))]),L)]))},ld=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ud=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,L,_([o(U,_([J("mb-2")]),_([o(At,_([Dt(e)]),_([fr(e)]))])),o(ya,_([xa("checkbox"),ga(e),Ft(e),ad(Lm(e)),Am(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ai({cg:e,cs:i,cw:t,cA:zm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ai({cg:e,cs:i,cw:t,cA:o(te,Je,km(e)),cW:1,c1:c});default:var c=r.a;return o(U,L,_([o(U,_([o(me,"margin-bottom","6px")]),_([o(At,_([Dt(e)]),_([fr(e)]))])),o(ya,_([xa("color"),o(me,"width","100%"),o(me,"height","26px"),o(me,"padding","0px"),ga(e),Ft(e),So(function(l){return o(Pm,e,o(ld,Mm,rd(l)))}),To(Em(c))]),L)]))}}),vd=function(e){return o(U,_([J("p-4 border-y-[0.5px] border-white20")]),_([o(U,_([J("text-lg pb-2")]),_([fr(e.ff)])),o(U,_([J("pl-2 pr-2")]),Cm(o(Mt,ud,e.av)))]))},$d=function(e){return o(U,_([J("text-xs text-white60")]),o(re,vd,e))},fd=function(e){return o(U,_([J("absolute left-[104px] bottom-2 text-sm text-white40")]),_([fr("clock: "+o(hl,3,on(e).a4))]))},sd=function(e){e.a;var r=e.b.T;return o(Ce,function(n){return Je(60/(on(e).a4-n))},o(Ce,o(te,ls,function(n){return n.a4}),xo(o(ul,59,r))))},md=function(e){return o(U,_([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=sd(e);if(r.$===1)return _([fr("... Fps")]);var n=r.a;return _([fr(Be(n)+" Fps")])}())},dd=function(e){return{$:0,a:e}},pd=function(e){var r=e.b.T;return Vr(r)},bd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Vr(r)+1+Vr(n)},gd=function(e){return o(ya,_([J("absolute w-full"),xa("range"),kl(Be(0)),zl(Be(bd(e)-1)),To(Be(pd(e))),Ml(Be(1)),So(o(te,bo,o(te,$r(42),o(te,Je,dd))))]),L)},Fi={$:1},hd={$:3},_d={$:2},Dl=function(e){return!e.b},Vi=$(function(e,r){return o(ho,_([J("px-2 bg-black40"),J(r),_o(e)]),_([fr("REC")]))}),Ei=$(function(e,r){return o(ho,_([J("absolute left-[60px] mx-1 px-1 bg-black40"),_o(r)]),_([o(U,_([J("w-4 h-6 fill-white80")]),_([_n(e)]))]))}),wd=function(e){var r=e.a,n=e.b.ab;return o(U,_([J("py-1")]),_([function(){switch(r.$){case 0:return o(Vi,Fi,"text-red-500 font-bold");case 1:return o(Vi,_d,"text-white80 font-bold");default:return o(U,L,L)}}(),function(){switch(r.$){case 0:return o(U,L,L);case 1:return Dl(n)?o(U,L,L):o(Ei,qr.fo,hd);default:return o(Ei,qr.fn,Fi)}}()]))},yd=function(e){return o(U,_([J("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([gd(e),wd(e),md(e),fd(e)]))},xd=function(e){var r=e.a;return gr(r,Ea)},Sd=$(function(e,r){var n=xd(r.G)?o(U,L,L):o(U,_([J("absolute pointer-events-none w-8 h-8"),o(me,"left",ge(e.fp.fT+.5*e.cT.fR)+"px"),o(me,"top",ge(-e.fp.fX+.5*e.cT.eW)+"px")]),_([o(U,_([J(e.fp.e4?"fill-black80":"fill-white40")]),_([_n(qr.fp)]))]));return o(U,L,_([n]))}),Td=$(function(e,r){var n=o(ho,_([J(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),_o(pm),Sm("Distraction Free Mode")]),_([_n(qr.f$)])),a=o(U,_([J("absolute w-8 bottom-12")]),_([o(Mi,_([J("fill-twitterBlue40 hover:fill-twitterBlue"),Di("https://twitter.com/AzizErkalSelman"),Bi("_blank")]),_([_n(qr.fL)]))])),t=o(U,_([J("absolute w-8 bottom-2")]),_([o(Mi,_([J("fill-githubCat40 hover:fill-githubCat"),Di("https://github.com/erkal/elm-3d-playground-exploration"),Bi("_blank")]),_([_n(qr.eQ)]))]));return r.aL?o(U,_([J("fixed w-10 h-10 p-1")]),_([n])):o(U,L,_([o(U,_([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(U,_([J("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(me,"height",ge(e.cT.eW-80)+"px")]),_([o(ha,bm,$d(on(r.G).eA))])),o(U,_([J("absolute bottom-0 left-10 h-20"),o(me,"width",e.cT.fR>600?"600px":ge(e.cT.fR-40)+"px")]),_([o(ha,gm,yd(r.G))])),o(Sd,e,r)]))}),Cd=y(function(e,r,n){var a=sm(n.G),t=on(n.G);return o(U,_([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(me,"width",ge(t.cT.fR)+"px"),o(me,"height",ge(t.cT.eW)+"px")]),_([o(U,_([J("fixed")]),_([o(ha,al($m),o(e,t,a))])),o(U,_([ga("gui")]),_([o(Td,t,n),o(ha,vm,o(r,t,a))]))]))}),Ld=Ve(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(im,r,i,u,v),ki)}),l=function(u){var v=o(tl,n,u.e1);return z({aL:u.e1.cT.fR<500,G:o(cm,v,a)},ki)};return Cs({e0:l,fG:al(um(ss)),fM:c,fP:o(Cd,e,t)})}),Pd=E(function(e,r,n,a){return se(Ld,e,r,n,a,$(function(t,i){return o(U,L,L)}),y(function(t,i,c){return c}))}),zd=function(e){return{}},kd=y(function(e,r,n){return{av:n,e5:r,ff:e}}),Bl=ar,Md=function(e){return p(Dn,$(function(r,n){var a=r.a,t=r.b;return p(gn,a,t,n)}),Bl,e)},Dd=y(function(e,r,n){return p(kd,e,r,Md(n))}),Bd=Dd,Ri=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(fl,z(a,t),n))}),Ad=_([p(Bd,"Parameters",!0,_([p(Ri,"s",z(1,2),1.5),p(Ri,"t",z(1,2),1.5)]))]),Fd=$(function(e,r){return r}),hr=sv,Vt=function(e){return e*hr/180},Vd=C(Gr,114/255,159/255,207/255,1),en=function(e){return e},dn=function(e){return en(hr*(e/180))},ir=xv,Ed=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ze,O(c),o(ze,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,m=ir(s*s+v*v+u*u);return ne({fT:s/m,fX:v/m,c6:u/m})}else return q}),et=function(e){return e},Co=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),na=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=ir(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c6:a/c})}else return q},Sa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Rd=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),Al=$(function(e,r){var n=e,a=r;return I(a,n)>0}),jd=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Nd=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Gd=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),Wd=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Oe=0,Fl={fT:0,fX:0,c6:0},Hd=y(function(e,r,n){return o(Bt,function(a){var t=o(Nd,o(Gd,a,r),r);return o(Bt,function(i){var c=o(Co,r,e),l=o(Rd,n,c),u=o(Al,Oe,l)?c:o(jd,Oe,l)?Wd(c):Fl;return o(Ce,function(v){return A(a,i,v)},na(u))},na(t))},na(e))}),Xd=function(e){var r=e,n=O(r.c6),a=O(r.fX),t=O(r.fT);if(I(t,a)<1)if(I(t,n)<1){var i=ir(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=ir(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(I(a,n)<1){var i=ir(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=ir(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},Lo=function(e){var r=Xd(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return z(r,c)},Jr=function(e){var r=e;return r},qe=function(e){return e},Ud=$(function(e,r){var n=Lo(e),a=n.a,t=n.b;return qe({cB:r,c4:a,c5:t,c7:e})}),Id=function(e){var r=o(Sa,e.aR,e.dj),n=Jr(e.ei),a=o(Co,r,n),t=p(Hd,r,n,a);if(t.$){var v=na(r);if(v.$){var m=Lo(e.ei),d=m.a,f=m.b;return qe({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Ud,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return qe({cB:e.dj,c4:u,c5:l,c7:c})}},Ie={fT:0,fX:0,c6:0},Od=function(e){return{$:0,a:e}},de=function(e){var r=e;return O(r)},aa=function(e){var r=e;return .5*r},Jd=pv,qd=function(e){var r=e;return Jd(r)},Yd=function(e){var r=aa(de(e.ej)),n=qd(r);return{cM:Od(n),c2:e.c2}},lr=function(e){return e},Po=lr({fT:0,fX:1,c6:0}),Zd=function(e){var r=e.aR,n=e.dj,a=e.ei;return Yd({ej:dn(40),c2:Id({dj:et(n),aR:et(r),ei:o($r,Po,o(Ed,Ie,et(a)))})})},ja=$(function(e,r){return{$:0,a:e,b:r}}),rt=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),nt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),ur=$(function(e,r){var n=e,a=r;return a-n}),Qd=lr({fT:-1,fX:0,c6:0}),Kd=lr({fT:0,fX:-1,c6:0}),Vl=lr({fT:0,fX:0,c6:-1}),El=lr({fT:1,fX:0,c6:0}),zo=lr({fT:0,fX:0,c6:1}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),e0=Ve(function(e,r,n,a,t,i){var c=o(rt,n,i)?zo:Vl,l=o(rt,r,t)?Po:Kd,u=o(rt,e,a)?El:Qd,v=A(de(o(ur,e,a)),de(o(ur,r,t)),de(o(ur,n,i))),s=p(be,o(nt,e,a),o(nt,r,t),o(nt,n,i)),m=qe({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),Dr=function(e){var r=e;return r.fT},Br=function(e){var r=e;return r.fX},Ar=function(e){var r=e;return r.c6},r0=$(function(e,r){return se(e0,Dr(e),Br(e),Ar(e),Dr(r),Br(r),Ar(r))}),Et=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),Rl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ja,e,o(r0,p(Et,-c,-l,-u),p(Et,c,l,u)))}),n0=C(Gr,52/255,101/255,164/255,1),ji=C(Gr,211/255,215/255,207/255,1),Na=function(e){return{$:5,a:e}},Ta=function(e){return Na(e)},Rt=function(e){return{$:0,a:e}},jl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Nl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),at=function(e){return p(Nl,0,1,e<=.04045?e/12.92:o(Er,(e+.055)/1.055,2.4))},Fn=Y$,a0=function(e){var r=wo(e),n=r.cN,a=r.cd,t=r.b6;return p(Fn,at(n),at(a),at(t))},ta=function(e){return p(jl,0,Rt(a0(e)),Rt(0))},ko=$(function(e,r){return{$:2,a:e,b:r}}),Mo=$(function(e,r){return{$:4,a:e,b:r}}),Do=$(function(e,r){return{$:3,a:e,b:r}}),Bo=$(function(e,r){return{$:1,a:e,b:r}}),t0=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),o0=function(e){var r=e;return r},Ga=function(e){var r=e;return o0(r.er)},Wa=function(e){var r=e;return r.aK},Wr=function(e){var r=e;return r.cB},Vn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),xr=function(e){var r=e;return r.c4},Sr=function(e){var r=e;return r.c5},Tr=function(e){var r=e;return r.c7},i0=$(function(e,r){return qe({cB:o(Vn,e,Wr(r)),c4:xr(r),c5:Sr(r),c7:Tr(r)})}),c0=$(function(e,r){return{er:o(i0,e,Ga(r)),aK:Wa(r)}}),En=$(function(e,r){return{eG:r,cB:e}}),l0=$(function(e,r){var n=r;return o(En,o(Vn,e,n.cB),n.eG)}),u0=$(function(e,r){var n=r;return{k:o(l0,e,n.k),e9:n.e9,fr:n.fr}}),Ao=function(e){var r=e;return r},v0=function(e){return e},Fo=$(function(e,r){var n=Ao(r),a=n.a,t=n.b;return v0(z(e(a),e(t)))}),$0=$(function(e,r){return o(Fo,Vn(e),r)}),Ha=function(e){var r=e;return r.ey},Xa=function(e){var r=e;return r.fr},Vo=$(function(e,r){return{ey:r,fr:de(e)}}),f0=$(function(e,r){return o(Vo,Xa(r),o(Vn,e,Ha(r)))}),Eo=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),s0=$(function(e,r){return o(Eo,Vn(e),r)}),Ro=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(t0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ja,s,o(c0,i,c));case 1:var s=r.a,l=r.b;return o(Bo,s,o(s0,i,l));case 3:var s=r.a,u=r.b;return o(Do,s,o(f0,i,u));case 2:var s=r.a,v=r.b;return o(ko,s,o(u0,i,v));case 4:var s=r.a,m=r.b;return o(Mo,s,o($0,i,m));default:var d=r.a;return Na(o(re,Ro(A(n,a,t)),d))}}),zr=function(e){return Ro(A(0,e,0))},Rr=mv,rn=dv,oa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Rr(c),u=rn(c),v=a.eG,s=v,m=s.fT*u,d=l*m,f=m*m,b=s.fX*u,g=l*b,w=m*b,x=b*b,h=1-2*(f+x),T=s.c6*u,k=l*T,G=2*(w-k),j=2*(w+k),R=m*T,N=2*(R+g),W=2*(R-g),F=b*T,Y=2*(F-d),Q=2*(F+d),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+oe*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+h*i.c6}}),Rn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Rr(c),u=rn(c),v=a.cB,s=v,m=i.fT-s.fT,d=i.fX-s.fX,f=i.c6-s.c6,b=a.eG,g=b,w=g.fT*u,x=l*w,h=w*w,T=g.fX*u,k=l*T,G=w*T,j=T*T,R=1-2*(h+j),N=g.c6*u,W=l*N,F=2*(G-W),Y=2*(G+W),Q=w*N,ie=2*(Q+k),ve=2*(Q-k),oe=T*N,pe=2*(oe-x),ke=2*(oe+x),Se=N*N,dr=1-2*(j+Se),pr=1-2*(h+Se);return{fT:s.fT+dr*m+F*d+ie*f,fX:s.fX+Y*m+pr*d+pe*f,c6:s.c6+ve*m+ke*d+R*f}}),m0=y(function(e,r,n){return qe({cB:p(Rn,e,r,Wr(n)),c4:p(oa,e,r,xr(n)),c5:p(oa,e,r,Sr(n)),c7:p(oa,e,r,Tr(n))})}),d0=y(function(e,r,n){return{er:p(m0,e,r,Ga(n)),aK:Wa(n)}}),p0=$(function(e,r){var n=o(Rn,e,r),a=o(oa,e,r);return function(t){var i=t;return o(En,n(i.cB),a(i.eG))}}),b0=y(function(e,r,n){var a=n;return{k:p(p0,e,r,a.k),e9:a.e9,fr:a.fr}}),g0=y(function(e,r,n){return o(Fo,o(Rn,e,r),n)}),h0=y(function(e,r,n){return o(Vo,Xa(n),p(Rn,e,r,Ha(n)))}),_0=y(function(e,r,n){return o(Eo,o(Rn,e,r),n)}),jo=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ja,l,p(d0,e,r,a));case 1:var l=n.a,t=n.b;return o(Bo,l,p(_0,e,r,t));case 3:var l=n.a,i=n.b;return o(Do,l,p(h0,e,r,i));case 2:var l=n.a,c=n.b;return o(ko,l,p(b0,e,r,c));case 4:var l=n.a,u=n.b;return o(Mo,l,p(g0,e,r,u));default:var v=n.a;return Na(o(re,o(jo,e,r),v))}}),No=Po,w0=o(En,Ie,No),Ca=$(function(e,r){return p(jo,w0,en(e),r)}),K=$(function(e,r){var n=r;return e*n}),vr=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},jn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c6:a.c6+r*(t.c6-a.c6)}}),y0=y(function(e,r,n){var a=Ga(n),t=xr(a),i=Sr(a),c=Tr(a),l=p(jn,e,r,Wr(a)),u=r>=0?qe({cB:l,c4:t,c5:i,c7:c}):qe({cB:l,c4:vr(t),c5:vr(i),c7:vr(c)}),v=Wa(n),s=v.a,m=v.b,d=v.c,f=de(o(K,r,s)),b=de(o(K,r,m)),g=de(o(K,r,d));return{er:u,aK:A(f,b,g)}}),Go=function(e){var r=e;return r.k},Gl=function(e){var r=e;return r.eG},Ni=function(e){return Gl(Go(e))},Wl=function(e){var r=e;return r.cB},x0=function(e){return Wl(Go(e))},Hl=function(e){var r=e;return r.e9},Xl=function(e){var r=e;return r.fr},S0=y(function(e,r,n){var a=de(o(K,r,Xl(n))),t=de(o(K,r,Hl(n))),i=r>=0?Ni(n):vr(Ni(n)),c=p(jn,e,r,x0(n));return{k:o(En,c,i),e9:t,fr:a}}),T0=y(function(e,r,n){return o(Fo,o(jn,e,r),n)}),C0=y(function(e,r,n){return o(Vo,o(K,O(r),Xa(n)),p(jn,e,r,Ha(n)))}),L0=y(function(e,r,n){return o(Eo,o(jn,e,r),n)}),kr=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ja,c,p(y0,Ie,e,n));case 1:var c=r.a,a=r.b;return o(Bo,c,p(L0,Ie,e,a));case 3:var c=r.a,t=r.b;return o(Do,c,p(C0,Ie,e,t));case 2:var c=r.a,i=r.b;return o(ko,c,p(S0,Ie,e,i));case 4:var c=r.a,l=r.b;return o(Mo,c,p(T0,Ie,e,l));default:var u=r.a;return Na(o(re,kr(e),u))}}),P0=function(){var e=function(n){return o(zr,-1,o(Rl,n,A(10,1,10)))},r=function(n){return Ta(_([e(n),o(Ca,Vt(45),e(n))]))};return Ta(_([r(ta(ji)),o(zr,-.1,o(kr,1.1,r(ta(n0)))),o(zr,-.2,o(kr,1.2,r(ta(ji))))]))}(),z0=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(go,e,r.av))}),k0=$(function(e,r){return o($r,0,xo(o(yo,z0(e),r)))}),M0=$(function(e,r){return o(k0,e,r.eA)}),Gi=M0,Wi=bv,D0=E(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return C(Gr,f,d,m,a)}),B0=y(function(e,r,n){return C(D0,e,r,n,1)}),In=function(e){return Ro(A(e,0,0))},Wo=zo,A0=o(En,Ie,Wo),Hi=$(function(e,r){return p(jo,A0,en(e),r)}),Ul=$(function(e,r){return(r-rl(r/e)*e)/e}),F0=function(e){return 2*hr*e},tt=E(function(e,r,n,a){return e+(r-e)*(1+Rr(F0(o(Ul,n,a))))/2}),jt=Ve(function(e,r,n,a,t,i){var c=function(f){return p(B0,C(tt,f/6,1,10,e.a4),.6,.6)},l=$(function(f,b){return ir(o(Er,f,2)+o(Er,b,2))}),u=o(Rl,ta(c(i)),A(r,n,n)),v=z(o(l,a,t),o(l,r-a,t)),s=v.a,m=v.b,d=i?_([o(zr,n/2,o(In,-(r/2),o(kr,s/r,o(Hi,o(Wi,t,a),o(zr,n/2,o(In,r/2,o(Ca,C(tt,-2,2,8,e.a4),o(kr,.86,se(jt,e,r,n,a,t,i-1))))))))),o(zr,n/2,o(In,r/2,o(kr,m/r,o(Hi,-o(Wi,t,r-a),o(zr,n/2,o(In,-(r/2),o(Ca,C(tt,2,-2,8,hr+e.a4),o(kr,.86,se(jt,e,r,n,a,t,i-1)))))))))]):L;return Ta(o(D,u,d))}),V0=$(function(e,r){return 360*o(Ul,e,r)}),E0=$(function(e,r){return _([o(Ca,o(V0,1e3,e.a4),Ta(_([P0,se(jt,e,2,2,o(Gi,"s",e),o(Gi,"t",e),5)])))])}),R0=function(e){return e},Fr=function(e){return e},j0=function(e){return Fr(.01*e)},Xi=function(e){return e},N0=function(e){return e},G0=function(e){return{$:0,a:e}},W0=G0,H0={$:3},X0=H0,U0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),I0=U0,O0=$(function(e,r){return r.b?p(mr,D,r,e):e}),Ge=function(e){return p(mr,O0,L,e)},Ho=$(function(e,r){return Ge(o(re,e,r))}),J0=function(e){return{$:1,a:e}},q0=J0,Y0=function(e){return o(Mn,"height",Be(e))},Z0=function(e){return h$(x$(e))},Q0=Z0,K0=function(e){return{$:2,a:e}},ep=K0,rp=function(e){return o(Lr,"",e)},np=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return rp(_(["rgba(",ge(c(r)),"%,",ge(c(n)),"%,",ge(c(a)),"%,",ge(i(t)),")"]))},ap=$(function(e,r){switch(r.$){case 0:return o(jf,e,r);case 1:return o(Nf,e,r);case 2:return o(Gf,e,r);case 3:return o(Wf,e,r);case 4:return o(Hf,e,r);default:return o(Xf,e,r)}}),tp=$(function(e,r){switch(r.$){case 0:return o(df,e,r);case 1:return o(pf,e,r);case 2:return o(bf,e,r);case 3:return o(gf,e,r);case 4:return o(hf,e,r);case 5:return o(_f,e,r);case 6:return o(wf,e,r);case 7:return o(yf,e,r);default:return xf(e)}}),op=y(function(e,r,n){return p(Rf,e,r,n)}),Ui=function(e){var r=e;return r},cn=nf,ot=C(cn,1,1,1,1),Ye=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),ip=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),cp=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(ip,n*a/t,n,n*(1-a-t)/t)}),lp=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Xo=$(function(e,r){return lp(o(cp,e,r))}),Il=$(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),Ke=uf,up=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},it=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(cn,a.bY,a.bY,a.bY,i);return se(t,e,c,up(a),a.dp,r,n)}),Ol=Ve(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Il,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var b=t.b,g=o(D,S(it,e,r,n,a,b),i.M);return{M:g,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(D,S(it,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(D,S(it,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(Dn,C(Ol,e,r,n,a),i,k)}}),vp=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Jl=vp,Uo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),$p=function(e){var r=e.Z,n=e.W,a=e.V;return C(Uo,518,r,n,a)},fp=$(function(e,r){return{$:6,a:e,b:r}}),sp=fp,ql=_([$p({V:1,W:0,Z:!1}),C(Jl,!1,!1,!1,!1),o(sp,0,1)]),nn=519,Io=8,Yl=15,Yr=7681,mp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=mf,dp=$(function(e,r){return{$:0,a:e,b:r}}),pp=dp({df:1,$7:0,dV:5}),De=J$,bp=pp(_([{bU:o(De,-1,-1)},{bU:o(De,1,-1)},{bU:o(De,-1,1)},{bU:o(De,1,1)}])),gp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},hp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Oo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(hp,a,t,i)))}),Jo=function(e){return p(Oo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},qo=function(e){return S(ae,_([Jo(e),C(Jl,!1,!1,!1,!1)]),gp,mp,bp,{})},_p=qo({a9:Yr,cp:0,cO:Io,bm:nn,c3:Yl,bu:Yr,bv:Yr}),wp=516,Ii=5386,xe=7680,yp=function(e){return o(Er,2,e+4)},Zl=function(e){return qo({a9:xe,cp:Yl,cO:Io,bm:wp,c3:yp(e),bu:Ii,bv:Ii})},xp=y(function(e,r,n){return Ge(_([p(Ye,e,n,ql),_([Zl(r),_p])]))}),Sp=$(function(e,r){return Ge(o(qc,xp(e),r))}),Tp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Uo,513,r,n,a)},Cp=Tp({V:1,W:0,Z:!0}),Lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Pp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,b=v.b,g=v.c;return Lp(s)(m)(d)(f)(b)(g)(r)(n)(a)(t)});return o(l,i,c)},zp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Oi=$(function(e,r){var n=e,a=r;return p(zp,32774,n,a)}),kp=1,Ji=771,Mp=770,Yo=Pp({bw:0,aH:o(Oi,kp,Ji),bz:0,bB:o(Oi,Mp,Ji),bG:0,bW:0}),Hr=_([Cp,Yo]),Dp=function(e){var r=e;return r.dO},Bp=function(e){var r=e;return r.dP},Ql=function(e){var r=e;return r.dQ},Ap=function(e){var r=e;return r.dR},Fp=function(e){var r=e;return r.dS},Kl=function(e){var r=e;return r.dT},eu=function(e){return A(o(ur,Ap(e),Dp(e)),o(ur,Fp(e),Bp(e)),o(ur,Kl(e),Ql(e)))},qi=function(e){var r=e;return Wr(r)},Vp=function(e){return e},Ep=function(e){return qe({cB:Vp({fT:e.H,fX:e.I,c6:e.J}),c4:lr({fT:e.q,fX:e.r,c6:e.s}),c5:lr({fT:e.t,fX:e.u,c6:e.v}),c7:lr({fT:e.w,fX:e.x,c6:e.y})})},ct=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),ru=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,b=f;return{fT:c*b.fT+l*b.fX+u*b.c6,fX:c*d.fT+l*d.fX+u*d.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),nu=$(function(e,r){return{cB:o(ru,e,Wr(r)),c4:o(ct,e,xr(r)),c5:o(ct,e,Sr(r)),c7:o(ct,e,Tr(r))}}),La=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ze,n,a)}),ia=$(function(e,r){return I(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ia,n,a)}),Rp=$(function(e,r){var n=La(r),a=La(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},jp=function(e){var r=e;return A(r.fT,r.fX,r.c6)},wn=$(function(e,r){var n=e,a=r;return a+n}),Np=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(de(a)),c=aa(de(n)),l=aa(de(t)),u=jp(r),v=u.a,s=u.b,m=u.c;return{dO:o(wn,c,v),dP:o(wn,i,s),dQ:o(wn,l,m),dR:o(ur,c,v),dS:o(ur,i,s),dT:o(ur,l,m)}}),Yi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,s=t.fT*r,m=We(Tr(e)),d=O(l*m.fT)+O(c*m.fX)+O(i*m.c6),f=We(Sr(e)),b=O(l*f.fT)+O(c*f.fX)+O(i*f.c6),g=We(xr(e)),w=O(l*g.fT)+O(c*g.fX)+O(i*g.c6),x=o(Np,A(w,b,d),o(ru,e,p(Et,s,v,u)));if(a.$)return ne(x);var h=a.a;return ne(o(Rp,h,x))}),Nt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,b=r,g=n,w=i;e=f,r=b,n=g,a=w;continue e;case 1:var c=t.a,l=C(Yi,e,r,c,n),f=e,b=r,g=l,w=i;e=f,r=b,n=g,a=w;continue e;case 2:var f=e,b=r,g=n,w=i;e=f,r=b,n=g,a=w;continue e;case 3:var c=t.a,l=C(Yi,e,r,c,n),f=e,b=r,g=l,w=i;e=f,r=b,n=g,a=w;continue e;case 4:var u=t.a,f=e,b=r,g=C(Nt,e,r,n,u),w=i;e=f,r=b,n=g,a=w;continue e;default:var v=t.a,s=t.b,m=o(nu,Ep(v),e),d=r*v.bY,f=e,b=r,g=C(Nt,m,d,n,_([s])),w=i;e=f,r=b,n=g,a=w;continue e}}else return n}),ln=Z$,un=Q$,vn=K$,au=function(e){return{$:4,a:e}},Gp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),Nn=function(e){return au(o(Gp,e,L))},Wp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Hp=function(e){var r=e;return r},Zi=qo({a9:Yr,cp:0,cO:Io,bm:nn,c3:255,bu:Yr,bv:Yr}),Xp=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=ir(i*i+t*t+a*a);return c*n}else return Oe},Te={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fT:0,fX:0,c6:0},Re=$(function(e,r){var n=e,a=r;return Ke({dx:n.fT,dy:n.bW,dz:a.fT,dA:a.bW,dB:n.fX,dC:n.bG,dD:a.fX,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=z({be:o(Re,Te,Te),bL:o(Re,Te,Te),bM:o(Re,Te,Te),bN:o(Re,Te,Te)},C(cn,0,0,0,0)),Qi=function(e){var r=e;return-r},tu=514,ou=function(e){var r=e.Z,n=e.W,a=e.V;return C(Uo,515,r,n,a)},iu=240,Up=_([ou({V:1,W:0,Z:!0}),Jo({a9:xe,cp:iu,cO:0,bm:tu,c3:0,bu:xe,bv:xe}),Yo]),Ip=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cM;if(s.$){var d=s.a;return Lt(v)?Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return Lt(v)?Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),On=$(function(e,r){return(1&e>>r)===1?0:1}),Op=function(e){return _([ou({V:1,W:0,Z:!0}),Jo({a9:xe,cp:iu,cO:e,bm:tu,c3:0,bu:xe,bv:xe}),Yo])},Jp=y(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=C(cn,o(On,a,0),o(On,a,1),o(On,a,2),o(On,a,3));return p(Ye,e,z(r,i),Op(t))},o(Qr,1,o(Er,2,n)-1)))}),Zr=function(e){var r=e;return r},qp=vf,Ki=function(e){var r=e;return vr(Tr(r))},cu=El,Yp={cB:Ie,c4:cu,c5:No,c7:Wo},Ua=function(e){var r=e;return r},Zp=function(e){var r=Ua(Wr(e)),n=We(Tr(e)),a=We(Sr(e)),t=We(xr(e));return Ke({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Qp=$(function(e,r){var n=r;return Zp(o(nu,n,e))}),Kp=function(e){return o(Qp,Yp,e)},e3=function(e){var r=e;return r.c2},r3=function(e){var r=e;return xr(r)},n3=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),a3=function(e){var r=e;return Sr(r)},t3=function(e){var r=e3(e.ev),n=qe({cB:qi(r),c4:r3(r),c5:a3(r),c7:vr(Ki(r))}),a=Nn(e.aP),t=a,i=C(Nt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=Kp(r),u=o(K,.99,o(ce,de(e.aJ),Qi(Ql(c)))),v=eu(c),s=v.a,m=v.b,d=v.c,f=Xp(p(n3,s,m,d)),b=o(K,1.01,o(wn,f,Qi(Kl(c)))),g=o(Ip,e.ev,{eq:e.eq,eP:b,fg:u}),w=qp(g).dM,x=w?We(vr(Ki(r))):Zr(qi(r)),h=function(){var oe=e.b_;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var pe=oe.a;return z(3,pe);case 4:var pe=oe.a;return z(4,pe);default:return z(5,0)}}(),T=h.a,k=h.b,G=e.bE,j=G,R=o(Xo,j,e.b0),N=R,W=Ke({dx:0,dy:x.fT,dz:ln(N),dA:e.ec,dB:0,dC:x.fX,dD:un(N),dE:Hp(f),dF:0,dG:x.c6,dH:vn(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),F=se(Ol,W,l,g,Wp,t,{M:L,U:L,fz:L}),Y=e.bK;switch(Y.$){case 0:var Q=Y.a;return Ge(_([p(Ye,F.M,z(Q,ot),Hr),p(Ye,F.U,pn,Hr)]));case 1:var Q=Y.a;return Ge(_([p(Ye,F.M,pn,Hr),_([Zi]),p(Ye,F.fz,Q.be,ql),_([Zl(0)]),p(Ye,F.M,z(Q,ot),Up),p(Ye,F.U,pn,Hr)]));default:var ie=Y.a,ve=Y.b;return Ge(_([p(Ye,F.M,z(ve,ot),Hr),_([Zi]),o(Sp,F.fz,ie),p(Jp,F.M,ve,Vr(ie)),p(Ye,F.U,pn,Hr)]))}},o3=function(e){return o(Mn,"width",Be(e))},i3=$(function(e,r){var n=_([q0(1),ep(0),W0(!0),C(I0,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return A(n,"0",1);case 1:return A(o(D,X0,n),"1",1);default:var k=T.a;return A(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ui(v),m=o(me,"height",Be(s)+"px"),d=Ui(u),f=d/s,b=o(Ho,function(T){return t3({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),g=o(me,"width",Be(d)+"px"),w=e.aI,x=w,h=np(x);return p(Q0,"div",_([o(me,"padding","0px"),g,m]),_([z(i,p(op,t,_([o3(Je(d*c)),Y0(Je(s*c)),g,m,o(me,"display","block"),o(me,"background-color",h)]),b))]))}),c3=function(e){return o(i3,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},lu=function(e){return e},ec=lu({fT:.31271,fX:.32902}),l3=$(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(Xo,r.ce,r.b7),u=l;return{bz:vn(u),ex:n,bG:un(u),cK:0,bW:ln(u),c_:1,fT:-t,fX:-i,c6:-c}}),u3=function(e){return e},v3=function(e){return u3(1.2*o(Er,2,e))},lt=function(e){return e},$3={$:0},f3=$3,uu=function(e){return e},rc=function(e){var r=e;return r},s3=function(e){e:for(;;){if(gr(e.e2,Oe)&&gr(e.e3,Oe))return Te;if(o(Al,de(e.e2),de(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:vr(e.ei)};e=r;continue e}else{var n=O(rc(e.e3)/hr),a=O(rc(e.e2)/hr),t=We(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(Xo,uu(1),e.b7),v=u;return{bz:a*vn(v),ex:!1,bG:a*un(v),cK:n/a,bW:a*ln(v),c_:3,fT:i,fX:c,c6:l}}}},nc=function(e){return s3({b7:e.b7,e2:e.ce,e3:Oe,ei:e.ei})},m3=function(e){var r=e;return r},vu=function(e){var r=p(Nl,1667,25e3,m3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return lu({fT:n,fX:a})},$u=function(e){return e},d3=vu($u(12e3)),p3=vu($u(5600)),b3=function(e){return{$:2,a:e}},g3=function(e){return b3(e)},h3=$(function(e,r){return{$:2,a:e,b:r}}),fu=function(e){return{$:0,a:e}},Jn=function(e){var r=e;return r},_3=function(e){var r=e;return r.ex},w3=fu(pn.a),y3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(D,a,i),c):z(i,o(D,a,c))});return p(mr,n,z(L,L),r)}),x3=function(e){var r=e;return Ke({dx:r.fT,dy:r.bW,dz:0,dA:0,dB:r.fX,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},S3=ee(function(e,r,n,a,t,i,c,l){var u=o(y3,_3,_([Jn(e),Jn(r),Jn(n),Jn(a)])),v=u.a,s=u.b;if(v.b){var m=le(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,b=f.a,g=f.b,w=g.a,x=g.b,h=x.a;return o(h3,o(re,x3,v),{be:o(Re,d,b),bL:o(Re,w,h),bM:o(Re,t,i),bN:o(Re,c,l)})}else return w3}else return fu({be:o(Re,e,r),bL:o(Re,n,a),bM:o(Re,t,i),bN:o(Re,c,l)})}),T3=y(function(e,r,n){return Da(S3,e,r,n,Te,Te,Te,Te,Te)}),C3=function(e){var r=o(l3,N0(e.fz),{b7:p3,eG:e.fI,ce:lt(8e4)}),n=nc({b7:d3,ce:lt(2e4),ei:e.ei}),a=nc({b7:ec,ce:lt(15e3),ei:vr(e.ei)}),t=p(T3,r,n,a);return c3({b1:g3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:v3(15),bK:t,b_:f3,b0:ec})},su=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),L3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),mu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),du=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),P3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),z3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),k3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Zo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(k3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(su,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(L3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(mu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(z3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(du,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(P3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Qo={$:0},M3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=La(c(u)),m=o(fe,s.dR,e),d=o(ce,s.dO,r),f=o(fe,s.dS,n),b=o(ce,s.dP,a),g=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=v;e=m,r=d,n=f,a=b,t=g,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),D3=y(function(e,r,n){var a=La(e(r));return Da(M3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),ut=$(function(e,r){var n=e,a=r;return I(a,n)<1}),pu=function(e){return o(ut,e.dO,e.dR)&&o(ut,e.dP,e.dS)&&o(ut,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},bu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Dr(n),c=Br(n),l=Ar(n),u=Dr(a),v=Br(a),s=Ar(a),m=Dr(t),d=Br(t),f=Ar(t);return pu({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,s,f))})},gu=ef,Le=function(e){return gu(Ua(e))},hu=function(e){var r=e;return r},Ia=function(e){return gu(hu(e))},B3=$(function(e,r){var n=e,a=r,t=o(ze,O(a.fT),o(ze,O(a.fX),O(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=ir(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return Fl}),A3=B3(uu(1)),_u=y(function(e,r,n){var a=o(Sa,r,n),t=o(Sa,e,r);return A3(o(Co,a,t))}),F3=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Ia(p(_u,n,a,t));return A({o:i,bU:Le(n)},{o:i,bU:Le(a)},{o:i,bU:Le(t)})},V3=$(function(e,r){return{$:2,a:e,b:r}}),wu=V3({df:3,$7:0,dV:4}),E3=function(e){if(e.b){var r=e.a,n=e.b,a=wu(o(re,F3,e)),t=p(D3,bu,r,n);return C(su,t,e,a,0)}else return Qo},Ee=y(function(e,r,n){return A(e,r,n)}),yu=function(){var e=Fr(1),r=Fr(1),n=Fr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),m=p(be,i,v,l),d=o(K,.5,n),f=p(be,d,t,a),b=p(be,d,v,a),g=p(be,d,t,l),w=p(be,d,v,l);return Zo(E3(_([p(Ee,c,b,f),p(Ee,c,s,b),p(Ee,u,g,w),p(Ee,u,w,m),p(Ee,f,b,w),p(Ee,f,w,g),p(Ee,c,m,s),p(Ee,c,u,m),p(Ee,c,f,g),p(Ee,c,g,u),p(Ee,s,w,b),p(Ee,s,m,w)])))}(),qn={$:0},R3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),j3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ia(p(_u,u,l,c)),s={o:v,bU:Le(u)},m={o:v,bU:Le(l)},d={o:v,bU:Le(c)};return o(D,s,o(D,m,o(D,d,n)))}),Ko=function(e){var r=e;return r.D},N3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),Gt=4294967295>>>32-Tn,Wt=ov,G3=y(function(e,r,n){e:for(;;){var a=Gt&r>>>e,t=o(Wt,a,n);if(t.$){var v=t.a;return o(Wt,Gt&r,v)}else{var i=t.a,c=e-Tn,l=r,u=i;e=c,r=l,n=u;continue e}}}),W3=function(e){return e>>>5<<5},H3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,W3(n))>-1?ne(o(Wt,Gt&e,i)):ne(p(G3,a,e,t))}),ei=function(e){var r=e;return r.ah},vt=$(function(e,r){return o(H3,e,ei(r))}),X3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(N3,y(function(c,l,u){return A(c,l,u)}),o(vt,a,e),o(vt,t,e),o(vt,i,e))};return o(yo,r,Ko(e))},U3=y(function(e,r,n){e:for(;;){var a=o($o,Fe,e),t=a.a,i=a.b;if(I(Tt(t),Fe)<0)return o(nl,!0,{z:r,l:n,p:t});var c=i,l=o(D,el(t),r),u=n+1;e=c,r=l,n=u;continue e}}),ri=function(e){return e.b?p(U3,e,L,0):Qc},I3=y(function(e,r,n){return e(r(n))}),O3=$(function(e,r){return!o(sl,o(I3,Ls,e),r)}),J3=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(D,n,a):a}),L,r)}),q3=function(e){var r=e.a;return r},xu=$(function(e,r){var n=q3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(O3,a,r)?{D:r,ah:e}:{D:o(J3,a,r),ah:e}}),Y3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Gn=Y3({df:1,$7:3,dV:4}),ca=$(function(e,r){var n=Zr(r),a=Zr(e);return z(A(a.fT,a.fX,a.c6),A(n.fT,n.fX,n.c6))}),ac=p(Fn,0,0,0),$t=Ve(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(go,o(ca,e,r),t);if(v.$){var m={o:ac,bU:Le(r)},d={o:ac,bU:Le(e)},f=u+1,b=u;return A(o(D,A(n,b,f),o(D,A(n,f,a),c)),o(D,m,o(D,d,l)),u+2)}else{var s=v.a;return A(o(D,A(n,s,a),c),l,u)}}),Z3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,b=a+1,g=a,w=e,x=r,h=v,T=a+3,k=se($t,s,d,f,g,r,se($t,m,s,b,f,r,se($t,d,m,g,b,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var G=t,j=G.a,R=G.b;return z(j,Ae(R))}}),Q3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,b=n+1,g=n,w=p(gn,o(ca,d,s),f,p(gn,o(ca,s,m),b,p(gn,o(ca,m,d),g,t))),x=o(D,A(g,b,f),a),h=e,T=v,k=n+3,G=x,j=w;e=h,r=T,n=k,a=G,t=j;continue e}else return A(a,t,n)}),Cr=y(function(e,r,n){var a=X3(n),t=p(mr,j3(r),L,a),i=S(Q3,r,a,0,L,Bl),c=i.a,l=i.b,u=i.c,v=S(Z3,r,l,a,0,A(c,L,u)),s=v.a,m=v.b,d=Dl(m)?t:le(t,m);return p(R3,e,o(xu,ri(d),s),o(Gn,d,s))}),Ht=function(e){return{D:o(re,function(r){return A(3*r,3*r+1,3*r+2)},o(Qr,0,Vr(e)-1)),ah:ri(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},Su=function(e){switch(e.$){case 0:return qn;case 1:var a=e.a,r=e.b,n=o(re,Pn,r);return p(Cr,a,Mr,Ht(n));case 2:var a=e.a,r=e.b,n=o(re,Pn,r);return p(Cr,a,Mr,Ht(n));case 3:var a=e.a,t=e.b;return p(Cr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 8:return qn;case 9:return qn;default:return qn}},tc=Su(yu),Tu={$:0},P=Tu,he=$(function(e,r){return{$:1,a:e,b:r}}),K3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},eb=1029,rb=function(e){return{$:5,a:e}},Cu=function(e){var r=e;return rb(r)},nb=Cu(eb),ab=1028,tb=Cu(ab),Pe=y(function(e,r,n){return r===1?e?o(D,nb,n):o(D,tb,n):n}),Lu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ft=E(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(Pe,l,a,m),Lu,K3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),ni={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Pu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=E(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(Pe,l,a,m),Pu,ni,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),zu=$(function(e,r){return{$:3,a:e,b:r}}),ob={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},ku={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ib=E(function(e,r,n,a){return o(zu,n,ee(function(t,i,c,l,u,v,s,m){return S(ae,m,ku,ob,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),ai={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Wn=function(e){var r=e;return r},Oa=rf,or=_e(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(Pe,u,t,d),Pu,ai,a,{aN:o(Oa,Wn(r),e),b:l,c,d:s,e:i,f:v})}))}),cb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},lb=_e(function(e,r,n,a,t){return o(zu,a,ee(function(i,c,l,u,v,s,m,d){return S(ae,d,ku,cb,t,{aN:o(Oa,Wn(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Du={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yn=E(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(Pe,l,a,m),Du,Mu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Au={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ub=Ve(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,m,d,f){var b=d.a,g=d.b;return S(ae,p(Pe,v,i,f),Au,Bu,t,{P:g,be:b.be,bL:b.bL,bM:b.bM,bN:b.bN,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Fu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},vb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(he,u,ee(function(m,d,f,b,g,w,x,h){var T=x.a,k=x.b;return S(ae,p(Pe,b,s,h),Au,Fu,v,{b5:e,b8:r,b9:i,ca:a,P:k,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:f,c:d,aW:c,d:w,cS:n,e:m,a$:l,f:g})}))}}}}}}}}}}},Vu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Zn=Ve(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,m,d,f){var b=d.a,g=d.b;return S(ae,p(Pe,v,i,f),Du,Vu,t,{b4:e,P:g,be:b.be,bL:b.bL,bM:b.bM,bN:b.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),$b=function(e){return{$:0,a:e}},oc=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),fb=function(e){return C(cn,ln(e),un(e),vn(e),1)},ti=C(cn,0,0,0,0),la=$(function(e,r){if(r.$){var a=r.a.C;return z(a,ti)}else{var n=r.a;return z(e,fb(n))}}),Eu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(oc,z(t,ti),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(oc,o(la,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,$b(a)}}),sb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),mb=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),db=function(e){return o(De,e,1)},Xt=o(De,0,0),Xr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Xt)}else{var n=r.a;return z(e,db(n))}}),Ru=E(function(e,r,n,a){var t=C(mb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Qn,z(u,ti),o(Xr,u,r),o(Xr,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Qn,o(la,u,e),z(u,Xt),o(Xr,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Qn,o(la,u,e),o(Xr,u,r),z(u,Xt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Qn,o(la,u,e),o(Xr,u,r),o(Xr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(sb,i,c,l)}}),pb={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},st=_e(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(Pe,u,t,d),Lu,pb,a,{b2:Wn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),ju={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bb=E(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(Pe,l,a,m),ju,Bu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),gb=Ot(function(e,r,n,a,t,i,c,l,u){return o(he,c,ee(function(v,s,m,d,f,b,g,w){var x=g.a,h=g.b;return S(ae,p(Pe,d,u,w),ju,Fu,l,{b5:e,b8:r,b9:i,ca:a,P:h,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:s,aW:e,d:b,cS:n,e:v,a$:0,f})}))}),zn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),hb=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},_b=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},wb=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},yb=function(e){return p(be,hb(e),_b(e),wb(e))},H=function(e){var r=eu(e),n=r.a,a=r.b,t=r.c;return{ey:Ua(yb(e)),eS:n/2,eT:a/2,eU:t/2}},oi=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(ib,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(st,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(st,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(st,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(lb,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,m=o(Eu,s,j);if(m.$){var b=m.a,g=b.a;b.b;var w=m.b,x=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(bb,g,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(ub,g,x,h,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(Yn,d,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(Yn,d,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(Yn,d,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Yn,d,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,k=e.c,G=e.d,j=e.e,R=C(Ru,T,k,G,j);if(R.$){var Y=R.a,Q=Y.a,ie=Y.b,ve=R.b,oe=ve.a,pe=ve.b,ke=R.c,Se=ke.a,dr=ke.b,pr=R.d,x=pr.a,h=pr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ev(gb,Q,ie,oe,pe,Se,dr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return vb(Q)(ie)(oe)(pe)(Se)(dr)(x)(h)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return se(Zn,N,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return se(Zn,N,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return se(Zn,N,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Zn,N,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),mt=function(e){var r=e;return r.fT},dt=function(e){var r=e;return r.fX},pt=function(e){var r=e;return r.c6},xb=function(e){var r=e,n=pt(r.c7),a=dt(r.c7),t=mt(r.c7),i=pt(r.c5),c=dt(r.c5),l=mt(r.c5),u=pt(r.c4),v=dt(r.c4),s=mt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Sb=function(e){var r=Ua(Wr(e)),n=We(Tr(e)),a=We(Sr(e)),t=We(xr(e));return{dp:xb(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bY:1}},Ur=$(function(e,r){return{$:5,a:e,b:r}}),Nu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Il,a,e);return o(Ur,i,t);case 1:return o(Ur,e,n);case 3:return o(Ur,e,n);case 2:return o(Ur,e,n);default:return o(Ur,e,n)}}),Gu=$(function(e,r){return o(Nu,Sb(e),r)}),Ja=function(e){return{$:2,a:e}},Tb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),Cb=tf,Lb=af,ic=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=Lb(a),b=f.fT,g=f.fX,w=f.c6,x=f.em,h=Cb({em:x,fT:b*s,fX:g*m,c6:w*d});return Da(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return Tu;case 5:var n=r.a,a=r.b;return o(Ur,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(he,o(Tb,e,t),o(ic,e,i));case 3:return r;case 2:var i=r.a;return Ja(o(ic,e,i));default:var c=r.a;return au(o(re,Ut(e),c))}}),ii=$(function(e,r){var n=r;return o(Ut,e,n)}),ci={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Wu=7683,Hu=7682,Pb=p(Oo,{cp:0,cO:0,c3:15},{a9:xe,bm:nn,bu:xe,bv:Wu},{a9:xe,bm:nn,bu:xe,bv:Hu}),zb=p(Oo,{cp:0,cO:0,c3:15},{a9:xe,bm:nn,bu:xe,bv:Hu},{a9:xe,bm:nn,bu:xe,bv:Wu}),li=$(function(e,r){return e?o(D,zb,r):o(D,Pb,r)}),kb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},Mb=function(e){if(e.$){var r=e.c;return ne(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(li,i,v),kb,ci,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},Pa=function(e){var r=Mb(e);if(r.$)return P;var n=r.a;return Ja(n)},Db=E(function(e,r,n,a){var t=o(oi,n,yu),i=function(){var s=z(e,r);return s.a?s.b?Nn(_([t,Pa(tc)])):t:s.b?Pa(tc):P}(),c=Wa(a),l=c.a,u=c.b,v=c.c;return o(Gu,Ga(a),o(ii,A(l,u,v),i))}),Bb=$(function(e,r){return C(Db,!0,!0,e,r)}),Xu=$(function(e,r){return{$:0,a:e,b:r}}),Ab=function(e){var r=wo(e),n=r.cN,a=r.cd,t=r.b6;return p(Fn,n,a,t)},Fb=function(e){return o(Xu,0,Rt(Ab(e)))},xn=function(e){var r=e;return Rr(r)},Vb=$(function(e,r){var n=r;return n/e}),cc=function(e){var r=e;return{fT:Rr(r),fX:rn(r)}},Eb=$(function(e,r){var n=e.bU,a=e.o;return o(D,{o:Ia(a),bU:Le(n)},r)}),Rb=Ma(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=vn(l.bU),s=un(l.bU),m=ln(l.bU),d=o(ia,e,m),f=o(ze,r,m),b=o(ia,n,s),g=o(ze,a,s),w=o(ia,t,v),x=o(ze,i,v),h=u;e=d,r=f,n=b,a=g,t=w,i=x,c=h;continue e}else return pu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Uu=$(function(e,r){var n=vn(e.bU),a=un(e.bU),t=ln(e.bU);return Jt(Rb,t,t,a,a,n,n,r)}),jb=function(e){var r=p(Xc,Eb,L,ei(e));if(r.b){var n=r.a,a=r.b,t=o(Gn,r,Ko(e)),i=o(Uu,n,a);return C(mu,i,e,t,0)}else return Qo},lc=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),za=function(e){var r=e;return rn(r)},It=function(e){return en(2*hr*e)},Nb=Mr,uc=Nb({cB:Ie,c4:cu,c5:No}),Iu=function(){var e=72,r=o(Vb,e,It(1)),n=Fr(1),a=Jr(zo),t=Jr(Vl),i=Fr(1),c=o(K,.5,i),l=p(be,Oe,Oe,c),u=o(K,-.5,i),v=p(be,Oe,Oe,u),s=function(f){var b=o(K,f,r),g=Jr(o(lc,uc,cc(b))),w=o(K,xn(b),n),x=o(K,za(b),n),h=p(be,w,x,c),T=p(be,w,x,u),k=o(_a,e,f+1),G=o(K,k,r),j=Jr(o(lc,uc,cc(G))),R=o(K,xn(G),n),N=o(K,za(G),n),W=p(be,R,N,u),F=p(be,R,N,c);return _([A({o:t,bU:v},{o:t,bU:W},{o:t,bU:T}),A({o:g,bU:T},{o:j,bU:W},{o:j,bU:F}),A({o:g,bU:T},{o:j,bU:F},{o:g,bU:h}),A({o:a,bU:l},{o:a,bU:h},{o:a,bU:F})])},m=o(re,s,o(Qr,0,e-1)),d=Ht(Ge(m));return Zo(jb(d))}(),vc=Su(Iu),Gb=function(e){var r=Gl(e),n=Lo(r),a=n.a,t=n.b;return qe({cB:Wl(e),c4:a,c5:t,c7:r})},Wb=E(function(e,r,n,a){var t=Gb(Go(a)),i=o(oi,n,Iu),c=function(){var m=z(e,r);return m.a?m.b?Nn(_([i,Pa(vc)])):i:m.b?Pa(vc):P}(),l=Xl(a),u=l,v=Hl(a),s=v;return o(Gu,t,o(ii,A(u,u,s),c))}),Hb=$(function(e,r){return C(Wb,!0,!0,e,r)}),$c={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},fc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},bn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return Ke({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Kn=wu(_([A({cZ:0},{cZ:1},{cZ:2})])),Xb=$(function(e,r){var n=bu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(he,a,ee(function(h,T,k,G,j,R,N,W){return S(ae,p(Pe,G,0,W),$c,ni,Kn,{aw:t,b:k,c:T,d:R,e:h,br:bn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(he,a,ee(function(h,T,k,G,j,R,N,W){return S(ae,p(Pe,G,0,W),$c,ai,Kn,{aN:o(Oa,Wn(c),i),b:k,c:T,d:R,e:h,br:bn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Eu,l,f);if(u.$)return P;var v=u.a;return o(he,a,ee(function(h,T,k,G,j,R,N,W){var F=N.a,Y=N.b;return S(ae,p(Pe,G,0,W),fc,Mu,Kn,{P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:k,c:T,d:R,e:h,br:bn(r),f:j})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,b=C(Ru,s,m,d,f);if(b.$)return P;var g=b.a,w=b.b,x=b.c;return o(he,a,ee(function(h,T,k,G,j,R,N,W){var F=N.a,Y=N.b;return S(ae,p(Pe,G,0,W),fc,Vu,Kn,{b4:g,P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:x,b:k,c:T,d:R,cR:w,e:h,br:bn(r),f:j})}))}}),Ub=function(){var e=_([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=_([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Gn,e,r)}(),Ib={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},sc=function(e){return Ja(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(li,t,u),Ib,ci,Ub,{b:a,c:n,d:c,e:r,bZ:l,br:bn(e),f:i})}))},Ob=E(function(e,r,n,a){var t=o(Xb,n,a),i=z(e,r);return i.a?i.b?Nn(_([t,sc(a)])):t:i.b?sc(a):P}),Jb=$(function(e,r){return C(Ob,!0,!0,e,r)}),qb=$(function(e,r){var n=Ar(r),a=Ar(e),t=Br(r),i=Br(e),c=Dr(r),l=Dr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Yb=function(e){var r=Ao(e),n=r.a,a=r.b;return o(qb,n,a)},mc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Zb=$(function(e,r){return{$:1,a:e,b:r}}),Qb=Zb({df:2,$7:0,dV:1}),dc=Qb(_([z({dw:0},{dw:1})])),Kb=$(function(e,r){var n=Yb(r),a=H(n),t=Ao(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(he,a,ee(function(v,s,m,d,f,b,g,w){return S(ae,w,mc,ni,dc,{aw:l,du:Le(c),dv:Le(i),b:m,c:s,d:b,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(he,a,ee(function(s,m,d,f,b,g,w,x){return S(ae,x,mc,ai,dc,{aN:o(Oa,Wn(u),l),du:Le(c),dv:Le(i),b:d,c:m,d:g,e:s,f:b})}));case 2:return P;default:return P}}),eg=$(function(e,r){return o(Kb,e,r)}),pc=$(function(e,r){var n=e,a=r;return n/a}),rg=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),bc=$(function(e,r){return e<1?L:S(rg,0,e,e,r,L)}),ng=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(D,{o:Ia(a),bU:Le(n),L:o(De,c,l)},r)}),ag=function(e){var r=p(Xc,ng,L,ei(e));if(r.b){var n=r.a,a=r.b,t=o(Gn,r,Ko(e)),i=o(Uu,n,a);return C(du,i,e,t,0)}else return Qo},Ou=$(function(e,r){var n=e,a=r,t=Rr(a);return{fT:t*Rr(n),fX:t*rn(n),c6:rn(a)}}),tg=function(){var e=Fr(1),r=72,n=o(Qr,0,r-1),a=o(bc,r,o(zn,Oe,It(1))),t=uo(r/2),i=o(Qr,0,t-1),c=o(bc,t,o(zn,dn(90),dn(-90))),l=ri(Ge(o(re,function(s){return o(re,function(m){return{o:Jr(o(Ou,s,m)),bU:p(be,o(K,xn(m)*xn(s),e),o(K,xn(m)*za(s),e),o(K,za(m),e)),L:z(o(pc,s,It(1)),o(pc,o(wn,dn(90),m),dn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Ge(o(re,function(s){return Ge(o(re,function(m){var d=o(u,s+1,m),f=o(u,s,m),b=o(u,s+1,m+1),g=o(u,s,m+1);return _([A(g,b,d),A(g,d,f)])},i))},n));return Zo(ag(o(xu,l,v)))}(),ka=72,ea=2*ka,og=$(function(e,r){e:for(;;){var n=ea+1,a=o(_a,ea,2*e+3),t=o(_a,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(D,A(l,c,t),o(D,A(c,a,t),o(D,A(c,i,a),o(D,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),ig=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),cg=$(function(e,r){e:for(;;){var n=p(ig,0,2*hr,e/ka),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),lg=function(){var e=o(cg,ka-1,_([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(og,ka-1,L);return o(Gn,e,r)}(),ug={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},gc=function(e){return Ja(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(li,!0,u),ug,ci,lg,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},vg=function(e){var r=hu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bY:1}},$g=$(function(e,r){return o(Nu,vg(e),r)}),fg=E(function(e,r,n,a){var t=o(oi,n,tg),i=function(){var u=z(e,r);return u.a?u.b?Nn(_([t,gc()])):t:u.b?gc():P}(),c=Xa(a),l=c;return o($g,o(Sa,Ie,Ha(a)),o(ii,A(l,l,l),i))}),sg=$(function(e,r){return C(fg,!0,!0,e,r)}),mg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),dg=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),pg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Xu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(mg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(jl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(dg,n,a,t,i,c)}},bg=pg,Ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(Bb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Jb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(sg,bg(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Hb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(eg,Fb(c),l)]);default:var u=e.a;return o(Ho,Ju,u)}},gg=function(e){return o(Ho,Ju,e)},hg=$(function(e,r){return C3({aI:R0(e.es),ev:e.ev,aJ:j0(.5),cb:e.cb,aK:z(Xi(Je(e.cT.fR)),Xi(Je(e.cT.eW))),aP:gg(r),fz:!0,fI:o(Ou,en(e.fH),en(e.fJ)),ei:Wo})}),_g=$(function(e,r){return o(hg,{es:Vd,ev:Zd({dj:{fT:0,fX:15,c6:18},aR:{fT:0,fX:4,c6:0},ei:{fT:0,fX:1,c6:0}}),cb:e.cb,cT:e.cT,fH:-Vt(135),fJ:-Vt(45)},o(E0,e,r))}),wg=C(Pd,_g,Fd,Ad,zd);const yg={Main:{init:wg(o(B,function(e){return Me({e1:e})},o(M,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Me({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(m){return Me({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ba(Ln)))},o(M,"left",Z))},o(M,"pressedKeys",ba(Ln)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(B,function(r){return o(B,function(n){return Me({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(B,function(e){return o(B,function(r){return Me({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},xg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(b=>b!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const b=f/1e3,g=b-V.clock;g<.009||(V.dt=g,V.clock=b,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},Sg=()=>{bt("pointerdown"),bt("wheel"),bt("keydown")},bt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Tg=yg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Sg();xg(Tg);
