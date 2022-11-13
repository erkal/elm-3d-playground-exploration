(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Mr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Mr(2,e,function(r){return function(n){return e(r,n)}})}function C(e){return Mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return Mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Na(e){return Mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function uo(e){return Mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function x(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function vo(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Wa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function bv(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var gv=[];function hv(e){return e.length}var _v=C(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),yv=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),Cv=v(function(e,r){return r[e]});C(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});C(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Sv=C(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});C(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});C(function(e,r,n){return n.slice(e,r)});C(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+xv()),r});function xv(e){return"<internals>"}function cn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ye(e,r){for(var n,a=[],t=Mt(e,r,0,a);t&&(n=a.pop());t=Mt(n.a,n.b,0,a));return t}function Mt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&cn(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=Fi(e),r=Fi(r));for(var t in e)if(!Mt(e[t],r[t],n+1,a))return!1;return!0}v(Ye);v(function(e,r){return!Ye(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return I(e,r)<0});v(function(e,r){return I(e,r)<1});v(function(e,r){return I(e,r)>0});v(function(e,r){return I(e,r)>=0});var wv=v(function(e,r){var n=I(e,r);return n<0?Kc:n?$s:Qc}),Rn=0;function L(e,r){return{a:e,b:r}}function k(e,r,n){return{a:e,b:r,c:n}}function Oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=sr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=sr(e.a,r);return n}var z={$:0};function sr(e,r){return{$:1,a:e,b:r}}var Lv=v(sr);function b(e){for(var r=z,n=e.length;n--;)r=sr(e[n],r);return r}function Za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Pv=C(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return b(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(x(e,r.a,n.a,a.a,t.a,i.a));return b(c)});v(function(e,r){return b(Za(r).sort(function(n,a){return I(e(n),e(a))}))});v(function(e,r){return b(Za(r).sort(function(n,a){var t=o(e,n,a);return t===Qc?0:t===Kc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var zv=v(Math.pow);v(function(e,r){return r%e});var Tv=v(function(e,r){var n=r%e;return e===0?cn(11):n>0&&e<0||n<0&&e>0?n+e:n}),kv=Math.PI,Mv=Math.cos,Dv=Math.sin,Av=Math.tan,Bv=Math.atan;v(Math.atan2);function Fv(e){return e}function Vv(e){return e===1/0||e===-1/0}var Ev=Math.ceil,Rv=Math.floor,jv=Math.round,Nv=Math.sqrt,yi=Math.log,Wv=isNaN;function Zv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Gv=v(function(e,r){return e+r});function Hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ov(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Iv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}C(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Uv=C(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),qv=v(function(e,r){return r.split(e)}),Jv=v(function(e,r){return r.join(e)}),Yv=C(function(e,r,n){return n.slice(e,r)});function Xv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Qv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Kv=v(function(e,r){return r.indexOf(e)>-1}),e$=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var r$=v(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Lc(e){return e+""}function n$(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function a$(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function t$(e){return Za(e).join("")}function o$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function i$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function c$(e){return{$:0,a:e}}function $o(e){return{$:2,b:e}}var l$=$o(function(e){return typeof e=="boolean"?$e(e):or("a BOOL",e)}),u$=$o(function(e){return typeof e=="number"?$e(e):or("a FLOAT",e)}),v$=$o(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):or("a STRING",e)});function $$(e){return{$:3,b:e}}var f$=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Dr(e,r){return{$:9,f:e,g:r}}var s$=v(function(e,r){return{$:10,b:r,h:e}}),d$=v(function(e,r){return Dr(e,[r])}),m$=C(function(e,r,n){return Dr(e,[r,n])});E(function(e,r,n,a){return Dr(e,[r,n,a])});ge(function(e,r,n,a,t){return Dr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return Dr(e,[r,n,a,t,i])});Na(function(e,r,n,a,t,i,c){return Dr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Dr(e,[r,n,a,t,i,c,l])});uo(function(e,r,n,a,t,i,c,l,u){return Dr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return He(e,n)}catch(a){return ye(o(xo,"This is not valid JSON! "+a.message,r))}});var Pc=v(function(e,r){return He(e,r)});function He(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):or("null",r);case 3:return Xn(r)?Ci(e.b,r,b):or("a LIST",r);case 4:return Xn(r)?Ci(e.b,r,p$):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var $=He(e.b,r[n]);return Ke($)?$:ye(o(Vi,n,$.a));case 7:var a=e.e;if(!Xn(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=He(e.b,r[a]);return Ke($)?$:ye(o(el,a,$.a));case 8:if(typeof r!="object"||r===null||Xn(r))return or("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var $=He(e.b,r[i]);if(!Ke($))return ye(o(Vi,i,$.a));t=sr(L(i,$.a),t)}return $e(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=He(l[u],r);if(!Ke($))return $;c=c($.a)}return $e(c);case 10:var $=He(e.b,r);return Ke($)?He(e.h($.a),r):$;case 11:for(var s=z,d=e.g;d.b;d=d.b){var $=He(d.a,r);if(Ke($))return $;s=sr($.a,s)}return ye(fs(Re(s)));case 1:return ye(o(xo,e.a,r));case 0:return $e(e.a)}}function Ci(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=He(e,r[i]);if(!Ke(c))return ye(o(el,i,c.a));t[i]=c.a}return $e(n(t))}function Xn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function p$(e){return o(ks,e.length,function(r){return e[r]})}function or(e,r){return ye(o(xo,"Expecting "+e,r))}function Xr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Xr(e.b,r.b);case 6:return e.d===r.d&&Xr(e.b,r.b);case 7:return e.e===r.e&&Xr(e.b,r.b);case 9:return e.f===r.f&&Si(e.g,r.g);case 10:return e.h===r.h&&Xr(e.b,r.b);case 11:return Si(e.g,r.g)}}function Si(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Xr(e[a],r[a]))return!1;return!0}var b$=v(function(e,r){return JSON.stringify(r,null,e)+""});function zc(e){return e}C(function(e,r,n){return n[e]=r,n});function Gr(e){return{$:0,a:e}}function g$(e){return{$:1,a:e}}function Cr(e){return{$:2,b:e,c:null}}var Dt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function h$(e){return{$:5,b:e}}var _$=0;function fo(e){var r={$:0,e:_$++,f:e,g:null,h:[]};return so(r),r}function Tc(e){return Cr(function(r){r(Gr(fo(e)))})}function kc(e,r){e.h.push(r),so(e)}var y$=v(function(e,r){return Cr(function(n){kc(e,r),n(Gr(Rn))})}),at=!1,xi=[];function so(e){if(xi.push(e),!at){for(at=!0;e=xi.shift();)C$(e);at=!1}}function C$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,so(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return mo(r,a,e.e7,e.fT,e.fM,function(){return function(){}})});function mo(e,r,n,a,t,i){var c=o(Pc,e,r?r.flags:void 0);Ke(c)||cn(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=S$(l,m);function m(f,h){var g=o(a,f,$);s($=g.a,h),Li(l,g.b,t($))}return Li(l,u.b,t($)),d?{ports:d}:{}}var ur={};function S$(e,r){var n;for(var a in ur){var t=ur[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=w$(t,r)}return n}function x$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function w$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Dt,l,h$(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?P(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=fo(o(Dt,l,e.b))}var L$=v(function(e,r){return Cr(function(n){e.g(r),n(Gr(Rn))})});v(function(e,r){return o(y$,e.h,{$:0,a:r})});function Mc(e){return function(r){return{$:1,k:e,l:r}}}function P$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var wi=[],tt=!1;function Li(e,r,n){if(wi.push({p:e,q:r,r:n}),!tt){tt=!0;for(var a;a=wi.shift();)z$(a.p,a.q,a.r);tt=!1}}function z$(e,r,n){var a={};ga(!0,r,a,null),ga(!1,n,a,null);for(var t in e)kc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ga(e,r,n,a){switch(r.$){case 1:var t=r.k,i=T$(e,t,a,r.l);n[t]=k$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ga(e,c.a,n,a);return;case 3:ga(e,r.o,n,{s:r.n,t:a});return}}function T$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ur[r].e:ur[r].f;return o(i,t,a)}function k$(e,r,n){return n=n||{i:z,j:z},e?n.i=sr(r,n.i):n.j=sr(r,n.j),n}function M$(e){ur[e]&&cn(3)}v(function(e,r){return r});function D$(e,r){return M$(e),ur[e]={f:A$,u:r,a:B$},Mc(e)}var A$=v(function(e,r){return function(n){return e(r(n))}});function B$(e,r){var n=z,a=ur[e].u,t=Gr(null);ur[e].b=t,ur[e].c=C(function(c,l,u){return n=l,t});function i(c){var l=o(Pc,a,c);Ke(l)||cn(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ha,hr=typeof document<"u"?document:{};function po(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Pr(e,function(){}),t),{}});function At(e){return{$:0,a:e}}var Dc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:bo(n),e:t,f:e,b:i}})}),Sr=Dc(void 0),F$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:bo(n),e:t,f:e,b:i}})}),V$=F$(void 0);function E$(e,r,n,a){return{$:3,d:bo(e),g:r,h:n,i:a}}var R$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Ar(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Ar([e,r],function(){return e(r)})});C(function(e,r,n){return Ar([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Ar([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Ar([e,r,n,a,t],function(){return P(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return Ar([e,r,n,a,t,i],function(){return x(e,r,n,a,t,i)})});Na(function(e,r,n,a,t,i,c){return Ar([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Ar([e,r,n,a,t,i,c,l],function(){return vo(e,r,n,a,t,i,c,l)})});uo(function(e,r,n,a,t,i,c,l,u){return Ar([e,r,n,a,t,i,c,l,u],function(){return Wa(e,r,n,a,t,i,c,l,u)})});var Ac=v(function(e,r){return{$:"a0",n:e,o:r}}),j$=v(function(e,r){return{$:"a1",n:e,o:r}}),Bc=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}}),N$=C(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function W$(e){return e=="script"?"p":e}function Z$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(Ac,r.n,G$(e,r.o)):r});function G$(e,r){var n=To(r);return{$:r.$,a:n?p(Ms,n<3?H$:O$,Be(e),r.a):o(Sa,e,r.a)}}var H$=v(function(e,r){return L(e(r.a),r.b)}),O$=v(function(e,r){return{ak:e(r.ak),c$:r.c$,cP:r.cP}});function bo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Pi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Pi(c,t,i):c[t]=i}return r}function Pi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Pr(e,r){var n=e.$;if(n===5)return Pr(e.k||(e.k=e.m()),r);if(n===0)return hr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Bt(c,r,e.d),c}var c=e.f?hr.createElementNS(e.f,e.c):hr.createElement(e.c);ha&&e.c=="a"&&c.addEventListener("click",ha(c)),Bt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)po(c,Pr(n===1?l[u]:l[u].b,r));return c}function Bt(e,r,n){for(var a in n){var t=n[a];a==="a1"?I$(e,t):a==="a0"?J$(e,r,t):a==="a3"?U$(e,t):a==="a4"?q$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function I$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function U$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function q$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function J$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Y$(r,i),e.addEventListener(t,c,go&&{passive:To(i)<2}),a[t]=c}}var go;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){go=!0}}))}catch{}function Y$(e,r){function n(a){var t=n.q,i=He(t.a,a);if(!!Ke(i)){for(var c=To(t),l=i.a,u=c?c<3?l.a:l.ak:l,$=c==1?l.b:c==3&&l.c$,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cP)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function X$(e,r){return e.$==r.$&&Xr(e.a,r.a)}function Fc(e,r){var n=[];return er(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function er(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=of(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];er(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!Q$(d,m):d!==m)&&he(n,2,a,m),er(h,g,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:zi(e,r,n,a,K$);return;case 2:zi(e,r,n,a,ef);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var y=ho(e.d,r.d);y&&he(n,4,a,y);var S=r.i(e.g,r.g);S&&he(n,5,a,S);return}}}function Q$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function zi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=ho(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function ho(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ho(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&X$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function K$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];er(s,i[$],n,++a),a+=s.b||0}}function ef(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var h=l[d],g=u[m],y=h.a,S=g.a,_=h.b,w=g.b,M=void 0,W=void 0;if(y===S){f++,er(_,w,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,Z=j.b;W=S===N}if(R){var F=R.a,J=R.b;M=y===F}if(M&&W){f++,er(_,J,t,f),bn(i,t,y,w,m,c),f+=_.b||0,f++,gn(i,t,y,Z,f),f+=Z.b||0,d+=2,m+=2;continue}if(M){f++,bn(i,t,S,w,m,c),er(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(W){f++,gn(i,t,y,_,f),f+=_.b||0,f++,er(Z,w,t,f),f+=Z.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,gn(i,t,y,_,f),bn(i,t,S,w,m,c),f+=_.b||0,f++,er(Z,J,t,f),f+=Z.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var h=l[d],_=h.b;gn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],g=u[m];bn(i,t,g.a,g.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var Vc="_elmW6BL";function bn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];er(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}bn(e,r,n+Vc,a,t,i)}function gn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];er(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}gn(e,r,n+Vc,a,t)}function Ec(e,r,n,a){hn(e,r,n,0,0,r.b,a)}function hn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)Ec(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&hn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&hn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return hn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,y=0;y<h.length;y++){t++;var S=m===1?h[y]:h[y].b,_=t+(S.b||0);if(t<=u&&u<=_&&(a=hn(g[y],S,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Rc(e,r,n,a){return n.length===0?e:(Ec(e,r,n,a),_a(e,n))}function _a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=rf(t,a);t===e&&(e=i)}return e}function rf(e,r){switch(r.$){case 0:return nf(e,r.s,r.u);case 4:return Bt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return _a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=_a(e,i.w),e;case 8:return af(e,r);case 5:return r.s(e);default:cn(10)}}function nf(e,r,n){var a=e.parentNode,t=Pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function af(e,r){var n=r.s,a=tf(n.y,r);e=_a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&po(e,a),e}function tf(e,r){if(!!e){for(var n=hr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;po(n,i.c===2?i.s:Pr(i.z,r.u))}return n}}function _o(e){if(e.nodeType===3)return At(e.textContent);if(e.nodeType!==1)return At("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=sr(o(Br,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,$=e.childNodes,a=$.length;a--;)u=sr(_o($[a]),u);return p(Sr,l,r,u)}function of(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var cf=E(function(e,r,n,a){return mo(r,a,e.e7,e.fT,e.fM,function(t,i){var c=e.fV,l=a.node,u=_o(l);return jc(i,function($){var s=c($),d=Fc(u,s);l=Rc(l,u,d,t),u=s})})});E(function(e,r,n,a){return mo(r,a,e.e7,e.fT,e.fM,function(t,i){var c=e.cX&&e.cX(t),l=e.fV,u=hr.title,$=hr.body,s=_o($);return jc(i,function(d){ha=c;var m=l(d),f=Sr("body")(z)(m.eB),h=Fc(s,f);$=Rc($,s,h,t),s=f,ha=0,u!==m.fQ&&(hr.title=u=m.fQ)})})});var ya=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function jc(e,r){r(e);var n=0;function a(){n=n===1?0:(ya(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ya(a),n=2)}}v(function(e,r){return o(Do,ko,Cr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(Do,ko,Cr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(Do,ko,Cr(function(){history.replaceState({},"",r),e()}))});var lf={addEventListener:function(){},removeEventListener:function(){}},uf=typeof window<"u"?window:lf;C(function(e,r,n){return Tc(Cr(function(a){function t(i){fo(n(i))}return e.addEventListener(r,t,go&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=He(e,r);return Ke(n)?re(n.a):q});function Nc(e,r){return Cr(function(n){ya(function(){var a=document.getElementById(e);n(a?Gr(r(a)):g$(As(e)))})})}function vf(e){return Cr(function(r){ya(function(){r(Gr(e()))})})}v(function(e,r){return Nc(r,function(n){return n[e](),Rn})});v(function(e,r){return vf(function(){return uf.scroll(e,r),Rn})});C(function(e,r,n){return Nc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var $f=v(function(e,r){var n="g";e.fm&&(n+="m"),e.eD&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var ff=C(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):q}a.push(P(Al,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):q}return n(P(Al,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});C(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var sf=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/df(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function df(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var yo=new Float64Array(3),Ti=new Float64Array(3),ki=new Float64Array(3),mf=C(function(e,r,n){return new Float64Array([e,r,n])}),pf=function(e){return e[0]},bf=function(e){return e[1]},gf=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var hf=function(e){return new Float64Array([e.fZ,e.f1,e.da])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Wc);function Zc(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ca(Wc(e,r,n),n)}v(Zc);function Gc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Ca(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Gc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var _f=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),_n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(_n);function Ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Ft);v(function(e,r){var n,a=yo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=_n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(_n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(_n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(_n(r,a)+e[14])/n,t});var yf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Cf=function(e){return{fZ:e[0],f1:e[1],da:e[2],et:e[3]}},Sf=function(e){return new Float64Array([e.fZ,e.f1,e.da,e.et])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/xf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function xf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var wf=new Float64Array(16),Lf=new Float64Array(16),Pf=function(e){var r=new Float64Array(16);return r[0]=e.dC,r[1]=e.dG,r[2]=e.dK,r[3]=e.dO,r[4]=e.dD,r[5]=e.dH,r[6]=e.dL,r[7]=e.dP,r[8]=e.dE,r[9]=e.dI,r[10]=e.dM,r[11]=e.dQ,r[12]=e.dF,r[13]=e.dJ,r[14]=e.dN,r[15]=e.dR,r},zf=function(e){return{dC:e[0],dG:e[1],dK:e[2],dO:e[3],dD:e[4],dH:e[5],dL:e[6],dP:e[7],dE:e[8],dI:e[9],dM:e[10],dQ:e[11],dF:e[12],dJ:e[13],dN:e[14],dR:e[15]}};function Hc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Hc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Hc(c,l,i,t,n,a)});function Oc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(Oc);E(function(e,r,n,a){return Oc(e,r,n,a,-1,1)});function Ic(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],g=e[12],y=e[13],S=e[14],_=e[15],w=r[0],M=r[1],W=r[2],j=r[3],R=r[4],N=r[5],Z=r[6],F=r[7],J=r[8],Q=r[9],le=r[10],fe=r[11],ce=r[12],me=r[13],De=r[14],we=r[15];return n[0]=a*w+l*M+d*W+g*j,n[1]=t*w+u*M+m*W+y*j,n[2]=i*w+$*M+f*W+S*j,n[3]=c*w+s*M+h*W+_*j,n[4]=a*R+l*N+d*Z+g*F,n[5]=t*R+u*N+m*Z+y*F,n[6]=i*R+$*N+f*Z+S*F,n[7]=c*R+s*N+h*Z+_*F,n[8]=a*J+l*Q+d*le+g*fe,n[9]=t*J+u*Q+m*le+y*fe,n[10]=i*J+$*Q+f*le+S*fe,n[11]=c*J+s*Q+h*le+_*fe,n[12]=a*ce+l*me+d*De+g*we,n[13]=t*ce+u*me+m*De+y*we,n[14]=i*ce+$*me+f*De+S*we,n[15]=c*ce+s*me+h*De+_*we,n}v(Ic);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],g=r[0],y=r[1],S=r[2],_=r[4],w=r[5],M=r[6],W=r[8],j=r[9],R=r[10],N=r[12],Z=r[13],F=r[14];return n[0]=a*g+c*y+$*S,n[1]=t*g+l*y+s*S,n[2]=i*g+u*y+d*S,n[3]=0,n[4]=a*_+c*w+$*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+d*M,n[7]=0,n[8]=a*W+c*j+$*R,n[9]=t*W+l*j+s*R,n[10]=i*W+u*j+d*R,n[11]=0,n[12]=a*N+c*Z+$*F+m,n[13]=t*N+l*Z+s*F+f,n[14]=i*N+u*Z+d*F+h,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Ca(r,yo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});C(function(e,r,n){var a=new Float64Array(16),t=1/Gc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*$,g=i*l*$,y=c*l*$,S=i*i*$+u,_=h+f,w=g-m,M=h-f,W=c*c*$+u,j=y+d,R=g+m,N=y-d,Z=l*l*$+u,F=n[0],J=n[1],Q=n[2],le=n[3],fe=n[4],ce=n[5],me=n[6],De=n[7],we=n[8],wr=n[9],Lr=n[10],nt=n[11],sv=n[12],dv=n[13],mv=n[14],pv=n[15];return a[0]=F*S+fe*_+we*w,a[1]=J*S+ce*_+wr*w,a[2]=Q*S+me*_+Lr*w,a[3]=le*S+De*_+nt*w,a[4]=F*M+fe*W+we*j,a[5]=J*M+ce*W+wr*j,a[6]=Q*M+me*W+Lr*j,a[7]=le*M+De*W+nt*j,a[8]=F*R+fe*N+we*Z,a[9]=J*R+ce*N+wr*Z,a[10]=Q*R+me*N+Lr*Z,a[11]=le*R+De*N+nt*Z,a[12]=sv,a[13]=dv,a[14]=mv,a[15]=pv,a});function Tf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}C(Tf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function kf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}C(kf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=g,t[11]=y,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+y*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],g=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=g,n[10]=y,n[11]=S,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+y*i+r[14],n[15]=$*a+f*t+S*i+r[15],n});C(function(e,r,n){var a=Zc(e,r,yo),t=Ca(Ft(n,a,Ti),Ti),i=Ca(Ft(a,t,ki),ki),c=wf,l=Lf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Ic(c,l)});C(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Mi=0;function Mn(e,r){for(;r.b;r=r.b)e(r.a)}function Co(e){for(var r=0;e.b;e=e.b)r++;return r}var Mf=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Df=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Af=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Bf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Ff=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Vf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ef=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Rf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),jf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Nf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Wf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Zf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Gf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Hf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Uc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},qc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Of=function(e){e.gl.disable(e.gl.CULL_FACE)},If=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Uf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},qf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Di=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Jf=[Zf,Gf,Hf,Uc,qc,Of,If,Uf,qf];function Ai(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Yf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Jc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Xf(e,r,n,a){for(var t=n.a.dj,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,y,S){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?y[S]:y[S][_];else i.forEach(function(w){for(_=0;_<h;_++)f[g++]=h===1?y[w][S]:y[w][S][_]})}var u=Jc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(Co(n.b)*s);Mn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Qf(e,r){if(r.a.ds>0){var n=e.createBuffer(),a=Kf(r.c,r.a.ds);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dj*Co(r.b),indexBuffer:null,buffers:{}}}function Kf(e,r){var n=new Uint32Array(Co(e)*r),a=0,t;return Mn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Bi(e,r){return e+"#"+r}var Yc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Uc(n),qc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Bi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=Mi++,$||($=Ai(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Mi++,s||(s=Ai(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Yf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=es(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Bi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),rs(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Qf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Xf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var y=Jc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,_=S*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(h+w),a.vertexAttribPointer(h+w,y.size,y.baseType,!1,_,S*w)}for(n.toggle=!n.toggle,Mn(op(n),i.a),u=0;u<Di.length;u++){var M=n[Di[u]];M.toggle!==n.toggle&&M.enabled&&(Jf[u](n),M.enabled=!1,M.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.d_,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d_,0,g.numIndices)}}return Mn(t,e.g),r});function es(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,y=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var S=c++;return function(_){e.activeTexture(e.TEXTURE0+S);var w=l.textures.get(_);w||(w=_.eJ(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[g]!==_&&(e.uniform1i(y,S),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function rs(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var ns=C(function(e,r,n){return E$(r,{g:n,f:{},h:e},us,vs)}),as=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),ts=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),os=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),is=v(function(e,r){e.contextAttributes.antialias=!0}),cs=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),ls=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function us(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Mn(function(t){return o(tp,r,t)},e.h);var n=hr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Mf(function(){return o(Yc,e,n)})):(n=hr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function vs(e,r){return r.f=e.f,Yc(r)}var A=Lv,Qn=Sv,Xc=C(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Qn,e,l,$)}else{var u=c.a;return p(Qn,i,l,u)}});return p(Qn,i,p(Qn,e,r,t),a)}),So=C(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(So,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),Fi=function(e){return p(So,C(function(r,n,a){return o(A,L(r,n),a)}),z,e)},Qc=1,$s=2,Kc=0,ye=function(e){return{$:1,a:e}},xo=v(function(e,r){return{$:3,a:e,b:r}}),Vi=v(function(e,r){return{$:0,a:e,b:r}}),el=v(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},fs=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},ss=Qv,ds=b$,Ve=Lc,Rr=v(function(e,r){return o(Jv,e,Za(r))}),wo=v(function(e,r){return b(o(qv,e,r))}),rl=function(e){return o(Rr,`
    `,o(wo,`
`,e))},jn=C(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Zr=function(e){return p(jn,v(function(r,n){return n+1}),0,e)},ms=Pv,ps=C(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),rn=v(function(e,r){return p(ps,e,r,z)}),nl=v(function(e,r){return p(ms,e,o(rn,0,Zr(r)-1),r)}),vr=o$,al=function(e){var r=vr(e);return 97<=r&&r<=122},tl=function(e){var r=vr(e);return r<=90&&65<=r},bs=function(e){return al(e)||tl(e)},gs=function(e){var r=vr(e);return r<=57&&48<=r},hs=function(e){return al(e)||tl(e)||gs(e)},Re=function(e){return p(jn,A,z,e)},ln=Hv,_s=v(function(e,r){return`

(`+(Ve(e+1)+(") "+rl(ys(r))))}),ys=function(e){return o(Cs,e,z)},Cs=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=ln(n);if(g.$===1)return!1;var y=g.a,S=y.a,_=y.b;return bs(S)&&o(ss,hs,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(A,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,$=o(A,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Rr,"",Re(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ve(Zr(s))+" ways:"));return o(Rr,`

`,o(A,h,o(nl,_s,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Rr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Rr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return h+(rl(o(ds,4,f))+(`

`+m))}}),je=32,Vt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Et=gv,Lo=Ev,Po=v(function(e,r){return yi(r)/yi(e)}),Ss=Fv,Dn=Lo(o(Po,2,je)),ol=P(Vt,0,Dn,Et,Et),il=_v,cl=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var xs=Rv,Rt=hv,Ie=v(function(e,r){return I(e,r)>0?e:r}),ws=function(e){return{$:0,a:e}},zo=yv,Ls=v(function(e,r){e:for(;;){var n=o(zo,je,e),a=n.a,t=n.b,i=o(A,ws(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),Ps=function(e){var r=e.a;return r},zs=v(function(e,r){e:for(;;){var n=Lo(r/je);if(n===1)return o(zo,je,e).a;var a=o(Ls,e,z),t=n;e=a,r=t;continue e}}),ll=v(function(e,r){if(r.l){var n=r.l*je,a=xs(o(Po,je,n-1)),t=e?Re(r.y):r.y,i=o(zs,t,r.l);return P(Vt,Rt(r.o)+n,o(Ie,5,a*Dn),i,r.o)}else return P(Vt,Rt(r.o),Dn,Et,r.o)}),Ts=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ll,!1,{y:a,l:n/je|0,o:t});var i=cl(p(il,je,r,e)),c=e,l=r-je,u=n,$=o(A,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),ks=v(function(e,r){if(e<=0)return ol;var n=e%je,a=p(il,n,e-n,r),t=e-n-je;return x(Ts,r,t,e,z,a)}),Ke=function(e){return!e.$},B=s$,X=l$,D=f$,se=u$,Sa=d$,Ms=m$,Be=c$,To=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=Sr("div"),Ds=function(e){return{$:2,a:e}},ul=v(function(e,r){return e}),vl=v(function(e,r){return{bB:r.bB,eH:e,cd:r.cd,eQ:r.eQ,fd:r.fd,cO:r.cO,b_:r.b_,fW:r.fW}}),$r=function(e){return e},As=$r,Ei=Xe(function(e,r,n,a,t,i){return{$7:i,dq:r,d2:a,d5:n,d8:e,d9:t}}),Bs=Kv,jr=Ov,Qr=Yv,Nn=v(function(e,r){return e<1?r:p(Qr,e,jr(r),r)}),Ga=r$,Ha=function(e){return e===""},Oa=v(function(e,r){return e<1?"":p(Qr,0,e,r)}),$l=n$,Ri=ge(function(e,r,n,a,t){if(Ha(t)||o(Bs,"@",t))return q;var i=o(Ga,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=$l(o(Nn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(Ei,e,o(Oa,c,t),u,r,n,a))}else return re(_e(Ei,e,t,q,r,n,a))}),ji=E(function(e,r,n,a){if(Ha(a))return q;var t=o(Ga,"/",a);if(t.b){var i=t.a;return x(Ri,e,o(Nn,i,a),r,n,o(Oa,i,a))}else return x(Ri,e,"/",r,n,a)}),Ni=C(function(e,r,n){if(Ha(n))return q;var a=o(Ga,"?",n);if(a.b){var t=a.a;return P(ji,e,re(o(Nn,t+1,n)),r,o(Oa,t,n))}else return P(ji,e,q,r,n)});v(function(e,r){if(Ha(r))return q;var n=o(Ga,"#",r);if(n.b){var a=n.a;return p(Ni,e,re(o(Nn,a+1,r)),o(Oa,a,r))}else return p(Ni,e,q,r)});var Fs=e$,ko=function(e){},Wn=Gr,Vs=Wn(0),fl=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(jn,e,r,Re(d)):P(fl,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),xr=C(function(e,r,n){return P(fl,e,r,0,n)}),ae=v(function(e,r){return p(xr,v(function(n,a){return o(A,e(n),a)}),z,r)}),xa=Dt,Mo=v(function(e,r){return o(xa,function(n){return Wn(e(n))},r)}),Es=C(function(e,r,n){return o(xa,function(a){return o(xa,function(t){return Wn(o(e,a,t))},n)},r)}),Rs=function(e){return p(xr,Es(A),Wn(z),e)},js=L$,Ns=v(function(e,r){var n=r;return Tc(o(xa,js(e),n))}),Ws=C(function(e,r,n){return o(Mo,function(a){return 0},Rs(o(ae,Ns(e),r)))}),Zs=C(function(e,r,n){return Wn(0)}),Gs=v(function(e,r){var n=r;return o(Mo,e,n)});ur.Task=x$(Vs,Ws,Zs,Gs);var Hs=Mc("Task"),Do=v(function(e,r){return Hs(o(Mo,e,r))}),Os=cf,Is=Zv,wa={$:1},sl=function(e){return{$:2,a:e}},Ia={$:0},Ue=v(function(e,r){return{$:0,a:e,b:r}}),K=C(function(e,r,n){return r(e(n))}),un=function(e){var r=e.b.A;return r.a},Us=function(e){var r=e.a,n=e.b.S,a=e.b.A,t=e.b.aa;if(t.b){var i=t.a,c=t.b;return re(o(Ue,r,{A:i,aa:c,S:o(A,a,n)}))}else return q},dl=function(e){var r=e.b;return o(Ue,Ia,r)},dr=v(function(e,r){if(r.$)return e;var n=r.a;return n}),qs=C(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cO.di?dl(n):n;case 2:var i=a.a.c0;return(I(i+r.eQ,un(n).bB)>0?o(K,Us,dr(o(Ue,wa,t))):$r)(o(Ue,sl({c0:i+r.eQ}),t));default:var c=t.A,l=c.a,u=c.b,$=o(vl,l.eH,Oe(r,{bB:l.bB+r.eQ})),s=o(e,$,u);return o(Ue,Ia,{A:L($,s),aa:z,S:o(A,t.A,t.S)})}}),ml=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Js=C(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Ys=v(function(e,r){return Re(p(Js,e,r,z))}),pl=C(function(e,r,n){if(r<=0)return z;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,g=h.a,y=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,g,o(Ys,r-4,y))))):o(A,_,o(A,c,o(A,s,o(A,g,p(pl,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return b([_])}}),Xs=v(function(e,r){return p(pl,0,e,r)}),Qs=v(function(e,r){var n=r.b.S,a=r.b.A,t=r.b.aa,i=ve(Re(n),ve(b([a]),t)),c=o(Xs,e,i),l=o(ml,e,i);if(l.b){var u=l.a,$=l.b;return o(Ue,wa,{A:u,aa:$,S:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(Ue,wa,{A:d,aa:z,S:m})}else return r}}),Ks=function(e){var r=e.b;return o(Ue,wa,r)},ed=function(e){var r=e.b;return o(Ue,sl({c0:un(e).bB}),r)},rd=v(function(e,r){switch(e.$){case 1:return Ks(r);case 2:return dl(r);case 3:return ed(r);default:var n=e.a;return o(Qs,n,r)}}),bl=v(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),nd=v(function(e,r){return Oe(r,{au:e(r.au)})}),ad=function(e){return{$:3,a:e}},gl=function(e){return{$:2,a:e}},hl=v(function(e,r){return{$:0,a:e,b:r}}),td=v(function(e,r){return{$:1,a:e,b:r}}),Ce=v(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),Y=function(e){return e<0?-e:e},Ao=a$,od=C(function(e,r,n){return o(dr,0/0,Ao(o(e,r,n)))}),Bo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),id=Uv,_l=function(e){return p(id,A,z,e)},cd=v(function(e,r){var n=o(Bo,function(a){return a!=="0"&&a!=="."},_l(r));return ve(e&&n?"-":"",r)}),ie=Lc,jt=Gv,yl=i$,Cl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ln(n);if(a.$===1)return"01";var t=a.a;return o(jt,"0",Cl(t))}else{var i=vr(r);return i>=48&&i<57?o(jt,yl(i+1),n):"0"}},Nt=Vv,ld=Wv,Ua=function(e){return o(jt,e,"")},Sl=C(function(e,r,n){return e<=0?n:p(Sl,e>>1,ve(r,r),e&1?ve(n,r):n)}),An=v(function(e,r){return p(Sl,e,r,"")}),Wt=C(function(e,r,n){return ve(n,o(An,e-jr(n),Ua(r)))}),Zt=Iv,xl=function(e){var r=o(wo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},ud=function(e){var r=o(wo,"e",ie(Y(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,$l(o(Fs,"+",t)?o(Nn,1,t):t)),c=xl(n),l=c.a,u=c.b,$=ve(l,u),s=i<0?o(dr,"0",o(Ce,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ce,bl(Ua),ln(ve(o(An,Y(i),"0"),$))))):p(Wt,i+1,"0",$);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},vd=C(function(e,r,n){if(Nt(n)||ld(n))return ie(n);var a=n<0,t=xl(ud(Y(n))),i=t.a,c=t.b,l=jr(i)+r,u=ve(o(An,-l+1,"0"),p(Wt,l,"0",ve(i,c))),$=jr(u),s=o(Ie,1,l),d=o(e,a,p(Qr,s,$,u)),m=p(Qr,0,s,u),f=d?Zt(o(dr,"1",o(Ce,Cl,ln(Zt(m))))):m,h=jr(f),g=f==="0"?f:r<=0?ve(f,o(An,Y(r),"0")):I(r,jr(c))<0?p(Qr,0,h-r,f)+("."+p(Qr,h-r,h,f)):ve(i+".",p(Wt,r,"0",c));return o(cd,a,g)}),wl=vd(v(function(e,r){var n=ln(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(vr(t))})),$d=od(wl),fd=C(function(e,r,n){var a=o(Po,10,Y(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o($d,t,n)}),Ll=wv,qa=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Ll,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),mr={$:-2},nn=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return x(H,0,r,n,x(H,1,$,s,d,m),x(H,1,i,c,l,u))}else return x(H,e,i,c,x(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,y=f.d,S=f.e,m=a.e;return x(H,0,$,s,x(H,1,h,g,y,S),x(H,1,r,n,m,t))}else return x(H,e,r,n,a,t)}),Gt=C(function(e,r,n){if(n.$===-2)return x(H,0,e,r,mr,mr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Ll,e,t);switch(u){case 0:return x(nn,a,t,i,p(Gt,e,r,c),l);case 1:return x(H,a,t,r,c,l);default:return x(nn,a,t,i,c,p(Gt,e,r,l))}}),wn=C(function(e,r,n){var a=p(Gt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return x(H,1,t,i,c,l)}else{var u=a;return u}}),sd=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Pl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,h=m.c,g=m.d,y=m.e,S=$.e;return x(H,0,f,h,x(H,1,n,a,x(H,0,i,c,l,u),g),x(H,1,s,d,y,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,d=w.c,m=w.d,S=w.e;return x(H,1,n,a,x(H,0,i,c,l,u),x(H,0,s,d,m,S))}else return e},Wi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,g=f.c,y=f.d,S=f.e;return x(H,0,i,c,x(H,1,u,$,s,d),x(H,1,n,a,m,x(H,0,h,g,y,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,m=_.e,M=e.e;M.a;var h=M.b,g=M.c,y=M.d,S=M.e;return x(H,1,n,a,x(H,0,i,c,w,m),x(H,0,h,g,y,S))}else return e},dd=Na(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return x(H,n,l,u,$,x(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Wi(r)}else break e;else return c.a,c.d,Wi(r);else break e;return r}}),$a=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,x(H,r,n,a,$a(t),l);var u=Pl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return x(nn,$,s,d,$a(m),f)}else return mr}else return x(H,r,n,a,$a(t),l)}else return mr},Ln=v(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,x(H,n,a,t,o(Ln,e,i),c);var u=Pl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return x(nn,$,s,d,o(Ln,e,m),f)}else return mr}else return x(H,n,a,t,o(Ln,e,i),c);else return o(md,e,vo(dd,e,r,n,a,t,i,c))}),md=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Ye(e,a)){var l=sd(c);if(l.$===-1){var u=l.b,$=l.c;return x(nn,n,u,$,i,$a(c))}else return mr}else return x(nn,n,a,t,i,o(Ln,e,c))}else return mr}),pd=v(function(e,r){var n=o(Ln,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return x(H,1,a,t,i,c)}else{var l=n;return l}}),Kn=C(function(e,r,n){var a=r(o(qa,e,n));if(a.$)return o(pd,e,n);var t=a.a;return p(wn,e,t,n)}),bd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Kn,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(td,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Kn,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(hl,L(i,c),p(fd,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Kn,r,Ce(function(a){return a.$===3?ad(n):a}));default:var r=e.a,n=e.b;return o(Kn,r,Ce(function(a){return a.$===2?gl(n):a}))}},gd=function(e){return nd(bd(e))},hd=v(function(e,r){return o(ae,gd(e),r)}),_d=v(function(e,r){return Oe(r,{eH:o(hd,e,r.eH)})}),yd=v(function(e,r){var n=r.a,a=r.b;return o(Ue,n,Oe(a,{A:o(bl,_d(e),a.A)}))}),Cd=v(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),Sd=C(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ue,a,Oe(t,{A:o(Cd,o(e,i.a,r),i)}))}),xd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Oe(a,{aL:!a.aL});case 2:var t=n.a;return Oe(a,{F:p(qs,e,t,a.F)});case 3:var i=n.a;return Oe(a,{F:o(yd,i,a.F)});case 4:var c=n.a;return Oe(a,{F:p(Sd,r,c,a.F)});default:var l=n.a;return Oe(a,{F:o(rd,l,a.F)})}}),wd=v(function(e,r){return o(Ue,Ia,{A:L(e,r(e)),aa:z,S:z})}),Ld=P$,Zi=Ld(z),La=$$,Bn=v$,Pd=D$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Be({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fW:e})},o(D,"clock",se))},o(D,"devicePixelRatio",se))},o(D,"dt",se))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return o(B,function(s){return o(B,function(d){return Be({ev:d,eI:s,di:$,eP:u,fe:l,fy:c,fC:i,fH:t,eo:a})},o(D,"alt",X))},o(D,"control",X))},o(D,"down",X))},o(D,"downs",La(Bn)))},o(D,"left",X))},o(D,"pressedKeys",La(Bn)))},o(D,"right",X))},o(D,"shift",X))},o(D,"up",X))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return Be({di:$,dt:u,fj:l,fD:c,fE:i,eo:t,fZ:a,f1:n})},o(D,"down",X))},o(D,"isDown",X))},o(D,"move",X))},o(D,"rightDown",X))},o(D,"rightUp",X))},o(D,"up",X))},o(D,"x",se))},o(D,"y",se))))},o(D,"screen",o(B,function(r){return o(B,function(n){return Be({e1:n,fX:r})},o(D,"height",se))},o(D,"width",se))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return Be({eL:r,eM:e})},o(D,"deltaX",se))},o(D,"deltaY",se))))),zd=function(e){return{$:4,a:e}},Td={$:0},kd=zc,Qe=v(function(e,r){return o(Bc,e,kd(r))}),O=Qe("className"),Md=function(e){var r=e.b.A;return r.b},Pa=Qe("id"),Dd=R$,za=Dd,Ad=j$,ne=Ad,Bd={$:1},Fd=function(e){return{$:3,a:e}},Vd=function(e){return{$:5,a:e}},Gi=Sr("a"),Fo=Sr("button"),Hi=function(e){return o(Qe,"href",Z$(e))},Ed=Br("clip-rule"),Le=Br("d"),Rd=Br("fill"),zl=Dc("http://www.w3.org/2000/svg"),jd=zl("svg"),Nd=Br("viewBox"),Wd=o(N$,"http://www.w3.org/XML/1998/namespace","xml:space"),We=jd(b([Nd("0 0 24 24"),Rd("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),Wd("http://www.w3.org/2000/svg")])),Zd=Br("fill-rule"),Pe=zl("path"),Wr={eK:We(b([o(Pe,b([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),eX:We(b([o(Pe,b([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),e0:We(b([o(Pe,b([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),fk:We(b([o(Pe,b([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),o(Pe,b([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),fl:We(b([o(Pe,b([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),o(Pe,b([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),fv:We(b([o(Pe,b([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),fw:We(b([o(Pe,b([Le("M7 5V19L18 12L7 5Z")]),z)])),fx:We(b([o(Pe,b([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),cO:We(b([o(Pe,b([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),fR:We(b([o(Pe,b([Zd("evenodd"),Ed("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),fS:We(b([o(Pe,b([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),f5:We(b([o(Pe,b([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},Gd=function(e){return{$:0,a:e}},Tl=Ac,kl=v(function(e,r){return o(Tl,e,Gd(r))}),Vo=function(e){return o(kl,"click",Be(e))},Oi=Qe("target"),Hd=Qe("title"),Ht=v(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return x(H,n,a,o(e,a,t),o(Ht,e,i),o(Ht,e,c))}),Od=At,Ee=Od,Id=function(e){return p(So,C(function(r,n,a){return o(A,n,a)}),z,e)},Ud=v(function(e,r){return{$:3,a:e,b:r}}),qd=v(function(e,r){return{$:2,a:e,b:r}}),Jd=v(function(e,r){return{$:0,a:e,b:r}}),Yd=v(function(e,r){return{$:1,a:e,b:r}}),Ja=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Eo=P(Ja,0/255,0/255,0/255,1),Xd=zc,Ml=v(function(e,r){return o(Bc,e,Xd(r))}),Qd=Ml("checked"),Ne=jv,Kd=C(function(e,r,n){return ve(o(An,e-jr(n),Ua(r)),n)}),Ta=Tv,Dl=function(e){var r=function(n){return n<10?Ve(n):Ua(yl(87+n))};return e<16?r(e):ve(Dl(e/16|0),r(o(Ta,16,e)))},em=o(K,Dl,o(Kd,2,"0")),Ro=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b8:a,cf:n,cR:r}},rm=function(e){var r=Ro(e),n=r.cR,a=r.cf,t=r.b8;return o(Rr,"",o(A,"#",o(ae,o(K,Ne,em),b([n*255,a*255,t*255]))))},Ot=Qe("htmlFor"),nm=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ka=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),am=C(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Zn=v(function(e,r){return p(xr,am(e),z,r)}),Al=E(function(e,r,n,a){return{e6:r,fh:e,fq:n,fL:a}}),tm=ff,om=t$,im=v(function(e,r){if(r.$)return ye(e);var n=r.a;return $e(n)}),cm=$f,lm=function(e){return o(cm,{eD:!1,fm:!1},e)},vn=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},um=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return $e(e(n))}}),vm=function(e){return{$:2,a:e}},$m=function(e){return{$:0,a:e}},fm=function(e){return{$:1,a:e}},ot=v(function(e,r){return vr(r)-vr(e)}),it=C(function(e,r,n){var a=vr(n);return I(vr(e),a)<1&&I(a,vr(r))<1}),sm=v(function(e,r){var n=function(t){return I(t,e)<0?$e(t):ye(fm(r))},a=p(it,"0","9",r)?$e(o(ot,"0",r)):p(it,"a","z",r)?$e(10+o(ot,"a",r)):p(it,"A","Z",r)?$e(10+o(ot,"A",r)):ye($m(r));return o(ka,n,a)}),Bl=v(function(e,r){var n=ln(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ka,function(c){return o(ka,function(l){return $e(c+l*e)},o(Bl,e,i))},o(sm,e,t))}),dm=v(function(e,r){return 2<=e&&e<=36?o(Bl,e,Zt(r)):ye(vm(e))}),mm=dm(16),pm=C(function(e,r,n){return P(Ja,e,r,n,1)}),Fl=E(function(e,r,n,a){return P(Ja,e,r,n,a)}),Gn=zv,bm=v(function(e,r){var n=o(Gn,10,e);return Ne(r*n)/n}),gm=Xv,hm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=_l(n);if(a.b&&!a.b.b){var t=a.a;return om(b([t,t]))}else return n};return o(K,gm,o(K,function(n){return o(Ce,function(a){return p(tm,1,a,n)},lm(e))},o(K,nm(vn),o(K,Ce(function(n){return n.fL}),o(K,Ce(Zn($r)),o(K,im("Parsing hex regex failed"),ka(function(n){var a=o(ae,o(K,r,o(K,mm,um(Ss))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return $e(P(Fl,t/255,c/255,u/255,o(bm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(pm,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),Ma=Sr("input"),It=Sr("label"),Ut=Qe("name"),Vl=v(function(e,r){return p(xr,D,r,e)}),_m=o(Vl,b(["target","checked"]),X),ym=function(e){return o(kl,"change",o(Sa,e,_m))},Cm=function(e){return L(e,!0)},Sm=function(e){return{$:1,a:e}},xm=v(function(e,r){return o(Tl,e,Sm(r))}),wm=o(Vl,b(["target","value"]),Bn),jo=function(e){return o(xm,"input",o(Sa,Cm,o(Sa,e,wm)))},El=Qe("max"),Rl=Qe("min"),jl=function(e){return o(Qe,"step",e)},Da=Qe("type"),No=Qe("value"),Ii=function(e){var r=e.ci,n=e.c5,a=e.cy,t=e.cu,i=e.c_,c=e.cD;return o(U,z,b([o(It,b([Ot(r)]),b([o(U,b([O("relative w-full")]),b([o(U,b([O("inline-block")]),b([Ee(r)])),o(U,b([O("inline-block float-right")]),b([Ee(ie(n))]))]))])),o(Ma,b([Da("range"),o(ne,"width","100%"),Pa(r),Ut(r),Rl(ie(a)),El(ie(t)),No(ie(n)),jl(ie(i)),jo(o(K,Ao,o(K,dr(42),c)))]),z)]))},Lm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Pm=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,b([O("h-12 py-4")]),b([o(It,b([O("block"),Ot(e)]),b([o(Ma,b([O("relative bottom-[1px] align-middle mr-2"),Da("checkbox"),Pa(e),Ut(e),ym(Ud(e)),Qd(c)]),z),Ee(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ii({ci:e,cu:i,cy:t,cD:Jd(e),c_:.01*(i-t),c5:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ii({ci:e,cu:i,cy:t,cD:o(K,Ne,Yd(e)),c_:1,c5:c});default:var c=r.a;return o(U,z,b([o(U,b([o(ne,"margin-bottom","6px")]),b([o(It,b([Ot(e)]),b([Ee(e)]))])),o(Ma,b([Da("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),Pa(e),Ut(e),jo(function(l){return o(qd,e,o(Lm,Eo,hm(l)))}),No(rm(c))]),z)]))}}),zm=function(e){return o(U,b([O("p-4 border-y-[0.5px] border-white20")]),b([o(U,b([O("text-lg pb-2")]),b([Ee(e.fn)])),o(U,b([O("pl-2 pr-2")]),Id(o(Ht,Pm,e.au)))]))},Tm=function(e){return o(U,b([O("text-xs text-white60")]),o(ae,zm,e))},km=function(e){return o(U,b([O("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Ee("clock: "+o(wl,3,un(e).bB))]))},Mm=function(e){e.a;var r=e.b.S;return o(Ce,function(n){return Ne(60/(un(e).bB-n))},o(Ce,o(K,Ps,function(n){return n.bB}),vn(o(ml,59,r))))},Dm=function(e){return o(U,b([O("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Mm(e);if(r.$===1)return b([Ee("... Fps")]);var n=r.a;return b([Ee(Ve(n)+" Fps")])}())},Am=function(e){return{$:0,a:e}},Bm=function(e){var r=e.b.S;return Zr(r)},Fm=function(e){var r=e.b.S;e.b.A;var n=e.b.aa;return Zr(r)+1+Zr(n)},Vm=function(e){return o(Ma,b([O("absolute w-full"),Da("range"),Rl(Ve(0)),El(Ve(Fm(e)-1)),No(Ve(Bm(e))),jl(Ve(1)),jo(o(K,Ao,o(K,dr(42),o(K,Ne,Am))))]),z)},Ui={$:1},qi={$:3},Ji={$:2},qt=function(e){return!e.b},Nl=Ml("disabled"),ct=C(function(e,r,n){return o(Fo,b([O("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),O(n),Nl(e),Vo(r)]),b([Ee("REC")]))}),lt=C(function(e,r,n){return o(Fo,b([O("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Nl(e),Vo(n)]),b([o(U,b([O("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),Em=function(e){var r=e.a,n=e.b.aa;return o(U,b([O("py-1")]),b([function(){switch(r.$){case 0:return p(ct,!1,Ui,"text-red-500 font-bold");case 1:return p(ct,!1,Ji,"text-white60 hover:text-white80 font-bold");default:return p(ct,!0,Ji,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(lt,qt(n),Wr.fw,qi);case 1:return p(lt,qt(n),Wr.fw,qi);default:return p(lt,!1,Wr.fv,Ui)}}()]))},Rm=function(e){return o(U,b([O("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Vm(e),Em(e),Dm(e),km(e)]))},jm=function(e){var r=e.a;return Ye(r,Ia)},Nm=v(function(e,r){var n=jm(r.F)?o(U,z,z):o(U,b([O("absolute pointer-events-none w-8 h-8"),o(ne,"left",ie(e.cO.fZ+.5*e.b_.fX)+"px"),o(ne,"top",ie(-e.cO.f1+.5*e.b_.e1)+"px")]),b([o(U,b([O(e.cO.dt?"text-black80":"text-black40")]),b([Wr.cO]))]));return o(U,z,b([n]))}),Wm=v(function(e,r){var n=o(Fo,b([O(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Vo(Bd),Hd("Distraction Free Mode")]),b([Wr.f5])),a=40,t=260,i=o(U,b([O("absolute w-8 bottom-12")]),b([o(Gi,b([O("text-twitterBlue40 hover:text-twitterBlue"),Hi("https://twitter.com/AzizErkalSelman"),Oi("_blank")]),b([Wr.fS]))])),c=80,l=o(U,b([O("absolute w-8 bottom-2")]),b([o(Gi,b([O("text-githubCat40 hover:text-githubCat"),Hi("https://github.com/erkal/elm-3d-playground-exploration"),Oi("_blank")]),b([Wr.eX]))])),u=e.b_.fX>640?k(e.b_.e1,a+t,e.b_.fX-(a+t)):k(e.b_.e1-c,a,e.b_.fX-a),$=u.a,s=u.b,d=u.c;return r.aL?o(U,b([O("fixed w-10 h-10 p-1")]),b([n])):o(U,z,b([o(U,b([O("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",ie(a)+"px")]),b([n,i,l])),o(U,b([O("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",ie(t)+"px"),o(ne,"height",ie($)+"px")]),b([o(za,Fd,Tm(un(r.F).eH))])),o(U,b([O("absolute bottom-0"),o(ne,"left",ie(s)+"px"),o(ne,"height",ie(c)+"px"),o(ne,"width",ie(d)+"px")]),b([o(za,Vd,Rm(r.F))])),o(Nm,e,r)]))}),Zm=C(function(e,r,n){var a=Md(n.F),t=un(n.F);return o(U,b([O("bg-black40"),O("select-none"),O("antialiased"),O("font-mono"),o(ne,"width",ie(t.b_.fX)+"px"),o(ne,"height",ie(t.b_.e1)+"px")]),b([o(U,b([O("fixed")]),b([o(za,ul(Td),o(e,t,a))])),o(U,b([Pa("gui")]),b([o(Wm,t,n),o(za,zd,o(r,t,a))]))]))}),Gm=Xe(function(e,r,n,a,t,i){var c=v(function(u,$){return L(P(xd,r,i,u,$),Zi)}),l=function(u){var $=o(vl,n,u.e8);return L({aL:u.e8.b_.fX<500,F:o(wd,$,a)},Zi)};return Os({e7:l,fM:ul(Pd(Ds)),fT:c,fV:o(Zm,e,t)})}),Hm=E(function(e,r,n,a){return _e(Gm,e,r,n,a,v(function(t,i){return o(U,z,z)}),C(function(t,i,c){return c}))}),Wl={$:0},gr=v(function(e,r){return{$:0,a:e,b:r}}),ze=v(function(e,r){return{$:0,a:e,b:r}}),Om=b([o(gr,L(-1,1),o(ze,2,0)),o(gr,L(-1,0),o(ze,2,0)),o(gr,L(-1,-1),o(ze,2,0)),o(gr,L(0,-1),o(ze,2,0)),o(gr,L(0,1),o(ze,2,0)),o(gr,L(1,1),o(ze,2,0)),o(gr,L(1,0),o(ze,2,0)),o(gr,L(1,-1),o(ze,2,0))]),Im=function(e){return{aB:Wl,bt:Om}},ut=v(function(e,r){return L(e,gl(r))}),Um=C(function(e,r,n){return{au:n,fb:r,fn:e}}),Zl=mr,qm=function(e){return p(jn,v(function(r,n){var a=r.a,t=r.b;return p(wn,a,t,n)}),Zl,e)},Jm=C(function(e,r,n){return p(Um,e,r,qm(n))}),vt=Jm,Vr=C(function(e,r,n){var a=r.a,t=r.b;return L(e,o(hl,L(a,t),n))}),Ae=kv,$t=function(e){return e/255},ft=C(function(e,r,n){return P(Ja,$t(e),$t(r),$t(n),1)}),Ym=b([p(vt,"Camera",!0,b([p(Vr,"camera distance",L(3,20),10),p(Vr,"camera azimuth",L(-Ae,Ae),0),p(Vr,"camera elevation",L(-Ae/2,Ae/2),0)])),p(vt,"Parameters",!0,b([p(Vr,"cubes side length",L(.5,1),.9),p(Vr,"duration of rolling animation",L(.1,1),.25)])),p(vt,"Colors and light",!0,b([o(ut,"color 1",p(ft,244,88,67)),o(ut,"color 2",p(ft,47,41,43)),o(ut,"board color",p(ft,223,224,226)),p(Vr,"sunlight azimuth",L(-Ae,Ae),2),p(Vr,"sunlight elevation",L(-Ae,0),-2)]))]),Xm=v(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(qa,e,r.au))}),Qm=v(function(e,r){return o(dr,0,vn(o(Zn,Xm(e),r)))}),Km=v(function(e,r){return o(Qm,e,r.eH)}),_r=Km,e0=Bv,Gl=function(e){return e},rr=function(e){return e},Aa=function(e){var r=e;return-r},r0=v(function(e,r){var n=e,a=r;return{fZ:n.f1*a.da-n.da*a.f1,f1:n.da*a.fZ-n.fZ*a.da,da:n.fZ*a.f1-n.f1*a.fZ}}),Hl=function(e){var r=e;return r.c8},Ol=function(e){var r=e;return r.c9},n0=function(e){return o(r0,Hl(e),Ol(e))},$n=function(e){var r=e;return r.cE},an=Mv,tn=Dv,fa=C(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=an(c),u=tn(c),$=a.eO,s=$,d=s.fZ*u,m=l*d,f=d*d,h=s.f1*u,g=l*h,y=d*h,S=h*h,_=1-2*(f+S),w=s.da*u,M=l*w,W=2*(y-M),j=2*(y+M),R=d*w,N=2*(R+g),Z=2*(R-g),F=h*w,J=2*(F-m),Q=2*(F+m),le=w*w,fe=1-2*(S+le),ce=1-2*(f+le);return{fZ:fe*i.fZ+W*i.f1+N*i.da,f1:j*i.fZ+ce*i.f1+J*i.da,da:Z*i.fZ+Q*i.f1+_*i.da}}),Hn=C(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=an(c),u=tn(c),$=a.cE,s=$,d=i.fZ-s.fZ,m=i.f1-s.f1,f=i.da-s.da,h=a.eO,g=h,y=g.fZ*u,S=l*y,_=y*y,w=g.f1*u,M=l*w,W=y*w,j=w*w,R=1-2*(_+j),N=g.da*u,Z=l*N,F=2*(W-Z),J=2*(W+Z),Q=y*N,le=2*(Q+M),fe=2*(Q-M),ce=w*N,me=2*(ce-S),De=2*(ce+S),we=N*N,wr=1-2*(j+we),Lr=1-2*(_+we);return{fZ:s.fZ+wr*d+F*m+le*f,f1:s.f1+J*d+Lr*m+me*f,da:s.da+fe*d+De*m+R*f}}),Hr=function(e){return e},Or=function(e){var r=e;return r.c8},Ir=function(e){var r=e;return r.c9},Ur=function(e){var r=e;return r.db},Il=C(function(e,r,n){return Hr({cE:p(Hn,e,r,$n(n)),c8:p(fa,e,r,Or(n)),c9:p(fa,e,r,Ir(n)),db:p(fa,e,r,Ur(n))})}),Yi=C(function(e,r,n){return p(Il,e(n),r,n)}),Wo=function(e){var r=e;return r.eO},fn=v(function(e,r){var n=e,a=r;return{fZ:a.fZ+n.fZ,f1:a.f1+n.f1,da:a.da+n.da}}),Ul=v(function(e,r){return Hr({cE:o(fn,e,$n(r)),c8:Or(r),c9:Ir(r),db:Ur(r)})}),a0=v(function(e,r){var n=e,a=r;return{fZ:n*a.fZ,f1:n*a.f1,da:n*a.da}}),t0=C(function(e,r,n){return o(Ul,o(a0,r,e),n)}),o0=C(function(e,r,n){return p(t0,Wo(e(n)),r,n)}),ar=v(function(e,r){return{eO:r,cE:e}}),i0=function(e){var r=e;return o(ar,r.cE,r.c8)},c0=function(e){var r=e;return o(ar,r.cE,r.c9)},l0=function(e){var r=e;return o(ar,r.cE,r.db)},u0=function(e){var r=Hr({cE:e.aR,c8:Ol(e.dp),c9:n0(e.dp),db:Hl(e.dp)}),n=p(o0,l0,e.ce,p(Yi,i0,Aa(e.bE),p(Yi,c0,e.by,r)));return n},v0=function(e){return{$:0,a:e}},xe=function(e){var r=e;return Y(r)},sa=function(e){var r=e;return .5*r},$0=Av,f0=function(e){var r=e;return $0(r)},s0=function(e){var r=sa(xe(e.eq)),n=f0(r);return{cQ:v0(n),c6:e.c6}},nr=function(e){return e},Fr={fZ:0,f1:0,da:0},ql=$r,fr=function(e){return e},Jl=fr({fZ:1,f1:0,da:0}),Ya=Jl,Zo=fr({fZ:0,f1:0,da:1}),On=Zo,d0=ql({cE:Fr,c8:On,c9:Ya}),m0=function(e){var r=e.aR,n=e.by,a=e.bE,t=e.ce;return s0({eq:nr(2*e0(.5)),c6:u0({by:nr(n),ce:rr(t),bE:nr(a),aR:Gl(r),dp:d0})})},Yl=function(e){return m0({by:o(_r,"camera azimuth",e),ce:o(_r,"camera distance",e),bE:o(_r,"camera elevation",e),aR:{fZ:0,f1:0,da:0}})},p0={$:0},Go=v(function(e,r){return p(xr,v(function(n,a){return e(n)?o(A,n,a):a}),z,r)}),b0={$:1},g0=v(function(e,r){return{$:2,a:e,b:r}}),h0=function(e){return Bo(function(r){var n=r.a;return Ye(e,n)})},_0=function(e){var r=e.a,n=e.b;return I(r,-1)>-1&&r<=1&&I(n,-1)>-1&&n<=1},y0=v(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return L(n,a+1);case 1:return L(n,a-1);case 2:return L(n-1,a);default:return L(n+1,a)}}),Xl=function(e){return e?0:1},ea=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(ze,r,n);case 1:return o(ze,2,n);default:return o(ze,1,Xl(n))}},ra=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(ze,2,Xl(n));case 1:return o(ze,r,n);default:return o(ze,0,n)}},C0=function(e){switch(e){case 0:return o(K,ea,o(K,ea,ea));case 1:return ea;case 2:return o(K,ra,o(K,ra,ra));default:return ra}},S0=v(function(e,r){var n=r.a,a=r.b;return o(gr,o(y0,e,n),o(C0,e,a))}),x0=v(function(e,r){var n=e.a,a=vn(o(Zn,function(l){var u=o(S0,l,e),$=u.a;return o(h0,$,r)||!_0($)?q:re(L(u,l))},b([0,1,2,3])));if(a.$===1)return b0;var t=a.a,i=t.a,c=t.b;return o(g0,c,o(A,i,o(Go,function(l){var u=l.a;return!Ye(u,n)},r)))}),w0=v(function(e,r){var n=function(i){var c=i.a;return Ye(c,e)},a=vn(o(Go,n,r));if(a.$===1)return p0;var t=a.a;return o(x0,t,r)}),L0=function(e){return{$:1,a:e}},P0=ge(function(e,r,n,a,t){var i=t.aB;return i.$?t:Oe(t,{aB:L0({cz:a,ec:n,eh:r,cZ:e.bB})})}),z0=C(function(e,r,n){var a=e.fZ,t=e.f1,i=L(Ne(a),Ne(t)),c=o(w0,i,n.bt);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return x(P0,r,i,l,u,n)}}),T0=C(function(e,r,n){return{fZ:e,f1:r,da:n}}),yn=function(e){return nr(Ae*(e/180))},na=function(e){return e},da=function(e){var r=e;return r},k0=v(function(e,r){var n=e,a=r;return a.fZ*n.fZ+a.f1*n.f1+a.da*n.da}),oe=v(function(e,r){var n=r;return e*n}),Ql=function(e){var r=e;return r.cE},M0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.fp,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1+(a.da-i.da)*l.da}),D0=C(function(e,r,n){var a=e,t=r,i=n;return{fZ:i.fZ+t*a.fZ,f1:i.f1+t*a.f1,da:i.da+t*a.da}}),A0=v(function(e,r){var n=Wo(r),a=e,t=a.fp,i=o(k0,t,n);if(i){var c=Ql(r),l=o(M0,e,c),u=o(oe,-1/i,l);return re(p(D0,n,u,c))}else return q}),B0=v(function(e,r){return{fZ:e,f1:r}}),Xi=v(function(e,r){var n=e,a=r;return n*a}),F0=function(e){var r=e;return r},Qi=function(e){var r=e;return F0(r.ey)},V0=function(e){var r=e;return r.aK},Nr=Nv,E0=function(e){var r=e,n=o(Ie,Y(r.fZ),o(Ie,Y(r.f1),Y(r.da)));if(n){var a=r.da/n,t=r.f1/n,i=r.fZ/n,c=Nr(i*i+t*t+a*a);return re({fZ:i/c,f1:t/c,da:a/c})}else return q},Kl=v(function(e,r){var n=r;return n/e}),Jt=function(e){var r=e;return $n(r)},Ho=fr({fZ:0,f1:0,da:-1}),R0=v(function(e,r){var n=e,a=r;return a/n}),j0=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fZ:$.fZ*a.fZ+l.fZ*a.f1+i.fZ*a.da,f1:$.f1*a.fZ+l.f1*a.f1+i.f1*a.da,da:$.da*a.fZ+l.da*a.f1+i.da*a.da}}),Fn=function(e){var r=e;return{fZ:-r.fZ,f1:-r.f1,da:-r.da}},Yt=function(e){var r=e;return Fn(Ur(r))},N0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c8,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1}),Oo=C(function(e,r,n){var a=e,t=r,i=n;return{fZ:a,f1:t,da:i}}),W0=E(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cE,$=u,s=t.db,d=s,m=t.c9,f=m,h=t.c8,g=h;return{fZ:$.fZ+i*g.fZ+c*f.fZ+l*d.fZ,f1:$.f1+i*g.f1+c*f.f1+l*d.f1,da:$.da+i*g.da+c*f.da+l*d.da}}),Z0=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c9,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1}),cr=0,G0=C(function(e,r,n){var a=e,t=o(Z0,Qi(r),n),i=o(N0,Qi(r),n),c=a.c6,l=c,u=V0(r);u.a;var $=u.b,s=a.cQ;if(s.$){var h=s.a,g=o(R0,$,h),y=P(W0,l,o(Xi,g,i),o(Xi,g,t),cr);return o(ar,y,Yt(a.c6))}else{var d=s.a,m=Aa(o(Kl,d,o(oe,.5,$))),f=o(j0,l,o(dr,Ho,E0(p(Oo,i,t,m))));return o(ar,Jt(a.c6),f)}}),Xt=function(e){var r=e;return{fZ:an(r),f1:tn(r)}},H0=function(e){var r=e;return{fZ:-r.f1,f1:r.fZ}},O0=function(e){return e},I0=v(function(e,r){return O0({cE:r,c8:e,c9:H0(e)})}),U0=v(function(e,r){return o(I0,Xt(e),r)}),q0=C(function(e,r,n){var a=e.a,t=e.b;return{ey:o(U0,r,n),aK:L(xe(a),xe(t))}}),zr=function(e){var r=e;return r.fZ},J0=v(function(e,r){var n=e,a=r;return{fZ:n,f1:a}}),Tr=function(e){var r=e;return r.f1},kr=function(e){var r=e;return r.da},Y0=E(function(e,r,n,a){var t=n.fZ,i=n.f1,c=function($){return p(T0,da(zr($)),da(Tr($)),da(kr($)))},l=p(q0,L(na(r.fX),na(r.e1)),yn(0),o(B0,0,0)),u=o(J0,na(t),na(i));return o(Ce,c,o(A0,a,p(G0,e,l,u)))}),X0=v(function(e,r){return{fp:e,cE:r}}),Q0=v(function(e,r){var n=r;return o(X0,n.fp,o(fn,e,n.cE))}),K0=v(function(e,r){return{fp:r,cE:e}}),e1=o(K0,Fr,On),r1=E(function(e,r,n,a){return P(Y0,r,n,a,o(Q0,p(Oo,rr(0),rr(0),rr(e)),e1))}),n1=v(function(e,r){if(e.cO.dt){var n=P(r1,o(_r,"cubes side length",e),Yl(e),e.b_,e.cO);if(n.$===1)return r;var a=n.a;return p(z0,a,e,r)}else return r}),a1=v(function(e,r){var n=r.aB;if(n.$){var a=n.a.cZ,t=n.a.cz;return I(e.bB-a,o(_r,"duration of rolling animation",e))>0?Oe(r,{aB:Wl,bt:t}):r}else return r}),t1=v(function(e,r){return o(a1,e,o(n1,e,r))}),o1=Sr("br"),Ki=Sr("p"),i1=o(U,b([O("absolute w-full text-center")]),b([o(U,b([O("font-bold pt-2 text-lg")]),b([Ee("Eight Rolling Cubes Puzzle"),o(o1,z,z),Ee("by John Harris")])),o(Ki,z,b([Ee("Can you make all the red faces look down")])),o(Ki,z,b([Ee(" with the center cell vacant?")]))])),Io=v(function(e,r){return{$:0,a:e,b:r}}),st=v(function(e,r){var n=e,a=r;return I(a,n)>-1}),dt=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),yr=v(function(e,r){var n=e,a=r;return a-n}),c1=fr({fZ:-1,f1:0,da:0}),l1=fr({fZ:0,f1:-1,da:0}),eu=fr({fZ:0,f1:1,da:0}),pe=C(function(e,r,n){var a=e,t=r,i=n;return{fZ:a,f1:t,da:i}}),u1=Xe(function(e,r,n,a,t,i){var c=o(st,n,i)?Zo:Ho,l=o(st,r,t)?eu:l1,u=o(st,e,a)?Jl:c1,$=k(xe(o(yr,e,a)),xe(o(yr,r,t)),xe(o(yr,n,i))),s=p(pe,o(dt,e,a),o(dt,r,t),o(dt,n,i)),d=Hr({cE:s,c8:u,c9:l,db:c});return{ey:d,aK:$}}),v1=v(function(e,r){return _e(u1,zr(e),Tr(e),kr(e),zr(r),Tr(r),kr(r))}),Qt=C(function(e,r,n){return{fZ:e,f1:r,da:n}}),Ba=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=k(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Io,e,o(v1,p(Qt,-c,-l,-u),p(Qt,c,l,u)))}),ir=function(e){return e*Ae/180},$1=v(function(e,r){return o(Ce,function(n){if(n.$===2){var a=n.a;return a}else return Eo},o(qa,e,r.au))}),f1=v(function(e,r){return o(dr,Eo,vn(o(Zn,$1(e),r)))}),s1=v(function(e,r){return o(f1,e,r.eH)}),Kt=s1,Uo=function(e){return{$:5,a:e}},qo=function(e){return Uo(e)},eo=function(e){return{$:0,a:e}},ru=C(function(e,r,n){return{$:2,a:e,b:r,c:n}}),nu=C(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),mt=function(e){return p(nu,0,1,e<=.04045?e/12.92:o(Gn,(e+.055)/1.055,2.4))},In=mf,d1=function(e){var r=Ro(e),n=r.cR,a=r.cf,t=r.b8;return p(In,mt(n),mt(a),mt(t))},Fa=function(e){return p(ru,0,eo(d1(e)),eo(0))},au=v(function(e,r){return{$:2,a:e,b:r}}),tu=v(function(e,r){return{$:4,a:e,b:r}}),ou=v(function(e,r){return{$:3,a:e,b:r}}),iu=v(function(e,r){return{$:1,a:e,b:r}}),m1=C(function(e,r,n){return{fZ:e,f1:r,da:n}}),p1=function(e){var r=e;return r},Jo=function(e){var r=e;return p1(r.ey)},Yo=function(e){var r=e;return r.aK},b1=v(function(e,r){return{ey:o(Ul,e,Jo(r)),aK:Yo(r)}}),g1=v(function(e,r){var n=r;return o(ar,o(fn,e,n.cE),n.eO)}),h1=v(function(e,r){var n=r;return{k:o(g1,e,n.k),ff:n.ff,fz:n.fz}}),Xo=function(e){var r=e;return r},_1=function(e){return e},cu=v(function(e,r){var n=Xo(r),a=n.a,t=n.b;return _1(L(e(a),e(t)))}),y1=v(function(e,r){return o(cu,fn(e),r)}),Qo=function(e){var r=e;return r.eF},Ko=function(e){var r=e;return r.fz},lu=v(function(e,r){return{eF:r,fz:xe(e)}}),C1=v(function(e,r){return o(lu,Ko(r),o(fn,e,Qo(r)))}),uu=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return k(e(a),e(t),e(i))}),S1=v(function(e,r){return o(uu,fn(e),r)}),Xa=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(m1,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Io,s,o(b1,i,c));case 1:var s=r.a,l=r.b;return o(iu,s,o(S1,i,l));case 3:var s=r.a,u=r.b;return o(ou,s,o(C1,i,u));case 2:var s=r.a,$=r.b;return o(au,s,o(h1,i,$));case 4:var s=r.a,d=r.b;return o(tu,s,o(y1,i,d));default:var m=r.a;return Uo(o(ae,Xa(k(n,a,t)),m))}}),vu=function(e){return Xa(k(e,0,0))},ma=function(e){return Xa(k(0,0,e))},x1=C(function(e,r,n){return{ey:p(Il,e,r,Jo(n)),aK:Yo(n)}}),w1=v(function(e,r){var n=o(Hn,e,r),a=o(fa,e,r);return function(t){var i=t;return o(ar,n(i.cE),a(i.eO))}}),L1=C(function(e,r,n){var a=n;return{k:p(w1,e,r,a.k),ff:a.ff,fz:a.fz}}),P1=C(function(e,r,n){return o(cu,o(Hn,e,r),n)}),z1=C(function(e,r,n){return o(lu,Ko(n),p(Hn,e,r,Qo(n)))}),T1=C(function(e,r,n){return o(uu,o(Hn,e,r),n)}),Un=C(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Io,l,p(x1,e,r,a));case 1:var l=n.a,t=n.b;return o(iu,l,p(T1,e,r,t));case 3:var l=n.a,i=n.b;return o(ou,l,p(z1,e,r,i));case 2:var l=n.a,c=n.b;return o(au,l,p(L1,e,r,c));case 4:var l=n.a,u=n.b;return o(tu,l,p(P1,e,r,u));default:var $=n.a;return Uo(o(ae,o(Un,e,r),$))}}),k1=o(ar,Fr,On),pt=v(function(e,r){return p(Un,k1,nr(e),r)}),M1=function(e){var r=o(Kt,"board color",e),n=o(vu,-1.55,o(Ba,Fa(r),k(.1,3.2,.2))),a=o(ma,-.5,o(Ba,Fa(r),k(3,3,1)));return qo(b([n,o(pt,ir(90),n),o(pt,ir(180),n),o(pt,ir(270),n),a]))},D1=function(e){return Xa(k(0,e,0))},Pn=v(function(e,r){return I(e,r)<0?e:r}),A1=v(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(Un,o(ar,Gl(n),fr({fZ:t,f1:i,da:c})),nr(r))}),B1=C(function(e,r,n){var a=r.aB;if(a.$){var t=a.a.cZ,i=a.a.eh,c=a.a.ec;if(a.a.cz,Ye(i,n)){var l=o(_r,"duration of rolling animation",e),u=(e.bB-t)/l,$=u,s=o(Pn,ir(90),$*ir(90)),d=function(){switch(c){case 0:return L({fZ:.5,f1:.5,da:-.5},k(-1,0,0));case 1:return L({fZ:-.5,f1:-.5,da:-.5},k(1,0,0));case 2:return L({fZ:-.5,f1:.5,da:-.5},k(0,-1,0));default:return L({fZ:.5,f1:-.5,da:-.5},k(0,1,0))}}();return o(A1,d,s)}else return $r}else return $r}),F1=o(ar,Fr,Ya),bt=v(function(e,r){return p(Un,F1,nr(e),r)}),ei=eu,V1=o(ar,Fr,ei),ec=v(function(e,r){return p(Un,V1,nr(e),r)}),E1=C(function(e,r,n){var a=n.a,t=a.a,i=a.b,c=n.b,l=o(_r,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,bt(ir(180));case 1:return c.a,c.b,bt(ir(90));default:return c.a,c.b,ec(-ir(90))}else switch(c.a){case 2:return c.a,c.b,$r;case 1:return c.a,c.b,bt(-ir(90));default:return c.a,c.b,ec(ir(90))}}(),$=o(Kt,"color 2",e),s=o(Kt,"color 1",e),d=o(ma,l/4,o(Ba,Fa(s),k(l,l,l/2))),m=o(ma,-(l/4),o(Ba,Fa($),k(l,l,l/2)));return o(D1,i,o(vu,t,o(ma,l/2,P(B1,e,r,L(t,i),u(qo(b([d,m])))))))}),R1=v(function(e,r){return qo(o(ae,o(E1,e,r),r.bt))}),j1=function(e){return e},N1=function(e){return rr(.01*e)},rc=function(e){return e},W1=function(e){return e},Z1=function(e){return{$:0,a:e}},G1=Z1,H1={$:3},O1=H1,I1=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),U1=I1,q1=v(function(e,r){return r.b?p(xr,A,r,e):e}),qe=function(e){return p(xr,q1,z,e)},ri=v(function(e,r){return qe(o(ae,e,r))}),J1=function(e){return{$:1,a:e}},Y1=J1,X1=function(e){return o(Br,"height",Ve(e))},Q1=function(e){return V$(W$(e))},K1=Q1,ep=function(e){return{$:2,a:e}},rp=ep,np=function(e){return o(Rr,"",e)},ap=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ne(l*1e3)/1e3},c=function(l){return Ne(l*1e4)/100};return np(b(["rgba(",ie(c(r)),"%,",ie(c(n)),"%,",ie(c(a)),"%,",ie(i(t)),")"]))},tp=v(function(e,r){switch(r.$){case 0:return o(as,e,r);case 1:return o(ts,e,r);case 2:return o(os,e,r);case 3:return o(is,e,r);case 4:return o(cs,e,r);default:return o(ls,e,r)}}),op=v(function(e,r){switch(r.$){case 0:return o(Af,e,r);case 1:return o(Bf,e,r);case 2:return o(Ff,e,r);case 3:return o(Vf,e,r);case 4:return o(Ef,e,r);case 5:return o(Rf,e,r);case 6:return o(jf,e,r);case 7:return o(Nf,e,r);default:return Wf(e)}}),ip=C(function(e,r,n){return p(ns,e,r,n)}),nc=function(e){var r=e;return r},sn=yf,gt=P(sn,1,1,1,1),tr=C(function(e,r,n){return o(ae,function(a){return o(a,r,n)},e)}),cp=C(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lp=v(function(e,r){var n=e,a=r.fZ,t=r.f1;return p(cp,n*a/t,n,n*(1-a-t)/t)}),up=function(e){var r=e.a,n=e.b,a=e.c;return p(In,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ni=v(function(e,r){return up(o(lp,e,r))}),$u=v(function(e,r){return{du:Ye(e.du,r.du),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,G:r.G+(e.G*r.p+e.H*r.s+e.I*r.v)*r.bZ,H:r.H+(e.G*r.q+e.H*r.t+e.I*r.w)*r.bZ,I:r.I+(e.G*r.r+e.H*r.u+e.I*r.x)*r.bZ,bZ:e.bZ*r.bZ}}),lr=Pf,vp=function(e){return lr({dC:e.p,dD:e.s,dE:e.v,dF:e.G,dG:e.q,dH:e.t,dI:e.w,dJ:e.H,dK:e.r,dL:e.u,dM:e.x,dN:e.I,dO:0,dP:0,dQ:0,dR:1})},ht=ge(function(e,r,n,a,t){var i=a.du?1:-1,c=P(sn,a.bZ,a.bZ,a.bZ,i);return _e(t,e,c,vp(a),a.du,r,n)}),fu=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o($u,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,g=o(A,x(ht,e,r,n,a,h),i.L);return{L:g,T:i.T,fG:i.fG};case 3:var y=t.b,S=o(A,x(ht,e,r,n,a,y),i.T);return{L:i.L,T:S,fG:i.fG};case 2:var _=t.a,w=o(A,x(ht,e,r,n,a,_),i.fG);return{L:i.L,T:i.T,fG:w};default:var M=t.a;return p(jn,P(fu,e,r,n,a),i,M)}}),$p=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),su=$p,ai=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),fp=function(e){var r=e.Y,n=e.V,a=e.U;return P(ai,518,r,n,a)},sp=v(function(e,r){return{$:6,a:e,b:r}}),dp=sp,du=b([fp({U:1,V:0,Y:!1}),P(su,!1,!1,!1,!1),o(dp,0,1)]),on=519,ti=8,mu=15,Kr=7681,mp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},te=Df,pp=v(function(e,r){return{$:0,a:e,b:r}}),bp=pp({dj:1,ds:0,d_:5}),Fe=sf,gp=bp(b([{bV:o(Fe,-1,-1)},{bV:o(Fe,1,-1)},{bV:o(Fe,-1,1)},{bV:o(Fe,1,1)}])),hp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bV"},uniforms:{}},_p=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},oi=C(function(e,r,n){var a=e.cS,t=e.cr,i=e.c7,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(K,c($.bl),o(K,l($.a8),o(K,l($.bu),l($.bv))))};return o(u,n,o(u,r,p(_p,a,t,i)))}),ii=function(e){return p(oi,{cr:e.cr,cS:e.cS,c7:e.c7},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv})},ci=function(e){return x(te,b([ii(e),P(su,!1,!1,!1,!1)]),hp,mp,gp,{})},yp=ci({a8:Kr,cr:0,cS:ti,bl:on,c7:mu,bu:Kr,bv:Kr}),Cp=516,ac=5386,Se=7680,Sp=function(e){return o(Gn,2,e+4)},pu=function(e){return ci({a8:Se,cr:mu,cS:ti,bl:Cp,c7:Sp(e),bu:ac,bv:ac})},xp=C(function(e,r,n){return qe(b([p(tr,e,n,du),b([pu(r),yp])]))}),wp=v(function(e,r){return qe(o(nl,xp(e),r))}),Lp=function(e){var r=e.Y,n=e.V,a=e.U;return P(ai,513,r,n,a)},Pp=Lp({U:1,V:0,Y:!0}),zp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},Tp=function(e){var r=e.bX,n=e.bH,a=e.bz,t=e.bw,i=e.bC,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,h=$.b,g=$.c;return zp(s)(d)(m)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},kp=C(function(e,r,n){return{$:0,a:e,b:r,c:n}}),tc=v(function(e,r){var n=e,a=r;return p(kp,32774,n,a)}),Mp=1,oc=771,Dp=770,li=Tp({bw:0,aH:o(tc,Mp,oc),bz:0,bC:o(tc,Dp,oc),bH:0,bX:0}),qr=b([Pp,li]),Ap=function(e){var r=e;return r.dT},Bp=function(e){var r=e;return r.dU},bu=function(e){var r=e;return r.dV},Fp=function(e){var r=e;return r.dW},Vp=function(e){var r=e;return r.dX},gu=function(e){var r=e;return r.dY},hu=function(e){return k(o(yr,Fp(e),Ap(e)),o(yr,Vp(e),Bp(e)),o(yr,gu(e),bu(e)))},Ep=function(e){return e},Rp=function(e){return Hr({cE:Ep({fZ:e.G,f1:e.H,da:e.I}),c8:fr({fZ:e.p,f1:e.q,da:e.r}),c9:fr({fZ:e.s,f1:e.t,da:e.u}),db:fr({fZ:e.v,f1:e.w,da:e.x})})},_t=v(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,$=u;return{fZ:a.fZ*$.fZ+a.f1*$.f1+a.da*$.da,f1:a.fZ*l.fZ+a.f1*l.f1+a.da*l.da,da:a.fZ*i.fZ+a.f1*i.f1+a.da*i.da}}),_u=v(function(e,r){var n=e,a=r,t=n.cE,i=t,c=a.fZ-i.fZ,l=a.f1-i.f1,u=a.da-i.da,$=n.db,s=$,d=n.c9,m=d,f=n.c8,h=f;return{fZ:c*h.fZ+l*h.f1+u*h.da,f1:c*m.fZ+l*m.f1+u*m.da,da:c*s.fZ+l*s.f1+u*s.da}}),yu=v(function(e,r){return{cE:o(_u,e,$n(r)),c8:o(_t,e,Or(r)),c9:o(_t,e,Ir(r)),db:o(_t,e,Ur(r))}}),Va=function(e){var r=e;return r},ue=v(function(e,r){var n=e,a=r;return o(Ie,n,a)}),de=v(function(e,r){var n=e,a=r;return o(Pn,n,a)}),jp=v(function(e,r){var n=Va(r),a=Va(e);return{dT:o(ue,a.dT,n.dT),dU:o(ue,a.dU,n.dU),dV:o(ue,a.dV,n.dV),dW:o(de,a.dW,n.dW),dX:o(de,a.dX,n.dX),dY:o(de,a.dY,n.dY)}}),Je=function(e){var r=e;return r},Np=function(e){var r=e;return k(r.fZ,r.f1,r.da)},zn=v(function(e,r){var n=e,a=r;return a+n}),Wp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=sa(xe(a)),c=sa(xe(n)),l=sa(xe(t)),u=Np(r),$=u.a,s=u.b,d=u.c;return{dT:o(zn,c,$),dU:o(zn,i,s),dV:o(zn,l,d),dW:o(yr,c,$),dX:o(yr,i,s),dY:o(yr,l,d)}}),ic=E(function(e,r,n,a){var t=n.eF,i=2*n.e$*r,c=2*n.e_*r,l=2*n.eZ*r,u=t.da*r,$=t.f1*r,s=t.fZ*r,d=Je(Ur(e)),m=Y(l*d.fZ)+Y(c*d.f1)+Y(i*d.da),f=Je(Ir(e)),h=Y(l*f.fZ)+Y(c*f.f1)+Y(i*f.da),g=Je(Or(e)),y=Y(l*g.fZ)+Y(c*g.f1)+Y(i*g.da),S=o(Wp,k(y,h,m),o(_u,e,p(Qt,s,$,u)));if(a.$)return re(S);var _=a.a;return re(o(jp,_,S))}),ro=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 1:var c=t.a,l=P(ic,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 2:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 3:var c=t.a,l=P(ic,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 4:var u=t.a,f=e,h=r,g=P(ro,e,r,n,u),y=i;e=f,r=h,n=g,a=y;continue e;default:var $=t.a,s=t.b,d=o(yu,Rp($),e),m=r*$.bZ,f=e,h=r,g=P(ro,d,m,n,b([s])),y=i;e=f,r=h,n=g,a=y;continue e}}else return n}),dn=pf,mn=bf,pn=gf,Cu=function(e){return{$:4,a:e}},Zp=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),qn=function(e){return Cu(o(Zp,e,z))},Gp={du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:0,H:0,I:0,bZ:1},cc=ci({a8:Kr,cr:0,cS:ti,bl:on,c7:255,bu:Kr,bv:Kr}),Hp=function(e){var r=e,n=o(Ie,Y(r.fZ),o(Ie,Y(r.f1),Y(r.da)));if(n){var a=r.da/n,t=r.f1/n,i=r.fZ/n,c=Nr(i*i+t*t+a*a);return c*n}else return cr},Te={bz:0,eE:!1,bH:0,cN:0,bX:0,c2:0,fZ:0,f1:0,da:0},Ge=v(function(e,r){var n=e,a=r;return lr({dC:n.fZ,dD:n.bX,dE:a.fZ,dF:a.bX,dG:n.f1,dH:n.bH,dI:a.f1,dJ:a.bH,dK:n.da,dL:n.bz,dM:a.da,dN:a.bz,dO:n.c2,dP:n.cN,dQ:a.c2,dR:a.cN})}),Cn=L({bd:o(Ge,Te,Te),bM:o(Ge,Te,Te),bN:o(Ge,Te,Te),bO:o(Ge,Te,Te)},P(sn,0,0,0,0)),Su=514,xu=function(e){var r=e.Y,n=e.V,a=e.U;return P(ai,515,r,n,a)},wu=240,Op=b([xu({U:1,V:0,Y:!0}),ii({a8:Se,cr:wu,cS:0,bl:Su,c7:0,bu:Se,bv:Se}),li]),Ip=v(function(e,r){var n=e,a=r.fo,t=r.eW,i=r.ex,c=xe(a),l=c,u=xe(t),$=u,s=n.cQ;if(s.$){var m=s.a;return Nt($)?lr({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:0,dN:-1,dO:0,dP:0,dQ:0,dR:1}):lr({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:-2/($-l),dN:-($+l)/($-l),dO:0,dP:0,dQ:0,dR:1})}else{var d=s.a;return Nt($)?lr({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-1,dN:-2*l,dO:0,dP:0,dQ:-1,dR:0}):lr({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-($+l)/($-l),dN:-2*$*l/($-l),dO:0,dP:0,dQ:-1,dR:0})}}),aa=v(function(e,r){return(1&e>>r)===1?0:1}),Up=function(e){return b([xu({U:1,V:0,Y:!0}),ii({a8:Se,cr:wu,cS:e,bl:Su,c7:0,bu:Se,bv:Se}),li])},qp=C(function(e,r,n){return qe(o(ae,function(a){var t=a<<4,i=P(sn,o(aa,a,0),o(aa,a,1),o(aa,a,2),o(aa,a,3));return p(tr,e,L(r,i),Up(t))},o(rn,1,o(Gn,2,n)-1)))}),en=function(e){var r=e;return r},Jp=zf,Yp={cE:Fr,c8:Ya,c9:ei,db:On},Qa=function(e){var r=e;return r},Xp=function(e){var r=Qa($n(e)),n=Je(Ur(e)),a=Je(Ir(e)),t=Je(Or(e));return lr({dC:t.fZ,dD:a.fZ,dE:n.fZ,dF:r.fZ,dG:t.f1,dH:a.f1,dI:n.f1,dJ:r.f1,dK:t.da,dL:a.da,dM:n.da,dN:r.da,dO:0,dP:0,dQ:0,dR:1})},Qp=v(function(e,r){var n=r;return Xp(o(yu,n,e))}),Kp=function(e){return o(Qp,Yp,e)},e3=function(e){var r=e;return r.c6},r3=function(e){var r=e;return Or(r)},n3=function(e){var r=e;return Ir(r)},a3=function(e){var r=e3(e.eC),n=Hr({cE:Jt(r),c8:r3(r),c9:n3(r),db:Fn(Yt(r))}),a=qn(e.aP),t=a,i=P(ro,n,1,q,b([t]));if(i.$===1)return z;var c=i.a,l=Kp(r),u=o(oe,.99,o(ue,xe(e.aJ),Aa(bu(c)))),$=hu(c),s=$.a,d=$.b,m=$.c,f=Hp(p(Oo,s,d,m)),h=o(oe,1.01,o(zn,f,Aa(gu(c)))),g=o(Ip,e.eC,{ex:e.ex,eW:h,fo:u}),y=Jp(g).dR,S=y?Je(Fn(Yt(r))):en(Jt(r)),_=function(){var ce=e.b0;switch(ce.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var me=ce.a;return L(3,me);case 4:var me=ce.a;return L(4,me);default:return L(5,0)}}(),w=_.a,M=_.b,W=e.bF,j=W,R=o(ni,j,e.b2),N=R,Z=lr({dC:0,dD:S.fZ,dE:dn(N),dF:e.ej,dG:0,dH:S.f1,dI:mn(N),dJ:da(f),dK:0,dL:S.da,dM:pn(N),dN:w,dO:0,dP:y,dQ:0,dR:M}),F=_e(fu,Z,l,g,Gp,t,{L:z,T:z,fG:z}),J=e.bL;switch(J.$){case 0:var Q=J.a;return qe(b([p(tr,F.L,L(Q,gt),qr),p(tr,F.T,Cn,qr)]));case 1:var Q=J.a;return qe(b([p(tr,F.L,Cn,qr),b([cc]),p(tr,F.fG,Q.bd,du),b([pu(0)]),p(tr,F.L,L(Q,gt),Op),p(tr,F.T,Cn,qr)]));default:var le=J.a,fe=J.b;return qe(b([p(tr,F.L,L(fe,gt),qr),b([cc]),o(wp,F.fG,le),p(qp,F.L,fe,Zr(le)),p(tr,F.T,Cn,qr)]))}},t3=function(e){return o(Br,"width",Ve(e))},o3=v(function(e,r){var n=b([Y1(1),rp(0),G1(!0),P(U1,0,0,0,0)]),a=function(){var w=e.b3;switch(w.$){case 0:return k(n,"0",1);case 1:return k(o(A,O1,n),"1",1);default:var M=w.a;return k(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=nc($),d=o(ne,"height",Ve(s)+"px"),m=nc(u),f=m/s,h=o(ri,function(w){return a3({ex:f,eC:e.eC,aJ:e.aJ,aP:w.aP,bF:w.bF,bL:w.bL,ej:c,b0:w.b0,b2:w.b2})},r),g=o(ne,"width",Ve(m)+"px"),y=e.aI,S=y,_=ap(S);return p(K1,"div",b([o(ne,"padding","0px"),g,d]),b([L(i,p(ip,t,b([t3(Ne(m*c)),X1(Ne(s*c)),g,d,o(ne,"display","block"),o(ne,"background-color",_)]),h))]))}),i3=function(e){return o(o3,{b3:e.b3,aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bF:e.bF,bL:e.bL,b0:e.b0,b2:e.b2}]))},Lu=function(e){return e},lc=Lu({fZ:.31271,f1:.32902}),c3=v(function(e,r){var n=e,a=Je(r.eO),t=a.fZ,i=a.f1,c=a.da,l=o(ni,r.cg,r.b9),u=l;return{bz:pn(u),eE:n,bH:mn(u),cN:0,bX:dn(u),c2:1,fZ:-t,f1:-i,da:-c}}),l3=function(e){return e},u3=function(e){return l3(1.2*o(Gn,2,e))},yt=function(e){return e},v3={$:0},$3=v3,Pu=function(e){return e},f3=v(function(e,r){var n=e,a=r;return I(a,n)>0}),uc=function(e){var r=e;return r},s3=function(e){e:for(;;){if(Ye(e.e9,cr)&&Ye(e.fa,cr))return Te;if(o(f3,xe(e.e9),xe(e.fa))){var r={b9:e.b9,e9:e.fa,fa:e.e9,ep:Fn(e.ep)};e=r;continue e}else{var n=Y(uc(e.fa)/Ae),a=Y(uc(e.e9)/Ae),t=Je(e.ep),i=t.fZ,c=t.f1,l=t.da,u=o(ni,Pu(1),e.b9),$=u;return{bz:a*pn($),eE:!1,bH:a*mn($),cN:n/a,bX:a*dn($),c2:3,fZ:i,f1:c,da:l}}}},vc=function(e){return s3({b9:e.b9,e9:e.cg,fa:cr,ep:e.ep})},d3=function(e){var r=e;return r},zu=function(e){var r=p(nu,1667,25e3,d3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Lu({fZ:n,f1:a})},Tu=function(e){return e},m3=zu(Tu(12e3)),p3=zu(Tu(5600)),b3=function(e){return{$:2,a:e}},g3=function(e){return b3(e)},h3=v(function(e,r){return{$:2,a:e,b:r}}),ku=function(e){return{$:0,a:e}},ta=function(e){var r=e;return r},_3=function(e){var r=e;return r.eE},y3=ku(Cn.a),C3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(A,a,i),c):L(i,o(A,a,c))});return p(xr,n,L(z,z),r)}),S3=function(e){var r=e;return lr({dC:r.fZ,dD:r.bX,dE:0,dF:0,dG:r.f1,dH:r.bH,dI:0,dJ:0,dK:r.da,dL:r.bz,dM:0,dN:0,dO:r.c2,dP:r.cN,dQ:0,dR:0})},x3=ee(function(e,r,n,a,t,i,c,l){var u=o(C3,_3,b([ta(e),ta(r),ta(n),ta(a)])),$=u.a,s=u.b;if($.b){var d=ve($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,g=f.b,y=g.a,S=g.b,_=S.a;return o(h3,o(ae,S3,$),{bd:o(Ge,m,h),bM:o(Ge,y,_),bN:o(Ge,t,i),bO:o(Ge,c,l)})}else return y3}else return ku({bd:o(Ge,e,r),bM:o(Ge,n,a),bN:o(Ge,t,i),bO:o(Ge,c,l)})}),w3=C(function(e,r,n){return Wa(x3,e,r,n,Te,Te,Te,Te,Te)}),L3=function(e){var r=o(c3,W1(e.fG),{b9:p3,eO:e.fO,cg:yt(8e4)}),n=vc({b9:m3,cg:yt(2e4),ep:e.ep}),a=vc({b9:lc,cg:yt(15e3),ep:Fn(e.ep)}),t=p(w3,r,n,a);return i3({b3:g3(e.cd),aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK,aP:e.aP,bF:u3(15),bL:t,b0:$3,b2:lc})},Mu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),P3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Du=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Au=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),z3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),T3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),k3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ui=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return P(k3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return P(Mu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return P(P3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return P(Du,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return P(T3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return P(Au,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return P(z3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},vi={$:0},M3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Va(c(u)),d=o(de,s.dW,e),m=o(ue,s.dT,r),f=o(de,s.dX,n),h=o(ue,s.dU,a),g=o(de,s.dY,t),y=o(ue,s.dV,i),S=c,_=$;e=d,r=m,n=f,a=h,t=g,i=y,c=S,l=_;continue e}else return{dT:r,dU:a,dV:i,dW:e,dX:n,dY:t}}),D3=C(function(e,r,n){var a=Va(e(r));return Wa(M3,a.dW,a.dT,a.dX,a.dU,a.dY,a.dV,e,n)}),Ct=v(function(e,r){var n=e,a=r;return I(a,n)<1}),Bu=function(e){return o(Ct,e.dT,e.dW)&&o(Ct,e.dU,e.dX)&&o(Ct,e.dV,e.dY)?e:{dT:o(ue,e.dW,e.dT),dU:o(ue,e.dX,e.dU),dV:o(ue,e.dY,e.dV),dW:o(de,e.dW,e.dT),dX:o(de,e.dX,e.dU),dY:o(de,e.dY,e.dV)}},Vn=function(e){var r=e;return r},Fu=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=zr(n),c=Tr(n),l=kr(n),u=zr(a),$=Tr(a),s=kr(a),d=zr(t),m=Tr(t),f=kr(t);return Bu({dT:o(ue,i,o(ue,u,d)),dU:o(ue,c,o(ue,$,m)),dV:o(ue,l,o(ue,s,f)),dW:o(de,i,o(de,u,d)),dX:o(de,c,o(de,$,m)),dY:o(de,l,o(de,s,f))})},Vu=hf,ke=function(e){return Vu(Qa(e))},Eu=function(e){var r=e;return r},Ka=function(e){return Vu(Eu(e))},A3=v(function(e,r){var n=e,a=r;return{fZ:a.f1*n.da-a.da*n.f1,f1:a.da*n.fZ-a.fZ*n.da,da:a.fZ*n.f1-a.f1*n.fZ}}),no=v(function(e,r){var n=e,a=r;return{fZ:a.fZ-n.fZ,f1:a.f1-n.f1,da:a.da-n.da}}),B3={fZ:0,f1:0,da:0},F3=v(function(e,r){var n=e,a=r,t=o(Ie,Y(a.fZ),o(Ie,Y(a.f1),Y(a.da)));if(t){var i=a.da/t,c=a.f1/t,l=a.fZ/t,u=Nr(l*l+c*c+i*i);return{fZ:n*l/u,f1:n*c/u,da:n*i/u}}else return B3}),V3=F3(Pu(1)),Ru=C(function(e,r,n){var a=o(no,r,n),t=o(no,e,r);return V3(o(A3,a,t))}),E3=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=Ka(p(Ru,n,a,t));return k({n:i,bV:ke(n)},{n:i,bV:ke(a)},{n:i,bV:ke(t)})},R3=v(function(e,r){return{$:2,a:e,b:r}}),ju=R3({dj:3,ds:0,d_:4}),j3=function(e){if(e.b){var r=e.a,n=e.b,a=ju(o(ae,E3,e)),t=p(D3,Fu,r,n);return P(Mu,t,e,a,0)}else return vi},Ze=C(function(e,r,n){return k(e,r,n)}),Nu=function(){var e=rr(1),r=rr(1),n=rr(1),a=o(oe,-.5,e),t=o(oe,-.5,r),i=o(oe,-.5,n),c=p(pe,i,t,a),l=o(oe,.5,e),u=p(pe,i,t,l),$=o(oe,.5,r),s=p(pe,i,$,a),d=p(pe,i,$,l),m=o(oe,.5,n),f=p(pe,m,t,a),h=p(pe,m,$,a),g=p(pe,m,t,l),y=p(pe,m,$,l);return ui(j3(b([p(Ze,c,h,f),p(Ze,c,s,h),p(Ze,u,g,y),p(Ze,u,y,d),p(Ze,f,h,y),p(Ze,f,y,g),p(Ze,c,d,s),p(Ze,c,u,d),p(Ze,c,f,g),p(Ze,c,g,u),p(Ze,s,y,h),p(Ze,s,d,y)])))}(),oa={$:0},N3=C(function(e,r,n){return{$:1,a:e,b:r,c:n}}),W3=C(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ka(p(Ru,u,l,c)),s={n:$,bV:ke(u)},d={n:$,bV:ke(l)},m={n:$,bV:ke(c)};return o(A,s,o(A,d,o(A,m,n)))}),$i=function(e){var r=e;return r.C},Z3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),ao=4294967295>>>32-Dn,to=Cv,G3=C(function(e,r,n){e:for(;;){var a=ao&r>>>e,t=o(to,a,n);if(t.$){var $=t.a;return o(to,ao&r,$)}else{var i=t.a,c=e-Dn,l=r,u=i;e=c,r=l,n=u;continue e}}}),H3=function(e){return e>>>5<<5},O3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,H3(n))>-1?re(o(to,ao&e,i)):re(p(G3,a,e,t))}),fi=function(e){var r=e;return r.ag},St=v(function(e,r){return o(O3,e,fi(r))}),I3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(Z3,C(function(c,l,u){return k(c,l,u)}),o(St,a,e),o(St,t,e),o(St,i,e))};return o(Zn,r,$i(e))},U3=C(function(e,r,n){e:for(;;){var a=o(zo,je,e),t=a.a,i=a.b;if(I(Rt(t),je)<0)return o(ll,!0,{y:r,l:n,o:t});var c=i,l=o(A,cl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),si=function(e){return e.b?p(U3,e,z,0):ol},q3=C(function(e,r,n){return e(r(n))}),J3=v(function(e,r){return!o(Bo,o(q3,Is,e),r)}),Y3=function(e){var r=e.a;return r},Wu=v(function(e,r){var n=Y3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(J3,a,r)?{C:r,ag:e}:{C:o(Go,a,r),ag:e}}),X3=C(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Jn=X3({dj:1,ds:3,d_:4}),pa=v(function(e,r){var n=en(r),a=en(e);return L(k(a.fZ,a.f1,a.da),k(n.fZ,n.f1,n.da))}),$c=p(In,0,0,0),xt=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(qa,o(pa,e,r),t);if($.$){var d={n:$c,bV:ke(r)},m={n:$c,bV:ke(e)},f=u+1,h=u;return k(o(A,k(n,h,f),o(A,k(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=$.a;return k(o(A,k(n,s,a),c),l,u)}}),Q3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,g=a,y=e,S=r,_=$,w=a+3,M=_e(xt,s,m,f,g,r,_e(xt,d,s,h,f,r,_e(xt,m,d,g,h,r,t)));e=y,r=S,n=_,a=w,t=M;continue e}else{var W=t,j=W.a,R=W.b;return L(j,Re(R))}}),K3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,g=n,y=p(wn,o(pa,m,s),f,p(wn,o(pa,s,d),h,p(wn,o(pa,d,m),g,t))),S=o(A,k(g,h,f),a),_=e,w=$,M=n+3,W=S,j=y;e=_,r=w,n=M,a=W,t=j;continue e}else return k(a,t,n)}),Er=C(function(e,r,n){var a=I3(n),t=p(xr,W3(r),z,a),i=x(K3,r,a,0,z,Zl),c=i.a,l=i.b,u=i.c,$=x(Q3,r,l,a,0,k(c,z,u)),s=$.a,d=$.b,m=qt(d)?t:ve(t,d);return p(N3,e,o(Wu,si(m),s),o(Jn,m,s))}),oo=function(e){return{C:o(ae,function(r){return k(3*r,3*r+1,3*r+2)},o(rn,0,Zr(e)-1)),ag:si(qe(o(ae,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Zu=function(e){switch(e.$){case 0:return oa;case 1:var a=e.a,r=e.b,n=o(ae,Vn,r);return p(Er,a,$r,oo(n));case 2:var a=e.a,r=e.b,n=o(ae,Vn,r);return p(Er,a,$r,oo(n));case 3:var a=e.a,t=e.b;return p(Er,a,$r,t);case 4:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 5:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 6:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 7:var a=e.a,t=e.b;return p(Er,a,function(i){return i.bV},t);case 8:return oa;case 9:return oa;default:return oa}},fc=Zu(Nu),Gu={$:0},T=Gu,be=v(function(e,r){return{$:1,a:e,b:r}}),eb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bD"}},rb=1029,nb=function(e){return{$:5,a:e}},Hu=function(e){var r=e;return nb(r)},ab=Hu(rb),tb=1028,ob=Hu(tb),Me=C(function(e,r,n){return r===1?e?o(A,ab,n):o(A,ob,n):n}),Ou={src:`
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
    `,attributes:{position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wt=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return x(te,p(Me,l,a,d),Ou,eb,n,{bD:e,b:c,c:i,d:$,e:t,f:u})}))}),di={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"av"}},Iu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pr=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return x(te,p(Me,l,a,d),Iu,di,n,{av:e,b:c,c:i,d:$,e:t,f:u})}))}),Uu=v(function(e,r){return{$:3,a:e,b:r}}),ib={src:`
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
    `,attributes:{},uniforms:{constantColor:"av",pointRadius:"bU",sceneProperties:"e"}},qu={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bU",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cb=E(function(e,r,n,a){return o(Uu,n,ee(function(t,i,c,l,u,$,s,d){return x(te,d,qu,ib,a,{av:e,b:c,c:i,bU:r,d:$,e:t,f:u})}))}),mi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Yn=function(e){var r=e;return r},et=_f,br=ge(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return x(te,p(Me,u,t,m),Iu,mi,a,{aN:o(et,Yn(r),e),b:l,c,d:s,e:i,f:$})}))}),lb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bU",sceneProperties:"e"}},ub=ge(function(e,r,n,a,t){return o(Uu,a,ee(function(i,c,l,u,$,s,d,m){return x(te,m,qu,lb,t,{aN:o(et,Yn(r),e),b:l,c,bU:n,d:s,e:i,f:$})}))}),Ju={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColor:"cs",sceneProperties:"e",viewMatrix:"f"}},Yu={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ia=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return x(te,p(Me,l,a,d),Yu,Ju,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,cs:e,b:c,c:i,d:$,e:t,f:u})}))}),Xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColorTexture:"ct",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Qu={src:`
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
    `,attributes:{normal:"n",position:"bV",tangent:"el",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vb=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var h=m.a,g=m.b;return x(te,p(Me,$,i,f),Qu,Xu,t,{O:g,bd:h.bd,bM:h.bM,bN:h.bN,bO:h.bO,ct:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Ku={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b7",constantBaseColor:"ca",constantMetallic:"cb",constantRoughness:"cc",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallicTexture:"cx",normalMapTexture:"aW",roughnessTexture:"cW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},$b=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(be,u,ee(function(d,m,f,h,g,y,S,_){var w=S.a,M=S.b;return x(te,p(Me,h,s,_),Qu,Ku,$,{b7:e,ca:r,cb:i,cc:a,O:M,bd:w.bd,bM:w.bM,bN:w.bN,bO:w.bO,cx:t,b:f,c:m,aW:c,d:y,cW:n,e:d,a$:l,f:g})}))}}}}}}}}}}},ev={src:`
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
    `,attributes:{},uniforms:{baseColor:"b6",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallic:"cw",roughness:"cV",sceneProperties:"e",viewMatrix:"f"}},ca=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var h=m.a,g=m.b;return x(te,p(Me,$,i,f),Yu,ev,t,{b6:e,O:g,bd:h.bd,bM:h.bM,bN:h.bN,bO:h.bO,cw:n,b:u,c:l,d,cV:r,e:c,f:s})}))}),fb=function(e){return{$:0,a:e}},sc=v(function(e,r){return{$:1,a:e,b:r}}),Tn=v(function(e,r){if(r.$){var n=r.a.B;return L(n,1)}else return r.a,L(e,0)}),sb=function(e){return P(sn,dn(e),mn(e),pn(e),1)},pi=P(sn,0,0,0,0),ba=v(function(e,r){if(r.$){var a=r.a.B;return L(a,pi)}else{var n=r.a;return L(e,sb(n))}}),rv=v(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.B;return o(sc,L(t,pi),o(Tn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(sc,o(ba,t,e),o(Tn,t,r))}else{var a=n.a.a;return n.b.a,fb(a)}}),db=C(function(e,r,n){return{$:0,a:e,b:r,c:n}}),la=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),mb=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pb=function(e){return o(Fe,e,1)},io=o(Fe,0,0),Jr=v(function(e,r){if(r.$){var a=r.a.B;return L(a,io)}else{var n=r.a;return L(e,pb(n))}}),nv=E(function(e,r,n,a){var t=P(mb,e,r,n,a);if(t.a.$){var u=t.a.a.B;return P(la,L(u,pi),o(Jr,u,r),o(Jr,u,n),o(Tn,u,a))}else if(t.b.$){var u=t.b.a.B;return P(la,o(ba,u,e),L(u,io),o(Jr,u,n),o(Tn,u,a))}else if(t.c.$){var u=t.c.a.B;return P(la,o(ba,u,e),o(Jr,u,r),L(u,io),o(Tn,u,a))}else if(t.d.$){var u=t.d.a.B;return P(la,o(ba,u,e),o(Jr,u,r),o(Jr,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(db,i,c,l)}}),bb={src:`
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
    `,attributes:{},uniforms:{backlight:"b4",colorTexture:"bD",sceneProperties:"e"}},Lt=ge(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return x(te,p(Me,u,t,m),Ou,bb,a,{b4:Yn(r),bD:e,b:l,c,d:s,e:i,f:$})}))}),av={src:`
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
    `,attributes:{normal:"n",position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},gb=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return x(te,p(Me,l,a,d),av,Xu,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,ct:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),hb=uo(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function($,s,d,m,f,h,g,y){var S=g.a,_=g.b;return x(te,p(Me,m,u,y),av,Ku,l,{b7:e,ca:r,cb:i,cc:a,O:_,bd:S.bd,bM:S.bM,bN:S.bN,bO:S.bO,cx:t,b:d,c:s,aW:e,d:h,cW:n,e:$,a$:0,f})}))}),En=C(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),_b=function(e){var r=e;return p(En,r.dW,r.dT,.5)},yb=function(e){var r=e;return p(En,r.dX,r.dU,.5)},Cb=function(e){var r=e;return p(En,r.dY,r.dV,.5)},Sb=function(e){return p(pe,_b(e),yb(e),Cb(e))},G=function(e){var r=hu(e),n=r.a,a=r.b,t=r.c;return{eF:Qa(Sb(e)),eZ:n/2,e_:a/2,e$:t/2}},bi=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return P(wt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(wt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(wt,l,G(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var n=e.b.a;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(pr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return P(pr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return P(pr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return P(cb,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return x(Lt,l,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Lt,l,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Lt,l,$,G(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(br,u,$,G(t),c,a);case 8:var t=r.a,c=r.c;return x(br,u,$,G(t),c,0);case 9:var t=r.a,c=r.c;return x(br,u,$,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(ub,u,$,i,G(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(rv,s,j);if(d.$){var h=d.a,g=h.a;h.b;var y=d.b,S=y.a,_=y.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return P(gb,g,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(vb,g,S,_,G(t),c,f);case 8:return T;case 9:return T;default:return T}}else{var m=d.a;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 3:return T;case 4:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return P(ia,m,G(t),c,f);case 8:return T;case 9:return T;default:return T}}default:e.a;var w=e.b,M=e.c,W=e.d,j=e.e,R=P(nv,w,M,W,j);if(R.$){var J=R.a,Q=J.a,le=J.b,fe=R.b,ce=fe.a,me=fe.b,De=R.c,we=De.a,wr=De.b,Lr=R.d,S=Lr.a,_=Lr.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return bv(hb,Q,le,ce,me,we,wr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return $b(Q)(le)(ce)(me)(we)(wr)(S)(_)(G(t))(c)(a);case 8:return T;case 9:return T;default:return T}}else{var N=R.a,Z=R.b,F=R.c;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 3:return T;case 4:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(ca,N,Z,F,G(t),c,a);case 8:return T;case 9:return T;default:return T}}}}),Pt=function(e){var r=e;return r.fZ},zt=function(e){var r=e;return r.f1},Tt=function(e){var r=e;return r.da},xb=function(e){var r=e,n=Tt(r.db),a=zt(r.db),t=Pt(r.db),i=Tt(r.c9),c=zt(r.c9),l=Pt(r.c9),u=Tt(r.c8),$=zt(r.c8),s=Pt(r.c8);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},wb=function(e){var r=Qa($n(e)),n=Je(Ur(e)),a=Je(Ir(e)),t=Je(Or(e));return{du:xb(e),p:t.fZ,q:t.f1,r:t.da,s:a.fZ,t:a.f1,u:a.da,v:n.fZ,w:n.f1,x:n.da,G:r.fZ,H:r.f1,I:r.da,bZ:1}},Yr=v(function(e,r){return{$:5,a:e,b:r}}),tv=v(function(e,r){var n=r;switch(n.$){case 0:return T;case 5:var a=n.a,t=n.b,i=o($u,a,e);return o(Yr,i,t);case 1:return o(Yr,e,n);case 3:return o(Yr,e,n);case 2:return o(Yr,e,n);default:return o(Yr,e,n)}}),ov=v(function(e,r){return o(tv,wb(e),r)}),rt=function(e){return{$:2,a:e}},Lb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eF;return{eF:{fZ:n*i.fZ,f1:a*i.f1,da:t*i.da},eZ:n*r.eZ,e_:a*r.e_,e$:t*r.e$}}),Pb=Sf,zb=Cf,dc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=zb(a),h=f.fZ,g=f.f1,y=f.da,S=f.et,_=Pb({et:S,fZ:h*s,f1:g*d,da:y*m});return Wa(r,n,_,t,i,c,l,u,$)}}}}}}}}}},co=v(function(e,r){switch(r.$){case 0:return Gu;case 5:var n=r.a,a=r.b;return o(Yr,n,o(co,e,a));case 1:var t=r.a,i=r.b;return o(be,o(Lb,e,t),o(dc,e,i));case 3:return r;case 2:var i=r.a;return rt(o(dc,e,i));default:var c=r.a;return Cu(o(ae,co(e),c))}}),gi=v(function(e,r){var n=r;return o(co,e,n)}),hi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},iv=7683,cv=7682,Tb=p(oi,{cr:0,cS:0,c7:15},{a8:Se,bl:on,bu:Se,bv:iv},{a8:Se,bl:on,bu:Se,bv:cv}),kb=p(oi,{cr:0,cS:0,c7:15},{a8:Se,bl:on,bu:Se,bv:cv},{a8:Se,bl:on,bu:Se,bv:iv}),_i=v(function(e,r){return e?o(A,kb,r):o(A,Tb,r)}),Mb={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},Db=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,$){return x(te,o(_i,i,$),Mb,hi,r,{b:t,c:a,d:l,e:n,b$:u,f:c})}))}else return q},Ea=function(e){var r=Db(e);if(r.$)return T;var n=r.a;return rt(n)},Ab=E(function(e,r,n,a){var t=o(bi,n,Nu),i=function(){var s=L(e,r);return s.a?s.b?qn(b([t,Ea(fc)])):t:s.b?Ea(fc):T}(),c=Yo(a),l=c.a,u=c.b,$=c.c;return o(ov,Jo(a),o(gi,k(l,u,$),i))}),Bb=v(function(e,r){return P(Ab,!0,!0,e,r)}),lv=v(function(e,r){return{$:0,a:e,b:r}}),Fb=function(e){var r=Ro(e),n=r.cR,a=r.cf,t=r.b8;return p(In,n,a,t)},Vb=function(e){return o(lv,0,eo(Fb(e)))},Eb=function(e){var r=e;return r.k},kn=function(e){var r=e;return an(r)},Rb=v(function(e,r){var n=e.bV,a=e.n;return o(A,{n:Ka(a),bV:ke(n)},r)}),jb=Na(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=pn(l.bV),s=mn(l.bV),d=dn(l.bV),m=o(Pn,e,d),f=o(Ie,r,d),h=o(Pn,n,s),g=o(Ie,a,s),y=o(Pn,t,$),S=o(Ie,i,$),_=u;e=m,r=f,n=h,a=g,t=y,i=S,c=_;continue e}else return Bu({dT:r,dU:a,dV:i,dW:e,dX:n,dY:t})}),uv=v(function(e,r){var n=pn(e.bV),a=mn(e.bV),t=dn(e.bV);return vo(jb,t,t,a,a,n,n,r)}),Nb=function(e){var r=p(Xc,Rb,z,fi(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,$i(e)),i=o(uv,n,a);return P(Du,i,e,t,0)}else return vi},mc=v(function(e,r){var n=e,a=r,t=n.c9,i=t,c=n.c8,l=c;return{fZ:a.fZ*l.fZ+a.f1*i.fZ,f1:a.fZ*l.f1+a.f1*i.f1,da:a.fZ*l.da+a.f1*i.da}}),Ra=function(e){var r=e;return tn(r)},Sn=function(e){var r=e;return r},lo=function(e){return nr(2*Ae*e)},pc=ql({cE:Fr,c8:Ya,c9:ei}),vv=function(){var e=72,r=o(Kl,e,lo(1)),n=rr(1),a=Sn(Zo),t=Sn(Ho),i=rr(1),c=o(oe,.5,i),l=p(pe,cr,cr,c),u=o(oe,-.5,i),$=p(pe,cr,cr,u),s=function(f){var h=o(oe,f,r),g=Sn(o(mc,pc,Xt(h))),y=o(oe,kn(h),n),S=o(oe,Ra(h),n),_=p(pe,y,S,c),w=p(pe,y,S,u),M=o(Ta,e,f+1),W=o(oe,M,r),j=Sn(o(mc,pc,Xt(W))),R=o(oe,kn(W),n),N=o(oe,Ra(W),n),Z=p(pe,R,N,u),F=p(pe,R,N,c);return b([k({n:t,bV:$},{n:t,bV:Z},{n:t,bV:w}),k({n:g,bV:w},{n:j,bV:Z},{n:j,bV:F}),k({n:g,bV:w},{n:j,bV:F},{n:g,bV:_}),k({n:a,bV:l},{n:a,bV:_},{n:a,bV:F})])},d=o(ae,s,o(rn,0,e-1)),m=oo(qe(d));return ui(Nb(m))}(),bc=Zu(vv),Wb=function(e){var r=e,n=Y(r.da),a=Y(r.f1),t=Y(r.fZ);if(I(t,a)<1)if(I(t,n)<1){var i=Nr(r.da*r.da+r.f1*r.f1);return{fZ:0,f1:-r.da/i,da:r.f1/i}}else{var i=Nr(r.f1*r.f1+r.fZ*r.fZ);return{fZ:-r.f1/i,f1:r.fZ/i,da:0}}else if(I(a,n)<1){var i=Nr(r.da*r.da+r.fZ*r.fZ);return{fZ:r.da/i,f1:0,da:-r.fZ/i}}else{var i=Nr(r.fZ*r.fZ+r.f1*r.f1);return{fZ:-r.f1/i,f1:r.fZ/i,da:0}}},Zb=function(e){var r=Wb(e),n=r,a=n,t=e,i=t,c={fZ:i.f1*a.da-i.da*a.f1,f1:i.da*a.fZ-i.fZ*a.da,da:i.fZ*a.f1-i.f1*a.fZ};return L(r,c)},Gb=function(e){var r=Wo(e),n=Zb(r),a=n.a,t=n.b;return Hr({cE:Ql(e),c8:a,c9:t,db:r})},Hb=function(e){var r=e;return r.ff},Ob=function(e){var r=e;return r.fz},Ib=E(function(e,r,n,a){var t=Gb(Eb(a)),i=o(bi,n,vv),c=function(){var d=L(e,r);return d.a?d.b?qn(b([i,Ea(bc)])):i:d.b?Ea(bc):T}(),l=Ob(a),u=l,$=Hb(a),s=$;return o(ov,t,o(gi,k(u,u,s),c))}),Ub=v(function(e,r){return P(Ib,!0,!0,e,r)}),gc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},hc={src:`
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
    `,attributes:{triangleVertex:"c1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},xn=function(e){var r=Vn(e),n=r.a,a=r.b,t=r.c,i=en(n),c=en(a),l=en(t);return lr({dC:i.fZ,dD:c.fZ,dE:l.fZ,dF:0,dG:i.f1,dH:c.f1,dI:l.f1,dJ:0,dK:i.da,dL:c.da,dM:l.da,dN:0,dO:0,dP:0,dQ:0,dR:0})},ua=ju(b([k({c1:0},{c1:1},{c1:2})])),qb=v(function(e,r){var n=Fu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,T;var t=e.b.a;return o(be,a,ee(function(_,w,M,W,j,R,N,Z){return x(te,p(Me,W,0,Z),gc,di,ua,{av:t,b:M,c:w,d:R,e:_,bq:xn(r),f:j})}));case 1:if(e.b.$)return e.a,T;var i=e.b.a,c=e.c;return o(be,a,ee(function(_,w,M,W,j,R,N,Z){return x(te,p(Me,W,0,Z),gc,mi,ua,{aN:o(et,Yn(c),i),b:M,c:w,d:R,e:_,bq:xn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(rv,l,f);if(u.$)return T;var $=u.a;return o(be,a,ee(function(_,w,M,W,j,R,N,Z){var F=N.a,J=N.b;return x(te,p(Me,W,0,Z),hc,Ju,ua,{O:J,bd:F.bd,bM:F.bM,bN:F.bN,bO:F.bO,cs:$,b:M,c:w,d:R,e:_,bq:xn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=P(nv,s,d,m,f);if(h.$)return T;var g=h.a,y=h.b,S=h.c;return o(be,a,ee(function(_,w,M,W,j,R,N,Z){var F=N.a,J=N.b;return x(te,p(Me,W,0,Z),hc,ev,ua,{b6:g,O:J,bd:F.bd,bM:F.bM,bN:F.bN,bO:F.bO,cw:S,b:M,c:w,d:R,cV:y,e:_,bq:xn(r),f:j})}))}}),Jb=function(){var e=b([{a_:o(Fe,0,1)},{a_:o(Fe,1,1)},{a_:o(Fe,2,1)},{a_:o(Fe,0,-1)},{a_:o(Fe,1,-1)},{a_:o(Fe,2,-1)}]),r=b([k(0,1,2),k(3,5,4),k(3,4,1),k(3,1,0),k(4,5,2),k(4,2,1),k(5,3,0),k(5,0,2)]);return o(Jn,e,r)}(),Yb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",triangleVertexPositions:"bq",viewMatrix:"f"}},_c=function(e){return rt(ee(function(r,n,a,t,i,c,l,u){return x(te,o(_i,t,u),Yb,hi,Jb,{b:a,c:n,d:c,e:r,b$:l,bq:xn(e),f:i})}))},Xb=E(function(e,r,n,a){var t=o(qb,n,a),i=L(e,r);return i.a?i.b?qn(b([t,_c(a)])):t:i.b?_c(a):T}),Qb=v(function(e,r){return P(Xb,!0,!0,e,r)}),Kb=v(function(e,r){var n=kr(r),a=kr(e),t=Tr(r),i=Tr(e),c=zr(r),l=zr(e);return{dT:o(ue,l,c),dU:o(ue,i,t),dV:o(ue,a,n),dW:o(de,l,c),dX:o(de,i,t),dY:o(de,a,n)}}),eg=function(e){var r=Xo(e),n=r.a,a=r.b;return o(Kb,n,a)},yc={src:`
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
    `,attributes:{lineSegmentVertex:"dB"},uniforms:{lineSegmentEndPoint:"dz",lineSegmentStartPoint:"dA",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rg=v(function(e,r){return{$:1,a:e,b:r}}),ng=rg({dj:2,ds:0,d_:1}),Cc=ng(b([L({dB:0},{dB:1})])),ag=v(function(e,r){var n=eg(r),a=G(n),t=Xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,T;var l=e.b.a;return o(be,a,ee(function($,s,d,m,f,h,g,y){return x(te,y,yc,di,Cc,{av:l,dz:ke(c),dA:ke(i),b:d,c:s,d:h,e:$,f})}));case 1:if(e.b.$)return T;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,d,m,f,h,g,y,S){return x(te,S,yc,mi,Cc,{aN:o(et,Yn(u),l),dz:ke(c),dA:ke(i),b:m,c:d,d:g,e:s,f:h})}));case 2:return T;default:return T}}),tg=v(function(e,r){return o(ag,e,r)}),Sc=v(function(e,r){var n=e,a=r;return n/a}),og=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(Ye(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),xc=v(function(e,r){return e<1?z:x(og,0,e,e,r,z)}),ig=v(function(e,r){var n=e.bV,a=e.n,t=e.K,i=t,c=i.a,l=i.b;return o(A,{n:Ka(a),bV:ke(n),K:o(Fe,c,l)},r)}),cg=function(e){var r=p(Xc,ig,z,fi(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,$i(e)),i=o(uv,n,a);return P(Au,i,e,t,0)}else return vi},$v=v(function(e,r){var n=e,a=r,t=an(a);return{fZ:t*an(n),f1:t*tn(n),da:tn(a)}}),lg=function(){var e=rr(1),r=72,n=o(rn,0,r-1),a=o(xc,r,o(En,cr,lo(1))),t=Lo(r/2),i=o(rn,0,t-1),c=o(xc,t,o(En,yn(90),yn(-90))),l=si(qe(o(ae,function(s){return o(ae,function(d){return{n:Sn(o($v,s,d)),bV:p(pe,o(oe,kn(d)*kn(s),e),o(oe,kn(d)*Ra(s),e),o(oe,Ra(d),e)),K:L(o(Sc,s,lo(1)),o(Sc,o(zn,yn(90),d),yn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=qe(o(ae,function(s){return qe(o(ae,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),g=o(u,s,d+1);return b([k(g,h,m),k(g,m,f)])},i))},n));return ui(cg(o(Wu,l,$)))}(),ja=72,va=2*ja,ug=v(function(e,r){e:for(;;){var n=va+1,a=o(Ta,va,2*e+3),t=o(Ta,va,2*e+2),i=2*e+1,c=2*e,l=va,u=o(A,k(l,c,t),o(A,k(c,a,t),o(A,k(c,i,a),o(A,k(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),vg=C(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$g=v(function(e,r){e:for(;;){var n=p(vg,0,2*Ae,e/ja),a={bx:n,bR:0,bY:1},t={bx:n,bR:1,bY:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),fg=function(){var e=o($g,ja-1,b([{bx:0,bR:0,bY:0},{bx:0,bR:1,bY:0}])),r=o(ug,ja-1,z);return o(Jn,e,r)}(),sg={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bR",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},wc=function(e){return rt(ee(function(r,n,a,t,i,c,l,u){return x(te,o(_i,!0,u),sg,hi,fg,{av:p(In,0,0,1),b:a,c:n,d:c,e:r,b$:l,f:i})}))},dg=function(e){var r=Eu(e);return{du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:r.fZ,H:r.f1,I:r.da,bZ:1}},mg=v(function(e,r){return o(tv,dg(e),r)}),pg=E(function(e,r,n,a){var t=o(bi,n,lg),i=function(){var u=L(e,r);return u.a?u.b?qn(b([t,wc()])):t:u.b?wc():T}(),c=Ko(a),l=c;return o(mg,o(no,Fr,Qo(a)),o(gi,k(l,l,l),i))}),bg=v(function(e,r){return P(pg,!0,!0,e,r)}),gg=C(function(e,r,n){return{$:1,a:e,b:r,c:n}}),hg=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),_g=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(lv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(gg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(ru,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return x(hg,n,a,t,i,c)}},yg=_g,fv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(Bb,t,r)]);case 1:var t=e.a,n=e.b;return b([o(Qb,t,n)]);case 3:var t=e.a,a=e.b;return b([o(bg,yg(t),a)]);case 2:var t=e.a,i=e.b;return b([o(Ub,t,i)]);case 4:var c=e.a,l=e.b;return b([o(tg,Vb(c),l)]);default:var u=e.a;return o(ri,fv,u)}},Cg=function(e){return o(ri,fv,e)},Sg=v(function(e,r){return L3({aI:j1(e.ez),eC:e.eC,aJ:N1(.5),cd:e.cd,aK:L(rc(Ne(e.b_.fX)),rc(Ne(e.b_.e1))),aP:Cg(r),fG:!0,fO:o($v,nr(e.fN),nr(e.fP)),ep:On})}),xg=v(function(e,r){return o(Sg,{ez:P(Fl,0,0,0,0),eC:Yl(e),cd:e.cd,b_:e.b_,fN:o(_r,"sunlight azimuth",e),fP:o(_r,"sunlight elevation",e)},b([M1(e),o(R1,e,r)]))}),wg=v(function(e,r){return o(U,b([o(ne,"width","100%")]),b([i1,o(xg,e,r)]))}),Lg=P(Hm,wg,t1,Ym,Im);const Pg={Main:{init:Lg(o(B,function(e){return Be({e8:e})},o(D,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Be({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fW:e})},o(D,"clock",se))},o(D,"devicePixelRatio",se))},o(D,"dt",se))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return o(B,function(s){return o(B,function(d){return Be({ev:d,eI:s,di:$,eP:u,fe:l,fy:c,fC:i,fH:t,eo:a})},o(D,"alt",X))},o(D,"control",X))},o(D,"down",X))},o(D,"downs",La(Bn)))},o(D,"left",X))},o(D,"pressedKeys",La(Bn)))},o(D,"right",X))},o(D,"shift",X))},o(D,"up",X))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return Be({di:$,dt:u,fj:l,fD:c,fE:i,eo:t,fZ:a,f1:n})},o(D,"down",X))},o(D,"isDown",X))},o(D,"move",X))},o(D,"rightDown",X))},o(D,"rightUp",X))},o(D,"up",X))},o(D,"x",se))},o(D,"y",se))))},o(D,"screen",o(B,function(r){return o(B,function(n){return Be({e1:n,fX:r})},o(D,"height",se))},o(D,"width",se))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return Be({eL:r,eM:e})},o(D,"deltaX",se))},o(D,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},zg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},Tg=()=>{kt("pointerdown"),kt("wheel"),kt("keydown")},kt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},kg=Pg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Tg();zg(kg);
