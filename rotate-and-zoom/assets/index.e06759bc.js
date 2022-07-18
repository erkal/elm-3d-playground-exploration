const Yu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Yu();function Sr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ie(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Vt(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Et(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Gu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Hu=[];function Iu(e){return e.length}var Ou=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ju=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),qu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Qu()),r});function Qu(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=ui(e),r=ui(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var Xu=$(function(e,r){var n=O(e,r);return n<0?zc:n?Ef:Pc}),zn=0;function k(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function er(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var Ku=$(tr);function g(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return g(i)});Ie(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(za(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return g(za(r).sort(function(n,a){var t=o(e,n,a);return t===Pc?0:t===zc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan,cv=Math.atan;$(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,qo=Math.log,dv=isNaN;function mv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var pv=$(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function hv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),wv=$(function(e,r){return r.split(e)}),xv=$(function(e,r){return r.join(e)}),yv=x(function(e,r,n){return n.slice(e,r)});function Sv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function rc(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Tv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Mv(e){return za(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Av(e){return{$:0,a:e}}function Rt(e){return{$:2,b:e}}var Uv=Rt(function(e){return typeof e=="boolean"?ue(e):Ke("a BOOL",e)}),Fv=Rt(function(e){return typeof e=="number"?ue(e):Ke("a FLOAT",e)}),Vv=Rt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ke("a STRING",e)});function Ev(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Cr(e,r){return{$:9,f:e,g:r}}var Nv=$(function(e,r){return{$:10,b:r,h:e}}),jv=$(function(e,r){return Cr(e,[r])}),Wv=x(function(e,r,n){return Cr(e,[r,n])});V(function(e,r,n,a){return Cr(e,[r,n,a])});ge(function(e,r,n,a,t){return Cr(e,[r,n,a,t])});Ie(function(e,r,n,a,t,i){return Cr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return Cr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Cr(e,[r,n,a,t,i,c,l])});Vt(function(e,r,n,a,t,i,c,l,u){return Cr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return We(e,n)}catch(a){return xe(o(Qt,"This is not valid JSON! "+a.message,r))}});var nc=$(function(e,r){return We(e,r)});function We(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ke("null",r);case 3:return Rn(r)?Zo(e.b,r,g):Ke("a LIST",r);case 4:return Rn(r)?Zo(e.b,r,Yv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=We(e.b,r[n]);return Je(v)?v:xe(o(vi,n,v.a));case 7:var a=e.e;if(!Rn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=We(e.b,r[a]);return Je(v)?v:xe(o(kc,a,v.a));case 8:if(typeof r!="object"||r===null||Rn(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=We(e.b,r[i]);if(!Je(v))return xe(o(vi,i,v.a));t=tr(k(i,v.a),t)}return ue(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=We(l[u],r);if(!Je(v))return v;c=c(v.a)}return ue(c);case 10:var v=We(e.b,r);return Je(v)?We(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=We(d.a,r);if(Je(v))return v;s=tr(v.a,s)}return xe(Rf(Ve(s)));case 1:return xe(o(Qt,e.a,r));case 0:return ue(e.a)}}function Zo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=We(e,r[i]);if(!Je(c))return xe(o(kc,i,c.a));t[i]=c.a}return ue(n(t))}function Rn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Yv(e){return o(ns,e.length,function(r){return e[r]})}function Ke(e,r){return xe(o(Qt,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&Qo(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return Qo(e.g,r.g)}}function Qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var Gv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ac(e){return e}x(function(e,r,n){return n[e]=r,n});function Er(e){return{$:0,a:e}}function Hv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var $t=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Ov=0;function Nt(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return jt(r),r}function tc(e){return dr(function(r){r(Er(Nt(e)))})}function oc(e,r){e.h.push(r),jt(e)}var Jv=$(function(e,r){return dr(function(n){oc(e,r),n(Er(zn))})}),ja=!1,Xo=[];function jt(e){if(Xo.push(e),!ja){for(ja=!0;e=Xo.shift();)qv(e);ja=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,jt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return Wt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Wt(e,r,n,a,t,i){var c=o(nc,e,r?r.flags:void 0);Je(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),ei(l,b.b,t(v))}return ei(l,u.b,t(v)),d?{ports:d}:{}}var nr={};function Zv(e,r){var n;for(var a in nr){var t=nr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Xv(t,r)}return n}function Qv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Xv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,Iv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Nt(o($t,l,e.b))}var Kv=$(function(e,r){return dr(function(n){e.g(r),n(Er(zn))})});$(function(e,r){return o(Jv,e.h,{$:0,a:r})});function ic(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ko=[],Wa=!1;function ei(e,r,n){if(Ko.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=Ko.shift();)r$(a.p,a.q,a.r);Wa=!1}}function r$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)oc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?nr[r].e:nr[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function t$(e){nr[e]&&an(3)}$(function(e,r){return r});function o$(e,r){return t$(e),nr[e]={f:i$,u:r,a:c$},ic(e)}var i$=$(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=P,a=nr[e].u,t=Er(null);nr[e].b=t,nr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(nc,a,c);Je(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document!="undefined"?document:{};function Yt(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var cc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Gt(n),e:t,f:e,b:i}})}),Rr=cc(void 0),l$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Gt(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:Gt(e),g:r,h:n,i:a}}var $$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Lr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Lr([e,r],function(){return e(r)})});x(function(e,r,n){return Lr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return Lr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Lr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ie(function(e,r,n,a,t,i){return Lr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Lr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Lr([e,r,n,a,t,i,c,l],function(){return Et(e,r,n,a,t,i,c,l)})});Vt(function(e,r,n,a,t,i,c,l,u){return Lr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var lc=$(function(e,r){return{$:"a0",n:e,o:r}}),f$=$(function(e,r){return{$:"a1",n:e,o:r}}),uc=$(function(e,r){return{$:"a2",n:e,o:r}}),Pr=$(function(e,r){return{$:"a3",n:e,o:r}}),s$=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(lc,r.n,p$(e,r.o)):r});function p$(e,r){var n=no(r);return{$:r.$,a:n?p(as,n<3?b$:h$,De(e),r.a):o($a,e,r.a)}}var b$=$(function(e,r){return k(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Gt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ri(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ri(c,t,i):c[t]=i}return r}function ri(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Yt(c,gr(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?g$(e,t):a==="a0"?x$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function g$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function x$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=y$(r,i),e.addEventListener(t,c,Ht&&{passive:no(i)<2}),a[t]=c}}var Ht;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ht=!0}}))}catch{}function y$(e,r){function n(a){var t=n.q,i=We(t.a,a);if(!!Je(i)){for(var c=no(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Or(e.a,r.a)}function vc(e,r){var n=[];return qe(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function qe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];qe(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!C$(d,m):d!==m)&&_e(n,2,a,m),qe(h,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ni(e,r,n,a,L$);return;case 2:ni(e,r,n,a,P$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=It(e.d,r.d);w&&_e(n,4,a,w);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ni(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=It(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function It(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=It(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];qe(s,i[v],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],w=h.a,y=b.a,_=h.b,C=b.b,T=void 0,j=void 0;if(w===y){f++,qe(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var N=R.a,W=R.b;j=y===N}if(E){var U=E.a,Z=E.b;T=w===U}if(T&&j){f++,qe(_,Z,t,f),fn(i,t,w,C,m,c),f+=_.b||0,f++,sn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,fn(i,t,y,C,m,c),qe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(j){f++,sn(i,t,w,_,f),f+=_.b||0,f++,qe(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(R&&N===U){f++,sn(i,t,w,_,f),fn(i,t,y,C,m,c),f+=_.b||0,f++,qe(W,Z,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;sn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];fn(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var $c="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];qe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+$c,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];qe(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}sn(e,r,n+$c,a,t)}function fc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)fc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,w=0;w<h.length;w++){t++;var y=m===1?h[w]:h[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=dn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function sc(e,r,n,a){return n.length===0?e:(fc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return T$(e,r);case 5:return r.s(e);default:an(10)}}function k$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function T$(e,r){var n=r.s,a=M$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Yt(e,a),e}function M$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Yt(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function Ot(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Pr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Ot(v[a]),u);return p(Rr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=V(function(e,r,n,a){return Wt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Ot(l);return dc(i,function(v){var s=c(v),d=vc(u,s);l=sc(l,u,d,t),u=s})})});V(function(e,r,n,a){return Wt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ur.title,v=ur.body,s=Ot(v);return dc(i,function(d){ca=c;var m=l(d),f=Rr("body")(P)(m.eu),h=vc(s,f);v=sc(v,s,h,t),s=f,ca=0,u!==m.fL&&(ur.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function dc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(oo,ao,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(oo,ao,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(oo,ao,dr(function(){history.replaceState({},"",r),e()}))});var A$={addEventListener:function(){},removeEventListener:function(){}},U$=typeof window!="undefined"?window:A$;x(function(e,r,n){return tc(dr(function(a){function t(i){Nt(n(i))}return e.addEventListener(r,t,Ht&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=We(e,r);return Je(n)?re(n.a):q});function mc(e,r){return dr(function(n){ua(function(){var a=document.getElementById(e);n(a?Er(r(a)):Hv(os(e)))})})}function F$(e){return dr(function(r){ua(function(){r(Er(e()))})})}$(function(e,r){return mc(r,function(n){return n[e](),zn})});$(function(e,r){return F$(function(){return U$.scroll(e,r),zn})});x(function(e,r,n){return mc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var V$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var E$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(ul,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(ul,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var R$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/N$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function N$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Jt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),j$=x(function(e,r,n){return new Float64Array([e,r,n])}),W$=function(e){return e[0]},Y$=function(e){return e[1]},G$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var H$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(pc);function bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(pc(e,r,n),n)}$(bc);function hc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/hc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var I$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function dt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(dt);$(function(e,r){var n,a=Jt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var O$=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var J$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},q$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Q$=new Float64Array(16),X$=new Float64Array(16),K$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},ef=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function gc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ie(gc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return gc(c,l,i,t,n,a)});function _c(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ie(_c);V(function(e,r,n,a){return _c(e,r,n,a,-1,1)});function wc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],w=e[13],y=e[14],_=e[15],C=r[0],T=r[1],j=r[2],R=r[3],E=r[4],N=r[5],W=r[6],U=r[7],Z=r[8],X=r[9],ie=r[10],ve=r[11],oe=r[12],me=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*j+b*R,n[1]=t*C+u*T+m*j+w*R,n[2]=i*C+v*T+f*j+y*R,n[3]=c*C+s*T+h*j+_*R,n[4]=a*E+l*N+d*W+b*U,n[5]=t*E+u*N+m*W+w*U,n[6]=i*E+v*N+f*W+y*U,n[7]=c*E+s*N+h*W+_*U,n[8]=a*Z+l*X+d*ie+b*ve,n[9]=t*Z+u*X+m*ie+w*ve,n[10]=i*Z+v*X+f*ie+y*ve,n[11]=c*Z+s*X+h*ie+_*ve,n[12]=a*oe+l*me+d*Me+b*Se,n[13]=t*oe+u*me+m*Me+w*Se,n[14]=i*oe+v*me+f*Me+y*Se,n[15]=c*oe+s*me+h*Me+_*Se,n}$(wc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],w=r[1],y=r[2],_=r[4],C=r[5],T=r[6],j=r[8],R=r[9],E=r[10],N=r[12],W=r[13],U=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*j+c*R+v*E,n[9]=t*j+l*R+s*E,n[10]=i*j+u*R+d*E,n[11]=0,n[12]=a*N+c*W+v*U+m,n[13]=t*N+l*W+s*U+f,n[14]=i*N+u*W+d*U+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Jt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/hc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=h+f,C=b-m,T=h-f,j=c*c*v+u,R=w+d,E=b+m,N=w-d,W=l*l*v+u,U=n[0],Z=n[1],X=n[2],ie=n[3],ve=n[4],oe=n[5],me=n[6],Me=n[7],Se=n[8],pr=n[9],br=n[10],Na=n[11],Ru=n[12],Nu=n[13],ju=n[14],Wu=n[15];return a[0]=U*y+ve*_+Se*C,a[1]=Z*y+oe*_+pr*C,a[2]=X*y+me*_+br*C,a[3]=ie*y+Me*_+Na*C,a[4]=U*T+ve*j+Se*R,a[5]=Z*T+oe*j+pr*R,a[6]=X*T+me*j+br*R,a[7]=ie*T+Me*j+Na*R,a[8]=U*E+ve*N+Se*W,a[9]=Z*E+oe*N+pr*W,a[10]=X*E+me*N+br*W,a[11]=ie*E+Me*N+Na*W,a[12]=Ru,a[13]=Nu,a[14]=ju,a[15]=Wu,a});function rf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(rf);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function nf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(nf);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=bc(e,r,Jt),t=va(dt(n,a,ai),ai),i=va(dt(a,t,ti),ti),c=Q$,l=X$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,wc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var oi=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function qt(e){for(var r=0;e.b;e=e.b)r++;return r}var af=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},tf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),of=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),cf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),lf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),uf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ff=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),sf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),df=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},bf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},xc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},yc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},gf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_f=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],xf=[mf,pf,bf,xc,yc,hf,gf,_f,wf];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function yf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Sc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Sf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,w,y){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?w[y]:w[y][_];else i.forEach(function(C){for(_=0;_<h;_++)f[b++]=h===1?w[C][y]:w[C][y][_]})}var u=Sc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(qt(n.b)*s);xn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*qt(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(qt(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var Cc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),xc(n),yc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=oi++,v||(v=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=yf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Pf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),zf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Sf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Sc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,y*C)}for(n.toggle=!n.toggle,xn(O0(n),i.a),u=0;u<ii.length;u++){var T=n[ii[u]];T.toggle!==n.toggle&&T.enabled&&(xf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function Pf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,w=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function zf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var kf=x(function(e,r,n){return v$(r,{g:n,f:{},h:e},Ff,Vf)}),Tf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Bf=$(function(e,r){e.contextAttributes.antialias=!0}),Af=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Uf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ff(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(I0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),af(function(){return o(Cc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Vf(e,r){return r.f=e.f,Cc(r)}var B=Ku,Nn=Zu,Lc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Nn,e,l,v)}else{var u=c.a;return p(Nn,i,l,u)}});return p(Nn,i,p(Nn,e,r,t),a)}),Zt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Zt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ui=function(e){return p(Zt,x(function(r,n,a){return o(B,k(r,n),a)}),P,e)},Pc=1,Ef=2,zc=0,xe=function(e){return{$:1,a:e}},Qt=$(function(e,r){return{$:3,a:e,b:r}}),vi=$(function(e,r){return{$:0,a:e,b:r}}),kc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Nf=Cv,jf=Gv,Ue=rc,kr=$(function(e,r){return o(xv,e,za(r))}),Xt=$(function(e,r){return g(o(wv,e,r))}),Tc=function(e){return o(kr,`
    `,o(Xt,`
`,e))},ka=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ur=function(e){return p(ka,$(function(r,n){return n+1}),0,e)},Wf=ev,Yf=x(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=$(function(e,r){return p(Yf,e,r,P)}),Mc=$(function(e,r){return p(Wf,e,o(Kr,0,Ur(r)-1),r)}),ar=Dv,Dc=function(e){var r=ar(e);return 97<=r&&r<=122},Bc=function(e){var r=ar(e);return r<=90&&65<=r},Gf=function(e){return Dc(e)||Bc(e)},Hf=function(e){var r=ar(e);return r<=57&&48<=r},If=function(e){return Dc(e)||Bc(e)||Hf(e)},Ve=function(e){return p(ka,B,P,e)},tn=bv,Of=$(function(e,r){return`

(`+(Ue(e+1)+(") "+Tc(Jf(r))))}),Jf=function(e){return o(qf,e,P)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Gf(y)&&o(Nf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ue(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(kr,"",Ve(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ue(Ur(s))+" ways:"));return o(kr,`

`,o(B,h,o(Mc,Of,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(kr,"",Ve(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(kr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return h+(Tc(o(jf,4,f))+(`

`+m))}}),Ee=32,mt=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=Hu,Kt=vv,eo=$(function(e,r){return qo(r)/qo(e)}),Zf=lv,yn=Kt(o(eo,2,Ee)),Ac=L(mt,0,yn,pt,pt),Uc=Ou,Fc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Vc=$v,bt=Iu,Te=$(function(e,r){return O(e,r)>0?e:r}),Qf=function(e){return{$:0,a:e}},ro=Ju,Xf=$(function(e,r){e:for(;;){var n=o(ro,Ee,e),a=n.a,t=n.b,i=o(B,Qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),Kf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=Kt(r/Ee);if(n===1)return o(ro,Ee,e).a;var a=o(Xf,e,P),t=n;e=a,r=t;continue e}}),Ec=$(function(e,r){if(r.l){var n=r.l*Ee,a=Vc(o(eo,Ee,n-1)),t=e?Ve(r.z):r.z,i=o(es,t,r.l);return L(mt,bt(r.p)+n,o(Te,5,a*yn),i,r.p)}else return L(mt,bt(r.p),yn,pt,r.p)}),rs=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ec,!1,{z:a,l:n/Ee|0,p:t});var i=Fc(p(Uc,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Ac;var n=e%Ee,a=p(Uc,n,e-n,r),t=e-n-Ee;return S(rs,r,t,e,P,a)}),Je=function(e){return!e.$},D=Nv,Q=Uv,M=Rv,$e=Fv,$a=jv,as=Wv,De=Av,no=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Rr("div"),ts=function(e){return{$:2,a:e}},Rc=$(function(e,r){return e}),Nc=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Mr=function(e){return e},os=Mr,$i=Ie(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,Tr=hv,Jr=yv,kn=$(function(e,r){return e<1?r:p(Jr,e,Tr(r),r)}),Ta=zv,Ma=function(e){return e===""},Da=$(function(e,r){return e<1?"":p(Jr,0,e,r)}),jc=kv,fi=ge(function(e,r,n,a,t){if(Ma(t)||o(is,"@",t))return q;var i=o(Ta,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=jc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(we($i,e,o(Da,c,t),u,r,n,a))}else return re(we($i,e,t,q,r,n,a))}),si=V(function(e,r,n,a){if(Ma(a))return q;var t=o(Ta,"/",a);if(t.b){var i=t.a;return S(fi,e,o(kn,i,a),r,n,o(Da,i,a))}else return S(fi,e,"/",r,n,a)}),di=x(function(e,r,n){if(Ma(n))return q;var a=o(Ta,"?",n);if(a.b){var t=a.a;return L(si,e,re(o(kn,t+1,n)),r,o(Da,t,n))}else return L(si,e,q,r,n)});$(function(e,r){if(Ma(r))return q;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(di,e,re(o(kn,a+1,r)),o(Da,a,r))}else return p(di,e,q,r)});var cs=Pv,ao=function(e){},Tn=Er,ls=Tn(0),Wc=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(ka,e,r,Ve(d)):L(Wc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=x(function(e,r,n){return L(Wc,e,r,0,n)}),ne=$(function(e,r){return p(mr,$(function(n,a){return o(B,e(n),a)}),P,r)}),fa=$t,to=$(function(e,r){return o(fa,function(n){return Tn(e(n))},r)}),us=x(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Tn(o(e,a,t))},n)},r)}),vs=function(e){return p(mr,us(B),Tn(P),e)},$s=Kv,fs=$(function(e,r){var n=r;return tc(o(fa,$s(e),n))}),ss=x(function(e,r,n){return o(to,function(a){return 0},vs(o(ne,fs(e),r)))}),ds=x(function(e,r,n){return Tn(0)}),ms=$(function(e,r){var n=r;return o(to,e,n)});nr.Task=Qv(ls,ss,ds,ms);var ps=ic("Task"),oo=$(function(e,r){return ps(o(to,e,r))}),bs=B$,hs=mv,sa={$:1},Yc=function(e){return{$:2,a:e}},Ba={$:0},Ye=$(function(e,r){return{$:0,a:e,b:r}}),te=x(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},gs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ye,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Gc=function(e){var r=e.b;return o(Ye,Ba,r)},xr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Gc(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,on(n).a4)>0?o(te,gs,xr(o(Ye,sa,t))):Mr)(o(Ye,Yc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Nc,l.eA,er(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(Ye,Ba,{B:k(v,s),ab:P,T:o(B,t.B,t.T)})}}),Hc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),xs=$(function(e,r){return Ve(p(ws,e,r,P))}),Ic=x(function(e,r,n){if(r<=0)return P;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,w=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(xs,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,b,p(Ic,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return g([_])}}),ys=$(function(e,r){return p(Ic,0,e,r)}),Ss=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ve(n),le(g([a]),t)),c=o(ys,e,i),l=o(Hc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ye,sa,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var d=s.a,m=s.b;return o(Ye,sa,{B:d,ab:P,T:m})}else return r}}),Cs=function(e){var r=e.b;return o(Ye,sa,r)},Ls=function(e){var r=e.b;return o(Ye,Yc({cY:on(e).a4}),r)},Ps=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return Gc(r);case 3:return Ls(r);default:var n=e.a;return o(Ss,n,r)}}),Oc=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),zs=$(function(e,r){return er(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ts=function(e){return{$:2,a:e}},Ms=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},io=Tv,Bs=x(function(e,r,n){return o(xr,0/0,io(o(e,r,n)))}),Jc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=_v,qc=function(e){return p(As,B,P,e)},Us=$(function(e,r){var n=o(Jc,function(a){return a!=="0"&&a!=="."},qc(r));return le(e&&n?"-":"",r)}),be=rc,ht=pv,Zc=Bv,Qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",Qc(t))}else{var i=ar(r);return i>=48&&i<57?o(ht,Zc(i+1),n):"0"}},gt=uv,Fs=dv,Aa=function(e){return o(ht,e,"")},Xc=x(function(e,r,n){return e<=0?n:p(Xc,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(Xc,e,r,"")}),_t=x(function(e,r,n){return le(n,o(Sn,e-Tr(n),Aa(r)))}),wt=gv,Kc=function(e){var r=o(Xt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Vs=function(e){var r=o(Xt,"e",be(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(xr,0,jc(o(cs,"+",t)?o(kn,1,t):t)),c=Kc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(xr,"0",o(Fe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Fe,Oc(Aa),tn(le(o(Sn,J(i),"0"),v))))):p(_t,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Es=x(function(e,r,n){if(gt(n)||Fs(n))return be(n);var a=n<0,t=Kc(Vs(J(n))),i=t.a,c=t.b,l=Tr(i)+r,u=le(o(Sn,-l+1,"0"),p(_t,l,"0",le(i,c))),v=Tr(u),s=o(Te,1,l),d=o(e,a,p(Jr,s,v,u)),m=p(Jr,0,s,u),f=d?wt(o(xr,"1",o(Fe,Qc,tn(wt(m))))):m,h=Tr(f),b=f==="0"?f:r<=0?le(f,o(Sn,J(r),"0")):O(r,Tr(c))<0?p(Jr,0,h-r,f)+("."+p(Jr,h-r,h,f)):le(i+".",p(_t,r,"0",c));return o(Us,a,b)}),el=Es($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ar(t))})),Rs=Bs(el),Ns=x(function(e,r,n){var a=o(eo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Rs,t,n)}),rl=Xu,nl=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(rl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},en=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(G,0,v,s,S(G,1,h,b,w,y),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),xt=x(function(e,r,n){if(n.$===-2)return S(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(rl,e,t);switch(u){case 0:return S(en,a,t,i,p(xt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(en,a,t,i,c,p(xt,e,r,l))}}),Xn=x(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},al=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,w=m.e,y=v.e;return S(G,0,f,h,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,y=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,y))}else return e},mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,w=f.d,y=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,h,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var h=T.b,b=T.c,w=T.d,y=T.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,h,b,w,y))}else return e},Ws=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,mi(r)}else break e;else return c.a,c.d,mi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,Kn(t),l);var u=al(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,Kn(m),f)}else return or}else return S(G,r,n,a,Kn(t),l)}else return or},hn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(hn,e,i),c);var u=al(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,o(hn,e,m),f)}else return or}else return S(G,n,a,t,o(hn,e,i),c);else return o(Ys,e,Et(Ws,e,r,n,a,t,i,c))}),Ys=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=js(c);if(l.$===-1){var u=l.b,v=l.c;return S(en,n,u,v,i,Kn(c))}else return or}else return S(en,n,a,t,i,o(hn,e,c))}else return or}),Gs=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),jn=x(function(e,r,n){var a=r(o(nl,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(Xn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ds,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ms,k(i,c),p(Ns,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===2?Ts(n):a}))}},Is=function(e){return zs(Hs(e))},Os=$(function(e,r){return o(ne,Is(e),r)}),Js=$(function(e,r){return er(r,{eA:o(Os,e,r.eA)})}),qs=$(function(e,r){var n=r.a,a=r.b;return o(Ye,n,er(a,{B:o(Oc,Js(e),a.B)}))}),Zs=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),Qs=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ye,a,er(t,{B:o(Zs,o(e,i.a,r),i)}))}),Xs=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return er(a,{aL:!a.aL});case 2:var t=n.a;return er(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return er(a,{G:o(qs,i,a.G)});case 4:var c=n.a;return er(a,{G:p(Qs,r,c,a.G)});default:var l=n.a;return er(a,{G:o(Ps,l,a.G)})}}),Ks=$(function(e,r){return o(Ye,Ba,{B:k(e,r(e)),ab:P,T:P})}),ed=e$,pi=ed(P),da=Ev,Cn=Vv,rd=o$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),nd=function(e){return{$:4,a:e}},ad={$:0},td=ac,Oe=$(function(e,r){return o(uc,e,td(r))}),H=Oe("className"),od=function(e){var r=e.b.B;return r.b},ma=Oe("id"),id=$$,pa=id,cd=f$,se=cd,ld={$:1},ud=function(e){return{$:3,a:e}},vd=function(e){return{$:5,a:e}},bi=Rr("a"),co=Rr("button"),hi=function(e){return o(Oe,"href",m$(e))},$d=Pr("clip-rule"),Ce=Pr("d"),fd=Pr("fill"),tl=cc("http://www.w3.org/2000/svg"),sd=tl("svg"),dd=Pr("viewBox"),md=o(s$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=sd(g([dd("0 0 24 24"),fd("currentColor"),o(se,"width","100%"),o(se,"height","100%"),md("http://www.w3.org/2000/svg")])),pd=Pr("fill-rule"),Le=tl("path"),Zr={eD:Re(g([o(Le,g([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(g([o(Le,g([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(g([o(Le,g([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(g([o(Le,g([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,g([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(g([o(Le,g([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,g([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(g([o(Le,g([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(g([o(Le,g([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(g([o(Le,g([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(g([o(Le,g([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(g([o(Le,g([pd("evenodd"),$d("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(g([o(Le,g([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(g([o(Le,g([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},bd=function(e){return{$:0,a:e}},ol=lc,il=$(function(e,r){return o(ol,e,bd(r))}),lo=function(e){return o(il,"click",De(e))},gi=Oe("target"),hd=Oe("title"),yt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(yt,e,i),o(yt,e,c))}),gd=ft,sr=gd,_d=function(e){return p(Zt,x(function(r,n,a){return o(B,n,a)}),P,e)},wd=$(function(e,r){return{$:3,a:e,b:r}}),xd=$(function(e,r){return{$:2,a:e,b:r}}),yd=$(function(e,r){return{$:0,a:e,b:r}}),Sd=$(function(e,r){return{$:1,a:e,b:r}}),Nr=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Cd=L(Nr,0/255,0/255,0/255,1),Ld=ac,Pd=$(function(e,r){return o(uc,e,Ld(r))}),zd=Pd("checked"),Qe=fv,kd=x(function(e,r,n){return le(o(Sn,e-Tr(n),Aa(r)),n)}),ba=nv,cl=function(e){var r=function(n){return n<10?Ue(n):Aa(Zc(87+n))};return e<16?r(e):le(cl(e/16|0),r(o(ba,16,e)))},Td=o(te,cl,o(kd,2,"0")),uo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Md=function(e){var r=uo(e),n=r.cN,a=r.cd,t=r.b6;return o(kr,"",o(B,"#",o(ne,o(te,Qe,Td),g([n*255,a*255,t*255]))))},St=Oe("htmlFor"),Ct=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ha=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Dd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),ll=$(function(e,r){return p(mr,Dd(e),P,r)}),ul=V(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Bd=E$,Ad=Mv,Ud=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Fd=V$,Vd=function(e){return o(Fd,{ew:!1,fg:!1},e)},vl=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Ed=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),Rd=function(e){return{$:2,a:e}},Nd=function(e){return{$:0,a:e}},jd=function(e){return{$:1,a:e}},Ya=$(function(e,r){return ar(r)-ar(e)}),Ga=x(function(e,r,n){var a=ar(n);return O(ar(e),a)<1&&O(a,ar(r))<1}),Wd=$(function(e,r){var n=function(t){return O(t,e)<0?ue(t):xe(jd(r))},a=p(Ga,"0","9",r)?ue(o(Ya,"0",r)):p(Ga,"a","z",r)?ue(10+o(Ya,"a",r)):p(Ga,"A","Z",r)?ue(10+o(Ya,"A",r)):xe(Nd(r));return o(ha,n,a)}),$l=$(function(e,r){var n=tn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ha,function(c){return o(ha,function(l){return ue(c+l*e)},o($l,e,i))},o(Wd,e,t))}),Yd=$(function(e,r){return 2<=e&&e<=36?o($l,e,wt(r)):xe(Rd(e))}),Gd=Yd(16),Hd=x(function(e,r,n){return L(Nr,e,r,n,1)}),Id=V(function(e,r,n,a){return L(Nr,e,r,n,a)}),Mn=rv,Od=$(function(e,r){var n=o(Mn,10,e);return Qe(r*n)/n}),Jd=Sv,qd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=qc(n);if(a.b&&!a.b.b){var t=a.a;return Ad(g([t,t]))}else return n};return o(te,Jd,o(te,function(n){return o(Fe,function(a){return p(Bd,1,a,n)},Vd(e))},o(te,Ct(vl),o(te,Fe(function(n){return n.fG}),o(te,Fe(ll(Mr)),o(te,Ud("Parsing hex regex failed"),ha(function(n){var a=o(ne,o(te,r,o(te,Gd,Ed(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(Id,t/255,c/255,u/255,o(Od,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Hd,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),ga=Rr("input"),Lt=Rr("label"),Pt=Oe("name"),fl=$(function(e,r){return p(mr,M,r,e)}),Zd=o(fl,g(["target","checked"]),Q),Qd=function(e){return o(il,"change",o($a,e,Zd))},Xd=function(e){return k(e,!0)},Kd=function(e){return{$:1,a:e}},em=$(function(e,r){return o(ol,e,Kd(r))}),rm=o(fl,g(["target","value"]),Cn),vo=function(e){return o(em,"input",o($a,Xd,o($a,e,rm)))},sl=Oe("max"),dl=Oe("min"),ml=function(e){return o(Oe,"step",e)},_a=Oe("type"),$o=Oe("value"),_i=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(I,P,g([o(Lt,g([St(r)]),g([o(I,g([H("relative w-full")]),g([o(I,g([H("inline-block")]),g([sr(r)])),o(I,g([H("inline-block float-right")]),g([sr(be(n))]))]))])),o(ga,g([_a("range"),o(se,"width","100%"),ma(r),Pt(r),dl(be(a)),sl(be(t)),$o(be(n)),ml(be(i)),vo(o(te,io,o(te,xr(42),c)))]),P)]))},nm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),am=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,g([H("h-12 py-4")]),g([o(Lt,g([H("block"),St(e)]),g([o(ga,g([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),Pt(e),Qd(wd(e)),zd(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:yd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:o(te,Qe,Sd(e)),cW:1,c1:c});default:var c=r.a;return o(I,P,g([o(I,g([o(se,"margin-bottom","6px")]),g([o(Lt,g([St(e)]),g([sr(e)]))])),o(ga,g([_a("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ma(e),Pt(e),vo(function(l){return o(xd,e,o(nm,Cd,qd(l)))}),$o(Md(c))]),P)]))}}),tm=function(e){return o(I,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(I,g([H("text-lg pb-2")]),g([sr(e.fh)])),o(I,g([H("pl-2 pr-2")]),_d(o(yt,am,e.av)))]))},om=function(e){return o(I,g([H("text-xs text-white60")]),o(ne,tm,e))},im=function(e){return o(I,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([sr("clock: "+o(el,3,on(e).a4))]))},cm=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return Qe(60/(on(e).a4-n))},o(Fe,o(te,Kf,function(n){return n.a4}),vl(o(Hc,59,r))))},lm=function(e){return o(I,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=cm(e);if(r.$===1)return g([sr("... Fps")]);var n=r.a;return g([sr(Ue(n)+" Fps")])}())},um=function(e){return{$:0,a:e}},vm=function(e){var r=e.b.T;return Ur(r)},$m=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ur(r)+1+Ur(n)},fm=function(e){return o(ga,g([H("absolute w-full"),_a("range"),dl(Ue(0)),sl(Ue($m(e)-1)),$o(Ue(vm(e))),ml(Ue(1)),vo(o(te,io,o(te,xr(42),o(te,Qe,um))))]),P)},wi={$:1},sm={$:3},dm={$:2},pl=function(e){return!e.b},xi=$(function(e,r){return o(co,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),lo(e)]),g([sr("REC")]))}),yi=$(function(e,r){return o(co,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),lo(r)]),g([o(I,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([e]))]))}),mm=function(e){var r=e.a,n=e.b.ab;return o(I,g([H("py-1")]),g([function(){switch(r.$){case 0:return o(xi,wi,"text-red-500 font-bold");case 1:return o(xi,dm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return pl(n)?o(I,P,P):o(yi,Zr.fq,sm);default:return o(yi,Zr.fp,wi)}}()]))},pm=function(e){return o(I,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([fm(e),mm(e),lm(e),im(e)]))},bm=function(e){var r=e.a;return wr(r,Ba)},hm=$(function(e,r){var n=bm(r.G)?o(I,P,P):o(I,g([H("absolute pointer-events-none w-8 h-8"),o(se,"left",be(e.fs.fU+.5*e.cT.fS)+"px"),o(se,"top",be(-e.fs.fY+.5*e.cT.eW)+"px")]),g([o(I,g([H(e.fs.e4?"text-black80":"text-black40")]),g([Zr.fs]))]));return o(I,P,g([n]))}),gm=$(function(e,r){var n=o(co,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),lo(ld),hd("Distraction Free Mode")]),g([Zr.f0])),a=o(I,g([H("absolute w-8 bottom-12")]),g([o(bi,g([H("text-twitterBlue40 hover:text-twitterBlue"),hi("https://twitter.com/AzizErkalSelman"),gi("_blank")]),g([Zr.fN]))])),t=o(I,g([H("absolute w-8 bottom-2")]),g([o(bi,g([H("text-githubCat40 hover:text-githubCat"),hi("https://github.com/erkal/elm-3d-playground-exploration"),gi("_blank")]),g([Zr.eQ]))]));return r.aL?o(I,g([H("fixed w-10 h-10 p-1")]),g([n])):o(I,P,g([o(I,g([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,t])),o(I,g([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",be(e.cT.eW-80)+"px")]),g([o(pa,ud,om(on(r.G).eA))])),o(I,g([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cT.fS>600?"600px":be(e.cT.fS-40)+"px")]),g([o(pa,vd,pm(r.G))])),o(hm,e,r)]))}),_m=x(function(e,r,n){var a=od(n.G),t=on(n.G);return o(I,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",be(t.cT.fS)+"px"),o(se,"height",be(t.cT.eW)+"px")]),g([o(I,g([H("fixed")]),g([o(pa,Rc(ad),o(e,t,a))])),o(I,g([ma("gui")]),g([o(gm,t,n),o(pa,nd,o(r,t,a))]))]))}),wm=Ie(function(e,r,n,a,t,i){var c=$(function(u,v){return k(L(Xs,r,i,u,v),pi)}),l=function(u){var v=o(Nc,n,u.e1);return k({aL:u.e1.cT.fS<500,G:o(Ks,v,a)},pi)};return bs({e0:l,fH:Rc(rd(ts)),fO:c,fQ:o(_m,e,t)})}),xm=V(function(e,r,n,a){return we(wm,e,r,n,a,$(function(t,i){return o(I,P,P)}),x(function(t,i,c){return c}))}),ym=x(function(e,r,n){return L(xm,e,r,P,n)}),Sm=function(e){return{}},Cm=$(function(e,r){return r}),Fr=av,Si=function(e){return e*Fr/180},Lm=cv,hr=sv,Pm=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Te,J(c),o(Te,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c6:u/d})}else return q}),Ha=function(e){return e},fo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),ea=function(e){var r=e,n=o(Te,J(r.fU),o(Te,J(r.fY),J(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},wa=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),zm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),bl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),km=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Tm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Mm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),Dm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Ze=0,hl={fU:0,fY:0,c6:0},Bm=x(function(e,r,n){return o(Ct,function(a){var t=o(Tm,o(Mm,a,r),r);return o(Ct,function(i){var c=o(fo,r,e),l=o(zm,n,c),u=o(bl,Ze,l)?c:o(km,Ze,l)?Dm(c):hl;return o(Fe,function(v){return A(a,i,v)},ea(u))},ea(t))},ea(e))}),Am=function(e){var r=e,n=J(r.c6),a=J(r.fY),t=J(r.fU);if(O(t,a)<1)if(O(t,n)<1){var i=hr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(O(a,n)<1){var i=hr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},so=function(e){var r=Am(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return k(r,c)},qr=function(e){var r=e;return r},ir=function(e){return e},Um=$(function(e,r){var n=so(e),a=n.a,t=n.b;return ir({cB:r,c4:a,c5:t,c7:e})}),Fm=function(e){var r=o(wa,e.aR,e.dj),n=qr(e.ei),a=o(fo,r,n),t=p(Bm,r,n,a);if(t.$){var v=ea(r);if(v.$){var d=so(e.ei),m=d.a,f=d.b;return ir({cB:e.dj,c4:f,c5:e.ei,c7:m})}else{var s=v.a;return o(Um,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ir({cB:e.dj,c4:u,c5:l,c7:c})}},Ae={fU:0,fY:0,c6:0},Vm=function(e){return{$:0,a:e}},de=function(e){var r=e;return J(r)},ra=function(e){var r=e;return .5*r},Em=iv,Rm=function(e){var r=e;return Em(r)},Nm=function(e){var r=ra(de(e.ej)),n=Rm(r);return{cM:Vm(n),c2:e.c2}},vr=function(e){return e},mo=vr({fU:0,fY:1,c6:0}),yr=function(e){return e},jm=function(e){var r=e.aR,n=e.dj,a=e.ei;return Nm({ej:yr(2*Lm(.5)),c2:Fm({dj:Ha(n),aR:Ha(r),ei:o(xr,mo,o(Pm,Ae,Ha(a)))})})},Ia=function(e){return e/255},Wm=x(function(e,r,n){return L(Nr,Ia(e),Ia(r),Ia(n),1)}),gl=L(Nr,52/255,101/255,164/255,1),Ym=L(Nr,115/255,210/255,22/255,1),po=function(e){return{$:5,a:e}},Gm=function(e){return po(e)},bo=$(function(e,r){return{$:4,a:e,b:r}}),_l=function(e){return e},Hm=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Im=$(function(e,r){return _l(k(e,o(Hm,r,e)))}),wl=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Om=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(wl,e(n),e(a),e(t))}),_r=function(e){return e},Oa=$(function(e,r){return o(bo,e,o(Im,Ae,o(Om,_r,r)))}),Jm=L(Nr,204/255,0/255,0/255,1),qm=Gm(g([o(Oa,Jm,A(100,0,0)),o(Oa,Ym,A(0,100,0)),o(Oa,gl,A(0,0,100))])),ho=$(function(e,r){return{$:0,a:e,b:r}}),Ja=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),Zm=vr({fU:-1,fY:0,c6:0}),Qm=vr({fU:0,fY:-1,c6:0}),xl=vr({fU:0,fY:0,c6:-1}),yl=vr({fU:1,fY:0,c6:0}),go=vr({fU:0,fY:0,c6:1}),pe=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Xm=Ie(function(e,r,n,a,t,i){var c=o(Ja,n,i)?go:xl,l=o(Ja,r,t)?mo:Qm,u=o(Ja,e,a)?yl:Zm,v=A(de(o($r,e,a)),de(o($r,r,t)),de(o($r,n,i))),s=p(pe,o(qa,e,a),o(qa,r,t),o(qa,n,i)),d=ir({cB:s,c4:u,c5:l,c7:c});return{er:d,aK:v}}),Dr=function(e){var r=e;return r.fU},Br=function(e){var r=e;return r.fY},Ar=function(e){var r=e;return r.c6},Km=$(function(e,r){return we(Xm,Dr(e),Br(e),Ar(e),Dr(r),Br(r),Ar(r))}),zt=x(function(e,r,n){return{fU:e,fY:r,c6:n}}),e0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ho,e,o(Km,p(zt,-c,-l,-u),p(zt,c,l,u)))}),kt=function(e){return{$:0,a:e}},Sl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Cl=x(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),Za=function(e){return p(Cl,0,1,e<=.04045?e/12.92:o(Mn,(e+.055)/1.055,2.4))},Dn=j$,r0=function(e){var r=uo(e),n=r.cN,a=r.cd,t=r.b6;return p(Dn,Za(n),Za(a),Za(t))},n0=function(e){return p(Sl,0,kt(r0(e)),kt(0))},Ll=$(function(e,r){return{$:2,a:e,b:r}}),Pl=$(function(e,r){return{$:3,a:e,b:r}}),zl=$(function(e,r){return{$:1,a:e,b:r}}),a0=function(e){var r=e;return r},_o=function(e){var r=e;return a0(r.er)},wo=function(e){var r=e;return r.aK},cn=function(e){var r=e;return r.cB},Vr=tv,rn=ov,na=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=rn(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,w=d*h,y=h*h,_=1-2*(f+y),C=s.c6*u,T=l*C,j=2*(w-T),R=2*(w+T),E=d*C,N=2*(E+b),W=2*(E-b),U=h*C,Z=2*(U-m),X=2*(U+m),ie=C*C,ve=1-2*(y+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+j*i.fY+N*i.c6,fY:R*i.fU+oe*i.fY+Z*i.c6,c6:W*i.fU+X*i.fY+_*i.c6}}),Bn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Vr(c),u=rn(c),v=a.cB,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,h=a.eH,b=h,w=b.fU*u,y=l*w,_=w*w,C=b.fY*u,T=l*C,j=w*C,R=C*C,E=1-2*(_+R),N=b.c6*u,W=l*N,U=2*(j-W),Z=2*(j+W),X=w*N,ie=2*(X+T),ve=2*(X-T),oe=C*N,me=2*(oe-y),Me=2*(oe+y),Se=N*N,pr=1-2*(R+Se),br=1-2*(_+Se);return{fU:s.fU+pr*d+U*m+ie*f,fY:s.fY+Z*d+br*m+me*f,c6:s.c6+ve*d+Me*m+E*f}}),jr=function(e){var r=e;return r.c4},Wr=function(e){var r=e;return r.c5},Yr=function(e){var r=e;return r.c7},t0=x(function(e,r,n){return ir({cB:p(Bn,e,r,cn(n)),c4:p(na,e,r,jr(n)),c5:p(na,e,r,Wr(n)),c7:p(na,e,r,Yr(n))})}),o0=x(function(e,r,n){return{er:p(t0,e,r,_o(n)),aK:wo(n)}}),An=$(function(e,r){return{eH:r,cB:e}}),i0=$(function(e,r){var n=o(Bn,e,r),a=o(na,e,r);return function(t){var i=t;return o(An,n(i.cB),a(i.eH))}}),c0=x(function(e,r,n){var a=n;return{k:p(i0,e,r,a.k),e9:a.e9,fu:a.fu}}),xo=function(e){var r=e;return r},kl=$(function(e,r){var n=xo(r),a=n.a,t=n.b;return _l(k(e(a),e(t)))}),l0=x(function(e,r,n){return o(kl,o(Bn,e,r),n)}),yo=function(e){var r=e;return r.ey},So=function(e){var r=e;return r.fu},Tl=$(function(e,r){return{ey:r,fu:de(e)}}),u0=x(function(e,r,n){return o(Tl,So(n),p(Bn,e,r,yo(n)))}),Ml=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),v0=x(function(e,r,n){return o(Ml,o(Bn,e,r),n)}),Ua=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ho,l,p(o0,e,r,a));case 1:var l=n.a,t=n.b;return o(zl,l,p(v0,e,r,t));case 3:var l=n.a,i=n.b;return o(Pl,l,p(u0,e,r,i));case 2:var l=n.a,c=n.b;return o(Ll,l,p(c0,e,r,c));case 4:var l=n.a,u=n.b;return o(bo,l,p(l0,e,r,u));default:var v=n.a;return po(o(ne,o(Ua,e,r),v))}}),Co=yl,$0=o(An,Ae,Co),f0=$(function(e,r){return p(Ua,$0,yr(e),r)}),Lo=mo,s0=o(An,Ae,Lo),d0=$(function(e,r){return p(Ua,s0,yr(e),r)}),Po=go,m0=o(An,Ae,Po),p0=$(function(e,r){return p(Ua,m0,yr(e),r)}),K=$(function(e,r){var n=r;return e*n}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Un=x(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c6:a.c6+r*(t.c6-a.c6)}}),b0=x(function(e,r,n){var a=_o(n),t=jr(a),i=Wr(a),c=Yr(a),l=p(Un,e,r,cn(a)),u=r>=0?ir({cB:l,c4:t,c5:i,c7:c}):ir({cB:l,c4:fr(t),c5:fr(i),c7:fr(c)}),v=wo(n),s=v.a,d=v.b,m=v.c,f=de(o(K,r,s)),h=de(o(K,r,d)),b=de(o(K,r,m));return{er:u,aK:A(f,h,b)}}),zo=function(e){var r=e;return r.k},Dl=function(e){var r=e;return r.eH},Ci=function(e){return Dl(zo(e))},Bl=function(e){var r=e;return r.cB},h0=function(e){return Bl(zo(e))},Al=function(e){var r=e;return r.e9},Ul=function(e){var r=e;return r.fu},g0=x(function(e,r,n){var a=de(o(K,r,Ul(n))),t=de(o(K,r,Al(n))),i=r>=0?Ci(n):fr(Ci(n)),c=p(Un,e,r,h0(n));return{k:o(An,c,i),e9:t,fu:a}}),_0=x(function(e,r,n){return o(kl,o(Un,e,r),n)}),w0=x(function(e,r,n){return o(Tl,o(K,J(r),So(n)),p(Un,e,r,yo(n)))}),x0=x(function(e,r,n){return o(Ml,o(Un,e,r),n)}),Fl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ho,c,p(b0,Ae,e,n));case 1:var c=r.a,a=r.b;return o(zl,c,p(x0,Ae,e,a));case 3:var c=r.a,t=r.b;return o(Pl,c,p(w0,Ae,e,t));case 2:var c=r.a,i=r.b;return o(Ll,c,p(g0,Ae,e,i));case 4:var c=r.a,l=r.b;return o(bo,c,p(_0,Ae,e,l));default:var u=r.a;return po(o(ne,Fl(e),u))}}),y0=$(function(e,r){return(r-Vc(r/e)*e)/e}),S0=function(e){return 2*Fr*e},Wn=V(function(e,r,n,a){return e+(r-e)*(1+Vr(S0(o(y0,n,a))))/2}),C0=function(e){return o(p0,L(Wn,1,10,30,e.a4),o(d0,L(Wn,1,10,30,e.a4),o(f0,L(Wn,1,10,30,e.a4),o(Fl,L(Wn,1,2,14,e.a4),o(e0,n0(gl),A(1,1,1))))))},L0=$(function(e,r){return g([qm,C0(e)])}),P0=function(e){return e},z0=function(e){return _r(.01*e)},Li=function(e){return e},k0=function(e){return e},T0=function(e){return{$:0,a:e}},M0=T0,D0={$:3},B0=D0,A0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),U0=A0,F0=$(function(e,r){return r.b?p(mr,B,r,e):e}),Ge=function(e){return p(mr,F0,P,e)},ko=$(function(e,r){return Ge(o(ne,e,r))}),V0=function(e){return{$:1,a:e}},E0=V0,R0=function(e){return o(Pr,"height",Ue(e))},N0=function(e){return u$(d$(e))},j0=N0,W0=function(e){return{$:2,a:e}},Y0=W0,G0=function(e){return o(kr,"",e)},H0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return G0(g(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},I0=$(function(e,r){switch(r.$){case 0:return o(Tf,e,r);case 1:return o(Mf,e,r);case 2:return o(Df,e,r);case 3:return o(Bf,e,r);case 4:return o(Af,e,r);default:return o(Uf,e,r)}}),O0=$(function(e,r){switch(r.$){case 0:return o(of,e,r);case 1:return o(cf,e,r);case 2:return o(lf,e,r);case 3:return o(uf,e,r);case 4:return o(vf,e,r);case 5:return o($f,e,r);case 6:return o(ff,e,r);case 7:return o(sf,e,r);default:return df(e)}}),J0=x(function(e,r,n){return p(kf,e,r,n)}),Pi=function(e){var r=e;return r},ln=O$,Qa=L(ln,1,1,1,1),Xe=x(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),q0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(q0,n*a/t,n,n*(1-a-t)/t)}),Q0=function(e){var r=e.a,n=e.b,a=e.c;return p(Dn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=$(function(e,r){return Q0(o(Z0,e,r))}),Vl=$(function(e,r){return{dp:wr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),rr=K$,X0=function(e){return rr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Xa=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(ln,a.bY,a.bY,a.bY,i);return we(t,e,c,X0(a),a.dp,r,n)}),El=Ie(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Vl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(B,S(Xa,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,y=o(B,S(Xa,e,r,n,a,w),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,C=o(B,S(Xa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(ka,L(El,e,r,n,a),i,T)}}),K0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Rl=K0,Mo=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ep=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,518,r,n,a)},rp=$(function(e,r){return{$:6,a:e,b:r}}),np=rp,Nl=g([ep({V:1,W:0,Z:!1}),L(Rl,!1,!1,!1,!1),o(np,0,1)]),nn=519,Do=8,jl=15,Qr=7681,ap={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=tf,tp=$(function(e,r){return{$:0,a:e,b:r}}),op=tp({df:1,$7:0,dV:5}),Be=R$,ip=op(g([{bU:o(Be,-1,-1)},{bU:o(Be,1,-1)},{bU:o(Be,-1,1)},{bU:o(Be,1,1)}])),cp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Bo=x(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(lp,a,t,i)))}),Ao=function(e){return p(Bo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Uo=function(e){return S(ae,g([Ao(e),L(Rl,!1,!1,!1,!1)]),cp,ap,ip,{})},up=Uo({a9:Qr,cp:0,cO:Do,bm:nn,c3:jl,bu:Qr,bv:Qr}),vp=516,zi=5386,ye=7680,$p=function(e){return o(Mn,2,e+4)},Wl=function(e){return Uo({a9:ye,cp:jl,cO:Do,bm:vp,c3:$p(e),bu:zi,bv:zi})},fp=x(function(e,r,n){return Ge(g([p(Xe,e,n,Nl),g([Wl(r),up])]))}),sp=$(function(e,r){return Ge(o(Mc,fp(e),r))}),dp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,513,r,n,a)},mp=dp({V:1,W:0,Z:!0}),pp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},bp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return pp(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},hp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ki=$(function(e,r){var n=e,a=r;return p(hp,32774,n,a)}),gp=1,Ti=771,_p=770,Fo=bp({bw:0,aH:o(ki,gp,Ti),bz:0,bB:o(ki,_p,Ti),bG:0,bW:0}),Gr=g([mp,Fo]),wp=function(e){var r=e;return r.dO},xp=function(e){var r=e;return r.dP},Yl=function(e){var r=e;return r.dQ},yp=function(e){var r=e;return r.dR},Sp=function(e){var r=e;return r.dS},Gl=function(e){var r=e;return r.dT},Hl=function(e){return A(o($r,yp(e),wp(e)),o($r,Sp(e),xp(e)),o($r,Gl(e),Yl(e)))},Mi=function(e){var r=e;return cn(r)},Cp=function(e){return e},Lp=function(e){return ir({cB:Cp({fU:e.H,fY:e.I,c6:e.J}),c4:vr({fU:e.q,fY:e.r,c6:e.s}),c5:vr({fU:e.t,fY:e.u,c6:e.v}),c7:vr({fU:e.w,fY:e.x,c6:e.y})})},Ka=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Il=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,d=n.c5,m=d,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Ol=$(function(e,r){return{cB:o(Il,e,cn(r)),c4:o(Ka,e,jr(r)),c5:o(Ka,e,Wr(r)),c7:o(Ka,e,Yr(r))}}),xa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Te,n,a)}),aa=$(function(e,r){return O(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),Pp=$(function(e,r){var n=xa(r),a=xa(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),He=function(e){var r=e;return r},zp=function(e){var r=e;return A(r.fU,r.fY,r.c6)},gn=$(function(e,r){var n=e,a=r;return a+n}),kp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(de(a)),c=ra(de(n)),l=ra(de(t)),u=zp(r),v=u.a,s=u.b,d=u.c;return{dO:o(gn,c,v),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Di=V(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,d=He(Yr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c6),f=He(Wr(e)),h=J(l*f.fU)+J(c*f.fY)+J(i*f.c6),b=He(jr(e)),w=J(l*b.fU)+J(c*b.fY)+J(i*b.c6),y=o(kp,A(w,h,m),o(Il,e,p(zt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(Pp,_,y))}),Tt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 1:var c=t.a,l=L(Di,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 2:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 3:var c=t.a,l=L(Di,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 4:var u=t.a,f=e,h=r,b=L(Tt,e,r,n,u),w=i;e=f,r=h,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Ol,Lp(v),e),m=r*v.bY,f=e,h=r,b=L(Tt,d,m,n,g([s])),w=i;e=f,r=h,n=b,a=w;continue e}}else return n}),un=W$,vn=Y$,$n=G$,Jl=function(e){return{$:4,a:e}},Tp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Jl(o(Tp,e,P))},Mp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Dp=function(e){var r=e;return r},Bi=Uo({a9:Qr,cp:0,cO:Do,bm:nn,c3:255,bu:Qr,bv:Qr}),Bp=function(e){var r=e,n=o(Te,J(r.fU),o(Te,J(r.fY),J(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return Ze},Pe={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},je=$(function(e,r){var n=e,a=r;return rr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=k({be:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe),bN:o(je,Pe,Pe)},L(ln,0,0,0,0)),Ai=function(e){var r=e;return-r},ql=514,Zl=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,515,r,n,a)},Ql=240,Ap=g([Zl({V:1,W:0,Z:!0}),Ao({a9:ye,cp:Ql,cO:0,bm:ql,c3:0,bu:ye,bv:ye}),Fo]),Up=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cM;if(s.$){var m=s.a;return gt(v)?rr({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):rr({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return gt(v)?rr({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):rr({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Yn=$(function(e,r){return(1&e>>r)===1?0:1}),Fp=function(e){return g([Zl({V:1,W:0,Z:!0}),Ao({a9:ye,cp:Ql,cO:e,bm:ql,c3:0,bu:ye,bv:ye}),Fo])},Vp=x(function(e,r,n){return Ge(o(ne,function(a){var t=a<<4,i=L(ln,o(Yn,a,0),o(Yn,a,1),o(Yn,a,2),o(Yn,a,3));return p(Xe,e,k(r,i),Fp(t))},o(Kr,1,o(Mn,2,n)-1)))}),Xr=function(e){var r=e;return r},Ep=ef,Ui=function(e){var r=e;return fr(Yr(r))},Rp={cB:Ae,c4:Co,c5:Lo,c7:Po},Fa=function(e){var r=e;return r},Np=function(e){var r=Fa(cn(e)),n=He(Yr(e)),a=He(Wr(e)),t=He(jr(e));return rr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},jp=$(function(e,r){var n=r;return Np(o(Ol,n,e))}),Wp=function(e){return o(jp,Rp,e)},Yp=function(e){var r=e;return r.c2},Gp=function(e){var r=e;return jr(r)},Hp=function(e){var r=e;return Wr(r)},Ip=function(e){var r=Yp(e.ev),n=ir({cB:Mi(r),c4:Gp(r),c5:Hp(r),c7:fr(Ui(r))}),a=Fn(e.aP),t=a,i=L(Tt,n,1,q,g([t]));if(i.$===1)return P;var c=i.a,l=Wp(r),u=o(K,.99,o(ce,de(e.aJ),Ai(Yl(c)))),v=Hl(c),s=v.a,d=v.b,m=v.c,f=Bp(p(wl,s,d,m)),h=o(K,1.01,o(gn,f,Ai(Gl(c)))),b=o(Up,e.ev,{eq:e.eq,eP:h,fi:u}),w=Ep(b).dM,y=w?He(fr(Ui(r))):Xr(Mi(r)),_=function(){var oe=e.b_;switch(oe.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var me=oe.a;return k(3,me);case 4:var me=oe.a;return k(4,me);default:return k(5,0)}}(),C=_.a,T=_.b,j=e.bE,R=j,E=o(To,R,e.b0),N=E,W=rr({dx:0,dy:y.fU,dz:un(N),dA:e.ec,dB:0,dC:y.fY,dD:vn(N),dE:Dp(f),dF:0,dG:y.c6,dH:$n(N),dI:C,dJ:0,dK:w,dL:0,dM:T}),U=we(El,W,l,b,Mp,t,{M:P,U:P,fB:P}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return Ge(g([p(Xe,U.M,k(X,Qa),Gr),p(Xe,U.U,pn,Gr)]));case 1:var X=Z.a;return Ge(g([p(Xe,U.M,pn,Gr),g([Bi]),p(Xe,U.fB,X.be,Nl),g([Wl(0)]),p(Xe,U.M,k(X,Qa),Ap),p(Xe,U.U,pn,Gr)]));default:var ie=Z.a,ve=Z.b;return Ge(g([p(Xe,U.M,k(ve,Qa),Gr),g([Bi]),o(sp,U.fB,ie),p(Vp,U.M,ve,Ur(ie)),p(Xe,U.U,pn,Gr)]))}},Op=function(e){return o(Pr,"width",Ue(e))},Jp=$(function(e,r){var n=g([E0(1),Y0(0),M0(!0),L(U0,0,0,0,0)]),a=function(){var C=e.b1;switch(C.$){case 0:return A(n,"0",1);case 1:return A(o(B,B0,n),"1",1);default:var T=C.a;return A(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Pi(v),d=o(se,"height",Ue(s)+"px"),m=Pi(u),f=m/s,h=o(ko,function(C){return Ip({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bE:C.bE,bK:C.bK,ec:c,b_:C.b_,b0:C.b0})},r),b=o(se,"width",Ue(m)+"px"),w=e.aI,y=w,_=H0(y);return p(j0,"div",g([o(se,"padding","0px"),b,d]),g([k(i,p(J0,t,g([Op(Qe(m*c)),R0(Qe(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),h))]))}),qp=function(e){return o(Jp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},Xl=function(e){return e},Fi=Xl({fU:.31271,fY:.32902}),Zp=$(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(To,r.ce,r.b7),u=l;return{bz:$n(u),ex:n,bG:vn(u),cK:0,bW:un(u),c_:1,fU:-t,fY:-i,c6:-c}}),Qp=function(e){return e},Xp=function(e){return Qp(1.2*o(Mn,2,e))},et=function(e){return e},Kp={$:0},e1=Kp,Kl=function(e){return e},Vi=function(e){var r=e;return r},r1=function(e){e:for(;;){if(wr(e.e2,Ze)&&wr(e.e3,Ze))return Pe;if(o(bl,de(e.e2),de(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=J(Vi(e.e3)/Fr),a=J(Vi(e.e2)/Fr),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(To,Kl(1),e.b7),v=u;return{bz:a*$n(v),ex:!1,bG:a*vn(v),cK:n/a,bW:a*un(v),c_:3,fU:i,fY:c,c6:l}}}},Ei=function(e){return r1({b7:e.b7,e2:e.ce,e3:Ze,ei:e.ei})},n1=function(e){var r=e;return r},eu=function(e){var r=p(Cl,1667,25e3,n1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Xl({fU:n,fY:a})},ru=function(e){return e},a1=eu(ru(12e3)),t1=eu(ru(5600)),o1=function(e){return{$:2,a:e}},i1=function(e){return o1(e)},c1=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},Gn=function(e){var r=e;return r},l1=function(e){var r=e;return r.ex},u1=nu(pn.a),v1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(B,a,i),c):k(i,o(B,a,c))});return p(mr,n,k(P,P),r)}),$1=function(e){var r=e;return rr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},f1=ee(function(e,r,n,a,t,i,c,l){var u=o(v1,l1,g([Gn(e),Gn(r),Gn(n),Gn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(c1,o(ne,$1,v),{be:o(je,m,h),bL:o(je,w,_),bM:o(je,t,i),bN:o(je,c,l)})}else return u1}else return nu({be:o(je,e,r),bL:o(je,n,a),bM:o(je,t,i),bN:o(je,c,l)})}),s1=x(function(e,r,n){return Pa(f1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),d1=function(e){var r=o(Zp,k0(e.fB),{b7:t1,eH:e.fJ,ce:et(8e4)}),n=Ei({b7:a1,ce:et(2e4),ei:e.ei}),a=Ei({b7:Fi,ce:et(15e3),ei:fr(e.ei)}),t=p(s1,r,n,a);return qp({b1:i1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:Xp(15),bK:t,b_:e1,b0:Fi})},au=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),m1=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),p1=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),b1=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),h1=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Vo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(h1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(m1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(b1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(p1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Eo={$:0},g1=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=xa(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),h=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),y=c,_=v;e=d,r=m,n=f,a=h,t=b,i=w,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),_1=x(function(e,r,n){var a=xa(e(r));return Pa(g1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),rt=$(function(e,r){var n=e,a=r;return O(a,n)<1}),iu=function(e){return o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)&&o(rt,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},cu=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Dr(n),c=Br(n),l=Ar(n),u=Dr(a),v=Br(a),s=Ar(a),d=Dr(t),m=Br(t),f=Ar(t);return iu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},lu=H$,ze=function(e){return lu(Fa(e))},uu=function(e){var r=e;return r},Va=function(e){return lu(uu(e))},w1=$(function(e,r){var n=e,a=r,t=o(Te,J(a.fU),o(Te,J(a.fY),J(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return hl}),x1=w1(Kl(1)),vu=x(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return x1(o(fo,a,t))}),y1=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Va(p(vu,n,a,t));return A({o:i,bU:ze(n)},{o:i,bU:ze(a)},{o:i,bU:ze(t)})},S1=$(function(e,r){return{$:2,a:e,b:r}}),$u=S1({df:3,$7:0,dV:4}),C1=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ne,y1,e)),t=p(_1,cu,r,n);return L(au,t,e,a,0)}else return Eo},Ne=x(function(e,r,n){return A(e,r,n)}),fu=function(){var e=_r(1),r=_r(1),n=_r(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(pe,i,t,a),l=o(K,.5,e),u=p(pe,i,t,l),v=o(K,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(K,.5,n),f=p(pe,m,t,a),h=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Vo(C1(g([p(Ne,c,h,f),p(Ne,c,s,h),p(Ne,u,b,w),p(Ne,u,w,d),p(Ne,f,h,w),p(Ne,f,w,b),p(Ne,c,d,s),p(Ne,c,u,d),p(Ne,c,f,b),p(Ne,c,b,u),p(Ne,s,w,h),p(Ne,s,d,w)])))}(),Hn={$:0},L1=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),P1=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(vu,u,l,c)),s={o:v,bU:ze(u)},d={o:v,bU:ze(l)},m={o:v,bU:ze(c)};return o(B,s,o(B,d,o(B,m,n)))}),z1=or,Ro=function(e){var r=e;return r.D},k1=V(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Mt=4294967295>>>32-yn,Dt=qu,T1=x(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var v=t.a;return o(Dt,Mt&r,v)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),M1=function(e){return e>>>5<<5},D1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,M1(n))>-1?re(o(Dt,Mt&e,i)):re(p(T1,a,e,t))}),No=function(e){var r=e;return r.ah},nt=$(function(e,r){return o(D1,e,No(r))}),B1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(k1,x(function(c,l,u){return A(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(ll,r,Ro(e))},A1=x(function(e,r,n){e:for(;;){var a=o(ro,Ee,e),t=a.a,i=a.b;if(O(bt(t),Ee)<0)return o(Ec,!0,{z:r,l:n,p:t});var c=i,l=o(B,Fc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),jo=function(e){return e.b?p(A1,e,P,0):Ac},U1=x(function(e,r,n){return e(r(n))}),F1=$(function(e,r){return!o(Jc,o(U1,hs,e),r)}),V1=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),E1=function(e){var r=e.a;return r},su=$(function(e,r){var n=E1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(F1,a,r)?{D:r,ah:e}:{D:o(V1,a,r),ah:e}}),R1=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=R1({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return k(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Ri=p(Dn,0,0,0),at=Ie(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(nl,o(ta,e,r),t);if(v.$){var d={o:Ri,bU:ze(r)},m={o:Ri,bU:ze(e)},f=u+1,h=u;return A(o(B,A(n,h,f),o(B,A(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),N1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,w=e,y=r,_=v,C=a+3,T=we(at,s,m,f,b,r,we(at,d,s,h,f,r,we(at,m,d,b,h,r,t)));e=w,r=y,n=_,a=C,t=T;continue e}else{var j=t,R=j.a,E=j.b;return k(R,Ve(E))}}),j1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,w=p(Xn,o(ta,m,s),f,p(Xn,o(ta,s,d),h,p(Xn,o(ta,d,m),b,t))),y=o(B,A(b,h,f),a),_=e,C=v,T=n+3,j=y,R=w;e=_,r=C,n=T,a=j,t=R;continue e}else return A(a,t,n)}),zr=x(function(e,r,n){var a=B1(n),t=p(mr,P1(r),P,a),i=S(j1,r,a,0,P,z1),c=i.a,l=i.b,u=i.c,v=S(N1,r,l,a,0,A(c,P,u)),s=v.a,d=v.b,m=pl(d)?t:le(t,d);return p(L1,e,o(su,jo(m),s),o(Vn,m,s))}),Bt=function(e){return{D:o(ne,function(r){return A(3*r,3*r+1,3*r+2)},o(Kr,0,Ur(e)-1)),ah:jo(Ge(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return Hn;case 1:var a=e.a,r=e.b,n=o(ne,Ln,r);return p(zr,a,Mr,Bt(n));case 2:var a=e.a,r=e.b,n=o(ne,Ln,r);return p(zr,a,Mr,Bt(n));case 3:var a=e.a,t=e.b;return p(zr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 8:return Hn;case 9:return Hn;default:return Hn}},Ni=du(fu),mu={$:0},z=mu,he=$(function(e,r){return{$:1,a:e,b:r}}),W1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Y1=1029,G1=function(e){return{$:5,a:e}},pu=function(e){var r=e;return G1(r)},H1=pu(Y1),I1=1028,O1=pu(I1),ke=x(function(e,r,n){return r===1?e?o(B,H1,n):o(B,O1,n):n}),bu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(ke,l,a,d),bu,W1,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},hu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(ke,l,a,d),hu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),gu=$(function(e,r){return{$:3,a:e,b:r}}),J1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},_u={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},q1=V(function(e,r,n,a){return o(gu,n,ee(function(t,i,c,l,u,v,s,d){return S(ae,d,_u,J1,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Yo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Ea=I$,lr=ge(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(ke,u,t,m),hu,Yo,a,{aN:o(Ea,En(r),e),b:l,c,d:s,e:i,f:v})}))}),Z1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},Q1=ge(function(e,r,n,a,t){return o(gu,a,ee(function(i,c,l,u,v,s,d,m){return S(ae,m,_u,Z1,t,{aN:o(Ea,En(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},xu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},In=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),xu,wu,n,{P:f,be:m.be,bL:m.bL,bM:m.bM,bN:m.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),yu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},X1=Ie(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ae,p(ke,v,i,f),Su,yu,t,{P:b,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},K1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(he,u,ee(function(d,m,f,h,b,w,y,_){var C=y.a,T=y.b;return S(ae,p(ke,h,s,_),Su,Cu,v,{b5:e,b8:r,b9:i,ca:a,P:T,be:C.be,bL:C.bL,bM:C.bM,bN:C.bN,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Lu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},On=Ie(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ae,p(ke,v,i,f),xu,Lu,t,{b4:e,P:b,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),eb=function(e){return{$:0,a:e}},ji=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),rb=function(e){return L(ln,un(e),vn(e),$n(e),1)},Go=L(ln,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Go)}else{var n=r.a;return k(e,rb(n))}}),Pu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(ji,k(t,Go),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ji,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,eb(a)}}),nb=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ab=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),tb=function(e){return o(Be,e,1)},At=o(Be,0,0),Hr=$(function(e,r){if(r.$){var a=r.a.C;return k(a,At)}else{var n=r.a;return k(e,tb(n))}}),zu=V(function(e,r,n,a){var t=L(ab,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Jn,k(u,Go),o(Hr,u,r),o(Hr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Jn,o(oa,u,e),k(u,At),o(Hr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Jn,o(oa,u,e),o(Hr,u,r),k(u,At),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Jn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(nb,i,c,l)}}),ob={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},ot=ge(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(ke,u,t,m),bu,ob,a,{b2:En(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),ku={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ib=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),ku,yu,n,{P:f,be:m.be,bL:m.bL,bM:m.bM,bN:m.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),cb=Vt(function(e,r,n,a,t,i,c,l,u){return o(he,c,ee(function(v,s,d,m,f,h,b,w){var y=b.a,_=b.b;return S(ae,p(ke,m,u,w),ku,Cu,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:y.be,bL:y.bL,bM:y.bM,bN:y.bN,cv:t,b:d,c:s,aW:e,d:h,cS:n,e:v,a$:0,f})}))}),Pn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),lb=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},ub=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},vb=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},$b=function(e){return p(pe,lb(e),ub(e),vb(e))},Y=function(e){var r=Hl(e),n=r.a,a=r.b,t=r.c;return{ey:Fa($b(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tt,l,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(q1,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ot,l,v,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Q1,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Pu,s,R);if(d.$){var h=d.a,b=h.a;h.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(ib,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(X1,b,y,_,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var C=e.b,T=e.c,j=e.d,R=e.e,E=L(zu,C,T,j,R);if(E.$){var Z=E.a,X=Z.a,ie=Z.b,ve=E.b,oe=ve.a,me=ve.b,Me=E.c,Se=Me.a,pr=Me.b,br=E.d,y=br.a,_=br.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Gu(cb,X,ie,oe,me,Se,pr,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return K1(X)(ie)(oe)(me)(Se)(pr)(y)(_)(Y(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,W=E.b,U=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),it=function(e){var r=e;return r.fU},ct=function(e){var r=e;return r.fY},lt=function(e){var r=e;return r.c6},fb=function(e){var r=e,n=lt(r.c7),a=ct(r.c7),t=it(r.c7),i=lt(r.c5),c=ct(r.c5),l=it(r.c5),u=lt(r.c4),v=ct(r.c4),s=it(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},sb=function(e){var r=Fa(cn(e)),n=He(Yr(e)),a=He(Wr(e)),t=He(jr(e));return{dp:fb(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),Tu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Vl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Mu=$(function(e,r){return o(Tu,sb(e),r)}),Ra=function(e){return{$:2,a:e}},db=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),mb=q$,pb=J$,Wi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=pb(a),h=f.fU,b=f.fY,w=f.c6,y=f.em,_=mb({em:y,fU:h*s,fY:b*d,c6:w*m});return Pa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return mu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(he,o(db,e,t),o(Wi,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Wi,e,i));default:var c=r.a;return Jl(o(ne,Ut(e),c))}}),Io=$(function(e,r){var n=r;return o(Ut,e,n)}),Oo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Bu=7682,bb=p(Bo,{cp:0,cO:0,c3:15},{a9:ye,bm:nn,bu:ye,bv:Du},{a9:ye,bm:nn,bu:ye,bv:Bu}),hb=p(Bo,{cp:0,cO:0,c3:15},{a9:ye,bm:nn,bu:ye,bv:Bu},{a9:ye,bm:nn,bu:ye,bv:Du}),Jo=$(function(e,r){return e?o(B,hb,r):o(B,bb,r)}),gb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},_b=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(Jo,i,v),gb,Oo,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},ya=function(e){var r=_b(e);if(r.$)return z;var n=r.a;return Ra(n)},wb=V(function(e,r,n,a){var t=o(Ho,n,fu),i=function(){var s=k(e,r);return s.a?s.b?Fn(g([t,ya(Ni)])):t:s.b?ya(Ni):z}(),c=wo(a),l=c.a,u=c.b,v=c.c;return o(Mu,_o(a),o(Io,A(l,u,v),i))}),xb=$(function(e,r){return L(wb,!0,!0,e,r)}),Au=$(function(e,r){return{$:0,a:e,b:r}}),yb=function(e){var r=uo(e),n=r.cN,a=r.cd,t=r.b6;return p(Dn,n,a,t)},Sb=function(e){return o(Au,0,kt(yb(e)))},wn=function(e){var r=e;return Vr(r)},Cb=$(function(e,r){var n=r;return n/e}),Yi=function(e){var r=e;return{fU:Vr(r),fY:rn(r)}},Lb=$(function(e,r){var n=e.bU,a=e.o;return o(B,{o:Va(a),bU:ze(n)},r)}),Pb=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bU),s=vn(l.bU),d=un(l.bU),m=o(aa,e,d),f=o(Te,r,d),h=o(aa,n,s),b=o(Te,a,s),w=o(aa,t,v),y=o(Te,i,v),_=u;e=m,r=f,n=h,a=b,t=w,i=y,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Uu=$(function(e,r){var n=$n(e.bU),a=vn(e.bU),t=un(e.bU);return Et(Pb,t,t,a,a,n,n,r)}),zb=function(e){var r=p(Lc,Lb,P,No(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Ro(e)),i=o(Uu,n,a);return L(tu,i,e,t,0)}else return Eo},Gi=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),Sa=function(e){var r=e;return rn(r)},Ft=function(e){return yr(2*Fr*e)},kb=Mr,Hi=kb({cB:Ae,c4:Co,c5:Lo}),Fu=function(){var e=72,r=o(Cb,e,Ft(1)),n=_r(1),a=qr(go),t=qr(xl),i=_r(1),c=o(K,.5,i),l=p(pe,Ze,Ze,c),u=o(K,-.5,i),v=p(pe,Ze,Ze,u),s=function(f){var h=o(K,f,r),b=qr(o(Gi,Hi,Yi(h))),w=o(K,wn(h),n),y=o(K,Sa(h),n),_=p(pe,w,y,c),C=p(pe,w,y,u),T=o(ba,e,f+1),j=o(K,T,r),R=qr(o(Gi,Hi,Yi(j))),E=o(K,wn(j),n),N=o(K,Sa(j),n),W=p(pe,E,N,u),U=p(pe,E,N,c);return g([A({o:t,bU:v},{o:t,bU:W},{o:t,bU:C}),A({o:b,bU:C},{o:R,bU:W},{o:R,bU:U}),A({o:b,bU:C},{o:R,bU:U},{o:b,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:U})])},d=o(ne,s,o(Kr,0,e-1)),m=Bt(Ge(d));return Vo(zb(m))}(),Ii=du(Fu),Tb=function(e){var r=Dl(e),n=so(r),a=n.a,t=n.b;return ir({cB:Bl(e),c4:a,c5:t,c7:r})},Mb=V(function(e,r,n,a){var t=Tb(zo(a)),i=o(Ho,n,Fu),c=function(){var d=k(e,r);return d.a?d.b?Fn(g([i,ya(Ii)])):i:d.b?ya(Ii):z}(),l=Ul(a),u=l,v=Al(a),s=v;return o(Mu,t,o(Io,A(u,u,s),c))}),Db=$(function(e,r){return L(Mb,!0,!0,e,r)}),Oi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Ji={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},bn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return rr({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},qn=$u(g([A({cZ:0},{cZ:1},{cZ:2})])),Bb=$(function(e,r){var n=cu(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(he,a,ee(function(_,C,T,j,R,E,N,W){return S(ae,p(ke,j,0,W),Oi,Wo,qn,{aw:t,b:T,c:C,d:E,e:_,br:bn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(he,a,ee(function(_,C,T,j,R,E,N,W){return S(ae,p(ke,j,0,W),Oi,Yo,qn,{aN:o(Ea,En(c),i),b:T,c:C,d:E,e:_,br:bn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Pu,l,f);if(u.$)return z;var v=u.a;return o(he,a,ee(function(_,C,T,j,R,E,N,W){var U=N.a,Z=N.b;return S(ae,p(ke,j,0,W),Ji,wu,qn,{P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cq:v,b:T,c:C,d:E,e:_,br:bn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=L(zu,s,d,m,f);if(h.$)return z;var b=h.a,w=h.b,y=h.c;return o(he,a,ee(function(_,C,T,j,R,E,N,W){var U=N.a,Z=N.b;return S(ae,p(ke,j,0,W),Ji,Lu,qn,{b4:b,P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cu:y,b:T,c:C,d:E,cR:w,e:_,br:bn(r),f:R})}))}}),Ab=function(){var e=g([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=g([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Vn,e,r)}(),Ub={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},qi=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Jo,t,u),Ub,Oo,Ab,{b:a,c:n,d:c,e:r,bZ:l,br:bn(e),f:i})}))},Fb=V(function(e,r,n,a){var t=o(Bb,n,a),i=k(e,r);return i.a?i.b?Fn(g([t,qi(a)])):t:i.b?qi(a):z}),Vb=$(function(e,r){return L(Fb,!0,!0,e,r)}),Eb=$(function(e,r){var n=Ar(r),a=Ar(e),t=Br(r),i=Br(e),c=Dr(r),l=Dr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Rb=function(e){var r=xo(e),n=r.a,a=r.b;return o(Eb,n,a)},Zi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Nb=$(function(e,r){return{$:1,a:e,b:r}}),jb=Nb({df:2,$7:0,dV:1}),Qi=jb(g([k({dw:0},{dw:1})])),Wb=$(function(e,r){var n=Rb(r),a=Y(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(he,a,ee(function(v,s,d,m,f,h,b,w){return S(ae,w,Zi,Wo,Qi,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(he,a,ee(function(s,d,m,f,h,b,w,y){return S(ae,y,Zi,Yo,Qi,{aN:o(Ea,En(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return z;default:return z}}),Yb=$(function(e,r){return o(Wb,e,r)}),Zn=function(e){return yr(Fr*(e/180))},Xi=$(function(e,r){var n=e,a=r;return n/a}),Gb=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(wr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Ki=$(function(e,r){return e<1?P:S(Gb,0,e,e,r,P)}),Hb=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bU:ze(n),L:o(Be,c,l)},r)}),Ib=function(e){var r=p(Lc,Hb,P,No(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Ro(e)),i=o(Uu,n,a);return L(ou,i,e,t,0)}else return Eo},Vu=$(function(e,r){var n=e,a=r,t=Vr(a);return{fU:t*Vr(n),fY:t*rn(n),c6:rn(a)}}),Ob=function(){var e=_r(1),r=72,n=o(Kr,0,r-1),a=o(Ki,r,o(Pn,Ze,Ft(1))),t=Kt(r/2),i=o(Kr,0,t-1),c=o(Ki,t,o(Pn,Zn(90),Zn(-90))),l=jo(Ge(o(ne,function(s){return o(ne,function(d){return{o:qr(o(Vu,s,d)),bU:p(pe,o(K,wn(d)*wn(s),e),o(K,wn(d)*Sa(s),e),o(K,Sa(d),e)),L:k(o(Xi,s,Ft(1)),o(Xi,o(gn,Zn(90),d),Zn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(ne,function(s){return Ge(o(ne,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([A(b,h,m),A(b,m,f)])},i))},n));return Vo(Ib(o(su,l,v)))}(),Ca=72,Qn=2*Ca,Jb=$(function(e,r){e:for(;;){var n=Qn+1,a=o(ba,Qn,2*e+3),t=o(ba,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),qb=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Zb=$(function(e,r){e:for(;;){var n=p(qb,0,2*Fr,e/Ca),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Qb=function(){var e=o(Zb,Ca-1,g([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(Jb,Ca-1,P);return o(Vn,e,r)}(),Xb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},ec=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Jo,!0,u),Xb,Oo,Qb,{aw:p(Dn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},Kb=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},e3=$(function(e,r){return o(Tu,Kb(e),r)}),r3=V(function(e,r,n,a){var t=o(Ho,n,Ob),i=function(){var u=k(e,r);return u.a?u.b?Fn(g([t,ec()])):t:u.b?ec():z}(),c=So(a),l=c;return o(e3,o(wa,Ae,yo(a)),o(Io,A(l,l,l),i))}),n3=$(function(e,r){return L(r3,!0,!0,e,r)}),a3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),t3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),o3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Au,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(a3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Sl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(t3,n,a,t,i,c)}},i3=o3,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(xb,t,r)]);case 1:var t=e.a,n=e.b;return g([o(Vb,t,n)]);case 3:var t=e.a,a=e.b;return g([o(n3,i3(t),a)]);case 2:var t=e.a,i=e.b;return g([o(Db,t,i)]);case 4:var c=e.a,l=e.b;return g([o(Yb,Sb(c),l)]);default:var u=e.a;return o(ko,Eu,u)}},c3=function(e){return o(ko,Eu,e)},l3=$(function(e,r){return d1({aI:P0(e.es),ev:e.ev,aJ:z0(.5),cb:e.cb,aK:k(Li(Qe(e.cT.fS)),Li(Qe(e.cT.eW))),aP:c3(r),fB:!0,fJ:o(Vu,yr(e.fI),yr(e.fK)),ei:Po})}),u3=$(function(e,r){return o(l3,{es:p(Wm,46,46,46),ev:jm({dj:{fU:0,fY:4,c6:8},aR:{fU:0,fY:0,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Si(135),fK:-Si(45)},o(L0,e,r))}),v3=p(ym,u3,Cm,Sm);const $3={Main:{init:v3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},f3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-F.clock;b<.009||(F.dt=b,F.clock=h,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},s3=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},d3=$3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});s3();f3(d3);
