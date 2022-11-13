(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Sr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function x(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Yt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Gu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Hu=[];function Iu(e){return e.length}var Ju=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ou=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),qu=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zu=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Qu()),r});function Qu(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=st(e,r,0,a);t&&(n=a.pop());t=st(n.a,n.b,0,a));return t}function st(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=fi(e),r=fi(r));for(var t in e)if(!st(e[t],r[t],n+1,a))return!1;return!0}$(yr);$(function(e,r){return!yr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Xu=$(function(e,r){var n=I(e,r);return n<0?kc:n?Ef:Mc}),zn=0;function T(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var Ku=$(ar);function h(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(x(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Ta(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Mc?0:t===kc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan,cv=Math.atan;$(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,Xo=Math.log,mv=isNaN;function dv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var pv=$(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function gv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function hv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),yv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),Cv=S(function(e,r,n){return n.slice(e,r)});function xv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var wv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Tv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function tc(e){return e+""}function zv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Mv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function kv(e){return Ta(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Av(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bv(e){return{$:0,a:e}}function Gt(e){return{$:2,b:e}}var Fv=Gt(function(e){return typeof e=="boolean"?$e(e):Xe("a BOOL",e)}),Vv=Gt(function(e){return typeof e=="number"?$e(e):Xe("a FLOAT",e)}),Uv=Gt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Xe("a STRING",e)});function Ev(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Cr(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Nv=$(function(e,r){return Cr(e,[r])}),Wv=S(function(e,r,n){return Cr(e,[r,n])});U(function(e,r,n,a){return Cr(e,[r,n,a])});ge(function(e,r,n,a,t){return Cr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return Cr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return Cr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Cr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return Cr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return ye(o(no,"This is not valid JSON! "+a.message,r))}});var oc=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Xe("null",r);case 3:return Nn(r)?Ko(e.b,r,h):Xe("a LIST",r);case 4:return Nn(r)?Ko(e.b,r,Yv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Je(v)?v:ye(o(si,n,v.a));case 7:var a=e.e;if(!Nn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Je(v)?v:ye(o(Dc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Je(v))return ye(o(si,i,v.a));t=ar(T(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Je(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ne(e.b,r);return Je(v)?Ne(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Ne(m.a,r);if(Je(v))return v;s=ar(v.a,s)}return ye(Rf(Fe(s)));case 1:return ye(o(no,e.a,r));case 0:return $e(e.a)}}function Ko(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Je(c))return ye(o(Dc,i,c.a));t[i]=c.a}return $e(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Yv(e){return o(ns,e.length,function(r){return e[r]})}function Xe(e,r){return ye(o(no,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&ei(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return ei(e.g,r.g)}}function ei(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Gv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}S(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Hv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var mt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Jv=0;function Ht(e){var r={$:0,e:Jv++,f:e,g:null,h:[]};return It(r),r}function cc(e){return dr(function(r){r(Rr(Ht(e)))})}function lc(e,r){e.h.push(r),It(e)}var Ov=$(function(e,r){return dr(function(n){lc(e,r),n(Rr(zn))})}),Ya=!1,ri=[];function It(e){if(ri.push(e),!Ya){for(Ya=!0;e=ri.shift();)qv(e);Ya=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,It(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Jt(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Je(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Zv(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),ai(l,b.b,t(v))}return ai(l,u.b,t(v)),m?{ports:m}:{}}var rr={};function Zv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Xv(t,r)}return n}function Qv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Xv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mt,l,Iv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o(mt,l,e.b))}var Kv=$(function(e,r){return dr(function(n){e.g(r),n(Rr(zn))})});$(function(e,r){return o(Ov,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ni=[],Ga=!1;function ai(e,r,n){if(ni.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=ni.shift();)r$(a.p,a.q,a.r);Ga=!1}}function r$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function t$(e){rr[e]&&nn(3)}$(function(e,r){return r});function o$(e,r){return t$(e),rr[e]={f:i$,u:r,a:c$},uc(e)}var i$=$(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=P,a=rr[e].u,t=Rr(null);rr[e].b=t,rr[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Je(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,vr=typeof document<"u"?document:{};function Ot(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var vc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:qt(n),e:t,f:e,b:i}})}),jr=vc(void 0),l$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:qt(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:qt(e),g:r,h:n,i:a}}var $$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});S(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return x(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Yt(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var $c=$(function(e,r){return{$:"a0",n:e,o:r}}),f$=$(function(e,r){return{$:"a1",n:e,o:r}}),fc=$(function(e,r){return{$:"a2",n:e,o:r}}),wr=$(function(e,r){return{$:"a3",n:e,o:r}}),s$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function m$(e){return e=="script"?"p":e}function d$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o($c,r.n,p$(e,r.o)):r});function p$(e,r){var n=co(r);return{$:r.$,a:n?p(as,n<3?b$:g$,De(e),r.a):o($a,e,r.a)}}var b$=$(function(e,r){return T(e(r.a),r.b)}),g$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function qt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ti(c,t,i):c[t]=i}return r}function ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return pt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),pt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ot(c,_r(n===1?l[u]:l[u].b,r));return c}function pt(e,r,n){for(var a in n){var t=n[a];a==="a1"?h$(e,t):a==="a0"?S$(e,r,t):a==="a3"?_$(e,t):a==="a4"?y$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function h$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function y$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function S$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=C$(r,i),e.addEventListener(t,c,Zt&&{passive:co(i)<2}),a[t]=c}}var Zt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zt=!0}}))}catch{}function C$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Je(i)){for(var c=co(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function x$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function sc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){he(n,0,a,r);return}(f?!w$(m,d):m!==d)&&he(n,2,a,d),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:oi(e,r,n,a,L$);return;case 2:oi(e,r,n,a,P$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var y=Qt(e.d,r.d);y&&he(n,4,a,y);var C=r.i(e.g,r.g);C&&he(n,5,a,C);return}}}function w$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function oi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Qt(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&x$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Oe(s,i[v],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],y=g.a,C=b.a,_=g.b,w=b.b,M=void 0,N=void 0;if(y===C){f++,Oe(_,w,t,f),f+=_.b||0,m++,d++;continue}var R=l[m+1],E=u[d+1];if(R){var j=R.a,W=R.b;N=C===j}if(E){var F=E.a,Z=E.b;M=y===F}if(M&&N){f++,Oe(_,Z,t,f),$n(i,t,y,w,d,c),f+=_.b||0,f++,fn(i,t,y,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,$n(i,t,C,w,d,c),Oe(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(N){f++,fn(i,t,y,_,f),f+=_.b||0,f++,Oe(W,w,t,f),f+=W.b||0,m+=2,d+=1;continue}if(R&&j===F){f++,fn(i,t,y,_,f),$n(i,t,C,w,d,c),f+=_.b||0,f++,Oe(W,Z,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;fn(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],b=u[d];$n(i,t,b.a,b.b,void 0,X),d++}(t.length>0||c.length>0||X)&&he(n,8,a,{w:t,x:c,y:X})}var mc="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+mc,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}fn(e,r,n+mc,a,t)}function dc(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)dc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,y=0;y<g.length;y++){t++;var C=d===1?g[y]:g[y].b,_=t+(C.b||0);if(t<=u&&u<=_&&(a=sn(b[y],C,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(dc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=T$(t,a);t===e&&(e=i)}return e}function T$(e,r){switch(r.$){case 0:return z$(e,r.s,r.u);case 4:return pt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return M$(e,r);case 5:return r.s(e);default:nn(10)}}function z$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function M$(e,r){var n=r.s,a=k$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ot(e,a),e}function k$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ot(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function Xt(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(wr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(Xt(v[a]),u);return p(jr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=U(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Xt(l);return bc(i,function(v){var s=c(v),m=sc(u,s);l=pc(l,u,m,t),u=s})})});U(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=vr.title,v=vr.body,s=Xt(v);return bc(i,function(m){ca=c;var d=l(m),f=jr("body")(P)(d.eu),g=sc(s,f);v=pc(v,s,g,t),s=f,ca=0,u!==d.fL&&(vr.title=u=d.fL)})})});var ua=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(vo,lo,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(vo,lo,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(vo,lo,dr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window<"u"?window:B$;S(function(e,r,n){return cc(dr(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,Zt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Je(n)?re(n.a):q});function gc(e,r){return dr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Hv(os(e)))})})}function V$(e){return dr(function(r){ua(function(){r(Rr(e()))})})}$(function(e,r){return gc(r,function(n){return n[e](),zn})});$(function(e,r){return V$(function(){return F$.scroll(e,r),zn})});S(function(e,r,n){return gc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var U$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var E$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?re(m):q}a.push(L(sl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(sl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var R$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/j$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function j$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Kt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),N$=S(function(e,r,n){return new Float64Array([e,r,n])}),W$=function(e){return e[0]},Y$=function(e){return e[1]},G$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var H$=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(hc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(hc(e,r,n),n)}$(_c);function yc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/yc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var I$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function bt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(bt);$(function(e,r){var n,a=Kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var J$=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var O$=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},q$=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Q$=new Float64Array(16),X$=new Float64Array(16),K$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},ef=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(Sc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Sc(c,l,i,t,n,a)});function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(Cc);U(function(e,r,n,a){return Cc(e,r,n,a,-1,1)});function xc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],y=e[13],C=e[14],_=e[15],w=r[0],M=r[1],N=r[2],R=r[3],E=r[4],j=r[5],W=r[6],F=r[7],Z=r[8],X=r[9],ce=r[10],fe=r[11],ie=r[12],de=r[13],ke=r[14],xe=r[15];return n[0]=a*w+l*M+m*N+b*R,n[1]=t*w+u*M+d*N+y*R,n[2]=i*w+v*M+f*N+C*R,n[3]=c*w+s*M+g*N+_*R,n[4]=a*E+l*j+m*W+b*F,n[5]=t*E+u*j+d*W+y*F,n[6]=i*E+v*j+f*W+C*F,n[7]=c*E+s*j+g*W+_*F,n[8]=a*Z+l*X+m*ce+b*fe,n[9]=t*Z+u*X+d*ce+y*fe,n[10]=i*Z+v*X+f*ce+C*fe,n[11]=c*Z+s*X+g*ce+_*fe,n[12]=a*ie+l*de+m*ke+b*xe,n[13]=t*ie+u*de+d*ke+y*xe,n[14]=i*ie+v*de+f*ke+C*xe,n[15]=c*ie+s*de+g*ke+_*xe,n}$(xc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],y=r[1],C=r[2],_=r[4],w=r[5],M=r[6],N=r[8],R=r[9],E=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*y+v*C,n[1]=t*b+l*y+s*C,n[2]=i*b+u*y+m*C,n[3]=0,n[4]=a*_+c*w+v*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+s*E,n[10]=i*N+u*R+m*E,n[11]=0,n[12]=a*j+c*W+v*F+d,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/yc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,y=c*l*v,C=i*i*v+u,_=g+f,w=b-d,M=g-f,N=c*c*v+u,R=y+m,E=b+d,j=y-m,W=l*l*v+u,F=n[0],Z=n[1],X=n[2],ce=n[3],fe=n[4],ie=n[5],de=n[6],ke=n[7],xe=n[8],br=n[9],gr=n[10],Wa=n[11],ju=n[12],Nu=n[13],Wu=n[14],Yu=n[15];return a[0]=F*C+fe*_+xe*w,a[1]=Z*C+ie*_+br*w,a[2]=X*C+de*_+gr*w,a[3]=ce*C+ke*_+Wa*w,a[4]=F*M+fe*N+xe*R,a[5]=Z*M+ie*N+br*R,a[6]=X*M+de*N+gr*R,a[7]=ce*M+ke*N+Wa*R,a[8]=F*E+fe*j+xe*W,a[9]=Z*E+ie*j+br*W,a[10]=X*E+de*j+gr*W,a[11]=ce*E+ke*j+Wa*W,a[12]=ju,a[13]=Nu,a[14]=Wu,a[15]=Yu,a});function rf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(rf);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function nf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(nf);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],y=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=y,n[11]=C,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+f*t+C*i+r[15],n});S(function(e,r,n){var a=_c(e,r,Kt),t=va(bt(n,a,ii),ii),i=va(bt(a,t,ci),ci),c=Q$,l=X$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,xc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var li=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function eo(e){for(var r=0;e.b;e=e.b)r++;return r}var af=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},tf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),of=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),cf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),lf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),uf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ff=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),sf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},df=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},bf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},gf=function(e){e.gl.disable(e.gl.CULL_FACE)},hf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_f=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},yf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Sf=[df,pf,bf,wc,Lc,gf,hf,_f,yf];function vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Cf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function xf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,y,C){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?y[C]:y[C][_];else i.forEach(function(w){for(_=0;_<g;_++)f[b++]=g===1?y[w][C]:y[w][C][_]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(eo(n.b)*s);Sn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function wf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*eo(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(eo(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function $i(e,r){return e+"#"+r}var Tc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),wc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=$i(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=li++,v||(v=vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=li++,s||(s=vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Cf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Pf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=$i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Tf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=wf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=xf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var y=Pc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,y.size,y.baseType,!1,0,0);else for(var C=y.size*4,_=C*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,y.size,y.baseType,!1,_,C*w)}for(n.toggle=!n.toggle,Sn(I0(n),i.a),u=0;u<ui.length;u++){var M=n[ui[u]];M.toggle!==n.toggle&&M.enabled&&(Sf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Sn(t,e.g),r});function Pf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,y=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var C=c++;return function(_){e.activeTexture(e.TEXTURE0+C);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(y,C),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Tf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var zf=S(function(e,r,n){return v$(r,{g:n,f:{},h:e},Vf,Uf)}),Mf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),kf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Af=$(function(e,r){e.contextAttributes.antialias=!0}),Bf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ff=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Vf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(H0,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),af(function(){return o(Tc,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Uf(e,r){return r.f=e.f,Tc(r)}var A=Ku,Wn=Zu,zc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),ro=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ro,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),fi=function(e){return p(ro,S(function(r,n,a){return o(A,T(r,n),a)}),P,e)},Mc=1,Ef=2,kc=0,ye=function(e){return{$:1,a:e}},no=$(function(e,r){return{$:3,a:e,b:r}}),si=$(function(e,r){return{$:0,a:e,b:r}}),Dc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},jf=wv,Nf=Gv,Be=tc,Pr=$(function(e,r){return o(Sv,e,Ta(r))}),ao=$(function(e,r){return h(o(yv,e,r))}),Ac=function(e){return o(Pr,`
    `,o(ao,`
`,e))},Mn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(Mn,$(function(r,n){return n+1}),0,e)},Wf=ev,Yf=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Vr=$(function(e,r){return p(Yf,e,r,P)}),Bc=$(function(e,r){return p(Wf,e,o(Vr,0,Fr(r)-1),r)}),nr=Dv,Fc=function(e){var r=nr(e);return 97<=r&&r<=122},Vc=function(e){var r=nr(e);return r<=90&&65<=r},Gf=function(e){return Fc(e)||Vc(e)},Hf=function(e){var r=nr(e);return r<=57&&48<=r},If=function(e){return Fc(e)||Vc(e)||Hf(e)},Fe=function(e){return p(Mn,A,P,e)},an=bv,Jf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Ac(Of(r))))}),Of=function(e){return o(qf,e,P)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var y=b.a,C=y.a,_=y.b;return Gf(C)&&o(jf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Fe(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Be(Fr(s))+" ways:"));return o(Pr,`

`,o(A,g,o(Bc,Jf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Fe(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Ac(o(Nf,4,f))+(`

`+d))}}),Ve=32,gt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=Hu,to=vv,oo=$(function(e,r){return Xo(r)/Xo(e)}),Zf=lv,Cn=to(o(oo,2,Ve)),Uc=L(gt,0,Cn,ht,ht),Ec=Ju,Rc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var jc=$v,_t=Iu,Me=$(function(e,r){return I(e,r)>0?e:r}),Qf=function(e){return{$:0,a:e}},io=Ou,Xf=$(function(e,r){e:for(;;){var n=o(io,Ve,e),a=n.a,t=n.b,i=o(A,Qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),Kf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=to(r/Ve);if(n===1)return o(io,Ve,e).a;var a=o(Xf,e,P),t=n;e=a,r=t;continue e}}),Nc=$(function(e,r){if(r.l){var n=r.l*Ve,a=jc(o(oo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(es,t,r.l);return L(gt,_t(r.p)+n,o(Me,5,a*Cn),i,r.p)}else return L(gt,_t(r.p),Cn,ht,r.p)}),rs=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Nc,!1,{z:a,l:n/Ve|0,p:t});var i=Rc(p(Ec,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Uc;var n=e%Ve,a=p(Ec,n,e-n,r),t=e-n-Ve;return x(rs,r,t,e,P,a)}),Je=function(e){return!e.$},D=jv,Q=Fv,k=Rv,se=Vv,$a=Nv,as=Wv,De=Bv,co=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=jr("div"),ts=function(e){return{$:2,a:e}},Wc=$(function(e,r){return e}),Yc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),zr=function(e){return e},os=zr,mi=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,Tr=gv,Or=Cv,kn=$(function(e,r){return e<1?r:p(Or,e,Tr(r),r)}),za=Tv,Ma=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Gc=zv,di=ge(function(e,r,n,a,t){if(Ma(t)||o(is,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(mi,e,o(ka,c,t),u,r,n,a))}else return re(_e(mi,e,t,q,r,n,a))}),pi=U(function(e,r,n,a){if(Ma(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return x(di,e,o(kn,i,a),r,n,o(ka,i,a))}else return x(di,e,"/",r,n,a)}),bi=S(function(e,r,n){if(Ma(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return L(pi,e,re(o(kn,t+1,n)),r,o(ka,t,n))}else return L(pi,e,q,r,n)});$(function(e,r){if(Ma(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(bi,e,re(o(kn,a+1,r)),o(ka,a,r))}else return p(bi,e,q,r)});var cs=Pv,lo=function(e){},Dn=Rr,ls=Dn(0),Hc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Mn,e,r,Fe(m)):L(Hc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),pr=S(function(e,r,n){return L(Hc,e,r,0,n)}),ee=$(function(e,r){return p(pr,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=mt,uo=$(function(e,r){return o(fa,function(n){return Dn(e(n))},r)}),us=S(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Dn(o(e,a,t))},n)},r)}),vs=function(e){return p(pr,us(A),Dn(P),e)},$s=Kv,fs=$(function(e,r){var n=r;return cc(o(fa,$s(e),n))}),ss=S(function(e,r,n){return o(uo,function(a){return 0},vs(o(ee,fs(e),r)))}),ms=S(function(e,r,n){return Dn(0)}),ds=$(function(e,r){var n=r;return o(uo,e,n)});rr.Task=Qv(ls,ss,ms,ds);var ps=uc("Task"),vo=$(function(e,r){return ps(o(uo,e,r))}),bs=A$,gs=dv,sa={$:1},Ic=function(e){return{$:2,a:e}},Da={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},hs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Jc=function(e){var r=e.b;return o(We,Da,r)},tr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Jc(n):n;case 2:var i=a.a.cX;return(I(i+r.eJ,tn(n).db)>0?o(te,hs,tr(o(We,sa,t))):zr)(o(We,Ic({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yc,l.eA,Ke(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(We,Da,{B:T(v,s),ab:P,T:o(A,t.B,t.T)})}}),Oc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ys=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Ss=$(function(e,r){return Fe(p(ys,e,r,P))}),qc=S(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,y=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Ss,r-4,y))))):o(A,_,o(A,c,o(A,s,o(A,b,p(qc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var C=a.b,_=C.a;return h([_])}}),Cs=$(function(e,r){return p(qc,0,e,r)}),xs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(h([a]),t)),c=o(Cs,e,i),l=o(Oc,e,i);if(l.b){var u=l.a,v=l.b;return o(We,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var m=s.a,d=s.b;return o(We,sa,{B:m,ab:P,T:d})}else return r}}),ws=function(e){var r=e.b;return o(We,sa,r)},Ls=function(e){var r=e.b;return o(We,Ic({cX:tn(e).db}),r)},Ps=$(function(e,r){switch(e.$){case 1:return ws(r);case 2:return Jc(r);case 3:return Ls(r);default:var n=e.a;return o(xs,n,r)}}),Zc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Ts=$(function(e,r){return Ke(r,{av:e(r.av)})}),zs=function(e){return{$:3,a:e}},Ms=function(e){return{$:2,a:e}},Qc=$(function(e,r){return{$:0,a:e,b:r}}),Xc=$(function(e,r){return{$:1,a:e,b:r}}),Se=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},$o=Mv,ks=S(function(e,r,n){return o(tr,0/0,$o(o(e,r,n)))}),Kc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ds=_v,el=function(e){return p(Ds,A,P,e)},As=$(function(e,r){var n=o(Kc,function(a){return a!=="0"&&a!=="."},el(r));return ve(e&&n?"-":"",r)}),oe=tc,yt=pv,rl=Av,nl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(yt,"0",nl(t))}else{var i=nr(r);return i>=48&&i<57?o(yt,rl(i+1),n):"0"}},St=uv,Bs=mv,Aa=function(e){return o(yt,e,"")},al=S(function(e,r,n){return e<=0?n:p(al,e>>1,ve(r,r),e&1?ve(n,r):n)}),xn=$(function(e,r){return p(al,e,r,"")}),Ct=S(function(e,r,n){return ve(n,o(xn,e-Tr(n),Aa(r)))}),xt=hv,tl=function(e){var r=o(ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Fs=function(e){var r=o(ao,"e",oe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(tr,0,Gc(o(cs,"+",t)?o(kn,1,t):t)),c=tl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(tr,"0",o(Se,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Se,Zc(Aa),an(ve(o(xn,J(i),"0"),v))))):p(Ct,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Vs=S(function(e,r,n){if(St(n)||Bs(n))return oe(n);var a=n<0,t=tl(Fs(J(n))),i=t.a,c=t.b,l=Tr(i)+r,u=ve(o(xn,-l+1,"0"),p(Ct,l,"0",ve(i,c))),v=Tr(u),s=o(Me,1,l),m=o(e,a,p(Or,s,v,u)),d=p(Or,0,s,u),f=m?xt(o(tr,"1",o(Se,nl,an(xt(d))))):d,g=Tr(f),b=f==="0"?f:r<=0?ve(f,o(xn,J(r),"0")):I(r,Tr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):ve(i+".",p(Ct,r,"0",c));return o(As,a,b)}),ol=Vs($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Us=ks(ol),Es=S(function(e,r,n){var a=o(oo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Us,t,n)}),il=Xu,Ba=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(il,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Xr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return x(G,0,r,n,x(G,1,v,s,m,d),x(G,1,i,c,l,u))}else return x(G,e,i,c,x(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,y=f.d,C=f.e,d=a.e;return x(G,0,v,s,x(G,1,g,b,y,C),x(G,1,r,n,d,t))}else return x(G,e,r,n,a,t)}),wt=S(function(e,r,n){if(n.$===-2)return x(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(il,e,t);switch(u){case 0:return x(Xr,a,t,i,p(wt,e,r,c),l);case 1:return x(G,a,t,r,c,l);default:return x(Xr,a,t,i,c,p(wt,e,r,l))}}),bn=S(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return x(G,1,t,i,c,l)}else{var u=a;return u}}),Rs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,y=d.e,C=v.e;return x(G,0,f,g,x(G,1,n,a,x(G,0,i,c,l,u),b),x(G,1,s,m,y,C))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,C=w.e;return x(G,1,n,a,x(G,0,i,c,l,u),x(G,0,s,m,d,C))}else return e},gi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,y=f.d,C=f.e;return x(G,0,i,c,x(G,1,u,v,s,m),x(G,1,n,a,d,x(G,0,g,b,y,C)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var g=M.b,b=M.c,y=M.d,C=M.e;return x(G,1,n,a,x(G,0,i,c,w,d),x(G,0,g,b,y,C))}else return e},js=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return x(G,n,l,u,v,x(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,gi(r)}else break e;else return c.a,c.d,gi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,x(G,r,n,a,Kn(t),l);var u=cl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return x(Xr,v,s,m,Kn(d),f)}else return or}else return x(G,r,n,a,Kn(t),l)}else return or},gn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,x(G,n,a,t,o(gn,e,i),c);var u=cl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return x(Xr,v,s,m,o(gn,e,d),f)}else return or}else return x(G,n,a,t,o(gn,e,i),c);else return o(Ns,e,Yt(js,e,r,n,a,t,i,c))}),Ns=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=Rs(c);if(l.$===-1){var u=l.b,v=l.c;return x(Xr,n,u,v,i,Kn(c))}else return or}else return x(Xr,n,a,t,i,o(gn,e,c))}else return or}),Ws=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return x(G,1,a,t,i,c)}else{var l=n;return l}}),Yn=S(function(e,r,n){var a=r(o(Ba,e,n));if(a.$)return o(Ws,e,n);var t=a.a;return p(bn,e,t,n)}),Ys=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Yn,r,Se(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Xc,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Yn,r,Se(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Qc,T(i,c),p(Es,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Yn,r,Se(function(a){return a.$===3?zs(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,Se(function(a){return a.$===2?Ms(n):a}))}},Gs=function(e){return Ts(Ys(e))},Hs=$(function(e,r){return o(ee,Gs(e),r)}),Is=$(function(e,r){return Ke(r,{eA:o(Hs,e,r.eA)})}),Js=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Ke(a,{B:o(Zc,Is(e),a.B)}))}),Os=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),qs=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Ke(t,{B:o(Os,o(e,i.a,r),i)}))}),Zs=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Js,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(qs,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ps,l,a.G)})}}),Qs=$(function(e,r){return o(We,Da,{B:T(e,r(e)),ab:P,T:P})}),Xs=e$,hi=Xs(P),ma=Ev,wn=Uv,Ks=o$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Q))},o(k,"control",Q))},o(k,"down",Q))},o(k,"downs",ma(wn)))},o(k,"left",Q))},o(k,"pressedKeys",ma(wn)))},o(k,"right",Q))},o(k,"shift",Q))},o(k,"up",Q))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Q))},o(k,"isDown",Q))},o(k,"move",Q))},o(k,"rightDown",Q))},o(k,"rightUp",Q))},o(k,"up",Q))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),em=function(e){return{$:4,a:e}},rm={$:0},nm=ic,Ie=$(function(e,r){return o(fc,e,nm(r))}),H=Ie("className"),am=function(e){var r=e.b.B;return r.b},da=Ie("id"),tm=$$,pa=tm,om=f$,ne=om,im={$:1},cm=function(e){return{$:3,a:e}},lm=function(e){return{$:5,a:e}},_i=jr("a"),fo=jr("button"),yi=function(e){return o(Ie,"href",d$(e))},um=wr("clip-rule"),we=wr("d"),vm=wr("fill"),ll=vc("http://www.w3.org/2000/svg"),$m=ll("svg"),fm=wr("viewBox"),sm=o(s$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=$m(h([fm("0 0 24 24"),vm("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),sm("http://www.w3.org/2000/svg")])),mm=wr("fill-rule"),Le=ll("path"),Mr={eD:Ee(h([o(Le,h([we("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(h([o(Le,h([we("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(h([o(Le,h([we("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(h([o(Le,h([we("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([we("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(h([o(Le,h([we("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([we("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(h([o(Le,h([we("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(h([o(Le,h([we("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(h([o(Le,h([we("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(h([o(Le,h([we("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(h([o(Le,h([mm("evenodd"),um("evenodd"),we("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(h([o(Le,h([we("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(h([o(Le,h([we("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},dm=function(e){return{$:0,a:e}},ul=$c,vl=$(function(e,r){return o(ul,e,dm(r))}),so=function(e){return o(vl,"click",De(e))},Si=Ie("target"),pm=Ie("title"),Lt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return x(G,n,a,o(e,a,t),o(Lt,e,i),o(Lt,e,c))}),bm=dt,sr=bm,gm=function(e){return p(ro,S(function(r,n,a){return o(A,n,a)}),P,e)},hm=$(function(e,r){return{$:3,a:e,b:r}}),_m=$(function(e,r){return{$:2,a:e,b:r}}),ym=$(function(e,r){return{$:0,a:e,b:r}}),Sm=$(function(e,r){return{$:1,a:e,b:r}}),Fa=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Cm=L(Fa,0/255,0/255,0/255,1),xm=ic,$l=$(function(e,r){return o(fc,e,xm(r))}),wm=$l("checked"),Ze=fv,Lm=S(function(e,r,n){return ve(o(xn,e-Tr(n),Aa(r)),n)}),ba=nv,fl=function(e){var r=function(n){return n<10?Be(n):Aa(rl(87+n))};return e<16?r(e):ve(fl(e/16|0),r(o(ba,16,e)))},Pm=o(te,fl,o(Lm,2,"0")),mo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Tm=function(e){var r=mo(e),n=r.cM,a=r.cc,t=r.b5;return o(Pr,"",o(A,"#",o(ee,o(te,Ze,Pm),h([n*255,a*255,t*255]))))},Pt=Ie("htmlFor"),Tt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),zm=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Va=$(function(e,r){return p(pr,zm(e),P,r)}),sl=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Mm=E$,km=kv,Dm=$(function(e,r){if(r.$)return ye(e);var n=r.a;return $e(n)}),Am=U$,Bm=function(e){return o(Am,{ew:!1,fg:!1},e)},Ua=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Fm=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return $e(e(n))}}),Vm=function(e){return{$:2,a:e}},Um=function(e){return{$:0,a:e}},Em=function(e){return{$:1,a:e}},Ha=$(function(e,r){return nr(r)-nr(e)}),Ia=S(function(e,r,n){var a=nr(n);return I(nr(e),a)<1&&I(a,nr(r))<1}),Rm=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):ye(Em(r))},a=p(Ia,"0","9",r)?$e(o(Ha,"0",r)):p(Ia,"a","z",r)?$e(10+o(Ha,"a",r)):p(Ia,"A","Z",r)?$e(10+o(Ha,"A",r)):ye(Um(r));return o(ga,n,a)}),ml=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return $e(c+l*e)},o(ml,e,i))},o(Rm,e,t))}),jm=$(function(e,r){return 2<=e&&e<=36?o(ml,e,xt(r)):ye(Vm(e))}),Nm=jm(16),Wm=S(function(e,r,n){return L(Fa,e,r,n,1)}),dl=U(function(e,r,n,a){return L(Fa,e,r,n,a)}),An=rv,Ym=$(function(e,r){var n=o(An,10,e);return Ze(r*n)/n}),Gm=xv,Hm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=el(n);if(a.b&&!a.b.b){var t=a.a;return km(h([t,t]))}else return n};return o(te,Gm,o(te,function(n){return o(Se,function(a){return p(Mm,1,a,n)},Bm(e))},o(te,Tt(Ua),o(te,Se(function(n){return n.fG}),o(te,Se(Va(zr)),o(te,Dm("Parsing hex regex failed"),ga(function(n){var a=o(ee,o(te,r,o(te,Nm,Fm(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(dl,t/255,c/255,u/255,o(Ym,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(Wm,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ha=jr("input"),zt=jr("label"),Mt=Ie("name"),pl=$(function(e,r){return p(pr,k,r,e)}),Im=o(pl,h(["target","checked"]),Q),Jm=function(e){return o(vl,"change",o($a,e,Im))},Om=function(e){return T(e,!0)},qm=function(e){return{$:1,a:e}},Zm=$(function(e,r){return o(ul,e,qm(r))}),Qm=o(pl,h(["target","value"]),wn),po=function(e){return o(Zm,"input",o($a,Om,o($a,e,Qm)))},bl=Ie("max"),gl=Ie("min"),hl=function(e){return o(Ie,"step",e)},_a=Ie("type"),bo=Ie("value"),Ci=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(O,P,h([o(zt,h([Pt(r)]),h([o(O,h([H("relative w-full")]),h([o(O,h([H("inline-block")]),h([sr(r)])),o(O,h([H("inline-block float-right")]),h([sr(oe(n))]))]))])),o(ha,h([_a("range"),o(ne,"width","100%"),da(r),Mt(r),gl(oe(a)),bl(oe(t)),bo(oe(n)),hl(oe(i)),po(o(te,$o,o(te,tr(42),c)))]),P)]))},Xm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Km=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,h([H("h-12 py-4")]),h([o(zt,h([H("block"),Pt(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),da(e),Mt(e),Jm(hm(e)),wm(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ci({cf:e,cr:i,cv:t,cz:ym(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ci({cf:e,cr:i,cv:t,cz:o(te,Ze,Sm(e)),cV:1,c0:c});default:var c=r.a;return o(O,P,h([o(O,h([o(ne,"margin-bottom","6px")]),h([o(zt,h([Pt(e)]),h([sr(e)]))])),o(ha,h([_a("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),da(e),Mt(e),po(function(l){return o(_m,e,o(Xm,Cm,Hm(l)))}),bo(Tm(c))]),P)]))}}),ed=function(e){return o(O,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(O,h([H("text-lg pb-2")]),h([sr(e.fh)])),o(O,h([H("pl-2 pr-2")]),gm(o(Lt,Km,e.av)))]))},rd=function(e){return o(O,h([H("text-xs text-white60")]),o(ee,ed,e))},nd=function(e){return o(O,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(ol,3,tn(e).db))]))},ad=function(e){e.a;var r=e.b.T;return o(Se,function(n){return Ze(60/(tn(e).db-n))},o(Se,o(te,Kf,function(n){return n.db}),Ua(o(Oc,59,r))))},td=function(e){return o(O,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ad(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Be(n)+" Fps")])}())},od=function(e){return{$:0,a:e}},id=function(e){var r=e.b.T;return Fr(r)},cd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},ld=function(e){return o(ha,h([H("absolute w-full"),_a("range"),gl(Be(0)),bl(Be(cd(e)-1)),bo(Be(id(e))),hl(Be(1)),po(o(te,$o,o(te,tr(42),o(te,Ze,od))))]),P)},xi={$:1},wi={$:3},Li={$:2},kt=function(e){return!e.b},_l=$l("disabled"),Ja=S(function(e,r,n){return o(fo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),_l(e),so(r)]),h([sr("REC")]))}),Oa=S(function(e,r,n){return o(fo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),_l(e),so(n)]),h([o(O,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),ud=function(e){var r=e.a,n=e.b.ab;return o(O,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(Ja,!1,xi,"text-red-500 font-bold");case 1:return p(Ja,!1,Li,"text-white60 hover:text-white80 font-bold");default:return p(Ja,!0,Li,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Oa,kt(n),Mr.fq,wi);case 1:return p(Oa,kt(n),Mr.fq,wi);default:return p(Oa,!1,Mr.fp,xi)}}()]))},vd=function(e){return o(O,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([ld(e),ud(e),td(e),nd(e)]))},$d=function(e){var r=e.a;return yr(r,Da)},fd=$(function(e,r){var n=$d(r.G)?o(O,P,P):o(O,h([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fs.fU+.5*e.cS.fS)+"px"),o(ne,"top",oe(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(O,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Mr.fs]))]));return o(O,P,h([n]))}),sd=$(function(e,r){var n=o(fo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),so(im),pm("Distraction Free Mode")]),h([Mr.f0])),a=40,t=260,i=o(O,h([H("absolute w-8 bottom-12")]),h([o(_i,h([H("text-twitterBlue40 hover:text-twitterBlue"),yi("https://twitter.com/AzizErkalSelman"),Si("_blank")]),h([Mr.fN]))])),c=80,l=o(O,h([H("absolute w-8 bottom-2")]),h([o(_i,h([H("text-githubCat40 hover:text-githubCat"),yi("https://github.com/erkal/elm-3d-playground-exploration"),Si("_blank")]),h([Mr.eQ]))])),u=e.cS.fS>640?B(e.cS.eW,a+t,e.cS.fS-(a+t)):B(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(O,h([H("fixed w-10 h-10 p-1")]),h([n])):o(O,P,h([o(O,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),h([n,i,l])),o(O,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),h([o(pa,cm,rd(tn(r.G).eA))])),o(O,h([H("absolute bottom-0"),o(ne,"left",oe(s)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(m)+"px")]),h([o(pa,lm,vd(r.G))])),o(fd,e,r)]))}),md=S(function(e,r,n){var a=am(n.G),t=tn(n.G);return o(O,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",oe(t.cS.fS)+"px"),o(ne,"height",oe(t.cS.eW)+"px")]),h([o(O,h([H("fixed")]),h([o(pa,Wc(rm),o(e,t,a))])),o(O,h([da("gui")]),h([o(sd,t,n),o(pa,em,o(r,t,a))]))]))}),dd=He(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(Zs,r,i,u,v),hi)}),l=function(u){var v=o(Yc,n,u.e1);return T({aL:u.e1.cS.fS<500,G:o(Qs,v,a)},hi)};return bs({e0:l,fH:Wc(Ks(ts)),fO:c,fQ:o(md,e,t)})}),pd=U(function(e,r,n,a){return _e(dd,e,r,n,a,$(function(t,i){return o(O,P,P)}),S(function(t,i,c){return c}))}),bd=function(e){return{}},gd=S(function(e,r,n){return{av:n,e5:r,fh:e}}),yl=or,hd=function(e){return p(Mn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),yl,e)},_d=S(function(e,r,n){return p(gd,e,r,hd(n))}),qa=_d,ir=S(function(e,r,n){var a=r.a,t=r.b;return T(e,o(Qc,T(a,t),n))}),Pi=S(function(e,r,n){var a=r.a,t=r.b;return T(e,o(Xc,T(a,t),n))}),yd=h([p(qa,"Camera",!0,h([p(ir,"camera x",T(0,16),8),p(ir,"camera y",T(0,10),0),p(ir,"camera z",T(0,16),6)])),p(qa,"Parameters",!0,h([p(ir,"radius",T(0,6),1),p(Pi,"number of cubes",T(1,100),19),p(Pi,"number of waves",T(1,20),2),p(ir,"cube size",T(.1,4),1),p(ir,"cycle duration",T(1,10),5),p(ir,"wave height",T(.5,6),1.5)])),p(qa,"Colors and light",!0,h([p(ir,"saturation",T(0,1),.8),p(ir,"lightness",T(0,1),.7)]))]),Sd=$(function(e,r){return r}),go=$(function(e,r){return{$:0,a:e,b:r}}),Ue=function(e){var r=e;return J(r)},Za=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),fr=function(e){return e},Cd=fr({fU:-1,fY:0,c5:0}),xd=fr({fU:0,fY:-1,c5:0}),Sl=fr({fU:0,fY:0,c5:-1}),Cl=fr({fU:1,fY:0,c5:0}),ho=fr({fU:0,fY:1,c5:0}),_o=fr({fU:0,fY:0,c5:1}),mr=function(e){return e},pe=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),wd=He(function(e,r,n,a,t,i){var c=o(Za,n,i)?_o:Sl,l=o(Za,r,t)?ho:xd,u=o(Za,e,a)?Cl:Cd,v=B(Ue(o($r,e,a)),Ue(o($r,r,t)),Ue(o($r,n,i))),s=p(pe,o(Qa,e,a),o(Qa,r,t),o(Qa,n,i)),m=mr({cA:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),kr=function(e){var r=e;return r.fU},Dr=function(e){var r=e;return r.fY},Ar=function(e){var r=e;return r.c5},Ld=$(function(e,r){return _e(wd,kr(e),Dr(e),Ar(e),kr(r),Dr(r),Ar(r))}),Dt=S(function(e,r,n){return{fU:e,fY:r,c5:n}}),Pd=$(function(e,r){var n=r/2;return o(go,e,o(Ld,p(Dt,-n,-n,-n),p(Dt,n,n,n)))}),Ur=av,At=function(e){return e*Ur/180},Td=$(function(e,r){return o(Se,function(n){if(n.$)return 0;var a=n.b;return a},o(Ba,e,r.av))}),zd=$(function(e,r){return o(tr,0,Ua(o(Va,Td(e),r)))}),Md=$(function(e,r){return o(zd,e,r.eA)}),ur=Md,kd=$(function(e,r){return o(Se,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ba,e,r.av))}),Dd=$(function(e,r){return o(tr,0,Ua(o(Va,kd(e),r)))}),Ad=$(function(e,r){return o(Dd,e,r.eA)}),Ti=Ad,yo=function(e){return{$:5,a:e}},Bd=function(e){return yo(e)},Fd=U(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return L(Fa,f,d,m,a)}),Vd=S(function(e,r,n){return L(Fd,e,r,n,1)}),Bt=function(e){return{$:0,a:e}},xl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),wl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Xa=function(e){return p(wl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Bn=N$,Ud=function(e){var r=mo(e),n=r.cM,a=r.cc,t=r.b5;return p(Bn,Xa(n),Xa(a),Xa(t))},Ed=function(e){return p(xl,0,Bt(Ud(e)),Bt(0))},Ll=$(function(e,r){return{$:2,a:e,b:r}}),Pl=$(function(e,r){return{$:4,a:e,b:r}}),Tl=$(function(e,r){return{$:3,a:e,b:r}}),zl=$(function(e,r){return{$:1,a:e,b:r}}),Rd=S(function(e,r,n){return{fU:e,fY:r,c5:n}}),jd=function(e){var r=e;return r},So=function(e){var r=e;return jd(r.er)},Co=function(e){var r=e;return r.aK},on=function(e){var r=e;return r.cA},Fn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),Nr=function(e){var r=e;return r.c3},Wr=function(e){var r=e;return r.c4},Yr=function(e){var r=e;return r.c6},Nd=$(function(e,r){return mr({cA:o(Fn,e,on(r)),c3:Nr(r),c4:Wr(r),c6:Yr(r)})}),Wd=$(function(e,r){return{er:o(Nd,e,So(r)),aK:Co(r)}}),xo=$(function(e,r){return{eH:r,cA:e}}),Yd=$(function(e,r){var n=r;return o(xo,o(Fn,e,n.cA),n.eH)}),Gd=$(function(e,r){var n=r;return{k:o(Yd,e,n.k),e9:n.e9,fu:n.fu}}),wo=function(e){var r=e;return r},Hd=function(e){return e},Ml=$(function(e,r){var n=wo(r),a=n.a,t=n.b;return Hd(T(e(a),e(t)))}),Id=$(function(e,r){return o(Ml,Fn(e),r)}),Lo=function(e){var r=e;return r.ey},Po=function(e){var r=e;return r.fu},kl=$(function(e,r){return{ey:r,fu:Ue(e)}}),Jd=$(function(e,r){return o(kl,Po(r),o(Fn,e,Lo(r)))}),Dl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),Od=$(function(e,r){return o(Dl,Fn(e),r)}),To=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Rd,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(go,s,o(Wd,i,c));case 1:var s=r.a,l=r.b;return o(zl,s,o(Od,i,l));case 3:var s=r.a,u=r.b;return o(Tl,s,o(Jd,i,u));case 2:var s=r.a,v=r.b;return o(Ll,s,o(Gd,i,v));case 4:var s=r.a,m=r.b;return o(Pl,s,o(Id,i,m));default:var d=r.a;return yo(o(ee,To(B(n,a,t)),d))}}),qd=function(e){return To(B(0,e,0))},Zd=function(e){return To(B(0,0,e))},Kr=function(e){return e},Er=tv,en=ov,ea=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=en(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,g=s.fY*u,b=l*g,y=m*g,C=g*g,_=1-2*(f+C),w=s.c5*u,M=l*w,N=2*(y-M),R=2*(y+M),E=m*w,j=2*(E+b),W=2*(E-b),F=g*w,Z=2*(F-d),X=2*(F+d),ce=w*w,fe=1-2*(C+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+N*i.fY+j*i.c5,fY:R*i.fU+ie*i.fY+Z*i.c5,c5:W*i.fU+X*i.fY+_*i.c5}}),Vn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=en(c),v=a.cA,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,y=b.fU*u,C=l*y,_=y*y,w=b.fY*u,M=l*w,N=y*w,R=w*w,E=1-2*(_+R),j=b.c5*u,W=l*j,F=2*(N-W),Z=2*(N+W),X=y*j,ce=2*(X+M),fe=2*(X-M),ie=w*j,de=2*(ie-C),ke=2*(ie+C),xe=j*j,br=1-2*(R+xe),gr=1-2*(_+xe);return{fU:s.fU+br*m+F*d+ce*f,fY:s.fY+Z*m+gr*d+de*f,c5:s.c5+fe*m+ke*d+E*f}}),Qd=S(function(e,r,n){return mr({cA:p(Vn,e,r,on(n)),c3:p(ea,e,r,Nr(n)),c4:p(ea,e,r,Wr(n)),c6:p(ea,e,r,Yr(n))})}),Xd=S(function(e,r,n){return{er:p(Qd,e,r,So(n)),aK:Co(n)}}),Kd=$(function(e,r){var n=o(Vn,e,r),a=o(ea,e,r);return function(t){var i=t;return o(xo,n(i.cA),a(i.eH))}}),e0=S(function(e,r,n){var a=n;return{k:p(Kd,e,r,a.k),e9:a.e9,fu:a.fu}}),r0=S(function(e,r,n){return o(Ml,o(Vn,e,r),n)}),n0=S(function(e,r,n){return o(kl,Po(n),p(Vn,e,r,Lo(n)))}),a0=S(function(e,r,n){return o(Dl,o(Vn,e,r),n)}),Al=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(go,l,p(Xd,e,r,a));case 1:var l=n.a,t=n.b;return o(zl,l,p(a0,e,r,t));case 3:var l=n.a,i=n.b;return o(Tl,l,p(n0,e,r,i));case 2:var l=n.a,c=n.b;return o(Ll,l,p(e0,e,r,c));case 4:var l=n.a,u=n.b;return o(Pl,l,p(r0,e,r,u));default:var v=n.a;return yo(o(ee,o(Al,e,r),v))}}),Un={fU:0,fY:0,c5:0},zo=ho,t0=o(xo,Un,zo),o0=$(function(e,r){return p(Al,t0,Kr(e),r)}),i0=$(function(e,r){return(r-jc(r/e)*e)/e}),c0=function(e){return 2*Ur*e},l0=U(function(e,r,n,a){return e+(r-e)*(1+Er(c0(o(i0,n,a))))/2}),u0=function(e){var r=o(ur,"wave height",e),n=o(Ti,"number of waves",e),a=o(Ti,"number of cubes",e),t=o(ur,"cycle duration",e),i=function(c){var l=c/a,u=n*t*l;return o(o0,At(360)*l,o(qd,L(l0,-r,r,t,e.db+u),o(Zd,o(ur,"radius",e),o(Pd,Ed(p(Vd,l,o(ur,"saturation",e),o(ur,"lightness",e))),o(ur,"cube size",e)))))};return Bd(o(ee,i,o(Vr,0,a-1)))},v0=cv,hr=sv,$0=$(function(e,r){var n=e,a=r,t=a.c5-n.c5,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Me,J(c),o(Me,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,m=hr(s*s+v*v+u*u);return re({fU:s/m,fY:v/m,c5:u/m})}else return q}),Ka=function(e){return e},Mo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),ra=function(e){var r=e,n=o(Me,J(r.fU),o(Me,J(r.fY),J(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c5:a/c})}else return q},ya=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),f0=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c5*n.c5}),Bl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),s0=$(function(e,r){var n=e,a=r;return I(a,n)<0}),m0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),d0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c5*n.c5;return{fU:n.fU*t,fY:n.fY*t,c5:n.c5*t}}),p0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},qe=0,Fl={fU:0,fY:0,c5:0},b0=S(function(e,r,n){return o(Tt,function(a){var t=o(m0,o(d0,a,r),r);return o(Tt,function(i){var c=o(Mo,r,e),l=o(f0,n,c),u=o(Bl,qe,l)?c:o(s0,qe,l)?p0(c):Fl;return o(Se,function(v){return B(a,i,v)},ra(u))},ra(t))},ra(e))}),g0=function(e){var r=e,n=J(r.c5),a=J(r.fY),t=J(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=hr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(I(a,n)<1){var i=hr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},ko=function(e){var r=g0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return T(r,c)},qr=function(e){var r=e;return r},h0=$(function(e,r){var n=ko(e),a=n.a,t=n.b;return mr({cA:r,c3:a,c4:t,c6:e})}),_0=function(e){var r=o(ya,e.aR,e.dj),n=qr(e.ei),a=o(Mo,r,n),t=p(b0,r,n,a);if(t.$){var v=ra(r);if(v.$){var m=ko(e.ei),d=m.a,f=m.b;return mr({cA:e.dj,c3:f,c4:e.ei,c6:d})}else{var s=v.a;return o(h0,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return mr({cA:e.dj,c3:u,c4:l,c6:c})}},y0=function(e){return{$:0,a:e}},na=function(e){var r=e;return .5*r},S0=iv,C0=function(e){var r=e;return S0(r)},x0=function(e){var r=na(Ue(e.ej)),n=C0(r);return{cL:y0(n),c1:e.c1}},w0=function(e){var r=e.aR,n=e.dj,a=e.ei;return x0({ej:Kr(2*v0(.5)),c1:_0({dj:Ka(n),aR:Ka(r),ei:o(tr,ho,o($0,Un,Ka(a)))})})},L0=function(e){return e},Br=function(e){return e},P0=function(e){return Br(.01*e)},zi=function(e){return e},T0=function(e){return e},z0=function(e){return{$:0,a:e}},M0=z0,k0={$:3},D0=k0,A0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),B0=A0,F0=$(function(e,r){return r.b?p(pr,A,r,e):e}),Ye=function(e){return p(pr,F0,P,e)},Do=$(function(e,r){return Ye(o(ee,e,r))}),V0=function(e){return{$:1,a:e}},U0=V0,E0=function(e){return o(wr,"height",Be(e))},R0=function(e){return u$(m$(e))},j0=R0,N0=function(e){return{$:2,a:e}},W0=N0,Y0=function(e){return o(Pr,"",e)},G0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return Y0(h(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},H0=$(function(e,r){switch(r.$){case 0:return o(Mf,e,r);case 1:return o(kf,e,r);case 2:return o(Df,e,r);case 3:return o(Af,e,r);case 4:return o(Bf,e,r);default:return o(Ff,e,r)}}),I0=$(function(e,r){switch(r.$){case 0:return o(of,e,r);case 1:return o(cf,e,r);case 2:return o(lf,e,r);case 3:return o(uf,e,r);case 4:return o(vf,e,r);case 5:return o($f,e,r);case 6:return o(ff,e,r);case 7:return o(sf,e,r);default:return mf(e)}}),J0=S(function(e,r,n){return p(zf,e,r,n)}),Mi=function(e){var r=e;return r},cn=J$,et=L(cn,1,1,1,1),Qe=S(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),O0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),q0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(O0,n*a/t,n,n*(1-a-t)/t)}),Z0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ao=$(function(e,r){return Z0(o(q0,e,r))}),Vl=$(function(e,r){return{dp:yr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=K$,Q0=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},rt=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(cn,a.bX,a.bX,a.bX,i);return _e(t,e,c,Q0(a),a.dp,r,n)}),Ul=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Vl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(A,x(rt,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var y=t.b,C=o(A,x(rt,e,r,n,a,y),i.U);return{M:i.M,U:C,fB:i.fB};case 2:var _=t.a,w=o(A,x(rt,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(Mn,L(Ul,e,r,n,a),i,M)}}),X0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),El=X0,Bo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),K0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Bo,518,r,n,a)},ep=$(function(e,r){return{$:6,a:e,b:r}}),rp=ep,Rl=h([K0({V:1,W:0,Z:!1}),L(El,!1,!1,!1,!1),o(rp,0,1)]),rn=519,Fo=8,jl=15,Zr=7681,np={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=tf,ap=$(function(e,r){return{$:0,a:e,b:r}}),tp=ap({df:1,$7:0,dV:5}),Ae=R$,op=tp(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),ip={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},cp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Vo=S(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(cp,a,t,i)))}),Uo=function(e){return p(Vo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Eo=function(e){return x(ae,h([Uo(e),L(El,!1,!1,!1,!1)]),ip,np,op,{})},lp=Eo({a8:Zr,co:0,cN:Fo,bl:rn,c2:jl,bt:Zr,bu:Zr}),up=516,ki=5386,Ce=7680,vp=function(e){return o(An,2,e+4)},Nl=function(e){return Eo({a8:Ce,co:jl,cN:Fo,bl:up,c2:vp(e),bt:ki,bu:ki})},$p=S(function(e,r,n){return Ye(h([p(Qe,e,n,Rl),h([Nl(r),lp])]))}),fp=$(function(e,r){return Ye(o(Bc,$p(e),r))}),sp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Bo,513,r,n,a)},mp=sp({V:1,W:0,Z:!0}),dp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},pp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return dp(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},bp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Di=$(function(e,r){var n=e,a=r;return p(bp,32774,n,a)}),gp=1,Ai=771,hp=770,Ro=pp({bv:0,aH:o(Di,gp,Ai),by:0,bA:o(Di,hp,Ai),bF:0,bV:0}),Gr=h([mp,Ro]),_p=function(e){var r=e;return r.dO},yp=function(e){var r=e;return r.dP},Wl=function(e){var r=e;return r.dQ},Sp=function(e){var r=e;return r.dR},Cp=function(e){var r=e;return r.dS},Yl=function(e){var r=e;return r.dT},Gl=function(e){return B(o($r,Sp(e),_p(e)),o($r,Cp(e),yp(e)),o($r,Yl(e),Wl(e)))},Bi=function(e){var r=e;return on(r)},xp=function(e){return e},wp=function(e){return mr({cA:xp({fU:e.H,fY:e.I,c5:e.J}),c3:fr({fU:e.q,fY:e.r,c5:e.s}),c4:fr({fU:e.t,fY:e.u,c5:e.v}),c6:fr({fU:e.w,fY:e.x,c5:e.y})})},nt=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Hl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*d.fU+l*d.fY+u*d.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Il=$(function(e,r){return{cA:o(Hl,e,on(r)),c3:o(nt,e,Nr(r)),c4:o(nt,e,Wr(r)),c6:o(nt,e,Yr(r))}}),Sa=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Me,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),Lp=$(function(e,r){var n=Sa(r),a=Sa(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},Pp=function(e){var r=e;return B(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),Tp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(Ue(a)),c=na(Ue(n)),l=na(Ue(t)),u=Pp(r),v=u.a,s=u.b,m=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,m),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,m)}}),Fi=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,m=Ge(Yr(e)),d=J(l*m.fU)+J(c*m.fY)+J(i*m.c5),f=Ge(Wr(e)),g=J(l*f.fU)+J(c*f.fY)+J(i*f.c5),b=Ge(Nr(e)),y=J(l*b.fU)+J(c*b.fY)+J(i*b.c5),C=o(Tp,B(y,g,d),o(Hl,e,p(Dt,s,v,u)));if(a.$)return re(C);var _=a.a;return re(o(Lp,_,C))}),Ft=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 1:var c=t.a,l=L(Fi,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 2:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 3:var c=t.a,l=L(Fi,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 4:var u=t.a,f=e,g=r,b=L(Ft,e,r,n,u),y=i;e=f,r=g,n=b,a=y;continue e;default:var v=t.a,s=t.b,m=o(Il,wp(v),e),d=r*v.bX,f=e,g=r,b=L(Ft,m,d,n,h([s])),y=i;e=f,r=g,n=b,a=y;continue e}}else return n}),ln=W$,un=Y$,vn=G$,Jl=function(e){return{$:4,a:e}},zp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Jl(o(zp,e,P))},Mp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},kp=function(e){var r=e;return r},Vi=Eo({a8:Zr,co:0,cN:Fo,bl:rn,c2:255,bt:Zr,bu:Zr}),Dp=function(e){var r=e,n=o(Me,J(r.fU),o(Me,J(r.fY),J(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return qe},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),dn=T({bd:o(je,Pe,Pe),bK:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe)},L(cn,0,0,0,0)),le=$(function(e,r){var n=r;return e*n}),Ui=function(e){var r=e;return-r},Ol=514,ql=function(e){var r=e.Z,n=e.W,a=e.V;return L(Bo,515,r,n,a)},Zl=240,Ap=h([ql({V:1,W:0,Z:!0}),Uo({a8:Ce,co:Zl,cN:0,bl:Ol,c2:0,bt:Ce,bu:Ce}),Ro]),Bp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Ue(a),l=c,u=Ue(t),v=u,s=n.cL;if(s.$){var d=s.a;return St(v)?er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return St(v)?er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),Fp=function(e){return h([ql({V:1,W:0,Z:!0}),Uo({a8:Ce,co:Zl,cN:e,bl:Ol,c2:0,bt:Ce,bu:Ce}),Ro])},Vp=S(function(e,r,n){return Ye(o(ee,function(a){var t=a<<4,i=L(cn,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Qe,e,T(r,i),Fp(t))},o(Vr,1,o(An,2,n)-1)))}),Ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Qr=function(e){var r=e;return r},Up=ef,Ei=function(e){var r=e;return Ln(Yr(r))},Ql=Cl,Xl=_o,Ep={cA:Un,c3:Ql,c4:zo,c6:Xl},Ea=function(e){var r=e;return r},Rp=function(e){var r=Ea(on(e)),n=Ge(Yr(e)),a=Ge(Wr(e)),t=Ge(Nr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},jp=$(function(e,r){var n=r;return Rp(o(Il,n,e))}),Np=function(e){return o(jp,Ep,e)},Wp=function(e){var r=e;return r.c1},Yp=function(e){var r=e;return Nr(r)},Gp=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Hp=function(e){var r=e;return Wr(r)},Ip=function(e){var r=Wp(e.ev),n=mr({cA:Bi(r),c3:Yp(r),c4:Hp(r),c6:Ln(Ei(r))}),a=En(e.aP),t=a,i=L(Ft,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Np(r),u=o(le,.99,o(ue,Ue(e.aJ),Ui(Wl(c)))),v=Gl(c),s=v.a,m=v.b,d=v.c,f=Dp(p(Gp,s,m,d)),g=o(le,1.01,o(hn,f,Ui(Yl(c)))),b=o(Bp,e.ev,{eq:e.eq,eP:g,fi:u}),y=Up(b).dM,C=y?Ge(Ln(Ei(r))):Qr(Bi(r)),_=function(){var ie=e.bZ;switch(ie.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var de=ie.a;return T(3,de);case 4:var de=ie.a;return T(4,de);default:return T(5,0)}}(),w=_.a,M=_.b,N=e.bD,R=N,E=o(Ao,R,e.b$),j=E,W=er({dx:0,dy:C.fU,dz:ln(j),dA:e.ec,dB:0,dC:C.fY,dD:un(j),dE:kp(f),dF:0,dG:C.c5,dH:vn(j),dI:w,dJ:0,dK:y,dL:0,dM:M}),F=_e(Ul,W,l,b,Mp,t,{M:P,U:P,fB:P}),Z=e.bJ;switch(Z.$){case 0:var X=Z.a;return Ye(h([p(Qe,F.M,T(X,et),Gr),p(Qe,F.U,dn,Gr)]));case 1:var X=Z.a;return Ye(h([p(Qe,F.M,dn,Gr),h([Vi]),p(Qe,F.fB,X.bd,Rl),h([Nl(0)]),p(Qe,F.M,T(X,et),Ap),p(Qe,F.U,dn,Gr)]));default:var ce=Z.a,fe=Z.b;return Ye(h([p(Qe,F.M,T(fe,et),Gr),h([Vi]),o(fp,F.fB,ce),p(Vp,F.M,fe,Fr(ce)),p(Qe,F.U,dn,Gr)]))}},Jp=function(e){return o(wr,"width",Be(e))},Op=$(function(e,r){var n=h([U0(1),W0(0),M0(!0),L(B0,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return B(n,"0",1);case 1:return B(o(A,D0,n),"1",1);default:var M=w.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Mi(v),m=o(ne,"height",Be(s)+"px"),d=Mi(u),f=d/s,g=o(Do,function(w){return Ip({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(ne,"width",Be(d)+"px"),y=e.aI,C=y,_=G0(C);return p(j0,"div",h([o(ne,"padding","0px"),b,m]),h([T(i,p(J0,t,h([Jp(Ze(d*c)),E0(Ze(s*c)),b,m,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),qp=function(e){return o(Op,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kl=function(e){return e},Ri=Kl({fU:.31271,fY:.32902}),Zp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Ao,r.cd,r.b6),u=l;return{by:vn(u),ex:n,bF:un(u),cJ:0,bV:ln(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Qp=function(e){return e},Xp=function(e){return Qp(1.2*o(An,2,e))},at=function(e){return e},Kp={$:0},e1=Kp,eu=function(e){return e},ji=function(e){var r=e;return r},r1=function(e){e:for(;;){if(yr(e.e2,qe)&&yr(e.e3,qe))return Pe;if(o(Bl,Ue(e.e2),Ue(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=J(ji(e.e3)/Ur),a=J(ji(e.e2)/Ur),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Ao,eu(1),e.b6),v=u;return{by:a*vn(v),ex:!1,bF:a*un(v),cJ:n/a,bV:a*ln(v),cZ:3,fU:i,fY:c,c5:l}}}},Ni=function(e){return r1({b6:e.b6,e2:e.cd,e3:qe,ei:e.ei})},n1=function(e){var r=e;return r},ru=function(e){var r=p(wl,1667,25e3,n1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kl({fU:n,fY:a})},nu=function(e){return e},a1=ru(nu(12e3)),t1=ru(nu(5600)),o1=function(e){return{$:2,a:e}},i1=function(e){return o1(e)},c1=$(function(e,r){return{$:2,a:e,b:r}}),au=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},l1=function(e){var r=e;return r.ex},u1=au(dn.a),v1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(A,a,i),c):T(i,o(A,a,c))});return p(pr,n,T(P,P),r)}),$1=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},f1=K(function(e,r,n,a,t,i,c,l){var u=o(v1,l1,h([Hn(e),Hn(r),Hn(n),Hn(a)])),v=u.a,s=u.b;if(v.b){var m=ve(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,y=b.a,C=b.b,_=C.a;return o(c1,o(ee,$1,v),{bd:o(je,d,g),bK:o(je,y,_),bL:o(je,t,i),bM:o(je,c,l)})}else return u1}else return au({bd:o(je,e,r),bK:o(je,n,a),bL:o(je,t,i),bM:o(je,c,l)})}),s1=S(function(e,r,n){return Pa(f1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),m1=function(e){var r=o(Zp,T0(e.fB),{b6:t1,eH:e.fJ,cd:at(8e4)}),n=Ni({b6:a1,cd:at(2e4),ei:e.ei}),a=Ni({b6:Ri,cd:at(15e3),ei:Ln(e.ei)}),t=p(s1,r,n,a);return qp({b0:i1(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Xp(15),bJ:t,bZ:e1,b$:Ri})},tu=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),d1=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ou=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),iu=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),p1=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),b1=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),g1=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),jo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(g1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(tu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(d1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(b1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(iu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(p1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},No={$:0},h1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),m=o(me,s.dR,e),d=o(ue,s.dO,r),f=o(me,s.dS,n),g=o(ue,s.dP,a),b=o(me,s.dT,t),y=o(ue,s.dQ,i),C=c,_=v;e=m,r=d,n=f,a=g,t=b,i=y,c=C,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),_1=S(function(e,r,n){var a=Sa(e(r));return Pa(h1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),tt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),cu=function(e){return o(tt,e.dO,e.dR)&&o(tt,e.dP,e.dS)&&o(tt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},lu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=kr(n),c=Dr(n),l=Ar(n),u=kr(a),v=Dr(a),s=Ar(a),m=kr(t),d=Dr(t),f=Ar(t);return cu({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,d)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,s,f))})},uu=H$,Te=function(e){return uu(Ea(e))},vu=function(e){var r=e;return r},Ra=function(e){return uu(vu(e))},y1=$(function(e,r){var n=e,a=r,t=o(Me,J(a.fU),o(Me,J(a.fY),J(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return Fl}),S1=y1(eu(1)),$u=S(function(e,r,n){var a=o(ya,r,n),t=o(ya,e,r);return S1(o(Mo,a,t))}),C1=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Ra(p($u,n,a,t));return B({o:i,bT:Te(n)},{o:i,bT:Te(a)},{o:i,bT:Te(t)})},x1=$(function(e,r){return{$:2,a:e,b:r}}),fu=x1({df:3,$7:0,dV:4}),w1=function(e){if(e.b){var r=e.a,n=e.b,a=fu(o(ee,C1,e)),t=p(_1,lu,r,n);return L(tu,t,e,a,0)}else return No},Re=S(function(e,r,n){return B(e,r,n)}),su=function(){var e=Br(1),r=Br(1),n=Br(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(pe,i,t,a),l=o(le,.5,e),u=p(pe,i,t,l),v=o(le,.5,r),s=p(pe,i,v,a),m=p(pe,i,v,l),d=o(le,.5,n),f=p(pe,d,t,a),g=p(pe,d,v,a),b=p(pe,d,t,l),y=p(pe,d,v,l);return jo(w1(h([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,y),p(Re,u,y,m),p(Re,f,g,y),p(Re,f,y,b),p(Re,c,m,s),p(Re,c,u,m),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,y,g),p(Re,s,m,y)])))}(),In={$:0},L1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),P1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ra(p($u,u,l,c)),s={o:v,bT:Te(u)},m={o:v,bT:Te(l)},d={o:v,bT:Te(c)};return o(A,s,o(A,m,o(A,d,n)))}),Wo=function(e){var r=e;return r.D},T1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Vt=4294967295>>>32-Cn,Ut=qu,z1=S(function(e,r,n){e:for(;;){var a=Vt&r>>>e,t=o(Ut,a,n);if(t.$){var v=t.a;return o(Ut,Vt&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),M1=function(e){return e>>>5<<5},k1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,M1(n))>-1?re(o(Ut,Vt&e,i)):re(p(z1,a,e,t))}),Yo=function(e){var r=e;return r.ah},ot=$(function(e,r){return o(k1,e,Yo(r))}),D1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(T1,S(function(c,l,u){return B(c,l,u)}),o(ot,a,e),o(ot,t,e),o(ot,i,e))};return o(Va,r,Wo(e))},A1=S(function(e,r,n){e:for(;;){var a=o(io,Ve,e),t=a.a,i=a.b;if(I(_t(t),Ve)<0)return o(Nc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(A1,e,P,0):Uc},B1=S(function(e,r,n){return e(r(n))}),F1=$(function(e,r){return!o(Kc,o(B1,gs,e),r)}),V1=$(function(e,r){return p(pr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),U1=function(e){var r=e.a;return r},mu=$(function(e,r){var n=U1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(F1,a,r)?{D:r,ah:e}:{D:o(V1,a,r),ah:e}}),E1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=E1({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Qr(r),a=Qr(e);return T(B(a.fU,a.fY,a.c5),B(n.fU,n.fY,n.c5))}),Wi=p(Bn,0,0,0),it=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ba,o(ta,e,r),t);if(v.$){var m={o:Wi,bT:Te(r)},d={o:Wi,bT:Te(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),R1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,y=e,C=r,_=v,w=a+3,M=_e(it,s,d,f,b,r,_e(it,m,s,g,f,r,_e(it,d,m,b,g,r,t)));e=y,r=C,n=_,a=w,t=M;continue e}else{var N=t,R=N.a,E=N.b;return T(R,Fe(E))}}),j1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,y=p(bn,o(ta,d,s),f,p(bn,o(ta,s,m),g,p(bn,o(ta,m,d),b,t))),C=o(A,B(b,g,f),a),_=e,w=v,M=n+3,N=C,R=y;e=_,r=w,n=M,a=N,t=R;continue e}else return B(a,t,n)}),Lr=S(function(e,r,n){var a=D1(n),t=p(pr,P1(r),P,a),i=x(j1,r,a,0,P,yl),c=i.a,l=i.b,u=i.c,v=x(R1,r,l,a,0,B(c,P,u)),s=v.a,m=v.b,d=kt(m)?t:ve(t,m);return p(L1,e,o(mu,Go(d),s),o(Rn,d,s))}),Et=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Vr,0,Fr(e)-1)),ah:Go(Ye(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,zr,Et(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,zr,Et(n));case 3:var a=e.a,t=e.b;return p(Lr,a,zr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return In;case 9:return In;default:return In}},Yi=du(su),pu={$:0},z=pu,be=$(function(e,r){return{$:1,a:e,b:r}}),N1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},W1=1029,Y1=function(e){return{$:5,a:e}},bu=function(e){var r=e;return Y1(r)},G1=bu(W1),H1=1028,I1=bu(H1),ze=S(function(e,r,n){return r===1?e?o(A,G1,n):o(A,I1,n):n}),gu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ct=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,m){return x(ae,p(ze,l,a,m),gu,N1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Ho={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,m){return x(ae,p(ze,l,a,m),hu,Ho,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),_u=$(function(e,r){return{$:3,a:e,b:r}}),J1={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},O1=U(function(e,r,n,a){return o(_u,n,K(function(t,i,c,l,u,v,s,m){return x(ae,m,yu,J1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Io={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},jn=function(e){var r=e;return r},ja=I$,lr=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,m,d){return x(ae,p(ze,u,t,d),hu,Io,a,{aN:o(ja,jn(r),e),b:l,c,d:s,e:i,f:v})}))}),q1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Z1=ge(function(e,r,n,a,t){return o(_u,a,K(function(i,c,l,u,v,s,m,d){return x(ae,d,yu,q1,t,{aN:o(ja,jn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},Cu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return x(ae,p(ze,l,a,m),Cu,Su,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},wu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Q1=He(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return x(ae,p(ze,v,i,f),wu,xu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Lu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},X1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(m,d,f,g,b,y,C,_){var w=C.a,M=C.b;return x(ae,p(ze,g,s,_),wu,Lu,v,{b4:e,b7:r,b8:i,b9:a,P:M,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cu:t,b:f,c:d,aW:c,d:y,cR:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Pu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},On=He(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return x(ae,p(ze,v,i,f),Cu,Pu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d:m,cQ:r,e:c,f:s})}))}),K1=function(e){return{$:0,a:e}},Gi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),e3=function(e){return L(cn,ln(e),un(e),vn(e),1)},Jo=L(cn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Jo)}else{var n=r.a;return T(e,e3(n))}}),Tu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Gi,T(t,Jo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Gi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,K1(a)}}),r3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),n3=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),a3=function(e){return o(Ae,e,1)},Rt=o(Ae,0,0),Hr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Rt)}else{var n=r.a;return T(e,a3(n))}}),zu=U(function(e,r,n,a){var t=L(n3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(qn,T(u,Jo),o(Hr,u,r),o(Hr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(qn,o(oa,u,e),T(u,Rt),o(Hr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(qn,o(oa,u,e),o(Hr,u,r),T(u,Rt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(qn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(r3,i,c,l)}}),t3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},lt=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,m,d){return x(ae,p(ze,u,t,d),gu,t3,a,{b1:jn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Mu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},o3=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return x(ae,p(ze,l,a,m),Mu,xu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),i3=Wt(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,m,d,f,g,b,y){var C=b.a,_=b.b;return x(ae,p(ze,d,u,y),Mu,Lu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:m,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Tn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),c3=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},l3=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},u3=function(e){var r=e;return p(Tn,r.dT,r.dQ,.5)},v3=function(e){return p(pe,c3(e),l3(e),u3(e))},Y=function(e){var r=Gl(e),n=r.a,a=r.b,t=r.c;return{ey:Ea(v3(e)),eS:n/2,eT:a/2,eU:t/2}},Oo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(ct,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ct,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ct,l,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(O1,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return x(lt,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(lt,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(lt,l,v,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(lr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return x(lr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return x(lr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(Z1,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,R=e.c,m=o(Tu,s,R);if(m.$){var g=m.a,b=g.a;g.b;var y=m.b,C=y.a,_=y.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(o3,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Q1,b,C,_,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var d=m.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(Jn,d,Y(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(Jn,d,Y(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(Jn,d,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Jn,d,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var w=e.b,M=e.c,N=e.d,R=e.e,E=L(zu,w,M,N,R);if(E.$){var Z=E.a,X=Z.a,ce=Z.b,fe=E.b,ie=fe.a,de=fe.b,ke=E.c,xe=ke.a,br=ke.b,gr=E.d,C=gr.a,_=gr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Gu(i3,X,ce,ie,de,xe,br,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return X1(X)(ce)(ie)(de)(xe)(br)(C)(_)(Y(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=E.a,W=E.b,F=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ut=function(e){var r=e;return r.fU},vt=function(e){var r=e;return r.fY},$t=function(e){var r=e;return r.c5},$3=function(e){var r=e,n=$t(r.c6),a=vt(r.c6),t=ut(r.c6),i=$t(r.c4),c=vt(r.c4),l=ut(r.c4),u=$t(r.c3),v=vt(r.c3),s=ut(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},f3=function(e){var r=Ea(on(e)),n=Ge(Yr(e)),a=Ge(Wr(e)),t=Ge(Nr(e));return{dp:$3(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),ku=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Vl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Du=$(function(e,r){return o(ku,f3(e),r)}),Na=function(e){return{$:2,a:e}},s3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),m3=q$,d3=O$,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=d3(a),g=f.fU,b=f.fY,y=f.c5,C=f.em,_=m3({em:C,fU:g*s,fY:b*m,c5:y*d});return Pa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},jt=$(function(e,r){switch(r.$){case 0:return pu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(jt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(s3,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Na(o(Hi,e,i));default:var c=r.a;return Jl(o(ee,jt(e),c))}}),qo=$(function(e,r){var n=r;return o(jt,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Au=7683,Bu=7682,p3=p(Vo,{co:0,cN:0,c2:15},{a8:Ce,bl:rn,bt:Ce,bu:Au},{a8:Ce,bl:rn,bt:Ce,bu:Bu}),b3=p(Vo,{co:0,cN:0,c2:15},{a8:Ce,bl:rn,bt:Ce,bu:Bu},{a8:Ce,bl:rn,bt:Ce,bu:Au}),Qo=$(function(e,r){return e?o(A,b3,r):o(A,p3,r)}),g3={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},h3=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return x(ae,o(Qo,i,v),g3,Zo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Ca=function(e){var r=h3(e);if(r.$)return z;var n=r.a;return Na(n)},_3=U(function(e,r,n,a){var t=o(Oo,n,su),i=function(){var s=T(e,r);return s.a?s.b?En(h([t,Ca(Yi)])):t:s.b?Ca(Yi):z}(),c=Co(a),l=c.a,u=c.b,v=c.c;return o(Du,So(a),o(qo,B(l,u,v),i))}),y3=$(function(e,r){return L(_3,!0,!0,e,r)}),Fu=$(function(e,r){return{$:0,a:e,b:r}}),S3=function(e){var r=mo(e),n=r.cM,a=r.cc,t=r.b5;return p(Bn,n,a,t)},C3=function(e){return o(Fu,0,Bt(S3(e)))},x3=function(e){var r=e;return r.k},yn=function(e){var r=e;return Er(r)},w3=$(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fU:Er(r),fY:en(r)}},L3=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ra(a),bT:Te(n)},r)}),P3=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=vn(l.bT),s=un(l.bT),m=ln(l.bT),d=o(aa,e,m),f=o(Me,r,m),g=o(aa,n,s),b=o(Me,a,s),y=o(aa,t,v),C=o(Me,i,v),_=u;e=d,r=f,n=g,a=b,t=y,i=C,c=_;continue e}else return cu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Vu=$(function(e,r){var n=vn(e.bT),a=un(e.bT),t=ln(e.bT);return Yt(P3,t,t,a,a,n,n,r)}),T3=function(e){var r=p(zc,L3,P,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Wo(e)),i=o(Vu,n,a);return L(ou,i,e,t,0)}else return No},Ji=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),xa=function(e){var r=e;return en(r)},Nt=function(e){return Kr(2*Ur*e)},z3=zr,Oi=z3({cA:Un,c3:Ql,c4:zo}),Uu=function(){var e=72,r=o(w3,e,Nt(1)),n=Br(1),a=qr(_o),t=qr(Sl),i=Br(1),c=o(le,.5,i),l=p(pe,qe,qe,c),u=o(le,-.5,i),v=p(pe,qe,qe,u),s=function(f){var g=o(le,f,r),b=qr(o(Ji,Oi,Ii(g))),y=o(le,yn(g),n),C=o(le,xa(g),n),_=p(pe,y,C,c),w=p(pe,y,C,u),M=o(ba,e,f+1),N=o(le,M,r),R=qr(o(Ji,Oi,Ii(N))),E=o(le,yn(N),n),j=o(le,xa(N),n),W=p(pe,E,j,u),F=p(pe,E,j,c);return h([B({o:t,bT:v},{o:t,bT:W},{o:t,bT:w}),B({o:b,bT:w},{o:R,bT:W},{o:R,bT:F}),B({o:b,bT:w},{o:R,bT:F},{o:b,bT:_}),B({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},m=o(ee,s,o(Vr,0,e-1)),d=Et(Ye(m));return jo(T3(d))}(),qi=du(Uu),M3=function(e){var r=e;return r.eH},k3=function(e){var r=e;return r.cA},D3=function(e){var r=M3(e),n=ko(r),a=n.a,t=n.b;return mr({cA:k3(e),c3:a,c4:t,c6:r})},A3=function(e){var r=e;return r.e9},B3=function(e){var r=e;return r.fu},F3=U(function(e,r,n,a){var t=D3(x3(a)),i=o(Oo,n,Uu),c=function(){var m=T(e,r);return m.a?m.b?En(h([i,Ca(qi)])):i:m.b?Ca(qi):z}(),l=B3(a),u=l,v=A3(a),s=v;return o(Du,t,o(qo,B(u,u,s),c))}),V3=$(function(e,r){return L(F3,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return er({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Zn=fu(h([B({cY:0},{cY:1},{cY:2})])),U3=$(function(e,r){var n=lu(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,K(function(_,w,M,N,R,E,j,W){return x(ae,p(ze,N,0,W),Zi,Ho,Zn,{aw:t,b:M,c:w,d:E,e:_,bq:pn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,K(function(_,w,M,N,R,E,j,W){return x(ae,p(ze,N,0,W),Zi,Io,Zn,{aN:o(ja,jn(c),i),b:M,c:w,d:E,e:_,bq:pn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Tu,l,f);if(u.$)return z;var v=u.a;return o(be,a,K(function(_,w,M,N,R,E,j,W){var F=j.a,Z=j.b;return x(ae,p(ze,N,0,W),Qi,Su,Zn,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cp:v,b:M,c:w,d:E,e:_,bq:pn(r),f:R})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=L(zu,s,m,d,f);if(g.$)return z;var b=g.a,y=g.b,C=g.c;return o(be,a,K(function(_,w,M,N,R,E,j,W){var F=j.a,Z=j.b;return x(ae,p(ze,N,0,W),Qi,Pu,Zn,{b3:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,ct:C,b:M,c:w,d:E,cQ:y,e:_,bq:pn(r),f:R})}))}}),E3=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Rn,e,r)}(),R3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Xi=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return x(ae,o(Qo,t,u),R3,Zo,E3,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},j3=U(function(e,r,n,a){var t=o(U3,n,a),i=T(e,r);return i.a?i.b?En(h([t,Xi(a)])):t:i.b?Xi(a):z}),N3=$(function(e,r){return L(j3,!0,!0,e,r)}),W3=$(function(e,r){var n=Ar(r),a=Ar(e),t=Dr(r),i=Dr(e),c=kr(r),l=kr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),Y3=function(e){var r=wo(e),n=r.a,a=r.b;return o(W3,n,a)},Ki={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},G3=$(function(e,r){return{$:1,a:e,b:r}}),H3=G3({df:2,$7:0,dV:1}),ec=H3(h([T({dw:0},{dw:1})])),I3=$(function(e,r){var n=Y3(r),a=Y(n),t=wo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,K(function(v,s,m,d,f,g,b,y){return x(ae,y,Ki,Ho,ec,{aw:l,du:Te(c),dv:Te(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,K(function(s,m,d,f,g,b,y,C){return x(ae,C,Ki,Io,ec,{aN:o(ja,jn(u),l),du:Te(c),dv:Te(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return z;default:return z}}),J3=$(function(e,r){return o(I3,e,r)}),Qn=function(e){return Kr(Ur*(e/180))},rc=$(function(e,r){var n=e,a=r;return n/a}),O3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(yr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),nc=$(function(e,r){return e<1?P:x(O3,0,e,e,r,P)}),q3=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ra(a),bT:Te(n),L:o(Ae,c,l)},r)}),Z3=function(e){var r=p(zc,q3,P,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Wo(e)),i=o(Vu,n,a);return L(iu,i,e,t,0)}else return No},Eu=$(function(e,r){var n=e,a=r,t=Er(a);return{fU:t*Er(n),fY:t*en(n),c5:en(a)}}),Q3=function(){var e=Br(1),r=72,n=o(Vr,0,r-1),a=o(nc,r,o(Tn,qe,Nt(1))),t=to(r/2),i=o(Vr,0,t-1),c=o(nc,t,o(Tn,Qn(90),Qn(-90))),l=Go(Ye(o(ee,function(s){return o(ee,function(m){return{o:qr(o(Eu,s,m)),bT:p(pe,o(le,yn(m)*yn(s),e),o(le,yn(m)*xa(s),e),o(le,xa(m),e)),L:T(o(rc,s,Nt(1)),o(rc,o(hn,Qn(90),m),Qn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Ye(o(ee,function(s){return Ye(o(ee,function(m){var d=o(u,s+1,m),f=o(u,s,m),g=o(u,s+1,m+1),b=o(u,s,m+1);return h([B(b,g,d),B(b,d,f)])},i))},n));return jo(Z3(o(mu,l,v)))}(),wa=72,Xn=2*wa,X3=$(function(e,r){e:for(;;){var n=Xn+1,a=o(ba,Xn,2*e+3),t=o(ba,Xn,2*e+2),i=2*e+1,c=2*e,l=Xn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),K3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),eb=$(function(e,r){e:for(;;){var n=p(K3,0,2*Ur,e/wa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),rb=function(){var e=o(eb,wa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(X3,wa-1,P);return o(Rn,e,r)}(),nb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ac=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return x(ae,o(Qo,!0,u),nb,Zo,rb,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},ab=function(e){var r=vu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},tb=$(function(e,r){return o(ku,ab(e),r)}),ob=U(function(e,r,n,a){var t=o(Oo,n,Q3),i=function(){var u=T(e,r);return u.a?u.b?En(h([t,ac()])):t:u.b?ac():z}(),c=Po(a),l=c;return o(tb,o(ya,Un,Lo(a)),o(qo,B(l,l,l),i))}),ib=$(function(e,r){return L(ob,!0,!0,e,r)}),cb=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),lb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),ub=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Fu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(cb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(xl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return x(lb,n,a,t,i,c)}},vb=ub,Ru=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(y3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(N3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(ib,vb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(V3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(J3,C3(c),l)]);default:var u=e.a;return o(Do,Ru,u)}},$b=function(e){return o(Do,Ru,e)},fb=$(function(e,r){return m1({aI:L0(e.es),ev:e.ev,aJ:P0(.5),ca:e.ca,aK:T(zi(Ze(e.cS.fS)),zi(Ze(e.cS.eW))),aP:$b(r),fB:!0,fJ:o(Eu,Kr(e.fI),Kr(e.fK)),ei:Xl})}),sb=$(function(e,r){return o(fb,{es:L(dl,0,0,0,0),ev:w0({dj:{fU:o(ur,"camera x",e),fY:o(ur,"camera y",e),c5:o(ur,"camera z",e)},aR:{fU:0,fY:0,c5:0},ei:{fU:0,fY:1,c5:0}}),ca:e.ca,cS:e.cS,fI:-At(135),fK:-At(45)},h([u0(e)]))}),mb=L(pd,sb,Sd,yd,bd);const db={Main:{init:mb(o(D,function(e){return De({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Q))},o(k,"control",Q))},o(k,"down",Q))},o(k,"downs",ma(wn)))},o(k,"left",Q))},o(k,"pressedKeys",ma(wn)))},o(k,"right",Q))},o(k,"shift",Q))},o(k,"up",Q))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Q))},o(k,"isDown",Q))},o(k,"move",Q))},o(k,"rightDown",Q))},o(k,"rightUp",Q))},o(k,"up",Q))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},pb=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},bb=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},gb=db.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});bb();pb(gb);
