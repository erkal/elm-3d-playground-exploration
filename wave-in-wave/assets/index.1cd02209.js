const Ru=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ru();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ge(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ka(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Yt(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Yu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var ju=[];function Nu(e){return e.length}var Wu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Hu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Gu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Iu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ju()),r});function Ju(e){return"<internals>"}function on(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=ft(e,r,0,a);t&&(n=a.pop());t=ft(n.a,n.b,0,a));return t}function ft(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&on(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=vi(e),r=vi(r));for(var t in e)if(!ft(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var qu=$(function(e,r){var n=J(e,r);return n<0?zc:n?Bf:Pc}),Mn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var Ou=$(tr);function h(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Zu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ge(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Ta(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Pc?0:t===zc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Ku=$(Math.pow);$(function(e,r){return r%e});var Xu=$(function(e,r){var n=r%e;return e===0?on(11):n>0&&e<0||n<0&&e>0?n+e:n}),Qu=Math.PI,ev=Math.cos,rv=Math.sin,nv=Math.tan,av=Math.atan;$(Math.atan2);function tv(e){return e}function ov(e){return e===1/0||e===-1/0}var iv=Math.ceil,cv=Math.floor,lv=Math.round,uv=Math.sqrt,Zo=Math.log,vv=isNaN;function $v(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var fv=$(function(e,r){return e+r});function sv(e){var r=e.charCodeAt(0);return isNaN(r)?O:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function dv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function mv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var pv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),bv=$(function(e,r){return r.split(e)}),gv=$(function(e,r){return r.join(e)}),hv=x(function(e,r,n){return n.slice(e,r)});function _v(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var wv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),yv=$(function(e,r){return r.indexOf(e)>-1}),xv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Sv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function rc(e){return e+""}function Cv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return O;r=10*r+i-48}return t==a?O:re(n==45?-r:r)}function Lv(e){if(e.length===0||/[\sxbo]/.test(e))return O;var r=+e;return r===r?re(r):O}function Pv(e){return Ta(e).join("")}function zv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function kv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Mv(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var Tv=Nt(function(e){return typeof e=="boolean"?ue(e):Xe("a BOOL",e)}),Dv=Nt(function(e){return typeof e=="number"?ue(e):Xe("a FLOAT",e)}),Av=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Xe("a STRING",e)});function Bv(e){return{$:3,b:e}}var Fv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Vv=$(function(e,r){return{$:10,b:r,h:e}}),Uv=$(function(e,r){return xr(e,[r])}),Ev=x(function(e,r,n){return xr(e,[r,n])});U(function(e,r,n,a){return xr(e,[r,n,a])});ge(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Ge(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});ka(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});Yt(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return we(o(eo,"This is not valid JSON! "+a.message,r))}});var nc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Xe("null",r);case 3:return Nn(r)?Ko(e.b,r,h):Xe("a LIST",r);case 4:return Nn(r)?Ko(e.b,r,Rv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return qe(v)?v:we(o($i,n,v.a));case 7:var a=e.e;if(!Nn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return qe(v)?v:we(o(kc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!qe(v))return we(o($i,i,v.a));t=tr(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!qe(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return qe(v)?je(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(qe(v))return v;s=tr(v.a,s)}return we(Ff(Fe(s)));case 1:return we(o(eo,e.a,r));case 0:return ue(e.a)}}function Ko(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!qe(c))return we(o(kc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Rv(e){return o(Xf,e.length,function(r){return e[r]})}function Xe(e,r){return we(o(eo,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&Xo(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return Xo(e.g,r.g)}}function Xo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var Yv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ac(e){return e}x(function(e,r,n){return n[e]=r,n});function Er(e){return{$:0,a:e}}function jv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var st=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Nv(e){return{$:5,b:e}}var Wv=0;function Wt(e){var r={$:0,e:Wv++,f:e,g:null,h:[]};return Ht(r),r}function tc(e){return dr(function(r){r(Er(Wt(e)))})}function oc(e,r){e.h.push(r),Ht(e)}var Hv=$(function(e,r){return dr(function(n){oc(e,r),n(Er(Mn))})}),Ga=!1,Qo=[];function Ht(e){if(Qo.push(e),!Ga){for(Ga=!0;e=Qo.shift();)Gv(e);Ga=!1}}function Gv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ht(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Gt(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function Gt(e,r,n,a,t,i){var c=o(nc,e,r?r.flags:void 0);qe(c)||on(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Iv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ri(l,b.b,t(v))}return ri(l,u.b,t(v)),d?{ports:d}:{}}var nr={};function Iv(e,r){var n;for(var a in nr){var t=nr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=qv(t,r)}return n}function Jv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(st,l,Nv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Wt(o(st,l,e.b))}var Ov=$(function(e,r){return dr(function(n){e.g(r),n(Er(Mn))})});$(function(e,r){return o(Hv,e.h,{$:0,a:r})});function ic(e){return function(r){return{$:1,k:e,l:r}}}function Zv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ei=[],Ia=!1;function ri(e,r,n){if(ei.push({p:e,q:r,r:n}),!Ia){Ia=!0;for(var a;a=ei.shift();)Kv(a.p,a.q,a.r);Ia=!1}}function Kv(e,r,n){var a={};la(!0,r,a,null),la(!1,n,a,null);for(var t in e)oc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function la(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Xv(e,t,a,r.l);n[t]=Qv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)la(e,c.a,n,a);return;case 3:la(e,r.o,n,{s:r.n,t:a});return}}function Xv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?nr[r].e:nr[r].f;return o(i,t,a)}function Qv(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function e$(e){nr[e]&&on(3)}$(function(e,r){return r});function r$(e,r){return e$(e),nr[e]={f:n$,u:r,a:a$},ic(e)}var n$=$(function(e,r){return function(n){return e(r(n))}});function a$(e,r){var n=P,a=nr[e].u,t=Er(null);nr[e].b=t,nr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(nc,a,c);qe(l)||on(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ua,ur=typeof document!="undefined"?document:{};function It(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var cc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Jt(n),e:t,f:e,b:i}})}),Rr=cc(void 0),t$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Jt(n),e:t,f:e,b:i}})}),o$=t$(void 0);function i$(e,r,n,a){return{$:3,d:Jt(e),g:r,h:n,i:a}}var c$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});x(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ge(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ka(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Yt(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var lc=$(function(e,r){return{$:"a0",n:e,o:r}}),l$=$(function(e,r){return{$:"a1",n:e,o:r}}),uc=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),u$=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function v$(e){return e=="script"?"p":e}function $$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(lc,r.n,f$(e,r.o)):r});function f$(e,r){var n=oo(r);return{$:r.$,a:n?p(Qf,n<3?s$:d$,De(e),r.a):o(sa,e,r.a)}}var s$=$(function(e,r){return z(e(r.a),r.b)}),d$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Jt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ni(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ni(c,t,i):c[t]=i}return r}function ni(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return mt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ua&&e.c=="a"&&c.addEventListener("click",ua(c)),mt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,hr(n===1?l[u]:l[u].b,r));return c}function mt(e,r,n){for(var a in n){var t=n[a];a==="a1"?m$(e,t):a==="a0"?g$(e,r,t):a==="a3"?p$(e,t):a==="a4"?b$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function m$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function p$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function b$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function g$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=h$(r,i),e.addEventListener(t,c,qt&&{passive:oo(i)<2}),a[t]=c}}var qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){qt=!0}}))}catch{}function h$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!qe(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function _$(e,r){return e.$==r.$&&Or(e.a,r.a)}function vc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=z$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!w$(d,m):d!==m)&&he(n,2,a,m),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ai(e,r,n,a,y$);return;case 2:ai(e,r,n,a,x$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Ot(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function w$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ai(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Ot(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&_$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function y$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Oe(s,i[v],n,++a),a+=s.b||0}}function x$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,_=g.b,C=b.b,M=void 0,j=void 0;if(w===y){f++,Oe(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var Y=R.a,N=R.b;j=y===Y}if(E){var F=E.a,Z=E.b;M=w===F}if(M&&j){f++,Oe(_,Z,t,f),sn(i,t,w,C,m,c),f+=_.b||0,f++,dn(i,t,w,N,f),f+=N.b||0,d+=2,m+=2;continue}if(M){f++,sn(i,t,y,C,m,c),Oe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(j){f++,dn(i,t,w,_,f),f+=_.b||0,f++,Oe(N,C,t,f),f+=N.b||0,d+=2,m+=1;continue}if(R&&Y===F){f++,dn(i,t,w,_,f),sn(i,t,y,C,m,c),f+=_.b||0,f++,Oe(N,Z,t,f),f+=N.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;dn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];sn(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&he(n,8,a,{w:t,x:c,y:X})}var $c="_elmW6BL";function sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}sn(e,r,n+$c,a,t,i)}function dn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}dn(e,r,n+$c,a,t)}function fc(e,r,n,a){mn(e,r,n,0,0,r.b,a)}function mn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)fc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&mn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&mn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return mn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=mn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function sc(e,r,n,a){return n.length===0?e:(fc(e,r,n,a),va(e,n))}function va(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=S$(t,a);t===e&&(e=i)}return e}function S$(e,r){switch(r.$){case 0:return C$(e,r.s,r.u);case 4:return mt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return va(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=va(e,i.w),e;case 8:return L$(e,r);case 5:return r.s(e);default:on(10)}}function C$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function L$(e,r){var n=r.s,a=P$(n.y,r);e=va(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function P$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Zt(v[a]),u);return p(Rr,l,r,u)}function z$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var k$=U(function(e,r,n,a){return Gt(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=Zt(l);return dc(i,function(v){var s=c(v),d=vc(u,s);l=sc(l,u,d,t),u=s})})});U(function(e,r,n,a){return Gt(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=ur.title,v=ur.body,s=Zt(v);return dc(i,function(d){ua=c;var m=l(d),f=Rr("body")(P)(m.er),g=vc(s,f);v=sc(v,s,g,t),s=f,ua=0,u!==m.fJ&&(ur.title=u=m.fJ)})})});var $a=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function dc(e,r){r(e);var n=0;function a(){n=n===1?0:($a(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&$a(a),n=2)}}$(function(e,r){return o(lo,io,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(lo,io,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(lo,io,dr(function(){history.replaceState({},"",r),e()}))});var M$={addEventListener:function(){},removeEventListener:function(){}},T$=typeof window!="undefined"?window:M$;x(function(e,r,n){return tc(dr(function(a){function t(i){Wt(n(i))}return e.addEventListener(r,t,qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return qe(n)?re(n.a):O});function mc(e,r){return dr(function(n){$a(function(){var a=document.getElementById(e);n(a?Er(r(a)):jv(rs(e)))})})}function D$(e){return dr(function(r){$a(function(){r(Er(e()))})})}$(function(e,r){return mc(r,function(n){return n[e](),Mn})});$(function(e,r){return D$(function(){return T$.scroll(e,r),Mn})});x(function(e,r,n){return mc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var A$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return re(new RegExp(r,n))}catch{return O}});$(function(e,r){return r.match(e)!==null});var B$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):O}a.push(L(ul,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):O}return n(L(ul,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ti=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function Kt(e){for(var r=0;e.b;e=e.b)r++;return r}var F$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},V$=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),U$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),E$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),R$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Y$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),j$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),N$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),W$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),H$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),G$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},I$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},J$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},q$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},bc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},O$=function(e){e.gl.disable(e.gl.CULL_FACE)},Z$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},K$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},X$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},oi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Q$=[I$,J$,q$,pc,bc,O$,Z$,K$,X$];function ii(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function ef(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function rf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[y]:w[y][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][y]:w[C][y][_]})}var u=gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Kt(n.b)*s);Sn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function nf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=af(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*Kt(r.b),indexBuffer:null,buffers:{}}}function af(e,r){var n=new Uint32Array(Kt(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ci(e,r){return e+"#"+r}var hc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),pc(n),bc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ci(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ti++,v||(v=ii(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ti++,s||(s=ii(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=ef(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=tf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ci(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),of(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=nf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=rf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,y*C)}for(n.toggle=!n.toggle,Sn(u0(n),i.a),u=0;u<oi.length;u++){var M=n[oi[u]];M.toggle!==n.toggle&&M.enabled&&(Q$[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Sn(t,e.g),r});function tf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function of(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var cf=x(function(e,r,n){return i$(r,{g:n,f:{},h:e},df,mf)}),lf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),uf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),vf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),$f=$(function(e,r){e.contextAttributes.antialias=!0}),ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),sf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function df(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(l0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),F$(function(){return o(hc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function mf(e,r){return r.f=e.f,hc(r)}var pf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/bf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function bf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Xt=new Float64Array(3),li=new Float64Array(3),ui=new Float64Array(3),gf=x(function(e,r,n){return new Float64Array([e,r,n])}),hf=function(e){return e[0]},_f=function(e){return e[1]},wf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var yf=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(_c);function wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),fa(_c(e,r,n),n)}$(wc);function yc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function fa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/yc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var xf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(pn);function pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(pt);$(function(e,r){var n,a=Xt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(pn(r,a)+e[14])/n,t});var Sf=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Cf=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},Lf=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Pf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Pf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var zf=new Float64Array(16),kf=new Float64Array(16),Mf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Tf=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ge(xc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return xc(c,l,i,t,n,a)});function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ge(Sc);U(function(e,r,n,a){return Sc(e,r,n,a,-1,1)});function Cc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],_=e[15],C=r[0],M=r[1],j=r[2],R=r[3],E=r[4],Y=r[5],N=r[6],F=r[7],Z=r[8],X=r[9],oe=r[10],ve=r[11],te=r[12],de=r[13],Me=r[14],Ce=r[15];return n[0]=a*C+l*M+d*j+b*R,n[1]=t*C+u*M+m*j+w*R,n[2]=i*C+v*M+f*j+y*R,n[3]=c*C+s*M+g*j+_*R,n[4]=a*E+l*Y+d*N+b*F,n[5]=t*E+u*Y+m*N+w*F,n[6]=i*E+v*Y+f*N+y*F,n[7]=c*E+s*Y+g*N+_*F,n[8]=a*Z+l*X+d*oe+b*ve,n[9]=t*Z+u*X+m*oe+w*ve,n[10]=i*Z+v*X+f*oe+y*ve,n[11]=c*Z+s*X+g*oe+_*ve,n[12]=a*te+l*de+d*Me+b*Ce,n[13]=t*te+u*de+m*Me+w*Ce,n[14]=i*te+v*de+f*Me+y*Ce,n[15]=c*te+s*de+g*Me+_*Ce,n}$(Cc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],_=r[4],C=r[5],M=r[6],j=r[8],R=r[9],E=r[10],Y=r[12],N=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*C+v*M,n[5]=t*_+l*C+s*M,n[6]=i*_+u*C+d*M,n[7]=0,n[8]=a*j+c*R+v*E,n[9]=t*j+l*R+s*E,n[10]=i*j+u*R+d*E,n[11]=0,n[12]=a*Y+c*N+v*F+m,n[13]=t*Y+l*N+s*F+f,n[14]=i*Y+u*N+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=fa(r,Xt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/yc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=g+f,C=b-m,M=g-f,j=c*c*v+u,R=w+d,E=b+m,Y=w-d,N=l*l*v+u,F=n[0],Z=n[1],X=n[2],oe=n[3],ve=n[4],te=n[5],de=n[6],Me=n[7],Ce=n[8],pr=n[9],br=n[10],Ha=n[11],Fu=n[12],Vu=n[13],Uu=n[14],Eu=n[15];return a[0]=F*y+ve*_+Ce*C,a[1]=Z*y+te*_+pr*C,a[2]=X*y+de*_+br*C,a[3]=oe*y+Me*_+Ha*C,a[4]=F*M+ve*j+Ce*R,a[5]=Z*M+te*j+pr*R,a[6]=X*M+de*j+br*R,a[7]=oe*M+Me*j+Ha*R,a[8]=F*E+ve*Y+Ce*N,a[9]=Z*E+te*Y+pr*N,a[10]=X*E+de*Y+br*N,a[11]=oe*E+Me*Y+Ha*N,a[12]=Fu,a[13]=Vu,a[14]=Uu,a[15]=Eu,a});function Df(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(Df);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Af(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Af);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=wc(e,r,Xt),t=fa(pt(n,a,li),li),i=fa(pt(a,t,ui),ui),c=zf,l=kf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Cc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=Ou,Wn=Iu,Lc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Qt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),vi=function(e){return p(Qt,x(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Pc=1,Bf=2,zc=0,we=function(e){return{$:1,a:e}},eo=$(function(e,r){return{$:3,a:e,b:r}}),$i=$(function(e,r){return{$:0,a:e,b:r}}),kc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ff=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},O={$:1},Vf=wv,Uf=Yv,Be=rc,zr=$(function(e,r){return o(gv,e,Ta(r))}),ro=$(function(e,r){return h(o(bv,e,r))}),Mc=function(e){return o(zr,`
    `,o(ro,`
`,e))},Tn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(Tn,$(function(r,n){return n+1}),0,e)},Ef=Zu,Rf=x(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Vr=$(function(e,r){return p(Rf,e,r,P)}),Tc=$(function(e,r){return p(Ef,e,o(Vr,0,Fr(r)-1),r)}),ar=zv,Dc=function(e){var r=ar(e);return 97<=r&&r<=122},Ac=function(e){var r=ar(e);return r<=90&&65<=r},Yf=function(e){return Dc(e)||Ac(e)},jf=function(e){var r=ar(e);return r<=57&&48<=r},Nf=function(e){return Dc(e)||Ac(e)||jf(e)},Fe=function(e){return p(Tn,A,P,e)},cn=sv,Wf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Mc(Hf(r))))}),Hf=function(e){return o(Gf,e,P)},Gf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=cn(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Yf(y)&&o(Vf,Nf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Fr(s))+" ways:"));return o(zr,`

`,o(A,g,o(Tc,Wf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(zr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Mc(o(Uf,4,f))+(`

`+m))}}),Ve=32,bt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gt=ju,no=iv,ao=$(function(e,r){return Zo(r)/Zo(e)}),If=tv,Cn=no(o(ao,2,Ve)),Bc=L(bt,0,Cn,gt,gt),Fc=Wu,Vc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Uc=cv,ht=Nu,Se=$(function(e,r){return J(e,r)>0?e:r}),Jf=function(e){return{$:0,a:e}},to=Hu,qf=$(function(e,r){e:for(;;){var n=o(to,Ve,e),a=n.a,t=n.b,i=o(A,Jf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),Of=function(e){var r=e.a;return r},Zf=$(function(e,r){e:for(;;){var n=no(r/Ve);if(n===1)return o(to,Ve,e).a;var a=o(qf,e,P),t=n;e=a,r=t;continue e}}),Ec=$(function(e,r){if(r.l){var n=r.l*Ve,a=Uc(o(ao,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(Zf,t,r.l);return L(bt,ht(r.p)+n,o(Se,5,a*Cn),i,r.p)}else return L(bt,ht(r.p),Cn,gt,r.p)}),Kf=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ec,!1,{z:a,l:n/Ve|0,p:t});var i=Vc(p(Fc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Xf=$(function(e,r){if(e<=0)return Bc;var n=e%Ve,a=p(Fc,n,e-n,r),t=e-n-Ve;return S(Kf,r,t,e,P,a)}),qe=function(e){return!e.$},D=Vv,K=Tv,T=Fv,$e=Dv,sa=Uv,Qf=Ev,De=Mv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Rr("div"),es=function(e){return{$:2,a:e}},Rc=$(function(e,r){return e}),Yc=$(function(e,r){return{bA:r.bA,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Mr=function(e){return e},rs=Mr,fi=Ge(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),ns=yv,kr=dv,Zr=hv,Dn=$(function(e,r){return e<1?r:p(Zr,e,kr(r),r)}),Da=Sv,Aa=function(e){return e===""},Ba=$(function(e,r){return e<1?"":p(Zr,0,e,r)}),jc=Cv,si=ge(function(e,r,n,a,t){if(Aa(t)||o(ns,"@",t))return O;var i=o(Da,":",t);if(i.b){if(i.b.b)return O;var c=i.a,l=jc(o(Dn,c+1,t));if(l.$===1)return O;var u=l;return re(_e(fi,e,o(Ba,c,t),u,r,n,a))}else return re(_e(fi,e,t,O,r,n,a))}),di=U(function(e,r,n,a){if(Aa(a))return O;var t=o(Da,"/",a);if(t.b){var i=t.a;return S(si,e,o(Dn,i,a),r,n,o(Ba,i,a))}else return S(si,e,"/",r,n,a)}),mi=x(function(e,r,n){if(Aa(n))return O;var a=o(Da,"?",n);if(a.b){var t=a.a;return L(di,e,re(o(Dn,t+1,n)),r,o(Ba,t,n))}else return L(di,e,O,r,n)});$(function(e,r){if(Aa(r))return O;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(mi,e,re(o(Dn,a+1,r)),o(Ba,a,r))}else return p(mi,e,O,r)});var as=xv,io=function(e){},An=Er,ts=An(0),Nc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Tn,e,r,Fe(d)):L(Nc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=x(function(e,r,n){return L(Nc,e,r,0,n)}),ee=$(function(e,r){return p(mr,$(function(n,a){return o(A,e(n),a)}),P,r)}),da=st,co=$(function(e,r){return o(da,function(n){return An(e(n))},r)}),os=x(function(e,r,n){return o(da,function(a){return o(da,function(t){return An(o(e,a,t))},n)},r)}),is=function(e){return p(mr,os(A),An(P),e)},cs=Ov,ls=$(function(e,r){var n=r;return tc(o(da,cs(e),n))}),us=x(function(e,r,n){return o(co,function(a){return 0},is(o(ee,ls(e),r)))}),vs=x(function(e,r,n){return An(0)}),$s=$(function(e,r){var n=r;return o(co,e,n)});nr.Task=Jv(ts,us,vs,$s);var fs=ic("Task"),lo=$(function(e,r){return fs(o(co,e,r))}),ss=k$,ds=$v,ma={$:1},Wc=function(e){return{$:2,a:e}},Fa={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),ln=function(e){var r=e.b.B;return r.a},ms=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return O},Hc=function(e){var r=e.b;return o(Ne,Fa,r)},or=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ps=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?Hc(n):n;case 2:var i=a.a.cR;return(J(i+r.eH,ln(n).bA)>0?o(ae,ms,or(o(Ne,ma,t))):Mr)(o(Ne,Wc({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yc,l.ey,Qe(r,{bA:l.bA+r.eH})),s=o(e,v,u);return o(Ne,Fa,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Gc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),bs=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),gs=$(function(e,r){return Fe(p(bs,e,r,P))}),Ic=x(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(gs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Ic,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),hs=$(function(e,r){return p(Ic,0,e,r)}),_s=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(h([a]),t)),c=o(hs,e,i),l=o(Gc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,ma,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,ma,{B:d,ab:P,T:m})}else return r}}),ws=function(e){var r=e.b;return o(Ne,ma,r)},ys=function(e){var r=e.b;return o(Ne,Wc({cR:ln(e).bA}),r)},xs=$(function(e,r){switch(e.$){case 1:return ws(r);case 2:return Hc(r);case 3:return ys(r);default:var n=e.a;return o(_s,n,r)}}),Jc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ss=$(function(e,r){return Qe(r,{av:e(r.av)})}),Cs=function(e){return{$:3,a:e}},Ls=function(e){return{$:2,a:e}},qc=$(function(e,r){return{$:0,a:e,b:r}}),Oc=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return O;var n=r.a;return re(e(n))}),q=function(e){return e<0?-e:e},uo=Lv,Ps=x(function(e,r,n){return o(or,0/0,uo(o(e,r,n)))}),Zc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),zs=pv,Kc=function(e){return p(zs,A,P,e)},ks=$(function(e,r){var n=o(Zc,function(a){return a!=="0"&&a!=="."},Kc(r));return le(e&&n?"-":"",r)}),pe=rc,_t=fv,Xc=kv,Qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=cn(n);if(a.$===1)return"01";var t=a.a;return o(_t,"0",Qc(t))}else{var i=ar(r);return i>=48&&i<57?o(_t,Xc(i+1),n):"0"}},wt=ov,Ms=vv,Va=function(e){return o(_t,e,"")},el=x(function(e,r,n){return e<=0?n:p(el,e>>1,le(r,r),e&1?le(n,r):n)}),Ln=$(function(e,r){return p(el,e,r,"")}),yt=x(function(e,r,n){return le(n,o(Ln,e-kr(n),Va(r)))}),xt=mv,rl=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Ts=function(e){var r=o(ro,"e",pe(q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(or,0,jc(o(as,"+",t)?o(Dn,1,t):t)),c=rl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(or,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Jc(Va),cn(le(o(Ln,q(i),"0"),v))))):p(yt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ds=x(function(e,r,n){if(wt(n)||Ms(n))return pe(n);var a=n<0,t=rl(Ts(q(n))),i=t.a,c=t.b,l=kr(i)+r,u=le(o(Ln,-l+1,"0"),p(yt,l,"0",le(i,c))),v=kr(u),s=o(Se,1,l),d=o(e,a,p(Zr,s,v,u)),m=p(Zr,0,s,u),f=d?xt(o(or,"1",o(ye,Qc,cn(xt(m))))):m,g=kr(f),b=f==="0"?f:r<=0?le(f,o(Ln,q(r),"0")):J(r,kr(c))<0?p(Zr,0,g-r,f)+("."+p(Zr,g-r,g,f)):le(i+".",p(yt,r,"0",c));return o(ks,a,b)}),nl=Ds($(function(e,r){var n=cn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ar(t))})),As=Ps(nl),Bs=x(function(e,r,n){var a=o(ao,10,q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(As,t,n)}),al=qu,Ua=$(function(e,r){e:for(;;){if(r.$===-2)return O;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(al,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},rn=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(H,0,r,n,S(H,1,v,s,d,m),S(H,1,i,c,l,u))}else return S(H,e,i,c,S(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(H,0,v,s,S(H,1,g,b,w,y),S(H,1,r,n,m,t))}else return S(H,e,r,n,a,t)}),St=x(function(e,r,n){if(n.$===-2)return S(H,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(al,e,t);switch(u){case 0:return S(rn,a,t,i,p(St,e,r,c),l);case 1:return S(H,a,t,r,c,l);default:return S(rn,a,t,i,c,p(St,e,r,l))}}),hn=x(function(e,r,n){var a=p(St,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(H,1,t,i,c,l)}else{var u=a;return u}}),Fs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},tl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(H,0,f,g,S(H,1,n,a,S(H,0,i,c,l,u),b),S(H,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,y=C.e;return S(H,1,n,a,S(H,0,i,c,l,u),S(H,0,s,d,m,y))}else return e},pi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(H,0,i,c,S(H,1,u,v,s,d),S(H,1,n,a,m,S(H,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,y=M.e;return S(H,1,n,a,S(H,0,i,c,C,m),S(H,0,g,b,w,y))}else return e},Vs=ka(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(H,n,l,u,v,S(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,pi(r)}else break e;else return c.a,c.d,pi(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(H,r,n,a,ea(t),l);var u=tl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(rn,v,s,d,ea(m),f)}else return ir}else return S(H,r,n,a,ea(t),l)}else return ir},_n=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(H,n,a,t,o(_n,e,i),c);var u=tl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(rn,v,s,d,o(_n,e,m),f)}else return ir}else return S(H,n,a,t,o(_n,e,i),c);else return o(Us,e,jt(Vs,e,r,n,a,t,i,c))}),Us=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=Fs(c);if(l.$===-1){var u=l.b,v=l.c;return S(rn,n,u,v,i,ea(c))}else return ir}else return S(rn,n,a,t,i,o(_n,e,c))}else return ir}),Es=$(function(e,r){var n=o(_n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=x(function(e,r,n){var a=r(o(Ua,e,n));if(a.$)return o(Es,e,n);var t=a.a;return p(hn,e,t,n)}),Rs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Oc,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(qc,z(i,c),p(Bs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){return a.$===3?Cs(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){return a.$===2?Ls(n):a}))}},Ys=function(e){return Ss(Rs(e))},js=$(function(e,r){return o(ee,Ys(e),r)}),Ns=$(function(e,r){return Qe(r,{ey:o(js,e,r.ey)})}),Ws=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Qe(a,{B:o(Jc,Ns(e),a.B)}))}),Hs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Gs=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Qe(t,{B:o(Hs,o(e,i.a,r),i)}))}),Is=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(ps,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(Ws,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(Gs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(xs,l,a.G)})}}),Js=$(function(e,r){return o(Ne,Fa,{B:z(e,r(e)),ab:P,T:P})}),qs=Zv,bi=qs(P),pa=Bv,Pn=Av,Os=r$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({bA:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",$e))},o(T,"devicePixelRatio",$e))},o(T,"dt",$e))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",K))},o(T,"control",K))},o(T,"down",K))},o(T,"downs",pa(Pn)))},o(T,"left",K))},o(T,"pressedKeys",pa(Pn)))},o(T,"right",K))},o(T,"shift",K))},o(T,"up",K))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",K))},o(T,"isDown",K))},o(T,"move",K))},o(T,"rightDown",K))},o(T,"rightUp",K))},o(T,"up",K))},o(T,"x",$e))},o(T,"y",$e))))},o(T,"screen",o(D,function(r){return o(D,function(n){return De({eV:n,fS:r})},o(T,"height",$e))},o(T,"width",$e))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return De({eC:r,eD:e})},o(T,"deltaX",$e))},o(T,"deltaY",$e))))),Zs=function(e){return{$:4,a:e}},Ks={$:0},Xs=ac,Ie=$(function(e,r){return o(uc,e,Xs(r))}),G=Ie("className"),Qs=function(e){var r=e.b.B;return r.b},ba=Ie("id"),ed=c$,ga=ed,rd=l$,se=rd,nd={$:1},ad=function(e){return{$:3,a:e}},td=function(e){return{$:5,a:e}},gi=Rr("a"),vo=Rr("button"),hi=function(e){return o(Ie,"href",$$(e))},od=Cr("clip-rule"),Le=Cr("d"),id=Cr("fill"),ol=cc("http://www.w3.org/2000/svg"),cd=ol("svg"),ld=Cr("viewBox"),ud=o(u$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=cd(h([ld("0 0 24 24"),id("currentColor"),o(se,"width","100%"),o(se,"height","100%"),ud("http://www.w3.org/2000/svg")])),vd=Cr("fill-rule"),Pe=ol("path"),Xr={eB:Ee(h([o(Pe,h([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eP:Ee(h([o(Pe,h([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eU:Ee(h([o(Pe,h([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fc:Ee(h([o(Pe,h([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Pe,h([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fd:Ee(h([o(Pe,h([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Pe,h([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fn:Ee(h([o(Pe,h([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fo:Ee(h([o(Pe,h([Le("M7 5V19L18 12L7 5Z")]),P)])),fp:Ee(h([o(Pe,h([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fq:Ee(h([o(Pe,h([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fL:Ee(h([o(Pe,h([vd("evenodd"),od("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fM:Ee(h([o(Pe,h([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(h([o(Pe,h([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},$d=function(e){return{$:0,a:e}},il=lc,cl=$(function(e,r){return o(il,e,$d(r))}),$o=function(e){return o(cl,"click",De(e))},_i=Ie("target"),fd=Ie("title"),Ct=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(H,n,a,o(e,a,t),o(Ct,e,i),o(Ct,e,c))}),sd=dt,fr=sd,dd=function(e){return p(Qt,x(function(r,n,a){return o(A,n,a)}),P,e)},md=$(function(e,r){return{$:3,a:e,b:r}}),pd=$(function(e,r){return{$:2,a:e,b:r}}),bd=$(function(e,r){return{$:0,a:e,b:r}}),gd=$(function(e,r){return{$:1,a:e,b:r}}),un=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hd=L(un,0/255,0/255,0/255,1),_d=ac,wd=$(function(e,r){return o(uc,e,_d(r))}),yd=wd("checked"),Ze=lv,xd=x(function(e,r,n){return le(o(Ln,e-kr(n),Va(r)),n)}),ha=Xu,ll=function(e){var r=function(n){return n<10?Be(n):Va(Xc(87+n))};return e<16?r(e):le(ll(e/16|0),r(o(ha,16,e)))},Sd=o(ae,ll,o(xd,2,"0")),fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b1:a,b7:n,cG:r}},Cd=function(e){var r=fo(e),n=r.cG,a=r.b7,t=r.b1;return o(zr,"",o(A,"#",o(ee,o(ae,Ze,Sd),h([n*255,a*255,t*255]))))},Lt=Ie("htmlFor"),Pt=$(function(e,r){if(r.$)return O;var n=r.a;return e(n)}),_a=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Ld=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ea=$(function(e,r){return p(mr,Ld(e),P,r)}),ul=U(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),Pd=B$,zd=Pv,kd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Md=A$,Td=function(e){return o(Md,{et:!1,fe:!1},e)},Ra=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return O},Dd=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Ad=function(e){return{$:2,a:e}},Bd=function(e){return{$:0,a:e}},Fd=function(e){return{$:1,a:e}},Ja=$(function(e,r){return ar(r)-ar(e)}),qa=x(function(e,r,n){var a=ar(n);return J(ar(e),a)<1&&J(a,ar(r))<1}),Vd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):we(Fd(r))},a=p(qa,"0","9",r)?ue(o(Ja,"0",r)):p(qa,"a","z",r)?ue(10+o(Ja,"a",r)):p(qa,"A","Z",r)?ue(10+o(Ja,"A",r)):we(Bd(r));return o(_a,n,a)}),vl=$(function(e,r){var n=cn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(_a,function(c){return o(_a,function(l){return ue(c+l*e)},o(vl,e,i))},o(Vd,e,t))}),Ud=$(function(e,r){return 2<=e&&e<=36?o(vl,e,xt(r)):we(Ad(e))}),Ed=Ud(16),Rd=x(function(e,r,n){return L(un,e,r,n,1)}),Yd=U(function(e,r,n,a){return L(un,e,r,n,a)}),vn=Ku,jd=$(function(e,r){var n=o(vn,10,e);return Ze(r*n)/n}),Nd=_v,Wd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Kc(n);if(a.b&&!a.b.b){var t=a.a;return zd(h([t,t]))}else return n};return o(ae,Nd,o(ae,function(n){return o(ye,function(a){return p(Pd,1,a,n)},Td(e))},o(ae,Pt(Ra),o(ae,ye(function(n){return n.fE}),o(ae,ye(Ea(Mr)),o(ae,kd("Parsing hex regex failed"),_a(function(n){var a=o(ee,o(ae,r,o(ae,Ed,Dd(If))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(Yd,t/255,c/255,u/255,o(jd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Rd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),wa=Rr("input"),zt=Rr("label"),kt=Ie("name"),$l=$(function(e,r){return p(mr,T,r,e)}),Hd=o($l,h(["target","checked"]),K),Gd=function(e){return o(cl,"change",o(sa,e,Hd))},Id=function(e){return z(e,!0)},Jd=function(e){return{$:1,a:e}},qd=$(function(e,r){return o(il,e,Jd(r))}),Od=o($l,h(["target","value"]),Pn),so=function(e){return o(qd,"input",o(sa,Id,o(sa,e,Od)))},fl=Ie("max"),sl=Ie("min"),dl=function(e){return o(Ie,"step",e)},ya=Ie("type"),mo=Ie("value"),wi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,P,h([o(zt,h([Lt(r)]),h([o(I,h([G("relative w-full")]),h([o(I,h([G("inline-block")]),h([fr(r)])),o(I,h([G("inline-block float-right")]),h([fr(pe(n))]))]))])),o(wa,h([ya("range"),o(se,"width","100%"),ba(r),kt(r),sl(pe(a)),fl(pe(t)),mo(pe(n)),dl(pe(i)),so(o(ae,uo,o(ae,or(42),c)))]),P)]))},Zd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Kd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([G("h-12 py-4")]),h([o(zt,h([G("block"),Lt(e)]),h([o(wa,h([G("relative bottom-[1px] align-middle mr-2"),ya("checkbox"),ba(e),kt(e),Gd(md(e)),yd(c)]),P),fr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return wi({b9:e,cl:i,cp:t,ct:bd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return wi({b9:e,cl:i,cp:t,ct:o(ae,Ze,gd(e)),cP:1,cW:c});default:var c=r.a;return o(I,P,h([o(I,h([o(se,"margin-bottom","6px")]),h([o(zt,h([Lt(e)]),h([fr(e)]))])),o(wa,h([ya("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ba(e),kt(e),so(function(l){return o(pd,e,o(Zd,hd,Wd(l)))}),mo(Cd(c))]),P)]))}}),Xd=function(e){return o(I,h([G("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([G("text-lg pb-2")]),h([fr(e.ff)])),o(I,h([G("pl-2 pr-2")]),dd(o(Ct,Kd,e.av)))]))},Qd=function(e){return o(I,h([G("text-xs text-white60")]),o(ee,Xd,e))},em=function(e){return o(I,h([G("absolute left-[104px] bottom-2 text-sm text-white40")]),h([fr("clock: "+o(nl,3,ln(e).bA))]))},rm=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Ze(60/(ln(e).bA-n))},o(ye,o(ae,Of,function(n){return n.bA}),Ra(o(Gc,59,r))))},nm=function(e){return o(I,h([G("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rm(e);if(r.$===1)return h([fr("... Fps")]);var n=r.a;return h([fr(Be(n)+" Fps")])}())},am=function(e){return{$:0,a:e}},tm=function(e){var r=e.b.T;return Fr(r)},om=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},im=function(e){return o(wa,h([G("absolute w-full"),ya("range"),sl(Be(0)),fl(Be(om(e)-1)),mo(Be(tm(e))),dl(Be(1)),so(o(ae,uo,o(ae,or(42),o(ae,Ze,am))))]),P)},yi={$:1},cm={$:3},lm={$:2},ml=function(e){return!e.b},xi=$(function(e,r){return o(vo,h([G("px-2 bg-black60 hover:bg-black80 active:bg-black"),G(r),$o(e)]),h([fr("REC")]))}),Si=$(function(e,r){return o(vo,h([G("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),$o(r)]),h([o(I,h([G("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),um=function(e){var r=e.a,n=e.b.ab;return o(I,h([G("py-1")]),h([function(){switch(r.$){case 0:return o(xi,yi,"text-red-500 font-bold");case 1:return o(xi,lm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return ml(n)?o(I,P,P):o(Si,Xr.fo,cm);default:return o(Si,Xr.fn,yi)}}()]))},vm=function(e){return o(I,h([G("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([im(e),um(e),nm(e),em(e)]))},$m=function(e){var r=e.a;return _r(r,Fa)},fm=$(function(e,r){var n=$m(r.G)?o(I,P,P):o(I,h([G("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.fq.fU+.5*e.cM.fS)+"px"),o(se,"top",pe(-e.fq.fY+.5*e.cM.eV)+"px")]),h([o(I,h([G(e.fq.e1?"text-black80":"text-black40")]),h([Xr.fq]))]));return o(I,P,h([n]))}),sm=$(function(e,r){var n=o(vo,h([G(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),$o(nd),fd("Distraction Free Mode")]),h([Xr.f0])),a=o(I,h([G("absolute w-8 bottom-12")]),h([o(gi,h([G("text-twitterBlue40 hover:text-twitterBlue"),hi("https://twitter.com/AzizErkalSelman"),_i("_blank")]),h([Xr.fM]))])),t=o(I,h([G("absolute w-8 bottom-2")]),h([o(gi,h([G("text-githubCat40 hover:text-githubCat"),hi("https://github.com/erkal/elm-3d-playground-exploration"),_i("_blank")]),h([Xr.eP]))]));return r.aL?o(I,h([G("fixed w-10 h-10 p-1")]),h([n])):o(I,P,h([o(I,h([G("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([G("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.cM.eV-80)+"px")]),h([o(ga,ad,Qd(ln(r.G).ey))])),o(I,h([G("absolute bottom-0 left-10 h-20"),o(se,"width",e.cM.fS>600?"600px":pe(e.cM.fS-40)+"px")]),h([o(ga,td,vm(r.G))])),o(fm,e,r)]))}),dm=x(function(e,r,n){var a=Qs(n.G),t=ln(n.G);return o(I,h([G("bg-black40"),G("select-none"),G("antialiased"),G("font-mono"),o(se,"width",pe(t.cM.fS)+"px"),o(se,"height",pe(t.cM.eV)+"px")]),h([o(I,h([G("fixed")]),h([o(ga,Rc(Ks),o(e,t,a))])),o(I,h([ba("gui")]),h([o(sm,t,n),o(ga,Zs,o(r,t,a))]))]))}),mm=Ge(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Is,r,i,u,v),bi)}),l=function(u){var v=o(Yc,n,u.e0);return z({aL:u.e0.cM.fS<500,G:o(Js,v,a)},bi)};return ss({e$:l,fF:Rc(Os(es)),fN:c,fP:o(dm,e,t)})}),pm=U(function(e,r,n,a){return _e(mm,e,r,n,a,$(function(t,i){return o(I,P,P)}),x(function(t,i,c){return c}))}),bm=function(e){return{}},gm=x(function(e,r,n){return{av:n,e2:r,ff:e}}),pl=ir,hm=function(e){return p(Tn,$(function(r,n){var a=r.a,t=r.b;return p(hn,a,t,n)}),pl,e)},_m=x(function(e,r,n){return p(gm,e,r,hm(n))}),Ci=_m,Lr=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(qc,z(a,t),n))}),wm=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Oc,z(a,t),n))}),ym=h([p(Ci,"Parameters",!0,h([p(wm,"number of blocks",z(10,60),25),p(Lr,"frequency",z(1,20),10),p(Lr,"minWidth",z(0,45),35),p(Lr,"maxWidth",z(10,50),37),p(Lr,"period",z(.5,10),5)])),p(Ci,"Colors and light",!0,h([p(Lr,"lux",z(2,5),5),p(Lr,"intensity above",z(0,300),0),p(Lr,"intensity below",z(0,300),0)]))]),xm=$(function(e,r){return r}),Sm=av,gr=uv,Cm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Se,q(c),o(Se,q(i),q(t)));if(l){var u=t/l,v=i/l,s=c/l,d=gr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c$:u/d})}else return O}),ra=function(e){return e},po=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),na=function(e){var r=e,n=o(Se,q(r.fU),o(Se,q(r.fY),q(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=gr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c$:a/c})}else return O},xa=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Lm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),bl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Pm=$(function(e,r){var n=e,a=r;return J(a,n)<0}),zm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),km=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),Mm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},er=0,gl={fU:0,fY:0,c$:0},Tm=x(function(e,r,n){return o(Pt,function(a){var t=o(zm,o(km,a,r),r);return o(Pt,function(i){var c=o(po,r,e),l=o(Lm,n,c),u=o(bl,er,l)?c:o(Pm,er,l)?Mm(c):gl;return o(ye,function(v){return B(a,i,v)},na(u))},na(t))},na(e))}),Dm=function(e){var r=e,n=q(r.c$),a=q(r.fY),t=q(r.fU);if(J(t,a)<1)if(J(t,n)<1){var i=gr(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=gr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(J(a,n)<1){var i=gr(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=gr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},bo=function(e){var r=Dm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return z(r,c)},Kr=function(e){var r=e;return r},sr=function(e){return e},Am=$(function(e,r){var n=bo(e),a=n.a,t=n.b;return sr({cu:r,cZ:a,c_:t,c0:e})}),Bm=function(e){var r=o(xa,e.aR,e.dc),n=Kr(e.ee),a=o(po,r,n),t=p(Tm,r,n,a);if(t.$){var v=na(r);if(v.$){var d=bo(e.ee),m=d.a,f=d.b;return sr({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Am,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return sr({cu:e.dc,cZ:u,c_:l,c0:c})}},Bn={fU:0,fY:0,c$:0},Fm=function(e){return{$:0,a:e}},Ue=function(e){var r=e;return q(r)},aa=function(e){var r=e;return .5*r},Vm=nv,Um=function(e){var r=e;return Vm(r)},Em=function(e){var r=aa(Ue(e.ef)),n=Um(r);return{cF:Fm(n),cX:e.cX}},vr=function(e){return e},go=vr({fU:0,fY:1,c$:0}),wr=function(e){return e},Rm=function(e){var r=e.aR,n=e.dc,a=e.ee;return Em({ef:wr(2*Sm(.5)),cX:Bm({dc:ra(n),aR:ra(r),ee:o(or,go,o(Cm,Bn,ra(a)))})})},Ur=ev,Ym=$(function(e,r){return(r-Uc(r/e)*e)/e}),nn=Qu,jm=function(e){return 2*nn*e},Mt=U(function(e,r,n,a){return e+(r-e)*(1+Ur(jm(o(Ym,n,a))))/2}),Nm=function(e){return Rm({dc:{fU:10,fY:L(Mt,-20,20,20,e.bA),c$:145},aR:{fU:0,fY:0,c$:0},ee:{fU:0,fY:1,c$:0}})},ho=function(e){return e},hl=x(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Wm=function(e){var r=e;return r},Hm=function(e){var r=p(hl,1667,25e3,Wm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ho({fU:n,fY:a})},Gm=function(e){return e},Im=function(e){return{$:0,a:e}},Jm=Im,qm={$:3},Om=qm,Zm=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Km=Zm,Xm=$(function(e,r){return r.b?p(mr,A,r,e):e}),We=function(e){return p(mr,Xm,P,e)},_o=$(function(e,r){return We(o(ee,e,r))}),Qm=function(e){return{$:1,a:e}},e0=Qm,r0=function(e){return o(Cr,"height",Be(e))},n0=function(e){return o$(v$(e))},a0=n0,t0=function(e){return{$:2,a:e}},o0=t0,i0=function(e){return o(zr,"",e)},c0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return i0(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},l0=$(function(e,r){switch(r.$){case 0:return o(lf,e,r);case 1:return o(uf,e,r);case 2:return o(vf,e,r);case 3:return o($f,e,r);case 4:return o(ff,e,r);default:return o(sf,e,r)}}),u0=$(function(e,r){switch(r.$){case 0:return o(U$,e,r);case 1:return o(E$,e,r);case 2:return o(R$,e,r);case 3:return o(Y$,e,r);case 4:return o(j$,e,r);case 5:return o(N$,e,r);case 6:return o(W$,e,r);case 7:return o(H$,e,r);default:return G$(e)}}),v0=x(function(e,r,n){return p(cf,e,r,n)}),Li=function(e){var r=e;return r},$n=Sf,Oa=L($n,1,1,1,1),Ke=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),$0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),f0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p($0,n*a/t,n,n*(1-a-t)/t)}),Fn=gf,s0=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ya=$(function(e,r){return s0(o(f0,e,r))}),_l=$(function(e,r){return{dk:_r(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),rr=Mf,d0=function(e){return rr({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},Za=ge(function(e,r,n,a,t){var i=a.dk?1:-1,c=L($n,a.bW,a.bW,a.bW,i);return _e(t,e,c,d0(a),a.dk,r,n)}),wl=Ge(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(_l,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Za,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(A,S(Za,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var _=t.a,C=o(A,S(Za,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:C};default:var M=t.a;return p(Tn,L(wl,e,r,n,a),i,M)}}),m0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),yl=m0,wo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),p0=function(e){var r=e.Z,n=e.W,a=e.V;return L(wo,518,r,n,a)},b0=$(function(e,r){return{$:6,a:e,b:r}}),g0=b0,xl=h([p0({V:1,W:0,Z:!1}),L(yl,!1,!1,!1,!1),o(g0,0,1)]),an=519,yo=8,Sl=15,Qr=7681,h0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=V$,_0=$(function(e,r){return{$:0,a:e,b:r}}),w0=_0({c8:1,dh:0,dQ:5}),Ae=pf,y0=w0(h([{dY:o(Ae,-1,-1)},{dY:o(Ae,1,-1)},{dY:o(Ae,-1,1)},{dY:o(Ae,1,1)}])),x0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},S0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},xo=x(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(S0,a,t,i)))}),So=function(e){return p(xo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Co=function(e){return S(ne,h([So(e),L(yl,!1,!1,!1,!1)]),x0,h0,y0,{})},C0=Co({a8:Qr,ci:0,cH:yo,bl:an,cY:Sl,bt:Qr,bu:Qr}),L0=516,Pi=5386,xe=7680,P0=function(e){return o(vn,2,e+4)},Cl=function(e){return Co({a8:xe,ci:Sl,cH:yo,bl:L0,cY:P0(e),bt:Pi,bu:Pi})},z0=x(function(e,r,n){return We(h([p(Ke,e,n,xl),h([Cl(r),C0])]))}),k0=$(function(e,r){return We(o(Tc,z0(e),r))}),M0=function(e){var r=e.Z,n=e.W,a=e.V;return L(wo,513,r,n,a)},T0=M0({V:1,W:0,Z:!0}),D0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},A0=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return D0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},B0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zi=$(function(e,r){var n=e,a=r;return p(B0,32774,n,a)}),F0=1,ki=771,V0=770,Lo=A0({bv:0,aH:o(zi,F0,ki),by:0,bB:o(zi,V0,ki),bF:0,bU:0}),Ir=h([T0,Lo]),U0=function(e){var r=e;return r.dJ},E0=function(e){var r=e;return r.dK},Ll=function(e){var r=e;return r.dL},R0=function(e){var r=e;return r.dM},Y0=function(e){var r=e;return r.dN},Pl=function(e){var r=e;return r.dO},$r=$(function(e,r){var n=e,a=r;return a-n}),zl=function(e){return B(o($r,R0(e),U0(e)),o($r,Y0(e),E0(e)),o($r,Pl(e),Ll(e)))},fn=function(e){var r=e;return r.cu},Mi=function(e){var r=e;return fn(r)},j0=function(e){return e},N0=function(e){return sr({cu:j0({fU:e.H,fY:e.I,c$:e.J}),cZ:vr({fU:e.q,fY:e.r,c$:e.s}),c_:vr({fU:e.t,fY:e.u,c$:e.v}),c0:vr({fU:e.w,fY:e.x,c$:e.y})})},Ka=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),kl=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fU:c*g.fU+l*g.fY+u*g.c$,fY:c*m.fU+l*m.fY+u*m.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),Yr=function(e){var r=e;return r.cZ},jr=function(e){var r=e;return r.c_},Nr=function(e){var r=e;return r.c0},Ml=$(function(e,r){return{cu:o(kl,e,fn(r)),cZ:o(Ka,e,Yr(r)),c_:o(Ka,e,jr(r)),c0:o(Ka,e,Nr(r))}}),Tt=x(function(e,r,n){return{fU:e,fY:r,c$:n}}),Sa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Se,n,a)}),ta=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ta,n,a)}),W0=$(function(e,r){var n=Sa(r),a=Sa(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),He=function(e){var r=e;return r},H0=function(e){var r=e;return B(r.fU,r.fY,r.c$)},wn=$(function(e,r){var n=e,a=r;return a+n}),G0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(Ue(a)),c=aa(Ue(n)),l=aa(Ue(t)),u=H0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(wn,c,v),dK:o(wn,i,s),dL:o(wn,l,d),dM:o($r,c,v),dN:o($r,i,s),dO:o($r,l,d)}}),Ti=U(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,d=He(Nr(e)),m=q(l*d.fU)+q(c*d.fY)+q(i*d.c$),f=He(jr(e)),g=q(l*f.fU)+q(c*f.fY)+q(i*f.c$),b=He(Yr(e)),w=q(l*b.fU)+q(c*b.fY)+q(i*b.c$),y=o(G0,B(w,g,m),o(kl,e,p(Tt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(W0,_,y))}),Dt=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Ti,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Ti,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Dt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Ml,N0(v),e),m=r*v.bW,f=e,g=r,b=L(Dt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Wr=hf,Hr=_f,Gr=wf,Tl=function(e){return{$:4,a:e}},I0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return Tl(o(I0,e,P))},J0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},q0=function(e){var r=e;return r},Di=Co({a8:Qr,ci:0,cH:yo,bl:an,cY:255,bt:Qr,bu:Qr}),O0=function(e){var r=e,n=o(Se,q(r.fU),o(Se,q(r.fY),q(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=gr(i*i+t*t+a*a);return c*n}else return er},Te={by:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fU:0,fY:0,c$:0},Ye=$(function(e,r){var n=e,a=r;return rr({ds:n.fU,dt:n.bU,du:a.fU,dv:a.bU,dw:n.fY,dx:n.bF,dy:a.fY,dz:a.bF,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),bn=z({bd:o(Ye,Te,Te),bK:o(Ye,Te,Te),bL:o(Ye,Te,Te),bM:o(Ye,Te,Te)},L($n,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Ai=function(e){var r=e;return-r},Dl=514,Al=function(e){var r=e.Z,n=e.W,a=e.V;return L(wo,515,r,n,a)},Bl=240,Z0=h([Al({V:1,W:0,Z:!0}),So({a8:xe,ci:Bl,cH:0,bl:Dl,cY:0,bt:xe,bu:xe}),Lo]),K0=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=Ue(a),l=c,u=Ue(t),v=u,s=n.cF;if(s.$){var m=s.a;return wt(v)?rr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):rr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return wt(v)?rr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):rr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),X0=function(e){return h([Al({V:1,W:0,Z:!0}),So({a8:xe,ci:Bl,cH:e,bl:Dl,cY:0,bt:xe,bu:xe}),Lo])},Q0=x(function(e,r,n){return We(o(ee,function(a){var t=a<<4,i=L($n,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Ke,e,z(r,i),X0(t))},o(Vr,1,o(vn,2,n)-1)))}),Ca=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},en=function(e){var r=e;return r},ep=Tf,Bi=function(e){var r=e;return Ca(Nr(r))},Fl=vr({fU:1,fY:0,c$:0}),Vl=Fl,Po=go,zo=vr({fU:0,fY:0,c$:1}),rp=zo,np={cu:Bn,cZ:Vl,c_:Po,c0:rp},Un=function(e){var r=e;return r},ap=function(e){var r=Un(fn(e)),n=He(Nr(e)),a=He(jr(e)),t=He(Yr(e));return rr({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},tp=$(function(e,r){var n=r;return ap(o(Ml,n,e))}),op=function(e){return o(tp,np,e)},ip=function(e){var r=e;return r.cX},cp=function(e){var r=e;return Yr(r)},lp=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),up=function(e){var r=e;return jr(r)},vp=function(e){var r=ip(e.es),n=sr({cu:Mi(r),cZ:cp(r),c_:up(r),c0:Ca(Bi(r))}),a=Vn(e.aP),t=a,i=L(Dt,n,1,O,h([t]));if(i.$===1)return P;var c=i.a,l=op(r),u=o(ie,.99,o(ce,Ue(e.ex),Ai(Ll(c)))),v=zl(c),s=v.a,d=v.b,m=v.c,f=O0(p(lp,s,d,m)),g=o(ie,1.01,o(wn,f,Ai(Pl(c)))),b=o(K0,e.es,{en:e.en,eO:g,fg:u}),w=ep(b).dH,y=w?He(Ca(Bi(r))):en(Mi(r)),_=function(){var te=e.fK;switch(te.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=te.a;return z(3,de);case 4:var de=te.a;return z(4,de);default:return z(5,0)}}(),C=_.a,M=_.b,j=e.eM,R=j,E=o(Ya,R,e.fR),Y=E,N=rr({ds:0,dt:y.fU,du:Wr(Y),dv:e.d8,dw:0,dx:y.fY,dy:Hr(Y),dz:q0(f),dA:0,dB:y.c$,dC:Gr(Y),dD:C,dE:0,dF:w,dG:0,dH:M}),F=_e(wl,N,l,b,J0,t,{M:P,U:P,fz:P}),Z=e.e8;switch(Z.$){case 0:var X=Z.a;return We(h([p(Ke,F.M,z(X,Oa),Ir),p(Ke,F.U,bn,Ir)]));case 1:var X=Z.a;return We(h([p(Ke,F.M,bn,Ir),h([Di]),p(Ke,F.fz,X.bd,xl),h([Cl(0)]),p(Ke,F.M,z(X,Oa),Z0),p(Ke,F.U,bn,Ir)]));default:var oe=Z.a,ve=Z.b;return We(h([p(Ke,F.M,z(ve,Oa),Ir),h([Di]),o(k0,F.fz,oe),p(Q0,F.M,ve,Fr(oe)),p(Ke,F.U,bn,Ir)]))}},$p=function(e){return o(Cr,"width",Be(e))},fp=$(function(e,r){var n=h([e0(1),o0(0),Jm(!0),L(Km,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,Om,n),"1",1);default:var M=C.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Li(v),d=o(se,"height",Be(s)+"px"),m=Li(u),f=m/s,g=o(_o,function(C){return vp({en:f,es:e.es,ex:e.ex,aP:C.aP,eM:C.eM,e8:C.e8,d8:c,fK:C.fK,fR:C.fR})},r),b=o(se,"width",Be(m)+"px"),w=e.aI,y=w,_=c0(y);return p(a0,"div",h([o(se,"padding","0px"),b,d]),h([z(i,p(v0,t,h([$p(Ze(m*c)),r0(Ze(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),sp=function(e){return{$:2,a:e}},dp=function(e){return sp(e)},mp=function(e){return o(fp,{el:dp(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},h([{aP:e.aP,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},Fi=function(e){return e},Tr=function(e){return e},pp=function(e){var r=e;return r},ko=function(e){var r=e;return pp(r.eo)},Ul=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),bp=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),El=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Rl=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),gp=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),hp=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),_p=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Mo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(_p,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Ul,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(bp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(El,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(hp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(Rl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(gp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},To={$:0},wp=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),d=o(fe,s.dM,e),m=o(ce,s.dJ,r),f=o(fe,s.dN,n),g=o(ce,s.dK,a),b=o(fe,s.dO,t),w=o(ce,s.dL,i),y=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),yp=x(function(e,r,n){var a=Sa(e(r));return Ma(wp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),Xa=$(function(e,r){var n=e,a=r;return J(a,n)<1}),Yl=function(e){return o(Xa,e.dJ,e.dM)&&o(Xa,e.dK,e.dN)&&o(Xa,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},zn=function(e){var r=e;return r},Dr=function(e){var r=e;return r.fU},Ar=function(e){var r=e;return r.fY},Br=function(e){var r=e;return r.c$},jl=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Dr(n),c=Ar(n),l=Br(n),u=Dr(a),v=Ar(a),s=Br(a),d=Dr(t),m=Ar(t),f=Br(t);return Yl({dJ:o(ce,i,o(ce,u,d)),dK:o(ce,c,o(ce,v,m)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,d)),dN:o(fe,c,o(fe,v,m)),dO:o(fe,l,o(fe,s,f))})},Nl=yf,ze=function(e){return Nl(Un(e))},Wl=function(e){var r=e;return r},ja=function(e){return Nl(Wl(e))},Hl=function(e){return e},xp=$(function(e,r){var n=e,a=r,t=o(Se,q(a.fU),o(Se,q(a.fY),q(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=gr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return gl}),Sp=xp(Hl(1)),Gl=x(function(e,r,n){var a=o(xa,r,n),t=o(xa,e,r);return Sp(o(po,a,t))}),Cp=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=ja(p(Gl,n,a,t));return B({o:i,dY:ze(n)},{o:i,dY:ze(a)},{o:i,dY:ze(t)})},Lp=$(function(e,r){return{$:2,a:e,b:r}}),Il=Lp({c8:3,dh:0,dQ:4}),Pp=function(e){if(e.b){var r=e.a,n=e.b,a=Il(o(ee,Cp,e)),t=p(yp,jl,r,n);return L(Ul,t,e,a,0)}else return To},Re=x(function(e,r,n){return B(e,r,n)}),me=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Jl=function(){var e=Tr(1),r=Tr(1),n=Tr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ie,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Mo(Pp(h([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,g,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,g),p(Re,s,d,w)])))}(),In={$:0},zp=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),kp=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ja(p(Gl,u,l,c)),s={o:v,dY:ze(u)},d={o:v,dY:ze(l)},m={o:v,dY:ze(c)};return o(A,s,o(A,d,o(A,m,n)))}),Do=function(e){var r=e;return r.D},Mp=U(function(e,r,n,a){if(r.$===1)return O;var t=r.a;if(n.$===1)return O;var i=n.a;if(a.$===1)return O;var c=a.a;return re(p(e,t,i,c))}),At=4294967295>>>32-Cn,Bt=Gu,Tp=x(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,At&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Dp=function(e){return e>>>5<<5},Ap=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?O:J(e,Dp(n))>-1?re(o(Bt,At&e,i)):re(p(Tp,a,e,t))}),Ao=function(e){var r=e;return r.ah},Qa=$(function(e,r){return o(Ap,e,Ao(r))}),Bp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Mp,x(function(c,l,u){return B(c,l,u)}),o(Qa,a,e),o(Qa,t,e),o(Qa,i,e))};return o(Ea,r,Do(e))},Fp=x(function(e,r,n){e:for(;;){var a=o(to,Ve,e),t=a.a,i=a.b;if(J(ht(t),Ve)<0)return o(Ec,!0,{z:r,l:n,p:t});var c=i,l=o(A,Vc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Bo=function(e){return e.b?p(Fp,e,P,0):Bc},Vp=x(function(e,r,n){return e(r(n))}),Up=$(function(e,r){return!o(Zc,o(Vp,ds,e),r)}),Ep=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Rp=function(e){var r=e.a;return r},ql=$(function(e,r){var n=Rp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(Up,a,r)?{D:r,ah:e}:{D:o(Ep,a,r),ah:e}}),Yp=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=Yp({c8:1,dh:3,dQ:4}),oa=$(function(e,r){var n=en(r),a=en(e);return z(B(a.fU,a.fY,a.c$),B(n.fU,n.fY,n.c$))}),Vi=p(Fn,0,0,0),et=Ge(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ua,o(oa,e,r),t);if(v.$){var d={o:Vi,dY:ze(r)},m={o:Vi,dY:ze(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),jp=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,_=v,C=a+3,M=_e(et,s,m,f,b,r,_e(et,d,s,g,f,r,_e(et,m,d,b,g,r,t)));e=w,r=y,n=_,a=C,t=M;continue e}else{var j=t,R=j.a,E=j.b;return z(R,Fe(E))}}),Np=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(hn,o(oa,m,s),f,p(hn,o(oa,s,d),g,p(hn,o(oa,d,m),b,t))),y=o(A,B(b,g,f),a),_=e,C=v,M=n+3,j=y,R=w;e=_,r=C,n=M,a=j,t=R;continue e}else return B(a,t,n)}),Pr=x(function(e,r,n){var a=Bp(n),t=p(mr,kp(r),P,a),i=S(Np,r,a,0,P,pl),c=i.a,l=i.b,u=i.c,v=S(jp,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=ml(d)?t:le(t,d);return p(zp,e,o(ql,Bo(m),s),o(En,m,s))}),Ft=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Vr,0,Fr(e)-1)),ah:Bo(We(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Ol=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,zn,r);return p(Pr,a,Mr,Ft(n));case 2:var a=e.a,r=e.b,n=o(ee,zn,r);return p(Pr,a,Mr,Ft(n));case 3:var a=e.a,t=e.b;return p(Pr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 8:return In;case 9:return In;default:return In}},Ui=Ol(Jl),Fo=function(e){var r=e;return r.aK},Zl={$:0},k=Zl,be=$(function(e,r){return{$:1,a:e,b:r}}),Wp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Hp=1029,Gp=function(e){return{$:5,a:e}},Kl=function(e){var r=e;return Gp(r)},Ip=Kl(Hp),Jp=1028,qp=Kl(Jp),ke=x(function(e,r,n){return r===1?e?o(A,Ip,n):o(A,qp,n):n}),Xl={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(ke,l,a,d),Xl,Wp,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Vo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Ql={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(ke,l,a,d),Ql,Vo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),eu=$(function(e,r){return{$:3,a:e,b:r}}),Op={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},ru={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Zp=U(function(e,r,n,a){return o(eu,n,Q(function(t,i,c,l,u,v,s,d){return S(ne,d,ru,Op,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Uo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Rn=function(e){var r=e;return r},Na=xf,lr=ge(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(ke,u,t,m),Ql,Uo,a,{aN:o(Na,Rn(r),e),b:l,c,d:s,e:i,f:v})}))}),Kp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Xp=ge(function(e,r,n,a,t){return o(eu,a,Q(function(i,c,l,u,v,s,d,m){return S(ne,m,ru,Kp,t,{aN:o(Na,Rn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),nu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},au={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ke,l,a,d),au,nu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),tu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},ou={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qp=Ge(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ke,v,i,f),ou,tu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),iu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},e1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,Q(function(d,m,f,g,b,w,y,_){var C=y.a,M=y.b;return S(ne,p(ke,g,s,_),ou,iu,v,{b0:e,b2:r,b3:i,b4:a,P:M,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},cu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},qn=Ge(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ke,v,i,f),au,cu,t,{b$:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),r1=function(e){return{$:0,a:e}},Ei=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),n1=function(e){return L($n,Wr(e),Hr(e),Gr(e),1)},Eo=L($n,0,0,0,0),ia=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Eo)}else{var n=r.a;return z(e,n1(n))}}),lu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ei,z(t,Eo),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ei,o(ia,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,r1(a)}}),a1=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),On=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),t1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),o1=function(e){return o(Ae,e,1)},Vt=o(Ae,0,0),Jr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Vt)}else{var n=r.a;return z(e,o1(n))}}),uu=U(function(e,r,n,a){var t=L(t1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(On,z(u,Eo),o(Jr,u,r),o(Jr,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(On,o(ia,u,e),z(u,Vt),o(Jr,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(On,o(ia,u,e),o(Jr,u,r),z(u,Vt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(On,o(ia,u,e),o(Jr,u,r),o(Jr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(a1,i,c,l)}}),i1={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},nt=ge(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(ke,u,t,m),Xl,i1,a,{bZ:Rn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),vu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},c1=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ke,l,a,d),vu,tu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),l1=Yt(function(e,r,n,a,t,i,c,l,u){return o(be,c,Q(function(v,s,d,m,f,g,b,w){var y=b.a,_=b.b;return S(ne,p(ke,m,u,w),vu,iu,l,{b0:e,b2:r,b3:i,b4:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,co:t,b:d,c:s,aW:e,d:g,cL:n,e:v,a$:0,f})}))}),kn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),u1=function(e){var r=e;return p(kn,r.dM,r.dJ,.5)},v1=function(e){var r=e;return p(kn,r.dN,r.dK,.5)},$1=function(e){var r=e;return p(kn,r.dO,r.dL,.5)},f1=function(e){return p(me,u1(e),v1(e),$1(e))},W=function(e){var r=zl(e),n=r.a,a=r.b,t=r.c;return{ev:Un(f1(e)),eR:n/2,eS:a/2,eT:t/2}},Ro=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(rt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(rt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(rt,l,W(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Zp,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,W(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Xp,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(lu,s,R);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(c1,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Qp,b,y,_,W(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,M=e.c,j=e.d,R=e.e,E=L(uu,C,M,j,R);if(E.$){var Z=E.a,X=Z.a,oe=Z.b,ve=E.b,te=ve.a,de=ve.b,Me=E.c,Ce=Me.a,pr=Me.b,br=E.d,y=br.a,_=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Yu(l1,X,oe,te,de,Ce,pr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return e1(X)(oe)(te)(de)(Ce)(pr)(y)(_)(W(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var Y=E.a,N=E.b,F=E.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(qn,Y,N,F,W(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(qn,Y,N,F,W(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(qn,Y,N,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(qn,Y,N,F,W(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),at=function(e){var r=e;return r.fU},tt=function(e){var r=e;return r.fY},ot=function(e){var r=e;return r.c$},s1=function(e){var r=e,n=ot(r.c0),a=tt(r.c0),t=at(r.c0),i=ot(r.c_),c=tt(r.c_),l=at(r.c_),u=ot(r.cZ),v=tt(r.cZ),s=at(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},d1=function(e){var r=Un(fn(e)),n=He(Nr(e)),a=He(jr(e)),t=He(Yr(e));return{dk:s1(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,H:r.fU,I:r.fY,J:r.c$,bW:1}},qr=$(function(e,r){return{$:5,a:e,b:r}}),$u=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(_l,a,e);return o(qr,i,t);case 1:return o(qr,e,n);case 3:return o(qr,e,n);case 2:return o(qr,e,n);default:return o(qr,e,n)}}),fu=$(function(e,r){return o($u,d1(e),r)}),Wa=function(e){return{$:2,a:e}},m1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),p1=Lf,b1=Cf,Ri=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=b1(a),g=f.fU,b=f.fY,w=f.c$,y=f.ei,_=p1({ei:y,fU:g*s,fY:b*d,c$:w*m});return Ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return Zl;case 5:var n=r.a,a=r.b;return o(qr,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(be,o(m1,e,t),o(Ri,e,i));case 3:return r;case 2:var i=r.a;return Wa(o(Ri,e,i));default:var c=r.a;return Tl(o(ee,Ut(e),c))}}),Yo=$(function(e,r){var n=r;return o(Ut,e,n)}),jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},su=7683,du=7682,g1=p(xo,{ci:0,cH:0,cY:15},{a8:xe,bl:an,bt:xe,bu:su},{a8:xe,bl:an,bt:xe,bu:du}),h1=p(xo,{ci:0,cH:0,cY:15},{a8:xe,bl:an,bt:xe,bu:du},{a8:xe,bl:an,bt:xe,bu:su}),No=$(function(e,r){return e?o(A,h1,r):o(A,g1,r)}),_1={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},w1=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return S(ne,o(No,i,v),_1,jo,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return O},La=function(e){var r=w1(e);if(r.$)return k;var n=r.a;return Wa(n)},y1=U(function(e,r,n,a){var t=o(Ro,n,Jl),i=function(){var s=z(e,r);return s.a?s.b?Vn(h([t,La(Ui)])):t:s.b?La(Ui):k}(),c=Fo(a),l=c.a,u=c.b,v=c.c;return o(fu,ko(a),o(Yo,B(l,u,v),i))}),x1=$(function(e,r){return L(y1,!0,!0,e,r)}),Et=function(e){return{$:0,a:e}},mu=$(function(e,r){return{$:0,a:e,b:r}}),S1=function(e){var r=fo(e),n=r.cG,a=r.b7,t=r.b1;return p(Fn,n,a,t)},C1=function(e){return o(mu,0,Et(S1(e)))},L1=function(e){var r=e;return r.k},xn=function(e){var r=e;return Ur(r)},P1=$(function(e,r){var n=r;return n/e}),tn=rv,Yi=function(e){var r=e;return{fU:Ur(r),fY:tn(r)}},z1=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:ja(a),dY:ze(n)},r)}),k1=ka(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Gr(l.dY),s=Hr(l.dY),d=Wr(l.dY),m=o(ta,e,d),f=o(Se,r,d),g=o(ta,n,s),b=o(Se,a,s),w=o(ta,t,v),y=o(Se,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=y,c=_;continue e}else return Yl({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),pu=$(function(e,r){var n=Gr(e.dY),a=Hr(e.dY),t=Wr(e.dY);return jt(k1,t,t,a,a,n,n,r)}),M1=function(e){var r=p(Lc,z1,P,Ao(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Do(e)),i=o(pu,n,a);return L(El,i,e,t,0)}else return To},bu=vr({fU:0,fY:0,c$:-1}),ji=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c$:a.fU*l.c$+a.fY*i.c$}}),Pa=function(e){var r=e;return tn(r)},Rt=function(e){return wr(2*nn*e)},T1=Mr,Ni=T1({cu:Bn,cZ:Vl,c_:Po}),gu=function(){var e=72,r=o(P1,e,Rt(1)),n=Tr(1),a=Kr(zo),t=Kr(bu),i=Tr(1),c=o(ie,.5,i),l=p(me,er,er,c),u=o(ie,-.5,i),v=p(me,er,er,u),s=function(f){var g=o(ie,f,r),b=Kr(o(ji,Ni,Yi(g))),w=o(ie,xn(g),n),y=o(ie,Pa(g),n),_=p(me,w,y,c),C=p(me,w,y,u),M=o(ha,e,f+1),j=o(ie,M,r),R=Kr(o(ji,Ni,Yi(j))),E=o(ie,xn(j),n),Y=o(ie,Pa(j),n),N=p(me,E,Y,u),F=p(me,E,Y,c);return h([B({o:t,dY:v},{o:t,dY:N},{o:t,dY:C}),B({o:b,dY:C},{o:R,dY:N},{o:R,dY:F}),B({o:b,dY:C},{o:R,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(ee,s,o(Vr,0,e-1)),m=Ft(We(d));return Mo(M1(m))}(),Wi=Ol(gu),D1=function(e){var r=e;return r.eF},A1=function(e){var r=e;return r.cu},B1=function(e){var r=D1(e),n=bo(r),a=n.a,t=n.b;return sr({cu:A1(e),cZ:a,c_:t,c0:r})},F1=function(e){var r=e;return r.e6},V1=function(e){var r=e;return r.fs},U1=U(function(e,r,n,a){var t=B1(L1(a)),i=o(Ro,n,gu),c=function(){var d=z(e,r);return d.a?d.b?Vn(h([i,La(Wi)])):i:d.b?La(Wi):k}(),l=V1(a),u=l,v=F1(a),s=v;return o(fu,t,o(Yo,B(u,u,s),c))}),E1=$(function(e,r){return L(U1,!0,!0,e,r)}),Hi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Gi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},gn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=en(n),c=en(a),l=en(t);return rr({ds:i.fU,dt:c.fU,du:l.fU,dv:0,dw:i.fY,dx:c.fY,dy:l.fY,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},Zn=Il(h([B({cS:0},{cS:1},{cS:2})])),R1=$(function(e,r){var n=jl(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){return S(ne,p(ke,j,0,N),Hi,Vo,Zn,{aw:t,b:M,c:C,d:E,e:_,bq:gn(r),f:R})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){return S(ne,p(ke,j,0,N),Hi,Uo,Zn,{aN:o(Na,Rn(c),i),b:M,c:C,d:E,e:_,bq:gn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(lu,l,f);if(u.$)return k;var v=u.a;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){var F=Y.a,Z=Y.b;return S(ne,p(ke,j,0,N),Gi,nu,Zn,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:M,c:C,d:E,e:_,bq:gn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(uu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,y=g.c;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){var F=Y.a,Z=Y.b;return S(ne,p(ke,j,0,N),Gi,cu,Zn,{b$:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cn:y,b:M,c:C,d:E,cK:w,e:_,bq:gn(r),f:R})}))}}),Y1=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(En,e,r)}(),j1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},Ii=function(e){return Wa(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(No,t,u),j1,jo,Y1,{b:a,c:n,d:c,e:r,bX:l,bq:gn(e),f:i})}))},N1=U(function(e,r,n,a){var t=o(R1,n,a),i=z(e,r);return i.a?i.b?Vn(h([t,Ii(a)])):t:i.b?Ii(a):k}),W1=$(function(e,r){return L(N1,!0,!0,e,r)}),Wo=function(e){var r=e;return r},H1=$(function(e,r){var n=Br(r),a=Br(e),t=Ar(r),i=Ar(e),c=Dr(r),l=Dr(e);return{dJ:o(ce,l,c),dK:o(ce,i,t),dL:o(ce,a,n),dM:o(fe,l,c),dN:o(fe,i,t),dO:o(fe,a,n)}}),G1=function(e){var r=Wo(e),n=r.a,a=r.b;return o(H1,n,a)},Ji={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},I1=$(function(e,r){return{$:1,a:e,b:r}}),J1=I1({c8:2,dh:0,dQ:1}),qi=J1(h([z({dr:0},{dr:1})])),q1=$(function(e,r){var n=G1(r),a=W(n),t=Wo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(be,a,Q(function(v,s,d,m,f,g,b,w){return S(ne,w,Ji,Vo,qi,{aw:l,dp:ze(c),dq:ze(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,Q(function(s,d,m,f,g,b,w,y){return S(ne,y,Ji,Uo,qi,{aN:o(Na,Rn(u),l),dp:ze(c),dq:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),O1=$(function(e,r){return o(q1,e,r)}),Ho=function(e){var r=e;return r.ev},Go=function(e){var r=e;return r.fs},Kn=function(e){return wr(nn*(e/180))},Oi=$(function(e,r){var n=e,a=r;return n/a}),Z1=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Zi=$(function(e,r){return e<1?P:S(Z1,0,e,e,r,P)}),K1=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:ja(a),dY:ze(n),L:o(Ae,c,l)},r)}),X1=function(e){var r=p(Lc,K1,P,Ao(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Do(e)),i=o(pu,n,a);return L(Rl,i,e,t,0)}else return To},Io=$(function(e,r){var n=e,a=r,t=Ur(a);return{fU:t*Ur(n),fY:t*tn(n),c$:tn(a)}}),Q1=function(){var e=Tr(1),r=72,n=o(Vr,0,r-1),a=o(Zi,r,o(kn,er,Rt(1))),t=no(r/2),i=o(Vr,0,t-1),c=o(Zi,t,o(kn,Kn(90),Kn(-90))),l=Bo(We(o(ee,function(s){return o(ee,function(d){return{o:Kr(o(Io,s,d)),dY:p(me,o(ie,xn(d)*xn(s),e),o(ie,xn(d)*Pa(s),e),o(ie,Pa(d),e)),L:z(o(Oi,s,Rt(1)),o(Oi,o(wn,Kn(90),d),Kn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(ee,function(s){return We(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return Mo(X1(o(ql,l,v)))}(),za=72,Xn=2*za,eb=$(function(e,r){e:for(;;){var n=Xn+1,a=o(ha,Xn,2*e+3),t=o(ha,Xn,2*e+2),i=2*e+1,c=2*e,l=Xn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),rb=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),nb=$(function(e,r){e:for(;;){var n=p(rb,0,2*nn,e/za),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ab=function(){var e=o(nb,za-1,h([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(eb,za-1,P);return o(En,e,r)}(),tb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},Ki=function(e){return Wa(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(No,!0,u),tb,jo,ab,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},ob=function(e){var r=Wl(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c$,bW:1}},ib=$(function(e,r){return o($u,ob(e),r)}),cb=U(function(e,r,n,a){var t=o(Ro,n,Q1),i=function(){var u=z(e,r);return u.a?u.b?Vn(h([t,Ki()])):t:u.b?Ki():k}(),c=Go(a),l=c;return o(ib,o(xa,Bn,Ho(a)),o(Yo,B(l,l,l),i))}),lb=$(function(e,r){return L(cb,!0,!0,e,r)}),ub=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),hu=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),vb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),$b=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(mu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ub,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(hu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(vb,n,a,t,i,c)}},fb=$b,_u=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(x1,t,r)]);case 1:var t=e.a,n=e.b;return h([o(W1,t,n)]);case 3:var t=e.a,a=e.b;return h([o(lb,fb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(E1,t,i)]);case 4:var c=e.a,l=e.b;return h([o(O1,C1(c),l)]);default:var u=e.a;return o(_o,_u,u)}},sb=function(e){return o(_o,_u,e)},db=$(function(e,r){return mp({el:e.el,aI:Gm(e.ep),es:e.es,ex:Tr(e.ex),b5:e.b5,aK:z(Fi(Ze(e.cM.fS)),Fi(Ze(e.cM.eV))),aP:sb(r),eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),mb=L(un,186/255,189/255,182/255,1),wu=function(e){return e},pb=$(function(e,r){var n=e,a=He(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(Ya,r.bH,r.aJ),u=l;return{by:Gr(u),eu:n,bF:Hr(u),cD:0,bU:Wr(u),cT:1,fU:-t,fY:-i,c$:-c}}),bb=function(e){return o(pb,wu(!0),{aJ:e.aJ,eF:o(Io,wr(e.bx),wr(e.bD)),bH:e.bH})},gb=function(e){return e},hb=function(e){return gb(1.2*o(vn,2,e))},it=ho({fU:.37208,fY:.37529}),_b=$(function(e,r){return{$:2,a:e,b:r}}),yu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},wb=function(e){var r=e;return r.eu},yb=yu(bn.a),xb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(mr,n,z(P,P),r)}),Sb=function(e){var r=e;return rr({ds:r.fU,dt:r.bU,du:0,dv:0,dw:r.fY,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Cb=Q(function(e,r,n,a,t,i,c,l){var u=o(xb,wb,h([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(_b,o(ee,Sb,v),{bd:o(Ye,m,g),bK:o(Ye,w,_),bL:o(Ye,t,i),bM:o(Ye,c,l)})}else return yb}else return yu({bd:o(Ye,e,r),bK:o(Ye,n,a),bL:o(Ye,t,i),bM:o(Ye,c,l)})}),Lb=U(function(e,r,n,a){return Ma(Cb,e,r,n,a,Te,Te,Te,Te)}),Pb=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Ua,e,r.av))}),zb=$(function(e,r){return o(or,0,Ra(o(Ea,Pb(e),r)))}),kb=$(function(e,r){return o(zb,e,r.ey)}),Je=kb,Mb={$:5},Tb=Mb,Db=ho({fU:.44757,fY:.40745}),Ab=function(e){return e},Xi=function(e){return e},ct=function(e){return e},Bb={$:1},Fb=Bb,Vb=$(function(e,r){var n=e,a=Un(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(Ya,r.bH,r.aJ),u=l;return{by:Gr(u),eu:n,bF:Hr(u),cD:0,bU:Wr(u),cT:2,fU:t,fY:i,c$:c}}),Qi=function(e){return o(Vb,wu(!0),{aJ:e.aJ,bH:e.bH,dY:ra(e.dY)})},Jo=$(function(e,r){return{$:0,a:e,b:r}}),lt=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ut=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Ub=vr({fU:-1,fY:0,c$:0}),Eb=vr({fU:0,fY:-1,c$:0}),Rb=Ge(function(e,r,n,a,t,i){var c=o(lt,n,i)?zo:bu,l=o(lt,r,t)?go:Eb,u=o(lt,e,a)?Fl:Ub,v=B(Ue(o($r,e,a)),Ue(o($r,r,t)),Ue(o($r,n,i))),s=p(me,o(ut,e,a),o(ut,r,t),o(ut,n,i)),d=sr({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),Yb=$(function(e,r){return _e(Rb,Dr(e),Ar(e),Br(e),Dr(r),Ar(r),Br(r))}),xu=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Jo,e,o(Yb,p(Tt,-c,-l,-u),p(Tt,c,l,u)))}),jb=L(un,211/255,215/255,207/255,1),vt=function(e){return p(hl,0,1,e<=.04045?e/12.92:o(vn,(e+.055)/1.055,2.4))},Nb=function(e){var r=fo(e),n=r.cG,a=r.b7,t=r.b1;return p(Fn,vt(n),vt(a),vt(t))},Su=function(e){return p(hu,0,Et(Nb(e)),Et(0))},Cu=$(function(e,r){return{$:2,a:e,b:r}}),qo=function(e){return{$:5,a:e}},Lu=$(function(e,r){return{$:4,a:e,b:r}}),Pu=$(function(e,r){return{$:3,a:e,b:r}}),zu=$(function(e,r){return{$:1,a:e,b:r}}),Wb=x(function(e,r,n){return{fU:e,fY:r,c$:n}}),Yn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c$:a.c$+n.c$}}),Hb=$(function(e,r){return sr({cu:o(Yn,e,fn(r)),cZ:Yr(r),c_:jr(r),c0:Nr(r)})}),Gb=$(function(e,r){return{eo:o(Hb,e,ko(r)),aK:Fo(r)}}),Oo=$(function(e,r){return{eF:r,cu:e}}),Ib=$(function(e,r){var n=r;return o(Oo,o(Yn,e,n.cu),n.eF)}),Jb=$(function(e,r){var n=r;return{k:o(Ib,e,n.k),e6:n.e6,fs:n.fs}}),qb=function(e){return e},ku=$(function(e,r){var n=Wo(r),a=n.a,t=n.b;return qb(z(e(a),e(t)))}),Ob=$(function(e,r){return o(ku,Yn(e),r)}),Mu=$(function(e,r){return{ev:r,fs:Ue(e)}}),Zb=$(function(e,r){return o(Mu,Go(r),o(Yn,e,Ho(r)))}),Tu=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),Kb=$(function(e,r){return o(Tu,Yn(e),r)}),Du=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Wb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Jo,s,o(Gb,i,c));case 1:var s=r.a,l=r.b;return o(zu,s,o(Kb,i,l));case 3:var s=r.a,u=r.b;return o(Pu,s,o(Zb,i,u));case 2:var s=r.a,v=r.b;return o(Cu,s,o(Jb,i,v));case 4:var s=r.a,d=r.b;return o(Lu,s,o(Ob,i,d));default:var m=r.a;return qo(o(ee,Du(B(n,a,t)),m))}}),Au=function(e){return Du(B(0,e,0))},Xb=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ua,e,r.av))}),Qb=$(function(e,r){return o(or,0,Ra(o(Ea,Xb(e),r)))}),e3=$(function(e,r){return o(Qb,e,r.ey)}),r3=e3,n3=function(e){return qo(e)},a3=U(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(un,f,m,d,a)}),t3=x(function(e,r,n){return L(a3,e,r,n,1)}),ca=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=tn(c),v=a.eF,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,y=g*g,_=1-2*(f+y),C=s.c$*u,M=l*C,j=2*(w-M),R=2*(w+M),E=d*C,Y=2*(E+b),N=2*(E-b),F=g*C,Z=2*(F-m),X=2*(F+m),oe=C*C,ve=1-2*(y+oe),te=1-2*(f+oe);return{fU:ve*i.fU+j*i.fY+Y*i.c$,fY:R*i.fU+te*i.fY+Z*i.c$,c$:N*i.fU+X*i.fY+_*i.c$}}),jn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=tn(c),v=a.cu,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c$-s.c$,g=a.eF,b=g,w=b.fU*u,y=l*w,_=w*w,C=b.fY*u,M=l*C,j=w*C,R=C*C,E=1-2*(_+R),Y=b.c$*u,N=l*Y,F=2*(j-N),Z=2*(j+N),X=w*Y,oe=2*(X+M),ve=2*(X-M),te=C*Y,de=2*(te-y),Me=2*(te+y),Ce=Y*Y,pr=1-2*(R+Ce),br=1-2*(_+Ce);return{fU:s.fU+pr*d+F*m+oe*f,fY:s.fY+Z*d+br*m+de*f,c$:s.c$+ve*d+Me*m+E*f}}),o3=x(function(e,r,n){return sr({cu:p(jn,e,r,fn(n)),cZ:p(ca,e,r,Yr(n)),c_:p(ca,e,r,jr(n)),c0:p(ca,e,r,Nr(n))})}),i3=x(function(e,r,n){return{eo:p(o3,e,r,ko(n)),aK:Fo(n)}}),c3=$(function(e,r){var n=o(jn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(Oo,n(i.cu),a(i.eF))}}),l3=x(function(e,r,n){var a=n;return{k:p(c3,e,r,a.k),e6:a.e6,fs:a.fs}}),u3=x(function(e,r,n){return o(ku,o(jn,e,r),n)}),v3=x(function(e,r,n){return o(Mu,Go(n),p(jn,e,r,Ho(n)))}),$3=x(function(e,r,n){return o(Tu,o(jn,e,r),n)}),Bu=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Jo,l,p(i3,e,r,a));case 1:var l=n.a,t=n.b;return o(zu,l,p($3,e,r,t));case 3:var l=n.a,i=n.b;return o(Pu,l,p(v3,e,r,i));case 2:var l=n.a,c=n.b;return o(Cu,l,p(l3,e,r,c));case 4:var l=n.a,u=n.b;return o(Lu,l,p(u3,e,r,u));default:var v=n.a;return qo(o(ee,o(Bu,e,r),v))}}),f3=o(Oo,Bn,Po),s3=$(function(e,r){return p(Bu,f3,wr(e),r)}),d3=function(e){var r=o(Je,"period",e),n=o(r3,"number of blocks",e),a=o(Je,"minWidth",e),t=o(Se,a,o(Je,"maxWidth",e)),i=o(Je,"frequency",e),c=80/n,l=function(m){return i*m/n},u=function(m){return L(Mt,a,t,r,e.bA+l(m))},v=function(m){return .004*r*m},s=function(m){return p(t3,L(Mt,0,1,3,e.bA+v(m)),.65,.7)},d=function(m){return o(s3,.1*u(m),o(Au,m*c,o(xu,Su(s(m)),B(u(m),.9*c,u(m)))))};return n3(o(ee,d,o(Vr,-(n/2|0),n/2|0)))},m3=$(function(e,r){return h([d3(e),o(Au,-33,o(xu,Su(jb),B(300,1,300)))])}),ec=function(e){var r=e;return r},p3=function(e){e:for(;;){if(_r(e.di,er)&&_r(e.dj,er))return Te;if(o(bl,Ue(e.di),Ue(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:Ca(e.ee)};e=r;continue e}else{var n=q(ec(e.dj)/nn),a=q(ec(e.di)/nn),t=He(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(Ya,Hl(1),e.aJ),v=u;return{by:a*Gr(v),eu:!1,bF:a*Hr(v),cD:n/a,bU:a*Wr(v),cT:3,fU:i,fY:c,c$:l}}}},b3=function(e){return p3({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(Io,wr(e.bx),wr(e.bD))})},g3=$(function(e,r){var n=bb({bx:o(Je,"azimuth for third light",e),aJ:Hm(Ab(2e3)),bD:o(Je,"elevation for third light",e),bH:ct(o(vn,10,o(Je,"lux",e)))}),a=Qi({aJ:it,bH:Xi(6e3),dY:{fU:-45,fY:-30,c$:45}}),t=b3({bx:o(Je,"azimuth for fourth light",e),aJ:it,bD:o(Je,"elevation for fourth light",e),di:ct(o(Je,"intensity above",e)),dj:ct(o(Je,"intensity below",e))}),i=Qi({aJ:Db,bH:Xi(6e3),dY:{fU:-45,fY:30,c$:45}});return o(db,{el:Fb,ep:mb,es:Nm(e),ex:.1,b5:e.b5,eM:hb(6),e8:L(Lb,i,a,n,t),cM:e.cM,fK:Tb,fR:it},o(m3,e,r))}),h3=L(pm,g3,xm,ym,bm);const _3={Main:{init:h3(o(D,function(e){return De({e0:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({bA:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",$e))},o(T,"devicePixelRatio",$e))},o(T,"dt",$e))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",K))},o(T,"control",K))},o(T,"down",K))},o(T,"downs",pa(Pn)))},o(T,"left",K))},o(T,"pressedKeys",pa(Pn)))},o(T,"right",K))},o(T,"shift",K))},o(T,"up",K))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",K))},o(T,"isDown",K))},o(T,"move",K))},o(T,"rightDown",K))},o(T,"rightUp",K))},o(T,"up",K))},o(T,"x",$e))},o(T,"y",$e))))},o(T,"screen",o(D,function(r){return o(D,function(n){return De({eV:n,fS:r})},o(T,"height",$e))},o(T,"width",$e))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return De({eC:r,eD:e})},o(T,"deltaX",$e))},o(T,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},w3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},y3=()=>{$t("pointerdown"),$t("wheel"),$t("keydown")},$t=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},x3=_3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});y3();w3(x3);
