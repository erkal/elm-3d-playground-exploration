(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function zr(e,r,n){return n.a=e,n.f=r,n}function $(e){return zr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return zr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return zr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return zr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return zr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return zr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return zr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Jt(e){return zr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function x(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function qt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ka(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function nv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var av=[];function tv(e){return e.length}var ov=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),iv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),cv=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var lv=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+uv()),r});function uv(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Pr(e,r){for(var n,a=[],t=mt(e,r,0,a);t&&(n=a.pop());t=mt(n.a,n.b,0,a));return t}function mt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=Si(e),r=Si(r));for(var t in e)if(!mt(e[t],r[t],n+1,a))return!1;return!0}$(Pr);$(function(e,r){return!Pr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var vv=$(function(e,r){var n=J(e,r);return n<0?Nc:n?Xf:jc}),Mn=0;function T(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function ce(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=lr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=lr(e.a,r);return n}var L={$:0};function lr(e,r){return{$:1,a:e,b:r}}var $v=$(lr);function g(e){for(var r=L,n=e.length;n--;)r=lr(e[n],r);return r}function Ma(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return g(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(x(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(Ma(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return g(Ma(r).sort(function(n,a){var t=o(e,n,a);return t===jc?0:t===Nc?-1:1}))});var sv=$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var dv=$(Math.pow);$(function(e,r){return r%e});var mv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),pv=Math.PI,gv=Math.cos,bv=Math.sin,hv=Math.tan,_v=Math.atan;$(Math.atan2);function yv(e){return e}function Sv(e){return e===1/0||e===-1/0}var Cv=Math.ceil,xv=Math.floor,wv=Math.round,Pv=Math.sqrt,li=Math.log,Lv=isNaN;function zv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Tv=$(function(e,r){return e+r});function kv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:re(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function Mv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Dv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Av=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Bv=$(function(e,r){return r.split(e)}),Vv=$(function(e,r){return r.join(e)}),Fv=S(function(e,r,n){return n.slice(e,r)});function Rv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Ev=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),jv=$(function(e,r){return r.indexOf(e)>-1}),Nv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Wv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function sc(e){return e+""}function Gv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:re(n==45?-r:r)}function Iv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?re(r):Y}function Hv(e){return Ma(e).join("")}function Uv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ov(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Jv(e){return{$:0,a:e}}function Yt(e){return{$:2,b:e}}var qv=Yt(function(e){return typeof e=="boolean"?$e(e):nr("a BOOL",e)}),Yv=Yt(function(e){return typeof e=="number"?$e(e):nr("a FLOAT",e)}),Zv=Yt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):nr("a STRING",e)});function Xv(e){return{$:3,b:e}}var Qv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Tr(e,r){return{$:9,f:e,g:r}}var Kv=$(function(e,r){return{$:10,b:r,h:e}}),e$=$(function(e,r){return Tr(e,[r])}),r$=S(function(e,r,n){return Tr(e,[r,n])});V(function(e,r,n,a){return Tr(e,[r,n,a])});ge(function(e,r,n,a,t){return Tr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return Tr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return Tr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Tr(e,[r,n,a,t,i,c,l])});Jt(function(e,r,n,a,t,i,c,l,u){return Tr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ie(e,n)}catch(a){return Se(o(co,"This is not valid JSON! "+a.message,r))}});var dc=$(function(e,r){return Ie(e,r)});function Ie(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):nr("null",r);case 3:return Wn(r)?ui(e.b,r,g):nr("a LIST",r);case 4:return Wn(r)?ui(e.b,r,n$):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var v=Ie(e.b,r[n]);return Qe(v)?v:Se(o(Ci,n,v.a));case 7:var a=e.e;if(!Wn(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ie(e.b,r[a]);return Qe(v)?v:Se(o(Wc,a,v.a));case 8:if(typeof r!="object"||r===null||Wn(r))return nr("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Ie(e.b,r[i]);if(!Qe(v))return Se(o(Ci,i,v.a));t=lr(T(i,v.a),t)}return $e(Me(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ie(l[u],r);if(!Qe(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ie(e.b,r);return Qe(v)?Ie(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=Ie(d.a,r);if(Qe(v))return v;s=lr(v.a,s)}return Se(Qf(Me(s)));case 1:return Se(o(co,e.a,r));case 0:return $e(e.a)}}function ui(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ie(e,r[i]);if(!Qe(c))return Se(o(Wc,i,c.a));t[i]=c.a}return $e(n(t))}function Wn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function n$(e){return o(gs,e.length,function(r){return e[r]})}function nr(e,r){return Se(o(co,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&vi(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return vi(e.g,r.g)}}function vi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var a$=$(function(e,r){return JSON.stringify(r,null,e)+""});function mc(e){return e}S(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function t$(e){return{$:1,a:e}}function hr(e){return{$:2,b:e,c:null}}var pt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function o$(e){return{$:5,b:e}}var i$=0;function Zt(e){var r={$:0,e:i$++,f:e,g:null,h:[]};return Xt(r),r}function pc(e){return hr(function(r){r(Rr(Zt(e)))})}function gc(e,r){e.h.push(r),Xt(e)}var c$=$(function(e,r){return hr(function(n){gc(e,r),n(Rr(Mn))})}),Ua=!1,$i=[];function Xt(e){if($i.push(e),!Ua){for(Ua=!0;e=$i.shift();)l$(e);Ua=!1}}function l$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Xt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return Qt(r,a,e.fi,e.f0,e.fV,function(){return function(){}})});function Qt(e,r,n,a,t,i){var c=o(dc,e,r?r.flags:void 0);Qe(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=u$(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),si(l,b.b,t(v))}return si(l,u.b,t(v)),d?{ports:d}:{}}var or={};function u$(e,r){var n;for(var a in or){var t=or[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=$$(t,r)}return n}function v$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function $$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(pt,l,o$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Zt(o(pt,l,e.b))}var f$=$(function(e,r){return hr(function(n){e.g(r),n(Rr(Mn))})});$(function(e,r){return o(c$,e.h,{$:0,a:r})});function bc(e){return function(r){return{$:1,k:e,l:r}}}function s$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var fi=[],Oa=!1;function si(e,r,n){if(fi.push({p:e,q:r,r:n}),!Oa){Oa=!0;for(var a;a=fi.shift();)d$(a.p,a.q,a.r);Oa=!1}}function d$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)gc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=m$(e,t,a,r.l);n[t]=p$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function m$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?or[r].e:or[r].f;return o(i,t,a)}function p$(e,r,n){return n=n||{i:L,j:L},e?n.i=lr(r,n.i):n.j=lr(r,n.j),n}function g$(e){or[e]&&nn(3)}$(function(e,r){return r});function b$(e,r){return g$(e),or[e]={f:h$,u:r,a:_$},bc(e)}var h$=$(function(e,r){return function(n){return e(r(n))}});function _$(e,r){var n=L,a=or[e].u,t=Rr(null);or[e].b=t,or[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(dc,a,c);Qe(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,dr=typeof document<"u"?document:{};function Kt(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Sr(e,function(){}),t),{}});function gt(e){return{$:0,a:e}}var hc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:eo(n),e:t,f:e,b:i}})}),Er=hc(void 0),y$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:eo(n),e:t,f:e,b:i}})}),S$=y$(void 0);function C$(e,r,n,a){return{$:3,d:eo(e),g:r,h:n,i:a}}var x$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return kr([e,r],function(){return e(r)})});S(function(e,r,n){return kr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return kr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return kr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return kr([e,r,n,a,t,i],function(){return x(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return kr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return kr([e,r,n,a,t,i,c,l],function(){return qt(e,r,n,a,t,i,c,l)})});Jt(function(e,r,n,a,t,i,c,l,u){return kr([e,r,n,a,t,i,c,l,u],function(){return ka(e,r,n,a,t,i,c,l,u)})});var _c=$(function(e,r){return{$:"a0",n:e,o:r}}),w$=$(function(e,r){return{$:"a1",n:e,o:r}}),yc=$(function(e,r){return{$:"a2",n:e,o:r}}),Mr=$(function(e,r){return{$:"a3",n:e,o:r}}),P$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function L$(e){return e=="script"?"p":e}function z$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(_c,r.n,T$(e,r.o)):r});function T$(e,r){var n=fo(r);return{$:r.$,a:n?p(bs,n<3?k$:M$,Ae(e),r.a):o($a,e,r.a)}}var k$=$(function(e,r){return T(e(r.a),r.b)}),M$=$(function(e,r){return{an:e(r.an),c3:r.c3,cT:r.cT}});function eo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?di(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?di(c,t,i):c[t]=i}return r}function di(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Sr(e,r){var n=e.$;if(n===5)return Sr(e.k||(e.k=e.m()),r);if(n===0)return dr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Sr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return bt(c,r,e.d),c}var c=e.f?dr.createElementNS(e.f,e.c):dr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),bt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Kt(c,Sr(n===1?l[u]:l[u].b,r));return c}function bt(e,r,n){for(var a in n){var t=n[a];a==="a1"?D$(e,t):a==="a0"?V$(e,r,t):a==="a3"?A$(e,t):a==="a4"?B$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function D$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function A$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function B$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function V$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=F$(r,i),e.addEventListener(t,c,ro&&{passive:fo(i)<2}),a[t]=c}}var ro;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ro=!0}}))}catch{}function F$(e,r){function n(a){var t=n.q,i=Ie(t.a,a);if(!!Qe(i)){for(var c=fo(t),l=i.a,u=c?c<3?l.a:l.an:l,v=c==1?l.b:c==3&&l.c3,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cT)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function R$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function Sc(e,r){var n=[];return Ke(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ke(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=U$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ke(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!E$(d,m):d!==m)&&_e(n,2,a,m),Ke(h,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:mi(e,r,n,a,j$);return;case 2:mi(e,r,n,a,N$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=no(e.d,r.d);y&&_e(n,4,a,y);var C=r.i(e.g,r.g);C&&_e(n,5,a,C);return}}}function E$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function mi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=no(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function no(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=no(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&R$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function j$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ke(s,i[v],n,++a),a+=s.b||0}}function N$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],y=h.a,C=b.a,_=h.b,P=b.b,B=void 0,G=void 0;if(y===C){f++,Ke(_,P,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var U=j.a,I=j.b;G=C===U}if(E){var R=E.a,Q=E.b;B=y===R}if(B&&G){f++,Ke(_,Q,t,f),fn(i,t,y,P,m,c),f+=_.b||0,f++,sn(i,t,y,I,f),f+=I.b||0,d+=2,m+=2;continue}if(B){f++,fn(i,t,C,P,m,c),Ke(_,Q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(G){f++,sn(i,t,y,_,f),f+=_.b||0,f++,Ke(I,P,t,f),f+=I.b||0,d+=2,m+=1;continue}if(j&&U===R){f++,sn(i,t,y,_,f),fn(i,t,C,P,m,c),f+=_.b||0,f++,Ke(I,Q,t,f),f+=I.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;sn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var te=te||[],b=u[m];fn(i,t,b.a,b.b,void 0,te),m++}(t.length>0||c.length>0||te)&&_e(n,8,a,{w:t,x:c,y:te})}var Cc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ke(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+Cc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ke(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}sn(e,r,n+Cc,a,t)}function xc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)xc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,y=0;y<h.length;y++){t++;var C=m===1?h[y]:h[y].b,_=t+(C.b||0);if(t<=u&&u<=_&&(a=dn(b[y],C,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function wc(e,r,n,a){return n.length===0?e:(xc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=W$(t,a);t===e&&(e=i)}return e}function W$(e,r){switch(r.$){case 0:return G$(e,r.s,r.u);case 4:return bt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Sr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return I$(e,r);case 5:return r.s(e);default:nn(10)}}function G$(e,r,n){var a=e.parentNode,t=Sr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function I$(e,r){var n=r.s,a=H$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Sr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Kt(e,a),e}function H$(e,r){if(!!e){for(var n=dr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Kt(n,i.c===2?i.s:Sr(i.z,r.u))}return n}}function ao(e){if(e.nodeType===3)return gt(e.textContent);if(e.nodeType!==1)return gt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=lr(o(Mr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=lr(ao(v[a]),u);return p(Er,l,r,u)}function U$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var O$=V(function(e,r,n,a){return Qt(r,a,e.fi,e.f0,e.fV,function(t,i){var c=e.f2,l=a.node,u=ao(l);return Pc(i,function(v){var s=c(v),d=Sc(u,s);l=wc(l,u,d,t),u=s})})});V(function(e,r,n,a){return Qt(r,a,e.fi,e.f0,e.fV,function(t,i){var c=e.c0&&e.c0(t),l=e.f2,u=dr.title,v=dr.body,s=ao(v);return Pc(i,function(d){ca=c;var m=l(d),f=Er("body")(L)(m.eM),h=Sc(s,f);v=wc(v,s,h,t),s=f,ca=0,u!==m.fZ&&(dr.title=u=m.fZ)})})});var ua=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Pc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(po,so,hr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(po,so,hr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(po,so,hr(function(){history.replaceState({},"",r),e()}))});var J$={addEventListener:function(){},removeEventListener:function(){}},q$=typeof window<"u"?window:J$;S(function(e,r,n){return pc(hr(function(a){function t(i){Zt(n(i))}return e.addEventListener(r,t,ro&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ie(e,r);return Qe(n)?re(n.a):Y});function Lc(e,r){return hr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):t$(_s(e)))})})}function Y$(e){return hr(function(r){ua(function(){r(Rr(e()))})})}$(function(e,r){return Lc(r,function(n){return n[e](),Mn})});$(function(e,r){return Y$(function(){return q$.scroll(e,r),Mn})});S(function(e,r,n){return Lc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Z$=$(function(e,r){var n="g";e.fv&&(n+="m"),e.eO&&(n+="i");try{return re(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var X$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):Y}a.push(w(yl,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):Y}return n(w(yl,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var Q$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/K$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function K$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var to=new Float64Array(3),pi=new Float64Array(3),gi=new Float64Array(3),ef=S(function(e,r,n){return new Float64Array([e,r,n])}),rf=function(e){return e[0]},nf=function(e){return e[1]},af=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var tf=function(e){return new Float64Array([e.f6,e.ga,e.de])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function zc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(zc);function Tc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(zc(e,r,n),n)}$(Tc);function kc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/kc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var of=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function ht(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(ht);$(function(e,r){var n,a=to,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var cf=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var lf=function(e){return{f6:e[0],ga:e[1],de:e[2],eE:e[3]}},uf=function(e){return new Float64Array([e.f6,e.ga,e.de,e.eE])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/vf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function vf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var $f=new Float64Array(16),ff=new Float64Array(16),sf=function(e){var r=new Float64Array(16);return r[0]=e.dM,r[1]=e.dQ,r[2]=e.dU,r[3]=e.dY,r[4]=e.dN,r[5]=e.dR,r[6]=e.dV,r[7]=e.dZ,r[8]=e.dO,r[9]=e.dS,r[10]=e.dW,r[11]=e.d_,r[12]=e.dP,r[13]=e.dT,r[14]=e.dX,r[15]=e.d$,r},df=function(e){return{dM:e[0],dQ:e[1],dU:e[2],dY:e[3],dN:e[4],dR:e[5],dV:e[6],dZ:e[7],dO:e[8],dS:e[9],dW:e[10],d_:e[11],dP:e[12],dT:e[13],dX:e[14],d$:e[15]}};function Mc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(Mc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Mc(c,l,i,t,n,a)});function Dc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(Dc);V(function(e,r,n,a){return Dc(e,r,n,a,-1,1)});function Ac(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],y=e[13],C=e[14],_=e[15],P=r[0],B=r[1],G=r[2],j=r[3],E=r[4],U=r[5],I=r[6],R=r[7],Q=r[8],te=r[9],xe=r[10],we=r[11],be=r[12],he=r[13],Ze=r[14],Xe=r[15];return n[0]=a*P+l*B+d*G+b*j,n[1]=t*P+u*B+m*G+y*j,n[2]=i*P+v*B+f*G+C*j,n[3]=c*P+s*B+h*G+_*j,n[4]=a*E+l*U+d*I+b*R,n[5]=t*E+u*U+m*I+y*R,n[6]=i*E+v*U+f*I+C*R,n[7]=c*E+s*U+h*I+_*R,n[8]=a*Q+l*te+d*xe+b*we,n[9]=t*Q+u*te+m*xe+y*we,n[10]=i*Q+v*te+f*xe+C*we,n[11]=c*Q+s*te+h*xe+_*we,n[12]=a*be+l*he+d*Ze+b*Xe,n[13]=t*be+u*he+m*Ze+y*Xe,n[14]=i*be+v*he+f*Ze+C*Xe,n[15]=c*be+s*he+h*Ze+_*Xe,n}$(Ac);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],y=r[1],C=r[2],_=r[4],P=r[5],B=r[6],G=r[8],j=r[9],E=r[10],U=r[12],I=r[13],R=r[14];return n[0]=a*b+c*y+v*C,n[1]=t*b+l*y+s*C,n[2]=i*b+u*y+d*C,n[3]=0,n[4]=a*_+c*P+v*B,n[5]=t*_+l*P+s*B,n[6]=i*_+u*P+d*B,n[7]=0,n[8]=a*G+c*j+v*E,n[9]=t*G+l*j+s*E,n[10]=i*G+u*j+d*E,n[11]=0,n[12]=a*U+c*I+v*R+m,n[13]=t*U+l*I+s*R+f,n[14]=i*U+u*I+d*R+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,to);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/kc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,y=c*l*v,C=i*i*v+u,_=h+f,P=b-m,B=h-f,G=c*c*v+u,j=y+d,E=b+m,U=y-d,I=l*l*v+u,R=n[0],Q=n[1],te=n[2],xe=n[3],we=n[4],be=n[5],he=n[6],Ze=n[7],Xe=n[8],Gr=n[9],Ir=n[10],Ha=n[11],Qu=n[12],Ku=n[13],ev=n[14],rv=n[15];return a[0]=R*C+we*_+Xe*P,a[1]=Q*C+be*_+Gr*P,a[2]=te*C+he*_+Ir*P,a[3]=xe*C+Ze*_+Ha*P,a[4]=R*B+we*G+Xe*j,a[5]=Q*B+be*G+Gr*j,a[6]=te*B+he*G+Ir*j,a[7]=xe*B+Ze*G+Ha*j,a[8]=R*E+we*U+Xe*I,a[9]=Q*E+be*U+Gr*I,a[10]=te*E+he*U+Ir*I,a[11]=xe*E+Ze*U+Ha*I,a[12]=Qu,a[13]=Ku,a[14]=ev,a[15]=rv,a});function mf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(mf);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function pf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(pf);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],y=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=y,n[11]=C,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+y*i+r[14],n[15]=v*a+f*t+C*i+r[15],n});S(function(e,r,n){var a=Tc(e,r,to),t=va(ht(n,a,pi),pi),i=va(ht(a,t,gi),gi),c=$f,l=ff;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Ac(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var bi=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function oo(e){for(var r=0;e.b;e=e.b)r++;return r}var gf=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},bf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),hf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),_f=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),yf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Sf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Cf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),wf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Pf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Lf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},zf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Tf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},kf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Bc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Vc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Mf=function(e){e.gl.disable(e.gl.CULL_FACE)},Df=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Af=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Bf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},hi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Vf=[zf,Tf,kf,Bc,Vc,Mf,Df,Af,Bf];function _i(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Ff(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Fc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Rf(e,r,n,a){for(var t=n.a.dq,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,y,C){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?y[C]:y[C][_];else i.forEach(function(P){for(_=0;_<h;_++)f[b++]=h===1?y[P][C]:y[P][C][_]})}var u=Fc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(oo(n.b)*s);xn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Ef(e,r){if(r.a.dA>0){var n=e.createBuffer(),a=jf(r.c,r.a.dA);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dq*oo(r.b),indexBuffer:null,buffers:{}}}function jf(e,r){var n=new Uint32Array(oo(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function yi(e,r){return e+"#"+r}var Rc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Bc(n),Vc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=yi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=bi++,v||(v=_i(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=bi++,s||(s=_i(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Ff(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Nf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=yi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Wf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Ef(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Rf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var y=Fc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,y.size,y.baseType,!1,0,0);else for(var C=y.size*4,_=C*y.arraySize,P=0;P<y.arraySize;P++)a.enableVertexAttribArray(h+P),a.vertexAttribPointer(h+P,y.size,y.baseType,!1,_,C*P)}for(n.toggle=!n.toggle,xn(Jp(n),i.a),u=0;u<hi.length;u++){var B=n[hi[u]];B.toggle!==n.toggle&&B.enabled&&(Vf[u](n),B.enabled=!1,B.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.d8,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d8,0,b.numIndices)}}return xn(t,e.g),r});function Nf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,y=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var C=c++;return function(_){e.activeTexture(e.TEXTURE0+C);var P=l.textures.get(_);P||(P=_.eV(e),l.textures.set(_,P)),e.bindTexture(e.TEXTURE_2D,P),i[b]!==_&&(e.uniform1i(y,C),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Wf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Gf=S(function(e,r,n){return C$(r,{g:n,f:{},h:e},Yf,Zf)}),If=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Hf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Uf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Of=$(function(e,r){e.contextAttributes.antialias=!0}),Jf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),qf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Yf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(Op,r,t)},e.h);var n=dr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),gf(function(){return o(Rc,e,n)})):(n=dr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Zf(e,r){return r.f=e.f,Rc(r)}var M=$v,Gn=lv,Ec=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Gn,e,l,v)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),io=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(io,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Si=function(e){return p(io,S(function(r,n,a){return o(M,T(r,n),a)}),L,e)},jc=1,Xf=2,Nc=0,Se=function(e){return{$:1,a:e}},co=$(function(e,r){return{$:3,a:e,b:r}}),Ci=$(function(e,r){return{$:0,a:e,b:r}}),Wc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Qf=function(e){return{$:2,a:e}},Kf=sv,re=function(e){return{$:0,a:e}},Y={$:1},es=Ev,rs=a$,Ve=sc,Ar=$(function(e,r){return o(Vv,e,Ma(r))}),lo=$(function(e,r){return g(o(Bv,e,r))}),Gc=function(e){return o(Ar,`
    `,o(lo,`
`,e))},Dn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Lr=function(e){return p(Dn,$(function(r,n){return n+1}),0,e)},ns=fv,as=S(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),Fr=$(function(e,r){return p(as,e,r,L)}),Ic=$(function(e,r){return p(ns,e,o(Fr,0,Lr(r)-1),r)}),ir=Uv,Hc=function(e){var r=ir(e);return 97<=r&&r<=122},Uc=function(e){var r=ir(e);return r<=90&&65<=r},ts=function(e){return Hc(e)||Uc(e)},os=function(e){var r=ir(e);return r<=57&&48<=r},is=function(e){return Hc(e)||Uc(e)||os(e)},Me=function(e){return p(Dn,M,L,e)},an=kv,cs=$(function(e,r){return`

(`+(Ve(e+1)+(") "+Gc(ls(r))))}),ls=function(e){return o(us,e,L)},us=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var y=b.a,C=y.a,_=y.b;return ts(C)&&o(es,is,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(M,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,v=o(M,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Ar,"",Me(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ve(Lr(s))+" ways:"));return o(Ar,`

`,o(M,h,o(Ic,cs,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Ar,"",Me(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Ar,"",Me(r))+`:

    `):`Problem with the given value:

`}();return h+(Gc(o(rs,4,f))+(`

`+m))}}),Fe=32,_t=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yt=av,uo=Cv,vo=$(function(e,r){return li(r)/li(e)}),vs=yv,wn=uo(o(vo,2,Fe)),Oc=w(_t,0,wn,yt,yt),Jc=ov,qc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var $s=xv,St=tv,De=$(function(e,r){return J(e,r)>0?e:r}),fs=function(e){return{$:0,a:e}},$o=iv,ss=$(function(e,r){e:for(;;){var n=o($o,Fe,e),a=n.a,t=n.b,i=o(M,fs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Me(i)}}),ds=function(e){var r=e.a;return r},ms=$(function(e,r){e:for(;;){var n=uo(r/Fe);if(n===1)return o($o,Fe,e).a;var a=o(ss,e,L),t=n;e=a,r=t;continue e}}),Yc=$(function(e,r){if(r.l){var n=r.l*Fe,a=$s(o(vo,Fe,n-1)),t=e?Me(r.y):r.y,i=o(ms,t,r.l);return w(_t,St(r.o)+n,o(De,5,a*wn),i,r.o)}else return w(_t,St(r.o),wn,yt,r.o)}),ps=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Yc,!1,{y:a,l:n/Fe|0,o:t});var i=qc(p(Jc,Fe,r,e)),c=e,l=r-Fe,u=n,v=o(M,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),gs=$(function(e,r){if(e<=0)return Oc;var n=e%Fe,a=p(Jc,n,e-n,r),t=e-n-Fe;return x(ps,r,t,e,L,a)}),Qe=function(e){return!e.$},D=Kv,Z=qv,k=Qv,fe=Yv,$a=e$,bs=r$,Ae=Jv,fo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},q=Er("div"),hs=function(e){return{$:2,a:e}},Zc=$(function(e,r){return e}),Xc=$(function(e,r){return{eS:r.eS,eT:e,ci:r.ci,dp:r.dp,dE:r.dE,bn:r.bn,b3:r.b3,f3:r.f3}}),mr=function(e){return e},_s=mr,xi=qe(function(e,r,n,a,t,i){return{dw:i,dy:r,ec:a,eg:n,ej:e,ek:t}}),ys=jv,Br=Mv,qr=Fv,An=$(function(e,r){return e<1?r:p(qr,e,Br(r),r)}),Da=Wv,Aa=function(e){return e===""},Ba=$(function(e,r){return e<1?"":p(qr,0,e,r)}),Qc=Gv,wi=ge(function(e,r,n,a,t){if(Aa(t)||o(ys,"@",t))return Y;var i=o(Da,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Qc(o(An,c+1,t));if(l.$===1)return Y;var u=l;return re(ye(xi,e,o(Ba,c,t),u,r,n,a))}else return re(ye(xi,e,t,Y,r,n,a))}),Pi=V(function(e,r,n,a){if(Aa(a))return Y;var t=o(Da,"/",a);if(t.b){var i=t.a;return x(wi,e,o(An,i,a),r,n,o(Ba,i,a))}else return x(wi,e,"/",r,n,a)}),Li=S(function(e,r,n){if(Aa(n))return Y;var a=o(Da,"?",n);if(a.b){var t=a.a;return w(Pi,e,re(o(An,t+1,n)),r,o(Ba,t,n))}else return w(Pi,e,Y,r,n)});$(function(e,r){if(Aa(r))return Y;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(Li,e,re(o(An,a+1,r)),o(Ba,a,r))}else return p(Li,e,Y,r)});var Ss=Nv,so=function(e){},Bn=Rr,Cs=Bn(0),Kc=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Dn,e,r,Me(d)):w(Kc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),_r=S(function(e,r,n){return w(Kc,e,r,0,n)}),ee=$(function(e,r){return p(_r,$(function(n,a){return o(M,e(n),a)}),L,r)}),fa=pt,mo=$(function(e,r){return o(fa,function(n){return Bn(e(n))},r)}),xs=S(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Bn(o(e,a,t))},n)},r)}),ws=function(e){return p(_r,xs(M),Bn(L),e)},Ps=f$,Ls=$(function(e,r){var n=r;return pc(o(fa,Ps(e),n))}),zs=S(function(e,r,n){return o(mo,function(a){return 0},ws(o(ee,Ls(e),r)))}),Ts=S(function(e,r,n){return Bn(0)}),ks=$(function(e,r){var n=r;return o(mo,e,n)});or.Task=v$(Cs,zs,Ts,ks);var Ms=bc("Task"),po=$(function(e,r){return Ms(o(mo,e,r))}),Ds=O$,As=zv,sa={$:1},el=function(e){return{$:2,a:e}},Va={$:0},Ue=$(function(e,r){return{$:0,a:e,b:r}}),oe=S(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.A;return r.a},Bs=function(e){var r=e.a,n=e.b.T,a=e.b.A,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return re(o(Ue,r,{A:i,ac:c,T:o(M,a,n)}))}else return Y},rl=function(e){var r=e.b;return o(Ue,Va,r)},Ee=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Vs=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bn.$7?rl(n):n;case 2:var i=a.a.c4;return(J(i+r.dp,tn(n).eS)>0?o(oe,Bs,Ee(o(Ue,sa,t))):mr)(o(Ue,el({c4:i+r.dp}),t));default:var c=t.A,l=c.a,u=c.b,v=o(Xc,l.eT,ce(r,{eS:l.eS+r.dp})),s=o(e,v,u);return o(Ue,Va,{A:T(v,s),ac:L,T:o(M,t.A,t.T)})}}),nl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Fs=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(M,a,n);e=i,r=c,n=l;continue e}else return n}}),Rs=$(function(e,r){return Me(p(Fs,e,r,L))}),al=S(function(e,r,n){if(r<=0)return L;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,y=h.b;return e>1e3?o(M,_,o(M,c,o(M,s,o(M,b,o(Rs,r-4,y))))):o(M,_,o(M,c,o(M,s,o(M,b,p(al,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var C=a.b,_=C.a;return g([_])}}),go=$(function(e,r){return p(al,0,e,r)}),Es=$(function(e,r){var n=r.b.T,a=r.b.A,t=r.b.ac,i=ve(Me(n),ve(g([a]),t)),c=o(go,e,i),l=o(nl,e,i);if(l.b){var u=l.a,v=l.b;return o(Ue,sa,{A:u,ac:v,T:Me(c)})}else{var s=Me(c);if(s.b){var d=s.a,m=s.b;return o(Ue,sa,{A:d,ac:L,T:m})}else return r}}),js=function(e){var r=e.b;return o(Ue,sa,r)},Ns=function(e){var r=e.b;return o(Ue,el({c4:tn(e).eS}),r)},Ws=$(function(e,r){switch(e.$){case 1:return js(r);case 2:return rl(r);case 3:return Ns(r);default:var n=e.a;return o(Es,n,r)}}),tl=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Gs=$(function(e,r){return ce(r,{ax:e(r.ax)})}),Is=function(e){return{$:3,a:e}},Hs=function(e){return{$:2,a:e}},Us=$(function(e,r){return{$:0,a:e,b:r}}),Os=$(function(e,r){return{$:1,a:e,b:r}}),pe=$(function(e,r){if(r.$)return Y;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},bo=Iv,Js=S(function(e,r,n){return o(Ee,0/0,bo(o(e,r,n)))}),ol=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),qs=Av,il=function(e){return p(qs,M,L,e)},Ys=$(function(e,r){var n=o(ol,function(a){return a!=="0"&&a!=="."},il(r));return ve(e&&n?"-":"",r)}),ie=sc,Ct=Tv,cl=Ov,ll=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(Ct,"0",ll(t))}else{var i=ir(r);return i>=48&&i<57?o(Ct,cl(i+1),n):"0"}},xt=Sv,Zs=Lv,Fa=function(e){return o(Ct,e,"")},ul=S(function(e,r,n){return e<=0?n:p(ul,e>>1,ve(r,r),e&1?ve(n,r):n)}),Pn=$(function(e,r){return p(ul,e,r,"")}),wt=S(function(e,r,n){return ve(n,o(Pn,e-Br(n),Fa(r)))}),Pt=Dv,vl=function(e){var r=o(lo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Xs=function(e){var r=o(lo,"e",ie(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Ee,0,Qc(o(Ss,"+",t)?o(An,1,t):t)),c=vl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(Ee,"0",o(pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(pe,tl(Fa),an(ve(o(Pn,O(i),"0"),v))))):p(wt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Qs=S(function(e,r,n){if(xt(n)||Zs(n))return ie(n);var a=n<0,t=vl(Xs(O(n))),i=t.a,c=t.b,l=Br(i)+r,u=ve(o(Pn,-l+1,"0"),p(wt,l,"0",ve(i,c))),v=Br(u),s=o(De,1,l),d=o(e,a,p(qr,s,v,u)),m=p(qr,0,s,u),f=d?Pt(o(Ee,"1",o(pe,ll,an(Pt(m))))):m,h=Br(f),b=f==="0"?f:r<=0?ve(f,o(Pn,O(r),"0")):J(r,Br(c))<0?p(qr,0,h-r,f)+("."+p(qr,h-r,h,f)):ve(i+".",p(wt,r,"0",c));return o(Ys,a,b)}),$l=Qs($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ir(t))})),Ks=Js($l),ed=S(function(e,r,n){var a=o(vo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ks,t,n)}),fl=vv,sl=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(fl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ur={$:-2},Qr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return x(W,0,r,n,x(W,1,v,s,d,m),x(W,1,i,c,l,u))}else return x(W,e,i,c,x(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,y=f.d,C=f.e,m=a.e;return x(W,0,v,s,x(W,1,h,b,y,C),x(W,1,r,n,m,t))}else return x(W,e,r,n,a,t)}),Lt=S(function(e,r,n){if(n.$===-2)return x(W,0,e,r,ur,ur);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(fl,e,t);switch(u){case 0:return x(Qr,a,t,i,p(Lt,e,r,c),l);case 1:return x(W,a,t,r,c,l);default:return x(Qr,a,t,i,c,p(Lt,e,r,l))}}),Kn=S(function(e,r,n){var a=p(Lt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return x(W,1,t,i,c,l)}else{var u=a;return u}}),rd=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},dl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,y=m.e,C=v.e;return x(W,0,f,h,x(W,1,n,a,x(W,0,i,c,l,u),b),x(W,1,s,d,y,C))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,P=e.e;P.a;var s=P.b,d=P.c,m=P.d,C=P.e;return x(W,1,n,a,x(W,0,i,c,l,u),x(W,0,s,d,m,C))}else return e},zi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,y=f.d,C=f.e;return x(W,0,i,c,x(W,1,u,v,s,d),x(W,1,n,a,m,x(W,0,h,b,y,C)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,P=_.d,m=_.e,B=e.e;B.a;var h=B.b,b=B.c,y=B.d,C=B.e;return x(W,1,n,a,x(W,0,i,c,P,m),x(W,0,h,b,y,C))}else return e},nd=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return x(W,n,l,u,v,x(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,zi(r)}else break e;else return c.a,c.d,zi(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,x(W,r,n,a,ea(t),l);var u=dl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return x(Qr,v,s,d,ea(m),f)}else return ur}else return x(W,r,n,a,ea(t),l)}else return ur},hn=$(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,x(W,n,a,t,o(hn,e,i),c);var u=dl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return x(Qr,v,s,d,o(hn,e,m),f)}else return ur}else return x(W,n,a,t,o(hn,e,i),c);else return o(ad,e,qt(nd,e,r,n,a,t,i,c))}),ad=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Pr(e,a)){var l=rd(c);if(l.$===-1){var u=l.b,v=l.c;return x(Qr,n,u,v,i,ea(c))}else return ur}else return x(Qr,n,a,t,i,o(hn,e,c))}else return ur}),td=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return x(W,1,a,t,i,c)}else{var l=n;return l}}),In=S(function(e,r,n){var a=r(o(sl,e,n));if(a.$)return o(td,e,n);var t=a.a;return p(Kn,e,t,n)}),od=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(In,r,pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Os,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(In,r,pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Us,T(i,c),p(ed,i,c,n))}));case 3:var r=e.a,n=e.b;return o(In,r,pe(function(a){return a.$===3?Is(n):a}));default:var r=e.a,n=e.b;return o(In,r,pe(function(a){return a.$===2?Hs(n):a}))}},id=function(e){return Gs(od(e))},cd=$(function(e,r){return o(ee,id(e),r)}),ld=$(function(e,r){return ce(r,{eT:o(cd,e,r.eT)})}),ud=$(function(e,r){var n=r.a,a=r.b;return o(Ue,n,ce(a,{A:o(tl,ld(e),a.A)}))}),vd=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),$d=S(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ue,a,ce(t,{A:o(vd,o(e,i.a,r),i)}))}),fd=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ce(a,{aO:!a.aO});case 2:var t=n.a;return ce(a,{G:p(Vs,e,t,a.G)});case 3:var i=n.a;return ce(a,{G:o(ud,i,a.G)});case 4:var c=n.a;return ce(a,{G:p($d,r,c,a.G)});default:var l=n.a;return ce(a,{G:o(Ws,l,a.G)})}}),sd=$(function(e,r){return o(Ue,Va,{A:T(e,r(e)),ac:L,T:L})}),dd=s$,Ti=dd(L),da=Xv,Ln=Zv,md=b$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f3:e})},o(k,"clock",fe))},o(k,"devicePixelRatio",fe))},o(k,"dt",fe))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ae({eG:d,eU:s,$7:v,e$:u,dF:l,fI:c,eo:i,fQ:t,ez:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",da(Ln)))},o(k,"left",Z))},o(k,"pressedKeys",da(Ln)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ae({$7:v,dB:u,fs:l,fM:c,fN:i,ez:t,f6:a,ga:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",fe))},o(k,"y",fe))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Ae({fc:n,f4:r})},o(k,"height",fe))},o(k,"width",fe))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Ae({eX:r,eY:e})},o(k,"deltaX",fe))},o(k,"deltaY",fe))))),pd=function(e){return{$:4,a:e}},gd={$:0},bd=mc,Ye=$(function(e,r){return o(yc,e,bd(r))}),H=Ye("className"),hd=function(e){var r=e.b.A;return r.b},ma=Ye("id"),_d=x$,pa=_d,yd=w$,ne=yd,Sd={$:1},Cd=function(e){return{$:3,a:e}},xd=function(e){return{$:5,a:e}},ki=Er("a"),ho=Er("button"),Mi=function(e){return o(Ye,"href",z$(e))},wd=Mr("clip-rule"),Pe=Mr("d"),Pd=Mr("fill"),ml=hc("http://www.w3.org/2000/svg"),Ld=ml("svg"),zd=Mr("viewBox"),Td=o(P$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ne=Ld(g([zd("0 0 24 24"),Pd("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),Td("http://www.w3.org/2000/svg")])),kd=Mr("fill-rule"),Le=ml("path"),Vr={eW:Ne(g([o(Le,g([Pe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),L)])),e6:Ne(g([o(Le,g([Pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),L)])),fb:Ne(g([o(Le,g([Pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),L)])),ft:Ne(g([o(Le,g([Pe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),L),o(Le,g([Pe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),L)])),fu:Ne(g([o(Le,g([Pe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),L),o(Le,g([Pe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),L)])),fF:Ne(g([o(Le,g([Pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),L)])),fG:Ne(g([o(Le,g([Pe("M7 5V19L18 12L7 5Z")]),L)])),fH:Ne(g([o(Le,g([Pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),L)])),bn:Ne(g([o(Le,g([Pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),L)])),f_:Ne(g([o(Le,g([kd("evenodd"),wd("evenodd"),Pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),L)])),f$:Ne(g([o(Le,g([Pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),L)])),ge:Ne(g([o(Le,g([Pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),L)]))},Md=function(e){return{$:0,a:e}},pl=_c,gl=$(function(e,r){return o(pl,e,Md(r))}),_o=function(e){return o(gl,"click",Ae(e))},Di=Ye("target"),Dd=Ye("title"),zt=$(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return x(W,n,a,o(e,a,t),o(zt,e,i),o(zt,e,c))}),Ad=gt,vr=Ad,Bd=function(e){return p(io,S(function(r,n,a){return o(M,n,a)}),L,e)},Vd=$(function(e,r){return{$:3,a:e,b:r}}),Fd=$(function(e,r){return{$:2,a:e,b:r}}),Rd=$(function(e,r){return{$:0,a:e,b:r}}),Ed=$(function(e,r){return{$:1,a:e,b:r}}),er=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),jd=w(er,0/255,0/255,0/255,1),Nd=mc,bl=$(function(e,r){return o(yc,e,Nd(r))}),Wd=bl("checked"),je=wv,Gd=S(function(e,r,n){return ve(o(Pn,e-Br(n),Fa(r)),n)}),Kr=mv,hl=function(e){var r=function(n){return n<10?Ve(n):Fa(cl(87+n))};return e<16?r(e):ve(hl(e/16|0),r(o(Kr,16,e)))},Id=o(oe,hl,o(Gd,2,"0")),yo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aK:t,cd:a,ck:n,cV:r}},Hd=function(e){var r=yo(e),n=r.cV,a=r.ck,t=r.cd;return o(Ar,"",o(M,"#",o(ee,o(oe,je,Id),g([n*255,a*255,t*255]))))},Tt=Ye("htmlFor"),kt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return e(n)}}),Ud=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(M,t,n)}),_l=$(function(e,r){return p(_r,Ud(e),L,r)}),yl=V(function(e,r,n,a){return{fh:r,fq:e,fA:n,fU:a}}),Od=X$,Jd=Hv,qd=$(function(e,r){if(r.$)return Se(e);var n=r.a;return $e(n)}),Yd=Z$,Zd=function(e){return o(Yd,{eO:!1,fv:!1},e)},ba=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return Y},Xd=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return $e(e(n))}}),Qd=function(e){return{$:2,a:e}},Kd=function(e){return{$:0,a:e}},em=function(e){return{$:1,a:e}},Ja=$(function(e,r){return ir(r)-ir(e)}),qa=S(function(e,r,n){var a=ir(n);return J(ir(e),a)<1&&J(a,ir(r))<1}),rm=$(function(e,r){var n=function(t){return J(t,e)<0?$e(t):Se(em(r))},a=p(qa,"0","9",r)?$e(o(Ja,"0",r)):p(qa,"a","z",r)?$e(10+o(Ja,"a",r)):p(qa,"A","Z",r)?$e(10+o(Ja,"A",r)):Se(Kd(r));return o(ga,n,a)}),Sl=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return $e(c+l*e)},o(Sl,e,i))},o(rm,e,t))}),nm=$(function(e,r){return 2<=e&&e<=36?o(Sl,e,Pt(r)):Se(Qd(e))}),am=nm(16),tm=S(function(e,r,n){return w(er,e,r,n,1)}),om=V(function(e,r,n,a){return w(er,e,r,n,a)}),Vn=dv,im=$(function(e,r){var n=o(Vn,10,e);return je(r*n)/n}),cm=Rv,lm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=il(n);if(a.b&&!a.b.b){var t=a.a;return Jd(g([t,t]))}else return n};return o(oe,cm,o(oe,function(n){return o(pe,function(a){return p(Od,1,a,n)},Zd(e))},o(oe,kt(ba),o(oe,pe(function(n){return n.fU}),o(oe,pe(_l(mr)),o(oe,qd("Parsing hex regex failed"),ga(function(n){var a=o(ee,o(oe,r,o(oe,am,Xd(vs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(w(om,t/255,c/255,u/255,o(im,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(tm,t/255,c/255,u/255))}else break e;return Se("Parsing ints from hex failed")})))))))}(),ha=Er("input"),Mt=Er("label"),Dt=Ye("name"),Cl=$(function(e,r){return p(_r,k,r,e)}),um=o(Cl,g(["target","checked"]),Z),vm=function(e){return o(gl,"change",o($a,e,um))},$m=function(e){return T(e,!0)},fm=function(e){return{$:1,a:e}},sm=$(function(e,r){return o(pl,e,fm(r))}),dm=o(Cl,g(["target","value"]),Ln),So=function(e){return o(sm,"input",o($a,$m,o($a,e,dm)))},xl=Ye("max"),wl=Ye("min"),Pl=function(e){return o(Ye,"step",e)},_a=Ye("type"),Co=Ye("value"),Ai=function(e){var r=e.cn,n=e.c9,a=e.cD,t=e.cz,i=e.c2,c=e.cH;return o(q,L,g([o(Mt,g([Tt(r)]),g([o(q,g([H("relative w-full")]),g([o(q,g([H("inline-block")]),g([vr(r)])),o(q,g([H("inline-block float-right")]),g([vr(ie(n))]))]))])),o(ha,g([_a("range"),o(ne,"width","100%"),ma(r),Dt(r),wl(ie(a)),xl(ie(t)),Co(ie(n)),Pl(ie(i)),So(o(oe,bo,o(oe,Ee(42),c)))]),L)]))},mm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),pm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(q,g([H("h-12 py-4")]),g([o(Mt,g([H("block"),Tt(e)]),g([o(ha,g([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),Dt(e),vm(Vd(e)),Wd(c)]),L),vr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ai({cn:e,cz:i,cD:t,cH:Rd(e),c2:.01*(i-t),c9:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ai({cn:e,cz:i,cD:t,cH:o(oe,je,Ed(e)),c2:1,c9:c});default:var c=r.a;return o(q,L,g([o(q,g([o(ne,"margin-bottom","6px")]),g([o(Mt,g([Tt(e)]),g([vr(e)]))])),o(ha,g([_a("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),ma(e),Dt(e),So(function(l){return o(Fd,e,o(mm,jd,lm(l)))}),Co(Hd(c))]),L)]))}}),gm=function(e){return o(q,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(q,g([H("text-lg pb-2")]),g([vr(e.fw)])),o(q,g([H("pl-2 pr-2")]),Bd(o(zt,pm,e.ax)))]))},bm=function(e){return o(q,g([H("text-xs text-white60")]),o(ee,gm,e))},hm=function(e){return o(q,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([vr("clock: "+o($l,3,tn(e).eS))]))},_m=function(e){e.a;var r=e.b.T;return o(pe,function(n){return je(60/(tn(e).eS-n))},o(pe,o(oe,ds,function(n){return n.eS}),ba(o(nl,59,r))))},ym=function(e){return o(q,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=_m(e);if(r.$===1)return g([vr("... Fps")]);var n=r.a;return g([vr(Ve(n)+" Fps")])}())},Sm=function(e){return{$:0,a:e}},Cm=function(e){var r=e.b.T;return Lr(r)},xm=function(e){var r=e.b.T;e.b.A;var n=e.b.ac;return Lr(r)+1+Lr(n)},wm=function(e){return o(ha,g([H("absolute w-full"),_a("range"),wl(Ve(0)),xl(Ve(xm(e)-1)),Co(Ve(Cm(e))),Pl(Ve(1)),So(o(oe,bo,o(oe,Ee(42),o(oe,je,Sm))))]),L)},Bi={$:1},Vi={$:3},Fi={$:2},At=function(e){return!e.b},Ll=bl("disabled"),Ya=S(function(e,r,n){return o(ho,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),Ll(e),_o(r)]),g([vr("REC")]))}),Za=S(function(e,r,n){return o(ho,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Ll(e),_o(n)]),g([o(q,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Pm=function(e){var r=e.a,n=e.b.ac;return o(q,g([H("py-1")]),g([function(){switch(r.$){case 0:return p(Ya,!1,Bi,"text-red-500 font-bold");case 1:return p(Ya,!1,Fi,"text-white60 hover:text-white80 font-bold");default:return p(Ya,!0,Fi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Za,At(n),Vr.fG,Vi);case 1:return p(Za,At(n),Vr.fG,Vi);default:return p(Za,!1,Vr.fF,Bi)}}()]))},Lm=function(e){return o(q,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([wm(e),Pm(e),ym(e),hm(e)]))},zm=function(e){var r=e.a;return Pr(r,Va)},Tm=$(function(e,r){var n=zm(r.G)?o(q,L,L):o(q,g([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",ie(e.bn.f6+.5*e.b3.f4)+"px"),o(ne,"top",ie(-e.bn.ga+.5*e.b3.fc)+"px")]),g([o(q,g([H(e.bn.dB?"text-black80":"text-black40")]),g([Vr.bn]))]));return o(q,L,g([n]))}),km=$(function(e,r){var n=o(ho,g([H(r.aO?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),_o(Sd),Dd("Distraction Free Mode")]),g([Vr.ge])),a=40,t=260,i=o(q,g([H("absolute w-8 bottom-12")]),g([o(ki,g([H("text-twitterBlue40 hover:text-twitterBlue"),Mi("https://twitter.com/AzizErkalSelman"),Di("_blank")]),g([Vr.f$]))])),c=80,l=o(q,g([H("absolute w-8 bottom-2")]),g([o(ki,g([H("text-githubCat40 hover:text-githubCat"),Mi("https://github.com/erkal/elm-3d-playground-exploration"),Di("_blank")]),g([Vr.e6]))])),u=e.b3.f4>640?A(e.b3.fc,a+t,e.b3.f4-(a+t)):A(e.b3.fc-c,a,e.b3.f4-a),v=u.a,s=u.b,d=u.c;return r.aO?o(q,g([H("fixed w-10 h-10 p-1")]),g([n])):o(q,L,g([o(q,g([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",ie(a)+"px")]),g([n,i,l])),o(q,g([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",ie(t)+"px"),o(ne,"height",ie(v)+"px")]),g([o(pa,Cd,bm(tn(r.G).eT))])),o(q,g([H("absolute bottom-0"),o(ne,"left",ie(s)+"px"),o(ne,"height",ie(c)+"px"),o(ne,"width",ie(d)+"px")]),g([o(pa,xd,Lm(r.G))])),o(Tm,e,r)]))}),Mm=S(function(e,r,n){var a=hd(n.G),t=tn(n.G);return o(q,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",ie(t.b3.f4)+"px"),o(ne,"height",ie(t.b3.fc)+"px")]),g([o(q,g([H("fixed")]),g([o(pa,Zc(gd),o(e,t,a))])),o(q,g([ma("gui")]),g([o(km,t,n),o(pa,pd,o(r,t,a))]))]))}),Dm=qe(function(e,r,n,a,t,i){var c=$(function(u,v){return T(w(fd,r,i,u,v),Ti)}),l=function(u){var v=o(Xc,n,u.fj);return T({aO:u.fj.b3.f4<500,G:o(sd,v,a)},Ti)};return Ds({fi:l,fV:Zc(md(hs)),f0:c,f2:o(Mm,e,t)})}),Am=V(function(e,r,n,a){return ye(Dm,e,r,n,a,$(function(t,i){return o(q,L,L)}),S(function(t,i,c){return c}))}),Bm=S(function(e,r,n){return w(Am,e,r,L,n)}),Vm=w(er,85/255,87/255,83/255,1),Fm=w(er,32/255,74/255,135/255,1),Rm=w(er,211/255,215/255,207/255,1),Ra=function(e){return{$:0,a:e}},Em=S(function(e,r,n){e:for(;;){var a=o($o,Fe,e),t=a.a,i=a.b;if(J(St(t),Fe)<0)return o(Yc,!0,{y:r,l:n,o:t});var c=i,l=o(M,qc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ea=function(e){return e.b?p(Em,e,L,0):Oc},jm=$(function(e,r){return{dv:e,am:L,C:0,cY:Ea(r),aE:Ra({a$:0,a2:0})}}),Nm=w(er,114/255,159/255,207/255,1),Wm=w(er,233/255,185/255,110/255,1),Gm=w(er,245/255,121/255,0/255,1),Im=w(er,117/255,80/255,123/255,1),Hm=function(e){return o(jm,Wm,g([Im,Vm,Fm,Nm,Rm,Gm]))},Re={V:.35,bk:6},ja=$(function(e,r){return e*je(r/e)}),Um=function(e){var r=e;return ce(r,{aE:Ra({a$:.2*-Re.bk,a2:o(ja,Re.V,r.C-Re.V)})})},Om=function(e){var r=e;return ce(r,{aE:Ra({a$:.2*Re.bk,a2:o(ja,Re.V,r.C+Re.V)})})},Jm=function(e){var r=e.dE;return r.dF?Om:r.eo?Um:mr},qm=_v,yr=Pv,Ym=$(function(e,r){var n=e,a=r,t=a.de-n.de,i=a.ga-n.ga,c=a.f6-n.f6,l=o(De,O(c),o(De,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=yr(s*s+v*v+u*u);return re({f6:s/d,ga:v/d,de:u/d})}else return Y}),Xa=function(e){return e},xo=$(function(e,r){var n=e,a=r;return{f6:a.ga*n.de-a.de*n.ga,ga:a.de*n.f6-a.f6*n.de,de:a.f6*n.ga-a.ga*n.f6}}),_n=function(e){var r=e,n=o(De,O(r.f6),o(De,O(r.ga),O(r.de)));if(n){var a=r.de/n,t=r.ga/n,i=r.f6/n,c=yr(i*i+t*t+a*a);return re({f6:i/c,ga:t/c,de:a/c})}else return Y},ya=$(function(e,r){var n=e,a=r;return{f6:a.f6-n.f6,ga:a.ga-n.ga,de:a.de-n.de}}),Zm=$(function(e,r){var n=e,a=r;return a.f6*n.f6+a.ga*n.ga+a.de*n.de}),zl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Xm=$(function(e,r){var n=e,a=r;return J(a,n)<0}),Qm=$(function(e,r){var n=e,a=r;return{f6:a.f6-n.f6,ga:a.ga-n.ga,de:a.de-n.de}}),Km=$(function(e,r){var n=e,a=r,t=a.f6*n.f6+a.ga*n.ga+a.de*n.de;return{f6:n.f6*t,ga:n.ga*t,de:n.de*t}}),e0=function(e){var r=e;return{f6:-r.f6,ga:-r.ga,de:-r.de}},He=0,Tl={f6:0,ga:0,de:0},r0=S(function(e,r,n){return o(kt,function(a){var t=o(Qm,o(Km,a,r),r);return o(kt,function(i){var c=o(xo,r,e),l=o(Zm,n,c),u=o(zl,He,l)?c:o(Xm,He,l)?e0(c):Tl;return o(pe,function(v){return A(a,i,v)},_n(u))},_n(t))},_n(e))}),n0=function(e){var r=e,n=O(r.de),a=O(r.ga),t=O(r.f6);if(J(t,a)<1)if(J(t,n)<1){var i=yr(r.de*r.de+r.ga*r.ga);return{f6:0,ga:-r.de/i,de:r.ga/i}}else{var i=yr(r.ga*r.ga+r.f6*r.f6);return{f6:-r.ga/i,ga:r.f6/i,de:0}}else if(J(a,n)<1){var i=yr(r.de*r.de+r.f6*r.f6);return{f6:r.de/i,ga:0,de:-r.f6/i}}else{var i=yr(r.f6*r.f6+r.ga*r.ga);return{f6:-r.ga/i,ga:r.f6/i,de:0}}},wo=function(e){var r=n0(e),n=r,a=n,t=e,i=t,c={f6:i.ga*a.de-i.de*a.ga,ga:i.de*a.f6-i.f6*a.de,de:i.f6*a.ga-i.ga*a.f6};return T(r,c)},Yr=function(e){var r=e;return r},$r=function(e){return e},a0=$(function(e,r){var n=wo(e),a=n.a,t=n.b;return $r({cI:r,dc:a,dd:t,df:e})}),t0=function(e){var r=o(ya,e.aU,e.du),n=Yr(e.eA),a=o(xo,r,n),t=p(r0,r,n,a);if(t.$){var v=_n(r);if(v.$){var d=wo(e.eA),m=d.a,f=d.b;return $r({cI:e.du,dc:f,dd:e.eA,df:m})}else{var s=v.a;return o(a0,s,e.du)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return $r({cI:e.du,dc:u,dd:l,df:c})}},ar={f6:0,ga:0,de:0},o0=function(e){return{$:0,a:e}},le=function(e){var r=e;return O(r)},ra=function(e){var r=e;return .5*r},i0=hv,c0=function(e){var r=e;return i0(r)},l0=function(e){var r=ra(le(e.eB)),n=c0(r);return{cU:o0(n),da:e.da}},pr=function(e){return e},Po=pr({f6:0,ga:1,de:0}),zn=function(e){return e},u0=function(e){var r=e.aU,n=e.du,a=e.eA;return l0({eB:zn(2*qm(.5)),da:t0({du:Xa(n),aU:Xa(r),eA:o(Ee,Po,o(Ym,ar,Xa(a)))})})},kl=u0({du:{f6:0,ga:-.2,de:1},aU:{f6:0,ga:0,de:0},eA:{f6:0,ga:1,de:0}}),cr=function(e){return e},v0=S(function(e,r,n){return{f6:e,ga:r,de:n}}),en=pv,pn=function(e){return zn(en*(e/180))},Hn=function(e){return e},na=function(e){var r=e;return r},$0=$(function(e,r){var n=e,a=r;return a.f6*n.f6+a.ga*n.ga+a.de*n.de}),Lo=function(e){var r=e;return r.e_},X=$(function(e,r){var n=r;return e*n}),zo=function(e){var r=e;return r.cI},f0=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.fy,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga+(a.de-i.de)*l.de}),s0=S(function(e,r,n){var a=e,t=r,i=n;return{f6:i.f6+t*a.f6,ga:i.ga+t*a.ga,de:i.de+t*a.de}}),d0=$(function(e,r){var n=Lo(r),a=e,t=a.fy,i=o($0,t,n);if(i){var c=zo(r),l=o(f0,e,c),u=o(X,-1/i,l);return re(p(s0,n,u,c))}else return Y}),m0=$(function(e,r){return{f6:e,ga:r}}),Ri=$(function(e,r){var n=e,a=r;return n*a}),p0=function(e){var r=e;return r},Ei=function(e){var r=e;return p0(r.eJ)},g0=function(e){var r=e;return r.aN},Ml=$(function(e,r){var n=r;return n/e}),on=function(e){var r=e;return r.cI},Bt=function(e){var r=e;return on(r)},Vt=function(e){var r=e;return-r},To=pr({f6:0,ga:0,de:-1}),b0=$(function(e,r){var n=e,a=r;return a/n}),h0=$(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,v=u;return{f6:v.f6*a.f6+l.f6*a.ga+i.f6*a.de,ga:v.ga*a.f6+l.ga*a.ga+i.ga*a.de,de:v.de*a.f6+l.de*a.ga+i.de*a.de}}),Sa=$(function(e,r){return{e_:r,cI:e}}),gr=function(e){var r=e;return{f6:-r.f6,ga:-r.ga,de:-r.de}},jr=function(e){var r=e;return r.df},Ft=function(e){var r=e;return gr(jr(r))},_0=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dc,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga}),ko=S(function(e,r,n){var a=e,t=r,i=n;return{f6:a,ga:t,de:i}}),y0=V(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cI,v=u,s=t.df,d=s,m=t.dd,f=m,h=t.dc,b=h;return{f6:v.f6+i*b.f6+c*f.f6+l*d.f6,ga:v.ga+i*b.ga+c*f.ga+l*d.ga,de:v.de+i*b.de+c*f.de+l*d.de}}),S0=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dd,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga}),C0=S(function(e,r,n){var a=e,t=o(S0,Ei(r),n),i=o(_0,Ei(r),n),c=a.da,l=c,u=g0(r);u.a;var v=u.b,s=a.cU;if(s.$){var h=s.a,b=o(b0,v,h),y=w(y0,l,o(Ri,b,i),o(Ri,b,t),He);return o(Sa,y,Ft(a.da))}else{var d=s.a,m=Vt(o(Ml,d,o(X,.5,v))),f=o(h0,l,o(Ee,To,_n(p(ko,i,t,m))));return o(Sa,Bt(a.da),f)}}),Ca=gv,xa=bv,Rt=function(e){var r=e;return{f6:Ca(r),ga:xa(r)}},x0=function(e){var r=e;return{f6:-r.ga,ga:r.f6}},w0=function(e){return e},P0=$(function(e,r){return w0({cI:r,dc:e,dd:x0(e)})}),L0=$(function(e,r){return o(P0,Rt(e),r)}),z0=S(function(e,r,n){var a=e.a,t=e.b;return{eJ:o(L0,r,n),aN:T(le(a),le(t))}}),Cr=function(e){var r=e;return r.f6},T0=$(function(e,r){var n=e,a=r;return{f6:n,ga:a}}),xr=function(e){var r=e;return r.ga},wr=function(e){var r=e;return r.de},k0=V(function(e,r,n,a){var t=n.f6,i=n.ga,c=function(v){return p(v0,na(Cr(v)),na(xr(v)),na(wr(v)))},l=p(z0,T(Hn(r.f4),Hn(r.fc)),pn(0),o(m0,0,0)),u=o(T0,Hn(t),Hn(i));return o(pe,c,o(d0,a,p(C0,e,l,u)))}),cn=$(function(e,r){var n=e,a=r;return{f6:a.f6+n.f6,ga:a.ga+n.ga,de:a.de+n.de}}),M0=$(function(e,r){return{fy:e,cI:r}}),D0=$(function(e,r){var n=r;return o(M0,n.fy,o(cn,e,n.cI))}),A0=$(function(e,r){return{fy:r,cI:e}}),Mo=pr({f6:0,ga:0,de:1}),Do=Mo,B0=o(A0,ar,Do),V0=V(function(e,r,n,a){return w(k0,r,n,a,o(D0,p(ko,cr(0),cr(0),cr(e)),B0))}),F0=V0(0),ji=$(function(e,r){return e?r:mr}),R0=S(function(e,r,n){var a=e.bn,t=r.ef,i=r.el,c=n;return ce(c,{C:i-(t-a.f6)})}),E0=V(function(e,r,n,a){var t=a;return J(O(r-t.C),.5*Re.V)<0?ce(t,{C:t.C+.1*(r-t.C)}):ce(t,{C:t.C+e*n})}),j0=function(e){var r=e;return ce(r,{am:L})},N0=function(e){return{$:1,a:e}},W0=$(function(e,r){var n=r;return ce(n,{aE:N0({ef:e.bn.f6,el:n.C})})}),Ao=S(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),G0=function(e){return p(Dn,Kf,0,e)},I0=function(e){var r=e,n=G0(o(go,Lr(r.am)-1,o(ee,function(u){return u.dn},r.am))),a=T(o(Ee,0,o(pe,function(u){return u.cS},ba(r.am))),o(Ee,0,o(pe,function(u){return u.cS},ba(Me(r.am))))),t=a.a,i=a.b,c=t-i,l=n?c/n:0;return ce(r,{aE:Ra({a$:p(Ao,-Re.bk,Re.bk,l),a2:o(ja,Re.V,r.C+.3*l)})})},H0=$(function(e,r){var n=e.dp,a=e.bn,t=r;return ce(t,{am:o(go,6,o(M,{dn:n,cS:a.f6},t.am))})}),U0=$(function(e,r){var n=r,a=n.aE;if(a.$===1){var t=a.a;return p(ji,!e.bn.dB,I0,p(R0,e,t,o(H0,e,n)))}else{var i=a.a.a2,c=a.a.a$;return w(E0,e.dp,i,c,p(ji,e.bn.dB,W0(e),j0(n)))}}),O0=$(function(e,r){var n=e.bn,a=o(Ee,{f6:0,ga:0,de:0},p(F0,kl,e.b3,n)),t=a.f6,i=a.ga,c=ce(e,{bn:ce(n,{f6:t,ga:i})});return o(U0,c,r)}),J0=$(function(e,r){return e.bn,o(O0,e,o(Jm,e,r))}),Ni=function(e){return e*en/180},Bo=$(function(e,r){return{$:0,a:e,b:r}}),Qa=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),Ka=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),br=$(function(e,r){var n=e,a=r;return a-n}),q0=pr({f6:-1,ga:0,de:0}),Y0=pr({f6:0,ga:-1,de:0}),Dl=pr({f6:1,ga:0,de:0}),de=S(function(e,r,n){var a=e,t=r,i=n;return{f6:a,ga:t,de:i}}),Z0=qe(function(e,r,n,a,t,i){var c=o(Qa,n,i)?Mo:To,l=o(Qa,r,t)?Po:Y0,u=o(Qa,e,a)?Dl:q0,v=A(le(o(br,e,a)),le(o(br,r,t)),le(o(br,n,i))),s=p(de,o(Ka,e,a),o(Ka,r,t),o(Ka,n,i)),d=$r({cI:s,dc:u,dd:l,df:c});return{eJ:d,aN:v}}),X0=$(function(e,r){return ye(Z0,Cr(e),xr(e),wr(e),Cr(r),xr(r),wr(r))}),Et=S(function(e,r,n){return{f6:e,ga:r,de:n}}),Q0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Bo,e,o(X0,p(Et,-c,-l,-u),p(Et,c,l,u)))}),jt=function(e){return{$:0,a:e}},Al=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),et=function(e){return p(Ao,0,1,e<=.04045?e/12.92:o(Vn,(e+.055)/1.055,2.4))},Fn=ef,K0=function(e){var r=yo(e),n=r.cV,a=r.ck,t=r.cd;return p(Fn,et(n),et(a),et(t))},ep=function(e){return p(Al,0,jt(K0(e)),jt(0))},rp=$(function(e,r){return o(Q0,ep(r),A(.2,.3,.3))}),Nt=4294967295>>>32-wn,Wt=cv,np=S(function(e,r,n){e:for(;;){var a=Nt&r>>>e,t=o(Wt,a,n);if(t.$){var v=t.a;return o(Wt,Nt&r,v)}else{var i=t.a,c=e-wn,l=r,u=i;e=c,r=l,n=u;continue e}}}),ap=function(e){return e>>>5<<5},Bl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?Y:J(e,ap(n))>-1?re(o(Wt,Nt&e,i)):re(p(np,a,e,t))}),Vl=function(e){var r=e.a;return r},Fl=function(e){var r=e;return Vl(r.cY)+1},Rl=$(function(e,r){var n=r,a=o(Kr,Fl(n),e);return{di:o(Ee,n.dv,o(Bl,a-1,n.cY)),fh:a,fz:n.C-o(ja,Re.V,n.C)}}),tp=function(e){var r=e;return o(Kr,Fl(r),je(-r.C/Re.V))},op=function(e){var r=e;return o(Rl,tp(r),r)},Vo=function(e){return{$:5,a:e}},ip=function(e){return Vo(e)},El=$(function(e,r){return{$:2,a:e,b:r}}),jl=$(function(e,r){return{$:4,a:e,b:r}}),Nl=$(function(e,r){return{$:3,a:e,b:r}}),Wl=$(function(e,r){return{$:1,a:e,b:r}}),cp=S(function(e,r,n){return{f6:e,ga:r,de:n}}),lp=function(e){var r=e;return r},Fo=function(e){var r=e;return lp(r.eJ)},Ro=function(e){var r=e;return r.aN},Nr=function(e){var r=e;return r.dc},Wr=function(e){var r=e;return r.dd},up=$(function(e,r){return $r({cI:o(cn,e,on(r)),dc:Nr(r),dd:Wr(r),df:jr(r)})}),vp=$(function(e,r){return{eJ:o(up,e,Fo(r)),aN:Ro(r)}}),$p=$(function(e,r){var n=r;return o(Sa,o(cn,e,n.cI),n.e_)}),fp=$(function(e,r){var n=r;return{k:o($p,e,n.k),fo:n.fo,fJ:n.fJ}}),Eo=function(e){var r=e;return r},sp=function(e){return e},Gl=$(function(e,r){var n=Eo(r),a=n.a,t=n.b;return sp(T(e(a),e(t)))}),dp=$(function(e,r){return o(Gl,cn(e),r)}),jo=function(e){var r=e;return r.eQ},No=function(e){var r=e;return r.fJ},Il=$(function(e,r){return{eQ:r,fJ:le(e)}}),mp=$(function(e,r){return o(Il,No(r),o(cn,e,jo(r)))}),Hl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),pp=$(function(e,r){return o(Hl,cn(e),r)}),Wo=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(cp,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Bo,s,o(vp,i,c));case 1:var s=r.a,l=r.b;return o(Wl,s,o(pp,i,l));case 3:var s=r.a,u=r.b;return o(Nl,s,o(mp,i,u));case 2:var s=r.a,v=r.b;return o(El,s,o(fp,i,v));case 4:var s=r.a,d=r.b;return o(jl,s,o(dp,i,d));default:var m=r.a;return Vo(o(ee,Wo(A(n,a,t)),m))}}),gp=function(e){return Wo(A(e,0,0))},bp=function(e){return Wo(A(0,e,0))},Rn=S(function(e,r,n){var a=e,t=n;return{f6:a.f6+r*(t.f6-a.f6),ga:a.ga+r*(t.ga-a.ga),de:a.de+r*(t.de-a.de)}}),hp=S(function(e,r,n){var a=Fo(n),t=Nr(a),i=Wr(a),c=jr(a),l=p(Rn,e,r,on(a)),u=r>=0?$r({cI:l,dc:t,dd:i,df:c}):$r({cI:l,dc:gr(t),dd:gr(i),df:gr(c)}),v=Ro(n),s=v.a,d=v.b,m=v.c,f=le(o(X,r,s)),h=le(o(X,r,d)),b=le(o(X,r,m));return{eJ:u,aN:A(f,h,b)}}),Go=function(e){var r=e;return r.k},Wi=function(e){return Lo(Go(e))},_p=function(e){return zo(Go(e))},Ul=function(e){var r=e;return r.fo},Ol=function(e){var r=e;return r.fJ},yp=S(function(e,r,n){var a=le(o(X,r,Ol(n))),t=le(o(X,r,Ul(n))),i=r>=0?Wi(n):gr(Wi(n)),c=p(Rn,e,r,_p(n));return{k:o(Sa,c,i),fo:t,fJ:a}}),Sp=S(function(e,r,n){return o(Gl,o(Rn,e,r),n)}),Cp=S(function(e,r,n){return o(Il,o(X,O(r),No(n)),p(Rn,e,r,jo(n)))}),xp=S(function(e,r,n){return o(Hl,o(Rn,e,r),n)}),Jl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Bo,c,p(hp,ar,e,n));case 1:var c=r.a,a=r.b;return o(Wl,c,p(xp,ar,e,a));case 3:var c=r.a,t=r.b;return o(Nl,c,p(Cp,ar,e,t));case 2:var c=r.a,i=r.b;return o(El,c,p(yp,ar,e,i));case 4:var c=r.a,l=r.b;return o(jl,c,p(Sp,ar,e,l));default:var u=r.a;return Vo(o(ee,Jl(e),u))}}),wp=$(function(e,r){var n=op(r),a=n.fz,t=n.fh,i=function(l){return a+(l-t)*Re.V},c=function(l){return o(gp,i(l),o(bp,-(.1*O(i(l))),o(Jl,1-.7*O(i(l)),o(rp,e,o(Rl,l,r).di))))};return ip(o(ee,c,o(Fr,t-3,t+3)))}),rt=function(e){return e/255},Pp=S(function(e,r,n){return w(er,rt(e),rt(r),rt(n),1)}),Lp=function(e){return e},zp=function(e){return cr(.01*e)},Gi=function(e){return e},Tp=function(e){return e},kp=function(e){return{$:0,a:e}},Mp=kp,Dp={$:3},Ap=Dp,Bp=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Vp=Bp,Fp=$(function(e,r){return r.b?p(_r,M,r,e):e}),Oe=function(e){return p(_r,Fp,L,e)},Io=$(function(e,r){return Oe(o(ee,e,r))}),Rp=function(e){return{$:1,a:e}},Ep=Rp,jp=function(e){return o(Mr,"height",Ve(e))},Np=function(e){return S$(L$(e))},Wp=Np,Gp=function(e){return{$:2,a:e}},Ip=Gp,Hp=function(e){return o(Ar,"",e)},Up=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return je(l*1e3)/1e3},c=function(l){return je(l*1e4)/100};return Hp(g(["rgba(",ie(c(r)),"%,",ie(c(n)),"%,",ie(c(a)),"%,",ie(i(t)),")"]))},Op=$(function(e,r){switch(r.$){case 0:return o(If,e,r);case 1:return o(Hf,e,r);case 2:return o(Uf,e,r);case 3:return o(Of,e,r);case 4:return o(Jf,e,r);default:return o(qf,e,r)}}),Jp=$(function(e,r){switch(r.$){case 0:return o(hf,e,r);case 1:return o(_f,e,r);case 2:return o(yf,e,r);case 3:return o(Sf,e,r);case 4:return o(Cf,e,r);case 5:return o(xf,e,r);case 6:return o(wf,e,r);case 7:return o(Pf,e,r);default:return Lf(e)}}),qp=S(function(e,r,n){return p(Gf,e,r,n)}),Ii=function(e){var r=e;return r},ln=cf,nt=w(ln,1,1,1,1),rr=S(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),Yp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zp=$(function(e,r){var n=e,a=r.f6,t=r.ga;return p(Yp,n*a/t,n,n*(1-a-t)/t)}),Xp=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ho=$(function(e,r){return Xp(o(Zp,e,r))}),ql=$(function(e,r){return{dC:Pr(e.dC,r.dC),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,H:r.H+(e.H*r.p+e.I*r.s+e.J*r.v)*r.b2,I:r.I+(e.H*r.q+e.I*r.t+e.J*r.w)*r.b2,J:r.J+(e.H*r.r+e.I*r.u+e.J*r.x)*r.b2,b2:e.b2*r.b2}}),tr=sf,Qp=function(e){return tr({dM:e.p,dN:e.s,dO:e.v,dP:e.H,dQ:e.q,dR:e.t,dS:e.w,dT:e.I,dU:e.r,dV:e.u,dW:e.x,dX:e.J,dY:0,dZ:0,d_:0,d$:1})},at=ge(function(e,r,n,a,t){var i=a.dC?1:-1,c=w(ln,a.b2,a.b2,a.b2,i);return ye(t,e,c,Qp(a),a.dC,r,n)}),Yl=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(ql,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(M,x(at,e,r,n,a,h),i.M);return{M:b,U:i.U,fP:i.fP};case 3:var y=t.b,C=o(M,x(at,e,r,n,a,y),i.U);return{M:i.M,U:C,fP:i.fP};case 2:var _=t.a,P=o(M,x(at,e,r,n,a,_),i.fP);return{M:i.M,U:i.U,fP:P};default:var B=t.a;return p(Dn,w(Yl,e,r,n,a),i,B)}}),Kp=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Zl=Kp,Uo=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),e3=function(e){var r=e._,n=e.X,a=e.W;return w(Uo,518,r,n,a)},r3=$(function(e,r){return{$:6,a:e,b:r}}),n3=r3,Xl=g([e3({W:1,X:0,_:!1}),w(Zl,!1,!1,!1,!1),o(n3,0,1)]),rn=519,Oo=8,Ql=15,Zr=7681,a3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=bf,t3=$(function(e,r){return{$:0,a:e,b:r}}),o3=t3({dq:1,dA:0,d8:5}),Be=Q$,i3=o3(g([{b_:o(Be,-1,-1)},{b_:o(Be,1,-1)},{b_:o(Be,-1,1)},{b_:o(Be,1,1)}])),c3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"b_"},uniforms:{}},l3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Jo=S(function(e,r,n){var a=e.cW,t=e.cw,i=e.db,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(oe,c(v.bs),o(oe,l(v.bd),o(oe,l(v.bA),l(v.bB))))};return o(u,n,o(u,r,p(l3,a,t,i)))}),qo=function(e){return p(Jo,{cw:e.cw,cW:e.cW,db:e.db},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB})},Yo=function(e){return x(ae,g([qo(e),w(Zl,!1,!1,!1,!1)]),c3,a3,i3,{})},u3=Yo({bd:Zr,cw:0,cW:Oo,bs:rn,db:Ql,bA:Zr,bB:Zr}),v3=516,Hi=5386,Ce=7680,$3=function(e){return o(Vn,2,e+4)},Kl=function(e){return Yo({bd:Ce,cw:Ql,cW:Oo,bs:v3,db:$3(e),bA:Hi,bB:Hi})},f3=S(function(e,r,n){return Oe(g([p(rr,e,n,Xl),g([Kl(r),u3])]))}),s3=$(function(e,r){return Oe(o(Ic,f3(e),r))}),d3=function(e){var r=e._,n=e.X,a=e.W;return w(Uo,513,r,n,a)},m3=d3({W:1,X:0,_:!0}),p3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},g3=function(e){var r=e.b0,n=e.bM,a=e.bF,t=e.bC,i=e.bH,c=e.aK,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return p3(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},b3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ui=$(function(e,r){var n=e,a=r;return p(b3,32774,n,a)}),h3=1,Oi=771,_3=770,Zo=g3({bC:0,aK:o(Ui,h3,Oi),bF:0,bH:o(Ui,_3,Oi),bM:0,b0:0}),Hr=g([m3,Zo]),y3=function(e){var r=e;return r.d1},S3=function(e){var r=e;return r.d2},eu=function(e){var r=e;return r.d3},C3=function(e){var r=e;return r.d4},x3=function(e){var r=e;return r.d5},ru=function(e){var r=e;return r.d6},nu=function(e){return A(o(br,C3(e),y3(e)),o(br,x3(e),S3(e)),o(br,ru(e),eu(e)))},w3=function(e){return e},P3=function(e){return $r({cI:w3({f6:e.H,ga:e.I,de:e.J}),dc:pr({f6:e.p,ga:e.q,de:e.r}),dd:pr({f6:e.s,ga:e.t,de:e.u}),df:pr({f6:e.v,ga:e.w,de:e.x})})},tt=$(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,v=u;return{f6:a.f6*v.f6+a.ga*v.ga+a.de*v.de,ga:a.f6*l.f6+a.ga*l.ga+a.de*l.de,de:a.f6*i.f6+a.ga*i.ga+a.de*i.de}}),au=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=a.f6-i.f6,l=a.ga-i.ga,u=a.de-i.de,v=n.df,s=v,d=n.dd,m=d,f=n.dc,h=f;return{f6:c*h.f6+l*h.ga+u*h.de,ga:c*m.f6+l*m.ga+u*m.de,de:c*s.f6+l*s.ga+u*s.de}}),tu=$(function(e,r){return{cI:o(au,e,on(r)),dc:o(tt,e,Nr(r)),dd:o(tt,e,Wr(r)),df:o(tt,e,jr(r))}}),wa=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(De,n,a)}),aa=$(function(e,r){return J(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),L3=$(function(e,r){var n=wa(r),a=wa(e);return{d1:o(ue,a.d1,n.d1),d2:o(ue,a.d2,n.d2),d3:o(ue,a.d3,n.d3),d4:o(se,a.d4,n.d4),d5:o(se,a.d5,n.d5),d6:o(se,a.d6,n.d6)}}),Je=function(e){var r=e;return r},z3=function(e){var r=e;return A(r.f6,r.ga,r.de)},yn=$(function(e,r){var n=e,a=r;return a+n}),T3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(le(a)),c=ra(le(n)),l=ra(le(t)),u=z3(r),v=u.a,s=u.b,d=u.c;return{d1:o(yn,c,v),d2:o(yn,i,s),d3:o(yn,l,d),d4:o(br,c,v),d5:o(br,i,s),d6:o(br,l,d)}}),Ji=V(function(e,r,n,a){var t=n.eQ,i=2*n.fa*r,c=2*n.e9*r,l=2*n.e8*r,u=t.de*r,v=t.ga*r,s=t.f6*r,d=Je(jr(e)),m=O(l*d.f6)+O(c*d.ga)+O(i*d.de),f=Je(Wr(e)),h=O(l*f.f6)+O(c*f.ga)+O(i*f.de),b=Je(Nr(e)),y=O(l*b.f6)+O(c*b.ga)+O(i*b.de),C=o(T3,A(y,h,m),o(au,e,p(Et,s,v,u)));if(a.$)return re(C);var _=a.a;return re(o(L3,_,C))}),Gt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,y=i;e=f,r=h,n=b,a=y;continue e;case 1:var c=t.a,l=w(Ji,e,r,c,n),f=e,h=r,b=l,y=i;e=f,r=h,n=b,a=y;continue e;case 2:var f=e,h=r,b=n,y=i;e=f,r=h,n=b,a=y;continue e;case 3:var c=t.a,l=w(Ji,e,r,c,n),f=e,h=r,b=l,y=i;e=f,r=h,n=b,a=y;continue e;case 4:var u=t.a,f=e,h=r,b=w(Gt,e,r,n,u),y=i;e=f,r=h,n=b,a=y;continue e;default:var v=t.a,s=t.b,d=o(tu,P3(v),e),m=r*v.b2,f=e,h=r,b=w(Gt,d,m,n,g([s])),y=i;e=f,r=h,n=b,a=y;continue e}}else return n}),un=rf,vn=nf,$n=af,ou=function(e){return{$:4,a:e}},k3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),En=function(e){return ou(o(k3,e,L))},M3={dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:0,I:0,J:0,b2:1},qi=Yo({bd:Zr,cw:0,cW:Oo,bs:rn,db:255,bA:Zr,bB:Zr}),D3=function(e){var r=e,n=o(De,O(r.f6),o(De,O(r.ga),O(r.de)));if(n){var a=r.de/n,t=r.ga/n,i=r.f6/n,c=yr(i*i+t*t+a*a);return c*n}else return He},ze={bF:0,eP:!1,bM:0,cR:0,b0:0,c6:0,f6:0,ga:0,de:0},Ge=$(function(e,r){var n=e,a=r;return tr({dM:n.f6,dN:n.b0,dO:a.f6,dP:a.b0,dQ:n.ga,dR:n.bM,dS:a.ga,dT:a.bM,dU:n.de,dV:n.bF,dW:a.de,dX:a.bF,dY:n.c6,dZ:n.cR,d_:a.c6,d$:a.cR})}),gn=T({bi:o(Ge,ze,ze),bR:o(Ge,ze,ze),bS:o(Ge,ze,ze),bT:o(Ge,ze,ze)},w(ln,0,0,0,0)),iu=514,cu=function(e){var r=e._,n=e.X,a=e.W;return w(Uo,515,r,n,a)},lu=240,A3=g([cu({W:1,X:0,_:!0}),qo({bd:Ce,cw:lu,cW:0,bs:iu,db:0,bA:Ce,bB:Ce}),Zo]),B3=$(function(e,r){var n=e,a=r.fx,t=r.e5,i=r.eI,c=le(a),l=c,u=le(t),v=u,s=n.cU;if(s.$){var m=s.a;return xt(v)?tr({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:0,dX:-1,dY:0,dZ:0,d_:0,d$:1}):tr({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:-2/(v-l),dX:-(v+l)/(v-l),dY:0,dZ:0,d_:0,d$:1})}else{var d=s.a;return xt(v)?tr({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-1,dX:-2*l,dY:0,dZ:0,d_:-1,d$:0}):tr({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-(v+l)/(v-l),dX:-2*v*l/(v-l),dY:0,dZ:0,d_:-1,d$:0})}}),Un=$(function(e,r){return(1&e>>r)===1?0:1}),V3=function(e){return g([cu({W:1,X:0,_:!0}),qo({bd:Ce,cw:lu,cW:e,bs:iu,db:0,bA:Ce,bB:Ce}),Zo])},F3=S(function(e,r,n){return Oe(o(ee,function(a){var t=a<<4,i=w(ln,o(Un,a,0),o(Un,a,1),o(Un,a,2),o(Un,a,3));return p(rr,e,T(r,i),V3(t))},o(Fr,1,o(Vn,2,n)-1)))}),Xr=function(e){var r=e;return r},R3=df,uu=Dl,vu=Po,E3={cI:ar,dc:uu,dd:vu,df:Do},Na=function(e){var r=e;return r},j3=function(e){var r=Na(on(e)),n=Je(jr(e)),a=Je(Wr(e)),t=Je(Nr(e));return tr({dM:t.f6,dN:a.f6,dO:n.f6,dP:r.f6,dQ:t.ga,dR:a.ga,dS:n.ga,dT:r.ga,dU:t.de,dV:a.de,dW:n.de,dX:r.de,dY:0,dZ:0,d_:0,d$:1})},N3=$(function(e,r){var n=r;return j3(o(tu,n,e))}),W3=function(e){return o(N3,E3,e)},G3=function(e){var r=e;return r.da},I3=function(e){var r=e;return Nr(r)},H3=function(e){var r=e;return Wr(r)},U3=function(e){var r=G3(e.eN),n=$r({cI:Bt(r),dc:I3(r),dd:H3(r),df:gr(Ft(r))}),a=En(e.aS),t=a,i=w(Gt,n,1,Y,g([t]));if(i.$===1)return L;var c=i.a,l=W3(r),u=o(X,.99,o(ue,le(e.aM),Vt(eu(c)))),v=nu(c),s=v.a,d=v.b,m=v.c,f=D3(p(ko,s,d,m)),h=o(X,1.01,o(yn,f,Vt(ru(c)))),b=o(B3,e.eN,{eI:e.eI,e5:h,fx:u}),y=R3(b).d$,C=y?Je(gr(Ft(r))):Xr(Bt(r)),_=function(){var be=e.b5;switch(be.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var he=be.a;return T(3,he);case 4:var he=be.a;return T(4,he);default:return T(5,0)}}(),P=_.a,B=_.b,G=e.bK,j=G,E=o(Ho,j,e.b7),U=E,I=tr({dM:0,dN:C.f6,dO:un(U),dP:e.eu,dQ:0,dR:C.ga,dS:vn(U),dT:na(f),dU:0,dV:C.de,dW:$n(U),dX:P,dY:0,dZ:y,d_:0,d$:B}),R=ye(Yl,I,l,b,M3,t,{M:L,U:L,fP:L}),Q=e.bQ;switch(Q.$){case 0:var te=Q.a;return Oe(g([p(rr,R.M,T(te,nt),Hr),p(rr,R.U,gn,Hr)]));case 1:var te=Q.a;return Oe(g([p(rr,R.M,gn,Hr),g([qi]),p(rr,R.fP,te.bi,Xl),g([Kl(0)]),p(rr,R.M,T(te,nt),A3),p(rr,R.U,gn,Hr)]));default:var xe=Q.a,we=Q.b;return Oe(g([p(rr,R.M,T(we,nt),Hr),g([qi]),o(s3,R.fP,xe),p(F3,R.M,we,Lr(xe)),p(rr,R.U,gn,Hr)]))}},O3=function(e){return o(Mr,"width",Ve(e))},J3=$(function(e,r){var n=g([Ep(1),Ip(0),Mp(!0),w(Vp,0,0,0,0)]),a=function(){var P=e.b8;switch(P.$){case 0:return A(n,"0",1);case 1:return A(o(M,Ap,n),"1",1);default:var B=P.a;return A(n,"0",B)}}(),t=a.a,i=a.b,c=a.c,l=e.aN,u=l.a,v=l.b,s=Ii(v),d=o(ne,"height",Ve(s)+"px"),m=Ii(u),f=m/s,h=o(Io,function(P){return U3({eI:f,eN:e.eN,aM:e.aM,aS:P.aS,bK:P.bK,bQ:P.bQ,eu:c,b5:P.b5,b7:P.b7})},r),b=o(ne,"width",Ve(m)+"px"),y=e.aL,C=y,_=Up(C);return p(Wp,"div",g([o(ne,"padding","0px"),b,d]),g([T(i,p(qp,t,g([O3(je(m*c)),jp(je(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),h))]))}),q3=function(e){return o(J3,{b8:e.b8,aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN},g([{aS:e.aS,bK:e.bK,bQ:e.bQ,b5:e.b5,b7:e.b7}]))},$u=function(e){return e},Yi=$u({f6:.31271,ga:.32902}),Y3=$(function(e,r){var n=e,a=Je(r.e_),t=a.f6,i=a.ga,c=a.de,l=o(Ho,r.cl,r.ce),u=l;return{bF:$n(u),eP:n,bM:vn(u),cR:0,b0:un(u),c6:1,f6:-t,ga:-i,de:-c}}),Z3=function(e){return e},X3=function(e){return Z3(1.2*o(Vn,2,e))},ot=function(e){return e},Q3={$:0},K3=Q3,fu=function(e){return e},Zi=function(e){var r=e;return r},e1=function(e){e:for(;;){if(Pr(e.fk,He)&&Pr(e.fl,He))return ze;if(o(zl,le(e.fk),le(e.fl))){var r={ce:e.ce,fk:e.fl,fl:e.fk,eA:gr(e.eA)};e=r;continue e}else{var n=O(Zi(e.fl)/en),a=O(Zi(e.fk)/en),t=Je(e.eA),i=t.f6,c=t.ga,l=t.de,u=o(Ho,fu(1),e.ce),v=u;return{bF:a*$n(v),eP:!1,bM:a*vn(v),cR:n/a,b0:a*un(v),c6:3,f6:i,ga:c,de:l}}}},Xi=function(e){return e1({ce:e.ce,fk:e.cl,fl:He,eA:e.eA})},r1=function(e){var r=e;return r},su=function(e){var r=p(Ao,1667,25e3,r1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return $u({f6:n,ga:a})},du=function(e){return e},n1=su(du(12e3)),a1=su(du(5600)),t1=function(e){return{$:2,a:e}},o1=function(e){return t1(e)},i1=$(function(e,r){return{$:2,a:e,b:r}}),mu=function(e){return{$:0,a:e}},On=function(e){var r=e;return r},c1=function(e){var r=e;return r.eP},l1=mu(gn.a),u1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(M,a,i),c):T(i,o(M,a,c))});return p(_r,n,T(L,L),r)}),v1=function(e){var r=e;return tr({dM:r.f6,dN:r.b0,dO:0,dP:0,dQ:r.ga,dR:r.bM,dS:0,dT:0,dU:r.de,dV:r.bF,dW:0,dX:0,dY:r.c6,dZ:r.cR,d_:0,d$:0})},$1=K(function(e,r,n,a,t,i,c,l){var u=o(u1,c1,g([On(e),On(r),On(n),On(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,y=b.a,C=b.b,_=C.a;return o(i1,o(ee,v1,v),{bi:o(Ge,m,h),bR:o(Ge,y,_),bS:o(Ge,t,i),bT:o(Ge,c,l)})}else return l1}else return mu({bi:o(Ge,e,r),bR:o(Ge,n,a),bS:o(Ge,t,i),bT:o(Ge,c,l)})}),f1=S(function(e,r,n){return ka($1,e,r,n,ze,ze,ze,ze,ze)}),s1=function(e){var r=o(Y3,Tp(e.fP),{ce:a1,e_:e.fX,cl:ot(8e4)}),n=Xi({ce:n1,cl:ot(2e4),eA:e.eA}),a=Xi({ce:Yi,cl:ot(15e3),eA:gr(e.eA)}),t=p(f1,r,n,a);return q3({b8:o1(e.ci),aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN,aS:e.aS,bK:X3(15),bQ:t,b5:K3,b7:Yi})},pu=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),d1=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),gu=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),bu=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),m1=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),p1=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),g1=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Xo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(g1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(pu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(d1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(gu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(p1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(bu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(m1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Qo={$:0},b1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=wa(c(u)),d=o(se,s.d4,e),m=o(ue,s.d1,r),f=o(se,s.d5,n),h=o(ue,s.d2,a),b=o(se,s.d6,t),y=o(ue,s.d3,i),C=c,_=v;e=d,r=m,n=f,a=h,t=b,i=y,c=C,l=_;continue e}else return{d1:r,d2:a,d3:i,d4:e,d5:n,d6:t}}),h1=S(function(e,r,n){var a=wa(e(r));return ka(b1,a.d4,a.d1,a.d5,a.d2,a.d6,a.d3,e,n)}),it=$(function(e,r){var n=e,a=r;return J(a,n)<1}),hu=function(e){return o(it,e.d1,e.d4)&&o(it,e.d2,e.d5)&&o(it,e.d3,e.d6)?e:{d1:o(ue,e.d4,e.d1),d2:o(ue,e.d5,e.d2),d3:o(ue,e.d6,e.d3),d4:o(se,e.d4,e.d1),d5:o(se,e.d5,e.d2),d6:o(se,e.d6,e.d3)}},Tn=function(e){var r=e;return r},_u=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Cr(n),c=xr(n),l=wr(n),u=Cr(a),v=xr(a),s=wr(a),d=Cr(t),m=xr(t),f=wr(t);return hu({d1:o(ue,i,o(ue,u,d)),d2:o(ue,c,o(ue,v,m)),d3:o(ue,l,o(ue,s,f)),d4:o(se,i,o(se,u,d)),d5:o(se,c,o(se,v,m)),d6:o(se,l,o(se,s,f))})},yu=tf,Te=function(e){return yu(Na(e))},Su=function(e){var r=e;return r},Wa=function(e){return yu(Su(e))},_1=$(function(e,r){var n=e,a=r,t=o(De,O(a.f6),o(De,O(a.ga),O(a.de)));if(t){var i=a.de/t,c=a.ga/t,l=a.f6/t,u=yr(l*l+c*c+i*i);return{f6:n*l/u,ga:n*c/u,de:n*i/u}}else return Tl}),y1=_1(fu(1)),Cu=S(function(e,r,n){var a=o(ya,r,n),t=o(ya,e,r);return y1(o(xo,a,t))}),S1=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Wa(p(Cu,n,a,t));return A({n:i,b_:Te(n)},{n:i,b_:Te(a)},{n:i,b_:Te(t)})},C1=$(function(e,r){return{$:2,a:e,b:r}}),xu=C1({dq:3,dA:0,d8:4}),x1=function(e){if(e.b){var r=e.a,n=e.b,a=xu(o(ee,S1,e)),t=p(h1,_u,r,n);return w(pu,t,e,a,0)}else return Qo},We=S(function(e,r,n){return A(e,r,n)}),wu=function(){var e=cr(1),r=cr(1),n=cr(1),a=o(X,-.5,e),t=o(X,-.5,r),i=o(X,-.5,n),c=p(de,i,t,a),l=o(X,.5,e),u=p(de,i,t,l),v=o(X,.5,r),s=p(de,i,v,a),d=p(de,i,v,l),m=o(X,.5,n),f=p(de,m,t,a),h=p(de,m,v,a),b=p(de,m,t,l),y=p(de,m,v,l);return Xo(x1(g([p(We,c,h,f),p(We,c,s,h),p(We,u,b,y),p(We,u,y,d),p(We,f,h,y),p(We,f,y,b),p(We,c,d,s),p(We,c,u,d),p(We,c,f,b),p(We,c,b,u),p(We,s,y,h),p(We,s,d,y)])))}(),Jn={$:0},w1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),P1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Wa(p(Cu,u,l,c)),s={n:v,b_:Te(u)},d={n:v,b_:Te(l)},m={n:v,b_:Te(c)};return o(M,s,o(M,d,o(M,m,n)))}),L1=ur,Ko=function(e){var r=e;return r.D},z1=V(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return re(p(e,t,i,c))}),ei=function(e){var r=e;return r.ai},ct=$(function(e,r){return o(Bl,e,ei(r))}),T1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(z1,S(function(c,l,u){return A(c,l,u)}),o(ct,a,e),o(ct,t,e),o(ct,i,e))};return o(_l,r,Ko(e))},k1=S(function(e,r,n){return e(r(n))}),M1=$(function(e,r){return!o(ol,o(k1,As,e),r)}),D1=$(function(e,r){return p(_r,$(function(n,a){return e(n)?o(M,n,a):a}),L,r)}),Pu=$(function(e,r){var n=Vl(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(M1,a,r)?{D:r,ai:e}:{D:o(D1,a,r),ai:e}}),A1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=A1({dq:1,dA:3,d8:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return T(A(a.f6,a.ga,a.de),A(n.f6,n.ga,n.de))}),Qi=p(Fn,0,0,0),lt=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(sl,o(ta,e,r),t);if(v.$){var d={n:Qi,b_:Te(r)},m={n:Qi,b_:Te(e)},f=u+1,h=u;return A(o(M,A(n,h,f),o(M,A(n,f,a),c)),o(M,d,o(M,m,l)),u+2)}else{var s=v.a;return A(o(M,A(n,s,a),c),l,u)}}),B1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,y=e,C=r,_=v,P=a+3,B=ye(lt,s,m,f,b,r,ye(lt,d,s,h,f,r,ye(lt,m,d,b,h,r,t)));e=y,r=C,n=_,a=P,t=B;continue e}else{var G=t,j=G.a,E=G.b;return T(j,Me(E))}}),V1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,y=p(Kn,o(ta,m,s),f,p(Kn,o(ta,s,d),h,p(Kn,o(ta,d,m),b,t))),C=o(M,A(b,h,f),a),_=e,P=v,B=n+3,G=C,j=y;e=_,r=P,n=B,a=G,t=j;continue e}else return A(a,t,n)}),Dr=S(function(e,r,n){var a=T1(n),t=p(_r,P1(r),L,a),i=x(V1,r,a,0,L,L1),c=i.a,l=i.b,u=i.c,v=x(B1,r,l,a,0,A(c,L,u)),s=v.a,d=v.b,m=At(d)?t:ve(t,d);return p(w1,e,o(Pu,Ea(m),s),o(jn,m,s))}),It=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Fr,0,Lr(e)-1)),ai:Ea(Oe(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},Lu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(Dr,a,mr,It(n));case 2:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(Dr,a,mr,It(n));case 3:var a=e.a,t=e.b;return p(Dr,a,mr,t);case 4:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 5:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 6:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 7:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ki=Lu(wu),zu={$:0},z=zu,me=$(function(e,r){return{$:1,a:e,b:r}}),F1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bI"}},R1=1029,E1=function(e){return{$:5,a:e}},Tu=function(e){var r=e;return E1(r)},j1=Tu(R1),N1=1028,W1=Tu(N1),ke=S(function(e,r,n){return r===1?e?o(M,j1,n):o(M,W1,n):n}),ku={src:`
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
    `,attributes:{position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ut=V(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,v,s,d){return x(ae,p(ke,l,a,d),ku,F1,n,{bI:e,b:c,c:i,d:v,e:t,f:u})}))}),ri={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ay"}},Mu={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},fr=V(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,v,s,d){return x(ae,p(ke,l,a,d),Mu,ri,n,{ay:e,b:c,c:i,d:v,e:t,f:u})}))}),Du=$(function(e,r){return{$:3,a:e,b:r}}),G1={src:`
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
    `,attributes:{},uniforms:{constantColor:"ay",pointRadius:"bZ",sceneProperties:"e"}},Au={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bZ",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},I1=V(function(e,r,n,a){return o(Du,n,K(function(t,i,c,l,u,v,s,d){return x(ae,d,Au,G1,a,{ay:e,b:c,c:i,bZ:r,d:v,e:t,f:u})}))}),ni={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ga=of,sr=ge(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,v,s,d,m){return x(ae,p(ke,u,t,m),Mu,ni,a,{aQ:o(Ga,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),H1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",pointRadius:"bZ",sceneProperties:"e"}},U1=ge(function(e,r,n,a,t){return o(Du,a,K(function(i,c,l,u,v,s,d,m){return x(ae,m,Au,H1,t,{aQ:o(Ga,Nn(r),e),b:l,c,bZ:n,d:s,e:i,f:v})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColor:"cx",sceneProperties:"e",viewMatrix:"f"}},Vu={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=V(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return x(ae,p(ke,l,a,d),Vu,Bu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cx:e,b:c,c:i,d:v,e:t,f:u})}))}),Fu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColorTexture:"cy",normalMapTexture:"aZ",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Ru={src:`
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
    `,attributes:{normal:"n",position:"b_",tangent:"ew",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},O1=qe(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return x(ae,p(ke,v,i,f),Ru,Fu,t,{P:b,bi:h.bi,bR:h.bR,bS:h.bS,bT:h.bT,cy:e,b:u,c:l,aZ:r,d,e:c,a4:n,f:s})}))}),Eu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cc",constantBaseColor:"cf",constantMetallic:"cg",constantRoughness:"ch",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallicTexture:"cC",normalMapTexture:"aZ",roughnessTexture:"c$",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},J1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(me,u,K(function(d,m,f,h,b,y,C,_){var P=C.a,B=C.b;return x(ae,p(ke,h,s,_),Ru,Eu,v,{cc:e,cf:r,cg:i,ch:a,P:B,bi:P.bi,bR:P.bR,bS:P.bS,bT:P.bT,cC:t,b:f,c:m,aZ:c,d:y,c$:n,e:d,a4:l,f:b})}))}}}}}}}}}}},ju={src:`
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
    `,attributes:{},uniforms:{baseColor:"cb",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallic:"cB",roughness:"c_",sceneProperties:"e",viewMatrix:"f"}},Yn=qe(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return x(ae,p(ke,v,i,f),Vu,ju,t,{cb:e,P:b,bi:h.bi,bR:h.bR,bS:h.bS,bT:h.bT,cB:n,b:u,c:l,d,c_:r,e:c,f:s})}))}),q1=function(e){return{$:0,a:e}},ec=$(function(e,r){return{$:1,a:e,b:r}}),Sn=$(function(e,r){if(r.$){var n=r.a.B;return T(n,1)}else return r.a,T(e,0)}),Y1=function(e){return w(ln,un(e),vn(e),$n(e),1)},ai=w(ln,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.B;return T(a,ai)}else{var n=r.a;return T(e,Y1(n))}}),Nu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.B;return o(ec,T(t,ai),o(Sn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(ec,o(oa,t,e),o(Sn,t,r))}else{var a=n.a.a;return n.b.a,q1(a)}}),Z1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),X1=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Q1=function(e){return o(Be,e,1)},Ht=o(Be,0,0),Ur=$(function(e,r){if(r.$){var a=r.a.B;return T(a,Ht)}else{var n=r.a;return T(e,Q1(n))}}),Wu=V(function(e,r,n,a){var t=w(X1,e,r,n,a);if(t.a.$){var u=t.a.a.B;return w(Zn,T(u,ai),o(Ur,u,r),o(Ur,u,n),o(Sn,u,a))}else if(t.b.$){var u=t.b.a.B;return w(Zn,o(oa,u,e),T(u,Ht),o(Ur,u,n),o(Sn,u,a))}else if(t.c.$){var u=t.c.a.B;return w(Zn,o(oa,u,e),o(Ur,u,r),T(u,Ht),o(Sn,u,a))}else if(t.d.$){var u=t.d.a.B;return w(Zn,o(oa,u,e),o(Ur,u,r),o(Ur,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Z1,i,c,l)}}),K1={src:`
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
    `,attributes:{},uniforms:{backlight:"b9",colorTexture:"bI",sceneProperties:"e"}},vt=ge(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,v,s,d,m){return x(ae,p(ke,u,t,m),ku,K1,a,{b9:Nn(r),bI:e,b:l,c,d:s,e:i,f:v})}))}),Gu={src:`
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
    `,attributes:{normal:"n",position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},eg=V(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return x(ae,p(ke,l,a,d),Gu,Fu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cy:e,b:c,c:i,aZ:e,d:v,e:t,a4:0,f:u})}))}),rg=Jt(function(e,r,n,a,t,i,c,l,u){return o(me,c,K(function(v,s,d,m,f,h,b,y){var C=b.a,_=b.b;return x(ae,p(ke,m,u,y),Gu,Eu,l,{cc:e,cf:r,cg:i,ch:a,P:_,bi:C.bi,bR:C.bR,bS:C.bS,bT:C.bT,cC:t,b:d,c:s,aZ:e,d:h,c$:n,e:v,a4:0,f})}))}),kn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),ng=function(e){var r=e;return p(kn,r.d4,r.d1,.5)},ag=function(e){var r=e;return p(kn,r.d5,r.d2,.5)},tg=function(e){var r=e;return p(kn,r.d6,r.d3,.5)},og=function(e){return p(de,ng(e),ag(e),tg(e))},N=function(e){var r=nu(e),n=r.a,a=r.b,t=r.c;return{eQ:Na(og(e)),e8:n/2,e9:a/2,fa:t/2}},ti=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return w(ut,l,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(ut,l,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(ut,l,N(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(fr,n,N(t),c,a);case 8:var t=r.a,c=r.c;return w(fr,n,N(t),c,0);case 9:var t=r.a,c=r.c;return w(fr,n,N(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(I1,n,i,N(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return x(vt,l,v,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(vt,l,v,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(vt,l,v,N(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(sr,u,v,N(t),c,a);case 8:var t=r.a,c=r.c;return x(sr,u,v,N(t),c,0);case 9:var t=r.a,c=r.c;return x(sr,u,v,N(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(U1,u,v,i,N(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Nu,s,j);if(d.$){var h=d.a,b=h.a;h.b;var y=d.b,C=y.a,_=y.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return w(eg,b,N(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(O1,b,C,_,N(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return w(qn,m,N(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return w(qn,m,N(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return w(qn,m,N(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(qn,m,N(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var P=e.b,B=e.c,G=e.d,j=e.e,E=w(Wu,P,B,G,j);if(E.$){var Q=E.a,te=Q.a,xe=Q.b,we=E.b,be=we.a,he=we.b,Ze=E.c,Xe=Ze.a,Gr=Ze.b,Ir=E.d,C=Ir.a,_=Ir.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return nv(rg,te,xe,be,he,Xe,Gr,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return J1(te)(xe)(be)(he)(Xe)(Gr)(C)(_)(N(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var U=E.a,I=E.b,R=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return ye(Yn,U,I,R,N(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return ye(Yn,U,I,R,N(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ye(Yn,U,I,R,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(Yn,U,I,R,N(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),$t=function(e){var r=e;return r.f6},ft=function(e){var r=e;return r.ga},st=function(e){var r=e;return r.de},ig=function(e){var r=e,n=st(r.df),a=ft(r.df),t=$t(r.df),i=st(r.dd),c=ft(r.dd),l=$t(r.dd),u=st(r.dc),v=ft(r.dc),s=$t(r.dc);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},cg=function(e){var r=Na(on(e)),n=Je(jr(e)),a=Je(Wr(e)),t=Je(Nr(e));return{dC:ig(e),p:t.f6,q:t.ga,r:t.de,s:a.f6,t:a.ga,u:a.de,v:n.f6,w:n.ga,x:n.de,H:r.f6,I:r.ga,J:r.de,b2:1}},Or=$(function(e,r){return{$:5,a:e,b:r}}),Iu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(ql,a,e);return o(Or,i,t);case 1:return o(Or,e,n);case 3:return o(Or,e,n);case 2:return o(Or,e,n);default:return o(Or,e,n)}}),Hu=$(function(e,r){return o(Iu,cg(e),r)}),Ia=function(e){return{$:2,a:e}},lg=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eQ;return{eQ:{f6:n*i.f6,ga:a*i.ga,de:t*i.de},e8:n*r.e8,e9:a*r.e9,fa:t*r.fa}}),ug=uf,vg=lf,rc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=vg(a),h=f.f6,b=f.ga,y=f.de,C=f.eE,_=ug({eE:C,f6:h*s,ga:b*d,de:y*m});return ka(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return zu;case 5:var n=r.a,a=r.b;return o(Or,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(me,o(lg,e,t),o(rc,e,i));case 3:return r;case 2:var i=r.a;return Ia(o(rc,e,i));default:var c=r.a;return ou(o(ee,Ut(e),c))}}),oi=$(function(e,r){var n=r;return o(Ut,e,n)}),ii={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Uu=7683,Ou=7682,$g=p(Jo,{cw:0,cW:0,db:15},{bd:Ce,bs:rn,bA:Ce,bB:Uu},{bd:Ce,bs:rn,bA:Ce,bB:Ou}),fg=p(Jo,{cw:0,cW:0,db:15},{bd:Ce,bs:rn,bA:Ce,bB:Ou},{bd:Ce,bs:rn,bA:Ce,bB:Uu}),ci=$(function(e,r){return e?o(M,fg,r):o(M,$g,r)}),sg={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},dg=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return x(ae,o(ci,i,v),sg,ii,r,{b:t,c:a,d:l,e:n,b4:u,f:c})}))}else return Y},Pa=function(e){var r=dg(e);if(r.$)return z;var n=r.a;return Ia(n)},mg=V(function(e,r,n,a){var t=o(ti,n,wu),i=function(){var s=T(e,r);return s.a?s.b?En(g([t,Pa(Ki)])):t:s.b?Pa(Ki):z}(),c=Ro(a),l=c.a,u=c.b,v=c.c;return o(Hu,Fo(a),o(oi,A(l,u,v),i))}),pg=$(function(e,r){return w(mg,!0,!0,e,r)}),Ju=$(function(e,r){return{$:0,a:e,b:r}}),gg=function(e){var r=yo(e),n=r.cV,a=r.ck,t=r.cd;return p(Fn,n,a,t)},bg=function(e){return o(Ju,0,jt(gg(e)))},Cn=function(e){var r=e;return Ca(r)},hg=$(function(e,r){var n=e.b_,a=e.n;return o(M,{n:Wa(a),b_:Te(n)},r)}),_g=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.b_),s=vn(l.b_),d=un(l.b_),m=o(aa,e,d),f=o(De,r,d),h=o(aa,n,s),b=o(De,a,s),y=o(aa,t,v),C=o(De,i,v),_=u;e=m,r=f,n=h,a=b,t=y,i=C,c=_;continue e}else return hu({d1:r,d2:a,d3:i,d4:e,d5:n,d6:t})}),qu=$(function(e,r){var n=$n(e.b_),a=vn(e.b_),t=un(e.b_);return qt(_g,t,t,a,a,n,n,r)}),yg=function(e){var r=p(Ec,hg,L,ei(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Ko(e)),i=o(qu,n,a);return w(gu,i,e,t,0)}else return Qo},nc=$(function(e,r){var n=e,a=r,t=n.dd,i=t,c=n.dc,l=c;return{f6:a.f6*l.f6+a.ga*i.f6,ga:a.f6*l.ga+a.ga*i.ga,de:a.f6*l.de+a.ga*i.de}}),La=function(e){var r=e;return xa(r)},Ot=function(e){return zn(2*en*e)},Sg=mr,ac=Sg({cI:ar,dc:uu,dd:vu}),Yu=function(){var e=72,r=o(Ml,e,Ot(1)),n=cr(1),a=Yr(Mo),t=Yr(To),i=cr(1),c=o(X,.5,i),l=p(de,He,He,c),u=o(X,-.5,i),v=p(de,He,He,u),s=function(f){var h=o(X,f,r),b=Yr(o(nc,ac,Rt(h))),y=o(X,Cn(h),n),C=o(X,La(h),n),_=p(de,y,C,c),P=p(de,y,C,u),B=o(Kr,e,f+1),G=o(X,B,r),j=Yr(o(nc,ac,Rt(G))),E=o(X,Cn(G),n),U=o(X,La(G),n),I=p(de,E,U,u),R=p(de,E,U,c);return g([A({n:t,b_:v},{n:t,b_:I},{n:t,b_:P}),A({n:b,b_:P},{n:j,b_:I},{n:j,b_:R}),A({n:b,b_:P},{n:j,b_:R},{n:b,b_:_}),A({n:a,b_:l},{n:a,b_:_},{n:a,b_:R})])},d=o(ee,s,o(Fr,0,e-1)),m=It(Oe(d));return Xo(yg(m))}(),tc=Lu(Yu),Cg=function(e){var r=Lo(e),n=wo(r),a=n.a,t=n.b;return $r({cI:zo(e),dc:a,dd:t,df:r})},xg=V(function(e,r,n,a){var t=Cg(Go(a)),i=o(ti,n,Yu),c=function(){var d=T(e,r);return d.a?d.b?En(g([i,Pa(tc)])):i:d.b?Pa(tc):z}(),l=Ol(a),u=l,v=Ul(a),s=v;return o(Hu,t,o(oi,A(u,u,s),c))}),wg=$(function(e,r){return w(xg,!0,!0,e,r)}),oc={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},ic={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},bn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return tr({dM:i.f6,dN:c.f6,dO:l.f6,dP:0,dQ:i.ga,dR:c.ga,dS:l.ga,dT:0,dU:i.de,dV:c.de,dW:l.de,dX:0,dY:0,dZ:0,d_:0,d$:0})},Xn=xu(g([A({c5:0},{c5:1},{c5:2})])),Pg=$(function(e,r){var n=_u(r),a=N(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,z;var t=e.b.a;return o(me,a,K(function(_,P,B,G,j,E,U,I){return x(ae,p(ke,G,0,I),oc,ri,Xn,{ay:t,b:B,c:P,d:E,e:_,bx:bn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(me,a,K(function(_,P,B,G,j,E,U,I){return x(ae,p(ke,G,0,I),oc,ni,Xn,{aQ:o(Ga,Nn(c),i),b:B,c:P,d:E,e:_,bx:bn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Nu,l,f);if(u.$)return z;var v=u.a;return o(me,a,K(function(_,P,B,G,j,E,U,I){var R=U.a,Q=U.b;return x(ae,p(ke,G,0,I),ic,Bu,Xn,{P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cx:v,b:B,c:P,d:E,e:_,bx:bn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=w(Wu,s,d,m,f);if(h.$)return z;var b=h.a,y=h.b,C=h.c;return o(me,a,K(function(_,P,B,G,j,E,U,I){var R=U.a,Q=U.b;return x(ae,p(ke,G,0,I),ic,ju,Xn,{cb:b,P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cB:C,b:B,c:P,d:E,c_:y,e:_,bx:bn(r),f:j})}))}}),Lg=function(){var e=g([{a3:o(Be,0,1)},{a3:o(Be,1,1)},{a3:o(Be,2,1)},{a3:o(Be,0,-1)},{a3:o(Be,1,-1)},{a3:o(Be,2,-1)}]),r=g([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(jn,e,r)}(),zg={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",triangleVertexPositions:"bx",viewMatrix:"f"}},cc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return x(ae,o(ci,t,u),zg,ii,Lg,{b:a,c:n,d:c,e:r,b4:l,bx:bn(e),f:i})}))},Tg=V(function(e,r,n,a){var t=o(Pg,n,a),i=T(e,r);return i.a?i.b?En(g([t,cc(a)])):t:i.b?cc(a):z}),kg=$(function(e,r){return w(Tg,!0,!0,e,r)}),Mg=$(function(e,r){var n=wr(r),a=wr(e),t=xr(r),i=xr(e),c=Cr(r),l=Cr(e);return{d1:o(ue,l,c),d2:o(ue,i,t),d3:o(ue,a,n),d4:o(se,l,c),d5:o(se,i,t),d6:o(se,a,n)}}),Dg=function(e){var r=Eo(e),n=r.a,a=r.b;return o(Mg,n,a)},lc={src:`
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
    `,attributes:{lineSegmentVertex:"dL"},uniforms:{lineSegmentEndPoint:"dJ",lineSegmentStartPoint:"dK",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ag=$(function(e,r){return{$:1,a:e,b:r}}),Bg=Ag({dq:2,dA:0,d8:1}),uc=Bg(g([T({dL:0},{dL:1})])),Vg=$(function(e,r){var n=Dg(r),a=N(n),t=Eo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,z;var l=e.b.a;return o(me,a,K(function(v,s,d,m,f,h,b,y){return x(ae,y,lc,ri,uc,{ay:l,dJ:Te(c),dK:Te(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(me,a,K(function(s,d,m,f,h,b,y,C){return x(ae,C,lc,ni,uc,{aQ:o(Ga,Nn(u),l),dJ:Te(c),dK:Te(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return z;default:return z}}),Fg=$(function(e,r){return o(Vg,e,r)}),vc=$(function(e,r){var n=e,a=r;return n/a}),Rg=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(M,i,t);if(Pr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),$c=$(function(e,r){return e<1?L:x(Rg,0,e,e,r,L)}),Eg=$(function(e,r){var n=e.b_,a=e.n,t=e.L,i=t,c=i.a,l=i.b;return o(M,{n:Wa(a),b_:Te(n),L:o(Be,c,l)},r)}),jg=function(e){var r=p(Ec,Eg,L,ei(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Ko(e)),i=o(qu,n,a);return w(bu,i,e,t,0)}else return Qo},Zu=$(function(e,r){var n=e,a=r,t=Ca(a);return{f6:t*Ca(n),ga:t*xa(n),de:xa(a)}}),Ng=function(){var e=cr(1),r=72,n=o(Fr,0,r-1),a=o($c,r,o(kn,He,Ot(1))),t=uo(r/2),i=o(Fr,0,t-1),c=o($c,t,o(kn,pn(90),pn(-90))),l=Ea(Oe(o(ee,function(s){return o(ee,function(d){return{n:Yr(o(Zu,s,d)),b_:p(de,o(X,Cn(d)*Cn(s),e),o(X,Cn(d)*La(s),e),o(X,La(d),e)),L:T(o(vc,s,Ot(1)),o(vc,o(yn,pn(90),d),pn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Oe(o(ee,function(s){return Oe(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([A(b,h,m),A(b,m,f)])},i))},n));return Xo(jg(o(Pu,l,v)))}(),za=72,Qn=2*za,Wg=$(function(e,r){e:for(;;){var n=Qn+1,a=o(Kr,Qn,2*e+3),t=o(Kr,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(M,A(l,c,t),o(M,A(c,a,t),o(M,A(c,i,a),o(M,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Gg=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ig=$(function(e,r){e:for(;;){var n=p(Gg,0,2*en,e/za),a={bD:n,bW:0,b1:1},t={bD:n,bW:1,b1:1},i=o(M,a,o(M,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Hg=function(){var e=o(Ig,za-1,g([{bD:0,bW:0,b1:0},{bD:0,bW:1,b1:0}])),r=o(Wg,za-1,L);return o(jn,e,r)}(),Ug={src:`
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
    `,attributes:{angle:"bD",offsetScale:"bW",radiusScale:"b1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},fc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return x(ae,o(ci,!0,u),Ug,ii,Hg,{ay:p(Fn,0,0,1),b:a,c:n,d:c,e:r,b4:l,f:i})}))},Og=function(e){var r=Su(e);return{dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:r.f6,I:r.ga,J:r.de,b2:1}},Jg=$(function(e,r){return o(Iu,Og(e),r)}),qg=V(function(e,r,n,a){var t=o(ti,n,Ng),i=function(){var u=T(e,r);return u.a?u.b?En(g([t,fc()])):t:u.b?fc():z}(),c=No(a),l=c;return o(Jg,o(ya,ar,jo(a)),o(oi,A(l,l,l),i))}),Yg=$(function(e,r){return w(qg,!0,!0,e,r)}),Zg=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Xg=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Qg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Ju,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Zg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Al,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return x(Xg,n,a,t,i,c)}},Kg=Qg,Xu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(pg,t,r)]);case 1:var t=e.a,n=e.b;return g([o(kg,t,n)]);case 3:var t=e.a,a=e.b;return g([o(Yg,Kg(t),a)]);case 2:var t=e.a,i=e.b;return g([o(wg,t,i)]);case 4:var c=e.a,l=e.b;return g([o(Fg,bg(c),l)]);default:var u=e.a;return o(Io,Xu,u)}},eb=function(e){return o(Io,Xu,e)},rb=$(function(e,r){return s1({aL:Lp(e.eK),eN:e.eN,aM:zp(.5),ci:e.ci,aN:T(Gi(je(e.b3.f4)),Gi(je(e.b3.fc))),aS:eb(r),fP:!0,fX:o(Zu,zn(e.fW),zn(e.fY)),eA:Do})}),nb=$(function(e,r){return o(rb,{eK:p(Pp,46,46,46),eN:kl,ci:e.ci,b3:e.b3,fW:-Ni(15),fY:-Ni(45)},g([o(wp,e,r)]))}),ab=$(function(e,r){return o(q,g([H("w-full")]),g([o(q,g([H("absolute p-4 text-white80"),H("grid place-items-center w-full")]),g([o(q,L,g([vr("Swipe or press left/right arrow keys")]))])),o(nb,e,r)]))}),tb=p(Bm,ab,J0,Hm);const ob={Main:{init:tb(o(D,function(e){return Ae({fj:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f3:e})},o(k,"clock",fe))},o(k,"devicePixelRatio",fe))},o(k,"dt",fe))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ae({eG:d,eU:s,$7:v,e$:u,dF:l,fI:c,eo:i,fQ:t,ez:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",da(Ln)))},o(k,"left",Z))},o(k,"pressedKeys",da(Ln)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ae({$7:v,dB:u,fs:l,fM:c,fN:i,ez:t,f6:a,ga:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",fe))},o(k,"y",fe))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Ae({fc:n,f4:r})},o(k,"height",fe))},o(k,"width",fe))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Ae({eX:r,eY:e})},o(k,"deltaX",fe))},o(k,"deltaY",fe)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ib=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-F.clock;b<.009||(F.dt=b,F.clock=h,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},cb=()=>{dt("pointerdown"),dt("wheel"),dt("keydown")},dt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},lb=ob.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});cb();ib(lb);
