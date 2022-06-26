const ju=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};ju();function hr(e,r,n){return n.a=e,n.f=r,n}function $(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ft(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Vt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ta(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Nu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Gu=[];function Wu(e){return e.length}var Hu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Xu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),Iu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Uu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ju()),r});function Ju(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function br(e,r){for(var n,a=[],t=lt(e,r,0,a);t&&(n=a.pop());t=lt(n.a,n.b,0,a));return t}function lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=ti(e),r=ti(r));for(var t in e)if(!lt(e[t],r[t],n+1,a))return!1;return!0}$(br);$(function(e,r){return!br(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Ou=$(function(e,r){var n=J(e,r);return n<0?yc:n?Df:wc}),zn=0;function k(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Ze(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var qu=$(nr);function _(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function Ca(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Yu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ca(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return _(Ca(r).sort(function(n,a){var t=o(e,n,a);return t===wc?0:t===yc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Zu=$(Math.pow);$(function(e,r){return r%e});var Qu=$(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ku=Math.PI,ev=Math.cos,rv=Math.sin,nv=Math.tan;$(Math.atan2);function av(e){return e}function tv(e){return e===1/0||e===-1/0}var ov=Math.ceil,iv=Math.floor,cv=Math.round,lv=Math.sqrt,Xo=Math.log,uv=isNaN;function vv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var $v=$(function(e,r){return e+r});function fv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function sv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function dv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var mv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),pv=$(function(e,r){return r.split(e)}),bv=$(function(e,r){return r.join(e)}),gv=x(function(e,r,n){return n.slice(e,r)});function hv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var _v=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),wv=$(function(e,r){return r.indexOf(e)>-1}),yv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var xv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function qi(e){return e+""}function Sv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Tv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Cv(e){return Ca(e).join("")}function Lv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Pv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function zv(e){return{$:0,a:e}}function Et(e){return{$:2,b:e}}var kv=Et(function(e){return typeof e=="boolean"?ue(e):Ye("a BOOL",e)}),Mv=Et(function(e){return typeof e=="number"?ue(e):Ye("a FLOAT",e)}),Dv=Et(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ye("a STRING",e)});function Bv(e){return{$:3,b:e}}var Av=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Fv=$(function(e,r){return{$:10,b:r,h:e}}),Vv=$(function(e,r){return _r(e,[r])}),Ev=x(function(e,r,n){return _r(e,[r,n])});E(function(e,r,n,a){return _r(e,[r,n,a])});he(function(e,r,n,a,t){return _r(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Ft(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(qt,"This is not valid JSON! "+a.message,r))}});var Yi=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ye("null",r);case 3:return jn(r)?Io(e.b,r,_):Ye("a LIST",r);case 4:return jn(r)?Io(e.b,r,Rv):Ye("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ye("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:ye(o(oi,n,v.a));case 7:var a=e.e;if(!jn(r))return Ye("an ARRAY",r);if(a>=r.length)return Ye("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:ye(o(xc,a,v.a));case 8:if(typeof r!="object"||r===null||jn(r))return Ye("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return ye(o(oi,i,v.a));t=nr(k(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ie(v))return v;s=nr(v.a,s)}return ye(Bf(Fe(s)));case 1:return ye(o(qt,e.a,r));case 0:return ue(e.a)}}function Io(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return ye(o(xc,i,c.a));t[i]=c.a}return ue(n(t))}function jn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Rv(e){return o(Yf,e.length,function(r){return e[r]})}function Ye(e,r){return ye(o(qt,"Expecting "+e,r))}function Wr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wr(e.b,r.b);case 6:return e.d===r.d&&Wr(e.b,r.b);case 7:return e.e===r.e&&Wr(e.b,r.b);case 9:return e.f===r.f&&Uo(e.g,r.g);case 10:return e.h===r.h&&Wr(e.b,r.b);case 11:return Uo(e.g,r.g)}}function Uo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wr(e[a],r[a]))return!1;return!0}var jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function Zi(e){return e}x(function(e,r,n){return n[e]=r,n});function Ar(e){return{$:0,a:e}}function Nv(e){return{$:1,a:e}}function $r(e){return{$:2,b:e,c:null}}var ut=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Gv(e){return{$:5,b:e}}var Wv=0;function Rt(e){var r={$:0,e:Wv++,f:e,g:null,h:[]};return jt(r),r}function Qi(e){return $r(function(r){r(Ar(Rt(e)))})}function Ki(e,r){e.h.push(r),jt(e)}var Hv=$(function(e,r){return $r(function(n){Ki(e,r),n(Ar(zn))})}),Na=!1,Jo=[];function jt(e){if(Jo.push(e),!Na){for(Na=!0;e=Jo.shift();)Xv(e);Na=!1}}function Xv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,jt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Nt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Nt(e,r,n,a,t,i){var c=o(Yi,e,r?r.flags:void 0);Ie(c)||Qr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Iv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),qo(l,b.b,t(v))}return qo(l,u.b,t(v)),d?{ports:d}:{}}var Ke={};function Iv(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Jv(t,r)}return n}function Uv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Jv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ut,l,Gv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Rt(o(ut,l,e.b))}var Ov=$(function(e,r){return $r(function(n){e.g(r),n(Ar(zn))})});$(function(e,r){return o(Hv,e.h,{$:0,a:r})});function ec(e){return function(r){return{$:1,k:e,l:r}}}function qv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Oo=[],Ga=!1;function qo(e,r,n){if(Oo.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=Oo.shift();)Yv(a.p,a.q,a.r);Ga=!1}}function Yv(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)Ki(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Zv(e,t,a,r.l);n[t]=Qv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function Zv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function Qv(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function Kv(e){Ke[e]&&Qr(3)}$(function(e,r){return r});function e$(e,r){return Kv(e),Ke[e]={f:r$,u:r,a:n$},ec(e)}var r$=$(function(e,r){return function(n){return e(r(n))}});function n$(e,r){var n=L,a=Ke[e].u,t=Ar(null);Ke[e].b=t,Ke[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(Yi,a,c);Ie(l)||Qr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,cr=typeof document!="undefined"?document:{};function Gt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function vt(e){return{$:0,a:e}}var rc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Wt(n),e:t,f:e,b:i}})}),fr=rc(void 0),a$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Wt(n),e:t,f:e,b:i}})}),t$=a$(void 0);function o$(e,r,n,a){return{$:3,d:Wt(e),g:r,h:n,i:a}}var i$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return wr([e,r],function(){return e(r)})});x(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return Vt(e,r,n,a,t,i,c,l)})});Ft(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return Ta(e,r,n,a,t,i,c,l,u)})});var nc=$(function(e,r){return{$:"a0",n:e,o:r}}),c$=$(function(e,r){return{$:"a1",n:e,o:r}}),ac=$(function(e,r){return{$:"a2",n:e,o:r}}),kn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function l$(e){return e=="script"?"p":e}function u$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(nc,r.n,v$(e,r.o)):r});function v$(e,r){var n=eo(r);return{$:r.$,a:n?p(Zf,n<3?$$:f$,Me(e),r.a):o(ua,e,r.a)}}var $$=$(function(e,r){return k(e(r.a),r.b)}),f$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Wt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Yo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Yo(c,t,i):c[t]=i}return r}function Yo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return $t(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),$t(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Gt(c,pr(n===1?l[u]:l[u].b,r));return c}function $t(e,r,n){for(var a in n){var t=n[a];a==="a1"?s$(e,t):a==="a0"?p$(e,r,t):a==="a3"?d$(e,t):a==="a4"?m$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function s$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function d$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function m$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function p$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=b$(r,i),e.addEventListener(t,c,Ht&&{passive:eo(i)<2}),a[t]=c}}var Ht;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ht=!0}}))}catch{}function b$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=eo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function g$(e,r){return e.$==r.$&&Wr(e.a,r.a)}function tc(e,r){var n=[];return Ue(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ue(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=C$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ue(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!h$(d,m):d!==m)&&_e(n,2,a,m),Ue(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:Zo(e,r,n,a,_$);return;case 2:Zo(e,r,n,a,w$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Xt(e.d,r.d);w&&_e(n,4,a,w);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function h$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Zo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Xt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&g$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function _$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ue(s,i[v],n,++a),a+=s.b||0}}function w$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,h=g.b,T=b.b,M=void 0,G=void 0;if(w===y){f++,Ue(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;G=y===N}if(R){var F=R.a,Y=R.b;M=w===F}if(M&&G){f++,Ue(h,Y,t,f),ln(i,t,w,T,m,c),f+=h.b||0,f++,un(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(M){f++,ln(i,t,y,T,m,c),Ue(h,Y,t,f),f+=h.b||0,d+=1,m+=2;continue}if(G){f++,un(i,t,w,h,f),f+=h.b||0,f++,Ue(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,un(i,t,w,h,f),ln(i,t,y,T,m,c),f+=h.b||0,f++,Ue(W,Y,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;un(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];ln(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var oc="_elmW6BL";function ln(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ln(e,r,n+oc,a,t,i)}function un(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ue(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}un(e,r,n+oc,a,t)}function ic(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)ic(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&vn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&vn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return vn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,h=t+(y.b||0);if(t<=u&&u<=h&&(a=vn(b[w],y,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function cc(e,r,n,a){return n.length===0?e:(ic(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=y$(t,a);t===e&&(e=i)}return e}function y$(e,r){switch(r.$){case 0:return x$(e,r.s,r.u);case 4:return $t(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return S$(e,r);case 5:return r.s(e);default:Qr(10)}}function x$(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function S$(e,r){var n=r.s,a=T$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Gt(e,a),e}function T$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Gt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function It(e){if(e.nodeType===3)return vt(e.textContent);if(e.nodeType!==1)return vt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(kn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=nr(It(v[a]),u);return p(fr,l,r,u)}function C$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var L$=E(function(e,r,n,a){return Nt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=It(l);return lc(i,function(v){var s=c(v),d=tc(u,s);l=cc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Nt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=cr.title,v=cr.body,s=It(v);return lc(i,function(d){oa=c;var m=l(d),f=fr("body")(L)(m.eu),g=tc(s,f);v=cc(v,s,g,t),s=f,oa=0,u!==m.fK&&(cr.title=u=m.fK)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function lc(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(ao,ro,$r(function(){r&&history.go(r),e()}))});$(function(e,r){return o(ao,ro,$r(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(ao,ro,$r(function(){history.replaceState({},"",r),e()}))});var P$={addEventListener:function(){},removeEventListener:function(){}},z$=typeof window!="undefined"?window:P$;x(function(e,r,n){return Qi($r(function(a){function t(i){Rt(n(i))}return e.addEventListener(r,t,Ht&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?re(n.a):q});function uc(e,r){return $r(function(n){ca(function(){var a=document.getElementById(e);n(a?Ar(r(a)):Nv(Kf(e)))})})}function k$(e){return $r(function(r){ca(function(){r(Ar(e()))})})}$(function(e,r){return uc(r,function(n){return n[e](),zn})});$(function(e,r){return k$(function(){return z$.scroll(e,r),zn})});x(function(e,r,n){return uc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var M$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var D$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(C(nl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(nl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var B$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/A$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function A$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ut=new Float64Array(3),Qo=new Float64Array(3),Ko=new Float64Array(3),F$=x(function(e,r,n){return new Float64Array([e,r,n])}),V$=function(e){return e[0]},E$=function(e){return e[1]},R$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var j$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function vc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(vc);function $c(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(vc(e,r,n),n)}$($c);function fc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/fc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var N$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$($n);function ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(ft);$(function(e,r){var n,a=Ut,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var G$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var W$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},H$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/X$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function X$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var I$=new Float64Array(16),U$=new Float64Array(16),J$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},O$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(sc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return sc(c,l,i,t,n,a)});function dc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(dc);E(function(e,r,n,a){return dc(e,r,n,a,-1,1)});function mc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],h=e[15],T=r[0],M=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],ke=r[14],Te=r[15];return n[0]=a*T+l*M+d*G+b*j,n[1]=t*T+u*M+m*G+w*j,n[2]=i*T+v*M+f*G+y*j,n[3]=c*T+s*M+g*G+h*j,n[4]=a*R+l*N+d*W+b*F,n[5]=t*R+u*N+m*W+w*F,n[6]=i*R+v*N+f*W+y*F,n[7]=c*R+s*N+g*W+h*F,n[8]=a*Y+l*Q+d*oe+b*ve,n[9]=t*Y+u*Q+m*oe+w*ve,n[10]=i*Y+v*Q+f*oe+y*ve,n[11]=c*Y+s*Q+g*oe+h*ve,n[12]=a*te+l*se+d*ke+b*Te,n[13]=t*te+u*se+m*ke+w*Te,n[14]=i*te+v*se+f*ke+y*Te,n[15]=c*te+s*se+g*ke+h*Te,n}$(mc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],h=r[4],T=r[5],M=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*h+c*T+v*M,n[5]=t*h+l*T+s*M,n[6]=i*h+u*T+d*M,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+d*R,n[11]=0,n[12]=a*N+c*W+v*F+m,n[13]=t*N+l*W+s*F+f,n[14]=i*N+u*W+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,Ut);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/fc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,h=g+f,T=b-m,M=g-f,G=c*c*v+u,j=w+d,R=b+m,N=w-d,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],ke=n[7],Te=n[8],sr=n[9],dr=n[10],ja=n[11],Fu=n[12],Vu=n[13],Eu=n[14],Ru=n[15];return a[0]=F*y+ve*h+Te*T,a[1]=Y*y+te*h+sr*T,a[2]=Q*y+se*h+dr*T,a[3]=oe*y+ke*h+ja*T,a[4]=F*M+ve*G+Te*j,a[5]=Y*M+te*G+sr*j,a[6]=Q*M+se*G+dr*j,a[7]=oe*M+ke*G+ja*j,a[8]=F*R+ve*N+Te*W,a[9]=Y*R+te*N+sr*W,a[10]=Q*R+se*N+dr*W,a[11]=oe*R+ke*N+ja*W,a[12]=Fu,a[13]=Vu,a[14]=Eu,a[15]=Ru,a});function q$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(q$);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Y$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Y$);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=$c(e,r,Ut),t=la(ft(n,a,Qo),Qo),i=la(ft(a,t,Ko),Ko),c=I$,l=U$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,mc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ei=0;function wn(e,r){for(;r.b;r=r.b)e(r.a)}function Jt(e){for(var r=0;e.b;e=e.b)r++;return r}var Z$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Q$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),K$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),ef=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),rf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),nf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),af=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),tf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),of=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),cf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),lf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},uf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},vf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},$f=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},bc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},ff=function(e){e.gl.disable(e.gl.CULL_FACE)},sf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},df=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},mf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ri=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],pf=[uf,vf,$f,pc,bc,ff,sf,df,mf];function ni(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function bf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function gf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[y]:w[y][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][y]:w[T][y][h]})}var u=gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Jt(n.b)*s);wn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function hf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=_f(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Jt(r.b),indexBuffer:null,buffers:{}}}function _f(e,r){var n=new Uint32Array(Jt(e)*r),a=0,t;return wn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ai(e,r){return e+"#"+r}var hc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),pc(n),bc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ai(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ei++,v||(v=ni(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ei++,s||(s=ni(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=bf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=wf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ai(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),yf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=hf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=gf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,h=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,y*T)}for(n.toggle=!n.toggle,wn(G0(n),i.a),u=0;u<ri.length;u++){var M=n[ri[u]];M.toggle!==n.toggle&&M.enabled&&(pf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return wn(t,e.g),r});function wf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var y=c++;return function(h){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,y),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function yf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var xf=x(function(e,r,n){return o$(r,{g:n,f:{},h:e},kf,Mf)}),Sf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Tf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Cf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Lf=$(function(e,r){e.contextAttributes.antialias=!0}),Pf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),zf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function kf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};wn(function(t){return o(N0,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Z$(function(){return o(hc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Mf(e,r){return r.f=e.f,hc(r)}var z=qu,Nn=Uu,_c=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Nn,e,l,v)}else{var u=c.a;return p(Nn,i,l,u)}});return p(Nn,i,p(Nn,e,r,t),a)}),Ot=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Ot,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ti=function(e){return p(Ot,x(function(r,n,a){return o(z,k(r,n),a)}),L,e)},wc=1,Df=2,yc=0,ye=function(e){return{$:1,a:e}},qt=$(function(e,r){return{$:3,a:e,b:r}}),oi=$(function(e,r){return{$:0,a:e,b:r}}),xc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Bf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Af=_v,Ff=jv,Be=qi,Tr=$(function(e,r){return o(bv,e,Ca(r))}),Yt=$(function(e,r){return _(o(pv,e,r))}),Sc=function(e){return o(Tr,`
    `,o(Yt,`
`,e))},La=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(La,$(function(r,n){return n+1}),0,e)},Vf=Yu,Ef=x(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(z,r,n);e=a,r=t,n=i;continue e}else return n}),Dr=$(function(e,r){return p(Ef,e,r,L)}),Tc=$(function(e,r){return p(Vf,e,o(Dr,0,Mr(r)-1),r)}),er=Lv,Cc=function(e){var r=er(e);return 97<=r&&r<=122},Lc=function(e){var r=er(e);return r<=90&&65<=r},Rf=function(e){return Cc(e)||Lc(e)},jf=function(e){var r=er(e);return r<=57&&48<=r},Nf=function(e){return Cc(e)||Lc(e)||jf(e)},Fe=function(e){return p(La,z,L,e)},Kr=fv,Gf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Sc(Wf(r))))}),Wf=function(e){return o(Hf,e,L)},Hf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Kr(n);if(b.$===1)return!1;var w=b.a,y=w.a,h=w.b;return Rf(y)&&o(Af,Nf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(z,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(z,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Mr(s))+" ways:"));return o(Tr,`

`,o(z,g,o(Tc,Gf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Sc(o(Ff,4,f))+(`

`+m))}}),Ve=32,st=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dt=Gu,Zt=ov,Qt=$(function(e,r){return Xo(r)/Xo(e)}),Xf=av,yn=Zt(o(Qt,2,Ve)),Pc=C(st,0,yn,dt,dt),zc=Hu,kc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Mc=iv,mt=Wu,ze=$(function(e,r){return J(e,r)>0?e:r}),If=function(e){return{$:0,a:e}},Kt=Xu,Uf=$(function(e,r){e:for(;;){var n=o(Kt,Ve,e),a=n.a,t=n.b,i=o(z,If(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),Jf=function(e){var r=e.a;return r},Of=$(function(e,r){e:for(;;){var n=Zt(r/Ve);if(n===1)return o(Kt,Ve,e).a;var a=o(Uf,e,L),t=n;e=a,r=t;continue e}}),Dc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Mc(o(Qt,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(Of,t,r.l);return C(st,mt(r.p)+n,o(ze,5,a*yn),i,r.p)}else return C(st,mt(r.p),yn,dt,r.p)}),qf=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Dc,!1,{z:a,l:n/Ve|0,p:t});var i=kc(p(zc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(z,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Yf=$(function(e,r){if(e<=0)return Pc;var n=e%Ve,a=p(zc,n,e-n,r),t=e-n-Ve;return S(qf,r,t,e,L,a)}),Ie=function(e){return!e.$},B=Fv,Z=kv,D=Av,$e=Mv,ua=Vv,Zf=Ev,Me=zv,eo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=fr("div"),Qf=function(e){return{$:2,a:e}},Bc=$(function(e,r){return e}),Ac=$(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Lr=function(e){return e},Kf=Lr,ii=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),es=wv,Cr=sv,Hr=gv,Mn=$(function(e,r){return e<1?r:p(Hr,e,Cr(r),r)}),Pa=xv,za=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Hr,0,e,r)}),Fc=Sv,ci=he(function(e,r,n,a,t){if(za(t)||o(es,"@",t))return q;var i=o(Pa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Fc(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return re(we(ii,e,o(ka,c,t),u,r,n,a))}else return re(we(ii,e,t,q,r,n,a))}),li=E(function(e,r,n,a){if(za(a))return q;var t=o(Pa,"/",a);if(t.b){var i=t.a;return S(ci,e,o(Mn,i,a),r,n,o(ka,i,a))}else return S(ci,e,"/",r,n,a)}),ui=x(function(e,r,n){if(za(n))return q;var a=o(Pa,"?",n);if(a.b){var t=a.a;return C(li,e,re(o(Mn,t+1,n)),r,o(ka,t,n))}else return C(li,e,q,r,n)});$(function(e,r){if(za(r))return q;var n=o(Pa,"#",r);if(n.b){var a=n.a;return p(ui,e,re(o(Mn,a+1,r)),o(ka,a,r))}else return p(ui,e,q,r)});var rs=yv,ro=function(e){},Dn=Ar,ns=Dn(0),Vc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(La,e,r,Fe(d)):C(Vc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),tr=x(function(e,r,n){return C(Vc,e,r,0,n)}),ee=$(function(e,r){return p(tr,$(function(n,a){return o(z,e(n),a)}),L,r)}),va=ut,no=$(function(e,r){return o(va,function(n){return Dn(e(n))},r)}),as=x(function(e,r,n){return o(va,function(a){return o(va,function(t){return Dn(o(e,a,t))},n)},r)}),ts=function(e){return p(tr,as(z),Dn(L),e)},os=Ov,is=$(function(e,r){var n=r;return Qi(o(va,os(e),n))}),cs=x(function(e,r,n){return o(no,function(a){return 0},ts(o(ee,is(e),r)))}),ls=x(function(e,r,n){return Dn(0)}),us=$(function(e,r){var n=r;return o(no,e,n)});Ke.Task=Uv(ns,cs,ls,us);var vs=ec("Task"),ao=$(function(e,r){return vs(o(no,e,r))}),$s=L$,fs=vv,$a={$:1},Ec=function(e){return{$:2,a:e}},Ma={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),en=function(e){var r=e.b.B;return r.a},ss=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ne,r,{B:i,ab:c,T:o(z,a,n)}))}else return q},Rc=function(e){var r=e.b;return o(Ne,Ma,r)},gr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ds=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Rc(n):n;case 2:var i=a.a.cY;return(J(i+r.eJ,en(n).b7)>0?o(ae,ss,gr(o(Ne,$a,t))):Lr)(o(Ne,Ec({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ac,l.eA,Ze(r,{b7:l.b7+r.eJ})),s=o(e,v,u);return o(Ne,Ma,{B:k(v,s),ab:L,T:o(z,t.B,t.T)})}}),jc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ms=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(z,a,n);e=i,r=c,n=l;continue e}else return n}}),ps=$(function(e,r){return Fe(p(ms,e,r,L))}),Nc=x(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(z,h,o(z,c,o(z,s,o(z,b,o(ps,r-4,w))))):o(z,h,o(z,c,o(z,s,o(z,b,p(Nc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,h=y.a;return _([h])}}),bs=$(function(e,r){return p(Nc,0,e,r)}),gs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(_([a]),t)),c=o(bs,e,i),l=o(jc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,$a,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,$a,{B:d,ab:L,T:m})}else return r}}),hs=function(e){var r=e.b;return o(Ne,$a,r)},_s=function(e){var r=e.b;return o(Ne,Ec({cY:en(e).b7}),r)},ws=$(function(e,r){switch(e.$){case 1:return hs(r);case 2:return Rc(r);case 3:return _s(r);default:var n=e.a;return o(gs,n,r)}}),Gc=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),ys=$(function(e,r){return Ze(r,{av:e(r.av)})}),xs=function(e){return{$:3,a:e}},Ss=function(e){return{$:2,a:e}},Ts=$(function(e,r){return{$:0,a:e,b:r}}),Cs=$(function(e,r){return{$:1,a:e,b:r}}),Ae=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},to=Tv,Ls=x(function(e,r,n){return o(gr,0/0,to(o(e,r,n)))}),Wc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ps=mv,Hc=function(e){return p(Ps,z,L,e)},zs=$(function(e,r){var n=o(Wc,function(a){return a!=="0"&&a!=="."},Hc(r));return le(e&&n?"-":"",r)}),me=qi,pt=$v,Xc=Pv,Ic=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Kr(n);if(a.$===1)return"01";var t=a.a;return o(pt,"0",Ic(t))}else{var i=er(r);return i>=48&&i<57?o(pt,Xc(i+1),n):"0"}},bt=tv,ks=uv,Da=function(e){return o(pt,e,"")},Uc=x(function(e,r,n){return e<=0?n:p(Uc,e>>1,le(r,r),e&1?le(n,r):n)}),xn=$(function(e,r){return p(Uc,e,r,"")}),gt=x(function(e,r,n){return le(n,o(xn,e-Cr(n),Da(r)))}),ht=dv,Jc=function(e){var r=o(Yt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Ms=function(e){var r=o(Yt,"e",me(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(gr,0,Fc(o(rs,"+",t)?o(Mn,1,t):t)),c=Jc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(gr,"0",o(Ae,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ae,Gc(Da),Kr(le(o(xn,O(i),"0"),v))))):p(gt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ds=x(function(e,r,n){if(bt(n)||ks(n))return me(n);var a=n<0,t=Jc(Ms(O(n))),i=t.a,c=t.b,l=Cr(i)+r,u=le(o(xn,-l+1,"0"),p(gt,l,"0",le(i,c))),v=Cr(u),s=o(ze,1,l),d=o(e,a,p(Hr,s,v,u)),m=p(Hr,0,s,u),f=d?ht(o(gr,"1",o(Ae,Ic,Kr(ht(m))))):m,g=Cr(f),b=f==="0"?f:r<=0?le(f,o(xn,O(r),"0")):J(r,Cr(c))<0?p(Hr,0,g-r,f)+("."+p(Hr,g-r,g,f)):le(i+".",p(gt,r,"0",c));return o(zs,a,b)}),mn=Ds($(function(e,r){var n=Kr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Bs=Ls(mn),As=x(function(e,r,n){var a=o(Qt,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Bs,t,n)}),Oc=Ou,qc=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Oc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},Or=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,y),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),_t=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Oc,e,t);switch(u){case 0:return S(Or,a,t,i,p(_t,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Or,a,t,i,c,p(_t,e,r,l))}}),Yn=x(function(e,r,n){var a=p(_t,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Fs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Yc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,y))}else return e},vi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,y=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,y))}else return e},Vs=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,vi(r)}else break e;else return c.a,c.d,vi(r);else break e;return r}}),Zn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Zn(t),l);var u=Yc(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Or,v,s,d,Zn(m),f)}else return ar}else return S(X,r,n,a,Zn(t),l)}else return ar},pn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(pn,e,i),c);var u=Yc(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Or,v,s,d,o(pn,e,m),f)}else return ar}else return S(X,n,a,t,o(pn,e,i),c);else return o(Es,e,Vt(Vs,e,r,n,a,t,i,c))}),Es=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(br(e,a)){var l=Fs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Or,n,u,v,i,Zn(c))}else return ar}else return S(Or,n,a,t,i,o(pn,e,c))}else return ar}),Rs=$(function(e,r){var n=o(pn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Gn=x(function(e,r,n){var a=r(o(qc,e,n));if(a.$)return o(Rs,e,n);var t=a.a;return p(Yn,e,t,n)}),js=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Gn,r,Ae(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Cs,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Gn,r,Ae(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ts,k(i,c),p(As,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Gn,r,Ae(function(a){return a.$===3?xs(n):a}));default:var r=e.a,n=e.b;return o(Gn,r,Ae(function(a){return a.$===2?Ss(n):a}))}},Ns=function(e){return ys(js(e))},Gs=$(function(e,r){return o(ee,Ns(e),r)}),Ws=$(function(e,r){return Ze(r,{eA:o(Gs,e,r.eA)})}),Hs=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ze(a,{B:o(Gc,Ws(e),a.B)}))}),Xs=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),Is=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ze(t,{B:o(Xs,o(e,i.a,r),i)}))}),Us=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ze(a,{aL:!a.aL});case 2:var t=n.a;return Ze(a,{G:p(ds,e,t,a.G)});case 3:var i=n.a;return Ze(a,{G:o(Hs,i,a.G)});case 4:var c=n.a;return Ze(a,{G:p(Is,r,c,a.G)});default:var l=n.a;return Ze(a,{G:o(ws,l,a.G)})}}),Js=$(function(e,r){return o(Ne,Ma,{B:k(e,r(e)),ab:L,T:L})}),Os=qv,$i=Os(L),fa=Bv,Sn=Dv,qs=e$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Me({b7:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",fa(Sn)))},o(D,"left",Z))},o(D,"pressedKeys",fa(Sn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),Ys=function(e){return{$:4,a:e}},Zs={$:0},Qs=Zi,Xe=$(function(e,r){return o(ac,e,Qs(r))}),U=Xe("className"),Ks=function(e){var r=e.b.B;return r.b},sa=Xe("id"),ed=i$,da=ed,rd=c$,ge=rd,nd={$:1},ad=function(e){return{$:3,a:e}},td=function(e){return{$:5,a:e}},fi=fr("a"),oo=fr("button"),od=kn("d"),Zc=rc("http://www.w3.org/2000/svg"),id=Zc("path"),cd=Zc("svg"),ld=kn("viewBox"),bn=function(e){return o(cd,_([ld("0 0 100 100"),o(ge,"width","100%"),o(ge,"height","100%")]),_([o(id,_([od(e)]),L)]))},si=function(e){return o(Xe,"href",u$(e))},Ir={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ud=function(e){return{$:0,a:e}},Qc=nc,Kc=$(function(e,r){return o(Qc,e,ud(r))}),io=function(e){return o(Kc,"click",Me(e))},di=Xe("target"),vd=Xe("title"),wt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(wt,e,i),o(wt,e,c))}),$d=vt,be=$d,fd=function(e){return p(Ot,x(function(r,n,a){return o(z,n,a)}),L,e)},sd=$(function(e,r){return{$:3,a:e,b:r}}),dd=$(function(e,r){return{$:2,a:e,b:r}}),md=$(function(e,r){return{$:0,a:e,b:r}}),pd=$(function(e,r){return{$:1,a:e,b:r}}),yr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bd=C(yr,0/255,0/255,0/255,1),gd=Zi,hd=$(function(e,r){return o(ac,e,gd(r))}),_d=hd("checked"),Oe=cv,wd=x(function(e,r,n){return le(o(xn,e-Cr(n),Da(r)),n)}),ma=Qu,el=function(e){var r=function(n){return n<10?Be(n):Da(Xc(87+n))};return e<16?r(e):le(el(e/16|0),r(o(ma,16,e)))},yd=o(ae,el,o(wd,2,"0")),co=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},xd=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b5;return o(Tr,"",o(z,"#",o(ee,o(ae,Oe,yd),_([n*255,a*255,t*255]))))},yt=Xe("htmlFor"),xt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Sd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(z,t,n)}),rl=$(function(e,r){return p(tr,Sd(e),L,r)}),nl=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Td=D$,Cd=Cv,Ld=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Pd=M$,zd=function(e){return o(Pd,{ew:!1,fe:!1},e)},al=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},kd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Md=function(e){return{$:2,a:e}},Dd=function(e){return{$:0,a:e}},Bd=function(e){return{$:1,a:e}},Wa=$(function(e,r){return er(r)-er(e)}),Ha=x(function(e,r,n){var a=er(n);return J(er(e),a)<1&&J(a,er(r))<1}),Ad=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Bd(r))},a=p(Ha,"0","9",r)?ue(o(Wa,"0",r)):p(Ha,"a","z",r)?ue(10+o(Wa,"a",r)):p(Ha,"A","Z",r)?ue(10+o(Wa,"A",r)):ye(Dd(r));return o(pa,n,a)}),tl=$(function(e,r){var n=Kr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return ue(c+l*e)},o(tl,e,i))},o(Ad,e,t))}),Fd=$(function(e,r){return 2<=e&&e<=36?o(tl,e,ht(r)):ye(Md(e))}),Vd=Fd(16),ol=x(function(e,r,n){return C(yr,e,r,n,1)}),Ed=E(function(e,r,n,a){return C(yr,e,r,n,a)}),Bn=Zu,Rd=$(function(e,r){var n=o(Bn,10,e);return Oe(r*n)/n}),jd=hv,Nd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Hc(n);if(a.b&&!a.b.b){var t=a.a;return Cd(_([t,t]))}else return n};return o(ae,jd,o(ae,function(n){return o(Ae,function(a){return p(Td,1,a,n)},zd(e))},o(ae,xt(al),o(ae,Ae(function(n){return n.fF}),o(ae,Ae(rl(Lr)),o(ae,Ld("Parsing hex regex failed"),pa(function(n){var a=o(ee,o(ae,r,o(ae,Vd,kd(Xf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Ed,t/255,c/255,u/255,o(Rd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(ol,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ba=fr("input"),St=fr("label"),Tt=Xe("name"),il=$(function(e,r){return p(tr,D,r,e)}),Gd=o(il,_(["target","checked"]),Z),Wd=function(e){return o(Kc,"change",o(ua,e,Gd))},Hd=function(e){return k(e,!0)},Xd=function(e){return{$:1,a:e}},Id=$(function(e,r){return o(Qc,e,Xd(r))}),Ud=o(il,_(["target","value"]),Sn),lo=function(e){return o(Id,"input",o(ua,Hd,o(ua,e,Ud)))},cl=Xe("max"),ll=Xe("min"),ul=function(e){return o(Xe,"step",e)},ga=Xe("type"),uo=Xe("value"),mi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(I,L,_([o(St,_([yt(r)]),_([o(I,_([U("relative w-full")]),_([o(I,_([U("inline-block")]),_([be(r)])),o(I,_([U("inline-block float-right")]),_([be(me(n))]))]))])),o(ba,_([ga("range"),o(ge,"width","100%"),sa(r),Tt(r),ll(me(a)),cl(me(t)),uo(me(n)),ul(me(i)),lo(o(ae,to,o(ae,gr(42),c)))]),L)]))},Jd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Od=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,_([o(I,_([U("mb-2")]),_([o(St,_([yt(e)]),_([be(e)]))])),o(ba,_([ga("checkbox"),sa(e),Tt(e),Wd(sd(e)),_d(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return mi({cg:e,cs:i,cw:t,cA:md(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return mi({cg:e,cs:i,cw:t,cA:o(ae,Oe,pd(e)),cW:1,c1:c});default:var c=r.a;return o(I,L,_([o(I,_([o(ge,"margin-bottom","6px")]),_([o(St,_([yt(e)]),_([be(e)]))])),o(ba,_([ga("color"),o(ge,"width","100%"),o(ge,"height","26px"),o(ge,"padding","0px"),sa(e),Tt(e),lo(function(l){return o(dd,e,o(Jd,bd,Nd(l)))}),uo(xd(c))]),L)]))}}),qd=function(e){return o(I,_([U("p-6 border-y-[0.5px] border-white20")]),_([o(I,_([U("text-lg pb-2")]),_([be(e.ff)])),o(I,_([U("pl-2 pr-2")]),fd(o(wt,Od,e.av)))]))},Yd=function(e){return o(I,_([U("text-xs text-white60")]),o(ee,qd,e))},Zd=function(e){return o(I,_([U("absolute left-[104px] bottom-2 text-sm text-white40")]),_([be("clock: "+o(mn,3,en(e).b7))]))},Qd=function(e){e.a;var r=e.b.T;return o(Ae,function(n){return Oe(60/(en(e).b7-n))},o(Ae,o(ae,Jf,function(n){return n.b7}),al(o(jc,59,r))))},Kd=function(e){return o(I,_([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Qd(e);if(r.$===1)return _([be("... Fps")]);var n=r.a;return _([be(Be(n)+" Fps")])}())},em=function(e){return{$:0,a:e}},rm=function(e){var r=e.b.T;return Mr(r)},nm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},am=function(e){return o(ba,_([U("absolute left-[100px] w-[490px]"),ga("range"),ll(Be(0)),cl(Be(nm(e)-1)),uo(Be(rm(e))),ul(Be(1)),lo(o(ae,to,o(ae,gr(42),o(ae,Oe,em))))]),L)},pi={$:1},tm={$:3},om={$:2},vl=function(e){return!e.b},bi=$(function(e,r){return o(oo,_([U("px-2 bg-black40"),U(r),io(e)]),_([be("REC")]))}),gi=$(function(e,r){return o(oo,_([U("absolute left-[60px] mx-1 px-1 bg-black40"),io(r)]),_([o(I,_([U("w-4 h-6 fill-white80")]),_([bn(e)]))]))}),im=function(e){var r=e.a,n=e.b.ab;return o(I,_([U("py-1")]),_([function(){switch(r.$){case 0:return o(bi,pi,"text-red-500 font-bold");case 1:return o(bi,om,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return vl(n)?o(I,L,L):o(gi,Ir.fo,tm);default:return o(gi,Ir.fn,pi)}}()]))},cm=function(e){return o(I,_([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),_([am(e),im(e),Kd(e),Zd(e)]))},$l=function(e){return o(Tr,"",e)},lm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(z,e,o(z,c,l))}),i=p(tr,t,L,a);return o(z,n,i)}else return L}),um=function(e){var r=e.a;return br(r,Ma)},xr=fr("p"),vm=fr("pre"),$m=$(function(e,r){var n=um(r.G)?o(I,L,L):o(I,_([U("absolute pointer-events-none w-8 h-8"),o(ge,"left",me(e.fp.fT+.5*e.cT.fR)+"px"),o(ge,"top",me(-e.fp.fX+.5*e.cT.eW)+"px")]),_([o(I,_([U(e.fp.e4?"fill-black80":"fill-white40")]),_([bn(Ir.fp)]))]));return o(I,L,_([n,o(vm,_([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),_([o(xr,L,_([be("pressedKeys: "+$l(o(lm," ",e.e7.fq)))])),o(xr,L,_([be("delta time: "+o(mn,4,e.eJ))])),o(xr,L,_([be("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(xr,L,_([be("pointer.x: "+o(mn,2,e.fp.fT))])),o(xr,L,_([be("pointer.y: "+o(mn,2,e.fp.fX))])),o(xr,L,_([be("wheel deltaX: "+me(e.fQ.eD))])),o(xr,L,_([be("wheel deltaY: "+me(e.fQ.eE))]))]))]))}),fm=$(function(e,r){var n=o(oo,_([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),io(nd),vd("Distraction Free Mode")]),_([bn(Ir.f$)])),a=o(I,_([U("absolute w-8 bottom-12")]),_([o(fi,_([U("fill-twitterBlue40 hover:fill-twitterBlue"),si("https://twitter.com/AzizErkalSelman"),di("_blank")]),_([bn(Ir.fL)]))])),t=o(I,_([U("absolute w-8 bottom-2")]),_([o(fi,_([U("fill-githubCat40 hover:fill-githubCat"),si("https://github.com/erkal/elm-3d-playground-exploration"),di("_blank")]),_([bn(Ir.eQ)]))]));return r.aL?o(I,_([U("fixed w-10 h-10 p-1")]),_([n])):o(I,L,_([o(I,_([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(I,_([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),_([o(da,ad,Yd(en(r.G).eA))])),o(da,td,cm(r.G)),o($m,e,r)]))}),sm=x(function(e,r,n){var a=Ks(n.G),t=en(n.G);return o(I,_([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ge,"width",me(t.cT.fR)+"px"),o(ge,"height",me(t.cT.eW)+"px")]),_([o(I,_([U("fixed")]),_([o(da,Bc(Zs),o(e,t,a))])),o(I,_([sa("gui")]),_([o(fm,t,n),o(I,_([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),_([o(da,Ys,o(r,t,a))]))]))]))}),dm=He(function(e,r,n,a,t,i){var c=$(function(u,v){return k(C(Us,r,i,u,v),$i)}),l=function(u){var v=o(Ac,n,u.e1);return k({aL:u.e1.cT.fR<500,G:o(Js,v,a)},$i)};return $s({e0:l,fG:Bc(qs(Qf)),fM:c,fP:o(sm,e,t)})}),mm=E(function(e,r,n,a){return we(dm,e,r,n,a,$(function(t,i){return o(I,L,L)}),x(function(t,i,c){return c}))}),pm=x(function(e,r,n){return C(mm,e,r,L,n)}),bm=function(e){return{}},gm=$(function(e,r){return r}),qr=Ku,Tn=function(e){return e},fn=function(e){return Tn(qr*(e/180))},mr=lv,hm=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ze,O(c),o(ze,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=mr(s*s+v*v+u*u);return re({fT:s/d,fX:v/d,c6:u/d})}else return q}),Xa=function(e){return e},vo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),Qn=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=mr(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c6:a/c})}else return q},ha=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),_m=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),fl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),wm=$(function(e,r){var n=e,a=r;return J(a,n)<0}),ym=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),xm=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),Sm=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Je=0,sl={fT:0,fX:0,c6:0},Tm=x(function(e,r,n){return o(xt,function(a){var t=o(ym,o(xm,a,r),r);return o(xt,function(i){var c=o(vo,r,e),l=o(_m,n,c),u=o(fl,Je,l)?c:o(wm,Je,l)?Sm(c):sl;return o(Ae,function(v){return A(a,i,v)},Qn(u))},Qn(t))},Qn(e))}),Cm=function(e){var r=e,n=O(r.c6),a=O(r.fX),t=O(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=mr(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=mr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(J(a,n)<1){var i=mr(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=mr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},$o=function(e){var r=Cm(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return k(r,c)},Xr=function(e){var r=e;return r},vr=function(e){return e},Lm=$(function(e,r){var n=$o(e),a=n.a,t=n.b;return vr({cB:r,c4:a,c5:t,c7:e})}),Pm=function(e){var r=o(ha,e.aR,e.dj),n=Xr(e.ei),a=o(vo,r,n),t=p(Tm,r,n,a);if(t.$){var v=Qn(r);if(v.$){var d=$o(e.ei),m=d.a,f=d.b;return vr({cB:e.dj,c4:f,c5:e.ei,c7:m})}else{var s=v.a;return o(Lm,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return vr({cB:e.dj,c4:u,c5:l,c7:c})}},Fr={fT:0,fX:0,c6:0},zm=function(e){return{$:0,a:e}},Se=function(e){var r=e;return O(r)},Kn=function(e){var r=e;return .5*r},km=nv,Mm=function(e){var r=e;return km(r)},Dm=function(e){var r=Kn(Se(e.ej)),n=Mm(r);return{cM:zm(n),c2:e.c2}},lr=function(e){return e},Ba=lr({fT:0,fX:1,c6:0}),Bm=function(e){var r=e.aR,n=e.dj,a=e.ei;return Dm({ej:fn(40),c2:Pm({dj:Xa(n),aR:Xa(r),ei:o(gr,Ba,o(hm,Fr,Xa(a)))})})},Am=Bm({dj:{fT:0,fX:10,c6:30},aR:{fT:0,fX:10,c6:0},ei:{fT:0,fX:1,c6:0}}),Fm=C(yr,114/255,159/255,207/255,1),Vm=C(yr,52/255,101/255,164/255,1),Em=C(yr,115/255,210/255,22/255,1),fo=function(e){return{$:5,a:e}},dl=function(e){return fo(e)},so=$(function(e,r){return{$:4,a:e,b:r}}),ml=function(e){return e},rn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),Rm=$(function(e,r){return ml(k(e,o(rn,r,e)))}),pl=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),jm=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(pl,e(n),e(a),e(t))}),rr=function(e){return e},Ia=$(function(e,r){return o(so,e,o(Rm,Fr,o(jm,rr,r)))}),Nm=C(yr,204/255,0/255,0/255,1),Gm=dl(_([o(Ia,Nm,A(100,0,0)),o(Ia,Em,A(0,100,0)),o(Ia,Vm,A(0,0,100))])),mo=$(function(e,r){return{$:0,a:e,b:r}}),Ua=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),Ja=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),ur=$(function(e,r){var n=e,a=r;return a-n}),Wm=lr({fT:-1,fX:0,c6:0}),Hm=lr({fT:0,fX:-1,c6:0}),bl=lr({fT:0,fX:0,c6:-1}),gl=lr({fT:1,fX:0,c6:0}),po=lr({fT:0,fX:0,c6:1}),de=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),Xm=He(function(e,r,n,a,t,i){var c=o(Ua,n,i)?po:bl,l=o(Ua,r,t)?Ba:Hm,u=o(Ua,e,a)?gl:Wm,v=A(Se(o(ur,e,a)),Se(o(ur,r,t)),Se(o(ur,n,i))),s=p(de,o(Ja,e,a),o(Ja,r,t),o(Ja,n,i)),d=vr({cB:s,c4:u,c5:l,c7:c});return{er:d,aK:v}}),Pr=function(e){var r=e;return r.fT},zr=function(e){var r=e;return r.fX},kr=function(e){var r=e;return r.c6},Im=$(function(e,r){return we(Xm,Pr(e),zr(e),kr(e),Pr(r),zr(r),kr(r))}),Ct=x(function(e,r,n){return{fT:e,fX:r,c6:n}}),Um=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(mo,e,o(Im,p(Ct,-c,-l,-u),p(Ct,c,l,u)))}),Jm=E(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(yr,f,m,d,a)}),Om=x(function(e,r,n){return C(Jm,e,r,n,1)}),Lt=function(e){return{$:0,a:e}},hl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),_l=x(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Oa=function(e){return p(_l,0,1,e<=.04045?e/12.92:o(Bn,(e+.055)/1.055,2.4))},An=F$,qm=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b5;return p(An,Oa(n),Oa(a),Oa(t))},wl=function(e){return p(hl,0,Lt(qm(e)),Lt(0))},bo=$(function(e,r){return{$:2,a:e,b:r}}),yl=$(function(e,r){return{$:3,a:e,b:r}}),xl=$(function(e,r){return{$:1,a:e,b:r}}),Ym=x(function(e,r,n){return{fT:e,fX:r,c6:n}}),Zm=function(e){var r=e;return r},go=function(e){var r=e;return Zm(r.er)},ho=function(e){var r=e;return r.aK},nn=function(e){var r=e;return r.cB},Vr=function(e){var r=e;return r.c4},Er=function(e){var r=e;return r.c5},Rr=function(e){var r=e;return r.c7},Qm=$(function(e,r){return vr({cB:o(rn,e,nn(r)),c4:Vr(r),c5:Er(r),c7:Rr(r)})}),Km=$(function(e,r){return{er:o(Qm,e,go(r)),aK:ho(r)}}),Aa=$(function(e,r){return{eG:r,cB:e}}),e0=$(function(e,r){var n=r;return o(Aa,o(rn,e,n.cB),n.eG)}),r0=$(function(e,r){var n=r;return{k:o(e0,e,n.k),e9:n.e9,fr:n.fr}}),_o=function(e){var r=e;return r},Sl=$(function(e,r){var n=_o(r),a=n.a,t=n.b;return ml(k(e(a),e(t)))}),n0=$(function(e,r){return o(Sl,rn(e),r)}),wo=function(e){var r=e;return r.ey},yo=function(e){var r=e;return r.fr},Tl=$(function(e,r){return{ey:r,fr:Se(e)}}),a0=$(function(e,r){return o(Tl,yo(r),o(rn,e,wo(r)))}),Cl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),t0=$(function(e,r){return o(Cl,rn(e),r)}),Ll=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Ym,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(mo,s,o(Km,i,c));case 1:var s=r.a,l=r.b;return o(xl,s,o(t0,i,l));case 3:var s=r.a,u=r.b;return o(yl,s,o(a0,i,u));case 2:var s=r.a,v=r.b;return o(bo,s,o(r0,i,v));case 4:var s=r.a,d=r.b;return o(so,s,o(n0,i,d));default:var m=r.a;return fo(o(ee,Ll(A(n,a,t)),m))}}),Pl=function(e){return Ll(A(0,e,0))},Br=ev,Yr=rv,ea=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=Yr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,y=g*g,h=1-2*(f+y),T=s.c6*u,M=l*T,G=2*(w-M),j=2*(w+M),R=d*T,N=2*(R+b),W=2*(R-b),F=g*T,Y=2*(F-m),Q=2*(F+m),oe=T*T,ve=1-2*(y+oe),te=1-2*(f+oe);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+te*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+h*i.c6}}),Fn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=Yr(c),v=a.cB,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c6-s.c6,g=a.eG,b=g,w=b.fT*u,y=l*w,h=w*w,T=b.fX*u,M=l*T,G=w*T,j=T*T,R=1-2*(h+j),N=b.c6*u,W=l*N,F=2*(G-W),Y=2*(G+W),Q=w*N,oe=2*(Q+M),ve=2*(Q-M),te=T*N,se=2*(te-y),ke=2*(te+y),Te=N*N,sr=1-2*(j+Te),dr=1-2*(h+Te);return{fT:s.fT+sr*d+F*m+oe*f,fX:s.fX+Y*d+dr*m+se*f,c6:s.c6+ve*d+ke*m+R*f}}),o0=x(function(e,r,n){return vr({cB:p(Fn,e,r,nn(n)),c4:p(ea,e,r,Vr(n)),c5:p(ea,e,r,Er(n)),c7:p(ea,e,r,Rr(n))})}),i0=x(function(e,r,n){return{er:p(o0,e,r,go(n)),aK:ho(n)}}),c0=$(function(e,r){var n=o(Fn,e,r),a=o(ea,e,r);return function(t){var i=t;return o(Aa,n(i.cB),a(i.eG))}}),l0=x(function(e,r,n){var a=n;return{k:p(c0,e,r,a.k),e9:a.e9,fr:a.fr}}),u0=x(function(e,r,n){return o(Sl,o(Fn,e,r),n)}),v0=x(function(e,r,n){return o(Tl,yo(n),p(Fn,e,r,wo(n)))}),$0=x(function(e,r,n){return o(Cl,o(Fn,e,r),n)}),zl=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(mo,l,p(i0,e,r,a));case 1:var l=n.a,t=n.b;return o(xl,l,p($0,e,r,t));case 3:var l=n.a,i=n.b;return o(yl,l,p(v0,e,r,i));case 2:var l=n.a,c=n.b;return o(bo,l,p(l0,e,r,c));case 4:var l=n.a,u=n.b;return o(so,l,p(u0,e,r,u));default:var v=n.a;return fo(o(ee,o(zl,e,r),v))}}),xo=Ba,f0=o(Aa,Fr,xo),hi=$(function(e,r){return p(zl,f0,Tn(e),r)}),kl=$(function(e,r){return(r-Mc(r/e)*e)/e}),s0=$(function(e,r){return 360*o(kl,e,r)}),d0=function(e){return 2*qr*e},m0=E(function(e,r,n,a){return e+(r-e)*(1+Br(d0(o(kl,n,a))))/2}),p0=$(function(e,r){var n=C(m0,.2,.8,10,e.b7);return o(hi,o(s0,1e3,e.b7),o(hi,.1*r,o(Pl,r*1.1,o(Um,wl(p(Om,n,.5,.5)),A(r,1,r)))))}),b0=function(e){return dl(o(ee,p0(e),o(Dr,1,18)))},g0=x(function(e,r,n){return{k:o(Aa,e,r),e9:Se(n.e9),fr:Se(n.fr)}}),h0=x(function(e,r,n){return o(bo,e,p(g0,Fr,Ba,{e9:rr(n),fr:rr(r)}))}),_0=o(Pl,-1.001,p(h0,wl(p(ol,.294,.588,.478)),30,1)),w0=$(function(e,r){return _([Gm,_0,b0(e)])}),y0=function(e){return e},x0=function(e){return rr(.01*e)},_i=function(e){return e},S0=function(e){return e},T0=function(e){return{$:0,a:e}},C0=T0,L0={$:3},P0=L0,z0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),k0=z0,M0=$(function(e,r){return r.b?p(tr,z,r,e):e}),Ge=function(e){return p(tr,M0,L,e)},So=$(function(e,r){return Ge(o(ee,e,r))}),D0=function(e){return{$:1,a:e}},B0=D0,A0=function(e){return o(kn,"height",Be(e))},F0=function(e){return t$(l$(e))},V0=F0,E0=function(e){return{$:2,a:e}},R0=E0,j0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return $l(_(["rgba(",me(c(r)),"%,",me(c(n)),"%,",me(c(a)),"%,",me(i(t)),")"]))},N0=$(function(e,r){switch(r.$){case 0:return o(Sf,e,r);case 1:return o(Tf,e,r);case 2:return o(Cf,e,r);case 3:return o(Lf,e,r);case 4:return o(Pf,e,r);default:return o(zf,e,r)}}),G0=$(function(e,r){switch(r.$){case 0:return o(K$,e,r);case 1:return o(ef,e,r);case 2:return o(rf,e,r);case 3:return o(nf,e,r);case 4:return o(af,e,r);case 5:return o(tf,e,r);case 6:return o(of,e,r);case 7:return o(cf,e,r);default:return lf(e)}}),W0=x(function(e,r,n){return p(xf,e,r,n)}),wi=function(e){var r=e;return r},an=G$,qa=C(an,1,1,1,1),qe=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),H0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),X0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(H0,n*a/t,n,n*(1-a-t)/t)}),I0=function(e){var r=e.a,n=e.b,a=e.c;return p(An,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=$(function(e,r){return I0(o(X0,e,r))}),Ml=$(function(e,r){return{dp:br(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=J$,U0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ya=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(an,a.bX,a.bX,a.bX,i);return we(t,e,c,U0(a),a.dp,r,n)}),Dl=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Ml,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(z,S(Ya,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(z,S(Ya,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var h=t.a,T=o(z,S(Ya,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(La,C(Dl,e,r,n,a),i,M)}}),J0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bl=J0,Co=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),O0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Co,518,r,n,a)},q0=$(function(e,r){return{$:6,a:e,b:r}}),Y0=q0,Al=_([O0({V:1,W:0,Z:!1}),C(Bl,!1,!1,!1,!1),o(Y0,0,1)]),Zr=519,Lo=8,Fl=15,Ur=7681,Z0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=Q$,Q0=$(function(e,r){return{$:0,a:e,b:r}}),K0=Q0({df:1,$7:0,dV:5}),De=B$,ep=K0(_([{bT:o(De,-1,-1)},{bT:o(De,1,-1)},{bT:o(De,-1,1)},{bT:o(De,1,1)}])),rp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},np=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Po=x(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(np,a,t,i)))}),zo=function(e){return p(Po,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},ko=function(e){return S(ne,_([zo(e),C(Bl,!1,!1,!1,!1)]),rp,Z0,ep,{})},ap=ko({a8:Ur,cp:0,cO:Lo,bl:Zr,c3:Fl,bt:Ur,bu:Ur}),tp=516,yi=5386,xe=7680,op=function(e){return o(Bn,2,e+4)},Vl=function(e){return ko({a8:xe,cp:Fl,cO:Lo,bl:tp,c3:op(e),bt:yi,bu:yi})},ip=x(function(e,r,n){return Ge(_([p(qe,e,n,Al),_([Vl(r),ap])]))}),cp=$(function(e,r){return Ge(o(Tc,ip(e),r))}),lp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Co,513,r,n,a)},up=lp({V:1,W:0,Z:!0}),vp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},$p=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return vp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},fp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),xi=$(function(e,r){var n=e,a=r;return p(fp,32774,n,a)}),sp=1,Si=771,dp=770,Mo=$p({bv:0,aH:o(xi,sp,Si),by:0,bA:o(xi,dp,Si),bF:0,bV:0}),jr=_([up,Mo]),mp=function(e){var r=e;return r.dO},pp=function(e){var r=e;return r.dP},El=function(e){var r=e;return r.dQ},bp=function(e){var r=e;return r.dR},gp=function(e){var r=e;return r.dS},Rl=function(e){var r=e;return r.dT},jl=function(e){return A(o(ur,bp(e),mp(e)),o(ur,gp(e),pp(e)),o(ur,Rl(e),El(e)))},Ti=function(e){var r=e;return nn(r)},hp=function(e){return e},_p=function(e){return vr({cB:hp({fT:e.H,fX:e.I,c6:e.J}),c4:lr({fT:e.q,fX:e.r,c6:e.s}),c5:lr({fT:e.t,fX:e.u,c6:e.v}),c7:lr({fT:e.w,fX:e.x,c6:e.y})})},Za=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),Nl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,s=v,d=n.c5,m=d,f=n.c4,g=f;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*m.fT+l*m.fX+u*m.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),Gl=$(function(e,r){return{cB:o(Nl,e,nn(r)),c4:o(Za,e,Vr(r)),c5:o(Za,e,Er(r)),c7:o(Za,e,Rr(r))}}),_a=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ze,n,a)}),ra=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),wp=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},yp=function(e){var r=e;return A(r.fT,r.fX,r.c6)},gn=$(function(e,r){var n=e,a=r;return a+n}),xp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Kn(Se(a)),c=Kn(Se(n)),l=Kn(Se(t)),u=yp(r),v=u.a,s=u.b,d=u.c;return{dO:o(gn,c,v),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o(ur,c,v),dS:o(ur,i,s),dT:o(ur,l,d)}}),Ci=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,s=t.fT*r,d=We(Rr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c6),f=We(Er(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c6),b=We(Vr(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c6),y=o(xp,A(w,g,m),o(Nl,e,p(Ct,s,v,u)));if(a.$)return re(y);var h=a.a;return re(o(wp,h,y))}),Pt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Ci,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Ci,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Pt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Gl,_p(v),e),m=r*v.bX,f=e,g=r,b=C(Pt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),tn=V$,on=E$,cn=R$,Wl=function(e){return{$:4,a:e}},Sp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(z,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return Wl(o(Sp,e,L))},Tp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Cp=function(e){var r=e;return r},Li=ko({a8:Ur,cp:0,cO:Lo,bl:Zr,c3:255,bt:Ur,bu:Ur}),Lp=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=mr(i*i+t*t+a*a);return c*n}else return Je},Ce={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fT:0,fX:0,c6:0},Re=$(function(e,r){var n=e,a=r;return Qe({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),sn=k({bd:o(Re,Ce,Ce),bK:o(Re,Ce,Ce),bL:o(Re,Ce,Ce),bM:o(Re,Ce,Ce)},C(an,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Pi=function(e){var r=e;return-r},Hl=514,Xl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Co,515,r,n,a)},Il=240,Pp=_([Xl({V:1,W:0,Z:!0}),zo({a8:xe,cp:Il,cO:0,bl:Hl,c3:0,bt:xe,bu:xe}),Mo]),zp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Se(a),l=c,u=Se(t),v=u,s=n.cM;if(s.$){var m=s.a;return bt(v)?Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return bt(v)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Wn=$(function(e,r){return(1&e>>r)===1?0:1}),kp=function(e){return _([Xl({V:1,W:0,Z:!0}),zo({a8:xe,cp:Il,cO:e,bl:Hl,c3:0,bt:xe,bu:xe}),Mo])},Mp=x(function(e,r,n){return Ge(o(ee,function(a){var t=a<<4,i=C(an,o(Wn,a,0),o(Wn,a,1),o(Wn,a,2),o(Wn,a,3));return p(qe,e,k(r,i),kp(t))},o(Dr,1,o(Bn,2,n)-1)))}),Cn=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Jr=function(e){var r=e;return r},Dp=O$,zi=function(e){var r=e;return Cn(Rr(r))},Ul=gl,Jl=po,Bp={cB:Fr,c4:Ul,c5:xo,c7:Jl},Fa=function(e){var r=e;return r},Ap=function(e){var r=Fa(nn(e)),n=We(Rr(e)),a=We(Er(e)),t=We(Vr(e));return Qe({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Fp=$(function(e,r){var n=r;return Ap(o(Gl,n,e))}),Vp=function(e){return o(Fp,Bp,e)},Ep=function(e){var r=e;return r.c2},Rp=function(e){var r=e;return Vr(r)},jp=function(e){var r=e;return Er(r)},Np=function(e){var r=Ep(e.ev),n=vr({cB:Ti(r),c4:Rp(r),c5:jp(r),c7:Cn(zi(r))}),a=Vn(e.aP),t=a,i=C(Pt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=Vp(r),u=o(ie,.99,o(ce,Se(e.aJ),Pi(El(c)))),v=jl(c),s=v.a,d=v.b,m=v.c,f=Lp(p(pl,s,d,m)),g=o(ie,1.01,o(gn,f,Pi(Rl(c)))),b=o(zp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Dp(b).dM,y=w?We(Cn(zi(r))):Jr(Ti(r)),h=function(){var te=e.bZ;switch(te.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var se=te.a;return k(3,se);case 4:var se=te.a;return k(4,se);default:return k(5,0)}}(),T=h.a,M=h.b,G=e.bD,j=G,R=o(To,j,e.b$),N=R,W=Qe({dx:0,dy:y.fT,dz:tn(N),dA:e.ec,dB:0,dC:y.fX,dD:on(N),dE:Cp(f),dF:0,dG:y.c6,dH:cn(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),F=we(Dl,W,l,b,Tp,t,{M:L,U:L,fz:L}),Y=e.bJ;switch(Y.$){case 0:var Q=Y.a;return Ge(_([p(qe,F.M,k(Q,qa),jr),p(qe,F.U,sn,jr)]));case 1:var Q=Y.a;return Ge(_([p(qe,F.M,sn,jr),_([Li]),p(qe,F.fz,Q.bd,Al),_([Vl(0)]),p(qe,F.M,k(Q,qa),Pp),p(qe,F.U,sn,jr)]));default:var oe=Y.a,ve=Y.b;return Ge(_([p(qe,F.M,k(ve,qa),jr),_([Li]),o(cp,F.fz,oe),p(Mp,F.M,ve,Mr(oe)),p(qe,F.U,sn,jr)]))}},Gp=function(e){return o(kn,"width",Be(e))},Wp=$(function(e,r){var n=_([B0(1),R0(0),C0(!0),C(k0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return A(n,"0",1);case 1:return A(o(z,P0,n),"1",1);default:var M=T.a;return A(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=wi(v),d=o(ge,"height",Be(s)+"px"),m=wi(u),f=m/s,g=o(So,function(T){return Np({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(ge,"width",Be(m)+"px"),w=e.aI,y=w,h=j0(y);return p(V0,"div",_([o(ge,"padding","0px"),b,d]),_([k(i,p(W0,t,_([Gp(Oe(m*c)),A0(Oe(s*c)),b,d,o(ge,"display","block"),o(ge,"background-color",h)]),g))]))}),Hp=function(e){return o(Wp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Ol=function(e){return e},ki=Ol({fT:.31271,fX:.32902}),Xp=$(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(To,r.ce,r.b6),u=l;return{by:cn(u),ex:n,bF:on(u),cK:0,bV:tn(u),c_:1,fT:-t,fX:-i,c6:-c}}),Ip=function(e){return e},Up=function(e){return Ip(1.2*o(Bn,2,e))},Qa=function(e){return e},Jp={$:0},Op=Jp,ql=function(e){return e},Mi=function(e){var r=e;return r},qp=function(e){e:for(;;){if(br(e.e2,Je)&&br(e.e3,Je))return Ce;if(o(fl,Se(e.e2),Se(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Cn(e.ei)};e=r;continue e}else{var n=O(Mi(e.e3)/qr),a=O(Mi(e.e2)/qr),t=We(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(To,ql(1),e.b6),v=u;return{by:a*cn(v),ex:!1,bF:a*on(v),cK:n/a,bV:a*tn(v),c_:3,fT:i,fX:c,c6:l}}}},Di=function(e){return qp({b6:e.b6,e2:e.ce,e3:Je,ei:e.ei})},Yp=function(e){var r=e;return r},Yl=function(e){var r=p(_l,1667,25e3,Yp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ol({fT:n,fX:a})},Zl=function(e){return e},Zp=Yl(Zl(12e3)),Qp=Yl(Zl(5600)),Kp=function(e){return{$:2,a:e}},e3=function(e){return Kp(e)},r3=$(function(e,r){return{$:2,a:e,b:r}}),Ql=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},n3=function(e){var r=e;return r.ex},a3=Ql(sn.a),t3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(z,a,i),c):k(i,o(z,a,c))});return p(tr,n,k(L,L),r)}),o3=function(e){var r=e;return Qe({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},i3=K(function(e,r,n,a,t,i,c,l){var u=o(t3,n3,_([Hn(e),Hn(r),Hn(n),Hn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,h=y.a;return o(r3,o(ee,o3,v),{bd:o(Re,m,g),bK:o(Re,w,h),bL:o(Re,t,i),bM:o(Re,c,l)})}else return a3}else return Ql({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),c3=x(function(e,r,n){return Ta(i3,e,r,n,Ce,Ce,Ce,Ce,Ce)}),l3=function(e){var r=o(Xp,S0(e.fz),{b6:Qp,eG:e.fI,ce:Qa(8e4)}),n=Di({b6:Zp,ce:Qa(2e4),ei:e.ei}),a=Di({b6:ki,ce:Qa(15e3),ei:Cn(e.ei)}),t=p(c3,r,n,a);return Hp({b0:e3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Up(15),bJ:t,bZ:Op,b$:ki})},Kl=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),u3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),eu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ru=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),v3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),$3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),f3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Do=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(f3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Kl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(u3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(eu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C($3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(ru,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(v3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Bo={$:0},s3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),y=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),d3=x(function(e,r,n){var a=_a(e(r));return Ta(s3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Ka=$(function(e,r){var n=e,a=r;return J(a,n)<1}),nu=function(e){return o(Ka,e.dO,e.dR)&&o(Ka,e.dP,e.dS)&&o(Ka,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},au=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Pr(n),c=zr(n),l=kr(n),u=Pr(a),v=zr(a),s=kr(a),d=Pr(t),m=zr(t),f=kr(t);return nu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},tu=j$,Le=function(e){return tu(Fa(e))},ou=function(e){var r=e;return r},Va=function(e){return tu(ou(e))},m3=$(function(e,r){var n=e,a=r,t=o(ze,O(a.fT),o(ze,O(a.fX),O(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=mr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return sl}),p3=m3(ql(1)),iu=x(function(e,r,n){var a=o(ha,r,n),t=o(ha,e,r);return p3(o(vo,a,t))}),b3=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Va(p(iu,n,a,t));return A({o:i,bT:Le(n)},{o:i,bT:Le(a)},{o:i,bT:Le(t)})},g3=$(function(e,r){return{$:2,a:e,b:r}}),cu=g3({df:3,$7:0,dV:4}),h3=function(e){if(e.b){var r=e.a,n=e.b,a=cu(o(ee,b3,e)),t=p(d3,au,r,n);return C(Kl,t,e,a,0)}else return Bo},Ee=x(function(e,r,n){return A(e,r,n)}),lu=function(){var e=rr(1),r=rr(1),n=rr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(de,i,t,a),l=o(ie,.5,e),u=p(de,i,t,l),v=o(ie,.5,r),s=p(de,i,v,a),d=p(de,i,v,l),m=o(ie,.5,n),f=p(de,m,t,a),g=p(de,m,v,a),b=p(de,m,t,l),w=p(de,m,v,l);return Do(h3(_([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),Xn={$:0},_3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),w3=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(iu,u,l,c)),s={o:v,bT:Le(u)},d={o:v,bT:Le(l)},m={o:v,bT:Le(c)};return o(z,s,o(z,d,o(z,m,n)))}),y3=ar,Ao=function(e){var r=e;return r.D},x3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),zt=4294967295>>>32-yn,kt=Iu,S3=x(function(e,r,n){e:for(;;){var a=zt&r>>>e,t=o(kt,a,n);if(t.$){var v=t.a;return o(kt,zt&r,v)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),T3=function(e){return e>>>5<<5},C3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,T3(n))>-1?re(o(kt,zt&e,i)):re(p(S3,a,e,t))}),Fo=function(e){var r=e;return r.ah},et=$(function(e,r){return o(C3,e,Fo(r))}),L3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(x3,x(function(c,l,u){return A(c,l,u)}),o(et,a,e),o(et,t,e),o(et,i,e))};return o(rl,r,Ao(e))},P3=x(function(e,r,n){e:for(;;){var a=o(Kt,Ve,e),t=a.a,i=a.b;if(J(mt(t),Ve)<0)return o(Dc,!0,{z:r,l:n,p:t});var c=i,l=o(z,kc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Vo=function(e){return e.b?p(P3,e,L,0):Pc},z3=x(function(e,r,n){return e(r(n))}),k3=$(function(e,r){return!o(Wc,o(z3,fs,e),r)}),M3=$(function(e,r){return p(tr,$(function(n,a){return e(n)?o(z,n,a):a}),L,r)}),D3=function(e){var r=e.a;return r},uu=$(function(e,r){var n=D3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(k3,a,r)?{D:r,ah:e}:{D:o(M3,a,r),ah:e}}),B3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=B3({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Jr(r),a=Jr(e);return k(A(a.fT,a.fX,a.c6),A(n.fT,n.fX,n.c6))}),Bi=p(An,0,0,0),rt=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(qc,o(na,e,r),t);if(v.$){var d={o:Bi,bT:Le(r)},m={o:Bi,bT:Le(e)},f=u+1,g=u;return A(o(z,A(n,g,f),o(z,A(n,f,a),c)),o(z,d,o(z,m,l)),u+2)}else{var s=v.a;return A(o(z,A(n,s,a),c),l,u)}}),A3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,h=v,T=a+3,M=we(rt,s,m,f,b,r,we(rt,d,s,g,f,r,we(rt,m,d,b,g,r,t)));e=w,r=y,n=h,a=T,t=M;continue e}else{var G=t,j=G.a,R=G.b;return k(j,Fe(R))}}),F3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(Yn,o(na,m,s),f,p(Yn,o(na,s,d),g,p(Yn,o(na,d,m),b,t))),y=o(z,A(b,g,f),a),h=e,T=v,M=n+3,G=y,j=w;e=h,r=T,n=M,a=G,t=j;continue e}else return A(a,t,n)}),Sr=x(function(e,r,n){var a=L3(n),t=p(tr,w3(r),L,a),i=S(F3,r,a,0,L,y3),c=i.a,l=i.b,u=i.c,v=S(A3,r,l,a,0,A(c,L,u)),s=v.a,d=v.b,m=vl(d)?t:le(t,d);return p(_3,e,o(uu,Vo(m),s),o(En,m,s))}),Mt=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Dr,0,Mr(e)-1)),ah:Vo(Ge(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},vu=function(e){switch(e.$){case 0:return Xn;case 1:var a=e.a,r=e.b,n=o(ee,Ln,r);return p(Sr,a,Lr,Mt(n));case 2:var a=e.a,r=e.b,n=o(ee,Ln,r);return p(Sr,a,Lr,Mt(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Lr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 8:return Xn;case 9:return Xn;default:return Xn}},Ai=vu(lu),$u={$:0},P=$u,pe=$(function(e,r){return{$:1,a:e,b:r}}),V3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},E3=1029,R3=function(e){return{$:5,a:e}},fu=function(e){var r=e;return R3(r)},j3=fu(E3),N3=1028,G3=fu(N3),Pe=x(function(e,r,n){return r===1?e?o(z,j3,n):o(z,G3,n):n}),su={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nt=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),su,V3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Eo={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),du,Eo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),mu=$(function(e,r){return{$:3,a:e,b:r}}),W3={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},H3=E(function(e,r,n,a){return o(mu,n,K(function(t,i,c,l,u,v,s,d){return S(ne,d,pu,W3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Ro={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Rn=function(e){var r=e;return r},Ea=N$,ir=he(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),du,Ro,a,{aN:o(Ea,Rn(r),e),b:l,c,d:s,e:i,f:v})}))}),X3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},I3=he(function(e,r,n,a,t){return o(mu,a,K(function(i,c,l,u,v,s,d,m){return S(ne,m,pu,X3,t,{aN:o(Ea,Rn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},In=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),gu,bu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},_u={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},U3=He(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),_u,hu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),wu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},J3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,K(function(d,m,f,g,b,w,y,h){var T=y.a,M=y.b;return S(ne,p(Pe,g,s,h),_u,wu,v,{b4:e,b8:r,b9:i,ca:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Un=He(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),gu,yu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),O3=function(e){return{$:0,a:e}},Fi=$(function(e,r){return{$:1,a:e,b:r}}),hn=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),q3=function(e){return C(an,tn(e),on(e),cn(e),1)},jo=C(an,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,jo)}else{var n=r.a;return k(e,q3(n))}}),xu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(Fi,k(t,jo),o(hn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Fi,o(aa,t,e),o(hn,t,r))}else{var a=n.a.a;return n.b.a,O3(a)}}),Y3=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Z3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Q3=function(e){return o(De,e,1)},Dt=o(De,0,0),Nr=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Dt)}else{var n=r.a;return k(e,Q3(n))}}),Su=E(function(e,r,n,a){var t=C(Z3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Jn,k(u,jo),o(Nr,u,r),o(Nr,u,n),o(hn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Jn,o(aa,u,e),k(u,Dt),o(Nr,u,n),o(hn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Jn,o(aa,u,e),o(Nr,u,r),k(u,Dt),o(hn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Jn,o(aa,u,e),o(Nr,u,r),o(Nr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Y3,i,c,l)}}),K3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},at=he(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),su,K3,a,{b1:Rn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Tu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},eb=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),Tu,hu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),rb=Ft(function(e,r,n,a,t,i,c,l,u){return o(pe,c,K(function(v,s,d,m,f,g,b,w){var y=b.a,h=b.b;return S(ne,p(Pe,m,u,w),Tu,wu,l,{b4:e,b8:r,b9:i,ca:a,P:h,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cv:t,b:d,c:s,aW:e,d:g,cS:n,e:v,a$:0,f})}))}),Pn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),nb=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},ab=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},tb=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},ob=function(e){return p(de,nb(e),ab(e),tb(e))},H=function(e){var r=jl(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(ob(e)),eS:n/2,eT:a/2,eU:t/2}},No=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(or,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(or,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(or,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(H3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(at,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(at,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(at,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(I3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(xu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(eb,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(U3,b,y,h,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(In,m,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(In,m,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(In,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(In,m,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,M=e.c,G=e.d,j=e.e,R=C(Su,T,M,G,j);if(R.$){var Y=R.a,Q=Y.a,oe=Y.b,ve=R.b,te=ve.a,se=ve.b,ke=R.c,Te=ke.a,sr=ke.b,dr=R.d,y=dr.a,h=dr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Nu(rb,Q,oe,te,se,Te,sr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return J3(Q)(oe)(te)(se)(Te)(sr)(y)(h)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return we(Un,N,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return we(Un,N,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return we(Un,N,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(Un,N,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),tt=function(e){var r=e;return r.fT},ot=function(e){var r=e;return r.fX},it=function(e){var r=e;return r.c6},ib=function(e){var r=e,n=it(r.c7),a=ot(r.c7),t=tt(r.c7),i=it(r.c5),c=ot(r.c5),l=tt(r.c5),u=it(r.c4),v=ot(r.c4),s=tt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},cb=function(e){var r=Fa(nn(e)),n=We(Rr(e)),a=We(Er(e)),t=We(Vr(e));return{dp:ib(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bX:1}},Gr=$(function(e,r){return{$:5,a:e,b:r}}),Cu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Ml,a,e);return o(Gr,i,t);case 1:return o(Gr,e,n);case 3:return o(Gr,e,n);case 2:return o(Gr,e,n);default:return o(Gr,e,n)}}),Lu=$(function(e,r){return o(Cu,cb(e),r)}),Ra=function(e){return{$:2,a:e}},lb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),ub=H$,vb=W$,Vi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=vb(a),g=f.fT,b=f.fX,w=f.c6,y=f.em,h=ub({em:y,fT:g*s,fX:b*d,c6:w*m});return Ta(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Bt=$(function(e,r){switch(r.$){case 0:return $u;case 5:var n=r.a,a=r.b;return o(Gr,n,o(Bt,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(lb,e,t),o(Vi,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Vi,e,i));default:var c=r.a;return Wl(o(ee,Bt(e),c))}}),Go=$(function(e,r){var n=r;return o(Bt,e,n)}),Wo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Pu=7683,zu=7682,$b=p(Po,{cp:0,cO:0,c3:15},{a8:xe,bl:Zr,bt:xe,bu:Pu},{a8:xe,bl:Zr,bt:xe,bu:zu}),fb=p(Po,{cp:0,cO:0,c3:15},{a8:xe,bl:Zr,bt:xe,bu:zu},{a8:xe,bl:Zr,bt:xe,bu:Pu}),Ho=$(function(e,r){return e?o(z,fb,r):o(z,$b,r)}),sb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},db=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ne,o(Ho,i,v),sb,Wo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=db(e);if(r.$)return P;var n=r.a;return Ra(n)},mb=E(function(e,r,n,a){var t=o(No,n,lu),i=function(){var s=k(e,r);return s.a?s.b?Vn(_([t,wa(Ai)])):t:s.b?wa(Ai):P}(),c=ho(a),l=c.a,u=c.b,v=c.c;return o(Lu,go(a),o(Go,A(l,u,v),i))}),pb=$(function(e,r){return C(mb,!0,!0,e,r)}),ku=$(function(e,r){return{$:0,a:e,b:r}}),bb=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b5;return p(An,n,a,t)},gb=function(e){return o(ku,0,Lt(bb(e)))},hb=function(e){var r=e;return r.k},_n=function(e){var r=e;return Br(r)},_b=$(function(e,r){var n=r;return n/e}),Ei=function(e){var r=e;return{fT:Br(r),fX:Yr(r)}},wb=$(function(e,r){var n=e.bT,a=e.o;return o(z,{o:Va(a),bT:Le(n)},r)}),yb=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=cn(l.bT),s=on(l.bT),d=tn(l.bT),m=o(ra,e,d),f=o(ze,r,d),g=o(ra,n,s),b=o(ze,a,s),w=o(ra,t,v),y=o(ze,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=y,c=h;continue e}else return nu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Mu=$(function(e,r){var n=cn(e.bT),a=on(e.bT),t=tn(e.bT);return Vt(yb,t,t,a,a,n,n,r)}),xb=function(e){var r=p(_c,wb,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Ao(e)),i=o(Mu,n,a);return C(eu,i,e,t,0)}else return Bo},Ri=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),ya=function(e){var r=e;return Yr(r)},At=function(e){return Tn(2*qr*e)},Sb=Lr,ji=Sb({cB:Fr,c4:Ul,c5:xo}),Du=function(){var e=72,r=o(_b,e,At(1)),n=rr(1),a=Xr(po),t=Xr(bl),i=rr(1),c=o(ie,.5,i),l=p(de,Je,Je,c),u=o(ie,-.5,i),v=p(de,Je,Je,u),s=function(f){var g=o(ie,f,r),b=Xr(o(Ri,ji,Ei(g))),w=o(ie,_n(g),n),y=o(ie,ya(g),n),h=p(de,w,y,c),T=p(de,w,y,u),M=o(ma,e,f+1),G=o(ie,M,r),j=Xr(o(Ri,ji,Ei(G))),R=o(ie,_n(G),n),N=o(ie,ya(G),n),W=p(de,R,N,u),F=p(de,R,N,c);return _([A({o:t,bT:v},{o:t,bT:W},{o:t,bT:T}),A({o:b,bT:T},{o:j,bT:W},{o:j,bT:F}),A({o:b,bT:T},{o:j,bT:F},{o:b,bT:h}),A({o:a,bT:l},{o:a,bT:h},{o:a,bT:F})])},d=o(ee,s,o(Dr,0,e-1)),m=Mt(Ge(d));return Do(xb(m))}(),Ni=vu(Du),Tb=function(e){var r=e;return r.eG},Cb=function(e){var r=e;return r.cB},Lb=function(e){var r=Tb(e),n=$o(r),a=n.a,t=n.b;return vr({cB:Cb(e),c4:a,c5:t,c7:r})},Pb=function(e){var r=e;return r.e9},zb=function(e){var r=e;return r.fr},kb=E(function(e,r,n,a){var t=Lb(hb(a)),i=o(No,n,Du),c=function(){var d=k(e,r);return d.a?d.b?Vn(_([i,wa(Ni)])):i:d.b?wa(Ni):P}(),l=zb(a),u=l,v=Pb(a),s=v;return o(Lu,t,o(Go,A(u,u,s),c))}),Mb=$(function(e,r){return C(kb,!0,!0,e,r)}),Gi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Wi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Jr(n),c=Jr(a),l=Jr(t);return Qe({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},On=cu(_([A({cZ:0},{cZ:1},{cZ:2})])),Db=$(function(e,r){var n=au(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(pe,a,K(function(h,T,M,G,j,R,N,W){return S(ne,p(Pe,G,0,W),Gi,Eo,On,{aw:t,b:M,c:T,d:R,e:h,bq:dn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(pe,a,K(function(h,T,M,G,j,R,N,W){return S(ne,p(Pe,G,0,W),Gi,Ro,On,{aN:o(Ea,Rn(c),i),b:M,c:T,d:R,e:h,bq:dn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(xu,l,f);if(u.$)return P;var v=u.a;return o(pe,a,K(function(h,T,M,G,j,R,N,W){var F=N.a,Y=N.b;return S(ne,p(Pe,G,0,W),Wi,bu,On,{P:Y,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cq:v,b:M,c:T,d:R,e:h,bq:dn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Su,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,y=g.c;return o(pe,a,K(function(h,T,M,G,j,R,N,W){var F=N.a,Y=N.b;return S(ne,p(Pe,G,0,W),Wi,yu,On,{b3:b,P:Y,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cu:y,b:M,c:T,d:R,cR:w,e:h,bq:dn(r),f:j})}))}}),Bb=function(){var e=_([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=_([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(En,e,r)}(),Ab={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Hi=function(e){return Ra(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,t,u),Ab,Wo,Bb,{b:a,c:n,d:c,e:r,bY:l,bq:dn(e),f:i})}))},Fb=E(function(e,r,n,a){var t=o(Db,n,a),i=k(e,r);return i.a?i.b?Vn(_([t,Hi(a)])):t:i.b?Hi(a):P}),Vb=$(function(e,r){return C(Fb,!0,!0,e,r)}),Eb=$(function(e,r){var n=kr(r),a=kr(e),t=zr(r),i=zr(e),c=Pr(r),l=Pr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Rb=function(e){var r=_o(e),n=r.a,a=r.b;return o(Eb,n,a)},Xi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},jb=$(function(e,r){return{$:1,a:e,b:r}}),Nb=jb({df:2,$7:0,dV:1}),Ii=Nb(_([k({dw:0},{dw:1})])),Gb=$(function(e,r){var n=Rb(r),a=H(n),t=_o(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(pe,a,K(function(v,s,d,m,f,g,b,w){return S(ne,w,Xi,Eo,Ii,{aw:l,du:Le(c),dv:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(pe,a,K(function(s,d,m,f,g,b,w,y){return S(ne,y,Xi,Ro,Ii,{aN:o(Ea,Rn(u),l),du:Le(c),dv:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),Wb=$(function(e,r){return o(Gb,e,r)}),Ui=$(function(e,r){var n=e,a=r;return n/a}),Hb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(z,i,t);if(br(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Ji=$(function(e,r){return e<1?L:S(Hb,0,e,e,r,L)}),Xb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(z,{o:Va(a),bT:Le(n),L:o(De,c,l)},r)}),Ib=function(e){var r=p(_c,Xb,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Ao(e)),i=o(Mu,n,a);return C(ru,i,e,t,0)}else return Bo},Bu=$(function(e,r){var n=e,a=r,t=Br(a);return{fT:t*Br(n),fX:t*Yr(n),c6:Yr(a)}}),Ub=function(){var e=rr(1),r=72,n=o(Dr,0,r-1),a=o(Ji,r,o(Pn,Je,At(1))),t=Zt(r/2),i=o(Dr,0,t-1),c=o(Ji,t,o(Pn,fn(90),fn(-90))),l=Vo(Ge(o(ee,function(s){return o(ee,function(d){return{o:Xr(o(Bu,s,d)),bT:p(de,o(ie,_n(d)*_n(s),e),o(ie,_n(d)*ya(s),e),o(ie,ya(d),e)),L:k(o(Ui,s,At(1)),o(Ui,o(gn,fn(90),d),fn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(ee,function(s){return Ge(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([A(b,g,m),A(b,m,f)])},i))},n));return Do(Ib(o(uu,l,v)))}(),xa=72,qn=2*xa,Jb=$(function(e,r){e:for(;;){var n=qn+1,a=o(ma,qn,2*e+3),t=o(ma,qn,2*e+2),i=2*e+1,c=2*e,l=qn,u=o(z,A(l,c,t),o(z,A(c,a,t),o(z,A(c,i,a),o(z,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Ob=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),qb=$(function(e,r){e:for(;;){var n=p(Ob,0,2*qr,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(z,a,o(z,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Yb=function(){var e=o(qb,xa-1,_([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Jb,xa-1,L);return o(En,e,r)}(),Zb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Oi=function(e){return Ra(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,!0,u),Zb,Wo,Yb,{aw:p(An,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},Qb=function(e){var r=ou(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bX:1}},Kb=$(function(e,r){return o(Cu,Qb(e),r)}),eg=E(function(e,r,n,a){var t=o(No,n,Ub),i=function(){var u=k(e,r);return u.a?u.b?Vn(_([t,Oi()])):t:u.b?Oi():P}(),c=yo(a),l=c;return o(Kb,o(ha,Fr,wo(a)),o(Go,A(l,l,l),i))}),rg=$(function(e,r){return C(eg,!0,!0,e,r)}),ng=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ag=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),tg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ku,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ng,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(hl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ag,n,a,t,i,c)}},og=tg,Au=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(pb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Vb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(rg,og(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Mb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Wb,gb(c),l)]);default:var u=e.a;return o(So,Au,u)}},ig=function(e){return o(So,Au,e)},cg=$(function(e,r){return l3({aI:y0(e.es),ev:e.ev,aJ:x0(.5),cb:e.cb,aK:k(_i(Oe(e.cT.fR)),_i(Oe(e.cT.eW))),aP:ig(r),fz:!0,fI:o(Bu,Tn(e.fH),Tn(e.fJ)),ei:Jl})}),lg=$(function(e,r){return o(cg,{es:Fm,ev:Am,cb:e.cb,cT:e.cT,fH:0,fJ:0},o(w0,e,r))}),ug=p(pm,lg,gm,bm);const vg={Main:{init:ug(o(B,function(e){return Me({e1:e})},o(D,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Me({b7:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",fa(Sn)))},o(D,"left",Z))},o(D,"pressedKeys",fa(Sn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},$g=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},fg=()=>{ct("pointerdown"),ct("wheel"),ct("keydown")},ct=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},sg=vg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});fg();$g(sg);
