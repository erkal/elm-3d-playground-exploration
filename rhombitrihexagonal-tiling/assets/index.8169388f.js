const Iu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Iu();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ma(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function It(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ot(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Da(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ou(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ju=[];function qu(e){return e.length}var Yu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Qu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ku=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+ev()),r});function ev(e){return"<internals>"}function en(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=gt(e,r,0,a);t&&(n=a.pop());t=gt(n.a,n.b,0,a));return t}function gt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&en(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=gi(e),r=gi(r));for(var t in e)if(!gt(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var rv=$(function(e,r){var n=I(e,r);return n<0?Ec:n?jf:Vc}),Dn=0;function z(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var nv=$(nr);function _(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function Ba(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var av=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ba(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return _(Ba(r).sort(function(n,a){var t=o(e,n,a);return t===Vc?0:t===Ec?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var tv=$(Math.pow);$(function(e,r){return r%e});var ov=$(function(e,r){var n=r%e;return e===0?en(11):n>0&&e<0||n<0&&e>0?n+e:n}),iv=Math.PI,cv=Math.cos,lv=Math.sin,uv=Math.tan;$(Math.atan2);function vv(e){return e}function $v(e){return e===1/0||e===-1/0}var fv=Math.ceil,sv=Math.floor,mv=Math.round,dv=Math.sqrt,ti=Math.log,pv=isNaN;function bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function _v(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function wv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var yv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),xv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),Tv=x(function(e,r,n){return n.slice(e,r)});function Cv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Lv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Pv=$(function(e,r){return r.indexOf(e)>-1}),zv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var kv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function vc(e){return e+""}function Mv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Dv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Bv(e){return Ba(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Fv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vv(e){return{$:0,a:e}}function Jt(e){return{$:2,b:e}}var Ev=Jt(function(e){return typeof e=="boolean"?ue(e):Ze("a BOOL",e)}),Rv=Jt(function(e){return typeof e=="number"?ue(e):Ze("a FLOAT",e)}),jv=Jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ze("a STRING",e)});function Nv(e){return{$:3,b:e}}var Gv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Wv=$(function(e,r){return{$:10,b:r,h:e}}),Hv=$(function(e,r){return xr(e,[r])}),Xv=x(function(e,r,n){return xr(e,[r,n])});E(function(e,r,n,a){return xr(e,[r,n,a])});ge(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});Ma(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});It(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return we(o(io,"This is not valid JSON! "+a.message,r))}});var $c=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ze("null",r);case 3:return In(r)?oi(e.b,r,_):Ze("a LIST",r);case 4:return In(r)?oi(e.b,r,Uv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:we(o(hi,n,v.a));case 7:var a=e.e;if(!In(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:we(o(Rc,a,v.a));case 8:if(typeof r!="object"||r===null||In(r))return Ze("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return we(o(hi,i,v.a));t=nr(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var f=L,m=e.g;m.b;m=m.b){var v=je(m.a,r);if(Ie(v))return v;f=nr(v.a,f)}return we(Nf(Fe(f)));case 1:return we(o(io,e.a,r));case 0:return ue(e.a)}}function oi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return we(o(Rc,i,c.a));t[i]=c.a}return ue(n(t))}function In(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Uv(e){return o(as,e.length,function(r){return e[r]})}function Ze(e,r){return we(o(io,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&ii(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return ii(e.g,r.g)}}function ii(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function fc(e){return e}x(function(e,r,n){return n[e]=r,n});function Er(e){return{$:0,a:e}}function Ov(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Jv(e){return{$:5,b:e}}var qv=0;function qt(e){var r={$:0,e:qv++,f:e,g:null,h:[]};return Yt(r),r}function sc(e){return fr(function(r){r(Er(qt(e)))})}function mc(e,r){e.h.push(r),Yt(e)}var Yv=$(function(e,r){return fr(function(n){mc(e,r),n(Er(Dn))})}),Ja=!1,ci=[];function Yt(e){if(ci.push(e),!Ja){for(Ja=!0;e=ci.shift();)Zv(e);Ja=!1}}function Zv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Zt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Zt(e,r,n,a,t,i){var c=o($c,e,r?r.flags:void 0);Ie(c)||en(2);var l={},u=n(c.a),v=u.a,f=i(d,v),m=Qv(l,d);function d(s,g){var b=o(a,s,v);f(v=b.a,g),ui(l,b.b,t(v))}return ui(l,u.b,t(v)),m?{ports:m}:{}}var er={};function Qv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=e$(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function e$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ht,l,Jv(function(v){var f=v.a;return v.$===0?p(t,n,f,u):i&&c?C(a,n,f.i,f.j,u):p(a,n,i?f.i:f.j,u)}))}return n.h=qt(o(ht,l,e.b))}var r$=$(function(e,r){return fr(function(n){e.g(r),n(Er(Dn))})});$(function(e,r){return o(Yv,e.h,{$:0,a:r})});function dc(e){return function(r){return{$:1,k:e,l:r}}}function n$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var li=[],qa=!1;function ui(e,r,n){if(li.push({p:e,q:r,r:n}),!qa){qa=!0;for(var a;a=li.shift();)a$(a.p,a.q,a.r);qa=!1}}function a$(e,r,n){var a={};va(!0,r,a,null),va(!1,n,a,null);for(var t in e)mc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function va(e,r,n,a){switch(r.$){case 1:var t=r.k,i=t$(e,t,a,r.l);n[t]=o$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)va(e,c.a,n,a);return;case 3:va(e,r.o,n,{s:r.n,t:a});return}}function t$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function o$(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function i$(e){er[e]&&en(3)}$(function(e,r){return r});function c$(e,r){return i$(e),er[e]={f:l$,u:r,a:u$},dc(e)}var l$=$(function(e,r){return function(n){return e(r(n))}});function u$(e,r){var n=L,a=er[e].u,t=Er(null);er[e].b=t,er[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o($c,a,c);Ie(l)||en(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var $a,ir=typeof document!="undefined"?document:{};function Qt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function _t(e){return{$:0,a:e}}var pc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Kt(n),e:t,f:e,b:i}})}),Rr=pc(void 0),v$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Kt(n),e:t,f:e,b:i}})}),$$=v$(void 0);function f$(e,r,n,a){return{$:3,d:Kt(e),g:r,h:n,i:a}}var s$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});x(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ma(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return Ot(e,r,n,a,t,i,c,l)})});It(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Da(e,r,n,a,t,i,c,l,u)})});var bc=$(function(e,r){return{$:"a0",n:e,o:r}}),m$=$(function(e,r){return{$:"a1",n:e,o:r}}),gc=$(function(e,r){return{$:"a2",n:e,o:r}}),Bn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function p$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(bc,r.n,b$(e,r.o)):r});function b$(e,r){var n=$o(r);return{$:r.$,a:n?p(ts,n<3?g$:h$,De(e),r.a):o(da,e,r.a)}}var g$=$(function(e,r){return z(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?vi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?vi(c,t,i):c[t]=i}return r}function vi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return ir.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?ir.createElementNS(e.f,e.c):ir.createElement(e.c);$a&&e.c=="a"&&c.addEventListener("click",$a(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Qt(c,pr(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?_$(e,t):a==="a0"?x$(e,r,t):a==="a3"?w$(e,t):a==="a4"?y$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function _$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function w$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function y$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function x$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=S$(r,i),e.addEventListener(t,c,eo&&{passive:$o(i)<2}),a[t]=c}}var eo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){eo=!0}}))}catch{}function S$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=$o(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=f.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);f=f.p}f(u,v)}}return n.q=r,n}function T$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function hc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=B$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];Oe(e.k,r.k,f,0),f.length>0&&he(n,1,a,f);return;case 4:for(var m=e.j,d=r.j,s=!1,g=e.k;g.$===4;)s=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)s=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(s&&m.length!==d.length){he(n,0,a,r);return}(s?!C$(m,d):m!==d)&&he(n,2,a,d),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:$i(e,r,n,a,L$);return;case 2:$i(e,r,n,a,P$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=ro(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function $i(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=ro(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function ro(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ro(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&T$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=t[v];Oe(f,i[v],n,++a),a+=f.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,d=0,s=a;m<v&&d<f;){var g=l[m],b=u[d],w=g.a,y=b.a,h=g.b,T=b.b,k=void 0,G=void 0;if(w===y){s++,Oe(h,T,t,s),s+=h.b||0,m++,d++;continue}var j=l[m+1],R=u[d+1];if(j){var N=j.a,W=j.b;G=y===N}if(R){var F=R.a,Y=R.b;k=w===F}if(k&&G){s++,Oe(h,Y,t,s),un(i,t,w,T,d,c),s+=h.b||0,s++,vn(i,t,w,W,s),s+=W.b||0,m+=2,d+=2;continue}if(k){s++,un(i,t,y,T,d,c),Oe(h,Y,t,s),s+=h.b||0,m+=1,d+=2;continue}if(G){s++,vn(i,t,w,h,s),s+=h.b||0,s++,Oe(W,T,t,s),s+=W.b||0,m+=2,d+=1;continue}if(j&&N===F){s++,vn(i,t,w,h,s),un(i,t,y,T,d,c),s+=h.b||0,s++,Oe(W,Y,t,s),s+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){s++;var g=l[m],h=g.b;vn(i,t,g.a,h,s),s+=h.b||0,m++}for(;d<f;){var Q=Q||[],b=u[d];un(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var _c="_elmW6BL";function un(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}un(e,r,n+_c,a,t,i)}function vn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}vn(e,r,n+_c,a,t)}function wc(e,r,n,a){$n(e,r,n,0,0,r.b,a)}function $n(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)wc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&$n(e,r,f,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&$n(e,r,f,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var s=r.k;s.$===4;)s=s.k;return $n(e,s,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=d===1?g[w]:g[w].b,h=t+(y.b||0);if(t<=u&&u<=h&&(a=$n(b[w],y,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function yc(e,r,n,a){return n.length===0?e:(wc(e,r,n,a),fa(e,n))}function fa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return fa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=fa(e,i.w),e;case 8:return M$(e,r);case 5:return r.s(e);default:en(10)}}function k$(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function M$(e,r){var n=r.s,a=D$(n.y,r);e=fa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Qt(e,a),e}function D$(e,r){if(!!e){for(var n=ir.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Qt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function no(e){if(e.nodeType===3)return _t(e.textContent);if(e.nodeType!==1)return _t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(Bn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=nr(no(v[a]),u);return p(Rr,l,r,u)}function B$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=E(function(e,r,n,a){return Zt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=no(l);return xc(i,function(v){var f=c(v),m=hc(u,f);l=yc(l,u,m,t),u=f})})});E(function(e,r,n,a){return Zt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=ir.title,v=ir.body,f=no(v);return xc(i,function(m){$a=c;var d=l(m),s=Rr("body")(L)(d.eu),g=hc(f,s);v=yc(v,f,g,t),f=s,$a=0,u!==d.fK&&(ir.title=u=d.fK)})})});var sa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function xc(e,r){r(e);var n=0;function a(){n=n===1?0:(sa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&sa(a),n=2)}}$(function(e,r){return o(mo,fo,fr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(mo,fo,fr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(mo,fo,fr(function(){history.replaceState({},"",r),e()}))});var F$={addEventListener:function(){},removeEventListener:function(){}},V$=typeof window!="undefined"?window:F$;x(function(e,r,n){return sc(fr(function(a){function t(i){qt(n(i))}return e.addEventListener(r,t,eo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?re(n.a):q});function Sc(e,r){return fr(function(n){sa(function(){var a=document.getElementById(e);n(a?Er(r(a)):Ov(is(e)))})})}function E$(e){return fr(function(r){sa(function(){r(Er(e()))})})}$(function(e,r){return Sc(r,function(n){return n[e](),Dn})});$(function(e,r){return E$(function(){return V$.scroll(e,r),Dn})});x(function(e,r,n){return Sc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var R$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var j$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?re(m):q}a.push(C(bl,u[0],u.index,t,_(f))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(bl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var N$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/G$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function G$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),fi=new Float64Array(3),si=new Float64Array(3),W$=x(function(e,r,n){return new Float64Array([e,r,n])}),H$=function(e){return e[0]},X$=function(e){return e[1]},U$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var I$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Tc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Tc);function Cc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ma(Tc(e,r,n),n)}$(Cc);function Lc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ma(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Lc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var O$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),fn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(fn);function yt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(yt);$(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=fn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(fn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(fn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(fn(r,a)+e[14])/n,t});var J$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var q$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},Y$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Q$=new Float64Array(16),K$=new Float64Array(16),ef=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},rf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Pc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Pc(c,l,i,t,n,a)});function zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(zc);E(function(e,r,n,a){return zc(e,r,n,a,-1,1)});function kc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],d=e[9],s=e[10],g=e[11],b=e[12],w=e[13],y=e[14],h=e[15],T=r[0],k=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],ke=r[14],Se=r[15];return n[0]=a*T+l*k+m*G+b*j,n[1]=t*T+u*k+d*G+w*j,n[2]=i*T+v*k+s*G+y*j,n[3]=c*T+f*k+g*G+h*j,n[4]=a*R+l*N+m*W+b*F,n[5]=t*R+u*N+d*W+w*F,n[6]=i*R+v*N+s*W+y*F,n[7]=c*R+f*N+g*W+h*F,n[8]=a*Y+l*Q+m*oe+b*ve,n[9]=t*Y+u*Q+d*oe+w*ve,n[10]=i*Y+v*Q+s*oe+y*ve,n[11]=c*Y+f*Q+g*oe+h*ve,n[12]=a*te+l*se+m*ke+b*Se,n[13]=t*te+u*se+d*ke+w*Se,n[14]=i*te+v*se+s*ke+y*Se,n[15]=c*te+f*se+g*ke+h*Se,n}$(kc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],d=e[12],s=e[13],g=e[14],b=r[0],w=r[1],y=r[2],h=r[4],T=r[5],k=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+f*y,n[2]=i*b+u*w+m*y,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+f*k,n[6]=i*h+u*T+m*k,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+f*R,n[10]=i*G+u*j+m*R,n[11]=0,n[12]=a*N+c*W+v*F+d,n[13]=t*N+l*W+f*F+s,n[14]=i*N+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ma(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/Lc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,d=c*f,s=l*f,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,h=g+s,T=b-d,k=g-s,G=c*c*v+u,j=w+m,R=b+d,N=w-m,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],ke=n[7],Se=n[8],mr=n[9],dr=n[10],Oa=n[11],Wu=n[12],Hu=n[13],Xu=n[14],Uu=n[15];return a[0]=F*y+ve*h+Se*T,a[1]=Y*y+te*h+mr*T,a[2]=Q*y+se*h+dr*T,a[3]=oe*y+ke*h+Oa*T,a[4]=F*k+ve*G+Se*j,a[5]=Y*k+te*G+mr*j,a[6]=Q*k+se*G+dr*j,a[7]=oe*k+ke*G+Oa*j,a[8]=F*R+ve*N+Se*W,a[9]=Y*R+te*N+mr*W,a[10]=Q*R+se*N+dr*W,a[11]=oe*R+ke*N+Oa*W,a[12]=Wu,a[13]=Hu,a[14]=Xu,a[15]=Uu,a});function nf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(nf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function af(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(af);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],d=a[7],s=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=f,t[6]=m,t[7]=d,t[8]=s,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+s*n+a[12],t[13]=c*e+f*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],d=r[6],s=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=d,n[7]=s,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+f*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+w*i+r[14],n[15]=v*a+s*t+y*i+r[15],n});x(function(e,r,n){var a=Cc(e,r,ao),t=ma(yt(n,a,fi),fi),i=ma(yt(a,t,si),si),c=Q$,l=K$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,kc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mi=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function to(e){for(var r=0;e.b;e=e.b)r++;return r}var tf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},of=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),cf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),lf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),vf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),sf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),df=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},pf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},bf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},gf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Mc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Dc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},_f=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},wf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},yf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},di=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],xf=[pf,bf,gf,Mc,Dc,hf,_f,wf,yf];function pi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Sf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Bc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Tf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(s,g,b,w,y){var h;if(t===1)for(h=0;h<g;h++)s[b++]=g===1?w[y]:w[y][h];else i.forEach(function(T){for(h=0;h<g;h++)s[b++]=g===1?w[T][y]:w[T][y][h]})}var u=Bc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*t,m=new u.type(to(n.b)*f);Sn(function(s){l(m,u.size*u.arraySize,v,s,a[r.name]||r.name),v+=f},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*to(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(to(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function bi(e,r){return e+"#"+r}var Ac=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Mc(n),Dc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=bi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=mi++,v||(v=pi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=mi++,f||(f=pi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=Sf(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Pf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var s=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(g)}c=bi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),zf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[s.name]===void 0&&(b.buffers[s.name]=Tf(a,s,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[s.name]);var w=Bc(a,s.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,h=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,y*T)}for(n.toggle=!n.toggle,Sn(O0(n),i.a),u=0;u<di.length;u++){var k=n[di[u]];k.toggle!==n.toggle&&k.enabled&&(xf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Sn(t,e.g),r});function Pf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(s,g){var b=g.name,w=e.getUniformLocation(s,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var y=c++;return function(h){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,y),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},f=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function zf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var kf=x(function(e,r,n){return f$(r,{g:n,f:{},h:e},Ef,Rf)}),Mf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Df=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Bf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Af=$(function(e,r){e.contextAttributes.antialias=!0}),Ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Vf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ef(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(I0,r,t)},e.h);var n=ir.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),tf(function(){return o(Ac,e,n)})):(n=ir.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,Ac(r)}var B=nv,On=Ku,Fc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(On,e,l,v)}else{var u=c.a;return p(On,i,l,u)}});return p(On,i,p(On,e,r,t),a)}),oo=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(oo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),gi=function(e){return p(oo,x(function(r,n,a){return o(B,z(r,n),a)}),L,e)},Vc=1,jf=2,Ec=0,we=function(e){return{$:1,a:e}},io=$(function(e,r){return{$:3,a:e,b:r}}),hi=$(function(e,r){return{$:0,a:e,b:r}}),Rc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Nf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Gf=Lv,Wf=Iv,Ae=vc,Lr=$(function(e,r){return o(Sv,e,Ba(r))}),co=$(function(e,r){return _(o(xv,e,r))}),jc=function(e){return o(Lr,`
    `,o(co,`
`,e))},An=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return p(An,$(function(r,n){return n+1}),0,e)},Hf=av,Xf=x(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),hr=$(function(e,r){return p(Xf,e,r,L)}),Nc=$(function(e,r){return p(Hf,e,o(hr,0,Ar(r)-1),r)}),rr=Av,Gc=function(e){var r=rr(e);return 97<=r&&r<=122},Wc=function(e){var r=rr(e);return r<=90&&65<=r},Uf=function(e){return Gc(e)||Wc(e)},If=function(e){var r=rr(e);return r<=57&&48<=r},Of=function(e){return Gc(e)||Wc(e)||If(e)},Fe=function(e){return p(An,B,L,e)},rn=hv,Jf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+jc(qf(r))))}),qf=function(e){return o(Yf,e,L)},Yf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=rn(n);if(b.$===1)return!1;var w=b.a,y=w.a,h=w.b;return Uf(y)&&o(Gf,Of,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Lr,"",Fe(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Ae(Ar(f))+" ways:"));return o(Lr,`

`,o(B,g,o(Nc,Jf,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Lr,"",Fe(r)):"!"}();default:var d=e.a,s=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Lr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(jc(o(Wf,4,s))+(`

`+d))}}),Ve=32,xt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),St=Ju,lo=fv,uo=$(function(e,r){return ti(r)/ti(e)}),Zf=vv,Tn=lo(o(uo,2,Ve)),Hc=C(xt,0,Tn,St,St),Xc=Yu,Uc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ic=sv,Tt=qu,ze=$(function(e,r){return I(e,r)>0?e:r}),Qf=function(e){return{$:0,a:e}},vo=Zu,Kf=$(function(e,r){e:for(;;){var n=o(vo,Ve,e),a=n.a,t=n.b,i=o(B,Qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),es=function(e){var r=e.a;return r},rs=$(function(e,r){e:for(;;){var n=lo(r/Ve);if(n===1)return o(vo,Ve,e).a;var a=o(Kf,e,L),t=n;e=a,r=t;continue e}}),Oc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Ic(o(uo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(rs,t,r.l);return C(xt,Tt(r.p)+n,o(ze,5,a*Tn),i,r.p)}else return C(xt,Tt(r.p),Tn,St,r.p)}),ns=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Oc,!1,{z:a,l:n/Ve|0,p:t});var i=Uc(p(Xc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(B,i,a),f=t;e=c,r=l,n=u,a=v,t=f;continue e}}),as=$(function(e,r){if(e<=0)return Hc;var n=e%Ve,a=p(Xc,n,e-n,r),t=e-n-Ve;return S(ns,r,t,e,L,a)}),Ie=function(e){return!e.$},D=Wv,Z=Ev,M=Gv,$e=Rv,da=Hv,ts=Xv,De=Vv,$o=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=Rr("div"),os=function(e){return{$:2,a:e}},Jc=$(function(e,r){return e}),qc=$(function(e,r){return{aK:r.aK,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),zr=function(e){return e},is=zr,_i=Xe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),cs=Pv,Pr=_v,Or=Tv,Fn=$(function(e,r){return e<1?r:p(Or,e,Pr(r),r)}),Aa=kv,Fa=function(e){return e===""},Va=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Yc=Mv,wi=ge(function(e,r,n,a,t){if(Fa(t)||o(cs,"@",t))return q;var i=o(Aa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Yc(o(Fn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(_i,e,o(Va,c,t),u,r,n,a))}else return re(_e(_i,e,t,q,r,n,a))}),yi=E(function(e,r,n,a){if(Fa(a))return q;var t=o(Aa,"/",a);if(t.b){var i=t.a;return S(wi,e,o(Fn,i,a),r,n,o(Va,i,a))}else return S(wi,e,"/",r,n,a)}),xi=x(function(e,r,n){if(Fa(n))return q;var a=o(Aa,"?",n);if(a.b){var t=a.a;return C(yi,e,re(o(Fn,t+1,n)),r,o(Va,t,n))}else return C(yi,e,q,r,n)});$(function(e,r){if(Fa(r))return q;var n=o(Aa,"#",r);if(n.b){var a=n.a;return p(xi,e,re(o(Fn,a+1,r)),o(Va,a,r))}else return p(xi,e,q,r)});var ls=zv,fo=function(e){},Vn=Er,us=Vn(0),Zc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,d=n>500?p(An,e,r,Fe(m)):C(Zc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,f,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=x(function(e,r,n){return C(Zc,e,r,0,n)}),ee=$(function(e,r){return p(sr,$(function(n,a){return o(B,e(n),a)}),L,r)}),pa=ht,so=$(function(e,r){return o(pa,function(n){return Vn(e(n))},r)}),vs=x(function(e,r,n){return o(pa,function(a){return o(pa,function(t){return Vn(o(e,a,t))},n)},r)}),$s=function(e){return p(sr,vs(B),Vn(L),e)},fs=r$,ss=$(function(e,r){var n=r;return sc(o(pa,fs(e),n))}),ms=x(function(e,r,n){return o(so,function(a){return 0},$s(o(ee,ss(e),r)))}),ds=x(function(e,r,n){return Vn(0)}),ps=$(function(e,r){var n=r;return o(so,e,n)});er.Task=Kv(us,ms,ds,ps);var bs=dc("Task"),mo=$(function(e,r){return bs(o(so,e,r))}),gs=A$,hs=bv,ba={$:1},Qc=function(e){return{$:2,a:e}},Ea={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),nn=function(e){var r=e.b.B;return r.a},_s=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ge,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Kc=function(e){var r=e.b;return o(Ge,Ea,r)},ur=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ws=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Kc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,nn(n).aK)>0?o(ae,_s,ur(o(Ge,ba,t))):zr)(o(Ge,Qc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(qc,l.eA,Qe(r,{aK:l.aK+r.eJ})),f=o(e,v,u);return o(Ge,Ea,{B:z(v,f),ab:L,T:o(B,t.B,t.T)})}}),el=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ys=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),xs=$(function(e,r){return Fe(p(ys,e,r,L))}),rl=x(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return _([h,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,h=m.a,d=m.b,c=d.a,s=d.b,f=s.a,g=s.b,b=g.a,w=g.b;return e>1e3?o(B,h,o(B,c,o(B,f,o(B,b,o(xs,r-4,w))))):o(B,h,o(B,c,o(B,f,o(B,b,p(rl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,h=y.a;return _([h])}}),Ss=$(function(e,r){return p(rl,0,e,r)}),Ts=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(_([a]),t)),c=o(Ss,e,i),l=o(el,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,ba,{B:u,ab:v,T:Fe(c)})}else{var f=Fe(c);if(f.b){var m=f.a,d=f.b;return o(Ge,ba,{B:m,ab:L,T:d})}else return r}}),Cs=function(e){var r=e.b;return o(Ge,ba,r)},Ls=function(e){var r=e.b;return o(Ge,Qc({cY:nn(e).aK}),r)},Ps=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return Kc(r);case 3:return Ls(r);default:var n=e.a;return o(Ts,n,r)}}),nl=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),zs=$(function(e,r){return Qe(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ms=function(e){return{$:2,a:e}},al=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},po=Dv,Bs=x(function(e,r,n){return o(ur,0/0,po(o(e,r,n)))}),tl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=yv,ol=function(e){return p(As,B,L,e)},Fs=$(function(e,r){var n=o(tl,function(a){return a!=="0"&&a!=="."},ol(r));return le(e&&n?"-":"",r)}),ye=vc,Ct=gv,il=Fv,cl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=rn(n);if(a.$===1)return"01";var t=a.a;return o(Ct,"0",cl(t))}else{var i=rr(r);return i>=48&&i<57?o(Ct,il(i+1),n):"0"}},Lt=$v,Vs=pv,Ra=function(e){return o(Ct,e,"")},ll=x(function(e,r,n){return e<=0?n:p(ll,e>>1,le(r,r),e&1?le(n,r):n)}),Cn=$(function(e,r){return p(ll,e,r,"")}),Pt=x(function(e,r,n){return le(n,o(Cn,e-Pr(n),Ra(r)))}),zt=wv,ul=function(e){var r=o(co,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Es=function(e){var r=o(co,"e",ye(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ur,0,Yc(o(ls,"+",t)?o(Fn,1,t):t)),c=ul(n),l=c.a,u=c.b,v=le(l,u),f=i<0?o(ur,"0",o(Ce,function(m){var d=m.a,s=m.b;return d+("."+s)},o(Ce,nl(Ra),rn(le(o(Cn,J(i),"0"),v))))):p(Pt,i+1,"0",v);return le(e<0?"-":"",f)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Rs=x(function(e,r,n){if(Lt(n)||Vs(n))return ye(n);var a=n<0,t=ul(Es(J(n))),i=t.a,c=t.b,l=Pr(i)+r,u=le(o(Cn,-l+1,"0"),p(Pt,l,"0",le(i,c))),v=Pr(u),f=o(ze,1,l),m=o(e,a,p(Or,f,v,u)),d=p(Or,0,f,u),s=m?zt(o(ur,"1",o(Ce,cl,rn(zt(d))))):d,g=Pr(s),b=s==="0"?s:r<=0?le(s,o(Cn,J(r),"0")):I(r,Pr(c))<0?p(Or,0,g-r,s)+("."+p(Or,g-r,g,s)):le(i+".",p(Pt,r,"0",c));return o(Fs,a,b)}),vl=Rs($(function(e,r){var n=rn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),js=Bs(vl),Ns=x(function(e,r,n){var a=o(uo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(js,t,n)}),$l=rv,bo=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o($l,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},Qr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,d=a.e;return S(X,0,r,n,S(X,1,v,f,m,d),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,s=a.d;s.a;var g=s.b,b=s.c,w=s.d,y=s.e,d=a.e;return S(X,0,v,f,S(X,1,g,b,w,y),S(X,1,r,n,d,t))}else return S(X,e,r,n,a,t)}),kt=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o($l,e,t);switch(u){case 0:return S(Qr,a,t,i,p(kt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Qr,a,t,i,c,p(kt,e,r,l))}}),bn=x(function(e,r,n){var a=p(kt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Gs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},fl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var f=v.b,m=v.c,d=v.d;d.a;var s=d.b,g=d.c,b=d.d,w=d.e,y=v.e;return S(X,0,s,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,f,m,w,y))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var f=T.b,m=T.c,d=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,f,m,d,y))}else return e},Si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,d=t.e,s=e.e;s.a;var g=s.b,b=s.c,w=s.d,y=s.e;return S(X,0,i,c,S(X,1,u,v,f,m),S(X,1,n,a,d,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,d=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,y=k.e;return S(X,1,n,a,S(X,0,i,c,T,d),S(X,0,g,b,w,y))}else return e},Ws=Ma(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return S(X,n,l,u,v,S(X,0,a,t,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Si(r)}else break e;else return c.a,c.d,Si(r);else break e;return r}}),aa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,aa(t),l);var u=fl(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,d=u.d,s=u.e;return S(Qr,v,f,m,aa(d),s)}else return ar}else return S(X,r,n,a,aa(t),l)}else return ar},gn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(gn,e,i),c);var u=fl(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,d=u.d,s=u.e;return S(Qr,v,f,m,o(gn,e,d),s)}else return ar}else return S(X,n,a,t,o(gn,e,i),c);else return o(Hs,e,Ot(Ws,e,r,n,a,t,i,c))}),Hs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=Gs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Qr,n,u,v,i,aa(c))}else return ar}else return S(Qr,n,a,t,i,o(gn,e,c))}else return ar}),Xs=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Jn=x(function(e,r,n){var a=r(o(bo,e,n));if(a.$)return o(Xs,e,n);var t=a.a;return p(bn,e,t,n)}),Us=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ds,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(al,z(i,c),p(Ns,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(Jn,r,Ce(function(a){return a.$===2?Ms(n):a}))}},Is=function(e){return zs(Us(e))},Os=$(function(e,r){return o(ee,Is(e),r)}),Js=$(function(e,r){return Qe(r,{eA:o(Os,e,r.eA)})}),qs=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,Qe(a,{B:o(nl,Js(e),a.B)}))}),Ys=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Zs=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,Qe(t,{B:o(Ys,o(e,i.a,r),i)}))}),Qs=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aM:!a.aM});case 2:var t=n.a;return Qe(a,{G:p(ws,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(qs,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Ps,l,a.G)})}}),Ks=$(function(e,r){return o(Ge,Ea,{B:z(e,r(e)),ab:L,T:L})}),em=n$,Ti=em(L),ga=Nv,Ln=jv,rm=c$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({aK:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(f){return o(D,function(m){return De({eo:m,eB:f,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ga(Ln)))},o(M,"left",Z))},o(M,"pressedKeys",ga(Ln)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),nm=function(e){return{$:4,a:e}},am={$:0},tm=fc,Ue=$(function(e,r){return o(gc,e,tm(r))}),O=Ue("className"),om=function(e){var r=e.b.B;return r.b},ha=Ue("id"),im=s$,_a=im,cm=m$,be=cm,lm={$:1},um=function(e){return{$:3,a:e}},vm=function(e){return{$:5,a:e}},Ci=Rr("a"),go=Rr("button"),$m=Bn("d"),sl=pc("http://www.w3.org/2000/svg"),fm=sl("path"),sm=sl("svg"),mm=Bn("viewBox"),hn=function(e){return o(sm,_([mm("0 0 100 100"),o(be,"width","100%"),o(be,"height","100%")]),_([o(fm,_([$m(e)]),L)]))},Li=function(e){return o(Ue,"href",p$(e))},qr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},dm=function(e){return{$:0,a:e}},ml=bc,dl=$(function(e,r){return o(ml,e,dm(r))}),ho=function(e){return o(dl,"click",De(e))},Pi=Ue("target"),pm=Ue("title"),Mt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Mt,e,i),o(Mt,e,c))}),bm=_t,vr=bm,gm=function(e){return p(oo,x(function(r,n,a){return o(B,n,a)}),L,e)},hm=$(function(e,r){return{$:3,a:e,b:r}}),_m=$(function(e,r){return{$:2,a:e,b:r}}),wm=$(function(e,r){return{$:0,a:e,b:r}}),ym=$(function(e,r){return{$:1,a:e,b:r}}),En=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xm=C(En,0/255,0/255,0/255,1),Sm=fc,Tm=$(function(e,r){return o(gc,e,Sm(r))}),Cm=Tm("checked"),qe=mv,Lm=x(function(e,r,n){return le(o(Cn,e-Pr(n),Ra(r)),n)}),wa=ov,pl=function(e){var r=function(n){return n<10?Ae(n):Ra(il(87+n))};return e<16?r(e):le(pl(e/16|0),r(o(wa,16,e)))},Pm=o(ae,pl,o(Lm,2,"0")),_o=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},zm=function(e){var r=_o(e),n=r.cN,a=r.cd,t=r.b6;return o(Lr,"",o(B,"#",o(ee,o(ae,qe,Pm),_([n*255,a*255,t*255]))))},Dt=Ue("htmlFor"),Bt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ya=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),km=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),wo=$(function(e,r){return p(sr,km(e),L,r)}),bl=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Mm=j$,Dm=Bv,Bm=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Am=R$,Fm=function(e){return o(Am,{ew:!1,fe:!1},e)},yo=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Vm=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Em=function(e){return{$:2,a:e}},Rm=function(e){return{$:0,a:e}},jm=function(e){return{$:1,a:e}},Ya=$(function(e,r){return rr(r)-rr(e)}),Za=x(function(e,r,n){var a=rr(n);return I(rr(e),a)<1&&I(a,rr(r))<1}),Nm=$(function(e,r){var n=function(t){return I(t,e)<0?ue(t):we(jm(r))},a=p(Za,"0","9",r)?ue(o(Ya,"0",r)):p(Za,"a","z",r)?ue(10+o(Ya,"a",r)):p(Za,"A","Z",r)?ue(10+o(Ya,"A",r)):we(Rm(r));return o(ya,n,a)}),gl=$(function(e,r){var n=rn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ya,function(c){return o(ya,function(l){return ue(c+l*e)},o(gl,e,i))},o(Nm,e,t))}),Gm=$(function(e,r){return 2<=e&&e<=36?o(gl,e,zt(r)):we(Em(e))}),Wm=Gm(16),Hm=x(function(e,r,n){return C(En,e,r,n,1)}),Xm=E(function(e,r,n,a){return C(En,e,r,n,a)}),Rn=tv,Um=$(function(e,r){var n=o(Rn,10,e);return qe(r*n)/n}),Im=Cv,Om=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ol(n);if(a.b&&!a.b.b){var t=a.a;return Dm(_([t,t]))}else return n};return o(ae,Im,o(ae,function(n){return o(Ce,function(a){return p(Mm,1,a,n)},Fm(e))},o(ae,Bt(yo),o(ae,Ce(function(n){return n.fF}),o(ae,Ce(wo(zr)),o(ae,Bm("Parsing hex regex failed"),ya(function(n){var a=o(ee,o(ae,r,o(ae,Wm,Vm(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return ue(C(Xm,t/255,c/255,u/255,o(Um,2,f/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ue(p(Hm,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),xa=Rr("input"),At=Rr("label"),Ft=Ue("name"),hl=$(function(e,r){return p(sr,M,r,e)}),Jm=o(hl,_(["target","checked"]),Z),qm=function(e){return o(dl,"change",o(da,e,Jm))},Ym=function(e){return z(e,!0)},Zm=function(e){return{$:1,a:e}},Qm=$(function(e,r){return o(ml,e,Zm(r))}),Km=o(hl,_(["target","value"]),Ln),xo=function(e){return o(Qm,"input",o(da,Ym,o(da,e,Km)))},_l=Ue("max"),wl=Ue("min"),yl=function(e){return o(Ue,"step",e)},Sa=Ue("type"),So=Ue("value"),zi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(U,L,_([o(At,_([Dt(r)]),_([o(U,_([O("relative w-full")]),_([o(U,_([O("inline-block")]),_([vr(r)])),o(U,_([O("inline-block float-right")]),_([vr(ye(n))]))]))])),o(xa,_([Sa("range"),o(be,"width","100%"),ha(r),Ft(r),wl(ye(a)),_l(ye(t)),So(ye(n)),yl(ye(i)),xo(o(ae,po,o(ae,ur(42),c)))]),L)]))},ed=$(function(e,r){if(r.$)return e;var n=r.a;return n}),rd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,L,_([o(U,_([O("mb-2")]),_([o(At,_([Dt(e)]),_([vr(e)]))])),o(xa,_([Sa("checkbox"),ha(e),Ft(e),qm(hm(e)),Cm(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return zi({cg:e,cs:i,cw:t,cA:wm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return zi({cg:e,cs:i,cw:t,cA:o(ae,qe,ym(e)),cW:1,c1:c});default:var c=r.a;return o(U,L,_([o(U,_([o(be,"margin-bottom","6px")]),_([o(At,_([Dt(e)]),_([vr(e)]))])),o(xa,_([Sa("color"),o(be,"width","100%"),o(be,"height","26px"),o(be,"padding","0px"),ha(e),Ft(e),xo(function(l){return o(_m,e,o(ed,xm,Om(l)))}),So(zm(c))]),L)]))}}),nd=function(e){return o(U,_([O("p-4 border-y-[0.5px] border-white20")]),_([o(U,_([O("text-lg pb-2")]),_([vr(e.ff)])),o(U,_([O("pl-2 pr-2")]),gm(o(Mt,rd,e.av)))]))},ad=function(e){return o(U,_([O("text-xs text-white60")]),o(ee,nd,e))},td=function(e){return o(U,_([O("absolute left-[104px] bottom-2 text-sm text-white40")]),_([vr("clock: "+o(vl,3,nn(e).aK))]))},od=function(e){e.a;var r=e.b.T;return o(Ce,function(n){return qe(60/(nn(e).aK-n))},o(Ce,o(ae,es,function(n){return n.aK}),yo(o(el,59,r))))},id=function(e){return o(U,_([O("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=od(e);if(r.$===1)return _([vr("... Fps")]);var n=r.a;return _([vr(Ae(n)+" Fps")])}())},cd=function(e){return{$:0,a:e}},ld=function(e){var r=e.b.T;return Ar(r)},ud=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},vd=function(e){return o(xa,_([O("absolute left-[100px] w-[490px]"),Sa("range"),wl(Ae(0)),_l(Ae(ud(e)-1)),So(Ae(ld(e))),yl(Ae(1)),xo(o(ae,po,o(ae,ur(42),o(ae,qe,cd))))]),L)},ki={$:1},$d={$:3},fd={$:2},xl=function(e){return!e.b},Mi=$(function(e,r){return o(go,_([O("px-2 bg-black40"),O(r),ho(e)]),_([vr("REC")]))}),Di=$(function(e,r){return o(go,_([O("absolute left-[60px] mx-1 px-1 bg-black40"),ho(r)]),_([o(U,_([O("w-4 h-6 fill-white80")]),_([hn(e)]))]))}),sd=function(e){var r=e.a,n=e.b.ab;return o(U,_([O("py-1")]),_([function(){switch(r.$){case 0:return o(Mi,ki,"text-red-500 font-bold");case 1:return o(Mi,fd,"text-white80 font-bold");default:return o(U,L,L)}}(),function(){switch(r.$){case 0:return o(U,L,L);case 1:return xl(n)?o(U,L,L):o(Di,qr.fo,$d);default:return o(Di,qr.fn,ki)}}()]))},md=function(e){return o(U,_([O("pl-4 py-4 border-[0.5px] border-white20 bg-black20")]),_([vd(e),sd(e),id(e),td(e)]))},dd=function(e){var r=e.a;return gr(r,Ea)},pd=$(function(e,r){var n=dd(r.G)?o(U,L,L):o(U,_([O("absolute pointer-events-none w-8 h-8"),o(be,"left",ye(e.fp.fT+.5*e.cT.fR)+"px"),o(be,"top",ye(-e.fp.fX+.5*e.cT.eW)+"px")]),_([o(U,_([O(e.fp.e4?"fill-black80":"fill-white40")]),_([hn(qr.fp)]))]));return o(U,L,_([n]))}),bd=$(function(e,r){var n=o(go,_([O(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),ho(lm),pm("Distraction Free Mode")]),_([hn(qr.f$)])),a=o(U,_([O("absolute w-8 bottom-12")]),_([o(Ci,_([O("fill-twitterBlue40 hover:fill-twitterBlue"),Li("https://twitter.com/AzizErkalSelman"),Pi("_blank")]),_([hn(qr.fL)]))])),t=o(U,_([O("absolute w-8 bottom-2")]),_([o(Ci,_([O("fill-githubCat40 hover:fill-githubCat"),Li("https://github.com/erkal/elm-3d-playground-exploration"),Pi("_blank")]),_([hn(qr.eQ)]))]));return r.aM?o(U,_([O("fixed w-10 h-10 p-1")]),_([n])):o(U,L,_([o(U,_([O("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(U,_([O("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),_([o(_a,um,ad(nn(r.G).eA))])),o(U,_([O("absolute bottom-0 left-[300px] w-[600px] h-16")]),_([o(_a,vm,md(r.G))])),o(pd,e,r)]))}),gd=x(function(e,r,n){var a=om(n.G),t=nn(n.G);return o(U,_([O("bg-black40"),O("select-none"),O("antialiased"),O("font-mono"),o(be,"width",ye(t.cT.fR)+"px"),o(be,"height",ye(t.cT.eW)+"px")]),_([o(U,_([O("fixed")]),_([o(_a,Jc(am),o(e,t,a))])),o(U,_([ha("gui")]),_([o(bd,t,n),o(_a,nm,o(r,t,a))]))]))}),hd=Xe(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(Qs,r,i,u,v),Ti)}),l=function(u){var v=o(qc,n,u.e1);return z({aM:u.e1.cT.fR<500,G:o(Ks,v,a)},Ti)};return gs({e0:l,fG:Jc(rm(os)),fM:c,fP:o(gd,e,t)})}),_d=E(function(e,r,n,a){return _e(hd,e,r,n,a,$(function(t,i){return o(U,L,L)}),x(function(t,i,c){return c}))}),wd=function(e){return{}},yd=x(function(e,r,n){return{av:n,e5:r,ff:e}}),Sl=ar,xd=function(e){return p(An,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),Sl,e)},Sd=x(function(e,r,n){return p(yd,e,r,xd(n))}),Td=Sd,Qa=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(al,z(a,t),n))}),Cd=_([p(Td,"Camera",!0,_([p(Qa,"camera x",z(-40,40),0),p(Qa,"camera y",z(-40,40),0),p(Qa,"camera z",z(-40,40),16)]))]),Ld=$(function(e,r){return r}),Pd=$(function(e,r){return r.b?p(sr,B,r,e):e}),We=function(e){return p(sr,Pd,L,e)},ja=$(function(e,r){return We(o(ee,e,r))}),zd=function(e){var r=function(n){return o(ee,function(a){return z(n,a)},e)};return ja(r)},To=function(e){return{$:5,a:e}},Ta=function(e){return To(e)},_r=iv,Ne=function(e){return e*_r/180},Na=$(function(e,r){return{$:0,a:e,b:r}}),Tl=$(function(e,r){return{$:2,a:e,b:r}}),Cl=$(function(e,r){return{$:4,a:e,b:r}}),Ll=$(function(e,r){return{$:3,a:e,b:r}}),Co=$(function(e,r){return{$:1,a:e,b:r}}),kd=x(function(e,r,n){return{fT:e,fX:r,c6:n}}),Md=function(e){var r=e;return r},Lo=function(e){var r=e;return Md(r.er)},Po=function(e){var r=e;return r.aL},an=function(e){var r=e;return r.cB},jn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),$r=function(e){return e},jr=function(e){var r=e;return r.c4},Nr=function(e){var r=e;return r.c5},Gr=function(e){var r=e;return r.c7},Dd=$(function(e,r){return $r({cB:o(jn,e,an(r)),c4:jr(r),c5:Nr(r),c7:Gr(r)})}),Bd=$(function(e,r){return{er:o(Dd,e,Lo(r)),aL:Po(r)}}),Nn=$(function(e,r){return{eG:r,cB:e}}),Ad=$(function(e,r){var n=r;return o(Nn,o(jn,e,n.cB),n.eG)}),Fd=$(function(e,r){var n=r;return{k:o(Ad,e,n.k),e9:n.e9,fr:n.fr}}),zo=function(e){var r=e;return r},Vd=function(e){return e},Pl=$(function(e,r){var n=zo(r),a=n.a,t=n.b;return Vd(z(e(a),e(t)))}),Ed=$(function(e,r){return o(Pl,jn(e),r)}),ko=function(e){var r=e;return r.ey},Mo=function(e){var r=e;return r.fr},Ee=function(e){var r=e;return J(r)},zl=$(function(e,r){return{ey:r,fr:Ee(e)}}),Rd=$(function(e,r){return o(zl,Mo(r),o(jn,e,ko(r)))}),kl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),jd=$(function(e,r){return o(kl,jn(e),r)}),Ga=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(kd,n,a,t);switch(r.$){case 0:var f=r.a,c=r.b;return o(Na,f,o(Bd,i,c));case 1:var f=r.a,l=r.b;return o(Co,f,o(jd,i,l));case 3:var f=r.a,u=r.b;return o(Ll,f,o(Rd,i,u));case 2:var f=r.a,v=r.b;return o(Tl,f,o(Fd,i,v));case 4:var f=r.a,m=r.b;return o(Cl,f,o(Ed,i,m));default:var d=r.a;return To(o(ee,Ga(A(n,a,t)),d))}}),Vt=function(e){return Ga(A(e,0,0))},Cr=function(e){return Ga(A(0,e,0))},Pn=function(e){return Ga(A(0,0,e))},Fr=function(e){return e},wr=cv,Vr=lv,ta=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=wr(c),u=Vr(c),v=a.eG,f=v,m=f.fT*u,d=l*m,s=m*m,g=f.fX*u,b=l*g,w=m*g,y=g*g,h=1-2*(s+y),T=f.c6*u,k=l*T,G=2*(w-k),j=2*(w+k),R=m*T,N=2*(R+b),W=2*(R-b),F=g*T,Y=2*(F-d),Q=2*(F+d),oe=T*T,ve=1-2*(y+oe),te=1-2*(s+oe);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+te*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+h*i.c6}}),Gn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=wr(c),u=Vr(c),v=a.cB,f=v,m=i.fT-f.fT,d=i.fX-f.fX,s=i.c6-f.c6,g=a.eG,b=g,w=b.fT*u,y=l*w,h=w*w,T=b.fX*u,k=l*T,G=w*T,j=T*T,R=1-2*(h+j),N=b.c6*u,W=l*N,F=2*(G-W),Y=2*(G+W),Q=w*N,oe=2*(Q+k),ve=2*(Q-k),te=T*N,se=2*(te-y),ke=2*(te+y),Se=N*N,mr=1-2*(j+Se),dr=1-2*(h+Se);return{fT:f.fT+mr*m+F*d+oe*s,fX:f.fX+Y*m+dr*d+se*s,c6:f.c6+ve*m+ke*d+R*s}}),Nd=x(function(e,r,n){return $r({cB:p(Gn,e,r,an(n)),c4:p(ta,e,r,jr(n)),c5:p(ta,e,r,Nr(n)),c7:p(ta,e,r,Gr(n))})}),Gd=x(function(e,r,n){return{er:p(Nd,e,r,Lo(n)),aL:Po(n)}}),Wd=$(function(e,r){var n=o(Gn,e,r),a=o(ta,e,r);return function(t){var i=t;return o(Nn,n(i.cB),a(i.eG))}}),Hd=x(function(e,r,n){var a=n;return{k:p(Wd,e,r,a.k),e9:a.e9,fr:a.fr}}),Xd=x(function(e,r,n){return o(Pl,o(Gn,e,r),n)}),Ud=x(function(e,r,n){return o(zl,Mo(n),p(Gn,e,r,ko(n)))}),Id=x(function(e,r,n){return o(kl,o(Gn,e,r),n)}),Wa=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Na,l,p(Gd,e,r,a));case 1:var l=n.a,t=n.b;return o(Co,l,p(Id,e,r,t));case 3:var l=n.a,i=n.b;return o(Ll,l,p(Ud,e,r,i));case 2:var l=n.a,c=n.b;return o(Tl,l,p(Hd,e,r,c));case 4:var l=n.a,u=n.b;return o(Cl,l,p(Xd,e,r,u));default:var v=n.a;return To(o(ee,o(Wa,e,r),v))}}),Wr={fT:0,fX:0,c6:0},cr=function(e){return e},Ml=cr({fT:1,fX:0,c6:0}),Do=Ml,Od=o(Nn,Wr,Do),Bi=$(function(e,r){return p(Wa,Od,Fr(e),r)}),Bo=cr({fT:0,fX:1,c6:0}),Ao=Bo,Jd=o(Nn,Wr,Ao),qd=$(function(e,r){return p(Wa,Jd,Fr(e),r)}),Fo=cr({fT:0,fX:0,c6:1}),Vo=Fo,Yd=o(Nn,Wr,Vo),_n=$(function(e,r){return p(Wa,Yd,Fr(e),r)}),de=dv,Ka=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),et=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),lr=$(function(e,r){var n=e,a=r;return a-n}),Zd=cr({fT:-1,fX:0,c6:0}),Qd=cr({fT:0,fX:-1,c6:0}),Dl=cr({fT:0,fX:0,c6:-1}),me=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),Kd=Xe(function(e,r,n,a,t,i){var c=o(Ka,n,i)?Fo:Dl,l=o(Ka,r,t)?Bo:Qd,u=o(Ka,e,a)?Ml:Zd,v=A(Ee(o(lr,e,a)),Ee(o(lr,r,t)),Ee(o(lr,n,i))),f=p(me,o(et,e,a),o(et,r,t),o(et,n,i)),m=$r({cB:f,c4:u,c5:l,c7:c});return{er:m,aL:v}}),kr=function(e){var r=e;return r.fT},Mr=function(e){var r=e;return r.fX},Dr=function(e){var r=e;return r.c6},Bl=$(function(e,r){return _e(Kd,kr(e),Mr(e),Dr(e),kr(r),Mr(r),Dr(r))}),br=x(function(e,r,n){return{fT:e,fX:r,c6:n}}),e0=$(function(e,r){var n=r/2;return o(Na,e,o(Bl,p(br,-n,-n,-n),p(br,n,n,n)))}),r0=E(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,f=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=f(i-1/3),d=f(i),s=f(i+1/3);return C(En,s,d,m,a)}),n0=x(function(e,r,n){return C(r0,e,r,n,1)}),Et=function(e){return{$:0,a:e}},Al=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Fl=x(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),rt=function(e){return p(Fl,0,1,e<=.04045?e/12.92:o(Rn,(e+.055)/1.055,2.4))},Wn=W$,a0=function(e){var r=_o(e),n=r.cN,a=r.cd,t=r.b6;return p(Wn,rt(n),rt(a),rt(t))},Vl=function(e){return p(Al,0,Et(a0(e)),Et(0))},t0=$(function(e,r){return(r-Ic(r/e)*e)/e}),o0=function(e){return 2*_r*e},sn=E(function(e,r,n,a){return e+(r-e)*(1+wr(o0(o(t0,n,a))))/2}),Rt=function(e){return Vl(p(n0,C(sn,0,1,7,e.aK),.8,.8))},nt=function(e){return o(e0,Rt(e),1)},El=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Na,e,o(Bl,p(br,-c,-l,-u),p(br,c,l,u)))}),Me=x(function(e,r,n){return A(e,r,n)}),i0=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(Co,e,p(Me,p(br,n.fT,n.fX,n.c6),p(br,a.fT,a.fX,a.c6),p(br,t.fT,t.fX,t.c6)))}),c0=function(e){var r=o(Cr,-(de(3)/6),o(Vt,-.5,o(_n,-Ne(30),o(i0,Rt(e),A({fT:0,fX:0,c6:0},{fT:wr(Ne(30)),fX:Vr(Ne(30)),c6:0},{fT:0,fX:1,c6:0}))))),n=o(Cr,-(de(3)/6),o(El,Rt(e),A(1,1e-8,1)));return Ta(_([o(Pn,-.5,r),o(Pn,.5,r),n,o(_n,Ne(120),n),o(_n,Ne(240),n)]))},l0=$(function(e,r){var n=r.a,a=r.b,t=$(function(m,d){return o(Cr,(1+de(3))/2,o(_n,m,o(Cr,-((1+de(3))/2),d)))}),i=_r,c=20,l=function(m){return o(Bi,C(sn,0,i,c,e.aK),m)},u=o(t,Ne(240),l(nt(e))),v=o(Vt,(3+de(3))/2,o(Cr,(1+de(3))/2,l(nt(e)))),f=l(Ta(_([o(_n,Ne(90),o(Cr,1/2+de(3)/6,c0(e))),nt(e)])));return o(Pn,C(sn,-1,1,7,e.aK),o(Cr,a*(1+de(3)),o(Vt,n*(3+de(3)),o(qd,C(sn,0,i,c,e.aK),o(Bi,C(sn,0,i,c,e.aK),Ta(_([f,o(t,Ne(60),f),o(t,Ne(120),f),o(t,-Ne(60),f),v,u])))))))}),u0=function(e){return Ta(o(ee,l0(e),o(zd,o(hr,-1,1),o(hr,-1,1))))},v0=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(bo,e,r.av))}),$0=$(function(e,r){return o(ur,0,yo(o(wo,v0(e),r)))}),f0=$(function(e,r){return o($0,e,r.eA)}),at=f0,mn=function(e){return Fr(_r*(e/180))},s0=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ze,J(c),o(ze,J(i),J(t)));if(l){var u=t/l,v=i/l,f=c/l,m=de(f*f+v*v+u*u);return re({fT:f/m,fX:v/m,c6:u/m})}else return q}),tt=function(e){return e},Eo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),oa=function(e){var r=e,n=o(ze,J(r.fT),o(ze,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=de(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c6:a/c})}else return q},Ca=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),m0=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),Rl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),d0=$(function(e,r){var n=e,a=r;return I(a,n)<0}),p0=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),b0=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),g0=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Je=0,jl={fT:0,fX:0,c6:0},h0=x(function(e,r,n){return o(Bt,function(a){var t=o(p0,o(b0,a,r),r);return o(Bt,function(i){var c=o(Eo,r,e),l=o(m0,n,c),u=o(Rl,Je,l)?c:o(d0,Je,l)?g0(c):jl;return o(Ce,function(v){return A(a,i,v)},oa(u))},oa(t))},oa(e))}),_0=function(e){var r=e,n=J(r.c6),a=J(r.fX),t=J(r.fT);if(I(t,a)<1)if(I(t,n)<1){var i=de(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=de(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(I(a,n)<1){var i=de(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=de(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},Ro=function(e){var r=_0(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return z(r,c)},Jr=function(e){var r=e;return r},w0=$(function(e,r){var n=Ro(e),a=n.a,t=n.b;return $r({cB:r,c4:a,c5:t,c7:e})}),y0=function(e){var r=o(Ca,e.aS,e.dj),n=Jr(e.ei),a=o(Eo,r,n),t=p(h0,r,n,a);if(t.$){var v=oa(r);if(v.$){var m=Ro(e.ei),d=m.a,s=m.b;return $r({cB:e.dj,c4:s,c5:e.ei,c7:d})}else{var f=v.a;return o(w0,f,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return $r({cB:e.dj,c4:u,c5:l,c7:c})}},x0=function(e){return{$:0,a:e}},ia=function(e){var r=e;return .5*r},S0=uv,T0=function(e){var r=e;return S0(r)},C0=function(e){var r=ia(Ee(e.ej)),n=T0(r);return{cM:x0(n),c2:e.c2}},L0=function(e){var r=e.aS,n=e.dj,a=e.ei;return C0({ej:mn(40),c2:y0({dj:tt(n),aS:tt(r),ei:o(ur,Bo,o(s0,Wr,tt(a)))})})},P0=function(e){return e},Br=function(e){return e},z0=function(e){return Br(.01*e)},Ai=function(e){return e},k0=function(e){return e},M0=function(e){return{$:0,a:e}},D0=M0,B0={$:3},A0=B0,F0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),V0=F0,E0=function(e){return{$:1,a:e}},R0=E0,j0=function(e){return o(Bn,"height",Ae(e))},N0=function(e){return $$(d$(e))},G0=N0,W0=function(e){return{$:2,a:e}},H0=W0,X0=function(e){return o(Lr,"",e)},U0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return qe(l*1e3)/1e3},c=function(l){return qe(l*1e4)/100};return X0(_(["rgba(",ye(c(r)),"%,",ye(c(n)),"%,",ye(c(a)),"%,",ye(i(t)),")"]))},I0=$(function(e,r){switch(r.$){case 0:return o(Mf,e,r);case 1:return o(Df,e,r);case 2:return o(Bf,e,r);case 3:return o(Af,e,r);case 4:return o(Ff,e,r);default:return o(Vf,e,r)}}),O0=$(function(e,r){switch(r.$){case 0:return o(cf,e,r);case 1:return o(lf,e,r);case 2:return o(uf,e,r);case 3:return o(vf,e,r);case 4:return o($f,e,r);case 5:return o(ff,e,r);case 6:return o(sf,e,r);case 7:return o(mf,e,r);default:return df(e)}}),J0=x(function(e,r,n){return p(kf,e,r,n)}),Fi=function(e){var r=e;return r},tn=J$,ot=C(tn,1,1,1,1),Ye=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),q0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Y0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(q0,n*a/t,n,n*(1-a-t)/t)}),Z0=function(e){var r=e.a,n=e.b,a=e.c;return p(Wn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},jo=$(function(e,r){return Z0(o(Y0,e,r))}),Nl=$(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),Ke=ef,Q0=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},it=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(tn,a.bY,a.bY,a.bY,i);return _e(t,e,c,Q0(a),a.dp,r,n)}),Gl=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,f=n,m=o(Nl,c,a),d=l,s=i;e=u,r=v,n=f,a=m,t=d,i=s;continue e;case 1:var g=t.b,b=o(B,S(it,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(B,S(it,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var h=t.a,T=o(B,S(it,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(An,C(Gl,e,r,n,a),i,k)}}),K0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Wl=K0,No=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ep=function(e){var r=e.Z,n=e.W,a=e.V;return C(No,518,r,n,a)},rp=$(function(e,r){return{$:6,a:e,b:r}}),np=rp,Hl=_([ep({V:1,W:0,Z:!1}),C(Wl,!1,!1,!1,!1),o(np,0,1)]),Kr=519,Go=8,Xl=15,Yr=7681,ap={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=of,tp=$(function(e,r){return{$:0,a:e,b:r}}),op=tp({df:1,$7:0,dV:5}),Be=N$,ip=op(_([{bU:o(Be,-1,-1)},{bU:o(Be,1,-1)},{bU:o(Be,-1,1)},{bU:o(Be,1,1)}])),cp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Wo=x(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return o(ae,c(v.bm),o(ae,l(v.a9),o(ae,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(lp,a,t,i)))}),Ho=function(e){return p(Wo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Xo=function(e){return S(ne,_([Ho(e),C(Wl,!1,!1,!1,!1)]),cp,ap,ip,{})},up=Xo({a9:Yr,cp:0,cO:Go,bm:Kr,c3:Xl,bu:Yr,bv:Yr}),vp=516,Vi=5386,xe=7680,$p=function(e){return o(Rn,2,e+4)},Ul=function(e){return Xo({a9:xe,cp:Xl,cO:Go,bm:vp,c3:$p(e),bu:Vi,bv:Vi})},fp=x(function(e,r,n){return We(_([p(Ye,e,n,Hl),_([Ul(r),up])]))}),sp=$(function(e,r){return We(o(Nc,fp(e),r))}),mp=function(e){var r=e.Z,n=e.W,a=e.V;return C(No,513,r,n,a)},dp=mp({V:1,W:0,Z:!0}),pp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},bp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var f=u.a,m=u.b,d=u.c,s=v.a,g=v.b,b=v.c;return pp(f)(m)(d)(s)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},gp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ei=$(function(e,r){var n=e,a=r;return p(gp,32774,n,a)}),hp=1,Ri=771,_p=770,Uo=bp({bw:0,aH:o(Ei,hp,Ri),bz:0,bB:o(Ei,_p,Ri),bG:0,bW:0}),Hr=_([dp,Uo]),wp=function(e){var r=e;return r.dO},yp=function(e){var r=e;return r.dP},Il=function(e){var r=e;return r.dQ},xp=function(e){var r=e;return r.dR},Sp=function(e){var r=e;return r.dS},Ol=function(e){var r=e;return r.dT},Jl=function(e){return A(o(lr,xp(e),wp(e)),o(lr,Sp(e),yp(e)),o(lr,Ol(e),Il(e)))},ji=function(e){var r=e;return an(r)},Tp=function(e){return e},Cp=function(e){return $r({cB:Tp({fT:e.H,fX:e.I,c6:e.J}),c4:cr({fT:e.q,fX:e.r,c6:e.s}),c5:cr({fT:e.t,fX:e.u,c6:e.v}),c7:cr({fT:e.w,fX:e.x,c6:e.y})})},ct=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),ql=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,f=v,m=n.c5,d=m,s=n.c4,g=s;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*d.fT+l*d.fX+u*d.c6,c6:c*f.fT+l*f.fX+u*f.c6}}),Yl=$(function(e,r){return{cB:o(ql,e,an(r)),c4:o(ct,e,jr(r)),c5:o(ct,e,Nr(r)),c7:o(ct,e,Gr(r))}}),La=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ze,n,a)}),ca=$(function(e,r){return I(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ca,n,a)}),Lp=$(function(e,r){var n=La(r),a=La(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),He=function(e){var r=e;return r},Pp=function(e){var r=e;return A(r.fT,r.fX,r.c6)},wn=$(function(e,r){var n=e,a=r;return a+n}),zp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ia(Ee(a)),c=ia(Ee(n)),l=ia(Ee(t)),u=Pp(r),v=u.a,f=u.b,m=u.c;return{dO:o(wn,c,v),dP:o(wn,i,f),dQ:o(wn,l,m),dR:o(lr,c,v),dS:o(lr,i,f),dT:o(lr,l,m)}}),Ni=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,f=t.fT*r,m=He(Gr(e)),d=J(l*m.fT)+J(c*m.fX)+J(i*m.c6),s=He(Nr(e)),g=J(l*s.fT)+J(c*s.fX)+J(i*s.c6),b=He(jr(e)),w=J(l*b.fT)+J(c*b.fX)+J(i*b.c6),y=o(zp,A(w,g,d),o(ql,e,p(br,f,v,u)));if(a.$)return re(y);var h=a.a;return re(o(Lp,h,y))}),jt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var s=e,g=r,b=n,w=i;e=s,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Ni,e,r,c,n),s=e,g=r,b=l,w=i;e=s,r=g,n=b,a=w;continue e;case 2:var s=e,g=r,b=n,w=i;e=s,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Ni,e,r,c,n),s=e,g=r,b=l,w=i;e=s,r=g,n=b,a=w;continue e;case 4:var u=t.a,s=e,g=r,b=C(jt,e,r,n,u),w=i;e=s,r=g,n=b,a=w;continue e;default:var v=t.a,f=t.b,m=o(Yl,Cp(v),e),d=r*v.bY,s=e,g=r,b=C(jt,m,d,n,_([f])),w=i;e=s,r=g,n=b,a=w;continue e}}else return n}),on=H$,cn=X$,ln=U$,Zl=function(e){return{$:4,a:e}},kp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Hn=function(e){return Zl(o(kp,e,L))},Mp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Dp=function(e){var r=e;return r},Gi=Xo({a9:Yr,cp:0,cO:Go,bm:Kr,c3:255,bu:Yr,bv:Yr}),Bp=function(e){var r=e,n=o(ze,J(r.fT),o(ze,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=de(i*i+t*t+a*a);return c*n}else return Je},Te={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fT:0,fX:0,c6:0},Re=$(function(e,r){var n=e,a=r;return Ke({dx:n.fT,dy:n.bW,dz:a.fT,dA:a.bW,dB:n.fX,dC:n.bG,dD:a.fX,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),dn=z({be:o(Re,Te,Te),bL:o(Re,Te,Te),bM:o(Re,Te,Te),bN:o(Re,Te,Te)},C(tn,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Wi=function(e){var r=e;return-r},Ql=514,Kl=function(e){var r=e.Z,n=e.W,a=e.V;return C(No,515,r,n,a)},eu=240,Ap=_([Kl({V:1,W:0,Z:!0}),Ho({a9:xe,cp:eu,cO:0,bm:Ql,c3:0,bu:xe,bv:xe}),Uo]),Fp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Ee(a),l=c,u=Ee(t),v=u,f=n.cM;if(f.$){var d=f.a;return Lt(v)?Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=f.a;return Lt(v)?Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),qn=$(function(e,r){return(1&e>>r)===1?0:1}),Vp=function(e){return _([Kl({V:1,W:0,Z:!0}),Ho({a9:xe,cp:eu,cO:e,bm:Ql,c3:0,bu:xe,bv:xe}),Uo])},Ep=x(function(e,r,n){return We(o(ee,function(a){var t=a<<4,i=C(tn,o(qn,a,0),o(qn,a,1),o(qn,a,2),o(qn,a,3));return p(Ye,e,z(r,i),Vp(t))},o(hr,1,o(Rn,2,n)-1)))}),zn=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Zr=function(e){var r=e;return r},Rp=rf,Hi=function(e){var r=e;return zn(Gr(r))},jp={cB:Wr,c4:Do,c5:Ao,c7:Vo},Ha=function(e){var r=e;return r},Np=function(e){var r=Ha(an(e)),n=He(Gr(e)),a=He(Nr(e)),t=He(jr(e));return Ke({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Gp=$(function(e,r){var n=r;return Np(o(Yl,n,e))}),Wp=function(e){return o(Gp,jp,e)},Hp=function(e){var r=e;return r.c2},Xp=function(e){var r=e;return jr(r)},Up=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),Ip=function(e){var r=e;return Nr(r)},Op=function(e){var r=Hp(e.ev),n=$r({cB:ji(r),c4:Xp(r),c5:Ip(r),c7:zn(Hi(r))}),a=Hn(e.aQ),t=a,i=C(jt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=Wp(r),u=o(ie,.99,o(ce,Ee(e.aJ),Wi(Il(c)))),v=Jl(c),f=v.a,m=v.b,d=v.c,s=Bp(p(Up,f,m,d)),g=o(ie,1.01,o(wn,s,Wi(Ol(c)))),b=o(Fp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Rp(b).dM,y=w?He(zn(Hi(r))):Zr(ji(r)),h=function(){var te=e.b_;switch(te.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var se=te.a;return z(3,se);case 4:var se=te.a;return z(4,se);default:return z(5,0)}}(),T=h.a,k=h.b,G=e.bE,j=G,R=o(jo,j,e.b0),N=R,W=Ke({dx:0,dy:y.fT,dz:on(N),dA:e.ec,dB:0,dC:y.fX,dD:cn(N),dE:Dp(s),dF:0,dG:y.c6,dH:ln(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),F=_e(Gl,W,l,b,Mp,t,{M:L,U:L,fz:L}),Y=e.bK;switch(Y.$){case 0:var Q=Y.a;return We(_([p(Ye,F.M,z(Q,ot),Hr),p(Ye,F.U,dn,Hr)]));case 1:var Q=Y.a;return We(_([p(Ye,F.M,dn,Hr),_([Gi]),p(Ye,F.fz,Q.be,Hl),_([Ul(0)]),p(Ye,F.M,z(Q,ot),Ap),p(Ye,F.U,dn,Hr)]));default:var oe=Y.a,ve=Y.b;return We(_([p(Ye,F.M,z(ve,ot),Hr),_([Gi]),o(sp,F.fz,oe),p(Ep,F.M,ve,Ar(oe)),p(Ye,F.U,dn,Hr)]))}},Jp=function(e){return o(Bn,"width",Ae(e))},qp=$(function(e,r){var n=_([R0(1),H0(0),D0(!0),C(V0,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return A(n,"0",1);case 1:return A(o(B,A0,n),"1",1);default:var k=T.a;return A(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,f=Fi(v),m=o(be,"height",Ae(f)+"px"),d=Fi(u),s=d/f,g=o(ja,function(T){return Op({eq:s,ev:e.ev,aJ:e.aJ,aQ:T.aQ,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),b=o(be,"width",Ae(d)+"px"),w=e.aI,y=w,h=U0(y);return p(G0,"div",_([o(be,"padding","0px"),b,m]),_([z(i,p(J0,t,_([Jp(qe(d*c)),j0(qe(f*c)),b,m,o(be,"display","block"),o(be,"background-color",h)]),g))]))}),Yp=function(e){return o(qp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL},_([{aQ:e.aQ,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},ru=function(e){return e},Xi=ru({fT:.31271,fX:.32902}),Zp=$(function(e,r){var n=e,a=He(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(jo,r.ce,r.b7),u=l;return{bz:ln(u),ex:n,bG:cn(u),cK:0,bW:on(u),c_:1,fT:-t,fX:-i,c6:-c}}),Qp=function(e){return e},Kp=function(e){return Qp(1.2*o(Rn,2,e))},lt=function(e){return e},e3={$:0},r3=e3,nu=function(e){return e},Ui=function(e){var r=e;return r},n3=function(e){e:for(;;){if(gr(e.e2,Je)&&gr(e.e3,Je))return Te;if(o(Rl,Ee(e.e2),Ee(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:zn(e.ei)};e=r;continue e}else{var n=J(Ui(e.e3)/_r),a=J(Ui(e.e2)/_r),t=He(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(jo,nu(1),e.b7),v=u;return{bz:a*ln(v),ex:!1,bG:a*cn(v),cK:n/a,bW:a*on(v),c_:3,fT:i,fX:c,c6:l}}}},Ii=function(e){return n3({b7:e.b7,e2:e.ce,e3:Je,ei:e.ei})},a3=function(e){var r=e;return r},au=function(e){var r=p(Fl,1667,25e3,a3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ru({fT:n,fX:a})},tu=function(e){return e},t3=au(tu(12e3)),o3=au(tu(5600)),i3=function(e){return{$:2,a:e}},c3=function(e){return i3(e)},l3=$(function(e,r){return{$:2,a:e,b:r}}),ou=function(e){return{$:0,a:e}},Yn=function(e){var r=e;return r},u3=function(e){var r=e;return r.ex},v3=ou(dn.a),$3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(sr,n,z(L,L),r)}),f3=function(e){var r=e;return Ke({dx:r.fT,dy:r.bW,dz:0,dA:0,dB:r.fX,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},s3=K(function(e,r,n,a,t,i,c,l){var u=o($3,u3,_([Yn(e),Yn(r),Yn(n),Yn(a)])),v=u.a,f=u.b;if(v.b){var m=le(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,s=m.b,g=s.a,b=s.b,w=b.a,y=b.b,h=y.a;return o(l3,o(ee,f3,v),{be:o(Re,d,g),bL:o(Re,w,h),bM:o(Re,t,i),bN:o(Re,c,l)})}else return v3}else return ou({be:o(Re,e,r),bL:o(Re,n,a),bM:o(Re,t,i),bN:o(Re,c,l)})}),m3=x(function(e,r,n){return Da(s3,e,r,n,Te,Te,Te,Te,Te)}),d3=function(e){var r=o(Zp,k0(e.fz),{b7:o3,eG:e.fI,ce:lt(8e4)}),n=Ii({b7:t3,ce:lt(2e4),ei:e.ei}),a=Ii({b7:Xi,ce:lt(15e3),ei:zn(e.ei)}),t=p(m3,r,n,a);return Yp({b1:c3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL,aQ:e.aQ,bE:Kp(15),bK:t,b_:r3,b0:Xi})},iu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),p3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),cu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),lu=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),b3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),g3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),h3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Io=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(h3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(iu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(p3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(cu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(g3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(lu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(b3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Oo={$:0},_3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=La(c(u)),m=o(fe,f.dR,e),d=o(ce,f.dO,r),s=o(fe,f.dS,n),g=o(ce,f.dP,a),b=o(fe,f.dT,t),w=o(ce,f.dQ,i),y=c,h=v;e=m,r=d,n=s,a=g,t=b,i=w,c=y,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),w3=x(function(e,r,n){var a=La(e(r));return Da(_3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),ut=$(function(e,r){var n=e,a=r;return I(a,n)<1}),uu=function(e){return o(ut,e.dO,e.dR)&&o(ut,e.dP,e.dS)&&o(ut,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},kn=function(e){var r=e;return r},vu=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=kr(n),c=Mr(n),l=Dr(n),u=kr(a),v=Mr(a),f=Dr(a),m=kr(t),d=Mr(t),s=Dr(t);return uu({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,f,s)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,f,s))})},$u=I$,Le=function(e){return $u(Ha(e))},fu=function(e){var r=e;return r},Xa=function(e){return $u(fu(e))},y3=$(function(e,r){var n=e,a=r,t=o(ze,J(a.fT),o(ze,J(a.fX),J(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=de(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return jl}),x3=y3(nu(1)),su=x(function(e,r,n){var a=o(Ca,r,n),t=o(Ca,e,r);return x3(o(Eo,a,t))}),S3=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Xa(p(su,n,a,t));return A({o:i,bU:Le(n)},{o:i,bU:Le(a)},{o:i,bU:Le(t)})},T3=$(function(e,r){return{$:2,a:e,b:r}}),mu=T3({df:3,$7:0,dV:4}),C3=function(e){if(e.b){var r=e.a,n=e.b,a=mu(o(ee,S3,e)),t=p(w3,vu,r,n);return C(iu,t,e,a,0)}else return Oo},du=function(){var e=Br(1),r=Br(1),n=Br(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),f=p(me,i,v,a),m=p(me,i,v,l),d=o(ie,.5,n),s=p(me,d,t,a),g=p(me,d,v,a),b=p(me,d,t,l),w=p(me,d,v,l);return Io(C3(_([p(Me,c,g,s),p(Me,c,f,g),p(Me,u,b,w),p(Me,u,w,m),p(Me,s,g,w),p(Me,s,w,b),p(Me,c,m,f),p(Me,c,u,m),p(Me,c,s,b),p(Me,c,b,u),p(Me,f,w,g),p(Me,f,m,w)])))}(),Zn={$:0},L3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),P3=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Xa(p(su,u,l,c)),f={o:v,bU:Le(u)},m={o:v,bU:Le(l)},d={o:v,bU:Le(c)};return o(B,f,o(B,m,o(B,d,n)))}),Jo=function(e){var r=e;return r.D},z3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Nt=4294967295>>>32-Tn,Gt=Qu,k3=x(function(e,r,n){e:for(;;){var a=Nt&r>>>e,t=o(Gt,a,n);if(t.$){var v=t.a;return o(Gt,Nt&r,v)}else{var i=t.a,c=e-Tn,l=r,u=i;e=c,r=l,n=u;continue e}}}),M3=function(e){return e>>>5<<5},D3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,M3(n))>-1?re(o(Gt,Nt&e,i)):re(p(k3,a,e,t))}),qo=function(e){var r=e;return r.ah},vt=$(function(e,r){return o(D3,e,qo(r))}),B3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(z3,x(function(c,l,u){return A(c,l,u)}),o(vt,a,e),o(vt,t,e),o(vt,i,e))};return o(wo,r,Jo(e))},A3=x(function(e,r,n){e:for(;;){var a=o(vo,Ve,e),t=a.a,i=a.b;if(I(Tt(t),Ve)<0)return o(Oc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Uc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Yo=function(e){return e.b?p(A3,e,L,0):Hc},F3=x(function(e,r,n){return e(r(n))}),V3=$(function(e,r){return!o(tl,o(F3,hs,e),r)}),E3=$(function(e,r){return p(sr,$(function(n,a){return e(n)?o(B,n,a):a}),L,r)}),R3=function(e){var r=e.a;return r},pu=$(function(e,r){var n=R3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(V3,a,r)?{D:r,ah:e}:{D:o(E3,a,r),ah:e}}),j3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Xn=j3({df:1,$7:3,dV:4}),la=$(function(e,r){var n=Zr(r),a=Zr(e);return z(A(a.fT,a.fX,a.c6),A(n.fT,n.fX,n.c6))}),Oi=p(Wn,0,0,0),$t=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(bo,o(la,e,r),t);if(v.$){var m={o:Oi,bU:Le(r)},d={o:Oi,bU:Le(e)},s=u+1,g=u;return A(o(B,A(n,g,s),o(B,A(n,s,a),c)),o(B,m,o(B,d,l)),u+2)}else{var f=v.a;return A(o(B,A(n,f,a),c),l,u)}}),N3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),d=e(c),s=a+2,g=a+1,b=a,w=e,y=r,h=v,T=a+3,k=_e($t,f,d,s,b,r,_e($t,m,f,g,s,r,_e($t,d,m,b,g,r,t)));e=w,r=y,n=h,a=T,t=k;continue e}else{var G=t,j=G.a,R=G.b;return z(j,Fe(R))}}),G3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),d=e(c),s=n+2,g=n+1,b=n,w=p(bn,o(la,d,f),s,p(bn,o(la,f,m),g,p(bn,o(la,m,d),b,t))),y=o(B,A(b,g,s),a),h=e,T=v,k=n+3,G=y,j=w;e=h,r=T,n=k,a=G,t=j;continue e}else return A(a,t,n)}),Tr=x(function(e,r,n){var a=B3(n),t=p(sr,P3(r),L,a),i=S(G3,r,a,0,L,Sl),c=i.a,l=i.b,u=i.c,v=S(N3,r,l,a,0,A(c,L,u)),f=v.a,m=v.b,d=xl(m)?t:le(t,m);return p(L3,e,o(pu,Yo(d),f),o(Xn,d,f))}),Wt=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(hr,0,Ar(e)-1)),ah:Yo(We(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},bu=function(e){switch(e.$){case 0:return Zn;case 1:var a=e.a,r=e.b,n=o(ee,kn,r);return p(Tr,a,zr,Wt(n));case 2:var a=e.a,r=e.b,n=o(ee,kn,r);return p(Tr,a,zr,Wt(n));case 3:var a=e.a,t=e.b;return p(Tr,a,zr,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 8:return Zn;case 9:return Zn;default:return Zn}},Ji=bu(du),gu={$:0},P=gu,pe=$(function(e,r){return{$:1,a:e,b:r}}),W3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},H3=1029,X3=function(e){return{$:5,a:e}},hu=function(e){var r=e;return X3(r)},U3=hu(H3),I3=1028,O3=hu(I3),Pe=x(function(e,r,n){return r===1?e?o(B,U3,n):o(B,O3,n):n}),_u={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ft=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,f,m){return S(ne,p(Pe,l,a,m),_u,W3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Zo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},wu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,f,m){return S(ne,p(Pe,l,a,m),wu,Zo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),yu=$(function(e,r){return{$:3,a:e,b:r}}),J3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},xu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},q3=E(function(e,r,n,a){return o(yu,n,K(function(t,i,c,l,u,v,f,m){return S(ne,m,xu,J3,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Qo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Un=function(e){var r=e;return r},Ua=O$,or=ge(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,v,f,m,d){return S(ne,p(Pe,u,t,d),wu,Qo,a,{aO:o(Ua,Un(r),e),b:l,c,d:f,e:i,f:v})}))}),Y3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bT",sceneProperties:"e"}},Z3=ge(function(e,r,n,a,t){return o(yu,a,K(function(i,c,l,u,v,f,m,d){return S(ne,d,xu,Y3,t,{aO:o(Ua,Un(r),e),b:l,c,bT:n,d:f,e:i,f:v})}))}),Su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Tu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qn=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,f,m){var d=f.a,s=f.b;return S(ne,p(Pe,l,a,m),Tu,Su,n,{P:s,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Lu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Q3=Xe(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,v,f,m,d,s){var g=d.a,b=d.b;return S(ne,p(Pe,v,i,s),Lu,Cu,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aX",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},K3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return o(pe,u,K(function(m,d,s,g,b,w,y,h){var T=y.a,k=y.b;return S(ne,p(Pe,g,f,h),Lu,Pu,v,{b5:e,b8:r,b9:i,ca:a,P:k,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:s,c:d,aX:c,d:w,cS:n,e:m,a0:l,f:b})}))}}}}}}}}}}},zu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Kn=Xe(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,v,f,m,d,s){var g=d.a,b=d.b;return S(ne,p(Pe,v,i,s),Tu,zu,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f})}))}),eb=function(e){return{$:0,a:e}},qi=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),rb=function(e){return C(tn,on(e),cn(e),ln(e),1)},Ko=C(tn,0,0,0,0),ua=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ko)}else{var n=r.a;return z(e,rb(n))}}),ku=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(qi,z(t,Ko),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(qi,o(ua,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,eb(a)}}),nb=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ea=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ab=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),tb=function(e){return o(Be,e,1)},Ht=o(Be,0,0),Xr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ht)}else{var n=r.a;return z(e,tb(n))}}),Mu=E(function(e,r,n,a){var t=C(ab,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(ea,z(u,Ko),o(Xr,u,r),o(Xr,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(ea,o(ua,u,e),z(u,Ht),o(Xr,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(ea,o(ua,u,e),o(Xr,u,r),z(u,Ht),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(ea,o(ua,u,e),o(Xr,u,r),o(Xr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(nb,i,c,l)}}),ob={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},st=ge(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,v,f,m,d){return S(ne,p(Pe,u,t,d),_u,ob,a,{b2:Un(r),bC:e,b:l,c,d:f,e:i,f:v})}))}),Du={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ib=E(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,v,f,m){var d=f.a,s=f.b;return S(ne,p(Pe,l,a,m),Du,Cu,n,{P:s,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),cb=It(function(e,r,n,a,t,i,c,l,u){return o(pe,c,K(function(v,f,m,d,s,g,b,w){var y=b.a,h=b.b;return S(ne,p(Pe,d,u,w),Du,Pu,l,{b5:e,b8:r,b9:i,ca:a,P:h,be:y.be,bL:y.bL,bM:y.bM,bN:y.bN,cv:t,b:m,c:f,aX:e,d:g,cS:n,e:v,a0:0,f:s})}))}),Mn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),lb=function(e){var r=e;return p(Mn,r.dR,r.dO,.5)},ub=function(e){var r=e;return p(Mn,r.dS,r.dP,.5)},vb=function(e){var r=e;return p(Mn,r.dT,r.dQ,.5)},$b=function(e){return p(me,lb(e),ub(e),vb(e))},H=function(e){var r=Jl(e),n=r.a,a=r.b,t=r.c;return{ey:Ha($b(e)),eS:n/2,eT:a/2,eU:t/2}},ei=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(q3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(st,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(st,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(st,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Z3,u,v,i,H(t),c)}}case 2:e.a;var f=e.b,j=e.c,m=o(ku,f,j);if(m.$){var g=m.a,b=g.a;g.b;var w=m.b,y=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,s=r.d;return C(ib,b,H(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return _e(Q3,b,y,h,H(t),c,s);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,s=r.d;return C(Qn,d,H(t),c,s);case 3:return P;case 4:var t=r.a,c=r.c,s=r.d;return C(Qn,d,H(t),c,s);case 5:return P;case 6:var t=r.a,c=r.c,s=r.d;return C(Qn,d,H(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return C(Qn,d,H(t),c,s);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,k=e.c,G=e.d,j=e.e,R=C(Mu,T,k,G,j);if(R.$){var Y=R.a,Q=Y.a,oe=Y.b,ve=R.b,te=ve.a,se=ve.b,ke=R.c,Se=ke.a,mr=ke.b,dr=R.d,y=dr.a,h=dr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Ou(cb,Q,oe,te,se,Se,mr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return K3(Q)(oe)(te)(se)(Se)(mr)(y)(h)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return _e(Kn,N,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return _e(Kn,N,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return _e(Kn,N,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(Kn,N,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),mt=function(e){var r=e;return r.fT},dt=function(e){var r=e;return r.fX},pt=function(e){var r=e;return r.c6},fb=function(e){var r=e,n=pt(r.c7),a=dt(r.c7),t=mt(r.c7),i=pt(r.c5),c=dt(r.c5),l=mt(r.c5),u=pt(r.c4),v=dt(r.c4),f=mt(r.c4);return f*c*n+v*i*t+u*l*a-u*c*t-v*l*n-f*i*a>0},sb=function(e){var r=Ha(an(e)),n=He(Gr(e)),a=He(Nr(e)),t=He(jr(e));return{dp:fb(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bY:1}},Ur=$(function(e,r){return{$:5,a:e,b:r}}),Bu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Nl,a,e);return o(Ur,i,t);case 1:return o(Ur,e,n);case 3:return o(Ur,e,n);case 2:return o(Ur,e,n);default:return o(Ur,e,n)}}),Au=$(function(e,r){return o(Bu,sb(e),r)}),Ia=function(e){return{$:2,a:e}},mb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),db=Y$,pb=q$,Yi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,d=e.c,s=pb(a),g=s.fT,b=s.fX,w=s.c6,y=s.em,h=db({em:y,fT:g*f,fX:b*m,c6:w*d});return Da(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Xt=$(function(e,r){switch(r.$){case 0:return gu;case 5:var n=r.a,a=r.b;return o(Ur,n,o(Xt,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(mb,e,t),o(Yi,e,i));case 3:return r;case 2:var i=r.a;return Ia(o(Yi,e,i));default:var c=r.a;return Zl(o(ee,Xt(e),c))}}),ri=$(function(e,r){var n=r;return o(Xt,e,n)}),ni={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Fu=7683,Vu=7682,bb=p(Wo,{cp:0,cO:0,c3:15},{a9:xe,bm:Kr,bu:xe,bv:Fu},{a9:xe,bm:Kr,bu:xe,bv:Vu}),gb=p(Wo,{cp:0,cO:0,c3:15},{a9:xe,bm:Kr,bu:xe,bv:Vu},{a9:xe,bm:Kr,bu:xe,bv:Fu}),ai=$(function(e,r){return e?o(B,gb,r):o(B,bb,r)}),hb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},_b=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ne,o(ai,i,v),hb,ni,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},Pa=function(e){var r=_b(e);if(r.$)return P;var n=r.a;return Ia(n)},wb=E(function(e,r,n,a){var t=o(ei,n,du),i=function(){var f=z(e,r);return f.a?f.b?Hn(_([t,Pa(Ji)])):t:f.b?Pa(Ji):P}(),c=Po(a),l=c.a,u=c.b,v=c.c;return o(Au,Lo(a),o(ri,A(l,u,v),i))}),yb=$(function(e,r){return C(wb,!0,!0,e,r)}),Eu=$(function(e,r){return{$:0,a:e,b:r}}),xb=function(e){var r=_o(e),n=r.cN,a=r.cd,t=r.b6;return p(Wn,n,a,t)},Sb=function(e){return o(Eu,0,Et(xb(e)))},Tb=function(e){var r=e;return r.k},xn=function(e){var r=e;return wr(r)},Cb=$(function(e,r){var n=r;return n/e}),Zi=function(e){var r=e;return{fT:wr(r),fX:Vr(r)}},Lb=$(function(e,r){var n=e.bU,a=e.o;return o(B,{o:Xa(a),bU:Le(n)},r)}),Pb=Ma(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=ln(l.bU),f=cn(l.bU),m=on(l.bU),d=o(ca,e,m),s=o(ze,r,m),g=o(ca,n,f),b=o(ze,a,f),w=o(ca,t,v),y=o(ze,i,v),h=u;e=d,r=s,n=g,a=b,t=w,i=y,c=h;continue e}else return uu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Ru=$(function(e,r){var n=ln(e.bU),a=cn(e.bU),t=on(e.bU);return Ot(Pb,t,t,a,a,n,n,r)}),zb=function(e){var r=p(Fc,Lb,L,qo(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,Jo(e)),i=o(Ru,n,a);return C(cu,i,e,t,0)}else return Oo},Qi=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),za=function(e){var r=e;return Vr(r)},Ut=function(e){return Fr(2*_r*e)},kb=zr,Ki=kb({cB:Wr,c4:Do,c5:Ao}),ju=function(){var e=72,r=o(Cb,e,Ut(1)),n=Br(1),a=Jr(Fo),t=Jr(Dl),i=Br(1),c=o(ie,.5,i),l=p(me,Je,Je,c),u=o(ie,-.5,i),v=p(me,Je,Je,u),f=function(s){var g=o(ie,s,r),b=Jr(o(Qi,Ki,Zi(g))),w=o(ie,xn(g),n),y=o(ie,za(g),n),h=p(me,w,y,c),T=p(me,w,y,u),k=o(wa,e,s+1),G=o(ie,k,r),j=Jr(o(Qi,Ki,Zi(G))),R=o(ie,xn(G),n),N=o(ie,za(G),n),W=p(me,R,N,u),F=p(me,R,N,c);return _([A({o:t,bU:v},{o:t,bU:W},{o:t,bU:T}),A({o:b,bU:T},{o:j,bU:W},{o:j,bU:F}),A({o:b,bU:T},{o:j,bU:F},{o:b,bU:h}),A({o:a,bU:l},{o:a,bU:h},{o:a,bU:F})])},m=o(ee,f,o(hr,0,e-1)),d=Wt(We(m));return Io(zb(d))}(),ec=bu(ju),Mb=function(e){var r=e;return r.eG},Db=function(e){var r=e;return r.cB},Bb=function(e){var r=Mb(e),n=Ro(r),a=n.a,t=n.b;return $r({cB:Db(e),c4:a,c5:t,c7:r})},Ab=function(e){var r=e;return r.e9},Fb=function(e){var r=e;return r.fr},Vb=E(function(e,r,n,a){var t=Bb(Tb(a)),i=o(ei,n,ju),c=function(){var m=z(e,r);return m.a?m.b?Hn(_([i,Pa(ec)])):i:m.b?Pa(ec):P}(),l=Fb(a),u=l,v=Ab(a),f=v;return o(Au,t,o(ri,A(u,u,f),c))}),Eb=$(function(e,r){return C(Vb,!0,!0,e,r)}),rc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},nc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},pn=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return Ke({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},ra=mu(_([A({cZ:0},{cZ:1},{cZ:2})])),Rb=$(function(e,r){var n=vu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(pe,a,K(function(h,T,k,G,j,R,N,W){return S(ne,p(Pe,G,0,W),rc,Zo,ra,{aw:t,b:k,c:T,d:R,e:h,br:pn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(pe,a,K(function(h,T,k,G,j,R,N,W){return S(ne,p(Pe,G,0,W),rc,Qo,ra,{aO:o(Ua,Un(c),i),b:k,c:T,d:R,e:h,br:pn(r),f:j})}));case 2:e.a;var l=e.b,s=e.c,u=o(ku,l,s);if(u.$)return P;var v=u.a;return o(pe,a,K(function(h,T,k,G,j,R,N,W){var F=N.a,Y=N.b;return S(ne,p(Pe,G,0,W),nc,Su,ra,{P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:k,c:T,d:R,e:h,br:pn(r),f:j})}));default:e.a;var f=e.b,m=e.c,d=e.d,s=e.e,g=C(Mu,f,m,d,s);if(g.$)return P;var b=g.a,w=g.b,y=g.c;return o(pe,a,K(function(h,T,k,G,j,R,N,W){var F=N.a,Y=N.b;return S(ne,p(Pe,G,0,W),nc,zu,ra,{b4:b,P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:y,b:k,c:T,d:R,cR:w,e:h,br:pn(r),f:j})}))}}),jb=function(){var e=_([{a$:o(Be,0,1)},{a$:o(Be,1,1)},{a$:o(Be,2,1)},{a$:o(Be,0,-1)},{a$:o(Be,1,-1)},{a$:o(Be,2,-1)}]),r=_([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Xn,e,r)}(),Nb={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},ac=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ai,t,u),Nb,ni,jb,{b:a,c:n,d:c,e:r,bZ:l,br:pn(e),f:i})}))},Gb=E(function(e,r,n,a){var t=o(Rb,n,a),i=z(e,r);return i.a?i.b?Hn(_([t,ac(a)])):t:i.b?ac(a):P}),Wb=$(function(e,r){return C(Gb,!0,!0,e,r)}),Hb=$(function(e,r){var n=Dr(r),a=Dr(e),t=Mr(r),i=Mr(e),c=kr(r),l=kr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Xb=function(e){var r=zo(e),n=r.a,a=r.b;return o(Hb,n,a)},tc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ub=$(function(e,r){return{$:1,a:e,b:r}}),Ib=Ub({df:2,$7:0,dV:1}),oc=Ib(_([z({dw:0},{dw:1})])),Ob=$(function(e,r){var n=Xb(r),a=H(n),t=zo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(pe,a,K(function(v,f,m,d,s,g,b,w){return S(ne,w,tc,Zo,oc,{aw:l,du:Le(c),dv:Le(i),b:m,c:f,d:g,e:v,f:s})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(pe,a,K(function(f,m,d,s,g,b,w,y){return S(ne,y,tc,Qo,oc,{aO:o(Ua,Un(u),l),du:Le(c),dv:Le(i),b:d,c:m,d:b,e:f,f:g})}));case 2:return P;default:return P}}),Jb=$(function(e,r){return o(Ob,e,r)}),ic=$(function(e,r){var n=e,a=r;return n/a}),qb=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,t=m;continue e}}),cc=$(function(e,r){return e<1?L:S(qb,0,e,e,r,L)}),Yb=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Xa(a),bU:Le(n),L:o(Be,c,l)},r)}),Zb=function(e){var r=p(Fc,Yb,L,qo(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,Jo(e)),i=o(Ru,n,a);return C(lu,i,e,t,0)}else return Oo},Nu=$(function(e,r){var n=e,a=r,t=wr(a);return{fT:t*wr(n),fX:t*Vr(n),c6:Vr(a)}}),Qb=function(){var e=Br(1),r=72,n=o(hr,0,r-1),a=o(cc,r,o(Mn,Je,Ut(1))),t=lo(r/2),i=o(hr,0,t-1),c=o(cc,t,o(Mn,mn(90),mn(-90))),l=Yo(We(o(ee,function(f){return o(ee,function(m){return{o:Jr(o(Nu,f,m)),bU:p(me,o(ie,xn(m)*xn(f),e),o(ie,xn(m)*za(f),e),o(ie,za(m),e)),L:z(o(ic,f,Ut(1)),o(ic,o(wn,mn(90),m),mn(180)))}},c)},a))),u=$(function(f,m){return f*(t+1)+m}),v=We(o(ee,function(f){return We(o(ee,function(m){var d=o(u,f+1,m),s=o(u,f,m),g=o(u,f+1,m+1),b=o(u,f,m+1);return _([A(b,g,d),A(b,d,s)])},i))},n));return Io(Zb(o(pu,l,v)))}(),ka=72,na=2*ka,Kb=$(function(e,r){e:for(;;){var n=na+1,a=o(wa,na,2*e+3),t=o(wa,na,2*e+2),i=2*e+1,c=2*e,l=na,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),eg=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),rg=$(function(e,r){e:for(;;){var n=p(eg,0,2*_r,e/ka),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ng=function(){var e=o(rg,ka-1,_([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(Kb,ka-1,L);return o(Xn,e,r)}(),ag={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},lc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ai,!0,u),ag,ni,ng,{aw:p(Wn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},tg=function(e){var r=fu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bY:1}},og=$(function(e,r){return o(Bu,tg(e),r)}),ig=E(function(e,r,n,a){var t=o(ei,n,Qb),i=function(){var u=z(e,r);return u.a?u.b?Hn(_([t,lc()])):t:u.b?lc():P}(),c=Mo(a),l=c;return o(og,o(Ca,Wr,ko(a)),o(ri,A(l,l,l),i))}),cg=$(function(e,r){return C(ig,!0,!0,e,r)}),lg=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ug=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),vg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Eu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(lg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Al,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ug,n,a,t,i,c)}},$g=vg,Gu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(yb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Wb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(cg,$g(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Eb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Jb,Sb(c),l)]);default:var u=e.a;return o(ja,Gu,u)}},fg=function(e){return o(ja,Gu,e)},sg=$(function(e,r){return d3({aI:P0(e.es),ev:e.ev,aJ:z0(.5),cb:e.cb,aL:z(Ai(qe(e.cT.fR)),Ai(qe(e.cT.eW))),aQ:fg(r),fz:!0,fI:o(Nu,Fr(e.fH),Fr(e.fJ)),ei:Vo})}),uc=C(En,255/255,255/255,255/255,1),mg=$(function(e,r){return o(sg,{es:uc,ev:L0({dj:{fT:o(at,"camera x",e),fX:o(at,"camera y",e),c6:o(at,"camera z",e)},aS:{fT:0,fX:0,c6:0},ei:{fT:0,fX:1,c6:0}}),cb:e.cb,cT:e.cT,fH:-Ne(135),fJ:-Ne(45)},_([o(Pn,-4,o(El,Vl(uc),A(40,40,1))),o(Pn,-.5,u0(e))]))}),dg=C(_d,mg,Ld,Cd,wd);const pg={Main:{init:dg(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({aK:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(f){return o(D,function(m){return De({eo:m,eB:f,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ga(Ln)))},o(M,"left",Z))},o(M,"pressedKeys",ga(Ln)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},bg=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),a=s=>["ShiftLeft","ShiftRight"].includes(s.code),t=s=>s.code=="ArrowLeft",i=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,v=s=>s.button==2;function f(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function m(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(V.keyboard.downs.push(s.code),V.keyboard.pressedKeys.push(s.code),r(s)&&(V.keyboard.control=!0),n(s)&&(V.keyboard.alt=!0),a(s)&&(V.keyboard.shift=!0),t(s)&&(V.keyboard.left=!0),i(s)&&(V.keyboard.right=!0),c(s)&&(V.keyboard.up=!0),l(s)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",s=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=s.code),r(s)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(s)&&(V.keyboard.alt=!1),a(s)&&(V.keyboard.shift=!1),t(s)&&(V.keyboard.left=!1),i(s)&&(V.keyboard.right=!1),c(s)&&(V.keyboard.up=!1),l(s)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{V.pointer.x=-.5*V.screen.width+s.pageX,V.pointer.y=.5*V.screen.height-s.pageY,u(s)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(s)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+s.pageX,V.pointer.y=.5*V.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(s)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(s)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{V.wheel.deltaX=s.deltaX,V.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{f(V)}),window.addEventListener("focus",s=>{f(V)}),window.addEventListener("visibilitychange",s=>{f(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(s){const g=s/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},gg=()=>{bt("pointerdown"),bt("wheel"),bt("keydown")},bt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},hg=pg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});gg();bg(hg);
