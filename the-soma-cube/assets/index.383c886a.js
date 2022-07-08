const av=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};av();function Cr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Cr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Cr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return Cr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Cr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return Cr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Aa(e){return Cr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Cr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Yt(e){return Cr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function m(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Zt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ba(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function tv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var ov=[];function iv(e){return e.length}var cv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),lv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),uv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var vv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+$v()),r});function $v(e){return"<internals>"}function on(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Sr(e,r){for(var n,a=[],t=xt(e,r,0,a);t&&(n=a.pop());t=xt(n.a,n.b,0,a));return t}function xt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&on(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=wi(e),r=wi(r));for(var t in e)if(!xt(e[t],r[t],n+1,a))return!1;return!0}$(Sr);$(function(e,r){return!Sr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var fv=$(function(e,r){var n=J(e,r);return n<0?jc:n?Zf:Ec}),Bn=0;function k(e,r){return{a:e,b:r}}function S(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var z={$:0};function tr(e,r){return{$:1,a:e,b:r}}var sv=$(tr);function h(e){for(var r=z,n=e.length;n--;)r=tr(e[n],r);return r}function Fa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var dv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(m(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return h(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Fa(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Fa(r).sort(function(n,a){var t=o(e,n,a);return t===Ec?0:t===jc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var mv=$(Math.pow);$(function(e,r){return r%e});var pv=$(function(e,r){var n=r%e;return e===0?on(11):n>0&&e<0||n<0&&e>0?n+e:n}),bv=Math.PI,gv=Math.cos,hv=Math.sin,_v=Math.tan,wv=Math.atan;$(Math.atan2);function yv(e){return e}function xv(e){return e===1/0||e===-1/0}var Sv=Math.ceil,Cv=Math.floor,Lv=Math.round,Pv=Math.sqrt,ci=Math.log,zv=isNaN;function kv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Tv=$(function(e,r){return e+r});function Mv(e){var r=e.charCodeAt(0);return isNaN(r)?q:oe(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function Dv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Av(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Bv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Fv=$(function(e,r){return r.split(e)}),Vv=$(function(e,r){return r.join(e)}),Rv=y(function(e,r,n){return n.slice(e,r)});function Ev(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var jv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Wv=$(function(e,r){return r.indexOf(e)>-1}),Nv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Gv=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function fc(e){return e+""}function Hv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:oe(n==45?-r:r)}function Xv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?oe(r):q}function Iv(e){return Fa(e).join("")}function Uv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Jv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ov(e){return{$:0,a:e}}function Kt(e){return{$:2,b:e}}var qv=Kt(function(e){return typeof e=="boolean"?ve(e):Ze("a BOOL",e)}),Yv=Kt(function(e){return typeof e=="number"?ve(e):Ze("a FLOAT",e)}),Zv=Kt(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):Ze("a STRING",e)});function Kv(e){return{$:3,b:e}}var Qv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Lr(e,r){return{$:9,f:e,g:r}}var e$=$(function(e,r){return{$:10,b:r,h:e}}),r$=$(function(e,r){return Lr(e,[r])}),n$=y(function(e,r,n){return Lr(e,[r,n])});R(function(e,r,n,a){return Lr(e,[r,n,a])});he(function(e,r,n,a,t){return Lr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return Lr(e,[r,n,a,t,i])});Aa(function(e,r,n,a,t,i,c){return Lr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Lr(e,[r,n,a,t,i,c,l])});Yt(function(e,r,n,a,t,i,c,l,u){return Lr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return xe(o(vo,"This is not valid JSON! "+a.message,r))}});var sc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):Ze("null",r);case 3:return qn(r)?li(e.b,r,h):Ze("a LIST",r);case 4:return qn(r)?li(e.b,r,a$):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ue(v)?v:xe(o(yi,n,v.a));case 7:var a=e.e;if(!qn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ue(v)?v:xe(o(Wc,a,v.a));case 8:if(typeof r!="object"||r===null||qn(r))return Ze("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ue(v))return xe(o(yi,i,v.a));t=tr(k(i,v.a),t)}return ve(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ue(v))return v;c=c(v.a)}return ve(c);case 10:var v=je(e.b,r);return Ue(v)?je(e.h(v.a),r):v;case 11:for(var s=z,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ue(v))return v;s=tr(v.a,s)}return xe(Kf(Fe(s)));case 1:return xe(o(vo,e.a,r));case 0:return ve(e.a)}}function li(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ue(c))return xe(o(Wc,i,c.a));t[i]=c.a}return ve(n(t))}function qn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function a$(e){return o(ms,e.length,function(r){return e[r]})}function Ze(e,r){return xe(o(vo,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&ui(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return ui(e.g,r.g)}}function ui(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var t$=$(function(e,r){return JSON.stringify(r,null,e)+""});function dc(e){return e}y(function(e,r,n){return n[e]=r,n});function Hr(e){return{$:0,a:e}}function o$(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var St=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function i$(e){return{$:5,b:e}}var c$=0;function Qt(e){var r={$:0,e:c$++,f:e,g:null,h:[]};return eo(r),r}function mc(e){return pr(function(r){r(Hr(Qt(e)))})}function pc(e,r){e.h.push(r),eo(e)}var l$=$(function(e,r){return pr(function(n){pc(e,r),n(Hr(Bn))})}),nt=!1,vi=[];function eo(e){if(vi.push(e),!nt){for(nt=!0;e=vi.shift();)u$(e);nt=!1}}function u$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,eo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return ro(r,a,e.e1,e.fQ,e.fK,function(){return function(){}})});function ro(e,r,n,a,t,i){var c=o(sc,e,r?r.flags:void 0);Ue(c)||on(2);var l={},u=n(c.a),v=u.a,s=i(p,v),d=v$(l,p);function p(f,g){var b=o(a,f,v);s(v=b.a,g),fi(l,b.b,t(v))}return fi(l,u.b,t(v)),d?{ports:d}:{}}var er={};function v$(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=f$(t,r)}return n}function $$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function f$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(St,l,i$(function(v){var s=v.a;return v.$===0?m(t,n,s,u):i&&c?P(a,n,s.i,s.j,u):m(a,n,i?s.i:s.j,u)}))}return n.h=Qt(o(St,l,e.b))}var s$=$(function(e,r){return pr(function(n){e.g(r),n(Hr(Bn))})});$(function(e,r){return o(l$,e.h,{$:0,a:r})});function bc(e){return function(r){return{$:1,k:e,l:r}}}function d$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var $i=[],at=!1;function fi(e,r,n){if($i.push({p:e,q:r,r:n}),!at){at=!0;for(var a;a=$i.shift();)m$(a.p,a.q,a.r);at=!1}}function m$(e,r,n){var a={};da(!0,r,a,null),da(!1,n,a,null);for(var t in e)pc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function da(e,r,n,a){switch(r.$){case 1:var t=r.k,i=p$(e,t,a,r.l);n[t]=b$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)da(e,c.a,n,a);return;case 3:da(e,r.o,n,{s:r.n,t:a});return}}function p$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function b$(e,r,n){return n=n||{i:z,j:z},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function g$(e){er[e]&&on(3)}$(function(e,r){return r});function h$(e,r){return g$(e),er[e]={f:_$,u:r,a:w$},bc(e)}var _$=$(function(e,r){return function(n){return e(r(n))}});function w$(e,r){var n=z,a=er[e].u,t=Hr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(sc,a,c);Ue(l)||on(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ma,vr=typeof document!="undefined"?document:{};function no(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(yr(e,function(){}),t),{}});function Ct(e){return{$:0,a:e}}var gc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:ao(n),e:t,f:e,b:i}})}),Pr=gc(void 0),y$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:ao(n),e:t,f:e,b:i}})}),x$=y$(void 0);function S$(e,r,n,a){return{$:3,d:ao(e),g:r,h:n,i:a}}var C$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function zr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return zr([e,r],function(){return e(r)})});y(function(e,r,n){return zr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return zr([e,r,n,a],function(){return m(e,r,n,a)})});he(function(e,r,n,a,t){return zr([e,r,n,a,t],function(){return P(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return zr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Aa(function(e,r,n,a,t,i,c){return zr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return zr([e,r,n,a,t,i,c,l],function(){return Zt(e,r,n,a,t,i,c,l)})});Yt(function(e,r,n,a,t,i,c,l,u){return zr([e,r,n,a,t,i,c,l,u],function(){return Ba(e,r,n,a,t,i,c,l,u)})});var hc=$(function(e,r){return{$:"a0",n:e,o:r}}),L$=$(function(e,r){return{$:"a1",n:e,o:r}}),_c=$(function(e,r){return{$:"a2",n:e,o:r}}),Fn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function P$(e){return e=="script"?"p":e}function z$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(hc,r.n,k$(e,r.o)):r});function k$(e,r){var n=bo(r);return{$:r.$,a:n?m(ps,n<3?T$:M$,Te(e),r.a):o(ha,e,r.a)}}var T$=$(function(e,r){return k(e(r.a),r.b)}),M$=$(function(e,r){return{al:e(r.al),cV:r.cV,cJ:r.cJ}});function ao(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?si(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?si(c,t,i):c[t]=i}return r}function si(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function yr(e,r){var n=e.$;if(n===5)return yr(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=yr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Lt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);ma&&e.c=="a"&&c.addEventListener("click",ma(c)),Lt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)no(c,yr(n===1?l[u]:l[u].b,r));return c}function Lt(e,r,n){for(var a in n){var t=n[a];a==="a1"?D$(e,t):a==="a0"?F$(e,r,t):a==="a3"?A$(e,t):a==="a4"?B$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function D$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function A$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function B$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function F$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=V$(r,i),e.addEventListener(t,c,to&&{passive:bo(i)<2}),a[t]=c}}var to;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){to=!0}}))}catch{}function V$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ue(i)){for(var c=bo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cV,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cJ)&&a.preventDefault(),e),d,p;d=s.j;){if(typeof d=="function")u=d(u);else for(var p=d.length;p--;)u=d[p](u);s=s.p}s(u,v)}}return n.q=r,n}function R$(e,r){return e.$==r.$&&Or(e.a,r.a)}function wc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=I$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,p=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof p!="object"?p=[p,b.j]:p.push(b.j),b=b.k;if(f&&d.length!==p.length){_e(n,0,a,r);return}(f?!E$(d,p):d!==p)&&_e(n,2,a,p),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:di(e,r,n,a,j$);return;case 2:di(e,r,n,a,W$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=oo(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function E$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function di(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=oo(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function oo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=oo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&R$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function j$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function W$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,p=0,f=a;d<v&&p<s;){var g=l[d],b=u[p],w=g.a,x=b.a,_=g.b,L=b.b,M=void 0,G=void 0;if(w===x){f++,Je(_,L,t,f),f+=_.b||0,d++,p++;continue}var j=l[d+1],E=u[p+1];if(j){var W=j.a,H=j.b;G=x===W}if(E){var F=E.a,O=E.b;M=w===F}if(M&&G){f++,Je(_,O,t,f),sn(i,t,w,L,p,c),f+=_.b||0,f++,dn(i,t,w,H,f),f+=H.b||0,d+=2,p+=2;continue}if(M){f++,sn(i,t,x,L,p,c),Je(_,O,t,f),f+=_.b||0,d+=1,p+=2;continue}if(G){f++,dn(i,t,w,_,f),f+=_.b||0,f++,Je(H,L,t,f),f+=H.b||0,d+=2,p+=1;continue}if(j&&W===F){f++,dn(i,t,w,_,f),sn(i,t,x,L,p,c),f+=_.b||0,f++,Je(H,O,t,f),f+=H.b||0,d+=2,p+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;dn(i,t,g.a,_,f),f+=_.b||0,d++}for(;p<s;){var K=K||[],b=u[p];sn(i,t,b.a,b.b,void 0,K),p++}(t.length>0||c.length>0||K)&&_e(n,8,a,{w:t,x:c,y:K})}var yc="_elmW6BL";function sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}sn(e,r,n+yc,a,t,i)}function dn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}dn(e,r,n+yc,a,t)}function xc(e,r,n,a){mn(e,r,n,0,0,r.b,a)}function mn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)xc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&mn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&mn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var f=r.k;f.$===4;)f=f.k;return mn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=p===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=mn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Sc(e,r,n,a){return n.length===0?e:(xc(e,r,n,a),pa(e,n))}function pa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=N$(t,a);t===e&&(e=i)}return e}function N$(e,r){switch(r.$){case 0:return G$(e,r.s,r.u);case 4:return Lt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return pa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(yr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=pa(e,i.w),e;case 8:return H$(e,r);case 5:return r.s(e);default:on(10)}}function G$(e,r,n){var a=e.parentNode,t=yr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function H$(e,r){var n=r.s,a=X$(n.y,r);e=pa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:yr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&no(e,a),e}function X$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;no(n,i.c===2?i.s:yr(i.z,r.u))}return n}}function io(e){if(e.nodeType===3)return Ct(e.textContent);if(e.nodeType!==1)return Ct("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Fn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=tr(io(v[a]),u);return m(Pr,l,r,u)}function I$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var U$=R(function(e,r,n,a){return ro(r,a,e.e1,e.fQ,e.fK,function(t,i){var c=e.fT,l=a.node,u=io(l);return Cc(i,function(v){var s=c(v),d=wc(u,s);l=Sc(l,u,d,t),u=s})})});R(function(e,r,n,a){return ro(r,a,e.e1,e.fQ,e.fK,function(t,i){var c=e.cS&&e.cS(t),l=e.fT,u=vr.title,v=vr.body,s=io(v);return Cc(i,function(d){ma=c;var p=l(d),f=Pr("body")(z)(p.eu),g=wc(s,f);v=Sc(v,s,g,t),s=f,ma=0,u!==p.fO&&(vr.title=u=p.fO)})})});var ba=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Cc(e,r){r(e);var n=0;function a(){n=n===1?0:(ba(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ba(a),n=2)}}$(function(e,r){return o(_o,go,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(_o,go,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(_o,go,pr(function(){history.replaceState({},"",r),e()}))});var J$={addEventListener:function(){},removeEventListener:function(){}},O$=typeof window!="undefined"?window:J$;y(function(e,r,n){return mc(pr(function(a){function t(i){Qt(n(i))}return e.addEventListener(r,t,to&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ue(n)?oe(n.a):q});function Lc(e,r){return pr(function(n){ba(function(){var a=document.getElementById(e);n(a?Hr(r(a)):o$(gs(e)))})})}function q$(e){return pr(function(r){ba(function(){r(Hr(e()))})})}$(function(e,r){return Lc(r,function(n){return n[e](),Bn})});$(function(e,r){return q$(function(){return O$.scroll(e,r),Bn})});y(function(e,r,n){return Lc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Bn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Y$=$(function(e,r){var n="g";e.ff&&(n+="m"),e.ew&&(n+="i");try{return oe(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Z$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?oe(d):q}a.push(P(_l,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?oe(v):q}return n(P(_l,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var K$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var co=new Float64Array(3),mi=new Float64Array(3),pi=new Float64Array(3),ef=y(function(e,r,n){return new Float64Array([e,r,n])}),rf=function(e){return e[0]},nf=function(e){return e[1]},af=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var tf=function(e){return new Float64Array([e.fX,e.f$,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Pc);function zc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ga(Pc(e,r,n),n)}$(zc);function kc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ga(e,r){r===void 0&&(r=new Float64Array(3));var n=1/kc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var of=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(pn);function Pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Pt);$(function(e,r){var n,a=co,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(pn(r,a)+e[14])/n,t});var cf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var lf=function(e){return{fX:e[0],f$:e[1],c5:e[2],em:e[3]}},uf=function(e){return new Float64Array([e.fX,e.f$,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/vf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function vf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var $f=new Float64Array(16),ff=new Float64Array(16),sf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},df=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Tc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Tc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Tc(c,l,i,t,n,a)});function Mc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(Mc);R(function(e,r,n,a){return Mc(e,r,n,a,-1,1)});function Dc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],p=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],L=r[0],M=r[1],G=r[2],j=r[3],E=r[4],W=r[5],H=r[6],F=r[7],O=r[8],K=r[9],ce=r[10],$e=r[11],ie=r[12],me=r[13],ke=r[14],Ce=r[15];return n[0]=a*L+l*M+d*G+b*j,n[1]=t*L+u*M+p*G+w*j,n[2]=i*L+v*M+f*G+x*j,n[3]=c*L+s*M+g*G+_*j,n[4]=a*E+l*W+d*H+b*F,n[5]=t*E+u*W+p*H+w*F,n[6]=i*E+v*W+f*H+x*F,n[7]=c*E+s*W+g*H+_*F,n[8]=a*O+l*K+d*ce+b*$e,n[9]=t*O+u*K+p*ce+w*$e,n[10]=i*O+v*K+f*ce+x*$e,n[11]=c*O+s*K+g*ce+_*$e,n[12]=a*ie+l*me+d*ke+b*Ce,n[13]=t*ie+u*me+p*ke+w*Ce,n[14]=i*ie+v*me+f*ke+x*Ce,n[15]=c*ie+s*me+g*ke+_*Ce,n}$(Dc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],p=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],L=r[5],M=r[6],G=r[8],j=r[9],E=r[10],W=r[12],H=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*L+v*M,n[5]=t*_+l*L+s*M,n[6]=i*_+u*L+d*M,n[7]=0,n[8]=a*G+c*j+v*E,n[9]=t*G+l*j+s*E,n[10]=i*G+u*j+d*E,n[11]=0,n[12]=a*W+c*H+v*F+p,n[13]=t*W+l*H+s*F+f,n[14]=i*W+u*H+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ga(r,co);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/kc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,p=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,L=b-p,M=g-f,G=c*c*v+u,j=w+d,E=b+p,W=w-d,H=l*l*v+u,F=n[0],O=n[1],K=n[2],ce=n[3],$e=n[4],ie=n[5],me=n[6],ke=n[7],Ce=n[8],hr=n[9],_r=n[10],rt=n[11],Qu=n[12],ev=n[13],rv=n[14],nv=n[15];return a[0]=F*x+$e*_+Ce*L,a[1]=O*x+ie*_+hr*L,a[2]=K*x+me*_+_r*L,a[3]=ce*x+ke*_+rt*L,a[4]=F*M+$e*G+Ce*j,a[5]=O*M+ie*G+hr*j,a[6]=K*M+me*G+_r*j,a[7]=ce*M+ke*G+rt*j,a[8]=F*E+$e*W+Ce*H,a[9]=O*E+ie*W+hr*H,a[10]=K*E+me*W+_r*H,a[11]=ce*E+ke*W+rt*H,a[12]=Qu,a[13]=ev,a[14]=rv,a[15]=nv,a});function mf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(mf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function pf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(pf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],p=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=p,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+p*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],p=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=p,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+p*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=zc(e,r,co),t=ga(Pt(n,a,mi),mi),i=ga(Pt(a,t,pi),pi),c=$f,l=ff;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Dc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var bi=0;function Ln(e,r){for(;r.b;r=r.b)e(r.a)}function lo(e){for(var r=0;e.b;e=e.b)r++;return r}var bf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},gf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),hf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),_f=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),wf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),yf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Cf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Lf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Pf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},zf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},kf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Tf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ac=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Bc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Mf=function(e){e.gl.disable(e.gl.CULL_FACE)},Df=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Af=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Bf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},gi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ff=[zf,kf,Tf,Ac,Bc,Mf,Df,Af,Bf];function hi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Vf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Fc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Rf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(L){for(_=0;_<g;_++)f[b++]=g===1?w[L][x]:w[L][x][_]})}var u=Fc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(lo(n.b)*s);Ln(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),p}function Ef(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=jf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*lo(r.b),indexBuffer:null,buffers:{}}}function jf(e,r){var n=new Uint32Array(lo(e)*r),a=0,t;return Ln(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function _i(e,r){return e+"#"+r}var Vc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ac(n),Bc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=_i(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=bi++,v||(v=hi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=bi++,s||(s=hi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Vf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Wf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=_i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Nf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Ef(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Rf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Fc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,L=0;L<w.arraySize;L++)a.enableVertexAttribArray(g+L),a.vertexAttribPointer(g+L,w.size,w.baseType,!1,_,x*L)}for(n.toggle=!n.toggle,Ln(gp(n),i.a),u=0;u<gi.length;u++){var M=n[gi[u]];M.toggle!==n.toggle&&M.enabled&&(Ff[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Ln(t,e.g),r});function Wf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var L=l.textures.get(_);L||(L=_.eC(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var p=e.getActiveUniform(t,d);v[a[p.name]||p.name]=u(t,p)}return v}function Nf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Gf=y(function(e,r,n){return S$(r,{g:n,f:{},h:e},qf,Yf)}),Hf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Xf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),If=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Uf=$(function(e,r){e.contextAttributes.antialias=!0}),Jf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Of=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function qf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ln(function(t){return o(bp,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),bf(function(){return o(Vc,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Yf(e,r){return r.f=e.f,Vc(r)}var B=sv,Yn=vv,Rc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return m(Yn,e,l,v)}else{var u=c.a;return m(Yn,i,l,u)}});return m(Yn,i,m(Yn,e,r,t),a)}),uo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=m(e,a,t,m(uo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),wi=function(e){return m(uo,y(function(r,n,a){return o(B,k(r,n),a)}),z,e)},Ec=1,Zf=2,jc=0,xe=function(e){return{$:1,a:e}},vo=$(function(e,r){return{$:3,a:e,b:r}}),yi=$(function(e,r){return{$:0,a:e,b:r}}),Wc=$(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},Kf=function(e){return{$:2,a:e}},oe=function(e){return{$:0,a:e}},q={$:1},Qf=jv,es=t$,Ae=fc,Br=$(function(e,r){return o(Vv,e,Fa(r))}),$o=$(function(e,r){return h(o(Fv,e,r))}),Nc=function(e){return o(Br,`
    `,o($o,`
`,e))},Vn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Wr=function(e){return m(Vn,$(function(r,n){return n+1}),0,e)},rs=dv,ns=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Nr=$(function(e,r){return m(ns,e,r,z)}),fo=$(function(e,r){return m(rs,e,o(Nr,0,Wr(r)-1),r)}),rr=Uv,Gc=function(e){var r=rr(e);return 97<=r&&r<=122},Hc=function(e){var r=rr(e);return r<=90&&65<=r},as=function(e){return Gc(e)||Hc(e)},ts=function(e){var r=rr(e);return r<=57&&48<=r},os=function(e){return Gc(e)||Hc(e)||ts(e)},Fe=function(e){return m(Vn,B,z,e)},cn=Mv,is=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Nc(cs(r))))}),cs=function(e){return o(ls,e,z)},ls=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=cn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return as(x)&&o(Qf,os,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Br,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Wr(s))+" ways:"));return o(Br,`

`,o(B,g,o(fo,is,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Br,"",Fe(r)):"!"}();default:var p=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Br,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Nc(o(es,4,f))+(`

`+p))}}),Ve=32,zt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),kt=ov,so=Sv,mo=$(function(e,r){return ci(r)/ci(e)}),us=yv,Pn=so(o(mo,2,Ve)),Xc=P(zt,0,Pn,kt,kt),Ic=cv,Uc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Jc=Cv,Tt=iv,nr=$(function(e,r){return J(e,r)>0?e:r}),vs=function(e){return{$:0,a:e}},po=lv,$s=$(function(e,r){e:for(;;){var n=o(po,Ve,e),a=n.a,t=n.b,i=o(B,vs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),fs=function(e){var r=e.a;return r},ss=$(function(e,r){e:for(;;){var n=so(r/Ve);if(n===1)return o(po,Ve,e).a;var a=o($s,e,z),t=n;e=a,r=t;continue e}}),Oc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Jc(o(mo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(ss,t,r.l);return P(zt,Tt(r.p)+n,o(nr,5,a*Pn),i,r.p)}else return P(zt,Tt(r.p),Pn,kt,r.p)}),ds=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Oc,!1,{z:a,l:n/Ve|0,p:t});var i=Uc(m(Ic,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ms=$(function(e,r){if(e<=0)return Xc;var n=e%Ve,a=m(Ic,n,e-n,r),t=e-n-Ve;return C(ds,r,t,e,z,a)}),Ue=function(e){return!e.$},A=e$,Y=qv,D=Qv,fe=Yv,ha=r$,ps=n$,Te=Ov,bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},N=Pr("div"),bs=function(e){return{$:2,a:e}},qc=$(function(e,r){return e}),Yc=$(function(e,r){return{db:r.db,eA:e,b9:r.b9,eK:r.eK,e8:r.e8,fr:r.fr,cR:r.cR,fU:r.fU}}),Vr=function(e){return e},gs=Vr,xi=Xe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),hs=Wv,Fr=Dv,qr=Rv,Rn=$(function(e,r){return e<1?r:m(qr,e,Fr(r),r)}),Va=Gv,Ra=function(e){return e===""},Ea=$(function(e,r){return e<1?"":m(qr,0,e,r)}),Zc=Hv,Si=he(function(e,r,n,a,t){if(Ra(t)||o(hs,"@",t))return q;var i=o(Va,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Zc(o(Rn,c+1,t));if(l.$===1)return q;var u=l;return oe(ye(xi,e,o(Ea,c,t),u,r,n,a))}else return oe(ye(xi,e,t,q,r,n,a))}),Ci=R(function(e,r,n,a){if(Ra(a))return q;var t=o(Va,"/",a);if(t.b){var i=t.a;return C(Si,e,o(Rn,i,a),r,n,o(Ea,i,a))}else return C(Si,e,"/",r,n,a)}),Li=y(function(e,r,n){if(Ra(n))return q;var a=o(Va,"?",n);if(a.b){var t=a.a;return P(Ci,e,oe(o(Rn,t+1,n)),r,o(Ea,t,n))}else return P(Ci,e,q,r,n)});$(function(e,r){if(Ra(r))return q;var n=o(Va,"#",r);if(n.b){var a=n.a;return m(Li,e,oe(o(Rn,a+1,r)),o(Ea,a,r))}else return m(Li,e,q,r)});var _s=Nv,go=function(e){},En=Hr,ws=En(0),Kc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,p=n>500?m(Vn,e,r,Fe(d)):P(Kc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,p))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return P(Kc,e,r,0,n)}),re=$(function(e,r){return m(br,$(function(n,a){return o(B,e(n),a)}),z,r)}),_a=St,ho=$(function(e,r){return o(_a,function(n){return En(e(n))},r)}),ys=y(function(e,r,n){return o(_a,function(a){return o(_a,function(t){return En(o(e,a,t))},n)},r)}),xs=function(e){return m(br,ys(B),En(z),e)},Ss=s$,Cs=$(function(e,r){var n=r;return mc(o(_a,Ss(e),n))}),Ls=y(function(e,r,n){return o(ho,function(a){return 0},xs(o(re,Cs(e),r)))}),Ps=y(function(e,r,n){return En(0)}),zs=$(function(e,r){var n=r;return o(ho,e,n)});er.Task=$$(ws,Ls,Ps,zs);var ks=bc("Task"),_o=$(function(e,r){return ks(o(ho,e,r))}),Ts=U$,Ms=kv,wa={$:1},Qc=function(e){return{$:2,a:e}},ja={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),ln=function(e){var r=e.b.B;return r.a},Ds=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return oe(o(Ne,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},el=function(e){var r=e.b;return o(Ne,ja,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),As=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fr.de?el(n):n;case 2:var i=a.a.cW;return(J(i+r.eK,ln(n).db)>0?o(te,Ds,dr(o(Ne,wa,t))):Vr)(o(Ne,Qc({cW:i+r.eK}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yc,l.eA,Ke(r,{db:l.db+r.eK})),s=o(e,v,u);return o(Ne,ja,{B:k(v,s),ab:z,T:o(B,t.B,t.T)})}}),rl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Bs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Fs=$(function(e,r){return Fe(m(Bs,e,r,z))}),nl=y(function(e,r,n){if(r<=0)return z;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,p=d.b,c=p.a,f=p.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(Fs,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,b,m(nl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Vs=$(function(e,r){return m(nl,0,e,r)}),Rs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ue(Fe(n),ue(h([a]),t)),c=o(Vs,e,i),l=o(rl,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,wa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,p=s.b;return o(Ne,wa,{B:d,ab:z,T:p})}else return r}}),Es=function(e){var r=e.b;return o(Ne,wa,r)},js=function(e){var r=e.b;return o(Ne,Qc({cW:ln(e).db}),r)},Ws=$(function(e,r){switch(e.$){case 1:return Es(r);case 2:return el(r);case 3:return js(r);default:var n=e.a;return o(Rs,n,r)}}),al=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Ns=$(function(e,r){return Ke(r,{av:e(r.av)})}),Gs=function(e){return{$:3,a:e}},tl=function(e){return{$:2,a:e}},ol=$(function(e,r){return{$:0,a:e,b:r}}),Hs=$(function(e,r){return{$:1,a:e,b:r}}),Be=$(function(e,r){if(r.$)return q;var n=r.a;return oe(e(n))}),Z=function(e){return e<0?-e:e},wo=Xv,Xs=y(function(e,r,n){return o(dr,0/0,wo(o(e,r,n)))}),il=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Is=Bv,cl=function(e){return m(Is,B,z,e)},Us=$(function(e,r){var n=o(il,function(a){return a!=="0"&&a!=="."},cl(r));return ue(e&&n?"-":"",r)}),be=fc,Mt=Tv,ll=Jv,ul=function(e){var r=e.a,n=e.b;if(r==="9"){var a=cn(n);if(a.$===1)return"01";var t=a.a;return o(Mt,"0",ul(t))}else{var i=rr(r);return i>=48&&i<57?o(Mt,ll(i+1),n):"0"}},Dt=xv,Js=zv,Wa=function(e){return o(Mt,e,"")},vl=y(function(e,r,n){return e<=0?n:m(vl,e>>1,ue(r,r),e&1?ue(n,r):n)}),zn=$(function(e,r){return m(vl,e,r,"")}),At=y(function(e,r,n){return ue(n,o(zn,e-Fr(n),Wa(r)))}),Bt=Av,$l=function(e){var r=o($o,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Os=function(e){var r=o($o,"e",be(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,Zc(o(_s,"+",t)?o(Rn,1,t):t)),c=$l(n),l=c.a,u=c.b,v=ue(l,u),s=i<0?o(dr,"0",o(Be,function(d){var p=d.a,f=d.b;return p+("."+f)},o(Be,al(Wa),cn(ue(o(zn,Z(i),"0"),v))))):m(At,i+1,"0",v);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},qs=y(function(e,r,n){if(Dt(n)||Js(n))return be(n);var a=n<0,t=$l(Os(Z(n))),i=t.a,c=t.b,l=Fr(i)+r,u=ue(o(zn,-l+1,"0"),m(At,l,"0",ue(i,c))),v=Fr(u),s=o(nr,1,l),d=o(e,a,m(qr,s,v,u)),p=m(qr,0,s,u),f=d?Bt(o(dr,"1",o(Be,ul,cn(Bt(p))))):p,g=Fr(f),b=f==="0"?f:r<=0?ue(f,o(zn,Z(r),"0")):J(r,Fr(c))<0?m(qr,0,g-r,f)+("."+m(qr,g-r,g,f)):ue(i+".",m(At,r,"0",c));return o(Us,a,b)}),fl=qs($(function(e,r){var n=cn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Ys=Xs(fl),Zs=y(function(e,r,n){var a=o(mo,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ys,t,n)}),sl=fv,yo=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(sl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return oe(a);default:var l=e,u=i;e=l,r=u;continue e}}}),I=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},nn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,p=a.e;return C(I,0,r,n,C(I,1,v,s,d,p),C(I,1,i,c,l,u))}else return C(I,e,i,c,C(I,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,p=a.e;return C(I,0,v,s,C(I,1,g,b,w,x),C(I,1,r,n,p,t))}else return C(I,e,r,n,a,t)}),Ft=y(function(e,r,n){if(n.$===-2)return C(I,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(sl,e,t);switch(u){case 0:return C(nn,a,t,i,m(Ft,e,r,c),l);case 1:return C(I,a,t,r,c,l);default:return C(nn,a,t,i,c,m(Ft,e,r,l))}}),_n=y(function(e,r,n){var a=m(Ft,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(I,1,t,i,c,l)}else{var u=a;return u}}),Ks=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},dl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,p=v.d;p.a;var f=p.b,g=p.c,b=p.d,w=p.e,x=v.e;return C(I,0,f,g,C(I,1,n,a,C(I,0,i,c,l,u),b),C(I,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,d=L.c,p=L.d,x=L.e;return C(I,1,n,a,C(I,0,i,c,l,u),C(I,0,s,d,p,x))}else return e},Pi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,p=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return C(I,0,i,c,C(I,1,u,v,s,d),C(I,1,n,a,p,C(I,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,p=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return C(I,1,n,a,C(I,0,i,c,L,p),C(I,0,g,b,w,x))}else return e},Qs=Aa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(I,n,l,u,v,C(I,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Pi(r)}else break e;else return c.a,c.d,Pi(r);else break e;return r}}),ca=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(I,r,n,a,ca(t),l);var u=dl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,p=u.d,f=u.e;return C(nn,v,s,d,ca(p),f)}else return or}else return C(I,r,n,a,ca(t),l)}else return or},wn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(I,n,a,t,o(wn,e,i),c);var u=dl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,p=u.d,f=u.e;return C(nn,v,s,d,o(wn,e,p),f)}else return or}else return C(I,n,a,t,o(wn,e,i),c);else return o(ed,e,Zt(Qs,e,r,n,a,t,i,c))}),ed=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Sr(e,a)){var l=Ks(c);if(l.$===-1){var u=l.b,v=l.c;return C(nn,n,u,v,i,ca(c))}else return or}else return C(nn,n,a,t,i,o(wn,e,c))}else return or}),rd=$(function(e,r){var n=o(wn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(I,1,a,t,i,c)}else{var l=n;return l}}),Zn=y(function(e,r,n){var a=r(o(yo,e,n));if(a.$)return o(rd,e,n);var t=a.a;return m(_n,e,t,n)}),nd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Zn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Hs,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Zn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(ol,k(i,c),m(Zs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Zn,r,Be(function(a){return a.$===3?Gs(n):a}));default:var r=e.a,n=e.b;return o(Zn,r,Be(function(a){return a.$===2?tl(n):a}))}},ad=function(e){return Ns(nd(e))},td=$(function(e,r){return o(re,ad(e),r)}),od=$(function(e,r){return Ke(r,{eA:o(td,e,r.eA)})}),id=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ke(a,{B:o(al,od(e),a.B)}))}),cd=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),ld=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ke(t,{B:o(cd,o(e,i.a,r),i)}))}),ud=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:m(As,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(id,i,a.G)});case 4:var c=n.a;return Ke(a,{G:m(ld,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ws,l,a.G)})}}),vd=$(function(e,r){return o(Ne,ja,{B:k(e,r(e)),ab:z,T:z})}),$d=d$,zi=$d(z),ya=Kv,kn=Zv,fd=h$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Te({db:c,b9:i,eK:t,e8:a,fr:n,cR:r,fU:e})},o(D,"clock",fe))},o(D,"devicePixelRatio",fe))},o(D,"dt",fe))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Te({eo:d,eB:s,de:v,eJ:u,e9:l,ft:c,fy:i,fE:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",ya(kn)))},o(D,"left",Y))},o(D,"pressedKeys",ya(kn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Te({de:v,e5:u,fe:l,fz:c,fA:i,eh:t,fX:a,f$:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",fe))},o(D,"y",fe))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Te({eX:n,fV:r})},o(D,"height",fe))},o(D,"width",fe))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Te({eE:r,eF:e})},o(D,"deltaX",fe))},o(D,"deltaY",fe))))),sd=function(e){return{$:4,a:e}},dd={$:0},md=dc,Ie=$(function(e,r){return o(_c,e,md(r))}),U=Ie("className"),pd=function(e){var r=e.b.B;return r.b},xa=Ie("id"),bd=C$,Sa=bd,gd=L$,ne=gd,hd={$:1},_d=function(e){return{$:3,a:e}},wd=function(e){return{$:5,a:e}},ki=Pr("a"),xo=Pr("button"),yd=Fn("d"),ml=gc("http://www.w3.org/2000/svg"),xd=ml("path"),Sd=ml("svg"),Cd=Fn("viewBox"),yn=function(e){return o(Sd,h([Cd("0 0 100 100"),o(ne,"width","100%"),o(ne,"height","100%")]),h([o(xd,h([yd(e)]),z)]))},Ti=function(e){return o(Ie,"href",z$(e))},Qr={eI:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eR:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eW:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fo:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fq:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fr:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fv:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fG:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fP:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fR:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f3:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ld=function(e){return{$:0,a:e}},pl=hc,bl=$(function(e,r){return o(pl,e,Ld(r))}),So=function(e){return o(bl,"click",Te(e))},Mi=Ie("target"),Pd=Ie("title"),Vt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(I,n,a,o(e,a,t),o(Vt,e,i),o(Vt,e,c))}),zd=Ct,we=zd,kd=function(e){return m(uo,y(function(r,n,a){return o(B,n,a)}),z,e)},Td=$(function(e,r){return{$:3,a:e,b:r}}),Md=$(function(e,r){return{$:2,a:e,b:r}}),Dd=$(function(e,r){return{$:0,a:e,b:r}}),Ad=$(function(e,r){return{$:1,a:e,b:r}}),jn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gl=P(jn,0/255,0/255,0/255,1),Bd=dc,Fd=$(function(e,r){return o(_c,e,Bd(r))}),Vd=Fd("checked"),qe=Lv,Rd=y(function(e,r,n){return ue(o(zn,e-Fr(n),Wa(r)),n)}),Tn=pv,hl=function(e){var r=function(n){return n<10?Ae(n):Wa(ll(87+n))};return e<16?r(e):ue(hl(e/16|0),r(o(Tn,16,e)))},Ed=o(te,hl,o(Rd,2,"0")),Co=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b4:a,cb:n,cL:r}},jd=function(e){var r=Co(e),n=r.cL,a=r.cb,t=r.b4;return o(Br,"",o(B,"#",o(re,o(te,qe,Ed),h([n*255,a*255,t*255]))))},Rt=Ie("htmlFor"),Wd=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Ca=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Nd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),Lo=$(function(e,r){return m(br,Nd(e),z,r)}),_l=R(function(e,r,n,a){return{e0:r,fc:e,fj:n,fJ:a}}),Gd=Z$,Hd=Iv,Xd=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ve(n)}),Id=Y$,Ud=function(e){return o(Id,{ew:!1,ff:!1},e)},Po=function(e){if(e.b){var r=e.a;return e.b,oe(r)}else return q},Jd=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ve(e(n))}}),Od=function(e){return{$:2,a:e}},qd=function(e){return{$:0,a:e}},Yd=function(e){return{$:1,a:e}},tt=$(function(e,r){return rr(r)-rr(e)}),ot=y(function(e,r,n){var a=rr(n);return J(rr(e),a)<1&&J(a,rr(r))<1}),Zd=$(function(e,r){var n=function(t){return J(t,e)<0?ve(t):xe(Yd(r))},a=m(ot,"0","9",r)?ve(o(tt,"0",r)):m(ot,"a","z",r)?ve(10+o(tt,"a",r)):m(ot,"A","Z",r)?ve(10+o(tt,"A",r)):xe(qd(r));return o(Ca,n,a)}),wl=$(function(e,r){var n=cn(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Ca,function(c){return o(Ca,function(l){return ve(c+l*e)},o(wl,e,i))},o(Zd,e,t))}),Kd=$(function(e,r){return 2<=e&&e<=36?o(wl,e,Bt(r)):xe(Od(e))}),Qd=Kd(16),em=y(function(e,r,n){return P(jn,e,r,n,1)}),yl=R(function(e,r,n,a){return P(jn,e,r,n,a)}),Wn=mv,rm=$(function(e,r){var n=o(Wn,10,e);return qe(r*n)/n}),nm=Ev,am=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=cl(n);if(a.b&&!a.b.b){var t=a.a;return Hd(h([t,t]))}else return n};return o(te,nm,o(te,function(n){return o(Be,function(a){return m(Gd,1,a,n)},Ud(e))},o(te,Wd(Po),o(te,Be(function(n){return n.fJ}),o(te,Be(Lo(Vr)),o(te,Xd("Parsing hex regex failed"),Ca(function(n){var a=o(re,o(te,r,o(te,Qd,Jd(us))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ve(P(yl,t/255,c/255,u/255,o(rm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,p=d.b,u=p.a.a;return ve(m(em,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),La=Pr("input"),Et=Pr("label"),jt=Ie("name"),xl=$(function(e,r){return m(br,D,r,e)}),tm=o(xl,h(["target","checked"]),Y),om=function(e){return o(bl,"change",o(ha,e,tm))},im=function(e){return k(e,!0)},cm=function(e){return{$:1,a:e}},lm=$(function(e,r){return o(pl,e,cm(r))}),um=o(xl,h(["target","value"]),kn),zo=function(e){return o(lm,"input",o(ha,im,o(ha,e,um)))},Sl=Ie("max"),Cl=Ie("min"),Ll=function(e){return o(Ie,"step",e)},Pa=Ie("type"),ko=Ie("value"),Di=function(e){var r=e.ce,n=e.c$,a=e.cu,t=e.cq,i=e.cU,c=e.cy;return o(N,z,h([o(Et,h([Rt(r)]),h([o(N,h([U("relative w-full")]),h([o(N,h([U("inline-block")]),h([we(r)])),o(N,h([U("inline-block float-right")]),h([we(be(n))]))]))])),o(La,h([Pa("range"),o(ne,"width","100%"),xa(r),jt(r),Cl(be(a)),Sl(be(t)),ko(be(n)),Ll(be(i)),zo(o(te,wo,o(te,dr(42),c)))]),z)]))},vm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),$m=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(N,z,h([o(N,h([U("mb-2")]),h([o(Et,h([Rt(e)]),h([we(e)]))])),o(La,h([Pa("checkbox"),xa(e),jt(e),om(Td(e)),Vd(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Di({ce:e,cq:i,cu:t,cy:Dd(e),cU:.01*(i-t),c$:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Di({ce:e,cq:i,cu:t,cy:o(te,qe,Ad(e)),cU:1,c$:c});default:var c=r.a;return o(N,z,h([o(N,h([o(ne,"margin-bottom","6px")]),h([o(Et,h([Rt(e)]),h([we(e)]))])),o(La,h([Pa("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),xa(e),jt(e),zo(function(l){return o(Md,e,o(vm,gl,am(l)))}),ko(jd(c))]),z)]))}}),fm=function(e){return o(N,h([U("p-4 border-y-[0.5px] border-white20")]),h([o(N,h([U("text-lg pb-2")]),h([we(e.fg)])),o(N,h([U("pl-2 pr-2")]),kd(o(Vt,$m,e.av)))]))},sm=function(e){return o(N,h([U("text-xs text-white60")]),o(re,fm,e))},dm=function(e){return o(N,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([we("clock: "+o(fl,3,ln(e).db))]))},mm=function(e){e.a;var r=e.b.T;return o(Be,function(n){return qe(60/(ln(e).db-n))},o(Be,o(te,fs,function(n){return n.db}),Po(o(rl,59,r))))},pm=function(e){return o(N,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=mm(e);if(r.$===1)return h([we("... Fps")]);var n=r.a;return h([we(Ae(n)+" Fps")])}())},bm=function(e){return{$:0,a:e}},gm=function(e){var r=e.b.T;return Wr(r)},hm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Wr(r)+1+Wr(n)},_m=function(e){return o(La,h([U("absolute w-full"),Pa("range"),Cl(Ae(0)),Sl(Ae(hm(e)-1)),ko(Ae(gm(e))),Ll(Ae(1)),zo(o(te,wo,o(te,dr(42),o(te,qe,bm))))]),z)},Ai={$:1},wm={$:3},ym={$:2},Pl=function(e){return!e.b},Bi=$(function(e,r){return o(xo,h([U("px-2 bg-black40"),U(r),So(e)]),h([we("REC")]))}),Fi=$(function(e,r){return o(xo,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),So(r)]),h([o(N,h([U("w-4 h-6 fill-white80")]),h([yn(e)]))]))}),xm=function(e){var r=e.a,n=e.b.ab;return o(N,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(Bi,Ai,"text-red-500 font-bold");case 1:return o(Bi,ym,"text-white80 font-bold");default:return o(N,z,z)}}(),function(){switch(r.$){case 0:return o(N,z,z);case 1:return Pl(n)?o(N,z,z):o(Fi,Qr.fq,wm);default:return o(Fi,Qr.fo,Ai)}}()]))},Sm=function(e){return o(N,h([U("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([_m(e),xm(e),pm(e),dm(e)]))},Cm=function(e){var r=e.a;return Sr(r,ja)},Lm=$(function(e,r){var n=Cm(r.G)?o(N,z,z):o(N,h([U("absolute pointer-events-none w-8 h-8"),o(ne,"left",be(e.fr.fX+.5*e.cR.fV)+"px"),o(ne,"top",be(-e.fr.f$+.5*e.cR.eX)+"px")]),h([o(N,h([U(e.fr.e5?"fill-black80":"fill-white40")]),h([yn(Qr.fr)]))]));return o(N,z,h([n]))}),Pm=$(function(e,r){var n=o(xo,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),So(hd),Pd("Distraction Free Mode")]),h([yn(Qr.f3)])),a=o(N,h([U("absolute w-8 bottom-12")]),h([o(ki,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),Ti("https://twitter.com/AzizErkalSelman"),Mi("_blank")]),h([yn(Qr.fP)]))])),t=o(N,h([U("absolute w-8 bottom-2")]),h([o(ki,h([U("fill-githubCat40 hover:fill-githubCat"),Ti("https://github.com/erkal/elm-3d-playground-exploration"),Mi("_blank")]),h([yn(Qr.eR)]))]));return r.aL?o(N,h([U("fixed w-10 h-10 p-1")]),h([n])):o(N,z,h([o(N,h([U("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(N,h([U("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(ne,"height",be(e.cR.eX-80)+"px")]),h([o(Sa,_d,sm(ln(r.G).eA))])),o(N,h([U("absolute bottom-0 left-10 h-20"),o(ne,"width",e.cR.fV>600?"600px":be(e.cR.fV-40)+"px")]),h([o(Sa,wd,Sm(r.G))])),o(Lm,e,r)]))}),zm=y(function(e,r,n){var a=pd(n.G),t=ln(n.G);return o(N,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ne,"width",be(t.cR.fV)+"px"),o(ne,"height",be(t.cR.eX)+"px")]),h([o(N,h([U("fixed")]),h([o(Sa,qc(dd),o(e,t,a))])),o(N,h([xa("gui")]),h([o(Pm,t,n),o(Sa,sd,o(r,t,a))]))]))}),km=Xe(function(e,r,n,a,t,i){var c=$(function(u,v){return k(P(ud,r,i,u,v),zi)}),l=function(u){var v=o(Yc,n,u.e2);return k({aL:u.e2.cR.fV<500,G:o(vd,v,a)},zi)};return Ts({e1:l,fK:qc(fd(bs)),fQ:c,fT:o(zm,e,t)})}),Tm=R(function(e,r,n,a){return ye(km,e,r,n,a,$(function(t,i){return o(N,z,z)}),y(function(t,i,c){return c}))}),Dr=y(function(e,r,n){return{eD:n,fs:e,fB:r}}),Mm={fp:h([m(Dr,S(-3,3,0),S(0,0,0),h([S(0,0,0),S(1,0,0),S(0,1,0)])),m(Dr,S(0,3,0),S(0,0,0),h([S(0,0,0),S(1,0,0),S(0,1,0),S(0,2,0)])),m(Dr,S(3,3,0),S(0,0,0),h([S(0,0,0),S(1,1,0),S(0,1,0),S(0,2,0)])),m(Dr,S(-3,-1,0),S(0,0,0),h([S(0,0,0),S(0,1,0),S(1,1,0),S(1,2,0)])),m(Dr,S(3,0,0),S(0,0,0),h([S(0,0,0),S(1,0,0),S(0,0,1),S(0,1,1)])),m(Dr,S(-2,-3,0),S(0,0,0),h([S(0,0,0),S(1,0,0),S(0,0,1),S(1,1,0)])),m(Dr,S(2,-3,0),S(0,0,0),h([S(0,0,0),S(1,0,0),S(0,0,1),S(0,1,0)]))])},Dm=function(e){return{c1:Mm}},Am=$(function(e,r){return k(e,tl(r))}),Bm=y(function(e,r,n){return{av:n,e6:r,fg:e}}),zl=or,Fm=function(e){return m(Vn,$(function(r,n){var a=r.a,t=r.b;return m(_n,a,t,n)}),zl,e)},Vm=y(function(e,r,n){return m(Bm,e,r,Fm(n))}),it=Vm,ir=y(function(e,r,n){var a=r.a,t=r.b;return k(e,o(ol,k(a,t),n))}),Me=bv,Rm=h([m(it,"Camera",!0,h([m(ir,"camera distance",k(3,60),20),m(ir,"camera azimuth",k(0,2*Me),.6),m(ir,"camera elevation",k(-Me/2,Me/2),.4)])),m(it,"Parameters",!0,h([m(ir,"cube scale",k(.1,1),.95),m(ir,"edge width",k(.001,.5),.1)])),m(it,"Colors and light",!0,h([m(ir,"sunlight azimuth",k(0,2*Me),5.5),m(ir,"sunlight elevation",k(-Me/2,Me/2),-1),m(ir,"saturation",k(0,1),.6),m(ir,"lightning",k(0,1),.8),o(Am,"edge color",gl)]))]),Em=$(function(e,r){return r}),jm=Pr("p"),Wm=$(function(e,r){return o(N,h([o(ne,"min-width","320px"),o(ne,"max-width","500px"),o(ne,"margin","0 auto")]),h([o(N,h([U("m-2 text-center")]),h([we("The Soma Cube")])),o(jm,h([U("p-2 text-xs")]),h([o(N,h([o(ne,"color","darkred")]),h([we("Following controls are not implemented yet")])),o(N,z,h([we("Space Key to chose the next piece")])),o(N,z,h([we("Arrow keys to rotate the cube")])),o(N,z,h([we("WASDQE to move the cube")])),o(N,z,h([we("Shift + Arrow Keys to rotate the camera")]))]))]))}),Nm=$(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(yo,e,r.av))}),Gm=$(function(e,r){return o(dr,0,Po(o(Lo,Nm(e),r)))}),Hm=$(function(e,r){return o(Gm,e,r.eA)}),Oe=Hm,Xm=wv,Im=function(e){return e},xr=function(e){return e},Wt=function(e){var r=e;return-r},Um=$(function(e,r){var n=e,a=r;return{fX:n.f$*a.c5-n.c5*a.f$,f$:n.c5*a.fX-n.fX*a.c5,c5:n.fX*a.f$-n.f$*a.fX}}),kl=function(e){var r=e;return r.c3},Tl=function(e){var r=e;return r.c4},Jm=function(e){return o(Um,kl(e),Tl(e))},Xr=function(e){var r=e;return r.cz},Gr=gv,an=hv,la=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Gr(c),u=an(c),v=a.eH,s=v,d=s.fX*u,p=l*d,f=d*d,g=s.f$*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),L=s.c5*u,M=l*L,G=2*(w-M),j=2*(w+M),E=d*L,W=2*(E+b),H=2*(E-b),F=g*L,O=2*(F-p),K=2*(F+p),ce=L*L,$e=1-2*(x+ce),ie=1-2*(f+ce);return{fX:$e*i.fX+G*i.f$+W*i.c5,f$:j*i.fX+ie*i.f$+O*i.c5,c5:H*i.fX+K*i.f$+_*i.c5}}),Nn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Gr(c),u=an(c),v=a.cz,s=v,d=i.fX-s.fX,p=i.f$-s.f$,f=i.c5-s.c5,g=a.eH,b=g,w=b.fX*u,x=l*w,_=w*w,L=b.f$*u,M=l*L,G=w*L,j=L*L,E=1-2*(_+j),W=b.c5*u,H=l*W,F=2*(G-H),O=2*(G+H),K=w*W,ce=2*(K+M),$e=2*(K-M),ie=L*W,me=2*(ie-x),ke=2*(ie+x),Ce=W*W,hr=1-2*(j+Ce),_r=1-2*(_+Ce);return{fX:s.fX+hr*d+F*p+ce*f,f$:s.f$+O*d+_r*p+me*f,c5:s.c5+$e*d+ke*p+E*f}}),mr=function(e){return e},kr=function(e){var r=e;return r.c3},Tr=function(e){var r=e;return r.c4},Mr=function(e){var r=e;return r.c6},Ml=y(function(e,r,n){return mr({cz:m(Nn,e,r,Xr(n)),c3:m(la,e,r,kr(n)),c4:m(la,e,r,Tr(n)),c6:m(la,e,r,Mr(n))})}),Vi=y(function(e,r,n){return m(Ml,e(n),r,n)}),To=function(e){var r=e;return r.eH},Gn=$(function(e,r){var n=e,a=r;return{fX:a.fX+n.fX,f$:a.f$+n.f$,c5:a.c5+n.c5}}),Dl=$(function(e,r){return mr({cz:o(Gn,e,Xr(r)),c3:kr(r),c4:Tr(r),c6:Mr(r)})}),Om=$(function(e,r){var n=e,a=r;return{fX:n*a.fX,f$:n*a.f$,c5:n*a.c5}}),qm=y(function(e,r,n){return o(Dl,o(Om,r,e),n)}),Ym=y(function(e,r,n){return m(qm,To(e(n)),r,n)}),gr=$(function(e,r){return{eH:r,cz:e}}),Zm=function(e){var r=e;return o(gr,r.cz,r.c3)},Km=function(e){var r=e;return o(gr,r.cz,r.c4)},Qm=function(e){var r=e;return o(gr,r.cz,r.c6)},e0=function(e){var r=mr({cz:e.aR,c3:Tl(e.dl),c4:Jm(e.dl),c6:kl(e.dl)}),n=m(Ym,Qm,e.ca,m(Vi,Zm,Wt(e.bC),m(Vi,Km,e.bx,r)));return n},r0=function(e){return{$:0,a:e}},de=function(e){var r=e;return Z(r)},ua=function(e){var r=e;return .5*r},n0=_v,a0=function(e){var r=e;return n0(r)},t0=function(e){var r=ua(de(e.ej)),n=a0(r);return{cK:r0(n),c0:e.c0}},ar=function(e){return e},We={fX:0,f$:0,c5:0},Al=Vr,$r=function(e){return e},Bl=$r({fX:1,f$:0,c5:0}),Na=Bl,Mo=$r({fX:0,f$:0,c5:1}),Ga=Mo,o0=Al({cz:We,c3:Ga,c4:Na}),i0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.ca;return t0({ej:ar(2*Xm(.5)),c0:e0({bx:ar(n),ca:xr(t),bC:ar(a),aR:Im(r),dl:o0})})},c0=function(e){return i0({bx:o(Oe,"camera azimuth",e),ca:o(Oe,"camera distance",e),bC:o(Oe,"camera elevation",e),aR:{fX:.5,f$:1,c5:0}})},Hn=$(function(e,r){return{$:0,a:e,b:r}}),ct=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),lt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),fr=$(function(e,r){var n=e,a=r;return a-n}),l0=$r({fX:-1,f$:0,c5:0}),u0=$r({fX:0,f$:-1,c5:0}),Fl=$r({fX:0,f$:0,c5:-1}),Vl=$r({fX:0,f$:1,c5:0}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fX:a,f$:t,c5:i}}),v0=Xe(function(e,r,n,a,t,i){var c=o(ct,n,i)?Mo:Fl,l=o(ct,r,t)?Vl:u0,u=o(ct,e,a)?Bl:l0,v=S(de(o(fr,e,a)),de(o(fr,r,t)),de(o(fr,n,i))),s=m(pe,o(lt,e,a),o(lt,r,t),o(lt,n,i)),d=mr({cz:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Rr=function(e){var r=e;return r.fX},Er=function(e){var r=e;return r.f$},jr=function(e){var r=e;return r.c5},Rl=$(function(e,r){return ye(v0,Rr(e),Er(e),jr(e),Rr(r),Er(r),jr(r))}),Mn=y(function(e,r,n){return{fX:e,f$:r,c5:n}}),$0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=S(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Hn,e,o(Rl,m(Mn,-c,-l,-u),m(Mn,c,l,u)))}),wr=function(e){return e*Me/180},Ha=function(e){return{$:5,a:e}},za=function(e){return Ha(e)},f0=R(function(e,r,n,a){var t=S(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),p=s(i),f=s(i+1/3);return P(jn,f,p,d,a)}),El=y(function(e,r,n){return P(f0,e,r,n,1)}),Nt=function(e){return{$:0,a:e}},jl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Wl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),ut=function(e){return m(Wl,0,1,e<=.04045?e/12.92:o(Wn,(e+.055)/1.055,2.4))},Xn=ef,s0=function(e){var r=Co(e),n=r.cL,a=r.cb,t=r.b4;return m(Xn,ut(n),ut(a),ut(t))},Nl=function(e){return m(jl,0,Nt(s0(e)),Nt(0))},Do=$(function(e,r){return{$:2,a:e,b:r}}),Ao=$(function(e,r){return{$:4,a:e,b:r}}),Bo=$(function(e,r){return{$:3,a:e,b:r}}),Fo=$(function(e,r){return{$:1,a:e,b:r}}),d0=y(function(e,r,n){return{fX:e,f$:r,c5:n}}),m0=function(e){var r=e;return r},Xa=function(e){var r=e;return m0(r.er)},Ia=function(e){var r=e;return r.aK},p0=$(function(e,r){return{er:o(Dl,e,Xa(r)),aK:Ia(r)}}),b0=$(function(e,r){var n=r;return o(gr,o(Gn,e,n.cz),n.eH)}),g0=$(function(e,r){var n=r;return{k:o(b0,e,n.k),fa:n.fa,fu:n.fu}}),Vo=function(e){var r=e;return r},h0=function(e){return e},Ro=$(function(e,r){var n=Vo(r),a=n.a,t=n.b;return h0(k(e(a),e(t)))}),_0=$(function(e,r){return o(Ro,Gn(e),r)}),Ua=function(e){var r=e;return r.ey},Ja=function(e){var r=e;return r.fu},Eo=$(function(e,r){return{ey:r,fu:de(e)}}),w0=$(function(e,r){return o(Eo,Ja(r),o(Gn,e,Ua(r)))}),jo=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return S(e(a),e(t),e(i))}),y0=$(function(e,r){return o(jo,Gn(e),r)}),Oa=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=m(d0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Hn,s,o(p0,i,c));case 1:var s=r.a,l=r.b;return o(Fo,s,o(y0,i,l));case 3:var s=r.a,u=r.b;return o(Bo,s,o(w0,i,u));case 2:var s=r.a,v=r.b;return o(Do,s,o(g0,i,v));case 4:var s=r.a,d=r.b;return o(Ao,s,o(_0,i,d));default:var p=r.a;return Ha(o(re,Oa(S(n,a,t)),p))}}),Yr=function(e){return Oa(S(e,0,0))},Zr=function(e){return Oa(S(0,0,e))},x0=y(function(e,r,n){return{er:m(Ml,e,r,Xa(n)),aK:Ia(n)}}),S0=$(function(e,r){var n=o(Nn,e,r),a=o(la,e,r);return function(t){var i=t;return o(gr,n(i.cz),a(i.eH))}}),C0=y(function(e,r,n){var a=n;return{k:m(S0,e,r,a.k),fa:a.fa,fu:a.fu}}),L0=y(function(e,r,n){return o(Ro,o(Nn,e,r),n)}),P0=y(function(e,r,n){return o(Eo,Ja(n),m(Nn,e,r,Ua(n)))}),z0=y(function(e,r,n){return o(jo,o(Nn,e,r),n)}),qa=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Hn,l,m(x0,e,r,a));case 1:var l=n.a,t=n.b;return o(Fo,l,m(z0,e,r,t));case 3:var l=n.a,i=n.b;return o(Bo,l,m(P0,e,r,i));case 2:var l=n.a,c=n.b;return o(Do,l,m(C0,e,r,c));case 4:var l=n.a,u=n.b;return o(Ao,l,m(L0,e,r,u));default:var v=n.a;return Ha(o(re,o(qa,e,r),v))}}),k0=o(gr,We,Na),Gl=$(function(e,r){return m(qa,k0,ar(e),r)}),Wo=Vl,T0=o(gr,We,Wo),va=$(function(e,r){return m(qa,T0,ar(e),r)}),M0=o(gr,We,Ga),Hl=$(function(e,r){return m(qa,M0,ar(e),r)}),D0=$(function(e,r){return(r-Jc(r/e)*e)/e}),A0=function(e){return 2*Me*e},B0=R(function(e,r,n,a){return e+(r-e)*(1+Gr(A0(o(D0,n,a))))/2}),F0=function(e){var r=o(Oe,"edge width",e),n=m(El,P(B0,0,1,7,e.db),o(Oe,"saturation",e),o(Oe,"lightning",e)),a=o($0,Nl(n),S(r,3+r,r)),t=za(h([o(Yr,1.5,o(Zr,1.5,a)),o(va,wr(90),o(Yr,1.5,o(Zr,1.5,a))),o(va,wr(180),o(Yr,1.5,o(Zr,1.5,a))),o(va,wr(270),o(Yr,1.5,o(Zr,1.5,a)))]));return za(h([t,o(Gl,wr(90),t),o(Hl,wr(90),t)]))},V0=$(function(e,r){var n=r/2;return o(Hn,e,o(Rl,m(Mn,-n,-n,-n),m(Mn,n,n,n)))}),Xl=function(e){return Oa(S(0,e,0))},Q=$(function(e,r){var n=r;return e*n}),sr=function(e){var r=e;return{fX:-r.fX,f$:-r.f$,c5:-r.c5}},In=y(function(e,r,n){var a=e,t=n;return{fX:a.fX+r*(t.fX-a.fX),f$:a.f$+r*(t.f$-a.f$),c5:a.c5+r*(t.c5-a.c5)}}),R0=y(function(e,r,n){var a=Xa(n),t=kr(a),i=Tr(a),c=Mr(a),l=m(In,e,r,Xr(a)),u=r>=0?mr({cz:l,c3:t,c4:i,c6:c}):mr({cz:l,c3:sr(t),c4:sr(i),c6:sr(c)}),v=Ia(n),s=v.a,d=v.b,p=v.c,f=de(o(Q,r,s)),g=de(o(Q,r,d)),b=de(o(Q,r,p));return{er:u,aK:S(f,g,b)}}),No=function(e){var r=e;return r.k},Ri=function(e){return To(No(e))},Il=function(e){var r=e;return r.cz},E0=function(e){return Il(No(e))},Ul=function(e){var r=e;return r.fa},Jl=function(e){var r=e;return r.fu},j0=y(function(e,r,n){var a=de(o(Q,r,Jl(n))),t=de(o(Q,r,Ul(n))),i=r>=0?Ri(n):sr(Ri(n)),c=m(In,e,r,E0(n));return{k:o(gr,c,i),fa:t,fu:a}}),W0=y(function(e,r,n){return o(Ro,o(In,e,r),n)}),N0=y(function(e,r,n){return o(Eo,o(Q,Z(r),Ja(n)),m(In,e,r,Ua(n)))}),G0=y(function(e,r,n){return o(jo,o(In,e,r),n)}),Ol=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Hn,c,m(R0,We,e,n));case 1:var c=r.a,a=r.b;return o(Fo,c,m(G0,We,e,a));case 3:var c=r.a,t=r.b;return o(Bo,c,m(N0,We,e,t));case 2:var c=r.a,i=r.b;return o(Do,c,m(j0,We,e,i));case 4:var c=r.a,l=r.b;return o(Ao,c,m(W0,We,e,l));default:var u=r.a;return Ha(o(re,Ol(e),u))}}),H0=y(function(e,r,n){var a=n.a,t=n.b,i=n.c;return o(Zr,i,o(Xl,t,o(Yr,a,o(Ol,o(Oe,"cube scale",e),o(V0,Nl(r),1)))))}),X0=y(function(e,r,n){var a=n.fB,t=a.a,i=a.b,c=a.c,l=n.fs,u=l.a,v=l.b,s=l.c;return o(Zr,s,o(Xl,v,o(Yr,u,o(Hl,c*wr(90),o(va,i*wr(90),o(Gl,t*wr(90),za(o(re,o(H0,e,r),n.eD))))))))}),Gt=4294967295>>>32-Pn,Ht=uv,I0=y(function(e,r,n){e:for(;;){var a=Gt&r>>>e,t=o(Ht,a,n);if(t.$){var v=t.a;return o(Ht,Gt&r,v)}else{var i=t.a,c=e-Pn,l=r,u=i;e=c,r=l,n=u;continue e}}}),U0=function(e){return e>>>5<<5},ql=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,U0(n))>-1?oe(o(Ht,Gt&e,i)):oe(m(I0,a,e,t))}),J0=P(jn,211/255,215/255,207/255,1),Yl=function(e){var r=e.a;return r},O0=$(function(e,r){return o(dr,J0,o(ql,o(Tn,Yl(r),e),r))}),q0=y(function(e,r,n){e:for(;;){var a=o(po,Ve,e),t=a.a,i=a.b;if(J(Tt(t),Ve)<0)return o(Oc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Uc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ya=function(e){return e.b?m(q0,e,z,0):Xc},Y0=function(e){var r=8,n=function(a){return m(El,a/r,o(Oe,"saturation",e),o(Oe,"lightning",e))};return Ya(o(re,n,o(Nr,0,r)))},Z0=$(function(e,r){var n=function(a){return o(X0,e,o(O0,a,Y0(e)))};return za(o(fo,n,r.c1.fp))}),K0=function(e){return e},Q0=function(e){return xr(.01*e)},Ei=function(e){return e},ep=function(e){return e},rp=function(e){return{$:0,a:e}},np=rp,ap={$:3},tp=ap,op=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ip=op,cp=$(function(e,r){return r.b?m(br,B,r,e):e}),Ge=function(e){return m(br,cp,z,e)},Go=$(function(e,r){return Ge(o(re,e,r))}),lp=function(e){return{$:1,a:e}},up=lp,vp=function(e){return o(Fn,"height",Ae(e))},$p=function(e){return x$(P$(e))},fp=$p,sp=function(e){return{$:2,a:e}},dp=sp,mp=function(e){return o(Br,"",e)},pp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return qe(l*1e3)/1e3},c=function(l){return qe(l*1e4)/100};return mp(h(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},bp=$(function(e,r){switch(r.$){case 0:return o(Hf,e,r);case 1:return o(Xf,e,r);case 2:return o(If,e,r);case 3:return o(Uf,e,r);case 4:return o(Jf,e,r);default:return o(Of,e,r)}}),gp=$(function(e,r){switch(r.$){case 0:return o(hf,e,r);case 1:return o(_f,e,r);case 2:return o(wf,e,r);case 3:return o(yf,e,r);case 4:return o(xf,e,r);case 5:return o(Sf,e,r);case 6:return o(Cf,e,r);case 7:return o(Lf,e,r);default:return Pf(e)}}),hp=y(function(e,r,n){return m(Gf,e,r,n)}),ji=function(e){var r=e;return r},un=cf,vt=P(un,1,1,1,1),Ye=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),_p=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),wp=$(function(e,r){var n=e,a=r.fX,t=r.f$;return m(_p,n*a/t,n,n*(1-a-t)/t)}),yp=function(e){var r=e.a,n=e.b,a=e.c;return m(Xn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ho=$(function(e,r){return yp(o(wp,e,r))}),Zl=$(function(e,r){return{dp:Sr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),Qe=sf,xp=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},$t=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=P(un,a.bW,a.bW,a.bW,i);return ye(t,e,c,xp(a),a.dp,r,n)}),Kl=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Zl,c,a),p=l,f=i;e=u,r=v,n=s,a=d,t=p,i=f;continue e;case 1:var g=t.b,b=o(B,C($t,e,r,n,a,g),i.M);return{M:b,U:i.U,fD:i.fD};case 3:var w=t.b,x=o(B,C($t,e,r,n,a,w),i.U);return{M:i.M,U:x,fD:i.fD};case 2:var _=t.a,L=o(B,C($t,e,r,n,a,_),i.fD);return{M:i.M,U:i.U,fD:L};default:var M=t.a;return m(Vn,P(Kl,e,r,n,a),i,M)}}),Sp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ql=Sp,Xo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Cp=function(e){var r=e.Z,n=e.W,a=e.V;return P(Xo,518,r,n,a)},Lp=$(function(e,r){return{$:6,a:e,b:r}}),Pp=Lp,eu=h([Cp({V:1,W:0,Z:!1}),P(Ql,!1,!1,!1,!1),o(Pp,0,1)]),tn=519,Io=8,ru=15,en=7681,zp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=gf,kp=$(function(e,r){return{$:0,a:e,b:r}}),Tp=kp({df:1,$7:0,dV:5}),De=K$,Mp=Tp(h([{fs:o(De,-1,-1)},{fs:o(De,1,-1)},{fs:o(De,-1,1)},{fs:o(De,1,1)}])),Dp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fs"},uniforms:{}},Ap=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Uo=y(function(e,r,n){var a=e.cM,t=e.cn,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,m(Ap,a,t,i)))}),Jo=function(e){return m(Uo,{cn:e.cn,cM:e.cM,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Oo=function(e){return C(ae,h([Jo(e),P(Ql,!1,!1,!1,!1)]),Dp,zp,Mp,{})},Bp=Oo({a8:en,cn:0,cM:Io,bl:tn,c2:ru,bt:en,bu:en}),Fp=516,Wi=5386,Se=7680,Vp=function(e){return o(Wn,2,e+4)},nu=function(e){return Oo({a8:Se,cn:ru,cM:Io,bl:Fp,c2:Vp(e),bt:Wi,bu:Wi})},Rp=y(function(e,r,n){return Ge(h([m(Ye,e,n,eu),h([nu(r),Bp])]))}),Ep=$(function(e,r){return Ge(o(fo,Rp(e),r))}),jp=function(e){var r=e.Z,n=e.W,a=e.V;return P(Xo,513,r,n,a)},Wp=jp({V:1,W:0,Z:!0}),Np=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Gp=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,p=u.c,f=v.a,g=v.b,b=v.c;return Np(s)(d)(p)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Hp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ni=$(function(e,r){var n=e,a=r;return m(Hp,32774,n,a)}),Xp=1,Gi=771,Ip=770,qo=Gp({bv:0,aH:o(Ni,Xp,Gi),by:0,bA:o(Ni,Ip,Gi),bF:0,bU:0}),Ir=h([Wp,qo]),Up=function(e){var r=e;return r.dO},Jp=function(e){var r=e;return r.dP},au=function(e){var r=e;return r.dQ},Op=function(e){var r=e;return r.dR},qp=function(e){var r=e;return r.dS},tu=function(e){var r=e;return r.dT},ou=function(e){return S(o(fr,Op(e),Up(e)),o(fr,qp(e),Jp(e)),o(fr,tu(e),au(e)))},Hi=function(e){var r=e;return Xr(r)},Yp=function(e){return e},Zp=function(e){return mr({cz:Yp({fX:e.H,f$:e.I,c5:e.J}),c3:$r({fX:e.q,f$:e.r,c5:e.s}),c4:$r({fX:e.t,f$:e.u,c5:e.v}),c6:$r({fX:e.w,f$:e.x,c5:e.y})})},ft=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fX:a.fX*v.fX+a.f$*v.f$+a.c5*v.c5,f$:a.fX*l.fX+a.f$*l.f$+a.c5*l.c5,c5:a.fX*i.fX+a.f$*i.f$+a.c5*i.c5}}),iu=$(function(e,r){var n=e,a=r,t=n.cz,i=t,c=a.fX-i.fX,l=a.f$-i.f$,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,p=d,f=n.c3,g=f;return{fX:c*g.fX+l*g.f$+u*g.c5,f$:c*p.fX+l*p.f$+u*p.c5,c5:c*s.fX+l*s.f$+u*s.c5}}),cu=$(function(e,r){return{cz:o(iu,e,Xr(r)),c3:o(ft,e,kr(r)),c4:o(ft,e,Tr(r)),c6:o(ft,e,Mr(r))}}),ka=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(nr,n,a)}),$a=$(function(e,r){return J(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o($a,n,a)}),Kp=$(function(e,r){var n=ka(r),a=ka(e);return{dO:o(le,a.dO,n.dO),dP:o(le,a.dP,n.dP),dQ:o(le,a.dQ,n.dQ),dR:o(se,a.dR,n.dR),dS:o(se,a.dS,n.dS),dT:o(se,a.dT,n.dT)}}),He=function(e){var r=e;return r},Qp=function(e){var r=e;return S(r.fX,r.f$,r.c5)},xn=$(function(e,r){var n=e,a=r;return a+n}),e3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ua(de(a)),c=ua(de(n)),l=ua(de(t)),u=Qp(r),v=u.a,s=u.b,d=u.c;return{dO:o(xn,c,v),dP:o(xn,i,s),dQ:o(xn,l,d),dR:o(fr,c,v),dS:o(fr,i,s),dT:o(fr,l,d)}}),Xi=R(function(e,r,n,a){var t=n.ey,i=2*n.eV*r,c=2*n.eU*r,l=2*n.eT*r,u=t.c5*r,v=t.f$*r,s=t.fX*r,d=He(Mr(e)),p=Z(l*d.fX)+Z(c*d.f$)+Z(i*d.c5),f=He(Tr(e)),g=Z(l*f.fX)+Z(c*f.f$)+Z(i*f.c5),b=He(kr(e)),w=Z(l*b.fX)+Z(c*b.f$)+Z(i*b.c5),x=o(e3,S(w,g,p),o(iu,e,m(Mn,s,v,u)));if(a.$)return oe(x);var _=a.a;return oe(o(Kp,_,x))}),Xt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=P(Xi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=P(Xi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=P(Xt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(cu,Zp(v),e),p=r*v.bW,f=e,g=r,b=P(Xt,d,p,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),vn=rf,$n=nf,fn=af,lu=function(e){return{$:4,a:e}},r3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Un=function(e){return lu(o(r3,e,z))},n3={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},a3=function(e){var r=e;return r},Ii=Oo({a8:en,cn:0,cM:Io,bl:tn,c2:255,bt:en,bu:en}),Kr=Pv,ur=0,t3=function(e){var r=e,n=o(nr,Z(r.fX),o(nr,Z(r.f$),Z(r.c5)));if(n){var a=r.c5/n,t=r.f$/n,i=r.fX/n,c=Kr(i*i+t*t+a*a);return c*n}else return ur},Le={by:0,ex:!1,bF:0,cI:0,bU:0,cY:0,fX:0,f$:0,c5:0},Ee=$(function(e,r){var n=e,a=r;return Qe({dx:n.fX,dy:n.bU,dz:a.fX,dA:a.bU,dB:n.f$,dC:n.bF,dD:a.f$,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cY,dK:n.cI,dL:a.cY,dM:a.cI})}),bn=k({bd:o(Ee,Le,Le),bK:o(Ee,Le,Le),bL:o(Ee,Le,Le),bM:o(Ee,Le,Le)},P(un,0,0,0,0)),uu=514,vu=function(e){var r=e.Z,n=e.W,a=e.V;return P(Xo,515,r,n,a)},$u=240,o3=h([vu({V:1,W:0,Z:!0}),Jo({a8:Se,cn:$u,cM:0,bl:uu,c2:0,bt:Se,bu:Se}),qo]),i3=$(function(e,r){var n=e,a=r.fh,t=r.eQ,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cK;if(s.$){var p=s.a;return Dt(v)?Qe({dx:2/(i*p),dy:0,dz:0,dA:0,dB:0,dC:2/p,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*p),dy:0,dz:0,dA:0,dB:0,dC:2/p,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return Dt(v)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Kn=$(function(e,r){return(1&e>>r)===1?0:1}),c3=function(e){return h([vu({V:1,W:0,Z:!0}),Jo({a8:Se,cn:$u,cM:e,bl:uu,c2:0,bt:Se,bu:Se}),qo])},l3=y(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=P(un,o(Kn,a,0),o(Kn,a,1),o(Kn,a,2),o(Kn,a,3));return m(Ye,e,k(r,i),c3(t))},o(Nr,1,o(Wn,2,n)-1)))}),rn=function(e){var r=e;return r},u3=df,Ui=function(e){var r=e;return sr(Mr(r))},v3={cz:We,c3:Na,c4:Wo,c6:Ga},Za=function(e){var r=e;return r},$3=function(e){var r=Za(Xr(e)),n=He(Mr(e)),a=He(Tr(e)),t=He(kr(e));return Qe({dx:t.fX,dy:a.fX,dz:n.fX,dA:r.fX,dB:t.f$,dC:a.f$,dD:n.f$,dE:r.f$,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},f3=$(function(e,r){var n=r;return $3(o(cu,n,e))}),s3=function(e){return o(f3,v3,e)},d3=function(e){var r=e;return r.c0},m3=function(e){var r=e;return kr(r)},p3=y(function(e,r,n){var a=e,t=r,i=n;return{fX:a,f$:t,c5:i}}),b3=function(e){var r=e;return Tr(r)},g3=function(e){var r=d3(e.ev),n=mr({cz:Hi(r),c3:m3(r),c4:b3(r),c6:sr(Ui(r))}),a=Un(e.aP),t=a,i=P(Xt,n,1,q,h([t]));if(i.$===1)return z;var c=i.a,l=s3(r),u=o(Q,.99,o(le,de(e.aJ),Wt(au(c)))),v=ou(c),s=v.a,d=v.b,p=v.c,f=t3(m(p3,s,d,p)),g=o(Q,1.01,o(xn,f,Wt(tu(c)))),b=o(i3,e.ev,{eq:e.eq,eQ:g,fh:u}),w=u3(b).dM,x=w?He(sr(Ui(r))):rn(Hi(r)),_=function(){var ie=e.bY;switch(ie.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var me=ie.a;return k(3,me);case 4:var me=ie.a;return k(4,me);default:return k(5,0)}}(),L=_.a,M=_.b,G=e.bD,j=G,E=o(Ho,j,e.b_),W=E,H=Qe({dx:0,dy:x.fX,dz:vn(W),dA:e.ec,dB:0,dC:x.f$,dD:$n(W),dE:a3(f),dF:0,dG:x.c5,dH:fn(W),dI:L,dJ:0,dK:w,dL:0,dM:M}),F=ye(Kl,H,l,b,n3,t,{M:z,U:z,fD:z}),O=e.bJ;switch(O.$){case 0:var K=O.a;return Ge(h([m(Ye,F.M,k(K,vt),Ir),m(Ye,F.U,bn,Ir)]));case 1:var K=O.a;return Ge(h([m(Ye,F.M,bn,Ir),h([Ii]),m(Ye,F.fD,K.bd,eu),h([nu(0)]),m(Ye,F.M,k(K,vt),o3),m(Ye,F.U,bn,Ir)]));default:var ce=O.a,$e=O.b;return Ge(h([m(Ye,F.M,k($e,vt),Ir),h([Ii]),o(Ep,F.fD,ce),m(l3,F.M,$e,Wr(ce)),m(Ye,F.U,bn,Ir)]))}},h3=function(e){return o(Fn,"width",Ae(e))},_3=$(function(e,r){var n=h([up(1),dp(0),np(!0),P(ip,0,0,0,0)]),a=function(){var L=e.b$;switch(L.$){case 0:return S(n,"0",1);case 1:return S(o(B,tp,n),"1",1);default:var M=L.a;return S(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=ji(v),d=o(ne,"height",Ae(s)+"px"),p=ji(u),f=p/s,g=o(Go,function(L){return g3({eq:f,ev:e.ev,aJ:e.aJ,aP:L.aP,bD:L.bD,bJ:L.bJ,ec:c,bY:L.bY,b_:L.b_})},r),b=o(ne,"width",Ae(p)+"px"),w=e.aI,x=w,_=pp(x);return m(fp,"div",h([o(ne,"padding","0px"),b,d]),h([k(i,m(hp,t,h([h3(qe(p*c)),vp(qe(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),w3=function(e){return o(_3,{b$:e.b$,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bY:e.bY,b_:e.b_}]))},fu=function(e){return e},Ji=fu({fX:.31271,f$:.32902}),y3=$(function(e,r){var n=e,a=He(r.eH),t=a.fX,i=a.f$,c=a.c5,l=o(Ho,r.cc,r.b5),u=l;return{by:fn(u),ex:n,bF:$n(u),cI:0,bU:vn(u),cY:1,fX:-t,f$:-i,c5:-c}}),x3=function(e){return e},S3=function(e){return x3(1.2*o(Wn,2,e))},st=function(e){return e},C3={$:0},L3=C3,su=function(e){return e},P3=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Oi=function(e){var r=e;return r},z3=function(e){e:for(;;){if(Sr(e.e3,ur)&&Sr(e.e4,ur))return Le;if(o(P3,de(e.e3),de(e.e4))){var r={b5:e.b5,e3:e.e4,e4:e.e3,ei:sr(e.ei)};e=r;continue e}else{var n=Z(Oi(e.e4)/Me),a=Z(Oi(e.e3)/Me),t=He(e.ei),i=t.fX,c=t.f$,l=t.c5,u=o(Ho,su(1),e.b5),v=u;return{by:a*fn(v),ex:!1,bF:a*$n(v),cI:n/a,bU:a*vn(v),cY:3,fX:i,f$:c,c5:l}}}},qi=function(e){return z3({b5:e.b5,e3:e.cc,e4:ur,ei:e.ei})},k3=function(e){var r=e;return r},du=function(e){var r=m(Wl,1667,25e3,k3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return fu({fX:n,f$:a})},mu=function(e){return e},T3=du(mu(12e3)),M3=du(mu(5600)),D3=function(e){return{$:2,a:e}},A3=function(e){return D3(e)},B3=$(function(e,r){return{$:2,a:e,b:r}}),pu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},F3=function(e){var r=e;return r.ex},V3=pu(bn.a),R3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(B,a,i),c):k(i,o(B,a,c))});return m(br,n,k(z,z),r)}),E3=function(e){var r=e;return Qe({dx:r.fX,dy:r.bU,dz:0,dA:0,dB:r.f$,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cY,dK:r.cI,dL:0,dM:0})},j3=ee(function(e,r,n,a,t,i,c,l){var u=o(R3,F3,h([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=ue(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var p=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(B3,o(re,E3,v),{bd:o(Ee,p,g),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return V3}else return pu({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),W3=y(function(e,r,n){return Ba(j3,e,r,n,Le,Le,Le,Le,Le)}),N3=function(e){var r=o(y3,ep(e.fD),{b5:M3,eH:e.fM,cc:st(8e4)}),n=qi({b5:T3,cc:st(2e4),ei:e.ei}),a=qi({b5:Ji,cc:st(15e3),ei:sr(e.ei)}),t=m(W3,r,n,a);return w3({b$:A3(e.b9),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:S3(15),bJ:t,bY:L3,b_:Ji})},bu=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),G3=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),gu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),hu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),H3=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),X3=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),I3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Yo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return P(I3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return P(bu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return P(G3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return P(gu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return P(X3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return P(hu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return P(H3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Zo={$:0},U3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ka(c(u)),d=o(se,s.dR,e),p=o(le,s.dO,r),f=o(se,s.dS,n),g=o(le,s.dP,a),b=o(se,s.dT,t),w=o(le,s.dQ,i),x=c,_=v;e=d,r=p,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),J3=y(function(e,r,n){var a=ka(e(r));return Ba(U3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),dt=$(function(e,r){var n=e,a=r;return J(a,n)<1}),_u=function(e){return o(dt,e.dO,e.dR)&&o(dt,e.dP,e.dS)&&o(dt,e.dQ,e.dT)?e:{dO:o(le,e.dR,e.dO),dP:o(le,e.dS,e.dP),dQ:o(le,e.dT,e.dQ),dR:o(se,e.dR,e.dO),dS:o(se,e.dS,e.dP),dT:o(se,e.dT,e.dQ)}},Dn=function(e){var r=e;return r},wu=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Rr(n),c=Er(n),l=jr(n),u=Rr(a),v=Er(a),s=jr(a),d=Rr(t),p=Er(t),f=jr(t);return _u({dO:o(le,i,o(le,u,d)),dP:o(le,c,o(le,v,p)),dQ:o(le,l,o(le,s,f)),dR:o(se,i,o(se,u,d)),dS:o(se,c,o(se,v,p)),dT:o(se,l,o(se,s,f))})},yu=tf,Pe=function(e){return yu(Za(e))},xu=function(e){var r=e;return r},Ka=function(e){return yu(xu(e))},O3=$(function(e,r){var n=e,a=r;return{fX:a.f$*n.c5-a.c5*n.f$,f$:a.c5*n.fX-a.fX*n.c5,c5:a.fX*n.f$-a.f$*n.fX}}),It=$(function(e,r){var n=e,a=r;return{fX:a.fX-n.fX,f$:a.f$-n.f$,c5:a.c5-n.c5}}),q3={fX:0,f$:0,c5:0},Y3=$(function(e,r){var n=e,a=r,t=o(nr,Z(a.fX),o(nr,Z(a.f$),Z(a.c5)));if(t){var i=a.c5/t,c=a.f$/t,l=a.fX/t,u=Kr(l*l+c*c+i*i);return{fX:n*l/u,f$:n*c/u,c5:n*i/u}}else return q3}),Z3=Y3(su(1)),Su=y(function(e,r,n){var a=o(It,r,n),t=o(It,e,r);return Z3(o(O3,a,t))}),K3=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Ka(m(Su,n,a,t));return S({o:i,fs:Pe(n)},{o:i,fs:Pe(a)},{o:i,fs:Pe(t)})},Q3=$(function(e,r){return{$:2,a:e,b:r}}),Cu=Q3({df:3,$7:0,dV:4}),eb=function(e){if(e.b){var r=e.a,n=e.b,a=Cu(o(re,K3,e)),t=m(J3,wu,r,n);return P(bu,t,e,a,0)}else return Zo},Re=y(function(e,r,n){return S(e,r,n)}),Lu=function(){var e=xr(1),r=xr(1),n=xr(1),a=o(Q,-.5,e),t=o(Q,-.5,r),i=o(Q,-.5,n),c=m(pe,i,t,a),l=o(Q,.5,e),u=m(pe,i,t,l),v=o(Q,.5,r),s=m(pe,i,v,a),d=m(pe,i,v,l),p=o(Q,.5,n),f=m(pe,p,t,a),g=m(pe,p,v,a),b=m(pe,p,t,l),w=m(pe,p,v,l);return Yo(eb(h([m(Re,c,g,f),m(Re,c,s,g),m(Re,u,b,w),m(Re,u,w,d),m(Re,f,g,w),m(Re,f,w,b),m(Re,c,d,s),m(Re,c,u,d),m(Re,c,f,b),m(Re,c,b,u),m(Re,s,w,g),m(Re,s,d,w)])))}(),ea={$:0},rb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),nb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ka(m(Su,u,l,c)),s={o:v,fs:Pe(u)},d={o:v,fs:Pe(l)},p={o:v,fs:Pe(c)};return o(B,s,o(B,d,o(B,p,n)))}),Ko=function(e){var r=e;return r.D},ab=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return oe(m(e,t,i,c))}),Qo=function(e){var r=e;return r.ah},mt=$(function(e,r){return o(ql,e,Qo(r))}),tb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(ab,y(function(c,l,u){return S(c,l,u)}),o(mt,a,e),o(mt,t,e),o(mt,i,e))};return o(Lo,r,Ko(e))},ob=y(function(e,r,n){return e(r(n))}),ib=$(function(e,r){return!o(il,o(ob,Ms,e),r)}),cb=$(function(e,r){return m(br,$(function(n,a){return e(n)?o(B,n,a):a}),z,r)}),Pu=$(function(e,r){var n=Yl(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(ib,a,r)?{D:r,ah:e}:{D:o(cb,a,r),ah:e}}),lb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Jn=lb({df:1,$7:3,dV:4}),fa=$(function(e,r){var n=rn(r),a=rn(e);return k(S(a.fX,a.f$,a.c5),S(n.fX,n.f$,n.c5))}),Yi=m(Xn,0,0,0),pt=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(yo,o(fa,e,r),t);if(v.$){var d={o:Yi,fs:Pe(r)},p={o:Yi,fs:Pe(e)},f=u+1,g=u;return S(o(B,S(n,g,f),o(B,S(n,f,a),c)),o(B,d,o(B,p,l)),u+2)}else{var s=v.a;return S(o(B,S(n,s,a),c),l,u)}}),ub=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),p=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,L=a+3,M=ye(pt,s,p,f,b,r,ye(pt,d,s,g,f,r,ye(pt,p,d,b,g,r,t)));e=w,r=x,n=_,a=L,t=M;continue e}else{var G=t,j=G.a,E=G.b;return k(j,Fe(E))}}),vb=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),p=e(c),f=n+2,g=n+1,b=n,w=m(_n,o(fa,p,s),f,m(_n,o(fa,s,d),g,m(_n,o(fa,d,p),b,t))),x=o(B,S(b,g,f),a),_=e,L=v,M=n+3,G=x,j=w;e=_,r=L,n=M,a=G,t=j;continue e}else return S(a,t,n)}),Ar=y(function(e,r,n){var a=tb(n),t=m(br,nb(r),z,a),i=C(vb,r,a,0,z,zl),c=i.a,l=i.b,u=i.c,v=C(ub,r,l,a,0,S(c,z,u)),s=v.a,d=v.b,p=Pl(d)?t:ue(t,d);return m(rb,e,o(Pu,Ya(p),s),o(Jn,p,s))}),Ut=function(e){return{D:o(re,function(r){return S(3*r,3*r+1,3*r+2)},o(Nr,0,Wr(e)-1)),ah:Ya(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},zu=function(e){switch(e.$){case 0:return ea;case 1:var a=e.a,r=e.b,n=o(re,Dn,r);return m(Ar,a,Vr,Ut(n));case 2:var a=e.a,r=e.b,n=o(re,Dn,r);return m(Ar,a,Vr,Ut(n));case 3:var a=e.a,t=e.b;return m(Ar,a,Vr,t);case 4:var a=e.a,t=e.b;return m(Ar,a,function(i){return i.fs},t);case 5:var a=e.a,t=e.b;return m(Ar,a,function(i){return i.fs},t);case 6:var a=e.a,t=e.b;return m(Ar,a,function(i){return i.fs},t);case 7:var a=e.a,t=e.b;return m(Ar,a,function(i){return i.fs},t);case 8:return ea;case 9:return ea;default:return ea}},Zi=zu(Lu),ku={$:0},T=ku,ge=$(function(e,r){return{$:1,a:e,b:r}}),$b={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},fb=1029,sb=function(e){return{$:5,a:e}},Tu=function(e){var r=e;return sb(r)},db=Tu(fb),mb=1028,pb=Tu(mb),ze=y(function(e,r,n){return r===1?e?o(B,db,n):o(B,pb,n):n}),Mu={src:`
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
    `,attributes:{position:"fs",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bt=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return C(ae,m(ze,l,a,d),Mu,$b,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),ei={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Du={src:`
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
    `,attributes:{position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return C(ae,m(ze,l,a,d),Du,ei,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Au=$(function(e,r){return{$:3,a:e,b:r}}),bb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Bu={src:`
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
    `,attributes:{position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},gb=R(function(e,r,n,a){return o(Au,n,ee(function(t,i,c,l,u,v,s,d){return C(ae,d,Bu,bb,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ri={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},On=function(e){var r=e;return r},Qa=of,lr=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,p){return C(ae,m(ze,u,t,p),Du,ri,a,{aN:o(Qa,On(r),e),b:l,c,d:s,e:i,f:v})}))}),hb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},_b=he(function(e,r,n,a,t){return o(Au,a,ee(function(i,c,l,u,v,s,d,p){return C(ae,p,Bu,hb,t,{aN:o(Qa,On(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Fu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"co",sceneProperties:"e",viewMatrix:"f"}},Vu={src:`
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
    `,attributes:{normal:"o",position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ra=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var p=s.a,f=s.b;return C(ae,m(ze,l,a,d),Vu,Fu,n,{P:f,bd:p.bd,bK:p.bK,bL:p.bL,bM:p.bM,co:e,b:c,c:i,d:v,e:t,f:u})}))}),Ru={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cp",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Eu={src:`
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
    `,attributes:{normal:"o",position:"fs",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wb=Xe(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,p,f){var g=p.a,b=p.b;return C(ae,m(ze,v,i,f),Eu,Ru,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cp:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),ju={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b6",constantMetallic:"b7",constantRoughness:"b8",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"ct",normalMapTexture:"aW",roughnessTexture:"cQ",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(d,p,f,g,b,w,x,_){var L=x.a,M=x.b;return C(ae,m(ze,g,s,_),Eu,ju,v,{b3:e,b6:r,b7:i,b8:a,P:M,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,ct:t,b:f,c:p,aW:c,d:w,cQ:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Wu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cs",roughness:"cP",sceneProperties:"e",viewMatrix:"f"}},na=Xe(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,p,f){var g=p.a,b=p.b;return C(ae,m(ze,v,i,f),Vu,Wu,t,{b2:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cs:n,b:u,c:l,d,cP:r,e:c,f:s})}))}),xb=function(e){return{$:0,a:e}},Ki=$(function(e,r){return{$:1,a:e,b:r}}),Sn=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),Sb=function(e){return P(un,vn(e),$n(e),fn(e),1)},ni=P(un,0,0,0,0),sa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,ni)}else{var n=r.a;return k(e,Sb(n))}}),Nu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(Ki,k(t,ni),o(Sn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ki,o(sa,t,e),o(Sn,t,r))}else{var a=n.a.a;return n.b.a,xb(a)}}),Cb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),aa=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Lb=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Pb=function(e){return o(De,e,1)},Jt=o(De,0,0),Ur=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Jt)}else{var n=r.a;return k(e,Pb(n))}}),Gu=R(function(e,r,n,a){var t=P(Lb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return P(aa,k(u,ni),o(Ur,u,r),o(Ur,u,n),o(Sn,u,a))}else if(t.b.$){var u=t.b.a.C;return P(aa,o(sa,u,e),k(u,Jt),o(Ur,u,n),o(Sn,u,a))}else if(t.c.$){var u=t.c.a.C;return P(aa,o(sa,u,e),o(Ur,u,r),k(u,Jt),o(Sn,u,a))}else if(t.d.$){var u=t.d.a.C;return P(aa,o(sa,u,e),o(Ur,u,r),o(Ur,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,m(Cb,i,c,l)}}),zb={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bB",sceneProperties:"e"}},gt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,p){return C(ae,m(ze,u,t,p),Mu,zb,a,{b0:On(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Hu={src:`
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
    `,attributes:{normal:"o",position:"fs",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kb=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var p=s.a,f=s.b;return C(ae,m(ze,l,a,d),Hu,Ru,n,{P:f,bd:p.bd,bK:p.bK,bL:p.bL,bM:p.bM,cp:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Tb=Yt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,d,p,f,g,b,w){var x=b.a,_=b.b;return C(ae,m(ze,p,u,w),Hu,ju,l,{b3:e,b6:r,b7:i,b8:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,ct:t,b:d,c:s,aW:e,d:g,cQ:n,e:v,a$:0,f})}))}),An=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Mb=function(e){var r=e;return m(An,r.dR,r.dO,.5)},Db=function(e){var r=e;return m(An,r.dS,r.dP,.5)},Ab=function(e){var r=e;return m(An,r.dT,r.dQ,.5)},Bb=function(e){return m(pe,Mb(e),Db(e),Ab(e))},X=function(e){var r=ou(e),n=r.a,a=r.b,t=r.c;return{ey:Za(Bb(e)),eT:n/2,eU:a/2,eV:t/2}},ai=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return P(bt,l,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(bt,l,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(bt,l,X(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var n=e.b.a;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(cr,n,X(t),c,a);case 8:var t=r.a,c=r.c;return P(cr,n,X(t),c,0);case 9:var t=r.a,c=r.c;return P(cr,n,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return P(gb,n,i,X(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return C(gt,l,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(gt,l,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(gt,l,v,X(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 8:var t=r.a,c=r.c;return C(lr,u,v,X(t),c,0);case 9:var t=r.a,c=r.c;return C(lr,u,v,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(_b,u,v,i,X(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Nu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return P(kb,b,X(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(wb,b,x,_,X(t),c,f);case 8:return T;case 9:return T;default:return T}}else{var p=d.a;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,f=r.d;return P(ra,p,X(t),c,f);case 3:return T;case 4:var t=r.a,c=r.c,f=r.d;return P(ra,p,X(t),c,f);case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return P(ra,p,X(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return P(ra,p,X(t),c,f);case 8:return T;case 9:return T;default:return T}}default:e.a;var L=e.b,M=e.c,G=e.d,j=e.e,E=P(Gu,L,M,G,j);if(E.$){var O=E.a,K=O.a,ce=O.b,$e=E.b,ie=$e.a,me=$e.b,ke=E.c,Ce=ke.a,hr=ke.b,_r=E.d,x=_r.a,_=_r.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return tv(Tb,K,ce,ie,me,Ce,hr,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return yb(K)(ce)(ie)(me)(Ce)(hr)(x)(_)(X(t))(c)(a);case 8:return T;case 9:return T;default:return T}}else{var W=E.a,H=E.b,F=E.c;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,a=r.d;return ye(na,W,H,F,X(t),c,a);case 3:return T;case 4:var t=r.a,c=r.c,a=r.d;return ye(na,W,H,F,X(t),c,a);case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return ye(na,W,H,F,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(na,W,H,F,X(t),c,a);case 8:return T;case 9:return T;default:return T}}}}),ht=function(e){var r=e;return r.fX},_t=function(e){var r=e;return r.f$},wt=function(e){var r=e;return r.c5},Fb=function(e){var r=e,n=wt(r.c6),a=_t(r.c6),t=ht(r.c6),i=wt(r.c4),c=_t(r.c4),l=ht(r.c4),u=wt(r.c3),v=_t(r.c3),s=ht(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Vb=function(e){var r=Za(Xr(e)),n=He(Mr(e)),a=He(Tr(e)),t=He(kr(e));return{dp:Fb(e),q:t.fX,r:t.f$,s:t.c5,t:a.fX,u:a.f$,v:a.c5,w:n.fX,x:n.f$,y:n.c5,H:r.fX,I:r.f$,J:r.c5,bW:1}},Jr=$(function(e,r){return{$:5,a:e,b:r}}),Xu=$(function(e,r){var n=r;switch(n.$){case 0:return T;case 5:var a=n.a,t=n.b,i=o(Zl,a,e);return o(Jr,i,t);case 1:return o(Jr,e,n);case 3:return o(Jr,e,n);case 2:return o(Jr,e,n);default:return o(Jr,e,n)}}),Iu=$(function(e,r){return o(Xu,Vb(e),r)}),et=function(e){return{$:2,a:e}},Rb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fX:n*i.fX,f$:a*i.f$,c5:t*i.c5},eT:n*r.eT,eU:a*r.eU,eV:t*r.eV}}),Eb=uf,jb=lf,Qi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,p=e.c,f=jb(a),g=f.fX,b=f.f$,w=f.c5,x=f.em,_=Eb({em:x,fX:g*s,f$:b*d,c5:w*p});return Ba(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ot=$(function(e,r){switch(r.$){case 0:return ku;case 5:var n=r.a,a=r.b;return o(Jr,n,o(Ot,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(Rb,e,t),o(Qi,e,i));case 3:return r;case 2:var i=r.a;return et(o(Qi,e,i));default:var c=r.a;return lu(o(re,Ot(e),c))}}),ti=$(function(e,r){var n=r;return o(Ot,e,n)}),oi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Uu=7683,Ju=7682,Wb=m(Uo,{cn:0,cM:0,c2:15},{a8:Se,bl:tn,bt:Se,bu:Uu},{a8:Se,bl:tn,bt:Se,bu:Ju}),Nb=m(Uo,{cn:0,cM:0,c2:15},{a8:Se,bl:tn,bt:Se,bu:Ju},{a8:Se,bl:tn,bt:Se,bu:Uu}),ii=$(function(e,r){return e?o(B,Nb,r):o(B,Wb,r)}),Gb={src:`
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
    `,attributes:{normal:"o",position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},Hb=function(e){if(e.$){var r=e.c;return oe(ee(function(n,a,t,i,c,l,u,v){return C(ae,o(ii,i,v),Gb,oi,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Ta=function(e){var r=Hb(e);if(r.$)return T;var n=r.a;return et(n)},Xb=R(function(e,r,n,a){var t=o(ai,n,Lu),i=function(){var s=k(e,r);return s.a?s.b?Un(h([t,Ta(Zi)])):t:s.b?Ta(Zi):T}(),c=Ia(a),l=c.a,u=c.b,v=c.c;return o(Iu,Xa(a),o(ti,S(l,u,v),i))}),Ib=$(function(e,r){return P(Xb,!0,!0,e,r)}),Ou=$(function(e,r){return{$:0,a:e,b:r}}),Ub=function(e){var r=Co(e),n=r.cL,a=r.cb,t=r.b4;return m(Xn,n,a,t)},Jb=function(e){return o(Ou,0,Nt(Ub(e)))},Cn=function(e){var r=e;return Gr(r)},Ob=$(function(e,r){var n=r;return n/e}),ec=function(e){var r=e;return{fX:Gr(r),f$:an(r)}},qb=$(function(e,r){var n=e.fs,a=e.o;return o(B,{o:Ka(a),fs:Pe(n)},r)}),Yb=Aa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=fn(l.fs),s=$n(l.fs),d=vn(l.fs),p=o($a,e,d),f=o(nr,r,d),g=o($a,n,s),b=o(nr,a,s),w=o($a,t,v),x=o(nr,i,v),_=u;e=p,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return _u({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),qu=$(function(e,r){var n=fn(e.fs),a=$n(e.fs),t=vn(e.fs);return Zt(Yb,t,t,a,a,n,n,r)}),Zb=function(e){var r=m(Rc,qb,z,Qo(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,Ko(e)),i=o(qu,n,a);return P(gu,i,e,t,0)}else return Zo},rc=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fX:a.fX*l.fX+a.f$*i.fX,f$:a.fX*l.f$+a.f$*i.f$,c5:a.fX*l.c5+a.f$*i.c5}}),Ma=function(e){var r=e;return an(r)},gn=function(e){var r=e;return r},qt=function(e){return ar(2*Me*e)},nc=Al({cz:We,c3:Na,c4:Wo}),Yu=function(){var e=72,r=o(Ob,e,qt(1)),n=xr(1),a=gn(Mo),t=gn(Fl),i=xr(1),c=o(Q,.5,i),l=m(pe,ur,ur,c),u=o(Q,-.5,i),v=m(pe,ur,ur,u),s=function(f){var g=o(Q,f,r),b=gn(o(rc,nc,ec(g))),w=o(Q,Cn(g),n),x=o(Q,Ma(g),n),_=m(pe,w,x,c),L=m(pe,w,x,u),M=o(Tn,e,f+1),G=o(Q,M,r),j=gn(o(rc,nc,ec(G))),E=o(Q,Cn(G),n),W=o(Q,Ma(G),n),H=m(pe,E,W,u),F=m(pe,E,W,c);return h([S({o:t,fs:v},{o:t,fs:H},{o:t,fs:L}),S({o:b,fs:L},{o:j,fs:H},{o:j,fs:F}),S({o:b,fs:L},{o:j,fs:F},{o:b,fs:_}),S({o:a,fs:l},{o:a,fs:_},{o:a,fs:F})])},d=o(re,s,o(Nr,0,e-1)),p=Ut(Ge(d));return Yo(Zb(p))}(),ac=zu(Yu),Kb=function(e){var r=e,n=Z(r.c5),a=Z(r.f$),t=Z(r.fX);if(J(t,a)<1)if(J(t,n)<1){var i=Kr(r.c5*r.c5+r.f$*r.f$);return{fX:0,f$:-r.c5/i,c5:r.f$/i}}else{var i=Kr(r.f$*r.f$+r.fX*r.fX);return{fX:-r.f$/i,f$:r.fX/i,c5:0}}else if(J(a,n)<1){var i=Kr(r.c5*r.c5+r.fX*r.fX);return{fX:r.c5/i,f$:0,c5:-r.fX/i}}else{var i=Kr(r.fX*r.fX+r.f$*r.f$);return{fX:-r.f$/i,f$:r.fX/i,c5:0}}},Qb=function(e){var r=Kb(e),n=r,a=n,t=e,i=t,c={fX:i.f$*a.c5-i.c5*a.f$,f$:i.c5*a.fX-i.fX*a.c5,c5:i.fX*a.f$-i.f$*a.fX};return k(r,c)},eg=function(e){var r=To(e),n=Qb(r),a=n.a,t=n.b;return mr({cz:Il(e),c3:a,c4:t,c6:r})},rg=R(function(e,r,n,a){var t=eg(No(a)),i=o(ai,n,Yu),c=function(){var d=k(e,r);return d.a?d.b?Un(h([i,Ta(ac)])):i:d.b?Ta(ac):T}(),l=Jl(a),u=l,v=Ul(a),s=v;return o(Iu,t,o(ti,S(u,u,s),c))}),ng=$(function(e,r){return P(rg,!0,!0,e,r)}),tc={src:`
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
    `,attributes:{triangleVertex:"cX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},oc={src:`
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
    `,attributes:{triangleVertex:"cX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},hn=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=rn(n),c=rn(a),l=rn(t);return Qe({dx:i.fX,dy:c.fX,dz:l.fX,dA:0,dB:i.f$,dC:c.f$,dD:l.f$,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},ta=Cu(h([S({cX:0},{cX:1},{cX:2})])),ag=$(function(e,r){var n=wu(r),a=X(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var t=e.b.a;return o(ge,a,ee(function(_,L,M,G,j,E,W,H){return C(ae,m(ze,G,0,H),tc,ei,ta,{aw:t,b:M,c:L,d:E,e:_,bq:hn(r),f:j})}));case 1:if(e.b.$)return e.a,T;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,L,M,G,j,E,W,H){return C(ae,m(ze,G,0,H),tc,ri,ta,{aN:o(Qa,On(c),i),b:M,c:L,d:E,e:_,bq:hn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Nu,l,f);if(u.$)return T;var v=u.a;return o(ge,a,ee(function(_,L,M,G,j,E,W,H){var F=W.a,O=W.b;return C(ae,m(ze,G,0,H),oc,Fu,ta,{P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,co:v,b:M,c:L,d:E,e:_,bq:hn(r),f:j})}));default:e.a;var s=e.b,d=e.c,p=e.d,f=e.e,g=P(Gu,s,d,p,f);if(g.$)return T;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(_,L,M,G,j,E,W,H){var F=W.a,O=W.b;return C(ae,m(ze,G,0,H),oc,Wu,ta,{b2:b,P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cs:x,b:M,c:L,d:E,cP:w,e:_,bq:hn(r),f:j})}))}}),tg=function(){var e=h([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=h([S(0,1,2),S(3,5,4),S(3,4,1),S(3,1,0),S(4,5,2),S(4,2,1),S(5,3,0),S(5,0,2)]);return o(Jn,e,r)}(),og={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},ic=function(e){return et(ee(function(r,n,a,t,i,c,l,u){return C(ae,o(ii,t,u),og,oi,tg,{b:a,c:n,d:c,e:r,bX:l,bq:hn(e),f:i})}))},ig=R(function(e,r,n,a){var t=o(ag,n,a),i=k(e,r);return i.a?i.b?Un(h([t,ic(a)])):t:i.b?ic(a):T}),cg=$(function(e,r){return P(ig,!0,!0,e,r)}),lg=$(function(e,r){var n=jr(r),a=jr(e),t=Er(r),i=Er(e),c=Rr(r),l=Rr(e);return{dO:o(le,l,c),dP:o(le,i,t),dQ:o(le,a,n),dR:o(se,l,c),dS:o(se,i,t),dT:o(se,a,n)}}),ug=function(e){var r=Vo(e),n=r.a,a=r.b;return o(lg,n,a)},cc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vg=$(function(e,r){return{$:1,a:e,b:r}}),$g=vg({df:2,$7:0,dV:1}),lc=$g(h([k({dw:0},{dw:1})])),fg=$(function(e,r){var n=ug(r),a=X(n),t=Vo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var l=e.b.a;return o(ge,a,ee(function(v,s,d,p,f,g,b,w){return C(ae,w,cc,ei,lc,{aw:l,du:Pe(c),dv:Pe(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return T;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,p,f,g,b,w,x){return C(ae,x,cc,ri,lc,{aN:o(Qa,On(u),l),du:Pe(c),dv:Pe(i),b:p,c:d,d:b,e:s,f:g})}));case 2:return T;default:return T}}),sg=$(function(e,r){return o(fg,e,r)}),oa=function(e){return ar(Me*(e/180))},uc=$(function(e,r){var n=e,a=r;return n/a}),dg=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(Sr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),vc=$(function(e,r){return e<1?z:C(dg,0,e,e,r,z)}),mg=$(function(e,r){var n=e.fs,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Ka(a),fs:Pe(n),L:o(De,c,l)},r)}),pg=function(e){var r=m(Rc,mg,z,Qo(e));if(r.b){var n=r.a,a=r.b,t=o(Jn,r,Ko(e)),i=o(qu,n,a);return P(hu,i,e,t,0)}else return Zo},Zu=$(function(e,r){var n=e,a=r,t=Gr(a);return{fX:t*Gr(n),f$:t*an(n),c5:an(a)}}),bg=function(){var e=xr(1),r=72,n=o(Nr,0,r-1),a=o(vc,r,o(An,ur,qt(1))),t=so(r/2),i=o(Nr,0,t-1),c=o(vc,t,o(An,oa(90),oa(-90))),l=Ya(Ge(o(re,function(s){return o(re,function(d){return{o:gn(o(Zu,s,d)),fs:m(pe,o(Q,Cn(d)*Cn(s),e),o(Q,Cn(d)*Ma(s),e),o(Q,Ma(d),e)),L:k(o(uc,s,qt(1)),o(uc,o(xn,oa(90),d),oa(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(re,function(s){return Ge(o(re,function(d){var p=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([S(b,g,p),S(b,p,f)])},i))},n));return Yo(pg(o(Pu,l,v)))}(),Da=72,ia=2*Da,gg=$(function(e,r){e:for(;;){var n=ia+1,a=o(Tn,ia,2*e+3),t=o(Tn,ia,2*e+2),i=2*e+1,c=2*e,l=ia,u=o(B,S(l,c,t),o(B,S(c,a,t),o(B,S(c,i,a),o(B,S(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),hg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),_g=$(function(e,r){e:for(;;){var n=m(hg,0,2*Me,e/Da),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),wg=function(){var e=o(_g,Da-1,h([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(gg,Da-1,z);return o(Jn,e,r)}(),yg={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},$c=function(e){return et(ee(function(r,n,a,t,i,c,l,u){return C(ae,o(ii,!0,u),yg,oi,wg,{aw:m(Xn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},xg=function(e){var r=xu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fX,I:r.f$,J:r.c5,bW:1}},Sg=$(function(e,r){return o(Xu,xg(e),r)}),Cg=R(function(e,r,n,a){var t=o(ai,n,bg),i=function(){var u=k(e,r);return u.a?u.b?Un(h([t,$c()])):t:u.b?$c():T}(),c=Ja(a),l=c;return o(Sg,o(It,We,Ua(a)),o(ti,S(l,l,l),i))}),Lg=$(function(e,r){return P(Cg,!0,!0,e,r)}),Pg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zg=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),kg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Ou,n,a);case 1:var n=e.a,a=e.b,r=e.c;return m(Pg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return m(jl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(zg,n,a,t,i,c)}},Tg=kg,Ku=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(Ib,t,r)]);case 1:var t=e.a,n=e.b;return h([o(cg,t,n)]);case 3:var t=e.a,a=e.b;return h([o(Lg,Tg(t),a)]);case 2:var t=e.a,i=e.b;return h([o(ng,t,i)]);case 4:var c=e.a,l=e.b;return h([o(sg,Jb(c),l)]);default:var u=e.a;return o(Go,Ku,u)}},Mg=function(e){return o(Go,Ku,e)},Dg=$(function(e,r){return N3({aI:K0(e.es),ev:e.ev,aJ:Q0(.5),b9:e.b9,aK:k(Ei(qe(e.cR.fV)),Ei(qe(e.cR.eX))),aP:Mg(r),fD:!0,fM:o(Zu,ar(e.fL),ar(e.fN)),ei:Ga})}),Ag=$(function(e,r){return o(Dg,{es:P(yl,0,0,0,0),ev:c0(e),b9:e.b9,cR:e.cR,fL:o(Oe,"sunlight azimuth",e),fN:o(Oe,"sunlight elevation",e)},h([o(Z0,e,r),F0(e)]))}),Bg=$(function(e,r){return o(N,z,h([o(N,h([o(ne,"position","absolute"),o(ne,"width","100%")]),h([o(Wm,e,r)])),o(Ag,e,r)]))}),Fg=P(Tm,Bg,Em,Rm,Dm);const Vg={Main:{init:Fg(o(A,function(e){return Te({e2:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Te({db:c,b9:i,eK:t,e8:a,fr:n,cR:r,fU:e})},o(D,"clock",fe))},o(D,"devicePixelRatio",fe))},o(D,"dt",fe))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Te({eo:d,eB:s,de:v,eJ:u,e9:l,ft:c,fy:i,fE:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",ya(kn)))},o(D,"left",Y))},o(D,"pressedKeys",ya(kn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Te({de:v,e5:u,fe:l,fz:c,fA:i,eh:t,fX:a,f$:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",fe))},o(D,"y",fe))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Te({eX:n,fV:r})},o(D,"height",fe))},o(D,"width",fe))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Te({eE:r,eF:e})},o(D,"deltaX",fe))},o(D,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Rg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(p)}},Eg=()=>{yt("pointerdown"),yt("wheel"),yt("keydown")},yt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},jg=Vg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Eg();Rg(jg);
