const Yu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Yu();function wr(e,r,n){return n.a=e,n.f=r,n}function $(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Rt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ca(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Gu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Hu=[];function Iu(e){return e.length}var Ou=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ju=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Xu()),r});function Xu(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Ku=$(function(e,r){var n=I(e,r);return n<0?Cc:n?Ef:Sc}),Tn=0;function T(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var Qu=$(tr);function g(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function La(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return g(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(La(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return g(La(r).sort(function(n,a){var t=o(e,n,a);return t===Sc?0:t===Cc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan,cv=Math.atan;$(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,Oo=Math.log,dv=isNaN;function mv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var pv=$(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function hv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),wv=$(function(e,r){return r.split(e)}),yv=$(function(e,r){return r.join(e)}),xv=y(function(e,r,n){return n.slice(e,r)});function Sv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function Ki(e){return e+""}function Tv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function kv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Mv(e){return La(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Av(e){return{$:0,a:e}}function jt(e){return{$:2,b:e}}var Fv=jt(function(e){return typeof e=="boolean"?$e(e):Ke("a BOOL",e)}),Vv=jt(function(e){return typeof e=="number"?$e(e):Ke("a FLOAT",e)}),Uv=jt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ke("a STRING",e)});function Ev(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Nv=$(function(e,r){return yr(e,[r])}),Wv=y(function(e,r,n){return yr(e,[r,n])});U(function(e,r,n,a){return yr(e,[r,n,a])});he(function(e,r,n,a,t){return yr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return we(o(Kt,"This is not valid JSON! "+a.message,r))}});var Qi=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ke("null",r);case 3:return En(r)?Jo(e.b,r,g):Ke("a LIST",r);case 4:return En(r)?Jo(e.b,r,Yv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Oe(v)?v:we(o(li,n,v.a));case 7:var a=e.e;if(!En(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Oe(v)?v:we(o(Lc,a,v.a));case 8:if(typeof r!="object"||r===null||En(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Oe(v))return we(o(li,i,v.a));t=tr(T(i,v.a),t)}return $e(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Oe(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ne(e.b,r);return Oe(v)?Ne(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ne(d.a,r);if(Oe(v))return v;s=tr(v.a,s)}return we(Rf(Ve(s)));case 1:return we(o(Kt,e.a,r));case 0:return $e(e.a)}}function Jo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Oe(c))return we(o(Lc,i,c.a));t[i]=c.a}return $e(n(t))}function En(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Yv(e){return o(ns,e.length,function(r){return e[r]})}function Ke(e,r){return we(o(Kt,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Gv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ec(e){return e}y(function(e,r,n){return n[e]=r,n});function Ur(e){return{$:0,a:e}}function Hv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var $t=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Ov=0;function Nt(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return Wt(r),r}function rc(e){return sr(function(r){r(Ur(Nt(e)))})}function nc(e,r){e.h.push(r),Wt(e)}var Jv=$(function(e,r){return sr(function(n){nc(e,r),n(Ur(Tn))})}),ja=!1,Zo=[];function Wt(e){if(Zo.push(e),!ja){for(ja=!0;e=Zo.shift();)qv(e);ja=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Yt(e,r,n,a,t,i){var c=o(Qi,e,r?r.flags:void 0);Oe(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),Ko(l,b.b,t(v))}return Ko(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function Zv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Kv(t,r)}return n}function Xv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Kv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,Iv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Nt(o($t,l,e.b))}var Qv=$(function(e,r){return sr(function(n){e.g(r),n(Ur(Tn))})});$(function(e,r){return o(Jv,e.h,{$:0,a:r})});function ac(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Xo=[],Na=!1;function Ko(e,r,n){if(Xo.push({p:e,q:r,r:n}),!Na){Na=!0;for(var a;a=Xo.shift();)r$(a.p,a.q,a.r);Na=!1}}function r$(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)nc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function t$(e){rr[e]&&nn(3)}$(function(e,r){return r});function o$(e,r){return t$(e),rr[e]={f:i$,u:r,a:c$},ac(e)}var i$=$(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=P,a=rr[e].u,t=Ur(null);rr[e].b=t,rr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(Qi,a,c);Oe(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,lr=typeof document!="undefined"?document:{};function Gt(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var tc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ht(n),e:t,f:e,b:i}})}),Er=tc(void 0),l$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ht(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:Ht(e),g:r,h:n,i:a}}var $$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Rt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return Ca(e,r,n,a,t,i,c,l,u)})});var oc=$(function(e,r){return{$:"a0",n:e,o:r}}),f$=$(function(e,r){return{$:"a1",n:e,o:r}}),ic=$(function(e,r){return{$:"a2",n:e,o:r}}),Sr=$(function(e,r){return{$:"a3",n:e,o:r}}),s$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(oc,r.n,p$(e,r.o)):r});function p$(e,r){var n=ao(r);return{$:r.$,a:n?p(as,n<3?b$:h$,De(e),r.a):o(ua,e,r.a)}}var b$=$(function(e,r){return T(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ht(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Qo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Qo(c,t,i):c[t]=i}return r}function Qo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Gt(c,hr(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?g$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function g$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,It&&{passive:ao(i)<2}),a[t]=c}}var It;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){It=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Oe(i)){for(var c=ao(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function cc(e,r){var n=[];return Je(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!C$(d,m):d!==m)&&ge(n,2,a,m),Je(h,b,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:ei(e,r,n,a,L$);return;case 2:ei(e,r,n,a,P$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=Ot(e.d,r.d);w&&ge(n,4,a,w);var x=r.i(e.g,r.g);x&&ge(n,5,a,x);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=Ot(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],w=h.a,x=b.a,_=h.b,C=b.b,k=void 0,N=void 0;if(w===x){f++,Je(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var j=R.a,W=R.b;N=x===j}if(E){var F=E.a,Z=E.b;k=w===F}if(k&&N){f++,Je(_,Z,t,f),fn(i,t,w,C,m,c),f+=_.b||0,f++,sn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(k){f++,fn(i,t,x,C,m,c),Je(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,sn(i,t,w,_,f),f+=_.b||0,f++,Je(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(R&&j===F){f++,sn(i,t,w,_,f),fn(i,t,x,C,m,c),f+=_.b||0,f++,Je(W,Z,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;sn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];fn(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&ge(n,8,a,{w:t,x:c,y:K})}var lc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+lc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}sn(e,r,n+lc,a,t)}function uc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)uc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,w=0;w<h.length;w++){t++;var x=m===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=dn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function vc(e,r,n,a){return n.length===0?e:(uc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return k$(e,r);case 5:return r.s(e);default:nn(10)}}function T$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function k$(e,r){var n=r.s,a=M$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Gt(e,a),e}function M$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Gt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Jt(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Sr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Jt(v[a]),u);return p(Er,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=U(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Jt(l);return $c(i,function(v){var s=c(v),d=cc(u,s);l=vc(l,u,d,t),u=s})})});U(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=lr.title,v=lr.body,s=Jt(v);return $c(i,function(d){oa=c;var m=l(d),f=Er("body")(P)(m.eu),h=cc(s,f);v=vc(v,s,h,t),s=f,oa=0,u!==m.fL&&(lr.title=u=m.fL)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function $c(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(io,to,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(io,to,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(io,to,sr(function(){history.replaceState({},"",r),e()}))});var A$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:A$;y(function(e,r,n){return rc(sr(function(a){function t(i){Nt(n(i))}return e.addEventListener(r,t,It&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Oe(n)?re(n.a):q});function fc(e,r){return sr(function(n){ca(function(){var a=document.getElementById(e);n(a?Ur(r(a)):Hv(os(e)))})})}function V$(e){return sr(function(r){ca(function(){r(Ur(e()))})})}$(function(e,r){return fc(r,function(n){return n[e](),Tn})});$(function(e,r){return V$(function(){return F$.scroll(e,r),Tn})});y(function(e,r,n){return fc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var U$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var E$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(cl,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(cl,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var R$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/j$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function j$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var qt=new Float64Array(3),ri=new Float64Array(3),ni=new Float64Array(3),N$=y(function(e,r,n){return new Float64Array([e,r,n])}),W$=function(e){return e[0]},Y$=function(e){return e[1]},G$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var H$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(sc);function dc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(sc(e,r,n),n)}$(dc);function mc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/mc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var I$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function dt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(dt);$(function(e,r){var n,a=qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var O$=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var J$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},q$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var X$=new Float64Array(16),K$=new Float64Array(16),Q$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},ef=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(pc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return pc(c,l,i,t,n,a)});function bc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(bc);U(function(e,r,n,a){return bc(e,r,n,a,-1,1)});function hc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],k=r[1],N=r[2],R=r[3],E=r[4],j=r[5],W=r[6],F=r[7],Z=r[8],K=r[9],ce=r[10],fe=r[11],ie=r[12],me=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*k+d*N+b*R,n[1]=t*C+u*k+m*N+w*R,n[2]=i*C+v*k+f*N+x*R,n[3]=c*C+s*k+h*N+_*R,n[4]=a*E+l*j+d*W+b*F,n[5]=t*E+u*j+m*W+w*F,n[6]=i*E+v*j+f*W+x*F,n[7]=c*E+s*j+h*W+_*F,n[8]=a*Z+l*K+d*ce+b*fe,n[9]=t*Z+u*K+m*ce+w*fe,n[10]=i*Z+v*K+f*ce+x*fe,n[11]=c*Z+s*K+h*ce+_*fe,n[12]=a*ie+l*me+d*Me+b*Se,n[13]=t*ie+u*me+m*Me+w*Se,n[14]=i*ie+v*me+f*Me+x*Se,n[15]=c*ie+s*me+h*Me+_*Se,n}$(hc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],k=r[6],N=r[8],R=r[9],E=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*k,n[5]=t*_+l*C+s*k,n[6]=i*_+u*C+d*k,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+s*E,n[10]=i*N+u*R+d*E,n[11]=0,n[12]=a*j+c*W+v*F+m,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+d*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/mc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=h+f,C=b-m,k=h-f,N=c*c*v+u,R=w+d,E=b+m,j=w-d,W=l*l*v+u,F=n[0],Z=n[1],K=n[2],ce=n[3],fe=n[4],ie=n[5],me=n[6],Me=n[7],Se=n[8],mr=n[9],pr=n[10],Ra=n[11],Ru=n[12],ju=n[13],Nu=n[14],Wu=n[15];return a[0]=F*x+fe*_+Se*C,a[1]=Z*x+ie*_+mr*C,a[2]=K*x+me*_+pr*C,a[3]=ce*x+Me*_+Ra*C,a[4]=F*k+fe*N+Se*R,a[5]=Z*k+ie*N+mr*R,a[6]=K*k+me*N+pr*R,a[7]=ce*k+Me*N+Ra*R,a[8]=F*E+fe*j+Se*W,a[9]=Z*E+ie*j+mr*W,a[10]=K*E+me*j+pr*W,a[11]=ce*E+Me*j+Ra*W,a[12]=Ru,a[13]=ju,a[14]=Nu,a[15]=Wu,a});function rf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(rf);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function nf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(nf);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=dc(e,r,qt),t=la(dt(n,a,ri),ri),i=la(dt(a,t,ni),ni),c=X$,l=K$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,hc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ai=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var af=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},tf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),of=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),cf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),lf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),uf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ff=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),sf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),df=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},bf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},gc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},_c=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},gf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_f=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ti=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],yf=[mf,pf,bf,gc,_c,hf,gf,_f,wf];function oi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function xf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function wc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Sf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,w,x){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<h;_++)f[b++]=h===1?w[C][x]:w[C][x][_]})}var u=wc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Zt(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Zt(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ii(e,r){return e+"#"+r}var yc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),gc(n),_c(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ii(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ai++,v||(v=oi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ai++,s||(s=oi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=xf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Pf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=ii(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),zf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Sf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=wc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,yn(I0(n),i.a),u=0;u<ti.length;u++){var k=n[ti[u]];k.toggle!==n.toggle&&k.enabled&&(yf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function Pf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,w=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function zf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Tf=y(function(e,r,n){return v$(r,{g:n,f:{},h:e},Vf,Uf)}),kf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Bf=$(function(e,r){e.contextAttributes.antialias=!0}),Af=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ff=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Vf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(H0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),af(function(){return o(yc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Uf(e,r){return r.f=e.f,yc(r)}var B=Qu,Rn=Zu,xc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Rn,e,l,v)}else{var u=c.a;return p(Rn,i,l,u)}});return p(Rn,i,p(Rn,e,r,t),a)}),Xt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Xt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ci=function(e){return p(Xt,y(function(r,n,a){return o(B,T(r,n),a)}),P,e)},Sc=1,Ef=2,Cc=0,we=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),li=$(function(e,r){return{$:0,a:e,b:r}}),Lc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},jf=Cv,Nf=Gv,Ae=Ki,Pr=$(function(e,r){return o(yv,e,La(r))}),Qt=$(function(e,r){return g(o(wv,e,r))}),Pc=function(e){return o(Pr,`
    `,o(Qt,`
`,e))},Pa=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return p(Pa,$(function(r,n){return n+1}),0,e)},Wf=ev,Yf=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Fr=$(function(e,r){return p(Yf,e,r,P)}),zc=$(function(e,r){return p(Wf,e,o(Fr,0,Ar(r)-1),r)}),nr=Dv,Tc=function(e){var r=nr(e);return 97<=r&&r<=122},kc=function(e){var r=nr(e);return r<=90&&65<=r},Gf=function(e){return Tc(e)||kc(e)},Hf=function(e){var r=nr(e);return r<=57&&48<=r},If=function(e){return Tc(e)||kc(e)||Hf(e)},Ve=function(e){return p(Pa,B,P,e)},an=bv,Of=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Pc(Jf(r))))}),Jf=function(e){return o(qf,e,P)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Gf(x)&&o(jf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Ve(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ae(Ar(s))+" ways:"));return o(Pr,`

`,o(B,h,o(zc,Of,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Ve(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return h+(Pc(o(Nf,4,f))+(`

`+m))}}),Ue=32,mt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=Hu,eo=vv,ro=$(function(e,r){return Oo(r)/Oo(e)}),Zf=lv,xn=eo(o(ro,2,Ue)),Mc=L(mt,0,xn,pt,pt),Dc=Ou,Bc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ac=$v,bt=Iu,ke=$(function(e,r){return I(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},no=Ju,Kf=$(function(e,r){e:for(;;){var n=o(no,Ue,e),a=n.a,t=n.b,i=o(B,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),Qf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=eo(r/Ue);if(n===1)return o(no,Ue,e).a;var a=o(Kf,e,P),t=n;e=a,r=t;continue e}}),Fc=$(function(e,r){if(r.l){var n=r.l*Ue,a=Ac(o(ro,Ue,n-1)),t=e?Ve(r.z):r.z,i=o(es,t,r.l);return L(mt,bt(r.p)+n,o(ke,5,a*xn),i,r.p)}else return L(mt,bt(r.p),xn,pt,r.p)}),rs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Fc,!1,{z:a,l:n/Ue|0,p:t});var i=Bc(p(Dc,Ue,r,e)),c=e,l=r-Ue,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Mc;var n=e%Ue,a=p(Dc,n,e-n,r),t=e-n-Ue;return S(rs,r,t,e,P,a)}),Oe=function(e){return!e.$},D=jv,X=Fv,M=Rv,se=Vv,ua=Nv,as=Wv,De=Av,ao=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Er("div"),ts=function(e){return{$:2,a:e}},Vc=$(function(e,r){return e}),Uc=$(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Tr=function(e){return e},os=Tr,ui=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,zr=hv,Or=xv,kn=$(function(e,r){return e<1?r:p(Or,e,zr(r),r)}),za=zv,Ta=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Ec=Tv,vi=he(function(e,r,n,a,t){if(Ta(t)||o(is,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Ec(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(ui,e,o(ka,c,t),u,r,n,a))}else return re(_e(ui,e,t,q,r,n,a))}),$i=U(function(e,r,n,a){if(Ta(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return S(vi,e,o(kn,i,a),r,n,o(ka,i,a))}else return S(vi,e,"/",r,n,a)}),fi=y(function(e,r,n){if(Ta(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return L($i,e,re(o(kn,t+1,n)),r,o(ka,t,n))}else return L($i,e,q,r,n)});$(function(e,r){if(Ta(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(fi,e,re(o(kn,a+1,r)),o(ka,a,r))}else return p(fi,e,q,r)});var cs=Pv,to=function(e){},Mn=Ur,ls=Mn(0),Rc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Pa,e,r,Ve(d)):L(Rc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=y(function(e,r,n){return L(Rc,e,r,0,n)}),ee=$(function(e,r){return p(dr,$(function(n,a){return o(B,e(n),a)}),P,r)}),va=$t,oo=$(function(e,r){return o(va,function(n){return Mn(e(n))},r)}),us=y(function(e,r,n){return o(va,function(a){return o(va,function(t){return Mn(o(e,a,t))},n)},r)}),vs=function(e){return p(dr,us(B),Mn(P),e)},$s=Qv,fs=$(function(e,r){var n=r;return rc(o(va,$s(e),n))}),ss=y(function(e,r,n){return o(oo,function(a){return 0},vs(o(ee,fs(e),r)))}),ds=y(function(e,r,n){return Mn(0)}),ms=$(function(e,r){var n=r;return o(oo,e,n)});rr.Task=Xv(ls,ss,ds,ms);var ps=ac("Task"),io=$(function(e,r){return ps(o(oo,e,r))}),bs=B$,hs=mv,$a={$:1},jc=function(e){return{$:2,a:e}},Ma={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},gs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Nc=function(e){var r=e.b;return o(We,Ma,r)},_r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Nc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,tn(n).b7)>0?o(te,gs,_r(o(We,$a,t))):Tr)(o(We,jc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Uc,l.eA,Qe(r,{b7:l.b7+r.eJ})),s=o(e,v,u);return o(We,Ma,{B:T(v,s),ab:P,T:o(B,t.B,t.T)})}}),Wc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=$(function(e,r){return Ve(p(ws,e,r,P))}),Yc=y(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,w=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(ys,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,b,p(Yc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return g([_])}}),xs=$(function(e,r){return p(Yc,0,e,r)}),Ss=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ve(n),ve(g([a]),t)),c=o(xs,e,i),l=o(Wc,e,i);if(l.b){var u=l.a,v=l.b;return o(We,$a,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var d=s.a,m=s.b;return o(We,$a,{B:d,ab:P,T:m})}else return r}}),Cs=function(e){var r=e.b;return o(We,$a,r)},Ls=function(e){var r=e.b;return o(We,jc({cY:tn(e).b7}),r)},Ps=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return Nc(r);case 3:return Ls(r);default:var n=e.a;return o(Ss,n,r)}}),Gc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),zs=$(function(e,r){return Qe(r,{av:e(r.av)})}),Ts=function(e){return{$:3,a:e}},ks=function(e){return{$:2,a:e}},Ms=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},co=kv,Bs=y(function(e,r,n){return o(_r,0/0,co(o(e,r,n)))}),Hc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=_v,Ic=function(e){return p(As,B,P,e)},Fs=$(function(e,r){var n=o(Hc,function(a){return a!=="0"&&a!=="."},Ic(r));return ve(e&&n?"-":"",r)}),oe=Ki,ht=pv,Oc=Bv,Jc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",Jc(t))}else{var i=nr(r);return i>=48&&i<57?o(ht,Oc(i+1),n):"0"}},gt=uv,Vs=dv,Da=function(e){return o(ht,e,"")},qc=y(function(e,r,n){return e<=0?n:p(qc,e>>1,ve(r,r),e&1?ve(n,r):n)}),Sn=$(function(e,r){return p(qc,e,r,"")}),_t=y(function(e,r,n){return ve(n,o(Sn,e-zr(n),Da(r)))}),wt=gv,Zc=function(e){var r=o(Qt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Us=function(e){var r=o(Qt,"e",oe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Ec(o(cs,"+",t)?o(kn,1,t):t)),c=Zc(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(_r,"0",o(Fe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Fe,Gc(Da),an(ve(o(Sn,O(i),"0"),v))))):p(_t,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Es=y(function(e,r,n){if(gt(n)||Vs(n))return oe(n);var a=n<0,t=Zc(Us(O(n))),i=t.a,c=t.b,l=zr(i)+r,u=ve(o(Sn,-l+1,"0"),p(_t,l,"0",ve(i,c))),v=zr(u),s=o(ke,1,l),d=o(e,a,p(Or,s,v,u)),m=p(Or,0,s,u),f=d?wt(o(_r,"1",o(Fe,Jc,an(wt(m))))):m,h=zr(f),b=f==="0"?f:r<=0?ve(f,o(Sn,O(r),"0")):I(r,zr(c))<0?p(Or,0,h-r,f)+("."+p(Or,h-r,h,f)):ve(i+".",p(_t,r,"0",c));return o(Fs,a,b)}),Xc=Es($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Rs=Bs(Xc),js=y(function(e,r,n){var a=o(ro,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Rs,t,n)}),Kc=Ku,Qc=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Kc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Xr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,v,s,S(G,1,h,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),yt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Kc,e,t);switch(u){case 0:return S(Xr,a,t,i,p(yt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(Xr,a,t,i,c,p(yt,e,r,l))}}),Zn=y(function(e,r,n){var a=p(yt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),Ns=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},el=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,w=m.e,x=v.e;return S(G,0,f,h,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,h,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,k=e.e;k.a;var h=k.b,b=k.c,w=k.d,x=k.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,h,b,w,x))}else return e},Ws=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),Xn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,Xn(t),l);var u=el(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,Xn(m),f)}else return or}else return S(G,r,n,a,Xn(t),l)}else return or},hn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(hn,e,i),c);var u=el(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,o(hn,e,m),f)}else return or}else return S(G,n,a,t,o(hn,e,i),c);else return o(Ys,e,Rt(Ws,e,r,n,a,t,i,c))}),Ys=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=Ns(c);if(l.$===-1){var u=l.b,v=l.c;return S(Xr,n,u,v,i,Xn(c))}else return or}else return S(Xr,n,a,t,i,o(hn,e,c))}else return or}),Gs=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),jn=y(function(e,r,n){var a=r(o(Qc,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(Zn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ds,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ms,T(i,c),p(js,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===3?Ts(n):a}));default:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===2?ks(n):a}))}},Is=function(e){return zs(Hs(e))},Os=$(function(e,r){return o(ee,Is(e),r)}),Js=$(function(e,r){return Qe(r,{eA:o(Os,e,r.eA)})}),qs=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Qe(a,{B:o(Gc,Js(e),a.B)}))}),Zs=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),Xs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Qe(t,{B:o(Zs,o(e,i.a,r),i)}))}),Ks=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(qs,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(Xs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Ps,l,a.G)})}}),Qs=$(function(e,r){return o(We,Ma,{B:T(e,r(e)),ab:P,T:P})}),ed=e$,di=ed(P),fa=Ev,Cn=Uv,rd=o$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",fa(Cn)))},o(M,"left",X))},o(M,"pressedKeys",fa(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se))))),nd=function(e){return{$:4,a:e}},ad={$:0},td=ec,Ie=$(function(e,r){return o(ic,e,td(r))}),H=Ie("className"),od=function(e){var r=e.b.B;return r.b},sa=Ie("id"),id=$$,da=id,cd=f$,ne=cd,ld={$:1},ud=function(e){return{$:3,a:e}},vd=function(e){return{$:5,a:e}},mi=Er("a"),lo=Er("button"),pi=function(e){return o(Ie,"href",m$(e))},$d=Sr("clip-rule"),Ce=Sr("d"),fd=Sr("fill"),rl=tc("http://www.w3.org/2000/svg"),sd=rl("svg"),dd=Sr("viewBox"),md=o(s$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=sd(g([dd("0 0 24 24"),fd("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),md("http://www.w3.org/2000/svg")])),pd=Sr("fill-rule"),Le=rl("path"),kr={eD:Ee(g([o(Le,g([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(g([o(Le,g([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(g([o(Le,g([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(g([o(Le,g([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,g([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(g([o(Le,g([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,g([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(g([o(Le,g([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(g([o(Le,g([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(g([o(Le,g([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(g([o(Le,g([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(g([o(Le,g([pd("evenodd"),$d("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(g([o(Le,g([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(g([o(Le,g([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},bd=function(e){return{$:0,a:e}},nl=oc,al=$(function(e,r){return o(nl,e,bd(r))}),uo=function(e){return o(al,"click",De(e))},bi=Ie("target"),hd=Ie("title"),xt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(xt,e,i),o(xt,e,c))}),gd=ft,$r=gd,_d=function(e){return p(Xt,y(function(r,n,a){return o(B,n,a)}),P,e)},wd=$(function(e,r){return{$:3,a:e,b:r}}),yd=$(function(e,r){return{$:2,a:e,b:r}}),xd=$(function(e,r){return{$:0,a:e,b:r}}),Sd=$(function(e,r){return{$:1,a:e,b:r}}),Cr=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Cd=L(Cr,0/255,0/255,0/255,1),Ld=ec,tl=$(function(e,r){return o(ic,e,Ld(r))}),Pd=tl("checked"),Ze=fv,zd=y(function(e,r,n){return ve(o(Sn,e-zr(n),Da(r)),n)}),ma=nv,ol=function(e){var r=function(n){return n<10?Ae(n):Da(Oc(87+n))};return e<16?r(e):ve(ol(e/16|0),r(o(ma,16,e)))},Td=o(te,ol,o(zd,2,"0")),vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},kd=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return o(Pr,"",o(B,"#",o(ee,o(te,Ze,Td),g([n*255,a*255,t*255]))))},St=Ie("htmlFor"),Ct=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Md=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),il=$(function(e,r){return p(dr,Md(e),P,r)}),cl=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Dd=E$,Bd=Mv,Ad=$(function(e,r){if(r.$)return we(e);var n=r.a;return $e(n)}),Fd=U$,Vd=function(e){return o(Fd,{ew:!1,fg:!1},e)},ll=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Ud=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return $e(e(n))}}),Ed=function(e){return{$:2,a:e}},Rd=function(e){return{$:0,a:e}},jd=function(e){return{$:1,a:e}},Wa=$(function(e,r){return nr(r)-nr(e)}),Ya=y(function(e,r,n){var a=nr(n);return I(nr(e),a)<1&&I(a,nr(r))<1}),Nd=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):we(jd(r))},a=p(Ya,"0","9",r)?$e(o(Wa,"0",r)):p(Ya,"a","z",r)?$e(10+o(Wa,"a",r)):p(Ya,"A","Z",r)?$e(10+o(Wa,"A",r)):we(Rd(r));return o(pa,n,a)}),ul=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return $e(c+l*e)},o(ul,e,i))},o(Nd,e,t))}),Wd=$(function(e,r){return 2<=e&&e<=36?o(ul,e,wt(r)):we(Ed(e))}),Yd=Wd(16),vl=y(function(e,r,n){return L(Cr,e,r,n,1)}),Gd=U(function(e,r,n,a){return L(Cr,e,r,n,a)}),Dn=rv,Hd=$(function(e,r){var n=o(Dn,10,e);return Ze(r*n)/n}),Id=Sv,Od=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ic(n);if(a.b&&!a.b.b){var t=a.a;return Bd(g([t,t]))}else return n};return o(te,Id,o(te,function(n){return o(Fe,function(a){return p(Dd,1,a,n)},Vd(e))},o(te,Ct(ll),o(te,Fe(function(n){return n.fG}),o(te,Fe(il(Tr)),o(te,Ad("Parsing hex regex failed"),pa(function(n){var a=o(ee,o(te,r,o(te,Yd,Ud(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(Gd,t/255,c/255,u/255,o(Hd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(vl,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ba=Er("input"),Lt=Er("label"),Pt=Ie("name"),$l=$(function(e,r){return p(dr,M,r,e)}),Jd=o($l,g(["target","checked"]),X),qd=function(e){return o(al,"change",o(ua,e,Jd))},Zd=function(e){return T(e,!0)},Xd=function(e){return{$:1,a:e}},Kd=$(function(e,r){return o(nl,e,Xd(r))}),Qd=o($l,g(["target","value"]),Cn),$o=function(e){return o(Kd,"input",o(ua,Zd,o(ua,e,Qd)))},fl=Ie("max"),sl=Ie("min"),dl=function(e){return o(Ie,"step",e)},ha=Ie("type"),fo=Ie("value"),hi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,P,g([o(Lt,g([St(r)]),g([o(J,g([H("relative w-full")]),g([o(J,g([H("inline-block")]),g([$r(r)])),o(J,g([H("inline-block float-right")]),g([$r(oe(n))]))]))])),o(ba,g([ha("range"),o(ne,"width","100%"),sa(r),Pt(r),sl(oe(a)),fl(oe(t)),fo(oe(n)),dl(oe(i)),$o(o(te,co,o(te,_r(42),c)))]),P)]))},em=$(function(e,r){if(r.$)return e;var n=r.a;return n}),rm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,g([H("h-12 py-4")]),g([o(Lt,g([H("block"),St(e)]),g([o(ba,g([H("relative bottom-[1px] align-middle mr-2"),ha("checkbox"),sa(e),Pt(e),qd(wd(e)),Pd(c)]),P),$r(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return hi({cg:e,cs:i,cw:t,cA:xd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return hi({cg:e,cs:i,cw:t,cA:o(te,Ze,Sd(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,g([o(J,g([o(ne,"margin-bottom","6px")]),g([o(Lt,g([St(e)]),g([$r(e)]))])),o(ba,g([ha("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),sa(e),Pt(e),$o(function(l){return o(yd,e,o(em,Cd,Od(l)))}),fo(kd(c))]),P)]))}}),nm=function(e){return o(J,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(J,g([H("text-lg pb-2")]),g([$r(e.fh)])),o(J,g([H("pl-2 pr-2")]),_d(o(xt,rm,e.av)))]))},am=function(e){return o(J,g([H("text-xs text-white60")]),o(ee,nm,e))},tm=function(e){return o(J,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([$r("clock: "+o(Xc,3,tn(e).b7))]))},om=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return Ze(60/(tn(e).b7-n))},o(Fe,o(te,Qf,function(n){return n.b7}),ll(o(Wc,59,r))))},im=function(e){return o(J,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=om(e);if(r.$===1)return g([$r("... Fps")]);var n=r.a;return g([$r(Ae(n)+" Fps")])}())},cm=function(e){return{$:0,a:e}},lm=function(e){var r=e.b.T;return Ar(r)},um=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},vm=function(e){return o(ba,g([H("absolute w-full"),ha("range"),sl(Ae(0)),fl(Ae(um(e)-1)),fo(Ae(lm(e))),dl(Ae(1)),$o(o(te,co,o(te,_r(42),o(te,Ze,cm))))]),P)},gi={$:1},_i={$:3},wi={$:2},zt=function(e){return!e.b},ml=tl("disabled"),Ga=y(function(e,r,n){return o(lo,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),ml(e),uo(r)]),g([$r("REC")]))}),Ha=y(function(e,r,n){return o(lo,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),ml(e),uo(n)]),g([o(J,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),$m=function(e){var r=e.a,n=e.b.ab;return o(J,g([H("py-1")]),g([function(){switch(r.$){case 0:return p(Ga,!1,gi,"text-red-500 font-bold");case 1:return p(Ga,!1,wi,"text-white60 hover:text-white80 font-bold");default:return p(Ga,!0,wi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ha,zt(n),kr.fq,_i);case 1:return p(Ha,zt(n),kr.fq,_i);default:return p(Ha,!1,kr.fp,gi)}}()]))},fm=function(e){return o(J,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([vm(e),$m(e),im(e),tm(e)]))},sm=function(e){var r=e.a;return gr(r,Ma)},dm=$(function(e,r){var n=sm(r.G)?o(J,P,P):o(J,g([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fs.fU+.5*e.cT.fS)+"px"),o(ne,"top",oe(-e.fs.fY+.5*e.cT.eW)+"px")]),g([o(J,g([H(e.fs.e4?"text-black80":"text-black40")]),g([kr.fs]))]));return o(J,P,g([n]))}),mm=$(function(e,r){var n=o(lo,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),uo(ld),hd("Distraction Free Mode")]),g([kr.f0])),a=40,t=260,i=o(J,g([H("absolute w-8 bottom-12")]),g([o(mi,g([H("text-twitterBlue40 hover:text-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),g([kr.fN]))])),c=80,l=o(J,g([H("absolute w-8 bottom-2")]),g([o(mi,g([H("text-githubCat40 hover:text-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),g([kr.eQ]))])),u=e.cT.fS>640?A(e.cT.eW,a+t,e.cT.fS-(a+t)):A(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,d=u.c;return r.aL?o(J,g([H("fixed w-10 h-10 p-1")]),g([n])):o(J,P,g([o(J,g([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),g([n,i,l])),o(J,g([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),g([o(da,ud,am(tn(r.G).eA))])),o(J,g([H("absolute bottom-0"),o(ne,"left",oe(s)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(d)+"px")]),g([o(da,vd,fm(r.G))])),o(dm,e,r)]))}),pm=y(function(e,r,n){var a=od(n.G),t=tn(n.G);return o(J,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",oe(t.cT.fS)+"px"),o(ne,"height",oe(t.cT.eW)+"px")]),g([o(J,g([H("fixed")]),g([o(da,Vc(ad),o(e,t,a))])),o(J,g([sa("gui")]),g([o(mm,t,n),o(da,nd,o(r,t,a))]))]))}),bm=He(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(Ks,r,i,u,v),di)}),l=function(u){var v=o(Uc,n,u.e1);return T({aL:u.e1.cT.fS<500,G:o(Qs,v,a)},di)};return bs({e0:l,fH:Vc(rd(ts)),fO:c,fQ:o(pm,e,t)})}),hm=U(function(e,r,n,a){return _e(bm,e,r,n,a,$(function(t,i){return o(J,P,P)}),y(function(t,i,c){return c}))}),gm=y(function(e,r,n){return L(hm,e,r,P,n)}),_m=function(e){return{}},wm=$(function(e,r){return r}),ym=cv,br=sv,xm=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(ke,O(c),o(ke,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=br(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c6:u/d})}else return q}),Ia=function(e){return e},so=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Kn=function(e){var r=e,n=o(ke,O(r.fU),o(ke,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},ga=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Sm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),pl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Cm=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Lm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Pm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),zm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},qe=0,bl={fU:0,fY:0,c6:0},Tm=y(function(e,r,n){return o(Ct,function(a){var t=o(Lm,o(Pm,a,r),r);return o(Ct,function(i){var c=o(so,r,e),l=o(Sm,n,c),u=o(pl,qe,l)?c:o(Cm,qe,l)?zm(c):bl;return o(Fe,function(v){return A(a,i,v)},Kn(u))},Kn(t))},Kn(e))}),km=function(e){var r=e,n=O(r.c6),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=br(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=br(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=br(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=br(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},mo=function(e){var r=km(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return T(r,c)},Jr=function(e){var r=e;return r},fr=function(e){return e},Mm=$(function(e,r){var n=mo(e),a=n.a,t=n.b;return fr({cB:r,c4:a,c5:t,c7:e})}),Dm=function(e){var r=o(ga,e.aR,e.dj),n=Jr(e.ei),a=o(so,r,n),t=p(Tm,r,n,a);if(t.$){var v=Kn(r);if(v.$){var d=mo(e.ei),m=d.a,f=d.b;return fr({cB:e.dj,c4:f,c5:e.ei,c7:m})}else{var s=v.a;return o(Mm,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return fr({cB:e.dj,c4:u,c5:l,c7:c})}},Rr={fU:0,fY:0,c6:0},Bm=function(e){return{$:0,a:e}},xe=function(e){var r=e;return O(r)},Qn=function(e){var r=e;return .5*r},Am=iv,Fm=function(e){var r=e;return Am(r)},Vm=function(e){var r=Qn(xe(e.ej)),n=Fm(r);return{cM:Bm(n),c2:e.c2}},ur=function(e){return e},Ba=ur({fU:0,fY:1,c6:0}),Kr=function(e){return e},Um=function(e){var r=e.aR,n=e.dj,a=e.ei;return Vm({ej:Kr(2*ym(.5)),c2:Dm({dj:Ia(n),aR:Ia(r),ei:o(_r,Ba,o(xm,Rr,Ia(a)))})})},Em=Um({dj:{fU:0,fY:10,c6:30},aR:{fU:0,fY:10,c6:0},ei:{fU:0,fY:1,c6:0}}),Rm=L(Cr,114/255,159/255,207/255,1),jm=L(Cr,52/255,101/255,164/255,1),Nm=L(Cr,115/255,210/255,22/255,1),po=function(e){return{$:5,a:e}},hl=function(e){return po(e)},bo=$(function(e,r){return{$:4,a:e,b:r}}),gl=function(e){return e},on=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Wm=$(function(e,r){return gl(T(e,o(on,r,e)))}),_l=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Ym=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(_l,e(n),e(a),e(t))}),ar=function(e){return e},Oa=$(function(e,r){return o(bo,e,o(Wm,Rr,o(Ym,ar,r)))}),Gm=L(Cr,204/255,0/255,0/255,1),Hm=hl(g([o(Oa,Gm,A(100,0,0)),o(Oa,Nm,A(0,100,0)),o(Oa,jm,A(0,0,100))])),ho=$(function(e,r){return{$:0,a:e,b:r}}),Ja=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vr=$(function(e,r){var n=e,a=r;return a-n}),Im=ur({fU:-1,fY:0,c6:0}),Om=ur({fU:0,fY:-1,c6:0}),wl=ur({fU:0,fY:0,c6:-1}),yl=ur({fU:1,fY:0,c6:0}),go=ur({fU:0,fY:0,c6:1}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Jm=He(function(e,r,n,a,t,i){var c=o(Ja,n,i)?go:wl,l=o(Ja,r,t)?Ba:Om,u=o(Ja,e,a)?yl:Im,v=A(xe(o(vr,e,a)),xe(o(vr,r,t)),xe(o(vr,n,i))),s=p(pe,o(qa,e,a),o(qa,r,t),o(qa,n,i)),d=fr({cB:s,c4:u,c5:l,c7:c});return{er:d,aK:v}}),Mr=function(e){var r=e;return r.fU},Dr=function(e){var r=e;return r.fY},Br=function(e){var r=e;return r.c6},qm=$(function(e,r){return _e(Jm,Mr(e),Dr(e),Br(e),Mr(r),Dr(r),Br(r))}),Tt=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),Zm=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ho,e,o(qm,p(Tt,-c,-l,-u),p(Tt,c,l,u)))}),Xm=U(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Cr,f,m,d,a)}),Km=y(function(e,r,n){return L(Xm,e,r,n,1)}),kt=function(e){return{$:0,a:e}},xl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Sl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Za=function(e){return p(Sl,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},Bn=N$,Qm=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(Bn,Za(n),Za(a),Za(t))},Cl=function(e){return p(xl,0,kt(Qm(e)),kt(0))},_o=$(function(e,r){return{$:2,a:e,b:r}}),Ll=$(function(e,r){return{$:3,a:e,b:r}}),Pl=$(function(e,r){return{$:1,a:e,b:r}}),e0=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),r0=function(e){var r=e;return r},wo=function(e){var r=e;return r0(r.er)},yo=function(e){var r=e;return r.aK},cn=function(e){var r=e;return r.cB},jr=function(e){var r=e;return r.c4},Nr=function(e){var r=e;return r.c5},Wr=function(e){var r=e;return r.c7},n0=$(function(e,r){return fr({cB:o(on,e,cn(r)),c4:jr(r),c5:Nr(r),c7:Wr(r)})}),a0=$(function(e,r){return{er:o(n0,e,wo(r)),aK:yo(r)}}),Aa=$(function(e,r){return{eH:r,cB:e}}),t0=$(function(e,r){var n=r;return o(Aa,o(on,e,n.cB),n.eH)}),o0=$(function(e,r){var n=r;return{k:o(t0,e,n.k),e9:n.e9,fu:n.fu}}),xo=function(e){var r=e;return r},zl=$(function(e,r){var n=xo(r),a=n.a,t=n.b;return gl(T(e(a),e(t)))}),i0=$(function(e,r){return o(zl,on(e),r)}),So=function(e){var r=e;return r.ey},Co=function(e){var r=e;return r.fu},Tl=$(function(e,r){return{ey:r,fu:xe(e)}}),c0=$(function(e,r){return o(Tl,Co(r),o(on,e,So(r)))}),kl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),l0=$(function(e,r){return o(kl,on(e),r)}),Ml=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(e0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ho,s,o(a0,i,c));case 1:var s=r.a,l=r.b;return o(Pl,s,o(l0,i,l));case 3:var s=r.a,u=r.b;return o(Ll,s,o(c0,i,u));case 2:var s=r.a,v=r.b;return o(_o,s,o(o0,i,v));case 4:var s=r.a,d=r.b;return o(bo,s,o(i0,i,d));default:var m=r.a;return po(o(ee,Ml(A(n,a,t)),m))}}),Dl=function(e){return Ml(A(0,e,0))},Vr=tv,Qr=ov,ea=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=Qr(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,w=d*h,x=h*h,_=1-2*(f+x),C=s.c6*u,k=l*C,N=2*(w-k),R=2*(w+k),E=d*C,j=2*(E+b),W=2*(E-b),F=h*C,Z=2*(F-m),K=2*(F+m),ce=C*C,fe=1-2*(x+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+N*i.fY+j*i.c6,fY:R*i.fU+ie*i.fY+Z*i.c6,c6:W*i.fU+K*i.fY+_*i.c6}}),An=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=Qr(c),v=a.cB,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,h=a.eH,b=h,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,k=l*C,N=w*C,R=C*C,E=1-2*(_+R),j=b.c6*u,W=l*j,F=2*(N-W),Z=2*(N+W),K=w*j,ce=2*(K+k),fe=2*(K-k),ie=C*j,me=2*(ie-x),Me=2*(ie+x),Se=j*j,mr=1-2*(R+Se),pr=1-2*(_+Se);return{fU:s.fU+mr*d+F*m+ce*f,fY:s.fY+Z*d+pr*m+me*f,c6:s.c6+fe*d+Me*m+E*f}}),u0=y(function(e,r,n){return fr({cB:p(An,e,r,cn(n)),c4:p(ea,e,r,jr(n)),c5:p(ea,e,r,Nr(n)),c7:p(ea,e,r,Wr(n))})}),v0=y(function(e,r,n){return{er:p(u0,e,r,wo(n)),aK:yo(n)}}),$0=$(function(e,r){var n=o(An,e,r),a=o(ea,e,r);return function(t){var i=t;return o(Aa,n(i.cB),a(i.eH))}}),f0=y(function(e,r,n){var a=n;return{k:p($0,e,r,a.k),e9:a.e9,fu:a.fu}}),s0=y(function(e,r,n){return o(zl,o(An,e,r),n)}),d0=y(function(e,r,n){return o(Tl,Co(n),p(An,e,r,So(n)))}),m0=y(function(e,r,n){return o(kl,o(An,e,r),n)}),Bl=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ho,l,p(v0,e,r,a));case 1:var l=n.a,t=n.b;return o(Pl,l,p(m0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ll,l,p(d0,e,r,i));case 2:var l=n.a,c=n.b;return o(_o,l,p(f0,e,r,c));case 4:var l=n.a,u=n.b;return o(bo,l,p(s0,e,r,u));default:var v=n.a;return po(o(ee,o(Bl,e,r),v))}}),Lo=Ba,p0=o(Aa,Rr,Lo),yi=$(function(e,r){return p(Bl,p0,Kr(e),r)}),Al=$(function(e,r){return(r-Ac(r/e)*e)/e}),b0=$(function(e,r){return 360*o(Al,e,r)}),en=av,h0=function(e){return 2*en*e},g0=U(function(e,r,n,a){return e+(r-e)*(1+Vr(h0(o(Al,n,a))))/2}),_0=$(function(e,r){var n=L(g0,.2,.8,10,e.b7);return o(yi,o(b0,1e3,e.b7),o(yi,.1*r,o(Dl,r*1.1,o(Zm,Cl(p(Km,n,.5,.5)),A(r,1,r)))))}),w0=function(e){return hl(o(ee,_0(e),o(Fr,1,18)))},y0=y(function(e,r,n){return{k:o(Aa,e,r),e9:xe(n.e9),fu:xe(n.fu)}}),x0=y(function(e,r,n){return o(_o,e,p(y0,Rr,Ba,{e9:ar(n),fu:ar(r)}))}),S0=o(Dl,-1.001,p(x0,Cl(p(vl,.294,.588,.478)),30,1)),C0=$(function(e,r){return g([Hm,S0,w0(e)])}),L0=function(e){return e},P0=function(e){return ar(.01*e)},xi=function(e){return e},z0=function(e){return e},T0=function(e){return{$:0,a:e}},k0=T0,M0={$:3},D0=M0,B0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),A0=B0,F0=$(function(e,r){return r.b?p(dr,B,r,e):e}),Ye=function(e){return p(dr,F0,P,e)},Po=$(function(e,r){return Ye(o(ee,e,r))}),V0=function(e){return{$:1,a:e}},U0=V0,E0=function(e){return o(Sr,"height",Ae(e))},R0=function(e){return u$(d$(e))},j0=R0,N0=function(e){return{$:2,a:e}},W0=N0,Y0=function(e){return o(Pr,"",e)},G0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return Y0(g(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},H0=$(function(e,r){switch(r.$){case 0:return o(kf,e,r);case 1:return o(Mf,e,r);case 2:return o(Df,e,r);case 3:return o(Bf,e,r);case 4:return o(Af,e,r);default:return o(Ff,e,r)}}),I0=$(function(e,r){switch(r.$){case 0:return o(of,e,r);case 1:return o(cf,e,r);case 2:return o(lf,e,r);case 3:return o(uf,e,r);case 4:return o(vf,e,r);case 5:return o($f,e,r);case 6:return o(ff,e,r);case 7:return o(sf,e,r);default:return df(e)}}),O0=y(function(e,r,n){return p(Tf,e,r,n)}),Si=function(e){var r=e;return r},ln=O$,Xa=L(ln,1,1,1,1),Xe=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),J0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),q0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(J0,n*a/t,n,n*(1-a-t)/t)}),Z0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},zo=$(function(e,r){return Z0(o(q0,e,r))}),Fl=$(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=Q$,X0=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ka=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(ln,a.bX,a.bX,a.bX,i);return _e(t,e,c,X0(a),a.dp,r,n)}),Vl=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Fl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(B,S(Ka,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(B,S(Ka,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(B,S(Ka,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var k=t.a;return p(Pa,L(Vl,e,r,n,a),i,k)}}),K0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ul=K0,To=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Q0=function(e){var r=e.Z,n=e.W,a=e.V;return L(To,518,r,n,a)},ep=$(function(e,r){return{$:6,a:e,b:r}}),rp=ep,El=g([Q0({V:1,W:0,Z:!1}),L(Ul,!1,!1,!1,!1),o(rp,0,1)]),rn=519,ko=8,Rl=15,qr=7681,np={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=tf,ap=$(function(e,r){return{$:0,a:e,b:r}}),tp=ap({df:1,$7:0,dV:5}),Be=R$,op=tp(g([{bT:o(Be,-1,-1)},{bT:o(Be,1,-1)},{bT:o(Be,-1,1)},{bT:o(Be,1,1)}])),ip={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},cp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Mo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(cp,a,t,i)))}),Do=function(e){return p(Mo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Bo=function(e){return S(ae,g([Do(e),L(Ul,!1,!1,!1,!1)]),ip,np,op,{})},lp=Bo({a8:qr,cp:0,cO:ko,bl:rn,c3:Rl,bt:qr,bu:qr}),up=516,Ci=5386,ye=7680,vp=function(e){return o(Dn,2,e+4)},jl=function(e){return Bo({a8:ye,cp:Rl,cO:ko,bl:up,c3:vp(e),bt:Ci,bu:Ci})},$p=y(function(e,r,n){return Ye(g([p(Xe,e,n,El),g([jl(r),lp])]))}),fp=$(function(e,r){return Ye(o(zc,$p(e),r))}),sp=function(e){var r=e.Z,n=e.W,a=e.V;return L(To,513,r,n,a)},dp=sp({V:1,W:0,Z:!0}),mp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},pp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return mp(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},bp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Li=$(function(e,r){var n=e,a=r;return p(bp,32774,n,a)}),hp=1,Pi=771,gp=770,Ao=pp({bv:0,aH:o(Li,hp,Pi),by:0,bA:o(Li,gp,Pi),bF:0,bV:0}),Yr=g([dp,Ao]),_p=function(e){var r=e;return r.dO},wp=function(e){var r=e;return r.dP},Nl=function(e){var r=e;return r.dQ},yp=function(e){var r=e;return r.dR},xp=function(e){var r=e;return r.dS},Wl=function(e){var r=e;return r.dT},Yl=function(e){return A(o(vr,yp(e),_p(e)),o(vr,xp(e),wp(e)),o(vr,Wl(e),Nl(e)))},zi=function(e){var r=e;return cn(r)},Sp=function(e){return e},Cp=function(e){return fr({cB:Sp({fU:e.H,fY:e.I,c6:e.J}),c4:ur({fU:e.q,fY:e.r,c6:e.s}),c5:ur({fU:e.t,fY:e.u,c6:e.v}),c7:ur({fU:e.w,fY:e.x,c6:e.y})})},Qa=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Gl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,d=n.c5,m=d,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Hl=$(function(e,r){return{cB:o(Gl,e,cn(r)),c4:o(Qa,e,jr(r)),c5:o(Qa,e,Nr(r)),c7:o(Qa,e,Wr(r))}}),_a=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),ra=$(function(e,r){return I(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),Lp=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},Pp=function(e){var r=e;return A(r.fU,r.fY,r.c6)},gn=$(function(e,r){var n=e,a=r;return a+n}),zp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qn(xe(a)),c=Qn(xe(n)),l=Qn(xe(t)),u=Pp(r),v=u.a,s=u.b,d=u.c;return{dO:o(gn,c,v),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o(vr,c,v),dS:o(vr,i,s),dT:o(vr,l,d)}}),Ti=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,d=Ge(Wr(e)),m=O(l*d.fU)+O(c*d.fY)+O(i*d.c6),f=Ge(Nr(e)),h=O(l*f.fU)+O(c*f.fY)+O(i*f.c6),b=Ge(jr(e)),w=O(l*b.fU)+O(c*b.fY)+O(i*b.c6),x=o(zp,A(w,h,m),o(Gl,e,p(Tt,s,v,u)));if(a.$)return re(x);var _=a.a;return re(o(Lp,_,x))}),Mt=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 1:var c=t.a,l=L(Ti,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 2:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 3:var c=t.a,l=L(Ti,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 4:var u=t.a,f=e,h=r,b=L(Mt,e,r,n,u),w=i;e=f,r=h,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Hl,Cp(v),e),m=r*v.bX,f=e,h=r,b=L(Mt,d,m,n,g([s])),w=i;e=f,r=h,n=b,a=w;continue e}}else return n}),un=W$,vn=Y$,$n=G$,Il=function(e){return{$:4,a:e}},Tp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Il(o(Tp,e,P))},kp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Mp=function(e){var r=e;return r},ki=Bo({a8:qr,cp:0,cO:ko,bl:rn,c3:255,bt:qr,bu:qr}),Dp=function(e){var r=e,n=o(ke,O(r.fU),o(ke,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return c*n}else return qe},Pe={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=T({bd:o(je,Pe,Pe),bK:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe)},L(ln,0,0,0,0)),le=$(function(e,r){var n=r;return e*n}),Mi=function(e){var r=e;return-r},Ol=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return L(To,515,r,n,a)},ql=240,Bp=g([Jl({V:1,W:0,Z:!0}),Do({a8:ye,cp:ql,cO:0,bl:Ol,c3:0,bt:ye,bu:ye}),Ao]),Ap=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=xe(a),l=c,u=xe(t),v=u,s=n.cM;if(s.$){var m=s.a;return gt(v)?er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return gt(v)?er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Nn=$(function(e,r){return(1&e>>r)===1?0:1}),Fp=function(e){return g([Jl({V:1,W:0,Z:!0}),Do({a8:ye,cp:ql,cO:e,bl:Ol,c3:0,bt:ye,bu:ye}),Ao])},Vp=y(function(e,r,n){return Ye(o(ee,function(a){var t=a<<4,i=L(ln,o(Nn,a,0),o(Nn,a,1),o(Nn,a,2),o(Nn,a,3));return p(Xe,e,T(r,i),Fp(t))},o(Fr,1,o(Dn,2,n)-1)))}),Ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Zr=function(e){var r=e;return r},Up=ef,Di=function(e){var r=e;return Ln(Wr(r))},Zl=yl,Xl=go,Ep={cB:Rr,c4:Zl,c5:Lo,c7:Xl},Fa=function(e){var r=e;return r},Rp=function(e){var r=Fa(cn(e)),n=Ge(Wr(e)),a=Ge(Nr(e)),t=Ge(jr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},jp=$(function(e,r){var n=r;return Rp(o(Hl,n,e))}),Np=function(e){return o(jp,Ep,e)},Wp=function(e){var r=e;return r.c2},Yp=function(e){var r=e;return jr(r)},Gp=function(e){var r=e;return Nr(r)},Hp=function(e){var r=Wp(e.ev),n=fr({cB:zi(r),c4:Yp(r),c5:Gp(r),c7:Ln(Di(r))}),a=Fn(e.aP),t=a,i=L(Mt,n,1,q,g([t]));if(i.$===1)return P;var c=i.a,l=Np(r),u=o(le,.99,o(ue,xe(e.aJ),Mi(Nl(c)))),v=Yl(c),s=v.a,d=v.b,m=v.c,f=Dp(p(_l,s,d,m)),h=o(le,1.01,o(gn,f,Mi(Wl(c)))),b=o(Ap,e.ev,{eq:e.eq,eP:h,fi:u}),w=Up(b).dM,x=w?Ge(Ln(Di(r))):Zr(zi(r)),_=function(){var ie=e.bZ;switch(ie.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var me=ie.a;return T(3,me);case 4:var me=ie.a;return T(4,me);default:return T(5,0)}}(),C=_.a,k=_.b,N=e.bD,R=N,E=o(zo,R,e.b$),j=E,W=er({dx:0,dy:x.fU,dz:un(j),dA:e.ec,dB:0,dC:x.fY,dD:vn(j),dE:Mp(f),dF:0,dG:x.c6,dH:$n(j),dI:C,dJ:0,dK:w,dL:0,dM:k}),F=_e(Vl,W,l,b,kp,t,{M:P,U:P,fB:P}),Z=e.bJ;switch(Z.$){case 0:var K=Z.a;return Ye(g([p(Xe,F.M,T(K,Xa),Yr),p(Xe,F.U,pn,Yr)]));case 1:var K=Z.a;return Ye(g([p(Xe,F.M,pn,Yr),g([ki]),p(Xe,F.fB,K.bd,El),g([jl(0)]),p(Xe,F.M,T(K,Xa),Bp),p(Xe,F.U,pn,Yr)]));default:var ce=Z.a,fe=Z.b;return Ye(g([p(Xe,F.M,T(fe,Xa),Yr),g([ki]),o(fp,F.fB,ce),p(Vp,F.M,fe,Ar(ce)),p(Xe,F.U,pn,Yr)]))}},Ip=function(e){return o(Sr,"width",Ae(e))},Op=$(function(e,r){var n=g([U0(1),W0(0),k0(!0),L(A0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return A(n,"0",1);case 1:return A(o(B,D0,n),"1",1);default:var k=C.a;return A(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Si(v),d=o(ne,"height",Ae(s)+"px"),m=Si(u),f=m/s,h=o(Po,function(C){return Hp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(ne,"width",Ae(m)+"px"),w=e.aI,x=w,_=G0(x);return p(j0,"div",g([o(ne,"padding","0px"),b,d]),g([T(i,p(O0,t,g([Ip(Ze(m*c)),E0(Ze(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),h))]))}),Jp=function(e){return o(Op,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kl=function(e){return e},Bi=Kl({fU:.31271,fY:.32902}),qp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(zo,r.ce,r.b6),u=l;return{by:$n(u),ex:n,bF:vn(u),cK:0,bV:un(u),c_:1,fU:-t,fY:-i,c6:-c}}),Zp=function(e){return e},Xp=function(e){return Zp(1.2*o(Dn,2,e))},et=function(e){return e},Kp={$:0},Qp=Kp,Ql=function(e){return e},Ai=function(e){var r=e;return r},eb=function(e){e:for(;;){if(gr(e.e2,qe)&&gr(e.e3,qe))return Pe;if(o(pl,xe(e.e2),xe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=O(Ai(e.e3)/en),a=O(Ai(e.e2)/en),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(zo,Ql(1),e.b6),v=u;return{by:a*$n(v),ex:!1,bF:a*vn(v),cK:n/a,bV:a*un(v),c_:3,fU:i,fY:c,c6:l}}}},Fi=function(e){return eb({b6:e.b6,e2:e.ce,e3:qe,ei:e.ei})},rb=function(e){var r=e;return r},eu=function(e){var r=p(Sl,1667,25e3,rb(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kl({fU:n,fY:a})},ru=function(e){return e},nb=eu(ru(12e3)),ab=eu(ru(5600)),tb=function(e){return{$:2,a:e}},ob=function(e){return tb(e)},ib=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},Wn=function(e){var r=e;return r},cb=function(e){var r=e;return r.ex},lb=nu(pn.a),ub=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return p(dr,n,T(P,P),r)}),vb=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},$b=Q(function(e,r,n,a,t,i,c,l){var u=o(ub,cb,g([Wn(e),Wn(r),Wn(n),Wn(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(ib,o(ee,vb,v),{bd:o(je,m,h),bK:o(je,w,_),bL:o(je,t,i),bM:o(je,c,l)})}else return lb}else return nu({bd:o(je,e,r),bK:o(je,n,a),bL:o(je,t,i),bM:o(je,c,l)})}),fb=y(function(e,r,n){return Ca($b,e,r,n,Pe,Pe,Pe,Pe,Pe)}),sb=function(e){var r=o(qp,z0(e.fB),{b6:ab,eH:e.fJ,ce:et(8e4)}),n=Fi({b6:nb,ce:et(2e4),ei:e.ei}),a=Fi({b6:Bi,ce:et(15e3),ei:Ln(e.ei)}),t=p(fb,r,n,a);return Jp({b0:ob(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Xp(15),bJ:t,bZ:Qp,b$:Bi})},au=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),db=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),mb=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),pb=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),bb=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Fo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(bb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(db,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(pb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(mb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Vo={$:0},hb=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),d=o(de,s.dR,e),m=o(ue,s.dO,r),f=o(de,s.dS,n),h=o(ue,s.dP,a),b=o(de,s.dT,t),w=o(ue,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=h,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),gb=y(function(e,r,n){var a=_a(e(r));return Ca(hb,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),rt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),iu=function(e){return o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)&&o(rt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},cu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Mr(n),c=Dr(n),l=Br(n),u=Mr(a),v=Dr(a),s=Br(a),d=Mr(t),m=Dr(t),f=Br(t);return iu({dO:o(ue,i,o(ue,u,d)),dP:o(ue,c,o(ue,v,m)),dQ:o(ue,l,o(ue,s,f)),dR:o(de,i,o(de,u,d)),dS:o(de,c,o(de,v,m)),dT:o(de,l,o(de,s,f))})},lu=H$,ze=function(e){return lu(Fa(e))},uu=function(e){var r=e;return r},Va=function(e){return lu(uu(e))},_b=$(function(e,r){var n=e,a=r,t=o(ke,O(a.fU),o(ke,O(a.fY),O(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=br(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return bl}),wb=_b(Ql(1)),vu=y(function(e,r,n){var a=o(ga,r,n),t=o(ga,e,r);return wb(o(so,a,t))}),yb=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Va(p(vu,n,a,t));return A({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},xb=$(function(e,r){return{$:2,a:e,b:r}}),$u=xb({df:3,$7:0,dV:4}),Sb=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ee,yb,e)),t=p(gb,cu,r,n);return L(au,t,e,a,0)}else return Vo},Re=y(function(e,r,n){return A(e,r,n)}),fu=function(){var e=ar(1),r=ar(1),n=ar(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(pe,i,t,a),l=o(le,.5,e),u=p(pe,i,t,l),v=o(le,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(le,.5,n),f=p(pe,m,t,a),h=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Fo(Sb(g([p(Re,c,h,f),p(Re,c,s,h),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,h,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,h),p(Re,s,d,w)])))}(),Yn={$:0},Cb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Lb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(vu,u,l,c)),s={o:v,bT:ze(u)},d={o:v,bT:ze(l)},m={o:v,bT:ze(c)};return o(B,s,o(B,d,o(B,m,n)))}),Pb=or,Uo=function(e){var r=e;return r.D},zb=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Dt=4294967295>>>32-xn,Bt=qu,Tb=y(function(e,r,n){e:for(;;){var a=Dt&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,Dt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),kb=function(e){return e>>>5<<5},Mb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,kb(n))>-1?re(o(Bt,Dt&e,i)):re(p(Tb,a,e,t))}),Eo=function(e){var r=e;return r.ah},nt=$(function(e,r){return o(Mb,e,Eo(r))}),Db=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(zb,y(function(c,l,u){return A(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(il,r,Uo(e))},Bb=y(function(e,r,n){e:for(;;){var a=o(no,Ue,e),t=a.a,i=a.b;if(I(bt(t),Ue)<0)return o(Fc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Bc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ro=function(e){return e.b?p(Bb,e,P,0):Mc},Ab=y(function(e,r,n){return e(r(n))}),Fb=$(function(e,r){return!o(Hc,o(Ab,hs,e),r)}),Vb=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),Ub=function(e){var r=e.a;return r},su=$(function(e,r){var n=Ub(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(Fb,a,r)?{D:r,ah:e}:{D:o(Vb,a,r),ah:e}}),Eb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=Eb({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Zr(r),a=Zr(e);return T(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Vi=p(Bn,0,0,0),at=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Qc,o(na,e,r),t);if(v.$){var d={o:Vi,bT:ze(r)},m={o:Vi,bT:ze(e)},f=u+1,h=u;return A(o(B,A(n,h,f),o(B,A(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),Rb=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,w=e,x=r,_=v,C=a+3,k=_e(at,s,m,f,b,r,_e(at,d,s,h,f,r,_e(at,m,d,b,h,r,t)));e=w,r=x,n=_,a=C,t=k;continue e}else{var N=t,R=N.a,E=N.b;return T(R,Ve(E))}}),jb=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,w=p(Zn,o(na,m,s),f,p(Zn,o(na,s,d),h,p(Zn,o(na,d,m),b,t))),x=o(B,A(b,h,f),a),_=e,C=v,k=n+3,N=x,R=w;e=_,r=C,n=k,a=N,t=R;continue e}else return A(a,t,n)}),Lr=y(function(e,r,n){var a=Db(n),t=p(dr,Lb(r),P,a),i=S(jb,r,a,0,P,Pb),c=i.a,l=i.b,u=i.c,v=S(Rb,r,l,a,0,A(c,P,u)),s=v.a,d=v.b,m=zt(d)?t:ve(t,d);return p(Cb,e,o(su,Ro(m),s),o(Vn,m,s))}),At=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Fr,0,Ar(e)-1)),ah:Ro(Ye(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return Yn;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,Tr,At(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,Tr,At(n));case 3:var a=e.a,t=e.b;return p(Lr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return Yn;case 9:return Yn;default:return Yn}},Ui=du(fu),mu={$:0},z=mu,be=$(function(e,r){return{$:1,a:e,b:r}}),Nb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Wb=1029,Yb=function(e){return{$:5,a:e}},pu=function(e){var r=e;return Yb(r)},Gb=pu(Wb),Hb=1028,Ib=pu(Hb),Te=y(function(e,r,n){return r===1?e?o(B,Gb,n):o(B,Ib,n):n}),bu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ae,p(Te,l,a,d),bu,Nb,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),jo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},hu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ae,p(Te,l,a,d),hu,jo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),gu=$(function(e,r){return{$:3,a:e,b:r}}),Ob={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},_u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jb=U(function(e,r,n,a){return o(gu,n,Q(function(t,i,c,l,u,v,s,d){return S(ae,d,_u,Ob,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),No={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Un=function(e){var r=e;return r},Ua=I$,cr=he(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ae,p(Te,u,t,m),hu,No,a,{aN:o(Ua,Un(r),e),b:l,c,d:s,e:i,f:v})}))}),qb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Zb=he(function(e,r,n,a,t){return o(gu,a,Q(function(i,c,l,u,v,s,d,m){return S(ae,m,_u,qb,t,{aN:o(Ua,Un(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Gn=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),yu,wu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xb=He(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ae,p(Te,v,i,f),Su,xu,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Kb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,Q(function(d,m,f,h,b,w,x,_){var C=x.a,k=x.b;return S(ae,p(Te,h,s,_),Su,Cu,v,{b4:e,b8:r,b9:i,ca:a,P:k,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Lu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Hn=He(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ae,p(Te,v,i,f),yu,Lu,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),Qb=function(e){return{$:0,a:e}},Ei=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),e1=function(e){return L(ln,un(e),vn(e),$n(e),1)},Wo=L(ln,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Wo)}else{var n=r.a;return T(e,e1(n))}}),Pu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Ei,T(t,Wo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ei,o(aa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,Qb(a)}}),r1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),In=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),n1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),a1=function(e){return o(Be,e,1)},Ft=o(Be,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Ft)}else{var n=r.a;return T(e,a1(n))}}),zu=U(function(e,r,n,a){var t=L(n1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(In,T(u,Wo),o(Gr,u,r),o(Gr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(In,o(aa,u,e),T(u,Ft),o(Gr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(In,o(aa,u,e),o(Gr,u,r),T(u,Ft),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(In,o(aa,u,e),o(Gr,u,r),o(Gr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(r1,i,c,l)}}),t1={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},ot=he(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ae,p(Te,u,t,m),bu,t1,a,{b1:Un(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Tu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},o1=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),Tu,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),i1=Et(function(e,r,n,a,t,i,c,l,u){return o(be,c,Q(function(v,s,d,m,f,h,b,w){var x=b.a,_=b.b;return S(ae,p(Te,m,u,w),Tu,Cu,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:d,c:s,aW:e,d:h,cS:n,e:v,a$:0,f})}))}),zn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),c1=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},l1=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},u1=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},v1=function(e){return p(pe,c1(e),l1(e),u1(e))},Y=function(e){var r=Yl(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(v1(e)),eS:n/2,eT:a/2,eU:t/2}},Yo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(ir,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(ir,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Jb,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Zb,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Pu,s,R);if(d.$){var h=d.a,b=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(o1,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Xb,b,x,_,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var C=e.b,k=e.c,N=e.d,R=e.e,E=L(zu,C,k,N,R);if(E.$){var Z=E.a,K=Z.a,ce=Z.b,fe=E.b,ie=fe.a,me=fe.b,Me=E.c,Se=Me.a,mr=Me.b,pr=E.d,x=pr.a,_=pr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Gu(i1,K,ce,ie,me,Se,mr,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Kb(K)(ce)(ie)(me)(Se)(mr)(x)(_)(Y(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=E.a,W=E.b,F=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),it=function(e){var r=e;return r.fU},ct=function(e){var r=e;return r.fY},lt=function(e){var r=e;return r.c6},$1=function(e){var r=e,n=lt(r.c7),a=ct(r.c7),t=it(r.c7),i=lt(r.c5),c=ct(r.c5),l=it(r.c5),u=lt(r.c4),v=ct(r.c4),s=it(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},f1=function(e){var r=Fa(cn(e)),n=Ge(Wr(e)),a=Ge(Nr(e)),t=Ge(jr(e));return{dp:$1(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},Hr=$(function(e,r){return{$:5,a:e,b:r}}),ku=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Fl,a,e);return o(Hr,i,t);case 1:return o(Hr,e,n);case 3:return o(Hr,e,n);case 2:return o(Hr,e,n);default:return o(Hr,e,n)}}),Mu=$(function(e,r){return o(ku,f1(e),r)}),Ea=function(e){return{$:2,a:e}},s1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),d1=q$,m1=J$,Ri=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=m1(a),h=f.fU,b=f.fY,w=f.c6,x=f.em,_=d1({em:x,fU:h*s,fY:b*d,c6:w*m});return Ca(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Vt=$(function(e,r){switch(r.$){case 0:return mu;case 5:var n=r.a,a=r.b;return o(Hr,n,o(Vt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(s1,e,t),o(Ri,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(Ri,e,i));default:var c=r.a;return Il(o(ee,Vt(e),c))}}),Go=$(function(e,r){var n=r;return o(Vt,e,n)}),Ho={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Bu=7682,p1=p(Mo,{cp:0,cO:0,c3:15},{a8:ye,bl:rn,bt:ye,bu:Du},{a8:ye,bl:rn,bt:ye,bu:Bu}),b1=p(Mo,{cp:0,cO:0,c3:15},{a8:ye,bl:rn,bt:ye,bu:Bu},{a8:ye,bl:rn,bt:ye,bu:Du}),Io=$(function(e,r){return e?o(B,b1,r):o(B,p1,r)}),h1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},g1=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return S(ae,o(Io,i,v),h1,Ho,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=g1(e);if(r.$)return z;var n=r.a;return Ea(n)},_1=U(function(e,r,n,a){var t=o(Yo,n,fu),i=function(){var s=T(e,r);return s.a?s.b?Fn(g([t,wa(Ui)])):t:s.b?wa(Ui):z}(),c=yo(a),l=c.a,u=c.b,v=c.c;return o(Mu,wo(a),o(Go,A(l,u,v),i))}),w1=$(function(e,r){return L(_1,!0,!0,e,r)}),Au=$(function(e,r){return{$:0,a:e,b:r}}),y1=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(Bn,n,a,t)},x1=function(e){return o(Au,0,kt(y1(e)))},S1=function(e){var r=e;return r.k},wn=function(e){var r=e;return Vr(r)},C1=$(function(e,r){var n=r;return n/e}),ji=function(e){var r=e;return{fU:Vr(r),fY:Qr(r)}},L1=$(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Va(a),bT:ze(n)},r)}),P1=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bT),s=vn(l.bT),d=un(l.bT),m=o(ra,e,d),f=o(ke,r,d),h=o(ra,n,s),b=o(ke,a,s),w=o(ra,t,v),x=o(ke,i,v),_=u;e=m,r=f,n=h,a=b,t=w,i=x,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=$(function(e,r){var n=$n(e.bT),a=vn(e.bT),t=un(e.bT);return Rt(P1,t,t,a,a,n,n,r)}),z1=function(e){var r=p(xc,L1,P,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Uo(e)),i=o(Fu,n,a);return L(tu,i,e,t,0)}else return Vo},Ni=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),ya=function(e){var r=e;return Qr(r)},Ut=function(e){return Kr(2*en*e)},T1=Tr,Wi=T1({cB:Rr,c4:Zl,c5:Lo}),Vu=function(){var e=72,r=o(C1,e,Ut(1)),n=ar(1),a=Jr(go),t=Jr(wl),i=ar(1),c=o(le,.5,i),l=p(pe,qe,qe,c),u=o(le,-.5,i),v=p(pe,qe,qe,u),s=function(f){var h=o(le,f,r),b=Jr(o(Ni,Wi,ji(h))),w=o(le,wn(h),n),x=o(le,ya(h),n),_=p(pe,w,x,c),C=p(pe,w,x,u),k=o(ma,e,f+1),N=o(le,k,r),R=Jr(o(Ni,Wi,ji(N))),E=o(le,wn(N),n),j=o(le,ya(N),n),W=p(pe,E,j,u),F=p(pe,E,j,c);return g([A({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),A({o:b,bT:C},{o:R,bT:W},{o:R,bT:F}),A({o:b,bT:C},{o:R,bT:F},{o:b,bT:_}),A({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},d=o(ee,s,o(Fr,0,e-1)),m=At(Ye(d));return Fo(z1(m))}(),Yi=du(Vu),k1=function(e){var r=e;return r.eH},M1=function(e){var r=e;return r.cB},D1=function(e){var r=k1(e),n=mo(r),a=n.a,t=n.b;return fr({cB:M1(e),c4:a,c5:t,c7:r})},B1=function(e){var r=e;return r.e9},A1=function(e){var r=e;return r.fu},F1=U(function(e,r,n,a){var t=D1(S1(a)),i=o(Yo,n,Vu),c=function(){var d=T(e,r);return d.a?d.b?Fn(g([i,wa(Yi)])):i:d.b?wa(Yi):z}(),l=A1(a),u=l,v=B1(a),s=v;return o(Mu,t,o(Go,A(u,u,s),c))}),V1=$(function(e,r){return L(F1,!0,!0,e,r)}),Gi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Hi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},bn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return er({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},On=$u(g([A({cZ:0},{cZ:1},{cZ:2})])),U1=$(function(e,r){var n=cu(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,Q(function(_,C,k,N,R,E,j,W){return S(ae,p(Te,N,0,W),Gi,jo,On,{aw:t,b:k,c:C,d:E,e:_,bq:bn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,Q(function(_,C,k,N,R,E,j,W){return S(ae,p(Te,N,0,W),Gi,No,On,{aN:o(Ua,Un(c),i),b:k,c:C,d:E,e:_,bq:bn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Pu,l,f);if(u.$)return z;var v=u.a;return o(be,a,Q(function(_,C,k,N,R,E,j,W){var F=j.a,Z=j.b;return S(ae,p(Te,N,0,W),Hi,wu,On,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cq:v,b:k,c:C,d:E,e:_,bq:bn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=L(zu,s,d,m,f);if(h.$)return z;var b=h.a,w=h.b,x=h.c;return o(be,a,Q(function(_,C,k,N,R,E,j,W){var F=j.a,Z=j.b;return S(ae,p(Te,N,0,W),Hi,Lu,On,{b3:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cu:x,b:k,c:C,d:E,cR:w,e:_,bq:bn(r),f:R})}))}}),E1=function(){var e=g([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=g([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Vn,e,r)}(),R1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ii=function(e){return Ea(Q(function(r,n,a,t,i,c,l,u){return S(ae,o(Io,t,u),R1,Ho,E1,{b:a,c:n,d:c,e:r,bY:l,bq:bn(e),f:i})}))},j1=U(function(e,r,n,a){var t=o(U1,n,a),i=T(e,r);return i.a?i.b?Fn(g([t,Ii(a)])):t:i.b?Ii(a):z}),N1=$(function(e,r){return L(j1,!0,!0,e,r)}),W1=$(function(e,r){var n=Br(r),a=Br(e),t=Dr(r),i=Dr(e),c=Mr(r),l=Mr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(de,l,c),dS:o(de,i,t),dT:o(de,a,n)}}),Y1=function(e){var r=xo(e),n=r.a,a=r.b;return o(W1,n,a)},Oi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},G1=$(function(e,r){return{$:1,a:e,b:r}}),H1=G1({df:2,$7:0,dV:1}),Ji=H1(g([T({dw:0},{dw:1})])),I1=$(function(e,r){var n=Y1(r),a=Y(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,Q(function(v,s,d,m,f,h,b,w){return S(ae,w,Oi,jo,Ji,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,Q(function(s,d,m,f,h,b,w,x){return S(ae,x,Oi,No,Ji,{aN:o(Ua,Un(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return z;default:return z}}),O1=$(function(e,r){return o(I1,e,r)}),Jn=function(e){return Kr(en*(e/180))},qi=$(function(e,r){var n=e,a=r;return n/a}),J1=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Zi=$(function(e,r){return e<1?P:S(J1,0,e,e,r,P)}),q1=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bT:ze(n),L:o(Be,c,l)},r)}),Z1=function(e){var r=p(xc,q1,P,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Uo(e)),i=o(Fu,n,a);return L(ou,i,e,t,0)}else return Vo},Uu=$(function(e,r){var n=e,a=r,t=Vr(a);return{fU:t*Vr(n),fY:t*Qr(n),c6:Qr(a)}}),X1=function(){var e=ar(1),r=72,n=o(Fr,0,r-1),a=o(Zi,r,o(zn,qe,Ut(1))),t=eo(r/2),i=o(Fr,0,t-1),c=o(Zi,t,o(zn,Jn(90),Jn(-90))),l=Ro(Ye(o(ee,function(s){return o(ee,function(d){return{o:Jr(o(Uu,s,d)),bT:p(pe,o(le,wn(d)*wn(s),e),o(le,wn(d)*ya(s),e),o(le,ya(d),e)),L:T(o(qi,s,Ut(1)),o(qi,o(gn,Jn(90),d),Jn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ye(o(ee,function(s){return Ye(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([A(b,h,m),A(b,m,f)])},i))},n));return Fo(Z1(o(su,l,v)))}(),xa=72,qn=2*xa,K1=$(function(e,r){e:for(;;){var n=qn+1,a=o(ma,qn,2*e+3),t=o(ma,qn,2*e+2),i=2*e+1,c=2*e,l=qn,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Q1=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),e3=$(function(e,r){e:for(;;){var n=p(Q1,0,2*en,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),r3=function(){var e=o(e3,xa-1,g([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(K1,xa-1,P);return o(Vn,e,r)}(),n3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Xi=function(e){return Ea(Q(function(r,n,a,t,i,c,l,u){return S(ae,o(Io,!0,u),n3,Ho,r3,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},a3=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},t3=$(function(e,r){return o(ku,a3(e),r)}),o3=U(function(e,r,n,a){var t=o(Yo,n,X1),i=function(){var u=T(e,r);return u.a?u.b?Fn(g([t,Xi()])):t:u.b?Xi():z}(),c=Co(a),l=c;return o(t3,o(ga,Rr,So(a)),o(Go,A(l,l,l),i))}),i3=$(function(e,r){return L(o3,!0,!0,e,r)}),c3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),l3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),u3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Au,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(c3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(xl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(l3,n,a,t,i,c)}},v3=u3,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(w1,t,r)]);case 1:var t=e.a,n=e.b;return g([o(N1,t,n)]);case 3:var t=e.a,a=e.b;return g([o(i3,v3(t),a)]);case 2:var t=e.a,i=e.b;return g([o(V1,t,i)]);case 4:var c=e.a,l=e.b;return g([o(O1,x1(c),l)]);default:var u=e.a;return o(Po,Eu,u)}},$3=function(e){return o(Po,Eu,e)},f3=$(function(e,r){return sb({aI:L0(e.es),ev:e.ev,aJ:P0(.5),cb:e.cb,aK:T(xi(Ze(e.cT.fS)),xi(Ze(e.cT.eW))),aP:$3(r),fB:!0,fJ:o(Uu,Kr(e.fI),Kr(e.fK)),ei:Xl})}),s3=$(function(e,r){return o(f3,{es:Rm,ev:Em,cb:e.cb,cT:e.cT,fI:0,fK:0},o(C0,e,r))}),d3=p(gm,s3,wm,_m);const m3={Main:{init:d3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",fa(Cn)))},o(M,"left",X))},o(M,"pressedKeys",fa(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},p3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-V.clock;b<.009||(V.dt=b,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},b3=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},h3=m3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});b3();p3(h3);
