const Xu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};Xu();function Ar(e,r,n){return n.a=e,n.f=r,n}function s(e){return Ar(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Ar(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function X(e){return Ar(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function ke(e){return Ar(5,e,function(r){return function(n){return function(a){return function(i){return function(l){return e(r,n,a,i,l)}}}}})}function ir(e){return Ar(6,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return e(r,n,a,i,l,u)}}}}}})}function Ha(e){return Ar(7,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return e(r,n,a,i,l,u,$)}}}}}}})}function ie(e){return Ar(8,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return e(r,n,a,i,l,u,$,v)}}}}}}}})}function yo(e){return Ar(9,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return e(r,n,a,i,l,u,$,v,f)}}}}}}}}})}function c(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function t(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function k(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function P(e,r,n,a,i,l){return e.a===5?e.f(r,n,a,i,l):e(r)(n)(a)(i)(l)}function Ae(e,r,n,a,i,l,u){return e.a===6?e.f(r,n,a,i,l,u):e(r)(n)(a)(i)(l)(u)}function So(e,r,n,a,i,l,u,$){return e.a===7?e.f(r,n,a,i,l,u,$):e(r)(n)(a)(i)(l)(u)($)}function Ua(e,r,n,a,i,l,u,$,v){return e.a===8?e.f(r,n,a,i,l,u,$,v):e(r)(n)(a)(i)(l)(u)($)(v)}function Nu(e,r,n,a,i,l,u,$,v,f){return e.a===9?e.f(r,n,a,i,l,u,$,v,f):e(r)(n)(a)(i)(l)(u)($)(v)(f)}var Wu=[];function Iu(e){return e.length}var Gu=y(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),Hu=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),Uu=s(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=n[l];return i[e]=r,i});s(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=c(e,n[i],r);return r});var Ou=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=c(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});y(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=c(e,r+l,n[l]);return i});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var l=a+i,u=new Array(l),$=0;$<a;$++)u[$]=r[$];for(var $=0;$<i;$++)u[$+a]=n[$];return u});s(function(e,r){return r});s(function(e,r){return console.log(e+": "+Ju()),r});function Ju(e){return"<internals>"}function pn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Qe(e,r){for(var n,a=[],i=Vt(e,r,0,a);i&&(n=a.pop());i=Vt(n.a,n.b,0,a));return i}function Vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&pn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=r0(e),r=r0(r));for(var i in e)if(!Vt(e[i],r[i],n+1,a))return!1;return!0}s(Qe);s(function(e,r){return!Qe(e,r)});function Z(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=Z(e.a,r.a))||(n=Z(e.b,r.b))?n:Z(e.c,r.c);for(;e.b&&r.b&&!(n=Z(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return Z(e,r)<0});s(function(e,r){return Z(e,r)<1});s(function(e,r){return Z(e,r)>0});s(function(e,r){return Z(e,r)>=0});var qu=s(function(e,r){var n=Z(e,r);return n<0?xc:n?X1:wc}),Zn=0;function T(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function U(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s($e);function $e(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=fr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=fr(e.a,r);return n}var C={$:0};function fr(e,r){return{$:1,a:e,b:r}}var Zu=s(fr);function g(e){for(var r=C,n=e.length;n--;)r=fr(e[n],r);return r}function Oa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Yu=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(c(e,r.a,n.a));return g(a)});X(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(t(e,r.a,n.a,a.a));return g(i)});ke(function(e,r,n,a,i){for(var l=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)l.push(k(e,r.a,n.a,a.a,i.a));return g(l)});ir(function(e,r,n,a,i,l){for(var u=[];r.b&&n.b&&a.b&&i.b&&l.b;r=r.b,n=n.b,a=a.b,i=i.b,l=l.b)u.push(P(e,r.a,n.a,a.a,i.a,l.a));return g(u)});s(function(e,r){return g(Oa(r).sort(function(n,a){return Z(e(n),e(a))}))});s(function(e,r){return g(Oa(r).sort(function(n,a){var i=c(e,n,a);return i===wc?0:i===xc?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var Qu=s(Math.pow);s(function(e,r){return r%e});var Ku=s(function(e,r){var n=r%e;return e===0?pn(11):n>0&&e<0||n<0&&e>0?n+e:n}),e$=Math.PI,r$=Math.cos,n$=Math.sin,a$=Math.tan,t$=Math.atan;s(Math.atan2);function o$(e){return e}function i$(e){return e===1/0||e===-1/0}var c$=Math.ceil,l$=Math.floor,u$=Math.round,$$=Math.sqrt,Ni=Math.log,v$=isNaN;function s$(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var f$=s(function(e,r){return e+r});function d$(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ce(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}s(function(e,r){return e+r});function m$(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var l=r.charCodeAt(i);if(55296<=l&&l<=56319){a[i]=e(r[i]+r[i+1]),i+=2;continue}a[i]=e(r[i]),i++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var l=r[i],u=r.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=r[i],i++),e(l)&&n.push(l)}return n.join("")});function p$(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,i=0;i<a;){var l=n[i],u=n.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=n[i],i++),r=c(e,l,r)}return r});var g$=y(function(e,r,n){for(var a=n.length;a--;){var i=n[a],l=n.charCodeAt(a);56320<=l&&l<=57343&&(a--,i=n[a]+i),r=c(e,i,r)}return r}),h$=s(function(e,r){return r.split(e)}),b$=s(function(e,r){return r.join(e)}),_$=y(function(e,r,n){return n.slice(e,r)});function w$(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var x$=s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),y$=s(function(e,r){return r.indexOf(e)>-1}),S$=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var C$=s(function(e,r){var n=e.length;if(n<1)return C;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return g(i)});function q0(e){return e+""}function P$(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var l=e.charCodeAt(i);if(l<48||57<l)return Y;r=10*r+l-48}return i==a?Y:ce(n==45?-r:r)}function L$(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ce(r):Y}function k$(e){return Oa(e).join("")}function z$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function T$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function M$(e){return{$:0,a:e}}function D$(e){return{$:1,a:e}}function Co(e){return{$:2,b:e}}var R$=Co(function(e){return typeof e=="boolean"?de(e):lr("a BOOL",e)}),A$=Co(function(e){return typeof e=="number"?de(e):lr("a FLOAT",e)}),B$=Co(function(e){return typeof e=="string"?de(e):e instanceof String?de(e+""):lr("a STRING",e)});function j$(e){return{$:3,b:e}}var F$=s(function(e,r){return{$:6,d:e,b:r}});s(function(e,r){return{$:7,e,b:r}});function Br(e,r){return{$:9,f:e,g:r}}var E$=s(function(e,r){return{$:10,b:r,h:e}}),V$=s(function(e,r){return Br(e,[r])}),X$=y(function(e,r,n){return Br(e,[r,n])});X(function(e,r,n,a){return Br(e,[r,n,a])});ke(function(e,r,n,a,i){return Br(e,[r,n,a,i])});ir(function(e,r,n,a,i,l){return Br(e,[r,n,a,i,l])});Ha(function(e,r,n,a,i,l,u){return Br(e,[r,n,a,i,l,u])});ie(function(e,r,n,a,i,l,u,$){return Br(e,[r,n,a,i,l,u,$])});yo(function(e,r,n,a,i,l,u,$,v){return Br(e,[r,n,a,i,l,u,$,v])});var N$=s(function(e,r){try{var n=JSON.parse(r);return Ue(e,n)}catch(a){return Te(c(Fo,"This is not valid JSON! "+a.message,r))}}),Z0=s(function(e,r){return Ue(e,r)});function Ue(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?de(e.c):lr("null",r);case 3:return ca(r)?Wi(e.b,r,g):lr("a LIST",r);case 4:return ca(r)?Wi(e.b,r,W$):lr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return lr("an OBJECT with a field named `"+n+"`",r);var f=Ue(e.b,r[n]);return rr(f)?f:Te(c(n0,n,f.a));case 7:var a=e.e;if(!ca(r))return lr("an ARRAY",r);if(a>=r.length)return lr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var f=Ue(e.b,r[a]);return rr(f)?f:Te(c(yc,a,f.a));case 8:if(typeof r!="object"||r===null||ca(r))return lr("an OBJECT",r);var i=C;for(var l in r)if(r.hasOwnProperty(l)){var f=Ue(e.b,r[l]);if(!rr(f))return Te(c(n0,l,f.a));i=fr(T(l,f.a),i)}return de(xe(i));case 9:for(var u=e.f,$=e.g,v=0;v<$.length;v++){var f=Ue($[v],r);if(!rr(f))return f;u=u(f.a)}return de(u);case 10:var f=Ue(e.b,r);return rr(f)?Ue(e.h(f.a),r):f;case 11:for(var m=C,p=e.g;p.b;p=p.b){var f=Ue(p.a,r);if(rr(f))return f;m=fr(f.a,m)}return Te(N1(xe(m)));case 1:return Te(c(Fo,e.a,r));case 0:return de(e.a)}}function Wi(e,r,n){for(var a=r.length,i=new Array(a),l=0;l<a;l++){var u=Ue(e,r[l]);if(!rr(u))return Te(c(yc,l,u.a));i[l]=u.a}return de(n(i))}function ca(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function W$(e){return c(a3,e.length,function(r){return e[r]})}function lr(e,r){return Te(c(Fo,"Expecting "+e,r))}function rn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return rn(e.b,r.b);case 6:return e.d===r.d&&rn(e.b,r.b);case 7:return e.e===r.e&&rn(e.b,r.b);case 9:return e.f===r.f&&Ii(e.g,r.g);case 10:return e.h===r.h&&rn(e.b,r.b);case 11:return Ii(e.g,r.g)}}function Ii(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!rn(e[a],r[a]))return!1;return!0}var I$=s(function(e,r){return JSON.stringify(r,null,e)+""});function Y0(e){return e}function G$(){return[]}function H$(){return{}}var U$=y(function(e,r,n){return n[e]=r,n});function O$(e){return s(function(r,n){return n.push(e(r)),n})}function Ur(e){return{$:0,a:e}}function J$(e){return{$:1,a:e}}function xr(e){return{$:2,b:e,c:null}}var Xt=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function q$(e){return{$:5,b:e}}var Z$=0;function Po(e){var r={$:0,e:Z$++,f:e,g:null,h:[]};return Lo(r),r}function Q0(e){return xr(function(r){r(Ur(Po(e)))})}function K0(e,r){e.h.push(r),Lo(e)}var Y$=s(function(e,r){return xr(function(n){K0(e,r),n(Ur(Zn))})}),_t=!1,Gi=[];function Lo(e){if(Gi.push(e),!_t){for(_t=!0;e=Gi.shift();)Q$(e);_t=!1}}function Q$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Lo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}X(function(e,r,n,a){return ko(r,a,e.fZ,e.gR,e.gJ,function(){return function(){}})});function ko(e,r,n,a,i,l){var u=c(Z0,e,r?r.flags:void 0);rr(u)||pn(2);var $={},v=n(u.a),f=v.a,m=l(h,f),p=K$($,h);function h(d,_){var b=c(a,d,f);m(f=b.a,_),Ui($,b.b,i(f))}return Ui($,v.b,i(f)),p?{ports:p}:{}}var vr={};function K$(e,r){var n;for(var a in vr){var i=vr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=rv(i,r)}return n}function ev(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function rv(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,l=e.e,u=e.f;function $(v){return c(Xt,$,q$(function(f){var m=f.a;return f.$===0?t(i,n,m,v):l&&u?k(a,n,m.i,m.j,v):t(a,n,l?m.i:m.j,v)}))}return n.h=Po(c(Xt,$,e.b))}var nv=s(function(e,r){return xr(function(n){e.g(r),n(Ur(Zn))})});s(function(e,r){return c(Y$,e.h,{$:0,a:r})});function ec(e){return function(r){return{$:1,k:e,l:r}}}function av(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var Hi=[],wt=!1;function Ui(e,r,n){if(Hi.push({p:e,q:r,r:n}),!wt){wt=!0;for(var a;a=Hi.shift();)tv(a.p,a.q,a.r);wt=!1}}function tv(e,r,n){var a={};La(!0,r,a,null),La(!1,n,a,null);for(var i in e)K0(e[i],{$:"fx",a:a[i]||{i:C,j:C}})}function La(e,r,n,a){switch(r.$){case 1:var i=r.k,l=ov(e,i,a,r.l);n[i]=iv(e,l,n[i]);return;case 2:for(var u=r.m;u.b;u=u.b)La(e,u.a,n,a);return;case 3:La(e,r.o,n,{s:r.n,t:a});return}}function ov(e,r,n,a){function i(u){for(var $=n;$;$=$.t)u=$.s(u);return u}var l=e?vr[r].e:vr[r].f;return c(l,i,a)}function iv(e,r,n){return n=n||{i:C,j:C},e?n.i=fr(r,n.i):n.j=fr(r,n.j),n}function cv(e){vr[e]&&pn(3)}s(function(e,r){return r});function lv(e,r){return cv(e),vr[e]={f:uv,u:r,a:$v},ec(e)}var uv=s(function(e,r){return function(n){return e(r(n))}});function $v(e,r){var n=C,a=vr[e].u,i=Ur(null);vr[e].b=i,vr[e].c=y(function(u,$,v){return n=$,i});function l(u){var $=c(Z0,a,u);rr($)||pn(4,e,$.a);for(var v=$.a,f=n;f.b;f=f.b)r(f.a(v))}return{send:l}}var ka,_r=typeof document!="undefined"?document:{};function zo(e,r){e.appendChild(r)}X(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(Lr(e,function(){}),i),{}});function Nt(e){return{$:0,a:e}}var rc=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b||0,i.push(u)}return l+=i.length,{$:1,c:r,d:To(n),e:i,f:e,b:l}})}),er=rc(void 0),vv=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b.b||0,i.push(u)}return l+=i.length,{$:2,c:r,d:To(n),e:i,f:e,b:l}})}),sv=vv(void 0);function fv(e,r,n,a){return{$:3,d:To(e),g:r,h:n,i:a}}var dv=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function jr(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return jr([e,r],function(){return e(r)})});y(function(e,r,n){return jr([e,r,n],function(){return c(e,r,n)})});X(function(e,r,n,a){return jr([e,r,n,a],function(){return t(e,r,n,a)})});ke(function(e,r,n,a,i){return jr([e,r,n,a,i],function(){return k(e,r,n,a,i)})});ir(function(e,r,n,a,i,l){return jr([e,r,n,a,i,l],function(){return P(e,r,n,a,i,l)})});Ha(function(e,r,n,a,i,l,u){return jr([e,r,n,a,i,l,u],function(){return Ae(e,r,n,a,i,l,u)})});ie(function(e,r,n,a,i,l,u,$){return jr([e,r,n,a,i,l,u,$],function(){return So(e,r,n,a,i,l,u,$)})});yo(function(e,r,n,a,i,l,u,$,v){return jr([e,r,n,a,i,l,u,$,v],function(){return Ua(e,r,n,a,i,l,u,$,v)})});var nc=s(function(e,r){return{$:"a0",n:e,o:r}}),mv=s(function(e,r){return{$:"a1",n:e,o:r}}),ac=s(function(e,r){return{$:"a2",n:e,o:r}}),gr=s(function(e,r){return{$:"a3",n:e,o:r}}),pv=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function gv(e){return e=="script"?"p":e}function hv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}s(function(e,r){return r.$==="a0"?c(nc,r.n,bv(e,r.o)):r});function bv(e,r){var n=Io(r);return{$:r.$,a:n?t(Rc,n<3?_v:wv,Pe(e),r.a):c(Nn,e,r.a)}}var _v=s(function(e,r){return T(e(r.a),r.b)}),wv=s(function(e,r){return{aA:e(r.aA),dD:r.dD,dq:r.dq}});function To(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,l=n.o;if(a==="a2"){i==="className"?Oi(r,i,l):r[i]=l;continue}var u=r[a]||(r[a]={});a==="a3"&&i==="class"?Oi(u,i,l):u[i]=l}return r}function Oi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Lr(e,r){var n=e.$;if(n===5)return Lr(e.k||(e.k=e.m()),r);if(n===0)return _r.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var l={j:i,p:r},u=Lr(a,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return Wt(u,r,e.d),u}var u=e.f?_r.createElementNS(e.f,e.c):_r.createElement(e.c);ka&&e.c=="a"&&u.addEventListener("click",ka(u)),Wt(u,r,e.d);for(var $=e.e,v=0;v<$.length;v++)zo(u,Lr(n===1?$[v]:$[v].b,r));return u}function Wt(e,r,n){for(var a in n){var i=n[a];a==="a1"?xv(e,i):a==="a0"?Cv(e,r,i):a==="a3"?yv(e,i):a==="a4"?Sv(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function xv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function yv(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Sv(e,r){for(var n in r){var a=r[n],i=a.f,l=a.o;typeof l!="undefined"?e.setAttributeNS(i,n,l):e.removeAttributeNS(i,n)}}function Cv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var l=n[i],u=a[i];if(!l){e.removeEventListener(i,u),a[i]=void 0;continue}if(u){var $=u.q;if($.$===l.$){u.q=l;continue}e.removeEventListener(i,u)}u=Pv(r,l),e.addEventListener(i,u,Mo&&{passive:Io(l)<2}),a[i]=u}}var Mo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Mo=!0}}))}catch{}function Pv(e,r){function n(a){var i=n.q,l=Ue(i.a,a);if(!!rr(l)){for(var u=Io(i),$=l.a,v=u?u<3?$.a:$.aA:$,f=u==1?$.b:u==3&&$.dD,m=(f&&a.stopPropagation(),(u==2?$.b:u==3&&$.dq)&&a.preventDefault(),e),p,h;p=m.j;){if(typeof p=="function")v=p(v);else for(var h=p.length;h--;)v=p[h](v);m=m.p}m(v,f)}}return n.q=r,n}function Lv(e,r){return e.$==r.$&&rn(e.a,r.a)}function tc(e,r){var n=[];return nr(e,r,n,0),n}function ze(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function nr(e,r,n,a){if(e!==r){var i=e.$,l=r.$;if(i!==l)if(i===1&&l===2)r=Bv(r),l=1;else{ze(n,0,a,r);return}switch(l){case 5:for(var u=e.l,$=r.l,v=u.length,f=v===$.length;f&&v--;)f=u[v]===$[v];if(f){r.k=e.k;return}r.k=r.m();var m=[];nr(e.k,r.k,m,0),m.length>0&&ze(n,1,a,m);return;case 4:for(var p=e.j,h=r.j,d=!1,_=e.k;_.$===4;)d=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var b=r.k;b.$===4;)d=!0,typeof h!="object"?h=[h,b.j]:h.push(b.j),b=b.k;if(d&&p.length!==h.length){ze(n,0,a,r);return}(d?!kv(p,h):p!==h)&&ze(n,2,a,h),nr(_,b,n,a+1);return;case 0:e.a!==r.a&&ze(n,3,a,r.a);return;case 1:Ji(e,r,n,a,zv);return;case 2:Ji(e,r,n,a,Tv);return;case 3:if(e.h!==r.h){ze(n,0,a,r);return}var x=Do(e.d,r.d);x&&ze(n,4,a,x);var S=r.i(e.g,r.g);S&&ze(n,5,a,S);return}}}function kv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ji(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){ze(n,0,a,r);return}var l=Do(e.d,r.d);l&&ze(n,4,a,l),i(e,r,n,a)}function Do(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var l=Do(e[i],r[i]||{},i);l&&(a=a||{},a[i]=l);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var u=e[i],$=r[i];u===$&&i!=="value"&&i!=="checked"||n==="a0"&&Lv(u,$)||(a=a||{},a[i]=$)}for(var v in r)v in e||(a=a||{},a[v]=r[v]);return a}function zv(e,r,n,a){var i=e.e,l=r.e,u=i.length,$=l.length;u>$?ze(n,6,a,{v:$,i:u-$}):u<$&&ze(n,7,a,{v:u,e:l});for(var v=u<$?u:$,f=0;f<v;f++){var m=i[f];nr(m,l[f],n,++a),a+=m.b||0}}function Tv(e,r,n,a){for(var i=[],l={},u=[],$=e.e,v=r.e,f=$.length,m=v.length,p=0,h=0,d=a;p<f&&h<m;){var _=$[p],b=v[h],x=_.a,S=b.a,w=_.b,L=b.b,B=void 0,G=void 0;if(x===S){d++,nr(w,L,i,d),d+=w.b||0,p++,h++;continue}var W=$[p+1],N=v[h+1];if(W){var I=W.a,H=W.b;G=S===I}if(N){var E=N.a,Q=N.b;B=x===E}if(B&&G){d++,nr(w,Q,i,d),Pn(l,i,x,L,h,u),d+=w.b||0,d++,Ln(l,i,x,H,d),d+=H.b||0,p+=2,h+=2;continue}if(B){d++,Pn(l,i,S,L,h,u),nr(w,Q,i,d),d+=w.b||0,p+=1,h+=2;continue}if(G){d++,Ln(l,i,x,w,d),d+=w.b||0,d++,nr(H,L,i,d),d+=H.b||0,p+=2,h+=1;continue}if(W&&I===E){d++,Ln(l,i,x,w,d),Pn(l,i,S,L,h,u),d+=w.b||0,d++,nr(H,Q,i,d),d+=H.b||0,p+=2,h+=2;continue}break}for(;p<f;){d++;var _=$[p],w=_.b;Ln(l,i,_.a,w,d),d+=w.b||0,p++}for(;h<m;){var ne=ne||[],b=v[h];Pn(l,i,b.a,b.b,void 0,ne),h++}(i.length>0||u.length>0||ne)&&ze(n,8,a,{w:i,x:u,y:ne})}var oc="_elmW6BL";function Pn(e,r,n,a,i,l){var u=e[n];if(!u){u={c:0,z:a,r:i,s:void 0},l.push({r:i,A:u}),e[n]=u;return}if(u.c===1){l.push({r:i,A:u}),u.c=2;var $=[];nr(u.z,a,$,u.r),u.r=i,u.s.s={w:$,A:u};return}Pn(e,r,n+oc,a,i,l)}function Ln(e,r,n,a,i){var l=e[n];if(!l){var u=ze(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:u};return}if(l.c===0){l.c=2;var $=[];nr(a,l.z,$,i),ze(r,9,i,{w:$,A:l});return}Ln(e,r,n+oc,a,i)}function ic(e,r,n,a){kn(e,r,n,0,0,r.b,a)}function kn(e,r,n,a,i,l,u){for(var $=n[a],v=$.r;v===i;){var f=$.$;if(f===1)ic(e,r.k,$.s,u);else if(f===8){$.t=e,$.u=u;var m=$.s.w;m.length>0&&kn(e,r,m,0,i,l,u)}else if(f===9){$.t=e,$.u=u;var p=$.s;if(p){p.A.s=e;var m=p.w;m.length>0&&kn(e,r,m,0,i,l,u)}}else $.t=e,$.u=u;if(a++,!($=n[a])||(v=$.r)>l)return a}var h=r.$;if(h===4){for(var d=r.k;d.$===4;)d=d.k;return kn(e,d,n,a,i+1,l,e.elm_event_node_ref)}for(var _=r.e,b=e.childNodes,x=0;x<_.length;x++){i++;var S=h===1?_[x]:_[x].b,w=i+(S.b||0);if(i<=v&&v<=w&&(a=kn(b[x],S,n,a,i,w,u),!($=n[a])||(v=$.r)>l))return a;i=w}return a}function cc(e,r,n,a){return n.length===0?e:(ic(e,r,n,a),za(e,n))}function za(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,l=Mv(i,a);i===e&&(e=l)}return e}function Mv(e,r){switch(r.$){case 0:return Dv(e,r.s,r.u);case 4:return Wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return za(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var l=r.s,a=0;a<l.i;a++)e.removeChild(e.childNodes[l.v]);return e;case 7:for(var l=r.s,n=l.e,a=l.v,i=e.childNodes[a];a<n.length;a++)e.insertBefore(Lr(n[a],r.u),i);return e;case 9:var l=r.s;if(!l)return e.parentNode.removeChild(e),e;var u=l.A;return typeof u.r!="undefined"&&e.parentNode.removeChild(e),u.s=za(e,l.w),e;case 8:return Rv(e,r);case 5:return r.s(e);default:pn(10)}}function Dv(e,r,n){var a=e.parentNode,i=Lr(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Rv(e,r){var n=r.s,a=Av(n.y,r);e=za(e,n.w);for(var i=n.x,l=0;l<i.length;l++){var u=i[l],$=u.A,v=$.c===2?$.s:Lr($.z,r.u);e.insertBefore(v,e.childNodes[u.r])}return a&&zo(e,a),e}function Av(e,r){if(!!e){for(var n=_r.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],l=i.A;zo(n,l.c===2?l.s:Lr(l.z,r.u))}return n}}function Ro(e){if(e.nodeType===3)return Nt(e.textContent);if(e.nodeType!==1)return Nt("");for(var r=C,n=e.attributes,a=n.length;a--;){var i=n[a],l=i.name,u=i.value;r=fr(c(gr,l,u),r)}for(var $=e.tagName.toLowerCase(),v=C,f=e.childNodes,a=f.length;a--;)v=fr(Ro(f[a]),v);return t(er,$,r,v)}function Bv(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var jv=X(function(e,r,n,a){return ko(r,a,e.fZ,e.gR,e.gJ,function(i,l){var u=e.gT,$=a.node,v=Ro($);return lc(l,function(f){var m=u(f),p=tc(v,m);$=cc($,v,p,i),v=m})})});X(function(e,r,n,a){return ko(r,a,e.fZ,e.gR,e.gJ,function(i,l){var u=e.dA&&e.dA(i),$=e.gT,v=_r.title,f=_r.body,m=Ro(f);return lc(l,function(p){ka=u;var h=$(p),d=er("body")(C)(h.fo),_=tc(m,d);f=cc(f,m,_,i),m=d,ka=0,v!==h.gN&&(_r.title=v=h.gN)})})});var Ta=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function lc(e,r){r(e);var n=0;function a(){n=n===1?0:(Ta(a),r(e),1)}return function(i,l){e=i,l?(r(e),n===2&&(n=1)):(n===0&&Ta(a),n=2)}}s(function(e,r){return c(Uo,Go,xr(function(){r&&history.go(r),e()}))});s(function(e,r){return c(Uo,Go,xr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return c(Uo,Go,xr(function(){history.replaceState({},"",r),e()}))});var Fv={addEventListener:function(){},removeEventListener:function(){}},Ev=typeof window!="undefined"?window:Fv;y(function(e,r,n){return Q0(xr(function(a){function i(l){Po(n(l))}return e.addEventListener(r,i,Mo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});s(function(e,r){var n=Ue(e,r);return rr(n)?ce(n.a):Y});function uc(e,r){return xr(function(n){Ta(function(){var a=document.getElementById(e);n(a?Ur(r(a)):J$(o3(e)))})})}function Vv(e){return xr(function(r){Ta(function(){r(Ur(e()))})})}s(function(e,r){return uc(r,function(n){return n[e](),Zn})});s(function(e,r){return Vv(function(){return Ev.scroll(e,r),Zn})});y(function(e,r,n){return uc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Zn})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var Xv=s(function(e,r){var n="g";e.gh&&(n+="m"),e.fp&&(n+="i");try{return ce(new RegExp(r,n))}catch{return Y}});s(function(e,r){return r.match(e)!==null});var Nv=y(function(e,r,n){for(var a=[],i=0,l=n,u=r.lastIndex,$=-1,v;i++<e&&(v=r.exec(l))&&$!=r.lastIndex;){for(var f=v.length-1,m=new Array(f);f>0;){var p=v[f];m[--f]=p?ce(p):Y}a.push(k(nl,v[0],v.index,i,g(m))),$=r.lastIndex}return r.lastIndex=u,g(a)});X(function(e,r,n,a){var i=0;function l(u){if(i++>=e)return u;for(var $=arguments.length-3,v=new Array($);$>0;){var f=arguments[$];v[--$]=f?ce(f):Y}return n(k(nl,u,arguments[arguments.length-2],i,g(v)))}return a.replace(r,l)});y(function(e,r,n){for(var a=n,i=[],l=r.lastIndex,u=r.lastIndex;e--;){var $=r.exec(a);if(!$)break;i.push(a.slice(l,$.index)),l=r.lastIndex}return i.push(a.slice(l)),r.lastIndex=u,g(i)});var Wv=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Iv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Iv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ao=new Float64Array(3),qi=new Float64Array(3),Zi=new Float64Array(3),Gv=y(function(e,r,n){return new Float64Array([e,r,n])}),Hv=function(e){return e[0]},Uv=function(e){return e[1]},Ov=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var Jv=function(e){return new Float64Array([e.gX,e.g$,e.dR])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function $c(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s($c);function vc(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ma($c(e,r,n),n)}s(vc);function sc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Ma(e,r){r===void 0&&(r=new Float64Array(3));var n=1/sc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var qv=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),zn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(zn);function It(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(It);s(function(e,r){var n,a=Ao,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=zn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(zn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(zn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(zn(r,a)+e[14])/n,i});var Zv=X(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Yv=function(e){return{gX:e[0],g$:e[1],dR:e[2],fe:e[3]}},Qv=function(e){return new Float64Array([e.gX,e.g$,e.dR,e.fe])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Kv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Kv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+l*l)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return n*n+a*a+i*i+l*l});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var e1=new Float64Array(16),r1=new Float64Array(16),n1=function(e){var r=new Float64Array(16);return r[0]=e.ej,r[1]=e.en,r[2]=e.er,r[3]=e.ev,r[4]=e.ek,r[5]=e.eo,r[6]=e.es,r[7]=e.ew,r[8]=e.el,r[9]=e.ep,r[10]=e.et,r[11]=e.ex,r[12]=e.em,r[13]=e.eq,r[14]=e.eu,r[15]=e.ey,r},a1=function(e){return{ej:e[0],en:e[1],er:e[2],ev:e[3],ek:e[4],eo:e[5],es:e[6],ew:e[7],el:e[8],ep:e[9],et:e[10],ex:e[11],em:e[12],eq:e[13],eu:e[14],ey:e[15]}};function fc(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2*i/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*i/(a-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(a+n)/(a-n),u[10]=-(l+i)/(l-i),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*i/(l-i),u[15]=0,u}ir(fc);X(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),l=-i,u=l*r,$=i*r;return fc(u,$,l,i,n,a)});function dc(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(a-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-i),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(a+n)/(a-n),u[14]=-(l+i)/(l-i),u[15]=1,u}ir(dc);X(function(e,r,n,a){return dc(e,r,n,a,-1,1)});function mc(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[3],$=e[4],v=e[5],f=e[6],m=e[7],p=e[8],h=e[9],d=e[10],_=e[11],b=e[12],x=e[13],S=e[14],w=e[15],L=r[0],B=r[1],G=r[2],W=r[3],N=r[4],I=r[5],H=r[6],E=r[7],Q=r[8],ne=r[9],se=r[10],pe=r[11],ve=r[12],be=r[13],Ve=r[14],De=r[15];return n[0]=a*L+$*B+p*G+b*W,n[1]=i*L+v*B+h*G+x*W,n[2]=l*L+f*B+d*G+S*W,n[3]=u*L+m*B+_*G+w*W,n[4]=a*N+$*I+p*H+b*E,n[5]=i*N+v*I+h*H+x*E,n[6]=l*N+f*I+d*H+S*E,n[7]=u*N+m*I+_*H+w*E,n[8]=a*Q+$*ne+p*se+b*pe,n[9]=i*Q+v*ne+h*se+x*pe,n[10]=l*Q+f*ne+d*se+S*pe,n[11]=u*Q+m*ne+_*se+w*pe,n[12]=a*ve+$*be+p*Ve+b*De,n[13]=i*ve+v*be+h*Ve+x*De,n[14]=l*ve+f*be+d*Ve+S*De,n[15]=u*ve+m*be+_*Ve+w*De,n}s(mc);s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[4],$=e[5],v=e[6],f=e[8],m=e[9],p=e[10],h=e[12],d=e[13],_=e[14],b=r[0],x=r[1],S=r[2],w=r[4],L=r[5],B=r[6],G=r[8],W=r[9],N=r[10],I=r[12],H=r[13],E=r[14];return n[0]=a*b+u*x+f*S,n[1]=i*b+$*x+m*S,n[2]=l*b+v*x+p*S,n[3]=0,n[4]=a*w+u*L+f*B,n[5]=i*w+$*L+m*B,n[6]=l*w+v*L+p*B,n[7]=0,n[8]=a*G+u*W+f*N,n[9]=i*G+$*W+m*N,n[10]=l*G+v*W+p*N,n[11]=0,n[12]=a*I+u*H+f*E+h,n[13]=i*I+$*H+m*E+d,n[14]=l*I+v*H+p*E+_,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=Ma(r,Ao);var a=r[0],i=r[1],l=r[2],u=Math.cos(e),$=1-u,v=Math.sin(e);return n[0]=a*a*$+u,n[1]=i*a*$+l*v,n[2]=l*a*$-i*v,n[3]=0,n[4]=a*i*$-l*v,n[5]=i*i*$+u,n[6]=i*l*$+a*v,n[7]=0,n[8]=a*l*$+i*v,n[9]=i*l*$-a*v,n[10]=l*l*$+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),i=1/sc(r),l=r[0]*i,u=r[1]*i,$=r[2]*i,v=Math.cos(e),f=1-v,m=Math.sin(e),p=l*m,h=u*m,d=$*m,_=l*u*f,b=l*$*f,x=u*$*f,S=l*l*f+v,w=_+d,L=b-h,B=_-d,G=u*u*f+v,W=x+p,N=b+h,I=x-p,H=$*$*f+v,E=n[0],Q=n[1],ne=n[2],se=n[3],pe=n[4],ve=n[5],be=n[6],Ve=n[7],De=n[8],Sr=n[9],Cr=n[10],bt=n[11],ju=n[12],Fu=n[13],Eu=n[14],Vu=n[15];return a[0]=E*S+pe*w+De*L,a[1]=Q*S+ve*w+Sr*L,a[2]=ne*S+be*w+Cr*L,a[3]=se*S+Ve*w+bt*L,a[4]=E*B+pe*G+De*W,a[5]=Q*B+ve*G+Sr*W,a[6]=ne*B+be*G+Cr*W,a[7]=se*B+Ve*G+bt*W,a[8]=E*N+pe*I+De*H,a[9]=Q*N+ve*I+Sr*H,a[10]=ne*N+be*I+Cr*H,a[11]=se*N+Ve*I+bt*H,a[12]=ju,a[13]=Fu,a[14]=Eu,a[15]=Vu,a});function t1(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(t1);X(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function o1(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(o1);X(function(e,r,n,a){var i=new Float64Array(16),l=a[0],u=a[1],$=a[2],v=a[3],f=a[4],m=a[5],p=a[6],h=a[7],d=a[8],_=a[9],b=a[10],x=a[11];return i[0]=l,i[1]=u,i[2]=$,i[3]=v,i[4]=f,i[5]=m,i[6]=p,i[7]=h,i[8]=d,i[9]=_,i[10]=b,i[11]=x,i[12]=l*e+f*r+d*n+a[12],i[13]=u*e+m*r+_*n+a[13],i[14]=$*e+p*r+b*n+a[14],i[15]=v*e+h*r+x*n+a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=r[0],$=r[1],v=r[2],f=r[3],m=r[4],p=r[5],h=r[6],d=r[7],_=r[8],b=r[9],x=r[10],S=r[11];return n[0]=u,n[1]=$,n[2]=v,n[3]=f,n[4]=m,n[5]=p,n[6]=h,n[7]=d,n[8]=_,n[9]=b,n[10]=x,n[11]=S,n[12]=u*a+m*i+_*l+r[12],n[13]=$*a+p*i+b*l+r[13],n[14]=v*a+h*i+x*l+r[14],n[15]=f*a+d*i+S*l+r[15],n});y(function(e,r,n){var a=vc(e,r,Ao),i=Ma(It(n,a,qi),qi),l=Ma(It(a,i,Zi),Zi),u=e1,$=r1;return u[0]=i[0],u[1]=l[0],u[2]=a[0],u[3]=0,u[4]=i[1],u[5]=l[1],u[6]=a[1],u[7]=0,u[8]=i[2],u[9]=l[2],u[10]=a[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,$[0]=1,$[1]=0,$[2]=0,$[3]=0,$[4]=0,$[5]=1,$[6]=0,$[7]=0,$[8]=0,$[9]=0,$[10]=1,$[11]=0,$[12]=-e[0],$[13]=-e[1],$[14]=-e[2],$[15]=1,mc(u,$)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Yi=0;function Vn(e,r){for(;r.b;r=r.b)e(r.a)}function Bo(e){for(var r=0;e.b;e=e.b)r++;return r}var i1=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},c1=ke(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),l1=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),u1=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),$1=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),v1=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),s1=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),f1=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),d1=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),m1=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),p1=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},g1=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},h1=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},b1=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},gc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},_1=function(e){e.gl.disable(e.gl.CULL_FACE)},w1=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},x1=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},y1=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Qi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],S1=[g1,h1,b1,pc,gc,_1,w1,x1,y1];function Ki(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function C1(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function hc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function P1(e,r,n,a){for(var i=n.a.d0,l=[],u=0;u<i;u++)l.push(String.fromCharCode(97+u));function $(d,_,b,x,S){var w;if(i===1)for(w=0;w<_;w++)d[b++]=_===1?x[S]:x[S][w];else l.forEach(function(L){for(w=0;w<_;w++)d[b++]=_===1?x[L][S]:x[L][S][w]})}var v=hc(e,r.type);if(v===void 0)throw new Error("No info available for: "+r.type);var f=0,m=v.size*v.arraySize*i,p=new v.type(Bo(n.b)*m);Vn(function(d){$(p,v.size*v.arraySize,f,d,a[r.name]||r.name),f+=m},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),h}function L1(e,r){if(r.a.ea>0){var n=e.createBuffer(),a=k1(r.c,r.a.ea);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d0*Bo(r.b),indexBuffer:null,buffers:{}}}function k1(e,r){var n=new Uint32Array(Bo(e)*r),a=0,i;return Vn(function(l){if(r===1)n[a++]=l;else for(i=0;i<r;i++)n[a++]=l[String.fromCharCode(97+i)]},e),n}function e0(e,r){return e+"#"+r}var bc=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),pc(n),gc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(l){if(!!l.d.b.b){var u,$,v;if(l.b.id&&l.c.id&&(u=e0(l.b.id,l.c.id),$=n.programs[u]),!$){var f;l.b.id?f=n.shaders[l.b.id]:l.b.id=Yi++,f||(f=Ki(a,l.b.src,a.VERTEX_SHADER),n.shaders[l.b.id]=f);var m;l.c.id?m=n.shaders[l.c.id]:l.c.id=Yi++,m||(m=Ki(a,l.c.src,a.FRAGMENT_SHADER),n.shaders[l.c.id]=m);var p=C1(a,f,m);$={glProgram:p,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},$.uniformSetters=z1(a,e,$,Object.assign({},l.b.uniforms,l.c.uniforms));var h=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for(v=0;v<h;v++){var d=a.getActiveAttrib(p,v),_=a.getAttribLocation(p,d.name);$.activeAttributes.push(d),$.activeAttributeLocations.push(_)}u=e0(l.b.id,l.c.id),n.programs[u]=$}n.lastProgId!==u&&(a.useProgram($.glProgram),n.lastProgId=u),T1($.uniformSetters,l.e);var b=n.buffers.get(l.d);for(b||(b=L1(a,l.d),n.buffers.set(l.d,b)),v=0;v<$.activeAttributes.length;v++){d=$.activeAttributes[v],_=$.activeAttributeLocations[v],b.buffers[d.name]===void 0&&(b.buffers[d.name]=P1(a,d,l.d,$.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[d.name]);var x=hc(a,d.type);if(x.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,w=S*x.arraySize,L=0;L<x.arraySize;L++)a.enableVertexAttribArray(_+L),a.vertexAttribPointer(_+L,x.size,x.baseType,!1,w,S*L)}for(n.toggle=!n.toggle,Vn(wm(n),l.a),v=0;v<Qi.length;v++){var B=n[Qi[v]];B.toggle!==n.toggle&&B.enabled&&(S1[v](n),B.enabled=!1,B.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(l.d.a.eH,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(l.d.a.eH,0,b.numIndices)}}return Vn(i,e.g),r});function z1(e,r,n,a){var i=n.glProgram,l=n.currentUniforms,u=0,$=r.f;function v(d,_){var b=_.name,x=e.getUniformLocation(d,b);switch(_.type){case e.INT:return function(w){l[b]!==w&&(e.uniform1i(x,w),l[b]=w)};case e.FLOAT:return function(w){l[b]!==w&&(e.uniform1f(x,w),l[b]=w)};case e.FLOAT_VEC2:return function(w){l[b]!==w&&(e.uniform2f(x,w[0],w[1]),l[b]=w)};case e.FLOAT_VEC3:return function(w){l[b]!==w&&(e.uniform3f(x,w[0],w[1],w[2]),l[b]=w)};case e.FLOAT_VEC4:return function(w){l[b]!==w&&(e.uniform4f(x,w[0],w[1],w[2],w[3]),l[b]=w)};case e.FLOAT_MAT4:return function(w){l[b]!==w&&(e.uniformMatrix4fv(x,!1,new Float32Array(w)),l[b]=w)};case e.SAMPLER_2D:var S=u++;return function(w){e.activeTexture(e.TEXTURE0+S);var L=$.textures.get(w);L||(L=w.fx(e),$.textures.set(w,L)),e.bindTexture(e.TEXTURE_2D,L),l[b]!==w&&(e.uniform1i(x,S),l[b]=w)};case e.BOOL:return function(w){l[b]!==w&&(e.uniform1i(x,w),l[b]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<m;p++){var h=e.getActiveUniform(i,p);f[a[h.name]||h.name]=v(i,h)}return f}function T1(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var M1=y(function(e,r,n){return fv(r,{g:n,f:{},h:e},E1,V1)}),D1=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),R1=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),A1=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),B1=s(function(e,r){e.contextAttributes.antialias=!0}),j1=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),F1=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function E1(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Vn(function(i){return c(_m,r,i)},e.h);var n=_r.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),i1(function(){return c(bc,e,n)})):(n=_r.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function V1(e,r){return r.f=e.f,bc(r)}var R=Zu,la=Ou,_c=y(function(e,r,n){var a=n.c,i=n.d,l=s(function(u,$){if(u.$){var f=u.a;return t(la,e,$,f)}else{var v=u.a;return t(la,l,$,v)}});return t(la,l,t(la,e,r,i),a)}),jo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,l=n.d,u=n.e,$=e,v=t(e,a,i,t(jo,e,r,u)),f=l;e=$,r=v,n=f;continue e}}),r0=function(e){return t(jo,y(function(r,n,a){return c(R,T(r,n),a)}),C,e)},wc=1,X1=2,xc=0,Te=function(e){return{$:1,a:e}},Fo=s(function(e,r){return{$:3,a:e,b:r}}),n0=s(function(e,r){return{$:0,a:e,b:r}}),yc=s(function(e,r){return{$:1,a:e,b:r}}),de=function(e){return{$:0,a:e}},N1=function(e){return{$:2,a:e}},ce=function(e){return{$:0,a:e}},Y={$:1},W1=x$,Sc=I$,Le=q0,Nr=s(function(e,r){return c(b$,e,Oa(r))}),Eo=s(function(e,r){return g(c(h$,e,r))}),Cc=function(e){return c(Nr,`
    `,c(Eo,`
`,e))},Or=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,l=e,u=c(e,a,r),$=i;e=l,r=u,n=$;continue e}else return r}),dr=function(e){return t(Or,s(function(r,n){return n+1}),0,e)},I1=Yu,G1=y(function(e,r,n){e:for(;;)if(Z(e,r)<1){var a=e,i=r-1,l=c(R,r,n);e=a,r=i,n=l;continue e}else return n}),zr=s(function(e,r){return t(G1,e,r,C)}),Ja=s(function(e,r){return t(I1,e,c(zr,0,dr(r)-1),r)}),sr=z$,Pc=function(e){var r=sr(e);return 97<=r&&r<=122},Lc=function(e){var r=sr(e);return r<=90&&65<=r},H1=function(e){return Pc(e)||Lc(e)},U1=function(e){var r=sr(e);return r<=57&&48<=r},O1=function(e){return Pc(e)||Lc(e)||U1(e)},xe=function(e){return t(Or,R,C,e)},gn=d$,J1=s(function(e,r){return`

(`+(Le(e+1)+(") "+Cc(q1(r))))}),q1=function(e){return c(Z1,e,C)},Z1=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,u=e.b,a=function(){var b=gn(n);if(b.$===1)return!1;var x=b.a,S=x.a,w=x.b;return H1(S)&&c(W1,O1,w)}(),i=a?"."+n:"['"+(n+"']"),v=u,f=c(R,i,r);e=v,r=f;continue e;case 1:var l=e.a,u=e.b,$="["+(Le(l)+"]"),v=u,f=c(R,$,r);e=v,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+c(Nr,"",xe(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(Le(dr(m))+" ways:"));return c(Nr,`

`,c(R,_,c(Ja,J1,m)))}else{var u=m.a,v=u,f=r;e=v,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+c(Nr,"",xe(r)):"!"}();default:var h=e.a,d=e.b,_=function(){return r.b?"Problem with the value at json"+(c(Nr,"",xe(r))+`:

    `):`Problem with the given value:

`}();return _+(Cc(c(Sc,4,d))+(`

`+h))}}),Ie=32,Gt=X(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ht=Wu,Vo=c$,Xo=s(function(e,r){return Ni(r)/Ni(e)}),Y1=o$,Xn=Vo(c(Xo,2,Ie)),kc=k(Gt,0,Xn,Ht,Ht),zc=Gu,Tc=function(e){return{$:1,a:e}};s(function(e,r){return e(r)});s(function(e,r){return r(e)});var Kr=l$,Ut=Iu,Fe=s(function(e,r){return Z(e,r)>0?e:r}),Q1=function(e){return{$:0,a:e}},No=Hu,K1=s(function(e,r){e:for(;;){var n=c(No,Ie,e),a=n.a,i=n.b,l=c(R,Q1(a),r);if(i.b){var u=i,$=l;e=u,r=$;continue e}else return xe(l)}}),e3=function(e){var r=e.a;return r},r3=s(function(e,r){e:for(;;){var n=Vo(r/Ie);if(n===1)return c(No,Ie,e).a;var a=c(K1,e,C),i=n;e=a,r=i;continue e}}),Mc=s(function(e,r){if(r.n){var n=r.n*Ie,a=Kr(c(Xo,Ie,n-1)),i=e?xe(r.B):r.B,l=c(r3,i,r.n);return k(Gt,Ut(r.q)+n,c(Fe,5,a*Xn),l,r.q)}else return k(Gt,Ut(r.q),Xn,Ht,r.q)}),n3=ke(function(e,r,n,a,i){e:for(;;){if(r<0)return c(Mc,!1,{B:a,n:n/Ie|0,q:i});var l=Tc(t(zc,Ie,r,e)),u=e,$=r-Ie,v=n,f=c(R,l,a),m=i;e=u,r=$,n=v,a=f,i=m;continue e}}),a3=s(function(e,r){if(e<=0)return kc;var n=e%Ie,a=t(zc,n,e-n,r),i=e-n-Ie;return P(n3,r,i,e,C,a)}),rr=function(e){return!e.$},j=E$,ee=R$,A=F$,ge=A$,t3=function(e){return{$:2,a:e}},Wo=s(function(e,r){return e}),Dc=s(function(e,r){return{fu:r.fu,fv:e,cP:r.cP,fF:r.fF,cV:r.cV,bJ:r.bJ,aE:r.aE,gU:r.gU}}),Nn=V$,Rc=X$,Pe=M$,Io=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},kr=function(e){return e},o3=kr,a0=ir(function(e,r,n,a,i,l){return{d6:l,d8:r,eN:a,eR:n,eV:e,eW:i}}),i3=y$,Wr=m$,nn=_$,Yn=s(function(e,r){return e<1?r:t(nn,e,Wr(r),r)}),qa=C$,Za=function(e){return e===""},Ya=s(function(e,r){return e<1?"":t(nn,0,e,r)}),Ac=P$,t0=ke(function(e,r,n,a,i){if(Za(i)||c(i3,"@",i))return Y;var l=c(qa,":",i);if(l.b){if(l.b.b)return Y;var u=l.a,$=Ac(c(Yn,u+1,i));if($.$===1)return Y;var v=$;return ce(Ae(a0,e,c(Ya,u,i),v,r,n,a))}else return ce(Ae(a0,e,i,Y,r,n,a))}),o0=X(function(e,r,n,a){if(Za(a))return Y;var i=c(qa,"/",a);if(i.b){var l=i.a;return P(t0,e,c(Yn,l,a),r,n,c(Ya,l,a))}else return P(t0,e,"/",r,n,a)}),i0=y(function(e,r,n){if(Za(n))return Y;var a=c(qa,"?",n);if(a.b){var i=a.a;return k(o0,e,ce(c(Yn,i+1,n)),r,c(Ya,i,n))}else return k(o0,e,Y,r,n)});s(function(e,r){if(Za(r))return Y;var n=c(qa,"#",r);if(n.b){var a=n.a;return t(i0,e,ce(c(Yn,a+1,r)),c(Ya,a,r))}else return t(i0,e,Y,r)});var c3=S$,Go=function(e){},Qn=Ur,l3=Qn(0),Bc=X(function(e,r,n,a){if(a.b){var i=a.a,l=a.b;if(l.b){var u=l.a,$=l.b;if($.b){var v=$.a,f=$.b;if(f.b){var m=f.a,p=f.b,h=n>500?t(Or,e,r,xe(p)):k(Bc,e,r,n+1,p);return c(e,i,c(e,u,c(e,v,c(e,m,h))))}else return c(e,i,c(e,u,c(e,v,r)))}else return c(e,i,c(e,u,r))}else return c(e,i,r)}else return r}),yr=y(function(e,r,n){return k(Bc,e,r,0,n)}),K=s(function(e,r){return t(yr,s(function(n,a){return c(R,e(n),a)}),C,r)}),Da=Xt,Ho=s(function(e,r){return c(Da,function(n){return Qn(e(n))},r)}),u3=y(function(e,r,n){return c(Da,function(a){return c(Da,function(i){return Qn(c(e,a,i))},n)},r)}),$3=function(e){return t(yr,u3(R),Qn(C),e)},v3=nv,s3=s(function(e,r){var n=r;return Q0(c(Da,v3(e),n))}),f3=y(function(e,r,n){return c(Ho,function(a){return 0},$3(c(K,s3(e),r)))}),d3=y(function(e,r,n){return Qn(0)}),m3=s(function(e,r){var n=r;return c(Ho,e,n)});vr.Task=ev(l3,f3,d3,m3);var p3=ec("Task"),Uo=s(function(e,r){return p3(c(Ho,e,r))}),g3=jv,h3=s$,Ra={$:1},jc=function(e){return{$:2,a:e}},Qa={$:0},Je=s(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),hn=function(e){var r=e.b.D;return r.a},b3=function(e){var r=e.a,n=e.b.ab,a=e.b.D,i=e.b.an;if(i.b){var l=i.a,u=i.b;return ce(c(Je,r,{D:l,an:u,ab:c(R,a,n)}))}else return Y},Fc=function(e){var r=e.b;return c(Je,Qa,r)},Ke=s(function(e,r){if(r.$)return e;var n=r.a;return n}),_3=y(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return r.bJ.d_?Fc(n):n;case 2:var l=a.a.dF;return(Z(l+r.fF,hn(n).fu)>0?c(ae,b3,Ke(c(Je,Ra,i))):kr)(c(Je,jc({dF:l+r.fF}),i));default:var u=i.D,$=u.a,v=u.b,f=c(Dc,$.fv,U(r,{fu:$.fu+r.fF})),m=c(e,f,v);return c(Je,Qa,{D:T(f,m),an:C,ab:c(R,i.D,i.ab)})}}),Oo=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),w3=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,l=e-1,u=i,$=c(R,a,n);e=l,r=u,n=$;continue e}else return n}}),x3=s(function(e,r){return xe(t(w3,e,r,C))}),Ec=y(function(e,r,n){if(r<=0)return C;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,l=i.b,u=l.a;return g([w,u]);case 3:if(a.b.b.b.b){var $=a.b,w=$.a,v=$.b,u=v.a,f=v.b,m=f.a;return g([w,u,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,w=p.a,h=p.b,u=h.a,d=h.b,m=d.a,_=d.b,b=_.a,x=_.b;return e>1e3?c(R,w,c(R,u,c(R,m,c(R,b,c(x3,r-4,x))))):c(R,w,c(R,u,c(R,m,c(R,b,t(Ec,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return g([w])}}),Vc=s(function(e,r){return t(Ec,0,e,r)}),y3=s(function(e,r){var n=r.b.ab,a=r.b.D,i=r.b.an,l=$e(xe(n),$e(g([a]),i)),u=c(Vc,e,l),$=c(Oo,e,l);if($.b){var v=$.a,f=$.b;return c(Je,Ra,{D:v,an:f,ab:xe(u)})}else{var m=xe(u);if(m.b){var p=m.a,h=m.b;return c(Je,Ra,{D:p,an:C,ab:h})}else return r}}),S3=function(e){var r=e.b;return c(Je,Ra,r)},C3=function(e){var r=e.b;return c(Je,jc({dF:hn(e).fu}),r)},P3=s(function(e,r){switch(e.$){case 1:return S3(r);case 2:return Fc(r);case 3:return C3(r);default:var n=e.a;return c(y3,n,r)}}),Xc=s(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),L3=s(function(e,r){return U(r,{aM:e(r.aM)})}),k3=function(e){return{$:3,a:e}},Nc=function(e){return{$:2,a:e}},Wc=s(function(e,r){return{$:0,a:e,b:r}}),z3=s(function(e,r){return{$:1,a:e,b:r}}),_e=s(function(e,r){if(r.$)return Y;var n=r.a;return ce(e(n))}),q=function(e){return e<0?-e:e},Jo=L$,T3=y(function(e,r,n){return c(Ke,0/0,Jo(c(e,r,n)))}),qo=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,l=a;e=i,r=l;continue e}else return!1}),M3=g$,Ic=function(e){return t(M3,R,C,e)},D3=s(function(e,r){var n=c(qo,function(a){return a!=="0"&&a!=="."},Ic(r));return $e(e&&n?"-":"",r)}),le=q0,Ot=f$,Gc=T$,Hc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=gn(n);if(a.$===1)return"01";var i=a.a;return c(Ot,"0",Hc(i))}else{var l=sr(r);return l>=48&&l<57?c(Ot,Gc(l+1),n):"0"}},Jt=i$,R3=v$,Ka=function(e){return c(Ot,e,"")},Uc=y(function(e,r,n){return e<=0?n:t(Uc,e>>1,$e(r,r),e&1?$e(n,r):n)}),Wn=s(function(e,r){return t(Uc,e,r,"")}),qt=y(function(e,r,n){return $e(n,c(Wn,e-Wr(n),Ka(r)))}),Zt=p$,Oc=function(e){var r=c(Eo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return T(n,i)}else{var n=r.a;return T(n,"0")}else return T("0","0")},A3=function(e){var r=c(Eo,"e",le(q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,l=c(Ke,0,Ac(c(c3,"+",i)?c(Yn,1,i):i)),u=Oc(n),$=u.a,v=u.b,f=$e($,v),m=l<0?c(Ke,"0",c(_e,function(p){var h=p.a,d=p.b;return h+("."+d)},c(_e,Xc(Ka),gn($e(c(Wn,q(l),"0"),f))))):t(qt,l+1,"0",f);return $e(e<0?"-":"",m)}else{var n=r.a;return $e(e<0?"-":"",n)}else return""},B3=y(function(e,r,n){if(Jt(n)||R3(n))return le(n);var a=n<0,i=Oc(A3(q(n))),l=i.a,u=i.b,$=Wr(l)+r,v=$e(c(Wn,-$+1,"0"),t(qt,$,"0",$e(l,u))),f=Wr(v),m=c(Fe,1,$),p=c(e,a,t(nn,m,f,v)),h=t(nn,0,m,v),d=p?Zt(c(Ke,"1",c(_e,Hc,gn(Zt(h))))):h,_=Wr(d),b=d==="0"?d:r<=0?$e(d,c(Wn,q(r),"0")):Z(r,Wr(u))<0?t(nn,0,_-r,d)+("."+t(nn,_-r,_,d)):$e(l+".",t(qt,r,"0",u));return c(D3,a,b)}),Jc=B3(s(function(e,r){var n=gn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(l){return l>53&&e||l>=53&&!e}(sr(i))})),j3=T3(Jc),F3=y(function(e,r,n){var a=c(Xo,10,q(r-e)),i=a<0?3:a<1?2:a<2?1:0;return c(j3,i,n)}),qc=qu,et=s(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,i=r.d,l=r.e,u=c(qc,e,n);switch(u){case 0:var $=e,v=i;e=$,r=v;continue e;case 1:return ce(a);default:var $=e,v=l;e=$,r=v;continue e}}}),J=ke(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),mr={$:-2},sn=ke(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,v=i.e;if(a.$===-1&&!a.a){a.a;var f=a.b,m=a.c,p=a.d,h=a.e;return P(J,0,r,n,P(J,1,f,m,p,h),P(J,1,l,u,$,v))}else return P(J,e,l,u,P(J,0,r,n,a,$),v)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var f=a.b,m=a.c,d=a.d;d.a;var _=d.b,b=d.c,x=d.d,S=d.e,h=a.e;return P(J,0,f,m,P(J,1,_,b,x,S),P(J,1,r,n,h,i))}else return P(J,e,r,n,a,i)}),Yt=y(function(e,r,n){if(n.$===-2)return P(J,0,e,r,mr,mr);var a=n.a,i=n.b,l=n.c,u=n.d,$=n.e,v=c(qc,e,i);switch(v){case 0:return P(sn,a,i,l,t(Yt,e,r,u),$);case 1:return P(J,a,i,r,u,$);default:return P(sn,a,i,l,u,t(Yt,e,r,$))}}),tn=y(function(e,r,n){var a=t(Yt,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,l=a.c,u=a.d,$=a.e;return P(J,1,i,l,u,$)}else{var v=a;return v}}),E3=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Zc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,$=i.d,v=i.e,f=e.e;f.a;var m=f.b,p=f.c,h=f.d;h.a;var d=h.b,_=h.c,b=h.d,x=h.e,S=f.e;return P(J,0,d,_,P(J,1,n,a,P(J,0,l,u,$,v),b),P(J,1,m,p,x,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,$=w.d,v=w.e,L=e.e;L.a;var m=L.b,p=L.c,h=L.d,S=L.e;return P(J,1,n,a,P(J,0,l,u,$,v),P(J,0,m,p,h,S))}else return e},c0=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,$=i.d;$.a;var v=$.b,f=$.c,m=$.d,p=$.e,h=i.e,d=e.e;d.a;var _=d.b,b=d.c,x=d.d,S=d.e;return P(J,0,l,u,P(J,1,v,f,m,p),P(J,1,n,a,h,P(J,0,_,b,x,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,L=w.d,h=w.e,B=e.e;B.a;var _=B.b,b=B.c,x=B.d,S=B.e;return P(J,1,n,a,P(J,0,l,u,L,h),P(J,0,_,b,x,S))}else return e},V3=Ha(function(e,r,n,a,i,l,u){if(l.$===-1&&!l.a){l.a;var $=l.b,v=l.c,f=l.d,m=l.e;return P(J,n,$,v,f,P(J,0,a,i,m,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var p=u.d;return p.a,c0(r)}else break e;else return u.a,u.d,c0(r);else break e;return r}}),ba=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,l=i.a,u=i.d,$=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,P(J,r,n,a,ba(i),$);var v=Zc(e);if(v.$===-1){var f=v.a,m=v.b,p=v.c,h=v.d,d=v.e;return P(sn,f,m,p,ba(h),d)}else return mr}else return P(J,r,n,a,ba(i),$)}else return mr},An=s(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(Z(e,a)<0)if(l.$===-1&&l.a===1){l.a;var $=l.d;if($.$===-1&&!$.a)return $.a,P(J,n,a,i,c(An,e,l),u);var v=Zc(r);if(v.$===-1){var f=v.a,m=v.b,p=v.c,h=v.d,d=v.e;return P(sn,f,m,p,c(An,e,h),d)}else return mr}else return P(J,n,a,i,c(An,e,l),u);else return c(X3,e,So(V3,e,r,n,a,i,l,u))}),X3=s(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(Qe(e,a)){var $=E3(u);if($.$===-1){var v=$.b,f=$.c;return P(sn,n,v,f,l,ba(u))}else return mr}else return P(sn,n,a,i,l,c(An,e,u))}else return mr}),Yc=s(function(e,r){var n=c(An,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,l=n.d,u=n.e;return P(J,1,a,i,l,u)}else{var $=n;return $}}),ua=y(function(e,r,n){var a=r(c(et,e,n));if(a.$)return c(Yc,e,n);var i=a.a;return t(tn,e,i,n)}),N3=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return c(ua,r,_e(function(a){if(a.$===1){var i=a.a,l=i.a,u=i.b;return c(z3,T(l,u),n)}else return a}));case 0:var r=e.a,n=e.b;return c(ua,r,_e(function(a){if(a.$)return a;var i=a.a,l=i.a,u=i.b;return c(Wc,T(l,u),t(F3,l,u,n))}));case 3:var r=e.a,n=e.b;return c(ua,r,_e(function(a){return a.$===3?k3(n):a}));default:var r=e.a,n=e.b;return c(ua,r,_e(function(a){return a.$===2?Nc(n):a}))}},W3=function(e){return L3(N3(e))},I3=s(function(e,r){return c(K,W3(e),r)}),G3=s(function(e,r){return U(r,{fv:c(I3,e,r.fv)})}),H3=s(function(e,r){var n=r.a,a=r.b;return c(Je,n,U(a,{D:c(Xc,G3(e),a.D)}))}),U3=s(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),O3=y(function(e,r,n){var a=n.a,i=n.b,l=i.D;return c(Je,a,U(i,{D:c(U3,c(e,l.a,r),l)}))}),J3=X(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return U(a,{a3:!a.a3});case 2:var i=n.a;return U(a,{I:t(_3,e,i,a.I)});case 3:var l=n.a;return U(a,{I:c(H3,l,a.I)});case 4:var u=n.a;return U(a,{I:t(O3,r,u,a.I)});default:var $=n.a;return U(a,{I:c(P3,$,a.I)})}}),q3=s(function(e,r){return c(Je,Qa,{D:T(e,r(e)),an:C,ab:C})}),Z3=av,l0=Z3(C),In=j$,fn=B$,Y3=lv("tick",c(j,function(e){return c(j,function(r){return c(j,function(n){return c(j,function(a){return c(j,function(i){return c(j,function(l){return c(j,function(u){return Pe({fu:u,cP:l,fF:i,cV:a,bJ:n,aE:r,gU:e})},c(A,"clock",ge))},c(A,"devicePixelRatio",ge))},c(A,"dt",ge))},c(A,"keyboard",c(j,function(a){return c(j,function(i){return c(j,function(l){return c(j,function(u){return c(j,function($){return c(j,function(v){return c(j,function(f){return c(j,function(m){return c(j,function(p){return Pe({fg:p,fw:m,d_:f,fE:v,f5:$,eS:u,gA:l,e0:i,e9:a})},c(A,"alt",ee))},c(A,"control",ee))},c(A,"down",ee))},c(A,"downs",In(fn)))},c(A,"left",ee))},c(A,"pressedKeys",In(fn)))},c(A,"right",ee))},c(A,"shift",ee))},c(A,"up",ee))))},c(A,"pointer",c(j,function(n){return c(j,function(a){return c(j,function(i){return c(j,function(l){return c(j,function(u){return c(j,function($){return c(j,function(v){return c(j,function(f){return Pe({d_:f,cU:v,ge:$,gB:u,gC:l,e9:i,gX:a,g$:n})},c(A,"down",ee))},c(A,"isDown",ee))},c(A,"move",ee))},c(A,"rightDown",ee))},c(A,"rightUp",ee))},c(A,"up",ee))},c(A,"x",ge))},c(A,"y",ge))))},c(A,"screen",c(j,function(r){return c(j,function(n){return Pe({fS:n,gV:r})},c(A,"height",ge))},c(A,"width",ge))))},c(A,"wheel",c(j,function(e){return c(j,function(r){return Pe({fz:r,fA:e})},c(A,"deltaX",ge))},c(A,"deltaY",ge))))),Q3=function(e){return{$:4,a:e}},K3={$:0},Zo=Y0,Ee=s(function(e,r){return c(ac,e,Zo(r))}),z=Ee("className"),es=function(e){var r=e.b.D;return r.b},M=er("div"),Aa=Ee("id"),rs=dv,Gn=rs,ns=mv,te=ns,as={$:1},ts=function(e){return{$:3,a:e}},os=function(e){return{$:5,a:e}},u0=er("a"),Tr=er("button"),$0=function(e){return c(Ee,"href",hv(e))},is=gr("clip-rule"),ye=gr("d"),Qt=gr("fill"),Qc=rc("http://www.w3.org/2000/svg"),Kt=Qc("svg"),eo=gr("viewBox"),cs=c(pv,"http://www.w3.org/XML/1998/namespace","xml:space"),Ge=Kt(g([eo("0 0 24 24"),Qt("currentColor"),c(te,"width","100%"),c(te,"height","100%"),cs("http://www.w3.org/2000/svg")])),ls=gr("fill-rule"),Se=Qc("path"),ur={dX:Ge(g([c(Se,g([ye("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),C)])),fM:Ge(g([c(Se,g([ye("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),C)])),fR:Ge(g([c(Se,g([ye("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),C)])),gf:Ge(g([c(Se,g([ye("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),C),c(Se,g([ye("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),C)])),gg:Ge(g([c(Se,g([ye("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),C),c(Se,g([ye("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),C)])),gu:Ge(g([c(Se,g([ye("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),C)])),gv:Ge(g([c(Se,g([ye("M7 5V19L18 12L7 5Z")]),C)])),gw:Ge(g([c(Se,g([ye("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),C)])),bJ:Ge(g([c(Se,g([ye("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),C)])),gO:Ge(g([c(Se,g([ls("evenodd"),is("evenodd"),ye("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),C)])),gQ:Ge(g([c(Se,g([ye("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),C)])),g4:Ge(g([c(Se,g([ye("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),C)]))},us=function(e){return{$:0,a:e}},Kc=nc,rt=s(function(e,r){return c(Kc,e,us(r))}),ar=function(e){return c(rt,"click",Pe(e))},v0=Ee("target"),Tn=Ee("title"),ro=s(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;return P(J,n,a,c(e,a,i),c(ro,e,l),c(ro,e,u))}),$s=Nt,oe=$s,el=function(e){return t(jo,y(function(r,n,a){return c(R,n,a)}),C,e)},vs=s(function(e,r){return{$:3,a:e,b:r}}),ss=s(function(e,r){return{$:2,a:e,b:r}}),fs=s(function(e,r){return{$:0,a:e,b:r}}),ds=s(function(e,r){return{$:1,a:e,b:r}}),Yo=X(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),nt=k(Yo,0/255,0/255,0/255,1),ms=Y0,ps=s(function(e,r){return c(ac,e,ms(r))}),gs=ps("checked"),or=u$,hs=y(function(e,r,n){return $e(c(Wn,e-Wr(n),Ka(r)),n)}),Gr=Ku,rl=function(e){var r=function(n){return n<10?Le(n):Ka(Gc(87+n))};return e<16?r(e):$e(rl(e/16|0),r(c(Gr,16,e)))},bs=c(ae,rl,c(hs,2,"0")),Qo=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{a$:i,cI:a,cS:n,du:r}},_s=function(e){var r=Qo(e),n=r.du,a=r.cS,i=r.cI;return c(Nr,"",c(R,"#",c(K,c(ae,or,bs),g([n*255,a*255,i*255]))))},no=Ee("htmlFor"),ao=s(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),Ba=s(function(e,r){if(r.$){var a=r.a;return Te(a)}else{var n=r.a;return e(n)}}),ws=y(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return c(R,i,n)}),at=s(function(e,r){return t(yr,ws(e),C,r)}),nl=X(function(e,r,n,a){return{fY:r,ga:e,gl:n,gI:a}}),xs=Nv,ys=k$,Ss=s(function(e,r){if(r.$)return Te(e);var n=r.a;return de(n)}),Cs=Xv,Ps=function(e){return c(Cs,{fp:!1,gh:!1},e)},tt=function(e){if(e.b){var r=e.a;return e.b,ce(r)}else return Y},Ls=s(function(e,r){if(r.$){var a=r.a;return Te(a)}else{var n=r.a;return de(e(n))}}),ks=function(e){return{$:2,a:e}},zs=function(e){return{$:0,a:e}},Ts=function(e){return{$:1,a:e}},xt=s(function(e,r){return sr(r)-sr(e)}),yt=y(function(e,r,n){var a=sr(n);return Z(sr(e),a)<1&&Z(a,sr(r))<1}),Ms=s(function(e,r){var n=function(i){return Z(i,e)<0?de(i):Te(Ts(r))},a=t(yt,"0","9",r)?de(c(xt,"0",r)):t(yt,"a","z",r)?de(10+c(xt,"a",r)):t(yt,"A","Z",r)?de(10+c(xt,"A",r)):Te(zs(r));return c(Ba,n,a)}),al=s(function(e,r){var n=gn(r);if(n.$===1)return de(0);var a=n.a,i=a.a,l=a.b;return c(Ba,function(u){return c(Ba,function($){return de(u+$*e)},c(al,e,l))},c(Ms,e,i))}),Ds=s(function(e,r){return 2<=e&&e<=36?c(al,e,Zt(r)):Te(ks(e))}),Rs=Ds(16),o=y(function(e,r,n){return k(Yo,e,r,n,1)}),As=X(function(e,r,n,a){return k(Yo,e,r,n,a)}),Kn=Qu,Bs=s(function(e,r){var n=c(Kn,10,e);return or(r*n)/n}),js=w$,Fs=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ic(n);if(a.b&&!a.b.b){var i=a.a;return ys(g([i,i]))}else return n};return c(ae,js,c(ae,function(n){return c(_e,function(a){return t(xs,1,a,n)},Ps(e))},c(ae,ao(tt),c(ae,_e(function(n){return n.gI}),c(ae,_e(at(kr)),c(ae,Ss("Parsing hex regex failed"),Ba(function(n){var a=c(K,c(ae,r,c(ae,Rs,Ls(Y1))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,l=a.b,u=l.a.a,$=l.b,v=$.a.a,f=$.b,m=f.a.a;return de(k(As,i/255,u/255,v/255,c(Bs,2,m/255)))}else break e;else{var i=a.a.a,p=a.b,u=p.a.a,h=p.b,v=h.a.a;return de(t(o,i/255,u/255,v/255))}else break e;return Te("Parsing ints from hex failed")})))))))}(),Hn=er("input"),to=er("label"),oo=Ee("name"),tl=s(function(e,r){return t(yr,A,r,e)}),Es=c(tl,g(["target","checked"]),ee),Vs=function(e){return c(rt,"change",c(Nn,e,Es))},Xs=function(e){return T(e,!0)},Ns=function(e){return{$:1,a:e}},Ws=s(function(e,r){return c(Kc,e,Ns(r))}),ol=c(tl,g(["target","value"]),fn),ea=function(e){return c(Ws,"input",c(Nn,Xs,c(Nn,e,ol)))},il=Ee("max"),cl=Ee("min"),ll=function(e){return c(Ee,"step",e)},ja=Ee("type"),Jr=Ee("value"),s0=function(e){var r=e.cX,n=e.dL,a=e.db,i=e.c7,l=e.dC,u=e.df;return c(M,C,g([c(to,g([no(r)]),g([c(M,g([z("relative w-full")]),g([c(M,g([z("inline-block")]),g([oe(r)])),c(M,g([z("inline-block float-right")]),g([oe(le(n))]))]))])),c(Hn,g([ja("range"),c(te,"width","100%"),Aa(r),oo(r),cl(le(a)),il(le(i)),Jr(le(n)),ll(le(l)),ea(c(ae,Jo,c(ae,Ke(42),u)))]),C)]))},ul=s(function(e,r){if(r.$)return e;var n=r.a;return n}),Is=s(function(e,r){switch(r.$){case 3:var u=r.a;return c(M,g([z("h-12 py-4")]),g([c(to,g([z("block"),no(e)]),g([c(Hn,g([z("relative bottom-[1px] align-middle mr-2"),ja("checkbox"),Aa(e),oo(e),Vs(vs(e)),gs(u)]),C),oe(e)]))]));case 0:var n=r.a,i=n.a,l=n.b,u=r.b;return s0({cX:e,c7:l,db:i,df:fs(e),dC:.01*(l-i),dL:u});case 1:var a=r.a,i=a.a,l=a.b,u=r.b;return s0({cX:e,c7:l,db:i,df:c(ae,or,ds(e)),dC:1,dL:u});default:var u=r.a;return c(M,C,g([c(M,g([c(te,"margin-bottom","6px")]),g([c(to,g([no(e)]),g([oe(e)]))])),c(Hn,g([ja("color"),c(te,"width","100%"),c(te,"height","26px"),c(te,"padding","0px"),Aa(e),oo(e),ea(function($){return c(ss,e,c(ul,nt,Fs($)))}),Jr(_s(u))]),C)]))}}),Gs=function(e){return c(M,g([z("p-4 border-y-[0.5px] border-white20")]),g([c(M,g([z("text-lg pb-2")]),g([oe(e.gi)])),c(M,g([z("pl-2 pr-2")]),el(c(ro,Is,e.aM)))]))},Hs=function(e){return c(M,g([z("text-xs text-white60")]),c(K,Gs,e))},Us=function(e){return c(M,g([z("absolute left-[104px] bottom-2 text-sm text-white40")]),g([oe("clock: "+c(Jc,3,hn(e).fu))]))},Os=function(e){e.a;var r=e.b.ab;return c(_e,function(n){return or(60/(hn(e).fu-n))},c(_e,c(ae,e3,function(n){return n.fu}),tt(c(Oo,59,r))))},Js=function(e){return c(M,g([z("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Os(e);if(r.$===1)return g([oe("... Fps")]);var n=r.a;return g([oe(Le(n)+" Fps")])}())},qs=function(e){return{$:0,a:e}},Zs=function(e){var r=e.b.ab;return dr(r)},Ys=function(e){var r=e.b.ab;e.b.D;var n=e.b.an;return dr(r)+1+dr(n)},Qs=function(e){return c(Hn,g([z("absolute w-full"),ja("range"),cl(Le(0)),il(Le(Ys(e)-1)),Jr(Le(Zs(e))),ll(Le(1)),ea(c(ae,Jo,c(ae,Ke(42),c(ae,or,qs))))]),C)},f0={$:1},Ks={$:3},ef={$:2},$l=function(e){return!e.b},d0=s(function(e,r){return c(Tr,g([z("px-2 bg-black60 hover:bg-black80 active:bg-black"),z(r),ar(e)]),g([oe("REC")]))}),m0=s(function(e,r){return c(Tr,g([z("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),ar(r)]),g([c(M,g([z("w-4 h-6 text-white60 hover:text-white80")]),g([e]))]))}),rf=function(e){var r=e.a,n=e.b.an;return c(M,g([z("py-1")]),g([function(){switch(r.$){case 0:return c(d0,f0,"text-red-500 font-bold");case 1:return c(d0,ef,"text-white60 hover:text-white80 font-bold");default:return c(M,C,C)}}(),function(){switch(r.$){case 0:return c(M,C,C);case 1:return $l(n)?c(M,C,C):c(m0,ur.gv,Ks);default:return c(m0,ur.gu,f0)}}()]))},nf=function(e){return c(M,g([z("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Qs(e),rf(e),Js(e),Us(e)]))},af=function(e){var r=e.a;return Qe(r,Qa)},tf=s(function(e,r){var n=af(r.I)?c(M,C,C):c(M,g([z("absolute pointer-events-none w-8 h-8"),c(te,"left",le(e.bJ.gX+.5*e.aE.gV)+"px"),c(te,"top",le(-e.bJ.g$+.5*e.aE.fS)+"px")]),g([c(M,g([z(e.bJ.cU?"text-black80":"text-black40")]),g([ur.bJ]))]));return c(M,C,g([n]))}),of=s(function(e,r){var n=c(Tr,g([z(r.a3?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),ar(as),Tn("Distraction Free Mode")]),g([ur.g4])),a=c(M,g([z("absolute w-8 bottom-12")]),g([c(u0,g([z("text-twitterBlue40 hover:text-twitterBlue"),$0("https://twitter.com/AzizErkalSelman"),v0("_blank")]),g([ur.gQ]))])),i=c(M,g([z("absolute w-8 bottom-2")]),g([c(u0,g([z("text-githubCat40 hover:text-githubCat"),$0("https://github.com/erkal/elm-3d-playground-exploration"),v0("_blank")]),g([ur.fM]))]));return r.a3?c(M,g([z("fixed w-10 h-10 p-1")]),g([n])):c(M,C,g([c(M,g([z("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,i])),c(M,g([z("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),c(te,"height",le(e.aE.fS-80)+"px")]),g([c(Gn,ts,Hs(hn(r.I).fv))])),c(M,g([z("absolute bottom-0 left-10 h-20"),c(te,"width",e.aE.gV>600?"600px":le(e.aE.gV-40)+"px")]),g([c(Gn,os,nf(r.I))])),c(tf,e,r)]))}),cf=y(function(e,r,n){var a=es(n.I),i=hn(n.I);return c(M,g([z("bg-black40"),z("select-none"),z("antialiased"),z("font-mono"),c(te,"width",le(i.aE.gV)+"px"),c(te,"height",le(i.aE.fS)+"px")]),g([c(M,g([z("fixed")]),g([c(Gn,Wo(K3),c(e,i,a))])),c(M,g([Aa("gui")]),g([c(of,i,n),c(Gn,Q3,c(r,i,a))]))]))}),lf=ir(function(e,r,n,a,i,l){var u=s(function(v,f){return T(k(J3,r,l,v,f),l0)}),$=function(v){var f=c(Dc,n,v.f_);return T({a3:v.f_.aE.gV<500,I:c(q3,f,a)},l0)};return g3({fZ:$,gJ:Wo(Y3(t3)),gR:u,gT:c(cf,e,i)})}),Ko=mr,uf=function(e){return{a:Ko,_:e}},$f=function(e){var r=e.a,n=e.b,a=e.c;return T(T(n,a),function(){return r?1:0}())},p0={fl:150,bH:1,gP:uf($f)},vl=s(function(e,r){return{r,m:C,D:e}}),vf=X(function(e,r,n,a){return{d1:e,eK:r,X:c(vl,n,a),dG:"",cv:""}}),ot={$:0},ei=s(function(e,r){return{gX:e,g$:r}}),sf=function(e){var r=e.gd,n=e.gc;return{gc:n,gd:r,ah:c(ei,0,0),as:ot,g7:n}},ff=function(e){return{al:sf({gc:70,gd:10}),a4:!0,be:{cx:0,cz:0},R:k(vf,Wo(Zo("")),Pe(p0),{gi:"1",gr:p0},C),aF:0}},df=s(function(e,r){return T(e,Nc(r))}),mf=y(function(e,r,n){return{aM:n,f1:r,gi:e}}),pf=function(e){return t(Or,s(function(r,n){var a=r.a,i=r.b;return t(tn,a,i,n)}),Ko,e)},gf=y(function(e,r,n){return t(mf,e,r,pf(n))}),hf=gf,g0=y(function(e,r,n){var a=r.a,i=r.b;return T(e,c(Wc,T(a,i),n))}),bf=g([t(hf,"Parameters",!0,g([t(g0,"trixel scale",T(.5,1),1),t(g0,"grid dot size",T(0,.4),0),c(df,"grid color",nt)]))]),h0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),sl=function(e){var r=e.cx,n=e.cz,a=function(i){return i-Kr(i)};return a(r)+a(n)<1?t(h0,0,Kr(r),Kr(n)):t(h0,1,Kr(r),Kr(n))},_f=y(function(e,r,n){var a=n;return U(a,{a:t(tn,a._(e),T(e,r),a.a)})}),wf=y(function(e,r,n){return U(n,{gP:t(_f,e,r,n.gP)})}),fl=s(function(e,r){var n=r;return U(n,{D:e(n.D)})}),qr=s(function(e,r){var n=r;return U(n,{X:e(n.X)})}),xf=function(e){return qr(fl(function(r){return U(r,{gr:e(r.gr)})}))},Fa=s(function(e,r){return U(r,{R:c(xf,e,r.R)})}),yf=s(function(e,r){return e.bJ.cU?c(Fa,c(wf,sl(r.be),r.aF),r):r}),Sf=s(function(e,r){var n=r;return U(n,{a:c(Yc,n._(e),n.a)})}),Cf=s(function(e,r){return U(r,{gP:c(Sf,e,r.gP)})}),Pf=s(function(e,r){return e.cV.e0&&e.bJ.cU?c(Fa,Cf(sl(r.be)),r):r}),qe=function(e){return e},Lf=y(function(e,r,n){return{gX:e,g$:r,dR:n}}),dn=e$,Hr=function(e){return e},Mn=function(e){return Hr(dn*(e/180))},$a=function(e){return e},_a=function(e){var r=e;return r},kf=s(function(e,r){var n=e,a=r;return a.gX*n.gX+a.g$*n.g$+a.dR*n.dR}),ri=function(e){var r=e;return r.fC},re=s(function(e,r){var n=r;return e*n}),ni=function(e){var r=e;return r.dg},zf=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=n.gk,$=u;return(a.gX-l.gX)*$.gX+(a.g$-l.g$)*$.g$+(a.dR-l.dR)*$.dR}),Tf=y(function(e,r,n){var a=e,i=r,l=n;return{gX:l.gX+i*a.gX,g$:l.g$+i*a.g$,dR:l.dR+i*a.dR}}),Mf=s(function(e,r){var n=ri(r),a=e,i=a.gk,l=c(kf,i,n);if(l){var u=ni(r),$=c(zf,e,u),v=c(re,-1/l,$);return ce(t(Tf,n,v,u))}else return Y}),Df=s(function(e,r){return{gX:e,g$:r}}),b0=s(function(e,r){var n=e,a=r;return n*a}),Rf=function(e){var r=e;return r},_0=function(e){var r=e;return Rf(r.fj)},Af=function(e){var r=e;return r.a2},tr=$$,Bn=function(e){var r=e,n=c(Fe,q(r.gX),c(Fe,q(r.g$),q(r.dR)));if(n){var a=r.dR/n,i=r.g$/n,l=r.gX/n,u=tr(l*l+i*i+a*a);return ce({gX:l/u,g$:i/u,dR:a/u})}else return Y},dl=s(function(e,r){var n=r;return n/e}),Zr=function(e){var r=e;return r.dg},io=function(e){var r=e;return Zr(r)},co=function(e){var r=e;return-r},Ir=function(e){return e},ml=Ir({gX:0,g$:0,dR:-1}),Bf=s(function(e,r){var n=e,a=r;return a/n}),jf=s(function(e,r){var n=e,a=r,i=n.dS,l=i,u=n.dQ,$=u,v=n.dP,f=v;return{gX:f.gX*a.gX+$.gX*a.g$+l.gX*a.dR,g$:f.g$*a.gX+$.g$*a.g$+l.g$*a.dR,dR:f.dR*a.gX+$.dR*a.g$+l.dR*a.dR}}),Mr=s(function(e,r){return{fC:r,dg:e}}),wr=function(e){var r=e;return{gX:-r.gX,g$:-r.g$,dR:-r.dR}},Fr=function(e){var r=e;return r.dS},lo=function(e){var r=e;return wr(Fr(r))},Ff=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=n.dP,$=u;return(a.gX-l.gX)*$.gX+(a.g$-l.g$)*$.g$}),ai=y(function(e,r,n){var a=e,i=r,l=n;return{gX:a,g$:i,dR:l}}),Ef=X(function(e,r,n,a){var i=e,l=r,u=n,$=a,v=i.dg,f=v,m=i.dS,p=m,h=i.dQ,d=h,_=i.dP,b=_;return{gX:f.gX+l*b.gX+u*d.gX+$*p.gX,g$:f.g$+l*b.g$+u*d.g$+$*p.g$,dR:f.dR+l*b.dR+u*d.dR+$*p.dR}}),Vf=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=n.dQ,$=u;return(a.gX-l.gX)*$.gX+(a.g$-l.g$)*$.g$}),Oe=0,Xf=y(function(e,r,n){var a=e,i=c(Vf,_0(r),n),l=c(Ff,_0(r),n),u=a.dN,$=u,v=Af(r);v.a;var f=v.b,m=a.dt;if(m.$){var _=m.a,b=c(Bf,f,_),x=k(Ef,$,c(b0,b,l),c(b0,b,i),Oe);return c(Mr,x,lo(a.dN))}else{var p=m.a,h=co(c(dl,p,c(re,.5,f))),d=c(jf,$,c(Ke,ml,Bn(t(ai,l,i,h))));return c(Mr,io(a.dN),d)}}),me=function(e){var r=e;return q(r)},Dr=r$,Rr=n$,uo=function(e){var r=e;return{gX:Dr(r),g$:Rr(r)}},Nf=function(e){var r=e;return{gX:-r.g$,g$:r.gX}},Wf=function(e){return e},If=s(function(e,r){return Wf({dg:r,dP:e,dQ:Nf(e)})}),Gf=s(function(e,r){return c(If,uo(e),r)}),Hf=y(function(e,r,n){var a=e.a,i=e.b;return{fj:c(Gf,r,n),a2:T(me(a),me(i))}}),on=function(e){var r=e;return r.gX},Uf=s(function(e,r){var n=e,a=r;return{gX:n,g$:a}}),cn=function(e){var r=e;return r.g$},ln=function(e){var r=e;return r.dR},Of=X(function(e,r,n,a){var i=n.gX,l=n.g$,u=function(f){return t(Lf,_a(on(f)),_a(cn(f)),_a(ln(f)))},$=t(Hf,T($a(r.gV),$a(r.fS)),Mn(0),c(Df,0,0)),v=c(Uf,$a(i),$a(l));return c(_e,u,c(Mf,a,t(Xf,e,$,v)))}),bn=s(function(e,r){var n=e,a=r;return{gX:a.gX+n.gX,g$:a.g$+n.g$,dR:a.dR+n.dR}}),Jf=s(function(e,r){return{gk:e,dg:r}}),qf=s(function(e,r){var n=r;return c(Jf,n.gk,c(bn,e,n.dg))}),We={gX:0,g$:0,dR:0},Zf=s(function(e,r){return{gk:r,dg:e}}),pl=Ir({gX:0,g$:0,dR:1}),it=pl,Yf=c(Zf,We,it),Qf=X(function(e,r,n,a){return k(Of,r,n,a,c(qf,t(ai,qe(0),qe(0),qe(e)),Yf))}),gl=Qf(0),hl=function(e){return{$:1,a:e}},_n=s(function(e,r){var n=r;return U(n,{as:e})}),ti=y(function(e,r,n){return Z(n,e)<0?e:Z(n,r)>0?r:n}),Ea=s(function(e,r){var n=r.a,a=r.b;return T(e*n,e*a)}),oi=s(function(e,r){var n=e.a,a=e.b,i=r.gX,l=r.g$;return{gX:i+n,g$:l+a}}),bl=s(function(e,r){return T(r.gX-e.gX,r.g$-e.g$)}),Kf=y(function(e,r,n){return function(a){return c(oi,a,e)}(c(Ea,r,c(bl,e,n)))}),e2=y(function(e,r,n){var a=n,i=t(ti,a.gd,a.gc,a.g7+e);return U(a,{ah:t(Kf,r,a.g7/i,a.ah),g7:i})}),r2=y(function(e,r,n){var a=e.gU,i=e.fu,l=n,u=T(!!a.fz||!!a.fA,l.as);if(u.a&&u.b.$===1){var $=u.b.a.bC,v=.002*(l.gc-l.gd);return t(e2,v*-a.fA,r,c(_n,hl({bC:!!a.fz&&!a.fA?$:i}),l))}else return l}),n2=s(function(e,r){e.cV;var n=e.bJ,a=r,i=a.as;if(i.$===2){var l=i.a.eQ,u=i.a.eL,$=c(Ea,1/a.g7,c(bl,c(ei,n.gX,n.g$),l));return U(a,{ah:c(oi,$,u)})}else return a}),a2=s(function(e,r){var n=e.gU,a=r,i=a.as;if(i.$)return a;var l=c(Ea,1.4,c(Ea,1/a.g7,T(n.fz,-n.fA)));return U(a,{ah:c(oi,l,a.ah)})}),t2=function(e){return{$:2,a:e}},_l=s(function(e,r){return c(qo,function(n){return Qe(n,e)},r)}),o2=s(function(e,r){var n=e.cV,a=e.bJ,i=r;return c(_l,"Space",n.eS)&&a.d_?c(_n,t2({eL:i.ah,eQ:c(ei,a.gX,a.g$)}),i):i}),i2=s(function(e,r){e.gU;var n=e.cV,a=e.fu,i=r,l=T(n.fw,i.as);return l.a&&!l.b.$?(l.b,c(_n,hl({bC:a}),i)):i}),c2=s(function(e,r){var n=e.bJ,a=r;return n.e9?c(_n,ot,a):a}),l2=s(function(e,r){var n=e.gU,a=e.fu,i=r,l=T(!!n.fz,i.as);if(l.a&&l.b.$===1){var u=l.b.a.bC;return!!n.fz&&a-u>.06?c(_n,ot,i):i}else return i}),u2=s(function(e,r){var n=e.fu,a=r,i=a.as;if(i.$===1){var l=i.a.bC;return n-l>.08?c(_n,ot,a):a}else return a}),$2=y(function(e,r,n){return c(c2,e,c(n2,e,c(o2,e,c(a2,e,c(u2,e,c(l2,e,t(r2,e,r,c(i2,e,n))))))))}),v2=function(e){var r=e;return{gs:r.ah.gX,gt:r.ah.g$,g7:r.g7}},s2=t$,f2=s(function(e,r){var n=e,a=r,i=a.dR-n.dR,l=a.g$-n.g$,u=a.gX-n.gX,$=c(Fe,q(u),c(Fe,q(l),q(i)));if($){var v=i/$,f=l/$,m=u/$,p=tr(m*m+f*f+v*v);return ce({gX:m/p,g$:f/p,dR:v/p})}else return Y}),St=function(e){return e},ii=s(function(e,r){var n=e,a=r;return{gX:a.g$*n.dR-a.dR*n.g$,g$:a.dR*n.gX-a.gX*n.dR,dR:a.gX*n.g$-a.g$*n.gX}}),Va=s(function(e,r){var n=e,a=r;return{gX:a.gX-n.gX,g$:a.g$-n.g$,dR:a.dR-n.dR}}),d2=s(function(e,r){var n=e,a=r;return a.gX*n.gX+a.g$*n.g$+a.dR*n.dR}),wl=s(function(e,r){var n=e,a=r;return Z(a,n)>0}),m2=s(function(e,r){var n=e,a=r;return Z(a,n)<0}),p2=s(function(e,r){var n=e,a=r;return{gX:a.gX-n.gX,g$:a.g$-n.g$,dR:a.dR-n.dR}}),g2=s(function(e,r){var n=e,a=r,i=a.gX*n.gX+a.g$*n.g$+a.dR*n.dR;return{gX:n.gX*i,g$:n.g$*i,dR:n.dR*i}}),h2=function(e){var r=e;return{gX:-r.gX,g$:-r.g$,dR:-r.dR}},xl={gX:0,g$:0,dR:0},b2=y(function(e,r,n){return c(ao,function(a){var i=c(p2,c(g2,a,r),r);return c(ao,function(l){var u=c(ii,r,e),$=c(d2,n,u),v=c(wl,Oe,$)?u:c(m2,Oe,$)?h2(u):xl;return c(_e,function(f){return F(a,l,f)},Bn(v))},Bn(i))},Bn(e))}),_2=function(e){var r=e,n=q(r.dR),a=q(r.g$),i=q(r.gX);if(Z(i,a)<1)if(Z(i,n)<1){var l=tr(r.dR*r.dR+r.g$*r.g$);return{gX:0,g$:-r.dR/l,dR:r.g$/l}}else{var l=tr(r.g$*r.g$+r.gX*r.gX);return{gX:-r.g$/l,g$:r.gX/l,dR:0}}else if(Z(a,n)<1){var l=tr(r.dR*r.dR+r.gX*r.gX);return{gX:r.dR/l,g$:0,dR:-r.gX/l}}else{var l=tr(r.gX*r.gX+r.g$*r.g$);return{gX:-r.g$/l,g$:r.gX/l,dR:0}}},ci=function(e){var r=_2(e),n=r,a=n,i=e,l=i,u={gX:l.g$*a.dR-l.dR*a.g$,g$:l.dR*a.gX-l.gX*a.dR,dR:l.gX*a.g$-l.g$*a.gX};return T(r,u)},an=function(e){var r=e;return r},pr=function(e){return e},w2=s(function(e,r){var n=ci(e),a=n.a,i=n.b;return pr({dg:r,dP:a,dQ:i,dS:e})}),x2=function(e){var r=c(Va,e.ba,e.d5),n=an(e.fa),a=c(ii,r,n),i=t(b2,r,n,a);if(i.$){var f=Bn(r);if(f.$){var p=ci(e.fa),h=p.a,d=p.b;return pr({dg:e.d5,dP:d,dQ:e.fa,dS:h})}else{var m=f.a;return c(w2,m,e.d5)}}else{var l=i.a,u=l.a,$=l.b,v=l.c;return pr({dg:e.d5,dP:v,dQ:$,dS:u})}},y2=function(e){return{$:0,a:e}},wa=function(e){var r=e;return .5*r},S2=a$,C2=function(e){var r=e;return S2(r)},P2=function(e){var r=wa(me(e.fb)),n=C2(r);return{dt:y2(n),dN:e.dN}},li=Ir({gX:0,g$:1,dR:0}),L2=function(e){var r=e.ba,n=e.d5,a=e.fa;return P2({fb:Hr(2*s2(.5)),dN:x2({d5:St(n),ba:St(r),fa:c(Ke,li,c(f2,We,St(a)))})})},ui=s(function(e,r){var n=v2(r),a=n.gs,i=n.gt,l=n.g7;return L2({d5:{gX:a,g$:i,dR:e.fS/l},ba:{gX:a,g$:i,dR:0},fa:{gX:0,g$:1,dR:0}})}),k2=s(function(e,r){var n=c(Ke,{gX:0,g$:0},c(_e,function(a){return{gX:a.gX,g$:a.g$}},t(gl,c(ui,e.aE,r.al),e.aE,e.bJ)));return U(r,{al:t($2,e,n,r.al)})}),z2=function(e){var r=e.gX,n=e.g$;return{cx:2/tr(3)*r,cz:-1/tr(3)*r+n}},T2=s(function(e,r){var n=t(gl,c(ui,e.aE,r.al),e.aE,e.bJ);if(n.$===1)return r;var a=n.a;return U(r,{be:z2({gX:a.gX,g$:a.g$})})}),M2=s(function(e,r){return c(Pf,e,c(yf,e,c(T2,e,c(k2,e,r))))}),D2=s(function(e,r){return U(r,{fl:e})}),R2=s(function(e,r){return U(r,{bH:e})}),A2=s(function(e,r){var n=r;return U(n,{m:c(R,n.D,n.m),D:e})}),$i=function(e){var r=e;return r.D},B2=s(function(e,r){var n=r;if(e.$)return n;var a=$i(n.X);return c(qr,A2(U(a,{gi:a.gi+" copy"})),n)}),j2=s(function(e,r){var n=r;if(e.$===4){var a=e.a;return c(qr,fl(function(i){return U(i,{gi:a})}),n)}else return n}),F2=s(function(e,r){return{gi:e,gr:r}}),E2=N$,V2=D$,X2=s(function(e,r){var n=r;return U(n,{X:function(){var a=t(Rc,F2,c(A,"name",fn),c(A,"page",n.eK));return c(ul,n.X,c(E2,c(j,function(i){if(i.b){var l=i.a,u=i.b;return Pe(c(vl,l,u))}else return V2("List of pages is empty")},In(a)),e))}()})}),N2=s(function(e,r){return t(Or,O$(e),G$(),r)}),W2=function(e){return t(Or,s(function(r,n){var a=r.a,i=r.b;return t(U$,a,i,n)}),H$(),e)},vi=function(e){var r=e;return $e(xe(r.m),$e(g([r.D]),r.r))},I2=s(function(e,r){var n=r;switch(e.$){case 6:return U(n,{dG:c(Sc,2,c(N2,function(i){return W2(g([T("name",Zo(i.gi)),T("page",n.d1(i.gr))]))},vi(n.X)))});case 7:return c(X2,n.cv,n);case 8:var a=e.a;return U(n,{cv:a});default:return n}}),G2=function(e){var r=e,n=r.r;if(n.b){var a=n.a,i=n.b;return U(r,{r:i,m:c(R,a,r.m)})}else return U(r,{r:xe(r.m),m:C})},H2=s(function(e,r){var n=r;return e.$===2?c(qr,G2,n):n}),U2=function(e){var r=e,n=r.m;if(n.b){var a=n.a,i=n.b;return U(r,{r:c(R,a,r.r),m:i})}else return U(r,{r:C,m:xe(r.r)})},O2=s(function(e,r){var n=r;return e.$===3?c(qr,U2,n):n}),J2=function(e){var r=e,n=r.m;if(n.b){var a=n.a,i=n.b;return U(r,{m:i,D:a})}else{var l=r.r;if(l.b){var a=l.a,i=l.b;return U(r,{r:i,D:a})}else return r}},q2=s(function(e,r){var n=r;return e.$===1?c(qr,J2,n):n}),Z2=s(function(e,r){var n=r,a=vi(n),i=c(Gr,dr(a),e),l=c(Oo,i,a);if(l.b){var u=l.a,$=l.b;return{r:$,m:xe(c(Vc,i,a)),D:u}}else return n}),Y2=s(function(e,r){var n=r;if(e.$===5){var a=e.a;return c(qr,Z2(a),n)}else return n}),Q2=s(function(e,r){return c(I2,e,c(j2,e,c(Y2,e,c(O2,e,c(H2,e,c(q2,e,c(B2,e,r)))))))}),K2=y(function(e,r,n){switch(r.$){case 0:return U(n,{a4:!n.a4});case 1:var a=r.a;return c(Fa,R2(a),n);case 2:var i=r.a;return U(n,{aF:i});case 3:return c(Fa,D2(n.aF),n);default:var l=r.a;return U(n,{R:c(Q2,l,n.R)})}}),ed=function(e){var r=e,n=r.as;return n.$===2},rd=s(function(e,r){return c(te,"cursor",c(_l,"Space",e.cV.eS)?ed(r.al)?"grabbing":"grab":"default")}),Un=function(e){var r=e;return $i(r.X).gr},Pr=function(e){return e*dn/180},wn=s(function(e,r){return{$:0,a:e,b:r}}),nd=c(wn,t(o,.001462,466e-6,.013866),g([t(o,.002267,.00127,.01857),t(o,.003299,.002249,.024239),t(o,.004547,.003392,.030909),t(o,.006006,.004692,.038558),t(o,.007676,.006136,.046836),t(o,.009561,.007713,.055143),t(o,.011663,.009417,.06346),t(o,.013995,.011225,.071862),t(o,.016561,.013136,.080282),t(o,.019373,.015133,.088767),t(o,.022447,.017199,.097327),t(o,.025793,.019331,.10593),t(o,.029432,.021503,.114621),t(o,.033385,.023702,.123397),t(o,.037668,.025921,.132232),t(o,.042253,.028139,.141141),t(o,.046915,.030324,.150164),t(o,.051644,.032474,.159254),t(o,.056449,.034569,.168414),t(o,.06134,.03659,.177642),t(o,.066331,.038504,.186962),t(o,.071429,.040294,.196354),t(o,.076637,.041905,.205799),t(o,.081962,.043328,.215289),t(o,.087411,.044556,.224813),t(o,.09299,.045583,.234358),t(o,.098702,.046402,.243904),t(o,.104551,.047008,.25343),t(o,.110536,.047399,.262912),t(o,.116656,.047574,.272321),t(o,.122908,.047536,.281624),t(o,.129285,.047293,.290788),t(o,.135778,.046856,.299776),t(o,.142378,.046242,.308553),t(o,.149073,.045468,.317085),t(o,.15585,.044559,.325338),t(o,.162689,.043554,.333277),t(o,.169575,.042489,.340874),t(o,.176493,.041402,.348111),t(o,.183429,.040329,.354971),t(o,.190367,.039309,.361447),t(o,.197297,.0384,.367535),t(o,.204209,.037632,.373238),t(o,.211095,.03703,.378563),t(o,.217949,.036615,.383522),t(o,.224763,.036405,.388129),t(o,.231538,.036405,.3924),t(o,.238273,.036621,.396353),t(o,.244967,.037055,.400007),t(o,.25162,.037705,.403378),t(o,.258234,.038571,.406485),t(o,.26481,.039647,.409345),t(o,.271347,.040922,.411976),t(o,.27785,.042353,.414392),t(o,.284321,.043933,.416608),t(o,.290763,.045644,.418637),t(o,.297178,.04747,.420491),t(o,.303568,.049396,.422182),t(o,.309935,.051407,.423721),t(o,.316282,.05349,.425116),t(o,.32261,.055634,.426377),t(o,.328921,.057827,.427511),t(o,.335217,.06006,.428524),t(o,.3415,.062325,.429425),t(o,.347771,.064616,.430217),t(o,.354032,.066925,.430906),t(o,.360284,.069247,.431497),t(o,.366529,.071579,.431994),t(o,.372768,.073915,.4324),t(o,.379001,.076253,.432719),t(o,.385228,.078591,.432955),t(o,.391453,.080927,.433109),t(o,.397674,.083257,.433183),t(o,.403894,.08558,.433179),t(o,.410113,.087896,.433098),t(o,.416331,.090203,.432943),t(o,.422549,.092501,.432714),t(o,.428768,.09479,.432412),t(o,.434987,.097069,.432039),t(o,.441207,.099338,.431594),t(o,.447428,.101597,.43108),t(o,.453651,.103848,.430498),t(o,.459875,.106089,.429846),t(o,.4661,.108322,.429125),t(o,.472328,.110547,.428334),t(o,.478558,.112764,.427475),t(o,.484789,.114974,.426548),t(o,.491022,.117179,.425552),t(o,.497257,.119379,.424488),t(o,.503493,.121575,.423356),t(o,.50973,.123769,.422156),t(o,.515967,.12596,.420887),t(o,.522206,.12815,.419549),t(o,.528444,.130341,.418142),t(o,.534683,.132534,.416667),t(o,.54092,.134729,.415123),t(o,.547157,.136929,.413511),t(o,.553392,.139134,.411829),t(o,.559624,.141346,.410078),t(o,.565854,.143567,.408258),t(o,.572081,.145797,.406369),t(o,.578304,.148039,.404411),t(o,.584521,.150294,.402385),t(o,.590734,.152563,.40029),t(o,.59694,.154848,.398125),t(o,.603139,.157151,.395891),t(o,.60933,.159474,.393589),t(o,.615513,.161817,.391219),t(o,.621685,.164184,.388781),t(o,.627847,.166575,.386276),t(o,.633998,.168992,.383704),t(o,.640135,.171438,.381065),t(o,.64626,.173914,.378359),t(o,.652369,.176421,.375586),t(o,.658463,.178962,.372748),t(o,.66454,.181539,.369846),t(o,.670599,.184153,.366879),t(o,.676638,.186807,.363849),t(o,.682656,.189501,.360757),t(o,.688653,.192239,.357603),t(o,.694627,.195021,.354388),t(o,.700576,.197851,.351113),t(o,.7065,.200728,.347777),t(o,.712396,.203656,.344383),t(o,.718264,.206636,.340931),t(o,.724103,.20967,.337424),t(o,.729909,.212759,.333861),t(o,.735683,.215906,.330245),t(o,.741423,.219112,.326576),t(o,.747127,.222378,.322856),t(o,.752794,.225706,.319085),t(o,.758422,.229097,.315266),t(o,.76401,.232554,.311399),t(o,.769556,.236077,.307485),t(o,.775059,.239667,.303526),t(o,.780517,.243327,.299523),t(o,.785929,.247056,.295477),t(o,.791293,.250856,.29139),t(o,.796607,.254728,.287264),t(o,.801871,.258674,.283099),t(o,.807082,.262692,.278898),t(o,.812239,.266786,.274661),t(o,.817341,.270954,.27039),t(o,.822386,.275197,.266085),t(o,.827372,.279517,.26175),t(o,.832299,.283913,.257383),t(o,.837165,.288385,.252988),t(o,.841969,.292933,.248564),t(o,.846709,.297559,.244113),t(o,.851384,.30226,.239636),t(o,.855992,.307038,.235133),t(o,.860533,.311892,.230606),t(o,.865006,.316822,.226055),t(o,.869409,.321827,.221482),t(o,.873741,.326906,.216886),t(o,.878001,.33206,.212268),t(o,.882188,.337287,.207628),t(o,.886302,.342586,.202968),t(o,.890341,.347957,.198286),t(o,.894305,.353399,.193584),t(o,.898192,.358911,.18886),t(o,.902003,.364492,.184116),t(o,.905735,.37014,.17935),t(o,.90939,.375856,.174563),t(o,.912966,.381636,.169755),t(o,.916462,.387481,.164924),t(o,.919879,.393389,.16007),t(o,.923215,.399359,.155193),t(o,.92647,.405389,.150292),t(o,.929644,.411479,.145367),t(o,.932737,.417627,.140417),t(o,.935747,.423831,.13544),t(o,.938675,.430091,.130438),t(o,.941521,.436405,.125409),t(o,.944285,.442772,.120354),t(o,.946965,.449191,.115272),t(o,.949562,.45566,.110164),t(o,.952075,.462178,.105031),t(o,.954506,.468744,.099874),t(o,.956852,.475356,.094695),t(o,.959114,.482014,.089499),t(o,.961293,.488716,.084289),t(o,.963387,.495462,.079073),t(o,.965397,.502249,.073859),t(o,.967322,.509078,.068659),t(o,.969163,.515946,.063488),t(o,.970919,.522853,.058367),t(o,.97259,.529798,.053324),t(o,.974176,.53678,.048392),t(o,.975677,.543798,.043618),t(o,.977092,.55085,.03905),t(o,.978422,.557937,.034931),t(o,.979666,.565057,.031409),t(o,.980824,.572209,.028508),t(o,.981895,.579392,.02625),t(o,.982881,.586606,.024661),t(o,.983779,.593849,.02377),t(o,.984591,.601122,.023606),t(o,.985315,.608422,.024202),t(o,.985952,.61575,.025592),t(o,.986502,.623105,.027814),t(o,.986964,.630485,.030908),t(o,.987337,.63789,.034916),t(o,.987622,.64532,.039886),t(o,.987819,.652773,.045581),t(o,.987926,.66025,.05175),t(o,.987945,.667748,.058329),t(o,.987874,.675267,.065257),t(o,.987714,.682807,.072489),t(o,.987464,.690366,.07999),t(o,.987124,.697944,.087731),t(o,.986694,.70554,.095694),t(o,.986175,.713153,.103863),t(o,.985566,.720782,.112229),t(o,.984865,.728427,.120785),t(o,.984075,.736087,.129527),t(o,.983196,.743758,.138453),t(o,.982228,.751442,.147565),t(o,.981173,.759135,.156863),t(o,.980032,.766837,.166353),t(o,.978806,.774545,.176037),t(o,.977497,.782258,.185923),t(o,.976108,.789974,.196018),t(o,.974638,.797692,.206332),t(o,.973088,.805409,.216877),t(o,.971468,.813122,.227658),t(o,.969783,.820825,.238686),t(o,.968041,.828515,.249972),t(o,.966243,.836191,.261534),t(o,.964394,.843848,.273391),t(o,.962517,.851476,.285546),t(o,.960626,.859069,.29801),t(o,.95872,.866624,.31082),t(o,.956834,.874129,.323974),t(o,.954997,.881569,.337475),t(o,.953215,.888942,.351369),t(o,.951546,.896226,.365627),t(o,.950018,.903409,.380271),t(o,.948683,.910473,.395289),t(o,.947594,.917399,.410665),t(o,.946809,.924168,.426373),t(o,.946392,.930761,.442367),t(o,.946403,.937159,.458592),t(o,.946903,.943348,.47497),t(o,.947937,.949318,.491426),t(o,.949545,.955063,.50786),t(o,.95174,.960587,.524203),t(o,.954529,.965896,.540361),t(o,.957896,.971003,.556275),t(o,.961812,.975924,.571925),t(o,.966249,.980678,.587206),t(o,.971162,.985282,.602154),t(o,.976511,.989753,.61676),t(o,.982257,.994109,.631017),t(o,.988362,.998364,.644924)])),ad=c(wn,t(o,.001462,466e-6,.013866),g([t(o,.002258,.001295,.018331),t(o,.003279,.002305,.023708),t(o,.004512,.00349,.029965),t(o,.007588,.006356,.044973),t(o,.009426,.008022,.052844),t(o,.011465,.009828,.06075),t(o,.013708,.011771,.068667),t(o,.016156,.01384,.076603),t(o,.018815,.016026,.084584),t(o,.021692,.01832,.09261),t(o,.024792,.020715,.100676),t(o,.028123,.023201,.108787),t(o,.031696,.025765,.116965),t(o,.03552,.028397,.125209),t(o,.039608,.03109,.133515),t(o,.04383,.03383,.141886),t(o,.048062,.036607,.150327),t(o,.05232,.039407,.158841),t(o,.056615,.04216,.167446),t(o,.060949,.044794,.176129),t(o,.06533,.047318,.184892),t(o,.069764,.049726,.193735),t(o,.074257,.052017,.20266),t(o,.078815,.054184,.211667),t(o,.083446,.056225,.220755),t(o,.088155,.058133,.229922),t(o,.092949,.059904,.239164),t(o,.097833,.061531,.248477),t(o,.102815,.06301,.257854),t(o,.107899,.064335,.267289),t(o,.113094,.065492,.276784),t(o,.118405,.066479,.286321),t(o,.123833,.067295,.295879),t(o,.12938,.067935,.305443),t(o,.135053,.068391,.315),t(o,.140858,.068654,.324538),t(o,.146785,.068738,.334011),t(o,.152839,.068637,.343404),t(o,.159018,.068354,.352688),t(o,.165308,.067911,.361816),t(o,.171713,.067305,.370771),t(o,.178212,.066576,.379497),t(o,.184801,.065732,.387973),t(o,.19146,.064818,.396152),t(o,.198177,.063862,.404009),t(o,.204935,.062907,.411514),t(o,.211718,.061992,.418647),t(o,.218512,.061158,.425392),t(o,.225302,.060445,.431742),t(o,.232077,.059889,.437695),t(o,.238826,.059517,.443256),t(o,.245543,.059352,.448436),t(o,.25222,.059415,.453248),t(o,.258857,.059706,.45771),t(o,.265447,.060237,.46184),t(o,.271994,.060994,.46566),t(o,.278493,.061978,.46919),t(o,.284951,.063168,.472451),t(o,.291366,.064553,.475462),t(o,.29774,.066117,.478243),t(o,.304081,.067835,.480812),t(o,.310382,.069702,.483186),t(o,.316654,.07169,.48538),t(o,.322899,.073782,.487408),t(o,.329114,.075972,.489287),t(o,.335308,.078236,.491024),t(o,.341482,.080564,.492631),t(o,.347636,.082946,.494121),t(o,.353773,.085373,.495501),t(o,.359898,.087831,.496778),t(o,.366012,.090314,.49796),t(o,.372116,.092816,.499053),t(o,.378211,.095332,.500067),t(o,.384299,.097855,.501002),t(o,.390384,.100379,.501864),t(o,.396467,.102902,.502658),t(o,.402548,.10542,.503386),t(o,.408629,.10793,.504052),t(o,.414709,.110431,.504662),t(o,.420791,.11292,.505215),t(o,.426877,.115395,.505714),t(o,.432967,.117855,.50616),t(o,.439062,.120298,.506555),t(o,.445163,.122724,.506901),t(o,.451271,.125132,.507198),t(o,.457386,.127522,.507448),t(o,.463508,.129893,.507652),t(o,.46964,.132245,.507809),t(o,.47578,.134577,.507921),t(o,.481929,.136891,.507989),t(o,.488088,.139186,.508011),t(o,.494258,.141462,.507988),t(o,.500438,.143719,.50792),t(o,.506629,.145958,.507806),t(o,.512831,.148179,.507648),t(o,.519045,.150383,.507443),t(o,.52527,.152569,.507192),t(o,.531507,.154739,.506895),t(o,.537755,.156894,.506551),t(o,.544015,.159033,.506159),t(o,.550287,.161158,.505719),t(o,.556571,.163269,.50523),t(o,.562866,.165368,.504692),t(o,.569172,.167454,.504105),t(o,.57549,.16953,.503466),t(o,.581819,.171596,.502777),t(o,.588158,.173652,.502035),t(o,.594508,.175701,.501241),t(o,.600868,.177743,.500394),t(o,.607238,.179779,.499492),t(o,.613617,.181811,.498536),t(o,.620005,.18384,.497524),t(o,.626401,.185867,.496456),t(o,.632805,.187893,.495332),t(o,.639216,.189921,.49415),t(o,.645633,.191952,.49291),t(o,.652056,.193986,.491611),t(o,.658483,.196027,.490253),t(o,.664915,.198075,.488836),t(o,.671349,.200133,.487358),t(o,.677786,.202203,.485819),t(o,.684224,.204286,.484219),t(o,.690661,.206384,.482558),t(o,.697098,.208501,.480835),t(o,.703532,.210638,.479049),t(o,.709962,.212797,.477201),t(o,.716387,.214982,.47529),t(o,.722805,.217194,.473316),t(o,.729216,.219437,.471279),t(o,.735616,.221713,.46918),t(o,.742004,.224025,.467018),t(o,.748378,.226377,.464794),t(o,.754737,.228772,.462509),t(o,.761077,.231214,.460162),t(o,.767398,.233705,.457755),t(o,.773695,.236249,.455289),t(o,.779968,.238851,.452765),t(o,.786212,.241514,.450184),t(o,.792427,.244242,.447543),t(o,.798608,.24704,.444848),t(o,.804752,.249911,.442102),t(o,.810855,.252861,.439305),t(o,.816914,.255895,.436461),t(o,.822926,.259016,.433573),t(o,.828886,.262229,.430644),t(o,.834791,.26554,.427671),t(o,.840636,.268953,.424666),t(o,.846416,.272473,.421631),t(o,.852126,.276106,.418573),t(o,.857763,.279857,.415496),t(o,.86332,.283729,.412403),t(o,.868793,.287728,.409303),t(o,.874176,.291859,.406205),t(o,.879464,.296125,.403118),t(o,.884651,.30053,.400047),t(o,.889731,.305079,.397002),t(o,.8947,.309773,.393995),t(o,.899552,.314616,.391037),t(o,.904281,.31961,.388137),t(o,.908884,.324755,.385308),t(o,.913354,.330052,.382563),t(o,.917689,.3355,.379915),t(o,.921884,.341098,.377376),t(o,.925937,.346844,.374959),t(o,.929845,.352734,.372677),t(o,.933606,.358764,.370541),t(o,.937221,.364929,.368567),t(o,.940687,.371224,.366762),t(o,.944006,.377643,.365136),t(o,.94718,.384178,.363701),t(o,.95021,.39082,.362468),t(o,.953099,.397563,.361438),t(o,.955849,.4044,.360619),t(o,.958464,.411324,.360014),t(o,.960949,.418323,.35963),t(o,.96331,.42539,.359469),t(o,.965549,.432519,.359529),t(o,.967671,.439703,.35981),t(o,.96968,.446936,.360311),t(o,.971582,.45421,.36103),t(o,.973381,.46152,.361965),t(o,.975082,.468861,.363111),t(o,.97669,.476226,.364466),t(o,.97821,.483612,.366025),t(o,.979645,.491014,.367783),t(o,.981,.498428,.369734),t(o,.982279,.505851,.371874),t(o,.983485,.51328,.374198),t(o,.984622,.520713,.376698),t(o,.985693,.528148,.379371),t(o,.9867,.535582,.38221),t(o,.987646,.543015,.38521),t(o,.988533,.550446,.388365),t(o,.989363,.557873,.391671),t(o,.990138,.565296,.395122),t(o,.990871,.572706,.398714),t(o,.991558,.580107,.402441),t(o,.992196,.587502,.406299),t(o,.992785,.594891,.410283),t(o,.993326,.602275,.41439),t(o,.993834,.609644,.418613),t(o,.994309,.616999,.42295),t(o,.994738,.62435,.427397),t(o,.995122,.631696,.431951),t(o,.99548,.639027,.436607),t(o,.99581,.646344,.441361),t(o,.996096,.653659,.446213),t(o,.996341,.660969,.45116),t(o,.99658,.668256,.456192),t(o,.996775,.675541,.461314),t(o,.996925,.682828,.466526),t(o,.997077,.690088,.471811),t(o,.997186,.697349,.477182),t(o,.997254,.704611,.482635),t(o,.997325,.711848,.488154),t(o,.997351,.719089,.493755),t(o,.997351,.726324,.499428),t(o,.997341,.733545,.505167),t(o,.997285,.740772,.510983),t(o,.997228,.747981,.516859),t(o,.997138,.75519,.522806),t(o,.997019,.762398,.528821),t(o,.996898,.769591,.534892),t(o,.996727,.776795,.541039),t(o,.996571,.783977,.547233),t(o,.996369,.791167,.553499),t(o,.996162,.798348,.55982),t(o,.995932,.805527,.566202),t(o,.99568,.812706,.572645),t(o,.995424,.819875,.57914),t(o,.995131,.827052,.585701),t(o,.994851,.834213,.592307),t(o,.994524,.841387,.598983),t(o,.994222,.84854,.605696),t(o,.993866,.855711,.612482),t(o,.993545,.862859,.619299),t(o,.99317,.870024,.626189),t(o,.992831,.877168,.633109),t(o,.99244,.88433,.640099),t(o,.992089,.89147,.647116),t(o,.991688,.898627,.654202),t(o,.991332,.905763,.661309),t(o,.99093,.912915,.668481),t(o,.99057,.920049,.675675),t(o,.990175,.927196,.682926),t(o,.989815,.934329,.690198),t(o,.989434,.94147,.697519),t(o,.989077,.948604,.704863),t(o,.988717,.955742,.712242),t(o,.988367,.962878,.719649),t(o,.988033,.970012,.727077),t(o,.987691,.977154,.734536),t(o,.987387,.984288,.742002),t(o,.987053,.991438,.749504)])),td=c(wn,t(o,.2081,.1663,.5292),g([t(o,.2091,.1721,.5411),t(o,.2101,.1779,.553),t(o,.2109,.1837,.565),t(o,.2116,.1895,.5771),t(o,.2121,.1954,.5892),t(o,.2124,.2013,.6013),t(o,.2125,.2072,.6135),t(o,.2123,.2132,.6258),t(o,.2118,.2192,.6381),t(o,.2111,.2253,.6505),t(o,.2099,.2315,.6629),t(o,.2084,.2377,.6753),t(o,.2063,.244,.6878),t(o,.2038,.2503,.7003),t(o,.2006,.2568,.7129),t(o,.1968,.2632,.7255),t(o,.1921,.2698,.7381),t(o,.1867,.2764,.7507),t(o,.1802,.2832,.7634),t(o,.1728,.2902,.7762),t(o,.1641,.2975,.789),t(o,.1541,.3052,.8017),t(o,.1427,.3132,.8145),t(o,.1295,.3217,.8269),t(o,.1147,.3306,.8387),t(o,.0986,.3397,.8495),t(o,.0816,.3486,.8588),t(o,.0646,.3572,.8664),t(o,.0482,.3651,.8722),t(o,.0329,.3724,.8765),t(o,.0213,.3792,.8796),t(o,.0136,.3853,.8815),t(o,.0086,.3911,.8827),t(o,.006,.3965,.8833),t(o,.0051,.4017,.8834),t(o,.0054,.4066,.8831),t(o,.0067,.4113,.8825),t(o,.0089,.4159,.8816),t(o,.0116,.4203,.8805),t(o,.0148,.4246,.8793),t(o,.0184,.4288,.8779),t(o,.0223,.4329,.8763),t(o,.0264,.437,.8747),t(o,.0306,.441,.8729),t(o,.0349,.4449,.8711),t(o,.0394,.4488,.8692),t(o,.0437,.4526,.8672),t(o,.0477,.4564,.8652),t(o,.0514,.4602,.8632),t(o,.0549,.464,.8611),t(o,.0582,.4677,.8589),t(o,.0612,.4714,.8568),t(o,.064,.4751,.8546),t(o,.0666,.4788,.8525),t(o,.0689,.4825,.8503),t(o,.071,.4862,.8481),t(o,.0729,.4899,.846),t(o,.0746,.4937,.8439),t(o,.0761,.4974,.8418),t(o,.0773,.5012,.8398),t(o,.0782,.5051,.8378),t(o,.0789,.5089,.8359),t(o,.0794,.5129,.8341),t(o,.0795,.5169,.8324),t(o,.0793,.521,.8308),t(o,.0788,.5251,.8293),t(o,.0778,.5295,.828),t(o,.0764,.5339,.827),t(o,.0746,.5384,.8261),t(o,.0724,.5431,.8253),t(o,.0698,.5479,.8247),t(o,.0668,.5527,.8243),t(o,.0636,.5577,.8239),t(o,.06,.5627,.8237),t(o,.0562,.5677,.8234),t(o,.0523,.5727,.8231),t(o,.0484,.5777,.8228),t(o,.0445,.5826,.8223),t(o,.0408,.5874,.8217),t(o,.0372,.5922,.8209),t(o,.0342,.5968,.8198),t(o,.0317,.6012,.8186),t(o,.0296,.6055,.8171),t(o,.0279,.6097,.8154),t(o,.0265,.6137,.8135),t(o,.0255,.6176,.8114),t(o,.0248,.6214,.8091),t(o,.0243,.625,.8066),t(o,.0239,.6285,.8039),t(o,.0237,.6319,.801),t(o,.0235,.6352,.798),t(o,.0233,.6384,.7948),t(o,.0231,.6415,.7916),t(o,.023,.6445,.7881),t(o,.0229,.6474,.7846),t(o,.0227,.6503,.781),t(o,.0227,.6531,.7773),t(o,.0232,.6558,.7735),t(o,.0238,.6585,.7696),t(o,.0246,.6611,.7656),t(o,.0263,.6637,.7615),t(o,.0282,.6663,.7574),t(o,.0306,.6688,.7532),t(o,.0338,.6712,.749),t(o,.0373,.6737,.7446),t(o,.0418,.6761,.7402),t(o,.0467,.6784,.7358),t(o,.0516,.6808,.7313),t(o,.0574,.6831,.7267),t(o,.0629,.6854,.7221),t(o,.0692,.6877,.7173),t(o,.0755,.6899,.7126),t(o,.082,.6921,.7078),t(o,.0889,.6943,.7029),t(o,.0956,.6965,.6979),t(o,.1031,.6986,.6929),t(o,.1104,.7007,.6878),t(o,.118,.7028,.6827),t(o,.1258,.7049,.6775),t(o,.1335,.7069,.6723),t(o,.1418,.7089,.6669),t(o,.1499,.7109,.6616),t(o,.1585,.7129,.6561),t(o,.1671,.7148,.6507),t(o,.1758,.7168,.6451),t(o,.1849,.7186,.6395),t(o,.1938,.7205,.6338),t(o,.2033,.7223,.6281),t(o,.2128,.7241,.6223),t(o,.2224,.7259,.6165),t(o,.2324,.7275,.6107),t(o,.2423,.7292,.6048),t(o,.2527,.7308,.5988),t(o,.2631,.7324,.5929),t(o,.2735,.7339,.5869),t(o,.2845,.7354,.5809),t(o,.2953,.7368,.5749),t(o,.3064,.7381,.5689),t(o,.3177,.7394,.563),t(o,.3289,.7406,.557),t(o,.3405,.7417,.5512),t(o,.352,.7428,.5453),t(o,.3635,.7438,.5396),t(o,.3753,.7446,.5339),t(o,.3869,.7454,.5283),t(o,.3986,.7461,.5229),t(o,.4103,.7467,.5175),t(o,.4218,.7473,.5123),t(o,.4334,.7477,.5072),t(o,.4447,.7482,.5021),t(o,.4561,.7485,.4972),t(o,.4672,.7487,.4924),t(o,.4783,.7489,.4877),t(o,.4892,.7491,.4831),t(o,.5,.7491,.4786),t(o,.5106,.7492,.4741),t(o,.5212,.7492,.4698),t(o,.5315,.7491,.4655),t(o,.5418,.749,.4613),t(o,.5519,.7489,.4571),t(o,.5619,.7487,.4531),t(o,.5718,.7485,.449),t(o,.5816,.7482,.4451),t(o,.5913,.7479,.4412),t(o,.6009,.7476,.4374),t(o,.6103,.7473,.4335),t(o,.6197,.7469,.4298),t(o,.629,.7465,.4261),t(o,.6382,.746,.4224),t(o,.6473,.7456,.4188),t(o,.6564,.7451,.4152),t(o,.6653,.7446,.4116),t(o,.6742,.7441,.4081),t(o,.683,.7435,.4046),t(o,.6918,.743,.4011),t(o,.7004,.7424,.3976),t(o,.7091,.7418,.3942),t(o,.7176,.7412,.3908),t(o,.7261,.7405,.3874),t(o,.7346,.7399,.384),t(o,.743,.7392,.3806),t(o,.7513,.7385,.3773),t(o,.7596,.7378,.3739),t(o,.7679,.7372,.3706),t(o,.7761,.7364,.3673),t(o,.7843,.7357,.3639),t(o,.7924,.735,.3606),t(o,.8005,.7343,.3573),t(o,.8085,.7336,.3539),t(o,.8166,.7329,.3506),t(o,.8246,.7322,.3472),t(o,.8325,.7315,.3438),t(o,.8405,.7308,.3404),t(o,.8484,.7301,.337),t(o,.8563,.7294,.3336),t(o,.8642,.7288,.33),t(o,.872,.7282,.3265),t(o,.8798,.7276,.3229),t(o,.8877,.7271,.3193),t(o,.8954,.7266,.3156),t(o,.9032,.7262,.3117),t(o,.911,.7259,.3078),t(o,.9187,.7256,.3038),t(o,.9264,.7256,.2996),t(o,.9341,.7256,.2953),t(o,.9417,.7259,.2907),t(o,.9493,.7264,.2859),t(o,.9567,.7273,.2808),t(o,.9639,.7285,.2754),t(o,.9708,.7303,.2696),t(o,.9773,.7326,.2634),t(o,.9831,.7355,.257),t(o,.9882,.739,.2504),t(o,.9922,.7431,.2437),t(o,.9952,.7476,.2373),t(o,.9973,.7524,.231),t(o,.9986,.7573,.2251),t(o,.9991,.7624,.2195),t(o,.999,.7675,.2141),t(o,.9985,.7726,.209),t(o,.9976,.7778,.2042),t(o,.9964,.7829,.1995),t(o,.995,.788,.1949),t(o,.9933,.7931,.1905),t(o,.9914,.7981,.1863),t(o,.9894,.8032,.1821),t(o,.9873,.8083,.178),t(o,.9851,.8133,.174),t(o,.9828,.8184,.17),t(o,.9805,.8235,.1661),t(o,.9782,.8286,.1622),t(o,.9759,.8337,.1583),t(o,.9736,.8389,.1544),t(o,.9713,.8441,.1505),t(o,.9692,.8494,.1465),t(o,.9672,.8548,.1425),t(o,.9654,.8603,.1385),t(o,.9638,.8659,.1343),t(o,.9623,.8716,.1301),t(o,.9611,.8774,.1258),t(o,.96,.8834,.1215),t(o,.9593,.8895,.1171),t(o,.9588,.8958,.1126),t(o,.9586,.9022,.1082),t(o,.9587,.9088,.1036),t(o,.9591,.9155,.099),t(o,.9599,.9225,.0944),t(o,.961,.9296,.0897),t(o,.9624,.9368,.085),t(o,.9641,.9443,.0802),t(o,.9662,.9518,.0753),t(o,.9685,.9595,.0703),t(o,.971,.9673,.0651),t(o,.9736,.9752,.0597),t(o,.9763,.9831,.0538)])),od=c(wn,t(o,.050383,.029803,.527975),g([t(o,.063536,.028426,.533124),t(o,.075353,.027206,.538007),t(o,.086222,.026125,.542658),t(o,.096379,.025165,.547103),t(o,.10598,.024309,.551368),t(o,.115124,.023556,.555468),t(o,.123903,.022878,.559423),t(o,.132381,.022258,.56325),t(o,.140603,.021687,.566959),t(o,.148607,.021154,.570562),t(o,.156421,.020651,.574065),t(o,.16407,.020171,.577478),t(o,.171574,.019706,.580806),t(o,.17895,.019252,.584054),t(o,.186213,.018803,.587228),t(o,.193374,.018354,.59033),t(o,.200445,.017902,.593364),t(o,.207435,.017442,.596333),t(o,.21435,.016973,.599239),t(o,.221197,.016497,.602083),t(o,.227983,.016007,.604867),t(o,.234715,.015502,.607592),t(o,.241396,.014979,.610259),t(o,.248032,.014439,.612868),t(o,.254627,.013882,.615419),t(o,.261183,.013308,.617911),t(o,.267703,.012716,.620346),t(o,.274191,.012109,.622722),t(o,.280648,.011488,.625038),t(o,.287076,.010855,.627295),t(o,.293478,.010213,.62949),t(o,.299855,.009561,.631624),t(o,.30621,.008902,.633694),t(o,.312543,.008239,.6357),t(o,.318856,.007576,.63764),t(o,.32515,.006915,.639512),t(o,.331426,.006261,.641316),t(o,.337683,.005618,.643049),t(o,.343925,.004991,.64471),t(o,.35015,.004382,.646298),t(o,.356359,.003798,.64781),t(o,.362553,.003243,.649245),t(o,.368733,.002724,.650601),t(o,.374897,.002245,.651876),t(o,.381047,.001814,.653068),t(o,.387183,.001434,.654177),t(o,.393304,.001114,.655199),t(o,.399411,859e-6,.656133),t(o,.405503,678e-6,.656977),t(o,.41158,577e-6,.65773),t(o,.417642,564e-6,.65839),t(o,.423689,646e-6,.658956),t(o,.429719,831e-6,.659425),t(o,.435734,.001127,.659797),t(o,.441732,.00154,.660069),t(o,.447714,.00208,.66024),t(o,.453677,.002755,.66031),t(o,.459623,.003574,.660277),t(o,.46555,.004545,.660139),t(o,.471457,.005678,.659897),t(o,.477344,.00698,.659549),t(o,.48321,.00846,.659095),t(o,.489055,.010127,.658534),t(o,.494877,.01199,.657865),t(o,.500678,.014055,.657088),t(o,.506454,.016333,.656202),t(o,.512206,.018833,.655209),t(o,.517933,.021563,.654109),t(o,.523633,.024532,.652901),t(o,.529306,.027747,.651586),t(o,.534952,.031217,.650165),t(o,.54057,.03495,.64864),t(o,.546157,.038954,.64701),t(o,.551715,.043136,.645277),t(o,.557243,.047331,.643443),t(o,.562738,.051545,.641509),t(o,.568201,.055778,.639477),t(o,.573632,.060028,.637349),t(o,.579029,.064296,.635126),t(o,.584391,.068579,.632812),t(o,.589719,.072878,.630408),t(o,.595011,.07719,.627917),t(o,.600266,.081516,.625342),t(o,.605485,.085854,.622686),t(o,.610667,.090204,.619951),t(o,.615812,.094564,.61714),t(o,.620919,.098934,.614257),t(o,.625987,.103312,.611305),t(o,.631017,.107699,.608287),t(o,.636008,.112092,.605205),t(o,.640959,.116492,.602065),t(o,.645872,.120898,.598867),t(o,.650746,.125309,.595617),t(o,.65558,.129725,.592317),t(o,.660374,.134144,.588971),t(o,.665129,.138566,.585582),t(o,.669845,.142992,.582154),t(o,.674522,.147419,.578688),t(o,.67916,.151848,.575189),t(o,.683758,.156278,.57166),t(o,.688318,.160709,.568103),t(o,.69284,.165141,.564522),t(o,.697324,.169573,.560919),t(o,.701769,.174005,.557296),t(o,.706178,.178437,.553657),t(o,.710549,.182868,.550004),t(o,.714883,.187299,.546338),t(o,.719181,.191729,.542663),t(o,.723444,.196158,.538981),t(o,.72767,.200586,.535293),t(o,.731862,.205013,.531601),t(o,.736019,.209439,.527908),t(o,.740143,.213864,.524216),t(o,.744232,.218288,.520524),t(o,.748289,.222711,.516834),t(o,.752312,.227133,.513149),t(o,.756304,.231555,.509468),t(o,.760264,.235976,.505794),t(o,.764193,.240396,.502126),t(o,.76809,.244817,.498465),t(o,.771958,.249237,.494813),t(o,.775796,.253658,.491171),t(o,.779604,.258078,.487539),t(o,.783383,.2625,.483918),t(o,.787133,.266922,.480307),t(o,.790855,.271345,.476706),t(o,.794549,.27577,.473117),t(o,.798216,.280197,.469538),t(o,.801855,.284626,.465971),t(o,.805467,.289057,.462415),t(o,.809052,.293491,.45887),t(o,.812612,.297928,.455338),t(o,.816144,.302368,.451816),t(o,.819651,.306812,.448306),t(o,.823132,.311261,.444806),t(o,.826588,.315714,.441316),t(o,.830018,.320172,.437836),t(o,.833422,.324635,.434366),t(o,.836801,.329105,.430905),t(o,.840155,.33358,.427455),t(o,.843484,.338062,.424013),t(o,.846788,.342551,.420579),t(o,.850066,.347048,.417153),t(o,.853319,.351553,.413734),t(o,.856547,.356066,.410322),t(o,.85975,.360588,.406917),t(o,.862927,.365119,.403519),t(o,.866078,.36966,.400126),t(o,.869203,.374212,.396738),t(o,.872303,.378774,.393355),t(o,.875376,.383347,.389976),t(o,.878423,.387932,.3866),t(o,.881443,.392529,.383229),t(o,.884436,.397139,.37986),t(o,.887402,.401762,.376494),t(o,.89034,.406398,.37313),t(o,.89325,.411048,.369768),t(o,.896131,.415712,.366407),t(o,.898984,.420392,.363047),t(o,.901807,.425087,.359688),t(o,.904601,.429797,.356329),t(o,.907365,.434524,.35297),t(o,.910098,.439268,.34961),t(o,.9128,.444029,.346251),t(o,.915471,.448807,.34289),t(o,.918109,.453603,.339529),t(o,.920714,.458417,.336166),t(o,.923287,.463251,.332801),t(o,.925825,.468103,.329435),t(o,.928329,.472975,.326067),t(o,.930798,.477867,.322697),t(o,.933232,.48278,.319325),t(o,.93563,.487712,.315952),t(o,.93799,.492667,.312575),t(o,.940313,.497642,.309197),t(o,.942598,.502639,.305816),t(o,.944844,.507658,.302433),t(o,.947051,.512699,.299049),t(o,.949217,.517763,.295662),t(o,.951344,.52285,.292275),t(o,.953428,.52796,.288883),t(o,.95547,.533093,.28549),t(o,.957469,.53825,.282096),t(o,.959424,.543431,.278701),t(o,.961336,.548636,.275305),t(o,.963203,.553865,.271909),t(o,.965024,.559118,.268513),t(o,.966798,.564396,.265118),t(o,.968526,.5697,.261721),t(o,.970205,.575028,.258325),t(o,.971835,.580382,.254931),t(o,.973416,.585761,.25154),t(o,.974947,.591165,.248151),t(o,.976428,.596595,.244767),t(o,.977856,.602051,.241387),t(o,.979233,.607532,.238013),t(o,.980556,.613039,.234646),t(o,.981826,.618572,.231287),t(o,.983041,.624131,.227937),t(o,.984199,.629718,.224595),t(o,.985301,.63533,.221265),t(o,.986345,.640969,.217948),t(o,.987332,.646633,.214648),t(o,.98826,.652325,.211364),t(o,.989128,.658043,.2081),t(o,.989935,.663787,.204859),t(o,.990681,.669558,.201642),t(o,.991365,.675355,.198453),t(o,.991985,.681179,.195295),t(o,.992541,.68703,.19217),t(o,.993032,.692907,.189084),t(o,.993456,.69881,.186041),t(o,.993814,.704741,.183043),t(o,.994103,.710698,.180097),t(o,.994324,.716681,.177208),t(o,.994474,.722691,.174381),t(o,.994553,.728728,.171622),t(o,.994561,.734791,.168938),t(o,.994495,.74088,.166335),t(o,.994355,.746995,.163821),t(o,.994141,.753137,.161404),t(o,.993851,.759304,.159092),t(o,.993482,.765499,.156891),t(o,.993033,.77172,.154808),t(o,.992505,.777967,.152855),t(o,.991897,.784239,.151042),t(o,.991209,.790537,.149377),t(o,.990439,.796859,.14787),t(o,.989587,.803205,.146529),t(o,.988648,.809579,.145357),t(o,.987621,.815978,.144363),t(o,.986509,.822401,.143557),t(o,.985314,.828846,.142945),t(o,.984031,.835315,.142528),t(o,.982653,.841812,.142303),t(o,.98119,.848329,.142279),t(o,.979644,.854866,.142453),t(o,.977995,.861432,.142808),t(o,.976265,.868016,.143351),t(o,.974443,.874622,.144061),t(o,.97253,.88125,.144923),t(o,.970533,.887896,.145919),t(o,.968443,.894564,.147014),t(o,.966271,.901249,.14818),t(o,.964021,.90795,.14937),t(o,.961681,.914672,.15052),t(o,.959276,.921407,.151566),t(o,.956808,.928152,.152409),t(o,.954287,.934908,.152921),t(o,.951726,.941671,.152925),t(o,.949151,.948435,.152178),t(o,.946602,.95519,.150328),t(o,.944152,.961916,.146861),t(o,.941896,.96859,.140956),t(o,.940015,.975158,.131326)])),id=c(wn,t(o,.267004,.004874,.329415),g([t(o,.26851,.009605,.335427),t(o,.269944,.014625,.341379),t(o,.271305,.019942,.347269),t(o,.272594,.025563,.353093),t(o,.273809,.031497,.358853),t(o,.274952,.037752,.364543),t(o,.276022,.044167,.370164),t(o,.277018,.050344,.375715),t(o,.277941,.056324,.381191),t(o,.278791,.062145,.386592),t(o,.279566,.067836,.391917),t(o,.280267,.073417,.397163),t(o,.280894,.078907,.402329),t(o,.281446,.08432,.407414),t(o,.281924,.089666,.412415),t(o,.282327,.094955,.417331),t(o,.282656,.100196,.42216),t(o,.28291,.105393,.426902),t(o,.283091,.110553,.431554),t(o,.283197,.11568,.436115),t(o,.283229,.120777,.440584),t(o,.283187,.125848,.44496),t(o,.283072,.130895,.449241),t(o,.282884,.13592,.453427),t(o,.282623,.140926,.457517),t(o,.28229,.145912,.46151),t(o,.281887,.150881,.465405),t(o,.281412,.155834,.469201),t(o,.280868,.160771,.472899),t(o,.280255,.165693,.476498),t(o,.279574,.170599,.479997),t(o,.278826,.17549,.483397),t(o,.278012,.180367,.486697),t(o,.277134,.185228,.489898),t(o,.276194,.190074,.493001),t(o,.275191,.194905,.496005),t(o,.274128,.199721,.498911),t(o,.273006,.20452,.501721),t(o,.271828,.209303,.504434),t(o,.270595,.214069,.507052),t(o,.269308,.218818,.509577),t(o,.267968,.223549,.512008),t(o,.26658,.228262,.514349),t(o,.265145,.232956,.516599),t(o,.263663,.237631,.518762),t(o,.262138,.242286,.520837),t(o,.260571,.246922,.522828),t(o,.258965,.251537,.524736),t(o,.257322,.25613,.526563),t(o,.255645,.260703,.528312),t(o,.253935,.265254,.529983),t(o,.252194,.269783,.531579),t(o,.250425,.27429,.533103),t(o,.248629,.278775,.534556),t(o,.246811,.283237,.535941),t(o,.244972,.287675,.53726),t(o,.243113,.292092,.538516),t(o,.241237,.296485,.539709),t(o,.239346,.300855,.540844),t(o,.237441,.305202,.541921),t(o,.235526,.309527,.542944),t(o,.233603,.313828,.543914),t(o,.231674,.318106,.544834),t(o,.229739,.322361,.545706),t(o,.227802,.326594,.546532),t(o,.225863,.330805,.547314),t(o,.223925,.334994,.548053),t(o,.221989,.339161,.548752),t(o,.220057,.343307,.549413),t(o,.21813,.347432,.550038),t(o,.21621,.351535,.550627),t(o,.214298,.355619,.551184),t(o,.212395,.359683,.55171),t(o,.210503,.363727,.552206),t(o,.208623,.367752,.552675),t(o,.206756,.371758,.553117),t(o,.204903,.375746,.553533),t(o,.203063,.379716,.553925),t(o,.201239,.38367,.554294),t(o,.19943,.387607,.554642),t(o,.197636,.391528,.554969),t(o,.19586,.395433,.555276),t(o,.1941,.399323,.555565),t(o,.192357,.403199,.555836),t(o,.190631,.407061,.556089),t(o,.188923,.41091,.556326),t(o,.187231,.414746,.556547),t(o,.185556,.41857,.556753),t(o,.183898,.422383,.556944),t(o,.182256,.426184,.55712),t(o,.180629,.429975,.557282),t(o,.179019,.433756,.55743),t(o,.177423,.437527,.557565),t(o,.175841,.44129,.557685),t(o,.174274,.445044,.557792),t(o,.172719,.448791,.557885),t(o,.171176,.45253,.557965),t(o,.169646,.456262,.55803),t(o,.168126,.459988,.558082),t(o,.166617,.463708,.558119),t(o,.165117,.467423,.558141),t(o,.163625,.471133,.558148),t(o,.162142,.474838,.55814),t(o,.160665,.47854,.558115),t(o,.159194,.482237,.558073),t(o,.157729,.485932,.558013),t(o,.15627,.489624,.557936),t(o,.154815,.493313,.55784),t(o,.153364,.497,.557724),t(o,.151918,.500685,.557587),t(o,.150476,.504369,.55743),t(o,.149039,.508051,.55725),t(o,.147607,.511733,.557049),t(o,.14618,.515413,.556823),t(o,.144759,.519093,.556572),t(o,.143343,.522773,.556295),t(o,.141935,.526453,.555991),t(o,.140536,.530132,.555659),t(o,.139147,.533812,.555298),t(o,.13777,.537492,.554906),t(o,.136408,.541173,.554483),t(o,.135066,.544853,.554029),t(o,.133743,.548535,.553541),t(o,.132444,.552216,.553018),t(o,.131172,.555899,.552459),t(o,.129933,.559582,.551864),t(o,.128729,.563265,.551229),t(o,.127568,.566949,.550556),t(o,.126453,.570633,.549841),t(o,.125394,.574318,.549086),t(o,.124395,.578002,.548287),t(o,.123463,.581687,.547445),t(o,.122606,.585371,.546557),t(o,.121831,.589055,.545623),t(o,.121148,.592739,.544641),t(o,.120565,.596422,.543611),t(o,.120092,.600104,.54253),t(o,.119738,.603785,.5414),t(o,.119512,.607464,.540218),t(o,.119423,.611141,.538982),t(o,.119483,.614817,.537692),t(o,.119699,.61849,.536347),t(o,.120081,.622161,.534946),t(o,.120638,.625828,.533488),t(o,.12138,.629492,.531973),t(o,.122312,.633153,.530398),t(o,.123444,.636809,.528763),t(o,.12478,.640461,.527068),t(o,.126326,.644107,.525311),t(o,.128087,.647749,.523491),t(o,.130067,.651384,.521608),t(o,.132268,.655014,.519661),t(o,.134692,.658636,.517649),t(o,.137339,.662252,.515571),t(o,.14021,.665859,.513427),t(o,.143303,.669459,.511215),t(o,.146616,.67305,.508936),t(o,.150148,.676631,.506589),t(o,.153894,.680203,.504172),t(o,.157851,.683765,.501686),t(o,.162016,.687316,.499129),t(o,.166383,.690856,.496502),t(o,.170948,.694384,.493803),t(o,.175707,.6979,.491033),t(o,.180653,.701402,.488189),t(o,.185783,.704891,.485273),t(o,.19109,.708366,.482284),t(o,.196571,.711827,.479221),t(o,.202219,.715272,.476084),t(o,.20803,.718701,.472873),t(o,.214,.722114,.469588),t(o,.220124,.725509,.466226),t(o,.226397,.728888,.462789),t(o,.232815,.732247,.459277),t(o,.239374,.735588,.455688),t(o,.24607,.73891,.452024),t(o,.252899,.742211,.448284),t(o,.259857,.745492,.444467),t(o,.266941,.748751,.440573),t(o,.274149,.751988,.436601),t(o,.281477,.755203,.432552),t(o,.288921,.758394,.428426),t(o,.296479,.761561,.424223),t(o,.304148,.764704,.419943),t(o,.311925,.767822,.415586),t(o,.319809,.770914,.411152),t(o,.327796,.77398,.40664),t(o,.335885,.777018,.402049),t(o,.344074,.780029,.397381),t(o,.35236,.783011,.392636),t(o,.360741,.785964,.387814),t(o,.369214,.788888,.382914),t(o,.377779,.791781,.377939),t(o,.386433,.794644,.372886),t(o,.395174,.797475,.367757),t(o,.404001,.800275,.362552),t(o,.412913,.803041,.357269),t(o,.421908,.805774,.35191),t(o,.430983,.808473,.346476),t(o,.440137,.811138,.340967),t(o,.449368,.813768,.335384),t(o,.458674,.816363,.329727),t(o,.468053,.818921,.323998),t(o,.477504,.821444,.318195),t(o,.487026,.823929,.312321),t(o,.496615,.826376,.306377),t(o,.506271,.828786,.300362),t(o,.515992,.831158,.294279),t(o,.525776,.833491,.288127),t(o,.535621,.835785,.281908),t(o,.545524,.838039,.275626),t(o,.555484,.840254,.269281),t(o,.565498,.84243,.262877),t(o,.575563,.844566,.256415),t(o,.585678,.846661,.249897),t(o,.595839,.848717,.243329),t(o,.606045,.850733,.236712),t(o,.616293,.852709,.230052),t(o,.626579,.854645,.223353),t(o,.636902,.856542,.21662),t(o,.647257,.8584,.209861),t(o,.657642,.860219,.203082),t(o,.668054,.861999,.196293),t(o,.678489,.863742,.189503),t(o,.688944,.865448,.182725),t(o,.699415,.867117,.175971),t(o,.709898,.868751,.169257),t(o,.720391,.87035,.162603),t(o,.730889,.871916,.156029),t(o,.741388,.873449,.149561),t(o,.751884,.874951,.143228),t(o,.762373,.876424,.137064),t(o,.772852,.877868,.131109),t(o,.783315,.879285,.125405),t(o,.79376,.880678,.120005),t(o,.804182,.882046,.114965),t(o,.814576,.883393,.110347),t(o,.82494,.88472,.106217),t(o,.83527,.886029,.102646),t(o,.845561,.887322,.099702),t(o,.85581,.888601,.097452),t(o,.866013,.889868,.095953),t(o,.876168,.891125,.09525),t(o,.886271,.892374,.095374),t(o,.89632,.893616,.096335),t(o,.906311,.894855,.098125),t(o,.916242,.896091,.100717),t(o,.926106,.89733,.104071),t(o,.935904,.89857,.108131),t(o,.945636,.899815,.112838),t(o,.9553,.901065,.118128),t(o,.964894,.902323,.123941),t(o,.974417,.90359,.130215),t(o,.983868,.904867,.136897),t(o,.993248,.906157,.143936)])),yl=function(e){switch(e){case 0:return nd;case 1:return ad;case 2:return td;case 3:return od;default:return id}},cd=function(e){e.a;var r=e.b;return dr(r)+1},ld=s(function(e,r){var n=r.a,a=r.b,i=c(Gr,cd(r),e),l=s(function(u,$){e:for(;;)if($.b){var v=$.a,f=$.b;if(u){var m=u-1,p=f;u=m,$=p;continue e}else return v}else return n});return i?c(l,i-1,a):n}),Sl=s(function(e,r){return c(ld,e,yl(r))}),ud=s(function(e,r){return c(_e,function(n){if(n.$)return 0;var a=n.b;return a},c(et,e,r.aM))}),$d=s(function(e,r){return c(Ke,0,tt(c(at,ud(e),r)))}),vd=s(function(e,r){return c($d,e,r.fv)}),Cl=vd,$o=function(e){return{$:0,a:e}},Pl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ct=function(e){return t(ti,0,1,e<=.04045?e/12.92:c(Kn,(e+.055)/1.055,2.4))},ra=Gv,sd=function(e){var r=Qo(e),n=r.du,a=r.cS,i=r.cI;return t(ra,Ct(n),Ct(a),Ct(i))},Ll=function(e){return t(Pl,0,$o(sd(e)),$o(0))},si=s(function(e,r){return{$:0,a:e,b:r}}),ct=s(function(e,r){return{$:2,a:e,b:r}}),lt=function(e){return{$:5,a:e}},fi=s(function(e,r){return{$:4,a:e,b:r}}),di=s(function(e,r){return{$:3,a:e,b:r}}),ut=s(function(e,r){return{$:1,a:e,b:r}}),fd=y(function(e,r,n){return{gX:e,g$:r,dR:n}}),dd=function(e){var r=e;return r},$t=function(e){var r=e;return dd(r.fj)},vt=function(e){var r=e;return r.a2},Er=function(e){var r=e;return r.dP},Vr=function(e){var r=e;return r.dQ},md=s(function(e,r){return pr({dg:c(bn,e,Zr(r)),dP:Er(r),dQ:Vr(r),dS:Fr(r)})}),pd=s(function(e,r){return{fj:c(md,e,$t(r)),a2:vt(r)}}),gd=s(function(e,r){var n=r;return c(Mr,c(bn,e,n.dg),n.fC)}),hd=s(function(e,r){var n=r;return{l:c(gd,e,n.l),f6:n.f6,gx:n.gx}}),mi=function(e){var r=e;return r},bd=function(e){return e},pi=s(function(e,r){var n=mi(r),a=n.a,i=n.b;return bd(T(e(a),e(i)))}),_d=s(function(e,r){return c(pi,bn(e),r)}),st=function(e){var r=e;return r.fr},ft=function(e){var r=e;return r.gx},gi=s(function(e,r){return{fr:r,gx:me(e)}}),wd=s(function(e,r){return c(gi,ft(r),c(bn,e,st(r)))}),hi=s(function(e,r){var n=r,a=n.a,i=n.b,l=n.c;return F(e(a),e(i),e(l))}),xd=s(function(e,r){return c(hi,bn(e),r)}),On=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=t(fd,n,a,i);switch(r.$){case 0:var m=r.a,u=r.b;return c(si,m,c(pd,l,u));case 1:var m=r.a,$=r.b;return c(ut,m,c(xd,l,$));case 3:var m=r.a,v=r.b;return c(di,m,c(wd,l,v));case 2:var m=r.a,f=r.b;return c(ct,m,c(hd,l,f));case 4:var m=r.a,p=r.b;return c(fi,m,c(_d,l,p));default:var h=r.a;return lt(c(K,On(F(n,a,i)),h))}}),vo=function(e){return On(F(e,0,0))},so=function(e){return On(F(0,e,0))},xa=y(function(e,r,n){var a=e,i=r,l=n,u=.5*i,$=Dr(u),v=Rr(u),f=a.fC,m=f,p=m.gX*v,h=$*p,d=p*p,_=m.g$*v,b=$*_,x=p*_,S=_*_,w=1-2*(d+S),L=m.dR*v,B=$*L,G=2*(x-B),W=2*(x+B),N=p*L,I=2*(N+b),H=2*(N-b),E=_*L,Q=2*(E-h),ne=2*(E+h),se=L*L,pe=1-2*(S+se),ve=1-2*(d+se);return{gX:pe*l.gX+G*l.g$+I*l.dR,g$:W*l.gX+ve*l.g$+Q*l.dR,dR:H*l.gX+ne*l.g$+w*l.dR}}),na=y(function(e,r,n){var a=e,i=r,l=n,u=.5*i,$=Dr(u),v=Rr(u),f=a.dg,m=f,p=l.gX-m.gX,h=l.g$-m.g$,d=l.dR-m.dR,_=a.fC,b=_,x=b.gX*v,S=$*x,w=x*x,L=b.g$*v,B=$*L,G=x*L,W=L*L,N=1-2*(w+W),I=b.dR*v,H=$*I,E=2*(G-H),Q=2*(G+H),ne=x*I,se=2*(ne+B),pe=2*(ne-B),ve=L*I,be=2*(ve-S),Ve=2*(ve+S),De=I*I,Sr=1-2*(W+De),Cr=1-2*(w+De);return{gX:m.gX+Sr*p+E*h+se*d,g$:m.g$+Q*p+Cr*h+be*d,dR:m.dR+pe*p+Ve*h+N*d}}),yd=y(function(e,r,n){return pr({dg:t(na,e,r,Zr(n)),dP:t(xa,e,r,Er(n)),dQ:t(xa,e,r,Vr(n)),dS:t(xa,e,r,Fr(n))})}),Sd=y(function(e,r,n){return{fj:t(yd,e,r,$t(n)),a2:vt(n)}}),Cd=s(function(e,r){var n=c(na,e,r),a=c(xa,e,r);return function(i){var l=i;return c(Mr,n(l.dg),a(l.fC))}}),Pd=y(function(e,r,n){var a=n;return{l:t(Cd,e,r,a.l),f6:a.f6,gx:a.gx}}),Ld=y(function(e,r,n){return c(pi,c(na,e,r),n)}),kd=y(function(e,r,n){return c(gi,ft(n),t(na,e,r,st(n)))}),zd=y(function(e,r,n){return c(hi,c(na,e,r),n)}),bi=y(function(e,r,n){switch(n.$){case 0:var $=n.a,a=n.b;return c(si,$,t(Sd,e,r,a));case 1:var $=n.a,i=n.b;return c(ut,$,t(zd,e,r,i));case 3:var $=n.a,l=n.b;return c(di,$,t(kd,e,r,l));case 2:var $=n.a,u=n.b;return c(ct,$,t(Pd,e,r,u));case 4:var $=n.a,v=n.b;return c(fi,$,t(Ld,e,r,v));default:var f=n.a;return lt(c(K,c(bi,e,r),f))}}),Td=c(Mr,We,it),Md=s(function(e,r){return t(bi,Td,Hr(e),r)}),aa=y(function(e,r,n){var a=e,i=n;return{gX:a.gX+r*(i.gX-a.gX),g$:a.g$+r*(i.g$-a.g$),dR:a.dR+r*(i.dR-a.dR)}}),Dd=y(function(e,r,n){var a=$t(n),i=Er(a),l=Vr(a),u=Fr(a),$=t(aa,e,r,Zr(a)),v=r>=0?pr({dg:$,dP:i,dQ:l,dS:u}):pr({dg:$,dP:wr(i),dQ:wr(l),dS:wr(u)}),f=vt(n),m=f.a,p=f.b,h=f.c,d=me(c(re,r,m)),_=me(c(re,r,p)),b=me(c(re,r,h));return{fj:v,a2:F(d,_,b)}}),_i=function(e){var r=e;return r.l},w0=function(e){return ri(_i(e))},Rd=function(e){return ni(_i(e))},kl=function(e){var r=e;return r.f6},zl=function(e){var r=e;return r.gx},Ad=y(function(e,r,n){var a=me(c(re,r,zl(n))),i=me(c(re,r,kl(n))),l=r>=0?w0(n):wr(w0(n)),u=t(aa,e,r,Rd(n));return{l:c(Mr,u,l),f6:i,gx:a}}),Bd=y(function(e,r,n){return c(pi,c(aa,e,r),n)}),jd=y(function(e,r,n){return c(gi,c(re,q(r),ft(n)),t(aa,e,r,st(n)))}),Fd=y(function(e,r,n){return c(hi,c(aa,e,r),n)}),Tl=s(function(e,r){switch(r.$){case 0:var u=r.a,n=r.b;return c(si,u,t(Dd,We,e,n));case 1:var u=r.a,a=r.b;return c(ut,u,t(Fd,We,e,a));case 3:var u=r.a,i=r.b;return c(di,u,t(jd,We,e,i));case 2:var u=r.a,l=r.b;return c(ct,u,t(Ad,We,e,l));case 4:var u=r.a,$=r.b;return c(fi,u,t(Bd,We,e,$));default:var v=r.a;return lt(c(K,Tl(e),v))}}),Ed=s(function(e,r){var n=e.gX,a=e.g$,i=e.dR;return c(ae,On(F(-n,-a,-i)),c(ae,Tl(r),On(F(n,a,i))))}),fo=function(e){var r=e.cx,n=e.cz;return{gX:tr(3)/2*r,g$:1/2*r+n}},Xe=y(function(e,r,n){return F(e,r,n)}),ya=y(function(e,r,n){return{gX:e,g$:r,dR:n}}),Vd=s(function(e,r){var n=r.a,a=r.b,i=r.c;return c(ut,e,t(Xe,t(ya,n.gX,n.g$,n.dR),t(ya,a.gX,a.g$,a.dR),t(ya,i.gX,i.g$,i.dR)))}),Xd=y(function(e,r,n){var a=n.a,i=a.a,l=a.b,u=a.c,$=n.b,v=function(){var _=fo(function(){return i?{cx:.6666666666666666,cz:.6666666666666666}:{cx:.3333333333333333,cz:.3333333333333333}}());return{gX:_.gX,g$:_.g$,dR:0}}(),f=c(Vd,Ll(c(Sl,$,r)),F({gX:0,g$:0,dR:0},{gX:Dr(Pr(30)),g$:Rr(Pr(30)),dR:0},{gX:0,g$:1,dR:0})),m=c(so,1+Rr(Pr(30)),c(vo,Dr(Pr(30)),c(Md,Pr(180),f))),p=fo({cx:l,cz:u}),h=p.gX,d=p.g$;return c(so,d,c(vo,h,t(Ed,v,c(Cl,"trixel scale",e),function(){return i?m:f}())))}),Xa=function(e){return lt(e)},Nd=function(e){var r=e.a;return el(r)},Wd=s(function(e,r){var n=Un(r.R);return Xa(c(K,c(Xd,e,n.bH),Nd(n.gP)))}),Id=s(function(e,r){return r.b?t(yr,R,r,e):e}),Ze=function(e){return t(yr,Id,C,e)},dt=s(function(e,r){return Ze(c(K,e,r))}),Gd=function(e){var r=e,n=r.a,a=r.b;return fo({cx:n,cz:a})},Hd=y(function(e,r,n){return{l:c(Mr,e,r),f6:me(n.f6),gx:me(n.gx)}}),Ud=y(function(e,r,n){return c(ct,e,t(Hd,We,li,{f6:qe(n),gx:qe(r)}))}),Od=Ir({gX:1,g$:0,dR:0}),wi=Od,Jd=c(Mr,We,wi),qd=s(function(e,r){return t(bi,Jd,Hr(e),r)}),Zd=y(function(e,r,n){var a=Gd(n),i=a.gX,l=a.g$;return c(so,l,c(vo,i,c(qd,Pr(90),t(Ud,Ll(e),r,.1))))}),Yd=s(function(e,r){return c(_e,function(n){if(n.$===2){var a=n.a;return a}else return nt},c(et,e,r.aM))}),Qd=s(function(e,r){return c(Ke,nt,tt(c(at,Yd(e),r)))}),Kd=s(function(e,r){return c(Qd,e,r.fv)}),em=Kd,rm=kr,nm=function(e){var r=c(Cl,"grid dot size",e),n=c(em,"grid color",e),a=function(i){var l=function(u){return c(K,function($){return T(u,$)},i)};return dt(l)};return Xa(r?c(K,c(Zd,n,r),c(K,rm,c(a,c(zr,-3,3),c(zr,-2,2)))):C)},am=function(e){return e},tm=function(e){return qe(.01*e)},x0=function(e){return e},om=function(e){return e},im=function(e){return{$:0,a:e}},cm=im,lm={$:3},um=lm,$m=X(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),vm=$m,sm=function(e){return{$:1,a:e}},fm=sm,dm=function(e){return c(gr,"height",Le(e))},mm=function(e){return sv(gv(e))},pm=mm,gm=function(e){return{$:2,a:e}},hm=gm,bm=function(e){return c(Nr,"",e)},Ml=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,l=function($){return or($*1e3)/1e3},u=function($){return or($*1e4)/100};return bm(g(["rgba(",le(u(r)),"%,",le(u(n)),"%,",le(u(a)),"%,",le(l(i)),")"]))},_m=s(function(e,r){switch(r.$){case 0:return c(D1,e,r);case 1:return c(R1,e,r);case 2:return c(A1,e,r);case 3:return c(B1,e,r);case 4:return c(j1,e,r);default:return c(F1,e,r)}}),wm=s(function(e,r){switch(r.$){case 0:return c(l1,e,r);case 1:return c(u1,e,r);case 2:return c($1,e,r);case 3:return c(v1,e,r);case 4:return c(s1,e,r);case 5:return c(f1,e,r);case 6:return c(d1,e,r);case 7:return c(m1,e,r);default:return p1(e)}}),xm=y(function(e,r,n){return t(M1,e,r,n)}),y0=function(e){var r=e;return r},xn=Zv,Pt=k(xn,1,1,1,1),cr=y(function(e,r,n){return c(K,function(a){return c(a,r,n)},e)}),ym=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Sm=s(function(e,r){var n=e,a=r.gX,i=r.g$;return t(ym,n*a/i,n,n*(1-a-i)/i)}),Cm=function(e){var r=e.a,n=e.b,a=e.c;return t(ra,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},xi=s(function(e,r){return Cm(c(Sm,e,r))}),Dl=s(function(e,r){return{eb:Qe(e.eb,r.eb),s:e.s*r.s+e.t*r.v+e.u*r.y,t:e.s*r.t+e.t*r.w+e.u*r.z,u:e.s*r.u+e.t*r.x+e.u*r.A,v:e.v*r.s+e.w*r.v+e.x*r.y,w:e.v*r.t+e.w*r.w+e.x*r.z,x:e.v*r.u+e.w*r.x+e.x*r.A,y:e.y*r.s+e.z*r.v+e.A*r.y,z:e.y*r.t+e.z*r.w+e.A*r.z,A:e.y*r.u+e.z*r.x+e.A*r.A,K:r.K+(e.K*r.s+e.L*r.v+e.M*r.y)*r.cs,L:r.L+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cs,M:r.M+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cs,cs:e.cs*r.cs}}),$r=n1,Pm=function(e){return $r({ej:e.s,ek:e.v,el:e.y,em:e.K,en:e.t,eo:e.w,ep:e.z,eq:e.L,er:e.u,es:e.x,et:e.A,eu:e.M,ev:0,ew:0,ex:0,ey:1})},Lt=ke(function(e,r,n,a,i){var l=a.eb?1:-1,u=k(xn,a.cs,a.cs,a.cs,l);return Ae(i,e,u,Pm(a),a.eb,r,n)}),Rl=ir(function(e,r,n,a,i,l){e:for(;;)switch(i.$){case 0:return l;case 5:var u=i.a,$=i.b,v=e,f=r,m=n,p=c(Dl,u,a),h=$,d=l;e=v,r=f,n=m,a=p,i=h,l=d;continue e;case 1:var _=i.b,b=c(R,P(Lt,e,r,n,a,_),l.P);return{P:b,ac:l.ac,gE:l.gE};case 3:var x=i.b,S=c(R,P(Lt,e,r,n,a,x),l.ac);return{P:l.P,ac:S,gE:l.gE};case 2:var w=i.a,L=c(R,P(Lt,e,r,n,a,w),l.gE);return{P:l.P,ac:l.ac,gE:L};default:var B=i.a;return t(Or,k(Rl,e,r,n,a),l,B)}}),Lm=X(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Al=Lm,yi=X(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),km=function(e){var r=e.aj,n=e.ae,a=e.ad;return k(yi,518,r,n,a)},zm=s(function(e,r){return{$:6,a:e,b:r}}),Tm=zm,Bl=g([km({ad:1,ae:0,aj:!1}),k(Al,!1,!1,!1,!1),c(Tm,0,1)]),mn=519,Si=8,jl=15,un=7681,Mm={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ue=c1,Dm=s(function(e,r){return{$:0,a:e,b:r}}),Rm=Dm({d0:1,ea:0,eH:5}),Ne=Wv,Am=Rm(g([{co:c(Ne,-1,-1)},{co:c(Ne,1,-1)},{co:c(Ne,-1,1)},{co:c(Ne,1,1)}])),Bm={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"co"},uniforms:{}},jm=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:$,i:v,j:f,k:m}}}}}}}}}}}},Ci=y(function(e,r,n){var a=e.dv,i=e.c4,l=e.dO,u=s(function(f,m){var p=f;return m(p)}),$=s(function(f,m){var p=f;return m(p)}),v=function(f){return c(ae,u(f.bR),c(ae,$(f.bw),c(ae,$(f.b_),$(f.b$))))};return c(v,n,c(v,r,t(jm,a,i,l)))}),Pi=function(e){return t(Ci,{c4:e.c4,dv:e.dv,dO:e.dO},{bw:e.bw,bR:e.bR,b_:e.b_,b$:e.b$},{bw:e.bw,bR:e.bR,b_:e.b_,b$:e.b$})},Li=function(e){return P(ue,g([Pi(e),k(Al,!1,!1,!1,!1)]),Bm,Mm,Am,{})},Fm=Li({bw:un,c4:0,dv:Si,bR:mn,dO:jl,b_:un,b$:un}),Em=516,S0=5386,Me=7680,Vm=function(e){return c(Kn,2,e+4)},Fl=function(e){return Li({bw:Me,c4:jl,dv:Si,bR:Em,dO:Vm(e),b_:S0,b$:S0})},Xm=y(function(e,r,n){return Ze(g([t(cr,e,n,Bl),g([Fl(r),Fm])]))}),Nm=s(function(e,r){return Ze(c(Ja,Xm(e),r))}),Wm=function(e){var r=e.aj,n=e.ae,a=e.ad;return k(yi,513,r,n,a)},Im=Wm({ad:1,ae:0,aj:!0}),Gm=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return{$:0,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:$,i:v,j:f}}}}}}}}}}},Hm=function(e){var r=e.cq,n=e.ca,a=e.b3,i=e.b0,l=e.b5,u=e.a$,$=s(function(v,f){var m=v.a,p=v.b,h=v.c,d=f.a,_=f.b,b=f.c;return Gm(m)(p)(h)(d)(_)(b)(r)(n)(a)(i)});return c($,l,u)},Um=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),C0=s(function(e,r){var n=e,a=r;return t(Um,32774,n,a)}),Om=1,P0=771,Jm=770,ki=Hm({b0:0,a$:c(C0,Om,P0),b3:0,b5:c(C0,Jm,P0),ca:0,cq:0}),Yr=g([Im,ki]),qm=function(e){var r=e;return r.eA},Zm=function(e){var r=e;return r.eB},El=function(e){var r=e;return r.eC},Ym=function(e){var r=e;return r.eD},Qm=function(e){var r=e;return r.eE},Vl=function(e){var r=e;return r.eF},$n=s(function(e,r){var n=e,a=r;return a-n}),Xl=function(e){return F(c($n,Ym(e),qm(e)),c($n,Qm(e),Zm(e)),c($n,Vl(e),El(e)))},Km=function(e){return e},e4=function(e){return pr({dg:Km({gX:e.K,g$:e.L,dR:e.M}),dP:Ir({gX:e.s,g$:e.t,dR:e.u}),dQ:Ir({gX:e.v,g$:e.w,dR:e.x}),dS:Ir({gX:e.y,g$:e.z,dR:e.A})})},kt=s(function(e,r){var n=e,a=r,i=n.dS,l=i,u=n.dQ,$=u,v=n.dP,f=v;return{gX:a.gX*f.gX+a.g$*f.g$+a.dR*f.dR,g$:a.gX*$.gX+a.g$*$.g$+a.dR*$.dR,dR:a.gX*l.gX+a.g$*l.g$+a.dR*l.dR}}),Nl=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=a.gX-l.gX,$=a.g$-l.g$,v=a.dR-l.dR,f=n.dS,m=f,p=n.dQ,h=p,d=n.dP,_=d;return{gX:u*_.gX+$*_.g$+v*_.dR,g$:u*h.gX+$*h.g$+v*h.dR,dR:u*m.gX+$*m.g$+v*m.dR}}),Wl=s(function(e,r){return{dg:c(Nl,e,Zr(r)),dP:c(kt,e,Er(r)),dQ:c(kt,e,Vr(r)),dS:c(kt,e,Fr(r))}}),Na=function(e){var r=e;return r},fe=s(function(e,r){var n=e,a=r;return c(Fe,n,a)}),Sa=s(function(e,r){return Z(e,r)<0?e:r}),he=s(function(e,r){var n=e,a=r;return c(Sa,n,a)}),r4=s(function(e,r){var n=Na(r),a=Na(e);return{eA:c(fe,a.eA,n.eA),eB:c(fe,a.eB,n.eB),eC:c(fe,a.eC,n.eC),eD:c(he,a.eD,n.eD),eE:c(he,a.eE,n.eE),eF:c(he,a.eF,n.eF)}}),Ye=function(e){var r=e;return r},n4=function(e){var r=e;return F(r.gX,r.g$,r.dR)},jn=s(function(e,r){var n=e,a=r;return a+n}),a4=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=wa(me(a)),u=wa(me(n)),$=wa(me(i)),v=n4(r),f=v.a,m=v.b,p=v.c;return{eA:c(jn,u,f),eB:c(jn,l,m),eC:c(jn,$,p),eD:c($n,u,f),eE:c($n,l,m),eF:c($n,$,p)}}),L0=X(function(e,r,n,a){var i=n.fr,l=2*n.fQ*r,u=2*n.fP*r,$=2*n.fO*r,v=i.dR*r,f=i.g$*r,m=i.gX*r,p=Ye(Fr(e)),h=q($*p.gX)+q(u*p.g$)+q(l*p.dR),d=Ye(Vr(e)),_=q($*d.gX)+q(u*d.g$)+q(l*d.dR),b=Ye(Er(e)),x=q($*b.gX)+q(u*b.g$)+q(l*b.dR),S=c(a4,F(x,_,h),c(Nl,e,t(ya,m,f,v)));if(a.$)return ce(S);var w=a.a;return ce(c(r4,w,S))}),mo=X(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,l=a.b;switch(i.$){case 0:var d=e,_=r,b=n,x=l;e=d,r=_,n=b,a=x;continue e;case 1:var u=i.a,$=k(L0,e,r,u,n),d=e,_=r,b=$,x=l;e=d,r=_,n=b,a=x;continue e;case 2:var d=e,_=r,b=n,x=l;e=d,r=_,n=b,a=x;continue e;case 3:var u=i.a,$=k(L0,e,r,u,n),d=e,_=r,b=$,x=l;e=d,r=_,n=b,a=x;continue e;case 4:var v=i.a,d=e,_=r,b=k(mo,e,r,n,v),x=l;e=d,r=_,n=b,a=x;continue e;default:var f=i.a,m=i.b,p=c(Wl,e4(f),e),h=r*f.cs,d=e,_=r,b=k(mo,p,h,n,g([m])),x=l;e=d,r=_,n=b,a=x;continue e}}else return n}),yn=Hv,Sn=Uv,Cn=Ov,Il=function(e){return{$:4,a:e}},t4=s(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,l=c(R,n,r);e=i,r=l;continue e}else return r}),ta=function(e){return Il(c(t4,e,C))},o4={eb:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,K:0,L:0,M:0,cs:1},k0=Li({bw:un,c4:0,dv:Si,bR:mn,dO:255,b_:un,b$:un}),i4=function(e){var r=e,n=c(Fe,q(r.gX),c(Fe,q(r.g$),q(r.dR)));if(n){var a=r.dR/n,i=r.g$/n,l=r.gX/n,u=tr(l*l+i*i+a*a);return u*n}else return Oe},Re={b3:0,fq:!1,ca:0,dp:0,cq:0,dI:0,gX:0,g$:0,dR:0},He=s(function(e,r){var n=e,a=r;return $r({ej:n.gX,ek:n.cq,el:a.gX,em:a.cq,en:n.g$,eo:n.ca,ep:a.g$,eq:a.ca,er:n.dR,es:n.b3,et:a.dR,eu:a.b3,ev:n.dI,ew:n.dp,ex:a.dI,ey:a.dp})}),Dn=T({bE:c(He,Re,Re),cf:c(He,Re,Re),cg:c(He,Re,Re),ch:c(He,Re,Re)},k(xn,0,0,0,0)),Gl=514,Hl=function(e){var r=e.aj,n=e.ae,a=e.ad;return k(yi,515,r,n,a)},Ul=240,c4=g([Hl({ad:1,ae:0,aj:!0}),Pi({bw:Me,c4:Ul,dv:0,bR:Gl,dO:0,b_:Me,b$:Me}),ki]),l4=s(function(e,r){var n=e,a=r.gj,i=r.fL,l=r.fi,u=me(a),$=u,v=me(i),f=v,m=n.dt;if(m.$){var h=m.a;return Jt(f)?$r({ej:2/(l*h),ek:0,el:0,em:0,en:0,eo:2/h,ep:0,eq:0,er:0,es:0,et:0,eu:-1,ev:0,ew:0,ex:0,ey:1}):$r({ej:2/(l*h),ek:0,el:0,em:0,en:0,eo:2/h,ep:0,eq:0,er:0,es:0,et:-2/(f-$),eu:-(f+$)/(f-$),ev:0,ew:0,ex:0,ey:1})}else{var p=m.a;return Jt(f)?$r({ej:1/(l*p),ek:0,el:0,em:0,en:0,eo:1/p,ep:0,eq:0,er:0,es:0,et:-1,eu:-2*$,ev:0,ew:0,ex:-1,ey:0}):$r({ej:1/(l*p),ek:0,el:0,em:0,en:0,eo:1/p,ep:0,eq:0,er:0,es:0,et:-(f+$)/(f-$),eu:-2*f*$/(f-$),ev:0,ew:0,ex:-1,ey:0})}}),va=s(function(e,r){return(1&e>>r)===1?0:1}),u4=function(e){return g([Hl({ad:1,ae:0,aj:!0}),Pi({bw:Me,c4:Ul,dv:e,bR:Gl,dO:0,b_:Me,b$:Me}),ki])},$4=y(function(e,r,n){return Ze(c(K,function(a){var i=a<<4,l=k(xn,c(va,a,0),c(va,a,1),c(va,a,2),c(va,a,3));return t(cr,e,T(r,l),u4(i))},c(zr,1,c(Kn,2,n)-1)))}),vn=function(e){var r=e;return r},v4=a1,Ol=li,s4={dg:We,dP:wi,dQ:Ol,dS:it},mt=function(e){var r=e;return r},f4=function(e){var r=mt(Zr(e)),n=Ye(Fr(e)),a=Ye(Vr(e)),i=Ye(Er(e));return $r({ej:i.gX,ek:a.gX,el:n.gX,em:r.gX,en:i.g$,eo:a.g$,ep:n.g$,eq:r.g$,er:i.dR,es:a.dR,et:n.dR,eu:r.dR,ev:0,ew:0,ex:0,ey:1})},d4=s(function(e,r){var n=r;return f4(c(Wl,n,e))}),m4=function(e){return c(d4,s4,e)},p4=function(e){var r=e;return r.dN},g4=function(e){var r=e;return Er(r)},h4=function(e){var r=e;return Vr(r)},b4=function(e){var r=p4(e.al),n=pr({dg:io(r),dP:g4(r),dQ:h4(r),dS:wr(lo(r))}),a=ta(e.a8),i=a,l=k(mo,n,1,Y,g([i]));if(l.$===1)return C;var u=l.a,$=m4(r),v=c(re,.99,c(fe,me(e.a1),co(El(u)))),f=Xl(u),m=f.a,p=f.b,h=f.c,d=i4(t(ai,m,p,h)),_=c(re,1.01,c(jn,d,co(Vl(u)))),b=c(l4,e.al,{fi:e.fi,fL:_,gj:v}),x=v4(b).ey,S=x?Ye(wr(lo(r))):vn(io(r)),w=function(){var ve=e.cw;switch(ve.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var be=ve.a;return T(3,be);case 4:var be=ve.a;return T(4,be);default:return T(5,0)}}(),L=w.a,B=w.b,G=e.b8,W=G,N=c(xi,W,e.cB),I=N,H=$r({ej:0,ek:S.gX,el:yn(I),em:e.e3,en:0,eo:S.g$,ep:Sn(I),eq:_a(d),er:0,es:S.dR,et:Cn(I),eu:L,ev:0,ew:x,ex:0,ey:B}),E=Ae(Rl,H,$,b,o4,i,{P:C,ac:C,gE:C}),Q=e.ce;switch(Q.$){case 0:var ne=Q.a;return Ze(g([t(cr,E.P,T(ne,Pt),Yr),t(cr,E.ac,Dn,Yr)]));case 1:var ne=Q.a;return Ze(g([t(cr,E.P,Dn,Yr),g([k0]),t(cr,E.gE,ne.bE,Bl),g([Fl(0)]),t(cr,E.P,T(ne,Pt),c4),t(cr,E.ac,Dn,Yr)]));default:var se=Q.a,pe=Q.b;return Ze(g([t(cr,E.P,T(pe,Pt),Yr),g([k0]),c(Nm,E.gE,se),t($4,E.P,pe,dr(se)),t(cr,E.ac,Dn,Yr)]))}},_4=function(e){return c(gr,"width",Le(e))},w4=s(function(e,r){var n=g([fm(1),hm(0),cm(!0),k(vm,0,0,0,0)]),a=function(){var L=e.cC;switch(L.$){case 0:return F(n,"0",1);case 1:return F(c(R,um,n),"1",1);default:var B=L.a;return F(n,"0",B)}}(),i=a.a,l=a.b,u=a.c,$=e.a2,v=$.a,f=$.b,m=y0(f),p=c(te,"height",Le(m)+"px"),h=y0(v),d=h/m,_=c(dt,function(L){return b4({fi:d,al:e.al,a1:e.a1,a8:L.a8,b8:L.b8,ce:L.ce,e3:u,cw:L.cw,cB:L.cB})},r),b=c(te,"width",Le(h)+"px"),x=e.a0,S=x,w=Ml(S);return t(pm,"div",g([c(te,"padding","0px"),b,p]),g([T(l,t(xm,i,g([_4(or(h*u)),dm(or(m*u)),b,p,c(te,"display","block"),c(te,"background-color",w)]),_))]))}),x4=function(e){return c(w4,{cC:e.cC,a0:e.a0,al:e.al,a1:e.a1,a2:e.a2},g([{a8:e.a8,b8:e.b8,ce:e.ce,cw:e.cw,cB:e.cB}]))},Jl=function(e){return e},z0=Jl({gX:.31271,g$:.32902}),y4=s(function(e,r){var n=e,a=Ye(r.fC),i=a.gX,l=a.g$,u=a.dR,$=c(xi,r.cT,r.cJ),v=$;return{b3:Cn(v),fq:n,ca:Sn(v),dp:0,cq:yn(v),dI:1,gX:-i,g$:-l,dR:-u}}),S4=function(e){return e},C4=function(e){return S4(1.2*c(Kn,2,e))},zt=function(e){return e},P4={$:0},L4=P4,ql=function(e){return e},T0=function(e){var r=e;return r},k4=function(e){e:for(;;){if(Qe(e.f$,Oe)&&Qe(e.f0,Oe))return Re;if(c(wl,me(e.f$),me(e.f0))){var r={cJ:e.cJ,f$:e.f0,f0:e.f$,fa:wr(e.fa)};e=r;continue e}else{var n=q(T0(e.f0)/dn),a=q(T0(e.f$)/dn),i=Ye(e.fa),l=i.gX,u=i.g$,$=i.dR,v=c(xi,ql(1),e.cJ),f=v;return{b3:a*Cn(f),fq:!1,ca:a*Sn(f),dp:n/a,cq:a*yn(f),dI:3,gX:l,g$:u,dR:$}}}},M0=function(e){return k4({cJ:e.cJ,f$:e.cT,f0:Oe,fa:e.fa})},z4=function(e){var r=e;return r},Zl=function(e){var r=t(ti,1667,25e3,z4(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Jl({gX:n,g$:a})},Yl=function(e){return e},T4=Zl(Yl(12e3)),M4=Zl(Yl(5600)),D4=function(e){return{$:2,a:e}},R4=function(e){return D4(e)},A4=s(function(e,r){return{$:2,a:e,b:r}}),Ql=function(e){return{$:0,a:e}},sa=function(e){var r=e;return r},B4=function(e){var r=e;return r.fq},j4=Ql(Dn.a),F4=s(function(e,r){var n=s(function(a,i){var l=i.a,u=i.b;return e(a)?T(c(R,a,l),u):T(l,c(R,a,u))});return t(yr,n,T(C,C),r)}),E4=function(e){var r=e;return $r({ej:r.gX,ek:r.cq,el:0,em:0,en:r.g$,eo:r.ca,ep:0,eq:0,er:r.dR,es:r.b3,et:0,eu:0,ev:r.dI,ew:r.dp,ex:0,ey:0})},V4=ie(function(e,r,n,a,i,l,u,$){var v=c(F4,B4,g([sa(e),sa(r),sa(n),sa(a)])),f=v.a,m=v.b;if(f.b){var p=$e(f,m);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var h=p.a,d=p.b,_=d.a,b=d.b,x=b.a,S=b.b,w=S.a;return c(A4,c(K,E4,f),{bE:c(He,h,_),cf:c(He,x,w),cg:c(He,i,l),ch:c(He,u,$)})}else return j4}else return Ql({bE:c(He,e,r),cf:c(He,n,a),cg:c(He,i,l),ch:c(He,u,$)})}),X4=y(function(e,r,n){return Ua(V4,e,r,n,Re,Re,Re,Re,Re)}),N4=function(e){var r=c(y4,om(e.gE),{cJ:M4,fC:e.gL,cT:zt(8e4)}),n=M0({cJ:T4,cT:zt(2e4),fa:e.fa}),a=M0({cJ:z0,cT:zt(15e3),fa:wr(e.fa)}),i=t(X4,r,n,a);return x4({cC:R4(e.cP),a0:e.a0,al:e.al,a1:e.a1,a2:e.a2,a8:e.a8,b8:C4(15),ce:i,cw:L4,cB:z0})},Kl=X(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),W4=X(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),eu=X(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ru=X(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),I4=X(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),G4=X(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),H4=X(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),zi=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return k(H4,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return k(Kl,n,r,i,1);case 3:var n=e.a,a=e.b,i=e.c;return k(W4,n,a,i,1);case 4:var n=e.a,a=e.b,i=e.c;return k(eu,n,a,i,1);case 5:var n=e.a,a=e.b,i=e.c;return k(G4,n,a,i,1);case 6:var n=e.a,a=e.b,i=e.c;return k(ru,n,a,i,1);case 7:var n=e.a,a=e.b,i=e.c;return k(I4,n,a,i,1);case 8:return e;case 9:return e;default:return e}},Ti={$:0},U4=ie(function(e,r,n,a,i,l,u,$){e:for(;;)if($.b){var v=$.a,f=$.b,m=Na(u(v)),p=c(he,m.eD,e),h=c(fe,m.eA,r),d=c(he,m.eE,n),_=c(fe,m.eB,a),b=c(he,m.eF,i),x=c(fe,m.eC,l),S=u,w=f;e=p,r=h,n=d,a=_,i=b,l=x,u=S,$=w;continue e}else return{eA:r,eB:a,eC:l,eD:e,eE:n,eF:i}}),O4=y(function(e,r,n){var a=Na(e(r));return Ua(U4,a.eD,a.eA,a.eE,a.eB,a.eF,a.eC,e,n)}),Tt=s(function(e,r){var n=e,a=r;return Z(a,n)<1}),nu=function(e){return c(Tt,e.eA,e.eD)&&c(Tt,e.eB,e.eE)&&c(Tt,e.eC,e.eF)?e:{eA:c(fe,e.eD,e.eA),eB:c(fe,e.eE,e.eB),eC:c(fe,e.eF,e.eC),eD:c(he,e.eD,e.eA),eE:c(he,e.eE,e.eB),eF:c(he,e.eF,e.eC)}},Jn=function(e){var r=e;return r},au=function(e){var r=Jn(e),n=r.a,a=r.b,i=r.c,l=on(n),u=cn(n),$=ln(n),v=on(a),f=cn(a),m=ln(a),p=on(i),h=cn(i),d=ln(i);return nu({eA:c(fe,l,c(fe,v,p)),eB:c(fe,u,c(fe,f,h)),eC:c(fe,$,c(fe,m,d)),eD:c(he,l,c(he,v,p)),eE:c(he,u,c(he,f,h)),eF:c(he,$,c(he,m,d))})},tu=Jv,Be=function(e){return tu(mt(e))},ou=function(e){var r=e;return r},pt=function(e){return tu(ou(e))},J4=s(function(e,r){var n=e,a=r,i=c(Fe,q(a.gX),c(Fe,q(a.g$),q(a.dR)));if(i){var l=a.dR/i,u=a.g$/i,$=a.gX/i,v=tr($*$+u*u+l*l);return{gX:n*$/v,g$:n*u/v,dR:n*l/v}}else return xl}),q4=J4(ql(1)),iu=y(function(e,r,n){var a=c(Va,r,n),i=c(Va,e,r);return q4(c(ii,a,i))}),Z4=function(e){var r=Jn(e),n=r.a,a=r.b,i=r.c,l=pt(t(iu,n,a,i));return F({p:l,co:Be(n)},{p:l,co:Be(a)},{p:l,co:Be(i)})},Y4=s(function(e,r){return{$:2,a:e,b:r}}),cu=Y4({d0:3,ea:0,eH:4}),Q4=function(e){if(e.b){var r=e.a,n=e.b,a=cu(c(K,Z4,e)),i=t(O4,au,r,n);return k(Kl,i,e,a,0)}else return Ti},Ce=y(function(e,r,n){var a=e,i=r,l=n;return{gX:a,g$:i,dR:l}}),lu=function(){var e=qe(1),r=qe(1),n=qe(1),a=c(re,-.5,e),i=c(re,-.5,r),l=c(re,-.5,n),u=t(Ce,l,i,a),$=c(re,.5,e),v=t(Ce,l,i,$),f=c(re,.5,r),m=t(Ce,l,f,a),p=t(Ce,l,f,$),h=c(re,.5,n),d=t(Ce,h,i,a),_=t(Ce,h,f,a),b=t(Ce,h,i,$),x=t(Ce,h,f,$);return zi(Q4(g([t(Xe,u,_,d),t(Xe,u,m,_),t(Xe,v,b,x),t(Xe,v,x,p),t(Xe,d,_,x),t(Xe,d,x,b),t(Xe,u,p,m),t(Xe,u,v,p),t(Xe,u,d,b),t(Xe,u,b,v),t(Xe,m,x,_),t(Xe,m,p,x)])))}(),fa={$:0},K4=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),e5=y(function(e,r,n){var a=r.a,i=r.b,l=r.c,u=e(l),$=e(i),v=e(a),f=pt(t(iu,v,$,u)),m={p:f,co:Be(v)},p={p:f,co:Be($)},h={p:f,co:Be(u)};return c(R,m,c(R,p,c(R,h,n)))}),Mi=function(e){var r=e;return r.F},r5=X(function(e,r,n,a){if(r.$===1)return Y;var i=r.a;if(n.$===1)return Y;var l=n.a;if(a.$===1)return Y;var u=a.a;return ce(t(e,i,l,u))}),po=4294967295>>>32-Xn,go=Uu,n5=y(function(e,r,n){e:for(;;){var a=po&r>>>e,i=c(go,a,n);if(i.$){var f=i.a;return c(go,po&r,f)}else{var l=i.a,u=e-Xn,$=r,v=l;e=u,r=$,n=v;continue e}}}),a5=function(e){return e>>>5<<5},t5=s(function(e,r){var n=r.a,a=r.b,i=r.c,l=r.d;return e<0||Z(e,n)>-1?Y:Z(e,a5(n))>-1?ce(c(go,po&e,l)):ce(t(n5,a,e,i))}),Di=function(e){var r=e;return r.av},Mt=s(function(e,r){return c(t5,e,Di(r))}),o5=function(e){var r=function(n){var a=n.a,i=n.b,l=n.c;return k(r5,y(function(u,$,v){return F(u,$,v)}),c(Mt,a,e),c(Mt,i,e),c(Mt,l,e))};return c(at,r,Mi(e))},i5=y(function(e,r,n){e:for(;;){var a=c(No,Ie,e),i=a.a,l=a.b;if(Z(Ut(i),Ie)<0)return c(Mc,!0,{B:r,n,q:i});var u=l,$=c(R,Tc(i),r),v=n+1;e=u,r=$,n=v;continue e}}),Ri=function(e){return e.b?t(i5,e,C,0):kc},c5=y(function(e,r,n){return e(r(n))}),l5=s(function(e,r){return!c(qo,c(c5,h3,e),r)}),u5=s(function(e,r){return t(yr,s(function(n,a){return e(n)?c(R,n,a):a}),C,r)}),$5=function(e){var r=e.a;return r},uu=s(function(e,r){var n=$5(e),a=function(i){var l=i.a,u=i.b,$=i.c;return l>=0&&Z(l,n)<0&&u>=0&&Z(u,n)<0&&$>=0&&Z($,n)<0};return c(l5,a,r)?{F:r,av:e}:{F:c(u5,a,r),av:e}}),v5=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),oa=v5({d0:1,ea:3,eH:4}),Ca=s(function(e,r){var n=vn(r),a=vn(e);return T(F(a.gX,a.g$,a.dR),F(n.gX,n.g$,n.dR))}),D0=t(ra,0,0,0),Dt=ir(function(e,r,n,a,i,l){var u=l.a,$=l.b,v=l.c,f=c(et,c(Ca,e,r),i);if(f.$){var p={p:D0,co:Be(r)},h={p:D0,co:Be(e)},d=v+1,_=v;return F(c(R,F(n,_,d),c(R,F(n,d,a),u)),c(R,p,c(R,h,$)),v+2)}else{var m=f.a;return F(c(R,F(n,m,a),u),$,v)}}),s5=ke(function(e,r,n,a,i){e:for(;;)if(n.b){var l=n.a,u=l.a,$=l.b,v=l.c,f=n.b,m=e(v),p=e($),h=e(u),d=a+2,_=a+1,b=a,x=e,S=r,w=f,L=a+3,B=Ae(Dt,m,h,d,b,r,Ae(Dt,p,m,_,d,r,Ae(Dt,h,p,b,_,r,i)));e=x,r=S,n=w,a=L,i=B;continue e}else{var G=i,W=G.a,N=G.b;return T(W,xe(N))}}),f5=ke(function(e,r,n,a,i){e:for(;;)if(r.b){var l=r.a,u=l.a,$=l.b,v=l.c,f=r.b,m=e(v),p=e($),h=e(u),d=n+2,_=n+1,b=n,x=t(tn,c(Ca,h,m),d,t(tn,c(Ca,m,p),_,t(tn,c(Ca,p,h),b,i))),S=c(R,F(b,_,d),a),w=e,L=f,B=n+3,G=S,W=x;e=w,r=L,n=B,a=G,i=W;continue e}else return F(a,i,n)}),Xr=y(function(e,r,n){var a=o5(n),i=t(yr,e5(r),C,a),l=P(f5,r,a,0,C,Ko),u=l.a,$=l.b,v=l.c,f=P(s5,r,$,a,0,F(u,C,v)),m=f.a,p=f.b,h=$l(p)?i:$e(i,p);return t(K4,e,c(uu,Ri(h),m),c(oa,h,m))}),ho=function(e){return{F:c(K,function(r){return F(3*r,3*r+1,3*r+2)},c(zr,0,dr(e)-1)),av:Ri(Ze(c(K,function(r){var n=r.a,a=r.b,i=r.c;return g([n,a,i])},e)))}},$u=function(e){switch(e.$){case 0:return fa;case 1:var a=e.a,r=e.b,n=c(K,Jn,r);return t(Xr,a,kr,ho(n));case 2:var a=e.a,r=e.b,n=c(K,Jn,r);return t(Xr,a,kr,ho(n));case 3:var a=e.a,i=e.b;return t(Xr,a,kr,i);case 4:var a=e.a,i=e.b;return t(Xr,a,function(l){return l.co},i);case 5:var a=e.a,i=e.b;return t(Xr,a,function(l){return l.co},i);case 6:var a=e.a,i=e.b;return t(Xr,a,function(l){return l.co},i);case 7:var a=e.a,i=e.b;return t(Xr,a,function(l){return l.co},i);case 8:return fa;case 9:return fa;default:return fa}},R0=$u(lu),vu={$:0},D=vu,we=s(function(e,r){return{$:1,a:e,b:r}}),d5={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b6"}},m5=1029,p5=function(e){return{$:5,a:e}},su=function(e){var r=e;return p5(r)},g5=su(m5),h5=1028,b5=su(h5),je=y(function(e,r,n){return r===1?e?c(R,g5,n):c(R,b5,n):n}),fu={src:`
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
    `,attributes:{position:"co",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Rt=X(function(e,r,n,a){return c(we,r,ie(function(i,l,u,$,v,f,m,p){return P(ue,t(je,$,a,p),fu,d5,n,{b6:e,c:u,d:l,e:f,f:i,g:v})}))}),Ai={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aN"}},du={src:`
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
    `,attributes:{position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},hr=X(function(e,r,n,a){return c(we,r,ie(function(i,l,u,$,v,f,m,p){return P(ue,t(je,$,a,p),du,Ai,n,{aN:e,c:u,d:l,e:f,f:i,g:v})}))}),mu=s(function(e,r){return{$:3,a:e,b:r}}),_5={src:`
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
    `,attributes:{},uniforms:{constantColor:"aN",pointRadius:"cn",sceneProperties:"f"}},pu={src:`
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
    `,attributes:{position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cn",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},w5=X(function(e,r,n,a){return c(mu,n,ie(function(i,l,u,$,v,f,m,p){return P(ue,p,pu,_5,a,{aN:e,c:u,d:l,cn:r,e:f,f:i,g:v})}))}),Bi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},ia=function(e){var r=e;return r},gt=qv,br=ke(function(e,r,n,a,i){return c(we,n,ie(function(l,u,$,v,f,m,p,h){return P(ue,t(je,v,i,h),du,Bi,a,{a6:c(gt,ia(r),e),c:$,d:u,e:m,f:l,g:f})}))}),x5={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cn",sceneProperties:"f"}},y5=ke(function(e,r,n,a,i){return c(mu,a,ie(function(l,u,$,v,f,m,p,h){return P(ue,h,pu,x5,i,{a6:c(gt,ia(r),e),c:$,d:u,cn:n,e:m,f:l,g:f})}))}),gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",materialColor:"c5",sceneProperties:"f",viewMatrix:"g"}},hu={src:`
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
    `,attributes:{normal:"p",position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},da=X(function(e,r,n,a){return c(we,r,ie(function(i,l,u,$,v,f,m,p){var h=m.a,d=m.b;return P(ue,t(je,$,a,p),hu,gu,n,{T:d,bE:h.bE,cf:h.cf,cg:h.cg,ch:h.ch,c5:e,c:u,d:l,e:f,f:i,g:v})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",materialColorTexture:"c6",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},_u={src:`
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
    `,attributes:{normal:"p",position:"co",tangent:"e5",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},S5=ir(function(e,r,n,a,i,l){return c(we,a,ie(function(u,$,v,f,m,p,h,d){var _=h.a,b=h.b;return P(ue,t(je,f,l,d),_u,bu,i,{T:b,bE:_.bE,cf:_.cf,cg:_.cg,ch:_.ch,c6:e,c:v,d:$,bg:r,e:p,f:u,bn:n,g:m})}))}),wu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cH",constantBaseColor:"cL",constantMetallic:"cM",constantRoughness:"cN",enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",metallicTexture:"da",normalMapTexture:"bg",roughnessTexture:"dz",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},C5=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return function(m){return c(we,v,ie(function(p,h,d,_,b,x,S,w){var L=S.a,B=S.b;return P(ue,t(je,_,m,w),_u,wu,f,{cH:e,cL:r,cM:l,cN:a,T:B,bE:L.bE,cf:L.cf,cg:L.cg,ch:L.ch,da:i,c:d,d:h,bg:u,e:x,dz:n,f:p,bn:$,g:b})}))}}}}}}}}}}},xu={src:`
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
    `,attributes:{},uniforms:{baseColor:"cG",enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",metallic:"c9",roughness:"dy",sceneProperties:"f",viewMatrix:"g"}},ma=ir(function(e,r,n,a,i,l){return c(we,a,ie(function(u,$,v,f,m,p,h,d){var _=h.a,b=h.b;return P(ue,t(je,f,l,d),hu,xu,i,{cG:e,T:b,bE:_.bE,cf:_.cf,cg:_.cg,ch:_.ch,c9:n,c:v,d:$,e:p,dy:r,f:u,g:m})}))}),P5=function(e){return{$:0,a:e}},A0=s(function(e,r){return{$:1,a:e,b:r}}),Fn=s(function(e,r){if(r.$){var n=r.a.E;return T(n,1)}else return r.a,T(e,0)}),L5=function(e){return k(xn,yn(e),Sn(e),Cn(e),1)},ji=k(xn,0,0,0,0),Pa=s(function(e,r){if(r.$){var a=r.a.E;return T(a,ji)}else{var n=r.a;return T(e,L5(n))}}),yu=s(function(e,r){var n=T(e,r);if(n.a.$){var i=n.a.a.E;return c(A0,T(i,ji),c(Fn,i,r))}else if(n.b.$){var i=n.b.a.E;return c(A0,c(Pa,i,e),c(Fn,i,r))}else{var a=n.a.a;return n.b.a,P5(a)}}),k5=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),pa=X(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),z5=X(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),T5=function(e){return c(Ne,e,1)},bo=c(Ne,0,0),Qr=s(function(e,r){if(r.$){var a=r.a.E;return T(a,bo)}else{var n=r.a;return T(e,T5(n))}}),Su=X(function(e,r,n,a){var i=k(z5,e,r,n,a);if(i.a.$){var v=i.a.a.E;return k(pa,T(v,ji),c(Qr,v,r),c(Qr,v,n),c(Fn,v,a))}else if(i.b.$){var v=i.b.a.E;return k(pa,c(Pa,v,e),T(v,bo),c(Qr,v,n),c(Fn,v,a))}else if(i.c.$){var v=i.c.a.E;return k(pa,c(Pa,v,e),c(Qr,v,r),T(v,bo),c(Fn,v,a))}else if(i.d.$){var v=i.d.a.E;return k(pa,c(Pa,v,e),c(Qr,v,r),c(Qr,v,n),T(v,1))}else{var l=i.a.a,u=i.b.a,$=i.c.a;return i.d.a,t(k5,l,u,$)}}),M5={src:`
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
    `,attributes:{},uniforms:{backlight:"cD",colorTexture:"b6",sceneProperties:"f"}},At=ke(function(e,r,n,a,i){return c(we,n,ie(function(l,u,$,v,f,m,p,h){return P(ue,t(je,v,i,h),fu,M5,a,{cD:ia(r),b6:e,c:$,d:u,e:m,f:l,g:f})}))}),Cu={src:`
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
    `,attributes:{normal:"p",position:"co",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},D5=X(function(e,r,n,a){return c(we,r,ie(function(i,l,u,$,v,f,m,p){var h=m.a,d=m.b;return P(ue,t(je,$,a,p),Cu,bu,n,{T:d,bE:h.bE,cf:h.cf,cg:h.cg,ch:h.ch,c6:e,c:u,d:l,bg:e,e:f,f:i,bn:0,g:v})}))}),R5=yo(function(e,r,n,a,i,l,u,$,v){return c(we,u,ie(function(f,m,p,h,d,_,b,x){var S=b.a,w=b.b;return P(ue,t(je,h,v,x),Cu,wu,$,{cH:e,cL:r,cM:l,cN:a,T:w,bE:S.bE,cf:S.cf,cg:S.cg,ch:S.ch,da:i,c:p,d:m,bg:e,e:_,dz:n,f,bn:0,g:d})}))}),qn=y(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),A5=function(e){var r=e;return t(qn,r.eD,r.eA,.5)},B5=function(e){var r=e;return t(qn,r.eE,r.eB,.5)},j5=function(e){var r=e;return t(qn,r.eF,r.eC,.5)},F5=function(e){return t(Ce,A5(e),B5(e),j5(e))},O=function(e){var r=Xl(e),n=r.a,a=r.b,i=r.c;return{fr:mt(F5(e)),fO:n/2,fP:a/2,fQ:i/2}},Fi=s(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var $=e.b.a.E;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var i=r.a,u=r.c,a=r.d;return k(Rt,$,O(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return k(Rt,$,O(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return k(Rt,$,O(i),u,a);case 8:return D;case 9:return D;default:return D}}else{var n=e.b.a;switch(r.$){case 0:return D;case 1:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return k(hr,n,O(i),u,a);case 8:var i=r.a,u=r.c;return k(hr,n,O(i),u,0);case 9:var i=r.a,u=r.c;return k(hr,n,O(i),u,0);default:var i=r.a,l=r.b,u=r.d;return k(w5,n,l,O(i),u)}}case 1:if(e.b.$){e.a;var $=e.b.a.E,f=e.c;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var i=r.a,u=r.c,a=r.d;return P(At,$,f,O(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return P(At,$,f,O(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return P(At,$,f,O(i),u,a);case 8:return D;case 9:return D;default:return D}}else{var v=e.b.a,f=e.c;switch(r.$){case 0:return D;case 1:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return P(br,v,f,O(i),u,a);case 8:var i=r.a,u=r.c;return P(br,v,f,O(i),u,0);case 9:var i=r.a,u=r.c;return P(br,v,f,O(i),u,0);default:var i=r.a,l=r.b,u=r.d;return P(y5,v,f,l,O(i),u)}}case 2:e.a;var m=e.b,W=e.c,p=c(yu,m,W);if(p.$){var _=p.a,b=_.a;_.b;var x=p.b,S=x.a,w=x.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var i=r.a,u=r.c,d=r.d;return k(D5,b,O(i),u,d);case 7:var i=r.a,u=r.c,d=r.d;return Ae(S5,b,S,w,O(i),u,d);case 8:return D;case 9:return D;default:return D}}else{var h=p.a;switch(r.$){case 0:return D;case 1:return D;case 2:var i=r.a,u=r.c,d=r.d;return k(da,h,O(i),u,d);case 3:return D;case 4:var i=r.a,u=r.c,d=r.d;return k(da,h,O(i),u,d);case 5:return D;case 6:var i=r.a,u=r.c,d=r.d;return k(da,h,O(i),u,d);case 7:var i=r.a,u=r.c,d=r.d;return k(da,h,O(i),u,d);case 8:return D;case 9:return D;default:return D}}default:e.a;var L=e.b,B=e.c,G=e.d,W=e.e,N=k(Su,L,B,G,W);if(N.$){var Q=N.a,ne=Q.a,se=Q.b,pe=N.b,ve=pe.a,be=pe.b,Ve=N.c,De=Ve.a,Sr=Ve.b,Cr=N.d,S=Cr.a,w=Cr.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var i=r.a,u=r.c,a=r.d;return Nu(R5,ne,se,ve,be,De,Sr,O(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return C5(ne)(se)(ve)(be)(De)(Sr)(S)(w)(O(i))(u)(a);case 8:return D;case 9:return D;default:return D}}else{var I=N.a,H=N.b,E=N.c;switch(r.$){case 0:return D;case 1:return D;case 2:var i=r.a,u=r.c,a=r.d;return Ae(ma,I,H,E,O(i),u,a);case 3:return D;case 4:var i=r.a,u=r.c,a=r.d;return Ae(ma,I,H,E,O(i),u,a);case 5:return D;case 6:var i=r.a,u=r.c,a=r.d;return Ae(ma,I,H,E,O(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return Ae(ma,I,H,E,O(i),u,a);case 8:return D;case 9:return D;default:return D}}}}),Bt=function(e){var r=e;return r.gX},jt=function(e){var r=e;return r.g$},Ft=function(e){var r=e;return r.dR},E5=function(e){var r=e,n=Ft(r.dS),a=jt(r.dS),i=Bt(r.dS),l=Ft(r.dQ),u=jt(r.dQ),$=Bt(r.dQ),v=Ft(r.dP),f=jt(r.dP),m=Bt(r.dP);return m*u*n+f*l*i+v*$*a-v*u*i-f*$*n-m*l*a>0},V5=function(e){var r=mt(Zr(e)),n=Ye(Fr(e)),a=Ye(Vr(e)),i=Ye(Er(e));return{eb:E5(e),s:i.gX,t:i.g$,u:i.dR,v:a.gX,w:a.g$,x:a.dR,y:n.gX,z:n.g$,A:n.dR,K:r.gX,L:r.g$,M:r.dR,cs:1}},en=s(function(e,r){return{$:5,a:e,b:r}}),Pu=s(function(e,r){var n=r;switch(n.$){case 0:return D;case 5:var a=n.a,i=n.b,l=c(Dl,a,e);return c(en,l,i);case 1:return c(en,e,n);case 3:return c(en,e,n);case 2:return c(en,e,n);default:return c(en,e,n)}}),Lu=s(function(e,r){return c(Pu,V5(e),r)}),ht=function(e){return{$:2,a:e}},X5=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=r.fr;return{fr:{gX:n*l.gX,g$:a*l.g$,dR:i*l.dR},fO:n*r.fO,fP:a*r.fP,fQ:i*r.fQ}}),N5=Qv,W5=Yv,B0=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){var m=e.a,p=e.b,h=e.c,d=W5(a),_=d.gX,b=d.g$,x=d.dR,S=d.fe,w=N5({fe:S,gX:_*m,g$:b*p,dR:x*h});return Ua(r,n,w,i,l,u,$,v,f)}}}}}}}}}},_o=s(function(e,r){switch(r.$){case 0:return vu;case 5:var n=r.a,a=r.b;return c(en,n,c(_o,e,a));case 1:var i=r.a,l=r.b;return c(we,c(X5,e,i),c(B0,e,l));case 3:return r;case 2:var l=r.a;return ht(c(B0,e,l));default:var u=r.a;return Il(c(K,_o(e),u))}}),Ei=s(function(e,r){var n=r;return c(_o,e,n)}),Vi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ku=7683,zu=7682,I5=t(Ci,{c4:0,dv:0,dO:15},{bw:Me,bR:mn,b_:Me,b$:ku},{bw:Me,bR:mn,b_:Me,b$:zu}),G5=t(Ci,{c4:0,dv:0,dO:15},{bw:Me,bR:mn,b_:Me,b$:zu},{bw:Me,bR:mn,b_:Me,b$:ku}),Xi=s(function(e,r){return e?c(R,G5,r):c(R,I5,r)}),H5={src:`
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
    `,attributes:{normal:"p",position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"ct",viewMatrix:"g"}},U5=function(e){if(e.$){var r=e.c;return ce(ie(function(n,a,i,l,u,$,v,f){return P(ue,c(Xi,l,f),H5,Vi,r,{c:i,d:a,e:$,f:n,ct:v,g:u})}))}else return Y},Wa=function(e){var r=U5(e);if(r.$)return D;var n=r.a;return ht(n)},O5=X(function(e,r,n,a){var i=c(Fi,n,lu),l=function(){var m=T(e,r);return m.a?m.b?ta(g([i,Wa(R0)])):i:m.b?Wa(R0):D}(),u=vt(a),$=u.a,v=u.b,f=u.c;return c(Lu,$t(a),c(Ei,F($,v,f),l))}),J5=s(function(e,r){return k(O5,!0,!0,e,r)}),Tu=s(function(e,r){return{$:0,a:e,b:r}}),q5=function(e){var r=Qo(e),n=r.du,a=r.cS,i=r.cI;return t(ra,n,a,i)},Z5=function(e){return c(Tu,0,$o(q5(e)))},En=function(e){var r=e;return Dr(r)},Y5=s(function(e,r){var n=e.co,a=e.p;return c(R,{p:pt(a),co:Be(n)},r)}),Q5=Ha(function(e,r,n,a,i,l,u){e:for(;;)if(u.b){var $=u.a,v=u.b,f=Cn($.co),m=Sn($.co),p=yn($.co),h=c(Sa,e,p),d=c(Fe,r,p),_=c(Sa,n,m),b=c(Fe,a,m),x=c(Sa,i,f),S=c(Fe,l,f),w=v;e=h,r=d,n=_,a=b,i=x,l=S,u=w;continue e}else return nu({eA:r,eB:a,eC:l,eD:e,eE:n,eF:i})}),Mu=s(function(e,r){var n=Cn(e.co),a=Sn(e.co),i=yn(e.co);return So(Q5,i,i,a,a,n,n,r)}),K5=function(e){var r=t(_c,Y5,C,Di(e));if(r.b){var n=r.a,a=r.b,i=c(oa,r,Mi(e)),l=c(Mu,n,a);return k(eu,l,e,i,0)}else return Ti},j0=s(function(e,r){var n=e,a=r,i=n.dQ,l=i,u=n.dP,$=u;return{gX:a.gX*$.gX+a.g$*l.gX,g$:a.gX*$.g$+a.g$*l.g$,dR:a.gX*$.dR+a.g$*l.dR}}),Ia=function(e){var r=e;return Rr(r)},wo=function(e){return Hr(2*dn*e)},ep=kr,F0=ep({dg:We,dP:wi,dQ:Ol}),Du=function(){var e=72,r=c(dl,e,wo(1)),n=qe(1),a=an(pl),i=an(ml),l=qe(1),u=c(re,.5,l),$=t(Ce,Oe,Oe,u),v=c(re,-.5,l),f=t(Ce,Oe,Oe,v),m=function(d){var _=c(re,d,r),b=an(c(j0,F0,uo(_))),x=c(re,En(_),n),S=c(re,Ia(_),n),w=t(Ce,x,S,u),L=t(Ce,x,S,v),B=c(Gr,e,d+1),G=c(re,B,r),W=an(c(j0,F0,uo(G))),N=c(re,En(G),n),I=c(re,Ia(G),n),H=t(Ce,N,I,v),E=t(Ce,N,I,u);return g([F({p:i,co:f},{p:i,co:H},{p:i,co:L}),F({p:b,co:L},{p:W,co:H},{p:W,co:E}),F({p:b,co:L},{p:W,co:E},{p:b,co:w}),F({p:a,co:$},{p:a,co:w},{p:a,co:E})])},p=c(K,m,c(zr,0,e-1)),h=ho(Ze(p));return zi(K5(h))}(),E0=$u(Du),rp=function(e){var r=ri(e),n=ci(r),a=n.a,i=n.b;return pr({dg:ni(e),dP:a,dQ:i,dS:r})},np=X(function(e,r,n,a){var i=rp(_i(a)),l=c(Fi,n,Du),u=function(){var p=T(e,r);return p.a?p.b?ta(g([l,Wa(E0)])):l:p.b?Wa(E0):D}(),$=zl(a),v=$,f=kl(a),m=f;return c(Lu,i,c(Ei,F(v,v,m),u))}),ap=s(function(e,r){return k(np,!0,!0,e,r)}),V0={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bW",viewMatrix:"g"}},X0={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bW",viewMatrix:"g"}},Rn=function(e){var r=Jn(e),n=r.a,a=r.b,i=r.c,l=vn(n),u=vn(a),$=vn(i);return $r({ej:l.gX,ek:u.gX,el:$.gX,em:0,en:l.g$,eo:u.g$,ep:$.g$,eq:0,er:l.dR,es:u.dR,et:$.dR,eu:0,ev:0,ew:0,ex:0,ey:0})},ga=cu(g([F({dH:0},{dH:1},{dH:2})])),tp=s(function(e,r){var n=au(r),a=O(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,D;var i=e.b.a;return c(we,a,ie(function(w,L,B,G,W,N,I,H){return P(ue,t(je,G,0,H),V0,Ai,ga,{aN:i,c:B,d:L,e:N,f:w,bW:Rn(r),g:W})}));case 1:if(e.b.$)return e.a,D;var l=e.b.a,u=e.c;return c(we,a,ie(function(w,L,B,G,W,N,I,H){return P(ue,t(je,G,0,H),V0,Bi,ga,{a6:c(gt,ia(u),l),c:B,d:L,e:N,f:w,bW:Rn(r),g:W})}));case 2:e.a;var $=e.b,d=e.c,v=c(yu,$,d);if(v.$)return D;var f=v.a;return c(we,a,ie(function(w,L,B,G,W,N,I,H){var E=I.a,Q=I.b;return P(ue,t(je,G,0,H),X0,gu,ga,{T:Q,bE:E.bE,cf:E.cf,cg:E.cg,ch:E.ch,c5:f,c:B,d:L,e:N,f:w,bW:Rn(r),g:W})}));default:e.a;var m=e.b,p=e.c,h=e.d,d=e.e,_=k(Su,m,p,h,d);if(_.$)return D;var b=_.a,x=_.b,S=_.c;return c(we,a,ie(function(w,L,B,G,W,N,I,H){var E=I.a,Q=I.b;return P(ue,t(je,G,0,H),X0,xu,ga,{cG:b,T:Q,bE:E.bE,cf:E.cf,cg:E.cg,ch:E.ch,c9:S,c:B,d:L,e:N,dy:x,f:w,bW:Rn(r),g:W})}))}}),op=function(){var e=g([{bm:c(Ne,0,1)},{bm:c(Ne,1,1)},{bm:c(Ne,2,1)},{bm:c(Ne,0,-1)},{bm:c(Ne,1,-1)},{bm:c(Ne,2,-1)}]),r=g([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return c(oa,e,r)}(),ip={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"ct",triangleVertexPositions:"bW",viewMatrix:"g"}},N0=function(e){return ht(ie(function(r,n,a,i,l,u,$,v){return P(ue,c(Xi,i,v),ip,Vi,op,{c:a,d:n,e:u,f:r,ct:$,bW:Rn(e),g:l})}))},cp=X(function(e,r,n,a){var i=c(tp,n,a),l=T(e,r);return l.a?l.b?ta(g([i,N0(a)])):i:l.b?N0(a):D}),lp=s(function(e,r){return k(cp,!0,!0,e,r)}),up=s(function(e,r){var n=ln(r),a=ln(e),i=cn(r),l=cn(e),u=on(r),$=on(e);return{eA:c(fe,$,u),eB:c(fe,l,i),eC:c(fe,a,n),eD:c(he,$,u),eE:c(he,l,i),eF:c(he,a,n)}}),$p=function(e){var r=mi(e),n=r.a,a=r.b;return c(up,n,a)},W0={src:`
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
    `,attributes:{lineSegmentVertex:"ei"},uniforms:{lineSegmentEndPoint:"eg",lineSegmentStartPoint:"eh",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vp=s(function(e,r){return{$:1,a:e,b:r}}),sp=vp({d0:2,ea:0,eH:1}),I0=sp(g([T({ei:0},{ei:1})])),fp=s(function(e,r){var n=$p(r),a=O(n),i=mi(r),l=i.a,u=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,D;var $=e.b.a;return c(we,a,ie(function(f,m,p,h,d,_,b,x){return P(ue,x,W0,Ai,I0,{aN:$,eg:Be(u),eh:Be(l),c:p,d:m,e:_,f,g:d})}));case 1:if(e.b.$)return D;var $=e.b.a,v=e.c;return c(we,a,ie(function(m,p,h,d,_,b,x,S){return P(ue,S,W0,Bi,I0,{a6:c(gt,ia(v),$),eg:Be(u),eh:Be(l),c:h,d:p,e:b,f:m,g:_})}));case 2:return D;default:return D}}),dp=s(function(e,r){return c(fp,e,r)}),G0=s(function(e,r){var n=e,a=r;return n/a}),mp=ke(function(e,r,n,a,i){e:for(;;){var l=a(r/n),u=c(R,l,i);if(Qe(r,e))return u;var $=e,v=r-1,f=n,m=a,p=u;e=$,r=v,n=f,a=m,i=p;continue e}}),H0=s(function(e,r){return e<1?C:P(mp,0,e,e,r,C)}),pp=s(function(e,r){var n=e.co,a=e.p,i=e.O,l=i,u=l.a,$=l.b;return c(R,{p:pt(a),co:Be(n),O:c(Ne,u,$)},r)}),gp=function(e){var r=t(_c,pp,C,Di(e));if(r.b){var n=r.a,a=r.b,i=c(oa,r,Mi(e)),l=c(Mu,n,a);return k(ru,l,e,i,0)}else return Ti},Ru=s(function(e,r){var n=e,a=r,i=Dr(a);return{gX:i*Dr(n),g$:i*Rr(n),dR:Rr(a)}}),hp=function(){var e=qe(1),r=72,n=c(zr,0,r-1),a=c(H0,r,c(qn,Oe,wo(1))),i=Vo(r/2),l=c(zr,0,i-1),u=c(H0,i,c(qn,Mn(90),Mn(-90))),$=Ri(Ze(c(K,function(m){return c(K,function(p){return{p:an(c(Ru,m,p)),co:t(Ce,c(re,En(p)*En(m),e),c(re,En(p)*Ia(m),e),c(re,Ia(p),e)),O:T(c(G0,m,wo(1)),c(G0,c(jn,Mn(90),p),Mn(180)))}},u)},a))),v=s(function(m,p){return m*(i+1)+p}),f=Ze(c(K,function(m){return Ze(c(K,function(p){var h=c(v,m+1,p),d=c(v,m,p),_=c(v,m+1,p+1),b=c(v,m,p+1);return g([F(b,_,h),F(b,h,d)])},l))},n));return zi(gp(c(uu,$,f)))}(),Ga=72,ha=2*Ga,bp=s(function(e,r){e:for(;;){var n=ha+1,a=c(Gr,ha,2*e+3),i=c(Gr,ha,2*e+2),l=2*e+1,u=2*e,$=ha,v=c(R,F($,u,i),c(R,F(u,a,i),c(R,F(u,l,a),c(R,F(l,n,a),r))));if(e){var f=e-1,m=v;e=f,r=m;continue e}else return v}}),_p=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),wp=s(function(e,r){e:for(;;){var n=t(_p,0,2*dn,e/Ga),a={b1:n,ck:0,cr:1},i={b1:n,ck:1,cr:1},l=c(R,a,c(R,i,r));if(e){var u=e-1,$=l;e=u,r=$;continue e}else return l}}),xp=function(){var e=c(wp,Ga-1,g([{b1:0,ck:0,cr:0},{b1:0,ck:1,cr:0}])),r=c(bp,Ga-1,C);return c(oa,e,r)}(),yp={src:`
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
    `,attributes:{angle:"b1",offsetScale:"ck",radiusScale:"cr"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"ct",viewMatrix:"g"}},U0=function(e){return ht(ie(function(r,n,a,i,l,u,$,v){return P(ue,c(Xi,!0,v),yp,Vi,xp,{aN:t(ra,0,0,1),c:a,d:n,e:u,f:r,ct:$,g:l})}))},Sp=function(e){var r=ou(e);return{eb:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,K:r.gX,L:r.g$,M:r.dR,cs:1}},Cp=s(function(e,r){return c(Pu,Sp(e),r)}),Pp=X(function(e,r,n,a){var i=c(Fi,n,hp),l=function(){var v=T(e,r);return v.a?v.b?ta(g([i,U0()])):i:v.b?U0():D}(),u=ft(a),$=u;return c(Cp,c(Va,We,st(a)),c(Ei,F($,$,$),l))}),Lp=s(function(e,r){return k(Pp,!0,!0,e,r)}),kp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zp=ke(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Tp=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return c(Tu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return t(kp,n,a,r);case 2:var n=e.a,a=e.b,u=e.c;return t(Pl,n,a,u);default:var n=e.a,a=e.b,i=e.c,l=e.d,u=e.e;return P(zp,n,a,i,l,u)}},Mp=Tp,Au=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return g([c(J5,i,r)]);case 1:var i=e.a,n=e.b;return g([c(lp,i,n)]);case 3:var i=e.a,a=e.b;return g([c(Lp,Mp(i),a)]);case 2:var i=e.a,l=e.b;return g([c(ap,i,l)]);case 4:var u=e.a,$=e.b;return g([c(dp,Z5(u),$)]);default:var v=e.a;return c(dt,Au,v)}},Dp=function(e){return c(dt,Au,e)},Rp=s(function(e,r){return N4({a0:am(e.fk),al:e.al,a1:tm(.5),cP:e.cP,a2:T(x0(or(e.aE.gV)),x0(or(e.aE.fS))),a8:Dp(r),gE:!0,gL:c(Ru,Hr(e.gK),Hr(e.gM)),fa:it})}),Ap=s(function(e,r){return c(Rp,{fk:c(Sl,Un(r.R).fl,Un(r.R).bH),al:c(ui,e.aE,r.al),cP:e.cP,aE:e.aE,gK:Pr(225),gM:Pr(315)},g([Xa(g([c(Wd,e,r),nm(e)]))]))}),Bp=s(function(e,r){return c(M,g([c(rd,e,r)]),g([c(M,g([z("fixed w-full h-full")]),g([c(Ap,e,r)])),c(M,g([z("absolute w-screen h-screen text-center text-lg text-white60")]),g([c(M,g([z("p-1")]),g([oe("TRIXELS")]))]))]))}),jp=function(e){return{$:4,a:e}},Fp=function(e){return{$:4,a:e}},Ep=function(e){return{$:5,a:e}},Vp={$:0},Xp={$:2},Np={$:3},Wp={$:1},Ip=function(e){return c(Ee,"autocomplete",e?"on":"off")},O0=function(e){var r=e;return dr(r.m)},Gp={$:6},Bu=s(function(e,r){return c(Tr,g([z("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),c(te,"transition","background-color 0.3s ease"),ar(e)]),g([oe(r)]))}),Hp=er("pre"),Up=function(e){var r=e;return c(M,C,g([c(Bu,Gp,"Export"),c(Hp,g([z("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),g([oe(r.dG)]))]))},Op={$:7},Jp=function(e){return{$:8,a:e}},qp=function(e){return c(gr,"cols",Le(e))},Zp=function(e){return c(gr,"rows",Le(e))},Yp=er("textarea"),Qp=function(e){var r=e;return c(M,C,g([c(Bu,Op,"Import"),c(Yp,g([z("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),Zp(150),qp(10),ea(Jp),Jr(r.cv)]),g([oe("todo")]))]))},Kp=function(e){return c(rt,"mousedown",Pe(e))},eg=Ee("placeholder"),rg=function(e){var r=e,n=c(M,g([z("inline-block ml-1 w-4 text-white40 hover:text-white80"),ar(Np),Tn("Move Level Up")]),g([ur.gg])),a=c(M,g([z("inline-block ml-1 w-4 text-white40 hover:text-white80"),ar(Xp),Tn("Move Level Down")]),g([ur.gf])),i=c(M,g([z("inline-block ml-1 w-4 text-white40 hover:text-red-400"),ar(Wp),Tn("Delete Level")]),g([ur.gO])),l=c(Tr,g([z("inline-block ml-1 w-4 text-white40 hover:text-white80"),ar(Vp),Tn("Duplicate Level")]),g([ur.gw])),u=s(function($,v){return c(Tr,g([z("w-full h-8 p-2 text-left text-white80 border-b border-white20"),z(Qe($,O0(r.X))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),c(te,"transition","background-color 0.3s ease"),Kp(Ep($))]),g([Qe($,O0(r.X))?c(M,C,g([c(Hn,g([z("w-[100px] bg-transparent"),eg("Enter Level Name"),Jr($i(r.X).gi),ea(Fp),Ip(!1)]),C),c(M,g([z("float-right")]),g([l,n,a,i]))])):c(M,g([z("whitespace-nowrap")]),g([oe(v)]))]))});return c(M,g([z("w-60 text-xs")]),g([c(M,g([z("w-full h-[200px] overflow-hidden overflow-y-scroll")]),c(Ja,s(function($,v){var f=v.gi;return c(u,$,f)}),vi(r.X))),c(M,g([z("p-4 border-[0.5px] border-white20")]),g([Up(r)])),c(M,g([z("p-4 border-[0.5px] border-white20")]),g([Qp(r)]))]))},ng=function(e){return c(M,g([z("p-4 border-[0.5px] border-white20")]),g([c(M,g([z("text-lg")]),g([oe("Pages")])),c(M,g([z("p-4")]),g([c(Gn,jp,rg(e.R))]))]))},ag={$:3},tg=s(function(e,r){return c(Tr,g([z("m-1 p-2 rounded bg-black40 hover:bg-black80"),ar(e)]),g([oe(r)]))}),og=function(e){return{$:1,a:e}},ig=c(ae,function(e){return e.R},c(ae,Un,function(e){return e.bH})),cg=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},lg=function(e){return c(rt,"change",c(Nn,e,ol))},ug=er("option"),xo=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},$g=function(e){return c(ug,g([Jr(xo(e))]),g([oe(xo(e))]))},vg=er("select"),sg=er("span"),fg=function(e){return c(M,g([z("p-2")]),g([c(sg,g([z("p-2")]),g([oe("Choose a palette:")])),c(vg,g([z("p-2 text-white80 bg-black20"),lg(c(ae,cg,og)),Jr(xo(ig(e)))]),c(K,$g,g([2,0,1,3,4])))]))},dg=function(e){return{$:2,a:e}},mg=s(function(e,r){var n=r.a,a=r.b,i=s(function(l,u){return c(e,l+1,u)});return c(wn,c(e,0,n),c(Ja,i,a))}),pg=function(e){var r=e.a,n=e.b;return c(R,r,n)},gg=function(e){var r=Un(e.R),n=15,a=0,i=18,l=s(function(u,$){var v=(u/n|0)*(i+a),f=c(Gr,n,u)*(i+a),m=Qe(e.aF,u)?3:0;return c(M,g([z("absolute"),c(te,"width",le(i)+"px"),c(te,"height",le(i)+"px"),c(te,"background-color",Ml($)),c(te,"transform","translate("+(le(f)+("px,"+(le(v)+"px)")))),ar(dg(u)),c(te,"border","solid white "+(le(m)+"px"))]),C)});return c(M,g([z("h-[320px]")]),pg(c(mg,l,yl(r.bH))))},hg=function(e){return c(M,g([z("p-4 border-[0.5px] border-white20")]),g([c(M,g([z("text-lg")]),g([oe("Color Palette")])),fg(e),c(tg,ag,"Set selected as background"),c(M,C,g([oe(Le(e.aF))])),gg(e)]))},bg=c(M,g([z("p-4 border-[0.5px] border-white20")]),g([c(M,g([z("text-lg")]),g([oe("Instructions")])),c(M,g([z("pl-2")]),g([oe("- Press mouse to add trixel")])),c(M,g([z("pl-2")]),g([oe("- Hold shift and press mouse to remove trixel")])),c(M,g([z("pl-2")]),g([oe("- Panning: SCROLL or SPACE + DRAG")])),c(M,g([z("pl-2")]),g([oe("- Zooming: CTRL + SCROLL")]))])),_g=s(function(e,r){return r.a4?c(M,g([z("fixed top-0 right-0 w-[300px] h-full"),z("bg-black20"),z("border-[0.5px] border-white20"),z("overflow-y-scroll"),z("text-xs text-white60")]),g([bg,hg(r),ng(r)])):c(M,C,C)}),wg={$:0},J0={dX:c(Kt,g([eo("0 0 24 24"),Qt("currentColor")]),g([c(Se,g([ye("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),C)])),d$:c(Kt,g([eo("0 0 24 24"),Qt("currentColor")]),g([c(Se,g([ye("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),C)]))},xg=function(e){return c(M,g([z("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),g([c(Tr,g([z("w-6"),ar(wg)]),g([e.a4?J0.dX:J0.d$]))]))},yg=s(function(e,r){return c(M,C,g([c(_g,e,r),xg(r)]))}),Sg=Ae(lf,Bp,M2,bf,ff,yg,K2);const Cg={Main:{init:Sg(c(j,function(e){return Pe({f_:e})},c(A,"inputs",c(j,function(e){return c(j,function(r){return c(j,function(n){return c(j,function(a){return c(j,function(i){return c(j,function(l){return c(j,function(u){return Pe({fu:u,cP:l,fF:i,cV:a,bJ:n,aE:r,gU:e})},c(A,"clock",ge))},c(A,"devicePixelRatio",ge))},c(A,"dt",ge))},c(A,"keyboard",c(j,function(a){return c(j,function(i){return c(j,function(l){return c(j,function(u){return c(j,function($){return c(j,function(v){return c(j,function(f){return c(j,function(m){return c(j,function(p){return Pe({fg:p,fw:m,d_:f,fE:v,f5:$,eS:u,gA:l,e0:i,e9:a})},c(A,"alt",ee))},c(A,"control",ee))},c(A,"down",ee))},c(A,"downs",In(fn)))},c(A,"left",ee))},c(A,"pressedKeys",In(fn)))},c(A,"right",ee))},c(A,"shift",ee))},c(A,"up",ee))))},c(A,"pointer",c(j,function(n){return c(j,function(a){return c(j,function(i){return c(j,function(l){return c(j,function(u){return c(j,function($){return c(j,function(v){return c(j,function(f){return Pe({d_:f,cU:v,ge:$,gB:u,gC:l,e9:i,gX:a,g$:n})},c(A,"down",ee))},c(A,"isDown",ee))},c(A,"move",ee))},c(A,"rightDown",ee))},c(A,"rightUp",ee))},c(A,"up",ee))},c(A,"x",ge))},c(A,"y",ge))))},c(A,"screen",c(j,function(r){return c(j,function(n){return Pe({fS:n,gV:r})},c(A,"height",ge))},c(A,"width",ge))))},c(A,"wheel",c(j,function(e){return c(j,function(r){return Pe({fz:r,fA:e})},c(A,"deltaX",ge))},c(A,"deltaY",ge)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Pg=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),i=d=>d.code=="ArrowLeft",l=d=>d.code=="ArrowRight",u=d=>d.code=="ArrowUp",$=d=>d.code=="ArrowDown",v=d=>d.button==0,f=d=>d.button==2;function m(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function p(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(V.keyboard.downs.push(d.code),V.keyboard.pressedKeys.push(d.code),r(d)&&(V.keyboard.control=!0),n(d)&&(V.keyboard.alt=!0),a(d)&&(V.keyboard.shift=!0),i(d)&&(V.keyboard.left=!0),l(d)&&(V.keyboard.right=!0),u(d)&&(V.keyboard.up=!0),$(d)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",d=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(_=>_!=d.code),r(d)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(d)&&(V.keyboard.alt=!1),a(d)&&(V.keyboard.shift=!1),i(d)&&(V.keyboard.left=!1),l(d)&&(V.keyboard.right=!1),u(d)&&(V.keyboard.up=!1),$(d)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{V.pointer.x=-.5*V.screen.width+d.pageX,V.pointer.y=.5*V.screen.height-d.pageY,v(d)&&(V.pointer.down=!0,V.pointer.isDown=!0),f(d)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+d.pageX,V.pointer.y=.5*V.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{v(d)&&(V.pointer.up=!0,V.pointer.isDown=!1),f(d)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{v(d)&&(V.pointer.up=!0,V.pointer.isDown=!1),f(d)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{V.wheel.deltaX=d.deltaX,V.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{m(V)}),window.addEventListener("focus",d=>{m(V)}),window.addEventListener("visibilitychange",d=>{m(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(d){const _=d/1e3,b=_-V.clock;b<.009||(V.dt=b,V.clock=_,e.ports.tick.send(V),p(V)),window.requestAnimationFrame(h)}},Lg=()=>{Et("pointerdown"),Et("wheel"),Et("keydown")},Et=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},kg=Cg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Lg();Pg(kg);
