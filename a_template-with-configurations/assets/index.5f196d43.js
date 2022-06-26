const Iu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Iu();function wr(e,r,n){return n.a=e,n.f=r,n}function $(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ge(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function jt(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Nt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ca(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Uu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ju=[];function Ou(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Yu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Zu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function Kr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Kr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var ev=$(function(e,r){var n=J(e,r);return n<0?Lc:n?Ef:Cc}),Pn=0;function P(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var L={$:0};function rr(e,r){return{$:1,a:e,b:r}}var rv=$(rr);function h(e){for(var r=L,n=e.length;n--;)r=rr(e[n],r);return r}function La(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Ge(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(La(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(La(r).sort(function(n,a){var t=o(e,n,a);return t===Cc?0:t===Lc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var av=$(Math.pow);$(function(e,r){return r%e});var tv=$(function(e,r){var n=r%e;return e===0?Kr(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin,lv=Math.tan;$(Math.atan2);function uv(e){return e}function vv(e){return e===1/0||e===-1/0}var $v=Math.ceil,fv=Math.floor,sv=Math.round,dv=Math.sqrt,Jo=Math.log,mv=isNaN;function pv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var bv=$(function(e,r){return e+r});function gv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function hv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function _v(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var wv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),yv=$(function(e,r){return r.split(e)}),xv=$(function(e,r){return r.join(e)}),Sv=y(function(e,r,n){return n.slice(e,r)});function Tv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function ec(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function Mv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function Dv(e){return La(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fv(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var Vv=Wt(function(e){return typeof e=="boolean"?ue(e):Oe("a BOOL",e)}),Rv=Wt(function(e){return typeof e=="number"?ue(e):Oe("a FLOAT",e)}),Ev=Wt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Oe("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var Wv=$(function(e,r){return{$:10,b:r,h:e}}),Gv=$(function(e,r){return yr(e,[r])}),Hv=y(function(e,r,n){return yr(e,[r,n])});R(function(e,r,n,a){return yr(e,[r,n,a])});_e(function(e,r,n,a,t){return yr(e,[r,n,a,t])});Ge(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});jt(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ee(e,n)}catch(a){return xe(o(Kt,"This is not valid JSON! "+a.message,r))}});var rc=$(function(e,r){return Ee(e,r)});function Ee(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Oe("null",r);case 3:return Gn(r)?Oo(e.b,r,h):Oe("a LIST",r);case 4:return Gn(r)?Oo(e.b,r,Xv):Oe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Oe("an OBJECT with a field named `"+n+"`",r);var v=Ee(e.b,r[n]);return Xe(v)?v:xe(o(li,n,v.a));case 7:var a=e.e;if(!Gn(r))return Oe("an ARRAY",r);if(a>=r.length)return Oe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ee(e.b,r[a]);return Xe(v)?v:xe(o(Pc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Oe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Ee(e.b,r[i]);if(!Xe(v))return xe(o(li,i,v.a));t=rr(P(i,v.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ee(l[u],r);if(!Xe(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ee(e.b,r);return Xe(v)?Ee(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=Ee(d.a,r);if(Xe(v))return v;s=rr(v.a,s)}return xe(jf(Be(s)));case 1:return xe(o(Kt,e.a,r));case 0:return ue(e.a)}}function Oo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ee(e,r[i]);if(!Xe(c))return xe(o(Pc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xv(e){return o(ns,e.length,function(r){return e[r]})}function Oe(e,r){return xe(o(Kt,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function nc(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Uv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var ft=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Jv(e){return{$:5,b:e}}var Ov=0;function Gt(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return Ht(r),r}function ac(e){return dr(function(r){r(Rr(Gt(e)))})}function tc(e,r){e.h.push(r),Ht(e)}var qv=$(function(e,r){return dr(function(n){tc(e,r),n(Rr(Pn))})}),Wa=!1,Yo=[];function Ht(e){if(Yo.push(e),!Wa){for(Wa=!0;e=Yo.shift();)Yv(e);Wa=!1}}function Yv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ht(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Xt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Xt(e,r,n,a,t,i){var c=o(rc,e,r?r.flags:void 0);Xe(c)||Kr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Qo(l,b.b,t(v))}return Qo(l,u.b,t(v)),d?{ports:d}:{}}var Ze={};function Zv(e,r){var n;for(var a in Ze){var t=Ze[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Kv(t,r)}return n}function Qv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Kv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,Jv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o(ft,l,e.b))}var e$=$(function(e,r){return dr(function(n){e.g(r),n(Rr(Pn))})});$(function(e,r){return o(qv,e.h,{$:0,a:r})});function oc(e){return function(r){return{$:1,k:e,l:r}}}function r$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Zo=[],Ga=!1;function Qo(e,r,n){if(Zo.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=Zo.shift();)n$(a.p,a.q,a.r);Ga=!1}}function n$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)tc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=a$(e,t,a,r.l);n[t]=t$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function a$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ze[r].e:Ze[r].f;return o(i,t,a)}function t$(e,r,n){return n=n||{i:L,j:L},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function o$(e){Ze[e]&&Kr(3)}$(function(e,r){return r});function i$(e,r){return o$(e),Ze[e]={f:c$,u:r,a:l$},oc(e)}var c$=$(function(e,r){return function(n){return e(r(n))}});function l$(e,r){var n=L,a=Ze[e].u,t=Rr(null);Ze[e].b=t,Ze[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(rc,a,c);Xe(l)||Kr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,lr=typeof document!="undefined"?document:{};function It(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var ic=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ut(n),e:t,f:e,b:i}})}),mr=ic(void 0),u$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ut(n),e:t,f:e,b:i}})}),v$=u$(void 0);function $$(e,r,n,a){return{$:3,d:Ut(e),g:r,h:n,i:a}}var f$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ge(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Nt(e,r,n,a,t,i,c,l)})});jt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return Ca(e,r,n,a,t,i,c,l,u)})});var cc=$(function(e,r){return{$:"a0",n:e,o:r}}),s$=$(function(e,r){return{$:"a1",n:e,o:r}}),lc=$(function(e,r){return{$:"a2",n:e,o:r}}),zn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(cc,r.n,p$(e,r.o)):r});function p$(e,r){var n=to(r);return{$:r.$,a:n?p(as,n<3?b$:g$,Me(e),r.a):o($a,e,r.a)}}var b$=$(function(e,r){return P(e(r.a),r.b)}),g$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Ut(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ko(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ko(c,t,i):c[t]=i}return r}function Ko(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,gr(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?h$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function h$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,Jt&&{passive:to(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=Ee(t.a,a);if(!!Xe(i)){for(var c=to(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Gr(e.a,r.a)}function uc(e,r){var n=[];return Ie(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){we(n,0,a,r);return}(f?!T$(d,m):d!==m)&&we(n,2,a,m),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:ei(e,r,n,a,C$);return;case 2:ei(e,r,n,a,L$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=Ot(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function T$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=Ot(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function C$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ie(s,i[v],n,++a),a+=s.b||0}}function L$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,T=b.b,M=void 0,W=void 0;if(w===x){f++,Ie(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,G=j.b;W=x===N}if(E){var B=E.a,O=E.b;M=w===B}if(M&&W){f++,Ie(_,O,t,f),cn(i,t,w,T,m,c),f+=_.b||0,f++,ln(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(M){f++,cn(i,t,x,T,m,c),Ie(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(W){f++,ln(i,t,w,_,f),f+=_.b||0,f++,Ie(G,T,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,ln(i,t,w,_,f),cn(i,t,x,T,m,c),f+=_.b||0,f++,Ie(G,O,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;ln(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];cn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&we(n,8,a,{w:t,x:c,y:Q})}var vc="_elmW6BL";function cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}cn(e,r,n+vc,a,t,i)}function ln(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}ln(e,r,n+vc,a,t)}function $c(e,r,n,a){un(e,r,n,0,0,r.b,a)}function un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)$c(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&un(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return un(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=un(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function fc(e,r,n,a){return n.length===0?e:($c(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=P$(t,a);t===e&&(e=i)}return e}function P$(e,r){switch(r.$){case 0:return z$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return k$(e,r);case 5:return r.s(e);default:Kr(10)}}function z$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function k$(e,r){var n=r.s,a=M$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function M$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function qt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(zn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=rr(qt(v[a]),u);return p(mr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=R(function(e,r,n,a){return Xt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=qt(l);return sc(i,function(v){var s=c(v),d=uc(u,s);l=fc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Xt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=lr.title,v=lr.body,s=qt(v);return sc(i,function(d){ca=c;var m=l(d),f=mr("body")(L)(m.eu),g=uc(s,f);v=fc(v,s,g,t),s=f,ca=0,u!==m.fK&&(lr.title=u=m.fK)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function sc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(co,oo,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(co,oo,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(co,oo,dr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:B$;y(function(e,r,n){return ac(dr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ee(e,r);return Xe(n)?te(n.a):q});function dc(e,r){return dr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Uv(os(e)))})})}function V$(e){return dr(function(r){ua(function(){r(Rr(e()))})})}$(function(e,r){return dc(r,function(n){return n[e](),Pn})});$(function(e,r){return V$(function(){return F$.scroll(e,r),Pn})});y(function(e,r,n){return dc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Pn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var R$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var E$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(C(cl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(C(cl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ri=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Yt(e){for(var r=0;e.b;e=e.b)r++;return r}var j$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},N$=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),W$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),G$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),H$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),X$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),U$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),J$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),O$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),q$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Y$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Z$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Q$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},pc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},K$=function(e){e.gl.disable(e.gl.CULL_FACE)},ef=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},rf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},nf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ni=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],af=[Y$,Z$,Q$,mc,pc,K$,ef,rf,nf];function ai(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function tf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function bc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function of(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][x]:w[T][x][_]})}var u=bc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Yt(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Yt(r.b),indexBuffer:null,buffers:{}}}function lf(e,r){var n=new Uint32Array(Yt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ti(e,r){return e+"#"+r}var gc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mc(n),pc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ti(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ri++,v||(v=ai(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ri++,s||(s=ai(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=tf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=uf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ti(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),vf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=of(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=bc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,x*T)}for(n.toggle=!n.toggle,yn(L0(n),i.a),u=0;u<ni.length;u++){var M=n[ni[u]];M.toggle!==n.toggle&&M.enabled&&(af[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function uf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function vf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var $f=y(function(e,r,n){return $$(r,{g:n,f:{},h:e},gf,hf)}),ff=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),sf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),mf=$(function(e,r){e.contextAttributes.antialias=!0}),pf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),bf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function gf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(C0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),j$(function(){return o(gc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function hf(e,r){return r.f=e.f,gc(r)}var _f=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Zt=new Float64Array(3),oi=new Float64Array(3),ii=new Float64Array(3),yf=y(function(e,r,n){return new Float64Array([e,r,n])}),xf=function(e){return e[0]},Sf=function(e){return e[1]},Tf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Cf=function(e){return new Float64Array([e.fT,e.fX,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(hc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(hc(e,r,n),n)}$(_c);function wc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Lf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),vn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(vn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=Zt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=vn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(vn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(vn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(vn(r,a)+e[14])/n,t});var Pf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var zf=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},kf=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Mf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Mf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Df=new Float64Array(16),Af=new Float64Array(16),Bf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Ff=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ge(yc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return yc(c,l,i,t,n,a)});function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ge(xc);R(function(e,r,n,a){return xc(e,r,n,a,-1,1)});function Sc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],T=r[0],M=r[1],W=r[2],j=r[3],E=r[4],N=r[5],G=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],ke=r[14],Te=r[15];return n[0]=a*T+l*M+d*W+b*j,n[1]=t*T+u*M+m*W+w*j,n[2]=i*T+v*M+f*W+x*j,n[3]=c*T+s*M+g*W+_*j,n[4]=a*E+l*N+d*G+b*B,n[5]=t*E+u*N+m*G+w*B,n[6]=i*E+v*N+f*G+x*B,n[7]=c*E+s*N+g*G+_*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+_*ve,n[12]=a*oe+l*de+d*ke+b*Te,n[13]=t*oe+u*de+m*ke+w*Te,n[14]=i*oe+v*de+f*ke+x*Te,n[15]=c*oe+s*de+g*ke+_*Te,n}$(Sc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],T=r[5],M=r[6],W=r[8],j=r[9],E=r[10],N=r[12],G=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*T+v*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*W+c*j+v*E,n[9]=t*W+l*j+s*E,n[10]=i*W+u*j+d*E,n[11]=0,n[12]=a*N+c*G+v*B+m,n[13]=t*N+l*G+s*B+f,n[14]=i*N+u*G+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Zt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/wc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,T=b-m,M=g-f,W=c*c*v+u,j=w+d,E=b+m,N=w-d,G=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],ke=n[7],Te=n[8],pr=n[9],br=n[10],Na=n[11],Wu=n[12],Gu=n[13],Hu=n[14],Xu=n[15];return a[0]=B*x+ve*_+Te*T,a[1]=O*x+oe*_+pr*T,a[2]=Q*x+de*_+br*T,a[3]=ie*x+ke*_+Na*T,a[4]=B*M+ve*W+Te*j,a[5]=O*M+oe*W+pr*j,a[6]=Q*M+de*W+br*j,a[7]=ie*M+ke*W+Na*j,a[8]=B*E+ve*N+Te*G,a[9]=O*E+oe*N+pr*G,a[10]=Q*E+de*N+br*G,a[11]=ie*E+ke*N+Na*G,a[12]=Wu,a[13]=Gu,a[14]=Hu,a[15]=Xu,a});function Vf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Vf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Rf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Rf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=_c(e,r,Zt),t=va(mt(n,a,oi),oi),i=va(mt(a,t,ii),ii),c=Df,l=Af;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Sc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=rv,Hn=Qu,Tc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Hn,e,l,v)}else{var u=c.a;return p(Hn,i,l,u)}});return p(Hn,i,p(Hn,e,r,t),a)}),Qt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ci=function(e){return p(Qt,y(function(r,n,a){return o(k,P(r,n),a)}),L,e)},Cc=1,Ef=2,Lc=0,xe=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),li=$(function(e,r){return{$:0,a:e,b:r}}),Pc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},jf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Nf=Cv,Wf=Iv,Ae=ec,zr=$(function(e,r){return o(xv,e,La(r))}),eo=$(function(e,r){return h(o(yv,e,r))}),zc=function(e){return o(zr,`
    `,o(eo,`
`,e))},kn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(kn,$(function(r,n){return n+1}),0,e)},Gf=nv,Hf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Or=$(function(e,r){return p(Hf,e,r,L)}),kc=$(function(e,r){return p(Gf,e,o(Or,0,Fr(r)-1),r)}),Qe=Av,Mc=function(e){var r=Qe(e);return 97<=r&&r<=122},Dc=function(e){var r=Qe(e);return r<=90&&65<=r},Xf=function(e){return Mc(e)||Dc(e)},If=function(e){var r=Qe(e);return r<=57&&48<=r},Uf=function(e){return Mc(e)||Dc(e)||If(e)},Be=function(e){return p(kn,k,L,e)},en=gv,Jf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+zc(Of(r))))}),Of=function(e){return o(qf,e,L)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=en(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Xf(x)&&o(Nf,Uf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Fr(s))+" ways:"));return o(zr,`

`,o(k,g,o(kc,Jf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(zr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(zc(o(Wf,4,f))+(`

`+m))}}),Fe=32,pt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Ju,ro=$v,no=$(function(e,r){return Jo(r)/Jo(e)}),Yf=uv,xn=ro(o(no,2,Fe)),Ac=C(pt,0,xn,bt,bt),Bc=qu,Fc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Vc=fv,gt=Ou,Ke=$(function(e,r){return J(e,r)>0?e:r}),Zf=function(e){return{$:0,a:e}},ao=Yu,Qf=$(function(e,r){e:for(;;){var n=o(ao,Fe,e),a=n.a,t=n.b,i=o(k,Zf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Kf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=ro(r/Fe);if(n===1)return o(ao,Fe,e).a;var a=o(Qf,e,L),t=n;e=a,r=t;continue e}}),Rc=$(function(e,r){if(r.l){var n=r.l*Fe,a=Vc(o(no,Fe,n-1)),t=e?Be(r.z):r.z,i=o(es,t,r.l);return C(pt,gt(r.p)+n,o(Ke,5,a*xn),i,r.p)}else return C(pt,gt(r.p),xn,bt,r.p)}),rs=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Rc,!1,{z:a,l:n/Fe|0,p:t});var i=Fc(p(Bc,Fe,r,e)),c=e,l=r-Fe,u=n,v=o(k,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Ac;var n=e%Fe,a=p(Bc,n,e-n,r),t=e-n-Fe;return S(rs,r,t,e,L,a)}),Xe=function(e){return!e.$},A=Wv,Y=Vv,D=Nv,$e=Rv,$a=Gv,as=Hv,Me=Fv,to=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=mr("div"),ts=function(e){return{$:2,a:e}},Ec=$(function(e,r){return e}),jc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),Mr=function(e){return e},os=Mr,ui=Ge(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,kr=hv,Hr=Sv,Mn=$(function(e,r){return e<1?r:p(Hr,e,kr(r),r)}),Pa=zv,za=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Hr,0,e,r)}),Nc=kv,vi=_e(function(e,r,n,a,t){if(za(t)||o(is,"@",t))return q;var i=o(Pa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Nc(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return te(ye(ui,e,o(ka,c,t),u,r,n,a))}else return te(ye(ui,e,t,q,r,n,a))}),$i=R(function(e,r,n,a){if(za(a))return q;var t=o(Pa,"/",a);if(t.b){var i=t.a;return S(vi,e,o(Mn,i,a),r,n,o(ka,i,a))}else return S(vi,e,"/",r,n,a)}),fi=y(function(e,r,n){if(za(n))return q;var a=o(Pa,"?",n);if(a.b){var t=a.a;return C($i,e,te(o(Mn,t+1,n)),r,o(ka,t,n))}else return C($i,e,q,r,n)});$(function(e,r){if(za(r))return q;var n=o(Pa,"#",r);if(n.b){var a=n.a;return p(fi,e,te(o(Mn,a+1,r)),o(ka,a,r))}else return p(fi,e,q,r)});var cs=Pv,oo=function(e){},Dn=Rr,ls=Dn(0),Wc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(kn,e,r,Be(d)):C(Wc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ar=y(function(e,r,n){return C(Wc,e,r,0,n)}),re=$(function(e,r){return p(ar,$(function(n,a){return o(k,e(n),a)}),L,r)}),fa=ft,io=$(function(e,r){return o(fa,function(n){return Dn(e(n))},r)}),us=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Dn(o(e,a,t))},n)},r)}),vs=function(e){return p(ar,us(k),Dn(L),e)},$s=e$,fs=$(function(e,r){var n=r;return ac(o(fa,$s(e),n))}),ss=y(function(e,r,n){return o(io,function(a){return 0},vs(o(re,fs(e),r)))}),ds=y(function(e,r,n){return Dn(0)}),ms=$(function(e,r){var n=r;return o(io,e,n)});Ze.Task=Qv(ls,ss,ds,ms);var ps=oc("Task"),co=$(function(e,r){return ps(o(io,e,r))}),bs=A$,gs=pv,sa={$:1},Gc=function(e){return{$:2,a:e}},Ma={$:0},je=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},hs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(je,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},Hc=function(e){var r=e.b;return o(je,Ma,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Hc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,rn(n).db)>0?o(ae,hs,fr(o(je,sa,t))):Mr)(o(je,Gc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(jc,l.eA,qe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(je,Ma,{B:P(v,s),ab:L,T:o(k,t.B,t.T)})}}),Xc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=$(function(e,r){return Be(p(ws,e,r,L))}),Ic=y(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(ys,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(Ic,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),xs=$(function(e,r){return p(Ic,0,e,r)}),Ss=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(h([a]),t)),c=o(xs,e,i),l=o(Xc,e,i);if(l.b){var u=l.a,v=l.b;return o(je,sa,{B:u,ab:v,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(je,sa,{B:d,ab:L,T:m})}else return r}}),Ts=function(e){var r=e.b;return o(je,sa,r)},Cs=function(e){var r=e.b;return o(je,Gc({cX:rn(e).db}),r)},Ls=$(function(e,r){switch(e.$){case 1:return Ts(r);case 2:return Hc(r);case 3:return Cs(r);default:var n=e.a;return o(Ss,n,r)}}),Uc=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Ps=$(function(e,r){return qe(r,{av:e(r.av)})}),zs=function(e){return{$:3,a:e}},Jc=function(e){return{$:2,a:e}},Oc=$(function(e,r){return{$:0,a:e,b:r}}),ks=$(function(e,r){return{$:1,a:e,b:r}}),Le=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Z=function(e){return e<0?-e:e},lo=Mv,Ms=y(function(e,r,n){return o(fr,0/0,lo(o(e,r,n)))}),qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ds=wv,Yc=function(e){return p(Ds,k,L,e)},As=$(function(e,r){var n=o(qc,function(a){return a!=="0"&&a!=="."},Yc(r));return le(e&&n?"-":"",r)}),pe=ec,ht=bv,Zc=Bv,Qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",Qc(t))}else{var i=Qe(r);return i>=48&&i<57?o(ht,Zc(i+1),n):"0"}},_t=vv,Bs=mv,Da=function(e){return o(ht,e,"")},Kc=y(function(e,r,n){return e<=0?n:p(Kc,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(Kc,e,r,"")}),wt=y(function(e,r,n){return le(n,o(Sn,e-kr(n),Da(r)))}),yt=_v,el=function(e){var r=o(eo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Fs=function(e){var r=o(eo,"e",pe(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,Nc(o(cs,"+",t)?o(Mn,1,t):t)),c=el(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(fr,"0",o(Le,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Le,Uc(Da),en(le(o(Sn,Z(i),"0"),v))))):p(wt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Vs=y(function(e,r,n){if(_t(n)||Bs(n))return pe(n);var a=n<0,t=el(Fs(Z(n))),i=t.a,c=t.b,l=kr(i)+r,u=le(o(Sn,-l+1,"0"),p(wt,l,"0",le(i,c))),v=kr(u),s=o(Ke,1,l),d=o(e,a,p(Hr,s,v,u)),m=p(Hr,0,s,u),f=d?yt(o(fr,"1",o(Le,Qc,en(yt(m))))):m,g=kr(f),b=f==="0"?f:r<=0?le(f,o(Sn,Z(r),"0")):J(r,kr(c))<0?p(Hr,0,g-r,f)+("."+p(Hr,g-r,g,f)):le(i+".",p(wt,r,"0",c));return o(As,a,b)}),mn=Vs($(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Qe(t))})),Rs=Ms(mn),Es=y(function(e,r,n){var a=o(no,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Rs,t,n)}),rl=ev,Aa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(rl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},qr=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),xt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(rl,e,t);switch(u){case 0:return S(qr,a,t,i,p(xt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(qr,a,t,i,c,p(xt,e,r,l))}}),pn=y(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},nl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},Ns=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ea(t),l);var u=nl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,v,s,d,ea(m),f)}else return nr}else return S(X,r,n,a,ea(t),l)}else return nr},bn=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(bn,e,i),c);var u=nl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,v,s,d,o(bn,e,m),f)}else return nr}else return S(X,n,a,t,o(bn,e,i),c);else return o(Ws,e,Nt(Ns,e,r,n,a,t,i,c))}),Ws=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=js(c);if(l.$===-1){var u=l.b,v=l.c;return S(qr,n,u,v,i,ea(c))}else return nr}else return S(qr,n,a,t,i,o(bn,e,c))}else return nr}),Gs=$(function(e,r){var n=o(bn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Xn=y(function(e,r,n){var a=r(o(Aa,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(pn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Xn,r,Le(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(ks,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Xn,r,Le(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Oc,P(i,c),p(Es,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Xn,r,Le(function(a){return a.$===3?zs(n):a}));default:var r=e.a,n=e.b;return o(Xn,r,Le(function(a){return a.$===2?Jc(n):a}))}},Xs=function(e){return Ps(Hs(e))},Is=$(function(e,r){return o(re,Xs(e),r)}),Us=$(function(e,r){return qe(r,{eA:o(Is,e,r.eA)})}),Js=$(function(e,r){var n=r.a,a=r.b;return o(je,n,qe(a,{B:o(Uc,Us(e),a.B)}))}),Os=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),qs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,qe(t,{B:o(Os,o(e,i.a,r),i)}))}),Ys=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(Js,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(qs,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(Ls,l,a.G)})}}),Zs=$(function(e,r){return o(je,Ma,{B:P(e,r(e)),ab:L,T:L})}),Qs=r$,di=Qs(L),da=jv,Tn=Ev,Ks=i$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",da(Tn)))},o(D,"left",Y))},o(D,"pressedKeys",da(Tn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),ed=function(e){return{$:4,a:e}},rd={$:0},nd=nc,He=$(function(e,r){return o(lc,e,nd(r))}),U=He("className"),ad=function(e){var r=e.b.B;return r.b},ma=He("id"),td=f$,pa=td,od=s$,he=od,id={$:1},cd=function(e){return{$:3,a:e}},ld=function(e){return{$:5,a:e}},mi=mr("a"),uo=mr("button"),ud=zn("d"),al=ic("http://www.w3.org/2000/svg"),vd=al("path"),$d=al("svg"),fd=zn("viewBox"),gn=function(e){return o($d,h([fd("0 0 100 100"),o(he,"width","100%"),o(he,"height","100%")]),h([o(vd,h([ud(e)]),L)]))},pi=function(e){return o(He,"href",m$(e))},Ir={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},sd=function(e){return{$:0,a:e}},tl=cc,ol=$(function(e,r){return o(tl,e,sd(r))}),vo=function(e){return o(ol,"click",Me(e))},bi=He("target"),dd=He("title"),St=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),md=st,ge=md,pd=function(e){return p(Qt,y(function(r,n,a){return o(k,n,a)}),L,e)},bd=$(function(e,r){return{$:3,a:e,b:r}}),gd=$(function(e,r){return{$:2,a:e,b:r}}),hd=$(function(e,r){return{$:0,a:e,b:r}}),_d=$(function(e,r){return{$:1,a:e,b:r}}),An=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$o=C(An,0/255,0/255,0/255,1),wd=nc,yd=$(function(e,r){return o(lc,e,wd(r))}),xd=yd("checked"),Ue=sv,Sd=y(function(e,r,n){return le(o(Sn,e-kr(n),Da(r)),n)}),ba=tv,il=function(e){var r=function(n){return n<10?Ae(n):Da(Zc(87+n))};return e<16?r(e):le(il(e/16|0),r(o(ba,16,e)))},Td=o(ae,il,o(Sd,2,"0")),fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Cd=function(e){var r=fo(e),n=r.cM,a=r.cc,t=r.b5;return o(zr,"",o(k,"#",o(re,o(ae,Ue,Td),h([n*255,a*255,t*255]))))},Tt=He("htmlFor"),Ld=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Pd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),Ba=$(function(e,r){return p(ar,Pd(e),L,r)}),cl=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),zd=E$,kd=Dv,Md=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Dd=R$,Ad=function(e){return o(Dd,{ew:!1,fe:!1},e)},Fa=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Bd=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),Fd=function(e){return{$:2,a:e}},Vd=function(e){return{$:0,a:e}},Rd=function(e){return{$:1,a:e}},Ha=$(function(e,r){return Qe(r)-Qe(e)}),Xa=y(function(e,r,n){var a=Qe(n);return J(Qe(e),a)<1&&J(a,Qe(r))<1}),Ed=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):xe(Rd(r))},a=p(Xa,"0","9",r)?ue(o(Ha,"0",r)):p(Xa,"a","z",r)?ue(10+o(Ha,"a",r)):p(Xa,"A","Z",r)?ue(10+o(Ha,"A",r)):xe(Vd(r));return o(ga,n,a)}),ll=$(function(e,r){var n=en(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return ue(c+l*e)},o(ll,e,i))},o(Ed,e,t))}),jd=$(function(e,r){return 2<=e&&e<=36?o(ll,e,yt(r)):xe(Fd(e))}),Nd=jd(16),Wd=y(function(e,r,n){return C(An,e,r,n,1)}),Gd=R(function(e,r,n,a){return C(An,e,r,n,a)}),Bn=av,Hd=$(function(e,r){var n=o(Bn,10,e);return Ue(r*n)/n}),Xd=Tv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yc(n);if(a.b&&!a.b.b){var t=a.a;return kd(h([t,t]))}else return n};return o(ae,Xd,o(ae,function(n){return o(Le,function(a){return p(zd,1,a,n)},Ad(e))},o(ae,Ld(Fa),o(ae,Le(function(n){return n.fF}),o(ae,Le(Ba(Mr)),o(ae,Md("Parsing hex regex failed"),ga(function(n){var a=o(re,o(ae,r,o(ae,Nd,Bd(Yf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Gd,t/255,c/255,u/255,o(Hd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Wd,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),ha=mr("input"),Ct=mr("label"),Lt=He("name"),ul=$(function(e,r){return p(ar,D,r,e)}),Ud=o(ul,h(["target","checked"]),Y),Jd=function(e){return o(ol,"change",o($a,e,Ud))},Od=function(e){return P(e,!0)},qd=function(e){return{$:1,a:e}},Yd=$(function(e,r){return o(tl,e,qd(r))}),Zd=o(ul,h(["target","value"]),Tn),so=function(e){return o(Yd,"input",o($a,Od,o($a,e,Zd)))},vl=He("max"),$l=He("min"),fl=function(e){return o(He,"step",e)},_a=He("type"),mo=He("value"),gi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,h([o(Ct,h([Tt(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([ge(r)])),o(I,h([U("inline-block float-right")]),h([ge(pe(n))]))]))])),o(ha,h([_a("range"),o(he,"width","100%"),ma(r),Lt(r),$l(pe(a)),vl(pe(t)),mo(pe(n)),fl(pe(i)),so(o(ae,lo,o(ae,fr(42),c)))]),L)]))},Qd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Kd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(Ct,h([Tt(e)]),h([ge(e)]))])),o(ha,h([_a("checkbox"),ma(e),Lt(e),Jd(bd(e)),xd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return gi({cf:e,cr:i,cv:t,cz:hd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return gi({cf:e,cr:i,cv:t,cz:o(ae,Ue,_d(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,h([o(I,h([o(he,"margin-bottom","6px")]),h([o(Ct,h([Tt(e)]),h([ge(e)]))])),o(ha,h([_a("color"),o(he,"width","100%"),o(he,"height","26px"),o(he,"padding","0px"),ma(e),Lt(e),so(function(l){return o(gd,e,o(Qd,$o,Id(l)))}),mo(Cd(c))]),L)]))}}),em=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([ge(e.ff)])),o(I,h([U("pl-2 pr-2")]),pd(o(St,Kd,e.av)))]))},rm=function(e){return o(I,h([U("text-xs text-white60")]),o(re,em,e))},nm=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ge("clock: "+o(mn,3,rn(e).db))]))},am=function(e){e.a;var r=e.b.T;return o(Le,function(n){return Ue(60/(rn(e).db-n))},o(Le,o(ae,Kf,function(n){return n.db}),Fa(o(Xc,59,r))))},tm=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=am(e);if(r.$===1)return h([ge("... Fps")]);var n=r.a;return h([ge(Ae(n)+" Fps")])}())},om=function(e){return{$:0,a:e}},im=function(e){var r=e.b.T;return Fr(r)},cm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},lm=function(e){return o(ha,h([U("absolute left-[100px] w-[490px]"),_a("range"),$l(Ae(0)),vl(Ae(cm(e)-1)),mo(Ae(im(e))),fl(Ae(1)),so(o(ae,lo,o(ae,fr(42),o(ae,Ue,om))))]),L)},hi={$:1},um={$:3},vm={$:2},sl=function(e){return!e.b},_i=$(function(e,r){return o(uo,h([U("px-2 bg-black40"),U(r),vo(e)]),h([ge("REC")]))}),wi=$(function(e,r){return o(uo,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),vo(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([gn(e)]))]))}),$m=function(e){var r=e.a,n=e.b.ab;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(_i,hi,"text-red-500 font-bold");case 1:return o(_i,vm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return sl(n)?o(I,L,L):o(wi,Ir.fo,um);default:return o(wi,Ir.fn,hi)}}()]))},fm=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([lm(e),$m(e),tm(e),nm(e)]))},dl=function(e){return o(zr,"",e)},sm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(ar,t,L,a);return o(k,n,i)}else return L}),dm=function(e){var r=e.a;return _r(r,Ma)},Lr=mr("p"),mm=mr("pre"),pm=$(function(e,r){var n=dm(r.G)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(he,"left",pe(e.fp.fT+.5*e.cS.fR)+"px"),o(he,"top",pe(-e.fp.fX+.5*e.cS.eW)+"px")]),h([o(I,h([U(e.fp.e4?"fill-black80":"fill-white40")]),h([gn(Ir.fp)]))]));return o(I,L,h([n,o(mm,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Lr,L,h([ge("pressedKeys: "+dl(o(sm," ",e.e7.fq)))])),o(Lr,L,h([ge("delta time: "+o(mn,4,e.eJ))])),o(Lr,L,h([ge("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(Lr,L,h([ge("pointer.x: "+o(mn,2,e.fp.fT))])),o(Lr,L,h([ge("pointer.y: "+o(mn,2,e.fp.fX))])),o(Lr,L,h([ge("wheel deltaX: "+pe(e.fQ.eD))])),o(Lr,L,h([ge("wheel deltaY: "+pe(e.fQ.eE))]))]))]))}),bm=$(function(e,r){var n=o(uo,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),vo(id),dd("Distraction Free Mode")]),h([gn(Ir.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(mi,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),h([gn(Ir.fL)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(mi,h([U("fill-githubCat40 hover:fill-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),h([gn(Ir.eQ)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(pa,cd,rm(rn(r.G).eA))])),o(pa,ld,fm(r.G)),o(pm,e,r)]))}),gm=y(function(e,r,n){var a=ad(n.G),t=rn(n.G);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(he,"width",pe(t.cS.fR)+"px"),o(he,"height",pe(t.cS.eW)+"px")]),h([o(I,h([U("fixed")]),h([o(pa,Ec(rd),o(e,t,a))])),o(I,h([ma("gui")]),h([o(bm,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(pa,ed,o(r,t,a))]))]))]))}),hm=Ge(function(e,r,n,a,t,i){var c=$(function(u,v){return P(C(Ys,r,i,u,v),di)}),l=function(u){var v=o(jc,n,u.e1);return P({aL:u.e1.cS.fR<500,G:o(Zs,v,a)},di)};return bs({e0:l,fG:Ec(Ks(ts)),fM:c,fP:o(gm,e,t)})}),_m=R(function(e,r,n,a){return ye(hm,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),wm=function(e){return{}},ym=$(function(e,r){return P(e,Jc(r))}),xm=y(function(e,r,n){return{av:n,e5:r,ff:e}}),ml=nr,Sm=function(e){return p(kn,$(function(r,n){var a=r.a,t=r.b;return p(pn,a,t,n)}),ml,e)},Tm=y(function(e,r,n){return p(xm,e,r,Sm(n))}),Ia=Tm,In=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Oc,P(a,t),n))}),Cm=R(function(e,r,n,a){var t=F(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(An,f,m,d,a)}),Lm=y(function(e,r,n){return C(Cm,e,r,n,1)}),er=ov,Pm=h([p(Ia,"Camera",!0,h([p(In,"camera distance",P(3,8),8),p(In,"camera azimuth",P(0,2*er),0),p(In,"camera elevation",P(-er/2,er/2),.5)])),p(Ia,"Color",!0,h([o(ym,"cube color",p(Lm,0,.36,.5))])),p(Ia,"Time",!0,h([p(In,"period",P(.1,5),.7)]))]),zm=$(function(e,r){return r}),km=$(function(e,r){return o(Le,function(n){if(n.$)return 0;var a=n.b;return a},o(Aa,e,r.av))}),Mm=$(function(e,r){return o(fr,0,Fa(o(Ba,km(e),r)))}),Dm=$(function(e,r){return o(Mm,e,r.eA)}),ra=Dm,Yr=function(e){return e},$n=function(e){return Yr(er*(e/180))},Am=function(e){return e},hr=function(e){return e},Pt=function(e){var r=e;return-r},Bm=$(function(e,r){var n=e,a=r;return{fT:n.fX*a.c5-n.c5*a.fX,fX:n.c5*a.fT-n.fT*a.c5,c5:n.fT*a.fX-n.fX*a.fT}}),pl=function(e){var r=e;return r.c3},bl=function(e){var r=e;return r.c4},Fm=function(e){return o(Bm,pl(e),bl(e))},Er=function(e){var r=e;return r.cA},Vr=iv,Zr=cv,Ua=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=Zr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),T=s.c5*u,M=l*T,W=2*(w-M),j=2*(w+M),E=d*T,N=2*(E+b),G=2*(E-b),B=g*T,O=2*(B-m),Q=2*(B+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+W*i.fX+N*i.c5,fX:j*i.fT+oe*i.fX+O*i.c5,c5:G*i.fT+Q*i.fX+_*i.c5}}),Vm=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=Zr(c),v=a.cA,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,x=l*w,_=w*w,T=b.fX*u,M=l*T,W=w*T,j=T*T,E=1-2*(_+j),N=b.c5*u,G=l*N,B=2*(W-G),O=2*(W+G),Q=w*N,ie=2*(Q+M),ve=2*(Q-M),oe=T*N,de=2*(oe-x),ke=2*(oe+x),Te=N*N,pr=1-2*(j+Te),br=1-2*(_+Te);return{fT:s.fT+pr*d+B*m+ie*f,fX:s.fX+O*d+br*m+de*f,c5:s.c5+ve*d+ke*m+E*f}}),sr=function(e){return e},Sr=function(e){var r=e;return r.c3},Tr=function(e){var r=e;return r.c4},Cr=function(e){var r=e;return r.c6},Rm=y(function(e,r,n){return sr({cA:p(Vm,e,r,Er(n)),c3:p(Ua,e,r,Sr(n)),c4:p(Ua,e,r,Tr(n)),c6:p(Ua,e,r,Cr(n))})}),yi=y(function(e,r,n){return p(Rm,e(n),r,n)}),po=function(e){var r=e;return r.eG},Fn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),gl=$(function(e,r){return sr({cA:o(Fn,e,Er(r)),c3:Sr(r),c4:Tr(r),c6:Cr(r)})}),Em=$(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c5:n*a.c5}}),jm=y(function(e,r,n){return o(gl,o(Em,r,e),n)}),Nm=y(function(e,r,n){return p(jm,po(e(n)),r,n)}),Vn=$(function(e,r){return{eG:r,cA:e}}),Wm=function(e){var r=e;return o(Vn,r.cA,r.c3)},Gm=function(e){var r=e;return o(Vn,r.cA,r.c4)},Hm=function(e){var r=e;return o(Vn,r.cA,r.c6)},Xm=function(e){var r=sr({cA:e.aR,c3:bl(e.dl),c4:Fm(e.dl),c6:pl(e.dl)}),n=p(Nm,Hm,e.cb,p(yi,Wm,Pt(e.bC),p(yi,Gm,e.bx,r)));return n},Im=function(e){return{$:0,a:e}},se=function(e){var r=e;return Z(r)},na=function(e){var r=e;return .5*r},Um=lv,Jm=function(e){var r=e;return Um(r)},Om=function(e){var r=na(se(e.ej)),n=Jm(r);return{cL:Im(n),c1:e.c1}},ir={fT:0,fX:0,c5:0},hl=Mr,ur=function(e){return e},_l=ur({fT:1,fX:0,c5:0}),bo=_l,go=ur({fT:0,fX:0,c5:1}),ho=go,qm=hl({cA:ir,c3:ho,c4:bo}),Ym=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Om({ej:$n(40),c1:Xm({bx:Yr(n),cb:hr(t),bC:Yr(a),aR:Am(r),dl:qm})})},Zm=function(e){return Ym({bx:o(ra,"camera azimuth",e),cb:o(ra,"camera distance",e),bC:o(ra,"camera elevation",e),aR:{fT:0,fX:0,c5:0}})},xi=function(e){return e*er/180},_o=$(function(e,r){return{$:0,a:e,b:r}}),wl=$(function(e,r){return{$:2,a:e,b:r}}),yl=function(e){return{$:5,a:e}},xl=$(function(e,r){return{$:4,a:e,b:r}}),Sl=$(function(e,r){return{$:3,a:e,b:r}}),Tl=$(function(e,r){return{$:1,a:e,b:r}}),Qm=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),Km=function(e){var r=e;return r},wo=function(e){var r=e;return Km(r.er)},yo=function(e){var r=e;return r.aK},e0=$(function(e,r){return{er:o(gl,e,wo(r)),aK:yo(r)}}),r0=$(function(e,r){var n=r;return o(Vn,o(Fn,e,n.cA),n.eG)}),n0=$(function(e,r){var n=r;return{k:o(r0,e,n.k),e9:n.e9,fr:n.fr}}),xo=function(e){var r=e;return r},a0=function(e){return e},Cl=$(function(e,r){var n=xo(r),a=n.a,t=n.b;return a0(P(e(a),e(t)))}),t0=$(function(e,r){return o(Cl,Fn(e),r)}),So=function(e){var r=e;return r.ey},To=function(e){var r=e;return r.fr},Ll=$(function(e,r){return{ey:r,fr:se(e)}}),o0=$(function(e,r){return o(Ll,To(r),o(Fn,e,So(r)))}),Pl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return F(e(a),e(t),e(i))}),i0=$(function(e,r){return o(Pl,Fn(e),r)}),zl=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Qm,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(_o,s,o(e0,i,c));case 1:var s=r.a,l=r.b;return o(Tl,s,o(i0,i,l));case 3:var s=r.a,u=r.b;return o(Sl,s,o(o0,i,u));case 2:var s=r.a,v=r.b;return o(wl,s,o(n0,i,v));case 4:var s=r.a,d=r.b;return o(xl,s,o(t0,i,d));default:var m=r.a;return yl(o(re,zl(F(n,a,t)),m))}}),Si=function(e){return zl(F(e,0,0))},Ja=function(e){return e/255},c0=y(function(e,r,n){return C(An,Ja(e),Ja(r),Ja(n),1)}),l0=function(e){return e},u0=function(e){return hr(.01*e)},Ti=function(e){return e},v0=function(e){return e},$0=function(e){return{$:0,a:e}},f0=$0,s0={$:3},d0=s0,m0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),p0=m0,b0=$(function(e,r){return r.b?p(ar,k,r,e):e}),Ne=function(e){return p(ar,b0,L,e)},Co=$(function(e,r){return Ne(o(re,e,r))}),g0=function(e){return{$:1,a:e}},h0=g0,_0=function(e){return o(zn,"height",Ae(e))},w0=function(e){return v$(d$(e))},y0=w0,x0=function(e){return{$:2,a:e}},S0=x0,T0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ue(l*1e3)/1e3},c=function(l){return Ue(l*1e4)/100};return dl(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},C0=$(function(e,r){switch(r.$){case 0:return o(ff,e,r);case 1:return o(sf,e,r);case 2:return o(df,e,r);case 3:return o(mf,e,r);case 4:return o(pf,e,r);default:return o(bf,e,r)}}),L0=$(function(e,r){switch(r.$){case 0:return o(W$,e,r);case 1:return o(G$,e,r);case 2:return o(H$,e,r);case 3:return o(X$,e,r);case 4:return o(I$,e,r);case 5:return o(U$,e,r);case 6:return o(J$,e,r);case 7:return o(O$,e,r);default:return q$(e)}}),P0=y(function(e,r,n){return p($f,e,r,n)}),Ci=function(e){var r=e;return r},nn=Pf,Oa=C(nn,1,1,1,1),Je=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),z0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),k0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(z0,n*a/t,n,n*(1-a-t)/t)}),Rn=yf,M0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Lo=$(function(e,r){return M0(o(k0,e,r))}),kl=$(function(e,r){return{dp:_r(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ye=Bf,D0=function(e){return Ye({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},qa=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(nn,a.bX,a.bX,a.bX,i);return ye(t,e,c,D0(a),a.dp,r,n)}),Ml=Ge(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(kl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(qa,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(k,S(qa,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,T=o(k,S(qa,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(kn,C(Ml,e,r,n,a),i,M)}}),A0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Dl=A0,Po=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),B0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Po,518,r,n,a)},F0=$(function(e,r){return{$:6,a:e,b:r}}),V0=F0,Al=h([B0({V:1,W:0,Z:!1}),C(Dl,!1,!1,!1,!1),o(V0,0,1)]),Qr=519,zo=8,Bl=15,Ur=7681,R0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=N$,E0=$(function(e,r){return{$:0,a:e,b:r}}),j0=E0({df:1,$7:0,dV:5}),De=_f,N0=j0(h([{bT:o(De,-1,-1)},{bT:o(De,1,-1)},{bT:o(De,-1,1)},{bT:o(De,1,1)}])),W0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},G0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},ko=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(G0,a,t,i)))}),Mo=function(e){return p(ko,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Do=function(e){return S(ne,h([Mo(e),C(Dl,!1,!1,!1,!1)]),W0,R0,N0,{})},H0=Do({a8:Ur,co:0,cN:zo,bl:Qr,c2:Bl,bt:Ur,bu:Ur}),X0=516,Li=5386,Se=7680,I0=function(e){return o(Bn,2,e+4)},Fl=function(e){return Do({a8:Se,co:Bl,cN:zo,bl:X0,c2:I0(e),bt:Li,bu:Li})},U0=y(function(e,r,n){return Ne(h([p(Je,e,n,Al),h([Fl(r),H0])]))}),J0=$(function(e,r){return Ne(o(kc,U0(e),r))}),O0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Po,513,r,n,a)},q0=O0({V:1,W:0,Z:!0}),Y0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Z0=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return Y0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Q0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Pi=$(function(e,r){var n=e,a=r;return p(Q0,32774,n,a)}),K0=1,zi=771,ep=770,Ao=Z0({bv:0,aH:o(Pi,K0,zi),by:0,bA:o(Pi,ep,zi),bF:0,bV:0}),jr=h([q0,Ao]),rp=function(e){var r=e;return r.dO},np=function(e){var r=e;return r.dP},Vl=function(e){var r=e;return r.dQ},ap=function(e){var r=e;return r.dR},tp=function(e){var r=e;return r.dS},Rl=function(e){var r=e;return r.dT},vr=$(function(e,r){var n=e,a=r;return a-n}),El=function(e){return F(o(vr,ap(e),rp(e)),o(vr,tp(e),np(e)),o(vr,Rl(e),Vl(e)))},ki=function(e){var r=e;return Er(r)},op=function(e){return e},ip=function(e){return sr({cA:op({fT:e.H,fX:e.I,c5:e.J}),c3:ur({fT:e.q,fX:e.r,c5:e.s}),c4:ur({fT:e.t,fX:e.u,c5:e.v}),c6:ur({fT:e.w,fX:e.x,c5:e.y})})},Ya=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c5*v.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),jl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),Nl=$(function(e,r){return{cA:o(jl,e,Er(r)),c3:o(Ya,e,Sr(r)),c4:o(Ya,e,Tr(r)),c6:o(Ya,e,Cr(r))}}),zt=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),wa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Ke,n,a)}),aa=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),cp=$(function(e,r){var n=wa(r),a=wa(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},lp=function(e){var r=e;return F(r.fT,r.fX,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),up=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(se(a)),c=na(se(n)),l=na(se(t)),u=lp(r),v=u.a,s=u.b,d=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o(vr,c,v),dS:o(vr,i,s),dT:o(vr,l,d)}}),Mi=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fX*r,s=t.fT*r,d=We(Cr(e)),m=Z(l*d.fT)+Z(c*d.fX)+Z(i*d.c5),f=We(Tr(e)),g=Z(l*f.fT)+Z(c*f.fX)+Z(i*f.c5),b=We(Sr(e)),w=Z(l*b.fT)+Z(c*b.fX)+Z(i*b.c5),x=o(up,F(w,g,m),o(jl,e,p(zt,s,v,u)));if(a.$)return te(x);var _=a.a;return te(o(cp,_,x))}),kt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Mi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Mi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(kt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Nl,ip(v),e),m=r*v.bX,f=e,g=r,b=C(kt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),an=xf,tn=Sf,on=Tf,Wl=function(e){return{$:4,a:e}},vp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Wl(o(vp,e,L))},$p={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},fp=function(e){var r=e;return r},Di=Do({a8:Ur,co:0,cN:zo,bl:Qr,c2:255,bt:Ur,bu:Ur}),Xr=dv,cr=0,sp=function(e){var r=e,n=o(Ke,Z(r.fT),o(Ke,Z(r.fX),Z(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=Xr(i*i+t*t+a*a);return c*n}else return cr},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Re=$(function(e,r){var n=e,a=r;return Ye({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),fn=P({bd:o(Re,Ce,Ce),bK:o(Re,Ce,Ce),bL:o(Re,Ce,Ce),bM:o(Re,Ce,Ce)},C(nn,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),Gl=514,Hl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Po,515,r,n,a)},Xl=240,dp=h([Hl({V:1,W:0,Z:!0}),Mo({a8:Se,co:Xl,cN:0,bl:Gl,c2:0,bt:Se,bu:Se}),Ao]),mp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=se(a),l=c,u=se(t),v=u,s=n.cL;if(s.$){var m=s.a;return _t(v)?Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return _t(v)?Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Un=$(function(e,r){return(1&e>>r)===1?0:1}),pp=function(e){return h([Hl({V:1,W:0,Z:!0}),Mo({a8:Se,co:Xl,cN:e,bl:Gl,c2:0,bt:Se,bu:Se}),Ao])},bp=y(function(e,r,n){return Ne(o(re,function(a){var t=a<<4,i=C(nn,o(Un,a,0),o(Un,a,1),o(Un,a,2),o(Un,a,3));return p(Je,e,P(r,i),pp(t))},o(Or,1,o(Bn,2,n)-1)))}),$r=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Jr=function(e){var r=e;return r},gp=Ff,Ai=function(e){var r=e;return $r(Cr(r))},Il=ur({fT:0,fX:1,c5:0}),Ul=Il,hp={cA:ir,c3:bo,c4:Ul,c6:ho},Va=function(e){var r=e;return r},_p=function(e){var r=Va(Er(e)),n=We(Cr(e)),a=We(Tr(e)),t=We(Sr(e));return Ye({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},wp=$(function(e,r){var n=r;return _p(o(Nl,n,e))}),yp=function(e){return o(wp,hp,e)},xp=function(e){var r=e;return r.c1},Sp=function(e){var r=e;return Sr(r)},Tp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),Cp=function(e){var r=e;return Tr(r)},Lp=function(e){var r=xp(e.ev),n=sr({cA:ki(r),c3:Sp(r),c4:Cp(r),c6:$r(Ai(r))}),a=En(e.aP),t=a,i=C(kt,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=yp(r),u=o(K,.99,o(ce,se(e.aJ),Pt(Vl(c)))),v=El(c),s=v.a,d=v.b,m=v.c,f=sp(p(Tp,s,d,m)),g=o(K,1.01,o(hn,f,Pt(Rl(c)))),b=o(mp,e.ev,{eq:e.eq,eP:g,fg:u}),w=gp(b).dM,x=w?We($r(Ai(r))):Jr(ki(r)),_=function(){var oe=e.bZ;switch(oe.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var de=oe.a;return P(3,de);case 4:var de=oe.a;return P(4,de);default:return P(5,0)}}(),T=_.a,M=_.b,W=e.bD,j=W,E=o(Lo,j,e.b$),N=E,G=Ye({dx:0,dy:x.fT,dz:an(N),dA:e.ec,dB:0,dC:x.fX,dD:tn(N),dE:fp(f),dF:0,dG:x.c5,dH:on(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),B=ye(Ml,G,l,b,$p,t,{M:L,U:L,fz:L}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return Ne(h([p(Je,B.M,P(Q,Oa),jr),p(Je,B.U,fn,jr)]));case 1:var Q=O.a;return Ne(h([p(Je,B.M,fn,jr),h([Di]),p(Je,B.fz,Q.bd,Al),h([Fl(0)]),p(Je,B.M,P(Q,Oa),dp),p(Je,B.U,fn,jr)]));default:var ie=O.a,ve=O.b;return Ne(h([p(Je,B.M,P(ve,Oa),jr),h([Di]),o(J0,B.fz,ie),p(bp,B.M,ve,Fr(ie)),p(Je,B.U,fn,jr)]))}},Pp=function(e){return o(zn,"width",Ae(e))},zp=$(function(e,r){var n=h([h0(1),S0(0),f0(!0),C(p0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return F(n,"0",1);case 1:return F(o(k,d0,n),"1",1);default:var M=T.a;return F(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ci(v),d=o(he,"height",Ae(s)+"px"),m=Ci(u),f=m/s,g=o(Co,function(T){return Lp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(he,"width",Ae(m)+"px"),w=e.aI,x=w,_=T0(x);return p(y0,"div",h([o(he,"padding","0px"),b,d]),h([P(i,p(P0,t,h([Pp(Ue(m*c)),_0(Ue(s*c)),b,d,o(he,"display","block"),o(he,"background-color",_)]),g))]))}),kp=function(e){return o(zp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Jl=function(e){return e},Bi=Jl({fT:.31271,fX:.32902}),Mp=$(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(Lo,r.cd,r.b6),u=l;return{by:on(u),ex:n,bF:tn(u),cJ:0,bV:an(u),cZ:1,fT:-t,fX:-i,c5:-c}}),Dp=function(e){return e},Ap=function(e){return Dp(1.2*o(Bn,2,e))},Za=function(e){return e},Bp={$:0},Fp=Bp,Ol=function(e){return e},Vp=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Fi=function(e){var r=e;return r},Rp=function(e){e:for(;;){if(_r(e.e2,cr)&&_r(e.e3,cr))return Ce;if(o(Vp,se(e.e2),se(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:$r(e.ei)};e=r;continue e}else{var n=Z(Fi(e.e3)/er),a=Z(Fi(e.e2)/er),t=We(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(Lo,Ol(1),e.b6),v=u;return{by:a*on(v),ex:!1,bF:a*tn(v),cJ:n/a,bV:a*an(v),cZ:3,fT:i,fX:c,c5:l}}}},Vi=function(e){return Rp({b6:e.b6,e2:e.cd,e3:cr,ei:e.ei})},ql=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Ep=function(e){var r=e;return r},Yl=function(e){var r=p(ql,1667,25e3,Ep(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Jl({fT:n,fX:a})},Zl=function(e){return e},jp=Yl(Zl(12e3)),Np=Yl(Zl(5600)),Wp=function(e){return{$:2,a:e}},Gp=function(e){return Wp(e)},Hp=$(function(e,r){return{$:2,a:e,b:r}}),Ql=function(e){return{$:0,a:e}},Jn=function(e){var r=e;return r},Xp=function(e){var r=e;return r.ex},Ip=Ql(fn.a),Up=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(k,a,i),c):P(i,o(k,a,c))});return p(ar,n,P(L,L),r)}),Jp=function(e){var r=e;return Ye({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Op=ee(function(e,r,n,a,t,i,c,l){var u=o(Up,Xp,h([Jn(e),Jn(r),Jn(n),Jn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Hp,o(re,Jp,v),{bd:o(Re,m,g),bK:o(Re,w,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return Ip}else return Ql({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),qp=y(function(e,r,n){return Ca(Op,e,r,n,Ce,Ce,Ce,Ce,Ce)}),Yp=function(e){var r=o(Mp,v0(e.fz),{b6:Np,eG:e.fI,cd:Za(8e4)}),n=Vi({b6:jp,cd:Za(2e4),ei:e.ei}),a=Vi({b6:Bi,cd:Za(15e3),ei:$r(e.ei)}),t=p(qp,r,n,a);return kp({b0:Gp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Ap(15),bJ:t,bZ:Fp,b$:Bi})},Kl=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Zp=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),eu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ru=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Qp=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Kp=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),e3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Bo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(e3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Kl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(Zp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(eu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(Kp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(ru,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(Qp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Fo={$:0},r3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=wa(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),n3=y(function(e,r,n){var a=wa(e(r));return Ca(r3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=$(function(e,r){var n=e,a=r;return J(a,n)<1}),nu=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Cn=function(e){var r=e;return r},Dr=function(e){var r=e;return r.fT},Ar=function(e){var r=e;return r.fX},Br=function(e){var r=e;return r.c5},au=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Dr(n),c=Ar(n),l=Br(n),u=Dr(a),v=Ar(a),s=Br(a),d=Dr(t),m=Ar(t),f=Br(t);return nu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},tu=Cf,Pe=function(e){return tu(Va(e))},ou=function(e){var r=e;return r},Ra=function(e){return tu(ou(e))},a3=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),Mt=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),t3={fT:0,fX:0,c5:0},o3=$(function(e,r){var n=e,a=r,t=o(Ke,Z(a.fT),o(Ke,Z(a.fX),Z(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=Xr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return t3}),i3=o3(Ol(1)),iu=y(function(e,r,n){var a=o(Mt,r,n),t=o(Mt,e,r);return i3(o(a3,a,t))}),c3=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Ra(p(iu,n,a,t));return F({o:i,bT:Pe(n)},{o:i,bT:Pe(a)},{o:i,bT:Pe(t)})},l3=$(function(e,r){return{$:2,a:e,b:r}}),cu=l3({df:3,$7:0,dV:4}),u3=function(e){if(e.b){var r=e.a,n=e.b,a=cu(o(re,c3,e)),t=p(n3,au,r,n);return C(Kl,t,e,a,0)}else return Fo},Ve=y(function(e,r,n){return F(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),lu=function(){var e=hr(1),r=hr(1),n=hr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(me,i,t,a),l=o(K,.5,e),u=p(me,i,t,l),v=o(K,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(K,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Bo(u3(h([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),On={$:0},v3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),$3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ra(p(iu,u,l,c)),s={o:v,bT:Pe(u)},d={o:v,bT:Pe(l)},m={o:v,bT:Pe(c)};return o(k,s,o(k,d,o(k,m,n)))}),Vo=function(e){var r=e;return r.D},f3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),Dt=4294967295>>>32-xn,At=Zu,s3=y(function(e,r,n){e:for(;;){var a=Dt&r>>>e,t=o(At,a,n);if(t.$){var v=t.a;return o(At,Dt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),d3=function(e){return e>>>5<<5},m3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,d3(n))>-1?te(o(At,Dt&e,i)):te(p(s3,a,e,t))}),Ro=function(e){var r=e;return r.ah},Ka=$(function(e,r){return o(m3,e,Ro(r))}),p3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(f3,y(function(c,l,u){return F(c,l,u)}),o(Ka,a,e),o(Ka,t,e),o(Ka,i,e))};return o(Ba,r,Vo(e))},b3=y(function(e,r,n){e:for(;;){var a=o(ao,Fe,e),t=a.a,i=a.b;if(J(gt(t),Fe)<0)return o(Rc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Fc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Eo=function(e){return e.b?p(b3,e,L,0):Ac},g3=y(function(e,r,n){return e(r(n))}),h3=$(function(e,r){return!o(qc,o(g3,gs,e),r)}),_3=$(function(e,r){return p(ar,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),w3=function(e){var r=e.a;return r},uu=$(function(e,r){var n=w3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(h3,a,r)?{D:r,ah:e}:{D:o(_3,a,r),ah:e}}),y3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=y3({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Jr(r),a=Jr(e);return P(F(a.fT,a.fX,a.c5),F(n.fT,n.fX,n.c5))}),Ri=p(Rn,0,0,0),et=Ge(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Aa,o(ta,e,r),t);if(v.$){var d={o:Ri,bT:Pe(r)},m={o:Ri,bT:Pe(e)},f=u+1,g=u;return F(o(k,F(n,g,f),o(k,F(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=v.a;return F(o(k,F(n,s,a),c),l,u)}}),x3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,T=a+3,M=ye(et,s,m,f,b,r,ye(et,d,s,g,f,r,ye(et,m,d,b,g,r,t)));e=w,r=x,n=_,a=T,t=M;continue e}else{var W=t,j=W.a,E=W.b;return P(j,Be(E))}}),S3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(pn,o(ta,m,s),f,p(pn,o(ta,s,d),g,p(pn,o(ta,d,m),b,t))),x=o(k,F(b,g,f),a),_=e,T=v,M=n+3,W=x,j=w;e=_,r=T,n=M,a=W,t=j;continue e}else return F(a,t,n)}),Pr=y(function(e,r,n){var a=p3(n),t=p(ar,$3(r),L,a),i=S(S3,r,a,0,L,ml),c=i.a,l=i.b,u=i.c,v=S(x3,r,l,a,0,F(c,L,u)),s=v.a,d=v.b,m=sl(d)?t:le(t,d);return p(v3,e,o(uu,Eo(m),s),o(jn,m,s))}),Bt=function(e){return{D:o(re,function(r){return F(3*r,3*r+1,3*r+2)},o(Or,0,Fr(e)-1)),ah:Eo(Ne(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},vu=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(re,Cn,r);return p(Pr,a,Mr,Bt(n));case 2:var a=e.a,r=e.b,n=o(re,Cn,r);return p(Pr,a,Mr,Bt(n));case 3:var a=e.a,t=e.b;return p(Pr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bT},t);case 8:return On;case 9:return On;default:return On}},Ei=vu(lu),$u={$:0},z=$u,be=$(function(e,r){return{$:1,a:e,b:r}}),T3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},C3=1029,L3=function(e){return{$:5,a:e}},fu=function(e){var r=e;return L3(r)},P3=fu(C3),z3=1028,k3=fu(z3),ze=y(function(e,r,n){return r===1?e?o(k,P3,n):o(k,k3,n):n}),su={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(ze,l,a,d),su,T3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),jo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},du={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(ze,l,a,d),du,jo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),mu=$(function(e,r){return{$:3,a:e,b:r}}),M3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},pu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},D3=R(function(e,r,n,a){return o(mu,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,pu,M3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),No={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ea=Lf,or=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(ze,u,t,m),du,No,a,{aN:o(Ea,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),A3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},B3=_e(function(e,r,n,a,t){return o(mu,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,pu,A3,t,{aN:o(Ea,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),gu,bu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},_u={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},F3=Ge(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,v,i,f),_u,hu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),wu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},V3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,ee(function(d,m,f,g,b,w,x,_){var T=x.a,M=x.b;return S(ne,p(ze,g,s,_),_u,wu,v,{b4:e,b7:r,b8:i,b9:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Yn=Ge(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,v,i,f),gu,yu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),R3=function(e){return{$:0,a:e}},ji=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),E3=function(e){return C(nn,an(e),tn(e),on(e),1)},Wo=C(nn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Wo)}else{var n=r.a;return P(e,E3(n))}}),xu=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(ji,P(t,Wo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ji,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,R3(a)}}),j3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),N3=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),W3=function(e){return o(De,e,1)},Ft=o(De,0,0),Nr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Ft)}else{var n=r.a;return P(e,W3(n))}}),Su=R(function(e,r,n,a){var t=C(N3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Zn,P(u,Wo),o(Nr,u,r),o(Nr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Zn,o(oa,u,e),P(u,Ft),o(Nr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Zn,o(oa,u,e),o(Nr,u,r),P(u,Ft),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Zn,o(oa,u,e),o(Nr,u,r),o(Nr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(j3,i,c,l)}}),G3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},nt=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(ze,u,t,m),su,G3,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Tu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},H3=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Tu,hu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),X3=jt(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ne,p(ze,m,u,w),Tu,wu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Ln=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),I3=function(e){var r=e;return p(Ln,r.dR,r.dO,.5)},U3=function(e){var r=e;return p(Ln,r.dS,r.dP,.5)},J3=function(e){var r=e;return p(Ln,r.dT,r.dQ,.5)},O3=function(e){return p(me,I3(e),U3(e),J3(e))},H=function(e){var r=El(e),n=r.a,a=r.b,t=r.c;return{ey:Va(O3(e)),eS:n/2,eT:a/2,eU:t/2}},Go=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(rt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(rt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(rt,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(D3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(B3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(xu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(H3,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(F3,b,x,_,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,M=e.c,W=e.d,j=e.e,E=C(Su,T,M,W,j);if(E.$){var O=E.a,Q=O.a,ie=O.b,ve=E.b,oe=ve.a,de=ve.b,ke=E.c,Te=ke.a,pr=ke.b,br=E.d,x=br.a,_=br.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Uu(X3,Q,ie,oe,de,Te,pr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return V3(Q)(ie)(oe)(de)(Te)(pr)(x)(_)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,G=E.b,B=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,G,B,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,G,B,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,G,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,G,B,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),at=function(e){var r=e;return r.fT},tt=function(e){var r=e;return r.fX},ot=function(e){var r=e;return r.c5},q3=function(e){var r=e,n=ot(r.c6),a=tt(r.c6),t=at(r.c6),i=ot(r.c4),c=tt(r.c4),l=at(r.c4),u=ot(r.c3),v=tt(r.c3),s=at(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Y3=function(e){var r=Va(Er(e)),n=We(Cr(e)),a=We(Tr(e)),t=We(Sr(e));return{dp:q3(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Wr=$(function(e,r){return{$:5,a:e,b:r}}),Cu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(kl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Lu=$(function(e,r){return o(Cu,Y3(e),r)}),ja=function(e){return{$:2,a:e}},Z3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),Q3=kf,K3=zf,Ni=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=K3(a),g=f.fT,b=f.fX,w=f.c5,x=f.em,_=Q3({em:x,fT:g*s,fX:b*d,c5:w*m});return Ca(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Vt=$(function(e,r){switch(r.$){case 0:return $u;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Vt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(Z3,e,t),o(Ni,e,i));case 3:return r;case 2:var i=r.a;return ja(o(Ni,e,i));default:var c=r.a;return Wl(o(re,Vt(e),c))}}),Ho=$(function(e,r){var n=r;return o(Vt,e,n)}),Xo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Pu=7683,zu=7682,eb=p(ko,{co:0,cN:0,c2:15},{a8:Se,bl:Qr,bt:Se,bu:Pu},{a8:Se,bl:Qr,bt:Se,bu:zu}),rb=p(ko,{co:0,cN:0,c2:15},{a8:Se,bl:Qr,bt:Se,bu:zu},{a8:Se,bl:Qr,bt:Se,bu:Pu}),Io=$(function(e,r){return e?o(k,rb,r):o(k,eb,r)}),nb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ab=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(Io,i,v),nb,Xo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ya=function(e){var r=ab(e);if(r.$)return z;var n=r.a;return ja(n)},tb=R(function(e,r,n,a){var t=o(Go,n,lu),i=function(){var s=P(e,r);return s.a?s.b?En(h([t,ya(Ei)])):t:s.b?ya(Ei):z}(),c=yo(a),l=c.a,u=c.b,v=c.c;return o(Lu,wo(a),o(Ho,F(l,u,v),i))}),ob=$(function(e,r){return C(tb,!0,!0,e,r)}),Rt=function(e){return{$:0,a:e}},ku=$(function(e,r){return{$:0,a:e,b:r}}),ib=function(e){var r=fo(e),n=r.cM,a=r.cc,t=r.b5;return p(Rn,n,a,t)},cb=function(e){return o(ku,0,Rt(ib(e)))},Uo=function(e){var r=e;return r.k},wn=function(e){var r=e;return Vr(r)},lb=$(function(e,r){var n=r;return n/e}),Wi=function(e){var r=e;return{fT:Vr(r),fX:Zr(r)}},ub=$(function(e,r){var n=e.bT,a=e.o;return o(k,{o:Ra(a),bT:Pe(n)},r)}),vb=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=on(l.bT),s=tn(l.bT),d=an(l.bT),m=o(aa,e,d),f=o(Ke,r,d),g=o(aa,n,s),b=o(Ke,a,s),w=o(aa,t,v),x=o(Ke,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return nu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Mu=$(function(e,r){var n=on(e.bT),a=tn(e.bT),t=an(e.bT);return Nt(vb,t,t,a,a,n,n,r)}),$b=function(e){var r=p(Tc,ub,L,Ro(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Vo(e)),i=o(Mu,n,a);return C(eu,i,e,t,0)}else return Fo},Du=ur({fT:0,fX:0,c5:-1}),Gi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),xa=function(e){var r=e;return Zr(r)},sn=function(e){var r=e;return r},Et=function(e){return Yr(2*er*e)},Hi=hl({cA:ir,c3:bo,c4:Ul}),Au=function(){var e=72,r=o(lb,e,Et(1)),n=hr(1),a=sn(go),t=sn(Du),i=hr(1),c=o(K,.5,i),l=p(me,cr,cr,c),u=o(K,-.5,i),v=p(me,cr,cr,u),s=function(f){var g=o(K,f,r),b=sn(o(Gi,Hi,Wi(g))),w=o(K,wn(g),n),x=o(K,xa(g),n),_=p(me,w,x,c),T=p(me,w,x,u),M=o(ba,e,f+1),W=o(K,M,r),j=sn(o(Gi,Hi,Wi(W))),E=o(K,wn(W),n),N=o(K,xa(W),n),G=p(me,E,N,u),B=p(me,E,N,c);return h([F({o:t,bT:v},{o:t,bT:G},{o:t,bT:T}),F({o:b,bT:T},{o:j,bT:G},{o:j,bT:B}),F({o:b,bT:T},{o:j,bT:B},{o:b,bT:_}),F({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(re,s,o(Or,0,e-1)),m=Bt(Ne(d));return Bo($b(m))}(),Xi=vu(Au),Bu=function(e){var r=e;return r.cA},fb=function(e){var r=e,n=Z(r.c5),a=Z(r.fX),t=Z(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=Xr(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=Xr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=Xr(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=Xr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},sb=function(e){var r=fb(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return P(r,c)},db=function(e){var r=po(e),n=sb(r),a=n.a,t=n.b;return sr({cA:Bu(e),c3:a,c4:t,c6:r})},Fu=function(e){var r=e;return r.e9},Vu=function(e){var r=e;return r.fr},mb=R(function(e,r,n,a){var t=db(Uo(a)),i=o(Go,n,Au),c=function(){var d=P(e,r);return d.a?d.b?En(h([i,ya(Xi)])):i:d.b?ya(Xi):z}(),l=Vu(a),u=l,v=Fu(a),s=v;return o(Lu,t,o(Ho,F(u,u,s),c))}),pb=$(function(e,r){return C(mb,!0,!0,e,r)}),Ii={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Ui={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dn=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Jr(n),c=Jr(a),l=Jr(t);return Ye({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Qn=cu(h([F({cY:0},{cY:1},{cY:2})])),bb=$(function(e,r){var n=au(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,ee(function(_,T,M,W,j,E,N,G){return S(ne,p(ze,W,0,G),Ii,jo,Qn,{aw:t,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,ee(function(_,T,M,W,j,E,N,G){return S(ne,p(ze,W,0,G),Ii,No,Qn,{aN:o(Ea,Nn(c),i),b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(xu,l,f);if(u.$)return z;var v=u.a;return o(be,a,ee(function(_,T,M,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(ze,W,0,G),Ui,bu,Qn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Su,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(be,a,ee(function(_,T,M,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(ze,W,0,G),Ui,yu,Qn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:M,c:T,d:E,cQ:w,e:_,bq:dn(r),f:j})}))}}),gb=function(){var e=h([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=h([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(jn,e,r)}(),hb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ji=function(e){return ja(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Io,t,u),hb,Xo,gb,{b:a,c:n,d:c,e:r,bY:l,bq:dn(e),f:i})}))},_b=R(function(e,r,n,a){var t=o(bb,n,a),i=P(e,r);return i.a?i.b?En(h([t,Ji(a)])):t:i.b?Ji(a):z}),wb=$(function(e,r){return C(_b,!0,!0,e,r)}),yb=$(function(e,r){var n=Br(r),a=Br(e),t=Ar(r),i=Ar(e),c=Dr(r),l=Dr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),xb=function(e){var r=xo(e),n=r.a,a=r.b;return o(yb,n,a)},Oi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Sb=$(function(e,r){return{$:1,a:e,b:r}}),Tb=Sb({df:2,$7:0,dV:1}),qi=Tb(h([P({dw:0},{dw:1})])),Cb=$(function(e,r){var n=xb(r),a=H(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,ee(function(v,s,d,m,f,g,b,w){return S(ne,w,Oi,jo,qi,{aw:l,du:Pe(c),dv:Pe(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,Oi,No,qi,{aN:o(Ea,Nn(u),l),du:Pe(c),dv:Pe(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Lb=$(function(e,r){return o(Cb,e,r)}),Yi=$(function(e,r){var n=e,a=r;return n/a}),Pb=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Zi=$(function(e,r){return e<1?L:S(Pb,0,e,e,r,L)}),zb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ra(a),bT:Pe(n),L:o(De,c,l)},r)}),kb=function(e){var r=p(Tc,zb,L,Ro(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Vo(e)),i=o(Mu,n,a);return C(ru,i,e,t,0)}else return Fo},Ru=$(function(e,r){var n=e,a=r,t=Vr(a);return{fT:t*Vr(n),fX:t*Zr(n),c5:Zr(a)}}),Mb=function(){var e=hr(1),r=72,n=o(Or,0,r-1),a=o(Zi,r,o(Ln,cr,Et(1))),t=ro(r/2),i=o(Or,0,t-1),c=o(Zi,t,o(Ln,$n(90),$n(-90))),l=Eo(Ne(o(re,function(s){return o(re,function(d){return{o:sn(o(Ru,s,d)),bT:p(me,o(K,wn(d)*wn(s),e),o(K,wn(d)*xa(s),e),o(K,xa(d),e)),L:P(o(Yi,s,Et(1)),o(Yi,o(hn,$n(90),d),$n(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ne(o(re,function(s){return Ne(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([F(b,g,m),F(b,m,f)])},i))},n));return Bo(kb(o(uu,l,v)))}(),Sa=72,Kn=2*Sa,Db=$(function(e,r){e:for(;;){var n=Kn+1,a=o(ba,Kn,2*e+3),t=o(ba,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(k,F(l,c,t),o(k,F(c,a,t),o(k,F(c,i,a),o(k,F(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Ab=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Bb=$(function(e,r){e:for(;;){var n=p(Ab,0,2*er,e/Sa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Fb=function(){var e=o(Bb,Sa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Db,Sa-1,L);return o(jn,e,r)}(),Vb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Qi=function(e){return ja(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Io,!0,u),Vb,Xo,Fb,{aw:p(Rn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},Rb=function(e){var r=ou(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},Eb=$(function(e,r){return o(Cu,Rb(e),r)}),jb=R(function(e,r,n,a){var t=o(Go,n,Mb),i=function(){var u=P(e,r);return u.a?u.b?En(h([t,Qi()])):t:u.b?Qi():z}(),c=To(a),l=c;return o(Eb,o(Mt,ir,So(a)),o(Ho,F(l,l,l),i))}),Nb=$(function(e,r){return C(jb,!0,!0,e,r)}),Wb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Eu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Gb=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Hb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ku,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Wb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Eu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Gb,n,a,t,i,c)}},Xb=Hb,ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(ob,t,r)]);case 1:var t=e.a,n=e.b;return h([o(wb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(Nb,Xb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(pb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Lb,cb(c),l)]);default:var u=e.a;return o(Co,ju,u)}},Ib=function(e){return o(Co,ju,e)},Ub=$(function(e,r){return Yp({aI:l0(e.es),ev:e.ev,aJ:u0(.5),ca:e.ca,aK:P(Ti(Ue(e.cS.fR)),Ti(Ue(e.cS.eW))),aP:Ib(r),fz:!0,fI:o(Ru,Yr(e.fH),Yr(e.fJ)),ei:ho})}),it=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ct=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Jb=ur({fT:-1,fX:0,c5:0}),Ob=ur({fT:0,fX:-1,c5:0}),qb=Ge(function(e,r,n,a,t,i){var c=o(it,n,i)?go:Du,l=o(it,r,t)?Il:Ob,u=o(it,e,a)?_l:Jb,v=F(se(o(vr,e,a)),se(o(vr,r,t)),se(o(vr,n,i))),s=p(me,o(ct,e,a),o(ct,r,t),o(ct,n,i)),d=sr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Yb=$(function(e,r){return ye(qb,Dr(e),Ar(e),Br(e),Dr(r),Ar(r),Br(r))}),Zb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=F(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(_o,e,o(Yb,p(zt,-c,-l,-u),p(zt,c,l,u)))}),Qb=$(function(e,r){return o(Le,function(n){if(n.$===2){var a=n.a;return a}else return $o},o(Aa,e,r.av))}),Kb=$(function(e,r){return o(fr,$o,Fa(o(Ba,Qb(e),r)))}),eg=$(function(e,r){return o(Kb,e,r.eA)}),rg=eg,lt=function(e){return p(ql,0,1,e<=.04045?e/12.92:o(Bn,(e+.055)/1.055,2.4))},ng=function(e){var r=fo(e),n=r.cM,a=r.cc,t=r.b5;return p(Rn,lt(n),lt(a),lt(t))},ag=function(e){return p(Eu,0,Rt(ng(e)),Rt(0))},Wn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c5:a.c5+r*(t.c5-a.c5)}}),tg=y(function(e,r,n){var a=wo(n),t=Sr(a),i=Tr(a),c=Cr(a),l=p(Wn,e,r,Er(a)),u=r>=0?sr({cA:l,c3:t,c4:i,c6:c}):sr({cA:l,c3:$r(t),c4:$r(i),c6:$r(c)}),v=yo(n),s=v.a,d=v.b,m=v.c,f=se(o(K,r,s)),g=se(o(K,r,d)),b=se(o(K,r,m));return{er:u,aK:F(f,g,b)}}),Ki=function(e){return po(Uo(e))},og=function(e){return Bu(Uo(e))},ig=y(function(e,r,n){var a=se(o(K,r,Vu(n))),t=se(o(K,r,Fu(n))),i=r>=0?Ki(n):$r(Ki(n)),c=p(Wn,e,r,og(n));return{k:o(Vn,c,i),e9:t,fr:a}}),cg=y(function(e,r,n){return o(Cl,o(Wn,e,r),n)}),lg=y(function(e,r,n){return o(Ll,o(K,Z(r),To(n)),p(Wn,e,r,So(n)))}),ug=y(function(e,r,n){return o(Pl,o(Wn,e,r),n)}),Nu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(_o,c,p(tg,ir,e,n));case 1:var c=r.a,a=r.b;return o(Tl,c,p(ug,ir,e,a));case 3:var c=r.a,t=r.b;return o(Sl,c,p(lg,ir,e,t));case 2:var c=r.a,i=r.b;return o(wl,c,p(ig,ir,e,i));case 4:var c=r.a,l=r.b;return o(xl,c,p(cg,ir,e,l));default:var u=r.a;return yl(o(re,Nu(e),u))}}),vg=$(function(e,r){return(r-Vc(r/e)*e)/e}),$g=function(e){return 2*er*e},fg=R(function(e,r,n,a){return e+(r-e)*(1+Vr($g(o(vg,n,a))))/2}),ut=function(e){return o(Nu,C(fg,1,1.1,o(ra,"period",e),e.db),o(Zb,ag(o(rg,"cube color",e)),F(1,1,1)))},sg=$(function(e,r){return o(Ub,{es:p(c0,46,46,46),ev:Zm(e),ca:e.ca,cS:e.cS,fH:-xi(135),fJ:-xi(45)},h([ut(e),o(Si,-2,ut(e)),o(Si,2,ut(e))]))}),dg=C(_m,sg,zm,Pm,wm);const mg={Main:{init:dg(o(A,function(e){return Me({e1:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",da(Tn)))},o(D,"left",Y))},o(D,"pressedKeys",da(Tn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},pg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},bg=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},gg=mg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});bg();pg(gg);
