const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function wr(e,r,n){return n.a=e,n.f=r,n}function $(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Rt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function La(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Uu=[];function Iu(e){return e.length}var Ou=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ju=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Yu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function en(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&en(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=ui(e),r=ui(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}$(hr);$(function(e,r){return!hr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var Qu=$(function(e,r){var n=O(e,r);return n<0?Pc:n?Vf:Lc}),Pn=0;function k(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var Ku=$(nr);function _(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function Pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Pa(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return _(Pa(r).sort(function(n,a){var t=o(e,n,a);return t===Lc?0:t===Pc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?en(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan;$(Math.atan2);function cv(e){return e}function lv(e){return e===1/0||e===-1/0}var uv=Math.ceil,vv=Math.floor,$v=Math.round,fv=Math.sqrt,qo=Math.log,sv=isNaN;function mv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var dv=$(function(e,r){return e+r});function pv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function bv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),_v=$(function(e,r){return r.split(e)}),wv=$(function(e,r){return r.join(e)}),yv=y(function(e,r,n){return n.slice(e,r)});function xv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Sv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=$(function(e,r){return r.indexOf(e)>-1}),Cv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Lv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function rc(e){return e+""}function Pv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function zv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function kv(e){return Pa(e).join("")}function Mv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Dv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Av(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var Bv=Nt(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Fv=Nt(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),Vv=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function Ev(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var Nv=$(function(e,r){return{$:10,b:r,h:e}}),jv=$(function(e,r){return yr(e,[r])}),Gv=y(function(e,r,n){return yr(e,[r,n])});E(function(e,r,n,a){return yr(e,[r,n,a])});_e(function(e,r,n,a,t){return yr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return xe(o(Zt,"This is not valid JSON! "+a.message,r))}});var nc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return jn(r)?Yo(e.b,r,_):Ze("a LIST",r);case 4:return jn(r)?Yo(e.b,r,Wv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:xe(o(vi,n,v.a));case 7:var a=e.e;if(!jn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:xe(o(zc,a,v.a));case 8:if(typeof r!="object"||r===null||jn(r))return Ze("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return xe(o(vi,i,v.a));t=nr(k(i,v.a),t)}return ue(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=L,m=e.g;m.b;m=m.b){var v=je(m.a,r);if(Ie(v))return v;s=nr(v.a,s)}return xe(Ef(Ve(s)));case 1:return xe(o(Zt,e.a,r));case 0:return ue(e.a)}}function Yo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return xe(o(zc,i,c.a));t[i]=c.a}return ue(n(t))}function jn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Wv(e){return o(es,e.length,function(r){return e[r]})}function Ze(e,r){return xe(o(Zt,"Expecting "+e,r))}function Xr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Xr(e.b,r.b);case 6:return e.d===r.d&&Xr(e.b,r.b);case 7:return e.e===r.e&&Xr(e.b,r.b);case 9:return e.f===r.f&&Zo(e.g,r.g);case 10:return e.h===r.h&&Xr(e.b,r.b);case 11:return Zo(e.g,r.g)}}function Zo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Xr(e[a],r[a]))return!1;return!0}var Hv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ac(e){return e}y(function(e,r,n){return n[e]=r,n});function Vr(e){return{$:0,a:e}}function Xv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var $t=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Uv(e){return{$:5,b:e}}var Iv=0;function jt(e){var r={$:0,e:Iv++,f:e,g:null,h:[]};return Gt(r),r}function tc(e){return fr(function(r){r(Vr(jt(e)))})}function oc(e,r){e.h.push(r),Gt(e)}var Ov=$(function(e,r){return fr(function(n){oc(e,r),n(Vr(Pn))})}),Ga=!1,Qo=[];function Gt(e){if(Qo.push(e),!Ga){for(Ga=!0;e=Qo.shift();)Jv(e);Ga=!1}}function Jv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Wt(e,r,n,a,t,i){var c=o(nc,e,r?r.flags:void 0);Ie(c)||en(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=qv(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),ei(l,b.b,t(v))}return ei(l,u.b,t(v)),m?{ports:m}:{}}var er={};function qv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Zv(t,r)}return n}function Yv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Zv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,Uv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=jt(o($t,l,e.b))}var Qv=$(function(e,r){return fr(function(n){e.g(r),n(Vr(Pn))})});$(function(e,r){return o(Ov,e.h,{$:0,a:r})});function ic(e){return function(r){return{$:1,k:e,l:r}}}function Kv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ko=[],Wa=!1;function ei(e,r,n){if(Ko.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=Ko.shift();)e$(a.p,a.q,a.r);Wa=!1}}function e$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)oc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=r$(e,t,a,r.l);n[t]=n$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function r$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function n$(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function a$(e){er[e]&&en(3)}$(function(e,r){return r});function t$(e,r){return a$(e),er[e]={f:o$,u:r,a:i$},ic(e)}var o$=$(function(e,r){return function(n){return e(r(n))}});function i$(e,r){var n=L,a=er[e].u,t=Vr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(nc,a,c);Ie(l)||en(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,lr=typeof document!="undefined"?document:{};function Ht(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var cc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),sr=cc(void 0),c$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),l$=c$(void 0);function u$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var v$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Rt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return La(e,r,n,a,t,i,c,l,u)})});var lc=$(function(e,r){return{$:"a0",n:e,o:r}}),$$=$(function(e,r){return{$:"a1",n:e,o:r}}),uc=$(function(e,r){return{$:"a2",n:e,o:r}}),zn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function f$(e){return e=="script"?"p":e}function s$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(lc,r.n,m$(e,r.o)):r});function m$(e,r){var n=no(r);return{$:r.$,a:n?p(rs,n<3?d$:p$,Me(e),r.a):o($a,e,r.a)}}var d$=$(function(e,r){return k(e(r.a),r.b)}),p$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ri(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ri(c,t,i):c[t]=i}return r}function ri(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ht(c,br(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?b$(e,t):a==="a0"?_$(e,r,t):a==="a3"?g$(e,t):a==="a4"?h$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function b$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function g$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function h$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function _$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=w$(r,i),e.addEventListener(t,c,Ut&&{passive:no(i)<2}),a[t]=c}}var Ut;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ut=!0}}))}catch{}function w$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=no(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function y$(e,r){return e.$==r.$&&Xr(e.a,r.a)}function vc(e,r){var n=[];return Oe(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=k$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){we(n,0,a,r);return}(f?!x$(m,d):m!==d)&&we(n,2,a,d),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:ni(e,r,n,a,S$);return;case 2:ni(e,r,n,a,T$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=It(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function x$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ni(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=It(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function It(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=It(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&y$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function S$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Oe(s,i[v],n,++a),a+=s.b||0}}function T$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],w=g.a,x=b.a,h=g.b,T=b.b,M=void 0,G=void 0;if(w===x){f++,Oe(h,T,t,f),f+=h.b||0,m++,d++;continue}var N=l[m+1],R=u[d+1];if(N){var j=N.a,W=N.b;G=x===j}if(R){var F=R.a,Y=R.b;M=w===F}if(M&&G){f++,Oe(h,Y,t,f),un(i,t,w,T,d,c),f+=h.b||0,f++,vn(i,t,w,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,un(i,t,x,T,d,c),Oe(h,Y,t,f),f+=h.b||0,m+=1,d+=2;continue}if(G){f++,vn(i,t,w,h,f),f+=h.b||0,f++,Oe(W,T,t,f),f+=W.b||0,m+=2,d+=1;continue}if(N&&j===F){f++,vn(i,t,w,h,f),un(i,t,x,T,d,c),f+=h.b||0,f++,Oe(W,Y,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],h=g.b;vn(i,t,g.a,h,f),f+=h.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];un(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&we(n,8,a,{w:t,x:c,y:Q})}var $c="_elmW6BL";function un(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}un(e,r,n+$c,a,t,i)}function vn(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}vn(e,r,n+$c,a,t)}function fc(e,r,n,a){$n(e,r,n,0,0,r.b,a)}function $n(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)fc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&$n(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&$n(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return $n(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=d===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=$n(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function sc(e,r,n,a){return n.length===0?e:(fc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=C$(t,a);t===e&&(e=i)}return e}function C$(e,r){switch(r.$){case 0:return L$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return P$(e,r);case 5:return r.s(e);default:en(10)}}function L$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function P$(e,r){var n=r.s,a=z$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ht(e,a),e}function z$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ht(n,i.c===2?i.s:br(i.z,r.u))}return n}}function Ot(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(zn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=nr(Ot(v[a]),u);return p(sr,l,r,u)}function k$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var M$=E(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Ot(l);return mc(i,function(v){var s=c(v),m=vc(u,s);l=sc(l,u,m,t),u=s})})});E(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=lr.title,v=lr.body,s=Ot(v);return mc(i,function(m){ca=c;var d=l(m),f=sr("body")(L)(d.eu),g=vc(s,f);v=sc(v,s,g,t),s=f,ca=0,u!==d.fK&&(lr.title=u=d.fK)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function mc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(oo,ao,fr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(oo,ao,fr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(oo,ao,fr(function(){history.replaceState({},"",r),e()}))});var D$={addEventListener:function(){},removeEventListener:function(){}},A$=typeof window!="undefined"?window:D$;y(function(e,r,n){return tc(fr(function(a){function t(i){jt(n(i))}return e.addEventListener(r,t,Ut&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?re(n.a):q});function dc(e,r){return fr(function(n){ua(function(){var a=document.getElementById(e);n(a?Vr(r(a)):Xv(as(e)))})})}function B$(e){return fr(function(r){ua(function(){r(Vr(e()))})})}$(function(e,r){return dc(r,function(n){return n[e](),Pn})});$(function(e,r){return B$(function(){return A$.scroll(e,r),Pn})});y(function(e,r,n){return dc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Pn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var F$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var V$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?re(m):q}a.push(C(ll,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(ll,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var E$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/R$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function R$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Jt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),N$=y(function(e,r,n){return new Float64Array([e,r,n])}),j$=function(e){return e[0]},G$=function(e){return e[1]},W$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var H$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(pc);function bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(pc(e,r,n),n)}$(bc);function gc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/gc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var X$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),fn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(fn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=Jt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=fn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(fn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(fn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(fn(r,a)+e[14])/n,t});var U$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var I$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},O$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/J$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function J$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var q$=new Float64Array(16),Y$=new Float64Array(16),Z$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Q$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function hc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(hc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return hc(c,l,i,t,n,a)});function _c(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(_c);E(function(e,r,n,a){return _c(e,r,n,a,-1,1)});function wc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],M=r[1],G=r[2],N=r[3],R=r[4],j=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],me=r[13],ke=r[14],Te=r[15];return n[0]=a*T+l*M+m*G+b*N,n[1]=t*T+u*M+d*G+w*N,n[2]=i*T+v*M+f*G+x*N,n[3]=c*T+s*M+g*G+h*N,n[4]=a*R+l*j+m*W+b*F,n[5]=t*R+u*j+d*W+w*F,n[6]=i*R+v*j+f*W+x*F,n[7]=c*R+s*j+g*W+h*F,n[8]=a*Y+l*Q+m*ie+b*ve,n[9]=t*Y+u*Q+d*ie+w*ve,n[10]=i*Y+v*Q+f*ie+x*ve,n[11]=c*Y+s*Q+g*ie+h*ve,n[12]=a*oe+l*me+m*ke+b*Te,n[13]=t*oe+u*me+d*ke+w*Te,n[14]=i*oe+v*me+f*ke+x*Te,n[15]=c*oe+s*me+g*ke+h*Te,n}$(wc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],M=r[6],G=r[8],N=r[9],R=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+m*x,n[3]=0,n[4]=a*h+c*T+v*M,n[5]=t*h+l*T+s*M,n[6]=i*h+u*T+m*M,n[7]=0,n[8]=a*G+c*N+v*R,n[9]=t*G+l*N+s*R,n[10]=i*G+u*N+m*R,n[11]=0,n[12]=a*j+c*W+v*F+d,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Jt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/gc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,h=g+f,T=b-d,M=g-f,G=c*c*v+u,N=w+m,R=b+d,j=w-m,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],me=n[6],ke=n[7],Te=n[8],mr=n[9],dr=n[10],ja=n[11],Nu=n[12],ju=n[13],Gu=n[14],Wu=n[15];return a[0]=F*x+ve*h+Te*T,a[1]=Y*x+oe*h+mr*T,a[2]=Q*x+me*h+dr*T,a[3]=ie*x+ke*h+ja*T,a[4]=F*M+ve*G+Te*N,a[5]=Y*M+oe*G+mr*N,a[6]=Q*M+me*G+dr*N,a[7]=ie*M+ke*G+ja*N,a[8]=F*R+ve*j+Te*W,a[9]=Y*R+oe*j+mr*W,a[10]=Q*R+me*j+dr*W,a[11]=ie*R+ke*j+ja*W,a[12]=Nu,a[13]=ju,a[14]=Gu,a[15]=Wu,a});function K$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(K$);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function ef(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(ef);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=bc(e,r,Jt),t=va(mt(n,a,ai),ai),i=va(mt(a,t,ti),ti),c=q$,l=Y$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,wc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var oi=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function qt(e){for(var r=0;e.b;e=e.b)r++;return r}var rf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},nf=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),af=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),tf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),of=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),cf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),lf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),vf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),$f=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ff=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},sf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},mf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},df=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},yc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},xc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},pf=function(e){e.gl.disable(e.gl.CULL_FACE)},bf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},gf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},hf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],_f=[sf,mf,df,yc,xc,pf,bf,gf,hf];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function wf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Sc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function yf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=Sc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(qt(n.b)*s);yn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function xf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Sf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*qt(r.b),indexBuffer:null,buffers:{}}}function Sf(e,r){var n=new Uint32Array(qt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var Tc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),yc(n),xc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=oi++,v||(v=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=wf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Tf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Cf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=xf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=yf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Sc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,yn(H0(n),i.a),u=0;u<ii.length;u++){var M=n[ii[u]];M.toggle!==n.toggle&&M.enabled&&(_f[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function Tf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Cf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Lf=y(function(e,r,n){return u$(r,{g:n,f:{},h:e},Bf,Ff)}),Pf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),zf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),kf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Mf=$(function(e,r){e.contextAttributes.antialias=!0}),Df=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Af=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Bf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(W0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),rf(function(){return o(Tc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ff(e,r){return r.f=e.f,Tc(r)}var z=Ku,Gn=Yu,Cc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Gn,e,l,v)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),Yt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Yt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ui=function(e){return p(Yt,y(function(r,n,a){return o(z,k(r,n),a)}),L,e)},Lc=1,Vf=2,Pc=0,xe=function(e){return{$:1,a:e}},Zt=$(function(e,r){return{$:3,a:e,b:r}}),vi=$(function(e,r){return{$:0,a:e,b:r}}),zc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ef=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Rf=Sv,Nf=Hv,Be=rc,Cr=$(function(e,r){return o(wv,e,Pa(r))}),Qt=$(function(e,r){return _(o(_v,e,r))}),kc=function(e){return o(Cr,`
    `,o(Qt,`
`,e))},za=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Dr=function(e){return p(za,$(function(r,n){return n+1}),0,e)},jf=ev,Gf=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(z,r,n);e=a,r=t,n=i;continue e}else return n}),Yr=$(function(e,r){return p(Gf,e,r,L)}),Mc=$(function(e,r){return p(jf,e,o(Yr,0,Dr(r)-1),r)}),rr=Mv,Dc=function(e){var r=rr(e);return 97<=r&&r<=122},Ac=function(e){var r=rr(e);return r<=90&&65<=r},Wf=function(e){return Dc(e)||Ac(e)},Hf=function(e){var r=rr(e);return r<=57&&48<=r},Xf=function(e){return Dc(e)||Ac(e)||Hf(e)},Ve=function(e){return p(za,z,L,e)},rn=pv,Uf=$(function(e,r){return`

(`+(Be(e+1)+(") "+kc(If(r))))}),If=function(e){return o(Of,e,L)},Of=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=rn(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Wf(x)&&o(Rf,Xf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(z,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(z,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Cr,"",Ve(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Be(Dr(s))+" ways:"));return o(Cr,`

`,o(z,g,o(Mc,Uf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Cr,"",Ve(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Cr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(kc(o(Nf,4,f))+(`

`+d))}}),Ee=32,dt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=Uu,Kt=uv,eo=$(function(e,r){return qo(r)/qo(e)}),Jf=cv,xn=Kt(o(eo,2,Ee)),Bc=C(dt,0,xn,pt,pt),Fc=Ou,Vc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ec=vv,bt=Iu,ze=$(function(e,r){return O(e,r)>0?e:r}),qf=function(e){return{$:0,a:e}},ro=Ju,Yf=$(function(e,r){e:for(;;){var n=o(ro,Ee,e),a=n.a,t=n.b,i=o(z,qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),Zf=function(e){var r=e.a;return r},Qf=$(function(e,r){e:for(;;){var n=Kt(r/Ee);if(n===1)return o(ro,Ee,e).a;var a=o(Yf,e,L),t=n;e=a,r=t;continue e}}),Rc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Ec(o(eo,Ee,n-1)),t=e?Ve(r.z):r.z,i=o(Qf,t,r.l);return C(dt,bt(r.p)+n,o(ze,5,a*xn),i,r.p)}else return C(dt,bt(r.p),xn,pt,r.p)}),Kf=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Rc,!1,{z:a,l:n/Ee|0,p:t});var i=Vc(p(Fc,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(z,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),es=$(function(e,r){if(e<=0)return Bc;var n=e%Ee,a=p(Fc,n,e-n,r),t=e-n-Ee;return S(Kf,r,t,e,L,a)}),Ie=function(e){return!e.$},A=Nv,Z=Bv,D=Rv,$e=Fv,$a=jv,rs=Gv,Me=Av,no=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=sr("div"),ns=function(e){return{$:2,a:e}},Nc=$(function(e,r){return e}),jc=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Pr=function(e){return e},as=Pr,$i=Xe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ts=Tv,Lr=bv,Ur=yv,kn=$(function(e,r){return e<1?r:p(Ur,e,Lr(r),r)}),ka=Lv,Ma=function(e){return e===""},Da=$(function(e,r){return e<1?"":p(Ur,0,e,r)}),Gc=Pv,fi=_e(function(e,r,n,a,t){if(Ma(t)||o(ts,"@",t))return q;var i=o(ka,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(ye($i,e,o(Da,c,t),u,r,n,a))}else return re(ye($i,e,t,q,r,n,a))}),si=E(function(e,r,n,a){if(Ma(a))return q;var t=o(ka,"/",a);if(t.b){var i=t.a;return S(fi,e,o(kn,i,a),r,n,o(Da,i,a))}else return S(fi,e,"/",r,n,a)}),mi=y(function(e,r,n){if(Ma(n))return q;var a=o(ka,"?",n);if(a.b){var t=a.a;return C(si,e,re(o(kn,t+1,n)),r,o(Da,t,n))}else return C(si,e,q,r,n)});$(function(e,r){if(Ma(r))return q;var n=o(ka,"#",r);if(n.b){var a=n.a;return p(mi,e,re(o(kn,a+1,r)),o(Da,a,r))}else return p(mi,e,q,r)});var os=Cv,ao=function(e){},Mn=Vr,is=Mn(0),Wc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(za,e,r,Ve(m)):C(Wc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=y(function(e,r,n){return C(Wc,e,r,0,n)}),ne=$(function(e,r){return p(or,$(function(n,a){return o(z,e(n),a)}),L,r)}),fa=$t,to=$(function(e,r){return o(fa,function(n){return Mn(e(n))},r)}),cs=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Mn(o(e,a,t))},n)},r)}),ls=function(e){return p(or,cs(z),Mn(L),e)},us=Qv,vs=$(function(e,r){var n=r;return tc(o(fa,us(e),n))}),$s=y(function(e,r,n){return o(to,function(a){return 0},ls(o(ne,vs(e),r)))}),fs=y(function(e,r,n){return Mn(0)}),ss=$(function(e,r){var n=r;return o(to,e,n)});er.Task=Yv(is,$s,fs,ss);var ms=ic("Task"),oo=$(function(e,r){return ms(o(to,e,r))}),ds=M$,ps=mv,sa={$:1},Hc=function(e){return{$:2,a:e}},Aa={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),nn=function(e){var r=e.b.B;return r.a},bs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ge,r,{B:i,ab:c,T:o(z,a,n)}))}else return q},Xc=function(e){var r=e.b;return o(Ge,Aa,r)},_r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),gs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Xc(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,nn(n).a4)>0?o(te,bs,_r(o(Ge,sa,t))):Pr)(o(Ge,Hc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(jc,l.eA,Qe(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(Ge,Aa,{B:k(v,s),ab:L,T:o(z,t.B,t.T)})}}),Uc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(z,a,n);e=i,r=c,n=l;continue e}else return n}}),_s=$(function(e,r){return Ve(p(hs,e,r,L))}),Ic=y(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,h=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(z,h,o(z,c,o(z,s,o(z,b,o(_s,r-4,w))))):o(z,h,o(z,c,o(z,s,o(z,b,p(Ic,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),ws=$(function(e,r){return p(Ic,0,e,r)}),ys=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ve(n),le(_([a]),t)),c=o(ws,e,i),l=o(Uc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,sa,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var m=s.a,d=s.b;return o(Ge,sa,{B:m,ab:L,T:d})}else return r}}),xs=function(e){var r=e.b;return o(Ge,sa,r)},Ss=function(e){var r=e.b;return o(Ge,Hc({cY:nn(e).a4}),r)},Ts=$(function(e,r){switch(e.$){case 1:return xs(r);case 2:return Xc(r);case 3:return Ss(r);default:var n=e.a;return o(ys,n,r)}}),Oc=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Cs=$(function(e,r){return Qe(r,{av:e(r.av)})}),Ls=function(e){return{$:3,a:e}},Ps=function(e){return{$:2,a:e}},zs=$(function(e,r){return{$:0,a:e,b:r}}),ks=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},io=zv,Ms=y(function(e,r,n){return o(_r,0/0,io(o(e,r,n)))}),Jc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ds=hv,qc=function(e){return p(Ds,z,L,e)},As=$(function(e,r){var n=o(Jc,function(a){return a!=="0"&&a!=="."},qc(r));return le(e&&n?"-":"",r)}),pe=rc,gt=dv,Yc=Dv,Zc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=rn(n);if(a.$===1)return"01";var t=a.a;return o(gt,"0",Zc(t))}else{var i=rr(r);return i>=48&&i<57?o(gt,Yc(i+1),n):"0"}},ht=lv,Bs=sv,Ba=function(e){return o(gt,e,"")},Qc=y(function(e,r,n){return e<=0?n:p(Qc,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(Qc,e,r,"")}),_t=y(function(e,r,n){return le(n,o(Sn,e-Lr(n),Ba(r)))}),wt=gv,Kc=function(e){var r=o(Qt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Fs=function(e){var r=o(Qt,"e",pe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Gc(o(os,"+",t)?o(kn,1,t):t)),c=Kc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(_r,"0",o(Fe,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Fe,Oc(Ba),rn(le(o(Sn,J(i),"0"),v))))):p(_t,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Vs=y(function(e,r,n){if(ht(n)||Bs(n))return pe(n);var a=n<0,t=Kc(Fs(J(n))),i=t.a,c=t.b,l=Lr(i)+r,u=le(o(Sn,-l+1,"0"),p(_t,l,"0",le(i,c))),v=Lr(u),s=o(ze,1,l),m=o(e,a,p(Ur,s,v,u)),d=p(Ur,0,s,u),f=m?wt(o(_r,"1",o(Fe,Zc,rn(wt(d))))):d,g=Lr(f),b=f==="0"?f:r<=0?le(f,o(Sn,J(r),"0")):O(r,Lr(c))<0?p(Ur,0,g-r,f)+("."+p(Ur,g-r,g,f)):le(i+".",p(_t,r,"0",c));return o(As,a,b)}),pn=Vs($(function(e,r){var n=rn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Es=Ms(pn),Rs=y(function(e,r,n){var a=o(eo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),el=Qu,rl=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(el,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},Zr=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(X,0,r,n,S(X,1,v,s,m,d),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,d=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,d,t))}else return S(X,e,r,n,a,t)}),yt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(el,e,t);switch(u){case 0:return S(Zr,a,t,i,p(yt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Zr,a,t,i,c,p(yt,e,r,l))}}),Qn=y(function(e,r,n){var a=p(yt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Ns=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},nl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,w=d.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,m,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,m,d,x))}else return e},di=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,m),S(X,1,n,a,d,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,d=h.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,d),S(X,0,g,b,w,x))}else return e},js=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,di(r)}else break e;else return c.a,c.d,di(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Kn(t),l);var u=nl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Zr,v,s,m,Kn(d),f)}else return ar}else return S(X,r,n,a,Kn(t),l)}else return ar},bn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(bn,e,i),c);var u=nl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Zr,v,s,m,o(bn,e,d),f)}else return ar}else return S(X,n,a,t,o(bn,e,i),c);else return o(Gs,e,Rt(js,e,r,n,a,t,i,c))}),Gs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=Ns(c);if(l.$===-1){var u=l.b,v=l.c;return S(Zr,n,u,v,i,Kn(c))}else return ar}else return S(Zr,n,a,t,i,o(bn,e,c))}else return ar}),Ws=$(function(e,r){var n=o(bn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Wn=y(function(e,r,n){var a=r(o(rl,e,n));if(a.$)return o(Ws,e,n);var t=a.a;return p(Qn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Wn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(ks,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Wn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(zs,k(i,c),p(Rs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Wn,r,Fe(function(a){return a.$===3?Ls(n):a}));default:var r=e.a,n=e.b;return o(Wn,r,Fe(function(a){return a.$===2?Ps(n):a}))}},Xs=function(e){return Cs(Hs(e))},Us=$(function(e,r){return o(ne,Xs(e),r)}),Is=$(function(e,r){return Qe(r,{eA:o(Us,e,r.eA)})}),Os=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,Qe(a,{B:o(Oc,Is(e),a.B)}))}),Js=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),qs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,Qe(t,{B:o(Js,o(e,i.a,r),i)}))}),Ys=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(gs,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(Os,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(qs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Ts,l,a.G)})}}),Zs=$(function(e,r){return o(Ge,Aa,{B:k(e,r(e)),ab:L,T:L})}),Qs=Kv,pi=Qs(L),ma=Ev,Tn=Vv,Ks=t$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(m){return Me({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",ma(Tn)))},o(D,"left",Z))},o(D,"pressedKeys",ma(Tn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),em=function(e){return{$:4,a:e}},rm={$:0},nm=ac,Ue=$(function(e,r){return o(uc,e,nm(r))}),I=Ue("className"),am=function(e){var r=e.b.B;return r.b},da=Ue("id"),tm=v$,pa=tm,om=$$,he=om,im={$:1},cm=function(e){return{$:3,a:e}},lm=function(e){return{$:5,a:e}},bi=sr("a"),co=sr("button"),um=zn("d"),al=cc("http://www.w3.org/2000/svg"),vm=al("path"),$m=al("svg"),fm=zn("viewBox"),gn=function(e){return o($m,_([fm("0 0 100 100"),o(he,"width","100%"),o(he,"height","100%")]),_([o(vm,_([um(e)]),L)]))},gi=function(e){return o(Ue,"href",s$(e))},Or={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},sm=function(e){return{$:0,a:e}},tl=lc,ol=$(function(e,r){return o(tl,e,sm(r))}),lo=function(e){return o(ol,"click",Me(e))},hi=Ue("target"),mm=Ue("title"),xt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(xt,e,i),o(xt,e,c))}),dm=ft,ge=dm,pm=function(e){return p(Yt,y(function(r,n,a){return o(z,n,a)}),L,e)},bm=$(function(e,r){return{$:3,a:e,b:r}}),gm=$(function(e,r){return{$:2,a:e,b:r}}),hm=$(function(e,r){return{$:0,a:e,b:r}}),_m=$(function(e,r){return{$:1,a:e,b:r}}),Er=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),wm=C(Er,0/255,0/255,0/255,1),ym=ac,xm=$(function(e,r){return o(uc,e,ym(r))}),Sm=xm("checked"),qe=$v,Tm=y(function(e,r,n){return le(o(Sn,e-Lr(n),Ba(r)),n)}),ba=nv,il=function(e){var r=function(n){return n<10?Be(n):Ba(Yc(87+n))};return e<16?r(e):le(il(e/16|0),r(o(ba,16,e)))},Cm=o(te,il,o(Tm,2,"0")),uo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Lm=function(e){var r=uo(e),n=r.cN,a=r.cd,t=r.b6;return o(Cr,"",o(z,"#",o(ne,o(te,qe,Cm),_([n*255,a*255,t*255]))))},St=Ue("htmlFor"),Tt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Pm=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(z,t,n)}),cl=$(function(e,r){return p(or,Pm(e),L,r)}),ll=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),zm=V$,km=kv,Mm=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Dm=F$,Am=function(e){return o(Dm,{ew:!1,fe:!1},e)},ul=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Bm=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),Fm=function(e){return{$:2,a:e}},Vm=function(e){return{$:0,a:e}},Em=function(e){return{$:1,a:e}},Ha=$(function(e,r){return rr(r)-rr(e)}),Xa=y(function(e,r,n){var a=rr(n);return O(rr(e),a)<1&&O(a,rr(r))<1}),Rm=$(function(e,r){var n=function(t){return O(t,e)<0?ue(t):xe(Em(r))},a=p(Xa,"0","9",r)?ue(o(Ha,"0",r)):p(Xa,"a","z",r)?ue(10+o(Ha,"a",r)):p(Xa,"A","Z",r)?ue(10+o(Ha,"A",r)):xe(Vm(r));return o(ga,n,a)}),vl=$(function(e,r){var n=rn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return ue(c+l*e)},o(vl,e,i))},o(Rm,e,t))}),Nm=$(function(e,r){return 2<=e&&e<=36?o(vl,e,wt(r)):xe(Fm(e))}),jm=Nm(16),Gm=y(function(e,r,n){return C(Er,e,r,n,1)}),Wm=E(function(e,r,n,a){return C(Er,e,r,n,a)}),Dn=rv,Hm=$(function(e,r){var n=o(Dn,10,e);return qe(r*n)/n}),Xm=xv,Um=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=qc(n);if(a.b&&!a.b.b){var t=a.a;return km(_([t,t]))}else return n};return o(te,Xm,o(te,function(n){return o(Fe,function(a){return p(zm,1,a,n)},Am(e))},o(te,Tt(ul),o(te,Fe(function(n){return n.fF}),o(te,Fe(cl(Pr)),o(te,Mm("Parsing hex regex failed"),ga(function(n){var a=o(ne,o(te,r,o(te,jm,Bm(Jf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Wm,t/255,c/255,u/255,o(Hm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ue(p(Gm,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),ha=sr("input"),Ct=sr("label"),Lt=Ue("name"),$l=$(function(e,r){return p(or,D,r,e)}),Im=o($l,_(["target","checked"]),Z),Om=function(e){return o(ol,"change",o($a,e,Im))},Jm=function(e){return k(e,!0)},qm=function(e){return{$:1,a:e}},Ym=$(function(e,r){return o(tl,e,qm(r))}),Zm=o($l,_(["target","value"]),Tn),vo=function(e){return o(Ym,"input",o($a,Jm,o($a,e,Zm)))},fl=Ue("max"),sl=Ue("min"),ml=function(e){return o(Ue,"step",e)},_a=Ue("type"),$o=Ue("value"),_i=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(U,L,_([o(Ct,_([St(r)]),_([o(U,_([I("relative w-full")]),_([o(U,_([I("inline-block")]),_([ge(r)])),o(U,_([I("inline-block float-right")]),_([ge(pe(n))]))]))])),o(ha,_([_a("range"),o(he,"width","100%"),da(r),Lt(r),sl(pe(a)),fl(pe(t)),$o(pe(n)),ml(pe(i)),vo(o(te,io,o(te,_r(42),c)))]),L)]))},Qm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Km=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,L,_([o(U,_([I("mb-2")]),_([o(Ct,_([St(e)]),_([ge(e)]))])),o(ha,_([_a("checkbox"),da(e),Lt(e),Om(bm(e)),Sm(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:hm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:o(te,qe,_m(e)),cW:1,c1:c});default:var c=r.a;return o(U,L,_([o(U,_([o(he,"margin-bottom","6px")]),_([o(Ct,_([St(e)]),_([ge(e)]))])),o(ha,_([_a("color"),o(he,"width","100%"),o(he,"height","26px"),o(he,"padding","0px"),da(e),Lt(e),vo(function(l){return o(gm,e,o(Qm,wm,Um(l)))}),$o(Lm(c))]),L)]))}}),ed=function(e){return o(U,_([I("p-6 border-y-[0.5px] border-white20")]),_([o(U,_([I("text-lg pb-2")]),_([ge(e.ff)])),o(U,_([I("pl-2 pr-2")]),pm(o(xt,Km,e.av)))]))},rd=function(e){return o(U,_([I("text-xs text-white60")]),o(ne,ed,e))},nd=function(e){return o(U,_([I("absolute left-[104px] bottom-2 text-sm text-white40")]),_([ge("clock: "+o(pn,3,nn(e).a4))]))},ad=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return qe(60/(nn(e).a4-n))},o(Fe,o(te,Zf,function(n){return n.a4}),ul(o(Uc,59,r))))},td=function(e){return o(U,_([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ad(e);if(r.$===1)return _([ge("... Fps")]);var n=r.a;return _([ge(Be(n)+" Fps")])}())},od=function(e){return{$:0,a:e}},id=function(e){var r=e.b.T;return Dr(r)},cd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Dr(r)+1+Dr(n)},ld=function(e){return o(ha,_([I("absolute left-[100px] w-[490px]"),_a("range"),sl(Be(0)),fl(Be(cd(e)-1)),$o(Be(id(e))),ml(Be(1)),vo(o(te,io,o(te,_r(42),o(te,qe,od))))]),L)},wi={$:1},ud={$:3},vd={$:2},dl=function(e){return!e.b},yi=$(function(e,r){return o(co,_([I("px-2 bg-black40"),I(r),lo(e)]),_([ge("REC")]))}),xi=$(function(e,r){return o(co,_([I("absolute left-[60px] mx-1 px-1 bg-black40"),lo(r)]),_([o(U,_([I("w-4 h-6 fill-white80")]),_([gn(e)]))]))}),$d=function(e){var r=e.a,n=e.b.ab;return o(U,_([I("py-1")]),_([function(){switch(r.$){case 0:return o(yi,wi,"text-red-500 font-bold");case 1:return o(yi,vd,"text-white80 font-bold");default:return o(U,L,L)}}(),function(){switch(r.$){case 0:return o(U,L,L);case 1:return dl(n)?o(U,L,L):o(xi,Or.fo,ud);default:return o(xi,Or.fn,wi)}}()]))},fd=function(e){return o(U,_([I("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),_([ld(e),$d(e),td(e),nd(e)]))},pl=function(e){return o(Cr,"",e)},sd=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(z,e,o(z,c,l))}),i=p(or,t,L,a);return o(z,n,i)}else return L}),md=function(e){var r=e.a;return hr(r,Aa)},Sr=sr("p"),dd=sr("pre"),pd=$(function(e,r){var n=md(r.G)?o(U,L,L):o(U,_([I("absolute pointer-events-none w-8 h-8"),o(he,"left",pe(e.fp.fT+.5*e.cT.fR)+"px"),o(he,"top",pe(-e.fp.fX+.5*e.cT.eW)+"px")]),_([o(U,_([I(e.fp.e4?"fill-black80":"fill-white40")]),_([gn(Or.fp)]))]));return o(U,L,_([n,o(dd,_([I("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),_([o(Sr,L,_([ge("pressedKeys: "+pl(o(sd," ",e.e7.fq)))])),o(Sr,L,_([ge("delta time: "+o(pn,4,e.eJ))])),o(Sr,L,_([ge("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(Sr,L,_([ge("pointer.x: "+o(pn,2,e.fp.fT))])),o(Sr,L,_([ge("pointer.y: "+o(pn,2,e.fp.fX))])),o(Sr,L,_([ge("wheel deltaX: "+pe(e.fQ.eD))])),o(Sr,L,_([ge("wheel deltaY: "+pe(e.fQ.eE))]))]))]))}),bd=$(function(e,r){var n=o(co,_([I(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),lo(im),mm("Distraction Free Mode")]),_([gn(Or.f$)])),a=o(U,_([I("absolute w-8 bottom-12")]),_([o(bi,_([I("fill-twitterBlue40 hover:fill-twitterBlue"),gi("https://twitter.com/AzizErkalSelman"),hi("_blank")]),_([gn(Or.fL)]))])),t=o(U,_([I("absolute w-8 bottom-2")]),_([o(bi,_([I("fill-githubCat40 hover:fill-githubCat"),gi("https://github.com/erkal/elm-3d-playground-exploration"),hi("_blank")]),_([gn(Or.eQ)]))]));return r.aL?o(U,_([I("fixed w-10 h-10 p-1")]),_([n])):o(U,L,_([o(U,_([I("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(U,_([I("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),_([o(pa,cm,rd(nn(r.G).eA))])),o(pa,lm,fd(r.G)),o(pd,e,r)]))}),gd=y(function(e,r,n){var a=am(n.G),t=nn(n.G);return o(U,_([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(he,"width",pe(t.cT.fR)+"px"),o(he,"height",pe(t.cT.eW)+"px")]),_([o(U,_([I("fixed")]),_([o(pa,Nc(rm),o(e,t,a))])),o(U,_([da("gui")]),_([o(bd,t,n),o(U,_([I("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),_([o(pa,em,o(r,t,a))]))]))]))}),hd=Xe(function(e,r,n,a,t,i){var c=$(function(u,v){return k(C(Ys,r,i,u,v),pi)}),l=function(u){var v=o(jc,n,u.e1);return k({aL:u.e1.cT.fR<500,G:o(Zs,v,a)},pi)};return ds({e0:l,fG:Nc(Ks(ns)),fM:c,fP:o(gd,e,t)})}),_d=E(function(e,r,n,a){return ye(hd,e,r,n,a,$(function(t,i){return o(U,L,L)}),y(function(t,i,c){return c}))}),wd=y(function(e,r,n){return C(_d,e,r,L,n)}),yd=function(e){return{}},xd=$(function(e,r){return r}),Ar=av,Si=function(e){return e*Ar/180},Br=function(e){return e},sn=function(e){return Br(Ar*(e/180))},pr=fv,Sd=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ze,J(c),o(ze,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,m=pr(s*s+v*v+u*u);return re({fT:s/m,fX:v/m,c6:u/m})}else return q}),Ua=function(e){return e},fo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),ea=function(e){var r=e,n=o(ze,J(r.fT),o(ze,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c6:a/c})}else return q},wa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Td=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),bl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Cd=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Ld=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Pd=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),zd=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Je=0,gl={fT:0,fX:0,c6:0},kd=y(function(e,r,n){return o(Tt,function(a){var t=o(Ld,o(Pd,a,r),r);return o(Tt,function(i){var c=o(fo,r,e),l=o(Td,n,c),u=o(bl,Je,l)?c:o(Cd,Je,l)?zd(c):gl;return o(Fe,function(v){return B(a,i,v)},ea(u))},ea(t))},ea(e))}),Md=function(e){var r=e,n=J(r.c6),a=J(r.fX),t=J(r.fT);if(O(t,a)<1)if(O(t,n)<1){var i=pr(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=pr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(O(a,n)<1){var i=pr(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=pr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},so=function(e){var r=Md(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return k(r,c)},Ir=function(e){var r=e;return r},tr=function(e){return e},Dd=$(function(e,r){var n=so(e),a=n.a,t=n.b;return tr({cB:r,c4:a,c5:t,c7:e})}),Ad=function(e){var r=o(wa,e.aR,e.dj),n=Ir(e.ei),a=o(fo,r,n),t=p(kd,r,n,a);if(t.$){var v=ea(r);if(v.$){var m=so(e.ei),d=m.a,f=m.b;return tr({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Dd,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return tr({cB:e.dj,c4:u,c5:l,c7:c})}},Ae={fT:0,fX:0,c6:0},Bd=function(e){return{$:0,a:e}},se=function(e){var r=e;return J(r)},ra=function(e){var r=e;return .5*r},Fd=iv,Vd=function(e){var r=e;return Fd(r)},Ed=function(e){var r=ra(se(e.ej)),n=Vd(r);return{cM:Bd(n),c2:e.c2}},ur=function(e){return e},mo=ur({fT:0,fX:1,c6:0}),Rd=function(e){var r=e.aR,n=e.dj,a=e.ei;return Ed({ej:sn(40),c2:Ad({dj:Ua(n),aR:Ua(r),ei:o(_r,mo,o(Sd,Ae,Ua(a)))})})},Ia=function(e){return e/255},Nd=y(function(e,r,n){return C(Er,Ia(e),Ia(r),Ia(n),1)}),hl=C(Er,52/255,101/255,164/255,1),jd=C(Er,115/255,210/255,22/255,1),po=function(e){return{$:5,a:e}},Gd=function(e){return po(e)},bo=$(function(e,r){return{$:4,a:e,b:r}}),_l=function(e){return e},Wd=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),Hd=$(function(e,r){return _l(k(e,o(Wd,r,e)))}),wl=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),Xd=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(wl,e(n),e(a),e(t))}),gr=function(e){return e},Oa=$(function(e,r){return o(bo,e,o(Hd,Ae,o(Xd,gr,r)))}),Ud=C(Er,204/255,0/255,0/255,1),Id=Gd(_([o(Oa,Ud,B(100,0,0)),o(Oa,jd,B(0,100,0)),o(Oa,hl,B(0,0,100))])),go=$(function(e,r){return{$:0,a:e,b:r}}),Ja=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vr=$(function(e,r){var n=e,a=r;return a-n}),Od=ur({fT:-1,fX:0,c6:0}),Jd=ur({fT:0,fX:-1,c6:0}),yl=ur({fT:0,fX:0,c6:-1}),xl=ur({fT:1,fX:0,c6:0}),ho=ur({fT:0,fX:0,c6:1}),de=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),qd=Xe(function(e,r,n,a,t,i){var c=o(Ja,n,i)?ho:yl,l=o(Ja,r,t)?mo:Jd,u=o(Ja,e,a)?xl:Od,v=B(se(o(vr,e,a)),se(o(vr,r,t)),se(o(vr,n,i))),s=p(de,o(qa,e,a),o(qa,r,t),o(qa,n,i)),m=tr({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),zr=function(e){var r=e;return r.fT},kr=function(e){var r=e;return r.fX},Mr=function(e){var r=e;return r.c6},Yd=$(function(e,r){return ye(qd,zr(e),kr(e),Mr(e),zr(r),kr(r),Mr(r))}),Pt=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),Zd=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(go,e,o(Yd,p(Pt,-c,-l,-u),p(Pt,c,l,u)))}),zt=function(e){return{$:0,a:e}},Sl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Tl=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),Ya=function(e){return p(Tl,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},An=N$,Qd=function(e){var r=uo(e),n=r.cN,a=r.cd,t=r.b6;return p(An,Ya(n),Ya(a),Ya(t))},Kd=function(e){return p(Sl,0,zt(Qd(e)),zt(0))},Cl=$(function(e,r){return{$:2,a:e,b:r}}),Ll=$(function(e,r){return{$:3,a:e,b:r}}),Pl=$(function(e,r){return{$:1,a:e,b:r}}),e0=function(e){var r=e;return r},_o=function(e){var r=e;return e0(r.er)},wo=function(e){var r=e;return r.aK},an=function(e){var r=e;return r.cB},Fr=tv,Qr=ov,na=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Qr(c),v=a.eG,s=v,m=s.fT*u,d=l*m,f=m*m,g=s.fX*u,b=l*g,w=m*g,x=g*g,h=1-2*(f+x),T=s.c6*u,M=l*T,G=2*(w-M),N=2*(w+M),R=m*T,j=2*(R+b),W=2*(R-b),F=g*T,Y=2*(F-d),Q=2*(F+d),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+j*i.c6,fX:N*i.fT+oe*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+h*i.c6}}),Bn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Qr(c),v=a.cB,s=v,m=i.fT-s.fT,d=i.fX-s.fX,f=i.c6-s.c6,g=a.eG,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,M=l*T,G=w*T,N=T*T,R=1-2*(h+N),j=b.c6*u,W=l*j,F=2*(G-W),Y=2*(G+W),Q=w*j,ie=2*(Q+M),ve=2*(Q-M),oe=T*j,me=2*(oe-x),ke=2*(oe+x),Te=j*j,mr=1-2*(N+Te),dr=1-2*(h+Te);return{fT:s.fT+mr*m+F*d+ie*f,fX:s.fX+Y*m+dr*d+me*f,c6:s.c6+ve*m+ke*d+R*f}}),Rr=function(e){var r=e;return r.c4},Nr=function(e){var r=e;return r.c5},jr=function(e){var r=e;return r.c7},r0=y(function(e,r,n){return tr({cB:p(Bn,e,r,an(n)),c4:p(na,e,r,Rr(n)),c5:p(na,e,r,Nr(n)),c7:p(na,e,r,jr(n))})}),n0=y(function(e,r,n){return{er:p(r0,e,r,_o(n)),aK:wo(n)}}),Fn=$(function(e,r){return{eG:r,cB:e}}),a0=$(function(e,r){var n=o(Bn,e,r),a=o(na,e,r);return function(t){var i=t;return o(Fn,n(i.cB),a(i.eG))}}),t0=y(function(e,r,n){var a=n;return{k:p(a0,e,r,a.k),e9:a.e9,fr:a.fr}}),yo=function(e){var r=e;return r},zl=$(function(e,r){var n=yo(r),a=n.a,t=n.b;return _l(k(e(a),e(t)))}),o0=y(function(e,r,n){return o(zl,o(Bn,e,r),n)}),xo=function(e){var r=e;return r.ey},So=function(e){var r=e;return r.fr},kl=$(function(e,r){return{ey:r,fr:se(e)}}),i0=y(function(e,r,n){return o(kl,So(n),p(Bn,e,r,xo(n)))}),Ml=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),c0=y(function(e,r,n){return o(Ml,o(Bn,e,r),n)}),Fa=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(go,l,p(n0,e,r,a));case 1:var l=n.a,t=n.b;return o(Pl,l,p(c0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ll,l,p(i0,e,r,i));case 2:var l=n.a,c=n.b;return o(Cl,l,p(t0,e,r,c));case 4:var l=n.a,u=n.b;return o(bo,l,p(o0,e,r,u));default:var v=n.a;return po(o(ne,o(Fa,e,r),v))}}),To=xl,l0=o(Fn,Ae,To),u0=$(function(e,r){return p(Fa,l0,Br(e),r)}),Co=mo,v0=o(Fn,Ae,Co),$0=$(function(e,r){return p(Fa,v0,Br(e),r)}),Lo=ho,f0=o(Fn,Ae,Lo),s0=$(function(e,r){return p(Fa,f0,Br(e),r)}),K=$(function(e,r){var n=r;return e*n}),$r=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Vn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c6:a.c6+r*(t.c6-a.c6)}}),m0=y(function(e,r,n){var a=_o(n),t=Rr(a),i=Nr(a),c=jr(a),l=p(Vn,e,r,an(a)),u=r>=0?tr({cB:l,c4:t,c5:i,c7:c}):tr({cB:l,c4:$r(t),c5:$r(i),c7:$r(c)}),v=wo(n),s=v.a,m=v.b,d=v.c,f=se(o(K,r,s)),g=se(o(K,r,m)),b=se(o(K,r,d));return{er:u,aK:B(f,g,b)}}),Po=function(e){var r=e;return r.k},Dl=function(e){var r=e;return r.eG},Ti=function(e){return Dl(Po(e))},Al=function(e){var r=e;return r.cB},d0=function(e){return Al(Po(e))},Bl=function(e){var r=e;return r.e9},Fl=function(e){var r=e;return r.fr},p0=y(function(e,r,n){var a=se(o(K,r,Fl(n))),t=se(o(K,r,Bl(n))),i=r>=0?Ti(n):$r(Ti(n)),c=p(Vn,e,r,d0(n));return{k:o(Fn,c,i),e9:t,fr:a}}),b0=y(function(e,r,n){return o(zl,o(Vn,e,r),n)}),g0=y(function(e,r,n){return o(kl,o(K,J(r),So(n)),p(Vn,e,r,xo(n)))}),h0=y(function(e,r,n){return o(Ml,o(Vn,e,r),n)}),Vl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(go,c,p(m0,Ae,e,n));case 1:var c=r.a,a=r.b;return o(Pl,c,p(h0,Ae,e,a));case 3:var c=r.a,t=r.b;return o(Ll,c,p(g0,Ae,e,t));case 2:var c=r.a,i=r.b;return o(Cl,c,p(p0,Ae,e,i));case 4:var c=r.a,l=r.b;return o(bo,c,p(b0,Ae,e,l));default:var u=r.a;return po(o(ne,Vl(e),u))}}),_0=$(function(e,r){return(r-Ec(r/e)*e)/e}),w0=function(e){return 2*Ar*e},Hn=E(function(e,r,n,a){return e+(r-e)*(1+Fr(w0(o(_0,n,a))))/2}),y0=function(e){return o(s0,C(Hn,1,10,30,e.a4),o($0,C(Hn,1,10,30,e.a4),o(u0,C(Hn,1,10,30,e.a4),o(Vl,C(Hn,1,2,14,e.a4),o(Zd,Kd(hl),B(1,1,1))))))},x0=$(function(e,r){return _([Id,y0(e)])}),S0=function(e){return e},T0=function(e){return gr(.01*e)},Ci=function(e){return e},C0=function(e){return e},L0=function(e){return{$:0,a:e}},P0=L0,z0={$:3},k0=z0,M0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),D0=M0,A0=$(function(e,r){return r.b?p(or,z,r,e):e}),We=function(e){return p(or,A0,L,e)},zo=$(function(e,r){return We(o(ne,e,r))}),B0=function(e){return{$:1,a:e}},F0=B0,V0=function(e){return o(zn,"height",Be(e))},E0=function(e){return l$(f$(e))},R0=E0,N0=function(e){return{$:2,a:e}},j0=N0,G0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return qe(l*1e3)/1e3},c=function(l){return qe(l*1e4)/100};return pl(_(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},W0=$(function(e,r){switch(r.$){case 0:return o(Pf,e,r);case 1:return o(zf,e,r);case 2:return o(kf,e,r);case 3:return o(Mf,e,r);case 4:return o(Df,e,r);default:return o(Af,e,r)}}),H0=$(function(e,r){switch(r.$){case 0:return o(af,e,r);case 1:return o(tf,e,r);case 2:return o(of,e,r);case 3:return o(cf,e,r);case 4:return o(lf,e,r);case 5:return o(uf,e,r);case 6:return o(vf,e,r);case 7:return o($f,e,r);default:return ff(e)}}),X0=y(function(e,r,n){return p(Lf,e,r,n)}),Li=function(e){var r=e;return r},tn=U$,Za=C(tn,1,1,1,1),Ye=y(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),U0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),I0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(U0,n*a/t,n,n*(1-a-t)/t)}),O0=function(e){var r=e.a,n=e.b,a=e.c;return p(An,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ko=$(function(e,r){return O0(o(I0,e,r))}),El=$(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),Ke=Z$,J0=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Qa=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(tn,a.bY,a.bY,a.bY,i);return ye(t,e,c,J0(a),a.dp,r,n)}),Rl=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(El,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(z,S(Qa,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(z,S(Qa,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(z,S(Qa,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(za,C(Rl,e,r,n,a),i,M)}}),q0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Nl=q0,Mo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Y0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,518,r,n,a)},Z0=$(function(e,r){return{$:6,a:e,b:r}}),Q0=Z0,jl=_([Y0({V:1,W:0,Z:!1}),C(Nl,!1,!1,!1,!1),o(Q0,0,1)]),Kr=519,Do=8,Gl=15,Jr=7681,K0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=nf,ep=$(function(e,r){return{$:0,a:e,b:r}}),rp=ep({df:1,$7:0,dV:5}),De=E$,np=rp(_([{bU:o(De,-1,-1)},{bU:o(De,1,-1)},{bU:o(De,-1,1)},{bU:o(De,1,1)}])),ap={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},tp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ao=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(tp,a,t,i)))}),Bo=function(e){return p(Ao,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Fo=function(e){return S(ae,_([Bo(e),C(Nl,!1,!1,!1,!1)]),ap,K0,np,{})},op=Fo({a9:Jr,cp:0,cO:Do,bm:Kr,c3:Gl,bu:Jr,bv:Jr}),ip=516,Pi=5386,Se=7680,cp=function(e){return o(Dn,2,e+4)},Wl=function(e){return Fo({a9:Se,cp:Gl,cO:Do,bm:ip,c3:cp(e),bu:Pi,bv:Pi})},lp=y(function(e,r,n){return We(_([p(Ye,e,n,jl),_([Wl(r),op])]))}),up=$(function(e,r){return We(o(Mc,lp(e),r))}),vp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,513,r,n,a)},$p=vp({V:1,W:0,Z:!0}),fp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},sp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return fp(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},mp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zi=$(function(e,r){var n=e,a=r;return p(mp,32774,n,a)}),dp=1,ki=771,pp=770,Vo=sp({bw:0,aH:o(zi,dp,ki),bz:0,bB:o(zi,pp,ki),bG:0,bW:0}),Gr=_([$p,Vo]),bp=function(e){var r=e;return r.dO},gp=function(e){var r=e;return r.dP},Hl=function(e){var r=e;return r.dQ},hp=function(e){var r=e;return r.dR},_p=function(e){var r=e;return r.dS},Xl=function(e){var r=e;return r.dT},Ul=function(e){return B(o(vr,hp(e),bp(e)),o(vr,_p(e),gp(e)),o(vr,Xl(e),Hl(e)))},Mi=function(e){var r=e;return an(r)},wp=function(e){return e},yp=function(e){return tr({cB:wp({fT:e.H,fX:e.I,c6:e.J}),c4:ur({fT:e.q,fX:e.r,c6:e.s}),c5:ur({fT:e.t,fX:e.u,c6:e.v}),c7:ur({fT:e.w,fX:e.x,c6:e.y})})},Ka=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),Il=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*d.fT+l*d.fX+u*d.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),Ol=$(function(e,r){return{cB:o(Il,e,an(r)),c4:o(Ka,e,Rr(r)),c5:o(Ka,e,Nr(r)),c7:o(Ka,e,jr(r))}}),ya=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ze,n,a)}),aa=$(function(e,r){return O(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),xp=$(function(e,r){var n=ya(r),a=ya(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),He=function(e){var r=e;return r},Sp=function(e){var r=e;return B(r.fT,r.fX,r.c6)},hn=$(function(e,r){var n=e,a=r;return a+n}),Tp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(se(a)),c=ra(se(n)),l=ra(se(t)),u=Sp(r),v=u.a,s=u.b,m=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,m),dR:o(vr,c,v),dS:o(vr,i,s),dT:o(vr,l,m)}}),Di=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,s=t.fT*r,m=He(jr(e)),d=J(l*m.fT)+J(c*m.fX)+J(i*m.c6),f=He(Nr(e)),g=J(l*f.fT)+J(c*f.fX)+J(i*f.c6),b=He(Rr(e)),w=J(l*b.fT)+J(c*b.fX)+J(i*b.c6),x=o(Tp,B(w,g,d),o(Il,e,p(Pt,s,v,u)));if(a.$)return re(x);var h=a.a;return re(o(xp,h,x))}),kt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Di,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Di,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(kt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,m=o(Ol,yp(v),e),d=r*v.bY,f=e,g=r,b=C(kt,m,d,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),on=j$,cn=G$,ln=W$,Jl=function(e){return{$:4,a:e}},Cp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(z,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Jl(o(Cp,e,L))},Lp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Pp=function(e){var r=e;return r},Ai=Fo({a9:Jr,cp:0,cO:Do,bm:Kr,c3:255,bu:Jr,bv:Jr}),zp=function(e){var r=e,n=o(ze,J(r.fT),o(ze,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return c*n}else return Je},Ce={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fT:0,fX:0,c6:0},Ne=$(function(e,r){var n=e,a=r;return Ke({dx:n.fT,dy:n.bW,dz:a.fT,dA:a.bW,dB:n.fX,dC:n.bG,dD:a.fX,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),mn=k({be:o(Ne,Ce,Ce),bL:o(Ne,Ce,Ce),bM:o(Ne,Ce,Ce),bN:o(Ne,Ce,Ce)},C(tn,0,0,0,0)),Bi=function(e){var r=e;return-r},ql=514,Yl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,515,r,n,a)},Zl=240,kp=_([Yl({V:1,W:0,Z:!0}),Bo({a9:Se,cp:Zl,cO:0,bm:ql,c3:0,bu:Se,bv:Se}),Vo]),Mp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=se(a),l=c,u=se(t),v=u,s=n.cM;if(s.$){var d=s.a;return ht(v)?Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return ht(v)?Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Xn=$(function(e,r){return(1&e>>r)===1?0:1}),Dp=function(e){return _([Yl({V:1,W:0,Z:!0}),Bo({a9:Se,cp:Zl,cO:e,bm:ql,c3:0,bu:Se,bv:Se}),Vo])},Ap=y(function(e,r,n){return We(o(ne,function(a){var t=a<<4,i=C(tn,o(Xn,a,0),o(Xn,a,1),o(Xn,a,2),o(Xn,a,3));return p(Ye,e,k(r,i),Dp(t))},o(Yr,1,o(Dn,2,n)-1)))}),qr=function(e){var r=e;return r},Bp=Q$,Fi=function(e){var r=e;return $r(jr(r))},Fp={cB:Ae,c4:To,c5:Co,c7:Lo},Va=function(e){var r=e;return r},Vp=function(e){var r=Va(an(e)),n=He(jr(e)),a=He(Nr(e)),t=He(Rr(e));return Ke({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Ep=$(function(e,r){var n=r;return Vp(o(Ol,n,e))}),Rp=function(e){return o(Ep,Fp,e)},Np=function(e){var r=e;return r.c2},jp=function(e){var r=e;return Rr(r)},Gp=function(e){var r=e;return Nr(r)},Wp=function(e){var r=Np(e.ev),n=tr({cB:Mi(r),c4:jp(r),c5:Gp(r),c7:$r(Fi(r))}),a=En(e.aP),t=a,i=C(kt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=Rp(r),u=o(K,.99,o(ce,se(e.aJ),Bi(Hl(c)))),v=Ul(c),s=v.a,m=v.b,d=v.c,f=zp(p(wl,s,m,d)),g=o(K,1.01,o(hn,f,Bi(Xl(c)))),b=o(Mp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Bp(b).dM,x=w?He($r(Fi(r))):qr(Mi(r)),h=function(){var oe=e.b_;switch(oe.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var me=oe.a;return k(3,me);case 4:var me=oe.a;return k(4,me);default:return k(5,0)}}(),T=h.a,M=h.b,G=e.bE,N=G,R=o(ko,N,e.b0),j=R,W=Ke({dx:0,dy:x.fT,dz:on(j),dA:e.ec,dB:0,dC:x.fX,dD:cn(j),dE:Pp(f),dF:0,dG:x.c6,dH:ln(j),dI:T,dJ:0,dK:w,dL:0,dM:M}),F=ye(Rl,W,l,b,Lp,t,{M:L,U:L,fz:L}),Y=e.bK;switch(Y.$){case 0:var Q=Y.a;return We(_([p(Ye,F.M,k(Q,Za),Gr),p(Ye,F.U,mn,Gr)]));case 1:var Q=Y.a;return We(_([p(Ye,F.M,mn,Gr),_([Ai]),p(Ye,F.fz,Q.be,jl),_([Wl(0)]),p(Ye,F.M,k(Q,Za),kp),p(Ye,F.U,mn,Gr)]));default:var ie=Y.a,ve=Y.b;return We(_([p(Ye,F.M,k(ve,Za),Gr),_([Ai]),o(up,F.fz,ie),p(Ap,F.M,ve,Dr(ie)),p(Ye,F.U,mn,Gr)]))}},Hp=function(e){return o(zn,"width",Be(e))},Xp=$(function(e,r){var n=_([F0(1),j0(0),P0(!0),C(D0,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return B(n,"0",1);case 1:return B(o(z,k0,n),"1",1);default:var M=T.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Li(v),m=o(he,"height",Be(s)+"px"),d=Li(u),f=d/s,g=o(zo,function(T){return Wp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),b=o(he,"width",Be(d)+"px"),w=e.aI,x=w,h=G0(x);return p(R0,"div",_([o(he,"padding","0px"),b,m]),_([k(i,p(X0,t,_([Hp(qe(d*c)),V0(qe(s*c)),b,m,o(he,"display","block"),o(he,"background-color",h)]),g))]))}),Up=function(e){return o(Xp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},Ql=function(e){return e},Vi=Ql({fT:.31271,fX:.32902}),Ip=$(function(e,r){var n=e,a=He(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(ko,r.ce,r.b7),u=l;return{bz:ln(u),ex:n,bG:cn(u),cK:0,bW:on(u),c_:1,fT:-t,fX:-i,c6:-c}}),Op=function(e){return e},Jp=function(e){return Op(1.2*o(Dn,2,e))},et=function(e){return e},qp={$:0},Yp=qp,Kl=function(e){return e},Ei=function(e){var r=e;return r},Zp=function(e){e:for(;;){if(hr(e.e2,Je)&&hr(e.e3,Je))return Ce;if(o(bl,se(e.e2),se(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:$r(e.ei)};e=r;continue e}else{var n=J(Ei(e.e3)/Ar),a=J(Ei(e.e2)/Ar),t=He(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(ko,Kl(1),e.b7),v=u;return{bz:a*ln(v),ex:!1,bG:a*cn(v),cK:n/a,bW:a*on(v),c_:3,fT:i,fX:c,c6:l}}}},Ri=function(e){return Zp({b7:e.b7,e2:e.ce,e3:Je,ei:e.ei})},Qp=function(e){var r=e;return r},eu=function(e){var r=p(Tl,1667,25e3,Qp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ql({fT:n,fX:a})},ru=function(e){return e},Kp=eu(ru(12e3)),e3=eu(ru(5600)),r3=function(e){return{$:2,a:e}},n3=function(e){return r3(e)},a3=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},Un=function(e){var r=e;return r},t3=function(e){var r=e;return r.ex},o3=nu(mn.a),i3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(z,a,i),c):k(i,o(z,a,c))});return p(or,n,k(L,L),r)}),c3=function(e){var r=e;return Ke({dx:r.fT,dy:r.bW,dz:0,dA:0,dB:r.fX,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},l3=ee(function(e,r,n,a,t,i,c,l){var u=o(i3,t3,_([Un(e),Un(r),Un(n),Un(a)])),v=u.a,s=u.b;if(v.b){var m=le(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(a3,o(ne,c3,v),{be:o(Ne,d,g),bL:o(Ne,w,h),bM:o(Ne,t,i),bN:o(Ne,c,l)})}else return o3}else return nu({be:o(Ne,e,r),bL:o(Ne,n,a),bM:o(Ne,t,i),bN:o(Ne,c,l)})}),u3=y(function(e,r,n){return La(l3,e,r,n,Ce,Ce,Ce,Ce,Ce)}),v3=function(e){var r=o(Ip,C0(e.fz),{b7:e3,eG:e.fI,ce:et(8e4)}),n=Ri({b7:Kp,ce:et(2e4),ei:e.ei}),a=Ri({b7:Vi,ce:et(15e3),ei:$r(e.ei)}),t=p(u3,r,n,a);return Up({b1:n3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:Jp(15),bK:t,b_:Yp,b0:Vi})},au=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),$3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),f3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),s3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),m3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Eo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(m3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C($3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(s3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(f3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ro={$:0},d3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ya(c(u)),m=o(fe,s.dR,e),d=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=v;e=m,r=d,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),p3=y(function(e,r,n){var a=ya(e(r));return La(d3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),rt=$(function(e,r){var n=e,a=r;return O(a,n)<1}),iu=function(e){return o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)&&o(rt,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Cn=function(e){var r=e;return r},cu=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=zr(n),c=kr(n),l=Mr(n),u=zr(a),v=kr(a),s=Mr(a),m=zr(t),d=kr(t),f=Mr(t);return iu({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,s,f))})},lu=H$,Le=function(e){return lu(Va(e))},uu=function(e){var r=e;return r},Ea=function(e){return lu(uu(e))},b3=$(function(e,r){var n=e,a=r,t=o(ze,J(a.fT),o(ze,J(a.fX),J(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=pr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return gl}),g3=b3(Kl(1)),vu=y(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return g3(o(fo,a,t))}),h3=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Ea(p(vu,n,a,t));return B({o:i,bU:Le(n)},{o:i,bU:Le(a)},{o:i,bU:Le(t)})},_3=$(function(e,r){return{$:2,a:e,b:r}}),$u=_3({df:3,$7:0,dV:4}),w3=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ne,h3,e)),t=p(p3,cu,r,n);return C(au,t,e,a,0)}else return Ro},Re=y(function(e,r,n){return B(e,r,n)}),fu=function(){var e=gr(1),r=gr(1),n=gr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(de,i,t,a),l=o(K,.5,e),u=p(de,i,t,l),v=o(K,.5,r),s=p(de,i,v,a),m=p(de,i,v,l),d=o(K,.5,n),f=p(de,d,t,a),g=p(de,d,v,a),b=p(de,d,t,l),w=p(de,d,v,l);return Eo(w3(_([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,w),p(Re,u,w,m),p(Re,f,g,w),p(Re,f,w,b),p(Re,c,m,s),p(Re,c,u,m),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,g),p(Re,s,m,w)])))}(),In={$:0},y3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),x3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ea(p(vu,u,l,c)),s={o:v,bU:Le(u)},m={o:v,bU:Le(l)},d={o:v,bU:Le(c)};return o(z,s,o(z,m,o(z,d,n)))}),S3=ar,No=function(e){var r=e;return r.D},T3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Mt=4294967295>>>32-xn,Dt=qu,C3=y(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var v=t.a;return o(Dt,Mt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),L3=function(e){return e>>>5<<5},P3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,L3(n))>-1?re(o(Dt,Mt&e,i)):re(p(C3,a,e,t))}),jo=function(e){var r=e;return r.ah},nt=$(function(e,r){return o(P3,e,jo(r))}),z3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(T3,y(function(c,l,u){return B(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(cl,r,No(e))},k3=y(function(e,r,n){e:for(;;){var a=o(ro,Ee,e),t=a.a,i=a.b;if(O(bt(t),Ee)<0)return o(Rc,!0,{z:r,l:n,p:t});var c=i,l=o(z,Vc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(k3,e,L,0):Bc},M3=y(function(e,r,n){return e(r(n))}),D3=$(function(e,r){return!o(Jc,o(M3,ps,e),r)}),A3=$(function(e,r){return p(or,$(function(n,a){return e(n)?o(z,n,a):a}),L,r)}),B3=function(e){var r=e.a;return r},su=$(function(e,r){var n=B3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(D3,a,r)?{D:r,ah:e}:{D:o(A3,a,r),ah:e}}),F3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=F3({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=qr(r),a=qr(e);return k(B(a.fT,a.fX,a.c6),B(n.fT,n.fX,n.c6))}),Ni=p(An,0,0,0),at=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(rl,o(ta,e,r),t);if(v.$){var m={o:Ni,bU:Le(r)},d={o:Ni,bU:Le(e)},f=u+1,g=u;return B(o(z,B(n,g,f),o(z,B(n,f,a),c)),o(z,m,o(z,d,l)),u+2)}else{var s=v.a;return B(o(z,B(n,s,a),c),l,u)}}),V3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=v,T=a+3,M=ye(at,s,d,f,b,r,ye(at,m,s,g,f,r,ye(at,d,m,b,g,r,t)));e=w,r=x,n=h,a=T,t=M;continue e}else{var G=t,N=G.a,R=G.b;return k(N,Ve(R))}}),E3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,w=p(Qn,o(ta,d,s),f,p(Qn,o(ta,s,m),g,p(Qn,o(ta,m,d),b,t))),x=o(z,B(b,g,f),a),h=e,T=v,M=n+3,G=x,N=w;e=h,r=T,n=M,a=G,t=N;continue e}else return B(a,t,n)}),Tr=y(function(e,r,n){var a=z3(n),t=p(or,x3(r),L,a),i=S(E3,r,a,0,L,S3),c=i.a,l=i.b,u=i.c,v=S(V3,r,l,a,0,B(c,L,u)),s=v.a,m=v.b,d=dl(m)?t:le(t,m);return p(y3,e,o(su,Go(d),s),o(Rn,d,s))}),At=function(e){return{D:o(ne,function(r){return B(3*r,3*r+1,3*r+2)},o(Yr,0,Dr(e)-1)),ah:Go(We(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},mu=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ne,Cn,r);return p(Tr,a,Pr,At(n));case 2:var a=e.a,r=e.b,n=o(ne,Cn,r);return p(Tr,a,Pr,At(n));case 3:var a=e.a,t=e.b;return p(Tr,a,Pr,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 8:return In;case 9:return In;default:return In}},ji=mu(fu),du={$:0},P=du,be=$(function(e,r){return{$:1,a:e,b:r}}),R3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},N3=1029,j3=function(e){return{$:5,a:e}},pu=function(e){var r=e;return j3(r)},G3=pu(N3),W3=1028,H3=pu(W3),Pe=y(function(e,r,n){return r===1?e?o(z,G3,n):o(z,H3,n):n}),bu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(Pe,l,a,m),bu,R3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},gu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(Pe,l,a,m),gu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),hu=$(function(e,r){return{$:3,a:e,b:r}}),X3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},_u={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},U3=E(function(e,r,n,a){return o(hu,n,ee(function(t,i,c,l,u,v,s,m){return S(ae,m,_u,X3,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Ho={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ra=X$,cr=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(Pe,u,t,d),gu,Ho,a,{aN:o(Ra,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),I3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},O3=_e(function(e,r,n,a,t){return o(hu,a,ee(function(i,c,l,u,v,s,m,d){return S(ae,d,_u,I3,t,{aN:o(Ra,Nn(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(Pe,l,a,m),yu,wu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},J3=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(ae,p(Pe,v,i,f),Su,xu,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},q3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,ee(function(m,d,f,g,b,w,x,h){var T=x.a,M=x.b;return S(ae,p(Pe,g,s,h),Su,Tu,v,{b5:e,b8:r,b9:i,ca:a,P:M,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:f,c:d,aW:c,d:w,cS:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Cu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Jn=Xe(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(ae,p(Pe,v,i,f),yu,Cu,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),Y3=function(e){return{$:0,a:e}},Gi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),Z3=function(e){return C(tn,on(e),cn(e),ln(e),1)},Xo=C(tn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Xo)}else{var n=r.a;return k(e,Z3(n))}}),Lu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(Gi,k(t,Xo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Gi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,Y3(a)}}),Q3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),K3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),eb=function(e){return o(De,e,1)},Bt=o(De,0,0),Wr=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Bt)}else{var n=r.a;return k(e,eb(n))}}),Pu=E(function(e,r,n,a){var t=C(K3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(qn,k(u,Xo),o(Wr,u,r),o(Wr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return C(qn,o(oa,u,e),k(u,Bt),o(Wr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return C(qn,o(oa,u,e),o(Wr,u,r),k(u,Bt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return C(qn,o(oa,u,e),o(Wr,u,r),o(Wr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Q3,i,c,l)}}),rb={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},ot=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(Pe,u,t,d),bu,rb,a,{b2:Nn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),zu={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nb=E(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(Pe,l,a,m),zu,xu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),ab=Et(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function(v,s,m,d,f,g,b,w){var x=b.a,h=b.b;return S(ae,p(Pe,d,u,w),zu,Tu,l,{b5:e,b8:r,b9:i,ca:a,P:h,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:s,aW:e,d:g,cS:n,e:v,a$:0,f})}))}),Ln=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),tb=function(e){var r=e;return p(Ln,r.dR,r.dO,.5)},ob=function(e){var r=e;return p(Ln,r.dS,r.dP,.5)},ib=function(e){var r=e;return p(Ln,r.dT,r.dQ,.5)},cb=function(e){return p(de,tb(e),ob(e),ib(e))},H=function(e){var r=Ul(e),n=r.a,a=r.b,t=r.c;return{ey:Va(cb(e)),eS:n/2,eT:a/2,eU:t/2}},Uo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(tt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(U3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(O3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,N=e.c,m=o(Lu,s,N);if(m.$){var g=m.a,b=g.a;g.b;var w=m.b,x=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(nb,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(J3,b,x,h,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(On,d,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(On,d,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(On,d,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(On,d,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,M=e.c,G=e.d,N=e.e,R=C(Pu,T,M,G,N);if(R.$){var Y=R.a,Q=Y.a,ie=Y.b,ve=R.b,oe=ve.a,me=ve.b,ke=R.c,Te=ke.a,mr=ke.b,dr=R.d,x=dr.a,h=dr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Xu(ab,Q,ie,oe,me,Te,mr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return q3(Q)(ie)(oe)(me)(Te)(mr)(x)(h)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var j=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return ye(Jn,j,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return ye(Jn,j,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ye(Jn,j,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(Jn,j,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),it=function(e){var r=e;return r.fT},ct=function(e){var r=e;return r.fX},lt=function(e){var r=e;return r.c6},lb=function(e){var r=e,n=lt(r.c7),a=ct(r.c7),t=it(r.c7),i=lt(r.c5),c=ct(r.c5),l=it(r.c5),u=lt(r.c4),v=ct(r.c4),s=it(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ub=function(e){var r=Va(an(e)),n=He(jr(e)),a=He(Nr(e)),t=He(Rr(e));return{dp:lb(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bY:1}},Hr=$(function(e,r){return{$:5,a:e,b:r}}),ku=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(El,a,e);return o(Hr,i,t);case 1:return o(Hr,e,n);case 3:return o(Hr,e,n);case 2:return o(Hr,e,n);default:return o(Hr,e,n)}}),Mu=$(function(e,r){return o(ku,ub(e),r)}),Na=function(e){return{$:2,a:e}},vb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),$b=O$,fb=I$,Wi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=fb(a),g=f.fT,b=f.fX,w=f.c6,x=f.em,h=$b({em:x,fT:g*s,fX:b*m,c6:w*d});return La(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Ft=$(function(e,r){switch(r.$){case 0:return du;case 5:var n=r.a,a=r.b;return o(Hr,n,o(Ft,e,a));case 1:var t=r.a,i=r.b;return o(be,o(vb,e,t),o(Wi,e,i));case 3:return r;case 2:var i=r.a;return Na(o(Wi,e,i));default:var c=r.a;return Jl(o(ne,Ft(e),c))}}),Io=$(function(e,r){var n=r;return o(Ft,e,n)}),Oo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Au=7682,sb=p(Ao,{cp:0,cO:0,c3:15},{a9:Se,bm:Kr,bu:Se,bv:Du},{a9:Se,bm:Kr,bu:Se,bv:Au}),mb=p(Ao,{cp:0,cO:0,c3:15},{a9:Se,bm:Kr,bu:Se,bv:Au},{a9:Se,bm:Kr,bu:Se,bv:Du}),Jo=$(function(e,r){return e?o(z,mb,r):o(z,sb,r)}),db={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},pb=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(Jo,i,v),db,Oo,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},xa=function(e){var r=pb(e);if(r.$)return P;var n=r.a;return Na(n)},bb=E(function(e,r,n,a){var t=o(Uo,n,fu),i=function(){var s=k(e,r);return s.a?s.b?En(_([t,xa(ji)])):t:s.b?xa(ji):P}(),c=wo(a),l=c.a,u=c.b,v=c.c;return o(Mu,_o(a),o(Io,B(l,u,v),i))}),gb=$(function(e,r){return C(bb,!0,!0,e,r)}),Bu=$(function(e,r){return{$:0,a:e,b:r}}),hb=function(e){var r=uo(e),n=r.cN,a=r.cd,t=r.b6;return p(An,n,a,t)},_b=function(e){return o(Bu,0,zt(hb(e)))},wn=function(e){var r=e;return Fr(r)},wb=$(function(e,r){var n=r;return n/e}),Hi=function(e){var r=e;return{fT:Fr(r),fX:Qr(r)}},yb=$(function(e,r){var n=e.bU,a=e.o;return o(z,{o:Ea(a),bU:Le(n)},r)}),xb=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=ln(l.bU),s=cn(l.bU),m=on(l.bU),d=o(aa,e,m),f=o(ze,r,m),g=o(aa,n,s),b=o(ze,a,s),w=o(aa,t,v),x=o(ze,i,v),h=u;e=d,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=$(function(e,r){var n=ln(e.bU),a=cn(e.bU),t=on(e.bU);return Rt(xb,t,t,a,a,n,n,r)}),Sb=function(e){var r=p(Cc,yb,L,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,No(e)),i=o(Fu,n,a);return C(tu,i,e,t,0)}else return Ro},Xi=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),Sa=function(e){var r=e;return Qr(r)},Vt=function(e){return Br(2*Ar*e)},Tb=Pr,Ui=Tb({cB:Ae,c4:To,c5:Co}),Vu=function(){var e=72,r=o(wb,e,Vt(1)),n=gr(1),a=Ir(ho),t=Ir(yl),i=gr(1),c=o(K,.5,i),l=p(de,Je,Je,c),u=o(K,-.5,i),v=p(de,Je,Je,u),s=function(f){var g=o(K,f,r),b=Ir(o(Xi,Ui,Hi(g))),w=o(K,wn(g),n),x=o(K,Sa(g),n),h=p(de,w,x,c),T=p(de,w,x,u),M=o(ba,e,f+1),G=o(K,M,r),N=Ir(o(Xi,Ui,Hi(G))),R=o(K,wn(G),n),j=o(K,Sa(G),n),W=p(de,R,j,u),F=p(de,R,j,c);return _([B({o:t,bU:v},{o:t,bU:W},{o:t,bU:T}),B({o:b,bU:T},{o:N,bU:W},{o:N,bU:F}),B({o:b,bU:T},{o:N,bU:F},{o:b,bU:h}),B({o:a,bU:l},{o:a,bU:h},{o:a,bU:F})])},m=o(ne,s,o(Yr,0,e-1)),d=At(We(m));return Eo(Sb(d))}(),Ii=mu(Vu),Cb=function(e){var r=Dl(e),n=so(r),a=n.a,t=n.b;return tr({cB:Al(e),c4:a,c5:t,c7:r})},Lb=E(function(e,r,n,a){var t=Cb(Po(a)),i=o(Uo,n,Vu),c=function(){var m=k(e,r);return m.a?m.b?En(_([i,xa(Ii)])):i:m.b?xa(Ii):P}(),l=Fl(a),u=l,v=Bl(a),s=v;return o(Mu,t,o(Io,B(u,u,s),c))}),Pb=$(function(e,r){return C(Lb,!0,!0,e,r)}),Oi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Ji={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},dn=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=qr(n),c=qr(a),l=qr(t);return Ke({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Yn=$u(_([B({cZ:0},{cZ:1},{cZ:2})])),zb=$(function(e,r){var n=cu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(be,a,ee(function(h,T,M,G,N,R,j,W){return S(ae,p(Pe,G,0,W),Oi,Wo,Yn,{aw:t,b:M,c:T,d:R,e:h,br:dn(r),f:N})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(be,a,ee(function(h,T,M,G,N,R,j,W){return S(ae,p(Pe,G,0,W),Oi,Ho,Yn,{aN:o(Ra,Nn(c),i),b:M,c:T,d:R,e:h,br:dn(r),f:N})}));case 2:e.a;var l=e.b,f=e.c,u=o(Lu,l,f);if(u.$)return P;var v=u.a;return o(be,a,ee(function(h,T,M,G,N,R,j,W){var F=j.a,Y=j.b;return S(ae,p(Pe,G,0,W),Ji,wu,Yn,{P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:M,c:T,d:R,e:h,br:dn(r),f:N})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=C(Pu,s,m,d,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(be,a,ee(function(h,T,M,G,N,R,j,W){var F=j.a,Y=j.b;return S(ae,p(Pe,G,0,W),Ji,Cu,Yn,{b4:b,P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:x,b:M,c:T,d:R,cR:w,e:h,br:dn(r),f:N})}))}}),kb=function(){var e=_([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=_([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Rn,e,r)}(),Mb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},qi=function(e){return Na(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Jo,t,u),Mb,Oo,kb,{b:a,c:n,d:c,e:r,bZ:l,br:dn(e),f:i})}))},Db=E(function(e,r,n,a){var t=o(zb,n,a),i=k(e,r);return i.a?i.b?En(_([t,qi(a)])):t:i.b?qi(a):P}),Ab=$(function(e,r){return C(Db,!0,!0,e,r)}),Bb=$(function(e,r){var n=Mr(r),a=Mr(e),t=kr(r),i=kr(e),c=zr(r),l=zr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Fb=function(e){var r=yo(e),n=r.a,a=r.b;return o(Bb,n,a)},Yi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Vb=$(function(e,r){return{$:1,a:e,b:r}}),Eb=Vb({df:2,$7:0,dV:1}),Zi=Eb(_([k({dw:0},{dw:1})])),Rb=$(function(e,r){var n=Fb(r),a=H(n),t=yo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(be,a,ee(function(v,s,m,d,f,g,b,w){return S(ae,w,Yi,Wo,Zi,{aw:l,du:Le(c),dv:Le(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,m,d,f,g,b,w,x){return S(ae,x,Yi,Ho,Zi,{aN:o(Ra,Nn(u),l),du:Le(c),dv:Le(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return P;default:return P}}),Nb=$(function(e,r){return o(Rb,e,r)}),Qi=$(function(e,r){var n=e,a=r;return n/a}),jb=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(z,i,t);if(hr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),Ki=$(function(e,r){return e<1?L:S(jb,0,e,e,r,L)}),Gb=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(z,{o:Ea(a),bU:Le(n),L:o(De,c,l)},r)}),Wb=function(e){var r=p(Cc,Gb,L,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,No(e)),i=o(Fu,n,a);return C(ou,i,e,t,0)}else return Ro},Eu=$(function(e,r){var n=e,a=r,t=Fr(a);return{fT:t*Fr(n),fX:t*Qr(n),c6:Qr(a)}}),Hb=function(){var e=gr(1),r=72,n=o(Yr,0,r-1),a=o(Ki,r,o(Ln,Je,Vt(1))),t=Kt(r/2),i=o(Yr,0,t-1),c=o(Ki,t,o(Ln,sn(90),sn(-90))),l=Go(We(o(ne,function(s){return o(ne,function(m){return{o:Ir(o(Eu,s,m)),bU:p(de,o(K,wn(m)*wn(s),e),o(K,wn(m)*Sa(s),e),o(K,Sa(m),e)),L:k(o(Qi,s,Vt(1)),o(Qi,o(hn,sn(90),m),sn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=We(o(ne,function(s){return We(o(ne,function(m){var d=o(u,s+1,m),f=o(u,s,m),g=o(u,s+1,m+1),b=o(u,s,m+1);return _([B(b,g,d),B(b,d,f)])},i))},n));return Eo(Wb(o(su,l,v)))}(),Ta=72,Zn=2*Ta,Xb=$(function(e,r){e:for(;;){var n=Zn+1,a=o(ba,Zn,2*e+3),t=o(ba,Zn,2*e+2),i=2*e+1,c=2*e,l=Zn,u=o(z,B(l,c,t),o(z,B(c,a,t),o(z,B(c,i,a),o(z,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Ub=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ib=$(function(e,r){e:for(;;){var n=p(Ub,0,2*Ar,e/Ta),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(z,a,o(z,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Ob=function(){var e=o(Ib,Ta-1,_([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(Xb,Ta-1,L);return o(Rn,e,r)}(),Jb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},ec=function(e){return Na(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Jo,!0,u),Jb,Oo,Ob,{aw:p(An,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},qb=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bY:1}},Yb=$(function(e,r){return o(ku,qb(e),r)}),Zb=E(function(e,r,n,a){var t=o(Uo,n,Hb),i=function(){var u=k(e,r);return u.a?u.b?En(_([t,ec()])):t:u.b?ec():P}(),c=So(a),l=c;return o(Yb,o(wa,Ae,xo(a)),o(Io,B(l,l,l),i))}),Qb=$(function(e,r){return C(Zb,!0,!0,e,r)}),Kb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),eg=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),rg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Bu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Kb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Sl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(eg,n,a,t,i,c)}},ng=rg,Ru=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(gb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Ab,t,n)]);case 3:var t=e.a,a=e.b;return _([o(Qb,ng(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Pb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Nb,_b(c),l)]);default:var u=e.a;return o(zo,Ru,u)}},ag=function(e){return o(zo,Ru,e)},tg=$(function(e,r){return v3({aI:S0(e.es),ev:e.ev,aJ:T0(.5),cb:e.cb,aK:k(Ci(qe(e.cT.fR)),Ci(qe(e.cT.eW))),aP:ag(r),fz:!0,fI:o(Eu,Br(e.fH),Br(e.fJ)),ei:Lo})}),og=$(function(e,r){return o(tg,{es:p(Nd,46,46,46),ev:Rd({dj:{fT:0,fX:4,c6:8},aR:{fT:0,fX:0,c6:0},ei:{fT:0,fX:1,c6:0}}),cb:e.cb,cT:e.cT,fH:-Si(135),fJ:-Si(45)},o(x0,e,r))}),ig=p(wd,og,xd,yd);const cg={Main:{init:ig(o(A,function(e){return Me({e1:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(m){return Me({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",ma(Tn)))},o(D,"left",Z))},o(D,"pressedKeys",ma(Tn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},lg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},ug=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},vg=cg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});ug();lg(vg);
