const Nu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Nu();function _r(e,r,n){return n.a=e,n.f=r,n}function $(e){return _r(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return _r(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return _r(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return _r(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return _r(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return _r(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return _r(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function jt(e){return _r(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Nt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function La(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Gu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Wu=[];function Hu(e){return e.length}var Xu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Iu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Uu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ju=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ou()),r});function Ou(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=ui(e),r=ui(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}$(hr);$(function(e,r){return!hr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var qu=$(function(e,r){var n=J(e,r);return n<0?Pc:n?Af:Lc}),zn=0;function P(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ze(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var L={$:0};function rr(e,r){return{$:1,a:e,b:r}}var Yu=$(rr);function h(e){for(var r=L,n=e.length;n--;)r=rr(e[n],r);return r}function Pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Zu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Pa(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Pa(r).sort(function(n,a){var t=o(e,n,a);return t===Lc?0:t===Pc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Qu=$(Math.pow);$(function(e,r){return r%e});var Ku=$(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),ev=Math.PI,rv=Math.cos,nv=Math.sin,av=Math.tan;$(Math.atan2);function tv(e){return e}function ov(e){return e===1/0||e===-1/0}var iv=Math.ceil,cv=Math.floor,lv=Math.round,uv=Math.sqrt,qo=Math.log,vv=isNaN;function $v(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var fv=$(function(e,r){return e+r});function sv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function dv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function mv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var pv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),bv=$(function(e,r){return r.split(e)}),gv=$(function(e,r){return r.join(e)}),hv=x(function(e,r,n){return n.slice(e,r)});function _v(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var wv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),yv=$(function(e,r){return r.indexOf(e)>-1}),xv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Sv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function rc(e){return e+""}function Tv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Cv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Lv(e){return Pa(e).join("")}function Pv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function zv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function kv(e){return{$:0,a:e}}function Gt(e){return{$:2,b:e}}var Mv=Gt(function(e){return typeof e=="boolean"?ue(e):Ye("a BOOL",e)}),Dv=Gt(function(e){return typeof e=="number"?ue(e):Ye("a FLOAT",e)}),Av=Gt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ye("a STRING",e)});function Bv(e){return{$:3,b:e}}var Fv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var Vv=$(function(e,r){return{$:10,b:r,h:e}}),Ev=$(function(e,r){return wr(e,[r])}),Rv=x(function(e,r,n){return wr(e,[r,n])});E(function(e,r,n,a){return wr(e,[r,n,a])});he(function(e,r,n,a,t){return wr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return wr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return wr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return wr(e,[r,n,a,t,i,c,l])});jt(function(e,r,n,a,t,i,c,l,u){return wr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(Kt,"This is not valid JSON! "+a.message,r))}});var nc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ye("null",r);case 3:return Wn(r)?Yo(e.b,r,h):Ye("a LIST",r);case 4:return Wn(r)?Yo(e.b,r,jv):Ye("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ye("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:ye(o(vi,n,v.a));case 7:var a=e.e;if(!Wn(r))return Ye("an ARRAY",r);if(a>=r.length)return Ye("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:ye(o(zc,a,v.a));case 8:if(typeof r!="object"||r===null||Wn(r))return Ye("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return ye(o(vi,i,v.a));t=rr(P(i,v.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ie(v))return v;s=rr(v.a,s)}return ye(Bf(Be(s)));case 1:return ye(o(Kt,e.a,r));case 0:return ue(e.a)}}function Yo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return ye(o(zc,i,c.a));t[i]=c.a}return ue(n(t))}function Wn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function jv(e){return o(Zf,e.length,function(r){return e[r]})}function Ye(e,r){return ye(o(Kt,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&Zo(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return Zo(e.g,r.g)}}function Zo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var Nv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ac(e){return e}x(function(e,r,n){return n[e]=r,n});function Vr(e){return{$:0,a:e}}function Gv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var ft=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Wv(e){return{$:5,b:e}}var Hv=0;function Wt(e){var r={$:0,e:Hv++,f:e,g:null,h:[]};return Ht(r),r}function tc(e){return sr(function(r){r(Vr(Wt(e)))})}function oc(e,r){e.h.push(r),Ht(e)}var Xv=$(function(e,r){return sr(function(n){oc(e,r),n(Vr(zn))})}),Ha=!1,Qo=[];function Ht(e){if(Qo.push(e),!Ha){for(Ha=!0;e=Qo.shift();)Iv(e);Ha=!1}}function Iv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ht(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Xt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Xt(e,r,n,a,t,i){var c=o(nc,e,r?r.flags:void 0);Ie(c)||Qr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Uv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ei(l,b.b,t(v))}return ei(l,u.b,t(v)),d?{ports:d}:{}}var Ke={};function Uv(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Ov(t,r)}return n}function Jv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Ov(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,Wv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Wt(o(ft,l,e.b))}var qv=$(function(e,r){return sr(function(n){e.g(r),n(Vr(zn))})});$(function(e,r){return o(Xv,e.h,{$:0,a:r})});function ic(e){return function(r){return{$:1,k:e,l:r}}}function Yv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ko=[],Xa=!1;function ei(e,r,n){if(Ko.push({p:e,q:r,r:n}),!Xa){Xa=!0;for(var a;a=Ko.shift();)Zv(a.p,a.q,a.r);Xa=!1}}function Zv(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)oc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Qv(e,t,a,r.l);n[t]=Kv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function Qv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function Kv(e,r,n){return n=n||{i:L,j:L},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function e$(e){Ke[e]&&Qr(3)}$(function(e,r){return r});function r$(e,r){return e$(e),Ke[e]={f:n$,u:r,a:a$},ic(e)}var n$=$(function(e,r){return function(n){return e(r(n))}});function a$(e,r){var n=L,a=Ke[e].u,t=Vr(null);Ke[e].b=t,Ke[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(nc,a,c);Ie(l)||Qr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document!="undefined"?document:{};function It(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var cc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ut(n),e:t,f:e,b:i}})}),dr=cc(void 0),t$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ut(n),e:t,f:e,b:i}})}),o$=t$(void 0);function i$(e,r,n,a){return{$:3,d:Ut(e),g:r,h:n,i:a}}var c$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return yr([e,r],function(){return e(r)})});x(function(e,r,n){return yr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return yr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return yr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return yr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return yr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return yr([e,r,n,a,t,i,c,l],function(){return Nt(e,r,n,a,t,i,c,l)})});jt(function(e,r,n,a,t,i,c,l,u){return yr([e,r,n,a,t,i,c,l,u],function(){return La(e,r,n,a,t,i,c,l,u)})});var lc=$(function(e,r){return{$:"a0",n:e,o:r}}),l$=$(function(e,r){return{$:"a1",n:e,o:r}}),uc=$(function(e,r){return{$:"a2",n:e,o:r}}),kn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function u$(e){return e=="script"?"p":e}function v$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(lc,r.n,$$(e,r.o)):r});function $$(e,r){var n=to(r);return{$:r.$,a:n?p(Qf,n<3?f$:s$,Me(e),r.a):o($a,e,r.a)}}var f$=$(function(e,r){return P(e(r.a),r.b)}),s$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Ut(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ri(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ri(c,t,i):c[t]=i}return r}function ri(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,gr(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?d$(e,t):a==="a0"?b$(e,r,t):a==="a3"?m$(e,t):a==="a4"?p$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function d$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function m$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function p$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function b$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=g$(r,i),e.addEventListener(t,c,Jt&&{passive:to(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function g$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=to(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function h$(e,r){return e.$==r.$&&Hr(e.a,r.a)}function vc(e,r){var n=[];return Ue(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ue(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=L$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ue(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!_$(d,m):d!==m)&&_e(n,2,a,m),Ue(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ni(e,r,n,a,w$);return;case 2:ni(e,r,n,a,y$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Ot(e.d,r.d);w&&_e(n,4,a,w);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function _$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ni(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Ot(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&h$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function w$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ue(s,i[v],n,++a),a+=s.b||0}}function y$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,_=g.b,T=b.b,M=void 0,G=void 0;if(w===y){f++,Ue(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;G=y===N}if(R){var B=R.a,Y=R.b;M=w===B}if(M&&G){f++,Ue(_,Y,t,f),cn(i,t,w,T,m,c),f+=_.b||0,f++,ln(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(M){f++,cn(i,t,y,T,m,c),Ue(_,Y,t,f),f+=_.b||0,d+=1,m+=2;continue}if(G){f++,ln(i,t,w,_,f),f+=_.b||0,f++,Ue(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,ln(i,t,w,_,f),cn(i,t,y,T,m,c),f+=_.b||0,f++,Ue(W,Y,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;ln(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];cn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var $c="_elmW6BL";function cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}cn(e,r,n+$c,a,t,i)}function ln(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ue(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}ln(e,r,n+$c,a,t)}function fc(e,r,n,a){un(e,r,n,0,0,r.b,a)}function un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)fc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&un(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return un(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=un(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function sc(e,r,n,a){return n.length===0?e:(fc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=x$(t,a);t===e&&(e=i)}return e}function x$(e,r){switch(r.$){case 0:return S$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return T$(e,r);case 5:return r.s(e);default:Qr(10)}}function S$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function T$(e,r){var n=r.s,a=C$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function C$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function qt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(kn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=rr(qt(v[a]),u);return p(dr,l,r,u)}function L$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var P$=E(function(e,r,n,a){return Xt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=qt(l);return dc(i,function(v){var s=c(v),d=vc(u,s);l=sc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Xt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=ur.title,v=ur.body,s=qt(v);return dc(i,function(d){ca=c;var m=l(d),f=dr("body")(L)(m.eu),g=vc(s,f);v=sc(v,s,g,t),s=f,ca=0,u!==m.fK&&(ur.title=u=m.fK)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function dc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(co,oo,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(co,oo,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(co,oo,sr(function(){history.replaceState({},"",r),e()}))});var z$={addEventListener:function(){},removeEventListener:function(){}},k$=typeof window!="undefined"?window:z$;x(function(e,r,n){return tc(sr(function(a){function t(i){Wt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?re(n.a):q});function mc(e,r){return sr(function(n){ua(function(){var a=document.getElementById(e);n(a?Vr(r(a)):Gv(es(e)))})})}function M$(e){return sr(function(r){ua(function(){r(Vr(e()))})})}$(function(e,r){return mc(r,function(n){return n[e](),zn})});$(function(e,r){return M$(function(){return k$.scroll(e,r),zn})});x(function(e,r,n){return mc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var D$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var A$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(C(ll,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(ll,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var B$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/F$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function F$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Yt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),V$=x(function(e,r,n){return new Float64Array([e,r,n])}),E$=function(e){return e[0]},R$=function(e){return e[1]},j$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var N$=function(e){return new Float64Array([e.fT,e.fX,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(pc);function bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(pc(e,r,n),n)}$(bc);function gc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/gc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var G$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),vn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(vn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=Yt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=vn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(vn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(vn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(vn(r,a)+e[14])/n,t});var W$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var H$=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},X$=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/I$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function I$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var U$=new Float64Array(16),J$=new Float64Array(16),O$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},q$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function hc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(hc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return hc(c,l,i,t,n,a)});function _c(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(_c);E(function(e,r,n,a){return _c(e,r,n,a,-1,1)});function wc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],_=e[15],T=r[0],M=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],B=r[7],Y=r[8],Q=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],ke=r[14],Te=r[15];return n[0]=a*T+l*M+d*G+b*j,n[1]=t*T+u*M+m*G+w*j,n[2]=i*T+v*M+f*G+y*j,n[3]=c*T+s*M+g*G+_*j,n[4]=a*R+l*N+d*W+b*B,n[5]=t*R+u*N+m*W+w*B,n[6]=i*R+v*N+f*W+y*B,n[7]=c*R+s*N+g*W+_*B,n[8]=a*Y+l*Q+d*oe+b*ve,n[9]=t*Y+u*Q+m*oe+w*ve,n[10]=i*Y+v*Q+f*oe+y*ve,n[11]=c*Y+s*Q+g*oe+_*ve,n[12]=a*te+l*se+d*ke+b*Te,n[13]=t*te+u*se+m*ke+w*Te,n[14]=i*te+v*se+f*ke+y*Te,n[15]=c*te+s*se+g*ke+_*Te,n}$(wc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],_=r[4],T=r[5],M=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*T+v*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+d*R,n[11]=0,n[12]=a*N+c*W+v*B+m,n[13]=t*N+l*W+s*B+f,n[14]=i*N+u*W+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Yt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/gc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=g+f,T=b-m,M=g-f,G=c*c*v+u,j=w+d,R=b+m,N=w-d,W=l*l*v+u,B=n[0],Y=n[1],Q=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],ke=n[7],Te=n[8],mr=n[9],pr=n[10],Wa=n[11],Vu=n[12],Eu=n[13],Ru=n[14],ju=n[15];return a[0]=B*y+ve*_+Te*T,a[1]=Y*y+te*_+mr*T,a[2]=Q*y+se*_+pr*T,a[3]=oe*y+ke*_+Wa*T,a[4]=B*M+ve*G+Te*j,a[5]=Y*M+te*G+mr*j,a[6]=Q*M+se*G+pr*j,a[7]=oe*M+ke*G+Wa*j,a[8]=B*R+ve*N+Te*W,a[9]=Y*R+te*N+mr*W,a[10]=Q*R+se*N+pr*W,a[11]=oe*R+ke*N+Wa*W,a[12]=Vu,a[13]=Eu,a[14]=Ru,a[15]=ju,a});function Y$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(Y$);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Z$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Z$);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=bc(e,r,Yt),t=va(mt(n,a,ai),ai),i=va(mt(a,t,ti),ti),c=U$,l=J$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,wc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var oi=0;function wn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var Q$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},K$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),ef=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),rf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),nf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),af=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),tf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),of=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),cf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),lf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),uf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},vf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},$f=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},ff=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},yc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},xc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},sf=function(e){e.gl.disable(e.gl.CULL_FACE)},df=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},mf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},pf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],bf=[vf,$f,ff,yc,xc,sf,df,mf,pf];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function gf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Sc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function hf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[y]:w[y][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][y]:w[T][y][_]})}var u=Sc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Zt(n.b)*s);wn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function _f(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=wf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Zt(r.b),indexBuffer:null,buffers:{}}}function wf(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return wn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var Tc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),yc(n),xc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=oi++,v||(v=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=gf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=yf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),xf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=_f(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=hf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Sc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,y*T)}for(n.toggle=!n.toggle,wn(W0(n),i.a),u=0;u<ii.length;u++){var M=n[ii[u]];M.toggle!==n.toggle&&M.enabled&&(bf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return wn(t,e.g),r});function yf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function xf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Sf=x(function(e,r,n){return i$(r,{g:n,f:{},h:e},Mf,Df)}),Tf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Cf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Lf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Pf=$(function(e,r){e.contextAttributes.antialias=!0}),zf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),kf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Mf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};wn(function(t){return o(G0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Q$(function(){return o(Tc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Df(e,r){return r.f=e.f,Tc(r)}var k=Yu,Hn=Ju,Cc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Hn,e,l,v)}else{var u=c.a;return p(Hn,i,l,u)}});return p(Hn,i,p(Hn,e,r,t),a)}),Qt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ui=function(e){return p(Qt,x(function(r,n,a){return o(k,P(r,n),a)}),L,e)},Lc=1,Af=2,Pc=0,ye=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),vi=$(function(e,r){return{$:0,a:e,b:r}}),zc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Bf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Ff=wv,Vf=Nv,Ae=rc,Tr=$(function(e,r){return o(gv,e,Pa(r))}),eo=$(function(e,r){return h(o(bv,e,r))}),kc=function(e){return o(Tr,`
    `,o(eo,`
`,e))},Mn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Dr=function(e){return p(Mn,$(function(r,n){return n+1}),0,e)},Ef=Zu,Rf=x(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Ar=$(function(e,r){return p(Rf,e,r,L)}),Mc=$(function(e,r){return p(Ef,e,o(Ar,0,Dr(r)-1),r)}),er=Pv,Dc=function(e){var r=er(e);return 97<=r&&r<=122},Ac=function(e){var r=er(e);return r<=90&&65<=r},jf=function(e){return Dc(e)||Ac(e)},Nf=function(e){var r=er(e);return r<=57&&48<=r},Gf=function(e){return Dc(e)||Ac(e)||Nf(e)},Be=function(e){return p(Mn,k,L,e)},Kr=sv,Wf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+kc(Hf(r))))}),Hf=function(e){return o(Xf,e,L)},Xf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Kr(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return jf(y)&&o(Ff,Gf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Dr(s))+" ways:"));return o(Tr,`

`,o(k,g,o(Mc,Wf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(kc(o(Vf,4,f))+(`

`+m))}}),Fe=32,pt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Wu,ro=iv,no=$(function(e,r){return qo(r)/qo(e)}),If=tv,yn=ro(o(no,2,Fe)),Bc=C(pt,0,yn,bt,bt),Fc=Xu,Vc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ec=cv,gt=Hu,ze=$(function(e,r){return J(e,r)>0?e:r}),Uf=function(e){return{$:0,a:e}},ao=Iu,Jf=$(function(e,r){e:for(;;){var n=o(ao,Fe,e),a=n.a,t=n.b,i=o(k,Uf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Of=function(e){var r=e.a;return r},qf=$(function(e,r){e:for(;;){var n=ro(r/Fe);if(n===1)return o(ao,Fe,e).a;var a=o(Jf,e,L),t=n;e=a,r=t;continue e}}),Rc=$(function(e,r){if(r.l){var n=r.l*Fe,a=Ec(o(no,Fe,n-1)),t=e?Be(r.z):r.z,i=o(qf,t,r.l);return C(pt,gt(r.p)+n,o(ze,5,a*yn),i,r.p)}else return C(pt,gt(r.p),yn,bt,r.p)}),Yf=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Rc,!1,{z:a,l:n/Fe|0,p:t});var i=Vc(p(Fc,Fe,r,e)),c=e,l=r-Fe,u=n,v=o(k,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Zf=$(function(e,r){if(e<=0)return Bc;var n=e%Fe,a=p(Fc,n,e-n,r),t=e-n-Fe;return S(Yf,r,t,e,L,a)}),Ie=function(e){return!e.$},A=Vv,Z=Mv,D=Fv,$e=Dv,$a=Ev,Qf=Rv,Me=kv,to=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=dr("div"),Kf=function(e){return{$:2,a:e}},jc=$(function(e,r){return e}),Nc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),Lr=function(e){return e},es=Lr,$i=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),rs=yv,Cr=dv,Xr=hv,Dn=$(function(e,r){return e<1?r:p(Xr,e,Cr(r),r)}),za=Sv,ka=function(e){return e===""},Ma=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),Gc=Tv,fi=he(function(e,r,n,a,t){if(ka(t)||o(rs,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return re(we($i,e,o(Ma,c,t),u,r,n,a))}else return re(we($i,e,t,q,r,n,a))}),si=E(function(e,r,n,a){if(ka(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return S(fi,e,o(Dn,i,a),r,n,o(Ma,i,a))}else return S(fi,e,"/",r,n,a)}),di=x(function(e,r,n){if(ka(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return C(si,e,re(o(Dn,t+1,n)),r,o(Ma,t,n))}else return C(si,e,q,r,n)});$(function(e,r){if(ka(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(di,e,re(o(Dn,a+1,r)),o(Ma,a,r))}else return p(di,e,q,r)});var ns=xv,oo=function(e){},An=Vr,as=An(0),Wc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Mn,e,r,Be(d)):C(Wc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),tr=x(function(e,r,n){return C(Wc,e,r,0,n)}),ee=$(function(e,r){return p(tr,$(function(n,a){return o(k,e(n),a)}),L,r)}),fa=ft,io=$(function(e,r){return o(fa,function(n){return An(e(n))},r)}),ts=x(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return An(o(e,a,t))},n)},r)}),os=function(e){return p(tr,ts(k),An(L),e)},is=qv,cs=$(function(e,r){var n=r;return tc(o(fa,is(e),n))}),ls=x(function(e,r,n){return o(io,function(a){return 0},os(o(ee,cs(e),r)))}),us=x(function(e,r,n){return An(0)}),vs=$(function(e,r){var n=r;return o(io,e,n)});Ke.Task=Jv(as,ls,us,vs);var $s=ic("Task"),co=$(function(e,r){return $s(o(io,e,r))}),fs=P$,ss=$v,sa={$:1},Hc=function(e){return{$:2,a:e}},Da={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),en=function(e){var r=e.b.B;return r.a},ds=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ne,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},Xc=function(e){var r=e.b;return o(Ne,Da,r)},nr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ms=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Xc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,en(n).db)>0?o(ae,ds,nr(o(Ne,sa,t))):Lr)(o(Ne,Hc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Nc,l.eA,Ze(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,Da,{B:P(v,s),ab:L,T:o(k,t.B,t.T)})}}),Ic=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ps=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),bs=$(function(e,r){return Be(p(ps,e,r,L))}),Uc=x(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(bs,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(Uc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),gs=$(function(e,r){return p(Uc,0,e,r)}),hs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(h([a]),t)),c=o(gs,e,i),l=o(Ic,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,sa,{B:u,ab:v,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(Ne,sa,{B:d,ab:L,T:m})}else return r}}),_s=function(e){var r=e.b;return o(Ne,sa,r)},ws=function(e){var r=e.b;return o(Ne,Hc({cX:en(e).db}),r)},ys=$(function(e,r){switch(e.$){case 1:return _s(r);case 2:return Xc(r);case 3:return ws(r);default:var n=e.a;return o(hs,n,r)}}),Jc=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),xs=$(function(e,r){return Ze(r,{av:e(r.av)})}),Ss=function(e){return{$:3,a:e}},Ts=function(e){return{$:2,a:e}},Oc=$(function(e,r){return{$:0,a:e,b:r}}),qc=$(function(e,r){return{$:1,a:e,b:r}}),xe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},lo=Cv,Cs=x(function(e,r,n){return o(nr,0/0,lo(o(e,r,n)))}),Yc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ls=pv,Zc=function(e){return p(Ls,k,L,e)},Ps=$(function(e,r){var n=o(Yc,function(a){return a!=="0"&&a!=="."},Zc(r));return le(e&&n?"-":"",r)}),me=rc,ht=fv,Qc=zv,Kc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Kr(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",Kc(t))}else{var i=er(r);return i>=48&&i<57?o(ht,Qc(i+1),n):"0"}},_t=ov,zs=vv,Aa=function(e){return o(ht,e,"")},el=x(function(e,r,n){return e<=0?n:p(el,e>>1,le(r,r),e&1?le(n,r):n)}),xn=$(function(e,r){return p(el,e,r,"")}),wt=x(function(e,r,n){return le(n,o(xn,e-Cr(n),Aa(r)))}),yt=mv,rl=function(e){var r=o(eo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},ks=function(e){var r=o(eo,"e",me(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(nr,0,Gc(o(ns,"+",t)?o(Dn,1,t):t)),c=rl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(nr,"0",o(xe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(xe,Jc(Aa),Kr(le(o(xn,O(i),"0"),v))))):p(wt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ms=x(function(e,r,n){if(_t(n)||zs(n))return me(n);var a=n<0,t=rl(ks(O(n))),i=t.a,c=t.b,l=Cr(i)+r,u=le(o(xn,-l+1,"0"),p(wt,l,"0",le(i,c))),v=Cr(u),s=o(ze,1,l),d=o(e,a,p(Xr,s,v,u)),m=p(Xr,0,s,u),f=d?yt(o(nr,"1",o(xe,Kc,Kr(yt(m))))):m,g=Cr(f),b=f==="0"?f:r<=0?le(f,o(xn,O(r),"0")):J(r,Cr(c))<0?p(Xr,0,g-r,f)+("."+p(Xr,g-r,g,f)):le(i+".",p(wt,r,"0",c));return o(Ps,a,b)}),dn=Ms($(function(e,r){var n=Kr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Ds=Cs(dn),As=x(function(e,r,n){var a=o(no,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ds,t,n)}),nl=qu,Ba=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(nl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},qr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,y),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),xt=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(nl,e,t);switch(u){case 0:return S(qr,a,t,i,p(xt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(qr,a,t,i,c,p(xt,e,r,l))}}),mn=x(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Bs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},al=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,y))}else return e},mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,y=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,y))}else return e},Fs=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,mi(r)}else break e;else return c.a,c.d,mi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Kn(t),l);var u=al(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,v,s,d,Kn(m),f)}else return ar}else return S(X,r,n,a,Kn(t),l)}else return ar},pn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(pn,e,i),c);var u=al(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,v,s,d,o(pn,e,m),f)}else return ar}else return S(X,n,a,t,o(pn,e,i),c);else return o(Vs,e,Nt(Fs,e,r,n,a,t,i,c))}),Vs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=Bs(c);if(l.$===-1){var u=l.b,v=l.c;return S(qr,n,u,v,i,Kn(c))}else return ar}else return S(qr,n,a,t,i,o(pn,e,c))}else return ar}),Es=$(function(e,r){var n=o(pn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Xn=x(function(e,r,n){var a=r(o(Ba,e,n));if(a.$)return o(Es,e,n);var t=a.a;return p(mn,e,t,n)}),Rs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Xn,r,xe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(qc,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Xn,r,xe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Oc,P(i,c),p(As,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Xn,r,xe(function(a){return a.$===3?Ss(n):a}));default:var r=e.a,n=e.b;return o(Xn,r,xe(function(a){return a.$===2?Ts(n):a}))}},js=function(e){return xs(Rs(e))},Ns=$(function(e,r){return o(ee,js(e),r)}),Gs=$(function(e,r){return Ze(r,{eA:o(Ns,e,r.eA)})}),Ws=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ze(a,{B:o(Jc,Gs(e),a.B)}))}),Hs=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Xs=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ze(t,{B:o(Hs,o(e,i.a,r),i)}))}),Is=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ze(a,{aL:!a.aL});case 2:var t=n.a;return Ze(a,{G:p(ms,e,t,a.G)});case 3:var i=n.a;return Ze(a,{G:o(Ws,i,a.G)});case 4:var c=n.a;return Ze(a,{G:p(Xs,r,c,a.G)});default:var l=n.a;return Ze(a,{G:o(ys,l,a.G)})}}),Us=$(function(e,r){return o(Ne,Da,{B:P(e,r(e)),ab:L,T:L})}),Js=Yv,pi=Js(L),da=Bv,Sn=Av,Os=r$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",da(Sn)))},o(D,"left",Z))},o(D,"pressedKeys",da(Sn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),qs=function(e){return{$:4,a:e}},Ys={$:0},Zs=ac,Xe=$(function(e,r){return o(uc,e,Zs(r))}),U=Xe("className"),Qs=function(e){var r=e.b.B;return r.b},ma=Xe("id"),Ks=c$,pa=Ks,ed=l$,ge=ed,rd={$:1},nd=function(e){return{$:3,a:e}},ad=function(e){return{$:5,a:e}},bi=dr("a"),uo=dr("button"),td=kn("d"),tl=cc("http://www.w3.org/2000/svg"),od=tl("path"),id=tl("svg"),cd=kn("viewBox"),bn=function(e){return o(id,h([cd("0 0 100 100"),o(ge,"width","100%"),o(ge,"height","100%")]),h([o(od,h([td(e)]),L)]))},gi=function(e){return o(Xe,"href",v$(e))},Ur={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ld=function(e){return{$:0,a:e}},ol=lc,il=$(function(e,r){return o(ol,e,ld(r))}),vo=function(e){return o(il,"click",Me(e))},hi=Xe("target"),ud=Xe("title"),St=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),vd=st,be=vd,$d=function(e){return p(Qt,x(function(r,n,a){return o(k,n,a)}),L,e)},fd=$(function(e,r){return{$:3,a:e,b:r}}),sd=$(function(e,r){return{$:2,a:e,b:r}}),dd=$(function(e,r){return{$:0,a:e,b:r}}),md=$(function(e,r){return{$:1,a:e,b:r}}),Fa=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pd=C(Fa,0/255,0/255,0/255,1),bd=ac,gd=$(function(e,r){return o(uc,e,bd(r))}),hd=gd("checked"),Oe=lv,_d=x(function(e,r,n){return le(o(xn,e-Cr(n),Aa(r)),n)}),ba=Ku,cl=function(e){var r=function(n){return n<10?Ae(n):Aa(Qc(87+n))};return e<16?r(e):le(cl(e/16|0),r(o(ba,16,e)))},wd=o(ae,cl,o(_d,2,"0")),$o=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},yd=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return o(Tr,"",o(k,"#",o(ee,o(ae,Oe,wd),h([n*255,a*255,t*255]))))},Tt=Xe("htmlFor"),Ct=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),xd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),Va=$(function(e,r){return p(tr,xd(e),L,r)}),ll=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Sd=A$,Td=Lv,Cd=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Ld=D$,Pd=function(e){return o(Ld,{ew:!1,fe:!1},e)},Ea=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},zd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),kd=function(e){return{$:2,a:e}},Md=function(e){return{$:0,a:e}},Dd=function(e){return{$:1,a:e}},Ia=$(function(e,r){return er(r)-er(e)}),Ua=x(function(e,r,n){var a=er(n);return J(er(e),a)<1&&J(a,er(r))<1}),Ad=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Dd(r))},a=p(Ua,"0","9",r)?ue(o(Ia,"0",r)):p(Ua,"a","z",r)?ue(10+o(Ia,"a",r)):p(Ua,"A","Z",r)?ue(10+o(Ia,"A",r)):ye(Md(r));return o(ga,n,a)}),ul=$(function(e,r){var n=Kr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return ue(c+l*e)},o(ul,e,i))},o(Ad,e,t))}),Bd=$(function(e,r){return 2<=e&&e<=36?o(ul,e,yt(r)):ye(kd(e))}),Fd=Bd(16),Vd=x(function(e,r,n){return C(Fa,e,r,n,1)}),vl=E(function(e,r,n,a){return C(Fa,e,r,n,a)}),Bn=Qu,Ed=$(function(e,r){var n=o(Bn,10,e);return Oe(r*n)/n}),Rd=_v,jd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zc(n);if(a.b&&!a.b.b){var t=a.a;return Td(h([t,t]))}else return n};return o(ae,Rd,o(ae,function(n){return o(xe,function(a){return p(Sd,1,a,n)},Pd(e))},o(ae,Ct(Ea),o(ae,xe(function(n){return n.fF}),o(ae,xe(Va(Lr)),o(ae,Cd("Parsing hex regex failed"),ga(function(n){var a=o(ee,o(ae,r,o(ae,Fd,zd(If))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(vl,t/255,c/255,u/255,o(Ed,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Vd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ha=dr("input"),Lt=dr("label"),Pt=Xe("name"),$l=$(function(e,r){return p(tr,D,r,e)}),Nd=o($l,h(["target","checked"]),Z),Gd=function(e){return o(il,"change",o($a,e,Nd))},Wd=function(e){return P(e,!0)},Hd=function(e){return{$:1,a:e}},Xd=$(function(e,r){return o(ol,e,Hd(r))}),Id=o($l,h(["target","value"]),Sn),fo=function(e){return o(Xd,"input",o($a,Wd,o($a,e,Id)))},fl=Xe("max"),sl=Xe("min"),dl=function(e){return o(Xe,"step",e)},_a=Xe("type"),so=Xe("value"),_i=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,h([o(Lt,h([Tt(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([be(r)])),o(I,h([U("inline-block float-right")]),h([be(me(n))]))]))])),o(ha,h([_a("range"),o(ge,"width","100%"),ma(r),Pt(r),sl(me(a)),fl(me(t)),so(me(n)),dl(me(i)),fo(o(ae,lo,o(ae,nr(42),c)))]),L)]))},Ud=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Jd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(Lt,h([Tt(e)]),h([be(e)]))])),o(ha,h([_a("checkbox"),ma(e),Pt(e),Gd(fd(e)),hd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return _i({cf:e,cr:i,cv:t,cz:dd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return _i({cf:e,cr:i,cv:t,cz:o(ae,Oe,md(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,h([o(I,h([o(ge,"margin-bottom","6px")]),h([o(Lt,h([Tt(e)]),h([be(e)]))])),o(ha,h([_a("color"),o(ge,"width","100%"),o(ge,"height","26px"),o(ge,"padding","0px"),ma(e),Pt(e),fo(function(l){return o(sd,e,o(Ud,pd,jd(l)))}),so(yd(c))]),L)]))}}),Od=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([be(e.ff)])),o(I,h([U("pl-2 pr-2")]),$d(o(St,Jd,e.av)))]))},qd=function(e){return o(I,h([U("text-xs text-white60")]),o(ee,Od,e))},Yd=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([be("clock: "+o(dn,3,en(e).db))]))},Zd=function(e){e.a;var r=e.b.T;return o(xe,function(n){return Oe(60/(en(e).db-n))},o(xe,o(ae,Of,function(n){return n.db}),Ea(o(Ic,59,r))))},Qd=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Zd(e);if(r.$===1)return h([be("... Fps")]);var n=r.a;return h([be(Ae(n)+" Fps")])}())},Kd=function(e){return{$:0,a:e}},em=function(e){var r=e.b.T;return Dr(r)},rm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Dr(r)+1+Dr(n)},nm=function(e){return o(ha,h([U("absolute left-[100px] w-[490px]"),_a("range"),sl(Ae(0)),fl(Ae(rm(e)-1)),so(Ae(em(e))),dl(Ae(1)),fo(o(ae,lo,o(ae,nr(42),o(ae,Oe,Kd))))]),L)},wi={$:1},am={$:3},tm={$:2},ml=function(e){return!e.b},yi=$(function(e,r){return o(uo,h([U("px-2 bg-black40"),U(r),vo(e)]),h([be("REC")]))}),xi=$(function(e,r){return o(uo,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),vo(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([bn(e)]))]))}),om=function(e){var r=e.a,n=e.b.ab;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(yi,wi,"text-red-500 font-bold");case 1:return o(yi,tm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return ml(n)?o(I,L,L):o(xi,Ur.fo,am);default:return o(xi,Ur.fn,wi)}}()]))},im=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([nm(e),om(e),Qd(e),Yd(e)]))},pl=function(e){return o(Tr,"",e)},cm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(tr,t,L,a);return o(k,n,i)}else return L}),lm=function(e){var r=e.a;return hr(r,Da)},xr=dr("p"),um=dr("pre"),vm=$(function(e,r){var n=lm(r.G)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(ge,"left",me(e.fp.fT+.5*e.cS.fR)+"px"),o(ge,"top",me(-e.fp.fX+.5*e.cS.eW)+"px")]),h([o(I,h([U(e.fp.e4?"fill-black80":"fill-white40")]),h([bn(Ur.fp)]))]));return o(I,L,h([n,o(um,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(xr,L,h([be("pressedKeys: "+pl(o(cm," ",e.e7.fq)))])),o(xr,L,h([be("delta time: "+o(dn,4,e.eJ))])),o(xr,L,h([be("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(xr,L,h([be("pointer.x: "+o(dn,2,e.fp.fT))])),o(xr,L,h([be("pointer.y: "+o(dn,2,e.fp.fX))])),o(xr,L,h([be("wheel deltaX: "+me(e.fQ.eD))])),o(xr,L,h([be("wheel deltaY: "+me(e.fQ.eE))]))]))]))}),$m=$(function(e,r){var n=o(uo,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),vo(rd),ud("Distraction Free Mode")]),h([bn(Ur.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(bi,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),gi("https://twitter.com/AzizErkalSelman"),hi("_blank")]),h([bn(Ur.fL)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(bi,h([U("fill-githubCat40 hover:fill-githubCat"),gi("https://github.com/erkal/elm-3d-playground-exploration"),hi("_blank")]),h([bn(Ur.eQ)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(pa,nd,qd(en(r.G).eA))])),o(pa,ad,im(r.G)),o(vm,e,r)]))}),fm=x(function(e,r,n){var a=Qs(n.G),t=en(n.G);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ge,"width",me(t.cS.fR)+"px"),o(ge,"height",me(t.cS.eW)+"px")]),h([o(I,h([U("fixed")]),h([o(pa,jc(Ys),o(e,t,a))])),o(I,h([ma("gui")]),h([o($m,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(pa,qs,o(r,t,a))]))]))]))}),sm=He(function(e,r,n,a,t,i){var c=$(function(u,v){return P(C(Is,r,i,u,v),pi)}),l=function(u){var v=o(Nc,n,u.e1);return P({aL:u.e1.cS.fR<500,G:o(Us,v,a)},pi)};return fs({e0:l,fG:jc(Os(Kf)),fM:c,fP:o(fm,e,t)})}),dm=E(function(e,r,n,a){return we(sm,e,r,n,a,$(function(t,i){return o(I,L,L)}),x(function(t,i,c){return c}))}),mm=function(e){return{}},pm=x(function(e,r,n){return{av:n,e5:r,ff:e}}),bl=ar,bm=function(e){return p(Mn,$(function(r,n){var a=r.a,t=r.b;return p(mn,a,t,n)}),bl,e)},gm=x(function(e,r,n){return p(pm,e,r,bm(n))}),Ja=gm,or=x(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Oc,P(a,t),n))}),Si=x(function(e,r,n){var a=r.a,t=r.b;return P(e,o(qc,P(a,t),n))}),hm=h([p(Ja,"Camera",!0,h([p(or,"camera x",P(0,16),8),p(or,"camera y",P(0,10),0),p(or,"camera z",P(0,16),6)])),p(Ja,"Parameters",!0,h([p(or,"radius",P(0,6),1),p(Si,"number of cubes",P(1,100),19),p(Si,"number of waves",P(1,20),2),p(or,"cube size",P(.1,4),1),p(or,"cycle duration",P(1,10),5),p(or,"wave height",P(.5,6),1.5)])),p(Ja,"Colors and light",!0,h([p(or,"saturation",P(0,1),.8),p(or,"lightness",P(0,1),.7)]))]),_m=$(function(e,r){return r}),mo=$(function(e,r){return{$:0,a:e,b:r}}),Ve=function(e){var r=e;return O(r)},Oa=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vr=$(function(e,r){var n=e,a=r;return a-n}),$r=function(e){return e},wm=$r({fT:-1,fX:0,c5:0}),ym=$r({fT:0,fX:-1,c5:0}),gl=$r({fT:0,fX:0,c5:-1}),hl=$r({fT:1,fX:0,c5:0}),po=$r({fT:0,fX:1,c5:0}),bo=$r({fT:0,fX:0,c5:1}),fr=function(e){return e},de=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),xm=He(function(e,r,n,a,t,i){var c=o(Oa,n,i)?bo:gl,l=o(Oa,r,t)?po:ym,u=o(Oa,e,a)?hl:wm,v=V(Ve(o(vr,e,a)),Ve(o(vr,r,t)),Ve(o(vr,n,i))),s=p(de,o(qa,e,a),o(qa,r,t),o(qa,n,i)),d=fr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Pr=function(e){var r=e;return r.fT},zr=function(e){var r=e;return r.fX},kr=function(e){var r=e;return r.c5},Sm=$(function(e,r){return we(xm,Pr(e),zr(e),kr(e),Pr(r),zr(r),kr(r))}),zt=x(function(e,r,n){return{fT:e,fX:r,c5:n}}),Tm=$(function(e,r){var n=r/2;return o(mo,e,o(Sm,p(zt,-n,-n,-n),p(zt,n,n,n)))}),Br=ev,kt=function(e){return e*Br/180},Cm=$(function(e,r){return o(xe,function(n){if(n.$)return 0;var a=n.b;return a},o(Ba,e,r.av))}),Lm=$(function(e,r){return o(nr,0,Ea(o(Va,Cm(e),r)))}),Pm=$(function(e,r){return o(Lm,e,r.eA)}),lr=Pm,zm=$(function(e,r){return o(xe,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ba,e,r.av))}),km=$(function(e,r){return o(nr,0,Ea(o(Va,zm(e),r)))}),Mm=$(function(e,r){return o(km,e,r.eA)}),Ti=Mm,go=function(e){return{$:5,a:e}},Dm=function(e){return go(e)},Am=E(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(Fa,f,m,d,a)}),Bm=x(function(e,r,n){return C(Am,e,r,n,1)}),Mt=function(e){return{$:0,a:e}},_l=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),wl=x(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Ya=function(e){return p(wl,0,1,e<=.04045?e/12.92:o(Bn,(e+.055)/1.055,2.4))},Fn=V$,Fm=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return p(Fn,Ya(n),Ya(a),Ya(t))},Vm=function(e){return p(_l,0,Mt(Fm(e)),Mt(0))},yl=$(function(e,r){return{$:2,a:e,b:r}}),xl=$(function(e,r){return{$:4,a:e,b:r}}),Sl=$(function(e,r){return{$:3,a:e,b:r}}),Tl=$(function(e,r){return{$:1,a:e,b:r}}),Em=x(function(e,r,n){return{fT:e,fX:r,c5:n}}),Rm=function(e){var r=e;return r},ho=function(e){var r=e;return Rm(r.er)},_o=function(e){var r=e;return r.aK},rn=function(e){var r=e;return r.cA},Vn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),Er=function(e){var r=e;return r.c3},Rr=function(e){var r=e;return r.c4},jr=function(e){var r=e;return r.c6},jm=$(function(e,r){return fr({cA:o(Vn,e,rn(r)),c3:Er(r),c4:Rr(r),c6:jr(r)})}),Nm=$(function(e,r){return{er:o(jm,e,ho(r)),aK:_o(r)}}),wo=$(function(e,r){return{eG:r,cA:e}}),Gm=$(function(e,r){var n=r;return o(wo,o(Vn,e,n.cA),n.eG)}),Wm=$(function(e,r){var n=r;return{k:o(Gm,e,n.k),e9:n.e9,fr:n.fr}}),yo=function(e){var r=e;return r},Hm=function(e){return e},Cl=$(function(e,r){var n=yo(r),a=n.a,t=n.b;return Hm(P(e(a),e(t)))}),Xm=$(function(e,r){return o(Cl,Vn(e),r)}),xo=function(e){var r=e;return r.ey},So=function(e){var r=e;return r.fr},Ll=$(function(e,r){return{ey:r,fr:Ve(e)}}),Im=$(function(e,r){return o(Ll,So(r),o(Vn,e,xo(r)))}),Pl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),Um=$(function(e,r){return o(Pl,Vn(e),r)}),To=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Em,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(mo,s,o(Nm,i,c));case 1:var s=r.a,l=r.b;return o(Tl,s,o(Um,i,l));case 3:var s=r.a,u=r.b;return o(Sl,s,o(Im,i,u));case 2:var s=r.a,v=r.b;return o(yl,s,o(Wm,i,v));case 4:var s=r.a,d=r.b;return o(xl,s,o(Xm,i,d));default:var m=r.a;return go(o(ee,To(V(n,a,t)),m))}}),Jm=function(e){return To(V(0,e,0))},Om=function(e){return To(V(0,0,e))},Tn=function(e){return e},Fr=rv,Yr=nv,ea=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Yr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,y=g*g,_=1-2*(f+y),T=s.c5*u,M=l*T,G=2*(w-M),j=2*(w+M),R=d*T,N=2*(R+b),W=2*(R-b),B=g*T,Y=2*(B-m),Q=2*(B+m),oe=T*T,ve=1-2*(y+oe),te=1-2*(f+oe);return{fT:ve*i.fT+G*i.fX+N*i.c5,fX:j*i.fT+te*i.fX+Y*i.c5,c5:W*i.fT+Q*i.fX+_*i.c5}}),En=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Yr(c),v=a.cA,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,y=l*w,_=w*w,T=b.fX*u,M=l*T,G=w*T,j=T*T,R=1-2*(_+j),N=b.c5*u,W=l*N,B=2*(G-W),Y=2*(G+W),Q=w*N,oe=2*(Q+M),ve=2*(Q-M),te=T*N,se=2*(te-y),ke=2*(te+y),Te=N*N,mr=1-2*(j+Te),pr=1-2*(_+Te);return{fT:s.fT+mr*d+B*m+oe*f,fX:s.fX+Y*d+pr*m+se*f,c5:s.c5+ve*d+ke*m+R*f}}),qm=x(function(e,r,n){return fr({cA:p(En,e,r,rn(n)),c3:p(ea,e,r,Er(n)),c4:p(ea,e,r,Rr(n)),c6:p(ea,e,r,jr(n))})}),Ym=x(function(e,r,n){return{er:p(qm,e,r,ho(n)),aK:_o(n)}}),Zm=$(function(e,r){var n=o(En,e,r),a=o(ea,e,r);return function(t){var i=t;return o(wo,n(i.cA),a(i.eG))}}),Qm=x(function(e,r,n){var a=n;return{k:p(Zm,e,r,a.k),e9:a.e9,fr:a.fr}}),Km=x(function(e,r,n){return o(Cl,o(En,e,r),n)}),e0=x(function(e,r,n){return o(Ll,So(n),p(En,e,r,xo(n)))}),r0=x(function(e,r,n){return o(Pl,o(En,e,r),n)}),zl=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(mo,l,p(Ym,e,r,a));case 1:var l=n.a,t=n.b;return o(Tl,l,p(r0,e,r,t));case 3:var l=n.a,i=n.b;return o(Sl,l,p(e0,e,r,i));case 2:var l=n.a,c=n.b;return o(yl,l,p(Qm,e,r,c));case 4:var l=n.a,u=n.b;return o(xl,l,p(Km,e,r,u));default:var v=n.a;return go(o(ee,o(zl,e,r),v))}}),Rn={fT:0,fX:0,c5:0},Co=po,n0=o(wo,Rn,Co),a0=$(function(e,r){return p(zl,n0,Tn(e),r)}),t0=$(function(e,r){return(r-Ec(r/e)*e)/e}),o0=function(e){return 2*Br*e},i0=E(function(e,r,n,a){return e+(r-e)*(1+Fr(o0(o(t0,n,a))))/2}),c0=function(e){var r=o(lr,"wave height",e),n=o(Ti,"number of waves",e),a=o(Ti,"number of cubes",e),t=o(lr,"cycle duration",e),i=function(c){var l=c/a,u=n*t*l;return o(a0,kt(360)*l,o(Jm,C(i0,-r,r,t,e.db+u),o(Om,o(lr,"radius",e),o(Tm,Vm(p(Bm,l,o(lr,"saturation",e),o(lr,"lightness",e))),o(lr,"cube size",e)))))};return Dm(o(ee,i,o(Ar,0,a-1)))},$n=function(e){return Tn(Br*(e/180))},br=uv,l0=$(function(e,r){var n=e,a=r,t=a.c5-n.c5,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ze,O(c),o(ze,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=br(s*s+v*v+u*u);return re({fT:s/d,fX:v/d,c5:u/d})}else return q}),Za=function(e){return e},Lo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),ra=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=br(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c5:a/c})}else return q},wa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),u0=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c5*n.c5}),kl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),v0=$(function(e,r){var n=e,a=r;return J(a,n)<0}),$0=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),f0=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c5*n.c5;return{fT:n.fT*t,fX:n.fX*t,c5:n.c5*t}}),s0=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Je=0,Ml={fT:0,fX:0,c5:0},d0=x(function(e,r,n){return o(Ct,function(a){var t=o($0,o(f0,a,r),r);return o(Ct,function(i){var c=o(Lo,r,e),l=o(u0,n,c),u=o(kl,Je,l)?c:o(v0,Je,l)?s0(c):Ml;return o(xe,function(v){return V(a,i,v)},ra(u))},ra(t))},ra(e))}),m0=function(e){var r=e,n=O(r.c5),a=O(r.fX),t=O(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=br(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=br(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=br(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=br(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},Po=function(e){var r=m0(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return P(r,c)},Ir=function(e){var r=e;return r},p0=$(function(e,r){var n=Po(e),a=n.a,t=n.b;return fr({cA:r,c3:a,c4:t,c6:e})}),b0=function(e){var r=o(wa,e.aR,e.dj),n=Ir(e.ei),a=o(Lo,r,n),t=p(d0,r,n,a);if(t.$){var v=ra(r);if(v.$){var d=Po(e.ei),m=d.a,f=d.b;return fr({cA:e.dj,c3:f,c4:e.ei,c6:m})}else{var s=v.a;return o(p0,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return fr({cA:e.dj,c3:u,c4:l,c6:c})}},g0=function(e){return{$:0,a:e}},na=function(e){var r=e;return .5*r},h0=av,_0=function(e){var r=e;return h0(r)},w0=function(e){var r=na(Ve(e.ej)),n=_0(r);return{cL:g0(n),c1:e.c1}},y0=function(e){var r=e.aR,n=e.dj,a=e.ei;return w0({ej:$n(40),c1:b0({dj:Za(n),aR:Za(r),ei:o(nr,po,o(l0,Rn,Za(a)))})})},x0=function(e){return e},Mr=function(e){return e},S0=function(e){return Mr(.01*e)},Ci=function(e){return e},T0=function(e){return e},C0=function(e){return{$:0,a:e}},L0=C0,P0={$:3},z0=P0,k0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),M0=k0,D0=$(function(e,r){return r.b?p(tr,k,r,e):e}),Ge=function(e){return p(tr,D0,L,e)},zo=$(function(e,r){return Ge(o(ee,e,r))}),A0=function(e){return{$:1,a:e}},B0=A0,F0=function(e){return o(kn,"height",Ae(e))},V0=function(e){return o$(u$(e))},E0=V0,R0=function(e){return{$:2,a:e}},j0=R0,N0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return pl(h(["rgba(",me(c(r)),"%,",me(c(n)),"%,",me(c(a)),"%,",me(i(t)),")"]))},G0=$(function(e,r){switch(r.$){case 0:return o(Tf,e,r);case 1:return o(Cf,e,r);case 2:return o(Lf,e,r);case 3:return o(Pf,e,r);case 4:return o(zf,e,r);default:return o(kf,e,r)}}),W0=$(function(e,r){switch(r.$){case 0:return o(ef,e,r);case 1:return o(rf,e,r);case 2:return o(nf,e,r);case 3:return o(af,e,r);case 4:return o(tf,e,r);case 5:return o(of,e,r);case 6:return o(cf,e,r);case 7:return o(lf,e,r);default:return uf(e)}}),H0=x(function(e,r,n){return p(Sf,e,r,n)}),Li=function(e){var r=e;return r},nn=W$,Qa=C(nn,1,1,1,1),qe=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),X0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),I0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(X0,n*a/t,n,n*(1-a-t)/t)}),U0=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ko=$(function(e,r){return U0(o(I0,e,r))}),Dl=$(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=O$,J0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ka=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(nn,a.bX,a.bX,a.bX,i);return we(t,e,c,J0(a),a.dp,r,n)}),Al=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Dl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(Ka,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(k,S(Ka,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var _=t.a,T=o(k,S(Ka,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(Mn,C(Al,e,r,n,a),i,M)}}),O0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bl=O0,Mo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),q0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,518,r,n,a)},Y0=$(function(e,r){return{$:6,a:e,b:r}}),Z0=Y0,Fl=h([q0({V:1,W:0,Z:!1}),C(Bl,!1,!1,!1,!1),o(Z0,0,1)]),Zr=519,Do=8,Vl=15,Jr=7681,Q0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=K$,K0=$(function(e,r){return{$:0,a:e,b:r}}),ep=K0({df:1,$7:0,dV:5}),De=B$,rp=ep(h([{bT:o(De,-1,-1)},{bT:o(De,1,-1)},{bT:o(De,-1,1)},{bT:o(De,1,1)}])),np={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},ap=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ao=x(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(ap,a,t,i)))}),Bo=function(e){return p(Ao,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Fo=function(e){return S(ne,h([Bo(e),C(Bl,!1,!1,!1,!1)]),np,Q0,rp,{})},tp=Fo({a8:Jr,co:0,cN:Do,bl:Zr,c2:Vl,bt:Jr,bu:Jr}),op=516,Pi=5386,Se=7680,ip=function(e){return o(Bn,2,e+4)},El=function(e){return Fo({a8:Se,co:Vl,cN:Do,bl:op,c2:ip(e),bt:Pi,bu:Pi})},cp=x(function(e,r,n){return Ge(h([p(qe,e,n,Fl),h([El(r),tp])]))}),lp=$(function(e,r){return Ge(o(Mc,cp(e),r))}),up=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,513,r,n,a)},vp=up({V:1,W:0,Z:!0}),$p=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},fp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return $p(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},sp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zi=$(function(e,r){var n=e,a=r;return p(sp,32774,n,a)}),dp=1,ki=771,mp=770,Vo=fp({bv:0,aH:o(zi,dp,ki),by:0,bA:o(zi,mp,ki),bF:0,bV:0}),Nr=h([vp,Vo]),pp=function(e){var r=e;return r.dO},bp=function(e){var r=e;return r.dP},Rl=function(e){var r=e;return r.dQ},gp=function(e){var r=e;return r.dR},hp=function(e){var r=e;return r.dS},jl=function(e){var r=e;return r.dT},Nl=function(e){return V(o(vr,gp(e),pp(e)),o(vr,hp(e),bp(e)),o(vr,jl(e),Rl(e)))},Mi=function(e){var r=e;return rn(r)},_p=function(e){return e},wp=function(e){return fr({cA:_p({fT:e.H,fX:e.I,c5:e.J}),c3:$r({fT:e.q,fX:e.r,c5:e.s}),c4:$r({fT:e.t,fX:e.u,c5:e.v}),c6:$r({fT:e.w,fX:e.x,c5:e.y})})},et=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c5*v.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),Gl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),Wl=$(function(e,r){return{cA:o(Gl,e,rn(r)),c3:o(et,e,Er(r)),c4:o(et,e,Rr(r)),c6:o(et,e,jr(r))}}),ya=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ze,n,a)}),aa=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),yp=$(function(e,r){var n=ya(r),a=ya(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},xp=function(e){var r=e;return V(r.fT,r.fX,r.c5)},gn=$(function(e,r){var n=e,a=r;return a+n}),Sp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(Ve(a)),c=na(Ve(n)),l=na(Ve(t)),u=xp(r),v=u.a,s=u.b,d=u.c;return{dO:o(gn,c,v),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o(vr,c,v),dS:o(vr,i,s),dT:o(vr,l,d)}}),Di=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fX*r,s=t.fT*r,d=We(jr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c5),f=We(Rr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c5),b=We(Er(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c5),y=o(Sp,V(w,g,m),o(Gl,e,p(zt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(yp,_,y))}),Dt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Di,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Di,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Dt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Wl,wp(v),e),m=r*v.bX,f=e,g=r,b=C(Dt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),an=E$,tn=R$,on=j$,Hl=function(e){return{$:4,a:e}},Tp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),jn=function(e){return Hl(o(Tp,e,L))},Cp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Lp=function(e){var r=e;return r},Ai=Fo({a8:Jr,co:0,cN:Do,bl:Zr,c2:255,bt:Jr,bu:Jr}),Pp=function(e){var r=e,n=o(ze,O(r.fT),o(ze,O(r.fX),O(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=br(i*i+t*t+a*a);return c*n}else return Je},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Re=$(function(e,r){var n=e,a=r;return Qe({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),fn=P({bd:o(Re,Ce,Ce),bK:o(Re,Ce,Ce),bL:o(Re,Ce,Ce),bM:o(Re,Ce,Ce)},C(nn,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Bi=function(e){var r=e;return-r},Xl=514,Il=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,515,r,n,a)},Ul=240,zp=h([Il({V:1,W:0,Z:!0}),Bo({a8:Se,co:Ul,cN:0,bl:Xl,c2:0,bt:Se,bu:Se}),Vo]),kp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Ve(a),l=c,u=Ve(t),v=u,s=n.cL;if(s.$){var m=s.a;return _t(v)?Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return _t(v)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),In=$(function(e,r){return(1&e>>r)===1?0:1}),Mp=function(e){return h([Il({V:1,W:0,Z:!0}),Bo({a8:Se,co:Ul,cN:e,bl:Xl,c2:0,bt:Se,bu:Se}),Vo])},Dp=x(function(e,r,n){return Ge(o(ee,function(a){var t=a<<4,i=C(nn,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(qe,e,P(r,i),Mp(t))},o(Ar,1,o(Bn,2,n)-1)))}),Cn=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Or=function(e){var r=e;return r},Ap=q$,Fi=function(e){var r=e;return Cn(jr(r))},Jl=hl,Ol=bo,Bp={cA:Rn,c3:Jl,c4:Co,c6:Ol},Ra=function(e){var r=e;return r},Fp=function(e){var r=Ra(rn(e)),n=We(jr(e)),a=We(Rr(e)),t=We(Er(e));return Qe({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Vp=$(function(e,r){var n=r;return Fp(o(Wl,n,e))}),Ep=function(e){return o(Vp,Bp,e)},Rp=function(e){var r=e;return r.c1},jp=function(e){var r=e;return Er(r)},Np=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),Gp=function(e){var r=e;return Rr(r)},Wp=function(e){var r=Rp(e.ev),n=fr({cA:Mi(r),c3:jp(r),c4:Gp(r),c6:Cn(Fi(r))}),a=jn(e.aP),t=a,i=C(Dt,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=Ep(r),u=o(ie,.99,o(ce,Ve(e.aJ),Bi(Rl(c)))),v=Nl(c),s=v.a,d=v.b,m=v.c,f=Pp(p(Np,s,d,m)),g=o(ie,1.01,o(gn,f,Bi(jl(c)))),b=o(kp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Ap(b).dM,y=w?We(Cn(Fi(r))):Or(Mi(r)),_=function(){var te=e.bZ;switch(te.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var se=te.a;return P(3,se);case 4:var se=te.a;return P(4,se);default:return P(5,0)}}(),T=_.a,M=_.b,G=e.bD,j=G,R=o(ko,j,e.b$),N=R,W=Qe({dx:0,dy:y.fT,dz:an(N),dA:e.ec,dB:0,dC:y.fX,dD:tn(N),dE:Lp(f),dF:0,dG:y.c5,dH:on(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),B=we(Al,W,l,b,Cp,t,{M:L,U:L,fz:L}),Y=e.bJ;switch(Y.$){case 0:var Q=Y.a;return Ge(h([p(qe,B.M,P(Q,Qa),Nr),p(qe,B.U,fn,Nr)]));case 1:var Q=Y.a;return Ge(h([p(qe,B.M,fn,Nr),h([Ai]),p(qe,B.fz,Q.bd,Fl),h([El(0)]),p(qe,B.M,P(Q,Qa),zp),p(qe,B.U,fn,Nr)]));default:var oe=Y.a,ve=Y.b;return Ge(h([p(qe,B.M,P(ve,Qa),Nr),h([Ai]),o(lp,B.fz,oe),p(Dp,B.M,ve,Dr(oe)),p(qe,B.U,fn,Nr)]))}},Hp=function(e){return o(kn,"width",Ae(e))},Xp=$(function(e,r){var n=h([B0(1),j0(0),L0(!0),C(M0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(k,z0,n),"1",1);default:var M=T.a;return V(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Li(v),d=o(ge,"height",Ae(s)+"px"),m=Li(u),f=m/s,g=o(zo,function(T){return Wp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(ge,"width",Ae(m)+"px"),w=e.aI,y=w,_=N0(y);return p(E0,"div",h([o(ge,"padding","0px"),b,d]),h([P(i,p(H0,t,h([Hp(Oe(m*c)),F0(Oe(s*c)),b,d,o(ge,"display","block"),o(ge,"background-color",_)]),g))]))}),Ip=function(e){return o(Xp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},ql=function(e){return e},Vi=ql({fT:.31271,fX:.32902}),Up=$(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(ko,r.cd,r.b6),u=l;return{by:on(u),ex:n,bF:tn(u),cJ:0,bV:an(u),cZ:1,fT:-t,fX:-i,c5:-c}}),Jp=function(e){return e},Op=function(e){return Jp(1.2*o(Bn,2,e))},rt=function(e){return e},qp={$:0},Yp=qp,Yl=function(e){return e},Ei=function(e){var r=e;return r},Zp=function(e){e:for(;;){if(hr(e.e2,Je)&&hr(e.e3,Je))return Ce;if(o(kl,Ve(e.e2),Ve(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Cn(e.ei)};e=r;continue e}else{var n=O(Ei(e.e3)/Br),a=O(Ei(e.e2)/Br),t=We(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(ko,Yl(1),e.b6),v=u;return{by:a*on(v),ex:!1,bF:a*tn(v),cJ:n/a,bV:a*an(v),cZ:3,fT:i,fX:c,c5:l}}}},Ri=function(e){return Zp({b6:e.b6,e2:e.cd,e3:Je,ei:e.ei})},Qp=function(e){var r=e;return r},Zl=function(e){var r=p(wl,1667,25e3,Qp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ql({fT:n,fX:a})},Ql=function(e){return e},Kp=Zl(Ql(12e3)),e3=Zl(Ql(5600)),r3=function(e){return{$:2,a:e}},n3=function(e){return r3(e)},a3=$(function(e,r){return{$:2,a:e,b:r}}),Kl=function(e){return{$:0,a:e}},Un=function(e){var r=e;return r},t3=function(e){var r=e;return r.ex},o3=Kl(fn.a),i3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(k,a,i),c):P(i,o(k,a,c))});return p(tr,n,P(L,L),r)}),c3=function(e){var r=e;return Qe({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},l3=K(function(e,r,n,a,t,i,c,l){var u=o(i3,t3,h([Un(e),Un(r),Un(n),Un(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(a3,o(ee,c3,v),{bd:o(Re,m,g),bK:o(Re,w,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return o3}else return Kl({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),u3=x(function(e,r,n){return La(l3,e,r,n,Ce,Ce,Ce,Ce,Ce)}),v3=function(e){var r=o(Up,T0(e.fz),{b6:e3,eG:e.fI,cd:rt(8e4)}),n=Ri({b6:Kp,cd:rt(2e4),ei:e.ei}),a=Ri({b6:Vi,cd:rt(15e3),ei:Cn(e.ei)}),t=p(u3,r,n,a);return Ip({b0:n3(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Op(15),bJ:t,bZ:Yp,b$:Vi})},eu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),$3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ru=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),nu=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),f3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),s3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),d3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Eo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(d3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(eu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C($3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(ru,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(s3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(nu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(f3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ro={$:0},m3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ya(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),y=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),p3=x(function(e,r,n){var a=ya(e(r));return La(m3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),nt=$(function(e,r){var n=e,a=r;return J(a,n)<1}),au=function(e){return o(nt,e.dO,e.dR)&&o(nt,e.dP,e.dS)&&o(nt,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},tu=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Pr(n),c=zr(n),l=kr(n),u=Pr(a),v=zr(a),s=kr(a),d=Pr(t),m=zr(t),f=kr(t);return au({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},ou=N$,Le=function(e){return ou(Ra(e))},iu=function(e){var r=e;return r},ja=function(e){return ou(iu(e))},b3=$(function(e,r){var n=e,a=r,t=o(ze,O(a.fT),o(ze,O(a.fX),O(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=br(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return Ml}),g3=b3(Yl(1)),cu=x(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return g3(o(Lo,a,t))}),h3=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=ja(p(cu,n,a,t));return V({o:i,bT:Le(n)},{o:i,bT:Le(a)},{o:i,bT:Le(t)})},_3=$(function(e,r){return{$:2,a:e,b:r}}),lu=_3({df:3,$7:0,dV:4}),w3=function(e){if(e.b){var r=e.a,n=e.b,a=lu(o(ee,h3,e)),t=p(p3,tu,r,n);return C(eu,t,e,a,0)}else return Ro},Ee=x(function(e,r,n){return V(e,r,n)}),uu=function(){var e=Mr(1),r=Mr(1),n=Mr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(de,i,t,a),l=o(ie,.5,e),u=p(de,i,t,l),v=o(ie,.5,r),s=p(de,i,v,a),d=p(de,i,v,l),m=o(ie,.5,n),f=p(de,m,t,a),g=p(de,m,v,a),b=p(de,m,t,l),w=p(de,m,v,l);return Eo(w3(h([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),Jn={$:0},y3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),x3=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ja(p(cu,u,l,c)),s={o:v,bT:Le(u)},d={o:v,bT:Le(l)},m={o:v,bT:Le(c)};return o(k,s,o(k,d,o(k,m,n)))}),jo=function(e){var r=e;return r.D},S3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),At=4294967295>>>32-yn,Bt=Uu,T3=x(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,At&r,v)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),C3=function(e){return e>>>5<<5},L3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,C3(n))>-1?re(o(Bt,At&e,i)):re(p(T3,a,e,t))}),No=function(e){var r=e;return r.ah},at=$(function(e,r){return o(L3,e,No(r))}),P3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(S3,x(function(c,l,u){return V(c,l,u)}),o(at,a,e),o(at,t,e),o(at,i,e))};return o(Va,r,jo(e))},z3=x(function(e,r,n){e:for(;;){var a=o(ao,Fe,e),t=a.a,i=a.b;if(J(gt(t),Fe)<0)return o(Rc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Vc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(z3,e,L,0):Bc},k3=x(function(e,r,n){return e(r(n))}),M3=$(function(e,r){return!o(Yc,o(k3,ss,e),r)}),D3=$(function(e,r){return p(tr,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),A3=function(e){var r=e.a;return r},vu=$(function(e,r){var n=A3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(M3,a,r)?{D:r,ah:e}:{D:o(D3,a,r),ah:e}}),B3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Nn=B3({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Or(r),a=Or(e);return P(V(a.fT,a.fX,a.c5),V(n.fT,n.fX,n.c5))}),ji=p(Fn,0,0,0),tt=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ba,o(ta,e,r),t);if(v.$){var d={o:ji,bT:Le(r)},m={o:ji,bT:Le(e)},f=u+1,g=u;return V(o(k,V(n,g,f),o(k,V(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=v.a;return V(o(k,V(n,s,a),c),l,u)}}),F3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,_=v,T=a+3,M=we(tt,s,m,f,b,r,we(tt,d,s,g,f,r,we(tt,m,d,b,g,r,t)));e=w,r=y,n=_,a=T,t=M;continue e}else{var G=t,j=G.a,R=G.b;return P(j,Be(R))}}),V3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(mn,o(ta,m,s),f,p(mn,o(ta,s,d),g,p(mn,o(ta,d,m),b,t))),y=o(k,V(b,g,f),a),_=e,T=v,M=n+3,G=y,j=w;e=_,r=T,n=M,a=G,t=j;continue e}else return V(a,t,n)}),Sr=x(function(e,r,n){var a=P3(n),t=p(tr,x3(r),L,a),i=S(V3,r,a,0,L,bl),c=i.a,l=i.b,u=i.c,v=S(F3,r,l,a,0,V(c,L,u)),s=v.a,d=v.b,m=ml(d)?t:le(t,d);return p(y3,e,o(vu,Go(m),s),o(Nn,m,s))}),Ft=function(e){return{D:o(ee,function(r){return V(3*r,3*r+1,3*r+2)},o(Ar,0,Dr(e)-1)),ah:Go(Ge(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},$u=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ee,Ln,r);return p(Sr,a,Lr,Ft(n));case 2:var a=e.a,r=e.b,n=o(ee,Ln,r);return p(Sr,a,Lr,Ft(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Lr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ni=$u(uu),fu={$:0},z=fu,pe=$(function(e,r){return{$:1,a:e,b:r}}),E3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},R3=1029,j3=function(e){return{$:5,a:e}},su=function(e){var r=e;return j3(r)},N3=su(R3),G3=1028,W3=su(G3),Pe=x(function(e,r,n){return r===1?e?o(k,N3,n):o(k,W3,n):n}),du={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ot=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),du,E3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},mu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),mu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),pu=$(function(e,r){return{$:3,a:e,b:r}}),H3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},bu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},X3=E(function(e,r,n,a){return o(pu,n,K(function(t,i,c,l,u,v,s,d){return S(ne,d,bu,H3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Ho={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Gn=function(e){var r=e;return r},Na=G$,cr=he(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),mu,Ho,a,{aN:o(Na,Gn(r),e),b:l,c,d:s,e:i,f:v})}))}),I3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},U3=he(function(e,r,n,a,t){return o(pu,a,K(function(i,c,l,u,v,s,d,m){return S(ne,m,bu,I3,t,{aN:o(Na,Gn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},hu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),hu,gu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),_u={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},J3=He(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),wu,_u,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),yu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},O3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,K(function(d,m,f,g,b,w,y,_){var T=y.a,M=y.b;return S(ne,p(Pe,g,s,_),wu,yu,v,{b4:e,b7:r,b8:i,b9:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},xu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},qn=He(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),hu,xu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),q3=function(e){return{$:0,a:e}},Gi=$(function(e,r){return{$:1,a:e,b:r}}),hn=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),Y3=function(e){return C(nn,an(e),tn(e),on(e),1)},Xo=C(nn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Xo)}else{var n=r.a;return P(e,Y3(n))}}),Su=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Gi,P(t,Xo),o(hn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Gi,o(oa,t,e),o(hn,t,r))}else{var a=n.a.a;return n.b.a,q3(a)}}),Z3=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Q3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),K3=function(e){return o(De,e,1)},Vt=o(De,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Vt)}else{var n=r.a;return P(e,K3(n))}}),Tu=E(function(e,r,n,a){var t=C(Q3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Yn,P(u,Xo),o(Gr,u,r),o(Gr,u,n),o(hn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Yn,o(oa,u,e),P(u,Vt),o(Gr,u,n),o(hn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Yn,o(oa,u,e),o(Gr,u,r),P(u,Vt),o(hn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Yn,o(oa,u,e),o(Gr,u,r),o(Gr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Z3,i,c,l)}}),eb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},it=he(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),du,eb,a,{b1:Gn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Cu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rb=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),Cu,_u,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),nb=jt(function(e,r,n,a,t,i,c,l,u){return o(pe,c,K(function(v,s,d,m,f,g,b,w){var y=b.a,_=b.b;return S(ne,p(Pe,m,u,w),Cu,yu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Pn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),ab=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},tb=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},ob=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},ib=function(e){return p(de,ab(e),tb(e),ob(e))},H=function(e){var r=Nl(e),n=r.a,a=r.b,t=r.c;return{ey:Ra(ib(e)),eS:n/2,eT:a/2,eU:t/2}},Io=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ot,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ot,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ot,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(X3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(it,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(it,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(it,l,v,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(U3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Su,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(rb,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(J3,b,y,_,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(On,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(On,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(On,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(On,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,M=e.c,G=e.d,j=e.e,R=C(Tu,T,M,G,j);if(R.$){var Y=R.a,Q=Y.a,oe=Y.b,ve=R.b,te=ve.a,se=ve.b,ke=R.c,Te=ke.a,mr=ke.b,pr=R.d,y=pr.a,_=pr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Gu(nb,Q,oe,te,se,Te,mr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return O3(Q)(oe)(te)(se)(Te)(mr)(y)(_)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=R.a,W=R.b,B=R.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(qn,N,W,B,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(qn,N,W,B,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(qn,N,W,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(qn,N,W,B,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ct=function(e){var r=e;return r.fT},lt=function(e){var r=e;return r.fX},ut=function(e){var r=e;return r.c5},cb=function(e){var r=e,n=ut(r.c6),a=lt(r.c6),t=ct(r.c6),i=ut(r.c4),c=lt(r.c4),l=ct(r.c4),u=ut(r.c3),v=lt(r.c3),s=ct(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},lb=function(e){var r=Ra(rn(e)),n=We(jr(e)),a=We(Rr(e)),t=We(Er(e));return{dp:cb(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Wr=$(function(e,r){return{$:5,a:e,b:r}}),Lu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Dl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Pu=$(function(e,r){return o(Lu,lb(e),r)}),Ga=function(e){return{$:2,a:e}},ub=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),vb=X$,$b=H$,Wi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=$b(a),g=f.fT,b=f.fX,w=f.c5,y=f.em,_=vb({em:y,fT:g*s,fX:b*d,c5:w*m});return La(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Et=$(function(e,r){switch(r.$){case 0:return fu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Et,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(ub,e,t),o(Wi,e,i));case 3:return r;case 2:var i=r.a;return Ga(o(Wi,e,i));default:var c=r.a;return Hl(o(ee,Et(e),c))}}),Uo=$(function(e,r){var n=r;return o(Et,e,n)}),Jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},zu=7683,ku=7682,fb=p(Ao,{co:0,cN:0,c2:15},{a8:Se,bl:Zr,bt:Se,bu:zu},{a8:Se,bl:Zr,bt:Se,bu:ku}),sb=p(Ao,{co:0,cN:0,c2:15},{a8:Se,bl:Zr,bt:Se,bu:ku},{a8:Se,bl:Zr,bt:Se,bu:zu}),Oo=$(function(e,r){return e?o(k,sb,r):o(k,fb,r)}),db={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},mb=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ne,o(Oo,i,v),db,Jo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},xa=function(e){var r=mb(e);if(r.$)return z;var n=r.a;return Ga(n)},pb=E(function(e,r,n,a){var t=o(Io,n,uu),i=function(){var s=P(e,r);return s.a?s.b?jn(h([t,xa(Ni)])):t:s.b?xa(Ni):z}(),c=_o(a),l=c.a,u=c.b,v=c.c;return o(Pu,ho(a),o(Uo,V(l,u,v),i))}),bb=$(function(e,r){return C(pb,!0,!0,e,r)}),Mu=$(function(e,r){return{$:0,a:e,b:r}}),gb=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return p(Fn,n,a,t)},hb=function(e){return o(Mu,0,Mt(gb(e)))},_b=function(e){var r=e;return r.k},_n=function(e){var r=e;return Fr(r)},wb=$(function(e,r){var n=r;return n/e}),Hi=function(e){var r=e;return{fT:Fr(r),fX:Yr(r)}},yb=$(function(e,r){var n=e.bT,a=e.o;return o(k,{o:ja(a),bT:Le(n)},r)}),xb=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=on(l.bT),s=tn(l.bT),d=an(l.bT),m=o(aa,e,d),f=o(ze,r,d),g=o(aa,n,s),b=o(ze,a,s),w=o(aa,t,v),y=o(ze,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=y,c=_;continue e}else return au({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Du=$(function(e,r){var n=on(e.bT),a=tn(e.bT),t=an(e.bT);return Nt(xb,t,t,a,a,n,n,r)}),Sb=function(e){var r=p(Cc,yb,L,No(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,jo(e)),i=o(Du,n,a);return C(ru,i,e,t,0)}else return Ro},Xi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),Sa=function(e){var r=e;return Yr(r)},Rt=function(e){return Tn(2*Br*e)},Tb=Lr,Ii=Tb({cA:Rn,c3:Jl,c4:Co}),Au=function(){var e=72,r=o(wb,e,Rt(1)),n=Mr(1),a=Ir(bo),t=Ir(gl),i=Mr(1),c=o(ie,.5,i),l=p(de,Je,Je,c),u=o(ie,-.5,i),v=p(de,Je,Je,u),s=function(f){var g=o(ie,f,r),b=Ir(o(Xi,Ii,Hi(g))),w=o(ie,_n(g),n),y=o(ie,Sa(g),n),_=p(de,w,y,c),T=p(de,w,y,u),M=o(ba,e,f+1),G=o(ie,M,r),j=Ir(o(Xi,Ii,Hi(G))),R=o(ie,_n(G),n),N=o(ie,Sa(G),n),W=p(de,R,N,u),B=p(de,R,N,c);return h([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:W},{o:j,bT:B}),V({o:b,bT:T},{o:j,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(ee,s,o(Ar,0,e-1)),m=Ft(Ge(d));return Eo(Sb(m))}(),Ui=$u(Au),Cb=function(e){var r=e;return r.eG},Lb=function(e){var r=e;return r.cA},Pb=function(e){var r=Cb(e),n=Po(r),a=n.a,t=n.b;return fr({cA:Lb(e),c3:a,c4:t,c6:r})},zb=function(e){var r=e;return r.e9},kb=function(e){var r=e;return r.fr},Mb=E(function(e,r,n,a){var t=Pb(_b(a)),i=o(Io,n,Au),c=function(){var d=P(e,r);return d.a?d.b?jn(h([i,xa(Ui)])):i:d.b?xa(Ui):z}(),l=kb(a),u=l,v=zb(a),s=v;return o(Pu,t,o(Uo,V(u,u,s),c))}),Db=$(function(e,r){return C(Mb,!0,!0,e,r)}),Ji={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Oi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},sn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Or(a),l=Or(t);return Qe({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Zn=lu(h([V({cY:0},{cY:1},{cY:2})])),Ab=$(function(e,r){var n=tu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(pe,a,K(function(_,T,M,G,j,R,N,W){return S(ne,p(Pe,G,0,W),Ji,Wo,Zn,{aw:t,b:M,c:T,d:R,e:_,bq:sn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(pe,a,K(function(_,T,M,G,j,R,N,W){return S(ne,p(Pe,G,0,W),Ji,Ho,Zn,{aN:o(Na,Gn(c),i),b:M,c:T,d:R,e:_,bq:sn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Su,l,f);if(u.$)return z;var v=u.a;return o(pe,a,K(function(_,T,M,G,j,R,N,W){var B=N.a,Y=N.b;return S(ne,p(Pe,G,0,W),Oi,gu,Zn,{P:Y,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:M,c:T,d:R,e:_,bq:sn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Tu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,y=g.c;return o(pe,a,K(function(_,T,M,G,j,R,N,W){var B=N.a,Y=N.b;return S(ne,p(Pe,G,0,W),Oi,xu,Zn,{b3:b,P:Y,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:y,b:M,c:T,d:R,cQ:w,e:_,bq:sn(r),f:j})}))}}),Bb=function(){var e=h([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=h([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(Nn,e,r)}(),Fb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},qi=function(e){return Ga(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Oo,t,u),Fb,Jo,Bb,{b:a,c:n,d:c,e:r,bY:l,bq:sn(e),f:i})}))},Vb=E(function(e,r,n,a){var t=o(Ab,n,a),i=P(e,r);return i.a?i.b?jn(h([t,qi(a)])):t:i.b?qi(a):z}),Eb=$(function(e,r){return C(Vb,!0,!0,e,r)}),Rb=$(function(e,r){var n=kr(r),a=kr(e),t=zr(r),i=zr(e),c=Pr(r),l=Pr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),jb=function(e){var r=yo(e),n=r.a,a=r.b;return o(Rb,n,a)},Yi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Nb=$(function(e,r){return{$:1,a:e,b:r}}),Gb=Nb({df:2,$7:0,dV:1}),Zi=Gb(h([P({dw:0},{dw:1})])),Wb=$(function(e,r){var n=jb(r),a=H(n),t=yo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(pe,a,K(function(v,s,d,m,f,g,b,w){return S(ne,w,Yi,Wo,Zi,{aw:l,du:Le(c),dv:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(pe,a,K(function(s,d,m,f,g,b,w,y){return S(ne,y,Yi,Ho,Zi,{aN:o(Na,Gn(u),l),du:Le(c),dv:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Hb=$(function(e,r){return o(Wb,e,r)}),Qi=$(function(e,r){var n=e,a=r;return n/a}),Xb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(hr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Ki=$(function(e,r){return e<1?L:S(Xb,0,e,e,r,L)}),Ib=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:ja(a),bT:Le(n),L:o(De,c,l)},r)}),Ub=function(e){var r=p(Cc,Ib,L,No(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,jo(e)),i=o(Du,n,a);return C(nu,i,e,t,0)}else return Ro},Bu=$(function(e,r){var n=e,a=r,t=Fr(a);return{fT:t*Fr(n),fX:t*Yr(n),c5:Yr(a)}}),Jb=function(){var e=Mr(1),r=72,n=o(Ar,0,r-1),a=o(Ki,r,o(Pn,Je,Rt(1))),t=ro(r/2),i=o(Ar,0,t-1),c=o(Ki,t,o(Pn,$n(90),$n(-90))),l=Go(Ge(o(ee,function(s){return o(ee,function(d){return{o:Ir(o(Bu,s,d)),bT:p(de,o(ie,_n(d)*_n(s),e),o(ie,_n(d)*Sa(s),e),o(ie,Sa(d),e)),L:P(o(Qi,s,Rt(1)),o(Qi,o(gn,$n(90),d),$n(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(ee,function(s){return Ge(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([V(b,g,m),V(b,m,f)])},i))},n));return Eo(Ub(o(vu,l,v)))}(),Ta=72,Qn=2*Ta,Ob=$(function(e,r){e:for(;;){var n=Qn+1,a=o(ba,Qn,2*e+3),t=o(ba,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(k,V(l,c,t),o(k,V(c,a,t),o(k,V(c,i,a),o(k,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),qb=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Yb=$(function(e,r){e:for(;;){var n=p(qb,0,2*Br,e/Ta),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Zb=function(){var e=o(Yb,Ta-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Ob,Ta-1,L);return o(Nn,e,r)}(),Qb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ec=function(e){return Ga(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Oo,!0,u),Qb,Jo,Zb,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},Kb=function(e){var r=iu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},eg=$(function(e,r){return o(Lu,Kb(e),r)}),rg=E(function(e,r,n,a){var t=o(Io,n,Jb),i=function(){var u=P(e,r);return u.a?u.b?jn(h([t,ec()])):t:u.b?ec():z}(),c=So(a),l=c;return o(eg,o(wa,Rn,xo(a)),o(Uo,V(l,l,l),i))}),ng=$(function(e,r){return C(rg,!0,!0,e,r)}),ag=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),tg=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),og=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Mu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ag,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(_l,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(tg,n,a,t,i,c)}},ig=og,Fu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(bb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Eb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(ng,ig(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Db,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Hb,hb(c),l)]);default:var u=e.a;return o(zo,Fu,u)}},cg=function(e){return o(zo,Fu,e)},lg=$(function(e,r){return v3({aI:x0(e.es),ev:e.ev,aJ:S0(.5),ca:e.ca,aK:P(Ci(Oe(e.cS.fR)),Ci(Oe(e.cS.eW))),aP:cg(r),fz:!0,fI:o(Bu,Tn(e.fH),Tn(e.fJ)),ei:Ol})}),ug=$(function(e,r){return o(lg,{es:C(vl,0,0,0,0),ev:y0({dj:{fT:o(lr,"camera x",e),fX:o(lr,"camera y",e),c5:o(lr,"camera z",e)},aR:{fT:0,fX:0,c5:0},ei:{fT:0,fX:1,c5:0}}),ca:e.ca,cS:e.cS,fH:-kt(135),fJ:-kt(45)},h([c0(e)]))}),vg=C(dm,ug,_m,hm,mm);const $g={Main:{init:vg(o(A,function(e){return Me({e1:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Me({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",da(Sn)))},o(D,"left",Z))},o(D,"pressedKeys",da(Sn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},fg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},sg=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},dg=$g.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});sg();fg(dg);
