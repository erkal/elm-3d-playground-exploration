const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function hr(e,r,n){return n.a=e,n.f=r,n}function $(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ge(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ya(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function xa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Iu=[];function Uu(e){return e.length}var Ju=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ou=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Yu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function Kr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function br(e,r){for(var n,a=[],t=ut(e,r,0,a);t&&(n=a.pop());t=ut(n.a,n.b,0,a));return t}function ut(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Kr(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=$i(e),r=$i(r));for(var t in e)if(!ut(e[t],r[t],n+1,a))return!1;return!0}$(br);$(function(e,r){return!br(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Qu=$(function(e,r){var n=J(e,r);return n<0?Mc:n?Ff:kc}),Ln=0;function z(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=er(e.a,r);return n}var L={$:0};function er(e,r){return{$:1,a:e,b:r}}var Ku=$(er);function _(e){for(var r=L,n=e.length;n--;)r=er(e[n],r);return r}function Sa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Ge(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Sa(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return _(Sa(r).sort(function(n,a){var t=o(e,n,a);return t===kc?0:t===Mc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?Kr(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin;$(Math.atan2);function iv(e){return e}function cv(e){return e===1/0||e===-1/0}var lv=Math.ceil,uv=Math.floor,vv=Math.round,$v=Math.sqrt,Zo=Math.log,fv=isNaN;function sv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var dv=$(function(e,r){return e+r});function mv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function pv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function bv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var gv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),hv=$(function(e,r){return r.split(e)}),_v=$(function(e,r){return r.join(e)}),wv=y(function(e,r,n){return n.slice(e,r)});function yv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var xv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Sv=$(function(e,r){return r.indexOf(e)>-1}),Tv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Cv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function tc(e){return e+""}function Lv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function Pv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function zv(e){return Sa(e).join("")}function kv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Mv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Dv(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var Av=Nt(function(e){return typeof e=="boolean"?ue(e):Je("a BOOL",e)}),Bv=Nt(function(e){return typeof e=="number"?ue(e):Je("a FLOAT",e)}),Fv=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Je("a STRING",e)});function Vv(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Ev=$(function(e,r){return{$:10,b:r,h:e}}),jv=$(function(e,r){return _r(e,[r])}),Nv=y(function(e,r,n){return _r(e,[r,n])});E(function(e,r,n,a){return _r(e,[r,n,a])});ge(function(e,r,n,a,t){return _r(e,[r,n,a,t])});Ge(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});ya(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return we(o(Qt,"This is not valid JSON! "+a.message,r))}});var oc=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Je("null",r);case 3:return Gn(r)?Qo(e.b,r,_):Je("a LIST",r);case 4:return Gn(r)?Qo(e.b,r,Gv):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return He(v)?v:we(o(fi,n,v.a));case 7:var a=e.e;if(!Gn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return He(v)?v:we(o(Dc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Je("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!He(v))return we(o(fi,i,v.a));t=er(z(i,v.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!He(v))return v;c=c(v.a)}return ue(c);case 10:var v=Re(e.b,r);return He(v)?Re(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(He(v))return v;s=er(v.a,s)}return we(Vf(Ae(s)));case 1:return we(o(Qt,e.a,r));case 0:return ue(e.a)}}function Qo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!He(c))return we(o(Dc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Gv(e){return o(Kf,e.length,function(r){return e[r]})}function Je(e,r){return we(o(Qt,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&Ko(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return Ko(e.g,r.g)}}function Ko(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var Wv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}y(function(e,r,n){return n[e]=r,n});function Vr(e){return{$:0,a:e}}function Hv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var vt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Xv(e){return{$:5,b:e}}var Iv=0;function Gt(e){var r={$:0,e:Iv++,f:e,g:null,h:[]};return Wt(r),r}function cc(e){return fr(function(r){r(Vr(Gt(e)))})}function lc(e,r){e.h.push(r),Wt(e)}var Uv=$(function(e,r){return fr(function(n){lc(e,r),n(Vr(Ln))})}),Ga=!1,ei=[];function Wt(e){if(ei.push(e),!Ga){for(Ga=!0;e=ei.shift();)Jv(e);Ga=!1}}function Jv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Ht(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Ht(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);He(c)||Kr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Ov(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ni(l,b.b,t(v))}return ni(l,u.b,t(v)),d?{ports:d}:{}}var Ze={};function Ov(e,r){var n;for(var a in Ze){var t=Ze[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Yv(t,r)}return n}function qv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Yv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(vt,l,Xv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o(vt,l,e.b))}var Zv=$(function(e,r){return fr(function(n){e.g(r),n(Vr(Ln))})});$(function(e,r){return o(Uv,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function Qv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ri=[],Wa=!1;function ni(e,r,n){if(ri.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=ri.shift();)Kv(a.p,a.q,a.r);Wa=!1}}function Kv(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=e$(e,t,a,r.l);n[t]=r$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function e$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ze[r].e:Ze[r].f;return o(i,t,a)}function r$(e,r,n){return n=n||{i:L,j:L},e?n.i=er(r,n.i):n.j=er(r,n.j),n}function n$(e){Ze[e]&&Kr(3)}$(function(e,r){return r});function a$(e,r){return n$(e),Ze[e]={f:t$,u:r,a:o$},uc(e)}var t$=$(function(e,r){return function(n){return e(r(n))}});function o$(e,r){var n=L,a=Ze[e].u,t=Vr(null);Ze[e].b=t,Ze[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);He(l)||Kr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,or=typeof document!="undefined"?document:{};function Xt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function $t(e){return{$:0,a:e}}var vc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:It(n),e:t,f:e,b:i}})}),Rr=vc(void 0),i$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:It(n),e:t,f:e,b:i}})}),c$=i$(void 0);function l$(e,r,n,a){return{$:3,d:It(e),g:r,h:n,i:a}}var u$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return wr([e,r],function(){return e(r)})});y(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ge(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ya(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return xa(e,r,n,a,t,i,c,l,u)})});var $c=$(function(e,r){return{$:"a0",n:e,o:r}}),v$=$(function(e,r){return{$:"a1",n:e,o:r}}),fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Pn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function $$(e){return e=="script"?"p":e}function f$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o($c,r.n,s$(e,r.o)):r});function s$(e,r){var n=ao(r);return{$:r.$,a:n?p(es,n<3?d$:m$,ze(e),r.a):o(ua,e,r.a)}}var d$=$(function(e,r){return z(e(r.a),r.b)}),m$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function It(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ai(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ai(c,t,i):c[t]=i}return r}function ai(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return or.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ft(c,r,e.d),c}var c=e.f?or.createElementNS(e.f,e.c):or.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),ft(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Xt(c,pr(n===1?l[u]:l[u].b,r));return c}function ft(e,r,n){for(var a in n){var t=n[a];a==="a1"?p$(e,t):a==="a0"?h$(e,r,t):a==="a3"?b$(e,t):a==="a4"?g$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function p$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function b$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function g$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function h$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=_$(r,i),e.addEventListener(t,c,Ut&&{passive:ao(i)<2}),a[t]=c}}var Ut;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ut=!0}}))}catch{}function _$(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!He(i)){for(var c=ao(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function w$(e,r){return e.$==r.$&&Hr(e.a,r.a)}function sc(e,r){var n=[];return Xe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Xe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=z$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Xe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!y$(d,m):d!==m)&&he(n,2,a,m),Xe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ti(e,r,n,a,x$);return;case 2:ti(e,r,n,a,S$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Jt(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function y$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ti(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Jt(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Jt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Jt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&w$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function x$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Xe(s,i[v],n,++a),a+=s.b||0}}function S$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,h=g.b,T=b.b,k=void 0,G=void 0;if(w===x){f++,Xe(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;G=x===N}if(R){var B=R.a,O=R.b;k=w===B}if(k&&G){f++,Xe(h,O,t,f),cn(i,t,w,T,m,c),f+=h.b||0,f++,ln(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(k){f++,cn(i,t,x,T,m,c),Xe(h,O,t,f),f+=h.b||0,d+=1,m+=2;continue}if(G){f++,ln(i,t,w,h,f),f+=h.b||0,f++,Xe(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,ln(i,t,w,h,f),cn(i,t,x,T,m,c),f+=h.b||0,f++,Xe(W,O,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;ln(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];cn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var dc="_elmW6BL";function cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Xe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}cn(e,r,n+dc,a,t,i)}function ln(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Xe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}ln(e,r,n+dc,a,t)}function mc(e,r,n,a){un(e,r,n,0,0,r.b,a)}function un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&un(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return un(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=un(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function pc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=T$(t,a);t===e&&(e=i)}return e}function T$(e,r){switch(r.$){case 0:return C$(e,r.s,r.u);case 4:return ft(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return L$(e,r);case 5:return r.s(e);default:Kr(10)}}function C$(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function L$(e,r){var n=r.s,a=P$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Xt(e,a),e}function P$(e,r){if(!!e){for(var n=or.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Xt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function Ot(e){if(e.nodeType===3)return $t(e.textContent);if(e.nodeType!==1)return $t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=er(o(Pn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=er(Ot(v[a]),u);return p(Rr,l,r,u)}function z$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var k$=E(function(e,r,n,a){return Ht(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Ot(l);return bc(i,function(v){var s=c(v),d=sc(u,s);l=pc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Ht(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=or.title,v=or.body,s=Ot(v);return bc(i,function(d){oa=c;var m=l(d),f=Rr("body")(L)(m.eu),g=sc(s,f);v=pc(v,s,g,t),s=f,oa=0,u!==m.fK&&(or.title=u=m.fK)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(io,to,fr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(io,to,fr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(io,to,fr(function(){history.replaceState({},"",r),e()}))});var M$={addEventListener:function(){},removeEventListener:function(){}},D$=typeof window!="undefined"?window:M$;y(function(e,r,n){return cc(fr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Ut&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return He(n)?te(n.a):q});function gc(e,r){return fr(function(n){ca(function(){var a=document.getElementById(e);n(a?Vr(r(a)):Hv(ns(e)))})})}function A$(e){return fr(function(r){ca(function(){r(Vr(e()))})})}$(function(e,r){return gc(r,function(n){return n[e](),Ln})});$(function(e,r){return A$(function(){return D$.scroll(e,r),Ln})});y(function(e,r,n){return gc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ln})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var B$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var F$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(C($l,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(C($l,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var oi=0;function _n(e,r){for(;r.b;r=r.b)e(r.a)}function qt(e){for(var r=0;e.b;e=e.b)r++;return r}var V$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},R$=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),E$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),j$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),N$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),G$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),W$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),H$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),X$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),I$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),U$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},J$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},O$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},q$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},hc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},_c=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Y$=function(e){e.gl.disable(e.gl.CULL_FACE)},Z$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Q$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},K$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],ef=[J$,O$,q$,hc,_c,Y$,Z$,Q$,K$];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function rf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function wc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function nf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=wc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(qt(n.b)*s);_n(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function af(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=tf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*qt(r.b),indexBuffer:null,buffers:{}}}function tf(e,r){var n=new Uint32Array(qt(e)*r),a=0,t;return _n(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var yc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),hc(n),_c(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=oi++,v||(v=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=rf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=of(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),cf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=af(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=nf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=wc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,_n(u0(n),i.a),u=0;u<ii.length;u++){var k=n[ii[u]];k.toggle!==n.toggle&&k.enabled&&(ef[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return _n(t,e.g),r});function of(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function cf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var lf=y(function(e,r,n){return l$(r,{g:n,f:{},h:e},mf,pf)}),uf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),vf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),$f=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),ff=$(function(e,r){e.contextAttributes.antialias=!0}),sf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),df=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function mf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};_n(function(t){return o(l0,r,t)},e.h);var n=or.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),V$(function(){return o(yc,e,n)})):(n=or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function pf(e,r){return r.f=e.f,yc(r)}var bf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/gf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function gf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Yt=new Float64Array(3),ui=new Float64Array(3),vi=new Float64Array(3),hf=y(function(e,r,n){return new Float64Array([e,r,n])}),_f=function(e){return e[0]},wf=function(e){return e[1]},yf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var xf=function(e){return new Float64Array([e.fT,e.fX,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(xc);function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(xc(e,r,n),n)}$(Sc);function Tc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Tc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Sf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),vn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(vn);function st(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(st);$(function(e,r){var n,a=Yt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=vn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(vn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(vn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(vn(r,a)+e[14])/n,t});var Tf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Cf=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},Lf=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Pf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Pf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var zf=new Float64Array(16),kf=new Float64Array(16),Mf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Df=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ge(Cc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Cc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ge(Lc);E(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],Pe=r[14],Se=r[15];return n[0]=a*T+l*k+d*G+b*j,n[1]=t*T+u*k+m*G+w*j,n[2]=i*T+v*k+f*G+x*j,n[3]=c*T+s*k+g*G+h*j,n[4]=a*R+l*N+d*W+b*B,n[5]=t*R+u*N+m*W+w*B,n[6]=i*R+v*N+f*W+x*B,n[7]=c*R+s*N+g*W+h*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+h*ve,n[12]=a*oe+l*de+d*Pe+b*Se,n[13]=t*oe+u*de+m*Pe+w*Se,n[14]=i*oe+v*de+f*Pe+x*Se,n[15]=c*oe+s*de+g*Pe+h*Se,n}$(Pc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+d*R,n[11]=0,n[12]=a*N+c*W+v*B+m,n[13]=t*N+l*W+s*B+f,n[14]=i*N+u*W+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,Yt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Tc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,h=g+f,T=b-m,k=g-f,G=c*c*v+u,j=w+d,R=b+m,N=w-d,W=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],Pe=n[7],Se=n[8],dr=n[9],mr=n[10],Na=n[11],ju=n[12],Nu=n[13],Gu=n[14],Wu=n[15];return a[0]=B*x+ve*h+Se*T,a[1]=O*x+oe*h+dr*T,a[2]=Q*x+de*h+mr*T,a[3]=ie*x+Pe*h+Na*T,a[4]=B*k+ve*G+Se*j,a[5]=O*k+oe*G+dr*j,a[6]=Q*k+de*G+mr*j,a[7]=ie*k+Pe*G+Na*j,a[8]=B*R+ve*N+Se*W,a[9]=O*R+oe*N+dr*W,a[10]=Q*R+de*N+mr*W,a[11]=ie*R+Pe*N+Na*W,a[12]=ju,a[13]=Nu,a[14]=Gu,a[15]=Wu,a});function Af(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Af);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Bf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Bf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Sc(e,r,Yt),t=la(st(n,a,ui),ui),i=la(st(a,t,vi),vi),c=zf,l=kf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=Ku,Wn=Yu,zc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Zt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Zt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),$i=function(e){return p(Zt,y(function(r,n,a){return o(A,z(r,n),a)}),L,e)},kc=1,Ff=2,Mc=0,we=function(e){return{$:1,a:e}},Qt=$(function(e,r){return{$:3,a:e,b:r}}),fi=$(function(e,r){return{$:0,a:e,b:r}}),Dc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Vf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Rf=xv,Ef=Wv,Me=tc,Cr=$(function(e,r){return o(_v,e,Sa(r))}),Kt=$(function(e,r){return _(o(hv,e,r))}),Ac=function(e){return o(Cr,`
    `,o(Kt,`
`,e))},zn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Dr=function(e){return p(zn,$(function(r,n){return n+1}),0,e)},jf=ev,Nf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),qr=$(function(e,r){return p(Nf,e,r,L)}),Bc=$(function(e,r){return p(jf,e,o(qr,0,Dr(r)-1),r)}),Qe=kv,Fc=function(e){var r=Qe(e);return 97<=r&&r<=122},Vc=function(e){var r=Qe(e);return r<=90&&65<=r},Gf=function(e){return Fc(e)||Vc(e)},Wf=function(e){var r=Qe(e);return r<=57&&48<=r},Hf=function(e){return Fc(e)||Vc(e)||Wf(e)},Ae=function(e){return p(zn,A,L,e)},en=mv,Xf=$(function(e,r){return`

(`+(Me(e+1)+(") "+Ac(If(r))))}),If=function(e){return o(Uf,e,L)},Uf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=en(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Gf(x)&&o(Rf,Hf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Me(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Cr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Me(Dr(s))+" ways:"));return o(Cr,`

`,o(A,g,o(Bc,Xf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Cr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Cr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Ac(o(Ef,4,f))+(`

`+m))}}),Be=32,dt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mt=Iu,eo=lv,ro=$(function(e,r){return Zo(r)/Zo(e)}),Jf=iv,wn=eo(o(ro,2,Be)),Rc=C(dt,0,wn,mt,mt),Ec=Ju,jc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Nc=uv,pt=Uu,Ke=$(function(e,r){return J(e,r)>0?e:r}),Of=function(e){return{$:0,a:e}},no=Ou,qf=$(function(e,r){e:for(;;){var n=o(no,Be,e),a=n.a,t=n.b,i=o(A,Of(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),Yf=function(e){var r=e.a;return r},Zf=$(function(e,r){e:for(;;){var n=eo(r/Be);if(n===1)return o(no,Be,e).a;var a=o(qf,e,L),t=n;e=a,r=t;continue e}}),Gc=$(function(e,r){if(r.l){var n=r.l*Be,a=Nc(o(ro,Be,n-1)),t=e?Ae(r.z):r.z,i=o(Zf,t,r.l);return C(dt,pt(r.p)+n,o(Ke,5,a*wn),i,r.p)}else return C(dt,pt(r.p),wn,mt,r.p)}),Qf=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Gc,!1,{z:a,l:n/Be|0,p:t});var i=jc(p(Ec,Be,r,e)),c=e,l=r-Be,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Kf=$(function(e,r){if(e<=0)return Rc;var n=e%Be,a=p(Ec,n,e-n,r),t=e-n-Be;return S(Qf,r,t,e,L,a)}),He=function(e){return!e.$},D=Ev,Y=Av,M=Rv,$e=Bv,ua=jv,es=Nv,ze=Dv,ao=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Rr("div"),rs=function(e){return{$:2,a:e}},Wc=$(function(e,r){return e}),Hc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),Pr=function(e){return e},ns=Pr,si=Ge(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),as=Sv,Lr=pv,Xr=wv,kn=$(function(e,r){return e<1?r:p(Xr,e,Lr(r),r)}),Ta=Cv,Ca=function(e){return e===""},La=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),Xc=Lv,di=ge(function(e,r,n,a,t){if(Ca(t)||o(as,"@",t))return q;var i=o(Ta,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Xc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return te(_e(si,e,o(La,c,t),u,r,n,a))}else return te(_e(si,e,t,q,r,n,a))}),mi=E(function(e,r,n,a){if(Ca(a))return q;var t=o(Ta,"/",a);if(t.b){var i=t.a;return S(di,e,o(kn,i,a),r,n,o(La,i,a))}else return S(di,e,"/",r,n,a)}),pi=y(function(e,r,n){if(Ca(n))return q;var a=o(Ta,"?",n);if(a.b){var t=a.a;return C(mi,e,te(o(kn,t+1,n)),r,o(La,t,n))}else return C(mi,e,q,r,n)});$(function(e,r){if(Ca(r))return q;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(pi,e,te(o(kn,a+1,r)),o(La,a,r))}else return p(pi,e,q,r)});var ts=Tv,to=function(e){},Mn=Vr,os=Mn(0),Ic=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(zn,e,r,Ae(d)):C(Ic,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=y(function(e,r,n){return C(Ic,e,r,0,n)}),re=$(function(e,r){return p(sr,$(function(n,a){return o(A,e(n),a)}),L,r)}),va=vt,oo=$(function(e,r){return o(va,function(n){return Mn(e(n))},r)}),is=y(function(e,r,n){return o(va,function(a){return o(va,function(t){return Mn(o(e,a,t))},n)},r)}),cs=function(e){return p(sr,is(A),Mn(L),e)},ls=Zv,us=$(function(e,r){var n=r;return cc(o(va,ls(e),n))}),vs=y(function(e,r,n){return o(oo,function(a){return 0},cs(o(re,us(e),r)))}),$s=y(function(e,r,n){return Mn(0)}),fs=$(function(e,r){var n=r;return o(oo,e,n)});Ze.Task=qv(os,vs,$s,fs);var ss=uc("Task"),io=$(function(e,r){return ss(o(oo,e,r))}),ds=k$,ms=sv,$a={$:1},Uc=function(e){return{$:2,a:e}},Pa={$:0},Ee=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},ps=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(Ee,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Jc=function(e){var r=e.b;return o(Ee,Pa,r)},gr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),bs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Jc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,rn(n).db)>0?o(ae,ps,gr(o(Ee,$a,t))):Pr)(o(Ee,Uc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Hc,l.eA,Oe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ee,Pa,{B:z(v,s),ab:L,T:o(A,t.B,t.T)})}}),Oc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),gs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),hs=$(function(e,r){return Ae(p(gs,e,r,L))}),qc=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(hs,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),_s=$(function(e,r){return p(qc,0,e,r)}),ws=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(_([a]),t)),c=o(_s,e,i),l=o(Oc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ee,$a,{B:u,ab:v,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(Ee,$a,{B:d,ab:L,T:m})}else return r}}),ys=function(e){var r=e.b;return o(Ee,$a,r)},xs=function(e){var r=e.b;return o(Ee,Uc({cX:rn(e).db}),r)},Ss=$(function(e,r){switch(e.$){case 1:return ys(r);case 2:return Jc(r);case 3:return xs(r);default:var n=e.a;return o(ws,n,r)}}),Yc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ts=$(function(e,r){return Oe(r,{av:e(r.av)})}),Cs=function(e){return{$:3,a:e}},Ls=function(e){return{$:2,a:e}},Zc=$(function(e,r){return{$:0,a:e,b:r}}),Ps=$(function(e,r){return{$:1,a:e,b:r}}),De=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Z=function(e){return e<0?-e:e},co=Pv,zs=y(function(e,r,n){return o(gr,0/0,co(o(e,r,n)))}),Qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ks=gv,Kc=function(e){return p(ks,A,L,e)},Ms=$(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},Kc(r));return le(e&&n?"-":"",r)}),ye=tc,bt=dv,el=Mv,rl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(bt,"0",rl(t))}else{var i=Qe(r);return i>=48&&i<57?o(bt,el(i+1),n):"0"}},gt=cv,Ds=fv,za=function(e){return o(bt,e,"")},nl=y(function(e,r,n){return e<=0?n:p(nl,e>>1,le(r,r),e&1?le(n,r):n)}),yn=$(function(e,r){return p(nl,e,r,"")}),ht=y(function(e,r,n){return le(n,o(yn,e-Lr(n),za(r)))}),_t=bv,al=function(e){var r=o(Kt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},As=function(e){var r=o(Kt,"e",ye(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(gr,0,Xc(o(ts,"+",t)?o(kn,1,t):t)),c=al(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(gr,"0",o(De,function(d){var m=d.a,f=d.b;return m+("."+f)},o(De,Yc(za),en(le(o(yn,Z(i),"0"),v))))):p(ht,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Bs=y(function(e,r,n){if(gt(n)||Ds(n))return ye(n);var a=n<0,t=al(As(Z(n))),i=t.a,c=t.b,l=Lr(i)+r,u=le(o(yn,-l+1,"0"),p(ht,l,"0",le(i,c))),v=Lr(u),s=o(Ke,1,l),d=o(e,a,p(Xr,s,v,u)),m=p(Xr,0,s,u),f=d?_t(o(gr,"1",o(De,rl,en(_t(m))))):m,g=Lr(f),b=f==="0"?f:r<=0?le(f,o(yn,Z(r),"0")):J(r,Lr(c))<0?p(Xr,0,g-r,f)+("."+p(Xr,g-r,g,f)):le(i+".",p(ht,r,"0",c));return o(Ms,a,b)}),tl=Bs($(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Qe(t))})),Fs=zs(tl),Vs=y(function(e,r,n){var a=o(ro,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Fs,t,n)}),ol=Qu,lo=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ol,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),rr={$:-2},Yr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),wt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,rr,rr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ol,e,t);switch(u){case 0:return S(Yr,a,t,i,p(wt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Yr,a,t,i,c,p(wt,e,r,l))}}),dn=y(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Rs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},bi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},Es=ya(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,bi(r)}else break e;else return c.a,c.d,bi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Kn(t),l);var u=il(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Yr,v,s,d,Kn(m),f)}else return rr}else return S(X,r,n,a,Kn(t),l)}else return rr},mn=$(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(mn,e,i),c);var u=il(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Yr,v,s,d,o(mn,e,m),f)}else return rr}else return S(X,n,a,t,o(mn,e,i),c);else return o(js,e,jt(Es,e,r,n,a,t,i,c))}),js=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(br(e,a)){var l=Rs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Yr,n,u,v,i,Kn(c))}else return rr}else return S(Yr,n,a,t,i,o(mn,e,c))}else return rr}),Ns=$(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(lo,e,n));if(a.$)return o(Ns,e,n);var t=a.a;return p(dn,e,t,n)}),Gs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,De(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ps,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,De(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Zc,z(i,c),p(Vs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,De(function(a){return a.$===3?Cs(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,De(function(a){return a.$===2?Ls(n):a}))}},Ws=function(e){return Ts(Gs(e))},Hs=$(function(e,r){return o(re,Ws(e),r)}),Xs=$(function(e,r){return Oe(r,{eA:o(Hs,e,r.eA)})}),Is=$(function(e,r){var n=r.a,a=r.b;return o(Ee,n,Oe(a,{B:o(Yc,Xs(e),a.B)}))}),Us=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Js=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ee,a,Oe(t,{B:o(Us,o(e,i.a,r),i)}))}),Os=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Oe(a,{aL:!a.aL});case 2:var t=n.a;return Oe(a,{G:p(bs,e,t,a.G)});case 3:var i=n.a;return Oe(a,{G:o(Is,i,a.G)});case 4:var c=n.a;return Oe(a,{G:p(Js,r,c,a.G)});default:var l=n.a;return Oe(a,{G:o(Ss,l,a.G)})}}),qs=$(function(e,r){return o(Ee,Pa,{B:z(e,r(e)),ab:L,T:L})}),Ys=Qv,gi=Ys(L),fa=Vv,xn=Fv,Zs=a$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ze({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ze({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",fa(xn)))},o(M,"left",Y))},o(M,"pressedKeys",fa(xn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ze({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ze({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ze({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Qs=function(e){return{$:4,a:e}},Ks={$:0},ed=ic,We=$(function(e,r){return o(fc,e,ed(r))}),U=We("className"),rd=function(e){var r=e.b.B;return r.b},sa=We("id"),nd=u$,da=nd,ad=v$,be=ad,td={$:1},od=function(e){return{$:3,a:e}},id=function(e){return{$:5,a:e}},hi=Rr("a"),uo=Rr("button"),cd=Pn("d"),cl=vc("http://www.w3.org/2000/svg"),ld=cl("path"),ud=cl("svg"),vd=Pn("viewBox"),pn=function(e){return o(ud,_([vd("0 0 100 100"),o(be,"width","100%"),o(be,"height","100%")]),_([o(ld,_([cd(e)]),L)]))},_i=function(e){return o(We,"href",f$(e))},Ur={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},$d=function(e){return{$:0,a:e}},ll=$c,ul=$(function(e,r){return o(ll,e,$d(r))}),vo=function(e){return o(ul,"click",ze(e))},wi=We("target"),fd=We("title"),yt=$(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(yt,e,i),o(yt,e,c))}),sd=$t,vr=sd,dd=function(e){return p(Zt,y(function(r,n,a){return o(A,n,a)}),L,e)},md=$(function(e,r){return{$:3,a:e,b:r}}),pd=$(function(e,r){return{$:2,a:e,b:r}}),bd=$(function(e,r){return{$:0,a:e,b:r}}),gd=$(function(e,r){return{$:1,a:e,b:r}}),Dn=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hd=C(Dn,0/255,0/255,0/255,1),_d=ic,wd=$(function(e,r){return o(fc,e,_d(r))}),yd=wd("checked"),Ie=vv,xd=y(function(e,r,n){return le(o(yn,e-Lr(n),za(r)),n)}),Sn=nv,vl=function(e){var r=function(n){return n<10?Me(n):za(el(87+n))};return e<16?r(e):le(vl(e/16|0),r(o(Sn,16,e)))},Sd=o(ae,vl,o(xd,2,"0")),$o=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Td=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return o(Cr,"",o(A,"#",o(re,o(ae,Ie,Sd),_([n*255,a*255,t*255]))))},xt=We("htmlFor"),Cd=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ma=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Ld=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),fo=$(function(e,r){return p(sr,Ld(e),L,r)}),$l=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Pd=F$,zd=zv,kd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Md=B$,Dd=function(e){return o(Md,{ew:!1,fe:!1},e)},so=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Ad=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Bd=function(e){return{$:2,a:e}},Fd=function(e){return{$:0,a:e}},Vd=function(e){return{$:1,a:e}},Ha=$(function(e,r){return Qe(r)-Qe(e)}),Xa=y(function(e,r,n){var a=Qe(n);return J(Qe(e),a)<1&&J(a,Qe(r))<1}),Rd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):we(Vd(r))},a=p(Xa,"0","9",r)?ue(o(Ha,"0",r)):p(Xa,"a","z",r)?ue(10+o(Ha,"a",r)):p(Xa,"A","Z",r)?ue(10+o(Ha,"A",r)):we(Fd(r));return o(ma,n,a)}),fl=$(function(e,r){var n=en(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ma,function(c){return o(ma,function(l){return ue(c+l*e)},o(fl,e,i))},o(Rd,e,t))}),Ed=$(function(e,r){return 2<=e&&e<=36?o(fl,e,_t(r)):we(Bd(e))}),jd=Ed(16),Nd=y(function(e,r,n){return C(Dn,e,r,n,1)}),sl=E(function(e,r,n,a){return C(Dn,e,r,n,a)}),An=rv,Gd=$(function(e,r){var n=o(An,10,e);return Ie(r*n)/n}),Wd=yv,Hd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Kc(n);if(a.b&&!a.b.b){var t=a.a;return zd(_([t,t]))}else return n};return o(ae,Wd,o(ae,function(n){return o(De,function(a){return p(Pd,1,a,n)},Dd(e))},o(ae,Cd(so),o(ae,De(function(n){return n.fF}),o(ae,De(fo(Pr)),o(ae,kd("Parsing hex regex failed"),ma(function(n){var a=o(re,o(ae,r,o(ae,jd,Ad(Jf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(sl,t/255,c/255,u/255,o(Gd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Nd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),pa=Rr("input"),St=Rr("label"),Tt=We("name"),dl=$(function(e,r){return p(sr,M,r,e)}),Xd=o(dl,_(["target","checked"]),Y),Id=function(e){return o(ul,"change",o(ua,e,Xd))},Ud=function(e){return z(e,!0)},Jd=function(e){return{$:1,a:e}},Od=$(function(e,r){return o(ll,e,Jd(r))}),qd=o(dl,_(["target","value"]),xn),mo=function(e){return o(Od,"input",o(ua,Ud,o(ua,e,qd)))},ml=We("max"),pl=We("min"),bl=function(e){return o(We,"step",e)},ba=We("type"),po=We("value"),yi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,_([o(St,_([xt(r)]),_([o(I,_([U("relative w-full")]),_([o(I,_([U("inline-block")]),_([vr(r)])),o(I,_([U("inline-block float-right")]),_([vr(ye(n))]))]))])),o(pa,_([ba("range"),o(be,"width","100%"),sa(r),Tt(r),pl(ye(a)),ml(ye(t)),po(ye(n)),bl(ye(i)),mo(o(ae,co,o(ae,gr(42),c)))]),L)]))},Yd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Zd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,_([o(I,_([U("mb-2")]),_([o(St,_([xt(e)]),_([vr(e)]))])),o(pa,_([ba("checkbox"),sa(e),Tt(e),Id(md(e)),yd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return yi({cf:e,cr:i,cv:t,cz:bd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return yi({cf:e,cr:i,cv:t,cz:o(ae,Ie,gd(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,_([o(I,_([o(be,"margin-bottom","6px")]),_([o(St,_([xt(e)]),_([vr(e)]))])),o(pa,_([ba("color"),o(be,"width","100%"),o(be,"height","26px"),o(be,"padding","0px"),sa(e),Tt(e),mo(function(l){return o(pd,e,o(Yd,hd,Hd(l)))}),po(Td(c))]),L)]))}}),Qd=function(e){return o(I,_([U("p-4 border-y-[0.5px] border-white20")]),_([o(I,_([U("text-lg pb-2")]),_([vr(e.ff)])),o(I,_([U("pl-2 pr-2")]),dd(o(yt,Zd,e.av)))]))},Kd=function(e){return o(I,_([U("text-xs text-white60")]),o(re,Qd,e))},em=function(e){return o(I,_([U("absolute left-[104px] bottom-2 text-sm text-white40")]),_([vr("clock: "+o(tl,3,rn(e).db))]))},rm=function(e){e.a;var r=e.b.T;return o(De,function(n){return Ie(60/(rn(e).db-n))},o(De,o(ae,Yf,function(n){return n.db}),so(o(Oc,59,r))))},nm=function(e){return o(I,_([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rm(e);if(r.$===1)return _([vr("... Fps")]);var n=r.a;return _([vr(Me(n)+" Fps")])}())},am=function(e){return{$:0,a:e}},tm=function(e){var r=e.b.T;return Dr(r)},om=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Dr(r)+1+Dr(n)},im=function(e){return o(pa,_([U("absolute left-[100px] w-[490px]"),ba("range"),pl(Me(0)),ml(Me(om(e)-1)),po(Me(tm(e))),bl(Me(1)),mo(o(ae,co,o(ae,gr(42),o(ae,Ie,am))))]),L)},xi={$:1},cm={$:3},lm={$:2},gl=function(e){return!e.b},Si=$(function(e,r){return o(uo,_([U("px-2 bg-black40"),U(r),vo(e)]),_([vr("REC")]))}),Ti=$(function(e,r){return o(uo,_([U("absolute left-[60px] mx-1 px-1 bg-black40"),vo(r)]),_([o(I,_([U("w-4 h-6 fill-white80")]),_([pn(e)]))]))}),um=function(e){var r=e.a,n=e.b.ab;return o(I,_([U("py-1")]),_([function(){switch(r.$){case 0:return o(Si,xi,"text-red-500 font-bold");case 1:return o(Si,lm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return gl(n)?o(I,L,L):o(Ti,Ur.fo,cm);default:return o(Ti,Ur.fn,xi)}}()]))},vm=function(e){return o(I,_([U("pl-4 py-4 border-[0.5px] border-white20 bg-black20")]),_([im(e),um(e),nm(e),em(e)]))},$m=function(e){var r=e.a;return br(r,Pa)},fm=$(function(e,r){var n=$m(r.G)?o(I,L,L):o(I,_([U("absolute pointer-events-none w-8 h-8"),o(be,"left",ye(e.fp.fT+.5*e.cS.fR)+"px"),o(be,"top",ye(-e.fp.fX+.5*e.cS.eW)+"px")]),_([o(I,_([U(e.fp.e4?"fill-black80":"fill-white40")]),_([pn(Ur.fp)]))]));return o(I,L,_([n]))}),sm=$(function(e,r){var n=o(uo,_([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),vo(td),fd("Distraction Free Mode")]),_([pn(Ur.f$)])),a=o(I,_([U("absolute w-8 bottom-12")]),_([o(hi,_([U("fill-twitterBlue40 hover:fill-twitterBlue"),_i("https://twitter.com/AzizErkalSelman"),wi("_blank")]),_([pn(Ur.fL)]))])),t=o(I,_([U("absolute w-8 bottom-2")]),_([o(hi,_([U("fill-githubCat40 hover:fill-githubCat"),_i("https://github.com/erkal/elm-3d-playground-exploration"),wi("_blank")]),_([pn(Ur.eQ)]))]));return r.aL?o(I,_([U("fixed w-10 h-10 p-1")]),_([n])):o(I,L,_([o(I,_([U("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(I,_([U("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),_([o(da,od,Kd(rn(r.G).eA))])),o(I,_([U("absolute bottom-0 left-[300px] w-[600px] h-16")]),_([o(da,id,vm(r.G))])),o(fm,e,r)]))}),dm=y(function(e,r,n){var a=rd(n.G),t=rn(n.G);return o(I,_([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(be,"width",ye(t.cS.fR)+"px"),o(be,"height",ye(t.cS.eW)+"px")]),_([o(I,_([U("fixed")]),_([o(da,Wc(Ks),o(e,t,a))])),o(I,_([sa("gui")]),_([o(sm,t,n),o(da,Qs,o(r,t,a))]))]))}),mm=Ge(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(Os,r,i,u,v),gi)}),l=function(u){var v=o(Hc,n,u.e1);return z({aL:u.e1.cS.fR<500,G:o(qs,v,a)},gi)};return ds({e0:l,fG:Wc(Zs(rs)),fM:c,fP:o(dm,e,t)})}),pm=E(function(e,r,n,a){return _e(mm,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),bm=function(e){return{}},gm=y(function(e,r,n){return{av:n,e5:r,ff:e}}),hl=rr,hm=function(e){return p(zn,$(function(r,n){var a=r.a,t=r.b;return p(dn,a,t,n)}),hl,e)},_m=y(function(e,r,n){return p(gm,e,r,hm(n))}),wm=_m,ym=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Zc,z(a,t),n))}),xm=_([p(wm,"Camera",!0,_([p(ym,"camera height",z(1.4,1.57),1.57)]))]),Sm=$(function(e,r){return r}),Tm=$(function(e,r){return o(De,function(n){if(n.$)return 0;var a=n.b;return a},o(lo,e,r.av))}),Cm=$(function(e,r){return o(gr,0,so(o(fo,Tm(e),r)))}),Lm=$(function(e,r){return o(Cm,e,r.eA)}),Ci=Lm,Pm=function(e){return e},ir=function(e){return e},Ct=function(e){var r=e;return-r},zm=$(function(e,r){var n=e,a=r;return{fT:n.fX*a.c5-n.c5*a.fX,fX:n.c5*a.fT-n.fT*a.c5,c5:n.fT*a.fX-n.fX*a.fT}}),_l=function(e){var r=e;return r.c3},wl=function(e){var r=e;return r.c4},km=function(e){return o(zm,_l(e),wl(e))},Er=function(e){var r=e;return r.cA},Ar=tv,Zr=ov,ea=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=Zr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,h=1-2*(f+x),T=s.c5*u,k=l*T,G=2*(w-k),j=2*(w+k),R=d*T,N=2*(R+b),W=2*(R-b),B=g*T,O=2*(B-m),Q=2*(B+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+N*i.c5,fX:j*i.fT+oe*i.fX+O*i.c5,c5:W*i.fT+Q*i.fX+h*i.c5}}),Bn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=Zr(c),v=a.cA,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,k=l*T,G=w*T,j=T*T,R=1-2*(h+j),N=b.c5*u,W=l*N,B=2*(G-W),O=2*(G+W),Q=w*N,ie=2*(Q+k),ve=2*(Q-k),oe=T*N,de=2*(oe-x),Pe=2*(oe+x),Se=N*N,dr=1-2*(j+Se),mr=1-2*(h+Se);return{fT:s.fT+dr*d+B*m+ie*f,fX:s.fX+O*d+mr*m+de*f,c5:s.c5+ve*d+Pe*m+R*f}}),$r=function(e){return e},yr=function(e){var r=e;return r.c3},xr=function(e){var r=e;return r.c4},Sr=function(e){var r=e;return r.c6},yl=y(function(e,r,n){return $r({cA:p(Bn,e,r,Er(n)),c3:p(ea,e,r,yr(n)),c4:p(ea,e,r,xr(n)),c6:p(ea,e,r,Sr(n))})}),Li=y(function(e,r,n){return p(yl,e(n),r,n)}),bo=function(e){var r=e;return r.eG},Fn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),xl=$(function(e,r){return $r({cA:o(Fn,e,Er(r)),c3:yr(r),c4:xr(r),c6:Sr(r)})}),Mm=$(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c5:n*a.c5}}),Dm=y(function(e,r,n){return o(xl,o(Mm,r,e),n)}),Am=y(function(e,r,n){return p(Dm,bo(e(n)),r,n)}),jr=$(function(e,r){return{eG:r,cA:e}}),Bm=function(e){var r=e;return o(jr,r.cA,r.c3)},Fm=function(e){var r=e;return o(jr,r.cA,r.c4)},Vm=function(e){var r=e;return o(jr,r.cA,r.c6)},Rm=function(e){var r=$r({cA:e.aR,c3:wl(e.dl),c4:km(e.dl),c6:_l(e.dl)}),n=p(Am,Vm,e.cb,p(Li,Bm,Ct(e.bC),p(Li,Fm,e.bx,r)));return n},Em=function(e){return{$:1,a:e}},se=function(e){var r=e;return Z(r)},jm=function(e){return{cL:Em(se(e.el)),c1:e.c1}},Br=function(e){return e},qe={fT:0,fX:0,c5:0},Sl=Pr,cr=function(e){return e},Tl=cr({fT:1,fX:0,c5:0}),go=Tl,ho=cr({fT:0,fX:0,c5:1}),_o=ho,Nm=Sl({cA:qe,c3:_o,c4:go}),Gm=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.el;return jm({c1:Rm({bx:Br(n),cb:ir(1e3),bC:Br(a),aR:Pm(r),dl:Nm}),el:ir(t)})},Wm=function(e){return Gm({bx:o(Ci,"camera height",e),bC:o(Ci,"camera height",e),aR:{fT:0,fX:2,c5:0},el:2})},Fr=av,Lt=function(e){return e*Fr/180},Hm=function(e){return e},Xm=function(e){return ir(.01*e)},Pi=function(e){return e},Im=function(e){return e},Um=function(e){return{$:0,a:e}},Jm=Um,Om={$:3},qm=Om,Ym=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Zm=Ym,Qm=$(function(e,r){return r.b?p(sr,A,r,e):e}),je=function(e){return p(sr,Qm,L,e)},wo=$(function(e,r){return je(o(re,e,r))}),Km=function(e){return{$:1,a:e}},e0=Km,r0=function(e){return o(Pn,"height",Me(e))},n0=function(e){return c$($$(e))},a0=n0,t0=function(e){return{$:2,a:e}},o0=t0,i0=function(e){return o(Cr,"",e)},c0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ie(l*1e3)/1e3},c=function(l){return Ie(l*1e4)/100};return i0(_(["rgba(",ye(c(r)),"%,",ye(c(n)),"%,",ye(c(a)),"%,",ye(i(t)),")"]))},l0=$(function(e,r){switch(r.$){case 0:return o(uf,e,r);case 1:return o(vf,e,r);case 2:return o($f,e,r);case 3:return o(ff,e,r);case 4:return o(sf,e,r);default:return o(df,e,r)}}),u0=$(function(e,r){switch(r.$){case 0:return o(E$,e,r);case 1:return o(j$,e,r);case 2:return o(N$,e,r);case 3:return o(G$,e,r);case 4:return o(W$,e,r);case 5:return o(H$,e,r);case 6:return o(X$,e,r);case 7:return o(I$,e,r);default:return U$(e)}}),v0=y(function(e,r,n){return p(lf,e,r,n)}),zi=function(e){var r=e;return r},nn=Tf,Ia=C(nn,1,1,1,1),Ue=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),$0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),f0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p($0,n*a/t,n,n*(1-a-t)/t)}),Vn=hf,s0=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},yo=$(function(e,r){return s0(o(f0,e,r))}),Cl=$(function(e,r){return{dp:br(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ye=Mf,d0=function(e){return Ye({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ua=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(nn,a.bX,a.bX,a.bX,i);return _e(t,e,c,d0(a),a.dp,r,n)}),Ll=Ge(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Cl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Ua,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(A,S(Ua,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(A,S(Ua,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(zn,C(Ll,e,r,n,a),i,k)}}),m0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Pl=m0,xo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),p0=function(e){var r=e.Z,n=e.W,a=e.V;return C(xo,518,r,n,a)},b0=$(function(e,r){return{$:6,a:e,b:r}}),g0=b0,zl=_([p0({V:1,W:0,Z:!1}),C(Pl,!1,!1,!1,!1),o(g0,0,1)]),Qr=519,So=8,kl=15,Jr=7681,h0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=R$,_0=$(function(e,r){return{$:0,a:e,b:r}}),w0=_0({df:1,$7:0,dV:5}),ke=bf,y0=w0(_([{bT:o(ke,-1,-1)},{bT:o(ke,1,-1)},{bT:o(ke,-1,1)},{bT:o(ke,1,1)}])),x0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},S0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},To=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(S0,a,t,i)))}),Co=function(e){return p(To,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Lo=function(e){return S(ne,_([Co(e),C(Pl,!1,!1,!1,!1)]),x0,h0,y0,{})},T0=Lo({a8:Jr,co:0,cN:So,bl:Qr,c2:kl,bt:Jr,bu:Jr}),C0=516,ki=5386,xe=7680,L0=function(e){return o(An,2,e+4)},Ml=function(e){return Lo({a8:xe,co:kl,cN:So,bl:C0,c2:L0(e),bt:ki,bu:ki})},P0=y(function(e,r,n){return je(_([p(Ue,e,n,zl),_([Ml(r),T0])]))}),z0=$(function(e,r){return je(o(Bc,P0(e),r))}),k0=function(e){var r=e.Z,n=e.W,a=e.V;return C(xo,513,r,n,a)},M0=k0({V:1,W:0,Z:!0}),D0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},A0=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return D0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},B0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Mi=$(function(e,r){var n=e,a=r;return p(B0,32774,n,a)}),F0=1,Di=771,V0=770,Po=A0({bv:0,aH:o(Mi,F0,Di),by:0,bA:o(Mi,V0,Di),bF:0,bV:0}),Nr=_([M0,Po]),R0=function(e){var r=e;return r.dO},E0=function(e){var r=e;return r.dP},Dl=function(e){var r=e;return r.dQ},j0=function(e){var r=e;return r.dR},N0=function(e){var r=e;return r.dS},Al=function(e){var r=e;return r.dT},lr=$(function(e,r){var n=e,a=r;return a-n}),Bl=function(e){return V(o(lr,j0(e),R0(e)),o(lr,N0(e),E0(e)),o(lr,Al(e),Dl(e)))},Ai=function(e){var r=e;return Er(r)},G0=function(e){return e},W0=function(e){return $r({cA:G0({fT:e.H,fX:e.I,c5:e.J}),c3:cr({fT:e.q,fX:e.r,c5:e.s}),c4:cr({fT:e.t,fX:e.u,c5:e.v}),c6:cr({fT:e.w,fX:e.x,c5:e.y})})},Ja=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c5*v.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),Fl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),Vl=$(function(e,r){return{cA:o(Fl,e,Er(r)),c3:o(Ja,e,yr(r)),c4:o(Ja,e,xr(r)),c6:o(Ja,e,Sr(r))}}),Pt=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),ga=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Ke,n,a)}),ra=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),H0=$(function(e,r){var n=ga(r),a=ga(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ne=function(e){var r=e;return r},X0=function(e){var r=e;return V(r.fT,r.fX,r.c5)},Oa=function(e){var r=e;return .5*r},bn=$(function(e,r){var n=e,a=r;return a+n}),I0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Oa(se(a)),c=Oa(se(n)),l=Oa(se(t)),u=X0(r),v=u.a,s=u.b,d=u.c;return{dO:o(bn,c,v),dP:o(bn,i,s),dQ:o(bn,l,d),dR:o(lr,c,v),dS:o(lr,i,s),dT:o(lr,l,d)}}),Bi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fX*r,s=t.fT*r,d=Ne(Sr(e)),m=Z(l*d.fT)+Z(c*d.fX)+Z(i*d.c5),f=Ne(xr(e)),g=Z(l*f.fT)+Z(c*f.fX)+Z(i*f.c5),b=Ne(yr(e)),w=Z(l*b.fT)+Z(c*b.fX)+Z(i*b.c5),x=o(I0,V(w,g,m),o(Fl,e,p(Pt,s,v,u)));if(a.$)return te(x);var h=a.a;return te(o(H0,h,x))}),zt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Bi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Bi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(zt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Vl,W0(v),e),m=r*v.bX,f=e,g=r,b=C(zt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),an=_f,tn=wf,on=yf,Rl=function(e){return{$:4,a:e}},U0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Rn=function(e){return Rl(o(U0,e,L))},J0={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},O0=function(e){var r=e;return r},Fi=Lo({a8:Jr,co:0,cN:So,bl:Qr,c2:255,bt:Jr,bu:Jr}),Ir=$v,tr=0,q0=function(e){var r=e,n=o(Ke,Z(r.fT),o(Ke,Z(r.fX),Z(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=Ir(i*i+t*t+a*a);return c*n}else return tr},Te={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Ve=$(function(e,r){var n=e,a=r;return Ye({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),$n=z({bd:o(Ve,Te,Te),bK:o(Ve,Te,Te),bL:o(Ve,Te,Te),bM:o(Ve,Te,Te)},C(nn,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),El=514,jl=function(e){var r=e.Z,n=e.W,a=e.V;return C(xo,515,r,n,a)},Nl=240,Y0=_([jl({V:1,W:0,Z:!0}),Co({a8:xe,co:Nl,cN:0,bl:El,c2:0,bt:xe,bu:xe}),Po]),Z0=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=se(a),l=c,u=se(t),v=u,s=n.cL;if(s.$){var m=s.a;return gt(v)?Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return gt(v)?Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Xn=$(function(e,r){return(1&e>>r)===1?0:1}),Q0=function(e){return _([jl({V:1,W:0,Z:!0}),Co({a8:xe,co:Nl,cN:e,bl:El,c2:0,bt:xe,bu:xe}),Po])},K0=y(function(e,r,n){return je(o(re,function(a){var t=a<<4,i=C(nn,o(Xn,a,0),o(Xn,a,1),o(Xn,a,2),o(Xn,a,3));return p(Ue,e,z(r,i),Q0(t))},o(qr,1,o(An,2,n)-1)))}),ur=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Or=function(e){var r=e;return r},ep=Df,Vi=function(e){var r=e;return ur(Sr(r))},Gl=cr({fT:0,fX:1,c5:0}),zo=Gl,rp={cA:qe,c3:go,c4:zo,c6:_o},ka=function(e){var r=e;return r},np=function(e){var r=ka(Er(e)),n=Ne(Sr(e)),a=Ne(xr(e)),t=Ne(yr(e));return Ye({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},ap=$(function(e,r){var n=r;return np(o(Vl,n,e))}),tp=function(e){return o(ap,rp,e)},op=function(e){var r=e;return r.c1},ip=function(e){var r=e;return yr(r)},cp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),lp=function(e){var r=e;return xr(r)},up=function(e){var r=op(e.ev),n=$r({cA:Ai(r),c3:ip(r),c4:lp(r),c6:ur(Vi(r))}),a=Rn(e.aP),t=a,i=C(zt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=tp(r),u=o(K,.99,o(ce,se(e.aJ),Ct(Dl(c)))),v=Bl(c),s=v.a,d=v.b,m=v.c,f=q0(p(cp,s,d,m)),g=o(K,1.01,o(bn,f,Ct(Al(c)))),b=o(Z0,e.ev,{eq:e.eq,eP:g,fg:u}),w=ep(b).dM,x=w?Ne(ur(Vi(r))):Or(Ai(r)),h=function(){var oe=e.bZ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),T=h.a,k=h.b,G=e.bD,j=G,R=o(yo,j,e.b$),N=R,W=Ye({dx:0,dy:x.fT,dz:an(N),dA:e.ec,dB:0,dC:x.fX,dD:tn(N),dE:O0(f),dF:0,dG:x.c5,dH:on(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),B=_e(Ll,W,l,b,J0,t,{M:L,U:L,fz:L}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return je(_([p(Ue,B.M,z(Q,Ia),Nr),p(Ue,B.U,$n,Nr)]));case 1:var Q=O.a;return je(_([p(Ue,B.M,$n,Nr),_([Fi]),p(Ue,B.fz,Q.bd,zl),_([Ml(0)]),p(Ue,B.M,z(Q,Ia),Y0),p(Ue,B.U,$n,Nr)]));default:var ie=O.a,ve=O.b;return je(_([p(Ue,B.M,z(ve,Ia),Nr),_([Fi]),o(z0,B.fz,ie),p(K0,B.M,ve,Dr(ie)),p(Ue,B.U,$n,Nr)]))}},vp=function(e){return o(Pn,"width",Me(e))},$p=$(function(e,r){var n=_([e0(1),o0(0),Jm(!0),C(Zm,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(A,qm,n),"1",1);default:var k=T.a;return V(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=zi(v),d=o(be,"height",Me(s)+"px"),m=zi(u),f=m/s,g=o(wo,function(T){return up({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(be,"width",Me(m)+"px"),w=e.aI,x=w,h=c0(x);return p(a0,"div",_([o(be,"padding","0px"),b,d]),_([z(i,p(v0,t,_([vp(Ie(m*c)),r0(Ie(s*c)),b,d,o(be,"display","block"),o(be,"background-color",h)]),g))]))}),fp=function(e){return o($p,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Wl=function(e){return e},Ri=Wl({fT:.31271,fX:.32902}),sp=$(function(e,r){var n=e,a=Ne(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(yo,r.cd,r.b6),u=l;return{by:on(u),ex:n,bF:tn(u),cJ:0,bV:an(u),cZ:1,fT:-t,fX:-i,c5:-c}}),dp=function(e){return e},mp=function(e){return dp(1.2*o(An,2,e))},qa=function(e){return e},pp={$:0},bp=pp,Hl=function(e){return e},gp=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Ei=function(e){var r=e;return r},hp=function(e){e:for(;;){if(br(e.e2,tr)&&br(e.e3,tr))return Te;if(o(gp,se(e.e2),se(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:ur(e.ei)};e=r;continue e}else{var n=Z(Ei(e.e3)/Fr),a=Z(Ei(e.e2)/Fr),t=Ne(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(yo,Hl(1),e.b6),v=u;return{by:a*on(v),ex:!1,bF:a*tn(v),cJ:n/a,bV:a*an(v),cZ:3,fT:i,fX:c,c5:l}}}},ji=function(e){return hp({b6:e.b6,e2:e.cd,e3:tr,ei:e.ei})},Xl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),_p=function(e){var r=e;return r},Il=function(e){var r=p(Xl,1667,25e3,_p(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Wl({fT:n,fX:a})},Ul=function(e){return e},wp=Il(Ul(12e3)),yp=Il(Ul(5600)),xp=function(e){return{$:2,a:e}},Sp=function(e){return xp(e)},Tp=$(function(e,r){return{$:2,a:e,b:r}}),Jl=function(e){return{$:0,a:e}},In=function(e){var r=e;return r},Cp=function(e){var r=e;return r.ex},Lp=Jl($n.a),Pp=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(sr,n,z(L,L),r)}),zp=function(e){var r=e;return Ye({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},kp=ee(function(e,r,n,a,t,i,c,l){var u=o(Pp,Cp,_([In(e),In(r),In(n),In(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(Tp,o(re,zp,v),{bd:o(Ve,m,g),bK:o(Ve,w,h),bL:o(Ve,t,i),bM:o(Ve,c,l)})}else return Lp}else return Jl({bd:o(Ve,e,r),bK:o(Ve,n,a),bL:o(Ve,t,i),bM:o(Ve,c,l)})}),Mp=y(function(e,r,n){return xa(kp,e,r,n,Te,Te,Te,Te,Te)}),Dp=function(e){var r=o(sp,Im(e.fz),{b6:yp,eG:e.fI,cd:qa(8e4)}),n=ji({b6:wp,cd:qa(2e4),ei:e.ei}),a=ji({b6:Ri,cd:qa(15e3),ei:ur(e.ei)}),t=p(Mp,r,n,a);return fp({b0:Sp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:mp(15),bJ:t,bZ:bp,b$:Ri})},Ap=function(e){var r=e;return r},Ma=function(e){var r=e;return Ap(r.er)},Ol=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Bp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ql=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Yl=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Fp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Vp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Rp=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ko=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(Rp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Ol,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(Bp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(ql,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(Vp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(Yl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(Fp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Mo={$:0},Ep=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ga(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),jp=y(function(e,r,n){var a=ga(e(r));return xa(Ep,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Ya=$(function(e,r){var n=e,a=r;return J(a,n)<1}),Zl=function(e){return o(Ya,e.dO,e.dR)&&o(Ya,e.dP,e.dS)&&o(Ya,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Tn=function(e){var r=e;return r},zr=function(e){var r=e;return r.fT},kr=function(e){var r=e;return r.fX},Mr=function(e){var r=e;return r.c5},Ql=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=zr(n),c=kr(n),l=Mr(n),u=zr(a),v=kr(a),s=Mr(a),d=zr(t),m=kr(t),f=Mr(t);return Zl({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},Kl=xf,Ce=function(e){return Kl(ka(e))},eu=function(e){var r=e;return r},Da=function(e){return Kl(eu(e))},Np=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),kt=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),Gp={fT:0,fX:0,c5:0},Wp=$(function(e,r){var n=e,a=r,t=o(Ke,Z(a.fT),o(Ke,Z(a.fX),Z(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=Ir(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return Gp}),Hp=Wp(Hl(1)),ru=y(function(e,r,n){var a=o(kt,r,n),t=o(kt,e,r);return Hp(o(Np,a,t))}),Xp=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Da(p(ru,n,a,t));return V({o:i,bT:Ce(n)},{o:i,bT:Ce(a)},{o:i,bT:Ce(t)})},Ip=$(function(e,r){return{$:2,a:e,b:r}}),nu=Ip({df:3,$7:0,dV:4}),Up=function(e){if(e.b){var r=e.a,n=e.b,a=nu(o(re,Xp,e)),t=p(jp,Ql,r,n);return C(Ol,t,e,a,0)}else return Mo},Fe=y(function(e,r,n){return V(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),au=function(){var e=ir(1),r=ir(1),n=ir(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(me,i,t,a),l=o(K,.5,e),u=p(me,i,t,l),v=o(K,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(K,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return ko(Up(_([p(Fe,c,g,f),p(Fe,c,s,g),p(Fe,u,b,w),p(Fe,u,w,d),p(Fe,f,g,w),p(Fe,f,w,b),p(Fe,c,d,s),p(Fe,c,u,d),p(Fe,c,f,b),p(Fe,c,b,u),p(Fe,s,w,g),p(Fe,s,d,w)])))}(),Un={$:0},Jp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Op=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Da(p(ru,u,l,c)),s={o:v,bT:Ce(u)},d={o:v,bT:Ce(l)},m={o:v,bT:Ce(c)};return o(A,s,o(A,d,o(A,m,n)))}),Do=function(e){var r=e;return r.D},qp=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),Mt=4294967295>>>32-wn,Dt=qu,Yp=y(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var v=t.a;return o(Dt,Mt&r,v)}else{var i=t.a,c=e-wn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Zp=function(e){return e>>>5<<5},Qp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,Zp(n))>-1?te(o(Dt,Mt&e,i)):te(p(Yp,a,e,t))}),Ao=function(e){var r=e;return r.ah},Za=$(function(e,r){return o(Qp,e,Ao(r))}),Kp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(qp,y(function(c,l,u){return V(c,l,u)}),o(Za,a,e),o(Za,t,e),o(Za,i,e))};return o(fo,r,Do(e))},e3=y(function(e,r,n){e:for(;;){var a=o(no,Be,e),t=a.a,i=a.b;if(J(pt(t),Be)<0)return o(Gc,!0,{z:r,l:n,p:t});var c=i,l=o(A,jc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Bo=function(e){return e.b?p(e3,e,L,0):Rc},r3=y(function(e,r,n){return e(r(n))}),n3=$(function(e,r){return!o(Qc,o(r3,ms,e),r)}),a3=$(function(e,r){return p(sr,$(function(n,a){return e(n)?o(A,n,a):a}),L,r)}),t3=function(e){var r=e.a;return r},tu=$(function(e,r){var n=t3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(n3,a,r)?{D:r,ah:e}:{D:o(a3,a,r),ah:e}}),o3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=o3({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Or(r),a=Or(e);return z(V(a.fT,a.fX,a.c5),V(n.fT,n.fX,n.c5))}),Ni=p(Vn,0,0,0),Qa=Ge(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(lo,o(na,e,r),t);if(v.$){var d={o:Ni,bT:Ce(r)},m={o:Ni,bT:Ce(e)},f=u+1,g=u;return V(o(A,V(n,g,f),o(A,V(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),i3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=v,T=a+3,k=_e(Qa,s,m,f,b,r,_e(Qa,d,s,g,f,r,_e(Qa,m,d,b,g,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var G=t,j=G.a,R=G.b;return z(j,Ae(R))}}),c3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(dn,o(na,m,s),f,p(dn,o(na,s,d),g,p(dn,o(na,d,m),b,t))),x=o(A,V(b,g,f),a),h=e,T=v,k=n+3,G=x,j=w;e=h,r=T,n=k,a=G,t=j;continue e}else return V(a,t,n)}),Tr=y(function(e,r,n){var a=Kp(n),t=p(sr,Op(r),L,a),i=S(c3,r,a,0,L,hl),c=i.a,l=i.b,u=i.c,v=S(i3,r,l,a,0,V(c,L,u)),s=v.a,d=v.b,m=gl(d)?t:le(t,d);return p(Jp,e,o(tu,Bo(m),s),o(En,m,s))}),At=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(qr,0,Dr(e)-1)),ah:Bo(je(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},ou=function(e){switch(e.$){case 0:return Un;case 1:var a=e.a,r=e.b,n=o(re,Tn,r);return p(Tr,a,Pr,At(n));case 2:var a=e.a,r=e.b,n=o(re,Tn,r);return p(Tr,a,Pr,At(n));case 3:var a=e.a,t=e.b;return p(Tr,a,Pr,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bT},t);case 8:return Un;case 9:return Un;default:return Un}},Gi=ou(au),Aa=function(e){var r=e;return r.aK},iu={$:0},P=iu,pe=$(function(e,r){return{$:1,a:e,b:r}}),l3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},u3=1029,v3=function(e){return{$:5,a:e}},cu=function(e){var r=e;return v3(r)},$3=cu(u3),f3=1028,s3=cu(f3),Le=y(function(e,r,n){return r===1?e?o(A,$3,n):o(A,s3,n):n}),lu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ka=E(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Le,l,a,d),lu,l3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Fo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},uu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nr=E(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Le,l,a,d),uu,Fo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),vu=$(function(e,r){return{$:3,a:e,b:r}}),d3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},$u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},m3=E(function(e,r,n,a){return o(vu,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,$u,d3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Vo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},jn=function(e){var r=e;return r},Ba=Sf,ar=ge(function(e,r,n,a,t){return o(pe,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Le,u,t,m),uu,Vo,a,{aN:o(Ba,jn(r),e),b:l,c,d:s,e:i,f:v})}))}),p3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},b3=ge(function(e,r,n,a,t){return o(vu,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,$u,p3,t,{aN:o(Ba,jn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),fu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},su={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=E(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Le,l,a,d),su,fu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},mu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},g3=Ge(function(e,r,n,a,t,i){return o(pe,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Le,v,i,f),mu,du,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),pu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},h3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,ee(function(d,m,f,g,b,w,x,h){var T=x.a,k=x.b;return S(ne,p(Le,g,s,h),mu,pu,v,{b4:e,b7:r,b8:i,b9:a,P:k,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},bu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},On=Ge(function(e,r,n,a,t,i){return o(pe,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Le,v,i,f),su,bu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),_3=function(e){return{$:0,a:e}},Wi=$(function(e,r){return{$:1,a:e,b:r}}),gn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),w3=function(e){return C(nn,an(e),tn(e),on(e),1)},Ro=C(nn,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ro)}else{var n=r.a;return z(e,w3(n))}}),gu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Wi,z(t,Ro),o(gn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Wi,o(aa,t,e),o(gn,t,r))}else{var a=n.a.a;return n.b.a,_3(a)}}),y3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),x3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),S3=function(e){return o(ke,e,1)},Bt=o(ke,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Bt)}else{var n=r.a;return z(e,S3(n))}}),hu=E(function(e,r,n,a){var t=C(x3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(qn,z(u,Ro),o(Gr,u,r),o(Gr,u,n),o(gn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(qn,o(aa,u,e),z(u,Bt),o(Gr,u,n),o(gn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(qn,o(aa,u,e),o(Gr,u,r),z(u,Bt),o(gn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(qn,o(aa,u,e),o(Gr,u,r),o(Gr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(y3,i,c,l)}}),T3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},et=ge(function(e,r,n,a,t){return o(pe,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Le,u,t,m),lu,T3,a,{b1:jn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),_u={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},C3=E(function(e,r,n,a){return o(pe,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Le,l,a,d),_u,du,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),L3=Et(function(e,r,n,a,t,i,c,l,u){return o(pe,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,h=b.b;return S(ne,p(Le,m,u,w),_u,pu,l,{b4:e,b7:r,b8:i,b9:a,P:h,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Cn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),P3=function(e){var r=e;return p(Cn,r.dR,r.dO,.5)},z3=function(e){var r=e;return p(Cn,r.dS,r.dP,.5)},k3=function(e){var r=e;return p(Cn,r.dT,r.dQ,.5)},M3=function(e){return p(me,P3(e),z3(e),k3(e))},H=function(e){var r=Bl(e),n=r.a,a=r.b,t=r.c;return{ey:ka(M3(e)),eS:n/2,eT:a/2,eU:t/2}},Eo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(Ka,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(Ka,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(Ka,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(nr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(nr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(m3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(et,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(et,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(et,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ar,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(ar,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(ar,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(b3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(gu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(C3,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(g3,b,x,h,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,k=e.c,G=e.d,j=e.e,R=C(hu,T,k,G,j);if(R.$){var O=R.a,Q=O.a,ie=O.b,ve=R.b,oe=ve.a,de=ve.b,Pe=R.c,Se=Pe.a,dr=Pe.b,mr=R.d,x=mr.a,h=mr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Xu(L3,Q,ie,oe,de,Se,dr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return h3(Q)(ie)(oe)(de)(Se)(dr)(x)(h)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,W=R.b,B=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,N,W,B,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,N,W,B,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,N,W,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,N,W,B,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),rt=function(e){var r=e;return r.fT},nt=function(e){var r=e;return r.fX},at=function(e){var r=e;return r.c5},D3=function(e){var r=e,n=at(r.c6),a=nt(r.c6),t=rt(r.c6),i=at(r.c4),c=nt(r.c4),l=rt(r.c4),u=at(r.c3),v=nt(r.c3),s=rt(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},A3=function(e){var r=ka(Er(e)),n=Ne(Sr(e)),a=Ne(xr(e)),t=Ne(yr(e));return{dp:D3(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Wr=$(function(e,r){return{$:5,a:e,b:r}}),wu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Cl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),yu=$(function(e,r){return o(wu,A3(e),r)}),Fa=function(e){return{$:2,a:e}},B3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),F3=Lf,V3=Cf,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=V3(a),g=f.fT,b=f.fX,w=f.c5,x=f.em,h=F3({em:x,fT:g*s,fX:b*d,c5:w*m});return xa(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Ft=$(function(e,r){switch(r.$){case 0:return iu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Ft,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(B3,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Fa(o(Hi,e,i));default:var c=r.a;return Rl(o(re,Ft(e),c))}}),jo=$(function(e,r){var n=r;return o(Ft,e,n)}),No={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},xu=7683,Su=7682,R3=p(To,{co:0,cN:0,c2:15},{a8:xe,bl:Qr,bt:xe,bu:xu},{a8:xe,bl:Qr,bt:xe,bu:Su}),E3=p(To,{co:0,cN:0,c2:15},{a8:xe,bl:Qr,bt:xe,bu:Su},{a8:xe,bl:Qr,bt:xe,bu:xu}),Go=$(function(e,r){return e?o(A,E3,r):o(A,R3,r)}),j3={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},N3=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(Go,i,v),j3,No,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ha=function(e){var r=N3(e);if(r.$)return P;var n=r.a;return Fa(n)},G3=E(function(e,r,n,a){var t=o(Eo,n,au),i=function(){var s=z(e,r);return s.a?s.b?Rn(_([t,ha(Gi)])):t:s.b?ha(Gi):P}(),c=Aa(a),l=c.a,u=c.b,v=c.c;return o(yu,Ma(a),o(jo,V(l,u,v),i))}),W3=$(function(e,r){return C(G3,!0,!0,e,r)}),Vt=function(e){return{$:0,a:e}},Tu=$(function(e,r){return{$:0,a:e,b:r}}),H3=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,n,a,t)},X3=function(e){return o(Tu,0,Vt(H3(e)))},Wo=function(e){var r=e;return r.k},hn=function(e){var r=e;return Ar(r)},I3=$(function(e,r){var n=r;return n/e}),Xi=function(e){var r=e;return{fT:Ar(r),fX:Zr(r)}},U3=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Da(a),bT:Ce(n)},r)}),J3=ya(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=on(l.bT),s=tn(l.bT),d=an(l.bT),m=o(ra,e,d),f=o(Ke,r,d),g=o(ra,n,s),b=o(Ke,a,s),w=o(ra,t,v),x=o(Ke,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return Zl({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Cu=$(function(e,r){var n=on(e.bT),a=tn(e.bT),t=an(e.bT);return jt(J3,t,t,a,a,n,n,r)}),O3=function(e){var r=p(zc,U3,L,Ao(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Do(e)),i=o(Cu,n,a);return C(ql,i,e,t,0)}else return Mo},Lu=cr({fT:0,fX:0,c5:-1}),Ii=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),_a=function(e){var r=e;return Zr(r)},fn=function(e){var r=e;return r},Rt=function(e){return Br(2*Fr*e)},Ui=Sl({cA:qe,c3:go,c4:zo}),Pu=function(){var e=72,r=o(I3,e,Rt(1)),n=ir(1),a=fn(ho),t=fn(Lu),i=ir(1),c=o(K,.5,i),l=p(me,tr,tr,c),u=o(K,-.5,i),v=p(me,tr,tr,u),s=function(f){var g=o(K,f,r),b=fn(o(Ii,Ui,Xi(g))),w=o(K,hn(g),n),x=o(K,_a(g),n),h=p(me,w,x,c),T=p(me,w,x,u),k=o(Sn,e,f+1),G=o(K,k,r),j=fn(o(Ii,Ui,Xi(G))),R=o(K,hn(G),n),N=o(K,_a(G),n),W=p(me,R,N,u),B=p(me,R,N,c);return _([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:W},{o:j,bT:B}),V({o:b,bT:T},{o:j,bT:B},{o:b,bT:h}),V({o:a,bT:l},{o:a,bT:h},{o:a,bT:B})])},d=o(re,s,o(qr,0,e-1)),m=At(je(d));return ko(O3(m))}(),Ji=ou(Pu),zu=function(e){var r=e;return r.cA},q3=function(e){var r=e,n=Z(r.c5),a=Z(r.fX),t=Z(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=Ir(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=Ir(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=Ir(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=Ir(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},Y3=function(e){var r=q3(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return z(r,c)},Z3=function(e){var r=bo(e),n=Y3(r),a=n.a,t=n.b;return $r({cA:zu(e),c3:a,c4:t,c6:r})},ku=function(e){var r=e;return r.e9},Mu=function(e){var r=e;return r.fr},Q3=E(function(e,r,n,a){var t=Z3(Wo(a)),i=o(Eo,n,Pu),c=function(){var d=z(e,r);return d.a?d.b?Rn(_([i,ha(Ji)])):i:d.b?ha(Ji):P}(),l=Mu(a),u=l,v=ku(a),s=v;return o(yu,t,o(jo,V(u,u,s),c))}),K3=$(function(e,r){return C(Q3,!0,!0,e,r)}),Oi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},sn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Or(a),l=Or(t);return Ye({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Yn=nu(_([V({cY:0},{cY:1},{cY:2})])),eb=$(function(e,r){var n=Ql(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(pe,a,ee(function(h,T,k,G,j,R,N,W){return S(ne,p(Le,G,0,W),Oi,Fo,Yn,{aw:t,b:k,c:T,d:R,e:h,bq:sn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(pe,a,ee(function(h,T,k,G,j,R,N,W){return S(ne,p(Le,G,0,W),Oi,Vo,Yn,{aN:o(Ba,jn(c),i),b:k,c:T,d:R,e:h,bq:sn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(gu,l,f);if(u.$)return P;var v=u.a;return o(pe,a,ee(function(h,T,k,G,j,R,N,W){var B=N.a,O=N.b;return S(ne,p(Le,G,0,W),qi,fu,Yn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:k,c:T,d:R,e:h,bq:sn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(hu,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(pe,a,ee(function(h,T,k,G,j,R,N,W){var B=N.a,O=N.b;return S(ne,p(Le,G,0,W),qi,bu,Yn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:k,c:T,d:R,cQ:w,e:h,bq:sn(r),f:j})}))}}),rb=function(){var e=_([{a_:o(ke,0,1)},{a_:o(ke,1,1)},{a_:o(ke,2,1)},{a_:o(ke,0,-1)},{a_:o(ke,1,-1)},{a_:o(ke,2,-1)}]),r=_([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(En,e,r)}(),nb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Yi=function(e){return Fa(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Go,t,u),nb,No,rb,{b:a,c:n,d:c,e:r,bY:l,bq:sn(e),f:i})}))},ab=E(function(e,r,n,a){var t=o(eb,n,a),i=z(e,r);return i.a?i.b?Rn(_([t,Yi(a)])):t:i.b?Yi(a):P}),tb=$(function(e,r){return C(ab,!0,!0,e,r)}),Ho=function(e){var r=e;return r},ob=$(function(e,r){var n=Mr(r),a=Mr(e),t=kr(r),i=kr(e),c=zr(r),l=zr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),ib=function(e){var r=Ho(e),n=r.a,a=r.b;return o(ob,n,a)},Zi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cb=$(function(e,r){return{$:1,a:e,b:r}}),lb=cb({df:2,$7:0,dV:1}),Qi=lb(_([z({dw:0},{dw:1})])),ub=$(function(e,r){var n=ib(r),a=H(n),t=Ho(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(pe,a,ee(function(v,s,d,m,f,g,b,w){return S(ne,w,Zi,Fo,Qi,{aw:l,du:Ce(c),dv:Ce(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(pe,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,Zi,Vo,Qi,{aN:o(Ba,jn(u),l),du:Ce(c),dv:Ce(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),vb=$(function(e,r){return o(ub,e,r)}),Va=function(e){var r=e;return r.ey},Ra=function(e){var r=e;return r.fr},Zn=function(e){return Br(Fr*(e/180))},Ki=$(function(e,r){var n=e,a=r;return n/a}),$b=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(br(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ec=$(function(e,r){return e<1?L:S($b,0,e,e,r,L)}),fb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Da(a),bT:Ce(n),L:o(ke,c,l)},r)}),sb=function(e){var r=p(zc,fb,L,Ao(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Do(e)),i=o(Cu,n,a);return C(Yl,i,e,t,0)}else return Mo},Du=$(function(e,r){var n=e,a=r,t=Ar(a);return{fT:t*Ar(n),fX:t*Zr(n),c5:Zr(a)}}),db=function(){var e=ir(1),r=72,n=o(qr,0,r-1),a=o(ec,r,o(Cn,tr,Rt(1))),t=eo(r/2),i=o(qr,0,t-1),c=o(ec,t,o(Cn,Zn(90),Zn(-90))),l=Bo(je(o(re,function(s){return o(re,function(d){return{o:fn(o(Du,s,d)),bT:p(me,o(K,hn(d)*hn(s),e),o(K,hn(d)*_a(s),e),o(K,_a(d),e)),L:z(o(Ki,s,Rt(1)),o(Ki,o(bn,Zn(90),d),Zn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=je(o(re,function(s){return je(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([V(b,g,m),V(b,m,f)])},i))},n));return ko(sb(o(tu,l,v)))}(),wa=72,Qn=2*wa,mb=$(function(e,r){e:for(;;){var n=Qn+1,a=o(Sn,Qn,2*e+3),t=o(Sn,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),pb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),bb=$(function(e,r){e:for(;;){var n=p(pb,0,2*Fr,e/wa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),gb=function(){var e=o(bb,wa-1,_([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(mb,wa-1,L);return o(En,e,r)}(),hb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},rc=function(e){return Fa(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Go,!0,u),hb,No,gb,{aw:p(Vn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},_b=function(e){var r=eu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},wb=$(function(e,r){return o(wu,_b(e),r)}),yb=E(function(e,r,n,a){var t=o(Eo,n,db),i=function(){var u=z(e,r);return u.a?u.b?Rn(_([t,rc()])):t:u.b?rc():P}(),c=Ra(a),l=c;return o(wb,o(kt,qe,Va(a)),o(jo,V(l,l,l),i))}),xb=$(function(e,r){return C(yb,!0,!0,e,r)}),Sb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Au=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Tb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Cb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Tu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Sb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Au,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Tb,n,a,t,i,c)}},Lb=Cb,Bu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(W3,t,r)]);case 1:var t=e.a,n=e.b;return _([o(tb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(xb,Lb(t),a)]);case 2:var t=e.a,i=e.b;return _([o(K3,t,i)]);case 4:var c=e.a,l=e.b;return _([o(vb,X3(c),l)]);default:var u=e.a;return o(wo,Bu,u)}},Pb=function(e){return o(wo,Bu,e)},zb=$(function(e,r){return Dp({aI:Hm(e.es),ev:e.ev,aJ:Xm(.5),ca:e.ca,aK:z(Pi(Ie(e.cS.fR)),Pi(Ie(e.cS.eW))),aP:Pb(r),fz:!0,fI:o(Du,Br(e.fH),Br(e.fJ)),ei:_o})}),Ea=$(function(e,r){return{$:0,a:e,b:r}}),tt=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),ot=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),kb=cr({fT:-1,fX:0,c5:0}),Mb=cr({fT:0,fX:-1,c5:0}),Db=Ge(function(e,r,n,a,t,i){var c=o(tt,n,i)?ho:Lu,l=o(tt,r,t)?Gl:Mb,u=o(tt,e,a)?Tl:kb,v=V(se(o(lr,e,a)),se(o(lr,r,t)),se(o(lr,n,i))),s=p(me,o(ot,e,a),o(ot,r,t),o(ot,n,i)),d=$r({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Ab=$(function(e,r){return _e(Db,zr(e),kr(e),Mr(e),zr(r),kr(r),Mr(r))}),Bb=$(function(e,r){var n=r/2;return o(Ea,e,o(Ab,p(Pt,-n,-n,-n),p(Pt,n,n,n)))}),ja=function(e){return{$:5,a:e}},nc=function(e){return ja(e)},it=function(e){return p(Xl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Fb=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,it(n),it(a),it(t))},Vb=function(e){return p(Au,0,Vt(Fb(e)),Vt(0))},Xo=$(function(e,r){return{$:2,a:e,b:r}}),Io=$(function(e,r){return{$:4,a:e,b:r}}),Uo=$(function(e,r){return{$:3,a:e,b:r}}),Jo=$(function(e,r){return{$:1,a:e,b:r}}),Rb=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),Eb=$(function(e,r){return{er:o(xl,e,Ma(r)),aK:Aa(r)}}),jb=$(function(e,r){var n=r;return o(jr,o(Fn,e,n.cA),n.eG)}),Nb=$(function(e,r){var n=r;return{k:o(jb,e,n.k),e9:n.e9,fr:n.fr}}),Gb=function(e){return e},Oo=$(function(e,r){var n=Ho(r),a=n.a,t=n.b;return Gb(z(e(a),e(t)))}),Wb=$(function(e,r){return o(Oo,Fn(e),r)}),qo=$(function(e,r){return{ey:r,fr:se(e)}}),Hb=$(function(e,r){return o(qo,Ra(r),o(Fn,e,Va(r)))}),Yo=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),Xb=$(function(e,r){return o(Yo,Fn(e),r)}),Fu=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Rb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ea,s,o(Eb,i,c));case 1:var s=r.a,l=r.b;return o(Jo,s,o(Xb,i,l));case 3:var s=r.a,u=r.b;return o(Uo,s,o(Hb,i,u));case 2:var s=r.a,v=r.b;return o(Xo,s,o(Nb,i,v));case 4:var s=r.a,d=r.b;return o(Io,s,o(Wb,i,d));default:var m=r.a;return ja(o(re,Fu(V(n,a,t)),m))}}),Ib=function(e){return Fu(V(0,e,0))},ct=function(e){return e/255},Ub=y(function(e,r,n){return C(Dn,ct(e),ct(r),ct(n),1)}),Jb=y(function(e,r,n){return{er:p(yl,e,r,Ma(n)),aK:Aa(n)}}),Ob=$(function(e,r){var n=o(Bn,e,r),a=o(ea,e,r);return function(t){var i=t;return o(jr,n(i.cA),a(i.eG))}}),qb=y(function(e,r,n){var a=n;return{k:p(Ob,e,r,a.k),e9:a.e9,fr:a.fr}}),Yb=y(function(e,r,n){return o(Oo,o(Bn,e,r),n)}),Zb=y(function(e,r,n){return o(qo,Ra(n),p(Bn,e,r,Va(n)))}),Qb=y(function(e,r,n){return o(Yo,o(Bn,e,r),n)}),Vu=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ea,l,p(Jb,e,r,a));case 1:var l=n.a,t=n.b;return o(Jo,l,p(Qb,e,r,t));case 3:var l=n.a,i=n.b;return o(Uo,l,p(Zb,e,r,i));case 2:var l=n.a,c=n.b;return o(Xo,l,p(qb,e,r,c));case 4:var l=n.a,u=n.b;return o(Io,l,p(Yb,e,r,u));default:var v=n.a;return ja(o(re,o(Vu,e,r),v))}}),Kb=o(jr,qe,zo),eg=$(function(e,r){return p(Vu,Kb,Br(e),r)}),Nn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c5:a.c5+r*(t.c5-a.c5)}}),rg=y(function(e,r,n){var a=Ma(n),t=yr(a),i=xr(a),c=Sr(a),l=p(Nn,e,r,Er(a)),u=r>=0?$r({cA:l,c3:t,c4:i,c6:c}):$r({cA:l,c3:ur(t),c4:ur(i),c6:ur(c)}),v=Aa(n),s=v.a,d=v.b,m=v.c,f=se(o(K,r,s)),g=se(o(K,r,d)),b=se(o(K,r,m));return{er:u,aK:V(f,g,b)}}),ac=function(e){return bo(Wo(e))},ng=function(e){return zu(Wo(e))},ag=y(function(e,r,n){var a=se(o(K,r,Mu(n))),t=se(o(K,r,ku(n))),i=r>=0?ac(n):ur(ac(n)),c=p(Nn,e,r,ng(n));return{k:o(jr,c,i),e9:t,fr:a}}),tg=y(function(e,r,n){return o(Oo,o(Nn,e,r),n)}),og=y(function(e,r,n){return o(qo,o(K,Z(r),Ra(n)),p(Nn,e,r,Va(n)))}),ig=y(function(e,r,n){return o(Yo,o(Nn,e,r),n)}),Ru=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Ea,c,p(rg,qe,e,n));case 1:var c=r.a,a=r.b;return o(Jo,c,p(ig,qe,e,a));case 3:var c=r.a,t=r.b;return o(Uo,c,p(og,qe,e,t));case 2:var c=r.a,i=r.b;return o(Xo,c,p(ag,qe,e,i));case 4:var c=r.a,l=r.b;return o(Io,c,p(tg,qe,e,l));default:var u=r.a;return ja(o(re,Ru(e),u))}}),cg=$(function(e,r){return(r-Nc(r/e)*e)/e}),lg=$(function(e,r){return 360*o(cg,e,r)}),ug=C(Dn,255/255,255/255,255/255,1),Eu=$(function(e,r){var n=o(Sn,2,r)?ug:p(Ub,17,147,216),a=Lt(o(lg,8,e.db))/4,t=.707/Ar(Fr/4-a);return nc(r?_([o(Bb,Vb(n),1),o(Ib,.3,o(eg,a,o(Ru,t,o(Eu,e,r-1))))]):L)}),vg=function(e){return o(Eu,e,20)},$g=$(function(e,r){return o(zb,{es:C(sl,0,0,0,.7),ev:Wm(e),ca:e.ca,cS:e.cS,fH:Lt(90),fJ:-Lt(180)},_([vg(e)]))}),fg=C(pm,$g,Sm,xm,bm);const sg={Main:{init:fg(o(D,function(e){return ze({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ze({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ze({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",fa(xn)))},o(M,"left",Y))},o(M,"pressedKeys",fa(xn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ze({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ze({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ze({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},dg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},mg=()=>{lt("pointerdown"),lt("wheel"),lt("keydown")},lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},pg=sg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});mg();dg(pg);
