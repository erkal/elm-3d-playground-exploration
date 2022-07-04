const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function _r(e,r,n){return n.a=e,n.f=r,n}function $(e){return _r(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return _r(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return _r(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return _r(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return _r(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function xa(e){return _r(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return _r(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Rt(e){return _r(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Et(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Sa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Iu=[];function Uu(e){return e.length}var Ju=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ou=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Yu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=ut(e,r,0,a);t&&(n=a.pop());t=ut(n.a,n.b,0,a));return t}function ut(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=oi(e),r=oi(r));for(var t in e)if(!ut(e[t],r[t],n+1,a))return!1;return!0}$(hr);$(function(e,r){return!hr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Qu=$(function(e,r){var n=J(e,r);return n<0?Tc:n?Vf:Sc}),Cn=0;function P(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function Oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=er(e.a,r);return n}var L={$:0};function er(e,r){return{$:1,a:e,b:r}}var Ku=$(er);function _(e){for(var r=L,n=e.length;n--;)r=er(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ta(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return _(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Sc?0:t===Tc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan;$(Math.atan2);function cv(e){return e}function lv(e){return e===1/0||e===-1/0}var uv=Math.ceil,vv=Math.floor,$v=Math.round,fv=Math.sqrt,Io=Math.log,sv=isNaN;function dv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var mv=$(function(e,r){return e+r});function pv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function bv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),_v=$(function(e,r){return r.split(e)}),wv=$(function(e,r){return r.join(e)}),yv=y(function(e,r,n){return n.slice(e,r)});function xv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Sv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=$(function(e,r){return r.indexOf(e)>-1}),Cv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Lv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function Qi(e){return e+""}function Pv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function zv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function kv(e){return Ta(e).join("")}function Mv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Dv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Av(e){return{$:0,a:e}}function jt(e){return{$:2,b:e}}var Bv=jt(function(e){return typeof e=="boolean"?ue(e):Je("a BOOL",e)}),Fv=jt(function(e){return typeof e=="number"?ue(e):Je("a FLOAT",e)}),Vv=jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Je("a STRING",e)});function Rv(e){return{$:3,b:e}}var Ev=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Nv=$(function(e,r){return wr(e,[r])}),Wv=y(function(e,r,n){return wr(e,[r,n])});R(function(e,r,n,a){return wr(e,[r,n,a])});ge(function(e,r,n,a,t){return wr(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return wr(e,[r,n,a,t,i])});xa(function(e,r,n,a,t,i,c){return wr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return wr(e,[r,n,a,t,i,c,l])});Rt(function(e,r,n,a,t,i,c,l,u){return wr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return we(o(Zt,"This is not valid JSON! "+a.message,r))}});var Ki=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Je("null",r);case 3:return Nn(r)?Uo(e.b,r,_):Je("a LIST",r);case 4:return Nn(r)?Uo(e.b,r,Gv):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return He(v)?v:we(o(ii,n,v.a));case 7:var a=e.e;if(!Nn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return He(v)?v:we(o(Cc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Je("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!He(v))return we(o(ii,i,v.a));t=er(P(i,v.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!He(v))return v;c=c(v.a)}return ue(c);case 10:var v=Re(e.b,r);return He(v)?Re(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(He(v))return v;s=er(v.a,s)}return we(Rf(Ae(s)));case 1:return we(o(Zt,e.a,r));case 0:return ue(e.a)}}function Uo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!He(c))return we(o(Cc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Gv(e){return o(es,e.length,function(r){return e[r]})}function Je(e,r){return we(o(Zt,"Expecting "+e,r))}function Wr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wr(e.b,r.b);case 6:return e.d===r.d&&Wr(e.b,r.b);case 7:return e.e===r.e&&Wr(e.b,r.b);case 9:return e.f===r.f&&Jo(e.g,r.g);case 10:return e.h===r.h&&Wr(e.b,r.b);case 11:return Jo(e.g,r.g)}}function Jo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wr(e[a],r[a]))return!1;return!0}var Hv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ec(e){return e}y(function(e,r,n){return n[e]=r,n});function Fr(e){return{$:0,a:e}}function Xv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var vt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Uv=0;function Nt(e){var r={$:0,e:Uv++,f:e,g:null,h:[]};return Wt(r),r}function rc(e){return sr(function(r){r(Fr(Nt(e)))})}function nc(e,r){e.h.push(r),Wt(e)}var Jv=$(function(e,r){return sr(function(n){nc(e,r),n(Fr(Cn))})}),ja=!1,Oo=[];function Wt(e){if(Oo.push(e),!ja){for(ja=!0;e=Oo.shift();)Ov(e);ja=!1}}function Ov(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Gt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Gt(e,r,n,a,t,i){var c=o(Ki,e,r?r.flags:void 0);He(c)||Qr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Yo(l,b.b,t(v))}return Yo(l,u.b,t(v)),d?{ports:d}:{}}var Ye={};function qv(e,r){var n;for(var a in Ye){var t=Ye[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Zv(t,r)}return n}function Yv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Zv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(vt,l,Iv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Nt(o(vt,l,e.b))}var Qv=$(function(e,r){return sr(function(n){e.g(r),n(Fr(Cn))})});$(function(e,r){return o(Jv,e.h,{$:0,a:r})});function ac(e){return function(r){return{$:1,k:e,l:r}}}function Kv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var qo=[],Na=!1;function Yo(e,r,n){if(qo.push({p:e,q:r,r:n}),!Na){Na=!0;for(var a;a=qo.shift();)e$(a.p,a.q,a.r);Na=!1}}function e$(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)nc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=r$(e,t,a,r.l);n[t]=n$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function r$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ye[r].e:Ye[r].f;return o(i,t,a)}function n$(e,r,n){return n=n||{i:L,j:L},e?n.i=er(r,n.i):n.j=er(r,n.j),n}function a$(e){Ye[e]&&Qr(3)}$(function(e,r){return r});function t$(e,r){return a$(e),Ye[e]={f:o$,u:r,a:i$},ac(e)}var o$=$(function(e,r){return function(n){return e(r(n))}});function i$(e,r){var n=L,a=Ye[e].u,t=Fr(null);Ye[e].b=t,Ye[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(Ki,a,c);He(l)||Qr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,ir=typeof document!="undefined"?document:{};function Ht(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function $t(e){return{$:0,a:e}}var tc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),Vr=tc(void 0),c$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),l$=c$(void 0);function u$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var v$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return yr([e,r],function(){return e(r)})});y(function(e,r,n){return yr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return yr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return yr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return yr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});xa(function(e,r,n,a,t,i,c){return yr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return yr([e,r,n,a,t,i,c,l],function(){return Et(e,r,n,a,t,i,c,l)})});Rt(function(e,r,n,a,t,i,c,l,u){return yr([e,r,n,a,t,i,c,l,u],function(){return Sa(e,r,n,a,t,i,c,l,u)})});var oc=$(function(e,r){return{$:"a0",n:e,o:r}}),$$=$(function(e,r){return{$:"a1",n:e,o:r}}),ic=$(function(e,r){return{$:"a2",n:e,o:r}}),Ln=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function f$(e){return e=="script"?"p":e}function s$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(oc,r.n,d$(e,r.o)):r});function d$(e,r){var n=no(r);return{$:r.$,a:n?p(rs,n<3?m$:p$,ke(e),r.a):o(ua,e,r.a)}}var m$=$(function(e,r){return P(e(r.a),r.b)}),p$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Zo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Zo(c,t,i):c[t]=i}return r}function Zo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return ir.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ft(c,r,e.d),c}var c=e.f?ir.createElementNS(e.f,e.c):ir.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),ft(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ht(c,br(n===1?l[u]:l[u].b,r));return c}function ft(e,r,n){for(var a in n){var t=n[a];a==="a1"?b$(e,t):a==="a0"?_$(e,r,t):a==="a3"?g$(e,t):a==="a4"?h$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function b$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function g$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function h$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function _$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=w$(r,i),e.addEventListener(t,c,It&&{passive:no(i)<2}),a[t]=c}}var It;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){It=!0}}))}catch{}function w$(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!He(i)){for(var c=no(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function y$(e,r){return e.$==r.$&&Wr(e.a,r.a)}function cc(e,r){var n=[];return Xe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Xe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=k$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Xe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!x$(d,m):d!==m)&&he(n,2,a,m),Xe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:Qo(e,r,n,a,S$);return;case 2:Qo(e,r,n,a,T$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Ut(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function x$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Qo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Ut(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Ut(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ut(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&y$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function S$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Xe(s,i[v],n,++a),a+=s.b||0}}function T$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,h=g.b,T=b.b,k=void 0,W=void 0;if(w===x){f++,Xe(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,G=j.b;W=x===N}if(E){var B=E.a,O=E.b;k=w===B}if(k&&W){f++,Xe(h,O,t,f),on(i,t,w,T,m,c),f+=h.b||0,f++,cn(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(k){f++,on(i,t,x,T,m,c),Xe(h,O,t,f),f+=h.b||0,d+=1,m+=2;continue}if(W){f++,cn(i,t,w,h,f),f+=h.b||0,f++,Xe(G,T,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,cn(i,t,w,h,f),on(i,t,x,T,m,c),f+=h.b||0,f++,Xe(G,O,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;cn(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];on(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var lc="_elmW6BL";function on(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Xe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}on(e,r,n+lc,a,t,i)}function cn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Xe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}cn(e,r,n+lc,a,t)}function uc(e,r,n,a){ln(e,r,n,0,0,r.b,a)}function ln(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)uc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&ln(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&ln(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return ln(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=ln(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function vc(e,r,n,a){return n.length===0?e:(uc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=C$(t,a);t===e&&(e=i)}return e}function C$(e,r){switch(r.$){case 0:return L$(e,r.s,r.u);case 4:return ft(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return P$(e,r);case 5:return r.s(e);default:Qr(10)}}function L$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function P$(e,r){var n=r.s,a=z$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ht(e,a),e}function z$(e,r){if(!!e){for(var n=ir.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ht(n,i.c===2?i.s:br(i.z,r.u))}return n}}function Jt(e){if(e.nodeType===3)return $t(e.textContent);if(e.nodeType!==1)return $t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=er(o(Ln,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=er(Jt(v[a]),u);return p(Vr,l,r,u)}function k$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var M$=R(function(e,r,n,a){return Gt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Jt(l);return $c(i,function(v){var s=c(v),d=cc(u,s);l=vc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Gt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=ir.title,v=ir.body,s=Jt(v);return $c(i,function(d){oa=c;var m=l(d),f=Vr("body")(L)(m.eu),g=cc(s,f);v=vc(v,s,g,t),s=f,oa=0,u!==m.fK&&(ir.title=u=m.fK)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function $c(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(oo,ao,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(oo,ao,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(oo,ao,sr(function(){history.replaceState({},"",r),e()}))});var D$={addEventListener:function(){},removeEventListener:function(){}},A$=typeof window!="undefined"?window:D$;y(function(e,r,n){return rc(sr(function(a){function t(i){Nt(n(i))}return e.addEventListener(r,t,It&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return He(n)?te(n.a):q});function fc(e,r){return sr(function(n){ca(function(){var a=document.getElementById(e);n(a?Fr(r(a)):Xv(as(e)))})})}function B$(e){return sr(function(r){ca(function(){r(Fr(e()))})})}$(function(e,r){return fc(r,function(n){return n[e](),Cn})});$(function(e,r){return B$(function(){return A$.scroll(e,r),Cn})});y(function(e,r,n){return fc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Cn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var F$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var V$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(C(il,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(C(il,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var Ko=0;function _n(e,r){for(;r.b;r=r.b)e(r.a)}function Ot(e){for(var r=0;e.b;e=e.b)r++;return r}var R$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},E$=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),j$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),N$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),W$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),G$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),H$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),X$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),I$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),U$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),J$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},O$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},q$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Y$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},sc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},dc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Z$=function(e){e.gl.disable(e.gl.CULL_FACE)},Q$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},K$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},ef=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ei=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],rf=[O$,q$,Y$,sc,dc,Z$,Q$,K$,ef];function ri(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function nf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function mc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function af(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=mc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Ot(n.b)*s);_n(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function tf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=of(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Ot(r.b),indexBuffer:null,buffers:{}}}function of(e,r){var n=new Uint32Array(Ot(e)*r),a=0,t;return _n(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ni(e,r){return e+"#"+r}var pc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),sc(n),dc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ni(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Ko++,v||(v=ri(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Ko++,s||(s=ri(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=nf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=cf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ni(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),lf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=tf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=af(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=mc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,_n(Sp(n),i.a),u=0;u<ei.length;u++){var k=n[ei[u]];k.toggle!==n.toggle&&k.enabled&&(rf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return _n(t,e.g),r});function cf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function lf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var uf=y(function(e,r,n){return u$(r,{g:n,f:{},h:e},pf,bf)}),vf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),$f=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),ff=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),sf=$(function(e,r){e.contextAttributes.antialias=!0}),df=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),mf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function pf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};_n(function(t){return o(xp,r,t)},e.h);var n=ir.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),R$(function(){return o(pc,e,n)})):(n=ir.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function bf(e,r){return r.f=e.f,pc(r)}var gf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/hf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function hf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var qt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),_f=y(function(e,r,n){return new Float64Array([e,r,n])}),wf=function(e){return e[0]},yf=function(e){return e[1]},xf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Sf=function(e){return new Float64Array([e.fT,e.fX,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(bc);function gc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(bc(e,r,n),n)}$(gc);function hc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/hc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Tf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),un=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(un);function st(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(st);$(function(e,r){var n,a=qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=un(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(un(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(un(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(un(r,a)+e[14])/n,t});var Cf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Lf=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},Pf=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/zf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function zf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var kf=new Float64Array(16),Mf=new Float64Array(16),Df=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Af=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function _c(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(_c);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return _c(c,l,i,t,n,a)});function wc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(wc);R(function(e,r,n,a){return wc(e,r,n,a,-1,1)});function yc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],W=r[2],j=r[3],E=r[4],N=r[5],G=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],ze=r[14],Se=r[15];return n[0]=a*T+l*k+d*W+b*j,n[1]=t*T+u*k+m*W+w*j,n[2]=i*T+v*k+f*W+x*j,n[3]=c*T+s*k+g*W+h*j,n[4]=a*E+l*N+d*G+b*B,n[5]=t*E+u*N+m*G+w*B,n[6]=i*E+v*N+f*G+x*B,n[7]=c*E+s*N+g*G+h*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+h*ve,n[12]=a*oe+l*de+d*ze+b*Se,n[13]=t*oe+u*de+m*ze+w*Se,n[14]=i*oe+v*de+f*ze+x*Se,n[15]=c*oe+s*de+g*ze+h*Se,n}$(yc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],W=r[8],j=r[9],E=r[10],N=r[12],G=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*W+c*j+v*E,n[9]=t*W+l*j+s*E,n[10]=i*W+u*j+d*E,n[11]=0,n[12]=a*N+c*G+v*B+m,n[13]=t*N+l*G+s*B+f,n[14]=i*N+u*G+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/hc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,h=g+f,T=b-m,k=g-f,W=c*c*v+u,j=w+d,E=b+m,N=w-d,G=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],ze=n[7],Se=n[8],mr=n[9],pr=n[10],Ea=n[11],ju=n[12],Nu=n[13],Wu=n[14],Gu=n[15];return a[0]=B*x+ve*h+Se*T,a[1]=O*x+oe*h+mr*T,a[2]=Q*x+de*h+pr*T,a[3]=ie*x+ze*h+Ea*T,a[4]=B*k+ve*W+Se*j,a[5]=O*k+oe*W+mr*j,a[6]=Q*k+de*W+pr*j,a[7]=ie*k+ze*W+Ea*j,a[8]=B*E+ve*N+Se*G,a[9]=O*E+oe*N+mr*G,a[10]=Q*E+de*N+pr*G,a[11]=ie*E+ze*N+Ea*G,a[12]=ju,a[13]=Nu,a[14]=Wu,a[15]=Gu,a});function Bf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Bf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ff(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Ff);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=gc(e,r,qt),t=la(st(n,a,ai),ai),i=la(st(a,t,ti),ti),c=kf,l=Mf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,yc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=Ku,Wn=Yu,xc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Yt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Yt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),oi=function(e){return p(Yt,y(function(r,n,a){return o(A,P(r,n),a)}),L,e)},Sc=1,Vf=2,Tc=0,we=function(e){return{$:1,a:e}},Zt=$(function(e,r){return{$:3,a:e,b:r}}),ii=$(function(e,r){return{$:0,a:e,b:r}}),Cc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Ef=Sv,jf=Hv,De=Qi,Lr=$(function(e,r){return o(wv,e,Ta(r))}),Qt=$(function(e,r){return _(o(_v,e,r))}),Lc=function(e){return o(Lr,`
    `,o(Qt,`
`,e))},Pn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return p(Pn,$(function(r,n){return n+1}),0,e)},Nf=ev,Wf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Jr=$(function(e,r){return p(Wf,e,r,L)}),Pc=$(function(e,r){return p(Nf,e,o(Jr,0,Ar(r)-1),r)}),Ze=Mv,zc=function(e){var r=Ze(e);return 97<=r&&r<=122},kc=function(e){var r=Ze(e);return r<=90&&65<=r},Gf=function(e){return zc(e)||kc(e)},Hf=function(e){var r=Ze(e);return r<=57&&48<=r},Xf=function(e){return zc(e)||kc(e)||Hf(e)},Ae=function(e){return p(Pn,A,L,e)},Kr=pv,If=$(function(e,r){return`

(`+(De(e+1)+(") "+Lc(Uf(r))))}),Uf=function(e){return o(Jf,e,L)},Jf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Kr(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Gf(x)&&o(Ef,Xf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Lr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(Ar(s))+" ways:"));return o(Lr,`

`,o(A,g,o(Pc,If,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Lr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Lr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Lc(o(jf,4,f))+(`

`+m))}}),Be=32,dt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mt=Iu,Kt=uv,eo=$(function(e,r){return Io(r)/Io(e)}),Of=cv,wn=Kt(o(eo,2,Be)),Mc=C(dt,0,wn,mt,mt),Dc=Ju,Ac=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Bc=vv,pt=Uu,Qe=$(function(e,r){return J(e,r)>0?e:r}),qf=function(e){return{$:0,a:e}},ro=Ou,Yf=$(function(e,r){e:for(;;){var n=o(ro,Be,e),a=n.a,t=n.b,i=o(A,qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),Zf=function(e){var r=e.a;return r},Qf=$(function(e,r){e:for(;;){var n=Kt(r/Be);if(n===1)return o(ro,Be,e).a;var a=o(Yf,e,L),t=n;e=a,r=t;continue e}}),Fc=$(function(e,r){if(r.l){var n=r.l*Be,a=Bc(o(eo,Be,n-1)),t=e?Ae(r.z):r.z,i=o(Qf,t,r.l);return C(dt,pt(r.p)+n,o(Qe,5,a*wn),i,r.p)}else return C(dt,pt(r.p),wn,mt,r.p)}),Kf=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Fc,!1,{z:a,l:n/Be|0,p:t});var i=Ac(p(Dc,Be,r,e)),c=e,l=r-Be,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),es=$(function(e,r){if(e<=0)return Mc;var n=e%Be,a=p(Dc,n,e-n,r),t=e-n-Be;return S(Kf,r,t,e,L,a)}),He=function(e){return!e.$},D=jv,Y=Bv,M=Ev,$e=Fv,ua=Nv,rs=Wv,ke=Av,no=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Vr("div"),ns=function(e){return{$:2,a:e}},Vc=$(function(e,r){return e}),Rc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),zr=function(e){return e},as=zr,ci=We(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ts=Tv,Pr=bv,Gr=yv,zn=$(function(e,r){return e<1?r:p(Gr,e,Pr(r),r)}),Ca=Lv,La=function(e){return e===""},Pa=$(function(e,r){return e<1?"":p(Gr,0,e,r)}),Ec=Pv,li=ge(function(e,r,n,a,t){if(La(t)||o(ts,"@",t))return q;var i=o(Ca,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Ec(o(zn,c+1,t));if(l.$===1)return q;var u=l;return te(_e(ci,e,o(Pa,c,t),u,r,n,a))}else return te(_e(ci,e,t,q,r,n,a))}),ui=R(function(e,r,n,a){if(La(a))return q;var t=o(Ca,"/",a);if(t.b){var i=t.a;return S(li,e,o(zn,i,a),r,n,o(Pa,i,a))}else return S(li,e,"/",r,n,a)}),vi=y(function(e,r,n){if(La(n))return q;var a=o(Ca,"?",n);if(a.b){var t=a.a;return C(ui,e,te(o(zn,t+1,n)),r,o(Pa,t,n))}else return C(ui,e,q,r,n)});$(function(e,r){if(La(r))return q;var n=o(Ca,"#",r);if(n.b){var a=n.a;return p(vi,e,te(o(zn,a+1,r)),o(Pa,a,r))}else return p(vi,e,q,r)});var os=Cv,ao=function(e){},kn=Fr,is=kn(0),jc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Pn,e,r,Ae(d)):C(jc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=y(function(e,r,n){return C(jc,e,r,0,n)}),re=$(function(e,r){return p(dr,$(function(n,a){return o(A,e(n),a)}),L,r)}),va=vt,to=$(function(e,r){return o(va,function(n){return kn(e(n))},r)}),cs=y(function(e,r,n){return o(va,function(a){return o(va,function(t){return kn(o(e,a,t))},n)},r)}),ls=function(e){return p(dr,cs(A),kn(L),e)},us=Qv,vs=$(function(e,r){var n=r;return rc(o(va,us(e),n))}),$s=y(function(e,r,n){return o(to,function(a){return 0},ls(o(re,vs(e),r)))}),fs=y(function(e,r,n){return kn(0)}),ss=$(function(e,r){var n=r;return o(to,e,n)});Ye.Task=Yv(is,$s,fs,ss);var ds=ac("Task"),oo=$(function(e,r){return ds(o(to,e,r))}),ms=M$,ps=dv,$a={$:1},Nc=function(e){return{$:2,a:e}},za={$:0},Ee=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),en=function(e){var r=e.b.B;return r.a},bs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(Ee,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Wc=function(e){var r=e.b;return o(Ee,za,r)},vr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),gs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Wc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,en(n).db)>0?o(ae,bs,vr(o(Ee,$a,t))):zr)(o(Ee,Nc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Rc,l.eA,Oe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ee,za,{B:P(v,s),ab:L,T:o(A,t.B,t.T)})}}),Gc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),_s=$(function(e,r){return Ae(p(hs,e,r,L))}),Hc=y(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(_s,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(Hc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),ws=$(function(e,r){return p(Hc,0,e,r)}),ys=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(_([a]),t)),c=o(ws,e,i),l=o(Gc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ee,$a,{B:u,ab:v,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(Ee,$a,{B:d,ab:L,T:m})}else return r}}),xs=function(e){var r=e.b;return o(Ee,$a,r)},Ss=function(e){var r=e.b;return o(Ee,Nc({cX:en(e).db}),r)},Ts=$(function(e,r){switch(e.$){case 1:return xs(r);case 2:return Wc(r);case 3:return Ss(r);default:var n=e.a;return o(ys,n,r)}}),Xc=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Cs=$(function(e,r){return Oe(r,{av:e(r.av)})}),Ls=function(e){return{$:3,a:e}},Ic=function(e){return{$:2,a:e}},Uc=$(function(e,r){return{$:0,a:e,b:r}}),Ps=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Z=function(e){return e<0?-e:e},io=zv,zs=y(function(e,r,n){return o(vr,0/0,io(o(e,r,n)))}),Jc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ks=hv,Oc=function(e){return p(ks,A,L,e)},Ms=$(function(e,r){var n=o(Jc,function(a){return a!=="0"&&a!=="."},Oc(r));return le(e&&n?"-":"",r)}),ye=Qi,bt=mv,qc=Dv,Yc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Kr(n);if(a.$===1)return"01";var t=a.a;return o(bt,"0",Yc(t))}else{var i=Ze(r);return i>=48&&i<57?o(bt,qc(i+1),n):"0"}},gt=lv,Ds=sv,ka=function(e){return o(bt,e,"")},Zc=y(function(e,r,n){return e<=0?n:p(Zc,e>>1,le(r,r),e&1?le(n,r):n)}),yn=$(function(e,r){return p(Zc,e,r,"")}),ht=y(function(e,r,n){return le(n,o(yn,e-Pr(n),ka(r)))}),_t=gv,Qc=function(e){var r=o(Qt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},As=function(e){var r=o(Qt,"e",ye(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(vr,0,Ec(o(os,"+",t)?o(zn,1,t):t)),c=Qc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(vr,"0",o(Ce,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ce,Xc(ka),Kr(le(o(yn,Z(i),"0"),v))))):p(ht,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Bs=y(function(e,r,n){if(gt(n)||Ds(n))return ye(n);var a=n<0,t=Qc(As(Z(n))),i=t.a,c=t.b,l=Pr(i)+r,u=le(o(yn,-l+1,"0"),p(ht,l,"0",le(i,c))),v=Pr(u),s=o(Qe,1,l),d=o(e,a,p(Gr,s,v,u)),m=p(Gr,0,s,u),f=d?_t(o(vr,"1",o(Ce,Yc,Kr(_t(m))))):m,g=Pr(f),b=f==="0"?f:r<=0?le(f,o(yn,Z(r),"0")):J(r,Pr(c))<0?p(Gr,0,g-r,f)+("."+p(Gr,g-r,g,f)):le(i+".",p(ht,r,"0",c));return o(Ms,a,b)}),Kc=Bs($(function(e,r){var n=Kr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ze(t))})),Fs=zs(Kc),Vs=y(function(e,r,n){var a=o(eo,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Fs,t,n)}),el=Qu,Ma=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(el,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),rr={$:-2},Or=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),wt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,rr,rr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(el,e,t);switch(u){case 0:return S(Or,a,t,i,p(wt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Or,a,t,i,c,p(wt,e,r,l))}}),dn=y(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Rs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},rl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},$i=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},Es=xa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,$i(r)}else break e;else return c.a,c.d,$i(r);else break e;return r}}),Qn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Qn(t),l);var u=rl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Or,v,s,d,Qn(m),f)}else return rr}else return S(X,r,n,a,Qn(t),l)}else return rr},mn=$(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(mn,e,i),c);var u=rl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Or,v,s,d,o(mn,e,m),f)}else return rr}else return S(X,n,a,t,o(mn,e,i),c);else return o(js,e,Et(Es,e,r,n,a,t,i,c))}),js=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=Rs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Or,n,u,v,i,Qn(c))}else return rr}else return S(Or,n,a,t,i,o(mn,e,c))}else return rr}),Ns=$(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Gn=y(function(e,r,n){var a=r(o(Ma,e,n));if(a.$)return o(Ns,e,n);var t=a.a;return p(dn,e,t,n)}),Ws=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Gn,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ps,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Gn,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Uc,P(i,c),p(Vs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Gn,r,Ce(function(a){return a.$===3?Ls(n):a}));default:var r=e.a,n=e.b;return o(Gn,r,Ce(function(a){return a.$===2?Ic(n):a}))}},Gs=function(e){return Cs(Ws(e))},Hs=$(function(e,r){return o(re,Gs(e),r)}),Xs=$(function(e,r){return Oe(r,{eA:o(Hs,e,r.eA)})}),Is=$(function(e,r){var n=r.a,a=r.b;return o(Ee,n,Oe(a,{B:o(Xc,Xs(e),a.B)}))}),Us=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Js=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ee,a,Oe(t,{B:o(Us,o(e,i.a,r),i)}))}),Os=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Oe(a,{aL:!a.aL});case 2:var t=n.a;return Oe(a,{G:p(gs,e,t,a.G)});case 3:var i=n.a;return Oe(a,{G:o(Is,i,a.G)});case 4:var c=n.a;return Oe(a,{G:p(Js,r,c,a.G)});default:var l=n.a;return Oe(a,{G:o(Ts,l,a.G)})}}),qs=$(function(e,r){return o(Ee,za,{B:P(e,r(e)),ab:L,T:L})}),Ys=Kv,fi=Ys(L),fa=Rv,xn=Vv,Zs=t$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",fa(xn)))},o(M,"left",Y))},o(M,"pressedKeys",fa(xn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Qs=function(e){return{$:4,a:e}},Ks={$:0},ed=ec,Ge=$(function(e,r){return o(ic,e,ed(r))}),U=Ge("className"),rd=function(e){var r=e.b.B;return r.b},sa=Ge("id"),nd=v$,da=nd,ad=$$,be=ad,td={$:1},od=function(e){return{$:3,a:e}},id=function(e){return{$:5,a:e}},si=Vr("a"),co=Vr("button"),cd=Ln("d"),nl=tc("http://www.w3.org/2000/svg"),ld=nl("path"),ud=nl("svg"),vd=Ln("viewBox"),pn=function(e){return o(ud,_([vd("0 0 100 100"),o(be,"width","100%"),o(be,"height","100%")]),_([o(ld,_([cd(e)]),L)]))},di=function(e){return o(Ge,"href",s$(e))},Xr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},$d=function(e){return{$:0,a:e}},al=oc,tl=$(function(e,r){return o(al,e,$d(r))}),lo=function(e){return o(tl,"click",ke(e))},mi=Ge("target"),fd=Ge("title"),yt=$(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(yt,e,i),o(yt,e,c))}),sd=$t,$r=sd,dd=function(e){return p(Yt,y(function(r,n,a){return o(A,n,a)}),L,e)},md=$(function(e,r){return{$:3,a:e,b:r}}),pd=$(function(e,r){return{$:2,a:e,b:r}}),bd=$(function(e,r){return{$:0,a:e,b:r}}),gd=$(function(e,r){return{$:1,a:e,b:r}}),Mn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),uo=C(Mn,0/255,0/255,0/255,1),hd=ec,_d=$(function(e,r){return o(ic,e,hd(r))}),wd=_d("checked"),Ie=$v,yd=y(function(e,r,n){return le(o(yn,e-Pr(n),ka(r)),n)}),ma=nv,ol=function(e){var r=function(n){return n<10?De(n):ka(qc(87+n))};return e<16?r(e):le(ol(e/16|0),r(o(ma,16,e)))},xd=o(ae,ol,o(yd,2,"0")),vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Sd=function(e){var r=vo(e),n=r.cM,a=r.cc,t=r.b5;return o(Lr,"",o(A,"#",o(re,o(ae,Ie,xd),_([n*255,a*255,t*255]))))},xt=Ge("htmlFor"),Td=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Cd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Da=$(function(e,r){return p(dr,Cd(e),L,r)}),il=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Ld=V$,Pd=kv,zd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),kd=F$,Md=function(e){return o(kd,{ew:!1,fe:!1},e)},Aa=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Dd=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Ad=function(e){return{$:2,a:e}},Bd=function(e){return{$:0,a:e}},Fd=function(e){return{$:1,a:e}},Wa=$(function(e,r){return Ze(r)-Ze(e)}),Ga=y(function(e,r,n){var a=Ze(n);return J(Ze(e),a)<1&&J(a,Ze(r))<1}),Vd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):we(Fd(r))},a=p(Ga,"0","9",r)?ue(o(Wa,"0",r)):p(Ga,"a","z",r)?ue(10+o(Wa,"a",r)):p(Ga,"A","Z",r)?ue(10+o(Wa,"A",r)):we(Bd(r));return o(pa,n,a)}),cl=$(function(e,r){var n=Kr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return ue(c+l*e)},o(cl,e,i))},o(Vd,e,t))}),Rd=$(function(e,r){return 2<=e&&e<=36?o(cl,e,_t(r)):we(Ad(e))}),Ed=Rd(16),jd=y(function(e,r,n){return C(Mn,e,r,n,1)}),Nd=R(function(e,r,n,a){return C(Mn,e,r,n,a)}),Dn=rv,Wd=$(function(e,r){var n=o(Dn,10,e);return Ie(r*n)/n}),Gd=xv,Hd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Oc(n);if(a.b&&!a.b.b){var t=a.a;return Pd(_([t,t]))}else return n};return o(ae,Gd,o(ae,function(n){return o(Ce,function(a){return p(Ld,1,a,n)},Md(e))},o(ae,Td(Aa),o(ae,Ce(function(n){return n.fF}),o(ae,Ce(Da(zr)),o(ae,zd("Parsing hex regex failed"),pa(function(n){var a=o(re,o(ae,r,o(ae,Ed,Dd(Of))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Nd,t/255,c/255,u/255,o(Wd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(jd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ba=Vr("input"),St=Vr("label"),Tt=Ge("name"),ll=$(function(e,r){return p(dr,M,r,e)}),Xd=o(ll,_(["target","checked"]),Y),Id=function(e){return o(tl,"change",o(ua,e,Xd))},Ud=function(e){return P(e,!0)},Jd=function(e){return{$:1,a:e}},Od=$(function(e,r){return o(al,e,Jd(r))}),qd=o(ll,_(["target","value"]),xn),$o=function(e){return o(Od,"input",o(ua,Ud,o(ua,e,qd)))},ul=Ge("max"),vl=Ge("min"),$l=function(e){return o(Ge,"step",e)},ga=Ge("type"),fo=Ge("value"),pi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,_([o(St,_([xt(r)]),_([o(I,_([U("relative w-full")]),_([o(I,_([U("inline-block")]),_([$r(r)])),o(I,_([U("inline-block float-right")]),_([$r(ye(n))]))]))])),o(ba,_([ga("range"),o(be,"width","100%"),sa(r),Tt(r),vl(ye(a)),ul(ye(t)),fo(ye(n)),$l(ye(i)),$o(o(ae,io,o(ae,vr(42),c)))]),L)]))},Yd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Zd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,_([o(I,_([U("mb-2")]),_([o(St,_([xt(e)]),_([$r(e)]))])),o(ba,_([ga("checkbox"),sa(e),Tt(e),Id(md(e)),wd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return pi({cf:e,cr:i,cv:t,cz:bd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return pi({cf:e,cr:i,cv:t,cz:o(ae,Ie,gd(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,_([o(I,_([o(be,"margin-bottom","6px")]),_([o(St,_([xt(e)]),_([$r(e)]))])),o(ba,_([ga("color"),o(be,"width","100%"),o(be,"height","26px"),o(be,"padding","0px"),sa(e),Tt(e),$o(function(l){return o(pd,e,o(Yd,uo,Hd(l)))}),fo(Sd(c))]),L)]))}}),Qd=function(e){return o(I,_([U("p-4 border-y-[0.5px] border-white20")]),_([o(I,_([U("text-lg pb-2")]),_([$r(e.ff)])),o(I,_([U("pl-2 pr-2")]),dd(o(yt,Zd,e.av)))]))},Kd=function(e){return o(I,_([U("text-xs text-white60")]),o(re,Qd,e))},em=function(e){return o(I,_([U("absolute left-[104px] bottom-2 text-sm text-white40")]),_([$r("clock: "+o(Kc,3,en(e).db))]))},rm=function(e){e.a;var r=e.b.T;return o(Ce,function(n){return Ie(60/(en(e).db-n))},o(Ce,o(ae,Zf,function(n){return n.db}),Aa(o(Gc,59,r))))},nm=function(e){return o(I,_([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rm(e);if(r.$===1)return _([$r("... Fps")]);var n=r.a;return _([$r(De(n)+" Fps")])}())},am=function(e){return{$:0,a:e}},tm=function(e){var r=e.b.T;return Ar(r)},om=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},im=function(e){return o(ba,_([U("absolute w-full"),ga("range"),vl(De(0)),ul(De(om(e)-1)),fo(De(tm(e))),$l(De(1)),$o(o(ae,io,o(ae,vr(42),o(ae,Ie,am))))]),L)},bi={$:1},cm={$:3},lm={$:2},fl=function(e){return!e.b},gi=$(function(e,r){return o(co,_([U("px-2 bg-black40"),U(r),lo(e)]),_([$r("REC")]))}),hi=$(function(e,r){return o(co,_([U("absolute left-[60px] mx-1 px-1 bg-black40"),lo(r)]),_([o(I,_([U("w-4 h-6 fill-white80")]),_([pn(e)]))]))}),um=function(e){var r=e.a,n=e.b.ab;return o(I,_([U("py-1")]),_([function(){switch(r.$){case 0:return o(gi,bi,"text-red-500 font-bold");case 1:return o(gi,lm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return fl(n)?o(I,L,L):o(hi,Xr.fo,cm);default:return o(hi,Xr.fn,bi)}}()]))},vm=function(e){return o(I,_([U("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([im(e),um(e),nm(e),em(e)]))},$m=function(e){var r=e.a;return hr(r,za)},fm=$(function(e,r){var n=$m(r.G)?o(I,L,L):o(I,_([U("absolute pointer-events-none w-8 h-8"),o(be,"left",ye(e.fp.fT+.5*e.cS.fR)+"px"),o(be,"top",ye(-e.fp.fX+.5*e.cS.eW)+"px")]),_([o(I,_([U(e.fp.e4?"fill-black80":"fill-white40")]),_([pn(Xr.fp)]))]));return o(I,L,_([n]))}),sm=$(function(e,r){var n=o(co,_([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),lo(td),fd("Distraction Free Mode")]),_([pn(Xr.f$)])),a=o(I,_([U("absolute w-8 bottom-12")]),_([o(si,_([U("fill-twitterBlue40 hover:fill-twitterBlue"),di("https://twitter.com/AzizErkalSelman"),mi("_blank")]),_([pn(Xr.fL)]))])),t=o(I,_([U("absolute w-8 bottom-2")]),_([o(si,_([U("fill-githubCat40 hover:fill-githubCat"),di("https://github.com/erkal/elm-3d-playground-exploration"),mi("_blank")]),_([pn(Xr.eQ)]))]));return r.aL?o(I,_([U("fixed w-10 h-10 p-1")]),_([n])):o(I,L,_([o(I,_([U("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(I,_([U("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),_([o(da,od,Kd(en(r.G).eA))])),o(I,_([U("absolute bottom-0 left-[300px] w-[600px] h-20")]),_([o(da,id,vm(r.G))])),o(fm,e,r)]))}),dm=y(function(e,r,n){var a=rd(n.G),t=en(n.G);return o(I,_([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(be,"width",ye(t.cS.fR)+"px"),o(be,"height",ye(t.cS.eW)+"px")]),_([o(I,_([U("fixed")]),_([o(da,Vc(Ks),o(e,t,a))])),o(I,_([sa("gui")]),_([o(sm,t,n),o(da,Qs,o(r,t,a))]))]))}),mm=We(function(e,r,n,a,t,i){var c=$(function(u,v){return P(C(Os,r,i,u,v),fi)}),l=function(u){var v=o(Rc,n,u.e1);return P({aL:u.e1.cS.fR<500,G:o(qs,v,a)},fi)};return ms({e0:l,fG:Vc(Zs(ns)),fM:c,fP:o(dm,e,t)})}),pm=R(function(e,r,n,a){return _e(mm,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),bm=function(e){return{}},gm=$(function(e,r){return P(e,Ic(r))}),hm=y(function(e,r,n){return{av:n,e5:r,ff:e}}),sl=rr,_m=function(e){return p(Pn,$(function(r,n){var a=r.a,t=r.b;return p(dn,a,t,n)}),sl,e)},wm=y(function(e,r,n){return p(hm,e,r,_m(n))}),Ha=wm,Hn=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Uc,P(a,t),n))}),ym=R(function(e,r,n,a){var t=F(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(Mn,f,m,d,a)}),xm=y(function(e,r,n){return C(ym,e,r,n,1)}),Ke=av,Sm=_([p(Ha,"Camera",!0,_([p(Hn,"camera distance",P(3,8),8),p(Hn,"camera azimuth",P(0,2*Ke),0),p(Hn,"camera elevation",P(-Ke/2,Ke/2),.5)])),p(Ha,"Color",!0,_([o(gm,"cube color",p(xm,0,.36,.5))])),p(Ha,"Time",!0,_([p(Hn,"period",P(.1,5),.7)]))]),Tm=$(function(e,r){return r}),Cm=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(Ma,e,r.av))}),Lm=$(function(e,r){return o(vr,0,Aa(o(Da,Cm(e),r)))}),Pm=$(function(e,r){return o(Lm,e,r.eA)}),Kn=Pm,qr=function(e){return e},vn=function(e){return qr(Ke*(e/180))},zm=function(e){return e},gr=function(e){return e},Ct=function(e){var r=e;return-r},km=$(function(e,r){var n=e,a=r;return{fT:n.fX*a.c5-n.c5*a.fX,fX:n.c5*a.fT-n.fT*a.c5,c5:n.fT*a.fX-n.fX*a.fT}}),dl=function(e){var r=e;return r.c3},ml=function(e){var r=e;return r.c4},Mm=function(e){return o(km,dl(e),ml(e))},Rr=function(e){var r=e;return r.cA},Br=tv,Yr=ov,Xa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=Yr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,h=1-2*(f+x),T=s.c5*u,k=l*T,W=2*(w-k),j=2*(w+k),E=d*T,N=2*(E+b),G=2*(E-b),B=g*T,O=2*(B-m),Q=2*(B+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+W*i.fX+N*i.c5,fX:j*i.fT+oe*i.fX+O*i.c5,c5:G*i.fT+Q*i.fX+h*i.c5}}),Dm=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=Yr(c),v=a.cA,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,k=l*T,W=w*T,j=T*T,E=1-2*(h+j),N=b.c5*u,G=l*N,B=2*(W-G),O=2*(W+G),Q=w*N,ie=2*(Q+k),ve=2*(Q-k),oe=T*N,de=2*(oe-x),ze=2*(oe+x),Se=N*N,mr=1-2*(j+Se),pr=1-2*(h+Se);return{fT:s.fT+mr*d+B*m+ie*f,fX:s.fX+O*d+pr*m+de*f,c5:s.c5+ve*d+ze*m+E*f}}),fr=function(e){return e},xr=function(e){var r=e;return r.c3},Sr=function(e){var r=e;return r.c4},Tr=function(e){var r=e;return r.c6},Am=y(function(e,r,n){return fr({cA:p(Dm,e,r,Rr(n)),c3:p(Xa,e,r,xr(n)),c4:p(Xa,e,r,Sr(n)),c6:p(Xa,e,r,Tr(n))})}),_i=y(function(e,r,n){return p(Am,e(n),r,n)}),so=function(e){var r=e;return r.eG},An=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),pl=$(function(e,r){return fr({cA:o(An,e,Rr(r)),c3:xr(r),c4:Sr(r),c6:Tr(r)})}),Bm=$(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c5:n*a.c5}}),Fm=y(function(e,r,n){return o(pl,o(Bm,r,e),n)}),Vm=y(function(e,r,n){return p(Fm,so(e(n)),r,n)}),Bn=$(function(e,r){return{eG:r,cA:e}}),Rm=function(e){var r=e;return o(Bn,r.cA,r.c3)},Em=function(e){var r=e;return o(Bn,r.cA,r.c4)},jm=function(e){var r=e;return o(Bn,r.cA,r.c6)},Nm=function(e){var r=fr({cA:e.aR,c3:ml(e.dl),c4:Mm(e.dl),c6:dl(e.dl)}),n=p(Vm,jm,e.cb,p(_i,Rm,Ct(e.bC),p(_i,Em,e.bx,r)));return n},Wm=function(e){return{$:0,a:e}},se=function(e){var r=e;return Z(r)},ea=function(e){var r=e;return .5*r},Gm=iv,Hm=function(e){var r=e;return Gm(r)},Xm=function(e){var r=ea(se(e.ej)),n=Hm(r);return{cL:Wm(n),c1:e.c1}},tr={fT:0,fX:0,c5:0},bl=zr,cr=function(e){return e},gl=cr({fT:1,fX:0,c5:0}),mo=gl,po=cr({fT:0,fX:0,c5:1}),bo=po,Im=bl({cA:tr,c3:bo,c4:mo}),Um=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Xm({ej:vn(40),c1:Nm({bx:qr(n),cb:gr(t),bC:qr(a),aR:zm(r),dl:Im})})},Jm=function(e){return Um({bx:o(Kn,"camera azimuth",e),cb:o(Kn,"camera distance",e),bC:o(Kn,"camera elevation",e),aR:{fT:0,fX:0,c5:0}})},wi=function(e){return e*Ke/180},go=$(function(e,r){return{$:0,a:e,b:r}}),hl=$(function(e,r){return{$:2,a:e,b:r}}),_l=function(e){return{$:5,a:e}},wl=$(function(e,r){return{$:4,a:e,b:r}}),yl=$(function(e,r){return{$:3,a:e,b:r}}),xl=$(function(e,r){return{$:1,a:e,b:r}}),Om=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),qm=function(e){var r=e;return r},ho=function(e){var r=e;return qm(r.er)},_o=function(e){var r=e;return r.aK},Ym=$(function(e,r){return{er:o(pl,e,ho(r)),aK:_o(r)}}),Zm=$(function(e,r){var n=r;return o(Bn,o(An,e,n.cA),n.eG)}),Qm=$(function(e,r){var n=r;return{k:o(Zm,e,n.k),e9:n.e9,fr:n.fr}}),wo=function(e){var r=e;return r},Km=function(e){return e},Sl=$(function(e,r){var n=wo(r),a=n.a,t=n.b;return Km(P(e(a),e(t)))}),ep=$(function(e,r){return o(Sl,An(e),r)}),yo=function(e){var r=e;return r.ey},xo=function(e){var r=e;return r.fr},Tl=$(function(e,r){return{ey:r,fr:se(e)}}),rp=$(function(e,r){return o(Tl,xo(r),o(An,e,yo(r)))}),Cl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return F(e(a),e(t),e(i))}),np=$(function(e,r){return o(Cl,An(e),r)}),Ll=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Om,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(go,s,o(Ym,i,c));case 1:var s=r.a,l=r.b;return o(xl,s,o(np,i,l));case 3:var s=r.a,u=r.b;return o(yl,s,o(rp,i,u));case 2:var s=r.a,v=r.b;return o(hl,s,o(Qm,i,v));case 4:var s=r.a,d=r.b;return o(wl,s,o(ep,i,d));default:var m=r.a;return _l(o(re,Ll(F(n,a,t)),m))}}),yi=function(e){return Ll(F(e,0,0))},Ia=function(e){return e/255},ap=y(function(e,r,n){return C(Mn,Ia(e),Ia(r),Ia(n),1)}),tp=function(e){return e},op=function(e){return gr(.01*e)},xi=function(e){return e},ip=function(e){return e},cp=function(e){return{$:0,a:e}},lp=cp,up={$:3},vp=up,$p=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),fp=$p,sp=$(function(e,r){return r.b?p(dr,A,r,e):e}),je=function(e){return p(dr,sp,L,e)},So=$(function(e,r){return je(o(re,e,r))}),dp=function(e){return{$:1,a:e}},mp=dp,pp=function(e){return o(Ln,"height",De(e))},bp=function(e){return l$(f$(e))},gp=bp,hp=function(e){return{$:2,a:e}},_p=hp,wp=function(e){return o(Lr,"",e)},yp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ie(l*1e3)/1e3},c=function(l){return Ie(l*1e4)/100};return wp(_(["rgba(",ye(c(r)),"%,",ye(c(n)),"%,",ye(c(a)),"%,",ye(i(t)),")"]))},xp=$(function(e,r){switch(r.$){case 0:return o(vf,e,r);case 1:return o($f,e,r);case 2:return o(ff,e,r);case 3:return o(sf,e,r);case 4:return o(df,e,r);default:return o(mf,e,r)}}),Sp=$(function(e,r){switch(r.$){case 0:return o(j$,e,r);case 1:return o(N$,e,r);case 2:return o(W$,e,r);case 3:return o(G$,e,r);case 4:return o(H$,e,r);case 5:return o(X$,e,r);case 6:return o(I$,e,r);case 7:return o(U$,e,r);default:return J$(e)}}),Tp=y(function(e,r,n){return p(uf,e,r,n)}),Si=function(e){var r=e;return r},rn=Cf,Ua=C(rn,1,1,1,1),Ue=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),Cp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Lp=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(Cp,n*a/t,n,n*(1-a-t)/t)}),Fn=_f,Pp=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=$(function(e,r){return Pp(o(Lp,e,r))}),Pl=$(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),qe=Df,zp=function(e){return qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ja=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(rn,a.bX,a.bX,a.bX,i);return _e(t,e,c,zp(a),a.dp,r,n)}),zl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Pl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Ja,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(A,S(Ja,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(A,S(Ja,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(Pn,C(zl,e,r,n,a),i,k)}}),kp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),kl=kp,Co=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Mp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Co,518,r,n,a)},Dp=$(function(e,r){return{$:6,a:e,b:r}}),Ap=Dp,Ml=_([Mp({V:1,W:0,Z:!1}),C(kl,!1,!1,!1,!1),o(Ap,0,1)]),Zr=519,Lo=8,Dl=15,Ir=7681,Bp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=E$,Fp=$(function(e,r){return{$:0,a:e,b:r}}),Vp=Fp({df:1,$7:0,dV:5}),Me=gf,Rp=Vp(_([{bT:o(Me,-1,-1)},{bT:o(Me,1,-1)},{bT:o(Me,-1,1)},{bT:o(Me,1,1)}])),Ep={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},jp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Po=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(jp,a,t,i)))}),zo=function(e){return p(Po,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},ko=function(e){return S(ne,_([zo(e),C(kl,!1,!1,!1,!1)]),Ep,Bp,Rp,{})},Np=ko({a8:Ir,co:0,cN:Lo,bl:Zr,c2:Dl,bt:Ir,bu:Ir}),Wp=516,Ti=5386,xe=7680,Gp=function(e){return o(Dn,2,e+4)},Al=function(e){return ko({a8:xe,co:Dl,cN:Lo,bl:Wp,c2:Gp(e),bt:Ti,bu:Ti})},Hp=y(function(e,r,n){return je(_([p(Ue,e,n,Ml),_([Al(r),Np])]))}),Xp=$(function(e,r){return je(o(Pc,Hp(e),r))}),Ip=function(e){var r=e.Z,n=e.W,a=e.V;return C(Co,513,r,n,a)},Up=Ip({V:1,W:0,Z:!0}),Jp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Op=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return Jp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},qp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ci=$(function(e,r){var n=e,a=r;return p(qp,32774,n,a)}),Yp=1,Li=771,Zp=770,Mo=Op({bv:0,aH:o(Ci,Yp,Li),by:0,bA:o(Ci,Zp,Li),bF:0,bV:0}),Er=_([Up,Mo]),Qp=function(e){var r=e;return r.dO},Kp=function(e){var r=e;return r.dP},Bl=function(e){var r=e;return r.dQ},e0=function(e){var r=e;return r.dR},r0=function(e){var r=e;return r.dS},Fl=function(e){var r=e;return r.dT},lr=$(function(e,r){var n=e,a=r;return a-n}),Vl=function(e){return F(o(lr,e0(e),Qp(e)),o(lr,r0(e),Kp(e)),o(lr,Fl(e),Bl(e)))},Pi=function(e){var r=e;return Rr(r)},n0=function(e){return e},a0=function(e){return fr({cA:n0({fT:e.H,fX:e.I,c5:e.J}),c3:cr({fT:e.q,fX:e.r,c5:e.s}),c4:cr({fT:e.t,fX:e.u,c5:e.v}),c6:cr({fT:e.w,fX:e.x,c5:e.y})})},Oa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c5*v.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),Rl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),El=$(function(e,r){return{cA:o(Rl,e,Rr(r)),c3:o(Oa,e,xr(r)),c4:o(Oa,e,Sr(r)),c6:o(Oa,e,Tr(r))}}),Lt=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),ha=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Qe,n,a)}),ra=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),t0=$(function(e,r){var n=ha(r),a=ha(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ne=function(e){var r=e;return r},o0=function(e){var r=e;return F(r.fT,r.fX,r.c5)},bn=$(function(e,r){var n=e,a=r;return a+n}),i0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ea(se(a)),c=ea(se(n)),l=ea(se(t)),u=o0(r),v=u.a,s=u.b,d=u.c;return{dO:o(bn,c,v),dP:o(bn,i,s),dQ:o(bn,l,d),dR:o(lr,c,v),dS:o(lr,i,s),dT:o(lr,l,d)}}),zi=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fX*r,s=t.fT*r,d=Ne(Tr(e)),m=Z(l*d.fT)+Z(c*d.fX)+Z(i*d.c5),f=Ne(Sr(e)),g=Z(l*f.fT)+Z(c*f.fX)+Z(i*f.c5),b=Ne(xr(e)),w=Z(l*b.fT)+Z(c*b.fX)+Z(i*b.c5),x=o(i0,F(w,g,m),o(Rl,e,p(Lt,s,v,u)));if(a.$)return te(x);var h=a.a;return te(o(t0,h,x))}),Pt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(zi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(zi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Pt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(El,a0(v),e),m=r*v.bX,f=e,g=r,b=C(Pt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),nn=wf,an=yf,tn=xf,jl=function(e){return{$:4,a:e}},c0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return jl(o(c0,e,L))},l0={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},u0=function(e){var r=e;return r},ki=ko({a8:Ir,co:0,cN:Lo,bl:Zr,c2:255,bt:Ir,bu:Ir}),Hr=fv,or=0,v0=function(e){var r=e,n=o(Qe,Z(r.fT),o(Qe,Z(r.fX),Z(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=Hr(i*i+t*t+a*a);return c*n}else return or},Te={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Ve=$(function(e,r){var n=e,a=r;return qe({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),$n=P({bd:o(Ve,Te,Te),bK:o(Ve,Te,Te),bL:o(Ve,Te,Te),bM:o(Ve,Te,Te)},C(rn,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),Nl=514,Wl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Co,515,r,n,a)},Gl=240,$0=_([Wl({V:1,W:0,Z:!0}),zo({a8:xe,co:Gl,cN:0,bl:Nl,c2:0,bt:xe,bu:xe}),Mo]),f0=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=se(a),l=c,u=se(t),v=u,s=n.cL;if(s.$){var m=s.a;return gt(v)?qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return gt(v)?qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Xn=$(function(e,r){return(1&e>>r)===1?0:1}),s0=function(e){return _([Wl({V:1,W:0,Z:!0}),zo({a8:xe,co:Gl,cN:e,bl:Nl,c2:0,bt:xe,bu:xe}),Mo])},d0=y(function(e,r,n){return je(o(re,function(a){var t=a<<4,i=C(rn,o(Xn,a,0),o(Xn,a,1),o(Xn,a,2),o(Xn,a,3));return p(Ue,e,P(r,i),s0(t))},o(Jr,1,o(Dn,2,n)-1)))}),ur=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Ur=function(e){var r=e;return r},m0=Af,Mi=function(e){var r=e;return ur(Tr(r))},Hl=cr({fT:0,fX:1,c5:0}),Xl=Hl,p0={cA:tr,c3:mo,c4:Xl,c6:bo},Ba=function(e){var r=e;return r},b0=function(e){var r=Ba(Rr(e)),n=Ne(Tr(e)),a=Ne(Sr(e)),t=Ne(xr(e));return qe({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},g0=$(function(e,r){var n=r;return b0(o(El,n,e))}),h0=function(e){return o(g0,p0,e)},_0=function(e){var r=e;return r.c1},w0=function(e){var r=e;return xr(r)},y0=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),x0=function(e){var r=e;return Sr(r)},S0=function(e){var r=_0(e.ev),n=fr({cA:Pi(r),c3:w0(r),c4:x0(r),c6:ur(Mi(r))}),a=Vn(e.aP),t=a,i=C(Pt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=h0(r),u=o(K,.99,o(ce,se(e.aJ),Ct(Bl(c)))),v=Vl(c),s=v.a,d=v.b,m=v.c,f=v0(p(y0,s,d,m)),g=o(K,1.01,o(bn,f,Ct(Fl(c)))),b=o(f0,e.ev,{eq:e.eq,eP:g,fg:u}),w=m0(b).dM,x=w?Ne(ur(Mi(r))):Ur(Pi(r)),h=function(){var oe=e.bZ;switch(oe.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var de=oe.a;return P(3,de);case 4:var de=oe.a;return P(4,de);default:return P(5,0)}}(),T=h.a,k=h.b,W=e.bD,j=W,E=o(To,j,e.b$),N=E,G=qe({dx:0,dy:x.fT,dz:nn(N),dA:e.ec,dB:0,dC:x.fX,dD:an(N),dE:u0(f),dF:0,dG:x.c5,dH:tn(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),B=_e(zl,G,l,b,l0,t,{M:L,U:L,fz:L}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return je(_([p(Ue,B.M,P(Q,Ua),Er),p(Ue,B.U,$n,Er)]));case 1:var Q=O.a;return je(_([p(Ue,B.M,$n,Er),_([ki]),p(Ue,B.fz,Q.bd,Ml),_([Al(0)]),p(Ue,B.M,P(Q,Ua),$0),p(Ue,B.U,$n,Er)]));default:var ie=O.a,ve=O.b;return je(_([p(Ue,B.M,P(ve,Ua),Er),_([ki]),o(Xp,B.fz,ie),p(d0,B.M,ve,Ar(ie)),p(Ue,B.U,$n,Er)]))}},T0=function(e){return o(Ln,"width",De(e))},C0=$(function(e,r){var n=_([mp(1),_p(0),lp(!0),C(fp,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return F(n,"0",1);case 1:return F(o(A,vp,n),"1",1);default:var k=T.a;return F(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Si(v),d=o(be,"height",De(s)+"px"),m=Si(u),f=m/s,g=o(So,function(T){return S0({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(be,"width",De(m)+"px"),w=e.aI,x=w,h=yp(x);return p(gp,"div",_([o(be,"padding","0px"),b,d]),_([P(i,p(Tp,t,_([T0(Ie(m*c)),pp(Ie(s*c)),b,d,o(be,"display","block"),o(be,"background-color",h)]),g))]))}),L0=function(e){return o(C0,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Il=function(e){return e},Di=Il({fT:.31271,fX:.32902}),P0=$(function(e,r){var n=e,a=Ne(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(To,r.cd,r.b6),u=l;return{by:tn(u),ex:n,bF:an(u),cJ:0,bV:nn(u),cZ:1,fT:-t,fX:-i,c5:-c}}),z0=function(e){return e},k0=function(e){return z0(1.2*o(Dn,2,e))},qa=function(e){return e},M0={$:0},D0=M0,Ul=function(e){return e},A0=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Ai=function(e){var r=e;return r},B0=function(e){e:for(;;){if(hr(e.e2,or)&&hr(e.e3,or))return Te;if(o(A0,se(e.e2),se(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:ur(e.ei)};e=r;continue e}else{var n=Z(Ai(e.e3)/Ke),a=Z(Ai(e.e2)/Ke),t=Ne(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(To,Ul(1),e.b6),v=u;return{by:a*tn(v),ex:!1,bF:a*an(v),cJ:n/a,bV:a*nn(v),cZ:3,fT:i,fX:c,c5:l}}}},Bi=function(e){return B0({b6:e.b6,e2:e.cd,e3:or,ei:e.ei})},Jl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),F0=function(e){var r=e;return r},Ol=function(e){var r=p(Jl,1667,25e3,F0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Il({fT:n,fX:a})},ql=function(e){return e},V0=Ol(ql(12e3)),R0=Ol(ql(5600)),E0=function(e){return{$:2,a:e}},j0=function(e){return E0(e)},N0=$(function(e,r){return{$:2,a:e,b:r}}),Yl=function(e){return{$:0,a:e}},In=function(e){var r=e;return r},W0=function(e){var r=e;return r.ex},G0=Yl($n.a),H0=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(A,a,i),c):P(i,o(A,a,c))});return p(dr,n,P(L,L),r)}),X0=function(e){var r=e;return qe({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},I0=ee(function(e,r,n,a,t,i,c,l){var u=o(H0,W0,_([In(e),In(r),In(n),In(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(N0,o(re,X0,v),{bd:o(Ve,m,g),bK:o(Ve,w,h),bL:o(Ve,t,i),bM:o(Ve,c,l)})}else return G0}else return Yl({bd:o(Ve,e,r),bK:o(Ve,n,a),bL:o(Ve,t,i),bM:o(Ve,c,l)})}),U0=y(function(e,r,n){return Sa(I0,e,r,n,Te,Te,Te,Te,Te)}),J0=function(e){var r=o(P0,ip(e.fz),{b6:R0,eG:e.fI,cd:qa(8e4)}),n=Bi({b6:V0,cd:qa(2e4),ei:e.ei}),a=Bi({b6:Di,cd:qa(15e3),ei:ur(e.ei)}),t=p(U0,r,n,a);return L0({b0:j0(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:k0(15),bJ:t,bZ:D0,b$:Di})},Zl=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),O0=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Ql=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Kl=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),q0=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Y0=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Z0=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Do=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(Z0,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Zl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(O0,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Ql,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(Y0,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(Kl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(q0,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ao={$:0},Q0=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ha(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),K0=y(function(e,r,n){var a=ha(e(r));return Sa(Q0,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Ya=$(function(e,r){var n=e,a=r;return J(a,n)<1}),eu=function(e){return o(Ya,e.dO,e.dR)&&o(Ya,e.dP,e.dS)&&o(Ya,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Sn=function(e){var r=e;return r},kr=function(e){var r=e;return r.fT},Mr=function(e){var r=e;return r.fX},Dr=function(e){var r=e;return r.c5},ru=function(e){var r=Sn(e),n=r.a,a=r.b,t=r.c,i=kr(n),c=Mr(n),l=Dr(n),u=kr(a),v=Mr(a),s=Dr(a),d=kr(t),m=Mr(t),f=Dr(t);return eu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},nu=Sf,Le=function(e){return nu(Ba(e))},au=function(e){var r=e;return r},Fa=function(e){return nu(au(e))},e3=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),zt=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),r3={fT:0,fX:0,c5:0},n3=$(function(e,r){var n=e,a=r,t=o(Qe,Z(a.fT),o(Qe,Z(a.fX),Z(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=Hr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return r3}),a3=n3(Ul(1)),tu=y(function(e,r,n){var a=o(zt,r,n),t=o(zt,e,r);return a3(o(e3,a,t))}),t3=function(e){var r=Sn(e),n=r.a,a=r.b,t=r.c,i=Fa(p(tu,n,a,t));return F({o:i,bT:Le(n)},{o:i,bT:Le(a)},{o:i,bT:Le(t)})},o3=$(function(e,r){return{$:2,a:e,b:r}}),ou=o3({df:3,$7:0,dV:4}),i3=function(e){if(e.b){var r=e.a,n=e.b,a=ou(o(re,t3,e)),t=p(K0,ru,r,n);return C(Zl,t,e,a,0)}else return Ao},Fe=y(function(e,r,n){return F(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),iu=function(){var e=gr(1),r=gr(1),n=gr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(me,i,t,a),l=o(K,.5,e),u=p(me,i,t,l),v=o(K,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(K,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Do(i3(_([p(Fe,c,g,f),p(Fe,c,s,g),p(Fe,u,b,w),p(Fe,u,w,d),p(Fe,f,g,w),p(Fe,f,w,b),p(Fe,c,d,s),p(Fe,c,u,d),p(Fe,c,f,b),p(Fe,c,b,u),p(Fe,s,w,g),p(Fe,s,d,w)])))}(),Un={$:0},c3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),l3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Fa(p(tu,u,l,c)),s={o:v,bT:Le(u)},d={o:v,bT:Le(l)},m={o:v,bT:Le(c)};return o(A,s,o(A,d,o(A,m,n)))}),Bo=function(e){var r=e;return r.D},u3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),kt=4294967295>>>32-wn,Mt=qu,v3=y(function(e,r,n){e:for(;;){var a=kt&r>>>e,t=o(Mt,a,n);if(t.$){var v=t.a;return o(Mt,kt&r,v)}else{var i=t.a,c=e-wn,l=r,u=i;e=c,r=l,n=u;continue e}}}),$3=function(e){return e>>>5<<5},f3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,$3(n))>-1?te(o(Mt,kt&e,i)):te(p(v3,a,e,t))}),Fo=function(e){var r=e;return r.ah},Za=$(function(e,r){return o(f3,e,Fo(r))}),s3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(u3,y(function(c,l,u){return F(c,l,u)}),o(Za,a,e),o(Za,t,e),o(Za,i,e))};return o(Da,r,Bo(e))},d3=y(function(e,r,n){e:for(;;){var a=o(ro,Be,e),t=a.a,i=a.b;if(J(pt(t),Be)<0)return o(Fc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Ac(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Vo=function(e){return e.b?p(d3,e,L,0):Mc},m3=y(function(e,r,n){return e(r(n))}),p3=$(function(e,r){return!o(Jc,o(m3,ps,e),r)}),b3=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(A,n,a):a}),L,r)}),g3=function(e){var r=e.a;return r},cu=$(function(e,r){var n=g3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(p3,a,r)?{D:r,ah:e}:{D:o(b3,a,r),ah:e}}),h3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=h3({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Ur(r),a=Ur(e);return P(F(a.fT,a.fX,a.c5),F(n.fT,n.fX,n.c5))}),Fi=p(Fn,0,0,0),Qa=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ma,o(na,e,r),t);if(v.$){var d={o:Fi,bT:Le(r)},m={o:Fi,bT:Le(e)},f=u+1,g=u;return F(o(A,F(n,g,f),o(A,F(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return F(o(A,F(n,s,a),c),l,u)}}),_3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=v,T=a+3,k=_e(Qa,s,m,f,b,r,_e(Qa,d,s,g,f,r,_e(Qa,m,d,b,g,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var W=t,j=W.a,E=W.b;return P(j,Ae(E))}}),w3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(dn,o(na,m,s),f,p(dn,o(na,s,d),g,p(dn,o(na,d,m),b,t))),x=o(A,F(b,g,f),a),h=e,T=v,k=n+3,W=x,j=w;e=h,r=T,n=k,a=W,t=j;continue e}else return F(a,t,n)}),Cr=y(function(e,r,n){var a=s3(n),t=p(dr,l3(r),L,a),i=S(w3,r,a,0,L,sl),c=i.a,l=i.b,u=i.c,v=S(_3,r,l,a,0,F(c,L,u)),s=v.a,d=v.b,m=fl(d)?t:le(t,d);return p(c3,e,o(cu,Vo(m),s),o(Rn,m,s))}),Dt=function(e){return{D:o(re,function(r){return F(3*r,3*r+1,3*r+2)},o(Jr,0,Ar(e)-1)),ah:Vo(je(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},lu=function(e){switch(e.$){case 0:return Un;case 1:var a=e.a,r=e.b,n=o(re,Sn,r);return p(Cr,a,zr,Dt(n));case 2:var a=e.a,r=e.b,n=o(re,Sn,r);return p(Cr,a,zr,Dt(n));case 3:var a=e.a,t=e.b;return p(Cr,a,zr,t);case 4:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 8:return Un;case 9:return Un;default:return Un}},Vi=lu(iu),uu={$:0},z=uu,pe=$(function(e,r){return{$:1,a:e,b:r}}),y3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},x3=1029,S3=function(e){return{$:5,a:e}},vu=function(e){var r=e;return S3(r)},T3=vu(x3),C3=1028,L3=vu(C3),Pe=y(function(e,r,n){return r===1?e?o(A,T3,n):o(A,L3,n):n}),$u={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ka=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),$u,y3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Ro={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},fu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nr=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),fu,Ro,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),su=$(function(e,r){return{$:3,a:e,b:r}}),P3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},du={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},z3=R(function(e,r,n,a){return o(su,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,du,P3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Eo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Va=Tf,ar=ge(function(e,r,n,a,t){return o(pe,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),fu,Eo,a,{aN:o(Va,En(r),e),b:l,c,d:s,e:i,f:v})}))}),k3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},M3=ge(function(e,r,n,a,t){return o(su,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,du,k3,t,{aN:o(Va,En(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},pu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),pu,mu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},D3=We(function(e,r,n,a,t,i){return o(pe,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),gu,bu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),hu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},A3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,ee(function(d,m,f,g,b,w,x,h){var T=x.a,k=x.b;return S(ne,p(Pe,g,s,h),gu,hu,v,{b4:e,b7:r,b8:i,b9:a,P:k,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},_u={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},On=We(function(e,r,n,a,t,i){return o(pe,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),pu,_u,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),B3=function(e){return{$:0,a:e}},Ri=$(function(e,r){return{$:1,a:e,b:r}}),gn=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),F3=function(e){return C(rn,nn(e),an(e),tn(e),1)},jo=C(rn,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return P(a,jo)}else{var n=r.a;return P(e,F3(n))}}),wu=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Ri,P(t,jo),o(gn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ri,o(aa,t,e),o(gn,t,r))}else{var a=n.a.a;return n.b.a,B3(a)}}),V3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),R3=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),E3=function(e){return o(Me,e,1)},At=o(Me,0,0),jr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,At)}else{var n=r.a;return P(e,E3(n))}}),yu=R(function(e,r,n,a){var t=C(R3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(qn,P(u,jo),o(jr,u,r),o(jr,u,n),o(gn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(qn,o(aa,u,e),P(u,At),o(jr,u,n),o(gn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(qn,o(aa,u,e),o(jr,u,r),P(u,At),o(gn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(qn,o(aa,u,e),o(jr,u,r),o(jr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(V3,i,c,l)}}),j3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},et=ge(function(e,r,n,a,t){return o(pe,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),$u,j3,a,{b1:En(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),xu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},N3=R(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),xu,bu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),W3=Rt(function(e,r,n,a,t,i,c,l,u){return o(pe,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,h=b.b;return S(ne,p(Pe,m,u,w),xu,hu,l,{b4:e,b7:r,b8:i,b9:a,P:h,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Tn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),G3=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},H3=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},X3=function(e){var r=e;return p(Tn,r.dT,r.dQ,.5)},I3=function(e){return p(me,G3(e),H3(e),X3(e))},H=function(e){var r=Vl(e),n=r.a,a=r.b,t=r.c;return{ey:Ba(I3(e)),eS:n/2,eT:a/2,eU:t/2}},No=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(Ka,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(Ka,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(Ka,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(nr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(nr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(z3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(et,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(et,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(et,l,v,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(ar,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(ar,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(M3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(wu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,h=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(N3,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(D3,b,x,h,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,k=e.c,W=e.d,j=e.e,E=C(yu,T,k,W,j);if(E.$){var O=E.a,Q=O.a,ie=O.b,ve=E.b,oe=ve.a,de=ve.b,ze=E.c,Se=ze.a,mr=ze.b,pr=E.d,x=pr.a,h=pr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Xu(W3,Q,ie,oe,de,Se,mr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return A3(Q)(ie)(oe)(de)(Se)(mr)(x)(h)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,G=E.b,B=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,N,G,B,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,N,G,B,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,N,G,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,N,G,B,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),rt=function(e){var r=e;return r.fT},nt=function(e){var r=e;return r.fX},at=function(e){var r=e;return r.c5},U3=function(e){var r=e,n=at(r.c6),a=nt(r.c6),t=rt(r.c6),i=at(r.c4),c=nt(r.c4),l=rt(r.c4),u=at(r.c3),v=nt(r.c3),s=rt(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},J3=function(e){var r=Ba(Rr(e)),n=Ne(Tr(e)),a=Ne(Sr(e)),t=Ne(xr(e));return{dp:U3(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Nr=$(function(e,r){return{$:5,a:e,b:r}}),Su=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Pl,a,e);return o(Nr,i,t);case 1:return o(Nr,e,n);case 3:return o(Nr,e,n);case 2:return o(Nr,e,n);default:return o(Nr,e,n)}}),Tu=$(function(e,r){return o(Su,J3(e),r)}),Ra=function(e){return{$:2,a:e}},O3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),q3=Pf,Y3=Lf,Ei=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Y3(a),g=f.fT,b=f.fX,w=f.c5,x=f.em,h=q3({em:x,fT:g*s,fX:b*d,c5:w*m});return Sa(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Bt=$(function(e,r){switch(r.$){case 0:return uu;case 5:var n=r.a,a=r.b;return o(Nr,n,o(Bt,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(O3,e,t),o(Ei,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Ei,e,i));default:var c=r.a;return jl(o(re,Bt(e),c))}}),Wo=$(function(e,r){var n=r;return o(Bt,e,n)}),Go={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Cu=7683,Lu=7682,Z3=p(Po,{co:0,cN:0,c2:15},{a8:xe,bl:Zr,bt:xe,bu:Cu},{a8:xe,bl:Zr,bt:xe,bu:Lu}),Q3=p(Po,{co:0,cN:0,c2:15},{a8:xe,bl:Zr,bt:xe,bu:Lu},{a8:xe,bl:Zr,bt:xe,bu:Cu}),Ho=$(function(e,r){return e?o(A,Q3,r):o(A,Z3,r)}),K3={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},eb=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(Ho,i,v),K3,Go,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},_a=function(e){var r=eb(e);if(r.$)return z;var n=r.a;return Ra(n)},rb=R(function(e,r,n,a){var t=o(No,n,iu),i=function(){var s=P(e,r);return s.a?s.b?Vn(_([t,_a(Vi)])):t:s.b?_a(Vi):z}(),c=_o(a),l=c.a,u=c.b,v=c.c;return o(Tu,ho(a),o(Wo,F(l,u,v),i))}),nb=$(function(e,r){return C(rb,!0,!0,e,r)}),Ft=function(e){return{$:0,a:e}},Pu=$(function(e,r){return{$:0,a:e,b:r}}),ab=function(e){var r=vo(e),n=r.cM,a=r.cc,t=r.b5;return p(Fn,n,a,t)},tb=function(e){return o(Pu,0,Ft(ab(e)))},Xo=function(e){var r=e;return r.k},hn=function(e){var r=e;return Br(r)},ob=$(function(e,r){var n=r;return n/e}),ji=function(e){var r=e;return{fT:Br(r),fX:Yr(r)}},ib=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Fa(a),bT:Le(n)},r)}),cb=xa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=tn(l.bT),s=an(l.bT),d=nn(l.bT),m=o(ra,e,d),f=o(Qe,r,d),g=o(ra,n,s),b=o(Qe,a,s),w=o(ra,t,v),x=o(Qe,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return eu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),zu=$(function(e,r){var n=tn(e.bT),a=an(e.bT),t=nn(e.bT);return Et(cb,t,t,a,a,n,n,r)}),lb=function(e){var r=p(xc,ib,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Bo(e)),i=o(zu,n,a);return C(Ql,i,e,t,0)}else return Ao},ku=cr({fT:0,fX:0,c5:-1}),Ni=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),wa=function(e){var r=e;return Yr(r)},fn=function(e){var r=e;return r},Vt=function(e){return qr(2*Ke*e)},Wi=bl({cA:tr,c3:mo,c4:Xl}),Mu=function(){var e=72,r=o(ob,e,Vt(1)),n=gr(1),a=fn(po),t=fn(ku),i=gr(1),c=o(K,.5,i),l=p(me,or,or,c),u=o(K,-.5,i),v=p(me,or,or,u),s=function(f){var g=o(K,f,r),b=fn(o(Ni,Wi,ji(g))),w=o(K,hn(g),n),x=o(K,wa(g),n),h=p(me,w,x,c),T=p(me,w,x,u),k=o(ma,e,f+1),W=o(K,k,r),j=fn(o(Ni,Wi,ji(W))),E=o(K,hn(W),n),N=o(K,wa(W),n),G=p(me,E,N,u),B=p(me,E,N,c);return _([F({o:t,bT:v},{o:t,bT:G},{o:t,bT:T}),F({o:b,bT:T},{o:j,bT:G},{o:j,bT:B}),F({o:b,bT:T},{o:j,bT:B},{o:b,bT:h}),F({o:a,bT:l},{o:a,bT:h},{o:a,bT:B})])},d=o(re,s,o(Jr,0,e-1)),m=Dt(je(d));return Do(lb(m))}(),Gi=lu(Mu),Du=function(e){var r=e;return r.cA},ub=function(e){var r=e,n=Z(r.c5),a=Z(r.fX),t=Z(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=Hr(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=Hr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=Hr(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=Hr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},vb=function(e){var r=ub(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return P(r,c)},$b=function(e){var r=so(e),n=vb(r),a=n.a,t=n.b;return fr({cA:Du(e),c3:a,c4:t,c6:r})},Au=function(e){var r=e;return r.e9},Bu=function(e){var r=e;return r.fr},fb=R(function(e,r,n,a){var t=$b(Xo(a)),i=o(No,n,Mu),c=function(){var d=P(e,r);return d.a?d.b?Vn(_([i,_a(Gi)])):i:d.b?_a(Gi):z}(),l=Bu(a),u=l,v=Au(a),s=v;return o(Tu,t,o(Wo,F(u,u,s),c))}),sb=$(function(e,r){return C(fb,!0,!0,e,r)}),Hi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Xi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},sn=function(e){var r=Sn(e),n=r.a,a=r.b,t=r.c,i=Ur(n),c=Ur(a),l=Ur(t);return qe({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Yn=ou(_([F({cY:0},{cY:1},{cY:2})])),db=$(function(e,r){var n=ru(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(pe,a,ee(function(h,T,k,W,j,E,N,G){return S(ne,p(Pe,W,0,G),Hi,Ro,Yn,{aw:t,b:k,c:T,d:E,e:h,bq:sn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(pe,a,ee(function(h,T,k,W,j,E,N,G){return S(ne,p(Pe,W,0,G),Hi,Eo,Yn,{aN:o(Va,En(c),i),b:k,c:T,d:E,e:h,bq:sn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(wu,l,f);if(u.$)return z;var v=u.a;return o(pe,a,ee(function(h,T,k,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(Pe,W,0,G),Xi,mu,Yn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:k,c:T,d:E,e:h,bq:sn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(yu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(pe,a,ee(function(h,T,k,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(Pe,W,0,G),Xi,_u,Yn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:k,c:T,d:E,cQ:w,e:h,bq:sn(r),f:j})}))}}),mb=function(){var e=_([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=_([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(Rn,e,r)}(),pb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ii=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,t,u),pb,Go,mb,{b:a,c:n,d:c,e:r,bY:l,bq:sn(e),f:i})}))},bb=R(function(e,r,n,a){var t=o(db,n,a),i=P(e,r);return i.a?i.b?Vn(_([t,Ii(a)])):t:i.b?Ii(a):z}),gb=$(function(e,r){return C(bb,!0,!0,e,r)}),hb=$(function(e,r){var n=Dr(r),a=Dr(e),t=Mr(r),i=Mr(e),c=kr(r),l=kr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),_b=function(e){var r=wo(e),n=r.a,a=r.b;return o(hb,n,a)},Ui={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wb=$(function(e,r){return{$:1,a:e,b:r}}),yb=wb({df:2,$7:0,dV:1}),Ji=yb(_([P({dw:0},{dw:1})])),xb=$(function(e,r){var n=_b(r),a=H(n),t=wo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(pe,a,ee(function(v,s,d,m,f,g,b,w){return S(ne,w,Ui,Ro,Ji,{aw:l,du:Le(c),dv:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(pe,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,Ui,Eo,Ji,{aN:o(Va,En(u),l),du:Le(c),dv:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Sb=$(function(e,r){return o(xb,e,r)}),Oi=$(function(e,r){var n=e,a=r;return n/a}),Tb=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(hr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),qi=$(function(e,r){return e<1?L:S(Tb,0,e,e,r,L)}),Cb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Fa(a),bT:Le(n),L:o(Me,c,l)},r)}),Lb=function(e){var r=p(xc,Cb,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Bo(e)),i=o(zu,n,a);return C(Kl,i,e,t,0)}else return Ao},Fu=$(function(e,r){var n=e,a=r,t=Br(a);return{fT:t*Br(n),fX:t*Yr(n),c5:Yr(a)}}),Pb=function(){var e=gr(1),r=72,n=o(Jr,0,r-1),a=o(qi,r,o(Tn,or,Vt(1))),t=Kt(r/2),i=o(Jr,0,t-1),c=o(qi,t,o(Tn,vn(90),vn(-90))),l=Vo(je(o(re,function(s){return o(re,function(d){return{o:fn(o(Fu,s,d)),bT:p(me,o(K,hn(d)*hn(s),e),o(K,hn(d)*wa(s),e),o(K,wa(d),e)),L:P(o(Oi,s,Vt(1)),o(Oi,o(bn,vn(90),d),vn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=je(o(re,function(s){return je(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([F(b,g,m),F(b,m,f)])},i))},n));return Do(Lb(o(cu,l,v)))}(),ya=72,Zn=2*ya,zb=$(function(e,r){e:for(;;){var n=Zn+1,a=o(ma,Zn,2*e+3),t=o(ma,Zn,2*e+2),i=2*e+1,c=2*e,l=Zn,u=o(A,F(l,c,t),o(A,F(c,a,t),o(A,F(c,i,a),o(A,F(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),kb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Mb=$(function(e,r){e:for(;;){var n=p(kb,0,2*Ke,e/ya),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Db=function(){var e=o(Mb,ya-1,_([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(zb,ya-1,L);return o(Rn,e,r)}(),Ab={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Yi=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,!0,u),Ab,Go,Db,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},Bb=function(e){var r=au(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},Fb=$(function(e,r){return o(Su,Bb(e),r)}),Vb=R(function(e,r,n,a){var t=o(No,n,Pb),i=function(){var u=P(e,r);return u.a?u.b?Vn(_([t,Yi()])):t:u.b?Yi():z}(),c=xo(a),l=c;return o(Fb,o(zt,tr,yo(a)),o(Wo,F(l,l,l),i))}),Rb=$(function(e,r){return C(Vb,!0,!0,e,r)}),Eb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Vu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),jb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Nb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Pu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Eb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Vu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(jb,n,a,t,i,c)}},Wb=Nb,Ru=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(nb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(gb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(Rb,Wb(t),a)]);case 2:var t=e.a,i=e.b;return _([o(sb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Sb,tb(c),l)]);default:var u=e.a;return o(So,Ru,u)}},Gb=function(e){return o(So,Ru,e)},Hb=$(function(e,r){return J0({aI:tp(e.es),ev:e.ev,aJ:op(.5),ca:e.ca,aK:P(xi(Ie(e.cS.fR)),xi(Ie(e.cS.eW))),aP:Gb(r),fz:!0,fI:o(Fu,qr(e.fH),qr(e.fJ)),ei:bo})}),tt=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ot=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Xb=cr({fT:-1,fX:0,c5:0}),Ib=cr({fT:0,fX:-1,c5:0}),Ub=We(function(e,r,n,a,t,i){var c=o(tt,n,i)?po:ku,l=o(tt,r,t)?Hl:Ib,u=o(tt,e,a)?gl:Xb,v=F(se(o(lr,e,a)),se(o(lr,r,t)),se(o(lr,n,i))),s=p(me,o(ot,e,a),o(ot,r,t),o(ot,n,i)),d=fr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Jb=$(function(e,r){return _e(Ub,kr(e),Mr(e),Dr(e),kr(r),Mr(r),Dr(r))}),Ob=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=F(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(go,e,o(Jb,p(Lt,-c,-l,-u),p(Lt,c,l,u)))}),qb=$(function(e,r){return o(Ce,function(n){if(n.$===2){var a=n.a;return a}else return uo},o(Ma,e,r.av))}),Yb=$(function(e,r){return o(vr,uo,Aa(o(Da,qb(e),r)))}),Zb=$(function(e,r){return o(Yb,e,r.eA)}),Qb=Zb,it=function(e){return p(Jl,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},Kb=function(e){var r=vo(e),n=r.cM,a=r.cc,t=r.b5;return p(Fn,it(n),it(a),it(t))},eg=function(e){return p(Vu,0,Ft(Kb(e)),Ft(0))},jn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c5:a.c5+r*(t.c5-a.c5)}}),rg=y(function(e,r,n){var a=ho(n),t=xr(a),i=Sr(a),c=Tr(a),l=p(jn,e,r,Rr(a)),u=r>=0?fr({cA:l,c3:t,c4:i,c6:c}):fr({cA:l,c3:ur(t),c4:ur(i),c6:ur(c)}),v=_o(n),s=v.a,d=v.b,m=v.c,f=se(o(K,r,s)),g=se(o(K,r,d)),b=se(o(K,r,m));return{er:u,aK:F(f,g,b)}}),Zi=function(e){return so(Xo(e))},ng=function(e){return Du(Xo(e))},ag=y(function(e,r,n){var a=se(o(K,r,Bu(n))),t=se(o(K,r,Au(n))),i=r>=0?Zi(n):ur(Zi(n)),c=p(jn,e,r,ng(n));return{k:o(Bn,c,i),e9:t,fr:a}}),tg=y(function(e,r,n){return o(Sl,o(jn,e,r),n)}),og=y(function(e,r,n){return o(Tl,o(K,Z(r),xo(n)),p(jn,e,r,yo(n)))}),ig=y(function(e,r,n){return o(Cl,o(jn,e,r),n)}),Eu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(go,c,p(rg,tr,e,n));case 1:var c=r.a,a=r.b;return o(xl,c,p(ig,tr,e,a));case 3:var c=r.a,t=r.b;return o(yl,c,p(og,tr,e,t));case 2:var c=r.a,i=r.b;return o(hl,c,p(ag,tr,e,i));case 4:var c=r.a,l=r.b;return o(wl,c,p(tg,tr,e,l));default:var u=r.a;return _l(o(re,Eu(e),u))}}),cg=$(function(e,r){return(r-Bc(r/e)*e)/e}),lg=function(e){return 2*Ke*e},ug=R(function(e,r,n,a){return e+(r-e)*(1+Br(lg(o(cg,n,a))))/2}),ct=function(e){return o(Eu,C(ug,1,1.1,o(Kn,"period",e),e.db),o(Ob,eg(o(Qb,"cube color",e)),F(1,1,1)))},vg=$(function(e,r){return o(Hb,{es:p(ap,46,46,46),ev:Jm(e),ca:e.ca,cS:e.cS,fH:-wi(135),fJ:-wi(45)},_([ct(e),o(yi,-2,ct(e)),o(yi,2,ct(e))]))}),$g=C(pm,vg,Tm,Sm,bm);const fg={Main:{init:$g(o(D,function(e){return ke({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",fa(xn)))},o(M,"left",Y))},o(M,"pressedKeys",fa(xn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},sg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},dg=()=>{lt("pointerdown"),lt("wheel"),lt("keydown")},lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},mg=fg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});dg();sg(mg);
