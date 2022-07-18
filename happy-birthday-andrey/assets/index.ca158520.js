const Uu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Uu();function Lr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Lr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Lr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return Lr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Lr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return Lr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return Lr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Lr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ot(e){return Lr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function k(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ut(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ju(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var qu=[];function Yu(e){return e.length}var Xu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Qu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,x(n,r)}),Ku=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ev=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+rv()),r});function rv(e){return"<internals>"}function on(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Cr(e,r){for(var n,a=[],t=dt(e,r,0,a);t&&(n=a.pop());t=dt(n.a,n.b,0,a));return t}function dt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&on(5),!1;if(n>100)return a.push(x(e,r)),!0;e.$<0&&(e=hi(e),r=hi(r));for(var t in e)if(!dt(e[t],r[t],n+1,a))return!1;return!0}$(Cr);$(function(e,r){return!Cr(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var nv=$(function(e,r){var n=U(e,r);return n<0?Ac:n?Hf:Bc}),Mn=0;function x(e,r){return{a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function We(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var av=$(tr);function h(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function Va(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var tv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(k(e,r.a,n.a,a.a,t.a));return h(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Va(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return h(Va(r).sort(function(n,a){var t=o(e,n,a);return t===Bc?0:t===Ac?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var ov=$(Math.pow);$(function(e,r){return r%e});var iv=$(function(e,r){var n=r%e;return e===0?on(11):n>0&&e<0||n<0&&e>0?n+e:n}),cv=Math.PI,lv=Math.cos,uv=Math.sin,vv=Math.tan,$v=Math.atan;$(Math.atan2);function fv(e){return e}function sv(e){return e===1/0||e===-1/0}var dv=Math.ceil,mv=Math.floor,pv=Math.round,bv=Math.sqrt,oi=Math.log,gv=isNaN;function hv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var _v=$(function(e,r){return e+r});function wv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ee(55296<=r&&r<=56319?x(e[0]+e[1],e.slice(2)):x(e[0],e.slice(1)))}$(function(e,r){return e+r});function yv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function xv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Sv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Cv=$(function(e,r){return r.split(e)}),Lv=$(function(e,r){return r.join(e)}),kv=S(function(e,r,n){return n.slice(e,r)});function Pv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var zv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=$(function(e,r){return r.indexOf(e)>-1}),Mv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function lc(e){return e+""}function Dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ee(n==45?-r:r)}function Bv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ee(r):q}function Av(e){return Va(e).join("")}function Fv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Rv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ev(e){return{$:0,a:e}}function Jt(e){return{$:2,b:e}}var jv=Jt(function(e){return typeof e=="boolean"?ue(e):Ke("a BOOL",e)}),Nv=Jt(function(e){return typeof e=="number"?ue(e):Ke("a FLOAT",e)}),Zv=Jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ke("a STRING",e)});function Gv(e){return{$:3,b:e}}var Wv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function kr(e,r){return{$:9,f:e,g:r}}var Hv=$(function(e,r){return{$:10,b:r,h:e}}),Iv=$(function(e,r){return kr(e,[r])}),Ov=S(function(e,r,n){return kr(e,[r,n])});B(function(e,r,n,a){return kr(e,[r,n,a])});ge(function(e,r,n,a,t){return kr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return kr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return kr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return kr(e,[r,n,a,t,i,c,l])});Ot(function(e,r,n,a,t,i,c,l,u){return kr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ge(e,n)}catch(a){return we(o(oo,"This is not valid JSON! "+a.message,r))}});var uc=$(function(e,r){return Ge(e,r)});function Ge(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ke("null",r);case 3:return Gn(r)?ii(e.b,r,h):Ke("a LIST",r);case 4:return Gn(r)?ii(e.b,r,Uv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=Ge(e.b,r[n]);return qe(v)?v:we(o(_i,n,v.a));case 7:var a=e.e;if(!Gn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ge(e.b,r[a]);return qe(v)?v:we(o(Fc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ge(e.b,r[i]);if(!qe(v))return we(o(_i,i,v.a));t=tr(x(i,v.a),t)}return ue(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ge(l[u],r);if(!qe(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ge(e.b,r);return qe(v)?Ge(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ge(d.a,r);if(qe(v))return v;s=tr(v.a,s)}return we(If(Re(s)));case 1:return we(o(oo,e.a,r));case 0:return ue(e.a)}}function ii(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ge(e,r[i]);if(!qe(c))return we(o(Fc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Uv(e){return o(ls,e.length,function(r){return e[r]})}function Ke(e,r){return we(o(oo,"Expecting "+e,r))}function qr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return qr(e.b,r.b);case 6:return e.d===r.d&&qr(e.b,r.b);case 7:return e.e===r.e&&qr(e.b,r.b);case 9:return e.f===r.f&&ci(e.g,r.g);case 10:return e.h===r.h&&qr(e.b,r.b);case 11:return ci(e.g,r.g)}}function ci(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!qr(e[a],r[a]))return!1;return!0}var Jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function vc(e){return e}S(function(e,r,n){return n[e]=r,n});function Er(e){return{$:0,a:e}}function qv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var mt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Yv(e){return{$:5,b:e}}var Xv=0;function qt(e){var r={$:0,e:Xv++,f:e,g:null,h:[]};return Yt(r),r}function $c(e){return pr(function(r){r(Er(qt(e)))})}function fc(e,r){e.h.push(r),Yt(e)}var Qv=$(function(e,r){return pr(function(n){fc(e,r),n(Er(Mn))})}),Ua=!1,li=[];function Yt(e){if(li.push(e),!Ua){for(Ua=!0;e=li.shift();)Kv(e);Ua=!1}}function Kv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return Xt(r,a,e.e4,e.fO,e.fG,function(){return function(){}})});function Xt(e,r,n,a,t,i){var c=o(uc,e,r?r.flags:void 0);qe(c)||on(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=e$(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),vi(l,b.b,t(v))}return vi(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function e$(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=n$(t,r)}return n}function r$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function n$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mt,l,Yv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?k(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=qt(o(mt,l,e.b))}var a$=$(function(e,r){return pr(function(n){e.g(r),n(Er(Mn))})});$(function(e,r){return o(Qv,e.h,{$:0,a:r})});function sc(e){return function(r){return{$:1,k:e,l:r}}}function t$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ui=[],Ja=!1;function vi(e,r,n){if(ui.push({p:e,q:r,r:n}),!Ja){Ja=!0;for(var a;a=ui.shift();)o$(a.p,a.q,a.r);Ja=!1}}function o$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)fc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=i$(e,t,a,r.l);n[t]=c$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function i$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function c$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function l$(e){rr[e]&&on(3)}$(function(e,r){return r});function u$(e,r){return l$(e),rr[e]={f:v$,u:r,a:$$},sc(e)}var v$=$(function(e,r){return function(n){return e(r(n))}});function $$(e,r){var n=P,a=rr[e].u,t=Er(null);rr[e].b=t,rr[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(uc,a,c);qe(l)||on(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var va,ur=typeof document!="undefined"?document:{};function Qt(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(wr(e,function(){}),t),{}});function pt(e){return{$:0,a:e}}var dc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Kt(n),e:t,f:e,b:i}})}),jr=dc(void 0),f$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Kt(n),e:t,f:e,b:i}})}),s$=f$(void 0);function d$(e,r,n,a){return{$:3,d:Kt(e),g:r,h:n,i:a}}var m$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Pr([e,r],function(){return e(r)})});S(function(e,r,n){return Pr([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return Pr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Pr([e,r,n,a,t],function(){return k(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return Pr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return Pr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Pr([e,r,n,a,t,i,c,l],function(){return Ut(e,r,n,a,t,i,c,l)})});Ot(function(e,r,n,a,t,i,c,l,u){return Pr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var mc=$(function(e,r){return{$:"a0",n:e,o:r}}),p$=$(function(e,r){return{$:"a1",n:e,o:r}}),pc=$(function(e,r){return{$:"a2",n:e,o:r}}),zr=$(function(e,r){return{$:"a3",n:e,o:r}}),b$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function g$(e){return e=="script"?"p":e}function h$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(mc,r.n,_$(e,r.o)):r});function _$(e,r){var n=vo(r);return{$:r.$,a:n?p(us,n<3?w$:y$,Be(e),r.a):o(da,e,r.a)}}var w$=$(function(e,r){return x(e(r.a),r.b)}),y$=$(function(e,r){return{al:e(r.al),cT:r.cT,cI:r.cI}});function Kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?$i(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?$i(c,t,i):c[t]=i}return r}function $i(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function wr(e,r){var n=e.$;if(n===5)return wr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=wr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return bt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),bt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Qt(c,wr(n===1?l[u]:l[u].b,r));return c}function bt(e,r,n){for(var a in n){var t=n[a];a==="a1"?x$(e,t):a==="a0"?L$(e,r,t):a==="a3"?S$(e,t):a==="a4"?C$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function x$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function S$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function C$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function L$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=k$(r,i),e.addEventListener(t,c,eo&&{passive:vo(i)<2}),a[t]=c}}var eo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){eo=!0}}))}catch{}function k$(e,r){function n(a){var t=n.q,i=Ge(t.a,a);if(!!qe(i)){for(var c=vo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cT,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cI)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function P$(e,r){return e.$==r.$&&qr(e.a,r.a)}function bc(e,r){var n=[];return Ye(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ye(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=F$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ye(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!z$(d,m):d!==m)&&he(n,2,a,m),Ye(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:fi(e,r,n,a,T$);return;case 2:fi(e,r,n,a,M$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=ro(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function z$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function fi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=ro(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function ro(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ro(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&P$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function T$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ye(s,i[v],n,++a),a+=s.b||0}}function M$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,_=g.b,L=b.b,T=void 0,Z=void 0;if(w===y){f++,Ye(_,L,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,G=j.b;Z=y===N}if(E){var A=E.a,Y=E.b;T=w===A}if(T&&Z){f++,Ye(_,Y,t,f),fn(i,t,w,L,m,c),f+=_.b||0,f++,sn(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(T){f++,fn(i,t,y,L,m,c),Ye(_,Y,t,f),f+=_.b||0,d+=1,m+=2;continue}if(Z){f++,sn(i,t,w,_,f),f+=_.b||0,f++,Ye(G,L,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===A){f++,sn(i,t,w,_,f),fn(i,t,y,L,m,c),f+=_.b||0,f++,Ye(G,Y,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;sn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];fn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var gc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ye(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+gc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ye(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}sn(e,r,n+gc,a,t)}function hc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)hc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=dn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function _c(e,r,n,a){return n.length===0?e:(hc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=V$(t,a);t===e&&(e=i)}return e}function V$(e,r){switch(r.$){case 0:return D$(e,r.s,r.u);case 4:return bt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(wr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return B$(e,r);case 5:return r.s(e);default:on(10)}}function D$(e,r,n){var a=e.parentNode,t=wr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function B$(e,r){var n=r.s,a=A$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:wr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Qt(e,a),e}function A$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Qt(n,i.c===2?i.s:wr(i.z,r.u))}return n}}function no(e){if(e.nodeType===3)return pt(e.textContent);if(e.nodeType!==1)return pt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(zr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(no(v[a]),u);return p(jr,l,r,u)}function F$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var R$=B(function(e,r,n,a){return Xt(r,a,e.e4,e.fO,e.fG,function(t,i){var c=e.fQ,l=a.node,u=no(l);return wc(i,function(v){var s=c(v),d=bc(u,s);l=_c(l,u,d,t),u=s})})});B(function(e,r,n,a){return Xt(r,a,e.e4,e.fO,e.fG,function(t,i){var c=e.cQ&&e.cQ(t),l=e.fQ,u=ur.title,v=ur.body,s=no(v);return wc(i,function(d){va=c;var m=l(d),f=jr("body")(P)(m.ew),g=bc(s,f);v=_c(v,s,g,t),s=f,va=0,u!==m.fK&&(ur.title=u=m.fK)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function wc(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}$(function(e,r){return o(so,$o,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(so,$o,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(so,$o,pr(function(){history.replaceState({},"",r),e()}))});var E$={addEventListener:function(){},removeEventListener:function(){}},j$=typeof window!="undefined"?window:E$;S(function(e,r,n){return $c(pr(function(a){function t(i){qt(n(i))}return e.addEventListener(r,t,eo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ge(e,r);return qe(n)?ee(n.a):q});function yc(e,r){return pr(function(n){fa(function(){var a=document.getElementById(e);n(a?Er(r(a)):qv($s(e)))})})}function N$(e){return pr(function(r){fa(function(){r(Er(e()))})})}$(function(e,r){return yc(r,function(n){return n[e](),Mn})});$(function(e,r){return N$(function(){return j$.scroll(e,r),Mn})});S(function(e,r,n){return yc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Z$=$(function(e,r){var n="g";e.fh&&(n+="m"),e.ey&&(n+="i");try{return ee(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var G$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ee(d):q}a.push(k(gl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ee(v):q}return n(k(gl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var W$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/H$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function H$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),si=new Float64Array(3),di=new Float64Array(3),I$=S(function(e,r,n){return new Float64Array([e,r,n])}),O$=function(e){return e[0]},U$=function(e){return e[1]},J$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var q$=function(e){return new Float64Array([e.fV,e.fZ,e.c2])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(xc);function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(xc(e,r,n),n)}$(Sc);function Cc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Cc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Y$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function gt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(gt);$(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var X$=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Q$=function(e){return{fV:e[0],fZ:e[1],c2:e[2],en:e[3]}},K$=function(e){return new Float64Array([e.fV,e.fZ,e.c2,e.en])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/ef(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function ef(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var rf=new Float64Array(16),nf=new Float64Array(16),af=function(e){var r=new Float64Array(16);return r[0]=e.dw,r[1]=e.dA,r[2]=e.dE,r[3]=e.dI,r[4]=e.dx,r[5]=e.dB,r[6]=e.dF,r[7]=e.dJ,r[8]=e.dy,r[9]=e.dC,r[10]=e.dG,r[11]=e.dK,r[12]=e.dz,r[13]=e.dD,r[14]=e.dH,r[15]=e.dL,r},tf=function(e){return{dw:e[0],dA:e[1],dE:e[2],dI:e[3],dx:e[4],dB:e[5],dF:e[6],dJ:e[7],dy:e[8],dC:e[9],dG:e[10],dK:e[11],dz:e[12],dD:e[13],dH:e[14],dL:e[15]}};function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(Lc);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Lc(c,l,i,t,n,a)});function kc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(kc);B(function(e,r,n,a){return kc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],_=e[15],L=r[0],T=r[1],Z=r[2],j=r[3],E=r[4],N=r[5],G=r[6],A=r[7],Y=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],Ve=r[14],Ce=r[15];return n[0]=a*L+l*T+d*Z+b*j,n[1]=t*L+u*T+m*Z+w*j,n[2]=i*L+v*T+f*Z+y*j,n[3]=c*L+s*T+g*Z+_*j,n[4]=a*E+l*N+d*G+b*A,n[5]=t*E+u*N+m*G+w*A,n[6]=i*E+v*N+f*G+y*A,n[7]=c*E+s*N+g*G+_*A,n[8]=a*Y+l*Q+d*ie+b*ve,n[9]=t*Y+u*Q+m*ie+w*ve,n[10]=i*Y+v*Q+f*ie+y*ve,n[11]=c*Y+s*Q+g*ie+_*ve,n[12]=a*oe+l*de+d*Ve+b*Ce,n[13]=t*oe+u*de+m*Ve+w*Ce,n[14]=i*oe+v*de+f*Ve+y*Ce,n[15]=c*oe+s*de+g*Ve+_*Ce,n}$(Pc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],_=r[4],L=r[5],T=r[6],Z=r[8],j=r[9],E=r[10],N=r[12],G=r[13],A=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*L+v*T,n[5]=t*_+l*L+s*T,n[6]=i*_+u*L+d*T,n[7]=0,n[8]=a*Z+c*j+v*E,n[9]=t*Z+l*j+s*E,n[10]=i*Z+u*j+d*E,n[11]=0,n[12]=a*N+c*G+v*A+m,n[13]=t*N+l*G+s*A+f,n[14]=i*N+u*G+d*A+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=sa(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Cc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=g+f,L=b-m,T=g-f,Z=c*c*v+u,j=w+d,E=b+m,N=w-d,G=l*l*v+u,A=n[0],Y=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],Ve=n[7],Ce=n[8],gr=n[9],hr=n[10],Oa=n[11],Wu=n[12],Hu=n[13],Iu=n[14],Ou=n[15];return a[0]=A*y+ve*_+Ce*L,a[1]=Y*y+oe*_+gr*L,a[2]=Q*y+de*_+hr*L,a[3]=ie*y+Ve*_+Oa*L,a[4]=A*T+ve*Z+Ce*j,a[5]=Y*T+oe*Z+gr*j,a[6]=Q*T+de*Z+hr*j,a[7]=ie*T+Ve*Z+Oa*j,a[8]=A*E+ve*N+Ce*G,a[9]=Y*E+oe*N+gr*G,a[10]=Q*E+de*N+hr*G,a[11]=ie*E+Ve*N+Oa*G,a[12]=Wu,a[13]=Hu,a[14]=Iu,a[15]=Ou,a});function of(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(of);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function cf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(cf);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});S(function(e,r,n){var a=Sc(e,r,ao),t=sa(gt(n,a,si),si),i=sa(gt(a,t,di),di),c=rf,l=nf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mi=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function to(e){for(var r=0;e.b;e=e.b)r++;return r}var lf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},uf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),vf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),$f=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),sf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),df=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),pf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),gf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},hf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},_f=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},zc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Tc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},yf=function(e){e.gl.disable(e.gl.CULL_FACE)},xf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Cf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},pi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Lf=[hf,_f,wf,zc,Tc,yf,xf,Sf,Cf];function bi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function kf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Mc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Pf(e,r,n,a){for(var t=n.a.db,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[y]:w[y][_];else i.forEach(function(L){for(_=0;_<g;_++)f[b++]=g===1?w[L][y]:w[L][y][_]})}var u=Mc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(to(n.b)*s);Cn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function zf(e,r){if(r.a.dk>0){var n=e.createBuffer(),a=Tf(r.c,r.a.dk);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.db*to(r.b),indexBuffer:null,buffers:{}}}function Tf(e,r){var n=new Uint32Array(to(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function gi(e,r){return e+"#"+r}var Vc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),zc(n),Tc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=gi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=mi++,v||(v=bi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=mi++,s||(s=bi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=kf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Mf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=gi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Vf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=zf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Pf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Mc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,L=0;L<w.arraySize;L++)a.enableVertexAttribArray(g+L),a.vertexAttribPointer(g+L,w.size,w.baseType,!1,_,y*L)}for(n.toggle=!n.toggle,Cn(Lp(n),i.a),u=0;u<pi.length;u++){var T=n[pi[u]];T.toggle!==n.toggle&&T.enabled&&(Lf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dU,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dU,0,b.numIndices)}}return Cn(t,e.g),r});function Mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var L=l.textures.get(_);L||(L=_.eF(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Vf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Df=S(function(e,r,n){return d$(r,{g:n,f:{},h:e},Nf,Zf)}),Bf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Af=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ff=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Rf=$(function(e,r){e.contextAttributes.antialias=!0}),Ef=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),jf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Nf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(Cp,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),lf(function(){return o(Vc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Zf(e,r){return r.f=e.f,Vc(r)}var V=av,Wn=ev,Dc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Da=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Da,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),hi=function(e){return p(Da,S(function(r,n,a){return o(V,x(r,n),a)}),P,e)},Gf=function(e){return p(Da,S(function(r,n,a){return o(V,r,a)}),P,e)},Wf=function(e){var r=e;return Gf(r)},Bc=1,Hf=2,Ac=0,we=function(e){return{$:1,a:e}},oo=$(function(e,r){return{$:3,a:e,b:r}}),_i=$(function(e,r){return{$:0,a:e,b:r}}),Fc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},If=function(e){return{$:2,a:e}},ee=function(e){return{$:0,a:e}},q={$:1},Of=zv,Uf=Jv,Fe=lc,Vr=$(function(e,r){return o(Lv,e,Va(r))}),io=$(function(e,r){return h(o(Cv,e,r))}),Rc=function(e){return o(Vr,`
    `,o(io,`
`,e))},Vn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return p(Vn,$(function(r,n){return n+1}),0,e)},Jf=tv,qf=S(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(V,r,n);e=a,r=t,n=i;continue e}else return n}),rn=$(function(e,r){return p(qf,e,r,P)}),Ec=$(function(e,r){return p(Jf,e,o(rn,0,Ar(r)-1),r)}),nr=Fv,jc=function(e){var r=nr(e);return 97<=r&&r<=122},Nc=function(e){var r=nr(e);return r<=90&&65<=r},Yf=function(e){return jc(e)||Nc(e)},Xf=function(e){var r=nr(e);return r<=57&&48<=r},Qf=function(e){return jc(e)||Nc(e)||Xf(e)},Re=function(e){return p(Vn,V,P,e)},cn=wv,Kf=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Rc(es(r))))}),es=function(e){return o(rs,e,P)},rs=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=cn(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Yf(y)&&o(Of,Qf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(V,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(V,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Vr,"",Re(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Fe(Ar(s))+" ways:"));return o(Vr,`

`,o(V,g,o(Ec,Kf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Vr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Vr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return g+(Rc(o(Uf,4,f))+(`

`+m))}}),Ee=32,ht=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_t=qu,co=dv,lo=$(function(e,r){return oi(r)/oi(e)}),ns=fv,Ln=co(o(lo,2,Ee)),Zc=k(ht,0,Ln,_t,_t),Gc=Xu,Wc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Hc=mv,wt=Yu,Me=$(function(e,r){return U(e,r)>0?e:r}),as=function(e){return{$:0,a:e}},uo=Qu,ts=$(function(e,r){e:for(;;){var n=o(uo,Ee,e),a=n.a,t=n.b,i=o(V,as(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),os=function(e){var r=e.a;return r},is=$(function(e,r){e:for(;;){var n=co(r/Ee);if(n===1)return o(uo,Ee,e).a;var a=o(ts,e,P),t=n;e=a,r=t;continue e}}),Ic=$(function(e,r){if(r.l){var n=r.l*Ee,a=Hc(o(lo,Ee,n-1)),t=e?Re(r.z):r.z,i=o(is,t,r.l);return k(ht,wt(r.p)+n,o(Me,5,a*Ln),i,r.p)}else return k(ht,wt(r.p),Ln,_t,r.p)}),cs=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ic,!1,{z:a,l:n/Ee|0,p:t});var i=Wc(p(Gc,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(V,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ls=$(function(e,r){if(e<=0)return Zc;var n=e%Ee,a=p(Gc,n,e-n,r),t=e-n-Ee;return C(cs,r,t,e,P,a)}),qe=function(e){return!e.$},D=Hv,X=jv,M=Wv,$e=Nv,da=Iv,us=Ov,Be=Ev,vo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=jr("div"),vs=function(e){return{$:2,a:e}},Oc=$(function(e,r){return e}),Uc=$(function(e,r){return{bD:r.bD,eD:e,b8:r.b8,eM:r.eM,dp:r.dp,bi:r.bi,bk:r.bk,fR:r.fR}}),Br=function(e){return e},$s=Br,wi=Ue(function(e,r,n,a,t,i){return{dg:i,di:r,dY:a,d$:n,d3:e,d4:t}}),fs=Tv,Dr=yv,Yr=kv,Dn=$(function(e,r){return e<1?r:p(Yr,e,Dr(r),r)}),Ba=Vv,Aa=function(e){return e===""},Fa=$(function(e,r){return e<1?"":p(Yr,0,e,r)}),Jc=Dv,yi=ge(function(e,r,n,a,t){if(Aa(t)||o(fs,"@",t))return q;var i=o(Ba,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Jc(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return ee(_e(wi,e,o(Fa,c,t),u,r,n,a))}else return ee(_e(wi,e,t,q,r,n,a))}),xi=B(function(e,r,n,a){if(Aa(a))return q;var t=o(Ba,"/",a);if(t.b){var i=t.a;return C(yi,e,o(Dn,i,a),r,n,o(Fa,i,a))}else return C(yi,e,"/",r,n,a)}),Si=S(function(e,r,n){if(Aa(n))return q;var a=o(Ba,"?",n);if(a.b){var t=a.a;return k(xi,e,ee(o(Dn,t+1,n)),r,o(Fa,t,n))}else return k(xi,e,q,r,n)});$(function(e,r){if(Aa(r))return q;var n=o(Ba,"#",r);if(n.b){var a=n.a;return p(Si,e,ee(o(Dn,a+1,r)),o(Fa,a,r))}else return p(Si,e,q,r)});var ss=Mv,$o=function(e){},Bn=Er,ds=Bn(0),qc=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Vn,e,r,Re(d)):k(qc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=S(function(e,r,n){return k(qc,e,r,0,n)}),re=$(function(e,r){return p(br,$(function(n,a){return o(V,e(n),a)}),P,r)}),ma=mt,fo=$(function(e,r){return o(ma,function(n){return Bn(e(n))},r)}),ms=S(function(e,r,n){return o(ma,function(a){return o(ma,function(t){return Bn(o(e,a,t))},n)},r)}),ps=function(e){return p(br,ms(V),Bn(P),e)},bs=a$,gs=$(function(e,r){var n=r;return $c(o(ma,bs(e),n))}),hs=S(function(e,r,n){return o(fo,function(a){return 0},ps(o(re,gs(e),r)))}),_s=S(function(e,r,n){return Bn(0)}),ws=$(function(e,r){var n=r;return o(fo,e,n)});rr.Task=r$(ds,hs,_s,ws);var ys=sc("Task"),so=$(function(e,r){return ys(o(fo,e,r))}),xs=R$,Ss=hv,pa={$:1},Yc=function(e){return{$:2,a:e}},Ra={$:0},He=$(function(e,r){return{$:0,a:e,b:r}}),ae=S(function(e,r,n){return r(e(n))}),ln=function(e){var r=e.b.B;return r.a},Cs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ee(o(He,r,{B:i,ab:c,T:o(V,a,n)}))}else return q},Xc=function(e){var r=e.b;return o(He,Ra,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ls=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bi.da?Xc(n):n;case 2:var i=a.a.cU;return(U(i+r.eM,ln(n).bD)>0?o(ae,Cs,fr(o(He,pa,t))):Br)(o(He,Yc({cU:i+r.eM}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Uc,l.eD,We(r,{bD:l.bD+r.eM})),s=o(e,v,u);return o(He,Ra,{B:x(v,s),ab:P,T:o(V,t.B,t.T)})}}),Qc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ks=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(V,a,n);e=i,r=c,n=l;continue e}else return n}}),Ps=$(function(e,r){return Re(p(ks,e,r,P))}),Kc=S(function(e,r,n){if(r<=0)return P;{var a=x(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(V,_,o(V,c,o(V,s,o(V,b,o(Ps,r-4,w))))):o(V,_,o(V,c,o(V,s,o(V,b,p(Kc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),zs=$(function(e,r){return p(Kc,0,e,r)}),Ts=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Re(n),le(h([a]),t)),c=o(zs,e,i),l=o(Qc,e,i);if(l.b){var u=l.a,v=l.b;return o(He,pa,{B:u,ab:v,T:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(He,pa,{B:d,ab:P,T:m})}else return r}}),Ms=function(e){var r=e.b;return o(He,pa,r)},Vs=function(e){var r=e.b;return o(He,Yc({cU:ln(e).bD}),r)},Ds=$(function(e,r){switch(e.$){case 1:return Ms(r);case 2:return Xc(r);case 3:return Vs(r);default:var n=e.a;return o(Ts,n,r)}}),el=$(function(e,r){var n=r.a,a=r.b;return x(e(n),a)}),Bs=$(function(e,r){return We(r,{av:e(r.av)})}),As=function(e){return{$:3,a:e}},Fs=function(e){return{$:2,a:e}},Rs=$(function(e,r){return{$:0,a:e,b:r}}),Es=$(function(e,r){return{$:1,a:e,b:r}}),Pe=$(function(e,r){if(r.$)return q;var n=r.a;return ee(e(n))}),J=function(e){return e<0?-e:e},mo=Bv,js=S(function(e,r,n){return o(fr,0/0,mo(o(e,r,n)))}),rl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ns=Sv,nl=function(e){return p(Ns,V,P,e)},Zs=$(function(e,r){var n=o(rl,function(a){return a!=="0"&&a!=="."},nl(r));return le(e&&n?"-":"",r)}),pe=lc,yt=_v,al=Rv,tl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=cn(n);if(a.$===1)return"01";var t=a.a;return o(yt,"0",tl(t))}else{var i=nr(r);return i>=48&&i<57?o(yt,al(i+1),n):"0"}},xt=sv,Gs=gv,Ea=function(e){return o(yt,e,"")},ol=S(function(e,r,n){return e<=0?n:p(ol,e>>1,le(r,r),e&1?le(n,r):n)}),kn=$(function(e,r){return p(ol,e,r,"")}),St=S(function(e,r,n){return le(n,o(kn,e-Dr(n),Ea(r)))}),Ct=xv,il=function(e){var r=o(io,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return x(n,t)}else{var n=r.a;return x(n,"0")}else return x("0","0")},Ws=function(e){var r=o(io,"e",pe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,Jc(o(ss,"+",t)?o(Dn,1,t):t)),c=il(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(fr,"0",o(Pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Pe,el(Ea),cn(le(o(kn,J(i),"0"),v))))):p(St,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Hs=S(function(e,r,n){if(xt(n)||Gs(n))return pe(n);var a=n<0,t=il(Ws(J(n))),i=t.a,c=t.b,l=Dr(i)+r,u=le(o(kn,-l+1,"0"),p(St,l,"0",le(i,c))),v=Dr(u),s=o(Me,1,l),d=o(e,a,p(Yr,s,v,u)),m=p(Yr,0,s,u),f=d?Ct(o(fr,"1",o(Pe,tl,cn(Ct(m))))):m,g=Dr(f),b=f==="0"?f:r<=0?le(f,o(kn,J(r),"0")):U(r,Dr(c))<0?p(Yr,0,g-r,f)+("."+p(Yr,g-r,g,f)):le(i+".",p(St,r,"0",c));return o(Zs,a,b)}),cl=Hs($(function(e,r){var n=cn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Is=js(cl),Os=S(function(e,r,n){var a=o(lo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Is,t,n)}),ll=nv,ul=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ll,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ee(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},nn=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return C(H,0,r,n,C(H,1,v,s,d,m),C(H,1,i,c,l,u))}else return C(H,e,i,c,C(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return C(H,0,v,s,C(H,1,g,b,w,y),C(H,1,r,n,m,t))}else return C(H,e,r,n,a,t)}),Lt=S(function(e,r,n){if(n.$===-2)return C(H,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ll,e,t);switch(u){case 0:return C(nn,a,t,i,p(Lt,e,r,c),l);case 1:return C(H,a,t,r,c,l);default:return C(nn,a,t,i,c,p(Lt,e,r,l))}}),hn=S(function(e,r,n){var a=p(Lt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(H,1,t,i,c,l)}else{var u=a;return u}}),Us=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},vl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return C(H,0,f,g,C(H,1,n,a,C(H,0,i,c,l,u),b),C(H,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,d=L.c,m=L.d,y=L.e;return C(H,1,n,a,C(H,0,i,c,l,u),C(H,0,s,d,m,y))}else return e},Ci=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return C(H,0,i,c,C(H,1,u,v,s,d),C(H,1,n,a,m,C(H,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,y=T.e;return C(H,1,n,a,C(H,0,i,c,L,m),C(H,0,g,b,w,y))}else return e},Js=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(H,n,l,u,v,C(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ci(r)}else break e;else return c.a,c.d,Ci(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(H,r,n,a,ra(t),l);var u=vl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(nn,v,s,d,ra(m),f)}else return or}else return C(H,r,n,a,ra(t),l)}else return or},_n=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(H,n,a,t,o(_n,e,i),c);var u=vl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(nn,v,s,d,o(_n,e,m),f)}else return or}else return C(H,n,a,t,o(_n,e,i),c);else return o(qs,e,Ut(Js,e,r,n,a,t,i,c))}),qs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Cr(e,a)){var l=Us(c);if(l.$===-1){var u=l.b,v=l.c;return C(nn,n,u,v,i,ra(c))}else return or}else return C(nn,n,a,t,i,o(_n,e,c))}else return or}),$l=$(function(e,r){var n=o(_n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=S(function(e,r,n){var a=r(o(ul,e,n));if(a.$)return o($l,e,n);var t=a.a;return p(hn,e,t,n)}),Ys=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Es,x(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Rs,x(i,c),p(Os,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){return a.$===3?As(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){return a.$===2?Fs(n):a}))}},Xs=function(e){return Bs(Ys(e))},Qs=$(function(e,r){return o(re,Xs(e),r)}),Ks=$(function(e,r){return We(r,{eD:o(Qs,e,r.eD)})}),ed=$(function(e,r){var n=r.a,a=r.b;return o(He,n,We(a,{B:o(el,Ks(e),a.B)}))}),rd=$(function(e,r){var n=r.a,a=r.b;return x(n,e(a))}),nd=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(He,a,We(t,{B:o(rd,o(e,i.a,r),i)}))}),ad=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return We(a,{aM:!a.aM});case 2:var t=n.a;return We(a,{G:p(Ls,e,t,a.G)});case 3:var i=n.a;return We(a,{G:o(ed,i,a.G)});case 4:var c=n.a;return We(a,{G:p(nd,r,c,a.G)});default:var l=n.a;return We(a,{G:o(Ds,l,a.G)})}}),td=$(function(e,r){return o(He,Ra,{B:x(e,r(e)),ab:P,T:P})}),od=t$,Li=od(P),ba=Gv,Pn=Zv,id=u$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Be({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Be({ep:d,eE:s,da:v,eL:u,e8:l,ft:c,fx:i,ea:t,ei:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ba(Pn)))},o(M,"left",X))},o(M,"pressedKeys",ba(Pn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Be({da:v,cb:u,fe:l,fy:c,fz:i,ei:t,fV:a,fZ:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Be({e_:n,fT:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Be({eH:r,eI:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),cd=function(e){return{$:4,a:e}},ld={$:0},ud=vc,Je=$(function(e,r){return o(pc,e,ud(r))}),I=Je("className"),vd=function(e){var r=e.b.B;return r.b},ga=Je("id"),$d=m$,ha=$d,fd=p$,se=fd,sd={$:1},dd=function(e){return{$:3,a:e}},md=function(e){return{$:5,a:e}},ki=jr("a"),po=jr("button"),Pi=function(e){return o(Je,"href",h$(e))},pd=zr("clip-rule"),Le=zr("d"),bd=zr("fill"),fl=dc("http://www.w3.org/2000/svg"),gd=fl("svg"),hd=zr("viewBox"),_d=o(b$,"http://www.w3.org/XML/1998/namespace","xml:space"),je=gd(h([hd("0 0 24 24"),bd("currentColor"),o(se,"width","100%"),o(se,"height","100%"),_d("http://www.w3.org/2000/svg")])),wd=zr("fill-rule"),ke=fl("path"),Qr={eG:je(h([o(ke,h([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eU:je(h([o(ke,h([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eZ:je(h([o(ke,h([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),ff:je(h([o(ke,h([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(ke,h([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fg:je(h([o(ke,h([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(ke,h([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fq:je(h([o(ke,h([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fr:je(h([o(ke,h([Le("M7 5V19L18 12L7 5Z")]),P)])),fs:je(h([o(ke,h([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),bi:je(h([o(ke,h([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:je(h([o(ke,h([wd("evenodd"),pd("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:je(h([o(ke,h([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f1:je(h([o(ke,h([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},yd=function(e){return{$:0,a:e}},sl=mc,dl=$(function(e,r){return o(sl,e,yd(r))}),bo=function(e){return o(dl,"click",Be(e))},zi=Je("target"),xd=Je("title"),kt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(H,n,a,o(e,a,t),o(kt,e,i),o(kt,e,c))}),Sd=pt,sr=Sd,Cd=function(e){return p(Da,S(function(r,n,a){return o(V,n,a)}),P,e)},Ld=$(function(e,r){return{$:3,a:e,b:r}}),kd=$(function(e,r){return{$:2,a:e,b:r}}),Pd=$(function(e,r){return{$:0,a:e,b:r}}),zd=$(function(e,r){return{$:1,a:e,b:r}}),ja=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ml=k(ja,0/255,0/255,0/255,1),Td=vc,Md=$(function(e,r){return o(pc,e,Td(r))}),Vd=Md("checked"),Se=pv,Dd=S(function(e,r,n){return le(o(kn,e-Dr(n),Ea(r)),n)}),_a=iv,pl=function(e){var r=function(n){return n<10?Fe(n):Ea(al(87+n))};return e<16?r(e):le(pl(e/16|0),r(o(_a,16,e)))},Bd=o(ae,pl,o(Dd,2,"0")),go=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b4:a,ca:n,cK:r}},Ad=function(e){var r=go(e),n=r.cK,a=r.ca,t=r.b4;return o(Vr,"",o(V,"#",o(re,o(ae,Se,Bd),h([n*255,a*255,t*255]))))},Pt=Je("htmlFor"),zt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wa=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Fd=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(V,t,n)}),bl=$(function(e,r){return p(br,Fd(e),P,r)}),gl=B(function(e,r,n,a){return{e3:r,fc:e,fl:n,fF:a}}),Rd=G$,Ed=Av,jd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Nd=Z$,Zd=function(e){return o(Nd,{ey:!1,fh:!1},e)},hl=function(e){if(e.b){var r=e.a;return e.b,ee(r)}else return q},Gd=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Wd=function(e){return{$:2,a:e}},Hd=function(e){return{$:0,a:e}},Id=function(e){return{$:1,a:e}},qa=$(function(e,r){return nr(r)-nr(e)}),Ya=S(function(e,r,n){var a=nr(n);return U(nr(e),a)<1&&U(a,nr(r))<1}),Od=$(function(e,r){var n=function(t){return U(t,e)<0?ue(t):we(Id(r))},a=p(Ya,"0","9",r)?ue(o(qa,"0",r)):p(Ya,"a","z",r)?ue(10+o(qa,"a",r)):p(Ya,"A","Z",r)?ue(10+o(qa,"A",r)):we(Hd(r));return o(wa,n,a)}),_l=$(function(e,r){var n=cn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return ue(c+l*e)},o(_l,e,i))},o(Od,e,t))}),Ud=$(function(e,r){return 2<=e&&e<=36?o(_l,e,Ct(r)):we(Wd(e))}),Jd=Ud(16),qd=S(function(e,r,n){return k(ja,e,r,n,1)}),Yd=B(function(e,r,n,a){return k(ja,e,r,n,a)}),An=ov,Xd=$(function(e,r){var n=o(An,10,e);return Se(r*n)/n}),Qd=Pv,Kd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=nl(n);if(a.b&&!a.b.b){var t=a.a;return Ed(h([t,t]))}else return n};return o(ae,Qd,o(ae,function(n){return o(Pe,function(a){return p(Rd,1,a,n)},Zd(e))},o(ae,zt(hl),o(ae,Pe(function(n){return n.fF}),o(ae,Pe(bl(Br)),o(ae,jd("Parsing hex regex failed"),wa(function(n){var a=o(re,o(ae,r,o(ae,Jd,Gd(ns))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(k(Yd,t/255,c/255,u/255,o(Xd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(qd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ya=jr("input"),Tt=jr("label"),Mt=Je("name"),wl=$(function(e,r){return p(br,M,r,e)}),em=o(wl,h(["target","checked"]),X),rm=function(e){return o(dl,"change",o(da,e,em))},nm=function(e){return x(e,!0)},am=function(e){return{$:1,a:e}},tm=$(function(e,r){return o(sl,e,am(r))}),om=o(wl,h(["target","value"]),Pn),ho=function(e){return o(tm,"input",o(da,nm,o(da,e,om)))},yl=Je("max"),xl=Je("min"),Sl=function(e){return o(Je,"step",e)},xa=Je("type"),_o=Je("value"),Ti=function(e){var r=e.cd,n=e.cZ,a=e.ct,t=e.cp,i=e.cS,c=e.cx;return o(O,P,h([o(Tt,h([Pt(r)]),h([o(O,h([I("relative w-full")]),h([o(O,h([I("inline-block")]),h([sr(r)])),o(O,h([I("inline-block float-right")]),h([sr(pe(n))]))]))])),o(ya,h([xa("range"),o(se,"width","100%"),ga(r),Mt(r),xl(pe(a)),yl(pe(t)),_o(pe(n)),Sl(pe(i)),ho(o(ae,mo,o(ae,fr(42),c)))]),P)]))},im=$(function(e,r){if(r.$)return e;var n=r.a;return n}),cm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,h([I("h-12 py-4")]),h([o(Tt,h([I("block"),Pt(e)]),h([o(ya,h([I("relative bottom-[1px] align-middle mr-2"),xa("checkbox"),ga(e),Mt(e),rm(Ld(e)),Vd(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ti({cd:e,cp:i,ct:t,cx:Pd(e),cS:.01*(i-t),cZ:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ti({cd:e,cp:i,ct:t,cx:o(ae,Se,zd(e)),cS:1,cZ:c});default:var c=r.a;return o(O,P,h([o(O,h([o(se,"margin-bottom","6px")]),h([o(Tt,h([Pt(e)]),h([sr(e)]))])),o(ya,h([xa("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ga(e),Mt(e),ho(function(l){return o(kd,e,o(im,ml,Kd(l)))}),_o(Ad(c))]),P)]))}}),lm=function(e){return o(O,h([I("p-4 border-y-[0.5px] border-white20")]),h([o(O,h([I("text-lg pb-2")]),h([sr(e.fi)])),o(O,h([I("pl-2 pr-2")]),Cd(o(kt,cm,e.av)))]))},um=function(e){return o(O,h([I("text-xs text-white60")]),o(re,lm,e))},vm=function(e){return o(O,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(cl,3,ln(e).bD))]))},$m=function(e){e.a;var r=e.b.T;return o(Pe,function(n){return Se(60/(ln(e).bD-n))},o(Pe,o(ae,os,function(n){return n.bD}),hl(o(Qc,59,r))))},fm=function(e){return o(O,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=$m(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Fe(n)+" Fps")])}())},sm=function(e){return{$:0,a:e}},dm=function(e){var r=e.b.T;return Ar(r)},mm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},pm=function(e){return o(ya,h([I("absolute w-full"),xa("range"),xl(Fe(0)),yl(Fe(mm(e)-1)),_o(Fe(dm(e))),Sl(Fe(1)),ho(o(ae,mo,o(ae,fr(42),o(ae,Se,sm))))]),P)},Mi={$:1},bm={$:3},gm={$:2},Cl=function(e){return!e.b},Vi=$(function(e,r){return o(po,h([I("px-2 bg-black60 hover:bg-black80 active:bg-black"),I(r),bo(e)]),h([sr("REC")]))}),Di=$(function(e,r){return o(po,h([I("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),bo(r)]),h([o(O,h([I("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),hm=function(e){var r=e.a,n=e.b.ab;return o(O,h([I("py-1")]),h([function(){switch(r.$){case 0:return o(Vi,Mi,"text-red-500 font-bold");case 1:return o(Vi,gm,"text-white60 hover:text-white80 font-bold");default:return o(O,P,P)}}(),function(){switch(r.$){case 0:return o(O,P,P);case 1:return Cl(n)?o(O,P,P):o(Di,Qr.fr,bm);default:return o(Di,Qr.fq,Mi)}}()]))},_m=function(e){return o(O,h([I("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([pm(e),hm(e),fm(e),vm(e)]))},wm=function(e){var r=e.a;return Cr(r,Ra)},ym=$(function(e,r){var n=wm(r.G)?o(O,P,P):o(O,h([I("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.bi.fV+.5*e.bk.fT)+"px"),o(se,"top",pe(-e.bi.fZ+.5*e.bk.e_)+"px")]),h([o(O,h([I(e.bi.cb?"text-black80":"text-black40")]),h([Qr.bi]))]));return o(O,P,h([n]))}),xm=$(function(e,r){var n=o(po,h([I(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),bo(sd),xd("Distraction Free Mode")]),h([Qr.f1])),a=o(O,h([I("absolute w-8 bottom-12")]),h([o(ki,h([I("text-twitterBlue40 hover:text-twitterBlue"),Pi("https://twitter.com/AzizErkalSelman"),zi("_blank")]),h([Qr.fN]))])),t=o(O,h([I("absolute w-8 bottom-2")]),h([o(ki,h([I("text-githubCat40 hover:text-githubCat"),Pi("https://github.com/erkal/elm-3d-playground-exploration"),zi("_blank")]),h([Qr.eU]))]));return r.aM?o(O,h([I("fixed w-10 h-10 p-1")]),h([n])):o(O,P,h([o(O,h([I("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(O,h([I("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.bk.e_-80)+"px")]),h([o(ha,dd,um(ln(r.G).eD))])),o(O,h([I("absolute bottom-0 left-10 h-20"),o(se,"width",e.bk.fT>600?"600px":pe(e.bk.fT-40)+"px")]),h([o(ha,md,_m(r.G))])),o(ym,e,r)]))}),Sm=S(function(e,r,n){var a=vd(n.G),t=ln(n.G);return o(O,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(se,"width",pe(t.bk.fT)+"px"),o(se,"height",pe(t.bk.e_)+"px")]),h([o(O,h([I("fixed")]),h([o(ha,Oc(ld),o(e,t,a))])),o(O,h([ga("gui")]),h([o(xm,t,n),o(ha,cd,o(r,t,a))]))]))}),Cm=Ue(function(e,r,n,a,t,i){var c=$(function(u,v){return x(k(ad,r,i,u,v),Li)}),l=function(u){var v=o(Uc,n,u.e5);return x({aM:u.e5.bk.fT<500,G:o(td,v,a)},Li)};return xs({e4:l,fG:Oc(id(vs)),fO:c,fQ:o(Sm,e,t)})}),Lm=B(function(e,r,n,a){return _e(Cm,e,r,n,a,$(function(t,i){return o(O,P,P)}),S(function(t,i,c){return c}))}),Ll=or,km=Ll,kl=$(function(e,r){var n=r;return p(hn,e,0,n)}),Pm=function(e){return p(Vn,kl,km,e)},zm=Pm(h([x(-3,-3),x(-3,1),x(-3,2),x(-3,3),x(-2,-2),x(-2,0),x(-2,3),x(-2,4),x(-1,-5),x(-1,-4),x(-1,-3),x(-1,-2),x(-1,0),x(-1,3),x(-1,4),x(0,-4),x(0,-3),x(0,-2),x(0,-1),x(0,0),x(0,1),x(0,2),x(0,3),x(0,4),x(1,-5),x(1,-4),x(1,-3),x(1,-2),x(1,0),x(1,3),x(1,4),x(2,-2),x(2,0),x(2,3),x(2,4),x(3,-3),x(3,1),x(3,2),x(3,3)])),Tm=function(e){return{ax:zm}},Mm=$v,_r=bv,Vm=$(function(e,r){var n=e,a=r,t=a.c2-n.c2,i=a.fZ-n.fZ,c=a.fV-n.fV,l=o(Me,J(c),o(Me,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=_r(s*s+v*v+u*u);return ee({fV:s/d,fZ:v/d,c2:u/d})}else return q}),na=function(e){return e},wo=$(function(e,r){var n=e,a=r;return{fV:a.fZ*n.c2-a.c2*n.fZ,fZ:a.c2*n.fV-a.fV*n.c2,c2:a.fV*n.fZ-a.fZ*n.fV}}),wn=function(e){var r=e,n=o(Me,J(r.fV),o(Me,J(r.fZ),J(r.c2)));if(n){var a=r.c2/n,t=r.fZ/n,i=r.fV/n,c=_r(i*i+t*t+a*a);return ee({fV:i/c,fZ:t/c,c2:a/c})}else return q},Sa=$(function(e,r){var n=e,a=r;return{fV:a.fV-n.fV,fZ:a.fZ-n.fZ,c2:a.c2-n.c2}}),Dm=$(function(e,r){var n=e,a=r;return a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2}),Pl=$(function(e,r){var n=e,a=r;return U(a,n)>0}),Bm=$(function(e,r){var n=e,a=r;return U(a,n)<0}),Am=$(function(e,r){var n=e,a=r;return{fV:a.fV-n.fV,fZ:a.fZ-n.fZ,c2:a.c2-n.c2}}),Fm=$(function(e,r){var n=e,a=r,t=a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2;return{fV:n.fV*t,fZ:n.fZ*t,c2:n.c2*t}}),Rm=function(e){var r=e;return{fV:-r.fV,fZ:-r.fZ,c2:-r.c2}},Xe=0,zl={fV:0,fZ:0,c2:0},Em=S(function(e,r,n){return o(zt,function(a){var t=o(Am,o(Fm,a,r),r);return o(zt,function(i){var c=o(wo,r,e),l=o(Dm,n,c),u=o(Pl,Xe,l)?c:o(Bm,Xe,l)?Rm(c):zl;return o(Pe,function(v){return R(a,i,v)},wn(u))},wn(t))},wn(e))}),jm=function(e){var r=e,n=J(r.c2),a=J(r.fZ),t=J(r.fV);if(U(t,a)<1)if(U(t,n)<1){var i=_r(r.c2*r.c2+r.fZ*r.fZ);return{fV:0,fZ:-r.c2/i,c2:r.fZ/i}}else{var i=_r(r.fZ*r.fZ+r.fV*r.fV);return{fV:-r.fZ/i,fZ:r.fV/i,c2:0}}else if(U(a,n)<1){var i=_r(r.c2*r.c2+r.fV*r.fV);return{fV:r.c2/i,fZ:0,c2:-r.fV/i}}else{var i=_r(r.fV*r.fV+r.fZ*r.fZ);return{fV:-r.fZ/i,fZ:r.fV/i,c2:0}}},yo=function(e){var r=jm(e),n=r,a=n,t=e,i=t,c={fV:i.fZ*a.c2-i.c2*a.fZ,fZ:i.c2*a.fV-i.fV*a.c2,c2:i.fV*a.fZ-i.fZ*a.fV};return x(r,c)},Xr=function(e){var r=e;return r},dr=function(e){return e},Nm=$(function(e,r){var n=yo(e),a=n.a,t=n.b;return dr({cy:r,c0:a,c1:t,c3:e})}),Zm=function(e){var r=o(Sa,e.aS,e.df),n=Xr(e.ej),a=o(wo,r,n),t=p(Em,r,n,a);if(t.$){var v=wn(r);if(v.$){var d=yo(e.ej),m=d.a,f=d.b;return dr({cy:e.df,c0:f,c1:e.ej,c3:m})}else{var s=v.a;return o(Nm,s,e.df)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return dr({cy:e.df,c0:u,c1:l,c3:c})}},Tr={fV:0,fZ:0,c2:0},Gm=function(e){return{$:0,a:e}},xe=function(e){var r=e;return J(r)},aa=function(e){var r=e;return .5*r},Wm=vv,Hm=function(e){var r=e;return Wm(r)},Im=function(e){var r=aa(xe(e.ek)),n=Hm(r);return{cJ:Gm(n),c_:e.c_}},vr=function(e){return e},xo=vr({fV:0,fZ:1,c2:0}),ir=function(e){return e},Om=function(e){var r=e.aS,n=e.df,a=e.ej;return Im({ek:ir(2*Mm(.5)),c_:Zm({df:na(n),aS:na(r),ej:o(fr,xo,o(Vm,Tr,na(a)))})})},Fr=lv,Um=$(function(e,r){return(r-Hc(r/e)*e)/e}),mr=cv,Jm=function(e){return 2*mr*e},Vt=B(function(e,r,n,a){return e+(r-e)*(1+Fr(Jm(o(Um,n,a))))/2}),So=function(e){return Om({df:{fV:1+k(Vt,-5,5,7,e.bD),fZ:1,c2:20},aS:{fV:0,fZ:0,c2:0},ej:{fV:0,fZ:1,c2:0}})},ar=function(e){return e},qm=S(function(e,r,n){return{fV:e,fZ:r,c2:n}}),pn=function(e){return ir(mr*(e/180))},In=function(e){return e},ta=function(e){var r=e;return r},Ym=$(function(e,r){var n=e,a=r;return a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2}),Tl=function(e){var r=e;return r.eK},te=$(function(e,r){var n=r;return e*n}),Ml=function(e){var r=e;return r.cy},Xm=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.fk,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ+(a.c2-i.c2)*l.c2}),Qm=S(function(e,r,n){var a=e,t=r,i=n;return{fV:i.fV+t*a.fV,fZ:i.fZ+t*a.fZ,c2:i.c2+t*a.c2}}),Km=$(function(e,r){var n=Tl(r),a=e,t=a.fk,i=o(Ym,t,n);if(i){var c=Ml(r),l=o(Xm,e,c),u=o(te,-1/i,l);return ee(p(Qm,n,u,c))}else return q}),e0=$(function(e,r){return{fV:e,fZ:r}}),Bi=$(function(e,r){var n=e,a=r;return n*a}),r0=function(e){var r=e;return r},Ai=function(e){var r=e;return r0(r.et)},n0=function(e){var r=e;return r.aL},Vl=$(function(e,r){var n=r;return n/e}),un=function(e){var r=e;return r.cy},Dt=function(e){var r=e;return un(r)},Bt=function(e){var r=e;return-r},Co=vr({fV:0,fZ:0,c2:-1}),a0=$(function(e,r){var n=e,a=r;return a/n}),t0=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fV:v.fV*a.fV+l.fV*a.fZ+i.fV*a.c2,fZ:v.fZ*a.fV+l.fZ*a.fZ+i.fZ*a.c2,c2:v.c2*a.fV+l.c2*a.fZ+i.c2*a.c2}}),Rr=$(function(e,r){return{eK:r,cy:e}}),Ca=function(e){var r=e;return{fV:-r.fV,fZ:-r.fZ,c2:-r.c2}},Nr=function(e){var r=e;return r.c3},At=function(e){var r=e;return Ca(Nr(r))},o0=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c0,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ}),Lo=S(function(e,r,n){var a=e,t=r,i=n;return{fV:a,fZ:t,c2:i}}),i0=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cy,v=u,s=t.c3,d=s,m=t.c1,f=m,g=t.c0,b=g;return{fV:v.fV+i*b.fV+c*f.fV+l*d.fV,fZ:v.fZ+i*b.fZ+c*f.fZ+l*d.fZ,c2:v.c2+i*b.c2+c*f.c2+l*d.c2}}),c0=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c1,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ}),l0=S(function(e,r,n){var a=e,t=o(c0,Ai(r),n),i=o(o0,Ai(r),n),c=a.c_,l=c,u=n0(r);u.a;var v=u.b,s=a.cJ;if(s.$){var g=s.a,b=o(a0,v,g),w=k(i0,l,o(Bi,b,i),o(Bi,b,t),Xe);return o(Rr,w,At(a.c_))}else{var d=s.a,m=Bt(o(Vl,d,o(te,.5,v))),f=o(t0,l,o(fr,Co,wn(p(Lo,i,t,m))));return o(Rr,Dt(a.c_),f)}}),an=uv,Ft=function(e){var r=e;return{fV:Fr(r),fZ:an(r)}},u0=function(e){var r=e;return{fV:-r.fZ,fZ:r.fV}},v0=function(e){return e},$0=$(function(e,r){return v0({cy:r,c0:e,c1:u0(e)})}),f0=$(function(e,r){return o($0,Ft(e),r)}),s0=S(function(e,r,n){var a=e.a,t=e.b;return{et:o(f0,r,n),aL:x(xe(a),xe(t))}}),yr=function(e){var r=e;return r.fV},d0=$(function(e,r){var n=e,a=r;return{fV:n,fZ:a}}),xr=function(e){var r=e;return r.fZ},Sr=function(e){var r=e;return r.c2},m0=B(function(e,r,n,a){var t=n.fV,i=n.fZ,c=function(v){return p(qm,ta(yr(v)),ta(xr(v)),ta(Sr(v)))},l=p(s0,x(In(r.fT),In(r.e_)),pn(0),o(e0,0,0)),u=o(d0,In(t),In(i));return o(Pe,c,o(Km,a,p(l0,e,l,u)))}),vn=$(function(e,r){var n=e,a=r;return{fV:a.fV+n.fV,fZ:a.fZ+n.fZ,c2:a.c2+n.c2}}),p0=$(function(e,r){return{fk:e,cy:r}}),b0=$(function(e,r){var n=r;return o(p0,n.fk,o(vn,e,n.cy))}),g0=$(function(e,r){return{fk:r,cy:e}}),ko=vr({fV:0,fZ:0,c2:1}),Po=ko,h0=o(g0,Tr,Po),_0=B(function(e,r,n,a){return k(m0,r,n,a,o(b0,p(Lo,ar(0),ar(0),ar(e)),h0))}),Dl=_0(0),w0=$(function(e,r){var n=p(Dl,So(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return We(r,{ax:o(kl,x(Se(a.fV),Se(a.fZ)),r.ax)})}),y0=$(function(e,r){var n=r;return o($l,e,n)}),x0=$(function(e,r){var n=p(Dl,So(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return We(r,{ax:o(y0,x(Se(a.fV),Se(a.fZ)),r.ax)})}),S0=$(function(e,r){return e.dp.ea&&e.bi.cb?o(x0,e,r):e.bi.cb?o(w0,e,r):r}),zo=function(e){return e},Bl=S(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),C0=function(e){var r=e;return r},L0=function(e){var r=p(Bl,1667,25e3,C0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return zo({fV:n,fZ:a})},To=$(function(e,r){return{$:0,a:e,b:r}}),Xa=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),Qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),k0=vr({fV:-1,fZ:0,c2:0}),P0=vr({fV:0,fZ:-1,c2:0}),Al=vr({fV:1,fZ:0,c2:0}),me=S(function(e,r,n){var a=e,t=r,i=n;return{fV:a,fZ:t,c2:i}}),z0=Ue(function(e,r,n,a,t,i){var c=o(Xa,n,i)?ko:Co,l=o(Xa,r,t)?xo:P0,u=o(Xa,e,a)?Al:k0,v=R(xe(o($r,e,a)),xe(o($r,r,t)),xe(o($r,n,i))),s=p(me,o(Qa,e,a),o(Qa,r,t),o(Qa,n,i)),d=dr({cy:s,c0:u,c1:l,c3:c});return{et:d,aL:v}}),T0=$(function(e,r){return _e(z0,yr(e),xr(e),Sr(e),yr(r),xr(r),Sr(r))}),Rt=S(function(e,r,n){return{fV:e,fZ:r,c2:n}}),M0=$(function(e,r){var n=r/2;return o(To,e,o(T0,p(Rt,-n,-n,-n),p(Rt,n,n,n)))}),Mo=function(e){return{$:5,a:e}},V0=function(e){return Mo(e)},Et=function(e){return{$:0,a:e}},Fl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ka=function(e){return p(Bl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Fn=I$,D0=function(e){var r=go(e),n=r.cK,a=r.ca,t=r.b4;return p(Fn,Ka(n),Ka(a),Ka(t))},B0=function(e){return p(Fl,0,Et(D0(e)),Et(0))},Rl=$(function(e,r){return{$:2,a:e,b:r}}),El=$(function(e,r){return{$:4,a:e,b:r}}),jl=$(function(e,r){return{$:3,a:e,b:r}}),Nl=$(function(e,r){return{$:1,a:e,b:r}}),A0=S(function(e,r,n){return{fV:e,fZ:r,c2:n}}),F0=function(e){var r=e;return r},Vo=function(e){var r=e;return F0(r.et)},Do=function(e){var r=e;return r.aL},Zr=function(e){var r=e;return r.c0},Gr=function(e){var r=e;return r.c1},R0=$(function(e,r){return dr({cy:o(vn,e,un(r)),c0:Zr(r),c1:Gr(r),c3:Nr(r)})}),E0=$(function(e,r){return{et:o(R0,e,Vo(r)),aL:Do(r)}}),j0=$(function(e,r){var n=r;return o(Rr,o(vn,e,n.cy),n.eK)}),N0=$(function(e,r){var n=r;return{k:o(j0,e,n.k),e9:n.e9,fu:n.fu}}),Bo=function(e){var r=e;return r},Z0=function(e){return e},Zl=$(function(e,r){var n=Bo(r),a=n.a,t=n.b;return Z0(x(e(a),e(t)))}),G0=$(function(e,r){return o(Zl,vn(e),r)}),Ao=function(e){var r=e;return r.eA},Fo=function(e){var r=e;return r.fu},Gl=$(function(e,r){return{eA:r,fu:xe(e)}}),W0=$(function(e,r){return o(Gl,Fo(r),o(vn,e,Ao(r)))}),Wl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return R(e(a),e(t),e(i))}),H0=$(function(e,r){return o(Wl,vn(e),r)}),Na=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(A0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(To,s,o(E0,i,c));case 1:var s=r.a,l=r.b;return o(Nl,s,o(H0,i,l));case 3:var s=r.a,u=r.b;return o(jl,s,o(W0,i,u));case 2:var s=r.a,v=r.b;return o(Rl,s,o(N0,i,v));case 4:var s=r.a,d=r.b;return o(El,s,o(G0,i,d));default:var m=r.a;return Mo(o(re,Na(R(n,a,t)),m))}}),I0=function(e){return Na(R(e,0,0))},Fi=function(e){return Na(R(0,e,0))},O0=function(e){return Na(R(0,0,e))},oa=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=an(c),v=a.eK,s=v,d=s.fV*u,m=l*d,f=d*d,g=s.fZ*u,b=l*g,w=d*g,y=g*g,_=1-2*(f+y),L=s.c2*u,T=l*L,Z=2*(w-T),j=2*(w+T),E=d*L,N=2*(E+b),G=2*(E-b),A=g*L,Y=2*(A-m),Q=2*(A+m),ie=L*L,ve=1-2*(y+ie),oe=1-2*(f+ie);return{fV:ve*i.fV+Z*i.fZ+N*i.c2,fZ:j*i.fV+oe*i.fZ+Y*i.c2,c2:G*i.fV+Q*i.fZ+_*i.c2}}),Rn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=an(c),v=a.cy,s=v,d=i.fV-s.fV,m=i.fZ-s.fZ,f=i.c2-s.c2,g=a.eK,b=g,w=b.fV*u,y=l*w,_=w*w,L=b.fZ*u,T=l*L,Z=w*L,j=L*L,E=1-2*(_+j),N=b.c2*u,G=l*N,A=2*(Z-G),Y=2*(Z+G),Q=w*N,ie=2*(Q+T),ve=2*(Q-T),oe=L*N,de=2*(oe-y),Ve=2*(oe+y),Ce=N*N,gr=1-2*(j+Ce),hr=1-2*(_+Ce);return{fV:s.fV+gr*d+A*m+ie*f,fZ:s.fZ+Y*d+hr*m+de*f,c2:s.c2+ve*d+Ve*m+E*f}}),U0=S(function(e,r,n){return dr({cy:p(Rn,e,r,un(n)),c0:p(oa,e,r,Zr(n)),c1:p(oa,e,r,Gr(n)),c3:p(oa,e,r,Nr(n))})}),J0=S(function(e,r,n){return{et:p(U0,e,r,Vo(n)),aL:Do(n)}}),q0=$(function(e,r){var n=o(Rn,e,r),a=o(oa,e,r);return function(t){var i=t;return o(Rr,n(i.cy),a(i.eK))}}),Y0=S(function(e,r,n){var a=n;return{k:p(q0,e,r,a.k),e9:a.e9,fu:a.fu}}),X0=S(function(e,r,n){return o(Zl,o(Rn,e,r),n)}),Q0=S(function(e,r,n){return o(Gl,Fo(n),p(Rn,e,r,Ao(n)))}),K0=S(function(e,r,n){return o(Wl,o(Rn,e,r),n)}),Za=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(To,l,p(J0,e,r,a));case 1:var l=n.a,t=n.b;return o(Nl,l,p(K0,e,r,t));case 3:var l=n.a,i=n.b;return o(jl,l,p(Q0,e,r,i));case 2:var l=n.a,c=n.b;return o(Rl,l,p(Y0,e,r,c));case 4:var l=n.a,u=n.b;return o(El,l,p(X0,e,r,u));default:var v=n.a;return Mo(o(re,o(Za,e,r),v))}}),Ro=Al,ep=o(Rr,Tr,Ro),rp=$(function(e,r){return p(Za,ep,ir(e),r)}),Eo=xo,np=o(Rr,Tr,Eo),ap=$(function(e,r){return p(Za,np,ir(e),r)}),tp=o(Rr,Tr,Po),op=$(function(e,r){return p(Za,tp,ir(e),r)}),ip=k(ja,237/255,212/255,0/255,1),cp=$(function(e,r){var n=function(a){var t=a.a,i=a.b,c=(t+i)*.1,l=k(Vt,-mr,mr,14,e.bD+c);return o(O0,-.5,o(Fi,i,o(I0,t,o(op,l,o(rp,l,o(ap,l,o(M0,B0(ip),1)))))))};return o(Fi,k(Vt,-.5,.5,7,e.bD),V0(o(re,n,Wf(r.ax))))}),lp=function(e){return e},up=function(e){return{$:0,a:e}},vp=up,$p={$:3},fp=$p,sp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),dp=sp,mp=$(function(e,r){return r.b?p(br,V,r,e):e}),Ie=function(e){return p(br,mp,P,e)},jo=$(function(e,r){return Ie(o(re,e,r))}),pp=function(e){return{$:1,a:e}},bp=pp,gp=function(e){return o(zr,"height",Fe(e))},hp=function(e){return s$(g$(e))},_p=hp,wp=function(e){return{$:2,a:e}},yp=wp,xp=function(e){return o(Vr,"",e)},Sp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Se(l*1e3)/1e3},c=function(l){return Se(l*1e4)/100};return xp(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},Cp=$(function(e,r){switch(r.$){case 0:return o(Bf,e,r);case 1:return o(Af,e,r);case 2:return o(Ff,e,r);case 3:return o(Rf,e,r);case 4:return o(Ef,e,r);default:return o(jf,e,r)}}),Lp=$(function(e,r){switch(r.$){case 0:return o(vf,e,r);case 1:return o($f,e,r);case 2:return o(ff,e,r);case 3:return o(sf,e,r);case 4:return o(df,e,r);case 5:return o(mf,e,r);case 6:return o(pf,e,r);case 7:return o(bf,e,r);default:return gf(e)}}),kp=S(function(e,r,n){return p(Df,e,r,n)}),Ri=function(e){var r=e;return r},$n=X$,et=k($n,1,1,1,1),Qe=S(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),Pp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zp=$(function(e,r){var n=e,a=r.fV,t=r.fZ;return p(Pp,n*a/t,n,n*(1-a-t)/t)}),Tp=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ga=$(function(e,r){return Tp(o(zp,e,r))}),Hl=$(function(e,r){return{dn:Cr(e.dn,r.dn),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bZ,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bZ,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bZ,bZ:e.bZ*r.bZ}}),er=af,Mp=function(e){return er({dw:e.q,dx:e.t,dy:e.w,dz:e.H,dA:e.r,dB:e.u,dC:e.x,dD:e.I,dE:e.s,dF:e.v,dG:e.y,dH:e.J,dI:0,dJ:0,dK:0,dL:1})},rt=ge(function(e,r,n,a,t){var i=a.dn?1:-1,c=k($n,a.bZ,a.bZ,a.bZ,i);return _e(t,e,c,Mp(a),a.dn,r,n)}),Il=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Hl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(V,C(rt,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,y=o(V,C(rt,e,r,n,a,w),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,L=o(V,C(rt,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:L};default:var T=t.a;return p(Vn,k(Il,e,r,n,a),i,T)}}),Vp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ol=Vp,No=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Dp=function(e){var r=e.Z,n=e.W,a=e.V;return k(No,518,r,n,a)},Bp=$(function(e,r){return{$:6,a:e,b:r}}),Ap=Bp,Ul=h([Dp({V:1,W:0,Z:!1}),k(Ol,!1,!1,!1,!1),o(Ap,0,1)]),tn=519,Zo=8,Jl=15,Kr=7681,Fp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=uf,Rp=$(function(e,r){return{$:0,a:e,b:r}}),Ep=Rp({db:1,dk:0,dU:5}),Ae=W$,jp=Ep(h([{d0:o(Ae,-1,-1)},{d0:o(Ae,1,-1)},{d0:o(Ae,-1,1)},{d0:o(Ae,1,1)}])),Np={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"d0"},uniforms:{}},Zp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Go=S(function(e,r,n){var a=e.cL,t=e.cm,i=e.c$,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bo),o(ae,l(v.a9),o(ae,l(v.bw),l(v.bx))))};return o(u,n,o(u,r,p(Zp,a,t,i)))}),Wo=function(e){return p(Go,{cm:e.cm,cL:e.cL,c$:e.c$},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx})},Ho=function(e){return C(ne,h([Wo(e),k(Ol,!1,!1,!1,!1)]),Np,Fp,jp,{})},Gp=Ho({a9:Kr,cm:0,cL:Zo,bo:tn,c$:Jl,bw:Kr,bx:Kr}),Wp=516,Ei=5386,ye=7680,Hp=function(e){return o(An,2,e+4)},ql=function(e){return Ho({a9:ye,cm:Jl,cL:Zo,bo:Wp,c$:Hp(e),bw:Ei,bx:Ei})},Ip=S(function(e,r,n){return Ie(h([p(Qe,e,n,Ul),h([ql(r),Gp])]))}),Op=$(function(e,r){return Ie(o(Ec,Ip(e),r))}),Up=function(e){var r=e.Z,n=e.W,a=e.V;return k(No,513,r,n,a)},Jp=Up({V:1,W:0,Z:!0}),qp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Yp=function(e){var r=e.bX,n=e.bI,a=e.bB,t=e.by,i=e.bE,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return qp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Xp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ji=$(function(e,r){var n=e,a=r;return p(Xp,32774,n,a)}),Qp=1,Ni=771,Kp=770,Io=Yp({by:0,aI:o(ji,Qp,Ni),bB:0,bE:o(ji,Kp,Ni),bI:0,bX:0}),Or=h([Jp,Io]),e1=function(e){var r=e;return r.dN},r1=function(e){var r=e;return r.dO},Yl=function(e){var r=e;return r.dP},n1=function(e){var r=e;return r.dQ},a1=function(e){var r=e;return r.dR},Xl=function(e){var r=e;return r.dS},Ql=function(e){return R(o($r,n1(e),e1(e)),o($r,a1(e),r1(e)),o($r,Xl(e),Yl(e)))},t1=function(e){return e},o1=function(e){return dr({cy:t1({fV:e.H,fZ:e.I,c2:e.J}),c0:vr({fV:e.q,fZ:e.r,c2:e.s}),c1:vr({fV:e.t,fZ:e.u,c2:e.v}),c3:vr({fV:e.w,fZ:e.x,c2:e.y})})},nt=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fV:a.fV*v.fV+a.fZ*v.fZ+a.c2*v.c2,fZ:a.fV*l.fV+a.fZ*l.fZ+a.c2*l.c2,c2:a.fV*i.fV+a.fZ*i.fZ+a.c2*i.c2}}),Kl=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=a.fV-i.fV,l=a.fZ-i.fZ,u=a.c2-i.c2,v=n.c3,s=v,d=n.c1,m=d,f=n.c0,g=f;return{fV:c*g.fV+l*g.fZ+u*g.c2,fZ:c*m.fV+l*m.fZ+u*m.c2,c2:c*s.fV+l*s.fZ+u*s.c2}}),eu=$(function(e,r){return{cy:o(Kl,e,un(r)),c0:o(nt,e,Zr(r)),c1:o(nt,e,Gr(r)),c3:o(nt,e,Nr(r))}}),La=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Me,n,a)}),ia=$(function(e,r){return U(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ia,n,a)}),i1=$(function(e,r){var n=La(r),a=La(e);return{dN:o(ce,a.dN,n.dN),dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(fe,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS)}}),Oe=function(e){var r=e;return r},c1=function(e){var r=e;return R(r.fV,r.fZ,r.c2)},yn=$(function(e,r){var n=e,a=r;return a+n}),l1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(xe(a)),c=aa(xe(n)),l=aa(xe(t)),u=c1(r),v=u.a,s=u.b,d=u.c;return{dN:o(yn,c,v),dO:o(yn,i,s),dP:o(yn,l,d),dQ:o($r,c,v),dR:o($r,i,s),dS:o($r,l,d)}}),Zi=B(function(e,r,n,a){var t=n.eA,i=2*n.eY*r,c=2*n.eX*r,l=2*n.eW*r,u=t.c2*r,v=t.fZ*r,s=t.fV*r,d=Oe(Nr(e)),m=J(l*d.fV)+J(c*d.fZ)+J(i*d.c2),f=Oe(Gr(e)),g=J(l*f.fV)+J(c*f.fZ)+J(i*f.c2),b=Oe(Zr(e)),w=J(l*b.fV)+J(c*b.fZ)+J(i*b.c2),y=o(l1,R(w,g,m),o(Kl,e,p(Rt,s,v,u)));if(a.$)return ee(y);var _=a.a;return ee(o(i1,_,y))}),jt=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=k(Zi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=k(Zi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=k(jt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(eu,o1(v),e),m=r*v.bZ,f=e,g=r,b=k(jt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Wr=O$,Hr=U$,Ir=J$,ru=function(e){return{$:4,a:e}},u1=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(V,n,r);e=t,r=i;continue e}else return r}),En=function(e){return ru(o(u1,e,P))},v1={dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bZ:1},Gi=Ho({a9:Kr,cm:0,cL:Zo,bo:tn,c$:255,bw:Kr,bx:Kr}),$1=function(e){var r=e,n=o(Me,J(r.fV),o(Me,J(r.fZ),J(r.c2)));if(n){var a=r.c2/n,t=r.fZ/n,i=r.fV/n,c=_r(i*i+t*t+a*a);return c*n}else return Xe},De={bB:0,ez:!1,bI:0,cH:0,bX:0,cW:0,fV:0,fZ:0,c2:0},Ze=$(function(e,r){var n=e,a=r;return er({dw:n.fV,dx:n.bX,dy:a.fV,dz:a.bX,dA:n.fZ,dB:n.bI,dC:a.fZ,dD:a.bI,dE:n.c2,dF:n.bB,dG:a.c2,dH:a.bB,dI:n.cW,dJ:n.cH,dK:a.cW,dL:a.cH})}),bn=x({be:o(Ze,De,De),bN:o(Ze,De,De),bO:o(Ze,De,De),bP:o(Ze,De,De)},k($n,0,0,0,0)),nu=514,au=function(e){var r=e.Z,n=e.W,a=e.V;return k(No,515,r,n,a)},tu=240,f1=h([au({V:1,W:0,Z:!0}),Wo({a9:ye,cm:tu,cL:0,bo:nu,c$:0,bw:ye,bx:ye}),Io]),s1=$(function(e,r){var n=e,a=r.fj,t=r.eT,i=r.es,c=xe(a),l=c,u=xe(t),v=u,s=n.cJ;if(s.$){var m=s.a;return xt(v)?er({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:0,dJ:0,dK:0,dL:1}):er({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:-2/(v-l),dH:-(v+l)/(v-l),dI:0,dJ:0,dK:0,dL:1})}else{var d=s.a;return xt(v)?er({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-1,dH:-2*l,dI:0,dJ:0,dK:-1,dL:0}):er({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-(v+l)/(v-l),dH:-2*v*l/(v-l),dI:0,dJ:0,dK:-1,dL:0})}}),On=$(function(e,r){return(1&e>>r)===1?0:1}),d1=function(e){return h([au({V:1,W:0,Z:!0}),Wo({a9:ye,cm:tu,cL:e,bo:nu,c$:0,bw:ye,bx:ye}),Io])},m1=S(function(e,r,n){return Ie(o(re,function(a){var t=a<<4,i=k($n,o(On,a,0),o(On,a,1),o(On,a,2),o(On,a,3));return p(Qe,e,x(r,i),d1(t))},o(rn,1,o(An,2,n)-1)))}),en=function(e){var r=e;return r},p1=tf,b1={cy:Tr,c0:Ro,c1:Eo,c3:Po},jn=function(e){var r=e;return r},g1=function(e){var r=jn(un(e)),n=Oe(Nr(e)),a=Oe(Gr(e)),t=Oe(Zr(e));return er({dw:t.fV,dx:a.fV,dy:n.fV,dz:r.fV,dA:t.fZ,dB:a.fZ,dC:n.fZ,dD:r.fZ,dE:t.c2,dF:a.c2,dG:n.c2,dH:r.c2,dI:0,dJ:0,dK:0,dL:1})},h1=$(function(e,r){var n=r;return g1(o(eu,n,e))}),_1=function(e){return o(h1,b1,e)},w1=function(e){var r=e;return r.c_},y1=function(e){var r=e;return Zr(r)},x1=function(e){var r=e;return Gr(r)},S1=function(e){var r=w1(e.ex),n=dr({cy:Dt(r),c0:y1(r),c1:x1(r),c3:Ca(At(r))}),a=En(e.aQ),t=a,i=k(jt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=_1(r),u=o(te,.99,o(ce,xe(e.eC),Bt(Yl(c)))),v=Ql(c),s=v.a,d=v.b,m=v.c,f=$1(p(Lo,s,d,m)),g=o(te,1.01,o(yn,f,Bt(Xl(c)))),b=o(s1,e.ex,{es:e.es,eT:g,fj:u}),w=p1(b).dL,y=w?Oe(Ca(At(r))):en(Dt(r)),_=function(){var oe=e.fL;switch(oe.$){case 0:return x(0,0);case 1:return x(1,0);case 2:return x(2,0);case 3:var de=oe.a;return x(3,de);case 4:var de=oe.a;return x(4,de);default:return x(5,0)}}(),L=_.a,T=_.b,Z=e.eR,j=Z,E=o(Ga,j,e.fS),N=E,G=er({dw:0,dx:y.fV,dy:Wr(N),dz:e.ed,dA:0,dB:y.fZ,dC:Hr(N),dD:ta(f),dE:0,dF:y.c2,dG:Ir(N),dH:L,dI:0,dJ:w,dK:0,dL:T}),A=_e(Il,G,l,b,v1,t,{M:P,U:P,fB:P}),Y=e.fb;switch(Y.$){case 0:var Q=Y.a;return Ie(h([p(Qe,A.M,x(Q,et),Or),p(Qe,A.U,bn,Or)]));case 1:var Q=Y.a;return Ie(h([p(Qe,A.M,bn,Or),h([Gi]),p(Qe,A.fB,Q.be,Ul),h([ql(0)]),p(Qe,A.M,x(Q,et),f1),p(Qe,A.U,bn,Or)]));default:var ie=Y.a,ve=Y.b;return Ie(h([p(Qe,A.M,x(ve,et),Or),h([Gi]),o(Op,A.fB,ie),p(m1,A.M,ve,Ar(ie)),p(Qe,A.U,bn,Or)]))}},C1=function(e){return o(zr,"width",Fe(e))},L1=$(function(e,r){var n=h([bp(1),yp(0),vp(!0),k(dp,0,0,0,0)]),a=function(){var L=e.eq;switch(L.$){case 0:return R(n,"0",1);case 1:return R(o(V,fp,n),"1",1);default:var T=L.a;return R(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Ri(v),d=o(se,"height",Fe(s)+"px"),m=Ri(u),f=m/s,g=o(jo,function(L){return S1({es:f,ex:e.ex,eC:e.eC,aQ:L.aQ,eR:L.eR,fb:L.fb,ed:c,fL:L.fL,fS:L.fS})},r),b=o(se,"width",Fe(m)+"px"),w=e.aJ,y=w,_=Sp(y);return p(_p,"div",h([o(se,"padding","0px"),b,d]),h([x(i,p(kp,t,h([C1(Se(m*c)),gp(Se(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),k1=function(e){return{$:2,a:e}},P1=function(e){return k1(e)},z1=function(e){return o(L1,{eq:P1(e.b8),aJ:e.aJ,ex:e.ex,eC:e.eC,aL:e.aL},h([{aQ:e.aQ,eR:e.eR,fb:e.fb,fL:e.fL,fS:e.fS}]))},Wi=function(e){return e},ou=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),T1=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),iu=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cu=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),M1=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),V1=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),D1=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Oo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return k(D1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return k(ou,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return k(T1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return k(iu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return k(V1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return k(cu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return k(M1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Uo={$:0},B1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=La(c(u)),d=o(fe,s.dQ,e),m=o(ce,s.dN,r),f=o(fe,s.dR,n),g=o(ce,s.dO,a),b=o(fe,s.dS,t),w=o(ce,s.dP,i),y=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=_;continue e}else return{dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t}}),A1=S(function(e,r,n){var a=La(e(r));return Ma(B1,a.dQ,a.dN,a.dR,a.dO,a.dS,a.dP,e,n)}),at=$(function(e,r){var n=e,a=r;return U(a,n)<1}),lu=function(e){return o(at,e.dN,e.dQ)&&o(at,e.dO,e.dR)&&o(at,e.dP,e.dS)?e:{dN:o(ce,e.dQ,e.dN),dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(fe,e.dQ,e.dN),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP)}},zn=function(e){var r=e;return r},uu=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=yr(n),c=xr(n),l=Sr(n),u=yr(a),v=xr(a),s=Sr(a),d=yr(t),m=xr(t),f=Sr(t);return lu({dN:o(ce,i,o(ce,u,d)),dO:o(ce,c,o(ce,v,m)),dP:o(ce,l,o(ce,s,f)),dQ:o(fe,i,o(fe,u,d)),dR:o(fe,c,o(fe,v,m)),dS:o(fe,l,o(fe,s,f))})},vu=q$,ze=function(e){return vu(jn(e))},$u=function(e){var r=e;return r},Wa=function(e){return vu($u(e))},fu=function(e){return e},F1=$(function(e,r){var n=e,a=r,t=o(Me,J(a.fV),o(Me,J(a.fZ),J(a.c2)));if(t){var i=a.c2/t,c=a.fZ/t,l=a.fV/t,u=_r(l*l+c*c+i*i);return{fV:n*l/u,fZ:n*c/u,c2:n*i/u}}else return zl}),R1=F1(fu(1)),su=S(function(e,r,n){var a=o(Sa,r,n),t=o(Sa,e,r);return R1(o(wo,a,t))}),E1=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Wa(p(su,n,a,t));return R({o:i,d0:ze(n)},{o:i,d0:ze(a)},{o:i,d0:ze(t)})},j1=$(function(e,r){return{$:2,a:e,b:r}}),du=j1({db:3,dk:0,dU:4}),N1=function(e){if(e.b){var r=e.a,n=e.b,a=du(o(re,E1,e)),t=p(A1,uu,r,n);return k(ou,t,e,a,0)}else return Uo},Ne=S(function(e,r,n){return R(e,r,n)}),mu=function(){var e=ar(1),r=ar(1),n=ar(1),a=o(te,-.5,e),t=o(te,-.5,r),i=o(te,-.5,n),c=p(me,i,t,a),l=o(te,.5,e),u=p(me,i,t,l),v=o(te,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(te,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Oo(N1(h([p(Ne,c,g,f),p(Ne,c,s,g),p(Ne,u,b,w),p(Ne,u,w,d),p(Ne,f,g,w),p(Ne,f,w,b),p(Ne,c,d,s),p(Ne,c,u,d),p(Ne,c,f,b),p(Ne,c,b,u),p(Ne,s,w,g),p(Ne,s,d,w)])))}(),Un={$:0},Z1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),G1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Wa(p(su,u,l,c)),s={o:v,d0:ze(u)},d={o:v,d0:ze(l)},m={o:v,d0:ze(c)};return o(V,s,o(V,d,o(V,m,n)))}),Jo=function(e){var r=e;return r.D},W1=B(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ee(p(e,t,i,c))}),Nt=4294967295>>>32-Ln,Zt=Ku,H1=S(function(e,r,n){e:for(;;){var a=Nt&r>>>e,t=o(Zt,a,n);if(t.$){var v=t.a;return o(Zt,Nt&r,v)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),I1=function(e){return e>>>5<<5},O1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?q:U(e,I1(n))>-1?ee(o(Zt,Nt&e,i)):ee(p(H1,a,e,t))}),qo=function(e){var r=e;return r.ah},tt=$(function(e,r){return o(O1,e,qo(r))}),U1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return k(W1,S(function(c,l,u){return R(c,l,u)}),o(tt,a,e),o(tt,t,e),o(tt,i,e))};return o(bl,r,Jo(e))},J1=S(function(e,r,n){e:for(;;){var a=o(uo,Ee,e),t=a.a,i=a.b;if(U(wt(t),Ee)<0)return o(Ic,!0,{z:r,l:n,p:t});var c=i,l=o(V,Wc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Yo=function(e){return e.b?p(J1,e,P,0):Zc},q1=S(function(e,r,n){return e(r(n))}),Y1=$(function(e,r){return!o(rl,o(q1,Ss,e),r)}),X1=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(V,n,a):a}),P,r)}),Q1=function(e){var r=e.a;return r},pu=$(function(e,r){var n=Q1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(Y1,a,r)?{D:r,ah:e}:{D:o(X1,a,r),ah:e}}),K1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Nn=K1({db:1,dk:3,dU:4}),ca=$(function(e,r){var n=en(r),a=en(e);return x(R(a.fV,a.fZ,a.c2),R(n.fV,n.fZ,n.c2))}),Hi=p(Fn,0,0,0),ot=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ul,o(ca,e,r),t);if(v.$){var d={o:Hi,d0:ze(r)},m={o:Hi,d0:ze(e)},f=u+1,g=u;return R(o(V,R(n,g,f),o(V,R(n,f,a),c)),o(V,d,o(V,m,l)),u+2)}else{var s=v.a;return R(o(V,R(n,s,a),c),l,u)}}),eb=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,_=v,L=a+3,T=_e(ot,s,m,f,b,r,_e(ot,d,s,g,f,r,_e(ot,m,d,b,g,r,t)));e=w,r=y,n=_,a=L,t=T;continue e}else{var Z=t,j=Z.a,E=Z.b;return x(j,Re(E))}}),rb=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(hn,o(ca,m,s),f,p(hn,o(ca,s,d),g,p(hn,o(ca,d,m),b,t))),y=o(V,R(b,g,f),a),_=e,L=v,T=n+3,Z=y,j=w;e=_,r=L,n=T,a=Z,t=j;continue e}else return R(a,t,n)}),Mr=S(function(e,r,n){var a=U1(n),t=p(br,G1(r),P,a),i=C(rb,r,a,0,P,Ll),c=i.a,l=i.b,u=i.c,v=C(eb,r,l,a,0,R(c,P,u)),s=v.a,d=v.b,m=Cl(d)?t:le(t,d);return p(Z1,e,o(pu,Yo(m),s),o(Nn,m,s))}),Gt=function(e){return{D:o(re,function(r){return R(3*r,3*r+1,3*r+2)},o(rn,0,Ar(e)-1)),ah:Yo(Ie(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},bu=function(e){switch(e.$){case 0:return Un;case 1:var a=e.a,r=e.b,n=o(re,zn,r);return p(Mr,a,Br,Gt(n));case 2:var a=e.a,r=e.b,n=o(re,zn,r);return p(Mr,a,Br,Gt(n));case 3:var a=e.a,t=e.b;return p(Mr,a,Br,t);case 4:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 5:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 6:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 7:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 8:return Un;case 9:return Un;default:return Un}},Ii=bu(mu),gu={$:0},z=gu,be=$(function(e,r){return{$:1,a:e,b:r}}),nb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bF"}},ab=1029,tb=function(e){return{$:5,a:e}},hu=function(e){var r=e;return tb(r)},ob=hu(ab),ib=1028,cb=hu(ib),Te=S(function(e,r,n){return r===1?e?o(V,ob,n):o(V,cb,n):n}),_u={src:`
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
    `,attributes:{position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return C(ne,p(Te,l,a,d),_u,nb,n,{bF:e,b:c,c:i,d:v,e:t,f:u})}))}),Xo={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return C(ne,p(Te,l,a,d),wu,Xo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),yu=$(function(e,r){return{$:3,a:e,b:r}}),lb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bV",sceneProperties:"e"}},xu={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bV",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ub=B(function(e,r,n,a){return o(yu,n,K(function(t,i,c,l,u,v,s,d){return C(ne,d,xu,lb,a,{aw:e,b:c,c:i,bV:r,d:v,e:t,f:u})}))}),Qo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Zn=function(e){var r=e;return r},Ha=Y$,lr=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return C(ne,p(Te,u,t,m),wu,Qo,a,{aO:o(Ha,Zn(r),e),b:l,c,d:s,e:i,f:v})}))}),vb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bV",sceneProperties:"e"}},$b=ge(function(e,r,n,a,t){return o(yu,a,K(function(i,c,l,u,v,s,d,m){return C(ne,m,xu,vb,t,{aO:o(Ha,Zn(r),e),b:l,c,bV:n,d:s,e:i,f:v})}))}),Su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColor:"cn",sceneProperties:"e",viewMatrix:"f"}},Cu={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return C(ne,p(Te,l,a,d),Cu,Su,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,cn:e,b:c,c:i,d:v,e:t,f:u})}))}),Lu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColorTexture:"co",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},ku={src:`
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
    `,attributes:{normal:"o",position:"d0",tangent:"ef",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},fb=Ue(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return C(ne,p(Te,v,i,f),ku,Lu,t,{P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,co:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b5",constantMetallic:"b6",constantRoughness:"b7",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallicTexture:"cs",normalMapTexture:"aX",roughnessTexture:"cP",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},sb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(d,m,f,g,b,w,y,_){var L=y.a,T=y.b;return C(ne,p(Te,g,s,_),ku,Pu,v,{b3:e,b5:r,b6:i,b7:a,P:T,be:L.be,bN:L.bN,bO:L.bO,bP:L.bP,cs:t,b:f,c:m,aX:c,d:w,cP:n,e:d,a0:l,f:b})}))}}}}}}}}}}},zu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallic:"cr",roughness:"cO",sceneProperties:"e",viewMatrix:"f"}},qn=Ue(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return C(ne,p(Te,v,i,f),Cu,zu,t,{b2:e,P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,cr:n,b:u,c:l,d,cO:r,e:c,f:s})}))}),db=function(e){return{$:0,a:e}},Oi=$(function(e,r){return{$:1,a:e,b:r}}),xn=$(function(e,r){if(r.$){var n=r.a.C;return x(n,1)}else return r.a,x(e,0)}),mb=function(e){return k($n,Wr(e),Hr(e),Ir(e),1)},Ko=k($n,0,0,0,0),la=$(function(e,r){if(r.$){var a=r.a.C;return x(a,Ko)}else{var n=r.a;return x(e,mb(n))}}),Tu=$(function(e,r){var n=x(e,r);if(n.a.$){var t=n.a.a.C;return o(Oi,x(t,Ko),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Oi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,db(a)}}),pb=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),bb=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gb=function(e){return o(Ae,e,1)},Wt=o(Ae,0,0),Ur=$(function(e,r){if(r.$){var a=r.a.C;return x(a,Wt)}else{var n=r.a;return x(e,gb(n))}}),Mu=B(function(e,r,n,a){var t=k(bb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return k(Yn,x(u,Ko),o(Ur,u,r),o(Ur,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return k(Yn,o(la,u,e),x(u,Wt),o(Ur,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return k(Yn,o(la,u,e),o(Ur,u,r),x(u,Wt),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return k(Yn,o(la,u,e),o(Ur,u,r),o(Ur,u,n),x(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(pb,i,c,l)}}),hb={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bF",sceneProperties:"e"}},ct=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return C(ne,p(Te,u,t,m),_u,hb,a,{b0:Zn(r),bF:e,b:l,c,d:s,e:i,f:v})}))}),Vu={src:`
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
    `,attributes:{normal:"o",position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_b=B(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return C(ne,p(Te,l,a,d),Vu,Lu,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,co:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),wb=Ot(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,d,m,f,g,b,w){var y=b.a,_=b.b;return C(ne,p(Te,m,u,w),Vu,Pu,l,{b3:e,b5:r,b6:i,b7:a,P:_,be:y.be,bN:y.bN,bO:y.bO,bP:y.bP,cs:t,b:d,c:s,aX:e,d:g,cP:n,e:v,a0:0,f})}))}),Tn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),yb=function(e){var r=e;return p(Tn,r.dQ,r.dN,.5)},xb=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},Sb=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},Cb=function(e){return p(me,yb(e),xb(e),Sb(e))},W=function(e){var r=Ql(e),n=r.a,a=r.b,t=r.c;return{eA:jn(Cb(e)),eW:n/2,eX:a/2,eY:t/2}},ei=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return k(it,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return k(it,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return k(it,l,W(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return k(cr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return k(cr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return k(ub,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ct,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ct,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ct,l,v,W(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return C(lr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return C(lr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C($b,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Tu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return k(_b,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(fb,b,y,_,W(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var L=e.b,T=e.c,Z=e.d,j=e.e,E=k(Mu,L,T,Z,j);if(E.$){var Y=E.a,Q=Y.a,ie=Y.b,ve=E.b,oe=ve.a,de=ve.b,Ve=E.c,Ce=Ve.a,gr=Ve.b,hr=E.d,y=hr.a,_=hr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Ju(wb,Q,ie,oe,de,Ce,gr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return sb(Q)(ie)(oe)(de)(Ce)(gr)(y)(_)(W(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,G=E.b,A=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,A,W(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,A,W(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,A,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,A,W(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),lt=function(e){var r=e;return r.fV},ut=function(e){var r=e;return r.fZ},vt=function(e){var r=e;return r.c2},Lb=function(e){var r=e,n=vt(r.c3),a=ut(r.c3),t=lt(r.c3),i=vt(r.c1),c=ut(r.c1),l=lt(r.c1),u=vt(r.c0),v=ut(r.c0),s=lt(r.c0);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},kb=function(e){var r=jn(un(e)),n=Oe(Nr(e)),a=Oe(Gr(e)),t=Oe(Zr(e));return{dn:Lb(e),q:t.fV,r:t.fZ,s:t.c2,t:a.fV,u:a.fZ,v:a.c2,w:n.fV,x:n.fZ,y:n.c2,H:r.fV,I:r.fZ,J:r.c2,bZ:1}},Jr=$(function(e,r){return{$:5,a:e,b:r}}),Du=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Hl,a,e);return o(Jr,i,t);case 1:return o(Jr,e,n);case 3:return o(Jr,e,n);case 2:return o(Jr,e,n);default:return o(Jr,e,n)}}),Bu=$(function(e,r){return o(Du,kb(e),r)}),Ia=function(e){return{$:2,a:e}},Pb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eA;return{eA:{fV:n*i.fV,fZ:a*i.fZ,c2:t*i.c2},eW:n*r.eW,eX:a*r.eX,eY:t*r.eY}}),zb=K$,Tb=Q$,Ui=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Tb(a),g=f.fV,b=f.fZ,w=f.c2,y=f.en,_=zb({en:y,fV:g*s,fZ:b*d,c2:w*m});return Ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ht=$(function(e,r){switch(r.$){case 0:return gu;case 5:var n=r.a,a=r.b;return o(Jr,n,o(Ht,e,a));case 1:var t=r.a,i=r.b;return o(be,o(Pb,e,t),o(Ui,e,i));case 3:return r;case 2:var i=r.a;return Ia(o(Ui,e,i));default:var c=r.a;return ru(o(re,Ht(e),c))}}),ri=$(function(e,r){var n=r;return o(Ht,e,n)}),ni={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Au=7683,Fu=7682,Mb=p(Go,{cm:0,cL:0,c$:15},{a9:ye,bo:tn,bw:ye,bx:Au},{a9:ye,bo:tn,bw:ye,bx:Fu}),Vb=p(Go,{cm:0,cL:0,c$:15},{a9:ye,bo:tn,bw:ye,bx:Fu},{a9:ye,bo:tn,bw:ye,bx:Au}),ai=$(function(e,r){return e?o(V,Vb,r):o(V,Mb,r)}),Db={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},Bb=function(e){if(e.$){var r=e.c;return ee(K(function(n,a,t,i,c,l,u,v){return C(ne,o(ai,i,v),Db,ni,r,{b:t,c:a,d:l,e:n,b_:u,f:c})}))}else return q},ka=function(e){var r=Bb(e);if(r.$)return z;var n=r.a;return Ia(n)},Ab=B(function(e,r,n,a){var t=o(ei,n,mu),i=function(){var s=x(e,r);return s.a?s.b?En(h([t,ka(Ii)])):t:s.b?ka(Ii):z}(),c=Do(a),l=c.a,u=c.b,v=c.c;return o(Bu,Vo(a),o(ri,R(l,u,v),i))}),Fb=$(function(e,r){return k(Ab,!0,!0,e,r)}),Ru=$(function(e,r){return{$:0,a:e,b:r}}),Rb=function(e){var r=go(e),n=r.cK,a=r.ca,t=r.b4;return p(Fn,n,a,t)},Eb=function(e){return o(Ru,0,Et(Rb(e)))},jb=function(e){var r=e;return r.k},Sn=function(e){var r=e;return Fr(r)},Nb=$(function(e,r){var n=e.d0,a=e.o;return o(V,{o:Wa(a),d0:ze(n)},r)}),Zb=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Ir(l.d0),s=Hr(l.d0),d=Wr(l.d0),m=o(ia,e,d),f=o(Me,r,d),g=o(ia,n,s),b=o(Me,a,s),w=o(ia,t,v),y=o(Me,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=y,c=_;continue e}else return lu({dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t})}),Eu=$(function(e,r){var n=Ir(e.d0),a=Hr(e.d0),t=Wr(e.d0);return Ut(Zb,t,t,a,a,n,n,r)}),Gb=function(e){var r=p(Dc,Nb,P,qo(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,Jo(e)),i=o(Eu,n,a);return k(iu,i,e,t,0)}else return Uo},Ji=$(function(e,r){var n=e,a=r,t=n.c1,i=t,c=n.c0,l=c;return{fV:a.fV*l.fV+a.fZ*i.fV,fZ:a.fV*l.fZ+a.fZ*i.fZ,c2:a.fV*l.c2+a.fZ*i.c2}}),Pa=function(e){var r=e;return an(r)},It=function(e){return ir(2*mr*e)},Wb=Br,qi=Wb({cy:Tr,c0:Ro,c1:Eo}),ju=function(){var e=72,r=o(Vl,e,It(1)),n=ar(1),a=Xr(ko),t=Xr(Co),i=ar(1),c=o(te,.5,i),l=p(me,Xe,Xe,c),u=o(te,-.5,i),v=p(me,Xe,Xe,u),s=function(f){var g=o(te,f,r),b=Xr(o(Ji,qi,Ft(g))),w=o(te,Sn(g),n),y=o(te,Pa(g),n),_=p(me,w,y,c),L=p(me,w,y,u),T=o(_a,e,f+1),Z=o(te,T,r),j=Xr(o(Ji,qi,Ft(Z))),E=o(te,Sn(Z),n),N=o(te,Pa(Z),n),G=p(me,E,N,u),A=p(me,E,N,c);return h([R({o:t,d0:v},{o:t,d0:G},{o:t,d0:L}),R({o:b,d0:L},{o:j,d0:G},{o:j,d0:A}),R({o:b,d0:L},{o:j,d0:A},{o:b,d0:_}),R({o:a,d0:l},{o:a,d0:_},{o:a,d0:A})])},d=o(re,s,o(rn,0,e-1)),m=Gt(Ie(d));return Oo(Gb(m))}(),Yi=bu(ju),Hb=function(e){var r=Tl(e),n=yo(r),a=n.a,t=n.b;return dr({cy:Ml(e),c0:a,c1:t,c3:r})},Ib=function(e){var r=e;return r.e9},Ob=function(e){var r=e;return r.fu},Ub=B(function(e,r,n,a){var t=Hb(jb(a)),i=o(ei,n,ju),c=function(){var d=x(e,r);return d.a?d.b?En(h([i,ka(Yi)])):i:d.b?ka(Yi):z}(),l=Ob(a),u=l,v=Ib(a),s=v;return o(Bu,t,o(ri,R(u,u,s),c))}),Jb=$(function(e,r){return k(Ub,!0,!0,e,r)}),Xi={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},gn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=en(n),c=en(a),l=en(t);return er({dw:i.fV,dx:c.fV,dy:l.fV,dz:0,dA:i.fZ,dB:c.fZ,dC:l.fZ,dD:0,dE:i.c2,dF:c.c2,dG:l.c2,dH:0,dI:0,dJ:0,dK:0,dL:0})},Xn=du(h([R({cV:0},{cV:1},{cV:2})])),qb=$(function(e,r){var n=uu(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,K(function(_,L,T,Z,j,E,N,G){return C(ne,p(Te,Z,0,G),Xi,Xo,Xn,{aw:t,b:T,c:L,d:E,e:_,bt:gn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,K(function(_,L,T,Z,j,E,N,G){return C(ne,p(Te,Z,0,G),Xi,Qo,Xn,{aO:o(Ha,Zn(c),i),b:T,c:L,d:E,e:_,bt:gn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Tu,l,f);if(u.$)return z;var v=u.a;return o(be,a,K(function(_,L,T,Z,j,E,N,G){var A=N.a,Y=N.b;return C(ne,p(Te,Z,0,G),Qi,Su,Xn,{P:Y,be:A.be,bN:A.bN,bO:A.bO,bP:A.bP,cn:v,b:T,c:L,d:E,e:_,bt:gn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=k(Mu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,y=g.c;return o(be,a,K(function(_,L,T,Z,j,E,N,G){var A=N.a,Y=N.b;return C(ne,p(Te,Z,0,G),Qi,zu,Xn,{b2:b,P:Y,be:A.be,bN:A.bN,bO:A.bO,bP:A.bP,cr:y,b:T,c:L,d:E,cO:w,e:_,bt:gn(r),f:j})}))}}),Yb=function(){var e=h([{a$:o(Ae,0,1)},{a$:o(Ae,1,1)},{a$:o(Ae,2,1)},{a$:o(Ae,0,-1)},{a$:o(Ae,1,-1)},{a$:o(Ae,2,-1)}]),r=h([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return o(Nn,e,r)}(),Xb={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",triangleVertexPositions:"bt",viewMatrix:"f"}},Ki=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return C(ne,o(ai,t,u),Xb,ni,Yb,{b:a,c:n,d:c,e:r,b_:l,bt:gn(e),f:i})}))},Qb=B(function(e,r,n,a){var t=o(qb,n,a),i=x(e,r);return i.a?i.b?En(h([t,Ki(a)])):t:i.b?Ki(a):z}),Kb=$(function(e,r){return k(Qb,!0,!0,e,r)}),e3=$(function(e,r){var n=Sr(r),a=Sr(e),t=xr(r),i=xr(e),c=yr(r),l=yr(e);return{dN:o(ce,l,c),dO:o(ce,i,t),dP:o(ce,a,n),dQ:o(fe,l,c),dR:o(fe,i,t),dS:o(fe,a,n)}}),r3=function(e){var r=Bo(e),n=r.a,a=r.b;return o(e3,n,a)},ec={src:`
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
    `,attributes:{lineSegmentVertex:"dv"},uniforms:{lineSegmentEndPoint:"dt",lineSegmentStartPoint:"du",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},n3=$(function(e,r){return{$:1,a:e,b:r}}),a3=n3({db:2,dk:0,dU:1}),rc=a3(h([x({dv:0},{dv:1})])),t3=$(function(e,r){var n=r3(r),a=W(n),t=Bo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,K(function(v,s,d,m,f,g,b,w){return C(ne,w,ec,Xo,rc,{aw:l,dt:ze(c),du:ze(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,K(function(s,d,m,f,g,b,w,y){return C(ne,y,ec,Qo,rc,{aO:o(Ha,Zn(u),l),dt:ze(c),du:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),o3=$(function(e,r){return o(t3,e,r)}),nc=$(function(e,r){var n=e,a=r;return n/a}),i3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(V,i,t);if(Cr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ac=$(function(e,r){return e<1?P:C(i3,0,e,e,r,P)}),c3=$(function(e,r){var n=e.d0,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(V,{o:Wa(a),d0:ze(n),L:o(Ae,c,l)},r)}),l3=function(e){var r=p(Dc,c3,P,qo(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,Jo(e)),i=o(Eu,n,a);return k(cu,i,e,t,0)}else return Uo},ti=$(function(e,r){var n=e,a=r,t=Fr(a);return{fV:t*Fr(n),fZ:t*an(n),c2:an(a)}}),u3=function(){var e=ar(1),r=72,n=o(rn,0,r-1),a=o(ac,r,o(Tn,Xe,It(1))),t=co(r/2),i=o(rn,0,t-1),c=o(ac,t,o(Tn,pn(90),pn(-90))),l=Yo(Ie(o(re,function(s){return o(re,function(d){return{o:Xr(o(ti,s,d)),d0:p(me,o(te,Sn(d)*Sn(s),e),o(te,Sn(d)*Pa(s),e),o(te,Pa(d),e)),L:x(o(nc,s,It(1)),o(nc,o(yn,pn(90),d),pn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ie(o(re,function(s){return Ie(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([R(b,g,m),R(b,m,f)])},i))},n));return Oo(l3(o(pu,l,v)))}(),za=72,Qn=2*za,v3=$(function(e,r){e:for(;;){var n=Qn+1,a=o(_a,Qn,2*e+3),t=o(_a,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(V,R(l,c,t),o(V,R(c,a,t),o(V,R(c,i,a),o(V,R(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),$3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),f3=$(function(e,r){e:for(;;){var n=p($3,0,2*mr,e/za),a={bz:n,bS:0,bY:1},t={bz:n,bS:1,bY:1},i=o(V,a,o(V,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),s3=function(){var e=o(f3,za-1,h([{bz:0,bS:0,bY:0},{bz:0,bS:1,bY:0}])),r=o(v3,za-1,P);return o(Nn,e,r)}(),d3={src:`
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
    `,attributes:{angle:"bz",offsetScale:"bS",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},tc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return C(ne,o(ai,!0,u),d3,ni,s3,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,b_:l,f:i})}))},m3=function(e){var r=$u(e);return{dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fV,I:r.fZ,J:r.c2,bZ:1}},p3=$(function(e,r){return o(Du,m3(e),r)}),b3=B(function(e,r,n,a){var t=o(ei,n,u3),i=function(){var u=x(e,r);return u.a?u.b?En(h([t,tc()])):t:u.b?tc():z}(),c=Fo(a),l=c;return o(p3,o(Sa,Tr,Ao(a)),o(ri,R(l,l,l),i))}),g3=$(function(e,r){return k(b3,!0,!0,e,r)}),h3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),w3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Ru,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(h3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Fl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(_3,n,a,t,i,c)}},y3=w3,Nu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(Fb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Kb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(g3,y3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Jb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(o3,Eb(c),l)]);default:var u=e.a;return o(jo,Nu,u)}},x3=function(e){return o(jo,Nu,e)},S3=$(function(e,r){return z1({eq:e.eq,aJ:lp(e.eu),ex:e.ex,eC:ar(e.eC),b8:e.b8,aL:x(Wi(Se(e.bk.fT)),Wi(Se(e.bk.e_))),aQ:x3(r),eR:e.eR,fb:e.fb,fL:e.fL,fS:e.fS})}),Kn=function(e){return e*mr/180},Zu=function(e){return e},C3=$(function(e,r){var n=e,a=Oe(r.eK),t=a.fV,i=a.fZ,c=a.c2,l=o(Ga,r.bK,r.aK),u=l;return{bB:Ir(u),ez:n,bI:Hr(u),cH:0,bX:Wr(u),cW:1,fV:-t,fZ:-i,c2:-c}}),L3=function(e){return o(C3,Zu(!0),{aK:e.aK,eK:o(ti,ir(e.bA),ir(e.bG)),bK:e.bK})},k3=function(e){return e},P3=function(e){return k3(1.2*o(An,2,e))},$t=zo({fV:.37208,fZ:.37529}),z3=$(function(e,r){return{$:2,a:e,b:r}}),Gu=function(e){return{$:0,a:e}},ea=function(e){var r=e;return r},T3=function(e){var r=e;return r.ez},M3=Gu(bn.a),V3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?x(o(V,a,i),c):x(i,o(V,a,c))});return p(br,n,x(P,P),r)}),D3=function(e){var r=e;return er({dw:r.fV,dx:r.bX,dy:0,dz:0,dA:r.fZ,dB:r.bI,dC:0,dD:0,dE:r.c2,dF:r.bB,dG:0,dH:0,dI:r.cW,dJ:r.cH,dK:0,dL:0})},B3=K(function(e,r,n,a,t,i,c,l){var u=o(V3,T3,h([ea(e),ea(r),ea(n),ea(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(z3,o(re,D3,v),{be:o(Ze,m,g),bN:o(Ze,w,_),bO:o(Ze,t,i),bP:o(Ze,c,l)})}else return M3}else return Gu({be:o(Ze,e,r),bN:o(Ze,n,a),bO:o(Ze,t,i),bP:o(Ze,c,l)})}),A3=B(function(e,r,n,a){return Ma(B3,e,r,n,a,De,De,De,De)}),F3={$:5},R3=F3,E3=zo({fV:.44757,fZ:.40745}),j3=function(e){return e},oc=function(e){return e},ft=function(e){return e},N3={$:1},Z3=N3,G3=$(function(e,r){var n=e,a=jn(r.d0),t=a.fV,i=a.fZ,c=a.c2,l=o(Ga,r.bK,r.aK),u=l;return{bB:Ir(u),ez:n,bI:Hr(u),cH:0,bX:Wr(u),cW:2,fV:t,fZ:i,c2:c}}),ic=function(e){return o(G3,Zu(!0),{aK:e.aK,bK:e.bK,d0:na(e.d0)})},cc=function(e){var r=e;return r},W3=function(e){e:for(;;){if(Cr(e.dl,Xe)&&Cr(e.dm,Xe))return De;if(o(Pl,xe(e.dl),xe(e.dm))){var r={aK:e.aK,dl:e.dm,dm:e.dl,ej:Ca(e.ej)};e=r;continue e}else{var n=J(cc(e.dm)/mr),a=J(cc(e.dl)/mr),t=Oe(e.ej),i=t.fV,c=t.fZ,l=t.c2,u=o(Ga,fu(1),e.aK),v=u;return{bB:a*Ir(v),ez:!1,bI:a*Hr(v),cH:n/a,bX:a*Wr(v),cW:3,fV:i,fZ:c,c2:l}}}},H3=function(e){return W3({aK:e.aK,dl:e.dl,dm:e.dm,ej:o(ti,ir(e.bA),ir(e.bG))})},I3=$(function(e,r){var n=L3({bA:Kn(-90),aK:L0(j3(2e3)),bG:Kn(-45),bK:ft(100)}),a=ic({aK:$t,bK:oc(6e3),d0:{fV:2,fZ:3,c2:3}}),t=H3({bA:Kn(0),aK:$t,bG:Kn(-45),dl:ft(20),dm:ft(10)}),i=ic({aK:E3,bK:oc(6e3),d0:{fV:-2,fZ:4,c2:3}});return o(S3,{eq:Z3,eu:ml,ex:So(e),eC:.1,b8:e.b8,eR:P3(6),fb:k(A3,i,a,n,t),bk:e.bk,fL:R3,fS:$t},h([o(cp,e,r)]))}),O3=k(Lm,I3,S0,P,Tm);const U3={Main:{init:O3(o(D,function(e){return Be({e5:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Be({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Be({ep:d,eE:s,da:v,eL:u,e8:l,ft:c,fx:i,ea:t,ei:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ba(Pn)))},o(M,"left",X))},o(M,"pressedKeys",ba(Pn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Be({da:v,cb:u,fe:l,fy:c,fz:i,ei:t,fV:a,fZ:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Be({e_:n,fT:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Be({eH:r,eI:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},J3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},q3=()=>{st("pointerdown"),st("wheel"),st("keydown")},st=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Y3=U3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});q3();J3(Y3);
