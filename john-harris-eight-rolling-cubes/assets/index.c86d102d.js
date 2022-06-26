const fv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};fv();function kr(e,r,n){return n.a=e,n.f=r,n}function v(e){return kr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return kr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return kr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return kr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return kr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Na(e){return kr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return kr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function io(e){return kr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function co(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ya(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function sv(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var dv=[];function mv(e){return e.length}var pv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),bv=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),gv=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var hv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+_v()),r});function _v(e){return"<internals>"}function tn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ue(e,r){for(var n,a=[],t=kt(e,r,0,a);t&&(n=a.pop());t=kt(n.a,n.b,0,a));return t}function kt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&tn(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=Di(e),r=Di(r));for(var t in e)if(!kt(e[t],r[t],n+1,a))return!1;return!0}v(Ue);v(function(e,r){return!Ue(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return U(e,r)<0});v(function(e,r){return U(e,r)<1});v(function(e,r){return U(e,r)>0});v(function(e,r){return U(e,r)>=0});var wv=v(function(e,r){var n=U(e,r);return n<0?Jc:n?os:qc}),En=0;function P(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function We(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ur(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ur(e.a,r);return n}var z={$:0};function ur(e,r){return{$:1,a:e,b:r}}var yv=v(ur);function h(e){for(var r=z,n=e.length;n--;)r=ur(e[n],r);return r}function Wa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var xv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});v(function(e,r){return h(Wa(r).sort(function(n,a){return U(e(n),e(a))}))});v(function(e,r){return h(Wa(r).sort(function(n,a){var t=o(e,n,a);return t===qc?0:t===Jc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Sv=v(Math.pow);v(function(e,r){return r%e});var Cv=v(function(e,r){var n=r%e;return e===0?tn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Pv=Math.PI,Lv=Math.cos,zv=Math.sin,kv=Math.tan;v(Math.atan2);function Tv(e){return e}function Mv(e){return e===1/0||e===-1/0}var Dv=Math.ceil,Av=Math.floor,Fv=Math.round,Vv=Math.sqrt,gi=Math.log,Bv=isNaN;function Ev(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Rv=v(function(e,r){return e+r});function jv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function Nv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Yv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Wv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Hv=v(function(e,r){return r.split(e)}),Gv=v(function(e,r){return r.join(e)}),Iv=y(function(e,r,n){return n.slice(e,r)});function Ov(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Uv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),qv=v(function(e,r){return r.indexOf(e)>-1}),Jv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Xv=v(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function yc(e){return e+""}function Zv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Qv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Kv(e){return Wa(e).join("")}function e$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function r$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function n$(e){return{$:0,a:e}}function lo(e){return{$:2,b:e}}var a$=lo(function(e){return typeof e=="boolean"?ve(e):rr("a BOOL",e)}),t$=lo(function(e){return typeof e=="number"?ve(e):rr("a FLOAT",e)}),o$=lo(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):rr("a STRING",e)});function i$(e){return{$:3,b:e}}var c$=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Tr(e,r){return{$:9,f:e,g:r}}var l$=v(function(e,r){return{$:10,b:r,h:e}}),u$=v(function(e,r){return Tr(e,[r])}),v$=y(function(e,r,n){return Tr(e,[r,n])});E(function(e,r,n,a){return Tr(e,[r,n,a])});he(function(e,r,n,a,t){return Tr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return Tr(e,[r,n,a,t,i])});Na(function(e,r,n,a,t,i,c){return Tr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Tr(e,[r,n,a,t,i,c,l])});io(function(e,r,n,a,t,i,c,l,u){return Tr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ye(e,n)}catch(a){return ye(o(wo,"This is not valid JSON! "+a.message,r))}});var xc=v(function(e,r){return Ye(e,r)});function Ye(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):rr("null",r);case 3:return Zn(r)?hi(e.b,r,h):rr("a LIST",r);case 4:return Zn(r)?hi(e.b,r,$$):rr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return rr("an OBJECT with a field named `"+n+"`",r);var $=Ye(e.b,r[n]);return Xe($)?$:ye(o(Ai,n,$.a));case 7:var a=e.e;if(!Zn(r))return rr("an ARRAY",r);if(a>=r.length)return rr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ye(e.b,r[a]);return Xe($)?$:ye(o(Xc,a,$.a));case 8:if(typeof r!="object"||r===null||Zn(r))return rr("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var $=Ye(e.b,r[i]);if(!Xe($))return ye(o(Ai,i,$.a));t=ur(P(i,$.a),t)}return ve(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ye(l[u],r);if(!Xe($))return $;c=c($.a)}return ve(c);case 10:var $=Ye(e.b,r);return Xe($)?Ye(e.h($.a),r):$;case 11:for(var s=z,d=e.g;d.b;d=d.b){var $=Ye(d.a,r);if(Xe($))return $;s=ur($.a,s)}return ye(is(Be(s)));case 1:return ye(o(wo,e.a,r));case 0:return ve(e.a)}}function hi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ye(e,r[i]);if(!Xe(c))return ye(o(Xc,i,c.a));t[i]=c.a}return ve(n(t))}function Zn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function $$(e){return o(Ss,e.length,function(r){return e[r]})}function rr(e,r){return ye(o(wo,"Expecting "+e,r))}function Ur(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ur(e.b,r.b);case 6:return e.d===r.d&&Ur(e.b,r.b);case 7:return e.e===r.e&&Ur(e.b,r.b);case 9:return e.f===r.f&&_i(e.g,r.g);case 10:return e.h===r.h&&Ur(e.b,r.b);case 11:return _i(e.g,r.g)}}function _i(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ur(e[a],r[a]))return!1;return!0}var f$=v(function(e,r){return JSON.stringify(r,null,e)+""});function Sc(e){return e}y(function(e,r,n){return n[e]=r,n});function jr(e){return{$:0,a:e}}function s$(e){return{$:1,a:e}}function yr(e){return{$:2,b:e,c:null}}var Tt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function d$(e){return{$:5,b:e}}var m$=0;function uo(e){var r={$:0,e:m$++,f:e,g:null,h:[]};return vo(r),r}function Cc(e){return yr(function(r){r(jr(uo(e)))})}function Pc(e,r){e.h.push(r),vo(e)}var p$=v(function(e,r){return yr(function(n){Pc(e,r),n(jr(En))})}),at=!1,wi=[];function vo(e){if(wi.push(e),!at){for(at=!0;e=wi.shift();)b$(e);at=!1}}function b$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,vo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return $o(r,a,e.e7,e.fR,e.fL,function(){return function(){}})});function $o(e,r,n,a,t,i){var c=o(xc,e,r?r.flags:void 0);Xe(c)||tn(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=g$(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),xi(l,b.b,t($))}return xi(l,u.b,t($)),d?{ports:d}:{}}var or={};function g$(e,r){var n;for(var a in or){var t=or[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=_$(t,r)}return n}function h$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function _$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Tt,l,d$(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=uo(o(Tt,l,e.b))}var w$=v(function(e,r){return yr(function(n){e.g(r),n(jr(En))})});v(function(e,r){return o(p$,e.h,{$:0,a:r})});function Lc(e){return function(r){return{$:1,k:e,l:r}}}function y$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var yi=[],tt=!1;function xi(e,r,n){if(yi.push({p:e,q:r,r:n}),!tt){tt=!0;for(var a;a=yi.shift();)x$(a.p,a.q,a.r);tt=!1}}function x$(e,r,n){var a={};ga(!0,r,a,null),ga(!1,n,a,null);for(var t in e)Pc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ga(e,r,n,a){switch(r.$){case 1:var t=r.k,i=S$(e,t,a,r.l);n[t]=C$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ga(e,c.a,n,a);return;case 3:ga(e,r.o,n,{s:r.n,t:a});return}}function S$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?or[r].e:or[r].f;return o(i,t,a)}function C$(e,r,n){return n=n||{i:z,j:z},e?n.i=ur(r,n.i):n.j=ur(r,n.j),n}function P$(e){or[e]&&tn(3)}v(function(e,r){return r});function L$(e,r){return P$(e),or[e]={f:z$,u:r,a:k$},Lc(e)}var z$=v(function(e,r){return function(n){return e(r(n))}});function k$(e,r){var n=z,a=or[e].u,t=jr(null);or[e].b=t,or[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(xc,a,c);Xe(l)||tn(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ha,hr=typeof document!="undefined"?document:{};function fo(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Cr(e,function(){}),t),{}});function Mt(e){return{$:0,a:e}}var zc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:so(n),e:t,f:e,b:i}})}),sr=zc(void 0),T$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:so(n),e:t,f:e,b:i}})}),M$=T$(void 0);function D$(e,r,n,a){return{$:3,d:so(e),g:r,h:n,i:a}}var A$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Mr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Mr([e,r],function(){return e(r)})});y(function(e,r,n){return Mr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Mr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Mr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return Mr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Na(function(e,r,n,a,t,i,c){return Mr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Mr([e,r,n,a,t,i,c,l],function(){return co(e,r,n,a,t,i,c,l)})});io(function(e,r,n,a,t,i,c,l,u){return Mr([e,r,n,a,t,i,c,l,u],function(){return Ya(e,r,n,a,t,i,c,l,u)})});var kc=v(function(e,r){return{$:"a0",n:e,o:r}}),F$=v(function(e,r){return{$:"a1",n:e,o:r}}),Tc=v(function(e,r){return{$:"a2",n:e,o:r}}),Rn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function V$(e){return e=="script"?"p":e}function B$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(kc,r.n,E$(e,r.o)):r});function E$(e,r){var n=Po(r);return{$:r.$,a:n?p(Cs,n<3?R$:j$,Ae(e),r.a):o(xa,e,r.a)}}var R$=v(function(e,r){return P(e(r.a),r.b)}),j$=v(function(e,r){return{ak:e(r.ak),c$:r.c$,cP:r.cP}});function so(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Si(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Si(c,t,i):c[t]=i}return r}function Si(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Cr(e,r){var n=e.$;if(n===5)return Cr(e.k||(e.k=e.m()),r);if(n===0)return hr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Cr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Dt(c,r,e.d),c}var c=e.f?hr.createElementNS(e.f,e.c):hr.createElement(e.c);ha&&e.c=="a"&&c.addEventListener("click",ha(c)),Dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)fo(c,Cr(n===1?l[u]:l[u].b,r));return c}function Dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?N$(e,t):a==="a0"?H$(e,r,t):a==="a3"?Y$(e,t):a==="a4"?W$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function N$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Y$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function W$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function H$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=G$(r,i),e.addEventListener(t,c,mo&&{passive:Po(i)<2}),a[t]=c}}var mo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){mo=!0}}))}catch{}function G$(e,r){function n(a){var t=n.q,i=Ye(t.a,a);if(!!Xe(i)){for(var c=Po(t),l=i.a,u=c?c<3?l.a:l.ak:l,$=c==1?l.b:c==3&&l.c$,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cP)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function I$(e,r){return e.$==r.$&&Ur(e.a,r.a)}function Mc(e,r){var n=[];return Ze(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ze(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=K$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ze(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!O$(d,m):d!==m)&&_e(n,2,a,m),Ze(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:Ci(e,r,n,a,U$);return;case 2:Ci(e,r,n,a,q$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=po(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function O$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ci(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=po(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function po(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=po(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&I$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function U$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ze(s,i[$],n,++a),a+=s.b||0}}function q$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,M=void 0,Y=void 0;if(w===x){f++,Ze(_,C,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;Y=x===N}if(R){var V=R.a,J=R.b;M=w===V}if(M&&Y){f++,Ze(_,J,t,f),mn(i,t,w,C,m,c),f+=_.b||0,f++,pn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(M){f++,mn(i,t,x,C,m,c),Ze(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(Y){f++,pn(i,t,w,_,f),f+=_.b||0,f++,Ze(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===V){f++,pn(i,t,w,_,f),mn(i,t,x,C,m,c),f+=_.b||0,f++,Ze(W,J,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;pn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];mn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var Dc="_elmW6BL";function mn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ze(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}mn(e,r,n+Dc,a,t,i)}function pn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ze(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}pn(e,r,n+Dc,a,t)}function Ac(e,r,n,a){bn(e,r,n,0,0,r.b,a)}function bn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)Ac(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&bn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&bn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return bn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=bn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Fc(e,r,n,a){return n.length===0?e:(Ac(e,r,n,a),_a(e,n))}function _a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=J$(t,a);t===e&&(e=i)}return e}function J$(e,r){switch(r.$){case 0:return X$(e,r.s,r.u);case 4:return Dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return _a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Cr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=_a(e,i.w),e;case 8:return Z$(e,r);case 5:return r.s(e);default:tn(10)}}function X$(e,r,n){var a=e.parentNode,t=Cr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Z$(e,r){var n=r.s,a=Q$(n.y,r);e=_a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Cr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&fo(e,a),e}function Q$(e,r){if(!!e){for(var n=hr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;fo(n,i.c===2?i.s:Cr(i.z,r.u))}return n}}function bo(e){if(e.nodeType===3)return Mt(e.textContent);if(e.nodeType!==1)return Mt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ur(o(Rn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,$=e.childNodes,a=$.length;a--;)u=ur(bo($[a]),u);return p(sr,l,r,u)}function K$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ef=E(function(e,r,n,a){return $o(r,a,e.e7,e.fR,e.fL,function(t,i){var c=e.fU,l=a.node,u=bo(l);return Vc(i,function($){var s=c($),d=Mc(u,s);l=Fc(l,u,d,t),u=s})})});E(function(e,r,n,a){return $o(r,a,e.e7,e.fR,e.fL,function(t,i){var c=e.cX&&e.cX(t),l=e.fU,u=hr.title,$=hr.body,s=bo($);return Vc(i,function(d){ha=c;var m=l(d),f=sr("body")(z)(m.eB),g=Mc(s,f);$=Fc($,s,g,t),s=f,ha=0,u!==m.fP&&(hr.title=u=m.fP)})})});var wa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Vc(e,r){r(e);var n=0;function a(){n=n===1?0:(wa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&wa(a),n=2)}}v(function(e,r){return o(ko,Lo,yr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(ko,Lo,yr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(ko,Lo,yr(function(){history.replaceState({},"",r),e()}))});var rf={addEventListener:function(){},removeEventListener:function(){}},nf=typeof window!="undefined"?window:rf;y(function(e,r,n){return Cc(yr(function(a){function t(i){uo(n(i))}return e.addEventListener(r,t,mo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ye(e,r);return Xe(n)?re(n.a):q});function Bc(e,r){return yr(function(n){wa(function(){var a=document.getElementById(e);n(a?jr(r(a)):s$(Ls(e)))})})}function af(e){return yr(function(r){wa(function(){r(jr(e()))})})}v(function(e,r){return Bc(r,function(n){return n[e](),En})});v(function(e,r){return af(function(){return nf.scroll(e,r),En})});y(function(e,r,n){return Bc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,En})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var tf=v(function(e,r){var n="g";e.fk&&(n+="m"),e.eD&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var of=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):q}a.push(L(Ll,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):q}return n(L(Ll,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var cf=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/lf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function lf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var go=new Float64Array(3),Pi=new Float64Array(3),Li=new Float64Array(3),uf=y(function(e,r,n){return new Float64Array([e,r,n])}),vf=function(e){return e[0]},$f=function(e){return e[1]},ff=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var sf=function(e){return new Float64Array([e.fY,e.f0,e.da])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Ec(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Ec);function Rc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ya(Ec(e,r,n),n)}v(Rc);function jc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ya(e,r){r===void 0&&(r=new Float64Array(3));var n=1/jc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var df=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),gn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(gn);function At(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(At);v(function(e,r){var n,a=go,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=gn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(gn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(gn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(gn(r,a)+e[14])/n,t});var mf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var pf=function(e){return{fY:e[0],f0:e[1],da:e[2],et:e[3]}},bf=function(e){return new Float64Array([e.fY,e.f0,e.da,e.et])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/gf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function gf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var hf=new Float64Array(16),_f=new Float64Array(16),wf=function(e){var r=new Float64Array(16);return r[0]=e.dC,r[1]=e.dG,r[2]=e.dK,r[3]=e.dO,r[4]=e.dD,r[5]=e.dH,r[6]=e.dL,r[7]=e.dP,r[8]=e.dE,r[9]=e.dI,r[10]=e.dM,r[11]=e.dQ,r[12]=e.dF,r[13]=e.dJ,r[14]=e.dN,r[15]=e.dR,r},yf=function(e){return{dC:e[0],dG:e[1],dK:e[2],dO:e[3],dD:e[4],dH:e[5],dL:e[6],dP:e[7],dE:e[8],dI:e[9],dM:e[10],dQ:e[11],dF:e[12],dJ:e[13],dN:e[14],dR:e[15]}};function Nc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(Nc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Nc(c,l,i,t,n,a)});function Yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(Yc);E(function(e,r,n,a){return Yc(e,r,n,a,-1,1)});function Wc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],M=r[1],Y=r[2],j=r[3],R=r[4],N=r[5],W=r[6],V=r[7],J=r[8],Q=r[9],ce=r[10],$e=r[11],oe=r[12],de=r[13],Me=r[14],Pe=r[15];return n[0]=a*C+l*M+d*Y+b*j,n[1]=t*C+u*M+m*Y+w*j,n[2]=i*C+$*M+f*Y+x*j,n[3]=c*C+s*M+g*Y+_*j,n[4]=a*R+l*N+d*W+b*V,n[5]=t*R+u*N+m*W+w*V,n[6]=i*R+$*N+f*W+x*V,n[7]=c*R+s*N+g*W+_*V,n[8]=a*J+l*Q+d*ce+b*$e,n[9]=t*J+u*Q+m*ce+w*$e,n[10]=i*J+$*Q+f*ce+x*$e,n[11]=c*J+s*Q+g*ce+_*$e,n[12]=a*oe+l*de+d*Me+b*Pe,n[13]=t*oe+u*de+m*Me+w*Pe,n[14]=i*oe+$*de+f*Me+x*Pe,n[15]=c*oe+s*de+g*Me+_*Pe,n}v(Wc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],M=r[6],Y=r[8],j=r[9],R=r[10],N=r[12],W=r[13],V=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+$*M,n[5]=t*_+l*C+s*M,n[6]=i*_+u*C+d*M,n[7]=0,n[8]=a*Y+c*j+$*R,n[9]=t*Y+l*j+s*R,n[10]=i*Y+u*j+d*R,n[11]=0,n[12]=a*N+c*W+$*V+m,n[13]=t*N+l*W+s*V+f,n[14]=i*N+u*W+d*V+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ya(r,go);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/jc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,C=b-m,M=g-f,Y=c*c*$+u,j=w+d,R=b+m,N=w-d,W=l*l*$+u,V=n[0],J=n[1],Q=n[2],ce=n[3],$e=n[4],oe=n[5],de=n[6],Me=n[7],Pe=n[8],xr=n[9],Sr=n[10],nt=n[11],lv=n[12],uv=n[13],vv=n[14],$v=n[15];return a[0]=V*x+$e*_+Pe*C,a[1]=J*x+oe*_+xr*C,a[2]=Q*x+de*_+Sr*C,a[3]=ce*x+Me*_+nt*C,a[4]=V*M+$e*Y+Pe*j,a[5]=J*M+oe*Y+xr*j,a[6]=Q*M+de*Y+Sr*j,a[7]=ce*M+Me*Y+nt*j,a[8]=V*R+$e*N+Pe*W,a[9]=J*R+oe*N+xr*W,a[10]=Q*R+de*N+Sr*W,a[11]=ce*R+Me*N+nt*W,a[12]=lv,a[13]=uv,a[14]=vv,a[15]=$v,a});function xf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(xf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Sf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Sf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Rc(e,r,go),t=ya(At(n,a,Pi),Pi),i=ya(At(a,t,Li),Li),c=hf,l=_f;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Wc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var zi=0;function Tn(e,r){for(;r.b;r=r.b)e(r.a)}function ho(e){for(var r=0;e.b;e=e.b)r++;return r}var Cf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Pf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Lf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),zf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),kf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Tf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Mf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Df=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Af=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Ff=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Vf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ef=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Rf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Hc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Gc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},jf=function(e){e.gl.disable(e.gl.CULL_FACE)},Nf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Yf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ki=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Hf=[Bf,Ef,Rf,Hc,Gc,jf,Nf,Yf,Wf];function Ti(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Gf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Ic(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function If(e,r,n,a){for(var t=n.a.dj,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Ic(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(ho(n.b)*s);Tn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Of(e,r){if(r.a.ds>0){var n=e.createBuffer(),a=Uf(r.c,r.a.ds);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dj*ho(r.b),indexBuffer:null,buffers:{}}}function Uf(e,r){var n=new Uint32Array(ho(e)*r),a=0,t;return Tn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Mi(e,r){return e+"#"+r}var Oc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Hc(n),Gc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Mi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=zi++,$||($=Ti(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=zi++,s||(s=Ti(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Gf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=qf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=Mi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Jf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Of(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=If(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Ic(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Tn(eb(n),i.a),u=0;u<ki.length;u++){var M=n[ki[u]];M.toggle!==n.toggle&&M.enabled&&(Hf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.d_,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d_,0,b.numIndices)}}return Tn(t,e.g),r});function qf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eJ(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Jf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Xf=y(function(e,r,n){return D$(r,{g:n,f:{},h:e},as,ts)}),Zf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Qf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Kf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),es=v(function(e,r){e.contextAttributes.antialias=!0}),rs=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),ns=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function as(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Tn(function(t){return o(Kp,r,t)},e.h);var n=hr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Cf(function(){return o(Oc,e,n)})):(n=hr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ts(e,r){return r.f=e.f,Oc(r)}var T=yv,Qn=hv,Uc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Qn,e,l,$)}else{var u=c.a;return p(Qn,i,l,u)}});return p(Qn,i,p(Qn,e,r,t),a)}),_o=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(_o,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),Di=function(e){return p(_o,y(function(r,n,a){return o(T,P(r,n),a)}),z,e)},qc=1,os=2,Jc=0,ye=function(e){return{$:1,a:e}},wo=v(function(e,r){return{$:3,a:e,b:r}}),Ai=v(function(e,r){return{$:0,a:e,b:r}}),Xc=v(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},is=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},cs=Uv,ls=f$,Ve=yc,Vr=v(function(e,r){return o(Gv,e,Wa(r))}),yo=v(function(e,r){return h(o(Hv,e,r))}),Zc=function(e){return o(Vr,`
    `,o(yo,`
`,e))},jn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Rr=function(e){return p(jn,v(function(r,n){return n+1}),0,e)},us=xv,vs=y(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(T,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=v(function(e,r){return p(vs,e,r,z)}),Qc=v(function(e,r){return p(us,e,o(Kr,0,Rr(r)-1),r)}),ir=e$,Kc=function(e){var r=ir(e);return 97<=r&&r<=122},el=function(e){var r=ir(e);return r<=90&&65<=r},$s=function(e){return Kc(e)||el(e)},fs=function(e){var r=ir(e);return r<=57&&48<=r},ss=function(e){return Kc(e)||el(e)||fs(e)},Be=function(e){return p(jn,T,z,e)},on=jv,ds=v(function(e,r){return`

(`+(Ve(e+1)+(") "+Zc(ms(r))))}),ms=function(e){return o(ps,e,z)},ps=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=on(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return $s(x)&&o(cs,ss,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(T,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,$=o(T,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Vr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ve(Rr(s))+" ways:"));return o(Vr,`

`,o(T,g,o(Qc,ds,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Vr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Vr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(Zc(o(ls,4,f))+(`

`+m))}}),Ee=32,Ft=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Vt=dv,xo=Dv,So=v(function(e,r){return gi(r)/gi(e)}),bs=Tv,Mn=xo(o(So,2,Ee)),rl=L(Ft,0,Mn,Vt,Vt),nl=pv,al=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var gs=Av,Bt=mv,He=v(function(e,r){return U(e,r)>0?e:r}),hs=function(e){return{$:0,a:e}},Co=bv,_s=v(function(e,r){e:for(;;){var n=o(Co,Ee,e),a=n.a,t=n.b,i=o(T,hs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),ws=function(e){var r=e.a;return r},ys=v(function(e,r){e:for(;;){var n=xo(r/Ee);if(n===1)return o(Co,Ee,e).a;var a=o(_s,e,z),t=n;e=a,r=t;continue e}}),tl=v(function(e,r){if(r.l){var n=r.l*Ee,a=gs(o(So,Ee,n-1)),t=e?Be(r.y):r.y,i=o(ys,t,r.l);return L(Ft,Bt(r.o)+n,o(He,5,a*Mn),i,r.o)}else return L(Ft,Bt(r.o),Mn,Vt,r.o)}),xs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(tl,!1,{y:a,l:n/Ee|0,o:t});var i=al(p(nl,Ee,r,e)),c=e,l=r-Ee,u=n,$=o(T,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),Ss=v(function(e,r){if(e<=0)return rl;var n=e%Ee,a=p(nl,n,e-n,r),t=e-n-Ee;return S(xs,r,t,e,z,a)}),Xe=function(e){return!e.$},A=l$,Z=a$,D=c$,fe=t$,xa=u$,Cs=v$,Ae=n$,Po=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=sr("div"),Ps=function(e){return{$:2,a:e}},ol=v(function(e,r){return e}),il=v(function(e,r){return{bB:r.bB,eH:e,cd:r.cd,eQ:r.eQ,fd:r.fd,cO:r.cO,b_:r.b_,fV:r.fV}}),cr=function(e){return e},Ls=cr,Fi=qe(function(e,r,n,a,t,i){return{$7:i,dq:r,d2:a,d5:n,d8:e,d9:t}}),zs=qv,Br=Nv,qr=Iv,Nn=v(function(e,r){return e<1?r:p(qr,e,Br(r),r)}),Ha=Xv,Ga=function(e){return e===""},Ia=v(function(e,r){return e<1?"":p(qr,0,e,r)}),cl=Zv,Vi=he(function(e,r,n,a,t){if(Ga(t)||o(zs,"@",t))return q;var i=o(Ha,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=cl(o(Nn,c+1,t));if(l.$===1)return q;var u=l;return re(we(Fi,e,o(Ia,c,t),u,r,n,a))}else return re(we(Fi,e,t,q,r,n,a))}),Bi=E(function(e,r,n,a){if(Ga(a))return q;var t=o(Ha,"/",a);if(t.b){var i=t.a;return S(Vi,e,o(Nn,i,a),r,n,o(Ia,i,a))}else return S(Vi,e,"/",r,n,a)}),Ei=y(function(e,r,n){if(Ga(n))return q;var a=o(Ha,"?",n);if(a.b){var t=a.a;return L(Bi,e,re(o(Nn,t+1,n)),r,o(Ia,t,n))}else return L(Bi,e,q,r,n)});v(function(e,r){if(Ga(r))return q;var n=o(Ha,"#",r);if(n.b){var a=n.a;return p(Ei,e,re(o(Nn,a+1,r)),o(Ia,a,r))}else return p(Ei,e,q,r)});var ks=Jv,Lo=function(e){},Yn=jr,Ts=Yn(0),ll=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(jn,e,r,Be(d)):L(ll,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=y(function(e,r,n){return L(ll,e,r,0,n)}),ne=v(function(e,r){return p(dr,v(function(n,a){return o(T,e(n),a)}),z,r)}),Sa=Tt,zo=v(function(e,r){return o(Sa,function(n){return Yn(e(n))},r)}),Ms=y(function(e,r,n){return o(Sa,function(a){return o(Sa,function(t){return Yn(o(e,a,t))},n)},r)}),Ds=function(e){return p(dr,Ms(T),Yn(z),e)},As=w$,Fs=v(function(e,r){var n=r;return Cc(o(Sa,As(e),n))}),Vs=y(function(e,r,n){return o(zo,function(a){return 0},Ds(o(ne,Fs(e),r)))}),Bs=y(function(e,r,n){return Yn(0)}),Es=v(function(e,r){var n=r;return o(zo,e,n)});or.Task=h$(Ts,Vs,Bs,Es);var Rs=Lc("Task"),ko=v(function(e,r){return Rs(o(zo,e,r))}),js=ef,Ns=Ev,Ca={$:1},ul=function(e){return{$:2,a:e}},Oa={$:0},Ge=v(function(e,r){return{$:0,a:e,b:r}}),K=y(function(e,r,n){return r(e(n))}),cn=function(e){var r=e.b.A;return r.a},Ys=function(e){var r=e.a,n=e.b.S,a=e.b.A,t=e.b.aa;if(t.b){var i=t.a,c=t.b;return re(o(Ge,r,{A:i,aa:c,S:o(T,a,n)}))}else return q},vl=function(e){var r=e.b;return o(Ge,Oa,r)},vr=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ws=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cO.di?vl(n):n;case 2:var i=a.a.c0;return(U(i+r.eQ,cn(n).bB)>0?o(K,Ys,vr(o(Ge,Ca,t))):cr)(o(Ge,ul({c0:i+r.eQ}),t));default:var c=t.A,l=c.a,u=c.b,$=o(il,l.eH,We(r,{bB:l.bB+r.eQ})),s=o(e,$,u);return o(Ge,Oa,{A:P($,s),aa:z,S:o(T,t.A,t.S)})}}),$l=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(T,a,n);e=i,r=c,n=l;continue e}else return n}}),Gs=v(function(e,r){return Be(p(Hs,e,r,z))}),fl=y(function(e,r,n){if(r<=0)return z;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(T,_,o(T,c,o(T,s,o(T,b,o(Gs,r-4,w))))):o(T,_,o(T,c,o(T,s,o(T,b,p(fl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Is=v(function(e,r){return p(fl,0,e,r)}),Os=v(function(e,r){var n=r.b.S,a=r.b.A,t=r.b.aa,i=ue(Be(n),ue(h([a]),t)),c=o(Is,e,i),l=o($l,e,i);if(l.b){var u=l.a,$=l.b;return o(Ge,Ca,{A:u,aa:$,S:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(Ge,Ca,{A:d,aa:z,S:m})}else return r}}),Us=function(e){var r=e.b;return o(Ge,Ca,r)},qs=function(e){var r=e.b;return o(Ge,ul({c0:cn(e).bB}),r)},Js=v(function(e,r){switch(e.$){case 1:return Us(r);case 2:return vl(r);case 3:return qs(r);default:var n=e.a;return o(Os,n,r)}}),sl=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Xs=v(function(e,r){return We(r,{au:e(r.au)})}),Zs=function(e){return{$:3,a:e}},dl=function(e){return{$:2,a:e}},ml=v(function(e,r){return{$:0,a:e,b:r}}),Qs=v(function(e,r){return{$:1,a:e,b:r}}),xe=v(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),X=function(e){return e<0?-e:e},To=Qv,Ks=y(function(e,r,n){return o(vr,0/0,To(o(e,r,n)))}),Mo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ed=Wv,pl=function(e){return p(ed,T,z,e)},rd=v(function(e,r){var n=o(Mo,function(a){return a!=="0"&&a!=="."},pl(r));return ue(e&&n?"-":"",r)}),pe=yc,Et=Rv,bl=r$,gl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=on(n);if(a.$===1)return"01";var t=a.a;return o(Et,"0",gl(t))}else{var i=ir(r);return i>=48&&i<57?o(Et,bl(i+1),n):"0"}},Rt=Mv,nd=Bv,Ua=function(e){return o(Et,e,"")},hl=y(function(e,r,n){return e<=0?n:p(hl,e>>1,ue(r,r),e&1?ue(n,r):n)}),Dn=v(function(e,r){return p(hl,e,r,"")}),jt=y(function(e,r,n){return ue(n,o(Dn,e-Br(n),Ua(r)))}),Nt=Yv,_l=function(e){var r=o(yo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},ad=function(e){var r=o(yo,"e",pe(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(vr,0,cl(o(ks,"+",t)?o(Nn,1,t):t)),c=_l(n),l=c.a,u=c.b,$=ue(l,u),s=i<0?o(vr,"0",o(xe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(xe,sl(Ua),on(ue(o(Dn,X(i),"0"),$))))):p(jt,i+1,"0",$);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},td=y(function(e,r,n){if(Rt(n)||nd(n))return pe(n);var a=n<0,t=_l(ad(X(n))),i=t.a,c=t.b,l=Br(i)+r,u=ue(o(Dn,-l+1,"0"),p(jt,l,"0",ue(i,c))),$=Br(u),s=o(He,1,l),d=o(e,a,p(qr,s,$,u)),m=p(qr,0,s,u),f=d?Nt(o(vr,"1",o(xe,gl,on(Nt(m))))):m,g=Br(f),b=f==="0"?f:r<=0?ue(f,o(Dn,X(r),"0")):U(r,Br(c))<0?p(qr,0,g-r,f)+("."+p(qr,g-r,g,f)):ue(i+".",p(jt,r,"0",c));return o(rd,a,b)}),yn=td(v(function(e,r){var n=on(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ir(t))})),od=Ks(yn),id=y(function(e,r,n){var a=o(So,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(od,t,n)}),wl=wv,qa=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(wl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),$r={$:-2},en=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,$,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,$,s,S(G,1,g,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),Yt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,$r,$r);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(wl,e,t);switch(u){case 0:return S(en,a,t,i,p(Yt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(en,a,t,i,c,p(Yt,e,r,l))}}),xn=y(function(e,r,n){var a=p(Yt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),cd=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},yl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},Ri=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,$,s,d),S(G,1,n,a,m,S(G,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,x))}else return e},ld=Na(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(G,n,l,u,$,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ri(r)}else break e;else return c.a,c.d,Ri(r);else break e;return r}}),$a=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,$a(t),l);var u=yl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,$,s,d,$a(m),f)}else return $r}else return S(G,r,n,a,$a(t),l)}else return $r},Sn=v(function(e,r){if(r.$===-2)return $r;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(Sn,e,i),c);var u=yl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,$,s,d,o(Sn,e,m),f)}else return $r}else return S(G,n,a,t,o(Sn,e,i),c);else return o(ud,e,co(ld,e,r,n,a,t,i,c))}),ud=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Ue(e,a)){var l=cd(c);if(l.$===-1){var u=l.b,$=l.c;return S(en,n,u,$,i,$a(c))}else return $r}else return S(en,n,a,t,i,o(Sn,e,c))}else return $r}),vd=v(function(e,r){var n=o(Sn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),Kn=y(function(e,r,n){var a=r(o(qa,e,n));if(a.$)return o(vd,e,n);var t=a.a;return p(xn,e,t,n)}),$d=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Kn,r,xe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Qs,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Kn,r,xe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(ml,P(i,c),p(id,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Kn,r,xe(function(a){return a.$===3?Zs(n):a}));default:var r=e.a,n=e.b;return o(Kn,r,xe(function(a){return a.$===2?dl(n):a}))}},fd=function(e){return Xs($d(e))},sd=v(function(e,r){return o(ne,fd(e),r)}),dd=v(function(e,r){return We(r,{eH:o(sd,e,r.eH)})}),md=v(function(e,r){var n=r.a,a=r.b;return o(Ge,n,We(a,{A:o(sl,dd(e),a.A)}))}),pd=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),bd=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ge,a,We(t,{A:o(pd,o(e,i.a,r),i)}))}),gd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return We(a,{aL:!a.aL});case 2:var t=n.a;return We(a,{F:p(Ws,e,t,a.F)});case 3:var i=n.a;return We(a,{F:o(md,i,a.F)});case 4:var c=n.a;return We(a,{F:p(bd,r,c,a.F)});default:var l=n.a;return We(a,{F:o(Js,l,a.F)})}}),hd=v(function(e,r){return o(Ge,Oa,{A:P(e,r(e)),aa:z,S:z})}),_d=y$,ji=_d(z),Pa=i$,An=o$,wd=L$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ae({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fV:e})},o(D,"clock",fe))},o(D,"devicePixelRatio",fe))},o(D,"dt",fe))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Ae({ev:d,eI:s,di:$,eP:u,fe:l,fv:c,fA:i,fF:t,eo:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",Pa(An)))},o(D,"left",Z))},o(D,"pressedKeys",Pa(An)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Ae({di:$,dt:u,fj:l,fB:c,fC:i,eo:t,fY:a,f0:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",fe))},o(D,"y",fe))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Ae({e1:n,fW:r})},o(D,"height",fe))},o(D,"width",fe))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Ae({eK:r,eL:e})},o(D,"deltaX",fe))},o(D,"deltaY",fe))))),yd=function(e){return{$:4,a:e}},xd={$:0},Sd=Sc,Je=v(function(e,r){return o(Tc,e,Sd(r))}),O=Je("className"),Cd=function(e){var r=e.b.A;return r.b},La=Je("id"),Pd=A$,za=Pd,Ld=F$,be=Ld,zd={$:1},kd=function(e){return{$:3,a:e}},Td=function(e){return{$:5,a:e}},Ni=sr("a"),Do=sr("button"),Md=Rn("d"),xl=zc("http://www.w3.org/2000/svg"),Dd=xl("path"),Ad=xl("svg"),Fd=Rn("viewBox"),Cn=function(e){return o(Ad,h([Fd("0 0 100 100"),o(be,"width","100%"),o(be,"height","100%")]),h([o(Dd,h([Md(e)]),z)]))},Yi=function(e){return o(Je,"href",B$(e))},Xr={eO:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eX:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",e0:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ft:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fu:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",cO:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fx:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fH:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fQ:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fS:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f4:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Vd=function(e){return{$:0,a:e}},Sl=kc,Cl=v(function(e,r){return o(Sl,e,Vd(r))}),Ao=function(e){return o(Cl,"click",Ae(e))},Wi=Je("target"),Bd=Je("title"),Wt=v(function(e,r){if(r.$===-2)return $r;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Wt,e,i),o(Wt,e,c))}),Ed=Mt,ie=Ed,Rd=function(e){return p(_o,y(function(r,n,a){return o(T,n,a)}),z,e)},jd=v(function(e,r){return{$:3,a:e,b:r}}),Nd=v(function(e,r){return{$:2,a:e,b:r}}),Yd=v(function(e,r){return{$:0,a:e,b:r}}),Wd=v(function(e,r){return{$:1,a:e,b:r}}),Ja=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Fo=L(Ja,0/255,0/255,0/255,1),Hd=Sc,Gd=v(function(e,r){return o(Tc,e,Hd(r))}),Id=Gd("checked"),Re=Fv,Od=y(function(e,r,n){return ue(o(Dn,e-Br(n),Ua(r)),n)}),ka=Cv,Pl=function(e){var r=function(n){return n<10?Ve(n):Ua(bl(87+n))};return e<16?r(e):ue(Pl(e/16|0),r(o(ka,16,e)))},Ud=o(K,Pl,o(Od,2,"0")),Vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b8:a,cf:n,cR:r}},qd=function(e){var r=Vo(e),n=r.cR,a=r.cf,t=r.b8;return o(Vr,"",o(T,"#",o(ne,o(K,Re,Ud),h([n*255,a*255,t*255]))))},Ht=Je("htmlFor"),Jd=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Ta=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Xd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(T,t,n)}),Wn=v(function(e,r){return p(dr,Xd(e),z,r)}),Ll=E(function(e,r,n,a){return{e6:r,fh:e,fo:n,fK:a}}),Zd=of,Qd=Kv,Kd=v(function(e,r){if(r.$)return ye(e);var n=r.a;return ve(n)}),em=tf,rm=function(e){return o(em,{eD:!1,fk:!1},e)},ln=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},nm=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ve(e(n))}}),am=function(e){return{$:2,a:e}},tm=function(e){return{$:0,a:e}},om=function(e){return{$:1,a:e}},ot=v(function(e,r){return ir(r)-ir(e)}),it=y(function(e,r,n){var a=ir(n);return U(ir(e),a)<1&&U(a,ir(r))<1}),im=v(function(e,r){var n=function(t){return U(t,e)<0?ve(t):ye(om(r))},a=p(it,"0","9",r)?ve(o(ot,"0",r)):p(it,"a","z",r)?ve(10+o(ot,"a",r)):p(it,"A","Z",r)?ve(10+o(ot,"A",r)):ye(tm(r));return o(Ta,n,a)}),zl=v(function(e,r){var n=on(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Ta,function(c){return o(Ta,function(l){return ve(c+l*e)},o(zl,e,i))},o(im,e,t))}),cm=v(function(e,r){return 2<=e&&e<=36?o(zl,e,Nt(r)):ye(am(e))}),lm=cm(16),um=y(function(e,r,n){return L(Ja,e,r,n,1)}),kl=E(function(e,r,n,a){return L(Ja,e,r,n,a)}),Hn=Sv,vm=v(function(e,r){var n=o(Hn,10,e);return Re(r*n)/n}),$m=Ov,fm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=pl(n);if(a.b&&!a.b.b){var t=a.a;return Qd(h([t,t]))}else return n};return o(K,$m,o(K,function(n){return o(xe,function(a){return p(Zd,1,a,n)},rm(e))},o(K,Jd(ln),o(K,xe(function(n){return n.fK}),o(K,xe(Wn(cr)),o(K,Kd("Parsing hex regex failed"),Ta(function(n){var a=o(ne,o(K,r,o(K,lm,nm(bs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ve(L(kl,t/255,c/255,u/255,o(vm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(um,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),Ma=sr("input"),Gt=sr("label"),It=Je("name"),Tl=v(function(e,r){return p(dr,D,r,e)}),sm=o(Tl,h(["target","checked"]),Z),dm=function(e){return o(Cl,"change",o(xa,e,sm))},mm=function(e){return P(e,!0)},pm=function(e){return{$:1,a:e}},bm=v(function(e,r){return o(Sl,e,pm(r))}),gm=o(Tl,h(["target","value"]),An),Bo=function(e){return o(bm,"input",o(xa,mm,o(xa,e,gm)))},Ml=Je("max"),Dl=Je("min"),Al=function(e){return o(Je,"step",e)},Da=Je("type"),Eo=Je("value"),Hi=function(e){var r=e.ci,n=e.c5,a=e.cy,t=e.cu,i=e.c_,c=e.cD;return o(I,z,h([o(Gt,h([Ht(r)]),h([o(I,h([O("relative w-full")]),h([o(I,h([O("inline-block")]),h([ie(r)])),o(I,h([O("inline-block float-right")]),h([ie(pe(n))]))]))])),o(Ma,h([Da("range"),o(be,"width","100%"),La(r),It(r),Dl(pe(a)),Ml(pe(t)),Eo(pe(n)),Al(pe(i)),Bo(o(K,To,o(K,vr(42),c)))]),z)]))},hm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),_m=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,z,h([o(I,h([O("mb-2")]),h([o(Gt,h([Ht(e)]),h([ie(e)]))])),o(Ma,h([Da("checkbox"),La(e),It(e),dm(jd(e)),Id(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Hi({ci:e,cu:i,cy:t,cD:Yd(e),c_:.01*(i-t),c5:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Hi({ci:e,cu:i,cy:t,cD:o(K,Re,Wd(e)),c_:1,c5:c});default:var c=r.a;return o(I,z,h([o(I,h([o(be,"margin-bottom","6px")]),h([o(Gt,h([Ht(e)]),h([ie(e)]))])),o(Ma,h([Da("color"),o(be,"width","100%"),o(be,"height","26px"),o(be,"padding","0px"),La(e),It(e),Bo(function(l){return o(Nd,e,o(hm,Fo,fm(l)))}),Eo(qd(c))]),z)]))}}),wm=function(e){return o(I,h([O("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([O("text-lg pb-2")]),h([ie(e.fl)])),o(I,h([O("pl-2 pr-2")]),Rd(o(Wt,_m,e.au)))]))},ym=function(e){return o(I,h([O("text-xs text-white60")]),o(ne,wm,e))},xm=function(e){return o(I,h([O("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ie("clock: "+o(yn,3,cn(e).bB))]))},Sm=function(e){e.a;var r=e.b.S;return o(xe,function(n){return Re(60/(cn(e).bB-n))},o(xe,o(K,ws,function(n){return n.bB}),ln(o($l,59,r))))},Cm=function(e){return o(I,h([O("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Sm(e);if(r.$===1)return h([ie("... Fps")]);var n=r.a;return h([ie(Ve(n)+" Fps")])}())},Pm=function(e){return{$:0,a:e}},Lm=function(e){var r=e.b.S;return Rr(r)},zm=function(e){var r=e.b.S;e.b.A;var n=e.b.aa;return Rr(r)+1+Rr(n)},km=function(e){return o(Ma,h([O("absolute left-[100px] w-[490px]"),Da("range"),Dl(Ve(0)),Ml(Ve(zm(e)-1)),Eo(Ve(Lm(e))),Al(Ve(1)),Bo(o(K,To,o(K,vr(42),o(K,Re,Pm))))]),z)},Gi={$:1},Tm={$:3},Mm={$:2},Fl=function(e){return!e.b},Ii=v(function(e,r){return o(Do,h([O("px-2 bg-black40"),O(r),Ao(e)]),h([ie("REC")]))}),Oi=v(function(e,r){return o(Do,h([O("absolute left-[60px] mx-1 px-1 bg-black40"),Ao(r)]),h([o(I,h([O("w-4 h-6 fill-white80")]),h([Cn(e)]))]))}),Dm=function(e){var r=e.a,n=e.b.aa;return o(I,h([O("py-1")]),h([function(){switch(r.$){case 0:return o(Ii,Gi,"text-red-500 font-bold");case 1:return o(Ii,Mm,"text-white80 font-bold");default:return o(I,z,z)}}(),function(){switch(r.$){case 0:return o(I,z,z);case 1:return Fl(n)?o(I,z,z):o(Oi,Xr.fu,Tm);default:return o(Oi,Xr.ft,Gi)}}()]))},Am=function(e){return o(I,h([O("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([km(e),Dm(e),Cm(e),xm(e)]))},Vl=function(e){return o(Vr,"",e)},Fm=v(function(e,r){if(r.b){var n=r.a,a=r.b,t=v(function(c,l){return o(T,e,o(T,c,l))}),i=p(dr,t,z,a);return o(T,n,i)}else return z}),Vm=function(e){var r=e.a;return Ue(r,Oa)},gr=sr("p"),Bm=sr("pre"),Em=v(function(e,r){var n=Vm(r.F)?o(I,z,z):o(I,h([O("absolute pointer-events-none w-8 h-8"),o(be,"left",pe(e.cO.fY+.5*e.b_.fW)+"px"),o(be,"top",pe(-e.cO.f0+.5*e.b_.e1)+"px")]),h([o(I,h([O(e.cO.dt?"fill-black80":"fill-white40")]),h([Cn(Xr.cO)]))]));return o(I,z,h([n,o(Bm,h([O("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(gr,z,h([ie("pressedKeys: "+Vl(o(Fm," ",e.fd.fv)))])),o(gr,z,h([ie("delta time: "+o(yn,4,e.eQ))])),o(gr,z,h([ie("pointer is down: "+(e.cO.dt?"yes":"no"))])),o(gr,z,h([ie("pointer.x: "+o(yn,2,e.cO.fY))])),o(gr,z,h([ie("pointer.y: "+o(yn,2,e.cO.f0))])),o(gr,z,h([ie("wheel deltaX: "+pe(e.fV.eK))])),o(gr,z,h([ie("wheel deltaY: "+pe(e.fV.eL))]))]))]))}),Rm=v(function(e,r){var n=o(Do,h([O(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Ao(zd),Bd("Distraction Free Mode")]),h([Cn(Xr.f4)])),a=o(I,h([O("absolute w-8 bottom-12")]),h([o(Ni,h([O("fill-twitterBlue40 hover:fill-twitterBlue"),Yi("https://twitter.com/AzizErkalSelman"),Wi("_blank")]),h([Cn(Xr.fQ)]))])),t=o(I,h([O("absolute w-8 bottom-2")]),h([o(Ni,h([O("fill-githubCat40 hover:fill-githubCat"),Yi("https://github.com/erkal/elm-3d-playground-exploration"),Wi("_blank")]),h([Cn(Xr.eX)]))]));return r.aL?o(I,h([O("fixed w-10 h-10 p-1")]),h([n])):o(I,z,h([o(I,h([O("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([O("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(za,kd,ym(cn(r.F).eH))])),o(za,Td,Am(r.F)),o(Em,e,r)]))}),jm=y(function(e,r,n){var a=Cd(n.F),t=cn(n.F);return o(I,h([O("bg-black40"),O("select-none"),O("antialiased"),O("font-mono"),o(be,"width",pe(t.b_.fW)+"px"),o(be,"height",pe(t.b_.e1)+"px")]),h([o(I,h([O("fixed")]),h([o(za,ol(xd),o(e,t,a))])),o(I,h([La("gui")]),h([o(Rm,t,n),o(I,h([O("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(za,yd,o(r,t,a))]))]))]))}),Nm=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return P(L(gd,r,i,u,$),ji)}),l=function(u){var $=o(il,n,u.e8);return P({aL:u.e8.b_.fW<500,F:o(hd,$,a)},ji)};return js({e7:l,fL:ol(wd(Ps)),fR:c,fU:o(jm,e,t)})}),Ym=E(function(e,r,n,a){return we(Nm,e,r,n,a,v(function(t,i){return o(I,z,z)}),y(function(t,i,c){return c}))}),Bl={$:0},br=v(function(e,r){return{$:0,a:e,b:r}}),Le=v(function(e,r){return{$:0,a:e,b:r}}),Wm=h([o(br,P(-1,1),o(Le,2,0)),o(br,P(-1,0),o(Le,2,0)),o(br,P(-1,-1),o(Le,2,0)),o(br,P(0,-1),o(Le,2,0)),o(br,P(0,1),o(Le,2,0)),o(br,P(1,1),o(Le,2,0)),o(br,P(1,0),o(Le,2,0)),o(br,P(1,-1),o(Le,2,0))]),Hm=function(e){return{aB:Bl,bt:Wm}},ct=v(function(e,r){return P(e,dl(r))}),Gm=y(function(e,r,n){return{au:n,fb:r,fl:e}}),El=$r,Im=function(e){return p(jn,v(function(r,n){var a=r.a,t=r.b;return p(xn,a,t,n)}),El,e)},Om=y(function(e,r,n){return p(Gm,e,r,Im(n))}),lt=Om,Ar=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(ml,P(a,t),n))}),De=Pv,ut=function(e){return e/255},vt=y(function(e,r,n){return L(Ja,ut(e),ut(r),ut(n),1)}),Um=h([p(lt,"Camera",!0,h([p(Ar,"camera distance",P(3,20),10),p(Ar,"camera azimuth",P(-De,De),0),p(Ar,"camera elevation",P(-De/2,De/2),0)])),p(lt,"Parameters",!0,h([p(Ar,"cubes side length",P(.5,1),.9),p(Ar,"duration of rolling animation",P(.1,1),.25)])),p(lt,"Colors and light",!0,h([o(ct,"color 1",p(vt,244,88,67)),o(ct,"color 2",p(vt,47,41,43)),o(ct,"board color",p(vt,223,224,226)),p(Ar,"sunlight azimuth",P(-De,De),2),p(Ar,"sunlight elevation",P(-De,0),-2)]))]),qm=v(function(e,r){return o(xe,function(n){if(n.$)return 0;var a=n.b;return a},o(qa,e,r.au))}),Jm=v(function(e,r){return o(vr,0,ln(o(Wn,qm(e),r)))}),Xm=v(function(e,r){return o(Jm,e,r.eH)}),_r=Xm,fr=function(e){return e},Jr=function(e){return fr(De*(e/180))},Rl=function(e){return e},Qe=function(e){return e},Aa=function(e){var r=e;return-r},Zm=v(function(e,r){var n=e,a=r;return{fY:n.f0*a.da-n.da*a.f0,f0:n.da*a.fY-n.fY*a.da,da:n.fY*a.f0-n.f0*a.fY}}),jl=function(e){var r=e;return r.c8},Nl=function(e){var r=e;return r.c9},Qm=function(e){return o(Zm,jl(e),Nl(e))},un=function(e){var r=e;return r.cE},rn=Lv,nn=zv,fa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=rn(c),u=nn(c),$=a.eN,s=$,d=s.fY*u,m=l*d,f=d*d,g=s.f0*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.da*u,M=l*C,Y=2*(w-M),j=2*(w+M),R=d*C,N=2*(R+b),W=2*(R-b),V=g*C,J=2*(V-m),Q=2*(V+m),ce=C*C,$e=1-2*(x+ce),oe=1-2*(f+ce);return{fY:$e*i.fY+Y*i.f0+N*i.da,f0:j*i.fY+oe*i.f0+J*i.da,da:W*i.fY+Q*i.f0+_*i.da}}),Gn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=rn(c),u=nn(c),$=a.cE,s=$,d=i.fY-s.fY,m=i.f0-s.f0,f=i.da-s.da,g=a.eN,b=g,w=b.fY*u,x=l*w,_=w*w,C=b.f0*u,M=l*C,Y=w*C,j=C*C,R=1-2*(_+j),N=b.da*u,W=l*N,V=2*(Y-W),J=2*(Y+W),Q=w*N,ce=2*(Q+M),$e=2*(Q-M),oe=C*N,de=2*(oe-x),Me=2*(oe+x),Pe=N*N,xr=1-2*(j+Pe),Sr=1-2*(_+Pe);return{fY:s.fY+xr*d+V*m+ce*f,f0:s.f0+J*d+Sr*m+de*f,da:s.da+$e*d+Me*m+R*f}}),Nr=function(e){return e},Yr=function(e){var r=e;return r.c8},Wr=function(e){var r=e;return r.c9},Hr=function(e){var r=e;return r.db},Yl=y(function(e,r,n){return Nr({cE:p(Gn,e,r,un(n)),c8:p(fa,e,r,Yr(n)),c9:p(fa,e,r,Wr(n)),db:p(fa,e,r,Hr(n))})}),Ui=y(function(e,r,n){return p(Yl,e(n),r,n)}),Ro=function(e){var r=e;return r.eN},vn=v(function(e,r){var n=e,a=r;return{fY:a.fY+n.fY,f0:a.f0+n.f0,da:a.da+n.da}}),Wl=v(function(e,r){return Nr({cE:o(vn,e,un(r)),c8:Yr(r),c9:Wr(r),db:Hr(r)})}),Km=v(function(e,r){var n=e,a=r;return{fY:n*a.fY,f0:n*a.f0,da:n*a.da}}),e0=y(function(e,r,n){return o(Wl,o(Km,r,e),n)}),r0=y(function(e,r,n){return p(e0,Ro(e(n)),r,n)}),Ke=v(function(e,r){return{eN:r,cE:e}}),n0=function(e){var r=e;return o(Ke,r.cE,r.c8)},a0=function(e){var r=e;return o(Ke,r.cE,r.c9)},t0=function(e){var r=e;return o(Ke,r.cE,r.db)},o0=function(e){var r=Nr({cE:e.aR,c8:Nl(e.dp),c9:Qm(e.dp),db:jl(e.dp)}),n=p(r0,t0,e.ce,p(Ui,n0,Aa(e.bE),p(Ui,a0,e.by,r)));return n},i0=function(e){return{$:0,a:e}},Ce=function(e){var r=e;return X(r)},sa=function(e){var r=e;return .5*r},c0=kv,l0=function(e){var r=e;return c0(r)},u0=function(e){var r=sa(Ce(e.eq)),n=l0(r);return{cQ:i0(n),c6:e.c6}},Dr={fY:0,f0:0,da:0},Hl=cr,lr=function(e){return e},Gl=lr({fY:1,f0:0,da:0}),Xa=Gl,jo=lr({fY:0,f0:0,da:1}),In=jo,v0=Hl({cE:Dr,c8:In,c9:Xa}),$0=function(e){var r=e.aR,n=e.by,a=e.bE,t=e.ce;return u0({eq:Jr(40),c6:o0({by:fr(n),ce:Qe(t),bE:fr(a),aR:Rl(r),dp:v0})})},Il=function(e){return $0({by:o(_r,"camera azimuth",e),ce:o(_r,"camera distance",e),bE:o(_r,"camera elevation",e),aR:{fY:0,f0:0,da:0}})},f0={$:0},No=v(function(e,r){return p(dr,v(function(n,a){return e(n)?o(T,n,a):a}),z,r)}),s0={$:1},d0=v(function(e,r){return{$:2,a:e,b:r}}),m0=function(e){return Mo(function(r){var n=r.a;return Ue(e,n)})},p0=function(e){var r=e.a,n=e.b;return U(r,-1)>-1&&r<=1&&U(n,-1)>-1&&n<=1},b0=v(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return P(n,a+1);case 1:return P(n,a-1);case 2:return P(n-1,a);default:return P(n+1,a)}}),Ol=function(e){return e?0:1},ea=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(Le,r,n);case 1:return o(Le,2,n);default:return o(Le,1,Ol(n))}},ra=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(Le,2,Ol(n));case 1:return o(Le,r,n);default:return o(Le,0,n)}},g0=function(e){switch(e){case 0:return o(K,ea,o(K,ea,ea));case 1:return ea;case 2:return o(K,ra,o(K,ra,ra));default:return ra}},h0=v(function(e,r){var n=r.a,a=r.b;return o(br,o(b0,e,n),o(g0,e,a))}),_0=v(function(e,r){var n=e.a,a=ln(o(Wn,function(l){var u=o(h0,l,e),$=u.a;return o(m0,$,r)||!p0($)?q:re(P(u,l))},h([0,1,2,3])));if(a.$===1)return s0;var t=a.a,i=t.a,c=t.b;return o(d0,c,o(T,i,o(No,function(l){var u=l.a;return!Ue(u,n)},r)))}),w0=v(function(e,r){var n=function(i){var c=i.a;return Ue(c,e)},a=ln(o(No,n,r));if(a.$===1)return f0;var t=a.a;return o(_0,t,r)}),y0=function(e){return{$:1,a:e}},x0=he(function(e,r,n,a,t){var i=t.aB;return i.$?t:We(t,{aB:y0({cz:a,ec:n,eh:r,cZ:e.bB})})}),S0=y(function(e,r,n){var a=e.fY,t=e.f0,i=P(Re(a),Re(t)),c=o(w0,i,n.bt);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return S(x0,r,i,l,u,n)}}),C0=y(function(e,r,n){return{fY:e,f0:r,da:n}}),na=function(e){return e},da=function(e){var r=e;return r},P0=v(function(e,r){var n=e,a=r;return a.fY*n.fY+a.f0*n.f0+a.da*n.da}),te=v(function(e,r){var n=r;return e*n}),Ul=function(e){var r=e;return r.cE},L0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.fn,l=c;return(a.fY-i.fY)*l.fY+(a.f0-i.f0)*l.f0+(a.da-i.da)*l.da}),z0=y(function(e,r,n){var a=e,t=r,i=n;return{fY:i.fY+t*a.fY,f0:i.f0+t*a.f0,da:i.da+t*a.da}}),k0=v(function(e,r){var n=Ro(r),a=e,t=a.fn,i=o(P0,t,n);if(i){var c=Ul(r),l=o(L0,e,c),u=o(te,-1/i,l);return re(p(z0,n,u,c))}else return q}),T0=v(function(e,r){return{fY:e,f0:r}}),qi=v(function(e,r){var n=e,a=r;return n*a}),M0=function(e){var r=e;return r},Ji=function(e){var r=e;return M0(r.ey)},D0=function(e){var r=e;return r.aK},Er=Vv,A0=function(e){var r=e,n=o(He,X(r.fY),o(He,X(r.f0),X(r.da)));if(n){var a=r.da/n,t=r.f0/n,i=r.fY/n,c=Er(i*i+t*t+a*a);return re({fY:i/c,f0:t/c,da:a/c})}else return q},ql=v(function(e,r){var n=r;return n/e}),Ot=function(e){var r=e;return un(r)},Yo=lr({fY:0,f0:0,da:-1}),F0=v(function(e,r){var n=e,a=r;return a/n}),V0=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fY:$.fY*a.fY+l.fY*a.f0+i.fY*a.da,f0:$.f0*a.fY+l.f0*a.f0+i.f0*a.da,da:$.da*a.fY+l.da*a.f0+i.da*a.da}}),Fn=function(e){var r=e;return{fY:-r.fY,f0:-r.f0,da:-r.da}},Ut=function(e){var r=e;return Fn(Hr(r))},B0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c8,l=c;return(a.fY-i.fY)*l.fY+(a.f0-i.f0)*l.f0}),Wo=y(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,da:i}}),E0=E(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cE,$=u,s=t.db,d=s,m=t.c9,f=m,g=t.c8,b=g;return{fY:$.fY+i*b.fY+c*f.fY+l*d.fY,f0:$.f0+i*b.f0+c*f.f0+l*d.f0,da:$.da+i*b.da+c*f.da+l*d.da}}),R0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c9,l=c;return(a.fY-i.fY)*l.fY+(a.f0-i.f0)*l.f0}),ar=0,j0=y(function(e,r,n){var a=e,t=o(R0,Ji(r),n),i=o(B0,Ji(r),n),c=a.c6,l=c,u=D0(r);u.a;var $=u.b,s=a.cQ;if(s.$){var g=s.a,b=o(F0,$,g),w=L(E0,l,o(qi,b,i),o(qi,b,t),ar);return o(Ke,w,Ut(a.c6))}else{var d=s.a,m=Aa(o(ql,d,o(te,.5,$))),f=o(V0,l,o(vr,Yo,A0(p(Wo,i,t,m))));return o(Ke,Ot(a.c6),f)}}),qt=function(e){var r=e;return{fY:rn(r),f0:nn(r)}},N0=function(e){var r=e;return{fY:-r.f0,f0:r.fY}},Y0=function(e){return e},W0=v(function(e,r){return Y0({cE:r,c8:e,c9:N0(e)})}),H0=v(function(e,r){return o(W0,qt(e),r)}),G0=y(function(e,r,n){var a=e.a,t=e.b;return{ey:o(H0,r,n),aK:P(Ce(a),Ce(t))}}),Pr=function(e){var r=e;return r.fY},I0=v(function(e,r){var n=e,a=r;return{fY:n,f0:a}}),Lr=function(e){var r=e;return r.f0},zr=function(e){var r=e;return r.da},O0=E(function(e,r,n,a){var t=n.fY,i=n.f0,c=function($){return p(C0,da(Pr($)),da(Lr($)),da(zr($)))},l=p(G0,P(na(r.fW),na(r.e1)),Jr(0),o(T0,0,0)),u=o(I0,na(t),na(i));return o(xe,c,o(k0,a,p(j0,e,l,u)))}),U0=v(function(e,r){return{fn:e,cE:r}}),q0=v(function(e,r){var n=r;return o(U0,n.fn,o(vn,e,n.cE))}),J0=v(function(e,r){return{fn:r,cE:e}}),X0=o(J0,Dr,In),Z0=E(function(e,r,n,a){return L(O0,r,n,a,o(q0,p(Wo,Qe(0),Qe(0),Qe(e)),X0))}),Q0=v(function(e,r){if(e.cO.dt){var n=L(Z0,o(_r,"cubes side length",e),Il(e),e.b_,e.cO);if(n.$===1)return r;var a=n.a;return p(S0,a,e,r)}else return r}),K0=v(function(e,r){var n=r.aB;if(n.$){var a=n.a.cZ,t=n.a.cz;return U(e.bB-a,o(_r,"duration of rolling animation",e))>0?We(r,{aB:Bl,bt:t}):r}else return r}),ep=v(function(e,r){return o(K0,e,o(Q0,e,r))}),rp=sr("br"),np=o(I,h([O("absolute w-full text-center")]),h([o(I,h([O("font-bold pt-2 text-lg")]),h([ie("Eight Rolling Cubes Puzzle"),o(rp,z,z),ie("by John Harris")])),o(gr,z,h([ie("Can you make all the red faces look down")])),o(gr,z,h([ie(" with the center cell vacant?")]))])),Ho=v(function(e,r){return{$:0,a:e,b:r}}),$t=v(function(e,r){var n=e,a=r;return U(a,n)>-1}),ft=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),wr=v(function(e,r){var n=e,a=r;return a-n}),ap=lr({fY:-1,f0:0,da:0}),tp=lr({fY:0,f0:-1,da:0}),Jl=lr({fY:0,f0:1,da:0}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,da:i}}),op=qe(function(e,r,n,a,t,i){var c=o($t,n,i)?jo:Yo,l=o($t,r,t)?Jl:tp,u=o($t,e,a)?Gl:ap,$=F(Ce(o(wr,e,a)),Ce(o(wr,r,t)),Ce(o(wr,n,i))),s=p(me,o(ft,e,a),o(ft,r,t),o(ft,n,i)),d=Nr({cE:s,c8:u,c9:l,db:c});return{ey:d,aK:$}}),ip=v(function(e,r){return we(op,Pr(e),Lr(e),zr(e),Pr(r),Lr(r),zr(r))}),Jt=y(function(e,r,n){return{fY:e,f0:r,da:n}}),Fa=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=F(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ho,e,o(ip,p(Jt,-c,-l,-u),p(Jt,c,l,u)))}),nr=function(e){return e*De/180},cp=v(function(e,r){return o(xe,function(n){if(n.$===2){var a=n.a;return a}else return Fo},o(qa,e,r.au))}),lp=v(function(e,r){return o(vr,Fo,ln(o(Wn,cp(e),r)))}),up=v(function(e,r){return o(lp,e,r.eH)}),Xt=up,Go=function(e){return{$:5,a:e}},Io=function(e){return Go(e)},Zt=function(e){return{$:0,a:e}},Xl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Zl=y(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),st=function(e){return p(Zl,0,1,e<=.04045?e/12.92:o(Hn,(e+.055)/1.055,2.4))},On=uf,vp=function(e){var r=Vo(e),n=r.cR,a=r.cf,t=r.b8;return p(On,st(n),st(a),st(t))},Va=function(e){return p(Xl,0,Zt(vp(e)),Zt(0))},Ql=v(function(e,r){return{$:2,a:e,b:r}}),Kl=v(function(e,r){return{$:4,a:e,b:r}}),eu=v(function(e,r){return{$:3,a:e,b:r}}),ru=v(function(e,r){return{$:1,a:e,b:r}}),$p=y(function(e,r,n){return{fY:e,f0:r,da:n}}),fp=function(e){var r=e;return r},Oo=function(e){var r=e;return fp(r.ey)},Uo=function(e){var r=e;return r.aK},sp=v(function(e,r){return{ey:o(Wl,e,Oo(r)),aK:Uo(r)}}),dp=v(function(e,r){var n=r;return o(Ke,o(vn,e,n.cE),n.eN)}),mp=v(function(e,r){var n=r;return{k:o(dp,e,n.k),ff:n.ff,fw:n.fw}}),qo=function(e){var r=e;return r},pp=function(e){return e},nu=v(function(e,r){var n=qo(r),a=n.a,t=n.b;return pp(P(e(a),e(t)))}),bp=v(function(e,r){return o(nu,vn(e),r)}),Jo=function(e){var r=e;return r.eF},Xo=function(e){var r=e;return r.fw},au=v(function(e,r){return{eF:r,fw:Ce(e)}}),gp=v(function(e,r){return o(au,Xo(r),o(vn,e,Jo(r)))}),tu=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return F(e(a),e(t),e(i))}),hp=v(function(e,r){return o(tu,vn(e),r)}),Za=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p($p,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ho,s,o(sp,i,c));case 1:var s=r.a,l=r.b;return o(ru,s,o(hp,i,l));case 3:var s=r.a,u=r.b;return o(eu,s,o(gp,i,u));case 2:var s=r.a,$=r.b;return o(Ql,s,o(mp,i,$));case 4:var s=r.a,d=r.b;return o(Kl,s,o(bp,i,d));default:var m=r.a;return Go(o(ne,Za(F(n,a,t)),m))}}),ou=function(e){return Za(F(e,0,0))},ma=function(e){return Za(F(0,0,e))},_p=y(function(e,r,n){return{ey:p(Yl,e,r,Oo(n)),aK:Uo(n)}}),wp=v(function(e,r){var n=o(Gn,e,r),a=o(fa,e,r);return function(t){var i=t;return o(Ke,n(i.cE),a(i.eN))}}),yp=y(function(e,r,n){var a=n;return{k:p(wp,e,r,a.k),ff:a.ff,fw:a.fw}}),xp=y(function(e,r,n){return o(nu,o(Gn,e,r),n)}),Sp=y(function(e,r,n){return o(au,Xo(n),p(Gn,e,r,Jo(n)))}),Cp=y(function(e,r,n){return o(tu,o(Gn,e,r),n)}),Un=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ho,l,p(_p,e,r,a));case 1:var l=n.a,t=n.b;return o(ru,l,p(Cp,e,r,t));case 3:var l=n.a,i=n.b;return o(eu,l,p(Sp,e,r,i));case 2:var l=n.a,c=n.b;return o(Ql,l,p(yp,e,r,c));case 4:var l=n.a,u=n.b;return o(Kl,l,p(xp,e,r,u));default:var $=n.a;return Go(o(ne,o(Un,e,r),$))}}),Pp=o(Ke,Dr,In),dt=v(function(e,r){return p(Un,Pp,fr(e),r)}),Lp=function(e){var r=o(Xt,"board color",e),n=o(ou,-1.55,o(Fa,Va(r),F(.1,3.2,.2))),a=o(ma,-.5,o(Fa,Va(r),F(3,3,1)));return Io(h([n,o(dt,nr(90),n),o(dt,nr(180),n),o(dt,nr(270),n),a]))},zp=function(e){return Za(F(0,e,0))},Pn=v(function(e,r){return U(e,r)<0?e:r}),kp=v(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(Un,o(Ke,Rl(n),lr({fY:t,f0:i,da:c})),fr(r))}),Tp=y(function(e,r,n){var a=r.aB;if(a.$){var t=a.a.cZ,i=a.a.eh,c=a.a.ec;if(a.a.cz,Ue(i,n)){var l=o(_r,"duration of rolling animation",e),u=(e.bB-t)/l,$=u,s=o(Pn,nr(90),$*nr(90)),d=function(){switch(c){case 0:return P({fY:.5,f0:.5,da:-.5},F(-1,0,0));case 1:return P({fY:-.5,f0:-.5,da:-.5},F(1,0,0));case 2:return P({fY:-.5,f0:.5,da:-.5},F(0,-1,0));default:return P({fY:.5,f0:-.5,da:-.5},F(0,1,0))}}();return o(kp,d,s)}else return cr}else return cr}),Mp=o(Ke,Dr,Xa),mt=v(function(e,r){return p(Un,Mp,fr(e),r)}),Zo=Jl,Dp=o(Ke,Dr,Zo),Xi=v(function(e,r){return p(Un,Dp,fr(e),r)}),Ap=y(function(e,r,n){var a=n.a,t=a.a,i=a.b,c=n.b,l=o(_r,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,mt(nr(180));case 1:return c.a,c.b,mt(nr(90));default:return c.a,c.b,Xi(-nr(90))}else switch(c.a){case 2:return c.a,c.b,cr;case 1:return c.a,c.b,mt(-nr(90));default:return c.a,c.b,Xi(nr(90))}}(),$=o(Xt,"color 2",e),s=o(Xt,"color 1",e),d=o(ma,l/4,o(Fa,Va(s),F(l,l,l/2))),m=o(ma,-(l/4),o(Fa,Va($),F(l,l,l/2)));return o(zp,i,o(ou,t,o(ma,l/2,L(Tp,e,r,P(t,i),u(Io(h([d,m])))))))}),Fp=v(function(e,r){return Io(o(ne,o(Ap,e,r),r.bt))}),Vp=function(e){return e},Bp=function(e){return Qe(.01*e)},Zi=function(e){return e},Ep=function(e){return e},Rp=function(e){return{$:0,a:e}},jp=Rp,Np={$:3},Yp=Np,Wp=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Hp=Wp,Gp=v(function(e,r){return r.b?p(dr,T,r,e):e}),Ie=function(e){return p(dr,Gp,z,e)},Qo=v(function(e,r){return Ie(o(ne,e,r))}),Ip=function(e){return{$:1,a:e}},Op=Ip,Up=function(e){return o(Rn,"height",Ve(e))},qp=function(e){return M$(V$(e))},Jp=qp,Xp=function(e){return{$:2,a:e}},Zp=Xp,Qp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Re(l*1e3)/1e3},c=function(l){return Re(l*1e4)/100};return Vl(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},Kp=v(function(e,r){switch(r.$){case 0:return o(Zf,e,r);case 1:return o(Qf,e,r);case 2:return o(Kf,e,r);case 3:return o(es,e,r);case 4:return o(rs,e,r);default:return o(ns,e,r)}}),eb=v(function(e,r){switch(r.$){case 0:return o(Lf,e,r);case 1:return o(zf,e,r);case 2:return o(kf,e,r);case 3:return o(Tf,e,r);case 4:return o(Mf,e,r);case 5:return o(Df,e,r);case 6:return o(Af,e,r);case 7:return o(Ff,e,r);default:return Vf(e)}}),rb=y(function(e,r,n){return p(Xf,e,r,n)}),Qi=function(e){var r=e;return r},$n=mf,pt=L($n,1,1,1,1),er=y(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),nb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ab=v(function(e,r){var n=e,a=r.fY,t=r.f0;return p(nb,n*a/t,n,n*(1-a-t)/t)}),tb=function(e){var r=e.a,n=e.b,a=e.c;return p(On,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ko=v(function(e,r){return tb(o(ab,e,r))}),iu=v(function(e,r){return{du:Ue(e.du,r.du),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,G:r.G+(e.G*r.p+e.H*r.s+e.I*r.v)*r.bZ,H:r.H+(e.G*r.q+e.H*r.t+e.I*r.w)*r.bZ,I:r.I+(e.G*r.r+e.H*r.u+e.I*r.x)*r.bZ,bZ:e.bZ*r.bZ}}),tr=wf,ob=function(e){return tr({dC:e.p,dD:e.s,dE:e.v,dF:e.G,dG:e.q,dH:e.t,dI:e.w,dJ:e.H,dK:e.r,dL:e.u,dM:e.x,dN:e.I,dO:0,dP:0,dQ:0,dR:1})},bt=he(function(e,r,n,a,t){var i=a.du?1:-1,c=L($n,a.bZ,a.bZ,a.bZ,i);return we(t,e,c,ob(a),a.du,r,n)}),cu=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(iu,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(T,S(bt,e,r,n,a,g),i.L);return{L:b,T:i.T,fE:i.fE};case 3:var w=t.b,x=o(T,S(bt,e,r,n,a,w),i.T);return{L:i.L,T:x,fE:i.fE};case 2:var _=t.a,C=o(T,S(bt,e,r,n,a,_),i.fE);return{L:i.L,T:i.T,fE:C};default:var M=t.a;return p(jn,L(cu,e,r,n,a),i,M)}}),ib=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),lu=ib,ei=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),cb=function(e){var r=e.Y,n=e.V,a=e.U;return L(ei,518,r,n,a)},lb=v(function(e,r){return{$:6,a:e,b:r}}),ub=lb,uu=h([cb({U:1,V:0,Y:!1}),L(lu,!1,!1,!1,!1),o(ub,0,1)]),an=519,ri=8,vu=15,Zr=7681,vb={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=Pf,$b=v(function(e,r){return{$:0,a:e,b:r}}),fb=$b({dj:1,ds:0,d_:5}),Fe=cf,sb=fb(h([{bV:o(Fe,-1,-1)},{bV:o(Fe,1,-1)},{bV:o(Fe,-1,1)},{bV:o(Fe,1,1)}])),db={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bV"},uniforms:{}},mb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},ni=y(function(e,r,n){var a=e.cS,t=e.cr,i=e.c7,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(K,c($.bl),o(K,l($.a8),o(K,l($.bu),l($.bv))))};return o(u,n,o(u,r,p(mb,a,t,i)))}),ai=function(e){return p(ni,{cr:e.cr,cS:e.cS,c7:e.c7},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv})},ti=function(e){return S(ae,h([ai(e),L(lu,!1,!1,!1,!1)]),db,vb,sb,{})},pb=ti({a8:Zr,cr:0,cS:ri,bl:an,c7:vu,bu:Zr,bv:Zr}),bb=516,Ki=5386,Se=7680,gb=function(e){return o(Hn,2,e+4)},$u=function(e){return ti({a8:Se,cr:vu,cS:ri,bl:bb,c7:gb(e),bu:Ki,bv:Ki})},hb=y(function(e,r,n){return Ie(h([p(er,e,n,uu),h([$u(r),pb])]))}),_b=v(function(e,r){return Ie(o(Qc,hb(e),r))}),wb=function(e){var r=e.Y,n=e.V,a=e.U;return L(ei,513,r,n,a)},yb=wb({U:1,V:0,Y:!0}),xb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},Sb=function(e){var r=e.bX,n=e.bH,a=e.bz,t=e.bw,i=e.bC,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return xb(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Cb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ec=v(function(e,r){var n=e,a=r;return p(Cb,32774,n,a)}),Pb=1,rc=771,Lb=770,oi=Sb({bw:0,aH:o(ec,Pb,rc),bz:0,bC:o(ec,Lb,rc),bH:0,bX:0}),Gr=h([yb,oi]),zb=function(e){var r=e;return r.dT},kb=function(e){var r=e;return r.dU},fu=function(e){var r=e;return r.dV},Tb=function(e){var r=e;return r.dW},Mb=function(e){var r=e;return r.dX},su=function(e){var r=e;return r.dY},du=function(e){return F(o(wr,Tb(e),zb(e)),o(wr,Mb(e),kb(e)),o(wr,su(e),fu(e)))},Db=function(e){return e},Ab=function(e){return Nr({cE:Db({fY:e.G,f0:e.H,da:e.I}),c8:lr({fY:e.p,f0:e.q,da:e.r}),c9:lr({fY:e.s,f0:e.t,da:e.u}),db:lr({fY:e.v,f0:e.w,da:e.x})})},gt=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fY:a.fY*$.fY+a.f0*$.f0+a.da*$.da,f0:a.fY*l.fY+a.f0*l.f0+a.da*l.da,da:a.fY*i.fY+a.f0*i.f0+a.da*i.da}}),mu=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=a.fY-i.fY,l=a.f0-i.f0,u=a.da-i.da,$=n.db,s=$,d=n.c9,m=d,f=n.c8,g=f;return{fY:c*g.fY+l*g.f0+u*g.da,f0:c*m.fY+l*m.f0+u*m.da,da:c*s.fY+l*s.f0+u*s.da}}),pu=v(function(e,r){return{cE:o(mu,e,un(r)),c8:o(gt,e,Yr(r)),c9:o(gt,e,Wr(r)),db:o(gt,e,Hr(r))}}),Ba=function(e){var r=e;return r},le=v(function(e,r){var n=e,a=r;return o(He,n,a)}),se=v(function(e,r){var n=e,a=r;return o(Pn,n,a)}),Fb=v(function(e,r){var n=Ba(r),a=Ba(e);return{dT:o(le,a.dT,n.dT),dU:o(le,a.dU,n.dU),dV:o(le,a.dV,n.dV),dW:o(se,a.dW,n.dW),dX:o(se,a.dX,n.dX),dY:o(se,a.dY,n.dY)}}),Oe=function(e){var r=e;return r},Vb=function(e){var r=e;return F(r.fY,r.f0,r.da)},Ln=v(function(e,r){var n=e,a=r;return a+n}),Bb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=sa(Ce(a)),c=sa(Ce(n)),l=sa(Ce(t)),u=Vb(r),$=u.a,s=u.b,d=u.c;return{dT:o(Ln,c,$),dU:o(Ln,i,s),dV:o(Ln,l,d),dW:o(wr,c,$),dX:o(wr,i,s),dY:o(wr,l,d)}}),nc=E(function(e,r,n,a){var t=n.eF,i=2*n.e$*r,c=2*n.e_*r,l=2*n.eZ*r,u=t.da*r,$=t.f0*r,s=t.fY*r,d=Oe(Hr(e)),m=X(l*d.fY)+X(c*d.f0)+X(i*d.da),f=Oe(Wr(e)),g=X(l*f.fY)+X(c*f.f0)+X(i*f.da),b=Oe(Yr(e)),w=X(l*b.fY)+X(c*b.f0)+X(i*b.da),x=o(Bb,F(w,g,m),o(mu,e,p(Jt,s,$,u)));if(a.$)return re(x);var _=a.a;return re(o(Fb,_,x))}),Qt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(nc,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(nc,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Qt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(pu,Ab($),e),m=r*$.bZ,f=e,g=r,b=L(Qt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),fn=vf,sn=$f,dn=ff,bu=function(e){return{$:4,a:e}},Eb=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(T,n,r);e=t,r=i;continue e}else return r}),qn=function(e){return bu(o(Eb,e,z))},Rb={du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:0,H:0,I:0,bZ:1},ac=ti({a8:Zr,cr:0,cS:ri,bl:an,c7:255,bu:Zr,bv:Zr}),jb=function(e){var r=e,n=o(He,X(r.fY),o(He,X(r.f0),X(r.da)));if(n){var a=r.da/n,t=r.f0/n,i=r.fY/n,c=Er(i*i+t*t+a*a);return c*n}else return ar},ze={bz:0,eE:!1,bH:0,cN:0,bX:0,c2:0,fY:0,f0:0,da:0},Ne=v(function(e,r){var n=e,a=r;return tr({dC:n.fY,dD:n.bX,dE:a.fY,dF:a.bX,dG:n.f0,dH:n.bH,dI:a.f0,dJ:a.bH,dK:n.da,dL:n.bz,dM:a.da,dN:a.bz,dO:n.c2,dP:n.cN,dQ:a.c2,dR:a.cN})}),hn=P({bd:o(Ne,ze,ze),bM:o(Ne,ze,ze),bN:o(Ne,ze,ze),bO:o(Ne,ze,ze)},L($n,0,0,0,0)),gu=514,hu=function(e){var r=e.Y,n=e.V,a=e.U;return L(ei,515,r,n,a)},_u=240,Nb=h([hu({U:1,V:0,Y:!0}),ai({a8:Se,cr:_u,cS:0,bl:gu,c7:0,bu:Se,bv:Se}),oi]),Yb=v(function(e,r){var n=e,a=r.fm,t=r.eW,i=r.ex,c=Ce(a),l=c,u=Ce(t),$=u,s=n.cQ;if(s.$){var m=s.a;return Rt($)?tr({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:0,dN:-1,dO:0,dP:0,dQ:0,dR:1}):tr({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:-2/($-l),dN:-($+l)/($-l),dO:0,dP:0,dQ:0,dR:1})}else{var d=s.a;return Rt($)?tr({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-1,dN:-2*l,dO:0,dP:0,dQ:-1,dR:0}):tr({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-($+l)/($-l),dN:-2*$*l/($-l),dO:0,dP:0,dQ:-1,dR:0})}}),aa=v(function(e,r){return(1&e>>r)===1?0:1}),Wb=function(e){return h([hu({U:1,V:0,Y:!0}),ai({a8:Se,cr:_u,cS:e,bl:gu,c7:0,bu:Se,bv:Se}),oi])},Hb=y(function(e,r,n){return Ie(o(ne,function(a){var t=a<<4,i=L($n,o(aa,a,0),o(aa,a,1),o(aa,a,2),o(aa,a,3));return p(er,e,P(r,i),Wb(t))},o(Kr,1,o(Hn,2,n)-1)))}),Qr=function(e){var r=e;return r},Gb=yf,Ib={cE:Dr,c8:Xa,c9:Zo,db:In},Qa=function(e){var r=e;return r},Ob=function(e){var r=Qa(un(e)),n=Oe(Hr(e)),a=Oe(Wr(e)),t=Oe(Yr(e));return tr({dC:t.fY,dD:a.fY,dE:n.fY,dF:r.fY,dG:t.f0,dH:a.f0,dI:n.f0,dJ:r.f0,dK:t.da,dL:a.da,dM:n.da,dN:r.da,dO:0,dP:0,dQ:0,dR:1})},Ub=v(function(e,r){var n=r;return Ob(o(pu,n,e))}),qb=function(e){return o(Ub,Ib,e)},Jb=function(e){var r=e;return r.c6},Xb=function(e){var r=e;return Yr(r)},Zb=function(e){var r=e;return Wr(r)},Qb=function(e){var r=Jb(e.eC),n=Nr({cE:Ot(r),c8:Xb(r),c9:Zb(r),db:Fn(Ut(r))}),a=qn(e.aP),t=a,i=L(Qt,n,1,q,h([t]));if(i.$===1)return z;var c=i.a,l=qb(r),u=o(te,.99,o(le,Ce(e.aJ),Aa(fu(c)))),$=du(c),s=$.a,d=$.b,m=$.c,f=jb(p(Wo,s,d,m)),g=o(te,1.01,o(Ln,f,Aa(su(c)))),b=o(Yb,e.eC,{ex:e.ex,eW:g,fm:u}),w=Gb(b).dR,x=w?Oe(Fn(Ut(r))):Qr(Ot(r)),_=function(){var oe=e.b0;switch(oe.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var de=oe.a;return P(3,de);case 4:var de=oe.a;return P(4,de);default:return P(5,0)}}(),C=_.a,M=_.b,Y=e.bF,j=Y,R=o(Ko,j,e.b2),N=R,W=tr({dC:0,dD:x.fY,dE:fn(N),dF:e.ej,dG:0,dH:x.f0,dI:sn(N),dJ:da(f),dK:0,dL:x.da,dM:dn(N),dN:C,dO:0,dP:w,dQ:0,dR:M}),V=we(cu,W,l,b,Rb,t,{L:z,T:z,fE:z}),J=e.bL;switch(J.$){case 0:var Q=J.a;return Ie(h([p(er,V.L,P(Q,pt),Gr),p(er,V.T,hn,Gr)]));case 1:var Q=J.a;return Ie(h([p(er,V.L,hn,Gr),h([ac]),p(er,V.fE,Q.bd,uu),h([$u(0)]),p(er,V.L,P(Q,pt),Nb),p(er,V.T,hn,Gr)]));default:var ce=J.a,$e=J.b;return Ie(h([p(er,V.L,P($e,pt),Gr),h([ac]),o(_b,V.fE,ce),p(Hb,V.L,$e,Rr(ce)),p(er,V.T,hn,Gr)]))}},Kb=function(e){return o(Rn,"width",Ve(e))},e3=v(function(e,r){var n=h([Op(1),Zp(0),jp(!0),L(Hp,0,0,0,0)]),a=function(){var C=e.b3;switch(C.$){case 0:return F(n,"0",1);case 1:return F(o(T,Yp,n),"1",1);default:var M=C.a;return F(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Qi($),d=o(be,"height",Ve(s)+"px"),m=Qi(u),f=m/s,g=o(Qo,function(C){return Qb({ex:f,eC:e.eC,aJ:e.aJ,aP:C.aP,bF:C.bF,bL:C.bL,ej:c,b0:C.b0,b2:C.b2})},r),b=o(be,"width",Ve(m)+"px"),w=e.aI,x=w,_=Qp(x);return p(Jp,"div",h([o(be,"padding","0px"),b,d]),h([P(i,p(rb,t,h([Kb(Re(m*c)),Up(Re(s*c)),b,d,o(be,"display","block"),o(be,"background-color",_)]),g))]))}),r3=function(e){return o(e3,{b3:e.b3,aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bF:e.bF,bL:e.bL,b0:e.b0,b2:e.b2}]))},wu=function(e){return e},tc=wu({fY:.31271,f0:.32902}),n3=v(function(e,r){var n=e,a=Oe(r.eN),t=a.fY,i=a.f0,c=a.da,l=o(Ko,r.cg,r.b9),u=l;return{bz:dn(u),eE:n,bH:sn(u),cN:0,bX:fn(u),c2:1,fY:-t,f0:-i,da:-c}}),a3=function(e){return e},t3=function(e){return a3(1.2*o(Hn,2,e))},ht=function(e){return e},o3={$:0},i3=o3,yu=function(e){return e},c3=v(function(e,r){var n=e,a=r;return U(a,n)>0}),oc=function(e){var r=e;return r},l3=function(e){e:for(;;){if(Ue(e.e9,ar)&&Ue(e.fa,ar))return ze;if(o(c3,Ce(e.e9),Ce(e.fa))){var r={b9:e.b9,e9:e.fa,fa:e.e9,ep:Fn(e.ep)};e=r;continue e}else{var n=X(oc(e.fa)/De),a=X(oc(e.e9)/De),t=Oe(e.ep),i=t.fY,c=t.f0,l=t.da,u=o(Ko,yu(1),e.b9),$=u;return{bz:a*dn($),eE:!1,bH:a*sn($),cN:n/a,bX:a*fn($),c2:3,fY:i,f0:c,da:l}}}},ic=function(e){return l3({b9:e.b9,e9:e.cg,fa:ar,ep:e.ep})},u3=function(e){var r=e;return r},xu=function(e){var r=p(Zl,1667,25e3,u3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return wu({fY:n,f0:a})},Su=function(e){return e},v3=xu(Su(12e3)),$3=xu(Su(5600)),f3=function(e){return{$:2,a:e}},s3=function(e){return f3(e)},d3=v(function(e,r){return{$:2,a:e,b:r}}),Cu=function(e){return{$:0,a:e}},ta=function(e){var r=e;return r},m3=function(e){var r=e;return r.eE},p3=Cu(hn.a),b3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(T,a,i),c):P(i,o(T,a,c))});return p(dr,n,P(z,z),r)}),g3=function(e){var r=e;return tr({dC:r.fY,dD:r.bX,dE:0,dF:0,dG:r.f0,dH:r.bH,dI:0,dJ:0,dK:r.da,dL:r.bz,dM:0,dN:0,dO:r.c2,dP:r.cN,dQ:0,dR:0})},h3=ee(function(e,r,n,a,t,i,c,l){var u=o(b3,m3,h([ta(e),ta(r),ta(n),ta(a)])),$=u.a,s=u.b;if($.b){var d=ue($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(d3,o(ne,g3,$),{bd:o(Ne,m,g),bM:o(Ne,w,_),bN:o(Ne,t,i),bO:o(Ne,c,l)})}else return p3}else return Cu({bd:o(Ne,e,r),bM:o(Ne,n,a),bN:o(Ne,t,i),bO:o(Ne,c,l)})}),_3=y(function(e,r,n){return Ya(h3,e,r,n,ze,ze,ze,ze,ze)}),w3=function(e){var r=o(n3,Ep(e.fE),{b9:$3,eN:e.fN,cg:ht(8e4)}),n=ic({b9:v3,cg:ht(2e4),ep:e.ep}),a=ic({b9:tc,cg:ht(15e3),ep:Fn(e.ep)}),t=p(_3,r,n,a);return r3({b3:s3(e.cd),aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK,aP:e.aP,bF:t3(15),bL:t,b0:i3,b2:tc})},Pu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),y3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Lu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),zu=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),x3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),S3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),C3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ii=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(C3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Pu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(y3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(Lu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(S3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(zu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(x3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ci={$:0},P3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Ba(c(u)),d=o(se,s.dW,e),m=o(le,s.dT,r),f=o(se,s.dX,n),g=o(le,s.dU,a),b=o(se,s.dY,t),w=o(le,s.dV,i),x=c,_=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dT:r,dU:a,dV:i,dW:e,dX:n,dY:t}}),L3=y(function(e,r,n){var a=Ba(e(r));return Ya(P3,a.dW,a.dT,a.dX,a.dU,a.dY,a.dV,e,n)}),_t=v(function(e,r){var n=e,a=r;return U(a,n)<1}),ku=function(e){return o(_t,e.dT,e.dW)&&o(_t,e.dU,e.dX)&&o(_t,e.dV,e.dY)?e:{dT:o(le,e.dW,e.dT),dU:o(le,e.dX,e.dU),dV:o(le,e.dY,e.dV),dW:o(se,e.dW,e.dT),dX:o(se,e.dX,e.dU),dY:o(se,e.dY,e.dV)}},Vn=function(e){var r=e;return r},Tu=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=Pr(n),c=Lr(n),l=zr(n),u=Pr(a),$=Lr(a),s=zr(a),d=Pr(t),m=Lr(t),f=zr(t);return ku({dT:o(le,i,o(le,u,d)),dU:o(le,c,o(le,$,m)),dV:o(le,l,o(le,s,f)),dW:o(se,i,o(se,u,d)),dX:o(se,c,o(se,$,m)),dY:o(se,l,o(se,s,f))})},Mu=sf,ke=function(e){return Mu(Qa(e))},Du=function(e){var r=e;return r},Ka=function(e){return Mu(Du(e))},z3=v(function(e,r){var n=e,a=r;return{fY:a.f0*n.da-a.da*n.f0,f0:a.da*n.fY-a.fY*n.da,da:a.fY*n.f0-a.f0*n.fY}}),Kt=v(function(e,r){var n=e,a=r;return{fY:a.fY-n.fY,f0:a.f0-n.f0,da:a.da-n.da}}),k3={fY:0,f0:0,da:0},T3=v(function(e,r){var n=e,a=r,t=o(He,X(a.fY),o(He,X(a.f0),X(a.da)));if(t){var i=a.da/t,c=a.f0/t,l=a.fY/t,u=Er(l*l+c*c+i*i);return{fY:n*l/u,f0:n*c/u,da:n*i/u}}else return k3}),M3=T3(yu(1)),Au=y(function(e,r,n){var a=o(Kt,r,n),t=o(Kt,e,r);return M3(o(z3,a,t))}),D3=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=Ka(p(Au,n,a,t));return F({n:i,bV:ke(n)},{n:i,bV:ke(a)},{n:i,bV:ke(t)})},A3=v(function(e,r){return{$:2,a:e,b:r}}),Fu=A3({dj:3,ds:0,d_:4}),F3=function(e){if(e.b){var r=e.a,n=e.b,a=Fu(o(ne,D3,e)),t=p(L3,Tu,r,n);return L(Pu,t,e,a,0)}else return ci},je=y(function(e,r,n){return F(e,r,n)}),Vu=function(){var e=Qe(1),r=Qe(1),n=Qe(1),a=o(te,-.5,e),t=o(te,-.5,r),i=o(te,-.5,n),c=p(me,i,t,a),l=o(te,.5,e),u=p(me,i,t,l),$=o(te,.5,r),s=p(me,i,$,a),d=p(me,i,$,l),m=o(te,.5,n),f=p(me,m,t,a),g=p(me,m,$,a),b=p(me,m,t,l),w=p(me,m,$,l);return ii(F3(h([p(je,c,g,f),p(je,c,s,g),p(je,u,b,w),p(je,u,w,d),p(je,f,g,w),p(je,f,w,b),p(je,c,d,s),p(je,c,u,d),p(je,c,f,b),p(je,c,b,u),p(je,s,w,g),p(je,s,d,w)])))}(),oa={$:0},V3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),B3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ka(p(Au,u,l,c)),s={n:$,bV:ke(u)},d={n:$,bV:ke(l)},m={n:$,bV:ke(c)};return o(T,s,o(T,d,o(T,m,n)))}),li=function(e){var r=e;return r.C},E3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),eo=4294967295>>>32-Mn,ro=gv,R3=y(function(e,r,n){e:for(;;){var a=eo&r>>>e,t=o(ro,a,n);if(t.$){var $=t.a;return o(ro,eo&r,$)}else{var i=t.a,c=e-Mn,l=r,u=i;e=c,r=l,n=u;continue e}}}),j3=function(e){return e>>>5<<5},N3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?q:U(e,j3(n))>-1?re(o(ro,eo&e,i)):re(p(R3,a,e,t))}),ui=function(e){var r=e;return r.ag},wt=v(function(e,r){return o(N3,e,ui(r))}),Y3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(E3,y(function(c,l,u){return F(c,l,u)}),o(wt,a,e),o(wt,t,e),o(wt,i,e))};return o(Wn,r,li(e))},W3=y(function(e,r,n){e:for(;;){var a=o(Co,Ee,e),t=a.a,i=a.b;if(U(Bt(t),Ee)<0)return o(tl,!0,{y:r,l:n,o:t});var c=i,l=o(T,al(t),r),u=n+1;e=c,r=l,n=u;continue e}}),vi=function(e){return e.b?p(W3,e,z,0):rl},H3=y(function(e,r,n){return e(r(n))}),G3=v(function(e,r){return!o(Mo,o(H3,Ns,e),r)}),I3=function(e){var r=e.a;return r},Bu=v(function(e,r){var n=I3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(G3,a,r)?{C:r,ag:e}:{C:o(No,a,r),ag:e}}),O3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Jn=O3({dj:1,ds:3,d_:4}),pa=v(function(e,r){var n=Qr(r),a=Qr(e);return P(F(a.fY,a.f0,a.da),F(n.fY,n.f0,n.da))}),cc=p(On,0,0,0),yt=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(qa,o(pa,e,r),t);if($.$){var d={n:cc,bV:ke(r)},m={n:cc,bV:ke(e)},f=u+1,g=u;return F(o(T,F(n,g,f),o(T,F(n,f,a),c)),o(T,d,o(T,m,l)),u+2)}else{var s=$.a;return F(o(T,F(n,s,a),c),l,u)}}),U3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=$,C=a+3,M=we(yt,s,m,f,b,r,we(yt,d,s,g,f,r,we(yt,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=M;continue e}else{var Y=t,j=Y.a,R=Y.b;return P(j,Be(R))}}),q3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(xn,o(pa,m,s),f,p(xn,o(pa,s,d),g,p(xn,o(pa,d,m),b,t))),x=o(T,F(b,g,f),a),_=e,C=$,M=n+3,Y=x,j=w;e=_,r=C,n=M,a=Y,t=j;continue e}else return F(a,t,n)}),Fr=y(function(e,r,n){var a=Y3(n),t=p(dr,B3(r),z,a),i=S(q3,r,a,0,z,El),c=i.a,l=i.b,u=i.c,$=S(U3,r,l,a,0,F(c,z,u)),s=$.a,d=$.b,m=Fl(d)?t:ue(t,d);return p(V3,e,o(Bu,vi(m),s),o(Jn,m,s))}),no=function(e){return{C:o(ne,function(r){return F(3*r,3*r+1,3*r+2)},o(Kr,0,Rr(e)-1)),ag:vi(Ie(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Eu=function(e){switch(e.$){case 0:return oa;case 1:var a=e.a,r=e.b,n=o(ne,Vn,r);return p(Fr,a,cr,no(n));case 2:var a=e.a,r=e.b,n=o(ne,Vn,r);return p(Fr,a,cr,no(n));case 3:var a=e.a,t=e.b;return p(Fr,a,cr,t);case 4:var a=e.a,t=e.b;return p(Fr,a,function(i){return i.bV},t);case 5:var a=e.a,t=e.b;return p(Fr,a,function(i){return i.bV},t);case 6:var a=e.a,t=e.b;return p(Fr,a,function(i){return i.bV},t);case 7:var a=e.a,t=e.b;return p(Fr,a,function(i){return i.bV},t);case 8:return oa;case 9:return oa;default:return oa}},lc=Eu(Vu),Ru={$:0},k=Ru,ge=v(function(e,r){return{$:1,a:e,b:r}}),J3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bD"}},X3=1029,Z3=function(e){return{$:5,a:e}},ju=function(e){var r=e;return Z3(r)},Q3=ju(X3),K3=1028,eg=ju(K3),Te=y(function(e,r,n){return r===1?e?o(T,Q3,n):o(T,eg,n):n}),Nu={src:`
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
    `,attributes:{position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xt=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,$,s,d){return S(ae,p(Te,l,a,d),Nu,J3,n,{bD:e,b:c,c:i,d:$,e:t,f:u})}))}),$i={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"av"}},Yu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},mr=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,$,s,d){return S(ae,p(Te,l,a,d),Yu,$i,n,{av:e,b:c,c:i,d:$,e:t,f:u})}))}),Wu=v(function(e,r){return{$:3,a:e,b:r}}),rg={src:`
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
    `,attributes:{},uniforms:{constantColor:"av",pointRadius:"bU",sceneProperties:"e"}},Hu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bU",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ng=E(function(e,r,n,a){return o(Wu,n,ee(function(t,i,c,l,u,$,s,d){return S(ae,d,Hu,rg,a,{av:e,b:c,c:i,bU:r,d:$,e:t,f:u})}))}),fi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Xn=function(e){var r=e;return r},et=df,pr=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,$,s,d,m){return S(ae,p(Te,u,t,m),Yu,fi,a,{aN:o(et,Xn(r),e),b:l,c,d:s,e:i,f:$})}))}),ag={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bU",sceneProperties:"e"}},tg=he(function(e,r,n,a,t){return o(Wu,a,ee(function(i,c,l,u,$,s,d,m){return S(ae,m,Hu,ag,t,{aN:o(et,Xn(r),e),b:l,c,bU:n,d:s,e:i,f:$})}))}),Gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColor:"cs",sceneProperties:"e",viewMatrix:"f"}},Iu={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ia=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),Iu,Gu,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,cs:e,b:c,c:i,d:$,e:t,f:u})}))}),Ou={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColorTexture:"ct",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Uu={src:`
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
    `,attributes:{normal:"n",position:"bV",tangent:"el",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},og=qe(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Te,$,i,f),Uu,Ou,t,{O:b,bd:g.bd,bM:g.bM,bN:g.bN,bO:g.bO,ct:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),qu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b7",constantBaseColor:"ca",constantMetallic:"cb",constantRoughness:"cc",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallicTexture:"cx",normalMapTexture:"aW",roughnessTexture:"cW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},ig=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(ge,u,ee(function(d,m,f,g,b,w,x,_){var C=x.a,M=x.b;return S(ae,p(Te,g,s,_),Uu,qu,$,{b7:e,ca:r,cb:i,cc:a,O:M,bd:C.bd,bM:C.bM,bN:C.bN,bO:C.bO,cx:t,b:f,c:m,aW:c,d:w,cW:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Ju={src:`
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
    `,attributes:{},uniforms:{baseColor:"b6",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallic:"cw",roughness:"cV",sceneProperties:"e",viewMatrix:"f"}},ca=qe(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Te,$,i,f),Iu,Ju,t,{b6:e,O:b,bd:g.bd,bM:g.bM,bN:g.bN,bO:g.bO,cw:n,b:u,c:l,d,cV:r,e:c,f:s})}))}),cg=function(e){return{$:0,a:e}},uc=v(function(e,r){return{$:1,a:e,b:r}}),zn=v(function(e,r){if(r.$){var n=r.a.B;return P(n,1)}else return r.a,P(e,0)}),lg=function(e){return L($n,fn(e),sn(e),dn(e),1)},si=L($n,0,0,0,0),ba=v(function(e,r){if(r.$){var a=r.a.B;return P(a,si)}else{var n=r.a;return P(e,lg(n))}}),Xu=v(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.B;return o(uc,P(t,si),o(zn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(uc,o(ba,t,e),o(zn,t,r))}else{var a=n.a.a;return n.b.a,cg(a)}}),ug=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),la=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),vg=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$g=function(e){return o(Fe,e,1)},ao=o(Fe,0,0),Ir=v(function(e,r){if(r.$){var a=r.a.B;return P(a,ao)}else{var n=r.a;return P(e,$g(n))}}),Zu=E(function(e,r,n,a){var t=L(vg,e,r,n,a);if(t.a.$){var u=t.a.a.B;return L(la,P(u,si),o(Ir,u,r),o(Ir,u,n),o(zn,u,a))}else if(t.b.$){var u=t.b.a.B;return L(la,o(ba,u,e),P(u,ao),o(Ir,u,n),o(zn,u,a))}else if(t.c.$){var u=t.c.a.B;return L(la,o(ba,u,e),o(Ir,u,r),P(u,ao),o(zn,u,a))}else if(t.d.$){var u=t.d.a.B;return L(la,o(ba,u,e),o(Ir,u,r),o(Ir,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(ug,i,c,l)}}),fg={src:`
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
    `,attributes:{},uniforms:{backlight:"b4",colorTexture:"bD",sceneProperties:"e"}},St=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,$,s,d,m){return S(ae,p(Te,u,t,m),Nu,fg,a,{b4:Xn(r),bD:e,b:l,c,d:s,e:i,f:$})}))}),Qu={src:`
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
    `,attributes:{normal:"n",position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sg=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),Qu,Ou,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,ct:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),dg=io(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function($,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(Te,m,u,w),Qu,qu,l,{b7:e,ca:r,cb:i,cc:a,O:_,bd:x.bd,bM:x.bM,bN:x.bN,bO:x.bO,cx:t,b:d,c:s,aW:e,d:g,cW:n,e:$,a$:0,f})}))}),Bn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),mg=function(e){var r=e;return p(Bn,r.dW,r.dT,.5)},pg=function(e){var r=e;return p(Bn,r.dX,r.dU,.5)},bg=function(e){var r=e;return p(Bn,r.dY,r.dV,.5)},gg=function(e){return p(me,mg(e),pg(e),bg(e))},H=function(e){var r=du(e),n=r.a,a=r.b,t=r.c;return{eF:Qa(gg(e)),eZ:n/2,e_:a/2,e$:t/2}},di=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(xt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(xt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(xt,l,H(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(mr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return L(mr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return L(mr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(ng,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(St,l,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(St,l,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(St,l,$,H(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(pr,u,$,H(t),c,a);case 8:var t=r.a,c=r.c;return S(pr,u,$,H(t),c,0);case 9:var t=r.a,c=r.c;return S(pr,u,$,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(tg,u,$,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Xu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(sg,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(og,b,x,_,H(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(ia,m,H(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(ia,m,H(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(ia,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(ia,m,H(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,M=e.c,Y=e.d,j=e.e,R=L(Zu,C,M,Y,j);if(R.$){var J=R.a,Q=J.a,ce=J.b,$e=R.b,oe=$e.a,de=$e.b,Me=R.c,Pe=Me.a,xr=Me.b,Sr=R.d,x=Sr.a,_=Sr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return sv(dg,Q,ce,oe,de,Pe,xr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ig(Q)(ce)(oe)(de)(Pe)(xr)(x)(_)(H(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var N=R.a,W=R.b,V=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return we(ca,N,W,V,H(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return we(ca,N,W,V,H(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return we(ca,N,W,V,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(ca,N,W,V,H(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Ct=function(e){var r=e;return r.fY},Pt=function(e){var r=e;return r.f0},Lt=function(e){var r=e;return r.da},hg=function(e){var r=e,n=Lt(r.db),a=Pt(r.db),t=Ct(r.db),i=Lt(r.c9),c=Pt(r.c9),l=Ct(r.c9),u=Lt(r.c8),$=Pt(r.c8),s=Ct(r.c8);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},_g=function(e){var r=Qa(un(e)),n=Oe(Hr(e)),a=Oe(Wr(e)),t=Oe(Yr(e));return{du:hg(e),p:t.fY,q:t.f0,r:t.da,s:a.fY,t:a.f0,u:a.da,v:n.fY,w:n.f0,x:n.da,G:r.fY,H:r.f0,I:r.da,bZ:1}},Or=v(function(e,r){return{$:5,a:e,b:r}}),Ku=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(iu,a,e);return o(Or,i,t);case 1:return o(Or,e,n);case 3:return o(Or,e,n);case 2:return o(Or,e,n);default:return o(Or,e,n)}}),ev=v(function(e,r){return o(Ku,_g(e),r)}),rt=function(e){return{$:2,a:e}},wg=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eF;return{eF:{fY:n*i.fY,f0:a*i.f0,da:t*i.da},eZ:n*r.eZ,e_:a*r.e_,e$:t*r.e$}}),yg=bf,xg=pf,vc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=xg(a),g=f.fY,b=f.f0,w=f.da,x=f.et,_=yg({et:x,fY:g*s,f0:b*d,da:w*m});return Ya(r,n,_,t,i,c,l,u,$)}}}}}}}}}},to=v(function(e,r){switch(r.$){case 0:return Ru;case 5:var n=r.a,a=r.b;return o(Or,n,o(to,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(wg,e,t),o(vc,e,i));case 3:return r;case 2:var i=r.a;return rt(o(vc,e,i));default:var c=r.a;return bu(o(ne,to(e),c))}}),mi=v(function(e,r){var n=r;return o(to,e,n)}),pi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},rv=7683,nv=7682,Sg=p(ni,{cr:0,cS:0,c7:15},{a8:Se,bl:an,bu:Se,bv:rv},{a8:Se,bl:an,bu:Se,bv:nv}),Cg=p(ni,{cr:0,cS:0,c7:15},{a8:Se,bl:an,bu:Se,bv:nv},{a8:Se,bl:an,bu:Se,bv:rv}),bi=v(function(e,r){return e?o(T,Cg,r):o(T,Sg,r)}),Pg={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},Lg=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,$){return S(ae,o(bi,i,$),Pg,pi,r,{b:t,c:a,d:l,e:n,b$:u,f:c})}))}else return q},Ea=function(e){var r=Lg(e);if(r.$)return k;var n=r.a;return rt(n)},zg=E(function(e,r,n,a){var t=o(di,n,Vu),i=function(){var s=P(e,r);return s.a?s.b?qn(h([t,Ea(lc)])):t:s.b?Ea(lc):k}(),c=Uo(a),l=c.a,u=c.b,$=c.c;return o(ev,Oo(a),o(mi,F(l,u,$),i))}),kg=v(function(e,r){return L(zg,!0,!0,e,r)}),av=v(function(e,r){return{$:0,a:e,b:r}}),Tg=function(e){var r=Vo(e),n=r.cR,a=r.cf,t=r.b8;return p(On,n,a,t)},Mg=function(e){return o(av,0,Zt(Tg(e)))},Dg=function(e){var r=e;return r.k},kn=function(e){var r=e;return rn(r)},Ag=v(function(e,r){var n=e.bV,a=e.n;return o(T,{n:Ka(a),bV:ke(n)},r)}),Fg=Na(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=dn(l.bV),s=sn(l.bV),d=fn(l.bV),m=o(Pn,e,d),f=o(He,r,d),g=o(Pn,n,s),b=o(He,a,s),w=o(Pn,t,$),x=o(He,i,$),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return ku({dT:r,dU:a,dV:i,dW:e,dX:n,dY:t})}),tv=v(function(e,r){var n=dn(e.bV),a=sn(e.bV),t=fn(e.bV);return co(Fg,t,t,a,a,n,n,r)}),Vg=function(e){var r=p(Uc,Ag,z,ui(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,li(e)),i=o(tv,n,a);return L(Lu,i,e,t,0)}else return ci},$c=v(function(e,r){var n=e,a=r,t=n.c9,i=t,c=n.c8,l=c;return{fY:a.fY*l.fY+a.f0*i.fY,f0:a.fY*l.f0+a.f0*i.f0,da:a.fY*l.da+a.f0*i.da}}),Ra=function(e){var r=e;return nn(r)},_n=function(e){var r=e;return r},oo=function(e){return fr(2*De*e)},fc=Hl({cE:Dr,c8:Xa,c9:Zo}),ov=function(){var e=72,r=o(ql,e,oo(1)),n=Qe(1),a=_n(jo),t=_n(Yo),i=Qe(1),c=o(te,.5,i),l=p(me,ar,ar,c),u=o(te,-.5,i),$=p(me,ar,ar,u),s=function(f){var g=o(te,f,r),b=_n(o($c,fc,qt(g))),w=o(te,kn(g),n),x=o(te,Ra(g),n),_=p(me,w,x,c),C=p(me,w,x,u),M=o(ka,e,f+1),Y=o(te,M,r),j=_n(o($c,fc,qt(Y))),R=o(te,kn(Y),n),N=o(te,Ra(Y),n),W=p(me,R,N,u),V=p(me,R,N,c);return h([F({n:t,bV:$},{n:t,bV:W},{n:t,bV:C}),F({n:b,bV:C},{n:j,bV:W},{n:j,bV:V}),F({n:b,bV:C},{n:j,bV:V},{n:b,bV:_}),F({n:a,bV:l},{n:a,bV:_},{n:a,bV:V})])},d=o(ne,s,o(Kr,0,e-1)),m=no(Ie(d));return ii(Vg(m))}(),sc=Eu(ov),Bg=function(e){var r=e,n=X(r.da),a=X(r.f0),t=X(r.fY);if(U(t,a)<1)if(U(t,n)<1){var i=Er(r.da*r.da+r.f0*r.f0);return{fY:0,f0:-r.da/i,da:r.f0/i}}else{var i=Er(r.f0*r.f0+r.fY*r.fY);return{fY:-r.f0/i,f0:r.fY/i,da:0}}else if(U(a,n)<1){var i=Er(r.da*r.da+r.fY*r.fY);return{fY:r.da/i,f0:0,da:-r.fY/i}}else{var i=Er(r.fY*r.fY+r.f0*r.f0);return{fY:-r.f0/i,f0:r.fY/i,da:0}}},Eg=function(e){var r=Bg(e),n=r,a=n,t=e,i=t,c={fY:i.f0*a.da-i.da*a.f0,f0:i.da*a.fY-i.fY*a.da,da:i.fY*a.f0-i.f0*a.fY};return P(r,c)},Rg=function(e){var r=Ro(e),n=Eg(r),a=n.a,t=n.b;return Nr({cE:Ul(e),c8:a,c9:t,db:r})},jg=function(e){var r=e;return r.ff},Ng=function(e){var r=e;return r.fw},Yg=E(function(e,r,n,a){var t=Rg(Dg(a)),i=o(di,n,ov),c=function(){var d=P(e,r);return d.a?d.b?qn(h([i,Ea(sc)])):i:d.b?Ea(sc):k}(),l=Ng(a),u=l,$=jg(a),s=$;return o(ev,t,o(mi,F(u,u,s),c))}),Wg=v(function(e,r){return L(Yg,!0,!0,e,r)}),dc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},mc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},wn=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return tr({dC:i.fY,dD:c.fY,dE:l.fY,dF:0,dG:i.f0,dH:c.f0,dI:l.f0,dJ:0,dK:i.da,dL:c.da,dM:l.da,dN:0,dO:0,dP:0,dQ:0,dR:0})},ua=Fu(h([F({c1:0},{c1:1},{c1:2})])),Hg=v(function(e,r){var n=Tu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,k;var t=e.b.a;return o(ge,a,ee(function(_,C,M,Y,j,R,N,W){return S(ae,p(Te,Y,0,W),dc,$i,ua,{av:t,b:M,c:C,d:R,e:_,bq:wn(r),f:j})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,C,M,Y,j,R,N,W){return S(ae,p(Te,Y,0,W),dc,fi,ua,{aN:o(et,Xn(c),i),b:M,c:C,d:R,e:_,bq:wn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Xu,l,f);if(u.$)return k;var $=u.a;return o(ge,a,ee(function(_,C,M,Y,j,R,N,W){var V=N.a,J=N.b;return S(ae,p(Te,Y,0,W),mc,Gu,ua,{O:J,bd:V.bd,bM:V.bM,bN:V.bN,bO:V.bO,cs:$,b:M,c:C,d:R,e:_,bq:wn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Zu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(_,C,M,Y,j,R,N,W){var V=N.a,J=N.b;return S(ae,p(Te,Y,0,W),mc,Ju,ua,{b6:b,O:J,bd:V.bd,bM:V.bM,bN:V.bN,bO:V.bO,cw:x,b:M,c:C,d:R,cV:w,e:_,bq:wn(r),f:j})}))}}),Gg=function(){var e=h([{a_:o(Fe,0,1)},{a_:o(Fe,1,1)},{a_:o(Fe,2,1)},{a_:o(Fe,0,-1)},{a_:o(Fe,1,-1)},{a_:o(Fe,2,-1)}]),r=h([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(Jn,e,r)}(),Ig={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",triangleVertexPositions:"bq",viewMatrix:"f"}},pc=function(e){return rt(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(bi,t,u),Ig,pi,Gg,{b:a,c:n,d:c,e:r,b$:l,bq:wn(e),f:i})}))},Og=E(function(e,r,n,a){var t=o(Hg,n,a),i=P(e,r);return i.a?i.b?qn(h([t,pc(a)])):t:i.b?pc(a):k}),Ug=v(function(e,r){return L(Og,!0,!0,e,r)}),qg=v(function(e,r){var n=zr(r),a=zr(e),t=Lr(r),i=Lr(e),c=Pr(r),l=Pr(e);return{dT:o(le,l,c),dU:o(le,i,t),dV:o(le,a,n),dW:o(se,l,c),dX:o(se,i,t),dY:o(se,a,n)}}),Jg=function(e){var r=qo(e),n=r.a,a=r.b;return o(qg,n,a)},bc={src:`
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
    `,attributes:{lineSegmentVertex:"dB"},uniforms:{lineSegmentEndPoint:"dz",lineSegmentStartPoint:"dA",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xg=v(function(e,r){return{$:1,a:e,b:r}}),Zg=Xg({dj:2,ds:0,d_:1}),gc=Zg(h([P({dB:0},{dB:1})])),Qg=v(function(e,r){var n=Jg(r),a=H(n),t=qo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,k;var l=e.b.a;return o(ge,a,ee(function($,s,d,m,f,g,b,w){return S(ae,w,bc,$i,gc,{av:l,dz:ke(c),dA:ke(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,m,f,g,b,w,x){return S(ae,x,bc,fi,gc,{aN:o(et,Xn(u),l),dz:ke(c),dA:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),Kg=v(function(e,r){return o(Qg,e,r)}),hc=v(function(e,r){var n=e,a=r;return n/a}),eh=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(T,i,t);if(Ue(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),_c=v(function(e,r){return e<1?z:S(eh,0,e,e,r,z)}),rh=v(function(e,r){var n=e.bV,a=e.n,t=e.K,i=t,c=i.a,l=i.b;return o(T,{n:Ka(a),bV:ke(n),K:o(Fe,c,l)},r)}),nh=function(e){var r=p(Uc,rh,z,ui(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,li(e)),i=o(tv,n,a);return L(zu,i,e,t,0)}else return ci},iv=v(function(e,r){var n=e,a=r,t=rn(a);return{fY:t*rn(n),f0:t*nn(n),da:nn(a)}}),ah=function(){var e=Qe(1),r=72,n=o(Kr,0,r-1),a=o(_c,r,o(Bn,ar,oo(1))),t=xo(r/2),i=o(Kr,0,t-1),c=o(_c,t,o(Bn,Jr(90),Jr(-90))),l=vi(Ie(o(ne,function(s){return o(ne,function(d){return{n:_n(o(iv,s,d)),bV:p(me,o(te,kn(d)*kn(s),e),o(te,kn(d)*Ra(s),e),o(te,Ra(d),e)),K:P(o(hc,s,oo(1)),o(hc,o(Ln,Jr(90),d),Jr(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ie(o(ne,function(s){return Ie(o(ne,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([F(b,g,m),F(b,m,f)])},i))},n));return ii(nh(o(Bu,l,$)))}(),ja=72,va=2*ja,th=v(function(e,r){e:for(;;){var n=va+1,a=o(ka,va,2*e+3),t=o(ka,va,2*e+2),i=2*e+1,c=2*e,l=va,u=o(T,F(l,c,t),o(T,F(c,a,t),o(T,F(c,i,a),o(T,F(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),oh=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ih=v(function(e,r){e:for(;;){var n=p(oh,0,2*De,e/ja),a={bx:n,bR:0,bY:1},t={bx:n,bR:1,bY:1},i=o(T,a,o(T,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ch=function(){var e=o(ih,ja-1,h([{bx:0,bR:0,bY:0},{bx:0,bR:1,bY:0}])),r=o(th,ja-1,z);return o(Jn,e,r)}(),lh={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bR",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},wc=function(e){return rt(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(bi,!0,u),lh,pi,ch,{av:p(On,0,0,1),b:a,c:n,d:c,e:r,b$:l,f:i})}))},uh=function(e){var r=Du(e);return{du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:r.fY,H:r.f0,I:r.da,bZ:1}},vh=v(function(e,r){return o(Ku,uh(e),r)}),$h=E(function(e,r,n,a){var t=o(di,n,ah),i=function(){var u=P(e,r);return u.a?u.b?qn(h([t,wc()])):t:u.b?wc():k}(),c=Xo(a),l=c;return o(vh,o(Kt,Dr,Jo(a)),o(mi,F(l,l,l),i))}),fh=v(function(e,r){return L($h,!0,!0,e,r)}),sh=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),dh=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),mh=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(av,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(sh,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Xl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(dh,n,a,t,i,c)}},ph=mh,cv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(kg,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Ug,t,n)]);case 3:var t=e.a,a=e.b;return h([o(fh,ph(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Wg,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Kg,Mg(c),l)]);default:var u=e.a;return o(Qo,cv,u)}},bh=function(e){return o(Qo,cv,e)},gh=v(function(e,r){return w3({aI:Vp(e.ez),eC:e.eC,aJ:Bp(.5),cd:e.cd,aK:P(Zi(Re(e.b_.fW)),Zi(Re(e.b_.e1))),aP:bh(r),fE:!0,fN:o(iv,fr(e.fM),fr(e.fO)),ep:In})}),hh=v(function(e,r){return o(gh,{ez:L(kl,0,0,0,0),eC:Il(e),cd:e.cd,b_:e.b_,fM:o(_r,"sunlight azimuth",e),fO:o(_r,"sunlight elevation",e)},h([Lp(e),o(Fp,e,r)]))}),_h=v(function(e,r){return o(I,h([o(be,"width","100%")]),h([np,o(hh,e,r)]))}),wh=L(Ym,_h,ep,Um,Hm);const yh={Main:{init:wh(o(A,function(e){return Ae({e8:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ae({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fV:e})},o(D,"clock",fe))},o(D,"devicePixelRatio",fe))},o(D,"dt",fe))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Ae({ev:d,eI:s,di:$,eP:u,fe:l,fv:c,fA:i,fF:t,eo:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",Pa(An)))},o(D,"left",Z))},o(D,"pressedKeys",Pa(An)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Ae({di:$,dt:u,fj:l,fB:c,fC:i,eo:t,fY:a,f0:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",fe))},o(D,"y",fe))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Ae({e1:n,fW:r})},o(D,"height",fe))},o(D,"width",fe))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Ae({eK:r,eL:e})},o(D,"deltaX",fe))},o(D,"deltaY",fe)))))))(0)}},B={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},xh=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(B.keyboard.downs.push(f.code),B.keyboard.pressedKeys.push(f.code),r(f)&&(B.keyboard.control=!0),n(f)&&(B.keyboard.alt=!0),a(f)&&(B.keyboard.shift=!0),t(f)&&(B.keyboard.left=!0),i(f)&&(B.keyboard.right=!0),c(f)&&(B.keyboard.up=!0),l(f)&&(B.keyboard.down=!0))}),window.addEventListener("keyup",f=>{B.keyboard.pressedKeys=B.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(B.keyboard.control=!1,B.keyboard.pressedKeys=[]),n(f)&&(B.keyboard.alt=!1),a(f)&&(B.keyboard.shift=!1),t(f)&&(B.keyboard.left=!1),i(f)&&(B.keyboard.right=!1),c(f)&&(B.keyboard.up=!1),l(f)&&(B.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{B.pointer.x=-.5*B.screen.width+f.pageX,B.pointer.y=.5*B.screen.height-f.pageY,u(f)&&(B.pointer.down=!0,B.pointer.isDown=!0),$(f)&&(B.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{B.pointer.move=!0,B.pointer.x=-.5*B.screen.width+f.pageX,B.pointer.y=.5*B.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(B.pointer.up=!0,B.pointer.isDown=!1),$(f)&&(B.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(B.pointer.up=!0,B.pointer.isDown=!1),$(f)&&(B.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{B.wheel.deltaX=f.deltaX,B.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(B)}),window.addEventListener("focus",f=>{s(B)}),window.addEventListener("visibilitychange",f=>{s(B)}),window.addEventListener("resize",()=>{B.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-B.clock;b<.009||(B.dt=b,B.clock=g,e.ports.tick.send(B),d(B)),window.requestAnimationFrame(m)}},Sh=()=>{zt("pointerdown"),zt("wheel"),zt("keydown")},zt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Ch=yh.Main.init({node:document.querySelector("#app div"),flags:{inputs:B}});Sh();xh(Ch);
