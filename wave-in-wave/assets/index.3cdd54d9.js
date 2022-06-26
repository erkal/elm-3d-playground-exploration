const ju=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};ju();function hr(e,r,n){return n.a=e,n.f=r,n}function $(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ge(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function za(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Nt(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ht(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ka(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Nu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Hu=[];function Wu(e){return e.length}var Gu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Xu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Iu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Uu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ju()),r});function Ju(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=ft(e,r,0,a);t&&(n=a.pop());t=ft(n.a,n.b,0,a));return t}function ft(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=vi(e),r=vi(r));for(var t in e)if(!ft(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Ou=$(function(e,r){var n=J(e,r);return n<0?Pc:n?Df:Lc}),kn=0;function P(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ze(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var Yu=$(nr);function h(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function Ma(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var qu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Ge(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Ma(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Ma(r).sort(function(n,a){var t=o(e,n,a);return t===Lc?0:t===Pc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Zu=$(Math.pow);$(function(e,r){return r%e});var Ku=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Qu=Math.PI,ev=Math.cos,rv=Math.sin,nv=Math.tan;$(Math.atan2);function av(e){return e}function tv(e){return e===1/0||e===-1/0}var ov=Math.ceil,iv=Math.floor,cv=Math.round,lv=Math.sqrt,qo=Math.log,uv=isNaN;function vv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var $v=$(function(e,r){return e+r});function fv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:re(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function sv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function dv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var mv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),pv=$(function(e,r){return r.split(e)}),bv=$(function(e,r){return r.join(e)}),gv=x(function(e,r,n){return n.slice(e,r)});function hv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var _v=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),wv=$(function(e,r){return r.indexOf(e)>-1}),yv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var xv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function rc(e){return e+""}function Sv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:re(n==45?-r:r)}function Tv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?re(r):Y}function Cv(e){return Ma(e).join("")}function Lv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Pv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function zv(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var kv=Wt(function(e){return typeof e=="boolean"?ue(e):qe("a BOOL",e)}),Mv=Wt(function(e){return typeof e=="number"?ue(e):qe("a FLOAT",e)}),Dv=Wt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):qe("a STRING",e)});function Av(e){return{$:3,b:e}}var Bv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Fv=$(function(e,r){return{$:10,b:r,h:e}}),Vv=$(function(e,r){return _r(e,[r])}),Ev=x(function(e,r,n){return _r(e,[r,n])});E(function(e,r,n,a){return _r(e,[r,n,a])});he(function(e,r,n,a,t){return _r(e,[r,n,a,t])});Ge(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});za(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Nt(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(eo,"This is not valid JSON! "+a.message,r))}});var nc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):qe("null",r);case 3:return Gn(r)?Zo(e.b,r,h):qe("a LIST",r);case 4:return Gn(r)?Zo(e.b,r,Rv):qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return qe("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ue(v)?v:ye(o($i,n,v.a));case 7:var a=e.e;if(!Gn(r))return qe("an ARRAY",r);if(a>=r.length)return qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ue(v)?v:ye(o(zc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ue(v))return ye(o($i,i,v.a));t=nr(P(i,v.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ue(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Ue(v)?je(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ue(v))return v;s=nr(v.a,s)}return ye(Af(Be(s)));case 1:return ye(o(eo,e.a,r));case 0:return ue(e.a)}}function Zo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ue(c))return ye(o(zc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Rv(e){return o(qf,e.length,function(r){return e[r]})}function qe(e,r){return ye(o(eo,"Expecting "+e,r))}function Ur(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ur(e.b,r.b);case 6:return e.d===r.d&&Ur(e.b,r.b);case 7:return e.e===r.e&&Ur(e.b,r.b);case 9:return e.f===r.f&&Ko(e.g,r.g);case 10:return e.h===r.h&&Ur(e.b,r.b);case 11:return Ko(e.g,r.g)}}function Ko(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ur(e[a],r[a]))return!1;return!0}var jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ac(e){return e}x(function(e,r,n){return n[e]=r,n});function Vr(e){return{$:0,a:e}}function Nv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var st=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Hv(e){return{$:5,b:e}}var Wv=0;function Gt(e){var r={$:0,e:Wv++,f:e,g:null,h:[]};return Xt(r),r}function tc(e){return fr(function(r){r(Vr(Gt(e)))})}function oc(e,r){e.h.push(r),Xt(e)}var Gv=$(function(e,r){return fr(function(n){oc(e,r),n(Vr(kn))})}),Ia=!1,Qo=[];function Xt(e){if(Qo.push(e),!Ia){for(Ia=!0;e=Qo.shift();)Xv(e);Ia=!1}}function Xv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Xt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return It(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function It(e,r,n,a,t,i){var c=o(nc,e,r?r.flags:void 0);Ue(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Iv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ri(l,b.b,t(v))}return ri(l,u.b,t(v)),d?{ports:d}:{}}var er={};function Iv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Jv(t,r)}return n}function Uv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Jv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(st,l,Hv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o(st,l,e.b))}var Ov=$(function(e,r){return fr(function(n){e.g(r),n(Vr(kn))})});$(function(e,r){return o(Gv,e.h,{$:0,a:r})});function ic(e){return function(r){return{$:1,k:e,l:r}}}function Yv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ei=[],Ua=!1;function ri(e,r,n){if(ei.push({p:e,q:r,r:n}),!Ua){Ua=!0;for(var a;a=ei.shift();)qv(a.p,a.q,a.r);Ua=!1}}function qv(e,r,n){var a={};la(!0,r,a,null),la(!1,n,a,null);for(var t in e)oc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function la(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Zv(e,t,a,r.l);n[t]=Kv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)la(e,c.a,n,a);return;case 3:la(e,r.o,n,{s:r.n,t:a});return}}function Zv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function Kv(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function Qv(e){er[e]&&nn(3)}$(function(e,r){return r});function e$(e,r){return Qv(e),er[e]={f:r$,u:r,a:n$},ic(e)}var r$=$(function(e,r){return function(n){return e(r(n))}});function n$(e,r){var n=L,a=er[e].u,t=Vr(null);er[e].b=t,er[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(nc,a,c);Ue(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ua,lr=typeof document!="undefined"?document:{};function Ut(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var cc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Jt(n),e:t,f:e,b:i}})}),sr=cc(void 0),a$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Jt(n),e:t,f:e,b:i}})}),t$=a$(void 0);function o$(e,r,n,a){return{$:3,d:Jt(e),g:r,h:n,i:a}}var i$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return wr([e,r],function(){return e(r)})});x(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ge(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});za(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return Ht(e,r,n,a,t,i,c,l)})});Nt(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return ka(e,r,n,a,t,i,c,l,u)})});var lc=$(function(e,r){return{$:"a0",n:e,o:r}}),c$=$(function(e,r){return{$:"a1",n:e,o:r}}),uc=$(function(e,r){return{$:"a2",n:e,o:r}}),Mn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function l$(e){return e=="script"?"p":e}function u$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(lc,r.n,v$(e,r.o)):r});function v$(e,r){var n=oo(r);return{$:r.$,a:n?p(Zf,n<3?$$:f$,Me(e),r.a):o(sa,e,r.a)}}var $$=$(function(e,r){return P(e(r.a),r.b)}),f$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Jt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ni(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ni(c,t,i):c[t]=i}return r}function ni(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return mt(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);ua&&e.c=="a"&&c.addEventListener("click",ua(c)),mt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ut(c,br(n===1?l[u]:l[u].b,r));return c}function mt(e,r,n){for(var a in n){var t=n[a];a==="a1"?s$(e,t):a==="a0"?p$(e,r,t):a==="a3"?d$(e,t):a==="a4"?m$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function s$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function d$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function m$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function p$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=b$(r,i),e.addEventListener(t,c,Ot&&{passive:oo(i)<2}),a[t]=c}}var Ot;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ot=!0}}))}catch{}function b$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ue(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function g$(e,r){return e.$==r.$&&Ur(e.a,r.a)}function vc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=C$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!h$(d,m):d!==m)&&_e(n,2,a,m),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ai(e,r,n,a,_$);return;case 2:ai(e,r,n,a,w$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Yt(e.d,r.d);w&&_e(n,4,a,w);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function h$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ai(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Yt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Yt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Yt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&g$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function _$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function w$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,_=g.b,T=b.b,M=void 0,H=void 0;if(w===y){f++,Je(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;H=y===N}if(R){var F=R.a,q=R.b;M=w===F}if(M&&H){f++,Je(_,q,t,f),vn(i,t,w,T,m,c),f+=_.b||0,f++,$n(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(M){f++,vn(i,t,y,T,m,c),Je(_,q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(H){f++,$n(i,t,w,_,f),f+=_.b||0,f++,Je(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,$n(i,t,w,_,f),vn(i,t,y,T,m,c),f+=_.b||0,f++,Je(W,q,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];vn(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&_e(n,8,a,{w:t,x:c,y:K})}var $c="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+$c,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}$n(e,r,n+$c,a,t)}function fc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)fc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=fn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function sc(e,r,n,a){return n.length===0?e:(fc(e,r,n,a),va(e,n))}function va(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=y$(t,a);t===e&&(e=i)}return e}function y$(e,r){switch(r.$){case 0:return x$(e,r.s,r.u);case 4:return mt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return va(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=va(e,i.w),e;case 8:return S$(e,r);case 5:return r.s(e);default:nn(10)}}function x$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function S$(e,r){var n=r.s,a=T$(n.y,r);e=va(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ut(e,a),e}function T$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ut(n,i.c===2?i.s:br(i.z,r.u))}return n}}function qt(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(Mn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=nr(qt(v[a]),u);return p(sr,l,r,u)}function C$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var L$=E(function(e,r,n,a){return It(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=qt(l);return dc(i,function(v){var s=c(v),d=vc(u,s);l=sc(l,u,d,t),u=s})})});E(function(e,r,n,a){return It(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=lr.title,v=lr.body,s=qt(v);return dc(i,function(d){ua=c;var m=l(d),f=sr("body")(L)(m.er),g=vc(s,f);v=sc(v,s,g,t),s=f,ua=0,u!==m.fI&&(lr.title=u=m.fI)})})});var $a=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function dc(e,r){r(e);var n=0;function a(){n=n===1?0:($a(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&$a(a),n=2)}}$(function(e,r){return o(lo,io,fr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(lo,io,fr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(lo,io,fr(function(){history.replaceState({},"",r),e()}))});var P$={addEventListener:function(){},removeEventListener:function(){}},z$=typeof window!="undefined"?window:P$;x(function(e,r,n){return tc(fr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Ot&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ue(n)?re(n.a):Y});function mc(e,r){return fr(function(n){$a(function(){var a=document.getElementById(e);n(a?Vr(r(a)):Nv(Qf(e)))})})}function k$(e){return fr(function(r){$a(function(){r(Vr(e()))})})}$(function(e,r){return mc(r,function(n){return n[e](),kn})});$(function(e,r){return k$(function(){return z$.scroll(e,r),kn})});x(function(e,r,n){return mc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,kn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var M$=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return re(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var D$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):Y}a.push(C(ll,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):Y}return n(C(ll,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ti=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var A$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},B$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),F$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),V$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),E$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),R$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),j$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),N$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),H$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),W$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),G$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},X$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},I$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},U$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},bc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},J$=function(e){e.gl.disable(e.gl.CULL_FACE)},O$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Y$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},q$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},oi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Z$=[X$,I$,U$,pc,bc,J$,O$,Y$,q$];function ii(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function K$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Q$(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[y]:w[y][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][y]:w[T][y][_]})}var u=gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Zt(n.b)*s);Sn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function ef(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=rf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*Zt(r.b),indexBuffer:null,buffers:{}}}function rf(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ci(e,r){return e+"#"+r}var hc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),pc(n),bc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ci(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ti++,v||(v=ii(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ti++,s||(s=ii(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=K$(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=nf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ci(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),af(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=ef(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Q$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,y*T)}for(n.toggle=!n.toggle,Sn(o0(n),i.a),u=0;u<oi.length;u++){var M=n[oi[u]];M.toggle!==n.toggle&&M.enabled&&(Z$[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Sn(t,e.g),r});function nf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(_);T||(T=_.eA(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function af(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var tf=x(function(e,r,n){return o$(r,{g:n,f:{},h:e},ff,sf)}),of=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),cf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),lf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),uf=$(function(e,r){e.contextAttributes.antialias=!0}),vf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),$f=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function ff(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(t0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),A$(function(){return o(hc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function sf(e,r){return r.f=e.f,hc(r)}var df=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/mf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function mf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Kt=new Float64Array(3),li=new Float64Array(3),ui=new Float64Array(3),pf=x(function(e,r,n){return new Float64Array([e,r,n])}),bf=function(e){return e[0]},gf=function(e){return e[1]},hf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var _f=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(_c);function wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),fa(_c(e,r,n),n)}$(wc);function yc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function fa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/yc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var wf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(pt);$(function(e,r){var n,a=Kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var yf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var xf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},Sf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Tf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Tf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Cf=new Float64Array(16),Lf=new Float64Array(16),Pf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},zf=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ge(xc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return xc(c,l,i,t,n,a)});function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ge(Sc);E(function(e,r,n,a){return Sc(e,r,n,a,-1,1)});function Tc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],_=e[15],T=r[0],M=r[1],H=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],q=r[8],K=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],ze=r[14],Ce=r[15];return n[0]=a*T+l*M+d*H+b*j,n[1]=t*T+u*M+m*H+w*j,n[2]=i*T+v*M+f*H+y*j,n[3]=c*T+s*M+g*H+_*j,n[4]=a*R+l*N+d*W+b*F,n[5]=t*R+u*N+m*W+w*F,n[6]=i*R+v*N+f*W+y*F,n[7]=c*R+s*N+g*W+_*F,n[8]=a*q+l*K+d*oe+b*ve,n[9]=t*q+u*K+m*oe+w*ve,n[10]=i*q+v*K+f*oe+y*ve,n[11]=c*q+s*K+g*oe+_*ve,n[12]=a*te+l*se+d*ze+b*Ce,n[13]=t*te+u*se+m*ze+w*Ce,n[14]=i*te+v*se+f*ze+y*Ce,n[15]=c*te+s*se+g*ze+_*Ce,n}$(Tc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],_=r[4],T=r[5],M=r[6],H=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*T+v*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*H+c*j+v*R,n[9]=t*H+l*j+s*R,n[10]=i*H+u*j+d*R,n[11]=0,n[12]=a*N+c*W+v*F+m,n[13]=t*N+l*W+s*F+f,n[14]=i*N+u*W+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=fa(r,Kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/yc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=g+f,T=b-m,M=g-f,H=c*c*v+u,j=w+d,R=b+m,N=w-d,W=l*l*v+u,F=n[0],q=n[1],K=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],ze=n[7],Ce=n[8],dr=n[9],mr=n[10],Xa=n[11],Fu=n[12],Vu=n[13],Eu=n[14],Ru=n[15];return a[0]=F*y+ve*_+Ce*T,a[1]=q*y+te*_+dr*T,a[2]=K*y+se*_+mr*T,a[3]=oe*y+ze*_+Xa*T,a[4]=F*M+ve*H+Ce*j,a[5]=q*M+te*H+dr*j,a[6]=K*M+se*H+mr*j,a[7]=oe*M+ze*H+Xa*j,a[8]=F*R+ve*N+Ce*W,a[9]=q*R+te*N+dr*W,a[10]=K*R+se*N+mr*W,a[11]=oe*R+ze*N+Xa*W,a[12]=Fu,a[13]=Vu,a[14]=Eu,a[15]=Ru,a});function kf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(kf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Mf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Mf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=wc(e,r,Kt),t=fa(pt(n,a,li),li),i=fa(pt(a,t,ui),ui),c=Cf,l=Lf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Tc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=Yu,Xn=Uu,Cc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Xn,e,l,v)}else{var u=c.a;return p(Xn,i,l,u)}});return p(Xn,i,p(Xn,e,r,t),a)}),Qt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),vi=function(e){return p(Qt,x(function(r,n,a){return o(k,P(r,n),a)}),L,e)},Lc=1,Df=2,Pc=0,ye=function(e){return{$:1,a:e}},eo=$(function(e,r){return{$:3,a:e,b:r}}),$i=$(function(e,r){return{$:0,a:e,b:r}}),zc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Af=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},Y={$:1},Bf=_v,Ff=jv,Ae=rc,Tr=$(function(e,r){return o(bv,e,Ma(r))}),ro=$(function(e,r){return h(o(pv,e,r))}),kc=function(e){return o(Tr,`
    `,o(ro,`
`,e))},Dn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Dr=function(e){return p(Dn,$(function(r,n){return n+1}),0,e)},Vf=qu,Ef=x(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Ar=$(function(e,r){return p(Ef,e,r,L)}),Mc=$(function(e,r){return p(Vf,e,o(Ar,0,Dr(r)-1),r)}),rr=Lv,Dc=function(e){var r=rr(e);return 97<=r&&r<=122},Ac=function(e){var r=rr(e);return r<=90&&65<=r},Rf=function(e){return Dc(e)||Ac(e)},jf=function(e){var r=rr(e);return r<=57&&48<=r},Nf=function(e){return Dc(e)||Ac(e)||jf(e)},Be=function(e){return p(Dn,k,L,e)},an=fv,Hf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+kc(Wf(r))))}),Wf=function(e){return o(Gf,e,L)},Gf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Rf(y)&&o(Bf,Nf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Dr(s))+" ways:"));return o(Tr,`

`,o(k,g,o(Mc,Hf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(kc(o(Ff,4,f))+(`

`+m))}}),Fe=32,bt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gt=Hu,no=ov,ao=$(function(e,r){return qo(r)/qo(e)}),Xf=av,Tn=no(o(ao,2,Fe)),Bc=C(bt,0,Tn,gt,gt),Fc=Gu,Vc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ec=iv,ht=Wu,Te=$(function(e,r){return J(e,r)>0?e:r}),If=function(e){return{$:0,a:e}},to=Xu,Uf=$(function(e,r){e:for(;;){var n=o(to,Fe,e),a=n.a,t=n.b,i=o(k,If(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Jf=function(e){var r=e.a;return r},Of=$(function(e,r){e:for(;;){var n=no(r/Fe);if(n===1)return o(to,Fe,e).a;var a=o(Uf,e,L),t=n;e=a,r=t;continue e}}),Rc=$(function(e,r){if(r.l){var n=r.l*Fe,a=Ec(o(ao,Fe,n-1)),t=e?Be(r.z):r.z,i=o(Of,t,r.l);return C(bt,ht(r.p)+n,o(Te,5,a*Tn),i,r.p)}else return C(bt,ht(r.p),Tn,gt,r.p)}),Yf=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Rc,!1,{z:a,l:n/Fe|0,p:t});var i=Vc(p(Fc,Fe,r,e)),c=e,l=r-Fe,u=n,v=o(k,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),qf=$(function(e,r){if(e<=0)return Bc;var n=e%Fe,a=p(Fc,n,e-n,r),t=e-n-Fe;return S(Yf,r,t,e,L,a)}),Ue=function(e){return!e.$},A=Fv,Z=kv,D=Bv,$e=Mv,sa=Vv,Zf=Ev,Me=zv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=sr("div"),Kf=function(e){return{$:2,a:e}},jc=$(function(e,r){return e}),Nc=$(function(e,r){return{bA:r.bA,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),Lr=function(e){return e},Qf=Lr,fi=Ge(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),es=wv,Cr=sv,Jr=gv,An=$(function(e,r){return e<1?r:p(Jr,e,Cr(r),r)}),Da=xv,Aa=function(e){return e===""},Ba=$(function(e,r){return e<1?"":p(Jr,0,e,r)}),Hc=Sv,si=he(function(e,r,n,a,t){if(Aa(t)||o(es,"@",t))return Y;var i=o(Da,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Hc(o(An,c+1,t));if(l.$===1)return Y;var u=l;return re(we(fi,e,o(Ba,c,t),u,r,n,a))}else return re(we(fi,e,t,Y,r,n,a))}),di=E(function(e,r,n,a){if(Aa(a))return Y;var t=o(Da,"/",a);if(t.b){var i=t.a;return S(si,e,o(An,i,a),r,n,o(Ba,i,a))}else return S(si,e,"/",r,n,a)}),mi=x(function(e,r,n){if(Aa(n))return Y;var a=o(Da,"?",n);if(a.b){var t=a.a;return C(di,e,re(o(An,t+1,n)),r,o(Ba,t,n))}else return C(di,e,Y,r,n)});$(function(e,r){if(Aa(r))return Y;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(mi,e,re(o(An,a+1,r)),o(Ba,a,r))}else return p(mi,e,Y,r)});var rs=yv,io=function(e){},Bn=Vr,ns=Bn(0),Wc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Dn,e,r,Be(d)):C(Wc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=x(function(e,r,n){return C(Wc,e,r,0,n)}),ee=$(function(e,r){return p(or,$(function(n,a){return o(k,e(n),a)}),L,r)}),da=st,co=$(function(e,r){return o(da,function(n){return Bn(e(n))},r)}),as=x(function(e,r,n){return o(da,function(a){return o(da,function(t){return Bn(o(e,a,t))},n)},r)}),ts=function(e){return p(or,as(k),Bn(L),e)},os=Ov,is=$(function(e,r){var n=r;return tc(o(da,os(e),n))}),cs=x(function(e,r,n){return o(co,function(a){return 0},ts(o(ee,is(e),r)))}),ls=x(function(e,r,n){return Bn(0)}),us=$(function(e,r){var n=r;return o(co,e,n)});er.Task=Uv(ns,cs,ls,us);var vs=ic("Task"),lo=$(function(e,r){return vs(o(co,e,r))}),$s=L$,fs=vv,ma={$:1},Gc=function(e){return{$:2,a:e}},Fa={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},ss=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ne,r,{B:i,ab:c,T:o(k,a,n)}))}else return Y},Xc=function(e){var r=e.b;return o(Ne,Fa,r)},ar=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ds=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?Xc(n):n;case 2:var i=a.a.cR;return(J(i+r.eH,tn(n).bA)>0?o(ae,ss,ar(o(Ne,ma,t))):Lr)(o(Ne,Gc({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Nc,l.ey,Ze(r,{bA:l.bA+r.eH})),s=o(e,v,u);return o(Ne,Fa,{B:P(v,s),ab:L,T:o(k,t.B,t.T)})}}),Ic=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ms=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),ps=$(function(e,r){return Be(p(ms,e,r,L))}),Uc=x(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(ps,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(Uc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),bs=$(function(e,r){return p(Uc,0,e,r)}),gs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(h([a]),t)),c=o(bs,e,i),l=o(Ic,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,ma,{B:u,ab:v,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(Ne,ma,{B:d,ab:L,T:m})}else return r}}),hs=function(e){var r=e.b;return o(Ne,ma,r)},_s=function(e){var r=e.b;return o(Ne,Gc({cR:tn(e).bA}),r)},ws=$(function(e,r){switch(e.$){case 1:return hs(r);case 2:return Xc(r);case 3:return _s(r);default:var n=e.a;return o(gs,n,r)}}),Jc=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),ys=$(function(e,r){return Ze(r,{av:e(r.av)})}),xs=function(e){return{$:3,a:e}},Ss=function(e){return{$:2,a:e}},Oc=$(function(e,r){return{$:0,a:e,b:r}}),Yc=$(function(e,r){return{$:1,a:e,b:r}}),xe=$(function(e,r){if(r.$)return Y;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},uo=Tv,Ts=x(function(e,r,n){return o(ar,0/0,uo(o(e,r,n)))}),qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Cs=mv,Zc=function(e){return p(Cs,k,L,e)},Ls=$(function(e,r){var n=o(qc,function(a){return a!=="0"&&a!=="."},Zc(r));return le(e&&n?"-":"",r)}),me=rc,_t=$v,Kc=Pv,Qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(_t,"0",Qc(t))}else{var i=rr(r);return i>=48&&i<57?o(_t,Kc(i+1),n):"0"}},wt=tv,Ps=uv,Va=function(e){return o(_t,e,"")},el=x(function(e,r,n){return e<=0?n:p(el,e>>1,le(r,r),e&1?le(n,r):n)}),Cn=$(function(e,r){return p(el,e,r,"")}),yt=x(function(e,r,n){return le(n,o(Cn,e-Cr(n),Va(r)))}),xt=dv,rl=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},zs=function(e){var r=o(ro,"e",me(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ar,0,Hc(o(rs,"+",t)?o(An,1,t):t)),c=rl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(ar,"0",o(xe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(xe,Jc(Va),an(le(o(Cn,O(i),"0"),v))))):p(yt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},ks=x(function(e,r,n){if(wt(n)||Ps(n))return me(n);var a=n<0,t=rl(zs(O(n))),i=t.a,c=t.b,l=Cr(i)+r,u=le(o(Cn,-l+1,"0"),p(yt,l,"0",le(i,c))),v=Cr(u),s=o(Te,1,l),d=o(e,a,p(Jr,s,v,u)),m=p(Jr,0,s,u),f=d?xt(o(ar,"1",o(xe,Qc,an(xt(m))))):m,g=Cr(f),b=f==="0"?f:r<=0?le(f,o(Cn,O(r),"0")):J(r,Cr(c))<0?p(Jr,0,g-r,f)+("."+p(Jr,g-r,g,f)):le(i+".",p(yt,r,"0",c));return o(Ls,a,b)}),bn=ks($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Ms=Ts(bn),Ds=x(function(e,r,n){var a=o(ao,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ms,t,n)}),nl=Ou,Ea=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(nl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},Kr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,y),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),St=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(nl,e,t);switch(u){case 0:return S(Kr,a,t,i,p(St,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Kr,a,t,i,c,p(St,e,r,l))}}),gn=x(function(e,r,n){var a=p(St,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),As=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},al=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,y))}else return e},pi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,y=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,y))}else return e},Bs=za(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,pi(r)}else break e;else return c.a,c.d,pi(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ea(t),l);var u=al(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,ea(m),f)}else return tr}else return S(X,r,n,a,ea(t),l)}else return tr},hn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(hn,e,i),c);var u=al(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Kr,v,s,d,o(hn,e,m),f)}else return tr}else return S(X,n,a,t,o(hn,e,i),c);else return o(Fs,e,Ht(Bs,e,r,n,a,t,i,c))}),Fs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=As(c);if(l.$===-1){var u=l.b,v=l.c;return S(Kr,n,u,v,i,ea(c))}else return tr}else return S(Kr,n,a,t,i,o(hn,e,c))}else return tr}),Vs=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),In=x(function(e,r,n){var a=r(o(Ea,e,n));if(a.$)return o(Vs,e,n);var t=a.a;return p(gn,e,t,n)}),Es=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(In,r,xe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Yc,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(In,r,xe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Oc,P(i,c),p(Ds,i,c,n))}));case 3:var r=e.a,n=e.b;return o(In,r,xe(function(a){return a.$===3?xs(n):a}));default:var r=e.a,n=e.b;return o(In,r,xe(function(a){return a.$===2?Ss(n):a}))}},Rs=function(e){return ys(Es(e))},js=$(function(e,r){return o(ee,Rs(e),r)}),Ns=$(function(e,r){return Ze(r,{ey:o(js,e,r.ey)})}),Hs=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ze(a,{B:o(Jc,Ns(e),a.B)}))}),Ws=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Gs=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ze(t,{B:o(Ws,o(e,i.a,r),i)}))}),Xs=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ze(a,{aL:!a.aL});case 2:var t=n.a;return Ze(a,{G:p(ds,e,t,a.G)});case 3:var i=n.a;return Ze(a,{G:o(Hs,i,a.G)});case 4:var c=n.a;return Ze(a,{G:p(Gs,r,c,a.G)});default:var l=n.a;return Ze(a,{G:o(ws,l,a.G)})}}),Is=$(function(e,r){return o(Ne,Fa,{B:P(e,r(e)),ab:L,T:L})}),Us=Yv,bi=Us(L),pa=Av,Ln=Dv,Js=e$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({bA:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Me({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",pa(Ln)))},o(D,"left",Z))},o(D,"pressedKeys",pa(Ln)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eV:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eB:r,eC:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),Os=function(e){return{$:4,a:e}},Ys={$:0},qs=ac,Xe=$(function(e,r){return o(uc,e,qs(r))}),U=Xe("className"),Zs=function(e){var r=e.b.B;return r.b},ba=Xe("id"),Ks=i$,ga=Ks,Qs=c$,ge=Qs,ed={$:1},rd=function(e){return{$:3,a:e}},nd=function(e){return{$:5,a:e}},gi=sr("a"),vo=sr("button"),ad=Mn("d"),tl=cc("http://www.w3.org/2000/svg"),td=tl("path"),od=tl("svg"),id=Mn("viewBox"),_n=function(e){return o(od,h([id("0 0 100 100"),o(ge,"width","100%"),o(ge,"height","100%")]),h([o(td,h([ad(e)]),L)]))},hi=function(e){return o(Xe,"href",u$(e))},Yr={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},cd=function(e){return{$:0,a:e}},ol=lc,il=$(function(e,r){return o(ol,e,cd(r))}),$o=function(e){return o(il,"click",Me(e))},_i=Xe("target"),ld=Xe("title"),Tt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Tt,e,i),o(Tt,e,c))}),ud=dt,be=ud,vd=function(e){return p(Qt,x(function(r,n,a){return o(k,n,a)}),L,e)},$d=$(function(e,r){return{$:3,a:e,b:r}}),fd=$(function(e,r){return{$:2,a:e,b:r}}),sd=$(function(e,r){return{$:0,a:e,b:r}}),dd=$(function(e,r){return{$:1,a:e,b:r}}),on=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),md=C(on,0/255,0/255,0/255,1),pd=ac,bd=$(function(e,r){return o(uc,e,pd(r))}),gd=bd("checked"),Oe=cv,hd=x(function(e,r,n){return le(o(Cn,e-Cr(n),Va(r)),n)}),ha=Ku,cl=function(e){var r=function(n){return n<10?Ae(n):Va(Kc(87+n))};return e<16?r(e):le(cl(e/16|0),r(o(ha,16,e)))},_d=o(ae,cl,o(hd,2,"0")),fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b1:a,b7:n,cG:r}},wd=function(e){var r=fo(e),n=r.cG,a=r.b7,t=r.b1;return o(Tr,"",o(k,"#",o(ee,o(ae,Oe,_d),h([n*255,a*255,t*255]))))},Ct=Xe("htmlFor"),Lt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),_a=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),yd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),Ra=$(function(e,r){return p(or,yd(e),L,r)}),ll=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),xd=D$,Sd=Cv,Td=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Cd=M$,Ld=function(e){return o(Cd,{et:!1,fc:!1},e)},ja=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return Y},Pd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),zd=function(e){return{$:2,a:e}},kd=function(e){return{$:0,a:e}},Md=function(e){return{$:1,a:e}},Ja=$(function(e,r){return rr(r)-rr(e)}),Oa=x(function(e,r,n){var a=rr(n);return J(rr(e),a)<1&&J(a,rr(r))<1}),Dd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Md(r))},a=p(Oa,"0","9",r)?ue(o(Ja,"0",r)):p(Oa,"a","z",r)?ue(10+o(Ja,"a",r)):p(Oa,"A","Z",r)?ue(10+o(Ja,"A",r)):ye(kd(r));return o(_a,n,a)}),ul=$(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(_a,function(c){return o(_a,function(l){return ue(c+l*e)},o(ul,e,i))},o(Dd,e,t))}),Ad=$(function(e,r){return 2<=e&&e<=36?o(ul,e,xt(r)):ye(zd(e))}),Bd=Ad(16),Fd=x(function(e,r,n){return C(on,e,r,n,1)}),Vd=E(function(e,r,n,a){return C(on,e,r,n,a)}),cn=Zu,Ed=$(function(e,r){var n=o(cn,10,e);return Oe(r*n)/n}),Rd=hv,jd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zc(n);if(a.b&&!a.b.b){var t=a.a;return Sd(h([t,t]))}else return n};return o(ae,Rd,o(ae,function(n){return o(xe,function(a){return p(xd,1,a,n)},Ld(e))},o(ae,Lt(ja),o(ae,xe(function(n){return n.fD}),o(ae,xe(Ra(Lr)),o(ae,Td("Parsing hex regex failed"),_a(function(n){var a=o(ee,o(ae,r,o(ae,Bd,Pd(Xf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Vd,t/255,c/255,u/255,o(Ed,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Fd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),wa=sr("input"),Pt=sr("label"),zt=Xe("name"),vl=$(function(e,r){return p(or,D,r,e)}),Nd=o(vl,h(["target","checked"]),Z),Hd=function(e){return o(il,"change",o(sa,e,Nd))},Wd=function(e){return P(e,!0)},Gd=function(e){return{$:1,a:e}},Xd=$(function(e,r){return o(ol,e,Gd(r))}),Id=o(vl,h(["target","value"]),Ln),so=function(e){return o(Xd,"input",o(sa,Wd,o(sa,e,Id)))},$l=Xe("max"),fl=Xe("min"),sl=function(e){return o(Xe,"step",e)},ya=Xe("type"),mo=Xe("value"),wi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,L,h([o(Pt,h([Ct(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([be(r)])),o(I,h([U("inline-block float-right")]),h([be(me(n))]))]))])),o(wa,h([ya("range"),o(ge,"width","100%"),ba(r),zt(r),fl(me(a)),$l(me(t)),mo(me(n)),sl(me(i)),so(o(ae,uo,o(ae,ar(42),c)))]),L)]))},Ud=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Jd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(Pt,h([Ct(e)]),h([be(e)]))])),o(wa,h([ya("checkbox"),ba(e),zt(e),Hd($d(e)),gd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return wi({b9:e,cl:i,cp:t,ct:sd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return wi({b9:e,cl:i,cp:t,ct:o(ae,Oe,dd(e)),cP:1,cW:c});default:var c=r.a;return o(I,L,h([o(I,h([o(ge,"margin-bottom","6px")]),h([o(Pt,h([Ct(e)]),h([be(e)]))])),o(wa,h([ya("color"),o(ge,"width","100%"),o(ge,"height","26px"),o(ge,"padding","0px"),ba(e),zt(e),so(function(l){return o(fd,e,o(Ud,md,jd(l)))}),mo(wd(c))]),L)]))}}),Od=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([be(e.fd)])),o(I,h([U("pl-2 pr-2")]),vd(o(Tt,Jd,e.av)))]))},Yd=function(e){return o(I,h([U("text-xs text-white60")]),o(ee,Od,e))},qd=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([be("clock: "+o(bn,3,tn(e).bA))]))},Zd=function(e){e.a;var r=e.b.T;return o(xe,function(n){return Oe(60/(tn(e).bA-n))},o(xe,o(ae,Jf,function(n){return n.bA}),ja(o(Ic,59,r))))},Kd=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Zd(e);if(r.$===1)return h([be("... Fps")]);var n=r.a;return h([be(Ae(n)+" Fps")])}())},Qd=function(e){return{$:0,a:e}},em=function(e){var r=e.b.T;return Dr(r)},rm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Dr(r)+1+Dr(n)},nm=function(e){return o(wa,h([U("absolute left-[100px] w-[490px]"),ya("range"),fl(Ae(0)),$l(Ae(rm(e)-1)),mo(Ae(em(e))),sl(Ae(1)),so(o(ae,uo,o(ae,ar(42),o(ae,Oe,Qd))))]),L)},yi={$:1},am={$:3},tm={$:2},dl=function(e){return!e.b},xi=$(function(e,r){return o(vo,h([U("px-2 bg-black40"),U(r),$o(e)]),h([be("REC")]))}),Si=$(function(e,r){return o(vo,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),$o(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([_n(e)]))]))}),om=function(e){var r=e.a,n=e.b.ab;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(xi,yi,"text-red-500 font-bold");case 1:return o(xi,tm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return dl(n)?o(I,L,L):o(Si,Yr.fm,am);default:return o(Si,Yr.fl,yi)}}()]))},im=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([nm(e),om(e),Kd(e),qd(e)]))},ml=function(e){return o(Tr,"",e)},cm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(or,t,L,a);return o(k,n,i)}else return L}),lm=function(e){var r=e.a;return gr(r,Fa)},yr=sr("p"),um=sr("pre"),vm=$(function(e,r){var n=lm(r.G)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(ge,"left",me(e.fn.fT+.5*e.cM.fR)+"px"),o(ge,"top",me(-e.fn.fX+.5*e.cM.eV)+"px")]),h([o(I,h([U(e.fn.e1?"fill-black80":"fill-white40")]),h([_n(Yr.fn)]))]));return o(I,L,h([n,o(um,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(yr,L,h([be("pressedKeys: "+ml(o(cm," ",e.e4.fo)))])),o(yr,L,h([be("delta time: "+o(bn,4,e.eH))])),o(yr,L,h([be("pointer is down: "+(e.fn.e1?"yes":"no"))])),o(yr,L,h([be("pointer.x: "+o(bn,2,e.fn.fT))])),o(yr,L,h([be("pointer.y: "+o(bn,2,e.fn.fX))])),o(yr,L,h([be("wheel deltaX: "+me(e.fP.eB))])),o(yr,L,h([be("wheel deltaY: "+me(e.fP.eC))]))]))]))}),$m=$(function(e,r){var n=o(vo,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),$o(ed),ld("Distraction Free Mode")]),h([_n(Yr.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(gi,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),hi("https://twitter.com/AzizErkalSelman"),_i("_blank")]),h([_n(Yr.fK)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(gi,h([U("fill-githubCat40 hover:fill-githubCat"),hi("https://github.com/erkal/elm-3d-playground-exploration"),_i("_blank")]),h([_n(Yr.eP)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(ga,rd,Yd(tn(r.G).ey))])),o(ga,nd,im(r.G)),o(vm,e,r)]))}),fm=x(function(e,r,n){var a=Zs(n.G),t=tn(n.G);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ge,"width",me(t.cM.fR)+"px"),o(ge,"height",me(t.cM.eV)+"px")]),h([o(I,h([U("fixed")]),h([o(ga,jc(Ys),o(e,t,a))])),o(I,h([ba("gui")]),h([o($m,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(ga,Os,o(r,t,a))]))]))]))}),sm=Ge(function(e,r,n,a,t,i){var c=$(function(u,v){return P(C(Xs,r,i,u,v),bi)}),l=function(u){var v=o(Nc,n,u.e0);return P({aL:u.e0.cM.fR<500,G:o(Is,v,a)},bi)};return $s({e$:l,fE:jc(Js(Kf)),fL:c,fO:o(fm,e,t)})}),dm=E(function(e,r,n,a){return we(sm,e,r,n,a,$(function(t,i){return o(I,L,L)}),x(function(t,i,c){return c}))}),mm=function(e){return{}},pm=x(function(e,r,n){return{av:n,e2:r,fd:e}}),pl=tr,bm=function(e){return p(Dn,$(function(r,n){var a=r.a,t=r.b;return p(gn,a,t,n)}),pl,e)},gm=x(function(e,r,n){return p(pm,e,r,bm(n))}),Ti=gm,xr=x(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Oc,P(a,t),n))}),hm=x(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Yc,P(a,t),n))}),_m=h([p(Ti,"Parameters",!0,h([p(hm,"number of blocks",P(10,60),25),p(xr,"frequency",P(1,20),10),p(xr,"minWidth",P(0,45),35),p(xr,"maxWidth",P(10,50),37),p(xr,"period",P(.5,10),5)])),p(Ti,"Colors and light",!0,h([p(xr,"lux",P(2,5),5),p(xr,"intensity above",P(0,300),0),p(xr,"intensity below",P(0,300),0)]))]),wm=$(function(e,r){return r}),Qr=Qu,Br=function(e){return e},dn=function(e){return Br(Qr*(e/180))},pr=lv,ym=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(Te,O(c),o(Te,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=pr(s*s+v*v+u*u);return re({fT:s/d,fX:v/d,c$:u/d})}else return Y}),ra=function(e){return e},po=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),na=function(e){var r=e,n=o(Te,O(r.fT),o(Te,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c$:a/c})}else return Y},xa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),xm=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),bl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Sm=$(function(e,r){var n=e,a=r;return J(a,n)<0}),Tm=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Cm=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),Lm=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Ke=0,gl={fT:0,fX:0,c$:0},Pm=x(function(e,r,n){return o(Lt,function(a){var t=o(Tm,o(Cm,a,r),r);return o(Lt,function(i){var c=o(po,r,e),l=o(xm,n,c),u=o(bl,Ke,l)?c:o(Sm,Ke,l)?Lm(c):gl;return o(xe,function(v){return B(a,i,v)},na(u))},na(t))},na(e))}),zm=function(e){var r=e,n=O(r.c$),a=O(r.fX),t=O(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=pr(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=pr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(J(a,n)<1){var i=pr(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=pr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},bo=function(e){var r=zm(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return P(r,c)},Or=function(e){var r=e;return r},$r=function(e){return e},km=$(function(e,r){var n=bo(e),a=n.a,t=n.b;return $r({cu:r,cZ:a,c_:t,c0:e})}),Mm=function(e){var r=o(xa,e.aR,e.dc),n=Or(e.ee),a=o(po,r,n),t=p(Pm,r,n,a);if(t.$){var v=na(r);if(v.$){var d=bo(e.ee),m=d.a,f=d.b;return $r({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(km,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return $r({cu:e.dc,cZ:u,c_:l,c0:c})}},Fn={fT:0,fX:0,c$:0},Dm=function(e){return{$:0,a:e}},Ve=function(e){var r=e;return O(r)},aa=function(e){var r=e;return .5*r},Am=nv,Bm=function(e){var r=e;return Am(r)},Fm=function(e){var r=aa(Ve(e.ef)),n=Bm(r);return{cF:Dm(n),cX:e.cX}},ur=function(e){return e},go=ur({fT:0,fX:1,c$:0}),Vm=function(e){var r=e.aR,n=e.dc,a=e.ee;return Fm({ef:dn(40),cX:Mm({dc:ra(n),aR:ra(r),ee:o(ar,go,o(ym,Fn,ra(a)))})})},Fr=ev,Em=$(function(e,r){return(r-Ec(r/e)*e)/e}),Rm=function(e){return 2*Qr*e},kt=E(function(e,r,n,a){return e+(r-e)*(1+Fr(Rm(o(Em,n,a))))/2}),jm=function(e){return Vm({dc:{fT:10,fX:C(kt,-20,20,20,e.bA),c$:145},aR:{fT:0,fX:0,c$:0},ee:{fT:0,fX:1,c$:0}})},ho=function(e){return e},hl=x(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Nm=function(e){var r=e;return r},Hm=function(e){var r=p(hl,1667,25e3,Nm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ho({fT:n,fX:a})},Wm=function(e){return e},Gm=function(e){return{$:0,a:e}},Xm=Gm,Im={$:3},Um=Im,Jm=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Om=Jm,Ym=$(function(e,r){return r.b?p(or,k,r,e):e}),He=function(e){return p(or,Ym,L,e)},_o=$(function(e,r){return He(o(ee,e,r))}),qm=function(e){return{$:1,a:e}},Zm=qm,Km=function(e){return o(Mn,"height",Ae(e))},Qm=function(e){return t$(l$(e))},e0=Qm,r0=function(e){return{$:2,a:e}},n0=r0,a0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return ml(h(["rgba(",me(c(r)),"%,",me(c(n)),"%,",me(c(a)),"%,",me(i(t)),")"]))},t0=$(function(e,r){switch(r.$){case 0:return o(of,e,r);case 1:return o(cf,e,r);case 2:return o(lf,e,r);case 3:return o(uf,e,r);case 4:return o(vf,e,r);default:return o($f,e,r)}}),o0=$(function(e,r){switch(r.$){case 0:return o(F$,e,r);case 1:return o(V$,e,r);case 2:return o(E$,e,r);case 3:return o(R$,e,r);case 4:return o(j$,e,r);case 5:return o(N$,e,r);case 6:return o(H$,e,r);case 7:return o(W$,e,r);default:return G$(e)}}),i0=x(function(e,r,n){return p(tf,e,r,n)}),Ci=function(e){var r=e;return r},ln=yf,Ya=C(ln,1,1,1,1),Ye=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),c0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),l0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(c0,n*a/t,n,n*(1-a-t)/t)}),Vn=pf,u0=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Na=$(function(e,r){return u0(o(l0,e,r))}),_l=$(function(e,r){return{dk:gr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),Qe=Pf,v0=function(e){return Qe({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},qa=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=C(ln,a.bW,a.bW,a.bW,i);return we(t,e,c,v0(a),a.dk,r,n)}),wl=Ge(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(_l,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(qa,e,r,n,a,g),i.M);return{M:b,U:i.U,fx:i.fx};case 3:var w=t.b,y=o(k,S(qa,e,r,n,a,w),i.U);return{M:i.M,U:y,fx:i.fx};case 2:var _=t.a,T=o(k,S(qa,e,r,n,a,_),i.fx);return{M:i.M,U:i.U,fx:T};default:var M=t.a;return p(Dn,C(wl,e,r,n,a),i,M)}}),$0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),yl=$0,wo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),f0=function(e){var r=e.Z,n=e.W,a=e.V;return C(wo,518,r,n,a)},s0=$(function(e,r){return{$:6,a:e,b:r}}),d0=s0,xl=h([f0({V:1,W:0,Z:!1}),C(yl,!1,!1,!1,!1),o(d0,0,1)]),en=519,yo=8,Sl=15,qr=7681,m0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=B$,p0=$(function(e,r){return{$:0,a:e,b:r}}),b0=p0({c8:1,dh:0,dQ:5}),De=df,g0=b0(h([{dY:o(De,-1,-1)},{dY:o(De,1,-1)},{dY:o(De,-1,1)},{dY:o(De,1,1)}])),h0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},_0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},xo=x(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(_0,a,t,i)))}),So=function(e){return p(xo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},To=function(e){return S(ne,h([So(e),C(yl,!1,!1,!1,!1)]),h0,m0,g0,{})},w0=To({a8:qr,ci:0,cH:yo,bl:en,cY:Sl,bt:qr,bu:qr}),y0=516,Li=5386,Se=7680,x0=function(e){return o(cn,2,e+4)},Tl=function(e){return To({a8:Se,ci:Sl,cH:yo,bl:y0,cY:x0(e),bt:Li,bu:Li})},S0=x(function(e,r,n){return He(h([p(Ye,e,n,xl),h([Tl(r),w0])]))}),T0=$(function(e,r){return He(o(Mc,S0(e),r))}),C0=function(e){var r=e.Z,n=e.W,a=e.V;return C(wo,513,r,n,a)},L0=C0({V:1,W:0,Z:!0}),P0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},z0=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return P0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},k0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Pi=$(function(e,r){var n=e,a=r;return p(k0,32774,n,a)}),M0=1,zi=771,D0=770,Co=z0({bv:0,aH:o(Pi,M0,zi),by:0,bB:o(Pi,D0,zi),bF:0,bU:0}),Gr=h([L0,Co]),A0=function(e){var r=e;return r.dJ},B0=function(e){var r=e;return r.dK},Cl=function(e){var r=e;return r.dL},F0=function(e){var r=e;return r.dM},V0=function(e){var r=e;return r.dN},Ll=function(e){var r=e;return r.dO},vr=$(function(e,r){var n=e,a=r;return a-n}),Pl=function(e){return B(o(vr,F0(e),A0(e)),o(vr,V0(e),B0(e)),o(vr,Ll(e),Cl(e)))},un=function(e){var r=e;return r.cu},ki=function(e){var r=e;return un(r)},E0=function(e){return e},R0=function(e){return $r({cu:E0({fT:e.H,fX:e.I,c$:e.J}),cZ:ur({fT:e.q,fX:e.r,c$:e.s}),c_:ur({fT:e.t,fX:e.u,c$:e.v}),c0:ur({fT:e.w,fX:e.x,c$:e.y})})},Za=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),zl=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Er=function(e){var r=e;return r.cZ},Rr=function(e){var r=e;return r.c_},jr=function(e){var r=e;return r.c0},kl=$(function(e,r){return{cu:o(zl,e,un(r)),cZ:o(Za,e,Er(r)),c_:o(Za,e,Rr(r)),c0:o(Za,e,jr(r))}}),Mt=x(function(e,r,n){return{fT:e,fX:r,c$:n}}),Sa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Te,n,a)}),ta=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ta,n,a)}),j0=$(function(e,r){var n=Sa(r),a=Sa(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),We=function(e){var r=e;return r},N0=function(e){var r=e;return B(r.fT,r.fX,r.c$)},wn=$(function(e,r){var n=e,a=r;return a+n}),H0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(Ve(a)),c=aa(Ve(n)),l=aa(Ve(t)),u=N0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(wn,c,v),dK:o(wn,i,s),dL:o(wn,l,d),dM:o(vr,c,v),dN:o(vr,i,s),dO:o(vr,l,d)}}),Mi=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=We(jr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c$),f=We(Rr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c$),b=We(Er(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c$),y=o(H0,B(w,g,m),o(zl,e,p(Mt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(j0,_,y))}),Dt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Mi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Mi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Dt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(kl,R0(v),e),m=r*v.bW,f=e,g=r,b=C(Dt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Nr=bf,Hr=gf,Wr=hf,Ml=function(e){return{$:4,a:e}},W0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Ml(o(W0,e,L))},G0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},X0=function(e){var r=e;return r},Di=To({a8:qr,ci:0,cH:yo,bl:en,cY:255,bt:qr,bu:qr}),I0=function(e){var r=e,n=o(Te,O(r.fT),o(Te,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return c*n}else return Ke},ke={by:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fT:0,fX:0,c$:0},Re=$(function(e,r){var n=e,a=r;return Qe({ds:n.fT,dt:n.bU,du:a.fT,dv:a.bU,dw:n.fX,dx:n.bF,dy:a.fX,dz:a.bF,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),mn=P({bd:o(Re,ke,ke),bK:o(Re,ke,ke),bL:o(Re,ke,ke),bM:o(Re,ke,ke)},C(ln,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Ai=function(e){var r=e;return-r},Dl=514,Al=function(e){var r=e.Z,n=e.W,a=e.V;return C(wo,515,r,n,a)},Bl=240,U0=h([Al({V:1,W:0,Z:!0}),So({a8:Se,ci:Bl,cH:0,bl:Dl,cY:0,bt:Se,bu:Se}),Co]),J0=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=Ve(a),l=c,u=Ve(t),v=u,s=n.cF;if(s.$){var m=s.a;return wt(v)?Qe({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):Qe({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return wt(v)?Qe({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):Qe({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Un=$(function(e,r){return(1&e>>r)===1?0:1}),O0=function(e){return h([Al({V:1,W:0,Z:!0}),So({a8:Se,ci:Bl,cH:e,bl:Dl,cY:0,bt:Se,bu:Se}),Co])},Y0=x(function(e,r,n){return He(o(ee,function(a){var t=a<<4,i=C(ln,o(Un,a,0),o(Un,a,1),o(Un,a,2),o(Un,a,3));return p(Ye,e,P(r,i),O0(t))},o(Ar,1,o(cn,2,n)-1)))}),Ta=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Zr=function(e){var r=e;return r},q0=zf,Bi=function(e){var r=e;return Ta(jr(r))},Fl=ur({fT:1,fX:0,c$:0}),Vl=Fl,Lo=go,Po=ur({fT:0,fX:0,c$:1}),Z0=Po,K0={cu:Fn,cZ:Vl,c_:Lo,c0:Z0},Rn=function(e){var r=e;return r},Q0=function(e){var r=Rn(un(e)),n=We(jr(e)),a=We(Rr(e)),t=We(Er(e));return Qe({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},ep=$(function(e,r){var n=r;return Q0(o(kl,n,e))}),rp=function(e){return o(ep,K0,e)},np=function(e){var r=e;return r.cX},ap=function(e){var r=e;return Er(r)},tp=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),op=function(e){var r=e;return Rr(r)},ip=function(e){var r=np(e.es),n=$r({cu:ki(r),cZ:ap(r),c_:op(r),c0:Ta(Bi(r))}),a=En(e.aP),t=a,i=C(Dt,n,1,Y,h([t]));if(i.$===1)return L;var c=i.a,l=rp(r),u=o(ie,.99,o(ce,Ve(e.ex),Ai(Cl(c)))),v=Pl(c),s=v.a,d=v.b,m=v.c,f=I0(p(tp,s,d,m)),g=o(ie,1.01,o(wn,f,Ai(Ll(c)))),b=o(J0,e.es,{en:e.en,eO:g,fe:u}),w=q0(b).dH,y=w?We(Ta(Bi(r))):Zr(ki(r)),_=function(){var te=e.fJ;switch(te.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var se=te.a;return P(3,se);case 4:var se=te.a;return P(4,se);default:return P(5,0)}}(),T=_.a,M=_.b,H=e.eM,j=H,R=o(Na,j,e.fQ),N=R,W=Qe({ds:0,dt:y.fT,du:Nr(N),dv:e.d8,dw:0,dx:y.fX,dy:Hr(N),dz:X0(f),dA:0,dB:y.c$,dC:Wr(N),dD:T,dE:0,dF:w,dG:0,dH:M}),F=we(wl,W,l,b,G0,t,{M:L,U:L,fx:L}),q=e.e8;switch(q.$){case 0:var K=q.a;return He(h([p(Ye,F.M,P(K,Ya),Gr),p(Ye,F.U,mn,Gr)]));case 1:var K=q.a;return He(h([p(Ye,F.M,mn,Gr),h([Di]),p(Ye,F.fx,K.bd,xl),h([Tl(0)]),p(Ye,F.M,P(K,Ya),U0),p(Ye,F.U,mn,Gr)]));default:var oe=q.a,ve=q.b;return He(h([p(Ye,F.M,P(ve,Ya),Gr),h([Di]),o(T0,F.fx,oe),p(Y0,F.M,ve,Dr(oe)),p(Ye,F.U,mn,Gr)]))}},cp=function(e){return o(Mn,"width",Ae(e))},lp=$(function(e,r){var n=h([Zm(1),n0(0),Xm(!0),C(Om,0,0,0,0)]),a=function(){var T=e.el;switch(T.$){case 0:return B(n,"0",1);case 1:return B(o(k,Um,n),"1",1);default:var M=T.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ci(v),d=o(ge,"height",Ae(s)+"px"),m=Ci(u),f=m/s,g=o(_o,function(T){return ip({en:f,es:e.es,ex:e.ex,aP:T.aP,eM:T.eM,e8:T.e8,d8:c,fJ:T.fJ,fQ:T.fQ})},r),b=o(ge,"width",Ae(m)+"px"),w=e.aI,y=w,_=a0(y);return p(e0,"div",h([o(ge,"padding","0px"),b,d]),h([P(i,p(i0,t,h([cp(Oe(m*c)),Km(Oe(s*c)),b,d,o(ge,"display","block"),o(ge,"background-color",_)]),g))]))}),up=function(e){return{$:2,a:e}},vp=function(e){return up(e)},$p=function(e){return o(lp,{el:vp(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},h([{aP:e.aP,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},Fi=function(e){return e},Pr=function(e){return e},fp=function(e){var r=e;return r},zo=function(e){var r=e;return fp(r.eo)},El=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),sp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Rl=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),jl=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),dp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),mp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),pp=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ko=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(pp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(El,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(sp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Rl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(mp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(jl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(dp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Mo={$:0},bp=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),d=o(fe,s.dM,e),m=o(ce,s.dJ,r),f=o(fe,s.dN,n),g=o(ce,s.dK,a),b=o(fe,s.dO,t),w=o(ce,s.dL,i),y=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),gp=x(function(e,r,n){var a=Sa(e(r));return ka(bp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),Ka=$(function(e,r){var n=e,a=r;return J(a,n)<1}),Nl=function(e){return o(Ka,e.dJ,e.dM)&&o(Ka,e.dK,e.dN)&&o(Ka,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},Pn=function(e){var r=e;return r},zr=function(e){var r=e;return r.fT},kr=function(e){var r=e;return r.fX},Mr=function(e){var r=e;return r.c$},Hl=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=zr(n),c=kr(n),l=Mr(n),u=zr(a),v=kr(a),s=Mr(a),d=zr(t),m=kr(t),f=Mr(t);return Nl({dJ:o(ce,i,o(ce,u,d)),dK:o(ce,c,o(ce,v,m)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,d)),dN:o(fe,c,o(fe,v,m)),dO:o(fe,l,o(fe,s,f))})},Wl=_f,Le=function(e){return Wl(Rn(e))},Gl=function(e){var r=e;return r},Ha=function(e){return Wl(Gl(e))},Xl=function(e){return e},hp=$(function(e,r){var n=e,a=r,t=o(Te,O(a.fT),o(Te,O(a.fX),O(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=pr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return gl}),_p=hp(Xl(1)),Il=x(function(e,r,n){var a=o(xa,r,n),t=o(xa,e,r);return _p(o(po,a,t))}),wp=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Ha(p(Il,n,a,t));return B({o:i,dY:Le(n)},{o:i,dY:Le(a)},{o:i,dY:Le(t)})},yp=$(function(e,r){return{$:2,a:e,b:r}}),Ul=yp({c8:3,dh:0,dQ:4}),xp=function(e){if(e.b){var r=e.a,n=e.b,a=Ul(o(ee,wp,e)),t=p(gp,Hl,r,n);return C(El,t,e,a,0)}else return Mo},Ee=x(function(e,r,n){return B(e,r,n)}),de=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),Jl=function(){var e=Pr(1),r=Pr(1),n=Pr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(de,i,t,a),l=o(ie,.5,e),u=p(de,i,t,l),v=o(ie,.5,r),s=p(de,i,v,a),d=p(de,i,v,l),m=o(ie,.5,n),f=p(de,m,t,a),g=p(de,m,v,a),b=p(de,m,t,l),w=p(de,m,v,l);return ko(xp(h([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),Jn={$:0},Sp=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Tp=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ha(p(Il,u,l,c)),s={o:v,dY:Le(u)},d={o:v,dY:Le(l)},m={o:v,dY:Le(c)};return o(k,s,o(k,d,o(k,m,n)))}),Do=function(e){var r=e;return r.D},Cp=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return re(p(e,t,i,c))}),At=4294967295>>>32-Tn,Bt=Iu,Lp=x(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,At&r,v)}else{var i=t.a,c=e-Tn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Pp=function(e){return e>>>5<<5},zp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?Y:J(e,Pp(n))>-1?re(o(Bt,At&e,i)):re(p(Lp,a,e,t))}),Ao=function(e){var r=e;return r.ah},Qa=$(function(e,r){return o(zp,e,Ao(r))}),kp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(Cp,x(function(c,l,u){return B(c,l,u)}),o(Qa,a,e),o(Qa,t,e),o(Qa,i,e))};return o(Ra,r,Do(e))},Mp=x(function(e,r,n){e:for(;;){var a=o(to,Fe,e),t=a.a,i=a.b;if(J(ht(t),Fe)<0)return o(Rc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Vc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Bo=function(e){return e.b?p(Mp,e,L,0):Bc},Dp=x(function(e,r,n){return e(r(n))}),Ap=$(function(e,r){return!o(qc,o(Dp,fs,e),r)}),Bp=$(function(e,r){return p(or,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),Fp=function(e){var r=e.a;return r},Ol=$(function(e,r){var n=Fp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(Ap,a,r)?{D:r,ah:e}:{D:o(Bp,a,r),ah:e}}),Vp=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=Vp({c8:1,dh:3,dQ:4}),oa=$(function(e,r){var n=Zr(r),a=Zr(e);return P(B(a.fT,a.fX,a.c$),B(n.fT,n.fX,n.c$))}),Vi=p(Vn,0,0,0),et=Ge(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ea,o(oa,e,r),t);if(v.$){var d={o:Vi,dY:Le(r)},m={o:Vi,dY:Le(e)},f=u+1,g=u;return B(o(k,B(n,g,f),o(k,B(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=v.a;return B(o(k,B(n,s,a),c),l,u)}}),Ep=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,_=v,T=a+3,M=we(et,s,m,f,b,r,we(et,d,s,g,f,r,we(et,m,d,b,g,r,t)));e=w,r=y,n=_,a=T,t=M;continue e}else{var H=t,j=H.a,R=H.b;return P(j,Be(R))}}),Rp=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(gn,o(oa,m,s),f,p(gn,o(oa,s,d),g,p(gn,o(oa,d,m),b,t))),y=o(k,B(b,g,f),a),_=e,T=v,M=n+3,H=y,j=w;e=_,r=T,n=M,a=H,t=j;continue e}else return B(a,t,n)}),Sr=x(function(e,r,n){var a=kp(n),t=p(or,Tp(r),L,a),i=S(Rp,r,a,0,L,pl),c=i.a,l=i.b,u=i.c,v=S(Ep,r,l,a,0,B(c,L,u)),s=v.a,d=v.b,m=dl(d)?t:le(t,d);return p(Sp,e,o(Ol,Bo(m),s),o(jn,m,s))}),Ft=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Ar,0,Dr(e)-1)),ah:Bo(He(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Yl=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Sr,a,Lr,Ft(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Sr,a,Lr,Ft(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Lr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.dY},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ei=Yl(Jl),Fo=function(e){var r=e;return r.aK},ql={$:0},z=ql,pe=$(function(e,r){return{$:1,a:e,b:r}}),jp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Np=1029,Hp=function(e){return{$:5,a:e}},Zl=function(e){var r=e;return Hp(r)},Wp=Zl(Np),Gp=1028,Xp=Zl(Gp),Pe=x(function(e,r,n){return r===1?e?o(k,Wp,n):o(k,Xp,n):n}),Kl={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),Kl,jp,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Vo={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),Ql,Vo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),eu=$(function(e,r){return{$:3,a:e,b:r}}),Ip={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Up=E(function(e,r,n,a){return o(eu,n,Q(function(t,i,c,l,u,v,s,d){return S(ne,d,ru,Ip,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Eo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Wa=wf,cr=he(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),Ql,Eo,a,{aN:o(Wa,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),Jp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Op=he(function(e,r,n,a,t){return o(eu,a,Q(function(i,c,l,u,v,s,d,m){return S(ne,m,ru,Jp,t,{aN:o(Wa,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),nu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),au,nu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),tu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yp=Ge(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),ou,tu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),iu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},qp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,Q(function(d,m,f,g,b,w,y,_){var T=y.a,M=y.b;return S(ne,p(Pe,g,s,_),ou,iu,v,{b0:e,b2:r,b3:i,b4:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},cu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},Yn=Ge(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),au,cu,t,{b$:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),Zp=function(e){return{$:0,a:e}},Ri=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),Kp=function(e){return C(ln,Nr(e),Hr(e),Wr(e),1)},Ro=C(ln,0,0,0,0),ia=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Ro)}else{var n=r.a;return P(e,Kp(n))}}),lu=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Ri,P(t,Ro),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ri,o(ia,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,Zp(a)}}),Qp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),e3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),r3=function(e){return o(De,e,1)},Vt=o(De,0,0),Xr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Vt)}else{var n=r.a;return P(e,r3(n))}}),uu=E(function(e,r,n,a){var t=C(e3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(qn,P(u,Ro),o(Xr,u,r),o(Xr,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(qn,o(ia,u,e),P(u,Vt),o(Xr,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(qn,o(ia,u,e),o(Xr,u,r),P(u,Vt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(qn,o(ia,u,e),o(Xr,u,r),o(Xr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Qp,i,c,l)}}),n3={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},nt=he(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),Kl,n3,a,{bZ:Nn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),vu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},a3=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),vu,tu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),t3=Nt(function(e,r,n,a,t,i,c,l,u){return o(pe,c,Q(function(v,s,d,m,f,g,b,w){var y=b.a,_=b.b;return S(ne,p(Pe,m,u,w),vu,iu,l,{b0:e,b2:r,b3:i,b4:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,co:t,b:d,c:s,aW:e,d:g,cL:n,e:v,a$:0,f})}))}),zn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),o3=function(e){var r=e;return p(zn,r.dM,r.dJ,.5)},i3=function(e){var r=e;return p(zn,r.dN,r.dK,.5)},c3=function(e){var r=e;return p(zn,r.dO,r.dL,.5)},l3=function(e){return p(de,o3(e),i3(e),c3(e))},G=function(e){var r=Pl(e),n=r.a,a=r.b,t=r.c;return{ev:Rn(l3(e)),eR:n/2,eS:a/2,eT:t/2}},jo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(rt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(rt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(rt,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,G(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,G(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Up,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nt,l,v,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Op,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(lu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(a3,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(Yp,b,y,_,G(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(On,m,G(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(On,m,G(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(On,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(On,m,G(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,M=e.c,H=e.d,j=e.e,R=C(uu,T,M,H,j);if(R.$){var q=R.a,K=q.a,oe=q.b,ve=R.b,te=ve.a,se=ve.b,ze=R.c,Ce=ze.a,dr=ze.b,mr=R.d,y=mr.a,_=mr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Nu(t3,K,oe,te,se,Ce,dr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return qp(K)(oe)(te)(se)(Ce)(dr)(y)(_)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(Yn,N,W,F,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(Yn,N,W,F,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(Yn,N,W,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(Yn,N,W,F,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),at=function(e){var r=e;return r.fT},tt=function(e){var r=e;return r.fX},ot=function(e){var r=e;return r.c$},u3=function(e){var r=e,n=ot(r.c0),a=tt(r.c0),t=at(r.c0),i=ot(r.c_),c=tt(r.c_),l=at(r.c_),u=ot(r.cZ),v=tt(r.cZ),s=at(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},v3=function(e){var r=Rn(un(e)),n=We(jr(e)),a=We(Rr(e)),t=We(Er(e));return{dk:u3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,H:r.fT,I:r.fX,J:r.c$,bW:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),$u=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(_l,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),fu=$(function(e,r){return o($u,v3(e),r)}),Ga=function(e){return{$:2,a:e}},$3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),f3=Sf,s3=xf,ji=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=s3(a),g=f.fT,b=f.fX,w=f.c$,y=f.ei,_=f3({ei:y,fT:g*s,fX:b*d,c$:w*m});return ka(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Et=$(function(e,r){switch(r.$){case 0:return ql;case 5:var n=r.a,a=r.b;return o(Ir,n,o(Et,e,a));case 1:var t=r.a,i=r.b;return o(pe,o($3,e,t),o(ji,e,i));case 3:return r;case 2:var i=r.a;return Ga(o(ji,e,i));default:var c=r.a;return Ml(o(ee,Et(e),c))}}),No=$(function(e,r){var n=r;return o(Et,e,n)}),Ho={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},su=7683,du=7682,d3=p(xo,{ci:0,cH:0,cY:15},{a8:Se,bl:en,bt:Se,bu:su},{a8:Se,bl:en,bt:Se,bu:du}),m3=p(xo,{ci:0,cH:0,cY:15},{a8:Se,bl:en,bt:Se,bu:du},{a8:Se,bl:en,bt:Se,bu:su}),Wo=$(function(e,r){return e?o(k,m3,r):o(k,d3,r)}),p3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},b3=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return S(ne,o(Wo,i,v),p3,Ho,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return Y},Ca=function(e){var r=b3(e);if(r.$)return z;var n=r.a;return Ga(n)},g3=E(function(e,r,n,a){var t=o(jo,n,Jl),i=function(){var s=P(e,r);return s.a?s.b?En(h([t,Ca(Ei)])):t:s.b?Ca(Ei):z}(),c=Fo(a),l=c.a,u=c.b,v=c.c;return o(fu,zo(a),o(No,B(l,u,v),i))}),h3=$(function(e,r){return C(g3,!0,!0,e,r)}),Rt=function(e){return{$:0,a:e}},mu=$(function(e,r){return{$:0,a:e,b:r}}),_3=function(e){var r=fo(e),n=r.cG,a=r.b7,t=r.b1;return p(Vn,n,a,t)},w3=function(e){return o(mu,0,Rt(_3(e)))},y3=function(e){var r=e;return r.k},xn=function(e){var r=e;return Fr(r)},x3=$(function(e,r){var n=r;return n/e}),rn=rv,Ni=function(e){var r=e;return{fT:Fr(r),fX:rn(r)}},S3=$(function(e,r){var n=e.dY,a=e.o;return o(k,{o:Ha(a),dY:Le(n)},r)}),T3=za(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Wr(l.dY),s=Hr(l.dY),d=Nr(l.dY),m=o(ta,e,d),f=o(Te,r,d),g=o(ta,n,s),b=o(Te,a,s),w=o(ta,t,v),y=o(Te,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=y,c=_;continue e}else return Nl({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),pu=$(function(e,r){var n=Wr(e.dY),a=Hr(e.dY),t=Nr(e.dY);return Ht(T3,t,t,a,a,n,n,r)}),C3=function(e){var r=p(Cc,S3,L,Ao(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Do(e)),i=o(pu,n,a);return C(Rl,i,e,t,0)}else return Mo},bu=ur({fT:0,fX:0,c$:-1}),Hi=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),La=function(e){var r=e;return rn(r)},jt=function(e){return Br(2*Qr*e)},L3=Lr,Wi=L3({cu:Fn,cZ:Vl,c_:Lo}),gu=function(){var e=72,r=o(x3,e,jt(1)),n=Pr(1),a=Or(Po),t=Or(bu),i=Pr(1),c=o(ie,.5,i),l=p(de,Ke,Ke,c),u=o(ie,-.5,i),v=p(de,Ke,Ke,u),s=function(f){var g=o(ie,f,r),b=Or(o(Hi,Wi,Ni(g))),w=o(ie,xn(g),n),y=o(ie,La(g),n),_=p(de,w,y,c),T=p(de,w,y,u),M=o(ha,e,f+1),H=o(ie,M,r),j=Or(o(Hi,Wi,Ni(H))),R=o(ie,xn(H),n),N=o(ie,La(H),n),W=p(de,R,N,u),F=p(de,R,N,c);return h([B({o:t,dY:v},{o:t,dY:W},{o:t,dY:T}),B({o:b,dY:T},{o:j,dY:W},{o:j,dY:F}),B({o:b,dY:T},{o:j,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(ee,s,o(Ar,0,e-1)),m=Ft(He(d));return ko(C3(m))}(),Gi=Yl(gu),P3=function(e){var r=e;return r.eE},z3=function(e){var r=e;return r.cu},k3=function(e){var r=P3(e),n=bo(r),a=n.a,t=n.b;return $r({cu:z3(e),cZ:a,c_:t,c0:r})},M3=function(e){var r=e;return r.e6},D3=function(e){var r=e;return r.fp},A3=E(function(e,r,n,a){var t=k3(y3(a)),i=o(jo,n,gu),c=function(){var d=P(e,r);return d.a?d.b?En(h([i,Ca(Gi)])):i:d.b?Ca(Gi):z}(),l=D3(a),u=l,v=M3(a),s=v;return o(fu,t,o(No,B(u,u,s),c))}),B3=$(function(e,r){return C(A3,!0,!0,e,r)}),Xi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Ii={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return Qe({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},Zn=Ul(h([B({cS:0},{cS:1},{cS:2})])),F3=$(function(e,r){var n=Hl(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(pe,a,Q(function(_,T,M,H,j,R,N,W){return S(ne,p(Pe,H,0,W),Xi,Vo,Zn,{aw:t,b:M,c:T,d:R,e:_,bq:pn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(pe,a,Q(function(_,T,M,H,j,R,N,W){return S(ne,p(Pe,H,0,W),Xi,Eo,Zn,{aN:o(Wa,Nn(c),i),b:M,c:T,d:R,e:_,bq:pn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(lu,l,f);if(u.$)return z;var v=u.a;return o(pe,a,Q(function(_,T,M,H,j,R,N,W){var F=N.a,q=N.b;return S(ne,p(Pe,H,0,W),Ii,nu,Zn,{P:q,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:M,c:T,d:R,e:_,bq:pn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(uu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,y=g.c;return o(pe,a,Q(function(_,T,M,H,j,R,N,W){var F=N.a,q=N.b;return S(ne,p(Pe,H,0,W),Ii,cu,Zn,{b$:b,P:q,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cn:y,b:M,c:T,d:R,cK:w,e:_,bq:pn(r),f:j})}))}}),V3=function(){var e=h([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(jn,e,r)}(),E3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},Ui=function(e){return Ga(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(Wo,t,u),E3,Ho,V3,{b:a,c:n,d:c,e:r,bX:l,bq:pn(e),f:i})}))},R3=E(function(e,r,n,a){var t=o(F3,n,a),i=P(e,r);return i.a?i.b?En(h([t,Ui(a)])):t:i.b?Ui(a):z}),j3=$(function(e,r){return C(R3,!0,!0,e,r)}),Go=function(e){var r=e;return r},N3=$(function(e,r){var n=Mr(r),a=Mr(e),t=kr(r),i=kr(e),c=zr(r),l=zr(e);return{dJ:o(ce,l,c),dK:o(ce,i,t),dL:o(ce,a,n),dM:o(fe,l,c),dN:o(fe,i,t),dO:o(fe,a,n)}}),H3=function(e){var r=Go(e),n=r.a,a=r.b;return o(N3,n,a)},Ji={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},W3=$(function(e,r){return{$:1,a:e,b:r}}),G3=W3({c8:2,dh:0,dQ:1}),Oi=G3(h([P({dr:0},{dr:1})])),X3=$(function(e,r){var n=H3(r),a=G(n),t=Go(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(pe,a,Q(function(v,s,d,m,f,g,b,w){return S(ne,w,Ji,Vo,Oi,{aw:l,dp:Le(c),dq:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(pe,a,Q(function(s,d,m,f,g,b,w,y){return S(ne,y,Ji,Eo,Oi,{aN:o(Wa,Nn(u),l),dp:Le(c),dq:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),I3=$(function(e,r){return o(X3,e,r)}),Xo=function(e){var r=e;return r.ev},Io=function(e){var r=e;return r.fp},Yi=$(function(e,r){var n=e,a=r;return n/a}),U3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),qi=$(function(e,r){return e<1?L:S(U3,0,e,e,r,L)}),J3=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ha(a),dY:Le(n),L:o(De,c,l)},r)}),O3=function(e){var r=p(Cc,J3,L,Ao(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Do(e)),i=o(pu,n,a);return C(jl,i,e,t,0)}else return Mo},Uo=$(function(e,r){var n=e,a=r,t=Fr(a);return{fT:t*Fr(n),fX:t*rn(n),c$:rn(a)}}),Y3=function(){var e=Pr(1),r=72,n=o(Ar,0,r-1),a=o(qi,r,o(zn,Ke,jt(1))),t=no(r/2),i=o(Ar,0,t-1),c=o(qi,t,o(zn,dn(90),dn(-90))),l=Bo(He(o(ee,function(s){return o(ee,function(d){return{o:Or(o(Uo,s,d)),dY:p(de,o(ie,xn(d)*xn(s),e),o(ie,xn(d)*La(s),e),o(ie,La(d),e)),L:P(o(Yi,s,jt(1)),o(Yi,o(wn,dn(90),d),dn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=He(o(ee,function(s){return He(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return ko(O3(o(Ol,l,v)))}(),Pa=72,Kn=2*Pa,q3=$(function(e,r){e:for(;;){var n=Kn+1,a=o(ha,Kn,2*e+3),t=o(ha,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(k,B(l,c,t),o(k,B(c,a,t),o(k,B(c,i,a),o(k,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Z3=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),K3=$(function(e,r){e:for(;;){var n=p(Z3,0,2*Qr,e/Pa),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Q3=function(){var e=o(K3,Pa-1,h([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(q3,Pa-1,L);return o(jn,e,r)}(),eb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},Zi=function(e){return Ga(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(Wo,!0,u),eb,Ho,Q3,{aw:p(Vn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},rb=function(e){var r=Gl(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c$,bW:1}},nb=$(function(e,r){return o($u,rb(e),r)}),ab=E(function(e,r,n,a){var t=o(jo,n,Y3),i=function(){var u=P(e,r);return u.a?u.b?En(h([t,Zi()])):t:u.b?Zi():z}(),c=Io(a),l=c;return o(nb,o(xa,Fn,Xo(a)),o(No,B(l,l,l),i))}),tb=$(function(e,r){return C(ab,!0,!0,e,r)}),ob=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),hu=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ib=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),cb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(mu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ob,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(hu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ib,n,a,t,i,c)}},lb=cb,_u=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(h3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(j3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(tb,lb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(B3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(I3,w3(c),l)]);default:var u=e.a;return o(_o,_u,u)}},ub=function(e){return o(_o,_u,e)},vb=$(function(e,r){return $p({el:e.el,aI:Wm(e.ep),es:e.es,ex:Pr(e.ex),b5:e.b5,aK:P(Fi(Oe(e.cM.fR)),Fi(Oe(e.cM.eV))),aP:ub(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),$b=C(on,186/255,189/255,182/255,1),wu=function(e){return e},fb=$(function(e,r){var n=e,a=We(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(Na,r.bH,r.aJ),u=l;return{by:Wr(u),eu:n,bF:Hr(u),cD:0,bU:Nr(u),cT:1,fT:-t,fX:-i,c$:-c}}),sb=function(e){return o(fb,wu(!0),{aJ:e.aJ,eE:o(Uo,Br(e.bx),Br(e.bD)),bH:e.bH})},db=function(e){return e},mb=function(e){return db(1.2*o(cn,2,e))},it=ho({fT:.37208,fX:.37529}),pb=$(function(e,r){return{$:2,a:e,b:r}}),yu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},bb=function(e){var r=e;return r.eu},gb=yu(mn.a),hb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(k,a,i),c):P(i,o(k,a,c))});return p(or,n,P(L,L),r)}),_b=function(e){var r=e;return Qe({ds:r.fT,dt:r.bU,du:0,dv:0,dw:r.fX,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},wb=Q(function(e,r,n,a,t,i,c,l){var u=o(hb,bb,h([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(pb,o(ee,_b,v),{bd:o(Re,m,g),bK:o(Re,w,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return gb}else return yu({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),yb=E(function(e,r,n,a){return ka(wb,e,r,n,a,ke,ke,ke,ke)}),xb=$(function(e,r){return o(xe,function(n){if(n.$)return 0;var a=n.b;return a},o(Ea,e,r.av))}),Sb=$(function(e,r){return o(ar,0,ja(o(Ra,xb(e),r)))}),Tb=$(function(e,r){return o(Sb,e,r.ey)}),Ie=Tb,Cb={$:5},Lb=Cb,Pb=ho({fT:.44757,fX:.40745}),zb=function(e){return e},Ki=function(e){return e},ct=function(e){return e},kb={$:1},Mb=kb,Db=$(function(e,r){var n=e,a=Rn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(Na,r.bH,r.aJ),u=l;return{by:Wr(u),eu:n,bF:Hr(u),cD:0,bU:Nr(u),cT:2,fT:t,fX:i,c$:c}}),Qi=function(e){return o(Db,wu(!0),{aJ:e.aJ,bH:e.bH,dY:ra(e.dY)})},Jo=$(function(e,r){return{$:0,a:e,b:r}}),lt=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ut=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Ab=ur({fT:-1,fX:0,c$:0}),Bb=ur({fT:0,fX:-1,c$:0}),Fb=Ge(function(e,r,n,a,t,i){var c=o(lt,n,i)?Po:bu,l=o(lt,r,t)?go:Bb,u=o(lt,e,a)?Fl:Ab,v=B(Ve(o(vr,e,a)),Ve(o(vr,r,t)),Ve(o(vr,n,i))),s=p(de,o(ut,e,a),o(ut,r,t),o(ut,n,i)),d=$r({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),Vb=$(function(e,r){return we(Fb,zr(e),kr(e),Mr(e),zr(r),kr(r),Mr(r))}),xu=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Jo,e,o(Vb,p(Mt,-c,-l,-u),p(Mt,c,l,u)))}),Eb=C(on,211/255,215/255,207/255,1),vt=function(e){return p(hl,0,1,e<=.04045?e/12.92:o(cn,(e+.055)/1.055,2.4))},Rb=function(e){var r=fo(e),n=r.cG,a=r.b7,t=r.b1;return p(Vn,vt(n),vt(a),vt(t))},Su=function(e){return p(hu,0,Rt(Rb(e)),Rt(0))},Tu=$(function(e,r){return{$:2,a:e,b:r}}),Oo=function(e){return{$:5,a:e}},Cu=$(function(e,r){return{$:4,a:e,b:r}}),Lu=$(function(e,r){return{$:3,a:e,b:r}}),Pu=$(function(e,r){return{$:1,a:e,b:r}}),jb=x(function(e,r,n){return{fT:e,fX:r,c$:n}}),Hn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),Nb=$(function(e,r){return $r({cu:o(Hn,e,un(r)),cZ:Er(r),c_:Rr(r),c0:jr(r)})}),Hb=$(function(e,r){return{eo:o(Nb,e,zo(r)),aK:Fo(r)}}),Yo=$(function(e,r){return{eE:r,cu:e}}),Wb=$(function(e,r){var n=r;return o(Yo,o(Hn,e,n.cu),n.eE)}),Gb=$(function(e,r){var n=r;return{k:o(Wb,e,n.k),e6:n.e6,fp:n.fp}}),Xb=function(e){return e},zu=$(function(e,r){var n=Go(r),a=n.a,t=n.b;return Xb(P(e(a),e(t)))}),Ib=$(function(e,r){return o(zu,Hn(e),r)}),ku=$(function(e,r){return{ev:r,fp:Ve(e)}}),Ub=$(function(e,r){return o(ku,Io(r),o(Hn,e,Xo(r)))}),Mu=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),Jb=$(function(e,r){return o(Mu,Hn(e),r)}),Du=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(jb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Jo,s,o(Hb,i,c));case 1:var s=r.a,l=r.b;return o(Pu,s,o(Jb,i,l));case 3:var s=r.a,u=r.b;return o(Lu,s,o(Ub,i,u));case 2:var s=r.a,v=r.b;return o(Tu,s,o(Gb,i,v));case 4:var s=r.a,d=r.b;return o(Cu,s,o(Ib,i,d));default:var m=r.a;return Oo(o(ee,Du(B(n,a,t)),m))}}),Au=function(e){return Du(B(0,e,0))},Ob=$(function(e,r){return o(xe,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ea,e,r.av))}),Yb=$(function(e,r){return o(ar,0,ja(o(Ra,Ob(e),r)))}),qb=$(function(e,r){return o(Yb,e,r.ey)}),Zb=qb,Kb=function(e){return Oo(e)},Qb=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(on,f,m,d,a)}),eg=x(function(e,r,n){return C(Qb,e,r,n,1)}),ca=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=rn(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,y=g*g,_=1-2*(f+y),T=s.c$*u,M=l*T,H=2*(w-M),j=2*(w+M),R=d*T,N=2*(R+b),W=2*(R-b),F=g*T,q=2*(F-m),K=2*(F+m),oe=T*T,ve=1-2*(y+oe),te=1-2*(f+oe);return{fT:ve*i.fT+H*i.fX+N*i.c$,fX:j*i.fT+te*i.fX+q*i.c$,c$:W*i.fT+K*i.fX+_*i.c$}}),Wn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=rn(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,y=l*w,_=w*w,T=b.fX*u,M=l*T,H=w*T,j=T*T,R=1-2*(_+j),N=b.c$*u,W=l*N,F=2*(H-W),q=2*(H+W),K=w*N,oe=2*(K+M),ve=2*(K-M),te=T*N,se=2*(te-y),ze=2*(te+y),Ce=N*N,dr=1-2*(j+Ce),mr=1-2*(_+Ce);return{fT:s.fT+dr*d+F*m+oe*f,fX:s.fX+q*d+mr*m+se*f,c$:s.c$+ve*d+ze*m+R*f}}),rg=x(function(e,r,n){return $r({cu:p(Wn,e,r,un(n)),cZ:p(ca,e,r,Er(n)),c_:p(ca,e,r,Rr(n)),c0:p(ca,e,r,jr(n))})}),ng=x(function(e,r,n){return{eo:p(rg,e,r,zo(n)),aK:Fo(n)}}),ag=$(function(e,r){var n=o(Wn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(Yo,n(i.cu),a(i.eE))}}),tg=x(function(e,r,n){var a=n;return{k:p(ag,e,r,a.k),e6:a.e6,fp:a.fp}}),og=x(function(e,r,n){return o(zu,o(Wn,e,r),n)}),ig=x(function(e,r,n){return o(ku,Io(n),p(Wn,e,r,Xo(n)))}),cg=x(function(e,r,n){return o(Mu,o(Wn,e,r),n)}),Bu=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Jo,l,p(ng,e,r,a));case 1:var l=n.a,t=n.b;return o(Pu,l,p(cg,e,r,t));case 3:var l=n.a,i=n.b;return o(Lu,l,p(ig,e,r,i));case 2:var l=n.a,c=n.b;return o(Tu,l,p(tg,e,r,c));case 4:var l=n.a,u=n.b;return o(Cu,l,p(og,e,r,u));default:var v=n.a;return Oo(o(ee,o(Bu,e,r),v))}}),lg=o(Yo,Fn,Lo),ug=$(function(e,r){return p(Bu,lg,Br(e),r)}),vg=function(e){var r=o(Ie,"period",e),n=o(Zb,"number of blocks",e),a=o(Ie,"minWidth",e),t=o(Te,a,o(Ie,"maxWidth",e)),i=o(Ie,"frequency",e),c=80/n,l=function(m){return i*m/n},u=function(m){return C(kt,a,t,r,e.bA+l(m))},v=function(m){return .004*r*m},s=function(m){return p(eg,C(kt,0,1,3,e.bA+v(m)),.65,.7)},d=function(m){return o(ug,.1*u(m),o(Au,m*c,o(xu,Su(s(m)),B(u(m),.9*c,u(m)))))};return Kb(o(ee,d,o(Ar,-(n/2|0),n/2|0)))},$g=$(function(e,r){return h([vg(e),o(Au,-33,o(xu,Su(Eb),B(300,1,300)))])}),ec=function(e){var r=e;return r},fg=function(e){e:for(;;){if(gr(e.di,Ke)&&gr(e.dj,Ke))return ke;if(o(bl,Ve(e.di),Ve(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:Ta(e.ee)};e=r;continue e}else{var n=O(ec(e.dj)/Qr),a=O(ec(e.di)/Qr),t=We(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(Na,Xl(1),e.aJ),v=u;return{by:a*Wr(v),eu:!1,bF:a*Hr(v),cD:n/a,bU:a*Nr(v),cT:3,fT:i,fX:c,c$:l}}}},sg=function(e){return fg({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(Uo,Br(e.bx),Br(e.bD))})},dg=$(function(e,r){var n=sb({bx:o(Ie,"azimuth for third light",e),aJ:Hm(zb(2e3)),bD:o(Ie,"elevation for third light",e),bH:ct(o(cn,10,o(Ie,"lux",e)))}),a=Qi({aJ:it,bH:Ki(6e3),dY:{fT:-45,fX:-30,c$:45}}),t=sg({bx:o(Ie,"azimuth for fourth light",e),aJ:it,bD:o(Ie,"elevation for fourth light",e),di:ct(o(Ie,"intensity above",e)),dj:ct(o(Ie,"intensity below",e))}),i=Qi({aJ:Pb,bH:Ki(6e3),dY:{fT:-45,fX:30,c$:45}});return o(vb,{el:Mb,ep:$b,es:jm(e),ex:.1,b5:e.b5,eM:mb(6),e8:C(yb,i,a,n,t),cM:e.cM,fJ:Lb,fQ:it},o($g,e,r))}),mg=C(dm,dg,wm,_m,mm);const pg={Main:{init:mg(o(A,function(e){return Me({e0:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({bA:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(d){return Me({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",pa(Ln)))},o(D,"left",Z))},o(D,"pressedKeys",pa(Ln)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return Me({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eV:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eB:r,eC:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},bg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},gg=()=>{$t("pointerdown"),$t("wheel"),$t("keydown")},$t=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},hg=pg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});gg();bg(hg);
