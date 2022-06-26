const $v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};$v();function Dr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Dr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Dr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Dr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return Dr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Je(e){return Dr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ia(e){return Dr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return Dr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function mo(e){return Dr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function T(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function xe(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function po(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ua(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function fv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var sv=[];function dv(e){return e.length}var mv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),pv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),bv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var gv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+hv()),r});function hv(e){return"<internals>"}function pn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Mr(e,r){for(var n,a=[],t=Nt(e,r,0,a);t&&(n=a.pop());t=Nt(n.a,n.b,0,a));return t}function Nt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&pn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=Fi(e),r=Fi(r));for(var t in e)if(!Nt(e[t],r[t],n+1,a))return!1;return!0}$(Mr);$(function(e,r){return!Mr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var _v=$(function(e,r){var n=O(e,r);return n<0?nl:n?os:rl}),Gn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function tr(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=$r(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=$r(e.a,r);return n}var L={$:0};function $r(e,r){return{$:1,a:e,b:r}}var wv=$($r);function h(e){for(var r=L,n=e.length;n--;)r=$r(e[n],r);return r}function Oa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var yv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(T(e,r.a,n.a,a.a,t.a));return h(i)});Je(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Oa(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return h(Oa(r).sort(function(n,a){var t=o(e,n,a);return t===rl?0:t===nl?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var xv=$(Math.pow);$(function(e,r){return r%e});var Sv=$(function(e,r){var n=r%e;return e===0?pn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Cv=Math.PI,Tv=Math.cos,Lv=Math.sin,zv=Math.tan,Pv=Math.acos;$(Math.atan2);function kv(e){return e}function Mv(e){return e===1/0||e===-1/0}var Dv=Math.ceil,Av=Math.floor,Bv=Math.round,Fv=Math.sqrt,wi=Math.log,Vv=isNaN;function Ev(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var jv=$(function(e,r){return e+r});function Rv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function Nv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Hv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Xv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Wv=$(function(e,r){return r.split(e)}),Gv=$(function(e,r){return r.join(e)}),Iv=y(function(e,r,n){return n.slice(e,r)});function Uv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Ov=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Jv=$(function(e,r){return r.indexOf(e)>-1}),Yv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var qv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Pc(e){return e+""}function Zv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:ne(n==45?-r:r)}function Kv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ne(r):Y}function Qv(e){return Oa(e).join("")}function e$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function r$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function n$(e){return{$:0,a:e}}function bo(e){return{$:2,b:e}}var a$=bo(function(e){return typeof e=="boolean"?ve(e):ar("a BOOL",e)}),t$=bo(function(e){return typeof e=="number"?ve(e):ar("a FLOAT",e)}),o$=bo(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):ar("a STRING",e)});function i$(e){return{$:3,b:e}}var c$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Ar(e,r){return{$:9,f:e,g:r}}var l$=$(function(e,r){return{$:10,b:r,h:e}}),u$=$(function(e,r){return Ar(e,[r])}),v$=y(function(e,r,n){return Ar(e,[r,n])});E(function(e,r,n,a){return Ar(e,[r,n,a])});_e(function(e,r,n,a,t){return Ar(e,[r,n,a,t])});Je(function(e,r,n,a,t,i){return Ar(e,[r,n,a,t,i])});Ia(function(e,r,n,a,t,i,c){return Ar(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return Ar(e,[r,n,a,t,i,c,l])});mo(function(e,r,n,a,t,i,c,l,u){return Ar(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ge(e,n)}catch(a){return Se(o(Po,"This is not valid JSON! "+a.message,r))}});var kc=$(function(e,r){return Ge(e,r)});function Ge(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):ar("null",r);case 3:return oa(r)?yi(e.b,r,h):ar("a LIST",r);case 4:return oa(r)?yi(e.b,r,$$):ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ar("an OBJECT with a field named `"+n+"`",r);var v=Ge(e.b,r[n]);return Ze(v)?v:Se(o(Vi,n,v.a));case 7:var a=e.e;if(!oa(r))return ar("an ARRAY",r);if(a>=r.length)return ar("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ge(e.b,r[a]);return Ze(v)?v:Se(o(al,a,v.a));case 8:if(typeof r!="object"||r===null||oa(r))return ar("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Ge(e.b,r[i]);if(!Ze(v))return Se(o(Vi,i,v.a));t=$r(z(i,v.a),t)}return ve(Ne(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ge(l[u],r);if(!Ze(v))return v;c=c(v.a)}return ve(c);case 10:var v=Ge(e.b,r);return Ze(v)?Ge(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=Ge(d.a,r);if(Ze(v))return v;s=$r(v.a,s)}return Se(is(Ne(s)));case 1:return Se(o(Po,e.a,r));case 0:return ve(e.a)}}function yi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ge(e,r[i]);if(!Ze(c))return Se(o(al,i,c.a));t[i]=c.a}return ve(n(t))}function oa(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function $$(e){return o(xs,e.length,function(r){return e[r]})}function ar(e,r){return Se(o(Po,"Expecting "+e,r))}function tn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return tn(e.b,r.b);case 6:return e.d===r.d&&tn(e.b,r.b);case 7:return e.e===r.e&&tn(e.b,r.b);case 9:return e.f===r.f&&xi(e.g,r.g);case 10:return e.h===r.h&&tn(e.b,r.b);case 11:return xi(e.g,r.g)}}function xi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!tn(e[a],r[a]))return!1;return!0}var f$=$(function(e,r){return JSON.stringify(r,null,e)+""});function Mc(e){return e}y(function(e,r,n){return n[e]=r,n});function Yr(e){return{$:0,a:e}}function s$(e){return{$:1,a:e}}function Sr(e){return{$:2,b:e,c:null}}var Ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function d$(e){return{$:5,b:e}}var m$=0;function go(e){var r={$:0,e:m$++,f:e,g:null,h:[]};return ho(r),r}function Dc(e){return Sr(function(r){r(Yr(go(e)))})}function Ac(e,r){e.h.push(r),ho(e)}var p$=$(function(e,r){return Sr(function(n){Ac(e,r),n(Yr(Gn))})}),ht=!1,Si=[];function ho(e){if(Si.push(e),!ht){for(ht=!0;e=Si.shift();)b$(e);ht=!1}}function b$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ho(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return _o(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function _o(e,r,n,a,t,i){var c=o(kc,e,r?r.flags:void 0);Ze(c)||pn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=g$(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Ti(l,b.b,t(v))}return Ti(l,u.b,t(v)),d?{ports:d}:{}}var cr={};function g$(e,r){var n;for(var a in cr){var t=cr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=_$(t,r)}return n}function h$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function _$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ht,l,d$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?T(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=go(o(Ht,l,e.b))}var w$=$(function(e,r){return Sr(function(n){e.g(r),n(Yr(Gn))})});$(function(e,r){return o(p$,e.h,{$:0,a:r})});function Bc(e){return function(r){return{$:1,k:e,l:r}}}function y$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ci=[],_t=!1;function Ti(e,r,n){if(Ci.push({p:e,q:r,r:n}),!_t){_t=!0;for(var a;a=Ci.shift();)x$(a.p,a.q,a.r);_t=!1}}function x$(e,r,n){var a={};Sa(!0,r,a,null),Sa(!1,n,a,null);for(var t in e)Ac(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function Sa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=S$(e,t,a,r.l);n[t]=C$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Sa(e,c.a,n,a);return;case 3:Sa(e,r.o,n,{s:r.n,t:a});return}}function S$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?cr[r].e:cr[r].f;return o(i,t,a)}function C$(e,r,n){return n=n||{i:L,j:L},e?n.i=$r(r,n.i):n.j=$r(r,n.j),n}function T$(e){cr[e]&&pn(3)}$(function(e,r){return r});function L$(e,r){return T$(e),cr[e]={f:z$,u:r,a:P$},Bc(e)}var z$=$(function(e,r){return function(n){return e(r(n))}});function P$(e,r){var n=L,a=cr[e].u,t=Yr(null);cr[e].b=t,cr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(kc,a,c);Ze(l)||pn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Ca,gr=typeof document!="undefined"?document:{};function wo(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(zr(e,function(){}),t),{}});function Xt(e){return{$:0,a:e}}var Fc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:yo(n),e:t,f:e,b:i}})}),Cr=Fc(void 0),k$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:yo(n),e:t,f:e,b:i}})}),M$=k$(void 0);function D$(e,r,n,a){return{$:3,d:yo(e),g:r,h:n,i:a}}var A$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Br(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Br([e,r],function(){return e(r)})});y(function(e,r,n){return Br([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Br([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return Br([e,r,n,a,t],function(){return T(e,r,n,a,t)})});Je(function(e,r,n,a,t,i){return Br([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ia(function(e,r,n,a,t,i,c){return Br([e,r,n,a,t,i,c],function(){return xe(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return Br([e,r,n,a,t,i,c,l],function(){return po(e,r,n,a,t,i,c,l)})});mo(function(e,r,n,a,t,i,c,l,u){return Br([e,r,n,a,t,i,c,l,u],function(){return Ua(e,r,n,a,t,i,c,l,u)})});var Vc=$(function(e,r){return{$:"a0",n:e,o:r}}),B$=$(function(e,r){return{$:"a1",n:e,o:r}}),Ec=$(function(e,r){return{$:"a2",n:e,o:r}}),In=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function F$(e){return e=="script"?"p":e}function V$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Vc,r.n,E$(e,r.o)):r});function E$(e,r){var n=Bo(r);return{$:r.$,a:n?p(Ss,n<3?j$:R$,Ee(e),r.a):o(Pa,e,r.a)}}var j$=$(function(e,r){return z(e(r.a),r.b)}),R$=$(function(e,r){return{am:e(r.am),cQ:r.cQ,cE:r.cE}});function yo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Li(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Li(c,t,i):c[t]=i}return r}function Li(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function zr(e,r){var n=e.$;if(n===5)return zr(e.k||(e.k=e.m()),r);if(n===0)return gr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=zr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Wt(c,r,e.d),c}var c=e.f?gr.createElementNS(e.f,e.c):gr.createElement(e.c);Ca&&e.c=="a"&&c.addEventListener("click",Ca(c)),Wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)wo(c,zr(n===1?l[u]:l[u].b,r));return c}function Wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?N$(e,t):a==="a0"?W$(e,r,t):a==="a3"?H$(e,t):a==="a4"?X$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function N$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function H$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function X$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function W$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=G$(r,i),e.addEventListener(t,c,xo&&{passive:Bo(i)<2}),a[t]=c}}var xo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xo=!0}}))}catch{}function G$(e,r){function n(a){var t=n.q,i=Ge(t.a,a);if(!!Ze(i)){for(var c=Bo(t),l=i.a,u=c?c<3?l.a:l.am:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function I$(e,r){return e.$==r.$&&tn(e.a,r.a)}function jc(e,r){var n=[];return Ke(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ke(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Q$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ke(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){we(n,0,a,r);return}(f?!U$(d,m):d!==m)&&we(n,2,a,m),Ke(g,b,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:zi(e,r,n,a,O$);return;case 2:zi(e,r,n,a,J$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=So(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function U$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function zi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=So(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function So(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=So(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&I$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function O$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ke(s,i[v],n,++a),a+=s.b||0}}function J$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,M=void 0,H=void 0;if(w===x){f++,Ke(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],j=u[m+1];if(R){var N=R.a,X=R.b;H=x===N}if(j){var F=j.a,q=j.b;M=w===F}if(M&&H){f++,Ke(_,q,t,f),wn(i,t,w,C,m,c),f+=_.b||0,f++,yn(i,t,w,X,f),f+=X.b||0,d+=2,m+=2;continue}if(M){f++,wn(i,t,x,C,m,c),Ke(_,q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(H){f++,yn(i,t,w,_,f),f+=_.b||0,f++,Ke(X,C,t,f),f+=X.b||0,d+=2,m+=1;continue}if(R&&N===F){f++,yn(i,t,w,_,f),wn(i,t,x,C,m,c),f+=_.b||0,f++,Ke(X,q,t,f),f+=X.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;yn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];wn(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&we(n,8,a,{w:t,x:c,y:K})}var Rc="_elmW6BL";function wn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ke(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}wn(e,r,n+Rc,a,t,i)}function yn(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ke(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}yn(e,r,n+Rc,a,t)}function Nc(e,r,n,a){xn(e,r,n,0,0,r.b,a)}function xn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Nc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&xn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&xn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return xn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=xn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Hc(e,r,n,a){return n.length===0?e:(Nc(e,r,n,a),Ta(e,n))}function Ta(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Y$(t,a);t===e&&(e=i)}return e}function Y$(e,r){switch(r.$){case 0:return q$(e,r.s,r.u);case 4:return Wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ta(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(zr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Ta(e,i.w),e;case 8:return Z$(e,r);case 5:return r.s(e);default:pn(10)}}function q$(e,r,n){var a=e.parentNode,t=zr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Z$(e,r){var n=r.s,a=K$(n.y,r);e=Ta(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:zr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&wo(e,a),e}function K$(e,r){if(!!e){for(var n=gr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;wo(n,i.c===2?i.s:zr(i.z,r.u))}return n}}function Co(e){if(e.nodeType===3)return Xt(e.textContent);if(e.nodeType!==1)return Xt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=$r(o(In,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=$r(Co(v[a]),u);return p(Cr,l,r,u)}function Q$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ef=E(function(e,r,n,a){return _o(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=Co(l);return Xc(i,function(v){var s=c(v),d=jc(u,s);l=Hc(l,u,d,t),u=s})})});E(function(e,r,n,a){return _o(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=gr.title,v=gr.body,s=Co(v);return Xc(i,function(d){Ca=c;var m=l(d),f=Cr("body")(L)(m.er),g=jc(s,f);v=Hc(v,s,g,t),s=f,Ca=0,u!==m.fI&&(gr.title=u=m.fI)})})});var La=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Xc(e,r){r(e);var n=0;function a(){n=n===1?0:(La(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&La(a),n=2)}}$(function(e,r){return o(Eo,Fo,Sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Eo,Fo,Sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Eo,Fo,Sr(function(){history.replaceState({},"",r),e()}))});var rf={addEventListener:function(){},removeEventListener:function(){}},nf=typeof window!="undefined"?window:rf;y(function(e,r,n){return Dc(Sr(function(a){function t(i){go(n(i))}return e.addEventListener(r,t,xo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ge(e,r);return Ze(n)?ne(n.a):Y});function Wc(e,r){return Sr(function(n){La(function(){var a=document.getElementById(e);n(a?Yr(r(a)):s$(Ts(e)))})})}function af(e){return Sr(function(r){La(function(){r(Yr(e()))})})}$(function(e,r){return Wc(r,function(n){return n[e](),Gn})});$(function(e,r){return af(function(){return nf.scroll(e,r),Gn})});y(function(e,r,n){return Wc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Gn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var tf=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var of=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):Y}a.push(T(Vl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):Y}return n(T(Vl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var Pi=0;function jn(e,r){for(;r.b;r=r.b)e(r.a)}function To(e){for(var r=0;e.b;e=e.b)r++;return r}var cf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},lf=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),uf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),vf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),ff=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),df=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),mf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},gf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},hf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},_f=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Gc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ic=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},wf=function(e){e.gl.disable(e.gl.CULL_FACE)},yf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},xf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ki=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Cf=[gf,hf,_f,Gc,Ic,wf,yf,xf,Sf];function Mi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Tf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Uc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Lf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Uc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(To(n.b)*s);jn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function zf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=Pf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*To(r.b),indexBuffer:null,buffers:{}}}function Pf(e,r){var n=new Uint32Array(To(e)*r),a=0,t;return jn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Di(e,r){return e+"#"+r}var Oc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Gc(n),Ic(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Di(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Pi++,v||(v=Mi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Pi++,s||(s=Mi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Tf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=kf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=Di(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Mf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=zf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Lf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Uc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,jn(k0(n),i.a),u=0;u<ki.length;u++){var M=n[ki[u]];M.toggle!==n.toggle&&M.enabled&&(Cf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return jn(t,e.g),r});function kf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Mf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Df=y(function(e,r,n){return D$(r,{g:n,f:{},h:e},Rf,Nf)}),Af=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Bf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ff=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Vf=$(function(e,r){e.contextAttributes.antialias=!0}),Ef=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),jf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Rf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};jn(function(t){return o(P0,r,t)},e.h);var n=gr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),cf(function(){return o(Oc,e,n)})):(n=gr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Nf(e,r){return r.f=e.f,Oc(r)}var Hf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Xf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Xf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Lo=new Float64Array(3),Ai=new Float64Array(3),Bi=new Float64Array(3),Wf=y(function(e,r,n){return new Float64Array([e,r,n])}),Gf=function(e){return e[0]},If=function(e){return e[1]},Uf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Of=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Jc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Jc);function Yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),za(Jc(e,r,n),n)}$(Yc);function qc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function za(e,r){r===void 0&&(r=new Float64Array(3));var n=1/qc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Jf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Sn);function Gt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Gt);$(function(e,r){var n,a=Lo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Sn(r,a)+e[14])/n,t});var Yf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var qf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},Zf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Kf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Kf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Qf=new Float64Array(16),es=new Float64Array(16),rs=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},ns=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Je(Zc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Zc(c,l,i,t,n,a)});function Kc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Je(Kc);E(function(e,r,n,a){return Kc(e,r,n,a,-1,1)});function Qc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],M=r[1],H=r[2],R=r[3],j=r[4],N=r[5],X=r[6],F=r[7],q=r[8],K=r[9],ce=r[10],$e=r[11],oe=r[12],de=r[13],Be=r[14],Pe=r[15];return n[0]=a*C+l*M+d*H+b*R,n[1]=t*C+u*M+m*H+w*R,n[2]=i*C+v*M+f*H+x*R,n[3]=c*C+s*M+g*H+_*R,n[4]=a*j+l*N+d*X+b*F,n[5]=t*j+u*N+m*X+w*F,n[6]=i*j+v*N+f*X+x*F,n[7]=c*j+s*N+g*X+_*F,n[8]=a*q+l*K+d*ce+b*$e,n[9]=t*q+u*K+m*ce+w*$e,n[10]=i*q+v*K+f*ce+x*$e,n[11]=c*q+s*K+g*ce+_*$e,n[12]=a*oe+l*de+d*Be+b*Pe,n[13]=t*oe+u*de+m*Be+w*Pe,n[14]=i*oe+v*de+f*Be+x*Pe,n[15]=c*oe+s*de+g*Be+_*Pe,n}$(Qc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],M=r[6],H=r[8],R=r[9],j=r[10],N=r[12],X=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*M,n[5]=t*_+l*C+s*M,n[6]=i*_+u*C+d*M,n[7]=0,n[8]=a*H+c*R+v*j,n[9]=t*H+l*R+s*j,n[10]=i*H+u*R+d*j,n[11]=0,n[12]=a*N+c*X+v*F+m,n[13]=t*N+l*X+s*F+f,n[14]=i*N+u*X+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=za(r,Lo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/qc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,M=g-f,H=c*c*v+u,R=w+d,j=b+m,N=w-d,X=l*l*v+u,F=n[0],q=n[1],K=n[2],ce=n[3],$e=n[4],oe=n[5],de=n[6],Be=n[7],Pe=n[8],Tr=n[9],Lr=n[10],gt=n[11],cv=n[12],lv=n[13],uv=n[14],vv=n[15];return a[0]=F*x+$e*_+Pe*C,a[1]=q*x+oe*_+Tr*C,a[2]=K*x+de*_+Lr*C,a[3]=ce*x+Be*_+gt*C,a[4]=F*M+$e*H+Pe*R,a[5]=q*M+oe*H+Tr*R,a[6]=K*M+de*H+Lr*R,a[7]=ce*M+Be*H+gt*R,a[8]=F*j+$e*N+Pe*X,a[9]=q*j+oe*N+Tr*X,a[10]=K*j+de*N+Lr*X,a[11]=ce*j+Be*N+gt*X,a[12]=cv,a[13]=lv,a[14]=uv,a[15]=vv,a});function as(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(as);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function ts(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(ts);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Yc(e,r,Lo),t=za(Gt(n,a,Ai),Ai),i=za(Gt(a,t,Bi),Bi),c=Qf,l=es;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Qc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=wv,ia=gv,el=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(ia,e,l,v)}else{var u=c.a;return p(ia,i,l,u)}});return p(ia,i,p(ia,e,r,t),a)}),zo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(zo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Fi=function(e){return p(zo,y(function(r,n,a){return o(k,z(r,n),a)}),L,e)},rl=1,os=2,nl=0,Se=function(e){return{$:1,a:e}},Po=$(function(e,r){return{$:3,a:e,b:r}}),Vi=$(function(e,r){return{$:0,a:e,b:r}}),al=$(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},is=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},Y={$:1},cs=Ov,ls=f$,Re=Pc,Nr=$(function(e,r){return o(Gv,e,Oa(r))}),ko=$(function(e,r){return h(o(Wv,e,r))}),tl=function(e){return o(Nr,`
    `,o(ko,`
`,e))},Un=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Or=function(e){return p(Un,$(function(r,n){return n+1}),0,e)},us=yv,vs=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),wr=$(function(e,r){return p(vs,e,r,L)}),ol=$(function(e,r){return p(us,e,o(wr,0,Or(r)-1),r)}),lr=e$,il=function(e){var r=lr(e);return 97<=r&&r<=122},cl=function(e){var r=lr(e);return r<=90&&65<=r},$s=function(e){return il(e)||cl(e)},fs=function(e){var r=lr(e);return r<=57&&48<=r},ss=function(e){return il(e)||cl(e)||fs(e)},Ne=function(e){return p(Un,k,L,e)},bn=Rv,ds=$(function(e,r){return`

(`+(Re(e+1)+(") "+tl(ms(r))))}),ms=function(e){return o(ps,e,L)},ps=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=bn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return $s(x)&&o(cs,ss,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Re(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Nr,"",Ne(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Re(Or(s))+" ways:"));return o(Nr,`

`,o(k,g,o(ol,ds,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Nr,"",Ne(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Nr,"",Ne(r))+`:

    `):`Problem with the given value:

`}();return g+(tl(o(ls,4,f))+(`

`+m))}}),He=32,It=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ut=sv,Mo=Dv,Do=$(function(e,r){return wi(r)/wi(e)}),bs=kv,Rn=Mo(o(Do,2,He)),ll=T(It,0,Rn,Ut,Ut),ul=mv,vl=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var $l=Av,Ot=dv,Ae=$(function(e,r){return O(e,r)>0?e:r}),gs=function(e){return{$:0,a:e}},Ao=pv,hs=$(function(e,r){e:for(;;){var n=o(Ao,He,e),a=n.a,t=n.b,i=o(k,gs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ne(i)}}),_s=function(e){var r=e.a;return r},ws=$(function(e,r){e:for(;;){var n=Mo(r/He);if(n===1)return o(Ao,He,e).a;var a=o(hs,e,L),t=n;e=a,r=t;continue e}}),fl=$(function(e,r){if(r.l){var n=r.l*He,a=$l(o(Do,He,n-1)),t=e?Ne(r.z):r.z,i=o(ws,t,r.l);return T(It,Ot(r.p)+n,o(Ae,5,a*Rn),i,r.p)}else return T(It,Ot(r.p),Rn,Ut,r.p)}),ys=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(fl,!1,{z:a,l:n/He|0,p:t});var i=vl(p(ul,He,r,e)),c=e,l=r-He,u=n,v=o(k,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),xs=$(function(e,r){if(e<=0)return ll;var n=e%He,a=p(ul,n,e-n,r),t=e-n-He;return S(ys,r,t,e,L,a)}),Ze=function(e){return!e.$},A=l$,Z=a$,D=c$,fe=t$,Pa=u$,Ss=v$,Ee=n$,Bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Cr("div"),Cs=function(e){return{$:2,a:e}},sl=$(function(e,r){return e}),dl=$(function(e,r){return{D:r.D,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),Xr=function(e){return e},Ts=Xr,Ei=Je(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),Ls=Jv,Hr=Nv,on=Iv,On=$(function(e,r){return e<1?r:p(on,e,Hr(r),r)}),Ja=qv,Ya=function(e){return e===""},qa=$(function(e,r){return e<1?"":p(on,0,e,r)}),ml=Zv,ji=_e(function(e,r,n,a,t){if(Ya(t)||o(Ls,"@",t))return Y;var i=o(Ja,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=ml(o(On,c+1,t));if(l.$===1)return Y;var u=l;return ne(xe(Ei,e,o(qa,c,t),u,r,n,a))}else return ne(xe(Ei,e,t,Y,r,n,a))}),Ri=E(function(e,r,n,a){if(Ya(a))return Y;var t=o(Ja,"/",a);if(t.b){var i=t.a;return S(ji,e,o(On,i,a),r,n,o(qa,i,a))}else return S(ji,e,"/",r,n,a)}),Ni=y(function(e,r,n){if(Ya(n))return Y;var a=o(Ja,"?",n);if(a.b){var t=a.a;return T(Ri,e,ne(o(On,t+1,n)),r,o(qa,t,n))}else return T(Ri,e,Y,r,n)});$(function(e,r){if(Ya(r))return Y;var n=o(Ja,"#",r);if(n.b){var a=n.a;return p(Ni,e,ne(o(On,a+1,r)),o(qa,a,r))}else return p(Ni,e,Y,r)});var zs=Yv,Fo=function(e){},Jn=Yr,Ps=Jn(0),pl=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Un,e,r,Ne(d)):T(pl,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=y(function(e,r,n){return T(pl,e,r,0,n)}),Q=$(function(e,r){return p(dr,$(function(n,a){return o(k,e(n),a)}),L,r)}),ka=Ht,Vo=$(function(e,r){return o(ka,function(n){return Jn(e(n))},r)}),ks=y(function(e,r,n){return o(ka,function(a){return o(ka,function(t){return Jn(o(e,a,t))},n)},r)}),Ms=function(e){return p(dr,ks(k),Jn(L),e)},Ds=w$,As=$(function(e,r){var n=r;return Dc(o(ka,Ds(e),n))}),Bs=y(function(e,r,n){return o(Vo,function(a){return 0},Ms(o(Q,As(e),r)))}),Fs=y(function(e,r,n){return Jn(0)}),Vs=$(function(e,r){var n=r;return o(Vo,e,n)});cr.Task=h$(Ps,Bs,Fs,Vs);var Es=Bc("Task"),Eo=$(function(e,r){return Es(o(Vo,e,r))}),js=ef,Rs=Ev,Ma={$:1},bl=function(e){return{$:2,a:e}},Za={$:0},Ie=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),gn=function(e){var r=e.b.B;return r.a},Ns=function(e){var r=e.a,n=e.b.U,a=e.b.B,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return ne(o(Ie,r,{B:i,ac:c,U:o(k,a,n)}))}else return Y},gl=function(e){var r=e.b;return o(Ie,Za,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Hs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?gl(n):n;case 2:var i=a.a.cR;return(O(i+r.eH,gn(n).D)>0?o(te,Ns,fr(o(Ie,Ma,t))):Xr)(o(Ie,bl({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(dl,l.ey,tr(r,{D:l.D+r.eH})),s=o(e,v,u);return o(Ie,Za,{B:z(v,s),ac:L,U:o(k,t.B,t.U)})}}),hl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Xs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),Ws=$(function(e,r){return Ne(p(Xs,e,r,L))}),_l=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(Ws,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(_l,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Gs=$(function(e,r){return p(_l,0,e,r)}),Is=$(function(e,r){var n=r.b.U,a=r.b.B,t=r.b.ac,i=ue(Ne(n),ue(h([a]),t)),c=o(Gs,e,i),l=o(hl,e,i);if(l.b){var u=l.a,v=l.b;return o(Ie,Ma,{B:u,ac:v,U:Ne(c)})}else{var s=Ne(c);if(s.b){var d=s.a,m=s.b;return o(Ie,Ma,{B:d,ac:L,U:m})}else return r}}),Us=function(e){var r=e.b;return o(Ie,Ma,r)},Os=function(e){var r=e.b;return o(Ie,bl({cR:gn(e).D}),r)},Js=$(function(e,r){switch(e.$){case 1:return Us(r);case 2:return gl(r);case 3:return Os(r);default:var n=e.a;return o(Is,n,r)}}),wl=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ys=$(function(e,r){return tr(r,{aw:e(r.aw)})}),qs=function(e){return{$:3,a:e}},Zs=function(e){return{$:2,a:e}},yl=$(function(e,r){return{$:0,a:e,b:r}}),xl=$(function(e,r){return{$:1,a:e,b:r}}),Te=$(function(e,r){if(r.$)return Y;var n=r.a;return ne(e(n))}),J=function(e){return e<0?-e:e},jo=Kv,Ks=y(function(e,r,n){return o(fr,0/0,jo(o(e,r,n)))}),Sl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Qs=Xv,Cl=function(e){return p(Qs,k,L,e)},ed=$(function(e,r){var n=o(Sl,function(a){return a!=="0"&&a!=="."},Cl(r));return ue(e&&n?"-":"",r)}),pe=Pc,Jt=jv,Tl=r$,Ll=function(e){var r=e.a,n=e.b;if(r==="9"){var a=bn(n);if(a.$===1)return"01";var t=a.a;return o(Jt,"0",Ll(t))}else{var i=lr(r);return i>=48&&i<57?o(Jt,Tl(i+1),n):"0"}},Yt=Mv,rd=Vv,Ka=function(e){return o(Jt,e,"")},zl=y(function(e,r,n){return e<=0?n:p(zl,e>>1,ue(r,r),e&1?ue(n,r):n)}),Nn=$(function(e,r){return p(zl,e,r,"")}),qt=y(function(e,r,n){return ue(n,o(Nn,e-Hr(n),Ka(r)))}),Zt=Hv,Pl=function(e){var r=o(ko,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},nd=function(e){var r=o(ko,"e",pe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,ml(o(zs,"+",t)?o(On,1,t):t)),c=Pl(n),l=c.a,u=c.b,v=ue(l,u),s=i<0?o(fr,"0",o(Te,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Te,wl(Ka),bn(ue(o(Nn,J(i),"0"),v))))):p(qt,i+1,"0",v);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},ad=y(function(e,r,n){if(Yt(n)||rd(n))return pe(n);var a=n<0,t=Pl(nd(J(n))),i=t.a,c=t.b,l=Hr(i)+r,u=ue(o(Nn,-l+1,"0"),p(qt,l,"0",ue(i,c))),v=Hr(u),s=o(Ae,1,l),d=o(e,a,p(on,s,v,u)),m=p(on,0,s,u),f=d?Zt(o(fr,"1",o(Te,Ll,bn(Zt(m))))):m,g=Hr(f),b=f==="0"?f:r<=0?ue(f,o(Nn,J(r),"0")):O(r,Hr(c))<0?p(on,0,g-r,f)+("."+p(on,g-r,g,f)):ue(i+".",p(qt,r,"0",c));return o(ed,a,b)}),Pn=ad($(function(e,r){var n=bn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(lr(t))})),td=Ks(Pn),od=y(function(e,r,n){var a=o(Do,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(td,t,n)}),kl=_v,Qa=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(kl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),sr={$:-2},fn=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,v,s,S(G,1,g,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),Kt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,sr,sr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(kl,e,t);switch(u){case 0:return S(fn,a,t,i,p(Kt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(fn,a,t,i,c,p(Kt,e,r,l))}}),kn=y(function(e,r,n){var a=p(Kt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),id=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Ml=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},Hi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,x))}else return e},cd=Ia(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Hi(r)}else break e;else return c.a,c.d,Hi(r);else break e;return r}}),pa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,pa(t),l);var u=Ml(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(fn,v,s,d,pa(m),f)}else return sr}else return S(G,r,n,a,pa(t),l)}else return sr},Mn=$(function(e,r){if(r.$===-2)return sr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(Mn,e,i),c);var u=Ml(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(fn,v,s,d,o(Mn,e,m),f)}else return sr}else return S(G,n,a,t,o(Mn,e,i),c);else return o(ld,e,po(cd,e,r,n,a,t,i,c))}),ld=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Mr(e,a)){var l=id(c);if(l.$===-1){var u=l.b,v=l.c;return S(fn,n,u,v,i,pa(c))}else return sr}else return S(fn,n,a,t,i,o(Mn,e,c))}else return sr}),ud=$(function(e,r){var n=o(Mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),ca=y(function(e,r,n){var a=r(o(Qa,e,n));if(a.$)return o(ud,e,n);var t=a.a;return p(kn,e,t,n)}),vd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(ca,r,Te(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(xl,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(ca,r,Te(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(yl,z(i,c),p(od,i,c,n))}));case 3:var r=e.a,n=e.b;return o(ca,r,Te(function(a){return a.$===3?qs(n):a}));default:var r=e.a,n=e.b;return o(ca,r,Te(function(a){return a.$===2?Zs(n):a}))}},$d=function(e){return Ys(vd(e))},fd=$(function(e,r){return o(Q,$d(e),r)}),sd=$(function(e,r){return tr(r,{ey:o(fd,e,r.ey)})}),dd=$(function(e,r){var n=r.a,a=r.b;return o(Ie,n,tr(a,{B:o(wl,sd(e),a.B)}))}),md=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),pd=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ie,a,tr(t,{B:o(md,o(e,i.a,r),i)}))}),bd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return tr(a,{aM:!a.aM});case 2:var t=n.a;return tr(a,{H:p(Hs,e,t,a.H)});case 3:var i=n.a;return tr(a,{H:o(dd,i,a.H)});case 4:var c=n.a;return tr(a,{H:p(pd,r,c,a.H)});default:var l=n.a;return tr(a,{H:o(Js,l,a.H)})}}),gd=$(function(e,r){return o(Ie,Za,{B:z(e,r(e)),ac:L,U:L})}),hd=y$,Xi=hd(L),Da=i$,Hn=o$,_d=L$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ee({D:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(D,"clock",fe))},o(D,"devicePixelRatio",fe))},o(D,"dt",fe))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Ee({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",Da(Hn)))},o(D,"left",Z))},o(D,"pressedKeys",Da(Hn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Ee({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",fe))},o(D,"y",fe))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Ee({eV:n,fR:r})},o(D,"height",fe))},o(D,"width",fe))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Ee({eB:r,eC:e})},o(D,"deltaX",fe))},o(D,"deltaY",fe))))),wd=function(e){return{$:4,a:e}},yd={$:0},xd=Mc,Ye=$(function(e,r){return o(Ec,e,xd(r))}),U=Ye("className"),Sd=function(e){var r=e.b.B;return r.b},Aa=Ye("id"),Cd=A$,Ba=Cd,Td=B$,he=Td,Ld={$:1},zd=function(e){return{$:3,a:e}},Pd=function(e){return{$:5,a:e}},Wi=Cr("a"),Ro=Cr("button"),kd=In("d"),Dl=Fc("http://www.w3.org/2000/svg"),Md=Dl("path"),Dd=Dl("svg"),Ad=In("viewBox"),Dn=function(e){return o(Dd,h([Ad("0 0 100 100"),o(he,"width","100%"),o(he,"height","100%")]),h([o(Md,h([kd(e)]),L)]))},Gi=function(e){return o(Ye,"href",V$(e))},ln={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Bd=function(e){return{$:0,a:e}},Al=Vc,Bl=$(function(e,r){return o(Al,e,Bd(r))}),No=function(e){return o(Bl,"click",Ee(e))},Ii=Ye("target"),Fd=Ye("title"),Qt=$(function(e,r){if(r.$===-2)return sr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Qt,e,i),o(Qt,e,c))}),Vd=Xt,ge=Vd,Ed=function(e){return p(zo,y(function(r,n,a){return o(k,n,a)}),L,e)},jd=$(function(e,r){return{$:3,a:e,b:r}}),Rd=$(function(e,r){return{$:2,a:e,b:r}}),Nd=$(function(e,r){return{$:0,a:e,b:r}}),Hd=$(function(e,r){return{$:1,a:e,b:r}}),qe=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Xd=T(qe,0/255,0/255,0/255,1),Wd=Mc,Gd=$(function(e,r){return o(Ec,e,Wd(r))}),Id=Gd("checked"),er=Bv,Ud=y(function(e,r,n){return ue(o(Nn,e-Hr(n),Ka(r)),n)}),Fa=Sv,Fl=function(e){var r=function(n){return n<10?Re(n):Ka(Tl(87+n))};return e<16?r(e):ue(Fl(e/16|0),r(o(Fa,16,e)))},Od=o(te,Fl,o(Ud,2,"0")),Ho=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b1:a,b7:n,cG:r}},Jd=function(e){var r=Ho(e),n=r.cG,a=r.b7,t=r.b1;return o(Nr,"",o(k,"#",o(Q,o(te,er,Od),h([n*255,a*255,t*255]))))},eo=Ye("htmlFor"),ro=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),Va=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return e(n)}}),Yd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),et=$(function(e,r){return p(dr,Yd(e),L,r)}),Vl=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),qd=of,Zd=Qv,Kd=$(function(e,r){if(r.$)return Se(e);var n=r.a;return ve(n)}),Qd=tf,em=function(e){return o(Qd,{et:!1,fc:!1},e)},rt=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return Y},rm=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return ve(e(n))}}),nm=function(e){return{$:2,a:e}},am=function(e){return{$:0,a:e}},tm=function(e){return{$:1,a:e}},wt=$(function(e,r){return lr(r)-lr(e)}),yt=y(function(e,r,n){var a=lr(n);return O(lr(e),a)<1&&O(a,lr(r))<1}),om=$(function(e,r){var n=function(t){return O(t,e)<0?ve(t):Se(tm(r))},a=p(yt,"0","9",r)?ve(o(wt,"0",r)):p(yt,"a","z",r)?ve(10+o(wt,"a",r)):p(yt,"A","Z",r)?ve(10+o(wt,"A",r)):Se(am(r));return o(Va,n,a)}),El=$(function(e,r){var n=bn(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Va,function(c){return o(Va,function(l){return ve(c+l*e)},o(El,e,i))},o(om,e,t))}),im=$(function(e,r){return 2<=e&&e<=36?o(El,e,Zt(r)):Se(nm(e))}),cm=im(16),lm=y(function(e,r,n){return T(qe,e,r,n,1)}),um=E(function(e,r,n,a){return T(qe,e,r,n,a)}),Yn=xv,vm=$(function(e,r){var n=o(Yn,10,e);return er(r*n)/n}),$m=Uv,fm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Cl(n);if(a.b&&!a.b.b){var t=a.a;return Zd(h([t,t]))}else return n};return o(te,$m,o(te,function(n){return o(Te,function(a){return p(qd,1,a,n)},em(e))},o(te,ro(rt),o(te,Te(function(n){return n.fD}),o(te,Te(et(Xr)),o(te,Kd("Parsing hex regex failed"),Va(function(n){var a=o(Q,o(te,r,o(te,cm,rm(bs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ve(T(um,t/255,c/255,u/255,o(vm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(lm,t/255,c/255,u/255))}else break e;return Se("Parsing ints from hex failed")})))))))}(),Ea=Cr("input"),no=Cr("label"),ao=Ye("name"),jl=$(function(e,r){return p(dr,D,r,e)}),sm=o(jl,h(["target","checked"]),Z),dm=function(e){return o(Bl,"change",o(Pa,e,sm))},mm=function(e){return z(e,!0)},pm=function(e){return{$:1,a:e}},bm=$(function(e,r){return o(Al,e,pm(r))}),gm=o(jl,h(["target","value"]),Hn),Xo=function(e){return o(bm,"input",o(Pa,mm,o(Pa,e,gm)))},Rl=Ye("max"),Nl=Ye("min"),Hl=function(e){return o(Ye,"step",e)},ja=Ye("type"),Wo=Ye("value"),Ui=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,L,h([o(no,h([eo(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([ge(r)])),o(I,h([U("inline-block float-right")]),h([ge(pe(n))]))]))])),o(Ea,h([ja("range"),o(he,"width","100%"),Aa(r),ao(r),Nl(pe(a)),Rl(pe(t)),Wo(pe(n)),Hl(pe(i)),Xo(o(te,jo,o(te,fr(42),c)))]),L)]))},hm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_m=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(no,h([eo(e)]),h([ge(e)]))])),o(Ea,h([ja("checkbox"),Aa(e),ao(e),dm(jd(e)),Id(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ui({b9:e,cl:i,cp:t,ct:Nd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ui({b9:e,cl:i,cp:t,ct:o(te,er,Hd(e)),cP:1,cW:c});default:var c=r.a;return o(I,L,h([o(I,h([o(he,"margin-bottom","6px")]),h([o(no,h([eo(e)]),h([ge(e)]))])),o(Ea,h([ja("color"),o(he,"width","100%"),o(he,"height","26px"),o(he,"padding","0px"),Aa(e),ao(e),Xo(function(l){return o(Rd,e,o(hm,Xd,fm(l)))}),Wo(Jd(c))]),L)]))}}),wm=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([ge(e.fd)])),o(I,h([U("pl-2 pr-2")]),Ed(o(Qt,_m,e.aw)))]))},ym=function(e){return o(I,h([U("text-xs text-white60")]),o(Q,wm,e))},xm=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ge("clock: "+o(Pn,3,gn(e).D))]))},Sm=function(e){e.a;var r=e.b.U;return o(Te,function(n){return er(60/(gn(e).D-n))},o(Te,o(te,_s,function(n){return n.D}),rt(o(hl,59,r))))},Cm=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Sm(e);if(r.$===1)return h([ge("... Fps")]);var n=r.a;return h([ge(Re(n)+" Fps")])}())},Tm=function(e){return{$:0,a:e}},Lm=function(e){var r=e.b.U;return Or(r)},zm=function(e){var r=e.b.U;e.b.B;var n=e.b.ac;return Or(r)+1+Or(n)},Pm=function(e){return o(Ea,h([U("absolute left-[100px] w-[490px]"),ja("range"),Nl(Re(0)),Rl(Re(zm(e)-1)),Wo(Re(Lm(e))),Hl(Re(1)),Xo(o(te,jo,o(te,fr(42),o(te,er,Tm))))]),L)},Oi={$:1},km={$:3},Mm={$:2},Xl=function(e){return!e.b},Ji=$(function(e,r){return o(Ro,h([U("px-2 bg-black40"),U(r),No(e)]),h([ge("REC")]))}),Yi=$(function(e,r){return o(Ro,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),No(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([Dn(e)]))]))}),Dm=function(e){var r=e.a,n=e.b.ac;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(Ji,Oi,"text-red-500 font-bold");case 1:return o(Ji,Mm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return Xl(n)?o(I,L,L):o(Yi,ln.fm,km);default:return o(Yi,ln.fl,Oi)}}()]))},Am=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([Pm(e),Dm(e),Cm(e),xm(e)]))},Wl=function(e){return o(Nr,"",e)},Bm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(dr,t,L,a);return o(k,n,i)}else return L}),Fm=function(e){var r=e.a;return Mr(r,Za)},jr=Cr("p"),Vm=Cr("pre"),Em=$(function(e,r){var n=Fm(r.H)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(he,"left",pe(e.fn.fT+.5*e.cM.fR)+"px"),o(he,"top",pe(-e.fn.fX+.5*e.cM.eV)+"px")]),h([o(I,h([U(e.fn.e1?"fill-black80":"fill-white40")]),h([Dn(ln.fn)]))]));return o(I,L,h([n,o(Vm,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(jr,L,h([ge("pressedKeys: "+Wl(o(Bm," ",e.e4.fo)))])),o(jr,L,h([ge("delta time: "+o(Pn,4,e.eH))])),o(jr,L,h([ge("pointer is down: "+(e.fn.e1?"yes":"no"))])),o(jr,L,h([ge("pointer.x: "+o(Pn,2,e.fn.fT))])),o(jr,L,h([ge("pointer.y: "+o(Pn,2,e.fn.fX))])),o(jr,L,h([ge("wheel deltaX: "+pe(e.fP.eB))])),o(jr,L,h([ge("wheel deltaY: "+pe(e.fP.eC))]))]))]))}),jm=$(function(e,r){var n=o(Ro,h([U(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),No(Ld),Fd("Distraction Free Mode")]),h([Dn(ln.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(Wi,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),Gi("https://twitter.com/AzizErkalSelman"),Ii("_blank")]),h([Dn(ln.fK)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(Wi,h([U("fill-githubCat40 hover:fill-githubCat"),Gi("https://github.com/erkal/elm-3d-playground-exploration"),Ii("_blank")]),h([Dn(ln.eP)]))]));return r.aM?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(Ba,zd,ym(gn(r.H).ey))])),o(Ba,Pd,Am(r.H)),o(Em,e,r)]))}),Rm=y(function(e,r,n){var a=Sd(n.H),t=gn(n.H);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(he,"width",pe(t.cM.fR)+"px"),o(he,"height",pe(t.cM.eV)+"px")]),h([o(I,h([U("fixed")]),h([o(Ba,sl(yd),o(e,t,a))])),o(I,h([Aa("gui")]),h([o(jm,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(Ba,wd,o(r,t,a))]))]))]))}),Nm=Je(function(e,r,n,a,t,i){var c=$(function(u,v){return z(T(bd,r,i,u,v),Xi)}),l=function(u){var v=o(dl,n,u.e0);return z({aM:u.e0.cM.fR<500,H:o(gd,v,a)},Xi)};return js({e$:l,fE:sl(_d(Cs)),fL:c,fO:o(Rm,e,t)})}),Hm=E(function(e,r,n,a){return xe(Nm,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),Xm=function(e){return{}},Wm=y(function(e,r,n){return{aw:n,e2:r,fd:e}}),Gl=sr,Gm=function(e){return p(Un,$(function(r,n){var a=r.a,t=r.b;return p(kn,a,t,n)}),Gl,e)},Im=y(function(e,r,n){return p(Wm,e,r,Gm(n))}),qi=Im,_n=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(yl,z(a,t),n))}),Um=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(xl,z(a,t),n))}),ye=Cv,Om=h([p(qi,"Parameters",!0,h([p(Um,"number of tree blocks",z(1,20),16),p(_n,"turning speed of the tree",z(.1,4),1)])),p(qi,"Lighting",!0,h([p(_n,"azimuth for third light",z(-ye,ye),1),p(_n,"elevation for third light",z(-ye,ye),-2),p(_n,"azimuth for fourth light",z(-ye,ye),1),p(_n,"elevation for fourth light",z(-ye,ye),-2)]))]),Jm=$(function(e,r){return r}),yr=function(e){return e},Cn=function(e){return yr(ye*(e/180))},br=Fv,Ym=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(Ae,J(c),o(Ae,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=br(s*s+v*v+u*u);return ne({fT:s/d,fX:v/d,c$:u/d})}else return Y}),ba=function(e){return e},Go=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),ga=function(e){var r=e,n=o(Ae,J(r.fT),o(Ae,J(r.fX),J(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=br(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c$:a/c})}else return Y},Ra=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),qm=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),Il=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Zm=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Km=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Qm=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),e0=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},or=0,Ul={fT:0,fX:0,c$:0},r0=y(function(e,r,n){return o(ro,function(a){var t=o(Km,o(Qm,a,r),r);return o(ro,function(i){var c=o(Go,r,e),l=o(qm,n,c),u=o(Il,or,l)?c:o(Zm,or,l)?e0(c):Ul;return o(Te,function(v){return B(a,i,v)},ga(u))},ga(t))},ga(e))}),n0=function(e){var r=e,n=J(r.c$),a=J(r.fX),t=J(r.fT);if(O(t,a)<1)if(O(t,n)<1){var i=br(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=br(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(O(a,n)<1){var i=br(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=br(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},Io=function(e){var r=n0(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return z(r,c)},cn=function(e){var r=e;return r},rr=function(e){return e},a0=$(function(e,r){var n=Io(e),a=n.a,t=n.b;return rr({cu:r,cZ:a,c_:t,c0:e})}),t0=function(e){var r=o(Ra,e.aS,e.dc),n=cn(e.ee),a=o(Go,r,n),t=p(r0,r,n,a);if(t.$){var v=ga(r);if(v.$){var d=Io(e.ee),m=d.a,f=d.b;return rr({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(a0,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return rr({cu:e.dc,cZ:u,c_:l,c0:c})}},ke={fT:0,fX:0,c$:0},o0=function(e){return{$:0,a:e}},ie=function(e){var r=e;return J(r)},ha=function(e){var r=e;return .5*r},i0=zv,c0=function(e){var r=e;return i0(r)},l0=function(e){var r=ha(ie(e.ef)),n=c0(r);return{cF:o0(n),cX:e.cX}},hr=function(e){return e},nt=hr({fT:0,fX:1,c$:0}),u0=function(e){var r=e.aS,n=e.dc,a=e.ee;return l0({ef:Cn(40),cX:t0({dc:ba(n),aS:ba(r),ee:o(fr,nt,o(Ym,ke,ba(a)))})})},v0=u0({dc:{fT:5,fX:5,c$:12},aS:{fT:0,fX:1,c$:0},ee:{fT:0,fX:1,c$:0}}),Uo=function(e){return e},Ol=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),$0=function(e){var r=e;return r},f0=function(e){var r=p(Ol,1667,25e3,$0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Uo({fT:n,fX:a})},s0=function(e){return e},d0=function(e){return{$:0,a:e}},m0=d0,p0={$:3},b0=p0,g0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),h0=g0,_0=$(function(e,r){return r.b?p(dr,k,r,e):e}),Ue=function(e){return p(dr,_0,L,e)},Oo=$(function(e,r){return Ue(o(Q,e,r))}),w0=function(e){return{$:1,a:e}},y0=w0,x0=function(e){return o(In,"height",Re(e))},S0=function(e){return M$(F$(e))},C0=S0,T0=function(e){return{$:2,a:e}},L0=T0,z0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return er(l*1e3)/1e3},c=function(l){return er(l*1e4)/100};return Wl(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},P0=$(function(e,r){switch(r.$){case 0:return o(Af,e,r);case 1:return o(Bf,e,r);case 2:return o(Ff,e,r);case 3:return o(Vf,e,r);case 4:return o(Ef,e,r);default:return o(jf,e,r)}}),k0=$(function(e,r){switch(r.$){case 0:return o(uf,e,r);case 1:return o(vf,e,r);case 2:return o($f,e,r);case 3:return o(ff,e,r);case 4:return o(sf,e,r);case 5:return o(df,e,r);case 6:return o(mf,e,r);case 7:return o(pf,e,r);default:return bf(e)}}),M0=y(function(e,r,n){return p(Df,e,r,n)}),Zi=function(e){var r=e;return r},hn=Yf,xt=T(hn,1,1,1,1),nr=y(function(e,r,n){return o(Q,function(a){return o(a,r,n)},e)}),D0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),A0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(D0,n*a/t,n,n*(1-a-t)/t)}),qn=Wf,B0=function(e){var r=e.a,n=e.b,a=e.c;return p(qn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},at=$(function(e,r){return B0(o(A0,e,r))}),Jl=$(function(e,r){return{dk:Mr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.bW,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.bW,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.bW,bW:e.bW*r.bW}}),ir=rs,F0=function(e){return ir({ds:e.q,dt:e.t,du:e.w,dv:e.I,dw:e.r,dx:e.u,dy:e.x,dz:e.J,dA:e.s,dB:e.v,dC:e.y,dD:e.K,dE:0,dF:0,dG:0,dH:1})},St=_e(function(e,r,n,a,t){var i=a.dk?1:-1,c=T(hn,a.bW,a.bW,a.bW,i);return xe(t,e,c,F0(a),a.dk,r,n)}),Yl=Je(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Jl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(St,e,r,n,a,g),i.N);return{N:b,V:i.V,fx:i.fx};case 3:var w=t.b,x=o(k,S(St,e,r,n,a,w),i.V);return{N:i.N,V:x,fx:i.fx};case 2:var _=t.a,C=o(k,S(St,e,r,n,a,_),i.fx);return{N:i.N,V:i.V,fx:C};default:var M=t.a;return p(Un,T(Yl,e,r,n,a),i,M)}}),V0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ql=V0,Jo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),E0=function(e){var r=e._,n=e.X,a=e.W;return T(Jo,518,r,n,a)},j0=$(function(e,r){return{$:6,a:e,b:r}}),R0=j0,Zl=h([E0({W:1,X:0,_:!1}),T(ql,!1,!1,!1,!1),o(R0,0,1)]),sn=519,Yo=8,Kl=15,un=7681,N0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=lf,H0=$(function(e,r){return{$:0,a:e,b:r}}),X0=H0({c8:1,dh:0,dQ:5}),je=Hf,W0=X0(h([{dY:o(je,-1,-1)},{dY:o(je,1,-1)},{dY:o(je,-1,1)},{dY:o(je,1,1)}])),G0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},I0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},qo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(I0,a,t,i)))}),Zo=function(e){return p(qo,{ci:e.ci,cH:e.cH,cY:e.cY},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Ko=function(e){return S(ae,h([Zo(e),T(ql,!1,!1,!1,!1)]),G0,N0,W0,{})},U0=Ko({a9:un,ci:0,cH:Yo,bm:sn,cY:Kl,bu:un,bv:un}),O0=516,Ki=5386,Le=7680,J0=function(e){return o(Yn,2,e+4)},Ql=function(e){return Ko({a9:Le,ci:Kl,cH:Yo,bm:O0,cY:J0(e),bu:Ki,bv:Ki})},Y0=y(function(e,r,n){return Ue(h([p(nr,e,n,Zl),h([Ql(r),U0])]))}),q0=$(function(e,r){return Ue(o(ol,Y0(e),r))}),Z0=function(e){var r=e._,n=e.X,a=e.W;return T(Jo,513,r,n,a)},K0=Z0({W:1,X:0,_:!0}),Q0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},ep=function(e){var r=e.bU,n=e.bF,a=e.bz,t=e.bw,i=e.bB,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return Q0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},rp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qi=$(function(e,r){var n=e,a=r;return p(rp,32774,n,a)}),np=1,ec=771,ap=770,Qo=ep({bw:0,aI:o(Qi,np,ec),bz:0,bB:o(Qi,ap,ec),bF:0,bU:0}),rn=h([K0,Qo]),tp=function(e){var r=e;return r.dJ},op=function(e){var r=e;return r.dK},eu=function(e){var r=e;return r.dL},ip=function(e){var r=e;return r.dM},cp=function(e){var r=e;return r.dN},ru=function(e){var r=e;return r.dO},_r=$(function(e,r){var n=e,a=r;return a-n}),nu=function(e){return B(o(_r,ip(e),tp(e)),o(_r,cp(e),op(e)),o(_r,ru(e),eu(e)))},qr=function(e){var r=e;return r.cu},rc=function(e){var r=e;return qr(r)},lp=function(e){return e},up=function(e){return rr({cu:lp({fT:e.I,fX:e.J,c$:e.K}),cZ:hr({fT:e.q,fX:e.r,c$:e.s}),c_:hr({fT:e.t,fX:e.u,c$:e.v}),c0:hr({fT:e.w,fX:e.x,c$:e.y})})},Ct=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),au=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Fr=function(e){var r=e;return r.cZ},Vr=function(e){var r=e;return r.c_},Er=function(e){var r=e;return r.c0},tu=$(function(e,r){return{cu:o(au,e,qr(r)),cZ:o(Ct,e,Fr(r)),c_:o(Ct,e,Vr(r)),c0:o(Ct,e,Er(r))}}),Pr=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),Na=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(Ae,n,a)}),An=$(function(e,r){return O(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(An,n,a)}),vp=$(function(e,r){var n=Na(r),a=Na(e);return{dJ:o(le,a.dJ,n.dJ),dK:o(le,a.dK,n.dK),dL:o(le,a.dL,n.dL),dM:o(se,a.dM,n.dM),dN:o(se,a.dN,n.dN),dO:o(se,a.dO,n.dO)}}),Oe=function(e){var r=e;return r},$p=function(e){var r=e;return B(r.fT,r.fX,r.c$)},Bn=$(function(e,r){var n=e,a=r;return a+n}),fp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ha(ie(a)),c=ha(ie(n)),l=ha(ie(t)),u=$p(r),v=u.a,s=u.b,d=u.c;return{dJ:o(Bn,c,v),dK:o(Bn,i,s),dL:o(Bn,l,d),dM:o(_r,c,v),dN:o(_r,i,s),dO:o(_r,l,d)}}),nc=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=Oe(Er(e)),m=J(l*d.fT)+J(c*d.fX)+J(i*d.c$),f=Oe(Vr(e)),g=J(l*f.fT)+J(c*f.fX)+J(i*f.c$),b=Oe(Fr(e)),w=J(l*b.fT)+J(c*b.fX)+J(i*b.c$),x=o(fp,B(w,g,m),o(au,e,p(Pr,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(vp,_,x))}),to=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=T(nc,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=T(nc,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=T(to,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(tu,up(v),e),m=r*v.bW,f=e,g=r,b=T(to,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Zr=Gf,Kr=If,Qr=Uf,ou=function(e){return{$:4,a:e}},sp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Zn=function(e){return ou(o(sp,e,L))},dp={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,bW:1},mp=function(e){var r=e;return r},ac=Ko({a9:un,ci:0,cH:Yo,bm:sn,cY:255,bu:un,bv:un}),pp=function(e){var r=e,n=o(Ae,J(r.fT),o(Ae,J(r.fX),J(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=br(i*i+t*t+a*a);return c*n}else return or},Ve={bz:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fT:0,fX:0,c$:0},We=$(function(e,r){var n=e,a=r;return ir({ds:n.fT,dt:n.bU,du:a.fT,dv:a.bU,dw:n.fX,dx:n.bF,dy:a.fX,dz:a.bF,dA:n.c$,dB:n.bz,dC:a.c$,dD:a.bz,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),Tn=z({be:o(We,Ve,Ve),bK:o(We,Ve,Ve),bL:o(We,Ve,Ve),bM:o(We,Ve,Ve)},T(hn,0,0,0,0)),ee=$(function(e,r){var n=r;return e*n}),tc=function(e){var r=e;return-r},iu=514,cu=function(e){var r=e._,n=e.X,a=e.W;return T(Jo,515,r,n,a)},lu=240,bp=h([cu({W:1,X:0,_:!0}),Zo({a9:Le,ci:lu,cH:0,bm:iu,cY:0,bu:Le,bv:Le}),Qo]),gp=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=ie(a),l=c,u=ie(t),v=u,s=n.cF;if(s.$){var m=s.a;return Yt(v)?ir({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):ir({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return Yt(v)?ir({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):ir({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),la=$(function(e,r){return(1&e>>r)===1?0:1}),hp=function(e){return h([cu({W:1,X:0,_:!0}),Zo({a9:Le,ci:lu,cH:e,bm:iu,cY:0,bu:Le,bv:Le}),Qo])},_p=y(function(e,r,n){return Ue(o(Q,function(a){var t=a<<4,i=T(hn,o(la,a,0),o(la,a,1),o(la,a,2),o(la,a,3));return p(nr,e,z(r,i),hp(t))},o(wr,1,o(Yn,2,n)-1)))}),kr=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},vn=function(e){var r=e;return r},wp=ns,oc=function(e){var r=e;return kr(Er(r))},uu=hr({fT:1,fX:0,c$:0}),ei=uu,ri=nt,ni=hr({fT:0,fX:0,c$:1}),vu=ni,yp={cu:ke,cZ:ei,c_:ri,c0:vu},Kn=function(e){var r=e;return r},xp=function(e){var r=Kn(qr(e)),n=Oe(Er(e)),a=Oe(Vr(e)),t=Oe(Fr(e));return ir({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},Sp=$(function(e,r){var n=r;return xp(o(tu,n,e))}),Cp=function(e){return o(Sp,yp,e)},Tp=function(e){var r=e;return r.cX},Lp=function(e){var r=e;return Fr(r)},zp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),Pp=function(e){var r=e;return Vr(r)},kp=function(e){var r=Tp(e.es),n=rr({cu:rc(r),cZ:Lp(r),c_:Pp(r),c0:kr(oc(r))}),a=Zn(e.aQ),t=a,i=T(to,n,1,Y,h([t]));if(i.$===1)return L;var c=i.a,l=Cp(r),u=o(ee,.99,o(le,ie(e.ex),tc(eu(c)))),v=nu(c),s=v.a,d=v.b,m=v.c,f=pp(p(zp,s,d,m)),g=o(ee,1.01,o(Bn,f,tc(ru(c)))),b=o(gp,e.es,{en:e.en,eO:g,fe:u}),w=wp(b).dH,x=w?Oe(kr(oc(r))):vn(rc(r)),_=function(){var oe=e.fJ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),C=_.a,M=_.b,H=e.eM,R=H,j=o(at,R,e.fQ),N=j,X=ir({ds:0,dt:x.fT,du:Zr(N),dv:e.d8,dw:0,dx:x.fX,dy:Kr(N),dz:mp(f),dA:0,dB:x.c$,dC:Qr(N),dD:C,dE:0,dF:w,dG:0,dH:M}),F=xe(Yl,X,l,b,dp,t,{N:L,V:L,fx:L}),q=e.e8;switch(q.$){case 0:var K=q.a;return Ue(h([p(nr,F.N,z(K,xt),rn),p(nr,F.V,Tn,rn)]));case 1:var K=q.a;return Ue(h([p(nr,F.N,Tn,rn),h([ac]),p(nr,F.fx,K.be,Zl),h([Ql(0)]),p(nr,F.N,z(K,xt),bp),p(nr,F.V,Tn,rn)]));default:var ce=q.a,$e=q.b;return Ue(h([p(nr,F.N,z($e,xt),rn),h([ac]),o(q0,F.fx,ce),p(_p,F.N,$e,Or(ce)),p(nr,F.V,Tn,rn)]))}},Mp=function(e){return o(In,"width",Re(e))},Dp=$(function(e,r){var n=h([y0(1),L0(0),m0(!0),T(h0,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(k,b0,n),"1",1);default:var M=C.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Zi(v),d=o(he,"height",Re(s)+"px"),m=Zi(u),f=m/s,g=o(Oo,function(C){return kp({en:f,es:e.es,ex:e.ex,aQ:C.aQ,eM:C.eM,e8:C.e8,d8:c,fJ:C.fJ,fQ:C.fQ})},r),b=o(he,"width",Re(m)+"px"),w=e.aJ,x=w,_=z0(x);return p(C0,"div",h([o(he,"padding","0px"),b,d]),h([z(i,p(M0,t,h([Mp(er(m*c)),x0(er(s*c)),b,d,o(he,"display","block"),o(he,"background-color",_)]),g))]))}),Ap=function(e){return{$:2,a:e}},Bp=function(e){return Ap(e)},Fp=function(e){return o(Dp,{el:Bp(e.b5),aJ:e.aJ,es:e.es,ex:e.ex,aL:e.aL},h([{aQ:e.aQ,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},ic=function(e){return e},ur=function(e){return e},Vp=function(e){var r=e;return r},tt=function(e){var r=e;return Vp(r.eo)},$u=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Ep=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),fu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),su=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),jp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Rp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Np=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ai=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return T(Np,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return T($u,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return T(Ep,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return T(fu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return T(Rp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return T(su,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return T(jp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ti={$:0},Hp=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Na(c(u)),d=o(se,s.dM,e),m=o(le,s.dJ,r),f=o(se,s.dN,n),g=o(le,s.dK,a),b=o(se,s.dO,t),w=o(le,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),Xp=y(function(e,r,n){var a=Na(e(r));return Ua(Hp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),Tt=$(function(e,r){var n=e,a=r;return O(a,n)<1}),du=function(e){return o(Tt,e.dJ,e.dM)&&o(Tt,e.dK,e.dN)&&o(Tt,e.dL,e.dO)?e:{dJ:o(le,e.dM,e.dJ),dK:o(le,e.dN,e.dK),dL:o(le,e.dO,e.dL),dM:o(se,e.dM,e.dJ),dN:o(se,e.dN,e.dK),dO:o(se,e.dO,e.dL)}},Xn=function(e){var r=e;return r},Wr=function(e){var r=e;return r.fT},Gr=function(e){var r=e;return r.fX},Ir=function(e){var r=e;return r.c$},mu=function(e){var r=Xn(e),n=r.a,a=r.b,t=r.c,i=Wr(n),c=Gr(n),l=Ir(n),u=Wr(a),v=Gr(a),s=Ir(a),d=Wr(t),m=Gr(t),f=Ir(t);return du({dJ:o(le,i,o(le,u,d)),dK:o(le,c,o(le,v,m)),dL:o(le,l,o(le,s,f)),dM:o(se,i,o(se,u,d)),dN:o(se,c,o(se,v,m)),dO:o(se,l,o(se,s,f))})},pu=Of,Me=function(e){return pu(Kn(e))},bu=function(e){var r=e;return r},ot=function(e){return pu(bu(e))},gu=function(e){return e},Wp=$(function(e,r){var n=e,a=r,t=o(Ae,J(a.fT),o(Ae,J(a.fX),J(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=br(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return Ul}),Gp=Wp(gu(1)),hu=y(function(e,r,n){var a=o(Ra,r,n),t=o(Ra,e,r);return Gp(o(Go,a,t))}),Ip=function(e){var r=Xn(e),n=r.a,a=r.b,t=r.c,i=ot(p(hu,n,a,t));return B({o:i,dY:Me(n)},{o:i,dY:Me(a)},{o:i,dY:Me(t)})},Up=$(function(e,r){return{$:2,a:e,b:r}}),_u=Up({c8:3,dh:0,dQ:4}),Op=function(e){if(e.b){var r=e.a,n=e.b,a=_u(o(Q,Ip,e)),t=p(Xp,mu,r,n);return T($u,t,e,a,0)}else return ti},Fe=y(function(e,r,n){return B(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),wu=function(){var e=ur(1),r=ur(1),n=ur(1),a=o(ee,-.5,e),t=o(ee,-.5,r),i=o(ee,-.5,n),c=p(me,i,t,a),l=o(ee,.5,e),u=p(me,i,t,l),v=o(ee,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ee,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return ai(Op(h([p(Fe,c,g,f),p(Fe,c,s,g),p(Fe,u,b,w),p(Fe,u,w,d),p(Fe,f,g,w),p(Fe,f,w,b),p(Fe,c,d,s),p(Fe,c,u,d),p(Fe,c,f,b),p(Fe,c,b,u),p(Fe,s,w,g),p(Fe,s,d,w)])))}(),ua={$:0},Jp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Yp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ot(p(hu,u,l,c)),s={o:v,dY:Me(u)},d={o:v,dY:Me(l)},m={o:v,dY:Me(c)};return o(k,s,o(k,d,o(k,m,n)))}),oi=function(e){var r=e;return r.E},qp=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return ne(p(e,t,i,c))}),oo=4294967295>>>32-Rn,io=bv,Zp=y(function(e,r,n){e:for(;;){var a=oo&r>>>e,t=o(io,a,n);if(t.$){var v=t.a;return o(io,oo&r,v)}else{var i=t.a,c=e-Rn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Kp=function(e){return e>>>5<<5},Qp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?Y:O(e,Kp(n))>-1?ne(o(io,oo&e,i)):ne(p(Zp,a,e,t))}),ii=function(e){var r=e;return r.ai},Lt=$(function(e,r){return o(Qp,e,ii(r))}),e3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return T(qp,y(function(c,l,u){return B(c,l,u)}),o(Lt,a,e),o(Lt,t,e),o(Lt,i,e))};return o(et,r,oi(e))},r3=y(function(e,r,n){e:for(;;){var a=o(Ao,He,e),t=a.a,i=a.b;if(O(Ot(t),He)<0)return o(fl,!0,{z:r,l:n,p:t});var c=i,l=o(k,vl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),ci=function(e){return e.b?p(r3,e,L,0):ll},n3=y(function(e,r,n){return e(r(n))}),a3=$(function(e,r){return!o(Sl,o(n3,Rs,e),r)}),t3=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),o3=function(e){var r=e.a;return r},yu=$(function(e,r){var n=o3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(a3,a,r)?{E:r,ai:e}:{E:o(t3,a,r),ai:e}}),i3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Qn=i3({c8:1,dh:3,dQ:4}),_a=$(function(e,r){var n=vn(r),a=vn(e);return z(B(a.fT,a.fX,a.c$),B(n.fT,n.fX,n.c$))}),cc=p(qn,0,0,0),zt=Je(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Qa,o(_a,e,r),t);if(v.$){var d={o:cc,dY:Me(r)},m={o:cc,dY:Me(e)},f=u+1,g=u;return B(o(k,B(n,g,f),o(k,B(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=v.a;return B(o(k,B(n,s,a),c),l,u)}}),c3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,M=xe(zt,s,m,f,b,r,xe(zt,d,s,g,f,r,xe(zt,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=M;continue e}else{var H=t,R=H.a,j=H.b;return z(R,Ne(j))}}),l3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(kn,o(_a,m,s),f,p(kn,o(_a,s,d),g,p(kn,o(_a,d,m),b,t))),x=o(k,B(b,g,f),a),_=e,C=v,M=n+3,H=x,R=w;e=_,r=C,n=M,a=H,t=R;continue e}else return B(a,t,n)}),Rr=y(function(e,r,n){var a=e3(n),t=p(dr,Yp(r),L,a),i=S(l3,r,a,0,L,Gl),c=i.a,l=i.b,u=i.c,v=S(c3,r,l,a,0,B(c,L,u)),s=v.a,d=v.b,m=Xl(d)?t:ue(t,d);return p(Jp,e,o(yu,ci(m),s),o(Qn,m,s))}),co=function(e){return{E:o(Q,function(r){return B(3*r,3*r+1,3*r+2)},o(wr,0,Or(e)-1)),ai:ci(Ue(o(Q,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},xu=function(e){switch(e.$){case 0:return ua;case 1:var a=e.a,r=e.b,n=o(Q,Xn,r);return p(Rr,a,Xr,co(n));case 2:var a=e.a,r=e.b,n=o(Q,Xn,r);return p(Rr,a,Xr,co(n));case 3:var a=e.a,t=e.b;return p(Rr,a,Xr,t);case 4:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 8:return ua;case 9:return ua;default:return ua}},lc=xu(wu),it=function(e){var r=e;return r.aL},Su={$:0},P=Su,be=$(function(e,r){return{$:1,a:e,b:r}}),u3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},v3=1029,$3=function(e){return{$:5,a:e}},Cu=function(e){var r=e;return $3(r)},f3=Cu(v3),s3=1028,d3=Cu(s3),De=y(function(e,r,n){return r===1?e?o(k,f3,n):o(k,d3,n):n}),Tu={src:`
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
    `,attributes:{position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Pt=E(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(De,l,a,d),Tu,u3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),li={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ax"}},Lu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},mr=E(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(De,l,a,d),Lu,li,n,{ax:e,b:c,c:i,d:v,e:t,f:u})}))}),zu=$(function(e,r){return{$:3,a:e,b:r}}),m3={src:`
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
    `,attributes:{},uniforms:{constantColor:"ax",pointRadius:"bS",sceneProperties:"e"}},Pu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},p3=E(function(e,r,n,a){return o(zu,n,re(function(t,i,c,l,u,v,s,d){return S(ae,d,Pu,m3,a,{ax:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ui={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},ea=function(e){var r=e;return r},ct=Jf,pr=_e(function(e,r,n,a,t){return o(be,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(De,u,t,m),Lu,ui,a,{aO:o(ct,ea(r),e),b:l,c,d:s,e:i,f:v})}))}),b3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bS",sceneProperties:"e"}},g3=_e(function(e,r,n,a,t){return o(zu,a,re(function(i,c,l,u,v,s,d,m){return S(ae,m,Pu,b3,t,{aO:o(ct,ea(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),ku={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},Mu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},va=E(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(De,l,a,d),Mu,ku,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),Du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Au={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},h3=Je(function(e,r,n,a,t,i){return o(be,a,re(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(De,v,i,f),Au,Du,t,{Q:b,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aX",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},_3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,re(function(d,m,f,g,b,w,x,_){var C=x.a,M=x.b;return S(ae,p(De,g,s,_),Au,Bu,v,{b0:e,b2:r,b3:i,b4:a,Q:M,be:C.be,bK:C.bK,bL:C.bL,bM:C.bM,co:t,b:f,c:m,aX:c,d:w,cL:n,e:d,a0:l,f:b})}))}}}}}}}}}}},Fu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},$a=Je(function(e,r,n,a,t,i){return o(be,a,re(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(De,v,i,f),Mu,Fu,t,{b$:e,Q:b,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),w3=function(e){return{$:0,a:e}},uc=$(function(e,r){return{$:1,a:e,b:r}}),Fn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),y3=function(e){return T(hn,Zr(e),Kr(e),Qr(e),1)},vi=T(hn,0,0,0,0),wa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,vi)}else{var n=r.a;return z(e,y3(n))}}),Vu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(uc,z(t,vi),o(Fn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(uc,o(wa,t,e),o(Fn,t,r))}else{var a=n.a.a;return n.b.a,w3(a)}}),x3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),fa=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),S3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),C3=function(e){return o(je,e,1)},lo=o(je,0,0),nn=$(function(e,r){if(r.$){var a=r.a.C;return z(a,lo)}else{var n=r.a;return z(e,C3(n))}}),Eu=E(function(e,r,n,a){var t=T(S3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return T(fa,z(u,vi),o(nn,u,r),o(nn,u,n),o(Fn,u,a))}else if(t.b.$){var u=t.b.a.C;return T(fa,o(wa,u,e),z(u,lo),o(nn,u,n),o(Fn,u,a))}else if(t.c.$){var u=t.c.a.C;return T(fa,o(wa,u,e),o(nn,u,r),z(u,lo),o(Fn,u,a))}else if(t.d.$){var u=t.d.a.C;return T(fa,o(wa,u,e),o(nn,u,r),o(nn,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(x3,i,c,l)}}),T3={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},kt=_e(function(e,r,n,a,t){return o(be,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(De,u,t,m),Tu,T3,a,{bZ:ea(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),ju={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},L3=E(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(De,l,a,d),ju,Du,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),z3=mo(function(e,r,n,a,t,i,c,l,u){return o(be,c,re(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(De,m,u,w),ju,Bu,l,{b0:e,b2:r,b3:i,b4:a,Q:_,be:x.be,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:d,c:s,aX:e,d:g,cL:n,e:v,a0:0,f})}))}),Wn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),P3=function(e){var r=e;return p(Wn,r.dM,r.dJ,.5)},k3=function(e){var r=e;return p(Wn,r.dN,r.dK,.5)},M3=function(e){var r=e;return p(Wn,r.dO,r.dL,.5)},D3=function(e){return p(me,P3(e),k3(e),M3(e))},W=function(e){var r=nu(e),n=r.a,a=r.b,t=r.c;return{ev:Kn(D3(e)),eR:n/2,eS:a/2,eT:t/2}},$i=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return T(Pt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return T(Pt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return T(Pt,l,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return T(mr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return T(mr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return T(mr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return T(p3,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(kt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(kt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(kt,l,v,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(pr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(pr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(pr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(g3,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Vu,s,R);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return T(L3,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return xe(h3,b,x,_,W(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return T(va,m,W(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return T(va,m,W(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return T(va,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return T(va,m,W(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var C=e.b,M=e.c,H=e.d,R=e.e,j=T(Eu,C,M,H,R);if(j.$){var q=j.a,K=q.a,ce=q.b,$e=j.b,oe=$e.a,de=$e.b,Be=j.c,Pe=Be.a,Tr=Be.b,Lr=j.d,x=Lr.a,_=Lr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return fv(z3,K,ce,oe,de,Pe,Tr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _3(K)(ce)(oe)(de)(Pe)(Tr)(x)(_)(W(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=j.a,X=j.b,F=j.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return xe($a,N,X,F,W(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return xe($a,N,X,F,W(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return xe($a,N,X,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return xe($a,N,X,F,W(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),Mt=function(e){var r=e;return r.fT},Dt=function(e){var r=e;return r.fX},At=function(e){var r=e;return r.c$},A3=function(e){var r=e,n=At(r.c0),a=Dt(r.c0),t=Mt(r.c0),i=At(r.c_),c=Dt(r.c_),l=Mt(r.c_),u=At(r.cZ),v=Dt(r.cZ),s=Mt(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},B3=function(e){var r=Kn(qr(e)),n=Oe(Er(e)),a=Oe(Vr(e)),t=Oe(Fr(e));return{dk:A3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,I:r.fT,J:r.fX,K:r.c$,bW:1}},an=$(function(e,r){return{$:5,a:e,b:r}}),Ru=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Jl,a,e);return o(an,i,t);case 1:return o(an,e,n);case 3:return o(an,e,n);case 2:return o(an,e,n);default:return o(an,e,n)}}),Nu=$(function(e,r){return o(Ru,B3(e),r)}),lt=function(e){return{$:2,a:e}},F3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),V3=Zf,E3=qf,vc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=E3(a),g=f.fT,b=f.fX,w=f.c$,x=f.ei,_=V3({ei:x,fT:g*s,fX:b*d,c$:w*m});return Ua(r,n,_,t,i,c,l,u,v)}}}}}}}}}},uo=$(function(e,r){switch(r.$){case 0:return Su;case 5:var n=r.a,a=r.b;return o(an,n,o(uo,e,a));case 1:var t=r.a,i=r.b;return o(be,o(F3,e,t),o(vc,e,i));case 3:return r;case 2:var i=r.a;return lt(o(vc,e,i));default:var c=r.a;return ou(o(Q,uo(e),c))}}),fi=$(function(e,r){var n=r;return o(uo,e,n)}),si={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Hu=7683,Xu=7682,j3=p(qo,{ci:0,cH:0,cY:15},{a9:Le,bm:sn,bu:Le,bv:Hu},{a9:Le,bm:sn,bu:Le,bv:Xu}),R3=p(qo,{ci:0,cH:0,cY:15},{a9:Le,bm:sn,bu:Le,bv:Xu},{a9:Le,bm:sn,bu:Le,bv:Hu}),di=$(function(e,r){return e?o(k,R3,r):o(k,j3,r)}),N3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},H3=function(e){if(e.$){var r=e.c;return ne(re(function(n,a,t,i,c,l,u,v){return S(ae,o(di,i,v),N3,si,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return Y},Ha=function(e){var r=H3(e);if(r.$)return P;var n=r.a;return lt(n)},X3=E(function(e,r,n,a){var t=o($i,n,wu),i=function(){var s=z(e,r);return s.a?s.b?Zn(h([t,Ha(lc)])):t:s.b?Ha(lc):P}(),c=it(a),l=c.a,u=c.b,v=c.c;return o(Nu,tt(a),o(fi,B(l,u,v),i))}),W3=$(function(e,r){return T(X3,!0,!0,e,r)}),vo=function(e){return{$:0,a:e}},Wu=$(function(e,r){return{$:0,a:e,b:r}}),G3=function(e){var r=Ho(e),n=r.cG,a=r.b7,t=r.b1;return p(qn,n,a,t)},I3=function(e){return o(Wu,0,vo(G3(e)))},mi=function(e){var r=e;return r.k},Jr=Tv,Vn=function(e){var r=e;return Jr(r)},U3=$(function(e,r){var n=r;return n/e}),dn=Lv,$c=function(e){var r=e;return{fT:Jr(r),fX:dn(r)}},O3=$(function(e,r){var n=e.dY,a=e.o;return o(k,{o:ot(a),dY:Me(n)},r)}),J3=Ia(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Qr(l.dY),s=Kr(l.dY),d=Zr(l.dY),m=o(An,e,d),f=o(Ae,r,d),g=o(An,n,s),b=o(Ae,a,s),w=o(An,t,v),x=o(Ae,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return du({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Gu=$(function(e,r){var n=Qr(e.dY),a=Kr(e.dY),t=Zr(e.dY);return po(J3,t,t,a,a,n,n,r)}),Y3=function(e){var r=p(el,O3,L,ii(e));if(r.b){var n=r.a,a=r.b,t=o(Qn,r,oi(e)),i=o(Gu,n,a);return T(fu,i,e,t,0)}else return ti},Iu=hr({fT:0,fX:0,c$:-1}),fc=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),Xa=function(e){var r=e;return dn(r)},$o=function(e){return yr(2*ye*e)},q3=Xr,sc=q3({cu:ke,cZ:ei,c_:ri}),Uu=function(){var e=72,r=o(U3,e,$o(1)),n=ur(1),a=cn(ni),t=cn(Iu),i=ur(1),c=o(ee,.5,i),l=p(me,or,or,c),u=o(ee,-.5,i),v=p(me,or,or,u),s=function(f){var g=o(ee,f,r),b=cn(o(fc,sc,$c(g))),w=o(ee,Vn(g),n),x=o(ee,Xa(g),n),_=p(me,w,x,c),C=p(me,w,x,u),M=o(Fa,e,f+1),H=o(ee,M,r),R=cn(o(fc,sc,$c(H))),j=o(ee,Vn(H),n),N=o(ee,Xa(H),n),X=p(me,j,N,u),F=p(me,j,N,c);return h([B({o:t,dY:v},{o:t,dY:X},{o:t,dY:C}),B({o:b,dY:C},{o:R,dY:X},{o:R,dY:F}),B({o:b,dY:C},{o:R,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(Q,s,o(wr,0,e-1)),m=co(Ue(d));return ai(Y3(m))}(),dc=xu(Uu),Ou=function(e){var r=e;return r.eE},Ju=function(e){var r=e;return r.cu},Z3=function(e){var r=Ou(e),n=Io(r),a=n.a,t=n.b;return rr({cu:Ju(e),cZ:a,c_:t,c0:r})},Yu=function(e){var r=e;return r.e6},qu=function(e){var r=e;return r.fp},K3=E(function(e,r,n,a){var t=Z3(mi(a)),i=o($i,n,Uu),c=function(){var d=z(e,r);return d.a?d.b?Zn(h([i,Ha(dc)])):i:d.b?Ha(dc):P}(),l=qu(a),u=l,v=Yu(a),s=v;return o(Nu,t,o(fi,B(u,u,s),c))}),Q3=$(function(e,r){return T(K3,!0,!0,e,r)}),mc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},pc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Ln=function(e){var r=Xn(e),n=r.a,a=r.b,t=r.c,i=vn(n),c=vn(a),l=vn(t);return ir({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},sa=_u(h([B({cS:0},{cS:1},{cS:2})])),eb=$(function(e,r){var n=mu(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(be,a,re(function(_,C,M,H,R,j,N,X){return S(ae,p(De,H,0,X),mc,li,sa,{ax:t,b:M,c:C,d:j,e:_,br:Ln(r),f:R})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(be,a,re(function(_,C,M,H,R,j,N,X){return S(ae,p(De,H,0,X),mc,ui,sa,{aO:o(ct,ea(c),i),b:M,c:C,d:j,e:_,br:Ln(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Vu,l,f);if(u.$)return P;var v=u.a;return o(be,a,re(function(_,C,M,H,R,j,N,X){var F=N.a,q=N.b;return S(ae,p(De,H,0,X),pc,ku,sa,{Q:q,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:M,c:C,d:j,e:_,br:Ln(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=T(Eu,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(be,a,re(function(_,C,M,H,R,j,N,X){var F=N.a,q=N.b;return S(ae,p(De,H,0,X),pc,Fu,sa,{b$:b,Q:q,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cn:x,b:M,c:C,d:j,cK:w,e:_,br:Ln(r),f:R})}))}}),rb=function(){var e=h([{a$:o(je,0,1)},{a$:o(je,1,1)},{a$:o(je,2,1)},{a$:o(je,0,-1)},{a$:o(je,1,-1)},{a$:o(je,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Qn,e,r)}(),nb={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"br",viewMatrix:"f"}},bc=function(e){return lt(re(function(r,n,a,t,i,c,l,u){return S(ae,o(di,t,u),nb,si,rb,{b:a,c:n,d:c,e:r,bX:l,br:Ln(e),f:i})}))},ab=E(function(e,r,n,a){var t=o(eb,n,a),i=z(e,r);return i.a?i.b?Zn(h([t,bc(a)])):t:i.b?bc(a):P}),tb=$(function(e,r){return T(ab,!0,!0,e,r)}),pi=function(e){var r=e;return r},ob=$(function(e,r){var n=Ir(r),a=Ir(e),t=Gr(r),i=Gr(e),c=Wr(r),l=Wr(e);return{dJ:o(le,l,c),dK:o(le,i,t),dL:o(le,a,n),dM:o(se,l,c),dN:o(se,i,t),dO:o(se,a,n)}}),ib=function(e){var r=pi(e),n=r.a,a=r.b;return o(ob,n,a)},gc={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cb=$(function(e,r){return{$:1,a:e,b:r}}),lb=cb({c8:2,dh:0,dQ:1}),hc=lb(h([z({dr:0},{dr:1})])),ub=$(function(e,r){var n=ib(r),a=W(n),t=pi(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(be,a,re(function(v,s,d,m,f,g,b,w){return S(ae,w,gc,li,hc,{ax:l,dp:Me(c),dq:Me(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(be,a,re(function(s,d,m,f,g,b,w,x){return S(ae,x,gc,ui,hc,{aO:o(ct,ea(u),l),dp:Me(c),dq:Me(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),vb=$(function(e,r){return o(ub,e,r)}),ut=function(e){var r=e;return r.ev},vt=function(e){var r=e;return r.fp},_c=$(function(e,r){var n=e,a=r;return n/a}),$b=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(Mr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),wc=$(function(e,r){return e<1?L:S($b,0,e,e,r,L)}),fb=$(function(e,r){var n=e.dY,a=e.o,t=e.M,i=t,c=i.a,l=i.b;return o(k,{o:ot(a),dY:Me(n),M:o(je,c,l)},r)}),sb=function(e){var r=p(el,fb,L,ii(e));if(r.b){var n=r.a,a=r.b,t=o(Qn,r,oi(e)),i=o(Gu,n,a);return T(su,i,e,t,0)}else return ti},bi=$(function(e,r){var n=e,a=r,t=Jr(a);return{fT:t*Jr(n),fX:t*dn(n),c$:dn(a)}}),db=function(){var e=ur(1),r=72,n=o(wr,0,r-1),a=o(wc,r,o(Wn,or,$o(1))),t=Mo(r/2),i=o(wr,0,t-1),c=o(wc,t,o(Wn,Cn(90),Cn(-90))),l=ci(Ue(o(Q,function(s){return o(Q,function(d){return{o:cn(o(bi,s,d)),dY:p(me,o(ee,Vn(d)*Vn(s),e),o(ee,Vn(d)*Xa(s),e),o(ee,Xa(d),e)),M:z(o(_c,s,$o(1)),o(_c,o(Bn,Cn(90),d),Cn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ue(o(Q,function(s){return Ue(o(Q,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return ai(sb(o(yu,l,v)))}(),Wa=72,da=2*Wa,mb=$(function(e,r){e:for(;;){var n=da+1,a=o(Fa,da,2*e+3),t=o(Fa,da,2*e+2),i=2*e+1,c=2*e,l=da,u=o(k,B(l,c,t),o(k,B(c,a,t),o(k,B(c,i,a),o(k,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),pb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),bb=$(function(e,r){e:for(;;){var n=p(pb,0,2*ye,e/Wa),a={bx:n,bP:0,bV:1},t={bx:n,bP:1,bV:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),gb=function(){var e=o(bb,Wa-1,h([{bx:0,bP:0,bV:0},{bx:0,bP:1,bV:0}])),r=o(mb,Wa-1,L);return o(Qn,e,r)}(),hb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},yc=function(e){return lt(re(function(r,n,a,t,i,c,l,u){return S(ae,o(di,!0,u),hb,si,gb,{ax:p(qn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},_b=function(e){var r=bu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:r.fT,J:r.fX,K:r.c$,bW:1}},wb=$(function(e,r){return o(Ru,_b(e),r)}),yb=E(function(e,r,n,a){var t=o($i,n,db),i=function(){var u=z(e,r);return u.a?u.b?Zn(h([t,yc()])):t:u.b?yc():P}(),c=vt(a),l=c;return o(wb,o(Ra,ke,ut(a)),o(fi,B(l,l,l),i))}),xb=$(function(e,r){return T(yb,!0,!0,e,r)}),Sb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Zu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Cb=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Tb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Wu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Sb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Zu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Cb,n,a,t,i,c)}},Lb=Tb,Ku=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(W3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(tb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(xb,Lb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Q3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(vb,I3(c),l)]);default:var u=e.a;return o(Oo,Ku,u)}},zb=function(e){return o(Oo,Ku,e)},Pb=$(function(e,r){return Fp({el:e.el,aJ:s0(e.ep),es:e.es,ex:ur(e.ex),b5:e.b5,aL:z(ic(er(e.cM.fR)),ic(er(e.cM.eV))),aQ:zb(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),Qu=function(e){return e},kb=$(function(e,r){var n=e,a=Oe(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(at,r.bH,r.aK),u=l;return{bz:Qr(u),eu:n,bF:Kr(u),cD:0,bU:Zr(u),cT:1,fT:-t,fX:-i,c$:-c}}),Mb=function(e){return o(kb,Qu(!0),{aK:e.aK,eE:o(bi,yr(e.by),yr(e.bD)),bH:e.bH})},Db=function(e){return e},Ab=function(e){return Db(1.2*o(Yn,2,e))},Bt=Uo({fT:.37208,fX:.37529}),Bb=$(function(e,r){return{$:2,a:e,b:r}}),ev=function(e){return{$:0,a:e}},ma=function(e){var r=e;return r},Fb=function(e){var r=e;return r.eu},Vb=ev(Tn.a),Eb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(k,a,i),c):z(i,o(k,a,c))});return p(dr,n,z(L,L),r)}),jb=function(e){var r=e;return ir({ds:r.fT,dt:r.bU,du:0,dv:0,dw:r.fX,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.bz,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Rb=re(function(e,r,n,a,t,i,c,l){var u=o(Eb,Fb,h([ma(e),ma(r),ma(n),ma(a)])),v=u.a,s=u.b;if(v.b){var d=ue(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Bb,o(Q,jb,v),{be:o(We,m,g),bK:o(We,w,_),bL:o(We,t,i),bM:o(We,c,l)})}else return Vb}else return ev({be:o(We,e,r),bK:o(We,n,a),bL:o(We,t,i),bM:o(We,c,l)})}),Nb=E(function(e,r,n,a){return Ua(Rb,e,r,n,a,Ve,Ve,Ve,Ve)}),Hb=$(function(e,r){return o(Te,function(n){if(n.$)return 0;var a=n.b;return a},o(Qa,e,r.aw))}),Xb=$(function(e,r){return o(fr,0,rt(o(et,Hb(e),r)))}),Wb=$(function(e,r){return o(Xb,e,r.ey)}),zn=Wb,Gb={$:5},Ib=Gb,Ub=Uo({fT:.44757,fX:.40745}),Ob=function(e){return e},rv=T(qe,114/255,159/255,207/255,1),xc=function(e){return e},Ft=function(e){return e},Jb={$:1},Yb=Jb,qb=$(function(e,r){var n=e,a=Kn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(at,r.bH,r.aK),u=l;return{bz:Qr(u),eu:n,bF:Kr(u),cD:0,bU:Zr(u),cT:2,fT:t,fX:i,c$:c}}),Sc=function(e){return o(qb,Qu(!0),{aK:e.aK,bH:e.bH,dY:ba(e.dY)})},nv=T(qe,52/255,101/255,164/255,1),ra=$(function(e,r){return{$:0,a:e,b:r}}),Vt=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),Et=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Zb=hr({fT:-1,fX:0,c$:0}),Kb=hr({fT:0,fX:-1,c$:0}),Qb=Je(function(e,r,n,a,t,i){var c=o(Vt,n,i)?ni:Iu,l=o(Vt,r,t)?nt:Kb,u=o(Vt,e,a)?uu:Zb,v=B(ie(o(_r,e,a)),ie(o(_r,r,t)),ie(o(_r,n,i))),s=p(me,o(Et,e,a),o(Et,r,t),o(Et,n,i)),d=rr({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aL:v}}),av=$(function(e,r){return xe(Qb,Wr(e),Gr(e),Ir(e),Wr(r),Gr(r),Ir(r))}),$n=$(function(e,r){var n=r/2;return o(ra,e,o(av,p(Pr,-n,-n,-n),p(Pr,n,n,n)))}),$t=function(e){return{$:5,a:e}},Xe=function(e){return $t(e)},tv=T(qe,138/255,226/255,52/255,1),eg=T(qe,173/255,127/255,168/255,1),jt=function(e){return p(Ol,0,1,e<=.04045?e/12.92:o(Yn,(e+.055)/1.055,2.4))},rg=function(e){var r=Ho(e),n=r.cG,a=r.b7,t=r.b1;return p(qn,jt(n),jt(a),jt(t))},ze=function(e){return p(Zu,0,vo(rg(e)),vo(0))},ft=$(function(e,r){return{$:2,a:e,b:r}}),gi=$(function(e,r){return{$:4,a:e,b:r}}),st=$(function(e,r){return{$:3,a:e,b:r}}),dt=$(function(e,r){return{$:1,a:e,b:r}}),ng=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),na=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),ag=$(function(e,r){return rr({cu:o(na,e,qr(r)),cZ:Fr(r),c_:Vr(r),c0:Er(r)})}),tg=$(function(e,r){return{eo:o(ag,e,tt(r)),aL:it(r)}}),en=$(function(e,r){return{eE:r,cu:e}}),og=$(function(e,r){var n=r;return o(en,o(na,e,n.cu),n.eE)}),ig=$(function(e,r){var n=r;return{k:o(og,e,n.k),e6:n.e6,fp:n.fp}}),cg=function(e){return e},hi=$(function(e,r){var n=pi(r),a=n.a,t=n.b;return cg(z(e(a),e(t)))}),lg=$(function(e,r){return o(hi,na(e),r)}),mt=$(function(e,r){return{ev:r,fp:ie(e)}}),ug=$(function(e,r){return o(mt,vt(r),o(na,e,ut(r)))}),_i=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),vg=$(function(e,r){return o(_i,na(e),r)}),pt=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(ng,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ra,s,o(tg,i,c));case 1:var s=r.a,l=r.b;return o(dt,s,o(vg,i,l));case 3:var s=r.a,u=r.b;return o(st,s,o(ug,i,u));case 2:var s=r.a,v=r.b;return o(ft,s,o(ig,i,v));case 4:var s=r.a,d=r.b;return o(gi,s,o(lg,i,d));default:var m=r.a;return $t(o(Q,pt(B(n,a,t)),m))}}),xr=function(e){return pt(B(e,0,0))},Ce=function(e){return pt(B(0,e,0))},ya=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Jr(c),u=dn(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c$*u,M=l*C,H=2*(w-M),R=2*(w+M),j=d*C,N=2*(j+b),X=2*(j-b),F=g*C,q=2*(F-m),K=2*(F+m),ce=C*C,$e=1-2*(x+ce),oe=1-2*(f+ce);return{fT:$e*i.fT+H*i.fX+N*i.c$,fX:R*i.fT+oe*i.fX+q*i.c$,c$:X*i.fT+K*i.fX+_*i.c$}}),aa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Jr(c),u=dn(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,x=l*w,_=w*w,C=b.fX*u,M=l*C,H=w*C,R=C*C,j=1-2*(_+R),N=b.c$*u,X=l*N,F=2*(H-X),q=2*(H+X),K=w*N,ce=2*(K+M),$e=2*(K-M),oe=C*N,de=2*(oe-x),Be=2*(oe+x),Pe=N*N,Tr=1-2*(R+Pe),Lr=1-2*(_+Pe);return{fT:s.fT+Tr*d+F*m+ce*f,fX:s.fX+q*d+Lr*m+de*f,c$:s.c$+$e*d+Be*m+j*f}}),$g=y(function(e,r,n){return rr({cu:p(aa,e,r,qr(n)),cZ:p(ya,e,r,Fr(n)),c_:p(ya,e,r,Vr(n)),c0:p(ya,e,r,Er(n))})}),fg=y(function(e,r,n){return{eo:p($g,e,r,tt(n)),aL:it(n)}}),sg=$(function(e,r){var n=o(aa,e,r),a=o(ya,e,r);return function(t){var i=t;return o(en,n(i.cu),a(i.eE))}}),dg=y(function(e,r,n){var a=n;return{k:p(sg,e,r,a.k),e6:a.e6,fp:a.fp}}),mg=y(function(e,r,n){return o(hi,o(aa,e,r),n)}),pg=y(function(e,r,n){return o(mt,vt(n),p(aa,e,r,ut(n)))}),bg=y(function(e,r,n){return o(_i,o(aa,e,r),n)}),bt=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ra,l,p(fg,e,r,a));case 1:var l=n.a,t=n.b;return o(dt,l,p(bg,e,r,t));case 3:var l=n.a,i=n.b;return o(st,l,p(pg,e,r,i));case 2:var l=n.a,c=n.b;return o(ft,l,p(dg,e,r,c));case 4:var l=n.a,u=n.b;return o(gi,l,p(mg,e,r,u));default:var v=n.a;return $t(o(Q,o(bt,e,r),v))}}),gg=o(en,ke,ei),Ga=$(function(e,r){return p(bt,gg,yr(e),r)}),hg=o(en,ke,ri),vr=$(function(e,r){return p(bt,hg,yr(e),r)}),_g=o(en,ke,vu),mn=$(function(e,r){return p(bt,_g,yr(e),r)}),ov=$(function(e,r){return(r-$l(r/e)*e)/e}),Qe=$(function(e,r){return 360*o(ov,e,r)}),wg=Pv,Ur=function(e){return e*ye/180},yg=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(dt,e,p(Fe,p(Pr,n.fT,n.fX,n.c$),p(Pr,a.fT,a.fX,a.c$),p(Pr,t.fT,t.fX,t.c$)))}),xa=T(qe,255/255,255/255,255/255,1),iv=function(){var e=br(3)/2,r=o(yg,ze(xa),B({fT:e,fX:0,c$:0},{fT:0,fX:.5,c$:0},{fT:0,fX:-.5,c$:0})),n=o(xr,-(e/3),o(vr,wg(1/3),r));return o(Ce,-(e/3),o(Ga,Ur(90),Xe(h([o(xr,-(e/3),r),n,o(mn,Ur(120),n),o(mn,Ur(240),n)]))))}(),xg=function(e){var r=function(n){return o(mn,o(Qe,300,e.D),o(vr,o(Qe,300,e.D),o(Ga,o(Qe,300,e.D),n)))};return Xe(h([o(Ce,2,o(xr,-2,r(o($n,ze(tv),1)))),o(Ce,2,o(xr,2,r(o($n,ze(nv),1)))),o(Ce,4,r(o($n,ze(eg),1))),o(Ce,1.5,r(iv))]))},fo=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ra,e,o(av,p(Pr,-c,-l,-u),p(Pr,c,l,u)))}),Sg=y(function(e,r,n){return{k:o(en,e,r),e6:ie(n.e6),fp:ie(n.fp)}}),Cg=y(function(e,r,n){return o(ft,e,p(Sg,ke,nt,{e6:ur(n),fp:ur(r)}))}),ta=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c$:a.c$+r*(t.c$-a.c$)}}),Tg=y(function(e,r,n){var a=tt(n),t=Fr(a),i=Vr(a),c=Er(a),l=p(ta,e,r,qr(a)),u=r>=0?rr({cu:l,cZ:t,c_:i,c0:c}):rr({cu:l,cZ:kr(t),c_:kr(i),c0:kr(c)}),v=it(n),s=v.a,d=v.b,m=v.c,f=ie(o(ee,r,s)),g=ie(o(ee,r,d)),b=ie(o(ee,r,m));return{eo:u,aL:B(f,g,b)}}),Cc=function(e){return Ou(mi(e))},Lg=function(e){return Ju(mi(e))},zg=y(function(e,r,n){var a=ie(o(ee,r,qu(n))),t=ie(o(ee,r,Yu(n))),i=r>=0?Cc(n):kr(Cc(n)),c=p(ta,e,r,Lg(n));return{k:o(en,c,i),e6:t,fp:a}}),Pg=y(function(e,r,n){return o(hi,o(ta,e,r),n)}),kg=y(function(e,r,n){return o(mt,o(ee,J(r),vt(n)),p(ta,e,r,ut(n)))}),Mg=y(function(e,r,n){return o(_i,o(ta,e,r),n)}),En=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ra,c,p(Tg,ke,e,n));case 1:var c=r.a,a=r.b;return o(dt,c,p(Mg,ke,e,a));case 3:var c=r.a,t=r.b;return o(st,c,p(kg,ke,e,t));case 2:var c=r.a,i=r.b;return o(ft,c,p(zg,ke,e,i));case 4:var c=r.a,l=r.b;return o(gi,c,p(Pg,ke,e,l));default:var u=r.a;return $t(o(Q,En(e),u))}}),Dg=function(){var e=Xe(h([o($n,ze(xa),1),o(vr,Ur(45),o($n,ze(xa),1))]));return Xe(h([Xe(h([e,o(Ce,-.4,o(En,1.3,e))])),o(Ce,-.7,p(Cg,ze(xa),1,.5))]))}(),Tc=T(qe,211/255,215/255,207/255,1),Ag=T(qe,193/255,125/255,17/255,1),Bg=$(function(e,r){return o(Te,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Qa,e,r.aw))}),Fg=$(function(e,r){return o(fr,0,rt(o(et,Bg(e),r)))}),Vg=$(function(e,r){return o(Fg,e,r.ey)}),Eg=Vg,jg=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return T(qe,f,m,d,a)}),Rg=y(function(e,r,n){return T(jg,e,r,n,1)}),Ng=function(e){return 2*ye*e},so=E(function(e,r,n,a){return e+(r-e)*(1+Jr(Ng(o(ov,n,a))))/2}),Hg=function(e){var r=o(Eg,"number of tree blocks",e),n=function(a){var t=o(An,2,.2*(r-a)),i=p(Rg,T(so,a/r,1,10,e.D),.6,.6),c=.25;return o(vr,o(zn,"turning speed of the tree",e)*a*T(so,3,5,10,e.D),o(Ce,a*1.2*c,o(fo,ze(i),B(t,c,t))))};return Xe(h([o(fo,ze(Ag),B(.2,8,.2)),Xe(o(Q,n,o(wr,0,r-1)))]))},Xg=function(e){var r=function(a){return o(Ce,-1,o(fo,a,B(10,1,10)))},n=function(a){return Xe(h([r(a),o(vr,Ur(45),r(a))]))};return o(vr,o(Qe,1e3,e.D),Xe(h([Dg,n(ze(Tc)),o(Ce,-.1,o(En,1.1,n(ze(nv)))),o(Ce,-.2,o(En,1.2,n(ze(Tc)))),o(Ce,1,o(xr,5,Hg(e))),Xe(o(Q,function(a){return o(vr,Ur(a*45),o(Ce,-1/3,o(xr,5.5,o(En,2,iv))))},o(wr,1,7)))])))},Wg=T(qe,245/255,121/255,0/255,1),Gg=function(e){var r=14;return Xe(o(Q,function(n){return o(Ce,4,o(mn,o(Qe,1e3,e.D),o(Ga,o(Qe,1e3,e.D),o(vr,-o(Qe,200,e.D),o(vr,-(n/r*Ur(360)),o(xr,1.3,o(Ce,T(so,-1,1,10,e.D),o(Ga,o(Qe,600,e.D),o(mn,o(Qe,300,e.D),o($n,ze(Wg),.3))))))))))},o(wr,0,r-1)))},Ig=function(e){return pt(B(0,0,e))},Lc=$(function(e,r){return o(st,e,o(mt,ur(r),ke))}),Ug=function(e){return Xe(h([o(vr,-o(Qe,640,e.D),o(Ig,3.5,o(mn,o(Qe,100,e.D),Xe(h([o(xr,-.02,o(Lc,ze(rv),.5)),o(xr,.02,o(Lc,ze(tv),.5))])))))]))},Og=$(function(e,r){return h([Xg(e),xg(e),Gg(e),Ug(e)])}),zc=function(e){var r=e;return r},Jg=function(e){e:for(;;){if(Mr(e.di,or)&&Mr(e.dj,or))return Ve;if(o(Il,ie(e.di),ie(e.dj))){var r={aK:e.aK,di:e.dj,dj:e.di,ee:kr(e.ee)};e=r;continue e}else{var n=J(zc(e.dj)/ye),a=J(zc(e.di)/ye),t=Oe(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(at,gu(1),e.aK),v=u;return{bz:a*Qr(v),eu:!1,bF:a*Kr(v),cD:n/a,bU:a*Zr(v),cT:3,fT:i,fX:c,c$:l}}}},Yg=function(e){return Jg({aK:e.aK,di:e.di,dj:e.dj,ee:o(bi,yr(e.by),yr(e.bD))})},qg=$(function(e,r){var n=Mb({by:o(zn,"azimuth for third light",e),aK:f0(Ob(2e3)),bD:o(zn,"elevation for third light",e),bH:Ft(120)}),a=Sc({aK:Bt,bH:xc(6e3),dY:{fT:2,fX:3,c$:1}}),t=Yg({by:o(zn,"azimuth for fourth light",e),aK:Bt,bD:o(zn,"elevation for fourth light",e),di:Ft(20),dj:Ft(10)}),i=Sc({aK:Ub,bH:xc(6e3),dY:{fT:-2,fX:4,c$:1}});return o(Pb,{el:Yb,ep:rv,es:v0,ex:.1,b5:e.b5,eM:Ab(6),e8:T(Nb,i,a,n,t),cM:e.cM,fJ:Ib,fQ:Bt},o(Og,e,r))}),Zg=T(Hm,qg,Jm,Om,Xm);const Kg={Main:{init:Zg(o(A,function(e){return Ee({e0:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ee({D:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(D,"clock",fe))},o(D,"devicePixelRatio",fe))},o(D,"dt",fe))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Ee({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",Da(Hn)))},o(D,"left",Z))},o(D,"pressedKeys",Da(Hn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Ee({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",fe))},o(D,"y",fe))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Ee({eV:n,fR:r})},o(D,"height",fe))},o(D,"width",fe))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Ee({eB:r,eC:e})},o(D,"deltaX",fe))},o(D,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Qg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},eh=()=>{Rt("pointerdown"),Rt("wheel"),Rt("keydown")},Rt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},rh=Kg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});eh();Qg(rh);
