const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ma(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function It(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ze(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Da(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ju=[];function Ou(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Xu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=gt(e,r,0,a);t&&(n=a.pop());t=gt(n.a,n.b,0,a));return t}function gt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=pi(e),r=pi(r));for(var t in e)if(!gt(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var ev=$(function(e,r){var n=J(e,r);return n<0?Bc:n?jf:Ac}),Mn=0;function z(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var rv=$(tr);function h(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function Aa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Aa(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Aa(r).sort(function(n,a){var t=o(e,n,a);return t===Ac?0:t===Bc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var av=$(Math.pow);$(function(e,r){return r%e});var tv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin,lv=Math.tan,uv=Math.atan;$(Math.atan2);function vv(e){return e}function $v(e){return e===1/0||e===-1/0}var fv=Math.ceil,sv=Math.floor,dv=Math.round,mv=Math.sqrt,ni=Math.log,pv=isNaN;function bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function _v(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function wv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var yv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),xv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),Cv=y(function(e,r,n){return n.slice(e,r)});function Lv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Pv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),zv=$(function(e,r){return r.indexOf(e)>-1}),kv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Tv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function cc(e){return e+""}function Mv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function Dv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function Av(e){return Aa(e).join("")}function Bv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Fv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vv(e){return{$:0,a:e}}function Ot(e){return{$:2,b:e}}var Rv=Ot(function(e){return typeof e=="boolean"?ue(e):Xe("a BOOL",e)}),Uv=Ot(function(e){return typeof e=="number"?ue(e):Xe("a FLOAT",e)}),Ev=Ot(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Xe("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Wv=$(function(e,r){return{$:10,b:r,h:e}}),Gv=$(function(e,r){return xr(e,[r])}),Yv=y(function(e,r,n){return xr(e,[r,n])});R(function(e,r,n,a){return xr(e,[r,n,a])});ge(function(e,r,n,a,t){return xr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});Ma(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});It(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return _e(o(io,"This is not valid JSON! "+a.message,r))}});var lc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Xe("null",r);case 3:return In(r)?ai(e.b,r,h):Xe("a LIST",r);case 4:return In(r)?ai(e.b,r,Hv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return He(v)?v:_e(o(bi,n,v.a));case 7:var a=e.e;if(!In(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return He(v)?v:_e(o(Fc,a,v.a));case 8:if(typeof r!="object"||r===null||In(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!He(v))return _e(o(bi,i,v.a));t=tr(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!He(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return He(v)?je(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(He(v))return v;s=tr(v.a,s)}return _e(Nf(Fe(s)));case 1:return _e(o(io,e.a,r));case 0:return ue(e.a)}}function ai(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!He(c))return _e(o(Fc,i,c.a));t[i]=c.a}return ue(n(t))}function In(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Hv(e){return o(ts,e.length,function(r){return e[r]})}function Xe(e,r){return _e(o(io,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&ti(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return ti(e.g,r.g)}}function ti(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function uc(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Jv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Ov(e){return{$:5,b:e}}var qv=0;function qt(e){var r={$:0,e:qv++,f:e,g:null,h:[]};return Zt(r),r}function vc(e){return dr(function(r){r(Rr(qt(e)))})}function $c(e,r){e.h.push(r),Zt(e)}var Zv=$(function(e,r){return dr(function(n){$c(e,r),n(Rr(Mn))})}),Qa=!1,oi=[];function Zt(e){if(oi.push(e),!Qa){for(Qa=!0;e=oi.shift();)Xv(e);Qa=!1}}function Xv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Zt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Xt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Xt(e,r,n,a,t,i){var c=o(lc,e,r?r.flags:void 0);He(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ci(l,b.b,t(v))}return ci(l,u.b,t(v)),d?{ports:d}:{}}var er={};function Qv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=e$(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function e$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ht,l,Ov(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=qt(o(ht,l,e.b))}var r$=$(function(e,r){return dr(function(n){e.g(r),n(Rr(Mn))})});$(function(e,r){return o(Zv,e.h,{$:0,a:r})});function fc(e){return function(r){return{$:1,k:e,l:r}}}function n$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ii=[],Ka=!1;function ci(e,r,n){if(ii.push({p:e,q:r,r:n}),!Ka){Ka=!0;for(var a;a=ii.shift();)a$(a.p,a.q,a.r);Ka=!1}}function a$(e,r,n){var a={};fa(!0,r,a,null),fa(!1,n,a,null);for(var t in e)$c(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function fa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=t$(e,t,a,r.l);n[t]=o$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)fa(e,c.a,n,a);return;case 3:fa(e,r.o,n,{s:r.n,t:a});return}}function t$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function o$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function i$(e){er[e]&&nn(3)}$(function(e,r){return r});function c$(e,r){return i$(e),er[e]={f:l$,u:r,a:u$},fc(e)}var l$=$(function(e,r){return function(n){return e(r(n))}});function u$(e,r){var n=P,a=er[e].u,t=Rr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(lc,a,c);He(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var sa,vr=typeof document!="undefined"?document:{};function Qt(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function _t(e){return{$:0,a:e}}var sc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Kt(n),e:t,f:e,b:i}})}),Ur=sc(void 0),v$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Kt(n),e:t,f:e,b:i}})}),$$=v$(void 0);function f$(e,r,n,a){return{$:3,d:Kt(e),g:r,h:n,i:a}}var s$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});y(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ma(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return ze(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return Jt(e,r,n,a,t,i,c,l)})});It(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Da(e,r,n,a,t,i,c,l,u)})});var dc=$(function(e,r){return{$:"a0",n:e,o:r}}),d$=$(function(e,r){return{$:"a1",n:e,o:r}}),mc=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),m$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function p$(e){return e=="script"?"p":e}function b$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(dc,r.n,g$(e,r.o)):r});function g$(e,r){var n=$o(r);return{$:r.$,a:n?p(os,n<3?h$:_$,De(e),r.a):o(ba,e,r.a)}}var h$=$(function(e,r){return z(e(r.a),r.b)}),_$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?li(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?li(c,t,i):c[t]=i}return r}function li(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);sa&&e.c=="a"&&c.addEventListener("click",sa(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Qt(c,gr(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?w$(e,t):a==="a0"?S$(e,r,t):a==="a3"?y$(e,t):a==="a4"?x$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function w$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function y$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function x$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function S$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=C$(r,i),e.addEventListener(t,c,eo&&{passive:$o(i)<2}),a[t]=c}}var eo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){eo=!0}}))}catch{}function C$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!He(i)){for(var c=$o(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function L$(e,r){return e.$==r.$&&Hr(e.a,r.a)}function pc(e,r){var n=[];return Ie(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=B$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!P$(d,m):d!==m)&&he(n,2,a,m),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ui(e,r,n,a,z$);return;case 2:ui(e,r,n,a,k$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=ro(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function P$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ui(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=ro(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function ro(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ro(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&L$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ie(s,i[v],n,++a),a+=s.b||0}}function k$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,T=void 0,N=void 0;if(w===x){f++,Ie(_,C,t,f),f+=_.b||0,d++,m++;continue}var E=l[d+1],U=u[m+1];if(E){var j=E.a,W=E.b;N=x===j}if(U){var B=U.a,O=U.b;T=w===B}if(T&&N){f++,Ie(_,O,t,f),vn(i,t,w,C,m,c),f+=_.b||0,f++,$n(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,vn(i,t,x,C,m,c),Ie(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,$n(i,t,w,_,f),f+=_.b||0,f++,Ie(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(E&&j===B){f++,$n(i,t,w,_,f),vn(i,t,x,C,m,c),f+=_.b||0,f++,Ie(W,O,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];vn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var bc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+bc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}$n(e,r,n+bc,a,t)}function gc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)gc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=fn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function hc(e,r,n,a){return n.length===0?e:(gc(e,r,n,a),da(e,n))}function da(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=T$(t,a);t===e&&(e=i)}return e}function T$(e,r){switch(r.$){case 0:return M$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return da(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=da(e,i.w),e;case 8:return D$(e,r);case 5:return r.s(e);default:nn(10)}}function M$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function D$(e,r){var n=r.s,a=A$(n.y,r);e=da(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Qt(e,a),e}function A$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Qt(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function no(e){if(e.nodeType===3)return _t(e.textContent);if(e.nodeType!==1)return _t("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(no(v[a]),u);return p(Ur,l,r,u)}function B$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var F$=R(function(e,r,n,a){return Xt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=no(l);return _c(i,function(v){var s=c(v),d=pc(u,s);l=hc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Xt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=vr.title,v=vr.body,s=no(v);return _c(i,function(d){sa=c;var m=l(d),f=Ur("body")(P)(m.eu),g=pc(s,f);v=hc(v,s,g,t),s=f,sa=0,u!==m.fL&&(vr.title=u=m.fL)})})});var ma=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function _c(e,r){r(e);var n=0;function a(){n=n===1?0:(ma(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ma(a),n=2)}}$(function(e,r){return o(mo,fo,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(mo,fo,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(mo,fo,dr(function(){history.replaceState({},"",r),e()}))});var V$={addEventListener:function(){},removeEventListener:function(){}},R$=typeof window!="undefined"?window:V$;y(function(e,r,n){return vc(dr(function(a){function t(i){qt(n(i))}return e.addEventListener(r,t,eo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return He(n)?te(n.a):q});function wc(e,r){return dr(function(n){ma(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Jv(cs(e)))})})}function U$(e){return dr(function(r){ma(function(){r(Rr(e()))})})}$(function(e,r){return wc(r,function(n){return n[e](),Mn})});$(function(e,r){return U$(function(){return R$.scroll(e,r),Mn})});y(function(e,r,n){return wc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var E$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var j$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(L(pl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(L(pl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var N$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/W$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function W$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),vi=new Float64Array(3),$i=new Float64Array(3),G$=y(function(e,r,n){return new Float64Array([e,r,n])}),Y$=function(e){return e[0]},H$=function(e){return e[1]},I$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var J$=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(yc);function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),pa(yc(e,r,n),n)}$(xc);function Sc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function pa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Sc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var O$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function yt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(yt);$(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var q$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Z$=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},X$=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var K$=new Float64Array(16),ef=new Float64Array(16),rf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},nf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(Cc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Cc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(Lc);R(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],E=r[3],U=r[4],j=r[5],W=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+b*E,n[1]=t*C+u*T+m*N+w*E,n[2]=i*C+v*T+f*N+x*E,n[3]=c*C+s*T+g*N+_*E,n[4]=a*U+l*j+d*W+b*B,n[5]=t*U+u*j+m*W+w*B,n[6]=i*U+v*j+f*W+x*B,n[7]=c*U+s*j+g*W+_*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+_*ve,n[12]=a*oe+l*de+d*Me+b*Se,n[13]=t*oe+u*de+m*Me+w*Se,n[14]=i*oe+v*de+f*Me+x*Se,n[15]=c*oe+s*de+g*Me+_*Se,n}$(Pc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],E=r[9],U=r[10],j=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*E+v*U,n[9]=t*N+l*E+s*U,n[10]=i*N+u*E+d*U,n[11]=0,n[12]=a*j+c*W+v*B+m,n[13]=t*j+l*W+s*B+f,n[14]=i*j+u*W+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=pa(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Sc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,T=g-f,N=c*c*v+u,E=w+d,U=b+m,j=w-d,W=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],Me=n[7],Se=n[8],pr=n[9],br=n[10],Xa=n[11],Nu=n[12],Wu=n[13],Gu=n[14],Yu=n[15];return a[0]=B*x+ve*_+Se*C,a[1]=O*x+oe*_+pr*C,a[2]=Q*x+de*_+br*C,a[3]=ie*x+Me*_+Xa*C,a[4]=B*T+ve*N+Se*E,a[5]=O*T+oe*N+pr*E,a[6]=Q*T+de*N+br*E,a[7]=ie*T+Me*N+Xa*E,a[8]=B*U+ve*j+Se*W,a[9]=O*U+oe*j+pr*W,a[10]=Q*U+de*j+br*W,a[11]=ie*U+Me*j+Xa*W,a[12]=Nu,a[13]=Wu,a[14]=Gu,a[15]=Yu,a});function af(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(af);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function tf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(tf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=xc(e,r,ao),t=pa(yt(n,a,vi),vi),i=pa(yt(a,t,$i),$i),c=K$,l=ef;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var fi=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function to(e){for(var r=0;e.b;e=e.b)r++;return r}var of=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},cf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),lf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),uf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),$f=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),df=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},gf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},hf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},zc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},kc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},_f=function(e){e.gl.disable(e.gl.CULL_FACE)},wf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},yf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},xf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},si=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Sf=[bf,gf,hf,zc,kc,_f,wf,yf,xf];function di(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Cf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Tc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Lf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Tc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(to(n.b)*s);Cn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Pf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=zf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*to(r.b),indexBuffer:null,buffers:{}}}function zf(e,r){var n=new Uint32Array(to(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function mi(e,r){return e+"#"+r}var Mc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),zc(n),kc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=mi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=fi++,v||(v=di(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=fi++,s||(s=di(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Cf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=kf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=mi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Tf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Pf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Lf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Tc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Cn(tp(n),i.a),u=0;u<si.length;u++){var T=n[si[u]];T.toggle!==n.toggle&&T.enabled&&(Sf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Cn(t,e.g),r});function kf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Tf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Mf=y(function(e,r,n){return f$(r,{g:n,f:{},h:e},Uf,Ef)}),Df=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Af=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Bf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ff=$(function(e,r){e.contextAttributes.antialias=!0}),Vf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Rf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Uf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(ap,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),of(function(){return o(Mc,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ef(e,r){return r.f=e.f,Mc(r)}var A=rv,Jn=Qu,Dc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Jn,e,l,v)}else{var u=c.a;return p(Jn,i,l,u)}});return p(Jn,i,p(Jn,e,r,t),a)}),oo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(oo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),pi=function(e){return p(oo,y(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Ac=1,jf=2,Bc=0,_e=function(e){return{$:1,a:e}},io=$(function(e,r){return{$:3,a:e,b:r}}),bi=$(function(e,r){return{$:0,a:e,b:r}}),Fc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Nf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Wf=Pv,Gf=Iv,Be=cc,Tr=$(function(e,r){return o(Sv,e,Aa(r))}),co=$(function(e,r){return h(o(xv,e,r))}),Vc=function(e){return o(Tr,`
    `,o(co,`
`,e))},Dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Br=function(e){return p(Dn,$(function(r,n){return n+1}),0,e)},Yf=nv,Hf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Fr=$(function(e,r){return p(Hf,e,r,P)}),Rc=$(function(e,r){return p(Yf,e,o(Fr,0,Br(r)-1),r)}),rr=Bv,Uc=function(e){var r=rr(e);return 97<=r&&r<=122},Ec=function(e){var r=rr(e);return r<=90&&65<=r},If=function(e){return Uc(e)||Ec(e)},Jf=function(e){var r=rr(e);return r<=57&&48<=r},Of=function(e){return Uc(e)||Ec(e)||Jf(e)},Fe=function(e){return p(Dn,A,P,e)},an=hv,qf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Vc(Zf(r))))}),Zf=function(e){return o(Xf,e,P)},Xf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return If(x)&&o(Wf,Of,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Br(s))+" ways:"));return o(Tr,`

`,o(A,g,o(Rc,qf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Vc(o(Gf,4,f))+(`

`+m))}}),Ve=32,xt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),St=Ju,lo=fv,uo=$(function(e,r){return ni(r)/ni(e)}),Qf=vv,Ln=lo(o(uo,2,Ve)),jc=L(xt,0,Ln,St,St),Nc=qu,Wc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Gc=sv,Ct=Ou,nr=$(function(e,r){return J(e,r)>0?e:r}),Kf=function(e){return{$:0,a:e}},vo=Zu,es=$(function(e,r){e:for(;;){var n=o(vo,Ve,e),a=n.a,t=n.b,i=o(A,Kf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),rs=function(e){var r=e.a;return r},ns=$(function(e,r){e:for(;;){var n=lo(r/Ve);if(n===1)return o(vo,Ve,e).a;var a=o(es,e,P),t=n;e=a,r=t;continue e}}),Yc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Gc(o(uo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(ns,t,r.l);return L(xt,Ct(r.p)+n,o(nr,5,a*Ln),i,r.p)}else return L(xt,Ct(r.p),Ln,St,r.p)}),as=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Yc,!1,{z:a,l:n/Ve|0,p:t});var i=Wc(p(Nc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ts=$(function(e,r){if(e<=0)return jc;var n=e%Ve,a=p(Nc,n,e-n,r),t=e-n-Ve;return S(as,r,t,e,P,a)}),He=function(e){return!e.$},D=Wv,Z=Rv,M=Nv,$e=Uv,ba=Gv,os=Yv,De=Vv,$o=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Ur("div"),is=function(e){return{$:2,a:e}},Hc=$(function(e,r){return e}),Ic=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Dr=function(e){return e},cs=Dr,gi=qe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ls=zv,Mr=_v,Ir=Cv,An=$(function(e,r){return e<1?r:p(Ir,e,Mr(r),r)}),Ba=Tv,Fa=function(e){return e===""},Va=$(function(e,r){return e<1?"":p(Ir,0,e,r)}),Jc=Mv,hi=ge(function(e,r,n,a,t){if(Fa(t)||o(ls,"@",t))return q;var i=o(Ba,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Jc(o(An,c+1,t));if(l.$===1)return q;var u=l;return te(ze(gi,e,o(Va,c,t),u,r,n,a))}else return te(ze(gi,e,t,q,r,n,a))}),_i=R(function(e,r,n,a){if(Fa(a))return q;var t=o(Ba,"/",a);if(t.b){var i=t.a;return S(hi,e,o(An,i,a),r,n,o(Va,i,a))}else return S(hi,e,"/",r,n,a)}),wi=y(function(e,r,n){if(Fa(n))return q;var a=o(Ba,"?",n);if(a.b){var t=a.a;return L(_i,e,te(o(An,t+1,n)),r,o(Va,t,n))}else return L(_i,e,q,r,n)});$(function(e,r){if(Fa(r))return q;var n=o(Ba,"#",r);if(n.b){var a=n.a;return p(wi,e,te(o(An,a+1,r)),o(Va,a,r))}else return p(wi,e,q,r)});var us=kv,fo=function(e){},Bn=Rr,vs=Bn(0),Oc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Dn,e,r,Fe(d)):L(Oc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=y(function(e,r,n){return L(Oc,e,r,0,n)}),re=$(function(e,r){return p(mr,$(function(n,a){return o(A,e(n),a)}),P,r)}),ga=ht,so=$(function(e,r){return o(ga,function(n){return Bn(e(n))},r)}),$s=y(function(e,r,n){return o(ga,function(a){return o(ga,function(t){return Bn(o(e,a,t))},n)},r)}),fs=function(e){return p(mr,$s(A),Bn(P),e)},ss=r$,ds=$(function(e,r){var n=r;return vc(o(ga,ss(e),n))}),ms=y(function(e,r,n){return o(so,function(a){return 0},fs(o(re,ds(e),r)))}),ps=y(function(e,r,n){return Bn(0)}),bs=$(function(e,r){var n=r;return o(so,e,n)});er.Task=Kv(vs,ms,ps,bs);var gs=fc("Task"),mo=$(function(e,r){return gs(o(so,e,r))}),hs=F$,_s=bv,ha={$:1},qc=function(e){return{$:2,a:e}},Ra={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},ws=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Zc=function(e){var r=e.b;return o(Ne,Ra,r)},or=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ys=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Zc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,tn(n).db)>0?o(ae,ws,or(o(Ne,ha,t))):Dr)(o(Ne,qc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ic,l.eA,Qe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,Ra,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Xc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),xs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Ss=$(function(e,r){return Fe(p(xs,e,r,P))}),Qc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Ss,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Cs=$(function(e,r){return p(Qc,0,e,r)}),Ls=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(h([a]),t)),c=o(Cs,e,i),l=o(Xc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,ha,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,ha,{B:d,ab:P,T:m})}else return r}}),Ps=function(e){var r=e.b;return o(Ne,ha,r)},zs=function(e){var r=e.b;return o(Ne,qc({cX:tn(e).db}),r)},ks=$(function(e,r){switch(e.$){case 1:return Ps(r);case 2:return Zc(r);case 3:return zs(r);default:var n=e.a;return o(Ls,n,r)}}),Kc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ts=$(function(e,r){return Qe(r,{av:e(r.av)})}),Ms=function(e){return{$:3,a:e}},el=function(e){return{$:2,a:e}},rl=$(function(e,r){return{$:0,a:e,b:r}}),nl=$(function(e,r){return{$:1,a:e,b:r}}),we=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),X=function(e){return e<0?-e:e},po=Dv,Ds=y(function(e,r,n){return o(or,0/0,po(o(e,r,n)))}),al=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=yv,tl=function(e){return p(As,A,P,e)},Bs=$(function(e,r){var n=o(al,function(a){return a!=="0"&&a!=="."},tl(r));return le(e&&n?"-":"",r)}),me=cc,Lt=gv,ol=Fv,il=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(Lt,"0",il(t))}else{var i=rr(r);return i>=48&&i<57?o(Lt,ol(i+1),n):"0"}},Pt=$v,Fs=pv,Ua=function(e){return o(Lt,e,"")},cl=y(function(e,r,n){return e<=0?n:p(cl,e>>1,le(r,r),e&1?le(n,r):n)}),Pn=$(function(e,r){return p(cl,e,r,"")}),zt=y(function(e,r,n){return le(n,o(Pn,e-Mr(n),Ua(r)))}),kt=wv,ll=function(e){var r=o(co,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Vs=function(e){var r=o(co,"e",me(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(or,0,Jc(o(us,"+",t)?o(An,1,t):t)),c=ll(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(or,"0",o(we,function(d){var m=d.a,f=d.b;return m+("."+f)},o(we,Kc(Ua),an(le(o(Pn,X(i),"0"),v))))):p(zt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Rs=y(function(e,r,n){if(Pt(n)||Fs(n))return me(n);var a=n<0,t=ll(Vs(X(n))),i=t.a,c=t.b,l=Mr(i)+r,u=le(o(Pn,-l+1,"0"),p(zt,l,"0",le(i,c))),v=Mr(u),s=o(nr,1,l),d=o(e,a,p(Ir,s,v,u)),m=p(Ir,0,s,u),f=d?kt(o(or,"1",o(we,il,an(kt(m))))):m,g=Mr(f),b=f==="0"?f:r<=0?le(f,o(Pn,X(r),"0")):J(r,Mr(c))<0?p(Ir,0,g-r,f)+("."+p(Ir,g-r,g,f)):le(i+".",p(zt,r,"0",c));return o(Bs,a,b)}),ul=Rs($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Us=Ds(ul),Es=y(function(e,r,n){var a=o(uo,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Us,t,n)}),vl=ev,Fn=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(vl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},Kr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(Y,0,r,n,S(Y,1,v,s,d,m),S(Y,1,i,c,l,u))}else return S(Y,e,i,c,S(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(Y,0,v,s,S(Y,1,g,b,w,x),S(Y,1,r,n,m,t))}else return S(Y,e,r,n,a,t)}),Tt=y(function(e,r,n){if(n.$===-2)return S(Y,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(vl,e,t);switch(u){case 0:return S(Kr,a,t,i,p(Tt,e,r,c),l);case 1:return S(Y,a,t,r,c,l);default:return S(Kr,a,t,i,c,p(Tt,e,r,l))}}),bn=y(function(e,r,n){var a=p(Tt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(Y,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},$l=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(Y,0,f,g,S(Y,1,n,a,S(Y,0,i,c,l,u),b),S(Y,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(Y,1,n,a,S(Y,0,i,c,l,u),S(Y,0,s,d,m,x))}else return e},yi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(Y,0,i,c,S(Y,1,u,v,s,d),S(Y,1,n,a,m,S(Y,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return S(Y,1,n,a,S(Y,0,i,c,C,m),S(Y,0,g,b,w,x))}else return e},Ns=Ma(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(Y,n,l,u,v,S(Y,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,yi(r)}else break e;else return c.a,c.d,yi(r);else break e;return r}}),ia=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(Y,r,n,a,ia(t),l);var u=$l(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,ia(m),f)}else return ir}else return S(Y,r,n,a,ia(t),l)}else return ir},gn=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(Y,n,a,t,o(gn,e,i),c);var u=$l(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,o(gn,e,m),f)}else return ir}else return S(Y,n,a,t,o(gn,e,i),c);else return o(Ws,e,Jt(Ns,e,r,n,a,t,i,c))}),Ws=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=js(c);if(l.$===-1){var u=l.b,v=l.c;return S(Kr,n,u,v,i,ia(c))}else return ir}else return S(Kr,n,a,t,i,o(gn,e,c))}else return ir}),Gs=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(Y,1,a,t,i,c)}else{var l=n;return l}}),On=y(function(e,r,n){var a=r(o(Fn,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(bn,e,t,n)}),Ys=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(On,r,we(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(nl,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(On,r,we(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(rl,z(i,c),p(Es,i,c,n))}));case 3:var r=e.a,n=e.b;return o(On,r,we(function(a){return a.$===3?Ms(n):a}));default:var r=e.a,n=e.b;return o(On,r,we(function(a){return a.$===2?el(n):a}))}},Hs=function(e){return Ts(Ys(e))},Is=$(function(e,r){return o(re,Hs(e),r)}),Js=$(function(e,r){return Qe(r,{eA:o(Is,e,r.eA)})}),Os=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Qe(a,{B:o(Kc,Js(e),a.B)}))}),qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Zs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Qe(t,{B:o(qs,o(e,i.a,r),i)}))}),Xs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(ys,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(Os,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(ks,l,a.G)})}}),Qs=$(function(e,r){return o(Ne,Ra,{B:z(e,r(e)),ab:P,T:P})}),Ks=n$,xi=Ks(P),_a=jv,zn=Ev,ed=c$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",_a(zn)))},o(M,"left",Z))},o(M,"pressedKeys",_a(zn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),rd=function(e){return{$:4,a:e}},nd={$:0},ad=uc,Ye=$(function(e,r){return o(mc,e,ad(r))}),H=Ye("className"),td=function(e){var r=e.b.B;return r.b},wa=Ye("id"),od=s$,ya=od,id=d$,se=id,cd={$:1},ld=function(e){return{$:3,a:e}},ud=function(e){return{$:5,a:e}},Si=Ur("a"),bo=Ur("button"),Ci=function(e){return o(Ye,"href",b$(e))},vd=Cr("clip-rule"),Ce=Cr("d"),$d=Cr("fill"),fl=sc("http://www.w3.org/2000/svg"),fd=fl("svg"),sd=Cr("viewBox"),dd=o(m$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=fd(h([sd("0 0 24 24"),$d("currentColor"),o(se,"width","100%"),o(se,"height","100%"),dd("http://www.w3.org/2000/svg")])),md=Cr("fill-rule"),Le=fl("path"),Or={eD:Re(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(h([o(Le,h([md("evenodd"),vd("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},pd=function(e){return{$:0,a:e}},sl=dc,dl=$(function(e,r){return o(sl,e,pd(r))}),go=function(e){return o(dl,"click",De(e))},Li=Ye("target"),bd=Ye("title"),Mt=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(Y,n,a,o(e,a,t),o(Mt,e,i),o(Mt,e,c))}),gd=_t,sr=gd,hd=function(e){return p(oo,y(function(r,n,a){return o(A,n,a)}),P,e)},_d=$(function(e,r){return{$:3,a:e,b:r}}),wd=$(function(e,r){return{$:2,a:e,b:r}}),yd=$(function(e,r){return{$:0,a:e,b:r}}),xd=$(function(e,r){return{$:1,a:e,b:r}}),Ea=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ho=L(Ea,0/255,0/255,0/255,1),Sd=uc,Cd=$(function(e,r){return o(mc,e,Sd(r))}),Ld=Cd("checked"),Oe=dv,Pd=y(function(e,r,n){return le(o(Pn,e-Mr(n),Ua(r)),n)}),xa=tv,ml=function(e){var r=function(n){return n<10?Be(n):Ua(ol(87+n))};return e<16?r(e):le(ml(e/16|0),r(o(xa,16,e)))},zd=o(ae,ml,o(Pd,2,"0")),_o=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},kd=function(e){var r=_o(e),n=r.cM,a=r.cc,t=r.b5;return o(Tr,"",o(A,"#",o(re,o(ae,Oe,zd),h([n*255,a*255,t*255]))))},Dt=Ye("htmlFor"),Td=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Sa=$(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return e(n)}}),Md=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Vn=$(function(e,r){return p(mr,Md(e),P,r)}),pl=R(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Dd=j$,Ad=Av,Bd=$(function(e,r){if(r.$)return _e(e);var n=r.a;return ue(n)}),Fd=E$,Vd=function(e){return o(Fd,{ew:!1,fg:!1},e)},Rn=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Rd=$(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return ue(e(n))}}),Ud=function(e){return{$:2,a:e}},Ed=function(e){return{$:0,a:e}},jd=function(e){return{$:1,a:e}},et=$(function(e,r){return rr(r)-rr(e)}),rt=y(function(e,r,n){var a=rr(n);return J(rr(e),a)<1&&J(a,rr(r))<1}),Nd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):_e(jd(r))},a=p(rt,"0","9",r)?ue(o(et,"0",r)):p(rt,"a","z",r)?ue(10+o(et,"a",r)):p(rt,"A","Z",r)?ue(10+o(et,"A",r)):_e(Ed(r));return o(Sa,n,a)}),bl=$(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(Sa,function(c){return o(Sa,function(l){return ue(c+l*e)},o(bl,e,i))},o(Nd,e,t))}),Wd=$(function(e,r){return 2<=e&&e<=36?o(bl,e,kt(r)):_e(Ud(e))}),Gd=Wd(16),Yd=y(function(e,r,n){return L(Ea,e,r,n,1)}),Hd=R(function(e,r,n,a){return L(Ea,e,r,n,a)}),Un=av,Id=$(function(e,r){var n=o(Un,10,e);return Oe(r*n)/n}),Jd=Lv,Od=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=tl(n);if(a.b&&!a.b.b){var t=a.a;return Ad(h([t,t]))}else return n};return o(ae,Jd,o(ae,function(n){return o(we,function(a){return p(Dd,1,a,n)},Vd(e))},o(ae,Td(Rn),o(ae,we(function(n){return n.fG}),o(ae,we(Vn(Dr)),o(ae,Bd("Parsing hex regex failed"),Sa(function(n){var a=o(re,o(ae,r,o(ae,Gd,Rd(Qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(Hd,t/255,c/255,u/255,o(Id,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Yd,t/255,c/255,u/255))}else break e;return _e("Parsing ints from hex failed")})))))))}(),Ca=Ur("input"),At=Ur("label"),Bt=Ye("name"),gl=$(function(e,r){return p(mr,M,r,e)}),qd=o(gl,h(["target","checked"]),Z),Zd=function(e){return o(dl,"change",o(ba,e,qd))},Xd=function(e){return z(e,!0)},Qd=function(e){return{$:1,a:e}},Kd=$(function(e,r){return o(sl,e,Qd(r))}),em=o(gl,h(["target","value"]),zn),wo=function(e){return o(Kd,"input",o(ba,Xd,o(ba,e,em)))},hl=Ye("max"),_l=Ye("min"),wl=function(e){return o(Ye,"step",e)},La=Ye("type"),yo=Ye("value"),Pi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,P,h([o(At,h([Dt(r)]),h([o(I,h([H("relative w-full")]),h([o(I,h([H("inline-block")]),h([sr(r)])),o(I,h([H("inline-block float-right")]),h([sr(me(n))]))]))])),o(Ca,h([La("range"),o(se,"width","100%"),wa(r),Bt(r),_l(me(a)),hl(me(t)),yo(me(n)),wl(me(i)),wo(o(ae,po,o(ae,or(42),c)))]),P)]))},rm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),nm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([H("h-12 py-4")]),h([o(At,h([H("block"),Dt(e)]),h([o(Ca,h([H("relative bottom-[1px] align-middle mr-2"),La("checkbox"),wa(e),Bt(e),Zd(_d(e)),Ld(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Pi({cf:e,cr:i,cv:t,cz:yd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Pi({cf:e,cr:i,cv:t,cz:o(ae,Oe,xd(e)),cV:1,c0:c});default:var c=r.a;return o(I,P,h([o(I,h([o(se,"margin-bottom","6px")]),h([o(At,h([Dt(e)]),h([sr(e)]))])),o(Ca,h([La("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),wa(e),Bt(e),wo(function(l){return o(wd,e,o(rm,ho,Od(l)))}),yo(kd(c))]),P)]))}}),am=function(e){return o(I,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([H("text-lg pb-2")]),h([sr(e.fh)])),o(I,h([H("pl-2 pr-2")]),hd(o(Mt,nm,e.av)))]))},tm=function(e){return o(I,h([H("text-xs text-white60")]),o(re,am,e))},om=function(e){return o(I,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(ul,3,tn(e).db))]))},im=function(e){e.a;var r=e.b.T;return o(we,function(n){return Oe(60/(tn(e).db-n))},o(we,o(ae,rs,function(n){return n.db}),Rn(o(Xc,59,r))))},cm=function(e){return o(I,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=im(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Be(n)+" Fps")])}())},lm=function(e){return{$:0,a:e}},um=function(e){var r=e.b.T;return Br(r)},vm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Br(r)+1+Br(n)},$m=function(e){return o(Ca,h([H("absolute w-full"),La("range"),_l(Be(0)),hl(Be(vm(e)-1)),yo(Be(um(e))),wl(Be(1)),wo(o(ae,po,o(ae,or(42),o(ae,Oe,lm))))]),P)},zi={$:1},fm={$:3},sm={$:2},yl=function(e){return!e.b},ki=$(function(e,r){return o(bo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),go(e)]),h([sr("REC")]))}),Ti=$(function(e,r){return o(bo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),go(r)]),h([o(I,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),dm=function(e){var r=e.a,n=e.b.ab;return o(I,h([H("py-1")]),h([function(){switch(r.$){case 0:return o(ki,zi,"text-red-500 font-bold");case 1:return o(ki,sm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return yl(n)?o(I,P,P):o(Ti,Or.fq,fm);default:return o(Ti,Or.fp,zi)}}()]))},mm=function(e){return o(I,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([$m(e),dm(e),cm(e),om(e)]))},pm=function(e){var r=e.a;return _r(r,Ra)},bm=$(function(e,r){var n=pm(r.G)?o(I,P,P):o(I,h([H("absolute pointer-events-none w-8 h-8"),o(se,"left",me(e.fs.fU+.5*e.cS.fS)+"px"),o(se,"top",me(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(I,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Or.fs]))]));return o(I,P,h([n]))}),gm=$(function(e,r){var n=o(bo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),go(cd),bd("Distraction Free Mode")]),h([Or.f0])),a=o(I,h([H("absolute w-8 bottom-12")]),h([o(Si,h([H("text-twitterBlue40 hover:text-twitterBlue"),Ci("https://twitter.com/AzizErkalSelman"),Li("_blank")]),h([Or.fN]))])),t=o(I,h([H("absolute w-8 bottom-2")]),h([o(Si,h([H("text-githubCat40 hover:text-githubCat"),Ci("https://github.com/erkal/elm-3d-playground-exploration"),Li("_blank")]),h([Or.eQ]))]));return r.aL?o(I,h([H("fixed w-10 h-10 p-1")]),h([n])):o(I,P,h([o(I,h([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",me(e.cS.eW-80)+"px")]),h([o(ya,ld,tm(tn(r.G).eA))])),o(I,h([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cS.fS>600?"600px":me(e.cS.fS-40)+"px")]),h([o(ya,ud,mm(r.G))])),o(bm,e,r)]))}),hm=y(function(e,r,n){var a=td(n.G),t=tn(n.G);return o(I,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",me(t.cS.fS)+"px"),o(se,"height",me(t.cS.eW)+"px")]),h([o(I,h([H("fixed")]),h([o(ya,Hc(nd),o(e,t,a))])),o(I,h([wa("gui")]),h([o(gm,t,n),o(ya,rd,o(r,t,a))]))]))}),_m=qe(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Xs,r,i,u,v),xi)}),l=function(u){var v=o(Ic,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(Qs,v,a)},xi)};return hs({e0:l,fH:Hc(ed(is)),fO:c,fQ:o(hm,e,t)})}),wm=R(function(e,r,n,a){return ze(_m,e,r,n,a,$(function(t,i){return o(I,P,P)}),y(function(t,i,c){return c}))}),ym=function(e){return{}},xm=$(function(e,r){return z(e,el(r))}),Sm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),xl=ir,Cm=function(e){return p(Dn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),xl,e)},Lm=y(function(e,r,n){return p(Sm,e,r,Cm(n))}),nt=Lm,Nr=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(rl,z(a,t),n))}),Pm=R(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Ea,f,m,d,a)}),Sl=y(function(e,r,n){return L(Pm,e,r,n,1)}),zm=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(nl,z(a,t),n))}),ar=ov,km=h([p(nt,"Camera",!0,h([p(Nr,"camera distance",z(3,60),50),p(Nr,"camera azimuth",z(0,2*ar),0),p(Nr,"camera elevation",z(-ar/2,ar/2),.5)])),p(nt,"Parameters",!0,h([p(Nr,"delay per index",z(0,1),.15),p(zm,"number of spheres",z(10,100),50)])),p(nt,"Colors and light",!0,h([p(Nr,"saturation",z(0,1),.5),p(Nr,"lighting",z(0,1),.7),o(xm,"background color",p(Sl,.85,.32,.45))]))]),Tm=$(function(e,r){return r}),Mm=$(function(e,r){return o(we,function(n){if(n.$)return 0;var a=n.b;return a},o(Fn,e,r.av))}),Dm=$(function(e,r){return o(or,0,Rn(o(Vn,Mm(e),r)))}),Am=$(function(e,r){return o(Dm,e,r.eA)}),qr=Am,Bm=uv,Fm=function(e){return e},$r=function(e){return e},Ft=function(e){var r=e;return-r},Vm=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),Cl=function(e){var r=e;return r.c3},Ll=function(e){var r=e;return r.c4},Rm=function(e){return o(Vm,Cl(e),Ll(e))},Er=function(e){var r=e;return r.cA},Vr=iv,en=cv,ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=en(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c5*u,T=l*C,N=2*(w-T),E=2*(w+T),U=d*C,j=2*(U+b),W=2*(U-b),B=g*C,O=2*(B-m),Q=2*(B+m),ie=C*C,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+N*i.fY+j*i.c5,fY:E*i.fU+oe*i.fY+O*i.c5,c5:W*i.fU+Q*i.fY+_*i.c5}}),En=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=en(c),v=a.cA,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,T=l*C,N=w*C,E=C*C,U=1-2*(_+E),j=b.c5*u,W=l*j,B=2*(N-W),O=2*(N+W),Q=w*j,ie=2*(Q+T),ve=2*(Q-T),oe=C*j,de=2*(oe-x),Me=2*(oe+x),Se=j*j,pr=1-2*(E+Se),br=1-2*(_+Se);return{fU:s.fU+pr*d+B*m+ie*f,fY:s.fY+O*d+br*m+de*f,c5:s.c5+ve*d+Me*m+U*f}}),wr=function(e){return e},Lr=function(e){var r=e;return r.c3},Pr=function(e){var r=e;return r.c4},zr=function(e){var r=e;return r.c6},Pl=y(function(e,r,n){return wr({cA:p(En,e,r,Er(n)),c3:p(ca,e,r,Lr(n)),c4:p(ca,e,r,Pr(n)),c6:p(ca,e,r,zr(n))})}),Mi=y(function(e,r,n){return p(Pl,e(n),r,n)}),xo=function(e){var r=e;return r.eH},jn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),zl=$(function(e,r){return wr({cA:o(jn,e,Er(r)),c3:Lr(r),c4:Pr(r),c6:zr(r)})}),Um=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),Em=y(function(e,r,n){return o(zl,o(Um,r,e),n)}),jm=y(function(e,r,n){return p(Em,xo(e(n)),r,n)}),jr=$(function(e,r){return{eH:r,cA:e}}),Nm=function(e){var r=e;return o(jr,r.cA,r.c3)},Wm=function(e){var r=e;return o(jr,r.cA,r.c4)},Gm=function(e){var r=e;return o(jr,r.cA,r.c6)},Ym=function(e){var r=wr({cA:e.aR,c3:Ll(e.dl),c4:Rm(e.dl),c6:Cl(e.dl)}),n=p(jm,Gm,e.cb,p(Mi,Nm,Ft(e.bC),p(Mi,Wm,e.bx,r)));return n},Hm=function(e){return{$:0,a:e}},xe=function(e){var r=e;return X(r)},la=function(e){var r=e;return .5*r},Im=lv,Jm=function(e){var r=e;return Im(r)},Om=function(e){var r=la(xe(e.ej)),n=Jm(r);return{cL:Hm(n),c1:e.c1}},hr=function(e){return e},Je={fU:0,fY:0,c5:0},kl=Dr,Ar=function(e){return e},qm=Ar({fU:1,fY:0,c5:0}),So=qm,Tl=Ar({fU:0,fY:0,c5:1}),Co=Tl,Zm=kl({cA:Je,c3:Co,c4:So}),Xm=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Om({ej:hr(2*Bm(.5)),c1:Ym({bx:hr(n),cb:$r(t),bC:hr(a),aR:Fm(r),dl:Zm})})},Qm=function(e){return Xm({bx:o(qr,"camera azimuth",e),cb:o(qr,"camera distance",e),bC:o(qr,"camera elevation",e),aR:{fU:0,fY:0,c5:0}})},qn=function(e){return e*ar/180},Km=$(function(e,r){return o(we,function(n){if(n.$===2){var a=n.a;return a}else return ho},o(Fn,e,r.av))}),e0=$(function(e,r){return o(or,ho,Rn(o(Vn,Km(e),r)))}),r0=$(function(e,r){return o(e0,e,r.eA)}),n0=r0,Lo=$(function(e,r){return{$:0,a:e,b:r}}),Po=$(function(e,r){return{$:2,a:e,b:r}}),ja=function(e){return{$:5,a:e}},zo=$(function(e,r){return{$:4,a:e,b:r}}),Na=$(function(e,r){return{$:3,a:e,b:r}}),ko=$(function(e,r){return{$:1,a:e,b:r}}),a0=function(e){var r=e;return r},Wa=function(e){var r=e;return a0(r.er)},Ga=function(e){var r=e;return r.aK},t0=y(function(e,r,n){return{er:p(Pl,e,r,Wa(n)),aK:Ga(n)}}),o0=$(function(e,r){var n=o(En,e,r),a=o(ca,e,r);return function(t){var i=t;return o(jr,n(i.cA),a(i.eH))}}),i0=y(function(e,r,n){var a=n;return{k:p(o0,e,r,a.k),e9:a.e9,fu:a.fu}}),To=function(e){var r=e;return r},c0=function(e){return e},Mo=$(function(e,r){var n=To(r),a=n.a,t=n.b;return c0(z(e(a),e(t)))}),l0=y(function(e,r,n){return o(Mo,o(En,e,r),n)}),Ya=function(e){var r=e;return r.ey},Ha=function(e){var r=e;return r.fu},Ia=$(function(e,r){return{ey:r,fu:xe(e)}}),u0=y(function(e,r,n){return o(Ia,Ha(n),p(En,e,r,Ya(n)))}),Do=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),v0=y(function(e,r,n){return o(Do,o(En,e,r),n)}),Ml=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Lo,l,p(t0,e,r,a));case 1:var l=n.a,t=n.b;return o(ko,l,p(v0,e,r,t));case 3:var l=n.a,i=n.b;return o(Na,l,p(u0,e,r,i));case 2:var l=n.a,c=n.b;return o(Po,l,p(i0,e,r,c));case 4:var l=n.a,u=n.b;return o(zo,l,p(l0,e,r,u));default:var v=n.a;return ja(o(re,o(Ml,e,r),v))}}),$0=Ar({fU:0,fY:1,c5:0}),Ao=$0,f0=o(jr,Je,Ao),Vt=$(function(e,r){return p(Ml,f0,hr(e),r)}),s0=$(function(e,r){return o(we,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Fn,e,r.av))}),d0=$(function(e,r){return o(or,0,Rn(o(Vn,s0(e),r)))}),m0=$(function(e,r){return o(d0,e,r.eA)}),Dl=m0,p0=function(e){return ja(e)},Rt=function(e){return{$:0,a:e}},Al=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Bl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),at=function(e){return p(Bl,0,1,e<=.04045?e/12.92:o(Un,(e+.055)/1.055,2.4))},Nn=G$,b0=function(e){var r=_o(e),n=r.cM,a=r.cc,t=r.b5;return p(Nn,at(n),at(a),at(t))},g0=function(e){return p(Al,0,Rt(b0(e)),Rt(0))},h0=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),_0=$(function(e,r){return{er:o(zl,e,Wa(r)),aK:Ga(r)}}),w0=$(function(e,r){var n=r;return o(jr,o(jn,e,n.cA),n.eH)}),y0=$(function(e,r){var n=r;return{k:o(w0,e,n.k),e9:n.e9,fu:n.fu}}),x0=$(function(e,r){return o(Mo,jn(e),r)}),S0=$(function(e,r){return o(Ia,Ha(r),o(jn,e,Ya(r)))}),C0=$(function(e,r){return o(Do,jn(e),r)}),Bo=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(h0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Lo,s,o(_0,i,c));case 1:var s=r.a,l=r.b;return o(ko,s,o(C0,i,l));case 3:var s=r.a,u=r.b;return o(Na,s,o(S0,i,u));case 2:var s=r.a,v=r.b;return o(Po,s,o(y0,i,v));case 4:var s=r.a,d=r.b;return o(zo,s,o(x0,i,d));default:var m=r.a;return ja(o(re,Bo(V(n,a,t)),m))}}),L0=function(e){return Bo(V(e,0,0))},P0=function(e){return Bo(V(0,e,0))},K=$(function(e,r){var n=r;return e*n}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Wn=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c5:a.c5+r*(t.c5-a.c5)}}),z0=y(function(e,r,n){var a=Wa(n),t=Lr(a),i=Pr(a),c=zr(a),l=p(Wn,e,r,Er(a)),u=r>=0?wr({cA:l,c3:t,c4:i,c6:c}):wr({cA:l,c3:fr(t),c4:fr(i),c6:fr(c)}),v=Ga(n),s=v.a,d=v.b,m=v.c,f=xe(o(K,r,s)),g=xe(o(K,r,d)),b=xe(o(K,r,m));return{er:u,aK:V(f,g,b)}}),Fo=function(e){var r=e;return r.k},Di=function(e){return xo(Fo(e))},Fl=function(e){var r=e;return r.cA},k0=function(e){return Fl(Fo(e))},Vl=function(e){var r=e;return r.e9},Rl=function(e){var r=e;return r.fu},T0=y(function(e,r,n){var a=xe(o(K,r,Rl(n))),t=xe(o(K,r,Vl(n))),i=r>=0?Di(n):fr(Di(n)),c=p(Wn,e,r,k0(n));return{k:o(jr,c,i),e9:t,fu:a}}),M0=y(function(e,r,n){return o(Mo,o(Wn,e,r),n)}),D0=y(function(e,r,n){return o(Ia,o(K,X(r),Ha(n)),p(Wn,e,r,Ya(n)))}),A0=y(function(e,r,n){return o(Do,o(Wn,e,r),n)}),Ul=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Lo,c,p(z0,Je,e,n));case 1:var c=r.a,a=r.b;return o(ko,c,p(A0,Je,e,a));case 3:var c=r.a,t=r.b;return o(Na,c,p(D0,Je,e,t));case 2:var c=r.a,i=r.b;return o(Po,c,p(T0,Je,e,i));case 4:var c=r.a,l=r.b;return o(zo,c,p(M0,Je,e,l));default:var u=r.a;return ja(o(re,Ul(e),u))}}),B0=$(function(e,r){return o(Na,e,o(Ia,$r(r),Je))}),F0=$(function(e,r){return(r-Gc(r/e)*e)/e}),V0=function(e){return 2*ar*e},Zn=R(function(e,r,n,a){return e+(r-e)*(1+Vr(V0(o(F0,n,a))))/2}),R0=$(function(e,r){var n=e.db+r*o(qr,"delay per index",e),a=o(qr,"saturation",e),t=o(Dl,"number of spheres",e),i=30/t,c=o(qr,"lighting",e),l=L(Zn,0,1,7,n);return o(P0,i*1.1*r,o(Vt,L(Zn,0,10,20,n),o(L0,L(Zn,3,4,1,n),o(Ul,L(Zn,1,4,4,n),o(B0,g0(p(Sl,l,a,c)),i)))))}),tt=function(e){var r=o(Dl,"number of spheres",e);return p0(o(re,R0(e),o(Fr,-(r/2|0),r/2|0)))},U0=function(e){return e},E0=function(e){return $r(.01*e)},Ai=function(e){return e},j0=function(e){return e},N0=function(e){return{$:0,a:e}},W0=N0,G0={$:3},Y0=G0,H0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),I0=H0,J0=$(function(e,r){return r.b?p(mr,A,r,e):e}),We=function(e){return p(mr,J0,P,e)},Vo=$(function(e,r){return We(o(re,e,r))}),O0=function(e){return{$:1,a:e}},q0=O0,Z0=function(e){return o(Cr,"height",Be(e))},X0=function(e){return $$(p$(e))},Q0=X0,K0=function(e){return{$:2,a:e}},ep=K0,rp=function(e){return o(Tr,"",e)},np=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return rp(h(["rgba(",me(c(r)),"%,",me(c(n)),"%,",me(c(a)),"%,",me(i(t)),")"]))},ap=$(function(e,r){switch(r.$){case 0:return o(Df,e,r);case 1:return o(Af,e,r);case 2:return o(Bf,e,r);case 3:return o(Ff,e,r);case 4:return o(Vf,e,r);default:return o(Rf,e,r)}}),tp=$(function(e,r){switch(r.$){case 0:return o(lf,e,r);case 1:return o(uf,e,r);case 2:return o(vf,e,r);case 3:return o($f,e,r);case 4:return o(ff,e,r);case 5:return o(sf,e,r);case 6:return o(df,e,r);case 7:return o(mf,e,r);default:return pf(e)}}),op=y(function(e,r,n){return p(Mf,e,r,n)}),Bi=function(e){var r=e;return r},on=q$,ot=L(on,1,1,1,1),Ze=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),ip=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),cp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(ip,n*a/t,n,n*(1-a-t)/t)}),lp=function(e){var r=e.a,n=e.b,a=e.c;return p(Nn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ro=$(function(e,r){return lp(o(cp,e,r))}),El=$(function(e,r){return{dp:_r(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ke=rf,up=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},it=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return ze(t,e,c,up(a),a.dp,r,n)}),jl=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(El,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(it,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(A,S(it,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(A,S(it,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Dn,L(jl,e,r,n,a),i,T)}}),vp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Nl=vp,Uo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),$p=function(e){var r=e.Z,n=e.W,a=e.V;return L(Uo,518,r,n,a)},fp=$(function(e,r){return{$:6,a:e,b:r}}),sp=fp,Wl=h([$p({V:1,W:0,Z:!1}),L(Nl,!1,!1,!1,!1),o(sp,0,1)]),rn=519,Eo=8,Gl=15,Zr=7681,dp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=cf,mp=$(function(e,r){return{$:0,a:e,b:r}}),pp=mp({df:1,$7:0,dV:5}),Ae=N$,bp=pp(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),gp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},hp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},jo=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(hp,a,t,i)))}),No=function(e){return p(jo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Wo=function(e){return S(ne,h([No(e),L(Nl,!1,!1,!1,!1)]),gp,dp,bp,{})},_p=Wo({a8:Zr,co:0,cN:Eo,bl:rn,c2:Gl,bt:Zr,bu:Zr}),wp=516,Fi=5386,ye=7680,yp=function(e){return o(Un,2,e+4)},Yl=function(e){return Wo({a8:ye,co:Gl,cN:Eo,bl:wp,c2:yp(e),bt:Fi,bu:Fi})},xp=y(function(e,r,n){return We(h([p(Ze,e,n,Wl),h([Yl(r),_p])]))}),Sp=$(function(e,r){return We(o(Rc,xp(e),r))}),Cp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Uo,513,r,n,a)},Lp=Cp({V:1,W:0,Z:!0}),Pp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},zp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return Pp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},kp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=$(function(e,r){var n=e,a=r;return p(kp,32774,n,a)}),Tp=1,Ri=771,Mp=770,Go=zp({bv:0,aH:o(Vi,Tp,Ri),by:0,bA:o(Vi,Mp,Ri),bF:0,bV:0}),Wr=h([Lp,Go]),Dp=function(e){var r=e;return r.dO},Ap=function(e){var r=e;return r.dP},Hl=function(e){var r=e;return r.dQ},Bp=function(e){var r=e;return r.dR},Fp=function(e){var r=e;return r.dS},Il=function(e){var r=e;return r.dT},Xr=$(function(e,r){var n=e,a=r;return a-n}),Jl=function(e){return V(o(Xr,Bp(e),Dp(e)),o(Xr,Fp(e),Ap(e)),o(Xr,Il(e),Hl(e)))},Ui=function(e){var r=e;return Er(r)},Vp=function(e){return e},Rp=function(e){return wr({cA:Vp({fU:e.H,fY:e.I,c5:e.J}),c3:Ar({fU:e.q,fY:e.r,c5:e.s}),c4:Ar({fU:e.t,fY:e.u,c5:e.v}),c6:Ar({fU:e.w,fY:e.x,c5:e.y})})},ct=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Ol=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),ql=$(function(e,r){return{cA:o(Ol,e,Er(r)),c3:o(ct,e,Lr(r)),c4:o(ct,e,Pr(r)),c6:o(ct,e,zr(r))}}),Up=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),Pa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(nr,n,a)}),ua=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ua,n,a)}),Ep=$(function(e,r){var n=Pa(r),a=Pa(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},jp=function(e){var r=e;return V(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),Np=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=la(xe(a)),c=la(xe(n)),l=la(xe(t)),u=jp(r),v=u.a,s=u.b,d=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o(Xr,c,v),dS:o(Xr,i,s),dT:o(Xr,l,d)}}),Ei=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,d=Ge(zr(e)),m=X(l*d.fU)+X(c*d.fY)+X(i*d.c5),f=Ge(Pr(e)),g=X(l*f.fU)+X(c*f.fY)+X(i*f.c5),b=Ge(Lr(e)),w=X(l*b.fU)+X(c*b.fY)+X(i*b.c5),x=o(Np,V(w,g,m),o(Ol,e,p(Up,s,v,u)));if(a.$)return te(x);var _=a.a;return te(o(Ep,_,x))}),Ut=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Ei,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Ei,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Ut,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(ql,Rp(v),e),m=r*v.bX,f=e,g=r,b=L(Ut,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),cn=Y$,ln=H$,un=I$,Zl=function(e){return{$:4,a:e}},Wp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Gn=function(e){return Zl(o(Wp,e,P))},Gp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Yp=function(e){var r=e;return r},ji=Wo({a8:Zr,co:0,cN:Eo,bl:rn,c2:255,bt:Zr,bu:Zr}),Jr=mv,ur=0,Hp=function(e){var r=e,n=o(nr,X(r.fU),o(nr,X(r.fY),X(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=Jr(i*i+t*t+a*a);return c*n}else return ur},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Ee=$(function(e,r){var n=e,a=r;return Ke({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),dn=z({bd:o(Ee,Pe,Pe),bK:o(Ee,Pe,Pe),bL:o(Ee,Pe,Pe),bM:o(Ee,Pe,Pe)},L(on,0,0,0,0)),Xl=514,Ql=function(e){var r=e.Z,n=e.W,a=e.V;return L(Uo,515,r,n,a)},Kl=240,Ip=h([Ql({V:1,W:0,Z:!0}),No({a8:ye,co:Kl,cN:0,bl:Xl,c2:0,bt:ye,bu:ye}),Go]),Jp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=xe(a),l=c,u=xe(t),v=u,s=n.cL;if(s.$){var m=s.a;return Pt(v)?Ke({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return Pt(v)?Ke({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Xn=$(function(e,r){return(1&e>>r)===1?0:1}),Op=function(e){return h([Ql({V:1,W:0,Z:!0}),No({a8:ye,co:Kl,cN:e,bl:Xl,c2:0,bt:ye,bu:ye}),Go])},qp=y(function(e,r,n){return We(o(re,function(a){var t=a<<4,i=L(on,o(Xn,a,0),o(Xn,a,1),o(Xn,a,2),o(Xn,a,3));return p(Ze,e,z(r,i),Op(t))},o(Fr,1,o(Un,2,n)-1)))}),Qr=function(e){var r=e;return r},Zp=nf,Ni=function(e){var r=e;return fr(zr(r))},Xp={cA:Je,c3:So,c4:Ao,c6:Co},Ja=function(e){var r=e;return r},Qp=function(e){var r=Ja(Er(e)),n=Ge(zr(e)),a=Ge(Pr(e)),t=Ge(Lr(e));return Ke({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Kp=$(function(e,r){var n=r;return Qp(o(ql,n,e))}),eb=function(e){return o(Kp,Xp,e)},rb=function(e){var r=e;return r.c1},nb=function(e){var r=e;return Lr(r)},ab=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),tb=function(e){var r=e;return Pr(r)},ob=function(e){var r=rb(e.ev),n=wr({cA:Ui(r),c3:nb(r),c4:tb(r),c6:fr(Ni(r))}),a=Gn(e.aP),t=a,i=L(Ut,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=eb(r),u=o(K,.99,o(ce,xe(e.aJ),Ft(Hl(c)))),v=Jl(c),s=v.a,d=v.b,m=v.c,f=Hp(p(ab,s,d,m)),g=o(K,1.01,o(hn,f,Ft(Il(c)))),b=o(Jp,e.ev,{eq:e.eq,eP:g,fi:u}),w=Zp(b).dM,x=w?Ge(fr(Ni(r))):Qr(Ui(r)),_=function(){var oe=e.bZ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,E=N,U=o(Ro,E,e.b$),j=U,W=Ke({dx:0,dy:x.fU,dz:cn(j),dA:e.ec,dB:0,dC:x.fY,dD:ln(j),dE:Yp(f),dF:0,dG:x.c5,dH:un(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),B=ze(jl,W,l,b,Gp,t,{M:P,U:P,fB:P}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return We(h([p(Ze,B.M,z(Q,ot),Wr),p(Ze,B.U,dn,Wr)]));case 1:var Q=O.a;return We(h([p(Ze,B.M,dn,Wr),h([ji]),p(Ze,B.fB,Q.bd,Wl),h([Yl(0)]),p(Ze,B.M,z(Q,ot),Ip),p(Ze,B.U,dn,Wr)]));default:var ie=O.a,ve=O.b;return We(h([p(Ze,B.M,z(ve,ot),Wr),h([ji]),o(Sp,B.fB,ie),p(qp,B.M,ve,Br(ie)),p(Ze,B.U,dn,Wr)]))}},ib=function(e){return o(Cr,"width",Be(e))},cb=$(function(e,r){var n=h([q0(1),ep(0),W0(!0),L(I0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return V(n,"0",1);case 1:return V(o(A,Y0,n),"1",1);default:var T=C.a;return V(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Bi(v),d=o(se,"height",Be(s)+"px"),m=Bi(u),f=m/s,g=o(Vo,function(C){return ob({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(se,"width",Be(m)+"px"),w=e.aI,x=w,_=np(x);return p(Q0,"div",h([o(se,"padding","0px"),b,d]),h([z(i,p(op,t,h([ib(Oe(m*c)),Z0(Oe(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),lb=function(e){return o(cb,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},eu=function(e){return e},Wi=eu({fU:.31271,fY:.32902}),ub=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Ro,r.cd,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cJ:0,bV:cn(u),cZ:1,fU:-t,fY:-i,c5:-c}}),vb=function(e){return e},$b=function(e){return vb(1.2*o(Un,2,e))},lt=function(e){return e},fb={$:0},sb=fb,ru=function(e){return e},db=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Gi=function(e){var r=e;return r},mb=function(e){e:for(;;){if(_r(e.e2,ur)&&_r(e.e3,ur))return Pe;if(o(db,xe(e.e2),xe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=X(Gi(e.e3)/ar),a=X(Gi(e.e2)/ar),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Ro,ru(1),e.b6),v=u;return{by:a*un(v),ex:!1,bF:a*ln(v),cJ:n/a,bV:a*cn(v),cZ:3,fU:i,fY:c,c5:l}}}},Yi=function(e){return mb({b6:e.b6,e2:e.cd,e3:ur,ei:e.ei})},pb=function(e){var r=e;return r},nu=function(e){var r=p(Bl,1667,25e3,pb(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return eu({fU:n,fY:a})},au=function(e){return e},bb=nu(au(12e3)),gb=nu(au(5600)),hb=function(e){return{$:2,a:e}},_b=function(e){return hb(e)},wb=$(function(e,r){return{$:2,a:e,b:r}}),tu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},yb=function(e){var r=e;return r.ex},xb=tu(dn.a),Sb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(mr,n,z(P,P),r)}),Cb=function(e){var r=e;return Ke({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Lb=ee(function(e,r,n,a,t,i,c,l){var u=o(Sb,yb,h([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(wb,o(re,Cb,v),{bd:o(Ee,m,g),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return xb}else return tu({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),Pb=y(function(e,r,n){return Da(Lb,e,r,n,Pe,Pe,Pe,Pe,Pe)}),zb=function(e){var r=o(ub,j0(e.fB),{b6:gb,eH:e.fJ,cd:lt(8e4)}),n=Yi({b6:bb,cd:lt(2e4),ei:e.ei}),a=Yi({b6:Wi,cd:lt(15e3),ei:fr(e.ei)}),t=p(Pb,r,n,a);return lb({b0:_b(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:$b(15),bJ:t,bZ:sb,b$:Wi})},ou=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),kb=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),iu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Tb=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Mb=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Db=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Yo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Db,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(ou,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(kb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(iu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Mb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(cu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(Tb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ho={$:0},Ab=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Pa(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),Bb=y(function(e,r,n){var a=Pa(e(r));return Da(Ab,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),ut=$(function(e,r){var n=e,a=r;return J(a,n)<1}),lu=function(e){return o(ut,e.dO,e.dR)&&o(ut,e.dP,e.dS)&&o(ut,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},kn=function(e){var r=e;return r},_n=function(e){var r=e;return r.fU},wn=function(e){var r=e;return r.fY},yn=function(e){var r=e;return r.c5},uu=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=_n(n),c=wn(n),l=yn(n),u=_n(a),v=wn(a),s=yn(a),d=_n(t),m=wn(t),f=yn(t);return lu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},vu=J$,ke=function(e){return vu(Ja(e))},$u=function(e){var r=e;return r},Oa=function(e){return vu($u(e))},Fb=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Et=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),Vb={fU:0,fY:0,c5:0},Rb=$(function(e,r){var n=e,a=r,t=o(nr,X(a.fU),o(nr,X(a.fY),X(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=Jr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return Vb}),Ub=Rb(ru(1)),fu=y(function(e,r,n){var a=o(Et,r,n),t=o(Et,e,r);return Ub(o(Fb,a,t))}),Eb=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Oa(p(fu,n,a,t));return V({o:i,bT:ke(n)},{o:i,bT:ke(a)},{o:i,bT:ke(t)})},jb=$(function(e,r){return{$:2,a:e,b:r}}),su=jb({df:3,$7:0,dV:4}),Nb=function(e){if(e.b){var r=e.a,n=e.b,a=su(o(re,Eb,e)),t=p(Bb,uu,r,n);return L(ou,t,e,a,0)}else return Ho},Ue=y(function(e,r,n){return V(e,r,n)}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),du=function(){var e=$r(1),r=$r(1),n=$r(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),d=p(be,i,v,l),m=o(K,.5,n),f=p(be,m,t,a),g=p(be,m,v,a),b=p(be,m,t,l),w=p(be,m,v,l);return Yo(Nb(h([p(Ue,c,g,f),p(Ue,c,s,g),p(Ue,u,b,w),p(Ue,u,w,d),p(Ue,f,g,w),p(Ue,f,w,b),p(Ue,c,d,s),p(Ue,c,u,d),p(Ue,c,f,b),p(Ue,c,b,u),p(Ue,s,w,g),p(Ue,s,d,w)])))}(),Kn={$:0},Wb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Gb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Oa(p(fu,u,l,c)),s={o:v,bT:ke(u)},d={o:v,bT:ke(l)},m={o:v,bT:ke(c)};return o(A,s,o(A,d,o(A,m,n)))}),Io=function(e){var r=e;return r.D},Yb=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),jt=4294967295>>>32-Ln,Nt=Xu,Hb=y(function(e,r,n){e:for(;;){var a=jt&r>>>e,t=o(Nt,a,n);if(t.$){var v=t.a;return o(Nt,jt&r,v)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),Ib=function(e){return e>>>5<<5},Jb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,Ib(n))>-1?te(o(Nt,jt&e,i)):te(p(Hb,a,e,t))}),Jo=function(e){var r=e;return r.ah},vt=$(function(e,r){return o(Jb,e,Jo(r))}),Ob=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Yb,y(function(c,l,u){return V(c,l,u)}),o(vt,a,e),o(vt,t,e),o(vt,i,e))};return o(Vn,r,Io(e))},qb=y(function(e,r,n){e:for(;;){var a=o(vo,Ve,e),t=a.a,i=a.b;if(J(Ct(t),Ve)<0)return o(Yc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Wc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Oo=function(e){return e.b?p(qb,e,P,0):jc},Zb=y(function(e,r,n){return e(r(n))}),Xb=$(function(e,r){return!o(al,o(Zb,_s,e),r)}),Qb=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Kb=function(e){var r=e.a;return r},mu=$(function(e,r){var n=Kb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(Xb,a,r)?{D:r,ah:e}:{D:o(Qb,a,r),ah:e}}),e1=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Yn=e1({df:1,$7:3,dV:4}),va=$(function(e,r){var n=Qr(r),a=Qr(e);return z(V(a.fU,a.fY,a.c5),V(n.fU,n.fY,n.c5))}),Hi=p(Nn,0,0,0),$t=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Fn,o(va,e,r),t);if(v.$){var d={o:Hi,bT:ke(r)},m={o:Hi,bT:ke(e)},f=u+1,g=u;return V(o(A,V(n,g,f),o(A,V(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),r1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,T=ze($t,s,m,f,b,r,ze($t,d,s,g,f,r,ze($t,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,E=N.a,U=N.b;return z(E,Fe(U))}}),n1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(bn,o(va,m,s),f,p(bn,o(va,s,d),g,p(bn,o(va,d,m),b,t))),x=o(A,V(b,g,f),a),_=e,C=v,T=n+3,N=x,E=w;e=_,r=C,n=T,a=N,t=E;continue e}else return V(a,t,n)}),kr=y(function(e,r,n){var a=Ob(n),t=p(mr,Gb(r),P,a),i=S(n1,r,a,0,P,xl),c=i.a,l=i.b,u=i.c,v=S(r1,r,l,a,0,V(c,P,u)),s=v.a,d=v.b,m=yl(d)?t:le(t,d);return p(Wb,e,o(mu,Oo(m),s),o(Yn,m,s))}),Wt=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Fr,0,Br(e)-1)),ah:Oo(We(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},pu=function(e){switch(e.$){case 0:return Kn;case 1:var a=e.a,r=e.b,n=o(re,kn,r);return p(kr,a,Dr,Wt(n));case 2:var a=e.a,r=e.b,n=o(re,kn,r);return p(kr,a,Dr,Wt(n));case 3:var a=e.a,t=e.b;return p(kr,a,Dr,t);case 4:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 8:return Kn;case 9:return Kn;default:return Kn}},Ii=pu(du),bu={$:0},k=bu,pe=$(function(e,r){return{$:1,a:e,b:r}}),a1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},t1=1029,o1=function(e){return{$:5,a:e}},gu=function(e){var r=e;return o1(r)},i1=gu(t1),c1=1028,l1=gu(c1),Te=y(function(e,r,n){return r===1?e?o(A,i1,n):o(A,l1,n):n}),hu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ft=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Te,l,a,d),hu,a1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),qo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},_u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Te,l,a,d),_u,qo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),wu=$(function(e,r){return{$:3,a:e,b:r}}),u1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},yu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},v1=R(function(e,r,n,a){return o(wu,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,yu,u1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Zo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Hn=function(e){var r=e;return r},qa=O$,lr=ge(function(e,r,n,a,t){return o(pe,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Te,u,t,m),_u,Zo,a,{aN:o(qa,Hn(r),e),b:l,c,d:s,e:i,f:v})}))}),$1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},f1=ge(function(e,r,n,a,t){return o(wu,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,yu,$1,t,{aN:o(qa,Hn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ea=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),Su,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Lu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},s1=qe(function(e,r,n,a,t,i){return o(pe,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Te,v,i,f),Lu,Cu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},d1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,ee(function(d,m,f,g,b,w,x,_){var C=x.a,T=x.b;return S(ne,p(Te,g,s,_),Lu,Pu,v,{b4:e,b7:r,b8:i,b9:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},zu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},ra=qe(function(e,r,n,a,t,i){return o(pe,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Te,v,i,f),Su,zu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),m1=function(e){return{$:0,a:e}},Ji=$(function(e,r){return{$:1,a:e,b:r}}),xn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),p1=function(e){return L(on,cn(e),ln(e),un(e),1)},Xo=L(on,0,0,0,0),$a=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Xo)}else{var n=r.a;return z(e,p1(n))}}),ku=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ji,z(t,Xo),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ji,o($a,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,m1(a)}}),b1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),na=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),g1=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),h1=function(e){return o(Ae,e,1)},Gt=o(Ae,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Gt)}else{var n=r.a;return z(e,h1(n))}}),Tu=R(function(e,r,n,a){var t=L(g1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(na,z(u,Xo),o(Gr,u,r),o(Gr,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(na,o($a,u,e),z(u,Gt),o(Gr,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(na,o($a,u,e),o(Gr,u,r),z(u,Gt),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(na,o($a,u,e),o(Gr,u,r),o(Gr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(b1,i,c,l)}}),_1={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},st=ge(function(e,r,n,a,t){return o(pe,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Te,u,t,m),hu,_1,a,{b1:Hn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Mu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},w1=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),Mu,Cu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),y1=It(function(e,r,n,a,t,i,c,l,u){return o(pe,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ne,p(Te,m,u,w),Mu,Pu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Tn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),x1=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},S1=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},C1=function(e){var r=e;return p(Tn,r.dT,r.dQ,.5)},L1=function(e){return p(be,x1(e),S1(e),C1(e))},G=function(e){var r=Jl(e),n=r.a,a=r.b,t=r.c;return{ey:Ja(L1(e)),eS:n/2,eT:a/2,eU:t/2}},Qo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(ft,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ft,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ft,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(v1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(st,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(st,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(st,l,v,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(f1,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(ku,s,E);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(w1,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ze(s1,b,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(ea,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(ea,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(ea,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(ea,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,E=e.e,U=L(Tu,C,T,N,E);if(U.$){var O=U.a,Q=O.a,ie=O.b,ve=U.b,oe=ve.a,de=ve.b,Me=U.c,Se=Me.a,pr=Me.b,br=U.d,x=br.a,_=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Iu(y1,Q,ie,oe,de,Se,pr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return d1(Q)(ie)(oe)(de)(Se)(pr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=U.a,W=U.b,B=U.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return ze(ra,j,W,B,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return ze(ra,j,W,B,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return ze(ra,j,W,B,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ze(ra,j,W,B,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),dt=function(e){var r=e;return r.fU},mt=function(e){var r=e;return r.fY},pt=function(e){var r=e;return r.c5},P1=function(e){var r=e,n=pt(r.c6),a=mt(r.c6),t=dt(r.c6),i=pt(r.c4),c=mt(r.c4),l=dt(r.c4),u=pt(r.c3),v=mt(r.c3),s=dt(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},z1=function(e){var r=Ja(Er(e)),n=Ge(zr(e)),a=Ge(Pr(e)),t=Ge(Lr(e));return{dp:P1(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Yr=$(function(e,r){return{$:5,a:e,b:r}}),Du=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(El,a,e);return o(Yr,i,t);case 1:return o(Yr,e,n);case 3:return o(Yr,e,n);case 2:return o(Yr,e,n);default:return o(Yr,e,n)}}),Au=$(function(e,r){return o(Du,z1(e),r)}),Za=function(e){return{$:2,a:e}},k1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),T1=X$,M1=Z$,Oi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=M1(a),g=f.fU,b=f.fY,w=f.c5,x=f.em,_=T1({em:x,fU:g*s,fY:b*d,c5:w*m});return Da(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Yt=$(function(e,r){switch(r.$){case 0:return bu;case 5:var n=r.a,a=r.b;return o(Yr,n,o(Yt,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(k1,e,t),o(Oi,e,i));case 3:return r;case 2:var i=r.a;return Za(o(Oi,e,i));default:var c=r.a;return Zl(o(re,Yt(e),c))}}),Ko=$(function(e,r){var n=r;return o(Yt,e,n)}),ei={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Bu=7683,Fu=7682,D1=p(jo,{co:0,cN:0,c2:15},{a8:ye,bl:rn,bt:ye,bu:Bu},{a8:ye,bl:rn,bt:ye,bu:Fu}),A1=p(jo,{co:0,cN:0,c2:15},{a8:ye,bl:rn,bt:ye,bu:Fu},{a8:ye,bl:rn,bt:ye,bu:Bu}),ri=$(function(e,r){return e?o(A,A1,r):o(A,D1,r)}),B1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},F1=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(ri,i,v),B1,ei,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},za=function(e){var r=F1(e);if(r.$)return k;var n=r.a;return Za(n)},V1=R(function(e,r,n,a){var t=o(Qo,n,du),i=function(){var s=z(e,r);return s.a?s.b?Gn(h([t,za(Ii)])):t:s.b?za(Ii):k}(),c=Ga(a),l=c.a,u=c.b,v=c.c;return o(Au,Wa(a),o(Ko,V(l,u,v),i))}),R1=$(function(e,r){return L(V1,!0,!0,e,r)}),Vu=$(function(e,r){return{$:0,a:e,b:r}}),U1=function(e){var r=_o(e),n=r.cM,a=r.cc,t=r.b5;return p(Nn,n,a,t)},E1=function(e){return o(Vu,0,Rt(U1(e)))},Sn=function(e){var r=e;return Vr(r)},j1=$(function(e,r){var n=r;return n/e}),qi=function(e){var r=e;return{fU:Vr(r),fY:en(r)}},N1=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Oa(a),bT:ke(n)},r)}),W1=Ma(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=un(l.bT),s=ln(l.bT),d=cn(l.bT),m=o(ua,e,d),f=o(nr,r,d),g=o(ua,n,s),b=o(nr,a,s),w=o(ua,t,v),x=o(nr,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return lu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Ru=$(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return Jt(W1,t,t,a,a,n,n,r)}),G1=function(e){var r=p(Dc,N1,P,Jo(e));if(r.b){var n=r.a,a=r.b,t=o(Yn,r,Io(e)),i=o(Ru,n,a);return L(iu,i,e,t,0)}else return Ho},Y1=Ar({fU:0,fY:0,c5:-1}),Zi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),ka=function(e){var r=e;return en(r)},mn=function(e){var r=e;return r},Ht=function(e){return hr(2*ar*e)},Xi=kl({cA:Je,c3:So,c4:Ao}),Uu=function(){var e=72,r=o(j1,e,Ht(1)),n=$r(1),a=mn(Tl),t=mn(Y1),i=$r(1),c=o(K,.5,i),l=p(be,ur,ur,c),u=o(K,-.5,i),v=p(be,ur,ur,u),s=function(f){var g=o(K,f,r),b=mn(o(Zi,Xi,qi(g))),w=o(K,Sn(g),n),x=o(K,ka(g),n),_=p(be,w,x,c),C=p(be,w,x,u),T=o(xa,e,f+1),N=o(K,T,r),E=mn(o(Zi,Xi,qi(N))),U=o(K,Sn(N),n),j=o(K,ka(N),n),W=p(be,U,j,u),B=p(be,U,j,c);return h([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),V({o:b,bT:C},{o:E,bT:W},{o:E,bT:B}),V({o:b,bT:C},{o:E,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(re,s,o(Fr,0,e-1)),m=Wt(We(d));return Yo(G1(m))}(),Qi=pu(Uu),H1=function(e){var r=e,n=X(r.c5),a=X(r.fY),t=X(r.fU);if(J(t,a)<1)if(J(t,n)<1){var i=Jr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=Jr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(J(a,n)<1){var i=Jr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=Jr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},I1=function(e){var r=H1(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return z(r,c)},J1=function(e){var r=xo(e),n=I1(r),a=n.a,t=n.b;return wr({cA:Fl(e),c3:a,c4:t,c6:r})},O1=R(function(e,r,n,a){var t=J1(Fo(a)),i=o(Qo,n,Uu),c=function(){var d=z(e,r);return d.a?d.b?Gn(h([i,za(Qi)])):i:d.b?za(Qi):k}(),l=Rl(a),u=l,v=Vl(a),s=v;return o(Au,t,o(Ko,V(u,u,s),c))}),q1=$(function(e,r){return L(O1,!0,!0,e,r)}),Ki={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},ec={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return Ke({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},aa=su(h([V({cY:0},{cY:1},{cY:2})])),Z1=$(function(e,r){var n=uu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(pe,a,ee(function(_,C,T,N,E,U,j,W){return S(ne,p(Te,N,0,W),Ki,qo,aa,{aw:t,b:T,c:C,d:U,e:_,bq:pn(r),f:E})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(pe,a,ee(function(_,C,T,N,E,U,j,W){return S(ne,p(Te,N,0,W),Ki,Zo,aa,{aN:o(qa,Hn(c),i),b:T,c:C,d:U,e:_,bq:pn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(ku,l,f);if(u.$)return k;var v=u.a;return o(pe,a,ee(function(_,C,T,N,E,U,j,W){var B=j.a,O=j.b;return S(ne,p(Te,N,0,W),ec,xu,aa,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:T,c:C,d:U,e:_,bq:pn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Tu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(pe,a,ee(function(_,C,T,N,E,U,j,W){var B=j.a,O=j.b;return S(ne,p(Te,N,0,W),ec,zu,aa,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:T,c:C,d:U,cQ:w,e:_,bq:pn(r),f:E})}))}}),X1=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(Yn,e,r)}(),Q1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},rc=function(e){return Za(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(ri,t,u),Q1,ei,X1,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},K1=R(function(e,r,n,a){var t=o(Z1,n,a),i=z(e,r);return i.a?i.b?Gn(h([t,rc(a)])):t:i.b?rc(a):k}),e3=$(function(e,r){return L(K1,!0,!0,e,r)}),r3=$(function(e,r){var n=yn(r),a=yn(e),t=wn(r),i=wn(e),c=_n(r),l=_n(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),n3=function(e){var r=To(e),n=r.a,a=r.b;return o(r3,n,a)},nc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},a3=$(function(e,r){return{$:1,a:e,b:r}}),t3=a3({df:2,$7:0,dV:1}),ac=t3(h([z({dw:0},{dw:1})])),o3=$(function(e,r){var n=n3(r),a=G(n),t=To(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(pe,a,ee(function(v,s,d,m,f,g,b,w){return S(ne,w,nc,qo,ac,{aw:l,du:ke(c),dv:ke(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(pe,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,nc,Zo,ac,{aN:o(qa,Hn(u),l),du:ke(c),dv:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),i3=$(function(e,r){return o(o3,e,r)}),ta=function(e){return hr(ar*(e/180))},tc=$(function(e,r){var n=e,a=r;return n/a}),c3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),oc=$(function(e,r){return e<1?P:S(c3,0,e,e,r,P)}),l3=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Oa(a),bT:ke(n),L:o(Ae,c,l)},r)}),u3=function(e){var r=p(Dc,l3,P,Jo(e));if(r.b){var n=r.a,a=r.b,t=o(Yn,r,Io(e)),i=o(Ru,n,a);return L(cu,i,e,t,0)}else return Ho},Eu=$(function(e,r){var n=e,a=r,t=Vr(a);return{fU:t*Vr(n),fY:t*en(n),c5:en(a)}}),v3=function(){var e=$r(1),r=72,n=o(Fr,0,r-1),a=o(oc,r,o(Tn,ur,Ht(1))),t=lo(r/2),i=o(Fr,0,t-1),c=o(oc,t,o(Tn,ta(90),ta(-90))),l=Oo(We(o(re,function(s){return o(re,function(d){return{o:mn(o(Eu,s,d)),bT:p(be,o(K,Sn(d)*Sn(s),e),o(K,Sn(d)*ka(s),e),o(K,ka(d),e)),L:z(o(tc,s,Ht(1)),o(tc,o(hn,ta(90),d),ta(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(re,function(s){return We(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([V(b,g,m),V(b,m,f)])},i))},n));return Yo(u3(o(mu,l,v)))}(),Ta=72,oa=2*Ta,$3=$(function(e,r){e:for(;;){var n=oa+1,a=o(xa,oa,2*e+3),t=o(xa,oa,2*e+2),i=2*e+1,c=2*e,l=oa,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),f3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),s3=$(function(e,r){e:for(;;){var n=p(f3,0,2*ar,e/Ta),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),d3=function(){var e=o(s3,Ta-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o($3,Ta-1,P);return o(Yn,e,r)}(),m3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ic=function(e){return Za(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(ri,!0,u),m3,ei,d3,{aw:p(Nn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},p3=function(e){var r=$u(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},b3=$(function(e,r){return o(Du,p3(e),r)}),g3=R(function(e,r,n,a){var t=o(Qo,n,v3),i=function(){var u=z(e,r);return u.a?u.b?Gn(h([t,ic()])):t:u.b?ic():k}(),c=Ha(a),l=c;return o(b3,o(Et,Je,Ya(a)),o(Ko,V(l,l,l),i))}),h3=$(function(e,r){return L(g3,!0,!0,e,r)}),_3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),w3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),y3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Vu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(_3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Al,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(w3,n,a,t,i,c)}},x3=y3,ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(R1,t,r)]);case 1:var t=e.a,n=e.b;return h([o(e3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(h3,x3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(q1,t,i)]);case 4:var c=e.a,l=e.b;return h([o(i3,E1(c),l)]);default:var u=e.a;return o(Vo,ju,u)}},S3=function(e){return o(Vo,ju,e)},C3=$(function(e,r){return zb({aI:U0(e.es),ev:e.ev,aJ:E0(.5),ca:e.ca,aK:z(Ai(Oe(e.cS.fS)),Ai(Oe(e.cS.eW))),aP:S3(r),fB:!0,fJ:o(Eu,hr(e.fI),hr(e.fK)),ei:Co})}),L3=$(function(e,r){return o(C3,{es:o(n0,"background color",e),ev:Qm(e),ca:e.ca,cS:e.cS,fI:-qn(135),fK:-qn(45)},h([tt(e),o(Vt,qn(120),tt(e)),o(Vt,qn(240),tt(e))]))}),P3=L(wm,L3,Tm,km,ym);const z3={Main:{init:P3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",_a(zn)))},o(M,"left",Z))},o(M,"pressedKeys",_a(zn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},k3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},T3=()=>{bt("pointerdown"),bt("wheel"),bt("keydown")},bt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},M3=z3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});T3();k3(M3);
