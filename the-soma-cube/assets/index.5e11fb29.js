(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function gr(e,r,n){return n.a=e,n.f=r,n}function $(e){return gr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return gr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return gr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Le(e){return gr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ve(e){return gr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ht(e){return gr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function $e(e){return gr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function gt(e){return gr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function x(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function pe(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function li(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ua(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Vl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var jl=[];function Wl(e){return e.length}var Gl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Nl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),Hl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Yl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Il()),r});function Il(e){return"<internals>"}function qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function zr(e,r){for(var n,a=[],t=Ja(e,r,0,a);t&&(n=a.pop());t=Ja(n.a,n.b,0,a));return t}function Ja(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&qr(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$<0&&(e=xo(e),r=xo(r));for(var t in e)if(!Ja(e[t],r[t],n+1,a))return!1;return!0}$(zr);$(function(e,r){return!zr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Ul=$(function(e,r){var n=J(e,r);return n<0?Fi:n?k$:Bi}),wn=0;function M(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(oe);function oe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ke(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ke(e.a,r);return n}var P={$:0};function Ke(e,r){return{$:1,a:e,b:r}}var Jl=$(Ke);function b(e){for(var r=P,n=e.length;n--;)r=Ke(e[n],r);return r}function va(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ol=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});Le(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(x(e,r.a,n.a,a.a,t.a));return b(i)});Ve(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(w(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(va(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return b(va(r).sort(function(n,a){var t=o(e,n,a);return t===Bi?0:t===Fi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var ql=$(Math.pow);$(function(e,r){return r%e});var Zl=$(function(e,r){var n=r%e;return e===0?qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Xl=Math.PI,Kl=Math.cos,Ql=Math.sin,eu=Math.tan,ru=Math.atan;$(Math.atan2);function nu(e){return e}function au(e){return e===1/0||e===-1/0}var tu=Math.ceil,ou=Math.floor,iu=Math.round,cu=Math.sqrt,$o=Math.log,lu=isNaN;function uu(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var vu=$(function(e,r){return e+r});function $u(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?M(e[0]+e[1],e.slice(2)):M(e[0],e.slice(1)))}$(function(e,r){return e+r});function fu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function su(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var mu=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),du=$(function(e,r){return r.split(e)}),pu=$(function(e,r){return r.join(e)}),bu=y(function(e,r,n){return n.slice(e,r)});function hu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var gu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),_u=$(function(e,r){return r.indexOf(e)>-1}),Cu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var yu=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function ui(e){return e+""}function Lu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function wu(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function Su(e){return va(e).join("")}function xu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Pu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Tu(e){return{$:0,a:e}}function _t(e){return{$:2,b:e}}var Mu=_t(function(e){return typeof e=="boolean"?ie(e):Je("a BOOL",e)}),zu=_t(function(e){return typeof e=="number"?ie(e):Je("a FLOAT",e)}),ku=_t(function(e){return typeof e=="string"?ie(e):e instanceof String?ie(e+""):Je("a STRING",e)});function Du(e){return{$:3,b:e}}var Au=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Bu=$(function(e,r){return{$:10,b:r,h:e}}),Fu=$(function(e,r){return _r(e,[r])}),Ru=y(function(e,r,n){return _r(e,[r,n])});R(function(e,r,n,a){return _r(e,[r,n,a])});Le(function(e,r,n,a,t){return _r(e,[r,n,a,t])});Ve(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});ht(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});$e(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});gt(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Fe(e,n)}catch(a){return be(o(Dt,"This is not valid JSON! "+a.message,r))}});var vi=$(function(e,r){return Fe(e,r)});function Fe(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ie(e.c):Je("null",r);case 3:return zn(r)?fo(e.b,r,b):Je("a LIST",r);case 4:return zn(r)?fo(e.b,r,Eu):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var v=Fe(e.b,r[n]);return We(v)?v:be(o(Po,n,v.a));case 7:var a=e.e;if(!zn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Fe(e.b,r[a]);return We(v)?v:be(o(Ri,a,v.a));case 8:if(typeof r!="object"||r===null||zn(r))return Je("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Fe(e.b,r[i]);if(!We(v))return be(o(Po,i,v.a));t=Ke(M(i,v.a),t)}return ie(Me(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Fe(l[u],r);if(!We(v))return v;c=c(v.a)}return ie(c);case 10:var v=Fe(e.b,r);return We(v)?Fe(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Fe(m.a,r);if(We(v))return v;s=Ke(v.a,s)}return be(D$(Me(s)));case 1:return be(o(Dt,e.a,r));case 0:return ie(e.a)}}function fo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Fe(e,r[i]);if(!We(c))return be(o(Ri,i,c.a));t[i]=c.a}return ie(n(t))}function zn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Eu(e){return o(q$,e.length,function(r){return e[r]})}function Je(e,r){return be(o(Dt,"Expecting "+e,r))}function Wr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wr(e.b,r.b);case 6:return e.d===r.d&&Wr(e.b,r.b);case 7:return e.e===r.e&&Wr(e.b,r.b);case 9:return e.f===r.f&&so(e.g,r.g);case 10:return e.h===r.h&&Wr(e.b,r.b);case 11:return so(e.g,r.g)}}function so(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wr(e[a],r[a]))return!1;return!0}var Vu=$(function(e,r){return JSON.stringify(r,null,e)+""});function $i(e){return e}y(function(e,r,n){return n[e]=r,n});function Ar(e){return{$:0,a:e}}function ju(e){return{$:1,a:e}}function ur(e){return{$:2,b:e,c:null}}var Oa=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Wu(e){return{$:5,b:e}}var Gu=0;function Ct(e){var r={$:0,e:Gu++,f:e,g:null,h:[]};return yt(r),r}function fi(e){return ur(function(r){r(Ar(Ct(e)))})}function si(e,r){e.h.push(r),yt(e)}var Nu=$(function(e,r){return ur(function(n){si(e,r),n(Ar(wn))})}),La=!1,mo=[];function yt(e){if(mo.push(e),!La){for(La=!0;e=mo.shift();)Hu(e);La=!1}}function Hu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Lt(r,a,e.e1,e.fS,e.fL,function(){return function(){}})});function Lt(e,r,n,a,t,i){var c=o(vi,e,r?r.flags:void 0);We(c)||qr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Yu(l,d);function d(f,g){var h=o(a,f,v);s(v=h.a,g),bo(l,h.b,t(v))}return bo(l,u.b,t(v)),m?{ports:m}:{}}var Ze={};function Yu(e,r){var n;for(var a in Ze){var t=Ze[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Uu(t,r)}return n}function Iu(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Uu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Oa,l,Wu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?x(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ct(o(Oa,l,e.b))}var Ju=$(function(e,r){return ur(function(n){e.g(r),n(Ar(wn))})});$(function(e,r){return o(Nu,e.h,{$:0,a:r})});function mi(e){return function(r){return{$:1,k:e,l:r}}}function Ou(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var po=[],wa=!1;function bo(e,r,n){if(po.push({p:e,q:r,r:n}),!wa){wa=!0;for(var a;a=po.shift();)qu(a.p,a.q,a.r);wa=!1}}function qu(e,r,n){var a={};In(!0,r,a,null),In(!1,n,a,null);for(var t in e)si(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function In(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Zu(e,t,a,r.l);n[t]=Xu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)In(e,c.a,n,a);return;case 3:In(e,r.o,n,{s:r.n,t:a});return}}function Zu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ze[r].e:Ze[r].f;return o(i,t,a)}function Xu(e,r,n){return n=n||{i:P,j:P},e?n.i=Ke(r,n.i):n.j=Ke(r,n.j),n}function Ku(e){Ze[e]&&qr(3)}$(function(e,r){return r});function Qu(e,r){return Ku(e),Ze[e]={f:ev,u:r,a:rv},mi(e)}var ev=$(function(e,r){return function(n){return e(r(n))}});function rv(e,r){var n=P,a=Ze[e].u,t=Ar(null);Ze[e].b=t,Ze[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(vi,a,c);We(l)||qr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Un,or=typeof document<"u"?document:{};function wt(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(dr(e,function(){}),t),{}});function qa(e){return{$:0,a:e}}var di=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:St(n),e:t,f:e,b:i}})}),Cr=di(void 0),nv=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:St(n),e:t,f:e,b:i}})}),av=nv(void 0);function tv(e,r,n,a){return{$:3,d:St(e),g:r,h:n,i:a}}var ov=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return yr([e,r],function(){return e(r)})});y(function(e,r,n){return yr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return yr([e,r,n,a],function(){return p(e,r,n,a)})});Le(function(e,r,n,a,t){return yr([e,r,n,a,t],function(){return x(e,r,n,a,t)})});Ve(function(e,r,n,a,t,i){return yr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});ht(function(e,r,n,a,t,i,c){return yr([e,r,n,a,t,i,c],function(){return pe(e,r,n,a,t,i,c)})});$e(function(e,r,n,a,t,i,c,l){return yr([e,r,n,a,t,i,c,l],function(){return li(e,r,n,a,t,i,c,l)})});gt(function(e,r,n,a,t,i,c,l,u){return yr([e,r,n,a,t,i,c,l,u],function(){return ua(e,r,n,a,t,i,c,l,u)})});var pi=$(function(e,r){return{$:"a0",n:e,o:r}}),iv=$(function(e,r){return{$:"a1",n:e,o:r}}),bi=$(function(e,r){return{$:"a2",n:e,o:r}}),Lr=$(function(e,r){return{$:"a3",n:e,o:r}}),cv=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function lv(e){return e=="script"?"p":e}function uv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(pi,r.n,vv(e,r.o)):r});function vv(e,r){var n=Et(r);return{$:r.$,a:n?p(Z$,n<3?$v:fv,xe(e),r.a):o(Zn,e,r.a)}}var $v=$(function(e,r){return M(e(r.a),r.b)}),fv=$(function(e,r){return{al:e(r.al),cV:r.cV,cJ:r.cJ}});function St(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ho(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ho(c,t,i):c[t]=i}return r}function ho(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function dr(e,r){var n=e.$;if(n===5)return dr(e.k||(e.k=e.m()),r);if(n===0)return or.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=dr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Za(c,r,e.d),c}var c=e.f?or.createElementNS(e.f,e.c):or.createElement(e.c);Un&&e.c=="a"&&c.addEventListener("click",Un(c)),Za(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)wt(c,dr(n===1?l[u]:l[u].b,r));return c}function Za(e,r,n){for(var a in n){var t=n[a];a==="a1"?sv(e,t):a==="a0"?pv(e,r,t):a==="a3"?mv(e,t):a==="a4"?dv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function sv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function mv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function dv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function pv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=bv(r,i),e.addEventListener(t,c,xt&&{passive:Et(i)<2}),a[t]=c}}var xt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xt=!0}}))}catch{}function bv(e,r){function n(a){var t=n.q,i=Fe(t.a,a);if(!!We(i)){for(var c=Et(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cV,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cJ)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function hv(e,r){return e.$==r.$&&Wr(e.a,r.a)}function hi(e,r){var n=[];return Ge(e,r,n,0),n}function se(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ge(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=xv(r),i=1;else{se(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ge(e.k,r.k,s,0),s.length>0&&se(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var h=r.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;if(f&&m.length!==d.length){se(n,0,a,r);return}(f?!gv(m,d):m!==d)&&se(n,2,a,d),Ge(g,h,n,a+1);return;case 0:e.a!==r.a&&se(n,3,a,r.a);return;case 1:go(e,r,n,a,_v);return;case 2:go(e,r,n,a,Cv);return;case 3:if(e.h!==r.h){se(n,0,a,r);return}var C=Pt(e.d,r.d);C&&se(n,4,a,C);var L=r.i(e.g,r.g);L&&se(n,5,a,L);return}}}function gv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function go(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){se(n,0,a,r);return}var i=Pt(e.d,r.d);i&&se(n,4,a,i),t(e,r,n,a)}function Pt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Pt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&hv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function _v(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?se(n,6,a,{v:l,i:c-l}):c<l&&se(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ge(s,i[v],n,++a),a+=s.b||0}}function Cv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],h=u[d],C=g.a,L=h.a,_=g.b,S=h.b,A=void 0,U=void 0;if(C===L){f++,Ge(_,S,t,f),f+=_.b||0,m++,d++;continue}var H=l[m+1],W=u[d+1];if(H){var Y=H.a,I=H.b;U=L===Y}if(W){var j=W.a,Z=W.b;A=C===j}if(A&&U){f++,Ge(_,Z,t,f),tn(i,t,C,S,d,c),f+=_.b||0,f++,on(i,t,C,I,f),f+=I.b||0,m+=2,d+=2;continue}if(A){f++,tn(i,t,L,S,d,c),Ge(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(U){f++,on(i,t,C,_,f),f+=_.b||0,f++,Ge(I,S,t,f),f+=I.b||0,m+=2,d+=1;continue}if(H&&Y===j){f++,on(i,t,C,_,f),tn(i,t,L,S,d,c),f+=_.b||0,f++,Ge(I,Z,t,f),f+=I.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;on(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var O=O||[],h=u[d];tn(i,t,h.a,h.b,void 0,O),d++}(t.length>0||c.length>0||O)&&se(n,8,a,{w:t,x:c,y:O})}var gi="_elmW6BL";function tn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ge(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}tn(e,r,n+gi,a,t,i)}function on(e,r,n,a,t){var i=e[n];if(!i){var c=se(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ge(a,i.z,l,t),se(r,9,t,{w:l,A:i});return}on(e,r,n+gi,a,t)}function _i(e,r,n,a){cn(e,r,n,0,0,r.b,a)}function cn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)_i(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&cn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&cn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return cn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,h=e.childNodes,C=0;C<g.length;C++){t++;var L=d===1?g[C]:g[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=cn(h[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Ci(e,r,n,a){return n.length===0?e:(_i(e,r,n,a),Jn(e,n))}function Jn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=yv(t,a);t===e&&(e=i)}return e}function yv(e,r){switch(r.$){case 0:return Lv(e,r.s,r.u);case 4:return Za(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Jn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(dr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Jn(e,i.w),e;case 8:return wv(e,r);case 5:return r.s(e);default:qr(10)}}function Lv(e,r,n){var a=e.parentNode,t=dr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function wv(e,r){var n=r.s,a=Sv(n.y,r);e=Jn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:dr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&wt(e,a),e}function Sv(e,r){if(!!e){for(var n=or.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;wt(n,i.c===2?i.s:dr(i.z,r.u))}return n}}function Tt(e){if(e.nodeType===3)return qa(e.textContent);if(e.nodeType!==1)return qa("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ke(o(Lr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=Ke(Tt(v[a]),u);return p(Cr,l,r,u)}function xv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Pv=R(function(e,r,n,a){return Lt(r,a,e.e1,e.fS,e.fL,function(t,i){var c=e.fU,l=a.node,u=Tt(l);return yi(i,function(v){var s=c(v),m=hi(u,s);l=Ci(l,u,m,t),u=s})})});R(function(e,r,n,a){return Lt(r,a,e.e1,e.fS,e.fL,function(t,i){var c=e.cS&&e.cS(t),l=e.fU,u=or.title,v=or.body,s=Tt(v);return yi(i,function(m){Un=c;var d=l(m),f=Cr("body")(P)(d.eu),g=hi(s,f);v=Ci(v,s,g,t),s=f,Un=0,u!==d.fP&&(or.title=u=d.fP)})})});var On=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function yi(e,r){r(e);var n=0;function a(){n=n===1?0:(On(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&On(a),n=2)}}$(function(e,r){return o(Wt,Vt,ur(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Wt,Vt,ur(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Wt,Vt,ur(function(){history.replaceState({},"",r),e()}))});var Tv={addEventListener:function(){},removeEventListener:function(){}},Mv=typeof window<"u"?window:Tv;y(function(e,r,n){return fi(ur(function(a){function t(i){Ct(n(i))}return e.addEventListener(r,t,xt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Fe(e,r);return We(n)?ne(n.a):q});function Li(e,r){return ur(function(n){On(function(){var a=document.getElementById(e);n(a?Ar(r(a)):ju(K$(e)))})})}function zv(e){return ur(function(r){On(function(){r(Ar(e()))})})}$(function(e,r){return Li(r,function(n){return n[e](),wn})});$(function(e,r){return zv(function(){return Mv.scroll(e,r),wn})});y(function(e,r,n){return Li(e,function(a){return a.scrollLeft=r,a.scrollTop=n,wn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var kv=$(function(e,r){var n="g";e.fh&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Dv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):q}a.push(x(_c,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(x(_c,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Av=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Bv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Bv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Mt=new Float64Array(3),_o=new Float64Array(3),Co=new Float64Array(3),Fv=y(function(e,r,n){return new Float64Array([e,r,n])}),Rv=function(e){return e[0]},Ev=function(e){return e[1]},Vv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var jv=function(e){return new Float64Array([e.fY,e.f0,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(wi);function Si(e,r,n){return n===void 0&&(n=new Float64Array(3)),qn(wi(e,r,n),n)}$(Si);function xi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function qn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/xi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Wv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),ln=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(ln);function Xa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Xa);$(function(e,r){var n,a=Mt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=ln(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(ln(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(ln(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(ln(r,a)+e[14])/n,t});var Gv=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Nv=function(e){return{fY:e[0],f0:e[1],c5:e[2],em:e[3]}},Hv=function(e){return new Float64Array([e.fY,e.f0,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Yv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Yv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Iv=new Float64Array(16),Uv=new Float64Array(16),Jv=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Ov=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Pi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ve(Pi);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Pi(c,l,i,t,n,a)});function Ti(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ve(Ti);R(function(e,r,n,a){return Ti(e,r,n,a,-1,1)});function Mi(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],h=e[12],C=e[13],L=e[14],_=e[15],S=r[0],A=r[1],U=r[2],H=r[3],W=r[4],Y=r[5],I=r[6],j=r[7],Z=r[8],O=r[9],te=r[10],ce=r[11],ae=r[12],ue=r[13],Se=r[14],ge=r[15];return n[0]=a*S+l*A+m*U+h*H,n[1]=t*S+u*A+d*U+C*H,n[2]=i*S+v*A+f*U+L*H,n[3]=c*S+s*A+g*U+_*H,n[4]=a*W+l*Y+m*I+h*j,n[5]=t*W+u*Y+d*I+C*j,n[6]=i*W+v*Y+f*I+L*j,n[7]=c*W+s*Y+g*I+_*j,n[8]=a*Z+l*O+m*te+h*ce,n[9]=t*Z+u*O+d*te+C*ce,n[10]=i*Z+v*O+f*te+L*ce,n[11]=c*Z+s*O+g*te+_*ce,n[12]=a*ae+l*ue+m*Se+h*ge,n[13]=t*ae+u*ue+d*Se+C*ge,n[14]=i*ae+v*ue+f*Se+L*ge,n[15]=c*ae+s*ue+g*Se+_*ge,n}$(Mi);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],h=r[0],C=r[1],L=r[2],_=r[4],S=r[5],A=r[6],U=r[8],H=r[9],W=r[10],Y=r[12],I=r[13],j=r[14];return n[0]=a*h+c*C+v*L,n[1]=t*h+l*C+s*L,n[2]=i*h+u*C+m*L,n[3]=0,n[4]=a*_+c*S+v*A,n[5]=t*_+l*S+s*A,n[6]=i*_+u*S+m*A,n[7]=0,n[8]=a*U+c*H+v*W,n[9]=t*U+l*H+s*W,n[10]=i*U+u*H+m*W,n[11]=0,n[12]=a*Y+c*I+v*j+d,n[13]=t*Y+l*I+s*j+f,n[14]=i*Y+u*I+m*j+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=qn(r,Mt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/xi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,h=i*l*v,C=c*l*v,L=i*i*v+u,_=g+f,S=h-d,A=g-f,U=c*c*v+u,H=C+m,W=h+d,Y=C-m,I=l*l*v+u,j=n[0],Z=n[1],O=n[2],te=n[3],ce=n[4],ae=n[5],ue=n[6],Se=n[7],ge=n[8],$r=n[9],fr=n[10],ya=n[11],Bl=n[12],Fl=n[13],Rl=n[14],El=n[15];return a[0]=j*L+ce*_+ge*S,a[1]=Z*L+ae*_+$r*S,a[2]=O*L+ue*_+fr*S,a[3]=te*L+Se*_+ya*S,a[4]=j*A+ce*U+ge*H,a[5]=Z*A+ae*U+$r*H,a[6]=O*A+ue*U+fr*H,a[7]=te*A+Se*U+ya*H,a[8]=j*W+ce*Y+ge*I,a[9]=Z*W+ae*Y+$r*I,a[10]=O*W+ue*Y+fr*I,a[11]=te*W+Se*Y+ya*I,a[12]=Bl,a[13]=Fl,a[14]=Rl,a[15]=El,a});function qv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(qv);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Zv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Zv);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],h=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=h,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+h*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],h=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=h,n[10]=C,n[11]=L,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+h*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=Si(e,r,Mt),t=qn(Xa(n,a,_o),_o),i=qn(Xa(a,t,Co),Co),c=Iv,l=Uv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Mi(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var yo=0;function bn(e,r){for(;r.b;r=r.b)e(r.a)}function zt(e){for(var r=0;e.b;e=e.b)r++;return r}var Xv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Kv=Le(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Qv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),e$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),r$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),n$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),a$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),t$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),o$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),i$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),c$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},l$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},u$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},v$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},zi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},ki=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},$$=function(e){e.gl.disable(e.gl.CULL_FACE)},f$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},s$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},m$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Lo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],d$=[l$,u$,v$,zi,ki,$$,f$,s$,m$];function wo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function p$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Di(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function b$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,h,C,L){var _;if(t===1)for(_=0;_<g;_++)f[h++]=g===1?C[L]:C[L][_];else i.forEach(function(S){for(_=0;_<g;_++)f[h++]=g===1?C[S][L]:C[S][L][_]})}var u=Di(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(zt(n.b)*s);bn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function h$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=g$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*zt(r.b),indexBuffer:null,buffers:{}}}function g$(e,r){var n=new Uint32Array(zt(e)*r),a=0,t;return bn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function So(e,r){return e+"#"+r}var Ai=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),zi(n),ki(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=So(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=yo++,v||(v=wo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=yo++,s||(s=wo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=p$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=_$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=So(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),C$(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=h$(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],h.buffers[f.name]===void 0&&(h.buffers[f.name]=b$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[f.name]);var C=Di(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,S=0;S<C.arraySize;S++)a.enableVertexAttribArray(g+S),a.vertexAttribPointer(g+S,C.size,C.baseType,!1,_,L*S)}for(n.toggle=!n.toggle,bn(jd(n),i.a),u=0;u<Lo.length;u++){var A=n[Lo[u]];A.toggle!==n.toggle&&A.enabled&&(d$[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.dV,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,h.numIndices)}}return bn(t,e.g),r});function _$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var h=g.name,C=e.getUniformLocation(f,h);switch(g.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(C,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(C,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(C,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var S=l.textures.get(_);S||(S=_.eC(e),l.textures.set(_,S)),e.bindTexture(e.TEXTURE_2D,S),i[h]!==_&&(e.uniform1i(C,L),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(C,_),i[h]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function C$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var y$=y(function(e,r,n){return tv(r,{g:n,f:{},h:e},M$,z$)}),L$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),w$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),S$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),x$=$(function(e,r){e.contextAttributes.antialias=!0}),P$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),T$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function M$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};bn(function(t){return o(Vd,r,t)},e.h);var n=or.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Xv(function(){return o(Ai,e,n)})):(n=or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function z$(e,r){return r.f=e.f,Ai(r)}var F=Jl,kn=Yl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(kn,e,l,v)}else{var u=c.a;return p(kn,i,l,u)}});return p(kn,i,p(kn,e,r,t),a)});var kt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(kt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),xo=function(e){return p(kt,y(function(r,n,a){return o(F,M(r,n),a)}),P,e)},Bi=1,k$=2,Fi=0,be=function(e){return{$:1,a:e}},Dt=$(function(e,r){return{$:3,a:e,b:r}}),Po=$(function(e,r){return{$:0,a:e,b:r}}),Ri=$(function(e,r){return{$:1,a:e,b:r}}),ie=function(e){return{$:0,a:e}},D$=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},A$=gu,B$=Vu,Pe=ui,xr=$(function(e,r){return o(pu,e,va(r))}),At=$(function(e,r){return b(o(du,e,r))}),Ei=function(e){return o(xr,`
    `,o(At,`
`,e))},Sn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),kr=function(e){return p(Sn,$(function(r,n){return n+1}),0,e)},F$=Ol,R$=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(F,r,n);e=a,r=t,n=i;continue e}else return n}),$a=$(function(e,r){return p(R$,e,r,P)}),Bt=$(function(e,r){return p(F$,e,o($a,0,kr(r)-1),r)}),Xe=xu,Vi=function(e){var r=Xe(e);return 97<=r&&r<=122},ji=function(e){var r=Xe(e);return r<=90&&65<=r},E$=function(e){return Vi(e)||ji(e)},V$=function(e){var r=Xe(e);return r<=57&&48<=r},j$=function(e){return Vi(e)||ji(e)||V$(e)},Me=function(e){return p(Sn,F,P,e)},Zr=$u,W$=$(function(e,r){return`

(`+(Pe(e+1)+(") "+Ei(G$(r))))}),G$=function(e){return o(N$,e,P)},N$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=Zr(n);if(h.$===1)return!1;var C=h.a,L=C.a,_=C.b;return E$(L)&&o(A$,j$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(F,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=o(F,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(xr,"",Me(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Pe(kr(s))+" ways:"));return o(xr,`

`,o(F,g,o(Bt,W$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(xr,"",Me(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(xr,"",Me(r))+`:

    `):`Problem with the given value:

`}();return g+(Ei(o(B$,4,f))+(`

`+d))}}),ze=32,Ka=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Qa=jl,Wi=tu,Ft=$(function(e,r){return $o(r)/$o(e)}),H$=nu,hn=Wi(o(Ft,2,ze)),Gi=x(Ka,0,hn,Qa,Qa),Ni=Gl,Hi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Yi=ou,et=Wl,Dr=$(function(e,r){return J(e,r)>0?e:r}),Y$=function(e){return{$:0,a:e}},Rt=Nl,I$=$(function(e,r){e:for(;;){var n=o(Rt,ze,e),a=n.a,t=n.b,i=o(F,Y$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Me(i)}}),U$=function(e){var r=e.a;return r},J$=$(function(e,r){e:for(;;){var n=Wi(r/ze);if(n===1)return o(Rt,ze,e).a;var a=o(I$,e,P),t=n;e=a,r=t;continue e}}),Ii=$(function(e,r){if(r.l){var n=r.l*ze,a=Yi(o(Ft,ze,n-1)),t=e?Me(r.z):r.z,i=o(J$,t,r.l);return x(Ka,et(r.p)+n,o(Dr,5,a*hn),i,r.p)}else return x(Ka,et(r.p),hn,Qa,r.p)}),O$=Le(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ii,!1,{z:a,l:n/ze|0,p:t});var i=Hi(p(Ni,ze,r,e)),c=e,l=r-ze,u=n,v=o(F,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),q$=$(function(e,r){if(e<=0)return Gi;var n=e%ze,a=p(Ni,n,e-n,r),t=e-n-ze;return w(O$,r,t,e,P,a)}),We=function(e){return!e.$},k=Bu,K=Mu,z=Au,le=zu,Zn=Fu,Z$=Ru,xe=Tu,Et=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},V=Cr("div"),X$=function(e){return{$:2,a:e}},Ui=$(function(e,r){return e}),Ji=$(function(e,r){return{db:r.db,eA:e,b9:r.b9,eK:r.eK,e8:r.e8,fu:r.fu,cR:r.cR,fV:r.fV}}),Tr=function(e){return e},K$=Tr,To=Ve(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),Q$=_u,Pr=fu,Gr=bu,xn=$(function(e,r){return e<1?r:p(Gr,e,Pr(r),r)}),fa=yu,sa=function(e){return e===""},ma=$(function(e,r){return e<1?"":p(Gr,0,e,r)}),Oi=Lu,Mo=Le(function(e,r,n,a,t){if(sa(t)||o(Q$,"@",t))return q;var i=o(fa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Oi(o(xn,c+1,t));if(l.$===1)return q;var u=l;return ne(pe(To,e,o(ma,c,t),u,r,n,a))}else return ne(pe(To,e,t,q,r,n,a))}),zo=R(function(e,r,n,a){if(sa(a))return q;var t=o(fa,"/",a);if(t.b){var i=t.a;return w(Mo,e,o(xn,i,a),r,n,o(ma,i,a))}else return w(Mo,e,"/",r,n,a)}),ko=y(function(e,r,n){if(sa(n))return q;var a=o(fa,"?",n);if(a.b){var t=a.a;return x(zo,e,ne(o(xn,t+1,n)),r,o(ma,t,n))}else return x(zo,e,q,r,n)});$(function(e,r){if(sa(r))return q;var n=o(fa,"#",r);if(n.b){var a=n.a;return p(ko,e,ne(o(xn,a+1,r)),o(ma,a,r))}else return p(ko,e,q,r)});var ef=Cu,Vt=function(e){},Pn=Ar,rf=Pn(0),qi=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Sn,e,r,Me(m)):x(qi,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),vr=y(function(e,r,n){return x(qi,e,r,0,n)}),ve=$(function(e,r){return p(vr,$(function(n,a){return o(F,e(n),a)}),P,r)}),Xn=Oa,jt=$(function(e,r){return o(Xn,function(n){return Pn(e(n))},r)}),nf=y(function(e,r,n){return o(Xn,function(a){return o(Xn,function(t){return Pn(o(e,a,t))},n)},r)}),af=function(e){return p(vr,nf(F),Pn(P),e)},tf=Ju,of=$(function(e,r){var n=r;return fi(o(Xn,tf(e),n))}),cf=y(function(e,r,n){return o(jt,function(a){return 0},af(o(ve,of(e),r)))}),lf=y(function(e,r,n){return Pn(0)}),uf=$(function(e,r){var n=r;return o(jt,e,n)});Ze.Task=Iu(rf,cf,lf,uf);var vf=mi("Task"),Wt=$(function(e,r){return vf(o(jt,e,r))}),$f=Pv,ff=uu,Kn={$:1},Zi=function(e){return{$:2,a:e}},da={$:0},Re=$(function(e,r){return{$:0,a:e,b:r}}),ee=y(function(e,r,n){return r(e(n))}),Xr=function(e){var r=e.b.B;return r.a},sf=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Re,r,{B:i,ab:c,T:o(F,a,n)}))}else return q},Xi=function(e){var r=e.b;return o(Re,da,r)},lr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),mf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fu.de?Xi(n):n;case 2:var i=a.a.cW;return(J(i+r.eK,Xr(n).db)>0?o(ee,sf,lr(o(Re,Kn,t))):Tr)(o(Re,Zi({cW:i+r.eK}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ji,l.eA,qe(r,{db:l.db+r.eK})),s=o(e,v,u);return o(Re,da,{B:M(v,s),ab:P,T:o(F,t.B,t.T)})}}),Ki=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),df=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(F,a,n);e=i,r=c,n=l;continue e}else return n}}),pf=$(function(e,r){return Me(p(df,e,r,P))}),Qi=y(function(e,r,n){if(r<=0)return P;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,h=g.a,C=g.b;return e>1e3?o(F,_,o(F,c,o(F,s,o(F,h,o(pf,r-4,C))))):o(F,_,o(F,c,o(F,s,o(F,h,p(Qi,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return b([_])}}),bf=$(function(e,r){return p(Qi,0,e,r)}),hf=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=oe(Me(n),oe(b([a]),t)),c=o(bf,e,i),l=o(Ki,e,i);if(l.b){var u=l.a,v=l.b;return o(Re,Kn,{B:u,ab:v,T:Me(c)})}else{var s=Me(c);if(s.b){var m=s.a,d=s.b;return o(Re,Kn,{B:m,ab:P,T:d})}else return r}}),gf=function(e){var r=e.b;return o(Re,Kn,r)},_f=function(e){var r=e.b;return o(Re,Zi({cW:Xr(e).db}),r)},Cf=$(function(e,r){switch(e.$){case 1:return gf(r);case 2:return Xi(r);case 3:return _f(r);default:var n=e.a;return o(hf,n,r)}}),ec=$(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),yf=$(function(e,r){return qe(r,{av:e(r.av)})}),Lf=function(e){return{$:3,a:e}},rc=function(e){return{$:2,a:e}},nc=$(function(e,r){return{$:0,a:e,b:r}}),wf=$(function(e,r){return{$:1,a:e,b:r}}),Te=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),Q=function(e){return e<0?-e:e},Gt=wu,Sf=y(function(e,r,n){return o(lr,0/0,Gt(o(e,r,n)))}),ac=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),xf=mu,tc=function(e){return p(xf,F,P,e)},Pf=$(function(e,r){var n=o(ac,function(a){return a!=="0"&&a!=="."},tc(r));return oe(e&&n?"-":"",r)}),re=ui,rt=vu,oc=Pu,ic=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Zr(n);if(a.$===1)return"01";var t=a.a;return o(rt,"0",ic(t))}else{var i=Xe(r);return i>=48&&i<57?o(rt,oc(i+1),n):"0"}},nt=au,Tf=lu,pa=function(e){return o(rt,e,"")},cc=y(function(e,r,n){return e<=0?n:p(cc,e>>1,oe(r,r),e&1?oe(n,r):n)}),gn=$(function(e,r){return p(cc,e,r,"")}),at=y(function(e,r,n){return oe(n,o(gn,e-Pr(n),pa(r)))}),tt=su,lc=function(e){var r=o(At,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return M(n,t)}else{var n=r.a;return M(n,"0")}else return M("0","0")},Mf=function(e){var r=o(At,"e",re(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(lr,0,Oi(o(ef,"+",t)?o(xn,1,t):t)),c=lc(n),l=c.a,u=c.b,v=oe(l,u),s=i<0?o(lr,"0",o(Te,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Te,ec(pa),Zr(oe(o(gn,Q(i),"0"),v))))):p(at,i+1,"0",v);return oe(e<0?"-":"",s)}else{var n=r.a;return oe(e<0?"-":"",n)}else return""},zf=y(function(e,r,n){if(nt(n)||Tf(n))return re(n);var a=n<0,t=lc(Mf(Q(n))),i=t.a,c=t.b,l=Pr(i)+r,u=oe(o(gn,-l+1,"0"),p(at,l,"0",oe(i,c))),v=Pr(u),s=o(Dr,1,l),m=o(e,a,p(Gr,s,v,u)),d=p(Gr,0,s,u),f=m?tt(o(lr,"1",o(Te,ic,Zr(tt(d))))):d,g=Pr(f),h=f==="0"?f:r<=0?oe(f,o(gn,Q(r),"0")):J(r,Pr(c))<0?p(Gr,0,g-r,f)+("."+p(Gr,g-r,g,f)):oe(i+".",p(at,r,"0",c));return o(Pf,a,h)}),uc=zf($(function(e,r){var n=Zr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Xe(t))})),kf=Sf(uc),Df=y(function(e,r,n){var a=o(Ft,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(kf,t,n)}),vc=Ul,Nt=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(vc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),E=Le(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Qe={$:-2},Ur=Le(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return w(E,0,r,n,w(E,1,v,s,m,d),w(E,1,i,c,l,u))}else return w(E,e,i,c,w(E,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,h=f.c,C=f.d,L=f.e,d=a.e;return w(E,0,v,s,w(E,1,g,h,C,L),w(E,1,r,n,d,t))}else return w(E,e,r,n,a,t)}),ot=y(function(e,r,n){if(n.$===-2)return w(E,0,e,r,Qe,Qe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(vc,e,t);switch(u){case 0:return w(Ur,a,t,i,p(ot,e,r,c),l);case 1:return w(E,a,t,r,c,l);default:return w(Ur,a,t,i,c,p(ot,e,r,l))}}),vn=y(function(e,r,n){var a=p(ot,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return w(E,1,t,i,c,l)}else{var u=a;return u}}),Af=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},$c=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,h=d.d,C=d.e,L=v.e;return w(E,0,f,g,w(E,1,n,a,w(E,0,i,c,l,u),h),w(E,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,S=e.e;S.a;var s=S.b,m=S.c,d=S.d,L=S.e;return w(E,1,n,a,w(E,0,i,c,l,u),w(E,0,s,m,d,L))}else return e},Do=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,h=f.c,C=f.d,L=f.e;return w(E,0,i,c,w(E,1,u,v,s,m),w(E,1,n,a,d,w(E,0,g,h,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,S=_.d,d=_.e,A=e.e;A.a;var g=A.b,h=A.c,C=A.d,L=A.e;return w(E,1,n,a,w(E,0,i,c,S,d),w(E,0,g,h,C,L))}else return e},Bf=ht(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return w(E,n,l,u,v,w(E,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Do(r)}else break e;else return c.a,c.d,Do(r);else break e;return r}}),jn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,w(E,r,n,a,jn(t),l);var u=$c(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Ur,v,s,m,jn(d),f)}else return Qe}else return w(E,r,n,a,jn(t),l)}else return Qe},$n=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,w(E,n,a,t,o($n,e,i),c);var u=$c(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Ur,v,s,m,o($n,e,d),f)}else return Qe}else return w(E,n,a,t,o($n,e,i),c);else return o(Ff,e,li(Bf,e,r,n,a,t,i,c))}),Ff=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(zr(e,a)){var l=Af(c);if(l.$===-1){var u=l.b,v=l.c;return w(Ur,n,u,v,i,jn(c))}else return Qe}else return w(Ur,n,a,t,i,o($n,e,c))}else return Qe}),Rf=$(function(e,r){var n=o($n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return w(E,1,a,t,i,c)}else{var l=n;return l}}),Dn=y(function(e,r,n){var a=r(o(Nt,e,n));if(a.$)return o(Rf,e,n);var t=a.a;return p(vn,e,t,n)}),Ef=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Dn,r,Te(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(wf,M(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Dn,r,Te(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(nc,M(i,c),p(Df,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Dn,r,Te(function(a){return a.$===3?Lf(n):a}));default:var r=e.a,n=e.b;return o(Dn,r,Te(function(a){return a.$===2?rc(n):a}))}},Vf=function(e){return yf(Ef(e))},jf=$(function(e,r){return o(ve,Vf(e),r)}),Wf=$(function(e,r){return qe(r,{eA:o(jf,e,r.eA)})}),Gf=$(function(e,r){var n=r.a,a=r.b;return o(Re,n,qe(a,{B:o(ec,Wf(e),a.B)}))}),Nf=$(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),Hf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Re,a,qe(t,{B:o(Nf,o(e,i.a,r),i)}))}),Yf=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(mf,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(Gf,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(Hf,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(Cf,l,a.G)})}}),If=$(function(e,r){return o(Re,da,{B:M(e,r(e)),ab:P,T:P})}),Uf=Ou,Ao=Uf(P),Qn=Du,_n=ku,Jf=Qu("tick",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return xe({db:c,b9:i,eK:t,e8:a,fu:n,cR:r,fV:e})},o(z,"clock",le))},o(z,"devicePixelRatio",le))},o(z,"dt",le))},o(z,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return xe({eo:m,eB:s,de:v,eJ:u,e9:l,fw:c,fA:i,fG:t,eh:a})},o(z,"alt",K))},o(z,"control",K))},o(z,"down",K))},o(z,"downs",Qn(_n)))},o(z,"left",K))},o(z,"pressedKeys",Qn(_n)))},o(z,"right",K))},o(z,"shift",K))},o(z,"up",K))))},o(z,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return xe({de:v,e5:u,fe:l,fB:c,fC:i,eh:t,fY:a,f0:n})},o(z,"down",K))},o(z,"isDown",K))},o(z,"move",K))},o(z,"rightDown",K))},o(z,"rightUp",K))},o(z,"up",K))},o(z,"x",le))},o(z,"y",le))))},o(z,"screen",o(k,function(r){return o(k,function(n){return xe({eX:n,fW:r})},o(z,"height",le))},o(z,"width",le))))},o(z,"wheel",o(k,function(e){return o(k,function(r){return xe({eF:r,eG:e})},o(z,"deltaX",le))},o(z,"deltaY",le))))),Of=function(e){return{$:4,a:e}},qf={$:0},Zf=$i,je=$(function(e,r){return o(bi,e,Zf(r))}),N=je("className"),Xf=function(e){var r=e.b.B;return r.b},ea=je("id"),Kf=ov,ra=Kf,Qf=iv,X=Qf,es={$:1},rs=function(e){return{$:3,a:e}},ns=function(e){return{$:5,a:e}},Bo=Cr("a"),Ht=Cr("button"),Fo=function(e){return o(je,"href",uv(e))},as=Lr("clip-rule"),_e=Lr("d"),ts=Lr("fill"),fc=di("http://www.w3.org/2000/svg"),os=fc("svg"),is=Lr("viewBox"),cs=o(cv,"http://www.w3.org/XML/1998/namespace","xml:space"),De=os(b([is("0 0 24 24"),ts("currentColor"),o(X,"width","100%"),o(X,"height","100%"),cs("http://www.w3.org/2000/svg")])),ls=Lr("fill-rule"),Ce=fc("path"),Mr={eD:De(b([o(Ce,b([_e("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eR:De(b([o(Ce,b([_e("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eW:De(b([o(Ce,b([_e("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),ff:De(b([o(Ce,b([_e("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Ce,b([_e("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fg:De(b([o(Ce,b([_e("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Ce,b([_e("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fq:De(b([o(Ce,b([_e("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fs:De(b([o(Ce,b([_e("M7 5V19L18 12L7 5Z")]),P)])),ft:De(b([o(Ce,b([_e("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fu:De(b([o(Ce,b([_e("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fQ:De(b([o(Ce,b([ls("evenodd"),as("evenodd"),_e("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fR:De(b([o(Ce,b([_e("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f4:De(b([o(Ce,b([_e("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},us=function(e){return{$:0,a:e}},sc=pi,mc=$(function(e,r){return o(sc,e,us(r))}),Yt=function(e){return o(mc,"click",xe(e))},Ro=je("target"),vs=je("title"),it=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return w(E,n,a,o(e,a,t),o(it,e,i),o(it,e,c))}),$s=qa,me=$s,fs=function(e){return p(kt,y(function(r,n,a){return o(F,n,a)}),P,e)},ss=$(function(e,r){return{$:3,a:e,b:r}}),ms=$(function(e,r){return{$:2,a:e,b:r}}),ds=$(function(e,r){return{$:0,a:e,b:r}}),ps=$(function(e,r){return{$:1,a:e,b:r}}),Tn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dc=x(Tn,0/255,0/255,0/255,1),bs=$i,pc=$(function(e,r){return o(bi,e,bs(r))}),hs=pc("checked"),He=iu,gs=y(function(e,r,n){return oe(o(gn,e-Pr(n),pa(r)),n)}),bc=Zl,hc=function(e){var r=function(n){return n<10?Pe(n):pa(oc(87+n))};return e<16?r(e):oe(hc(e/16|0),r(o(bc,16,e)))},_s=o(ee,hc,o(gs,2,"0")),gc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b4:a,cb:n,cL:r}},Cs=function(e){var r=gc(e),n=r.cL,a=r.cb,t=r.b4;return o(xr,"",o(F,"#",o(ve,o(ee,He,_s),b([n*255,a*255,t*255]))))},ct=je("htmlFor"),ys=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),na=$(function(e,r){if(r.$){var a=r.a;return be(a)}else{var n=r.a;return e(n)}}),Ls=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(F,t,n)}),It=$(function(e,r){return p(vr,Ls(e),P,r)}),_c=R(function(e,r,n,a){return{e0:r,fc:e,fl:n,fK:a}}),ws=Dv,Ss=Su,xs=$(function(e,r){if(r.$)return be(e);var n=r.a;return ie(n)}),Ps=kv,Ts=function(e){return o(Ps,{ew:!1,fh:!1},e)},Ut=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},Ms=$(function(e,r){if(r.$){var a=r.a;return be(a)}else{var n=r.a;return ie(e(n))}}),zs=function(e){return{$:2,a:e}},ks=function(e){return{$:0,a:e}},Ds=function(e){return{$:1,a:e}},Sa=$(function(e,r){return Xe(r)-Xe(e)}),xa=y(function(e,r,n){var a=Xe(n);return J(Xe(e),a)<1&&J(a,Xe(r))<1}),As=$(function(e,r){var n=function(t){return J(t,e)<0?ie(t):be(Ds(r))},a=p(xa,"0","9",r)?ie(o(Sa,"0",r)):p(xa,"a","z",r)?ie(10+o(Sa,"a",r)):p(xa,"A","Z",r)?ie(10+o(Sa,"A",r)):be(ks(r));return o(na,n,a)}),Cc=$(function(e,r){var n=Zr(r);if(n.$===1)return ie(0);var a=n.a,t=a.a,i=a.b;return o(na,function(c){return o(na,function(l){return ie(c+l*e)},o(Cc,e,i))},o(As,e,t))}),Bs=$(function(e,r){return 2<=e&&e<=36?o(Cc,e,tt(r)):be(zs(e))}),Fs=Bs(16),Rs=y(function(e,r,n){return x(Tn,e,r,n,1)}),yc=R(function(e,r,n,a){return x(Tn,e,r,n,a)}),Mn=ql,Es=$(function(e,r){var n=o(Mn,10,e);return He(r*n)/n}),Vs=hu,js=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=tc(n);if(a.b&&!a.b.b){var t=a.a;return Ss(b([t,t]))}else return n};return o(ee,Vs,o(ee,function(n){return o(Te,function(a){return p(ws,1,a,n)},Ts(e))},o(ee,ys(Ut),o(ee,Te(function(n){return n.fK}),o(ee,Te(It(Tr)),o(ee,xs("Parsing hex regex failed"),na(function(n){var a=o(ve,o(ee,r,o(ee,Fs,Ms(H$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ie(x(yc,t/255,c/255,u/255,o(Es,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ie(p(Rs,t/255,c/255,u/255))}else break e;return be("Parsing ints from hex failed")})))))))}(),aa=Cr("input"),lt=Cr("label"),ut=je("name"),Lc=$(function(e,r){return p(vr,z,r,e)}),Ws=o(Lc,b(["target","checked"]),K),Gs=function(e){return o(mc,"change",o(Zn,e,Ws))},Ns=function(e){return M(e,!0)},Hs=function(e){return{$:1,a:e}},Ys=$(function(e,r){return o(sc,e,Hs(r))}),Is=o(Lc,b(["target","value"]),_n),Jt=function(e){return o(Ys,"input",o(Zn,Ns,o(Zn,e,Is)))},wc=je("max"),Sc=je("min"),xc=function(e){return o(je,"step",e)},ta=je("type"),Ot=je("value"),Eo=function(e){var r=e.ce,n=e.c$,a=e.cu,t=e.cq,i=e.cU,c=e.cy;return o(V,P,b([o(lt,b([ct(r)]),b([o(V,b([N("relative w-full")]),b([o(V,b([N("inline-block")]),b([me(r)])),o(V,b([N("inline-block float-right")]),b([me(re(n))]))]))])),o(aa,b([ta("range"),o(X,"width","100%"),ea(r),ut(r),Sc(re(a)),wc(re(t)),Ot(re(n)),xc(re(i)),Jt(o(ee,Gt,o(ee,lr(42),c)))]),P)]))},Us=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Js=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(V,b([N("h-12 py-4")]),b([o(lt,b([N("block"),ct(e)]),b([o(aa,b([N("relative bottom-[1px] align-middle mr-2"),ta("checkbox"),ea(e),ut(e),Gs(ss(e)),hs(c)]),P),me(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Eo({ce:e,cq:i,cu:t,cy:ds(e),cU:.01*(i-t),c$:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Eo({ce:e,cq:i,cu:t,cy:o(ee,He,ps(e)),cU:1,c$:c});default:var c=r.a;return o(V,P,b([o(V,b([o(X,"margin-bottom","6px")]),b([o(lt,b([ct(e)]),b([me(e)]))])),o(aa,b([ta("color"),o(X,"width","100%"),o(X,"height","26px"),o(X,"padding","0px"),ea(e),ut(e),Jt(function(l){return o(ms,e,o(Us,dc,js(l)))}),Ot(Cs(c))]),P)]))}}),Os=function(e){return o(V,b([N("p-4 border-y-[0.5px] border-white20")]),b([o(V,b([N("text-lg pb-2")]),b([me(e.fi)])),o(V,b([N("pl-2 pr-2")]),fs(o(it,Js,e.av)))]))},qs=function(e){return o(V,b([N("text-xs text-white60")]),o(ve,Os,e))},Zs=function(e){return o(V,b([N("absolute left-[104px] bottom-2 text-sm text-white40")]),b([me("clock: "+o(uc,3,Xr(e).db))]))},Xs=function(e){e.a;var r=e.b.T;return o(Te,function(n){return He(60/(Xr(e).db-n))},o(Te,o(ee,U$,function(n){return n.db}),Ut(o(Ki,59,r))))},Ks=function(e){return o(V,b([N("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Xs(e);if(r.$===1)return b([me("... Fps")]);var n=r.a;return b([me(Pe(n)+" Fps")])}())},Qs=function(e){return{$:0,a:e}},em=function(e){var r=e.b.T;return kr(r)},rm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return kr(r)+1+kr(n)},nm=function(e){return o(aa,b([N("absolute w-full"),ta("range"),Sc(Pe(0)),wc(Pe(rm(e)-1)),Ot(Pe(em(e))),xc(Pe(1)),Jt(o(ee,Gt,o(ee,lr(42),o(ee,He,Qs))))]),P)},Vo={$:1},jo={$:3},Wo={$:2},vt=function(e){return!e.b},Pc=pc("disabled"),Pa=y(function(e,r,n){return o(Ht,b([N("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),N(n),Pc(e),Yt(r)]),b([me("REC")]))}),Ta=y(function(e,r,n){return o(Ht,b([N("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Pc(e),Yt(n)]),b([o(V,b([N("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),am=function(e){var r=e.a,n=e.b.ab;return o(V,b([N("py-1")]),b([function(){switch(r.$){case 0:return p(Pa,!1,Vo,"text-red-500 font-bold");case 1:return p(Pa,!1,Wo,"text-white60 hover:text-white80 font-bold");default:return p(Pa,!0,Wo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ta,vt(n),Mr.fs,jo);case 1:return p(Ta,vt(n),Mr.fs,jo);default:return p(Ta,!1,Mr.fq,Vo)}}()]))},tm=function(e){return o(V,b([N("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([nm(e),am(e),Ks(e),Zs(e)]))},om=function(e){var r=e.a;return zr(r,da)},im=$(function(e,r){var n=om(r.G)?o(V,P,P):o(V,b([N("absolute pointer-events-none w-8 h-8"),o(X,"left",re(e.fu.fY+.5*e.cR.fW)+"px"),o(X,"top",re(-e.fu.f0+.5*e.cR.eX)+"px")]),b([o(V,b([N(e.fu.e5?"text-black80":"text-black40")]),b([Mr.fu]))]));return o(V,P,b([n]))}),cm=$(function(e,r){var n=o(Ht,b([N(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Yt(es),vs("Distraction Free Mode")]),b([Mr.f4])),a=40,t=260,i=o(V,b([N("absolute w-8 bottom-12")]),b([o(Bo,b([N("text-twitterBlue40 hover:text-twitterBlue"),Fo("https://twitter.com/AzizErkalSelman"),Ro("_blank")]),b([Mr.fR]))])),c=80,l=o(V,b([N("absolute w-8 bottom-2")]),b([o(Bo,b([N("text-githubCat40 hover:text-githubCat"),Fo("https://github.com/erkal/elm-3d-playground-exploration"),Ro("_blank")]),b([Mr.eR]))])),u=e.cR.fW>640?T(e.cR.eX,a+t,e.cR.fW-(a+t)):T(e.cR.eX-c,a,e.cR.fW-a),v=u.a,s=u.b,m=u.c;return r.aL?o(V,b([N("fixed w-10 h-10 p-1")]),b([n])):o(V,P,b([o(V,b([N("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(X,"width",re(a)+"px")]),b([n,i,l])),o(V,b([N("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(X,"width",re(t)+"px"),o(X,"height",re(v)+"px")]),b([o(ra,rs,qs(Xr(r.G).eA))])),o(V,b([N("absolute bottom-0"),o(X,"left",re(s)+"px"),o(X,"height",re(c)+"px"),o(X,"width",re(m)+"px")]),b([o(ra,ns,tm(r.G))])),o(im,e,r)]))}),lm=y(function(e,r,n){var a=Xf(n.G),t=Xr(n.G);return o(V,b([N("bg-black40"),N("select-none"),N("antialiased"),N("font-mono"),o(X,"width",re(t.cR.fW)+"px"),o(X,"height",re(t.cR.eX)+"px")]),b([o(V,b([N("fixed")]),b([o(ra,Ui(qf),o(e,t,a))])),o(V,b([ea("gui")]),b([o(cm,t,n),o(ra,Of,o(r,t,a))]))]))}),um=Ve(function(e,r,n,a,t,i){var c=$(function(u,v){return M(x(Yf,r,i,u,v),Ao)}),l=function(u){var v=o(Ji,n,u.e2);return M({aL:u.e2.cR.fW<500,G:o(If,v,a)},Ao)};return $f({e1:l,fL:Ui(Jf(X$)),fS:c,fU:o(lm,e,t)})}),vm=R(function(e,r,n,a){return pe(um,e,r,n,a,$(function(t,i){return o(V,P,P)}),y(function(t,i,c){return c}))}),wr=y(function(e,r,n){return{eE:n,fv:e,fD:r}}),$m={fr:b([p(wr,T(-3,3,0),T(0,0,0),b([T(0,0,0),T(1,0,0),T(0,1,0)])),p(wr,T(0,3,0),T(0,0,0),b([T(0,0,0),T(1,0,0),T(0,1,0),T(0,2,0)])),p(wr,T(3,3,0),T(0,0,0),b([T(0,0,0),T(1,1,0),T(0,1,0),T(0,2,0)])),p(wr,T(-3,-1,0),T(0,0,0),b([T(0,0,0),T(0,1,0),T(1,1,0),T(1,2,0)])),p(wr,T(3,0,0),T(0,0,0),b([T(0,0,0),T(1,0,0),T(0,0,1),T(0,1,1)])),p(wr,T(-2,-3,0),T(0,0,0),b([T(0,0,0),T(1,0,0),T(0,0,1),T(1,1,0)])),p(wr,T(2,-3,0),T(0,0,0),b([T(0,0,0),T(1,0,0),T(0,0,1),T(0,1,0)]))])},fm=function(e){return{c1:$m}},sm=$(function(e,r){return M(e,rc(r))}),mm=y(function(e,r,n){return{av:n,e6:r,fi:e}}),Tc=Qe,dm=function(e){return p(Sn,$(function(r,n){var a=r.a,t=r.b;return p(vn,a,t,n)}),Tc,e)},pm=y(function(e,r,n){return p(mm,e,r,dm(n))}),Ma=pm,rr=y(function(e,r,n){var a=r.a,t=r.b;return M(e,o(nc,M(a,t),n))}),Oe=Xl,bm=b([p(Ma,"Camera",!0,b([p(rr,"camera distance",M(3,60),20),p(rr,"camera azimuth",M(0,2*Oe),.6),p(rr,"camera elevation",M(-Oe/2,Oe/2),.4)])),p(Ma,"Parameters",!0,b([p(rr,"cube scale",M(.1,1),.95),p(rr,"edge width",M(.001,.5),.1)])),p(Ma,"Colors and light",!0,b([p(rr,"sunlight azimuth",M(0,2*Oe),5.5),p(rr,"sunlight elevation",M(-Oe/2,Oe/2),-1),p(rr,"saturation",M(0,1),.6),p(rr,"lightning",M(0,1),.8),o(sm,"edge color",dc)]))]),hm=$(function(e,r){return r}),gm=Cr("p"),_m=$(function(e,r){return o(V,b([o(X,"min-width","320px"),o(X,"max-width","500px"),o(X,"margin","0 auto")]),b([o(V,b([N("m-2 text-center")]),b([me("The Soma Cube")])),o(gm,b([N("p-2 text-xs")]),b([o(V,b([o(X,"color","darkred")]),b([me("Following controls are not implemented yet")])),o(V,P,b([me("Space Key to chose the next piece")])),o(V,P,b([me("Arrow keys to rotate the cube")])),o(V,P,b([me("WASDQE to move the cube")])),o(V,P,b([me("Shift + Arrow Keys to rotate the camera")]))]))]))}),Cm=$(function(e,r){return o(Te,function(n){if(n.$)return 0;var a=n.b;return a},o(Nt,e,r.av))}),ym=$(function(e,r){return o(lr,0,Ut(o(It,Cm(e),r)))}),Lm=$(function(e,r){return o(ym,e,r.eA)}),Ne=Lm,wm=ru,Sm=function(e){return e},fn=function(e){return e},$t=function(e){var r=e;return-r},xm=$(function(e,r){var n=e,a=r;return{fY:n.f0*a.c5-n.c5*a.f0,f0:n.c5*a.fY-n.fY*a.c5,c5:n.fY*a.f0-n.f0*a.fY}}),Mc=function(e){var r=e;return r.c3},zc=function(e){var r=e;return r.c4},Pm=function(e){return o(xm,Mc(e),zc(e))},Kr=function(e){var r=e;return r.cz},Jr=Kl,Cn=Ql,za=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Jr(c),u=Cn(c),v=a.eI,s=v,m=s.fY*u,d=l*m,f=m*m,g=s.f0*u,h=l*g,C=m*g,L=g*g,_=1-2*(f+L),S=s.c5*u,A=l*S,U=2*(C-A),H=2*(C+A),W=m*S,Y=2*(W+h),I=2*(W-h),j=g*S,Z=2*(j-d),O=2*(j+d),te=S*S,ce=1-2*(L+te),ae=1-2*(f+te);return{fY:ce*i.fY+U*i.f0+Y*i.c5,f0:H*i.fY+ae*i.f0+Z*i.c5,c5:I*i.fY+O*i.f0+_*i.c5}}),Tm=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Jr(c),u=Cn(c),v=a.cz,s=v,m=i.fY-s.fY,d=i.f0-s.f0,f=i.c5-s.c5,g=a.eI,h=g,C=h.fY*u,L=l*C,_=C*C,S=h.f0*u,A=l*S,U=C*S,H=S*S,W=1-2*(_+H),Y=h.c5*u,I=l*Y,j=2*(U-I),Z=2*(U+I),O=C*Y,te=2*(O+A),ce=2*(O-A),ae=S*Y,ue=2*(ae-L),Se=2*(ae+L),ge=Y*Y,$r=1-2*(H+ge),fr=1-2*(_+ge);return{fY:s.fY+$r*m+j*d+te*f,f0:s.f0+Z*m+fr*d+ue*f,c5:s.c5+ce*m+Se*d+W*f}}),Qr=function(e){return e},Br=function(e){var r=e;return r.c3},Fr=function(e){var r=e;return r.c4},Rr=function(e){var r=e;return r.c6},Mm=y(function(e,r,n){return Qr({cz:p(Tm,e,r,Kr(n)),c3:p(za,e,r,Br(n)),c4:p(za,e,r,Fr(n)),c6:p(za,e,r,Rr(n))})}),Go=y(function(e,r,n){return p(Mm,e(n),r,n)}),kc=function(e){var r=e;return r.eI},zm=$(function(e,r){var n=e,a=r;return{fY:a.fY+n.fY,f0:a.f0+n.f0,c5:a.c5+n.c5}}),km=$(function(e,r){return Qr({cz:o(zm,e,Kr(r)),c3:Br(r),c4:Fr(r),c6:Rr(r)})}),Dm=$(function(e,r){var n=e,a=r;return{fY:n*a.fY,f0:n*a.f0,c5:n*a.c5}}),Am=y(function(e,r,n){return o(km,o(Dm,r,e),n)}),Bm=y(function(e,r,n){return p(Am,kc(e(n)),r,n)}),en=$(function(e,r){return{eI:r,cz:e}}),Fm=function(e){var r=e;return o(en,r.cz,r.c3)},Rm=function(e){var r=e;return o(en,r.cz,r.c4)},Em=function(e){var r=e;return o(en,r.cz,r.c6)},Vm=function(e){var r=Qr({cz:e.aR,c3:zc(e.dl),c4:Pm(e.dl),c6:Mc(e.dl)}),n=p(Bm,Em,e.ca,p(Go,Fm,$t(e.bC),p(Go,Rm,e.bx,r)));return n},jm=function(e){return{$:0,a:e}},Ee=function(e){var r=e;return Q(r)},Wn=function(e){var r=e;return .5*r},Wm=eu,Gm=function(e){var r=e;return Wm(r)},Nm=function(e){var r=Wn(Ee(e.ej)),n=Gm(r);return{cK:jm(n),c0:e.c0}},pr=function(e){return e},rn={fY:0,f0:0,c5:0},Hm=Tr,ir=function(e){return e},Dc=ir({fY:1,f0:0,c5:0}),qt=Dc,Ac=ir({fY:0,f0:0,c5:1}),ba=Ac,Ym=Hm({cz:rn,c3:ba,c4:qt}),Im=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.ca;return Nm({ej:pr(2*wm(.5)),c0:Vm({bx:pr(n),ca:fn(t),bC:pr(a),aR:Sm(r),dl:Ym})})},Um=function(e){return Im({bx:o(Ne,"camera azimuth",e),ca:o(Ne,"camera distance",e),bC:o(Ne,"camera elevation",e),aR:{fY:.5,f0:1,c5:0}})},Jm=function(e){var r=e;return r},Om=function(e){var r=e;return Jm(r.er)},Bc=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),qm=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Zm=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Xm=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Km=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Qm=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),ed=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),rd=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return x(ed,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return x(Bc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return x(qm,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return x(Zm,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return x(Qm,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return x(Xm,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return x(Km,n,a,t,1);case 8:return e;case 9:return e;default:return e}},nd={$:0},oa=function(e){var r=e;return r},fe=$(function(e,r){var n=e,a=r;return o(Dr,n,a)}),ad=$(function(e,r){return J(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(ad,n,a)}),td=$e(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=oa(c(u)),m=o(de,s.dR,e),d=o(fe,s.dO,r),f=o(de,s.dS,n),g=o(fe,s.dP,a),h=o(de,s.dT,t),C=o(fe,s.dQ,i),L=c,_=v;e=m,r=d,n=f,a=g,t=h,i=C,c=L,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),od=y(function(e,r,n){var a=oa(e(r));return ua(td,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),ka=$(function(e,r){var n=e,a=r;return J(a,n)<1}),id=function(e){return o(ka,e.dO,e.dR)&&o(ka,e.dP,e.dS)&&o(ka,e.dQ,e.dT)?e:{dO:o(fe,e.dR,e.dO),dP:o(fe,e.dS,e.dP),dQ:o(fe,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},ia=function(e){var r=e;return r},sn=function(e){var r=e;return r.fY},mn=function(e){var r=e;return r.f0},dn=function(e){var r=e;return r.c5},cd=function(e){var r=ia(e),n=r.a,a=r.b,t=r.c,i=sn(n),c=mn(n),l=dn(n),u=sn(a),v=mn(a),s=dn(a),m=sn(t),d=mn(t),f=dn(t);return id({dO:o(fe,i,o(fe,u,m)),dP:o(fe,c,o(fe,v,d)),dQ:o(fe,l,o(fe,s,f)),dR:o(de,i,o(de,u,m)),dS:o(de,c,o(de,v,d)),dT:o(de,l,o(de,s,f))})},Fc=jv,nn=function(e){var r=e;return r},br=function(e){return Fc(nn(e))},Rc=function(e){var r=e;return r},Ec=function(e){return Fc(Rc(e))},ld=$(function(e,r){var n=e,a=r;return{fY:a.f0*n.c5-a.c5*n.f0,f0:a.c5*n.fY-a.fY*n.c5,c5:a.fY*n.f0-a.f0*n.fY}}),No=$(function(e,r){var n=e,a=r;return{fY:a.fY-n.fY,f0:a.f0-n.f0,c5:a.c5-n.c5}}),Vc=function(e){return e},jc=cu,ud={fY:0,f0:0,c5:0},vd=$(function(e,r){var n=e,a=r,t=o(Dr,Q(a.fY),o(Dr,Q(a.f0),Q(a.c5)));if(t){var i=a.c5/t,c=a.f0/t,l=a.fY/t,u=jc(l*l+c*c+i*i);return{fY:n*l/u,f0:n*c/u,c5:n*i/u}}else return ud}),$d=vd(Vc(1)),Wc=y(function(e,r,n){var a=o(No,r,n),t=o(No,e,r);return $d(o(ld,a,t))}),fd=function(e){var r=ia(e),n=r.a,a=r.b,t=r.c,i=Ec(p(Wc,n,a,t));return T({o:i,fv:br(n)},{o:i,fv:br(a)},{o:i,fv:br(t)})},sd=$(function(e,r){return{$:2,a:e,b:r}}),md=sd({df:3,$7:0,dV:4}),dd=function(e){if(e.b){var r=e.a,n=e.b,a=md(o(ve,fd,e)),t=p(od,cd,r,n);return x(Bc,t,e,a,0)}else return nd},Ae=y(function(e,r,n){return T(e,r,n)}),sr=$(function(e,r){var n=r;return e*n}),Ie=y(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,c5:i}}),Gc=function(){var e=fn(1),r=fn(1),n=fn(1),a=o(sr,-.5,e),t=o(sr,-.5,r),i=o(sr,-.5,n),c=p(Ie,i,t,a),l=o(sr,.5,e),u=p(Ie,i,t,l),v=o(sr,.5,r),s=p(Ie,i,v,a),m=p(Ie,i,v,l),d=o(sr,.5,n),f=p(Ie,d,t,a),g=p(Ie,d,v,a),h=p(Ie,d,t,l),C=p(Ie,d,v,l);return rd(dd(b([p(Ae,c,g,f),p(Ae,c,s,g),p(Ae,u,h,C),p(Ae,u,C,m),p(Ae,f,g,C),p(Ae,f,C,h),p(Ae,c,m,s),p(Ae,c,u,m),p(Ae,c,f,h),p(Ae,c,h,u),p(Ae,s,C,g),p(Ae,s,m,C)])))}(),An={$:0},pd=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),bd=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ec(p(Wc,u,l,c)),s={o:v,fv:br(u)},m={o:v,fv:br(l)},d={o:v,fv:br(c)};return o(F,s,o(F,m,o(F,d,n)))}),hd=function(e){var r=e;return r.D},gd=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),ft=4294967295>>>32-hn,st=Hl,_d=y(function(e,r,n){e:for(;;){var a=ft&r>>>e,t=o(st,a,n);if(t.$){var v=t.a;return o(st,ft&r,v)}else{var i=t.a,c=e-hn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Cd=function(e){return e>>>5<<5},Nc=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,Cd(n))>-1?ne(o(st,ft&e,i)):ne(p(_d,a,e,t))}),yd=function(e){var r=e;return r.ah},Da=$(function(e,r){return o(Nc,e,yd(r))}),Ld=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return x(gd,y(function(c,l,u){return T(c,l,u)}),o(Da,a,e),o(Da,t,e),o(Da,i,e))};return o(It,r,hd(e))},wd=y(function(e,r,n){e:for(;;){var a=o(Rt,ze,e),t=a.a,i=a.b;if(J(et(t),ze)<0)return o(Ii,!0,{z:r,l:n,p:t});var c=i,l=o(F,Hi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Zt=function(e){return e.b?p(wd,e,P,0):Gi},Sd=y(function(e,r,n){return e(r(n))}),xd=$(function(e,r){return!o(ac,o(Sd,ff,e),r)}),Pd=$(function(e,r){return p(vr,$(function(n,a){return e(n)?o(F,n,a):a}),P,r)}),Hc=function(e){var r=e.a;return r},Td=$(function(e,r){var n=Hc(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(xd,a,r)?{D:r,ah:e}:{D:o(Pd,a,r),ah:e}}),Md=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),zd=Md({df:1,$7:3,dV:4}),mt=function(e){var r=e;return r},Gn=$(function(e,r){var n=mt(r),a=mt(e);return M(T(a.fY,a.f0,a.c5),T(n.fY,n.f0,n.c5))}),Xt=Fv,Ho=p(Xt,0,0,0),Aa=Ve(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Nt,o(Gn,e,r),t);if(v.$){var m={o:Ho,fv:br(r)},d={o:Ho,fv:br(e)},f=u+1,g=u;return T(o(F,T(n,g,f),o(F,T(n,f,a),c)),o(F,m,o(F,d,l)),u+2)}else{var s=v.a;return T(o(F,T(n,s,a),c),l,u)}}),kd=Le(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,h=a,C=e,L=r,_=v,S=a+3,A=pe(Aa,s,d,f,h,r,pe(Aa,m,s,g,f,r,pe(Aa,d,m,h,g,r,t)));e=C,r=L,n=_,a=S,t=A;continue e}else{var U=t,H=U.a,W=U.b;return M(H,Me(W))}}),Dd=Le(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,h=n,C=p(vn,o(Gn,d,s),f,p(vn,o(Gn,s,m),g,p(vn,o(Gn,m,d),h,t))),L=o(F,T(h,g,f),a),_=e,S=v,A=n+3,U=L,H=C;e=_,r=S,n=A,a=U,t=H;continue e}else return T(a,t,n)}),Sr=y(function(e,r,n){var a=Ld(n),t=p(vr,bd(r),P,a),i=w(Dd,r,a,0,P,Tc),c=i.a,l=i.b,u=i.c,v=w(kd,r,l,a,0,T(c,P,u)),s=v.a,m=v.b,d=vt(m)?t:oe(t,m);return p(pd,e,o(Td,Zt(d),s),o(zd,d,s))}),Ad=$(function(e,r){return r.b?p(vr,F,r,e):e}),hr=function(e){return p(vr,Ad,P,e)},Yo=function(e){return{D:o(ve,function(r){return T(3*r,3*r+1,3*r+2)},o($a,0,kr(e)-1)),ah:Zt(hr(o(ve,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Bd=function(e){switch(e.$){case 0:return An;case 1:var a=e.a,r=e.b,n=o(ve,ia,r);return p(Sr,a,Tr,Yo(n));case 2:var a=e.a,r=e.b,n=o(ve,ia,r);return p(Sr,a,Tr,Yo(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.fv},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.fv},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.fv},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.fv},t);case 8:return An;case 9:return An;default:return An}},Io=Bd(Gc),Fd=function(e){var r=e;return r.aK},Yc={$:0},D=Yc,Ic=function(e){return{$:4,a:e}},Rd=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(F,n,r);e=t,r=i;continue e}else return r}),Kt=function(e){return Ic(o(Rd,e,P))},Ye=$(function(e,r){return{$:1,a:e,b:r}}),Ed={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Vd=$(function(e,r){switch(r.$){case 0:return o(L$,e,r);case 1:return o(w$,e,r);case 2:return o(S$,e,r);case 3:return o(x$,e,r);case 4:return o(P$,e,r);default:return o(T$,e,r)}}),jd=$(function(e,r){switch(r.$){case 0:return o(Qv,e,r);case 1:return o(e$,e,r);case 2:return o(r$,e,r);case 3:return o(n$,e,r);case 4:return o(a$,e,r);case 5:return o(t$,e,r);case 6:return o(o$,e,r);case 7:return o(i$,e,r);default:return c$(e)}}),we=Kv,Wd=1029,Gd=function(e){return{$:5,a:e}},Uc=function(e){var r=e;return Gd(r)},Nd=Uc(Wd),Hd=1028,Yd=Uc(Hd),er=y(function(e,r,n){return r===1?e?o(F,Nd,n):o(F,Yd,n):n}),Jc={src:`
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
    `,attributes:{position:"fv",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ba=R(function(e,r,n,a){return o(Ye,r,$e(function(t,i,c,l,u,v,s,m){return w(we,p(er,l,a,m),Jc,Ed,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Id={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Oc={src:`
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
    `,attributes:{position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nr=R(function(e,r,n,a){return o(Ye,r,$e(function(t,i,c,l,u,v,s,m){return w(we,p(er,l,a,m),Oc,Id,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),qc=$(function(e,r){return{$:3,a:e,b:r}}),Ud={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Zc={src:`
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
    `,attributes:{position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jd=R(function(e,r,n,a){return o(qc,n,$e(function(t,i,c,l,u,v,s,m){return w(we,m,Zc,Ud,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Od={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Qt=function(e){var r=e;return r},Xc=Wv,ar=Le(function(e,r,n,a,t){return o(Ye,n,$e(function(i,c,l,u,v,s,m,d){return w(we,p(er,u,t,d),Oc,Od,a,{aN:o(Xc,Qt(r),e),b:l,c,d:s,e:i,f:v})}))}),qd={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Zd=Le(function(e,r,n,a,t){return o(qc,a,$e(function(i,c,l,u,v,s,m,d){return w(we,d,Zc,qd,t,{aN:o(Xc,Qt(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Xd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"co",sceneProperties:"e",viewMatrix:"f"}},Kc={src:`
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
    `,attributes:{normal:"o",position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Bn=R(function(e,r,n,a){return o(Ye,r,$e(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(we,p(er,l,a,m),Kc,Xd,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,co:e,b:c,c:i,d:v,e:t,f:u})}))}),Qc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cp",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},el={src:`
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
    `,attributes:{normal:"o",position:"fv",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Kd=Ve(function(e,r,n,a,t,i){return o(Ye,a,$e(function(c,l,u,v,s,m,d,f){var g=d.a,h=d.b;return w(we,p(er,v,i,f),el,Qc,t,{P:h,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cp:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),rl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b6",constantMetallic:"b7",constantRoughness:"b8",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"ct",normalMapTexture:"aW",roughnessTexture:"cQ",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Qd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ye,u,$e(function(m,d,f,g,h,C,L,_){var S=L.a,A=L.b;return w(we,p(er,g,s,_),el,rl,v,{b3:e,b6:r,b7:i,b8:a,P:A,bd:S.bd,bK:S.bK,bL:S.bL,bM:S.bM,ct:t,b:f,c:d,aW:c,d:C,cQ:n,e:m,a$:l,f:h})}))}}}}}}}}}}},e0={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cs",roughness:"cP",sceneProperties:"e",viewMatrix:"f"}},Fn=Ve(function(e,r,n,a,t,i){return o(Ye,a,$e(function(c,l,u,v,s,m,d,f){var g=d.a,h=d.b;return w(we,p(er,v,i,f),Kc,e0,t,{b2:e,P:h,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cs:n,b:u,c:l,d:m,cP:r,e:c,f:s})}))}),r0=function(e){return{$:0,a:e}},Uo=$(function(e,r){return{$:1,a:e,b:r}}),pn=$(function(e,r){if(r.$){var n=r.a.C;return M(n,1)}else return r.a,M(e,0)}),ha=Rv,ga=Ev,_a=Vv,an=Gv,n0=function(e){return x(an,ha(e),ga(e),_a(e),1)},eo=x(an,0,0,0,0),Nn=$(function(e,r){if(r.$){var a=r.a.C;return M(a,eo)}else{var n=r.a;return M(e,n0(n))}}),a0=$(function(e,r){var n=M(e,r);if(n.a.$){var t=n.a.a.C;return o(Uo,M(t,eo),o(pn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Uo,o(Nn,t,e),o(pn,t,r))}else{var a=n.a.a;return n.b.a,r0(a)}}),t0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Rn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),o0=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Nr=Av,i0=function(e){return o(Nr,e,1)},dt=o(Nr,0,0),Er=$(function(e,r){if(r.$){var a=r.a.C;return M(a,dt)}else{var n=r.a;return M(e,i0(n))}}),c0=R(function(e,r,n,a){var t=x(o0,e,r,n,a);if(t.a.$){var u=t.a.a.C;return x(Rn,M(u,eo),o(Er,u,r),o(Er,u,n),o(pn,u,a))}else if(t.b.$){var u=t.b.a.C;return x(Rn,o(Nn,u,e),M(u,dt),o(Er,u,n),o(pn,u,a))}else if(t.c.$){var u=t.c.a.C;return x(Rn,o(Nn,u,e),o(Er,u,r),M(u,dt),o(pn,u,a))}else if(t.d.$){var u=t.d.a.C;return x(Rn,o(Nn,u,e),o(Er,u,r),o(Er,u,n),M(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(t0,i,c,l)}}),l0={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bB",sceneProperties:"e"}},Fa=Le(function(e,r,n,a,t){return o(Ye,n,$e(function(i,c,l,u,v,s,m,d){return w(we,p(er,u,t,d),Jc,l0,a,{b0:Qt(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),nl={src:`
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
    `,attributes:{normal:"o",position:"fv",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},u0=R(function(e,r,n,a){return o(Ye,r,$e(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(we,p(er,l,a,m),nl,Qc,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),v0=gt(function(e,r,n,a,t,i,c,l,u){return o(Ye,c,$e(function(v,s,m,d,f,g,h,C){var L=h.a,_=h.b;return w(we,p(er,d,u,C),nl,rl,l,{b3:e,b6:r,b7:i,b8:a,P:_,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,ct:t,b:m,c:s,aW:e,d:g,cQ:n,e:v,a$:0,f})}))}),ro=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),$0=function(e){var r=e;return p(ro,r.dR,r.dO,.5)},f0=function(e){var r=e;return p(ro,r.dS,r.dP,.5)},s0=function(e){var r=e;return p(ro,r.dT,r.dQ,.5)},m0=function(e){return p(Ie,$0(e),f0(e),s0(e))},d0=function(e){var r=e;return r.dO},p0=function(e){var r=e;return r.dP},al=function(e){var r=e;return r.dQ},b0=function(e){var r=e;return r.dR},h0=function(e){var r=e;return r.dS},tl=function(e){var r=e;return r.dT},cr=$(function(e,r){var n=e,a=r;return a-n}),ol=function(e){return T(o(cr,b0(e),d0(e)),o(cr,h0(e),p0(e)),o(cr,tl(e),al(e)))},G=function(e){var r=ol(e),n=r.a,a=r.b,t=r.c;return{ey:nn(m0(e)),eT:n/2,eU:a/2,eV:t/2}},g0=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var t=r.a,c=r.c,a=r.d;return x(Ba,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Ba,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Ba,l,G(t),c,a);case 8:return D;case 9:return D;default:return D}}else{var n=e.b.a;switch(r.$){case 0:return D;case 1:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(nr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return x(nr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return x(nr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(Jd,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var t=r.a,c=r.c,a=r.d;return w(Fa,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Fa,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Fa,l,v,G(t),c,a);case 8:return D;case 9:return D;default:return D}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return D;case 1:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(ar,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return w(ar,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return w(ar,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(Zd,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,H=e.c,m=o(a0,s,H);if(m.$){var g=m.a,h=g.a;g.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var t=r.a,c=r.c,f=r.d;return x(u0,h,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return pe(Kd,h,L,_,G(t),c,f);case 8:return D;case 9:return D;default:return D}}else{var d=m.a;switch(r.$){case 0:return D;case 1:return D;case 2:var t=r.a,c=r.c,f=r.d;return x(Bn,d,G(t),c,f);case 3:return D;case 4:var t=r.a,c=r.c,f=r.d;return x(Bn,d,G(t),c,f);case 5:return D;case 6:var t=r.a,c=r.c,f=r.d;return x(Bn,d,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return x(Bn,d,G(t),c,f);case 8:return D;case 9:return D;default:return D}}default:e.a;var S=e.b,A=e.c,U=e.d,H=e.e,W=x(c0,S,A,U,H);if(W.$){var Z=W.a,O=Z.a,te=Z.b,ce=W.b,ae=ce.a,ue=ce.b,Se=W.c,ge=Se.a,$r=Se.b,fr=W.d,L=fr.a,_=fr.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var t=r.a,c=r.c,a=r.d;return Vl(v0,O,te,ae,ue,ge,$r,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Qd(O)(te)(ae)(ue)(ge)($r)(L)(_)(G(t))(c)(a);case 8:return D;case 9:return D;default:return D}}else{var Y=W.a,I=W.b,j=W.c;switch(r.$){case 0:return D;case 1:return D;case 2:var t=r.a,c=r.c,a=r.d;return pe(Fn,Y,I,j,G(t),c,a);case 3:return D;case 4:var t=r.a,c=r.c,a=r.d;return pe(Fn,Y,I,j,G(t),c,a);case 5:return D;case 6:var t=r.a,c=r.c,a=r.d;return pe(Fn,Y,I,j,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return pe(Fn,Y,I,j,G(t),c,a);case 8:return D;case 9:return D;default:return D}}}}),Ra=function(e){var r=e;return r.fY},Ea=function(e){var r=e;return r.f0},Va=function(e){var r=e;return r.c5},_0=function(e){var r=e,n=Va(r.c6),a=Ea(r.c6),t=Ra(r.c6),i=Va(r.c4),c=Ea(r.c4),l=Ra(r.c4),u=Va(r.c3),v=Ea(r.c3),s=Ra(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ke=function(e){var r=e;return r},C0=function(e){var r=nn(Kr(e)),n=ke(Rr(e)),a=ke(Fr(e)),t=ke(Br(e));return{dp:_0(e),q:t.fY,r:t.f0,s:t.c5,t:a.fY,u:a.f0,v:a.c5,w:n.fY,x:n.f0,y:n.c5,H:r.fY,I:r.f0,J:r.c5,bW:1}},jr=$(function(e,r){return{$:5,a:e,b:r}}),il=$(function(e,r){return{dp:zr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),Ca=$(function(e,r){var n=r;switch(n.$){case 0:return D;case 5:var a=n.a,t=n.b,i=o(il,a,e);return o(jr,i,t);case 1:return o(jr,e,n);case 3:return o(jr,e,n);case 2:return o(jr,e,n);default:return o(jr,e,n)}}),y0=$(function(e,r){return o(Ca,C0(e),r)}),cl=function(e){return{$:2,a:e}},L0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fY:n*i.fY,f0:a*i.f0,c5:t*i.c5},eT:n*r.eT,eU:a*r.eU,eV:t*r.eV}}),w0=Hv,S0=Nv,Jo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=S0(a),g=f.fY,h=f.f0,C=f.c5,L=f.em,_=w0({em:L,fY:g*s,f0:h*m,c5:C*d});return ua(r,n,_,t,i,c,l,u,v)}}}}}}}}}},pt=$(function(e,r){switch(r.$){case 0:return Yc;case 5:var n=r.a,a=r.b;return o(jr,n,o(pt,e,a));case 1:var t=r.a,i=r.b;return o(Ye,o(L0,e,t),o(Jo,e,i));case 3:return r;case 2:var i=r.a;return cl(o(Jo,e,i));default:var c=r.a;return Ic(o(ve,pt(e),c))}}),x0=$(function(e,r){var n=r;return o(pt,e,n)}),P0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Or=519,ll=7683,ul=7682,he=7680,T0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},no=y(function(e,r,n){var a=e.cM,t=e.cn,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(ee,c(v.bl),o(ee,l(v.a8),o(ee,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(T0,a,t,i)))}),M0=p(no,{cn:0,cM:0,c2:15},{a8:he,bl:Or,bt:he,bu:ll},{a8:he,bl:Or,bt:he,bu:ul}),z0=p(no,{cn:0,cM:0,c2:15},{a8:he,bl:Or,bt:he,bu:ul},{a8:he,bl:Or,bt:he,bu:ll}),k0=$(function(e,r){return e?o(F,z0,r):o(F,M0,r)}),D0={src:`
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
    `,attributes:{normal:"o",position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},A0=function(e){if(e.$){var r=e.c;return ne($e(function(n,a,t,i,c,l,u,v){return w(we,o(k0,i,v),D0,P0,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Oo=function(e){var r=A0(e);if(r.$)return D;var n=r.a;return cl(n)},B0=R(function(e,r,n,a){var t=o(g0,n,Gc),i=function(){var s=M(e,r);return s.a?s.b?Kt(b([t,Oo(Io)])):t:s.b?Oo(Io):D}(),c=Fd(a),l=c.a,u=c.b,v=c.c;return o(y0,Om(a),o(x0,T(l,u,v),i))}),vl=$(function(e,r){return x(B0,!0,!0,e,r)}),ja=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),Wa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),F0=ir({fY:-1,f0:0,c5:0}),R0=ir({fY:0,f0:-1,c5:0}),E0=ir({fY:0,f0:0,c5:-1}),$l=ir({fY:0,f0:1,c5:0}),V0=Ve(function(e,r,n,a,t,i){var c=o(ja,n,i)?Ac:E0,l=o(ja,r,t)?$l:R0,u=o(ja,e,a)?Dc:F0,v=T(Ee(o(cr,e,a)),Ee(o(cr,r,t)),Ee(o(cr,n,i))),s=p(Ie,o(Wa,e,a),o(Wa,r,t),o(Wa,n,i)),m=Qr({cz:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),fl=$(function(e,r){return pe(V0,sn(e),mn(e),dn(e),sn(r),mn(r),dn(r))}),yn=y(function(e,r,n){return{fY:e,f0:r,c5:n}}),j0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=T(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(vl,e,o(fl,p(yn,-c,-l,-u),p(yn,c,l,u)))}),mr=function(e){return e*Oe/180},W0=function(e){return Kt(e)},ca=W0,G0=R(function(e,r,n,a){var t=T(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var h=g<0?g+1:g>1?g-1:g;return h*6<1?v+(u-v)*h*6:h*2<1?u:h*3<2?v+(u-v)*(2/3-h)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return x(Tn,f,d,m,a)}),sl=y(function(e,r,n){return x(G0,e,r,n,1)}),qo=function(e){return{$:0,a:e}},N0=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ml=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Ga=function(e){return p(ml,0,1,e<=.04045?e/12.92:o(Mn,(e+.055)/1.055,2.4))},H0=function(e){var r=gc(e),n=r.cL,a=r.cb,t=r.b4;return p(Xt,Ga(n),Ga(a),Ga(t))},dl=function(e){return p(N0,0,qo(H0(e)),qo(0))},Y0=y(function(e,r,n){return{fY:e,f0:r,c5:n}}),I0=function(e){var r=Rc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fY,I:r.f0,J:r.c5,bW:1}},U0=$(function(e,r){return o(Ca,I0(e),r)}),J0=$(function(e,r){return o(U0,e,r)}),ao=function(e){var r=e.a,n=e.b,a=e.c;return J0(p(Y0,r,n,a))},Hr=function(e){return ao(T(e,0,0))},Yr=function(e){return ao(T(0,0,e))},O0=function(e){var r=e;return r.cz},q0=$(function(e,r){var n=r,a=nn(O0(e)),t=.5*n,i=Jr(t),c=Cn(t),l=ke(kc(e)),u=l.fY*c,v=i*u,s=u*u,m=l.f0*c,d=i*m,f=u*m,g=m*m,h=1-2*(s+g),C=l.c5*c,L=i*C,_=2*(f-L),S=2*(f+L),A=u*C,U=2*(A+d),H=2*(A-d),W=m*C,Y=2*(W-v),I=2*(W+v),j=C*C,Z=1-2*(g+j),O=1-2*(s+j);return{dp:!0,q:Z,r:S,s:H,t:_,u:O,v:I,w:U,x:Y,y:h,H:a.fY-Z*a.fY-_*a.f0-U*a.c5,I:a.f0-S*a.fY-O*a.f0-Y*a.c5,J:a.c5-H*a.fY-I*a.f0-h*a.c5,bW:1}}),Z0=y(function(e,r,n){return o(Ca,o(q0,e,r),n)}),to=y(function(e,r,n){return p(Z0,e,r,n)}),X0=o(en,rn,qt),pl=$(function(e,r){return p(to,X0,pr(e),r)}),bl=$l,K0=o(en,rn,bl),Hn=$(function(e,r){return p(to,K0,pr(e),r)}),Q0=o(en,rn,ba),hl=$(function(e,r){return p(to,Q0,pr(e),r)}),ep=$(function(e,r){return(r-Yi(r/e)*e)/e}),rp=function(e){return 2*Oe*e},np=R(function(e,r,n,a){return e+(r-e)*(1+Jr(rp(o(ep,n,a))))/2}),ap=function(e){var r=o(Ne,"edge width",e),n=p(sl,x(np,0,1,7,e.db),o(Ne,"saturation",e),o(Ne,"lightning",e)),a=o(j0,dl(n),T(r,3+r,r)),t=ca(b([o(Hr,1.5,o(Yr,1.5,a)),o(Hn,mr(90),o(Hr,1.5,o(Yr,1.5,a))),o(Hn,mr(180),o(Hr,1.5,o(Yr,1.5,a))),o(Hn,mr(270),o(Hr,1.5,o(Yr,1.5,a)))]));return ca(b([t,o(pl,mr(90),t),o(hl,mr(90),t)]))},tp=$(function(e,r){var n=r/2;return o(vl,e,o(fl,p(yn,-n,-n,-n),p(yn,n,n,n)))}),gl=function(e){return ao(T(0,e,0))},op=$(function(e,r){var n=nn(e),a=1-r;return{dp:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fY,I:a*n.f0,J:a*n.c5,bW:r}}),ip=y(function(e,r,n){return o(Ca,o(op,e,r),n)}),cp=y(function(e,r,n){return p(ip,e,r,n)}),lp=cp(rn),up=y(function(e,r,n){var a=n.a,t=n.b,i=n.c;return o(Yr,i,o(gl,t,o(Hr,a,o(lp,o(Ne,"cube scale",e),o(tp,dl(r),1)))))}),vp=y(function(e,r,n){var a=n.fD,t=a.a,i=a.b,c=a.c,l=n.fv,u=l.a,v=l.b,s=l.c;return o(Yr,s,o(gl,v,o(Hr,u,o(hl,c*mr(90),o(Hn,i*mr(90),o(pl,t*mr(90),ca(o(ve,o(up,e,r),n.eE))))))))}),$p=x(Tn,211/255,215/255,207/255,1),fp=$(function(e,r){return o(lr,$p,o(Nc,o(bc,Hc(r),e),r))}),sp=function(e){var r=8,n=function(a){return p(sl,a/r,o(Ne,"saturation",e),o(Ne,"lightning",e))};return Zt(o(ve,n,o($a,0,r)))},mp=$(function(e,r){var n=function(a){return o(vp,e,o(fp,a,sp(e)))};return ca(o(Bt,n,r.c1.fr))}),dp=function(e){return e},pp=function(e){return fn(.01*e)},Zo=function(e){return e},bp=function(e){return e},hp=function(e){return{$:0,a:e}},gp=hp,_p={$:3},Cp=_p,yp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Lp=yp,wp=$(function(e,r){return hr(o(ve,e,r))}),Sp=function(e){return{$:1,a:e}},xp=Sp,Pp=function(e){return o(Lr,"height",Pe(e))},Tp=function(e){return av(lv(e))},Mp=Tp,zp=function(e){return{$:2,a:e}},kp=zp,Dp=function(e){return o(xr,"",e)},Ap=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return He(l*1e3)/1e3},c=function(l){return He(l*1e4)/100};return Dp(b(["rgba(",re(c(r)),"%,",re(c(n)),"%,",re(c(a)),"%,",re(i(t)),")"]))},Bp=y(function(e,r,n){return p(y$,e,r,n)}),Xo=function(e){var r=e;return r},Na=x(an,1,1,1,1),Ue=y(function(e,r,n){return o(ve,function(a){return o(a,r,n)},e)}),Fp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Rp=$(function(e,r){var n=e,a=r.fY,t=r.f0;return p(Fp,n*a/t,n,n*(1-a-t)/t)}),Ep=function(e){var r=e.a,n=e.b,a=e.c;return p(Xt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},oo=$(function(e,r){return Ep(o(Rp,e,r))}),tr=Jv,Vp=function(e){return tr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ha=Le(function(e,r,n,a,t){var i=a.dp?1:-1,c=x(an,a.bW,a.bW,a.bW,i);return pe(t,e,c,Vp(a),a.dp,r,n)}),_l=Ve(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(il,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,h=o(F,w(Ha,e,r,n,a,g),i.M);return{M:h,U:i.U,fF:i.fF};case 3:var C=t.b,L=o(F,w(Ha,e,r,n,a,C),i.U);return{M:i.M,U:L,fF:i.fF};case 2:var _=t.a,S=o(F,w(Ha,e,r,n,a,_),i.fF);return{M:i.M,U:i.U,fF:S};default:var A=t.a;return p(Sn,x(_l,e,r,n,a),i,A)}}),jp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Cl=jp,io=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Wp=function(e){var r=e.Z,n=e.W,a=e.V;return x(io,518,r,n,a)},Gp=$(function(e,r){return{$:6,a:e,b:r}}),Np=Gp,yl=b([Wp({V:1,W:0,Z:!1}),x(Cl,!1,!1,!1,!1),o(Np,0,1)]),co=8,Ll=15,Ir=7681,Hp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Yp=$(function(e,r){return{$:0,a:e,b:r}}),Ip=Yp({df:1,$7:0,dV:5}),Up=Ip(b([{fv:o(Nr,-1,-1)},{fv:o(Nr,1,-1)},{fv:o(Nr,-1,1)},{fv:o(Nr,1,1)}])),Jp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fv"},uniforms:{}},lo=function(e){return p(no,{cn:e.cn,cM:e.cM,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},uo=function(e){return w(we,b([lo(e),x(Cl,!1,!1,!1,!1)]),Jp,Hp,Up,{})},Op=uo({a8:Ir,cn:0,cM:co,bl:Or,c2:Ll,bt:Ir,bu:Ir}),qp=516,Ko=5386,Zp=function(e){return o(Mn,2,e+4)},wl=function(e){return uo({a8:he,cn:Ll,cM:co,bl:qp,c2:Zp(e),bt:Ko,bu:Ko})},Xp=y(function(e,r,n){return hr(b([p(Ue,e,n,yl),b([wl(r),Op])]))}),Kp=$(function(e,r){return hr(o(Bt,Xp(e),r))}),Qp=function(e){var r=e.Z,n=e.W,a=e.V;return x(io,513,r,n,a)},e1=Qp({V:1,W:0,Z:!0}),r1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},n1=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,h=v.c;return r1(s)(m)(d)(f)(g)(h)(r)(n)(a)(t)});return o(l,i,c)},a1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qo=$(function(e,r){var n=e,a=r;return p(a1,32774,n,a)}),t1=1,ei=771,o1=770,vo=n1({bv:0,aH:o(Qo,t1,ei),by:0,bA:o(Qo,o1,ei),bF:0,bU:0}),Vr=b([e1,vo]),ri=function(e){var r=e;return Kr(r)},i1=function(e){return e},c1=function(e){return Qr({cz:i1({fY:e.H,f0:e.I,c5:e.J}),c3:ir({fY:e.q,f0:e.r,c5:e.s}),c4:ir({fY:e.t,f0:e.u,c5:e.v}),c6:ir({fY:e.w,f0:e.x,c5:e.y})})},Ya=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fY:a.fY*v.fY+a.f0*v.f0+a.c5*v.c5,f0:a.fY*l.fY+a.f0*l.f0+a.c5*l.c5,c5:a.fY*i.fY+a.f0*i.f0+a.c5*i.c5}}),Sl=$(function(e,r){var n=e,a=r,t=n.cz,i=t,c=a.fY-i.fY,l=a.f0-i.f0,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,g=f;return{fY:c*g.fY+l*g.f0+u*g.c5,f0:c*d.fY+l*d.f0+u*d.c5,c5:c*s.fY+l*s.f0+u*s.c5}}),xl=$(function(e,r){return{cz:o(Sl,e,Kr(r)),c3:o(Ya,e,Br(r)),c4:o(Ya,e,Fr(r)),c6:o(Ya,e,Rr(r))}}),l1=$(function(e,r){var n=oa(r),a=oa(e);return{dO:o(fe,a.dO,n.dO),dP:o(fe,a.dP,n.dP),dQ:o(fe,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),u1=function(e){var r=e;return T(r.fY,r.f0,r.c5)},Yn=$(function(e,r){var n=e,a=r;return a+n}),v1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Wn(Ee(a)),c=Wn(Ee(n)),l=Wn(Ee(t)),u=u1(r),v=u.a,s=u.b,m=u.c;return{dO:o(Yn,c,v),dP:o(Yn,i,s),dQ:o(Yn,l,m),dR:o(cr,c,v),dS:o(cr,i,s),dT:o(cr,l,m)}}),ni=R(function(e,r,n,a){var t=n.ey,i=2*n.eV*r,c=2*n.eU*r,l=2*n.eT*r,u=t.c5*r,v=t.f0*r,s=t.fY*r,m=ke(Rr(e)),d=Q(l*m.fY)+Q(c*m.f0)+Q(i*m.c5),f=ke(Fr(e)),g=Q(l*f.fY)+Q(c*f.f0)+Q(i*f.c5),h=ke(Br(e)),C=Q(l*h.fY)+Q(c*h.f0)+Q(i*h.c5),L=o(v1,T(C,g,d),o(Sl,e,p(yn,s,v,u)));if(a.$)return ne(L);var _=a.a;return ne(o(l1,_,L))}),bt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,h=n,C=i;e=f,r=g,n=h,a=C;continue e;case 1:var c=t.a,l=x(ni,e,r,c,n),f=e,g=r,h=l,C=i;e=f,r=g,n=h,a=C;continue e;case 2:var f=e,g=r,h=n,C=i;e=f,r=g,n=h,a=C;continue e;case 3:var c=t.a,l=x(ni,e,r,c,n),f=e,g=r,h=l,C=i;e=f,r=g,n=h,a=C;continue e;case 4:var u=t.a,f=e,g=r,h=x(bt,e,r,n,u),C=i;e=f,r=g,n=h,a=C;continue e;default:var v=t.a,s=t.b,m=o(xl,c1(v),e),d=r*v.bW,f=e,g=r,h=x(bt,m,d,n,b([s])),C=i;e=f,r=g,n=h,a=C;continue e}}else return n}),$1={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},f1=function(e){var r=e;return r},ai=uo({a8:Ir,cn:0,cM:co,bl:Or,c2:255,bt:Ir,bu:Ir}),la=0,s1=function(e){var r=e,n=o(Dr,Q(r.fY),o(Dr,Q(r.f0),Q(r.c5)));if(n){var a=r.c5/n,t=r.f0/n,i=r.fY/n,c=jc(i*i+t*t+a*a);return c*n}else return la},ye={by:0,ex:!1,bF:0,cI:0,bU:0,cY:0,fY:0,f0:0,c5:0},Be=$(function(e,r){var n=e,a=r;return tr({dx:n.fY,dy:n.bU,dz:a.fY,dA:a.bU,dB:n.f0,dC:n.bF,dD:a.f0,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cY,dK:n.cI,dL:a.cY,dM:a.cI})}),un=M({bd:o(Be,ye,ye),bK:o(Be,ye,ye),bL:o(Be,ye,ye),bM:o(Be,ye,ye)},x(an,0,0,0,0)),Pl=514,Tl=function(e){var r=e.Z,n=e.W,a=e.V;return x(io,515,r,n,a)},Ml=240,m1=b([Tl({V:1,W:0,Z:!0}),lo({a8:he,cn:Ml,cM:0,bl:Pl,c2:0,bt:he,bu:he}),vo]),d1=$(function(e,r){var n=e,a=r.fj,t=r.eQ,i=r.eq,c=Ee(a),l=c,u=Ee(t),v=u,s=n.cK;if(s.$){var d=s.a;return nt(v)?tr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):tr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return nt(v)?tr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):tr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),En=$(function(e,r){return(1&e>>r)===1?0:1}),p1=function(e){return b([Tl({V:1,W:0,Z:!0}),lo({a8:he,cn:Ml,cM:e,bl:Pl,c2:0,bt:he,bu:he}),vo])},b1=y(function(e,r,n){return hr(o(ve,function(a){var t=a<<4,i=x(an,o(En,a,0),o(En,a,1),o(En,a,2),o(En,a,3));return p(Ue,e,M(r,i),p1(t))},o($a,1,o(Mn,2,n)-1)))}),Ln=function(e){var r=e;return{fY:-r.fY,f0:-r.f0,c5:-r.c5}},h1=Ov,ti=function(e){var r=e;return Ln(Rr(r))},g1={cz:rn,c3:qt,c4:bl,c6:ba},_1=function(e){var r=nn(Kr(e)),n=ke(Rr(e)),a=ke(Fr(e)),t=ke(Br(e));return tr({dx:t.fY,dy:a.fY,dz:n.fY,dA:r.fY,dB:t.f0,dC:a.f0,dD:n.f0,dE:r.f0,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},C1=$(function(e,r){var n=r;return _1(o(xl,n,e))}),y1=function(e){return o(C1,g1,e)},L1=function(e){var r=e;return r.c0},w1=function(e){var r=e;return Br(r)},S1=y(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,c5:i}}),x1=function(e){var r=e;return Fr(r)},P1=function(e){var r=L1(e.ev),n=Qr({cz:ri(r),c3:w1(r),c4:x1(r),c6:Ln(ti(r))}),a=Kt(e.aP),t=a,i=x(bt,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=y1(r),u=o(sr,.99,o(fe,Ee(e.aJ),$t(al(c)))),v=ol(c),s=v.a,m=v.b,d=v.c,f=s1(p(S1,s,m,d)),g=o(sr,1.01,o(Yn,f,$t(tl(c)))),h=o(d1,e.ev,{eq:e.eq,eQ:g,fj:u}),C=h1(h).dM,L=C?ke(Ln(ti(r))):mt(ri(r)),_=function(){var ae=e.bY;switch(ae.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var ue=ae.a;return M(3,ue);case 4:var ue=ae.a;return M(4,ue);default:return M(5,0)}}(),S=_.a,A=_.b,U=e.bD,H=U,W=o(oo,H,e.b_),Y=W,I=tr({dx:0,dy:L.fY,dz:ha(Y),dA:e.ec,dB:0,dC:L.f0,dD:ga(Y),dE:f1(f),dF:0,dG:L.c5,dH:_a(Y),dI:S,dJ:0,dK:C,dL:0,dM:A}),j=pe(_l,I,l,h,$1,t,{M:P,U:P,fF:P}),Z=e.bJ;switch(Z.$){case 0:var O=Z.a;return hr(b([p(Ue,j.M,M(O,Na),Vr),p(Ue,j.U,un,Vr)]));case 1:var O=Z.a;return hr(b([p(Ue,j.M,un,Vr),b([ai]),p(Ue,j.fF,O.bd,yl),b([wl(0)]),p(Ue,j.M,M(O,Na),m1),p(Ue,j.U,un,Vr)]));default:var te=Z.a,ce=Z.b;return hr(b([p(Ue,j.M,M(ce,Na),Vr),b([ai]),o(Kp,j.fF,te),p(b1,j.M,ce,kr(te)),p(Ue,j.U,un,Vr)]))}},T1=function(e){return o(Lr,"width",Pe(e))},M1=$(function(e,r){var n=b([xp(1),kp(0),gp(!0),x(Lp,0,0,0,0)]),a=function(){var S=e.b$;switch(S.$){case 0:return T(n,"0",1);case 1:return T(o(F,Cp,n),"1",1);default:var A=S.a;return T(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Xo(v),m=o(X,"height",Pe(s)+"px"),d=Xo(u),f=d/s,g=o(wp,function(S){return P1({eq:f,ev:e.ev,aJ:e.aJ,aP:S.aP,bD:S.bD,bJ:S.bJ,ec:c,bY:S.bY,b_:S.b_})},r),h=o(X,"width",Pe(d)+"px"),C=e.aI,L=C,_=Ap(L);return p(Mp,"div",b([o(X,"padding","0px"),h,m]),b([M(i,p(Bp,t,b([T1(He(d*c)),Pp(He(s*c)),h,m,o(X,"display","block"),o(X,"background-color",_)]),g))]))}),z1=function(e){return o(M1,{b$:e.b$,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bD:e.bD,bJ:e.bJ,bY:e.bY,b_:e.b_}]))},zl=function(e){return e},oi=zl({fY:.31271,f0:.32902}),k1=$(function(e,r){var n=e,a=ke(r.eI),t=a.fY,i=a.f0,c=a.c5,l=o(oo,r.cc,r.b5),u=l;return{by:_a(u),ex:n,bF:ga(u),cI:0,bU:ha(u),cY:1,fY:-t,f0:-i,c5:-c}}),D1=function(e){return e},A1=function(e){return D1(1.2*o(Mn,2,e))},Ia=function(e){return e},B1={$:0},F1=B1,R1=$(function(e,r){var n=e,a=r;return J(a,n)>0}),ii=function(e){var r=e;return r},E1=function(e){e:for(;;){if(zr(e.e3,la)&&zr(e.e4,la))return ye;if(o(R1,Ee(e.e3),Ee(e.e4))){var r={b5:e.b5,e3:e.e4,e4:e.e3,ei:Ln(e.ei)};e=r;continue e}else{var n=Q(ii(e.e4)/Oe),a=Q(ii(e.e3)/Oe),t=ke(e.ei),i=t.fY,c=t.f0,l=t.c5,u=o(oo,Vc(1),e.b5),v=u;return{by:a*_a(v),ex:!1,bF:a*ga(v),cI:n/a,bU:a*ha(v),cY:3,fY:i,f0:c,c5:l}}}},ci=function(e){return E1({b5:e.b5,e3:e.cc,e4:la,ei:e.ei})},V1=function(e){var r=e;return r},kl=function(e){var r=p(ml,1667,25e3,V1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return zl({fY:n,f0:a})},Dl=function(e){return e},j1=kl(Dl(12e3)),W1=kl(Dl(5600)),G1=function(e){return{$:2,a:e}},N1=function(e){return G1(e)},H1=$(function(e,r){return{$:2,a:e,b:r}}),Al=function(e){return{$:0,a:e}},Vn=function(e){var r=e;return r},Y1=function(e){var r=e;return r.ex},I1=Al(un.a),U1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?M(o(F,a,i),c):M(i,o(F,a,c))});return p(vr,n,M(P,P),r)}),J1=function(e){var r=e;return tr({dx:r.fY,dy:r.bU,dz:0,dA:0,dB:r.f0,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cY,dK:r.cI,dL:0,dM:0})},O1=$e(function(e,r,n,a,t,i,c,l){var u=o(U1,Y1,b([Vn(e),Vn(r),Vn(n),Vn(a)])),v=u.a,s=u.b;if(v.b){var m=oe(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,h=f.b,C=h.a,L=h.b,_=L.a;return o(H1,o(ve,J1,v),{bd:o(Be,d,g),bK:o(Be,C,_),bL:o(Be,t,i),bM:o(Be,c,l)})}else return I1}else return Al({bd:o(Be,e,r),bK:o(Be,n,a),bL:o(Be,t,i),bM:o(Be,c,l)})}),q1=y(function(e,r,n){return ua(O1,e,r,n,ye,ye,ye,ye,ye)}),Z1=function(e){var r=o(k1,bp(e.fF),{b5:W1,eI:e.fN,cc:Ia(8e4)}),n=ci({b5:j1,cc:Ia(2e4),ei:e.ei}),a=ci({b5:oi,cc:Ia(15e3),ei:Ln(e.ei)}),t=p(q1,r,n,a);return z1({b$:N1(e.b9),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:A1(15),bJ:t,bY:F1,b_:oi})},X1=$(function(e,r){var n=e,a=r,t=Jr(a);return{fY:t*Jr(n),f0:t*Cn(n),c5:Cn(a)}}),K1=$(function(e,r){return Z1({aI:dp(e.es),ev:e.ev,aJ:pp(.5),b9:e.b9,aK:M(Zo(He(e.cR.fW)),Zo(He(e.cR.eX))),aP:r,fF:!0,fN:o(X1,pr(e.fM),pr(e.fO)),ei:ba})}),Q1=$(function(e,r){return o(K1,{es:x(yc,0,0,0,0),ev:Um(e),b9:e.b9,cR:e.cR,fM:o(Ne,"sunlight azimuth",e),fO:o(Ne,"sunlight elevation",e)},b([o(mp,e,r),ap(e)]))}),e3=$(function(e,r){return o(V,P,b([o(V,b([o(X,"position","absolute"),o(X,"width","100%")]),b([o(_m,e,r)])),o(Q1,e,r)]))}),r3=x(vm,e3,hm,bm,fm);const n3={Main:{init:r3(o(k,function(e){return xe({e2:e})},o(z,"inputs",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return xe({db:c,b9:i,eK:t,e8:a,fu:n,cR:r,fV:e})},o(z,"clock",le))},o(z,"devicePixelRatio",le))},o(z,"dt",le))},o(z,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return xe({eo:m,eB:s,de:v,eJ:u,e9:l,fw:c,fA:i,fG:t,eh:a})},o(z,"alt",K))},o(z,"control",K))},o(z,"down",K))},o(z,"downs",Qn(_n)))},o(z,"left",K))},o(z,"pressedKeys",Qn(_n)))},o(z,"right",K))},o(z,"shift",K))},o(z,"up",K))))},o(z,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return xe({de:v,e5:u,fe:l,fB:c,fC:i,eh:t,fY:a,f0:n})},o(z,"down",K))},o(z,"isDown",K))},o(z,"move",K))},o(z,"rightDown",K))},o(z,"rightUp",K))},o(z,"up",K))},o(z,"x",le))},o(z,"y",le))))},o(z,"screen",o(k,function(r){return o(k,function(n){return xe({eX:n,fW:r})},o(z,"height",le))},o(z,"width",le))))},o(z,"wheel",o(k,function(e){return o(k,function(r){return xe({eF:r,eG:e})},o(z,"deltaX",le))},o(z,"deltaY",le)))))))(0)}},B={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},a3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(B.keyboard.downs.push(f.code),B.keyboard.pressedKeys.push(f.code),r(f)&&(B.keyboard.control=!0),n(f)&&(B.keyboard.alt=!0),a(f)&&(B.keyboard.shift=!0),t(f)&&(B.keyboard.left=!0),i(f)&&(B.keyboard.right=!0),c(f)&&(B.keyboard.up=!0),l(f)&&(B.keyboard.down=!0))}),window.addEventListener("keyup",f=>{B.keyboard.pressedKeys=B.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(B.keyboard.control=!1,B.keyboard.pressedKeys=[]),n(f)&&(B.keyboard.alt=!1),a(f)&&(B.keyboard.shift=!1),t(f)&&(B.keyboard.left=!1),i(f)&&(B.keyboard.right=!1),c(f)&&(B.keyboard.up=!1),l(f)&&(B.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{B.pointer.x=-.5*B.screen.width+f.pageX,B.pointer.y=.5*B.screen.height-f.pageY,u(f)&&(B.pointer.down=!0,B.pointer.isDown=!0),v(f)&&(B.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{B.pointer.move=!0,B.pointer.x=-.5*B.screen.width+f.pageX,B.pointer.y=.5*B.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(B.pointer.up=!0,B.pointer.isDown=!1),v(f)&&(B.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(B.pointer.up=!0,B.pointer.isDown=!1),v(f)&&(B.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{B.wheel.deltaX=f.deltaX,B.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(B)}),window.addEventListener("focus",f=>{s(B)}),window.addEventListener("visibilitychange",f=>{s(B)}),window.addEventListener("resize",()=>{B.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,h=g-B.clock;h<.009||(B.dt=h,B.clock=g,e.ports.tick.send(B),m(B)),window.requestAnimationFrame(d)}},t3=()=>{Ua("pointerdown"),Ua("wheel"),Ua("keydown")},Ua=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},o3=n3.Main.init({node:document.querySelector("#app div"),flags:{inputs:B}});t3();a3(o3);
