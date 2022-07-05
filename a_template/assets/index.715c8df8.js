const Gu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Gu();function _r(e,r,n){return n.a=e,n.f=r,n}function $(e){return _r(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return _r(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return _r(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return _r(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return _r(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return _r(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return _r(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ft(e){return _r(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Vt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ta(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Wu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Hu=[];function Xu(e){return e.length}var Uu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Iu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Ou=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ju=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+qu()),r});function qu(e){return"<internals>"}function Kr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=lt(e,r,0,a);t&&(n=a.pop());t=lt(n.a,n.b,0,a));return t}function lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Kr(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!lt(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Yu=$(function(e,r){var n=I(e,r);return n<0?Cc:n?Bf:Tc}),Cn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ze(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var L={$:0};function rr(e,r){return{$:1,a:e,b:r}}var Zu=$(rr);function _(e){for(var r=L,n=e.length;n--;)r=rr(e[n],r);return r}function Ca(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Qu=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ca(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return _(Ca(r).sort(function(n,a){var t=o(e,n,a);return t===Tc?0:t===Cc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Ku=$(Math.pow);$(function(e,r){return r%e});var ev=$(function(e,r){var n=r%e;return e===0?Kr(11):n>0&&e<0||n<0&&e>0?n+e:n}),rv=Math.PI,nv=Math.cos,av=Math.sin,tv=Math.tan;$(Math.atan2);function ov(e){return e}function iv(e){return e===1/0||e===-1/0}var cv=Math.ceil,lv=Math.floor,uv=Math.round,vv=Math.sqrt,Oo=Math.log,$v=isNaN;function fv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var sv=$(function(e,r){return e+r});function mv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function dv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function pv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var bv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),gv=$(function(e,r){return r.split(e)}),hv=$(function(e,r){return r.join(e)}),_v=y(function(e,r,n){return n.slice(e,r)});function wv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var yv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),xv=$(function(e,r){return r.indexOf(e)>-1}),Sv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Tv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function Ki(e){return e+""}function Cv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Lv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Pv(e){return Ca(e).join("")}function zv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function kv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Mv(e){return{$:0,a:e}}function Et(e){return{$:2,b:e}}var Dv=Et(function(e){return typeof e=="boolean"?ue(e):Ye("a BOOL",e)}),Av=Et(function(e){return typeof e=="number"?ue(e):Ye("a FLOAT",e)}),Bv=Et(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ye("a STRING",e)});function Fv(e){return{$:3,b:e}}var Vv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var Ev=$(function(e,r){return{$:10,b:r,h:e}}),Rv=$(function(e,r){return wr(e,[r])}),Nv=y(function(e,r,n){return wr(e,[r,n])});E(function(e,r,n,a){return wr(e,[r,n,a])});he(function(e,r,n,a,t){return wr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return wr(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return wr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return wr(e,[r,n,a,t,i,c,l])});Ft(function(e,r,n,a,t,i,c,l,u){return wr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return ye(o(qt,"This is not valid JSON! "+a.message,r))}});var ec=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ye("null",r);case 3:return Rn(r)?Jo(e.b,r,_):Ye("a LIST",r);case 4:return Rn(r)?Jo(e.b,r,jv):Ye("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ye("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Ue(v)?v:ye(o(li,n,v.a));case 7:var a=e.e;if(!Rn(r))return Ye("an ARRAY",r);if(a>=r.length)return Ye("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Ue(v)?v:ye(o(Lc,a,v.a));case 8:if(typeof r!="object"||r===null||Rn(r))return Ye("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Ue(v))return ye(o(li,i,v.a));t=rr(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Ue(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ne(e.b,r);return Ue(v)?Ne(e.h(v.a),r):v;case 11:for(var s=L,m=e.g;m.b;m=m.b){var v=Ne(m.a,r);if(Ue(v))return v;s=rr(v.a,s)}return ye(Ff(Fe(s)));case 1:return ye(o(qt,e.a,r));case 0:return ue(e.a)}}function Jo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Ue(c))return ye(o(Lc,i,c.a));t[i]=c.a}return ue(n(t))}function Rn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function jv(e){return o(Qf,e.length,function(r){return e[r]})}function Ye(e,r){return ye(o(qt,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var Gv=$(function(e,r){return JSON.stringify(r,null,e)+""});function rc(e){return e}y(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function Wv(e){return{$:1,a:e}}function $r(e){return{$:2,b:e,c:null}}var ut=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Hv(e){return{$:5,b:e}}var Xv=0;function Rt(e){var r={$:0,e:Xv++,f:e,g:null,h:[]};return Nt(r),r}function nc(e){return $r(function(r){r(Br(Rt(e)))})}function ac(e,r){e.h.push(r),Nt(e)}var Uv=$(function(e,r){return $r(function(n){ac(e,r),n(Br(Cn))})}),Na=!1,Yo=[];function Nt(e){if(Yo.push(e),!Na){for(Na=!0;e=Yo.shift();)Iv(e);Na=!1}}function Iv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Nt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return jt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function jt(e,r,n,a,t,i){var c=o(ec,e,r?r.flags:void 0);Ue(c)||Kr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Ov(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),Qo(l,b.b,t(v))}return Qo(l,u.b,t(v)),m?{ports:m}:{}}var Ke={};function Ov(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=qv(t,r)}return n}function Jv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ut,l,Hv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Rt(o(ut,l,e.b))}var Yv=$(function(e,r){return $r(function(n){e.g(r),n(Br(Cn))})});$(function(e,r){return o(Uv,e.h,{$:0,a:r})});function tc(e){return function(r){return{$:1,k:e,l:r}}}function Zv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Zo=[],ja=!1;function Qo(e,r,n){if(Zo.push({p:e,q:r,r:n}),!ja){ja=!0;for(var a;a=Zo.shift();)Qv(a.p,a.q,a.r);ja=!1}}function Qv(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)ac(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Kv(e,t,a,r.l);n[t]=e$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function Kv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function e$(e,r,n){return n=n||{i:L,j:L},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function r$(e){Ke[e]&&Kr(3)}$(function(e,r){return r});function n$(e,r){return r$(e),Ke[e]={f:a$,u:r,a:t$},tc(e)}var a$=$(function(e,r){return function(n){return e(r(n))}});function t$(e,r){var n=L,a=Ke[e].u,t=Br(null);Ke[e].b=t,Ke[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ec,a,c);Ue(l)||Kr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,ir=typeof document!="undefined"?document:{};function Gt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function vt(e){return{$:0,a:e}}var oc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Wt(n),e:t,f:e,b:i}})}),Fr=oc(void 0),o$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Wt(n),e:t,f:e,b:i}})}),i$=o$(void 0);function c$(e,r,n,a){return{$:3,d:Wt(e),g:r,h:n,i:a}}var l$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return yr([e,r],function(){return e(r)})});y(function(e,r,n){return yr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return yr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return yr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return yr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return yr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return yr([e,r,n,a,t,i,c,l],function(){return Vt(e,r,n,a,t,i,c,l)})});Ft(function(e,r,n,a,t,i,c,l,u){return yr([e,r,n,a,t,i,c,l,u],function(){return Ta(e,r,n,a,t,i,c,l,u)})});var ic=$(function(e,r){return{$:"a0",n:e,o:r}}),u$=$(function(e,r){return{$:"a1",n:e,o:r}}),cc=$(function(e,r){return{$:"a2",n:e,o:r}}),Ln=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function v$(e){return e=="script"?"p":e}function $$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(ic,r.n,f$(e,r.o)):r});function f$(e,r){var n=eo(r);return{$:r.$,a:n?p(Kf,n<3?s$:m$,ke(e),r.a):o(ua,e,r.a)}}var s$=$(function(e,r){return z(e(r.a),r.b)}),m$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Wt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ko(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ko(c,t,i):c[t]=i}return r}function Ko(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return ir.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return $t(c,r,e.d),c}var c=e.f?ir.createElementNS(e.f,e.c):ir.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),$t(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Gt(c,pr(n===1?l[u]:l[u].b,r));return c}function $t(e,r,n){for(var a in n){var t=n[a];a==="a1"?d$(e,t):a==="a0"?g$(e,r,t):a==="a3"?p$(e,t):a==="a4"?b$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function d$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function p$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function b$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function g$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=h$(r,i),e.addEventListener(t,c,Ht&&{passive:eo(i)<2}),a[t]=c}}var Ht;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ht=!0}}))}catch{}function h$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Ue(i)){for(var c=eo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function _$(e,r){return e.$==r.$&&Hr(e.a,r.a)}function lc(e,r){var n=[];return Ie(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=P$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){_e(n,0,a,r);return}(f?!w$(m,d):m!==d)&&_e(n,2,a,d),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ei(e,r,n,a,y$);return;case 2:ei(e,r,n,a,x$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Xt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function w$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Xt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&_$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function y$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ie(s,i[v],n,++a),a+=s.b||0}}function x$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],w=g.a,x=b.a,h=g.b,T=b.b,k=void 0,G=void 0;if(w===x){f++,Ie(h,T,t,f),f+=h.b||0,m++,d++;continue}var N=l[m+1],R=u[d+1];if(N){var j=N.a,W=N.b;G=x===j}if(R){var F=R.a,Y=R.b;k=w===F}if(k&&G){f++,Ie(h,Y,t,f),ln(i,t,w,T,d,c),f+=h.b||0,f++,un(i,t,w,W,f),f+=W.b||0,m+=2,d+=2;continue}if(k){f++,ln(i,t,x,T,d,c),Ie(h,Y,t,f),f+=h.b||0,m+=1,d+=2;continue}if(G){f++,un(i,t,w,h,f),f+=h.b||0,f++,Ie(W,T,t,f),f+=W.b||0,m+=2,d+=1;continue}if(N&&j===F){f++,un(i,t,w,h,f),ln(i,t,x,T,d,c),f+=h.b||0,f++,Ie(W,Y,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],h=g.b;un(i,t,g.a,h,f),f+=h.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];ln(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var uc="_elmW6BL";function ln(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ln(e,r,n+uc,a,t,i)}function un(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}un(e,r,n+uc,a,t)}function vc(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)vc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&vn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&vn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return vn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=d===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=vn(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function $c(e,r,n,a){return n.length===0?e:(vc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=S$(t,a);t===e&&(e=i)}return e}function S$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return $t(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return C$(e,r);case 5:return r.s(e);default:Kr(10)}}function T$(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function C$(e,r){var n=r.s,a=L$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Gt(e,a),e}function L$(e,r){if(!!e){for(var n=ir.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Gt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function Ut(e){if(e.nodeType===3)return vt(e.textContent);if(e.nodeType!==1)return vt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(Ln,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=rr(Ut(v[a]),u);return p(Fr,l,r,u)}function P$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var z$=E(function(e,r,n,a){return jt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Ut(l);return fc(i,function(v){var s=c(v),m=lc(u,s);l=$c(l,u,m,t),u=s})})});E(function(e,r,n,a){return jt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=ir.title,v=ir.body,s=Ut(v);return fc(i,function(m){oa=c;var d=l(m),f=Fr("body")(L)(d.eu),g=lc(s,f);v=$c(v,s,g,t),s=f,oa=0,u!==d.fK&&(ir.title=u=d.fK)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function fc(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(ao,ro,$r(function(){r&&history.go(r),e()}))});$(function(e,r){return o(ao,ro,$r(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(ao,ro,$r(function(){history.replaceState({},"",r),e()}))});var k$={addEventListener:function(){},removeEventListener:function(){}},M$=typeof window!="undefined"?window:k$;y(function(e,r,n){return nc($r(function(a){function t(i){Rt(n(i))}return e.addEventListener(r,t,Ht&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Ue(n)?re(n.a):q});function sc(e,r){return $r(function(n){ca(function(){var a=document.getElementById(e);n(a?Br(r(a)):Wv(rs(e)))})})}function D$(e){return $r(function(r){ca(function(){r(Br(e()))})})}$(function(e,r){return sc(r,function(n){return n[e](),Cn})});$(function(e,r){return D$(function(){return M$.scroll(e,r),Cn})});y(function(e,r,n){return sc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Cn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var A$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var B$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?re(m):q}a.push(C(cl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(cl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var F$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/V$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function V$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var It=new Float64Array(3),ri=new Float64Array(3),ni=new Float64Array(3),E$=y(function(e,r,n){return new Float64Array([e,r,n])}),R$=function(e){return e[0]},N$=function(e){return e[1]},j$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var G$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function mc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(mc);function dc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(mc(e,r,n),n)}$(dc);function pc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/pc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var W$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$($n);function ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(ft);$(function(e,r){var n,a=It,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var H$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var X$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},U$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/I$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function I$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var O$=new Float64Array(16),J$=new Float64Array(16),q$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Y$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function bc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(bc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return bc(c,l,i,t,n,a)});function gc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(gc);E(function(e,r,n,a){return gc(e,r,n,a,-1,1)});function hc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],G=r[2],N=r[3],R=r[4],j=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],ze=r[14],Se=r[15];return n[0]=a*T+l*k+m*G+b*N,n[1]=t*T+u*k+d*G+w*N,n[2]=i*T+v*k+f*G+x*N,n[3]=c*T+s*k+g*G+h*N,n[4]=a*R+l*j+m*W+b*F,n[5]=t*R+u*j+d*W+w*F,n[6]=i*R+v*j+f*W+x*F,n[7]=c*R+s*j+g*W+h*F,n[8]=a*Y+l*Q+m*ie+b*ve,n[9]=t*Y+u*Q+d*ie+w*ve,n[10]=i*Y+v*Q+f*ie+x*ve,n[11]=c*Y+s*Q+g*ie+h*ve,n[12]=a*oe+l*de+m*ze+b*Se,n[13]=t*oe+u*de+d*ze+w*Se,n[14]=i*oe+v*de+f*ze+x*Se,n[15]=c*oe+s*de+g*ze+h*Se,n}$(hc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],G=r[8],N=r[9],R=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+m*x,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+m*k,n[7]=0,n[8]=a*G+c*N+v*R,n[9]=t*G+l*N+s*R,n[10]=i*G+u*N+m*R,n[11]=0,n[12]=a*j+c*W+v*F+d,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,It);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/pc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,h=g+f,T=b-d,k=g-f,G=c*c*v+u,N=w+m,R=b+d,j=w-m,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],ze=n[7],Se=n[8],sr=n[9],mr=n[10],Ra=n[11],Eu=n[12],Ru=n[13],Nu=n[14],ju=n[15];return a[0]=F*x+ve*h+Se*T,a[1]=Y*x+oe*h+sr*T,a[2]=Q*x+de*h+mr*T,a[3]=ie*x+ze*h+Ra*T,a[4]=F*k+ve*G+Se*N,a[5]=Y*k+oe*G+sr*N,a[6]=Q*k+de*G+mr*N,a[7]=ie*k+ze*G+Ra*N,a[8]=F*R+ve*j+Se*W,a[9]=Y*R+oe*j+sr*W,a[10]=Q*R+de*j+mr*W,a[11]=ie*R+ze*j+Ra*W,a[12]=Eu,a[13]=Ru,a[14]=Nu,a[15]=ju,a});function Z$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Z$);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Q$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Q$);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=dc(e,r,It),t=la(ft(n,a,ri),ri),i=la(ft(a,t,ni),ni),c=O$,l=J$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,hc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ai=0;function _n(e,r){for(;r.b;r=r.b)e(r.a)}function Ot(e){for(var r=0;e.b;e=e.b)r++;return r}var K$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ef=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),rf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),nf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),af=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),tf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),of=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),lf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),uf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),vf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},$f=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},ff=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},sf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},_c=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},mf=function(e){e.gl.disable(e.gl.CULL_FACE)},df=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},pf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},bf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ti=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],gf=[$f,ff,sf,_c,wc,mf,df,pf,bf];function oi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function hf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function yc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function _f(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=yc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Ot(n.b)*s);_n(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function wf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=yf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Ot(r.b),indexBuffer:null,buffers:{}}}function yf(e,r){var n=new Uint32Array(Ot(e)*r),a=0,t;return _n(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ii(e,r){return e+"#"+r}var xc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),_c(n),wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ii(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ai++,v||(v=oi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ai++,s||(s=oi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=hf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=xf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ii(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Sf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=wf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=_f(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=yc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,_n(j0(n),i.a),u=0;u<ti.length;u++){var k=n[ti[u]];k.toggle!==n.toggle&&k.enabled&&(gf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return _n(t,e.g),r});function xf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Sf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Tf=y(function(e,r,n){return c$(r,{g:n,f:{},h:e},Df,Af)}),Cf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Lf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Pf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),zf=$(function(e,r){e.contextAttributes.antialias=!0}),kf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Mf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Df(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};_n(function(t){return o(N0,r,t)},e.h);var n=ir.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),K$(function(){return o(xc,e,n)})):(n=ir.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Af(e,r){return r.f=e.f,xc(r)}var A=Zu,Nn=Ju,Sc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Nn,e,l,v)}else{var u=c.a;return p(Nn,i,l,u)}});return p(Nn,i,p(Nn,e,r,t),a)}),Jt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Jt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ci=function(e){return p(Jt,y(function(r,n,a){return o(A,z(r,n),a)}),L,e)},Tc=1,Bf=2,Cc=0,ye=function(e){return{$:1,a:e}},qt=$(function(e,r){return{$:3,a:e,b:r}}),li=$(function(e,r){return{$:0,a:e,b:r}}),Lc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ff=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Vf=yv,Ef=Gv,Ae=Ki,Sr=$(function(e,r){return o(hv,e,Ca(r))}),Yt=$(function(e,r){return _(o(gv,e,r))}),Pc=function(e){return o(Sr,`
    `,o(Yt,`
`,e))},La=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),kr=function(e){return p(La,$(function(r,n){return n+1}),0,e)},Rf=Qu,Nf=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),qr=$(function(e,r){return p(Nf,e,r,L)}),zc=$(function(e,r){return p(Rf,e,o(qr,0,kr(r)-1),r)}),er=zv,kc=function(e){var r=er(e);return 97<=r&&r<=122},Mc=function(e){var r=er(e);return r<=90&&65<=r},jf=function(e){return kc(e)||Mc(e)},Gf=function(e){var r=er(e);return r<=57&&48<=r},Wf=function(e){return kc(e)||Mc(e)||Gf(e)},Fe=function(e){return p(La,A,L,e)},en=mv,Hf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Pc(Xf(r))))}),Xf=function(e){return o(Uf,e,L)},Uf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=en(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return jf(x)&&o(Vf,Wf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Sr,"",Fe(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Ae(kr(s))+" ways:"));return o(Sr,`

`,o(A,g,o(zc,Hf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Sr,"",Fe(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Sr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Pc(o(Ef,4,f))+(`

`+d))}}),Ve=32,st=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mt=Hu,Zt=cv,Qt=$(function(e,r){return Oo(r)/Oo(e)}),If=ov,wn=Zt(o(Qt,2,Ve)),Dc=C(st,0,wn,mt,mt),Ac=Uu,Bc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Fc=lv,dt=Xu,Pe=$(function(e,r){return I(e,r)>0?e:r}),Of=function(e){return{$:0,a:e}},Kt=Iu,Jf=$(function(e,r){e:for(;;){var n=o(Kt,Ve,e),a=n.a,t=n.b,i=o(A,Of(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),qf=function(e){var r=e.a;return r},Yf=$(function(e,r){e:for(;;){var n=Zt(r/Ve);if(n===1)return o(Kt,Ve,e).a;var a=o(Jf,e,L),t=n;e=a,r=t;continue e}}),Vc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Fc(o(Qt,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(Yf,t,r.l);return C(st,dt(r.p)+n,o(Pe,5,a*wn),i,r.p)}else return C(st,dt(r.p),wn,mt,r.p)}),Zf=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Vc,!1,{z:a,l:n/Ve|0,p:t});var i=Bc(p(Ac,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Qf=$(function(e,r){if(e<=0)return Dc;var n=e%Ve,a=p(Ac,n,e-n,r),t=e-n-Ve;return S(Zf,r,t,e,L,a)}),Ue=function(e){return!e.$},D=Ev,Z=Dv,M=Vv,$e=Av,ua=Rv,Kf=Nv,ke=Mv,eo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=Fr("div"),es=function(e){return{$:2,a:e}},Ec=$(function(e,r){return e}),Rc=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Cr=function(e){return e},rs=Cr,ui=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ns=xv,Tr=dv,Xr=_v,Pn=$(function(e,r){return e<1?r:p(Xr,e,Tr(r),r)}),Pa=Tv,za=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),Nc=Cv,vi=he(function(e,r,n,a,t){if(za(t)||o(ns,"@",t))return q;var i=o(Pa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Nc(o(Pn,c+1,t));if(l.$===1)return q;var u=l;return re(we(ui,e,o(ka,c,t),u,r,n,a))}else return re(we(ui,e,t,q,r,n,a))}),$i=E(function(e,r,n,a){if(za(a))return q;var t=o(Pa,"/",a);if(t.b){var i=t.a;return S(vi,e,o(Pn,i,a),r,n,o(ka,i,a))}else return S(vi,e,"/",r,n,a)}),fi=y(function(e,r,n){if(za(n))return q;var a=o(Pa,"?",n);if(a.b){var t=a.a;return C($i,e,re(o(Pn,t+1,n)),r,o(ka,t,n))}else return C($i,e,q,r,n)});$(function(e,r){if(za(r))return q;var n=o(Pa,"#",r);if(n.b){var a=n.a;return p(fi,e,re(o(Pn,a+1,r)),o(ka,a,r))}else return p(fi,e,q,r)});var as=Sv,ro=function(e){},zn=Br,ts=zn(0),jc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(La,e,r,Fe(m)):C(jc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),fr=y(function(e,r,n){return C(jc,e,r,0,n)}),ne=$(function(e,r){return p(fr,$(function(n,a){return o(A,e(n),a)}),L,r)}),va=ut,no=$(function(e,r){return o(va,function(n){return zn(e(n))},r)}),os=y(function(e,r,n){return o(va,function(a){return o(va,function(t){return zn(o(e,a,t))},n)},r)}),is=function(e){return p(fr,os(A),zn(L),e)},cs=Yv,ls=$(function(e,r){var n=r;return nc(o(va,cs(e),n))}),us=y(function(e,r,n){return o(no,function(a){return 0},is(o(ne,ls(e),r)))}),vs=y(function(e,r,n){return zn(0)}),$s=$(function(e,r){var n=r;return o(no,e,n)});Ke.Task=Jv(ts,us,vs,$s);var fs=tc("Task"),ao=$(function(e,r){return fs(o(no,e,r))}),ss=z$,ms=fv,$a={$:1},Gc=function(e){return{$:2,a:e}},Ma={$:0},je=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},ds=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(je,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Wc=function(e){var r=e.b;return o(je,Ma,r)},hr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ps=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Wc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,rn(n).a4)>0?o(te,ds,hr(o(je,$a,t))):Cr)(o(je,Gc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Rc,l.eA,Ze(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(je,Ma,{B:z(v,s),ab:L,T:o(A,t.B,t.T)})}}),Hc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),bs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),gs=$(function(e,r){return Fe(p(bs,e,r,L))}),Xc=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,h=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(gs,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(Xc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),hs=$(function(e,r){return p(Xc,0,e,r)}),_s=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(_([a]),t)),c=o(hs,e,i),l=o(Hc,e,i);if(l.b){var u=l.a,v=l.b;return o(je,$a,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var m=s.a,d=s.b;return o(je,$a,{B:m,ab:L,T:d})}else return r}}),ws=function(e){var r=e.b;return o(je,$a,r)},ys=function(e){var r=e.b;return o(je,Gc({cY:rn(e).a4}),r)},xs=$(function(e,r){switch(e.$){case 1:return ws(r);case 2:return Wc(r);case 3:return ys(r);default:var n=e.a;return o(_s,n,r)}}),Uc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ss=$(function(e,r){return Ze(r,{av:e(r.av)})}),Ts=function(e){return{$:3,a:e}},Cs=function(e){return{$:2,a:e}},Ls=$(function(e,r){return{$:0,a:e,b:r}}),Ps=$(function(e,r){return{$:1,a:e,b:r}}),Be=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},to=Lv,zs=y(function(e,r,n){return o(hr,0/0,to(o(e,r,n)))}),Ic=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ks=bv,Oc=function(e){return p(ks,A,L,e)},Ms=$(function(e,r){var n=o(Ic,function(a){return a!=="0"&&a!=="."},Oc(r));return le(e&&n?"-":"",r)}),be=Ki,pt=sv,Jc=kv,qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(pt,"0",qc(t))}else{var i=er(r);return i>=48&&i<57?o(pt,Jc(i+1),n):"0"}},bt=iv,Ds=$v,Da=function(e){return o(pt,e,"")},Yc=y(function(e,r,n){return e<=0?n:p(Yc,e>>1,le(r,r),e&1?le(n,r):n)}),yn=$(function(e,r){return p(Yc,e,r,"")}),gt=y(function(e,r,n){return le(n,o(yn,e-Tr(n),Da(r)))}),ht=pv,Zc=function(e){var r=o(Yt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},As=function(e){var r=o(Yt,"e",be(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(hr,0,Nc(o(as,"+",t)?o(Pn,1,t):t)),c=Zc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(hr,"0",o(Be,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Be,Uc(Da),en(le(o(yn,O(i),"0"),v))))):p(gt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Bs=y(function(e,r,n){if(bt(n)||Ds(n))return be(n);var a=n<0,t=Zc(As(O(n))),i=t.a,c=t.b,l=Tr(i)+r,u=le(o(yn,-l+1,"0"),p(gt,l,"0",le(i,c))),v=Tr(u),s=o(Pe,1,l),m=o(e,a,p(Xr,s,v,u)),d=p(Xr,0,s,u),f=m?ht(o(hr,"1",o(Be,qc,en(ht(d))))):d,g=Tr(f),b=f==="0"?f:r<=0?le(f,o(yn,O(r),"0")):I(r,Tr(c))<0?p(Xr,0,g-r,f)+("."+p(Xr,g-r,g,f)):le(i+".",p(gt,r,"0",c));return o(Ms,a,b)}),Qc=Bs($(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Fs=zs(Qc),Vs=y(function(e,r,n){var a=o(Qt,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Fs,t,n)}),Kc=Yu,el=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Kc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},Yr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(X,0,r,n,S(X,1,v,s,m,d),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,d=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,d,t))}else return S(X,e,r,n,a,t)}),_t=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Kc,e,t);switch(u){case 0:return S(Yr,a,t,i,p(_t,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Yr,a,t,i,c,p(_t,e,r,l))}}),Yn=y(function(e,r,n){var a=p(_t,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Es=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},rl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,w=d.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,m,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,m,d,x))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,m),S(X,1,n,a,d,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,d=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(X,1,n,a,S(X,0,i,c,T,d),S(X,0,g,b,w,x))}else return e},Rs=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),Zn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Zn(t),l);var u=rl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Yr,v,s,m,Zn(d),f)}else return nr}else return S(X,r,n,a,Zn(t),l)}else return nr},dn=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(dn,e,i),c);var u=rl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Yr,v,s,m,o(dn,e,d),f)}else return nr}else return S(X,n,a,t,o(dn,e,i),c);else return o(Ns,e,Vt(Rs,e,r,n,a,t,i,c))}),Ns=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=Es(c);if(l.$===-1){var u=l.b,v=l.c;return S(Yr,n,u,v,i,Zn(c))}else return nr}else return S(Yr,n,a,t,i,o(dn,e,c))}else return nr}),js=$(function(e,r){var n=o(dn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),jn=y(function(e,r,n){var a=r(o(el,e,n));if(a.$)return o(js,e,n);var t=a.a;return p(Yn,e,t,n)}),Gs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ps,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ls,z(i,c),p(Vs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,Be(function(a){return a.$===3?Ts(n):a}));default:var r=e.a,n=e.b;return o(jn,r,Be(function(a){return a.$===2?Cs(n):a}))}},Ws=function(e){return Ss(Gs(e))},Hs=$(function(e,r){return o(ne,Ws(e),r)}),Xs=$(function(e,r){return Ze(r,{eA:o(Hs,e,r.eA)})}),Us=$(function(e,r){var n=r.a,a=r.b;return o(je,n,Ze(a,{B:o(Uc,Xs(e),a.B)}))}),Is=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Os=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,Ze(t,{B:o(Is,o(e,i.a,r),i)}))}),Js=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ze(a,{aL:!a.aL});case 2:var t=n.a;return Ze(a,{G:p(ps,e,t,a.G)});case 3:var i=n.a;return Ze(a,{G:o(Us,i,a.G)});case 4:var c=n.a;return Ze(a,{G:p(Os,r,c,a.G)});default:var l=n.a;return Ze(a,{G:o(xs,l,a.G)})}}),qs=$(function(e,r){return o(je,Ma,{B:z(e,r(e)),ab:L,T:L})}),Ys=Zv,mi=Ys(L),fa=Fv,xn=Bv,Zs=n$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return ke({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",fa(xn)))},o(M,"left",Z))},o(M,"pressedKeys",fa(xn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Qs=function(e){return{$:4,a:e}},Ks={$:0},em=rc,Xe=$(function(e,r){return o(cc,e,em(r))}),J=Xe("className"),rm=function(e){var r=e.b.B;return r.b},sa=Xe("id"),nm=l$,ma=nm,am=u$,se=am,tm={$:1},om=function(e){return{$:3,a:e}},im=function(e){return{$:5,a:e}},di=Fr("a"),oo=Fr("button"),cm=Ln("d"),nl=oc("http://www.w3.org/2000/svg"),lm=nl("path"),um=nl("svg"),vm=Ln("viewBox"),pn=function(e){return o(um,_([vm("0 0 100 100"),o(se,"width","100%"),o(se,"height","100%")]),_([o(lm,_([cm(e)]),L)]))},pi=function(e){return o(Xe,"href",$$(e))},Ir={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},$m=function(e){return{$:0,a:e}},al=ic,tl=$(function(e,r){return o(al,e,$m(r))}),io=function(e){return o(tl,"click",ke(e))},bi=Xe("target"),fm=Xe("title"),wt=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(wt,e,i),o(wt,e,c))}),sm=vt,vr=sm,mm=function(e){return p(Jt,y(function(r,n,a){return o(A,n,a)}),L,e)},dm=$(function(e,r){return{$:3,a:e,b:r}}),pm=$(function(e,r){return{$:2,a:e,b:r}}),bm=$(function(e,r){return{$:0,a:e,b:r}}),gm=$(function(e,r){return{$:1,a:e,b:r}}),Vr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hm=C(Vr,0/255,0/255,0/255,1),_m=rc,wm=$(function(e,r){return o(cc,e,_m(r))}),ym=wm("checked"),Je=uv,xm=y(function(e,r,n){return le(o(yn,e-Tr(n),Da(r)),n)}),da=ev,ol=function(e){var r=function(n){return n<10?Ae(n):Da(Jc(87+n))};return e<16?r(e):le(ol(e/16|0),r(o(da,16,e)))},Sm=o(te,ol,o(xm,2,"0")),co=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Tm=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b6;return o(Sr,"",o(A,"#",o(ne,o(te,Je,Sm),_([n*255,a*255,t*255]))))},yt=Xe("htmlFor"),xt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Cm=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),il=$(function(e,r){return p(fr,Cm(e),L,r)}),cl=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Lm=B$,Pm=Pv,zm=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),km=A$,Mm=function(e){return o(km,{ew:!1,fe:!1},e)},ll=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Dm=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Am=function(e){return{$:2,a:e}},Bm=function(e){return{$:0,a:e}},Fm=function(e){return{$:1,a:e}},Ga=$(function(e,r){return er(r)-er(e)}),Wa=y(function(e,r,n){var a=er(n);return I(er(e),a)<1&&I(a,er(r))<1}),Vm=$(function(e,r){var n=function(t){return I(t,e)<0?ue(t):ye(Fm(r))},a=p(Wa,"0","9",r)?ue(o(Ga,"0",r)):p(Wa,"a","z",r)?ue(10+o(Ga,"a",r)):p(Wa,"A","Z",r)?ue(10+o(Ga,"A",r)):ye(Bm(r));return o(pa,n,a)}),ul=$(function(e,r){var n=en(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return ue(c+l*e)},o(ul,e,i))},o(Vm,e,t))}),Em=$(function(e,r){return 2<=e&&e<=36?o(ul,e,ht(r)):ye(Am(e))}),Rm=Em(16),Nm=y(function(e,r,n){return C(Vr,e,r,n,1)}),jm=E(function(e,r,n,a){return C(Vr,e,r,n,a)}),kn=Ku,Gm=$(function(e,r){var n=o(kn,10,e);return Je(r*n)/n}),Wm=wv,Hm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Oc(n);if(a.b&&!a.b.b){var t=a.a;return Pm(_([t,t]))}else return n};return o(te,Wm,o(te,function(n){return o(Be,function(a){return p(Lm,1,a,n)},Mm(e))},o(te,xt(ll),o(te,Be(function(n){return n.fF}),o(te,Be(il(Cr)),o(te,zm("Parsing hex regex failed"),pa(function(n){var a=o(ne,o(te,r,o(te,Rm,Dm(If))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(jm,t/255,c/255,u/255,o(Gm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ue(p(Nm,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ba=Fr("input"),St=Fr("label"),Tt=Xe("name"),vl=$(function(e,r){return p(fr,M,r,e)}),Xm=o(vl,_(["target","checked"]),Z),Um=function(e){return o(tl,"change",o(ua,e,Xm))},Im=function(e){return z(e,!0)},Om=function(e){return{$:1,a:e}},Jm=$(function(e,r){return o(al,e,Om(r))}),qm=o(vl,_(["target","value"]),xn),lo=function(e){return o(Jm,"input",o(ua,Im,o(ua,e,qm)))},$l=Xe("max"),fl=Xe("min"),sl=function(e){return o(Xe,"step",e)},ga=Xe("type"),uo=Xe("value"),gi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(U,L,_([o(St,_([yt(r)]),_([o(U,_([J("relative w-full")]),_([o(U,_([J("inline-block")]),_([vr(r)])),o(U,_([J("inline-block float-right")]),_([vr(be(n))]))]))])),o(ba,_([ga("range"),o(se,"width","100%"),sa(r),Tt(r),fl(be(a)),$l(be(t)),uo(be(n)),sl(be(i)),lo(o(te,to,o(te,hr(42),c)))]),L)]))},Ym=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Zm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,L,_([o(U,_([J("mb-2")]),_([o(St,_([yt(e)]),_([vr(e)]))])),o(ba,_([ga("checkbox"),sa(e),Tt(e),Um(dm(e)),ym(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return gi({cg:e,cs:i,cw:t,cA:bm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return gi({cg:e,cs:i,cw:t,cA:o(te,Je,gm(e)),cW:1,c1:c});default:var c=r.a;return o(U,L,_([o(U,_([o(se,"margin-bottom","6px")]),_([o(St,_([yt(e)]),_([vr(e)]))])),o(ba,_([ga("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),sa(e),Tt(e),lo(function(l){return o(pm,e,o(Ym,hm,Hm(l)))}),uo(Tm(c))]),L)]))}}),Qm=function(e){return o(U,_([J("p-4 border-y-[0.5px] border-white20")]),_([o(U,_([J("text-lg pb-2")]),_([vr(e.ff)])),o(U,_([J("pl-2 pr-2")]),mm(o(wt,Zm,e.av)))]))},Km=function(e){return o(U,_([J("text-xs text-white60")]),o(ne,Qm,e))},ed=function(e){return o(U,_([J("absolute left-[104px] bottom-2 text-sm text-white40")]),_([vr("clock: "+o(Qc,3,rn(e).a4))]))},rd=function(e){e.a;var r=e.b.T;return o(Be,function(n){return Je(60/(rn(e).a4-n))},o(Be,o(te,qf,function(n){return n.a4}),ll(o(Hc,59,r))))},nd=function(e){return o(U,_([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rd(e);if(r.$===1)return _([vr("... Fps")]);var n=r.a;return _([vr(Ae(n)+" Fps")])}())},ad=function(e){return{$:0,a:e}},td=function(e){var r=e.b.T;return kr(r)},od=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return kr(r)+1+kr(n)},id=function(e){return o(ba,_([J("absolute w-full"),ga("range"),fl(Ae(0)),$l(Ae(od(e)-1)),uo(Ae(td(e))),sl(Ae(1)),lo(o(te,to,o(te,hr(42),o(te,Je,ad))))]),L)},hi={$:1},cd={$:3},ld={$:2},ml=function(e){return!e.b},_i=$(function(e,r){return o(oo,_([J("px-2 bg-black40"),J(r),io(e)]),_([vr("REC")]))}),wi=$(function(e,r){return o(oo,_([J("absolute left-[60px] mx-1 px-1 bg-black40"),io(r)]),_([o(U,_([J("w-4 h-6 fill-white80")]),_([pn(e)]))]))}),ud=function(e){var r=e.a,n=e.b.ab;return o(U,_([J("py-1")]),_([function(){switch(r.$){case 0:return o(_i,hi,"text-red-500 font-bold");case 1:return o(_i,ld,"text-white80 font-bold");default:return o(U,L,L)}}(),function(){switch(r.$){case 0:return o(U,L,L);case 1:return ml(n)?o(U,L,L):o(wi,Ir.fo,cd);default:return o(wi,Ir.fn,hi)}}()]))},vd=function(e){return o(U,_([J("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([id(e),ud(e),nd(e),ed(e)]))},$d=function(e){var r=e.a;return gr(r,Ma)},fd=$(function(e,r){var n=$d(r.G)?o(U,L,L):o(U,_([J("absolute pointer-events-none w-8 h-8"),o(se,"left",be(e.fp.fT+.5*e.cT.fR)+"px"),o(se,"top",be(-e.fp.fX+.5*e.cT.eW)+"px")]),_([o(U,_([J(e.fp.e4?"fill-black80":"fill-white40")]),_([pn(Ir.fp)]))]));return o(U,L,_([n]))}),sd=$(function(e,r){var n=o(oo,_([J(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),io(tm),fm("Distraction Free Mode")]),_([pn(Ir.f$)])),a=o(U,_([J("absolute w-8 bottom-12")]),_([o(di,_([J("fill-twitterBlue40 hover:fill-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),_([pn(Ir.fL)]))])),t=o(U,_([J("absolute w-8 bottom-2")]),_([o(di,_([J("fill-githubCat40 hover:fill-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),_([pn(Ir.eQ)]))]));return r.aL?o(U,_([J("fixed w-10 h-10 p-1")]),_([n])):o(U,L,_([o(U,_([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(U,_([J("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",be(e.cT.eW-80)+"px")]),_([o(ma,om,Km(rn(r.G).eA))])),o(U,_([J("absolute bottom-0 left-10 h-20"),o(se,"width",e.cT.fR>600?"600px":be(e.cT.fR-40)+"px")]),_([o(ma,im,vd(r.G))])),o(fd,e,r)]))}),md=y(function(e,r,n){var a=rm(n.G),t=rn(n.G);return o(U,_([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(se,"width",be(t.cT.fR)+"px"),o(se,"height",be(t.cT.eW)+"px")]),_([o(U,_([J("fixed")]),_([o(ma,Ec(Ks),o(e,t,a))])),o(U,_([sa("gui")]),_([o(sd,t,n),o(ma,Qs,o(r,t,a))]))]))}),dd=He(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(Js,r,i,u,v),mi)}),l=function(u){var v=o(Rc,n,u.e1);return z({aL:u.e1.cT.fR<500,G:o(qs,v,a)},mi)};return ss({e0:l,fG:Ec(Zs(es)),fM:c,fP:o(md,e,t)})}),pd=E(function(e,r,n,a){return we(dd,e,r,n,a,$(function(t,i){return o(U,L,L)}),y(function(t,i,c){return c}))}),bd=y(function(e,r,n){return C(pd,e,r,L,n)}),gd=function(e){return{}},hd=$(function(e,r){return r}),Mr=rv,yi=function(e){return e*Mr/180},Dr=function(e){return e},fn=function(e){return Dr(Mr*(e/180))},dr=vv,_d=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(Pe,O(c),o(Pe,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,m=dr(s*s+v*v+u*u);return re({fT:s/m,fX:v/m,c6:u/m})}else return q}),Ha=function(e){return e},vo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),Qn=function(e){var r=e,n=o(Pe,O(r.fT),o(Pe,O(r.fX),O(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=dr(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c6:a/c})}else return q},ha=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),wd=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),dl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),yd=$(function(e,r){var n=e,a=r;return I(a,n)<0}),xd=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),Sd=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),Td=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Oe=0,pl={fT:0,fX:0,c6:0},Cd=y(function(e,r,n){return o(xt,function(a){var t=o(xd,o(Sd,a,r),r);return o(xt,function(i){var c=o(vo,r,e),l=o(wd,n,c),u=o(dl,Oe,l)?c:o(yd,Oe,l)?Td(c):pl;return o(Be,function(v){return B(a,i,v)},Qn(u))},Qn(t))},Qn(e))}),Ld=function(e){var r=e,n=O(r.c6),a=O(r.fX),t=O(r.fT);if(I(t,a)<1)if(I(t,n)<1){var i=dr(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=dr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(I(a,n)<1){var i=dr(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=dr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},$o=function(e){var r=Ld(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return z(r,c)},Ur=function(e){var r=e;return r},ar=function(e){return e},Pd=$(function(e,r){var n=$o(e),a=n.a,t=n.b;return ar({cB:r,c4:a,c5:t,c7:e})}),zd=function(e){var r=o(ha,e.aR,e.dj),n=Ur(e.ei),a=o(vo,r,n),t=p(Cd,r,n,a);if(t.$){var v=Qn(r);if(v.$){var m=$o(e.ei),d=m.a,f=m.b;return ar({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Pd,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ar({cB:e.dj,c4:u,c5:l,c7:c})}},De={fT:0,fX:0,c6:0},kd=function(e){return{$:0,a:e}},me=function(e){var r=e;return O(r)},Kn=function(e){var r=e;return .5*r},Md=tv,Dd=function(e){var r=e;return Md(r)},Ad=function(e){var r=Kn(me(e.ej)),n=Dd(r);return{cM:kd(n),c2:e.c2}},cr=function(e){return e},fo=cr({fT:0,fX:1,c6:0}),Bd=function(e){var r=e.aR,n=e.dj,a=e.ei;return Ad({ej:fn(40),c2:zd({dj:Ha(n),aR:Ha(r),ei:o(hr,fo,o(_d,De,Ha(a)))})})},Xa=function(e){return e/255},Fd=y(function(e,r,n){return C(Vr,Xa(e),Xa(r),Xa(n),1)}),bl=C(Vr,52/255,101/255,164/255,1),Vd=C(Vr,115/255,210/255,22/255,1),so=function(e){return{$:5,a:e}},Ed=function(e){return so(e)},mo=$(function(e,r){return{$:4,a:e,b:r}}),gl=function(e){return e},Rd=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),Nd=$(function(e,r){return gl(z(e,o(Rd,r,e)))}),hl=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),jd=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(hl,e(n),e(a),e(t))}),br=function(e){return e},Ua=$(function(e,r){return o(mo,e,o(Nd,De,o(jd,br,r)))}),Gd=C(Vr,204/255,0/255,0/255,1),Wd=Ed(_([o(Ua,Gd,B(100,0,0)),o(Ua,Vd,B(0,100,0)),o(Ua,bl,B(0,0,100))])),po=$(function(e,r){return{$:0,a:e,b:r}}),Ia=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Oa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),lr=$(function(e,r){var n=e,a=r;return a-n}),Hd=cr({fT:-1,fX:0,c6:0}),Xd=cr({fT:0,fX:-1,c6:0}),_l=cr({fT:0,fX:0,c6:-1}),wl=cr({fT:1,fX:0,c6:0}),bo=cr({fT:0,fX:0,c6:1}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),Ud=He(function(e,r,n,a,t,i){var c=o(Ia,n,i)?bo:_l,l=o(Ia,r,t)?fo:Xd,u=o(Ia,e,a)?wl:Hd,v=B(me(o(lr,e,a)),me(o(lr,r,t)),me(o(lr,n,i))),s=p(pe,o(Oa,e,a),o(Oa,r,t),o(Oa,n,i)),m=ar({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),Lr=function(e){var r=e;return r.fT},Pr=function(e){var r=e;return r.fX},zr=function(e){var r=e;return r.c6},Id=$(function(e,r){return we(Ud,Lr(e),Pr(e),zr(e),Lr(r),Pr(r),zr(r))}),Ct=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),Od=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(po,e,o(Id,p(Ct,-c,-l,-u),p(Ct,c,l,u)))}),Lt=function(e){return{$:0,a:e}},yl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),xl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Ja=function(e){return p(xl,0,1,e<=.04045?e/12.92:o(kn,(e+.055)/1.055,2.4))},Mn=E$,Jd=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b6;return p(Mn,Ja(n),Ja(a),Ja(t))},qd=function(e){return p(yl,0,Lt(Jd(e)),Lt(0))},Sl=$(function(e,r){return{$:2,a:e,b:r}}),Tl=$(function(e,r){return{$:3,a:e,b:r}}),Cl=$(function(e,r){return{$:1,a:e,b:r}}),Yd=function(e){var r=e;return r},go=function(e){var r=e;return Yd(r.er)},ho=function(e){var r=e;return r.aK},nn=function(e){var r=e;return r.cB},Ar=nv,Zr=av,ea=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=Zr(c),v=a.eG,s=v,m=s.fT*u,d=l*m,f=m*m,g=s.fX*u,b=l*g,w=m*g,x=g*g,h=1-2*(f+x),T=s.c6*u,k=l*T,G=2*(w-k),N=2*(w+k),R=m*T,j=2*(R+b),W=2*(R-b),F=g*T,Y=2*(F-d),Q=2*(F+d),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+j*i.c6,fX:N*i.fT+oe*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+h*i.c6}}),Dn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=Zr(c),v=a.cB,s=v,m=i.fT-s.fT,d=i.fX-s.fX,f=i.c6-s.c6,g=a.eG,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,k=l*T,G=w*T,N=T*T,R=1-2*(h+N),j=b.c6*u,W=l*j,F=2*(G-W),Y=2*(G+W),Q=w*j,ie=2*(Q+k),ve=2*(Q-k),oe=T*j,de=2*(oe-x),ze=2*(oe+x),Se=j*j,sr=1-2*(N+Se),mr=1-2*(h+Se);return{fT:s.fT+sr*m+F*d+ie*f,fX:s.fX+Y*m+mr*d+de*f,c6:s.c6+ve*m+ze*d+R*f}}),Er=function(e){var r=e;return r.c4},Rr=function(e){var r=e;return r.c5},Nr=function(e){var r=e;return r.c7},Zd=y(function(e,r,n){return ar({cB:p(Dn,e,r,nn(n)),c4:p(ea,e,r,Er(n)),c5:p(ea,e,r,Rr(n)),c7:p(ea,e,r,Nr(n))})}),Qd=y(function(e,r,n){return{er:p(Zd,e,r,go(n)),aK:ho(n)}}),An=$(function(e,r){return{eG:r,cB:e}}),Kd=$(function(e,r){var n=o(Dn,e,r),a=o(ea,e,r);return function(t){var i=t;return o(An,n(i.cB),a(i.eG))}}),e0=y(function(e,r,n){var a=n;return{k:p(Kd,e,r,a.k),e9:a.e9,fr:a.fr}}),_o=function(e){var r=e;return r},Ll=$(function(e,r){var n=_o(r),a=n.a,t=n.b;return gl(z(e(a),e(t)))}),r0=y(function(e,r,n){return o(Ll,o(Dn,e,r),n)}),wo=function(e){var r=e;return r.ey},yo=function(e){var r=e;return r.fr},Pl=$(function(e,r){return{ey:r,fr:me(e)}}),n0=y(function(e,r,n){return o(Pl,yo(n),p(Dn,e,r,wo(n)))}),zl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),a0=y(function(e,r,n){return o(zl,o(Dn,e,r),n)}),Aa=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(po,l,p(Qd,e,r,a));case 1:var l=n.a,t=n.b;return o(Cl,l,p(a0,e,r,t));case 3:var l=n.a,i=n.b;return o(Tl,l,p(n0,e,r,i));case 2:var l=n.a,c=n.b;return o(Sl,l,p(e0,e,r,c));case 4:var l=n.a,u=n.b;return o(mo,l,p(r0,e,r,u));default:var v=n.a;return so(o(ne,o(Aa,e,r),v))}}),xo=wl,t0=o(An,De,xo),o0=$(function(e,r){return p(Aa,t0,Dr(e),r)}),So=fo,i0=o(An,De,So),c0=$(function(e,r){return p(Aa,i0,Dr(e),r)}),To=bo,l0=o(An,De,To),u0=$(function(e,r){return p(Aa,l0,Dr(e),r)}),K=$(function(e,r){var n=r;return e*n}),ur=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Bn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c6:a.c6+r*(t.c6-a.c6)}}),v0=y(function(e,r,n){var a=go(n),t=Er(a),i=Rr(a),c=Nr(a),l=p(Bn,e,r,nn(a)),u=r>=0?ar({cB:l,c4:t,c5:i,c7:c}):ar({cB:l,c4:ur(t),c5:ur(i),c7:ur(c)}),v=ho(n),s=v.a,m=v.b,d=v.c,f=me(o(K,r,s)),g=me(o(K,r,m)),b=me(o(K,r,d));return{er:u,aK:B(f,g,b)}}),Co=function(e){var r=e;return r.k},kl=function(e){var r=e;return r.eG},xi=function(e){return kl(Co(e))},Ml=function(e){var r=e;return r.cB},$0=function(e){return Ml(Co(e))},Dl=function(e){var r=e;return r.e9},Al=function(e){var r=e;return r.fr},f0=y(function(e,r,n){var a=me(o(K,r,Al(n))),t=me(o(K,r,Dl(n))),i=r>=0?xi(n):ur(xi(n)),c=p(Bn,e,r,$0(n));return{k:o(An,c,i),e9:t,fr:a}}),s0=y(function(e,r,n){return o(Ll,o(Bn,e,r),n)}),m0=y(function(e,r,n){return o(Pl,o(K,O(r),yo(n)),p(Bn,e,r,wo(n)))}),d0=y(function(e,r,n){return o(zl,o(Bn,e,r),n)}),Bl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(po,c,p(v0,De,e,n));case 1:var c=r.a,a=r.b;return o(Cl,c,p(d0,De,e,a));case 3:var c=r.a,t=r.b;return o(Tl,c,p(m0,De,e,t));case 2:var c=r.a,i=r.b;return o(Sl,c,p(f0,De,e,i));case 4:var c=r.a,l=r.b;return o(mo,c,p(s0,De,e,l));default:var u=r.a;return so(o(ne,Bl(e),u))}}),p0=$(function(e,r){return(r-Fc(r/e)*e)/e}),b0=function(e){return 2*Mr*e},Gn=E(function(e,r,n,a){return e+(r-e)*(1+Ar(b0(o(p0,n,a))))/2}),g0=function(e){return o(u0,C(Gn,1,10,30,e.a4),o(c0,C(Gn,1,10,30,e.a4),o(o0,C(Gn,1,10,30,e.a4),o(Bl,C(Gn,1,2,14,e.a4),o(Od,qd(bl),B(1,1,1))))))},h0=$(function(e,r){return _([Wd,g0(e)])}),_0=function(e){return e},w0=function(e){return br(.01*e)},Si=function(e){return e},y0=function(e){return e},x0=function(e){return{$:0,a:e}},S0=x0,T0={$:3},C0=T0,L0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),P0=L0,z0=$(function(e,r){return r.b?p(fr,A,r,e):e}),Ge=function(e){return p(fr,z0,L,e)},Lo=$(function(e,r){return Ge(o(ne,e,r))}),k0=function(e){return{$:1,a:e}},M0=k0,D0=function(e){return o(Ln,"height",Ae(e))},A0=function(e){return i$(v$(e))},B0=A0,F0=function(e){return{$:2,a:e}},V0=F0,E0=function(e){return o(Sr,"",e)},R0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return E0(_(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},N0=$(function(e,r){switch(r.$){case 0:return o(Cf,e,r);case 1:return o(Lf,e,r);case 2:return o(Pf,e,r);case 3:return o(zf,e,r);case 4:return o(kf,e,r);default:return o(Mf,e,r)}}),j0=$(function(e,r){switch(r.$){case 0:return o(rf,e,r);case 1:return o(nf,e,r);case 2:return o(af,e,r);case 3:return o(tf,e,r);case 4:return o(of,e,r);case 5:return o(cf,e,r);case 6:return o(lf,e,r);case 7:return o(uf,e,r);default:return vf(e)}}),G0=y(function(e,r,n){return p(Tf,e,r,n)}),Ti=function(e){var r=e;return r},an=H$,qa=C(an,1,1,1,1),qe=y(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),W0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),H0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(W0,n*a/t,n,n*(1-a-t)/t)}),X0=function(e){var r=e.a,n=e.b,a=e.c;return p(Mn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Po=$(function(e,r){return X0(o(H0,e,r))}),Fl=$(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),Qe=q$,U0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ya=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(an,a.bY,a.bY,a.bY,i);return we(t,e,c,U0(a),a.dp,r,n)}),Vl=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Fl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(A,S(Ya,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(A,S(Ya,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(A,S(Ya,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(La,C(Vl,e,r,n,a),i,k)}}),I0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),El=I0,zo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),O0=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,518,r,n,a)},J0=$(function(e,r){return{$:6,a:e,b:r}}),q0=J0,Rl=_([O0({V:1,W:0,Z:!1}),C(El,!1,!1,!1,!1),o(q0,0,1)]),Qr=519,ko=8,Nl=15,Or=7681,Y0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=ef,Z0=$(function(e,r){return{$:0,a:e,b:r}}),Q0=Z0({df:1,$7:0,dV:5}),Me=F$,K0=Q0(_([{bU:o(Me,-1,-1)},{bU:o(Me,1,-1)},{bU:o(Me,-1,1)},{bU:o(Me,1,1)}])),ep={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},rp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Mo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(rp,a,t,i)))}),Do=function(e){return p(Mo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Ao=function(e){return S(ae,_([Do(e),C(El,!1,!1,!1,!1)]),ep,Y0,K0,{})},np=Ao({a9:Or,cp:0,cO:ko,bm:Qr,c3:Nl,bu:Or,bv:Or}),ap=516,Ci=5386,xe=7680,tp=function(e){return o(kn,2,e+4)},jl=function(e){return Ao({a9:xe,cp:Nl,cO:ko,bm:ap,c3:tp(e),bu:Ci,bv:Ci})},op=y(function(e,r,n){return Ge(_([p(qe,e,n,Rl),_([jl(r),np])]))}),ip=$(function(e,r){return Ge(o(zc,op(e),r))}),cp=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,513,r,n,a)},lp=cp({V:1,W:0,Z:!0}),up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},vp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return up(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},$p=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Li=$(function(e,r){var n=e,a=r;return p($p,32774,n,a)}),fp=1,Pi=771,sp=770,Bo=vp({bw:0,aH:o(Li,fp,Pi),bz:0,bB:o(Li,sp,Pi),bG:0,bW:0}),jr=_([lp,Bo]),mp=function(e){var r=e;return r.dO},dp=function(e){var r=e;return r.dP},Gl=function(e){var r=e;return r.dQ},pp=function(e){var r=e;return r.dR},bp=function(e){var r=e;return r.dS},Wl=function(e){var r=e;return r.dT},Hl=function(e){return B(o(lr,pp(e),mp(e)),o(lr,bp(e),dp(e)),o(lr,Wl(e),Gl(e)))},zi=function(e){var r=e;return nn(r)},gp=function(e){return e},hp=function(e){return ar({cB:gp({fT:e.H,fX:e.I,c6:e.J}),c4:cr({fT:e.q,fX:e.r,c6:e.s}),c5:cr({fT:e.t,fX:e.u,c6:e.v}),c7:cr({fT:e.w,fX:e.x,c6:e.y})})},Za=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),Xl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*d.fT+l*d.fX+u*d.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),Ul=$(function(e,r){return{cB:o(Xl,e,nn(r)),c4:o(Za,e,Er(r)),c5:o(Za,e,Rr(r)),c7:o(Za,e,Nr(r))}}),_a=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Pe,n,a)}),ra=$(function(e,r){return I(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),_p=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},wp=function(e){var r=e;return B(r.fT,r.fX,r.c6)},bn=$(function(e,r){var n=e,a=r;return a+n}),yp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Kn(me(a)),c=Kn(me(n)),l=Kn(me(t)),u=wp(r),v=u.a,s=u.b,m=u.c;return{dO:o(bn,c,v),dP:o(bn,i,s),dQ:o(bn,l,m),dR:o(lr,c,v),dS:o(lr,i,s),dT:o(lr,l,m)}}),ki=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,s=t.fT*r,m=We(Nr(e)),d=O(l*m.fT)+O(c*m.fX)+O(i*m.c6),f=We(Rr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c6),b=We(Er(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c6),x=o(yp,B(w,g,d),o(Xl,e,p(Ct,s,v,u)));if(a.$)return re(x);var h=a.a;return re(o(_p,h,x))}),Pt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(ki,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(ki,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Pt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,m=o(Ul,hp(v),e),d=r*v.bY,f=e,g=r,b=C(Pt,m,d,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),tn=R$,on=N$,cn=j$,Il=function(e){return{$:4,a:e}},xp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Il(o(xp,e,L))},Sp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Tp=function(e){var r=e;return r},Mi=Ao({a9:Or,cp:0,cO:ko,bm:Qr,c3:255,bu:Or,bv:Or}),Cp=function(e){var r=e,n=o(Pe,O(r.fT),o(Pe,O(r.fX),O(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=dr(i*i+t*t+a*a);return c*n}else return Oe},Te={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fT:0,fX:0,c6:0},Re=$(function(e,r){var n=e,a=r;return Qe({dx:n.fT,dy:n.bW,dz:a.fT,dA:a.bW,dB:n.fX,dC:n.bG,dD:a.fX,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),sn=z({be:o(Re,Te,Te),bL:o(Re,Te,Te),bM:o(Re,Te,Te),bN:o(Re,Te,Te)},C(an,0,0,0,0)),Di=function(e){var r=e;return-r},Ol=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,515,r,n,a)},ql=240,Lp=_([Jl({V:1,W:0,Z:!0}),Do({a9:xe,cp:ql,cO:0,bm:Ol,c3:0,bu:xe,bv:xe}),Bo]),Pp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=me(a),l=c,u=me(t),v=u,s=n.cM;if(s.$){var d=s.a;return bt(v)?Qe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return bt(v)?Qe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Wn=$(function(e,r){return(1&e>>r)===1?0:1}),zp=function(e){return _([Jl({V:1,W:0,Z:!0}),Do({a9:xe,cp:ql,cO:e,bm:Ol,c3:0,bu:xe,bv:xe}),Bo])},kp=y(function(e,r,n){return Ge(o(ne,function(a){var t=a<<4,i=C(an,o(Wn,a,0),o(Wn,a,1),o(Wn,a,2),o(Wn,a,3));return p(qe,e,z(r,i),zp(t))},o(qr,1,o(kn,2,n)-1)))}),Jr=function(e){var r=e;return r},Mp=Y$,Ai=function(e){var r=e;return ur(Nr(r))},Dp={cB:De,c4:xo,c5:So,c7:To},Ba=function(e){var r=e;return r},Ap=function(e){var r=Ba(nn(e)),n=We(Nr(e)),a=We(Rr(e)),t=We(Er(e));return Qe({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Bp=$(function(e,r){var n=r;return Ap(o(Ul,n,e))}),Fp=function(e){return o(Bp,Dp,e)},Vp=function(e){var r=e;return r.c2},Ep=function(e){var r=e;return Er(r)},Rp=function(e){var r=e;return Rr(r)},Np=function(e){var r=Vp(e.ev),n=ar({cB:zi(r),c4:Ep(r),c5:Rp(r),c7:ur(Ai(r))}),a=Fn(e.aP),t=a,i=C(Pt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=Fp(r),u=o(K,.99,o(ce,me(e.aJ),Di(Gl(c)))),v=Hl(c),s=v.a,m=v.b,d=v.c,f=Cp(p(hl,s,m,d)),g=o(K,1.01,o(bn,f,Di(Wl(c)))),b=o(Pp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Mp(b).dM,x=w?We(ur(Ai(r))):Jr(zi(r)),h=function(){var oe=e.b_;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),T=h.a,k=h.b,G=e.bE,N=G,R=o(Po,N,e.b0),j=R,W=Qe({dx:0,dy:x.fT,dz:tn(j),dA:e.ec,dB:0,dC:x.fX,dD:on(j),dE:Tp(f),dF:0,dG:x.c6,dH:cn(j),dI:T,dJ:0,dK:w,dL:0,dM:k}),F=we(Vl,W,l,b,Sp,t,{M:L,U:L,fz:L}),Y=e.bK;switch(Y.$){case 0:var Q=Y.a;return Ge(_([p(qe,F.M,z(Q,qa),jr),p(qe,F.U,sn,jr)]));case 1:var Q=Y.a;return Ge(_([p(qe,F.M,sn,jr),_([Mi]),p(qe,F.fz,Q.be,Rl),_([jl(0)]),p(qe,F.M,z(Q,qa),Lp),p(qe,F.U,sn,jr)]));default:var ie=Y.a,ve=Y.b;return Ge(_([p(qe,F.M,z(ve,qa),jr),_([Mi]),o(ip,F.fz,ie),p(kp,F.M,ve,kr(ie)),p(qe,F.U,sn,jr)]))}},jp=function(e){return o(Ln,"width",Ae(e))},Gp=$(function(e,r){var n=_([M0(1),V0(0),S0(!0),C(P0,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return B(n,"0",1);case 1:return B(o(A,C0,n),"1",1);default:var k=T.a;return B(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ti(v),m=o(se,"height",Ae(s)+"px"),d=Ti(u),f=d/s,g=o(Lo,function(T){return Np({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),b=o(se,"width",Ae(d)+"px"),w=e.aI,x=w,h=R0(x);return p(B0,"div",_([o(se,"padding","0px"),b,m]),_([z(i,p(G0,t,_([jp(Je(d*c)),D0(Je(s*c)),b,m,o(se,"display","block"),o(se,"background-color",h)]),g))]))}),Wp=function(e){return o(Gp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},Yl=function(e){return e},Bi=Yl({fT:.31271,fX:.32902}),Hp=$(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(Po,r.ce,r.b7),u=l;return{bz:cn(u),ex:n,bG:on(u),cK:0,bW:tn(u),c_:1,fT:-t,fX:-i,c6:-c}}),Xp=function(e){return e},Up=function(e){return Xp(1.2*o(kn,2,e))},Qa=function(e){return e},Ip={$:0},Op=Ip,Zl=function(e){return e},Fi=function(e){var r=e;return r},Jp=function(e){e:for(;;){if(gr(e.e2,Oe)&&gr(e.e3,Oe))return Te;if(o(dl,me(e.e2),me(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:ur(e.ei)};e=r;continue e}else{var n=O(Fi(e.e3)/Mr),a=O(Fi(e.e2)/Mr),t=We(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(Po,Zl(1),e.b7),v=u;return{bz:a*cn(v),ex:!1,bG:a*on(v),cK:n/a,bW:a*tn(v),c_:3,fT:i,fX:c,c6:l}}}},Vi=function(e){return Jp({b7:e.b7,e2:e.ce,e3:Oe,ei:e.ei})},qp=function(e){var r=e;return r},Ql=function(e){var r=p(xl,1667,25e3,qp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Yl({fT:n,fX:a})},Kl=function(e){return e},Yp=Ql(Kl(12e3)),Zp=Ql(Kl(5600)),Qp=function(e){return{$:2,a:e}},Kp=function(e){return Qp(e)},e3=$(function(e,r){return{$:2,a:e,b:r}}),eu=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},r3=function(e){var r=e;return r.ex},n3=eu(sn.a),a3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(fr,n,z(L,L),r)}),t3=function(e){var r=e;return Qe({dx:r.fT,dy:r.bW,dz:0,dA:0,dB:r.fX,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},o3=ee(function(e,r,n,a,t,i,c,l){var u=o(a3,r3,_([Hn(e),Hn(r),Hn(n),Hn(a)])),v=u.a,s=u.b;if(v.b){var m=le(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(e3,o(ne,t3,v),{be:o(Re,d,g),bL:o(Re,w,h),bM:o(Re,t,i),bN:o(Re,c,l)})}else return n3}else return eu({be:o(Re,e,r),bL:o(Re,n,a),bM:o(Re,t,i),bN:o(Re,c,l)})}),i3=y(function(e,r,n){return Ta(o3,e,r,n,Te,Te,Te,Te,Te)}),c3=function(e){var r=o(Hp,y0(e.fz),{b7:Zp,eG:e.fI,ce:Qa(8e4)}),n=Vi({b7:Yp,ce:Qa(2e4),ei:e.ei}),a=Vi({b7:Bi,ce:Qa(15e3),ei:ur(e.ei)}),t=p(i3,r,n,a);return Wp({b1:Kp(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:Up(15),bK:t,b_:Op,b0:Bi})},ru=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),l3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),nu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),au=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),u3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),v3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),$3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Fo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C($3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(ru,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(l3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(nu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(v3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(au,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(u3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Vo={$:0},f3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),m=o(fe,s.dR,e),d=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=v;e=m,r=d,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),s3=y(function(e,r,n){var a=_a(e(r));return Ta(f3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Ka=$(function(e,r){var n=e,a=r;return I(a,n)<1}),tu=function(e){return o(Ka,e.dO,e.dR)&&o(Ka,e.dP,e.dS)&&o(Ka,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Sn=function(e){var r=e;return r},ou=function(e){var r=Sn(e),n=r.a,a=r.b,t=r.c,i=Lr(n),c=Pr(n),l=zr(n),u=Lr(a),v=Pr(a),s=zr(a),m=Lr(t),d=Pr(t),f=zr(t);return tu({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,s,f))})},iu=G$,Ce=function(e){return iu(Ba(e))},cu=function(e){var r=e;return r},Fa=function(e){return iu(cu(e))},m3=$(function(e,r){var n=e,a=r,t=o(Pe,O(a.fT),o(Pe,O(a.fX),O(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=dr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return pl}),d3=m3(Zl(1)),lu=y(function(e,r,n){var a=o(ha,r,n),t=o(ha,e,r);return d3(o(vo,a,t))}),p3=function(e){var r=Sn(e),n=r.a,a=r.b,t=r.c,i=Fa(p(lu,n,a,t));return B({o:i,bU:Ce(n)},{o:i,bU:Ce(a)},{o:i,bU:Ce(t)})},b3=$(function(e,r){return{$:2,a:e,b:r}}),uu=b3({df:3,$7:0,dV:4}),g3=function(e){if(e.b){var r=e.a,n=e.b,a=uu(o(ne,p3,e)),t=p(s3,ou,r,n);return C(ru,t,e,a,0)}else return Vo},Ee=y(function(e,r,n){return B(e,r,n)}),vu=function(){var e=br(1),r=br(1),n=br(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(pe,i,t,a),l=o(K,.5,e),u=p(pe,i,t,l),v=o(K,.5,r),s=p(pe,i,v,a),m=p(pe,i,v,l),d=o(K,.5,n),f=p(pe,d,t,a),g=p(pe,d,v,a),b=p(pe,d,t,l),w=p(pe,d,v,l);return Fo(g3(_([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,m),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,m,s),p(Ee,c,u,m),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,m,w)])))}(),Xn={$:0},h3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Fa(p(lu,u,l,c)),s={o:v,bU:Ce(u)},m={o:v,bU:Ce(l)},d={o:v,bU:Ce(c)};return o(A,s,o(A,m,o(A,d,n)))}),w3=nr,Eo=function(e){var r=e;return r.D},y3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),zt=4294967295>>>32-wn,kt=Ou,x3=y(function(e,r,n){e:for(;;){var a=zt&r>>>e,t=o(kt,a,n);if(t.$){var v=t.a;return o(kt,zt&r,v)}else{var i=t.a,c=e-wn,l=r,u=i;e=c,r=l,n=u;continue e}}}),S3=function(e){return e>>>5<<5},T3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,S3(n))>-1?re(o(kt,zt&e,i)):re(p(x3,a,e,t))}),Ro=function(e){var r=e;return r.ah},et=$(function(e,r){return o(T3,e,Ro(r))}),C3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(y3,y(function(c,l,u){return B(c,l,u)}),o(et,a,e),o(et,t,e),o(et,i,e))};return o(il,r,Eo(e))},L3=y(function(e,r,n){e:for(;;){var a=o(Kt,Ve,e),t=a.a,i=a.b;if(I(dt(t),Ve)<0)return o(Vc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Bc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(L3,e,L,0):Dc},P3=y(function(e,r,n){return e(r(n))}),z3=$(function(e,r){return!o(Ic,o(P3,ms,e),r)}),k3=$(function(e,r){return p(fr,$(function(n,a){return e(n)?o(A,n,a):a}),L,r)}),M3=function(e){var r=e.a;return r},$u=$(function(e,r){var n=M3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(z3,a,r)?{D:r,ah:e}:{D:o(k3,a,r),ah:e}}),D3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=D3({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Jr(r),a=Jr(e);return z(B(a.fT,a.fX,a.c6),B(n.fT,n.fX,n.c6))}),Ei=p(Mn,0,0,0),rt=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(el,o(na,e,r),t);if(v.$){var m={o:Ei,bU:Ce(r)},d={o:Ei,bU:Ce(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),A3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=v,T=a+3,k=we(rt,s,d,f,b,r,we(rt,m,s,g,f,r,we(rt,d,m,b,g,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var G=t,N=G.a,R=G.b;return z(N,Fe(R))}}),B3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,w=p(Yn,o(na,d,s),f,p(Yn,o(na,s,m),g,p(Yn,o(na,m,d),b,t))),x=o(A,B(b,g,f),a),h=e,T=v,k=n+3,G=x,N=w;e=h,r=T,n=k,a=G,t=N;continue e}else return B(a,t,n)}),xr=y(function(e,r,n){var a=C3(n),t=p(fr,_3(r),L,a),i=S(B3,r,a,0,L,w3),c=i.a,l=i.b,u=i.c,v=S(A3,r,l,a,0,B(c,L,u)),s=v.a,m=v.b,d=ml(m)?t:le(t,m);return p(h3,e,o($u,No(d),s),o(Vn,d,s))}),Mt=function(e){return{D:o(ne,function(r){return B(3*r,3*r+1,3*r+2)},o(qr,0,kr(e)-1)),ah:No(Ge(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},fu=function(e){switch(e.$){case 0:return Xn;case 1:var a=e.a,r=e.b,n=o(ne,Sn,r);return p(xr,a,Cr,Mt(n));case 2:var a=e.a,r=e.b,n=o(ne,Sn,r);return p(xr,a,Cr,Mt(n));case 3:var a=e.a,t=e.b;return p(xr,a,Cr,t);case 4:var a=e.a,t=e.b;return p(xr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(xr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(xr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(xr,a,function(i){return i.bU},t);case 8:return Xn;case 9:return Xn;default:return Xn}},Ri=fu(vu),su={$:0},P=su,ge=$(function(e,r){return{$:1,a:e,b:r}}),F3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},V3=1029,E3=function(e){return{$:5,a:e}},mu=function(e){var r=e;return E3(r)},R3=mu(V3),N3=1028,j3=mu(N3),Le=y(function(e,r,n){return r===1?e?o(A,R3,n):o(A,j3,n):n}),du={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nt=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(Le,l,a,m),du,F3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),jo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},pu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return S(ae,p(Le,l,a,m),pu,jo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),bu=$(function(e,r){return{$:3,a:e,b:r}}),G3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},gu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},W3=E(function(e,r,n,a){return o(bu,n,ee(function(t,i,c,l,u,v,s,m){return S(ae,m,gu,G3,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Go={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Va=W$,or=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(Le,u,t,d),pu,Go,a,{aN:o(Va,En(r),e),b:l,c,d:s,e:i,f:v})}))}),H3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},X3=he(function(e,r,n,a,t){return o(bu,a,ee(function(i,c,l,u,v,s,m,d){return S(ae,d,gu,H3,t,{aN:o(Va,En(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},_u={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Un=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(Le,l,a,m),_u,hu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},U3=He(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(ae,p(Le,v,i,f),yu,wu,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),xu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},I3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(m,d,f,g,b,w,x,h){var T=x.a,k=x.b;return S(ae,p(Le,g,s,h),yu,xu,v,{b5:e,b8:r,b9:i,ca:a,P:k,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:f,c:d,aW:c,d:w,cS:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Su={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},In=He(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(ae,p(Le,v,i,f),_u,Su,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),O3=function(e){return{$:0,a:e}},Ni=$(function(e,r){return{$:1,a:e,b:r}}),gn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),J3=function(e){return C(an,tn(e),on(e),cn(e),1)},Wo=C(an,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Wo)}else{var n=r.a;return z(e,J3(n))}}),Tu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ni,z(t,Wo),o(gn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ni,o(aa,t,e),o(gn,t,r))}else{var a=n.a.a;return n.b.a,O3(a)}}),q3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),On=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Y3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Z3=function(e){return o(Me,e,1)},Dt=o(Me,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Dt)}else{var n=r.a;return z(e,Z3(n))}}),Cu=E(function(e,r,n,a){var t=C(Y3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(On,z(u,Wo),o(Gr,u,r),o(Gr,u,n),o(gn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(On,o(aa,u,e),z(u,Dt),o(Gr,u,n),o(gn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(On,o(aa,u,e),o(Gr,u,r),z(u,Dt),o(gn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(On,o(aa,u,e),o(Gr,u,r),o(Gr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(q3,i,c,l)}}),Q3={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},at=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return S(ae,p(Le,u,t,d),du,Q3,a,{b2:En(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Lu={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},K3=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ae,p(Le,l,a,m),Lu,wu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),eb=Ft(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,m,d,f,g,b,w){var x=b.a,h=b.b;return S(ae,p(Le,d,u,w),Lu,xu,l,{b5:e,b8:r,b9:i,ca:a,P:h,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:s,aW:e,d:g,cS:n,e:v,a$:0,f})}))}),Tn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),rb=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},nb=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},ab=function(e){var r=e;return p(Tn,r.dT,r.dQ,.5)},tb=function(e){return p(pe,rb(e),nb(e),ab(e))},H=function(e){var r=Hl(e),n=r.a,a=r.b,t=r.c;return{ey:Ba(tb(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(W3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(at,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(at,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(at,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(X3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,N=e.c,m=o(Tu,s,N);if(m.$){var g=m.a,b=g.a;g.b;var w=m.b,x=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(K3,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(U3,b,x,h,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(Un,d,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(Un,d,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(Un,d,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Un,d,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,k=e.c,G=e.d,N=e.e,R=C(Cu,T,k,G,N);if(R.$){var Y=R.a,Q=Y.a,ie=Y.b,ve=R.b,oe=ve.a,de=ve.b,ze=R.c,Se=ze.a,sr=ze.b,mr=R.d,x=mr.a,h=mr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Wu(eb,Q,ie,oe,de,Se,sr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return I3(Q)(ie)(oe)(de)(Se)(sr)(x)(h)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var j=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return we(In,j,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return we(In,j,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return we(In,j,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(In,j,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),tt=function(e){var r=e;return r.fT},ot=function(e){var r=e;return r.fX},it=function(e){var r=e;return r.c6},ob=function(e){var r=e,n=it(r.c7),a=ot(r.c7),t=tt(r.c7),i=it(r.c5),c=ot(r.c5),l=tt(r.c5),u=it(r.c4),v=ot(r.c4),s=tt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ib=function(e){var r=Ba(nn(e)),n=We(Nr(e)),a=We(Rr(e)),t=We(Er(e));return{dp:ob(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bY:1}},Wr=$(function(e,r){return{$:5,a:e,b:r}}),Pu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Fl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),zu=$(function(e,r){return o(Pu,ib(e),r)}),Ea=function(e){return{$:2,a:e}},cb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),lb=U$,ub=X$,ji=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=ub(a),g=f.fT,b=f.fX,w=f.c6,x=f.em,h=lb({em:x,fT:g*s,fX:b*m,c6:w*d});return Ta(r,n,h,t,i,c,l,u,v)}}}}}}}}}},At=$(function(e,r){switch(r.$){case 0:return su;case 5:var n=r.a,a=r.b;return o(Wr,n,o(At,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(cb,e,t),o(ji,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(ji,e,i));default:var c=r.a;return Il(o(ne,At(e),c))}}),Xo=$(function(e,r){var n=r;return o(At,e,n)}),Uo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ku=7683,Mu=7682,vb=p(Mo,{cp:0,cO:0,c3:15},{a9:xe,bm:Qr,bu:xe,bv:ku},{a9:xe,bm:Qr,bu:xe,bv:Mu}),$b=p(Mo,{cp:0,cO:0,c3:15},{a9:xe,bm:Qr,bu:xe,bv:Mu},{a9:xe,bm:Qr,bu:xe,bv:ku}),Io=$(function(e,r){return e?o(A,$b,r):o(A,vb,r)}),fb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},sb=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(Io,i,v),fb,Uo,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},wa=function(e){var r=sb(e);if(r.$)return P;var n=r.a;return Ea(n)},mb=E(function(e,r,n,a){var t=o(Ho,n,vu),i=function(){var s=z(e,r);return s.a?s.b?Fn(_([t,wa(Ri)])):t:s.b?wa(Ri):P}(),c=ho(a),l=c.a,u=c.b,v=c.c;return o(zu,go(a),o(Xo,B(l,u,v),i))}),db=$(function(e,r){return C(mb,!0,!0,e,r)}),Du=$(function(e,r){return{$:0,a:e,b:r}}),pb=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b6;return p(Mn,n,a,t)},bb=function(e){return o(Du,0,Lt(pb(e)))},hn=function(e){var r=e;return Ar(r)},gb=$(function(e,r){var n=r;return n/e}),Gi=function(e){var r=e;return{fT:Ar(r),fX:Zr(r)}},hb=$(function(e,r){var n=e.bU,a=e.o;return o(A,{o:Fa(a),bU:Ce(n)},r)}),_b=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=cn(l.bU),s=on(l.bU),m=tn(l.bU),d=o(ra,e,m),f=o(Pe,r,m),g=o(ra,n,s),b=o(Pe,a,s),w=o(ra,t,v),x=o(Pe,i,v),h=u;e=d,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return tu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Au=$(function(e,r){var n=cn(e.bU),a=on(e.bU),t=tn(e.bU);return Vt(_b,t,t,a,a,n,n,r)}),wb=function(e){var r=p(Sc,hb,L,Ro(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Eo(e)),i=o(Au,n,a);return C(nu,i,e,t,0)}else return Vo},Wi=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),ya=function(e){var r=e;return Zr(r)},Bt=function(e){return Dr(2*Mr*e)},yb=Cr,Hi=yb({cB:De,c4:xo,c5:So}),Bu=function(){var e=72,r=o(gb,e,Bt(1)),n=br(1),a=Ur(bo),t=Ur(_l),i=br(1),c=o(K,.5,i),l=p(pe,Oe,Oe,c),u=o(K,-.5,i),v=p(pe,Oe,Oe,u),s=function(f){var g=o(K,f,r),b=Ur(o(Wi,Hi,Gi(g))),w=o(K,hn(g),n),x=o(K,ya(g),n),h=p(pe,w,x,c),T=p(pe,w,x,u),k=o(da,e,f+1),G=o(K,k,r),N=Ur(o(Wi,Hi,Gi(G))),R=o(K,hn(G),n),j=o(K,ya(G),n),W=p(pe,R,j,u),F=p(pe,R,j,c);return _([B({o:t,bU:v},{o:t,bU:W},{o:t,bU:T}),B({o:b,bU:T},{o:N,bU:W},{o:N,bU:F}),B({o:b,bU:T},{o:N,bU:F},{o:b,bU:h}),B({o:a,bU:l},{o:a,bU:h},{o:a,bU:F})])},m=o(ne,s,o(qr,0,e-1)),d=Mt(Ge(m));return Fo(wb(d))}(),Xi=fu(Bu),xb=function(e){var r=kl(e),n=$o(r),a=n.a,t=n.b;return ar({cB:Ml(e),c4:a,c5:t,c7:r})},Sb=E(function(e,r,n,a){var t=xb(Co(a)),i=o(Ho,n,Bu),c=function(){var m=z(e,r);return m.a?m.b?Fn(_([i,wa(Xi)])):i:m.b?wa(Xi):P}(),l=Al(a),u=l,v=Dl(a),s=v;return o(zu,t,o(Xo,B(u,u,s),c))}),Tb=$(function(e,r){return C(Sb,!0,!0,e,r)}),Ui={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Ii={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},mn=function(e){var r=Sn(e),n=r.a,a=r.b,t=r.c,i=Jr(n),c=Jr(a),l=Jr(t);return Qe({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Jn=uu(_([B({cZ:0},{cZ:1},{cZ:2})])),Cb=$(function(e,r){var n=ou(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(ge,a,ee(function(h,T,k,G,N,R,j,W){return S(ae,p(Le,G,0,W),Ui,jo,Jn,{aw:t,b:k,c:T,d:R,e:h,br:mn(r),f:N})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(ge,a,ee(function(h,T,k,G,N,R,j,W){return S(ae,p(Le,G,0,W),Ui,Go,Jn,{aN:o(Va,En(c),i),b:k,c:T,d:R,e:h,br:mn(r),f:N})}));case 2:e.a;var l=e.b,f=e.c,u=o(Tu,l,f);if(u.$)return P;var v=u.a;return o(ge,a,ee(function(h,T,k,G,N,R,j,W){var F=j.a,Y=j.b;return S(ae,p(Le,G,0,W),Ii,hu,Jn,{P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:k,c:T,d:R,e:h,br:mn(r),f:N})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=C(Cu,s,m,d,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(h,T,k,G,N,R,j,W){var F=j.a,Y=j.b;return S(ae,p(Le,G,0,W),Ii,Su,Jn,{b4:b,P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:x,b:k,c:T,d:R,cR:w,e:h,br:mn(r),f:N})}))}}),Lb=function(){var e=_([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=_([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Vn,e,r)}(),Pb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},Oi=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Io,t,u),Pb,Uo,Lb,{b:a,c:n,d:c,e:r,bZ:l,br:mn(e),f:i})}))},zb=E(function(e,r,n,a){var t=o(Cb,n,a),i=z(e,r);return i.a?i.b?Fn(_([t,Oi(a)])):t:i.b?Oi(a):P}),kb=$(function(e,r){return C(zb,!0,!0,e,r)}),Mb=$(function(e,r){var n=zr(r),a=zr(e),t=Pr(r),i=Pr(e),c=Lr(r),l=Lr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Db=function(e){var r=_o(e),n=r.a,a=r.b;return o(Mb,n,a)},Ji={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ab=$(function(e,r){return{$:1,a:e,b:r}}),Bb=Ab({df:2,$7:0,dV:1}),qi=Bb(_([z({dw:0},{dw:1})])),Fb=$(function(e,r){var n=Db(r),a=H(n),t=_o(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(ge,a,ee(function(v,s,m,d,f,g,b,w){return S(ae,w,Ji,jo,qi,{aw:l,du:Ce(c),dv:Ce(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,m,d,f,g,b,w,x){return S(ae,x,Ji,Go,qi,{aN:o(Va,En(u),l),du:Ce(c),dv:Ce(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return P;default:return P}}),Vb=$(function(e,r){return o(Fb,e,r)}),Yi=$(function(e,r){var n=e,a=r;return n/a}),Eb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),Zi=$(function(e,r){return e<1?L:S(Eb,0,e,e,r,L)}),Rb=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Fa(a),bU:Ce(n),L:o(Me,c,l)},r)}),Nb=function(e){var r=p(Sc,Rb,L,Ro(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Eo(e)),i=o(Au,n,a);return C(au,i,e,t,0)}else return Vo},Fu=$(function(e,r){var n=e,a=r,t=Ar(a);return{fT:t*Ar(n),fX:t*Zr(n),c6:Zr(a)}}),jb=function(){var e=br(1),r=72,n=o(qr,0,r-1),a=o(Zi,r,o(Tn,Oe,Bt(1))),t=Zt(r/2),i=o(qr,0,t-1),c=o(Zi,t,o(Tn,fn(90),fn(-90))),l=No(Ge(o(ne,function(s){return o(ne,function(m){return{o:Ur(o(Fu,s,m)),bU:p(pe,o(K,hn(m)*hn(s),e),o(K,hn(m)*ya(s),e),o(K,ya(m),e)),L:z(o(Yi,s,Bt(1)),o(Yi,o(bn,fn(90),m),fn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Ge(o(ne,function(s){return Ge(o(ne,function(m){var d=o(u,s+1,m),f=o(u,s,m),g=o(u,s+1,m+1),b=o(u,s,m+1);return _([B(b,g,d),B(b,d,f)])},i))},n));return Fo(Nb(o($u,l,v)))}(),xa=72,qn=2*xa,Gb=$(function(e,r){e:for(;;){var n=qn+1,a=o(da,qn,2*e+3),t=o(da,qn,2*e+2),i=2*e+1,c=2*e,l=qn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Wb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Hb=$(function(e,r){e:for(;;){var n=p(Wb,0,2*Mr,e/xa),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Xb=function(){var e=o(Hb,xa-1,_([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(Gb,xa-1,L);return o(Vn,e,r)}(),Ub={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},Qi=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Io,!0,u),Ub,Uo,Xb,{aw:p(Mn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},Ib=function(e){var r=cu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bY:1}},Ob=$(function(e,r){return o(Pu,Ib(e),r)}),Jb=E(function(e,r,n,a){var t=o(Ho,n,jb),i=function(){var u=z(e,r);return u.a?u.b?Fn(_([t,Qi()])):t:u.b?Qi():P}(),c=yo(a),l=c;return o(Ob,o(ha,De,wo(a)),o(Xo,B(l,l,l),i))}),qb=$(function(e,r){return C(Jb,!0,!0,e,r)}),Yb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Zb=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Qb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Du,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Yb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(yl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Zb,n,a,t,i,c)}},Kb=Qb,Vu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(db,t,r)]);case 1:var t=e.a,n=e.b;return _([o(kb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(qb,Kb(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Tb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Vb,bb(c),l)]);default:var u=e.a;return o(Lo,Vu,u)}},eg=function(e){return o(Lo,Vu,e)},rg=$(function(e,r){return c3({aI:_0(e.es),ev:e.ev,aJ:w0(.5),cb:e.cb,aK:z(Si(Je(e.cT.fR)),Si(Je(e.cT.eW))),aP:eg(r),fz:!0,fI:o(Fu,Dr(e.fH),Dr(e.fJ)),ei:To})}),ng=$(function(e,r){return o(rg,{es:p(Fd,46,46,46),ev:Bd({dj:{fT:0,fX:4,c6:8},aR:{fT:0,fX:0,c6:0},ei:{fT:0,fX:1,c6:0}}),cb:e.cb,cT:e.cT,fH:-yi(135),fJ:-yi(45)},o(h0,e,r))}),ag=p(bd,ng,hd,gd);const tg={Main:{init:ag(o(D,function(e){return ke({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({a4:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return ke({eo:m,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",fa(xn)))},o(M,"left",Z))},o(M,"pressedKeys",fa(xn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},og=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},ig=()=>{ct("pointerdown"),ct("wheel"),ct("keydown")},ct=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},cg=tg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});ig();og(cg);
