const ju=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};ju();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Nu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Wu=[];function Yu(e){return e.length}var Gu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Hu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Iu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ju=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ou()),r});function Ou(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=ui(e),r=ui(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var qu=$(function(e,r){var n=J(e,r);return n<0?zc:n?Ff:Pc}),kn=0;function z(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var Zu=$(ar);function h(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Qu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(za(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(za(r).sort(function(n,a){var t=o(e,n,a);return t===Pc?0:t===zc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Xu=$(Math.pow);$(function(e,r){return r%e});var Ku=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),ev=Math.PI,rv=Math.cos,nv=Math.sin,av=Math.tan,tv=Math.atan;$(Math.atan2);function ov(e){return e}function iv(e){return e===1/0||e===-1/0}var cv=Math.ceil,lv=Math.floor,uv=Math.round,vv=Math.sqrt,qo=Math.log,$v=isNaN;function fv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var sv=$(function(e,r){return e+r});function dv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function mv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function pv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var bv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),gv=$(function(e,r){return r.split(e)}),hv=$(function(e,r){return r.join(e)}),_v=x(function(e,r,n){return n.slice(e,r)});function wv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var yv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),xv=$(function(e,r){return r.indexOf(e)>-1}),Sv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Cv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function rc(e){return e+""}function Lv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Pv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function zv(e){return za(e).join("")}function kv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Tv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Mv(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var Dv=Nt(function(e){return typeof e=="boolean"?ue(e):Xe("a BOOL",e)}),Av=Nt(function(e){return typeof e=="number"?ue(e):Xe("a FLOAT",e)}),Bv=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Xe("a STRING",e)});function Fv(e){return{$:3,b:e}}var Vv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Uv=$(function(e,r){return{$:10,b:r,h:e}}),Rv=$(function(e,r){return xr(e,[r])}),Ev=x(function(e,r,n){return xr(e,[r,n])});U(function(e,r,n,a){return xr(e,[r,n,a])});ge(function(e,r,n,a,t){return xr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return we(o(Kt,"This is not valid JSON! "+a.message,r))}});var nc=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Xe("null",r);case 3:return Nn(r)?Zo(e.b,r,h):Xe("a LIST",r);case 4:return Nn(r)?Zo(e.b,r,jv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Je(v)?v:we(o(vi,n,v.a));case 7:var a=e.e;if(!Nn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Je(v)?v:we(o(kc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Je(v))return we(o(vi,i,v.a));t=ar(z(i,v.a),t)}return ue(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Je(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ne(e.b,r);return Je(v)?Ne(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ne(d.a,r);if(Je(v))return v;s=ar(v.a,s)}return we(Vf(Fe(s)));case 1:return we(o(Kt,e.a,r));case 0:return ue(e.a)}}function Zo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Je(c))return we(o(kc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function jv(e){return o(Kf,e.length,function(r){return e[r]})}function Xe(e,r){return we(o(Kt,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&Qo(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return Qo(e.g,r.g)}}function Qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Nv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ac(e){return e}x(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Wv(e){return{$:1,a:e}}function mr(e){return{$:2,b:e,c:null}}var ft=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Yv(e){return{$:5,b:e}}var Gv=0;function Wt(e){var r={$:0,e:Gv++,f:e,g:null,h:[]};return Yt(r),r}function tc(e){return mr(function(r){r(Rr(Wt(e)))})}function oc(e,r){e.h.push(r),Yt(e)}var Hv=$(function(e,r){return mr(function(n){oc(e,r),n(Rr(kn))})}),Ya=!1,Xo=[];function Yt(e){if(Xo.push(e),!Ya){for(Ya=!0;e=Xo.shift();)Iv(e);Ya=!1}}function Iv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Gt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Gt(e,r,n,a,t,i){var c=o(nc,e,r?r.flags:void 0);Je(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Jv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ei(l,b.b,t(v))}return ei(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function Jv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=qv(t,r)}return n}function Ov(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,Yv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Wt(o(ft,l,e.b))}var Zv=$(function(e,r){return mr(function(n){e.g(r),n(Rr(kn))})});$(function(e,r){return o(Hv,e.h,{$:0,a:r})});function ic(e){return function(r){return{$:1,k:e,l:r}}}function Qv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ko=[],Ga=!1;function ei(e,r,n){if(Ko.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=Ko.shift();)Xv(a.p,a.q,a.r);Ga=!1}}function Xv(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)oc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Kv(e,t,a,r.l);n[t]=e$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function Kv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function e$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function r$(e){rr[e]&&nn(3)}$(function(e,r){return r});function n$(e,r){return r$(e),rr[e]={f:a$,u:r,a:t$},ic(e)}var a$=$(function(e,r){return function(n){return e(r(n))}});function t$(e,r){var n=P,a=rr[e].u,t=Rr(null);rr[e].b=t,rr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(nc,a,c);Je(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,vr=typeof document!="undefined"?document:{};function Ht(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var cc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:It(n),e:t,f:e,b:i}})}),Er=cc(void 0),o$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:It(n),e:t,f:e,b:i}})}),i$=o$(void 0);function c$(e,r,n,a){return{$:3,d:It(e),g:r,h:n,i:a}}var l$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});x(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var lc=$(function(e,r){return{$:"a0",n:e,o:r}}),u$=$(function(e,r){return{$:"a1",n:e,o:r}}),uc=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),v$=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function $$(e){return e=="script"?"p":e}function f$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(lc,r.n,s$(e,r.o)):r});function s$(e,r){var n=to(r);return{$:r.$,a:n?p(es,n<3?d$:m$,De(e),r.a):o($a,e,r.a)}}var d$=$(function(e,r){return z(e(r.a),r.b)}),m$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function It(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ri(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ri(c,t,i):c[t]=i}return r}function ri(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ht(c,_r(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?p$(e,t):a==="a0"?h$(e,r,t):a==="a3"?b$(e,t):a==="a4"?g$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function p$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function b$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function g$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function h$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=_$(r,i),e.addEventListener(t,c,Jt&&{passive:to(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function _$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Je(i)){for(var c=to(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function w$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function vc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=k$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!y$(d,m):d!==m)&&he(n,2,a,m),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ni(e,r,n,a,x$);return;case 2:ni(e,r,n,a,S$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Ot(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function y$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ni(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Ot(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Ot(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ot(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&w$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function x$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Oe(s,i[v],n,++a),a+=s.b||0}}function S$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,_=g.b,C=b.b,T=void 0,N=void 0;if(w===y){f++,Oe(_,C,t,f),f+=_.b||0,d++,m++;continue}var E=l[d+1],R=u[m+1];if(E){var j=E.a,W=E.b;N=y===j}if(R){var B=R.a,Z=R.b;T=w===B}if(T&&N){f++,Oe(_,Z,t,f),$n(i,t,w,C,m,c),f+=_.b||0,f++,fn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,$n(i,t,y,C,m,c),Oe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,fn(i,t,w,_,f),f+=_.b||0,f++,Oe(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(E&&j===B){f++,fn(i,t,w,_,f),$n(i,t,y,C,m,c),f+=_.b||0,f++,Oe(W,Z,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;fn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];$n(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&he(n,8,a,{w:t,x:c,y:X})}var $c="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+$c,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}fn(e,r,n+$c,a,t)}function fc(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)fc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=sn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function sc(e,r,n,a){return n.length===0?e:(fc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=C$(t,a);t===e&&(e=i)}return e}function C$(e,r){switch(r.$){case 0:return L$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return P$(e,r);case 5:return r.s(e);default:nn(10)}}function L$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function P$(e,r){var n=r.s,a=z$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ht(e,a),e}function z$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ht(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function qt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(qt(v[a]),u);return p(Er,l,r,u)}function k$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var T$=U(function(e,r,n,a){return Gt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=qt(l);return dc(i,function(v){var s=c(v),d=vc(u,s);l=sc(l,u,d,t),u=s})})});U(function(e,r,n,a){return Gt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=vr.title,v=vr.body,s=qt(v);return dc(i,function(d){ca=c;var m=l(d),f=Er("body")(P)(m.eu),g=vc(s,f);v=sc(v,s,g,t),s=f,ca=0,u!==m.fL&&(vr.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function dc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(co,oo,mr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(co,oo,mr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(co,oo,mr(function(){history.replaceState({},"",r),e()}))});var M$={addEventListener:function(){},removeEventListener:function(){}},D$=typeof window!="undefined"?window:M$;x(function(e,r,n){return tc(mr(function(a){function t(i){Wt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Je(n)?re(n.a):q});function mc(e,r){return mr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Wv(ns(e)))})})}function A$(e){return mr(function(r){ua(function(){r(Rr(e()))})})}$(function(e,r){return mc(r,function(n){return n[e](),kn})});$(function(e,r){return A$(function(){return D$.scroll(e,r),kn})});x(function(e,r,n){return mc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,kn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var B$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var F$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(ul,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(ul,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var V$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/U$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function U$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Zt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),R$=x(function(e,r,n){return new Float64Array([e,r,n])}),E$=function(e){return e[0]},j$=function(e){return e[1]},N$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var W$=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(pc);function bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(pc(e,r,n),n)}$(bc);function gc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/gc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Y$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),dn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(dn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(mt);$(function(e,r){var n,a=Zt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=dn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(dn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(dn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(dn(r,a)+e[14])/n,t});var G$=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var H$=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},I$=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/J$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function J$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var O$=new Float64Array(16),q$=new Float64Array(16),Z$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Q$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function hc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(hc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return hc(c,l,i,t,n,a)});function _c(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(_c);U(function(e,r,n,a){return _c(e,r,n,a,-1,1)});function wc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],_=e[15],C=r[0],T=r[1],N=r[2],E=r[3],R=r[4],j=r[5],W=r[6],B=r[7],Z=r[8],X=r[9],oe=r[10],ve=r[11],te=r[12],de=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+b*E,n[1]=t*C+u*T+m*N+w*E,n[2]=i*C+v*T+f*N+y*E,n[3]=c*C+s*T+g*N+_*E,n[4]=a*R+l*j+d*W+b*B,n[5]=t*R+u*j+m*W+w*B,n[6]=i*R+v*j+f*W+y*B,n[7]=c*R+s*j+g*W+_*B,n[8]=a*Z+l*X+d*oe+b*ve,n[9]=t*Z+u*X+m*oe+w*ve,n[10]=i*Z+v*X+f*oe+y*ve,n[11]=c*Z+s*X+g*oe+_*ve,n[12]=a*te+l*de+d*Me+b*Se,n[13]=t*te+u*de+m*Me+w*Se,n[14]=i*te+v*de+f*Me+y*Se,n[15]=c*te+s*de+g*Me+_*Se,n}$(wc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],_=r[4],C=r[5],T=r[6],N=r[8],E=r[9],R=r[10],j=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*E+v*R,n[9]=t*N+l*E+s*R,n[10]=i*N+u*E+d*R,n[11]=0,n[12]=a*j+c*W+v*B+m,n[13]=t*j+l*W+s*B+f,n[14]=i*j+u*W+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Zt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/gc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=g+f,C=b-m,T=g-f,N=c*c*v+u,E=w+d,R=b+m,j=w-d,W=l*l*v+u,B=n[0],Z=n[1],X=n[2],oe=n[3],ve=n[4],te=n[5],de=n[6],Me=n[7],Se=n[8],br=n[9],gr=n[10],Wa=n[11],Vu=n[12],Uu=n[13],Ru=n[14],Eu=n[15];return a[0]=B*y+ve*_+Se*C,a[1]=Z*y+te*_+br*C,a[2]=X*y+de*_+gr*C,a[3]=oe*y+Me*_+Wa*C,a[4]=B*T+ve*N+Se*E,a[5]=Z*T+te*N+br*E,a[6]=X*T+de*N+gr*E,a[7]=oe*T+Me*N+Wa*E,a[8]=B*R+ve*j+Se*W,a[9]=Z*R+te*j+br*W,a[10]=X*R+de*j+gr*W,a[11]=oe*R+Me*j+Wa*W,a[12]=Vu,a[13]=Uu,a[14]=Ru,a[15]=Eu,a});function X$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(X$);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function K$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(K$);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=bc(e,r,Zt),t=va(mt(n,a,ai),ai),i=va(mt(a,t,ti),ti),c=O$,l=q$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,wc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var oi=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Qt(e){for(var r=0;e.b;e=e.b)r++;return r}var ef=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},rf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),nf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),af=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),tf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),of=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),lf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),uf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),vf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),$f=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},ff=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},sf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},df=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},yc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},xc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},mf=function(e){e.gl.disable(e.gl.CULL_FACE)},pf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},bf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},gf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],hf=[ff,sf,df,yc,xc,mf,pf,bf,gf];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function _f(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Sc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function wf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[y]:w[y][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][y]:w[C][y][_]})}var u=Sc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Qt(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function yf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=xf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Qt(r.b),indexBuffer:null,buffers:{}}}function xf(e,r){var n=new Uint32Array(Qt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var Cc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),yc(n),xc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=oi++,v||(v=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=_f(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Sf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Cf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=yf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=wf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Sc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,y*C)}for(n.toggle=!n.toggle,yn(I0(n),i.a),u=0;u<ii.length;u++){var T=n[ii[u]];T.toggle!==n.toggle&&T.enabled&&(hf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function Sf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Cf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Lf=x(function(e,r,n){return c$(r,{g:n,f:{},h:e},Af,Bf)}),Pf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),zf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),kf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Tf=$(function(e,r){e.contextAttributes.antialias=!0}),Mf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Df=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Af(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(H0,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),ef(function(){return o(Cc,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Bf(e,r){return r.f=e.f,Cc(r)}var A=Zu,Wn=Ju,Lc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Xt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Xt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ui=function(e){return p(Xt,x(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Pc=1,Ff=2,zc=0,we=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),vi=$(function(e,r){return{$:0,a:e,b:r}}),kc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Vf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Uf=yv,Rf=Nv,Be=rc,Pr=$(function(e,r){return o(hv,e,za(r))}),eo=$(function(e,r){return h(o(gv,e,r))}),Tc=function(e){return o(Pr,`
    `,o(eo,`
`,e))},Tn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Br=function(e){return p(Tn,$(function(r,n){return n+1}),0,e)},Ef=Qu,jf=x(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Fr=$(function(e,r){return p(jf,e,r,P)}),Mc=$(function(e,r){return p(Ef,e,o(Fr,0,Br(r)-1),r)}),nr=kv,Dc=function(e){var r=nr(e);return 97<=r&&r<=122},Ac=function(e){var r=nr(e);return r<=90&&65<=r},Nf=function(e){return Dc(e)||Ac(e)},Wf=function(e){var r=nr(e);return r<=57&&48<=r},Yf=function(e){return Dc(e)||Ac(e)||Wf(e)},Fe=function(e){return p(Tn,A,P,e)},an=dv,Gf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Tc(Hf(r))))}),Hf=function(e){return o(If,e,P)},If=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Nf(y)&&o(Uf,Yf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Br(s))+" ways:"));return o(Pr,`

`,o(A,g,o(Mc,Gf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Tc(o(Rf,4,f))+(`

`+m))}}),Ve=32,pt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Wu,ro=cv,no=$(function(e,r){return qo(r)/qo(e)}),Jf=ov,xn=ro(o(no,2,Ve)),Bc=L(pt,0,xn,bt,bt),Fc=Gu,Vc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Uc=lv,gt=Yu,Te=$(function(e,r){return J(e,r)>0?e:r}),Of=function(e){return{$:0,a:e}},ao=Hu,qf=$(function(e,r){e:for(;;){var n=o(ao,Ve,e),a=n.a,t=n.b,i=o(A,Of(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),Zf=function(e){var r=e.a;return r},Qf=$(function(e,r){e:for(;;){var n=ro(r/Ve);if(n===1)return o(ao,Ve,e).a;var a=o(qf,e,P),t=n;e=a,r=t;continue e}}),Rc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Uc(o(no,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(Qf,t,r.l);return L(pt,gt(r.p)+n,o(Te,5,a*xn),i,r.p)}else return L(pt,gt(r.p),xn,bt,r.p)}),Xf=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Rc,!1,{z:a,l:n/Ve|0,p:t});var i=Vc(p(Fc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Kf=$(function(e,r){if(e<=0)return Bc;var n=e%Ve,a=p(Fc,n,e-n,r),t=e-n-Ve;return S(Xf,r,t,e,P,a)}),Je=function(e){return!e.$},D=Uv,Q=Dv,M=Vv,$e=Av,$a=Rv,es=Ev,De=Mv,to=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Er("div"),rs=function(e){return{$:2,a:e}},Ec=$(function(e,r){return e}),jc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),kr=function(e){return e},ns=kr,$i=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),as=xv,zr=mv,Jr=_v,Mn=$(function(e,r){return e<1?r:p(Jr,e,zr(r),r)}),ka=Cv,Ta=function(e){return e===""},Ma=$(function(e,r){return e<1?"":p(Jr,0,e,r)}),Nc=Lv,fi=ge(function(e,r,n,a,t){if(Ta(t)||o(as,"@",t))return q;var i=o(ka,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Nc(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return re(_e($i,e,o(Ma,c,t),u,r,n,a))}else return re(_e($i,e,t,q,r,n,a))}),si=U(function(e,r,n,a){if(Ta(a))return q;var t=o(ka,"/",a);if(t.b){var i=t.a;return S(fi,e,o(Mn,i,a),r,n,o(Ma,i,a))}else return S(fi,e,"/",r,n,a)}),di=x(function(e,r,n){if(Ta(n))return q;var a=o(ka,"?",n);if(a.b){var t=a.a;return L(si,e,re(o(Mn,t+1,n)),r,o(Ma,t,n))}else return L(si,e,q,r,n)});$(function(e,r){if(Ta(r))return q;var n=o(ka,"#",r);if(n.b){var a=n.a;return p(di,e,re(o(Mn,a+1,r)),o(Ma,a,r))}else return p(di,e,q,r)});var ts=Sv,oo=function(e){},Dn=Rr,os=Dn(0),Wc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Tn,e,r,Fe(d)):L(Wc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),pr=x(function(e,r,n){return L(Wc,e,r,0,n)}),ee=$(function(e,r){return p(pr,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=ft,io=$(function(e,r){return o(fa,function(n){return Dn(e(n))},r)}),is=x(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Dn(o(e,a,t))},n)},r)}),cs=function(e){return p(pr,is(A),Dn(P),e)},ls=Zv,us=$(function(e,r){var n=r;return tc(o(fa,ls(e),n))}),vs=x(function(e,r,n){return o(io,function(a){return 0},cs(o(ee,us(e),r)))}),$s=x(function(e,r,n){return Dn(0)}),fs=$(function(e,r){var n=r;return o(io,e,n)});rr.Task=Ov(os,vs,$s,fs);var ss=ic("Task"),co=$(function(e,r){return ss(o(io,e,r))}),ds=T$,ms=fv,sa={$:1},Yc=function(e){return{$:2,a:e}},Da={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},ps=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Gc=function(e){var r=e.b;return o(We,Da,r)},tr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),bs=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Gc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,tn(n).db)>0?o(ae,ps,tr(o(We,sa,t))):kr)(o(We,Yc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(jc,l.eA,Ke(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(We,Da,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Hc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),gs=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),hs=$(function(e,r){return Fe(p(gs,e,r,P))}),Ic=x(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(hs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Ic,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),_s=$(function(e,r){return p(Ic,0,e,r)}),ws=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Fe(n),le(h([a]),t)),c=o(_s,e,i),l=o(Hc,e,i);if(l.b){var u=l.a,v=l.b;return o(We,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(We,sa,{B:d,ab:P,T:m})}else return r}}),ys=function(e){var r=e.b;return o(We,sa,r)},xs=function(e){var r=e.b;return o(We,Yc({cX:tn(e).db}),r)},Ss=$(function(e,r){switch(e.$){case 1:return ys(r);case 2:return Gc(r);case 3:return xs(r);default:var n=e.a;return o(ws,n,r)}}),Jc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Cs=$(function(e,r){return Ke(r,{av:e(r.av)})}),Ls=function(e){return{$:3,a:e}},Ps=function(e){return{$:2,a:e}},Oc=$(function(e,r){return{$:0,a:e,b:r}}),qc=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},lo=Pv,zs=x(function(e,r,n){return o(tr,0/0,lo(o(e,r,n)))}),Zc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ks=bv,Qc=function(e){return p(ks,A,P,e)},Ts=$(function(e,r){var n=o(Zc,function(a){return a!=="0"&&a!=="."},Qc(r));return le(e&&n?"-":"",r)}),pe=rc,ht=sv,Xc=Tv,Kc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",Kc(t))}else{var i=nr(r);return i>=48&&i<57?o(ht,Xc(i+1),n):"0"}},_t=iv,Ms=$v,Aa=function(e){return o(ht,e,"")},el=x(function(e,r,n){return e<=0?n:p(el,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(el,e,r,"")}),wt=x(function(e,r,n){return le(n,o(Sn,e-zr(n),Aa(r)))}),yt=pv,rl=function(e){var r=o(eo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Ds=function(e){var r=o(eo,"e",pe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(tr,0,Nc(o(ts,"+",t)?o(Mn,1,t):t)),c=rl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(tr,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Jc(Aa),an(le(o(Sn,O(i),"0"),v))))):p(wt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},As=x(function(e,r,n){if(_t(n)||Ms(n))return pe(n);var a=n<0,t=rl(Ds(O(n))),i=t.a,c=t.b,l=zr(i)+r,u=le(o(Sn,-l+1,"0"),p(wt,l,"0",le(i,c))),v=zr(u),s=o(Te,1,l),d=o(e,a,p(Jr,s,v,u)),m=p(Jr,0,s,u),f=d?yt(o(tr,"1",o(ye,Kc,an(yt(m))))):m,g=zr(f),b=f==="0"?f:r<=0?le(f,o(Sn,O(r),"0")):J(r,zr(c))<0?p(Jr,0,g-r,f)+("."+p(Jr,g-r,g,f)):le(i+".",p(wt,r,"0",c));return o(Ts,a,b)}),nl=As($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Bs=zs(nl),Fs=x(function(e,r,n){var a=o(no,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Bs,t,n)}),al=qu,Ba=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(al,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Xr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(G,0,v,s,S(G,1,g,b,w,y),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),xt=x(function(e,r,n){if(n.$===-2)return S(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(al,e,t);switch(u){case 0:return S(Xr,a,t,i,p(xt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(Xr,a,t,i,c,p(xt,e,r,l))}}),bn=x(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),Vs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},tl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,y=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,y))}else return e},mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,y=T.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,y))}else return e},Us=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,mi(r)}else break e;else return c.a,c.d,mi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,Kn(t),l);var u=tl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,Kn(m),f)}else return or}else return S(G,r,n,a,Kn(t),l)}else return or},gn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(gn,e,i),c);var u=tl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,o(gn,e,m),f)}else return or}else return S(G,n,a,t,o(gn,e,i),c);else return o(Rs,e,jt(Us,e,r,n,a,t,i,c))}),Rs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=Vs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Xr,n,u,v,i,Kn(c))}else return or}else return S(Xr,n,a,t,i,o(gn,e,c))}else return or}),Es=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),Yn=x(function(e,r,n){var a=r(o(Ba,e,n));if(a.$)return o(Es,e,n);var t=a.a;return p(bn,e,t,n)}),js=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(qc,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Oc,z(i,c),p(Fs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){return a.$===3?Ls(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){return a.$===2?Ps(n):a}))}},Ns=function(e){return Cs(js(e))},Ws=$(function(e,r){return o(ee,Ns(e),r)}),Ys=$(function(e,r){return Ke(r,{eA:o(Ws,e,r.eA)})}),Gs=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Ke(a,{B:o(Jc,Ys(e),a.B)}))}),Hs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Is=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Ke(t,{B:o(Hs,o(e,i.a,r),i)}))}),Js=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(bs,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Gs,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(Is,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ss,l,a.G)})}}),Os=$(function(e,r){return o(We,Da,{B:z(e,r(e)),ab:P,T:P})}),qs=Qv,pi=qs(P),da=Fv,Cn=Bv,Zs=n$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Qs=function(e){return{$:4,a:e}},Xs={$:0},Ks=ac,Ie=$(function(e,r){return o(uc,e,Ks(r))}),H=Ie("className"),ed=function(e){var r=e.b.B;return r.b},ma=Ie("id"),rd=l$,pa=rd,nd=u$,se=nd,ad={$:1},td=function(e){return{$:3,a:e}},od=function(e){return{$:5,a:e}},bi=Er("a"),uo=Er("button"),gi=function(e){return o(Ie,"href",f$(e))},id=Cr("clip-rule"),Ce=Cr("d"),cd=Cr("fill"),ol=cc("http://www.w3.org/2000/svg"),ld=ol("svg"),ud=Cr("viewBox"),vd=o(v$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=ld(h([ud("0 0 24 24"),cd("currentColor"),o(se,"width","100%"),o(se,"height","100%"),vd("http://www.w3.org/2000/svg")])),$d=Cr("fill-rule"),Le=ol("path"),qr={eD:Re(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(h([o(Le,h([$d("evenodd"),id("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},fd=function(e){return{$:0,a:e}},il=lc,cl=$(function(e,r){return o(il,e,fd(r))}),vo=function(e){return o(cl,"click",De(e))},hi=Ie("target"),sd=Ie("title"),St=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),dd=st,sr=dd,md=function(e){return p(Xt,x(function(r,n,a){return o(A,n,a)}),P,e)},pd=$(function(e,r){return{$:3,a:e,b:r}}),bd=$(function(e,r){return{$:2,a:e,b:r}}),gd=$(function(e,r){return{$:0,a:e,b:r}}),hd=$(function(e,r){return{$:1,a:e,b:r}}),Fa=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_d=L(Fa,0/255,0/255,0/255,1),wd=ac,yd=$(function(e,r){return o(uc,e,wd(r))}),xd=yd("checked"),Ze=uv,Sd=x(function(e,r,n){return le(o(Sn,e-zr(n),Aa(r)),n)}),ba=Ku,ll=function(e){var r=function(n){return n<10?Be(n):Aa(Xc(87+n))};return e<16?r(e):le(ll(e/16|0),r(o(ba,16,e)))},Cd=o(ae,ll,o(Sd,2,"0")),$o=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Ld=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return o(Pr,"",o(A,"#",o(ee,o(ae,Ze,Cd),h([n*255,a*255,t*255]))))},Ct=Ie("htmlFor"),Lt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Pd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Va=$(function(e,r){return p(pr,Pd(e),P,r)}),ul=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),zd=F$,kd=zv,Td=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Md=B$,Dd=function(e){return o(Md,{ew:!1,fg:!1},e)},Ua=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Ad=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Bd=function(e){return{$:2,a:e}},Fd=function(e){return{$:0,a:e}},Vd=function(e){return{$:1,a:e}},Ha=$(function(e,r){return nr(r)-nr(e)}),Ia=x(function(e,r,n){var a=nr(n);return J(nr(e),a)<1&&J(a,nr(r))<1}),Ud=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):we(Vd(r))},a=p(Ia,"0","9",r)?ue(o(Ha,"0",r)):p(Ia,"a","z",r)?ue(10+o(Ha,"a",r)):p(Ia,"A","Z",r)?ue(10+o(Ha,"A",r)):we(Fd(r));return o(ga,n,a)}),vl=$(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return ue(c+l*e)},o(vl,e,i))},o(Ud,e,t))}),Rd=$(function(e,r){return 2<=e&&e<=36?o(vl,e,yt(r)):we(Bd(e))}),Ed=Rd(16),jd=x(function(e,r,n){return L(Fa,e,r,n,1)}),$l=U(function(e,r,n,a){return L(Fa,e,r,n,a)}),An=Xu,Nd=$(function(e,r){var n=o(An,10,e);return Ze(r*n)/n}),Wd=wv,Yd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Qc(n);if(a.b&&!a.b.b){var t=a.a;return kd(h([t,t]))}else return n};return o(ae,Wd,o(ae,function(n){return o(ye,function(a){return p(zd,1,a,n)},Dd(e))},o(ae,Lt(Ua),o(ae,ye(function(n){return n.fG}),o(ae,ye(Va(kr)),o(ae,Td("Parsing hex regex failed"),ga(function(n){var a=o(ee,o(ae,r,o(ae,Ed,Ad(Jf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L($l,t/255,c/255,u/255,o(Nd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(jd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ha=Er("input"),Pt=Er("label"),zt=Ie("name"),fl=$(function(e,r){return p(pr,M,r,e)}),Gd=o(fl,h(["target","checked"]),Q),Hd=function(e){return o(cl,"change",o($a,e,Gd))},Id=function(e){return z(e,!0)},Jd=function(e){return{$:1,a:e}},Od=$(function(e,r){return o(il,e,Jd(r))}),qd=o(fl,h(["target","value"]),Cn),fo=function(e){return o(Od,"input",o($a,Id,o($a,e,qd)))},sl=Ie("max"),dl=Ie("min"),ml=function(e){return o(Ie,"step",e)},_a=Ie("type"),so=Ie("value"),_i=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,P,h([o(Pt,h([Ct(r)]),h([o(I,h([H("relative w-full")]),h([o(I,h([H("inline-block")]),h([sr(r)])),o(I,h([H("inline-block float-right")]),h([sr(pe(n))]))]))])),o(ha,h([_a("range"),o(se,"width","100%"),ma(r),zt(r),dl(pe(a)),sl(pe(t)),so(pe(n)),ml(pe(i)),fo(o(ae,lo,o(ae,tr(42),c)))]),P)]))},Zd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Qd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([H("h-12 py-4")]),h([o(Pt,h([H("block"),Ct(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),zt(e),Hd(pd(e)),xd(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return _i({cf:e,cr:i,cv:t,cz:gd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return _i({cf:e,cr:i,cv:t,cz:o(ae,Ze,hd(e)),cV:1,c0:c});default:var c=r.a;return o(I,P,h([o(I,h([o(se,"margin-bottom","6px")]),h([o(Pt,h([Ct(e)]),h([sr(e)]))])),o(ha,h([_a("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ma(e),zt(e),fo(function(l){return o(bd,e,o(Zd,_d,Yd(l)))}),so(Ld(c))]),P)]))}}),Xd=function(e){return o(I,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([H("text-lg pb-2")]),h([sr(e.fh)])),o(I,h([H("pl-2 pr-2")]),md(o(St,Qd,e.av)))]))},Kd=function(e){return o(I,h([H("text-xs text-white60")]),o(ee,Xd,e))},em=function(e){return o(I,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(nl,3,tn(e).db))]))},rm=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Ze(60/(tn(e).db-n))},o(ye,o(ae,Zf,function(n){return n.db}),Ua(o(Hc,59,r))))},nm=function(e){return o(I,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rm(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Be(n)+" Fps")])}())},am=function(e){return{$:0,a:e}},tm=function(e){var r=e.b.T;return Br(r)},om=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Br(r)+1+Br(n)},im=function(e){return o(ha,h([H("absolute w-full"),_a("range"),dl(Be(0)),sl(Be(om(e)-1)),so(Be(tm(e))),ml(Be(1)),fo(o(ae,lo,o(ae,tr(42),o(ae,Ze,am))))]),P)},wi={$:1},cm={$:3},lm={$:2},pl=function(e){return!e.b},yi=$(function(e,r){return o(uo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),vo(e)]),h([sr("REC")]))}),xi=$(function(e,r){return o(uo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),vo(r)]),h([o(I,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),um=function(e){var r=e.a,n=e.b.ab;return o(I,h([H("py-1")]),h([function(){switch(r.$){case 0:return o(yi,wi,"text-red-500 font-bold");case 1:return o(yi,lm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return pl(n)?o(I,P,P):o(xi,qr.fq,cm);default:return o(xi,qr.fp,wi)}}()]))},vm=function(e){return o(I,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([im(e),um(e),nm(e),em(e)]))},$m=function(e){var r=e.a;return wr(r,Da)},fm=$(function(e,r){var n=$m(r.G)?o(I,P,P):o(I,h([H("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.fs.fU+.5*e.cS.fS)+"px"),o(se,"top",pe(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(I,h([H(e.fs.e4?"text-black80":"text-black40")]),h([qr.fs]))]));return o(I,P,h([n]))}),sm=$(function(e,r){var n=o(uo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),vo(ad),sd("Distraction Free Mode")]),h([qr.f0])),a=o(I,h([H("absolute w-8 bottom-12")]),h([o(bi,h([H("text-twitterBlue40 hover:text-twitterBlue"),gi("https://twitter.com/AzizErkalSelman"),hi("_blank")]),h([qr.fN]))])),t=o(I,h([H("absolute w-8 bottom-2")]),h([o(bi,h([H("text-githubCat40 hover:text-githubCat"),gi("https://github.com/erkal/elm-3d-playground-exploration"),hi("_blank")]),h([qr.eQ]))]));return r.aL?o(I,h([H("fixed w-10 h-10 p-1")]),h([n])):o(I,P,h([o(I,h([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.cS.eW-80)+"px")]),h([o(pa,td,Kd(tn(r.G).eA))])),o(I,h([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cS.fS>600?"600px":pe(e.cS.fS-40)+"px")]),h([o(pa,od,vm(r.G))])),o(fm,e,r)]))}),dm=x(function(e,r,n){var a=ed(n.G),t=tn(n.G);return o(I,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",pe(t.cS.fS)+"px"),o(se,"height",pe(t.cS.eW)+"px")]),h([o(I,h([H("fixed")]),h([o(pa,Ec(Xs),o(e,t,a))])),o(I,h([ma("gui")]),h([o(sm,t,n),o(pa,Qs,o(r,t,a))]))]))}),mm=He(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Js,r,i,u,v),pi)}),l=function(u){var v=o(jc,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(Os,v,a)},pi)};return ds({e0:l,fH:Ec(Zs(rs)),fO:c,fQ:o(dm,e,t)})}),pm=U(function(e,r,n,a){return _e(mm,e,r,n,a,$(function(t,i){return o(I,P,P)}),x(function(t,i,c){return c}))}),bm=function(e){return{}},gm=x(function(e,r,n){return{av:n,e5:r,fh:e}}),bl=or,hm=function(e){return p(Tn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),bl,e)},_m=x(function(e,r,n){return p(gm,e,r,hm(n))}),Ja=_m,ir=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Oc,z(a,t),n))}),Si=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(qc,z(a,t),n))}),wm=h([p(Ja,"Camera",!0,h([p(ir,"camera x",z(0,16),8),p(ir,"camera y",z(0,10),0),p(ir,"camera z",z(0,16),6)])),p(Ja,"Parameters",!0,h([p(ir,"radius",z(0,6),1),p(Si,"number of cubes",z(1,100),19),p(Si,"number of waves",z(1,20),2),p(ir,"cube size",z(.1,4),1),p(ir,"cycle duration",z(1,10),5),p(ir,"wave height",z(.5,6),1.5)])),p(Ja,"Colors and light",!0,h([p(ir,"saturation",z(0,1),.8),p(ir,"lightness",z(0,1),.7)]))]),ym=$(function(e,r){return r}),mo=$(function(e,r){return{$:0,a:e,b:r}}),Ue=function(e){var r=e;return O(r)},Oa=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),fr=function(e){return e},xm=fr({fU:-1,fY:0,c5:0}),Sm=fr({fU:0,fY:-1,c5:0}),gl=fr({fU:0,fY:0,c5:-1}),hl=fr({fU:1,fY:0,c5:0}),po=fr({fU:0,fY:1,c5:0}),bo=fr({fU:0,fY:0,c5:1}),dr=function(e){return e},me=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Cm=He(function(e,r,n,a,t,i){var c=o(Oa,n,i)?bo:gl,l=o(Oa,r,t)?po:Sm,u=o(Oa,e,a)?hl:xm,v=V(Ue(o($r,e,a)),Ue(o($r,r,t)),Ue(o($r,n,i))),s=p(me,o(qa,e,a),o(qa,r,t),o(qa,n,i)),d=dr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Tr=function(e){var r=e;return r.fU},Mr=function(e){var r=e;return r.fY},Dr=function(e){var r=e;return r.c5},Lm=$(function(e,r){return _e(Cm,Tr(e),Mr(e),Dr(e),Tr(r),Mr(r),Dr(r))}),kt=x(function(e,r,n){return{fU:e,fY:r,c5:n}}),Pm=$(function(e,r){var n=r/2;return o(mo,e,o(Lm,p(kt,-n,-n,-n),p(kt,n,n,n)))}),Vr=ev,Tt=function(e){return e*Vr/180},zm=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Ba,e,r.av))}),km=$(function(e,r){return o(tr,0,Ua(o(Va,zm(e),r)))}),Tm=$(function(e,r){return o(km,e,r.eA)}),ur=Tm,Mm=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ba,e,r.av))}),Dm=$(function(e,r){return o(tr,0,Ua(o(Va,Mm(e),r)))}),Am=$(function(e,r){return o(Dm,e,r.eA)}),Ci=Am,go=function(e){return{$:5,a:e}},Bm=function(e){return go(e)},Fm=U(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Fa,f,m,d,a)}),Vm=x(function(e,r,n){return L(Fm,e,r,n,1)}),Mt=function(e){return{$:0,a:e}},_l=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),wl=x(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Za=function(e){return p(wl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Bn=R$,Um=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return p(Bn,Za(n),Za(a),Za(t))},Rm=function(e){return p(_l,0,Mt(Um(e)),Mt(0))},yl=$(function(e,r){return{$:2,a:e,b:r}}),xl=$(function(e,r){return{$:4,a:e,b:r}}),Sl=$(function(e,r){return{$:3,a:e,b:r}}),Cl=$(function(e,r){return{$:1,a:e,b:r}}),Em=x(function(e,r,n){return{fU:e,fY:r,c5:n}}),jm=function(e){var r=e;return r},ho=function(e){var r=e;return jm(r.er)},_o=function(e){var r=e;return r.aK},on=function(e){var r=e;return r.cA},Fn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),jr=function(e){var r=e;return r.c3},Nr=function(e){var r=e;return r.c4},Wr=function(e){var r=e;return r.c6},Nm=$(function(e,r){return dr({cA:o(Fn,e,on(r)),c3:jr(r),c4:Nr(r),c6:Wr(r)})}),Wm=$(function(e,r){return{er:o(Nm,e,ho(r)),aK:_o(r)}}),wo=$(function(e,r){return{eH:r,cA:e}}),Ym=$(function(e,r){var n=r;return o(wo,o(Fn,e,n.cA),n.eH)}),Gm=$(function(e,r){var n=r;return{k:o(Ym,e,n.k),e9:n.e9,fu:n.fu}}),yo=function(e){var r=e;return r},Hm=function(e){return e},Ll=$(function(e,r){var n=yo(r),a=n.a,t=n.b;return Hm(z(e(a),e(t)))}),Im=$(function(e,r){return o(Ll,Fn(e),r)}),xo=function(e){var r=e;return r.ey},So=function(e){var r=e;return r.fu},Pl=$(function(e,r){return{ey:r,fu:Ue(e)}}),Jm=$(function(e,r){return o(Pl,So(r),o(Fn,e,xo(r)))}),zl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),Om=$(function(e,r){return o(zl,Fn(e),r)}),Co=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Em,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(mo,s,o(Wm,i,c));case 1:var s=r.a,l=r.b;return o(Cl,s,o(Om,i,l));case 3:var s=r.a,u=r.b;return o(Sl,s,o(Jm,i,u));case 2:var s=r.a,v=r.b;return o(yl,s,o(Gm,i,v));case 4:var s=r.a,d=r.b;return o(xl,s,o(Im,i,d));default:var m=r.a;return go(o(ee,Co(V(n,a,t)),m))}}),qm=function(e){return Co(V(0,e,0))},Zm=function(e){return Co(V(0,0,e))},Kr=function(e){return e},Ur=rv,en=nv,ea=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=en(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,y=g*g,_=1-2*(f+y),C=s.c5*u,T=l*C,N=2*(w-T),E=2*(w+T),R=d*C,j=2*(R+b),W=2*(R-b),B=g*C,Z=2*(B-m),X=2*(B+m),oe=C*C,ve=1-2*(y+oe),te=1-2*(f+oe);return{fU:ve*i.fU+N*i.fY+j*i.c5,fY:E*i.fU+te*i.fY+Z*i.c5,c5:W*i.fU+X*i.fY+_*i.c5}}),Vn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=en(c),v=a.cA,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,w=b.fU*u,y=l*w,_=w*w,C=b.fY*u,T=l*C,N=w*C,E=C*C,R=1-2*(_+E),j=b.c5*u,W=l*j,B=2*(N-W),Z=2*(N+W),X=w*j,oe=2*(X+T),ve=2*(X-T),te=C*j,de=2*(te-y),Me=2*(te+y),Se=j*j,br=1-2*(E+Se),gr=1-2*(_+Se);return{fU:s.fU+br*d+B*m+oe*f,fY:s.fY+Z*d+gr*m+de*f,c5:s.c5+ve*d+Me*m+R*f}}),Qm=x(function(e,r,n){return dr({cA:p(Vn,e,r,on(n)),c3:p(ea,e,r,jr(n)),c4:p(ea,e,r,Nr(n)),c6:p(ea,e,r,Wr(n))})}),Xm=x(function(e,r,n){return{er:p(Qm,e,r,ho(n)),aK:_o(n)}}),Km=$(function(e,r){var n=o(Vn,e,r),a=o(ea,e,r);return function(t){var i=t;return o(wo,n(i.cA),a(i.eH))}}),e0=x(function(e,r,n){var a=n;return{k:p(Km,e,r,a.k),e9:a.e9,fu:a.fu}}),r0=x(function(e,r,n){return o(Ll,o(Vn,e,r),n)}),n0=x(function(e,r,n){return o(Pl,So(n),p(Vn,e,r,xo(n)))}),a0=x(function(e,r,n){return o(zl,o(Vn,e,r),n)}),kl=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(mo,l,p(Xm,e,r,a));case 1:var l=n.a,t=n.b;return o(Cl,l,p(a0,e,r,t));case 3:var l=n.a,i=n.b;return o(Sl,l,p(n0,e,r,i));case 2:var l=n.a,c=n.b;return o(yl,l,p(e0,e,r,c));case 4:var l=n.a,u=n.b;return o(xl,l,p(r0,e,r,u));default:var v=n.a;return go(o(ee,o(kl,e,r),v))}}),Un={fU:0,fY:0,c5:0},Lo=po,t0=o(wo,Un,Lo),o0=$(function(e,r){return p(kl,t0,Kr(e),r)}),i0=$(function(e,r){return(r-Uc(r/e)*e)/e}),c0=function(e){return 2*Vr*e},l0=U(function(e,r,n,a){return e+(r-e)*(1+Ur(c0(o(i0,n,a))))/2}),u0=function(e){var r=o(ur,"wave height",e),n=o(Ci,"number of waves",e),a=o(Ci,"number of cubes",e),t=o(ur,"cycle duration",e),i=function(c){var l=c/a,u=n*t*l;return o(o0,Tt(360)*l,o(qm,L(l0,-r,r,t,e.db+u),o(Zm,o(ur,"radius",e),o(Pm,Rm(p(Vm,l,o(ur,"saturation",e),o(ur,"lightness",e))),o(ur,"cube size",e)))))};return Bm(o(ee,i,o(Fr,0,a-1)))},v0=tv,hr=vv,$0=$(function(e,r){var n=e,a=r,t=a.c5-n.c5,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Te,O(c),o(Te,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c5:u/d})}else return q}),Qa=function(e){return e},Po=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),ra=function(e){var r=e,n=o(Te,O(r.fU),o(Te,O(r.fY),O(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c5:a/c})}else return q},wa=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),f0=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c5*n.c5}),Tl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),s0=$(function(e,r){var n=e,a=r;return J(a,n)<0}),d0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),m0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c5*n.c5;return{fU:n.fU*t,fY:n.fY*t,c5:n.c5*t}}),p0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},qe=0,Ml={fU:0,fY:0,c5:0},b0=x(function(e,r,n){return o(Lt,function(a){var t=o(d0,o(m0,a,r),r);return o(Lt,function(i){var c=o(Po,r,e),l=o(f0,n,c),u=o(Tl,qe,l)?c:o(s0,qe,l)?p0(c):Ml;return o(ye,function(v){return V(a,i,v)},ra(u))},ra(t))},ra(e))}),g0=function(e){var r=e,n=O(r.c5),a=O(r.fY),t=O(r.fU);if(J(t,a)<1)if(J(t,n)<1){var i=hr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(J(a,n)<1){var i=hr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},zo=function(e){var r=g0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return z(r,c)},Or=function(e){var r=e;return r},h0=$(function(e,r){var n=zo(e),a=n.a,t=n.b;return dr({cA:r,c3:a,c4:t,c6:e})}),_0=function(e){var r=o(wa,e.aR,e.dj),n=Or(e.ei),a=o(Po,r,n),t=p(b0,r,n,a);if(t.$){var v=ra(r);if(v.$){var d=zo(e.ei),m=d.a,f=d.b;return dr({cA:e.dj,c3:f,c4:e.ei,c6:m})}else{var s=v.a;return o(h0,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return dr({cA:e.dj,c3:u,c4:l,c6:c})}},w0=function(e){return{$:0,a:e}},na=function(e){var r=e;return .5*r},y0=av,x0=function(e){var r=e;return y0(r)},S0=function(e){var r=na(Ue(e.ej)),n=x0(r);return{cL:w0(n),c1:e.c1}},C0=function(e){var r=e.aR,n=e.dj,a=e.ei;return S0({ej:Kr(2*v0(.5)),c1:_0({dj:Qa(n),aR:Qa(r),ei:o(tr,po,o($0,Un,Qa(a)))})})},L0=function(e){return e},Ar=function(e){return e},P0=function(e){return Ar(.01*e)},Li=function(e){return e},z0=function(e){return e},k0=function(e){return{$:0,a:e}},T0=k0,M0={$:3},D0=M0,A0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),B0=A0,F0=$(function(e,r){return r.b?p(pr,A,r,e):e}),Ye=function(e){return p(pr,F0,P,e)},ko=$(function(e,r){return Ye(o(ee,e,r))}),V0=function(e){return{$:1,a:e}},U0=V0,R0=function(e){return o(Cr,"height",Be(e))},E0=function(e){return i$($$(e))},j0=E0,N0=function(e){return{$:2,a:e}},W0=N0,Y0=function(e){return o(Pr,"",e)},G0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return Y0(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},H0=$(function(e,r){switch(r.$){case 0:return o(Pf,e,r);case 1:return o(zf,e,r);case 2:return o(kf,e,r);case 3:return o(Tf,e,r);case 4:return o(Mf,e,r);default:return o(Df,e,r)}}),I0=$(function(e,r){switch(r.$){case 0:return o(nf,e,r);case 1:return o(af,e,r);case 2:return o(tf,e,r);case 3:return o(of,e,r);case 4:return o(cf,e,r);case 5:return o(lf,e,r);case 6:return o(uf,e,r);case 7:return o(vf,e,r);default:return $f(e)}}),J0=x(function(e,r,n){return p(Lf,e,r,n)}),Pi=function(e){var r=e;return r},cn=G$,Xa=L(cn,1,1,1,1),Qe=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),O0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),q0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(O0,n*a/t,n,n*(1-a-t)/t)}),Z0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=$(function(e,r){return Z0(o(q0,e,r))}),Dl=$(function(e,r){return{dp:wr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=Z$,Q0=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ka=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(cn,a.bX,a.bX,a.bX,i);return _e(t,e,c,Q0(a),a.dp,r,n)}),Al=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Dl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Ka,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,y=o(A,S(Ka,e,r,n,a,w),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,C=o(A,S(Ka,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Tn,L(Al,e,r,n,a),i,T)}}),X0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bl=X0,Mo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),K0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,518,r,n,a)},ep=$(function(e,r){return{$:6,a:e,b:r}}),rp=ep,Fl=h([K0({V:1,W:0,Z:!1}),L(Bl,!1,!1,!1,!1),o(rp,0,1)]),rn=519,Do=8,Vl=15,Zr=7681,np={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=rf,ap=$(function(e,r){return{$:0,a:e,b:r}}),tp=ap({df:1,$7:0,dV:5}),Ae=V$,op=tp(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),ip={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},cp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ao=x(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(cp,a,t,i)))}),Bo=function(e){return p(Ao,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Fo=function(e){return S(ne,h([Bo(e),L(Bl,!1,!1,!1,!1)]),ip,np,op,{})},lp=Fo({a8:Zr,co:0,cN:Do,bl:rn,c2:Vl,bt:Zr,bu:Zr}),up=516,zi=5386,xe=7680,vp=function(e){return o(An,2,e+4)},Ul=function(e){return Fo({a8:xe,co:Vl,cN:Do,bl:up,c2:vp(e),bt:zi,bu:zi})},$p=x(function(e,r,n){return Ye(h([p(Qe,e,n,Fl),h([Ul(r),lp])]))}),fp=$(function(e,r){return Ye(o(Mc,$p(e),r))}),sp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,513,r,n,a)},dp=sp({V:1,W:0,Z:!0}),mp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},pp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return mp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},bp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ki=$(function(e,r){var n=e,a=r;return p(bp,32774,n,a)}),gp=1,Ti=771,hp=770,Vo=pp({bv:0,aH:o(ki,gp,Ti),by:0,bA:o(ki,hp,Ti),bF:0,bV:0}),Yr=h([dp,Vo]),_p=function(e){var r=e;return r.dO},wp=function(e){var r=e;return r.dP},Rl=function(e){var r=e;return r.dQ},yp=function(e){var r=e;return r.dR},xp=function(e){var r=e;return r.dS},El=function(e){var r=e;return r.dT},jl=function(e){return V(o($r,yp(e),_p(e)),o($r,xp(e),wp(e)),o($r,El(e),Rl(e)))},Mi=function(e){var r=e;return on(r)},Sp=function(e){return e},Cp=function(e){return dr({cA:Sp({fU:e.H,fY:e.I,c5:e.J}),c3:fr({fU:e.q,fY:e.r,c5:e.s}),c4:fr({fU:e.t,fY:e.u,c5:e.v}),c6:fr({fU:e.w,fY:e.x,c5:e.y})})},et=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Nl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Wl=$(function(e,r){return{cA:o(Nl,e,on(r)),c3:o(et,e,jr(r)),c4:o(et,e,Nr(r)),c6:o(et,e,Wr(r))}}),ya=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Te,n,a)}),aa=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),Lp=$(function(e,r){var n=ya(r),a=ya(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},Pp=function(e){var r=e;return V(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),zp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(Ue(a)),c=na(Ue(n)),l=na(Ue(t)),u=Pp(r),v=u.a,s=u.b,d=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Di=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,d=Ge(Wr(e)),m=O(l*d.fU)+O(c*d.fY)+O(i*d.c5),f=Ge(Nr(e)),g=O(l*f.fU)+O(c*f.fY)+O(i*f.c5),b=Ge(jr(e)),w=O(l*b.fU)+O(c*b.fY)+O(i*b.c5),y=o(zp,V(w,g,m),o(Nl,e,p(kt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(Lp,_,y))}),Dt=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Di,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Di,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Dt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Wl,Cp(v),e),m=r*v.bX,f=e,g=r,b=L(Dt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),ln=E$,un=j$,vn=N$,Yl=function(e){return{$:4,a:e}},kp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Rn=function(e){return Yl(o(kp,e,P))},Tp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Mp=function(e){var r=e;return r},Ai=Fo({a8:Zr,co:0,cN:Do,bl:rn,c2:255,bt:Zr,bu:Zr}),Dp=function(e){var r=e,n=o(Te,O(r.fU),o(Te,O(r.fY),O(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return qe},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),mn=z({bd:o(je,Pe,Pe),bK:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe)},L(cn,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Bi=function(e){var r=e;return-r},Gl=514,Hl=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,515,r,n,a)},Il=240,Ap=h([Hl({V:1,W:0,Z:!0}),Bo({a8:xe,co:Il,cN:0,bl:Gl,c2:0,bt:xe,bu:xe}),Vo]),Bp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Ue(a),l=c,u=Ue(t),v=u,s=n.cL;if(s.$){var m=s.a;return _t(v)?er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return _t(v)?er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),Fp=function(e){return h([Hl({V:1,W:0,Z:!0}),Bo({a8:xe,co:Il,cN:e,bl:Gl,c2:0,bt:xe,bu:xe}),Vo])},Vp=x(function(e,r,n){return Ye(o(ee,function(a){var t=a<<4,i=L(cn,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Qe,e,z(r,i),Fp(t))},o(Fr,1,o(An,2,n)-1)))}),Ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Qr=function(e){var r=e;return r},Up=Q$,Fi=function(e){var r=e;return Ln(Wr(r))},Jl=hl,Ol=bo,Rp={cA:Un,c3:Jl,c4:Lo,c6:Ol},Ra=function(e){var r=e;return r},Ep=function(e){var r=Ra(on(e)),n=Ge(Wr(e)),a=Ge(Nr(e)),t=Ge(jr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},jp=$(function(e,r){var n=r;return Ep(o(Wl,n,e))}),Np=function(e){return o(jp,Rp,e)},Wp=function(e){var r=e;return r.c1},Yp=function(e){var r=e;return jr(r)},Gp=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Hp=function(e){var r=e;return Nr(r)},Ip=function(e){var r=Wp(e.ev),n=dr({cA:Mi(r),c3:Yp(r),c4:Hp(r),c6:Ln(Fi(r))}),a=Rn(e.aP),t=a,i=L(Dt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Np(r),u=o(ie,.99,o(ce,Ue(e.aJ),Bi(Rl(c)))),v=jl(c),s=v.a,d=v.b,m=v.c,f=Dp(p(Gp,s,d,m)),g=o(ie,1.01,o(hn,f,Bi(El(c)))),b=o(Bp,e.ev,{eq:e.eq,eP:g,fi:u}),w=Up(b).dM,y=w?Ge(Ln(Fi(r))):Qr(Mi(r)),_=function(){var te=e.bZ;switch(te.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=te.a;return z(3,de);case 4:var de=te.a;return z(4,de);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,E=N,R=o(To,E,e.b$),j=R,W=er({dx:0,dy:y.fU,dz:ln(j),dA:e.ec,dB:0,dC:y.fY,dD:un(j),dE:Mp(f),dF:0,dG:y.c5,dH:vn(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),B=_e(Al,W,l,b,Tp,t,{M:P,U:P,fB:P}),Z=e.bJ;switch(Z.$){case 0:var X=Z.a;return Ye(h([p(Qe,B.M,z(X,Xa),Yr),p(Qe,B.U,mn,Yr)]));case 1:var X=Z.a;return Ye(h([p(Qe,B.M,mn,Yr),h([Ai]),p(Qe,B.fB,X.bd,Fl),h([Ul(0)]),p(Qe,B.M,z(X,Xa),Ap),p(Qe,B.U,mn,Yr)]));default:var oe=Z.a,ve=Z.b;return Ye(h([p(Qe,B.M,z(ve,Xa),Yr),h([Ai]),o(fp,B.fB,oe),p(Vp,B.M,ve,Br(oe)),p(Qe,B.U,mn,Yr)]))}},Jp=function(e){return o(Cr,"width",Be(e))},Op=$(function(e,r){var n=h([U0(1),W0(0),T0(!0),L(B0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return V(n,"0",1);case 1:return V(o(A,D0,n),"1",1);default:var T=C.a;return V(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Pi(v),d=o(se,"height",Be(s)+"px"),m=Pi(u),f=m/s,g=o(ko,function(C){return Ip({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(se,"width",Be(m)+"px"),w=e.aI,y=w,_=G0(y);return p(j0,"div",h([o(se,"padding","0px"),b,d]),h([z(i,p(J0,t,h([Jp(Ze(m*c)),R0(Ze(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),qp=function(e){return o(Op,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},ql=function(e){return e},Vi=ql({fU:.31271,fY:.32902}),Zp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(To,r.cd,r.b6),u=l;return{by:vn(u),ex:n,bF:un(u),cJ:0,bV:ln(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Qp=function(e){return e},Xp=function(e){return Qp(1.2*o(An,2,e))},rt=function(e){return e},Kp={$:0},e1=Kp,Zl=function(e){return e},Ui=function(e){var r=e;return r},r1=function(e){e:for(;;){if(wr(e.e2,qe)&&wr(e.e3,qe))return Pe;if(o(Tl,Ue(e.e2),Ue(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=O(Ui(e.e3)/Vr),a=O(Ui(e.e2)/Vr),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(To,Zl(1),e.b6),v=u;return{by:a*vn(v),ex:!1,bF:a*un(v),cJ:n/a,bV:a*ln(v),cZ:3,fU:i,fY:c,c5:l}}}},Ri=function(e){return r1({b6:e.b6,e2:e.cd,e3:qe,ei:e.ei})},n1=function(e){var r=e;return r},Ql=function(e){var r=p(wl,1667,25e3,n1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ql({fU:n,fY:a})},Xl=function(e){return e},a1=Ql(Xl(12e3)),t1=Ql(Xl(5600)),o1=function(e){return{$:2,a:e}},i1=function(e){return o1(e)},c1=$(function(e,r){return{$:2,a:e,b:r}}),Kl=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},l1=function(e){var r=e;return r.ex},u1=Kl(mn.a),v1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(pr,n,z(P,P),r)}),$1=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},f1=K(function(e,r,n,a,t,i,c,l){var u=o(v1,l1,h([Hn(e),Hn(r),Hn(n),Hn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(c1,o(ee,$1,v),{bd:o(je,m,g),bK:o(je,w,_),bL:o(je,t,i),bM:o(je,c,l)})}else return u1}else return Kl({bd:o(je,e,r),bK:o(je,n,a),bL:o(je,t,i),bM:o(je,c,l)})}),s1=x(function(e,r,n){return Pa(f1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),d1=function(e){var r=o(Zp,z0(e.fB),{b6:t1,eH:e.fJ,cd:rt(8e4)}),n=Ri({b6:a1,cd:rt(2e4),ei:e.ei}),a=Ri({b6:Vi,cd:rt(15e3),ei:Ln(e.ei)}),t=p(s1,r,n,a);return qp({b0:i1(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Xp(15),bJ:t,bZ:e1,b$:Vi})},eu=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),m1=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ru=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),nu=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),p1=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),b1=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),g1=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Uo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(g1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(eu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(m1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(ru,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(b1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(nu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(p1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ro={$:0},h1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ya(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),y=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),_1=x(function(e,r,n){var a=ya(e(r));return Pa(h1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),nt=$(function(e,r){var n=e,a=r;return J(a,n)<1}),au=function(e){return o(nt,e.dO,e.dR)&&o(nt,e.dP,e.dS)&&o(nt,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},tu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Tr(n),c=Mr(n),l=Dr(n),u=Tr(a),v=Mr(a),s=Dr(a),d=Tr(t),m=Mr(t),f=Dr(t);return au({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},ou=W$,ze=function(e){return ou(Ra(e))},iu=function(e){var r=e;return r},Ea=function(e){return ou(iu(e))},w1=$(function(e,r){var n=e,a=r,t=o(Te,O(a.fU),o(Te,O(a.fY),O(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return Ml}),y1=w1(Zl(1)),cu=x(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return y1(o(Po,a,t))}),x1=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Ea(p(cu,n,a,t));return V({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},S1=$(function(e,r){return{$:2,a:e,b:r}}),lu=S1({df:3,$7:0,dV:4}),C1=function(e){if(e.b){var r=e.a,n=e.b,a=lu(o(ee,x1,e)),t=p(_1,tu,r,n);return L(eu,t,e,a,0)}else return Ro},Ee=x(function(e,r,n){return V(e,r,n)}),uu=function(){var e=Ar(1),r=Ar(1),n=Ar(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ie,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Uo(C1(h([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),In={$:0},L1=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),P1=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ea(p(cu,u,l,c)),s={o:v,bT:ze(u)},d={o:v,bT:ze(l)},m={o:v,bT:ze(c)};return o(A,s,o(A,d,o(A,m,n)))}),Eo=function(e){var r=e;return r.D},z1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),At=4294967295>>>32-xn,Bt=Iu,k1=x(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var v=t.a;return o(Bt,At&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),T1=function(e){return e>>>5<<5},M1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,T1(n))>-1?re(o(Bt,At&e,i)):re(p(k1,a,e,t))}),jo=function(e){var r=e;return r.ah},at=$(function(e,r){return o(M1,e,jo(r))}),D1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(z1,x(function(c,l,u){return V(c,l,u)}),o(at,a,e),o(at,t,e),o(at,i,e))};return o(Va,r,Eo(e))},A1=x(function(e,r,n){e:for(;;){var a=o(ao,Ve,e),t=a.a,i=a.b;if(J(gt(t),Ve)<0)return o(Rc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Vc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(A1,e,P,0):Bc},B1=x(function(e,r,n){return e(r(n))}),F1=$(function(e,r){return!o(Zc,o(B1,ms,e),r)}),V1=$(function(e,r){return p(pr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),U1=function(e){var r=e.a;return r},vu=$(function(e,r){var n=U1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(F1,a,r)?{D:r,ah:e}:{D:o(V1,a,r),ah:e}}),R1=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=R1({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Qr(r),a=Qr(e);return z(V(a.fU,a.fY,a.c5),V(n.fU,n.fY,n.c5))}),Ei=p(Bn,0,0,0),tt=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ba,o(ta,e,r),t);if(v.$){var d={o:Ei,bT:ze(r)},m={o:Ei,bT:ze(e)},f=u+1,g=u;return V(o(A,V(n,g,f),o(A,V(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),E1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,_=v,C=a+3,T=_e(tt,s,m,f,b,r,_e(tt,d,s,g,f,r,_e(tt,m,d,b,g,r,t)));e=w,r=y,n=_,a=C,t=T;continue e}else{var N=t,E=N.a,R=N.b;return z(E,Fe(R))}}),j1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(bn,o(ta,m,s),f,p(bn,o(ta,s,d),g,p(bn,o(ta,d,m),b,t))),y=o(A,V(b,g,f),a),_=e,C=v,T=n+3,N=y,E=w;e=_,r=C,n=T,a=N,t=E;continue e}else return V(a,t,n)}),Lr=x(function(e,r,n){var a=D1(n),t=p(pr,P1(r),P,a),i=S(j1,r,a,0,P,bl),c=i.a,l=i.b,u=i.c,v=S(E1,r,l,a,0,V(c,P,u)),s=v.a,d=v.b,m=pl(d)?t:le(t,d);return p(L1,e,o(vu,No(m),s),o(En,m,s))}),Ft=function(e){return{D:o(ee,function(r){return V(3*r,3*r+1,3*r+2)},o(Fr,0,Br(e)-1)),ah:No(Ye(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},$u=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,kr,Ft(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,kr,Ft(n));case 3:var a=e.a,t=e.b;return p(Lr,a,kr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return In;case 9:return In;default:return In}},ji=$u(uu),fu={$:0},k=fu,be=$(function(e,r){return{$:1,a:e,b:r}}),N1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},W1=1029,Y1=function(e){return{$:5,a:e}},su=function(e){var r=e;return Y1(r)},G1=su(W1),H1=1028,I1=su(H1),ke=x(function(e,r,n){return r===1?e?o(A,G1,n):o(A,I1,n):n}),du={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ot=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(ke,l,a,d),du,N1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(ke,l,a,d),mu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),pu=$(function(e,r){return{$:3,a:e,b:r}}),J1={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},O1=U(function(e,r,n,a){return o(pu,n,K(function(t,i,c,l,u,v,s,d){return S(ne,d,bu,J1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Yo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},jn=function(e){var r=e;return r},ja=Y$,lr=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(ke,u,t,m),mu,Yo,a,{aN:o(ja,jn(r),e),b:l,c,d:s,e:i,f:v})}))}),q1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Z1=ge(function(e,r,n,a,t){return o(pu,a,K(function(i,c,l,u,v,s,d,m){return S(ne,m,bu,q1,t,{aN:o(ja,jn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),gu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ke,l,a,d),hu,gu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),_u={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Q1=He(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ke,v,i,f),wu,_u,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),yu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},X1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(d,m,f,g,b,w,y,_){var C=y.a,T=y.b;return S(ne,p(ke,g,s,_),wu,yu,v,{b4:e,b7:r,b8:i,b9:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},xu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},On=He(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ke,v,i,f),hu,xu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),K1=function(e){return{$:0,a:e}},Ni=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),eb=function(e){return L(cn,ln(e),un(e),vn(e),1)},Go=L(cn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Go)}else{var n=r.a;return z(e,eb(n))}}),Su=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ni,z(t,Go),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ni,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,K1(a)}}),rb=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),nb=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ab=function(e){return o(Ae,e,1)},Vt=o(Ae,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Vt)}else{var n=r.a;return z(e,ab(n))}}),Cu=U(function(e,r,n,a){var t=L(nb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(qn,z(u,Go),o(Gr,u,r),o(Gr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(qn,o(oa,u,e),z(u,Vt),o(Gr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(qn,o(oa,u,e),o(Gr,u,r),z(u,Vt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(qn,o(oa,u,e),o(Gr,u,r),o(Gr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(rb,i,c,l)}}),tb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},it=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(ke,u,t,m),du,tb,a,{b1:jn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Lu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ob=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(ke,l,a,d),Lu,_u,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),ib=Et(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,d,m,f,g,b,w){var y=b.a,_=b.b;return S(ne,p(ke,m,u,w),Lu,yu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),zn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),cb=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},lb=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},ub=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},vb=function(e){return p(me,cb(e),lb(e),ub(e))},Y=function(e){var r=jl(e),n=r.a,a=r.b,t=r.c;return{ey:Ra(vb(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(ot,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ot,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ot,l,Y(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(O1,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(it,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(it,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(it,l,v,Y(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Z1,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(Su,s,E);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(ob,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Q1,b,y,_,Y(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,E=e.e,R=L(Cu,C,T,N,E);if(R.$){var Z=R.a,X=Z.a,oe=Z.b,ve=R.b,te=ve.a,de=ve.b,Me=R.c,Se=Me.a,br=Me.b,gr=R.d,y=gr.a,_=gr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Nu(ib,X,oe,te,de,Se,br,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return X1(X)(oe)(te)(de)(Se)(br)(y)(_)(Y(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=R.a,W=R.b,B=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,B,Y(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,B,Y(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,B,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,B,Y(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),ct=function(e){var r=e;return r.fU},lt=function(e){var r=e;return r.fY},ut=function(e){var r=e;return r.c5},$b=function(e){var r=e,n=ut(r.c6),a=lt(r.c6),t=ct(r.c6),i=ut(r.c4),c=lt(r.c4),l=ct(r.c4),u=ut(r.c3),v=lt(r.c3),s=ct(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},fb=function(e){var r=Ra(on(e)),n=Ge(Wr(e)),a=Ge(Nr(e)),t=Ge(jr(e));return{dp:$b(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Hr=$(function(e,r){return{$:5,a:e,b:r}}),Pu=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Dl,a,e);return o(Hr,i,t);case 1:return o(Hr,e,n);case 3:return o(Hr,e,n);case 2:return o(Hr,e,n);default:return o(Hr,e,n)}}),zu=$(function(e,r){return o(Pu,fb(e),r)}),Na=function(e){return{$:2,a:e}},sb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),db=I$,mb=H$,Wi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=mb(a),g=f.fU,b=f.fY,w=f.c5,y=f.em,_=db({em:y,fU:g*s,fY:b*d,c5:w*m});return Pa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return fu;case 5:var n=r.a,a=r.b;return o(Hr,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(be,o(sb,e,t),o(Wi,e,i));case 3:return r;case 2:var i=r.a;return Na(o(Wi,e,i));default:var c=r.a;return Yl(o(ee,Ut(e),c))}}),Io=$(function(e,r){var n=r;return o(Ut,e,n)}),Jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ku=7683,Tu=7682,pb=p(Ao,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:ku},{a8:xe,bl:rn,bt:xe,bu:Tu}),bb=p(Ao,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:Tu},{a8:xe,bl:rn,bt:xe,bu:ku}),Oo=$(function(e,r){return e?o(A,bb,r):o(A,pb,r)}),gb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},hb=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ne,o(Oo,i,v),gb,Jo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},xa=function(e){var r=hb(e);if(r.$)return k;var n=r.a;return Na(n)},_b=U(function(e,r,n,a){var t=o(Ho,n,uu),i=function(){var s=z(e,r);return s.a?s.b?Rn(h([t,xa(ji)])):t:s.b?xa(ji):k}(),c=_o(a),l=c.a,u=c.b,v=c.c;return o(zu,ho(a),o(Io,V(l,u,v),i))}),wb=$(function(e,r){return L(_b,!0,!0,e,r)}),Mu=$(function(e,r){return{$:0,a:e,b:r}}),yb=function(e){var r=$o(e),n=r.cM,a=r.cc,t=r.b5;return p(Bn,n,a,t)},xb=function(e){return o(Mu,0,Mt(yb(e)))},Sb=function(e){var r=e;return r.k},wn=function(e){var r=e;return Ur(r)},Cb=$(function(e,r){var n=r;return n/e}),Yi=function(e){var r=e;return{fU:Ur(r),fY:en(r)}},Lb=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ea(a),bT:ze(n)},r)}),Pb=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=vn(l.bT),s=un(l.bT),d=ln(l.bT),m=o(aa,e,d),f=o(Te,r,d),g=o(aa,n,s),b=o(Te,a,s),w=o(aa,t,v),y=o(Te,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=y,c=_;continue e}else return au({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Du=$(function(e,r){var n=vn(e.bT),a=un(e.bT),t=ln(e.bT);return jt(Pb,t,t,a,a,n,n,r)}),zb=function(e){var r=p(Lc,Lb,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Eo(e)),i=o(Du,n,a);return L(ru,i,e,t,0)}else return Ro},Gi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),Sa=function(e){var r=e;return en(r)},Rt=function(e){return Kr(2*Vr*e)},kb=kr,Hi=kb({cA:Un,c3:Jl,c4:Lo}),Au=function(){var e=72,r=o(Cb,e,Rt(1)),n=Ar(1),a=Or(bo),t=Or(gl),i=Ar(1),c=o(ie,.5,i),l=p(me,qe,qe,c),u=o(ie,-.5,i),v=p(me,qe,qe,u),s=function(f){var g=o(ie,f,r),b=Or(o(Gi,Hi,Yi(g))),w=o(ie,wn(g),n),y=o(ie,Sa(g),n),_=p(me,w,y,c),C=p(me,w,y,u),T=o(ba,e,f+1),N=o(ie,T,r),E=Or(o(Gi,Hi,Yi(N))),R=o(ie,wn(N),n),j=o(ie,Sa(N),n),W=p(me,R,j,u),B=p(me,R,j,c);return h([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),V({o:b,bT:C},{o:E,bT:W},{o:E,bT:B}),V({o:b,bT:C},{o:E,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(ee,s,o(Fr,0,e-1)),m=Ft(Ye(d));return Uo(zb(m))}(),Ii=$u(Au),Tb=function(e){var r=e;return r.eH},Mb=function(e){var r=e;return r.cA},Db=function(e){var r=Tb(e),n=zo(r),a=n.a,t=n.b;return dr({cA:Mb(e),c3:a,c4:t,c6:r})},Ab=function(e){var r=e;return r.e9},Bb=function(e){var r=e;return r.fu},Fb=U(function(e,r,n,a){var t=Db(Sb(a)),i=o(Ho,n,Au),c=function(){var d=z(e,r);return d.a?d.b?Rn(h([i,xa(Ii)])):i:d.b?xa(Ii):k}(),l=Bb(a),u=l,v=Ab(a),s=v;return o(zu,t,o(Io,V(u,u,s),c))}),Vb=$(function(e,r){return L(Fb,!0,!0,e,r)}),Ji={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return er({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Zn=lu(h([V({cY:0},{cY:1},{cY:2})])),Ub=$(function(e,r){var n=tu(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(be,a,K(function(_,C,T,N,E,R,j,W){return S(ne,p(ke,N,0,W),Ji,Wo,Zn,{aw:t,b:T,c:C,d:R,e:_,bq:pn(r),f:E})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,K(function(_,C,T,N,E,R,j,W){return S(ne,p(ke,N,0,W),Ji,Yo,Zn,{aN:o(ja,jn(c),i),b:T,c:C,d:R,e:_,bq:pn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(Su,l,f);if(u.$)return k;var v=u.a;return o(be,a,K(function(_,C,T,N,E,R,j,W){var B=j.a,Z=j.b;return S(ne,p(ke,N,0,W),Oi,gu,Zn,{P:Z,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:T,c:C,d:R,e:_,bq:pn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Cu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,y=g.c;return o(be,a,K(function(_,C,T,N,E,R,j,W){var B=j.a,Z=j.b;return S(ne,p(ke,N,0,W),Oi,xu,Zn,{b3:b,P:Z,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:y,b:T,c:C,d:R,cQ:w,e:_,bq:pn(r),f:E})}))}}),Rb=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(En,e,r)}(),Eb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},qi=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Oo,t,u),Eb,Jo,Rb,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},jb=U(function(e,r,n,a){var t=o(Ub,n,a),i=z(e,r);return i.a?i.b?Rn(h([t,qi(a)])):t:i.b?qi(a):k}),Nb=$(function(e,r){return L(jb,!0,!0,e,r)}),Wb=$(function(e,r){var n=Dr(r),a=Dr(e),t=Mr(r),i=Mr(e),c=Tr(r),l=Tr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Yb=function(e){var r=yo(e),n=r.a,a=r.b;return o(Wb,n,a)},Zi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Gb=$(function(e,r){return{$:1,a:e,b:r}}),Hb=Gb({df:2,$7:0,dV:1}),Qi=Hb(h([z({dw:0},{dw:1})])),Ib=$(function(e,r){var n=Yb(r),a=Y(n),t=yo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(be,a,K(function(v,s,d,m,f,g,b,w){return S(ne,w,Zi,Wo,Qi,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,K(function(s,d,m,f,g,b,w,y){return S(ne,y,Zi,Yo,Qi,{aN:o(ja,jn(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),Jb=$(function(e,r){return o(Ib,e,r)}),Qn=function(e){return Kr(Vr*(e/180))},Xi=$(function(e,r){var n=e,a=r;return n/a}),Ob=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(wr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Ki=$(function(e,r){return e<1?P:S(Ob,0,e,e,r,P)}),qb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ea(a),bT:ze(n),L:o(Ae,c,l)},r)}),Zb=function(e){var r=p(Lc,qb,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Eo(e)),i=o(Du,n,a);return L(nu,i,e,t,0)}else return Ro},Bu=$(function(e,r){var n=e,a=r,t=Ur(a);return{fU:t*Ur(n),fY:t*en(n),c5:en(a)}}),Qb=function(){var e=Ar(1),r=72,n=o(Fr,0,r-1),a=o(Ki,r,o(zn,qe,Rt(1))),t=ro(r/2),i=o(Fr,0,t-1),c=o(Ki,t,o(zn,Qn(90),Qn(-90))),l=No(Ye(o(ee,function(s){return o(ee,function(d){return{o:Or(o(Bu,s,d)),bT:p(me,o(ie,wn(d)*wn(s),e),o(ie,wn(d)*Sa(s),e),o(ie,Sa(d),e)),L:z(o(Xi,s,Rt(1)),o(Xi,o(hn,Qn(90),d),Qn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ye(o(ee,function(s){return Ye(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([V(b,g,m),V(b,m,f)])},i))},n));return Uo(Zb(o(vu,l,v)))}(),Ca=72,Xn=2*Ca,Xb=$(function(e,r){e:for(;;){var n=Xn+1,a=o(ba,Xn,2*e+3),t=o(ba,Xn,2*e+2),i=2*e+1,c=2*e,l=Xn,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Kb=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),e3=$(function(e,r){e:for(;;){var n=p(Kb,0,2*Vr,e/Ca),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),r3=function(){var e=o(e3,Ca-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Xb,Ca-1,P);return o(En,e,r)}(),n3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ec=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Oo,!0,u),n3,Jo,r3,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},a3=function(e){var r=iu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},t3=$(function(e,r){return o(Pu,a3(e),r)}),o3=U(function(e,r,n,a){var t=o(Ho,n,Qb),i=function(){var u=z(e,r);return u.a?u.b?Rn(h([t,ec()])):t:u.b?ec():k}(),c=So(a),l=c;return o(t3,o(wa,Un,xo(a)),o(Io,V(l,l,l),i))}),i3=$(function(e,r){return L(o3,!0,!0,e,r)}),c3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),l3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),u3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Mu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(c3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(_l,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(l3,n,a,t,i,c)}},v3=u3,Fu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(wb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Nb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(i3,v3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Vb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Jb,xb(c),l)]);default:var u=e.a;return o(ko,Fu,u)}},$3=function(e){return o(ko,Fu,e)},f3=$(function(e,r){return d1({aI:L0(e.es),ev:e.ev,aJ:P0(.5),ca:e.ca,aK:z(Li(Ze(e.cS.fS)),Li(Ze(e.cS.eW))),aP:$3(r),fB:!0,fJ:o(Bu,Kr(e.fI),Kr(e.fK)),ei:Ol})}),s3=$(function(e,r){return o(f3,{es:L($l,0,0,0,0),ev:C0({dj:{fU:o(ur,"camera x",e),fY:o(ur,"camera y",e),c5:o(ur,"camera z",e)},aR:{fU:0,fY:0,c5:0},ei:{fU:0,fY:1,c5:0}}),ca:e.ca,cS:e.cS,fI:-Tt(135),fK:-Tt(45)},h([u0(e)]))}),d3=L(pm,s3,ym,wm,bm);const m3={Main:{init:d3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},p3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},b3=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},g3=m3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});b3();p3(g3);
