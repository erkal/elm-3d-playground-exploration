const Eu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Eu();function wr(e,r,n){return n.a=e,n.f=r,n}function $(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ft(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Vt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ca(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function ju(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Nu=[];function Wu(e){return e.length}var Yu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Gu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),Hu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Iu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ou()),r});function Ou(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=lt(e,r,0,a);t&&(n=a.pop());t=lt(n.a,n.b,0,a));return t}function lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=ti(e),r=ti(r));for(var t in e)if(!lt(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var Ju=$(function(e,r){var n=O(e,r);return n<0?yc:n?Af:wc}),Tn=0;function T(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var qu=$(tr);function g(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function La(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Zu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return g(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(La(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return g(La(r).sort(function(n,a){var t=o(e,n,a);return t===wc?0:t===yc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Xu=$(Math.pow);$(function(e,r){return r%e});var Ku=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Qu=Math.PI,ev=Math.cos,rv=Math.sin,nv=Math.tan,av=Math.atan;$(Math.atan2);function tv(e){return e}function ov(e){return e===1/0||e===-1/0}var iv=Math.ceil,cv=Math.floor,lv=Math.round,uv=Math.sqrt,Go=Math.log,vv=isNaN;function $v(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var fv=$(function(e,r){return e+r});function sv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function dv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function mv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var pv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),bv=$(function(e,r){return r.split(e)}),hv=$(function(e,r){return r.join(e)}),gv=x(function(e,r,n){return n.slice(e,r)});function _v(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var wv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),yv=$(function(e,r){return r.indexOf(e)>-1}),xv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Sv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function qi(e){return e+""}function Cv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Lv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Pv(e){return La(e).join("")}function zv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Tv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function kv(e){return{$:0,a:e}}function Ut(e){return{$:2,b:e}}var Mv=Ut(function(e){return typeof e=="boolean"?ue(e):Ke("a BOOL",e)}),Dv=Ut(function(e){return typeof e=="number"?ue(e):Ke("a FLOAT",e)}),Bv=Ut(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ke("a STRING",e)});function Av(e){return{$:3,b:e}}var Fv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var Vv=$(function(e,r){return{$:10,b:r,h:e}}),Uv=$(function(e,r){return yr(e,[r])}),Rv=x(function(e,r,n){return yr(e,[r,n])});U(function(e,r,n,a){return yr(e,[r,n,a])});he(function(e,r,n,a,t){return yr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});Ft(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return we(o(qt,"This is not valid JSON! "+a.message,r))}});var Zi=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ke("null",r);case 3:return Rn(r)?Ho(e.b,r,g):Ke("a LIST",r);case 4:return Rn(r)?Ho(e.b,r,Ev):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Oe(v)?v:we(o(oi,n,v.a));case 7:var a=e.e;if(!Rn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Oe(v)?v:we(o(xc,a,v.a));case 8:if(typeof r!="object"||r===null||Rn(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Oe(v))return we(o(oi,i,v.a));t=tr(T(i,v.a),t)}return ue(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Oe(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ne(e.b,r);return Oe(v)?Ne(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ne(d.a,r);if(Oe(v))return v;s=tr(v.a,s)}return we(Ff(Ve(s)));case 1:return we(o(qt,e.a,r));case 0:return ue(e.a)}}function Ho(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Oe(c))return we(o(xc,i,c.a));t[i]=c.a}return ue(n(t))}function Rn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ev(e){return o(Kf,e.length,function(r){return e[r]})}function Ke(e,r){return we(o(qt,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&Io(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return Io(e.g,r.g)}}function Io(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function Xi(e){return e}x(function(e,r,n){return n[e]=r,n});function Vr(e){return{$:0,a:e}}function Nv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var ut=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Wv(e){return{$:5,b:e}}var Yv=0;function Rt(e){var r={$:0,e:Yv++,f:e,g:null,h:[]};return Et(r),r}function Ki(e){return sr(function(r){r(Vr(Rt(e)))})}function Qi(e,r){e.h.push(r),Et(e)}var Gv=$(function(e,r){return sr(function(n){Qi(e,r),n(Vr(Tn))})}),ja=!1,Oo=[];function Et(e){if(Oo.push(e),!ja){for(ja=!0;e=Oo.shift();)Hv(e);ja=!1}}function Hv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Et(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return jt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function jt(e,r,n,a,t,i){var c=o(Zi,e,r?r.flags:void 0);Oe(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Iv(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),qo(l,b.b,t(v))}return qo(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function Iv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Jv(t,r)}return n}function Ov(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Jv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ut,l,Wv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Rt(o(ut,l,e.b))}var qv=$(function(e,r){return sr(function(n){e.g(r),n(Vr(Tn))})});$(function(e,r){return o(Gv,e.h,{$:0,a:r})});function ec(e){return function(r){return{$:1,k:e,l:r}}}function Zv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Jo=[],Na=!1;function qo(e,r,n){if(Jo.push({p:e,q:r,r:n}),!Na){Na=!0;for(var a;a=Jo.shift();)Xv(a.p,a.q,a.r);Na=!1}}function Xv(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)Qi(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Kv(e,t,a,r.l);n[t]=Qv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function Kv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function Qv(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function e$(e){rr[e]&&nn(3)}$(function(e,r){return r});function r$(e,r){return e$(e),rr[e]={f:n$,u:r,a:a$},ec(e)}var n$=$(function(e,r){return function(n){return e(r(n))}});function a$(e,r){var n=P,a=rr[e].u,t=Vr(null);rr[e].b=t,rr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(Zi,a,c);Oe(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,lr=typeof document!="undefined"?document:{};function Nt(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function vt(e){return{$:0,a:e}}var rc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Wt(n),e:t,f:e,b:i}})}),Ur=rc(void 0),t$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Wt(n),e:t,f:e,b:i}})}),o$=t$(void 0);function i$(e,r,n,a){return{$:3,d:Wt(e),g:r,h:n,i:a}}var c$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});x(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Vt(e,r,n,a,t,i,c,l)})});Ft(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return Ca(e,r,n,a,t,i,c,l,u)})});var nc=$(function(e,r){return{$:"a0",n:e,o:r}}),l$=$(function(e,r){return{$:"a1",n:e,o:r}}),ac=$(function(e,r){return{$:"a2",n:e,o:r}}),Sr=$(function(e,r){return{$:"a3",n:e,o:r}}),u$=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function v$(e){return e=="script"?"p":e}function $$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(nc,r.n,f$(e,r.o)):r});function f$(e,r){var n=eo(r);return{$:r.$,a:n?p(Qf,n<3?s$:d$,De(e),r.a):o(ua,e,r.a)}}var s$=$(function(e,r){return T(e(r.a),r.b)}),d$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Wt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Zo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Zo(c,t,i):c[t]=i}return r}function Zo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return $t(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),$t(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Nt(c,hr(n===1?l[u]:l[u].b,r));return c}function $t(e,r,n){for(var a in n){var t=n[a];a==="a1"?m$(e,t):a==="a0"?h$(e,r,t):a==="a3"?p$(e,t):a==="a4"?b$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function m$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function p$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function b$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function h$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=g$(r,i),e.addEventListener(t,c,Yt&&{passive:eo(i)<2}),a[t]=c}}var Yt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Yt=!0}}))}catch{}function g$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Oe(i)){for(var c=eo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function _$(e,r){return e.$==r.$&&Hr(e.a,r.a)}function tc(e,r){var n=[];return Je(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=z$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!w$(d,m):d!==m)&&ge(n,2,a,m),Je(h,b,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:Xo(e,r,n,a,y$);return;case 2:Xo(e,r,n,a,x$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=Gt(e.d,r.d);w&&ge(n,4,a,w);var y=r.i(e.g,r.g);y&&ge(n,5,a,y);return}}}function w$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Xo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=Gt(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function Gt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Gt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&_$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function y$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function x$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],w=h.a,y=b.a,_=h.b,C=b.b,k=void 0,N=void 0;if(w===y){f++,Je(_,C,t,f),f+=_.b||0,d++,m++;continue}var E=l[d+1],R=u[m+1];if(E){var j=E.a,W=E.b;N=y===j}if(R){var F=R.a,Z=R.b;k=w===F}if(k&&N){f++,Je(_,Z,t,f),fn(i,t,w,C,m,c),f+=_.b||0,f++,sn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(k){f++,fn(i,t,y,C,m,c),Je(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,sn(i,t,w,_,f),f+=_.b||0,f++,Je(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(E&&j===F){f++,sn(i,t,w,_,f),fn(i,t,y,C,m,c),f+=_.b||0,f++,Je(W,Z,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;sn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];fn(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&ge(n,8,a,{w:t,x:c,y:K})}var oc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+oc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}sn(e,r,n+oc,a,t)}function ic(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)ic(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,w=0;w<h.length;w++){t++;var y=m===1?h[w]:h[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=dn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function cc(e,r,n,a){return n.length===0?e:(ic(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=S$(t,a);t===e&&(e=i)}return e}function S$(e,r){switch(r.$){case 0:return C$(e,r.s,r.u);case 4:return $t(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return L$(e,r);case 5:return r.s(e);default:nn(10)}}function C$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function L$(e,r){var n=r.s,a=P$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Nt(e,a),e}function P$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Nt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Ht(e){if(e.nodeType===3)return vt(e.textContent);if(e.nodeType!==1)return vt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Sr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Ht(v[a]),u);return p(Ur,l,r,u)}function z$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var T$=U(function(e,r,n,a){return jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Ht(l);return lc(i,function(v){var s=c(v),d=tc(u,s);l=cc(l,u,d,t),u=s})})});U(function(e,r,n,a){return jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=lr.title,v=lr.body,s=Ht(v);return lc(i,function(d){oa=c;var m=l(d),f=Ur("body")(P)(m.eu),h=tc(s,f);v=cc(v,s,h,t),s=f,oa=0,u!==m.fL&&(lr.title=u=m.fL)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function lc(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(ao,ro,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(ao,ro,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(ao,ro,sr(function(){history.replaceState({},"",r),e()}))});var k$={addEventListener:function(){},removeEventListener:function(){}},M$=typeof window!="undefined"?window:k$;x(function(e,r,n){return Ki(sr(function(a){function t(i){Rt(n(i))}return e.addEventListener(r,t,Yt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Oe(n)?re(n.a):q});function uc(e,r){return sr(function(n){ca(function(){var a=document.getElementById(e);n(a?Vr(r(a)):Nv(rs(e)))})})}function D$(e){return sr(function(r){ca(function(){r(Vr(e()))})})}$(function(e,r){return uc(r,function(n){return n[e](),Tn})});$(function(e,r){return D$(function(){return M$.scroll(e,r),Tn})});x(function(e,r,n){return uc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var B$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var A$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(al,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(al,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var F$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/V$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function V$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var It=new Float64Array(3),Ko=new Float64Array(3),Qo=new Float64Array(3),U$=x(function(e,r,n){return new Float64Array([e,r,n])}),R$=function(e){return e[0]},E$=function(e){return e[1]},j$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var N$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function vc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(vc);function $c(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(vc(e,r,n),n)}$($c);function fc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/fc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var W$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(ft);$(function(e,r){var n,a=It,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var Y$=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var G$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},H$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/I$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function I$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var O$=new Float64Array(16),J$=new Float64Array(16),q$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Z$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(sc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return sc(c,l,i,t,n,a)});function dc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(dc);U(function(e,r,n,a){return dc(e,r,n,a,-1,1)});function mc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],w=e[13],y=e[14],_=e[15],C=r[0],k=r[1],N=r[2],E=r[3],R=r[4],j=r[5],W=r[6],F=r[7],Z=r[8],K=r[9],oe=r[10],ve=r[11],te=r[12],de=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*k+d*N+b*E,n[1]=t*C+u*k+m*N+w*E,n[2]=i*C+v*k+f*N+y*E,n[3]=c*C+s*k+h*N+_*E,n[4]=a*R+l*j+d*W+b*F,n[5]=t*R+u*j+m*W+w*F,n[6]=i*R+v*j+f*W+y*F,n[7]=c*R+s*j+h*W+_*F,n[8]=a*Z+l*K+d*oe+b*ve,n[9]=t*Z+u*K+m*oe+w*ve,n[10]=i*Z+v*K+f*oe+y*ve,n[11]=c*Z+s*K+h*oe+_*ve,n[12]=a*te+l*de+d*Me+b*Se,n[13]=t*te+u*de+m*Me+w*Se,n[14]=i*te+v*de+f*Me+y*Se,n[15]=c*te+s*de+h*Me+_*Se,n}$(mc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],w=r[1],y=r[2],_=r[4],C=r[5],k=r[6],N=r[8],E=r[9],R=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*C+v*k,n[5]=t*_+l*C+s*k,n[6]=i*_+u*C+d*k,n[7]=0,n[8]=a*N+c*E+v*R,n[9]=t*N+l*E+s*R,n[10]=i*N+u*E+d*R,n[11]=0,n[12]=a*j+c*W+v*F+m,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+d*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,It);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/fc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=h+f,C=b-m,k=h-f,N=c*c*v+u,E=w+d,R=b+m,j=w-d,W=l*l*v+u,F=n[0],Z=n[1],K=n[2],oe=n[3],ve=n[4],te=n[5],de=n[6],Me=n[7],Se=n[8],mr=n[9],pr=n[10],Ea=n[11],Fu=n[12],Vu=n[13],Uu=n[14],Ru=n[15];return a[0]=F*y+ve*_+Se*C,a[1]=Z*y+te*_+mr*C,a[2]=K*y+de*_+pr*C,a[3]=oe*y+Me*_+Ea*C,a[4]=F*k+ve*N+Se*E,a[5]=Z*k+te*N+mr*E,a[6]=K*k+de*N+pr*E,a[7]=oe*k+Me*N+Ea*E,a[8]=F*R+ve*j+Se*W,a[9]=Z*R+te*j+mr*W,a[10]=K*R+de*j+pr*W,a[11]=oe*R+Me*j+Ea*W,a[12]=Fu,a[13]=Vu,a[14]=Uu,a[15]=Ru,a});function X$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(X$);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function K$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(K$);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=$c(e,r,It),t=la(ft(n,a,Ko),Ko),i=la(ft(a,t,Qo),Qo),c=O$,l=J$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,mc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ei=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Ot(e){for(var r=0;e.b;e=e.b)r++;return r}var Q$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ef=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),rf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),nf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),af=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),tf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),of=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),lf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),uf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),vf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},$f=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},ff=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},sf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},bc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},df=function(e){e.gl.disable(e.gl.CULL_FACE)},mf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},pf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},bf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ri=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],hf=[$f,ff,sf,pc,bc,df,mf,pf,bf];function ni(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function gf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function hc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function _f(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,w,y){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?w[y]:w[y][_];else i.forEach(function(C){for(_=0;_<h;_++)f[b++]=h===1?w[C][y]:w[C][y][_]})}var u=hc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Ot(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function wf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=yf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Ot(r.b),indexBuffer:null,buffers:{}}}function yf(e,r){var n=new Uint32Array(Ot(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ai(e,r){return e+"#"+r}var gc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),pc(n),bc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ai(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ei++,v||(v=ni(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ei++,s||(s=ni(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=gf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=xf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=ai(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Sf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=wf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=_f(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=hc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,y*C)}for(n.toggle=!n.toggle,yn(H0(n),i.a),u=0;u<ri.length;u++){var k=n[ri[u]];k.toggle!==n.toggle&&k.enabled&&(hf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function xf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,w=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Sf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Cf=x(function(e,r,n){return i$(r,{g:n,f:{},h:e},Df,Bf)}),Lf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Pf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),zf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Tf=$(function(e,r){e.contextAttributes.antialias=!0}),kf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Mf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Df(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(G0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Q$(function(){return o(gc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Bf(e,r){return r.f=e.f,gc(r)}var B=qu,En=Iu,_c=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(En,e,l,v)}else{var u=c.a;return p(En,i,l,u)}});return p(En,i,p(En,e,r,t),a)}),Jt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Jt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ti=function(e){return p(Jt,x(function(r,n,a){return o(B,T(r,n),a)}),P,e)},wc=1,Af=2,yc=0,we=function(e){return{$:1,a:e}},qt=$(function(e,r){return{$:3,a:e,b:r}}),oi=$(function(e,r){return{$:0,a:e,b:r}}),xc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ff=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Vf=wv,Uf=jv,Ae=qi,Pr=$(function(e,r){return o(hv,e,La(r))}),Zt=$(function(e,r){return g(o(bv,e,r))}),Sc=function(e){return o(Pr,`
    `,o(Zt,`
`,e))},Pa=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Br=function(e){return p(Pa,$(function(r,n){return n+1}),0,e)},Rf=Zu,Ef=x(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Ar=$(function(e,r){return p(Ef,e,r,P)}),Cc=$(function(e,r){return p(Rf,e,o(Ar,0,Br(r)-1),r)}),nr=zv,Lc=function(e){var r=nr(e);return 97<=r&&r<=122},Pc=function(e){var r=nr(e);return r<=90&&65<=r},jf=function(e){return Lc(e)||Pc(e)},Nf=function(e){var r=nr(e);return r<=57&&48<=r},Wf=function(e){return Lc(e)||Pc(e)||Nf(e)},Ve=function(e){return p(Pa,B,P,e)},an=sv,Yf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Sc(Gf(r))))}),Gf=function(e){return o(Hf,e,P)},Hf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return jf(y)&&o(Vf,Wf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Ve(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ae(Br(s))+" ways:"));return o(Pr,`

`,o(B,h,o(Cc,Yf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Ve(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return h+(Sc(o(Uf,4,f))+(`

`+m))}}),Ue=32,st=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dt=Nu,Xt=iv,Kt=$(function(e,r){return Go(r)/Go(e)}),If=tv,xn=Xt(o(Kt,2,Ue)),zc=L(st,0,xn,dt,dt),Tc=Yu,kc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Mc=cv,mt=Wu,ke=$(function(e,r){return O(e,r)>0?e:r}),Of=function(e){return{$:0,a:e}},Qt=Gu,Jf=$(function(e,r){e:for(;;){var n=o(Qt,Ue,e),a=n.a,t=n.b,i=o(B,Of(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),qf=function(e){var r=e.a;return r},Zf=$(function(e,r){e:for(;;){var n=Xt(r/Ue);if(n===1)return o(Qt,Ue,e).a;var a=o(Jf,e,P),t=n;e=a,r=t;continue e}}),Dc=$(function(e,r){if(r.l){var n=r.l*Ue,a=Mc(o(Kt,Ue,n-1)),t=e?Ve(r.z):r.z,i=o(Zf,t,r.l);return L(st,mt(r.p)+n,o(ke,5,a*xn),i,r.p)}else return L(st,mt(r.p),xn,dt,r.p)}),Xf=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Dc,!1,{z:a,l:n/Ue|0,p:t});var i=kc(p(Tc,Ue,r,e)),c=e,l=r-Ue,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Kf=$(function(e,r){if(e<=0)return zc;var n=e%Ue,a=p(Tc,n,e-n,r),t=e-n-Ue;return S(Xf,r,t,e,P,a)}),Oe=function(e){return!e.$},D=Vv,X=Mv,M=Fv,$e=Dv,ua=Uv,Qf=Rv,De=kv,eo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Ur("div"),es=function(e){return{$:2,a:e}},Bc=$(function(e,r){return e}),Ac=$(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Tr=function(e){return e},rs=Tr,ii=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ns=yv,zr=dv,Ir=gv,kn=$(function(e,r){return e<1?r:p(Ir,e,zr(r),r)}),za=Sv,Ta=function(e){return e===""},ka=$(function(e,r){return e<1?"":p(Ir,0,e,r)}),Fc=Cv,ci=he(function(e,r,n,a,t){if(Ta(t)||o(ns,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Fc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(ii,e,o(ka,c,t),u,r,n,a))}else return re(_e(ii,e,t,q,r,n,a))}),li=U(function(e,r,n,a){if(Ta(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return S(ci,e,o(kn,i,a),r,n,o(ka,i,a))}else return S(ci,e,"/",r,n,a)}),ui=x(function(e,r,n){if(Ta(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return L(li,e,re(o(kn,t+1,n)),r,o(ka,t,n))}else return L(li,e,q,r,n)});$(function(e,r){if(Ta(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(ui,e,re(o(kn,a+1,r)),o(ka,a,r))}else return p(ui,e,q,r)});var as=xv,ro=function(e){},Mn=Vr,ts=Mn(0),Vc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Pa,e,r,Ve(d)):L(Vc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=x(function(e,r,n){return L(Vc,e,r,0,n)}),ee=$(function(e,r){return p(dr,$(function(n,a){return o(B,e(n),a)}),P,r)}),va=ut,no=$(function(e,r){return o(va,function(n){return Mn(e(n))},r)}),os=x(function(e,r,n){return o(va,function(a){return o(va,function(t){return Mn(o(e,a,t))},n)},r)}),is=function(e){return p(dr,os(B),Mn(P),e)},cs=qv,ls=$(function(e,r){var n=r;return Ki(o(va,cs(e),n))}),us=x(function(e,r,n){return o(no,function(a){return 0},is(o(ee,ls(e),r)))}),vs=x(function(e,r,n){return Mn(0)}),$s=$(function(e,r){var n=r;return o(no,e,n)});rr.Task=Ov(ts,us,vs,$s);var fs=ec("Task"),ao=$(function(e,r){return fs(o(no,e,r))}),ss=T$,ds=$v,$a={$:1},Uc=function(e){return{$:2,a:e}},Ma={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},ms=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Rc=function(e){var r=e.b;return o(We,Ma,r)},_r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ps=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Rc(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,tn(n).b7)>0?o(ae,ms,_r(o(We,$a,t))):Tr)(o(We,Uc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ac,l.eA,Qe(r,{b7:l.b7+r.eJ})),s=o(e,v,u);return o(We,Ma,{B:T(v,s),ab:P,T:o(B,t.B,t.T)})}}),Ec=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),bs=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),hs=$(function(e,r){return Ve(p(bs,e,r,P))}),jc=x(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,w=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(hs,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,b,p(jc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return g([_])}}),gs=$(function(e,r){return p(jc,0,e,r)}),_s=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ve(n),le(g([a]),t)),c=o(gs,e,i),l=o(Ec,e,i);if(l.b){var u=l.a,v=l.b;return o(We,$a,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var d=s.a,m=s.b;return o(We,$a,{B:d,ab:P,T:m})}else return r}}),ws=function(e){var r=e.b;return o(We,$a,r)},ys=function(e){var r=e.b;return o(We,Uc({cY:tn(e).b7}),r)},xs=$(function(e,r){switch(e.$){case 1:return ws(r);case 2:return Rc(r);case 3:return ys(r);default:var n=e.a;return o(_s,n,r)}}),Nc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Ss=$(function(e,r){return Qe(r,{av:e(r.av)})}),Cs=function(e){return{$:3,a:e}},Ls=function(e){return{$:2,a:e}},Ps=$(function(e,r){return{$:0,a:e,b:r}}),zs=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},to=Lv,Ts=x(function(e,r,n){return o(_r,0/0,to(o(e,r,n)))}),Wc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),ks=pv,Yc=function(e){return p(ks,B,P,e)},Ms=$(function(e,r){var n=o(Wc,function(a){return a!=="0"&&a!=="."},Yc(r));return le(e&&n?"-":"",r)}),pe=qi,pt=fv,Gc=Tv,Hc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(pt,"0",Hc(t))}else{var i=nr(r);return i>=48&&i<57?o(pt,Gc(i+1),n):"0"}},bt=ov,Ds=vv,Da=function(e){return o(pt,e,"")},Ic=x(function(e,r,n){return e<=0?n:p(Ic,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(Ic,e,r,"")}),ht=x(function(e,r,n){return le(n,o(Sn,e-zr(n),Da(r)))}),gt=mv,Oc=function(e){var r=o(Zt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Bs=function(e){var r=o(Zt,"e",pe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Fc(o(as,"+",t)?o(kn,1,t):t)),c=Oc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(_r,"0",o(Fe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Fe,Nc(Da),an(le(o(Sn,J(i),"0"),v))))):p(ht,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},As=x(function(e,r,n){if(bt(n)||Ds(n))return pe(n);var a=n<0,t=Oc(Bs(J(n))),i=t.a,c=t.b,l=zr(i)+r,u=le(o(Sn,-l+1,"0"),p(ht,l,"0",le(i,c))),v=zr(u),s=o(ke,1,l),d=o(e,a,p(Ir,s,v,u)),m=p(Ir,0,s,u),f=d?gt(o(_r,"1",o(Fe,Hc,an(gt(m))))):m,h=zr(f),b=f==="0"?f:r<=0?le(f,o(Sn,J(r),"0")):O(r,zr(c))<0?p(Ir,0,h-r,f)+("."+p(Ir,h-r,h,f)):le(i+".",p(ht,r,"0",c));return o(Ms,a,b)}),Jc=As($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Fs=Ts(Jc),Vs=x(function(e,r,n){var a=o(Kt,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Fs,t,n)}),qc=Ju,Zc=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(qc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Xr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(G,0,v,s,S(G,1,h,b,w,y),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),_t=x(function(e,r,n){if(n.$===-2)return S(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(qc,e,t);switch(u){case 0:return S(Xr,a,t,i,p(_t,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(Xr,a,t,i,c,p(_t,e,r,l))}}),Zn=x(function(e,r,n){var a=p(_t,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),Us=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Xc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,w=m.e,y=v.e;return S(G,0,f,h,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,y=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,y))}else return e},vi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,w=f.d,y=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,h,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,k=e.e;k.a;var h=k.b,b=k.c,w=k.d,y=k.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,h,b,w,y))}else return e},Rs=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,vi(r)}else break e;else return c.a,c.d,vi(r);else break e;return r}}),Xn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,Xn(t),l);var u=Xc(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,Xn(m),f)}else return or}else return S(G,r,n,a,Xn(t),l)}else return or},hn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(hn,e,i),c);var u=Xc(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,o(hn,e,m),f)}else return or}else return S(G,n,a,t,o(hn,e,i),c);else return o(Es,e,Vt(Rs,e,r,n,a,t,i,c))}),Es=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=Us(c);if(l.$===-1){var u=l.b,v=l.c;return S(Xr,n,u,v,i,Xn(c))}else return or}else return S(Xr,n,a,t,i,o(hn,e,c))}else return or}),js=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),jn=x(function(e,r,n){var a=r(o(Zc,e,n));if(a.$)return o(js,e,n);var t=a.a;return p(Zn,e,t,n)}),Ns=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(zs,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ps,T(i,c),p(Vs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===3?Cs(n):a}));default:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===2?Ls(n):a}))}},Ws=function(e){return Ss(Ns(e))},Ys=$(function(e,r){return o(ee,Ws(e),r)}),Gs=$(function(e,r){return Qe(r,{eA:o(Ys,e,r.eA)})}),Hs=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Qe(a,{B:o(Nc,Gs(e),a.B)}))}),Is=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),Os=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Qe(t,{B:o(Is,o(e,i.a,r),i)}))}),Js=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(ps,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(Hs,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(Os,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(xs,l,a.G)})}}),qs=$(function(e,r){return o(We,Ma,{B:T(e,r(e)),ab:P,T:P})}),Zs=Zv,$i=Zs(P),fa=Av,Cn=Bv,Xs=r$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",fa(Cn)))},o(M,"left",X))},o(M,"pressedKeys",fa(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Ks=function(e){return{$:4,a:e}},Qs={$:0},ed=Xi,Ie=$(function(e,r){return o(ac,e,ed(r))}),H=Ie("className"),rd=function(e){var r=e.b.B;return r.b},sa=Ie("id"),nd=c$,da=nd,ad=l$,se=ad,td={$:1},od=function(e){return{$:3,a:e}},id=function(e){return{$:5,a:e}},fi=Ur("a"),oo=Ur("button"),si=function(e){return o(Ie,"href",$$(e))},cd=Sr("clip-rule"),Ce=Sr("d"),ld=Sr("fill"),Kc=rc("http://www.w3.org/2000/svg"),ud=Kc("svg"),vd=Sr("viewBox"),$d=o(u$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=ud(g([vd("0 0 24 24"),ld("currentColor"),o(se,"width","100%"),o(se,"height","100%"),$d("http://www.w3.org/2000/svg")])),fd=Sr("fill-rule"),Le=Kc("path"),Jr={eD:Re(g([o(Le,g([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(g([o(Le,g([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(g([o(Le,g([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(g([o(Le,g([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,g([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(g([o(Le,g([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,g([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(g([o(Le,g([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(g([o(Le,g([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(g([o(Le,g([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(g([o(Le,g([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(g([o(Le,g([fd("evenodd"),cd("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(g([o(Le,g([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(g([o(Le,g([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},sd=function(e){return{$:0,a:e}},Qc=nc,el=$(function(e,r){return o(Qc,e,sd(r))}),io=function(e){return o(el,"click",De(e))},di=Ie("target"),dd=Ie("title"),wt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(wt,e,i),o(wt,e,c))}),md=vt,$r=md,pd=function(e){return p(Jt,x(function(r,n,a){return o(B,n,a)}),P,e)},bd=$(function(e,r){return{$:3,a:e,b:r}}),hd=$(function(e,r){return{$:2,a:e,b:r}}),gd=$(function(e,r){return{$:0,a:e,b:r}}),_d=$(function(e,r){return{$:1,a:e,b:r}}),Cr=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),wd=L(Cr,0/255,0/255,0/255,1),yd=Xi,xd=$(function(e,r){return o(ac,e,yd(r))}),Sd=xd("checked"),Ze=lv,Cd=x(function(e,r,n){return le(o(Sn,e-zr(n),Da(r)),n)}),ma=Ku,rl=function(e){var r=function(n){return n<10?Ae(n):Da(Gc(87+n))};return e<16?r(e):le(rl(e/16|0),r(o(ma,16,e)))},Ld=o(ae,rl,o(Cd,2,"0")),co=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Pd=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b5;return o(Pr,"",o(B,"#",o(ee,o(ae,Ze,Ld),g([n*255,a*255,t*255]))))},yt=Ie("htmlFor"),xt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),zd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),nl=$(function(e,r){return p(dr,zd(e),P,r)}),al=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Td=A$,kd=Pv,Md=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Dd=B$,Bd=function(e){return o(Dd,{ew:!1,fg:!1},e)},tl=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Ad=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Fd=function(e){return{$:2,a:e}},Vd=function(e){return{$:0,a:e}},Ud=function(e){return{$:1,a:e}},Wa=$(function(e,r){return nr(r)-nr(e)}),Ya=x(function(e,r,n){var a=nr(n);return O(nr(e),a)<1&&O(a,nr(r))<1}),Rd=$(function(e,r){var n=function(t){return O(t,e)<0?ue(t):we(Ud(r))},a=p(Ya,"0","9",r)?ue(o(Wa,"0",r)):p(Ya,"a","z",r)?ue(10+o(Wa,"a",r)):p(Ya,"A","Z",r)?ue(10+o(Wa,"A",r)):we(Vd(r));return o(pa,n,a)}),ol=$(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return ue(c+l*e)},o(ol,e,i))},o(Rd,e,t))}),Ed=$(function(e,r){return 2<=e&&e<=36?o(ol,e,gt(r)):we(Fd(e))}),jd=Ed(16),il=x(function(e,r,n){return L(Cr,e,r,n,1)}),Nd=U(function(e,r,n,a){return L(Cr,e,r,n,a)}),Dn=Xu,Wd=$(function(e,r){var n=o(Dn,10,e);return Ze(r*n)/n}),Yd=_v,Gd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yc(n);if(a.b&&!a.b.b){var t=a.a;return kd(g([t,t]))}else return n};return o(ae,Yd,o(ae,function(n){return o(Fe,function(a){return p(Td,1,a,n)},Bd(e))},o(ae,xt(tl),o(ae,Fe(function(n){return n.fG}),o(ae,Fe(nl(Tr)),o(ae,Md("Parsing hex regex failed"),pa(function(n){var a=o(ee,o(ae,r,o(ae,jd,Ad(If))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(Nd,t/255,c/255,u/255,o(Wd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(il,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ba=Ur("input"),St=Ur("label"),Ct=Ie("name"),cl=$(function(e,r){return p(dr,M,r,e)}),Hd=o(cl,g(["target","checked"]),X),Id=function(e){return o(el,"change",o(ua,e,Hd))},Od=function(e){return T(e,!0)},Jd=function(e){return{$:1,a:e}},qd=$(function(e,r){return o(Qc,e,Jd(r))}),Zd=o(cl,g(["target","value"]),Cn),lo=function(e){return o(qd,"input",o(ua,Od,o(ua,e,Zd)))},ll=Ie("max"),ul=Ie("min"),vl=function(e){return o(Ie,"step",e)},ha=Ie("type"),uo=Ie("value"),mi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(I,P,g([o(St,g([yt(r)]),g([o(I,g([H("relative w-full")]),g([o(I,g([H("inline-block")]),g([$r(r)])),o(I,g([H("inline-block float-right")]),g([$r(pe(n))]))]))])),o(ba,g([ha("range"),o(se,"width","100%"),sa(r),Ct(r),ul(pe(a)),ll(pe(t)),uo(pe(n)),vl(pe(i)),lo(o(ae,to,o(ae,_r(42),c)))]),P)]))},Xd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Kd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,g([H("h-12 py-4")]),g([o(St,g([H("block"),yt(e)]),g([o(ba,g([H("relative bottom-[1px] align-middle mr-2"),ha("checkbox"),sa(e),Ct(e),Id(bd(e)),Sd(c)]),P),$r(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return mi({cg:e,cs:i,cw:t,cA:gd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return mi({cg:e,cs:i,cw:t,cA:o(ae,Ze,_d(e)),cW:1,c1:c});default:var c=r.a;return o(I,P,g([o(I,g([o(se,"margin-bottom","6px")]),g([o(St,g([yt(e)]),g([$r(e)]))])),o(ba,g([ha("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),sa(e),Ct(e),lo(function(l){return o(hd,e,o(Xd,wd,Gd(l)))}),uo(Pd(c))]),P)]))}}),Qd=function(e){return o(I,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(I,g([H("text-lg pb-2")]),g([$r(e.fh)])),o(I,g([H("pl-2 pr-2")]),pd(o(wt,Kd,e.av)))]))},em=function(e){return o(I,g([H("text-xs text-white60")]),o(ee,Qd,e))},rm=function(e){return o(I,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([$r("clock: "+o(Jc,3,tn(e).b7))]))},nm=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return Ze(60/(tn(e).b7-n))},o(Fe,o(ae,qf,function(n){return n.b7}),tl(o(Ec,59,r))))},am=function(e){return o(I,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=nm(e);if(r.$===1)return g([$r("... Fps")]);var n=r.a;return g([$r(Ae(n)+" Fps")])}())},tm=function(e){return{$:0,a:e}},om=function(e){var r=e.b.T;return Br(r)},im=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Br(r)+1+Br(n)},cm=function(e){return o(ba,g([H("absolute w-full"),ha("range"),ul(Ae(0)),ll(Ae(im(e)-1)),uo(Ae(om(e))),vl(Ae(1)),lo(o(ae,to,o(ae,_r(42),o(ae,Ze,tm))))]),P)},pi={$:1},lm={$:3},um={$:2},$l=function(e){return!e.b},bi=$(function(e,r){return o(oo,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),io(e)]),g([$r("REC")]))}),hi=$(function(e,r){return o(oo,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),io(r)]),g([o(I,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([e]))]))}),vm=function(e){var r=e.a,n=e.b.ab;return o(I,g([H("py-1")]),g([function(){switch(r.$){case 0:return o(bi,pi,"text-red-500 font-bold");case 1:return o(bi,um,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return $l(n)?o(I,P,P):o(hi,Jr.fq,lm);default:return o(hi,Jr.fp,pi)}}()]))},$m=function(e){return o(I,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([cm(e),vm(e),am(e),rm(e)]))},fm=function(e){var r=e.a;return gr(r,Ma)},sm=$(function(e,r){var n=fm(r.G)?o(I,P,P):o(I,g([H("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.fs.fU+.5*e.cT.fS)+"px"),o(se,"top",pe(-e.fs.fY+.5*e.cT.eW)+"px")]),g([o(I,g([H(e.fs.e4?"text-black80":"text-black40")]),g([Jr.fs]))]));return o(I,P,g([n]))}),dm=$(function(e,r){var n=o(oo,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),io(td),dd("Distraction Free Mode")]),g([Jr.f0])),a=o(I,g([H("absolute w-8 bottom-12")]),g([o(fi,g([H("text-twitterBlue40 hover:text-twitterBlue"),si("https://twitter.com/AzizErkalSelman"),di("_blank")]),g([Jr.fN]))])),t=o(I,g([H("absolute w-8 bottom-2")]),g([o(fi,g([H("text-githubCat40 hover:text-githubCat"),si("https://github.com/erkal/elm-3d-playground-exploration"),di("_blank")]),g([Jr.eQ]))]));return r.aL?o(I,g([H("fixed w-10 h-10 p-1")]),g([n])):o(I,P,g([o(I,g([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,t])),o(I,g([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.cT.eW-80)+"px")]),g([o(da,od,em(tn(r.G).eA))])),o(I,g([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cT.fS>600?"600px":pe(e.cT.fS-40)+"px")]),g([o(da,id,$m(r.G))])),o(sm,e,r)]))}),mm=x(function(e,r,n){var a=rd(n.G),t=tn(n.G);return o(I,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",pe(t.cT.fS)+"px"),o(se,"height",pe(t.cT.eW)+"px")]),g([o(I,g([H("fixed")]),g([o(da,Bc(Qs),o(e,t,a))])),o(I,g([sa("gui")]),g([o(dm,t,n),o(da,Ks,o(r,t,a))]))]))}),pm=He(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(Js,r,i,u,v),$i)}),l=function(u){var v=o(Ac,n,u.e1);return T({aL:u.e1.cT.fS<500,G:o(qs,v,a)},$i)};return ss({e0:l,fH:Bc(Xs(es)),fO:c,fQ:o(mm,e,t)})}),bm=U(function(e,r,n,a){return _e(pm,e,r,n,a,$(function(t,i){return o(I,P,P)}),x(function(t,i,c){return c}))}),hm=x(function(e,r,n){return L(bm,e,r,P,n)}),gm=function(e){return{}},_m=$(function(e,r){return r}),wm=av,br=uv,ym=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(ke,J(c),o(ke,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=br(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c6:u/d})}else return q}),Ga=function(e){return e},vo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Kn=function(e){var r=e,n=o(ke,J(r.fU),o(ke,J(r.fY),J(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},ga=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),xm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),fl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Sm=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Cm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Lm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),Pm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},qe=0,sl={fU:0,fY:0,c6:0},zm=x(function(e,r,n){return o(xt,function(a){var t=o(Cm,o(Lm,a,r),r);return o(xt,function(i){var c=o(vo,r,e),l=o(xm,n,c),u=o(fl,qe,l)?c:o(Sm,qe,l)?Pm(c):sl;return o(Fe,function(v){return A(a,i,v)},Kn(u))},Kn(t))},Kn(e))}),Tm=function(e){var r=e,n=J(r.c6),a=J(r.fY),t=J(r.fU);if(O(t,a)<1)if(O(t,n)<1){var i=br(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=br(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(O(a,n)<1){var i=br(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=br(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},$o=function(e){var r=Tm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return T(r,c)},Or=function(e){var r=e;return r},fr=function(e){return e},km=$(function(e,r){var n=$o(e),a=n.a,t=n.b;return fr({cB:r,c4:a,c5:t,c7:e})}),Mm=function(e){var r=o(ga,e.aR,e.dj),n=Or(e.ei),a=o(vo,r,n),t=p(zm,r,n,a);if(t.$){var v=Kn(r);if(v.$){var d=$o(e.ei),m=d.a,f=d.b;return fr({cB:e.dj,c4:f,c5:e.ei,c7:m})}else{var s=v.a;return o(km,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return fr({cB:e.dj,c4:u,c5:l,c7:c})}},Rr={fU:0,fY:0,c6:0},Dm=function(e){return{$:0,a:e}},xe=function(e){var r=e;return J(r)},Qn=function(e){var r=e;return .5*r},Bm=nv,Am=function(e){var r=e;return Bm(r)},Fm=function(e){var r=Qn(xe(e.ej)),n=Am(r);return{cM:Dm(n),c2:e.c2}},ur=function(e){return e},Ba=ur({fU:0,fY:1,c6:0}),Kr=function(e){return e},Vm=function(e){var r=e.aR,n=e.dj,a=e.ei;return Fm({ej:Kr(2*wm(.5)),c2:Mm({dj:Ga(n),aR:Ga(r),ei:o(_r,Ba,o(ym,Rr,Ga(a)))})})},Um=Vm({dj:{fU:0,fY:10,c6:30},aR:{fU:0,fY:10,c6:0},ei:{fU:0,fY:1,c6:0}}),Rm=L(Cr,114/255,159/255,207/255,1),Em=L(Cr,52/255,101/255,164/255,1),jm=L(Cr,115/255,210/255,22/255,1),fo=function(e){return{$:5,a:e}},dl=function(e){return fo(e)},so=$(function(e,r){return{$:4,a:e,b:r}}),ml=function(e){return e},on=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Nm=$(function(e,r){return ml(T(e,o(on,r,e)))}),pl=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Wm=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(pl,e(n),e(a),e(t))}),ar=function(e){return e},Ha=$(function(e,r){return o(so,e,o(Nm,Rr,o(Wm,ar,r)))}),Ym=L(Cr,204/255,0/255,0/255,1),Gm=dl(g([o(Ha,Ym,A(100,0,0)),o(Ha,jm,A(0,100,0)),o(Ha,Em,A(0,0,100))])),mo=$(function(e,r){return{$:0,a:e,b:r}}),Ia=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),Oa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vr=$(function(e,r){var n=e,a=r;return a-n}),Hm=ur({fU:-1,fY:0,c6:0}),Im=ur({fU:0,fY:-1,c6:0}),bl=ur({fU:0,fY:0,c6:-1}),hl=ur({fU:1,fY:0,c6:0}),po=ur({fU:0,fY:0,c6:1}),me=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Om=He(function(e,r,n,a,t,i){var c=o(Ia,n,i)?po:bl,l=o(Ia,r,t)?Ba:Im,u=o(Ia,e,a)?hl:Hm,v=A(xe(o(vr,e,a)),xe(o(vr,r,t)),xe(o(vr,n,i))),s=p(me,o(Oa,e,a),o(Oa,r,t),o(Oa,n,i)),d=fr({cB:s,c4:u,c5:l,c7:c});return{er:d,aK:v}}),kr=function(e){var r=e;return r.fU},Mr=function(e){var r=e;return r.fY},Dr=function(e){var r=e;return r.c6},Jm=$(function(e,r){return _e(Om,kr(e),Mr(e),Dr(e),kr(r),Mr(r),Dr(r))}),Lt=x(function(e,r,n){return{fU:e,fY:r,c6:n}}),qm=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(mo,e,o(Jm,p(Lt,-c,-l,-u),p(Lt,c,l,u)))}),Zm=U(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Cr,f,m,d,a)}),Xm=x(function(e,r,n){return L(Zm,e,r,n,1)}),Pt=function(e){return{$:0,a:e}},gl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),_l=x(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),Ja=function(e){return p(_l,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},Bn=U$,Km=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b5;return p(Bn,Ja(n),Ja(a),Ja(t))},wl=function(e){return p(gl,0,Pt(Km(e)),Pt(0))},bo=$(function(e,r){return{$:2,a:e,b:r}}),yl=$(function(e,r){return{$:3,a:e,b:r}}),xl=$(function(e,r){return{$:1,a:e,b:r}}),Qm=x(function(e,r,n){return{fU:e,fY:r,c6:n}}),e0=function(e){var r=e;return r},ho=function(e){var r=e;return e0(r.er)},go=function(e){var r=e;return r.aK},cn=function(e){var r=e;return r.cB},Er=function(e){var r=e;return r.c4},jr=function(e){var r=e;return r.c5},Nr=function(e){var r=e;return r.c7},r0=$(function(e,r){return fr({cB:o(on,e,cn(r)),c4:Er(r),c5:jr(r),c7:Nr(r)})}),n0=$(function(e,r){return{er:o(r0,e,ho(r)),aK:go(r)}}),Aa=$(function(e,r){return{eH:r,cB:e}}),a0=$(function(e,r){var n=r;return o(Aa,o(on,e,n.cB),n.eH)}),t0=$(function(e,r){var n=r;return{k:o(a0,e,n.k),e9:n.e9,fu:n.fu}}),_o=function(e){var r=e;return r},Sl=$(function(e,r){var n=_o(r),a=n.a,t=n.b;return ml(T(e(a),e(t)))}),o0=$(function(e,r){return o(Sl,on(e),r)}),wo=function(e){var r=e;return r.ey},yo=function(e){var r=e;return r.fu},Cl=$(function(e,r){return{ey:r,fu:xe(e)}}),i0=$(function(e,r){return o(Cl,yo(r),o(on,e,wo(r)))}),Ll=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),c0=$(function(e,r){return o(Ll,on(e),r)}),Pl=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Qm,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(mo,s,o(n0,i,c));case 1:var s=r.a,l=r.b;return o(xl,s,o(c0,i,l));case 3:var s=r.a,u=r.b;return o(yl,s,o(i0,i,u));case 2:var s=r.a,v=r.b;return o(bo,s,o(t0,i,v));case 4:var s=r.a,d=r.b;return o(so,s,o(o0,i,d));default:var m=r.a;return fo(o(ee,Pl(A(n,a,t)),m))}}),zl=function(e){return Pl(A(0,e,0))},Fr=ev,Qr=rv,ea=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Qr(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,w=d*h,y=h*h,_=1-2*(f+y),C=s.c6*u,k=l*C,N=2*(w-k),E=2*(w+k),R=d*C,j=2*(R+b),W=2*(R-b),F=h*C,Z=2*(F-m),K=2*(F+m),oe=C*C,ve=1-2*(y+oe),te=1-2*(f+oe);return{fU:ve*i.fU+N*i.fY+j*i.c6,fY:E*i.fU+te*i.fY+Z*i.c6,c6:W*i.fU+K*i.fY+_*i.c6}}),An=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Qr(c),v=a.cB,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,h=a.eH,b=h,w=b.fU*u,y=l*w,_=w*w,C=b.fY*u,k=l*C,N=w*C,E=C*C,R=1-2*(_+E),j=b.c6*u,W=l*j,F=2*(N-W),Z=2*(N+W),K=w*j,oe=2*(K+k),ve=2*(K-k),te=C*j,de=2*(te-y),Me=2*(te+y),Se=j*j,mr=1-2*(E+Se),pr=1-2*(_+Se);return{fU:s.fU+mr*d+F*m+oe*f,fY:s.fY+Z*d+pr*m+de*f,c6:s.c6+ve*d+Me*m+R*f}}),l0=x(function(e,r,n){return fr({cB:p(An,e,r,cn(n)),c4:p(ea,e,r,Er(n)),c5:p(ea,e,r,jr(n)),c7:p(ea,e,r,Nr(n))})}),u0=x(function(e,r,n){return{er:p(l0,e,r,ho(n)),aK:go(n)}}),v0=$(function(e,r){var n=o(An,e,r),a=o(ea,e,r);return function(t){var i=t;return o(Aa,n(i.cB),a(i.eH))}}),$0=x(function(e,r,n){var a=n;return{k:p(v0,e,r,a.k),e9:a.e9,fu:a.fu}}),f0=x(function(e,r,n){return o(Sl,o(An,e,r),n)}),s0=x(function(e,r,n){return o(Cl,yo(n),p(An,e,r,wo(n)))}),d0=x(function(e,r,n){return o(Ll,o(An,e,r),n)}),Tl=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(mo,l,p(u0,e,r,a));case 1:var l=n.a,t=n.b;return o(xl,l,p(d0,e,r,t));case 3:var l=n.a,i=n.b;return o(yl,l,p(s0,e,r,i));case 2:var l=n.a,c=n.b;return o(bo,l,p($0,e,r,c));case 4:var l=n.a,u=n.b;return o(so,l,p(f0,e,r,u));default:var v=n.a;return fo(o(ee,o(Tl,e,r),v))}}),xo=Ba,m0=o(Aa,Rr,xo),gi=$(function(e,r){return p(Tl,m0,Kr(e),r)}),kl=$(function(e,r){return(r-Mc(r/e)*e)/e}),p0=$(function(e,r){return 360*o(kl,e,r)}),en=Qu,b0=function(e){return 2*en*e},h0=U(function(e,r,n,a){return e+(r-e)*(1+Fr(b0(o(kl,n,a))))/2}),g0=$(function(e,r){var n=L(h0,.2,.8,10,e.b7);return o(gi,o(p0,1e3,e.b7),o(gi,.1*r,o(zl,r*1.1,o(qm,wl(p(Xm,n,.5,.5)),A(r,1,r)))))}),_0=function(e){return dl(o(ee,g0(e),o(Ar,1,18)))},w0=x(function(e,r,n){return{k:o(Aa,e,r),e9:xe(n.e9),fu:xe(n.fu)}}),y0=x(function(e,r,n){return o(bo,e,p(w0,Rr,Ba,{e9:ar(n),fu:ar(r)}))}),x0=o(zl,-1.001,p(y0,wl(p(il,.294,.588,.478)),30,1)),S0=$(function(e,r){return g([Gm,x0,_0(e)])}),C0=function(e){return e},L0=function(e){return ar(.01*e)},_i=function(e){return e},P0=function(e){return e},z0=function(e){return{$:0,a:e}},T0=z0,k0={$:3},M0=k0,D0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),B0=D0,A0=$(function(e,r){return r.b?p(dr,B,r,e):e}),Ye=function(e){return p(dr,A0,P,e)},So=$(function(e,r){return Ye(o(ee,e,r))}),F0=function(e){return{$:1,a:e}},V0=F0,U0=function(e){return o(Sr,"height",Ae(e))},R0=function(e){return o$(v$(e))},E0=R0,j0=function(e){return{$:2,a:e}},N0=j0,W0=function(e){return o(Pr,"",e)},Y0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return W0(g(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},G0=$(function(e,r){switch(r.$){case 0:return o(Lf,e,r);case 1:return o(Pf,e,r);case 2:return o(zf,e,r);case 3:return o(Tf,e,r);case 4:return o(kf,e,r);default:return o(Mf,e,r)}}),H0=$(function(e,r){switch(r.$){case 0:return o(rf,e,r);case 1:return o(nf,e,r);case 2:return o(af,e,r);case 3:return o(tf,e,r);case 4:return o(of,e,r);case 5:return o(cf,e,r);case 6:return o(lf,e,r);case 7:return o(uf,e,r);default:return vf(e)}}),I0=x(function(e,r,n){return p(Cf,e,r,n)}),wi=function(e){var r=e;return r},ln=Y$,qa=L(ln,1,1,1,1),Xe=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),O0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),J0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(O0,n*a/t,n,n*(1-a-t)/t)}),q0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Co=$(function(e,r){return q0(o(J0,e,r))}),Ml=$(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=q$,Z0=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Za=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(ln,a.bX,a.bX,a.bX,i);return _e(t,e,c,Z0(a),a.dp,r,n)}),Dl=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Ml,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(B,S(Za,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,y=o(B,S(Za,e,r,n,a,w),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,C=o(B,S(Za,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var k=t.a;return p(Pa,L(Dl,e,r,n,a),i,k)}}),X0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bl=X0,Lo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),K0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Lo,518,r,n,a)},Q0=$(function(e,r){return{$:6,a:e,b:r}}),ep=Q0,Al=g([K0({V:1,W:0,Z:!1}),L(Bl,!1,!1,!1,!1),o(ep,0,1)]),rn=519,Po=8,Fl=15,qr=7681,rp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=ef,np=$(function(e,r){return{$:0,a:e,b:r}}),ap=np({df:1,$7:0,dV:5}),Be=F$,tp=ap(g([{bT:o(Be,-1,-1)},{bT:o(Be,1,-1)},{bT:o(Be,-1,1)},{bT:o(Be,1,1)}])),op={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},ip=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},zo=x(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(ip,a,t,i)))}),To=function(e){return p(zo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},ko=function(e){return S(ne,g([To(e),L(Bl,!1,!1,!1,!1)]),op,rp,tp,{})},cp=ko({a8:qr,cp:0,cO:Po,bl:rn,c3:Fl,bt:qr,bu:qr}),lp=516,yi=5386,ye=7680,up=function(e){return o(Dn,2,e+4)},Vl=function(e){return ko({a8:ye,cp:Fl,cO:Po,bl:lp,c3:up(e),bt:yi,bu:yi})},vp=x(function(e,r,n){return Ye(g([p(Xe,e,n,Al),g([Vl(r),cp])]))}),$p=$(function(e,r){return Ye(o(Cc,vp(e),r))}),fp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Lo,513,r,n,a)},sp=fp({V:1,W:0,Z:!0}),dp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},mp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return dp(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},pp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),xi=$(function(e,r){var n=e,a=r;return p(pp,32774,n,a)}),bp=1,Si=771,hp=770,Mo=mp({bv:0,aH:o(xi,bp,Si),by:0,bA:o(xi,hp,Si),bF:0,bV:0}),Wr=g([sp,Mo]),gp=function(e){var r=e;return r.dO},_p=function(e){var r=e;return r.dP},Ul=function(e){var r=e;return r.dQ},wp=function(e){var r=e;return r.dR},yp=function(e){var r=e;return r.dS},Rl=function(e){var r=e;return r.dT},El=function(e){return A(o(vr,wp(e),gp(e)),o(vr,yp(e),_p(e)),o(vr,Rl(e),Ul(e)))},Ci=function(e){var r=e;return cn(r)},xp=function(e){return e},Sp=function(e){return fr({cB:xp({fU:e.H,fY:e.I,c6:e.J}),c4:ur({fU:e.q,fY:e.r,c6:e.s}),c5:ur({fU:e.t,fY:e.u,c6:e.v}),c7:ur({fU:e.w,fY:e.x,c6:e.y})})},Xa=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),jl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,d=n.c5,m=d,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Nl=$(function(e,r){return{cB:o(jl,e,cn(r)),c4:o(Xa,e,Er(r)),c5:o(Xa,e,jr(r)),c7:o(Xa,e,Nr(r))}}),_a=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),ra=$(function(e,r){return O(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),Cp=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},Lp=function(e){var r=e;return A(r.fU,r.fY,r.c6)},gn=$(function(e,r){var n=e,a=r;return a+n}),Pp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qn(xe(a)),c=Qn(xe(n)),l=Qn(xe(t)),u=Lp(r),v=u.a,s=u.b,d=u.c;return{dO:o(gn,c,v),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o(vr,c,v),dS:o(vr,i,s),dT:o(vr,l,d)}}),Li=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,d=Ge(Nr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c6),f=Ge(jr(e)),h=J(l*f.fU)+J(c*f.fY)+J(i*f.c6),b=Ge(Er(e)),w=J(l*b.fU)+J(c*b.fY)+J(i*b.c6),y=o(Pp,A(w,h,m),o(jl,e,p(Lt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(Cp,_,y))}),zt=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 1:var c=t.a,l=L(Li,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 2:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 3:var c=t.a,l=L(Li,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 4:var u=t.a,f=e,h=r,b=L(zt,e,r,n,u),w=i;e=f,r=h,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Nl,Sp(v),e),m=r*v.bX,f=e,h=r,b=L(zt,d,m,n,g([s])),w=i;e=f,r=h,n=b,a=w;continue e}}else return n}),un=R$,vn=E$,$n=j$,Wl=function(e){return{$:4,a:e}},zp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Wl(o(zp,e,P))},Tp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},kp=function(e){var r=e;return r},Pi=ko({a8:qr,cp:0,cO:Po,bl:rn,c3:255,bt:qr,bu:qr}),Mp=function(e){var r=e,n=o(ke,J(r.fU),o(ke,J(r.fY),J(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=br(i*i+t*t+a*a);return c*n}else return qe},Pe={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=T({bd:o(je,Pe,Pe),bK:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe)},L(ln,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),zi=function(e){var r=e;return-r},Yl=514,Gl=function(e){var r=e.Z,n=e.W,a=e.V;return L(Lo,515,r,n,a)},Hl=240,Dp=g([Gl({V:1,W:0,Z:!0}),To({a8:ye,cp:Hl,cO:0,bl:Yl,c3:0,bt:ye,bu:ye}),Mo]),Bp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=xe(a),l=c,u=xe(t),v=u,s=n.cM;if(s.$){var m=s.a;return bt(v)?er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return bt(v)?er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Nn=$(function(e,r){return(1&e>>r)===1?0:1}),Ap=function(e){return g([Gl({V:1,W:0,Z:!0}),To({a8:ye,cp:Hl,cO:e,bl:Yl,c3:0,bt:ye,bu:ye}),Mo])},Fp=x(function(e,r,n){return Ye(o(ee,function(a){var t=a<<4,i=L(ln,o(Nn,a,0),o(Nn,a,1),o(Nn,a,2),o(Nn,a,3));return p(Xe,e,T(r,i),Ap(t))},o(Ar,1,o(Dn,2,n)-1)))}),Ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Zr=function(e){var r=e;return r},Vp=Z$,Ti=function(e){var r=e;return Ln(Nr(r))},Il=hl,Ol=po,Up={cB:Rr,c4:Il,c5:xo,c7:Ol},Fa=function(e){var r=e;return r},Rp=function(e){var r=Fa(cn(e)),n=Ge(Nr(e)),a=Ge(jr(e)),t=Ge(Er(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Ep=$(function(e,r){var n=r;return Rp(o(Nl,n,e))}),jp=function(e){return o(Ep,Up,e)},Np=function(e){var r=e;return r.c2},Wp=function(e){var r=e;return Er(r)},Yp=function(e){var r=e;return jr(r)},Gp=function(e){var r=Np(e.ev),n=fr({cB:Ci(r),c4:Wp(r),c5:Yp(r),c7:Ln(Ti(r))}),a=Fn(e.aP),t=a,i=L(zt,n,1,q,g([t]));if(i.$===1)return P;var c=i.a,l=jp(r),u=o(ie,.99,o(ce,xe(e.aJ),zi(Ul(c)))),v=El(c),s=v.a,d=v.b,m=v.c,f=Mp(p(pl,s,d,m)),h=o(ie,1.01,o(gn,f,zi(Rl(c)))),b=o(Bp,e.ev,{eq:e.eq,eP:h,fi:u}),w=Vp(b).dM,y=w?Ge(Ln(Ti(r))):Zr(Ci(r)),_=function(){var te=e.bZ;switch(te.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var de=te.a;return T(3,de);case 4:var de=te.a;return T(4,de);default:return T(5,0)}}(),C=_.a,k=_.b,N=e.bD,E=N,R=o(Co,E,e.b$),j=R,W=er({dx:0,dy:y.fU,dz:un(j),dA:e.ec,dB:0,dC:y.fY,dD:vn(j),dE:kp(f),dF:0,dG:y.c6,dH:$n(j),dI:C,dJ:0,dK:w,dL:0,dM:k}),F=_e(Dl,W,l,b,Tp,t,{M:P,U:P,fB:P}),Z=e.bJ;switch(Z.$){case 0:var K=Z.a;return Ye(g([p(Xe,F.M,T(K,qa),Wr),p(Xe,F.U,pn,Wr)]));case 1:var K=Z.a;return Ye(g([p(Xe,F.M,pn,Wr),g([Pi]),p(Xe,F.fB,K.bd,Al),g([Vl(0)]),p(Xe,F.M,T(K,qa),Dp),p(Xe,F.U,pn,Wr)]));default:var oe=Z.a,ve=Z.b;return Ye(g([p(Xe,F.M,T(ve,qa),Wr),g([Pi]),o($p,F.fB,oe),p(Fp,F.M,ve,Br(oe)),p(Xe,F.U,pn,Wr)]))}},Hp=function(e){return o(Sr,"width",Ae(e))},Ip=$(function(e,r){var n=g([V0(1),N0(0),T0(!0),L(B0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return A(n,"0",1);case 1:return A(o(B,M0,n),"1",1);default:var k=C.a;return A(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=wi(v),d=o(se,"height",Ae(s)+"px"),m=wi(u),f=m/s,h=o(So,function(C){return Gp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(se,"width",Ae(m)+"px"),w=e.aI,y=w,_=Y0(y);return p(E0,"div",g([o(se,"padding","0px"),b,d]),g([T(i,p(I0,t,g([Hp(Ze(m*c)),U0(Ze(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),h))]))}),Op=function(e){return o(Ip,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Jl=function(e){return e},ki=Jl({fU:.31271,fY:.32902}),Jp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Co,r.ce,r.b6),u=l;return{by:$n(u),ex:n,bF:vn(u),cK:0,bV:un(u),c_:1,fU:-t,fY:-i,c6:-c}}),qp=function(e){return e},Zp=function(e){return qp(1.2*o(Dn,2,e))},Ka=function(e){return e},Xp={$:0},Kp=Xp,ql=function(e){return e},Mi=function(e){var r=e;return r},Qp=function(e){e:for(;;){if(gr(e.e2,qe)&&gr(e.e3,qe))return Pe;if(o(fl,xe(e.e2),xe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=J(Mi(e.e3)/en),a=J(Mi(e.e2)/en),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Co,ql(1),e.b6),v=u;return{by:a*$n(v),ex:!1,bF:a*vn(v),cK:n/a,bV:a*un(v),c_:3,fU:i,fY:c,c6:l}}}},Di=function(e){return Qp({b6:e.b6,e2:e.ce,e3:qe,ei:e.ei})},e1=function(e){var r=e;return r},Zl=function(e){var r=p(_l,1667,25e3,e1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Jl({fU:n,fY:a})},Xl=function(e){return e},r1=Zl(Xl(12e3)),n1=Zl(Xl(5600)),a1=function(e){return{$:2,a:e}},t1=function(e){return a1(e)},o1=$(function(e,r){return{$:2,a:e,b:r}}),Kl=function(e){return{$:0,a:e}},Wn=function(e){var r=e;return r},i1=function(e){var r=e;return r.ex},c1=Kl(pn.a),l1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return p(dr,n,T(P,P),r)}),u1=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},v1=Q(function(e,r,n,a,t,i,c,l){var u=o(l1,i1,g([Wn(e),Wn(r),Wn(n),Wn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(o1,o(ee,u1,v),{bd:o(je,m,h),bK:o(je,w,_),bL:o(je,t,i),bM:o(je,c,l)})}else return c1}else return Kl({bd:o(je,e,r),bK:o(je,n,a),bL:o(je,t,i),bM:o(je,c,l)})}),$1=x(function(e,r,n){return Ca(v1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),f1=function(e){var r=o(Jp,P0(e.fB),{b6:n1,eH:e.fJ,ce:Ka(8e4)}),n=Di({b6:r1,ce:Ka(2e4),ei:e.ei}),a=Di({b6:ki,ce:Ka(15e3),ei:Ln(e.ei)}),t=p($1,r,n,a);return Op({b0:t1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Zp(15),bJ:t,bZ:Kp,b$:ki})},Ql=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),s1=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),eu=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ru=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),d1=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),m1=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),p1=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Do=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(p1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Ql,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(s1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(eu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(m1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ru,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(d1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Bo={$:0},b1=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),h=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),y=c,_=v;e=d,r=m,n=f,a=h,t=b,i=w,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),h1=x(function(e,r,n){var a=_a(e(r));return Ca(b1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=$(function(e,r){var n=e,a=r;return O(a,n)<1}),nu=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},au=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=kr(n),c=Mr(n),l=Dr(n),u=kr(a),v=Mr(a),s=Dr(a),d=kr(t),m=Mr(t),f=Dr(t);return nu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},tu=N$,ze=function(e){return tu(Fa(e))},ou=function(e){var r=e;return r},Va=function(e){return tu(ou(e))},g1=$(function(e,r){var n=e,a=r,t=o(ke,J(a.fU),o(ke,J(a.fY),J(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=br(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return sl}),_1=g1(ql(1)),iu=x(function(e,r,n){var a=o(ga,r,n),t=o(ga,e,r);return _1(o(vo,a,t))}),w1=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Va(p(iu,n,a,t));return A({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},y1=$(function(e,r){return{$:2,a:e,b:r}}),cu=y1({df:3,$7:0,dV:4}),x1=function(e){if(e.b){var r=e.a,n=e.b,a=cu(o(ee,w1,e)),t=p(h1,au,r,n);return L(Ql,t,e,a,0)}else return Bo},Ee=x(function(e,r,n){return A(e,r,n)}),lu=function(){var e=ar(1),r=ar(1),n=ar(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ie,.5,n),f=p(me,m,t,a),h=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Do(x1(g([p(Ee,c,h,f),p(Ee,c,s,h),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,h,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,h),p(Ee,s,d,w)])))}(),Yn={$:0},S1=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),C1=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(iu,u,l,c)),s={o:v,bT:ze(u)},d={o:v,bT:ze(l)},m={o:v,bT:ze(c)};return o(B,s,o(B,d,o(B,m,n)))}),L1=or,Ao=function(e){var r=e;return r.D},P1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Tt=4294967295>>>32-xn,kt=Hu,z1=x(function(e,r,n){e:for(;;){var a=Tt&r>>>e,t=o(kt,a,n);if(t.$){var v=t.a;return o(kt,Tt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),T1=function(e){return e>>>5<<5},k1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,T1(n))>-1?re(o(kt,Tt&e,i)):re(p(z1,a,e,t))}),Fo=function(e){var r=e;return r.ah},et=$(function(e,r){return o(k1,e,Fo(r))}),M1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(P1,x(function(c,l,u){return A(c,l,u)}),o(et,a,e),o(et,t,e),o(et,i,e))};return o(nl,r,Ao(e))},D1=x(function(e,r,n){e:for(;;){var a=o(Qt,Ue,e),t=a.a,i=a.b;if(O(mt(t),Ue)<0)return o(Dc,!0,{z:r,l:n,p:t});var c=i,l=o(B,kc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Vo=function(e){return e.b?p(D1,e,P,0):zc},B1=x(function(e,r,n){return e(r(n))}),A1=$(function(e,r){return!o(Wc,o(B1,ds,e),r)}),F1=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),V1=function(e){var r=e.a;return r},uu=$(function(e,r){var n=V1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(A1,a,r)?{D:r,ah:e}:{D:o(F1,a,r),ah:e}}),U1=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=U1({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Zr(r),a=Zr(e);return T(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Bi=p(Bn,0,0,0),rt=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Zc,o(na,e,r),t);if(v.$){var d={o:Bi,bT:ze(r)},m={o:Bi,bT:ze(e)},f=u+1,h=u;return A(o(B,A(n,h,f),o(B,A(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),R1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,w=e,y=r,_=v,C=a+3,k=_e(rt,s,m,f,b,r,_e(rt,d,s,h,f,r,_e(rt,m,d,b,h,r,t)));e=w,r=y,n=_,a=C,t=k;continue e}else{var N=t,E=N.a,R=N.b;return T(E,Ve(R))}}),E1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,w=p(Zn,o(na,m,s),f,p(Zn,o(na,s,d),h,p(Zn,o(na,d,m),b,t))),y=o(B,A(b,h,f),a),_=e,C=v,k=n+3,N=y,E=w;e=_,r=C,n=k,a=N,t=E;continue e}else return A(a,t,n)}),Lr=x(function(e,r,n){var a=M1(n),t=p(dr,C1(r),P,a),i=S(E1,r,a,0,P,L1),c=i.a,l=i.b,u=i.c,v=S(R1,r,l,a,0,A(c,P,u)),s=v.a,d=v.b,m=$l(d)?t:le(t,d);return p(S1,e,o(uu,Vo(m),s),o(Vn,m,s))}),Mt=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Ar,0,Br(e)-1)),ah:Vo(Ye(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},vu=function(e){switch(e.$){case 0:return Yn;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,Tr,Mt(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,Tr,Mt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return Yn;case 9:return Yn;default:return Yn}},Ai=vu(lu),$u={$:0},z=$u,be=$(function(e,r){return{$:1,a:e,b:r}}),j1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},N1=1029,W1=function(e){return{$:5,a:e}},fu=function(e){var r=e;return W1(r)},Y1=fu(N1),G1=1028,H1=fu(G1),Te=x(function(e,r,n){return r===1?e?o(B,Y1,n):o(B,H1,n):n}),su={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nt=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(Te,l,a,d),su,j1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Uo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},du={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(Te,l,a,d),du,Uo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),mu=$(function(e,r){return{$:3,a:e,b:r}}),I1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},pu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},O1=U(function(e,r,n,a){return o(mu,n,Q(function(t,i,c,l,u,v,s,d){return S(ne,d,pu,I1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Ro={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Un=function(e){var r=e;return r},Ua=W$,cr=he(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(Te,u,t,m),du,Ro,a,{aN:o(Ua,Un(r),e),b:l,c,d:s,e:i,f:v})}))}),J1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},q1=he(function(e,r,n,a,t){return o(mu,a,Q(function(i,c,l,u,v,s,d,m){return S(ne,m,pu,J1,t,{aN:o(Ua,Un(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},hu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Gn=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),hu,bu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},_u={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Z1=He(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ne,p(Te,v,i,f),_u,gu,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),wu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},X1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,Q(function(d,m,f,h,b,w,y,_){var C=y.a,k=y.b;return S(ne,p(Te,h,s,_),_u,wu,v,{b4:e,b8:r,b9:i,ca:a,P:k,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Hn=He(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ne,p(Te,v,i,f),hu,yu,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),K1=function(e){return{$:0,a:e}},Fi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),Q1=function(e){return L(ln,un(e),vn(e),$n(e),1)},Eo=L(ln,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Eo)}else{var n=r.a;return T(e,Q1(n))}}),xu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Fi,T(t,Eo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Fi,o(aa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,K1(a)}}),eb=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),In=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),rb=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),nb=function(e){return o(Be,e,1)},Dt=o(Be,0,0),Yr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Dt)}else{var n=r.a;return T(e,nb(n))}}),Su=U(function(e,r,n,a){var t=L(rb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(In,T(u,Eo),o(Yr,u,r),o(Yr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(In,o(aa,u,e),T(u,Dt),o(Yr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(In,o(aa,u,e),o(Yr,u,r),T(u,Dt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(In,o(aa,u,e),o(Yr,u,r),o(Yr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(eb,i,c,l)}}),ab={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},at=he(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(Te,u,t,m),su,ab,a,{b1:Un(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Cu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tb=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),Cu,gu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),ob=Ft(function(e,r,n,a,t,i,c,l,u){return o(be,c,Q(function(v,s,d,m,f,h,b,w){var y=b.a,_=b.b;return S(ne,p(Te,m,u,w),Cu,wu,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cv:t,b:d,c:s,aW:e,d:h,cS:n,e:v,a$:0,f})}))}),zn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),ib=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},cb=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},lb=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},ub=function(e){return p(me,ib(e),cb(e),lb(e))},Y=function(e){var r=El(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(ub(e)),eS:n/2,eT:a/2,eU:t/2}},jo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(nt,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(nt,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(nt,l,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ir,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(ir,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(ir,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(O1,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(at,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(at,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(at,l,v,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(q1,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(xu,s,E);if(d.$){var h=d.a,b=h.a;h.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(tb,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Z1,b,y,_,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Gn,m,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var C=e.b,k=e.c,N=e.d,E=e.e,R=L(Su,C,k,N,E);if(R.$){var Z=R.a,K=Z.a,oe=Z.b,ve=R.b,te=ve.a,de=ve.b,Me=R.c,Se=Me.a,mr=Me.b,pr=R.d,y=pr.a,_=pr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ju(ob,K,oe,te,de,Se,mr,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return X1(K)(oe)(te)(de)(Se)(mr)(y)(_)(Y(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=R.a,W=R.b,F=R.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(Hn,j,W,F,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),tt=function(e){var r=e;return r.fU},ot=function(e){var r=e;return r.fY},it=function(e){var r=e;return r.c6},vb=function(e){var r=e,n=it(r.c7),a=ot(r.c7),t=tt(r.c7),i=it(r.c5),c=ot(r.c5),l=tt(r.c5),u=it(r.c4),v=ot(r.c4),s=tt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},$b=function(e){var r=Fa(cn(e)),n=Ge(Nr(e)),a=Ge(jr(e)),t=Ge(Er(e));return{dp:vb(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},Gr=$(function(e,r){return{$:5,a:e,b:r}}),Lu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Ml,a,e);return o(Gr,i,t);case 1:return o(Gr,e,n);case 3:return o(Gr,e,n);case 2:return o(Gr,e,n);default:return o(Gr,e,n)}}),Pu=$(function(e,r){return o(Lu,$b(e),r)}),Ra=function(e){return{$:2,a:e}},fb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),sb=H$,db=G$,Vi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=db(a),h=f.fU,b=f.fY,w=f.c6,y=f.em,_=sb({em:y,fU:h*s,fY:b*d,c6:w*m});return Ca(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Bt=$(function(e,r){switch(r.$){case 0:return $u;case 5:var n=r.a,a=r.b;return o(Gr,n,o(Bt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(fb,e,t),o(Vi,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Vi,e,i));default:var c=r.a;return Wl(o(ee,Bt(e),c))}}),No=$(function(e,r){var n=r;return o(Bt,e,n)}),Wo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},zu=7683,Tu=7682,mb=p(zo,{cp:0,cO:0,c3:15},{a8:ye,bl:rn,bt:ye,bu:zu},{a8:ye,bl:rn,bt:ye,bu:Tu}),pb=p(zo,{cp:0,cO:0,c3:15},{a8:ye,bl:rn,bt:ye,bu:Tu},{a8:ye,bl:rn,bt:ye,bu:zu}),Yo=$(function(e,r){return e?o(B,pb,r):o(B,mb,r)}),bb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},hb=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return S(ne,o(Yo,i,v),bb,Wo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=hb(e);if(r.$)return z;var n=r.a;return Ra(n)},gb=U(function(e,r,n,a){var t=o(jo,n,lu),i=function(){var s=T(e,r);return s.a?s.b?Fn(g([t,wa(Ai)])):t:s.b?wa(Ai):z}(),c=go(a),l=c.a,u=c.b,v=c.c;return o(Pu,ho(a),o(No,A(l,u,v),i))}),_b=$(function(e,r){return L(gb,!0,!0,e,r)}),ku=$(function(e,r){return{$:0,a:e,b:r}}),wb=function(e){var r=co(e),n=r.cN,a=r.cd,t=r.b5;return p(Bn,n,a,t)},yb=function(e){return o(ku,0,Pt(wb(e)))},xb=function(e){var r=e;return r.k},wn=function(e){var r=e;return Fr(r)},Sb=$(function(e,r){var n=r;return n/e}),Ui=function(e){var r=e;return{fU:Fr(r),fY:Qr(r)}},Cb=$(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Va(a),bT:ze(n)},r)}),Lb=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bT),s=vn(l.bT),d=un(l.bT),m=o(ra,e,d),f=o(ke,r,d),h=o(ra,n,s),b=o(ke,a,s),w=o(ra,t,v),y=o(ke,i,v),_=u;e=m,r=f,n=h,a=b,t=w,i=y,c=_;continue e}else return nu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Mu=$(function(e,r){var n=$n(e.bT),a=vn(e.bT),t=un(e.bT);return Vt(Lb,t,t,a,a,n,n,r)}),Pb=function(e){var r=p(_c,Cb,P,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Ao(e)),i=o(Mu,n,a);return L(eu,i,e,t,0)}else return Bo},Ri=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),ya=function(e){var r=e;return Qr(r)},At=function(e){return Kr(2*en*e)},zb=Tr,Ei=zb({cB:Rr,c4:Il,c5:xo}),Du=function(){var e=72,r=o(Sb,e,At(1)),n=ar(1),a=Or(po),t=Or(bl),i=ar(1),c=o(ie,.5,i),l=p(me,qe,qe,c),u=o(ie,-.5,i),v=p(me,qe,qe,u),s=function(f){var h=o(ie,f,r),b=Or(o(Ri,Ei,Ui(h))),w=o(ie,wn(h),n),y=o(ie,ya(h),n),_=p(me,w,y,c),C=p(me,w,y,u),k=o(ma,e,f+1),N=o(ie,k,r),E=Or(o(Ri,Ei,Ui(N))),R=o(ie,wn(N),n),j=o(ie,ya(N),n),W=p(me,R,j,u),F=p(me,R,j,c);return g([A({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),A({o:b,bT:C},{o:E,bT:W},{o:E,bT:F}),A({o:b,bT:C},{o:E,bT:F},{o:b,bT:_}),A({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},d=o(ee,s,o(Ar,0,e-1)),m=Mt(Ye(d));return Do(Pb(m))}(),ji=vu(Du),Tb=function(e){var r=e;return r.eH},kb=function(e){var r=e;return r.cB},Mb=function(e){var r=Tb(e),n=$o(r),a=n.a,t=n.b;return fr({cB:kb(e),c4:a,c5:t,c7:r})},Db=function(e){var r=e;return r.e9},Bb=function(e){var r=e;return r.fu},Ab=U(function(e,r,n,a){var t=Mb(xb(a)),i=o(jo,n,Du),c=function(){var d=T(e,r);return d.a?d.b?Fn(g([i,wa(ji)])):i:d.b?wa(ji):z}(),l=Bb(a),u=l,v=Db(a),s=v;return o(Pu,t,o(No,A(u,u,s),c))}),Fb=$(function(e,r){return L(Ab,!0,!0,e,r)}),Ni={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Wi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},bn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Zr(a),l=Zr(t);return er({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},On=cu(g([A({cZ:0},{cZ:1},{cZ:2})])),Vb=$(function(e,r){var n=au(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,Q(function(_,C,k,N,E,R,j,W){return S(ne,p(Te,N,0,W),Ni,Uo,On,{aw:t,b:k,c:C,d:R,e:_,bq:bn(r),f:E})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,Q(function(_,C,k,N,E,R,j,W){return S(ne,p(Te,N,0,W),Ni,Ro,On,{aN:o(Ua,Un(c),i),b:k,c:C,d:R,e:_,bq:bn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(xu,l,f);if(u.$)return z;var v=u.a;return o(be,a,Q(function(_,C,k,N,E,R,j,W){var F=j.a,Z=j.b;return S(ne,p(Te,N,0,W),Wi,bu,On,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cq:v,b:k,c:C,d:R,e:_,bq:bn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=L(Su,s,d,m,f);if(h.$)return z;var b=h.a,w=h.b,y=h.c;return o(be,a,Q(function(_,C,k,N,E,R,j,W){var F=j.a,Z=j.b;return S(ne,p(Te,N,0,W),Wi,yu,On,{b3:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cu:y,b:k,c:C,d:R,cR:w,e:_,bq:bn(r),f:E})}))}}),Ub=function(){var e=g([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=g([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Vn,e,r)}(),Rb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Yi=function(e){return Ra(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(Yo,t,u),Rb,Wo,Ub,{b:a,c:n,d:c,e:r,bY:l,bq:bn(e),f:i})}))},Eb=U(function(e,r,n,a){var t=o(Vb,n,a),i=T(e,r);return i.a?i.b?Fn(g([t,Yi(a)])):t:i.b?Yi(a):z}),jb=$(function(e,r){return L(Eb,!0,!0,e,r)}),Nb=$(function(e,r){var n=Dr(r),a=Dr(e),t=Mr(r),i=Mr(e),c=kr(r),l=kr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Wb=function(e){var r=_o(e),n=r.a,a=r.b;return o(Nb,n,a)},Gi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yb=$(function(e,r){return{$:1,a:e,b:r}}),Gb=Yb({df:2,$7:0,dV:1}),Hi=Gb(g([T({dw:0},{dw:1})])),Hb=$(function(e,r){var n=Wb(r),a=Y(n),t=_o(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,Q(function(v,s,d,m,f,h,b,w){return S(ne,w,Gi,Uo,Hi,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,Q(function(s,d,m,f,h,b,w,y){return S(ne,y,Gi,Ro,Hi,{aN:o(Ua,Un(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return z;default:return z}}),Ib=$(function(e,r){return o(Hb,e,r)}),Jn=function(e){return Kr(en*(e/180))},Ii=$(function(e,r){var n=e,a=r;return n/a}),Ob=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Oi=$(function(e,r){return e<1?P:S(Ob,0,e,e,r,P)}),Jb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bT:ze(n),L:o(Be,c,l)},r)}),qb=function(e){var r=p(_c,Jb,P,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Ao(e)),i=o(Mu,n,a);return L(ru,i,e,t,0)}else return Bo},Bu=$(function(e,r){var n=e,a=r,t=Fr(a);return{fU:t*Fr(n),fY:t*Qr(n),c6:Qr(a)}}),Zb=function(){var e=ar(1),r=72,n=o(Ar,0,r-1),a=o(Oi,r,o(zn,qe,At(1))),t=Xt(r/2),i=o(Ar,0,t-1),c=o(Oi,t,o(zn,Jn(90),Jn(-90))),l=Vo(Ye(o(ee,function(s){return o(ee,function(d){return{o:Or(o(Bu,s,d)),bT:p(me,o(ie,wn(d)*wn(s),e),o(ie,wn(d)*ya(s),e),o(ie,ya(d),e)),L:T(o(Ii,s,At(1)),o(Ii,o(gn,Jn(90),d),Jn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ye(o(ee,function(s){return Ye(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([A(b,h,m),A(b,m,f)])},i))},n));return Do(qb(o(uu,l,v)))}(),xa=72,qn=2*xa,Xb=$(function(e,r){e:for(;;){var n=qn+1,a=o(ma,qn,2*e+3),t=o(ma,qn,2*e+2),i=2*e+1,c=2*e,l=qn,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Kb=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Qb=$(function(e,r){e:for(;;){var n=p(Kb,0,2*en,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),e3=function(){var e=o(Qb,xa-1,g([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Xb,xa-1,P);return o(Vn,e,r)}(),r3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Ji=function(e){return Ra(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(Yo,!0,u),r3,Wo,e3,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},n3=function(e){var r=ou(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},a3=$(function(e,r){return o(Lu,n3(e),r)}),t3=U(function(e,r,n,a){var t=o(jo,n,Zb),i=function(){var u=T(e,r);return u.a?u.b?Fn(g([t,Ji()])):t:u.b?Ji():z}(),c=yo(a),l=c;return o(a3,o(ga,Rr,wo(a)),o(No,A(l,l,l),i))}),o3=$(function(e,r){return L(t3,!0,!0,e,r)}),i3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),c3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),l3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ku,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(i3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(gl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(c3,n,a,t,i,c)}},u3=l3,Au=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(_b,t,r)]);case 1:var t=e.a,n=e.b;return g([o(jb,t,n)]);case 3:var t=e.a,a=e.b;return g([o(o3,u3(t),a)]);case 2:var t=e.a,i=e.b;return g([o(Fb,t,i)]);case 4:var c=e.a,l=e.b;return g([o(Ib,yb(c),l)]);default:var u=e.a;return o(So,Au,u)}},v3=function(e){return o(So,Au,e)},$3=$(function(e,r){return f1({aI:C0(e.es),ev:e.ev,aJ:L0(.5),cb:e.cb,aK:T(_i(Ze(e.cT.fS)),_i(Ze(e.cT.eW))),aP:v3(r),fB:!0,fJ:o(Bu,Kr(e.fI),Kr(e.fK)),ei:Ol})}),f3=$(function(e,r){return o($3,{es:Rm,ev:Um,cb:e.cb,cT:e.cT,fI:0,fK:0},o(S0,e,r))}),s3=p(hm,f3,_m,gm);const d3={Main:{init:s3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",fa(Cn)))},o(M,"left",X))},o(M,"pressedKeys",fa(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},m3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-V.clock;b<.009||(V.dt=b,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},p3=()=>{ct("pointerdown"),ct("wheel"),ct("keydown")},ct=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},b3=d3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});p3();m3(b3);
