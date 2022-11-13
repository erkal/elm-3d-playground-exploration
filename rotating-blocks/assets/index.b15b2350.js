(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Rt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function wa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Yu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Gu=[];function Hu(e){return e.length}var Iu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ou=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Ju=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var qu=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}$(hr);$(function(e,r){return!hr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Xu=$(function(e,r){var n=I(e,r);return n<0?wc:n?Uf:Cc}),zn=0;function z(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var Ku=$(tr);function h(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function La(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Qu=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(La(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(La(r).sort(function(n,a){var t=o(e,n,a);return t===Cc?0:t===wc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var ev=$(Math.pow);$(function(e,r){return r%e});var rv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),nv=Math.PI,av=Math.cos,tv=Math.sin,ov=Math.tan,iv=Math.atan;$(Math.atan2);function cv(e){return e}function lv(e){return e===1/0||e===-1/0}var uv=Math.ceil,vv=Math.floor,$v=Math.round,fv=Math.sqrt,Oo=Math.log,sv=isNaN;function mv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var dv=$(function(e,r){return e+r});function pv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function bv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var hv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),_v=$(function(e,r){return r.split(e)}),yv=$(function(e,r){return r.join(e)}),Sv=S(function(e,r,n){return n.slice(e,r)});function xv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),wv=$(function(e,r){return r.indexOf(e)>-1}),Lv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Pv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Ki(e){return e+""}function Tv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function zv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Mv(e){return La(e).join("")}function kv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Dv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bv(e){return{$:0,a:e}}function jt(e){return{$:2,b:e}}var Av=jt(function(e){return typeof e=="boolean"?$e(e):Ke("a BOOL",e)}),Fv=jt(function(e){return typeof e=="number"?$e(e):Ke("a FLOAT",e)}),Vv=jt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ke("a STRING",e)});function Uv(e){return{$:3,b:e}}var Ev=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Rv=$(function(e,r){return{$:10,b:r,h:e}}),jv=$(function(e,r){return Sr(e,[r])}),Nv=S(function(e,r,n){return Sr(e,[r,n])});U(function(e,r,n,a){return Sr(e,[r,n,a])});ge(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return ye(o(Kt,"This is not valid JSON! "+a.message,r))}});var Qi=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ke("null",r);case 3:return En(r)?Jo(e.b,r,h):Ke("a LIST",r);case 4:return En(r)?Jo(e.b,r,Wv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Oe(v)?v:ye(o(li,n,v.a));case 7:var a=e.e;if(!En(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Oe(v)?v:ye(o(Lc,a,v.a));case 8:if(typeof r!="object"||r===null||En(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Oe(v))return ye(o(li,i,v.a));t=tr(z(i,v.a),t)}return $e(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Oe(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ne(e.b,r);return Oe(v)?Ne(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Ne(m.a,r);if(Oe(v))return v;s=tr(v.a,s)}return ye(Ef(Ve(s)));case 1:return ye(o(Kt,e.a,r));case 0:return $e(e.a)}}function Jo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Oe(c))return ye(o(Lc,i,c.a));t[i]=c.a}return $e(n(t))}function En(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Wv(e){return o(rs,e.length,function(r){return e[r]})}function Ke(e,r){return ye(o(Kt,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Yv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ec(e){return e}S(function(e,r,n){return n[e]=r,n});function Ur(e){return{$:0,a:e}}function Gv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var $t=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Hv(e){return{$:5,b:e}}var Iv=0;function Nt(e){var r={$:0,e:Iv++,f:e,g:null,h:[]};return Wt(r),r}function rc(e){return sr(function(r){r(Ur(Nt(e)))})}function nc(e,r){e.h.push(r),Wt(e)}var Ov=$(function(e,r){return sr(function(n){nc(e,r),n(Ur(zn))})}),ja=!1,Zo=[];function Wt(e){if(Zo.push(e),!ja){for(ja=!0;e=Zo.shift();)Jv(e);ja=!1}}function Jv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Yt(e,r,n,a,t,i){var c=o(Qi,e,r?r.flags:void 0);Oe(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=qv(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),Ko(l,b.b,t(v))}return Ko(l,u.b,t(v)),m?{ports:m}:{}}var rr={};function qv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Xv(t,r)}return n}function Zv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Xv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,Hv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Nt(o($t,l,e.b))}var Kv=$(function(e,r){return sr(function(n){e.g(r),n(Ur(zn))})});$(function(e,r){return o(Ov,e.h,{$:0,a:r})});function ac(e){return function(r){return{$:1,k:e,l:r}}}function Qv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Xo=[],Na=!1;function Ko(e,r,n){if(Xo.push({p:e,q:r,r:n}),!Na){Na=!0;for(var a;a=Xo.shift();)e$(a.p,a.q,a.r);Na=!1}}function e$(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)nc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=r$(e,t,a,r.l);n[t]=n$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function r$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function n$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function a$(e){rr[e]&&nn(3)}$(function(e,r){return r});function t$(e,r){return a$(e),rr[e]={f:o$,u:r,a:i$},ac(e)}var o$=$(function(e,r){return function(n){return e(r(n))}});function i$(e,r){var n=P,a=rr[e].u,t=Ur(null);rr[e].b=t,rr[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(Qi,a,c);Oe(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,lr=typeof document<"u"?document:{};function Gt(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var tc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ht(n),e:t,f:e,b:i}})}),Er=tc(void 0),c$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ht(n),e:t,f:e,b:i}})}),l$=c$(void 0);function u$(e,r,n,a){return{$:3,d:Ht(e),g:r,h:n,i:a}}var v$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});S(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Rt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return wa(e,r,n,a,t,i,c,l,u)})});var oc=$(function(e,r){return{$:"a0",n:e,o:r}}),$$=$(function(e,r){return{$:"a1",n:e,o:r}}),ic=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),f$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function s$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(oc,r.n,d$(e,r.o)):r});function d$(e,r){var n=ao(r);return{$:r.$,a:n?p(ns,n<3?p$:b$,De(e),r.a):o(ua,e,r.a)}}var p$=$(function(e,r){return z(e(r.a),r.b)}),b$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ht(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Qo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Qo(c,t,i):c[t]=i}return r}function Qo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Gt(c,gr(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?g$(e,t):a==="a0"?y$(e,r,t):a==="a3"?h$(e,t):a==="a4"?_$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function g$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function h$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function _$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=S$(r,i),e.addEventListener(t,c,It&&{passive:ao(i)<2}),a[t]=c}}var It;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){It=!0}}))}catch{}function S$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Oe(i)){for(var c=ao(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function x$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function cc(e,r){var n=[];return Je(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=k$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){he(n,0,a,r);return}(f?!C$(m,d):m!==d)&&he(n,2,a,d),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ei(e,r,n,a,w$);return;case 2:ei(e,r,n,a,L$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var y=Ot(e.d,r.d);y&&he(n,4,a,y);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Ot(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&x$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function w$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function L$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],y=g.a,x=b.a,_=g.b,w=b.b,M=void 0,N=void 0;if(y===x){f++,Je(_,w,t,f),f+=_.b||0,m++,d++;continue}var R=l[m+1],E=u[d+1];if(R){var j=R.a,W=R.b;N=x===j}if(E){var F=E.a,Z=E.b;M=y===F}if(M&&N){f++,Je(_,Z,t,f),fn(i,t,y,w,d,c),f+=_.b||0,f++,sn(i,t,y,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,fn(i,t,x,w,d,c),Je(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(N){f++,sn(i,t,y,_,f),f+=_.b||0,f++,Je(W,w,t,f),f+=W.b||0,m+=2,d+=1;continue}if(R&&j===F){f++,sn(i,t,y,_,f),fn(i,t,x,w,d,c),f+=_.b||0,f++,Je(W,Z,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;sn(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var K=K||[],b=u[d];fn(i,t,b.a,b.b,void 0,K),d++}(t.length>0||c.length>0||K)&&he(n,8,a,{w:t,x:c,y:K})}var lc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+lc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}sn(e,r,n+lc,a,t)}function uc(e,r,n,a){mn(e,r,n,0,0,r.b,a)}function mn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)uc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&mn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&mn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return mn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,y=0;y<g.length;y++){t++;var x=d===1?g[y]:g[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=mn(b[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function vc(e,r,n,a){return n.length===0?e:(uc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=P$(t,a);t===e&&(e=i)}return e}function P$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return z$(e,r);case 5:return r.s(e);default:nn(10)}}function T$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function z$(e,r){var n=r.s,a=M$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Gt(e,a),e}function M$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Gt(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function Jt(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Jt(v[a]),u);return p(Er,l,r,u)}function k$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var D$=U(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Jt(l);return $c(i,function(v){var s=c(v),m=cc(u,s);l=vc(l,u,m,t),u=s})})});U(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=lr.title,v=lr.body,s=Jt(v);return $c(i,function(m){oa=c;var d=l(m),f=Er("body")(P)(d.eu),g=cc(s,f);v=vc(v,s,g,t),s=f,oa=0,u!==d.fL&&(lr.title=u=d.fL)})})});var ca=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function $c(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(io,to,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(io,to,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(io,to,sr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},A$=typeof window<"u"?window:B$;S(function(e,r,n){return rc(sr(function(a){function t(i){Nt(n(i))}return e.addEventListener(r,t,It&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Oe(n)?re(n.a):q});function fc(e,r){return sr(function(n){ca(function(){var a=document.getElementById(e);n(a?Ur(r(a)):Gv(ts(e)))})})}function F$(e){return sr(function(r){ca(function(){r(Ur(e()))})})}$(function(e,r){return fc(r,function(n){return n[e](),zn})});$(function(e,r){return F$(function(){return A$.scroll(e,r),zn})});S(function(e,r,n){return fc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var V$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var U$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?re(m):q}a.push(L(cl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(cl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var E$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/R$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function R$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var qt=new Float64Array(3),ri=new Float64Array(3),ni=new Float64Array(3),j$=S(function(e,r,n){return new Float64Array([e,r,n])}),N$=function(e){return e[0]},W$=function(e){return e[1]},Y$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var G$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(sc);function mc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(sc(e,r,n),n)}$(mc);function dc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/dc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var H$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),dn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(dn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=dn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(dn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(dn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(dn(r,a)+e[14])/n,t});var I$=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var O$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},J$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Z$=new Float64Array(16),X$=new Float64Array(16),K$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Q$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(pc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return pc(c,l,i,t,n,a)});function bc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(bc);U(function(e,r,n,a){return bc(e,r,n,a,-1,1)});function gc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],y=e[13],x=e[14],_=e[15],w=r[0],M=r[1],N=r[2],R=r[3],E=r[4],j=r[5],W=r[6],F=r[7],Z=r[8],K=r[9],ce=r[10],fe=r[11],ie=r[12],de=r[13],ke=r[14],Ce=r[15];return n[0]=a*w+l*M+m*N+b*R,n[1]=t*w+u*M+d*N+y*R,n[2]=i*w+v*M+f*N+x*R,n[3]=c*w+s*M+g*N+_*R,n[4]=a*E+l*j+m*W+b*F,n[5]=t*E+u*j+d*W+y*F,n[6]=i*E+v*j+f*W+x*F,n[7]=c*E+s*j+g*W+_*F,n[8]=a*Z+l*K+m*ce+b*fe,n[9]=t*Z+u*K+d*ce+y*fe,n[10]=i*Z+v*K+f*ce+x*fe,n[11]=c*Z+s*K+g*ce+_*fe,n[12]=a*ie+l*de+m*ke+b*Ce,n[13]=t*ie+u*de+d*ke+y*Ce,n[14]=i*ie+v*de+f*ke+x*Ce,n[15]=c*ie+s*de+g*ke+_*Ce,n}$(gc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],y=r[1],x=r[2],_=r[4],w=r[5],M=r[6],N=r[8],R=r[9],E=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*y+v*x,n[1]=t*b+l*y+s*x,n[2]=i*b+u*y+m*x,n[3]=0,n[4]=a*_+c*w+v*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+s*E,n[10]=i*N+u*R+m*E,n[11]=0,n[12]=a*j+c*W+v*F+d,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/dc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,y=c*l*v,x=i*i*v+u,_=g+f,w=b-d,M=g-f,N=c*c*v+u,R=y+m,E=b+d,j=y-m,W=l*l*v+u,F=n[0],Z=n[1],K=n[2],ce=n[3],fe=n[4],ie=n[5],de=n[6],ke=n[7],Ce=n[8],dr=n[9],pr=n[10],Ra=n[11],Ru=n[12],ju=n[13],Nu=n[14],Wu=n[15];return a[0]=F*x+fe*_+Ce*w,a[1]=Z*x+ie*_+dr*w,a[2]=K*x+de*_+pr*w,a[3]=ce*x+ke*_+Ra*w,a[4]=F*M+fe*N+Ce*R,a[5]=Z*M+ie*N+dr*R,a[6]=K*M+de*N+pr*R,a[7]=ce*M+ke*N+Ra*R,a[8]=F*E+fe*j+Ce*W,a[9]=Z*E+ie*j+dr*W,a[10]=K*E+de*j+pr*W,a[11]=ce*E+ke*j+Ra*W,a[12]=Ru,a[13]=ju,a[14]=Nu,a[15]=Wu,a});function ef(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(ef);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function rf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(rf);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=y,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});S(function(e,r,n){var a=mc(e,r,qt),t=la(mt(n,a,ri),ri),i=la(mt(a,t,ni),ni),c=Z$,l=X$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,gc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ai=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var nf=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},af=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),tf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),of=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),cf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),lf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),$f=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),ff=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),sf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},df=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},pf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},hc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},_c=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},bf=function(e){e.gl.disable(e.gl.CULL_FACE)},gf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},hf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},_f=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ti=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],yf=[mf,df,pf,hc,_c,bf,gf,hf,_f];function oi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Sf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function yc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function xf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,y,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?y[x]:y[x][_];else i.forEach(function(w){for(_=0;_<g;_++)f[b++]=g===1?y[w][x]:y[w][x][_]})}var u=yc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Zt(n.b)*s);Sn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=wf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Zt(r.b),indexBuffer:null,buffers:{}}}function wf(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ii(e,r){return e+"#"+r}var Sc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),hc(n),_c(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ii(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ai++,v||(v=oi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ai++,s||(s=oi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Sf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Lf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ii(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Pf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=xf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var y=yc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,y.size,y.baseType,!1,_,x*w)}for(n.toggle=!n.toggle,Sn(H0(n),i.a),u=0;u<ti.length;u++){var M=n[ti[u]];M.toggle!==n.toggle&&M.enabled&&(yf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Sn(t,e.g),r});function Lf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,y=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(y,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Pf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Tf=S(function(e,r,n){return u$(r,{g:n,f:{},h:e},Ff,Vf)}),zf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),kf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Df=$(function(e,r){e.contextAttributes.antialias=!0}),Bf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Af=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ff(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(G0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),nf(function(){return o(Sc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Vf(e,r){return r.f=e.f,Sc(r)}var B=Ku,Rn=qu,xc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Rn,e,l,v)}else{var u=c.a;return p(Rn,i,l,u)}});return p(Rn,i,p(Rn,e,r,t),a)}),Xt=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Xt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ci=function(e){return p(Xt,S(function(r,n,a){return o(B,z(r,n),a)}),P,e)},Cc=1,Uf=2,wc=0,ye=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),li=$(function(e,r){return{$:0,a:e,b:r}}),Lc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Ef=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Rf=Cv,jf=Yv,Ae=Ki,Pr=$(function(e,r){return o(yv,e,La(r))}),Qt=$(function(e,r){return h(o(_v,e,r))}),Pc=function(e){return o(Pr,`
    `,o(Qt,`
`,e))},Pa=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return p(Pa,$(function(r,n){return n+1}),0,e)},Nf=Qu,Wf=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Fr=$(function(e,r){return p(Wf,e,r,P)}),Tc=$(function(e,r){return p(Nf,e,o(Fr,0,Ar(r)-1),r)}),nr=kv,zc=function(e){var r=nr(e);return 97<=r&&r<=122},Mc=function(e){var r=nr(e);return r<=90&&65<=r},Yf=function(e){return zc(e)||Mc(e)},Gf=function(e){var r=nr(e);return r<=57&&48<=r},Hf=function(e){return zc(e)||Mc(e)||Gf(e)},Ve=function(e){return p(Pa,B,P,e)},an=pv,If=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Pc(Of(r))))}),Of=function(e){return o(Jf,e,P)},Jf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var y=b.a,x=y.a,_=y.b;return Yf(x)&&o(Rf,Hf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Ve(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Ae(Ar(s))+" ways:"));return o(Pr,`

`,o(B,g,o(Tc,If,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Ve(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(Pc(o(jf,4,f))+(`

`+d))}}),Ue=32,dt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=Gu,eo=uv,ro=$(function(e,r){return Oo(r)/Oo(e)}),qf=cv,xn=eo(o(ro,2,Ue)),kc=L(dt,0,xn,pt,pt),Dc=Iu,Bc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ac=vv,bt=Hu,Me=$(function(e,r){return I(e,r)>0?e:r}),Zf=function(e){return{$:0,a:e}},no=Ou,Xf=$(function(e,r){e:for(;;){var n=o(no,Ue,e),a=n.a,t=n.b,i=o(B,Zf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),Kf=function(e){var r=e.a;return r},Qf=$(function(e,r){e:for(;;){var n=eo(r/Ue);if(n===1)return o(no,Ue,e).a;var a=o(Xf,e,P),t=n;e=a,r=t;continue e}}),Fc=$(function(e,r){if(r.l){var n=r.l*Ue,a=Ac(o(ro,Ue,n-1)),t=e?Ve(r.z):r.z,i=o(Qf,t,r.l);return L(dt,bt(r.p)+n,o(Me,5,a*xn),i,r.p)}else return L(dt,bt(r.p),xn,pt,r.p)}),es=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Fc,!1,{z:a,l:n/Ue|0,p:t});var i=Bc(p(Dc,Ue,r,e)),c=e,l=r-Ue,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),rs=$(function(e,r){if(e<=0)return kc;var n=e%Ue,a=p(Dc,n,e-n,r),t=e-n-Ue;return C(es,r,t,e,P,a)}),Oe=function(e){return!e.$},D=Rv,X=Av,k=Ev,se=Fv,ua=jv,ns=Nv,De=Bv,ao=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Er("div"),as=function(e){return{$:2,a:e}},Vc=$(function(e,r){return e}),Uc=$(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),zr=function(e){return e},ts=zr,ui=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),os=wv,Tr=bv,Or=Sv,Mn=$(function(e,r){return e<1?r:p(Or,e,Tr(r),r)}),Ta=Pv,za=function(e){return e===""},Ma=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Ec=Tv,vi=ge(function(e,r,n,a,t){if(za(t)||o(os,"@",t))return q;var i=o(Ta,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Ec(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(ui,e,o(Ma,c,t),u,r,n,a))}else return re(_e(ui,e,t,q,r,n,a))}),$i=U(function(e,r,n,a){if(za(a))return q;var t=o(Ta,"/",a);if(t.b){var i=t.a;return C(vi,e,o(Mn,i,a),r,n,o(Ma,i,a))}else return C(vi,e,"/",r,n,a)}),fi=S(function(e,r,n){if(za(n))return q;var a=o(Ta,"?",n);if(a.b){var t=a.a;return L($i,e,re(o(Mn,t+1,n)),r,o(Ma,t,n))}else return L($i,e,q,r,n)});$(function(e,r){if(za(r))return q;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(fi,e,re(o(Mn,a+1,r)),o(Ma,a,r))}else return p(fi,e,q,r)});var is=Lv,to=function(e){},kn=Ur,cs=kn(0),Rc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Pa,e,r,Ve(m)):L(Rc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=S(function(e,r,n){return L(Rc,e,r,0,n)}),ee=$(function(e,r){return p(mr,$(function(n,a){return o(B,e(n),a)}),P,r)}),va=$t,oo=$(function(e,r){return o(va,function(n){return kn(e(n))},r)}),ls=S(function(e,r,n){return o(va,function(a){return o(va,function(t){return kn(o(e,a,t))},n)},r)}),us=function(e){return p(mr,ls(B),kn(P),e)},vs=Kv,$s=$(function(e,r){var n=r;return rc(o(va,vs(e),n))}),fs=S(function(e,r,n){return o(oo,function(a){return 0},us(o(ee,$s(e),r)))}),ss=S(function(e,r,n){return kn(0)}),ms=$(function(e,r){var n=r;return o(oo,e,n)});rr.Task=Zv(cs,fs,ss,ms);var ds=ac("Task"),io=$(function(e,r){return ds(o(oo,e,r))}),ps=D$,bs=mv,$a={$:1},jc=function(e){return{$:2,a:e}},ka={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},gs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Nc=function(e){var r=e.b;return o(We,ka,r)},_r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),hs=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Nc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,tn(n).b7)>0?o(te,gs,_r(o(We,$a,t))):zr)(o(We,jc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Uc,l.eA,Qe(r,{b7:l.b7+r.eJ})),s=o(e,v,u);return o(We,ka,{B:z(v,s),ab:P,T:o(B,t.B,t.T)})}}),Wc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),_s=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=$(function(e,r){return Ve(p(_s,e,r,P))}),Yc=S(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,y=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(ys,r-4,y))))):o(B,_,o(B,c,o(B,s,o(B,b,p(Yc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Ss=$(function(e,r){return p(Yc,0,e,r)}),xs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ve(n),ve(h([a]),t)),c=o(Ss,e,i),l=o(Wc,e,i);if(l.b){var u=l.a,v=l.b;return o(We,$a,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var m=s.a,d=s.b;return o(We,$a,{B:m,ab:P,T:d})}else return r}}),Cs=function(e){var r=e.b;return o(We,$a,r)},ws=function(e){var r=e.b;return o(We,jc({cY:tn(e).b7}),r)},Ls=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return Nc(r);case 3:return ws(r);default:var n=e.a;return o(xs,n,r)}}),Gc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ps=$(function(e,r){return Qe(r,{av:e(r.av)})}),Ts=function(e){return{$:3,a:e}},zs=function(e){return{$:2,a:e}},Ms=$(function(e,r){return{$:0,a:e,b:r}}),ks=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},co=zv,Ds=S(function(e,r,n){return o(_r,0/0,co(o(e,r,n)))}),Hc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Bs=hv,Ic=function(e){return p(Bs,B,P,e)},As=$(function(e,r){var n=o(Hc,function(a){return a!=="0"&&a!=="."},Ic(r));return ve(e&&n?"-":"",r)}),oe=Ki,gt=dv,Oc=Dv,Jc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(gt,"0",Jc(t))}else{var i=nr(r);return i>=48&&i<57?o(gt,Oc(i+1),n):"0"}},ht=lv,Fs=sv,Da=function(e){return o(gt,e,"")},qc=S(function(e,r,n){return e<=0?n:p(qc,e>>1,ve(r,r),e&1?ve(n,r):n)}),Cn=$(function(e,r){return p(qc,e,r,"")}),_t=S(function(e,r,n){return ve(n,o(Cn,e-Tr(n),Da(r)))}),yt=gv,Zc=function(e){var r=o(Qt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Vs=function(e){var r=o(Qt,"e",oe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Ec(o(is,"+",t)?o(Mn,1,t):t)),c=Zc(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(_r,"0",o(Fe,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Fe,Gc(Da),an(ve(o(Cn,O(i),"0"),v))))):p(_t,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Us=S(function(e,r,n){if(ht(n)||Fs(n))return oe(n);var a=n<0,t=Zc(Vs(O(n))),i=t.a,c=t.b,l=Tr(i)+r,u=ve(o(Cn,-l+1,"0"),p(_t,l,"0",ve(i,c))),v=Tr(u),s=o(Me,1,l),m=o(e,a,p(Or,s,v,u)),d=p(Or,0,s,u),f=m?yt(o(_r,"1",o(Fe,Jc,an(yt(d))))):d,g=Tr(f),b=f==="0"?f:r<=0?ve(f,o(Cn,O(r),"0")):I(r,Tr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):ve(i+".",p(_t,r,"0",c));return o(As,a,b)}),Xc=Us($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Es=Ds(Xc),Rs=S(function(e,r,n){var a=o(ro,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),Kc=Xu,Qc=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Kc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Xr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return C(G,0,r,n,C(G,1,v,s,m,d),C(G,1,i,c,l,u))}else return C(G,e,i,c,C(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,y=f.d,x=f.e,d=a.e;return C(G,0,v,s,C(G,1,g,b,y,x),C(G,1,r,n,d,t))}else return C(G,e,r,n,a,t)}),St=S(function(e,r,n){if(n.$===-2)return C(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Kc,e,t);switch(u){case 0:return C(Xr,a,t,i,p(St,e,r,c),l);case 1:return C(G,a,t,r,c,l);default:return C(Xr,a,t,i,c,p(St,e,r,l))}}),Zn=S(function(e,r,n){var a=p(St,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(G,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},el=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,y=d.e,x=v.e;return C(G,0,f,g,C(G,1,n,a,C(G,0,i,c,l,u),b),C(G,1,s,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,x=w.e;return C(G,1,n,a,C(G,0,i,c,l,u),C(G,0,s,m,d,x))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,y=f.d,x=f.e;return C(G,0,i,c,C(G,1,u,v,s,m),C(G,1,n,a,d,C(G,0,g,b,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var g=M.b,b=M.c,y=M.d,x=M.e;return C(G,1,n,a,C(G,0,i,c,w,d),C(G,0,g,b,y,x))}else return e},Ns=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(G,n,l,u,v,C(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),Xn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(G,r,n,a,Xn(t),l);var u=el(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(Xr,v,s,m,Xn(d),f)}else return or}else return C(G,r,n,a,Xn(t),l)}else return or},gn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(G,n,a,t,o(gn,e,i),c);var u=el(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(Xr,v,s,m,o(gn,e,d),f)}else return or}else return C(G,n,a,t,o(gn,e,i),c);else return o(Ws,e,Rt(Ns,e,r,n,a,t,i,c))}),Ws=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=js(c);if(l.$===-1){var u=l.b,v=l.c;return C(Xr,n,u,v,i,Xn(c))}else return or}else return C(Xr,n,a,t,i,o(gn,e,c))}else return or}),Ys=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(G,1,a,t,i,c)}else{var l=n;return l}}),jn=S(function(e,r,n){var a=r(o(Qc,e,n));if(a.$)return o(Ys,e,n);var t=a.a;return p(Zn,e,t,n)}),Gs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(ks,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ms,z(i,c),p(Rs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===3?Ts(n):a}));default:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===2?zs(n):a}))}},Hs=function(e){return Ps(Gs(e))},Is=$(function(e,r){return o(ee,Hs(e),r)}),Os=$(function(e,r){return Qe(r,{eA:o(Is,e,r.eA)})}),Js=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Qe(a,{B:o(Gc,Os(e),a.B)}))}),qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Zs=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Qe(t,{B:o(qs,o(e,i.a,r),i)}))}),Xs=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(hs,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(Js,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Ls,l,a.G)})}}),Ks=$(function(e,r){return o(We,ka,{B:z(e,r(e)),ab:P,T:P})}),Qs=Qv,mi=Qs(P),fa=Uv,wn=Vv,em=t$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",X))},o(k,"control",X))},o(k,"down",X))},o(k,"downs",fa(wn)))},o(k,"left",X))},o(k,"pressedKeys",fa(wn)))},o(k,"right",X))},o(k,"shift",X))},o(k,"up",X))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",X))},o(k,"isDown",X))},o(k,"move",X))},o(k,"rightDown",X))},o(k,"rightUp",X))},o(k,"up",X))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),rm=function(e){return{$:4,a:e}},nm={$:0},am=ec,Ie=$(function(e,r){return o(ic,e,am(r))}),H=Ie("className"),tm=function(e){var r=e.b.B;return r.b},sa=Ie("id"),om=v$,ma=om,im=$$,ne=im,cm={$:1},lm=function(e){return{$:3,a:e}},um=function(e){return{$:5,a:e}},di=Er("a"),lo=Er("button"),pi=function(e){return o(Ie,"href",m$(e))},vm=Cr("clip-rule"),we=Cr("d"),$m=Cr("fill"),rl=tc("http://www.w3.org/2000/svg"),fm=rl("svg"),sm=Cr("viewBox"),mm=o(f$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=fm(h([sm("0 0 24 24"),$m("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),mm("http://www.w3.org/2000/svg")])),dm=Cr("fill-rule"),Le=rl("path"),Mr={eD:Ee(h([o(Le,h([we("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(h([o(Le,h([we("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(h([o(Le,h([we("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(h([o(Le,h([we("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([we("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(h([o(Le,h([we("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([we("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(h([o(Le,h([we("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(h([o(Le,h([we("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(h([o(Le,h([we("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(h([o(Le,h([we("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(h([o(Le,h([dm("evenodd"),vm("evenodd"),we("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(h([o(Le,h([we("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(h([o(Le,h([we("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},pm=function(e){return{$:0,a:e}},nl=oc,al=$(function(e,r){return o(nl,e,pm(r))}),uo=function(e){return o(al,"click",De(e))},bi=Ie("target"),bm=Ie("title"),xt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(G,n,a,o(e,a,t),o(xt,e,i),o(xt,e,c))}),gm=ft,$r=gm,hm=function(e){return p(Xt,S(function(r,n,a){return o(B,n,a)}),P,e)},_m=$(function(e,r){return{$:3,a:e,b:r}}),ym=$(function(e,r){return{$:2,a:e,b:r}}),Sm=$(function(e,r){return{$:0,a:e,b:r}}),xm=$(function(e,r){return{$:1,a:e,b:r}}),wr=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Cm=L(wr,0/255,0/255,0/255,1),wm=ec,tl=$(function(e,r){return o(ic,e,wm(r))}),Lm=tl("checked"),Ze=$v,Pm=S(function(e,r,n){return ve(o(Cn,e-Tr(n),Da(r)),n)}),da=rv,ol=function(e){var r=function(n){return n<10?Ae(n):Da(Oc(87+n))};return e<16?r(e):ve(ol(e/16|0),r(o(da,16,e)))},Tm=o(te,ol,o(Pm,2,"0")),vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},zm=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return o(Pr,"",o(B,"#",o(ee,o(te,Ze,Tm),h([n*255,a*255,t*255]))))},Ct=Ie("htmlFor"),wt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Mm=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),il=$(function(e,r){return p(mr,Mm(e),P,r)}),cl=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),km=U$,Dm=Mv,Bm=$(function(e,r){if(r.$)return ye(e);var n=r.a;return $e(n)}),Am=V$,Fm=function(e){return o(Am,{ew:!1,fg:!1},e)},ll=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Vm=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return $e(e(n))}}),Um=function(e){return{$:2,a:e}},Em=function(e){return{$:0,a:e}},Rm=function(e){return{$:1,a:e}},Wa=$(function(e,r){return nr(r)-nr(e)}),Ya=S(function(e,r,n){var a=nr(n);return I(nr(e),a)<1&&I(a,nr(r))<1}),jm=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):ye(Rm(r))},a=p(Ya,"0","9",r)?$e(o(Wa,"0",r)):p(Ya,"a","z",r)?$e(10+o(Wa,"a",r)):p(Ya,"A","Z",r)?$e(10+o(Wa,"A",r)):ye(Em(r));return o(pa,n,a)}),ul=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return $e(c+l*e)},o(ul,e,i))},o(jm,e,t))}),Nm=$(function(e,r){return 2<=e&&e<=36?o(ul,e,yt(r)):ye(Um(e))}),Wm=Nm(16),vl=S(function(e,r,n){return L(wr,e,r,n,1)}),Ym=U(function(e,r,n,a){return L(wr,e,r,n,a)}),Dn=ev,Gm=$(function(e,r){var n=o(Dn,10,e);return Ze(r*n)/n}),Hm=xv,Im=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ic(n);if(a.b&&!a.b.b){var t=a.a;return Dm(h([t,t]))}else return n};return o(te,Hm,o(te,function(n){return o(Fe,function(a){return p(km,1,a,n)},Fm(e))},o(te,wt(ll),o(te,Fe(function(n){return n.fG}),o(te,Fe(il(zr)),o(te,Bm("Parsing hex regex failed"),pa(function(n){var a=o(ee,o(te,r,o(te,Wm,Vm(qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(Ym,t/255,c/255,u/255,o(Gm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(vl,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ba=Er("input"),Lt=Er("label"),Pt=Ie("name"),$l=$(function(e,r){return p(mr,k,r,e)}),Om=o($l,h(["target","checked"]),X),Jm=function(e){return o(al,"change",o(ua,e,Om))},qm=function(e){return z(e,!0)},Zm=function(e){return{$:1,a:e}},Xm=$(function(e,r){return o(nl,e,Zm(r))}),Km=o($l,h(["target","value"]),wn),$o=function(e){return o(Xm,"input",o(ua,qm,o(ua,e,Km)))},fl=Ie("max"),sl=Ie("min"),ml=function(e){return o(Ie,"step",e)},ga=Ie("type"),fo=Ie("value"),gi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,P,h([o(Lt,h([Ct(r)]),h([o(J,h([H("relative w-full")]),h([o(J,h([H("inline-block")]),h([$r(r)])),o(J,h([H("inline-block float-right")]),h([$r(oe(n))]))]))])),o(ba,h([ga("range"),o(ne,"width","100%"),sa(r),Pt(r),sl(oe(a)),fl(oe(t)),fo(oe(n)),ml(oe(i)),$o(o(te,co,o(te,_r(42),c)))]),P)]))},Qm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ed=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([H("h-12 py-4")]),h([o(Lt,h([H("block"),Ct(e)]),h([o(ba,h([H("relative bottom-[1px] align-middle mr-2"),ga("checkbox"),sa(e),Pt(e),Jm(_m(e)),Lm(c)]),P),$r(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return gi({cg:e,cs:i,cw:t,cA:Sm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return gi({cg:e,cs:i,cw:t,cA:o(te,Ze,xm(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,h([o(J,h([o(ne,"margin-bottom","6px")]),h([o(Lt,h([Ct(e)]),h([$r(e)]))])),o(ba,h([ga("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),sa(e),Pt(e),$o(function(l){return o(ym,e,o(Qm,Cm,Im(l)))}),fo(zm(c))]),P)]))}}),rd=function(e){return o(J,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([H("text-lg pb-2")]),h([$r(e.fh)])),o(J,h([H("pl-2 pr-2")]),hm(o(xt,ed,e.av)))]))},nd=function(e){return o(J,h([H("text-xs text-white60")]),o(ee,rd,e))},ad=function(e){return o(J,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([$r("clock: "+o(Xc,3,tn(e).b7))]))},td=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return Ze(60/(tn(e).b7-n))},o(Fe,o(te,Kf,function(n){return n.b7}),ll(o(Wc,59,r))))},od=function(e){return o(J,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=td(e);if(r.$===1)return h([$r("... Fps")]);var n=r.a;return h([$r(Ae(n)+" Fps")])}())},id=function(e){return{$:0,a:e}},cd=function(e){var r=e.b.T;return Ar(r)},ld=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},ud=function(e){return o(ba,h([H("absolute w-full"),ga("range"),sl(Ae(0)),fl(Ae(ld(e)-1)),fo(Ae(cd(e))),ml(Ae(1)),$o(o(te,co,o(te,_r(42),o(te,Ze,id))))]),P)},hi={$:1},_i={$:3},yi={$:2},Tt=function(e){return!e.b},dl=tl("disabled"),Ga=S(function(e,r,n){return o(lo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),dl(e),uo(r)]),h([$r("REC")]))}),Ha=S(function(e,r,n){return o(lo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),dl(e),uo(n)]),h([o(J,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),vd=function(e){var r=e.a,n=e.b.ab;return o(J,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(Ga,!1,hi,"text-red-500 font-bold");case 1:return p(Ga,!1,yi,"text-white60 hover:text-white80 font-bold");default:return p(Ga,!0,yi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ha,Tt(n),Mr.fq,_i);case 1:return p(Ha,Tt(n),Mr.fq,_i);default:return p(Ha,!1,Mr.fp,hi)}}()]))},$d=function(e){return o(J,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([ud(e),vd(e),od(e),ad(e)]))},fd=function(e){var r=e.a;return hr(r,ka)},sd=$(function(e,r){var n=fd(r.G)?o(J,P,P):o(J,h([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fs.fU+.5*e.cT.fS)+"px"),o(ne,"top",oe(-e.fs.fY+.5*e.cT.eW)+"px")]),h([o(J,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Mr.fs]))]));return o(J,P,h([n]))}),md=$(function(e,r){var n=o(lo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),uo(cm),bm("Distraction Free Mode")]),h([Mr.f0])),a=40,t=260,i=o(J,h([H("absolute w-8 bottom-12")]),h([o(di,h([H("text-twitterBlue40 hover:text-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),h([Mr.fN]))])),c=80,l=o(J,h([H("absolute w-8 bottom-2")]),h([o(di,h([H("text-githubCat40 hover:text-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),h([Mr.eQ]))])),u=e.cT.fS>640?A(e.cT.eW,a+t,e.cT.fS-(a+t)):A(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(J,h([H("fixed w-10 h-10 p-1")]),h([n])):o(J,P,h([o(J,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),h([n,i,l])),o(J,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),h([o(ma,lm,nd(tn(r.G).eA))])),o(J,h([H("absolute bottom-0"),o(ne,"left",oe(s)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(m)+"px")]),h([o(ma,um,$d(r.G))])),o(sd,e,r)]))}),dd=S(function(e,r,n){var a=tm(n.G),t=tn(n.G);return o(J,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",oe(t.cT.fS)+"px"),o(ne,"height",oe(t.cT.eW)+"px")]),h([o(J,h([H("fixed")]),h([o(ma,Vc(nm),o(e,t,a))])),o(J,h([sa("gui")]),h([o(md,t,n),o(ma,rm,o(r,t,a))]))]))}),pd=He(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Xs,r,i,u,v),mi)}),l=function(u){var v=o(Uc,n,u.e1);return z({aL:u.e1.cT.fS<500,G:o(Ks,v,a)},mi)};return ps({e0:l,fH:Vc(em(as)),fO:c,fQ:o(dd,e,t)})}),bd=U(function(e,r,n,a){return _e(pd,e,r,n,a,$(function(t,i){return o(J,P,P)}),S(function(t,i,c){return c}))}),gd=S(function(e,r,n){return L(bd,e,r,P,n)}),hd=function(e){return{}},_d=$(function(e,r){return r}),yd=iv,br=fv,Sd=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Me,O(c),o(Me,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,m=br(s*s+v*v+u*u);return re({fU:s/m,fY:v/m,c6:u/m})}else return q}),Ia=function(e){return e},so=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Kn=function(e){var r=e,n=o(Me,O(r.fU),o(Me,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},ha=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),xd=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),pl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Cd=$(function(e,r){var n=e,a=r;return I(a,n)<0}),wd=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Ld=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),Pd=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},qe=0,bl={fU:0,fY:0,c6:0},Td=S(function(e,r,n){return o(wt,function(a){var t=o(wd,o(Ld,a,r),r);return o(wt,function(i){var c=o(so,r,e),l=o(xd,n,c),u=o(pl,qe,l)?c:o(Cd,qe,l)?Pd(c):bl;return o(Fe,function(v){return A(a,i,v)},Kn(u))},Kn(t))},Kn(e))}),zd=function(e){var r=e,n=O(r.c6),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=br(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=br(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=br(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=br(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},mo=function(e){var r=zd(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return z(r,c)},Jr=function(e){var r=e;return r},fr=function(e){return e},Md=$(function(e,r){var n=mo(e),a=n.a,t=n.b;return fr({cB:r,c4:a,c5:t,c7:e})}),kd=function(e){var r=o(ha,e.aR,e.dj),n=Jr(e.ei),a=o(so,r,n),t=p(Td,r,n,a);if(t.$){var v=Kn(r);if(v.$){var m=mo(e.ei),d=m.a,f=m.b;return fr({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Md,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return fr({cB:e.dj,c4:u,c5:l,c7:c})}},Rr={fU:0,fY:0,c6:0},Dd=function(e){return{$:0,a:e}},xe=function(e){var r=e;return O(r)},Qn=function(e){var r=e;return .5*r},Bd=ov,Ad=function(e){var r=e;return Bd(r)},Fd=function(e){var r=Qn(xe(e.ej)),n=Ad(r);return{cM:Dd(n),c2:e.c2}},ur=function(e){return e},Ba=ur({fU:0,fY:1,c6:0}),Kr=function(e){return e},Vd=function(e){var r=e.aR,n=e.dj,a=e.ei;return Fd({ej:Kr(2*yd(.5)),c2:kd({dj:Ia(n),aR:Ia(r),ei:o(_r,Ba,o(Sd,Rr,Ia(a)))})})},Ud=Vd({dj:{fU:0,fY:10,c6:30},aR:{fU:0,fY:10,c6:0},ei:{fU:0,fY:1,c6:0}}),Ed=L(wr,114/255,159/255,207/255,1),Rd=L(wr,52/255,101/255,164/255,1),jd=L(wr,115/255,210/255,22/255,1),po=function(e){return{$:5,a:e}},gl=function(e){return po(e)},bo=$(function(e,r){return{$:4,a:e,b:r}}),hl=function(e){return e},on=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Nd=$(function(e,r){return hl(z(e,o(on,r,e)))}),_l=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Wd=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(_l,e(n),e(a),e(t))}),ar=function(e){return e},Oa=$(function(e,r){return o(bo,e,o(Nd,Rr,o(Wd,ar,r)))}),Yd=L(wr,204/255,0/255,0/255,1),Gd=gl(h([o(Oa,Yd,A(100,0,0)),o(Oa,jd,A(0,100,0)),o(Oa,Rd,A(0,0,100))])),go=$(function(e,r){return{$:0,a:e,b:r}}),Ja=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vr=$(function(e,r){var n=e,a=r;return a-n}),Hd=ur({fU:-1,fY:0,c6:0}),Id=ur({fU:0,fY:-1,c6:0}),yl=ur({fU:0,fY:0,c6:-1}),Sl=ur({fU:1,fY:0,c6:0}),ho=ur({fU:0,fY:0,c6:1}),pe=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Od=He(function(e,r,n,a,t,i){var c=o(Ja,n,i)?ho:yl,l=o(Ja,r,t)?Ba:Id,u=o(Ja,e,a)?Sl:Hd,v=A(xe(o(vr,e,a)),xe(o(vr,r,t)),xe(o(vr,n,i))),s=p(pe,o(qa,e,a),o(qa,r,t),o(qa,n,i)),m=fr({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),kr=function(e){var r=e;return r.fU},Dr=function(e){var r=e;return r.fY},Br=function(e){var r=e;return r.c6},Jd=$(function(e,r){return _e(Od,kr(e),Dr(e),Br(e),kr(r),Dr(r),Br(r))}),zt=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),qd=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(go,e,o(Jd,p(zt,-c,-l,-u),p(zt,c,l,u)))}),Zd=U(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return L(wr,f,d,m,a)}),Xd=S(function(e,r,n){return L(Zd,e,r,n,1)}),Mt=function(e){return{$:0,a:e}},xl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Cl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Za=function(e){return p(Cl,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},Bn=j$,Kd=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(Bn,Za(n),Za(a),Za(t))},wl=function(e){return p(xl,0,Mt(Kd(e)),Mt(0))},_o=$(function(e,r){return{$:2,a:e,b:r}}),Ll=$(function(e,r){return{$:3,a:e,b:r}}),Pl=$(function(e,r){return{$:1,a:e,b:r}}),Qd=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),e0=function(e){var r=e;return r},yo=function(e){var r=e;return e0(r.er)},So=function(e){var r=e;return r.aK},cn=function(e){var r=e;return r.cB},jr=function(e){var r=e;return r.c4},Nr=function(e){var r=e;return r.c5},Wr=function(e){var r=e;return r.c7},r0=$(function(e,r){return fr({cB:o(on,e,cn(r)),c4:jr(r),c5:Nr(r),c7:Wr(r)})}),n0=$(function(e,r){return{er:o(r0,e,yo(r)),aK:So(r)}}),Aa=$(function(e,r){return{eH:r,cB:e}}),a0=$(function(e,r){var n=r;return o(Aa,o(on,e,n.cB),n.eH)}),t0=$(function(e,r){var n=r;return{k:o(a0,e,n.k),e9:n.e9,fu:n.fu}}),xo=function(e){var r=e;return r},Tl=$(function(e,r){var n=xo(r),a=n.a,t=n.b;return hl(z(e(a),e(t)))}),o0=$(function(e,r){return o(Tl,on(e),r)}),Co=function(e){var r=e;return r.ey},wo=function(e){var r=e;return r.fu},zl=$(function(e,r){return{ey:r,fu:xe(e)}}),i0=$(function(e,r){return o(zl,wo(r),o(on,e,Co(r)))}),Ml=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),c0=$(function(e,r){return o(Ml,on(e),r)}),kl=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Qd,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(go,s,o(n0,i,c));case 1:var s=r.a,l=r.b;return o(Pl,s,o(c0,i,l));case 3:var s=r.a,u=r.b;return o(Ll,s,o(i0,i,u));case 2:var s=r.a,v=r.b;return o(_o,s,o(t0,i,v));case 4:var s=r.a,m=r.b;return o(bo,s,o(o0,i,m));default:var d=r.a;return po(o(ee,kl(A(n,a,t)),d))}}),Dl=function(e){return kl(A(0,e,0))},Vr=av,Qr=tv,ea=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=Qr(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,g=s.fY*u,b=l*g,y=m*g,x=g*g,_=1-2*(f+x),w=s.c6*u,M=l*w,N=2*(y-M),R=2*(y+M),E=m*w,j=2*(E+b),W=2*(E-b),F=g*w,Z=2*(F-d),K=2*(F+d),ce=w*w,fe=1-2*(x+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+N*i.fY+j*i.c6,fY:R*i.fU+ie*i.fY+Z*i.c6,c6:W*i.fU+K*i.fY+_*i.c6}}),An=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=Qr(c),v=a.cB,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c6-s.c6,g=a.eH,b=g,y=b.fU*u,x=l*y,_=y*y,w=b.fY*u,M=l*w,N=y*w,R=w*w,E=1-2*(_+R),j=b.c6*u,W=l*j,F=2*(N-W),Z=2*(N+W),K=y*j,ce=2*(K+M),fe=2*(K-M),ie=w*j,de=2*(ie-x),ke=2*(ie+x),Ce=j*j,dr=1-2*(R+Ce),pr=1-2*(_+Ce);return{fU:s.fU+dr*m+F*d+ce*f,fY:s.fY+Z*m+pr*d+de*f,c6:s.c6+fe*m+ke*d+E*f}}),l0=S(function(e,r,n){return fr({cB:p(An,e,r,cn(n)),c4:p(ea,e,r,jr(n)),c5:p(ea,e,r,Nr(n)),c7:p(ea,e,r,Wr(n))})}),u0=S(function(e,r,n){return{er:p(l0,e,r,yo(n)),aK:So(n)}}),v0=$(function(e,r){var n=o(An,e,r),a=o(ea,e,r);return function(t){var i=t;return o(Aa,n(i.cB),a(i.eH))}}),$0=S(function(e,r,n){var a=n;return{k:p(v0,e,r,a.k),e9:a.e9,fu:a.fu}}),f0=S(function(e,r,n){return o(Tl,o(An,e,r),n)}),s0=S(function(e,r,n){return o(zl,wo(n),p(An,e,r,Co(n)))}),m0=S(function(e,r,n){return o(Ml,o(An,e,r),n)}),Bl=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(go,l,p(u0,e,r,a));case 1:var l=n.a,t=n.b;return o(Pl,l,p(m0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ll,l,p(s0,e,r,i));case 2:var l=n.a,c=n.b;return o(_o,l,p($0,e,r,c));case 4:var l=n.a,u=n.b;return o(bo,l,p(f0,e,r,u));default:var v=n.a;return po(o(ee,o(Bl,e,r),v))}}),Lo=Ba,d0=o(Aa,Rr,Lo),Si=$(function(e,r){return p(Bl,d0,Kr(e),r)}),Al=$(function(e,r){return(r-Ac(r/e)*e)/e}),p0=$(function(e,r){return 360*o(Al,e,r)}),en=nv,b0=function(e){return 2*en*e},g0=U(function(e,r,n,a){return e+(r-e)*(1+Vr(b0(o(Al,n,a))))/2}),h0=$(function(e,r){var n=L(g0,.2,.8,10,e.b7);return o(Si,o(p0,1e3,e.b7),o(Si,.1*r,o(Dl,r*1.1,o(qd,wl(p(Xd,n,.5,.5)),A(r,1,r)))))}),_0=function(e){return gl(o(ee,h0(e),o(Fr,1,18)))},y0=S(function(e,r,n){return{k:o(Aa,e,r),e9:xe(n.e9),fu:xe(n.fu)}}),S0=S(function(e,r,n){return o(_o,e,p(y0,Rr,Ba,{e9:ar(n),fu:ar(r)}))}),x0=o(Dl,-1.001,p(S0,wl(p(vl,.294,.588,.478)),30,1)),C0=$(function(e,r){return h([Gd,x0,_0(e)])}),w0=function(e){return e},L0=function(e){return ar(.01*e)},xi=function(e){return e},P0=function(e){return e},T0=function(e){return{$:0,a:e}},z0=T0,M0={$:3},k0=M0,D0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),B0=D0,A0=$(function(e,r){return r.b?p(mr,B,r,e):e}),Ye=function(e){return p(mr,A0,P,e)},Po=$(function(e,r){return Ye(o(ee,e,r))}),F0=function(e){return{$:1,a:e}},V0=F0,U0=function(e){return o(Cr,"height",Ae(e))},E0=function(e){return l$(s$(e))},R0=E0,j0=function(e){return{$:2,a:e}},N0=j0,W0=function(e){return o(Pr,"",e)},Y0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return W0(h(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},G0=$(function(e,r){switch(r.$){case 0:return o(zf,e,r);case 1:return o(Mf,e,r);case 2:return o(kf,e,r);case 3:return o(Df,e,r);case 4:return o(Bf,e,r);default:return o(Af,e,r)}}),H0=$(function(e,r){switch(r.$){case 0:return o(tf,e,r);case 1:return o(of,e,r);case 2:return o(cf,e,r);case 3:return o(lf,e,r);case 4:return o(uf,e,r);case 5:return o(vf,e,r);case 6:return o($f,e,r);case 7:return o(ff,e,r);default:return sf(e)}}),I0=S(function(e,r,n){return p(Tf,e,r,n)}),Ci=function(e){var r=e;return r},ln=I$,Xa=L(ln,1,1,1,1),Xe=S(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),O0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),J0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(O0,n*a/t,n,n*(1-a-t)/t)}),q0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=$(function(e,r){return q0(o(J0,e,r))}),Fl=$(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=K$,Z0=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ka=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(ln,a.bX,a.bX,a.bX,i);return _e(t,e,c,Z0(a),a.dp,r,n)}),Vl=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Fl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(B,C(Ka,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var y=t.b,x=o(B,C(Ka,e,r,n,a,y),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,w=o(B,C(Ka,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(Pa,L(Vl,e,r,n,a),i,M)}}),X0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ul=X0,zo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),K0=function(e){var r=e.Z,n=e.W,a=e.V;return L(zo,518,r,n,a)},Q0=$(function(e,r){return{$:6,a:e,b:r}}),ep=Q0,El=h([K0({V:1,W:0,Z:!1}),L(Ul,!1,!1,!1,!1),o(ep,0,1)]),rn=519,Mo=8,Rl=15,qr=7681,rp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=af,np=$(function(e,r){return{$:0,a:e,b:r}}),ap=np({df:1,$7:0,dV:5}),Be=E$,tp=ap(h([{bT:o(Be,-1,-1)},{bT:o(Be,1,-1)},{bT:o(Be,-1,1)},{bT:o(Be,1,1)}])),op={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},ip=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},ko=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(ip,a,t,i)))}),Do=function(e){return p(ko,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Bo=function(e){return C(ae,h([Do(e),L(Ul,!1,!1,!1,!1)]),op,rp,tp,{})},cp=Bo({a8:qr,cp:0,cO:Mo,bl:rn,c3:Rl,bt:qr,bu:qr}),lp=516,wi=5386,Se=7680,up=function(e){return o(Dn,2,e+4)},jl=function(e){return Bo({a8:Se,cp:Rl,cO:Mo,bl:lp,c3:up(e),bt:wi,bu:wi})},vp=S(function(e,r,n){return Ye(h([p(Xe,e,n,El),h([jl(r),cp])]))}),$p=$(function(e,r){return Ye(o(Tc,vp(e),r))}),fp=function(e){var r=e.Z,n=e.W,a=e.V;return L(zo,513,r,n,a)},sp=fp({V:1,W:0,Z:!0}),mp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},dp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return mp(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},pp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Li=$(function(e,r){var n=e,a=r;return p(pp,32774,n,a)}),bp=1,Pi=771,gp=770,Ao=dp({bv:0,aH:o(Li,bp,Pi),by:0,bA:o(Li,gp,Pi),bF:0,bV:0}),Yr=h([sp,Ao]),hp=function(e){var r=e;return r.dO},_p=function(e){var r=e;return r.dP},Nl=function(e){var r=e;return r.dQ},yp=function(e){var r=e;return r.dR},Sp=function(e){var r=e;return r.dS},Wl=function(e){var r=e;return r.dT},Yl=function(e){return A(o(vr,yp(e),hp(e)),o(vr,Sp(e),_p(e)),o(vr,Wl(e),Nl(e)))},Ti=function(e){var r=e;return cn(r)},xp=function(e){return e},Cp=function(e){return fr({cB:xp({fU:e.H,fY:e.I,c6:e.J}),c4:ur({fU:e.q,fY:e.r,c6:e.s}),c5:ur({fU:e.t,fY:e.u,c6:e.v}),c7:ur({fU:e.w,fY:e.x,c6:e.y})})},Qa=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Gl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Hl=$(function(e,r){return{cB:o(Gl,e,cn(r)),c4:o(Qa,e,jr(r)),c5:o(Qa,e,Nr(r)),c7:o(Qa,e,Wr(r))}}),_a=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Me,n,a)}),ra=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),wp=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},Lp=function(e){var r=e;return A(r.fU,r.fY,r.c6)},hn=$(function(e,r){var n=e,a=r;return a+n}),Pp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qn(xe(a)),c=Qn(xe(n)),l=Qn(xe(t)),u=Lp(r),v=u.a,s=u.b,m=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,m),dR:o(vr,c,v),dS:o(vr,i,s),dT:o(vr,l,m)}}),zi=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=Ge(Wr(e)),d=O(l*m.fU)+O(c*m.fY)+O(i*m.c6),f=Ge(Nr(e)),g=O(l*f.fU)+O(c*f.fY)+O(i*f.c6),b=Ge(jr(e)),y=O(l*b.fU)+O(c*b.fY)+O(i*b.c6),x=o(Pp,A(y,g,d),o(Gl,e,p(zt,s,v,u)));if(a.$)return re(x);var _=a.a;return re(o(wp,_,x))}),kt=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 1:var c=t.a,l=L(zi,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 2:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 3:var c=t.a,l=L(zi,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 4:var u=t.a,f=e,g=r,b=L(kt,e,r,n,u),y=i;e=f,r=g,n=b,a=y;continue e;default:var v=t.a,s=t.b,m=o(Hl,Cp(v),e),d=r*v.bX,f=e,g=r,b=L(kt,m,d,n,h([s])),y=i;e=f,r=g,n=b,a=y;continue e}}else return n}),un=N$,vn=W$,$n=Y$,Il=function(e){return{$:4,a:e}},Tp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Il(o(Tp,e,P))},zp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Mp=function(e){var r=e;return r},Mi=Bo({a8:qr,cp:0,cO:Mo,bl:rn,c3:255,bt:qr,bu:qr}),kp=function(e){var r=e,n=o(Me,O(r.fU),o(Me,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return c*n}else return qe},Pe={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=z({bd:o(je,Pe,Pe),bK:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe)},L(ln,0,0,0,0)),le=$(function(e,r){var n=r;return e*n}),ki=function(e){var r=e;return-r},Ol=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return L(zo,515,r,n,a)},ql=240,Dp=h([Jl({V:1,W:0,Z:!0}),Do({a8:Se,cp:ql,cO:0,bl:Ol,c3:0,bt:Se,bu:Se}),Ao]),Bp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=xe(a),l=c,u=xe(t),v=u,s=n.cM;if(s.$){var d=s.a;return ht(v)?er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return ht(v)?er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Nn=$(function(e,r){return(1&e>>r)===1?0:1}),Ap=function(e){return h([Jl({V:1,W:0,Z:!0}),Do({a8:Se,cp:ql,cO:e,bl:Ol,c3:0,bt:Se,bu:Se}),Ao])},Fp=S(function(e,r,n){return Ye(o(ee,function(a){var t=a<<4,i=L(ln,o(Nn,a,0),o(Nn,a,1),o(Nn,a,2),o(Nn,a,3));return p(Xe,e,z(r,i),Ap(t))},o(Fr,1,o(Dn,2,n)-1)))}),Ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Zr=function(e){var r=e;return r},Vp=Q$,Di=function(e){var r=e;return Ln(Wr(r))},Zl=Sl,Xl=ho,Up={cB:Rr,c4:Zl,c5:Lo,c7:Xl},Fa=function(e){var r=e;return r},Ep=function(e){var r=Fa(cn(e)),n=Ge(Wr(e)),a=Ge(Nr(e)),t=Ge(jr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Rp=$(function(e,r){var n=r;return Ep(o(Hl,n,e))}),jp=function(e){return o(Rp,Up,e)},Np=function(e){var r=e;return r.c2},Wp=function(e){var r=e;return jr(r)},Yp=function(e){var r=e;return Nr(r)},Gp=function(e){var r=Np(e.ev),n=fr({cB:Ti(r),c4:Wp(r),c5:Yp(r),c7:Ln(Di(r))}),a=Fn(e.aP),t=a,i=L(kt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=jp(r),u=o(le,.99,o(ue,xe(e.aJ),ki(Nl(c)))),v=Yl(c),s=v.a,m=v.b,d=v.c,f=kp(p(_l,s,m,d)),g=o(le,1.01,o(hn,f,ki(Wl(c)))),b=o(Bp,e.ev,{eq:e.eq,eP:g,fi:u}),y=Vp(b).dM,x=y?Ge(Ln(Di(r))):Zr(Ti(r)),_=function(){var ie=e.bZ;switch(ie.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=ie.a;return z(3,de);case 4:var de=ie.a;return z(4,de);default:return z(5,0)}}(),w=_.a,M=_.b,N=e.bD,R=N,E=o(To,R,e.b$),j=E,W=er({dx:0,dy:x.fU,dz:un(j),dA:e.ec,dB:0,dC:x.fY,dD:vn(j),dE:Mp(f),dF:0,dG:x.c6,dH:$n(j),dI:w,dJ:0,dK:y,dL:0,dM:M}),F=_e(Vl,W,l,b,zp,t,{M:P,U:P,fB:P}),Z=e.bJ;switch(Z.$){case 0:var K=Z.a;return Ye(h([p(Xe,F.M,z(K,Xa),Yr),p(Xe,F.U,pn,Yr)]));case 1:var K=Z.a;return Ye(h([p(Xe,F.M,pn,Yr),h([Mi]),p(Xe,F.fB,K.bd,El),h([jl(0)]),p(Xe,F.M,z(K,Xa),Dp),p(Xe,F.U,pn,Yr)]));default:var ce=Z.a,fe=Z.b;return Ye(h([p(Xe,F.M,z(fe,Xa),Yr),h([Mi]),o($p,F.fB,ce),p(Fp,F.M,fe,Ar(ce)),p(Xe,F.U,pn,Yr)]))}},Hp=function(e){return o(Cr,"width",Ae(e))},Ip=$(function(e,r){var n=h([V0(1),N0(0),z0(!0),L(B0,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return A(n,"0",1);case 1:return A(o(B,k0,n),"1",1);default:var M=w.a;return A(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ci(v),m=o(ne,"height",Ae(s)+"px"),d=Ci(u),f=d/s,g=o(Po,function(w){return Gp({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(ne,"width",Ae(d)+"px"),y=e.aI,x=y,_=Y0(x);return p(R0,"div",h([o(ne,"padding","0px"),b,m]),h([z(i,p(I0,t,h([Hp(Ze(d*c)),U0(Ze(s*c)),b,m,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),Op=function(e){return o(Ip,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kl=function(e){return e},Bi=Kl({fU:.31271,fY:.32902}),Jp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(To,r.ce,r.b6),u=l;return{by:$n(u),ex:n,bF:vn(u),cK:0,bV:un(u),c_:1,fU:-t,fY:-i,c6:-c}}),qp=function(e){return e},Zp=function(e){return qp(1.2*o(Dn,2,e))},et=function(e){return e},Xp={$:0},Kp=Xp,Ql=function(e){return e},Ai=function(e){var r=e;return r},Qp=function(e){e:for(;;){if(hr(e.e2,qe)&&hr(e.e3,qe))return Pe;if(o(pl,xe(e.e2),xe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=O(Ai(e.e3)/en),a=O(Ai(e.e2)/en),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(To,Ql(1),e.b6),v=u;return{by:a*$n(v),ex:!1,bF:a*vn(v),cK:n/a,bV:a*un(v),c_:3,fU:i,fY:c,c6:l}}}},Fi=function(e){return Qp({b6:e.b6,e2:e.ce,e3:qe,ei:e.ei})},e1=function(e){var r=e;return r},eu=function(e){var r=p(Cl,1667,25e3,e1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kl({fU:n,fY:a})},ru=function(e){return e},r1=eu(ru(12e3)),n1=eu(ru(5600)),a1=function(e){return{$:2,a:e}},t1=function(e){return a1(e)},o1=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},Wn=function(e){var r=e;return r},i1=function(e){var r=e;return r.ex},c1=nu(pn.a),l1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(mr,n,z(P,P),r)}),u1=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},v1=Q(function(e,r,n,a,t,i,c,l){var u=o(l1,i1,h([Wn(e),Wn(r),Wn(n),Wn(a)])),v=u.a,s=u.b;if(v.b){var m=ve(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,y=b.a,x=b.b,_=x.a;return o(o1,o(ee,u1,v),{bd:o(je,d,g),bK:o(je,y,_),bL:o(je,t,i),bM:o(je,c,l)})}else return c1}else return nu({bd:o(je,e,r),bK:o(je,n,a),bL:o(je,t,i),bM:o(je,c,l)})}),$1=S(function(e,r,n){return wa(v1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),f1=function(e){var r=o(Jp,P0(e.fB),{b6:n1,eH:e.fJ,ce:et(8e4)}),n=Fi({b6:r1,ce:et(2e4),ei:e.ei}),a=Fi({b6:Bi,ce:et(15e3),ei:Ln(e.ei)}),t=p($1,r,n,a);return Op({b0:t1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Zp(15),bJ:t,bZ:Kp,b$:Bi})},au=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),s1=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),m1=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),d1=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),p1=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Fo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(p1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(s1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(d1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(m1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Vo={$:0},b1=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),m=o(me,s.dR,e),d=o(ue,s.dO,r),f=o(me,s.dS,n),g=o(ue,s.dP,a),b=o(me,s.dT,t),y=o(ue,s.dQ,i),x=c,_=v;e=m,r=d,n=f,a=g,t=b,i=y,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),g1=S(function(e,r,n){var a=_a(e(r));return wa(b1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),rt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),iu=function(e){return o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)&&o(rt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},cu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=kr(n),c=Dr(n),l=Br(n),u=kr(a),v=Dr(a),s=Br(a),m=kr(t),d=Dr(t),f=Br(t);return iu({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,d)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,s,f))})},lu=G$,Te=function(e){return lu(Fa(e))},uu=function(e){var r=e;return r},Va=function(e){return lu(uu(e))},h1=$(function(e,r){var n=e,a=r,t=o(Me,O(a.fU),o(Me,O(a.fY),O(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=br(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return bl}),_1=h1(Ql(1)),vu=S(function(e,r,n){var a=o(ha,r,n),t=o(ha,e,r);return _1(o(so,a,t))}),y1=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Va(p(vu,n,a,t));return A({o:i,bT:Te(n)},{o:i,bT:Te(a)},{o:i,bT:Te(t)})},S1=$(function(e,r){return{$:2,a:e,b:r}}),$u=S1({df:3,$7:0,dV:4}),x1=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ee,y1,e)),t=p(g1,cu,r,n);return L(au,t,e,a,0)}else return Vo},Re=S(function(e,r,n){return A(e,r,n)}),fu=function(){var e=ar(1),r=ar(1),n=ar(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(pe,i,t,a),l=o(le,.5,e),u=p(pe,i,t,l),v=o(le,.5,r),s=p(pe,i,v,a),m=p(pe,i,v,l),d=o(le,.5,n),f=p(pe,d,t,a),g=p(pe,d,v,a),b=p(pe,d,t,l),y=p(pe,d,v,l);return Fo(x1(h([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,y),p(Re,u,y,m),p(Re,f,g,y),p(Re,f,y,b),p(Re,c,m,s),p(Re,c,u,m),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,y,g),p(Re,s,m,y)])))}(),Yn={$:0},C1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),w1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(vu,u,l,c)),s={o:v,bT:Te(u)},m={o:v,bT:Te(l)},d={o:v,bT:Te(c)};return o(B,s,o(B,m,o(B,d,n)))}),L1=or,Uo=function(e){var r=e;return r.D},P1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Dt=4294967295>>>32-xn,Bt=Ju,T1=S(function(e,r,n){e:for(;;){var a=Dt&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,Dt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),z1=function(e){return e>>>5<<5},M1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,z1(n))>-1?re(o(Bt,Dt&e,i)):re(p(T1,a,e,t))}),Eo=function(e){var r=e;return r.ah},nt=$(function(e,r){return o(M1,e,Eo(r))}),k1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(P1,S(function(c,l,u){return A(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(il,r,Uo(e))},D1=S(function(e,r,n){e:for(;;){var a=o(no,Ue,e),t=a.a,i=a.b;if(I(bt(t),Ue)<0)return o(Fc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Bc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ro=function(e){return e.b?p(D1,e,P,0):kc},B1=S(function(e,r,n){return e(r(n))}),A1=$(function(e,r){return!o(Hc,o(B1,bs,e),r)}),F1=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),V1=function(e){var r=e.a;return r},su=$(function(e,r){var n=V1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(A1,a,r)?{D:r,ah:e}:{D:o(F1,a,r),ah:e}}),U1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=U1({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Zr(r),a=Zr(e);return z(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Vi=p(Bn,0,0,0),at=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Qc,o(na,e,r),t);if(v.$){var m={o:Vi,bT:Te(r)},d={o:Vi,bT:Te(e)},f=u+1,g=u;return A(o(B,A(n,g,f),o(B,A(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),E1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,y=e,x=r,_=v,w=a+3,M=_e(at,s,d,f,b,r,_e(at,m,s,g,f,r,_e(at,d,m,b,g,r,t)));e=y,r=x,n=_,a=w,t=M;continue e}else{var N=t,R=N.a,E=N.b;return z(R,Ve(E))}}),R1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,y=p(Zn,o(na,d,s),f,p(Zn,o(na,s,m),g,p(Zn,o(na,m,d),b,t))),x=o(B,A(b,g,f),a),_=e,w=v,M=n+3,N=x,R=y;e=_,r=w,n=M,a=N,t=R;continue e}else return A(a,t,n)}),Lr=S(function(e,r,n){var a=k1(n),t=p(mr,w1(r),P,a),i=C(R1,r,a,0,P,L1),c=i.a,l=i.b,u=i.c,v=C(E1,r,l,a,0,A(c,P,u)),s=v.a,m=v.b,d=Tt(m)?t:ve(t,m);return p(C1,e,o(su,Ro(d),s),o(Vn,d,s))}),At=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Fr,0,Ar(e)-1)),ah:Ro(Ye(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},mu=function(e){switch(e.$){case 0:return Yn;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,zr,At(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,zr,At(n));case 3:var a=e.a,t=e.b;return p(Lr,a,zr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return Yn;case 9:return Yn;default:return Yn}},Ui=mu(fu),du={$:0},T=du,be=$(function(e,r){return{$:1,a:e,b:r}}),j1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},N1=1029,W1=function(e){return{$:5,a:e}},pu=function(e){var r=e;return W1(r)},Y1=pu(N1),G1=1028,H1=pu(G1),ze=S(function(e,r,n){return r===1?e?o(B,Y1,n):o(B,H1,n):n}),bu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,m){return C(ae,p(ze,l,a,m),bu,j1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),jo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},gu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,m){return C(ae,p(ze,l,a,m),gu,jo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),hu=$(function(e,r){return{$:3,a:e,b:r}}),I1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},_u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},O1=U(function(e,r,n,a){return o(hu,n,Q(function(t,i,c,l,u,v,s,m){return C(ae,m,_u,I1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),No={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Un=function(e){var r=e;return r},Ua=H$,cr=ge(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,m,d){return C(ae,p(ze,u,t,d),gu,No,a,{aN:o(Ua,Un(r),e),b:l,c,d:s,e:i,f:v})}))}),J1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},q1=ge(function(e,r,n,a,t){return o(hu,a,Q(function(i,c,l,u,v,s,m,d){return C(ae,d,_u,J1,t,{aN:o(Ua,Un(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),yu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Gn=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(ae,p(ze,l,a,m),Su,yu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Cu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Z1=He(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return C(ae,p(ze,v,i,f),Cu,xu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),wu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},X1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,Q(function(m,d,f,g,b,y,x,_){var w=x.a,M=x.b;return C(ae,p(ze,g,s,_),Cu,wu,v,{b4:e,b8:r,b9:i,ca:a,P:M,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cv:t,b:f,c:d,aW:c,d:y,cS:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Lu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Hn=He(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return C(ae,p(ze,v,i,f),Su,Lu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),K1=function(e){return{$:0,a:e}},Ei=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),Q1=function(e){return L(ln,un(e),vn(e),$n(e),1)},Wo=L(ln,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Wo)}else{var n=r.a;return z(e,Q1(n))}}),Pu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ei,z(t,Wo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ei,o(aa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,K1(a)}}),e3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),In=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),r3=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),n3=function(e){return o(Be,e,1)},Ft=o(Be,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ft)}else{var n=r.a;return z(e,n3(n))}}),Tu=U(function(e,r,n,a){var t=L(r3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(In,z(u,Wo),o(Gr,u,r),o(Gr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(In,o(aa,u,e),z(u,Ft),o(Gr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(In,o(aa,u,e),o(Gr,u,r),z(u,Ft),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(In,o(aa,u,e),o(Gr,u,r),o(Gr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(e3,i,c,l)}}),a3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},ot=ge(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,m,d){return C(ae,p(ze,u,t,d),bu,a3,a,{b1:Un(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),zu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},t3=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(ae,p(ze,l,a,m),zu,xu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),o3=Et(function(e,r,n,a,t,i,c,l,u){return o(be,c,Q(function(v,s,m,d,f,g,b,y){var x=b.a,_=b.b;return C(ae,p(ze,d,u,y),zu,wu,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:m,c:s,aW:e,d:g,cS:n,e:v,a$:0,f})}))}),Tn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),i3=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},c3=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},l3=function(e){var r=e;return p(Tn,r.dT,r.dQ,.5)},u3=function(e){return p(pe,i3(e),c3(e),l3(e))},Y=function(e){var r=Yl(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(u3(e)),eS:n/2,eT:a/2,eU:t/2}},Yo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var n=e.b.a;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(ir,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(ir,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(O1,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return C(ot,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ot,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ot,l,v,Y(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(cr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return C(cr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return C(cr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(q1,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,R=e.c,m=o(Pu,s,R);if(m.$){var g=m.a,b=g.a;g.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return L(t3,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Z1,b,x,_,Y(t),c,f);case 8:return T;case 9:return T;default:return T}}else{var d=m.a;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,f=r.d;return L(Gn,d,Y(t),c,f);case 3:return T;case 4:var t=r.a,c=r.c,f=r.d;return L(Gn,d,Y(t),c,f);case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return L(Gn,d,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Gn,d,Y(t),c,f);case 8:return T;case 9:return T;default:return T}}default:e.a;var w=e.b,M=e.c,N=e.d,R=e.e,E=L(Tu,w,M,N,R);if(E.$){var Z=E.a,K=Z.a,ce=Z.b,fe=E.b,ie=fe.a,de=fe.b,ke=E.c,Ce=ke.a,dr=ke.b,pr=E.d,x=pr.a,_=pr.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return Yu(o3,K,ce,ie,de,Ce,dr,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return X1(K)(ce)(ie)(de)(Ce)(dr)(x)(_)(Y(t))(c)(a);case 8:return T;case 9:return T;default:return T}}else{var j=E.a,W=E.b,F=E.c;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 3:return T;case 4:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 8:return T;case 9:return T;default:return T}}}}),it=function(e){var r=e;return r.fU},ct=function(e){var r=e;return r.fY},lt=function(e){var r=e;return r.c6},v3=function(e){var r=e,n=lt(r.c7),a=ct(r.c7),t=it(r.c7),i=lt(r.c5),c=ct(r.c5),l=it(r.c5),u=lt(r.c4),v=ct(r.c4),s=it(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},$3=function(e){var r=Fa(cn(e)),n=Ge(Wr(e)),a=Ge(Nr(e)),t=Ge(jr(e));return{dp:v3(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},Hr=$(function(e,r){return{$:5,a:e,b:r}}),Mu=$(function(e,r){var n=r;switch(n.$){case 0:return T;case 5:var a=n.a,t=n.b,i=o(Fl,a,e);return o(Hr,i,t);case 1:return o(Hr,e,n);case 3:return o(Hr,e,n);case 2:return o(Hr,e,n);default:return o(Hr,e,n)}}),ku=$(function(e,r){return o(Mu,$3(e),r)}),Ea=function(e){return{$:2,a:e}},f3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),s3=J$,m3=O$,Ri=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=m3(a),g=f.fU,b=f.fY,y=f.c6,x=f.em,_=s3({em:x,fU:g*s,fY:b*m,c6:y*d});return wa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Vt=$(function(e,r){switch(r.$){case 0:return du;case 5:var n=r.a,a=r.b;return o(Hr,n,o(Vt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(f3,e,t),o(Ri,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(Ri,e,i));default:var c=r.a;return Il(o(ee,Vt(e),c))}}),Go=$(function(e,r){var n=r;return o(Vt,e,n)}),Ho={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Bu=7682,d3=p(ko,{cp:0,cO:0,c3:15},{a8:Se,bl:rn,bt:Se,bu:Du},{a8:Se,bl:rn,bt:Se,bu:Bu}),p3=p(ko,{cp:0,cO:0,c3:15},{a8:Se,bl:rn,bt:Se,bu:Bu},{a8:Se,bl:rn,bt:Se,bu:Du}),Io=$(function(e,r){return e?o(B,p3,r):o(B,d3,r)}),b3={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},g3=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return C(ae,o(Io,i,v),b3,Ho,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ya=function(e){var r=g3(e);if(r.$)return T;var n=r.a;return Ea(n)},h3=U(function(e,r,n,a){var t=o(Yo,n,fu),i=function(){var s=z(e,r);return s.a?s.b?Fn(h([t,ya(Ui)])):t:s.b?ya(Ui):T}(),c=So(a),l=c.a,u=c.b,v=c.c;return o(ku,yo(a),o(Go,A(l,u,v),i))}),_3=$(function(e,r){return L(h3,!0,!0,e,r)}),Au=$(function(e,r){return{$:0,a:e,b:r}}),y3=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(Bn,n,a,t)},S3=function(e){return o(Au,0,Mt(y3(e)))},x3=function(e){var r=e;return r.k},yn=function(e){var r=e;return Vr(r)},C3=$(function(e,r){var n=r;return n/e}),ji=function(e){var r=e;return{fU:Vr(r),fY:Qr(r)}},w3=$(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Va(a),bT:Te(n)},r)}),L3=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bT),s=vn(l.bT),m=un(l.bT),d=o(ra,e,m),f=o(Me,r,m),g=o(ra,n,s),b=o(Me,a,s),y=o(ra,t,v),x=o(Me,i,v),_=u;e=d,r=f,n=g,a=b,t=y,i=x,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=$(function(e,r){var n=$n(e.bT),a=vn(e.bT),t=un(e.bT);return Rt(L3,t,t,a,a,n,n,r)}),P3=function(e){var r=p(xc,w3,P,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Uo(e)),i=o(Fu,n,a);return L(tu,i,e,t,0)}else return Vo},Ni=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),Sa=function(e){var r=e;return Qr(r)},Ut=function(e){return Kr(2*en*e)},T3=zr,Wi=T3({cB:Rr,c4:Zl,c5:Lo}),Vu=function(){var e=72,r=o(C3,e,Ut(1)),n=ar(1),a=Jr(ho),t=Jr(yl),i=ar(1),c=o(le,.5,i),l=p(pe,qe,qe,c),u=o(le,-.5,i),v=p(pe,qe,qe,u),s=function(f){var g=o(le,f,r),b=Jr(o(Ni,Wi,ji(g))),y=o(le,yn(g),n),x=o(le,Sa(g),n),_=p(pe,y,x,c),w=p(pe,y,x,u),M=o(da,e,f+1),N=o(le,M,r),R=Jr(o(Ni,Wi,ji(N))),E=o(le,yn(N),n),j=o(le,Sa(N),n),W=p(pe,E,j,u),F=p(pe,E,j,c);return h([A({o:t,bT:v},{o:t,bT:W},{o:t,bT:w}),A({o:b,bT:w},{o:R,bT:W},{o:R,bT:F}),A({o:b,bT:w},{o:R,bT:F},{o:b,bT:_}),A({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},m=o(ee,s,o(Fr,0,e-1)),d=At(Ye(m));return Fo(P3(d))}(),Yi=mu(Vu),z3=function(e){var r=e;return r.eH},M3=function(e){var r=e;return r.cB},k3=function(e){var r=z3(e),n=mo(r),a=n.a,t=n.b;return fr({cB:M3(e),c4:a,c5:t,c7:r})},D3=function(e){var r=e;return r.e9},B3=function(e){var r=e;return r.fu},A3=U(function(e,r,n,a){var t=k3(x3(a)),i=o(Yo,n,Vu),c=function(){var m=z(e,r);return m.a?m.b?Fn(h([i,ya(Yi)])):i:m.b?ya(Yi):T}(),l=B3(a),u=l,v=D3(a),s=v;return o(ku,t,o(Go,A(u,u,s),c))}),F3=$(function(e,r){return L(A3,!0,!0,e,r)}),Gi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Hi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},bn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return er({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},On=$u(h([A({cZ:0},{cZ:1},{cZ:2})])),V3=$(function(e,r){var n=cu(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var t=e.b.a;return o(be,a,Q(function(_,w,M,N,R,E,j,W){return C(ae,p(ze,N,0,W),Gi,jo,On,{aw:t,b:M,c:w,d:E,e:_,bq:bn(r),f:R})}));case 1:if(e.b.$)return e.a,T;var i=e.b.a,c=e.c;return o(be,a,Q(function(_,w,M,N,R,E,j,W){return C(ae,p(ze,N,0,W),Gi,No,On,{aN:o(Ua,Un(c),i),b:M,c:w,d:E,e:_,bq:bn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Pu,l,f);if(u.$)return T;var v=u.a;return o(be,a,Q(function(_,w,M,N,R,E,j,W){var F=j.a,Z=j.b;return C(ae,p(ze,N,0,W),Hi,yu,On,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cq:v,b:M,c:w,d:E,e:_,bq:bn(r),f:R})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=L(Tu,s,m,d,f);if(g.$)return T;var b=g.a,y=g.b,x=g.c;return o(be,a,Q(function(_,w,M,N,R,E,j,W){var F=j.a,Z=j.b;return C(ae,p(ze,N,0,W),Hi,Lu,On,{b3:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cu:x,b:M,c:w,d:E,cR:y,e:_,bq:bn(r),f:R})}))}}),U3=function(){var e=h([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Vn,e,r)}(),E3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ii=function(e){return Ea(Q(function(r,n,a,t,i,c,l,u){return C(ae,o(Io,t,u),E3,Ho,U3,{b:a,c:n,d:c,e:r,bY:l,bq:bn(e),f:i})}))},R3=U(function(e,r,n,a){var t=o(V3,n,a),i=z(e,r);return i.a?i.b?Fn(h([t,Ii(a)])):t:i.b?Ii(a):T}),j3=$(function(e,r){return L(R3,!0,!0,e,r)}),N3=$(function(e,r){var n=Br(r),a=Br(e),t=Dr(r),i=Dr(e),c=kr(r),l=kr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),W3=function(e){var r=xo(e),n=r.a,a=r.b;return o(N3,n,a)},Oi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Y3=$(function(e,r){return{$:1,a:e,b:r}}),G3=Y3({df:2,$7:0,dV:1}),Ji=G3(h([z({dw:0},{dw:1})])),H3=$(function(e,r){var n=W3(r),a=Y(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var l=e.b.a;return o(be,a,Q(function(v,s,m,d,f,g,b,y){return C(ae,y,Oi,jo,Ji,{aw:l,du:Te(c),dv:Te(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return T;var l=e.b.a,u=e.c;return o(be,a,Q(function(s,m,d,f,g,b,y,x){return C(ae,x,Oi,No,Ji,{aN:o(Ua,Un(u),l),du:Te(c),dv:Te(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return T;default:return T}}),I3=$(function(e,r){return o(H3,e,r)}),Jn=function(e){return Kr(en*(e/180))},qi=$(function(e,r){var n=e,a=r;return n/a}),O3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(hr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),Zi=$(function(e,r){return e<1?P:C(O3,0,e,e,r,P)}),J3=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bT:Te(n),L:o(Be,c,l)},r)}),q3=function(e){var r=p(xc,J3,P,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Uo(e)),i=o(Fu,n,a);return L(ou,i,e,t,0)}else return Vo},Uu=$(function(e,r){var n=e,a=r,t=Vr(a);return{fU:t*Vr(n),fY:t*Qr(n),c6:Qr(a)}}),Z3=function(){var e=ar(1),r=72,n=o(Fr,0,r-1),a=o(Zi,r,o(Tn,qe,Ut(1))),t=eo(r/2),i=o(Fr,0,t-1),c=o(Zi,t,o(Tn,Jn(90),Jn(-90))),l=Ro(Ye(o(ee,function(s){return o(ee,function(m){return{o:Jr(o(Uu,s,m)),bT:p(pe,o(le,yn(m)*yn(s),e),o(le,yn(m)*Sa(s),e),o(le,Sa(m),e)),L:z(o(qi,s,Ut(1)),o(qi,o(hn,Jn(90),m),Jn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Ye(o(ee,function(s){return Ye(o(ee,function(m){var d=o(u,s+1,m),f=o(u,s,m),g=o(u,s+1,m+1),b=o(u,s,m+1);return h([A(b,g,d),A(b,d,f)])},i))},n));return Fo(q3(o(su,l,v)))}(),xa=72,qn=2*xa,X3=$(function(e,r){e:for(;;){var n=qn+1,a=o(da,qn,2*e+3),t=o(da,qn,2*e+2),i=2*e+1,c=2*e,l=qn,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),K3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Q3=$(function(e,r){e:for(;;){var n=p(K3,0,2*en,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),eb=function(){var e=o(Q3,xa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(X3,xa-1,P);return o(Vn,e,r)}(),rb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Xi=function(e){return Ea(Q(function(r,n,a,t,i,c,l,u){return C(ae,o(Io,!0,u),rb,Ho,eb,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},nb=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},ab=$(function(e,r){return o(Mu,nb(e),r)}),tb=U(function(e,r,n,a){var t=o(Yo,n,Z3),i=function(){var u=z(e,r);return u.a?u.b?Fn(h([t,Xi()])):t:u.b?Xi():T}(),c=wo(a),l=c;return o(ab,o(ha,Rr,Co(a)),o(Go,A(l,l,l),i))}),ob=$(function(e,r){return L(tb,!0,!0,e,r)}),ib=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),cb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),lb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Au,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ib,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(xl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(cb,n,a,t,i,c)}},ub=lb,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(_3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(j3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(ob,ub(t),a)]);case 2:var t=e.a,i=e.b;return h([o(F3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(I3,S3(c),l)]);default:var u=e.a;return o(Po,Eu,u)}},vb=function(e){return o(Po,Eu,e)},$b=$(function(e,r){return f1({aI:w0(e.es),ev:e.ev,aJ:L0(.5),cb:e.cb,aK:z(xi(Ze(e.cT.fS)),xi(Ze(e.cT.eW))),aP:vb(r),fB:!0,fJ:o(Uu,Kr(e.fI),Kr(e.fK)),ei:Xl})}),fb=$(function(e,r){return o($b,{es:Ed,ev:Ud,cb:e.cb,cT:e.cT,fI:0,fK:0},o(C0,e,r))}),sb=p(gd,fb,_d,hd);const mb={Main:{init:sb(o(D,function(e){return De({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",X))},o(k,"control",X))},o(k,"down",X))},o(k,"downs",fa(wn)))},o(k,"left",X))},o(k,"pressedKeys",fa(wn)))},o(k,"right",X))},o(k,"shift",X))},o(k,"up",X))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",X))},o(k,"isDown",X))},o(k,"move",X))},o(k,"rightDown",X))},o(k,"rightUp",X))},o(k,"up",X))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},db=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},pb=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},bb=mb.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});pb();db(bb);
