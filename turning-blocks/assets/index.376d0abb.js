const Ju=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ju();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ka(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function It(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Uu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ou=[];function Yu(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Ku=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+ev()),r});function ev(e){return"<internals>"}function tn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=gt(e,r,0,a);t&&(n=a.pop());t=gt(n.a,n.b,0,a));return t}function gt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&tn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=_i(e),r=_i(r));for(var t in e)if(!gt(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var rv=$(function(e,r){var n=U(e,r);return n<0?Nc:n?jf:jc}),Mn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var L={$:0};function ar(e,r){return{$:1,a:e,b:r}}var nv=$(ar);function h(e){for(var r=L,n=e.length;n--;)r=ar(e[n],r);return r}function Da(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var av=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Da(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return h(Da(r).sort(function(n,a){var t=o(e,n,a);return t===jc?0:t===Nc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var tv=$(Math.pow);$(function(e,r){return r%e});var ov=$(function(e,r){var n=r%e;return e===0?tn(11):n>0&&e<0||n<0&&e>0?n+e:n}),iv=Math.PI,cv=Math.cos,lv=Math.sin,uv=Math.tan;$(Math.atan2);function vv(e){return e}function $v(e){return e===1/0||e===-1/0}var fv=Math.ceil,sv=Math.floor,dv=Math.round,mv=Math.sqrt,ii=Math.log,pv=isNaN;function bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function _v(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function wv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var yv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),xv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),Tv=y(function(e,r,n){return n.slice(e,r)});function Cv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Lv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Pv=$(function(e,r){return r.indexOf(e)>-1}),zv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var kv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function sc(e){return e+""}function Mv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:ne(n==45?-r:r)}function Dv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ne(r):Y}function Av(e){return Da(e).join("")}function Bv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Fv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vv(e){return{$:0,a:e}}function Ut(e){return{$:2,b:e}}var Ev=Ut(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Rv=Ut(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),jv=Ut(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function Nv(e){return{$:3,b:e}}var Hv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Gv=$(function(e,r){return{$:10,b:r,h:e}}),Wv=$(function(e,r){return xr(e,[r])}),Xv=y(function(e,r,n){return xr(e,[r,n])});E(function(e,r,n,a){return xr(e,[r,n,a])});_e(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});ka(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});It(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return xe(o(oo,"This is not valid JSON! "+a.message,r))}});var dc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return Xn(r)?ci(e.b,r,h):Ze("a LIST",r);case 4:return Xn(r)?ci(e.b,r,Iv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Je(v)?v:xe(o(wi,n,v.a));case 7:var a=e.e;if(!Xn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Je(v)?v:xe(o(Hc,a,v.a));case 8:if(typeof r!="object"||r===null||Xn(r))return Ze("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Je(v))return xe(o(wi,i,v.a));t=ar(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Je(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Je(v)?je(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Je(v))return v;s=ar(v.a,s)}return xe(Nf(Fe(s)));case 1:return xe(o(oo,e.a,r));case 0:return ue(e.a)}}function ci(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Je(c))return xe(o(Hc,i,c.a));t[i]=c.a}return ue(n(t))}function Xn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Iv(e){return o(as,e.length,function(r){return e[r]})}function Ze(e,r){return xe(o(oo,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&li(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return li(e.g,r.g)}}function li(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var Jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function mc(e){return e}y(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Uv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Ov(e){return{$:5,b:e}}var Yv=0;function Ot(e){var r={$:0,e:Yv++,f:e,g:null,h:[]};return Yt(r),r}function pc(e){return dr(function(r){r(Nr(Ot(e)))})}function bc(e,r){e.h.push(r),Yt(e)}var qv=$(function(e,r){return dr(function(n){bc(e,r),n(Nr(Mn))})}),Za=!1,ui=[];function Yt(e){if(ui.push(e),!Za){for(Za=!0;e=ui.shift();)Zv(e);Za=!1}}function Zv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return qt(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function qt(e,r,n,a,t,i){var c=o(dc,e,r?r.flags:void 0);Je(c)||tn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Kv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),$i(l,b.b,t(v))}return $i(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function Kv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=e$(t,r)}return n}function Qv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function e$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ht,l,Ov(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ot(o(ht,l,e.b))}var r$=$(function(e,r){return dr(function(n){e.g(r),n(Nr(Mn))})});$(function(e,r){return o(qv,e.h,{$:0,a:r})});function gc(e){return function(r){return{$:1,k:e,l:r}}}function n$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var vi=[],Ka=!1;function $i(e,r,n){if(vi.push({p:e,q:r,r:n}),!Ka){Ka=!0;for(var a;a=vi.shift();)a$(a.p,a.q,a.r);Ka=!1}}function a$(e,r,n){var a={};va(!0,r,a,null),va(!1,n,a,null);for(var t in e)bc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function va(e,r,n,a){switch(r.$){case 1:var t=r.k,i=t$(e,t,a,r.l);n[t]=o$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)va(e,c.a,n,a);return;case 3:va(e,r.o,n,{s:r.n,t:a});return}}function t$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function o$(e,r,n){return n=n||{i:L,j:L},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function i$(e){rr[e]&&tn(3)}$(function(e,r){return r});function c$(e,r){return i$(e),rr[e]={f:l$,u:r,a:u$},gc(e)}var l$=$(function(e,r){return function(n){return e(r(n))}});function u$(e,r){var n=L,a=rr[e].u,t=Nr(null);rr[e].b=t,rr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(dc,a,c);Je(l)||tn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var $a,ur=typeof document!="undefined"?document:{};function Zt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function _t(e){return{$:0,a:e}}var hc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Kt(n),e:t,f:e,b:i}})}),mr=hc(void 0),v$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Kt(n),e:t,f:e,b:i}})}),$$=v$(void 0);function f$(e,r,n,a){return{$:3,d:Kt(e),g:r,h:n,i:a}}var s$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});y(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ka(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return Jt(e,r,n,a,t,i,c,l)})});It(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var _c=$(function(e,r){return{$:"a0",n:e,o:r}}),d$=$(function(e,r){return{$:"a1",n:e,o:r}}),wc=$(function(e,r){return{$:"a2",n:e,o:r}}),Dn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function m$(e){return e=="script"?"p":e}function p$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(_c,r.n,b$(e,r.o)):r});function b$(e,r){var n=vo(r);return{$:r.$,a:n?p(ts,n<3?g$:h$,De(e),r.a):o(ma,e,r.a)}}var g$=$(function(e,r){return z(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?fi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?fi(c,t,i):c[t]=i}return r}function fi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);$a&&e.c=="a"&&c.addEventListener("click",$a(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Zt(c,hr(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?_$(e,t):a==="a0"?x$(e,r,t):a==="a3"?w$(e,t):a==="a4"?y$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function _$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function w$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function y$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function x$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=S$(r,i),e.addEventListener(t,c,Qt&&{passive:vo(i)<2}),a[t]=c}}var Qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Qt=!0}}))}catch{}function S$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Je(i)){for(var c=vo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function T$(e,r){return e.$==r.$&&Or(e.a,r.a)}function yc(e,r){var n=[];return Ue(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ue(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=A$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ue(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){we(n,0,a,r);return}(f?!C$(d,m):d!==m)&&we(n,2,a,m),Ue(g,b,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:si(e,r,n,a,L$);return;case 2:si(e,r,n,a,P$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=eo(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function si(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=eo(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function eo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=eo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&T$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ue(s,i[v],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,T=b.b,M=void 0,H=void 0;if(w===x){f++,Ue(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,G=j.b;H=x===N}if(R){var F=R.a,q=R.b;M=w===F}if(M&&H){f++,Ue(_,q,t,f),$n(i,t,w,T,m,c),f+=_.b||0,f++,fn(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(M){f++,$n(i,t,x,T,m,c),Ue(_,q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(H){f++,fn(i,t,w,_,f),f+=_.b||0,f++,Ue(G,T,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,fn(i,t,w,_,f),$n(i,t,x,T,m,c),f+=_.b||0,f++,Ue(G,q,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;fn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];$n(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&we(n,8,a,{w:t,x:c,y:K})}var xc="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+xc,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ue(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}fn(e,r,n+xc,a,t)}function Sc(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Sc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=sn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Tc(e,r,n,a){return n.length===0?e:(Sc(e,r,n,a),fa(e,n))}function fa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return fa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=fa(e,i.w),e;case 8:return M$(e,r);case 5:return r.s(e);default:tn(10)}}function k$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function M$(e,r){var n=r.s,a=D$(n.y,r);e=fa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Zt(e,a),e}function D$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Zt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function ro(e){if(e.nodeType===3)return _t(e.textContent);if(e.nodeType!==1)return _t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Dn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=ar(ro(v[a]),u);return p(mr,l,r,u)}function A$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=E(function(e,r,n,a){return qt(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=ro(l);return Cc(i,function(v){var s=c(v),d=yc(u,s);l=Tc(l,u,d,t),u=s})})});E(function(e,r,n,a){return qt(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=ur.title,v=ur.body,s=ro(v);return Cc(i,function(d){$a=c;var m=l(d),f=mr("body")(L)(m.er),g=yc(s,f);v=Tc(v,s,g,t),s=f,$a=0,u!==m.fI&&(ur.title=u=m.fI)})})});var sa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Cc(e,r){r(e);var n=0;function a(){n=n===1?0:(sa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&sa(a),n=2)}}$(function(e,r){return o(so,$o,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(so,$o,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(so,$o,dr(function(){history.replaceState({},"",r),e()}))});var F$={addEventListener:function(){},removeEventListener:function(){}},V$=typeof window!="undefined"?window:F$;y(function(e,r,n){return pc(dr(function(a){function t(i){Ot(n(i))}return e.addEventListener(r,t,Qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Je(n)?ne(n.a):Y});function Lc(e,r){return dr(function(n){sa(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Uv(is(e)))})})}function E$(e){return dr(function(r){sa(function(){r(Nr(e()))})})}$(function(e,r){return Lc(r,function(n){return n[e](),Mn})});$(function(e,r){return E$(function(){return V$.scroll(e,r),Mn})});y(function(e,r,n){return Lc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var R$=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var j$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):Y}a.push(C(hl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):Y}return n(C(hl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var di=0;function Tn(e,r){for(;r.b;r=r.b)e(r.a)}function no(e){for(var r=0;e.b;e=e.b)r++;return r}var N$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},H$=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),G$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),W$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),X$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),I$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),J$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),U$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),O$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Y$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),q$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Z$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},K$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Q$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},zc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},ef=function(e){e.gl.disable(e.gl.CULL_FACE)},rf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},nf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},af=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},mi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],tf=[Z$,K$,Q$,Pc,zc,ef,rf,nf,af];function pi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function of(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function kc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function cf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][x]:w[T][x][_]})}var u=kc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(no(n.b)*s);Tn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function lf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=uf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*no(r.b),indexBuffer:null,buffers:{}}}function uf(e,r){var n=new Uint32Array(no(e)*r),a=0,t;return Tn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function bi(e,r){return e+"#"+r}var Mc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Pc(n),zc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=bi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=di++,v||(v=pi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=di++,s||(s=pi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=of(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=vf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=bi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),$f(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=lf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=cf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=kc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,x*T)}for(n.toggle=!n.toggle,Tn($0(n),i.a),u=0;u<mi.length;u++){var M=n[mi[u]];M.toggle!==n.toggle&&M.enabled&&(tf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Tn(t,e.g),r});function vf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(_);T||(T=_.eA(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function $f(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var ff=y(function(e,r,n){return f$(r,{g:n,f:{},h:e},hf,_f)}),sf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),df=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),mf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),pf=$(function(e,r){e.contextAttributes.antialias=!0}),bf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),gf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function hf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Tn(function(t){return o(v0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),N$(function(){return o(Mc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function _f(e,r){return r.f=e.f,Mc(r)}var wf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/yf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function yf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),gi=new Float64Array(3),hi=new Float64Array(3),xf=y(function(e,r,n){return new Float64Array([e,r,n])}),Sf=function(e){return e[0]},Tf=function(e){return e[1]},Cf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Lf=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Dc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Dc);function Ac(e,r,n){return n===void 0&&(n=new Float64Array(3)),da(Dc(e,r,n),n)}$(Ac);function Bc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function da(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Bc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Pf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),dn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(dn);function yt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(yt);$(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=dn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(dn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(dn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(dn(r,a)+e[14])/n,t});var zf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var kf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},Mf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Df(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Df(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Af=new Float64Array(16),Bf=new Float64Array(16),Ff=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Vf=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Fc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Fc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Fc(c,l,i,t,n,a)});function Vc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(Vc);E(function(e,r,n,a){return Vc(e,r,n,a,-1,1)});function Ec(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],T=r[0],M=r[1],H=r[2],j=r[3],R=r[4],N=r[5],G=r[6],F=r[7],q=r[8],K=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],ke=r[14],Te=r[15];return n[0]=a*T+l*M+d*H+b*j,n[1]=t*T+u*M+m*H+w*j,n[2]=i*T+v*M+f*H+x*j,n[3]=c*T+s*M+g*H+_*j,n[4]=a*R+l*N+d*G+b*F,n[5]=t*R+u*N+m*G+w*F,n[6]=i*R+v*N+f*G+x*F,n[7]=c*R+s*N+g*G+_*F,n[8]=a*q+l*K+d*ie+b*ve,n[9]=t*q+u*K+m*ie+w*ve,n[10]=i*q+v*K+f*ie+x*ve,n[11]=c*q+s*K+g*ie+_*ve,n[12]=a*oe+l*de+d*ke+b*Te,n[13]=t*oe+u*de+m*ke+w*Te,n[14]=i*oe+v*de+f*ke+x*Te,n[15]=c*oe+s*de+g*ke+_*Te,n}$(Ec);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],T=r[5],M=r[6],H=r[8],j=r[9],R=r[10],N=r[12],G=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*T+v*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*H+c*j+v*R,n[9]=t*H+l*j+s*R,n[10]=i*H+u*j+d*R,n[11]=0,n[12]=a*N+c*G+v*F+m,n[13]=t*N+l*G+s*F+f,n[14]=i*N+u*G+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=da(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Bc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,T=b-m,M=g-f,H=c*c*v+u,j=w+d,R=b+m,N=w-d,G=l*l*v+u,F=n[0],q=n[1],K=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],ke=n[7],Te=n[8],pr=n[9],br=n[10],qa=n[11],Gu=n[12],Wu=n[13],Xu=n[14],Iu=n[15];return a[0]=F*x+ve*_+Te*T,a[1]=q*x+oe*_+pr*T,a[2]=K*x+de*_+br*T,a[3]=ie*x+ke*_+qa*T,a[4]=F*M+ve*H+Te*j,a[5]=q*M+oe*H+pr*j,a[6]=K*M+de*H+br*j,a[7]=ie*M+ke*H+qa*j,a[8]=F*R+ve*N+Te*G,a[9]=q*R+oe*N+pr*G,a[10]=K*R+de*N+br*G,a[11]=ie*R+ke*N+qa*G,a[12]=Gu,a[13]=Wu,a[14]=Xu,a[15]=Iu,a});function Ef(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Ef);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Rf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Rf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Ac(e,r,ao),t=da(yt(n,a,gi),gi),i=da(yt(a,t,hi),hi),c=Af,l=Bf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Ec(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=nv,In=Qu,Rc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(In,e,l,v)}else{var u=c.a;return p(In,i,l,u)}});return p(In,i,p(In,e,r,t),a)}),to=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(to,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),_i=function(e){return p(to,y(function(r,n,a){return o(k,z(r,n),a)}),L,e)},jc=1,jf=2,Nc=0,xe=function(e){return{$:1,a:e}},oo=$(function(e,r){return{$:3,a:e,b:r}}),wi=$(function(e,r){return{$:0,a:e,b:r}}),Hc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Nf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},Y={$:1},Hf=Lv,Gf=Jv,Be=sc,kr=$(function(e,r){return o(Sv,e,Da(r))}),io=$(function(e,r){return h(o(xv,e,r))}),Gc=function(e){return o(kr,`
    `,o(io,`
`,e))},An=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Er=function(e){return p(An,$(function(r,n){return n+1}),0,e)},Wf=av,Xf=y(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Rr=$(function(e,r){return p(Xf,e,r,L)}),Wc=$(function(e,r){return p(Wf,e,o(Rr,0,Er(r)-1),r)}),nr=Bv,Xc=function(e){var r=nr(e);return 97<=r&&r<=122},Ic=function(e){var r=nr(e);return r<=90&&65<=r},If=function(e){return Xc(e)||Ic(e)},Jf=function(e){var r=nr(e);return r<=57&&48<=r},Uf=function(e){return Xc(e)||Ic(e)||Jf(e)},Fe=function(e){return p(An,k,L,e)},on=hv,Of=$(function(e,r){return`

(`+(Be(e+1)+(") "+Gc(Yf(r))))}),Yf=function(e){return o(qf,e,L)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=on(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return If(x)&&o(Hf,Uf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(kr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Er(s))+" ways:"));return o(kr,`

`,o(k,g,o(Wc,Of,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(kr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(kr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Gc(o(Gf,4,f))+(`

`+m))}}),Ve=32,xt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),St=Ou,co=fv,lo=$(function(e,r){return ii(r)/ii(e)}),Zf=vv,Cn=co(o(lo,2,Ve)),Jc=C(xt,0,Cn,St,St),Uc=qu,Oc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Yc=sv,Tt=Yu,ze=$(function(e,r){return U(e,r)>0?e:r}),Kf=function(e){return{$:0,a:e}},uo=Zu,Qf=$(function(e,r){e:for(;;){var n=o(uo,Ve,e),a=n.a,t=n.b,i=o(k,Kf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),es=function(e){var r=e.a;return r},rs=$(function(e,r){e:for(;;){var n=co(r/Ve);if(n===1)return o(uo,Ve,e).a;var a=o(Qf,e,L),t=n;e=a,r=t;continue e}}),qc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Yc(o(lo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(rs,t,r.l);return C(xt,Tt(r.p)+n,o(ze,5,a*Cn),i,r.p)}else return C(xt,Tt(r.p),Cn,St,r.p)}),ns=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(qc,!1,{z:a,l:n/Ve|0,p:t});var i=Oc(p(Uc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(k,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),as=$(function(e,r){if(e<=0)return Jc;var n=e%Ve,a=p(Uc,n,e-n,r),t=e-n-Ve;return S(ns,r,t,e,L,a)}),Je=function(e){return!e.$},A=Gv,Z=Ev,D=Hv,$e=Rv,ma=Wv,ts=Xv,De=Vv,vo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=mr("div"),os=function(e){return{$:2,a:e}},Zc=$(function(e,r){return e}),Kc=$(function(e,r){return{b1:r.b1,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),Dr=function(e){return e},is=Dr,yi=Xe(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),cs=Pv,Mr=_v,Yr=Tv,Bn=$(function(e,r){return e<1?r:p(Yr,e,Mr(r),r)}),Aa=kv,Ba=function(e){return e===""},Fa=$(function(e,r){return e<1?"":p(Yr,0,e,r)}),Qc=Mv,xi=_e(function(e,r,n,a,t){if(Ba(t)||o(cs,"@",t))return Y;var i=o(Aa,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Qc(o(Bn,c+1,t));if(l.$===1)return Y;var u=l;return ne(ye(yi,e,o(Fa,c,t),u,r,n,a))}else return ne(ye(yi,e,t,Y,r,n,a))}),Si=E(function(e,r,n,a){if(Ba(a))return Y;var t=o(Aa,"/",a);if(t.b){var i=t.a;return S(xi,e,o(Bn,i,a),r,n,o(Fa,i,a))}else return S(xi,e,"/",r,n,a)}),Ti=y(function(e,r,n){if(Ba(n))return Y;var a=o(Aa,"?",n);if(a.b){var t=a.a;return C(Si,e,ne(o(Bn,t+1,n)),r,o(Fa,t,n))}else return C(Si,e,Y,r,n)});$(function(e,r){if(Ba(r))return Y;var n=o(Aa,"#",r);if(n.b){var a=n.a;return p(Ti,e,ne(o(Bn,a+1,r)),o(Fa,a,r))}else return p(Ti,e,Y,r)});var ls=zv,$o=function(e){},Fn=Nr,us=Fn(0),el=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(An,e,r,Fe(d)):C(el,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=y(function(e,r,n){return C(el,e,r,0,n)}),re=$(function(e,r){return p(or,$(function(n,a){return o(k,e(n),a)}),L,r)}),pa=ht,fo=$(function(e,r){return o(pa,function(n){return Fn(e(n))},r)}),vs=y(function(e,r,n){return o(pa,function(a){return o(pa,function(t){return Fn(o(e,a,t))},n)},r)}),$s=function(e){return p(or,vs(k),Fn(L),e)},fs=r$,ss=$(function(e,r){var n=r;return pc(o(pa,fs(e),n))}),ds=y(function(e,r,n){return o(fo,function(a){return 0},$s(o(re,ss(e),r)))}),ms=y(function(e,r,n){return Fn(0)}),ps=$(function(e,r){var n=r;return o(fo,e,n)});rr.Task=Qv(us,ds,ms,ps);var bs=gc("Task"),so=$(function(e,r){return bs(o(fo,e,r))}),gs=B$,hs=bv,ba={$:1},rl=function(e){return{$:2,a:e}},Va={$:0},He=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),cn=function(e){var r=e.b.B;return r.a},_s=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(He,r,{B:i,ab:c,T:o(k,a,n)}))}else return Y},nl=function(e){var r=e.b;return o(He,Va,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ws=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?nl(n):n;case 2:var i=a.a.cR;return(U(i+r.eH,cn(n).b1)>0?o(te,_s,fr(o(He,ba,t))):Dr)(o(He,rl({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Kc,l.ey,Ke(r,{b1:l.b1+r.eH})),s=o(e,v,u);return o(He,Va,{B:z(v,s),ab:L,T:o(k,t.B,t.T)})}}),al=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ys=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),xs=$(function(e,r){return Fe(p(ys,e,r,L))}),tl=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(xs,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(tl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Ss=$(function(e,r){return p(tl,0,e,r)}),Ts=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(h([a]),t)),c=o(Ss,e,i),l=o(al,e,i);if(l.b){var u=l.a,v=l.b;return o(He,ba,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(He,ba,{B:d,ab:L,T:m})}else return r}}),Cs=function(e){var r=e.b;return o(He,ba,r)},Ls=function(e){var r=e.b;return o(He,rl({cR:cn(e).b1}),r)},Ps=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return nl(r);case 3:return Ls(r);default:var n=e.a;return o(Ts,n,r)}}),ol=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),zs=$(function(e,r){return Ke(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ms=function(e){return{$:2,a:e}},il=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return Y;var n=r.a;return ne(e(n))}),O=function(e){return e<0?-e:e},mo=Dv,As=y(function(e,r,n){return o(fr,0/0,mo(o(e,r,n)))}),cl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Bs=yv,ll=function(e){return p(Bs,k,L,e)},Fs=$(function(e,r){var n=o(cl,function(a){return a!=="0"&&a!=="."},ll(r));return le(e&&n?"-":"",r)}),pe=sc,Ct=gv,ul=Fv,vl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=on(n);if(a.$===1)return"01";var t=a.a;return o(Ct,"0",vl(t))}else{var i=nr(r);return i>=48&&i<57?o(Ct,ul(i+1),n):"0"}},Lt=$v,Vs=pv,Ea=function(e){return o(Ct,e,"")},$l=y(function(e,r,n){return e<=0?n:p($l,e>>1,le(r,r),e&1?le(n,r):n)}),Ln=$(function(e,r){return p($l,e,r,"")}),Pt=y(function(e,r,n){return le(n,o(Ln,e-Mr(n),Ea(r)))}),zt=wv,fl=function(e){var r=o(io,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Es=function(e){var r=o(io,"e",pe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,Qc(o(ls,"+",t)?o(Bn,1,t):t)),c=fl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(fr,"0",o(Ce,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ce,ol(Ea),on(le(o(Ln,O(i),"0"),v))))):p(Pt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Rs=y(function(e,r,n){if(Lt(n)||Vs(n))return pe(n);var a=n<0,t=fl(Es(O(n))),i=t.a,c=t.b,l=Mr(i)+r,u=le(o(Ln,-l+1,"0"),p(Pt,l,"0",le(i,c))),v=Mr(u),s=o(ze,1,l),d=o(e,a,p(Yr,s,v,u)),m=p(Yr,0,s,u),f=d?zt(o(fr,"1",o(Ce,vl,on(zt(m))))):m,g=Mr(f),b=f==="0"?f:r<=0?le(f,o(Ln,O(r),"0")):U(r,Mr(c))<0?p(Yr,0,g-r,f)+("."+p(Yr,g-r,g,f)):le(i+".",p(Pt,r,"0",c));return o(Fs,a,b)}),gn=Rs($(function(e,r){var n=on(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),js=As(gn),Ns=y(function(e,r,n){var a=o(lo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(js,t,n)}),sl=rv,po=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(sl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},en=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),kt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(sl,e,t);switch(u){case 0:return S(en,a,t,i,p(kt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(en,a,t,i,c,p(kt,e,r,l))}}),hn=y(function(e,r,n){var a=p(kt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Hs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},dl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},Ci=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},Gs=ka(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ci(r)}else break e;else return c.a,c.d,Ci(r);else break e;return r}}),na=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,na(t),l);var u=dl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,na(m),f)}else return tr}else return S(X,r,n,a,na(t),l)}else return tr},_n=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(_n,e,i),c);var u=dl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,o(_n,e,m),f)}else return tr}else return S(X,n,a,t,o(_n,e,i),c);else return o(Ws,e,Jt(Gs,e,r,n,a,t,i,c))}),Ws=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=Hs(c);if(l.$===-1){var u=l.b,v=l.c;return S(en,n,u,v,i,na(c))}else return tr}else return S(en,n,a,t,i,o(_n,e,c))}else return tr}),Xs=$(function(e,r){var n=o(_n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Jn=y(function(e,r,n){var a=r(o(po,e,n));if(a.$)return o(Xs,e,n);var t=a.a;return p(hn,e,t,n)}),Is=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ds,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(il,z(i,c),p(Ns,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){return a.$===2?Ms(n):a}))}},Js=function(e){return zs(Is(e))},Us=$(function(e,r){return o(re,Js(e),r)}),Os=$(function(e,r){return Ke(r,{ey:o(Us,e,r.ey)})}),Ys=$(function(e,r){var n=r.a,a=r.b;return o(He,n,Ke(a,{B:o(ol,Os(e),a.B)}))}),qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Zs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(He,a,Ke(t,{B:o(qs,o(e,i.a,r),i)}))}),Ks=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(ws,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Ys,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ps,l,a.G)})}}),Qs=$(function(e,r){return o(He,Va,{B:z(e,r(e)),ab:L,T:L})}),ed=n$,Li=ed(L),ga=Nv,Pn=jv,rd=c$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({b1:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return De({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",ga(Pn)))},o(D,"left",Z))},o(D,"pressedKeys",ga(Pn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return De({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return De({eV:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return De({eB:r,eC:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),nd=function(e){return{$:4,a:e}},ad={$:0},td=mc,Ie=$(function(e,r){return o(wc,e,td(r))}),J=Ie("className"),od=function(e){var r=e.b.B;return r.b},ha=Ie("id"),id=s$,_a=id,cd=d$,he=cd,ld={$:1},ud=function(e){return{$:3,a:e}},vd=function(e){return{$:5,a:e}},Pi=mr("a"),bo=mr("button"),$d=Dn("d"),ml=hc("http://www.w3.org/2000/svg"),fd=ml("path"),sd=ml("svg"),dd=Dn("viewBox"),wn=function(e){return o(sd,h([dd("0 0 100 100"),o(he,"width","100%"),o(he,"height","100%")]),h([o(fd,h([$d(e)]),L)]))},zi=function(e){return o(Ie,"href",p$(e))},Zr={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},md=function(e){return{$:0,a:e}},pl=_c,bl=$(function(e,r){return o(pl,e,md(r))}),go=function(e){return o(bl,"click",De(e))},ki=Ie("target"),pd=Ie("title"),Mt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Mt,e,i),o(Mt,e,c))}),bd=_t,ge=bd,gd=function(e){return p(to,y(function(r,n,a){return o(k,n,a)}),L,e)},hd=$(function(e,r){return{$:3,a:e,b:r}}),_d=$(function(e,r){return{$:2,a:e,b:r}}),wd=$(function(e,r){return{$:0,a:e,b:r}}),yd=$(function(e,r){return{$:1,a:e,b:r}}),Ra=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xd=C(Ra,0/255,0/255,0/255,1),Sd=mc,Td=$(function(e,r){return o(wc,e,Sd(r))}),Cd=Td("checked"),Oe=dv,Ld=y(function(e,r,n){return le(o(Ln,e-Mr(n),Ea(r)),n)}),wa=ov,gl=function(e){var r=function(n){return n<10?Be(n):Ea(ul(87+n))};return e<16?r(e):le(gl(e/16|0),r(o(wa,16,e)))},Pd=o(te,gl,o(Ld,2,"0")),ho=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b0:a,b7:n,cG:r}},zd=function(e){var r=ho(e),n=r.cG,a=r.b7,t=r.b0;return o(kr,"",o(k,"#",o(re,o(te,Oe,Pd),h([n*255,a*255,t*255]))))},Dt=Ie("htmlFor"),At=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),ya=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),kd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),_o=$(function(e,r){return p(or,kd(e),L,r)}),hl=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),Md=j$,Dd=Av,Ad=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Bd=R$,Fd=function(e){return o(Bd,{et:!1,fc:!1},e)},wo=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return Y},Vd=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),Ed=function(e){return{$:2,a:e}},Rd=function(e){return{$:0,a:e}},jd=function(e){return{$:1,a:e}},Qa=$(function(e,r){return nr(r)-nr(e)}),et=y(function(e,r,n){var a=nr(n);return U(nr(e),a)<1&&U(a,nr(r))<1}),Nd=$(function(e,r){var n=function(t){return U(t,e)<0?ue(t):xe(jd(r))},a=p(et,"0","9",r)?ue(o(Qa,"0",r)):p(et,"a","z",r)?ue(10+o(Qa,"a",r)):p(et,"A","Z",r)?ue(10+o(Qa,"A",r)):xe(Rd(r));return o(ya,n,a)}),_l=$(function(e,r){var n=on(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ya,function(c){return o(ya,function(l){return ue(c+l*e)},o(_l,e,i))},o(Nd,e,t))}),Hd=$(function(e,r){return 2<=e&&e<=36?o(_l,e,zt(r)):xe(Ed(e))}),Gd=Hd(16),Wd=y(function(e,r,n){return C(Ra,e,r,n,1)}),wl=E(function(e,r,n,a){return C(Ra,e,r,n,a)}),ln=tv,Xd=$(function(e,r){var n=o(ln,10,e);return Oe(r*n)/n}),Id=Cv,Jd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ll(n);if(a.b&&!a.b.b){var t=a.a;return Dd(h([t,t]))}else return n};return o(te,Id,o(te,function(n){return o(Ce,function(a){return p(Md,1,a,n)},Fd(e))},o(te,At(wo),o(te,Ce(function(n){return n.fD}),o(te,Ce(_o(Dr)),o(te,Ad("Parsing hex regex failed"),ya(function(n){var a=o(re,o(te,r,o(te,Gd,Vd(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(wl,t/255,c/255,u/255,o(Xd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Wd,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),xa=mr("input"),Bt=mr("label"),Ft=Ie("name"),yl=$(function(e,r){return p(or,D,r,e)}),Ud=o(yl,h(["target","checked"]),Z),Od=function(e){return o(bl,"change",o(ma,e,Ud))},Yd=function(e){return z(e,!0)},qd=function(e){return{$:1,a:e}},Zd=$(function(e,r){return o(pl,e,qd(r))}),Kd=o(yl,h(["target","value"]),Pn),yo=function(e){return o(Zd,"input",o(ma,Yd,o(ma,e,Kd)))},xl=Ie("max"),Sl=Ie("min"),Tl=function(e){return o(Ie,"step",e)},Sa=Ie("type"),xo=Ie("value"),Mi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,L,h([o(Bt,h([Dt(r)]),h([o(I,h([J("relative w-full")]),h([o(I,h([J("inline-block")]),h([ge(r)])),o(I,h([J("inline-block float-right")]),h([ge(pe(n))]))]))])),o(xa,h([Sa("range"),o(he,"width","100%"),ha(r),Ft(r),Sl(pe(a)),xl(pe(t)),xo(pe(n)),Tl(pe(i)),yo(o(te,mo,o(te,fr(42),c)))]),L)]))},Qd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),em=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([J("mb-2")]),h([o(Bt,h([Dt(e)]),h([ge(e)]))])),o(xa,h([Sa("checkbox"),ha(e),Ft(e),Od(hd(e)),Cd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Mi({b9:e,cl:i,cp:t,ct:wd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Mi({b9:e,cl:i,cp:t,ct:o(te,Oe,yd(e)),cP:1,cW:c});default:var c=r.a;return o(I,L,h([o(I,h([o(he,"margin-bottom","6px")]),h([o(Bt,h([Dt(e)]),h([ge(e)]))])),o(xa,h([Sa("color"),o(he,"width","100%"),o(he,"height","26px"),o(he,"padding","0px"),ha(e),Ft(e),yo(function(l){return o(_d,e,o(Qd,xd,Jd(l)))}),xo(zd(c))]),L)]))}}),rm=function(e){return o(I,h([J("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([J("text-lg pb-2")]),h([ge(e.fd)])),o(I,h([J("pl-2 pr-2")]),gd(o(Mt,em,e.av)))]))},nm=function(e){return o(I,h([J("text-xs text-white60")]),o(re,rm,e))},am=function(e){return o(I,h([J("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ge("clock: "+o(gn,3,cn(e).b1))]))},tm=function(e){e.a;var r=e.b.T;return o(Ce,function(n){return Oe(60/(cn(e).b1-n))},o(Ce,o(te,es,function(n){return n.b1}),wo(o(al,59,r))))},om=function(e){return o(I,h([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=tm(e);if(r.$===1)return h([ge("... Fps")]);var n=r.a;return h([ge(Be(n)+" Fps")])}())},im=function(e){return{$:0,a:e}},cm=function(e){var r=e.b.T;return Er(r)},lm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Er(r)+1+Er(n)},um=function(e){return o(xa,h([J("absolute left-[100px] w-[490px]"),Sa("range"),Sl(Be(0)),xl(Be(lm(e)-1)),xo(Be(cm(e))),Tl(Be(1)),yo(o(te,mo,o(te,fr(42),o(te,Oe,im))))]),L)},Di={$:1},vm={$:3},$m={$:2},Cl=function(e){return!e.b},Ai=$(function(e,r){return o(bo,h([J("px-2 bg-black40"),J(r),go(e)]),h([ge("REC")]))}),Bi=$(function(e,r){return o(bo,h([J("absolute left-[60px] mx-1 px-1 bg-black40"),go(r)]),h([o(I,h([J("w-4 h-6 fill-white80")]),h([wn(e)]))]))}),fm=function(e){var r=e.a,n=e.b.ab;return o(I,h([J("py-1")]),h([function(){switch(r.$){case 0:return o(Ai,Di,"text-red-500 font-bold");case 1:return o(Ai,$m,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return Cl(n)?o(I,L,L):o(Bi,Zr.fm,vm);default:return o(Bi,Zr.fl,Di)}}()]))},sm=function(e){return o(I,h([J("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([um(e),fm(e),om(e),am(e)]))},Ll=function(e){return o(kr,"",e)},dm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(or,t,L,a);return o(k,n,i)}else return L}),mm=function(e){var r=e.a;return wr(r,Va)},Pr=mr("p"),pm=mr("pre"),bm=$(function(e,r){var n=mm(r.G)?o(I,L,L):o(I,h([J("absolute pointer-events-none w-8 h-8"),o(he,"left",pe(e.fn.fT+.5*e.cM.fR)+"px"),o(he,"top",pe(-e.fn.fX+.5*e.cM.eV)+"px")]),h([o(I,h([J(e.fn.e1?"fill-black80":"fill-white40")]),h([wn(Zr.fn)]))]));return o(I,L,h([n,o(pm,h([J("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Pr,L,h([ge("pressedKeys: "+Ll(o(dm," ",e.e4.fo)))])),o(Pr,L,h([ge("delta time: "+o(gn,4,e.eH))])),o(Pr,L,h([ge("pointer is down: "+(e.fn.e1?"yes":"no"))])),o(Pr,L,h([ge("pointer.x: "+o(gn,2,e.fn.fT))])),o(Pr,L,h([ge("pointer.y: "+o(gn,2,e.fn.fX))])),o(Pr,L,h([ge("wheel deltaX: "+pe(e.fP.eB))])),o(Pr,L,h([ge("wheel deltaY: "+pe(e.fP.eC))]))]))]))}),gm=$(function(e,r){var n=o(bo,h([J(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),go(ld),pd("Distraction Free Mode")]),h([wn(Zr.f$)])),a=o(I,h([J("absolute w-8 bottom-12")]),h([o(Pi,h([J("fill-twitterBlue40 hover:fill-twitterBlue"),zi("https://twitter.com/AzizErkalSelman"),ki("_blank")]),h([wn(Zr.fK)]))])),t=o(I,h([J("absolute w-8 bottom-2")]),h([o(Pi,h([J("fill-githubCat40 hover:fill-githubCat"),zi("https://github.com/erkal/elm-3d-playground-exploration"),ki("_blank")]),h([wn(Zr.eP)]))]));return r.aL?o(I,h([J("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([J("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([J("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(_a,ud,nm(cn(r.G).ey))])),o(_a,vd,sm(r.G)),o(bm,e,r)]))}),hm=y(function(e,r,n){var a=od(n.G),t=cn(n.G);return o(I,h([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(he,"width",pe(t.cM.fR)+"px"),o(he,"height",pe(t.cM.eV)+"px")]),h([o(I,h([J("fixed")]),h([o(_a,Zc(ad),o(e,t,a))])),o(I,h([ha("gui")]),h([o(gm,t,n),o(I,h([J("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(_a,nd,o(r,t,a))]))]))]))}),_m=Xe(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(Ks,r,i,u,v),Li)}),l=function(u){var v=o(Kc,n,u.e0);return z({aL:u.e0.cM.fR<500,G:o(Qs,v,a)},Li)};return gs({e$:l,fE:Zc(rd(os)),fL:c,fO:o(hm,e,t)})}),wm=E(function(e,r,n,a){return ye(_m,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),ym=function(e){return{}},xm=y(function(e,r,n){return{av:n,e2:r,fd:e}}),Pl=tr,Sm=function(e){return p(An,$(function(r,n){var a=r.a,t=r.b;return p(hn,a,t,n)}),Pl,e)},Tm=y(function(e,r,n){return p(xm,e,r,Sm(n))}),Fi=Tm,Un=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(il,z(a,t),n))}),Cm=h([p(Fi,"Parameters",!0,h([p(Un,"a",z(0,3),1)])),p(Fi,"Colors and light",!0,h([p(Un,"lux",z(2,5),5),p(Un,"intensity above",z(0,300),60),p(Un,"intensity below",z(0,300),290)]))]),Lm=$(function(e,r){return r}),rn=iv,sr=function(e){return e},mn=function(e){return sr(rn*(e/180))},gr=mv,Pm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ze,O(c),o(ze,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=gr(s*s+v*v+u*u);return ne({fT:s/d,fX:v/d,c$:u/d})}else return Y}),aa=function(e){return e},So=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),ta=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=gr(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c$:a/c})}else return Y},Ta=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),zm=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),zl=$(function(e,r){var n=e,a=r;return U(a,n)>0}),km=$(function(e,r){var n=e,a=r;return U(a,n)<0}),Mm=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Dm=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),Am=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Qe=0,kl={fT:0,fX:0,c$:0},Bm=y(function(e,r,n){return o(At,function(a){var t=o(Mm,o(Dm,a,r),r);return o(At,function(i){var c=o(So,r,e),l=o(zm,n,c),u=o(zl,Qe,l)?c:o(km,Qe,l)?Am(c):kl;return o(Ce,function(v){return B(a,i,v)},ta(u))},ta(t))},ta(e))}),Fm=function(e){var r=e,n=O(r.c$),a=O(r.fX),t=O(r.fT);if(U(t,a)<1)if(U(t,n)<1){var i=gr(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=gr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(U(a,n)<1){var i=gr(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=gr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},To=function(e){var r=Fm(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return z(r,c)},qr=function(e){var r=e;return r},Ye=function(e){return e},Vm=$(function(e,r){var n=To(e),a=n.a,t=n.b;return Ye({cu:r,cZ:a,c_:t,c0:e})}),Em=function(e){var r=o(Ta,e.aR,e.dc),n=qr(e.ee),a=o(So,r,n),t=p(Bm,r,n,a);if(t.$){var v=ta(r);if(v.$){var d=To(e.ee),m=d.a,f=d.b;return Ye({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Vm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Ye({cu:e.dc,cZ:u,c_:l,c0:c})}},Ne={fT:0,fX:0,c$:0},Rm=function(e){return{$:0,a:e}},se=function(e){var r=e;return O(r)},oa=function(e){var r=e;return .5*r},jm=uv,Nm=function(e){var r=e;return jm(r)},Hm=function(e){var r=oa(se(e.ef)),n=Nm(r);return{cF:Rm(n),cX:e.cX}},vr=function(e){return e},Co=vr({fT:0,fX:1,c$:0}),Gm=function(e){var r=e.aR,n=e.dc,a=e.ee;return Hm({ef:mn(40),cX:Em({dc:aa(n),aR:aa(r),ee:o(fr,Co,o(Pm,Ne,aa(a)))})})},jr=cv,Wm=$(function(e,r){return(r-Yc(r/e)*e)/e}),Xm=function(e){return 2*rn*e},Ml=E(function(e,r,n,a){return e+(r-e)*(1+jr(Xm(o(Wm,n,a))))/2}),Im=function(e){return Gm({dc:{fT:10,fX:C(Ml,-20,20,20,e.b1),c$:60},aR:{fT:0,fX:0,c$:0},ee:{fT:0,fX:1,c$:0}})},Lo=function(e){return e},Dl=y(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),Jm=function(e){var r=e;return r},Um=function(e){var r=p(Dl,1667,25e3,Jm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Lo({fT:n,fX:a})},Om=function(e){return e},Ym=function(e){return{$:0,a:e}},qm=Ym,Zm={$:3},Km=Zm,Qm=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),e0=Qm,r0=$(function(e,r){return r.b?p(or,k,r,e):e}),Ge=function(e){return p(or,r0,L,e)},Po=$(function(e,r){return Ge(o(re,e,r))}),n0=function(e){return{$:1,a:e}},a0=n0,t0=function(e){return o(Dn,"height",Be(e))},o0=function(e){return $$(m$(e))},i0=o0,c0=function(e){return{$:2,a:e}},l0=c0,u0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return Ll(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},v0=$(function(e,r){switch(r.$){case 0:return o(sf,e,r);case 1:return o(df,e,r);case 2:return o(mf,e,r);case 3:return o(pf,e,r);case 4:return o(bf,e,r);default:return o(gf,e,r)}}),$0=$(function(e,r){switch(r.$){case 0:return o(G$,e,r);case 1:return o(W$,e,r);case 2:return o(X$,e,r);case 3:return o(I$,e,r);case 4:return o(J$,e,r);case 5:return o(U$,e,r);case 6:return o(O$,e,r);case 7:return o(Y$,e,r);default:return q$(e)}}),f0=y(function(e,r,n){return p(ff,e,r,n)}),Vi=function(e){var r=e;return r},un=zf,rt=C(un,1,1,1,1),qe=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),s0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),d0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(s0,n*a/t,n,n*(1-a-t)/t)}),Vn=xf,m0=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ja=$(function(e,r){return m0(o(d0,e,r))}),Al=$(function(e,r){return{dk:wr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bV,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bV,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bV,bV:e.bV*r.bV}}),er=Ff,p0=function(e){return er({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},nt=_e(function(e,r,n,a,t){var i=a.dk?1:-1,c=C(un,a.bV,a.bV,a.bV,i);return ye(t,e,c,p0(a),a.dk,r,n)}),Bl=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Al,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(nt,e,r,n,a,g),i.M);return{M:b,U:i.U,fx:i.fx};case 3:var w=t.b,x=o(k,S(nt,e,r,n,a,w),i.U);return{M:i.M,U:x,fx:i.fx};case 2:var _=t.a,T=o(k,S(nt,e,r,n,a,_),i.fx);return{M:i.M,U:i.U,fx:T};default:var M=t.a;return p(An,C(Bl,e,r,n,a),i,M)}}),b0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Fl=b0,zo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),g0=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,518,r,n,a)},h0=$(function(e,r){return{$:6,a:e,b:r}}),_0=h0,Vl=h([g0({V:1,W:0,Z:!1}),C(Fl,!1,!1,!1,!1),o(_0,0,1)]),nn=519,ko=8,El=15,Kr=7681,w0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=H$,y0=$(function(e,r){return{$:0,a:e,b:r}}),x0=y0({c8:1,dh:0,dQ:5}),Ae=wf,S0=x0(h([{dY:o(Ae,-1,-1)},{dY:o(Ae,1,-1)},{dY:o(Ae,-1,1)},{dY:o(Ae,1,1)}])),T0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},C0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Mo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(C0,a,t,i)))}),Do=function(e){return p(Mo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Ao=function(e){return S(ae,h([Do(e),C(Fl,!1,!1,!1,!1)]),T0,w0,S0,{})},L0=Ao({a8:Kr,ci:0,cH:ko,bl:nn,cY:El,bt:Kr,bu:Kr}),P0=516,Ei=5386,Se=7680,z0=function(e){return o(ln,2,e+4)},Rl=function(e){return Ao({a8:Se,ci:El,cH:ko,bl:P0,cY:z0(e),bt:Ei,bu:Ei})},k0=y(function(e,r,n){return Ge(h([p(qe,e,n,Vl),h([Rl(r),L0])]))}),M0=$(function(e,r){return Ge(o(Wc,k0(e),r))}),D0=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,513,r,n,a)},A0=D0({V:1,W:0,Z:!0}),B0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},F0=function(e){var r=e.bT,n=e.bE,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return B0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},V0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ri=$(function(e,r){var n=e,a=r;return p(V0,32774,n,a)}),E0=1,ji=771,R0=770,Bo=F0({bv:0,aH:o(Ri,E0,ji),by:0,bA:o(Ri,R0,ji),bE:0,bT:0}),Ir=h([A0,Bo]),j0=function(e){var r=e;return r.dJ},N0=function(e){var r=e;return r.dK},jl=function(e){var r=e;return r.dL},H0=function(e){var r=e;return r.dM},G0=function(e){var r=e;return r.dN},Nl=function(e){var r=e;return r.dO},$r=$(function(e,r){var n=e,a=r;return a-n}),Hl=function(e){return B(o($r,H0(e),j0(e)),o($r,G0(e),N0(e)),o($r,Nl(e),jl(e)))},Hr=function(e){var r=e;return r.cu},Ni=function(e){var r=e;return Hr(r)},W0=function(e){return e},X0=function(e){return Ye({cu:W0({fT:e.H,fX:e.I,c$:e.J}),cZ:vr({fT:e.q,fX:e.r,c$:e.s}),c_:vr({fT:e.t,fX:e.u,c$:e.v}),c0:vr({fT:e.w,fX:e.x,c$:e.y})})},at=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),Gl=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Tr=function(e){var r=e;return r.cZ},Cr=function(e){var r=e;return r.c_},Lr=function(e){var r=e;return r.c0},Wl=$(function(e,r){return{cu:o(Gl,e,Hr(r)),cZ:o(at,e,Tr(r)),c_:o(at,e,Cr(r)),c0:o(at,e,Lr(r))}}),Vt=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),Ca=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ze,n,a)}),ia=$(function(e,r){return U(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ia,n,a)}),I0=$(function(e,r){var n=Ca(r),a=Ca(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),We=function(e){var r=e;return r},J0=function(e){var r=e;return B(r.fT,r.fX,r.c$)},yn=$(function(e,r){var n=e,a=r;return a+n}),U0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=oa(se(a)),c=oa(se(n)),l=oa(se(t)),u=J0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(yn,c,v),dK:o(yn,i,s),dL:o(yn,l,d),dM:o($r,c,v),dN:o($r,i,s),dO:o($r,l,d)}}),Hi=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=We(Lr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c$),f=We(Cr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c$),b=We(Tr(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c$),x=o(U0,B(w,g,m),o(Gl,e,p(Vt,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(I0,_,x))}),Et=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Hi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Hi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Et,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Wl,X0(v),e),m=r*v.bV,f=e,g=r,b=C(Et,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Gr=Sf,Wr=Tf,Xr=Cf,Xl=function(e){return{$:4,a:e}},O0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Xl(o(O0,e,L))},Y0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bV:1},q0=function(e){var r=e;return r},Gi=Ao({a8:Kr,ci:0,cH:ko,bl:nn,cY:255,bt:Kr,bu:Kr}),Z0=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=gr(i*i+t*t+a*a);return c*n}else return Qe},Me={by:0,eu:!1,bE:0,cD:0,bT:0,cT:0,fT:0,fX:0,c$:0},Re=$(function(e,r){var n=e,a=r;return er({ds:n.fT,dt:n.bT,du:a.fT,dv:a.bT,dw:n.fX,dx:n.bE,dy:a.fX,dz:a.bE,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),pn=z({bd:o(Re,Me,Me),bJ:o(Re,Me,Me),bK:o(Re,Me,Me),bL:o(Re,Me,Me)},C(un,0,0,0,0)),Q=$(function(e,r){var n=r;return e*n}),Wi=function(e){var r=e;return-r},Il=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,515,r,n,a)},Ul=240,K0=h([Jl({V:1,W:0,Z:!0}),Do({a8:Se,ci:Ul,cH:0,bl:Il,cY:0,bt:Se,bu:Se}),Bo]),Q0=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=se(a),l=c,u=se(t),v=u,s=n.cF;if(s.$){var m=s.a;return Lt(v)?er({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):er({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return Lt(v)?er({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):er({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),On=$(function(e,r){return(1&e>>r)===1?0:1}),ep=function(e){return h([Jl({V:1,W:0,Z:!0}),Do({a8:Se,ci:Ul,cH:e,bl:Il,cY:0,bt:Se,bu:Se}),Bo])},rp=y(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=C(un,o(On,a,0),o(On,a,1),o(On,a,2),o(On,a,3));return p(qe,e,z(r,i),ep(t))},o(Rr,1,o(ln,2,n)-1)))}),_r=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Qr=function(e){var r=e;return r},np=Vf,Xi=function(e){var r=e;return _r(Lr(r))},Ol=vr({fT:1,fX:0,c$:0}),Fo=Ol,Vo=Co,Eo=vr({fT:0,fX:0,c$:1}),Yl=Eo,ap={cu:Ne,cZ:Fo,c_:Vo,c0:Yl},Rn=function(e){var r=e;return r},tp=function(e){var r=Rn(Hr(e)),n=We(Lr(e)),a=We(Cr(e)),t=We(Tr(e));return er({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},op=$(function(e,r){var n=r;return tp(o(Wl,n,e))}),ip=function(e){return o(op,ap,e)},cp=function(e){var r=e;return r.cX},lp=function(e){var r=e;return Tr(r)},up=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),vp=function(e){var r=e;return Cr(r)},$p=function(e){var r=cp(e.es),n=Ye({cu:Ni(r),cZ:lp(r),c_:vp(r),c0:_r(Xi(r))}),a=En(e.aP),t=a,i=C(Et,n,1,Y,h([t]));if(i.$===1)return L;var c=i.a,l=ip(r),u=o(Q,.99,o(ce,se(e.ex),Wi(jl(c)))),v=Hl(c),s=v.a,d=v.b,m=v.c,f=Z0(p(up,s,d,m)),g=o(Q,1.01,o(yn,f,Wi(Nl(c)))),b=o(Q0,e.es,{en:e.en,eO:g,fe:u}),w=np(b).dH,x=w?We(_r(Xi(r))):Qr(Ni(r)),_=function(){var oe=e.fJ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),T=_.a,M=_.b,H=e.eM,j=H,R=o(ja,j,e.fQ),N=R,G=er({ds:0,dt:x.fT,du:Gr(N),dv:e.d8,dw:0,dx:x.fX,dy:Wr(N),dz:q0(f),dA:0,dB:x.c$,dC:Xr(N),dD:T,dE:0,dF:w,dG:0,dH:M}),F=ye(Bl,G,l,b,Y0,t,{M:L,U:L,fx:L}),q=e.e8;switch(q.$){case 0:var K=q.a;return Ge(h([p(qe,F.M,z(K,rt),Ir),p(qe,F.U,pn,Ir)]));case 1:var K=q.a;return Ge(h([p(qe,F.M,pn,Ir),h([Gi]),p(qe,F.fx,K.bd,Vl),h([Rl(0)]),p(qe,F.M,z(K,rt),K0),p(qe,F.U,pn,Ir)]));default:var ie=q.a,ve=q.b;return Ge(h([p(qe,F.M,z(ve,rt),Ir),h([Gi]),o(M0,F.fx,ie),p(rp,F.M,ve,Er(ie)),p(qe,F.U,pn,Ir)]))}},fp=function(e){return o(Dn,"width",Be(e))},sp=$(function(e,r){var n=h([a0(1),l0(0),qm(!0),C(e0,0,0,0,0)]),a=function(){var T=e.el;switch(T.$){case 0:return B(n,"0",1);case 1:return B(o(k,Km,n),"1",1);default:var M=T.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Vi(v),d=o(he,"height",Be(s)+"px"),m=Vi(u),f=m/s,g=o(Po,function(T){return $p({en:f,es:e.es,ex:e.ex,aP:T.aP,eM:T.eM,e8:T.e8,d8:c,fJ:T.fJ,fQ:T.fQ})},r),b=o(he,"width",Be(m)+"px"),w=e.aI,x=w,_=u0(x);return p(i0,"div",h([o(he,"padding","0px"),b,d]),h([z(i,p(f0,t,h([fp(Oe(m*c)),t0(Oe(s*c)),b,d,o(he,"display","block"),o(he,"background-color",_)]),g))]))}),dp=function(e){return{$:2,a:e}},mp=function(e){return dp(e)},pp=function(e){return o(sp,{el:mp(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},h([{aP:e.aP,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},Ii=function(e){return e},Ar=function(e){return e},bp=function(e){var r=e;return r},Na=function(e){var r=e;return bp(r.eo)},ql=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),gp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Zl=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Kl=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),hp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),_p=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),wp=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ro=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(wp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(ql,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(gp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Zl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(_p,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(Kl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(hp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},jo={$:0},yp=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Ca(c(u)),d=o(fe,s.dM,e),m=o(ce,s.dJ,r),f=o(fe,s.dN,n),g=o(ce,s.dK,a),b=o(fe,s.dO,t),w=o(ce,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),xp=y(function(e,r,n){var a=Ca(e(r));return Ma(yp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),tt=$(function(e,r){var n=e,a=r;return U(a,n)<1}),Ql=function(e){return o(tt,e.dJ,e.dM)&&o(tt,e.dK,e.dN)&&o(tt,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},zn=function(e){var r=e;return r},Br=function(e){var r=e;return r.fT},Fr=function(e){var r=e;return r.fX},Vr=function(e){var r=e;return r.c$},eu=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Br(n),c=Fr(n),l=Vr(n),u=Br(a),v=Fr(a),s=Vr(a),d=Br(t),m=Fr(t),f=Vr(t);return Ql({dJ:o(ce,i,o(ce,u,d)),dK:o(ce,c,o(ce,v,m)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,d)),dN:o(fe,c,o(fe,v,m)),dO:o(fe,l,o(fe,s,f))})},ru=Lf,Le=function(e){return ru(Rn(e))},nu=function(e){var r=e;return r},Ha=function(e){return ru(nu(e))},au=function(e){return e},Sp=$(function(e,r){var n=e,a=r,t=o(ze,O(a.fT),o(ze,O(a.fX),O(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=gr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return kl}),Tp=Sp(au(1)),tu=y(function(e,r,n){var a=o(Ta,r,n),t=o(Ta,e,r);return Tp(o(So,a,t))}),Cp=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Ha(p(tu,n,a,t));return B({o:i,dY:Le(n)},{o:i,dY:Le(a)},{o:i,dY:Le(t)})},Lp=$(function(e,r){return{$:2,a:e,b:r}}),ou=Lp({c8:3,dh:0,dQ:4}),Pp=function(e){if(e.b){var r=e.a,n=e.b,a=ou(o(re,Cp,e)),t=p(xp,eu,r,n);return C(ql,t,e,a,0)}else return jo},Ee=y(function(e,r,n){return B(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),iu=function(){var e=Ar(1),r=Ar(1),n=Ar(1),a=o(Q,-.5,e),t=o(Q,-.5,r),i=o(Q,-.5,n),c=p(me,i,t,a),l=o(Q,.5,e),u=p(me,i,t,l),v=o(Q,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(Q,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Ro(Pp(h([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),Yn={$:0},zp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),kp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ha(p(tu,u,l,c)),s={o:v,dY:Le(u)},d={o:v,dY:Le(l)},m={o:v,dY:Le(c)};return o(k,s,o(k,d,o(k,m,n)))}),No=function(e){var r=e;return r.D},Mp=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return ne(p(e,t,i,c))}),Rt=4294967295>>>32-Cn,jt=Ku,Dp=y(function(e,r,n){e:for(;;){var a=Rt&r>>>e,t=o(jt,a,n);if(t.$){var v=t.a;return o(jt,Rt&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Ap=function(e){return e>>>5<<5},Bp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?Y:U(e,Ap(n))>-1?ne(o(jt,Rt&e,i)):ne(p(Dp,a,e,t))}),Ho=function(e){var r=e;return r.ah},ot=$(function(e,r){return o(Bp,e,Ho(r))}),Fp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(Mp,y(function(c,l,u){return B(c,l,u)}),o(ot,a,e),o(ot,t,e),o(ot,i,e))};return o(_o,r,No(e))},Vp=y(function(e,r,n){e:for(;;){var a=o(uo,Ve,e),t=a.a,i=a.b;if(U(Tt(t),Ve)<0)return o(qc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Oc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(Vp,e,L,0):Jc},Ep=y(function(e,r,n){return e(r(n))}),Rp=$(function(e,r){return!o(cl,o(Ep,hs,e),r)}),jp=$(function(e,r){return p(or,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),Np=function(e){var r=e.a;return r},cu=$(function(e,r){var n=Np(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(Rp,a,r)?{D:r,ah:e}:{D:o(jp,a,r),ah:e}}),Hp=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=Hp({c8:1,dh:3,dQ:4}),ca=$(function(e,r){var n=Qr(r),a=Qr(e);return z(B(a.fT,a.fX,a.c$),B(n.fT,n.fX,n.c$))}),Ji=p(Vn,0,0,0),it=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(po,o(ca,e,r),t);if(v.$){var d={o:Ji,dY:Le(r)},m={o:Ji,dY:Le(e)},f=u+1,g=u;return B(o(k,B(n,g,f),o(k,B(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=v.a;return B(o(k,B(n,s,a),c),l,u)}}),Gp=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,T=a+3,M=ye(it,s,m,f,b,r,ye(it,d,s,g,f,r,ye(it,m,d,b,g,r,t)));e=w,r=x,n=_,a=T,t=M;continue e}else{var H=t,j=H.a,R=H.b;return z(j,Fe(R))}}),Wp=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(hn,o(ca,m,s),f,p(hn,o(ca,s,d),g,p(hn,o(ca,d,m),b,t))),x=o(k,B(b,g,f),a),_=e,T=v,M=n+3,H=x,j=w;e=_,r=T,n=M,a=H,t=j;continue e}else return B(a,t,n)}),zr=y(function(e,r,n){var a=Fp(n),t=p(or,kp(r),L,a),i=S(Wp,r,a,0,L,Pl),c=i.a,l=i.b,u=i.c,v=S(Gp,r,l,a,0,B(c,L,u)),s=v.a,d=v.b,m=Cl(d)?t:le(t,d);return p(zp,e,o(cu,Go(m),s),o(jn,m,s))}),Nt=function(e){return{D:o(re,function(r){return B(3*r,3*r+1,3*r+2)},o(Rr,0,Er(e)-1)),ah:Go(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},lu=function(e){switch(e.$){case 0:return Yn;case 1:var a=e.a,r=e.b,n=o(re,zn,r);return p(zr,a,Dr,Nt(n));case 2:var a=e.a,r=e.b,n=o(re,zn,r);return p(zr,a,Dr,Nt(n));case 3:var a=e.a,t=e.b;return p(zr,a,Dr,t);case 4:var a=e.a,t=e.b;return p(zr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(zr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(zr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(zr,a,function(i){return i.dY},t);case 8:return Yn;case 9:return Yn;default:return Yn}},Ui=lu(iu),Ga=function(e){var r=e;return r.aK},uu={$:0},P=uu,be=$(function(e,r){return{$:1,a:e,b:r}}),Xp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Ip=1029,Jp=function(e){return{$:5,a:e}},vu=function(e){var r=e;return Jp(r)},Up=vu(Ip),Op=1028,Yp=vu(Op),Pe=y(function(e,r,n){return r===1?e?o(k,Up,n):o(k,Yp,n):n}),$u={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ct=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Pe,l,a,d),$u,Xp,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},fu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Pe,l,a,d),fu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),su=$(function(e,r){return{$:3,a:e,b:r}}),qp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bR",sceneProperties:"e"}},du={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bR",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Zp=E(function(e,r,n,a){return o(su,n,ee(function(t,i,c,l,u,v,s,d){return S(ae,d,du,qp,a,{aw:e,b:c,c:i,bR:r,d:v,e:t,f:u})}))}),Xo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Wa=Pf,cr=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Pe,u,t,m),fu,Xo,a,{aN:o(Wa,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),Kp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bR",sceneProperties:"e"}},Qp=_e(function(e,r,n,a,t){return o(su,a,ee(function(i,c,l,u,v,s,d,m){return S(ae,m,du,Kp,t,{aN:o(Wa,Nn(r),e),b:l,c,bR:n,d:s,e:i,f:v})}))}),mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},pu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Pe,l,a,d),pu,mu,n,{P:f,bd:m.bd,bJ:m.bJ,bK:m.bK,bL:m.bL,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},e3=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Pe,v,i,f),gu,bu,t,{P:b,bd:g.bd,bJ:g.bJ,bK:g.bK,bL:g.bL,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),hu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b$",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},r3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,ee(function(d,m,f,g,b,w,x,_){var T=x.a,M=x.b;return S(ae,p(Pe,g,s,_),gu,hu,v,{b$:e,b2:r,b3:i,b4:a,P:M,bd:T.bd,bJ:T.bJ,bK:T.bK,bL:T.bL,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},_u={src:`
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
    `,attributes:{},uniforms:{baseColor:"b_",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},Zn=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Pe,v,i,f),pu,_u,t,{b_:e,P:b,bd:g.bd,bJ:g.bJ,bK:g.bK,bL:g.bL,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),n3=function(e){return{$:0,a:e}},Oi=$(function(e,r){return{$:1,a:e,b:r}}),xn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),a3=function(e){return C(un,Gr(e),Wr(e),Xr(e),1)},Io=C(un,0,0,0,0),la=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Io)}else{var n=r.a;return z(e,a3(n))}}),wu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Oi,z(t,Io),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Oi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,n3(a)}}),t3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Kn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),o3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),i3=function(e){return o(Ae,e,1)},Ht=o(Ae,0,0),Jr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ht)}else{var n=r.a;return z(e,i3(n))}}),yu=E(function(e,r,n,a){var t=C(o3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Kn,z(u,Io),o(Jr,u,r),o(Jr,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Kn,o(la,u,e),z(u,Ht),o(Jr,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Kn,o(la,u,e),o(Jr,u,r),z(u,Ht),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Kn,o(la,u,e),o(Jr,u,r),o(Jr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(t3,i,c,l)}}),c3={src:`
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
    `,attributes:{},uniforms:{backlight:"bY",colorTexture:"bB",sceneProperties:"e"}},lt=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Pe,u,t,m),$u,c3,a,{bY:Nn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),xu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},l3=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Pe,l,a,d),xu,bu,n,{P:f,bd:m.bd,bJ:m.bJ,bK:m.bK,bL:m.bL,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),u3=It(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(Pe,m,u,w),xu,hu,l,{b$:e,b2:r,b3:i,b4:a,P:_,bd:x.bd,bJ:x.bJ,bK:x.bK,bL:x.bL,co:t,b:d,c:s,aW:e,d:g,cL:n,e:v,a$:0,f})}))}),kn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),v3=function(e){var r=e;return p(kn,r.dM,r.dJ,.5)},$3=function(e){var r=e;return p(kn,r.dN,r.dK,.5)},f3=function(e){var r=e;return p(kn,r.dO,r.dL,.5)},s3=function(e){return p(me,v3(e),$3(e),f3(e))},W=function(e){var r=Hl(e),n=r.a,a=r.b,t=r.c;return{ev:Rn(s3(e)),eR:n/2,eS:a/2,eT:t/2}},Jo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(ct,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ct,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ct,l,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,W(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,W(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Zp,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Qp,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(wu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(l3,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(e3,b,x,_,W(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(qn,m,W(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(qn,m,W(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(qn,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(qn,m,W(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,M=e.c,H=e.d,j=e.e,R=C(yu,T,M,H,j);if(R.$){var q=R.a,K=q.a,ie=q.b,ve=R.b,oe=ve.a,de=ve.b,ke=R.c,Te=ke.a,pr=ke.b,br=R.d,x=br.a,_=br.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Uu(u3,K,ie,oe,de,Te,pr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return r3(K)(ie)(oe)(de)(Te)(pr)(x)(_)(W(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,G=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return ye(Zn,N,G,F,W(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return ye(Zn,N,G,F,W(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ye(Zn,N,G,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(Zn,N,G,F,W(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),ut=function(e){var r=e;return r.fT},vt=function(e){var r=e;return r.fX},$t=function(e){var r=e;return r.c$},d3=function(e){var r=e,n=$t(r.c0),a=vt(r.c0),t=ut(r.c0),i=$t(r.c_),c=vt(r.c_),l=ut(r.c_),u=$t(r.cZ),v=vt(r.cZ),s=ut(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},m3=function(e){var r=Rn(Hr(e)),n=We(Lr(e)),a=We(Cr(e)),t=We(Tr(e));return{dk:d3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,H:r.fT,I:r.fX,J:r.c$,bV:1}},Ur=$(function(e,r){return{$:5,a:e,b:r}}),Su=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Al,a,e);return o(Ur,i,t);case 1:return o(Ur,e,n);case 3:return o(Ur,e,n);case 2:return o(Ur,e,n);default:return o(Ur,e,n)}}),Tu=$(function(e,r){return o(Su,m3(e),r)}),Xa=function(e){return{$:2,a:e}},p3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),b3=Mf,g3=kf,Yi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=g3(a),g=f.fT,b=f.fX,w=f.c$,x=f.ei,_=b3({ei:x,fT:g*s,fX:b*d,c$:w*m});return Ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Gt=$(function(e,r){switch(r.$){case 0:return uu;case 5:var n=r.a,a=r.b;return o(Ur,n,o(Gt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(p3,e,t),o(Yi,e,i));case 3:return r;case 2:var i=r.a;return Xa(o(Yi,e,i));default:var c=r.a;return Xl(o(re,Gt(e),c))}}),Uo=$(function(e,r){var n=r;return o(Gt,e,n)}),Oo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Cu=7683,Lu=7682,h3=p(Mo,{ci:0,cH:0,cY:15},{a8:Se,bl:nn,bt:Se,bu:Cu},{a8:Se,bl:nn,bt:Se,bu:Lu}),_3=p(Mo,{ci:0,cH:0,cY:15},{a8:Se,bl:nn,bt:Se,bu:Lu},{a8:Se,bl:nn,bt:Se,bu:Cu}),Yo=$(function(e,r){return e?o(k,_3,r):o(k,h3,r)}),w3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},y3=function(e){if(e.$){var r=e.c;return ne(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(Yo,i,v),w3,Oo,r,{b:t,c:a,d:l,e:n,bW:u,f:c})}))}else return Y},La=function(e){var r=y3(e);if(r.$)return P;var n=r.a;return Xa(n)},x3=E(function(e,r,n,a){var t=o(Jo,n,iu),i=function(){var s=z(e,r);return s.a?s.b?En(h([t,La(Ui)])):t:s.b?La(Ui):P}(),c=Ga(a),l=c.a,u=c.b,v=c.c;return o(Tu,Na(a),o(Uo,B(l,u,v),i))}),S3=$(function(e,r){return C(x3,!0,!0,e,r)}),Wt=function(e){return{$:0,a:e}},Pu=$(function(e,r){return{$:0,a:e,b:r}}),T3=function(e){var r=ho(e),n=r.cG,a=r.b7,t=r.b0;return p(Vn,n,a,t)},C3=function(e){return o(Pu,0,Wt(T3(e)))},qo=function(e){var r=e;return r.k},Sn=function(e){var r=e;return jr(r)},L3=$(function(e,r){var n=r;return n/e}),an=lv,qi=function(e){var r=e;return{fT:jr(r),fX:an(r)}},P3=$(function(e,r){var n=e.dY,a=e.o;return o(k,{o:Ha(a),dY:Le(n)},r)}),z3=ka(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Xr(l.dY),s=Wr(l.dY),d=Gr(l.dY),m=o(ia,e,d),f=o(ze,r,d),g=o(ia,n,s),b=o(ze,a,s),w=o(ia,t,v),x=o(ze,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return Ql({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),zu=$(function(e,r){var n=Xr(e.dY),a=Wr(e.dY),t=Gr(e.dY);return Jt(z3,t,t,a,a,n,n,r)}),k3=function(e){var r=p(Rc,P3,L,Ho(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,No(e)),i=o(zu,n,a);return C(Zl,i,e,t,0)}else return jo},ku=vr({fT:0,fX:0,c$:-1}),Zi=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),Pa=function(e){var r=e;return an(r)},Xt=function(e){return sr(2*rn*e)},M3=Dr,Ki=M3({cu:Ne,cZ:Fo,c_:Vo}),Mu=function(){var e=72,r=o(L3,e,Xt(1)),n=Ar(1),a=qr(Eo),t=qr(ku),i=Ar(1),c=o(Q,.5,i),l=p(me,Qe,Qe,c),u=o(Q,-.5,i),v=p(me,Qe,Qe,u),s=function(f){var g=o(Q,f,r),b=qr(o(Zi,Ki,qi(g))),w=o(Q,Sn(g),n),x=o(Q,Pa(g),n),_=p(me,w,x,c),T=p(me,w,x,u),M=o(wa,e,f+1),H=o(Q,M,r),j=qr(o(Zi,Ki,qi(H))),R=o(Q,Sn(H),n),N=o(Q,Pa(H),n),G=p(me,R,N,u),F=p(me,R,N,c);return h([B({o:t,dY:v},{o:t,dY:G},{o:t,dY:T}),B({o:b,dY:T},{o:j,dY:G},{o:j,dY:F}),B({o:b,dY:T},{o:j,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(re,s,o(Rr,0,e-1)),m=Nt(Ge(d));return Ro(k3(m))}(),Qi=lu(Mu),Du=function(e){var r=e;return r.eE},Au=function(e){var r=e;return r.cu},D3=function(e){var r=Du(e),n=To(r),a=n.a,t=n.b;return Ye({cu:Au(e),cZ:a,c_:t,c0:r})},Bu=function(e){var r=e;return r.e6},Fu=function(e){var r=e;return r.fp},A3=E(function(e,r,n,a){var t=D3(qo(a)),i=o(Jo,n,Mu),c=function(){var d=z(e,r);return d.a?d.b?En(h([i,La(Qi)])):i:d.b?La(Qi):P}(),l=Fu(a),u=l,v=Bu(a),s=v;return o(Tu,t,o(Uo,B(u,u,s),c))}),B3=$(function(e,r){return C(A3,!0,!0,e,r)}),ec={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},rc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},bn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return er({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},Qn=ou(h([B({cS:0},{cS:1},{cS:2})])),F3=$(function(e,r){var n=eu(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(be,a,ee(function(_,T,M,H,j,R,N,G){return S(ae,p(Pe,H,0,G),ec,Wo,Qn,{aw:t,b:M,c:T,d:R,e:_,bq:bn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(be,a,ee(function(_,T,M,H,j,R,N,G){return S(ae,p(Pe,H,0,G),ec,Xo,Qn,{aN:o(Wa,Nn(c),i),b:M,c:T,d:R,e:_,bq:bn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(wu,l,f);if(u.$)return P;var v=u.a;return o(be,a,ee(function(_,T,M,H,j,R,N,G){var F=N.a,q=N.b;return S(ae,p(Pe,H,0,G),rc,mu,Qn,{P:q,bd:F.bd,bJ:F.bJ,bK:F.bK,bL:F.bL,cj:v,b:M,c:T,d:R,e:_,bq:bn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(yu,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(be,a,ee(function(_,T,M,H,j,R,N,G){var F=N.a,q=N.b;return S(ae,p(Pe,H,0,G),rc,_u,Qn,{b_:b,P:q,bd:F.bd,bJ:F.bJ,bK:F.bK,bL:F.bL,cn:x,b:M,c:T,d:R,cK:w,e:_,bq:bn(r),f:j})}))}}),V3=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(jn,e,r)}(),E3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",triangleVertexPositions:"bq",viewMatrix:"f"}},nc=function(e){return Xa(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Yo,t,u),E3,Oo,V3,{b:a,c:n,d:c,e:r,bW:l,bq:bn(e),f:i})}))},R3=E(function(e,r,n,a){var t=o(F3,n,a),i=z(e,r);return i.a?i.b?En(h([t,nc(a)])):t:i.b?nc(a):P}),j3=$(function(e,r){return C(R3,!0,!0,e,r)}),Zo=function(e){var r=e;return r},N3=$(function(e,r){var n=Vr(r),a=Vr(e),t=Fr(r),i=Fr(e),c=Br(r),l=Br(e);return{dJ:o(ce,l,c),dK:o(ce,i,t),dL:o(ce,a,n),dM:o(fe,l,c),dN:o(fe,i,t),dO:o(fe,a,n)}}),H3=function(e){var r=Zo(e),n=r.a,a=r.b;return o(N3,n,a)},ac={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},G3=$(function(e,r){return{$:1,a:e,b:r}}),W3=G3({c8:2,dh:0,dQ:1}),tc=W3(h([z({dr:0},{dr:1})])),X3=$(function(e,r){var n=H3(r),a=W(n),t=Zo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(be,a,ee(function(v,s,d,m,f,g,b,w){return S(ae,w,ac,Wo,tc,{aw:l,dp:Le(c),dq:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,d,m,f,g,b,w,x){return S(ae,x,ac,Xo,tc,{aN:o(Wa,Nn(u),l),dp:Le(c),dq:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),I3=$(function(e,r){return o(X3,e,r)}),Ia=function(e){var r=e;return r.ev},Ja=function(e){var r=e;return r.fp},oc=$(function(e,r){var n=e,a=r;return n/a}),J3=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(wr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ic=$(function(e,r){return e<1?L:S(J3,0,e,e,r,L)}),U3=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ha(a),dY:Le(n),L:o(Ae,c,l)},r)}),O3=function(e){var r=p(Rc,U3,L,Ho(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,No(e)),i=o(zu,n,a);return C(Kl,i,e,t,0)}else return jo},Ko=$(function(e,r){var n=e,a=r,t=jr(a);return{fT:t*jr(n),fX:t*an(n),c$:an(a)}}),Y3=function(){var e=Ar(1),r=72,n=o(Rr,0,r-1),a=o(ic,r,o(kn,Qe,Xt(1))),t=co(r/2),i=o(Rr,0,t-1),c=o(ic,t,o(kn,mn(90),mn(-90))),l=Go(Ge(o(re,function(s){return o(re,function(d){return{o:qr(o(Ko,s,d)),dY:p(me,o(Q,Sn(d)*Sn(s),e),o(Q,Sn(d)*Pa(s),e),o(Q,Pa(d),e)),L:z(o(oc,s,Xt(1)),o(oc,o(yn,mn(90),d),mn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(re,function(s){return Ge(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return Ro(O3(o(cu,l,v)))}(),za=72,ea=2*za,q3=$(function(e,r){e:for(;;){var n=ea+1,a=o(wa,ea,2*e+3),t=o(wa,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(k,B(l,c,t),o(k,B(c,a,t),o(k,B(c,i,a),o(k,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Z3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),K3=$(function(e,r){e:for(;;){var n=p(Z3,0,2*rn,e/za),a={bw:n,bO:0,bU:1},t={bw:n,bO:1,bU:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Q3=function(){var e=o(K3,za-1,h([{bw:0,bO:0,bU:0},{bw:0,bO:1,bU:0}])),r=o(q3,za-1,L);return o(jn,e,r)}(),eb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bO",radiusScale:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},cc=function(e){return Xa(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Yo,!0,u),eb,Oo,Q3,{aw:p(Vn,0,0,1),b:a,c:n,d:c,e:r,bW:l,f:i})}))},rb=function(e){var r=nu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c$,bV:1}},nb=$(function(e,r){return o(Su,rb(e),r)}),ab=E(function(e,r,n,a){var t=o(Jo,n,Y3),i=function(){var u=z(e,r);return u.a?u.b?En(h([t,cc()])):t:u.b?cc():P}(),c=Ja(a),l=c;return o(nb,o(Ta,Ne,Ia(a)),o(Uo,B(l,l,l),i))}),tb=$(function(e,r){return C(ab,!0,!0,e,r)}),ob=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Vu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ib=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),cb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Pu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ob,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Vu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ib,n,a,t,i,c)}},lb=cb,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(S3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(j3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(tb,lb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(B3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(I3,C3(c),l)]);default:var u=e.a;return o(Po,Eu,u)}},ub=function(e){return o(Po,Eu,e)},vb=$(function(e,r){return pp({el:e.el,aI:Om(e.ep),es:e.es,ex:Ar(e.ex),b5:e.b5,aK:z(Ii(Oe(e.cM.fR)),Ii(Oe(e.cM.eV))),aP:ub(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),Ru=function(e){return e},$b=$(function(e,r){var n=e,a=We(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(ja,r.bG,r.aJ),u=l;return{by:Xr(u),eu:n,bE:Wr(u),cD:0,bT:Gr(u),cT:1,fT:-t,fX:-i,c$:-c}}),fb=function(e){return o($b,Ru(!0),{aJ:e.aJ,eE:o(Ko,sr(e.bx),sr(e.bC)),bG:e.bG})},sb=function(e){return e},db=function(e){return sb(1.2*o(ln,2,e))},ft=Lo({fT:.37208,fX:.37529}),mb=$(function(e,r){return{$:2,a:e,b:r}}),ju=function(e){return{$:0,a:e}},ra=function(e){var r=e;return r},pb=function(e){var r=e;return r.eu},bb=ju(pn.a),gb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(k,a,i),c):z(i,o(k,a,c))});return p(or,n,z(L,L),r)}),hb=function(e){var r=e;return er({ds:r.fT,dt:r.bT,du:0,dv:0,dw:r.fX,dx:r.bE,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},_b=ee(function(e,r,n,a,t,i,c,l){var u=o(gb,pb,h([ra(e),ra(r),ra(n),ra(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(mb,o(re,hb,v),{bd:o(Re,m,g),bJ:o(Re,w,_),bK:o(Re,t,i),bL:o(Re,c,l)})}else return bb}else return ju({bd:o(Re,e,r),bJ:o(Re,n,a),bK:o(Re,t,i),bL:o(Re,c,l)})}),wb=E(function(e,r,n,a){return Ma(_b,e,r,n,a,Me,Me,Me,Me)}),yb=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(po,e,r.av))}),xb=$(function(e,r){return o(fr,0,wo(o(_o,yb(e),r)))}),Sb=$(function(e,r){return o(xb,e,r.ey)}),lr=Sb,Tb={$:5},Cb=Tb,Lb=Lo({fT:.44757,fX:.40745}),Pb=function(e){return e},lc=function(e){return e},st=function(e){return e},zb={$:1},kb=zb,Mb=$(function(e,r){var n=e,a=Rn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(ja,r.bG,r.aJ),u=l;return{by:Xr(u),eu:n,bE:Wr(u),cD:0,bT:Gr(u),cT:2,fT:t,fX:i,c$:c}}),uc=function(e){return o(Mb,Ru(!0),{aJ:e.aJ,bG:e.bG,dY:aa(e.dY)})},Ua=$(function(e,r){return{$:0,a:e,b:r}}),dt=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),mt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Db=vr({fT:-1,fX:0,c$:0}),Ab=vr({fT:0,fX:-1,c$:0}),Bb=Xe(function(e,r,n,a,t,i){var c=o(dt,n,i)?Eo:ku,l=o(dt,r,t)?Co:Ab,u=o(dt,e,a)?Ol:Db,v=B(se(o($r,e,a)),se(o($r,r,t)),se(o($r,n,i))),s=p(me,o(mt,e,a),o(mt,r,t),o(mt,n,i)),d=Ye({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),Fb=$(function(e,r){return ye(Bb,Br(e),Fr(e),Vr(e),Br(r),Fr(r),Vr(r))}),Vb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ua,e,o(Fb,p(Vt,-c,-l,-u),p(Vt,c,l,u)))}),Oa=function(e){return{$:5,a:e}},Eb=function(e){return Oa(e)},Rb=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(Ra,f,m,d,a)}),jb=y(function(e,r,n){return C(Rb,e,r,n,1)}),pt=function(e){return p(Dl,0,1,e<=.04045?e/12.92:o(ln,(e+.055)/1.055,2.4))},Nb=function(e){var r=ho(e),n=r.cG,a=r.b7,t=r.b0;return p(Vn,pt(n),pt(a),pt(t))},Hb=function(e){return p(Vu,0,Wt(Nb(e)),Wt(0))},Qo=$(function(e,r){return{$:2,a:e,b:r}}),ei=$(function(e,r){return{$:4,a:e,b:r}}),ri=$(function(e,r){return{$:3,a:e,b:r}}),ni=$(function(e,r){return{$:1,a:e,b:r}}),Gb=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),Hn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),Wb=$(function(e,r){return Ye({cu:o(Hn,e,Hr(r)),cZ:Tr(r),c_:Cr(r),c0:Lr(r)})}),Xb=$(function(e,r){return{eo:o(Wb,e,Na(r)),aK:Ga(r)}}),vn=$(function(e,r){return{eE:r,cu:e}}),Ib=$(function(e,r){var n=r;return o(vn,o(Hn,e,n.cu),n.eE)}),Jb=$(function(e,r){var n=r;return{k:o(Ib,e,n.k),e6:n.e6,fp:n.fp}}),Ub=function(e){return e},ai=$(function(e,r){var n=Zo(r),a=n.a,t=n.b;return Ub(z(e(a),e(t)))}),Ob=$(function(e,r){return o(ai,Hn(e),r)}),ti=$(function(e,r){return{ev:r,fp:se(e)}}),Yb=$(function(e,r){return o(ti,Ja(r),o(Hn,e,Ia(r)))}),oi=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),qb=$(function(e,r){return o(oi,Hn(e),r)}),Nu=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Gb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ua,s,o(Xb,i,c));case 1:var s=r.a,l=r.b;return o(ni,s,o(qb,i,l));case 3:var s=r.a,u=r.b;return o(ri,s,o(Yb,i,u));case 2:var s=r.a,v=r.b;return o(Qo,s,o(Jb,i,v));case 4:var s=r.a,d=r.b;return o(ei,s,o(Ob,i,d));default:var m=r.a;return Oa(o(re,Nu(B(n,a,t)),m))}}),vc=function(e){return Nu(B(e,0,0))},ua=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=an(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),T=s.c$*u,M=l*T,H=2*(w-M),j=2*(w+M),R=d*T,N=2*(R+b),G=2*(R-b),F=g*T,q=2*(F-m),K=2*(F+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+H*i.fX+N*i.c$,fX:j*i.fT+oe*i.fX+q*i.c$,c$:G*i.fT+K*i.fX+_*i.c$}}),Gn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=an(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,x=l*w,_=w*w,T=b.fX*u,M=l*T,H=w*T,j=T*T,R=1-2*(_+j),N=b.c$*u,G=l*N,F=2*(H-G),q=2*(H+G),K=w*N,ie=2*(K+M),ve=2*(K-M),oe=T*N,de=2*(oe-x),ke=2*(oe+x),Te=N*N,pr=1-2*(j+Te),br=1-2*(_+Te);return{fT:s.fT+pr*d+F*m+ie*f,fX:s.fX+q*d+br*m+de*f,c$:s.c$+ve*d+ke*m+R*f}}),Zb=y(function(e,r,n){return Ye({cu:p(Gn,e,r,Hr(n)),cZ:p(ua,e,r,Tr(n)),c_:p(ua,e,r,Cr(n)),c0:p(ua,e,r,Lr(n))})}),Kb=y(function(e,r,n){return{eo:p(Zb,e,r,Na(n)),aK:Ga(n)}}),Qb=$(function(e,r){var n=o(Gn,e,r),a=o(ua,e,r);return function(t){var i=t;return o(vn,n(i.cu),a(i.eE))}}),eg=y(function(e,r,n){var a=n;return{k:p(Qb,e,r,a.k),e6:a.e6,fp:a.fp}}),rg=y(function(e,r,n){return o(ai,o(Gn,e,r),n)}),ng=y(function(e,r,n){return o(ti,Ja(n),p(Gn,e,r,Ia(n)))}),ag=y(function(e,r,n){return o(oi,o(Gn,e,r),n)}),Ya=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ua,l,p(Kb,e,r,a));case 1:var l=n.a,t=n.b;return o(ni,l,p(ag,e,r,t));case 3:var l=n.a,i=n.b;return o(ri,l,p(ng,e,r,i));case 2:var l=n.a,c=n.b;return o(Qo,l,p(eg,e,r,c));case 4:var l=n.a,u=n.b;return o(ei,l,p(rg,e,r,u));default:var v=n.a;return Oa(o(re,o(Ya,e,r),v))}}),tg=o(vn,Ne,Fo),og=$(function(e,r){return p(Ya,tg,sr(e),r)}),ig=o(vn,Ne,Vo),cg=$(function(e,r){return p(Ya,ig,sr(e),r)}),lg=o(vn,Ne,Yl),ug=$(function(e,r){return p(Ya,lg,sr(e),r)}),Wn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c$:a.c$+r*(t.c$-a.c$)}}),vg=y(function(e,r,n){var a=Na(n),t=Tr(a),i=Cr(a),c=Lr(a),l=p(Wn,e,r,Hr(a)),u=r>=0?Ye({cu:l,cZ:t,c_:i,c0:c}):Ye({cu:l,cZ:_r(t),c_:_r(i),c0:_r(c)}),v=Ga(n),s=v.a,d=v.b,m=v.c,f=se(o(Q,r,s)),g=se(o(Q,r,d)),b=se(o(Q,r,m));return{eo:u,aK:B(f,g,b)}}),$c=function(e){return Du(qo(e))},$g=function(e){return Au(qo(e))},fg=y(function(e,r,n){var a=se(o(Q,r,Fu(n))),t=se(o(Q,r,Bu(n))),i=r>=0?$c(n):_r($c(n)),c=p(Wn,e,r,$g(n));return{k:o(vn,c,i),e6:t,fp:a}}),sg=y(function(e,r,n){return o(ai,o(Wn,e,r),n)}),dg=y(function(e,r,n){return o(ti,o(Q,O(r),Ja(n)),p(Wn,e,r,Ia(n)))}),mg=y(function(e,r,n){return o(oi,o(Wn,e,r),n)}),Hu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Ua,c,p(vg,Ne,e,n));case 1:var c=r.a,a=r.b;return o(ni,c,p(mg,Ne,e,a));case 3:var c=r.a,t=r.b;return o(ri,c,p(dg,Ne,e,t));case 2:var c=r.a,i=r.b;return o(Qo,c,p(fg,Ne,e,i));case 4:var c=r.a,l=r.b;return o(ei,c,p(sg,Ne,e,l));default:var u=r.a;return Oa(o(re,Hu(e),u))}}),pg=function(e){var r=function(t){return .1*t},n=function(t){return C(Ml,0,1,4,e.b1+r(t))},a=function(t){return o(vc,1.4*t,o(ug,n(t),o(og,n(t),o(cg,n(t),o(vc,o(lr,"a",e)*t,o(Hu,o(lr,"a",e)*t,o(Vb,Hb(p(jb,n(t),.6,.8)),B(1,3,1))))))))};return Eb(o(re,a,o(Rr,-10,10)))},bg=$(function(e,r){return h([pg(e)])}),fc=function(e){var r=e;return r},gg=function(e){e:for(;;){if(wr(e.di,Qe)&&wr(e.dj,Qe))return Me;if(o(zl,se(e.di),se(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:_r(e.ee)};e=r;continue e}else{var n=O(fc(e.dj)/rn),a=O(fc(e.di)/rn),t=We(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(ja,au(1),e.aJ),v=u;return{by:a*Xr(v),eu:!1,bE:a*Wr(v),cD:n/a,bT:a*Gr(v),cT:3,fT:i,fX:c,c$:l}}}},hg=function(e){return gg({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(Ko,sr(e.bx),sr(e.bC))})},_g=$(function(e,r){var n=fb({bx:o(lr,"azimuth for third light",e),aJ:Um(Pb(2e3)),bC:o(lr,"elevation for third light",e),bG:st(o(ln,10,o(lr,"lux",e)))}),a=uc({aJ:ft,bG:lc(6e3),dY:{fT:-45,fX:-30,c$:45}}),t=hg({bx:o(lr,"azimuth for fourth light",e),aJ:ft,bC:o(lr,"elevation for fourth light",e),di:st(o(lr,"intensity above",e)),dj:st(o(lr,"intensity below",e))}),i=uc({aJ:Lb,bG:lc(6e3),dY:{fT:-45,fX:30,c$:45}});return o(vb,{el:kb,ep:C(wl,0,0,0,.7),es:Im(e),ex:.1,b5:e.b5,eM:db(6),e8:C(wb,i,a,n,t),cM:e.cM,fJ:Cb,fQ:ft},o(bg,e,r))}),wg=C(wm,_g,Lm,Cm,ym);const yg={Main:{init:wg(o(A,function(e){return De({e0:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({b1:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return De({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",ga(Pn)))},o(D,"left",Z))},o(D,"pressedKeys",ga(Pn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return De({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return De({eV:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return De({eB:r,eC:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},xg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},Sg=()=>{bt("pointerdown"),bt("wheel"),bt("keydown")},bt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Tg=yg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Sg();xg(Tg);
