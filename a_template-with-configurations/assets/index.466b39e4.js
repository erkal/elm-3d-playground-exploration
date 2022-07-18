const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function xr(e,r,n){return n.a=e,n.f=r,n}function $(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return xr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return xr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ye(e){return xr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return xr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return xr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return xr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function La(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ju=[];function Ou(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Xu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}$(yr);$(function(e,r){return!yr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var ev=$(function(e,r){var n=J(e,r);return n<0?Pc:n?jf:Lc}),zn=0;function z(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function Xe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var rv=$(ar);function h(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ye(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Pa(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Pa(r).sort(function(n,a){var t=o(e,n,a);return t===Lc?0:t===Pc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var av=$(Math.pow);$(function(e,r){return r%e});var tv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin,lv=Math.tan,uv=Math.atan;$(Math.atan2);function vv(e){return e}function $v(e){return e===1/0||e===-1/0}var fv=Math.ceil,sv=Math.floor,dv=Math.round,mv=Math.sqrt,Jo=Math.log,pv=isNaN;function bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function _v(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function wv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var yv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),xv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),Cv=y(function(e,r,n){return n.slice(e,r)});function Lv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Pv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),zv=$(function(e,r){return r.indexOf(e)>-1}),kv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Tv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function ec(e){return e+""}function Mv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function Dv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function Av(e){return Pa(e).join("")}function Bv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Fv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vv(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var Rv=Nt(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Uv=Nt(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),Ev=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Wv=$(function(e,r){return{$:10,b:r,h:e}}),Gv=$(function(e,r){return Sr(e,[r])}),Yv=y(function(e,r,n){return Sr(e,[r,n])});R(function(e,r,n,a){return Sr(e,[r,n,a])});he(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});Ye(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(Kt,"This is not valid JSON! "+a.message,r))}});var rc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return Nn(r)?Oo(e.b,r,h):Ze("a LIST",r);case 4:return Nn(r)?Oo(e.b,r,Hv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:ye(o(li,n,v.a));case 7:var a=e.e;if(!Nn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:ye(o(zc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Ze("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return ye(o(li,i,v.a));t=ar(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ie(v))return v;s=ar(v.a,s)}return ye(Nf(Fe(s)));case 1:return ye(o(Kt,e.a,r));case 0:return ue(e.a)}}function Oo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return ye(o(zc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Hv(e){return o(ts,e.length,function(r){return e[r]})}function Ze(e,r){return ye(o(Kt,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function nc(e){return e}y(function(e,r,n){return n[e]=r,n});function jr(e){return{$:0,a:e}}function Jv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var ft=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Ov(e){return{$:5,b:e}}var qv=0;function Wt(e){var r={$:0,e:qv++,f:e,g:null,h:[]};return Gt(r),r}function ac(e){return pr(function(r){r(jr(Wt(e)))})}function tc(e,r){e.h.push(r),Gt(e)}var Zv=$(function(e,r){return pr(function(n){tc(e,r),n(jr(zn))})}),Na=!1,Zo=[];function Gt(e){if(Zo.push(e),!Na){for(Na=!0;e=Zo.shift();)Xv(e);Na=!1}}function Xv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Yt(e,r,n,a,t,i){var c=o(rc,e,r?r.flags:void 0);Ie(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Qo(l,b.b,t(v))}return Qo(l,u.b,t(v)),d?{ports:d}:{}}var Ke={};function Qv(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=e$(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function e$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,Ov(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Wt(o(ft,l,e.b))}var r$=$(function(e,r){return pr(function(n){e.g(r),n(jr(zn))})});$(function(e,r){return o(Zv,e.h,{$:0,a:r})});function oc(e){return function(r){return{$:1,k:e,l:r}}}function n$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Xo=[],Wa=!1;function Qo(e,r,n){if(Xo.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=Xo.shift();)a$(a.p,a.q,a.r);Wa=!1}}function a$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)tc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=t$(e,t,a,r.l);n[t]=o$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function t$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function o$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function i$(e){Ke[e]&&nn(3)}$(function(e,r){return r});function c$(e,r){return i$(e),Ke[e]={f:l$,u:r,a:u$},oc(e)}var l$=$(function(e,r){return function(n){return e(r(n))}});function u$(e,r){var n=P,a=Ke[e].u,t=jr(null);Ke[e].b=t,Ke[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(rc,a,c);Ie(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document!="undefined"?document:{};function Ht(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var ic=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:It(n),e:t,f:e,b:i}})}),Nr=ic(void 0),v$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:It(n),e:t,f:e,b:i}})}),$$=v$(void 0);function f$(e,r,n,a){return{$:3,d:It(e),g:r,h:n,i:a}}var s$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Cr([e,r],function(){return e(r)})});y(function(e,r,n){return Cr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return Cr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Cr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ye(function(e,r,n,a,t,i){return Cr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return Cr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Cr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return Cr([e,r,n,a,t,i,c,l,u],function(){return La(e,r,n,a,t,i,c,l,u)})});var cc=$(function(e,r){return{$:"a0",n:e,o:r}}),d$=$(function(e,r){return{$:"a1",n:e,o:r}}),lc=$(function(e,r){return{$:"a2",n:e,o:r}}),Lr=$(function(e,r){return{$:"a3",n:e,o:r}}),m$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function p$(e){return e=="script"?"p":e}function b$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(cc,r.n,g$(e,r.o)):r});function g$(e,r){var n=to(r);return{$:r.$,a:n?p(os,n<3?h$:_$,De(e),r.a):o($a,e,r.a)}}var h$=$(function(e,r){return z(e(r.a),r.b)}),_$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function It(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ko(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ko(c,t,i):c[t]=i}return r}function Ko(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ht(c,_r(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?w$(e,t):a==="a0"?S$(e,r,t):a==="a3"?y$(e,t):a==="a4"?x$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function w$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function y$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function x$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function S$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=C$(r,i),e.addEventListener(t,c,Jt&&{passive:to(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function C$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=to(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function L$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function uc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=B$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!P$(d,m):d!==m)&&_e(n,2,a,m),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ei(e,r,n,a,z$);return;case 2:ei(e,r,n,a,k$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Ot(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function P$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Ot(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&L$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function k$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,T=void 0,N=void 0;if(w===x){f++,Je(_,C,t,f),f+=_.b||0,d++,m++;continue}var E=l[d+1],U=u[m+1];if(E){var j=E.a,W=E.b;N=x===j}if(U){var B=U.a,O=U.b;T=w===B}if(T&&N){f++,Je(_,O,t,f),vn(i,t,w,C,m,c),f+=_.b||0,f++,$n(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,vn(i,t,x,C,m,c),Je(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,$n(i,t,w,_,f),f+=_.b||0,f++,Je(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(E&&j===B){f++,$n(i,t,w,_,f),vn(i,t,x,C,m,c),f+=_.b||0,f++,Je(W,O,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];vn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var vc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+vc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}$n(e,r,n+vc,a,t)}function $c(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)$c(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=fn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function fc(e,r,n,a){return n.length===0?e:($c(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=T$(t,a);t===e&&(e=i)}return e}function T$(e,r){switch(r.$){case 0:return M$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return D$(e,r);case 5:return r.s(e);default:nn(10)}}function M$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function D$(e,r){var n=r.s,a=A$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ht(e,a),e}function A$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ht(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function qt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Lr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(qt(v[a]),u);return p(Nr,l,r,u)}function B$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var F$=R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=qt(l);return sc(i,function(v){var s=c(v),d=uc(u,s);l=fc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=ur.title,v=ur.body,s=qt(v);return sc(i,function(d){ca=c;var m=l(d),f=Nr("body")(P)(m.eu),g=uc(s,f);v=fc(v,s,g,t),s=f,ca=0,u!==m.fL&&(ur.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function sc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(co,oo,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(co,oo,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(co,oo,pr(function(){history.replaceState({},"",r),e()}))});var V$={addEventListener:function(){},removeEventListener:function(){}},R$=typeof window!="undefined"?window:V$;y(function(e,r,n){return ac(pr(function(a){function t(i){Wt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?te(n.a):q});function dc(e,r){return pr(function(n){ua(function(){var a=document.getElementById(e);n(a?jr(r(a)):Jv(cs(e)))})})}function U$(e){return pr(function(r){ua(function(){r(jr(e()))})})}$(function(e,r){return dc(r,function(n){return n[e](),zn})});$(function(e,r){return U$(function(){return R$.scroll(e,r),zn})});y(function(e,r,n){return dc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var E$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var j$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(L(ll,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(L(ll,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ri=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var N$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},W$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),G$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Y$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),H$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),I$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),J$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),O$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),q$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Z$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),X$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Q$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},K$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},ef=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},pc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},rf=function(e){e.gl.disable(e.gl.CULL_FACE)},nf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},af=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},tf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ni=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],of=[Q$,K$,ef,mc,pc,rf,nf,af,tf];function ai(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function cf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function bc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function lf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=bc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Zt(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function uf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=vf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Zt(r.b),indexBuffer:null,buffers:{}}}function vf(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ti(e,r){return e+"#"+r}var gc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mc(n),pc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ti(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ri++,v||(v=ai(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ri++,s||(s=ai(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=cf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=$f(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ti(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),ff(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=uf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=lf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=bc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,yn(M0(n),i.a),u=0;u<ni.length;u++){var T=n[ni[u]];T.toggle!==n.toggle&&T.enabled&&(of[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function $f(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function ff(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var sf=y(function(e,r,n){return f$(r,{g:n,f:{},h:e},_f,wf)}),df=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),mf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),pf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),bf=$(function(e,r){e.contextAttributes.antialias=!0}),gf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),hf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function _f(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(T0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),N$(function(){return o(gc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function wf(e,r){return r.f=e.f,gc(r)}var yf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/xf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function xf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Xt=new Float64Array(3),oi=new Float64Array(3),ii=new Float64Array(3),Sf=y(function(e,r,n){return new Float64Array([e,r,n])}),Cf=function(e){return e[0]},Lf=function(e){return e[1]},Pf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var zf=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(hc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(hc(e,r,n),n)}$(_c);function wc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var kf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=Xt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var Tf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Mf=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Df=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Af(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Af(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Bf=new Float64Array(16),Ff=new Float64Array(16),Vf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Rf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ye(yc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return yc(c,l,i,t,n,a)});function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ye(xc);R(function(e,r,n,a){return xc(e,r,n,a,-1,1)});function Sc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],E=r[3],U=r[4],j=r[5],W=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],me=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+b*E,n[1]=t*C+u*T+m*N+w*E,n[2]=i*C+v*T+f*N+x*E,n[3]=c*C+s*T+g*N+_*E,n[4]=a*U+l*j+d*W+b*B,n[5]=t*U+u*j+m*W+w*B,n[6]=i*U+v*j+f*W+x*B,n[7]=c*U+s*j+g*W+_*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+_*ve,n[12]=a*oe+l*me+d*Me+b*Se,n[13]=t*oe+u*me+m*Me+w*Se,n[14]=i*oe+v*me+f*Me+x*Se,n[15]=c*oe+s*me+g*Me+_*Se,n}$(Sc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],E=r[9],U=r[10],j=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*E+v*U,n[9]=t*N+l*E+s*U,n[10]=i*N+u*E+d*U,n[11]=0,n[12]=a*j+c*W+v*B+m,n[13]=t*j+l*W+s*B+f,n[14]=i*j+u*W+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Xt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/wc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,T=g-f,N=c*c*v+u,E=w+d,U=b+m,j=w-d,W=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],me=n[6],Me=n[7],Se=n[8],gr=n[9],hr=n[10],ja=n[11],Nu=n[12],Wu=n[13],Gu=n[14],Yu=n[15];return a[0]=B*x+ve*_+Se*C,a[1]=O*x+oe*_+gr*C,a[2]=Q*x+me*_+hr*C,a[3]=ie*x+Me*_+ja*C,a[4]=B*T+ve*N+Se*E,a[5]=O*T+oe*N+gr*E,a[6]=Q*T+me*N+hr*E,a[7]=ie*T+Me*N+ja*E,a[8]=B*U+ve*j+Se*W,a[9]=O*U+oe*j+gr*W,a[10]=Q*U+me*j+hr*W,a[11]=ie*U+Me*j+ja*W,a[12]=Nu,a[13]=Wu,a[14]=Gu,a[15]=Yu,a});function Uf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Uf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ef(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Ef);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=_c(e,r,Xt),t=va(mt(n,a,oi),oi),i=va(mt(a,t,ii),ii),c=Bf,l=Ff;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Sc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=rv,Wn=Qu,Cc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Qt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ci=function(e){return p(Qt,y(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Lc=1,jf=2,Pc=0,ye=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),li=$(function(e,r){return{$:0,a:e,b:r}}),zc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Nf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Wf=Pv,Gf=Iv,Be=ec,Mr=$(function(e,r){return o(Sv,e,Pa(r))}),eo=$(function(e,r){return h(o(xv,e,r))}),kc=function(e){return o(Mr,`
    `,o(eo,`
`,e))},kn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ur=function(e){return p(kn,$(function(r,n){return n+1}),0,e)},Yf=nv,Hf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Qr=$(function(e,r){return p(Hf,e,r,P)}),Tc=$(function(e,r){return p(Yf,e,o(Qr,0,Ur(r)-1),r)}),er=Bv,Mc=function(e){var r=er(e);return 97<=r&&r<=122},Dc=function(e){var r=er(e);return r<=90&&65<=r},If=function(e){return Mc(e)||Dc(e)},Jf=function(e){var r=er(e);return r<=57&&48<=r},Of=function(e){return Mc(e)||Dc(e)||Jf(e)},Fe=function(e){return p(kn,A,P,e)},an=hv,qf=$(function(e,r){return`

(`+(Be(e+1)+(") "+kc(Zf(r))))}),Zf=function(e){return o(Xf,e,P)},Xf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return If(x)&&o(Wf,Of,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Mr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Ur(s))+" ways:"));return o(Mr,`

`,o(A,g,o(Tc,qf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Mr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Mr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(kc(o(Gf,4,f))+(`

`+m))}}),Ve=32,pt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Ju,ro=fv,no=$(function(e,r){return Jo(r)/Jo(e)}),Qf=vv,xn=ro(o(no,2,Ve)),Ac=L(pt,0,xn,bt,bt),Bc=qu,Fc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Vc=sv,gt=Ou,rr=$(function(e,r){return J(e,r)>0?e:r}),Kf=function(e){return{$:0,a:e}},ao=Zu,es=$(function(e,r){e:for(;;){var n=o(ao,Ve,e),a=n.a,t=n.b,i=o(A,Kf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),rs=function(e){var r=e.a;return r},ns=$(function(e,r){e:for(;;){var n=ro(r/Ve);if(n===1)return o(ao,Ve,e).a;var a=o(es,e,P),t=n;e=a,r=t;continue e}}),Rc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Vc(o(no,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(ns,t,r.l);return L(pt,gt(r.p)+n,o(rr,5,a*xn),i,r.p)}else return L(pt,gt(r.p),xn,bt,r.p)}),as=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Rc,!1,{z:a,l:n/Ve|0,p:t});var i=Fc(p(Bc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ts=$(function(e,r){if(e<=0)return Ac;var n=e%Ve,a=p(Bc,n,e-n,r),t=e-n-Ve;return S(as,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Wv,Z=Rv,M=Nv,$e=Uv,$a=Gv,os=Yv,De=Vv,to=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Nr("div"),is=function(e){return{$:2,a:e}},Uc=$(function(e,r){return e}),Ec=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Ar=function(e){return e},cs=Ar,ui=Ye(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ls=zv,Dr=_v,Jr=Cv,Tn=$(function(e,r){return e<1?r:p(Jr,e,Dr(r),r)}),za=Tv,ka=function(e){return e===""},Ta=$(function(e,r){return e<1?"":p(Jr,0,e,r)}),jc=Mv,vi=he(function(e,r,n,a,t){if(ka(t)||o(ls,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=jc(o(Tn,c+1,t));if(l.$===1)return q;var u=l;return te(we(ui,e,o(Ta,c,t),u,r,n,a))}else return te(we(ui,e,t,q,r,n,a))}),$i=R(function(e,r,n,a){if(ka(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return S(vi,e,o(Tn,i,a),r,n,o(Ta,i,a))}else return S(vi,e,"/",r,n,a)}),fi=y(function(e,r,n){if(ka(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return L($i,e,te(o(Tn,t+1,n)),r,o(Ta,t,n))}else return L($i,e,q,r,n)});$(function(e,r){if(ka(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(fi,e,te(o(Tn,a+1,r)),o(Ta,a,r))}else return p(fi,e,q,r)});var us=kv,oo=function(e){},Mn=jr,vs=Mn(0),Nc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(kn,e,r,Fe(d)):L(Nc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return L(Nc,e,r,0,n)}),re=$(function(e,r){return p(br,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=ft,io=$(function(e,r){return o(fa,function(n){return Mn(e(n))},r)}),$s=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Mn(o(e,a,t))},n)},r)}),fs=function(e){return p(br,$s(A),Mn(P),e)},ss=r$,ds=$(function(e,r){var n=r;return ac(o(fa,ss(e),n))}),ms=y(function(e,r,n){return o(io,function(a){return 0},fs(o(re,ds(e),r)))}),ps=y(function(e,r,n){return Mn(0)}),bs=$(function(e,r){var n=r;return o(io,e,n)});Ke.Task=Kv(vs,ms,ps,bs);var gs=oc("Task"),co=$(function(e,r){return gs(o(io,e,r))}),hs=F$,_s=bv,sa={$:1},Wc=function(e){return{$:2,a:e}},Ma={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},ws=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Gc=function(e){var r=e.b;return o(Ne,Ma,r)},sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ys=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Gc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,tn(n).db)>0?o(ae,ws,sr(o(Ne,sa,t))):Ar)(o(Ne,Wc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ec,l.eA,Xe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,Ma,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Yc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),xs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Ss=$(function(e,r){return Fe(p(xs,e,r,P))}),Hc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Ss,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Hc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Cs=$(function(e,r){return p(Hc,0,e,r)}),Ls=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(h([a]),t)),c=o(Cs,e,i),l=o(Yc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,sa,{B:d,ab:P,T:m})}else return r}}),Ps=function(e){var r=e.b;return o(Ne,sa,r)},zs=function(e){var r=e.b;return o(Ne,Wc({cX:tn(e).db}),r)},ks=$(function(e,r){switch(e.$){case 1:return Ps(r);case 2:return Gc(r);case 3:return zs(r);default:var n=e.a;return o(Ls,n,r)}}),Ic=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ts=$(function(e,r){return Xe(r,{av:e(r.av)})}),Ms=function(e){return{$:3,a:e}},Jc=function(e){return{$:2,a:e}},Oc=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),ze=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),X=function(e){return e<0?-e:e},lo=Dv,As=y(function(e,r,n){return o(sr,0/0,lo(o(e,r,n)))}),qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Bs=yv,Zc=function(e){return p(Bs,A,P,e)},Fs=$(function(e,r){var n=o(qc,function(a){return a!=="0"&&a!=="."},Zc(r));return le(e&&n?"-":"",r)}),be=ec,ht=gv,Xc=Fv,Qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",Qc(t))}else{var i=er(r);return i>=48&&i<57?o(ht,Xc(i+1),n):"0"}},_t=$v,Vs=pv,Da=function(e){return o(ht,e,"")},Kc=y(function(e,r,n){return e<=0?n:p(Kc,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(Kc,e,r,"")}),wt=y(function(e,r,n){return le(n,o(Sn,e-Dr(n),Da(r)))}),yt=wv,el=function(e){var r=o(eo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Rs=function(e){var r=o(eo,"e",be(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(sr,0,jc(o(us,"+",t)?o(Tn,1,t):t)),c=el(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(sr,"0",o(ze,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ze,Ic(Da),an(le(o(Sn,X(i),"0"),v))))):p(wt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Us=y(function(e,r,n){if(_t(n)||Vs(n))return be(n);var a=n<0,t=el(Rs(X(n))),i=t.a,c=t.b,l=Dr(i)+r,u=le(o(Sn,-l+1,"0"),p(wt,l,"0",le(i,c))),v=Dr(u),s=o(rr,1,l),d=o(e,a,p(Jr,s,v,u)),m=p(Jr,0,s,u),f=d?yt(o(sr,"1",o(ze,Qc,an(yt(m))))):m,g=Dr(f),b=f==="0"?f:r<=0?le(f,o(Sn,X(r),"0")):J(r,Dr(c))<0?p(Jr,0,g-r,f)+("."+p(Jr,g-r,g,f)):le(i+".",p(wt,r,"0",c));return o(Fs,a,b)}),rl=Us($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Es=As(rl),js=y(function(e,r,n){var a=o(no,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),nl=ev,Aa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(nl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},Kr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(Y,0,r,n,S(Y,1,v,s,d,m),S(Y,1,i,c,l,u))}else return S(Y,e,i,c,S(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(Y,0,v,s,S(Y,1,g,b,w,x),S(Y,1,r,n,m,t))}else return S(Y,e,r,n,a,t)}),xt=y(function(e,r,n){if(n.$===-2)return S(Y,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(nl,e,t);switch(u){case 0:return S(Kr,a,t,i,p(xt,e,r,c),l);case 1:return S(Y,a,t,r,c,l);default:return S(Kr,a,t,i,c,p(xt,e,r,l))}}),bn=y(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(Y,1,t,i,c,l)}else{var u=a;return u}}),Ns=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},al=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(Y,0,f,g,S(Y,1,n,a,S(Y,0,i,c,l,u),b),S(Y,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(Y,1,n,a,S(Y,0,i,c,l,u),S(Y,0,s,d,m,x))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(Y,0,i,c,S(Y,1,u,v,s,d),S(Y,1,n,a,m,S(Y,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return S(Y,1,n,a,S(Y,0,i,c,C,m),S(Y,0,g,b,w,x))}else return e},Ws=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(Y,n,l,u,v,S(Y,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(Y,r,n,a,ea(t),l);var u=al(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,ea(m),f)}else return tr}else return S(Y,r,n,a,ea(t),l)}else return tr},gn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(Y,n,a,t,o(gn,e,i),c);var u=al(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,o(gn,e,m),f)}else return tr}else return S(Y,n,a,t,o(gn,e,i),c);else return o(Gs,e,jt(Ws,e,r,n,a,t,i,c))}),Gs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=Ns(c);if(l.$===-1){var u=l.b,v=l.c;return S(Kr,n,u,v,i,ea(c))}else return tr}else return S(Kr,n,a,t,i,o(gn,e,c))}else return tr}),Ys=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(Y,1,a,t,i,c)}else{var l=n;return l}}),Gn=y(function(e,r,n){var a=r(o(Aa,e,n));if(a.$)return o(Ys,e,n);var t=a.a;return p(bn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ds,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Oc,z(i,c),p(js,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){return a.$===3?Ms(n):a}));default:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){return a.$===2?Jc(n):a}))}},Is=function(e){return Ts(Hs(e))},Js=$(function(e,r){return o(re,Is(e),r)}),Os=$(function(e,r){return Xe(r,{eA:o(Js,e,r.eA)})}),qs=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Xe(a,{B:o(Ic,Os(e),a.B)}))}),Zs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Xs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Xe(t,{B:o(Zs,o(e,i.a,r),i)}))}),Qs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Xe(a,{aL:!a.aL});case 2:var t=n.a;return Xe(a,{G:p(ys,e,t,a.G)});case 3:var i=n.a;return Xe(a,{G:o(qs,i,a.G)});case 4:var c=n.a;return Xe(a,{G:p(Xs,r,c,a.G)});default:var l=n.a;return Xe(a,{G:o(ks,l,a.G)})}}),Ks=$(function(e,r){return o(Ne,Ma,{B:z(e,r(e)),ab:P,T:P})}),ed=n$,di=ed(P),da=jv,Cn=Ev,rd=c$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Cn)))},o(M,"left",Z))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),nd=function(e){return{$:4,a:e}},ad={$:0},td=nc,He=$(function(e,r){return o(lc,e,td(r))}),H=He("className"),od=function(e){var r=e.b.B;return r.b},ma=He("id"),id=s$,pa=id,cd=d$,se=cd,ld={$:1},ud=function(e){return{$:3,a:e}},vd=function(e){return{$:5,a:e}},mi=Nr("a"),uo=Nr("button"),pi=function(e){return o(He,"href",b$(e))},$d=Lr("clip-rule"),Ce=Lr("d"),fd=Lr("fill"),tl=ic("http://www.w3.org/2000/svg"),sd=tl("svg"),dd=Lr("viewBox"),md=o(m$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=sd(h([dd("0 0 24 24"),fd("currentColor"),o(se,"width","100%"),o(se,"height","100%"),md("http://www.w3.org/2000/svg")])),pd=Lr("fill-rule"),Le=tl("path"),qr={eD:Re(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(h([o(Le,h([pd("evenodd"),$d("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},bd=function(e){return{$:0,a:e}},ol=cc,il=$(function(e,r){return o(ol,e,bd(r))}),vo=function(e){return o(il,"click",De(e))},bi=He("target"),gd=He("title"),St=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(Y,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),hd=st,dr=hd,_d=function(e){return p(Qt,y(function(r,n,a){return o(A,n,a)}),P,e)},wd=$(function(e,r){return{$:3,a:e,b:r}}),yd=$(function(e,r){return{$:2,a:e,b:r}}),xd=$(function(e,r){return{$:0,a:e,b:r}}),Sd=$(function(e,r){return{$:1,a:e,b:r}}),Dn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$o=L(Dn,0/255,0/255,0/255,1),Cd=nc,Ld=$(function(e,r){return o(lc,e,Cd(r))}),Pd=Ld("checked"),Oe=dv,zd=y(function(e,r,n){return le(o(Sn,e-Dr(n),Da(r)),n)}),ba=tv,cl=function(e){var r=function(n){return n<10?Be(n):Da(Xc(87+n))};return e<16?r(e):le(cl(e/16|0),r(o(ba,16,e)))},kd=o(ae,cl,o(zd,2,"0")),fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Td=function(e){var r=fo(e),n=r.cM,a=r.cc,t=r.b5;return o(Mr,"",o(A,"#",o(re,o(ae,Oe,kd),h([n*255,a*255,t*255]))))},Ct=He("htmlFor"),Md=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Dd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ba=$(function(e,r){return p(br,Dd(e),P,r)}),ll=R(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Ad=j$,Bd=Av,Fd=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Vd=E$,Rd=function(e){return o(Vd,{ew:!1,fg:!1},e)},Fa=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Ud=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Ed=function(e){return{$:2,a:e}},jd=function(e){return{$:0,a:e}},Nd=function(e){return{$:1,a:e}},Ga=$(function(e,r){return er(r)-er(e)}),Ya=y(function(e,r,n){var a=er(n);return J(er(e),a)<1&&J(a,er(r))<1}),Wd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Nd(r))},a=p(Ya,"0","9",r)?ue(o(Ga,"0",r)):p(Ya,"a","z",r)?ue(10+o(Ga,"a",r)):p(Ya,"A","Z",r)?ue(10+o(Ga,"A",r)):ye(jd(r));return o(ga,n,a)}),ul=$(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return ue(c+l*e)},o(ul,e,i))},o(Wd,e,t))}),Gd=$(function(e,r){return 2<=e&&e<=36?o(ul,e,yt(r)):ye(Ed(e))}),Yd=Gd(16),Hd=y(function(e,r,n){return L(Dn,e,r,n,1)}),Id=R(function(e,r,n,a){return L(Dn,e,r,n,a)}),An=av,Jd=$(function(e,r){var n=o(An,10,e);return Oe(r*n)/n}),Od=Lv,qd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zc(n);if(a.b&&!a.b.b){var t=a.a;return Bd(h([t,t]))}else return n};return o(ae,Od,o(ae,function(n){return o(ze,function(a){return p(Ad,1,a,n)},Rd(e))},o(ae,Md(Fa),o(ae,ze(function(n){return n.fG}),o(ae,ze(Ba(Ar)),o(ae,Fd("Parsing hex regex failed"),ga(function(n){var a=o(re,o(ae,r,o(ae,Yd,Ud(Qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(Id,t/255,c/255,u/255,o(Jd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Hd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ha=Nr("input"),Lt=Nr("label"),Pt=He("name"),vl=$(function(e,r){return p(br,M,r,e)}),Zd=o(vl,h(["target","checked"]),Z),Xd=function(e){return o(il,"change",o($a,e,Zd))},Qd=function(e){return z(e,!0)},Kd=function(e){return{$:1,a:e}},em=$(function(e,r){return o(ol,e,Kd(r))}),rm=o(vl,h(["target","value"]),Cn),so=function(e){return o(em,"input",o($a,Qd,o($a,e,rm)))},$l=He("max"),fl=He("min"),sl=function(e){return o(He,"step",e)},_a=He("type"),mo=He("value"),gi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,P,h([o(Lt,h([Ct(r)]),h([o(I,h([H("relative w-full")]),h([o(I,h([H("inline-block")]),h([dr(r)])),o(I,h([H("inline-block float-right")]),h([dr(be(n))]))]))])),o(ha,h([_a("range"),o(se,"width","100%"),ma(r),Pt(r),fl(be(a)),$l(be(t)),mo(be(n)),sl(be(i)),so(o(ae,lo,o(ae,sr(42),c)))]),P)]))},nm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),am=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([H("h-12 py-4")]),h([o(Lt,h([H("block"),Ct(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),Pt(e),Xd(wd(e)),Pd(c)]),P),dr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return gi({cf:e,cr:i,cv:t,cz:xd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return gi({cf:e,cr:i,cv:t,cz:o(ae,Oe,Sd(e)),cV:1,c0:c});default:var c=r.a;return o(I,P,h([o(I,h([o(se,"margin-bottom","6px")]),h([o(Lt,h([Ct(e)]),h([dr(e)]))])),o(ha,h([_a("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ma(e),Pt(e),so(function(l){return o(yd,e,o(nm,$o,qd(l)))}),mo(Td(c))]),P)]))}}),tm=function(e){return o(I,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([H("text-lg pb-2")]),h([dr(e.fh)])),o(I,h([H("pl-2 pr-2")]),_d(o(St,am,e.av)))]))},om=function(e){return o(I,h([H("text-xs text-white60")]),o(re,tm,e))},im=function(e){return o(I,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([dr("clock: "+o(rl,3,tn(e).db))]))},cm=function(e){e.a;var r=e.b.T;return o(ze,function(n){return Oe(60/(tn(e).db-n))},o(ze,o(ae,rs,function(n){return n.db}),Fa(o(Yc,59,r))))},lm=function(e){return o(I,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=cm(e);if(r.$===1)return h([dr("... Fps")]);var n=r.a;return h([dr(Be(n)+" Fps")])}())},um=function(e){return{$:0,a:e}},vm=function(e){var r=e.b.T;return Ur(r)},$m=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ur(r)+1+Ur(n)},fm=function(e){return o(ha,h([H("absolute w-full"),_a("range"),fl(Be(0)),$l(Be($m(e)-1)),mo(Be(vm(e))),sl(Be(1)),so(o(ae,lo,o(ae,sr(42),o(ae,Oe,um))))]),P)},hi={$:1},sm={$:3},dm={$:2},dl=function(e){return!e.b},_i=$(function(e,r){return o(uo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),vo(e)]),h([dr("REC")]))}),wi=$(function(e,r){return o(uo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),vo(r)]),h([o(I,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),mm=function(e){var r=e.a,n=e.b.ab;return o(I,h([H("py-1")]),h([function(){switch(r.$){case 0:return o(_i,hi,"text-red-500 font-bold");case 1:return o(_i,dm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return dl(n)?o(I,P,P):o(wi,qr.fq,sm);default:return o(wi,qr.fp,hi)}}()]))},pm=function(e){return o(I,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([fm(e),mm(e),lm(e),im(e)]))},bm=function(e){var r=e.a;return yr(r,Ma)},gm=$(function(e,r){var n=bm(r.G)?o(I,P,P):o(I,h([H("absolute pointer-events-none w-8 h-8"),o(se,"left",be(e.fs.fU+.5*e.cS.fS)+"px"),o(se,"top",be(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(I,h([H(e.fs.e4?"text-black80":"text-black40")]),h([qr.fs]))]));return o(I,P,h([n]))}),hm=$(function(e,r){var n=o(uo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),vo(ld),gd("Distraction Free Mode")]),h([qr.f0])),a=o(I,h([H("absolute w-8 bottom-12")]),h([o(mi,h([H("text-twitterBlue40 hover:text-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),h([qr.fN]))])),t=o(I,h([H("absolute w-8 bottom-2")]),h([o(mi,h([H("text-githubCat40 hover:text-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),h([qr.eQ]))]));return r.aL?o(I,h([H("fixed w-10 h-10 p-1")]),h([n])):o(I,P,h([o(I,h([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",be(e.cS.eW-80)+"px")]),h([o(pa,ud,om(tn(r.G).eA))])),o(I,h([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cS.fS>600?"600px":be(e.cS.fS-40)+"px")]),h([o(pa,vd,pm(r.G))])),o(gm,e,r)]))}),_m=y(function(e,r,n){var a=od(n.G),t=tn(n.G);return o(I,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",be(t.cS.fS)+"px"),o(se,"height",be(t.cS.eW)+"px")]),h([o(I,h([H("fixed")]),h([o(pa,Uc(ad),o(e,t,a))])),o(I,h([ma("gui")]),h([o(hm,t,n),o(pa,nd,o(r,t,a))]))]))}),wm=Ye(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Qs,r,i,u,v),di)}),l=function(u){var v=o(Ec,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(Ks,v,a)},di)};return hs({e0:l,fH:Uc(rd(is)),fO:c,fQ:o(_m,e,t)})}),ym=R(function(e,r,n,a){return we(wm,e,r,n,a,$(function(t,i){return o(I,P,P)}),y(function(t,i,c){return c}))}),xm=function(e){return{}},Sm=$(function(e,r){return z(e,Jc(r))}),Cm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),ml=tr,Lm=function(e){return p(kn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),ml,e)},Pm=y(function(e,r,n){return p(Cm,e,r,Lm(n))}),Ha=Pm,Yn=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Oc,z(a,t),n))}),zm=R(function(e,r,n,a){var t=F(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Dn,f,m,d,a)}),km=y(function(e,r,n){return L(zm,e,r,n,1)}),nr=ov,Tm=h([p(Ha,"Camera",!0,h([p(Yn,"camera distance",z(3,8),8),p(Yn,"camera azimuth",z(0,2*nr),0),p(Yn,"camera elevation",z(-nr/2,nr/2),.5)])),p(Ha,"Color",!0,h([o(Sm,"cube color",p(km,0,.36,.5))])),p(Ha,"Time",!0,h([p(Yn,"period",z(.1,5),.7)]))]),Mm=$(function(e,r){return r}),Dm=$(function(e,r){return o(ze,function(n){if(n.$)return 0;var a=n.b;return a},o(Aa,e,r.av))}),Am=$(function(e,r){return o(sr,0,Fa(o(Ba,Dm(e),r)))}),Bm=$(function(e,r){return o(Am,e,r.eA)}),ra=Bm,Fm=uv,Vm=function(e){return e},wr=function(e){return e},zt=function(e){var r=e;return-r},Rm=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),pl=function(e){var r=e;return r.c3},bl=function(e){var r=e;return r.c4},Um=function(e){return o(Rm,pl(e),bl(e))},Wr=function(e){var r=e;return r.cA},Er=iv,en=cv,Ia=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=en(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c5*u,T=l*C,N=2*(w-T),E=2*(w+T),U=d*C,j=2*(U+b),W=2*(U-b),B=g*C,O=2*(B-m),Q=2*(B+m),ie=C*C,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+N*i.fY+j*i.c5,fY:E*i.fU+oe*i.fY+O*i.c5,c5:W*i.fU+Q*i.fY+_*i.c5}}),Em=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=en(c),v=a.cA,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,T=l*C,N=w*C,E=C*C,U=1-2*(_+E),j=b.c5*u,W=l*j,B=2*(N-W),O=2*(N+W),Q=w*j,ie=2*(Q+T),ve=2*(Q-T),oe=C*j,me=2*(oe-x),Me=2*(oe+x),Se=j*j,gr=1-2*(E+Se),hr=1-2*(_+Se);return{fU:s.fU+gr*d+B*m+ie*f,fY:s.fY+O*d+hr*m+me*f,c5:s.c5+ve*d+Me*m+U*f}}),mr=function(e){return e},Pr=function(e){var r=e;return r.c3},zr=function(e){var r=e;return r.c4},kr=function(e){var r=e;return r.c6},jm=y(function(e,r,n){return mr({cA:p(Em,e,r,Wr(n)),c3:p(Ia,e,r,Pr(n)),c4:p(Ia,e,r,zr(n)),c6:p(Ia,e,r,kr(n))})}),yi=y(function(e,r,n){return p(jm,e(n),r,n)}),po=function(e){var r=e;return r.eH},Bn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),gl=$(function(e,r){return mr({cA:o(Bn,e,Wr(r)),c3:Pr(r),c4:zr(r),c6:kr(r)})}),Nm=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),Wm=y(function(e,r,n){return o(gl,o(Nm,r,e),n)}),Gm=y(function(e,r,n){return p(Wm,po(e(n)),r,n)}),Fn=$(function(e,r){return{eH:r,cA:e}}),Ym=function(e){var r=e;return o(Fn,r.cA,r.c3)},Hm=function(e){var r=e;return o(Fn,r.cA,r.c4)},Im=function(e){var r=e;return o(Fn,r.cA,r.c6)},Jm=function(e){var r=mr({cA:e.aR,c3:bl(e.dl),c4:Um(e.dl),c6:pl(e.dl)}),n=p(Gm,Im,e.cb,p(yi,Ym,zt(e.bC),p(yi,Hm,e.bx,r)));return n},Om=function(e){return{$:0,a:e}},de=function(e){var r=e;return X(r)},na=function(e){var r=e;return .5*r},qm=lv,Zm=function(e){var r=e;return qm(r)},Xm=function(e){var r=na(de(e.ej)),n=Zm(r);return{cL:Om(n),c1:e.c1}},Br=function(e){return e},cr={fU:0,fY:0,c5:0},hl=Ar,vr=function(e){return e},_l=vr({fU:1,fY:0,c5:0}),bo=_l,go=vr({fU:0,fY:0,c5:1}),ho=go,Qm=hl({cA:cr,c3:ho,c4:bo}),Km=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Xm({ej:Br(2*Fm(.5)),c1:Jm({bx:Br(n),cb:wr(t),bC:Br(a),aR:Vm(r),dl:Qm})})},e0=function(e){return Km({bx:o(ra,"camera azimuth",e),cb:o(ra,"camera distance",e),bC:o(ra,"camera elevation",e),aR:{fU:0,fY:0,c5:0}})},xi=function(e){return e*nr/180},_o=$(function(e,r){return{$:0,a:e,b:r}}),wl=$(function(e,r){return{$:2,a:e,b:r}}),yl=function(e){return{$:5,a:e}},xl=$(function(e,r){return{$:4,a:e,b:r}}),Sl=$(function(e,r){return{$:3,a:e,b:r}}),Cl=$(function(e,r){return{$:1,a:e,b:r}}),r0=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),n0=function(e){var r=e;return r},wo=function(e){var r=e;return n0(r.er)},yo=function(e){var r=e;return r.aK},a0=$(function(e,r){return{er:o(gl,e,wo(r)),aK:yo(r)}}),t0=$(function(e,r){var n=r;return o(Fn,o(Bn,e,n.cA),n.eH)}),o0=$(function(e,r){var n=r;return{k:o(t0,e,n.k),e9:n.e9,fu:n.fu}}),xo=function(e){var r=e;return r},i0=function(e){return e},Ll=$(function(e,r){var n=xo(r),a=n.a,t=n.b;return i0(z(e(a),e(t)))}),c0=$(function(e,r){return o(Ll,Bn(e),r)}),So=function(e){var r=e;return r.ey},Co=function(e){var r=e;return r.fu},Pl=$(function(e,r){return{ey:r,fu:de(e)}}),l0=$(function(e,r){return o(Pl,Co(r),o(Bn,e,So(r)))}),zl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return F(e(a),e(t),e(i))}),u0=$(function(e,r){return o(zl,Bn(e),r)}),kl=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(r0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(_o,s,o(a0,i,c));case 1:var s=r.a,l=r.b;return o(Cl,s,o(u0,i,l));case 3:var s=r.a,u=r.b;return o(Sl,s,o(l0,i,u));case 2:var s=r.a,v=r.b;return o(wl,s,o(o0,i,v));case 4:var s=r.a,d=r.b;return o(xl,s,o(c0,i,d));default:var m=r.a;return yl(o(re,kl(F(n,a,t)),m))}}),Si=function(e){return kl(F(e,0,0))},Ja=function(e){return e/255},v0=y(function(e,r,n){return L(Dn,Ja(e),Ja(r),Ja(n),1)}),$0=function(e){return e},f0=function(e){return wr(.01*e)},Ci=function(e){return e},s0=function(e){return e},d0=function(e){return{$:0,a:e}},m0=d0,p0={$:3},b0=p0,g0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),h0=g0,_0=$(function(e,r){return r.b?p(br,A,r,e):e}),We=function(e){return p(br,_0,P,e)},Lo=$(function(e,r){return We(o(re,e,r))}),w0=function(e){return{$:1,a:e}},y0=w0,x0=function(e){return o(Lr,"height",Be(e))},S0=function(e){return $$(p$(e))},C0=S0,L0=function(e){return{$:2,a:e}},P0=L0,z0=function(e){return o(Mr,"",e)},k0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return z0(h(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},T0=$(function(e,r){switch(r.$){case 0:return o(df,e,r);case 1:return o(mf,e,r);case 2:return o(pf,e,r);case 3:return o(bf,e,r);case 4:return o(gf,e,r);default:return o(hf,e,r)}}),M0=$(function(e,r){switch(r.$){case 0:return o(G$,e,r);case 1:return o(Y$,e,r);case 2:return o(H$,e,r);case 3:return o(I$,e,r);case 4:return o(J$,e,r);case 5:return o(O$,e,r);case 6:return o(q$,e,r);case 7:return o(Z$,e,r);default:return X$(e)}}),D0=y(function(e,r,n){return p(sf,e,r,n)}),Li=function(e){var r=e;return r},on=Tf,Oa=L(on,1,1,1,1),qe=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),A0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),B0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(A0,n*a/t,n,n*(1-a-t)/t)}),Vn=Sf,F0=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Po=$(function(e,r){return F0(o(B0,e,r))}),Tl=$(function(e,r){return{dp:yr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=Vf,V0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},qa=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return we(t,e,c,V0(a),a.dp,r,n)}),Ml=Ye(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Tl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(qa,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(A,S(qa,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(A,S(qa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(kn,L(Ml,e,r,n,a),i,T)}}),R0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Dl=R0,zo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),U0=function(e){var r=e.Z,n=e.W,a=e.V;return L(zo,518,r,n,a)},E0=$(function(e,r){return{$:6,a:e,b:r}}),j0=E0,Al=h([U0({V:1,W:0,Z:!1}),L(Dl,!1,!1,!1,!1),o(j0,0,1)]),rn=519,ko=8,Bl=15,Zr=7681,N0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=W$,W0=$(function(e,r){return{$:0,a:e,b:r}}),G0=W0({df:1,$7:0,dV:5}),Ae=yf,Y0=G0(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),H0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},I0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},To=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(I0,a,t,i)))}),Mo=function(e){return p(To,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Do=function(e){return S(ne,h([Mo(e),L(Dl,!1,!1,!1,!1)]),H0,N0,Y0,{})},J0=Do({a8:Zr,co:0,cN:ko,bl:rn,c2:Bl,bt:Zr,bu:Zr}),O0=516,Pi=5386,xe=7680,q0=function(e){return o(An,2,e+4)},Fl=function(e){return Do({a8:xe,co:Bl,cN:ko,bl:O0,c2:q0(e),bt:Pi,bu:Pi})},Z0=y(function(e,r,n){return We(h([p(qe,e,n,Al),h([Fl(r),J0])]))}),X0=$(function(e,r){return We(o(Tc,Z0(e),r))}),Q0=function(e){var r=e.Z,n=e.W,a=e.V;return L(zo,513,r,n,a)},K0=Q0({V:1,W:0,Z:!0}),ep=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},rp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return ep(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},np=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zi=$(function(e,r){var n=e,a=r;return p(np,32774,n,a)}),ap=1,ki=771,tp=770,Ao=rp({bv:0,aH:o(zi,ap,ki),by:0,bA:o(zi,tp,ki),bF:0,bV:0}),Gr=h([K0,Ao]),op=function(e){var r=e;return r.dO},ip=function(e){var r=e;return r.dP},Vl=function(e){var r=e;return r.dQ},cp=function(e){var r=e;return r.dR},lp=function(e){var r=e;return r.dS},Rl=function(e){var r=e;return r.dT},$r=$(function(e,r){var n=e,a=r;return a-n}),Ul=function(e){return F(o($r,cp(e),op(e)),o($r,lp(e),ip(e)),o($r,Rl(e),Vl(e)))},Ti=function(e){var r=e;return Wr(r)},up=function(e){return e},vp=function(e){return mr({cA:up({fU:e.H,fY:e.I,c5:e.J}),c3:vr({fU:e.q,fY:e.r,c5:e.s}),c4:vr({fU:e.t,fY:e.u,c5:e.v}),c6:vr({fU:e.w,fY:e.x,c5:e.y})})},Za=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),El=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),jl=$(function(e,r){return{cA:o(El,e,Wr(r)),c3:o(Za,e,Pr(r)),c4:o(Za,e,zr(r)),c6:o(Za,e,kr(r))}}),kt=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),wa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(rr,n,a)}),aa=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),$p=$(function(e,r){var n=wa(r),a=wa(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},fp=function(e){var r=e;return F(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),sp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(de(a)),c=na(de(n)),l=na(de(t)),u=fp(r),v=u.a,s=u.b,d=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Mi=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,d=Ge(kr(e)),m=X(l*d.fU)+X(c*d.fY)+X(i*d.c5),f=Ge(zr(e)),g=X(l*f.fU)+X(c*f.fY)+X(i*f.c5),b=Ge(Pr(e)),w=X(l*b.fU)+X(c*b.fY)+X(i*b.c5),x=o(sp,F(w,g,m),o(El,e,p(kt,s,v,u)));if(a.$)return te(x);var _=a.a;return te(o($p,_,x))}),Tt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Mi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Mi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Tt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(jl,vp(v),e),m=r*v.bX,f=e,g=r,b=L(Tt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),cn=Cf,ln=Lf,un=Pf,Nl=function(e){return{$:4,a:e}},dp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Rn=function(e){return Nl(o(dp,e,P))},mp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},pp=function(e){var r=e;return r},Di=Do({a8:Zr,co:0,cN:ko,bl:rn,c2:255,bt:Zr,bu:Zr}),Or=mv,lr=0,bp=function(e){var r=e,n=o(rr,X(r.fU),o(rr,X(r.fY),X(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=Or(i*i+t*t+a*a);return c*n}else return lr},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Ee=$(function(e,r){var n=e,a=r;return Qe({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),dn=z({bd:o(Ee,Pe,Pe),bK:o(Ee,Pe,Pe),bL:o(Ee,Pe,Pe),bM:o(Ee,Pe,Pe)},L(on,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),Wl=514,Gl=function(e){var r=e.Z,n=e.W,a=e.V;return L(zo,515,r,n,a)},Yl=240,gp=h([Gl({V:1,W:0,Z:!0}),Mo({a8:xe,co:Yl,cN:0,bl:Wl,c2:0,bt:xe,bu:xe}),Ao]),hp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cL;if(s.$){var m=s.a;return _t(v)?Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return _t(v)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Hn=$(function(e,r){return(1&e>>r)===1?0:1}),_p=function(e){return h([Gl({V:1,W:0,Z:!0}),Mo({a8:xe,co:Yl,cN:e,bl:Wl,c2:0,bt:xe,bu:xe}),Ao])},wp=y(function(e,r,n){return We(o(re,function(a){var t=a<<4,i=L(on,o(Hn,a,0),o(Hn,a,1),o(Hn,a,2),o(Hn,a,3));return p(qe,e,z(r,i),_p(t))},o(Qr,1,o(An,2,n)-1)))}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Xr=function(e){var r=e;return r},yp=Rf,Ai=function(e){var r=e;return fr(kr(r))},Hl=vr({fU:0,fY:1,c5:0}),Il=Hl,xp={cA:cr,c3:bo,c4:Il,c6:ho},Va=function(e){var r=e;return r},Sp=function(e){var r=Va(Wr(e)),n=Ge(kr(e)),a=Ge(zr(e)),t=Ge(Pr(e));return Qe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Cp=$(function(e,r){var n=r;return Sp(o(jl,n,e))}),Lp=function(e){return o(Cp,xp,e)},Pp=function(e){var r=e;return r.c1},zp=function(e){var r=e;return Pr(r)},kp=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Tp=function(e){var r=e;return zr(r)},Mp=function(e){var r=Pp(e.ev),n=mr({cA:Ti(r),c3:zp(r),c4:Tp(r),c6:fr(Ai(r))}),a=Rn(e.aP),t=a,i=L(Tt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Lp(r),u=o(K,.99,o(ce,de(e.aJ),zt(Vl(c)))),v=Ul(c),s=v.a,d=v.b,m=v.c,f=bp(p(kp,s,d,m)),g=o(K,1.01,o(hn,f,zt(Rl(c)))),b=o(hp,e.ev,{eq:e.eq,eP:g,fi:u}),w=yp(b).dM,x=w?Ge(fr(Ai(r))):Xr(Ti(r)),_=function(){var oe=e.bZ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var me=oe.a;return z(3,me);case 4:var me=oe.a;return z(4,me);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,E=N,U=o(Po,E,e.b$),j=U,W=Qe({dx:0,dy:x.fU,dz:cn(j),dA:e.ec,dB:0,dC:x.fY,dD:ln(j),dE:pp(f),dF:0,dG:x.c5,dH:un(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),B=we(Ml,W,l,b,mp,t,{M:P,U:P,fB:P}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return We(h([p(qe,B.M,z(Q,Oa),Gr),p(qe,B.U,dn,Gr)]));case 1:var Q=O.a;return We(h([p(qe,B.M,dn,Gr),h([Di]),p(qe,B.fB,Q.bd,Al),h([Fl(0)]),p(qe,B.M,z(Q,Oa),gp),p(qe,B.U,dn,Gr)]));default:var ie=O.a,ve=O.b;return We(h([p(qe,B.M,z(ve,Oa),Gr),h([Di]),o(X0,B.fB,ie),p(wp,B.M,ve,Ur(ie)),p(qe,B.U,dn,Gr)]))}},Dp=function(e){return o(Lr,"width",Be(e))},Ap=$(function(e,r){var n=h([y0(1),P0(0),m0(!0),L(h0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return F(n,"0",1);case 1:return F(o(A,b0,n),"1",1);default:var T=C.a;return F(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Li(v),d=o(se,"height",Be(s)+"px"),m=Li(u),f=m/s,g=o(Lo,function(C){return Mp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(se,"width",Be(m)+"px"),w=e.aI,x=w,_=k0(x);return p(C0,"div",h([o(se,"padding","0px"),b,d]),h([z(i,p(D0,t,h([Dp(Oe(m*c)),x0(Oe(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),Bp=function(e){return o(Ap,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Jl=function(e){return e},Bi=Jl({fU:.31271,fY:.32902}),Fp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Po,r.cd,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cJ:0,bV:cn(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Vp=function(e){return e},Rp=function(e){return Vp(1.2*o(An,2,e))},Xa=function(e){return e},Up={$:0},Ep=Up,Ol=function(e){return e},jp=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Fi=function(e){var r=e;return r},Np=function(e){e:for(;;){if(yr(e.e2,lr)&&yr(e.e3,lr))return Pe;if(o(jp,de(e.e2),de(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=X(Fi(e.e3)/nr),a=X(Fi(e.e2)/nr),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Po,Ol(1),e.b6),v=u;return{by:a*un(v),ex:!1,bF:a*ln(v),cJ:n/a,bV:a*cn(v),cZ:3,fU:i,fY:c,c5:l}}}},Vi=function(e){return Np({b6:e.b6,e2:e.cd,e3:lr,ei:e.ei})},ql=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Wp=function(e){var r=e;return r},Zl=function(e){var r=p(ql,1667,25e3,Wp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Jl({fU:n,fY:a})},Xl=function(e){return e},Gp=Zl(Xl(12e3)),Yp=Zl(Xl(5600)),Hp=function(e){return{$:2,a:e}},Ip=function(e){return Hp(e)},Jp=$(function(e,r){return{$:2,a:e,b:r}}),Ql=function(e){return{$:0,a:e}},In=function(e){var r=e;return r},Op=function(e){var r=e;return r.ex},qp=Ql(dn.a),Zp=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(br,n,z(P,P),r)}),Xp=function(e){var r=e;return Qe({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Qp=ee(function(e,r,n,a,t,i,c,l){var u=o(Zp,Op,h([In(e),In(r),In(n),In(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Jp,o(re,Xp,v),{bd:o(Ee,m,g),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return qp}else return Ql({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),Kp=y(function(e,r,n){return La(Qp,e,r,n,Pe,Pe,Pe,Pe,Pe)}),eb=function(e){var r=o(Fp,s0(e.fB),{b6:Yp,eH:e.fJ,cd:Xa(8e4)}),n=Vi({b6:Gp,cd:Xa(2e4),ei:e.ei}),a=Vi({b6:Bi,cd:Xa(15e3),ei:fr(e.ei)}),t=p(Kp,r,n,a);return Bp({b0:Ip(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Rp(15),bJ:t,bZ:Ep,b$:Bi})},Kl=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),rb=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),eu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ru=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),nb=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ab=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),tb=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Bo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(tb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Kl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(rb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(eu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(ab,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ru,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(nb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Fo={$:0},ob=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=wa(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),ib=y(function(e,r,n){var a=wa(e(r));return La(ob,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=$(function(e,r){var n=e,a=r;return J(a,n)<1}),nu=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},Fr=function(e){var r=e;return r.fU},Vr=function(e){var r=e;return r.fY},Rr=function(e){var r=e;return r.c5},au=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Fr(n),c=Vr(n),l=Rr(n),u=Fr(a),v=Vr(a),s=Rr(a),d=Fr(t),m=Vr(t),f=Rr(t);return nu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},tu=zf,ke=function(e){return tu(Va(e))},ou=function(e){var r=e;return r},Ra=function(e){return tu(ou(e))},cb=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Mt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),lb={fU:0,fY:0,c5:0},ub=$(function(e,r){var n=e,a=r,t=o(rr,X(a.fU),o(rr,X(a.fY),X(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=Or(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return lb}),vb=ub(Ol(1)),iu=y(function(e,r,n){var a=o(Mt,r,n),t=o(Mt,e,r);return vb(o(cb,a,t))}),$b=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Ra(p(iu,n,a,t));return F({o:i,bT:ke(n)},{o:i,bT:ke(a)},{o:i,bT:ke(t)})},fb=$(function(e,r){return{$:2,a:e,b:r}}),cu=fb({df:3,$7:0,dV:4}),sb=function(e){if(e.b){var r=e.a,n=e.b,a=cu(o(re,$b,e)),t=p(ib,au,r,n);return L(Kl,t,e,a,0)}else return Fo},Ue=y(function(e,r,n){return F(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),lu=function(){var e=wr(1),r=wr(1),n=wr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(pe,i,t,a),l=o(K,.5,e),u=p(pe,i,t,l),v=o(K,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(K,.5,n),f=p(pe,m,t,a),g=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Bo(sb(h([p(Ue,c,g,f),p(Ue,c,s,g),p(Ue,u,b,w),p(Ue,u,w,d),p(Ue,f,g,w),p(Ue,f,w,b),p(Ue,c,d,s),p(Ue,c,u,d),p(Ue,c,f,b),p(Ue,c,b,u),p(Ue,s,w,g),p(Ue,s,d,w)])))}(),Jn={$:0},db=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),mb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ra(p(iu,u,l,c)),s={o:v,bT:ke(u)},d={o:v,bT:ke(l)},m={o:v,bT:ke(c)};return o(A,s,o(A,d,o(A,m,n)))}),Vo=function(e){var r=e;return r.D},pb=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),Dt=4294967295>>>32-xn,At=Xu,bb=y(function(e,r,n){e:for(;;){var a=Dt&r>>>e,t=o(At,a,n);if(t.$){var v=t.a;return o(At,Dt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),gb=function(e){return e>>>5<<5},hb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,gb(n))>-1?te(o(At,Dt&e,i)):te(p(bb,a,e,t))}),Ro=function(e){var r=e;return r.ah},Ka=$(function(e,r){return o(hb,e,Ro(r))}),_b=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(pb,y(function(c,l,u){return F(c,l,u)}),o(Ka,a,e),o(Ka,t,e),o(Ka,i,e))};return o(Ba,r,Vo(e))},wb=y(function(e,r,n){e:for(;;){var a=o(ao,Ve,e),t=a.a,i=a.b;if(J(gt(t),Ve)<0)return o(Rc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Fc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Uo=function(e){return e.b?p(wb,e,P,0):Ac},yb=y(function(e,r,n){return e(r(n))}),xb=$(function(e,r){return!o(qc,o(yb,_s,e),r)}),Sb=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Cb=function(e){var r=e.a;return r},uu=$(function(e,r){var n=Cb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(xb,a,r)?{D:r,ah:e}:{D:o(Sb,a,r),ah:e}}),Lb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Un=Lb({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return z(F(a.fU,a.fY,a.c5),F(n.fU,n.fY,n.c5))}),Ri=p(Vn,0,0,0),et=Ye(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Aa,o(ta,e,r),t);if(v.$){var d={o:Ri,bT:ke(r)},m={o:Ri,bT:ke(e)},f=u+1,g=u;return F(o(A,F(n,g,f),o(A,F(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return F(o(A,F(n,s,a),c),l,u)}}),Pb=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,T=we(et,s,m,f,b,r,we(et,d,s,g,f,r,we(et,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,E=N.a,U=N.b;return z(E,Fe(U))}}),zb=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(bn,o(ta,m,s),f,p(bn,o(ta,s,d),g,p(bn,o(ta,d,m),b,t))),x=o(A,F(b,g,f),a),_=e,C=v,T=n+3,N=x,E=w;e=_,r=C,n=T,a=N,t=E;continue e}else return F(a,t,n)}),Tr=y(function(e,r,n){var a=_b(n),t=p(br,mb(r),P,a),i=S(zb,r,a,0,P,ml),c=i.a,l=i.b,u=i.c,v=S(Pb,r,l,a,0,F(c,P,u)),s=v.a,d=v.b,m=dl(d)?t:le(t,d);return p(db,e,o(uu,Uo(m),s),o(Un,m,s))}),Bt=function(e){return{D:o(re,function(r){return F(3*r,3*r+1,3*r+2)},o(Qr,0,Ur(e)-1)),ah:Uo(We(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},vu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(re,Ln,r);return p(Tr,a,Ar,Bt(n));case 2:var a=e.a,r=e.b,n=o(re,Ln,r);return p(Tr,a,Ar,Bt(n));case 3:var a=e.a,t=e.b;return p(Tr,a,Ar,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ui=vu(lu),$u={$:0},k=$u,ge=$(function(e,r){return{$:1,a:e,b:r}}),kb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Tb=1029,Mb=function(e){return{$:5,a:e}},fu=function(e){var r=e;return Mb(r)},Db=fu(Tb),Ab=1028,Bb=fu(Ab),Te=y(function(e,r,n){return r===1?e?o(A,Db,n):o(A,Bb,n):n}),su={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Te,l,a,d),su,kb,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Eo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},du={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Te,l,a,d),du,Eo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),mu=$(function(e,r){return{$:3,a:e,b:r}}),Fb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},pu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Vb=R(function(e,r,n,a){return o(mu,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,pu,Fb,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),jo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Ua=kf,ir=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Te,u,t,m),du,jo,a,{aN:o(Ua,En(r),e),b:l,c,d:s,e:i,f:v})}))}),Rb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Ub=he(function(e,r,n,a,t){return o(mu,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,pu,Rb,t,{aN:o(Ua,En(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),gu,bu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},_u={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Eb=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Te,v,i,f),_u,hu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),wu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},jb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(d,m,f,g,b,w,x,_){var C=x.a,T=x.b;return S(ne,p(Te,g,s,_),_u,wu,v,{b4:e,b7:r,b8:i,b9:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},qn=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Te,v,i,f),gu,yu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),Nb=function(e){return{$:0,a:e}},Ei=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),Wb=function(e){return L(on,cn(e),ln(e),un(e),1)},No=L(on,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,No)}else{var n=r.a;return z(e,Wb(n))}}),xu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ei,z(t,No),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ei,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,Nb(a)}}),Gb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Yb=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Hb=function(e){return o(Ae,e,1)},Ft=o(Ae,0,0),Yr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ft)}else{var n=r.a;return z(e,Hb(n))}}),Su=R(function(e,r,n,a){var t=L(Yb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Zn,z(u,No),o(Yr,u,r),o(Yr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Zn,o(oa,u,e),z(u,Ft),o(Yr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Zn,o(oa,u,e),o(Yr,u,r),z(u,Ft),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Zn,o(oa,u,e),o(Yr,u,r),o(Yr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Gb,i,c,l)}}),Ib={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},nt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Te,u,t,m),su,Ib,a,{b1:En(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Cu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jb=R(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),Cu,hu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Ob=Et(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ne,p(Te,m,u,w),Cu,wu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Pn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),qb=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},Zb=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},Xb=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},Qb=function(e){return p(pe,qb(e),Zb(e),Xb(e))},G=function(e){var r=Ul(e),n=r.a,a=r.b,t=r.c;return{ey:Va(Qb(e)),eS:n/2,eT:a/2,eU:t/2}},Wo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(rt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(rt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(rt,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Vb,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Ub,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(xu,s,E);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Jb,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(Eb,b,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,E=e.e,U=L(Su,C,T,N,E);if(U.$){var O=U.a,Q=O.a,ie=O.b,ve=U.b,oe=ve.a,me=ve.b,Me=U.c,Se=Me.a,gr=Me.b,hr=U.d,x=hr.a,_=hr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Iu(Ob,Q,ie,oe,me,Se,gr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return jb(Q)(ie)(oe)(me)(Se)(gr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=U.a,W=U.b,B=U.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,B,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,B,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,B,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,B,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),at=function(e){var r=e;return r.fU},tt=function(e){var r=e;return r.fY},ot=function(e){var r=e;return r.c5},Kb=function(e){var r=e,n=ot(r.c6),a=tt(r.c6),t=at(r.c6),i=ot(r.c4),c=tt(r.c4),l=at(r.c4),u=ot(r.c3),v=tt(r.c3),s=at(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},e1=function(e){var r=Va(Wr(e)),n=Ge(kr(e)),a=Ge(zr(e)),t=Ge(Pr(e));return{dp:Kb(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Hr=$(function(e,r){return{$:5,a:e,b:r}}),Lu=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Tl,a,e);return o(Hr,i,t);case 1:return o(Hr,e,n);case 3:return o(Hr,e,n);case 2:return o(Hr,e,n);default:return o(Hr,e,n)}}),Pu=$(function(e,r){return o(Lu,e1(e),r)}),Ea=function(e){return{$:2,a:e}},r1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),n1=Df,a1=Mf,ji=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=a1(a),g=f.fU,b=f.fY,w=f.c5,x=f.em,_=n1({em:x,fU:g*s,fY:b*d,c5:w*m});return La(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Vt=$(function(e,r){switch(r.$){case 0:return $u;case 5:var n=r.a,a=r.b;return o(Hr,n,o(Vt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(r1,e,t),o(ji,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(ji,e,i));default:var c=r.a;return Nl(o(re,Vt(e),c))}}),Go=$(function(e,r){var n=r;return o(Vt,e,n)}),Yo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},zu=7683,ku=7682,t1=p(To,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:zu},{a8:xe,bl:rn,bt:xe,bu:ku}),o1=p(To,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:ku},{a8:xe,bl:rn,bt:xe,bu:zu}),Ho=$(function(e,r){return e?o(A,o1,r):o(A,t1,r)}),i1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},c1=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(Ho,i,v),i1,Yo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ya=function(e){var r=c1(e);if(r.$)return k;var n=r.a;return Ea(n)},l1=R(function(e,r,n,a){var t=o(Wo,n,lu),i=function(){var s=z(e,r);return s.a?s.b?Rn(h([t,ya(Ui)])):t:s.b?ya(Ui):k}(),c=yo(a),l=c.a,u=c.b,v=c.c;return o(Pu,wo(a),o(Go,F(l,u,v),i))}),u1=$(function(e,r){return L(l1,!0,!0,e,r)}),Rt=function(e){return{$:0,a:e}},Tu=$(function(e,r){return{$:0,a:e,b:r}}),v1=function(e){var r=fo(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,n,a,t)},$1=function(e){return o(Tu,0,Rt(v1(e)))},Io=function(e){var r=e;return r.k},wn=function(e){var r=e;return Er(r)},f1=$(function(e,r){var n=r;return n/e}),Ni=function(e){var r=e;return{fU:Er(r),fY:en(r)}},s1=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ra(a),bT:ke(n)},r)}),d1=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=un(l.bT),s=ln(l.bT),d=cn(l.bT),m=o(aa,e,d),f=o(rr,r,d),g=o(aa,n,s),b=o(rr,a,s),w=o(aa,t,v),x=o(rr,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return nu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Mu=$(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return jt(d1,t,t,a,a,n,n,r)}),m1=function(e){var r=p(Cc,s1,P,Ro(e));if(r.b){var n=r.a,a=r.b,t=o(Un,r,Vo(e)),i=o(Mu,n,a);return L(eu,i,e,t,0)}else return Fo},Du=vr({fU:0,fY:0,c5:-1}),Wi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),xa=function(e){var r=e;return en(r)},mn=function(e){var r=e;return r},Ut=function(e){return Br(2*nr*e)},Gi=hl({cA:cr,c3:bo,c4:Il}),Au=function(){var e=72,r=o(f1,e,Ut(1)),n=wr(1),a=mn(go),t=mn(Du),i=wr(1),c=o(K,.5,i),l=p(pe,lr,lr,c),u=o(K,-.5,i),v=p(pe,lr,lr,u),s=function(f){var g=o(K,f,r),b=mn(o(Wi,Gi,Ni(g))),w=o(K,wn(g),n),x=o(K,xa(g),n),_=p(pe,w,x,c),C=p(pe,w,x,u),T=o(ba,e,f+1),N=o(K,T,r),E=mn(o(Wi,Gi,Ni(N))),U=o(K,wn(N),n),j=o(K,xa(N),n),W=p(pe,U,j,u),B=p(pe,U,j,c);return h([F({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),F({o:b,bT:C},{o:E,bT:W},{o:E,bT:B}),F({o:b,bT:C},{o:E,bT:B},{o:b,bT:_}),F({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(re,s,o(Qr,0,e-1)),m=Bt(We(d));return Bo(m1(m))}(),Yi=vu(Au),Bu=function(e){var r=e;return r.cA},p1=function(e){var r=e,n=X(r.c5),a=X(r.fY),t=X(r.fU);if(J(t,a)<1)if(J(t,n)<1){var i=Or(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=Or(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(J(a,n)<1){var i=Or(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=Or(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},b1=function(e){var r=p1(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return z(r,c)},g1=function(e){var r=po(e),n=b1(r),a=n.a,t=n.b;return mr({cA:Bu(e),c3:a,c4:t,c6:r})},Fu=function(e){var r=e;return r.e9},Vu=function(e){var r=e;return r.fu},h1=R(function(e,r,n,a){var t=g1(Io(a)),i=o(Wo,n,Au),c=function(){var d=z(e,r);return d.a?d.b?Rn(h([i,ya(Yi)])):i:d.b?ya(Yi):k}(),l=Vu(a),u=l,v=Fu(a),s=v;return o(Pu,t,o(Go,F(u,u,s),c))}),_1=$(function(e,r){return L(h1,!0,!0,e,r)}),Hi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Ii={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return Qe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Xn=cu(h([F({cY:0},{cY:1},{cY:2})])),w1=$(function(e,r){var n=au(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){return S(ne,p(Te,N,0,W),Hi,Eo,Xn,{aw:t,b:T,c:C,d:U,e:_,bq:pn(r),f:E})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){return S(ne,p(Te,N,0,W),Hi,jo,Xn,{aN:o(Ua,En(c),i),b:T,c:C,d:U,e:_,bq:pn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(xu,l,f);if(u.$)return k;var v=u.a;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){var B=j.a,O=j.b;return S(ne,p(Te,N,0,W),Ii,bu,Xn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:T,c:C,d:U,e:_,bq:pn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Su,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(_,C,T,N,E,U,j,W){var B=j.a,O=j.b;return S(ne,p(Te,N,0,W),Ii,yu,Xn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:T,c:C,d:U,cQ:w,e:_,bq:pn(r),f:E})}))}}),y1=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(Un,e,r)}(),x1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ji=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,t,u),x1,Yo,y1,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},S1=R(function(e,r,n,a){var t=o(w1,n,a),i=z(e,r);return i.a?i.b?Rn(h([t,Ji(a)])):t:i.b?Ji(a):k}),C1=$(function(e,r){return L(S1,!0,!0,e,r)}),L1=$(function(e,r){var n=Rr(r),a=Rr(e),t=Vr(r),i=Vr(e),c=Fr(r),l=Fr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),P1=function(e){var r=xo(e),n=r.a,a=r.b;return o(L1,n,a)},Oi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},z1=$(function(e,r){return{$:1,a:e,b:r}}),k1=z1({df:2,$7:0,dV:1}),qi=k1(h([z({dw:0},{dw:1})])),T1=$(function(e,r){var n=P1(r),a=G(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(ge,a,ee(function(v,s,d,m,f,g,b,w){return S(ne,w,Oi,Eo,qi,{aw:l,du:ke(c),dv:ke(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,Oi,jo,qi,{aN:o(Ua,En(u),l),du:ke(c),dv:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),M1=$(function(e,r){return o(T1,e,r)}),Qn=function(e){return Br(nr*(e/180))},Zi=$(function(e,r){var n=e,a=r;return n/a}),D1=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(yr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Xi=$(function(e,r){return e<1?P:S(D1,0,e,e,r,P)}),A1=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ra(a),bT:ke(n),L:o(Ae,c,l)},r)}),B1=function(e){var r=p(Cc,A1,P,Ro(e));if(r.b){var n=r.a,a=r.b,t=o(Un,r,Vo(e)),i=o(Mu,n,a);return L(ru,i,e,t,0)}else return Fo},Ru=$(function(e,r){var n=e,a=r,t=Er(a);return{fU:t*Er(n),fY:t*en(n),c5:en(a)}}),F1=function(){var e=wr(1),r=72,n=o(Qr,0,r-1),a=o(Xi,r,o(Pn,lr,Ut(1))),t=ro(r/2),i=o(Qr,0,t-1),c=o(Xi,t,o(Pn,Qn(90),Qn(-90))),l=Uo(We(o(re,function(s){return o(re,function(d){return{o:mn(o(Ru,s,d)),bT:p(pe,o(K,wn(d)*wn(s),e),o(K,wn(d)*xa(s),e),o(K,xa(d),e)),L:z(o(Zi,s,Ut(1)),o(Zi,o(hn,Qn(90),d),Qn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(re,function(s){return We(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([F(b,g,m),F(b,m,f)])},i))},n));return Bo(B1(o(uu,l,v)))}(),Sa=72,Kn=2*Sa,V1=$(function(e,r){e:for(;;){var n=Kn+1,a=o(ba,Kn,2*e+3),t=o(ba,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(A,F(l,c,t),o(A,F(c,a,t),o(A,F(c,i,a),o(A,F(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),R1=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),U1=$(function(e,r){e:for(;;){var n=p(R1,0,2*nr,e/Sa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),E1=function(){var e=o(U1,Sa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(V1,Sa-1,P);return o(Un,e,r)}(),j1={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Qi=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,!0,u),j1,Yo,E1,{aw:p(Vn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},N1=function(e){var r=ou(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},W1=$(function(e,r){return o(Lu,N1(e),r)}),G1=R(function(e,r,n,a){var t=o(Wo,n,F1),i=function(){var u=z(e,r);return u.a?u.b?Rn(h([t,Qi()])):t:u.b?Qi():k}(),c=Co(a),l=c;return o(W1,o(Mt,cr,So(a)),o(Go,F(l,l,l),i))}),Y1=$(function(e,r){return L(G1,!0,!0,e,r)}),H1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Uu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),I1=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),J1=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Tu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(H1,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Uu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(I1,n,a,t,i,c)}},O1=J1,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(u1,t,r)]);case 1:var t=e.a,n=e.b;return h([o(C1,t,n)]);case 3:var t=e.a,a=e.b;return h([o(Y1,O1(t),a)]);case 2:var t=e.a,i=e.b;return h([o(_1,t,i)]);case 4:var c=e.a,l=e.b;return h([o(M1,$1(c),l)]);default:var u=e.a;return o(Lo,Eu,u)}},q1=function(e){return o(Lo,Eu,e)},Z1=$(function(e,r){return eb({aI:$0(e.es),ev:e.ev,aJ:f0(.5),ca:e.ca,aK:z(Ci(Oe(e.cS.fS)),Ci(Oe(e.cS.eW))),aP:q1(r),fB:!0,fJ:o(Ru,Br(e.fI),Br(e.fK)),ei:ho})}),it=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ct=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),X1=vr({fU:-1,fY:0,c5:0}),Q1=vr({fU:0,fY:-1,c5:0}),K1=Ye(function(e,r,n,a,t,i){var c=o(it,n,i)?go:Du,l=o(it,r,t)?Hl:Q1,u=o(it,e,a)?_l:X1,v=F(de(o($r,e,a)),de(o($r,r,t)),de(o($r,n,i))),s=p(pe,o(ct,e,a),o(ct,r,t),o(ct,n,i)),d=mr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),e3=$(function(e,r){return we(K1,Fr(e),Vr(e),Rr(e),Fr(r),Vr(r),Rr(r))}),r3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=F(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(_o,e,o(e3,p(kt,-c,-l,-u),p(kt,c,l,u)))}),n3=$(function(e,r){return o(ze,function(n){if(n.$===2){var a=n.a;return a}else return $o},o(Aa,e,r.av))}),a3=$(function(e,r){return o(sr,$o,Fa(o(Ba,n3(e),r)))}),t3=$(function(e,r){return o(a3,e,r.eA)}),o3=t3,lt=function(e){return p(ql,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},i3=function(e){var r=fo(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,lt(n),lt(a),lt(t))},c3=function(e){return p(Uu,0,Rt(i3(e)),Rt(0))},jn=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c5:a.c5+r*(t.c5-a.c5)}}),l3=y(function(e,r,n){var a=wo(n),t=Pr(a),i=zr(a),c=kr(a),l=p(jn,e,r,Wr(a)),u=r>=0?mr({cA:l,c3:t,c4:i,c6:c}):mr({cA:l,c3:fr(t),c4:fr(i),c6:fr(c)}),v=yo(n),s=v.a,d=v.b,m=v.c,f=de(o(K,r,s)),g=de(o(K,r,d)),b=de(o(K,r,m));return{er:u,aK:F(f,g,b)}}),Ki=function(e){return po(Io(e))},u3=function(e){return Bu(Io(e))},v3=y(function(e,r,n){var a=de(o(K,r,Vu(n))),t=de(o(K,r,Fu(n))),i=r>=0?Ki(n):fr(Ki(n)),c=p(jn,e,r,u3(n));return{k:o(Fn,c,i),e9:t,fu:a}}),$3=y(function(e,r,n){return o(Ll,o(jn,e,r),n)}),f3=y(function(e,r,n){return o(Pl,o(K,X(r),Co(n)),p(jn,e,r,So(n)))}),s3=y(function(e,r,n){return o(zl,o(jn,e,r),n)}),ju=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(_o,c,p(l3,cr,e,n));case 1:var c=r.a,a=r.b;return o(Cl,c,p(s3,cr,e,a));case 3:var c=r.a,t=r.b;return o(Sl,c,p(f3,cr,e,t));case 2:var c=r.a,i=r.b;return o(wl,c,p(v3,cr,e,i));case 4:var c=r.a,l=r.b;return o(xl,c,p($3,cr,e,l));default:var u=r.a;return yl(o(re,ju(e),u))}}),d3=$(function(e,r){return(r-Vc(r/e)*e)/e}),m3=function(e){return 2*nr*e},p3=R(function(e,r,n,a){return e+(r-e)*(1+Er(m3(o(d3,n,a))))/2}),ut=function(e){return o(ju,L(p3,1,1.1,o(ra,"period",e),e.db),o(r3,c3(o(o3,"cube color",e)),F(1,1,1)))},b3=$(function(e,r){return o(Z1,{es:p(v0,46,46,46),ev:e0(e),ca:e.ca,cS:e.cS,fI:-xi(135),fK:-xi(45)},h([ut(e),o(Si,-2,ut(e)),o(Si,2,ut(e))]))}),g3=L(ym,b3,Mm,Tm,xm);const h3={Main:{init:g3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Cn)))},o(M,"left",Z))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},_3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},w3=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},y3=h3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});w3();_3(y3);
