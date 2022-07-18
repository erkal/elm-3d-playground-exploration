const rv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};rv();function xr(e,r,n){return n.a=e,n.f=r,n}function $(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return xr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return xr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ee(e){return xr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ba(e){return xr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return xr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function qt(e){return xr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Zt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Aa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function nv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var av=[];function tv(e){return e.length}var ov=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),iv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),cv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var lv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+uv()),r});function uv(e){return"<internals>"}function ln(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=_t(e,r,0,a);t&&(n=a.pop());t=_t(n.a,n.b,0,a));return t}function _t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ln(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=Ci(e),r=Ci(r));for(var t in e)if(!_t(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var vv=$(function(e,r){var n=O(e,r);return n<0?Jc:n?Qf:Oc}),Dn=0;function k(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function rr(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=or(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=or(e.a,r);return n}var P={$:0};function or(e,r){return{$:1,a:e,b:r}}var $v=$(or);function h(e){for(var r=P,n=e.length;n--;)r=or(e[n],r);return r}function Fa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ee(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Fa(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return h(Fa(r).sort(function(n,a){var t=o(e,n,a);return t===Oc?0:t===Jc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var sv=$(Math.pow);$(function(e,r){return r%e});var dv=$(function(e,r){var n=r%e;return e===0?ln(11):n>0&&e<0||n<0&&e>0?n+e:n}),mv=Math.PI,pv=Math.cos,bv=Math.sin,gv=Math.tan,hv=Math.atan,_v=$(Math.atan2);function wv(e){return e}function yv(e){return e===1/0||e===-1/0}var xv=Math.ceil,Sv=Math.floor,Cv=Math.round,Lv=Math.sqrt,$i=Math.log,Pv=isNaN;function zv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var kv=$(function(e,r){return e+r});function Tv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function Mv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Dv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Bv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Av=$(function(e,r){return r.split(e)}),Fv=$(function(e,r){return r.join(e)}),Uv=y(function(e,r,n){return n.slice(e,r)});function Vv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Ev=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Rv=$(function(e,r){return r.indexOf(e)>-1}),jv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Nv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function wc(e){return e+""}function Yv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function Wv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function Gv(e){return Fa(e).join("")}function Hv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Iv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ov(e){return{$:0,a:e}}function Qt(e){return{$:2,b:e}}var Jv=Qt(function(e){return typeof e=="boolean"?ue(e):er("a BOOL",e)}),qv=Qt(function(e){return typeof e=="number"?ue(e):er("a FLOAT",e)}),Zv=Qt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):er("a STRING",e)});function Qv(e){return{$:3,b:e}}var Xv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Kv=$(function(e,r){return{$:10,b:r,h:e}}),e$=$(function(e,r){return Sr(e,[r])}),r$=y(function(e,r,n){return Sr(e,[r,n])});V(function(e,r,n,a){return Sr(e,[r,n,a])});_e(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});Ee(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});Ba(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});qt(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ye(e,n)}catch(a){return ye(o(uo,"This is not valid JSON! "+a.message,r))}});var yc=$(function(e,r){return Ye(e,r)});function Ye(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):er("null",r);case 3:return Gn(r)?fi(e.b,r,h):er("a LIST",r);case 4:return Gn(r)?fi(e.b,r,n$):er("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return er("an OBJECT with a field named `"+n+"`",r);var v=Ye(e.b,r[n]);return Oe(v)?v:ye(o(Li,n,v.a));case 7:var a=e.e;if(!Gn(r))return er("an ARRAY",r);if(a>=r.length)return er("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ye(e.b,r[a]);return Oe(v)?v:ye(o(qc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return er("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ye(e.b,r[i]);if(!Oe(v))return ye(o(Li,i,v.a));t=or(k(i,v.a),t)}return ue(Ue(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ye(l[u],r);if(!Oe(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ye(e.b,r);return Oe(v)?Ye(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ye(d.a,r);if(Oe(v))return v;s=or(v.a,s)}return ye(Xf(Ue(s)));case 1:return ye(o(uo,e.a,r));case 0:return ue(e.a)}}function fi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ye(e,r[i]);if(!Oe(c))return ye(o(qc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function n$(e){return o(ms,e.length,function(r){return e[r]})}function er(e,r){return ye(o(uo,"Expecting "+e,r))}function Qr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Qr(e.b,r.b);case 6:return e.d===r.d&&Qr(e.b,r.b);case 7:return e.e===r.e&&Qr(e.b,r.b);case 9:return e.f===r.f&&si(e.g,r.g);case 10:return e.h===r.h&&Qr(e.b,r.b);case 11:return si(e.g,r.g)}}function si(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Qr(e[a],r[a]))return!1;return!0}var a$=$(function(e,r){return JSON.stringify(r,null,e)+""});function xc(e){return e}y(function(e,r,n){return n[e]=r,n});function Gr(e){return{$:0,a:e}}function t$(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var wt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function o$(e){return{$:5,b:e}}var i$=0;function Xt(e){var r={$:0,e:i$++,f:e,g:null,h:[]};return Kt(r),r}function Sc(e){return pr(function(r){r(Gr(Xt(e)))})}function Cc(e,r){e.h.push(r),Kt(e)}var c$=$(function(e,r){return pr(function(n){Cc(e,r),n(Gr(Dn))})}),Xa=!1,di=[];function Kt(e){if(di.push(e),!Xa){for(Xa=!0;e=di.shift();)l$(e);Xa=!1}}function l$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Kt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return eo(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function eo(e,r,n,a,t,i){var c=o(yc,e,r?r.flags:void 0);Oe(c)||ln(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=u$(l,m);function m(f,b){var g=o(a,f,v);s(v=g.a,b),pi(l,g.b,t(v))}return pi(l,u.b,t(v)),d?{ports:d}:{}}var ar={};function u$(e,r){var n;for(var a in ar){var t=ar[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=$$(t,r)}return n}function v$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function $$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(wt,l,o$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Xt(o(wt,l,e.b))}var f$=$(function(e,r){return pr(function(n){e.g(r),n(Gr(Dn))})});$(function(e,r){return o(c$,e.h,{$:0,a:r})});function Lc(e){return function(r){return{$:1,k:e,l:r}}}function s$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var mi=[],Ka=!1;function pi(e,r,n){if(mi.push({p:e,q:r,r:n}),!Ka){Ka=!0;for(var a;a=mi.shift();)d$(a.p,a.q,a.r);Ka=!1}}function d$(e,r,n){var a={};$a(!0,r,a,null),$a(!1,n,a,null);for(var t in e)Cc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function $a(e,r,n,a){switch(r.$){case 1:var t=r.k,i=m$(e,t,a,r.l);n[t]=p$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)$a(e,c.a,n,a);return;case 3:$a(e,r.o,n,{s:r.n,t:a});return}}function m$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ar[r].e:ar[r].f;return o(i,t,a)}function p$(e,r,n){return n=n||{i:P,j:P},e?n.i=or(r,n.i):n.j=or(r,n.j),n}function b$(e){ar[e]&&ln(3)}$(function(e,r){return r});function g$(e,r){return b$(e),ar[e]={f:h$,u:r,a:_$},Lc(e)}var h$=$(function(e,r){return function(n){return e(r(n))}});function _$(e,r){var n=P,a=ar[e].u,t=Gr(null);ar[e].b=t,ar[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(yc,a,c);Oe(l)||ln(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var fa,vr=typeof document!="undefined"?document:{};function ro(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function yt(e){return{$:0,a:e}}var Pc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:no(n),e:t,f:e,b:i}})}),Hr=Pc(void 0),w$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:no(n),e:t,f:e,b:i}})}),y$=w$(void 0);function x$(e,r,n,a){return{$:3,d:no(e),g:r,h:n,i:a}}var S$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Cr([e,r],function(){return e(r)})});y(function(e,r,n){return Cr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return Cr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return Cr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ee(function(e,r,n,a,t,i){return Cr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ba(function(e,r,n,a,t,i,c){return Cr([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Cr([e,r,n,a,t,i,c,l],function(){return Zt(e,r,n,a,t,i,c,l)})});qt(function(e,r,n,a,t,i,c,l,u){return Cr([e,r,n,a,t,i,c,l,u],function(){return Aa(e,r,n,a,t,i,c,l,u)})});var zc=$(function(e,r){return{$:"a0",n:e,o:r}}),C$=$(function(e,r){return{$:"a1",n:e,o:r}}),kc=$(function(e,r){return{$:"a2",n:e,o:r}}),Lr=$(function(e,r){return{$:"a3",n:e,o:r}}),L$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function P$(e){return e=="script"?"p":e}function z$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(zc,r.n,k$(e,r.o)):r});function k$(e,r){var n=mo(r);return{$:r.$,a:n?p(ps,n<3?T$:M$,Be(e),r.a):o(pa,e,r.a)}}var T$=$(function(e,r){return k(e(r.a),r.b)}),M$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function no(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?bi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?bi(c,t,i):c[t]=i}return r}function bi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return xt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);fa&&e.c=="a"&&c.addEventListener("click",fa(c)),xt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ro(c,_r(n===1?l[u]:l[u].b,r));return c}function xt(e,r,n){for(var a in n){var t=n[a];a==="a1"?D$(e,t):a==="a0"?F$(e,r,t):a==="a3"?B$(e,t):a==="a4"?A$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function D$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function B$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function A$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function F$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=U$(r,i),e.addEventListener(t,c,ao&&{passive:mo(i)<2}),a[t]=c}}var ao;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ao=!0}}))}catch{}function U$(e,r){function n(a){var t=n.q,i=Ye(t.a,a);if(!!Oe(i)){for(var c=mo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function V$(e,r){return e.$==r.$&&Qr(e.a,r.a)}function Tc(e,r){var n=[];return Je(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=H$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,b=e.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){we(n,0,a,r);return}(f?!E$(d,m):d!==m)&&we(n,2,a,m),Je(b,g,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:gi(e,r,n,a,R$);return;case 2:gi(e,r,n,a,j$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=to(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function E$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function gi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=to(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function to(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=to(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&V$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function R$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function j$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var b=l[d],g=u[m],w=b.a,x=g.a,_=b.b,C=g.b,T=void 0,N=void 0;if(w===x){f++,Je(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var j=R.a,Y=R.b;N=x===j}if(E){var F=E.a,Z=E.b;T=w===F}if(T&&N){f++,Je(_,Z,t,f),mn(i,t,w,C,m,c),f+=_.b||0,f++,pn(i,t,w,Y,f),f+=Y.b||0,d+=2,m+=2;continue}if(T){f++,mn(i,t,x,C,m,c),Je(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,pn(i,t,w,_,f),f+=_.b||0,f++,Je(Y,C,t,f),f+=Y.b||0,d+=2,m+=1;continue}if(R&&j===F){f++,pn(i,t,w,_,f),mn(i,t,x,C,m,c),f+=_.b||0,f++,Je(Y,Z,t,f),f+=Y.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var b=l[d],_=b.b;pn(i,t,b.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],g=u[m];mn(i,t,g.a,g.b,void 0,X),m++}(t.length>0||c.length>0||X)&&we(n,8,a,{w:t,x:c,y:X})}var Mc="_elmW6BL";function mn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}mn(e,r,n+Mc,a,t,i)}function pn(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}pn(e,r,n+Mc,a,t)}function Dc(e,r,n,a){bn(e,r,n,0,0,r.b,a)}function bn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Dc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&bn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&bn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return bn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,w=0;w<b.length;w++){t++;var x=m===1?b[w]:b[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=bn(g[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Bc(e,r,n,a){return n.length===0?e:(Dc(e,r,n,a),sa(e,n))}function sa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=N$(t,a);t===e&&(e=i)}return e}function N$(e,r){switch(r.$){case 0:return Y$(e,r.s,r.u);case 4:return xt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return sa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=sa(e,i.w),e;case 8:return W$(e,r);case 5:return r.s(e);default:ln(10)}}function Y$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function W$(e,r){var n=r.s,a=G$(n.y,r);e=sa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ro(e,a),e}function G$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ro(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function oo(e){if(e.nodeType===3)return yt(e.textContent);if(e.nodeType!==1)return yt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=or(o(Lr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=or(oo(v[a]),u);return p(Hr,l,r,u)}function H$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var I$=V(function(e,r,n,a){return eo(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=oo(l);return Ac(i,function(v){var s=c(v),d=Tc(u,s);l=Bc(l,u,d,t),u=s})})});V(function(e,r,n,a){return eo(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=vr.title,v=vr.body,s=oo(v);return Ac(i,function(d){fa=c;var m=l(d),f=Hr("body")(P)(m.eu),b=Tc(s,f);v=Bc(v,s,b,t),s=f,fa=0,u!==m.fL&&(vr.title=u=m.fL)})})});var da=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ac(e,r){r(e);var n=0;function a(){n=n===1?0:(da(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&da(a),n=2)}}$(function(e,r){return o(go,po,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(go,po,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(go,po,pr(function(){history.replaceState({},"",r),e()}))});var O$={addEventListener:function(){},removeEventListener:function(){}},J$=typeof window!="undefined"?window:O$;y(function(e,r,n){return Sc(pr(function(a){function t(i){Xt(n(i))}return e.addEventListener(r,t,ao&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ye(e,r);return Oe(n)?ne(n.a):q});function Fc(e,r){return pr(function(n){da(function(){var a=document.getElementById(e);n(a?Gr(r(a)):t$(gs(e)))})})}function q$(e){return pr(function(r){da(function(){r(Gr(e()))})})}$(function(e,r){return Fc(r,function(n){return n[e](),Dn})});$(function(e,r){return q$(function(){return J$.scroll(e,r),Dn})});y(function(e,r,n){return Fc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Z$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Q$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):q}a.push(L(zl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(L(zl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var X$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/K$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function K$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var io=new Float64Array(3),hi=new Float64Array(3),_i=new Float64Array(3),ef=y(function(e,r,n){return new Float64Array([e,r,n])}),rf=function(e){return e[0]},nf=function(e){return e[1]},af=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var tf=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Uc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Uc);function Vc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ma(Uc(e,r,n),n)}$(Vc);function Ec(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ma(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Ec(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var of=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),gn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(gn);function St(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(St);$(function(e,r){var n,a=io,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=gn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(gn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(gn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(gn(r,a)+e[14])/n,t});var cf=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var lf=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},uf=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/vf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function vf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var $f=new Float64Array(16),ff=new Float64Array(16),sf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},df=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Rc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ee(Rc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Rc(c,l,i,t,n,a)});function jc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ee(jc);V(function(e,r,n,a){return jc(e,r,n,a,-1,1)});function Nc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],b=e[11],g=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],R=r[3],E=r[4],j=r[5],Y=r[6],F=r[7],Z=r[8],X=r[9],ie=r[10],ve=r[11],oe=r[12],pe=r[13],De=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+g*R,n[1]=t*C+u*T+m*N+w*R,n[2]=i*C+v*T+f*N+x*R,n[3]=c*C+s*T+b*N+_*R,n[4]=a*E+l*j+d*Y+g*F,n[5]=t*E+u*j+m*Y+w*F,n[6]=i*E+v*j+f*Y+x*F,n[7]=c*E+s*j+b*Y+_*F,n[8]=a*Z+l*X+d*ie+g*ve,n[9]=t*Z+u*X+m*ie+w*ve,n[10]=i*Z+v*X+f*ie+x*ve,n[11]=c*Z+s*X+b*ie+_*ve,n[12]=a*oe+l*pe+d*De+g*Se,n[13]=t*oe+u*pe+m*De+w*Se,n[14]=i*oe+v*pe+f*De+x*Se,n[15]=c*oe+s*pe+b*De+_*Se,n}$(Nc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],b=e[14],g=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],R=r[9],E=r[10],j=r[12],Y=r[13],F=r[14];return n[0]=a*g+c*w+v*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+s*E,n[10]=i*N+u*R+d*E,n[11]=0,n[12]=a*j+c*Y+v*F+m,n[13]=t*j+l*Y+s*F+f,n[14]=i*j+u*Y+d*F+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ma(r,io);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Ec(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,b=i*c*v,g=i*l*v,w=c*l*v,x=i*i*v+u,_=b+f,C=g-m,T=b-f,N=c*c*v+u,R=w+d,E=g+m,j=w-d,Y=l*l*v+u,F=n[0],Z=n[1],X=n[2],ie=n[3],ve=n[4],oe=n[5],pe=n[6],De=n[7],Se=n[8],gr=n[9],hr=n[10],Qa=n[11],Qu=n[12],Xu=n[13],Ku=n[14],ev=n[15];return a[0]=F*x+ve*_+Se*C,a[1]=Z*x+oe*_+gr*C,a[2]=X*x+pe*_+hr*C,a[3]=ie*x+De*_+Qa*C,a[4]=F*T+ve*N+Se*R,a[5]=Z*T+oe*N+gr*R,a[6]=X*T+pe*N+hr*R,a[7]=ie*T+De*N+Qa*R,a[8]=F*E+ve*j+Se*Y,a[9]=Z*E+oe*j+gr*Y,a[10]=X*E+pe*j+hr*Y,a[11]=ie*E+De*j+Qa*Y,a[12]=Qu,a[13]=Xu,a[14]=Ku,a[15]=ev,a});function mf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(mf);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function pf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(pf);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],b=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=b,t[10]=g,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+b*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],b=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=b,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+b*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Vc(e,r,io),t=ma(St(n,a,hi),hi),i=ma(St(a,t,_i),_i),c=$f,l=ff;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Nc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var wi=0;function Ln(e,r){for(;r.b;r=r.b)e(r.a)}function co(e){for(var r=0;e.b;e=e.b)r++;return r}var bf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},gf=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),hf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),_f=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),wf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),yf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Cf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Lf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Pf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},zf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},kf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Tf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Yc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Mf=function(e){e.gl.disable(e.gl.CULL_FACE)},Df=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Bf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Af=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},yi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ff=[zf,kf,Tf,Yc,Wc,Mf,Df,Bf,Af];function xi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Uf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Vf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,b,g,w,x){var _;if(t===1)for(_=0;_<b;_++)f[g++]=b===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<b;_++)f[g++]=b===1?w[C][x]:w[C][x][_]})}var u=Gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(co(n.b)*s);Ln(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Ef(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Rf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*co(r.b),indexBuffer:null,buffers:{}}}function Rf(e,r){var n=new Uint32Array(co(e)*r),a=0,t;return Ln(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Si(e,r){return e+"#"+r}var Hc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Yc(n),Wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Si(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=wi++,v||(v=xi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=wi++,s||(s=xi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Uf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=jf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),b=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(b)}c=Si(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Nf(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Ef(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],b=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Vf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(b+C),a.vertexAttribPointer(b+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Ln($p(n),i.a),u=0;u<yi.length;u++){var T=n[yi[u]];T.toggle!==n.toggle&&T.enabled&&(Ff[u](n),T.enabled=!1,T.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return Ln(t,e.g),r});function jf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,b){var g=b.name,w=e.getUniformLocation(f,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(w,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(w,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==_&&(e.uniform1i(w,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Nf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Yf=y(function(e,r,n){return x$(r,{g:n,f:{},h:e},qf,Zf)}),Wf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Gf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Hf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),If=$(function(e,r){e.contextAttributes.antialias=!0}),Of=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Jf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function qf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ln(function(t){return o(vp,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),bf(function(){return o(Hc,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Zf(e,r){return r.f=e.f,Hc(r)}var D=$v,Hn=lv,Ic=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Hn,e,l,v)}else{var u=c.a;return p(Hn,i,l,u)}});return p(Hn,i,p(Hn,e,r,t),a)}),lo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(lo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ci=function(e){return p(lo,y(function(r,n,a){return o(D,k(r,n),a)}),P,e)},Oc=1,Qf=2,Jc=0,ye=function(e){return{$:1,a:e}},uo=$(function(e,r){return{$:3,a:e,b:r}}),Li=$(function(e,r){return{$:0,a:e,b:r}}),qc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Xf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},Kf=Ev,es=a$,Fe=wc,Mr=$(function(e,r){return o(Fv,e,Fa(r))}),vo=$(function(e,r){return h(o(Av,e,r))}),Zc=function(e){return o(Mr,`
    `,o(vo,`
`,e))},Bn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),jr=function(e){return p(Bn,$(function(r,n){return n+1}),0,e)},rs=fv,ns=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),an=$(function(e,r){return p(ns,e,r,P)}),Qc=$(function(e,r){return p(rs,e,o(an,0,jr(r)-1),r)}),tr=Hv,Xc=function(e){var r=tr(e);return 97<=r&&r<=122},Kc=function(e){var r=tr(e);return r<=90&&65<=r},as=function(e){return Xc(e)||Kc(e)},ts=function(e){var r=tr(e);return r<=57&&48<=r},os=function(e){return Xc(e)||Kc(e)||ts(e)},Ue=function(e){return p(Bn,D,P,e)},un=Tv,is=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Zc(cs(r))))}),cs=function(e){return o(ls,e,P)},ls=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=un(n);if(g.$===1)return!1;var w=g.a,x=w.a,_=w.b;return as(x)&&o(Kf,os,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(D,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(D,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Mr,"",Ue(r)):"Json.Decode.oneOf"}(),b=d+(" failed in the following "+(Fe(jr(s))+" ways:"));return o(Mr,`

`,o(D,b,o(Qc,is,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Mr,"",Ue(r)):"!"}();default:var m=e.a,f=e.b,b=function(){return r.b?"Problem with the value at json"+(o(Mr,"",Ue(r))+`:

    `):`Problem with the given value:

`}();return b+(Zc(o(es,4,f))+(`

`+m))}}),Ve=32,Ct=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Lt=av,$o=xv,fo=$(function(e,r){return $i(r)/$i(e)}),us=wv,Pn=$o(o(fo,2,Ve)),el=L(Ct,0,Pn,Lt,Lt),rl=ov,nl=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var al=Sv,Pt=tv,Me=$(function(e,r){return O(e,r)>0?e:r}),vs=function(e){return{$:0,a:e}},so=iv,$s=$(function(e,r){e:for(;;){var n=o(so,Ve,e),a=n.a,t=n.b,i=o(D,vs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ue(i)}}),fs=function(e){var r=e.a;return r},ss=$(function(e,r){e:for(;;){var n=$o(r/Ve);if(n===1)return o(so,Ve,e).a;var a=o($s,e,P),t=n;e=a,r=t;continue e}}),tl=$(function(e,r){if(r.l){var n=r.l*Ve,a=al(o(fo,Ve,n-1)),t=e?Ue(r.z):r.z,i=o(ss,t,r.l);return L(Ct,Pt(r.p)+n,o(Me,5,a*Pn),i,r.p)}else return L(Ct,Pt(r.p),Pn,Lt,r.p)}),ds=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(tl,!1,{z:a,l:n/Ve|0,p:t});var i=nl(p(rl,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(D,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ms=$(function(e,r){if(e<=0)return el;var n=e%Ve,a=p(rl,n,e-n,r),t=e-n-Ve;return S(ds,r,t,e,P,a)}),Oe=function(e){return!e.$},B=Kv,Q=Jv,M=Xv,$e=qv,pa=e$,ps=r$,Be=Ov,mo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Hr("div"),bs=function(e){return{$:2,a:e}},ol=$(function(e,r){return e}),il=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Fr=function(e){return e},gs=Fr,Pi=Ee(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),hs=Rv,Dr=Mv,Xr=Uv,An=$(function(e,r){return e<1?r:p(Xr,e,Dr(r),r)}),Ua=Nv,Va=function(e){return e===""},Ea=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),cl=Yv,zi=_e(function(e,r,n,a,t){if(Va(t)||o(hs,"@",t))return q;var i=o(Ua,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=cl(o(An,c+1,t));if(l.$===1)return q;var u=l;return ne(se(Pi,e,o(Ea,c,t),u,r,n,a))}else return ne(se(Pi,e,t,q,r,n,a))}),ki=V(function(e,r,n,a){if(Va(a))return q;var t=o(Ua,"/",a);if(t.b){var i=t.a;return S(zi,e,o(An,i,a),r,n,o(Ea,i,a))}else return S(zi,e,"/",r,n,a)}),Ti=y(function(e,r,n){if(Va(n))return q;var a=o(Ua,"?",n);if(a.b){var t=a.a;return L(ki,e,ne(o(An,t+1,n)),r,o(Ea,t,n))}else return L(ki,e,q,r,n)});$(function(e,r){if(Va(r))return q;var n=o(Ua,"#",r);if(n.b){var a=n.a;return p(Ti,e,ne(o(An,a+1,r)),o(Ea,a,r))}else return p(Ti,e,q,r)});var _s=jv,po=function(e){},Fn=Gr,ws=Fn(0),ll=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Bn,e,r,Ue(d)):L(ll,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return L(ll,e,r,0,n)}),re=$(function(e,r){return p(br,$(function(n,a){return o(D,e(n),a)}),P,r)}),ba=wt,bo=$(function(e,r){return o(ba,function(n){return Fn(e(n))},r)}),ys=y(function(e,r,n){return o(ba,function(a){return o(ba,function(t){return Fn(o(e,a,t))},n)},r)}),xs=function(e){return p(br,ys(D),Fn(P),e)},Ss=f$,Cs=$(function(e,r){var n=r;return Sc(o(ba,Ss(e),n))}),Ls=y(function(e,r,n){return o(bo,function(a){return 0},xs(o(re,Cs(e),r)))}),Ps=y(function(e,r,n){return Fn(0)}),zs=$(function(e,r){var n=r;return o(bo,e,n)});ar.Task=v$(ws,Ls,Ps,zs);var ks=Lc("Task"),go=$(function(e,r){return ks(o(bo,e,r))}),Ts=I$,Ms=zv,ga={$:1},ul=function(e){return{$:2,a:e}},Ra={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),vn=function(e){var r=e.b.B;return r.a},Ds=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(We,r,{B:i,ab:c,T:o(D,a,n)}))}else return q},vl=function(e){var r=e.b;return o(We,Ra,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Bs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?vl(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,vn(n).a4)>0?o(te,Ds,dr(o(We,ga,t))):Fr)(o(We,ul({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(il,l.eA,rr(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(We,Ra,{B:k(v,s),ab:P,T:o(D,t.B,t.T)})}}),$l=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),As=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Fs=$(function(e,r){return Ue(p(As,e,r,P))}),fl=y(function(e,r,n){if(r<=0)return P;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,b=f.b,g=b.a,w=b.b;return e>1e3?o(D,_,o(D,c,o(D,s,o(D,g,o(Fs,r-4,w))))):o(D,_,o(D,c,o(D,s,o(D,g,p(fl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Us=$(function(e,r){return p(fl,0,e,r)}),Vs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ue(n),le(h([a]),t)),c=o(Us,e,i),l=o($l,e,i);if(l.b){var u=l.a,v=l.b;return o(We,ga,{B:u,ab:v,T:Ue(c)})}else{var s=Ue(c);if(s.b){var d=s.a,m=s.b;return o(We,ga,{B:d,ab:P,T:m})}else return r}}),Es=function(e){var r=e.b;return o(We,ga,r)},Rs=function(e){var r=e.b;return o(We,ul({cY:vn(e).a4}),r)},js=$(function(e,r){switch(e.$){case 1:return Es(r);case 2:return vl(r);case 3:return Rs(r);default:var n=e.a;return o(Vs,n,r)}}),sl=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Ns=$(function(e,r){return rr(r,{av:e(r.av)})}),Ys=function(e){return{$:3,a:e}},Ws=function(e){return{$:2,a:e}},dl=$(function(e,r){return{$:0,a:e,b:r}}),Gs=$(function(e,r){return{$:1,a:e,b:r}}),ze=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),J=function(e){return e<0?-e:e},ho=Wv,Hs=y(function(e,r,n){return o(dr,0/0,ho(o(e,r,n)))}),ml=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Is=Bv,pl=function(e){return p(Is,D,P,e)},Os=$(function(e,r){var n=o(ml,function(a){return a!=="0"&&a!=="."},pl(r));return le(e&&n?"-":"",r)}),ge=wc,zt=kv,bl=Iv,gl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=un(n);if(a.$===1)return"01";var t=a.a;return o(zt,"0",gl(t))}else{var i=tr(r);return i>=48&&i<57?o(zt,bl(i+1),n):"0"}},kt=yv,Js=Pv,ja=function(e){return o(zt,e,"")},hl=y(function(e,r,n){return e<=0?n:p(hl,e>>1,le(r,r),e&1?le(n,r):n)}),zn=$(function(e,r){return p(hl,e,r,"")}),Tt=y(function(e,r,n){return le(n,o(zn,e-Dr(n),ja(r)))}),Mt=Dv,_l=function(e){var r=o(vo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},qs=function(e){var r=o(vo,"e",ge(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,cl(o(_s,"+",t)?o(An,1,t):t)),c=_l(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(dr,"0",o(ze,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ze,sl(ja),un(le(o(zn,J(i),"0"),v))))):p(Tt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Zs=y(function(e,r,n){if(kt(n)||Js(n))return ge(n);var a=n<0,t=_l(qs(J(n))),i=t.a,c=t.b,l=Dr(i)+r,u=le(o(zn,-l+1,"0"),p(Tt,l,"0",le(i,c))),v=Dr(u),s=o(Me,1,l),d=o(e,a,p(Xr,s,v,u)),m=p(Xr,0,s,u),f=d?Mt(o(dr,"1",o(ze,gl,un(Mt(m))))):m,b=Dr(f),g=f==="0"?f:r<=0?le(f,o(zn,J(r),"0")):O(r,Dr(c))<0?p(Xr,0,b-r,f)+("."+p(Xr,b-r,b,f)):le(i+".",p(Tt,r,"0",c));return o(Os,a,g)}),wl=Zs($(function(e,r){var n=un(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(tr(t))})),Qs=Hs(wl),Xs=y(function(e,r,n){var a=o(fo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Qs,t,n)}),yl=vv,_o=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(yl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},tn=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var b=f.b,g=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,v,s,S(G,1,b,g,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),Dt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(yl,e,t);switch(u){case 0:return S(tn,a,t,i,p(Dt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(tn,a,t,i,c,p(Dt,e,r,l))}}),wn=y(function(e,r,n){var a=p(Dt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),Ks=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},xl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,b=m.c,g=m.d,w=m.e,x=v.e;return S(G,0,f,b,S(G,1,n,a,S(G,0,i,c,l,u),g),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},Mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var b=f.b,g=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,b,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var b=T.b,g=T.c,w=T.d,x=T.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,b,g,w,x))}else return e},ed=Ba(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Mi(r)}else break e;else return c.a,c.d,Mi(r);else break e;return r}}),aa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,aa(t),l);var u=xl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(tn,v,s,d,aa(m),f)}else return ir}else return S(G,r,n,a,aa(t),l)}else return ir},yn=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(yn,e,i),c);var u=xl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(tn,v,s,d,o(yn,e,m),f)}else return ir}else return S(G,n,a,t,o(yn,e,i),c);else return o(rd,e,Zt(ed,e,r,n,a,t,i,c))}),rd=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=Ks(c);if(l.$===-1){var u=l.b,v=l.c;return S(tn,n,u,v,i,aa(c))}else return ir}else return S(tn,n,a,t,i,o(yn,e,c))}else return ir}),nd=$(function(e,r){var n=o(yn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),In=y(function(e,r,n){var a=r(o(_o,e,n));if(a.$)return o(nd,e,n);var t=a.a;return p(wn,e,t,n)}),ad=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(In,r,ze(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Gs,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(In,r,ze(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(dl,k(i,c),p(Xs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(In,r,ze(function(a){return a.$===3?Ys(n):a}));default:var r=e.a,n=e.b;return o(In,r,ze(function(a){return a.$===2?Ws(n):a}))}},td=function(e){return Ns(ad(e))},od=$(function(e,r){return o(re,td(e),r)}),id=$(function(e,r){return rr(r,{eA:o(od,e,r.eA)})}),cd=$(function(e,r){var n=r.a,a=r.b;return o(We,n,rr(a,{B:o(sl,id(e),a.B)}))}),ld=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),ud=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,rr(t,{B:o(ld,o(e,i.a,r),i)}))}),vd=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return rr(a,{aL:!a.aL});case 2:var t=n.a;return rr(a,{G:p(Bs,e,t,a.G)});case 3:var i=n.a;return rr(a,{G:o(cd,i,a.G)});case 4:var c=n.a;return rr(a,{G:p(ud,r,c,a.G)});default:var l=n.a;return rr(a,{G:o(js,l,a.G)})}}),$d=$(function(e,r){return o(We,Ra,{B:k(e,r(e)),ab:P,T:P})}),fd=s$,Di=fd(P),ha=Qv,kn=Zv,sd=g$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Be({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(d){return Be({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",ha(kn)))},o(M,"left",Q))},o(M,"pressedKeys",ha(kn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Be({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(B,function(r){return o(B,function(n){return Be({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(B,function(e){return o(B,function(r){return Be({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),dd=function(e){return{$:4,a:e}},md={$:0},pd=xc,Ie=$(function(e,r){return o(kc,e,pd(r))}),H=Ie("className"),bd=function(e){var r=e.b.B;return r.b},_a=Ie("id"),gd=S$,wa=gd,hd=C$,de=hd,_d={$:1},wd=function(e){return{$:3,a:e}},yd=function(e){return{$:5,a:e}},Bi=Hr("a"),wo=Hr("button"),Ai=function(e){return o(Ie,"href",z$(e))},xd=Lr("clip-rule"),Ce=Lr("d"),Sd=Lr("fill"),Sl=Pc("http://www.w3.org/2000/svg"),Cd=Sl("svg"),Ld=Lr("viewBox"),Pd=o(L$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=Cd(h([Ld("0 0 24 24"),Sd("currentColor"),o(de,"width","100%"),o(de,"height","100%"),Pd("http://www.w3.org/2000/svg")])),zd=Lr("fill-rule"),Le=Sl("path"),en={eD:Re(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(h([o(Le,h([zd("evenodd"),xd("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},kd=function(e){return{$:0,a:e}},Cl=zc,Ll=$(function(e,r){return o(Cl,e,kd(r))}),yo=function(e){return o(Ll,"click",Be(e))},Fi=Ie("target"),Td=Ie("title"),Bt=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Bt,e,i),o(Bt,e,c))}),Md=yt,mr=Md,Dd=function(e){return p(lo,y(function(r,n,a){return o(D,n,a)}),P,e)},Bd=$(function(e,r){return{$:3,a:e,b:r}}),Ad=$(function(e,r){return{$:2,a:e,b:r}}),Fd=$(function(e,r){return{$:0,a:e,b:r}}),Ud=$(function(e,r){return{$:1,a:e,b:r}}),Ir=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Vd=L(Ir,0/255,0/255,0/255,1),Ed=xc,Rd=$(function(e,r){return o(kc,e,Ed(r))}),jd=Rd("checked"),Qe=Cv,Nd=y(function(e,r,n){return le(o(zn,e-Dr(n),ja(r)),n)}),ya=dv,Pl=function(e){var r=function(n){return n<10?Fe(n):ja(bl(87+n))};return e<16?r(e):le(Pl(e/16|0),r(o(ya,16,e)))},Yd=o(te,Pl,o(Nd,2,"0")),xo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Wd=function(e){var r=xo(e),n=r.cN,a=r.cd,t=r.b6;return o(Mr,"",o(D,"#",o(re,o(te,Qe,Yd),h([n*255,a*255,t*255]))))},At=Ie("htmlFor"),Ft=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),xa=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Gd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),So=$(function(e,r){return p(br,Gd(e),P,r)}),zl=V(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Hd=Q$,Id=Gv,Od=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Jd=Z$,qd=function(e){return o(Jd,{ew:!1,fg:!1},e)},Co=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},Zd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Qd=function(e){return{$:2,a:e}},Xd=function(e){return{$:0,a:e}},Kd=function(e){return{$:1,a:e}},et=$(function(e,r){return tr(r)-tr(e)}),rt=y(function(e,r,n){var a=tr(n);return O(tr(e),a)<1&&O(a,tr(r))<1}),em=$(function(e,r){var n=function(t){return O(t,e)<0?ue(t):ye(Kd(r))},a=p(rt,"0","9",r)?ue(o(et,"0",r)):p(rt,"a","z",r)?ue(10+o(et,"a",r)):p(rt,"A","Z",r)?ue(10+o(et,"A",r)):ye(Xd(r));return o(xa,n,a)}),kl=$(function(e,r){var n=un(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(xa,function(c){return o(xa,function(l){return ue(c+l*e)},o(kl,e,i))},o(em,e,t))}),rm=$(function(e,r){return 2<=e&&e<=36?o(kl,e,Mt(r)):ye(Qd(e))}),nm=rm(16),am=y(function(e,r,n){return L(Ir,e,r,n,1)}),tm=V(function(e,r,n,a){return L(Ir,e,r,n,a)}),Nr=sv,om=$(function(e,r){var n=o(Nr,10,e);return Qe(r*n)/n}),im=Vv,cm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=pl(n);if(a.b&&!a.b.b){var t=a.a;return Id(h([t,t]))}else return n};return o(te,im,o(te,function(n){return o(ze,function(a){return p(Hd,1,a,n)},qd(e))},o(te,Ft(Co),o(te,ze(function(n){return n.fG}),o(te,ze(So(Fr)),o(te,Od("Parsing hex regex failed"),xa(function(n){var a=o(re,o(te,r,o(te,nm,Zd(us))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(tm,t/255,c/255,u/255,o(om,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(am,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),Sa=Hr("input"),Ut=Hr("label"),Vt=Ie("name"),Tl=$(function(e,r){return p(br,M,r,e)}),lm=o(Tl,h(["target","checked"]),Q),um=function(e){return o(Ll,"change",o(pa,e,lm))},vm=function(e){return k(e,!0)},$m=function(e){return{$:1,a:e}},fm=$(function(e,r){return o(Cl,e,$m(r))}),sm=o(Tl,h(["target","value"]),kn),Lo=function(e){return o(fm,"input",o(pa,vm,o(pa,e,sm)))},Ml=Ie("max"),Dl=Ie("min"),Bl=function(e){return o(Ie,"step",e)},Ca=Ie("type"),Po=Ie("value"),Ui=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(I,P,h([o(Ut,h([At(r)]),h([o(I,h([H("relative w-full")]),h([o(I,h([H("inline-block")]),h([mr(r)])),o(I,h([H("inline-block float-right")]),h([mr(ge(n))]))]))])),o(Sa,h([Ca("range"),o(de,"width","100%"),_a(r),Vt(r),Dl(ge(a)),Ml(ge(t)),Po(ge(n)),Bl(ge(i)),Lo(o(te,ho,o(te,dr(42),c)))]),P)]))},dm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),mm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([H("h-12 py-4")]),h([o(Ut,h([H("block"),At(e)]),h([o(Sa,h([H("relative bottom-[1px] align-middle mr-2"),Ca("checkbox"),_a(e),Vt(e),um(Bd(e)),jd(c)]),P),mr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ui({cg:e,cs:i,cw:t,cA:Fd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ui({cg:e,cs:i,cw:t,cA:o(te,Qe,Ud(e)),cW:1,c1:c});default:var c=r.a;return o(I,P,h([o(I,h([o(de,"margin-bottom","6px")]),h([o(Ut,h([At(e)]),h([mr(e)]))])),o(Sa,h([Ca("color"),o(de,"width","100%"),o(de,"height","26px"),o(de,"padding","0px"),_a(e),Vt(e),Lo(function(l){return o(Ad,e,o(dm,Vd,cm(l)))}),Po(Wd(c))]),P)]))}}),pm=function(e){return o(I,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([H("text-lg pb-2")]),h([mr(e.fh)])),o(I,h([H("pl-2 pr-2")]),Dd(o(Bt,mm,e.av)))]))},bm=function(e){return o(I,h([H("text-xs text-white60")]),o(re,pm,e))},gm=function(e){return o(I,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([mr("clock: "+o(wl,3,vn(e).a4))]))},hm=function(e){e.a;var r=e.b.T;return o(ze,function(n){return Qe(60/(vn(e).a4-n))},o(ze,o(te,fs,function(n){return n.a4}),Co(o($l,59,r))))},_m=function(e){return o(I,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=hm(e);if(r.$===1)return h([mr("... Fps")]);var n=r.a;return h([mr(Fe(n)+" Fps")])}())},wm=function(e){return{$:0,a:e}},ym=function(e){var r=e.b.T;return jr(r)},xm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return jr(r)+1+jr(n)},Sm=function(e){return o(Sa,h([H("absolute w-full"),Ca("range"),Dl(Fe(0)),Ml(Fe(xm(e)-1)),Po(Fe(ym(e))),Bl(Fe(1)),Lo(o(te,ho,o(te,dr(42),o(te,Qe,wm))))]),P)},Vi={$:1},Cm={$:3},Lm={$:2},Al=function(e){return!e.b},Ei=$(function(e,r){return o(wo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),yo(e)]),h([mr("REC")]))}),Ri=$(function(e,r){return o(wo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),yo(r)]),h([o(I,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),Pm=function(e){var r=e.a,n=e.b.ab;return o(I,h([H("py-1")]),h([function(){switch(r.$){case 0:return o(Ei,Vi,"text-red-500 font-bold");case 1:return o(Ei,Lm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return Al(n)?o(I,P,P):o(Ri,en.fq,Cm);default:return o(Ri,en.fp,Vi)}}()]))},zm=function(e){return o(I,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([Sm(e),Pm(e),_m(e),gm(e)]))},km=function(e){var r=e.a;return wr(r,Ra)},Tm=$(function(e,r){var n=km(r.G)?o(I,P,P):o(I,h([H("absolute pointer-events-none w-8 h-8"),o(de,"left",ge(e.fs.fU+.5*e.cT.fS)+"px"),o(de,"top",ge(-e.fs.fY+.5*e.cT.eW)+"px")]),h([o(I,h([H(e.fs.e4?"text-black80":"text-black40")]),h([en.fs]))]));return o(I,P,h([n]))}),Mm=$(function(e,r){var n=o(wo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),yo(_d),Td("Distraction Free Mode")]),h([en.f0])),a=o(I,h([H("absolute w-8 bottom-12")]),h([o(Bi,h([H("text-twitterBlue40 hover:text-twitterBlue"),Ai("https://twitter.com/AzizErkalSelman"),Fi("_blank")]),h([en.fN]))])),t=o(I,h([H("absolute w-8 bottom-2")]),h([o(Bi,h([H("text-githubCat40 hover:text-githubCat"),Ai("https://github.com/erkal/elm-3d-playground-exploration"),Fi("_blank")]),h([en.eQ]))]));return r.aL?o(I,h([H("fixed w-10 h-10 p-1")]),h([n])):o(I,P,h([o(I,h([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(de,"height",ge(e.cT.eW-80)+"px")]),h([o(wa,wd,bm(vn(r.G).eA))])),o(I,h([H("absolute bottom-0 left-10 h-20"),o(de,"width",e.cT.fS>600?"600px":ge(e.cT.fS-40)+"px")]),h([o(wa,yd,zm(r.G))])),o(Tm,e,r)]))}),Dm=y(function(e,r,n){var a=bd(n.G),t=vn(n.G);return o(I,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(de,"width",ge(t.cT.fS)+"px"),o(de,"height",ge(t.cT.eW)+"px")]),h([o(I,h([H("fixed")]),h([o(wa,ol(md),o(e,t,a))])),o(I,h([_a("gui")]),h([o(Mm,t,n),o(wa,dd,o(r,t,a))]))]))}),Bm=Ee(function(e,r,n,a,t,i){var c=$(function(u,v){return k(L(vd,r,i,u,v),Di)}),l=function(u){var v=o(il,n,u.e1);return k({aL:u.e1.cT.fS<500,G:o($d,v,a)},Di)};return Ts({e0:l,fH:ol(sd(bs)),fO:c,fQ:o(Dm,e,t)})}),Am=V(function(e,r,n,a){return se(Bm,e,r,n,a,$(function(t,i){return o(I,P,P)}),y(function(t,i,c){return c}))}),Fm=function(e){return{}},Um=y(function(e,r,n){return{av:n,e5:r,fh:e}}),Fl=ir,Vm=function(e){return p(Bn,$(function(r,n){var a=r.a,t=r.b;return p(wn,a,t,n)}),Fl,e)},Em=y(function(e,r,n){return p(Um,e,r,Vm(n))}),Rm=Em,ji=y(function(e,r,n){var a=r.a,t=r.b;return k(e,o(dl,k(a,t),n))}),jm=h([p(Rm,"Parameters",!0,h([p(ji,"s",k(1,2),1.5),p(ji,"t",k(1,2),1.5)]))]),Nm=$(function(e,r){return r}),yr=mv,Et=function(e){return e*yr/180},Ym=L(Ir,114/255,159/255,207/255,1),Wm=hv,ur=Lv,Gm=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Me,J(c),o(Me,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=ur(s*s+v*v+u*u);return ne({fU:s/d,fY:v/d,c6:u/d})}else return q}),nt=function(e){return e},zo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),ta=function(e){var r=e,n=o(Me,J(r.fU),o(Me,J(r.fY),J(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=ur(i*i+t*t+a*a);return ne({fU:i/c,fY:t/c,c6:a/c})}else return q},La=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Hm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),Ul=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Im=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Om=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Jm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),qm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Ze=0,Vl={fU:0,fY:0,c6:0},Zm=y(function(e,r,n){return o(Ft,function(a){var t=o(Om,o(Jm,a,r),r);return o(Ft,function(i){var c=o(zo,r,e),l=o(Hm,n,c),u=o(Ul,Ze,l)?c:o(Im,Ze,l)?qm(c):Vl;return o(ze,function(v){return A(a,i,v)},ta(u))},ta(t))},ta(e))}),Qm=function(e){var r=e,n=J(r.c6),a=J(r.fY),t=J(r.fU);if(O(t,a)<1)if(O(t,n)<1){var i=ur(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=ur(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(O(a,n)<1){var i=ur(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=ur(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},ko=function(e){var r=Qm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return k(r,c)},Kr=function(e){var r=e;return r},Xe=function(e){return e},Xm=$(function(e,r){var n=ko(e),a=n.a,t=n.b;return Xe({cB:r,c4:a,c5:t,c7:e})}),Km=function(e){var r=o(La,e.aR,e.dj),n=Kr(e.ei),a=o(zo,r,n),t=p(Zm,r,n,a);if(t.$){var v=ta(r);if(v.$){var d=ko(e.ei),m=d.a,f=d.b;return Xe({cB:e.dj,c4:f,c5:e.ei,c7:m})}else{var s=v.a;return o(Xm,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Xe({cB:e.dj,c4:u,c5:l,c7:c})}},qe={fU:0,fY:0,c6:0},e0=function(e){return{$:0,a:e}},me=function(e){var r=e;return J(r)},oa=function(e){var r=e;return .5*r},r0=gv,n0=function(e){var r=e;return r0(r)},a0=function(e){var r=oa(me(e.ej)),n=n0(r);return{cM:e0(n),c2:e.c2}},$r=function(e){return e},To=$r({fU:0,fY:1,c6:0}),Yr=function(e){return e},t0=function(e){var r=e.aR,n=e.dj,a=e.ei;return a0({ej:Yr(2*Wm(.5)),c2:Km({dj:nt(n),aR:nt(r),ei:o(dr,To,o(Gm,qe,nt(a)))})})},Na=$(function(e,r){return{$:0,a:e,b:r}}),at=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),tt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),fr=$(function(e,r){var n=e,a=r;return a-n}),o0=$r({fU:-1,fY:0,c6:0}),i0=$r({fU:0,fY:-1,c6:0}),El=$r({fU:0,fY:0,c6:-1}),Rl=$r({fU:1,fY:0,c6:0}),Mo=$r({fU:0,fY:0,c6:1}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),c0=Ee(function(e,r,n,a,t,i){var c=o(at,n,i)?Mo:El,l=o(at,r,t)?To:i0,u=o(at,e,a)?Rl:o0,v=A(me(o(fr,e,a)),me(o(fr,r,t)),me(o(fr,n,i))),s=p(be,o(tt,e,a),o(tt,r,t),o(tt,n,i)),d=Xe({cB:s,c4:u,c5:l,c7:c});return{er:d,aK:v}}),Ur=function(e){var r=e;return r.fU},Vr=function(e){var r=e;return r.fY},Er=function(e){var r=e;return r.c6},l0=$(function(e,r){return se(c0,Ur(e),Vr(e),Er(e),Ur(r),Vr(r),Er(r))}),Rt=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),jl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Na,e,o(l0,p(Rt,-c,-l,-u),p(Rt,c,l,u)))}),u0=L(Ir,52/255,101/255,164/255,1),Ni=L(Ir,211/255,215/255,207/255,1),Ya=function(e){return{$:5,a:e}},Pa=function(e){return Ya(e)},jt=function(e){return{$:0,a:e}},Nl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Yl=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),ot=function(e){return p(Yl,0,1,e<=.04045?e/12.92:o(Nr,(e+.055)/1.055,2.4))},Un=ef,v0=function(e){var r=xo(e),n=r.cN,a=r.cd,t=r.b6;return p(Un,ot(n),ot(a),ot(t))},ia=function(e){return p(Nl,0,jt(v0(e)),jt(0))},Do=$(function(e,r){return{$:2,a:e,b:r}}),Bo=$(function(e,r){return{$:4,a:e,b:r}}),Ao=$(function(e,r){return{$:3,a:e,b:r}}),Fo=$(function(e,r){return{$:1,a:e,b:r}}),$0=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),f0=function(e){var r=e;return r},Wa=function(e){var r=e;return f0(r.er)},Ga=function(e){var r=e;return r.aK},Or=function(e){var r=e;return r.cB},Vn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Pr=function(e){var r=e;return r.c4},zr=function(e){var r=e;return r.c5},kr=function(e){var r=e;return r.c7},s0=$(function(e,r){return Xe({cB:o(Vn,e,Or(r)),c4:Pr(r),c5:zr(r),c7:kr(r)})}),d0=$(function(e,r){return{er:o(s0,e,Wa(r)),aK:Ga(r)}}),En=$(function(e,r){return{eH:r,cB:e}}),m0=$(function(e,r){var n=r;return o(En,o(Vn,e,n.cB),n.eH)}),p0=$(function(e,r){var n=r;return{k:o(m0,e,n.k),e9:n.e9,fu:n.fu}}),Uo=function(e){var r=e;return r},b0=function(e){return e},Vo=$(function(e,r){var n=Uo(r),a=n.a,t=n.b;return b0(k(e(a),e(t)))}),g0=$(function(e,r){return o(Vo,Vn(e),r)}),Ha=function(e){var r=e;return r.ey},Ia=function(e){var r=e;return r.fu},Eo=$(function(e,r){return{ey:r,fu:me(e)}}),h0=$(function(e,r){return o(Eo,Ia(r),o(Vn,e,Ha(r)))}),Ro=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),_0=$(function(e,r){return o(Ro,Vn(e),r)}),jo=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p($0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Na,s,o(d0,i,c));case 1:var s=r.a,l=r.b;return o(Fo,s,o(_0,i,l));case 3:var s=r.a,u=r.b;return o(Ao,s,o(h0,i,u));case 2:var s=r.a,v=r.b;return o(Do,s,o(p0,i,v));case 4:var s=r.a,d=r.b;return o(Bo,s,o(g0,i,d));default:var m=r.a;return Ya(o(re,jo(A(n,a,t)),m))}}),Br=function(e){return jo(A(0,e,0))},Wr=pv,on=bv,ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Wr(c),u=on(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,b=s.fY*u,g=l*b,w=d*b,x=b*b,_=1-2*(f+x),C=s.c6*u,T=l*C,N=2*(w-T),R=2*(w+T),E=d*C,j=2*(E+g),Y=2*(E-g),F=b*C,Z=2*(F-m),X=2*(F+m),ie=C*C,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+N*i.fY+j*i.c6,fY:R*i.fU+oe*i.fY+Z*i.c6,c6:Y*i.fU+X*i.fY+_*i.c6}}),Rn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Wr(c),u=on(c),v=a.cB,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,b=a.eH,g=b,w=g.fU*u,x=l*w,_=w*w,C=g.fY*u,T=l*C,N=w*C,R=C*C,E=1-2*(_+R),j=g.c6*u,Y=l*j,F=2*(N-Y),Z=2*(N+Y),X=w*j,ie=2*(X+T),ve=2*(X-T),oe=C*j,pe=2*(oe-x),De=2*(oe+x),Se=j*j,gr=1-2*(R+Se),hr=1-2*(_+Se);return{fU:s.fU+gr*d+F*m+ie*f,fY:s.fY+Z*d+hr*m+pe*f,c6:s.c6+ve*d+De*m+E*f}}),w0=y(function(e,r,n){return Xe({cB:p(Rn,e,r,Or(n)),c4:p(ca,e,r,Pr(n)),c5:p(ca,e,r,zr(n)),c7:p(ca,e,r,kr(n))})}),y0=y(function(e,r,n){return{er:p(w0,e,r,Wa(n)),aK:Ga(n)}}),x0=$(function(e,r){var n=o(Rn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(En,n(i.cB),a(i.eH))}}),S0=y(function(e,r,n){var a=n;return{k:p(x0,e,r,a.k),e9:a.e9,fu:a.fu}}),C0=y(function(e,r,n){return o(Vo,o(Rn,e,r),n)}),L0=y(function(e,r,n){return o(Eo,Ia(n),p(Rn,e,r,Ha(n)))}),P0=y(function(e,r,n){return o(Ro,o(Rn,e,r),n)}),No=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Na,l,p(y0,e,r,a));case 1:var l=n.a,t=n.b;return o(Fo,l,p(P0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ao,l,p(L0,e,r,i));case 2:var l=n.a,c=n.b;return o(Do,l,p(S0,e,r,c));case 4:var l=n.a,u=n.b;return o(Bo,l,p(C0,e,r,u));default:var v=n.a;return Ya(o(re,o(No,e,r),v))}}),Yo=To,z0=o(En,qe,Yo),za=$(function(e,r){return p(No,z0,Yr(e),r)}),K=$(function(e,r){var n=r;return e*n}),sr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},jn=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c6:a.c6+r*(t.c6-a.c6)}}),k0=y(function(e,r,n){var a=Wa(n),t=Pr(a),i=zr(a),c=kr(a),l=p(jn,e,r,Or(a)),u=r>=0?Xe({cB:l,c4:t,c5:i,c7:c}):Xe({cB:l,c4:sr(t),c5:sr(i),c7:sr(c)}),v=Ga(n),s=v.a,d=v.b,m=v.c,f=me(o(K,r,s)),b=me(o(K,r,d)),g=me(o(K,r,m));return{er:u,aK:A(f,b,g)}}),Wo=function(e){var r=e;return r.k},Wl=function(e){var r=e;return r.eH},Yi=function(e){return Wl(Wo(e))},Gl=function(e){var r=e;return r.cB},T0=function(e){return Gl(Wo(e))},Hl=function(e){var r=e;return r.e9},Il=function(e){var r=e;return r.fu},M0=y(function(e,r,n){var a=me(o(K,r,Il(n))),t=me(o(K,r,Hl(n))),i=r>=0?Yi(n):sr(Yi(n)),c=p(jn,e,r,T0(n));return{k:o(En,c,i),e9:t,fu:a}}),D0=y(function(e,r,n){return o(Vo,o(jn,e,r),n)}),B0=y(function(e,r,n){return o(Eo,o(K,J(r),Ia(n)),p(jn,e,r,Ha(n)))}),A0=y(function(e,r,n){return o(Ro,o(jn,e,r),n)}),Ar=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Na,c,p(k0,qe,e,n));case 1:var c=r.a,a=r.b;return o(Fo,c,p(A0,qe,e,a));case 3:var c=r.a,t=r.b;return o(Ao,c,p(B0,qe,e,t));case 2:var c=r.a,i=r.b;return o(Do,c,p(M0,qe,e,i));case 4:var c=r.a,l=r.b;return o(Bo,c,p(D0,qe,e,l));default:var u=r.a;return Ya(o(re,Ar(e),u))}}),F0=function(){var e=function(n){return o(Br,-1,o(jl,n,A(10,1,10)))},r=function(n){return Pa(h([e(n),o(za,Et(45),e(n))]))};return Pa(h([r(ia(Ni)),o(Br,-.1,o(Ar,1.1,r(ia(u0)))),o(Br,-.2,o(Ar,1.2,r(ia(Ni))))]))}(),U0=$(function(e,r){return o(ze,function(n){if(n.$)return 0;var a=n.b;return a},o(_o,e,r.av))}),V0=$(function(e,r){return o(dr,0,Co(o(So,U0(e),r)))}),E0=$(function(e,r){return o(V0,e,r.eA)}),Wi=E0,Gi=_v,R0=V(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Ir,f,m,d,a)}),j0=y(function(e,r,n){return L(R0,e,r,n,1)}),On=function(e){return jo(A(e,0,0))},Go=Mo,N0=o(En,qe,Go),Hi=$(function(e,r){return p(No,N0,Yr(e),r)}),Ol=$(function(e,r){return(r-al(r/e)*e)/e}),Y0=function(e){return 2*yr*e},it=V(function(e,r,n,a){return e+(r-e)*(1+Wr(Y0(o(Ol,n,a))))/2}),Nt=Ee(function(e,r,n,a,t,i){var c=function(f){return p(j0,L(it,f/6,1,10,e.a4),.6,.6)},l=$(function(f,b){return ur(o(Nr,f,2)+o(Nr,b,2))}),u=o(jl,ia(c(i)),A(r,n,n)),v=k(o(l,a,t),o(l,r-a,t)),s=v.a,d=v.b,m=i?h([o(Br,n/2,o(On,-(r/2),o(Ar,s/r,o(Hi,o(Gi,t,a),o(Br,n/2,o(On,r/2,o(za,L(it,-2,2,8,e.a4),o(Ar,.86,se(Nt,e,r,n,a,t,i-1))))))))),o(Br,n/2,o(On,r/2,o(Ar,d/r,o(Hi,-o(Gi,t,r-a),o(Br,n/2,o(On,-(r/2),o(za,L(it,2,-2,8,yr+e.a4),o(Ar,.86,se(Nt,e,r,n,a,t,i-1)))))))))]):P;return Pa(o(D,u,m))}),W0=$(function(e,r){return 360*o(Ol,e,r)}),G0=$(function(e,r){return h([o(za,o(W0,1e3,e.a4),Pa(h([F0,se(Nt,e,2,2,o(Wi,"s",e),o(Wi,"t",e),5)])))])}),H0=function(e){return e},Rr=function(e){return e},I0=function(e){return Rr(.01*e)},Ii=function(e){return e},O0=function(e){return e},J0=function(e){return{$:0,a:e}},q0=J0,Z0={$:3},Q0=Z0,X0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),K0=X0,ep=$(function(e,r){return r.b?p(br,D,r,e):e}),Ge=function(e){return p(br,ep,P,e)},Ho=$(function(e,r){return Ge(o(re,e,r))}),rp=function(e){return{$:1,a:e}},np=rp,ap=function(e){return o(Lr,"height",Fe(e))},tp=function(e){return y$(P$(e))},op=tp,ip=function(e){return{$:2,a:e}},cp=ip,lp=function(e){return o(Mr,"",e)},up=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return lp(h(["rgba(",ge(c(r)),"%,",ge(c(n)),"%,",ge(c(a)),"%,",ge(i(t)),")"]))},vp=$(function(e,r){switch(r.$){case 0:return o(Wf,e,r);case 1:return o(Gf,e,r);case 2:return o(Hf,e,r);case 3:return o(If,e,r);case 4:return o(Of,e,r);default:return o(Jf,e,r)}}),$p=$(function(e,r){switch(r.$){case 0:return o(hf,e,r);case 1:return o(_f,e,r);case 2:return o(wf,e,r);case 3:return o(yf,e,r);case 4:return o(xf,e,r);case 5:return o(Sf,e,r);case 6:return o(Cf,e,r);case 7:return o(Lf,e,r);default:return Pf(e)}}),fp=y(function(e,r,n){return p(Yf,e,r,n)}),Oi=function(e){var r=e;return r},$n=cf,ct=L($n,1,1,1,1),Ke=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),sp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),dp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(sp,n*a/t,n,n*(1-a-t)/t)}),mp=function(e){var r=e.a,n=e.b,a=e.c;return p(Un,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Io=$(function(e,r){return mp(o(dp,e,r))}),Jl=$(function(e,r){return{dp:wr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),nr=sf,pp=function(e){return nr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},lt=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=L($n,a.bY,a.bY,a.bY,i);return se(t,e,c,pp(a),a.dp,r,n)}),ql=Ee(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Jl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var b=t.b,g=o(D,S(lt,e,r,n,a,b),i.M);return{M:g,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(D,S(lt,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(D,S(lt,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Bn,L(ql,e,r,n,a),i,T)}}),bp=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Zl=bp,Oo=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),gp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Oo,518,r,n,a)},hp=$(function(e,r){return{$:6,a:e,b:r}}),_p=hp,Ql=h([gp({V:1,W:0,Z:!1}),L(Zl,!1,!1,!1,!1),o(_p,0,1)]),cn=519,Jo=8,Xl=15,rn=7681,wp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=gf,yp=$(function(e,r){return{$:0,a:e,b:r}}),xp=yp({df:1,$7:0,dV:5}),Ae=X$,Sp=xp(h([{bU:o(Ae,-1,-1)},{bU:o(Ae,1,-1)},{bU:o(Ae,-1,1)},{bU:o(Ae,1,1)}])),Cp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},Lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},qo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(Lp,a,t,i)))}),Zo=function(e){return p(qo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Qo=function(e){return S(ae,h([Zo(e),L(Zl,!1,!1,!1,!1)]),Cp,wp,Sp,{})},Pp=Qo({a9:rn,cp:0,cO:Jo,bm:cn,c3:Xl,bu:rn,bv:rn}),zp=516,Ji=5386,xe=7680,kp=function(e){return o(Nr,2,e+4)},Kl=function(e){return Qo({a9:xe,cp:Xl,cO:Jo,bm:zp,c3:kp(e),bu:Ji,bv:Ji})},Tp=y(function(e,r,n){return Ge(h([p(Ke,e,n,Ql),h([Kl(r),Pp])]))}),Mp=$(function(e,r){return Ge(o(Qc,Tp(e),r))}),Dp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Oo,513,r,n,a)},Bp=Dp({V:1,W:0,Z:!0}),Ap=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Fp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,b=v.b,g=v.c;return Ap(s)(d)(m)(f)(b)(g)(r)(n)(a)(t)});return o(l,i,c)},Up=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qi=$(function(e,r){var n=e,a=r;return p(Up,32774,n,a)}),Vp=1,Zi=771,Ep=770,Xo=Fp({bw:0,aH:o(qi,Vp,Zi),bz:0,bB:o(qi,Ep,Zi),bG:0,bW:0}),Jr=h([Bp,Xo]),Rp=function(e){var r=e;return r.dO},jp=function(e){var r=e;return r.dP},eu=function(e){var r=e;return r.dQ},Np=function(e){var r=e;return r.dR},Yp=function(e){var r=e;return r.dS},ru=function(e){var r=e;return r.dT},nu=function(e){return A(o(fr,Np(e),Rp(e)),o(fr,Yp(e),jp(e)),o(fr,ru(e),eu(e)))},Qi=function(e){var r=e;return Or(r)},Wp=function(e){return e},Gp=function(e){return Xe({cB:Wp({fU:e.H,fY:e.I,c6:e.J}),c4:$r({fU:e.q,fY:e.r,c6:e.s}),c5:$r({fU:e.t,fY:e.u,c6:e.v}),c7:$r({fU:e.w,fY:e.x,c6:e.y})})},ut=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),au=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,d=n.c5,m=d,f=n.c4,b=f;return{fU:c*b.fU+l*b.fY+u*b.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),tu=$(function(e,r){return{cB:o(au,e,Or(r)),c4:o(ut,e,Pr(r)),c5:o(ut,e,zr(r)),c7:o(ut,e,kr(r))}}),ka=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Me,n,a)}),la=$(function(e,r){return O(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(la,n,a)}),Hp=$(function(e,r){var n=ka(r),a=ka(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),He=function(e){var r=e;return r},Ip=function(e){var r=e;return A(r.fU,r.fY,r.c6)},xn=$(function(e,r){var n=e,a=r;return a+n}),Op=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=oa(me(a)),c=oa(me(n)),l=oa(me(t)),u=Ip(r),v=u.a,s=u.b,d=u.c;return{dO:o(xn,c,v),dP:o(xn,i,s),dQ:o(xn,l,d),dR:o(fr,c,v),dS:o(fr,i,s),dT:o(fr,l,d)}}),Xi=V(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,d=He(kr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c6),f=He(zr(e)),b=J(l*f.fU)+J(c*f.fY)+J(i*f.c6),g=He(Pr(e)),w=J(l*g.fU)+J(c*g.fY)+J(i*g.c6),x=o(Op,A(w,b,m),o(au,e,p(Rt,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(Hp,_,x))}),Yt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,b=r,g=n,w=i;e=f,r=b,n=g,a=w;continue e;case 1:var c=t.a,l=L(Xi,e,r,c,n),f=e,b=r,g=l,w=i;e=f,r=b,n=g,a=w;continue e;case 2:var f=e,b=r,g=n,w=i;e=f,r=b,n=g,a=w;continue e;case 3:var c=t.a,l=L(Xi,e,r,c,n),f=e,b=r,g=l,w=i;e=f,r=b,n=g,a=w;continue e;case 4:var u=t.a,f=e,b=r,g=L(Yt,e,r,n,u),w=i;e=f,r=b,n=g,a=w;continue e;default:var v=t.a,s=t.b,d=o(tu,Gp(v),e),m=r*v.bY,f=e,b=r,g=L(Yt,d,m,n,h([s])),w=i;e=f,r=b,n=g,a=w;continue e}}else return n}),fn=rf,sn=nf,dn=af,ou=function(e){return{$:4,a:e}},Jp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),Nn=function(e){return ou(o(Jp,e,P))},qp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Zp=function(e){var r=e;return r},Ki=Qo({a9:rn,cp:0,cO:Jo,bm:cn,c3:255,bu:rn,bv:rn}),Qp=function(e){var r=e,n=o(Me,J(r.fU),o(Me,J(r.fY),J(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=ur(i*i+t*t+a*a);return c*n}else return Ze},Pe={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},Ne=$(function(e,r){var n=e,a=r;return nr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),hn=k({be:o(Ne,Pe,Pe),bL:o(Ne,Pe,Pe),bM:o(Ne,Pe,Pe),bN:o(Ne,Pe,Pe)},L($n,0,0,0,0)),ec=function(e){var r=e;return-r},iu=514,cu=function(e){var r=e.Z,n=e.W,a=e.V;return L(Oo,515,r,n,a)},lu=240,Xp=h([cu({V:1,W:0,Z:!0}),Zo({a9:xe,cp:lu,cO:0,bm:iu,c3:0,bu:xe,bv:xe}),Xo]),Kp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=me(a),l=c,u=me(t),v=u,s=n.cM;if(s.$){var m=s.a;return kt(v)?nr({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):nr({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return kt(v)?nr({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):nr({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Jn=$(function(e,r){return(1&e>>r)===1?0:1}),e1=function(e){return h([cu({V:1,W:0,Z:!0}),Zo({a9:xe,cp:lu,cO:e,bm:iu,c3:0,bu:xe,bv:xe}),Xo])},r1=y(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=L($n,o(Jn,a,0),o(Jn,a,1),o(Jn,a,2),o(Jn,a,3));return p(Ke,e,k(r,i),e1(t))},o(an,1,o(Nr,2,n)-1)))}),nn=function(e){var r=e;return r},n1=df,rc=function(e){var r=e;return sr(kr(r))},uu=Rl,a1={cB:qe,c4:uu,c5:Yo,c7:Go},Oa=function(e){var r=e;return r},t1=function(e){var r=Oa(Or(e)),n=He(kr(e)),a=He(zr(e)),t=He(Pr(e));return nr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},o1=$(function(e,r){var n=r;return t1(o(tu,n,e))}),i1=function(e){return o(o1,a1,e)},c1=function(e){var r=e;return r.c2},l1=function(e){var r=e;return Pr(r)},u1=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),v1=function(e){var r=e;return zr(r)},$1=function(e){var r=c1(e.ev),n=Xe({cB:Qi(r),c4:l1(r),c5:v1(r),c7:sr(rc(r))}),a=Nn(e.aP),t=a,i=L(Yt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=i1(r),u=o(K,.99,o(ce,me(e.aJ),ec(eu(c)))),v=nu(c),s=v.a,d=v.b,m=v.c,f=Qp(p(u1,s,d,m)),b=o(K,1.01,o(xn,f,ec(ru(c)))),g=o(Kp,e.ev,{eq:e.eq,eP:b,fi:u}),w=n1(g).dM,x=w?He(sr(rc(r))):nn(Qi(r)),_=function(){var oe=e.b_;switch(oe.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var pe=oe.a;return k(3,pe);case 4:var pe=oe.a;return k(4,pe);default:return k(5,0)}}(),C=_.a,T=_.b,N=e.bE,R=N,E=o(Io,R,e.b0),j=E,Y=nr({dx:0,dy:x.fU,dz:fn(j),dA:e.ec,dB:0,dC:x.fY,dD:sn(j),dE:Zp(f),dF:0,dG:x.c6,dH:dn(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),F=se(ql,Y,l,g,qp,t,{M:P,U:P,fB:P}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return Ge(h([p(Ke,F.M,k(X,ct),Jr),p(Ke,F.U,hn,Jr)]));case 1:var X=Z.a;return Ge(h([p(Ke,F.M,hn,Jr),h([Ki]),p(Ke,F.fB,X.be,Ql),h([Kl(0)]),p(Ke,F.M,k(X,ct),Xp),p(Ke,F.U,hn,Jr)]));default:var ie=Z.a,ve=Z.b;return Ge(h([p(Ke,F.M,k(ve,ct),Jr),h([Ki]),o(Mp,F.fB,ie),p(r1,F.M,ve,jr(ie)),p(Ke,F.U,hn,Jr)]))}},f1=function(e){return o(Lr,"width",Fe(e))},s1=$(function(e,r){var n=h([np(1),cp(0),q0(!0),L(K0,0,0,0,0)]),a=function(){var C=e.b1;switch(C.$){case 0:return A(n,"0",1);case 1:return A(o(D,Q0,n),"1",1);default:var T=C.a;return A(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Oi(v),d=o(de,"height",Fe(s)+"px"),m=Oi(u),f=m/s,b=o(Ho,function(C){return $1({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bE:C.bE,bK:C.bK,ec:c,b_:C.b_,b0:C.b0})},r),g=o(de,"width",Fe(m)+"px"),w=e.aI,x=w,_=up(x);return p(op,"div",h([o(de,"padding","0px"),g,d]),h([k(i,p(fp,t,h([f1(Qe(m*c)),ap(Qe(s*c)),g,d,o(de,"display","block"),o(de,"background-color",_)]),b))]))}),d1=function(e){return o(s1,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},vu=function(e){return e},nc=vu({fU:.31271,fY:.32902}),m1=$(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Io,r.ce,r.b7),u=l;return{bz:dn(u),ex:n,bG:sn(u),cK:0,bW:fn(u),c_:1,fU:-t,fY:-i,c6:-c}}),p1=function(e){return e},b1=function(e){return p1(1.2*o(Nr,2,e))},vt=function(e){return e},g1={$:0},h1=g1,$u=function(e){return e},ac=function(e){var r=e;return r},_1=function(e){e:for(;;){if(wr(e.e2,Ze)&&wr(e.e3,Ze))return Pe;if(o(Ul,me(e.e2),me(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:sr(e.ei)};e=r;continue e}else{var n=J(ac(e.e3)/yr),a=J(ac(e.e2)/yr),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Io,$u(1),e.b7),v=u;return{bz:a*dn(v),ex:!1,bG:a*sn(v),cK:n/a,bW:a*fn(v),c_:3,fU:i,fY:c,c6:l}}}},tc=function(e){return _1({b7:e.b7,e2:e.ce,e3:Ze,ei:e.ei})},w1=function(e){var r=e;return r},fu=function(e){var r=p(Yl,1667,25e3,w1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return vu({fU:n,fY:a})},su=function(e){return e},y1=fu(su(12e3)),x1=fu(su(5600)),S1=function(e){return{$:2,a:e}},C1=function(e){return S1(e)},L1=$(function(e,r){return{$:2,a:e,b:r}}),du=function(e){return{$:0,a:e}},qn=function(e){var r=e;return r},P1=function(e){var r=e;return r.ex},z1=du(hn.a),k1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(D,a,i),c):k(i,o(D,a,c))});return p(br,n,k(P,P),r)}),T1=function(e){var r=e;return nr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},M1=ee(function(e,r,n,a,t,i,c,l){var u=o(k1,P1,h([qn(e),qn(r),qn(n),qn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,b=f.a,g=f.b,w=g.a,x=g.b,_=x.a;return o(L1,o(re,T1,v),{be:o(Ne,m,b),bL:o(Ne,w,_),bM:o(Ne,t,i),bN:o(Ne,c,l)})}else return z1}else return du({be:o(Ne,e,r),bL:o(Ne,n,a),bM:o(Ne,t,i),bN:o(Ne,c,l)})}),D1=y(function(e,r,n){return Aa(M1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),B1=function(e){var r=o(m1,O0(e.fB),{b7:x1,eH:e.fJ,ce:vt(8e4)}),n=tc({b7:y1,ce:vt(2e4),ei:e.ei}),a=tc({b7:nc,ce:vt(15e3),ei:sr(e.ei)}),t=p(D1,r,n,a);return d1({b1:C1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:b1(15),bK:t,b_:h1,b0:nc})},mu=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),A1=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),pu=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),bu=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),F1=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),U1=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),V1=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ko=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(V1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(mu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(A1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(pu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(U1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(bu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(F1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ei={$:0},E1=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ka(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),b=o(ce,s.dP,a),g=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=b,t=g,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),R1=y(function(e,r,n){var a=ka(e(r));return Aa(E1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),$t=$(function(e,r){var n=e,a=r;return O(a,n)<1}),gu=function(e){return o($t,e.dO,e.dR)&&o($t,e.dP,e.dS)&&o($t,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Tn=function(e){var r=e;return r},hu=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Ur(n),c=Vr(n),l=Er(n),u=Ur(a),v=Vr(a),s=Er(a),d=Ur(t),m=Vr(t),f=Er(t);return gu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},_u=tf,ke=function(e){return _u(Oa(e))},wu=function(e){var r=e;return r},Ja=function(e){return _u(wu(e))},j1=$(function(e,r){var n=e,a=r,t=o(Me,J(a.fU),o(Me,J(a.fY),J(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=ur(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Vl}),N1=j1($u(1)),yu=y(function(e,r,n){var a=o(La,r,n),t=o(La,e,r);return N1(o(zo,a,t))}),Y1=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Ja(p(yu,n,a,t));return A({o:i,bU:ke(n)},{o:i,bU:ke(a)},{o:i,bU:ke(t)})},W1=$(function(e,r){return{$:2,a:e,b:r}}),xu=W1({df:3,$7:0,dV:4}),G1=function(e){if(e.b){var r=e.a,n=e.b,a=xu(o(re,Y1,e)),t=p(R1,hu,r,n);return L(mu,t,e,a,0)}else return ei},je=y(function(e,r,n){return A(e,r,n)}),Su=function(){var e=Rr(1),r=Rr(1),n=Rr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),d=p(be,i,v,l),m=o(K,.5,n),f=p(be,m,t,a),b=p(be,m,v,a),g=p(be,m,t,l),w=p(be,m,v,l);return Ko(G1(h([p(je,c,b,f),p(je,c,s,b),p(je,u,g,w),p(je,u,w,d),p(je,f,b,w),p(je,f,w,g),p(je,c,d,s),p(je,c,u,d),p(je,c,f,g),p(je,c,g,u),p(je,s,w,b),p(je,s,d,w)])))}(),Zn={$:0},H1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),I1=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ja(p(yu,u,l,c)),s={o:v,bU:ke(u)},d={o:v,bU:ke(l)},m={o:v,bU:ke(c)};return o(D,s,o(D,d,o(D,m,n)))}),ri=function(e){var r=e;return r.D},O1=V(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),Wt=4294967295>>>32-Pn,Gt=cv,J1=y(function(e,r,n){e:for(;;){var a=Wt&r>>>e,t=o(Gt,a,n);if(t.$){var v=t.a;return o(Gt,Wt&r,v)}else{var i=t.a,c=e-Pn,l=r,u=i;e=c,r=l,n=u;continue e}}}),q1=function(e){return e>>>5<<5},Z1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,q1(n))>-1?ne(o(Gt,Wt&e,i)):ne(p(J1,a,e,t))}),ni=function(e){var r=e;return r.ah},ft=$(function(e,r){return o(Z1,e,ni(r))}),Q1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(O1,y(function(c,l,u){return A(c,l,u)}),o(ft,a,e),o(ft,t,e),o(ft,i,e))};return o(So,r,ri(e))},X1=y(function(e,r,n){e:for(;;){var a=o(so,Ve,e),t=a.a,i=a.b;if(O(Pt(t),Ve)<0)return o(tl,!0,{z:r,l:n,p:t});var c=i,l=o(D,nl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),ai=function(e){return e.b?p(X1,e,P,0):el},K1=y(function(e,r,n){return e(r(n))}),eb=$(function(e,r){return!o(ml,o(K1,Ms,e),r)}),rb=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(D,n,a):a}),P,r)}),nb=function(e){var r=e.a;return r},Cu=$(function(e,r){var n=nb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(eb,a,r)?{D:r,ah:e}:{D:o(rb,a,r),ah:e}}),ab=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Yn=ab({df:1,$7:3,dV:4}),ua=$(function(e,r){var n=nn(r),a=nn(e);return k(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),oc=p(Un,0,0,0),st=Ee(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(_o,o(ua,e,r),t);if(v.$){var d={o:oc,bU:ke(r)},m={o:oc,bU:ke(e)},f=u+1,b=u;return A(o(D,A(n,b,f),o(D,A(n,f,a),c)),o(D,d,o(D,m,l)),u+2)}else{var s=v.a;return A(o(D,A(n,s,a),c),l,u)}}),tb=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,b=a+1,g=a,w=e,x=r,_=v,C=a+3,T=se(st,s,m,f,g,r,se(st,d,s,b,f,r,se(st,m,d,g,b,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,R=N.a,E=N.b;return k(R,Ue(E))}}),ob=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,b=n+1,g=n,w=p(wn,o(ua,m,s),f,p(wn,o(ua,s,d),b,p(wn,o(ua,d,m),g,t))),x=o(D,A(g,b,f),a),_=e,C=v,T=n+3,N=x,R=w;e=_,r=C,n=T,a=N,t=R;continue e}else return A(a,t,n)}),Tr=y(function(e,r,n){var a=Q1(n),t=p(br,I1(r),P,a),i=S(ob,r,a,0,P,Fl),c=i.a,l=i.b,u=i.c,v=S(tb,r,l,a,0,A(c,P,u)),s=v.a,d=v.b,m=Al(d)?t:le(t,d);return p(H1,e,o(Cu,ai(m),s),o(Yn,m,s))}),Ht=function(e){return{D:o(re,function(r){return A(3*r,3*r+1,3*r+2)},o(an,0,jr(e)-1)),ah:ai(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Lu=function(e){switch(e.$){case 0:return Zn;case 1:var a=e.a,r=e.b,n=o(re,Tn,r);return p(Tr,a,Fr,Ht(n));case 2:var a=e.a,r=e.b,n=o(re,Tn,r);return p(Tr,a,Fr,Ht(n));case 3:var a=e.a,t=e.b;return p(Tr,a,Fr,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 8:return Zn;case 9:return Zn;default:return Zn}},ic=Lu(Su),Pu={$:0},z=Pu,he=$(function(e,r){return{$:1,a:e,b:r}}),ib={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},cb=1029,lb=function(e){return{$:5,a:e}},zu=function(e){var r=e;return lb(r)},ub=zu(cb),vb=1028,$b=zu(vb),Te=y(function(e,r,n){return r===1?e?o(D,ub,n):o(D,$b,n):n}),ku={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},dt=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Te,l,a,d),ku,ib,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),ti={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Tu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Te,l,a,d),Tu,ti,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Mu=$(function(e,r){return{$:3,a:e,b:r}}),fb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},Du={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sb=V(function(e,r,n,a){return o(Mu,n,ee(function(t,i,c,l,u,v,s,d){return S(ae,d,Du,fb,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),oi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Wn=function(e){var r=e;return r},qa=of,lr=_e(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Te,u,t,m),Tu,oi,a,{aN:o(qa,Wn(r),e),b:l,c,d:s,e:i,f:v})}))}),db={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},mb=_e(function(e,r,n,a,t){return o(Mu,a,ee(function(i,c,l,u,v,s,d,m){return S(ae,m,Du,db,t,{aN:o(qa,Wn(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Au={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qn=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),Au,Bu,n,{P:f,be:m.be,bL:m.bL,bM:m.bM,bN:m.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Fu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Uu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pb=Ee(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,m,f){var b=m.a,g=m.b;return S(ae,p(Te,v,i,f),Uu,Fu,t,{P:g,be:b.be,bL:b.bL,bM:b.bM,bN:b.bN,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Vu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},bb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(he,u,ee(function(d,m,f,b,g,w,x,_){var C=x.a,T=x.b;return S(ae,p(Te,b,s,_),Uu,Vu,v,{b5:e,b8:r,b9:i,ca:a,P:T,be:C.be,bL:C.bL,bM:C.bM,bN:C.bN,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:g})}))}}}}}}}}}}},Eu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Xn=Ee(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,m,f){var b=m.a,g=m.b;return S(ae,p(Te,v,i,f),Au,Eu,t,{b4:e,P:g,be:b.be,bL:b.bL,bM:b.bM,bN:b.bN,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),gb=function(e){return{$:0,a:e}},cc=$(function(e,r){return{$:1,a:e,b:r}}),Sn=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),hb=function(e){return L($n,fn(e),sn(e),dn(e),1)},ii=L($n,0,0,0,0),va=$(function(e,r){if(r.$){var a=r.a.C;return k(a,ii)}else{var n=r.a;return k(e,hb(n))}}),Ru=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(cc,k(t,ii),o(Sn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(cc,o(va,t,e),o(Sn,t,r))}else{var a=n.a.a;return n.b.a,gb(a)}}),_b=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Kn=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),wb=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yb=function(e){return o(Ae,e,1)},It=o(Ae,0,0),qr=$(function(e,r){if(r.$){var a=r.a.C;return k(a,It)}else{var n=r.a;return k(e,yb(n))}}),ju=V(function(e,r,n,a){var t=L(wb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Kn,k(u,ii),o(qr,u,r),o(qr,u,n),o(Sn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Kn,o(va,u,e),k(u,It),o(qr,u,n),o(Sn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Kn,o(va,u,e),o(qr,u,r),k(u,It),o(Sn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Kn,o(va,u,e),o(qr,u,r),o(qr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(_b,i,c,l)}}),xb={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},mt=_e(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Te,u,t,m),ku,xb,a,{b2:Wn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Nu={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Sb=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),Nu,Fu,n,{P:f,be:m.be,bL:m.bL,bM:m.bM,bN:m.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Cb=qt(function(e,r,n,a,t,i,c,l,u){return o(he,c,ee(function(v,s,d,m,f,b,g,w){var x=g.a,_=g.b;return S(ae,p(Te,m,u,w),Nu,Vu,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:d,c:s,aW:e,d:b,cS:n,e:v,a$:0,f})}))}),Mn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Lb=function(e){var r=e;return p(Mn,r.dR,r.dO,.5)},Pb=function(e){var r=e;return p(Mn,r.dS,r.dP,.5)},zb=function(e){var r=e;return p(Mn,r.dT,r.dQ,.5)},kb=function(e){return p(be,Lb(e),Pb(e),zb(e))},W=function(e){var r=nu(e),n=r.a,a=r.b,t=r.c;return{ey:Oa(kb(e)),eS:n/2,eT:a/2,eU:t/2}},ci=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(dt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(dt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(dt,l,W(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(sb,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(mt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(mt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(mt,l,v,W(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(mb,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Ru,s,R);if(d.$){var b=d.a,g=b.a;b.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(Sb,g,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(pb,g,x,_,W(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(Qn,m,W(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(Qn,m,W(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(Qn,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Qn,m,W(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var C=e.b,T=e.c,N=e.d,R=e.e,E=L(ju,C,T,N,R);if(E.$){var Z=E.a,X=Z.a,ie=Z.b,ve=E.b,oe=ve.a,pe=ve.b,De=E.c,Se=De.a,gr=De.b,hr=E.d,x=hr.a,_=hr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return nv(Cb,X,ie,oe,pe,Se,gr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return bb(X)(ie)(oe)(pe)(Se)(gr)(x)(_)(W(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=E.a,Y=E.b,F=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return se(Xn,j,Y,F,W(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return se(Xn,j,Y,F,W(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return se(Xn,j,Y,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Xn,j,Y,F,W(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),pt=function(e){var r=e;return r.fU},bt=function(e){var r=e;return r.fY},gt=function(e){var r=e;return r.c6},Tb=function(e){var r=e,n=gt(r.c7),a=bt(r.c7),t=pt(r.c7),i=gt(r.c5),c=bt(r.c5),l=pt(r.c5),u=gt(r.c4),v=bt(r.c4),s=pt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Mb=function(e){var r=Oa(Or(e)),n=He(kr(e)),a=He(zr(e)),t=He(Pr(e));return{dp:Tb(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Zr=$(function(e,r){return{$:5,a:e,b:r}}),Yu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Jl,a,e);return o(Zr,i,t);case 1:return o(Zr,e,n);case 3:return o(Zr,e,n);case 2:return o(Zr,e,n);default:return o(Zr,e,n)}}),Wu=$(function(e,r){return o(Yu,Mb(e),r)}),Za=function(e){return{$:2,a:e}},Db=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),Bb=uf,Ab=lf,lc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Ab(a),b=f.fU,g=f.fY,w=f.c6,x=f.em,_=Bb({em:x,fU:b*s,fY:g*d,c6:w*m});return Aa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ot=$(function(e,r){switch(r.$){case 0:return Pu;case 5:var n=r.a,a=r.b;return o(Zr,n,o(Ot,e,a));case 1:var t=r.a,i=r.b;return o(he,o(Db,e,t),o(lc,e,i));case 3:return r;case 2:var i=r.a;return Za(o(lc,e,i));default:var c=r.a;return ou(o(re,Ot(e),c))}}),li=$(function(e,r){var n=r;return o(Ot,e,n)}),ui={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Gu=7683,Hu=7682,Fb=p(qo,{cp:0,cO:0,c3:15},{a9:xe,bm:cn,bu:xe,bv:Gu},{a9:xe,bm:cn,bu:xe,bv:Hu}),Ub=p(qo,{cp:0,cO:0,c3:15},{a9:xe,bm:cn,bu:xe,bv:Hu},{a9:xe,bm:cn,bu:xe,bv:Gu}),vi=$(function(e,r){return e?o(D,Ub,r):o(D,Fb,r)}),Vb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},Eb=function(e){if(e.$){var r=e.c;return ne(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(vi,i,v),Vb,ui,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},Ta=function(e){var r=Eb(e);if(r.$)return z;var n=r.a;return Za(n)},Rb=V(function(e,r,n,a){var t=o(ci,n,Su),i=function(){var s=k(e,r);return s.a?s.b?Nn(h([t,Ta(ic)])):t:s.b?Ta(ic):z}(),c=Ga(a),l=c.a,u=c.b,v=c.c;return o(Wu,Wa(a),o(li,A(l,u,v),i))}),jb=$(function(e,r){return L(Rb,!0,!0,e,r)}),Iu=$(function(e,r){return{$:0,a:e,b:r}}),Nb=function(e){var r=xo(e),n=r.cN,a=r.cd,t=r.b6;return p(Un,n,a,t)},Yb=function(e){return o(Iu,0,jt(Nb(e)))},Cn=function(e){var r=e;return Wr(r)},Wb=$(function(e,r){var n=r;return n/e}),uc=function(e){var r=e;return{fU:Wr(r),fY:on(r)}},Gb=$(function(e,r){var n=e.bU,a=e.o;return o(D,{o:Ja(a),bU:ke(n)},r)}),Hb=Ba(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=dn(l.bU),s=sn(l.bU),d=fn(l.bU),m=o(la,e,d),f=o(Me,r,d),b=o(la,n,s),g=o(Me,a,s),w=o(la,t,v),x=o(Me,i,v),_=u;e=m,r=f,n=b,a=g,t=w,i=x,c=_;continue e}else return gu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Ou=$(function(e,r){var n=dn(e.bU),a=sn(e.bU),t=fn(e.bU);return Zt(Hb,t,t,a,a,n,n,r)}),Ib=function(e){var r=p(Ic,Gb,P,ni(e));if(r.b){var n=r.a,a=r.b,t=o(Yn,r,ri(e)),i=o(Ou,n,a);return L(pu,i,e,t,0)}else return ei},vc=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),Ma=function(e){var r=e;return on(r)},Jt=function(e){return Yr(2*yr*e)},Ob=Fr,$c=Ob({cB:qe,c4:uu,c5:Yo}),Ju=function(){var e=72,r=o(Wb,e,Jt(1)),n=Rr(1),a=Kr(Mo),t=Kr(El),i=Rr(1),c=o(K,.5,i),l=p(be,Ze,Ze,c),u=o(K,-.5,i),v=p(be,Ze,Ze,u),s=function(f){var b=o(K,f,r),g=Kr(o(vc,$c,uc(b))),w=o(K,Cn(b),n),x=o(K,Ma(b),n),_=p(be,w,x,c),C=p(be,w,x,u),T=o(ya,e,f+1),N=o(K,T,r),R=Kr(o(vc,$c,uc(N))),E=o(K,Cn(N),n),j=o(K,Ma(N),n),Y=p(be,E,j,u),F=p(be,E,j,c);return h([A({o:t,bU:v},{o:t,bU:Y},{o:t,bU:C}),A({o:g,bU:C},{o:R,bU:Y},{o:R,bU:F}),A({o:g,bU:C},{o:R,bU:F},{o:g,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:F})])},d=o(re,s,o(an,0,e-1)),m=Ht(Ge(d));return Ko(Ib(m))}(),fc=Lu(Ju),Jb=function(e){var r=Wl(e),n=ko(r),a=n.a,t=n.b;return Xe({cB:Gl(e),c4:a,c5:t,c7:r})},qb=V(function(e,r,n,a){var t=Jb(Wo(a)),i=o(ci,n,Ju),c=function(){var d=k(e,r);return d.a?d.b?Nn(h([i,Ta(fc)])):i:d.b?Ta(fc):z}(),l=Il(a),u=l,v=Hl(a),s=v;return o(Wu,t,o(li,A(u,u,s),c))}),Zb=$(function(e,r){return L(qb,!0,!0,e,r)}),sc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},dc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},_n=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=nn(a),l=nn(t);return nr({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},ea=xu(h([A({cZ:0},{cZ:1},{cZ:2})])),Qb=$(function(e,r){var n=hu(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(he,a,ee(function(_,C,T,N,R,E,j,Y){return S(ae,p(Te,N,0,Y),sc,ti,ea,{aw:t,b:T,c:C,d:E,e:_,br:_n(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(he,a,ee(function(_,C,T,N,R,E,j,Y){return S(ae,p(Te,N,0,Y),sc,oi,ea,{aN:o(qa,Wn(c),i),b:T,c:C,d:E,e:_,br:_n(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Ru,l,f);if(u.$)return z;var v=u.a;return o(he,a,ee(function(_,C,T,N,R,E,j,Y){var F=j.a,Z=j.b;return S(ae,p(Te,N,0,Y),dc,Bu,ea,{P:Z,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:T,c:C,d:E,e:_,br:_n(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,b=L(ju,s,d,m,f);if(b.$)return z;var g=b.a,w=b.b,x=b.c;return o(he,a,ee(function(_,C,T,N,R,E,j,Y){var F=j.a,Z=j.b;return S(ae,p(Te,N,0,Y),dc,Eu,ea,{b4:g,P:Z,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:x,b:T,c:C,d:E,cR:w,e:_,br:_n(r),f:R})}))}}),Xb=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Yn,e,r)}(),Kb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},mc=function(e){return Za(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(vi,t,u),Kb,ui,Xb,{b:a,c:n,d:c,e:r,bZ:l,br:_n(e),f:i})}))},e3=V(function(e,r,n,a){var t=o(Qb,n,a),i=k(e,r);return i.a?i.b?Nn(h([t,mc(a)])):t:i.b?mc(a):z}),r3=$(function(e,r){return L(e3,!0,!0,e,r)}),n3=$(function(e,r){var n=Er(r),a=Er(e),t=Vr(r),i=Vr(e),c=Ur(r),l=Ur(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),a3=function(e){var r=Uo(e),n=r.a,a=r.b;return o(n3,n,a)},pc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},t3=$(function(e,r){return{$:1,a:e,b:r}}),o3=t3({df:2,$7:0,dV:1}),bc=o3(h([k({dw:0},{dw:1})])),i3=$(function(e,r){var n=a3(r),a=W(n),t=Uo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(he,a,ee(function(v,s,d,m,f,b,g,w){return S(ae,w,pc,ti,bc,{aw:l,du:ke(c),dv:ke(i),b:d,c:s,d:b,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(he,a,ee(function(s,d,m,f,b,g,w,x){return S(ae,x,pc,oi,bc,{aN:o(qa,Wn(u),l),du:ke(c),dv:ke(i),b:m,c:d,d:g,e:s,f:b})}));case 2:return z;default:return z}}),c3=$(function(e,r){return o(i3,e,r)}),ra=function(e){return Yr(yr*(e/180))},gc=$(function(e,r){var n=e,a=r;return n/a}),l3=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(wr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),hc=$(function(e,r){return e<1?P:S(l3,0,e,e,r,P)}),u3=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(D,{o:Ja(a),bU:ke(n),L:o(Ae,c,l)},r)}),v3=function(e){var r=p(Ic,u3,P,ni(e));if(r.b){var n=r.a,a=r.b,t=o(Yn,r,ri(e)),i=o(Ou,n,a);return L(bu,i,e,t,0)}else return ei},qu=$(function(e,r){var n=e,a=r,t=Wr(a);return{fU:t*Wr(n),fY:t*on(n),c6:on(a)}}),$3=function(){var e=Rr(1),r=72,n=o(an,0,r-1),a=o(hc,r,o(Mn,Ze,Jt(1))),t=$o(r/2),i=o(an,0,t-1),c=o(hc,t,o(Mn,ra(90),ra(-90))),l=ai(Ge(o(re,function(s){return o(re,function(d){return{o:Kr(o(qu,s,d)),bU:p(be,o(K,Cn(d)*Cn(s),e),o(K,Cn(d)*Ma(s),e),o(K,Ma(d),e)),L:k(o(gc,s,Jt(1)),o(gc,o(xn,ra(90),d),ra(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(re,function(s){return Ge(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),b=o(u,s+1,d+1),g=o(u,s,d+1);return h([A(g,b,m),A(g,m,f)])},i))},n));return Ko(v3(o(Cu,l,v)))}(),Da=72,na=2*Da,f3=$(function(e,r){e:for(;;){var n=na+1,a=o(ya,na,2*e+3),t=o(ya,na,2*e+2),i=2*e+1,c=2*e,l=na,u=o(D,A(l,c,t),o(D,A(c,a,t),o(D,A(c,i,a),o(D,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),s3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),d3=$(function(e,r){e:for(;;){var n=p(s3,0,2*yr,e/Da),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),m3=function(){var e=o(d3,Da-1,h([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(f3,Da-1,P);return o(Yn,e,r)}(),p3={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},_c=function(e){return Za(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(vi,!0,u),p3,ui,m3,{aw:p(Un,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},b3=function(e){var r=wu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},g3=$(function(e,r){return o(Yu,b3(e),r)}),h3=V(function(e,r,n,a){var t=o(ci,n,$3),i=function(){var u=k(e,r);return u.a?u.b?Nn(h([t,_c()])):t:u.b?_c():z}(),c=Ia(a),l=c;return o(g3,o(La,qe,Ha(a)),o(li,A(l,l,l),i))}),_3=$(function(e,r){return L(h3,!0,!0,e,r)}),w3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),y3=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),x3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Iu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(w3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Nl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(y3,n,a,t,i,c)}},S3=x3,Zu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(jb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(r3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(_3,S3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Zb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(c3,Yb(c),l)]);default:var u=e.a;return o(Ho,Zu,u)}},C3=function(e){return o(Ho,Zu,e)},L3=$(function(e,r){return B1({aI:H0(e.es),ev:e.ev,aJ:I0(.5),cb:e.cb,aK:k(Ii(Qe(e.cT.fS)),Ii(Qe(e.cT.eW))),aP:C3(r),fB:!0,fJ:o(qu,Yr(e.fI),Yr(e.fK)),ei:Go})}),P3=$(function(e,r){return o(L3,{es:Ym,ev:t0({dj:{fU:0,fY:15,c6:18},aR:{fU:0,fY:4,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Et(135),fK:-Et(45)},o(G0,e,r))}),z3=L(Am,P3,Nm,jm,Fm);const k3={Main:{init:z3(o(B,function(e){return Be({e1:e})},o(M,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Be({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(d){return Be({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",ha(kn)))},o(M,"left",Q))},o(M,"pressedKeys",ha(kn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Be({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(B,function(r){return o(B,function(n){return Be({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(B,function(e){return o(B,function(r){return Be({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},U={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},T3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(U.keyboard.downs.push(f.code),U.keyboard.pressedKeys.push(f.code),r(f)&&(U.keyboard.control=!0),n(f)&&(U.keyboard.alt=!0),a(f)&&(U.keyboard.shift=!0),t(f)&&(U.keyboard.left=!0),i(f)&&(U.keyboard.right=!0),c(f)&&(U.keyboard.up=!0),l(f)&&(U.keyboard.down=!0))}),window.addEventListener("keyup",f=>{U.keyboard.pressedKeys=U.keyboard.pressedKeys.filter(b=>b!=f.code),r(f)&&(U.keyboard.control=!1,U.keyboard.pressedKeys=[]),n(f)&&(U.keyboard.alt=!1),a(f)&&(U.keyboard.shift=!1),t(f)&&(U.keyboard.left=!1),i(f)&&(U.keyboard.right=!1),c(f)&&(U.keyboard.up=!1),l(f)&&(U.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{U.pointer.x=-.5*U.screen.width+f.pageX,U.pointer.y=.5*U.screen.height-f.pageY,u(f)&&(U.pointer.down=!0,U.pointer.isDown=!0),v(f)&&(U.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{U.pointer.move=!0,U.pointer.x=-.5*U.screen.width+f.pageX,U.pointer.y=.5*U.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(U.pointer.up=!0,U.pointer.isDown=!1),v(f)&&(U.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(U.pointer.up=!0,U.pointer.isDown=!1),v(f)&&(U.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{U.wheel.deltaX=f.deltaX,U.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(U)}),window.addEventListener("focus",f=>{s(U)}),window.addEventListener("visibilitychange",f=>{s(U)}),window.addEventListener("resize",()=>{U.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const b=f/1e3,g=b-U.clock;g<.009||(U.dt=g,U.clock=b,e.ports.tick.send(U),d(U)),window.requestAnimationFrame(m)}},M3=()=>{ht("pointerdown"),ht("wheel"),ht("keydown")},ht=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},D3=k3.Main.init({node:document.querySelector("#app div"),flags:{inputs:U}});M3();T3(D3);
