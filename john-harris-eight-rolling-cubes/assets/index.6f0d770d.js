const sv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};sv();function Mr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Mr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return Mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Na(e){return Mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function io(e){return Mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function co(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Wa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function dv(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var mv=[];function pv(e){return e.length}var bv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),gv=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),hv=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var _v=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+wv()),r});function wv(e){return"<internals>"}function cn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ye(e,r){for(var n,a=[],t=kt(e,r,0,a);t&&(n=a.pop());t=kt(n.a,n.b,0,a));return t}function kt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&cn(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=Di(e),r=Di(r));for(var t in e)if(!kt(e[t],r[t],n+1,a))return!1;return!0}v(Ye);v(function(e,r){return!Ye(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return U(e,r)<0});v(function(e,r){return U(e,r)<1});v(function(e,r){return U(e,r)>0});v(function(e,r){return U(e,r)>=0});var yv=v(function(e,r){var n=U(e,r);return n<0?Yc:n?ls:Jc}),Rn=0;function L(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ie(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=sr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=sr(e.a,r);return n}var z={$:0};function sr(e,r){return{$:1,a:e,b:r}}var xv=v(sr);function b(e){for(var r=z,n=e.length;n--;)r=sr(e[n],r);return r}function Za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Sv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return b(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});v(function(e,r){return b(Za(r).sort(function(n,a){return U(e(n),e(a))}))});v(function(e,r){return b(Za(r).sort(function(n,a){var t=o(e,n,a);return t===Jc?0:t===Yc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Cv=v(Math.pow);v(function(e,r){return r%e});var Lv=v(function(e,r){var n=r%e;return e===0?cn(11):n>0&&e<0||n<0&&e>0?n+e:n}),zv=Math.PI,Pv=Math.cos,kv=Math.sin,Tv=Math.tan,Mv=Math.atan;v(Math.atan2);function Dv(e){return e}function Av(e){return e===1/0||e===-1/0}var Bv=Math.ceil,Fv=Math.floor,Vv=Math.round,Ev=Math.sqrt,gi=Math.log,Rv=isNaN;function jv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Nv=v(function(e,r){return e+r});function Wv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Zv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Iv=v(function(e,r){return r.split(e)}),Ov=v(function(e,r){return r.join(e)}),Uv=y(function(e,r,n){return n.slice(e,r)});function qv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Jv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Yv=v(function(e,r){return r.indexOf(e)>-1}),Xv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Qv=v(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function xc(e){return e+""}function Kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function e$(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function r$(e){return Za(e).join("")}function n$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function a$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function t$(e){return{$:0,a:e}}function lo(e){return{$:2,b:e}}var o$=lo(function(e){return typeof e=="boolean"?ve(e):or("a BOOL",e)}),i$=lo(function(e){return typeof e=="number"?ve(e):or("a FLOAT",e)}),c$=lo(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):or("a STRING",e)});function l$(e){return{$:3,b:e}}var u$=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Dr(e,r){return{$:9,f:e,g:r}}var v$=v(function(e,r){return{$:10,b:r,h:e}}),$$=v(function(e,r){return Dr(e,[r])}),f$=y(function(e,r,n){return Dr(e,[r,n])});E(function(e,r,n,a){return Dr(e,[r,n,a])});ge(function(e,r,n,a,t){return Dr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return Dr(e,[r,n,a,t,i])});Na(function(e,r,n,a,t,i,c){return Dr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Dr(e,[r,n,a,t,i,c,l])});io(function(e,r,n,a,t,i,c,l,u){return Dr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return He(e,n)}catch(a){return we(o(wo,"This is not valid JSON! "+a.message,r))}});var Sc=v(function(e,r){return He(e,r)});function He(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):or("null",r);case 3:return Xn(r)?hi(e.b,r,b):or("a LIST",r);case 4:return Xn(r)?hi(e.b,r,s$):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var $=He(e.b,r[n]);return Ke($)?$:we(o(Ai,n,$.a));case 7:var a=e.e;if(!Xn(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=He(e.b,r[a]);return Ke($)?$:we(o(Xc,a,$.a));case 8:if(typeof r!="object"||r===null||Xn(r))return or("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var $=He(e.b,r[i]);if(!Ke($))return we(o(Ai,i,$.a));t=sr(L(i,$.a),t)}return ve(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=He(l[u],r);if(!Ke($))return $;c=c($.a)}return ve(c);case 10:var $=He(e.b,r);return Ke($)?He(e.h($.a),r):$;case 11:for(var s=z,d=e.g;d.b;d=d.b){var $=He(d.a,r);if(Ke($))return $;s=sr($.a,s)}return we(us(Re(s)));case 1:return we(o(wo,e.a,r));case 0:return ve(e.a)}}function hi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=He(e,r[i]);if(!Ke(c))return we(o(Xc,i,c.a));t[i]=c.a}return ve(n(t))}function Xn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function s$(e){return o(zs,e.length,function(r){return e[r]})}function or(e,r){return we(o(wo,"Expecting "+e,r))}function Yr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Yr(e.b,r.b);case 6:return e.d===r.d&&Yr(e.b,r.b);case 7:return e.e===r.e&&Yr(e.b,r.b);case 9:return e.f===r.f&&_i(e.g,r.g);case 10:return e.h===r.h&&Yr(e.b,r.b);case 11:return _i(e.g,r.g)}}function _i(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Yr(e[a],r[a]))return!1;return!0}var d$=v(function(e,r){return JSON.stringify(r,null,e)+""});function Cc(e){return e}y(function(e,r,n){return n[e]=r,n});function Zr(e){return{$:0,a:e}}function m$(e){return{$:1,a:e}}function yr(e){return{$:2,b:e,c:null}}var Tt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function p$(e){return{$:5,b:e}}var b$=0;function uo(e){var r={$:0,e:b$++,f:e,g:null,h:[]};return vo(r),r}function Lc(e){return yr(function(r){r(Zr(uo(e)))})}function zc(e,r){e.h.push(r),vo(e)}var g$=v(function(e,r){return yr(function(n){zc(e,r),n(Zr(Rn))})}),at=!1,wi=[];function vo(e){if(wi.push(e),!at){for(at=!0;e=wi.shift();)h$(e);at=!1}}function h$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,vo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return $o(r,a,e.e7,e.fT,e.fM,function(){return function(){}})});function $o(e,r,n,a,t,i){var c=o(Sc,e,r?r.flags:void 0);Ke(c)||cn(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=_$(l,m);function m(f,h){var g=o(a,f,$);s($=g.a,h),xi(l,g.b,t($))}return xi(l,u.b,t($)),d?{ports:d}:{}}var ur={};function _$(e,r){var n;for(var a in ur){var t=ur[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=y$(t,r)}return n}function w$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function y$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Tt,l,p$(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?P(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=uo(o(Tt,l,e.b))}var x$=v(function(e,r){return yr(function(n){e.g(r),n(Zr(Rn))})});v(function(e,r){return o(g$,e.h,{$:0,a:r})});function Pc(e){return function(r){return{$:1,k:e,l:r}}}function S$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var yi=[],tt=!1;function xi(e,r,n){if(yi.push({p:e,q:r,r:n}),!tt){tt=!0;for(var a;a=yi.shift();)C$(a.p,a.q,a.r);tt=!1}}function C$(e,r,n){var a={};ga(!0,r,a,null),ga(!1,n,a,null);for(var t in e)zc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ga(e,r,n,a){switch(r.$){case 1:var t=r.k,i=L$(e,t,a,r.l);n[t]=z$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ga(e,c.a,n,a);return;case 3:ga(e,r.o,n,{s:r.n,t:a});return}}function L$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ur[r].e:ur[r].f;return o(i,t,a)}function z$(e,r,n){return n=n||{i:z,j:z},e?n.i=sr(r,n.i):n.j=sr(r,n.j),n}function P$(e){ur[e]&&cn(3)}v(function(e,r){return r});function k$(e,r){return P$(e),ur[e]={f:T$,u:r,a:M$},Pc(e)}var T$=v(function(e,r){return function(n){return e(r(n))}});function M$(e,r){var n=z,a=ur[e].u,t=Zr(null);ur[e].b=t,ur[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(Sc,a,c);Ke(l)||cn(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ha,hr=typeof document!="undefined"?document:{};function fo(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(zr(e,function(){}),t),{}});function Mt(e){return{$:0,a:e}}var kc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:so(n),e:t,f:e,b:i}})}),xr=kc(void 0),D$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:so(n),e:t,f:e,b:i}})}),A$=D$(void 0);function B$(e,r,n,a){return{$:3,d:so(e),g:r,h:n,i:a}}var F$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Ar(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Ar([e,r],function(){return e(r)})});y(function(e,r,n){return Ar([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Ar([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Ar([e,r,n,a,t],function(){return P(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return Ar([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Na(function(e,r,n,a,t,i,c){return Ar([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Ar([e,r,n,a,t,i,c,l],function(){return co(e,r,n,a,t,i,c,l)})});io(function(e,r,n,a,t,i,c,l,u){return Ar([e,r,n,a,t,i,c,l,u],function(){return Wa(e,r,n,a,t,i,c,l,u)})});var Tc=v(function(e,r){return{$:"a0",n:e,o:r}}),V$=v(function(e,r){return{$:"a1",n:e,o:r}}),Mc=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}}),E$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function R$(e){return e=="script"?"p":e}function j$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(Tc,r.n,N$(e,r.o)):r});function N$(e,r){var n=Lo(r);return{$:r.$,a:n?p(Ps,n<3?W$:Z$,Be(e),r.a):o(xa,e,r.a)}}var W$=v(function(e,r){return L(e(r.a),r.b)}),Z$=v(function(e,r){return{ak:e(r.ak),c$:r.c$,cP:r.cP}});function so(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Si(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Si(c,t,i):c[t]=i}return r}function Si(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function zr(e,r){var n=e.$;if(n===5)return zr(e.k||(e.k=e.m()),r);if(n===0)return hr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=zr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Dt(c,r,e.d),c}var c=e.f?hr.createElementNS(e.f,e.c):hr.createElement(e.c);ha&&e.c=="a"&&c.addEventListener("click",ha(c)),Dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)fo(c,zr(n===1?l[u]:l[u].b,r));return c}function Dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?G$(e,t):a==="a0"?O$(e,r,t):a==="a3"?H$(e,t):a==="a4"?I$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function G$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function H$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function I$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function O$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=U$(r,i),e.addEventListener(t,c,mo&&{passive:Lo(i)<2}),a[t]=c}}var mo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){mo=!0}}))}catch{}function U$(e,r){function n(a){var t=n.q,i=He(t.a,a);if(!!Ke(i)){for(var c=Lo(t),l=i.a,u=c?c<3?l.a:l.ak:l,$=c==1?l.b:c==3&&l.c$,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cP)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function q$(e,r){return e.$==r.$&&Yr(e.a,r.a)}function Dc(e,r){var n=[];return er(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function er(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=nf(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];er(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!J$(d,m):d!==m)&&he(n,2,a,m),er(h,g,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:Ci(e,r,n,a,Y$);return;case 2:Ci(e,r,n,a,X$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=po(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function J$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ci(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=po(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function po(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=po(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&q$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Y$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];er(s,i[$],n,++a),a+=s.b||0}}function X$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var h=l[d],g=u[m],w=h.a,x=g.a,_=h.b,C=g.b,T=void 0,W=void 0;if(w===x){f++,er(_,C,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,Z=j.b;W=x===N}if(R){var F=R.a,J=R.b;T=w===F}if(T&&W){f++,er(_,J,t,f),bn(i,t,w,C,m,c),f+=_.b||0,f++,gn(i,t,w,Z,f),f+=Z.b||0,d+=2,m+=2;continue}if(T){f++,bn(i,t,x,C,m,c),er(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(W){f++,gn(i,t,w,_,f),f+=_.b||0,f++,er(Z,C,t,f),f+=Z.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,gn(i,t,w,_,f),bn(i,t,x,C,m,c),f+=_.b||0,f++,er(Z,J,t,f),f+=Z.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var h=l[d],_=h.b;gn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],g=u[m];bn(i,t,g.a,g.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var Ac="_elmW6BL";function bn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];er(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}bn(e,r,n+Ac,a,t,i)}function gn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];er(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}gn(e,r,n+Ac,a,t)}function Bc(e,r,n,a){hn(e,r,n,0,0,r.b,a)}function hn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)Bc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&hn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&hn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return hn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,w=0;w<h.length;w++){t++;var x=m===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=hn(g[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Fc(e,r,n,a){return n.length===0?e:(Bc(e,r,n,a),_a(e,n))}function _a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Q$(t,a);t===e&&(e=i)}return e}function Q$(e,r){switch(r.$){case 0:return K$(e,r.s,r.u);case 4:return Dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return _a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(zr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=_a(e,i.w),e;case 8:return ef(e,r);case 5:return r.s(e);default:cn(10)}}function K$(e,r,n){var a=e.parentNode,t=zr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function ef(e,r){var n=r.s,a=rf(n.y,r);e=_a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:zr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&fo(e,a),e}function rf(e,r){if(!!e){for(var n=hr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;fo(n,i.c===2?i.s:zr(i.z,r.u))}return n}}function bo(e){if(e.nodeType===3)return Mt(e.textContent);if(e.nodeType!==1)return Mt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=sr(o(Br,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,$=e.childNodes,a=$.length;a--;)u=sr(bo($[a]),u);return p(xr,l,r,u)}function nf(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var af=E(function(e,r,n,a){return $o(r,a,e.e7,e.fT,e.fM,function(t,i){var c=e.fV,l=a.node,u=bo(l);return Vc(i,function($){var s=c($),d=Dc(u,s);l=Fc(l,u,d,t),u=s})})});E(function(e,r,n,a){return $o(r,a,e.e7,e.fT,e.fM,function(t,i){var c=e.cX&&e.cX(t),l=e.fV,u=hr.title,$=hr.body,s=bo($);return Vc(i,function(d){ha=c;var m=l(d),f=xr("body")(z)(m.eB),h=Dc(s,f);$=Fc($,s,h,t),s=f,ha=0,u!==m.fQ&&(hr.title=u=m.fQ)})})});var wa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Vc(e,r){r(e);var n=0;function a(){n=n===1?0:(wa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&wa(a),n=2)}}v(function(e,r){return o(ko,zo,yr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(ko,zo,yr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(ko,zo,yr(function(){history.replaceState({},"",r),e()}))});var tf={addEventListener:function(){},removeEventListener:function(){}},of=typeof window!="undefined"?window:tf;y(function(e,r,n){return Lc(yr(function(a){function t(i){uo(n(i))}return e.addEventListener(r,t,mo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=He(e,r);return Ke(n)?re(n.a):q});function Ec(e,r){return yr(function(n){wa(function(){var a=document.getElementById(e);n(a?Zr(r(a)):m$(Ts(e)))})})}function cf(e){return yr(function(r){wa(function(){r(Zr(e()))})})}v(function(e,r){return Ec(r,function(n){return n[e](),Rn})});v(function(e,r){return cf(function(){return of.scroll(e,r),Rn})});y(function(e,r,n){return Ec(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var lf=v(function(e,r){var n="g";e.fm&&(n+="m"),e.eD&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var uf=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):q}a.push(P(kl,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):q}return n(P(kl,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var vf=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/$f(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function $f(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var go=new Float64Array(3),Li=new Float64Array(3),zi=new Float64Array(3),ff=y(function(e,r,n){return new Float64Array([e,r,n])}),sf=function(e){return e[0]},df=function(e){return e[1]},mf=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var pf=function(e){return new Float64Array([e.fZ,e.f1,e.da])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Rc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Rc);function jc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ya(Rc(e,r,n),n)}v(jc);function Nc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ya(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Nc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var bf=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),_n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(_n);function At(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(At);v(function(e,r){var n,a=go,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=_n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(_n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(_n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(_n(r,a)+e[14])/n,t});var gf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var hf=function(e){return{fZ:e[0],f1:e[1],da:e[2],et:e[3]}},_f=function(e){return new Float64Array([e.fZ,e.f1,e.da,e.et])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var yf=new Float64Array(16),xf=new Float64Array(16),Sf=function(e){var r=new Float64Array(16);return r[0]=e.dC,r[1]=e.dG,r[2]=e.dK,r[3]=e.dO,r[4]=e.dD,r[5]=e.dH,r[6]=e.dL,r[7]=e.dP,r[8]=e.dE,r[9]=e.dI,r[10]=e.dM,r[11]=e.dQ,r[12]=e.dF,r[13]=e.dJ,r[14]=e.dN,r[15]=e.dR,r},Cf=function(e){return{dC:e[0],dG:e[1],dK:e[2],dO:e[3],dD:e[4],dH:e[5],dL:e[6],dP:e[7],dE:e[8],dI:e[9],dM:e[10],dQ:e[11],dF:e[12],dJ:e[13],dN:e[14],dR:e[15]}};function Wc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Wc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Wc(c,l,i,t,n,a)});function Zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(Zc);E(function(e,r,n,a){return Zc(e,r,n,a,-1,1)});function Gc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],g=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],W=r[2],j=r[3],R=r[4],N=r[5],Z=r[6],F=r[7],J=r[8],Q=r[9],ie=r[10],$e=r[11],oe=r[12],de=r[13],De=r[14],Ce=r[15];return n[0]=a*C+l*T+d*W+g*j,n[1]=t*C+u*T+m*W+w*j,n[2]=i*C+$*T+f*W+x*j,n[3]=c*C+s*T+h*W+_*j,n[4]=a*R+l*N+d*Z+g*F,n[5]=t*R+u*N+m*Z+w*F,n[6]=i*R+$*N+f*Z+x*F,n[7]=c*R+s*N+h*Z+_*F,n[8]=a*J+l*Q+d*ie+g*$e,n[9]=t*J+u*Q+m*ie+w*$e,n[10]=i*J+$*Q+f*ie+x*$e,n[11]=c*J+s*Q+h*ie+_*$e,n[12]=a*oe+l*de+d*De+g*Ce,n[13]=t*oe+u*de+m*De+w*Ce,n[14]=i*oe+$*de+f*De+x*Ce,n[15]=c*oe+s*de+h*De+_*Ce,n}v(Gc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],g=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],W=r[8],j=r[9],R=r[10],N=r[12],Z=r[13],F=r[14];return n[0]=a*g+c*w+$*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+d*x,n[3]=0,n[4]=a*_+c*C+$*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*W+c*j+$*R,n[9]=t*W+l*j+s*R,n[10]=i*W+u*j+d*R,n[11]=0,n[12]=a*N+c*Z+$*F+m,n[13]=t*N+l*Z+s*F+f,n[14]=i*N+u*Z+d*F+h,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ya(r,go);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Nc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*$,g=i*l*$,w=c*l*$,x=i*i*$+u,_=h+f,C=g-m,T=h-f,W=c*c*$+u,j=w+d,R=g+m,N=w-d,Z=l*l*$+u,F=n[0],J=n[1],Q=n[2],ie=n[3],$e=n[4],oe=n[5],de=n[6],De=n[7],Ce=n[8],Cr=n[9],Lr=n[10],nt=n[11],uv=n[12],vv=n[13],$v=n[14],fv=n[15];return a[0]=F*x+$e*_+Ce*C,a[1]=J*x+oe*_+Cr*C,a[2]=Q*x+de*_+Lr*C,a[3]=ie*x+De*_+nt*C,a[4]=F*T+$e*W+Ce*j,a[5]=J*T+oe*W+Cr*j,a[6]=Q*T+de*W+Lr*j,a[7]=ie*T+De*W+nt*j,a[8]=F*R+$e*N+Ce*Z,a[9]=J*R+oe*N+Cr*Z,a[10]=Q*R+de*N+Lr*Z,a[11]=ie*R+De*N+nt*Z,a[12]=uv,a[13]=vv,a[14]=$v,a[15]=fv,a});function Lf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Lf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function zf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(zf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=g,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=jc(e,r,go),t=ya(At(n,a,Li),Li),i=ya(At(a,t,zi),zi),c=yf,l=xf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Gc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Pi=0;function Mn(e,r){for(;r.b;r=r.b)e(r.a)}function ho(e){for(var r=0;e.b;e=e.b)r++;return r}var Pf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},kf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Tf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Mf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Df=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Af=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Bf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ff=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Vf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Ef=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Rf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},jf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Nf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Wf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Hc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ic=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Zf=function(e){e.gl.disable(e.gl.CULL_FACE)},Gf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Hf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},If=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ki=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Of=[jf,Nf,Wf,Hc,Ic,Zf,Gf,Hf,If];function Ti(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Uf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Oc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function qf(e,r,n,a){for(var t=n.a.dj,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,w,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<h;_++)f[g++]=h===1?w[C][x]:w[C][x][_]})}var u=Oc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(ho(n.b)*s);Mn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Jf(e,r){if(r.a.ds>0){var n=e.createBuffer(),a=Yf(r.c,r.a.ds);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dj*ho(r.b),indexBuffer:null,buffers:{}}}function Yf(e,r){var n=new Uint32Array(ho(e)*r),a=0,t;return Mn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Mi(e,r){return e+"#"+r}var Uc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Hc(n),Ic(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Mi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=Pi++,$||($=Ti(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Pi++,s||(s=Ti(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Uf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Xf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Mi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Qf(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Jf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=qf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Oc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Mn(o1(n),i.a),u=0;u<ki.length;u++){var T=n[ki[u]];T.toggle!==n.toggle&&T.enabled&&(Of[u](n),T.enabled=!1,T.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.d_,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d_,0,g.numIndices)}}return Mn(t,e.g),r});function Xf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,w=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(w,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(w,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eJ(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==_&&(e.uniform1i(w,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Qf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Kf=y(function(e,r,n){return B$(r,{g:n,f:{},h:e},is,cs)}),es=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),rs=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),ns=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),as=v(function(e,r){e.contextAttributes.antialias=!0}),ts=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),os=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function is(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Mn(function(t){return o(t1,r,t)},e.h);var n=hr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Pf(function(){return o(Uc,e,n)})):(n=hr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function cs(e,r){return r.f=e.f,Uc(r)}var D=xv,Qn=_v,qc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Qn,e,l,$)}else{var u=c.a;return p(Qn,i,l,u)}});return p(Qn,i,p(Qn,e,r,t),a)}),_o=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(_o,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),Di=function(e){return p(_o,y(function(r,n,a){return o(D,L(r,n),a)}),z,e)},Jc=1,ls=2,Yc=0,we=function(e){return{$:1,a:e}},wo=v(function(e,r){return{$:3,a:e,b:r}}),Ai=v(function(e,r){return{$:0,a:e,b:r}}),Xc=v(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},us=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},vs=Jv,$s=d$,Ve=xc,Rr=v(function(e,r){return o(Ov,e,Za(r))}),yo=v(function(e,r){return b(o(Iv,e,r))}),Qc=function(e){return o(Rr,`
    `,o(yo,`
`,e))},jn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Wr=function(e){return p(jn,v(function(r,n){return n+1}),0,e)},fs=Sv,ss=y(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),rn=v(function(e,r){return p(ss,e,r,z)}),Kc=v(function(e,r){return p(fs,e,o(rn,0,Wr(r)-1),r)}),vr=n$,el=function(e){var r=vr(e);return 97<=r&&r<=122},rl=function(e){var r=vr(e);return r<=90&&65<=r},ds=function(e){return el(e)||rl(e)},ms=function(e){var r=vr(e);return r<=57&&48<=r},ps=function(e){return el(e)||rl(e)||ms(e)},Re=function(e){return p(jn,D,z,e)},ln=Wv,bs=v(function(e,r){return`

(`+(Ve(e+1)+(") "+Qc(gs(r))))}),gs=function(e){return o(hs,e,z)},hs=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=ln(n);if(g.$===1)return!1;var w=g.a,x=w.a,_=w.b;return ds(x)&&o(vs,ps,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(D,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,$=o(D,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Rr,"",Re(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ve(Wr(s))+" ways:"));return o(Rr,`

`,o(D,h,o(Kc,bs,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Rr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Rr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return h+(Qc(o($s,4,f))+(`

`+m))}}),je=32,Bt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ft=mv,xo=Bv,So=v(function(e,r){return gi(r)/gi(e)}),_s=Dv,Dn=xo(o(So,2,je)),nl=P(Bt,0,Dn,Ft,Ft),al=bv,tl=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var ws=Fv,Vt=pv,Oe=v(function(e,r){return U(e,r)>0?e:r}),ys=function(e){return{$:0,a:e}},Co=gv,xs=v(function(e,r){e:for(;;){var n=o(Co,je,e),a=n.a,t=n.b,i=o(D,ys(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),Ss=function(e){var r=e.a;return r},Cs=v(function(e,r){e:for(;;){var n=xo(r/je);if(n===1)return o(Co,je,e).a;var a=o(xs,e,z),t=n;e=a,r=t;continue e}}),ol=v(function(e,r){if(r.l){var n=r.l*je,a=ws(o(So,je,n-1)),t=e?Re(r.y):r.y,i=o(Cs,t,r.l);return P(Bt,Vt(r.o)+n,o(Oe,5,a*Dn),i,r.o)}else return P(Bt,Vt(r.o),Dn,Ft,r.o)}),Ls=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ol,!1,{y:a,l:n/je|0,o:t});var i=tl(p(al,je,r,e)),c=e,l=r-je,u=n,$=o(D,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),zs=v(function(e,r){if(e<=0)return nl;var n=e%je,a=p(al,n,e-n,r),t=e-n-je;return S(Ls,r,t,e,z,a)}),Ke=function(e){return!e.$},A=v$,X=o$,M=u$,fe=i$,xa=$$,Ps=f$,Be=t$,Lo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=xr("div"),ks=function(e){return{$:2,a:e}},il=v(function(e,r){return e}),cl=v(function(e,r){return{bB:r.bB,eH:e,cd:r.cd,eQ:r.eQ,fd:r.fd,cO:r.cO,b_:r.b_,fW:r.fW}}),$r=function(e){return e},Ts=$r,Bi=Xe(function(e,r,n,a,t,i){return{$7:i,dq:r,d2:a,d5:n,d8:e,d9:t}}),Ms=Yv,jr=Zv,Xr=Uv,Nn=v(function(e,r){return e<1?r:p(Xr,e,jr(r),r)}),Ga=Qv,Ha=function(e){return e===""},Ia=v(function(e,r){return e<1?"":p(Xr,0,e,r)}),ll=Kv,Fi=ge(function(e,r,n,a,t){if(Ha(t)||o(Ms,"@",t))return q;var i=o(Ga,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=ll(o(Nn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(Bi,e,o(Ia,c,t),u,r,n,a))}else return re(_e(Bi,e,t,q,r,n,a))}),Vi=E(function(e,r,n,a){if(Ha(a))return q;var t=o(Ga,"/",a);if(t.b){var i=t.a;return S(Fi,e,o(Nn,i,a),r,n,o(Ia,i,a))}else return S(Fi,e,"/",r,n,a)}),Ei=y(function(e,r,n){if(Ha(n))return q;var a=o(Ga,"?",n);if(a.b){var t=a.a;return P(Vi,e,re(o(Nn,t+1,n)),r,o(Ia,t,n))}else return P(Vi,e,q,r,n)});v(function(e,r){if(Ha(r))return q;var n=o(Ga,"#",r);if(n.b){var a=n.a;return p(Ei,e,re(o(Nn,a+1,r)),o(Ia,a,r))}else return p(Ei,e,q,r)});var Ds=Xv,zo=function(e){},Wn=Zr,As=Wn(0),ul=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(jn,e,r,Re(d)):P(ul,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Sr=y(function(e,r,n){return P(ul,e,r,0,n)}),ne=v(function(e,r){return p(Sr,v(function(n,a){return o(D,e(n),a)}),z,r)}),Sa=Tt,Po=v(function(e,r){return o(Sa,function(n){return Wn(e(n))},r)}),Bs=y(function(e,r,n){return o(Sa,function(a){return o(Sa,function(t){return Wn(o(e,a,t))},n)},r)}),Fs=function(e){return p(Sr,Bs(D),Wn(z),e)},Vs=x$,Es=v(function(e,r){var n=r;return Lc(o(Sa,Vs(e),n))}),Rs=y(function(e,r,n){return o(Po,function(a){return 0},Fs(o(ne,Es(e),r)))}),js=y(function(e,r,n){return Wn(0)}),Ns=v(function(e,r){var n=r;return o(Po,e,n)});ur.Task=w$(As,Rs,js,Ns);var Ws=Pc("Task"),ko=v(function(e,r){return Ws(o(Po,e,r))}),Zs=af,Gs=jv,Ca={$:1},vl=function(e){return{$:2,a:e}},Oa={$:0},Ue=v(function(e,r){return{$:0,a:e,b:r}}),K=y(function(e,r,n){return r(e(n))}),un=function(e){var r=e.b.A;return r.a},Hs=function(e){var r=e.a,n=e.b.S,a=e.b.A,t=e.b.aa;if(t.b){var i=t.a,c=t.b;return re(o(Ue,r,{A:i,aa:c,S:o(D,a,n)}))}else return q},$l=function(e){var r=e.b;return o(Ue,Oa,r)},dr=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Is=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cO.di?$l(n):n;case 2:var i=a.a.c0;return(U(i+r.eQ,un(n).bB)>0?o(K,Hs,dr(o(Ue,Ca,t))):$r)(o(Ue,vl({c0:i+r.eQ}),t));default:var c=t.A,l=c.a,u=c.b,$=o(cl,l.eH,Ie(r,{bB:l.bB+r.eQ})),s=o(e,$,u);return o(Ue,Oa,{A:L($,s),aa:z,S:o(D,t.A,t.S)})}}),fl=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Os=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Us=v(function(e,r){return Re(p(Os,e,r,z))}),sl=y(function(e,r,n){if(r<=0)return z;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,g=h.a,w=h.b;return e>1e3?o(D,_,o(D,c,o(D,s,o(D,g,o(Us,r-4,w))))):o(D,_,o(D,c,o(D,s,o(D,g,p(sl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),qs=v(function(e,r){return p(sl,0,e,r)}),Js=v(function(e,r){var n=r.b.S,a=r.b.A,t=r.b.aa,i=ue(Re(n),ue(b([a]),t)),c=o(qs,e,i),l=o(fl,e,i);if(l.b){var u=l.a,$=l.b;return o(Ue,Ca,{A:u,aa:$,S:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(Ue,Ca,{A:d,aa:z,S:m})}else return r}}),Ys=function(e){var r=e.b;return o(Ue,Ca,r)},Xs=function(e){var r=e.b;return o(Ue,vl({c0:un(e).bB}),r)},Qs=v(function(e,r){switch(e.$){case 1:return Ys(r);case 2:return $l(r);case 3:return Xs(r);default:var n=e.a;return o(Js,n,r)}}),dl=v(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),Ks=v(function(e,r){return Ie(r,{au:e(r.au)})}),ed=function(e){return{$:3,a:e}},ml=function(e){return{$:2,a:e}},pl=v(function(e,r){return{$:0,a:e,b:r}}),rd=v(function(e,r){return{$:1,a:e,b:r}}),ye=v(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),Y=function(e){return e<0?-e:e},To=e$,nd=y(function(e,r,n){return o(dr,0/0,To(o(e,r,n)))}),Mo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ad=Hv,bl=function(e){return p(ad,D,z,e)},td=v(function(e,r){var n=o(Mo,function(a){return a!=="0"&&a!=="."},bl(r));return ue(e&&n?"-":"",r)}),pe=xc,Et=Nv,gl=a$,hl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ln(n);if(a.$===1)return"01";var t=a.a;return o(Et,"0",hl(t))}else{var i=vr(r);return i>=48&&i<57?o(Et,gl(i+1),n):"0"}},Rt=Av,od=Rv,Ua=function(e){return o(Et,e,"")},_l=y(function(e,r,n){return e<=0?n:p(_l,e>>1,ue(r,r),e&1?ue(n,r):n)}),An=v(function(e,r){return p(_l,e,r,"")}),jt=y(function(e,r,n){return ue(n,o(An,e-jr(n),Ua(r)))}),Nt=Gv,wl=function(e){var r=o(yo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},id=function(e){var r=o(yo,"e",pe(Y(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,ll(o(Ds,"+",t)?o(Nn,1,t):t)),c=wl(n),l=c.a,u=c.b,$=ue(l,u),s=i<0?o(dr,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,dl(Ua),ln(ue(o(An,Y(i),"0"),$))))):p(jt,i+1,"0",$);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},cd=y(function(e,r,n){if(Rt(n)||od(n))return pe(n);var a=n<0,t=wl(id(Y(n))),i=t.a,c=t.b,l=jr(i)+r,u=ue(o(An,-l+1,"0"),p(jt,l,"0",ue(i,c))),$=jr(u),s=o(Oe,1,l),d=o(e,a,p(Xr,s,$,u)),m=p(Xr,0,s,u),f=d?Nt(o(dr,"1",o(ye,hl,ln(Nt(m))))):m,h=jr(f),g=f==="0"?f:r<=0?ue(f,o(An,Y(r),"0")):U(r,jr(c))<0?p(Xr,0,h-r,f)+("."+p(Xr,h-r,h,f)):ue(i+".",p(jt,r,"0",c));return o(td,a,g)}),yl=cd(v(function(e,r){var n=ln(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(vr(t))})),ld=nd(yl),ud=y(function(e,r,n){var a=o(So,10,Y(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(ld,t,n)}),xl=yv,qa=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(xl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),mr={$:-2},nn=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(H,0,r,n,S(H,1,$,s,d,m),S(H,1,i,c,l,u))}else return S(H,e,i,c,S(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,w=f.d,x=f.e,m=a.e;return S(H,0,$,s,S(H,1,h,g,w,x),S(H,1,r,n,m,t))}else return S(H,e,r,n,a,t)}),Wt=y(function(e,r,n){if(n.$===-2)return S(H,0,e,r,mr,mr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(xl,e,t);switch(u){case 0:return S(nn,a,t,i,p(Wt,e,r,c),l);case 1:return S(H,a,t,r,c,l);default:return S(nn,a,t,i,c,p(Wt,e,r,l))}}),Cn=y(function(e,r,n){var a=p(Wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(H,1,t,i,c,l)}else{var u=a;return u}}),vd=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Sl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,h=m.c,g=m.d,w=m.e,x=$.e;return S(H,0,f,h,S(H,1,n,a,S(H,0,i,c,l,u),g),S(H,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(H,1,n,a,S(H,0,i,c,l,u),S(H,0,s,d,m,x))}else return e},Ri=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,g=f.c,w=f.d,x=f.e;return S(H,0,i,c,S(H,1,u,$,s,d),S(H,1,n,a,m,S(H,0,h,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var h=T.b,g=T.c,w=T.d,x=T.e;return S(H,1,n,a,S(H,0,i,c,C,m),S(H,0,h,g,w,x))}else return e},$d=Na(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(H,n,l,u,$,S(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ri(r)}else break e;else return c.a,c.d,Ri(r);else break e;return r}}),$a=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(H,r,n,a,$a(t),l);var u=Sl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(nn,$,s,d,$a(m),f)}else return mr}else return S(H,r,n,a,$a(t),l)}else return mr},Ln=v(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(H,n,a,t,o(Ln,e,i),c);var u=Sl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(nn,$,s,d,o(Ln,e,m),f)}else return mr}else return S(H,n,a,t,o(Ln,e,i),c);else return o(fd,e,co($d,e,r,n,a,t,i,c))}),fd=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Ye(e,a)){var l=vd(c);if(l.$===-1){var u=l.b,$=l.c;return S(nn,n,u,$,i,$a(c))}else return mr}else return S(nn,n,a,t,i,o(Ln,e,c))}else return mr}),sd=v(function(e,r){var n=o(Ln,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(H,1,a,t,i,c)}else{var l=n;return l}}),Kn=y(function(e,r,n){var a=r(o(qa,e,n));if(a.$)return o(sd,e,n);var t=a.a;return p(Cn,e,t,n)}),dd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(rd,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(pl,L(i,c),p(ud,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){return a.$===3?ed(n):a}));default:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){return a.$===2?ml(n):a}))}},md=function(e){return Ks(dd(e))},pd=v(function(e,r){return o(ne,md(e),r)}),bd=v(function(e,r){return Ie(r,{eH:o(pd,e,r.eH)})}),gd=v(function(e,r){var n=r.a,a=r.b;return o(Ue,n,Ie(a,{A:o(dl,bd(e),a.A)}))}),hd=v(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),_d=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ue,a,Ie(t,{A:o(hd,o(e,i.a,r),i)}))}),wd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ie(a,{aL:!a.aL});case 2:var t=n.a;return Ie(a,{F:p(Is,e,t,a.F)});case 3:var i=n.a;return Ie(a,{F:o(gd,i,a.F)});case 4:var c=n.a;return Ie(a,{F:p(_d,r,c,a.F)});default:var l=n.a;return Ie(a,{F:o(Qs,l,a.F)})}}),yd=v(function(e,r){return o(Ue,Oa,{A:L(e,r(e)),aa:z,S:z})}),xd=S$,ji=xd(z),La=l$,Bn=c$,Sd=k$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Be({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fW:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Be({ev:d,eI:s,di:$,eP:u,fe:l,fy:c,fC:i,fH:t,eo:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",La(Bn)))},o(M,"left",X))},o(M,"pressedKeys",La(Bn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Be({di:$,dt:u,fj:l,fD:c,fE:i,eo:t,fZ:a,f1:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(A,function(r){return o(A,function(n){return Be({e1:n,fX:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(A,function(e){return o(A,function(r){return Be({eL:r,eM:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe))))),Cd=function(e){return{$:4,a:e}},Ld={$:0},zd=Cc,Qe=v(function(e,r){return o(Mc,e,zd(r))}),I=Qe("className"),Pd=function(e){var r=e.b.A;return r.b},za=Qe("id"),kd=F$,Pa=kd,Td=V$,le=Td,Md={$:1},Dd=function(e){return{$:3,a:e}},Ad=function(e){return{$:5,a:e}},Ni=xr("a"),Do=xr("button"),Wi=function(e){return o(Qe,"href",j$(e))},Bd=Br("clip-rule"),Le=Br("d"),Fd=Br("fill"),Cl=kc("http://www.w3.org/2000/svg"),Vd=Cl("svg"),Ed=Br("viewBox"),Rd=o(E$,"http://www.w3.org/XML/1998/namespace","xml:space"),We=Vd(b([Ed("0 0 24 24"),Fd("currentColor"),o(le,"width","100%"),o(le,"height","100%"),Rd("http://www.w3.org/2000/svg")])),jd=Br("fill-rule"),ze=Cl("path"),Qr={eK:We(b([o(ze,b([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),eX:We(b([o(ze,b([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),e0:We(b([o(ze,b([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),fk:We(b([o(ze,b([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),o(ze,b([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),fl:We(b([o(ze,b([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),o(ze,b([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),fv:We(b([o(ze,b([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),fw:We(b([o(ze,b([Le("M7 5V19L18 12L7 5Z")]),z)])),fx:We(b([o(ze,b([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),cO:We(b([o(ze,b([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),fR:We(b([o(ze,b([jd("evenodd"),Bd("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),fS:We(b([o(ze,b([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),f5:We(b([o(ze,b([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},Nd=function(e){return{$:0,a:e}},Ll=Tc,zl=v(function(e,r){return o(Ll,e,Nd(r))}),Ao=function(e){return o(zl,"click",Be(e))},Zi=Qe("target"),Wd=Qe("title"),Zt=v(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(H,n,a,o(e,a,t),o(Zt,e,i),o(Zt,e,c))}),Zd=Mt,Ee=Zd,Gd=function(e){return p(_o,y(function(r,n,a){return o(D,n,a)}),z,e)},Hd=v(function(e,r){return{$:3,a:e,b:r}}),Id=v(function(e,r){return{$:2,a:e,b:r}}),Od=v(function(e,r){return{$:0,a:e,b:r}}),Ud=v(function(e,r){return{$:1,a:e,b:r}}),Ja=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Bo=P(Ja,0/255,0/255,0/255,1),qd=Cc,Jd=v(function(e,r){return o(Mc,e,qd(r))}),Yd=Jd("checked"),Ne=Vv,Xd=y(function(e,r,n){return ue(o(An,e-jr(n),Ua(r)),n)}),ka=Lv,Pl=function(e){var r=function(n){return n<10?Ve(n):Ua(gl(87+n))};return e<16?r(e):ue(Pl(e/16|0),r(o(ka,16,e)))},Qd=o(K,Pl,o(Xd,2,"0")),Fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b8:a,cf:n,cR:r}},Kd=function(e){var r=Fo(e),n=r.cR,a=r.cf,t=r.b8;return o(Rr,"",o(D,"#",o(ne,o(K,Ne,Qd),b([n*255,a*255,t*255]))))},Gt=Qe("htmlFor"),em=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Ta=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),rm=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),Zn=v(function(e,r){return p(Sr,rm(e),z,r)}),kl=E(function(e,r,n,a){return{e6:r,fh:e,fq:n,fL:a}}),nm=uf,am=r$,tm=v(function(e,r){if(r.$)return we(e);var n=r.a;return ve(n)}),om=lf,im=function(e){return o(om,{eD:!1,fm:!1},e)},vn=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},cm=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ve(e(n))}}),lm=function(e){return{$:2,a:e}},um=function(e){return{$:0,a:e}},vm=function(e){return{$:1,a:e}},ot=v(function(e,r){return vr(r)-vr(e)}),it=y(function(e,r,n){var a=vr(n);return U(vr(e),a)<1&&U(a,vr(r))<1}),$m=v(function(e,r){var n=function(t){return U(t,e)<0?ve(t):we(vm(r))},a=p(it,"0","9",r)?ve(o(ot,"0",r)):p(it,"a","z",r)?ve(10+o(ot,"a",r)):p(it,"A","Z",r)?ve(10+o(ot,"A",r)):we(um(r));return o(Ta,n,a)}),Tl=v(function(e,r){var n=ln(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Ta,function(c){return o(Ta,function(l){return ve(c+l*e)},o(Tl,e,i))},o($m,e,t))}),fm=v(function(e,r){return 2<=e&&e<=36?o(Tl,e,Nt(r)):we(lm(e))}),sm=fm(16),dm=y(function(e,r,n){return P(Ja,e,r,n,1)}),Ml=E(function(e,r,n,a){return P(Ja,e,r,n,a)}),Gn=Cv,mm=v(function(e,r){var n=o(Gn,10,e);return Ne(r*n)/n}),pm=qv,bm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=bl(n);if(a.b&&!a.b.b){var t=a.a;return am(b([t,t]))}else return n};return o(K,pm,o(K,function(n){return o(ye,function(a){return p(nm,1,a,n)},im(e))},o(K,em(vn),o(K,ye(function(n){return n.fL}),o(K,ye(Zn($r)),o(K,tm("Parsing hex regex failed"),Ta(function(n){var a=o(ne,o(K,r,o(K,sm,cm(_s))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ve(P(Ml,t/255,c/255,u/255,o(mm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(dm,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),Ma=xr("input"),Ht=xr("label"),It=Qe("name"),Dl=v(function(e,r){return p(Sr,M,r,e)}),gm=o(Dl,b(["target","checked"]),X),hm=function(e){return o(zl,"change",o(xa,e,gm))},_m=function(e){return L(e,!0)},wm=function(e){return{$:1,a:e}},ym=v(function(e,r){return o(Ll,e,wm(r))}),xm=o(Dl,b(["target","value"]),Bn),Vo=function(e){return o(ym,"input",o(xa,_m,o(xa,e,xm)))},Al=Qe("max"),Bl=Qe("min"),Fl=function(e){return o(Qe,"step",e)},Da=Qe("type"),Eo=Qe("value"),Gi=function(e){var r=e.ci,n=e.c5,a=e.cy,t=e.cu,i=e.c_,c=e.cD;return o(O,z,b([o(Ht,b([Gt(r)]),b([o(O,b([I("relative w-full")]),b([o(O,b([I("inline-block")]),b([Ee(r)])),o(O,b([I("inline-block float-right")]),b([Ee(pe(n))]))]))])),o(Ma,b([Da("range"),o(le,"width","100%"),za(r),It(r),Bl(pe(a)),Al(pe(t)),Eo(pe(n)),Fl(pe(i)),Vo(o(K,To,o(K,dr(42),c)))]),z)]))},Sm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Cm=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,b([I("h-12 py-4")]),b([o(Ht,b([I("block"),Gt(e)]),b([o(Ma,b([I("relative bottom-[1px] align-middle mr-2"),Da("checkbox"),za(e),It(e),hm(Hd(e)),Yd(c)]),z),Ee(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Gi({ci:e,cu:i,cy:t,cD:Od(e),c_:.01*(i-t),c5:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Gi({ci:e,cu:i,cy:t,cD:o(K,Ne,Ud(e)),c_:1,c5:c});default:var c=r.a;return o(O,z,b([o(O,b([o(le,"margin-bottom","6px")]),b([o(Ht,b([Gt(e)]),b([Ee(e)]))])),o(Ma,b([Da("color"),o(le,"width","100%"),o(le,"height","26px"),o(le,"padding","0px"),za(e),It(e),Vo(function(l){return o(Id,e,o(Sm,Bo,bm(l)))}),Eo(Kd(c))]),z)]))}}),Lm=function(e){return o(O,b([I("p-4 border-y-[0.5px] border-white20")]),b([o(O,b([I("text-lg pb-2")]),b([Ee(e.fn)])),o(O,b([I("pl-2 pr-2")]),Gd(o(Zt,Cm,e.au)))]))},zm=function(e){return o(O,b([I("text-xs text-white60")]),o(ne,Lm,e))},Pm=function(e){return o(O,b([I("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Ee("clock: "+o(yl,3,un(e).bB))]))},km=function(e){e.a;var r=e.b.S;return o(ye,function(n){return Ne(60/(un(e).bB-n))},o(ye,o(K,Ss,function(n){return n.bB}),vn(o(fl,59,r))))},Tm=function(e){return o(O,b([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=km(e);if(r.$===1)return b([Ee("... Fps")]);var n=r.a;return b([Ee(Ve(n)+" Fps")])}())},Mm=function(e){return{$:0,a:e}},Dm=function(e){var r=e.b.S;return Wr(r)},Am=function(e){var r=e.b.S;e.b.A;var n=e.b.aa;return Wr(r)+1+Wr(n)},Bm=function(e){return o(Ma,b([I("absolute w-full"),Da("range"),Bl(Ve(0)),Al(Ve(Am(e)-1)),Eo(Ve(Dm(e))),Fl(Ve(1)),Vo(o(K,To,o(K,dr(42),o(K,Ne,Mm))))]),z)},Hi={$:1},Fm={$:3},Vm={$:2},Vl=function(e){return!e.b},Ii=v(function(e,r){return o(Do,b([I("px-2 bg-black60 hover:bg-black80 active:bg-black"),I(r),Ao(e)]),b([Ee("REC")]))}),Oi=v(function(e,r){return o(Do,b([I("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),Ao(r)]),b([o(O,b([I("w-4 h-6 text-white60 hover:text-white80")]),b([e]))]))}),Em=function(e){var r=e.a,n=e.b.aa;return o(O,b([I("py-1")]),b([function(){switch(r.$){case 0:return o(Ii,Hi,"text-red-500 font-bold");case 1:return o(Ii,Vm,"text-white60 hover:text-white80 font-bold");default:return o(O,z,z)}}(),function(){switch(r.$){case 0:return o(O,z,z);case 1:return Vl(n)?o(O,z,z):o(Oi,Qr.fw,Fm);default:return o(Oi,Qr.fv,Hi)}}()]))},Rm=function(e){return o(O,b([I("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Bm(e),Em(e),Tm(e),Pm(e)]))},jm=function(e){var r=e.a;return Ye(r,Oa)},Nm=v(function(e,r){var n=jm(r.F)?o(O,z,z):o(O,b([I("absolute pointer-events-none w-8 h-8"),o(le,"left",pe(e.cO.fZ+.5*e.b_.fX)+"px"),o(le,"top",pe(-e.cO.f1+.5*e.b_.e1)+"px")]),b([o(O,b([I(e.cO.dt?"text-black80":"text-black40")]),b([Qr.cO]))]));return o(O,z,b([n]))}),Wm=v(function(e,r){var n=o(Do,b([I(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ao(Md),Wd("Distraction Free Mode")]),b([Qr.f5])),a=o(O,b([I("absolute w-8 bottom-12")]),b([o(Ni,b([I("text-twitterBlue40 hover:text-twitterBlue"),Wi("https://twitter.com/AzizErkalSelman"),Zi("_blank")]),b([Qr.fS]))])),t=o(O,b([I("absolute w-8 bottom-2")]),b([o(Ni,b([I("text-githubCat40 hover:text-githubCat"),Wi("https://github.com/erkal/elm-3d-playground-exploration"),Zi("_blank")]),b([Qr.eX]))]));return r.aL?o(O,b([I("fixed w-10 h-10 p-1")]),b([n])):o(O,z,b([o(O,b([I("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,t])),o(O,b([I("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(le,"height",pe(e.b_.e1-80)+"px")]),b([o(Pa,Dd,zm(un(r.F).eH))])),o(O,b([I("absolute bottom-0 left-10 h-20"),o(le,"width",e.b_.fX>600?"600px":pe(e.b_.fX-40)+"px")]),b([o(Pa,Ad,Rm(r.F))])),o(Nm,e,r)]))}),Zm=y(function(e,r,n){var a=Pd(n.F),t=un(n.F);return o(O,b([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(le,"width",pe(t.b_.fX)+"px"),o(le,"height",pe(t.b_.e1)+"px")]),b([o(O,b([I("fixed")]),b([o(Pa,il(Ld),o(e,t,a))])),o(O,b([za("gui")]),b([o(Wm,t,n),o(Pa,Cd,o(r,t,a))]))]))}),Gm=Xe(function(e,r,n,a,t,i){var c=v(function(u,$){return L(P(wd,r,i,u,$),ji)}),l=function(u){var $=o(cl,n,u.e8);return L({aL:u.e8.b_.fX<500,F:o(yd,$,a)},ji)};return Zs({e7:l,fM:il(Sd(ks)),fT:c,fV:o(Zm,e,t)})}),Hm=E(function(e,r,n,a){return _e(Gm,e,r,n,a,v(function(t,i){return o(O,z,z)}),y(function(t,i,c){return c}))}),El={$:0},gr=v(function(e,r){return{$:0,a:e,b:r}}),Pe=v(function(e,r){return{$:0,a:e,b:r}}),Im=b([o(gr,L(-1,1),o(Pe,2,0)),o(gr,L(-1,0),o(Pe,2,0)),o(gr,L(-1,-1),o(Pe,2,0)),o(gr,L(0,-1),o(Pe,2,0)),o(gr,L(0,1),o(Pe,2,0)),o(gr,L(1,1),o(Pe,2,0)),o(gr,L(1,0),o(Pe,2,0)),o(gr,L(1,-1),o(Pe,2,0))]),Om=function(e){return{aB:El,bt:Im}},ct=v(function(e,r){return L(e,ml(r))}),Um=y(function(e,r,n){return{au:n,fb:r,fn:e}}),Rl=mr,qm=function(e){return p(jn,v(function(r,n){var a=r.a,t=r.b;return p(Cn,a,t,n)}),Rl,e)},Jm=y(function(e,r,n){return p(Um,e,r,qm(n))}),lt=Jm,Vr=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(pl,L(a,t),n))}),Ae=zv,ut=function(e){return e/255},vt=y(function(e,r,n){return P(Ja,ut(e),ut(r),ut(n),1)}),Ym=b([p(lt,"Camera",!0,b([p(Vr,"camera distance",L(3,20),10),p(Vr,"camera azimuth",L(-Ae,Ae),0),p(Vr,"camera elevation",L(-Ae/2,Ae/2),0)])),p(lt,"Parameters",!0,b([p(Vr,"cubes side length",L(.5,1),.9),p(Vr,"duration of rolling animation",L(.1,1),.25)])),p(lt,"Colors and light",!0,b([o(ct,"color 1",p(vt,244,88,67)),o(ct,"color 2",p(vt,47,41,43)),o(ct,"board color",p(vt,223,224,226)),p(Vr,"sunlight azimuth",L(-Ae,Ae),2),p(Vr,"sunlight elevation",L(-Ae,0),-2)]))]),Xm=v(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(qa,e,r.au))}),Qm=v(function(e,r){return o(dr,0,vn(o(Zn,Xm(e),r)))}),Km=v(function(e,r){return o(Qm,e,r.eH)}),_r=Km,e0=Mv,jl=function(e){return e},rr=function(e){return e},Aa=function(e){var r=e;return-r},r0=v(function(e,r){var n=e,a=r;return{fZ:n.f1*a.da-n.da*a.f1,f1:n.da*a.fZ-n.fZ*a.da,da:n.fZ*a.f1-n.f1*a.fZ}}),Nl=function(e){var r=e;return r.c8},Wl=function(e){var r=e;return r.c9},n0=function(e){return o(r0,Nl(e),Wl(e))},$n=function(e){var r=e;return r.cE},an=Pv,tn=kv,fa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=an(c),u=tn(c),$=a.eO,s=$,d=s.fZ*u,m=l*d,f=d*d,h=s.f1*u,g=l*h,w=d*h,x=h*h,_=1-2*(f+x),C=s.da*u,T=l*C,W=2*(w-T),j=2*(w+T),R=d*C,N=2*(R+g),Z=2*(R-g),F=h*C,J=2*(F-m),Q=2*(F+m),ie=C*C,$e=1-2*(x+ie),oe=1-2*(f+ie);return{fZ:$e*i.fZ+W*i.f1+N*i.da,f1:j*i.fZ+oe*i.f1+J*i.da,da:Z*i.fZ+Q*i.f1+_*i.da}}),Hn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=an(c),u=tn(c),$=a.cE,s=$,d=i.fZ-s.fZ,m=i.f1-s.f1,f=i.da-s.da,h=a.eO,g=h,w=g.fZ*u,x=l*w,_=w*w,C=g.f1*u,T=l*C,W=w*C,j=C*C,R=1-2*(_+j),N=g.da*u,Z=l*N,F=2*(W-Z),J=2*(W+Z),Q=w*N,ie=2*(Q+T),$e=2*(Q-T),oe=C*N,de=2*(oe-x),De=2*(oe+x),Ce=N*N,Cr=1-2*(j+Ce),Lr=1-2*(_+Ce);return{fZ:s.fZ+Cr*d+F*m+ie*f,f1:s.f1+J*d+Lr*m+de*f,da:s.da+$e*d+De*m+R*f}}),Gr=function(e){return e},Hr=function(e){var r=e;return r.c8},Ir=function(e){var r=e;return r.c9},Or=function(e){var r=e;return r.db},Zl=y(function(e,r,n){return Gr({cE:p(Hn,e,r,$n(n)),c8:p(fa,e,r,Hr(n)),c9:p(fa,e,r,Ir(n)),db:p(fa,e,r,Or(n))})}),Ui=y(function(e,r,n){return p(Zl,e(n),r,n)}),Ro=function(e){var r=e;return r.eO},fn=v(function(e,r){var n=e,a=r;return{fZ:a.fZ+n.fZ,f1:a.f1+n.f1,da:a.da+n.da}}),Gl=v(function(e,r){return Gr({cE:o(fn,e,$n(r)),c8:Hr(r),c9:Ir(r),db:Or(r)})}),a0=v(function(e,r){var n=e,a=r;return{fZ:n*a.fZ,f1:n*a.f1,da:n*a.da}}),t0=y(function(e,r,n){return o(Gl,o(a0,r,e),n)}),o0=y(function(e,r,n){return p(t0,Ro(e(n)),r,n)}),ar=v(function(e,r){return{eO:r,cE:e}}),i0=function(e){var r=e;return o(ar,r.cE,r.c8)},c0=function(e){var r=e;return o(ar,r.cE,r.c9)},l0=function(e){var r=e;return o(ar,r.cE,r.db)},u0=function(e){var r=Gr({cE:e.aR,c8:Wl(e.dp),c9:n0(e.dp),db:Nl(e.dp)}),n=p(o0,l0,e.ce,p(Ui,i0,Aa(e.bE),p(Ui,c0,e.by,r)));return n},v0=function(e){return{$:0,a:e}},Se=function(e){var r=e;return Y(r)},sa=function(e){var r=e;return .5*r},$0=Tv,f0=function(e){var r=e;return $0(r)},s0=function(e){var r=sa(Se(e.eq)),n=f0(r);return{cQ:v0(n),c6:e.c6}},nr=function(e){return e},Fr={fZ:0,f1:0,da:0},Hl=$r,fr=function(e){return e},Il=fr({fZ:1,f1:0,da:0}),Ya=Il,jo=fr({fZ:0,f1:0,da:1}),In=jo,d0=Hl({cE:Fr,c8:In,c9:Ya}),m0=function(e){var r=e.aR,n=e.by,a=e.bE,t=e.ce;return s0({eq:nr(2*e0(.5)),c6:u0({by:nr(n),ce:rr(t),bE:nr(a),aR:jl(r),dp:d0})})},Ol=function(e){return m0({by:o(_r,"camera azimuth",e),ce:o(_r,"camera distance",e),bE:o(_r,"camera elevation",e),aR:{fZ:0,f1:0,da:0}})},p0={$:0},No=v(function(e,r){return p(Sr,v(function(n,a){return e(n)?o(D,n,a):a}),z,r)}),b0={$:1},g0=v(function(e,r){return{$:2,a:e,b:r}}),h0=function(e){return Mo(function(r){var n=r.a;return Ye(e,n)})},_0=function(e){var r=e.a,n=e.b;return U(r,-1)>-1&&r<=1&&U(n,-1)>-1&&n<=1},w0=v(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return L(n,a+1);case 1:return L(n,a-1);case 2:return L(n-1,a);default:return L(n+1,a)}}),Ul=function(e){return e?0:1},ea=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(Pe,r,n);case 1:return o(Pe,2,n);default:return o(Pe,1,Ul(n))}},ra=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(Pe,2,Ul(n));case 1:return o(Pe,r,n);default:return o(Pe,0,n)}},y0=function(e){switch(e){case 0:return o(K,ea,o(K,ea,ea));case 1:return ea;case 2:return o(K,ra,o(K,ra,ra));default:return ra}},x0=v(function(e,r){var n=r.a,a=r.b;return o(gr,o(w0,e,n),o(y0,e,a))}),S0=v(function(e,r){var n=e.a,a=vn(o(Zn,function(l){var u=o(x0,l,e),$=u.a;return o(h0,$,r)||!_0($)?q:re(L(u,l))},b([0,1,2,3])));if(a.$===1)return b0;var t=a.a,i=t.a,c=t.b;return o(g0,c,o(D,i,o(No,function(l){var u=l.a;return!Ye(u,n)},r)))}),C0=v(function(e,r){var n=function(i){var c=i.a;return Ye(c,e)},a=vn(o(No,n,r));if(a.$===1)return p0;var t=a.a;return o(S0,t,r)}),L0=function(e){return{$:1,a:e}},z0=ge(function(e,r,n,a,t){var i=t.aB;return i.$?t:Ie(t,{aB:L0({cz:a,ec:n,eh:r,cZ:e.bB})})}),P0=y(function(e,r,n){var a=e.fZ,t=e.f1,i=L(Ne(a),Ne(t)),c=o(C0,i,n.bt);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return S(z0,r,i,l,u,n)}}),k0=y(function(e,r,n){return{fZ:e,f1:r,da:n}}),wn=function(e){return nr(Ae*(e/180))},na=function(e){return e},da=function(e){var r=e;return r},T0=v(function(e,r){var n=e,a=r;return a.fZ*n.fZ+a.f1*n.f1+a.da*n.da}),te=v(function(e,r){var n=r;return e*n}),ql=function(e){var r=e;return r.cE},M0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.fp,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1+(a.da-i.da)*l.da}),D0=y(function(e,r,n){var a=e,t=r,i=n;return{fZ:i.fZ+t*a.fZ,f1:i.f1+t*a.f1,da:i.da+t*a.da}}),A0=v(function(e,r){var n=Ro(r),a=e,t=a.fp,i=o(T0,t,n);if(i){var c=ql(r),l=o(M0,e,c),u=o(te,-1/i,l);return re(p(D0,n,u,c))}else return q}),B0=v(function(e,r){return{fZ:e,f1:r}}),qi=v(function(e,r){var n=e,a=r;return n*a}),F0=function(e){var r=e;return r},Ji=function(e){var r=e;return F0(r.ey)},V0=function(e){var r=e;return r.aK},Nr=Ev,E0=function(e){var r=e,n=o(Oe,Y(r.fZ),o(Oe,Y(r.f1),Y(r.da)));if(n){var a=r.da/n,t=r.f1/n,i=r.fZ/n,c=Nr(i*i+t*t+a*a);return re({fZ:i/c,f1:t/c,da:a/c})}else return q},Jl=v(function(e,r){var n=r;return n/e}),Ot=function(e){var r=e;return $n(r)},Wo=fr({fZ:0,f1:0,da:-1}),R0=v(function(e,r){var n=e,a=r;return a/n}),j0=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fZ:$.fZ*a.fZ+l.fZ*a.f1+i.fZ*a.da,f1:$.f1*a.fZ+l.f1*a.f1+i.f1*a.da,da:$.da*a.fZ+l.da*a.f1+i.da*a.da}}),Fn=function(e){var r=e;return{fZ:-r.fZ,f1:-r.f1,da:-r.da}},Ut=function(e){var r=e;return Fn(Or(r))},N0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c8,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1}),Zo=y(function(e,r,n){var a=e,t=r,i=n;return{fZ:a,f1:t,da:i}}),W0=E(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cE,$=u,s=t.db,d=s,m=t.c9,f=m,h=t.c8,g=h;return{fZ:$.fZ+i*g.fZ+c*f.fZ+l*d.fZ,f1:$.f1+i*g.f1+c*f.f1+l*d.f1,da:$.da+i*g.da+c*f.da+l*d.da}}),Z0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c9,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1}),cr=0,G0=y(function(e,r,n){var a=e,t=o(Z0,Ji(r),n),i=o(N0,Ji(r),n),c=a.c6,l=c,u=V0(r);u.a;var $=u.b,s=a.cQ;if(s.$){var h=s.a,g=o(R0,$,h),w=P(W0,l,o(qi,g,i),o(qi,g,t),cr);return o(ar,w,Ut(a.c6))}else{var d=s.a,m=Aa(o(Jl,d,o(te,.5,$))),f=o(j0,l,o(dr,Wo,E0(p(Zo,i,t,m))));return o(ar,Ot(a.c6),f)}}),qt=function(e){var r=e;return{fZ:an(r),f1:tn(r)}},H0=function(e){var r=e;return{fZ:-r.f1,f1:r.fZ}},I0=function(e){return e},O0=v(function(e,r){return I0({cE:r,c8:e,c9:H0(e)})}),U0=v(function(e,r){return o(O0,qt(e),r)}),q0=y(function(e,r,n){var a=e.a,t=e.b;return{ey:o(U0,r,n),aK:L(Se(a),Se(t))}}),Pr=function(e){var r=e;return r.fZ},J0=v(function(e,r){var n=e,a=r;return{fZ:n,f1:a}}),kr=function(e){var r=e;return r.f1},Tr=function(e){var r=e;return r.da},Y0=E(function(e,r,n,a){var t=n.fZ,i=n.f1,c=function($){return p(k0,da(Pr($)),da(kr($)),da(Tr($)))},l=p(q0,L(na(r.fX),na(r.e1)),wn(0),o(B0,0,0)),u=o(J0,na(t),na(i));return o(ye,c,o(A0,a,p(G0,e,l,u)))}),X0=v(function(e,r){return{fp:e,cE:r}}),Q0=v(function(e,r){var n=r;return o(X0,n.fp,o(fn,e,n.cE))}),K0=v(function(e,r){return{fp:r,cE:e}}),ep=o(K0,Fr,In),rp=E(function(e,r,n,a){return P(Y0,r,n,a,o(Q0,p(Zo,rr(0),rr(0),rr(e)),ep))}),np=v(function(e,r){if(e.cO.dt){var n=P(rp,o(_r,"cubes side length",e),Ol(e),e.b_,e.cO);if(n.$===1)return r;var a=n.a;return p(P0,a,e,r)}else return r}),ap=v(function(e,r){var n=r.aB;if(n.$){var a=n.a.cZ,t=n.a.cz;return U(e.bB-a,o(_r,"duration of rolling animation",e))>0?Ie(r,{aB:El,bt:t}):r}else return r}),tp=v(function(e,r){return o(ap,e,o(np,e,r))}),op=xr("br"),Yi=xr("p"),ip=o(O,b([I("absolute w-full text-center")]),b([o(O,b([I("font-bold pt-2 text-lg")]),b([Ee("Eight Rolling Cubes Puzzle"),o(op,z,z),Ee("by John Harris")])),o(Yi,z,b([Ee("Can you make all the red faces look down")])),o(Yi,z,b([Ee(" with the center cell vacant?")]))])),Go=v(function(e,r){return{$:0,a:e,b:r}}),$t=v(function(e,r){var n=e,a=r;return U(a,n)>-1}),ft=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),wr=v(function(e,r){var n=e,a=r;return a-n}),cp=fr({fZ:-1,f1:0,da:0}),lp=fr({fZ:0,f1:-1,da:0}),Yl=fr({fZ:0,f1:1,da:0}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fZ:a,f1:t,da:i}}),up=Xe(function(e,r,n,a,t,i){var c=o($t,n,i)?jo:Wo,l=o($t,r,t)?Yl:lp,u=o($t,e,a)?Il:cp,$=B(Se(o(wr,e,a)),Se(o(wr,r,t)),Se(o(wr,n,i))),s=p(me,o(ft,e,a),o(ft,r,t),o(ft,n,i)),d=Gr({cE:s,c8:u,c9:l,db:c});return{ey:d,aK:$}}),vp=v(function(e,r){return _e(up,Pr(e),kr(e),Tr(e),Pr(r),kr(r),Tr(r))}),Jt=y(function(e,r,n){return{fZ:e,f1:r,da:n}}),Ba=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Go,e,o(vp,p(Jt,-c,-l,-u),p(Jt,c,l,u)))}),ir=function(e){return e*Ae/180},$p=v(function(e,r){return o(ye,function(n){if(n.$===2){var a=n.a;return a}else return Bo},o(qa,e,r.au))}),fp=v(function(e,r){return o(dr,Bo,vn(o(Zn,$p(e),r)))}),sp=v(function(e,r){return o(fp,e,r.eH)}),Yt=sp,Ho=function(e){return{$:5,a:e}},Io=function(e){return Ho(e)},Xt=function(e){return{$:0,a:e}},Xl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ql=y(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),st=function(e){return p(Ql,0,1,e<=.04045?e/12.92:o(Gn,(e+.055)/1.055,2.4))},On=ff,dp=function(e){var r=Fo(e),n=r.cR,a=r.cf,t=r.b8;return p(On,st(n),st(a),st(t))},Fa=function(e){return p(Xl,0,Xt(dp(e)),Xt(0))},Kl=v(function(e,r){return{$:2,a:e,b:r}}),eu=v(function(e,r){return{$:4,a:e,b:r}}),ru=v(function(e,r){return{$:3,a:e,b:r}}),nu=v(function(e,r){return{$:1,a:e,b:r}}),mp=y(function(e,r,n){return{fZ:e,f1:r,da:n}}),pp=function(e){var r=e;return r},Oo=function(e){var r=e;return pp(r.ey)},Uo=function(e){var r=e;return r.aK},bp=v(function(e,r){return{ey:o(Gl,e,Oo(r)),aK:Uo(r)}}),gp=v(function(e,r){var n=r;return o(ar,o(fn,e,n.cE),n.eO)}),hp=v(function(e,r){var n=r;return{k:o(gp,e,n.k),ff:n.ff,fz:n.fz}}),qo=function(e){var r=e;return r},_p=function(e){return e},au=v(function(e,r){var n=qo(r),a=n.a,t=n.b;return _p(L(e(a),e(t)))}),wp=v(function(e,r){return o(au,fn(e),r)}),Jo=function(e){var r=e;return r.eF},Yo=function(e){var r=e;return r.fz},tu=v(function(e,r){return{eF:r,fz:Se(e)}}),yp=v(function(e,r){return o(tu,Yo(r),o(fn,e,Jo(r)))}),ou=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),xp=v(function(e,r){return o(ou,fn(e),r)}),Xa=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(mp,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Go,s,o(bp,i,c));case 1:var s=r.a,l=r.b;return o(nu,s,o(xp,i,l));case 3:var s=r.a,u=r.b;return o(ru,s,o(yp,i,u));case 2:var s=r.a,$=r.b;return o(Kl,s,o(hp,i,$));case 4:var s=r.a,d=r.b;return o(eu,s,o(wp,i,d));default:var m=r.a;return Ho(o(ne,Xa(B(n,a,t)),m))}}),iu=function(e){return Xa(B(e,0,0))},ma=function(e){return Xa(B(0,0,e))},Sp=y(function(e,r,n){return{ey:p(Zl,e,r,Oo(n)),aK:Uo(n)}}),Cp=v(function(e,r){var n=o(Hn,e,r),a=o(fa,e,r);return function(t){var i=t;return o(ar,n(i.cE),a(i.eO))}}),Lp=y(function(e,r,n){var a=n;return{k:p(Cp,e,r,a.k),ff:a.ff,fz:a.fz}}),zp=y(function(e,r,n){return o(au,o(Hn,e,r),n)}),Pp=y(function(e,r,n){return o(tu,Yo(n),p(Hn,e,r,Jo(n)))}),kp=y(function(e,r,n){return o(ou,o(Hn,e,r),n)}),Un=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Go,l,p(Sp,e,r,a));case 1:var l=n.a,t=n.b;return o(nu,l,p(kp,e,r,t));case 3:var l=n.a,i=n.b;return o(ru,l,p(Pp,e,r,i));case 2:var l=n.a,c=n.b;return o(Kl,l,p(Lp,e,r,c));case 4:var l=n.a,u=n.b;return o(eu,l,p(zp,e,r,u));default:var $=n.a;return Ho(o(ne,o(Un,e,r),$))}}),Tp=o(ar,Fr,In),dt=v(function(e,r){return p(Un,Tp,nr(e),r)}),Mp=function(e){var r=o(Yt,"board color",e),n=o(iu,-1.55,o(Ba,Fa(r),B(.1,3.2,.2))),a=o(ma,-.5,o(Ba,Fa(r),B(3,3,1)));return Io(b([n,o(dt,ir(90),n),o(dt,ir(180),n),o(dt,ir(270),n),a]))},Dp=function(e){return Xa(B(0,e,0))},zn=v(function(e,r){return U(e,r)<0?e:r}),Ap=v(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(Un,o(ar,jl(n),fr({fZ:t,f1:i,da:c})),nr(r))}),Bp=y(function(e,r,n){var a=r.aB;if(a.$){var t=a.a.cZ,i=a.a.eh,c=a.a.ec;if(a.a.cz,Ye(i,n)){var l=o(_r,"duration of rolling animation",e),u=(e.bB-t)/l,$=u,s=o(zn,ir(90),$*ir(90)),d=function(){switch(c){case 0:return L({fZ:.5,f1:.5,da:-.5},B(-1,0,0));case 1:return L({fZ:-.5,f1:-.5,da:-.5},B(1,0,0));case 2:return L({fZ:-.5,f1:.5,da:-.5},B(0,-1,0));default:return L({fZ:.5,f1:-.5,da:-.5},B(0,1,0))}}();return o(Ap,d,s)}else return $r}else return $r}),Fp=o(ar,Fr,Ya),mt=v(function(e,r){return p(Un,Fp,nr(e),r)}),Xo=Yl,Vp=o(ar,Fr,Xo),Xi=v(function(e,r){return p(Un,Vp,nr(e),r)}),Ep=y(function(e,r,n){var a=n.a,t=a.a,i=a.b,c=n.b,l=o(_r,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,mt(ir(180));case 1:return c.a,c.b,mt(ir(90));default:return c.a,c.b,Xi(-ir(90))}else switch(c.a){case 2:return c.a,c.b,$r;case 1:return c.a,c.b,mt(-ir(90));default:return c.a,c.b,Xi(ir(90))}}(),$=o(Yt,"color 2",e),s=o(Yt,"color 1",e),d=o(ma,l/4,o(Ba,Fa(s),B(l,l,l/2))),m=o(ma,-(l/4),o(Ba,Fa($),B(l,l,l/2)));return o(Dp,i,o(iu,t,o(ma,l/2,P(Bp,e,r,L(t,i),u(Io(b([d,m])))))))}),Rp=v(function(e,r){return Io(o(ne,o(Ep,e,r),r.bt))}),jp=function(e){return e},Np=function(e){return rr(.01*e)},Qi=function(e){return e},Wp=function(e){return e},Zp=function(e){return{$:0,a:e}},Gp=Zp,Hp={$:3},Ip=Hp,Op=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Up=Op,qp=v(function(e,r){return r.b?p(Sr,D,r,e):e}),qe=function(e){return p(Sr,qp,z,e)},Qo=v(function(e,r){return qe(o(ne,e,r))}),Jp=function(e){return{$:1,a:e}},Yp=Jp,Xp=function(e){return o(Br,"height",Ve(e))},Qp=function(e){return A$(R$(e))},Kp=Qp,e1=function(e){return{$:2,a:e}},r1=e1,n1=function(e){return o(Rr,"",e)},a1=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ne(l*1e3)/1e3},c=function(l){return Ne(l*1e4)/100};return n1(b(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},t1=v(function(e,r){switch(r.$){case 0:return o(es,e,r);case 1:return o(rs,e,r);case 2:return o(ns,e,r);case 3:return o(as,e,r);case 4:return o(ts,e,r);default:return o(os,e,r)}}),o1=v(function(e,r){switch(r.$){case 0:return o(Tf,e,r);case 1:return o(Mf,e,r);case 2:return o(Df,e,r);case 3:return o(Af,e,r);case 4:return o(Bf,e,r);case 5:return o(Ff,e,r);case 6:return o(Vf,e,r);case 7:return o(Ef,e,r);default:return Rf(e)}}),i1=y(function(e,r,n){return p(Kf,e,r,n)}),Ki=function(e){var r=e;return r},sn=gf,pt=P(sn,1,1,1,1),tr=y(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),c1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),l1=v(function(e,r){var n=e,a=r.fZ,t=r.f1;return p(c1,n*a/t,n,n*(1-a-t)/t)}),u1=function(e){var r=e.a,n=e.b,a=e.c;return p(On,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ko=v(function(e,r){return u1(o(l1,e,r))}),cu=v(function(e,r){return{du:Ye(e.du,r.du),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,G:r.G+(e.G*r.p+e.H*r.s+e.I*r.v)*r.bZ,H:r.H+(e.G*r.q+e.H*r.t+e.I*r.w)*r.bZ,I:r.I+(e.G*r.r+e.H*r.u+e.I*r.x)*r.bZ,bZ:e.bZ*r.bZ}}),lr=Sf,v1=function(e){return lr({dC:e.p,dD:e.s,dE:e.v,dF:e.G,dG:e.q,dH:e.t,dI:e.w,dJ:e.H,dK:e.r,dL:e.u,dM:e.x,dN:e.I,dO:0,dP:0,dQ:0,dR:1})},bt=ge(function(e,r,n,a,t){var i=a.du?1:-1,c=P(sn,a.bZ,a.bZ,a.bZ,i);return _e(t,e,c,v1(a),a.du,r,n)}),lu=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(cu,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,g=o(D,S(bt,e,r,n,a,h),i.L);return{L:g,T:i.T,fG:i.fG};case 3:var w=t.b,x=o(D,S(bt,e,r,n,a,w),i.T);return{L:i.L,T:x,fG:i.fG};case 2:var _=t.a,C=o(D,S(bt,e,r,n,a,_),i.fG);return{L:i.L,T:i.T,fG:C};default:var T=t.a;return p(jn,P(lu,e,r,n,a),i,T)}}),$1=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),uu=$1,ei=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),f1=function(e){var r=e.Y,n=e.V,a=e.U;return P(ei,518,r,n,a)},s1=v(function(e,r){return{$:6,a:e,b:r}}),d1=s1,vu=b([f1({U:1,V:0,Y:!1}),P(uu,!1,!1,!1,!1),o(d1,0,1)]),on=519,ri=8,$u=15,Kr=7681,m1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=kf,p1=v(function(e,r){return{$:0,a:e,b:r}}),b1=p1({dj:1,ds:0,d_:5}),Fe=vf,g1=b1(b([{bV:o(Fe,-1,-1)},{bV:o(Fe,1,-1)},{bV:o(Fe,-1,1)},{bV:o(Fe,1,1)}])),h1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bV"},uniforms:{}},_1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},ni=y(function(e,r,n){var a=e.cS,t=e.cr,i=e.c7,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(K,c($.bl),o(K,l($.a8),o(K,l($.bu),l($.bv))))};return o(u,n,o(u,r,p(_1,a,t,i)))}),ai=function(e){return p(ni,{cr:e.cr,cS:e.cS,c7:e.c7},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv})},ti=function(e){return S(ae,b([ai(e),P(uu,!1,!1,!1,!1)]),h1,m1,g1,{})},w1=ti({a8:Kr,cr:0,cS:ri,bl:on,c7:$u,bu:Kr,bv:Kr}),y1=516,ec=5386,xe=7680,x1=function(e){return o(Gn,2,e+4)},fu=function(e){return ti({a8:xe,cr:$u,cS:ri,bl:y1,c7:x1(e),bu:ec,bv:ec})},S1=y(function(e,r,n){return qe(b([p(tr,e,n,vu),b([fu(r),w1])]))}),C1=v(function(e,r){return qe(o(Kc,S1(e),r))}),L1=function(e){var r=e.Y,n=e.V,a=e.U;return P(ei,513,r,n,a)},z1=L1({U:1,V:0,Y:!0}),P1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},k1=function(e){var r=e.bX,n=e.bH,a=e.bz,t=e.bw,i=e.bC,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,h=$.b,g=$.c;return P1(s)(d)(m)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},T1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),rc=v(function(e,r){var n=e,a=r;return p(T1,32774,n,a)}),M1=1,nc=771,D1=770,oi=k1({bw:0,aH:o(rc,M1,nc),bz:0,bC:o(rc,D1,nc),bH:0,bX:0}),Ur=b([z1,oi]),A1=function(e){var r=e;return r.dT},B1=function(e){var r=e;return r.dU},su=function(e){var r=e;return r.dV},F1=function(e){var r=e;return r.dW},V1=function(e){var r=e;return r.dX},du=function(e){var r=e;return r.dY},mu=function(e){return B(o(wr,F1(e),A1(e)),o(wr,V1(e),B1(e)),o(wr,du(e),su(e)))},E1=function(e){return e},R1=function(e){return Gr({cE:E1({fZ:e.G,f1:e.H,da:e.I}),c8:fr({fZ:e.p,f1:e.q,da:e.r}),c9:fr({fZ:e.s,f1:e.t,da:e.u}),db:fr({fZ:e.v,f1:e.w,da:e.x})})},gt=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fZ:a.fZ*$.fZ+a.f1*$.f1+a.da*$.da,f1:a.fZ*l.fZ+a.f1*l.f1+a.da*l.da,da:a.fZ*i.fZ+a.f1*i.f1+a.da*i.da}}),pu=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=a.fZ-i.fZ,l=a.f1-i.f1,u=a.da-i.da,$=n.db,s=$,d=n.c9,m=d,f=n.c8,h=f;return{fZ:c*h.fZ+l*h.f1+u*h.da,f1:c*m.fZ+l*m.f1+u*m.da,da:c*s.fZ+l*s.f1+u*s.da}}),bu=v(function(e,r){return{cE:o(pu,e,$n(r)),c8:o(gt,e,Hr(r)),c9:o(gt,e,Ir(r)),db:o(gt,e,Or(r))}}),Va=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(Oe,n,a)}),se=v(function(e,r){var n=e,a=r;return o(zn,n,a)}),j1=v(function(e,r){var n=Va(r),a=Va(e);return{dT:o(ce,a.dT,n.dT),dU:o(ce,a.dU,n.dU),dV:o(ce,a.dV,n.dV),dW:o(se,a.dW,n.dW),dX:o(se,a.dX,n.dX),dY:o(se,a.dY,n.dY)}}),Je=function(e){var r=e;return r},N1=function(e){var r=e;return B(r.fZ,r.f1,r.da)},Pn=v(function(e,r){var n=e,a=r;return a+n}),W1=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=sa(Se(a)),c=sa(Se(n)),l=sa(Se(t)),u=N1(r),$=u.a,s=u.b,d=u.c;return{dT:o(Pn,c,$),dU:o(Pn,i,s),dV:o(Pn,l,d),dW:o(wr,c,$),dX:o(wr,i,s),dY:o(wr,l,d)}}),ac=E(function(e,r,n,a){var t=n.eF,i=2*n.e$*r,c=2*n.e_*r,l=2*n.eZ*r,u=t.da*r,$=t.f1*r,s=t.fZ*r,d=Je(Or(e)),m=Y(l*d.fZ)+Y(c*d.f1)+Y(i*d.da),f=Je(Ir(e)),h=Y(l*f.fZ)+Y(c*f.f1)+Y(i*f.da),g=Je(Hr(e)),w=Y(l*g.fZ)+Y(c*g.f1)+Y(i*g.da),x=o(W1,B(w,h,m),o(pu,e,p(Jt,s,$,u)));if(a.$)return re(x);var _=a.a;return re(o(j1,_,x))}),Qt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 1:var c=t.a,l=P(ac,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 2:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 3:var c=t.a,l=P(ac,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 4:var u=t.a,f=e,h=r,g=P(Qt,e,r,n,u),w=i;e=f,r=h,n=g,a=w;continue e;default:var $=t.a,s=t.b,d=o(bu,R1($),e),m=r*$.bZ,f=e,h=r,g=P(Qt,d,m,n,b([s])),w=i;e=f,r=h,n=g,a=w;continue e}}else return n}),dn=sf,mn=df,pn=mf,gu=function(e){return{$:4,a:e}},Z1=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),qn=function(e){return gu(o(Z1,e,z))},G1={du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:0,H:0,I:0,bZ:1},tc=ti({a8:Kr,cr:0,cS:ri,bl:on,c7:255,bu:Kr,bv:Kr}),H1=function(e){var r=e,n=o(Oe,Y(r.fZ),o(Oe,Y(r.f1),Y(r.da)));if(n){var a=r.da/n,t=r.f1/n,i=r.fZ/n,c=Nr(i*i+t*t+a*a);return c*n}else return cr},ke={bz:0,eE:!1,bH:0,cN:0,bX:0,c2:0,fZ:0,f1:0,da:0},Ge=v(function(e,r){var n=e,a=r;return lr({dC:n.fZ,dD:n.bX,dE:a.fZ,dF:a.bX,dG:n.f1,dH:n.bH,dI:a.f1,dJ:a.bH,dK:n.da,dL:n.bz,dM:a.da,dN:a.bz,dO:n.c2,dP:n.cN,dQ:a.c2,dR:a.cN})}),yn=L({bd:o(Ge,ke,ke),bM:o(Ge,ke,ke),bN:o(Ge,ke,ke),bO:o(Ge,ke,ke)},P(sn,0,0,0,0)),hu=514,_u=function(e){var r=e.Y,n=e.V,a=e.U;return P(ei,515,r,n,a)},wu=240,I1=b([_u({U:1,V:0,Y:!0}),ai({a8:xe,cr:wu,cS:0,bl:hu,c7:0,bu:xe,bv:xe}),oi]),O1=v(function(e,r){var n=e,a=r.fo,t=r.eW,i=r.ex,c=Se(a),l=c,u=Se(t),$=u,s=n.cQ;if(s.$){var m=s.a;return Rt($)?lr({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:0,dN:-1,dO:0,dP:0,dQ:0,dR:1}):lr({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:-2/($-l),dN:-($+l)/($-l),dO:0,dP:0,dQ:0,dR:1})}else{var d=s.a;return Rt($)?lr({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-1,dN:-2*l,dO:0,dP:0,dQ:-1,dR:0}):lr({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-($+l)/($-l),dN:-2*$*l/($-l),dO:0,dP:0,dQ:-1,dR:0})}}),aa=v(function(e,r){return(1&e>>r)===1?0:1}),U1=function(e){return b([_u({U:1,V:0,Y:!0}),ai({a8:xe,cr:wu,cS:e,bl:hu,c7:0,bu:xe,bv:xe}),oi])},q1=y(function(e,r,n){return qe(o(ne,function(a){var t=a<<4,i=P(sn,o(aa,a,0),o(aa,a,1),o(aa,a,2),o(aa,a,3));return p(tr,e,L(r,i),U1(t))},o(rn,1,o(Gn,2,n)-1)))}),en=function(e){var r=e;return r},J1=Cf,Y1={cE:Fr,c8:Ya,c9:Xo,db:In},Qa=function(e){var r=e;return r},X1=function(e){var r=Qa($n(e)),n=Je(Or(e)),a=Je(Ir(e)),t=Je(Hr(e));return lr({dC:t.fZ,dD:a.fZ,dE:n.fZ,dF:r.fZ,dG:t.f1,dH:a.f1,dI:n.f1,dJ:r.f1,dK:t.da,dL:a.da,dM:n.da,dN:r.da,dO:0,dP:0,dQ:0,dR:1})},Q1=v(function(e,r){var n=r;return X1(o(bu,n,e))}),K1=function(e){return o(Q1,Y1,e)},eb=function(e){var r=e;return r.c6},rb=function(e){var r=e;return Hr(r)},nb=function(e){var r=e;return Ir(r)},ab=function(e){var r=eb(e.eC),n=Gr({cE:Ot(r),c8:rb(r),c9:nb(r),db:Fn(Ut(r))}),a=qn(e.aP),t=a,i=P(Qt,n,1,q,b([t]));if(i.$===1)return z;var c=i.a,l=K1(r),u=o(te,.99,o(ce,Se(e.aJ),Aa(su(c)))),$=mu(c),s=$.a,d=$.b,m=$.c,f=H1(p(Zo,s,d,m)),h=o(te,1.01,o(Pn,f,Aa(du(c)))),g=o(O1,e.eC,{ex:e.ex,eW:h,fo:u}),w=J1(g).dR,x=w?Je(Fn(Ut(r))):en(Ot(r)),_=function(){var oe=e.b0;switch(oe.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var de=oe.a;return L(3,de);case 4:var de=oe.a;return L(4,de);default:return L(5,0)}}(),C=_.a,T=_.b,W=e.bF,j=W,R=o(Ko,j,e.b2),N=R,Z=lr({dC:0,dD:x.fZ,dE:dn(N),dF:e.ej,dG:0,dH:x.f1,dI:mn(N),dJ:da(f),dK:0,dL:x.da,dM:pn(N),dN:C,dO:0,dP:w,dQ:0,dR:T}),F=_e(lu,Z,l,g,G1,t,{L:z,T:z,fG:z}),J=e.bL;switch(J.$){case 0:var Q=J.a;return qe(b([p(tr,F.L,L(Q,pt),Ur),p(tr,F.T,yn,Ur)]));case 1:var Q=J.a;return qe(b([p(tr,F.L,yn,Ur),b([tc]),p(tr,F.fG,Q.bd,vu),b([fu(0)]),p(tr,F.L,L(Q,pt),I1),p(tr,F.T,yn,Ur)]));default:var ie=J.a,$e=J.b;return qe(b([p(tr,F.L,L($e,pt),Ur),b([tc]),o(C1,F.fG,ie),p(q1,F.L,$e,Wr(ie)),p(tr,F.T,yn,Ur)]))}},tb=function(e){return o(Br,"width",Ve(e))},ob=v(function(e,r){var n=b([Yp(1),r1(0),Gp(!0),P(Up,0,0,0,0)]),a=function(){var C=e.b3;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(D,Ip,n),"1",1);default:var T=C.a;return B(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Ki($),d=o(le,"height",Ve(s)+"px"),m=Ki(u),f=m/s,h=o(Qo,function(C){return ab({ex:f,eC:e.eC,aJ:e.aJ,aP:C.aP,bF:C.bF,bL:C.bL,ej:c,b0:C.b0,b2:C.b2})},r),g=o(le,"width",Ve(m)+"px"),w=e.aI,x=w,_=a1(x);return p(Kp,"div",b([o(le,"padding","0px"),g,d]),b([L(i,p(i1,t,b([tb(Ne(m*c)),Xp(Ne(s*c)),g,d,o(le,"display","block"),o(le,"background-color",_)]),h))]))}),ib=function(e){return o(ob,{b3:e.b3,aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bF:e.bF,bL:e.bL,b0:e.b0,b2:e.b2}]))},yu=function(e){return e},oc=yu({fZ:.31271,f1:.32902}),cb=v(function(e,r){var n=e,a=Je(r.eO),t=a.fZ,i=a.f1,c=a.da,l=o(Ko,r.cg,r.b9),u=l;return{bz:pn(u),eE:n,bH:mn(u),cN:0,bX:dn(u),c2:1,fZ:-t,f1:-i,da:-c}}),lb=function(e){return e},ub=function(e){return lb(1.2*o(Gn,2,e))},ht=function(e){return e},vb={$:0},$b=vb,xu=function(e){return e},fb=v(function(e,r){var n=e,a=r;return U(a,n)>0}),ic=function(e){var r=e;return r},sb=function(e){e:for(;;){if(Ye(e.e9,cr)&&Ye(e.fa,cr))return ke;if(o(fb,Se(e.e9),Se(e.fa))){var r={b9:e.b9,e9:e.fa,fa:e.e9,ep:Fn(e.ep)};e=r;continue e}else{var n=Y(ic(e.fa)/Ae),a=Y(ic(e.e9)/Ae),t=Je(e.ep),i=t.fZ,c=t.f1,l=t.da,u=o(Ko,xu(1),e.b9),$=u;return{bz:a*pn($),eE:!1,bH:a*mn($),cN:n/a,bX:a*dn($),c2:3,fZ:i,f1:c,da:l}}}},cc=function(e){return sb({b9:e.b9,e9:e.cg,fa:cr,ep:e.ep})},db=function(e){var r=e;return r},Su=function(e){var r=p(Ql,1667,25e3,db(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return yu({fZ:n,f1:a})},Cu=function(e){return e},mb=Su(Cu(12e3)),pb=Su(Cu(5600)),bb=function(e){return{$:2,a:e}},gb=function(e){return bb(e)},hb=v(function(e,r){return{$:2,a:e,b:r}}),Lu=function(e){return{$:0,a:e}},ta=function(e){var r=e;return r},_b=function(e){var r=e;return r.eE},wb=Lu(yn.a),yb=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(D,a,i),c):L(i,o(D,a,c))});return p(Sr,n,L(z,z),r)}),xb=function(e){var r=e;return lr({dC:r.fZ,dD:r.bX,dE:0,dF:0,dG:r.f1,dH:r.bH,dI:0,dJ:0,dK:r.da,dL:r.bz,dM:0,dN:0,dO:r.c2,dP:r.cN,dQ:0,dR:0})},Sb=ee(function(e,r,n,a,t,i,c,l){var u=o(yb,_b,b([ta(e),ta(r),ta(n),ta(a)])),$=u.a,s=u.b;if($.b){var d=ue($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,g=f.b,w=g.a,x=g.b,_=x.a;return o(hb,o(ne,xb,$),{bd:o(Ge,m,h),bM:o(Ge,w,_),bN:o(Ge,t,i),bO:o(Ge,c,l)})}else return wb}else return Lu({bd:o(Ge,e,r),bM:o(Ge,n,a),bN:o(Ge,t,i),bO:o(Ge,c,l)})}),Cb=y(function(e,r,n){return Wa(Sb,e,r,n,ke,ke,ke,ke,ke)}),Lb=function(e){var r=o(cb,Wp(e.fG),{b9:pb,eO:e.fO,cg:ht(8e4)}),n=cc({b9:mb,cg:ht(2e4),ep:e.ep}),a=cc({b9:oc,cg:ht(15e3),ep:Fn(e.ep)}),t=p(Cb,r,n,a);return ib({b3:gb(e.cd),aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK,aP:e.aP,bF:ub(15),bL:t,b0:$b,b2:oc})},zu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),zb=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Pu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ku=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Pb=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),kb=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Tb=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ii=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return P(Tb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return P(zu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return P(zb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return P(Pu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return P(kb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return P(ku,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return P(Pb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ci={$:0},Mb=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Va(c(u)),d=o(se,s.dW,e),m=o(ce,s.dT,r),f=o(se,s.dX,n),h=o(ce,s.dU,a),g=o(se,s.dY,t),w=o(ce,s.dV,i),x=c,_=$;e=d,r=m,n=f,a=h,t=g,i=w,c=x,l=_;continue e}else return{dT:r,dU:a,dV:i,dW:e,dX:n,dY:t}}),Db=y(function(e,r,n){var a=Va(e(r));return Wa(Mb,a.dW,a.dT,a.dX,a.dU,a.dY,a.dV,e,n)}),_t=v(function(e,r){var n=e,a=r;return U(a,n)<1}),Tu=function(e){return o(_t,e.dT,e.dW)&&o(_t,e.dU,e.dX)&&o(_t,e.dV,e.dY)?e:{dT:o(ce,e.dW,e.dT),dU:o(ce,e.dX,e.dU),dV:o(ce,e.dY,e.dV),dW:o(se,e.dW,e.dT),dX:o(se,e.dX,e.dU),dY:o(se,e.dY,e.dV)}},Vn=function(e){var r=e;return r},Mu=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=Pr(n),c=kr(n),l=Tr(n),u=Pr(a),$=kr(a),s=Tr(a),d=Pr(t),m=kr(t),f=Tr(t);return Tu({dT:o(ce,i,o(ce,u,d)),dU:o(ce,c,o(ce,$,m)),dV:o(ce,l,o(ce,s,f)),dW:o(se,i,o(se,u,d)),dX:o(se,c,o(se,$,m)),dY:o(se,l,o(se,s,f))})},Du=pf,Te=function(e){return Du(Qa(e))},Au=function(e){var r=e;return r},Ka=function(e){return Du(Au(e))},Ab=v(function(e,r){var n=e,a=r;return{fZ:a.f1*n.da-a.da*n.f1,f1:a.da*n.fZ-a.fZ*n.da,da:a.fZ*n.f1-a.f1*n.fZ}}),Kt=v(function(e,r){var n=e,a=r;return{fZ:a.fZ-n.fZ,f1:a.f1-n.f1,da:a.da-n.da}}),Bb={fZ:0,f1:0,da:0},Fb=v(function(e,r){var n=e,a=r,t=o(Oe,Y(a.fZ),o(Oe,Y(a.f1),Y(a.da)));if(t){var i=a.da/t,c=a.f1/t,l=a.fZ/t,u=Nr(l*l+c*c+i*i);return{fZ:n*l/u,f1:n*c/u,da:n*i/u}}else return Bb}),Vb=Fb(xu(1)),Bu=y(function(e,r,n){var a=o(Kt,r,n),t=o(Kt,e,r);return Vb(o(Ab,a,t))}),Eb=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=Ka(p(Bu,n,a,t));return B({n:i,bV:Te(n)},{n:i,bV:Te(a)},{n:i,bV:Te(t)})},Rb=v(function(e,r){return{$:2,a:e,b:r}}),Fu=Rb({dj:3,ds:0,d_:4}),jb=function(e){if(e.b){var r=e.a,n=e.b,a=Fu(o(ne,Eb,e)),t=p(Db,Mu,r,n);return P(zu,t,e,a,0)}else return ci},Ze=y(function(e,r,n){return B(e,r,n)}),Vu=function(){var e=rr(1),r=rr(1),n=rr(1),a=o(te,-.5,e),t=o(te,-.5,r),i=o(te,-.5,n),c=p(me,i,t,a),l=o(te,.5,e),u=p(me,i,t,l),$=o(te,.5,r),s=p(me,i,$,a),d=p(me,i,$,l),m=o(te,.5,n),f=p(me,m,t,a),h=p(me,m,$,a),g=p(me,m,t,l),w=p(me,m,$,l);return ii(jb(b([p(Ze,c,h,f),p(Ze,c,s,h),p(Ze,u,g,w),p(Ze,u,w,d),p(Ze,f,h,w),p(Ze,f,w,g),p(Ze,c,d,s),p(Ze,c,u,d),p(Ze,c,f,g),p(Ze,c,g,u),p(Ze,s,w,h),p(Ze,s,d,w)])))}(),oa={$:0},Nb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Wb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ka(p(Bu,u,l,c)),s={n:$,bV:Te(u)},d={n:$,bV:Te(l)},m={n:$,bV:Te(c)};return o(D,s,o(D,d,o(D,m,n)))}),li=function(e){var r=e;return r.C},Zb=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),eo=4294967295>>>32-Dn,ro=hv,Gb=y(function(e,r,n){e:for(;;){var a=eo&r>>>e,t=o(ro,a,n);if(t.$){var $=t.a;return o(ro,eo&r,$)}else{var i=t.a,c=e-Dn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Hb=function(e){return e>>>5<<5},Ib=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?q:U(e,Hb(n))>-1?re(o(ro,eo&e,i)):re(p(Gb,a,e,t))}),ui=function(e){var r=e;return r.ag},wt=v(function(e,r){return o(Ib,e,ui(r))}),Ob=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(Zb,y(function(c,l,u){return B(c,l,u)}),o(wt,a,e),o(wt,t,e),o(wt,i,e))};return o(Zn,r,li(e))},Ub=y(function(e,r,n){e:for(;;){var a=o(Co,je,e),t=a.a,i=a.b;if(U(Vt(t),je)<0)return o(ol,!0,{y:r,l:n,o:t});var c=i,l=o(D,tl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),vi=function(e){return e.b?p(Ub,e,z,0):nl},qb=y(function(e,r,n){return e(r(n))}),Jb=v(function(e,r){return!o(Mo,o(qb,Gs,e),r)}),Yb=function(e){var r=e.a;return r},Eu=v(function(e,r){var n=Yb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(Jb,a,r)?{C:r,ag:e}:{C:o(No,a,r),ag:e}}),Xb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Jn=Xb({dj:1,ds:3,d_:4}),pa=v(function(e,r){var n=en(r),a=en(e);return L(B(a.fZ,a.f1,a.da),B(n.fZ,n.f1,n.da))}),lc=p(On,0,0,0),yt=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(qa,o(pa,e,r),t);if($.$){var d={n:lc,bV:Te(r)},m={n:lc,bV:Te(e)},f=u+1,h=u;return B(o(D,B(n,h,f),o(D,B(n,f,a),c)),o(D,d,o(D,m,l)),u+2)}else{var s=$.a;return B(o(D,B(n,s,a),c),l,u)}}),Qb=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,g=a,w=e,x=r,_=$,C=a+3,T=_e(yt,s,m,f,g,r,_e(yt,d,s,h,f,r,_e(yt,m,d,g,h,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var W=t,j=W.a,R=W.b;return L(j,Re(R))}}),Kb=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,g=n,w=p(Cn,o(pa,m,s),f,p(Cn,o(pa,s,d),h,p(Cn,o(pa,d,m),g,t))),x=o(D,B(g,h,f),a),_=e,C=$,T=n+3,W=x,j=w;e=_,r=C,n=T,a=W,t=j;continue e}else return B(a,t,n)}),Er=y(function(e,r,n){var a=Ob(n),t=p(Sr,Wb(r),z,a),i=S(Kb,r,a,0,z,Rl),c=i.a,l=i.b,u=i.c,$=S(Qb,r,l,a,0,B(c,z,u)),s=$.a,d=$.b,m=Vl(d)?t:ue(t,d);return p(Nb,e,o(Eu,vi(m),s),o(Jn,m,s))}),no=function(e){return{C:o(ne,function(r){return B(3*r,3*r+1,3*r+2)},o(rn,0,Wr(e)-1)),ag:vi(qe(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Ru=function(e){switch(e.$){case 0:return oa;case 1:var a=e.a,r=e.b,n=o(ne,Vn,r);return p(Er,a,$r,no(n));case 2:var a=e.a,r=e.b,n=o(ne,Vn,r);return p(Er,a,$r,no(n));case 3:var a=e.a,t=e.b;return p(Er,a,$r,t);case 4:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 5:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 6:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 7:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 8:return oa;case 9:return oa;default:return oa}},uc=Ru(Vu),ju={$:0},k=ju,be=v(function(e,r){return{$:1,a:e,b:r}}),e3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bD"}},r3=1029,n3=function(e){return{$:5,a:e}},Nu=function(e){var r=e;return n3(r)},a3=Nu(r3),t3=1028,o3=Nu(t3),Me=y(function(e,r,n){return r===1?e?o(D,a3,n):o(D,o3,n):n}),Wu={src:`
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
    `,attributes:{position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xt=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return S(ae,p(Me,l,a,d),Wu,e3,n,{bD:e,b:c,c:i,d:$,e:t,f:u})}))}),$i={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"av"}},Zu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pr=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return S(ae,p(Me,l,a,d),Zu,$i,n,{av:e,b:c,c:i,d:$,e:t,f:u})}))}),Gu=v(function(e,r){return{$:3,a:e,b:r}}),i3={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bU",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},c3=E(function(e,r,n,a){return o(Gu,n,ee(function(t,i,c,l,u,$,s,d){return S(ae,d,Hu,i3,a,{av:e,b:c,c:i,bU:r,d:$,e:t,f:u})}))}),fi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Yn=function(e){var r=e;return r},et=bf,br=ge(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return S(ae,p(Me,u,t,m),Zu,fi,a,{aN:o(et,Yn(r),e),b:l,c,d:s,e:i,f:$})}))}),l3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bU",sceneProperties:"e"}},u3=ge(function(e,r,n,a,t){return o(Gu,a,ee(function(i,c,l,u,$,s,d,m){return S(ae,m,Hu,l3,t,{aN:o(et,Yn(r),e),b:l,c,bU:n,d:s,e:i,f:$})}))}),Iu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColor:"cs",sceneProperties:"e",viewMatrix:"f"}},Ou={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ia=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ae,p(Me,l,a,d),Ou,Iu,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,cs:e,b:c,c:i,d:$,e:t,f:u})}))}),Uu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColorTexture:"ct",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},qu={src:`
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
    `,attributes:{normal:"n",position:"bV",tangent:"el",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},v3=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var h=m.a,g=m.b;return S(ae,p(Me,$,i,f),qu,Uu,t,{O:g,bd:h.bd,bM:h.bM,bN:h.bN,bO:h.bO,ct:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Ju={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b7",constantBaseColor:"ca",constantMetallic:"cb",constantRoughness:"cc",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallicTexture:"cx",normalMapTexture:"aW",roughnessTexture:"cW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},$3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(be,u,ee(function(d,m,f,h,g,w,x,_){var C=x.a,T=x.b;return S(ae,p(Me,h,s,_),qu,Ju,$,{b7:e,ca:r,cb:i,cc:a,O:T,bd:C.bd,bM:C.bM,bN:C.bN,bO:C.bO,cx:t,b:f,c:m,aW:c,d:w,cW:n,e:d,a$:l,f:g})}))}}}}}}}}}}},Yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b6",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallic:"cw",roughness:"cV",sceneProperties:"e",viewMatrix:"f"}},ca=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var h=m.a,g=m.b;return S(ae,p(Me,$,i,f),Ou,Yu,t,{b6:e,O:g,bd:h.bd,bM:h.bM,bN:h.bN,bO:h.bO,cw:n,b:u,c:l,d,cV:r,e:c,f:s})}))}),f3=function(e){return{$:0,a:e}},vc=v(function(e,r){return{$:1,a:e,b:r}}),kn=v(function(e,r){if(r.$){var n=r.a.B;return L(n,1)}else return r.a,L(e,0)}),s3=function(e){return P(sn,dn(e),mn(e),pn(e),1)},si=P(sn,0,0,0,0),ba=v(function(e,r){if(r.$){var a=r.a.B;return L(a,si)}else{var n=r.a;return L(e,s3(n))}}),Xu=v(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.B;return o(vc,L(t,si),o(kn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(vc,o(ba,t,e),o(kn,t,r))}else{var a=n.a.a;return n.b.a,f3(a)}}),d3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),la=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),m3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),p3=function(e){return o(Fe,e,1)},ao=o(Fe,0,0),qr=v(function(e,r){if(r.$){var a=r.a.B;return L(a,ao)}else{var n=r.a;return L(e,p3(n))}}),Qu=E(function(e,r,n,a){var t=P(m3,e,r,n,a);if(t.a.$){var u=t.a.a.B;return P(la,L(u,si),o(qr,u,r),o(qr,u,n),o(kn,u,a))}else if(t.b.$){var u=t.b.a.B;return P(la,o(ba,u,e),L(u,ao),o(qr,u,n),o(kn,u,a))}else if(t.c.$){var u=t.c.a.B;return P(la,o(ba,u,e),o(qr,u,r),L(u,ao),o(kn,u,a))}else if(t.d.$){var u=t.d.a.B;return P(la,o(ba,u,e),o(qr,u,r),o(qr,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(d3,i,c,l)}}),b3={src:`
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
    `,attributes:{},uniforms:{backlight:"b4",colorTexture:"bD",sceneProperties:"e"}},St=ge(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return S(ae,p(Me,u,t,m),Wu,b3,a,{b4:Yn(r),bD:e,b:l,c,d:s,e:i,f:$})}))}),Ku={src:`
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
    `,attributes:{normal:"n",position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},g3=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ae,p(Me,l,a,d),Ku,Uu,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,ct:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),h3=io(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function($,s,d,m,f,h,g,w){var x=g.a,_=g.b;return S(ae,p(Me,m,u,w),Ku,Ju,l,{b7:e,ca:r,cb:i,cc:a,O:_,bd:x.bd,bM:x.bM,bN:x.bN,bO:x.bO,cx:t,b:d,c:s,aW:e,d:h,cW:n,e:$,a$:0,f})}))}),En=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),_3=function(e){var r=e;return p(En,r.dW,r.dT,.5)},w3=function(e){var r=e;return p(En,r.dX,r.dU,.5)},y3=function(e){var r=e;return p(En,r.dY,r.dV,.5)},x3=function(e){return p(me,_3(e),w3(e),y3(e))},G=function(e){var r=mu(e),n=r.a,a=r.b,t=r.c;return{eF:Qa(x3(e)),eZ:n/2,e_:a/2,e$:t/2}},di=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return P(xt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(xt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(xt,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return P(pr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return P(pr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return P(c3,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(St,l,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(St,l,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(St,l,$,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(br,u,$,G(t),c,a);case 8:var t=r.a,c=r.c;return S(br,u,$,G(t),c,0);case 9:var t=r.a,c=r.c;return S(br,u,$,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(u3,u,$,i,G(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Xu,s,j);if(d.$){var h=d.a,g=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return P(g3,g,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(v3,g,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,W=e.d,j=e.e,R=P(Qu,C,T,W,j);if(R.$){var J=R.a,Q=J.a,ie=J.b,$e=R.b,oe=$e.a,de=$e.b,De=R.c,Ce=De.a,Cr=De.b,Lr=R.d,x=Lr.a,_=Lr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return dv(h3,Q,ie,oe,de,Ce,Cr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return $3(Q)(ie)(oe)(de)(Ce)(Cr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var N=R.a,Z=R.b,F=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Ct=function(e){var r=e;return r.fZ},Lt=function(e){var r=e;return r.f1},zt=function(e){var r=e;return r.da},S3=function(e){var r=e,n=zt(r.db),a=Lt(r.db),t=Ct(r.db),i=zt(r.c9),c=Lt(r.c9),l=Ct(r.c9),u=zt(r.c8),$=Lt(r.c8),s=Ct(r.c8);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},C3=function(e){var r=Qa($n(e)),n=Je(Or(e)),a=Je(Ir(e)),t=Je(Hr(e));return{du:S3(e),p:t.fZ,q:t.f1,r:t.da,s:a.fZ,t:a.f1,u:a.da,v:n.fZ,w:n.f1,x:n.da,G:r.fZ,H:r.f1,I:r.da,bZ:1}},Jr=v(function(e,r){return{$:5,a:e,b:r}}),ev=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(cu,a,e);return o(Jr,i,t);case 1:return o(Jr,e,n);case 3:return o(Jr,e,n);case 2:return o(Jr,e,n);default:return o(Jr,e,n)}}),rv=v(function(e,r){return o(ev,C3(e),r)}),rt=function(e){return{$:2,a:e}},L3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eF;return{eF:{fZ:n*i.fZ,f1:a*i.f1,da:t*i.da},eZ:n*r.eZ,e_:a*r.e_,e$:t*r.e$}}),z3=_f,P3=hf,$c=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=P3(a),h=f.fZ,g=f.f1,w=f.da,x=f.et,_=z3({et:x,fZ:h*s,f1:g*d,da:w*m});return Wa(r,n,_,t,i,c,l,u,$)}}}}}}}}}},to=v(function(e,r){switch(r.$){case 0:return ju;case 5:var n=r.a,a=r.b;return o(Jr,n,o(to,e,a));case 1:var t=r.a,i=r.b;return o(be,o(L3,e,t),o($c,e,i));case 3:return r;case 2:var i=r.a;return rt(o($c,e,i));default:var c=r.a;return gu(o(ne,to(e),c))}}),mi=v(function(e,r){var n=r;return o(to,e,n)}),pi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},nv=7683,av=7682,k3=p(ni,{cr:0,cS:0,c7:15},{a8:xe,bl:on,bu:xe,bv:nv},{a8:xe,bl:on,bu:xe,bv:av}),T3=p(ni,{cr:0,cS:0,c7:15},{a8:xe,bl:on,bu:xe,bv:av},{a8:xe,bl:on,bu:xe,bv:nv}),bi=v(function(e,r){return e?o(D,T3,r):o(D,k3,r)}),M3={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},D3=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,$){return S(ae,o(bi,i,$),M3,pi,r,{b:t,c:a,d:l,e:n,b$:u,f:c})}))}else return q},Ea=function(e){var r=D3(e);if(r.$)return k;var n=r.a;return rt(n)},A3=E(function(e,r,n,a){var t=o(di,n,Vu),i=function(){var s=L(e,r);return s.a?s.b?qn(b([t,Ea(uc)])):t:s.b?Ea(uc):k}(),c=Uo(a),l=c.a,u=c.b,$=c.c;return o(rv,Oo(a),o(mi,B(l,u,$),i))}),B3=v(function(e,r){return P(A3,!0,!0,e,r)}),tv=v(function(e,r){return{$:0,a:e,b:r}}),F3=function(e){var r=Fo(e),n=r.cR,a=r.cf,t=r.b8;return p(On,n,a,t)},V3=function(e){return o(tv,0,Xt(F3(e)))},E3=function(e){var r=e;return r.k},Tn=function(e){var r=e;return an(r)},R3=v(function(e,r){var n=e.bV,a=e.n;return o(D,{n:Ka(a),bV:Te(n)},r)}),j3=Na(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=pn(l.bV),s=mn(l.bV),d=dn(l.bV),m=o(zn,e,d),f=o(Oe,r,d),h=o(zn,n,s),g=o(Oe,a,s),w=o(zn,t,$),x=o(Oe,i,$),_=u;e=m,r=f,n=h,a=g,t=w,i=x,c=_;continue e}else return Tu({dT:r,dU:a,dV:i,dW:e,dX:n,dY:t})}),ov=v(function(e,r){var n=pn(e.bV),a=mn(e.bV),t=dn(e.bV);return co(j3,t,t,a,a,n,n,r)}),N3=function(e){var r=p(qc,R3,z,ui(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,li(e)),i=o(ov,n,a);return P(Pu,i,e,t,0)}else return ci},fc=v(function(e,r){var n=e,a=r,t=n.c9,i=t,c=n.c8,l=c;return{fZ:a.fZ*l.fZ+a.f1*i.fZ,f1:a.fZ*l.f1+a.f1*i.f1,da:a.fZ*l.da+a.f1*i.da}}),Ra=function(e){var r=e;return tn(r)},xn=function(e){var r=e;return r},oo=function(e){return nr(2*Ae*e)},sc=Hl({cE:Fr,c8:Ya,c9:Xo}),iv=function(){var e=72,r=o(Jl,e,oo(1)),n=rr(1),a=xn(jo),t=xn(Wo),i=rr(1),c=o(te,.5,i),l=p(me,cr,cr,c),u=o(te,-.5,i),$=p(me,cr,cr,u),s=function(f){var h=o(te,f,r),g=xn(o(fc,sc,qt(h))),w=o(te,Tn(h),n),x=o(te,Ra(h),n),_=p(me,w,x,c),C=p(me,w,x,u),T=o(ka,e,f+1),W=o(te,T,r),j=xn(o(fc,sc,qt(W))),R=o(te,Tn(W),n),N=o(te,Ra(W),n),Z=p(me,R,N,u),F=p(me,R,N,c);return b([B({n:t,bV:$},{n:t,bV:Z},{n:t,bV:C}),B({n:g,bV:C},{n:j,bV:Z},{n:j,bV:F}),B({n:g,bV:C},{n:j,bV:F},{n:g,bV:_}),B({n:a,bV:l},{n:a,bV:_},{n:a,bV:F})])},d=o(ne,s,o(rn,0,e-1)),m=no(qe(d));return ii(N3(m))}(),dc=Ru(iv),W3=function(e){var r=e,n=Y(r.da),a=Y(r.f1),t=Y(r.fZ);if(U(t,a)<1)if(U(t,n)<1){var i=Nr(r.da*r.da+r.f1*r.f1);return{fZ:0,f1:-r.da/i,da:r.f1/i}}else{var i=Nr(r.f1*r.f1+r.fZ*r.fZ);return{fZ:-r.f1/i,f1:r.fZ/i,da:0}}else if(U(a,n)<1){var i=Nr(r.da*r.da+r.fZ*r.fZ);return{fZ:r.da/i,f1:0,da:-r.fZ/i}}else{var i=Nr(r.fZ*r.fZ+r.f1*r.f1);return{fZ:-r.f1/i,f1:r.fZ/i,da:0}}},Z3=function(e){var r=W3(e),n=r,a=n,t=e,i=t,c={fZ:i.f1*a.da-i.da*a.f1,f1:i.da*a.fZ-i.fZ*a.da,da:i.fZ*a.f1-i.f1*a.fZ};return L(r,c)},G3=function(e){var r=Ro(e),n=Z3(r),a=n.a,t=n.b;return Gr({cE:ql(e),c8:a,c9:t,db:r})},H3=function(e){var r=e;return r.ff},I3=function(e){var r=e;return r.fz},O3=E(function(e,r,n,a){var t=G3(E3(a)),i=o(di,n,iv),c=function(){var d=L(e,r);return d.a?d.b?qn(b([i,Ea(dc)])):i:d.b?Ea(dc):k}(),l=I3(a),u=l,$=H3(a),s=$;return o(rv,t,o(mi,B(u,u,s),c))}),U3=v(function(e,r){return P(O3,!0,!0,e,r)}),mc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Sn=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=en(n),c=en(a),l=en(t);return lr({dC:i.fZ,dD:c.fZ,dE:l.fZ,dF:0,dG:i.f1,dH:c.f1,dI:l.f1,dJ:0,dK:i.da,dL:c.da,dM:l.da,dN:0,dO:0,dP:0,dQ:0,dR:0})},ua=Fu(b([B({c1:0},{c1:1},{c1:2})])),q3=v(function(e,r){var n=Mu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,k;var t=e.b.a;return o(be,a,ee(function(_,C,T,W,j,R,N,Z){return S(ae,p(Me,W,0,Z),mc,$i,ua,{av:t,b:T,c:C,d:R,e:_,bq:Sn(r),f:j})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,ee(function(_,C,T,W,j,R,N,Z){return S(ae,p(Me,W,0,Z),mc,fi,ua,{aN:o(et,Yn(c),i),b:T,c:C,d:R,e:_,bq:Sn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Xu,l,f);if(u.$)return k;var $=u.a;return o(be,a,ee(function(_,C,T,W,j,R,N,Z){var F=N.a,J=N.b;return S(ae,p(Me,W,0,Z),pc,Iu,ua,{O:J,bd:F.bd,bM:F.bM,bN:F.bN,bO:F.bO,cs:$,b:T,c:C,d:R,e:_,bq:Sn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=P(Qu,s,d,m,f);if(h.$)return k;var g=h.a,w=h.b,x=h.c;return o(be,a,ee(function(_,C,T,W,j,R,N,Z){var F=N.a,J=N.b;return S(ae,p(Me,W,0,Z),pc,Yu,ua,{b6:g,O:J,bd:F.bd,bM:F.bM,bN:F.bN,bO:F.bO,cw:x,b:T,c:C,d:R,cV:w,e:_,bq:Sn(r),f:j})}))}}),J3=function(){var e=b([{a_:o(Fe,0,1)},{a_:o(Fe,1,1)},{a_:o(Fe,2,1)},{a_:o(Fe,0,-1)},{a_:o(Fe,1,-1)},{a_:o(Fe,2,-1)}]),r=b([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Jn,e,r)}(),Y3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",triangleVertexPositions:"bq",viewMatrix:"f"}},bc=function(e){return rt(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(bi,t,u),Y3,pi,J3,{b:a,c:n,d:c,e:r,b$:l,bq:Sn(e),f:i})}))},X3=E(function(e,r,n,a){var t=o(q3,n,a),i=L(e,r);return i.a?i.b?qn(b([t,bc(a)])):t:i.b?bc(a):k}),Q3=v(function(e,r){return P(X3,!0,!0,e,r)}),K3=v(function(e,r){var n=Tr(r),a=Tr(e),t=kr(r),i=kr(e),c=Pr(r),l=Pr(e);return{dT:o(ce,l,c),dU:o(ce,i,t),dV:o(ce,a,n),dW:o(se,l,c),dX:o(se,i,t),dY:o(se,a,n)}}),eg=function(e){var r=qo(e),n=r.a,a=r.b;return o(K3,n,a)},gc={src:`
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
    `,attributes:{lineSegmentVertex:"dB"},uniforms:{lineSegmentEndPoint:"dz",lineSegmentStartPoint:"dA",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rg=v(function(e,r){return{$:1,a:e,b:r}}),ng=rg({dj:2,ds:0,d_:1}),hc=ng(b([L({dB:0},{dB:1})])),ag=v(function(e,r){var n=eg(r),a=G(n),t=qo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,k;var l=e.b.a;return o(be,a,ee(function($,s,d,m,f,h,g,w){return S(ae,w,gc,$i,hc,{av:l,dz:Te(c),dA:Te(i),b:d,c:s,d:h,e:$,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,d,m,f,h,g,w,x){return S(ae,x,gc,fi,hc,{aN:o(et,Yn(u),l),dz:Te(c),dA:Te(i),b:m,c:d,d:g,e:s,f:h})}));case 2:return k;default:return k}}),tg=v(function(e,r){return o(ag,e,r)}),_c=v(function(e,r){var n=e,a=r;return n/a}),og=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(Ye(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),wc=v(function(e,r){return e<1?z:S(og,0,e,e,r,z)}),ig=v(function(e,r){var n=e.bV,a=e.n,t=e.K,i=t,c=i.a,l=i.b;return o(D,{n:Ka(a),bV:Te(n),K:o(Fe,c,l)},r)}),cg=function(e){var r=p(qc,ig,z,ui(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,li(e)),i=o(ov,n,a);return P(ku,i,e,t,0)}else return ci},cv=v(function(e,r){var n=e,a=r,t=an(a);return{fZ:t*an(n),f1:t*tn(n),da:tn(a)}}),lg=function(){var e=rr(1),r=72,n=o(rn,0,r-1),a=o(wc,r,o(En,cr,oo(1))),t=xo(r/2),i=o(rn,0,t-1),c=o(wc,t,o(En,wn(90),wn(-90))),l=vi(qe(o(ne,function(s){return o(ne,function(d){return{n:xn(o(cv,s,d)),bV:p(me,o(te,Tn(d)*Tn(s),e),o(te,Tn(d)*Ra(s),e),o(te,Ra(d),e)),K:L(o(_c,s,oo(1)),o(_c,o(Pn,wn(90),d),wn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=qe(o(ne,function(s){return qe(o(ne,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),g=o(u,s,d+1);return b([B(g,h,m),B(g,m,f)])},i))},n));return ii(cg(o(Eu,l,$)))}(),ja=72,va=2*ja,ug=v(function(e,r){e:for(;;){var n=va+1,a=o(ka,va,2*e+3),t=o(ka,va,2*e+2),i=2*e+1,c=2*e,l=va,u=o(D,B(l,c,t),o(D,B(c,a,t),o(D,B(c,i,a),o(D,B(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),vg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$g=v(function(e,r){e:for(;;){var n=p(vg,0,2*Ae,e/ja),a={bx:n,bR:0,bY:1},t={bx:n,bR:1,bY:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),fg=function(){var e=o($g,ja-1,b([{bx:0,bR:0,bY:0},{bx:0,bR:1,bY:0}])),r=o(ug,ja-1,z);return o(Jn,e,r)}(),sg={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bR",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},yc=function(e){return rt(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(bi,!0,u),sg,pi,fg,{av:p(On,0,0,1),b:a,c:n,d:c,e:r,b$:l,f:i})}))},dg=function(e){var r=Au(e);return{du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:r.fZ,H:r.f1,I:r.da,bZ:1}},mg=v(function(e,r){return o(ev,dg(e),r)}),pg=E(function(e,r,n,a){var t=o(di,n,lg),i=function(){var u=L(e,r);return u.a?u.b?qn(b([t,yc()])):t:u.b?yc():k}(),c=Yo(a),l=c;return o(mg,o(Kt,Fr,Jo(a)),o(mi,B(l,l,l),i))}),bg=v(function(e,r){return P(pg,!0,!0,e,r)}),gg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),hg=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),_g=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(tv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(gg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Xl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(hg,n,a,t,i,c)}},wg=_g,lv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(B3,t,r)]);case 1:var t=e.a,n=e.b;return b([o(Q3,t,n)]);case 3:var t=e.a,a=e.b;return b([o(bg,wg(t),a)]);case 2:var t=e.a,i=e.b;return b([o(U3,t,i)]);case 4:var c=e.a,l=e.b;return b([o(tg,V3(c),l)]);default:var u=e.a;return o(Qo,lv,u)}},yg=function(e){return o(Qo,lv,e)},xg=v(function(e,r){return Lb({aI:jp(e.ez),eC:e.eC,aJ:Np(.5),cd:e.cd,aK:L(Qi(Ne(e.b_.fX)),Qi(Ne(e.b_.e1))),aP:yg(r),fG:!0,fO:o(cv,nr(e.fN),nr(e.fP)),ep:In})}),Sg=v(function(e,r){return o(xg,{ez:P(Ml,0,0,0,0),eC:Ol(e),cd:e.cd,b_:e.b_,fN:o(_r,"sunlight azimuth",e),fP:o(_r,"sunlight elevation",e)},b([Mp(e),o(Rp,e,r)]))}),Cg=v(function(e,r){return o(O,b([o(le,"width","100%")]),b([ip,o(Sg,e,r)]))}),Lg=P(Hm,Cg,tp,Ym,Om);const zg={Main:{init:Lg(o(A,function(e){return Be({e8:e})},o(M,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Be({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fW:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Be({ev:d,eI:s,di:$,eP:u,fe:l,fy:c,fC:i,fH:t,eo:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",La(Bn)))},o(M,"left",X))},o(M,"pressedKeys",La(Bn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Be({di:$,dt:u,fj:l,fD:c,fE:i,eo:t,fZ:a,f1:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(A,function(r){return o(A,function(n){return Be({e1:n,fX:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(A,function(e){return o(A,function(r){return Be({eL:r,eM:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Pg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},kg=()=>{Pt("pointerdown"),Pt("wheel"),Pt("keydown")},Pt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Tg=zg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});kg();Pg(Tg);
