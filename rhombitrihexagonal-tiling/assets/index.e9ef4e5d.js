(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Lr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Lr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Lr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return Lr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Lr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Oe(e){return Lr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ba(e){return Lr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Lr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Qt(e){return Lr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Xt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Aa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ku=[];function ev(e){return e.length}var rv=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),nv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),av=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var tv=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+ov()),r});function ov(e){return"<internals>"}function tn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=St(e,r,0,a);t&&(n=a.pop());t=St(n.a,n.b,0,a));return t}function St(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&tn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=xi(e),r=xi(r));for(var t in e)if(!St(e[t],r[t],n+1,a))return!1;return!0}$(yr);$(function(e,r){return!yr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var iv=$(function(e,r){var n=I(e,r);return n<0?Yc:n?If:Nc}),An=0;function T(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function rr(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=or(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=or(e.a,r);return n}var P={$:0};function or(e,r){return{$:1,a:e,b:r}}var cv=$(or);function h(e){for(var r=P,n=e.length;n--;)r=or(e[n],r);return r}function Ua(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var lv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Oe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Ua(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(Ua(r).sort(function(n,a){var t=o(e,n,a);return t===Nc?0:t===Yc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var uv=$(Math.pow);$(function(e,r){return r%e});var vv=$(function(e,r){var n=r%e;return e===0?tn(11):n>0&&e<0||n<0&&e>0?n+e:n}),$v=Math.PI,fv=Math.cos,sv=Math.sin,mv=Math.tan,dv=Math.atan;$(Math.atan2);function pv(e){return e}function bv(e){return e===1/0||e===-1/0}var gv=Math.ceil,hv=Math.floor,_v=Math.round,yv=Math.sqrt,ui=Math.log,Sv=isNaN;function xv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Cv=$(function(e,r){return e+r});function wv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function Lv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Pv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var zv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Tv=$(function(e,r){return r.split(e)}),Mv=$(function(e,r){return r.join(e)}),kv=S(function(e,r,n){return n.slice(e,r)});function Dv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Bv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Av=$(function(e,r){return r.indexOf(e)>-1}),Uv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Fv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function dc(e){return e+""}function Vv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Ev(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Rv(e){return Ua(e).join("")}function jv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Nv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Yv(e){return{$:0,a:e}}function Kt(e){return{$:2,b:e}}var Gv=Kt(function(e){return typeof e=="boolean"?$e(e):er("a BOOL",e)}),Wv=Kt(function(e){return typeof e=="number"?$e(e):er("a FLOAT",e)}),Hv=Kt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):er("a STRING",e)});function Iv(e){return{$:3,b:e}}var Ov=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Pr(e,r){return{$:9,f:e,g:r}}var Jv=$(function(e,r){return{$:10,b:r,h:e}}),qv=$(function(e,r){return Pr(e,[r])}),Zv=S(function(e,r,n){return Pr(e,[r,n])});V(function(e,r,n,a){return Pr(e,[r,n,a])});he(function(e,r,n,a,t){return Pr(e,[r,n,a,t])});Oe(function(e,r,n,a,t,i){return Pr(e,[r,n,a,t,i])});Ba(function(e,r,n,a,t,i,c){return Pr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Pr(e,[r,n,a,t,i,c,l])});Qt(function(e,r,n,a,t,i,c,l,u){return Pr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ye(e,n)}catch(a){return Se(o($o,"This is not valid JSON! "+a.message,r))}});var pc=$(function(e,r){return Ye(e,r)});function Ye(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):er("null",r);case 3:return On(r)?vi(e.b,r,h):er("a LIST",r);case 4:return On(r)?vi(e.b,r,Qv):er("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return er("an OBJECT with a field named `"+n+"`",r);var v=Ye(e.b,r[n]);return qe(v)?v:Se(o(Ci,n,v.a));case 7:var a=e.e;if(!On(r))return er("an ARRAY",r);if(a>=r.length)return er("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ye(e.b,r[a]);return qe(v)?v:Se(o(Gc,a,v.a));case 8:if(typeof r!="object"||r===null||On(r))return er("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ye(e.b,r[i]);if(!qe(v))return Se(o(Ci,i,v.a));t=or(T(i,v.a),t)}return $e(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ye(l[u],r);if(!qe(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ye(e.b,r);return qe(v)?Ye(e.h(v.a),r):v;case 11:for(var f=P,m=e.g;m.b;m=m.b){var v=Ye(m.a,r);if(qe(v))return v;f=or(v.a,f)}return Se(Of(Ve(f)));case 1:return Se(o($o,e.a,r));case 0:return $e(e.a)}}function vi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ye(e,r[i]);if(!qe(c))return Se(o(Gc,i,c.a));t[i]=c.a}return $e(n(t))}function On(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Qv(e){return o(vs,e.length,function(r){return e[r]})}function er(e,r){return Se(o($o,"Expecting "+e,r))}function Qr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Qr(e.b,r.b);case 6:return e.d===r.d&&Qr(e.b,r.b);case 7:return e.e===r.e&&Qr(e.b,r.b);case 9:return e.f===r.f&&$i(e.g,r.g);case 10:return e.h===r.h&&Qr(e.b,r.b);case 11:return $i(e.g,r.g)}}function $i(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Qr(e[a],r[a]))return!1;return!0}var Xv=$(function(e,r){return JSON.stringify(r,null,e)+""});function bc(e){return e}S(function(e,r,n){return n[e]=r,n});function Yr(e){return{$:0,a:e}}function Kv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var xt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function e$(e){return{$:5,b:e}}var r$=0;function eo(e){var r={$:0,e:r$++,f:e,g:null,h:[]};return ro(r),r}function gc(e){return dr(function(r){r(Yr(eo(e)))})}function hc(e,r){e.h.push(r),ro(e)}var n$=$(function(e,r){return dr(function(n){hc(e,r),n(Yr(An))})}),Za=!1,fi=[];function ro(e){if(fi.push(e),!Za){for(Za=!0;e=fi.shift();)a$(e);Za=!1}}function a$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ro(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return no(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function no(e,r,n,a,t,i){var c=o(pc,e,r?r.flags:void 0);qe(c)||tn(2);var l={},u=n(c.a),v=u.a,f=i(d,v),m=t$(l,d);function d(s,g){var b=o(a,s,v);f(v=b.a,g),mi(l,b.b,t(v))}return mi(l,u.b,t(v)),m?{ports:m}:{}}var ar={};function t$(e,r){var n;for(var a in ar){var t=ar[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=i$(t,r)}return n}function o$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function i$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(xt,l,e$(function(v){var f=v.a;return v.$===0?p(t,n,f,u):i&&c?L(a,n,f.i,f.j,u):p(a,n,i?f.i:f.j,u)}))}return n.h=eo(o(xt,l,e.b))}var c$=$(function(e,r){return dr(function(n){e.g(r),n(Yr(An))})});$(function(e,r){return o(n$,e.h,{$:0,a:r})});function _c(e){return function(r){return{$:1,k:e,l:r}}}function l$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var si=[],Qa=!1;function mi(e,r,n){if(si.push({p:e,q:r,r:n}),!Qa){Qa=!0;for(var a;a=si.shift();)u$(a.p,a.q,a.r);Qa=!1}}function u$(e,r,n){var a={};fa(!0,r,a,null),fa(!1,n,a,null);for(var t in e)hc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function fa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=v$(e,t,a,r.l);n[t]=$$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)fa(e,c.a,n,a);return;case 3:fa(e,r.o,n,{s:r.n,t:a});return}}function v$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ar[r].e:ar[r].f;return o(i,t,a)}function $$(e,r,n){return n=n||{i:P,j:P},e?n.i=or(r,n.i):n.j=or(r,n.j),n}function f$(e){ar[e]&&tn(3)}$(function(e,r){return r});function s$(e,r){return f$(e),ar[e]={f:m$,u:r,a:d$},_c(e)}var m$=$(function(e,r){return function(n){return e(r(n))}});function d$(e,r){var n=P,a=ar[e].u,t=Yr(null);ar[e].b=t,ar[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(pc,a,c);qe(l)||tn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var sa,ur=typeof document<"u"?document:{};function ao(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function Ct(e){return{$:0,a:e}}var yc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:to(n),e:t,f:e,b:i}})}),Gr=yc(void 0),p$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:to(n),e:t,f:e,b:i}})}),b$=p$(void 0);function g$(e,r,n,a){return{$:3,d:to(e),g:r,h:n,i:a}}var h$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function zr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return zr([e,r],function(){return e(r)})});S(function(e,r,n){return zr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return zr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return zr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Oe(function(e,r,n,a,t,i){return zr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ba(function(e,r,n,a,t,i,c){return zr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return zr([e,r,n,a,t,i,c,l],function(){return Xt(e,r,n,a,t,i,c,l)})});Qt(function(e,r,n,a,t,i,c,l,u){return zr([e,r,n,a,t,i,c,l,u],function(){return Aa(e,r,n,a,t,i,c,l,u)})});var Sc=$(function(e,r){return{$:"a0",n:e,o:r}}),_$=$(function(e,r){return{$:"a1",n:e,o:r}}),xc=$(function(e,r){return{$:"a2",n:e,o:r}}),Tr=$(function(e,r){return{$:"a3",n:e,o:r}}),y$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function S$(e){return e=="script"?"p":e}function x$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Sc,r.n,C$(e,r.o)):r});function C$(e,r){var n=bo(r);return{$:r.$,a:n?p($s,n<3?w$:L$,Ae(e),r.a):o(ba,e,r.a)}}var w$=$(function(e,r){return T(e(r.a),r.b)}),L$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function to(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?di(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?di(c,t,i):c[t]=i}return r}function di(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);sa&&e.c=="a"&&c.addEventListener("click",sa(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ao(c,hr(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?P$(e,t):a==="a0"?M$(e,r,t):a==="a3"?z$(e,t):a==="a4"?T$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function P$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function z$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function T$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function M$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=k$(r,i),e.addEventListener(t,c,oo&&{passive:bo(i)<2}),a[t]=c}}var oo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){oo=!0}}))}catch{}function k$(e,r){function n(a){var t=n.q,i=Ye(t.a,a);if(!!qe(i)){for(var c=bo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=f.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);f=f.p}f(u,v)}}return n.q=r,n}function D$(e,r){return e.$==r.$&&Qr(e.a,r.a)}function Cc(e,r){var n=[];return Ze(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ze(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=j$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];Ze(e.k,r.k,f,0),f.length>0&&_e(n,1,a,f);return;case 4:for(var m=e.j,d=r.j,s=!1,g=e.k;g.$===4;)s=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)s=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(s&&m.length!==d.length){_e(n,0,a,r);return}(s?!B$(m,d):m!==d)&&_e(n,2,a,d),Ze(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:pi(e,r,n,a,A$);return;case 2:pi(e,r,n,a,U$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=io(e.d,r.d);y&&_e(n,4,a,y);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function B$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function pi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=io(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function io(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=io(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&D$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function A$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=t[v];Ze(f,i[v],n,++a),a+=f.b||0}}function U$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,d=0,s=a;m<v&&d<f;){var g=l[m],b=u[d],y=g.a,x=b.a,_=g.b,w=b.b,M=void 0,N=void 0;if(y===x){s++,Ze(_,w,t,s),s+=_.b||0,m++,d++;continue}var R=l[m+1],E=u[d+1];if(R){var j=R.a,Y=R.b;N=x===j}if(E){var U=E.a,Z=E.b;M=y===U}if(M&&N){s++,Ze(_,Z,t,s),sn(i,t,y,w,d,c),s+=_.b||0,s++,mn(i,t,y,Y,s),s+=Y.b||0,m+=2,d+=2;continue}if(M){s++,sn(i,t,x,w,d,c),Ze(_,Z,t,s),s+=_.b||0,m+=1,d+=2;continue}if(N){s++,mn(i,t,y,_,s),s+=_.b||0,s++,Ze(Y,w,t,s),s+=Y.b||0,m+=2,d+=1;continue}if(R&&j===U){s++,mn(i,t,y,_,s),sn(i,t,x,w,d,c),s+=_.b||0,s++,Ze(Y,Z,t,s),s+=Y.b||0,m+=2,d+=2;continue}break}for(;m<v;){s++;var g=l[m],_=g.b;mn(i,t,g.a,_,s),s+=_.b||0,m++}for(;d<f;){var X=X||[],b=u[d];sn(i,t,b.a,b.b,void 0,X),d++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var wc="_elmW6BL";function sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ze(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}sn(e,r,n+wc,a,t,i)}function mn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ze(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}mn(e,r,n+wc,a,t)}function Lc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Lc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&dn(e,r,f,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&dn(e,r,f,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var s=r.k;s.$===4;)s=s.k;return dn(e,s,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,y=0;y<g.length;y++){t++;var x=d===1?g[y]:g[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=dn(b[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Pc(e,r,n,a){return n.length===0?e:(Lc(e,r,n,a),ma(e,n))}function ma(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=F$(t,a);t===e&&(e=i)}return e}function F$(e,r){switch(r.$){case 0:return V$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ma(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=ma(e,i.w),e;case 8:return E$(e,r);case 5:return r.s(e);default:tn(10)}}function V$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function E$(e,r){var n=r.s,a=R$(n.y,r);e=ma(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ao(e,a),e}function R$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ao(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function co(e){if(e.nodeType===3)return Ct(e.textContent);if(e.nodeType!==1)return Ct("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=or(o(Tr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=or(co(v[a]),u);return p(Gr,l,r,u)}function j$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var N$=V(function(e,r,n,a){return no(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=co(l);return zc(i,function(v){var f=c(v),m=Cc(u,f);l=Pc(l,u,m,t),u=f})})});V(function(e,r,n,a){return no(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ur.title,v=ur.body,f=co(v);return zc(i,function(m){sa=c;var d=l(m),s=Gr("body")(P)(d.eu),g=Cc(f,s);v=Pc(v,f,g,t),f=s,sa=0,u!==d.fL&&(ur.title=u=d.fL)})})});var da=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function zc(e,r){r(e);var n=0;function a(){n=n===1?0:(da(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&da(a),n=2)}}$(function(e,r){return o(_o,go,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(_o,go,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(_o,go,dr(function(){history.replaceState({},"",r),e()}))});var Y$={addEventListener:function(){},removeEventListener:function(){}},G$=typeof window<"u"?window:Y$;S(function(e,r,n){return gc(dr(function(a){function t(i){eo(n(i))}return e.addEventListener(r,t,oo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ye(e,r);return qe(n)?re(n.a):q});function Tc(e,r){return dr(function(n){da(function(){var a=document.getElementById(e);n(a?Yr(r(a)):Kv(ss(e)))})})}function W$(e){return dr(function(r){da(function(){r(Yr(e()))})})}$(function(e,r){return Tc(r,function(n){return n[e](),An})});$(function(e,r){return W$(function(){return G$.scroll(e,r),An})});S(function(e,r,n){return Tc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,An})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var H$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var I$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?re(m):q}a.push(L(xl,u[0],u.index,t,h(f))),l=r.lastIndex}return r.lastIndex=c,h(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(xl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var O$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/J$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function J$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var lo=new Float64Array(3),bi=new Float64Array(3),gi=new Float64Array(3),q$=S(function(e,r,n){return new Float64Array([e,r,n])}),Z$=function(e){return e[0]},Q$=function(e){return e[1]},X$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var K$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Mc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Mc);function kc(e,r,n){return n===void 0&&(n=new Float64Array(3)),pa(Mc(e,r,n),n)}$(kc);function Dc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function pa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Dc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var ef=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(pn);function Lt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Lt);$(function(e,r){var n,a=lo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(pn(r,a)+e[14])/n,t});var rf=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var nf=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},af=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/tf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function tf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var of=new Float64Array(16),cf=new Float64Array(16),lf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},uf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Bc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Oe(Bc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Bc(c,l,i,t,n,a)});function Ac(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Oe(Ac);V(function(e,r,n,a){return Ac(e,r,n,a,-1,1)});function Uc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],d=e[9],s=e[10],g=e[11],b=e[12],y=e[13],x=e[14],_=e[15],w=r[0],M=r[1],N=r[2],R=r[3],E=r[4],j=r[5],Y=r[6],U=r[7],Z=r[8],X=r[9],ce=r[10],fe=r[11],ie=r[12],de=r[13],De=r[14],Ce=r[15];return n[0]=a*w+l*M+m*N+b*R,n[1]=t*w+u*M+d*N+y*R,n[2]=i*w+v*M+s*N+x*R,n[3]=c*w+f*M+g*N+_*R,n[4]=a*E+l*j+m*Y+b*U,n[5]=t*E+u*j+d*Y+y*U,n[6]=i*E+v*j+s*Y+x*U,n[7]=c*E+f*j+g*Y+_*U,n[8]=a*Z+l*X+m*ce+b*fe,n[9]=t*Z+u*X+d*ce+y*fe,n[10]=i*Z+v*X+s*ce+x*fe,n[11]=c*Z+f*X+g*ce+_*fe,n[12]=a*ie+l*de+m*De+b*Ce,n[13]=t*ie+u*de+d*De+y*Ce,n[14]=i*ie+v*de+s*De+x*Ce,n[15]=c*ie+f*de+g*De+_*Ce,n}$(Uc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],d=e[12],s=e[13],g=e[14],b=r[0],y=r[1],x=r[2],_=r[4],w=r[5],M=r[6],N=r[8],R=r[9],E=r[10],j=r[12],Y=r[13],U=r[14];return n[0]=a*b+c*y+v*x,n[1]=t*b+l*y+f*x,n[2]=i*b+u*y+m*x,n[3]=0,n[4]=a*_+c*w+v*M,n[5]=t*_+l*w+f*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+f*E,n[10]=i*N+u*R+m*E,n[11]=0,n[12]=a*j+c*Y+v*U+d,n[13]=t*j+l*Y+f*U+s,n[14]=i*j+u*Y+m*U+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=pa(r,lo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Dc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,d=c*f,s=l*f,g=i*c*v,b=i*l*v,y=c*l*v,x=i*i*v+u,_=g+s,w=b-d,M=g-s,N=c*c*v+u,R=y+m,E=b+d,j=y-m,Y=l*l*v+u,U=n[0],Z=n[1],X=n[2],ce=n[3],fe=n[4],ie=n[5],de=n[6],De=n[7],Ce=n[8],br=n[9],gr=n[10],qa=n[11],Ju=n[12],qu=n[13],Zu=n[14],Qu=n[15];return a[0]=U*x+fe*_+Ce*w,a[1]=Z*x+ie*_+br*w,a[2]=X*x+de*_+gr*w,a[3]=ce*x+De*_+qa*w,a[4]=U*M+fe*N+Ce*R,a[5]=Z*M+ie*N+br*R,a[6]=X*M+de*N+gr*R,a[7]=ce*M+De*N+qa*R,a[8]=U*E+fe*j+Ce*Y,a[9]=Z*E+ie*j+br*Y,a[10]=X*E+de*j+gr*Y,a[11]=ce*E+De*j+qa*Y,a[12]=Ju,a[13]=qu,a[14]=Zu,a[15]=Qu,a});function vf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(vf);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function $f(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S($f);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],d=a[7],s=a[8],g=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=f,t[6]=m,t[7]=d,t[8]=s,t[9]=g,t[10]=b,t[11]=y,t[12]=i*e+v*r+s*n+a[12],t[13]=c*e+f*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],d=r[6],s=r[7],g=r[8],b=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=d,n[7]=s,n[8]=g,n[9]=b,n[10]=y,n[11]=x,n[12]=c*a+f*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+s*t+x*i+r[15],n});S(function(e,r,n){var a=kc(e,r,lo),t=pa(Lt(n,a,bi),bi),i=pa(Lt(a,t,gi),gi),c=of,l=cf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Uc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var hi=0;function Ln(e,r){for(;r.b;r=r.b)e(r.a)}function uo(e){for(var r=0;e.b;e=e.b)r++;return r}var ff=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},sf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),mf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),df=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),pf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),bf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),gf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),hf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),_f=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),yf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Sf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},xf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Cf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Fc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Vc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Lf=function(e){e.gl.disable(e.gl.CULL_FACE)},Pf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},zf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Tf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},_i=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Mf=[xf,Cf,wf,Fc,Vc,Lf,Pf,zf,Tf];function yi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function kf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Ec(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Df(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(s,g,b,y,x){var _;if(t===1)for(_=0;_<g;_++)s[b++]=g===1?y[x]:y[x][_];else i.forEach(function(w){for(_=0;_<g;_++)s[b++]=g===1?y[w][x]:y[w][x][_]})}var u=Ec(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*t,m=new u.type(uo(n.b)*f);Ln(function(s){l(m,u.size*u.arraySize,v,s,a[r.name]||r.name),v+=f},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Bf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Af(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*uo(r.b),indexBuffer:null,buffers:{}}}function Af(e,r){var n=new Uint32Array(uo(e)*r),a=0,t;return Ln(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Si(e,r){return e+"#"+r}var Rc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Fc(n),Vc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Si(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=hi++,v||(v=yi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=hi++,f||(f=yi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=kf(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Uf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var s=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(g)}c=Si(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Ff(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Bf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[s.name]===void 0&&(b.buffers[s.name]=Df(a,s,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[s.name]);var y=Ec(a,s.type);if(y.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,y.size,y.baseType,!1,_,x*w)}for(n.toggle=!n.toggle,Ln(ep(n),i.a),u=0;u<_i.length;u++){var M=n[_i[u]];M.toggle!==n.toggle&&M.enabled&&(Mf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Ln(t,e.g),r});function Uf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(s,g){var b=g.name,y=e.getUniformLocation(s,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(y,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Ff(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Vf=S(function(e,r,n){return g$(r,{g:n,f:{},h:e},Wf,Hf)}),Ef=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Rf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),jf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Nf=$(function(e,r){e.contextAttributes.antialias=!0}),Yf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Gf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Wf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ln(function(t){return o(K0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),ff(function(){return o(Rc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Hf(e,r){return r.f=e.f,Rc(r)}var B=cv,Jn=tv,jc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Jn,e,l,v)}else{var u=c.a;return p(Jn,i,l,u)}});return p(Jn,i,p(Jn,e,r,t),a)}),vo=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(vo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),xi=function(e){return p(vo,S(function(r,n,a){return o(B,T(r,n),a)}),P,e)},Nc=1,If=2,Yc=0,Se=function(e){return{$:1,a:e}},$o=$(function(e,r){return{$:3,a:e,b:r}}),Ci=$(function(e,r){return{$:0,a:e,b:r}}),Gc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Of=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Jf=Bv,qf=Xv,Fe=dc,Dr=$(function(e,r){return o(Mv,e,Ua(r))}),fo=$(function(e,r){return h(o(Tv,e,r))}),Wc=function(e){return o(Dr,`
    `,o(fo,`
`,e))},Un=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),jr=function(e){return p(Un,$(function(r,n){return n+1}),0,e)},Zf=lv,Qf=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Sr=$(function(e,r){return p(Qf,e,r,P)}),Hc=$(function(e,r){return p(Zf,e,o(Sr,0,jr(r)-1),r)}),tr=jv,Ic=function(e){var r=tr(e);return 97<=r&&r<=122},Oc=function(e){var r=tr(e);return r<=90&&65<=r},Xf=function(e){return Ic(e)||Oc(e)},Kf=function(e){var r=tr(e);return r<=57&&48<=r},es=function(e){return Ic(e)||Oc(e)||Kf(e)},Ve=function(e){return p(Un,B,P,e)},on=wv,rs=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Wc(ns(r))))}),ns=function(e){return o(as,e,P)},as=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=on(n);if(b.$===1)return!1;var y=b.a,x=y.a,_=y.b;return Xf(x)&&o(Jf,es,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Dr,"",Ve(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Fe(jr(f))+" ways:"));return o(Dr,`

`,o(B,g,o(Hc,rs,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Dr,"",Ve(r)):"!"}();default:var d=e.a,s=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Dr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(Wc(o(qf,4,s))+(`

`+d))}}),Ee=32,Pt=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),zt=Ku,so=gv,mo=$(function(e,r){return ui(r)/ui(e)}),ts=pv,Pn=so(o(mo,2,Ee)),Jc=L(Pt,0,Pn,zt,zt),qc=rv,Zc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Qc=hv,Tt=ev,ke=$(function(e,r){return I(e,r)>0?e:r}),os=function(e){return{$:0,a:e}},po=nv,is=$(function(e,r){e:for(;;){var n=o(po,Ee,e),a=n.a,t=n.b,i=o(B,os(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),cs=function(e){var r=e.a;return r},ls=$(function(e,r){e:for(;;){var n=so(r/Ee);if(n===1)return o(po,Ee,e).a;var a=o(is,e,P),t=n;e=a,r=t;continue e}}),Xc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Qc(o(mo,Ee,n-1)),t=e?Ve(r.z):r.z,i=o(ls,t,r.l);return L(Pt,Tt(r.p)+n,o(ke,5,a*Pn),i,r.p)}else return L(Pt,Tt(r.p),Pn,zt,r.p)}),us=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Xc,!1,{z:a,l:n/Ee|0,p:t});var i=Zc(p(qc,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(B,i,a),f=t;e=c,r=l,n=u,a=v,t=f;continue e}}),vs=$(function(e,r){if(e<=0)return Jc;var n=e%Ee,a=p(qc,n,e-n,r),t=e-n-Ee;return C(us,r,t,e,P,a)}),qe=function(e){return!e.$},D=Jv,Q=Gv,k=Ov,se=Wv,ba=qv,$s=Zv,Ae=Yv,bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Gr("div"),fs=function(e){return{$:2,a:e}},Kc=$(function(e,r){return e}),el=$(function(e,r){return{aK:r.aK,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Ar=function(e){return e},ss=Ar,wi=Oe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ms=Av,Br=Lv,Xr=kv,Fn=$(function(e,r){return e<1?r:p(Xr,e,Br(r),r)}),Fa=Fv,Va=function(e){return e===""},Ea=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),rl=Vv,Li=he(function(e,r,n,a,t){if(Va(t)||o(ms,"@",t))return q;var i=o(Fa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=rl(o(Fn,c+1,t));if(l.$===1)return q;var u=l;return re(ye(wi,e,o(Ea,c,t),u,r,n,a))}else return re(ye(wi,e,t,q,r,n,a))}),Pi=V(function(e,r,n,a){if(Va(a))return q;var t=o(Fa,"/",a);if(t.b){var i=t.a;return C(Li,e,o(Fn,i,a),r,n,o(Ea,i,a))}else return C(Li,e,"/",r,n,a)}),zi=S(function(e,r,n){if(Va(n))return q;var a=o(Fa,"?",n);if(a.b){var t=a.a;return L(Pi,e,re(o(Fn,t+1,n)),r,o(Ea,t,n))}else return L(Pi,e,q,r,n)});$(function(e,r){if(Va(r))return q;var n=o(Fa,"#",r);if(n.b){var a=n.a;return p(zi,e,re(o(Fn,a+1,r)),o(Ea,a,r))}else return p(zi,e,q,r)});var ds=Uv,go=function(e){},Vn=Yr,ps=Vn(0),nl=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,d=n>500?p(Un,e,r,Ve(m)):L(nl,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,f,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),pr=S(function(e,r,n){return L(nl,e,r,0,n)}),ee=$(function(e,r){return p(pr,$(function(n,a){return o(B,e(n),a)}),P,r)}),ga=xt,ho=$(function(e,r){return o(ga,function(n){return Vn(e(n))},r)}),bs=S(function(e,r,n){return o(ga,function(a){return o(ga,function(t){return Vn(o(e,a,t))},n)},r)}),gs=function(e){return p(pr,bs(B),Vn(P),e)},hs=c$,_s=$(function(e,r){var n=r;return gc(o(ga,hs(e),n))}),ys=S(function(e,r,n){return o(ho,function(a){return 0},gs(o(ee,_s(e),r)))}),Ss=S(function(e,r,n){return Vn(0)}),xs=$(function(e,r){var n=r;return o(ho,e,n)});ar.Task=o$(ps,ys,Ss,xs);var Cs=_c("Task"),_o=$(function(e,r){return Cs(o(ho,e,r))}),ws=N$,Ls=xv,ha={$:1},al=function(e){return{$:2,a:e}},Ra={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),cn=function(e){var r=e.b.B;return r.a},Ps=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},tl=function(e){var r=e.b;return o(We,Ra,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),zs=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?tl(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,cn(n).aK)>0?o(te,Ps,fr(o(We,ha,t))):Ar)(o(We,al({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(el,l.eA,rr(r,{aK:l.aK+r.eJ})),f=o(e,v,u);return o(We,Ra,{B:T(v,f),ab:P,T:o(B,t.B,t.T)})}}),ol=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ts=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Ms=$(function(e,r){return Ve(p(Ts,e,r,P))}),il=S(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return h([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,s=d.b,f=s.a,g=s.b,b=g.a,y=g.b;return e>1e3?o(B,_,o(B,c,o(B,f,o(B,b,o(Ms,r-4,y))))):o(B,_,o(B,c,o(B,f,o(B,b,p(il,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),ks=$(function(e,r){return p(il,0,e,r)}),Ds=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ve(n),ve(h([a]),t)),c=o(ks,e,i),l=o(ol,e,i);if(l.b){var u=l.a,v=l.b;return o(We,ha,{B:u,ab:v,T:Ve(c)})}else{var f=Ve(c);if(f.b){var m=f.a,d=f.b;return o(We,ha,{B:m,ab:P,T:d})}else return r}}),Bs=function(e){var r=e.b;return o(We,ha,r)},As=function(e){var r=e.b;return o(We,al({cY:cn(e).aK}),r)},Us=$(function(e,r){switch(e.$){case 1:return Bs(r);case 2:return tl(r);case 3:return As(r);default:var n=e.a;return o(Ds,n,r)}}),cl=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Fs=$(function(e,r){return rr(r,{av:e(r.av)})}),Vs=function(e){return{$:3,a:e}},Es=function(e){return{$:2,a:e}},ll=$(function(e,r){return{$:0,a:e,b:r}}),Rs=$(function(e,r){return{$:1,a:e,b:r}}),ze=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},yo=Ev,js=S(function(e,r,n){return o(fr,0/0,yo(o(e,r,n)))}),ul=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ns=zv,vl=function(e){return p(Ns,B,P,e)},Ys=$(function(e,r){var n=o(ul,function(a){return a!=="0"&&a!=="."},vl(r));return ve(e&&n?"-":"",r)}),oe=dc,Mt=Cv,$l=Nv,fl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=on(n);if(a.$===1)return"01";var t=a.a;return o(Mt,"0",fl(t))}else{var i=tr(r);return i>=48&&i<57?o(Mt,$l(i+1),n):"0"}},kt=bv,Gs=Sv,ja=function(e){return o(Mt,e,"")},sl=S(function(e,r,n){return e<=0?n:p(sl,e>>1,ve(r,r),e&1?ve(n,r):n)}),zn=$(function(e,r){return p(sl,e,r,"")}),Dt=S(function(e,r,n){return ve(n,o(zn,e-Br(n),ja(r)))}),Bt=Pv,ml=function(e){var r=o(fo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Ws=function(e){var r=o(fo,"e",oe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,rl(o(ds,"+",t)?o(Fn,1,t):t)),c=ml(n),l=c.a,u=c.b,v=ve(l,u),f=i<0?o(fr,"0",o(ze,function(m){var d=m.a,s=m.b;return d+("."+s)},o(ze,cl(ja),on(ve(o(zn,O(i),"0"),v))))):p(Dt,i+1,"0",v);return ve(e<0?"-":"",f)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Hs=S(function(e,r,n){if(kt(n)||Gs(n))return oe(n);var a=n<0,t=ml(Ws(O(n))),i=t.a,c=t.b,l=Br(i)+r,u=ve(o(zn,-l+1,"0"),p(Dt,l,"0",ve(i,c))),v=Br(u),f=o(ke,1,l),m=o(e,a,p(Xr,f,v,u)),d=p(Xr,0,f,u),s=m?Bt(o(fr,"1",o(ze,fl,on(Bt(d))))):d,g=Br(s),b=s==="0"?s:r<=0?ve(s,o(zn,O(r),"0")):I(r,Br(c))<0?p(Xr,0,g-r,s)+("."+p(Xr,g-r,g,s)):ve(i+".",p(Dt,r,"0",c));return o(Ys,a,b)}),dl=Hs($(function(e,r){var n=on(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(tr(t))})),Is=js(dl),Os=S(function(e,r,n){var a=o(mo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Is,t,n)}),pl=iv,So=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(pl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},nn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,d=a.e;return C(W,0,r,n,C(W,1,v,f,m,d),C(W,1,i,c,l,u))}else return C(W,e,i,c,C(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,s=a.d;s.a;var g=s.b,b=s.c,y=s.d,x=s.e,d=a.e;return C(W,0,v,f,C(W,1,g,b,y,x),C(W,1,r,n,d,t))}else return C(W,e,r,n,a,t)}),At=S(function(e,r,n){if(n.$===-2)return C(W,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(pl,e,t);switch(u){case 0:return C(nn,a,t,i,p(At,e,r,c),l);case 1:return C(W,a,t,r,c,l);default:return C(nn,a,t,i,c,p(At,e,r,l))}}),_n=S(function(e,r,n){var a=p(At,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(W,1,t,i,c,l)}else{var u=a;return u}}),Js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},bl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var f=v.b,m=v.c,d=v.d;d.a;var s=d.b,g=d.c,b=d.d,y=d.e,x=v.e;return C(W,0,s,g,C(W,1,n,a,C(W,0,i,c,l,u),b),C(W,1,f,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var f=w.b,m=w.c,d=w.d,x=w.e;return C(W,1,n,a,C(W,0,i,c,l,u),C(W,0,f,m,d,x))}else return e},Ti=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,d=t.e,s=e.e;s.a;var g=s.b,b=s.c,y=s.d,x=s.e;return C(W,0,i,c,C(W,1,u,v,f,m),C(W,1,n,a,d,C(W,0,g,b,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var g=M.b,b=M.c,y=M.d,x=M.e;return C(W,1,n,a,C(W,0,i,c,w,d),C(W,0,g,b,y,x))}else return e},qs=Ba(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return C(W,n,l,u,v,C(W,0,a,t,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Ti(r)}else break e;else return c.a,c.d,Ti(r);else break e;return r}}),oa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(W,r,n,a,oa(t),l);var u=bl(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,d=u.d,s=u.e;return C(nn,v,f,m,oa(d),s)}else return ir}else return C(W,r,n,a,oa(t),l)}else return ir},yn=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(W,n,a,t,o(yn,e,i),c);var u=bl(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,d=u.d,s=u.e;return C(nn,v,f,m,o(yn,e,d),s)}else return ir}else return C(W,n,a,t,o(yn,e,i),c);else return o(Zs,e,Xt(qs,e,r,n,a,t,i,c))}),Zs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=Js(c);if(l.$===-1){var u=l.b,v=l.c;return C(nn,n,u,v,i,oa(c))}else return ir}else return C(nn,n,a,t,i,o(yn,e,c))}else return ir}),Qs=$(function(e,r){var n=o(yn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(W,1,a,t,i,c)}else{var l=n;return l}}),qn=S(function(e,r,n){var a=r(o(So,e,n));if(a.$)return o(Qs,e,n);var t=a.a;return p(_n,e,t,n)}),Xs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(qn,r,ze(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Rs,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(qn,r,ze(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(ll,T(i,c),p(Os,i,c,n))}));case 3:var r=e.a,n=e.b;return o(qn,r,ze(function(a){return a.$===3?Vs(n):a}));default:var r=e.a,n=e.b;return o(qn,r,ze(function(a){return a.$===2?Es(n):a}))}},Ks=function(e){return Fs(Xs(e))},em=$(function(e,r){return o(ee,Ks(e),r)}),rm=$(function(e,r){return rr(r,{eA:o(em,e,r.eA)})}),nm=$(function(e,r){var n=r.a,a=r.b;return o(We,n,rr(a,{B:o(cl,rm(e),a.B)}))}),am=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),tm=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,rr(t,{B:o(am,o(e,i.a,r),i)}))}),om=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return rr(a,{aM:!a.aM});case 2:var t=n.a;return rr(a,{G:p(zs,e,t,a.G)});case 3:var i=n.a;return rr(a,{G:o(nm,i,a.G)});case 4:var c=n.a;return rr(a,{G:p(tm,r,c,a.G)});default:var l=n.a;return rr(a,{G:o(Us,l,a.G)})}}),im=$(function(e,r){return o(We,Ra,{B:T(e,r(e)),ab:P,T:P})}),cm=l$,Mi=cm(P),_a=Iv,Tn=Hv,lm=s$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(f){return o(D,function(m){return Ae({eo:m,eB:f,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Q))},o(k,"control",Q))},o(k,"down",Q))},o(k,"downs",_a(Tn)))},o(k,"left",Q))},o(k,"pressedKeys",_a(Tn)))},o(k,"right",Q))},o(k,"shift",Q))},o(k,"up",Q))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ae({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Q))},o(k,"isDown",Q))},o(k,"move",Q))},o(k,"rightDown",Q))},o(k,"rightUp",Q))},o(k,"up",Q))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Ae({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Ae({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),um=function(e){return{$:4,a:e}},vm={$:0},$m=bc,Je=$(function(e,r){return o(xc,e,$m(r))}),H=Je("className"),fm=function(e){var r=e.b.B;return r.b},ya=Je("id"),sm=h$,Sa=sm,mm=_$,ne=mm,dm={$:1},pm=function(e){return{$:3,a:e}},bm=function(e){return{$:5,a:e}},ki=Gr("a"),xo=Gr("button"),Di=function(e){return o(Je,"href",x$(e))},gm=Tr("clip-rule"),we=Tr("d"),hm=Tr("fill"),gl=yc("http://www.w3.org/2000/svg"),_m=gl("svg"),ym=Tr("viewBox"),Sm=o(y$,"http://www.w3.org/XML/1998/namespace","xml:space"),je=_m(h([ym("0 0 24 24"),hm("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),Sm("http://www.w3.org/2000/svg")])),xm=Tr("fill-rule"),Le=gl("path"),Ur={eD:je(h([o(Le,h([we("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:je(h([o(Le,h([we("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:je(h([o(Le,h([we("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:je(h([o(Le,h([we("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([we("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:je(h([o(Le,h([we("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([we("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:je(h([o(Le,h([we("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:je(h([o(Le,h([we("M7 5V19L18 12L7 5Z")]),P)])),fr:je(h([o(Le,h([we("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:je(h([o(Le,h([we("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:je(h([o(Le,h([xm("evenodd"),gm("evenodd"),we("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:je(h([o(Le,h([we("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:je(h([o(Le,h([we("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Cm=function(e){return{$:0,a:e}},hl=Sc,_l=$(function(e,r){return o(hl,e,Cm(r))}),Co=function(e){return o(_l,"click",Ae(e))},Bi=Je("target"),wm=Je("title"),Ut=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(W,n,a,o(e,a,t),o(Ut,e,i),o(Ut,e,c))}),Lm=Ct,sr=Lm,Pm=function(e){return p(vo,S(function(r,n,a){return o(B,n,a)}),P,e)},zm=$(function(e,r){return{$:3,a:e,b:r}}),Tm=$(function(e,r){return{$:2,a:e,b:r}}),Mm=$(function(e,r){return{$:0,a:e,b:r}}),km=$(function(e,r){return{$:1,a:e,b:r}}),En=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Dm=L(En,0/255,0/255,0/255,1),Bm=bc,yl=$(function(e,r){return o(xc,e,Bm(r))}),Am=yl("checked"),Xe=_v,Um=S(function(e,r,n){return ve(o(zn,e-Br(n),ja(r)),n)}),xa=vv,Sl=function(e){var r=function(n){return n<10?Fe(n):ja($l(87+n))};return e<16?r(e):ve(Sl(e/16|0),r(o(xa,16,e)))},Fm=o(te,Sl,o(Um,2,"0")),wo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Vm=function(e){var r=wo(e),n=r.cN,a=r.cd,t=r.b6;return o(Dr,"",o(B,"#",o(ee,o(te,Xe,Fm),h([n*255,a*255,t*255]))))},Ft=Je("htmlFor"),Vt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Ca=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return e(n)}}),Em=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),Lo=$(function(e,r){return p(pr,Em(e),P,r)}),xl=V(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Rm=I$,jm=Rv,Nm=$(function(e,r){if(r.$)return Se(e);var n=r.a;return $e(n)}),Ym=H$,Gm=function(e){return o(Ym,{ew:!1,fg:!1},e)},Po=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Wm=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return $e(e(n))}}),Hm=function(e){return{$:2,a:e}},Im=function(e){return{$:0,a:e}},Om=function(e){return{$:1,a:e}},Xa=$(function(e,r){return tr(r)-tr(e)}),Ka=S(function(e,r,n){var a=tr(n);return I(tr(e),a)<1&&I(a,tr(r))<1}),Jm=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):Se(Om(r))},a=p(Ka,"0","9",r)?$e(o(Xa,"0",r)):p(Ka,"a","z",r)?$e(10+o(Xa,"a",r)):p(Ka,"A","Z",r)?$e(10+o(Xa,"A",r)):Se(Im(r));return o(Ca,n,a)}),Cl=$(function(e,r){var n=on(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(Ca,function(c){return o(Ca,function(l){return $e(c+l*e)},o(Cl,e,i))},o(Jm,e,t))}),qm=$(function(e,r){return 2<=e&&e<=36?o(Cl,e,Bt(r)):Se(Hm(e))}),Zm=qm(16),Qm=S(function(e,r,n){return L(En,e,r,n,1)}),Xm=V(function(e,r,n,a){return L(En,e,r,n,a)}),Rn=uv,Km=$(function(e,r){var n=o(Rn,10,e);return Xe(r*n)/n}),ed=Dv,rd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=vl(n);if(a.b&&!a.b.b){var t=a.a;return jm(h([t,t]))}else return n};return o(te,ed,o(te,function(n){return o(ze,function(a){return p(Rm,1,a,n)},Gm(e))},o(te,Vt(Po),o(te,ze(function(n){return n.fG}),o(te,ze(Lo(Ar)),o(te,Nm("Parsing hex regex failed"),Ca(function(n){var a=o(ee,o(te,r,o(te,Zm,Wm(ts))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return $e(L(Xm,t/255,c/255,u/255,o(Km,2,f/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(Qm,t/255,c/255,u/255))}else break e;return Se("Parsing ints from hex failed")})))))))}(),wa=Gr("input"),Et=Gr("label"),Rt=Je("name"),wl=$(function(e,r){return p(pr,k,r,e)}),nd=o(wl,h(["target","checked"]),Q),ad=function(e){return o(_l,"change",o(ba,e,nd))},td=function(e){return T(e,!0)},od=function(e){return{$:1,a:e}},id=$(function(e,r){return o(hl,e,od(r))}),cd=o(wl,h(["target","value"]),Tn),zo=function(e){return o(id,"input",o(ba,td,o(ba,e,cd)))},Ll=Je("max"),Pl=Je("min"),zl=function(e){return o(Je,"step",e)},La=Je("type"),To=Je("value"),Ai=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,P,h([o(Et,h([Ft(r)]),h([o(J,h([H("relative w-full")]),h([o(J,h([H("inline-block")]),h([sr(r)])),o(J,h([H("inline-block float-right")]),h([sr(oe(n))]))]))])),o(wa,h([La("range"),o(ne,"width","100%"),ya(r),Rt(r),Pl(oe(a)),Ll(oe(t)),To(oe(n)),zl(oe(i)),zo(o(te,yo,o(te,fr(42),c)))]),P)]))},ld=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ud=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([H("h-12 py-4")]),h([o(Et,h([H("block"),Ft(e)]),h([o(wa,h([H("relative bottom-[1px] align-middle mr-2"),La("checkbox"),ya(e),Rt(e),ad(zm(e)),Am(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ai({cg:e,cs:i,cw:t,cA:Mm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ai({cg:e,cs:i,cw:t,cA:o(te,Xe,km(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,h([o(J,h([o(ne,"margin-bottom","6px")]),h([o(Et,h([Ft(e)]),h([sr(e)]))])),o(wa,h([La("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),ya(e),Rt(e),zo(function(l){return o(Tm,e,o(ld,Dm,rd(l)))}),To(Vm(c))]),P)]))}}),vd=function(e){return o(J,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([H("text-lg pb-2")]),h([sr(e.fh)])),o(J,h([H("pl-2 pr-2")]),Pm(o(Ut,ud,e.av)))]))},$d=function(e){return o(J,h([H("text-xs text-white60")]),o(ee,vd,e))},fd=function(e){return o(J,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(dl,3,cn(e).aK))]))},sd=function(e){e.a;var r=e.b.T;return o(ze,function(n){return Xe(60/(cn(e).aK-n))},o(ze,o(te,cs,function(n){return n.aK}),Po(o(ol,59,r))))},md=function(e){return o(J,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=sd(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Fe(n)+" Fps")])}())},dd=function(e){return{$:0,a:e}},pd=function(e){var r=e.b.T;return jr(r)},bd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return jr(r)+1+jr(n)},gd=function(e){return o(wa,h([H("absolute w-full"),La("range"),Pl(Fe(0)),Ll(Fe(bd(e)-1)),To(Fe(pd(e))),zl(Fe(1)),zo(o(te,yo,o(te,fr(42),o(te,Xe,dd))))]),P)},Ui={$:1},Fi={$:3},Vi={$:2},jt=function(e){return!e.b},Tl=yl("disabled"),et=S(function(e,r,n){return o(xo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),Tl(e),Co(r)]),h([sr("REC")]))}),rt=S(function(e,r,n){return o(xo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Tl(e),Co(n)]),h([o(J,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),hd=function(e){var r=e.a,n=e.b.ab;return o(J,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(et,!1,Ui,"text-red-500 font-bold");case 1:return p(et,!1,Vi,"text-white60 hover:text-white80 font-bold");default:return p(et,!0,Vi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(rt,jt(n),Ur.fq,Fi);case 1:return p(rt,jt(n),Ur.fq,Fi);default:return p(rt,!1,Ur.fp,Ui)}}()]))},_d=function(e){return o(J,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([gd(e),hd(e),md(e),fd(e)]))},yd=function(e){var r=e.a;return yr(r,Ra)},Sd=$(function(e,r){var n=yd(r.G)?o(J,P,P):o(J,h([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fs.fU+.5*e.cT.fS)+"px"),o(ne,"top",oe(-e.fs.fY+.5*e.cT.eW)+"px")]),h([o(J,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Ur.fs]))]));return o(J,P,h([n]))}),xd=$(function(e,r){var n=o(xo,h([H(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Co(dm),wm("Distraction Free Mode")]),h([Ur.f0])),a=40,t=260,i=o(J,h([H("absolute w-8 bottom-12")]),h([o(ki,h([H("text-twitterBlue40 hover:text-twitterBlue"),Di("https://twitter.com/AzizErkalSelman"),Bi("_blank")]),h([Ur.fN]))])),c=80,l=o(J,h([H("absolute w-8 bottom-2")]),h([o(ki,h([H("text-githubCat40 hover:text-githubCat"),Di("https://github.com/erkal/elm-3d-playground-exploration"),Bi("_blank")]),h([Ur.eQ]))])),u=e.cT.fS>640?A(e.cT.eW,a+t,e.cT.fS-(a+t)):A(e.cT.eW-c,a,e.cT.fS-a),v=u.a,f=u.b,m=u.c;return r.aM?o(J,h([H("fixed w-10 h-10 p-1")]),h([n])):o(J,P,h([o(J,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),h([n,i,l])),o(J,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),h([o(Sa,pm,$d(cn(r.G).eA))])),o(J,h([H("absolute bottom-0"),o(ne,"left",oe(f)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(m)+"px")]),h([o(Sa,bm,_d(r.G))])),o(Sd,e,r)]))}),Cd=S(function(e,r,n){var a=fm(n.G),t=cn(n.G);return o(J,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",oe(t.cT.fS)+"px"),o(ne,"height",oe(t.cT.eW)+"px")]),h([o(J,h([H("fixed")]),h([o(Sa,Kc(vm),o(e,t,a))])),o(J,h([ya("gui")]),h([o(xd,t,n),o(Sa,um,o(r,t,a))]))]))}),wd=Oe(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(om,r,i,u,v),Mi)}),l=function(u){var v=o(el,n,u.e1);return T({aM:u.e1.cT.fS<500,G:o(im,v,a)},Mi)};return ws({e0:l,fH:Kc(lm(fs)),fO:c,fQ:o(Cd,e,t)})}),Ld=V(function(e,r,n,a){return ye(wd,e,r,n,a,$(function(t,i){return o(J,P,P)}),S(function(t,i,c){return c}))}),Pd=function(e){return{}},zd=S(function(e,r,n){return{av:n,e5:r,fh:e}}),Ml=ir,Td=function(e){return p(Un,$(function(r,n){var a=r.a,t=r.b;return p(_n,a,t,n)}),Ml,e)},Md=S(function(e,r,n){return p(zd,e,r,Td(n))}),kd=Md,nt=S(function(e,r,n){var a=r.a,t=r.b;return T(e,o(ll,T(a,t),n))}),Dd=h([p(kd,"Camera",!0,h([p(nt,"camera x",T(-40,40),0),p(nt,"camera y",T(-40,40),0),p(nt,"camera z",T(-40,40),16)]))]),Bd=$(function(e,r){return r}),Ad=$(function(e,r){return r.b?p(pr,B,r,e):e}),He=function(e){return p(pr,Ad,P,e)},Na=$(function(e,r){return He(o(ee,e,r))}),Ud=function(e){var r=function(n){return o(ee,function(a){return T(n,a)},e)};return Na(r)},Mo=function(e){return{$:5,a:e}},Pa=function(e){return Mo(e)},xr=$v,Ge=function(e){return e*xr/180},Ya=$(function(e,r){return{$:0,a:e,b:r}}),kl=$(function(e,r){return{$:2,a:e,b:r}}),Dl=$(function(e,r){return{$:4,a:e,b:r}}),Bl=$(function(e,r){return{$:3,a:e,b:r}}),ko=$(function(e,r){return{$:1,a:e,b:r}}),Fd=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),Vd=function(e){var r=e;return r},Do=function(e){var r=e;return Vd(r.er)},Bo=function(e){var r=e;return r.aL},ln=function(e){var r=e;return r.cB},jn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),mr=function(e){return e},Wr=function(e){var r=e;return r.c4},Hr=function(e){var r=e;return r.c5},Ir=function(e){var r=e;return r.c7},Ed=$(function(e,r){return mr({cB:o(jn,e,ln(r)),c4:Wr(r),c5:Hr(r),c7:Ir(r)})}),Rd=$(function(e,r){return{er:o(Ed,e,Do(r)),aL:Bo(r)}}),Nn=$(function(e,r){return{eH:r,cB:e}}),jd=$(function(e,r){var n=r;return o(Nn,o(jn,e,n.cB),n.eH)}),Nd=$(function(e,r){var n=r;return{k:o(jd,e,n.k),e9:n.e9,fu:n.fu}}),Ao=function(e){var r=e;return r},Yd=function(e){return e},Al=$(function(e,r){var n=Ao(r),a=n.a,t=n.b;return Yd(T(e(a),e(t)))}),Gd=$(function(e,r){return o(Al,jn(e),r)}),Uo=function(e){var r=e;return r.ey},Fo=function(e){var r=e;return r.fu},Re=function(e){var r=e;return O(r)},Ul=$(function(e,r){return{ey:r,fu:Re(e)}}),Wd=$(function(e,r){return o(Ul,Fo(r),o(jn,e,Uo(r)))}),Fl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),Hd=$(function(e,r){return o(Fl,jn(e),r)}),Ga=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Fd,n,a,t);switch(r.$){case 0:var f=r.a,c=r.b;return o(Ya,f,o(Rd,i,c));case 1:var f=r.a,l=r.b;return o(ko,f,o(Hd,i,l));case 3:var f=r.a,u=r.b;return o(Bl,f,o(Wd,i,u));case 2:var f=r.a,v=r.b;return o(kl,f,o(Nd,i,v));case 4:var f=r.a,m=r.b;return o(Dl,f,o(Gd,i,m));default:var d=r.a;return Mo(o(ee,Ga(A(n,a,t)),d))}}),Nt=function(e){return Ga(A(e,0,0))},kr=function(e){return Ga(A(0,e,0))},Mn=function(e){return Ga(A(0,0,e))},Cr=function(e){return e},wr=fv,Nr=sv,ia=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=wr(c),u=Nr(c),v=a.eH,f=v,m=f.fU*u,d=l*m,s=m*m,g=f.fY*u,b=l*g,y=m*g,x=g*g,_=1-2*(s+x),w=f.c6*u,M=l*w,N=2*(y-M),R=2*(y+M),E=m*w,j=2*(E+b),Y=2*(E-b),U=g*w,Z=2*(U-d),X=2*(U+d),ce=w*w,fe=1-2*(x+ce),ie=1-2*(s+ce);return{fU:fe*i.fU+N*i.fY+j*i.c6,fY:R*i.fU+ie*i.fY+Z*i.c6,c6:Y*i.fU+X*i.fY+_*i.c6}}),Yn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=wr(c),u=Nr(c),v=a.cB,f=v,m=i.fU-f.fU,d=i.fY-f.fY,s=i.c6-f.c6,g=a.eH,b=g,y=b.fU*u,x=l*y,_=y*y,w=b.fY*u,M=l*w,N=y*w,R=w*w,E=1-2*(_+R),j=b.c6*u,Y=l*j,U=2*(N-Y),Z=2*(N+Y),X=y*j,ce=2*(X+M),fe=2*(X-M),ie=w*j,de=2*(ie-x),De=2*(ie+x),Ce=j*j,br=1-2*(R+Ce),gr=1-2*(_+Ce);return{fU:f.fU+br*m+U*d+ce*s,fY:f.fY+Z*m+gr*d+de*s,c6:f.c6+fe*m+De*d+E*s}}),Id=S(function(e,r,n){return mr({cB:p(Yn,e,r,ln(n)),c4:p(ia,e,r,Wr(n)),c5:p(ia,e,r,Hr(n)),c7:p(ia,e,r,Ir(n))})}),Od=S(function(e,r,n){return{er:p(Id,e,r,Do(n)),aL:Bo(n)}}),Jd=$(function(e,r){var n=o(Yn,e,r),a=o(ia,e,r);return function(t){var i=t;return o(Nn,n(i.cB),a(i.eH))}}),qd=S(function(e,r,n){var a=n;return{k:p(Jd,e,r,a.k),e9:a.e9,fu:a.fu}}),Zd=S(function(e,r,n){return o(Al,o(Yn,e,r),n)}),Qd=S(function(e,r,n){return o(Ul,Fo(n),p(Yn,e,r,Uo(n)))}),Xd=S(function(e,r,n){return o(Fl,o(Yn,e,r),n)}),Wa=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ya,l,p(Od,e,r,a));case 1:var l=n.a,t=n.b;return o(ko,l,p(Xd,e,r,t));case 3:var l=n.a,i=n.b;return o(Bl,l,p(Qd,e,r,i));case 2:var l=n.a,c=n.b;return o(kl,l,p(qd,e,r,c));case 4:var l=n.a,u=n.b;return o(Dl,l,p(Zd,e,r,u));default:var v=n.a;return Mo(o(ee,o(Wa,e,r),v))}}),Or={fU:0,fY:0,c6:0},vr=function(e){return e},Vl=vr({fU:1,fY:0,c6:0}),Vo=Vl,Kd=o(Nn,Or,Vo),Ei=$(function(e,r){return p(Wa,Kd,Cr(e),r)}),Eo=vr({fU:0,fY:1,c6:0}),Ro=Eo,e0=o(Nn,Or,Ro),r0=$(function(e,r){return p(Wa,e0,Cr(e),r)}),jo=vr({fU:0,fY:0,c6:1}),No=jo,n0=o(Nn,Or,No),Sn=$(function(e,r){return p(Wa,n0,Cr(e),r)}),be=yv,at=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),tt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),a0=vr({fU:-1,fY:0,c6:0}),t0=vr({fU:0,fY:-1,c6:0}),El=vr({fU:0,fY:0,c6:-1}),pe=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),o0=Oe(function(e,r,n,a,t,i){var c=o(at,n,i)?jo:El,l=o(at,r,t)?Eo:t0,u=o(at,e,a)?Vl:a0,v=A(Re(o($r,e,a)),Re(o($r,r,t)),Re(o($r,n,i))),f=p(pe,o(tt,e,a),o(tt,r,t),o(tt,n,i)),m=mr({cB:f,c4:u,c5:l,c7:c});return{er:m,aL:v}}),Fr=function(e){var r=e;return r.fU},Vr=function(e){var r=e;return r.fY},Er=function(e){var r=e;return r.c6},Rl=$(function(e,r){return ye(o0,Fr(e),Vr(e),Er(e),Fr(r),Vr(r),Er(r))}),_r=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),i0=$(function(e,r){var n=r/2;return o(Ya,e,o(Rl,p(_r,-n,-n,-n),p(_r,n,n,n)))}),c0=V(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,f=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=f(i-1/3),d=f(i),s=f(i+1/3);return L(En,s,d,m,a)}),l0=S(function(e,r,n){return L(c0,e,r,n,1)}),Yt=function(e){return{$:0,a:e}},jl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Nl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),ot=function(e){return p(Nl,0,1,e<=.04045?e/12.92:o(Rn,(e+.055)/1.055,2.4))},Gn=q$,u0=function(e){var r=wo(e),n=r.cN,a=r.cd,t=r.b6;return p(Gn,ot(n),ot(a),ot(t))},Yl=function(e){return p(jl,0,Yt(u0(e)),Yt(0))},v0=$(function(e,r){return(r-Qc(r/e)*e)/e}),$0=function(e){return 2*xr*e},bn=V(function(e,r,n,a){return e+(r-e)*(1+wr($0(o(v0,n,a))))/2}),Gt=function(e){return Yl(p(l0,L(bn,0,1,7,e.aK),.8,.8))},it=function(e){return o(i0,Gt(e),1)},Gl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ya,e,o(Rl,p(_r,-c,-l,-u),p(_r,c,l,u)))}),Be=S(function(e,r,n){return A(e,r,n)}),f0=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(ko,e,p(Be,p(_r,n.fU,n.fY,n.c6),p(_r,a.fU,a.fY,a.c6),p(_r,t.fU,t.fY,t.c6)))}),s0=function(e){var r=o(kr,-(be(3)/6),o(Nt,-.5,o(Sn,-Ge(30),o(f0,Gt(e),A({fU:0,fY:0,c6:0},{fU:wr(Ge(30)),fY:Nr(Ge(30)),c6:0},{fU:0,fY:1,c6:0}))))),n=o(kr,-(be(3)/6),o(Gl,Gt(e),A(1,1e-8,1)));return Pa(h([o(Mn,-.5,r),o(Mn,.5,r),n,o(Sn,Ge(120),n),o(Sn,Ge(240),n)]))},m0=$(function(e,r){var n=r.a,a=r.b,t=$(function(m,d){return o(kr,(1+be(3))/2,o(Sn,m,o(kr,-((1+be(3))/2),d)))}),i=xr,c=20,l=function(m){return o(Ei,L(bn,0,i,c,e.aK),m)},u=o(t,Ge(240),l(it(e))),v=o(Nt,(3+be(3))/2,o(kr,(1+be(3))/2,l(it(e)))),f=l(Pa(h([o(Sn,Ge(90),o(kr,1/2+be(3)/6,s0(e))),it(e)])));return o(Mn,L(bn,-1,1,7,e.aK),o(kr,a*(1+be(3)),o(Nt,n*(3+be(3)),o(r0,L(bn,0,i,c,e.aK),o(Ei,L(bn,0,i,c,e.aK),Pa(h([f,o(t,Ge(60),f),o(t,Ge(120),f),o(t,-Ge(60),f),v,u])))))))}),d0=function(e){return Pa(o(ee,m0(e),o(Ud,o(Sr,-1,1),o(Sr,-1,1))))},p0=$(function(e,r){return o(ze,function(n){if(n.$)return 0;var a=n.b;return a},o(So,e,r.av))}),b0=$(function(e,r){return o(fr,0,Po(o(Lo,p0(e),r)))}),g0=$(function(e,r){return o(b0,e,r.eA)}),ct=g0,h0=dv,_0=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(ke,O(c),o(ke,O(i),O(t)));if(l){var u=t/l,v=i/l,f=c/l,m=be(f*f+v*v+u*u);return re({fU:f/m,fY:v/m,c6:u/m})}else return q}),lt=function(e){return e},Yo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),ca=function(e){var r=e,n=o(ke,O(r.fU),o(ke,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=be(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},za=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),y0=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),Wl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),S0=$(function(e,r){var n=e,a=r;return I(a,n)<0}),x0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),C0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),w0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Qe=0,Hl={fU:0,fY:0,c6:0},L0=S(function(e,r,n){return o(Vt,function(a){var t=o(x0,o(C0,a,r),r);return o(Vt,function(i){var c=o(Yo,r,e),l=o(y0,n,c),u=o(Wl,Qe,l)?c:o(S0,Qe,l)?w0(c):Hl;return o(ze,function(v){return A(a,i,v)},ca(u))},ca(t))},ca(e))}),P0=function(e){var r=e,n=O(r.c6),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=be(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=be(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=be(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=be(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},Go=function(e){var r=P0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return T(r,c)},Kr=function(e){var r=e;return r},z0=$(function(e,r){var n=Go(e),a=n.a,t=n.b;return mr({cB:r,c4:a,c5:t,c7:e})}),T0=function(e){var r=o(za,e.aS,e.dj),n=Kr(e.ei),a=o(Yo,r,n),t=p(L0,r,n,a);if(t.$){var v=ca(r);if(v.$){var m=Go(e.ei),d=m.a,s=m.b;return mr({cB:e.dj,c4:s,c5:e.ei,c7:d})}else{var f=v.a;return o(z0,f,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return mr({cB:e.dj,c4:u,c5:l,c7:c})}},M0=function(e){return{$:0,a:e}},la=function(e){var r=e;return .5*r},k0=mv,D0=function(e){var r=e;return k0(r)},B0=function(e){var r=la(Re(e.ej)),n=D0(r);return{cM:M0(n),c2:e.c2}},A0=function(e){var r=e.aS,n=e.dj,a=e.ei;return B0({ej:Cr(2*h0(.5)),c2:T0({dj:lt(n),aS:lt(r),ei:o(fr,Eo,o(_0,Or,lt(a)))})})},U0=function(e){return e},Rr=function(e){return e},F0=function(e){return Rr(.01*e)},Ri=function(e){return e},V0=function(e){return e},E0=function(e){return{$:0,a:e}},R0=E0,j0={$:3},N0=j0,Y0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),G0=Y0,W0=function(e){return{$:1,a:e}},H0=W0,I0=function(e){return o(Tr,"height",Fe(e))},O0=function(e){return b$(S$(e))},J0=O0,q0=function(e){return{$:2,a:e}},Z0=q0,Q0=function(e){return o(Dr,"",e)},X0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Xe(l*1e3)/1e3},c=function(l){return Xe(l*1e4)/100};return Q0(h(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},K0=$(function(e,r){switch(r.$){case 0:return o(Ef,e,r);case 1:return o(Rf,e,r);case 2:return o(jf,e,r);case 3:return o(Nf,e,r);case 4:return o(Yf,e,r);default:return o(Gf,e,r)}}),ep=$(function(e,r){switch(r.$){case 0:return o(mf,e,r);case 1:return o(df,e,r);case 2:return o(pf,e,r);case 3:return o(bf,e,r);case 4:return o(gf,e,r);case 5:return o(hf,e,r);case 6:return o(_f,e,r);case 7:return o(yf,e,r);default:return Sf(e)}}),rp=S(function(e,r,n){return p(Vf,e,r,n)}),ji=function(e){var r=e;return r},un=rf,ut=L(un,1,1,1,1),Ke=S(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),np=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ap=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(np,n*a/t,n,n*(1-a-t)/t)}),tp=function(e){var r=e.a,n=e.b,a=e.c;return p(Gn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Wo=$(function(e,r){return tp(o(ap,e,r))}),Il=$(function(e,r){return{dp:yr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),nr=lf,op=function(e){return nr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},vt=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(un,a.bY,a.bY,a.bY,i);return ye(t,e,c,op(a),a.dp,r,n)}),Ol=Oe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,f=n,m=o(Il,c,a),d=l,s=i;e=u,r=v,n=f,a=m,t=d,i=s;continue e;case 1:var g=t.b,b=o(B,C(vt,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var y=t.b,x=o(B,C(vt,e,r,n,a,y),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,w=o(B,C(vt,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(Un,L(Ol,e,r,n,a),i,M)}}),ip=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Jl=ip,Ho=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),cp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ho,518,r,n,a)},lp=$(function(e,r){return{$:6,a:e,b:r}}),up=lp,ql=h([cp({V:1,W:0,Z:!1}),L(Jl,!1,!1,!1,!1),o(up,0,1)]),an=519,Io=8,Zl=15,en=7681,vp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=sf,$p=$(function(e,r){return{$:0,a:e,b:r}}),fp=$p({df:1,$7:0,dV:5}),Ue=O$,sp=fp(h([{bU:o(Ue,-1,-1)},{bU:o(Ue,1,-1)},{bU:o(Ue,-1,1)},{bU:o(Ue,1,1)}])),mp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},dp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Oo=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(dp,a,t,i)))}),Jo=function(e){return p(Oo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},qo=function(e){return C(ae,h([Jo(e),L(Jl,!1,!1,!1,!1)]),mp,vp,sp,{})},pp=qo({a9:en,cp:0,cO:Io,bm:an,c3:Zl,bu:en,bv:en}),bp=516,Ni=5386,xe=7680,gp=function(e){return o(Rn,2,e+4)},Ql=function(e){return qo({a9:xe,cp:Zl,cO:Io,bm:bp,c3:gp(e),bu:Ni,bv:Ni})},hp=S(function(e,r,n){return He(h([p(Ke,e,n,ql),h([Ql(r),pp])]))}),_p=$(function(e,r){return He(o(Hc,hp(e),r))}),yp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ho,513,r,n,a)},Sp=yp({V:1,W:0,Z:!0}),xp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Cp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var f=u.a,m=u.b,d=u.c,s=v.a,g=v.b,b=v.c;return xp(f)(m)(d)(s)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},wp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yi=$(function(e,r){var n=e,a=r;return p(wp,32774,n,a)}),Lp=1,Gi=771,Pp=770,Zo=Cp({bw:0,aH:o(Yi,Lp,Gi),bz:0,bB:o(Yi,Pp,Gi),bG:0,bW:0}),Jr=h([Sp,Zo]),zp=function(e){var r=e;return r.dO},Tp=function(e){var r=e;return r.dP},Xl=function(e){var r=e;return r.dQ},Mp=function(e){var r=e;return r.dR},kp=function(e){var r=e;return r.dS},Kl=function(e){var r=e;return r.dT},eu=function(e){return A(o($r,Mp(e),zp(e)),o($r,kp(e),Tp(e)),o($r,Kl(e),Xl(e)))},Wi=function(e){var r=e;return ln(r)},Dp=function(e){return e},Bp=function(e){return mr({cB:Dp({fU:e.H,fY:e.I,c6:e.J}),c4:vr({fU:e.q,fY:e.r,c6:e.s}),c5:vr({fU:e.t,fY:e.u,c6:e.v}),c7:vr({fU:e.w,fY:e.x,c6:e.y})})},$t=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),ru=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,f=v,m=n.c5,d=m,s=n.c4,g=s;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*f.fU+l*f.fY+u*f.c6}}),nu=$(function(e,r){return{cB:o(ru,e,ln(r)),c4:o($t,e,Wr(r)),c5:o($t,e,Hr(r)),c7:o($t,e,Ir(r))}}),Ta=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),ua=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(ua,n,a)}),Ap=$(function(e,r){var n=Ta(r),a=Ta(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),Ie=function(e){var r=e;return r},Up=function(e){var r=e;return A(r.fU,r.fY,r.c6)},xn=$(function(e,r){var n=e,a=r;return a+n}),Fp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=la(Re(a)),c=la(Re(n)),l=la(Re(t)),u=Up(r),v=u.a,f=u.b,m=u.c;return{dO:o(xn,c,v),dP:o(xn,i,f),dQ:o(xn,l,m),dR:o($r,c,v),dS:o($r,i,f),dT:o($r,l,m)}}),Hi=V(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,f=t.fU*r,m=Ie(Ir(e)),d=O(l*m.fU)+O(c*m.fY)+O(i*m.c6),s=Ie(Hr(e)),g=O(l*s.fU)+O(c*s.fY)+O(i*s.c6),b=Ie(Wr(e)),y=O(l*b.fU)+O(c*b.fY)+O(i*b.c6),x=o(Fp,A(y,g,d),o(ru,e,p(_r,f,v,u)));if(a.$)return re(x);var _=a.a;return re(o(Ap,_,x))}),Wt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var s=e,g=r,b=n,y=i;e=s,r=g,n=b,a=y;continue e;case 1:var c=t.a,l=L(Hi,e,r,c,n),s=e,g=r,b=l,y=i;e=s,r=g,n=b,a=y;continue e;case 2:var s=e,g=r,b=n,y=i;e=s,r=g,n=b,a=y;continue e;case 3:var c=t.a,l=L(Hi,e,r,c,n),s=e,g=r,b=l,y=i;e=s,r=g,n=b,a=y;continue e;case 4:var u=t.a,s=e,g=r,b=L(Wt,e,r,n,u),y=i;e=s,r=g,n=b,a=y;continue e;default:var v=t.a,f=t.b,m=o(nu,Bp(v),e),d=r*v.bY,s=e,g=r,b=L(Wt,m,d,n,h([f])),y=i;e=s,r=g,n=b,a=y;continue e}}else return n}),vn=Z$,$n=Q$,fn=X$,au=function(e){return{$:4,a:e}},Vp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Wn=function(e){return au(o(Vp,e,P))},Ep={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Rp=function(e){var r=e;return r},Ii=qo({a9:en,cp:0,cO:Io,bm:an,c3:255,bu:en,bv:en}),jp=function(e){var r=e,n=o(ke,O(r.fU),o(ke,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=be(i*i+t*t+a*a);return c*n}else return Qe},Pe={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},Ne=$(function(e,r){var n=e,a=r;return nr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),gn=T({be:o(Ne,Pe,Pe),bL:o(Ne,Pe,Pe),bM:o(Ne,Pe,Pe),bN:o(Ne,Pe,Pe)},L(un,0,0,0,0)),le=$(function(e,r){var n=r;return e*n}),Oi=function(e){var r=e;return-r},tu=514,ou=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ho,515,r,n,a)},iu=240,Np=h([ou({V:1,W:0,Z:!0}),Jo({a9:xe,cp:iu,cO:0,bm:tu,c3:0,bu:xe,bv:xe}),Zo]),Yp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Re(a),l=c,u=Re(t),v=u,f=n.cM;if(f.$){var d=f.a;return kt(v)?nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=f.a;return kt(v)?nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Zn=$(function(e,r){return(1&e>>r)===1?0:1}),Gp=function(e){return h([ou({V:1,W:0,Z:!0}),Jo({a9:xe,cp:iu,cO:e,bm:tu,c3:0,bu:xe,bv:xe}),Zo])},Wp=S(function(e,r,n){return He(o(ee,function(a){var t=a<<4,i=L(un,o(Zn,a,0),o(Zn,a,1),o(Zn,a,2),o(Zn,a,3));return p(Ke,e,T(r,i),Gp(t))},o(Sr,1,o(Rn,2,n)-1)))}),kn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},rn=function(e){var r=e;return r},Hp=uf,Ji=function(e){var r=e;return kn(Ir(r))},Ip={cB:Or,c4:Vo,c5:Ro,c7:No},Ha=function(e){var r=e;return r},Op=function(e){var r=Ha(ln(e)),n=Ie(Ir(e)),a=Ie(Hr(e)),t=Ie(Wr(e));return nr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Jp=$(function(e,r){var n=r;return Op(o(nu,n,e))}),qp=function(e){return o(Jp,Ip,e)},Zp=function(e){var r=e;return r.c2},Qp=function(e){var r=e;return Wr(r)},Xp=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Kp=function(e){var r=e;return Hr(r)},e1=function(e){var r=Zp(e.ev),n=mr({cB:Wi(r),c4:Qp(r),c5:Kp(r),c7:kn(Ji(r))}),a=Wn(e.aQ),t=a,i=L(Wt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=qp(r),u=o(le,.99,o(ue,Re(e.aJ),Oi(Xl(c)))),v=eu(c),f=v.a,m=v.b,d=v.c,s=jp(p(Xp,f,m,d)),g=o(le,1.01,o(xn,s,Oi(Kl(c)))),b=o(Yp,e.ev,{eq:e.eq,eP:g,fi:u}),y=Hp(b).dM,x=y?Ie(kn(Ji(r))):rn(Wi(r)),_=function(){var ie=e.b_;switch(ie.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var de=ie.a;return T(3,de);case 4:var de=ie.a;return T(4,de);default:return T(5,0)}}(),w=_.a,M=_.b,N=e.bE,R=N,E=o(Wo,R,e.b0),j=E,Y=nr({dx:0,dy:x.fU,dz:vn(j),dA:e.ec,dB:0,dC:x.fY,dD:$n(j),dE:Rp(s),dF:0,dG:x.c6,dH:fn(j),dI:w,dJ:0,dK:y,dL:0,dM:M}),U=ye(Ol,Y,l,b,Ep,t,{M:P,U:P,fB:P}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return He(h([p(Ke,U.M,T(X,ut),Jr),p(Ke,U.U,gn,Jr)]));case 1:var X=Z.a;return He(h([p(Ke,U.M,gn,Jr),h([Ii]),p(Ke,U.fB,X.be,ql),h([Ql(0)]),p(Ke,U.M,T(X,ut),Np),p(Ke,U.U,gn,Jr)]));default:var ce=Z.a,fe=Z.b;return He(h([p(Ke,U.M,T(fe,ut),Jr),h([Ii]),o(_p,U.fB,ce),p(Wp,U.M,fe,jr(ce)),p(Ke,U.U,gn,Jr)]))}},r1=function(e){return o(Tr,"width",Fe(e))},n1=$(function(e,r){var n=h([H0(1),Z0(0),R0(!0),L(G0,0,0,0,0)]),a=function(){var w=e.b1;switch(w.$){case 0:return A(n,"0",1);case 1:return A(o(B,N0,n),"1",1);default:var M=w.a;return A(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,f=ji(v),m=o(ne,"height",Fe(f)+"px"),d=ji(u),s=d/f,g=o(Na,function(w){return e1({eq:s,ev:e.ev,aJ:e.aJ,aQ:w.aQ,bE:w.bE,bK:w.bK,ec:c,b_:w.b_,b0:w.b0})},r),b=o(ne,"width",Fe(d)+"px"),y=e.aI,x=y,_=X0(x);return p(J0,"div",h([o(ne,"padding","0px"),b,m]),h([T(i,p(rp,t,h([r1(Xe(d*c)),I0(Xe(f*c)),b,m,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),a1=function(e){return o(n1,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL},h([{aQ:e.aQ,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},cu=function(e){return e},qi=cu({fU:.31271,fY:.32902}),t1=$(function(e,r){var n=e,a=Ie(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Wo,r.ce,r.b7),u=l;return{bz:fn(u),ex:n,bG:$n(u),cK:0,bW:vn(u),c_:1,fU:-t,fY:-i,c6:-c}}),o1=function(e){return e},i1=function(e){return o1(1.2*o(Rn,2,e))},ft=function(e){return e},c1={$:0},l1=c1,lu=function(e){return e},Zi=function(e){var r=e;return r},u1=function(e){e:for(;;){if(yr(e.e2,Qe)&&yr(e.e3,Qe))return Pe;if(o(Wl,Re(e.e2),Re(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:kn(e.ei)};e=r;continue e}else{var n=O(Zi(e.e3)/xr),a=O(Zi(e.e2)/xr),t=Ie(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Wo,lu(1),e.b7),v=u;return{bz:a*fn(v),ex:!1,bG:a*$n(v),cK:n/a,bW:a*vn(v),c_:3,fU:i,fY:c,c6:l}}}},Qi=function(e){return u1({b7:e.b7,e2:e.ce,e3:Qe,ei:e.ei})},v1=function(e){var r=e;return r},uu=function(e){var r=p(Nl,1667,25e3,v1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return cu({fU:n,fY:a})},vu=function(e){return e},$1=uu(vu(12e3)),f1=uu(vu(5600)),s1=function(e){return{$:2,a:e}},m1=function(e){return s1(e)},d1=$(function(e,r){return{$:2,a:e,b:r}}),$u=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},p1=function(e){var r=e;return r.ex},b1=$u(gn.a),g1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return p(pr,n,T(P,P),r)}),h1=function(e){var r=e;return nr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},_1=K(function(e,r,n,a,t,i,c,l){var u=o(g1,p1,h([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,f=u.b;if(v.b){var m=ve(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,s=m.b,g=s.a,b=s.b,y=b.a,x=b.b,_=x.a;return o(d1,o(ee,h1,v),{be:o(Ne,d,g),bL:o(Ne,y,_),bM:o(Ne,t,i),bN:o(Ne,c,l)})}else return b1}else return $u({be:o(Ne,e,r),bL:o(Ne,n,a),bM:o(Ne,t,i),bN:o(Ne,c,l)})}),y1=S(function(e,r,n){return Aa(_1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),S1=function(e){var r=o(t1,V0(e.fB),{b7:f1,eH:e.fJ,ce:ft(8e4)}),n=Qi({b7:$1,ce:ft(2e4),ei:e.ei}),a=Qi({b7:qi,ce:ft(15e3),ei:kn(e.ei)}),t=p(y1,r,n,a);return a1({b1:m1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL,aQ:e.aQ,bE:i1(15),bK:t,b_:l1,b0:qi})},fu=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),x1=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),su=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),mu=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),C1=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),w1=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),L1=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Qo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(L1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(fu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(x1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(su,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(w1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(mu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(C1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Xo={$:0},P1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=Ta(c(u)),m=o(me,f.dR,e),d=o(ue,f.dO,r),s=o(me,f.dS,n),g=o(ue,f.dP,a),b=o(me,f.dT,t),y=o(ue,f.dQ,i),x=c,_=v;e=m,r=d,n=s,a=g,t=b,i=y,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),z1=S(function(e,r,n){var a=Ta(e(r));return Aa(P1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),st=$(function(e,r){var n=e,a=r;return I(a,n)<1}),du=function(e){return o(st,e.dO,e.dR)&&o(st,e.dP,e.dS)&&o(st,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Dn=function(e){var r=e;return r},pu=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Fr(n),c=Vr(n),l=Er(n),u=Fr(a),v=Vr(a),f=Er(a),m=Fr(t),d=Vr(t),s=Er(t);return du({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,d)),dQ:o(ue,l,o(ue,f,s)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,f,s))})},bu=K$,Te=function(e){return bu(Ha(e))},gu=function(e){var r=e;return r},Ia=function(e){return bu(gu(e))},T1=$(function(e,r){var n=e,a=r,t=o(ke,O(a.fU),o(ke,O(a.fY),O(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=be(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Hl}),M1=T1(lu(1)),hu=S(function(e,r,n){var a=o(za,r,n),t=o(za,e,r);return M1(o(Yo,a,t))}),k1=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Ia(p(hu,n,a,t));return A({o:i,bU:Te(n)},{o:i,bU:Te(a)},{o:i,bU:Te(t)})},D1=$(function(e,r){return{$:2,a:e,b:r}}),_u=D1({df:3,$7:0,dV:4}),B1=function(e){if(e.b){var r=e.a,n=e.b,a=_u(o(ee,k1,e)),t=p(z1,pu,r,n);return L(fu,t,e,a,0)}else return Xo},yu=function(){var e=Rr(1),r=Rr(1),n=Rr(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(pe,i,t,a),l=o(le,.5,e),u=p(pe,i,t,l),v=o(le,.5,r),f=p(pe,i,v,a),m=p(pe,i,v,l),d=o(le,.5,n),s=p(pe,d,t,a),g=p(pe,d,v,a),b=p(pe,d,t,l),y=p(pe,d,v,l);return Qo(B1(h([p(Be,c,g,s),p(Be,c,f,g),p(Be,u,b,y),p(Be,u,y,m),p(Be,s,g,y),p(Be,s,y,b),p(Be,c,m,f),p(Be,c,u,m),p(Be,c,s,b),p(Be,c,b,u),p(Be,f,y,g),p(Be,f,m,y)])))}(),Xn={$:0},A1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),U1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ia(p(hu,u,l,c)),f={o:v,bU:Te(u)},m={o:v,bU:Te(l)},d={o:v,bU:Te(c)};return o(B,f,o(B,m,o(B,d,n)))}),Ko=function(e){var r=e;return r.D},F1=V(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Ht=4294967295>>>32-Pn,It=av,V1=S(function(e,r,n){e:for(;;){var a=Ht&r>>>e,t=o(It,a,n);if(t.$){var v=t.a;return o(It,Ht&r,v)}else{var i=t.a,c=e-Pn,l=r,u=i;e=c,r=l,n=u;continue e}}}),E1=function(e){return e>>>5<<5},R1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,E1(n))>-1?re(o(It,Ht&e,i)):re(p(V1,a,e,t))}),ei=function(e){var r=e;return r.ah},mt=$(function(e,r){return o(R1,e,ei(r))}),j1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(F1,S(function(c,l,u){return A(c,l,u)}),o(mt,a,e),o(mt,t,e),o(mt,i,e))};return o(Lo,r,Ko(e))},N1=S(function(e,r,n){e:for(;;){var a=o(po,Ee,e),t=a.a,i=a.b;if(I(Tt(t),Ee)<0)return o(Xc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Zc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),ri=function(e){return e.b?p(N1,e,P,0):Jc},Y1=S(function(e,r,n){return e(r(n))}),G1=$(function(e,r){return!o(ul,o(Y1,Ls,e),r)}),W1=$(function(e,r){return p(pr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),H1=function(e){var r=e.a;return r},Su=$(function(e,r){var n=H1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(G1,a,r)?{D:r,ah:e}:{D:o(W1,a,r),ah:e}}),I1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Hn=I1({df:1,$7:3,dV:4}),va=$(function(e,r){var n=rn(r),a=rn(e);return T(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Xi=p(Gn,0,0,0),dt=Oe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(So,o(va,e,r),t);if(v.$){var m={o:Xi,bU:Te(r)},d={o:Xi,bU:Te(e)},s=u+1,g=u;return A(o(B,A(n,g,s),o(B,A(n,s,a),c)),o(B,m,o(B,d,l)),u+2)}else{var f=v.a;return A(o(B,A(n,f,a),c),l,u)}}),O1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),d=e(c),s=a+2,g=a+1,b=a,y=e,x=r,_=v,w=a+3,M=ye(dt,f,d,s,b,r,ye(dt,m,f,g,s,r,ye(dt,d,m,b,g,r,t)));e=y,r=x,n=_,a=w,t=M;continue e}else{var N=t,R=N.a,E=N.b;return T(R,Ve(E))}}),J1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),d=e(c),s=n+2,g=n+1,b=n,y=p(_n,o(va,d,f),s,p(_n,o(va,f,m),g,p(_n,o(va,m,d),b,t))),x=o(B,A(b,g,s),a),_=e,w=v,M=n+3,N=x,R=y;e=_,r=w,n=M,a=N,t=R;continue e}else return A(a,t,n)}),Mr=S(function(e,r,n){var a=j1(n),t=p(pr,U1(r),P,a),i=C(J1,r,a,0,P,Ml),c=i.a,l=i.b,u=i.c,v=C(O1,r,l,a,0,A(c,P,u)),f=v.a,m=v.b,d=jt(m)?t:ve(t,m);return p(A1,e,o(Su,ri(d),f),o(Hn,d,f))}),Ot=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Sr,0,jr(e)-1)),ah:ri(He(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},xu=function(e){switch(e.$){case 0:return Xn;case 1:var a=e.a,r=e.b,n=o(ee,Dn,r);return p(Mr,a,Ar,Ot(n));case 2:var a=e.a,r=e.b,n=o(ee,Dn,r);return p(Mr,a,Ar,Ot(n));case 3:var a=e.a,t=e.b;return p(Mr,a,Ar,t);case 4:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bU},t);case 8:return Xn;case 9:return Xn;default:return Xn}},Ki=xu(yu),Cu={$:0},z=Cu,ge=$(function(e,r){return{$:1,a:e,b:r}}),q1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Z1=1029,Q1=function(e){return{$:5,a:e}},wu=function(e){var r=e;return Q1(r)},X1=wu(Z1),K1=1028,e3=wu(K1),Me=S(function(e,r,n){return r===1?e?o(B,X1,n):o(B,e3,n):n}),Lu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pt=V(function(e,r,n,a){return o(ge,r,K(function(t,i,c,l,u,v,f,m){return C(ae,p(Me,l,a,m),Lu,q1,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),ni={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Pu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=V(function(e,r,n,a){return o(ge,r,K(function(t,i,c,l,u,v,f,m){return C(ae,p(Me,l,a,m),Pu,ni,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),zu=$(function(e,r){return{$:3,a:e,b:r}}),r3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},Tu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},n3=V(function(e,r,n,a){return o(zu,n,K(function(t,i,c,l,u,v,f,m){return C(ae,m,Tu,r3,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),ai={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},In=function(e){var r=e;return r},Oa=ef,lr=he(function(e,r,n,a,t){return o(ge,n,K(function(i,c,l,u,v,f,m,d){return C(ae,p(Me,u,t,d),Pu,ai,a,{aO:o(Oa,In(r),e),b:l,c,d:f,e:i,f:v})}))}),a3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bT",sceneProperties:"e"}},t3=he(function(e,r,n,a,t){return o(zu,a,K(function(i,c,l,u,v,f,m,d){return C(ae,d,Tu,a3,t,{aO:o(Oa,In(r),e),b:l,c,bT:n,d:f,e:i,f:v})}))}),Mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},ku={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Kn=V(function(e,r,n,a){return o(ge,r,K(function(t,i,c,l,u,v,f,m){var d=f.a,s=f.b;return C(ae,p(Me,l,a,m),ku,Mu,n,{P:s,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Bu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},o3=Oe(function(e,r,n,a,t,i){return o(ge,a,K(function(c,l,u,v,f,m,d,s){var g=d.a,b=d.b;return C(ae,p(Me,v,i,s),Bu,Du,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f})}))}),Au={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aX",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},i3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return o(ge,u,K(function(m,d,s,g,b,y,x,_){var w=x.a,M=x.b;return C(ae,p(Me,g,f,_),Bu,Au,v,{b5:e,b8:r,b9:i,ca:a,P:M,be:w.be,bL:w.bL,bM:w.bM,bN:w.bN,cv:t,b:s,c:d,aX:c,d:y,cS:n,e:m,a0:l,f:b})}))}}}}}}}}}}},Uu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},ea=Oe(function(e,r,n,a,t,i){return o(ge,a,K(function(c,l,u,v,f,m,d,s){var g=d.a,b=d.b;return C(ae,p(Me,v,i,s),ku,Uu,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f})}))}),c3=function(e){return{$:0,a:e}},ec=$(function(e,r){return{$:1,a:e,b:r}}),Cn=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),l3=function(e){return L(un,vn(e),$n(e),fn(e),1)},ti=L(un,0,0,0,0),$a=$(function(e,r){if(r.$){var a=r.a.C;return T(a,ti)}else{var n=r.a;return T(e,l3(n))}}),Fu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(ec,T(t,ti),o(Cn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ec,o($a,t,e),o(Cn,t,r))}else{var a=n.a.a;return n.b.a,c3(a)}}),u3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ra=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),v3=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$3=function(e){return o(Ue,e,1)},Jt=o(Ue,0,0),qr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Jt)}else{var n=r.a;return T(e,$3(n))}}),Vu=V(function(e,r,n,a){var t=L(v3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(ra,T(u,ti),o(qr,u,r),o(qr,u,n),o(Cn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(ra,o($a,u,e),T(u,Jt),o(qr,u,n),o(Cn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(ra,o($a,u,e),o(qr,u,r),T(u,Jt),o(Cn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(ra,o($a,u,e),o(qr,u,r),o(qr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(u3,i,c,l)}}),f3={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},bt=he(function(e,r,n,a,t){return o(ge,n,K(function(i,c,l,u,v,f,m,d){return C(ae,p(Me,u,t,d),Lu,f3,a,{b2:In(r),bC:e,b:l,c,d:f,e:i,f:v})}))}),Eu={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},s3=V(function(e,r,n,a){return o(ge,r,K(function(t,i,c,l,u,v,f,m){var d=f.a,s=f.b;return C(ae,p(Me,l,a,m),Eu,Du,n,{P:s,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),m3=Qt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,K(function(v,f,m,d,s,g,b,y){var x=b.a,_=b.b;return C(ae,p(Me,d,u,y),Eu,Au,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:f,aX:e,d:g,cS:n,e:v,a0:0,f:s})}))}),Bn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),d3=function(e){var r=e;return p(Bn,r.dR,r.dO,.5)},p3=function(e){var r=e;return p(Bn,r.dS,r.dP,.5)},b3=function(e){var r=e;return p(Bn,r.dT,r.dQ,.5)},g3=function(e){return p(pe,d3(e),p3(e),b3(e))},G=function(e){var r=eu(e),n=r.a,a=r.b,t=r.c;return{ey:Ha(g3(e)),eS:n/2,eT:a/2,eU:t/2}},oi=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(pt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(pt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(pt,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(n3,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(bt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(bt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(bt,l,v,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return C(lr,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return C(lr,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(t3,u,v,i,G(t),c)}}case 2:e.a;var f=e.b,R=e.c,m=o(Fu,f,R);if(m.$){var g=m.a,b=g.a;g.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,s=r.d;return L(s3,b,G(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return ye(o3,b,x,_,G(t),c,s);case 8:return z;case 9:return z;default:return z}}else{var d=m.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,s=r.d;return L(Kn,d,G(t),c,s);case 3:return z;case 4:var t=r.a,c=r.c,s=r.d;return L(Kn,d,G(t),c,s);case 5:return z;case 6:var t=r.a,c=r.c,s=r.d;return L(Kn,d,G(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return L(Kn,d,G(t),c,s);case 8:return z;case 9:return z;default:return z}}default:e.a;var w=e.b,M=e.c,N=e.d,R=e.e,E=L(Vu,w,M,N,R);if(E.$){var Z=E.a,X=Z.a,ce=Z.b,fe=E.b,ie=fe.a,de=fe.b,De=E.c,Ce=De.a,br=De.b,gr=E.d,x=gr.a,_=gr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Xu(m3,X,ce,ie,de,Ce,br,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return i3(X)(ce)(ie)(de)(Ce)(br)(x)(_)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=E.a,Y=E.b,U=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return ye(ea,j,Y,U,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return ye(ea,j,Y,U,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ye(ea,j,Y,U,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(ea,j,Y,U,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),gt=function(e){var r=e;return r.fU},ht=function(e){var r=e;return r.fY},_t=function(e){var r=e;return r.c6},h3=function(e){var r=e,n=_t(r.c7),a=ht(r.c7),t=gt(r.c7),i=_t(r.c5),c=ht(r.c5),l=gt(r.c5),u=_t(r.c4),v=ht(r.c4),f=gt(r.c4);return f*c*n+v*i*t+u*l*a-u*c*t-v*l*n-f*i*a>0},_3=function(e){var r=Ha(ln(e)),n=Ie(Ir(e)),a=Ie(Hr(e)),t=Ie(Wr(e));return{dp:h3(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Zr=$(function(e,r){return{$:5,a:e,b:r}}),Ru=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Il,a,e);return o(Zr,i,t);case 1:return o(Zr,e,n);case 3:return o(Zr,e,n);case 2:return o(Zr,e,n);default:return o(Zr,e,n)}}),ju=$(function(e,r){return o(Ru,_3(e),r)}),Ja=function(e){return{$:2,a:e}},y3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),S3=af,x3=nf,rc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,d=e.c,s=x3(a),g=s.fU,b=s.fY,y=s.c6,x=s.em,_=S3({em:x,fU:g*f,fY:b*m,c6:y*d});return Aa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},qt=$(function(e,r){switch(r.$){case 0:return Cu;case 5:var n=r.a,a=r.b;return o(Zr,n,o(qt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(y3,e,t),o(rc,e,i));case 3:return r;case 2:var i=r.a;return Ja(o(rc,e,i));default:var c=r.a;return au(o(ee,qt(e),c))}}),ii=$(function(e,r){var n=r;return o(qt,e,n)}),ci={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Nu=7683,Yu=7682,C3=p(Oo,{cp:0,cO:0,c3:15},{a9:xe,bm:an,bu:xe,bv:Nu},{a9:xe,bm:an,bu:xe,bv:Yu}),w3=p(Oo,{cp:0,cO:0,c3:15},{a9:xe,bm:an,bu:xe,bv:Yu},{a9:xe,bm:an,bu:xe,bv:Nu}),li=$(function(e,r){return e?o(B,w3,r):o(B,C3,r)}),L3={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},P3=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return C(ae,o(li,i,v),L3,ci,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},Ma=function(e){var r=P3(e);if(r.$)return z;var n=r.a;return Ja(n)},z3=V(function(e,r,n,a){var t=o(oi,n,yu),i=function(){var f=T(e,r);return f.a?f.b?Wn(h([t,Ma(Ki)])):t:f.b?Ma(Ki):z}(),c=Bo(a),l=c.a,u=c.b,v=c.c;return o(ju,Do(a),o(ii,A(l,u,v),i))}),T3=$(function(e,r){return L(z3,!0,!0,e,r)}),Gu=$(function(e,r){return{$:0,a:e,b:r}}),M3=function(e){var r=wo(e),n=r.cN,a=r.cd,t=r.b6;return p(Gn,n,a,t)},k3=function(e){return o(Gu,0,Yt(M3(e)))},D3=function(e){var r=e;return r.k},wn=function(e){var r=e;return wr(r)},B3=$(function(e,r){var n=r;return n/e}),nc=function(e){var r=e;return{fU:wr(r),fY:Nr(r)}},A3=$(function(e,r){var n=e.bU,a=e.o;return o(B,{o:Ia(a),bU:Te(n)},r)}),U3=Ba(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=fn(l.bU),f=$n(l.bU),m=vn(l.bU),d=o(ua,e,m),s=o(ke,r,m),g=o(ua,n,f),b=o(ke,a,f),y=o(ua,t,v),x=o(ke,i,v),_=u;e=d,r=s,n=g,a=b,t=y,i=x,c=_;continue e}else return du({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Wu=$(function(e,r){var n=fn(e.bU),a=$n(e.bU),t=vn(e.bU);return Xt(U3,t,t,a,a,n,n,r)}),F3=function(e){var r=p(jc,A3,P,ei(e));if(r.b){var n=r.a,a=r.b,t=o(Hn,r,Ko(e)),i=o(Wu,n,a);return L(su,i,e,t,0)}else return Xo},ac=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),ka=function(e){var r=e;return Nr(r)},Zt=function(e){return Cr(2*xr*e)},V3=Ar,tc=V3({cB:Or,c4:Vo,c5:Ro}),Hu=function(){var e=72,r=o(B3,e,Zt(1)),n=Rr(1),a=Kr(jo),t=Kr(El),i=Rr(1),c=o(le,.5,i),l=p(pe,Qe,Qe,c),u=o(le,-.5,i),v=p(pe,Qe,Qe,u),f=function(s){var g=o(le,s,r),b=Kr(o(ac,tc,nc(g))),y=o(le,wn(g),n),x=o(le,ka(g),n),_=p(pe,y,x,c),w=p(pe,y,x,u),M=o(xa,e,s+1),N=o(le,M,r),R=Kr(o(ac,tc,nc(N))),E=o(le,wn(N),n),j=o(le,ka(N),n),Y=p(pe,E,j,u),U=p(pe,E,j,c);return h([A({o:t,bU:v},{o:t,bU:Y},{o:t,bU:w}),A({o:b,bU:w},{o:R,bU:Y},{o:R,bU:U}),A({o:b,bU:w},{o:R,bU:U},{o:b,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:U})])},m=o(ee,f,o(Sr,0,e-1)),d=Ot(He(m));return Qo(F3(d))}(),oc=xu(Hu),E3=function(e){var r=e;return r.eH},R3=function(e){var r=e;return r.cB},j3=function(e){var r=E3(e),n=Go(r),a=n.a,t=n.b;return mr({cB:R3(e),c4:a,c5:t,c7:r})},N3=function(e){var r=e;return r.e9},Y3=function(e){var r=e;return r.fu},G3=V(function(e,r,n,a){var t=j3(D3(a)),i=o(oi,n,Hu),c=function(){var m=T(e,r);return m.a?m.b?Wn(h([i,Ma(oc)])):i:m.b?Ma(oc):z}(),l=Y3(a),u=l,v=N3(a),f=v;return o(ju,t,o(ii,A(u,u,f),c))}),W3=$(function(e,r){return L(G3,!0,!0,e,r)}),ic={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},cc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},hn=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=rn(n),c=rn(a),l=rn(t);return nr({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},na=_u(h([A({cZ:0},{cZ:1},{cZ:2})])),H3=$(function(e,r){var n=pu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(ge,a,K(function(_,w,M,N,R,E,j,Y){return C(ae,p(Me,N,0,Y),ic,ni,na,{aw:t,b:M,c:w,d:E,e:_,br:hn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(ge,a,K(function(_,w,M,N,R,E,j,Y){return C(ae,p(Me,N,0,Y),ic,ai,na,{aO:o(Oa,In(c),i),b:M,c:w,d:E,e:_,br:hn(r),f:R})}));case 2:e.a;var l=e.b,s=e.c,u=o(Fu,l,s);if(u.$)return z;var v=u.a;return o(ge,a,K(function(_,w,M,N,R,E,j,Y){var U=j.a,Z=j.b;return C(ae,p(Me,N,0,Y),cc,Mu,na,{P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cq:v,b:M,c:w,d:E,e:_,br:hn(r),f:R})}));default:e.a;var f=e.b,m=e.c,d=e.d,s=e.e,g=L(Vu,f,m,d,s);if(g.$)return z;var b=g.a,y=g.b,x=g.c;return o(ge,a,K(function(_,w,M,N,R,E,j,Y){var U=j.a,Z=j.b;return C(ae,p(Me,N,0,Y),cc,Uu,na,{b4:b,P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cu:x,b:M,c:w,d:E,cR:y,e:_,br:hn(r),f:R})}))}}),I3=function(){var e=h([{a$:o(Ue,0,1)},{a$:o(Ue,1,1)},{a$:o(Ue,2,1)},{a$:o(Ue,0,-1)},{a$:o(Ue,1,-1)},{a$:o(Ue,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Hn,e,r)}(),O3={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},lc=function(e){return Ja(K(function(r,n,a,t,i,c,l,u){return C(ae,o(li,t,u),O3,ci,I3,{b:a,c:n,d:c,e:r,bZ:l,br:hn(e),f:i})}))},J3=V(function(e,r,n,a){var t=o(H3,n,a),i=T(e,r);return i.a?i.b?Wn(h([t,lc(a)])):t:i.b?lc(a):z}),q3=$(function(e,r){return L(J3,!0,!0,e,r)}),Z3=$(function(e,r){var n=Er(r),a=Er(e),t=Vr(r),i=Vr(e),c=Fr(r),l=Fr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),Q3=function(e){var r=Ao(e),n=r.a,a=r.b;return o(Z3,n,a)},uc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},X3=$(function(e,r){return{$:1,a:e,b:r}}),K3=X3({df:2,$7:0,dV:1}),vc=K3(h([T({dw:0},{dw:1})])),eb=$(function(e,r){var n=Q3(r),a=G(n),t=Ao(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(ge,a,K(function(v,f,m,d,s,g,b,y){return C(ae,y,uc,ni,vc,{aw:l,du:Te(c),dv:Te(i),b:m,c:f,d:g,e:v,f:s})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(ge,a,K(function(f,m,d,s,g,b,y,x){return C(ae,x,uc,ai,vc,{aO:o(Oa,In(u),l),du:Te(c),dv:Te(i),b:d,c:m,d:b,e:f,f:g})}));case 2:return z;default:return z}}),rb=$(function(e,r){return o(eb,e,r)}),aa=function(e){return Cr(xr*(e/180))},$c=$(function(e,r){var n=e,a=r;return n/a}),nb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(yr(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,t=m;continue e}}),fc=$(function(e,r){return e<1?P:C(nb,0,e,e,r,P)}),ab=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Ia(a),bU:Te(n),L:o(Ue,c,l)},r)}),tb=function(e){var r=p(jc,ab,P,ei(e));if(r.b){var n=r.a,a=r.b,t=o(Hn,r,Ko(e)),i=o(Wu,n,a);return L(mu,i,e,t,0)}else return Xo},Iu=$(function(e,r){var n=e,a=r,t=wr(a);return{fU:t*wr(n),fY:t*Nr(n),c6:Nr(a)}}),ob=function(){var e=Rr(1),r=72,n=o(Sr,0,r-1),a=o(fc,r,o(Bn,Qe,Zt(1))),t=so(r/2),i=o(Sr,0,t-1),c=o(fc,t,o(Bn,aa(90),aa(-90))),l=ri(He(o(ee,function(f){return o(ee,function(m){return{o:Kr(o(Iu,f,m)),bU:p(pe,o(le,wn(m)*wn(f),e),o(le,wn(m)*ka(f),e),o(le,ka(m),e)),L:T(o($c,f,Zt(1)),o($c,o(xn,aa(90),m),aa(180)))}},c)},a))),u=$(function(f,m){return f*(t+1)+m}),v=He(o(ee,function(f){return He(o(ee,function(m){var d=o(u,f+1,m),s=o(u,f,m),g=o(u,f+1,m+1),b=o(u,f,m+1);return h([A(b,g,d),A(b,d,s)])},i))},n));return Qo(tb(o(Su,l,v)))}(),Da=72,ta=2*Da,ib=$(function(e,r){e:for(;;){var n=ta+1,a=o(xa,ta,2*e+3),t=o(xa,ta,2*e+2),i=2*e+1,c=2*e,l=ta,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),cb=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),lb=$(function(e,r){e:for(;;){var n=p(cb,0,2*xr,e/Da),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ub=function(){var e=o(lb,Da-1,h([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(ib,Da-1,P);return o(Hn,e,r)}(),vb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},sc=function(e){return Ja(K(function(r,n,a,t,i,c,l,u){return C(ae,o(li,!0,u),vb,ci,ub,{aw:p(Gn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},$b=function(e){var r=gu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},fb=$(function(e,r){return o(Ru,$b(e),r)}),sb=V(function(e,r,n,a){var t=o(oi,n,ob),i=function(){var u=T(e,r);return u.a?u.b?Wn(h([t,sc()])):t:u.b?sc():z}(),c=Fo(a),l=c;return o(fb,o(za,Or,Uo(a)),o(ii,A(l,l,l),i))}),mb=$(function(e,r){return L(sb,!0,!0,e,r)}),db=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),pb=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),bb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Gu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(db,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(jl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(pb,n,a,t,i,c)}},gb=bb,Ou=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(T3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(q3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(mb,gb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(W3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(rb,k3(c),l)]);default:var u=e.a;return o(Na,Ou,u)}},hb=function(e){return o(Na,Ou,e)},_b=$(function(e,r){return S1({aI:U0(e.es),ev:e.ev,aJ:F0(.5),cb:e.cb,aL:T(Ri(Xe(e.cT.fS)),Ri(Xe(e.cT.eW))),aQ:hb(r),fB:!0,fJ:o(Iu,Cr(e.fI),Cr(e.fK)),ei:No})}),mc=L(En,255/255,255/255,255/255,1),yb=$(function(e,r){return o(_b,{es:mc,ev:A0({dj:{fU:o(ct,"camera x",e),fY:o(ct,"camera y",e),c6:o(ct,"camera z",e)},aS:{fU:0,fY:0,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Ge(135),fK:-Ge(45)},h([o(Mn,-4,o(Gl,Yl(mc),A(40,40,1))),o(Mn,-.5,d0(e))]))}),Sb=L(Ld,yb,Bd,Dd,Pd);const xb={Main:{init:Sb(o(D,function(e){return Ae({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(f){return o(D,function(m){return Ae({eo:m,eB:f,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Q))},o(k,"control",Q))},o(k,"down",Q))},o(k,"downs",_a(Tn)))},o(k,"left",Q))},o(k,"pressedKeys",_a(Tn)))},o(k,"right",Q))},o(k,"shift",Q))},o(k,"up",Q))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ae({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Q))},o(k,"isDown",Q))},o(k,"move",Q))},o(k,"rightDown",Q))},o(k,"rightUp",Q))},o(k,"up",Q))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Ae({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Ae({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Cb=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),a=s=>["ShiftLeft","ShiftRight"].includes(s.code),t=s=>s.code=="ArrowLeft",i=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,v=s=>s.button==2;function f(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function m(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(F.keyboard.downs.push(s.code),F.keyboard.pressedKeys.push(s.code),r(s)&&(F.keyboard.control=!0),n(s)&&(F.keyboard.alt=!0),a(s)&&(F.keyboard.shift=!0),t(s)&&(F.keyboard.left=!0),i(s)&&(F.keyboard.right=!0),c(s)&&(F.keyboard.up=!0),l(s)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",s=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=s.code),r(s)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(s)&&(F.keyboard.alt=!1),a(s)&&(F.keyboard.shift=!1),t(s)&&(F.keyboard.left=!1),i(s)&&(F.keyboard.right=!1),c(s)&&(F.keyboard.up=!1),l(s)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{F.pointer.x=-.5*F.screen.width+s.pageX,F.pointer.y=.5*F.screen.height-s.pageY,u(s)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(s)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+s.pageX,F.pointer.y=.5*F.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(s)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(s)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{F.wheel.deltaX=s.deltaX,F.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{f(F)}),window.addEventListener("focus",s=>{f(F)}),window.addEventListener("visibilitychange",s=>{f(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(s){const g=s/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),m(F)),window.requestAnimationFrame(d)}},wb=()=>{yt("pointerdown"),yt("wheel"),yt("keydown")},yt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Lb=xb.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});wb();Cb(Lb);
