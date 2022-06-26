const rv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};rv();function wr(e,r,n){return n.a=e,n.f=r,n}function $(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function we(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ee(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ba(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function qt(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Yt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Aa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function nv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var av=[];function tv(e){return e.length}var ov=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),iv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),cv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var lv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+uv()),r});function uv(e){return"<internals>"}function tn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=_t(e,r,0,a);t&&(n=a.pop());t=_t(n.a,n.b,0,a));return t}function _t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&tn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=Ti(e),r=Ti(r));for(var t in e)if(!_t(e[t],r[t],n+1,a))return!1;return!0}$(hr);$(function(e,r){return!hr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var vv=$(function(e,r){var n=O(e,r);return n<0?Jc:n?qf:Oc}),Dn=0;function z(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var L={$:0};function ar(e,r){return{$:1,a:e,b:r}}var $v=$(ar);function h(e){for(var r=L,n=e.length;n--;)r=ar(e[n],r);return r}function Fa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});we(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Ee(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Fa(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return h(Fa(r).sort(function(n,a){var t=o(e,n,a);return t===Oc?0:t===Jc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var sv=$(Math.pow);$(function(e,r){return r%e});var mv=$(function(e,r){var n=r%e;return e===0?tn(11):n>0&&e<0||n<0&&e>0?n+e:n}),dv=Math.PI,pv=Math.cos,bv=Math.sin,gv=Math.tan,hv=$(Math.atan2);function _v(e){return e}function wv(e){return e===1/0||e===-1/0}var yv=Math.ceil,xv=Math.floor,Sv=Math.round,Tv=Math.sqrt,$i=Math.log,Cv=isNaN;function Lv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Pv=$(function(e,r){return e+r});function zv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function kv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Mv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Dv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Bv=$(function(e,r){return r.split(e)}),Av=$(function(e,r){return r.join(e)}),Fv=y(function(e,r,n){return n.slice(e,r)});function Vv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Ev=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Rv=$(function(e,r){return r.indexOf(e)>-1}),jv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Nv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function wc(e){return e+""}function Gv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function Wv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function Hv(e){return Fa(e).join("")}function Xv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Uv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Iv(e){return{$:0,a:e}}function Zt(e){return{$:2,b:e}}var Ov=Zt(function(e){return typeof e=="boolean"?ue(e):Qe("a BOOL",e)}),Jv=Zt(function(e){return typeof e=="number"?ue(e):Qe("a FLOAT",e)}),qv=Zt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Qe("a STRING",e)});function Yv(e){return{$:3,b:e}}var Zv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var Qv=$(function(e,r){return{$:10,b:r,h:e}}),Kv=$(function(e,r){return yr(e,[r])}),e$=y(function(e,r,n){return yr(e,[r,n])});E(function(e,r,n,a){return yr(e,[r,n,a])});we(function(e,r,n,a,t){return yr(e,[r,n,a,t])});Ee(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});Ba(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});qt(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return xe(o(uo,"This is not valid JSON! "+a.message,r))}});var yc=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Qe("null",r);case 3:return Un(r)?fi(e.b,r,h):Qe("a LIST",r);case 4:return Un(r)?fi(e.b,r,r$):Qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Qe("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Ue(v)?v:xe(o(Ci,n,v.a));case 7:var a=e.e;if(!Un(r))return Qe("an ARRAY",r);if(a>=r.length)return Qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Ue(v)?v:xe(o(qc,a,v.a));case 8:if(typeof r!="object"||r===null||Un(r))return Qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Ue(v))return xe(o(Ci,i,v.a));t=ar(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Ue(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ne(e.b,r);return Ue(v)?Ne(e.h(v.a),r):v;case 11:for(var s=L,m=e.g;m.b;m=m.b){var v=Ne(m.a,r);if(Ue(v))return v;s=ar(v.a,s)}return xe(Yf(Fe(s)));case 1:return xe(o(uo,e.a,r));case 0:return ue(e.a)}}function fi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Ue(c))return xe(o(qc,i,c.a));t[i]=c.a}return ue(n(t))}function Un(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function r$(e){return o(ss,e.length,function(r){return e[r]})}function Qe(e,r){return xe(o(uo,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&si(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return si(e.g,r.g)}}function si(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var n$=$(function(e,r){return JSON.stringify(r,null,e)+""});function xc(e){return e}y(function(e,r,n){return n[e]=r,n});function Gr(e){return{$:0,a:e}}function a$(e){return{$:1,a:e}}function mr(e){return{$:2,b:e,c:null}}var wt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function t$(e){return{$:5,b:e}}var o$=0;function Qt(e){var r={$:0,e:o$++,f:e,g:null,h:[]};return Kt(r),r}function Sc(e){return mr(function(r){r(Gr(Qt(e)))})}function Tc(e,r){e.h.push(r),Kt(e)}var i$=$(function(e,r){return mr(function(n){Tc(e,r),n(Gr(Dn))})}),Qa=!1,mi=[];function Kt(e){if(mi.push(e),!Qa){for(Qa=!0;e=mi.shift();)c$(e);Qa=!1}}function c$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Kt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return eo(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function eo(e,r,n,a,t,i){var c=o(yc,e,r?r.flags:void 0);Ue(c)||tn(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=l$(l,d);function d(f,b){var g=o(a,f,v);s(v=g.a,b),pi(l,g.b,t(v))}return pi(l,u.b,t(v)),m?{ports:m}:{}}var rr={};function l$(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=v$(t,r)}return n}function u$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function v$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(wt,l,t$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Qt(o(wt,l,e.b))}var $$=$(function(e,r){return mr(function(n){e.g(r),n(Gr(Dn))})});$(function(e,r){return o(i$,e.h,{$:0,a:r})});function Cc(e){return function(r){return{$:1,k:e,l:r}}}function f$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var di=[],Ka=!1;function pi(e,r,n){if(di.push({p:e,q:r,r:n}),!Ka){Ka=!0;for(var a;a=di.shift();)s$(a.p,a.q,a.r);Ka=!1}}function s$(e,r,n){var a={};$a(!0,r,a,null),$a(!1,n,a,null);for(var t in e)Tc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function $a(e,r,n,a){switch(r.$){case 1:var t=r.k,i=m$(e,t,a,r.l);n[t]=d$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)$a(e,c.a,n,a);return;case 3:$a(e,r.o,n,{s:r.n,t:a});return}}function m$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function d$(e,r,n){return n=n||{i:L,j:L},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function p$(e){rr[e]&&tn(3)}$(function(e,r){return r});function b$(e,r){return p$(e),rr[e]={f:g$,u:r,a:h$},Cc(e)}var g$=$(function(e,r){return function(n){return e(r(n))}});function h$(e,r){var n=L,a=rr[e].u,t=Gr(null);rr[e].b=t,rr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(yc,a,c);Ue(l)||tn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var fa,ur=typeof document!="undefined"?document:{};function ro(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function yt(e){return{$:0,a:e}}var Lc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:no(n),e:t,f:e,b:i}})}),dr=Lc(void 0),_$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:no(n),e:t,f:e,b:i}})}),w$=_$(void 0);function y$(e,r,n,a){return{$:3,d:no(e),g:r,h:n,i:a}}var x$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});we(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ee(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ba(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Yt(e,r,n,a,t,i,c,l)})});qt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return Aa(e,r,n,a,t,i,c,l,u)})});var Pc=$(function(e,r){return{$:"a0",n:e,o:r}}),S$=$(function(e,r){return{$:"a1",n:e,o:r}}),zc=$(function(e,r){return{$:"a2",n:e,o:r}}),Bn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function T$(e){return e=="script"?"p":e}function C$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Pc,r.n,L$(e,r.o)):r});function L$(e,r){var n=mo(r);return{$:r.$,a:n?p(ms,n<3?P$:z$,De(e),r.a):o(pa,e,r.a)}}var P$=$(function(e,r){return z(e(r.a),r.b)}),z$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function no(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?bi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?bi(c,t,i):c[t]=i}return r}function bi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return xt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);fa&&e.c=="a"&&c.addEventListener("click",fa(c)),xt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ro(c,gr(n===1?l[u]:l[u].b,r));return c}function xt(e,r,n){for(var a in n){var t=n[a];a==="a1"?k$(e,t):a==="a0"?B$(e,r,t):a==="a3"?M$(e,t):a==="a4"?D$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function k$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function M$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function D$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function B$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=A$(r,i),e.addEventListener(t,c,ao&&{passive:mo(i)<2}),a[t]=c}}var ao;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ao=!0}}))}catch{}function A$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Ue(i)){for(var c=mo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function F$(e,r){return e.$==r.$&&Or(e.a,r.a)}function kc(e,r){var n=[];return Ie(e,r,n,0),n}function ye(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=H$(r),i=1;else{ye(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&ye(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,b=e.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){ye(n,0,a,r);return}(f?!V$(m,d):m!==d)&&ye(n,2,a,d),Ie(b,g,n,a+1);return;case 0:e.a!==r.a&&ye(n,3,a,r.a);return;case 1:gi(e,r,n,a,E$);return;case 2:gi(e,r,n,a,R$);return;case 3:if(e.h!==r.h){ye(n,0,a,r);return}var w=to(e.d,r.d);w&&ye(n,4,a,w);var x=r.i(e.g,r.g);x&&ye(n,5,a,x);return}}}function V$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function gi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ye(n,0,a,r);return}var i=to(e.d,r.d);i&&ye(n,4,a,i),t(e,r,n,a)}function to(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=to(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&F$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function E$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ye(n,6,a,{v:l,i:c-l}):c<l&&ye(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ie(s,i[v],n,++a),a+=s.b||0}}function R$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var b=l[m],g=u[d],w=b.a,x=g.a,_=b.b,T=g.b,M=void 0,G=void 0;if(w===x){f++,Ie(_,T,t,f),f+=_.b||0,m++,d++;continue}var j=l[m+1],R=u[d+1];if(j){var N=j.a,W=j.b;G=x===N}if(R){var F=R.a,Y=R.b;M=w===F}if(M&&G){f++,Ie(_,Y,t,f),fn(i,t,w,T,d,c),f+=_.b||0,f++,sn(i,t,w,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,fn(i,t,x,T,d,c),Ie(_,Y,t,f),f+=_.b||0,m+=1,d+=2;continue}if(G){f++,sn(i,t,w,_,f),f+=_.b||0,f++,Ie(W,T,t,f),f+=W.b||0,m+=2,d+=1;continue}if(j&&N===F){f++,sn(i,t,w,_,f),fn(i,t,x,T,d,c),f+=_.b||0,f++,Ie(W,Y,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var b=l[m],_=b.b;sn(i,t,b.a,_,f),f+=_.b||0,m++}for(;d<s;){var Q=Q||[],g=u[d];fn(i,t,g.a,g.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&ye(n,8,a,{w:t,x:c,y:Q})}var Mc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+Mc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=ye(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),ye(r,9,t,{w:l,A:i});return}sn(e,r,n+Mc,a,t)}function Dc(e,r,n,a){mn(e,r,n,0,0,r.b,a)}function mn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Dc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&mn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&mn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return mn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,w=0;w<b.length;w++){t++;var x=d===1?b[w]:b[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=mn(g[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Bc(e,r,n,a){return n.length===0?e:(Dc(e,r,n,a),sa(e,n))}function sa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=j$(t,a);t===e&&(e=i)}return e}function j$(e,r){switch(r.$){case 0:return N$(e,r.s,r.u);case 4:return xt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return sa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=sa(e,i.w),e;case 8:return G$(e,r);case 5:return r.s(e);default:tn(10)}}function N$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function G$(e,r){var n=r.s,a=W$(n.y,r);e=sa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ro(e,a),e}function W$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ro(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function oo(e){if(e.nodeType===3)return yt(e.textContent);if(e.nodeType!==1)return yt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Bn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=ar(oo(v[a]),u);return p(dr,l,r,u)}function H$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var X$=E(function(e,r,n,a){return eo(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=oo(l);return Ac(i,function(v){var s=c(v),m=kc(u,s);l=Bc(l,u,m,t),u=s})})});E(function(e,r,n,a){return eo(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=ur.title,v=ur.body,s=oo(v);return Ac(i,function(m){fa=c;var d=l(m),f=dr("body")(L)(d.eu),b=kc(s,f);v=Bc(v,s,b,t),s=f,fa=0,u!==d.fK&&(ur.title=u=d.fK)})})});var ma=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ac(e,r){r(e);var n=0;function a(){n=n===1?0:(ma(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ma(a),n=2)}}$(function(e,r){return o(go,po,mr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(go,po,mr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(go,po,mr(function(){history.replaceState({},"",r),e()}))});var U$={addEventListener:function(){},removeEventListener:function(){}},I$=typeof window!="undefined"?window:U$;y(function(e,r,n){return Sc(mr(function(a){function t(i){Qt(n(i))}return e.addEventListener(r,t,ao&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Ue(n)?ne(n.a):q});function Fc(e,r){return mr(function(n){ma(function(){var a=document.getElementById(e);n(a?Gr(r(a)):a$(ps(e)))})})}function O$(e){return mr(function(r){ma(function(){r(Gr(e()))})})}$(function(e,r){return Fc(r,function(n){return n[e](),Dn})});$(function(e,r){return O$(function(){return I$.scroll(e,r),Dn})});y(function(e,r,n){return Fc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var J$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var q$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):q}a.push(C(Ll,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(C(Ll,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var Y$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var io=new Float64Array(3),hi=new Float64Array(3),_i=new Float64Array(3),Q$=y(function(e,r,n){return new Float64Array([e,r,n])}),K$=function(e){return e[0]},ef=function(e){return e[1]},rf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var nf=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Vc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Vc);function Ec(e,r,n){return n===void 0&&(n=new Float64Array(3)),da(Vc(e,r,n),n)}$(Ec);function Rc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function da(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Rc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var af=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),dn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(dn);function St(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(St);$(function(e,r){var n,a=io,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=dn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(dn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(dn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(dn(r,a)+e[14])/n,t});var tf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var of=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},cf=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/lf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function lf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var uf=new Float64Array(16),vf=new Float64Array(16),$f=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},ff=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function jc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ee(jc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return jc(c,l,i,t,n,a)});function Nc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ee(Nc);E(function(e,r,n,a){return Nc(e,r,n,a,-1,1)});function Gc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],b=e[11],g=e[12],w=e[13],x=e[14],_=e[15],T=r[0],M=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],Me=r[14],Te=r[15];return n[0]=a*T+l*M+m*G+g*j,n[1]=t*T+u*M+d*G+w*j,n[2]=i*T+v*M+f*G+x*j,n[3]=c*T+s*M+b*G+_*j,n[4]=a*R+l*N+m*W+g*F,n[5]=t*R+u*N+d*W+w*F,n[6]=i*R+v*N+f*W+x*F,n[7]=c*R+s*N+b*W+_*F,n[8]=a*Y+l*Q+m*ie+g*ve,n[9]=t*Y+u*Q+d*ie+w*ve,n[10]=i*Y+v*Q+f*ie+x*ve,n[11]=c*Y+s*Q+b*ie+_*ve,n[12]=a*oe+l*de+m*Me+g*Te,n[13]=t*oe+u*de+d*Me+w*Te,n[14]=i*oe+v*de+f*Me+x*Te,n[15]=c*oe+s*de+b*Me+_*Te,n}$(Gc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],b=e[14],g=r[0],w=r[1],x=r[2],_=r[4],T=r[5],M=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*g+c*w+v*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+m*x,n[3]=0,n[4]=a*_+c*T+v*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+m*M,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+m*R,n[11]=0,n[12]=a*N+c*W+v*F+d,n[13]=t*N+l*W+s*F+f,n[14]=i*N+u*W+m*F+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=da(r,io);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Rc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,b=i*c*v,g=i*l*v,w=c*l*v,x=i*i*v+u,_=b+f,T=g-d,M=b-f,G=c*c*v+u,j=w+m,R=g+d,N=w-m,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],Me=n[7],Te=n[8],pr=n[9],br=n[10],Za=n[11],Zu=n[12],Qu=n[13],Ku=n[14],ev=n[15];return a[0]=F*x+ve*_+Te*T,a[1]=Y*x+oe*_+pr*T,a[2]=Q*x+de*_+br*T,a[3]=ie*x+Me*_+Za*T,a[4]=F*M+ve*G+Te*j,a[5]=Y*M+oe*G+pr*j,a[6]=Q*M+de*G+br*j,a[7]=ie*M+Me*G+Za*j,a[8]=F*R+ve*N+Te*W,a[9]=Y*R+oe*N+pr*W,a[10]=Q*R+de*N+br*W,a[11]=ie*R+Me*N+Za*W,a[12]=Zu,a[13]=Qu,a[14]=Ku,a[15]=ev,a});function sf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(sf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function mf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(mf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],b=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=b,t[10]=g,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+b*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],b=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=b,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+b*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Ec(e,r,io),t=da(St(n,a,hi),hi),i=da(St(a,t,_i),_i),c=uf,l=vf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Gc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var wi=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function co(e){for(var r=0;e.b;e=e.b)r++;return r}var df=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},pf=we(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),bf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),gf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),hf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),_f=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),wf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),yf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),xf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Sf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Tf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Cf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Lf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Pf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Hc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},zf=function(e){e.gl.disable(e.gl.CULL_FACE)},kf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Mf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Df=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},yi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Bf=[Cf,Lf,Pf,Wc,Hc,zf,kf,Mf,Df];function xi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Af(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Xc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ff(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,b,g,w,x){var _;if(t===1)for(_=0;_<b;_++)f[g++]=b===1?w[x]:w[x][_];else i.forEach(function(T){for(_=0;_<b;_++)f[g++]=b===1?w[T][x]:w[T][x][_]})}var u=Xc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(co(n.b)*s);Cn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Vf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Ef(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*co(r.b),indexBuffer:null,buffers:{}}}function Ef(e,r){var n=new Uint32Array(co(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Si(e,r){return e+"#"+r}var Uc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Wc(n),Hc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Si(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=wi++,v||(v=xi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=wi++,s||(s=xi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Af(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Rf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(b)}c=Si(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),jf(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Vf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],b=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Ff(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Xc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(b+T),a.vertexAttribPointer(b+T,w.size,w.baseType,!1,_,x*T)}for(n.toggle=!n.toggle,Cn(cp(n),i.a),u=0;u<yi.length;u++){var M=n[yi[u]];M.toggle!==n.toggle&&M.enabled&&(Bf[u](n),M.enabled=!1,M.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return Cn(t,e.g),r});function Rf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,b){var g=b.name,w=e.getUniformLocation(f,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(w,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(w,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[g]!==_&&(e.uniform1i(w,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function jf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Nf=y(function(e,r,n){return y$(r,{g:n,f:{},h:e},Of,Jf)}),Gf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Wf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Hf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Xf=$(function(e,r){e.contextAttributes.antialias=!0}),Uf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),If=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Of(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(ip,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),df(function(){return o(Uc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Jf(e,r){return r.f=e.f,Uc(r)}var k=$v,In=lv,Ic=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(In,e,l,v)}else{var u=c.a;return p(In,i,l,u)}});return p(In,i,p(In,e,r,t),a)}),lo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(lo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ti=function(e){return p(lo,y(function(r,n,a){return o(k,z(r,n),a)}),L,e)},Oc=1,qf=2,Jc=0,xe=function(e){return{$:1,a:e}},uo=$(function(e,r){return{$:3,a:e,b:r}}),Ci=$(function(e,r){return{$:0,a:e,b:r}}),qc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Yf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},Zf=Ev,Qf=n$,Ae=wc,zr=$(function(e,r){return o(Av,e,Fa(r))}),vo=$(function(e,r){return h(o(Bv,e,r))}),Yc=function(e){return o(zr,`
    `,o(vo,`
`,e))},An=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Rr=function(e){return p(An,$(function(r,n){return n+1}),0,e)},Kf=fv,es=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=$(function(e,r){return p(es,e,r,L)}),Zc=$(function(e,r){return p(Kf,e,o(Kr,0,Rr(r)-1),r)}),nr=Xv,Qc=function(e){var r=nr(e);return 97<=r&&r<=122},Kc=function(e){var r=nr(e);return r<=90&&65<=r},rs=function(e){return Qc(e)||Kc(e)},ns=function(e){var r=nr(e);return r<=57&&48<=r},as=function(e){return Qc(e)||Kc(e)||ns(e)},Fe=function(e){return p(An,k,L,e)},on=zv,ts=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Yc(os(r))))}),os=function(e){return o(is,e,L)},is=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=on(n);if(g.$===1)return!1;var w=g.a,x=w.a,_=w.b;return rs(x)&&o(Zf,as,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",Fe(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Ae(Rr(s))+" ways:"));return o(zr,`

`,o(k,b,o(Zc,ts,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",Fe(r)):"!"}();default:var d=e.a,f=e.b,b=function(){return r.b?"Problem with the value at json"+(o(zr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return b+(Yc(o(Qf,4,f))+(`

`+d))}}),Ve=32,Tt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ct=av,$o=yv,fo=$(function(e,r){return $i(r)/$i(e)}),cs=_v,Ln=$o(o(fo,2,Ve)),el=C(Tt,0,Ln,Ct,Ct),rl=ov,nl=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var al=xv,Lt=tv,ke=$(function(e,r){return O(e,r)>0?e:r}),ls=function(e){return{$:0,a:e}},so=iv,us=$(function(e,r){e:for(;;){var n=o(so,Ve,e),a=n.a,t=n.b,i=o(k,ls(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),vs=function(e){var r=e.a;return r},$s=$(function(e,r){e:for(;;){var n=$o(r/Ve);if(n===1)return o(so,Ve,e).a;var a=o(us,e,L),t=n;e=a,r=t;continue e}}),tl=$(function(e,r){if(r.l){var n=r.l*Ve,a=al(o(fo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o($s,t,r.l);return C(Tt,Lt(r.p)+n,o(ke,5,a*Ln),i,r.p)}else return C(Tt,Lt(r.p),Ln,Ct,r.p)}),fs=we(function(e,r,n,a,t){e:for(;;){if(r<0)return o(tl,!1,{z:a,l:n/Ve|0,p:t});var i=nl(p(rl,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(k,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ss=$(function(e,r){if(e<=0)return el;var n=e%Ve,a=p(rl,n,e-n,r),t=e-n-Ve;return S(fs,r,t,e,L,a)}),Ue=function(e){return!e.$},B=Qv,Z=Ov,D=Zv,$e=Jv,pa=Kv,ms=e$,De=Iv,mo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=dr("div"),ds=function(e){return{$:2,a:e}},ol=$(function(e,r){return e}),il=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Br=function(e){return e},ps=Br,Li=Ee(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),bs=Rv,kr=kv,Jr=Fv,Fn=$(function(e,r){return e<1?r:p(Jr,e,kr(r),r)}),Va=Nv,Ea=function(e){return e===""},Ra=$(function(e,r){return e<1?"":p(Jr,0,e,r)}),cl=Gv,Pi=we(function(e,r,n,a,t){if(Ea(t)||o(bs,"@",t))return q;var i=o(Va,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=cl(o(Fn,c+1,t));if(l.$===1)return q;var u=l;return ne(se(Li,e,o(Ra,c,t),u,r,n,a))}else return ne(se(Li,e,t,q,r,n,a))}),zi=E(function(e,r,n,a){if(Ea(a))return q;var t=o(Va,"/",a);if(t.b){var i=t.a;return S(Pi,e,o(Fn,i,a),r,n,o(Ra,i,a))}else return S(Pi,e,"/",r,n,a)}),ki=y(function(e,r,n){if(Ea(n))return q;var a=o(Va,"?",n);if(a.b){var t=a.a;return C(zi,e,ne(o(Fn,t+1,n)),r,o(Ra,t,n))}else return C(zi,e,q,r,n)});$(function(e,r){if(Ea(r))return q;var n=o(Va,"#",r);if(n.b){var a=n.a;return p(ki,e,ne(o(Fn,a+1,r)),o(Ra,a,r))}else return p(ki,e,q,r)});var gs=jv,po=function(e){},Vn=Gr,hs=Vn(0),ll=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(An,e,r,Fe(m)):C(ll,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=y(function(e,r,n){return C(ll,e,r,0,n)}),re=$(function(e,r){return p(or,$(function(n,a){return o(k,e(n),a)}),L,r)}),ba=wt,bo=$(function(e,r){return o(ba,function(n){return Vn(e(n))},r)}),_s=y(function(e,r,n){return o(ba,function(a){return o(ba,function(t){return Vn(o(e,a,t))},n)},r)}),ws=function(e){return p(or,_s(k),Vn(L),e)},ys=$$,xs=$(function(e,r){var n=r;return Sc(o(ba,ys(e),n))}),Ss=y(function(e,r,n){return o(bo,function(a){return 0},ws(o(re,xs(e),r)))}),Ts=y(function(e,r,n){return Vn(0)}),Cs=$(function(e,r){var n=r;return o(bo,e,n)});rr.Task=u$(hs,Ss,Ts,Cs);var Ls=Cc("Task"),go=$(function(e,r){return Ls(o(bo,e,r))}),Ps=X$,zs=Lv,ga={$:1},ul=function(e){return{$:2,a:e}},ja={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),cn=function(e){var r=e.b.B;return r.a},ks=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Ge,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},vl=function(e){var r=e.b;return o(Ge,ja,r)},sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ms=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?vl(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,cn(n).a4)>0?o(te,ks,sr(o(Ge,ga,t))):Br)(o(Ge,ul({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(il,l.eA,Ke(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(Ge,ja,{B:z(v,s),ab:L,T:o(k,t.B,t.T)})}}),$l=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ds=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),Bs=$(function(e,r){return Fe(p(Ds,e,r,L))}),fl=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,b=f.b,g=b.a,w=b.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,g,o(Bs,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,g,p(fl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),As=$(function(e,r){return p(fl,0,e,r)}),Fs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(h([a]),t)),c=o(As,e,i),l=o($l,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,ga,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var m=s.a,d=s.b;return o(Ge,ga,{B:m,ab:L,T:d})}else return r}}),Vs=function(e){var r=e.b;return o(Ge,ga,r)},Es=function(e){var r=e.b;return o(Ge,ul({cY:cn(e).a4}),r)},Rs=$(function(e,r){switch(e.$){case 1:return Vs(r);case 2:return vl(r);case 3:return Es(r);default:var n=e.a;return o(Fs,n,r)}}),sl=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),js=$(function(e,r){return Ke(r,{av:e(r.av)})}),Ns=function(e){return{$:3,a:e}},Gs=function(e){return{$:2,a:e}},ml=$(function(e,r){return{$:0,a:e,b:r}}),Ws=$(function(e,r){return{$:1,a:e,b:r}}),Le=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),J=function(e){return e<0?-e:e},ho=Wv,Hs=y(function(e,r,n){return o(sr,0/0,ho(o(e,r,n)))}),dl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Xs=Dv,pl=function(e){return p(Xs,k,L,e)},Us=$(function(e,r){var n=o(dl,function(a){return a!=="0"&&a!=="."},pl(r));return le(e&&n?"-":"",r)}),be=wc,Pt=Pv,bl=Uv,gl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=on(n);if(a.$===1)return"01";var t=a.a;return o(Pt,"0",gl(t))}else{var i=nr(r);return i>=48&&i<57?o(Pt,bl(i+1),n):"0"}},zt=wv,Is=Cv,Na=function(e){return o(Pt,e,"")},hl=y(function(e,r,n){return e<=0?n:p(hl,e>>1,le(r,r),e&1?le(n,r):n)}),Pn=$(function(e,r){return p(hl,e,r,"")}),kt=y(function(e,r,n){return le(n,o(Pn,e-kr(n),Na(r)))}),Mt=Mv,_l=function(e){var r=o(vo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Os=function(e){var r=o(vo,"e",be(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(sr,0,cl(o(gs,"+",t)?o(Fn,1,t):t)),c=_l(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(sr,"0",o(Le,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Le,sl(Na),on(le(o(Pn,J(i),"0"),v))))):p(kt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Js=y(function(e,r,n){if(zt(n)||Is(n))return be(n);var a=n<0,t=_l(Os(J(n))),i=t.a,c=t.b,l=kr(i)+r,u=le(o(Pn,-l+1,"0"),p(kt,l,"0",le(i,c))),v=kr(u),s=o(ke,1,l),m=o(e,a,p(Jr,s,v,u)),d=p(Jr,0,s,u),f=m?Mt(o(sr,"1",o(Le,gl,on(Mt(d))))):d,b=kr(f),g=f==="0"?f:r<=0?le(f,o(Pn,J(r),"0")):O(r,kr(c))<0?p(Jr,0,b-r,f)+("."+p(Jr,b-r,b,f)):le(i+".",p(kt,r,"0",c));return o(Us,a,g)}),hn=Js($(function(e,r){var n=on(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),qs=Hs(hn),Ys=y(function(e,r,n){var a=o(fo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(qs,t,n)}),wl=vv,_o=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(wl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=we(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},en=we(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(X,0,r,n,S(X,1,v,s,m,d),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var b=f.b,g=f.c,w=f.d,x=f.e,d=a.e;return S(X,0,v,s,S(X,1,b,g,w,x),S(X,1,r,n,d,t))}else return S(X,e,r,n,a,t)}),Dt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(wl,e,t);switch(u){case 0:return S(en,a,t,i,p(Dt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(en,a,t,i,c,p(Dt,e,r,l))}}),_n=y(function(e,r,n){var a=p(Dt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Zs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},yl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,b=d.c,g=d.d,w=d.e,x=v.e;return S(X,0,f,b,S(X,1,n,a,S(X,0,i,c,l,u),g),S(X,1,s,m,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,m,d,x))}else return e},Mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var b=f.b,g=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,m),S(X,1,n,a,d,S(X,0,b,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,d=_.e,M=e.e;M.a;var b=M.b,g=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,d),S(X,0,b,g,w,x))}else return e},Qs=Ba(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Mi(r)}else break e;else return c.a,c.d,Mi(r);else break e;return r}}),aa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,aa(t),l);var u=yl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(en,v,s,m,aa(d),f)}else return tr}else return S(X,r,n,a,aa(t),l)}else return tr},wn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(wn,e,i),c);var u=yl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(en,v,s,m,o(wn,e,d),f)}else return tr}else return S(X,n,a,t,o(wn,e,i),c);else return o(Ks,e,Yt(Qs,e,r,n,a,t,i,c))}),Ks=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=Zs(c);if(l.$===-1){var u=l.b,v=l.c;return S(en,n,u,v,i,aa(c))}else return tr}else return S(en,n,a,t,i,o(wn,e,c))}else return tr}),em=$(function(e,r){var n=o(wn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),On=y(function(e,r,n){var a=r(o(_o,e,n));if(a.$)return o(em,e,n);var t=a.a;return p(_n,e,t,n)}),rm=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(On,r,Le(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ws,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(On,r,Le(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(ml,z(i,c),p(Ys,i,c,n))}));case 3:var r=e.a,n=e.b;return o(On,r,Le(function(a){return a.$===3?Ns(n):a}));default:var r=e.a,n=e.b;return o(On,r,Le(function(a){return a.$===2?Gs(n):a}))}},nm=function(e){return js(rm(e))},am=$(function(e,r){return o(re,nm(e),r)}),tm=$(function(e,r){return Ke(r,{eA:o(am,e,r.eA)})}),om=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,Ke(a,{B:o(sl,tm(e),a.B)}))}),im=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),cm=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,Ke(t,{B:o(im,o(e,i.a,r),i)}))}),lm=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(Ms,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(om,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(cm,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Rs,l,a.G)})}}),um=$(function(e,r){return o(Ge,ja,{B:z(e,r(e)),ab:L,T:L})}),vm=f$,Di=vm(L),ha=Yv,zn=qv,$m=b$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return De({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",ha(zn)))},o(D,"left",Z))},o(D,"pressedKeys",ha(zn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return De({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return De({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return De({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),fm=function(e){return{$:4,a:e}},sm={$:0},mm=xc,Xe=$(function(e,r){return o(zc,e,mm(r))}),I=Xe("className"),dm=function(e){var r=e.b.B;return r.b},_a=Xe("id"),pm=x$,wa=pm,bm=S$,_e=bm,gm={$:1},hm=function(e){return{$:3,a:e}},_m=function(e){return{$:5,a:e}},Bi=dr("a"),wo=dr("button"),wm=Bn("d"),xl=Lc("http://www.w3.org/2000/svg"),ym=xl("path"),xm=xl("svg"),Sm=Bn("viewBox"),yn=function(e){return o(xm,h([Sm("0 0 100 100"),o(_e,"width","100%"),o(_e,"height","100%")]),h([o(ym,h([wm(e)]),L)]))},Ai=function(e){return o(Xe,"href",C$(e))},Yr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Tm=function(e){return{$:0,a:e}},Sl=Pc,Tl=$(function(e,r){return o(Sl,e,Tm(r))}),yo=function(e){return o(Tl,"click",De(e))},Fi=Xe("target"),Cm=Xe("title"),Bt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Bt,e,i),o(Bt,e,c))}),Lm=yt,he=Lm,Pm=function(e){return p(lo,y(function(r,n,a){return o(k,n,a)}),L,e)},zm=$(function(e,r){return{$:3,a:e,b:r}}),km=$(function(e,r){return{$:2,a:e,b:r}}),Mm=$(function(e,r){return{$:0,a:e,b:r}}),Dm=$(function(e,r){return{$:1,a:e,b:r}}),Wr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Bm=C(Wr,0/255,0/255,0/255,1),Am=xc,Fm=$(function(e,r){return o(zc,e,Am(r))}),Vm=Fm("checked"),qe=Sv,Em=y(function(e,r,n){return le(o(Pn,e-kr(n),Na(r)),n)}),ya=mv,Cl=function(e){var r=function(n){return n<10?Ae(n):Na(bl(87+n))};return e<16?r(e):le(Cl(e/16|0),r(o(ya,16,e)))},Rm=o(te,Cl,o(Em,2,"0")),xo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},jm=function(e){var r=xo(e),n=r.cN,a=r.cd,t=r.b6;return o(zr,"",o(k,"#",o(re,o(te,qe,Rm),h([n*255,a*255,t*255]))))},At=Xe("htmlFor"),Ft=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),xa=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Nm=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),So=$(function(e,r){return p(or,Nm(e),L,r)}),Ll=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Gm=q$,Wm=Hv,Hm=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Xm=J$,Um=function(e){return o(Xm,{ew:!1,fe:!1},e)},To=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},Im=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),Om=function(e){return{$:2,a:e}},Jm=function(e){return{$:0,a:e}},qm=function(e){return{$:1,a:e}},et=$(function(e,r){return nr(r)-nr(e)}),rt=y(function(e,r,n){var a=nr(n);return O(nr(e),a)<1&&O(a,nr(r))<1}),Ym=$(function(e,r){var n=function(t){return O(t,e)<0?ue(t):xe(qm(r))},a=p(rt,"0","9",r)?ue(o(et,"0",r)):p(rt,"a","z",r)?ue(10+o(et,"a",r)):p(rt,"A","Z",r)?ue(10+o(et,"A",r)):xe(Jm(r));return o(xa,n,a)}),Pl=$(function(e,r){var n=on(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(xa,function(c){return o(xa,function(l){return ue(c+l*e)},o(Pl,e,i))},o(Ym,e,t))}),Zm=$(function(e,r){return 2<=e&&e<=36?o(Pl,e,Mt(r)):xe(Om(e))}),Qm=Zm(16),Km=y(function(e,r,n){return C(Wr,e,r,n,1)}),ed=E(function(e,r,n,a){return C(Wr,e,r,n,a)}),jr=sv,rd=$(function(e,r){var n=o(jr,10,e);return qe(r*n)/n}),nd=Vv,ad=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=pl(n);if(a.b&&!a.b.b){var t=a.a;return Wm(h([t,t]))}else return n};return o(te,nd,o(te,function(n){return o(Le,function(a){return p(Gm,1,a,n)},Um(e))},o(te,Ft(To),o(te,Le(function(n){return n.fF}),o(te,Le(So(Br)),o(te,Hm("Parsing hex regex failed"),xa(function(n){var a=o(re,o(te,r,o(te,Qm,Im(cs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(ed,t/255,c/255,u/255,o(rd,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ue(p(Km,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),Sa=dr("input"),Vt=dr("label"),Et=Xe("name"),zl=$(function(e,r){return p(or,D,r,e)}),td=o(zl,h(["target","checked"]),Z),od=function(e){return o(Tl,"change",o(pa,e,td))},id=function(e){return z(e,!0)},cd=function(e){return{$:1,a:e}},ld=$(function(e,r){return o(Sl,e,cd(r))}),ud=o(zl,h(["target","value"]),zn),Co=function(e){return o(ld,"input",o(pa,id,o(pa,e,ud)))},kl=Xe("max"),Ml=Xe("min"),Dl=function(e){return o(Xe,"step",e)},Ta=Xe("type"),Lo=Xe("value"),Vi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(U,L,h([o(Vt,h([At(r)]),h([o(U,h([I("relative w-full")]),h([o(U,h([I("inline-block")]),h([he(r)])),o(U,h([I("inline-block float-right")]),h([he(be(n))]))]))])),o(Sa,h([Ta("range"),o(_e,"width","100%"),_a(r),Et(r),Ml(be(a)),kl(be(t)),Lo(be(n)),Dl(be(i)),Co(o(te,ho,o(te,sr(42),c)))]),L)]))},vd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),$d=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,L,h([o(U,h([I("mb-2")]),h([o(Vt,h([At(e)]),h([he(e)]))])),o(Sa,h([Ta("checkbox"),_a(e),Et(e),od(zm(e)),Vm(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Vi({cg:e,cs:i,cw:t,cA:Mm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Vi({cg:e,cs:i,cw:t,cA:o(te,qe,Dm(e)),cW:1,c1:c});default:var c=r.a;return o(U,L,h([o(U,h([o(_e,"margin-bottom","6px")]),h([o(Vt,h([At(e)]),h([he(e)]))])),o(Sa,h([Ta("color"),o(_e,"width","100%"),o(_e,"height","26px"),o(_e,"padding","0px"),_a(e),Et(e),Co(function(l){return o(km,e,o(vd,Bm,ad(l)))}),Lo(jm(c))]),L)]))}}),fd=function(e){return o(U,h([I("p-6 border-y-[0.5px] border-white20")]),h([o(U,h([I("text-lg pb-2")]),h([he(e.ff)])),o(U,h([I("pl-2 pr-2")]),Pm(o(Bt,$d,e.av)))]))},sd=function(e){return o(U,h([I("text-xs text-white60")]),o(re,fd,e))},md=function(e){return o(U,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([he("clock: "+o(hn,3,cn(e).a4))]))},dd=function(e){e.a;var r=e.b.T;return o(Le,function(n){return qe(60/(cn(e).a4-n))},o(Le,o(te,vs,function(n){return n.a4}),To(o($l,59,r))))},pd=function(e){return o(U,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=dd(e);if(r.$===1)return h([he("... Fps")]);var n=r.a;return h([he(Ae(n)+" Fps")])}())},bd=function(e){return{$:0,a:e}},gd=function(e){var r=e.b.T;return Rr(r)},hd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Rr(r)+1+Rr(n)},_d=function(e){return o(Sa,h([I("absolute left-[100px] w-[490px]"),Ta("range"),Ml(Ae(0)),kl(Ae(hd(e)-1)),Lo(Ae(gd(e))),Dl(Ae(1)),Co(o(te,ho,o(te,sr(42),o(te,qe,bd))))]),L)},Ei={$:1},wd={$:3},yd={$:2},Bl=function(e){return!e.b},Ri=$(function(e,r){return o(wo,h([I("px-2 bg-black40"),I(r),yo(e)]),h([he("REC")]))}),ji=$(function(e,r){return o(wo,h([I("absolute left-[60px] mx-1 px-1 bg-black40"),yo(r)]),h([o(U,h([I("w-4 h-6 fill-white80")]),h([yn(e)]))]))}),xd=function(e){var r=e.a,n=e.b.ab;return o(U,h([I("py-1")]),h([function(){switch(r.$){case 0:return o(Ri,Ei,"text-red-500 font-bold");case 1:return o(Ri,yd,"text-white80 font-bold");default:return o(U,L,L)}}(),function(){switch(r.$){case 0:return o(U,L,L);case 1:return Bl(n)?o(U,L,L):o(ji,Yr.fo,wd);default:return o(ji,Yr.fn,Ei)}}()]))},Sd=function(e){return o(U,h([I("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([_d(e),xd(e),pd(e),md(e)]))},Al=function(e){return o(zr,"",e)},Td=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(or,t,L,a);return o(k,n,i)}else return L}),Cd=function(e){var r=e.a;return hr(r,ja)},Lr=dr("p"),Ld=dr("pre"),Pd=$(function(e,r){var n=Cd(r.G)?o(U,L,L):o(U,h([I("absolute pointer-events-none w-8 h-8"),o(_e,"left",be(e.fp.fT+.5*e.cT.fR)+"px"),o(_e,"top",be(-e.fp.fX+.5*e.cT.eW)+"px")]),h([o(U,h([I(e.fp.e4?"fill-black80":"fill-white40")]),h([yn(Yr.fp)]))]));return o(U,L,h([n,o(Ld,h([I("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Lr,L,h([he("pressedKeys: "+Al(o(Td," ",e.e7.fq)))])),o(Lr,L,h([he("delta time: "+o(hn,4,e.eJ))])),o(Lr,L,h([he("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(Lr,L,h([he("pointer.x: "+o(hn,2,e.fp.fT))])),o(Lr,L,h([he("pointer.y: "+o(hn,2,e.fp.fX))])),o(Lr,L,h([he("wheel deltaX: "+be(e.fQ.eD))])),o(Lr,L,h([he("wheel deltaY: "+be(e.fQ.eE))]))]))]))}),zd=$(function(e,r){var n=o(wo,h([I(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),yo(gm),Cm("Distraction Free Mode")]),h([yn(Yr.f$)])),a=o(U,h([I("absolute w-8 bottom-12")]),h([o(Bi,h([I("fill-twitterBlue40 hover:fill-twitterBlue"),Ai("https://twitter.com/AzizErkalSelman"),Fi("_blank")]),h([yn(Yr.fL)]))])),t=o(U,h([I("absolute w-8 bottom-2")]),h([o(Bi,h([I("fill-githubCat40 hover:fill-githubCat"),Ai("https://github.com/erkal/elm-3d-playground-exploration"),Fi("_blank")]),h([yn(Yr.eQ)]))]));return r.aL?o(U,h([I("fixed w-10 h-10 p-1")]),h([n])):o(U,L,h([o(U,h([I("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(U,h([I("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(wa,hm,sd(cn(r.G).eA))])),o(wa,_m,Sd(r.G)),o(Pd,e,r)]))}),kd=y(function(e,r,n){var a=dm(n.G),t=cn(n.G);return o(U,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(_e,"width",be(t.cT.fR)+"px"),o(_e,"height",be(t.cT.eW)+"px")]),h([o(U,h([I("fixed")]),h([o(wa,ol(sm),o(e,t,a))])),o(U,h([_a("gui")]),h([o(zd,t,n),o(U,h([I("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(wa,fm,o(r,t,a))]))]))]))}),Md=Ee(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(lm,r,i,u,v),Di)}),l=function(u){var v=o(il,n,u.e1);return z({aL:u.e1.cT.fR<500,G:o(um,v,a)},Di)};return Ps({e0:l,fG:ol($m(ds)),fM:c,fP:o(kd,e,t)})}),Dd=E(function(e,r,n,a){return se(Md,e,r,n,a,$(function(t,i){return o(U,L,L)}),y(function(t,i,c){return c}))}),Bd=function(e){return{}},Ad=y(function(e,r,n){return{av:n,e5:r,ff:e}}),Fl=tr,Fd=function(e){return p(An,$(function(r,n){var a=r.a,t=r.b;return p(_n,a,t,n)}),Fl,e)},Vd=y(function(e,r,n){return p(Ad,e,r,Fd(n))}),Ed=Vd,Ni=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(ml,z(a,t),n))}),Rd=h([p(Ed,"Parameters",!0,h([p(Ni,"s",z(1,2),1.5),p(Ni,"t",z(1,2),1.5)]))]),jd=$(function(e,r){return r}),_r=dv,Rt=function(e){return e*_r/180},Nd=C(Wr,114/255,159/255,207/255,1),rn=function(e){return e},pn=function(e){return rn(_r*(e/180))},lr=Tv,Gd=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ke,J(c),o(ke,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,m=lr(s*s+v*v+u*u);return ne({fT:s/m,fX:v/m,c6:u/m})}else return q}),nt=function(e){return e},Po=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),ta=function(e){var r=e,n=o(ke,J(r.fT),o(ke,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=lr(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c6:a/c})}else return q},Ca=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Wd=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),Vl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Hd=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Xd=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Ud=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),Id=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Je=0,El={fT:0,fX:0,c6:0},Od=y(function(e,r,n){return o(Ft,function(a){var t=o(Xd,o(Ud,a,r),r);return o(Ft,function(i){var c=o(Po,r,e),l=o(Wd,n,c),u=o(Vl,Je,l)?c:o(Hd,Je,l)?Id(c):El;return o(Le,function(v){return A(a,i,v)},ta(u))},ta(t))},ta(e))}),Jd=function(e){var r=e,n=J(r.c6),a=J(r.fX),t=J(r.fT);if(O(t,a)<1)if(O(t,n)<1){var i=lr(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=lr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(O(a,n)<1){var i=lr(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=lr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},zo=function(e){var r=Jd(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return z(r,c)},qr=function(e){var r=e;return r},Ye=function(e){return e},qd=$(function(e,r){var n=zo(e),a=n.a,t=n.b;return Ye({cB:r,c4:a,c5:t,c7:e})}),Yd=function(e){var r=o(Ca,e.aR,e.dj),n=qr(e.ei),a=o(Po,r,n),t=p(Od,r,n,a);if(t.$){var v=ta(r);if(v.$){var m=zo(e.ei),d=m.a,f=m.b;return Ye({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(qd,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Ye({cB:e.dj,c4:u,c5:l,c7:c})}},Oe={fT:0,fX:0,c6:0},Zd=function(e){return{$:0,a:e}},me=function(e){var r=e;return J(r)},oa=function(e){var r=e;return .5*r},Qd=gv,Kd=function(e){var r=e;return Qd(r)},e0=function(e){var r=oa(me(e.ej)),n=Kd(r);return{cM:Zd(n),c2:e.c2}},vr=function(e){return e},ko=vr({fT:0,fX:1,c6:0}),r0=function(e){var r=e.aR,n=e.dj,a=e.ei;return e0({ej:pn(40),c2:Yd({dj:nt(n),aR:nt(r),ei:o(sr,ko,o(Gd,Oe,nt(a)))})})},Ga=$(function(e,r){return{$:0,a:e,b:r}}),at=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),tt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),n0=vr({fT:-1,fX:0,c6:0}),a0=vr({fT:0,fX:-1,c6:0}),Rl=vr({fT:0,fX:0,c6:-1}),jl=vr({fT:1,fX:0,c6:0}),Mo=vr({fT:0,fX:0,c6:1}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),t0=Ee(function(e,r,n,a,t,i){var c=o(at,n,i)?Mo:Rl,l=o(at,r,t)?ko:a0,u=o(at,e,a)?jl:n0,v=A(me(o($r,e,a)),me(o($r,r,t)),me(o($r,n,i))),s=p(pe,o(tt,e,a),o(tt,r,t),o(tt,n,i)),m=Ye({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),Ar=function(e){var r=e;return r.fT},Fr=function(e){var r=e;return r.fX},Vr=function(e){var r=e;return r.c6},o0=$(function(e,r){return se(t0,Ar(e),Fr(e),Vr(e),Ar(r),Fr(r),Vr(r))}),jt=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),Nl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ga,e,o(o0,p(jt,-c,-l,-u),p(jt,c,l,u)))}),i0=C(Wr,52/255,101/255,164/255,1),Gi=C(Wr,211/255,215/255,207/255,1),Wa=function(e){return{$:5,a:e}},La=function(e){return Wa(e)},Nt=function(e){return{$:0,a:e}},Gl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Wl=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),ot=function(e){return p(Wl,0,1,e<=.04045?e/12.92:o(jr,(e+.055)/1.055,2.4))},En=Q$,c0=function(e){var r=xo(e),n=r.cN,a=r.cd,t=r.b6;return p(En,ot(n),ot(a),ot(t))},ia=function(e){return p(Gl,0,Nt(c0(e)),Nt(0))},Do=$(function(e,r){return{$:2,a:e,b:r}}),Bo=$(function(e,r){return{$:4,a:e,b:r}}),Ao=$(function(e,r){return{$:3,a:e,b:r}}),Fo=$(function(e,r){return{$:1,a:e,b:r}}),l0=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),u0=function(e){var r=e;return r},Ha=function(e){var r=e;return u0(r.er)},Xa=function(e){var r=e;return r.aK},Hr=function(e){var r=e;return r.cB},Rn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),Sr=function(e){var r=e;return r.c4},Tr=function(e){var r=e;return r.c5},Cr=function(e){var r=e;return r.c7},v0=$(function(e,r){return Ye({cB:o(Rn,e,Hr(r)),c4:Sr(r),c5:Tr(r),c7:Cr(r)})}),$0=$(function(e,r){return{er:o(v0,e,Ha(r)),aK:Xa(r)}}),jn=$(function(e,r){return{eG:r,cB:e}}),f0=$(function(e,r){var n=r;return o(jn,o(Rn,e,n.cB),n.eG)}),s0=$(function(e,r){var n=r;return{k:o(f0,e,n.k),e9:n.e9,fr:n.fr}}),Vo=function(e){var r=e;return r},m0=function(e){return e},Eo=$(function(e,r){var n=Vo(r),a=n.a,t=n.b;return m0(z(e(a),e(t)))}),d0=$(function(e,r){return o(Eo,Rn(e),r)}),Ua=function(e){var r=e;return r.ey},Ia=function(e){var r=e;return r.fr},Ro=$(function(e,r){return{ey:r,fr:me(e)}}),p0=$(function(e,r){return o(Ro,Ia(r),o(Rn,e,Ua(r)))}),jo=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),b0=$(function(e,r){return o(jo,Rn(e),r)}),No=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(l0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ga,s,o($0,i,c));case 1:var s=r.a,l=r.b;return o(Fo,s,o(b0,i,l));case 3:var s=r.a,u=r.b;return o(Ao,s,o(p0,i,u));case 2:var s=r.a,v=r.b;return o(Do,s,o(s0,i,v));case 4:var s=r.a,m=r.b;return o(Bo,s,o(d0,i,m));default:var d=r.a;return Wa(o(re,No(A(n,a,t)),d))}}),Mr=function(e){return No(A(0,e,0))},Nr=pv,nn=bv,ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Nr(c),u=nn(c),v=a.eG,s=v,m=s.fT*u,d=l*m,f=m*m,b=s.fX*u,g=l*b,w=m*b,x=b*b,_=1-2*(f+x),T=s.c6*u,M=l*T,G=2*(w-M),j=2*(w+M),R=m*T,N=2*(R+g),W=2*(R-g),F=b*T,Y=2*(F-d),Q=2*(F+d),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+oe*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+_*i.c6}}),Nn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Nr(c),u=nn(c),v=a.cB,s=v,m=i.fT-s.fT,d=i.fX-s.fX,f=i.c6-s.c6,b=a.eG,g=b,w=g.fT*u,x=l*w,_=w*w,T=g.fX*u,M=l*T,G=w*T,j=T*T,R=1-2*(_+j),N=g.c6*u,W=l*N,F=2*(G-W),Y=2*(G+W),Q=w*N,ie=2*(Q+M),ve=2*(Q-M),oe=T*N,de=2*(oe-x),Me=2*(oe+x),Te=N*N,pr=1-2*(j+Te),br=1-2*(_+Te);return{fT:s.fT+pr*m+F*d+ie*f,fX:s.fX+Y*m+br*d+de*f,c6:s.c6+ve*m+Me*d+R*f}}),g0=y(function(e,r,n){return Ye({cB:p(Nn,e,r,Hr(n)),c4:p(ca,e,r,Sr(n)),c5:p(ca,e,r,Tr(n)),c7:p(ca,e,r,Cr(n))})}),h0=y(function(e,r,n){return{er:p(g0,e,r,Ha(n)),aK:Xa(n)}}),_0=$(function(e,r){var n=o(Nn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(jn,n(i.cB),a(i.eG))}}),w0=y(function(e,r,n){var a=n;return{k:p(_0,e,r,a.k),e9:a.e9,fr:a.fr}}),y0=y(function(e,r,n){return o(Eo,o(Nn,e,r),n)}),x0=y(function(e,r,n){return o(Ro,Ia(n),p(Nn,e,r,Ua(n)))}),S0=y(function(e,r,n){return o(jo,o(Nn,e,r),n)}),Go=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ga,l,p(h0,e,r,a));case 1:var l=n.a,t=n.b;return o(Fo,l,p(S0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ao,l,p(x0,e,r,i));case 2:var l=n.a,c=n.b;return o(Do,l,p(w0,e,r,c));case 4:var l=n.a,u=n.b;return o(Bo,l,p(y0,e,r,u));default:var v=n.a;return Wa(o(re,o(Go,e,r),v))}}),Wo=ko,T0=o(jn,Oe,Wo),Pa=$(function(e,r){return p(Go,T0,rn(e),r)}),K=$(function(e,r){var n=r;return e*n}),fr=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Gn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c6:a.c6+r*(t.c6-a.c6)}}),C0=y(function(e,r,n){var a=Ha(n),t=Sr(a),i=Tr(a),c=Cr(a),l=p(Gn,e,r,Hr(a)),u=r>=0?Ye({cB:l,c4:t,c5:i,c7:c}):Ye({cB:l,c4:fr(t),c5:fr(i),c7:fr(c)}),v=Xa(n),s=v.a,m=v.b,d=v.c,f=me(o(K,r,s)),b=me(o(K,r,m)),g=me(o(K,r,d));return{er:u,aK:A(f,b,g)}}),Ho=function(e){var r=e;return r.k},Hl=function(e){var r=e;return r.eG},Wi=function(e){return Hl(Ho(e))},Xl=function(e){var r=e;return r.cB},L0=function(e){return Xl(Ho(e))},Ul=function(e){var r=e;return r.e9},Il=function(e){var r=e;return r.fr},P0=y(function(e,r,n){var a=me(o(K,r,Il(n))),t=me(o(K,r,Ul(n))),i=r>=0?Wi(n):fr(Wi(n)),c=p(Gn,e,r,L0(n));return{k:o(jn,c,i),e9:t,fr:a}}),z0=y(function(e,r,n){return o(Eo,o(Gn,e,r),n)}),k0=y(function(e,r,n){return o(Ro,o(K,J(r),Ia(n)),p(Gn,e,r,Ua(n)))}),M0=y(function(e,r,n){return o(jo,o(Gn,e,r),n)}),Dr=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Ga,c,p(C0,Oe,e,n));case 1:var c=r.a,a=r.b;return o(Fo,c,p(M0,Oe,e,a));case 3:var c=r.a,t=r.b;return o(Ao,c,p(k0,Oe,e,t));case 2:var c=r.a,i=r.b;return o(Do,c,p(P0,Oe,e,i));case 4:var c=r.a,l=r.b;return o(Bo,c,p(z0,Oe,e,l));default:var u=r.a;return Wa(o(re,Dr(e),u))}}),D0=function(){var e=function(n){return o(Mr,-1,o(Nl,n,A(10,1,10)))},r=function(n){return La(h([e(n),o(Pa,Rt(45),e(n))]))};return La(h([r(ia(Gi)),o(Mr,-.1,o(Dr,1.1,r(ia(i0)))),o(Mr,-.2,o(Dr,1.2,r(ia(Gi))))]))}(),B0=$(function(e,r){return o(Le,function(n){if(n.$)return 0;var a=n.b;return a},o(_o,e,r.av))}),A0=$(function(e,r){return o(sr,0,To(o(So,B0(e),r)))}),F0=$(function(e,r){return o(A0,e,r.eA)}),Hi=F0,Xi=hv,V0=E(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return C(Wr,f,d,m,a)}),E0=y(function(e,r,n){return C(V0,e,r,n,1)}),Jn=function(e){return No(A(e,0,0))},Xo=Mo,R0=o(jn,Oe,Xo),Ui=$(function(e,r){return p(Go,R0,rn(e),r)}),Ol=$(function(e,r){return(r-al(r/e)*e)/e}),j0=function(e){return 2*_r*e},it=E(function(e,r,n,a){return e+(r-e)*(1+Nr(j0(o(Ol,n,a))))/2}),Gt=Ee(function(e,r,n,a,t,i){var c=function(f){return p(E0,C(it,f/6,1,10,e.a4),.6,.6)},l=$(function(f,b){return lr(o(jr,f,2)+o(jr,b,2))}),u=o(Nl,ia(c(i)),A(r,n,n)),v=z(o(l,a,t),o(l,r-a,t)),s=v.a,m=v.b,d=i?h([o(Mr,n/2,o(Jn,-(r/2),o(Dr,s/r,o(Ui,o(Xi,t,a),o(Mr,n/2,o(Jn,r/2,o(Pa,C(it,-2,2,8,e.a4),o(Dr,.86,se(Gt,e,r,n,a,t,i-1))))))))),o(Mr,n/2,o(Jn,r/2,o(Dr,m/r,o(Ui,-o(Xi,t,r-a),o(Mr,n/2,o(Jn,-(r/2),o(Pa,C(it,2,-2,8,_r+e.a4),o(Dr,.86,se(Gt,e,r,n,a,t,i-1)))))))))]):L;return La(o(k,u,d))}),N0=$(function(e,r){return 360*o(Ol,e,r)}),G0=$(function(e,r){return h([o(Pa,o(N0,1e3,e.a4),La(h([D0,se(Gt,e,2,2,o(Hi,"s",e),o(Hi,"t",e),5)])))])}),W0=function(e){return e},Er=function(e){return e},H0=function(e){return Er(.01*e)},Ii=function(e){return e},X0=function(e){return e},U0=function(e){return{$:0,a:e}},I0=U0,O0={$:3},J0=O0,q0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Y0=q0,Z0=$(function(e,r){return r.b?p(or,k,r,e):e}),We=function(e){return p(or,Z0,L,e)},Uo=$(function(e,r){return We(o(re,e,r))}),Q0=function(e){return{$:1,a:e}},K0=Q0,ep=function(e){return o(Bn,"height",Ae(e))},rp=function(e){return w$(T$(e))},np=rp,ap=function(e){return{$:2,a:e}},tp=ap,op=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return qe(l*1e3)/1e3},c=function(l){return qe(l*1e4)/100};return Al(h(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},ip=$(function(e,r){switch(r.$){case 0:return o(Gf,e,r);case 1:return o(Wf,e,r);case 2:return o(Hf,e,r);case 3:return o(Xf,e,r);case 4:return o(Uf,e,r);default:return o(If,e,r)}}),cp=$(function(e,r){switch(r.$){case 0:return o(bf,e,r);case 1:return o(gf,e,r);case 2:return o(hf,e,r);case 3:return o(_f,e,r);case 4:return o(wf,e,r);case 5:return o(yf,e,r);case 6:return o(xf,e,r);case 7:return o(Sf,e,r);default:return Tf(e)}}),lp=y(function(e,r,n){return p(Nf,e,r,n)}),Oi=function(e){var r=e;return r},ln=tf,ct=C(ln,1,1,1,1),Ze=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),up=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),vp=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(up,n*a/t,n,n*(1-a-t)/t)}),$p=function(e){var r=e.a,n=e.b,a=e.c;return p(En,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Io=$(function(e,r){return $p(o(vp,e,r))}),Jl=$(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),er=$f,fp=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},lt=we(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(ln,a.bY,a.bY,a.bY,i);return se(t,e,c,fp(a),a.dp,r,n)}),ql=Ee(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Jl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var b=t.b,g=o(k,S(lt,e,r,n,a,b),i.M);return{M:g,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(k,S(lt,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,T=o(k,S(lt,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(An,C(ql,e,r,n,a),i,M)}}),sp=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Yl=sp,Oo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),mp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Oo,518,r,n,a)},dp=$(function(e,r){return{$:6,a:e,b:r}}),pp=dp,Zl=h([mp({V:1,W:0,Z:!1}),C(Yl,!1,!1,!1,!1),o(pp,0,1)]),an=519,Jo=8,Ql=15,Zr=7681,bp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=pf,gp=$(function(e,r){return{$:0,a:e,b:r}}),hp=gp({df:1,$7:0,dV:5}),Be=Y$,_p=hp(h([{bU:o(Be,-1,-1)},{bU:o(Be,1,-1)},{bU:o(Be,-1,1)},{bU:o(Be,1,1)}])),wp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},yp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},qo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(yp,a,t,i)))}),Yo=function(e){return p(qo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Zo=function(e){return S(ae,h([Yo(e),C(Yl,!1,!1,!1,!1)]),wp,bp,_p,{})},xp=Zo({a9:Zr,cp:0,cO:Jo,bm:an,c3:Ql,bu:Zr,bv:Zr}),Sp=516,Ji=5386,Se=7680,Tp=function(e){return o(jr,2,e+4)},Kl=function(e){return Zo({a9:Se,cp:Ql,cO:Jo,bm:Sp,c3:Tp(e),bu:Ji,bv:Ji})},Cp=y(function(e,r,n){return We(h([p(Ze,e,n,Zl),h([Kl(r),xp])]))}),Lp=$(function(e,r){return We(o(Zc,Cp(e),r))}),Pp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Oo,513,r,n,a)},zp=Pp({V:1,W:0,Z:!0}),kp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Mp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,b=v.b,g=v.c;return kp(s)(m)(d)(f)(b)(g)(r)(n)(a)(t)});return o(l,i,c)},Dp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qi=$(function(e,r){var n=e,a=r;return p(Dp,32774,n,a)}),Bp=1,Yi=771,Ap=770,Qo=Mp({bw:0,aH:o(qi,Bp,Yi),bz:0,bB:o(qi,Ap,Yi),bG:0,bW:0}),Xr=h([zp,Qo]),Fp=function(e){var r=e;return r.dO},Vp=function(e){var r=e;return r.dP},eu=function(e){var r=e;return r.dQ},Ep=function(e){var r=e;return r.dR},Rp=function(e){var r=e;return r.dS},ru=function(e){var r=e;return r.dT},nu=function(e){return A(o($r,Ep(e),Fp(e)),o($r,Rp(e),Vp(e)),o($r,ru(e),eu(e)))},Zi=function(e){var r=e;return Hr(r)},jp=function(e){return e},Np=function(e){return Ye({cB:jp({fT:e.H,fX:e.I,c6:e.J}),c4:vr({fT:e.q,fX:e.r,c6:e.s}),c5:vr({fT:e.t,fX:e.u,c6:e.v}),c7:vr({fT:e.w,fX:e.x,c6:e.y})})},ut=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),au=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,b=f;return{fT:c*b.fT+l*b.fX+u*b.c6,fX:c*d.fT+l*d.fX+u*d.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),tu=$(function(e,r){return{cB:o(au,e,Hr(r)),c4:o(ut,e,Sr(r)),c5:o(ut,e,Tr(r)),c7:o(ut,e,Cr(r))}}),za=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),la=$(function(e,r){return O(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(la,n,a)}),Gp=$(function(e,r){var n=za(r),a=za(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),He=function(e){var r=e;return r},Wp=function(e){var r=e;return A(r.fT,r.fX,r.c6)},xn=$(function(e,r){var n=e,a=r;return a+n}),Hp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=oa(me(a)),c=oa(me(n)),l=oa(me(t)),u=Wp(r),v=u.a,s=u.b,m=u.c;return{dO:o(xn,c,v),dP:o(xn,i,s),dQ:o(xn,l,m),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,m)}}),Qi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,s=t.fT*r,m=He(Cr(e)),d=J(l*m.fT)+J(c*m.fX)+J(i*m.c6),f=He(Tr(e)),b=J(l*f.fT)+J(c*f.fX)+J(i*f.c6),g=He(Sr(e)),w=J(l*g.fT)+J(c*g.fX)+J(i*g.c6),x=o(Hp,A(w,b,d),o(au,e,p(jt,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(Gp,_,x))}),Wt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,b=r,g=n,w=i;e=f,r=b,n=g,a=w;continue e;case 1:var c=t.a,l=C(Qi,e,r,c,n),f=e,b=r,g=l,w=i;e=f,r=b,n=g,a=w;continue e;case 2:var f=e,b=r,g=n,w=i;e=f,r=b,n=g,a=w;continue e;case 3:var c=t.a,l=C(Qi,e,r,c,n),f=e,b=r,g=l,w=i;e=f,r=b,n=g,a=w;continue e;case 4:var u=t.a,f=e,b=r,g=C(Wt,e,r,n,u),w=i;e=f,r=b,n=g,a=w;continue e;default:var v=t.a,s=t.b,m=o(tu,Np(v),e),d=r*v.bY,f=e,b=r,g=C(Wt,m,d,n,h([s])),w=i;e=f,r=b,n=g,a=w;continue e}}else return n}),un=K$,vn=ef,$n=rf,ou=function(e){return{$:4,a:e}},Xp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Wn=function(e){return ou(o(Xp,e,L))},Up={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Ip=function(e){var r=e;return r},Ki=Zo({a9:Zr,cp:0,cO:Jo,bm:an,c3:255,bu:Zr,bv:Zr}),Op=function(e){var r=e,n=o(ke,J(r.fT),o(ke,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=lr(i*i+t*t+a*a);return c*n}else return Je},Ce={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fT:0,fX:0,c6:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fT,dy:n.bW,dz:a.fT,dA:a.bW,dB:n.fX,dC:n.bG,dD:a.fX,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),bn=z({be:o(je,Ce,Ce),bL:o(je,Ce,Ce),bM:o(je,Ce,Ce),bN:o(je,Ce,Ce)},C(ln,0,0,0,0)),ec=function(e){var r=e;return-r},iu=514,cu=function(e){var r=e.Z,n=e.W,a=e.V;return C(Oo,515,r,n,a)},lu=240,Jp=h([cu({V:1,W:0,Z:!0}),Yo({a9:Se,cp:lu,cO:0,bm:iu,c3:0,bu:Se,bv:Se}),Qo]),qp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=me(a),l=c,u=me(t),v=u,s=n.cM;if(s.$){var d=s.a;return zt(v)?er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return zt(v)?er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),qn=$(function(e,r){return(1&e>>r)===1?0:1}),Yp=function(e){return h([cu({V:1,W:0,Z:!0}),Yo({a9:Se,cp:lu,cO:e,bm:iu,c3:0,bu:Se,bv:Se}),Qo])},Zp=y(function(e,r,n){return We(o(re,function(a){var t=a<<4,i=C(ln,o(qn,a,0),o(qn,a,1),o(qn,a,2),o(qn,a,3));return p(Ze,e,z(r,i),Yp(t))},o(Kr,1,o(jr,2,n)-1)))}),Qr=function(e){var r=e;return r},Qp=ff,rc=function(e){var r=e;return fr(Cr(r))},uu=jl,Kp={cB:Oe,c4:uu,c5:Wo,c7:Xo},Oa=function(e){var r=e;return r},e3=function(e){var r=Oa(Hr(e)),n=He(Cr(e)),a=He(Tr(e)),t=He(Sr(e));return er({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},r3=$(function(e,r){var n=r;return e3(o(tu,n,e))}),n3=function(e){return o(r3,Kp,e)},a3=function(e){var r=e;return r.c2},t3=function(e){var r=e;return Sr(r)},o3=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),i3=function(e){var r=e;return Tr(r)},c3=function(e){var r=a3(e.ev),n=Ye({cB:Zi(r),c4:t3(r),c5:i3(r),c7:fr(rc(r))}),a=Wn(e.aP),t=a,i=C(Wt,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=n3(r),u=o(K,.99,o(ce,me(e.aJ),ec(eu(c)))),v=nu(c),s=v.a,m=v.b,d=v.c,f=Op(p(o3,s,m,d)),b=o(K,1.01,o(xn,f,ec(ru(c)))),g=o(qp,e.ev,{eq:e.eq,eP:b,fg:u}),w=Qp(g).dM,x=w?He(fr(rc(r))):Qr(Zi(r)),_=function(){var oe=e.b_;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),T=_.a,M=_.b,G=e.bE,j=G,R=o(Io,j,e.b0),N=R,W=er({dx:0,dy:x.fT,dz:un(N),dA:e.ec,dB:0,dC:x.fX,dD:vn(N),dE:Ip(f),dF:0,dG:x.c6,dH:$n(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),F=se(ql,W,l,g,Up,t,{M:L,U:L,fz:L}),Y=e.bK;switch(Y.$){case 0:var Q=Y.a;return We(h([p(Ze,F.M,z(Q,ct),Xr),p(Ze,F.U,bn,Xr)]));case 1:var Q=Y.a;return We(h([p(Ze,F.M,bn,Xr),h([Ki]),p(Ze,F.fz,Q.be,Zl),h([Kl(0)]),p(Ze,F.M,z(Q,ct),Jp),p(Ze,F.U,bn,Xr)]));default:var ie=Y.a,ve=Y.b;return We(h([p(Ze,F.M,z(ve,ct),Xr),h([Ki]),o(Lp,F.fz,ie),p(Zp,F.M,ve,Rr(ie)),p(Ze,F.U,bn,Xr)]))}},l3=function(e){return o(Bn,"width",Ae(e))},u3=$(function(e,r){var n=h([K0(1),tp(0),I0(!0),C(Y0,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return A(n,"0",1);case 1:return A(o(k,J0,n),"1",1);default:var M=T.a;return A(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Oi(v),m=o(_e,"height",Ae(s)+"px"),d=Oi(u),f=d/s,b=o(Uo,function(T){return c3({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),g=o(_e,"width",Ae(d)+"px"),w=e.aI,x=w,_=op(x);return p(np,"div",h([o(_e,"padding","0px"),g,m]),h([z(i,p(lp,t,h([l3(qe(d*c)),ep(qe(s*c)),g,m,o(_e,"display","block"),o(_e,"background-color",_)]),b))]))}),v3=function(e){return o(u3,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},vu=function(e){return e},nc=vu({fT:.31271,fX:.32902}),$3=$(function(e,r){var n=e,a=He(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(Io,r.ce,r.b7),u=l;return{bz:$n(u),ex:n,bG:vn(u),cK:0,bW:un(u),c_:1,fT:-t,fX:-i,c6:-c}}),f3=function(e){return e},s3=function(e){return f3(1.2*o(jr,2,e))},vt=function(e){return e},m3={$:0},d3=m3,$u=function(e){return e},ac=function(e){var r=e;return r},p3=function(e){e:for(;;){if(hr(e.e2,Je)&&hr(e.e3,Je))return Ce;if(o(Vl,me(e.e2),me(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=J(ac(e.e3)/_r),a=J(ac(e.e2)/_r),t=He(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(Io,$u(1),e.b7),v=u;return{bz:a*$n(v),ex:!1,bG:a*vn(v),cK:n/a,bW:a*un(v),c_:3,fT:i,fX:c,c6:l}}}},tc=function(e){return p3({b7:e.b7,e2:e.ce,e3:Je,ei:e.ei})},b3=function(e){var r=e;return r},fu=function(e){var r=p(Wl,1667,25e3,b3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return vu({fT:n,fX:a})},su=function(e){return e},g3=fu(su(12e3)),h3=fu(su(5600)),_3=function(e){return{$:2,a:e}},w3=function(e){return _3(e)},y3=$(function(e,r){return{$:2,a:e,b:r}}),mu=function(e){return{$:0,a:e}},Yn=function(e){var r=e;return r},x3=function(e){var r=e;return r.ex},S3=mu(bn.a),T3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(k,a,i),c):z(i,o(k,a,c))});return p(or,n,z(L,L),r)}),C3=function(e){var r=e;return er({dx:r.fT,dy:r.bW,dz:0,dA:0,dB:r.fX,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},L3=ee(function(e,r,n,a,t,i,c,l){var u=o(T3,x3,h([Yn(e),Yn(r),Yn(n),Yn(a)])),v=u.a,s=u.b;if(v.b){var m=le(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,b=f.a,g=f.b,w=g.a,x=g.b,_=x.a;return o(y3,o(re,C3,v),{be:o(je,d,b),bL:o(je,w,_),bM:o(je,t,i),bN:o(je,c,l)})}else return S3}else return mu({be:o(je,e,r),bL:o(je,n,a),bM:o(je,t,i),bN:o(je,c,l)})}),P3=y(function(e,r,n){return Aa(L3,e,r,n,Ce,Ce,Ce,Ce,Ce)}),z3=function(e){var r=o($3,X0(e.fz),{b7:h3,eG:e.fI,ce:vt(8e4)}),n=tc({b7:g3,ce:vt(2e4),ei:e.ei}),a=tc({b7:nc,ce:vt(15e3),ei:fr(e.ei)}),t=p(P3,r,n,a);return v3({b1:w3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:s3(15),bK:t,b_:d3,b0:nc})},du=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),k3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),pu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),bu=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),M3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),D3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),B3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ko=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(B3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(du,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(k3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(pu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(D3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(bu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(M3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ei={$:0},A3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=za(c(u)),m=o(fe,s.dR,e),d=o(ce,s.dO,r),f=o(fe,s.dS,n),b=o(ce,s.dP,a),g=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=v;e=m,r=d,n=f,a=b,t=g,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),F3=y(function(e,r,n){var a=za(e(r));return Aa(A3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),$t=$(function(e,r){var n=e,a=r;return O(a,n)<1}),gu=function(e){return o($t,e.dO,e.dR)&&o($t,e.dP,e.dS)&&o($t,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},kn=function(e){var r=e;return r},hu=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Ar(n),c=Fr(n),l=Vr(n),u=Ar(a),v=Fr(a),s=Vr(a),m=Ar(t),d=Fr(t),f=Vr(t);return gu({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,s,f))})},_u=nf,Pe=function(e){return _u(Oa(e))},wu=function(e){var r=e;return r},Ja=function(e){return _u(wu(e))},V3=$(function(e,r){var n=e,a=r,t=o(ke,J(a.fT),o(ke,J(a.fX),J(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=lr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return El}),E3=V3($u(1)),yu=y(function(e,r,n){var a=o(Ca,r,n),t=o(Ca,e,r);return E3(o(Po,a,t))}),R3=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Ja(p(yu,n,a,t));return A({o:i,bU:Pe(n)},{o:i,bU:Pe(a)},{o:i,bU:Pe(t)})},j3=$(function(e,r){return{$:2,a:e,b:r}}),xu=j3({df:3,$7:0,dV:4}),N3=function(e){if(e.b){var r=e.a,n=e.b,a=xu(o(re,R3,e)),t=p(F3,hu,r,n);return C(du,t,e,a,0)}else return ei},Re=y(function(e,r,n){return A(e,r,n)}),Su=function(){var e=Er(1),r=Er(1),n=Er(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(pe,i,t,a),l=o(K,.5,e),u=p(pe,i,t,l),v=o(K,.5,r),s=p(pe,i,v,a),m=p(pe,i,v,l),d=o(K,.5,n),f=p(pe,d,t,a),b=p(pe,d,v,a),g=p(pe,d,t,l),w=p(pe,d,v,l);return Ko(N3(h([p(Re,c,b,f),p(Re,c,s,b),p(Re,u,g,w),p(Re,u,w,m),p(Re,f,b,w),p(Re,f,w,g),p(Re,c,m,s),p(Re,c,u,m),p(Re,c,f,g),p(Re,c,g,u),p(Re,s,w,b),p(Re,s,m,w)])))}(),Zn={$:0},G3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),W3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ja(p(yu,u,l,c)),s={o:v,bU:Pe(u)},m={o:v,bU:Pe(l)},d={o:v,bU:Pe(c)};return o(k,s,o(k,m,o(k,d,n)))}),ri=function(e){var r=e;return r.D},H3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),Ht=4294967295>>>32-Ln,Xt=cv,X3=y(function(e,r,n){e:for(;;){var a=Ht&r>>>e,t=o(Xt,a,n);if(t.$){var v=t.a;return o(Xt,Ht&r,v)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),U3=function(e){return e>>>5<<5},I3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,U3(n))>-1?ne(o(Xt,Ht&e,i)):ne(p(X3,a,e,t))}),ni=function(e){var r=e;return r.ah},ft=$(function(e,r){return o(I3,e,ni(r))}),O3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(H3,y(function(c,l,u){return A(c,l,u)}),o(ft,a,e),o(ft,t,e),o(ft,i,e))};return o(So,r,ri(e))},J3=y(function(e,r,n){e:for(;;){var a=o(so,Ve,e),t=a.a,i=a.b;if(O(Lt(t),Ve)<0)return o(tl,!0,{z:r,l:n,p:t});var c=i,l=o(k,nl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),ai=function(e){return e.b?p(J3,e,L,0):el},q3=y(function(e,r,n){return e(r(n))}),Y3=$(function(e,r){return!o(dl,o(q3,zs,e),r)}),Z3=$(function(e,r){return p(or,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),Q3=function(e){var r=e.a;return r},Tu=$(function(e,r){var n=Q3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(Y3,a,r)?{D:r,ah:e}:{D:o(Z3,a,r),ah:e}}),K3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Hn=K3({df:1,$7:3,dV:4}),ua=$(function(e,r){var n=Qr(r),a=Qr(e);return z(A(a.fT,a.fX,a.c6),A(n.fT,n.fX,n.c6))}),oc=p(En,0,0,0),st=Ee(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(_o,o(ua,e,r),t);if(v.$){var m={o:oc,bU:Pe(r)},d={o:oc,bU:Pe(e)},f=u+1,b=u;return A(o(k,A(n,b,f),o(k,A(n,f,a),c)),o(k,m,o(k,d,l)),u+2)}else{var s=v.a;return A(o(k,A(n,s,a),c),l,u)}}),eb=we(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,b=a+1,g=a,w=e,x=r,_=v,T=a+3,M=se(st,s,d,f,g,r,se(st,m,s,b,f,r,se(st,d,m,g,b,r,t)));e=w,r=x,n=_,a=T,t=M;continue e}else{var G=t,j=G.a,R=G.b;return z(j,Fe(R))}}),rb=we(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,b=n+1,g=n,w=p(_n,o(ua,d,s),f,p(_n,o(ua,s,m),b,p(_n,o(ua,m,d),g,t))),x=o(k,A(g,b,f),a),_=e,T=v,M=n+3,G=x,j=w;e=_,r=T,n=M,a=G,t=j;continue e}else return A(a,t,n)}),Pr=y(function(e,r,n){var a=O3(n),t=p(or,W3(r),L,a),i=S(rb,r,a,0,L,Fl),c=i.a,l=i.b,u=i.c,v=S(eb,r,l,a,0,A(c,L,u)),s=v.a,m=v.b,d=Bl(m)?t:le(t,m);return p(G3,e,o(Tu,ai(d),s),o(Hn,d,s))}),Ut=function(e){return{D:o(re,function(r){return A(3*r,3*r+1,3*r+2)},o(Kr,0,Rr(e)-1)),ah:ai(We(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Cu=function(e){switch(e.$){case 0:return Zn;case 1:var a=e.a,r=e.b,n=o(re,kn,r);return p(Pr,a,Br,Ut(n));case 2:var a=e.a,r=e.b,n=o(re,kn,r);return p(Pr,a,Br,Ut(n));case 3:var a=e.a,t=e.b;return p(Pr,a,Br,t);case 4:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.bU},t);case 8:return Zn;case 9:return Zn;default:return Zn}},ic=Cu(Su),Lu={$:0},P=Lu,ge=$(function(e,r){return{$:1,a:e,b:r}}),nb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},ab=1029,tb=function(e){return{$:5,a:e}},Pu=function(e){var r=e;return tb(r)},ob=Pu(ab),ib=1028,cb=Pu(ib),ze=y(function(e,r,n){return r===1?e?o(k,ob,n):o(k,cb,n):n}),zu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},mt=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(ze,l,a,m),zu,nb,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),ti={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},ku={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(ze,l,a,m),ku,ti,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Mu=$(function(e,r){return{$:3,a:e,b:r}}),lb={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ub=E(function(e,r,n,a){return o(Mu,n,ee(function(t,i,c,l,u,v,s,m){return S(ae,m,Du,lb,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),oi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Xn=function(e){var r=e;return r},qa=af,cr=we(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(ze,u,t,d),ku,oi,a,{aN:o(qa,Xn(r),e),b:l,c,d:s,e:i,f:v})}))}),vb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},$b=we(function(e,r,n,a,t){return o(Mu,a,ee(function(i,c,l,u,v,s,m,d){return S(ae,d,Du,vb,t,{aN:o(qa,Xn(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Bu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qn=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(ze,l,a,m),Au,Bu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Fu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Vu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},fb=Ee(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var b=d.a,g=d.b;return S(ae,p(ze,v,i,f),Vu,Fu,t,{P:g,be:b.be,bL:b.bL,bM:b.bM,bN:b.bN,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Eu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},sb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(m,d,f,b,g,w,x,_){var T=x.a,M=x.b;return S(ae,p(ze,b,s,_),Vu,Eu,v,{b5:e,b8:r,b9:i,ca:a,P:M,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:f,c:d,aW:c,d:w,cS:n,e:m,a$:l,f:g})}))}}}}}}}}}}},Ru={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Kn=Ee(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var b=d.a,g=d.b;return S(ae,p(ze,v,i,f),Au,Ru,t,{b4:e,P:g,be:b.be,bL:b.bL,bM:b.bM,bN:b.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),mb=function(e){return{$:0,a:e}},cc=$(function(e,r){return{$:1,a:e,b:r}}),Sn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),db=function(e){return C(ln,un(e),vn(e),$n(e),1)},ii=C(ln,0,0,0,0),va=$(function(e,r){if(r.$){var a=r.a.C;return z(a,ii)}else{var n=r.a;return z(e,db(n))}}),ju=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(cc,z(t,ii),o(Sn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(cc,o(va,t,e),o(Sn,t,r))}else{var a=n.a.a;return n.b.a,mb(a)}}),pb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ea=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),bb=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gb=function(e){return o(Be,e,1)},It=o(Be,0,0),Ur=$(function(e,r){if(r.$){var a=r.a.C;return z(a,It)}else{var n=r.a;return z(e,gb(n))}}),Nu=E(function(e,r,n,a){var t=C(bb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(ea,z(u,ii),o(Ur,u,r),o(Ur,u,n),o(Sn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(ea,o(va,u,e),z(u,It),o(Ur,u,n),o(Sn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(ea,o(va,u,e),o(Ur,u,r),z(u,It),o(Sn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(ea,o(va,u,e),o(Ur,u,r),o(Ur,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(pb,i,c,l)}}),hb={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},dt=we(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(ze,u,t,d),zu,hb,a,{b2:Xn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Gu={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_b=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(ze,l,a,m),Gu,Fu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),wb=qt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,m,d,f,b,g,w){var x=g.a,_=g.b;return S(ae,p(ze,d,u,w),Gu,Eu,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:s,aW:e,d:b,cS:n,e:v,a$:0,f})}))}),Mn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),yb=function(e){var r=e;return p(Mn,r.dR,r.dO,.5)},xb=function(e){var r=e;return p(Mn,r.dS,r.dP,.5)},Sb=function(e){var r=e;return p(Mn,r.dT,r.dQ,.5)},Tb=function(e){return p(pe,yb(e),xb(e),Sb(e))},H=function(e){var r=nu(e),n=r.a,a=r.b,t=r.c;return{ey:Oa(Tb(e)),eS:n/2,eT:a/2,eU:t/2}},ci=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(mt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(mt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(mt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(ub,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(dt,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(dt,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(dt,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S($b,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,m=o(ju,s,j);if(m.$){var b=m.a,g=b.a;b.b;var w=m.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(_b,g,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(fb,g,x,_,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(Qn,d,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(Qn,d,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(Qn,d,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Qn,d,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,M=e.c,G=e.d,j=e.e,R=C(Nu,T,M,G,j);if(R.$){var Y=R.a,Q=Y.a,ie=Y.b,ve=R.b,oe=ve.a,de=ve.b,Me=R.c,Te=Me.a,pr=Me.b,br=R.d,x=br.a,_=br.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return nv(wb,Q,ie,oe,de,Te,pr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return sb(Q)(ie)(oe)(de)(Te)(pr)(x)(_)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return se(Kn,N,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return se(Kn,N,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return se(Kn,N,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Kn,N,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),pt=function(e){var r=e;return r.fT},bt=function(e){var r=e;return r.fX},gt=function(e){var r=e;return r.c6},Cb=function(e){var r=e,n=gt(r.c7),a=bt(r.c7),t=pt(r.c7),i=gt(r.c5),c=bt(r.c5),l=pt(r.c5),u=gt(r.c4),v=bt(r.c4),s=pt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Lb=function(e){var r=Oa(Hr(e)),n=He(Cr(e)),a=He(Tr(e)),t=He(Sr(e));return{dp:Cb(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bY:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),Wu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Jl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Hu=$(function(e,r){return o(Wu,Lb(e),r)}),Ya=function(e){return{$:2,a:e}},Pb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),zb=cf,kb=of,lc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=kb(a),b=f.fT,g=f.fX,w=f.c6,x=f.em,_=zb({em:x,fT:b*s,fX:g*m,c6:w*d});return Aa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ot=$(function(e,r){switch(r.$){case 0:return Lu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(Ot,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(Pb,e,t),o(lc,e,i));case 3:return r;case 2:var i=r.a;return Ya(o(lc,e,i));default:var c=r.a;return ou(o(re,Ot(e),c))}}),li=$(function(e,r){var n=r;return o(Ot,e,n)}),ui={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Xu=7683,Uu=7682,Mb=p(qo,{cp:0,cO:0,c3:15},{a9:Se,bm:an,bu:Se,bv:Xu},{a9:Se,bm:an,bu:Se,bv:Uu}),Db=p(qo,{cp:0,cO:0,c3:15},{a9:Se,bm:an,bu:Se,bv:Uu},{a9:Se,bm:an,bu:Se,bv:Xu}),vi=$(function(e,r){return e?o(k,Db,r):o(k,Mb,r)}),Bb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},Ab=function(e){if(e.$){var r=e.c;return ne(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(vi,i,v),Bb,ui,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},ka=function(e){var r=Ab(e);if(r.$)return P;var n=r.a;return Ya(n)},Fb=E(function(e,r,n,a){var t=o(ci,n,Su),i=function(){var s=z(e,r);return s.a?s.b?Wn(h([t,ka(ic)])):t:s.b?ka(ic):P}(),c=Xa(a),l=c.a,u=c.b,v=c.c;return o(Hu,Ha(a),o(li,A(l,u,v),i))}),Vb=$(function(e,r){return C(Fb,!0,!0,e,r)}),Iu=$(function(e,r){return{$:0,a:e,b:r}}),Eb=function(e){var r=xo(e),n=r.cN,a=r.cd,t=r.b6;return p(En,n,a,t)},Rb=function(e){return o(Iu,0,Nt(Eb(e)))},Tn=function(e){var r=e;return Nr(r)},jb=$(function(e,r){var n=r;return n/e}),uc=function(e){var r=e;return{fT:Nr(r),fX:nn(r)}},Nb=$(function(e,r){var n=e.bU,a=e.o;return o(k,{o:Ja(a),bU:Pe(n)},r)}),Gb=Ba(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bU),s=vn(l.bU),m=un(l.bU),d=o(la,e,m),f=o(ke,r,m),b=o(la,n,s),g=o(ke,a,s),w=o(la,t,v),x=o(ke,i,v),_=u;e=d,r=f,n=b,a=g,t=w,i=x,c=_;continue e}else return gu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Ou=$(function(e,r){var n=$n(e.bU),a=vn(e.bU),t=un(e.bU);return Yt(Gb,t,t,a,a,n,n,r)}),Wb=function(e){var r=p(Ic,Nb,L,ni(e));if(r.b){var n=r.a,a=r.b,t=o(Hn,r,ri(e)),i=o(Ou,n,a);return C(pu,i,e,t,0)}else return ei},vc=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),Ma=function(e){var r=e;return nn(r)},Jt=function(e){return rn(2*_r*e)},Hb=Br,$c=Hb({cB:Oe,c4:uu,c5:Wo}),Ju=function(){var e=72,r=o(jb,e,Jt(1)),n=Er(1),a=qr(Mo),t=qr(Rl),i=Er(1),c=o(K,.5,i),l=p(pe,Je,Je,c),u=o(K,-.5,i),v=p(pe,Je,Je,u),s=function(f){var b=o(K,f,r),g=qr(o(vc,$c,uc(b))),w=o(K,Tn(b),n),x=o(K,Ma(b),n),_=p(pe,w,x,c),T=p(pe,w,x,u),M=o(ya,e,f+1),G=o(K,M,r),j=qr(o(vc,$c,uc(G))),R=o(K,Tn(G),n),N=o(K,Ma(G),n),W=p(pe,R,N,u),F=p(pe,R,N,c);return h([A({o:t,bU:v},{o:t,bU:W},{o:t,bU:T}),A({o:g,bU:T},{o:j,bU:W},{o:j,bU:F}),A({o:g,bU:T},{o:j,bU:F},{o:g,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:F})])},m=o(re,s,o(Kr,0,e-1)),d=Ut(We(m));return Ko(Wb(d))}(),fc=Cu(Ju),Xb=function(e){var r=Hl(e),n=zo(r),a=n.a,t=n.b;return Ye({cB:Xl(e),c4:a,c5:t,c7:r})},Ub=E(function(e,r,n,a){var t=Xb(Ho(a)),i=o(ci,n,Ju),c=function(){var m=z(e,r);return m.a?m.b?Wn(h([i,ka(fc)])):i:m.b?ka(fc):P}(),l=Il(a),u=l,v=Ul(a),s=v;return o(Hu,t,o(li,A(u,u,s),c))}),Ib=$(function(e,r){return C(Ub,!0,!0,e,r)}),sc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},mc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},gn=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return er({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},ra=xu(h([A({cZ:0},{cZ:1},{cZ:2})])),Ob=$(function(e,r){var n=hu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(ge,a,ee(function(_,T,M,G,j,R,N,W){return S(ae,p(ze,G,0,W),sc,ti,ra,{aw:t,b:M,c:T,d:R,e:_,br:gn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,T,M,G,j,R,N,W){return S(ae,p(ze,G,0,W),sc,oi,ra,{aN:o(qa,Xn(c),i),b:M,c:T,d:R,e:_,br:gn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(ju,l,f);if(u.$)return P;var v=u.a;return o(ge,a,ee(function(_,T,M,G,j,R,N,W){var F=N.a,Y=N.b;return S(ae,p(ze,G,0,W),mc,Bu,ra,{P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:M,c:T,d:R,e:_,br:gn(r),f:j})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,b=C(Nu,s,m,d,f);if(b.$)return P;var g=b.a,w=b.b,x=b.c;return o(ge,a,ee(function(_,T,M,G,j,R,N,W){var F=N.a,Y=N.b;return S(ae,p(ze,G,0,W),mc,Ru,ra,{b4:g,P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:x,b:M,c:T,d:R,cR:w,e:_,br:gn(r),f:j})}))}}),Jb=function(){var e=h([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Hn,e,r)}(),qb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},dc=function(e){return Ya(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(vi,t,u),qb,ui,Jb,{b:a,c:n,d:c,e:r,bZ:l,br:gn(e),f:i})}))},Yb=E(function(e,r,n,a){var t=o(Ob,n,a),i=z(e,r);return i.a?i.b?Wn(h([t,dc(a)])):t:i.b?dc(a):P}),Zb=$(function(e,r){return C(Yb,!0,!0,e,r)}),Qb=$(function(e,r){var n=Vr(r),a=Vr(e),t=Fr(r),i=Fr(e),c=Ar(r),l=Ar(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Kb=function(e){var r=Vo(e),n=r.a,a=r.b;return o(Qb,n,a)},pc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},eg=$(function(e,r){return{$:1,a:e,b:r}}),rg=eg({df:2,$7:0,dV:1}),bc=rg(h([z({dw:0},{dw:1})])),ng=$(function(e,r){var n=Kb(r),a=H(n),t=Vo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(ge,a,ee(function(v,s,m,d,f,b,g,w){return S(ae,w,pc,ti,bc,{aw:l,du:Pe(c),dv:Pe(i),b:m,c:s,d:b,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,m,d,f,b,g,w,x){return S(ae,x,pc,oi,bc,{aN:o(qa,Xn(u),l),du:Pe(c),dv:Pe(i),b:d,c:m,d:g,e:s,f:b})}));case 2:return P;default:return P}}),ag=$(function(e,r){return o(ng,e,r)}),gc=$(function(e,r){var n=e,a=r;return n/a}),tg=we(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(hr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),hc=$(function(e,r){return e<1?L:S(tg,0,e,e,r,L)}),og=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ja(a),bU:Pe(n),L:o(Be,c,l)},r)}),ig=function(e){var r=p(Ic,og,L,ni(e));if(r.b){var n=r.a,a=r.b,t=o(Hn,r,ri(e)),i=o(Ou,n,a);return C(bu,i,e,t,0)}else return ei},qu=$(function(e,r){var n=e,a=r,t=Nr(a);return{fT:t*Nr(n),fX:t*nn(n),c6:nn(a)}}),cg=function(){var e=Er(1),r=72,n=o(Kr,0,r-1),a=o(hc,r,o(Mn,Je,Jt(1))),t=$o(r/2),i=o(Kr,0,t-1),c=o(hc,t,o(Mn,pn(90),pn(-90))),l=ai(We(o(re,function(s){return o(re,function(m){return{o:qr(o(qu,s,m)),bU:p(pe,o(K,Tn(m)*Tn(s),e),o(K,Tn(m)*Ma(s),e),o(K,Ma(m),e)),L:z(o(gc,s,Jt(1)),o(gc,o(xn,pn(90),m),pn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=We(o(re,function(s){return We(o(re,function(m){var d=o(u,s+1,m),f=o(u,s,m),b=o(u,s+1,m+1),g=o(u,s,m+1);return h([A(g,b,d),A(g,d,f)])},i))},n));return Ko(ig(o(Tu,l,v)))}(),Da=72,na=2*Da,lg=$(function(e,r){e:for(;;){var n=na+1,a=o(ya,na,2*e+3),t=o(ya,na,2*e+2),i=2*e+1,c=2*e,l=na,u=o(k,A(l,c,t),o(k,A(c,a,t),o(k,A(c,i,a),o(k,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),ug=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),vg=$(function(e,r){e:for(;;){var n=p(ug,0,2*_r,e/Da),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),$g=function(){var e=o(vg,Da-1,h([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(lg,Da-1,L);return o(Hn,e,r)}(),fg={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},_c=function(e){return Ya(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(vi,!0,u),fg,ui,$g,{aw:p(En,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},sg=function(e){var r=wu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bY:1}},mg=$(function(e,r){return o(Wu,sg(e),r)}),dg=E(function(e,r,n,a){var t=o(ci,n,cg),i=function(){var u=z(e,r);return u.a?u.b?Wn(h([t,_c()])):t:u.b?_c():P}(),c=Ia(a),l=c;return o(mg,o(Ca,Oe,Ua(a)),o(li,A(l,l,l),i))}),pg=$(function(e,r){return C(dg,!0,!0,e,r)}),bg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),gg=we(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),hg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Iu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(bg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Gl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(gg,n,a,t,i,c)}},_g=hg,Yu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(Vb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Zb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(pg,_g(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Ib,t,i)]);case 4:var c=e.a,l=e.b;return h([o(ag,Rb(c),l)]);default:var u=e.a;return o(Uo,Yu,u)}},wg=function(e){return o(Uo,Yu,e)},yg=$(function(e,r){return z3({aI:W0(e.es),ev:e.ev,aJ:H0(.5),cb:e.cb,aK:z(Ii(qe(e.cT.fR)),Ii(qe(e.cT.eW))),aP:wg(r),fz:!0,fI:o(qu,rn(e.fH),rn(e.fJ)),ei:Xo})}),xg=$(function(e,r){return o(yg,{es:Nd,ev:r0({dj:{fT:0,fX:15,c6:18},aR:{fT:0,fX:4,c6:0},ei:{fT:0,fX:1,c6:0}}),cb:e.cb,cT:e.cT,fH:-Rt(135),fJ:-Rt(45)},o(G0,e,r))}),Sg=C(Dd,xg,jd,Rd,Bd);const Tg={Main:{init:Sg(o(B,function(e){return De({e1:e})},o(D,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return De({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",ha(zn)))},o(D,"left",Z))},o(D,"pressedKeys",ha(zn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return De({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return De({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return De({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Cg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(b=>b!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const b=f/1e3,g=b-V.clock;g<.009||(V.dt=g,V.clock=b,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},Lg=()=>{ht("pointerdown"),ht("wheel"),ht("keydown")},ht=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Pg=Tg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Lg();Cg(Pg);
