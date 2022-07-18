const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ye(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function jt(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Nt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ca(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ju=[];function Ou(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),Xu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=si(e),r=si(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var ev=$(function(e,r){var n=J(e,r);return n<0?Ac:n?Rf:Dc}),Tn=0;function k(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Xe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var L={$:0};function ar(e,r){return{$:1,a:e,b:r}}var rv=$(ar);function g(e){for(var r=L,n=e.length;n--;)r=ar(e[n],r);return r}function La(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return g(i)});Ye(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(La(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return g(La(r).sort(function(n,a){var t=o(e,n,a);return t===Dc?0:t===Ac?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var av=$(Math.pow);$(function(e,r){return r%e});var tv=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin;$(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,Ko=Math.log,dv=isNaN;function mv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var pv=$(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function gv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function hv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),wv=$(function(e,r){return r.split(e)}),yv=$(function(e,r){return r.join(e)}),xv=y(function(e,r,n){return n.slice(e,r)});function Sv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function ic(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function Tv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function Mv(e){return La(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Av(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bv(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var Fv=Wt(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Vv=Wt(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),Uv=Wt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function Rv(e){return{$:3,b:e}}var Ev=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Nv=$(function(e,r){return xr(e,[r])}),Wv=y(function(e,r,n){return xr(e,[r,n])});R(function(e,r,n,a){return xr(e,[r,n,a])});he(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Ye(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});jt(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(eo,"This is not valid JSON! "+a.message,r))}});var cc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return Gn(r)?ei(e.b,r,g):Ze("a LIST",r);case 4:return Gn(r)?ei(e.b,r,Gv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:ye(o(di,n,v.a));case 7:var a=e.e;if(!Gn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:ye(o(Bc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Ze("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return ye(o(di,i,v.a));t=ar(k(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ie(v))return v;s=ar(v.a,s)}return ye(Ef(Fe(s)));case 1:return ye(o(eo,e.a,r));case 0:return ue(e.a)}}function ei(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return ye(o(Bc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Gv(e){return o(ns,e.length,function(r){return e[r]})}function Ze(e,r){return ye(o(eo,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&ri(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return ri(e.g,r.g)}}function ri(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Yv=$(function(e,r){return JSON.stringify(r,null,e)+""});function lc(e){return e}y(function(e,r,n){return n[e]=r,n});function jr(e){return{$:0,a:e}}function Hv(e){return{$:1,a:e}}function mr(e){return{$:2,b:e,c:null}}var ft=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Jv=0;function Gt(e){var r={$:0,e:Jv++,f:e,g:null,h:[]};return Yt(r),r}function uc(e){return mr(function(r){r(jr(Gt(e)))})}function vc(e,r){e.h.push(r),Yt(e)}var Ov=$(function(e,r){return mr(function(n){vc(e,r),n(jr(Tn))})}),Ga=!1,ni=[];function Yt(e){if(ni.push(e),!Ga){for(Ga=!0;e=ni.shift();)qv(e);Ga=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Ht(e,r,n,a,t,i){var c=o(cc,e,r?r.flags:void 0);Ie(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),ti(l,b.b,t(v))}return ti(l,u.b,t(v)),d?{ports:d}:{}}var er={};function Zv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Qv(t,r)}return n}function Xv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,Iv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?P(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o(ft,l,e.b))}var Kv=$(function(e,r){return mr(function(n){e.g(r),n(jr(Tn))})});$(function(e,r){return o(Ov,e.h,{$:0,a:r})});function $c(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ai=[],Ya=!1;function ti(e,r,n){if(ai.push({p:e,q:r,r:n}),!Ya){Ya=!0;for(var a;a=ai.shift();)r$(a.p,a.q,a.r);Ya=!1}}function r$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)vc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:L,j:L},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function t$(e){er[e]&&an(3)}$(function(e,r){return r});function o$(e,r){return t$(e),er[e]={f:i$,u:r,a:c$},$c(e)}var i$=$(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=L,a=er[e].u,t=jr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(cc,a,c);Ie(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,lr=typeof document!="undefined"?document:{};function It(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var fc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Jt(n),e:t,f:e,b:i}})}),Nr=fc(void 0),l$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Jt(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:Jt(e),g:r,h:n,i:a}}var $$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});y(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return P(e,r,n,a,t)})});Ye(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return Nt(e,r,n,a,t,i,c,l)})});jt(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Ca(e,r,n,a,t,i,c,l,u)})});var sc=$(function(e,r){return{$:"a0",n:e,o:r}}),f$=$(function(e,r){return{$:"a1",n:e,o:r}}),dc=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),s$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(sc,r.n,p$(e,r.o)):r});function p$(e,r){var n=oo(r);return{$:r.$,a:n?p(as,n<3?b$:g$,Me(e),r.a):o($a,e,r.a)}}var b$=$(function(e,r){return k(e(r.a),r.b)}),g$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Jt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?oi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?oi(c,t,i):c[t]=i}return r}function oi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,hr(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?h$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function h$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,Ot&&{passive:oo(i)<2}),a[t]=c}}var Ot;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ot=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function mc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!C$(d,m):d!==m)&&_e(n,2,a,m),Je(h,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ii(e,r,n,a,L$);return;case 2:ii(e,r,n,a,P$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=qt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ii(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=qt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],w=h.a,x=b.a,_=h.b,C=b.b,T=void 0,N=void 0;if(w===x){f++,Je(_,C,t,f),f+=_.b||0,d++,m++;continue}var E=l[d+1],U=u[m+1];if(E){var j=E.a,W=E.b;N=x===j}if(U){var B=U.a,O=U.b;T=w===B}if(T&&N){f++,Je(_,O,t,f),$n(i,t,w,C,m,c),f+=_.b||0,f++,fn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,$n(i,t,x,C,m,c),Je(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,fn(i,t,w,_,f),f+=_.b||0,f++,Je(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(E&&j===B){f++,fn(i,t,w,_,f),$n(i,t,x,C,m,c),f+=_.b||0,f++,Je(W,O,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;fn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];$n(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var pc="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+pc,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}fn(e,r,n+pc,a,t)}function bc(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)bc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,w=0;w<h.length;w++){t++;var x=m===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=sn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function gc(e,r,n,a){return n.length===0?e:(bc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return T$(e,r);case 5:return r.s(e);default:an(10)}}function k$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function T$(e,r){var n=r.s,a=M$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function M$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=ar(Zt(v[a]),u);return p(Nr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=R(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Zt(l);return hc(i,function(v){var s=c(v),d=mc(u,s);l=gc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=lr.title,v=lr.body,s=Zt(v);return hc(i,function(d){ca=c;var m=l(d),f=Nr("body")(L)(m.eu),h=mc(s,f);v=gc(v,s,h,t),s=f,ca=0,u!==m.fL&&(lr.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function hc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(lo,io,mr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(lo,io,mr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(lo,io,mr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:B$;y(function(e,r,n){return uc(mr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Ot&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?te(n.a):q});function _c(e,r){return mr(function(n){ua(function(){var a=document.getElementById(e);n(a?jr(r(a)):Hv(os(e)))})})}function V$(e){return mr(function(r){ua(function(){r(jr(e()))})})}$(function(e,r){return _c(r,function(n){return n[e](),Tn})});$(function(e,r){return V$(function(){return F$.scroll(e,r),Tn})});y(function(e,r,n){return _c(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var U$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var R$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(P(sl,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(P(sl,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var ci=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function Xt(e){for(var r=0;e.b;e=e.b)r++;return r}var E$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},j$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),N$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),W$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),G$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Y$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),H$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),J$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),O$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),q$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Z$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},X$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Q$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},yc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},K$=function(e){e.gl.disable(e.gl.CULL_FACE)},ef=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},rf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},nf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},li=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],af=[Z$,X$,Q$,wc,yc,K$,ef,rf,nf];function ui(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function tf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function xc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function of(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,w,x){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<h;_++)f[b++]=h===1?w[C][x]:w[C][x][_]})}var u=xc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Xt(n.b)*s);xn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Xt(r.b),indexBuffer:null,buffers:{}}}function lf(e,r){var n=new Uint32Array(Xt(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function vi(e,r){return e+"#"+r}var Sc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),wc(n),yc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=vi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ci++,v||(v=ui(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ci++,s||(s=ui(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=tf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=uf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=vi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),vf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=of(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=xc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,xn(d0(n),i.a),u=0;u<li.length;u++){var T=n[li[u]];T.toggle!==n.toggle&&T.enabled&&(af[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function uf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,w=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function vf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var $f=y(function(e,r,n){return v$(r,{g:n,f:{},h:e},gf,hf)}),ff=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),sf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),mf=$(function(e,r){e.contextAttributes.antialias=!0}),pf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),bf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function gf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(s0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),E$(function(){return o(Sc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function hf(e,r){return r.f=e.f,Sc(r)}var _f=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Qt=new Float64Array(3),$i=new Float64Array(3),fi=new Float64Array(3),yf=y(function(e,r,n){return new Float64Array([e,r,n])}),xf=function(e){return e[0]},Sf=function(e){return e[1]},Cf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Lf=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Cc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Cc);function Lc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(Cc(e,r,n),n)}$(Lc);function Pc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Pc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Pf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),dn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(dn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=Qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=dn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(dn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(dn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(dn(r,a)+e[14])/n,t});var zf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var kf=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Tf=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Mf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Mf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Df=new Float64Array(16),Af=new Float64Array(16),Bf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Ff=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ye(zc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return zc(c,l,i,t,n,a)});function kc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ye(kc);R(function(e,r,n,a){return kc(e,r,n,a,-1,1)});function Tc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],E=r[3],U=r[4],j=r[5],W=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],me=r[13],Te=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+b*E,n[1]=t*C+u*T+m*N+w*E,n[2]=i*C+v*T+f*N+x*E,n[3]=c*C+s*T+h*N+_*E,n[4]=a*U+l*j+d*W+b*B,n[5]=t*U+u*j+m*W+w*B,n[6]=i*U+v*j+f*W+x*B,n[7]=c*U+s*j+h*W+_*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+h*ie+_*ve,n[12]=a*oe+l*me+d*Te+b*Se,n[13]=t*oe+u*me+m*Te+w*Se,n[14]=i*oe+v*me+f*Te+x*Se,n[15]=c*oe+s*me+h*Te+_*Se,n}$(Tc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],E=r[9],U=r[10],j=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*E+v*U,n[9]=t*N+l*E+s*U,n[10]=i*N+u*E+d*U,n[11]=0,n[12]=a*j+c*W+v*B+m,n[13]=t*j+l*W+s*B+f,n[14]=i*j+u*W+d*B+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Pc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=h+f,C=b-m,T=h-f,N=c*c*v+u,E=w+d,U=b+m,j=w-d,W=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],me=n[6],Te=n[7],Se=n[8],br=n[9],gr=n[10],Wa=n[11],Nu=n[12],Wu=n[13],Gu=n[14],Yu=n[15];return a[0]=B*x+ve*_+Se*C,a[1]=O*x+oe*_+br*C,a[2]=Q*x+me*_+gr*C,a[3]=ie*x+Te*_+Wa*C,a[4]=B*T+ve*N+Se*E,a[5]=O*T+oe*N+br*E,a[6]=Q*T+me*N+gr*E,a[7]=ie*T+Te*N+Wa*E,a[8]=B*U+ve*j+Se*W,a[9]=O*U+oe*j+br*W,a[10]=Q*U+me*j+gr*W,a[11]=ie*U+Te*j+Wa*W,a[12]=Nu,a[13]=Wu,a[14]=Gu,a[15]=Yu,a});function Vf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Vf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Uf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Uf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Lc(e,r,Qt),t=va(mt(n,a,$i),$i),i=va(mt(a,t,fi),fi),c=Df,l=Af;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Tc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=rv,Yn=Qu,Mc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Yn,e,l,v)}else{var u=c.a;return p(Yn,i,l,u)}});return p(Yn,i,p(Yn,e,r,t),a)}),Kt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Kt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),si=function(e){return p(Kt,y(function(r,n,a){return o(A,k(r,n),a)}),L,e)},Dc=1,Rf=2,Ac=0,ye=function(e){return{$:1,a:e}},eo=$(function(e,r){return{$:3,a:e,b:r}}),di=$(function(e,r){return{$:0,a:e,b:r}}),Bc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ef=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},jf=Cv,Nf=Yv,Ae=ic,Tr=$(function(e,r){return o(yv,e,La(r))}),ro=$(function(e,r){return g(o(wv,e,r))}),Fc=function(e){return o(Tr,`
    `,o(ro,`
`,e))},Mn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Vr=function(e){return p(Mn,$(function(r,n){return n+1}),0,e)},Wf=nv,Gf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=$(function(e,r){return p(Gf,e,r,L)}),Vc=$(function(e,r){return p(Wf,e,o(Kr,0,Vr(r)-1),r)}),rr=Dv,Uc=function(e){var r=rr(e);return 97<=r&&r<=122},Rc=function(e){var r=rr(e);return r<=90&&65<=r},Yf=function(e){return Uc(e)||Rc(e)},Hf=function(e){var r=rr(e);return r<=57&&48<=r},If=function(e){return Uc(e)||Rc(e)||Hf(e)},Fe=function(e){return p(Mn,A,L,e)},tn=bv,Jf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Fc(Of(r))))}),Of=function(e){return o(qf,e,L)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Yf(x)&&o(jf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Fe(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ae(Vr(s))+" ways:"));return o(Tr,`

`,o(A,h,o(Vc,Jf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return h+(Fc(o(Nf,4,f))+(`

`+m))}}),Ve=32,pt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Ju,no=vv,ao=$(function(e,r){return Ko(r)/Ko(e)}),Zf=lv,Sn=no(o(ao,2,Ve)),Ec=P(pt,0,Sn,bt,bt),jc=qu,Nc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Wc=$v,gt=Ou,nr=$(function(e,r){return J(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},to=Zu,Qf=$(function(e,r){e:for(;;){var n=o(to,Ve,e),a=n.a,t=n.b,i=o(A,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),Kf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=no(r/Ve);if(n===1)return o(to,Ve,e).a;var a=o(Qf,e,L),t=n;e=a,r=t;continue e}}),Gc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Wc(o(ao,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(es,t,r.l);return P(pt,gt(r.p)+n,o(nr,5,a*Sn),i,r.p)}else return P(pt,gt(r.p),Sn,bt,r.p)}),rs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Gc,!1,{z:a,l:n/Ve|0,p:t});var i=Nc(p(jc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Ec;var n=e%Ve,a=p(jc,n,e-n,r),t=e-n-Ve;return S(rs,r,t,e,L,a)}),Ie=function(e){return!e.$},D=jv,Z=Fv,M=Ev,$e=Vv,$a=Nv,as=Wv,Me=Bv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Nr("div"),ts=function(e){return{$:2,a:e}},Yc=$(function(e,r){return e}),Hc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Dr=function(e){return e},os=Dr,mi=Ye(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,Mr=gv,Or=xv,Dn=$(function(e,r){return e<1?r:p(Or,e,Mr(r),r)}),Pa=zv,za=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Ic=kv,pi=he(function(e,r,n,a,t){if(za(t)||o(is,"@",t))return q;var i=o(Pa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Ic(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return te(we(mi,e,o(ka,c,t),u,r,n,a))}else return te(we(mi,e,t,q,r,n,a))}),bi=R(function(e,r,n,a){if(za(a))return q;var t=o(Pa,"/",a);if(t.b){var i=t.a;return S(pi,e,o(Dn,i,a),r,n,o(ka,i,a))}else return S(pi,e,"/",r,n,a)}),gi=y(function(e,r,n){if(za(n))return q;var a=o(Pa,"?",n);if(a.b){var t=a.a;return P(bi,e,te(o(Dn,t+1,n)),r,o(ka,t,n))}else return P(bi,e,q,r,n)});$(function(e,r){if(za(r))return q;var n=o(Pa,"#",r);if(n.b){var a=n.a;return p(gi,e,te(o(Dn,a+1,r)),o(ka,a,r))}else return p(gi,e,q,r)});var cs=Pv,io=function(e){},An=jr,ls=An(0),Jc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Mn,e,r,Fe(d)):P(Jc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),pr=y(function(e,r,n){return P(Jc,e,r,0,n)}),re=$(function(e,r){return p(pr,$(function(n,a){return o(A,e(n),a)}),L,r)}),fa=ft,co=$(function(e,r){return o(fa,function(n){return An(e(n))},r)}),us=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return An(o(e,a,t))},n)},r)}),vs=function(e){return p(pr,us(A),An(L),e)},$s=Kv,fs=$(function(e,r){var n=r;return uc(o(fa,$s(e),n))}),ss=y(function(e,r,n){return o(co,function(a){return 0},vs(o(re,fs(e),r)))}),ds=y(function(e,r,n){return An(0)}),ms=$(function(e,r){var n=r;return o(co,e,n)});er.Task=Xv(ls,ss,ds,ms);var ps=$c("Task"),lo=$(function(e,r){return ps(o(co,e,r))}),bs=A$,gs=mv,sa={$:1},Oc=function(e){return{$:2,a:e}},Ta={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},hs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},qc=function(e){var r=e.b;return o(Ne,Ta,r)},wr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?qc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,on(n).db)>0?o(ae,hs,wr(o(Ne,sa,t))):Dr)(o(Ne,Oc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Hc,l.eA,Xe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,Ta,{B:k(v,s),ab:L,T:o(A,t.B,t.T)})}}),Zc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=$(function(e,r){return Fe(p(ws,e,r,L))}),Xc=y(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,w=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(ys,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Xc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return g([_])}}),xs=$(function(e,r){return p(Xc,0,e,r)}),Ss=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(g([a]),t)),c=o(xs,e,i),l=o(Zc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,sa,{B:d,ab:L,T:m})}else return r}}),Cs=function(e){var r=e.b;return o(Ne,sa,r)},Ls=function(e){var r=e.b;return o(Ne,Oc({cX:on(e).db}),r)},Ps=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return qc(r);case 3:return Ls(r);default:var n=e.a;return o(Ss,n,r)}}),Qc=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),zs=$(function(e,r){return Xe(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ts=function(e){return{$:2,a:e}},Kc=$(function(e,r){return{$:0,a:e,b:r}}),Ms=$(function(e,r){return{$:1,a:e,b:r}}),Be=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),X=function(e){return e<0?-e:e},uo=Tv,Ds=y(function(e,r,n){return o(wr,0/0,uo(o(e,r,n)))}),el=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=_v,rl=function(e){return p(As,A,L,e)},Bs=$(function(e,r){var n=o(el,function(a){return a!=="0"&&a!=="."},rl(r));return le(e&&n?"-":"",r)}),be=ic,ht=pv,nl=Av,al=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",al(t))}else{var i=rr(r);return i>=48&&i<57?o(ht,nl(i+1),n):"0"}},_t=uv,Fs=dv,Ma=function(e){return o(ht,e,"")},tl=y(function(e,r,n){return e<=0?n:p(tl,e>>1,le(r,r),e&1?le(n,r):n)}),Cn=$(function(e,r){return p(tl,e,r,"")}),wt=y(function(e,r,n){return le(n,o(Cn,e-Mr(n),Ma(r)))}),yt=hv,ol=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Vs=function(e){var r=o(ro,"e",be(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(wr,0,Ic(o(cs,"+",t)?o(Dn,1,t):t)),c=ol(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(wr,"0",o(Be,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Be,Qc(Ma),tn(le(o(Cn,X(i),"0"),v))))):p(wt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Us=y(function(e,r,n){if(_t(n)||Fs(n))return be(n);var a=n<0,t=ol(Vs(X(n))),i=t.a,c=t.b,l=Mr(i)+r,u=le(o(Cn,-l+1,"0"),p(wt,l,"0",le(i,c))),v=Mr(u),s=o(nr,1,l),d=o(e,a,p(Or,s,v,u)),m=p(Or,0,s,u),f=d?yt(o(wr,"1",o(Be,al,tn(yt(m))))):m,h=Mr(f),b=f==="0"?f:r<=0?le(f,o(Cn,X(r),"0")):J(r,Mr(c))<0?p(Or,0,h-r,f)+("."+p(Or,h-r,h,f)):le(i+".",p(wt,r,"0",c));return o(Bs,a,b)}),il=Us($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Rs=Ds(il),Es=y(function(e,r,n){var a=o(ao,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Rs,t,n)}),cl=ev,vo=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(cl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},en=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(Y,0,r,n,S(Y,1,v,s,d,m),S(Y,1,i,c,l,u))}else return S(Y,e,i,c,S(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(Y,0,v,s,S(Y,1,h,b,w,x),S(Y,1,r,n,m,t))}else return S(Y,e,r,n,a,t)}),xt=y(function(e,r,n){if(n.$===-2)return S(Y,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(cl,e,t);switch(u){case 0:return S(en,a,t,i,p(xt,e,r,c),l);case 1:return S(Y,a,t,r,c,l);default:return S(en,a,t,i,c,p(xt,e,r,l))}}),gn=y(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(Y,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ll=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,w=m.e,x=v.e;return S(Y,0,f,h,S(Y,1,n,a,S(Y,0,i,c,l,u),b),S(Y,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(Y,1,n,a,S(Y,0,i,c,l,u),S(Y,0,s,d,m,x))}else return e},hi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,w=f.d,x=f.e;return S(Y,0,i,c,S(Y,1,u,v,s,d),S(Y,1,n,a,m,S(Y,0,h,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var h=T.b,b=T.c,w=T.d,x=T.e;return S(Y,1,n,a,S(Y,0,i,c,C,m),S(Y,0,h,b,w,x))}else return e},Ns=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(Y,n,l,u,v,S(Y,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,hi(r)}else break e;else return c.a,c.d,hi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(Y,r,n,a,ra(t),l);var u=ll(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,ra(m),f)}else return tr}else return S(Y,r,n,a,ra(t),l)}else return tr},hn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(Y,n,a,t,o(hn,e,i),c);var u=ll(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,o(hn,e,m),f)}else return tr}else return S(Y,n,a,t,o(hn,e,i),c);else return o(Ws,e,Nt(Ns,e,r,n,a,t,i,c))}),Ws=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=js(c);if(l.$===-1){var u=l.b,v=l.c;return S(en,n,u,v,i,ra(c))}else return tr}else return S(en,n,a,t,i,o(hn,e,c))}else return tr}),Gs=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(Y,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(vo,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(gn,e,t,n)}),Ys=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ms,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Kc,k(i,c),p(Es,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===2?Ts(n):a}))}},Hs=function(e){return zs(Ys(e))},Is=$(function(e,r){return o(re,Hs(e),r)}),Js=$(function(e,r){return Xe(r,{eA:o(Is,e,r.eA)})}),Os=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Xe(a,{B:o(Qc,Js(e),a.B)}))}),qs=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),Zs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Xe(t,{B:o(qs,o(e,i.a,r),i)}))}),Xs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Xe(a,{aL:!a.aL});case 2:var t=n.a;return Xe(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Xe(a,{G:o(Os,i,a.G)});case 4:var c=n.a;return Xe(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Xe(a,{G:o(Ps,l,a.G)})}}),Qs=$(function(e,r){return o(Ne,Ta,{B:k(e,r(e)),ab:L,T:L})}),Ks=e$,_i=Ks(L),da=Rv,Ln=Uv,ed=o$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Ln)))},o(M,"left",Z))},o(M,"pressedKeys",da(Ln)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Me({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Me({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Me({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),rd=function(e){return{$:4,a:e}},nd={$:0},ad=lc,He=$(function(e,r){return o(dc,e,ad(r))}),H=He("className"),td=function(e){var r=e.b.B;return r.b},ma=He("id"),od=$$,pa=od,id=f$,se=id,cd={$:1},ld=function(e){return{$:3,a:e}},ud=function(e){return{$:5,a:e}},wi=Nr("a"),$o=Nr("button"),yi=function(e){return o(He,"href",m$(e))},vd=Cr("clip-rule"),Ce=Cr("d"),$d=Cr("fill"),ul=fc("http://www.w3.org/2000/svg"),fd=ul("svg"),sd=Cr("viewBox"),dd=o(s$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ue=fd(g([sd("0 0 24 24"),$d("currentColor"),o(se,"width","100%"),o(se,"height","100%"),dd("http://www.w3.org/2000/svg")])),md=Cr("fill-rule"),Le=ul("path"),Zr={eD:Ue(g([o(Le,g([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),L)])),eQ:Ue(g([o(Le,g([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),L)])),eV:Ue(g([o(Le,g([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),L)])),fe:Ue(g([o(Le,g([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),L),o(Le,g([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),L)])),ff:Ue(g([o(Le,g([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),L),o(Le,g([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),L)])),fp:Ue(g([o(Le,g([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),L)])),fq:Ue(g([o(Le,g([Ce("M7 5V19L18 12L7 5Z")]),L)])),fr:Ue(g([o(Le,g([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),L)])),fs:Ue(g([o(Le,g([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),L)])),fM:Ue(g([o(Le,g([md("evenodd"),vd("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),L)])),fN:Ue(g([o(Le,g([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),L)])),f0:Ue(g([o(Le,g([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),L)]))},pd=function(e){return{$:0,a:e}},vl=sc,$l=$(function(e,r){return o(vl,e,pd(r))}),fo=function(e){return o($l,"click",Me(e))},xi=He("target"),bd=He("title"),St=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(Y,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),gd=st,sr=gd,hd=function(e){return p(Kt,y(function(r,n,a){return o(A,n,a)}),L,e)},_d=$(function(e,r){return{$:3,a:e,b:r}}),wd=$(function(e,r){return{$:2,a:e,b:r}}),yd=$(function(e,r){return{$:0,a:e,b:r}}),xd=$(function(e,r){return{$:1,a:e,b:r}}),Bn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Sd=P(Bn,0/255,0/255,0/255,1),Cd=lc,Ld=$(function(e,r){return o(dc,e,Cd(r))}),Pd=Ld("checked"),Oe=fv,zd=y(function(e,r,n){return le(o(Cn,e-Mr(n),Ma(r)),n)}),Pn=tv,fl=function(e){var r=function(n){return n<10?Ae(n):Ma(nl(87+n))};return e<16?r(e):le(fl(e/16|0),r(o(Pn,16,e)))},kd=o(ae,fl,o(zd,2,"0")),so=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Td=function(e){var r=so(e),n=r.cM,a=r.cc,t=r.b5;return o(Tr,"",o(A,"#",o(re,o(ae,Oe,kd),g([n*255,a*255,t*255]))))},Ct=He("htmlFor"),Md=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ba=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Dd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),mo=$(function(e,r){return p(pr,Dd(e),L,r)}),sl=R(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Ad=R$,Bd=Mv,Fd=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Vd=U$,Ud=function(e){return o(Vd,{ew:!1,fg:!1},e)},po=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Rd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Ed=function(e){return{$:2,a:e}},jd=function(e){return{$:0,a:e}},Nd=function(e){return{$:1,a:e}},Ha=$(function(e,r){return rr(r)-rr(e)}),Ia=y(function(e,r,n){var a=rr(n);return J(rr(e),a)<1&&J(a,rr(r))<1}),Wd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Nd(r))},a=p(Ia,"0","9",r)?ue(o(Ha,"0",r)):p(Ia,"a","z",r)?ue(10+o(Ha,"a",r)):p(Ia,"A","Z",r)?ue(10+o(Ha,"A",r)):ye(jd(r));return o(ba,n,a)}),dl=$(function(e,r){var n=tn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ba,function(c){return o(ba,function(l){return ue(c+l*e)},o(dl,e,i))},o(Wd,e,t))}),Gd=$(function(e,r){return 2<=e&&e<=36?o(dl,e,yt(r)):ye(Ed(e))}),Yd=Gd(16),Hd=y(function(e,r,n){return P(Bn,e,r,n,1)}),ml=R(function(e,r,n,a){return P(Bn,e,r,n,a)}),Fn=av,Id=$(function(e,r){var n=o(Fn,10,e);return Oe(r*n)/n}),Jd=Sv,Od=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=rl(n);if(a.b&&!a.b.b){var t=a.a;return Bd(g([t,t]))}else return n};return o(ae,Jd,o(ae,function(n){return o(Be,function(a){return p(Ad,1,a,n)},Ud(e))},o(ae,Md(po),o(ae,Be(function(n){return n.fG}),o(ae,Be(mo(Dr)),o(ae,Fd("Parsing hex regex failed"),ba(function(n){var a=o(re,o(ae,r,o(ae,Yd,Rd(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(P(ml,t/255,c/255,u/255,o(Id,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Hd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ga=Nr("input"),Lt=Nr("label"),Pt=He("name"),pl=$(function(e,r){return p(pr,M,r,e)}),qd=o(pl,g(["target","checked"]),Z),Zd=function(e){return o($l,"change",o($a,e,qd))},Xd=function(e){return k(e,!0)},Qd=function(e){return{$:1,a:e}},Kd=$(function(e,r){return o(vl,e,Qd(r))}),em=o(pl,g(["target","value"]),Ln),bo=function(e){return o(Kd,"input",o($a,Xd,o($a,e,em)))},bl=He("max"),gl=He("min"),hl=function(e){return o(He,"step",e)},ha=He("type"),go=He("value"),Si=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,g([o(Lt,g([Ct(r)]),g([o(I,g([H("relative w-full")]),g([o(I,g([H("inline-block")]),g([sr(r)])),o(I,g([H("inline-block float-right")]),g([sr(be(n))]))]))])),o(ga,g([ha("range"),o(se,"width","100%"),ma(r),Pt(r),gl(be(a)),bl(be(t)),go(be(n)),hl(be(i)),bo(o(ae,uo,o(ae,wr(42),c)))]),L)]))},rm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),nm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,g([H("h-12 py-4")]),g([o(Lt,g([H("block"),Ct(e)]),g([o(ga,g([H("relative bottom-[1px] align-middle mr-2"),ha("checkbox"),ma(e),Pt(e),Zd(_d(e)),Pd(c)]),L),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Si({cf:e,cr:i,cv:t,cz:yd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Si({cf:e,cr:i,cv:t,cz:o(ae,Oe,xd(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,g([o(I,g([o(se,"margin-bottom","6px")]),g([o(Lt,g([Ct(e)]),g([sr(e)]))])),o(ga,g([ha("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ma(e),Pt(e),bo(function(l){return o(wd,e,o(rm,Sd,Od(l)))}),go(Td(c))]),L)]))}}),am=function(e){return o(I,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(I,g([H("text-lg pb-2")]),g([sr(e.fh)])),o(I,g([H("pl-2 pr-2")]),hd(o(St,nm,e.av)))]))},tm=function(e){return o(I,g([H("text-xs text-white60")]),o(re,am,e))},om=function(e){return o(I,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([sr("clock: "+o(il,3,on(e).db))]))},im=function(e){e.a;var r=e.b.T;return o(Be,function(n){return Oe(60/(on(e).db-n))},o(Be,o(ae,Kf,function(n){return n.db}),po(o(Zc,59,r))))},cm=function(e){return o(I,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=im(e);if(r.$===1)return g([sr("... Fps")]);var n=r.a;return g([sr(Ae(n)+" Fps")])}())},lm=function(e){return{$:0,a:e}},um=function(e){var r=e.b.T;return Vr(r)},vm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Vr(r)+1+Vr(n)},$m=function(e){return o(ga,g([H("absolute w-full"),ha("range"),gl(Ae(0)),bl(Ae(vm(e)-1)),go(Ae(um(e))),hl(Ae(1)),bo(o(ae,uo,o(ae,wr(42),o(ae,Oe,lm))))]),L)},Ci={$:1},fm={$:3},sm={$:2},_l=function(e){return!e.b},Li=$(function(e,r){return o($o,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),fo(e)]),g([sr("REC")]))}),Pi=$(function(e,r){return o($o,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),fo(r)]),g([o(I,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([e]))]))}),dm=function(e){var r=e.a,n=e.b.ab;return o(I,g([H("py-1")]),g([function(){switch(r.$){case 0:return o(Li,Ci,"text-red-500 font-bold");case 1:return o(Li,sm,"text-white60 hover:text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return _l(n)?o(I,L,L):o(Pi,Zr.fq,fm);default:return o(Pi,Zr.fp,Ci)}}()]))},mm=function(e){return o(I,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([$m(e),dm(e),cm(e),om(e)]))},pm=function(e){var r=e.a;return _r(r,Ta)},bm=$(function(e,r){var n=pm(r.G)?o(I,L,L):o(I,g([H("absolute pointer-events-none w-8 h-8"),o(se,"left",be(e.fs.fU+.5*e.cS.fS)+"px"),o(se,"top",be(-e.fs.fY+.5*e.cS.eW)+"px")]),g([o(I,g([H(e.fs.e4?"text-black80":"text-black40")]),g([Zr.fs]))]));return o(I,L,g([n]))}),gm=$(function(e,r){var n=o($o,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),fo(cd),bd("Distraction Free Mode")]),g([Zr.f0])),a=o(I,g([H("absolute w-8 bottom-12")]),g([o(wi,g([H("text-twitterBlue40 hover:text-twitterBlue"),yi("https://twitter.com/AzizErkalSelman"),xi("_blank")]),g([Zr.fN]))])),t=o(I,g([H("absolute w-8 bottom-2")]),g([o(wi,g([H("text-githubCat40 hover:text-githubCat"),yi("https://github.com/erkal/elm-3d-playground-exploration"),xi("_blank")]),g([Zr.eQ]))]));return r.aL?o(I,g([H("fixed w-10 h-10 p-1")]),g([n])):o(I,L,g([o(I,g([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,t])),o(I,g([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",be(e.cS.eW-80)+"px")]),g([o(pa,ld,tm(on(r.G).eA))])),o(I,g([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cS.fS>600?"600px":be(e.cS.fS-40)+"px")]),g([o(pa,ud,mm(r.G))])),o(bm,e,r)]))}),hm=y(function(e,r,n){var a=td(n.G),t=on(n.G);return o(I,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",be(t.cS.fS)+"px"),o(se,"height",be(t.cS.eW)+"px")]),g([o(I,g([H("fixed")]),g([o(pa,Yc(nd),o(e,t,a))])),o(I,g([ma("gui")]),g([o(gm,t,n),o(pa,rd,o(r,t,a))]))]))}),_m=Ye(function(e,r,n,a,t,i){var c=$(function(u,v){return k(P(Xs,r,i,u,v),_i)}),l=function(u){var v=o(Hc,n,u.e1);return k({aL:u.e1.cS.fS<500,G:o(Qs,v,a)},_i)};return bs({e0:l,fH:Yc(ed(ts)),fO:c,fQ:o(hm,e,t)})}),wm=R(function(e,r,n,a){return we(_m,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),ym=function(e){return{}},xm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),wl=tr,Sm=function(e){return p(Mn,$(function(r,n){var a=r.a,t=r.b;return p(gn,a,t,n)}),wl,e)},Cm=y(function(e,r,n){return p(xm,e,r,Sm(n))}),Lm=Cm,Pm=y(function(e,r,n){var a=r.a,t=r.b;return k(e,o(Kc,k(a,t),n))}),zm=g([p(Lm,"Camera",!0,g([p(Pm,"camera height",k(1.4,1.57),1.57)]))]),km=$(function(e,r){return r}),Tm=$(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(vo,e,r.av))}),Mm=$(function(e,r){return o(wr,0,po(o(mo,Tm(e),r)))}),Dm=$(function(e,r){return o(Mm,e,r.eA)}),zi=Dm,Am=function(e){return e},ur=function(e){return e},zt=function(e){var r=e;return-r},Bm=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),yl=function(e){var r=e;return r.c3},xl=function(e){var r=e;return r.c4},Fm=function(e){return o(Bm,yl(e),xl(e))},Wr=function(e){var r=e;return r.cA},Ur=iv,rn=cv,na=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=rn(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,w=d*h,x=h*h,_=1-2*(f+x),C=s.c5*u,T=l*C,N=2*(w-T),E=2*(w+T),U=d*C,j=2*(U+b),W=2*(U-b),B=h*C,O=2*(B-m),Q=2*(B+m),ie=C*C,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+N*i.fY+j*i.c5,fY:E*i.fU+oe*i.fY+O*i.c5,c5:W*i.fU+Q*i.fY+_*i.c5}}),Vn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=rn(c),v=a.cA,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,h=a.eH,b=h,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,T=l*C,N=w*C,E=C*C,U=1-2*(_+E),j=b.c5*u,W=l*j,B=2*(N-W),O=2*(N+W),Q=w*j,ie=2*(Q+T),ve=2*(Q-T),oe=C*j,me=2*(oe-x),Te=2*(oe+x),Se=j*j,br=1-2*(E+Se),gr=1-2*(_+Se);return{fU:s.fU+br*d+B*m+ie*f,fY:s.fY+O*d+gr*m+me*f,c5:s.c5+ve*d+Te*m+U*f}}),dr=function(e){return e},Lr=function(e){var r=e;return r.c3},Pr=function(e){var r=e;return r.c4},zr=function(e){var r=e;return r.c6},Sl=y(function(e,r,n){return dr({cA:p(Vn,e,r,Wr(n)),c3:p(na,e,r,Lr(n)),c4:p(na,e,r,Pr(n)),c6:p(na,e,r,zr(n))})}),ki=y(function(e,r,n){return p(Sl,e(n),r,n)}),ho=function(e){var r=e;return r.eH},Un=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),Cl=$(function(e,r){return dr({cA:o(Un,e,Wr(r)),c3:Lr(r),c4:Pr(r),c6:zr(r)})}),Vm=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),Um=y(function(e,r,n){return o(Cl,o(Vm,r,e),n)}),Rm=y(function(e,r,n){return p(Um,ho(e(n)),r,n)}),Gr=$(function(e,r){return{eH:r,cA:e}}),Em=function(e){var r=e;return o(Gr,r.cA,r.c3)},jm=function(e){var r=e;return o(Gr,r.cA,r.c4)},Nm=function(e){var r=e;return o(Gr,r.cA,r.c6)},Wm=function(e){var r=dr({cA:e.aR,c3:xl(e.dl),c4:Fm(e.dl),c6:yl(e.dl)}),n=p(Rm,Nm,e.cb,p(ki,Em,zt(e.bC),p(ki,jm,e.bx,r)));return n},Gm=function(e){return{$:1,a:e}},de=function(e){var r=e;return X(r)},Ym=function(e){return{cL:Gm(de(e.el)),c1:e.c1}},Rr=function(e){return e},Qe={fU:0,fY:0,c5:0},Ll=Dr,vr=function(e){return e},Pl=vr({fU:1,fY:0,c5:0}),_o=Pl,wo=vr({fU:0,fY:0,c5:1}),yo=wo,Hm=Ll({cA:Qe,c3:yo,c4:_o}),Im=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.el;return Ym({c1:Wm({bx:Rr(n),cb:ur(1e3),bC:Rr(a),aR:Am(r),dl:Hm}),el:ur(t)})},Jm=function(e){return Im({bx:o(zi,"camera height",e),bC:o(zi,"camera height",e),aR:{fU:0,fY:2,c5:0},el:2})},Er=ov,kt=function(e){return e*Er/180},Om=function(e){return e},qm=function(e){return ur(.01*e)},Ti=function(e){return e},Zm=function(e){return e},Xm=function(e){return{$:0,a:e}},Qm=Xm,Km={$:3},e0=Km,r0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),n0=r0,a0=$(function(e,r){return r.b?p(pr,A,r,e):e}),We=function(e){return p(pr,a0,L,e)},xo=$(function(e,r){return We(o(re,e,r))}),t0=function(e){return{$:1,a:e}},o0=t0,i0=function(e){return o(Cr,"height",Ae(e))},c0=function(e){return u$(d$(e))},l0=c0,u0=function(e){return{$:2,a:e}},v0=u0,$0=function(e){return o(Tr,"",e)},f0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return $0(g(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},s0=$(function(e,r){switch(r.$){case 0:return o(ff,e,r);case 1:return o(sf,e,r);case 2:return o(df,e,r);case 3:return o(mf,e,r);case 4:return o(pf,e,r);default:return o(bf,e,r)}}),d0=$(function(e,r){switch(r.$){case 0:return o(N$,e,r);case 1:return o(W$,e,r);case 2:return o(G$,e,r);case 3:return o(Y$,e,r);case 4:return o(H$,e,r);case 5:return o(I$,e,r);case 6:return o(J$,e,r);case 7:return o(O$,e,r);default:return q$(e)}}),m0=y(function(e,r,n){return p($f,e,r,n)}),Mi=function(e){var r=e;return r},cn=zf,Ja=P(cn,1,1,1,1),qe=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),p0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),b0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(p0,n*a/t,n,n*(1-a-t)/t)}),Rn=yf,g0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},So=$(function(e,r){return g0(o(b0,e,r))}),zl=$(function(e,r){return{dp:_r(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ke=Bf,h0=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Oa=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=P(cn,a.bX,a.bX,a.bX,i);return we(t,e,c,h0(a),a.dp,r,n)}),kl=Ye(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(zl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(A,S(Oa,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(A,S(Oa,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(A,S(Oa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Mn,P(kl,e,r,n,a),i,T)}}),_0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Tl=_0,Co=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),w0=function(e){var r=e.Z,n=e.W,a=e.V;return P(Co,518,r,n,a)},y0=$(function(e,r){return{$:6,a:e,b:r}}),x0=y0,Ml=g([w0({V:1,W:0,Z:!1}),P(Tl,!1,!1,!1,!1),o(x0,0,1)]),nn=519,Lo=8,Dl=15,Xr=7681,S0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=j$,C0=$(function(e,r){return{$:0,a:e,b:r}}),L0=C0({df:1,$7:0,dV:5}),De=_f,P0=L0(g([{bT:o(De,-1,-1)},{bT:o(De,1,-1)},{bT:o(De,-1,1)},{bT:o(De,1,1)}])),z0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},k0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Po=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(k0,a,t,i)))}),zo=function(e){return p(Po,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},ko=function(e){return S(ne,g([zo(e),P(Tl,!1,!1,!1,!1)]),z0,S0,P0,{})},T0=ko({a8:Xr,co:0,cN:Lo,bl:nn,c2:Dl,bt:Xr,bu:Xr}),M0=516,Di=5386,xe=7680,D0=function(e){return o(Fn,2,e+4)},Al=function(e){return ko({a8:xe,co:Dl,cN:Lo,bl:M0,c2:D0(e),bt:Di,bu:Di})},A0=y(function(e,r,n){return We(g([p(qe,e,n,Ml),g([Al(r),T0])]))}),B0=$(function(e,r){return We(o(Vc,A0(e),r))}),F0=function(e){var r=e.Z,n=e.W,a=e.V;return P(Co,513,r,n,a)},V0=F0({V:1,W:0,Z:!0}),U0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},R0=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return U0(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},E0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ai=$(function(e,r){var n=e,a=r;return p(E0,32774,n,a)}),j0=1,Bi=771,N0=770,To=R0({bv:0,aH:o(Ai,j0,Bi),by:0,bA:o(Ai,N0,Bi),bF:0,bV:0}),Yr=g([V0,To]),W0=function(e){var r=e;return r.dO},G0=function(e){var r=e;return r.dP},Bl=function(e){var r=e;return r.dQ},Y0=function(e){var r=e;return r.dR},H0=function(e){var r=e;return r.dS},Fl=function(e){var r=e;return r.dT},$r=$(function(e,r){var n=e,a=r;return a-n}),Vl=function(e){return V(o($r,Y0(e),W0(e)),o($r,H0(e),G0(e)),o($r,Fl(e),Bl(e)))},Fi=function(e){var r=e;return Wr(r)},I0=function(e){return e},J0=function(e){return dr({cA:I0({fU:e.H,fY:e.I,c5:e.J}),c3:vr({fU:e.q,fY:e.r,c5:e.s}),c4:vr({fU:e.t,fY:e.u,c5:e.v}),c6:vr({fU:e.w,fY:e.x,c5:e.y})})},qa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Ul=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,h=f;return{fU:c*h.fU+l*h.fY+u*h.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Rl=$(function(e,r){return{cA:o(Ul,e,Wr(r)),c3:o(qa,e,Lr(r)),c4:o(qa,e,Pr(r)),c6:o(qa,e,zr(r))}}),Tt=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),_a=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(nr,n,a)}),aa=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),O0=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},q0=function(e){var r=e;return V(r.fU,r.fY,r.c5)},Za=function(e){var r=e;return .5*r},_n=$(function(e,r){var n=e,a=r;return a+n}),Z0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Za(de(a)),c=Za(de(n)),l=Za(de(t)),u=q0(r),v=u.a,s=u.b,d=u.c;return{dO:o(_n,c,v),dP:o(_n,i,s),dQ:o(_n,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Vi=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,d=Ge(zr(e)),m=X(l*d.fU)+X(c*d.fY)+X(i*d.c5),f=Ge(Pr(e)),h=X(l*f.fU)+X(c*f.fY)+X(i*f.c5),b=Ge(Lr(e)),w=X(l*b.fU)+X(c*b.fY)+X(i*b.c5),x=o(Z0,V(w,h,m),o(Ul,e,p(Tt,s,v,u)));if(a.$)return te(x);var _=a.a;return te(o(O0,_,x))}),Mt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 1:var c=t.a,l=P(Vi,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 2:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 3:var c=t.a,l=P(Vi,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 4:var u=t.a,f=e,h=r,b=P(Mt,e,r,n,u),w=i;e=f,r=h,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Rl,J0(v),e),m=r*v.bX,f=e,h=r,b=P(Mt,d,m,n,g([s])),w=i;e=f,r=h,n=b,a=w;continue e}}else return n}),ln=xf,un=Sf,vn=Cf,El=function(e){return{$:4,a:e}},X0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),En=function(e){return El(o(X0,e,L))},Q0={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},K0=function(e){var r=e;return r},Ui=ko({a8:Xr,co:0,cN:Lo,bl:nn,c2:255,bt:Xr,bu:Xr}),qr=sv,cr=0,ep=function(e){var r=e,n=o(nr,X(r.fU),o(nr,X(r.fY),X(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=qr(i*i+t*t+a*a);return c*n}else return cr},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Ee=$(function(e,r){var n=e,a=r;return Ke({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),mn=k({bd:o(Ee,Pe,Pe),bK:o(Ee,Pe,Pe),bL:o(Ee,Pe,Pe),bM:o(Ee,Pe,Pe)},P(cn,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),jl=514,Nl=function(e){var r=e.Z,n=e.W,a=e.V;return P(Co,515,r,n,a)},Wl=240,rp=g([Nl({V:1,W:0,Z:!0}),zo({a8:xe,co:Wl,cN:0,bl:jl,c2:0,bt:xe,bu:xe}),To]),np=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cL;if(s.$){var m=s.a;return _t(v)?Ke({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return _t(v)?Ke({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),In=$(function(e,r){return(1&e>>r)===1?0:1}),ap=function(e){return g([Nl({V:1,W:0,Z:!0}),zo({a8:xe,co:Wl,cN:e,bl:jl,c2:0,bt:xe,bu:xe}),To])},tp=y(function(e,r,n){return We(o(re,function(a){var t=a<<4,i=P(cn,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(qe,e,k(r,i),ap(t))},o(Kr,1,o(Fn,2,n)-1)))}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Qr=function(e){var r=e;return r},op=Ff,Ri=function(e){var r=e;return fr(zr(r))},Gl=vr({fU:0,fY:1,c5:0}),Mo=Gl,ip={cA:Qe,c3:_o,c4:Mo,c6:yo},Da=function(e){var r=e;return r},cp=function(e){var r=Da(Wr(e)),n=Ge(zr(e)),a=Ge(Pr(e)),t=Ge(Lr(e));return Ke({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},lp=$(function(e,r){var n=r;return cp(o(Rl,n,e))}),up=function(e){return o(lp,ip,e)},vp=function(e){var r=e;return r.c1},$p=function(e){var r=e;return Lr(r)},fp=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),sp=function(e){var r=e;return Pr(r)},dp=function(e){var r=vp(e.ev),n=dr({cA:Fi(r),c3:$p(r),c4:sp(r),c6:fr(Ri(r))}),a=En(e.aP),t=a,i=P(Mt,n,1,q,g([t]));if(i.$===1)return L;var c=i.a,l=up(r),u=o(K,.99,o(ce,de(e.aJ),zt(Bl(c)))),v=Vl(c),s=v.a,d=v.b,m=v.c,f=ep(p(fp,s,d,m)),h=o(K,1.01,o(_n,f,zt(Fl(c)))),b=o(np,e.ev,{eq:e.eq,eP:h,fi:u}),w=op(b).dM,x=w?Ge(fr(Ri(r))):Qr(Fi(r)),_=function(){var oe=e.bZ;switch(oe.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var me=oe.a;return k(3,me);case 4:var me=oe.a;return k(4,me);default:return k(5,0)}}(),C=_.a,T=_.b,N=e.bD,E=N,U=o(So,E,e.b$),j=U,W=Ke({dx:0,dy:x.fU,dz:ln(j),dA:e.ec,dB:0,dC:x.fY,dD:un(j),dE:K0(f),dF:0,dG:x.c5,dH:vn(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),B=we(kl,W,l,b,Q0,t,{M:L,U:L,fB:L}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return We(g([p(qe,B.M,k(Q,Ja),Yr),p(qe,B.U,mn,Yr)]));case 1:var Q=O.a;return We(g([p(qe,B.M,mn,Yr),g([Ui]),p(qe,B.fB,Q.bd,Ml),g([Al(0)]),p(qe,B.M,k(Q,Ja),rp),p(qe,B.U,mn,Yr)]));default:var ie=O.a,ve=O.b;return We(g([p(qe,B.M,k(ve,Ja),Yr),g([Ui]),o(B0,B.fB,ie),p(tp,B.M,ve,Vr(ie)),p(qe,B.U,mn,Yr)]))}},mp=function(e){return o(Cr,"width",Ae(e))},pp=$(function(e,r){var n=g([o0(1),v0(0),Qm(!0),P(n0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return V(n,"0",1);case 1:return V(o(A,e0,n),"1",1);default:var T=C.a;return V(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Mi(v),d=o(se,"height",Ae(s)+"px"),m=Mi(u),f=m/s,h=o(xo,function(C){return dp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(se,"width",Ae(m)+"px"),w=e.aI,x=w,_=f0(x);return p(l0,"div",g([o(se,"padding","0px"),b,d]),g([k(i,p(m0,t,g([mp(Oe(m*c)),i0(Oe(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),h))]))}),bp=function(e){return o(pp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Yl=function(e){return e},Ei=Yl({fU:.31271,fY:.32902}),gp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(So,r.cd,r.b6),u=l;return{by:vn(u),ex:n,bF:un(u),cJ:0,bV:ln(u),cZ:1,fU:-t,fY:-i,c5:-c}}),hp=function(e){return e},_p=function(e){return hp(1.2*o(Fn,2,e))},Xa=function(e){return e},wp={$:0},yp=wp,Hl=function(e){return e},xp=$(function(e,r){var n=e,a=r;return J(a,n)>0}),ji=function(e){var r=e;return r},Sp=function(e){e:for(;;){if(_r(e.e2,cr)&&_r(e.e3,cr))return Pe;if(o(xp,de(e.e2),de(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=X(ji(e.e3)/Er),a=X(ji(e.e2)/Er),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(So,Hl(1),e.b6),v=u;return{by:a*vn(v),ex:!1,bF:a*un(v),cJ:n/a,bV:a*ln(v),cZ:3,fU:i,fY:c,c5:l}}}},Ni=function(e){return Sp({b6:e.b6,e2:e.cd,e3:cr,ei:e.ei})},Il=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Cp=function(e){var r=e;return r},Jl=function(e){var r=p(Il,1667,25e3,Cp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Yl({fU:n,fY:a})},Ol=function(e){return e},Lp=Jl(Ol(12e3)),Pp=Jl(Ol(5600)),zp=function(e){return{$:2,a:e}},kp=function(e){return zp(e)},Tp=$(function(e,r){return{$:2,a:e,b:r}}),ql=function(e){return{$:0,a:e}},Jn=function(e){var r=e;return r},Mp=function(e){var r=e;return r.ex},Dp=ql(mn.a),Ap=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(A,a,i),c):k(i,o(A,a,c))});return p(pr,n,k(L,L),r)}),Bp=function(e){var r=e;return Ke({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Fp=ee(function(e,r,n,a,t,i,c,l){var u=o(Ap,Mp,g([Jn(e),Jn(r),Jn(n),Jn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Tp,o(re,Bp,v),{bd:o(Ee,m,h),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return Dp}else return ql({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),Vp=y(function(e,r,n){return Ca(Fp,e,r,n,Pe,Pe,Pe,Pe,Pe)}),Up=function(e){var r=o(gp,Zm(e.fB),{b6:Pp,eH:e.fJ,cd:Xa(8e4)}),n=Ni({b6:Lp,cd:Xa(2e4),ei:e.ei}),a=Ni({b6:Ei,cd:Xa(15e3),ei:fr(e.ei)}),t=p(Vp,r,n,a);return bp({b0:kp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:_p(15),bJ:t,bZ:yp,b$:Ei})},Rp=function(e){var r=e;return r},Aa=function(e){var r=e;return Rp(r.er)},Zl=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Ep=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Xl=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ql=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),jp=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Np=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Wp=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Do=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return P(Wp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return P(Zl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return P(Ep,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return P(Xl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return P(Np,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return P(Ql,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return P(jp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ao={$:0},Gp=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),h=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=h,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),Yp=y(function(e,r,n){var a=_a(e(r));return Ca(Gp,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=$(function(e,r){var n=e,a=r;return J(a,n)<1}),Kl=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},zn=function(e){var r=e;return r},Ar=function(e){var r=e;return r.fU},Br=function(e){var r=e;return r.fY},Fr=function(e){var r=e;return r.c5},eu=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Ar(n),c=Br(n),l=Fr(n),u=Ar(a),v=Br(a),s=Fr(a),d=Ar(t),m=Br(t),f=Fr(t);return Kl({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},ru=Lf,ze=function(e){return ru(Da(e))},nu=function(e){var r=e;return r},Ba=function(e){return ru(nu(e))},Hp=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Dt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),Ip={fU:0,fY:0,c5:0},Jp=$(function(e,r){var n=e,a=r,t=o(nr,X(a.fU),o(nr,X(a.fY),X(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=qr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return Ip}),Op=Jp(Hl(1)),au=y(function(e,r,n){var a=o(Dt,r,n),t=o(Dt,e,r);return Op(o(Hp,a,t))}),qp=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Ba(p(au,n,a,t));return V({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},Zp=$(function(e,r){return{$:2,a:e,b:r}}),tu=Zp({df:3,$7:0,dV:4}),Xp=function(e){if(e.b){var r=e.a,n=e.b,a=tu(o(re,qp,e)),t=p(Yp,eu,r,n);return P(Zl,t,e,a,0)}else return Ao},Re=y(function(e,r,n){return V(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),ou=function(){var e=ur(1),r=ur(1),n=ur(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(pe,i,t,a),l=o(K,.5,e),u=p(pe,i,t,l),v=o(K,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(K,.5,n),f=p(pe,m,t,a),h=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Do(Xp(g([p(Re,c,h,f),p(Re,c,s,h),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,h,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,h),p(Re,s,d,w)])))}(),On={$:0},Qp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Kp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ba(p(au,u,l,c)),s={o:v,bT:ze(u)},d={o:v,bT:ze(l)},m={o:v,bT:ze(c)};return o(A,s,o(A,d,o(A,m,n)))}),Bo=function(e){var r=e;return r.D},eb=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),At=4294967295>>>32-Sn,Bt=Xu,rb=y(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,At&r,v)}else{var i=t.a,c=e-Sn,l=r,u=i;e=c,r=l,n=u;continue e}}}),nb=function(e){return e>>>5<<5},ab=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,nb(n))>-1?te(o(Bt,At&e,i)):te(p(rb,a,e,t))}),Fo=function(e){var r=e;return r.ah},Ka=$(function(e,r){return o(ab,e,Fo(r))}),tb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(eb,y(function(c,l,u){return V(c,l,u)}),o(Ka,a,e),o(Ka,t,e),o(Ka,i,e))};return o(mo,r,Bo(e))},ob=y(function(e,r,n){e:for(;;){var a=o(to,Ve,e),t=a.a,i=a.b;if(J(gt(t),Ve)<0)return o(Gc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Nc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Vo=function(e){return e.b?p(ob,e,L,0):Ec},ib=y(function(e,r,n){return e(r(n))}),cb=$(function(e,r){return!o(el,o(ib,gs,e),r)}),lb=$(function(e,r){return p(pr,$(function(n,a){return e(n)?o(A,n,a):a}),L,r)}),ub=function(e){var r=e.a;return r},iu=$(function(e,r){var n=ub(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(cb,a,r)?{D:r,ah:e}:{D:o(lb,a,r),ah:e}}),vb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=vb({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Qr(r),a=Qr(e);return k(V(a.fU,a.fY,a.c5),V(n.fU,n.fY,n.c5))}),Wi=p(Rn,0,0,0),et=Ye(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(vo,o(ta,e,r),t);if(v.$){var d={o:Wi,bT:ze(r)},m={o:Wi,bT:ze(e)},f=u+1,h=u;return V(o(A,V(n,h,f),o(A,V(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),$b=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,w=e,x=r,_=v,C=a+3,T=we(et,s,m,f,b,r,we(et,d,s,h,f,r,we(et,m,d,b,h,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,E=N.a,U=N.b;return k(E,Fe(U))}}),fb=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,w=p(gn,o(ta,m,s),f,p(gn,o(ta,s,d),h,p(gn,o(ta,d,m),b,t))),x=o(A,V(b,h,f),a),_=e,C=v,T=n+3,N=x,E=w;e=_,r=C,n=T,a=N,t=E;continue e}else return V(a,t,n)}),kr=y(function(e,r,n){var a=tb(n),t=p(pr,Kp(r),L,a),i=S(fb,r,a,0,L,wl),c=i.a,l=i.b,u=i.c,v=S($b,r,l,a,0,V(c,L,u)),s=v.a,d=v.b,m=_l(d)?t:le(t,d);return p(Qp,e,o(iu,Vo(m),s),o(jn,m,s))}),Ft=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Kr,0,Vr(e)-1)),ah:Vo(We(o(re,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},cu=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(re,zn,r);return p(kr,a,Dr,Ft(n));case 2:var a=e.a,r=e.b,n=o(re,zn,r);return p(kr,a,Dr,Ft(n));case 3:var a=e.a,t=e.b;return p(kr,a,Dr,t);case 4:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bT},t);case 8:return On;case 9:return On;default:return On}},Gi=cu(ou),Fa=function(e){var r=e;return r.aK},lu={$:0},z=lu,ge=$(function(e,r){return{$:1,a:e,b:r}}),sb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},db=1029,mb=function(e){return{$:5,a:e}},uu=function(e){var r=e;return mb(r)},pb=uu(db),bb=1028,gb=uu(bb),ke=y(function(e,r,n){return r===1?e?o(A,pb,n):o(A,gb,n):n}),vu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(ke,l,a,d),vu,sb,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Uo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},$u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(ke,l,a,d),$u,Uo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),fu=$(function(e,r){return{$:3,a:e,b:r}}),hb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},su={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_b=R(function(e,r,n,a){return o(fu,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,su,hb,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Ro={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Va=Pf,ir=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(ke,u,t,m),$u,Ro,a,{aN:o(Va,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),wb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},yb=he(function(e,r,n,a,t){return o(fu,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,su,wb,t,{aN:o(Va,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},mu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ke,l,a,d),mu,du,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},bu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xb=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ne,p(ke,v,i,f),bu,pu,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),gu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Sb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(d,m,f,h,b,w,x,_){var C=x.a,T=x.b;return S(ne,p(ke,h,s,_),bu,gu,v,{b4:e,b7:r,b8:i,b9:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},hu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Zn=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ne,p(ke,v,i,f),mu,hu,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),Cb=function(e){return{$:0,a:e}},Yi=$(function(e,r){return{$:1,a:e,b:r}}),wn=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),Lb=function(e){return P(cn,ln(e),un(e),vn(e),1)},Eo=P(cn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Eo)}else{var n=r.a;return k(e,Lb(n))}}),_u=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(Yi,k(t,Eo),o(wn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Yi,o(oa,t,e),o(wn,t,r))}else{var a=n.a.a;return n.b.a,Cb(a)}}),Pb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),zb=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),kb=function(e){return o(De,e,1)},Vt=o(De,0,0),Hr=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Vt)}else{var n=r.a;return k(e,kb(n))}}),wu=R(function(e,r,n,a){var t=P(zb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return P(Xn,k(u,Eo),o(Hr,u,r),o(Hr,u,n),o(wn,u,a))}else if(t.b.$){var u=t.b.a.C;return P(Xn,o(oa,u,e),k(u,Vt),o(Hr,u,n),o(wn,u,a))}else if(t.c.$){var u=t.c.a.C;return P(Xn,o(oa,u,e),o(Hr,u,r),k(u,Vt),o(wn,u,a))}else if(t.d.$){var u=t.d.a.C;return P(Xn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Pb,i,c,l)}}),Tb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},nt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(ke,u,t,m),vu,Tb,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),yu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Mb=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ke,l,a,d),yu,pu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Db=jt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,d,m,f,h,b,w){var x=b.a,_=b.b;return S(ne,p(ke,m,u,w),yu,gu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:h,cR:n,e:v,a$:0,f})}))}),kn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Ab=function(e){var r=e;return p(kn,r.dR,r.dO,.5)},Bb=function(e){var r=e;return p(kn,r.dS,r.dP,.5)},Fb=function(e){var r=e;return p(kn,r.dT,r.dQ,.5)},Vb=function(e){return p(pe,Ab(e),Bb(e),Fb(e))},G=function(e){var r=Vl(e),n=r.a,a=r.b,t=r.c;return{ey:Da(Vb(e)),eS:n/2,eT:a/2,eU:t/2}},jo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return P(rt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(rt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(rt,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return P(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return P(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return P(_b,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(yb,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(_u,s,E);if(d.$){var h=d.a,b=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return P(Mb,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(xb,b,x,_,G(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return P(qn,m,G(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return P(qn,m,G(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return P(qn,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return P(qn,m,G(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var C=e.b,T=e.c,N=e.d,E=e.e,U=P(wu,C,T,N,E);if(U.$){var O=U.a,Q=O.a,ie=O.b,ve=U.b,oe=ve.a,me=ve.b,Te=U.c,Se=Te.a,br=Te.b,gr=U.d,x=gr.a,_=gr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Iu(Db,Q,ie,oe,me,Se,br,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Sb(Q)(ie)(oe)(me)(Se)(br)(x)(_)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=U.a,W=U.b,B=U.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(Zn,j,W,B,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(Zn,j,W,B,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(Zn,j,W,B,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(Zn,j,W,B,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),at=function(e){var r=e;return r.fU},tt=function(e){var r=e;return r.fY},ot=function(e){var r=e;return r.c5},Ub=function(e){var r=e,n=ot(r.c6),a=tt(r.c6),t=at(r.c6),i=ot(r.c4),c=tt(r.c4),l=at(r.c4),u=ot(r.c3),v=tt(r.c3),s=at(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Rb=function(e){var r=Da(Wr(e)),n=Ge(zr(e)),a=Ge(Pr(e)),t=Ge(Lr(e));return{dp:Ub(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),xu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(zl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Su=$(function(e,r){return o(xu,Rb(e),r)}),Ua=function(e){return{$:2,a:e}},Eb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),jb=Tf,Nb=kf,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Nb(a),h=f.fU,b=f.fY,w=f.c5,x=f.em,_=jb({em:x,fU:h*s,fY:b*d,c5:w*m});return Ca(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return lu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(Eb,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Ua(o(Hi,e,i));default:var c=r.a;return El(o(re,Ut(e),c))}}),No=$(function(e,r){var n=r;return o(Ut,e,n)}),Wo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Cu=7683,Lu=7682,Wb=p(Po,{co:0,cN:0,c2:15},{a8:xe,bl:nn,bt:xe,bu:Cu},{a8:xe,bl:nn,bt:xe,bu:Lu}),Gb=p(Po,{co:0,cN:0,c2:15},{a8:xe,bl:nn,bt:xe,bu:Lu},{a8:xe,bl:nn,bt:xe,bu:Cu}),Go=$(function(e,r){return e?o(A,Gb,r):o(A,Wb,r)}),Yb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Hb=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(Go,i,v),Yb,Wo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=Hb(e);if(r.$)return z;var n=r.a;return Ua(n)},Ib=R(function(e,r,n,a){var t=o(jo,n,ou),i=function(){var s=k(e,r);return s.a?s.b?En(g([t,wa(Gi)])):t:s.b?wa(Gi):z}(),c=Fa(a),l=c.a,u=c.b,v=c.c;return o(Su,Aa(a),o(No,V(l,u,v),i))}),Jb=$(function(e,r){return P(Ib,!0,!0,e,r)}),Rt=function(e){return{$:0,a:e}},Pu=$(function(e,r){return{$:0,a:e,b:r}}),Ob=function(e){var r=so(e),n=r.cM,a=r.cc,t=r.b5;return p(Rn,n,a,t)},qb=function(e){return o(Pu,0,Rt(Ob(e)))},Yo=function(e){var r=e;return r.k},yn=function(e){var r=e;return Ur(r)},Zb=$(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fU:Ur(r),fY:rn(r)}},Xb=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ba(a),bT:ze(n)},r)}),Qb=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=vn(l.bT),s=un(l.bT),d=ln(l.bT),m=o(aa,e,d),f=o(nr,r,d),h=o(aa,n,s),b=o(nr,a,s),w=o(aa,t,v),x=o(nr,i,v),_=u;e=m,r=f,n=h,a=b,t=w,i=x,c=_;continue e}else return Kl({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),zu=$(function(e,r){var n=vn(e.bT),a=un(e.bT),t=ln(e.bT);return Nt(Qb,t,t,a,a,n,n,r)}),Kb=function(e){var r=p(Mc,Xb,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Bo(e)),i=o(zu,n,a);return P(Xl,i,e,t,0)}else return Ao},ku=vr({fU:0,fY:0,c5:-1}),Ji=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),ya=function(e){var r=e;return rn(r)},pn=function(e){var r=e;return r},Et=function(e){return Rr(2*Er*e)},Oi=Ll({cA:Qe,c3:_o,c4:Mo}),Tu=function(){var e=72,r=o(Zb,e,Et(1)),n=ur(1),a=pn(wo),t=pn(ku),i=ur(1),c=o(K,.5,i),l=p(pe,cr,cr,c),u=o(K,-.5,i),v=p(pe,cr,cr,u),s=function(f){var h=o(K,f,r),b=pn(o(Ji,Oi,Ii(h))),w=o(K,yn(h),n),x=o(K,ya(h),n),_=p(pe,w,x,c),C=p(pe,w,x,u),T=o(Pn,e,f+1),N=o(K,T,r),E=pn(o(Ji,Oi,Ii(N))),U=o(K,yn(N),n),j=o(K,ya(N),n),W=p(pe,U,j,u),B=p(pe,U,j,c);return g([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),V({o:b,bT:C},{o:E,bT:W},{o:E,bT:B}),V({o:b,bT:C},{o:E,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(re,s,o(Kr,0,e-1)),m=Ft(We(d));return Do(Kb(m))}(),qi=cu(Tu),Mu=function(e){var r=e;return r.cA},e1=function(e){var r=e,n=X(r.c5),a=X(r.fY),t=X(r.fU);if(J(t,a)<1)if(J(t,n)<1){var i=qr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=qr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(J(a,n)<1){var i=qr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=qr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},r1=function(e){var r=e1(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return k(r,c)},n1=function(e){var r=ho(e),n=r1(r),a=n.a,t=n.b;return dr({cA:Mu(e),c3:a,c4:t,c6:r})},Du=function(e){var r=e;return r.e9},Au=function(e){var r=e;return r.fu},a1=R(function(e,r,n,a){var t=n1(Yo(a)),i=o(jo,n,Tu),c=function(){var d=k(e,r);return d.a?d.b?En(g([i,wa(qi)])):i:d.b?wa(qi):z}(),l=Au(a),u=l,v=Du(a),s=v;return o(Su,t,o(No,V(u,u,s),c))}),t1=$(function(e,r){return P(a1,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Xi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},bn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return Ke({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Qn=tu(g([V({cY:0},{cY:1},{cY:2})])),o1=$(function(e,r){var n=eu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){return S(ne,p(ke,N,0,W),Zi,Uo,Qn,{aw:t,b:T,c:C,d:U,e:_,bq:bn(r),f:E})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){return S(ne,p(ke,N,0,W),Zi,Ro,Qn,{aN:o(Va,Nn(c),i),b:T,c:C,d:U,e:_,bq:bn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(_u,l,f);if(u.$)return z;var v=u.a;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){var B=j.a,O=j.b;return S(ne,p(ke,N,0,W),Xi,du,Qn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:T,c:C,d:U,e:_,bq:bn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=P(wu,s,d,m,f);if(h.$)return z;var b=h.a,w=h.b,x=h.c;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){var B=j.a,O=j.b;return S(ne,p(ke,N,0,W),Xi,hu,Qn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:T,c:C,d:U,cQ:w,e:_,bq:bn(r),f:E})}))}}),i1=function(){var e=g([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=g([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(jn,e,r)}(),c1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Qi=function(e){return Ua(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Go,t,u),c1,Wo,i1,{b:a,c:n,d:c,e:r,bY:l,bq:bn(e),f:i})}))},l1=R(function(e,r,n,a){var t=o(o1,n,a),i=k(e,r);return i.a?i.b?En(g([t,Qi(a)])):t:i.b?Qi(a):z}),u1=$(function(e,r){return P(l1,!0,!0,e,r)}),Ho=function(e){var r=e;return r},v1=$(function(e,r){var n=Fr(r),a=Fr(e),t=Br(r),i=Br(e),c=Ar(r),l=Ar(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),$1=function(e){var r=Ho(e),n=r.a,a=r.b;return o(v1,n,a)},Ki={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},f1=$(function(e,r){return{$:1,a:e,b:r}}),s1=f1({df:2,$7:0,dV:1}),ec=s1(g([k({dw:0},{dw:1})])),d1=$(function(e,r){var n=$1(r),a=G(n),t=Ho(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(ge,a,ee(function(v,s,d,m,f,h,b,w){return S(ne,w,Ki,Uo,ec,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,m,f,h,b,w,x){return S(ne,x,Ki,Ro,ec,{aN:o(Va,Nn(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return z;default:return z}}),m1=$(function(e,r){return o(d1,e,r)}),Ra=function(e){var r=e;return r.ey},Ea=function(e){var r=e;return r.fu},Kn=function(e){return Rr(Er*(e/180))},rc=$(function(e,r){var n=e,a=r;return n/a}),p1=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),nc=$(function(e,r){return e<1?L:S(p1,0,e,e,r,L)}),b1=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ba(a),bT:ze(n),L:o(De,c,l)},r)}),g1=function(e){var r=p(Mc,b1,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Bo(e)),i=o(zu,n,a);return P(Ql,i,e,t,0)}else return Ao},Bu=$(function(e,r){var n=e,a=r,t=Ur(a);return{fU:t*Ur(n),fY:t*rn(n),c5:rn(a)}}),h1=function(){var e=ur(1),r=72,n=o(Kr,0,r-1),a=o(nc,r,o(kn,cr,Et(1))),t=no(r/2),i=o(Kr,0,t-1),c=o(nc,t,o(kn,Kn(90),Kn(-90))),l=Vo(We(o(re,function(s){return o(re,function(d){return{o:pn(o(Bu,s,d)),bT:p(pe,o(K,yn(d)*yn(s),e),o(K,yn(d)*ya(s),e),o(K,ya(d),e)),L:k(o(rc,s,Et(1)),o(rc,o(_n,Kn(90),d),Kn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(re,function(s){return We(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([V(b,h,m),V(b,m,f)])},i))},n));return Do(g1(o(iu,l,v)))}(),xa=72,ea=2*xa,_1=$(function(e,r){e:for(;;){var n=ea+1,a=o(Pn,ea,2*e+3),t=o(Pn,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),w1=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),y1=$(function(e,r){e:for(;;){var n=p(w1,0,2*Er,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),x1=function(){var e=o(y1,xa-1,g([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(_1,xa-1,L);return o(jn,e,r)}(),S1={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ac=function(e){return Ua(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Go,!0,u),S1,Wo,x1,{aw:p(Rn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},C1=function(e){var r=nu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},L1=$(function(e,r){return o(xu,C1(e),r)}),P1=R(function(e,r,n,a){var t=o(jo,n,h1),i=function(){var u=k(e,r);return u.a?u.b?En(g([t,ac()])):t:u.b?ac():z}(),c=Ea(a),l=c;return o(L1,o(Dt,Qe,Ra(a)),o(No,V(l,l,l),i))}),z1=$(function(e,r){return P(P1,!0,!0,e,r)}),k1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Fu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),T1=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),M1=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Pu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(k1,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Fu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(T1,n,a,t,i,c)}},D1=M1,Vu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(Jb,t,r)]);case 1:var t=e.a,n=e.b;return g([o(u1,t,n)]);case 3:var t=e.a,a=e.b;return g([o(z1,D1(t),a)]);case 2:var t=e.a,i=e.b;return g([o(t1,t,i)]);case 4:var c=e.a,l=e.b;return g([o(m1,qb(c),l)]);default:var u=e.a;return o(xo,Vu,u)}},A1=function(e){return o(xo,Vu,e)},B1=$(function(e,r){return Up({aI:Om(e.es),ev:e.ev,aJ:qm(.5),ca:e.ca,aK:k(Ti(Oe(e.cS.fS)),Ti(Oe(e.cS.eW))),aP:A1(r),fB:!0,fJ:o(Bu,Rr(e.fI),Rr(e.fK)),ei:yo})}),ja=$(function(e,r){return{$:0,a:e,b:r}}),it=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ct=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),F1=vr({fU:-1,fY:0,c5:0}),V1=vr({fU:0,fY:-1,c5:0}),U1=Ye(function(e,r,n,a,t,i){var c=o(it,n,i)?wo:ku,l=o(it,r,t)?Gl:V1,u=o(it,e,a)?Pl:F1,v=V(de(o($r,e,a)),de(o($r,r,t)),de(o($r,n,i))),s=p(pe,o(ct,e,a),o(ct,r,t),o(ct,n,i)),d=dr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),R1=$(function(e,r){return we(U1,Ar(e),Br(e),Fr(e),Ar(r),Br(r),Fr(r))}),E1=$(function(e,r){var n=r/2;return o(ja,e,o(R1,p(Tt,-n,-n,-n),p(Tt,n,n,n)))}),Na=function(e){return{$:5,a:e}},tc=function(e){return Na(e)},lt=function(e){return p(Il,0,1,e<=.04045?e/12.92:o(Fn,(e+.055)/1.055,2.4))},j1=function(e){var r=so(e),n=r.cM,a=r.cc,t=r.b5;return p(Rn,lt(n),lt(a),lt(t))},N1=function(e){return p(Fu,0,Rt(j1(e)),Rt(0))},Io=$(function(e,r){return{$:2,a:e,b:r}}),Jo=$(function(e,r){return{$:4,a:e,b:r}}),Oo=$(function(e,r){return{$:3,a:e,b:r}}),qo=$(function(e,r){return{$:1,a:e,b:r}}),W1=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),G1=$(function(e,r){return{er:o(Cl,e,Aa(r)),aK:Fa(r)}}),Y1=$(function(e,r){var n=r;return o(Gr,o(Un,e,n.cA),n.eH)}),H1=$(function(e,r){var n=r;return{k:o(Y1,e,n.k),e9:n.e9,fu:n.fu}}),I1=function(e){return e},Zo=$(function(e,r){var n=Ho(r),a=n.a,t=n.b;return I1(k(e(a),e(t)))}),J1=$(function(e,r){return o(Zo,Un(e),r)}),Xo=$(function(e,r){return{ey:r,fu:de(e)}}),O1=$(function(e,r){return o(Xo,Ea(r),o(Un,e,Ra(r)))}),Qo=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),q1=$(function(e,r){return o(Qo,Un(e),r)}),Uu=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(W1,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ja,s,o(G1,i,c));case 1:var s=r.a,l=r.b;return o(qo,s,o(q1,i,l));case 3:var s=r.a,u=r.b;return o(Oo,s,o(O1,i,u));case 2:var s=r.a,v=r.b;return o(Io,s,o(H1,i,v));case 4:var s=r.a,d=r.b;return o(Jo,s,o(J1,i,d));default:var m=r.a;return Na(o(re,Uu(V(n,a,t)),m))}}),Z1=function(e){return Uu(V(0,e,0))},ut=function(e){return e/255},X1=y(function(e,r,n){return P(Bn,ut(e),ut(r),ut(n),1)}),Q1=y(function(e,r,n){return{er:p(Sl,e,r,Aa(n)),aK:Fa(n)}}),K1=$(function(e,r){var n=o(Vn,e,r),a=o(na,e,r);return function(t){var i=t;return o(Gr,n(i.cA),a(i.eH))}}),e3=y(function(e,r,n){var a=n;return{k:p(K1,e,r,a.k),e9:a.e9,fu:a.fu}}),r3=y(function(e,r,n){return o(Zo,o(Vn,e,r),n)}),n3=y(function(e,r,n){return o(Xo,Ea(n),p(Vn,e,r,Ra(n)))}),a3=y(function(e,r,n){return o(Qo,o(Vn,e,r),n)}),Ru=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ja,l,p(Q1,e,r,a));case 1:var l=n.a,t=n.b;return o(qo,l,p(a3,e,r,t));case 3:var l=n.a,i=n.b;return o(Oo,l,p(n3,e,r,i));case 2:var l=n.a,c=n.b;return o(Io,l,p(e3,e,r,c));case 4:var l=n.a,u=n.b;return o(Jo,l,p(r3,e,r,u));default:var v=n.a;return Na(o(re,o(Ru,e,r),v))}}),t3=o(Gr,Qe,Mo),o3=$(function(e,r){return p(Ru,t3,Rr(e),r)}),Wn=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c5:a.c5+r*(t.c5-a.c5)}}),i3=y(function(e,r,n){var a=Aa(n),t=Lr(a),i=Pr(a),c=zr(a),l=p(Wn,e,r,Wr(a)),u=r>=0?dr({cA:l,c3:t,c4:i,c6:c}):dr({cA:l,c3:fr(t),c4:fr(i),c6:fr(c)}),v=Fa(n),s=v.a,d=v.b,m=v.c,f=de(o(K,r,s)),h=de(o(K,r,d)),b=de(o(K,r,m));return{er:u,aK:V(f,h,b)}}),oc=function(e){return ho(Yo(e))},c3=function(e){return Mu(Yo(e))},l3=y(function(e,r,n){var a=de(o(K,r,Au(n))),t=de(o(K,r,Du(n))),i=r>=0?oc(n):fr(oc(n)),c=p(Wn,e,r,c3(n));return{k:o(Gr,c,i),e9:t,fu:a}}),u3=y(function(e,r,n){return o(Zo,o(Wn,e,r),n)}),v3=y(function(e,r,n){return o(Xo,o(K,X(r),Ea(n)),p(Wn,e,r,Ra(n)))}),$3=y(function(e,r,n){return o(Qo,o(Wn,e,r),n)}),Eu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ja,c,p(i3,Qe,e,n));case 1:var c=r.a,a=r.b;return o(qo,c,p($3,Qe,e,a));case 3:var c=r.a,t=r.b;return o(Oo,c,p(v3,Qe,e,t));case 2:var c=r.a,i=r.b;return o(Io,c,p(l3,Qe,e,i));case 4:var c=r.a,l=r.b;return o(Jo,c,p(u3,Qe,e,l));default:var u=r.a;return Na(o(re,Eu(e),u))}}),f3=$(function(e,r){return(r-Wc(r/e)*e)/e}),s3=$(function(e,r){return 360*o(f3,e,r)}),d3=P(Bn,255/255,255/255,255/255,1),ju=$(function(e,r){var n=o(Pn,2,r)?d3:p(X1,17,147,216),a=kt(o(s3,8,e.db))/4,t=.707/Ur(Er/4-a);return tc(r?g([o(E1,N1(n),1),o(Z1,.3,o(o3,a,o(Eu,t,o(ju,e,r-1))))]):L)}),m3=function(e){return o(ju,e,20)},p3=$(function(e,r){return o(B1,{es:P(ml,0,0,0,.7),ev:Jm(e),ca:e.ca,cS:e.cS,fI:kt(90),fK:-kt(180)},g([m3(e)]))}),b3=P(wm,p3,km,zm,ym);const g3={Main:{init:b3(o(D,function(e){return Me({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Ln)))},o(M,"left",Z))},o(M,"pressedKeys",da(Ln)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Me({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Me({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Me({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},h3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-F.clock;b<.009||(F.dt=b,F.clock=h,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},_3=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},w3=g3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});_3();h3(w3);
