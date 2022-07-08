const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function xr(e,r,n){return n.a=e,n.f=r,n}function $(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return xr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return xr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return xr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function za(e){return xr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return xr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return xr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ht(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ka(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ou=[];function Ju(e){return e.length}var qu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,x(n,r)}),Xu=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function rn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=ft(e,r,0,a);t&&(n=a.pop());t=ft(n.a,n.b,0,a));return t}function ft(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&rn(5),!1;if(n>100)return a.push(x(e,r)),!0;e.$<0&&(e=bi(e),r=bi(r));for(var t in e)if(!ft(e[t],r[t],n+1,a))return!1;return!0}$(yr);$(function(e,r){return!yr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var ev=$(function(e,r){var n=I(e,r);return n<0?Ac:n?Nf:Dc}),zn=0;function x(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function je(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var z={$:0};function rr(e,r){return{$:1,a:e,b:r}}var rv=$(rr);function _(e){for(var r=z,n=e.length;n--;)r=rr(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return _(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ta(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return _(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Dc?0:t===Ac?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var av=$(Math.pow);$(function(e,r){return r%e});var tv=$(function(e,r){var n=r%e;return e===0?rn(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin,lv=Math.tan,uv=Math.atan;$(Math.atan2);function vv(e){return e}function $v(e){return e===1/0||e===-1/0}var fv=Math.ceil,sv=Math.floor,dv=Math.round,mv=Math.sqrt,ai=Math.log,pv=isNaN;function bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ee(55296<=r&&r<=56319?x(e[0]+e[1],e.slice(2)):x(e[0],e.slice(1)))}$(function(e,r){return e+r});function _v(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function wv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var yv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),xv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),Cv=S(function(e,r,n){return n.slice(e,r)});function Pv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Lv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),zv=$(function(e,r){return r.indexOf(e)>-1}),kv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Tv=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function ic(e){return e+""}function Mv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ee(n==45?-r:r)}function Dv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ee(r):q}function Av(e){return Ta(e).join("")}function Bv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Fv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Uv(e){return{$:0,a:e}}function It(e){return{$:2,b:e}}var Vv=It(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Rv=It(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),Ev=It(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Yv=$(function(e,r){return{$:10,b:r,h:e}}),Gv=$(function(e,r){return Sr(e,[r])}),Wv=S(function(e,r,n){return Sr(e,[r,n])});B(function(e,r,n,a){return Sr(e,[r,n,a])});ge(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});za(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ee(e,n)}catch(a){return we(o(ao,"This is not valid JSON! "+a.message,r))}});var cc=$(function(e,r){return Ee(e,r)});function Ee(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return jn(r)?ti(e.b,r,_):Ze("a LIST",r);case 4:return jn(r)?ti(e.b,r,Hv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=Ee(e.b,r[n]);return Ie(v)?v:we(o(gi,n,v.a));case 7:var a=e.e;if(!jn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ee(e.b,r[a]);return Ie(v)?v:we(o(Bc,a,v.a));case 8:if(typeof r!="object"||r===null||jn(r))return Ze("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=Ee(e.b,r[i]);if(!Ie(v))return we(o(gi,i,v.a));t=rr(x(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ee(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ee(e.b,r);return Ie(v)?Ee(e.h(v.a),r):v;case 11:for(var s=z,d=e.g;d.b;d=d.b){var v=Ee(d.a,r);if(Ie(v))return v;s=rr(v.a,s)}return we(Yf(Fe(s)));case 1:return we(o(ao,e.a,r));case 0:return ue(e.a)}}function ti(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ee(e,r[i]);if(!Ie(c))return we(o(Bc,i,c.a));t[i]=c.a}return ue(n(t))}function jn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Hv(e){return o(os,e.length,function(r){return e[r]})}function Ze(e,r){return we(o(ao,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&oi(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return oi(e.g,r.g)}}function oi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function lc(e){return e}S(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function Ov(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var st=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Jv(e){return{$:5,b:e}}var qv=0;function Ot(e){var r={$:0,e:qv++,f:e,g:null,h:[]};return Jt(r),r}function uc(e){return sr(function(r){r(Br(Ot(e)))})}function vc(e,r){e.h.push(r),Jt(e)}var Zv=$(function(e,r){return sr(function(n){vc(e,r),n(Br(zn))})}),Ha=!1,ii=[];function Jt(e){if(ii.push(e),!Ha){for(Ha=!0;e=ii.shift();)Xv(e);Ha=!1}}function Xv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Jt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return qt(r,a,e.e4,e.fM,e.fF,function(){return function(){}})});function qt(e,r,n,a,t,i){var c=o(cc,e,r?r.flags:void 0);Ie(c)||rn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),li(l,b.b,t(v))}return li(l,u.b,t(v)),d?{ports:d}:{}}var Qe={};function Qv(e,r){var n;for(var a in Qe){var t=Qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=e$(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function e$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(st,l,Jv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ot(o(st,l,e.b))}var r$=$(function(e,r){return sr(function(n){e.g(r),n(Br(zn))})});$(function(e,r){return o(Zv,e.h,{$:0,a:r})});function $c(e){return function(r){return{$:1,k:e,l:r}}}function n$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ci=[],Ia=!1;function li(e,r,n){if(ci.push({p:e,q:r,r:n}),!Ia){Ia=!0;for(var a;a=ci.shift();)a$(a.p,a.q,a.r);Ia=!1}}function a$(e,r,n){var a={};ca(!0,r,a,null),ca(!1,n,a,null);for(var t in e)vc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ca(e,r,n,a){switch(r.$){case 1:var t=r.k,i=t$(e,t,a,r.l);n[t]=o$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ca(e,c.a,n,a);return;case 3:ca(e,r.o,n,{s:r.n,t:a});return}}function t$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Qe[r].e:Qe[r].f;return o(i,t,a)}function o$(e,r,n){return n=n||{i:z,j:z},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function i$(e){Qe[e]&&rn(3)}$(function(e,r){return r});function c$(e,r){return i$(e),Qe[e]={f:l$,u:r,a:u$},$c(e)}var l$=$(function(e,r){return function(n){return e(r(n))}});function u$(e,r){var n=z,a=Qe[e].u,t=Br(null);Qe[e].b=t,Qe[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(cc,a,c);Ie(l)||rn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var la,ir=typeof document!="undefined"?document:{};function Zt(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var fc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),Fr=fc(void 0),v$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),$$=v$(void 0);function f$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var s$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Cr([e,r],function(){return e(r)})});S(function(e,r,n){return Cr([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return Cr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Cr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return Cr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});za(function(e,r,n,a,t,i,c){return Cr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Cr([e,r,n,a,t,i,c,l],function(){return Ht(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return Cr([e,r,n,a,t,i,c,l,u],function(){return ka(e,r,n,a,t,i,c,l,u)})});var sc=$(function(e,r){return{$:"a0",n:e,o:r}}),d$=$(function(e,r){return{$:"a1",n:e,o:r}}),dc=$(function(e,r){return{$:"a2",n:e,o:r}}),kn=$(function(e,r){return{$:"a3",n:e,o:r}});S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function m$(e){return e=="script"?"p":e}function p$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(sc,r.n,b$(e,r.o)):r});function b$(e,r){var n=lo(r);return{$:r.$,a:n?p(is,n<3?g$:h$,De(e),r.a):o(fa,e,r.a)}}var g$=$(function(e,r){return x(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cT:r.cT,cI:r.cI}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ui(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ui(c,t,i):c[t]=i}return r}function ui(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return ir.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return mt(c,r,e.d),c}var c=e.f?ir.createElementNS(e.f,e.c):ir.createElement(e.c);la&&e.c=="a"&&c.addEventListener("click",la(c)),mt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Zt(c,gr(n===1?l[u]:l[u].b,r));return c}function mt(e,r,n){for(var a in n){var t=n[a];a==="a1"?_$(e,t):a==="a0"?x$(e,r,t):a==="a3"?w$(e,t):a==="a4"?y$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function _$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function w$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function y$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function x$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=S$(r,i),e.addEventListener(t,c,Qt&&{passive:lo(i)<2}),a[t]=c}}var Qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Qt=!0}}))}catch{}function S$(e,r){function n(a){var t=n.q,i=Ee(t.a,a);if(!!Ie(i)){for(var c=lo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cT,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cI)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function C$(e,r){return e.$==r.$&&Hr(e.a,r.a)}function mc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=A$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!P$(d,m):d!==m)&&he(n,2,a,m),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:vi(e,r,n,a,L$);return;case 2:vi(e,r,n,a,z$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Kt(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function P$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function vi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Kt(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Kt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Kt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&C$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Oe(s,i[v],n,++a),a+=s.b||0}}function z$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,h=g.b,P=b.b,T=void 0,N=void 0;if(w===y){f++,Oe(h,P,t,f),f+=h.b||0,d++,m++;continue}var E=l[d+1],R=u[m+1];if(E){var j=E.a,Y=E.b;N=y===j}if(R){var F=R.a,Z=R.b;T=w===F}if(T&&N){f++,Oe(h,Z,t,f),ln(i,t,w,P,m,c),f+=h.b||0,f++,un(i,t,w,Y,f),f+=Y.b||0,d+=2,m+=2;continue}if(T){f++,ln(i,t,y,P,m,c),Oe(h,Z,t,f),f+=h.b||0,d+=1,m+=2;continue}if(N){f++,un(i,t,w,h,f),f+=h.b||0,f++,Oe(Y,P,t,f),f+=Y.b||0,d+=2,m+=1;continue}if(E&&j===F){f++,un(i,t,w,h,f),ln(i,t,y,P,m,c),f+=h.b||0,f++,Oe(Y,Z,t,f),f+=Y.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;un(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];ln(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var pc="_elmW6BL";function ln(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ln(e,r,n+pc,a,t,i)}function un(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}un(e,r,n+pc,a,t)}function bc(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)bc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&vn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&vn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return vn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,h=t+(y.b||0);if(t<=u&&u<=h&&(a=vn(b[w],y,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function gc(e,r,n,a){return n.length===0?e:(bc(e,r,n,a),ua(e,n))}function ua(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=k$(t,a);t===e&&(e=i)}return e}function k$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return mt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ua(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ua(e,i.w),e;case 8:return M$(e,r);case 5:return r.s(e);default:rn(10)}}function T$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function M$(e,r){var n=r.s,a=D$(n.y,r);e=ua(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Zt(e,a),e}function D$(e,r){if(!!e){for(var n=ir.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Zt(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function eo(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(kn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=rr(eo(v[a]),u);return p(Fr,l,r,u)}function A$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=B(function(e,r,n,a){return qt(r,a,e.e4,e.fM,e.fF,function(t,i){var c=e.fP,l=a.node,u=eo(l);return hc(i,function(v){var s=c(v),d=mc(u,s);l=gc(l,u,d,t),u=s})})});B(function(e,r,n,a){return qt(r,a,e.e4,e.fM,e.fF,function(t,i){var c=e.cQ&&e.cQ(t),l=e.fP,u=ir.title,v=ir.body,s=eo(v);return hc(i,function(d){la=c;var m=l(d),f=Fr("body")(z)(m.ew),g=mc(s,f);v=gc(v,s,g,t),s=f,la=0,u!==m.fJ&&(ir.title=u=m.fJ)})})});var va=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function hc(e,r){r(e);var n=0;function a(){n=n===1?0:(va(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&va(a),n=2)}}$(function(e,r){return o($o,uo,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o($o,uo,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o($o,uo,sr(function(){history.replaceState({},"",r),e()}))});var F$={addEventListener:function(){},removeEventListener:function(){}},U$=typeof window!="undefined"?window:F$;S(function(e,r,n){return uc(sr(function(a){function t(i){Ot(n(i))}return e.addEventListener(r,t,Qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ee(e,r);return Ie(n)?ee(n.a):q});function _c(e,r){return sr(function(n){va(function(){var a=document.getElementById(e);n(a?Br(r(a)):Ov(ls(e)))})})}function V$(e){return sr(function(r){va(function(){r(Br(e()))})})}$(function(e,r){return _c(r,function(n){return n[e](),zn})});$(function(e,r){return V$(function(){return U$.scroll(e,r),zn})});S(function(e,r,n){return _c(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var R$=$(function(e,r){var n="g";e.ff&&(n+="m"),e.ey&&(n+="i");try{return ee(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var E$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ee(d):q}a.push(L(pl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ee(v):q}return n(L(pl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var j$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/N$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function N$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ro=new Float64Array(3),$i=new Float64Array(3),fi=new Float64Array(3),Y$=S(function(e,r,n){return new Float64Array([e,r,n])}),G$=function(e){return e[0]},W$=function(e){return e[1]},H$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var I$=function(e){return new Float64Array([e.fU,e.fY,e.c2])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(wc);function yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),$a(wc(e,r,n),n)}$(yc);function xc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function $a(e,r){r===void 0&&(r=new Float64Array(3));var n=1/xc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var O$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$($n);function pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(pt);$(function(e,r){var n,a=ro,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var J$=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var q$=function(e){return{fU:e[0],fY:e[1],c2:e[2],en:e[3]}},Z$=function(e){return new Float64Array([e.fU,e.fY,e.c2,e.en])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/X$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function X$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Q$=new Float64Array(16),K$=new Float64Array(16),ef=function(e){var r=new Float64Array(16);return r[0]=e.dw,r[1]=e.dA,r[2]=e.dE,r[3]=e.dI,r[4]=e.dx,r[5]=e.dB,r[6]=e.dF,r[7]=e.dJ,r[8]=e.dy,r[9]=e.dC,r[10]=e.dG,r[11]=e.dK,r[12]=e.dz,r[13]=e.dD,r[14]=e.dH,r[15]=e.dL,r},rf=function(e){return{dw:e[0],dA:e[1],dE:e[2],dI:e[3],dx:e[4],dB:e[5],dF:e[6],dJ:e[7],dy:e[8],dC:e[9],dG:e[10],dK:e[11],dz:e[12],dD:e[13],dH:e[14],dL:e[15]}};function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(Sc);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Sc(c,l,i,t,n,a)});function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(Cc);B(function(e,r,n,a){return Cc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],h=e[15],P=r[0],T=r[1],N=r[2],E=r[3],R=r[4],j=r[5],Y=r[6],F=r[7],Z=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],Te=r[14],Ce=r[15];return n[0]=a*P+l*T+d*N+b*E,n[1]=t*P+u*T+m*N+w*E,n[2]=i*P+v*T+f*N+y*E,n[3]=c*P+s*T+g*N+h*E,n[4]=a*R+l*j+d*Y+b*F,n[5]=t*R+u*j+m*Y+w*F,n[6]=i*R+v*j+f*Y+y*F,n[7]=c*R+s*j+g*Y+h*F,n[8]=a*Z+l*Q+d*ie+b*ve,n[9]=t*Z+u*Q+m*ie+w*ve,n[10]=i*Z+v*Q+f*ie+y*ve,n[11]=c*Z+s*Q+g*ie+h*ve,n[12]=a*oe+l*de+d*Te+b*Ce,n[13]=t*oe+u*de+m*Te+w*Ce,n[14]=i*oe+v*de+f*Te+y*Ce,n[15]=c*oe+s*de+g*Te+h*Ce,n}$(Pc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],h=r[4],P=r[5],T=r[6],N=r[8],E=r[9],R=r[10],j=r[12],Y=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*h+c*P+v*T,n[5]=t*h+l*P+s*T,n[6]=i*h+u*P+d*T,n[7]=0,n[8]=a*N+c*E+v*R,n[9]=t*N+l*E+s*R,n[10]=i*N+u*E+d*R,n[11]=0,n[12]=a*j+c*Y+v*F+m,n[13]=t*j+l*Y+s*F+f,n[14]=i*j+u*Y+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=$a(r,ro);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/xc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,h=g+f,P=b-m,T=g-f,N=c*c*v+u,E=w+d,R=b+m,j=w-d,Y=l*l*v+u,F=n[0],Z=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],Te=n[7],Ce=n[8],mr=n[9],pr=n[10],Wa=n[11],Nu=n[12],Yu=n[13],Gu=n[14],Wu=n[15];return a[0]=F*y+ve*h+Ce*P,a[1]=Z*y+oe*h+mr*P,a[2]=Q*y+de*h+pr*P,a[3]=ie*y+Te*h+Wa*P,a[4]=F*T+ve*N+Ce*E,a[5]=Z*T+oe*N+mr*E,a[6]=Q*T+de*N+pr*E,a[7]=ie*T+Te*N+Wa*E,a[8]=F*R+ve*j+Ce*Y,a[9]=Z*R+oe*j+mr*Y,a[10]=Q*R+de*j+pr*Y,a[11]=ie*R+Te*j+Wa*Y,a[12]=Nu,a[13]=Yu,a[14]=Gu,a[15]=Wu,a});function nf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(nf);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function af(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(af);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});S(function(e,r,n){var a=yc(e,r,ro),t=$a(pt(n,a,$i),$i),i=$a(pt(a,t,fi),fi),c=Q$,l=K$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var si=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function no(e){for(var r=0;e.b;e=e.b)r++;return r}var tf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},of=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),cf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),lf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),vf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),sf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),df=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},pf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},bf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},gf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Lc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},zc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},_f=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},wf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},yf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},di=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],xf=[pf,bf,gf,Lc,zc,hf,_f,wf,yf];function mi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Sf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function kc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Cf(e,r,n,a){for(var t=n.a.db,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[y]:w[y][h];else i.forEach(function(P){for(h=0;h<g;h++)f[b++]=g===1?w[P][y]:w[P][y][h]})}var u=kc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(no(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Pf(e,r){if(r.a.dk>0){var n=e.createBuffer(),a=Lf(r.c,r.a.dk);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.db*no(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(no(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function pi(e,r){return e+"#"+r}var Tc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Lc(n),zc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=pi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=si++,v||(v=mi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=si++,s||(s=mi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Sf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=zf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=pi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),kf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Pf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Cf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=kc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,h=y*w.arraySize,P=0;P<w.arraySize;P++)a.enableVertexAttribArray(g+P),a.vertexAttribPointer(g+P,w.size,w.baseType,!1,h,y*P)}for(n.toggle=!n.toggle,yn(wp(n),i.a),u=0;u<di.length;u++){var T=n[di[u]];T.toggle!==n.toggle&&T.enabled&&(xf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dU,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dU,0,b.numIndices)}}return yn(t,e.g),r});function zf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var y=c++;return function(h){e.activeTexture(e.TEXTURE0+y);var P=l.textures.get(h);P||(P=h.eF(e),l.textures.set(h,P)),e.bindTexture(e.TEXTURE_2D,P),i[b]!==h&&(e.uniform1i(w,y),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function kf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Tf=S(function(e,r,n){return f$(r,{g:n,f:{},h:e},Vf,Rf)}),Mf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Df=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Af=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Bf=$(function(e,r){e.contextAttributes.antialias=!0}),Ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Uf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Vf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(_p,r,t)},e.h);var n=ir.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),tf(function(){return o(Tc,e,n)})):(n=ir.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,Tc(r)}var D=rv,Nn=Qu,Mc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Nn,e,l,v)}else{var u=c.a;return p(Nn,i,l,u)}});return p(Nn,i,p(Nn,e,r,t),a)}),Ma=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Ma,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),bi=function(e){return p(Ma,S(function(r,n,a){return o(D,x(r,n),a)}),z,e)},Ef=function(e){return p(Ma,S(function(r,n,a){return o(D,r,a)}),z,e)},jf=function(e){var r=e;return Ef(r)},Dc=1,Nf=2,Ac=0,we=function(e){return{$:1,a:e}},ao=$(function(e,r){return{$:3,a:e,b:r}}),gi=$(function(e,r){return{$:0,a:e,b:r}}),Bc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Yf=function(e){return{$:2,a:e}},ee=function(e){return{$:0,a:e}},q={$:1},Gf=Lv,Wf=Iv,Be=ic,zr=$(function(e,r){return o(Sv,e,Ta(r))}),to=$(function(e,r){return _(o(xv,e,r))}),Fc=function(e){return o(zr,`
    `,o(to,`
`,e))},Tn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(Tn,$(function(r,n){return n+1}),0,e)},Hf=nv,If=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),Xr=$(function(e,r){return p(If,e,r,z)}),Uc=$(function(e,r){return p(Hf,e,o(Xr,0,Mr(r)-1),r)}),Ke=Bv,Vc=function(e){var r=Ke(e);return 97<=r&&r<=122},Rc=function(e){var r=Ke(e);return r<=90&&65<=r},Of=function(e){return Vc(e)||Rc(e)},Jf=function(e){var r=Ke(e);return r<=57&&48<=r},qf=function(e){return Vc(e)||Rc(e)||Jf(e)},Fe=function(e){return p(Tn,D,z,e)},nn=hv,Zf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Fc(Xf(r))))}),Xf=function(e){return o(Qf,e,z)},Qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=nn(n);if(b.$===1)return!1;var w=b.a,y=w.a,h=w.b;return Of(y)&&o(Gf,qf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(D,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(D,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Mr(s))+" ways:"));return o(zr,`

`,o(D,g,o(Uc,Zf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(zr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Fc(o(Wf,4,f))+(`

`+m))}}),Ue=32,bt=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gt=Ou,oo=fv,io=$(function(e,r){return ai(r)/ai(e)}),Kf=vv,xn=oo(o(io,2,Ue)),Ec=L(bt,0,xn,gt,gt),jc=qu,Nc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Yc=sv,ht=Ju,ke=$(function(e,r){return I(e,r)>0?e:r}),es=function(e){return{$:0,a:e}},co=Zu,rs=$(function(e,r){e:for(;;){var n=o(co,Ue,e),a=n.a,t=n.b,i=o(D,es(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),ns=function(e){var r=e.a;return r},as=$(function(e,r){e:for(;;){var n=oo(r/Ue);if(n===1)return o(co,Ue,e).a;var a=o(rs,e,z),t=n;e=a,r=t;continue e}}),Gc=$(function(e,r){if(r.l){var n=r.l*Ue,a=Yc(o(io,Ue,n-1)),t=e?Fe(r.z):r.z,i=o(as,t,r.l);return L(bt,ht(r.p)+n,o(ke,5,a*xn),i,r.p)}else return L(bt,ht(r.p),xn,gt,r.p)}),ts=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Gc,!1,{z:a,l:n/Ue|0,p:t});var i=Nc(p(jc,Ue,r,e)),c=e,l=r-Ue,u=n,v=o(D,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),os=$(function(e,r){if(e<=0)return Ec;var n=e%Ue,a=p(jc,n,e-n,r),t=e-n-Ue;return C(ts,r,t,e,z,a)}),Ie=function(e){return!e.$},A=Yv,X=Vv,M=Nv,$e=Rv,fa=Gv,is=Wv,De=Uv,lo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},H=Fr("div"),cs=function(e){return{$:2,a:e}},Wc=$(function(e,r){return e}),Hc=$(function(e,r){return{bD:r.bD,eD:e,b8:r.b8,eM:r.eM,dp:r.dp,bi:r.bi,bk:r.bk,fQ:r.fQ}}),Tr=function(e){return e},ls=Tr,hi=We(function(e,r,n,a,t,i){return{dg:i,di:r,dY:a,d$:n,d3:e,d4:t}}),us=zv,kr=_v,Ir=Cv,Mn=$(function(e,r){return e<1?r:p(Ir,e,kr(r),r)}),Da=Tv,Aa=function(e){return e===""},Ba=$(function(e,r){return e<1?"":p(Ir,0,e,r)}),Ic=Mv,_i=ge(function(e,r,n,a,t){if(Aa(t)||o(us,"@",t))return q;var i=o(Da,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Ic(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return ee(_e(hi,e,o(Ba,c,t),u,r,n,a))}else return ee(_e(hi,e,t,q,r,n,a))}),wi=B(function(e,r,n,a){if(Aa(a))return q;var t=o(Da,"/",a);if(t.b){var i=t.a;return C(_i,e,o(Mn,i,a),r,n,o(Ba,i,a))}else return C(_i,e,"/",r,n,a)}),yi=S(function(e,r,n){if(Aa(n))return q;var a=o(Da,"?",n);if(a.b){var t=a.a;return L(wi,e,ee(o(Mn,t+1,n)),r,o(Ba,t,n))}else return L(wi,e,q,r,n)});$(function(e,r){if(Aa(r))return q;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(yi,e,ee(o(Mn,a+1,r)),o(Ba,a,r))}else return p(yi,e,q,r)});var vs=kv,uo=function(e){},Dn=Br,$s=Dn(0),Oc=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Tn,e,r,Fe(d)):L(Oc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=S(function(e,r,n){return L(Oc,e,r,0,n)}),re=$(function(e,r){return p(dr,$(function(n,a){return o(D,e(n),a)}),z,r)}),sa=st,vo=$(function(e,r){return o(sa,function(n){return Dn(e(n))},r)}),fs=S(function(e,r,n){return o(sa,function(a){return o(sa,function(t){return Dn(o(e,a,t))},n)},r)}),ss=function(e){return p(dr,fs(D),Dn(z),e)},ds=r$,ms=$(function(e,r){var n=r;return uc(o(sa,ds(e),n))}),ps=S(function(e,r,n){return o(vo,function(a){return 0},ss(o(re,ms(e),r)))}),bs=S(function(e,r,n){return Dn(0)}),gs=$(function(e,r){var n=r;return o(vo,e,n)});Qe.Task=Kv($s,ps,bs,gs);var hs=$c("Task"),$o=$(function(e,r){return hs(o(vo,e,r))}),_s=B$,ws=bv,da={$:1},Jc=function(e){return{$:2,a:e}},Fa={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=S(function(e,r,n){return r(e(n))}),an=function(e){var r=e.b.B;return r.a},ys=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ee(o(Ne,r,{B:i,ab:c,T:o(D,a,n)}))}else return q},qc=function(e){var r=e.b;return o(Ne,Fa,r)},ur=$(function(e,r){if(r.$)return e;var n=r.a;return n}),xs=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bi.da?qc(n):n;case 2:var i=a.a.cU;return(I(i+r.eM,an(n).bD)>0?o(ae,ys,ur(o(Ne,da,t))):Tr)(o(Ne,Jc({cU:i+r.eM}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Hc,l.eD,je(r,{bD:l.bD+r.eM})),s=o(e,v,u);return o(Ne,Fa,{B:x(v,s),ab:z,T:o(D,t.B,t.T)})}}),Zc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ss=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Cs=$(function(e,r){return Fe(p(Ss,e,r,z))}),Xc=S(function(e,r,n){if(r<=0)return z;{var a=x(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(D,h,o(D,c,o(D,s,o(D,b,o(Cs,r-4,w))))):o(D,h,o(D,c,o(D,s,o(D,b,p(Xc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,h=y.a;return _([h])}}),Ps=$(function(e,r){return p(Xc,0,e,r)}),Ls=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(_([a]),t)),c=o(Ps,e,i),l=o(Zc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,da,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,da,{B:d,ab:z,T:m})}else return r}}),zs=function(e){var r=e.b;return o(Ne,da,r)},ks=function(e){var r=e.b;return o(Ne,Jc({cU:an(e).bD}),r)},Ts=$(function(e,r){switch(e.$){case 1:return zs(r);case 2:return qc(r);case 3:return ks(r);default:var n=e.a;return o(Ls,n,r)}}),Qc=$(function(e,r){var n=r.a,a=r.b;return x(e(n),a)}),Ms=$(function(e,r){return je(r,{av:e(r.av)})}),Ds=function(e){return{$:3,a:e}},As=function(e){return{$:2,a:e}},Bs=$(function(e,r){return{$:0,a:e,b:r}}),Fs=$(function(e,r){return{$:1,a:e,b:r}}),Pe=$(function(e,r){if(r.$)return q;var n=r.a;return ee(e(n))}),J=function(e){return e<0?-e:e},fo=Dv,Us=S(function(e,r,n){return o(ur,0/0,fo(o(e,r,n)))}),Kc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Vs=yv,el=function(e){return p(Vs,D,z,e)},Rs=$(function(e,r){var n=o(Kc,function(a){return a!=="0"&&a!=="."},el(r));return le(e&&n?"-":"",r)}),pe=ic,_t=gv,rl=Fv,nl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=nn(n);if(a.$===1)return"01";var t=a.a;return o(_t,"0",nl(t))}else{var i=Ke(r);return i>=48&&i<57?o(_t,rl(i+1),n):"0"}},wt=$v,Es=pv,Ua=function(e){return o(_t,e,"")},al=S(function(e,r,n){return e<=0?n:p(al,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(al,e,r,"")}),yt=S(function(e,r,n){return le(n,o(Sn,e-kr(n),Ua(r)))}),xt=wv,tl=function(e){var r=o(to,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return x(n,t)}else{var n=r.a;return x(n,"0")}else return x("0","0")},js=function(e){var r=o(to,"e",pe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ur,0,Ic(o(vs,"+",t)?o(Mn,1,t):t)),c=tl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(ur,"0",o(Pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Pe,Qc(Ua),nn(le(o(Sn,J(i),"0"),v))))):p(yt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ns=S(function(e,r,n){if(wt(n)||Es(n))return pe(n);var a=n<0,t=tl(js(J(n))),i=t.a,c=t.b,l=kr(i)+r,u=le(o(Sn,-l+1,"0"),p(yt,l,"0",le(i,c))),v=kr(u),s=o(ke,1,l),d=o(e,a,p(Ir,s,v,u)),m=p(Ir,0,s,u),f=d?xt(o(ur,"1",o(Pe,nl,nn(xt(m))))):m,g=kr(f),b=f==="0"?f:r<=0?le(f,o(Sn,J(r),"0")):I(r,kr(c))<0?p(Ir,0,g-r,f)+("."+p(Ir,g-r,g,f)):le(i+".",p(yt,r,"0",c));return o(Rs,a,b)}),ol=Ns($(function(e,r){var n=nn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ke(t))})),Ys=Us(ol),Gs=S(function(e,r,n){var a=o(io,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ys,t,n)}),il=ev,cl=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(il,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ee(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},Qr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return C(W,0,r,n,C(W,1,v,s,d,m),C(W,1,i,c,l,u))}else return C(W,e,i,c,C(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return C(W,0,v,s,C(W,1,g,b,w,y),C(W,1,r,n,m,t))}else return C(W,e,r,n,a,t)}),St=S(function(e,r,n){if(n.$===-2)return C(W,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(il,e,t);switch(u){case 0:return C(Qr,a,t,i,p(St,e,r,c),l);case 1:return C(W,a,t,r,c,l);default:return C(Qr,a,t,i,c,p(St,e,r,l))}}),mn=S(function(e,r,n){var a=p(St,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(W,1,t,i,c,l)}else{var u=a;return u}}),Ws=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ll=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return C(W,0,f,g,C(W,1,n,a,C(W,0,i,c,l,u),b),C(W,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,P=e.e;P.a;var s=P.b,d=P.c,m=P.d,y=P.e;return C(W,1,n,a,C(W,0,i,c,l,u),C(W,0,s,d,m,y))}else return e},xi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return C(W,0,i,c,C(W,1,u,v,s,d),C(W,1,n,a,m,C(W,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,P=h.d,m=h.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,y=T.e;return C(W,1,n,a,C(W,0,i,c,P,m),C(W,0,g,b,w,y))}else return e},Hs=za(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(W,n,l,u,v,C(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,xi(r)}else break e;else return c.a,c.d,xi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(W,r,n,a,Kn(t),l);var u=ll(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(Qr,v,s,d,Kn(m),f)}else return nr}else return C(W,r,n,a,Kn(t),l)}else return nr},pn=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(W,n,a,t,o(pn,e,i),c);var u=ll(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(Qr,v,s,d,o(pn,e,m),f)}else return nr}else return C(W,n,a,t,o(pn,e,i),c);else return o(Is,e,Ht(Hs,e,r,n,a,t,i,c))}),Is=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=Ws(c);if(l.$===-1){var u=l.b,v=l.c;return C(Qr,n,u,v,i,Kn(c))}else return nr}else return C(Qr,n,a,t,i,o(pn,e,c))}else return nr}),ul=$(function(e,r){var n=o(pn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(W,1,a,t,i,c)}else{var l=n;return l}}),Yn=S(function(e,r,n){var a=r(o(cl,e,n));if(a.$)return o(ul,e,n);var t=a.a;return p(mn,e,t,n)}),Os=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Yn,r,Pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Fs,x(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Yn,r,Pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Bs,x(i,c),p(Gs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Yn,r,Pe(function(a){return a.$===3?Ds(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,Pe(function(a){return a.$===2?As(n):a}))}},Js=function(e){return Ms(Os(e))},qs=$(function(e,r){return o(re,Js(e),r)}),Zs=$(function(e,r){return je(r,{eD:o(qs,e,r.eD)})}),Xs=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,je(a,{B:o(Qc,Zs(e),a.B)}))}),Qs=$(function(e,r){var n=r.a,a=r.b;return x(n,e(a))}),Ks=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,je(t,{B:o(Qs,o(e,i.a,r),i)}))}),ed=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return je(a,{aM:!a.aM});case 2:var t=n.a;return je(a,{G:p(xs,e,t,a.G)});case 3:var i=n.a;return je(a,{G:o(Xs,i,a.G)});case 4:var c=n.a;return je(a,{G:p(Ks,r,c,a.G)});default:var l=n.a;return je(a,{G:o(Ts,l,a.G)})}}),rd=$(function(e,r){return o(Ne,Fa,{B:x(e,r(e)),ab:z,T:z})}),nd=n$,Si=nd(z),ma=jv,Cn=Ev,ad=c$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return De({ep:d,eE:s,da:v,eL:u,e8:l,fq:c,fv:i,ea:t,ei:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ma(Cn)))},o(M,"left",X))},o(M,"pressedKeys",ma(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return De({da:v,cb:u,fe:l,fw:c,fx:i,ei:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(A,function(r){return o(A,function(n){return De({e_:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(A,function(e){return o(A,function(r){return De({eG:r,eH:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),td=function(e){return{$:4,a:e}},od={$:0},id=lc,He=$(function(e,r){return o(dc,e,id(r))}),O=He("className"),cd=function(e){var r=e.b.B;return r.b},pa=He("id"),ld=s$,ba=ld,ud=d$,se=ud,vd={$:1},$d=function(e){return{$:3,a:e}},fd=function(e){return{$:5,a:e}},Ci=Fr("a"),so=Fr("button"),sd=kn("d"),vl=fc("http://www.w3.org/2000/svg"),dd=vl("path"),md=vl("svg"),pd=kn("viewBox"),bn=function(e){return o(md,_([pd("0 0 100 100"),o(se,"width","100%"),o(se,"height","100%")]),_([o(dd,_([sd(e)]),z)]))},Pi=function(e){return o(He,"href",p$(e))},Jr={eK:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eU:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eZ:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fo:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",bi:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fB:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f0:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},bd=function(e){return{$:0,a:e}},$l=sc,fl=$(function(e,r){return o($l,e,bd(r))}),mo=function(e){return o(fl,"click",De(e))},Li=He("target"),gd=He("title"),Ct=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(W,n,a,o(e,a,t),o(Ct,e,i),o(Ct,e,c))}),hd=dt,vr=hd,_d=function(e){return p(Ma,S(function(r,n,a){return o(D,n,a)}),z,e)},wd=$(function(e,r){return{$:3,a:e,b:r}}),yd=$(function(e,r){return{$:2,a:e,b:r}}),xd=$(function(e,r){return{$:0,a:e,b:r}}),Sd=$(function(e,r){return{$:1,a:e,b:r}}),Va=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),sl=L(Va,0/255,0/255,0/255,1),Cd=lc,Pd=$(function(e,r){return o(dc,e,Cd(r))}),Ld=Pd("checked"),Se=dv,zd=S(function(e,r,n){return le(o(Sn,e-kr(n),Ua(r)),n)}),ga=tv,dl=function(e){var r=function(n){return n<10?Be(n):Ua(rl(87+n))};return e<16?r(e):le(dl(e/16|0),r(o(ga,16,e)))},kd=o(ae,dl,o(zd,2,"0")),po=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b4:a,ca:n,cK:r}},Td=function(e){var r=po(e),n=r.cK,a=r.ca,t=r.b4;return o(zr,"",o(D,"#",o(re,o(ae,Se,kd),_([n*255,a*255,t*255]))))},Pt=He("htmlFor"),Lt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ha=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Md=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),ml=$(function(e,r){return p(dr,Md(e),z,r)}),pl=B(function(e,r,n,a){return{e3:r,fc:e,fj:n,fE:a}}),Dd=E$,Ad=Av,Bd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Fd=R$,Ud=function(e){return o(Fd,{ey:!1,ff:!1},e)},bl=function(e){if(e.b){var r=e.a;return e.b,ee(r)}else return q},Vd=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Rd=function(e){return{$:2,a:e}},Ed=function(e){return{$:0,a:e}},jd=function(e){return{$:1,a:e}},Oa=$(function(e,r){return Ke(r)-Ke(e)}),Ja=S(function(e,r,n){var a=Ke(n);return I(Ke(e),a)<1&&I(a,Ke(r))<1}),Nd=$(function(e,r){var n=function(t){return I(t,e)<0?ue(t):we(jd(r))},a=p(Ja,"0","9",r)?ue(o(Oa,"0",r)):p(Ja,"a","z",r)?ue(10+o(Oa,"a",r)):p(Ja,"A","Z",r)?ue(10+o(Oa,"A",r)):we(Ed(r));return o(ha,n,a)}),gl=$(function(e,r){var n=nn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ha,function(c){return o(ha,function(l){return ue(c+l*e)},o(gl,e,i))},o(Nd,e,t))}),Yd=$(function(e,r){return 2<=e&&e<=36?o(gl,e,xt(r)):we(Rd(e))}),Gd=Yd(16),Wd=S(function(e,r,n){return L(Va,e,r,n,1)}),Hd=B(function(e,r,n,a){return L(Va,e,r,n,a)}),An=av,Id=$(function(e,r){var n=o(An,10,e);return Se(r*n)/n}),Od=Pv,Jd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=el(n);if(a.b&&!a.b.b){var t=a.a;return Ad(_([t,t]))}else return n};return o(ae,Od,o(ae,function(n){return o(Pe,function(a){return p(Dd,1,a,n)},Ud(e))},o(ae,Lt(bl),o(ae,Pe(function(n){return n.fE}),o(ae,Pe(ml(Tr)),o(ae,Bd("Parsing hex regex failed"),ha(function(n){var a=o(re,o(ae,r,o(ae,Gd,Vd(Kf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(Hd,t/255,c/255,u/255,o(Id,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Wd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),_a=Fr("input"),zt=Fr("label"),kt=He("name"),hl=$(function(e,r){return p(dr,M,r,e)}),qd=o(hl,_(["target","checked"]),X),Zd=function(e){return o(fl,"change",o(fa,e,qd))},Xd=function(e){return x(e,!0)},Qd=function(e){return{$:1,a:e}},Kd=$(function(e,r){return o($l,e,Qd(r))}),em=o(hl,_(["target","value"]),Cn),bo=function(e){return o(Kd,"input",o(fa,Xd,o(fa,e,em)))},_l=He("max"),wl=He("min"),yl=function(e){return o(He,"step",e)},wa=He("type"),go=He("value"),zi=function(e){var r=e.cd,n=e.cZ,a=e.ct,t=e.cp,i=e.cS,c=e.cx;return o(H,z,_([o(zt,_([Pt(r)]),_([o(H,_([O("relative w-full")]),_([o(H,_([O("inline-block")]),_([vr(r)])),o(H,_([O("inline-block float-right")]),_([vr(pe(n))]))]))])),o(_a,_([wa("range"),o(se,"width","100%"),pa(r),kt(r),wl(pe(a)),_l(pe(t)),go(pe(n)),yl(pe(i)),bo(o(ae,fo,o(ae,ur(42),c)))]),z)]))},rm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),nm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(H,z,_([o(H,_([O("mb-2")]),_([o(zt,_([Pt(e)]),_([vr(e)]))])),o(_a,_([wa("checkbox"),pa(e),kt(e),Zd(wd(e)),Ld(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return zi({cd:e,cp:i,ct:t,cx:xd(e),cS:.01*(i-t),cZ:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return zi({cd:e,cp:i,ct:t,cx:o(ae,Se,Sd(e)),cS:1,cZ:c});default:var c=r.a;return o(H,z,_([o(H,_([o(se,"margin-bottom","6px")]),_([o(zt,_([Pt(e)]),_([vr(e)]))])),o(_a,_([wa("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),pa(e),kt(e),bo(function(l){return o(yd,e,o(rm,sl,Jd(l)))}),go(Td(c))]),z)]))}}),am=function(e){return o(H,_([O("p-4 border-y-[0.5px] border-white20")]),_([o(H,_([O("text-lg pb-2")]),_([vr(e.fg)])),o(H,_([O("pl-2 pr-2")]),_d(o(Ct,nm,e.av)))]))},tm=function(e){return o(H,_([O("text-xs text-white60")]),o(re,am,e))},om=function(e){return o(H,_([O("absolute left-[104px] bottom-2 text-sm text-white40")]),_([vr("clock: "+o(ol,3,an(e).bD))]))},im=function(e){e.a;var r=e.b.T;return o(Pe,function(n){return Se(60/(an(e).bD-n))},o(Pe,o(ae,ns,function(n){return n.bD}),bl(o(Zc,59,r))))},cm=function(e){return o(H,_([O("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=im(e);if(r.$===1)return _([vr("... Fps")]);var n=r.a;return _([vr(Be(n)+" Fps")])}())},lm=function(e){return{$:0,a:e}},um=function(e){var r=e.b.T;return Mr(r)},vm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},$m=function(e){return o(_a,_([O("absolute w-full"),wa("range"),wl(Be(0)),_l(Be(vm(e)-1)),go(Be(um(e))),yl(Be(1)),bo(o(ae,fo,o(ae,ur(42),o(ae,Se,lm))))]),z)},ki={$:1},fm={$:3},sm={$:2},xl=function(e){return!e.b},Ti=$(function(e,r){return o(so,_([O("px-2 bg-black40"),O(r),mo(e)]),_([vr("REC")]))}),Mi=$(function(e,r){return o(so,_([O("absolute left-[60px] mx-1 px-1 bg-black40"),mo(r)]),_([o(H,_([O("w-4 h-6 fill-white80")]),_([bn(e)]))]))}),dm=function(e){var r=e.a,n=e.b.ab;return o(H,_([O("py-1")]),_([function(){switch(r.$){case 0:return o(Ti,ki,"text-red-500 font-bold");case 1:return o(Ti,sm,"text-white80 font-bold");default:return o(H,z,z)}}(),function(){switch(r.$){case 0:return o(H,z,z);case 1:return xl(n)?o(H,z,z):o(Mi,Jr.fp,fm);default:return o(Mi,Jr.fo,ki)}}()]))},mm=function(e){return o(H,_([O("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([$m(e),dm(e),cm(e),om(e)]))},pm=function(e){var r=e.a;return yr(r,Fa)},bm=$(function(e,r){var n=pm(r.G)?o(H,z,z):o(H,_([O("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.bi.fU+.5*e.bk.fS)+"px"),o(se,"top",pe(-e.bi.fY+.5*e.bk.e_)+"px")]),_([o(H,_([O(e.bi.cb?"fill-black80":"fill-white40")]),_([bn(Jr.bi)]))]));return o(H,z,_([n]))}),gm=$(function(e,r){var n=o(so,_([O(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),mo(vd),gd("Distraction Free Mode")]),_([bn(Jr.f0)])),a=o(H,_([O("absolute w-8 bottom-12")]),_([o(Ci,_([O("fill-twitterBlue40 hover:fill-twitterBlue"),Pi("https://twitter.com/AzizErkalSelman"),Li("_blank")]),_([bn(Jr.fL)]))])),t=o(H,_([O("absolute w-8 bottom-2")]),_([o(Ci,_([O("fill-githubCat40 hover:fill-githubCat"),Pi("https://github.com/erkal/elm-3d-playground-exploration"),Li("_blank")]),_([bn(Jr.eU)]))]));return r.aM?o(H,_([O("fixed w-10 h-10 p-1")]),_([n])):o(H,z,_([o(H,_([O("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(H,_([O("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.bk.e_-80)+"px")]),_([o(ba,$d,tm(an(r.G).eD))])),o(H,_([O("absolute bottom-0 left-10 h-20"),o(se,"width",e.bk.fS>600?"600px":pe(e.bk.fS-40)+"px")]),_([o(ba,fd,mm(r.G))])),o(bm,e,r)]))}),hm=S(function(e,r,n){var a=cd(n.G),t=an(n.G);return o(H,_([O("bg-black40"),O("select-none"),O("antialiased"),O("font-mono"),o(se,"width",pe(t.bk.fS)+"px"),o(se,"height",pe(t.bk.e_)+"px")]),_([o(H,_([O("fixed")]),_([o(ba,Wc(od),o(e,t,a))])),o(H,_([pa("gui")]),_([o(gm,t,n),o(ba,td,o(r,t,a))]))]))}),_m=We(function(e,r,n,a,t,i){var c=$(function(u,v){return x(L(ed,r,i,u,v),Si)}),l=function(u){var v=o(Hc,n,u.e5);return x({aM:u.e5.bk.fS<500,G:o(rd,v,a)},Si)};return _s({e4:l,fF:Wc(ad(cs)),fM:c,fP:o(hm,e,t)})}),wm=B(function(e,r,n,a){return _e(_m,e,r,n,a,$(function(t,i){return o(H,z,z)}),S(function(t,i,c){return c}))}),Sl=nr,ym=Sl,Cl=$(function(e,r){var n=r;return p(mn,e,0,n)}),xm=function(e){return p(Tn,Cl,ym,e)},Sm=xm(_([x(-3,-3),x(-3,1),x(-3,2),x(-3,3),x(-2,-2),x(-2,0),x(-2,3),x(-2,4),x(-1,-5),x(-1,-4),x(-1,-3),x(-1,-2),x(-1,0),x(-1,3),x(-1,4),x(0,-4),x(0,-3),x(0,-2),x(0,-1),x(0,0),x(0,1),x(0,2),x(0,3),x(0,4),x(1,-5),x(1,-4),x(1,-3),x(1,-2),x(1,0),x(1,3),x(1,4),x(2,-2),x(2,0),x(2,3),x(2,4),x(3,-3),x(3,1),x(3,2),x(3,3)])),Cm=function(e){return{ax:Sm}},Pm=uv,br=mv,Lm=$(function(e,r){var n=e,a=r,t=a.c2-n.c2,i=a.fY-n.fY,c=a.fU-n.fU,l=o(ke,J(c),o(ke,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=br(s*s+v*v+u*u);return ee({fU:s/d,fY:v/d,c2:u/d})}else return q}),ea=function(e){return e},ho=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c2-a.c2*n.fY,fY:a.c2*n.fU-a.fU*n.c2,c2:a.fU*n.fY-a.fY*n.fU}}),gn=function(e){var r=e,n=o(ke,J(r.fU),o(ke,J(r.fY),J(r.c2)));if(n){var a=r.c2/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return ee({fU:i/c,fY:t/c,c2:a/c})}else return q},ya=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c2:a.c2-n.c2}}),zm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c2*n.c2}),Pl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),km=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Tm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c2:a.c2-n.c2}}),Mm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c2*n.c2;return{fU:n.fU*t,fY:n.fY*t,c2:n.c2*t}}),Dm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c2:-r.c2}},Je=0,Ll={fU:0,fY:0,c2:0},Am=S(function(e,r,n){return o(Lt,function(a){var t=o(Tm,o(Mm,a,r),r);return o(Lt,function(i){var c=o(ho,r,e),l=o(zm,n,c),u=o(Pl,Je,l)?c:o(km,Je,l)?Dm(c):Ll;return o(Pe,function(v){return V(a,i,v)},gn(u))},gn(t))},gn(e))}),Bm=function(e){var r=e,n=J(r.c2),a=J(r.fY),t=J(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=br(r.c2*r.c2+r.fY*r.fY);return{fU:0,fY:-r.c2/i,c2:r.fY/i}}else{var i=br(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c2:0}}else if(I(a,n)<1){var i=br(r.c2*r.c2+r.fU*r.fU);return{fU:r.c2/i,fY:0,c2:-r.fU/i}}else{var i=br(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c2:0}}},_o=function(e){var r=Bm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c2-i.c2*a.fY,fY:i.c2*a.fU-i.fU*a.c2,c2:i.fU*a.fY-i.fY*a.fU};return x(r,c)},Or=function(e){var r=e;return r},$r=function(e){return e},Fm=$(function(e,r){var n=_o(e),a=n.a,t=n.b;return $r({cy:r,c0:a,c1:t,c3:e})}),Um=function(e){var r=o(ya,e.aS,e.df),n=Or(e.ej),a=o(ho,r,n),t=p(Am,r,n,a);if(t.$){var v=gn(r);if(v.$){var d=_o(e.ej),m=d.a,f=d.b;return $r({cy:e.df,c0:f,c1:e.ej,c3:m})}else{var s=v.a;return o(Fm,s,e.df)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return $r({cy:e.df,c0:u,c1:l,c3:c})}},Pr={fU:0,fY:0,c2:0},Vm=function(e){return{$:0,a:e}},xe=function(e){var r=e;return J(r)},ra=function(e){var r=e;return .5*r},Rm=lv,Em=function(e){var r=e;return Rm(r)},jm=function(e){var r=ra(xe(e.ek)),n=Em(r);return{cJ:Vm(n),c_:e.c_}},cr=function(e){return e},wo=cr({fU:0,fY:1,c2:0}),ar=function(e){return e},Nm=function(e){var r=e.aS,n=e.df,a=e.ej;return jm({ek:ar(2*Pm(.5)),c_:Um({df:ea(n),aS:ea(r),ej:o(ur,wo,o(Lm,Pr,ea(a)))})})},Dr=iv,Ym=$(function(e,r){return(r-Yc(r/e)*e)/e}),fr=ov,Gm=function(e){return 2*fr*e},Tt=B(function(e,r,n,a){return e+(r-e)*(1+Dr(Gm(o(Ym,n,a))))/2}),yo=function(e){return Nm({df:{fU:1+L(Tt,-5,5,7,e.bD),fY:1,c2:20},aS:{fU:0,fY:0,c2:0},ej:{fU:0,fY:1,c2:0}})},er=function(e){return e},Wm=S(function(e,r,n){return{fU:e,fY:r,c2:n}}),fn=function(e){return ar(fr*(e/180))},Gn=function(e){return e},na=function(e){var r=e;return r},Hm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c2*n.c2}),zl=function(e){var r=e;return r.eJ},te=$(function(e,r){var n=r;return e*n}),kl=function(e){var r=e;return r.cy},Im=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.fi,l=c;return(a.fU-i.fU)*l.fU+(a.fY-i.fY)*l.fY+(a.c2-i.c2)*l.c2}),Om=S(function(e,r,n){var a=e,t=r,i=n;return{fU:i.fU+t*a.fU,fY:i.fY+t*a.fY,c2:i.c2+t*a.c2}}),Jm=$(function(e,r){var n=zl(r),a=e,t=a.fi,i=o(Hm,t,n);if(i){var c=kl(r),l=o(Im,e,c),u=o(te,-1/i,l);return ee(p(Om,n,u,c))}else return q}),qm=$(function(e,r){return{fU:e,fY:r}}),Di=$(function(e,r){var n=e,a=r;return n*a}),Zm=function(e){var r=e;return r},Ai=function(e){var r=e;return Zm(r.et)},Xm=function(e){var r=e;return r.aL},Tl=$(function(e,r){var n=r;return n/e}),tn=function(e){var r=e;return r.cy},Mt=function(e){var r=e;return tn(r)},Dt=function(e){var r=e;return-r},xo=cr({fU:0,fY:0,c2:-1}),Qm=$(function(e,r){var n=e,a=r;return a/n}),Km=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fU:v.fU*a.fU+l.fU*a.fY+i.fU*a.c2,fY:v.fY*a.fU+l.fY*a.fY+i.fY*a.c2,c2:v.c2*a.fU+l.c2*a.fY+i.c2*a.c2}}),Ar=$(function(e,r){return{eJ:r,cy:e}}),xa=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c2:-r.c2}},Ur=function(e){var r=e;return r.c3},At=function(e){var r=e;return xa(Ur(r))},e0=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c0,l=c;return(a.fU-i.fU)*l.fU+(a.fY-i.fY)*l.fY}),So=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c2:i}}),r0=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cy,v=u,s=t.c3,d=s,m=t.c1,f=m,g=t.c0,b=g;return{fU:v.fU+i*b.fU+c*f.fU+l*d.fU,fY:v.fY+i*b.fY+c*f.fY+l*d.fY,c2:v.c2+i*b.c2+c*f.c2+l*d.c2}}),n0=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c1,l=c;return(a.fU-i.fU)*l.fU+(a.fY-i.fY)*l.fY}),a0=S(function(e,r,n){var a=e,t=o(n0,Ai(r),n),i=o(e0,Ai(r),n),c=a.c_,l=c,u=Xm(r);u.a;var v=u.b,s=a.cJ;if(s.$){var g=s.a,b=o(Qm,v,g),w=L(r0,l,o(Di,b,i),o(Di,b,t),Je);return o(Ar,w,At(a.c_))}else{var d=s.a,m=Dt(o(Tl,d,o(te,.5,v))),f=o(Km,l,o(ur,xo,gn(p(So,i,t,m))));return o(Ar,Mt(a.c_),f)}}),Kr=cv,Bt=function(e){var r=e;return{fU:Dr(r),fY:Kr(r)}},t0=function(e){var r=e;return{fU:-r.fY,fY:r.fU}},o0=function(e){return e},i0=$(function(e,r){return o0({cy:r,c0:e,c1:t0(e)})}),c0=$(function(e,r){return o(i0,Bt(e),r)}),l0=S(function(e,r,n){var a=e.a,t=e.b;return{et:o(c0,r,n),aL:x(xe(a),xe(t))}}),hr=function(e){var r=e;return r.fU},u0=$(function(e,r){var n=e,a=r;return{fU:n,fY:a}}),_r=function(e){var r=e;return r.fY},wr=function(e){var r=e;return r.c2},v0=B(function(e,r,n,a){var t=n.fU,i=n.fY,c=function(v){return p(Wm,na(hr(v)),na(_r(v)),na(wr(v)))},l=p(l0,x(Gn(r.fS),Gn(r.e_)),fn(0),o(qm,0,0)),u=o(u0,Gn(t),Gn(i));return o(Pe,c,o(Jm,a,p(a0,e,l,u)))}),on=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c2:a.c2+n.c2}}),$0=$(function(e,r){return{fi:e,cy:r}}),f0=$(function(e,r){var n=r;return o($0,n.fi,o(on,e,n.cy))}),s0=$(function(e,r){return{fi:r,cy:e}}),Co=cr({fU:0,fY:0,c2:1}),Po=Co,d0=o(s0,Pr,Po),m0=B(function(e,r,n,a){return L(v0,r,n,a,o(f0,p(So,er(0),er(0),er(e)),d0))}),Ml=m0(0),p0=$(function(e,r){var n=p(Ml,yo(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return je(r,{ax:o(Cl,x(Se(a.fU),Se(a.fY)),r.ax)})}),b0=$(function(e,r){var n=r;return o(ul,e,n)}),g0=$(function(e,r){var n=p(Ml,yo(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return je(r,{ax:o(b0,x(Se(a.fU),Se(a.fY)),r.ax)})}),h0=$(function(e,r){return e.dp.ea&&e.bi.cb?o(g0,e,r):e.bi.cb?o(p0,e,r):r}),Lo=function(e){return e},Dl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),_0=function(e){var r=e;return r},w0=function(e){var r=p(Dl,1667,25e3,_0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Lo({fU:n,fY:a})},zo=$(function(e,r){return{$:0,a:e,b:r}}),qa=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Za=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),lr=$(function(e,r){var n=e,a=r;return a-n}),y0=cr({fU:-1,fY:0,c2:0}),x0=cr({fU:0,fY:-1,c2:0}),Al=cr({fU:1,fY:0,c2:0}),me=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c2:i}}),S0=We(function(e,r,n,a,t,i){var c=o(qa,n,i)?Co:xo,l=o(qa,r,t)?wo:x0,u=o(qa,e,a)?Al:y0,v=V(xe(o(lr,e,a)),xe(o(lr,r,t)),xe(o(lr,n,i))),s=p(me,o(Za,e,a),o(Za,r,t),o(Za,n,i)),d=$r({cy:s,c0:u,c1:l,c3:c});return{et:d,aL:v}}),C0=$(function(e,r){return _e(S0,hr(e),_r(e),wr(e),hr(r),_r(r),wr(r))}),Ft=S(function(e,r,n){return{fU:e,fY:r,c2:n}}),P0=$(function(e,r){var n=r/2;return o(zo,e,o(C0,p(Ft,-n,-n,-n),p(Ft,n,n,n)))}),ko=function(e){return{$:5,a:e}},L0=function(e){return ko(e)},Ut=function(e){return{$:0,a:e}},Bl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Xa=function(e){return p(Dl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Bn=Y$,z0=function(e){var r=po(e),n=r.cK,a=r.ca,t=r.b4;return p(Bn,Xa(n),Xa(a),Xa(t))},k0=function(e){return p(Bl,0,Ut(z0(e)),Ut(0))},Fl=$(function(e,r){return{$:2,a:e,b:r}}),Ul=$(function(e,r){return{$:4,a:e,b:r}}),Vl=$(function(e,r){return{$:3,a:e,b:r}}),Rl=$(function(e,r){return{$:1,a:e,b:r}}),T0=S(function(e,r,n){return{fU:e,fY:r,c2:n}}),M0=function(e){var r=e;return r},To=function(e){var r=e;return M0(r.et)},Mo=function(e){var r=e;return r.aL},Vr=function(e){var r=e;return r.c0},Rr=function(e){var r=e;return r.c1},D0=$(function(e,r){return $r({cy:o(on,e,tn(r)),c0:Vr(r),c1:Rr(r),c3:Ur(r)})}),A0=$(function(e,r){return{et:o(D0,e,To(r)),aL:Mo(r)}}),B0=$(function(e,r){var n=r;return o(Ar,o(on,e,n.cy),n.eJ)}),F0=$(function(e,r){var n=r;return{k:o(B0,e,n.k),e9:n.e9,fr:n.fr}}),Do=function(e){var r=e;return r},U0=function(e){return e},El=$(function(e,r){var n=Do(r),a=n.a,t=n.b;return U0(x(e(a),e(t)))}),V0=$(function(e,r){return o(El,on(e),r)}),Ao=function(e){var r=e;return r.eA},Bo=function(e){var r=e;return r.fr},jl=$(function(e,r){return{eA:r,fr:xe(e)}}),R0=$(function(e,r){return o(jl,Bo(r),o(on,e,Ao(r)))}),Nl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),E0=$(function(e,r){return o(Nl,on(e),r)}),Ra=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(T0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(zo,s,o(A0,i,c));case 1:var s=r.a,l=r.b;return o(Rl,s,o(E0,i,l));case 3:var s=r.a,u=r.b;return o(Vl,s,o(R0,i,u));case 2:var s=r.a,v=r.b;return o(Fl,s,o(F0,i,v));case 4:var s=r.a,d=r.b;return o(Ul,s,o(V0,i,d));default:var m=r.a;return ko(o(re,Ra(V(n,a,t)),m))}}),j0=function(e){return Ra(V(e,0,0))},Bi=function(e){return Ra(V(0,e,0))},N0=function(e){return Ra(V(0,0,e))},aa=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Dr(c),u=Kr(c),v=a.eJ,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,y=g*g,h=1-2*(f+y),P=s.c2*u,T=l*P,N=2*(w-T),E=2*(w+T),R=d*P,j=2*(R+b),Y=2*(R-b),F=g*P,Z=2*(F-m),Q=2*(F+m),ie=P*P,ve=1-2*(y+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+N*i.fY+j*i.c2,fY:E*i.fU+oe*i.fY+Z*i.c2,c2:Y*i.fU+Q*i.fY+h*i.c2}}),Fn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Dr(c),u=Kr(c),v=a.cy,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c2-s.c2,g=a.eJ,b=g,w=b.fU*u,y=l*w,h=w*w,P=b.fY*u,T=l*P,N=w*P,E=P*P,R=1-2*(h+E),j=b.c2*u,Y=l*j,F=2*(N-Y),Z=2*(N+Y),Q=w*j,ie=2*(Q+T),ve=2*(Q-T),oe=P*j,de=2*(oe-y),Te=2*(oe+y),Ce=j*j,mr=1-2*(E+Ce),pr=1-2*(h+Ce);return{fU:s.fU+mr*d+F*m+ie*f,fY:s.fY+Z*d+pr*m+de*f,c2:s.c2+ve*d+Te*m+R*f}}),Y0=S(function(e,r,n){return $r({cy:p(Fn,e,r,tn(n)),c0:p(aa,e,r,Vr(n)),c1:p(aa,e,r,Rr(n)),c3:p(aa,e,r,Ur(n))})}),G0=S(function(e,r,n){return{et:p(Y0,e,r,To(n)),aL:Mo(n)}}),W0=$(function(e,r){var n=o(Fn,e,r),a=o(aa,e,r);return function(t){var i=t;return o(Ar,n(i.cy),a(i.eJ))}}),H0=S(function(e,r,n){var a=n;return{k:p(W0,e,r,a.k),e9:a.e9,fr:a.fr}}),I0=S(function(e,r,n){return o(El,o(Fn,e,r),n)}),O0=S(function(e,r,n){return o(jl,Bo(n),p(Fn,e,r,Ao(n)))}),J0=S(function(e,r,n){return o(Nl,o(Fn,e,r),n)}),Ea=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(zo,l,p(G0,e,r,a));case 1:var l=n.a,t=n.b;return o(Rl,l,p(J0,e,r,t));case 3:var l=n.a,i=n.b;return o(Vl,l,p(O0,e,r,i));case 2:var l=n.a,c=n.b;return o(Fl,l,p(H0,e,r,c));case 4:var l=n.a,u=n.b;return o(Ul,l,p(I0,e,r,u));default:var v=n.a;return ko(o(re,o(Ea,e,r),v))}}),Fo=Al,q0=o(Ar,Pr,Fo),Z0=$(function(e,r){return p(Ea,q0,ar(e),r)}),Uo=wo,X0=o(Ar,Pr,Uo),Q0=$(function(e,r){return p(Ea,X0,ar(e),r)}),K0=o(Ar,Pr,Po),ep=$(function(e,r){return p(Ea,K0,ar(e),r)}),rp=L(Va,237/255,212/255,0/255,1),np=$(function(e,r){var n=function(a){var t=a.a,i=a.b,c=(t+i)*.1,l=L(Tt,-fr,fr,14,e.bD+c);return o(N0,-.5,o(Bi,i,o(j0,t,o(ep,l,o(Z0,l,o(Q0,l,o(P0,k0(rp),1)))))))};return o(Bi,L(Tt,-.5,.5,7,e.bD),L0(o(re,n,jf(r.ax))))}),ap=function(e){return e},tp=function(e){return{$:0,a:e}},op=tp,ip={$:3},cp=ip,lp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),up=lp,vp=$(function(e,r){return r.b?p(dr,D,r,e):e}),Ye=function(e){return p(dr,vp,z,e)},Vo=$(function(e,r){return Ye(o(re,e,r))}),$p=function(e){return{$:1,a:e}},fp=$p,sp=function(e){return o(kn,"height",Be(e))},dp=function(e){return $$(m$(e))},mp=dp,pp=function(e){return{$:2,a:e}},bp=pp,gp=function(e){return o(zr,"",e)},hp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Se(l*1e3)/1e3},c=function(l){return Se(l*1e4)/100};return gp(_(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},_p=$(function(e,r){switch(r.$){case 0:return o(Mf,e,r);case 1:return o(Df,e,r);case 2:return o(Af,e,r);case 3:return o(Bf,e,r);case 4:return o(Ff,e,r);default:return o(Uf,e,r)}}),wp=$(function(e,r){switch(r.$){case 0:return o(cf,e,r);case 1:return o(lf,e,r);case 2:return o(uf,e,r);case 3:return o(vf,e,r);case 4:return o($f,e,r);case 5:return o(ff,e,r);case 6:return o(sf,e,r);case 7:return o(df,e,r);default:return mf(e)}}),yp=S(function(e,r,n){return p(Tf,e,r,n)}),Fi=function(e){var r=e;return r},cn=J$,Qa=L(cn,1,1,1,1),qe=S(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),xp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Sp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(xp,n*a/t,n,n*(1-a-t)/t)}),Cp=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ja=$(function(e,r){return Cp(o(Sp,e,r))}),Yl=$(function(e,r){return{dn:yr(e.dn,r.dn),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bZ,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bZ,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bZ,bZ:e.bZ*r.bZ}}),Xe=ef,Pp=function(e){return Xe({dw:e.q,dx:e.t,dy:e.w,dz:e.H,dA:e.r,dB:e.u,dC:e.x,dD:e.I,dE:e.s,dF:e.v,dG:e.y,dH:e.J,dI:0,dJ:0,dK:0,dL:1})},Ka=ge(function(e,r,n,a,t){var i=a.dn?1:-1,c=L(cn,a.bZ,a.bZ,a.bZ,i);return _e(t,e,c,Pp(a),a.dn,r,n)}),Gl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Yl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(D,C(Ka,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(D,C(Ka,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var h=t.a,P=o(D,C(Ka,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:P};default:var T=t.a;return p(Tn,L(Gl,e,r,n,a),i,T)}}),Lp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Wl=Lp,Ro=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),zp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ro,518,r,n,a)},kp=$(function(e,r){return{$:6,a:e,b:r}}),Tp=kp,Hl=_([zp({V:1,W:0,Z:!1}),L(Wl,!1,!1,!1,!1),o(Tp,0,1)]),en=519,Eo=8,Il=15,qr=7681,Mp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=of,Dp=$(function(e,r){return{$:0,a:e,b:r}}),Ap=Dp({db:1,dk:0,dU:5}),Ae=j$,Bp=Ap(_([{d0:o(Ae,-1,-1)},{d0:o(Ae,1,-1)},{d0:o(Ae,-1,1)},{d0:o(Ae,1,1)}])),Fp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"d0"},uniforms:{}},Up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},jo=S(function(e,r,n){var a=e.cL,t=e.cm,i=e.c$,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bo),o(ae,l(v.a9),o(ae,l(v.bw),l(v.bx))))};return o(u,n,o(u,r,p(Up,a,t,i)))}),No=function(e){return p(jo,{cm:e.cm,cL:e.cL,c$:e.c$},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx})},Yo=function(e){return C(ne,_([No(e),L(Wl,!1,!1,!1,!1)]),Fp,Mp,Bp,{})},Vp=Yo({a9:qr,cm:0,cL:Eo,bo:en,c$:Il,bw:qr,bx:qr}),Rp=516,Ui=5386,ye=7680,Ep=function(e){return o(An,2,e+4)},Ol=function(e){return Yo({a9:ye,cm:Il,cL:Eo,bo:Rp,c$:Ep(e),bw:Ui,bx:Ui})},jp=S(function(e,r,n){return Ye(_([p(qe,e,n,Hl),_([Ol(r),Vp])]))}),Np=$(function(e,r){return Ye(o(Uc,jp(e),r))}),Yp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ro,513,r,n,a)},Gp=Yp({V:1,W:0,Z:!0}),Wp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Hp=function(e){var r=e.bX,n=e.bI,a=e.bB,t=e.by,i=e.bE,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return Wp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Ip=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=$(function(e,r){var n=e,a=r;return p(Ip,32774,n,a)}),Op=1,Ri=771,Jp=770,Go=Hp({by:0,aI:o(Vi,Op,Ri),bB:0,bE:o(Vi,Jp,Ri),bI:0,bX:0}),Yr=_([Gp,Go]),qp=function(e){var r=e;return r.dN},Zp=function(e){var r=e;return r.dO},Jl=function(e){var r=e;return r.dP},Xp=function(e){var r=e;return r.dQ},Qp=function(e){var r=e;return r.dR},ql=function(e){var r=e;return r.dS},Zl=function(e){return V(o(lr,Xp(e),qp(e)),o(lr,Qp(e),Zp(e)),o(lr,ql(e),Jl(e)))},Kp=function(e){return e},e3=function(e){return $r({cy:Kp({fU:e.H,fY:e.I,c2:e.J}),c0:cr({fU:e.q,fY:e.r,c2:e.s}),c1:cr({fU:e.t,fY:e.u,c2:e.v}),c3:cr({fU:e.w,fY:e.x,c2:e.y})})},et=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c2*v.c2,fY:a.fU*l.fU+a.fY*l.fY+a.c2*l.c2,c2:a.fU*i.fU+a.fY*i.fY+a.c2*i.c2}}),Xl=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c2-i.c2,v=n.c3,s=v,d=n.c1,m=d,f=n.c0,g=f;return{fU:c*g.fU+l*g.fY+u*g.c2,fY:c*m.fU+l*m.fY+u*m.c2,c2:c*s.fU+l*s.fY+u*s.c2}}),Ql=$(function(e,r){return{cy:o(Xl,e,tn(r)),c0:o(et,e,Vr(r)),c1:o(et,e,Rr(r)),c3:o(et,e,Ur(r))}}),Sa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),ta=$(function(e,r){return I(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ta,n,a)}),r3=$(function(e,r){var n=Sa(r),a=Sa(e);return{dN:o(ce,a.dN,n.dN),dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(fe,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS)}}),Ge=function(e){var r=e;return r},n3=function(e){var r=e;return V(r.fU,r.fY,r.c2)},hn=$(function(e,r){var n=e,a=r;return a+n}),a3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(xe(a)),c=ra(xe(n)),l=ra(xe(t)),u=n3(r),v=u.a,s=u.b,d=u.c;return{dN:o(hn,c,v),dO:o(hn,i,s),dP:o(hn,l,d),dQ:o(lr,c,v),dR:o(lr,i,s),dS:o(lr,l,d)}}),Ei=B(function(e,r,n,a){var t=n.eA,i=2*n.eY*r,c=2*n.eX*r,l=2*n.eW*r,u=t.c2*r,v=t.fY*r,s=t.fU*r,d=Ge(Ur(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c2),f=Ge(Rr(e)),g=J(l*f.fU)+J(c*f.fY)+J(i*f.c2),b=Ge(Vr(e)),w=J(l*b.fU)+J(c*b.fY)+J(i*b.c2),y=o(a3,V(w,g,m),o(Xl,e,p(Ft,s,v,u)));if(a.$)return ee(y);var h=a.a;return ee(o(r3,h,y))}),Vt=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Ei,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Ei,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Vt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Ql,e3(v),e),m=r*v.bZ,f=e,g=r,b=L(Vt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Er=G$,jr=W$,Nr=H$,Kl=function(e){return{$:4,a:e}},t3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),Un=function(e){return Kl(o(t3,e,z))},o3={dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bZ:1},ji=Yo({a9:qr,cm:0,cL:Eo,bo:en,c$:255,bw:qr,bx:qr}),i3=function(e){var r=e,n=o(ke,J(r.fU),o(ke,J(r.fY),J(r.c2)));if(n){var a=r.c2/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return c*n}else return Je},Me={bB:0,ez:!1,bI:0,cH:0,bX:0,cW:0,fU:0,fY:0,c2:0},Re=$(function(e,r){var n=e,a=r;return Xe({dw:n.fU,dx:n.bX,dy:a.fU,dz:a.bX,dA:n.fY,dB:n.bI,dC:a.fY,dD:a.bI,dE:n.c2,dF:n.bB,dG:a.c2,dH:a.bB,dI:n.cW,dJ:n.cH,dK:a.cW,dL:a.cH})}),sn=x({be:o(Re,Me,Me),bN:o(Re,Me,Me),bO:o(Re,Me,Me),bP:o(Re,Me,Me)},L(cn,0,0,0,0)),eu=514,ru=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ro,515,r,n,a)},nu=240,c3=_([ru({V:1,W:0,Z:!0}),No({a9:ye,cm:nu,cL:0,bo:eu,c$:0,bw:ye,bx:ye}),Go]),l3=$(function(e,r){var n=e,a=r.fh,t=r.eT,i=r.es,c=xe(a),l=c,u=xe(t),v=u,s=n.cJ;if(s.$){var m=s.a;return wt(v)?Xe({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:0,dJ:0,dK:0,dL:1}):Xe({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:-2/(v-l),dH:-(v+l)/(v-l),dI:0,dJ:0,dK:0,dL:1})}else{var d=s.a;return wt(v)?Xe({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-1,dH:-2*l,dI:0,dJ:0,dK:-1,dL:0}):Xe({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-(v+l)/(v-l),dH:-2*v*l/(v-l),dI:0,dJ:0,dK:-1,dL:0})}}),Wn=$(function(e,r){return(1&e>>r)===1?0:1}),u3=function(e){return _([ru({V:1,W:0,Z:!0}),No({a9:ye,cm:nu,cL:e,bo:eu,c$:0,bw:ye,bx:ye}),Go])},v3=S(function(e,r,n){return Ye(o(re,function(a){var t=a<<4,i=L(cn,o(Wn,a,0),o(Wn,a,1),o(Wn,a,2),o(Wn,a,3));return p(qe,e,x(r,i),u3(t))},o(Xr,1,o(An,2,n)-1)))}),Zr=function(e){var r=e;return r},$3=rf,f3={cy:Pr,c0:Fo,c1:Uo,c3:Po},Vn=function(e){var r=e;return r},s3=function(e){var r=Vn(tn(e)),n=Ge(Ur(e)),a=Ge(Rr(e)),t=Ge(Vr(e));return Xe({dw:t.fU,dx:a.fU,dy:n.fU,dz:r.fU,dA:t.fY,dB:a.fY,dC:n.fY,dD:r.fY,dE:t.c2,dF:a.c2,dG:n.c2,dH:r.c2,dI:0,dJ:0,dK:0,dL:1})},d3=$(function(e,r){var n=r;return s3(o(Ql,n,e))}),m3=function(e){return o(d3,f3,e)},p3=function(e){var r=e;return r.c_},b3=function(e){var r=e;return Vr(r)},g3=function(e){var r=e;return Rr(r)},h3=function(e){var r=p3(e.ex),n=$r({cy:Mt(r),c0:b3(r),c1:g3(r),c3:xa(At(r))}),a=Un(e.aQ),t=a,i=L(Vt,n,1,q,_([t]));if(i.$===1)return z;var c=i.a,l=m3(r),u=o(te,.99,o(ce,xe(e.eC),Dt(Jl(c)))),v=Zl(c),s=v.a,d=v.b,m=v.c,f=i3(p(So,s,d,m)),g=o(te,1.01,o(hn,f,Dt(ql(c)))),b=o(l3,e.ex,{es:e.es,eT:g,fh:u}),w=$3(b).dL,y=w?Ge(xa(At(r))):Zr(Mt(r)),h=function(){var oe=e.fK;switch(oe.$){case 0:return x(0,0);case 1:return x(1,0);case 2:return x(2,0);case 3:var de=oe.a;return x(3,de);case 4:var de=oe.a;return x(4,de);default:return x(5,0)}}(),P=h.a,T=h.b,N=e.eR,E=N,R=o(ja,E,e.fR),j=R,Y=Xe({dw:0,dx:y.fU,dy:Er(j),dz:e.ed,dA:0,dB:y.fY,dC:jr(j),dD:na(f),dE:0,dF:y.c2,dG:Nr(j),dH:P,dI:0,dJ:w,dK:0,dL:T}),F=_e(Gl,Y,l,b,o3,t,{M:z,U:z,fz:z}),Z=e.fb;switch(Z.$){case 0:var Q=Z.a;return Ye(_([p(qe,F.M,x(Q,Qa),Yr),p(qe,F.U,sn,Yr)]));case 1:var Q=Z.a;return Ye(_([p(qe,F.M,sn,Yr),_([ji]),p(qe,F.fz,Q.be,Hl),_([Ol(0)]),p(qe,F.M,x(Q,Qa),c3),p(qe,F.U,sn,Yr)]));default:var ie=Z.a,ve=Z.b;return Ye(_([p(qe,F.M,x(ve,Qa),Yr),_([ji]),o(Np,F.fz,ie),p(v3,F.M,ve,Mr(ie)),p(qe,F.U,sn,Yr)]))}},_3=function(e){return o(kn,"width",Be(e))},w3=$(function(e,r){var n=_([fp(1),bp(0),op(!0),L(up,0,0,0,0)]),a=function(){var P=e.eq;switch(P.$){case 0:return V(n,"0",1);case 1:return V(o(D,cp,n),"1",1);default:var T=P.a;return V(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Fi(v),d=o(se,"height",Be(s)+"px"),m=Fi(u),f=m/s,g=o(Vo,function(P){return h3({es:f,ex:e.ex,eC:e.eC,aQ:P.aQ,eR:P.eR,fb:P.fb,ed:c,fK:P.fK,fR:P.fR})},r),b=o(se,"width",Be(m)+"px"),w=e.aJ,y=w,h=hp(y);return p(mp,"div",_([o(se,"padding","0px"),b,d]),_([x(i,p(yp,t,_([_3(Se(m*c)),sp(Se(s*c)),b,d,o(se,"display","block"),o(se,"background-color",h)]),g))]))}),y3=function(e){return{$:2,a:e}},x3=function(e){return y3(e)},S3=function(e){return o(w3,{eq:x3(e.b8),aJ:e.aJ,ex:e.ex,eC:e.eC,aL:e.aL},_([{aQ:e.aQ,eR:e.eR,fb:e.fb,fK:e.fK,fR:e.fR}]))},Ni=function(e){return e},au=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),C3=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),P3=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),L3=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),z3=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Wo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(z3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(C3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(L3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(P3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ho={$:0},k3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),d=o(fe,s.dQ,e),m=o(ce,s.dN,r),f=o(fe,s.dR,n),g=o(ce,s.dO,a),b=o(fe,s.dS,t),w=o(ce,s.dP,i),y=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=h;continue e}else return{dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t}}),T3=S(function(e,r,n){var a=Sa(e(r));return ka(k3,a.dQ,a.dN,a.dR,a.dO,a.dS,a.dP,e,n)}),rt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),iu=function(e){return o(rt,e.dN,e.dQ)&&o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)?e:{dN:o(ce,e.dQ,e.dN),dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(fe,e.dQ,e.dN),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP)}},Pn=function(e){var r=e;return r},cu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=hr(n),c=_r(n),l=wr(n),u=hr(a),v=_r(a),s=wr(a),d=hr(t),m=_r(t),f=wr(t);return iu({dN:o(ce,i,o(ce,u,d)),dO:o(ce,c,o(ce,v,m)),dP:o(ce,l,o(ce,s,f)),dQ:o(fe,i,o(fe,u,d)),dR:o(fe,c,o(fe,v,m)),dS:o(fe,l,o(fe,s,f))})},lu=I$,Le=function(e){return lu(Vn(e))},uu=function(e){var r=e;return r},Na=function(e){return lu(uu(e))},vu=function(e){return e},M3=$(function(e,r){var n=e,a=r,t=o(ke,J(a.fU),o(ke,J(a.fY),J(a.c2)));if(t){var i=a.c2/t,c=a.fY/t,l=a.fU/t,u=br(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c2:n*i/u}}else return Ll}),D3=M3(vu(1)),$u=S(function(e,r,n){var a=o(ya,r,n),t=o(ya,e,r);return D3(o(ho,a,t))}),A3=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Na(p($u,n,a,t));return V({o:i,d0:Le(n)},{o:i,d0:Le(a)},{o:i,d0:Le(t)})},B3=$(function(e,r){return{$:2,a:e,b:r}}),fu=B3({db:3,dk:0,dU:4}),F3=function(e){if(e.b){var r=e.a,n=e.b,a=fu(o(re,A3,e)),t=p(T3,cu,r,n);return L(au,t,e,a,0)}else return Ho},Ve=S(function(e,r,n){return V(e,r,n)}),su=function(){var e=er(1),r=er(1),n=er(1),a=o(te,-.5,e),t=o(te,-.5,r),i=o(te,-.5,n),c=p(me,i,t,a),l=o(te,.5,e),u=p(me,i,t,l),v=o(te,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(te,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Wo(F3(_([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),Hn={$:0},U3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),V3=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Na(p($u,u,l,c)),s={o:v,d0:Le(u)},d={o:v,d0:Le(l)},m={o:v,d0:Le(c)};return o(D,s,o(D,d,o(D,m,n)))}),Io=function(e){var r=e;return r.D},R3=B(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ee(p(e,t,i,c))}),Rt=4294967295>>>32-xn,Et=Xu,E3=S(function(e,r,n){e:for(;;){var a=Rt&r>>>e,t=o(Et,a,n);if(t.$){var v=t.a;return o(Et,Rt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),j3=function(e){return e>>>5<<5},N3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,j3(n))>-1?ee(o(Et,Rt&e,i)):ee(p(E3,a,e,t))}),Oo=function(e){var r=e;return r.ah},nt=$(function(e,r){return o(N3,e,Oo(r))}),Y3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(R3,S(function(c,l,u){return V(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(ml,r,Io(e))},G3=S(function(e,r,n){e:for(;;){var a=o(co,Ue,e),t=a.a,i=a.b;if(I(ht(t),Ue)<0)return o(Gc,!0,{z:r,l:n,p:t});var c=i,l=o(D,Nc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Jo=function(e){return e.b?p(G3,e,z,0):Ec},W3=S(function(e,r,n){return e(r(n))}),H3=$(function(e,r){return!o(Kc,o(W3,ws,e),r)}),I3=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(D,n,a):a}),z,r)}),O3=function(e){var r=e.a;return r},du=$(function(e,r){var n=O3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(H3,a,r)?{D:r,ah:e}:{D:o(I3,a,r),ah:e}}),J3=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=J3({db:1,dk:3,dU:4}),oa=$(function(e,r){var n=Zr(r),a=Zr(e);return x(V(a.fU,a.fY,a.c2),V(n.fU,n.fY,n.c2))}),Yi=p(Bn,0,0,0),at=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(cl,o(oa,e,r),t);if(v.$){var d={o:Yi,d0:Le(r)},m={o:Yi,d0:Le(e)},f=u+1,g=u;return V(o(D,V(n,g,f),o(D,V(n,f,a),c)),o(D,d,o(D,m,l)),u+2)}else{var s=v.a;return V(o(D,V(n,s,a),c),l,u)}}),q3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,h=v,P=a+3,T=_e(at,s,m,f,b,r,_e(at,d,s,g,f,r,_e(at,m,d,b,g,r,t)));e=w,r=y,n=h,a=P,t=T;continue e}else{var N=t,E=N.a,R=N.b;return x(E,Fe(R))}}),Z3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(mn,o(oa,m,s),f,p(mn,o(oa,s,d),g,p(mn,o(oa,d,m),b,t))),y=o(D,V(b,g,f),a),h=e,P=v,T=n+3,N=y,E=w;e=h,r=P,n=T,a=N,t=E;continue e}else return V(a,t,n)}),Lr=S(function(e,r,n){var a=Y3(n),t=p(dr,V3(r),z,a),i=C(Z3,r,a,0,z,Sl),c=i.a,l=i.b,u=i.c,v=C(q3,r,l,a,0,V(c,z,u)),s=v.a,d=v.b,m=xl(d)?t:le(t,d);return p(U3,e,o(du,Jo(m),s),o(Rn,m,s))}),jt=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Xr,0,Mr(e)-1)),ah:Jo(Ye(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},mu=function(e){switch(e.$){case 0:return Hn;case 1:var a=e.a,r=e.b,n=o(re,Pn,r);return p(Lr,a,Tr,jt(n));case 2:var a=e.a,r=e.b,n=o(re,Pn,r);return p(Lr,a,Tr,jt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.d0},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.d0},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.d0},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.d0},t);case 8:return Hn;case 9:return Hn;default:return Hn}},Gi=mu(su),pu={$:0},k=pu,be=$(function(e,r){return{$:1,a:e,b:r}}),X3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bF"}},Q3=1029,K3=function(e){return{$:5,a:e}},bu=function(e){var r=e;return K3(r)},eb=bu(Q3),rb=1028,nb=bu(rb),ze=S(function(e,r,n){return r===1?e?o(D,eb,n):o(D,nb,n):n}),gu={src:`
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
    `,attributes:{position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return C(ne,p(ze,l,a,d),gu,X3,n,{bF:e,b:c,c:i,d:v,e:t,f:u})}))}),qo={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return C(ne,p(ze,l,a,d),hu,qo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),_u=$(function(e,r){return{$:3,a:e,b:r}}),ab={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bV",sceneProperties:"e"}},wu={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bV",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tb=B(function(e,r,n,a){return o(_u,n,K(function(t,i,c,l,u,v,s,d){return C(ne,d,wu,ab,a,{aw:e,b:c,c:i,bV:r,d:v,e:t,f:u})}))}),Zo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},En=function(e){var r=e;return r},Ya=O$,or=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return C(ne,p(ze,u,t,m),hu,Zo,a,{aO:o(Ya,En(r),e),b:l,c,d:s,e:i,f:v})}))}),ob={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bV",sceneProperties:"e"}},ib=ge(function(e,r,n,a,t){return o(_u,a,K(function(i,c,l,u,v,s,d,m){return C(ne,m,wu,ob,t,{aO:o(Ya,En(r),e),b:l,c,bV:n,d:s,e:i,f:v})}))}),yu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColor:"cn",sceneProperties:"e",viewMatrix:"f"}},xu={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},In=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return C(ne,p(ze,l,a,d),xu,yu,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,cn:e,b:c,c:i,d:v,e:t,f:u})}))}),Su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColorTexture:"co",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Cu={src:`
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
    `,attributes:{normal:"o",position:"d0",tangent:"ef",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cb=We(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return C(ne,p(ze,v,i,f),Cu,Su,t,{P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,co:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b5",constantMetallic:"b6",constantRoughness:"b7",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallicTexture:"cs",normalMapTexture:"aX",roughnessTexture:"cP",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},lb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(d,m,f,g,b,w,y,h){var P=y.a,T=y.b;return C(ne,p(ze,g,s,h),Cu,Pu,v,{b3:e,b5:r,b6:i,b7:a,P:T,be:P.be,bN:P.bN,bO:P.bO,bP:P.bP,cs:t,b:f,c:m,aX:c,d:w,cP:n,e:d,a0:l,f:b})}))}}}}}}}}}}},Lu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallic:"cr",roughness:"cO",sceneProperties:"e",viewMatrix:"f"}},On=We(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return C(ne,p(ze,v,i,f),xu,Lu,t,{b2:e,P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,cr:n,b:u,c:l,d,cO:r,e:c,f:s})}))}),ub=function(e){return{$:0,a:e}},Wi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return x(n,1)}else return r.a,x(e,0)}),vb=function(e){return L(cn,Er(e),jr(e),Nr(e),1)},Xo=L(cn,0,0,0,0),ia=$(function(e,r){if(r.$){var a=r.a.C;return x(a,Xo)}else{var n=r.a;return x(e,vb(n))}}),zu=$(function(e,r){var n=x(e,r);if(n.a.$){var t=n.a.a.C;return o(Wi,x(t,Xo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Wi,o(ia,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,ub(a)}}),$b=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),fb=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),sb=function(e){return o(Ae,e,1)},Nt=o(Ae,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return x(a,Nt)}else{var n=r.a;return x(e,sb(n))}}),ku=B(function(e,r,n,a){var t=L(fb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Jn,x(u,Xo),o(Gr,u,r),o(Gr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Jn,o(ia,u,e),x(u,Nt),o(Gr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Jn,o(ia,u,e),o(Gr,u,r),x(u,Nt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Jn,o(ia,u,e),o(Gr,u,r),o(Gr,u,n),x(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p($b,i,c,l)}}),db={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bF",sceneProperties:"e"}},ot=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return C(ne,p(ze,u,t,m),gu,db,a,{b0:En(r),bF:e,b:l,c,d:s,e:i,f:v})}))}),Tu={src:`
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
    `,attributes:{normal:"o",position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},mb=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return C(ne,p(ze,l,a,d),Tu,Su,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,co:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),pb=Wt(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,d,m,f,g,b,w){var y=b.a,h=b.b;return C(ne,p(ze,m,u,w),Tu,Pu,l,{b3:e,b5:r,b6:i,b7:a,P:h,be:y.be,bN:y.bN,bO:y.bO,bP:y.bP,cs:t,b:d,c:s,aX:e,d:g,cP:n,e:v,a0:0,f})}))}),Ln=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),bb=function(e){var r=e;return p(Ln,r.dQ,r.dN,.5)},gb=function(e){var r=e;return p(Ln,r.dR,r.dO,.5)},hb=function(e){var r=e;return p(Ln,r.dS,r.dP,.5)},_b=function(e){return p(me,bb(e),gb(e),hb(e))},G=function(e){var r=Zl(e),n=r.a,a=r.b,t=r.c;return{eA:Vn(_b(e)),eW:n/2,eX:a/2,eY:t/2}},Qo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(tr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(tr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(tb,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return C(ot,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ot,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ot,l,v,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(or,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return C(or,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return C(or,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(ib,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(zu,s,E);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,h=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(mb,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(cb,b,y,h,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(In,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(In,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(In,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(In,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var P=e.b,T=e.c,N=e.d,E=e.e,R=L(ku,P,T,N,E);if(R.$){var Z=R.a,Q=Z.a,ie=Z.b,ve=R.b,oe=ve.a,de=ve.b,Te=R.c,Ce=Te.a,mr=Te.b,pr=R.d,y=pr.a,h=pr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Iu(pb,Q,ie,oe,de,Ce,mr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return lb(Q)(ie)(oe)(de)(Ce)(mr)(y)(h)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=R.a,Y=R.b,F=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,j,Y,F,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,j,Y,F,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,j,Y,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,j,Y,F,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),it=function(e){var r=e;return r.fU},ct=function(e){var r=e;return r.fY},lt=function(e){var r=e;return r.c2},wb=function(e){var r=e,n=lt(r.c3),a=ct(r.c3),t=it(r.c3),i=lt(r.c1),c=ct(r.c1),l=it(r.c1),u=lt(r.c0),v=ct(r.c0),s=it(r.c0);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},yb=function(e){var r=Vn(tn(e)),n=Ge(Ur(e)),a=Ge(Rr(e)),t=Ge(Vr(e));return{dn:wb(e),q:t.fU,r:t.fY,s:t.c2,t:a.fU,u:a.fY,v:a.c2,w:n.fU,x:n.fY,y:n.c2,H:r.fU,I:r.fY,J:r.c2,bZ:1}},Wr=$(function(e,r){return{$:5,a:e,b:r}}),Mu=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Yl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Du=$(function(e,r){return o(Mu,yb(e),r)}),Ga=function(e){return{$:2,a:e}},xb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eA;return{eA:{fU:n*i.fU,fY:a*i.fY,c2:t*i.c2},eW:n*r.eW,eX:a*r.eX,eY:t*r.eY}}),Sb=Z$,Cb=q$,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Cb(a),g=f.fU,b=f.fY,w=f.c2,y=f.en,h=Sb({en:y,fU:g*s,fY:b*d,c2:w*m});return ka(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Yt=$(function(e,r){switch(r.$){case 0:return pu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Yt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(xb,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Ga(o(Hi,e,i));default:var c=r.a;return Kl(o(re,Yt(e),c))}}),Ko=$(function(e,r){var n=r;return o(Yt,e,n)}),ei={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Au=7683,Bu=7682,Pb=p(jo,{cm:0,cL:0,c$:15},{a9:ye,bo:en,bw:ye,bx:Au},{a9:ye,bo:en,bw:ye,bx:Bu}),Lb=p(jo,{cm:0,cL:0,c$:15},{a9:ye,bo:en,bw:ye,bx:Bu},{a9:ye,bo:en,bw:ye,bx:Au}),ri=$(function(e,r){return e?o(D,Lb,r):o(D,Pb,r)}),zb={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},kb=function(e){if(e.$){var r=e.c;return ee(K(function(n,a,t,i,c,l,u,v){return C(ne,o(ri,i,v),zb,ei,r,{b:t,c:a,d:l,e:n,b_:u,f:c})}))}else return q},Ca=function(e){var r=kb(e);if(r.$)return k;var n=r.a;return Ga(n)},Tb=B(function(e,r,n,a){var t=o(Qo,n,su),i=function(){var s=x(e,r);return s.a?s.b?Un(_([t,Ca(Gi)])):t:s.b?Ca(Gi):k}(),c=Mo(a),l=c.a,u=c.b,v=c.c;return o(Du,To(a),o(Ko,V(l,u,v),i))}),Mb=$(function(e,r){return L(Tb,!0,!0,e,r)}),Fu=$(function(e,r){return{$:0,a:e,b:r}}),Db=function(e){var r=po(e),n=r.cK,a=r.ca,t=r.b4;return p(Bn,n,a,t)},Ab=function(e){return o(Fu,0,Ut(Db(e)))},Bb=function(e){var r=e;return r.k},wn=function(e){var r=e;return Dr(r)},Fb=$(function(e,r){var n=e.d0,a=e.o;return o(D,{o:Na(a),d0:Le(n)},r)}),Ub=za(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Nr(l.d0),s=jr(l.d0),d=Er(l.d0),m=o(ta,e,d),f=o(ke,r,d),g=o(ta,n,s),b=o(ke,a,s),w=o(ta,t,v),y=o(ke,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=y,c=h;continue e}else return iu({dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t})}),Uu=$(function(e,r){var n=Nr(e.d0),a=jr(e.d0),t=Er(e.d0);return Ht(Ub,t,t,a,a,n,n,r)}),Vb=function(e){var r=p(Mc,Fb,z,Oo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Io(e)),i=o(Uu,n,a);return L(tu,i,e,t,0)}else return Ho},Ii=$(function(e,r){var n=e,a=r,t=n.c1,i=t,c=n.c0,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c2:a.fU*l.c2+a.fY*i.c2}}),Pa=function(e){var r=e;return Kr(r)},Gt=function(e){return ar(2*fr*e)},Rb=Tr,Oi=Rb({cy:Pr,c0:Fo,c1:Uo}),Vu=function(){var e=72,r=o(Tl,e,Gt(1)),n=er(1),a=Or(Co),t=Or(xo),i=er(1),c=o(te,.5,i),l=p(me,Je,Je,c),u=o(te,-.5,i),v=p(me,Je,Je,u),s=function(f){var g=o(te,f,r),b=Or(o(Ii,Oi,Bt(g))),w=o(te,wn(g),n),y=o(te,Pa(g),n),h=p(me,w,y,c),P=p(me,w,y,u),T=o(ga,e,f+1),N=o(te,T,r),E=Or(o(Ii,Oi,Bt(N))),R=o(te,wn(N),n),j=o(te,Pa(N),n),Y=p(me,R,j,u),F=p(me,R,j,c);return _([V({o:t,d0:v},{o:t,d0:Y},{o:t,d0:P}),V({o:b,d0:P},{o:E,d0:Y},{o:E,d0:F}),V({o:b,d0:P},{o:E,d0:F},{o:b,d0:h}),V({o:a,d0:l},{o:a,d0:h},{o:a,d0:F})])},d=o(re,s,o(Xr,0,e-1)),m=jt(Ye(d));return Wo(Vb(m))}(),Ji=mu(Vu),Eb=function(e){var r=zl(e),n=_o(r),a=n.a,t=n.b;return $r({cy:kl(e),c0:a,c1:t,c3:r})},jb=function(e){var r=e;return r.e9},Nb=function(e){var r=e;return r.fr},Yb=B(function(e,r,n,a){var t=Eb(Bb(a)),i=o(Qo,n,Vu),c=function(){var d=x(e,r);return d.a?d.b?Un(_([i,Ca(Ji)])):i:d.b?Ca(Ji):k}(),l=Nb(a),u=l,v=jb(a),s=v;return o(Du,t,o(Ko,V(u,u,s),c))}),Gb=$(function(e,r){return L(Yb,!0,!0,e,r)}),qi={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},Zi={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},dn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return Xe({dw:i.fU,dx:c.fU,dy:l.fU,dz:0,dA:i.fY,dB:c.fY,dC:l.fY,dD:0,dE:i.c2,dF:c.c2,dG:l.c2,dH:0,dI:0,dJ:0,dK:0,dL:0})},qn=fu(_([V({cV:0},{cV:1},{cV:2})])),Wb=$(function(e,r){var n=cu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(be,a,K(function(h,P,T,N,E,R,j,Y){return C(ne,p(ze,N,0,Y),qi,qo,qn,{aw:t,b:T,c:P,d:R,e:h,bt:dn(r),f:E})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,K(function(h,P,T,N,E,R,j,Y){return C(ne,p(ze,N,0,Y),qi,Zo,qn,{aO:o(Ya,En(c),i),b:T,c:P,d:R,e:h,bt:dn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(zu,l,f);if(u.$)return k;var v=u.a;return o(be,a,K(function(h,P,T,N,E,R,j,Y){var F=j.a,Z=j.b;return C(ne,p(ze,N,0,Y),Zi,yu,qn,{P:Z,be:F.be,bN:F.bN,bO:F.bO,bP:F.bP,cn:v,b:T,c:P,d:R,e:h,bt:dn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(ku,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,y=g.c;return o(be,a,K(function(h,P,T,N,E,R,j,Y){var F=j.a,Z=j.b;return C(ne,p(ze,N,0,Y),Zi,Lu,qn,{b2:b,P:Z,be:F.be,bN:F.bN,bO:F.bO,bP:F.bP,cr:y,b:T,c:P,d:R,cO:w,e:h,bt:dn(r),f:E})}))}}),Hb=function(){var e=_([{a$:o(Ae,0,1)},{a$:o(Ae,1,1)},{a$:o(Ae,2,1)},{a$:o(Ae,0,-1)},{a$:o(Ae,1,-1)},{a$:o(Ae,2,-1)}]),r=_([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(Rn,e,r)}(),Ib={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",triangleVertexPositions:"bt",viewMatrix:"f"}},Xi=function(e){return Ga(K(function(r,n,a,t,i,c,l,u){return C(ne,o(ri,t,u),Ib,ei,Hb,{b:a,c:n,d:c,e:r,b_:l,bt:dn(e),f:i})}))},Ob=B(function(e,r,n,a){var t=o(Wb,n,a),i=x(e,r);return i.a?i.b?Un(_([t,Xi(a)])):t:i.b?Xi(a):k}),Jb=$(function(e,r){return L(Ob,!0,!0,e,r)}),qb=$(function(e,r){var n=wr(r),a=wr(e),t=_r(r),i=_r(e),c=hr(r),l=hr(e);return{dN:o(ce,l,c),dO:o(ce,i,t),dP:o(ce,a,n),dQ:o(fe,l,c),dR:o(fe,i,t),dS:o(fe,a,n)}}),Zb=function(e){var r=Do(e),n=r.a,a=r.b;return o(qb,n,a)},Qi={src:`
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
    `,attributes:{lineSegmentVertex:"dv"},uniforms:{lineSegmentEndPoint:"dt",lineSegmentStartPoint:"du",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xb=$(function(e,r){return{$:1,a:e,b:r}}),Qb=Xb({db:2,dk:0,dU:1}),Ki=Qb(_([x({dv:0},{dv:1})])),Kb=$(function(e,r){var n=Zb(r),a=G(n),t=Do(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(be,a,K(function(v,s,d,m,f,g,b,w){return C(ne,w,Qi,qo,Ki,{aw:l,dt:Le(c),du:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,K(function(s,d,m,f,g,b,w,y){return C(ne,y,Qi,Zo,Ki,{aO:o(Ya,En(u),l),dt:Le(c),du:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),eg=$(function(e,r){return o(Kb,e,r)}),ec=$(function(e,r){var n=e,a=r;return n/a}),rg=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(yr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),rc=$(function(e,r){return e<1?z:C(rg,0,e,e,r,z)}),ng=$(function(e,r){var n=e.d0,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(D,{o:Na(a),d0:Le(n),L:o(Ae,c,l)},r)}),ag=function(e){var r=p(Mc,ng,z,Oo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Io(e)),i=o(Uu,n,a);return L(ou,i,e,t,0)}else return Ho},ni=$(function(e,r){var n=e,a=r,t=Dr(a);return{fU:t*Dr(n),fY:t*Kr(n),c2:Kr(a)}}),tg=function(){var e=er(1),r=72,n=o(Xr,0,r-1),a=o(rc,r,o(Ln,Je,Gt(1))),t=oo(r/2),i=o(Xr,0,t-1),c=o(rc,t,o(Ln,fn(90),fn(-90))),l=Jo(Ye(o(re,function(s){return o(re,function(d){return{o:Or(o(ni,s,d)),d0:p(me,o(te,wn(d)*wn(s),e),o(te,wn(d)*Pa(s),e),o(te,Pa(d),e)),L:x(o(ec,s,Gt(1)),o(ec,o(hn,fn(90),d),fn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ye(o(re,function(s){return Ye(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([V(b,g,m),V(b,m,f)])},i))},n));return Wo(ag(o(du,l,v)))}(),La=72,Zn=2*La,og=$(function(e,r){e:for(;;){var n=Zn+1,a=o(ga,Zn,2*e+3),t=o(ga,Zn,2*e+2),i=2*e+1,c=2*e,l=Zn,u=o(D,V(l,c,t),o(D,V(c,a,t),o(D,V(c,i,a),o(D,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),ig=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),cg=$(function(e,r){e:for(;;){var n=p(ig,0,2*fr,e/La),a={bz:n,bS:0,bY:1},t={bz:n,bS:1,bY:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),lg=function(){var e=o(cg,La-1,_([{bz:0,bS:0,bY:0},{bz:0,bS:1,bY:0}])),r=o(og,La-1,z);return o(Rn,e,r)}(),ug={src:`
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
    `,attributes:{angle:"bz",offsetScale:"bS",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},nc=function(e){return Ga(K(function(r,n,a,t,i,c,l,u){return C(ne,o(ri,!0,u),ug,ei,lg,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,b_:l,f:i})}))},vg=function(e){var r=uu(e);return{dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c2,bZ:1}},$g=$(function(e,r){return o(Mu,vg(e),r)}),fg=B(function(e,r,n,a){var t=o(Qo,n,tg),i=function(){var u=x(e,r);return u.a?u.b?Un(_([t,nc()])):t:u.b?nc():k}(),c=Bo(a),l=c;return o($g,o(ya,Pr,Ao(a)),o(Ko,V(l,l,l),i))}),sg=$(function(e,r){return L(fg,!0,!0,e,r)}),dg=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),mg=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),pg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Fu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(dg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Bl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(mg,n,a,t,i,c)}},bg=pg,Ru=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(Mb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Jb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(sg,bg(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Gb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(eg,Ab(c),l)]);default:var u=e.a;return o(Vo,Ru,u)}},gg=function(e){return o(Vo,Ru,e)},hg=$(function(e,r){return S3({eq:e.eq,aJ:ap(e.eu),ex:e.ex,eC:er(e.eC),b8:e.b8,aL:x(Ni(Se(e.bk.fS)),Ni(Se(e.bk.e_))),aQ:gg(r),eR:e.eR,fb:e.fb,fK:e.fK,fR:e.fR})}),Xn=function(e){return e*fr/180},Eu=function(e){return e},_g=$(function(e,r){var n=e,a=Ge(r.eJ),t=a.fU,i=a.fY,c=a.c2,l=o(ja,r.bK,r.aK),u=l;return{bB:Nr(u),ez:n,bI:jr(u),cH:0,bX:Er(u),cW:1,fU:-t,fY:-i,c2:-c}}),wg=function(e){return o(_g,Eu(!0),{aK:e.aK,eJ:o(ni,ar(e.bA),ar(e.bG)),bK:e.bK})},yg=function(e){return e},xg=function(e){return yg(1.2*o(An,2,e))},ut=Lo({fU:.37208,fY:.37529}),Sg=$(function(e,r){return{$:2,a:e,b:r}}),ju=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},Cg=function(e){var r=e;return r.ez},Pg=ju(sn.a),Lg=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?x(o(D,a,i),c):x(i,o(D,a,c))});return p(dr,n,x(z,z),r)}),zg=function(e){var r=e;return Xe({dw:r.fU,dx:r.bX,dy:0,dz:0,dA:r.fY,dB:r.bI,dC:0,dD:0,dE:r.c2,dF:r.bB,dG:0,dH:0,dI:r.cW,dJ:r.cH,dK:0,dL:0})},kg=K(function(e,r,n,a,t,i,c,l){var u=o(Lg,Cg,_([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,h=y.a;return o(Sg,o(re,zg,v),{be:o(Re,m,g),bN:o(Re,w,h),bO:o(Re,t,i),bP:o(Re,c,l)})}else return Pg}else return ju({be:o(Re,e,r),bN:o(Re,n,a),bO:o(Re,t,i),bP:o(Re,c,l)})}),Tg=B(function(e,r,n,a){return ka(kg,e,r,n,a,Me,Me,Me,Me)}),Mg={$:5},Dg=Mg,Ag=Lo({fU:.44757,fY:.40745}),Bg=function(e){return e},ac=function(e){return e},vt=function(e){return e},Fg={$:1},Ug=Fg,Vg=$(function(e,r){var n=e,a=Vn(r.d0),t=a.fU,i=a.fY,c=a.c2,l=o(ja,r.bK,r.aK),u=l;return{bB:Nr(u),ez:n,bI:jr(u),cH:0,bX:Er(u),cW:2,fU:t,fY:i,c2:c}}),tc=function(e){return o(Vg,Eu(!0),{aK:e.aK,bK:e.bK,d0:ea(e.d0)})},oc=function(e){var r=e;return r},Rg=function(e){e:for(;;){if(yr(e.dl,Je)&&yr(e.dm,Je))return Me;if(o(Pl,xe(e.dl),xe(e.dm))){var r={aK:e.aK,dl:e.dm,dm:e.dl,ej:xa(e.ej)};e=r;continue e}else{var n=J(oc(e.dm)/fr),a=J(oc(e.dl)/fr),t=Ge(e.ej),i=t.fU,c=t.fY,l=t.c2,u=o(ja,vu(1),e.aK),v=u;return{bB:a*Nr(v),ez:!1,bI:a*jr(v),cH:n/a,bX:a*Er(v),cW:3,fU:i,fY:c,c2:l}}}},Eg=function(e){return Rg({aK:e.aK,dl:e.dl,dm:e.dm,ej:o(ni,ar(e.bA),ar(e.bG))})},jg=$(function(e,r){var n=wg({bA:Xn(-90),aK:w0(Bg(2e3)),bG:Xn(-45),bK:vt(100)}),a=tc({aK:ut,bK:ac(6e3),d0:{fU:2,fY:3,c2:3}}),t=Eg({bA:Xn(0),aK:ut,bG:Xn(-45),dl:vt(20),dm:vt(10)}),i=tc({aK:Ag,bK:ac(6e3),d0:{fU:-2,fY:4,c2:3}});return o(hg,{eq:Ug,eu:sl,ex:yo(e),eC:.1,b8:e.b8,eR:xg(6),fb:L(Tg,i,a,n,t),bk:e.bk,fK:Dg,fR:ut},_([o(np,e,r)]))}),Ng=L(wm,jg,h0,z,Cm);const Yg={Main:{init:Ng(o(A,function(e){return De({e5:e})},o(M,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return De({ep:d,eE:s,da:v,eL:u,e8:l,fq:c,fv:i,ea:t,ei:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ma(Cn)))},o(M,"left",X))},o(M,"pressedKeys",ma(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return De({da:v,cb:u,fe:l,fw:c,fx:i,ei:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(A,function(r){return o(A,function(n){return De({e_:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(A,function(e){return o(A,function(r){return De({eG:r,eH:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},U={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Gg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(U.keyboard.downs.push(f.code),U.keyboard.pressedKeys.push(f.code),r(f)&&(U.keyboard.control=!0),n(f)&&(U.keyboard.alt=!0),a(f)&&(U.keyboard.shift=!0),t(f)&&(U.keyboard.left=!0),i(f)&&(U.keyboard.right=!0),c(f)&&(U.keyboard.up=!0),l(f)&&(U.keyboard.down=!0))}),window.addEventListener("keyup",f=>{U.keyboard.pressedKeys=U.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(U.keyboard.control=!1,U.keyboard.pressedKeys=[]),n(f)&&(U.keyboard.alt=!1),a(f)&&(U.keyboard.shift=!1),t(f)&&(U.keyboard.left=!1),i(f)&&(U.keyboard.right=!1),c(f)&&(U.keyboard.up=!1),l(f)&&(U.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{U.pointer.x=-.5*U.screen.width+f.pageX,U.pointer.y=.5*U.screen.height-f.pageY,u(f)&&(U.pointer.down=!0,U.pointer.isDown=!0),v(f)&&(U.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{U.pointer.move=!0,U.pointer.x=-.5*U.screen.width+f.pageX,U.pointer.y=.5*U.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(U.pointer.up=!0,U.pointer.isDown=!1),v(f)&&(U.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(U.pointer.up=!0,U.pointer.isDown=!1),v(f)&&(U.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{U.wheel.deltaX=f.deltaX,U.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(U)}),window.addEventListener("focus",f=>{s(U)}),window.addEventListener("visibilitychange",f=>{s(U)}),window.addEventListener("resize",()=>{U.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-U.clock;b<.009||(U.dt=b,U.clock=g,e.ports.tick.send(U),d(U)),window.requestAnimationFrame(m)}},Wg=()=>{$t("pointerdown"),$t("wheel"),$t("keydown")},$t=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Hg=Yg.Main.init({node:document.querySelector("#app div"),flags:{inputs:U}});Wg();Gg(Hg);
