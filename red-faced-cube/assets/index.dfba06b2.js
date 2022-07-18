const Hv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hv();function qr(e,r,n){return n.a=e,n.f=r,n}function $(e){return qr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return qr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return qr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function xe(e){return qr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Qe(e){return qr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ct(e){return qr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ce(e){return qr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function di(e){return qr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function de(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function mi(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pt(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Gv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Uv=[];function Ov(e){return e.length}var Jv=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Yv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,h(n,r)}),qv=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zv=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Xv()),r});function Xv(e){return"<internals>"}function Mn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ne(e,r){for(var n,a=[],t=zo(e,r,0,a);t&&(n=a.pop());t=zo(n.a,n.b,0,a));return t}function zo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Mn(5),!1;if(n>100)return a.push(h(e,r)),!0;e.$<0&&(e=Nc(e),r=Nc(r));for(var t in e)if(!zo(e[t],r[t],n+1,a))return!1;return!0}var Qv=$(ne);$(function(e,r){return!ne(e,r)});function Z(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=Z(e.a,r.a))||(n=Z(e.b,r.b))?n:Z(e.c,r.c);for(;e.b&&r.b&&!(n=Z(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return Z(e,r)<0});$(function(e,r){return Z(e,r)<1});$(function(e,r){return Z(e,r)>0});$(function(e,r){return Z(e,r)>=0});var Kv=$(function(e,r){var n=Z(e,r);return n<0?hu:n?qd:bu}),da=0;function h(e,r){return{a:e,b:r}}function D(e,r,n){return{a:e,b:r,c:n}}function W(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=wr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=wr(e.a,r);return n}var k={$:0};function wr(e,r){return{$:1,a:e,b:r}}var es=$(wr);function m(e){for(var r=k,n=e.length;n--;)r=wr(e[n],r);return r}function Lt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var rs=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return m(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return m(t)});xe(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return m(i)});Qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return m(c)});$(function(e,r){return m(Lt(r).sort(function(n,a){return Z(e(n),e(a))}))});$(function(e,r){return m(Lt(r).sort(function(n,a){var t=o(e,n,a);return t===bu?0:t===hu?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var ns=$(Math.pow);$(function(e,r){return r%e});var as=$(function(e,r){var n=r%e;return e===0?Mn(11):n>0&&e<0||n<0&&e>0?n+e:n}),ts=Math.PI,os=Math.cos,is=Math.sin,cs=Math.tan,ls=Math.atan;$(Math.atan2);function us(e){return e}function $s(e){return e===1/0||e===-1/0}var vs=Math.ceil,ss=Math.floor,fs=Math.round,ds=Math.sqrt,Pc=Math.log,ms=isNaN;function ps(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gs=$(function(e,r){return e+r});function bs(e){var r=e.charCodeAt(0);return isNaN(r)?J:O(55296<=r&&r<=56319?h(e[0]+e[1],e.slice(2)):h(e[0],e.slice(1)))}$(function(e,r){return e+r});function hs(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function _s(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var ws=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),ys=$(function(e,r){return r.split(e)}),xs=$(function(e,r){return r.join(e)}),ks=x(function(e,r,n){return n.slice(e,r)});function Ss(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cs=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Ps=$(function(e,r){return r.indexOf(e)>-1}),Ls=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var As=$(function(e,r){var n=e.length;if(n<1)return k;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return m(t)});function Jl(e){return e+""}function zs(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return J;r=10*r+i-48}return t==a?J:O(n==45?-r:r)}function Ts(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?O(r):J}function Ms(e){return Lt(e).join("")}function Ds(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function js(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fs(e){return{$:0,a:e}}function Vs(e){return{$:1,a:e}}function At(e){return{$:2,b:e}}var Bs=At(function(e){return typeof e!="number"?ar("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?se(e):ar("an INT",e)}),Es=At(function(e){return typeof e=="boolean"?se(e):ar("a BOOL",e)}),Rs=At(function(e){return typeof e=="number"?se(e):ar("a FLOAT",e)}),Ws=At(function(e){return typeof e=="string"?se(e):e instanceof String?se(e+""):ar("a STRING",e)});function Ns(e){return{$:3,b:e}}var Is=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Zr(e,r){return{$:9,f:e,g:r}}var Hs=$(function(e,r){return{$:10,b:r,h:e}}),Gs=$(function(e,r){return Zr(e,[r])}),Us=x(function(e,r,n){return Zr(e,[r,n])});B(function(e,r,n,a){return Zr(e,[r,n,a])});xe(function(e,r,n,a,t){return Zr(e,[r,n,a,t])});var Os=Qe(function(e,r,n,a,t,i){return Zr(e,[r,n,a,t,i])});Ct(function(e,r,n,a,t,i,c){return Zr(e,[r,n,a,t,i,c])});ce(function(e,r,n,a,t,i,c,l){return Zr(e,[r,n,a,t,i,c,l])});di(function(e,r,n,a,t,i,c,l,u){return Zr(e,[r,n,a,t,i,c,l,u])});var Js=$(function(e,r){try{var n=JSON.parse(r);return nr(e,n)}catch(a){return Ve(o(Pi,"This is not valid JSON! "+a.message,r))}}),Yl=$(function(e,r){return nr(e,r)});function nr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?se(e.c):ar("null",r);case 3:return ja(r)?Lc(e.b,r,m):ar("a LIST",r);case 4:return ja(r)?Lc(e.b,r,Ys):ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ar("an OBJECT with a field named `"+n+"`",r);var v=nr(e.b,r[n]);return ur(v)?v:Ve(o(Ic,n,v.a));case 7:var a=e.e;if(!ja(r))return ar("an ARRAY",r);if(a>=r.length)return ar("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=nr(e.b,r[a]);return ur(v)?v:Ve(o(_u,a,v.a));case 8:if(typeof r!="object"||r===null||ja(r))return ar("an OBJECT",r);var t=k;for(var i in r)if(r.hasOwnProperty(i)){var v=nr(e.b,r[i]);if(!ur(v))return Ve(o(Ic,i,v.a));t=wr(h(i,v.a),t)}return se(ye(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=nr(l[u],r);if(!ur(v))return v;c=c(v.a)}return se(c);case 10:var v=nr(e.b,r);return ur(v)?nr(e.h(v.a),r):v;case 11:for(var s=k,f=e.g;f.b;f=f.b){var v=nr(f.a,r);if(ur(v))return v;s=wr(v.a,s)}return Ve(Zd(ye(s)));case 1:return Ve(o(Pi,e.a,r));case 0:return se(e.a)}}function Lc(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=nr(e,r[i]);if(!ur(c))return Ve(o(_u,i,c.a));t[i]=c.a}return se(n(t))}function ja(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ys(e){return o(um,e.length,function(r){return e[r]})}function ar(e,r){return Ve(o(Pi,"Expecting "+e,r))}function yn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return yn(e.b,r.b);case 6:return e.d===r.d&&yn(e.b,r.b);case 7:return e.e===r.e&&yn(e.b,r.b);case 9:return e.f===r.f&&Ac(e.g,r.g);case 10:return e.h===r.h&&yn(e.b,r.b);case 11:return Ac(e.g,r.g)}}function Ac(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!yn(e[a],r[a]))return!1;return!0}var qs=$(function(e,r){return JSON.stringify(r,null,e)+""});function pi(e){return e}function Zs(){return[]}function Xs(){return{}}var Qs=x(function(e,r,n){return n[e]=r,n});function Ks(e){return $(function(r,n){return n.push(e(r)),n})}function sn(e){return{$:0,a:e}}function ef(e){return{$:1,a:e}}function Dr(e){return{$:2,b:e,c:null}}var To=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function rf(e){return{$:5,b:e}}var nf=0;function gi(e){var r={$:0,e:nf++,f:e,g:null,h:[]};return bi(r),r}function ql(e){return Dr(function(r){r(sn(gi(e)))})}function Zl(e,r){e.h.push(r),bi(e)}var af=$(function(e,r){return Dr(function(n){Zl(e,r),n(sn(da))})}),ao=!1,zc=[];function bi(e){if(zc.push(e),!ao){for(ao=!0;e=zc.shift();)tf(e);ao=!1}}function tf(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,bi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return hi(r,a,e.fu,e.ge,e.f5,function(){return function(){}})});function hi(e,r,n,a,t,i){var c=o(Yl,e,r?r.flags:void 0);ur(c)||Mn(2);var l={},u=n(c.a),v=u.a,s=i(g,v),f=of(l,g);function g(d,_){var b=o(a,d,v);s(v=b.a,_),Mc(l,b.b,t(v))}return Mc(l,u.b,t(v)),f?{ports:f}:{}}var pr={};function of(e,r){var n;for(var a in pr){var t=pr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=lf(t,r)}return n}function cf(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function lf(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(To,l,rf(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=gi(o(To,l,e.b))}var uf=$(function(e,r){return Dr(function(n){e.g(r),n(sn(da))})});$(function(e,r){return o(af,e.h,{$:0,a:r})});function Xl(e){return function(r){return{$:1,k:e,l:r}}}function $f(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Tc=[],to=!1;function Mc(e,r,n){if(Tc.push({p:e,q:r,r:n}),!to){to=!0;for(var a;a=Tc.shift();)vf(a.p,a.q,a.r);to=!1}}function vf(e,r,n){var a={};it(!0,r,a,null),it(!1,n,a,null);for(var t in e)Zl(e[t],{$:"fx",a:a[t]||{i:k,j:k}})}function it(e,r,n,a){switch(r.$){case 1:var t=r.k,i=sf(e,t,a,r.l);n[t]=ff(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)it(e,c.a,n,a);return;case 3:it(e,r.o,n,{s:r.n,t:a});return}}function sf(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?pr[r].e:pr[r].f;return o(i,t,a)}function ff(e,r,n){return n=n||{i:k,j:k},e?n.i=wr(r,n.i):n.j=wr(r,n.j),n}function df(e){pr[e]&&Mn(3)}$(function(e,r){return r});function mf(e,r){return df(e),pr[e]={f:pf,u:r,a:gf},Xl(e)}var pf=$(function(e,r){return function(n){return e(r(n))}});function gf(e,r){var n=k,a=pr[e].u,t=sn(null);pr[e].b=t,pr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(Yl,a,c);ur(l)||Mn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ct,Ar=typeof document!="undefined"?document:{};function _i(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Rr(e,function(){}),t),{}});function Mo(e){return{$:0,a:e}}var Ql=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:wi(n),e:t,f:e,b:i}})}),lr=Ql(void 0),bf=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:wi(n),e:t,f:e,b:i}})}),hf=bf(void 0);function _f(e,r,n,a){return{$:3,d:wi(e),g:r,h:n,i:a}}var wf=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Xr([e,r],function(){return e(r)})});x(function(e,r,n){return Xr([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return Xr([e,r,n,a],function(){return p(e,r,n,a)})});xe(function(e,r,n,a,t){return Xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Qe(function(e,r,n,a,t,i){return Xr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ct(function(e,r,n,a,t,i,c){return Xr([e,r,n,a,t,i,c],function(){return de(e,r,n,a,t,i,c)})});ce(function(e,r,n,a,t,i,c,l){return Xr([e,r,n,a,t,i,c,l],function(){return mi(e,r,n,a,t,i,c,l)})});di(function(e,r,n,a,t,i,c,l,u){return Xr([e,r,n,a,t,i,c,l,u],function(){return Pt(e,r,n,a,t,i,c,l,u)})});var Kl=$(function(e,r){return{$:"a0",n:e,o:r}}),yf=$(function(e,r){return{$:"a1",n:e,o:r}}),eu=$(function(e,r){return{$:"a2",n:e,o:r}}),kr=$(function(e,r){return{$:"a3",n:e,o:r}}),xf=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function kf(e){return e=="script"?"p":e}function Sf(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Kl,r.n,Cf(e,r.o)):r});function Cf(e,r){var n=Di(r);return{$:r.$,a:n?p(jn,n<3?Pf:Lf,ue(e),r.a):o(vt,e,r.a)}}var Pf=$(function(e,r){return h(e(r.a),r.b)}),Lf=$(function(e,r){return{ar:e(r.ar),c6:r.c6,cW:r.cW}});function wi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Dc(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Dc(c,t,i):c[t]=i}return r}function Dc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Rr(e,r){var n=e.$;if(n===5)return Rr(e.k||(e.k=e.m()),r);if(n===0)return Ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Rr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Do(c,r,e.d),c}var c=e.f?Ar.createElementNS(e.f,e.c):Ar.createElement(e.c);ct&&e.c=="a"&&c.addEventListener("click",ct(c)),Do(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)_i(c,Rr(n===1?l[u]:l[u].b,r));return c}function Do(e,r,n){for(var a in n){var t=n[a];a==="a1"?Af(e,t):a==="a0"?Mf(e,r,t):a==="a3"?zf(e,t):a==="a4"?Tf(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Af(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function zf(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Tf(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Mf(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Df(r,i),e.addEventListener(t,c,yi&&{passive:Di(i)<2}),a[t]=c}}var yi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yi=!0}}))}catch{}function Df(e,r){function n(a){var t=n.q,i=nr(t.a,a);if(!!ur(i)){for(var c=Di(t),l=i.a,u=c?c<3?l.a:l.ar:l,v=c==1?l.b:c==3&&l.c6,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),e),f,g;f=s.j;){if(typeof f=="function")u=f(u);else for(var g=f.length;g--;)u=f[g](u);s=s.p}s(u,v)}}return n.q=r,n}function jf(e,r){return e.$==r.$&&yn(e.a,r.a)}function ru(e,r){var n=[];return $r(e,r,n,0),n}function je(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function $r(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=If(r),i=1;else{je(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];$r(e.k,r.k,s,0),s.length>0&&je(n,1,a,s);return;case 4:for(var f=e.j,g=r.j,d=!1,_=e.k;_.$===4;)d=!0,typeof f!="object"?f=[f,_.j]:f.push(_.j),_=_.k;for(var b=r.k;b.$===4;)d=!0,typeof g!="object"?g=[g,b.j]:g.push(b.j),b=b.k;if(d&&f.length!==g.length){je(n,0,a,r);return}(d?!Ff(f,g):f!==g)&&je(n,2,a,g),$r(_,b,n,a+1);return;case 0:e.a!==r.a&&je(n,3,a,r.a);return;case 1:jc(e,r,n,a,Vf);return;case 2:jc(e,r,n,a,Bf);return;case 3:if(e.h!==r.h){je(n,0,a,r);return}var y=xi(e.d,r.d);y&&je(n,4,a,y);var S=r.i(e.g,r.g);S&&je(n,5,a,S);return}}}function Ff(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function jc(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){je(n,0,a,r);return}var i=xi(e.d,r.d);i&&je(n,4,a,i),t(e,r,n,a)}function xi(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=xi(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&jf(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Vf(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?je(n,6,a,{v:l,i:c-l}):c<l&&je(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];$r(s,i[v],n,++a),a+=s.b||0}}function Bf(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,f=0,g=0,d=a;f<v&&g<s;){var _=l[f],b=u[g],y=_.a,S=b.a,w=_.b,P=b.b,V=void 0,G=void 0;if(y===S){d++,$r(w,P,t,d),d+=w.b||0,f++,g++;continue}var I=l[f+1],N=u[g+1];if(I){var H=I.a,U=I.b;G=S===H}if(N){var E=N.a,ee=N.b;V=y===E}if(V&&G){d++,$r(w,ee,t,d),Hn(i,t,y,P,g,c),d+=w.b||0,d++,Gn(i,t,y,U,d),d+=U.b||0,f+=2,g+=2;continue}if(V){d++,Hn(i,t,S,P,g,c),$r(w,ee,t,d),d+=w.b||0,f+=1,g+=2;continue}if(G){d++,Gn(i,t,y,w,d),d+=w.b||0,d++,$r(U,P,t,d),d+=U.b||0,f+=2,g+=1;continue}if(I&&H===E){d++,Gn(i,t,y,w,d),Hn(i,t,S,P,g,c),d+=w.b||0,d++,$r(U,ee,t,d),d+=U.b||0,f+=2,g+=2;continue}break}for(;f<v;){d++;var _=l[f],w=_.b;Gn(i,t,_.a,w,d),d+=w.b||0,f++}for(;g<s;){var te=te||[],b=u[g];Hn(i,t,b.a,b.b,void 0,te),g++}(t.length>0||c.length>0||te)&&je(n,8,a,{w:t,x:c,y:te})}var nu="_elmW6BL";function Hn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];$r(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Hn(e,r,n+nu,a,t,i)}function Gn(e,r,n,a,t){var i=e[n];if(!i){var c=je(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];$r(a,i.z,l,t),je(r,9,t,{w:l,A:i});return}Gn(e,r,n+nu,a,t)}function au(e,r,n,a){Un(e,r,n,0,0,r.b,a)}function Un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)au(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Un(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var f=l.s;if(f){f.A.s=e;var s=f.w;s.length>0&&Un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var g=r.$;if(g===4){for(var d=r.k;d.$===4;)d=d.k;return Un(e,d,n,a,t+1,i,e.elm_event_node_ref)}for(var _=r.e,b=e.childNodes,y=0;y<_.length;y++){t++;var S=g===1?_[y]:_[y].b,w=t+(S.b||0);if(t<=u&&u<=w&&(a=Un(b[y],S,n,a,t,w,c),!(l=n[a])||(u=l.r)>i))return a;t=w}return a}function tu(e,r,n,a){return n.length===0?e:(au(e,r,n,a),lt(e,n))}function lt(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Ef(t,a);t===e&&(e=i)}return e}function Ef(e,r){switch(r.$){case 0:return Rf(e,r.s,r.u);case 4:return Do(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return lt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Rr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=lt(e,i.w),e;case 8:return Wf(e,r);case 5:return r.s(e);default:Mn(10)}}function Rf(e,r,n){var a=e.parentNode,t=Rr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Wf(e,r){var n=r.s,a=Nf(n.y,r);e=lt(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Rr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&_i(e,a),e}function Nf(e,r){if(!!e){for(var n=Ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;_i(n,i.c===2?i.s:Rr(i.z,r.u))}return n}}function ki(e){if(e.nodeType===3)return Mo(e.textContent);if(e.nodeType!==1)return Mo("");for(var r=k,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=wr(o(kr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=k,v=e.childNodes,a=v.length;a--;)u=wr(ki(v[a]),u);return p(lr,l,r,u)}function If(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Hf=B(function(e,r,n,a){return hi(r,a,e.fu,e.ge,e.f5,function(t,i){var c=e.gg,l=a.node,u=ki(l);return ou(i,function(v){var s=c(v),f=ru(u,s);l=tu(l,u,f,t),u=s})})});B(function(e,r,n,a){return hi(r,a,e.fu,e.ge,e.f5,function(t,i){var c=e.c2&&e.c2(t),l=e.gg,u=Ar.title,v=Ar.body,s=ki(v);return ou(i,function(f){ct=c;var g=l(f),d=lr("body")(k)(g.eX),_=ru(s,d);v=tu(v,s,_,t),s=d,ct=0,u!==g.ga&&(Ar.title=u=g.ga)})})});var ut=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function ou(e,r){r(e);var n=0;function a(){n=n===1?0:(ut(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ut(a),n=2)}}$(function(e,r){return o(Vi,ji,Dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Vi,ji,Dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Vi,ji,Dr(function(){history.replaceState({},"",r),e()}))});var Gf={addEventListener:function(){},removeEventListener:function(){}},Uf=typeof window!="undefined"?window:Gf;x(function(e,r,n){return ql(Dr(function(a){function t(i){gi(n(i))}return e.addEventListener(r,t,yi&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=nr(e,r);return ur(n)?O(n.a):J});function iu(e,r){return Dr(function(n){ut(function(){var a=document.getElementById(e);n(a?sn(r(a)):ef(vm(e)))})})}function Of(e){return Dr(function(r){ut(function(){r(sn(e()))})})}$(function(e,r){return iu(r,function(n){return n[e](),da})});$(function(e,r){return Of(function(){return Uf.scroll(e,r),da})});x(function(e,r,n){return iu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,da})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Jf=$(function(e,r){var n="g";e.fH&&(n+="m"),e.eZ&&(n+="i");try{return O(new RegExp(r,n))}catch{return J}});$(function(e,r){return r.match(e)!==null});var Yf=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var f=u[v];s[--v]=f?O(f):J}a.push(L(Ku,u[0],u.index,t,m(s))),l=r.lastIndex}return r.lastIndex=c,m(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?O(v):J}return n(L(Ku,c,arguments[arguments.length-2],t,m(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,m(t)});var Fc=0;function aa(e,r){for(;r.b;r=r.b)e(r.a)}function Si(e){for(var r=0;e.b;e=e.b)r++;return r}var qf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Zf=xe(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Xf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Qf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Kf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),ed=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),rd=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),nd=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ad=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),td=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),od=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},id=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},cd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},ld=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},cu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},lu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},ud=function(e){e.gl.disable(e.gl.CULL_FACE)},$d=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},vd=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},sd=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Vc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],fd=[id,cd,ld,cu,lu,ud,$d,vd,sd];function Bc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function dd(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function uu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function md(e,r,n,a){for(var t=n.a.dv,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(d,_,b,y,S){var w;if(t===1)for(w=0;w<_;w++)d[b++]=_===1?y[S]:y[S][w];else i.forEach(function(P){for(w=0;w<_;w++)d[b++]=_===1?y[P][S]:y[P][S][w]})}var u=uu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,f=new u.type(Si(n.b)*s);aa(function(d){l(f,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),g}function pd(e,r){if(r.a.dF>0){var n=e.createBuffer(),a=gd(r.c,r.a.dF);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*Si(r.b),indexBuffer:null,buffers:{}}}function gd(e,r){var n=new Uint32Array(Si(e)*r),a=0,t;return aa(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Ec(e,r){return e+"#"+r}var $u=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),cu(n),lu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Ec(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Fc++,v||(v=Bc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Fc++,s||(s=Bc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var f=dd(a,v,s);l={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=bd(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var g=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var d=a.getActiveAttrib(f,u),_=a.getAttribLocation(f,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(_)}c=Ec(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),hd(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=pd(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],_=l.activeAttributeLocations[u],b.buffers[d.name]===void 0&&(b.buffers[d.name]=md(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[d.name]);var y=uu(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,P=0;P<y.arraySize;P++)a.enableVertexAttribArray(_+P),a.vertexAttribPointer(_+P,y.size,y.baseType,!1,w,S*P)}for(n.toggle=!n.toggle,aa(rb(n),i.a),u=0;u<Vc.length;u++){var V=n[Vc[u]];V.toggle!==n.toggle&&V.enabled&&(fd[u](n),V.enabled=!1,V.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.eg,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.eg,0,b.numIndices)}}return aa(t,e.g),r});function bd(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,_){var b=_.name,y=e.getUniformLocation(d,b);switch(_.type){case e.INT:return function(w){i[b]!==w&&(e.uniform1i(y,w),i[b]=w)};case e.FLOAT:return function(w){i[b]!==w&&(e.uniform1f(y,w),i[b]=w)};case e.FLOAT_VEC2:return function(w){i[b]!==w&&(e.uniform2f(y,w[0],w[1]),i[b]=w)};case e.FLOAT_VEC3:return function(w){i[b]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),i[b]=w)};case e.FLOAT_VEC4:return function(w){i[b]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),i[b]=w)};case e.FLOAT_MAT4:return function(w){i[b]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),i[b]=w)};case e.SAMPLER_2D:var S=c++;return function(w){e.activeTexture(e.TEXTURE0+S);var P=l.textures.get(w);P||(P=w.e4(e),l.textures.set(w,P)),e.bindTexture(e.TEXTURE_2D,P),i[b]!==w&&(e.uniform1i(y,S),i[b]=w)};case e.BOOL:return function(w){i[b]!==w&&(e.uniform1i(y,w),i[b]=w)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<s;f++){var g=e.getActiveUniform(t,f);v[a[g.name]||g.name]=u(t,g)}return v}function hd(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var _d=x(function(e,r,n){return _f(r,{g:n,f:{},h:e},Pd,Ld)}),wd=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),yd=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),xd=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),kd=$(function(e,r){e.contextAttributes.antialias=!0}),Sd=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Cd=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Pd(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};aa(function(t){return o(eb,r,t)},e.h);var n=Ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),qf(function(){return o($u,e,n)})):(n=Ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ld(e,r){return r.f=e.f,$u(r)}var Ad=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/zd(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function zd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ci=new Float64Array(3),Rc=new Float64Array(3),Wc=new Float64Array(3),Td=x(function(e,r,n){return new Float64Array([e,r,n])}),Md=function(e){return e[0]},Dd=function(e){return e[1]},jd=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Fd=function(e){return new Float64Array([e.gl,e.gp,e.dk])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function vu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(vu);function su(e,r,n){return n===void 0&&(n=new Float64Array(3)),$t(vu(e,r,n),n)}$(su);function fu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function $t(e,r){r===void 0&&(r=new Float64Array(3));var n=1/fu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Vd=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),On=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(On);function jo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(jo);$(function(e,r){var n,a=Ci,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=On(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(On(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(On(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(On(r,a)+e[14])/n,t});var Bd=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Ed=function(e){return{gl:e[0],gp:e[1],dk:e[2],eN:e[3]}},Rd=function(e){return new Float64Array([e.gl,e.gp,e.dk,e.eN])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Wd(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Wd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Nd=new Float64Array(16),Id=new Float64Array(16),Hd=function(e){var r=new Float64Array(16);return r[0]=e.dU,r[1]=e.dY,r[2]=e.d0,r[3]=e.d4,r[4]=e.dV,r[5]=e.dZ,r[6]=e.d1,r[7]=e.d5,r[8]=e.dW,r[9]=e.d_,r[10]=e.d2,r[11]=e.d6,r[12]=e.dX,r[13]=e.d$,r[14]=e.d3,r[15]=e.d7,r},Gd=function(e){return{dU:e[0],dY:e[1],d0:e[2],d4:e[3],dV:e[4],dZ:e[5],d1:e[6],d5:e[7],dW:e[8],d_:e[9],d2:e[10],d6:e[11],dX:e[12],d$:e[13],d3:e[14],d7:e[15]}};function du(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Qe(du);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return du(c,l,i,t,n,a)});function mu(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Qe(mu);B(function(e,r,n,a){return mu(e,r,n,a,-1,1)});function pu(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],f=e[8],g=e[9],d=e[10],_=e[11],b=e[12],y=e[13],S=e[14],w=e[15],P=r[0],V=r[1],G=r[2],I=r[3],N=r[4],H=r[5],U=r[6],E=r[7],ee=r[8],te=r[9],me=r[10],be=r[11],fe=r[12],ke=r[13],Ue=r[14],Re=r[15];return n[0]=a*P+l*V+f*G+b*I,n[1]=t*P+u*V+g*G+y*I,n[2]=i*P+v*V+d*G+S*I,n[3]=c*P+s*V+_*G+w*I,n[4]=a*N+l*H+f*U+b*E,n[5]=t*N+u*H+g*U+y*E,n[6]=i*N+v*H+d*U+S*E,n[7]=c*N+s*H+_*U+w*E,n[8]=a*ee+l*te+f*me+b*be,n[9]=t*ee+u*te+g*me+y*be,n[10]=i*ee+v*te+d*me+S*be,n[11]=c*ee+s*te+_*me+w*be,n[12]=a*fe+l*ke+f*Ue+b*Re,n[13]=t*fe+u*ke+g*Ue+y*Re,n[14]=i*fe+v*ke+d*Ue+S*Re,n[15]=c*fe+s*ke+_*Ue+w*Re,n}$(pu);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],f=e[10],g=e[12],d=e[13],_=e[14],b=r[0],y=r[1],S=r[2],w=r[4],P=r[5],V=r[6],G=r[8],I=r[9],N=r[10],H=r[12],U=r[13],E=r[14];return n[0]=a*b+c*y+v*S,n[1]=t*b+l*y+s*S,n[2]=i*b+u*y+f*S,n[3]=0,n[4]=a*w+c*P+v*V,n[5]=t*w+l*P+s*V,n[6]=i*w+u*P+f*V,n[7]=0,n[8]=a*G+c*I+v*N,n[9]=t*G+l*I+s*N,n[10]=i*G+u*I+f*N,n[11]=0,n[12]=a*H+c*U+v*E+g,n[13]=t*H+l*U+s*E+d,n[14]=i*H+u*U+f*E+_,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=$t(r,Ci);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/fu(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),f=i*s,g=c*s,d=l*s,_=i*c*v,b=i*l*v,y=c*l*v,S=i*i*v+u,w=_+d,P=b-g,V=_-d,G=c*c*v+u,I=y+f,N=b+g,H=y-f,U=l*l*v+u,E=n[0],ee=n[1],te=n[2],me=n[3],be=n[4],fe=n[5],ke=n[6],Ue=n[7],Re=n[8],Fr=n[9],Vr=n[10],no=n[11],Rv=n[12],Wv=n[13],Nv=n[14],Iv=n[15];return a[0]=E*S+be*w+Re*P,a[1]=ee*S+fe*w+Fr*P,a[2]=te*S+ke*w+Vr*P,a[3]=me*S+Ue*w+no*P,a[4]=E*V+be*G+Re*I,a[5]=ee*V+fe*G+Fr*I,a[6]=te*V+ke*G+Vr*I,a[7]=me*V+Ue*G+no*I,a[8]=E*N+be*H+Re*U,a[9]=ee*N+fe*H+Fr*U,a[10]=te*N+ke*H+Vr*U,a[11]=me*N+Ue*H+no*U,a[12]=Rv,a[13]=Wv,a[14]=Nv,a[15]=Iv,a});function Ud(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(Ud);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Od(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Od);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],f=a[6],g=a[7],d=a[8],_=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=f,t[7]=g,t[8]=d,t[9]=_,t[10]=b,t[11]=y,t[12]=i*e+v*r+d*n+a[12],t[13]=c*e+s*r+_*n+a[13],t[14]=l*e+f*r+b*n+a[14],t[15]=u*e+g*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],f=r[5],g=r[6],d=r[7],_=r[8],b=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=f,n[6]=g,n[7]=d,n[8]=_,n[9]=b,n[10]=y,n[11]=S,n[12]=c*a+s*t+_*i+r[12],n[13]=l*a+f*t+b*i+r[13],n[14]=u*a+g*t+y*i+r[14],n[15]=v*a+d*t+S*i+r[15],n});x(function(e,r,n){var a=su(e,r,Ci),t=$t(jo(n,a,Rc),Rc),i=$t(jo(a,t,Wc),Wc),c=Nd,l=Id;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,pu(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var T=es,Fa=Zv,gu=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Fa,e,l,v)}else{var u=c.a;return p(Fa,i,l,u)}});return p(Fa,i,p(Fa,e,r,t),a)}),zt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(zt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Nc=function(e){return p(zt,x(function(r,n,a){return o(T,h(r,n),a)}),k,e)},Jd=function(e){return p(zt,x(function(r,n,a){return o(T,r,a)}),k,e)},Yd=function(e){var r=e;return Jd(r)},bu=1,qd=2,hu=0,Ve=function(e){return{$:1,a:e}},Pi=$(function(e,r){return{$:3,a:e,b:r}}),Ic=$(function(e,r){return{$:0,a:e,b:r}}),_u=$(function(e,r){return{$:1,a:e,b:r}}),se=function(e){return{$:0,a:e}},Zd=function(e){return{$:2,a:e}},O=function(e){return{$:0,a:e}},J={$:1},Xd=Cs,wu=qs,Me=Jl,on=$(function(e,r){return o(xs,e,Lt(r))}),Li=$(function(e,r){return m(o(ys,e,r))}),yu=function(e){return o(on,`
    `,o(Li,`
`,e))},Sr=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),yr=function(e){return p(Sr,$(function(r,n){return n+1}),0,e)},xu=rs,Qd=x(function(e,r,n){e:for(;;)if(Z(e,r)<1){var a=e,t=r-1,i=o(T,r,n);e=a,r=t,n=i;continue e}else return n}),Ln=$(function(e,r){return p(Qd,e,r,k)}),ma=$(function(e,r){return p(xu,e,o(Ln,0,yr(r)-1),r)}),gr=Ds,ku=function(e){var r=gr(e);return 97<=r&&r<=122},Su=function(e){var r=gr(e);return r<=90&&65<=r},Kd=function(e){return ku(e)||Su(e)},em=function(e){var r=gr(e);return r<=57&&48<=r},rm=function(e){return ku(e)||Su(e)||em(e)},ye=function(e){return p(Sr,T,k,e)},Dn=bs,nm=$(function(e,r){return`

(`+(Me(e+1)+(") "+yu(am(r))))}),am=function(e){return o(tm,e,k)},tm=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Dn(n);if(b.$===1)return!1;var y=b.a,S=y.a,w=y.b;return Kd(S)&&o(Xd,rm,w)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(T,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Me(i)+"]"),u=c,v=o(T,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(on,"",ye(r)):"Json.Decode.oneOf"}(),_=f+(" failed in the following "+(Me(yr(s))+" ways:"));return o(on,`

`,o(T,_,o(ma,nm,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(on,"",ye(r)):"!"}();default:var g=e.a,d=e.b,_=function(){return r.b?"Problem with the value at json"+(o(on,"",ye(r))+`:

    `):`Problem with the given value:

`}();return _+(yu(o(wu,4,d))+(`

`+g))}}),Je=32,Fo=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Vo=Uv,Ai=vs,zi=$(function(e,r){return Pc(r)/Pc(e)}),Jn=us,ta=Ai(o(zi,2,Je)),Cu=L(Fo,0,ta,Vo,Vo),Pu=Jv,Lu=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Tt=Qv,Au=ss,Bo=Ov,Ye=$(function(e,r){return Z(e,r)>0?e:r}),om=function(e){return{$:0,a:e}},Ti=Yv,im=$(function(e,r){e:for(;;){var n=o(Ti,Je,e),a=n.a,t=n.b,i=o(T,om(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ye(i)}}),Eo=function(e){var r=e.a;return r},cm=$(function(e,r){e:for(;;){var n=Ai(r/Je);if(n===1)return o(Ti,Je,e).a;var a=o(im,e,k),t=n;e=a,r=t;continue e}}),zu=$(function(e,r){if(r.n){var n=r.n*Je,a=Au(o(zi,Je,n-1)),t=e?ye(r.B):r.B,i=o(cm,t,r.n);return L(Fo,Bo(r.q)+n,o(Ye,5,a*ta),i,r.q)}else return L(Fo,Bo(r.q),ta,Vo,r.q)}),lm=xe(function(e,r,n,a,t){e:for(;;){if(r<0)return o(zu,!1,{B:a,n:n/Je|0,q:t});var i=Lu(p(Pu,Je,r,e)),c=e,l=r-Je,u=n,v=o(T,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),um=$(function(e,r){if(e<=0)return Cu;var n=e%Je,a=p(Pu,n,e-n,r),t=e-n-Je;return C(lm,r,t,e,k,a)}),ur=function(e){return!e.$},F=Hs,re=Es,A=Is,he=Rs,$m=function(e){return{$:2,a:e}},Mi=$(function(e,r){return e}),Tu=$(function(e,r){return{W:r.W,e2:e,cj:r.cj,fa:r.fa,dL:r.dL,cV:r.cV,b6:r.b6,gh:r.gh}}),vt=Gs,jn=Us,ue=Fs,Di=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ie=function(e){return e},vm=Ie,Hc=Qe(function(e,r,n,a,t,i){return{dB:i,dD:r,em:a,eq:n,eu:e,ev:t}}),sm=Ps,cn=hs,xn=ks,pa=$(function(e,r){return e<1?r:p(xn,e,cn(r),r)}),Mt=As,Dt=function(e){return e===""},jt=$(function(e,r){return e<1?"":p(xn,0,e,r)}),Mu=zs,Gc=xe(function(e,r,n,a,t){if(Dt(t)||o(sm,"@",t))return J;var i=o(Mt,":",t);if(i.b){if(i.b.b)return J;var c=i.a,l=Mu(o(pa,c+1,t));if(l.$===1)return J;var u=l;return O(de(Hc,e,o(jt,c,t),u,r,n,a))}else return O(de(Hc,e,t,J,r,n,a))}),Uc=B(function(e,r,n,a){if(Dt(a))return J;var t=o(Mt,"/",a);if(t.b){var i=t.a;return C(Gc,e,o(pa,i,a),r,n,o(jt,i,a))}else return C(Gc,e,"/",r,n,a)}),Oc=x(function(e,r,n){if(Dt(n))return J;var a=o(Mt,"?",n);if(a.b){var t=a.a;return L(Uc,e,O(o(pa,t+1,n)),r,o(jt,t,n))}else return L(Uc,e,J,r,n)});$(function(e,r){if(Dt(r))return J;var n=o(Mt,"#",r);if(n.b){var a=n.a;return p(Oc,e,O(o(pa,a+1,r)),o(jt,a,r))}else return p(Oc,e,J,r)});var fm=Ls,ji=function(e){},ga=sn,dm=ga(0),Du=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,f=v.b,g=n>500?p(Sr,e,r,ye(f)):L(Du,e,r,n+1,f);return o(e,t,o(e,c,o(e,u,o(e,s,g))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),jr=x(function(e,r,n){return L(Du,e,r,0,n)}),Q=$(function(e,r){return p(jr,$(function(n,a){return o(T,e(n),a)}),k,r)}),st=To,Fi=$(function(e,r){return o(st,function(n){return ga(e(n))},r)}),mm=x(function(e,r,n){return o(st,function(a){return o(st,function(t){return ga(o(e,a,t))},n)},r)}),pm=function(e){return p(jr,mm(T),ga(k),e)},gm=uf,bm=$(function(e,r){var n=r;return ql(o(st,gm(e),n))}),hm=x(function(e,r,n){return o(Fi,function(a){return 0},pm(o(Q,bm(e),r)))}),_m=x(function(e,r,n){return ga(0)}),wm=$(function(e,r){var n=r;return o(Fi,e,n)});pr.Task=cf(dm,hm,_m,wm);var ym=Xl("Task"),Vi=$(function(e,r){return ym(o(Fi,e,r))}),xm=Hf,km=ps,ft={$:1},ju=function(e){return{$:2,a:e}},Ft={$:0},or=$(function(e,r){return{$:0,a:e,b:r}}),K=x(function(e,r,n){return r(e(n))}),Fn=function(e){var r=e.b.D;return r.a},Sm=function(e){var r=e.a,n=e.b.Y,a=e.b.D,t=e.b.ag;if(t.b){var i=t.a,c=t.b;return O(o(or,r,{D:i,ag:c,Y:o(T,a,n)}))}else return J},Fu=function(e){var r=e.b;return o(or,Ft,r)},we=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Cm=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cV.cl?Fu(n):n;case 2:var i=a.a.c7;return(Z(i+r.fa,Fn(n).W)>0?o(K,Sm,we(o(or,ft,t))):Ie)(o(or,ju({c7:i+r.fa}),t));default:var c=t.D,l=c.a,u=c.b,v=o(Tu,l.e2,W(r,{W:l.W+r.fa})),s=o(e,v,u);return o(or,Ft,{D:h(v,s),ag:k,Y:o(T,t.D,t.Y)})}}),Bi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Pm=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(T,a,n);e=i,r=c,n=l;continue e}else return n}}),Lm=$(function(e,r){return ye(p(Pm,e,r,k))}),Vu=x(function(e,r,n){if(r<=0)return k;{var a=h(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,w=t.a,i=t.b,c=i.a;return m([w,c]);case 3:if(a.b.b.b.b){var l=a.b,w=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return m([w,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,w=f.a,g=f.b,c=g.a,d=g.b,s=d.a,_=d.b,b=_.a,y=_.b;return e>1e3?o(T,w,o(T,c,o(T,s,o(T,b,o(Lm,r-4,y))))):o(T,w,o(T,c,o(T,s,o(T,b,p(Vu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return m([w])}}),Bu=$(function(e,r){return p(Vu,0,e,r)}),Am=$(function(e,r){var n=r.b.Y,a=r.b.D,t=r.b.ag,i=le(ye(n),le(m([a]),t)),c=o(Bu,e,i),l=o(Bi,e,i);if(l.b){var u=l.a,v=l.b;return o(or,ft,{D:u,ag:v,Y:ye(c)})}else{var s=ye(c);if(s.b){var f=s.a,g=s.b;return o(or,ft,{D:f,ag:k,Y:g})}else return r}}),zm=function(e){var r=e.b;return o(or,ft,r)},Tm=function(e){var r=e.b;return o(or,ju({c7:Fn(e).W}),r)},Mm=$(function(e,r){switch(e.$){case 1:return zm(r);case 2:return Fu(r);case 3:return Tm(r);default:var n=e.a;return o(Am,n,r)}}),Eu=$(function(e,r){var n=r.a,a=r.b;return h(e(n),a)}),Dm=$(function(e,r){return W(r,{aB:e(r.aB)})}),jm=function(e){return{$:3,a:e}},Ru=function(e){return{$:2,a:e}},Wu=$(function(e,r){return{$:0,a:e,b:r}}),Fm=$(function(e,r){return{$:1,a:e,b:r}}),Le=$(function(e,r){if(r.$)return J;var n=r.a;return O(e(n))}),X=function(e){return e<0?-e:e},Ei=Ts,Vm=x(function(e,r,n){return o(we,0/0,Ei(o(e,r,n)))}),Vt=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Bm=ws,Nu=function(e){return p(Bm,T,k,e)},Em=$(function(e,r){var n=o(Vt,function(a){return a!=="0"&&a!=="."},Nu(r));return le(e&&n?"-":"",r)}),Ce=Jl,Ro=gs,Iu=js,Hu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Dn(n);if(a.$===1)return"01";var t=a.a;return o(Ro,"0",Hu(t))}else{var i=gr(r);return i>=48&&i<57?o(Ro,Iu(i+1),n):"0"}},Wo=$s,Rm=ms,Bt=function(e){return o(Ro,e,"")},Gu=x(function(e,r,n){return e<=0?n:p(Gu,e>>1,le(r,r),e&1?le(n,r):n)}),oa=$(function(e,r){return p(Gu,e,r,"")}),No=x(function(e,r,n){return le(n,o(oa,e-cn(n),Bt(r)))}),Io=_s,Uu=function(e){var r=o(Li,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return h(n,t)}else{var n=r.a;return h(n,"0")}else return h("0","0")},Wm=function(e){var r=o(Li,"e",Ce(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(we,0,Mu(o(fm,"+",t)?o(pa,1,t):t)),c=Uu(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(we,"0",o(Le,function(f){var g=f.a,d=f.b;return g+("."+d)},o(Le,Eu(Bt),Dn(le(o(oa,X(i),"0"),v))))):p(No,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Nm=x(function(e,r,n){if(Wo(n)||Rm(n))return Ce(n);var a=n<0,t=Uu(Wm(X(n))),i=t.a,c=t.b,l=cn(i)+r,u=le(o(oa,-l+1,"0"),p(No,l,"0",le(i,c))),v=cn(u),s=o(Ye,1,l),f=o(e,a,p(xn,s,v,u)),g=p(xn,0,s,u),d=f?Io(o(we,"1",o(Le,Hu,Dn(Io(g))))):g,_=cn(d),b=d==="0"?d:r<=0?le(d,o(oa,X(r),"0")):Z(r,cn(c))<0?p(xn,0,_-r,d)+("."+p(xn,_-r,_,d)):le(i+".",p(No,r,"0",c));return o(Em,a,b)}),Ou=Nm($(function(e,r){var n=Dn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(gr(t))})),Im=Vm(Ou),Hm=x(function(e,r,n){var a=o(zi,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Im,t,n)}),Ju=Kv,ba=$(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Ju,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return O(a);default:var l=e,u=i;e=l,r=u;continue e}}}),q=xe(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),xr={$:-2},An=xe(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,f=a.d,g=a.e;return C(q,0,r,n,C(q,1,v,s,f,g),C(q,1,i,c,l,u))}else return C(q,e,i,c,C(q,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,d=a.d;d.a;var _=d.b,b=d.c,y=d.d,S=d.e,g=a.e;return C(q,0,v,s,C(q,1,_,b,y,S),C(q,1,r,n,g,t))}else return C(q,e,r,n,a,t)}),Ho=x(function(e,r,n){if(n.$===-2)return C(q,0,e,r,xr,xr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Ju,e,t);switch(u){case 0:return C(An,a,t,i,p(Ho,e,r,c),l);case 1:return C(q,a,t,r,c,l);default:return C(An,a,t,i,c,p(Ho,e,r,l))}}),kn=x(function(e,r,n){var a=p(Ho,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(q,1,t,i,c,l)}else{var u=a;return u}}),Gm=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Yu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,f=v.c,g=v.d;g.a;var d=g.b,_=g.c,b=g.d,y=g.e,S=v.e;return C(q,0,d,_,C(q,1,n,a,C(q,0,i,c,l,u),b),C(q,1,s,f,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var i=w.b,c=w.c,l=w.d,u=w.e,P=e.e;P.a;var s=P.b,f=P.c,g=P.d,S=P.e;return C(q,1,n,a,C(q,0,i,c,l,u),C(q,0,s,f,g,S))}else return e},Jc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,f=l.e,g=t.e,d=e.e;d.a;var _=d.b,b=d.c,y=d.d,S=d.e;return C(q,0,i,c,C(q,1,u,v,s,f),C(q,1,n,a,g,C(q,0,_,b,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var i=w.b,c=w.c,P=w.d,g=w.e,V=e.e;V.a;var _=V.b,b=V.c,y=V.d,S=V.e;return C(q,1,n,a,C(q,0,i,c,P,g),C(q,0,_,b,y,S))}else return e},Um=Ct(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(q,n,l,u,v,C(q,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var f=c.d;return f.a,Jc(r)}else break e;else return c.a,c.d,Jc(r);else break e;return r}}),Qa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(q,r,n,a,Qa(t),l);var u=Yu(e);if(u.$===-1){var v=u.a,s=u.b,f=u.c,g=u.d,d=u.e;return C(An,v,s,f,Qa(g),d)}else return xr}else return C(q,r,n,a,Qa(t),l)}else return xr},Kn=$(function(e,r){if(r.$===-2)return xr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Z(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(q,n,a,t,o(Kn,e,i),c);var u=Yu(r);if(u.$===-1){var v=u.a,s=u.b,f=u.c,g=u.d,d=u.e;return C(An,v,s,f,o(Kn,e,g),d)}else return xr}else return C(q,n,a,t,o(Kn,e,i),c);else return o(Om,e,mi(Um,e,r,n,a,t,i,c))}),Om=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(ne(e,a)){var l=Gm(c);if(l.$===-1){var u=l.b,v=l.c;return C(An,n,u,v,i,Qa(c))}else return xr}else return C(An,n,a,t,i,o(Kn,e,c))}else return xr}),qu=$(function(e,r){var n=o(Kn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(q,1,a,t,i,c)}else{var l=n;return l}}),Va=x(function(e,r,n){var a=r(o(ba,e,n));if(a.$)return o(qu,e,n);var t=a.a;return p(kn,e,t,n)}),Jm=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Va,r,Le(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Fm,h(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Va,r,Le(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Wu,h(i,c),p(Hm,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Va,r,Le(function(a){return a.$===3?jm(n):a}));default:var r=e.a,n=e.b;return o(Va,r,Le(function(a){return a.$===2?Ru(n):a}))}},Ym=function(e){return Dm(Jm(e))},qm=$(function(e,r){return o(Q,Ym(e),r)}),Zm=$(function(e,r){return W(r,{e2:o(qm,e,r.e2)})}),Xm=$(function(e,r){var n=r.a,a=r.b;return o(or,n,W(a,{D:o(Eu,Zm(e),a.D)}))}),Qm=$(function(e,r){var n=r.a,a=r.b;return h(n,e(a))}),Km=x(function(e,r,n){var a=n.a,t=n.b,i=t.D;return o(or,a,W(t,{D:o(Qm,o(e,i.a,r),i)}))}),ep=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return W(a,{aR:!a.aR});case 2:var t=n.a;return W(a,{I:p(Cm,e,t,a.I)});case 3:var i=n.a;return W(a,{I:o(Xm,i,a.I)});case 4:var c=n.a;return W(a,{I:p(Km,r,c,a.I)});default:var l=n.a;return W(a,{I:o(Mm,l,a.I)})}}),rp=$(function(e,r){return o(or,Ft,{D:h(e,r(e)),ag:k,Y:k})}),np=$f,Yc=np(k),un=Ns,Gr=Ws,ap=mf("tick",o(F,function(e){return o(F,function(r){return o(F,function(n){return o(F,function(a){return o(F,function(t){return o(F,function(i){return o(F,function(c){return ue({W:c,cj:i,fa:t,dL:a,cV:n,b6:r,gh:e})},o(A,"clock",he))},o(A,"devicePixelRatio",he))},o(A,"dt",he))},o(A,"keyboard",o(F,function(a){return o(F,function(t){return o(F,function(i){return o(F,function(c){return o(F,function(l){return o(F,function(u){return o(F,function(v){return o(F,function(s){return o(F,function(f){return ue({eQ:f,e3:s,cl:v,e9:u,dM:l,fU:c,ey:i,f0:t,dd:a})},o(A,"alt",re))},o(A,"control",re))},o(A,"down",re))},o(A,"downs",un(Gr)))},o(A,"left",re))},o(A,"pressedKeys",un(Gr)))},o(A,"right",re))},o(A,"shift",re))},o(A,"up",re))))},o(A,"pointer",o(F,function(n){return o(F,function(a){return o(F,function(t){return o(F,function(i){return o(F,function(c){return o(F,function(l){return o(F,function(u){return o(F,function(v){return ue({cl:v,dI:u,fE:l,fY:c,fZ:i,dd:t,gl:a,gp:n})},o(A,"down",re))},o(A,"isDown",re))},o(A,"move",re))},o(A,"rightDown",re))},o(A,"rightUp",re))},o(A,"up",re))},o(A,"x",he))},o(A,"y",he))))},o(A,"screen",o(F,function(r){return o(F,function(n){return ue({fo:n,gj:r})},o(A,"height",he))},o(A,"width",he))))},o(A,"wheel",o(F,function(e){return o(F,function(r){return ue({e5:r,e6:e})},o(A,"deltaX",he))},o(A,"deltaY",he))))),tp=function(e){return{$:4,a:e}},op={$:0},Et=pi,Ge=$(function(e,r){return o(eu,e,Et(r))}),z=Ge("className"),qc=function(e){var r=e.b;return r},ip=function(e){var r=e.b.D;return r.b},j=lr("div"),dt=Ge("id"),cp=wf,ia=cp,lp=yf,oe=lp,up={$:1},$p=function(e){return{$:3,a:e}},vp=function(e){return{$:5,a:e}},Zc=lr("a"),Ur=lr("button"),Xc=function(e){return o(Ge,"href",Sf(e))},sp=kr("clip-rule"),ze=kr("d"),Go=kr("fill"),Zu=Ql("http://www.w3.org/2000/svg"),Uo=Zu("svg"),Oo=kr("viewBox"),fp=o(xf,"http://www.w3.org/XML/1998/namespace","xml:space"),Ke=Uo(m([Oo("0 0 24 24"),Go("currentColor"),o(oe,"width","100%"),o(oe,"height","100%"),fp("http://www.w3.org/2000/svg")])),dp=kr("fill-rule"),Te=Zu("path"),fr={dr:Ke(m([o(Te,m([ze("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),k)])),fi:Ke(m([o(Te,m([ze("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),k)])),fn:Ke(m([o(Te,m([ze("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),k)])),fF:Ke(m([o(Te,m([ze("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),k),o(Te,m([ze("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),k)])),fG:Ke(m([o(Te,m([ze("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),k),o(Te,m([ze("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),k)])),fR:Ke(m([o(Te,m([ze("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),k)])),fS:Ke(m([o(Te,m([ze("M7 5V19L18 12L7 5Z")]),k)])),fT:Ke(m([o(Te,m([ze("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),k)])),cV:Ke(m([o(Te,m([ze("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),k)])),gc:Ke(m([o(Te,m([dp("evenodd"),sp("evenodd"),ze("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),k)])),gd:Ke(m([o(Te,m([ze("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),k)])),gt:Ke(m([o(Te,m([ze("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),k)]))},mp=function(e){return{$:0,a:e}},Xu=Kl,ha=$(function(e,r){return o(Xu,e,mp(r))}),dr=function(e){return o(ha,"click",ue(e))},Qc=Ge("target"),Yn=Ge("title"),Jo=$(function(e,r){if(r.$===-2)return xr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(q,n,a,o(e,a,t),o(Jo,e,i),o(Jo,e,c))}),pp=Mo,ie=pp,gp=function(e){return p(zt,x(function(r,n,a){return o(T,n,a)}),k,e)},bp=$(function(e,r){return{$:3,a:e,b:r}}),hp=$(function(e,r){return{$:2,a:e,b:r}}),_p=$(function(e,r){return{$:0,a:e,b:r}}),wp=$(function(e,r){return{$:1,a:e,b:r}}),Qr=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ri=L(Qr,0/255,0/255,0/255,1),yp=pi,xp=$(function(e,r){return o(eu,e,yp(r))}),kp=xp("checked"),Ze=fs,Sp=x(function(e,r,n){return le(o(oa,e-cn(n),Bt(r)),n)}),ca=as,Qu=function(e){var r=function(n){return n<10?Me(n):Bt(Iu(87+n))};return e<16?r(e):le(Qu(e/16|0),r(o(ca,16,e)))},Cp=o(K,Qu,o(Sp,2,"0")),Wi=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aN:t,cf:a,cm:n,cY:r}},Pp=function(e){var r=Wi(e),n=r.cY,a=r.cm,t=r.cf;return o(on,"",o(T,"#",o(Q,o(K,Ze,Cp),m([n*255,a*255,t*255]))))},Yo=Ge("htmlFor"),Lp=$(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),mt=$(function(e,r){if(r.$){var a=r.a;return Ve(a)}else{var n=r.a;return e(n)}}),Ap=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(T,t,n)}),_a=$(function(e,r){return p(jr,Ap(e),k,r)}),Ku=B(function(e,r,n,a){return{ft:r,fC:e,fL:n,f4:a}}),zp=Yf,Tp=Ms,Mp=$(function(e,r){if(r.$)return Ve(e);var n=r.a;return se(n)}),Dp=Jf,jp=function(e){return o(Dp,{eZ:!1,fH:!1},e)},Vn=function(e){if(e.b){var r=e.a;return e.b,O(r)}else return J},Fp=$(function(e,r){if(r.$){var a=r.a;return Ve(a)}else{var n=r.a;return se(e(n))}}),Vp=function(e){return{$:2,a:e}},Bp=function(e){return{$:0,a:e}},Ep=function(e){return{$:1,a:e}},oo=$(function(e,r){return gr(r)-gr(e)}),io=x(function(e,r,n){var a=gr(n);return Z(gr(e),a)<1&&Z(a,gr(r))<1}),Rp=$(function(e,r){var n=function(t){return Z(t,e)<0?se(t):Ve(Ep(r))},a=p(io,"0","9",r)?se(o(oo,"0",r)):p(io,"a","z",r)?se(10+o(oo,"a",r)):p(io,"A","Z",r)?se(10+o(oo,"A",r)):Ve(Bp(r));return o(mt,n,a)}),e$=$(function(e,r){var n=Dn(r);if(n.$===1)return se(0);var a=n.a,t=a.a,i=a.b;return o(mt,function(c){return o(mt,function(l){return se(c+l*e)},o(e$,e,i))},o(Rp,e,t))}),Wp=$(function(e,r){return 2<=e&&e<=36?o(e$,e,Io(r)):Ve(Vp(e))}),Np=Wp(16),Ip=x(function(e,r,n){return L(Qr,e,r,n,1)}),Hp=B(function(e,r,n,a){return L(Qr,e,r,n,a)}),Or=ns,Gp=$(function(e,r){var n=o(Or,10,e);return Ze(r*n)/n}),Up=Ss,Op=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Nu(n);if(a.b&&!a.b.b){var t=a.a;return Tp(m([t,t]))}else return n};return o(K,Up,o(K,function(n){return o(Le,function(a){return p(zp,1,a,n)},jp(e))},o(K,Lp(Vn),o(K,Le(function(n){return n.f4}),o(K,Le(_a(Ie)),o(K,Mp("Parsing hex regex failed"),mt(function(n){var a=o(Q,o(K,r,o(K,Np,Fp(Jn))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return se(L(Hp,t/255,c/255,u/255,o(Gp,2,s/255)))}else break e;else{var t=a.a.a,f=a.b,c=f.a.a,g=f.b,u=g.a.a;return se(p(Ip,t/255,c/255,u/255))}else break e;return Ve("Parsing ints from hex failed")})))))))}(),la=lr("input"),qo=lr("label"),Zo=Ge("name"),r$=$(function(e,r){return p(jr,A,r,e)}),Jp=o(r$,m(["target","checked"]),re),Yp=function(e){return o(ha,"change",o(vt,e,Jp))},qp=function(e){return h(e,!0)},Zp=function(e){return{$:1,a:e}},Xp=$(function(e,r){return o(Xu,e,Zp(r))}),Qp=o(r$,m(["target","value"]),Gr),wa=function(e){return o(Xp,"input",o(vt,qp,o(vt,e,Qp)))},n$=Ge("max"),a$=Ge("min"),t$=function(e){return o(Ge,"step",e)},pt=Ge("type"),ya=Ge("value"),Kc=function(e){var r=e.co,n=e.de,a=e.cE,t=e.cA,i=e.c5,c=e.cJ;return o(j,k,m([o(qo,m([Yo(r)]),m([o(j,m([z("relative w-full")]),m([o(j,m([z("inline-block")]),m([ie(r)])),o(j,m([z("inline-block float-right")]),m([ie(Ce(n))]))]))])),o(la,m([pt("range"),o(oe,"width","100%"),dt(r),Zo(r),a$(Ce(a)),n$(Ce(t)),ya(Ce(n)),t$(Ce(i)),wa(o(K,Ei,o(K,we(42),c)))]),k)]))},o$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Kp=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(j,m([z("h-12 py-4")]),m([o(qo,m([z("block"),Yo(e)]),m([o(la,m([z("relative bottom-[1px] align-middle mr-2"),pt("checkbox"),dt(e),Zo(e),Yp(bp(e)),kp(c)]),k),ie(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Kc({co:e,cA:i,cE:t,cJ:_p(e),c5:.01*(i-t),de:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Kc({co:e,cA:i,cE:t,cJ:o(K,Ze,wp(e)),c5:1,de:c});default:var c=r.a;return o(j,k,m([o(j,m([o(oe,"margin-bottom","6px")]),m([o(qo,m([Yo(e)]),m([ie(e)]))])),o(la,m([pt("color"),o(oe,"width","100%"),o(oe,"height","26px"),o(oe,"padding","0px"),dt(e),Zo(e),wa(function(l){return o(hp,e,o(o$,Ri,Op(l)))}),ya(Pp(c))]),k)]))}}),e0=function(e){return o(j,m([z("p-4 border-y-[0.5px] border-white20")]),m([o(j,m([z("text-lg pb-2")]),m([ie(e.fI)])),o(j,m([z("pl-2 pr-2")]),gp(o(Jo,Kp,e.aB)))]))},r0=function(e){return o(j,m([z("text-xs text-white60")]),o(Q,e0,e))},n0=function(e){return o(j,m([z("absolute left-[104px] bottom-2 text-sm text-white40")]),m([ie("clock: "+o(Ou,3,Fn(e).W))]))},a0=function(e){e.a;var r=e.b.Y;return o(Le,function(n){return Ze(60/(Fn(e).W-n))},o(Le,o(K,Eo,function(n){return n.W}),Vn(o(Bi,59,r))))},t0=function(e){return o(j,m([z("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=a0(e);if(r.$===1)return m([ie("... Fps")]);var n=r.a;return m([ie(Me(n)+" Fps")])}())},o0=function(e){return{$:0,a:e}},i0=function(e){var r=e.b.Y;return yr(r)},c0=function(e){var r=e.b.Y;e.b.D;var n=e.b.ag;return yr(r)+1+yr(n)},l0=function(e){return o(la,m([z("absolute w-full"),pt("range"),a$(Me(0)),n$(Me(c0(e)-1)),ya(Me(i0(e))),t$(Me(1)),wa(o(K,Ei,o(K,we(42),o(K,Ze,o0))))]),k)},el={$:1},u0={$:3},$0={$:2},Ni=function(e){return!e.b},rl=$(function(e,r){return o(Ur,m([z("px-2 bg-black60 hover:bg-black80 active:bg-black"),z(r),dr(e)]),m([ie("REC")]))}),nl=$(function(e,r){return o(Ur,m([z("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),dr(r)]),m([o(j,m([z("w-4 h-6 text-white60 hover:text-white80")]),m([e]))]))}),v0=function(e){var r=e.a,n=e.b.ag;return o(j,m([z("py-1")]),m([function(){switch(r.$){case 0:return o(rl,el,"text-red-500 font-bold");case 1:return o(rl,$0,"text-white60 hover:text-white80 font-bold");default:return o(j,k,k)}}(),function(){switch(r.$){case 0:return o(j,k,k);case 1:return Ni(n)?o(j,k,k):o(nl,fr.fS,u0);default:return o(nl,fr.fR,el)}}()]))},s0=function(e){return o(j,m([z("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),m([l0(e),v0(e),t0(e),n0(e)]))},f0=function(e){var r=e.a;return ne(r,Ft)},d0=$(function(e,r){var n=f0(r.I)?o(j,k,k):o(j,m([z("absolute pointer-events-none w-8 h-8"),o(oe,"left",Ce(e.cV.gl+.5*e.b6.gj)+"px"),o(oe,"top",Ce(-e.cV.gp+.5*e.b6.fo)+"px")]),m([o(j,m([z(e.cV.dI?"text-black80":"text-black40")]),m([fr.cV]))]));return o(j,k,m([n]))}),m0=$(function(e,r){var n=o(Ur,m([z(r.aR?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),dr(up),Yn("Distraction Free Mode")]),m([fr.gt])),a=o(j,m([z("absolute w-8 bottom-12")]),m([o(Zc,m([z("text-twitterBlue40 hover:text-twitterBlue"),Xc("https://twitter.com/AzizErkalSelman"),Qc("_blank")]),m([fr.gd]))])),t=o(j,m([z("absolute w-8 bottom-2")]),m([o(Zc,m([z("text-githubCat40 hover:text-githubCat"),Xc("https://github.com/erkal/elm-3d-playground-exploration"),Qc("_blank")]),m([fr.fi]))]));return r.aR?o(j,m([z("fixed w-10 h-10 p-1")]),m([n])):o(j,k,m([o(j,m([z("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),m([n,a,t])),o(j,m([z("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(oe,"height",Ce(e.b6.fo-80)+"px")]),m([o(ia,$p,r0(Fn(r.I).e2))])),o(j,m([z("absolute bottom-0 left-10 h-20"),o(oe,"width",e.b6.gj>600?"600px":Ce(e.b6.gj-40)+"px")]),m([o(ia,vp,s0(r.I))])),o(d0,e,r)]))}),p0=x(function(e,r,n){var a=ip(n.I),t=Fn(n.I);return o(j,m([z("bg-black40"),z("select-none"),z("antialiased"),z("font-mono"),o(oe,"width",Ce(t.b6.gj)+"px"),o(oe,"height",Ce(t.b6.fo)+"px")]),m([o(j,m([z("fixed")]),m([o(ia,Mi(op),o(e,t,a))])),o(j,m([dt("gui")]),m([o(m0,t,n),o(ia,tp,o(r,t,a))]))]))}),g0=Qe(function(e,r,n,a,t,i){var c=$(function(u,v){return h(L(ep,r,i,u,v),Yc)}),l=function(u){var v=o(Tu,n,u.fv);return h({aR:u.fv.b6.gj<500,I:o(rp,v,a)},Yc)};return xm({fu:l,f5:Mi(ap($m)),ge:c,gg:o(p0,e,t)})}),gt={$:0},i$=xe(function(e,r,n,a,t){return{$7:t,dP:n,bU:a,cU:e,eo:r}}),ua=$(function(e,r){return{$:0,a:e,b:r}}),al=Bs,Xo=p(jn,$(function(e,r){return h(e,r)}),o(A,"A1",al),o(A,"A2",al)),vr=$(function(e,r){return{$:0,a:e,b:r}}),Ii=Vs,b0=function(){var e=function(r){switch(r){case"X":return ue(0);case"Y":return ue(1);case"Z":return ue(2);default:var n=r;return Ii("Unknown constructor for type Axis: "+n)}};return o(F,e,Gr)}(),h0=function(){var e=function(r){switch(r){case"Positive":return ue(0);case"Negative":return ue(1);default:var n=r;return Ii("Unknown constructor for type Sign: "+n)}};return o(F,e,Gr)}(),_0=p(jn,vr,o(A,"A1",b0),o(A,"A2",h0)),tl=p(jn,ua,o(A,"A1",Xo),o(A,"A2",_0)),br=$(function(e,r){return{fy:e,bo:r}}),co=p(jn,br,o(A,"last",Xo),o(A,"rest",un(Xo))),w0=Os,y0=de(w0,i$,o(A,"playerCube",tl),o(A,"playerPath",co),o(A,"levelEditingCube",tl),o(A,"levelEditingPath",co),o(A,"calculatedSolutions",un(co))),ol=pi,Bn=function(e){return p(Sr,$(function(r,n){var a=r.a,t=r.b;return p(Qs,a,t,n)}),Xs(),e)},Qo=function(e){var r=e.a,n=e.b;return Bn(m([h("A1",ol(r)),h("A2",ol(n))]))},x0=function(e){return Et(function(){switch(e){case 0:return"X";case 1:return"Y";default:return"Z"}}())},k0=function(e){return Et(function(){return e?"Negative":"Positive"}())},S0=function(e){var r=e.a,n=e.b;return Bn(m([h("A1",x0(r)),h("A2",k0(n))]))},il=function(e){var r=e.a,n=e.b;return Bn(m([h("A1",Qo(r)),h("A2",S0(n))]))},Hi=$(function(e,r){return p(Sr,Ks(e),Zs(),r)}),lo=function(e){return Bn(m([h("last",Qo(e.fy)),h("rest",o(Hi,Qo,e.bo))]))},C0=function(e){return Bn(m([h("playerCube",il(e.cU)),h("playerPath",lo(e.eo)),h("levelEditingCube",il(e.dP)),h("levelEditingPath",lo(e.bU)),h("calculatedSolutions",o(Hi,lo,e.$7))]))},P0=`
[
  {
    "name": "Gardner's level",
    "page": {
      "playerCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": 3,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": 3,
          "A2": 3
        },
        "rest": [
          {
            "A1": 2,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 0
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 3,
            "A2": -2
          },
          {
            "A1": 3,
            "A2": -3
          },
          {
            "A1": 3,
            "A2": -4
          },
          {
            "A1": 2,
            "A2": -4
          },
          {
            "A1": 2,
            "A2": -3
          },
          {
            "A1": 1,
            "A2": -3
          },
          {
            "A1": 1,
            "A2": -4
          },
          {
            "A1": 0,
            "A2": -4
          },
          {
            "A1": 0,
            "A2": -3
          },
          {
            "A1": 0,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -2
          },
          {
            "A1": 2,
            "A2": -2
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": 0
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": 0
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": -2,
            "A2": -1
          },
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": -1
          },
          {
            "A1": -3,
            "A2": -2
          },
          {
            "A1": -2,
            "A2": -2
          },
          {
            "A1": -1,
            "A2": -2
          },
          {
            "A1": -1,
            "A2": -3
          },
          {
            "A1": -1,
            "A2": -4
          },
          {
            "A1": -2,
            "A2": -4
          },
          {
            "A1": -2,
            "A2": -3
          },
          {
            "A1": -3,
            "A2": -3
          },
          {
            "A1": -3,
            "A2": -4
          },
          {
            "A1": -4,
            "A2": -4
          },
          {
            "A1": -4,
            "A2": -3
          },
          {
            "A1": -4,
            "A2": -2
          },
          {
            "A1": -4,
            "A2": -1
          },
          {
            "A1": -4,
            "A2": 0
          },
          {
            "A1": -4,
            "A2": 1
          },
          {
            "A1": -4,
            "A2": 2
          },
          {
            "A1": -3,
            "A2": 2
          },
          {
            "A1": -3,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -4,
            "A2": 3
          }
        ]
      },
      "calculatedSolutions": []
    }
  },
  {
    "name": "easy-0",
    "page": {
      "playerCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "calculatedSolutions": []
    }
  },
  {
    "name": "easy-1",
    "page": {
      "playerCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -1,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -1,
          "A2": 0
        },
        "rest": [
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": 0
          },
          {
            "A1": -4,
            "A2": 0
          },
          {
            "A1": -4,
            "A2": 1
          },
          {
            "A1": -4,
            "A2": 2
          },
          {
            "A1": -3,
            "A2": 2
          },
          {
            "A1": -3,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -4,
            "A2": 3
          }
        ]
      },
      "calculatedSolutions": []
    }
  },
  {
    "name": "easy-2",
    "page": {
      "playerCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -2,
          "A2": 2
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -2,
          "A2": 2
        },
        "rest": [
          {
            "A1": -3,
            "A2": 2
          },
          {
            "A1": -4,
            "A2": 2
          },
          {
            "A1": -5,
            "A2": 2
          },
          {
            "A1": -5,
            "A2": 3
          },
          {
            "A1": -5,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 4
          },
          {
            "A1": -3,
            "A2": 4
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -4,
            "A2": 3
          }
        ]
      },
      "calculatedSolutions": []
    }
  },
  {
    "name": "middle-1",
    "page": {
      "playerCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -5,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -5,
          "A2": 3
        },
        "rest": [
          {
            "A1": -5,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 5
          },
          {
            "A1": -5,
            "A2": 5
          },
          {
            "A1": -5,
            "A2": 6
          },
          {
            "A1": -4,
            "A2": 6
          },
          {
            "A1": -4,
            "A2": 7
          },
          {
            "A1": -3,
            "A2": 7
          },
          {
            "A1": -2,
            "A2": 7
          },
          {
            "A1": -1,
            "A2": 7
          },
          {
            "A1": -1,
            "A2": 6
          },
          {
            "A1": -1,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 6
          },
          {
            "A1": -3,
            "A2": 6
          },
          {
            "A1": -3,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 4
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -4,
            "A2": 3
          }
        ]
      },
      "calculatedSolutions": []
    }
  },
  {
    "name": "middle-2",
    "page": {
      "playerCube": {
        "A1": {
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -4,
          "A2": 5
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -4,
          "A2": 5
        },
        "rest": [
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -5,
            "A2": 4
          },
          {
            "A1": -5,
            "A2": 3
          },
          {
            "A1": -5,
            "A2": 2
          },
          {
            "A1": -6,
            "A2": 2
          },
          {
            "A1": -7,
            "A2": 2
          },
          {
            "A1": -7,
            "A2": 3
          },
          {
            "A1": -6,
            "A2": 3
          },
          {
            "A1": -6,
            "A2": 4
          },
          {
            "A1": -6,
            "A2": 5
          },
          {
            "A1": -7,
            "A2": 5
          },
          {
            "A1": -7,
            "A2": 4
          },
          {
            "A1": -8,
            "A2": 4
          },
          {
            "A1": -8,
            "A2": 5
          },
          {
            "A1": -8,
            "A2": 6
          },
          {
            "A1": -7,
            "A2": 6
          },
          {
            "A1": -6,
            "A2": 6
          },
          {
            "A1": -5,
            "A2": 6
          },
          {
            "A1": -4,
            "A2": 6
          },
          {
            "A1": -3,
            "A2": 6
          },
          {
            "A1": -2,
            "A2": 6
          },
          {
            "A1": -1,
            "A2": 6
          },
          {
            "A1": -1,
            "A2": 5
          },
          {
            "A1": -1,
            "A2": 4
          },
          {
            "A1": -2,
            "A2": 4
          },
          {
            "A1": -2,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 4
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -4,
            "A2": 3
          }
        ]
      },
      "calculatedSolutions": []
    }
  }
]
`,L0=$(function(e,r){return{fI:e,fQ:r}}),A0=Js,c$=$(function(e,r){return{r,m:k,D:e}}),l$=$(function(e,r){var n=r;return W(n,{V:function(){var a=p(jn,L0,o(A,"name",Gr),o(A,"page",n.ek));return o(o$,n.V,o(A0,o(F,function(t){if(t.b){var i=t.a,c=t.b;return ue(o(c$,i,c))}else return Ii("List of pages is empty")},un(a)),e))}()})}),z0={bR:!1,ei:J,c4:0},Rt={$:0},T0=Rt,M0=B(function(e,r,n,a){return{dw:e,ek:r,V:o(c$,n,a),c8:"",b9:""}}),D0=C(i$,o(ua,h(-4,3),o(vr,2,0)),o(br,h(-4,3),k),o(ua,h(3,3),o(vr,2,0)),o(br,h(3,3),m([h(2,3),h(1,3),h(0,3),h(0,2),h(1,2),h(1,1),h(2,1),h(2,2),h(3,2),h(3,1),h(3,0),h(3,-1),h(3,-2),h(3,-3),h(3,-4),h(2,-4),h(2,-3),h(1,-3),h(1,-4),h(0,-4),h(0,-3),h(0,-2),h(1,-2),h(2,-2),h(2,-1),h(2,0),h(1,0),h(1,-1),h(0,-1),h(0,0),h(0,1),h(-1,1),h(-1,0),h(-1,-1),h(-2,-1),h(-2,0),h(-3,0),h(-3,-1),h(-3,-2),h(-2,-2),h(-1,-2),h(-1,-3),h(-1,-4),h(-2,-4),h(-2,-3),h(-3,-3),h(-3,-4),h(-4,-4),h(-4,-3),h(-4,-2),h(-4,-1),h(-4,0),h(-4,1),h(-4,2),h(-3,2),h(-3,1),h(-2,1),h(-2,2),h(-1,2),h(-1,3),h(-2,3),h(-3,3),h(-4,3)])),k),j0=function(e){return{ba:h(0,0),R:z0,k:o(l$,P0,L(M0,C0,y0,{fI:"level 1",fQ:D0},k)),c4:gt,bt:T0}},nn=$(function(e,r){return h(e,Ru(r))}),F0=x(function(e,r,n){return{aB:n,fw:r,fI:e}}),Gi=xr,V0=function(e){return p(Sr,$(function(r,n){var a=r.a,t=r.b;return p(kn,a,t,n)}),Gi,e)},B0=x(function(e,r,n){return p(F0,e,r,V0(n))}),uo=B0,Br=x(function(e,r,n){var a=r.a,t=r.b;return h(e,o(Wu,h(a,t),n))}),tr=ts,$o=function(e){return e/255},an=x(function(e,r,n){return L(Qr,$o(e),$o(r),$o(n),1)}),E0=m([p(uo,"Camera",!0,m([p(Br,"camera distance",h(3,60),20),p(Br,"camera azimuth",h(-tr,tr),0),p(Br,"camera elevation",h(-tr/2,tr/2),-.15)])),p(uo,"Parameters",!0,m([p(Br,"cubes side length",h(.5,1),.95),p(Br,"duration of step animation",h(.1,1),.23),p(Br,"duration of mistake animation",h(.1,1),.5),p(Br,"height of following lights",h(.1,8),5)])),p(uo,"Colors and light",!0,m([p(Br,"lumens of following lights",h(4e4,12e4),1e5),o(nn,"background color",p(an,150,150,150)),o(nn,"color 1",p(an,244,88,67)),o(nn,"color 2",p(an,255,200,40)),o(nn,"path color",p(an,244,88,67)),o(nn,"board color",p(an,200,170,170)),o(nn,"finish mark color",p(an,150,215,106)),o(nn,"wall color",p(an,38,48,64))]))]),Ui=function(e){var r=e;return r.D},De=function(e){var r=e;return Ui(r.V).fQ},R0=function(e){return{$:1,a:e}},Ka=Qe(function(e,r,n,a,t,i){var c=i.c4;return c.$?i:W(i,{c4:R0({cF:t,bq:n,b8:r,ak:e.W,eO:a})})}),W0={$:1},N0={$:0},vo=function(e){return{$:2,a:e}},u$=$(function(e,r){return o(Vt,function(n){return ne(n,e)},r)}),et=$(function(e,r){var n=r.fy,a=r.bo;return o(u$,e,o(T,n,a))}),Ko=function(e){return ne(e,o(vr,2,0))},bt=$(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return h(n,a+1);case 1:return h(n,a-1);case 2:return h(n-1,a);default:return h(n+1,a)}}),$$=function(e){return e?0:1},Ba=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(vr,r,n);case 1:return o(vr,2,n);default:return o(vr,1,$$(n))}},Ea=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(vr,2,$$(n));case 1:return o(vr,r,n);default:return o(vr,0,n)}},I0=function(e){switch(e){case 0:return o(K,Ba,o(K,Ba,Ba));case 1:return Ba;case 2:return o(K,Ea,o(K,Ea,Ea));default:return Ea}},v$=$(function(e,r){var n=r.a,a=r.b;return o(ua,o(bt,e,n),o(I0,e,a))}),H0=$(function(e,r){var n=o(v$,e,r.dP),a=n.a,t=r.dP,i=t.b,c=r.bU.bo;if(c.b){var l=c.a,u=c.b;return ne(l,a)?vo(W(r,{dP:n,bU:o(br,l,u)})):Ko(i)?N0:o(et,a,r.bU)?W0:vo(W(r,{dP:n,bU:o(br,a,o(T,r.bU.fy,o(T,l,u)))}))}else return vo(W(r,{dP:n,bU:o(br,a,m([r.bU.fy]))}))}),G0=B(function(e,r,n,a){var t=o(H0,e,De(a.k));switch(t.$){case 0:return a;case 1:return a;default:var i=t.a;return de(Ka,n,r,e,!1,i,a)}}),U0=function(e){return{$:2,a:e}},cl=xe(function(e,r,n,a,t){var i=t.c4;return i.$?t:W(t,{c4:U0({bq:a,b8:n,ak:e.W,dg:r})})}),O0=function(e){return{$:3,a:e}},J0=function(e){return{$:1,a:e}},ll=function(e){return{$:2,a:e}},In=function(e){return{$:0,a:e}},ht=function(e){var r=e.bo;return 1+yr(r)},s$=$(function(e,r){var n=o(v$,e,r.cU),a=n.a,t=n.b,i=r.eo.bo;if(i.b){var c=i.a,l=i.b;if(ne(c,a))return J0(W(r,{cU:n,eo:o(br,c,l)}));if(o(et,a,r.bU)){if(o(et,a,r.eo))return In(3);var u=W(r,{cU:n,eo:o(br,a,o(T,r.eo.fy,o(T,c,l)))});return ne(a,r.bU.fy)?ne(ht(u.eo),ht(u.bU))&&Ko(t)?O0(u):In(0):Ko(t)?In(1):ll(u)}else return In(2)}else return o(et,a,r.bU)?ll(W(r,{cU:n,eo:o(br,a,m([r.eo.fy]))})):In(2)}),Y0=B(function(e,r,n,a){var t=o(s$,e,De(a.k));switch(t.$){case 0:switch(t.a){case 3:return t.a,a;case 2:return t.a,a;case 1:return t.a,C(cl,n,1,r,e,a);default:return t.a,C(cl,n,0,r,e,a)}case 2:var i=t.a;return de(Ka,n,r,e,!1,i,a);case 1:var i=t.a;return de(Ka,n,r,e,!1,i,a);default:var i=t.a;return de(Ka,n,r,e,!0,i,a)}}),ul=function(e){var r=e.a;return r},q0=function(e){var r=m([e.dd,e.cl,e.dM,e.ey]);e:for(;;)if(r.b)if(r.a)if(r.b.b&&!r.b.a&&r.b.b.b&&!r.b.b.a&&r.b.b.b.b&&!r.b.b.b.a&&!r.b.b.b.b.b){var n=r.b,a=n.b;return a.b,O(0)}else break e;else if(r.b.b)if(r.b.a)if(r.b.b.b&&!r.b.b.a&&r.b.b.b.b&&!r.b.b.b.a&&!r.b.b.b.b.b){var t=r.b,i=t.b;return i.b,O(1)}else break e;else if(r.b.b.b)if(r.b.b.a)if(r.b.b.b.b&&!r.b.b.b.a&&!r.b.b.b.b.b){var c=r.b,l=c.b;return l.b,O(2)}else break e;else if(r.b.b.b.b&&r.b.b.b.a&&!r.b.b.b.b.b){var u=r.b,v=u.b;return v.b,O(3)}else break e;else break e;else break e;else break e;return J},xa=function(e){return{$:2,a:e}},Z0=Tt(xa(3)),X0=Tt(xa(0)),Q0=Tt(xa(1)),K0=Tt(xa(2)),eg=function(e){return K0(e)?O(0):Z0(e)?O(1):X0(e)?O(2):Q0(e)?O(3):J},rg=$(function(e,r){var n=h(eg(r.bt),q0(e.dL));if(n.a.$){if(n.b.$)return J;var t=n.b.a;return O(t)}else{var a=n.a.a;return O(a)}}),ng={$:3},ag=$(function(e,r){return o(Le,function(n){if(n.$)return 0;var a=n.b;return a},o(ba,e,r.aB))}),tg=$(function(e,r){return o(we,0,Vn(o(_a,ag(e),r)))}),og=$(function(e,r){return o(tg,e,r.e2)}),pe=og,f$=$(function(e,r){var n=r;return W(n,{D:e(n.D)})}),fn=$(function(e,r){var n=r;return W(n,{V:e(n.V)})}),ei=function(e){return fn(f$(function(r){return W(r,{fQ:e(r.fQ)})}))},ig=$(function(e,r){var n=r.c4;switch(n.$){case 1:var i=n.a.ak,a=n.a.cF,t=n.a.eO;return Z(e.W-i,o(pe,"duration of step animation",e))>0?W(r,{k:o(ei,Mi(a),r.k),c4:t?ng:gt}):r;case 2:var i=n.a.ak;return Z(e.W-i,o(pe,"duration of mistake animation",e))>0?W(r,{c4:gt}):r;default:return r}}),zn=function(e){var r=e.fy,n=e.bo;return o(T,r,n)},$l=function(e){if(e.b){var r=e.a,n=e.b;return O(p(Sr,Ye,r,n))}else return J},Sn=$(function(e,r){return Z(e,r)<0?e:r}),vl=function(e){if(e.b){var r=e.a,n=e.b;return O(p(Sr,Sn,r,n))}else return J},cg=function(e){var r=zn(e.bU),n={d9:o(we,0,$l(o(Q,o(K,Eo,Jn),r))),ea:o(we,0,$l(o(Q,o(K,qc,Jn),r))),ec:o(we,0,vl(o(Q,o(K,Eo,Jn),r))),ed:o(we,0,vl(o(Q,o(K,qc,Jn),r)))},a=n.ec,t=n.d9,i=n.ed,c=n.ea;return{gl:.5*(a+t),gp:.5*(i+c)}},lg=ls,Oi=function(e){return e},He=function(e){return e},_t=function(e){var r=e;return-r},ug=$(function(e,r){var n=e,a=r;return{gl:n.gp*a.dk-n.dk*a.gp,gp:n.dk*a.gl-n.gl*a.dk,dk:n.gl*a.gp-n.gp*a.gl}}),d$=function(e){var r=e;return r.di},m$=function(e){var r=e;return r.dj},$g=function(e){return o(ug,d$(e),m$(e))},dn=function(e){var r=e;return r.cK},$n=os,vn=is,rt=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=$n(c),u=vn(c),v=a.e8,s=v,f=s.gl*u,g=l*f,d=f*f,_=s.gp*u,b=l*_,y=f*_,S=_*_,w=1-2*(d+S),P=s.dk*u,V=l*P,G=2*(y-V),I=2*(y+V),N=f*P,H=2*(N+b),U=2*(N-b),E=_*P,ee=2*(E-g),te=2*(E+g),me=P*P,be=1-2*(S+me),fe=1-2*(d+me);return{gl:be*i.gl+G*i.gp+H*i.dk,gp:I*i.gl+fe*i.gp+ee*i.dk,dk:U*i.gl+te*i.gp+w*i.dk}}),ka=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=$n(c),u=vn(c),v=a.cK,s=v,f=i.gl-s.gl,g=i.gp-s.gp,d=i.dk-s.dk,_=a.e8,b=_,y=b.gl*u,S=l*y,w=y*y,P=b.gp*u,V=l*P,G=y*P,I=P*P,N=1-2*(w+I),H=b.dk*u,U=l*H,E=2*(G-U),ee=2*(G+U),te=y*H,me=2*(te+V),be=2*(te-V),fe=P*H,ke=2*(fe-S),Ue=2*(fe+S),Re=H*H,Fr=1-2*(I+Re),Vr=1-2*(w+Re);return{gl:s.gl+Fr*f+E*g+me*d,gp:s.gp+ee*f+Vr*g+ke*d,dk:s.dk+be*f+Ue*g+N*d}}),Tr=function(e){return e},Kr=function(e){var r=e;return r.di},en=function(e){var r=e;return r.dj},rn=function(e){var r=e;return r.dl},p$=x(function(e,r,n){return Tr({cK:p(ka,e,r,dn(n)),di:p(rt,e,r,Kr(n)),dj:p(rt,e,r,en(n)),dl:p(rt,e,r,rn(n))})}),sl=x(function(e,r,n){return p(p$,e(n),r,n)}),Wt=function(e){var r=e;return r.e8},En=$(function(e,r){var n=e,a=r;return{gl:a.gl+n.gl,gp:a.gp+n.gp,dk:a.dk+n.dk}}),g$=$(function(e,r){return Tr({cK:o(En,e,dn(r)),di:Kr(r),dj:en(r),dl:rn(r)})}),vg=$(function(e,r){var n=e,a=r;return{gl:n*a.gl,gp:n*a.gp,dk:n*a.dk}}),sg=x(function(e,r,n){return o(g$,o(vg,r,e),n)}),fg=x(function(e,r,n){return p(sg,Wt(e(n)),r,n)}),Xe=$(function(e,r){return{e8:r,cK:e}}),dg=function(e){var r=e;return o(Xe,r.cK,r.di)},mg=function(e){var r=e;return o(Xe,r.cK,r.dj)},pg=function(e){var r=e;return o(Xe,r.cK,r.dl)},gg=function(e){var r=Tr({cK:e.aX,di:m$(e.dC),dj:$g(e.dC),dl:d$(e.dC)}),n=p(fg,pg,e.ck,p(sl,dg,_t(e.bM),p(sl,mg,e.bH,r)));return n},bg=function(e){return{$:0,a:e}},ve=function(e){var r=e;return X(r)},nt=function(e){var r=e;return .5*r},hg=cs,_g=function(e){var r=e;return hg(r)},wg=function(e){var r=nt(ve(e.eK)),n=_g(r);return{cX:bg(n),df:e.df}},qe=function(e){return e},Be={gl:0,gp:0,dk:0},b$=Ie,hr=function(e){return e},h$=hr({gl:1,gp:0,dk:0}),Nt=h$,Ji=hr({gl:0,gp:0,dk:1}),It=Ji,yg=b$({cK:Be,di:It,dj:Nt}),xg=function(e){var r=e.aX,n=e.bH,a=e.bM,t=e.ck;return wg({eK:qe(2*lg(.5)),df:gg({bH:qe(n),ck:He(t),bM:qe(a),aX:Oi(r),dC:yg})})},_$=$(function(e,r){return xg({bH:o(pe,"camera azimuth",e),ck:o(pe,"camera distance",e),bM:o(pe,"camera elevation",e),aX:function(){var n=cg(De(r.k));return{gl:n.gl,gp:n.gp,dk:0}}()})}),kg=x(function(e,r,n){return{gl:e,gp:r,dk:n}}),qn=function(e){return qe(tr*(e/180))},Ra=function(e){return e},at=function(e){var r=e;return r},Sg=$(function(e,r){var n=e,a=r;return a.gl*n.gl+a.gp*n.gp+a.dk*n.dk}),ae=$(function(e,r){var n=r;return e*n}),Yi=function(e){var r=e;return r.cK},Cg=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=n.fK,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp+(a.dk-i.dk)*l.dk}),Pg=x(function(e,r,n){var a=e,t=r,i=n;return{gl:i.gl+t*a.gl,gp:i.gp+t*a.gp,dk:i.dk+t*a.dk}}),Lg=$(function(e,r){var n=Wt(r),a=e,t=a.fK,i=o(Sg,t,n);if(i){var c=Yi(r),l=o(Cg,e,c),u=o(ae,-1/i,l);return O(p(Pg,n,u,c))}else return J}),Ag=$(function(e,r){return{gl:e,gp:r}}),fl=$(function(e,r){var n=e,a=r;return n*a}),zg=function(e){var r=e;return r},dl=function(e){var r=e;return zg(r.eU)},Tg=function(e){var r=e;return r.aQ},Er=ds,Mg=function(e){var r=e,n=o(Ye,X(r.gl),o(Ye,X(r.gp),X(r.dk)));if(n){var a=r.dk/n,t=r.gp/n,i=r.gl/n,c=Er(i*i+t*t+a*a);return O({gl:i/c,gp:t/c,dk:a/c})}else return J},w$=$(function(e,r){var n=r;return n/e}),ri=function(e){var r=e;return dn(r)},qi=hr({gl:0,gp:0,dk:-1}),Dg=$(function(e,r){var n=e,a=r;return a/n}),jg=$(function(e,r){var n=e,a=r,t=n.dl,i=t,c=n.dj,l=c,u=n.di,v=u;return{gl:v.gl*a.gl+l.gl*a.gp+i.gl*a.dk,gp:v.gp*a.gl+l.gp*a.gp+i.gp*a.dk,dk:v.dk*a.gl+l.dk*a.gp+i.dk*a.dk}}),Wr=function(e){var r=e;return{gl:-r.gl,gp:-r.gp,dk:-r.dk}},ni=function(e){var r=e;return Wr(rn(r))},Fg=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=n.di,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),Zi=x(function(e,r,n){var a=e,t=r,i=n;return{gl:a,gp:t,dk:i}}),Vg=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cK,v=u,s=t.dl,f=s,g=t.dj,d=g,_=t.di,b=_;return{gl:v.gl+i*b.gl+c*d.gl+l*f.gl,gp:v.gp+i*b.gp+c*d.gp+l*f.gp,dk:v.dk+i*b.dk+c*d.dk+l*f.dk}}),Bg=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=n.dj,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),Lr=0,Eg=x(function(e,r,n){var a=e,t=o(Bg,dl(r),n),i=o(Fg,dl(r),n),c=a.df,l=c,u=Tg(r);u.a;var v=u.b,s=a.cX;if(s.$){var _=s.a,b=o(Dg,v,_),y=L(Vg,l,o(fl,b,i),o(fl,b,t),Lr);return o(Xe,y,ni(a.df))}else{var f=s.a,g=_t(o(w$,f,o(ae,.5,v))),d=o(jg,l,o(we,qi,Mg(p(Zi,i,t,g))));return o(Xe,ri(a.df),d)}}),ai=function(e){var r=e;return{gl:$n(r),gp:vn(r)}},Rg=function(e){var r=e;return{gl:-r.gp,gp:r.gl}},Wg=function(e){return e},Ng=$(function(e,r){return Wg({cK:r,di:e,dj:Rg(e)})}),Ig=$(function(e,r){return o(Ng,ai(e),r)}),Hg=x(function(e,r,n){var a=e.a,t=e.b;return{eU:o(Ig,r,n),aQ:h(ve(a),ve(t))}}),Nr=function(e){var r=e;return r.gl},Gg=$(function(e,r){var n=e,a=r;return{gl:n,gp:a}}),Ir=function(e){var r=e;return r.gp},Hr=function(e){var r=e;return r.dk},Ug=B(function(e,r,n,a){var t=n.gl,i=n.gp,c=function(v){return p(kg,at(Nr(v)),at(Ir(v)),at(Hr(v)))},l=p(Hg,h(Ra(r.gj),Ra(r.fo)),qn(0),o(Ag,0,0)),u=o(Gg,Ra(t),Ra(i));return o(Le,c,o(Lg,a,p(Eg,e,l,u)))}),Og=$(function(e,r){return{fK:e,cK:r}}),Jg=$(function(e,r){var n=r;return o(Og,n.fK,o(En,e,n.cK))}),Yg=$(function(e,r){return{fK:r,cK:e}}),qg=o(Yg,Be,It),Zg=B(function(e,r,n,a){return L(Ug,r,n,a,o(Jg,p(Zi,He(0),He(0),He(e)),qg))}),Xg=Zg(0),Qg=$(function(e,r){return W(r,{ba:o(we,r.ba,o(Le,function(n){var a=n.gl,t=n.gp;return h(Ze(a),Ze(t))},p(Xg,o(_$,e,r),e.b6,e.cV)))})}),Kg=function(e){return e.$===2?Rt:e},e1=$(function(e,r){return e.cV.dI?r:Rt}),r1=$(function(e,r){return Er(o(Or,e.gl-r.gl,2)+o(Or,e.gp-r.gp,2))}),n1=x(function(e,r,n){var a=h(r,n),t=a.a,i=a.b;return Z(o(r1,t,i),e)<0?J:Z(i.gl-t.gl,X(i.gp-t.gp))>0?O(1):Z(t.gl-i.gl,X(i.gp-t.gp))>0?O(0):Z(i.gp-t.gp,X(i.gl-t.gl))>0?O(2):O(3)}),y$=function(e){return{gl:e.cV.gl,gp:e.cV.gp}},a1=x(function(e,r,n){var a=r.f9,t=h(n,e.cV.dI);if(t.a.$===1&&t.b){var i=t.a.a,c=p(n1,a,i,y$(e));if(c.$)return n;var l=c.a;return xa(l)}else return n}),t1=function(e){return{$:1,a:e}},o1=$(function(e,r){return r.$===1?r:e.cV.dI?t1(y$(e)):Rt}),i1=x(function(e,r,n){return p(a1,e,r,o(e1,e,o(o1,e,Kg(n))))}),c1=$(function(e,r){return W(r,{bt:p(i1,e,{f9:20},r.bt)})}),l1=$(function(e,r){var n=De(r.k).cU,a=De(r.k).dP,t=function(){var i=o(rg,e,r);if(i.$===1)return Ie;var c=i.a;return r.R.bR?p(G0,c,ul(a),e):p(Y0,c,ul(n),e)}();return o(ig,e,t(o(Qg,e,o(c1,e,r))))}),u1=$(function(e,r){return r.b?p(jr,T,r,e):e}),ir=function(e){return p(jr,u1,k,e)},Sa=$(function(e,r){return ir(o(Q,e,r))}),Rn=$(function(e,r){return p(jr,$(function(n,a){return e(n)?o(T,n,a):a}),k,r)}),x$=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(x$,e,r,i)),v=c;e=l,r=u,n=v;continue e}}),$1=$(function(e,r){return p(x$,x(function(n,a,t){return o(qu,n,t)}),e,r)}),v1=$(function(e,r){var n=e,a=r;return o($1,n,a)}),k$=Gi,S$=$(function(e,r){var n=r;return p(kn,e,0,n)}),ml=function(e){return p(Sr,S$,k$,e)},s1=$(function(e,r){var n=o(ba,e,r);return!n.$}),C$=$(function(e,r){var n=r;return o(s1,e,n)}),f1=$(function(e,r){return o(Rn,function(n){return o(C$,n,e)},o(Q,function(n){return o(bt,n,r)},m([0,1,2,3])))}),d1=$(function(e,r){var n=$(function(a,t){e:for(;;)if(t.b){var i=t.a,c=t.b,l=o(Rn,function(s){return!(o(u$,s,t)||o(C$,s,a))},o(f1,r,i)),u=o(S$,i,a),v=le(c,l);a=u,t=v;continue e}else return a});return o(n,k$,m([e]))}),P$=$(function(e,r){e:for(;;){if(r.$===-2)return e;var n=r.d,a=r.e,t=o(P$,e+1,a),i=n;e=t,r=i;continue e}}),m1=function(e){return o(P$,0,e)},pl=function(e){var r=e;return m1(r)},p1=function(e){var r=pl(e);return o(we,!1,o(Le,function(n){return Z(pl(o(d1,n,e)),r)<0},Vn(Yd(e))))},g1=function(e){return p1(o(v1,ml(zn(e.bU)),ml(zn(e.eo))))},b1=function(e){var r=e.fy,n=e.bo;return o(we,r,Vn(ye(n)))},L$=function(e){var r=b1(e.bU);return W(e,{cU:o(ua,r,o(vr,2,0)),eo:o(br,r,k)})},h1=function(e){var r=$(function(n,a){e:for(;;){if(Ni(a))return n;var t=le(n,a),i=o(Sa,function(c){return g1(c)?k:o(_a,function(l){var u=o(s$,l,c);switch(u.$){case 0:return J;case 1:return J;case 2:var v=u.a;return O(v);default:var v=u.a;return O(v)}},m([0,1,2,3]))},a);n=t,a=i;continue e}});return o(Rn,function(n){return ne(ht(n),ht(e.bU))},o(Q,function(n){return n.eo},o(r,k,m([L$(e)]))))},_1=function(e){return W(e,{bR:!e.bR,c4:0})},w1=$(function(e,r){var n=r;return W(n,{m:o(T,n.D,n.m),D:e})}),y1=$(function(e,r){var n=r;if(e.$)return n;var a=Ui(n.V);return o(fn,w1(W(a,{fI:a.fI+" copy"})),n)}),x1=$(function(e,r){var n=r;if(e.$===4){var a=e.a;return o(fn,f$(function(t){return W(t,{fI:a})}),n)}else return n}),Xi=function(e){var r=e;return le(ye(r.m),le(m([r.D]),r.r))},k1=$(function(e,r){var n=r;switch(e.$){case 6:return W(n,{c8:o(wu,2,o(Hi,function(t){return Bn(m([h("name",Et(t.fI)),h("page",n.dw(t.fQ))]))},Xi(n.V)))});case 7:return o(l$,n.b9,n);case 8:var a=e.a;return W(n,{b9:a});default:return n}}),S1=function(e){var r=e,n=r.r;if(n.b){var a=n.a,t=n.b;return W(r,{r:t,m:o(T,a,r.m)})}else return W(r,{r:ye(r.m),m:k})},C1=$(function(e,r){var n=r;return e.$===2?o(fn,S1,n):n}),P1=function(e){var r=e,n=r.m;if(n.b){var a=n.a,t=n.b;return W(r,{r:o(T,a,r.r),m:t})}else return W(r,{r:k,m:ye(r.r)})},L1=$(function(e,r){var n=r;return e.$===3?o(fn,P1,n):n}),A1=function(e){var r=e,n=r.m;if(n.b){var a=n.a,t=n.b;return W(r,{m:t,D:a})}else{var i=r.r;if(i.b){var a=i.a,t=i.b;return W(r,{r:t,D:a})}else return r}},z1=$(function(e,r){var n=r;return e.$===1?o(fn,A1,n):n}),T1=$(function(e,r){var n=r,a=Xi(n),t=o(ca,yr(a),e),i=o(Bi,t,a);if(i.b){var c=i.a,l=i.b;return{r:l,m:ye(o(Bu,t,a)),D:c}}else return n}),M1=$(function(e,r){var n=r;if(e.$===5){var a=e.a;return o(fn,T1(a),n)}else return n}),D1=$(function(e,r){return o(k1,e,o(x1,e,o(M1,e,o(L1,e,o(C1,e,o(z1,e,o(y1,e,r)))))))}),j1=x(function(e,r,n){var a=n.R;switch(r.$){case 0:return W(n,{R:_1(n.R),k:o(ei,L$,n.k),c4:gt});case 1:return W(n,{k:o(ei,function(c){return W(c,{$7:h1(De(n.k))})},n.k)});case 2:var t=r.a;return W(n,{R:W(a,{ei:O(t)})});case 3:return W(n,{R:W(a,{ei:J})});default:var i=r.a;return W(n,{k:o(D1,i,n.k)})}}),Wa=lr("br"),Na=lr("p"),Ia=lr("span"),F1=$(function(e,r){return o(j,m([o(oe,"position","fixed"),o(oe,"width","100%"),o(oe,"text-align","center"),o(oe,"font-size","14px")]),m([o(j,m([z("text-lg font-bold")]),m([ie("The Red-Faced Cube")])),o(Na,m([z("font-bold italic")]),m([o(Na,k,m([ie("A puzzle from the book Mathematical Carnival")])),o(Na,k,m([ie("(1975, Martin Gardner)")]))])),o(Na,m([z("text-xs")]),m([o(Ia,function(){var n=r.c4;if(n.$===2){n.a.ak;var a=n.a.dg;return a?k:m([o(oe,"background-color","red")])}else return k}(),m([ie(" Visit each cell exactly once.")])),o(Wa,k,k),o(Ia,k,m([ie("End with the cube red side up on the (marked) finish cell.")])),o(Wa,k,k),o(Ia,function(){var n=r.c4;if(n.$===2){n.a.ak;var a=n.a.dg;return a===1?m([o(oe,"background-color","red")]):k}else return k}(),m([ie("At no time during the tour, however,"),o(Wa,k,k),ie("is the cube allowed to rest with the red side up.")])),o(Wa,k,k),o(Ia,k,m([ie("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Qi=function(e){return e},Ki=x(function(e,r,n){return Z(n,e)<0?e:Z(n,r)>0?r:n}),V1=function(e){var r=e;return r},B1=function(e){var r=p(Ki,1667,25e3,V1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Qi({gl:n,gp:a})},E1=function(e){return e},R1=function(e){return{$:0,a:e}},W1=R1,N1={$:3},I1=N1,H1=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),G1=H1,U1=function(e){return{$:1,a:e}},O1=U1,J1=function(e){return o(kr,"height",Me(e))},Y1=function(e){return hf(kf(e))},q1=Y1,Z1=function(e){return{$:2,a:e}},X1=Z1,Q1=function(e){return o(on,"",e)},K1=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return Q1(m(["rgba(",Ce(c(r)),"%,",Ce(c(n)),"%,",Ce(c(a)),"%,",Ce(i(t)),")"]))},eb=$(function(e,r){switch(r.$){case 0:return o(wd,e,r);case 1:return o(yd,e,r);case 2:return o(xd,e,r);case 3:return o(kd,e,r);case 4:return o(Sd,e,r);default:return o(Cd,e,r)}}),rb=$(function(e,r){switch(r.$){case 0:return o(Xf,e,r);case 1:return o(Qf,e,r);case 2:return o(Kf,e,r);case 3:return o(ed,e,r);case 4:return o(rd,e,r);case 5:return o(nd,e,r);case 6:return o(ad,e,r);case 7:return o(td,e,r);default:return od(e)}}),nb=x(function(e,r,n){return p(_d,e,r,n)}),gl=function(e){var r=e;return r},Wn=Bd,so=L(Wn,1,1,1,1),sr=x(function(e,r,n){return o(Q,function(a){return o(a,r,n)},e)}),ab=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),tb=$(function(e,r){var n=e,a=r.gl,t=r.gp;return p(ab,n*a/t,n,n*(1-a-t)/t)}),Ca=Td,ob=function(e){var r=e.a,n=e.b,a=e.c;return p(Ca,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ht=$(function(e,r){return ob(o(tb,e,r))}),A$=$(function(e,r){return{dJ:ne(e.dJ,r.dJ),s:e.s*r.s+e.t*r.v+e.u*r.y,t:e.s*r.t+e.t*r.w+e.u*r.z,u:e.s*r.u+e.t*r.x+e.u*r.A,v:e.v*r.s+e.w*r.v+e.x*r.y,w:e.v*r.t+e.w*r.w+e.x*r.z,x:e.v*r.u+e.w*r.x+e.x*r.A,y:e.y*r.s+e.z*r.v+e.A*r.y,z:e.y*r.t+e.z*r.w+e.A*r.z,A:e.y*r.u+e.z*r.x+e.A*r.A,J:r.J+(e.J*r.s+e.K*r.v+e.L*r.y)*r.b5,K:r.K+(e.J*r.t+e.K*r.w+e.L*r.z)*r.b5,L:r.L+(e.J*r.u+e.K*r.x+e.L*r.A)*r.b5,b5:e.b5*r.b5}}),mr=Hd,ib=function(e){return mr({dU:e.s,dV:e.v,dW:e.y,dX:e.J,dY:e.t,dZ:e.w,d_:e.z,d$:e.K,d0:e.u,d1:e.x,d2:e.A,d3:e.L,d4:0,d5:0,d6:0,d7:1})},fo=xe(function(e,r,n,a,t){var i=a.dJ?1:-1,c=L(Wn,a.b5,a.b5,a.b5,i);return de(t,e,c,ib(a),a.dJ,r,n)}),z$=Qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,f=o(A$,c,a),g=l,d=i;e=u,r=v,n=s,a=f,t=g,i=d;continue e;case 1:var _=t.b,b=o(T,C(fo,e,r,n,a,_),i.O);return{O:b,Z:i.Z,f$:i.f$};case 3:var y=t.b,S=o(T,C(fo,e,r,n,a,y),i.Z);return{O:i.O,Z:S,f$:i.f$};case 2:var w=t.a,P=o(T,C(fo,e,r,n,a,w),i.f$);return{O:i.O,Z:i.Z,f$:P};default:var V=t.a;return p(Sr,L(z$,e,r,n,a),i,V)}}),cb=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),T$=cb,ec=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),lb=function(e){var r=e.ad,n=e.aa,a=e._;return L(ec,518,r,n,a)},ub=$(function(e,r){return{$:6,a:e,b:r}}),$b=ub,M$=m([lb({_:1,aa:0,ad:!1}),L(T$,!1,!1,!1,!1),o($b,0,1)]),Tn=519,rc=8,D$=15,Cn=7681,vb={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},$e=Zf,sb=$(function(e,r){return{$:0,a:e,b:r}}),fb=sb({dv:1,dF:0,eg:5}),Oe=Ad,db=fb(m([{er:o(Oe,-1,-1)},{er:o(Oe,1,-1)},{er:o(Oe,-1,1)},{er:o(Oe,1,1)}])),mb={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"er"},uniforms:{}},pb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},nc=x(function(e,r,n){var a=e.cZ,t=e.cx,i=e.dh,c=$(function(v,s){var f=v;return s(f)}),l=$(function(v,s){var f=v;return s(f)}),u=function(v){return o(K,c(v.bv),o(K,l(v.bf),o(K,l(v.bD),l(v.bE))))};return o(u,n,o(u,r,p(pb,a,t,i)))}),ac=function(e){return p(nc,{cx:e.cx,cZ:e.cZ,dh:e.dh},{bf:e.bf,bv:e.bv,bD:e.bD,bE:e.bE},{bf:e.bf,bv:e.bv,bD:e.bD,bE:e.bE})},tc=function(e){return C($e,m([ac(e),L(T$,!1,!1,!1,!1)]),mb,vb,db,{})},gb=tc({bf:Cn,cx:0,cZ:rc,bv:Tn,dh:D$,bD:Cn,bE:Cn}),bb=516,bl=5386,Ee=7680,hb=function(e){return o(Or,2,e+4)},j$=function(e){return tc({bf:Ee,cx:D$,cZ:rc,bv:bb,dh:hb(e),bD:bl,bE:bl})},_b=x(function(e,r,n){return ir(m([p(sr,e,n,M$),m([j$(r),gb])]))}),wb=$(function(e,r){return ir(o(ma,_b(e),r))}),yb=function(e){var r=e.ad,n=e.aa,a=e._;return L(ec,513,r,n,a)},xb=yb({_:1,aa:0,ad:!0}),kb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Sb=function(e){var r=e.b3,n=e.bO,a=e.bI,t=e.bF,i=e.bK,c=e.aN,l=$(function(u,v){var s=u.a,f=u.b,g=u.c,d=v.a,_=v.b,b=v.c;return kb(s)(f)(g)(d)(_)(b)(r)(n)(a)(t)});return o(l,i,c)},Cb=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),hl=$(function(e,r){var n=e,a=r;return p(Cb,32774,n,a)}),Pb=1,_l=771,Lb=770,oc=Sb({bF:0,aN:o(hl,Pb,_l),bI:0,bK:o(hl,Lb,_l),bO:0,b3:0}),hn=m([xb,oc]),Ab=function(e){var r=e;return r.d9},zb=function(e){var r=e;return r.ea},F$=function(e){var r=e;return r.eb},Tb=function(e){var r=e;return r.ec},Mb=function(e){var r=e;return r.ed},V$=function(e){var r=e;return r.ee},zr=$(function(e,r){var n=e,a=r;return a-n}),B$=function(e){return D(o(zr,Tb(e),Ab(e)),o(zr,Mb(e),zb(e)),o(zr,V$(e),F$(e)))},Db=function(e){return e},jb=function(e){return Tr({cK:Db({gl:e.J,gp:e.K,dk:e.L}),di:hr({gl:e.s,gp:e.t,dk:e.u}),dj:hr({gl:e.v,gp:e.w,dk:e.x}),dl:hr({gl:e.y,gp:e.z,dk:e.A})})},mo=$(function(e,r){var n=e,a=r,t=n.dl,i=t,c=n.dj,l=c,u=n.di,v=u;return{gl:a.gl*v.gl+a.gp*v.gp+a.dk*v.dk,gp:a.gl*l.gl+a.gp*l.gp+a.dk*l.dk,dk:a.gl*i.gl+a.gp*i.gp+a.dk*i.dk}}),E$=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=a.gl-i.gl,l=a.gp-i.gp,u=a.dk-i.dk,v=n.dl,s=v,f=n.dj,g=f,d=n.di,_=d;return{gl:c*_.gl+l*_.gp+u*_.dk,gp:c*g.gl+l*g.gp+u*g.dk,dk:c*s.gl+l*s.gp+u*s.dk}}),R$=$(function(e,r){return{cK:o(E$,e,dn(r)),di:o(mo,e,Kr(r)),dj:o(mo,e,en(r)),dl:o(mo,e,rn(r))}}),$a=x(function(e,r,n){return{gl:e,gp:r,dk:n}}),wt=function(e){var r=e;return r},ge=$(function(e,r){var n=e,a=r;return o(Ye,n,a)}),_e=$(function(e,r){var n=e,a=r;return o(Sn,n,a)}),Fb=$(function(e,r){var n=wt(r),a=wt(e);return{d9:o(ge,a.d9,n.d9),ea:o(ge,a.ea,n.ea),eb:o(ge,a.eb,n.eb),ec:o(_e,a.ec,n.ec),ed:o(_e,a.ed,n.ed),ee:o(_e,a.ee,n.ee)}}),cr=function(e){var r=e;return r},Vb=function(e){var r=e;return D(r.gl,r.gp,r.dk)},ea=$(function(e,r){var n=e,a=r;return a+n}),Bb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=nt(ve(a)),c=nt(ve(n)),l=nt(ve(t)),u=Vb(r),v=u.a,s=u.b,f=u.c;return{d9:o(ea,c,v),ea:o(ea,i,s),eb:o(ea,l,f),ec:o(zr,c,v),ed:o(zr,i,s),ee:o(zr,l,f)}}),wl=B(function(e,r,n,a){var t=n.e$,i=2*n.fm*r,c=2*n.fl*r,l=2*n.fk*r,u=t.dk*r,v=t.gp*r,s=t.gl*r,f=cr(rn(e)),g=X(l*f.gl)+X(c*f.gp)+X(i*f.dk),d=cr(en(e)),_=X(l*d.gl)+X(c*d.gp)+X(i*d.dk),b=cr(Kr(e)),y=X(l*b.gl)+X(c*b.gp)+X(i*b.dk),S=o(Bb,D(y,_,g),o(E$,e,p($a,s,v,u)));if(a.$)return O(S);var w=a.a;return O(o(Fb,w,S))}),ti=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var d=e,_=r,b=n,y=i;e=d,r=_,n=b,a=y;continue e;case 1:var c=t.a,l=L(wl,e,r,c,n),d=e,_=r,b=l,y=i;e=d,r=_,n=b,a=y;continue e;case 2:var d=e,_=r,b=n,y=i;e=d,r=_,n=b,a=y;continue e;case 3:var c=t.a,l=L(wl,e,r,c,n),d=e,_=r,b=l,y=i;e=d,r=_,n=b,a=y;continue e;case 4:var u=t.a,d=e,_=r,b=L(ti,e,r,n,u),y=i;e=d,r=_,n=b,a=y;continue e;default:var v=t.a,s=t.b,f=o(R$,jb(v),e),g=r*v.b5,d=e,_=r,b=L(ti,f,g,n,m([s])),y=i;e=d,r=_,n=b,a=y;continue e}}else return n}),mn=Md,pn=Dd,gn=jd,W$=function(e){return{$:4,a:e}},Eb=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(T,n,r);e=t,r=i;continue e}else return r}),Pa=function(e){return W$(o(Eb,e,k))},Rb={dJ:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:0,K:0,L:0,b5:1},yl=tc({bf:Cn,cx:0,cZ:rc,bv:Tn,dh:255,bD:Cn,bE:Cn}),Wb=function(e){var r=e,n=o(Ye,X(r.gl),o(Ye,X(r.gp),X(r.dk)));if(n){var a=r.dk/n,t=r.gp/n,i=r.gl/n,c=Er(i*i+t*t+a*a);return c*n}else return Lr},Fe={bI:0,e_:!1,bO:0,cT:0,b3:0,da:0,gl:0,gp:0,dk:0},rr=$(function(e,r){var n=e,a=r;return mr({dU:n.gl,dV:n.b3,dW:a.gl,dX:a.b3,dY:n.gp,dZ:n.bO,d_:a.gp,d$:a.bO,d0:n.dk,d1:n.bI,d2:a.dk,d3:a.bI,d4:n.da,d5:n.cT,d6:a.da,d7:a.cT})}),Zn=h({bk:o(rr,Fe,Fe),bV:o(rr,Fe,Fe),bW:o(rr,Fe,Fe),bX:o(rr,Fe,Fe)},L(Wn,0,0,0,0)),N$=514,I$=function(e){var r=e.ad,n=e.aa,a=e._;return L(ec,515,r,n,a)},H$=240,Nb=m([I$({_:1,aa:0,ad:!0}),ac({bf:Ee,cx:H$,cZ:0,bv:N$,dh:0,bD:Ee,bE:Ee}),oc]),Ib=$(function(e,r){var n=e,a=r.fJ,t=r.fh,i=r.eT,c=ve(a),l=c,u=ve(t),v=u,s=n.cX;if(s.$){var g=s.a;return Wo(v)?mr({dU:2/(i*g),dV:0,dW:0,dX:0,dY:0,dZ:2/g,d_:0,d$:0,d0:0,d1:0,d2:0,d3:-1,d4:0,d5:0,d6:0,d7:1}):mr({dU:2/(i*g),dV:0,dW:0,dX:0,dY:0,dZ:2/g,d_:0,d$:0,d0:0,d1:0,d2:-2/(v-l),d3:-(v+l)/(v-l),d4:0,d5:0,d6:0,d7:1})}else{var f=s.a;return Wo(v)?mr({dU:1/(i*f),dV:0,dW:0,dX:0,dY:0,dZ:1/f,d_:0,d$:0,d0:0,d1:0,d2:-1,d3:-2*l,d4:0,d5:0,d6:-1,d7:0}):mr({dU:1/(i*f),dV:0,dW:0,dX:0,dY:0,dZ:1/f,d_:0,d$:0,d0:0,d1:0,d2:-(v+l)/(v-l),d3:-2*v*l/(v-l),d4:0,d5:0,d6:-1,d7:0})}}),Ha=$(function(e,r){return(1&e>>r)===1?0:1}),Hb=function(e){return m([I$({_:1,aa:0,ad:!0}),ac({bf:Ee,cx:H$,cZ:e,bv:N$,dh:0,bD:Ee,bE:Ee}),oc])},Gb=x(function(e,r,n){return ir(o(Q,function(a){var t=a<<4,i=L(Wn,o(Ha,a,0),o(Ha,a,1),o(Ha,a,2),o(Ha,a,3));return p(sr,e,h(r,i),Hb(t))},o(Ln,1,o(Or,2,n)-1)))}),Pn=function(e){var r=e;return r},Ub=Gd,ic=hr({gl:0,gp:1,dk:0}),cc=ic,Ob={cK:Be,di:Nt,dj:cc,dl:It},La=function(e){var r=e;return r},Jb=function(e){var r=La(dn(e)),n=cr(rn(e)),a=cr(en(e)),t=cr(Kr(e));return mr({dU:t.gl,dV:a.gl,dW:n.gl,dX:r.gl,dY:t.gp,dZ:a.gp,d_:n.gp,d$:r.gp,d0:t.dk,d1:a.dk,d2:n.dk,d3:r.dk,d4:0,d5:0,d6:0,d7:1})},Yb=$(function(e,r){var n=r;return Jb(o(R$,n,e))}),qb=function(e){return o(Yb,Ob,e)},Zb=function(e){var r=e;return r.df},Xb=function(e){var r=e;return Kr(r)},Qb=function(e){var r=e;return en(r)},Kb=function(e){var r=Zb(e.eY),n=Tr({cK:ri(r),di:Xb(r),dj:Qb(r),dl:Wr(ni(r))}),a=Pa(e.aV),t=a,i=L(ti,n,1,J,m([t]));if(i.$===1)return k;var c=i.a,l=qb(r),u=o(ae,.99,o(ge,ve(e.e1),_t(F$(c)))),v=B$(c),s=v.a,f=v.b,g=v.c,d=Wb(p(Zi,s,f,g)),_=o(ae,1.01,o(ea,d,_t(V$(c)))),b=o(Ib,e.eY,{eT:e.eT,fh:_,fJ:u}),y=Ub(b).d7,S=y?cr(Wr(ni(r))):Pn(ri(r)),w=function(){var fe=e.gb;switch(fe.$){case 0:return h(0,0);case 1:return h(1,0);case 2:return h(2,0);case 3:var ke=fe.a;return h(3,ke);case 4:var ke=fe.a;return h(4,ke);default:return h(5,0)}}(),P=w.a,V=w.b,G=e.ff,I=G,N=o(Ht,I,e.gi),H=N,U=mr({dU:0,dV:S.gl,dW:mn(H),dX:e.eE,dY:0,dZ:S.gp,d_:pn(H),d$:at(d),d0:0,d1:S.dk,d2:gn(H),d3:P,d4:0,d5:y,d6:0,d7:V}),E=de(z$,U,l,b,Rb,t,{O:k,Z:k,f$:k}),ee=e.fB;switch(ee.$){case 0:var te=ee.a;return ir(m([p(sr,E.O,h(te,so),hn),p(sr,E.Z,Zn,hn)]));case 1:var te=ee.a;return ir(m([p(sr,E.O,Zn,hn),m([yl]),p(sr,E.f$,te.bk,M$),m([j$(0)]),p(sr,E.O,h(te,so),Nb),p(sr,E.Z,Zn,hn)]));default:var me=ee.a,be=ee.b;return ir(m([p(sr,E.O,h(be,so),hn),m([yl]),o(wb,E.f$,me),p(Gb,E.O,be,yr(me)),p(sr,E.Z,Zn,hn)]))}},eh=function(e){return o(kr,"width",Me(e))},rh=$(function(e,r){var n=m([O1(1),X1(0),W1(!0),L(G1,0,0,0,0)]),a=function(){var P=e.eR;switch(P.$){case 0:return D(n,"0",1);case 1:return D(o(T,I1,n),"1",1);default:var V=P.a;return D(n,"0",V)}}(),t=a.a,i=a.b,c=a.c,l=e.aQ,u=l.a,v=l.b,s=gl(v),f=o(oe,"height",Me(s)+"px"),g=gl(u),d=g/s,_=o(Sa,function(P){return Kb({eT:d,eY:e.eY,e1:e.e1,aV:P.aV,ff:P.ff,fB:P.fB,eE:c,gb:P.gb,gi:P.gi})},r),b=o(oe,"width",Me(g)+"px"),y=e.aO,S=y,w=K1(S);return p(q1,"div",m([o(oe,"padding","0px"),b,f]),m([h(i,p(nb,t,m([eh(Ze(g*c)),J1(Ze(s*c)),b,f,o(oe,"display","block"),o(oe,"background-color",w)]),_))]))}),nh=function(e){return{$:2,a:e}},ah=function(e){return nh(e)},th=function(e){return o(rh,{eR:ah(e.cj),aO:e.aO,eY:e.eY,e1:e.e1,aQ:e.aQ},m([{aV:e.aV,ff:e.ff,fB:e.fB,gb:e.gb,gi:e.gi}]))},xl=function(e){return e},oh=function(e){var r=e;return r},Gt=function(e){var r=e;return oh(r.eU)},G$=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),ih=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),U$=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),O$=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),ch=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),lh=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),uh=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),lc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(uh,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(G$,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(ih,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(U$,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(lh,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(O$,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(ch,n,a,t,1);case 8:return e;case 9:return e;default:return e}},uc={$:0},$h=ce(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=wt(c(u)),f=o(_e,s.ec,e),g=o(ge,s.d9,r),d=o(_e,s.ed,n),_=o(ge,s.ea,a),b=o(_e,s.ee,t),y=o(ge,s.eb,i),S=c,w=v;e=f,r=g,n=d,a=_,t=b,i=y,c=S,l=w;continue e}else return{d9:r,ea:a,eb:i,ec:e,ed:n,ee:t}}),vh=x(function(e,r,n){var a=wt(e(r));return Pt($h,a.ec,a.d9,a.ed,a.ea,a.ee,a.eb,e,n)}),po=$(function(e,r){var n=e,a=r;return Z(a,n)<1}),J$=function(e){return o(po,e.d9,e.ec)&&o(po,e.ea,e.ed)&&o(po,e.eb,e.ee)?e:{d9:o(ge,e.ec,e.d9),ea:o(ge,e.ed,e.ea),eb:o(ge,e.ee,e.eb),ec:o(_e,e.ec,e.d9),ed:o(_e,e.ed,e.ea),ee:o(_e,e.ee,e.eb)}},va=function(e){var r=e;return r},Y$=function(e){var r=va(e),n=r.a,a=r.b,t=r.c,i=Nr(n),c=Ir(n),l=Hr(n),u=Nr(a),v=Ir(a),s=Hr(a),f=Nr(t),g=Ir(t),d=Hr(t);return J$({d9:o(ge,i,o(ge,u,f)),ea:o(ge,c,o(ge,v,g)),eb:o(ge,l,o(ge,s,d)),ec:o(_e,i,o(_e,u,f)),ed:o(_e,c,o(_e,v,g)),ee:o(_e,l,o(_e,s,d))})},q$=Fd,We=function(e){return q$(La(e))},Z$=function(e){var r=e;return r},Ut=function(e){return q$(Z$(e))},sh=$(function(e,r){var n=e,a=r;return{gl:a.gp*n.dk-a.dk*n.gp,gp:a.dk*n.gl-a.gl*n.dk,dk:a.gl*n.gp-a.gp*n.gl}}),oi=$(function(e,r){var n=e,a=r;return{gl:a.gl-n.gl,gp:a.gp-n.gp,dk:a.dk-n.dk}}),X$=function(e){return e},fh={gl:0,gp:0,dk:0},dh=$(function(e,r){var n=e,a=r,t=o(Ye,X(a.gl),o(Ye,X(a.gp),X(a.dk)));if(t){var i=a.dk/t,c=a.gp/t,l=a.gl/t,u=Er(l*l+c*c+i*i);return{gl:n*l/u,gp:n*c/u,dk:n*i/u}}else return fh}),mh=dh(X$(1)),Q$=x(function(e,r,n){var a=o(oi,r,n),t=o(oi,e,r);return mh(o(sh,a,t))}),ph=function(e){var r=va(e),n=r.a,a=r.b,t=r.c,i=Ut(p(Q$,n,a,t));return D({p:i,er:We(n)},{p:i,er:We(a)},{p:i,er:We(t)})},gh=$(function(e,r){return{$:2,a:e,b:r}}),K$=gh({dv:3,dF:0,eg:4}),bh=function(e){if(e.b){var r=e.a,n=e.b,a=K$(o(Q,ph,e)),t=p(vh,Y$,r,n);return L(G$,t,e,a,0)}else return uc},er=x(function(e,r,n){return D(e,r,n)}),Se=x(function(e,r,n){var a=e,t=r,i=n;return{gl:a,gp:t,dk:i}}),ev=function(){var e=He(1),r=He(1),n=He(1),a=o(ae,-.5,e),t=o(ae,-.5,r),i=o(ae,-.5,n),c=p(Se,i,t,a),l=o(ae,.5,e),u=p(Se,i,t,l),v=o(ae,.5,r),s=p(Se,i,v,a),f=p(Se,i,v,l),g=o(ae,.5,n),d=p(Se,g,t,a),_=p(Se,g,v,a),b=p(Se,g,t,l),y=p(Se,g,v,l);return lc(bh(m([p(er,c,_,d),p(er,c,s,_),p(er,u,b,y),p(er,u,y,f),p(er,d,_,y),p(er,d,y,b),p(er,c,f,s),p(er,c,u,f),p(er,c,d,b),p(er,c,b,u),p(er,s,y,_),p(er,s,f,y)])))}(),Ga={$:0},hh=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_h=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ut(p(Q$,u,l,c)),s={p:v,er:We(u)},f={p:v,er:We(l)},g={p:v,er:We(c)};return o(T,s,o(T,f,o(T,g,n)))}),$c=function(e){var r=e;return r.F},wh=B(function(e,r,n,a){if(r.$===1)return J;var t=r.a;if(n.$===1)return J;var i=n.a;if(a.$===1)return J;var c=a.a;return O(p(e,t,i,c))}),ii=4294967295>>>32-ta,ci=qv,yh=x(function(e,r,n){e:for(;;){var a=ii&r>>>e,t=o(ci,a,n);if(t.$){var v=t.a;return o(ci,ii&r,v)}else{var i=t.a,c=e-ta,l=r,u=i;e=c,r=l,n=u;continue e}}}),xh=function(e){return e>>>5<<5},kh=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Z(e,n)>-1?J:Z(e,xh(n))>-1?O(o(ci,ii&e,i)):O(p(yh,a,e,t))}),vc=function(e){var r=e;return r.an},go=$(function(e,r){return o(kh,e,vc(r))}),Sh=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(wh,x(function(c,l,u){return D(c,l,u)}),o(go,a,e),o(go,t,e),o(go,i,e))};return o(_a,r,$c(e))},Ch=x(function(e,r,n){e:for(;;){var a=o(Ti,Je,e),t=a.a,i=a.b;if(Z(Bo(t),Je)<0)return o(zu,!0,{B:r,n,q:t});var c=i,l=o(T,Lu(t),r),u=n+1;e=c,r=l,n=u;continue e}}),sc=function(e){return e.b?p(Ch,e,k,0):Cu},Ph=x(function(e,r,n){return e(r(n))}),Lh=$(function(e,r){return!o(Vt,o(Ph,km,e),r)}),Ah=function(e){var r=e.a;return r},rv=$(function(e,r){var n=Ah(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Z(i,n)<0&&c>=0&&Z(c,n)<0&&l>=0&&Z(l,n)<0};return o(Lh,a,r)?{F:r,an:e}:{F:o(Rn,a,r),an:e}}),zh=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Aa=zh({dv:1,dF:3,eg:4}),tt=$(function(e,r){var n=Pn(r),a=Pn(e);return h(D(a.gl,a.gp,a.dk),D(n.gl,n.gp,n.dk))}),kl=p(Ca,0,0,0),bo=Qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ba,o(tt,e,r),t);if(v.$){var f={p:kl,er:We(r)},g={p:kl,er:We(e)},d=u+1,_=u;return D(o(T,D(n,_,d),o(T,D(n,d,a),c)),o(T,f,o(T,g,l)),u+2)}else{var s=v.a;return D(o(T,D(n,s,a),c),l,u)}}),Th=xe(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),f=e(l),g=e(c),d=a+2,_=a+1,b=a,y=e,S=r,w=v,P=a+3,V=de(bo,s,g,d,b,r,de(bo,f,s,_,d,r,de(bo,g,f,b,_,r,t)));e=y,r=S,n=w,a=P,t=V;continue e}else{var G=t,I=G.a,N=G.b;return h(I,ye(N))}}),Mh=xe(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),f=e(l),g=e(c),d=n+2,_=n+1,b=n,y=p(kn,o(tt,g,s),d,p(kn,o(tt,s,f),_,p(kn,o(tt,f,g),b,t))),S=o(T,D(b,_,d),a),w=e,P=v,V=n+3,G=S,I=y;e=w,r=P,n=V,a=G,t=I;continue e}else return D(a,t,n)}),tn=x(function(e,r,n){var a=Sh(n),t=p(jr,_h(r),k,a),i=C(Mh,r,a,0,k,Gi),c=i.a,l=i.b,u=i.c,v=C(Th,r,l,a,0,D(c,k,u)),s=v.a,f=v.b,g=Ni(f)?t:le(t,f);return p(hh,e,o(rv,sc(g),s),o(Aa,g,s))}),li=function(e){return{F:o(Q,function(r){return D(3*r,3*r+1,3*r+2)},o(Ln,0,yr(e)-1)),an:sc(ir(o(Q,function(r){var n=r.a,a=r.b,t=r.c;return m([n,a,t])},e)))}},nv=function(e){switch(e.$){case 0:return Ga;case 1:var a=e.a,r=e.b,n=o(Q,va,r);return p(tn,a,Ie,li(n));case 2:var a=e.a,r=e.b,n=o(Q,va,r);return p(tn,a,Ie,li(n));case 3:var a=e.a,t=e.b;return p(tn,a,Ie,t);case 4:var a=e.a,t=e.b;return p(tn,a,function(i){return i.er},t);case 5:var a=e.a,t=e.b;return p(tn,a,function(i){return i.er},t);case 6:var a=e.a,t=e.b;return p(tn,a,function(i){return i.er},t);case 7:var a=e.a,t=e.b;return p(tn,a,function(i){return i.er},t);case 8:return Ga;case 9:return Ga;default:return Ga}},Sl=nv(ev),Ot=function(e){var r=e;return r.aQ},av={$:0},M=av,Ae=$(function(e,r){return{$:1,a:e,b:r}}),Dh={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bL"}},jh=1029,Fh=function(e){return{$:5,a:e}},tv=function(e){var r=e;return Fh(r)},Vh=tv(jh),Bh=1028,Eh=tv(Bh),Ne=x(function(e,r,n){return r===1?e?o(T,Vh,n):o(T,Eh,n):n}),ov={src:`
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
    `,attributes:{position:"er",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ho=B(function(e,r,n,a){return o(Ae,r,ce(function(t,i,c,l,u,v,s,f){return C($e,p(Ne,l,a,f),ov,Dh,n,{bL:e,b:c,c:i,d:v,e:t,f:u})}))}),fc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aC"}},iv={src:`
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
    `,attributes:{position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Cr=B(function(e,r,n,a){return o(Ae,r,ce(function(t,i,c,l,u,v,s,f){return C($e,p(Ne,l,a,f),iv,fc,n,{aC:e,b:c,c:i,d:v,e:t,f:u})}))}),cv=$(function(e,r){return{$:3,a:e,b:r}}),Rh={src:`
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
    `,attributes:{},uniforms:{constantColor:"aC",pointRadius:"b1",sceneProperties:"e"}},lv={src:`
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
    `,attributes:{position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b1",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Wh=B(function(e,r,n,a){return o(cv,n,ce(function(t,i,c,l,u,v,s,f){return C($e,f,lv,Rh,a,{aC:e,b:c,c:i,b1:r,d:v,e:t,f:u})}))}),dc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aT",sceneProperties:"e"}},za=function(e){var r=e;return r},Jt=Vd,Pr=xe(function(e,r,n,a,t){return o(Ae,n,ce(function(i,c,l,u,v,s,f,g){return C($e,p(Ne,u,t,g),iv,dc,a,{aT:o(Jt,za(r),e),b:l,c,d:s,e:i,f:v})}))}),Nh={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aT",pointRadius:"b1",sceneProperties:"e"}},Ih=xe(function(e,r,n,a,t){return o(cv,a,ce(function(i,c,l,u,v,s,f,g){return C($e,g,lv,Nh,t,{aT:o(Jt,za(r),e),b:l,c,b1:n,d:s,e:i,f:v})}))}),uv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bk",lights34:"bV",lights56:"bW",lights78:"bX",materialColor:"cy",sceneProperties:"e",viewMatrix:"f"}},$v={src:`
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
    `,attributes:{normal:"p",position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ua=B(function(e,r,n,a){return o(Ae,r,ce(function(t,i,c,l,u,v,s,f){var g=s.a,d=s.b;return C($e,p(Ne,l,a,f),$v,uv,n,{S:d,bk:g.bk,bV:g.bV,bW:g.bW,bX:g.bX,cy:e,b:c,c:i,d:v,e:t,f:u})}))}),vv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bk",lights34:"bV",lights56:"bW",lights78:"bX",materialColorTexture:"cz",normalMapTexture:"a0",sceneProperties:"e",useNormalMap:"a5",viewMatrix:"f"}},sv={src:`
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
    `,attributes:{normal:"p",position:"er",tangent:"eG",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Hh=Qe(function(e,r,n,a,t,i){return o(Ae,a,ce(function(c,l,u,v,s,f,g,d){var _=g.a,b=g.b;return C($e,p(Ne,v,i,d),sv,vv,t,{S:b,bk:_.bk,bV:_.bV,bW:_.bW,bX:_.bX,cz:e,b:u,c:l,a0:r,d:f,e:c,a5:n,f:s})}))}),fv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"ce",constantBaseColor:"cg",constantMetallic:"ch",constantRoughness:"ci",enabledLights:"S",lights12:"bk",lights34:"bV",lights56:"bW",lights78:"bX",metallicTexture:"cD",normalMapTexture:"a0",roughnessTexture:"c1",sceneProperties:"e",useNormalMap:"a5",viewMatrix:"f"}},Gh=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ae,u,ce(function(f,g,d,_,b,y,S,w){var P=S.a,V=S.b;return C($e,p(Ne,_,s,w),sv,fv,v,{ce:e,cg:r,ch:i,ci:a,S:V,bk:P.bk,bV:P.bV,bW:P.bW,bX:P.bX,cD:t,b:d,c:g,a0:c,d:y,c1:n,e:f,a5:l,f:b})}))}}}}}}}}}}},dv={src:`
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
    `,attributes:{},uniforms:{baseColor:"cd",enabledLights:"S",lights12:"bk",lights34:"bV",lights56:"bW",lights78:"bX",metallic:"cC",roughness:"c0",sceneProperties:"e",viewMatrix:"f"}},Oa=Qe(function(e,r,n,a,t,i){return o(Ae,a,ce(function(c,l,u,v,s,f,g,d){var _=g.a,b=g.b;return C($e,p(Ne,v,i,d),$v,dv,t,{cd:e,S:b,bk:_.bk,bV:_.bV,bW:_.bW,bX:_.bX,cC:n,b:u,c:l,d:f,c0:r,e:c,f:s})}))}),Uh=function(e){return{$:0,a:e}},Cl=$(function(e,r){return{$:1,a:e,b:r}}),ra=$(function(e,r){if(r.$){var n=r.a.E;return h(n,1)}else return r.a,h(e,0)}),Oh=function(e){return L(Wn,mn(e),pn(e),gn(e),1)},mc=L(Wn,0,0,0,0),ot=$(function(e,r){if(r.$){var a=r.a.E;return h(a,mc)}else{var n=r.a;return h(e,Oh(n))}}),mv=$(function(e,r){var n=h(e,r);if(n.a.$){var t=n.a.a.E;return o(Cl,h(t,mc),o(ra,t,r))}else if(n.b.$){var t=n.b.a.E;return o(Cl,o(ot,t,e),o(ra,t,r))}else{var a=n.a.a;return n.b.a,Uh(a)}}),Jh=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ja=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Yh=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),qh=function(e){return o(Oe,e,1)},ui=o(Oe,0,0),_n=$(function(e,r){if(r.$){var a=r.a.E;return h(a,ui)}else{var n=r.a;return h(e,qh(n))}}),pv=B(function(e,r,n,a){var t=L(Yh,e,r,n,a);if(t.a.$){var u=t.a.a.E;return L(Ja,h(u,mc),o(_n,u,r),o(_n,u,n),o(ra,u,a))}else if(t.b.$){var u=t.b.a.E;return L(Ja,o(ot,u,e),h(u,ui),o(_n,u,n),o(ra,u,a))}else if(t.c.$){var u=t.c.a.E;return L(Ja,o(ot,u,e),o(_n,u,r),h(u,ui),o(ra,u,a))}else if(t.d.$){var u=t.d.a.E;return L(Ja,o(ot,u,e),o(_n,u,r),o(_n,u,n),h(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Jh,i,c,l)}}),Zh={src:`
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
    `,attributes:{},uniforms:{backlight:"cb",colorTexture:"bL",sceneProperties:"e"}},_o=xe(function(e,r,n,a,t){return o(Ae,n,ce(function(i,c,l,u,v,s,f,g){return C($e,p(Ne,u,t,g),ov,Zh,a,{cb:za(r),bL:e,b:l,c,d:s,e:i,f:v})}))}),gv={src:`
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
    `,attributes:{normal:"p",position:"er",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xh=B(function(e,r,n,a){return o(Ae,r,ce(function(t,i,c,l,u,v,s,f){var g=s.a,d=s.b;return C($e,p(Ne,l,a,f),gv,vv,n,{S:d,bk:g.bk,bV:g.bV,bW:g.bW,bX:g.bX,cz:e,b:c,c:i,a0:e,d:v,e:t,a5:0,f:u})}))}),Qh=di(function(e,r,n,a,t,i,c,l,u){return o(Ae,c,ce(function(v,s,f,g,d,_,b,y){var S=b.a,w=b.b;return C($e,p(Ne,g,u,y),gv,fv,l,{ce:e,cg:r,ch:i,ci:a,S:w,bk:S.bk,bV:S.bV,bW:S.bW,bX:S.bX,cD:t,b:f,c:s,a0:e,d:_,c1:n,e:v,a5:0,f:d})}))}),sa=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Kh=function(e){var r=e;return p(sa,r.ec,r.d9,.5)},e3=function(e){var r=e;return p(sa,r.ed,r.ea,.5)},r3=function(e){var r=e;return p(sa,r.ee,r.eb,.5)},n3=function(e){return p(Se,Kh(e),e3(e),r3(e))},Y=function(e){var r=B$(e),n=r.a,a=r.b,t=r.c;return{e$:La(n3(e)),fk:n/2,fl:a/2,fm:t/2}},pc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return L(ho,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ho,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ho,l,Y(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Cr,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(Cr,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(Cr,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Wh,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return C(_o,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(_o,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(_o,l,v,Y(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(Pr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return C(Pr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return C(Pr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Ih,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,I=e.c,f=o(mv,s,I);if(f.$){var _=f.a,b=_.a;_.b;var y=f.b,S=y.a,w=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,d=r.d;return L(Xh,b,Y(t),c,d);case 7:var t=r.a,c=r.c,d=r.d;return de(Hh,b,S,w,Y(t),c,d);case 8:return M;case 9:return M;default:return M}}else{var g=f.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,d=r.d;return L(Ua,g,Y(t),c,d);case 3:return M;case 4:var t=r.a,c=r.c,d=r.d;return L(Ua,g,Y(t),c,d);case 5:return M;case 6:var t=r.a,c=r.c,d=r.d;return L(Ua,g,Y(t),c,d);case 7:var t=r.a,c=r.c,d=r.d;return L(Ua,g,Y(t),c,d);case 8:return M;case 9:return M;default:return M}}default:e.a;var P=e.b,V=e.c,G=e.d,I=e.e,N=L(pv,P,V,G,I);if(N.$){var ee=N.a,te=ee.a,me=ee.b,be=N.b,fe=be.a,ke=be.b,Ue=N.c,Re=Ue.a,Fr=Ue.b,Vr=N.d,S=Vr.a,w=Vr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Gv(Qh,te,me,fe,ke,Re,Fr,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Gh(te)(me)(fe)(ke)(Re)(Fr)(S)(w)(Y(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var H=N.a,U=N.b,E=N.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return de(Oa,H,U,E,Y(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return de(Oa,H,U,E,Y(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return de(Oa,H,U,E,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return de(Oa,H,U,E,Y(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),wo=function(e){var r=e;return r.gl},yo=function(e){var r=e;return r.gp},xo=function(e){var r=e;return r.dk},a3=function(e){var r=e,n=xo(r.dl),a=yo(r.dl),t=wo(r.dl),i=xo(r.dj),c=yo(r.dj),l=wo(r.dj),u=xo(r.di),v=yo(r.di),s=wo(r.di);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},t3=function(e){var r=La(dn(e)),n=cr(rn(e)),a=cr(en(e)),t=cr(Kr(e));return{dJ:a3(e),s:t.gl,t:t.gp,u:t.dk,v:a.gl,w:a.gp,x:a.dk,y:n.gl,z:n.gp,A:n.dk,J:r.gl,K:r.gp,L:r.dk,b5:1}},wn=$(function(e,r){return{$:5,a:e,b:r}}),bv=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(A$,a,e);return o(wn,i,t);case 1:return o(wn,e,n);case 3:return o(wn,e,n);case 2:return o(wn,e,n);default:return o(wn,e,n)}}),hv=$(function(e,r){return o(bv,t3(e),r)}),Yt=function(e){return{$:2,a:e}},o3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.e$;return{e$:{gl:n*i.gl,gp:a*i.gp,dk:t*i.dk},fk:n*r.fk,fl:a*r.fl,fm:t*r.fm}}),i3=Rd,c3=Ed,Pl=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,f=e.b,g=e.c,d=c3(a),_=d.gl,b=d.gp,y=d.dk,S=d.eN,w=i3({eN:S,gl:_*s,gp:b*f,dk:y*g});return Pt(r,n,w,t,i,c,l,u,v)}}}}}}}}}},$i=$(function(e,r){switch(r.$){case 0:return av;case 5:var n=r.a,a=r.b;return o(wn,n,o($i,e,a));case 1:var t=r.a,i=r.b;return o(Ae,o(o3,e,t),o(Pl,e,i));case 3:return r;case 2:var i=r.a;return Yt(o(Pl,e,i));default:var c=r.a;return W$(o(Q,$i(e),c))}}),gc=$(function(e,r){var n=r;return o($i,e,n)}),bc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},_v=7683,wv=7682,l3=p(nc,{cx:0,cZ:0,dh:15},{bf:Ee,bv:Tn,bD:Ee,bE:_v},{bf:Ee,bv:Tn,bD:Ee,bE:wv}),u3=p(nc,{cx:0,cZ:0,dh:15},{bf:Ee,bv:Tn,bD:Ee,bE:wv},{bf:Ee,bv:Tn,bD:Ee,bE:_v}),hc=$(function(e,r){return e?o(T,u3,r):o(T,l3,r)}),$3={src:`
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
    `,attributes:{normal:"p",position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b7",viewMatrix:"f"}},v3=function(e){if(e.$){var r=e.c;return O(ce(function(n,a,t,i,c,l,u,v){return C($e,o(hc,i,v),$3,bc,r,{b:t,c:a,d:l,e:n,b7:u,f:c})}))}else return J},yt=function(e){var r=v3(e);if(r.$)return M;var n=r.a;return Yt(n)},s3=B(function(e,r,n,a){var t=o(pc,n,ev),i=function(){var s=h(e,r);return s.a?s.b?Pa(m([t,yt(Sl)])):t:s.b?yt(Sl):M}(),c=Ot(a),l=c.a,u=c.b,v=c.c;return o(hv,Gt(a),o(gc,D(l,u,v),i))}),f3=$(function(e,r){return L(s3,!0,!0,e,r)}),vi=function(e){return{$:0,a:e}},yv=$(function(e,r){return{$:0,a:e,b:r}}),d3=function(e){var r=Wi(e),n=r.cY,a=r.cm,t=r.cf;return p(Ca,n,a,t)},m3=function(e){return o(yv,0,vi(d3(e)))},_c=function(e){var r=e;return r.l},na=function(e){var r=e;return $n(r)},p3=$(function(e,r){var n=e.er,a=e.p;return o(T,{p:Ut(a),er:We(n)},r)}),g3=Ct(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=gn(l.er),s=pn(l.er),f=mn(l.er),g=o(Sn,e,f),d=o(Ye,r,f),_=o(Sn,n,s),b=o(Ye,a,s),y=o(Sn,t,v),S=o(Ye,i,v),w=u;e=g,r=d,n=_,a=b,t=y,i=S,c=w;continue e}else return J$({d9:r,ea:a,eb:i,ec:e,ed:n,ee:t})}),xv=$(function(e,r){var n=gn(e.er),a=pn(e.er),t=mn(e.er);return mi(g3,t,t,a,a,n,n,r)}),b3=function(e){var r=p(gu,p3,k,vc(e));if(r.b){var n=r.a,a=r.b,t=o(Aa,r,$c(e)),i=o(xv,n,a);return L(U$,i,e,t,0)}else return uc},Ll=$(function(e,r){var n=e,a=r,t=n.dj,i=t,c=n.di,l=c;return{gl:a.gl*l.gl+a.gp*i.gl,gp:a.gl*l.gp+a.gp*i.gp,dk:a.gl*l.dk+a.gp*i.dk}}),xt=function(e){var r=e;return vn(r)},Xn=function(e){var r=e;return r},si=function(e){return qe(2*tr*e)},Al=b$({cK:Be,di:Nt,dj:cc}),kv=function(){var e=72,r=o(w$,e,si(1)),n=He(1),a=Xn(Ji),t=Xn(qi),i=He(1),c=o(ae,.5,i),l=p(Se,Lr,Lr,c),u=o(ae,-.5,i),v=p(Se,Lr,Lr,u),s=function(d){var _=o(ae,d,r),b=Xn(o(Ll,Al,ai(_))),y=o(ae,na(_),n),S=o(ae,xt(_),n),w=p(Se,y,S,c),P=p(Se,y,S,u),V=o(ca,e,d+1),G=o(ae,V,r),I=Xn(o(Ll,Al,ai(G))),N=o(ae,na(G),n),H=o(ae,xt(G),n),U=p(Se,N,H,u),E=p(Se,N,H,c);return m([D({p:t,er:v},{p:t,er:U},{p:t,er:P}),D({p:b,er:P},{p:I,er:U},{p:I,er:E}),D({p:b,er:P},{p:I,er:E},{p:b,er:w}),D({p:a,er:l},{p:a,er:w},{p:a,er:E})])},f=o(Q,s,o(Ln,0,e-1)),g=li(ir(f));return lc(b3(g))}(),zl=nv(kv),h3=function(e){var r=e,n=X(r.dk),a=X(r.gp),t=X(r.gl);if(Z(t,a)<1)if(Z(t,n)<1){var i=Er(r.dk*r.dk+r.gp*r.gp);return{gl:0,gp:-r.dk/i,dk:r.gp/i}}else{var i=Er(r.gp*r.gp+r.gl*r.gl);return{gl:-r.gp/i,gp:r.gl/i,dk:0}}else if(Z(a,n)<1){var i=Er(r.dk*r.dk+r.gl*r.gl);return{gl:r.dk/i,gp:0,dk:-r.gl/i}}else{var i=Er(r.gl*r.gl+r.gp*r.gp);return{gl:-r.gp/i,gp:r.gl/i,dk:0}}},_3=function(e){var r=h3(e),n=r,a=n,t=e,i=t,c={gl:i.gp*a.dk-i.dk*a.gp,gp:i.dk*a.gl-i.gl*a.dk,dk:i.gl*a.gp-i.gp*a.gl};return h(r,c)},w3=function(e){var r=Wt(e),n=_3(r),a=n.a,t=n.b;return Tr({cK:Yi(e),di:a,dj:t,dl:r})},Sv=function(e){var r=e;return r.fz},Cv=function(e){var r=e;return r.fV},y3=B(function(e,r,n,a){var t=w3(_c(a)),i=o(pc,n,kv),c=function(){var f=h(e,r);return f.a?f.b?Pa(m([i,yt(zl)])):i:f.b?yt(zl):M}(),l=Cv(a),u=l,v=Sv(a),s=v;return o(hv,t,o(gc,D(u,u,s),c))}),x3=$(function(e,r){return L(y3,!0,!0,e,r)}),Tl={src:`
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
    `,attributes:{triangleVertex:"c9"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},Ml={src:`
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
    `,attributes:{triangleVertex:"c9"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},Qn=function(e){var r=va(e),n=r.a,a=r.b,t=r.c,i=Pn(n),c=Pn(a),l=Pn(t);return mr({dU:i.gl,dV:c.gl,dW:l.gl,dX:0,dY:i.gp,dZ:c.gp,d_:l.gp,d$:0,d0:i.dk,d1:c.dk,d2:l.dk,d3:0,d4:0,d5:0,d6:0,d7:0})},Ya=K$(m([D({c9:0},{c9:1},{c9:2})])),k3=$(function(e,r){var n=Y$(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,M;var t=e.b.a;return o(Ae,a,ce(function(w,P,V,G,I,N,H,U){return C($e,p(Ne,G,0,U),Tl,fc,Ya,{aC:t,b:V,c:P,d:N,e:w,bA:Qn(r),f:I})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return o(Ae,a,ce(function(w,P,V,G,I,N,H,U){return C($e,p(Ne,G,0,U),Tl,dc,Ya,{aT:o(Jt,za(c),i),b:V,c:P,d:N,e:w,bA:Qn(r),f:I})}));case 2:e.a;var l=e.b,d=e.c,u=o(mv,l,d);if(u.$)return M;var v=u.a;return o(Ae,a,ce(function(w,P,V,G,I,N,H,U){var E=H.a,ee=H.b;return C($e,p(Ne,G,0,U),Ml,uv,Ya,{S:ee,bk:E.bk,bV:E.bV,bW:E.bW,bX:E.bX,cy:v,b:V,c:P,d:N,e:w,bA:Qn(r),f:I})}));default:e.a;var s=e.b,f=e.c,g=e.d,d=e.e,_=L(pv,s,f,g,d);if(_.$)return M;var b=_.a,y=_.b,S=_.c;return o(Ae,a,ce(function(w,P,V,G,I,N,H,U){var E=H.a,ee=H.b;return C($e,p(Ne,G,0,U),Ml,dv,Ya,{cd:b,S:ee,bk:E.bk,bV:E.bV,bW:E.bW,bX:E.bX,cC:S,b:V,c:P,d:N,c0:y,e:w,bA:Qn(r),f:I})}))}}),S3=function(){var e=m([{a4:o(Oe,0,1)},{a4:o(Oe,1,1)},{a4:o(Oe,2,1)},{a4:o(Oe,0,-1)},{a4:o(Oe,1,-1)},{a4:o(Oe,2,-1)}]),r=m([D(0,1,2),D(3,5,4),D(3,4,1),D(3,1,0),D(4,5,2),D(4,2,1),D(5,3,0),D(5,0,2)]);return o(Aa,e,r)}(),C3={src:`
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
    `,attributes:{triangleShadowVertex:"a4"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b7",triangleVertexPositions:"bA",viewMatrix:"f"}},Dl=function(e){return Yt(ce(function(r,n,a,t,i,c,l,u){return C($e,o(hc,t,u),C3,bc,S3,{b:a,c:n,d:c,e:r,b7:l,bA:Qn(e),f:i})}))},P3=B(function(e,r,n,a){var t=o(k3,n,a),i=h(e,r);return i.a?i.b?Pa(m([t,Dl(a)])):t:i.b?Dl(a):M}),L3=$(function(e,r){return L(P3,!0,!0,e,r)}),wc=function(e){var r=e;return r},A3=$(function(e,r){var n=Hr(r),a=Hr(e),t=Ir(r),i=Ir(e),c=Nr(r),l=Nr(e);return{d9:o(ge,l,c),ea:o(ge,i,t),eb:o(ge,a,n),ec:o(_e,l,c),ed:o(_e,i,t),ee:o(_e,a,n)}}),z3=function(e){var r=wc(e),n=r.a,a=r.b;return o(A3,n,a)},jl={src:`
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
    `,attributes:{lineSegmentVertex:"dT"},uniforms:{lineSegmentEndPoint:"dR",lineSegmentStartPoint:"dS",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},T3=$(function(e,r){return{$:1,a:e,b:r}}),M3=T3({dv:2,dF:0,eg:1}),Fl=M3(m([h({dT:0},{dT:1})])),D3=$(function(e,r){var n=z3(r),a=Y(n),t=wc(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,M;var l=e.b.a;return o(Ae,a,ce(function(v,s,f,g,d,_,b,y){return C($e,y,jl,fc,Fl,{aC:l,dR:We(c),dS:We(i),b:f,c:s,d:_,e:v,f:d})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return o(Ae,a,ce(function(s,f,g,d,_,b,y,S){return C($e,S,jl,dc,Fl,{aT:o(Jt,za(u),l),dR:We(c),dS:We(i),b:g,c:f,d:b,e:s,f:_})}));case 2:return M;default:return M}}),j3=$(function(e,r){return o(D3,e,r)}),qt=function(e){var r=e;return r.e$},Zt=function(e){var r=e;return r.fV},Vl=$(function(e,r){var n=e,a=r;return n/a}),F3=xe(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(T,i,t);if(ne(r,e))return c;var l=e,u=r-1,v=n,s=a,f=c;e=l,r=u,n=v,a=s,t=f;continue e}}),Bl=$(function(e,r){return e<1?k:C(F3,0,e,e,r,k)}),V3=$(function(e,r){var n=e.er,a=e.p,t=e.N,i=t,c=i.a,l=i.b;return o(T,{p:Ut(a),er:We(n),N:o(Oe,c,l)},r)}),B3=function(e){var r=p(gu,V3,k,vc(e));if(r.b){var n=r.a,a=r.b,t=o(Aa,r,$c(e)),i=o(xv,n,a);return L(O$,i,e,t,0)}else return uc},yc=$(function(e,r){var n=e,a=r,t=$n(a);return{gl:t*$n(n),gp:t*vn(n),dk:vn(a)}}),E3=function(){var e=He(1),r=72,n=o(Ln,0,r-1),a=o(Bl,r,o(sa,Lr,si(1))),t=Ai(r/2),i=o(Ln,0,t-1),c=o(Bl,t,o(sa,qn(90),qn(-90))),l=sc(ir(o(Q,function(s){return o(Q,function(f){return{p:Xn(o(yc,s,f)),er:p(Se,o(ae,na(f)*na(s),e),o(ae,na(f)*xt(s),e),o(ae,xt(f),e)),N:h(o(Vl,s,si(1)),o(Vl,o(ea,qn(90),f),qn(180)))}},c)},a))),u=$(function(s,f){return s*(t+1)+f}),v=ir(o(Q,function(s){return ir(o(Q,function(f){var g=o(u,s+1,f),d=o(u,s,f),_=o(u,s+1,f+1),b=o(u,s,f+1);return m([D(b,_,g),D(b,g,d)])},i))},n));return lc(B3(o(rv,l,v)))}(),kt=72,qa=2*kt,R3=$(function(e,r){e:for(;;){var n=qa+1,a=o(ca,qa,2*e+3),t=o(ca,qa,2*e+2),i=2*e+1,c=2*e,l=qa,u=o(T,D(l,c,t),o(T,D(c,a,t),o(T,D(c,i,a),o(T,D(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),W3=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),N3=$(function(e,r){e:for(;;){var n=p(W3,0,2*tr,e/kt),a={bG:n,b_:0,b4:1},t={bG:n,b_:1,b4:1},i=o(T,a,o(T,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),I3=function(){var e=o(N3,kt-1,m([{bG:0,b_:0,b4:0},{bG:0,b_:1,b4:0}])),r=o(R3,kt-1,k);return o(Aa,e,r)}(),H3={src:`
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
    `,attributes:{angle:"bG",offsetScale:"b_",radiusScale:"b4"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b7",viewMatrix:"f"}},El=function(e){return Yt(ce(function(r,n,a,t,i,c,l,u){return C($e,o(hc,!0,u),H3,bc,I3,{aC:p(Ca,0,0,1),b:a,c:n,d:c,e:r,b7:l,f:i})}))},G3=function(e){var r=Z$(e);return{dJ:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:r.gl,K:r.gp,L:r.dk,b5:1}},U3=$(function(e,r){return o(bv,G3(e),r)}),O3=B(function(e,r,n,a){var t=o(pc,n,E3),i=function(){var u=h(e,r);return u.a?u.b?Pa(m([t,El()])):t:u.b?El():M}(),c=Zt(a),l=c;return o(U3,o(oi,Be,qt(a)),o(gc,D(l,l,l),i))}),J3=$(function(e,r){return L(O3,!0,!0,e,r)}),Y3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Pv=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),q3=xe(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Z3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(yv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Y3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Pv,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(q3,n,a,t,i,c)}},X3=Z3,Lv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return m([o(f3,t,r)]);case 1:var t=e.a,n=e.b;return m([o(L3,t,n)]);case 3:var t=e.a,a=e.b;return m([o(J3,X3(t),a)]);case 2:var t=e.a,i=e.b;return m([o(x3,t,i)]);case 4:var c=e.a,l=e.b;return m([o(j3,m3(c),l)]);default:var u=e.a;return o(Sa,Lv,u)}},Q3=function(e){return o(Sa,Lv,e)},K3=$(function(e,r){return th({eR:e.eR,aO:E1(e.eV),eY:e.eY,e1:He(e.e1),cj:e.cj,aQ:h(xl(Ze(e.b6.gj)),xl(Ze(e.b6.fo))),aV:Q3(r),ff:e.ff,fB:e.fB,gb:e.gb,gi:e.gi})}),Av=function(e){return e},e2=$(function(e,r){var n=e,a=cr(r.e8),t=a.gl,i=a.gp,c=a.dk,l=o(Ht,r.bQ,r.aP),u=l;return{bI:gn(u),e_:n,bO:pn(u),cT:0,b3:mn(u),da:1,gl:-t,gp:-i,dk:-c}}),r2=function(e){return o(e2,Av(!0),{aP:e.aP,e8:o(yc,qe(e.bH),qe(e.bM)),bQ:e.bQ})},Ta=$(function(e,r){return{$:0,a:e,b:r}}),ko=$(function(e,r){var n=e,a=r;return Z(a,n)>-1}),So=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),n2=hr({gl:-1,gp:0,dk:0}),a2=hr({gl:0,gp:-1,dk:0}),t2=Qe(function(e,r,n,a,t,i){var c=o(ko,n,i)?Ji:qi,l=o(ko,r,t)?ic:a2,u=o(ko,e,a)?h$:n2,v=D(ve(o(zr,e,a)),ve(o(zr,r,t)),ve(o(zr,n,i))),s=p(Se,o(So,e,a),o(So,r,t),o(So,n,i)),f=Tr({cK:s,di:u,dj:l,dl:c});return{eU:f,aQ:v}}),zv=$(function(e,r){return de(t2,Nr(e),Ir(e),Hr(e),Nr(r),Ir(r),Hr(r))}),Tv=$(function(e,r){var n=r/2;return o(Ta,e,o(zv,p($a,-n,-n,-n),p($a,n,n,n)))}),o2=$(function(e,r){return o(Le,function(n){if(n.$===2){var a=n.a;return a}else return Ri},o(ba,e,r.aB))}),i2=$(function(e,r){return o(we,Ri,Vn(o(_a,o2(e),r)))}),c2=$(function(e,r){return o(i2,e,r.e2)}),Jr=c2,Xt=function(e){return{$:5,a:e}},Nn=function(e){return Xt(e)},Co=function(e){return p(Ki,0,1,e<=.04045?e/12.92:o(Or,(e+.055)/1.055,2.4))},l2=function(e){var r=Wi(e),n=r.cY,a=r.cm,t=r.cf;return p(Ca,Co(n),Co(a),Co(t))},Mr=function(e){return p(Pv,0,vi(l2(e)),vi(0))},Qt=$(function(e,r){return{$:2,a:e,b:r}}),xc=$(function(e,r){return{$:4,a:e,b:r}}),Kt=$(function(e,r){return{$:3,a:e,b:r}}),kc=$(function(e,r){return{$:1,a:e,b:r}}),u2=x(function(e,r,n){return{gl:e,gp:r,dk:n}}),$2=$(function(e,r){return{eU:o(g$,e,Gt(r)),aQ:Ot(r)}}),v2=$(function(e,r){var n=r;return o(Xe,o(En,e,n.cK),n.e8)}),s2=$(function(e,r){var n=r;return{l:o(v2,e,n.l),fz:n.fz,fV:n.fV}}),f2=function(e){return e},Sc=$(function(e,r){var n=wc(r),a=n.a,t=n.b;return f2(h(e(a),e(t)))}),d2=$(function(e,r){return o(Sc,En(e),r)}),eo=$(function(e,r){return{e$:r,fV:ve(e)}}),m2=$(function(e,r){return o(eo,Zt(r),o(En,e,qt(r)))}),Cc=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return D(e(a),e(t),e(i))}),p2=$(function(e,r){return o(Cc,En(e),r)}),ro=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(u2,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ta,s,o($2,i,c));case 1:var s=r.a,l=r.b;return o(kc,s,o(p2,i,l));case 3:var s=r.a,u=r.b;return o(Kt,s,o(m2,i,u));case 2:var s=r.a,v=r.b;return o(Qt,s,o(s2,i,v));case 4:var s=r.a,f=r.b;return o(xc,s,o(d2,i,f));default:var g=r.a;return Xt(o(Q,ro(D(n,a,t)),g))}}),bn=function(e){return ro(D(e,0,0))},Yr=function(e){return ro(D(0,e,0))},_r=function(e){return ro(D(0,0,e))},Rl=$(function(e,r){var n=function(a){var t=a.a,i=a.b;return o(Yr,i,o(bn,t,o(_r,-.495,o(Tv,Mr(o(Jr,"board color",e)),1))))};return Nn(o(Q,n,zn(De(r.k).bU)))}),fa=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=D(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ta,e,o(zv,p($a,-c,-l,-u),p($a,c,l,u)))}),Pe=function(e){return e*tr/180},g2=function(e){return o(Or,e,2)},b2=x(function(e,r,n){return{eU:p(p$,e,r,Gt(n)),aQ:Ot(n)}}),h2=$(function(e,r){var n=o(ka,e,r),a=o(rt,e,r);return function(t){var i=t;return o(Xe,n(i.cK),a(i.e8))}}),_2=x(function(e,r,n){var a=n;return{l:p(h2,e,r,a.l),fz:a.fz,fV:a.fV}}),w2=x(function(e,r,n){return o(Sc,o(ka,e,r),n)}),y2=x(function(e,r,n){return o(eo,Zt(n),p(ka,e,r,qt(n)))}),x2=x(function(e,r,n){return o(Cc,o(ka,e,r),n)}),Ma=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ta,l,p(b2,e,r,a));case 1:var l=n.a,t=n.b;return o(kc,l,p(x2,e,r,t));case 3:var l=n.a,i=n.b;return o(Kt,l,p(y2,e,r,i));case 2:var l=n.a,c=n.b;return o(Qt,l,p(_2,e,r,c));case 4:var l=n.a,u=n.b;return o(xc,l,p(w2,e,r,u));default:var v=n.a;return Xt(o(Q,o(Ma,e,r),v))}}),Wl=$(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(Ma,o(Xe,Oi(n),hr({gl:t,gp:i,dk:c})),qe(r))}),Mv=x(function(e,r,n){var a=r.c4;switch(a.$){case 1:var v=a.a.ak,s=a.a.b8,f=a.a.bq;if(a.a.cF,ne(s,n)){var t=function(){switch(f){case 0:return h({gl:.5,gp:.5,dk:-.5},D(-1,0,0));case 1:return h({gl:-.5,gp:-.5,dk:-.5},D(1,0,0));case 2:return h({gl:-.5,gp:.5,dk:-.5},D(0,-1,0));default:return h({gl:.5,gp:-.5,dk:-.5},D(0,1,0))}}(),i=o(pe,"duration of step animation",e),c=(e.W-v)/i,l=g2(c),u=o(Sn,Pe(90),l*Pe(90));return o(Wl,t,u)}else return Ie;case 2:var v=a.a.ak,s=a.a.b8,f=a.a.bq;if(ne(s,n)){var t=function(){switch(f){case 0:return h({gl:.5,gp:.5,dk:-.5},D(-1,0,0));case 1:return h({gl:-.5,gp:-.5,dk:-.5},D(1,0,0));case 2:return h({gl:-.5,gp:.5,dk:-.5},D(0,-1,0));default:return h({gl:.5,gp:-.5,dk:-.5},D(0,1,0))}}(),i=o(pe,"duration of mistake animation",e),c=(e.W-v)/i,l=vn(tr*c),u=p(Ki,Pe(0),Pe(45),l*Pe(45));return o(Wl,t,u)}else return Ie;default:return Ie}}),k2=o(Xe,Be,Nt),ln=$(function(e,r){return p(Ma,k2,qe(e),r)}),S2=o(Xe,Be,cc),St=$(function(e,r){return p(Ma,S2,qe(e),r)}),C2=$(function(e,r){var n=o(pe,"cubes side length",e),a=o(Jr,"color 2",e),t=o(_r,-(n/4),o(fa,Mr(a),D(n,n,n/2))),i=o(Jr,"color 1",e),c=o(_r,n/4,o(fa,Mr(i),D(n,n,n/2))),l=De(r.k).dP,u=l.a,v=u.a,s=u.b,f=l.b,g=function(){if(f.b)switch(f.a){case 2:return f.a,f.b,ln(Pe(180));case 1:return f.a,f.b,ln(Pe(90));default:return f.a,f.b,St(-Pe(90))}else switch(f.a){case 2:return f.a,f.b,Ie;case 1:return f.a,f.b,ln(-Pe(90));default:return f.a,f.b,St(Pe(90))}}();return o(Yr,s,o(bn,v,o(_r,n/2,L(Mv,e,r,h(v,s),g(Nn(m([c,t])))))))}),P2=x(function(e,r,n){return{l:o(Xe,e,r),fz:ve(n.fz),fV:ve(n.fV)}}),L2=x(function(e,r,n){return o(Qt,e,p(P2,Be,ic,{fz:He(n),fV:He(r)}))}),A2=$(function(e,r){return(r-Au(r/e)*e)/e}),z2=function(e){return 2*tr*e},fi=B(function(e,r,n,a){return e+(r-e)*(1+$n(z2(o(A2,n,a))))/2}),T2=$(function(e,r){var n=De(r.k).bU.fy,a=n.a,t=n.b;return o(Yr,t,o(bn,a,o(_r,L(fi,-.3,-.4,.5,e.W),o(ln,Pe(90),p(L2,Mr(o(Jr,"finish mark color",e)),.3,1)))))}),M2=$(function(e,r){var n=o(pe,"cubes side length",e),a=o(Jr,"color 2",e),t=o(_r,-(n/4),o(fa,Mr(a),D(n,n,n/2))),i=o(Jr,"color 1",e),c=o(_r,n/4,o(fa,Mr(i),D(n,n,n/2))),l=De(r.k).cU,u=l.a,v=u.a,s=u.b,f=l.b,g=function(){if(f.b)switch(f.a){case 2:return f.a,f.b,ln(Pe(180));case 1:return f.a,f.b,ln(Pe(90));default:return f.a,f.b,St(-Pe(90))}else switch(f.a){case 2:return f.a,f.b,Ie;case 1:return f.a,f.b,ln(-Pe(90));default:return f.a,f.b,St(Pe(90))}}();return o(Yr,s,o(bn,v,o(_r,n/2,L(Mv,e,r,h(v,s),g(Nn(m([c,t])))))))}),D2=B(function(e,r,n,a){var t=D(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(_){var b=_<0?_+1:_>1?_-1:_;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},f=s(i-1/3),g=s(i),d=s(i+1/3);return L(Qr,d,g,f,a)}),j2=x(function(e,r,n){return L(D2,e,r,n,1)}),Da=x(function(e,r,n){var a=e,t=n;return{gl:a.gl+r*(t.gl-a.gl),gp:a.gp+r*(t.gp-a.gp),dk:a.dk+r*(t.dk-a.dk)}}),F2=x(function(e,r,n){var a=Gt(n),t=Kr(a),i=en(a),c=rn(a),l=p(Da,e,r,dn(a)),u=r>=0?Tr({cK:l,di:t,dj:i,dl:c}):Tr({cK:l,di:Wr(t),dj:Wr(i),dl:Wr(c)}),v=Ot(n),s=v.a,f=v.b,g=v.c,d=ve(o(ae,r,s)),_=ve(o(ae,r,f)),b=ve(o(ae,r,g));return{eU:u,aQ:D(d,_,b)}}),Nl=function(e){return Wt(_c(e))},V2=function(e){return Yi(_c(e))},B2=x(function(e,r,n){var a=ve(o(ae,r,Cv(n))),t=ve(o(ae,r,Sv(n))),i=r>=0?Nl(n):Wr(Nl(n)),c=p(Da,e,r,V2(n));return{l:o(Xe,c,i),fz:t,fV:a}}),E2=x(function(e,r,n){return o(Sc,o(Da,e,r),n)}),R2=x(function(e,r,n){return o(eo,o(ae,X(r),Zt(n)),p(Da,e,r,qt(n)))}),W2=x(function(e,r,n){return o(Cc,o(Da,e,r),n)}),Dv=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Ta,c,p(F2,Be,e,n));case 1:var c=r.a,a=r.b;return o(kc,c,p(W2,Be,e,a));case 3:var c=r.a,t=r.b;return o(Kt,c,p(R2,Be,e,t));case 2:var c=r.a,i=r.b;return o(Qt,c,p(B2,Be,e,i));case 4:var c=r.a,l=r.b;return o(xc,c,p(E2,Be,e,l));default:var u=r.a;return Xt(o(Q,Dv(e),u))}}),N2=L(Qr,255/255,255/255,255/255,1),I2=$(function(e,r){var n=function(i){var c=r.c4;return c.$===3?p(j2,L(fi,0,1,6,e.W+.03*i),1,.8):N2},a=function(i){var c=r.c4;return c.$===3?o(K,Dv(.9),_r(L(fi,.1,.7,6,e.W+.3*i))):Ie},t=$(function(i,c){var l=c.a,u=c.b;return o(Yr,u,o(bn,l,o(_r,-.49,o(a,i,o(Tv,Mr(n(i)),1)))))});return Nn(o(ma,t,zn(De(r.k).eo)))}),H2=L(Qr,164/255,0/255,0/255,1),G2=L(Qr,239/255,41/255,41/255,1),U2=$(function(e,r){return o(Kt,e,o(eo,He(r),Be))}),O2=$(function(e,r){var n=e.cV.dI?G2:H2,a=r.ba,t=a.a,i=a.b;return o(Yr,i,o(bn,t,o(U2,Mr(n),.2)))}),J2=$(function(e,r){return h(e,r)}),Y2=function(e){var r=e.fy,n=e.bo;return p(xu,J2,o(T,r,n),n)},jv=$(function(e,r){var n=e.a,a=e.b,t=function(i){var c=i.a,l=c.a,u=c.b,v=i.b,s=v.a,f=v.b;return a?ne(n,c)&&ne(s,l+1)||ne(n,v)&&ne(s,l-1):ne(n,c)&&ne(f,u-1)||ne(n,v)&&ne(f,u+1)};return o(Vt,t,Y2(r))}),q2=o(Xe,Be,It),Z2=$(function(e,r){return p(Ma,q2,qe(e),r)}),Fv=$(function(e,r){var n=r.a,a=n.a,t=n.b,i=r.b,c=1-o(pe,"cubes side length",e),l=o(Yr,-.5,o(fa,Mr(o(Jr,"wall color",e)),D(1+c,c,c))),u=o(Z2,Pe(90),l);return o(Yr,t,o(bn,a,function(){return i?u:l}()))}),Za=$(function(e,r){return{$:0,a:e,b:r}}),X2=function(e){return m([o(Za,e,0),o(Za,e,1),o(Za,o(bt,0,e),0),o(Za,o(bt,2,e),1)])},Vv=function(e){return o(Sa,X2,zn(e))},Q2=$(function(e,r){var n=o(we,De(r.k).bU,r.R.ei);return Nn(o(Q,Fv(e),o(Rn,function(a){return!o(jv,a,n)},Vv(n))))}),K2=$(function(e,r){return Nn(o(Q,Fv(e),o(Rn,function(n){return!o(jv,n,De(r.k).eo)},Vv(De(r.k).bU))))}),e_=function(e){return e},r_=function(e){return e_(1.2*o(Or,2,e))},Po=Qi({gl:.37208,gp:.37529}),n_={$:5},a_=n_,t_=Qi({gl:.44757,gp:.40745}),o_=function(e){return e},Il=function(e){return e},Lo=function(e){return e},i_={$:1},c_=i_,l_=$(function(e,r){var n=e,a=La(r.er),t=a.gl,i=a.gp,c=a.dk,l=o(Ht,r.bQ,r.aP),u=l;return{bI:gn(u),e_:n,bO:pn(u),cT:0,b3:mn(u),da:2,gl:t,gp:i,dk:c}}),Hl=function(e){return o(l_,Av(!0),{aP:e.aP,bQ:e.bQ,er:Oi(e.er)})},u_=$(function(e,r){var n=e,a=r;return Z(a,n)>0}),Gl=function(e){var r=e;return r},$_=function(e){e:for(;;){if(ne(e.dG,Lr)&&ne(e.dH,Lr))return Fe;if(o(u_,ve(e.dG),ve(e.dH))){var r={aP:e.aP,dG:e.dH,dH:e.dG,eJ:Wr(e.eJ)};e=r;continue e}else{var n=X(Gl(e.dH)/tr),a=X(Gl(e.dG)/tr),t=cr(e.eJ),i=t.gl,c=t.gp,l=t.dk,u=o(Ht,X$(1),e.aP),v=u;return{bI:a*gn(v),e_:!1,bO:a*pn(v),cT:n/a,b3:a*mn(v),da:3,gl:i,gp:c,dk:l}}}},v_=function(e){return $_({aP:e.aP,dG:e.dG,dH:e.dH,eJ:o(yc,qe(e.bH),qe(e.bM))})},s_=$(function(e,r){return{$:2,a:e,b:r}}),Bv=function(e){return{$:0,a:e}},Xa=function(e){var r=e;return r},f_=function(e){var r=e;return r.e_},d_=Bv(Zn.a),m_=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?h(o(T,a,i),c):h(i,o(T,a,c))});return p(jr,n,h(k,k),r)}),p_=function(e){var r=e;return mr({dU:r.gl,dV:r.b3,dW:0,dX:0,dY:r.gp,dZ:r.bO,d_:0,d$:0,d0:r.dk,d1:r.bI,d2:0,d3:0,d4:r.da,d5:r.cT,d6:0,d7:0})},g_=ce(function(e,r,n,a,t,i,c,l){var u=o(m_,f_,m([Xa(e),Xa(r),Xa(n),Xa(a)])),v=u.a,s=u.b;if(v.b){var f=le(v,s);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var g=f.a,d=f.b,_=d.a,b=d.b,y=b.a,S=b.b,w=S.a;return o(s_,o(Q,p_,v),{bk:o(rr,g,_),bV:o(rr,y,w),bW:o(rr,t,i),bX:o(rr,c,l)})}else return d_}else return Bv({bk:o(rr,e,r),bV:o(rr,n,a),bW:o(rr,t,i),bX:o(rr,c,l)})}),b_=$(function(e,r){return Pt(g_,e,r,Fe,Fe,Fe,Fe,Fe,Fe)}),h_=$(function(e,r){r2({bH:o(pe,"azimuth for third light",e),aP:B1(o_(2e3)),bM:o(pe,"elevation for third light",e),bQ:Lo(100)}),v_({bH:o(pe,"azimuth for fourth light",e),aP:Po,bM:o(pe,"elevation for fourth light",e),dG:Lo(120),dH:Lo(40)});var n=De(r.k).cU,a=n.a,t=a.a,i=a.b,c=function(){var f=r.c4;if(f.$===1){var g=f.a.ak,d=f.a.bq,_=o(pe,"duration of step animation",e),b=(e.W-g)/_,y=function(){switch(d){case 0:return h(0,b);case 1:return h(0,-b);case 2:return h(-b,0);default:return h(b,0)}}(),S=y.a,w=y.b;return h(t+S,i+w)}else return h(t,i)}(),l=c.a,u=c.b,v=Hl({aP:t_,bQ:Il(o(pe,"lumens of following lights",e)),er:{gl:l+.5,gp:u+.5,dk:o(pe,"height of following lights",e)}}),s=Hl({aP:Po,bQ:Il(o(pe,"lumens of following lights",e)),er:{gl:l-.5,gp:u-.5,dk:o(pe,"height of following lights",e)}});return o(K3,{eR:c_,eV:o(Jr,"background color",e),eY:o(_$,e,r),e1:.1,cj:e.cj,ff:r_(6),fB:o(b_,v,s),b6:e.b6,gb:a_,gi:Po},r.R.bR?m([o(Rl,e,r),o(C2,e,r),o(Q2,e,r),o(O2,e,r)]):m([o(Rl,e,r),o(M2,e,r),o(T2,e,r),o(K2,e,r),o(I2,e,r)]))}),__=$(function(e,r){return o(j,k,m([o(F1,e,r),o(h_,e,r)]))}),w_=function(e){return{$:4,a:e}},y_=function(e){return{$:4,a:e}},x_=function(e){return{$:5,a:e}},k_={$:0},S_={$:2},C_={$:3},P_={$:1},L_=function(e){return o(Ge,"autocomplete",e?"on":"off")},Ul=function(e){var r=e;return yr(r.m)},A_={$:6},Ev=$(function(e,r){return o(Ur,m([z("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),o(oe,"transition","background-color 0.3s ease"),dr(e)]),m([ie(r)]))}),z_=lr("pre"),T_=function(e){var r=e;return o(j,k,m([o(Ev,A_,"Export"),o(z_,m([z("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),m([ie(r.c8)]))]))},M_={$:7},D_=function(e){return{$:8,a:e}},j_=function(e){return o(kr,"cols",Me(e))},F_=function(e){return o(kr,"rows",Me(e))},V_=lr("textarea"),B_=function(e){var r=e;return o(j,k,m([o(Ev,M_,"Import"),o(V_,m([z("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),F_(150),j_(10),wa(D_),ya(r.b9)]),m([ie("todo")]))]))},E_=function(e){return o(ha,"mousedown",ue(e))},R_=Ge("placeholder"),W_=function(e){var r=e,n=o(j,m([z("inline-block ml-1 w-4 text-white40 hover:text-white80"),dr(C_),Yn("Move Level Up")]),m([fr.fG])),a=o(j,m([z("inline-block ml-1 w-4 text-white40 hover:text-white80"),dr(S_),Yn("Move Level Down")]),m([fr.fF])),t=o(j,m([z("inline-block ml-1 w-4 text-white40 hover:text-red-400"),dr(P_),Yn("Delete Level")]),m([fr.gc])),i=o(Ur,m([z("inline-block ml-1 w-4 text-white40 hover:text-white80"),dr(k_),Yn("Duplicate Level")]),m([fr.fT])),c=$(function(l,u){return o(Ur,m([z("w-full h-8 p-2 text-left text-white80 border-b border-white20"),z(ne(l,Ul(r.V))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),o(oe,"transition","background-color 0.3s ease"),E_(x_(l))]),m([ne(l,Ul(r.V))?o(j,k,m([o(la,m([z("w-[100px] bg-transparent"),R_("Enter Level Name"),ya(Ui(r.V).fI),wa(y_),L_(!1)]),k),o(j,m([z("float-right")]),m([i,n,a,t]))])):o(j,m([z("whitespace-nowrap")]),m([ie(u)]))]))});return o(j,m([z("w-60 text-xs")]),m([o(j,m([z("w-full h-[200px] overflow-hidden overflow-y-scroll")]),o(ma,$(function(l,u){var v=u.fI;return o(c,l,v)}),Xi(r.V))),o(j,m([z("p-4 border-[0.5px] border-white20")]),m([T_(r)])),o(j,m([z("p-4 border-[0.5px] border-white20")]),m([B_(r)]))]))},N_=function(e){return o(j,k,m([o(j,m([z("text-lg")]),m([ie("Pages")])),o(j,m([z("p-4")]),m([o(ia,w_,W_(e.k))]))]))},I_=function(e){return{$:2,a:e}},H_={$:3},G_={$:1},U_=$(function(e,r){return o(Ur,m([z("m-1 p-2 rounded bg-black40 hover:bg-black80"),dr(e)]),m([ie(r)]))}),O_=function(e){return o(ha,"mouseenter",ue(e))},J_=function(e){return o(ha,"mouseleave",ue(e))},Y_=$(function(e,r){return o(j,k,m([o(j,m([z("h-40")]),m([o(j,m([z("text-lg")]),m([ie("Solution Calculator")])),o(U_,G_,"Calculate all solutions"),o(j,k,o(ma,$(function(n,a){return o(j,m([z("m-2 p-2 w-24 bg-black60 hover:bg-black cursor-crosshair"),O_(I_(a)),J_(H_)]),m([ie("Solution "+Me(n))]))}),De(r.k).$7))]))]))}),q_=$(function(e,r){return r.R.bR?o(j,m([z("fixed top-0 right-0 w-[300px] h-full"),z("bg-black20"),z("border-[0.5px] border-white20"),z("overflow-y-scroll"),z("text-xs text-white60")]),m([o(j,m([z("p-4")]),m([o(Y_,e,r)])),o(j,m([z("p-4 border-[0.5px] border-white20")]),m([N_(r)]))])):o(j,k,k)}),Z_={$:0},Ol={dr:o(Uo,m([Oo("0 0 24 24"),Go("currentColor")]),m([o(Te,m([ze("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),k)])),du:o(Uo,m([Oo("0 0 24 24"),Go("currentColor")]),m([o(Te,m([ze("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),k)]))},X_=function(e){return o(j,m([z("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),m([o(Ur,m([z("w-6"),dr(Z_)]),m([e.R.bR?Ol.dr:Ol.du]))]))},Q_=$(function(e,r){return o(j,k,m([o(q_,e,r),X_(r)]))}),K_=de(g0,__,l1,E0,j0,Q_,j1);const e4={Main:{init:K_(o(F,function(e){return ue({fv:e})},o(A,"inputs",o(F,function(e){return o(F,function(r){return o(F,function(n){return o(F,function(a){return o(F,function(t){return o(F,function(i){return o(F,function(c){return ue({W:c,cj:i,fa:t,dL:a,cV:n,b6:r,gh:e})},o(A,"clock",he))},o(A,"devicePixelRatio",he))},o(A,"dt",he))},o(A,"keyboard",o(F,function(a){return o(F,function(t){return o(F,function(i){return o(F,function(c){return o(F,function(l){return o(F,function(u){return o(F,function(v){return o(F,function(s){return o(F,function(f){return ue({eQ:f,e3:s,cl:v,e9:u,dM:l,fU:c,ey:i,f0:t,dd:a})},o(A,"alt",re))},o(A,"control",re))},o(A,"down",re))},o(A,"downs",un(Gr)))},o(A,"left",re))},o(A,"pressedKeys",un(Gr)))},o(A,"right",re))},o(A,"shift",re))},o(A,"up",re))))},o(A,"pointer",o(F,function(n){return o(F,function(a){return o(F,function(t){return o(F,function(i){return o(F,function(c){return o(F,function(l){return o(F,function(u){return o(F,function(v){return ue({cl:v,dI:u,fE:l,fY:c,fZ:i,dd:t,gl:a,gp:n})},o(A,"down",re))},o(A,"isDown",re))},o(A,"move",re))},o(A,"rightDown",re))},o(A,"rightUp",re))},o(A,"up",re))},o(A,"x",he))},o(A,"y",he))))},o(A,"screen",o(F,function(r){return o(F,function(n){return ue({fo:n,gj:r})},o(A,"height",he))},o(A,"width",he))))},o(A,"wheel",o(F,function(e){return o(F,function(r){return ue({e5:r,e6:e})},o(A,"deltaX",he))},o(A,"deltaY",he)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},r4=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),t=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function s(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function f(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),r(d)&&(R.keyboard.control=!0),n(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),t(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(_=>_!=d.code),r(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),t(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{s(R)}),window.addEventListener("focus",d=>{s(R)}),window.addEventListener("visibilitychange",d=>{s(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(d){const _=d/1e3,b=_-R.clock;b<.009||(R.dt=b,R.clock=_,e.ports.tick.send(R),f(R)),window.requestAnimationFrame(g)}},n4=()=>{Ao("pointerdown"),Ao("wheel"),Ao("keydown")},Ao=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},a4=e4.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});n4();r4(a4);
