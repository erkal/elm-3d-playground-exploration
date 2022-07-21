const qu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};qu();function xr(e,r,n){return n.a=e,n.f=r,n}function $(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return xr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return xr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ye(e){return xr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return xr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return xr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return xr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Gt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function La(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Zu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Xu=[];function Qu(e){return e.length}var Ku=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),ev=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),rv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var nv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+av()),r});function av(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=st(e,r,0,a);t&&(n=a.pop());t=st(n.a,n.b,0,a));return t}function st(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=vi(e),r=vi(r));for(var t in e)if(!st(e[t],r[t],n+1,a))return!1;return!0}$(yr);$(function(e,r){return!yr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var tv=$(function(e,r){var n=I(e,r);return n<0?Tc:n?Yf:kc}),zn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Xe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var ov=$(ar);function h(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var iv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ye(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Pa(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(Pa(r).sort(function(n,a){var t=o(e,n,a);return t===kc?0:t===Tc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var cv=$(Math.pow);$(function(e,r){return r%e});var lv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),uv=Math.PI,vv=Math.cos,$v=Math.sin,fv=Math.tan,sv=Math.atan;$(Math.atan2);function dv(e){return e}function mv(e){return e===1/0||e===-1/0}var pv=Math.ceil,bv=Math.floor,gv=Math.round,hv=Math.sqrt,Zo=Math.log,_v=isNaN;function wv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var yv=$(function(e,r){return e+r});function xv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ie(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function Sv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Cv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Lv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Pv=$(function(e,r){return r.split(e)}),zv=$(function(e,r){return r.join(e)}),kv=y(function(e,r,n){return n.slice(e,r)});function Tv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Mv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Dv=$(function(e,r){return r.indexOf(e)>-1}),Av=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Bv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function ac(e){return e+""}function Fv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ie(n==45?-r:r)}function Vv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ie(r):q}function Ev(e){return Pa(e).join("")}function Rv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Uv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function jv(e){return{$:0,a:e}}function Yt(e){return{$:2,b:e}}var Nv=Yt(function(e){return typeof e=="boolean"?$e(e):Ze("a BOOL",e)}),Wv=Yt(function(e){return typeof e=="number"?$e(e):Ze("a FLOAT",e)}),Gv=Yt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ze("a STRING",e)});function Yv(e){return{$:3,b:e}}var Hv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Iv=$(function(e,r){return{$:10,b:r,h:e}}),Jv=$(function(e,r){return Sr(e,[r])}),Ov=y(function(e,r,n){return Sr(e,[r,n])});E(function(e,r,n,a){return Sr(e,[r,n,a])});he(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});Ye(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(no,"This is not valid JSON! "+a.message,r))}});var tc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ze("null",r);case 3:return Nn(r)?Xo(e.b,r,h):Ze("a LIST",r);case 4:return Nn(r)?Xo(e.b,r,qv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:ye(o($i,n,v.a));case 7:var a=e.e;if(!Nn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:ye(o(Mc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Ze("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return ye(o($i,i,v.a));t=ar(z(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return $e(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ie(v))return v;s=ar(v.a,s)}return ye(Hf(Fe(s)));case 1:return ye(o(no,e.a,r));case 0:return $e(e.a)}}function Xo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return ye(o(Mc,i,c.a));t[i]=c.a}return $e(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function qv(e){return o(ls,e.length,function(r){return e[r]})}function Ze(e,r){return ye(o(no,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&Qo(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return Qo(e.g,r.g)}}function Qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Zv=$(function(e,r){return JSON.stringify(r,null,e)+""});function oc(e){return e}y(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Xv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var dt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Qv(e){return{$:5,b:e}}var Kv=0;function Ht(e){var r={$:0,e:Kv++,f:e,g:null,h:[]};return It(r),r}function ic(e){return pr(function(r){r(Nr(Ht(e)))})}function cc(e,r){e.h.push(r),It(e)}var e$=$(function(e,r){return pr(function(n){cc(e,r),n(Nr(zn))})}),Na=!1,Ko=[];function It(e){if(Ko.push(e),!Na){for(Na=!0;e=Ko.shift();)r$(e);Na=!1}}function r$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,It(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Jt(e,r,n,a,t,i){var c=o(tc,e,r?r.flags:void 0);Ie(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=n$(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ri(l,b.b,t(v))}return ri(l,u.b,t(v)),d?{ports:d}:{}}var Ke={};function n$(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=t$(t,r)}return n}function a$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function t$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(dt,l,Qv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o(dt,l,e.b))}var o$=$(function(e,r){return pr(function(n){e.g(r),n(Nr(zn))})});$(function(e,r){return o(e$,e.h,{$:0,a:r})});function lc(e){return function(r){return{$:1,k:e,l:r}}}function i$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ei=[],Wa=!1;function ri(e,r,n){if(ei.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=ei.shift();)c$(a.p,a.q,a.r);Wa=!1}}function c$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)cc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=l$(e,t,a,r.l);n[t]=u$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function l$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function u$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function v$(e){Ke[e]&&nn(3)}$(function(e,r){return r});function $$(e,r){return v$(e),Ke[e]={f:f$,u:r,a:s$},lc(e)}var f$=$(function(e,r){return function(n){return e(r(n))}});function s$(e,r){var n=P,a=Ke[e].u,t=Nr(null);Ke[e].b=t,Ke[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(tc,a,c);Ie(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document!="undefined"?document:{};function Ot(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function mt(e){return{$:0,a:e}}var uc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:qt(n),e:t,f:e,b:i}})}),Wr=uc(void 0),d$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:qt(n),e:t,f:e,b:i}})}),m$=d$(void 0);function p$(e,r,n,a){return{$:3,d:qt(e),g:r,h:n,i:a}}var b$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Cr([e,r],function(){return e(r)})});y(function(e,r,n){return Cr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Cr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Cr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ye(function(e,r,n,a,t,i){return Cr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return Cr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Cr([e,r,n,a,t,i,c,l],function(){return Gt(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return Cr([e,r,n,a,t,i,c,l,u],function(){return La(e,r,n,a,t,i,c,l,u)})});var vc=$(function(e,r){return{$:"a0",n:e,o:r}}),g$=$(function(e,r){return{$:"a1",n:e,o:r}}),$c=$(function(e,r){return{$:"a2",n:e,o:r}}),Lr=$(function(e,r){return{$:"a3",n:e,o:r}}),h$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function _$(e){return e=="script"?"p":e}function w$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(vc,r.n,y$(e,r.o)):r});function y$(e,r){var n=co(r);return{$:r.$,a:n?p(us,n<3?x$:S$,De(e),r.a):o($a,e,r.a)}}var x$=$(function(e,r){return z(e(r.a),r.b)}),S$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function qt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ni(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ni(c,t,i):c[t]=i}return r}function ni(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return pt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),pt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ot(c,_r(n===1?l[u]:l[u].b,r));return c}function pt(e,r,n){for(var a in n){var t=n[a];a==="a1"?C$(e,t):a==="a0"?z$(e,r,t):a==="a3"?L$(e,t):a==="a4"?P$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function C$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function L$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function P$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function z$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=k$(r,i),e.addEventListener(t,c,Zt&&{passive:co(i)<2}),a[t]=c}}var Zt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zt=!0}}))}catch{}function k$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=co(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function T$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function fc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=R$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!M$(d,m):d!==m)&&_e(n,2,a,m),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ai(e,r,n,a,D$);return;case 2:ai(e,r,n,a,A$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Xt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function M$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ai(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Xt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&T$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function D$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function A$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,T=void 0,N=void 0;if(w===x){f++,Je(_,C,t,f),f+=_.b||0,d++,m++;continue}var U=l[d+1],R=u[m+1];if(U){var j=U.a,W=U.b;N=x===j}if(R){var F=R.a,O=R.b;T=w===F}if(T&&N){f++,Je(_,O,t,f),vn(i,t,w,C,m,c),f+=_.b||0,f++,$n(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,vn(i,t,x,C,m,c),Je(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,$n(i,t,w,_,f),f+=_.b||0,f++,Je(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(U&&j===F){f++,$n(i,t,w,_,f),vn(i,t,x,C,m,c),f+=_.b||0,f++,Je(W,O,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];vn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var sc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+sc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}$n(e,r,n+sc,a,t)}function dc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)dc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=fn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function mc(e,r,n,a){return n.length===0?e:(dc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=B$(t,a);t===e&&(e=i)}return e}function B$(e,r){switch(r.$){case 0:return F$(e,r.s,r.u);case 4:return pt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return V$(e,r);case 5:return r.s(e);default:nn(10)}}function F$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function V$(e,r){var n=r.s,a=E$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ot(e,a),e}function E$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ot(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function Qt(e){if(e.nodeType===3)return mt(e.textContent);if(e.nodeType!==1)return mt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Lr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(Qt(v[a]),u);return p(Wr,l,r,u)}function R$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var U$=E(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Qt(l);return pc(i,function(v){var s=c(v),d=fc(u,s);l=mc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=ur.title,v=ur.body,s=Qt(v);return pc(i,function(d){ca=c;var m=l(d),f=Wr("body")(P)(m.eu),g=fc(s,f);v=mc(v,s,g,t),s=f,ca=0,u!==m.fL&&(ur.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function pc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(vo,lo,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(vo,lo,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(vo,lo,pr(function(){history.replaceState({},"",r),e()}))});var j$={addEventListener:function(){},removeEventListener:function(){}},N$=typeof window!="undefined"?window:j$;y(function(e,r,n){return ic(pr(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,Zt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?ie(n.a):q});function bc(e,r){return pr(function(n){ua(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Xv($s(e)))})})}function W$(e){return pr(function(r){ua(function(){r(Nr(e()))})})}$(function(e,r){return bc(r,function(n){return n[e](),zn})});$(function(e,r){return W$(function(){return N$.scroll(e,r),zn})});y(function(e,r,n){return bc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var G$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ie(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Y$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ie(d):q}a.push(L(fl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ie(v):q}return n(L(fl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ti=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Kt(e){for(var r=0;e.b;e=e.b)r++;return r}var H$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},I$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),J$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),O$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),q$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Z$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),X$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Q$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),K$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),ef=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),rf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},nf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},af=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},tf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},gc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},hc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},of=function(e){e.gl.disable(e.gl.CULL_FACE)},cf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},lf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},uf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},oi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],vf=[nf,af,tf,gc,hc,of,cf,lf,uf];function ii(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function $f(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function _c(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function ff(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=_c(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Kt(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function sf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=df(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Kt(r.b),indexBuffer:null,buffers:{}}}function df(e,r){var n=new Uint32Array(Kt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ci(e,r){return e+"#"+r}var wc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),gc(n),hc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ci(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ti++,v||(v=ii(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ti++,s||(s=ii(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=$f(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=mf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ci(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),pf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=sf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=ff(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=_c(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,yn(D0(n),i.a),u=0;u<oi.length;u++){var T=n[oi[u]];T.toggle!==n.toggle&&T.enabled&&(vf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function pf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var bf=y(function(e,r,n){return p$(r,{g:n,f:{},h:e},Sf,Cf)}),gf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),hf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),_f=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),wf=$(function(e,r){e.contextAttributes.antialias=!0}),yf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),xf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Sf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(M0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),H$(function(){return o(wc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Cf(e,r){return r.f=e.f,wc(r)}var Lf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Pf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Pf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var eo=new Float64Array(3),li=new Float64Array(3),ui=new Float64Array(3),zf=y(function(e,r,n){return new Float64Array([e,r,n])}),kf=function(e){return e[0]},Tf=function(e){return e[1]},Mf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Df=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(yc);function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(yc(e,r,n),n)}$(xc);function Sc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Sc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Af=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function bt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(bt);$(function(e,r){var n,a=eo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var Bf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Ff=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Vf=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Ef(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Ef(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Rf=new Float64Array(16),Uf=new Float64Array(16),jf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Nf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ye(Cc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Cc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ye(Lc);E(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],U=r[3],R=r[4],j=r[5],W=r[6],F=r[7],O=r[8],Q=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+b*U,n[1]=t*C+u*T+m*N+w*U,n[2]=i*C+v*T+f*N+x*U,n[3]=c*C+s*T+g*N+_*U,n[4]=a*R+l*j+d*W+b*F,n[5]=t*R+u*j+m*W+w*F,n[6]=i*R+v*j+f*W+x*F,n[7]=c*R+s*j+g*W+_*F,n[8]=a*O+l*Q+d*le+b*fe,n[9]=t*O+u*Q+m*le+w*fe,n[10]=i*O+v*Q+f*le+x*fe,n[11]=c*O+s*Q+g*le+_*fe,n[12]=a*ce+l*pe+d*Me+b*Se,n[13]=t*ce+u*pe+m*Me+w*Se,n[14]=i*ce+v*pe+f*Me+x*Se,n[15]=c*ce+s*pe+g*Me+_*Se,n}$(Pc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],U=r[9],R=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*U+v*R,n[9]=t*N+l*U+s*R,n[10]=i*N+u*U+d*R,n[11]=0,n[12]=a*j+c*W+v*F+m,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,eo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Sc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,T=g-f,N=c*c*v+u,U=w+d,R=b+m,j=w-d,W=l*l*v+u,F=n[0],O=n[1],Q=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],Me=n[7],Se=n[8],gr=n[9],hr=n[10],ja=n[11],Hu=n[12],Iu=n[13],Ju=n[14],Ou=n[15];return a[0]=F*x+fe*_+Se*C,a[1]=O*x+ce*_+gr*C,a[2]=Q*x+pe*_+hr*C,a[3]=le*x+Me*_+ja*C,a[4]=F*T+fe*N+Se*U,a[5]=O*T+ce*N+gr*U,a[6]=Q*T+pe*N+hr*U,a[7]=le*T+Me*N+ja*U,a[8]=F*R+fe*j+Se*W,a[9]=O*R+ce*j+gr*W,a[10]=Q*R+pe*j+hr*W,a[11]=le*R+Me*j+ja*W,a[12]=Hu,a[13]=Iu,a[14]=Ju,a[15]=Ou,a});function Wf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Wf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Gf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Gf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=xc(e,r,eo),t=va(bt(n,a,li),li),i=va(bt(a,t,ui),ui),c=Rf,l=Uf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=ov,Wn=nv,zc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),ro=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ro,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),vi=function(e){return p(ro,y(function(r,n,a){return o(A,z(r,n),a)}),P,e)},kc=1,Yf=2,Tc=0,ye=function(e){return{$:1,a:e}},no=$(function(e,r){return{$:3,a:e,b:r}}),$i=$(function(e,r){return{$:0,a:e,b:r}}),Mc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Hf=function(e){return{$:2,a:e}},ie=function(e){return{$:0,a:e}},q={$:1},If=Mv,Jf=Zv,Be=ac,Mr=$(function(e,r){return o(zv,e,Pa(r))}),ao=$(function(e,r){return h(o(Pv,e,r))}),Dc=function(e){return o(Mr,`
    `,o(ao,`
`,e))},kn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ur=function(e){return p(kn,$(function(r,n){return n+1}),0,e)},Of=iv,qf=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Qr=$(function(e,r){return p(qf,e,r,P)}),Ac=$(function(e,r){return p(Of,e,o(Qr,0,Ur(r)-1),r)}),er=Rv,Bc=function(e){var r=er(e);return 97<=r&&r<=122},Fc=function(e){var r=er(e);return r<=90&&65<=r},Zf=function(e){return Bc(e)||Fc(e)},Xf=function(e){var r=er(e);return r<=57&&48<=r},Qf=function(e){return Bc(e)||Fc(e)||Xf(e)},Fe=function(e){return p(kn,A,P,e)},an=xv,Kf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Dc(es(r))))}),es=function(e){return o(rs,e,P)},rs=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Zf(x)&&o(If,Qf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Mr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Ur(s))+" ways:"));return o(Mr,`

`,o(A,g,o(Ac,Kf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Mr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Mr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Dc(o(Jf,4,f))+(`

`+m))}}),Ve=32,gt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=Xu,to=pv,oo=$(function(e,r){return Zo(r)/Zo(e)}),ns=dv,xn=to(o(oo,2,Ve)),Vc=L(gt,0,xn,ht,ht),Ec=Ku,Rc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Uc=bv,_t=Qu,rr=$(function(e,r){return I(e,r)>0?e:r}),as=function(e){return{$:0,a:e}},io=ev,ts=$(function(e,r){e:for(;;){var n=o(io,Ve,e),a=n.a,t=n.b,i=o(A,as(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),os=function(e){var r=e.a;return r},is=$(function(e,r){e:for(;;){var n=to(r/Ve);if(n===1)return o(io,Ve,e).a;var a=o(ts,e,P),t=n;e=a,r=t;continue e}}),jc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Uc(o(oo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(is,t,r.l);return L(gt,_t(r.p)+n,o(rr,5,a*xn),i,r.p)}else return L(gt,_t(r.p),xn,ht,r.p)}),cs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(jc,!1,{z:a,l:n/Ve|0,p:t});var i=Rc(p(Ec,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ls=$(function(e,r){if(e<=0)return Vc;var n=e%Ve,a=p(Ec,n,e-n,r),t=e-n-Ve;return S(cs,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Iv,Z=Nv,M=Hv,se=Wv,$a=Jv,us=Ov,De=jv,co=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Wr("div"),vs=function(e){return{$:2,a:e}},Nc=$(function(e,r){return e}),Wc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Ar=function(e){return e},$s=Ar,fi=Ye(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),fs=Dv,Dr=Sv,Or=kv,Tn=$(function(e,r){return e<1?r:p(Or,e,Dr(r),r)}),za=Bv,ka=function(e){return e===""},Ta=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Gc=Fv,si=he(function(e,r,n,a,t){if(ka(t)||o(fs,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(Tn,c+1,t));if(l.$===1)return q;var u=l;return ie(we(fi,e,o(Ta,c,t),u,r,n,a))}else return ie(we(fi,e,t,q,r,n,a))}),di=E(function(e,r,n,a){if(ka(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return S(si,e,o(Tn,i,a),r,n,o(Ta,i,a))}else return S(si,e,"/",r,n,a)}),mi=y(function(e,r,n){if(ka(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return L(di,e,ie(o(Tn,t+1,n)),r,o(Ta,t,n))}else return L(di,e,q,r,n)});$(function(e,r){if(ka(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(mi,e,ie(o(Tn,a+1,r)),o(Ta,a,r))}else return p(mi,e,q,r)});var ss=Av,lo=function(e){},Mn=Nr,ds=Mn(0),Yc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(kn,e,r,Fe(d)):L(Yc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return L(Yc,e,r,0,n)}),ne=$(function(e,r){return p(br,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=dt,uo=$(function(e,r){return o(fa,function(n){return Mn(e(n))},r)}),ms=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Mn(o(e,a,t))},n)},r)}),ps=function(e){return p(br,ms(A),Mn(P),e)},bs=o$,gs=$(function(e,r){var n=r;return ic(o(fa,bs(e),n))}),hs=y(function(e,r,n){return o(uo,function(a){return 0},ps(o(ne,gs(e),r)))}),_s=y(function(e,r,n){return Mn(0)}),ws=$(function(e,r){var n=r;return o(uo,e,n)});Ke.Task=a$(ds,hs,_s,ws);var ys=lc("Task"),vo=$(function(e,r){return ys(o(uo,e,r))}),xs=U$,Ss=wv,sa={$:1},Hc=function(e){return{$:2,a:e}},Ma={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},Cs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ie(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Ic=function(e){var r=e.b;return o(Ne,Ma,r)},sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ls=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Ic(n):n;case 2:var i=a.a.cX;return(I(i+r.eJ,tn(n).db)>0?o(te,Cs,sr(o(Ne,sa,t))):Ar)(o(Ne,Hc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Wc,l.eA,Xe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,Ma,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Jc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ps=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),zs=$(function(e,r){return Fe(p(Ps,e,r,P))}),Oc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(zs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Oc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),ks=$(function(e,r){return p(Oc,0,e,r)}),Ts=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(h([a]),t)),c=o(ks,e,i),l=o(Jc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,sa,{B:d,ab:P,T:m})}else return r}}),Ms=function(e){var r=e.b;return o(Ne,sa,r)},Ds=function(e){var r=e.b;return o(Ne,Hc({cX:tn(e).db}),r)},As=$(function(e,r){switch(e.$){case 1:return Ms(r);case 2:return Ic(r);case 3:return Ds(r);default:var n=e.a;return o(Ts,n,r)}}),qc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Bs=$(function(e,r){return Xe(r,{av:e(r.av)})}),Fs=function(e){return{$:3,a:e}},Zc=function(e){return{$:2,a:e}},Xc=$(function(e,r){return{$:0,a:e,b:r}}),Vs=$(function(e,r){return{$:1,a:e,b:r}}),ze=$(function(e,r){if(r.$)return q;var n=r.a;return ie(e(n))}),X=function(e){return e<0?-e:e},$o=Vv,Es=y(function(e,r,n){return o(sr,0/0,$o(o(e,r,n)))}),Qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Rs=Lv,Kc=function(e){return p(Rs,A,P,e)},Us=$(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},Kc(r));return ve(e&&n?"-":"",r)}),oe=ac,wt=yv,el=Uv,rl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(wt,"0",rl(t))}else{var i=er(r);return i>=48&&i<57?o(wt,el(i+1),n):"0"}},yt=mv,js=_v,Da=function(e){return o(wt,e,"")},nl=y(function(e,r,n){return e<=0?n:p(nl,e>>1,ve(r,r),e&1?ve(n,r):n)}),Sn=$(function(e,r){return p(nl,e,r,"")}),xt=y(function(e,r,n){return ve(n,o(Sn,e-Dr(n),Da(r)))}),St=Cv,al=function(e){var r=o(ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Ns=function(e){var r=o(ao,"e",oe(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(sr,0,Gc(o(ss,"+",t)?o(Tn,1,t):t)),c=al(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(sr,"0",o(ze,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ze,qc(Da),an(ve(o(Sn,X(i),"0"),v))))):p(xt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Ws=y(function(e,r,n){if(yt(n)||js(n))return oe(n);var a=n<0,t=al(Ns(X(n))),i=t.a,c=t.b,l=Dr(i)+r,u=ve(o(Sn,-l+1,"0"),p(xt,l,"0",ve(i,c))),v=Dr(u),s=o(rr,1,l),d=o(e,a,p(Or,s,v,u)),m=p(Or,0,s,u),f=d?St(o(sr,"1",o(ze,rl,an(St(m))))):m,g=Dr(f),b=f==="0"?f:r<=0?ve(f,o(Sn,X(r),"0")):I(r,Dr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):ve(i+".",p(xt,r,"0",c));return o(Us,a,b)}),tl=Ws($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Gs=Es(tl),Ys=y(function(e,r,n){var a=o(oo,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Gs,t,n)}),ol=tv,Aa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ol,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ie(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},Kr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(Y,0,r,n,S(Y,1,v,s,d,m),S(Y,1,i,c,l,u))}else return S(Y,e,i,c,S(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(Y,0,v,s,S(Y,1,g,b,w,x),S(Y,1,r,n,m,t))}else return S(Y,e,r,n,a,t)}),Ct=y(function(e,r,n){if(n.$===-2)return S(Y,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ol,e,t);switch(u){case 0:return S(Kr,a,t,i,p(Ct,e,r,c),l);case 1:return S(Y,a,t,r,c,l);default:return S(Kr,a,t,i,c,p(Ct,e,r,l))}}),bn=y(function(e,r,n){var a=p(Ct,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(Y,1,t,i,c,l)}else{var u=a;return u}}),Hs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(Y,0,f,g,S(Y,1,n,a,S(Y,0,i,c,l,u),b),S(Y,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(Y,1,n,a,S(Y,0,i,c,l,u),S(Y,0,s,d,m,x))}else return e},pi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(Y,0,i,c,S(Y,1,u,v,s,d),S(Y,1,n,a,m,S(Y,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return S(Y,1,n,a,S(Y,0,i,c,C,m),S(Y,0,g,b,w,x))}else return e},Is=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(Y,n,l,u,v,S(Y,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,pi(r)}else break e;else return c.a,c.d,pi(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(Y,r,n,a,ea(t),l);var u=il(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,ea(m),f)}else return tr}else return S(Y,r,n,a,ea(t),l)}else return tr},gn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(Y,n,a,t,o(gn,e,i),c);var u=il(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,o(gn,e,m),f)}else return tr}else return S(Y,n,a,t,o(gn,e,i),c);else return o(Js,e,Gt(Is,e,r,n,a,t,i,c))}),Js=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=Hs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Kr,n,u,v,i,ea(c))}else return tr}else return S(Kr,n,a,t,i,o(gn,e,c))}else return tr}),Os=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(Y,1,a,t,i,c)}else{var l=n;return l}}),Gn=y(function(e,r,n){var a=r(o(Aa,e,n));if(a.$)return o(Os,e,n);var t=a.a;return p(bn,e,t,n)}),qs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Vs,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Xc,z(i,c),p(Ys,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){return a.$===3?Fs(n):a}));default:var r=e.a,n=e.b;return o(Gn,r,ze(function(a){return a.$===2?Zc(n):a}))}},Zs=function(e){return Bs(qs(e))},Xs=$(function(e,r){return o(ne,Zs(e),r)}),Qs=$(function(e,r){return Xe(r,{eA:o(Xs,e,r.eA)})}),Ks=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Xe(a,{B:o(qc,Qs(e),a.B)}))}),ed=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),rd=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Xe(t,{B:o(ed,o(e,i.a,r),i)}))}),nd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Xe(a,{aL:!a.aL});case 2:var t=n.a;return Xe(a,{G:p(Ls,e,t,a.G)});case 3:var i=n.a;return Xe(a,{G:o(Ks,i,a.G)});case 4:var c=n.a;return Xe(a,{G:p(rd,r,c,a.G)});default:var l=n.a;return Xe(a,{G:o(As,l,a.G)})}}),ad=$(function(e,r){return o(Ne,Ma,{B:z(e,r(e)),ab:P,T:P})}),td=i$,bi=td(P),da=Yv,Cn=Gv,od=$$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Cn)))},o(M,"left",Z))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se))))),id=function(e){return{$:4,a:e}},cd={$:0},ld=oc,He=$(function(e,r){return o($c,e,ld(r))}),H=He("className"),ud=function(e){var r=e.b.B;return r.b},ma=He("id"),vd=b$,pa=vd,$d=g$,re=$d,fd={$:1},sd=function(e){return{$:3,a:e}},dd=function(e){return{$:5,a:e}},gi=Wr("a"),fo=Wr("button"),hi=function(e){return o(He,"href",w$(e))},md=Lr("clip-rule"),Ce=Lr("d"),pd=Lr("fill"),cl=uc("http://www.w3.org/2000/svg"),bd=cl("svg"),gd=Lr("viewBox"),hd=o(h$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=bd(h([gd("0 0 24 24"),pd("currentColor"),o(re,"width","100%"),o(re,"height","100%"),hd("http://www.w3.org/2000/svg")])),_d=Lr("fill-rule"),Le=cl("path"),Br={eD:Ee(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(h([o(Le,h([_d("evenodd"),md("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},wd=function(e){return{$:0,a:e}},ll=vc,ul=$(function(e,r){return o(ll,e,wd(r))}),so=function(e){return o(ul,"click",De(e))},_i=He("target"),yd=He("title"),Lt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(Y,n,a,o(e,a,t),o(Lt,e,i),o(Lt,e,c))}),xd=mt,dr=xd,Sd=function(e){return p(ro,y(function(r,n,a){return o(A,n,a)}),P,e)},Cd=$(function(e,r){return{$:3,a:e,b:r}}),Ld=$(function(e,r){return{$:2,a:e,b:r}}),Pd=$(function(e,r){return{$:0,a:e,b:r}}),zd=$(function(e,r){return{$:1,a:e,b:r}}),Dn=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mo=L(Dn,0/255,0/255,0/255,1),kd=oc,vl=$(function(e,r){return o($c,e,kd(r))}),Td=vl("checked"),Oe=gv,Md=y(function(e,r,n){return ve(o(Sn,e-Dr(n),Da(r)),n)}),ba=lv,$l=function(e){var r=function(n){return n<10?Be(n):Da(el(87+n))};return e<16?r(e):ve($l(e/16|0),r(o(ba,16,e)))},Dd=o(te,$l,o(Md,2,"0")),po=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Ad=function(e){var r=po(e),n=r.cM,a=r.cc,t=r.b5;return o(Mr,"",o(A,"#",o(ne,o(te,Oe,Dd),h([n*255,a*255,t*255]))))},Pt=He("htmlFor"),Bd=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Fd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ba=$(function(e,r){return p(br,Fd(e),P,r)}),fl=E(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Vd=Y$,Ed=Ev,Rd=$(function(e,r){if(r.$)return ye(e);var n=r.a;return $e(n)}),Ud=G$,jd=function(e){return o(Ud,{ew:!1,fg:!1},e)},Fa=function(e){if(e.b){var r=e.a;return e.b,ie(r)}else return q},Nd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return $e(e(n))}}),Wd=function(e){return{$:2,a:e}},Gd=function(e){return{$:0,a:e}},Yd=function(e){return{$:1,a:e}},Ga=$(function(e,r){return er(r)-er(e)}),Ya=y(function(e,r,n){var a=er(n);return I(er(e),a)<1&&I(a,er(r))<1}),Hd=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):ye(Yd(r))},a=p(Ya,"0","9",r)?$e(o(Ga,"0",r)):p(Ya,"a","z",r)?$e(10+o(Ga,"a",r)):p(Ya,"A","Z",r)?$e(10+o(Ga,"A",r)):ye(Gd(r));return o(ga,n,a)}),sl=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return $e(c+l*e)},o(sl,e,i))},o(Hd,e,t))}),Id=$(function(e,r){return 2<=e&&e<=36?o(sl,e,St(r)):ye(Wd(e))}),Jd=Id(16),Od=y(function(e,r,n){return L(Dn,e,r,n,1)}),qd=E(function(e,r,n,a){return L(Dn,e,r,n,a)}),An=cv,Zd=$(function(e,r){var n=o(An,10,e);return Oe(r*n)/n}),Xd=Tv,Qd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Kc(n);if(a.b&&!a.b.b){var t=a.a;return Ed(h([t,t]))}else return n};return o(te,Xd,o(te,function(n){return o(ze,function(a){return p(Vd,1,a,n)},jd(e))},o(te,Bd(Fa),o(te,ze(function(n){return n.fG}),o(te,ze(Ba(Ar)),o(te,Rd("Parsing hex regex failed"),ga(function(n){var a=o(ne,o(te,r,o(te,Jd,Nd(ns))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(qd,t/255,c/255,u/255,o(Zd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(Od,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ha=Wr("input"),zt=Wr("label"),kt=He("name"),dl=$(function(e,r){return p(br,M,r,e)}),Kd=o(dl,h(["target","checked"]),Z),em=function(e){return o(ul,"change",o($a,e,Kd))},rm=function(e){return z(e,!0)},nm=function(e){return{$:1,a:e}},am=$(function(e,r){return o(ll,e,nm(r))}),tm=o(dl,h(["target","value"]),Cn),bo=function(e){return o(am,"input",o($a,rm,o($a,e,tm)))},ml=He("max"),pl=He("min"),bl=function(e){return o(He,"step",e)},_a=He("type"),go=He("value"),wi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(J,P,h([o(zt,h([Pt(r)]),h([o(J,h([H("relative w-full")]),h([o(J,h([H("inline-block")]),h([dr(r)])),o(J,h([H("inline-block float-right")]),h([dr(oe(n))]))]))])),o(ha,h([_a("range"),o(re,"width","100%"),ma(r),kt(r),pl(oe(a)),ml(oe(t)),go(oe(n)),bl(oe(i)),bo(o(te,$o,o(te,sr(42),c)))]),P)]))},om=$(function(e,r){if(r.$)return e;var n=r.a;return n}),im=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([H("h-12 py-4")]),h([o(zt,h([H("block"),Pt(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),kt(e),em(Cd(e)),Td(c)]),P),dr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return wi({cf:e,cr:i,cv:t,cz:Pd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return wi({cf:e,cr:i,cv:t,cz:o(te,Oe,zd(e)),cV:1,c0:c});default:var c=r.a;return o(J,P,h([o(J,h([o(re,"margin-bottom","6px")]),h([o(zt,h([Pt(e)]),h([dr(e)]))])),o(ha,h([_a("color"),o(re,"width","100%"),o(re,"height","26px"),o(re,"padding","0px"),ma(e),kt(e),bo(function(l){return o(Ld,e,o(om,mo,Qd(l)))}),go(Ad(c))]),P)]))}}),cm=function(e){return o(J,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([H("text-lg pb-2")]),h([dr(e.fh)])),o(J,h([H("pl-2 pr-2")]),Sd(o(Lt,im,e.av)))]))},lm=function(e){return o(J,h([H("text-xs text-white60")]),o(ne,cm,e))},um=function(e){return o(J,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([dr("clock: "+o(tl,3,tn(e).db))]))},vm=function(e){e.a;var r=e.b.T;return o(ze,function(n){return Oe(60/(tn(e).db-n))},o(ze,o(te,os,function(n){return n.db}),Fa(o(Jc,59,r))))},$m=function(e){return o(J,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=vm(e);if(r.$===1)return h([dr("... Fps")]);var n=r.a;return h([dr(Be(n)+" Fps")])}())},fm=function(e){return{$:0,a:e}},sm=function(e){var r=e.b.T;return Ur(r)},dm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ur(r)+1+Ur(n)},mm=function(e){return o(ha,h([H("absolute w-full"),_a("range"),pl(Be(0)),ml(Be(dm(e)-1)),go(Be(sm(e))),bl(Be(1)),bo(o(te,$o,o(te,sr(42),o(te,Oe,fm))))]),P)},yi={$:1},xi={$:3},Si={$:2},Tt=function(e){return!e.b},gl=vl("disabled"),Ha=y(function(e,r,n){return o(fo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),gl(e),so(r)]),h([dr("REC")]))}),Ia=y(function(e,r,n){return o(fo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),gl(e),so(n)]),h([o(J,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),pm=function(e){var r=e.a,n=e.b.ab;return o(J,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(Ha,!1,yi,"text-red-500 font-bold");case 1:return p(Ha,!1,Si,"text-white60 hover:text-white80 font-bold");default:return p(Ha,!0,Si,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ia,Tt(n),Br.fq,xi);case 1:return p(Ia,Tt(n),Br.fq,xi);default:return p(Ia,!1,Br.fp,yi)}}()]))},bm=function(e){return o(J,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([mm(e),pm(e),$m(e),um(e)]))},gm=function(e){var r=e.a;return yr(r,Ma)},hm=$(function(e,r){var n=gm(r.G)?o(J,P,P):o(J,h([H("absolute pointer-events-none w-8 h-8"),o(re,"left",oe(e.fs.fU+.5*e.cS.fS)+"px"),o(re,"top",oe(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(J,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Br.fs]))]));return o(J,P,h([n]))}),_m=$(function(e,r){var n=o(fo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),so(fd),yd("Distraction Free Mode")]),h([Br.f0])),a=40,t=260,i=o(J,h([H("absolute w-8 bottom-12")]),h([o(gi,h([H("text-twitterBlue40 hover:text-twitterBlue"),hi("https://twitter.com/AzizErkalSelman"),_i("_blank")]),h([Br.fN]))])),c=80,l=o(J,h([H("absolute w-8 bottom-2")]),h([o(gi,h([H("text-githubCat40 hover:text-githubCat"),hi("https://github.com/erkal/elm-3d-playground-exploration"),_i("_blank")]),h([Br.eQ]))])),u=e.cS.fS>640?B(e.cS.eW,a+t,e.cS.fS-(a+t)):B(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,d=u.c;return r.aL?o(J,h([H("fixed w-10 h-10 p-1")]),h([n])):o(J,P,h([o(J,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(re,"width",oe(a)+"px")]),h([n,i,l])),o(J,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(re,"width",oe(t)+"px"),o(re,"height",oe(v)+"px")]),h([o(pa,sd,lm(tn(r.G).eA))])),o(J,h([H("absolute bottom-0"),o(re,"left",oe(s)+"px"),o(re,"height",oe(c)+"px"),o(re,"width",oe(d)+"px")]),h([o(pa,dd,bm(r.G))])),o(hm,e,r)]))}),wm=y(function(e,r,n){var a=ud(n.G),t=tn(n.G);return o(J,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(re,"width",oe(t.cS.fS)+"px"),o(re,"height",oe(t.cS.eW)+"px")]),h([o(J,h([H("fixed")]),h([o(pa,Nc(cd),o(e,t,a))])),o(J,h([ma("gui")]),h([o(_m,t,n),o(pa,id,o(r,t,a))]))]))}),ym=Ye(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(nd,r,i,u,v),bi)}),l=function(u){var v=o(Wc,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(ad,v,a)},bi)};return xs({e0:l,fH:Nc(od(vs)),fO:c,fQ:o(wm,e,t)})}),xm=E(function(e,r,n,a){return we(ym,e,r,n,a,$(function(t,i){return o(J,P,P)}),y(function(t,i,c){return c}))}),Sm=function(e){return{}},Cm=$(function(e,r){return z(e,Zc(r))}),Lm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),hl=tr,Pm=function(e){return p(kn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),hl,e)},zm=y(function(e,r,n){return p(Lm,e,r,Pm(n))}),Ja=zm,Yn=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Xc,z(a,t),n))}),km=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Dn,f,m,d,a)}),Tm=y(function(e,r,n){return L(km,e,r,n,1)}),nr=uv,Mm=h([p(Ja,"Camera",!0,h([p(Yn,"camera distance",z(3,8),8),p(Yn,"camera azimuth",z(0,2*nr),0),p(Yn,"camera elevation",z(-nr/2,nr/2),.5)])),p(Ja,"Color",!0,h([o(Cm,"cube color",p(Tm,0,.36,.5))])),p(Ja,"Time",!0,h([p(Yn,"period",z(.1,5),.7)]))]),Dm=$(function(e,r){return r}),Am=$(function(e,r){return o(ze,function(n){if(n.$)return 0;var a=n.b;return a},o(Aa,e,r.av))}),Bm=$(function(e,r){return o(sr,0,Fa(o(Ba,Am(e),r)))}),Fm=$(function(e,r){return o(Bm,e,r.eA)}),ra=Fm,Vm=sv,Em=function(e){return e},wr=function(e){return e},Mt=function(e){var r=e;return-r},Rm=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),_l=function(e){var r=e;return r.c3},wl=function(e){var r=e;return r.c4},Um=function(e){return o(Rm,_l(e),wl(e))},Gr=function(e){var r=e;return r.cA},jr=vv,en=$v,Oa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=en(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c5*u,T=l*C,N=2*(w-T),U=2*(w+T),R=d*C,j=2*(R+b),W=2*(R-b),F=g*C,O=2*(F-m),Q=2*(F+m),le=C*C,fe=1-2*(x+le),ce=1-2*(f+le);return{fU:fe*i.fU+N*i.fY+j*i.c5,fY:U*i.fU+ce*i.fY+O*i.c5,c5:W*i.fU+Q*i.fY+_*i.c5}}),jm=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=en(c),v=a.cA,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,T=l*C,N=w*C,U=C*C,R=1-2*(_+U),j=b.c5*u,W=l*j,F=2*(N-W),O=2*(N+W),Q=w*j,le=2*(Q+T),fe=2*(Q-T),ce=C*j,pe=2*(ce-x),Me=2*(ce+x),Se=j*j,gr=1-2*(U+Se),hr=1-2*(_+Se);return{fU:s.fU+gr*d+F*m+le*f,fY:s.fY+O*d+hr*m+pe*f,c5:s.c5+fe*d+Me*m+R*f}}),mr=function(e){return e},Pr=function(e){var r=e;return r.c3},zr=function(e){var r=e;return r.c4},kr=function(e){var r=e;return r.c6},Nm=y(function(e,r,n){return mr({cA:p(jm,e,r,Gr(n)),c3:p(Oa,e,r,Pr(n)),c4:p(Oa,e,r,zr(n)),c6:p(Oa,e,r,kr(n))})}),Ci=y(function(e,r,n){return p(Nm,e(n),r,n)}),ho=function(e){var r=e;return r.eH},Bn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),yl=$(function(e,r){return mr({cA:o(Bn,e,Gr(r)),c3:Pr(r),c4:zr(r),c6:kr(r)})}),Wm=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),Gm=y(function(e,r,n){return o(yl,o(Wm,r,e),n)}),Ym=y(function(e,r,n){return p(Gm,ho(e(n)),r,n)}),Fn=$(function(e,r){return{eH:r,cA:e}}),Hm=function(e){var r=e;return o(Fn,r.cA,r.c3)},Im=function(e){var r=e;return o(Fn,r.cA,r.c4)},Jm=function(e){var r=e;return o(Fn,r.cA,r.c6)},Om=function(e){var r=mr({cA:e.aR,c3:wl(e.dl),c4:Um(e.dl),c6:_l(e.dl)}),n=p(Ym,Jm,e.cb,p(Ci,Hm,Mt(e.bC),p(Ci,Im,e.bx,r)));return n},qm=function(e){return{$:0,a:e}},me=function(e){var r=e;return X(r)},na=function(e){var r=e;return .5*r},Zm=fv,Xm=function(e){var r=e;return Zm(r)},Qm=function(e){var r=na(me(e.ej)),n=Xm(r);return{cL:qm(n),c1:e.c1}},Fr=function(e){return e},cr={fU:0,fY:0,c5:0},xl=Ar,vr=function(e){return e},Sl=vr({fU:1,fY:0,c5:0}),_o=Sl,wo=vr({fU:0,fY:0,c5:1}),yo=wo,Km=xl({cA:cr,c3:yo,c4:_o}),e0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Qm({ej:Fr(2*Vm(.5)),c1:Om({bx:Fr(n),cb:wr(t),bC:Fr(a),aR:Em(r),dl:Km})})},r0=function(e){return e0({bx:o(ra,"camera azimuth",e),cb:o(ra,"camera distance",e),bC:o(ra,"camera elevation",e),aR:{fU:0,fY:0,c5:0}})},Li=function(e){return e*nr/180},xo=$(function(e,r){return{$:0,a:e,b:r}}),Cl=$(function(e,r){return{$:2,a:e,b:r}}),Ll=function(e){return{$:5,a:e}},Pl=$(function(e,r){return{$:4,a:e,b:r}}),zl=$(function(e,r){return{$:3,a:e,b:r}}),kl=$(function(e,r){return{$:1,a:e,b:r}}),n0=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),a0=function(e){var r=e;return r},So=function(e){var r=e;return a0(r.er)},Co=function(e){var r=e;return r.aK},t0=$(function(e,r){return{er:o(yl,e,So(r)),aK:Co(r)}}),o0=$(function(e,r){var n=r;return o(Fn,o(Bn,e,n.cA),n.eH)}),i0=$(function(e,r){var n=r;return{k:o(o0,e,n.k),e9:n.e9,fu:n.fu}}),Lo=function(e){var r=e;return r},c0=function(e){return e},Tl=$(function(e,r){var n=Lo(r),a=n.a,t=n.b;return c0(z(e(a),e(t)))}),l0=$(function(e,r){return o(Tl,Bn(e),r)}),Po=function(e){var r=e;return r.ey},zo=function(e){var r=e;return r.fu},Ml=$(function(e,r){return{ey:r,fu:me(e)}}),u0=$(function(e,r){return o(Ml,zo(r),o(Bn,e,Po(r)))}),Dl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),v0=$(function(e,r){return o(Dl,Bn(e),r)}),Al=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(n0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(xo,s,o(t0,i,c));case 1:var s=r.a,l=r.b;return o(kl,s,o(v0,i,l));case 3:var s=r.a,u=r.b;return o(zl,s,o(u0,i,u));case 2:var s=r.a,v=r.b;return o(Cl,s,o(i0,i,v));case 4:var s=r.a,d=r.b;return o(Pl,s,o(l0,i,d));default:var m=r.a;return Ll(o(ne,Al(B(n,a,t)),m))}}),Pi=function(e){return Al(B(e,0,0))},qa=function(e){return e/255},$0=y(function(e,r,n){return L(Dn,qa(e),qa(r),qa(n),1)}),f0=function(e){return e},s0=function(e){return wr(.01*e)},zi=function(e){return e},d0=function(e){return e},m0=function(e){return{$:0,a:e}},p0=m0,b0={$:3},g0=b0,h0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),_0=h0,w0=$(function(e,r){return r.b?p(br,A,r,e):e}),We=function(e){return p(br,w0,P,e)},ko=$(function(e,r){return We(o(ne,e,r))}),y0=function(e){return{$:1,a:e}},x0=y0,S0=function(e){return o(Lr,"height",Be(e))},C0=function(e){return m$(_$(e))},L0=C0,P0=function(e){return{$:2,a:e}},z0=P0,k0=function(e){return o(Mr,"",e)},T0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return k0(h(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},M0=$(function(e,r){switch(r.$){case 0:return o(gf,e,r);case 1:return o(hf,e,r);case 2:return o(_f,e,r);case 3:return o(wf,e,r);case 4:return o(yf,e,r);default:return o(xf,e,r)}}),D0=$(function(e,r){switch(r.$){case 0:return o(J$,e,r);case 1:return o(O$,e,r);case 2:return o(q$,e,r);case 3:return o(Z$,e,r);case 4:return o(X$,e,r);case 5:return o(Q$,e,r);case 6:return o(K$,e,r);case 7:return o(ef,e,r);default:return rf(e)}}),A0=y(function(e,r,n){return p(bf,e,r,n)}),ki=function(e){var r=e;return r},on=Bf,Za=L(on,1,1,1,1),qe=y(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),B0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),F0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(B0,n*a/t,n,n*(1-a-t)/t)}),Vn=zf,V0=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=$(function(e,r){return V0(o(F0,e,r))}),Bl=$(function(e,r){return{dp:yr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=jf,E0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Xa=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return we(t,e,c,E0(a),a.dp,r,n)}),Fl=Ye(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Bl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Xa,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(A,S(Xa,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(A,S(Xa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(kn,L(Fl,e,r,n,a),i,T)}}),R0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Vl=R0,Mo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),U0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,518,r,n,a)},j0=$(function(e,r){return{$:6,a:e,b:r}}),N0=j0,El=h([U0({V:1,W:0,Z:!1}),L(Vl,!1,!1,!1,!1),o(N0,0,1)]),rn=519,Do=8,Rl=15,Zr=7681,W0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=I$,G0=$(function(e,r){return{$:0,a:e,b:r}}),Y0=G0({df:1,$7:0,dV:5}),Ae=Lf,H0=Y0(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),I0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},J0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ao=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(J0,a,t,i)))}),Bo=function(e){return p(Ao,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Fo=function(e){return S(ae,h([Bo(e),L(Vl,!1,!1,!1,!1)]),I0,W0,H0,{})},O0=Fo({a8:Zr,co:0,cN:Do,bl:rn,c2:Rl,bt:Zr,bu:Zr}),q0=516,Ti=5386,xe=7680,Z0=function(e){return o(An,2,e+4)},Ul=function(e){return Fo({a8:xe,co:Rl,cN:Do,bl:q0,c2:Z0(e),bt:Ti,bu:Ti})},X0=y(function(e,r,n){return We(h([p(qe,e,n,El),h([Ul(r),O0])]))}),Q0=$(function(e,r){return We(o(Ac,X0(e),r))}),K0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,513,r,n,a)},ep=K0({V:1,W:0,Z:!0}),rp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},np=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return rp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},ap=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Mi=$(function(e,r){var n=e,a=r;return p(ap,32774,n,a)}),tp=1,Di=771,op=770,Vo=np({bv:0,aH:o(Mi,tp,Di),by:0,bA:o(Mi,op,Di),bF:0,bV:0}),Yr=h([ep,Vo]),ip=function(e){var r=e;return r.dO},cp=function(e){var r=e;return r.dP},jl=function(e){var r=e;return r.dQ},lp=function(e){var r=e;return r.dR},up=function(e){var r=e;return r.dS},Nl=function(e){var r=e;return r.dT},$r=$(function(e,r){var n=e,a=r;return a-n}),Wl=function(e){return B(o($r,lp(e),ip(e)),o($r,up(e),cp(e)),o($r,Nl(e),jl(e)))},Ai=function(e){var r=e;return Gr(r)},vp=function(e){return e},$p=function(e){return mr({cA:vp({fU:e.H,fY:e.I,c5:e.J}),c3:vr({fU:e.q,fY:e.r,c5:e.s}),c4:vr({fU:e.t,fY:e.u,c5:e.v}),c6:vr({fU:e.w,fY:e.x,c5:e.y})})},Qa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Gl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Yl=$(function(e,r){return{cA:o(Gl,e,Gr(r)),c3:o(Qa,e,Pr(r)),c4:o(Qa,e,zr(r)),c6:o(Qa,e,kr(r))}}),Dt=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),wa=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(rr,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),fp=$(function(e,r){var n=wa(r),a=wa(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},sp=function(e){var r=e;return B(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),dp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(me(a)),c=na(me(n)),l=na(me(t)),u=sp(r),v=u.a,s=u.b,d=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Bi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,d=Ge(kr(e)),m=X(l*d.fU)+X(c*d.fY)+X(i*d.c5),f=Ge(zr(e)),g=X(l*f.fU)+X(c*f.fY)+X(i*f.c5),b=Ge(Pr(e)),w=X(l*b.fU)+X(c*b.fY)+X(i*b.c5),x=o(dp,B(w,g,m),o(Gl,e,p(Dt,s,v,u)));if(a.$)return ie(x);var _=a.a;return ie(o(fp,_,x))}),At=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Bi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Bi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(At,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Yl,$p(v),e),m=r*v.bX,f=e,g=r,b=L(At,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),cn=kf,ln=Tf,un=Mf,Hl=function(e){return{$:4,a:e}},mp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Hl(o(mp,e,P))},pp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},bp=function(e){var r=e;return r},Fi=Fo({a8:Zr,co:0,cN:Do,bl:rn,c2:255,bt:Zr,bu:Zr}),qr=hv,lr=0,gp=function(e){var r=e,n=o(rr,X(r.fU),o(rr,X(r.fY),X(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=qr(i*i+t*t+a*a);return c*n}else return lr},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Ue=$(function(e,r){var n=e,a=r;return Qe({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),dn=z({bd:o(Ue,Pe,Pe),bK:o(Ue,Pe,Pe),bL:o(Ue,Pe,Pe),bM:o(Ue,Pe,Pe)},L(on,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),Il=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,515,r,n,a)},Ol=240,hp=h([Jl({V:1,W:0,Z:!0}),Bo({a8:xe,co:Ol,cN:0,bl:Il,c2:0,bt:xe,bu:xe}),Vo]),_p=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=me(a),l=c,u=me(t),v=u,s=n.cL;if(s.$){var m=s.a;return yt(v)?Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return yt(v)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Hn=$(function(e,r){return(1&e>>r)===1?0:1}),wp=function(e){return h([Jl({V:1,W:0,Z:!0}),Bo({a8:xe,co:Ol,cN:e,bl:Il,c2:0,bt:xe,bu:xe}),Vo])},yp=y(function(e,r,n){return We(o(ne,function(a){var t=a<<4,i=L(on,o(Hn,a,0),o(Hn,a,1),o(Hn,a,2),o(Hn,a,3));return p(qe,e,z(r,i),wp(t))},o(Qr,1,o(An,2,n)-1)))}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Xr=function(e){var r=e;return r},xp=Nf,Vi=function(e){var r=e;return fr(kr(r))},ql=vr({fU:0,fY:1,c5:0}),Zl=ql,Sp={cA:cr,c3:_o,c4:Zl,c6:yo},Va=function(e){var r=e;return r},Cp=function(e){var r=Va(Gr(e)),n=Ge(kr(e)),a=Ge(zr(e)),t=Ge(Pr(e));return Qe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Lp=$(function(e,r){var n=r;return Cp(o(Yl,n,e))}),Pp=function(e){return o(Lp,Sp,e)},zp=function(e){var r=e;return r.c1},kp=function(e){var r=e;return Pr(r)},Tp=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Mp=function(e){var r=e;return zr(r)},Dp=function(e){var r=zp(e.ev),n=mr({cA:Ai(r),c3:kp(r),c4:Mp(r),c6:fr(Vi(r))}),a=En(e.aP),t=a,i=L(At,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Pp(r),u=o(K,.99,o(ue,me(e.aJ),Mt(jl(c)))),v=Wl(c),s=v.a,d=v.b,m=v.c,f=gp(p(Tp,s,d,m)),g=o(K,1.01,o(hn,f,Mt(Nl(c)))),b=o(_p,e.ev,{eq:e.eq,eP:g,fi:u}),w=xp(b).dM,x=w?Ge(fr(Vi(r))):Xr(Ai(r)),_=function(){var ce=e.bZ;switch(ce.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var pe=ce.a;return z(3,pe);case 4:var pe=ce.a;return z(4,pe);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,U=N,R=o(To,U,e.b$),j=R,W=Qe({dx:0,dy:x.fU,dz:cn(j),dA:e.ec,dB:0,dC:x.fY,dD:ln(j),dE:bp(f),dF:0,dG:x.c5,dH:un(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),F=we(Fl,W,l,b,pp,t,{M:P,U:P,fB:P}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return We(h([p(qe,F.M,z(Q,Za),Yr),p(qe,F.U,dn,Yr)]));case 1:var Q=O.a;return We(h([p(qe,F.M,dn,Yr),h([Fi]),p(qe,F.fB,Q.bd,El),h([Ul(0)]),p(qe,F.M,z(Q,Za),hp),p(qe,F.U,dn,Yr)]));default:var le=O.a,fe=O.b;return We(h([p(qe,F.M,z(fe,Za),Yr),h([Fi]),o(Q0,F.fB,le),p(yp,F.M,fe,Ur(le)),p(qe,F.U,dn,Yr)]))}},Ap=function(e){return o(Lr,"width",Be(e))},Bp=$(function(e,r){var n=h([x0(1),z0(0),p0(!0),L(_0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,g0,n),"1",1);default:var T=C.a;return B(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=ki(v),d=o(re,"height",Be(s)+"px"),m=ki(u),f=m/s,g=o(ko,function(C){return Dp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(re,"width",Be(m)+"px"),w=e.aI,x=w,_=T0(x);return p(L0,"div",h([o(re,"padding","0px"),b,d]),h([z(i,p(A0,t,h([Ap(Oe(m*c)),S0(Oe(s*c)),b,d,o(re,"display","block"),o(re,"background-color",_)]),g))]))}),Fp=function(e){return o(Bp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Xl=function(e){return e},Ei=Xl({fU:.31271,fY:.32902}),Vp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(To,r.cd,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cJ:0,bV:cn(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Ep=function(e){return e},Rp=function(e){return Ep(1.2*o(An,2,e))},Ka=function(e){return e},Up={$:0},jp=Up,Ql=function(e){return e},Np=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Ri=function(e){var r=e;return r},Wp=function(e){e:for(;;){if(yr(e.e2,lr)&&yr(e.e3,lr))return Pe;if(o(Np,me(e.e2),me(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=X(Ri(e.e3)/nr),a=X(Ri(e.e2)/nr),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(To,Ql(1),e.b6),v=u;return{by:a*un(v),ex:!1,bF:a*ln(v),cJ:n/a,bV:a*cn(v),cZ:3,fU:i,fY:c,c5:l}}}},Ui=function(e){return Wp({b6:e.b6,e2:e.cd,e3:lr,ei:e.ei})},Kl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Gp=function(e){var r=e;return r},eu=function(e){var r=p(Kl,1667,25e3,Gp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Xl({fU:n,fY:a})},ru=function(e){return e},Yp=eu(ru(12e3)),Hp=eu(ru(5600)),Ip=function(e){return{$:2,a:e}},Jp=function(e){return Ip(e)},Op=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},In=function(e){var r=e;return r},qp=function(e){var r=e;return r.ex},Zp=nu(dn.a),Xp=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(br,n,z(P,P),r)}),Qp=function(e){var r=e;return Qe({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Kp=ee(function(e,r,n,a,t,i,c,l){var u=o(Xp,qp,h([In(e),In(r),In(n),In(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Op,o(ne,Qp,v),{bd:o(Ue,m,g),bK:o(Ue,w,_),bL:o(Ue,t,i),bM:o(Ue,c,l)})}else return Zp}else return nu({bd:o(Ue,e,r),bK:o(Ue,n,a),bL:o(Ue,t,i),bM:o(Ue,c,l)})}),eb=y(function(e,r,n){return La(Kp,e,r,n,Pe,Pe,Pe,Pe,Pe)}),rb=function(e){var r=o(Vp,d0(e.fB),{b6:Hp,eH:e.fJ,cd:Ka(8e4)}),n=Ui({b6:Yp,cd:Ka(2e4),ei:e.ei}),a=Ui({b6:Ei,cd:Ka(15e3),ei:fr(e.ei)}),t=p(eb,r,n,a);return Fp({b0:Jp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Rp(15),bJ:t,bZ:jp,b$:Ei})},au=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),nb=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),ab=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),tb=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),ob=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Eo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(ob,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(nb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(tb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(ab,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ro={$:0},ib=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=wa(c(u)),d=o(de,s.dR,e),m=o(ue,s.dO,r),f=o(de,s.dS,n),g=o(ue,s.dP,a),b=o(de,s.dT,t),w=o(ue,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),cb=y(function(e,r,n){var a=wa(e(r));return La(ib,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),et=$(function(e,r){var n=e,a=r;return I(a,n)<1}),iu=function(e){return o(et,e.dO,e.dR)&&o(et,e.dP,e.dS)&&o(et,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},Vr=function(e){var r=e;return r.fU},Er=function(e){var r=e;return r.fY},Rr=function(e){var r=e;return r.c5},cu=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Vr(n),c=Er(n),l=Rr(n),u=Vr(a),v=Er(a),s=Rr(a),d=Vr(t),m=Er(t),f=Rr(t);return iu({dO:o(ue,i,o(ue,u,d)),dP:o(ue,c,o(ue,v,m)),dQ:o(ue,l,o(ue,s,f)),dR:o(de,i,o(de,u,d)),dS:o(de,c,o(de,v,m)),dT:o(de,l,o(de,s,f))})},lu=Df,ke=function(e){return lu(Va(e))},uu=function(e){var r=e;return r},Ea=function(e){return lu(uu(e))},lb=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Bt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),ub={fU:0,fY:0,c5:0},vb=$(function(e,r){var n=e,a=r,t=o(rr,X(a.fU),o(rr,X(a.fY),X(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=qr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return ub}),$b=vb(Ql(1)),vu=y(function(e,r,n){var a=o(Bt,r,n),t=o(Bt,e,r);return $b(o(lb,a,t))}),fb=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Ea(p(vu,n,a,t));return B({o:i,bT:ke(n)},{o:i,bT:ke(a)},{o:i,bT:ke(t)})},sb=$(function(e,r){return{$:2,a:e,b:r}}),$u=sb({df:3,$7:0,dV:4}),db=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ne,fb,e)),t=p(cb,cu,r,n);return L(au,t,e,a,0)}else return Ro},Re=y(function(e,r,n){return B(e,r,n)}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),fu=function(){var e=wr(1),r=wr(1),n=wr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),d=p(be,i,v,l),m=o(K,.5,n),f=p(be,m,t,a),g=p(be,m,v,a),b=p(be,m,t,l),w=p(be,m,v,l);return Eo(db(h([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,g,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,g),p(Re,s,d,w)])))}(),Jn={$:0},mb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),pb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ea(p(vu,u,l,c)),s={o:v,bT:ke(u)},d={o:v,bT:ke(l)},m={o:v,bT:ke(c)};return o(A,s,o(A,d,o(A,m,n)))}),Uo=function(e){var r=e;return r.D},bb=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ie(p(e,t,i,c))}),Ft=4294967295>>>32-xn,Vt=rv,gb=y(function(e,r,n){e:for(;;){var a=Ft&r>>>e,t=o(Vt,a,n);if(t.$){var v=t.a;return o(Vt,Ft&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),hb=function(e){return e>>>5<<5},_b=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,hb(n))>-1?ie(o(Vt,Ft&e,i)):ie(p(gb,a,e,t))}),jo=function(e){var r=e;return r.ah},rt=$(function(e,r){return o(_b,e,jo(r))}),wb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(bb,y(function(c,l,u){return B(c,l,u)}),o(rt,a,e),o(rt,t,e),o(rt,i,e))};return o(Ba,r,Uo(e))},yb=y(function(e,r,n){e:for(;;){var a=o(io,Ve,e),t=a.a,i=a.b;if(I(_t(t),Ve)<0)return o(jc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(yb,e,P,0):Vc},xb=y(function(e,r,n){return e(r(n))}),Sb=$(function(e,r){return!o(Qc,o(xb,Ss,e),r)}),Cb=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Lb=function(e){var r=e.a;return r},su=$(function(e,r){var n=Lb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(Sb,a,r)?{D:r,ah:e}:{D:o(Cb,a,r),ah:e}}),Pb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=Pb({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return z(B(a.fU,a.fY,a.c5),B(n.fU,n.fY,n.c5))}),ji=p(Vn,0,0,0),nt=Ye(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Aa,o(ta,e,r),t);if(v.$){var d={o:ji,bT:ke(r)},m={o:ji,bT:ke(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),zb=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,T=we(nt,s,m,f,b,r,we(nt,d,s,g,f,r,we(nt,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,U=N.a,R=N.b;return z(U,Fe(R))}}),kb=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(bn,o(ta,m,s),f,p(bn,o(ta,s,d),g,p(bn,o(ta,d,m),b,t))),x=o(A,B(b,g,f),a),_=e,C=v,T=n+3,N=x,U=w;e=_,r=C,n=T,a=N,t=U;continue e}else return B(a,t,n)}),Tr=y(function(e,r,n){var a=wb(n),t=p(br,pb(r),P,a),i=S(kb,r,a,0,P,hl),c=i.a,l=i.b,u=i.c,v=S(zb,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=Tt(d)?t:ve(t,d);return p(mb,e,o(su,No(m),s),o(Rn,m,s))}),Et=function(e){return{D:o(ne,function(r){return B(3*r,3*r+1,3*r+2)},o(Qr,0,Ur(e)-1)),ah:No(We(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ne,Ln,r);return p(Tr,a,Ar,Et(n));case 2:var a=e.a,r=e.b,n=o(ne,Ln,r);return p(Tr,a,Ar,Et(n));case 3:var a=e.a,t=e.b;return p(Tr,a,Ar,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ni=du(fu),mu={$:0},k=mu,ge=$(function(e,r){return{$:1,a:e,b:r}}),Tb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Mb=1029,Db=function(e){return{$:5,a:e}},pu=function(e){var r=e;return Db(r)},Ab=pu(Mb),Bb=1028,Fb=pu(Bb),Te=y(function(e,r,n){return r===1?e?o(A,Ab,n):o(A,Fb,n):n}),bu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},at=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Te,l,a,d),bu,Tb,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Te,l,a,d),gu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),hu=$(function(e,r){return{$:3,a:e,b:r}}),Vb={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Eb=E(function(e,r,n,a){return o(hu,n,ee(function(t,i,c,l,u,v,s,d){return S(ae,d,_u,Vb,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Go={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Un=function(e){var r=e;return r},Ra=Af,ir=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Te,u,t,m),gu,Go,a,{aN:o(Ra,Un(r),e),b:l,c,d:s,e:i,f:v})}))}),Rb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Ub=he(function(e,r,n,a,t){return o(hu,a,ee(function(i,c,l,u,v,s,d,m){return S(ae,m,_u,Rb,t,{aN:o(Ra,Un(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),yu,wu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},jb=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Te,v,i,f),Su,xu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Nb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(d,m,f,g,b,w,x,_){var C=x.a,T=x.b;return S(ae,p(Te,g,s,_),Su,Cu,v,{b4:e,b7:r,b8:i,b9:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Lu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},qn=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Te,v,i,f),yu,Lu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),Wb=function(e){return{$:0,a:e}},Wi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),Gb=function(e){return L(on,cn(e),ln(e),un(e),1)},Yo=L(on,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Yo)}else{var n=r.a;return z(e,Gb(n))}}),Pu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Wi,z(t,Yo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Wi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,Wb(a)}}),Yb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Hb=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ib=function(e){return o(Ae,e,1)},Rt=o(Ae,0,0),Hr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Rt)}else{var n=r.a;return z(e,Ib(n))}}),zu=E(function(e,r,n,a){var t=L(Hb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Zn,z(u,Yo),o(Hr,u,r),o(Hr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Zn,o(oa,u,e),z(u,Rt),o(Hr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Zn,o(oa,u,e),o(Hr,u,r),z(u,Rt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Zn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Yb,i,c,l)}}),Jb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},tt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Te,u,t,m),bu,Jb,a,{b1:Un(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),ku={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ob=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Te,l,a,d),ku,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),qb=Wt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(Te,m,u,w),ku,Cu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Pn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Zb=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},Xb=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},Qb=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},Kb=function(e){return p(be,Zb(e),Xb(e),Qb(e))},G=function(e){var r=Wl(e),n=r.a,a=r.b,t=r.c;return{ey:Va(Kb(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Eb,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Ub,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,U=e.c,d=o(Pu,s,U);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Ob,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(jb,b,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(On,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,U=e.e,R=L(zu,C,T,N,U);if(R.$){var O=R.a,Q=O.a,le=O.b,fe=R.b,ce=fe.a,pe=fe.b,Me=R.c,Se=Me.a,gr=Me.b,hr=R.d,x=hr.a,_=hr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Zu(qb,Q,le,ce,pe,Se,gr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Nb(Q)(le)(ce)(pe)(Se)(gr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=R.a,W=R.b,F=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,F,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,F,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(qn,j,W,F,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),ot=function(e){var r=e;return r.fU},it=function(e){var r=e;return r.fY},ct=function(e){var r=e;return r.c5},e1=function(e){var r=e,n=ct(r.c6),a=it(r.c6),t=ot(r.c6),i=ct(r.c4),c=it(r.c4),l=ot(r.c4),u=ct(r.c3),v=it(r.c3),s=ot(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},r1=function(e){var r=Va(Gr(e)),n=Ge(kr(e)),a=Ge(zr(e)),t=Ge(Pr(e));return{dp:e1(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),Tu=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Bl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Mu=$(function(e,r){return o(Tu,r1(e),r)}),Ua=function(e){return{$:2,a:e}},n1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),a1=Vf,t1=Ff,Gi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=t1(a),g=f.fU,b=f.fY,w=f.c5,x=f.em,_=a1({em:x,fU:g*s,fY:b*d,c5:w*m});return La(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return mu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(n1,e,t),o(Gi,e,i));case 3:return r;case 2:var i=r.a;return Ua(o(Gi,e,i));default:var c=r.a;return Hl(o(ne,Ut(e),c))}}),Io=$(function(e,r){var n=r;return o(Ut,e,n)}),Jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Au=7682,o1=p(Ao,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:Du},{a8:xe,bl:rn,bt:xe,bu:Au}),i1=p(Ao,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:Au},{a8:xe,bl:rn,bt:xe,bu:Du}),Oo=$(function(e,r){return e?o(A,i1,r):o(A,o1,r)}),c1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},l1=function(e){if(e.$){var r=e.c;return ie(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(Oo,i,v),c1,Jo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ya=function(e){var r=l1(e);if(r.$)return k;var n=r.a;return Ua(n)},u1=E(function(e,r,n,a){var t=o(Ho,n,fu),i=function(){var s=z(e,r);return s.a?s.b?En(h([t,ya(Ni)])):t:s.b?ya(Ni):k}(),c=Co(a),l=c.a,u=c.b,v=c.c;return o(Mu,So(a),o(Io,B(l,u,v),i))}),v1=$(function(e,r){return L(u1,!0,!0,e,r)}),jt=function(e){return{$:0,a:e}},Bu=$(function(e,r){return{$:0,a:e,b:r}}),$1=function(e){var r=po(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,n,a,t)},f1=function(e){return o(Bu,0,jt($1(e)))},qo=function(e){var r=e;return r.k},wn=function(e){var r=e;return jr(r)},s1=$(function(e,r){var n=r;return n/e}),Yi=function(e){var r=e;return{fU:jr(r),fY:en(r)}},d1=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ea(a),bT:ke(n)},r)}),m1=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=un(l.bT),s=ln(l.bT),d=cn(l.bT),m=o(aa,e,d),f=o(rr,r,d),g=o(aa,n,s),b=o(rr,a,s),w=o(aa,t,v),x=o(rr,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=$(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return Gt(m1,t,t,a,a,n,n,r)}),p1=function(e){var r=p(zc,d1,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Uo(e)),i=o(Fu,n,a);return L(tu,i,e,t,0)}else return Ro},Vu=vr({fU:0,fY:0,c5:-1}),Hi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),xa=function(e){var r=e;return en(r)},mn=function(e){var r=e;return r},Nt=function(e){return Fr(2*nr*e)},Ii=xl({cA:cr,c3:_o,c4:Zl}),Eu=function(){var e=72,r=o(s1,e,Nt(1)),n=wr(1),a=mn(wo),t=mn(Vu),i=wr(1),c=o(K,.5,i),l=p(be,lr,lr,c),u=o(K,-.5,i),v=p(be,lr,lr,u),s=function(f){var g=o(K,f,r),b=mn(o(Hi,Ii,Yi(g))),w=o(K,wn(g),n),x=o(K,xa(g),n),_=p(be,w,x,c),C=p(be,w,x,u),T=o(ba,e,f+1),N=o(K,T,r),U=mn(o(Hi,Ii,Yi(N))),R=o(K,wn(N),n),j=o(K,xa(N),n),W=p(be,R,j,u),F=p(be,R,j,c);return h([B({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),B({o:b,bT:C},{o:U,bT:W},{o:U,bT:F}),B({o:b,bT:C},{o:U,bT:F},{o:b,bT:_}),B({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},d=o(ne,s,o(Qr,0,e-1)),m=Et(We(d));return Eo(p1(m))}(),Ji=du(Eu),Ru=function(e){var r=e;return r.cA},b1=function(e){var r=e,n=X(r.c5),a=X(r.fY),t=X(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=qr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=qr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(I(a,n)<1){var i=qr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=qr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},g1=function(e){var r=b1(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return z(r,c)},h1=function(e){var r=ho(e),n=g1(r),a=n.a,t=n.b;return mr({cA:Ru(e),c3:a,c4:t,c6:r})},Uu=function(e){var r=e;return r.e9},ju=function(e){var r=e;return r.fu},_1=E(function(e,r,n,a){var t=h1(qo(a)),i=o(Ho,n,Eu),c=function(){var d=z(e,r);return d.a?d.b?En(h([i,ya(Ji)])):i:d.b?ya(Ji):k}(),l=ju(a),u=l,v=Uu(a),s=v;return o(Mu,t,o(Io,B(u,u,s),c))}),w1=$(function(e,r){return L(_1,!0,!0,e,r)}),Oi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},qi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return Qe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Xn=$u(h([B({cY:0},{cY:1},{cY:2})])),y1=$(function(e,r){var n=cu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(ge,a,ee(function(_,C,T,N,U,R,j,W){return S(ae,p(Te,N,0,W),Oi,Wo,Xn,{aw:t,b:T,c:C,d:R,e:_,bq:pn(r),f:U})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,C,T,N,U,R,j,W){return S(ae,p(Te,N,0,W),Oi,Go,Xn,{aN:o(Ra,Un(c),i),b:T,c:C,d:R,e:_,bq:pn(r),f:U})}));case 2:e.a;var l=e.b,f=e.c,u=o(Pu,l,f);if(u.$)return k;var v=u.a;return o(ge,a,ee(function(_,C,T,N,U,R,j,W){var F=j.a,O=j.b;return S(ae,p(Te,N,0,W),qi,wu,Xn,{P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cp:v,b:T,c:C,d:R,e:_,bq:pn(r),f:U})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(zu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(_,C,T,N,U,R,j,W){var F=j.a,O=j.b;return S(ae,p(Te,N,0,W),qi,Lu,Xn,{b3:b,P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,ct:x,b:T,c:C,d:R,cQ:w,e:_,bq:pn(r),f:U})}))}}),x1=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Rn,e,r)}(),S1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Zi=function(e){return Ua(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Oo,t,u),S1,Jo,x1,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},C1=E(function(e,r,n,a){var t=o(y1,n,a),i=z(e,r);return i.a?i.b?En(h([t,Zi(a)])):t:i.b?Zi(a):k}),L1=$(function(e,r){return L(C1,!0,!0,e,r)}),P1=$(function(e,r){var n=Rr(r),a=Rr(e),t=Er(r),i=Er(e),c=Vr(r),l=Vr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(de,l,c),dS:o(de,i,t),dT:o(de,a,n)}}),z1=function(e){var r=Lo(e),n=r.a,a=r.b;return o(P1,n,a)},Xi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},k1=$(function(e,r){return{$:1,a:e,b:r}}),T1=k1({df:2,$7:0,dV:1}),Qi=T1(h([z({dw:0},{dw:1})])),M1=$(function(e,r){var n=z1(r),a=G(n),t=Lo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(ge,a,ee(function(v,s,d,m,f,g,b,w){return S(ae,w,Xi,Wo,Qi,{aw:l,du:ke(c),dv:ke(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,m,f,g,b,w,x){return S(ae,x,Xi,Go,Qi,{aN:o(Ra,Un(u),l),du:ke(c),dv:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),D1=$(function(e,r){return o(M1,e,r)}),Qn=function(e){return Fr(nr*(e/180))},Ki=$(function(e,r){var n=e,a=r;return n/a}),A1=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(yr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ec=$(function(e,r){return e<1?P:S(A1,0,e,e,r,P)}),B1=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ea(a),bT:ke(n),L:o(Ae,c,l)},r)}),F1=function(e){var r=p(zc,B1,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Uo(e)),i=o(Fu,n,a);return L(ou,i,e,t,0)}else return Ro},Nu=$(function(e,r){var n=e,a=r,t=jr(a);return{fU:t*jr(n),fY:t*en(n),c5:en(a)}}),V1=function(){var e=wr(1),r=72,n=o(Qr,0,r-1),a=o(ec,r,o(Pn,lr,Nt(1))),t=to(r/2),i=o(Qr,0,t-1),c=o(ec,t,o(Pn,Qn(90),Qn(-90))),l=No(We(o(ne,function(s){return o(ne,function(d){return{o:mn(o(Nu,s,d)),bT:p(be,o(K,wn(d)*wn(s),e),o(K,wn(d)*xa(s),e),o(K,xa(d),e)),L:z(o(Ki,s,Nt(1)),o(Ki,o(hn,Qn(90),d),Qn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(ne,function(s){return We(o(ne,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return Eo(F1(o(su,l,v)))}(),Sa=72,Kn=2*Sa,E1=$(function(e,r){e:for(;;){var n=Kn+1,a=o(ba,Kn,2*e+3),t=o(ba,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),R1=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),U1=$(function(e,r){e:for(;;){var n=p(R1,0,2*nr,e/Sa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),j1=function(){var e=o(U1,Sa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(E1,Sa-1,P);return o(Rn,e,r)}(),N1={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},rc=function(e){return Ua(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Oo,!0,u),N1,Jo,j1,{aw:p(Vn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},W1=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},G1=$(function(e,r){return o(Tu,W1(e),r)}),Y1=E(function(e,r,n,a){var t=o(Ho,n,V1),i=function(){var u=z(e,r);return u.a?u.b?En(h([t,rc()])):t:u.b?rc():k}(),c=zo(a),l=c;return o(G1,o(Bt,cr,Po(a)),o(Io,B(l,l,l),i))}),H1=$(function(e,r){return L(Y1,!0,!0,e,r)}),I1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Wu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),J1=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),O1=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Bu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(I1,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Wu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(J1,n,a,t,i,c)}},q1=O1,Gu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(v1,t,r)]);case 1:var t=e.a,n=e.b;return h([o(L1,t,n)]);case 3:var t=e.a,a=e.b;return h([o(H1,q1(t),a)]);case 2:var t=e.a,i=e.b;return h([o(w1,t,i)]);case 4:var c=e.a,l=e.b;return h([o(D1,f1(c),l)]);default:var u=e.a;return o(ko,Gu,u)}},Z1=function(e){return o(ko,Gu,e)},X1=$(function(e,r){return rb({aI:f0(e.es),ev:e.ev,aJ:s0(.5),ca:e.ca,aK:z(zi(Oe(e.cS.fS)),zi(Oe(e.cS.eW))),aP:Z1(r),fB:!0,fJ:o(Nu,Fr(e.fI),Fr(e.fK)),ei:yo})}),lt=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),ut=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Q1=vr({fU:-1,fY:0,c5:0}),K1=vr({fU:0,fY:-1,c5:0}),e3=Ye(function(e,r,n,a,t,i){var c=o(lt,n,i)?wo:Vu,l=o(lt,r,t)?ql:K1,u=o(lt,e,a)?Sl:Q1,v=B(me(o($r,e,a)),me(o($r,r,t)),me(o($r,n,i))),s=p(be,o(ut,e,a),o(ut,r,t),o(ut,n,i)),d=mr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),r3=$(function(e,r){return we(e3,Vr(e),Er(e),Rr(e),Vr(r),Er(r),Rr(r))}),n3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(xo,e,o(r3,p(Dt,-c,-l,-u),p(Dt,c,l,u)))}),a3=$(function(e,r){return o(ze,function(n){if(n.$===2){var a=n.a;return a}else return mo},o(Aa,e,r.av))}),t3=$(function(e,r){return o(sr,mo,Fa(o(Ba,a3(e),r)))}),o3=$(function(e,r){return o(t3,e,r.eA)}),i3=o3,vt=function(e){return p(Kl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},c3=function(e){var r=po(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,vt(n),vt(a),vt(t))},l3=function(e){return p(Wu,0,jt(c3(e)),jt(0))},jn=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c5:a.c5+r*(t.c5-a.c5)}}),u3=y(function(e,r,n){var a=So(n),t=Pr(a),i=zr(a),c=kr(a),l=p(jn,e,r,Gr(a)),u=r>=0?mr({cA:l,c3:t,c4:i,c6:c}):mr({cA:l,c3:fr(t),c4:fr(i),c6:fr(c)}),v=Co(n),s=v.a,d=v.b,m=v.c,f=me(o(K,r,s)),g=me(o(K,r,d)),b=me(o(K,r,m));return{er:u,aK:B(f,g,b)}}),nc=function(e){return ho(qo(e))},v3=function(e){return Ru(qo(e))},$3=y(function(e,r,n){var a=me(o(K,r,ju(n))),t=me(o(K,r,Uu(n))),i=r>=0?nc(n):fr(nc(n)),c=p(jn,e,r,v3(n));return{k:o(Fn,c,i),e9:t,fu:a}}),f3=y(function(e,r,n){return o(Tl,o(jn,e,r),n)}),s3=y(function(e,r,n){return o(Ml,o(K,X(r),zo(n)),p(jn,e,r,Po(n)))}),d3=y(function(e,r,n){return o(Dl,o(jn,e,r),n)}),Yu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(xo,c,p(u3,cr,e,n));case 1:var c=r.a,a=r.b;return o(kl,c,p(d3,cr,e,a));case 3:var c=r.a,t=r.b;return o(zl,c,p(s3,cr,e,t));case 2:var c=r.a,i=r.b;return o(Cl,c,p($3,cr,e,i));case 4:var c=r.a,l=r.b;return o(Pl,c,p(f3,cr,e,l));default:var u=r.a;return Ll(o(ne,Yu(e),u))}}),m3=$(function(e,r){return(r-Uc(r/e)*e)/e}),p3=function(e){return 2*nr*e},b3=E(function(e,r,n,a){return e+(r-e)*(1+jr(p3(o(m3,n,a))))/2}),$t=function(e){return o(Yu,L(b3,1,1.1,o(ra,"period",e),e.db),o(n3,l3(o(i3,"cube color",e)),B(1,1,1)))},g3=$(function(e,r){return o(X1,{es:p($0,46,46,46),ev:r0(e),ca:e.ca,cS:e.cS,fI:-Li(135),fK:-Li(45)},h([$t(e),o(Pi,-2,$t(e)),o(Pi,2,$t(e))]))}),h3=L(xm,g3,Dm,Mm,Sm);const _3={Main:{init:h3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Cn)))},o(M,"left",Z))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},w3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},y3=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},x3=_3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});y3();w3(x3);
