const Qm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Qm();function Ln(e,r,n){return n.a=e,n.f=r,n}function v(e){return Ln(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return Ln(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function re(e){return Ln(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Je(e){return Ln(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Tr(e){return Ln(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function ki(e){return Ln(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function ze(e){return Ln(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function bl(e){return Ln(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return e(r,n,t,i,o,l,c,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ur(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function _l(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function xt(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function es(e,r,n,t,i,o,l,c,u,f){return e.a===9?e.f(r,n,t,i,o,l,c,u,f):e(r)(n)(t)(i)(o)(l)(c)(u)(f)}var rs=[];function ns(e){return e.length}var as=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),ts=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),is=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var os=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ls()),r});function ls(e){return"<internals>"}function Ta(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,t=[],i=Io(e,r,0,t);i&&(n=t.pop());i=Io(n.a,n.b,0,t));return i}function Io(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ta(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=eu(e),r=eu(r));for(var i in e)if(!Io(e[i],r[i],n+1,t))return!1;return!0}v(he);v(function(e,r){return!he(e,r)});function xe(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=xe(e.a,r.a))||(n=xe(e.b,r.b))?n:xe(e.c,r.c);for(;e.b&&r.b&&!(n=xe(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return xe(e,r)<0});v(function(e,r){return xe(e,r)<1});v(function(e,r){return xe(e,r)>0});v(function(e,r){return xe(e,r)>=0});var cs=v(function(e,r){var n=xe(e,r);return n<0?G$:n?eg:H$}),wt=0;function L(e,r){return{a:e,b:r}}function G(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Xr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Xr(e.a,r);return n}var D={$:0};function Xr(e,r){return{$:1,a:e,b:r}}var us=v(Xr);function $(e){for(var r=D,n=e.length;n--;)r=Xr(e[n],r);return r}function Di(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var $s=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});re(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Je(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return $(o)});Tr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(Di(r).sort(function(n,t){return xe(e(n),e(t))}))});v(function(e,r){return $(Di(r).sort(function(n,t){var i=a(e,n,t);return i===H$?0:i===G$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var vs=v(Math.pow);v(function(e,r){return r%e});var fs=v(function(e,r){var n=r%e;return e===0?Ta(11):n>0&&e<0||n<0&&e>0?n+e:n}),ms=Math.PI,ss=Math.cos,ds=Math.sin,ps=Math.tan;v(Math.atan2);function gs(e){return e}function hs(e){return e===1/0||e===-1/0}var bs=Math.ceil,_s=Math.floor,xs=Math.round,ws=Math.sqrt,jc=Math.log,ys=isNaN;function Ss(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Cs=v(function(e,r){return e+r});function Ls(e){var r=e.charCodeAt(0);return isNaN(r)?J:X(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ps(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function zs(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ms=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ts=v(function(e,r){return r.split(e)}),ks=v(function(e,r){return r.join(e)}),Ds=M(function(e,r,n){return n.slice(e,r)});function Fs(e){return $(e.trim().split(/\s+/g))}function As(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Is=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Es=v(function(e,r){return r.indexOf(e)>-1}),Bs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vs=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function p$(e){return e+""}function Rs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:X(n==45?-r:r)}function js(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?X(r):J}function Us(e){return Di(e).join("")}function Ns(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Hs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Gs(e){return{$:0,a:e}}function Ws(e){return{$:1,a:e}}function xl(e){return{$:2,b:e}}var Os=xl(function(e){return typeof e=="boolean"?Ge(e):Nr("a BOOL",e)}),qs=xl(function(e){return typeof e=="number"?Ge(e):Nr("a FLOAT",e)}),Js=xl(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Nr("a STRING",e)});function Ys(e){return{$:3,b:e}}var Xs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Pn(e,r){return{$:9,f:e,g:r}}var Ks=v(function(e,r){return{$:10,b:r,h:e}}),Zs=v(function(e,r){return Pn(e,[r])}),Qs=M(function(e,r,n){return Pn(e,[r,n])});re(function(e,r,n,t){return Pn(e,[r,n,t])});Je(function(e,r,n,t,i){return Pn(e,[r,n,t,i])});Tr(function(e,r,n,t,i,o){return Pn(e,[r,n,t,i,o])});ki(function(e,r,n,t,i,o,l){return Pn(e,[r,n,t,i,o,l])});ze(function(e,r,n,t,i,o,l,c){return Pn(e,[r,n,t,i,o,l,c])});bl(function(e,r,n,t,i,o,l,c,u){return Pn(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Sr(e,n)}catch(t){return nr(a(Al,"This is not valid JSON! "+t.message,r))}});var g$=v(function(e,r){return Sr(e,r)});function Sr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Nr("null",r);case 3:return jt(r)?Uc(e.b,r,$):Nr("a LIST",r);case 4:return jt(r)?Uc(e.b,r,ed):Nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Nr("an OBJECT with a field named `"+n+"`",r);var f=Sr(e.b,r[n]);return Ar(f)?f:nr(a(ru,n,f.a));case 7:var t=e.e;if(!jt(r))return Nr("an ARRAY",r);if(t>=r.length)return Nr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Sr(e.b,r[t]);return Ar(f)?f:nr(a(W$,t,f.a));case 8:if(typeof r!="object"||r===null||jt(r))return Nr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Sr(e.b,r[o]);if(!Ar(f))return nr(a(ru,o,f.a));i=Xr(L(o,f.a),i)}return Ge(mr(i));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var f=Sr(c[u],r);if(!Ar(f))return f;l=l(f.a)}return Ge(l);case 10:var f=Sr(e.b,r);return Ar(f)?Sr(e.h(f.a),r):f;case 11:for(var m=D,p=e.g;p.b;p=p.b){var f=Sr(p.a,r);if(Ar(f))return f;m=Xr(f.a,m)}return nr(rg(mr(m)));case 1:return nr(a(Al,e.a,r));case 0:return Ge(e.a)}}function Uc(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Sr(e,r[o]);if(!Ar(l))return nr(a(W$,o,l.a));i[o]=l.a}return Ge(n(i))}function jt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function ed(e){return a(pg,e.length,function(r){return e[r]})}function Nr(e,r){return nr(a(Al,"Expecting "+e,r))}function ua(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ua(e.b,r.b);case 6:return e.d===r.d&&ua(e.b,r.b);case 7:return e.e===r.e&&ua(e.b,r.b);case 9:return e.f===r.f&&Nc(e.g,r.g);case 10:return e.h===r.h&&ua(e.b,r.b);case 11:return Nc(e.g,r.g)}}function Nc(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!ua(e[t],r[t]))return!1;return!0}var rd=v(function(e,r){return JSON.stringify(r,null,e)+""});function h$(e){return e}function nd(){return[]}function ad(){return{}}var td=M(function(e,r,n){return n[e]=r,n});function id(e){return v(function(r,n){return n.push(e(r)),n})}function Yn(e){return{$:0,a:e}}function od(e){return{$:1,a:e}}function fn(e){return{$:2,b:e,c:null}}var Eo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ld(e){return{$:5,b:e}}var cd=0;function wl(e){var r={$:0,e:cd++,f:e,g:null,h:[]};return yl(r),r}function b$(e){return fn(function(r){r(Yn(wl(e)))})}function _$(e,r){e.h.push(r),yl(e)}var ud=v(function(e,r){return fn(function(n){_$(e,r),n(Yn(wt))})}),vo=!1,Hc=[];function yl(e){if(Hc.push(e),!vo){for(vo=!0;e=Hc.shift();)$d(e);vo=!1}}function $d(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,yl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}re(function(e,r,n,t){return Sl(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function Sl(e,r,n,t,i,o){var l=a(g$,e,r?r.flags:void 0);Ar(l)||Ta(2);var c={},u=n(l.a),f=u.a,m=o(b,f),p=vd(c,b);function b(s,x){var _=a(t,s,f);m(f=_.a,x),Wc(c,_.b,i(f))}return Wc(c,u.b,i(f)),p?{ports:p}:{}}var Or={};function vd(e,r){var n;for(var t in Or){var i=Or[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=md(i,r)}return n}function fd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function md(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(Eo,c,ld(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&l?P(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=wl(a(Eo,c,e.b))}var sd=v(function(e,r){return fn(function(n){e.g(r),n(Yn(wt))})});v(function(e,r){return a(ud,e.h,{$:0,a:r})});function x$(e){return function(r){return{$:1,k:e,l:r}}}function dd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Gc=[],fo=!1;function Wc(e,r,n){if(Gc.push({p:e,q:r,r:n}),!fo){fo=!0;for(var t;t=Gc.shift();)pd(t.p,t.q,t.r);fo=!1}}function pd(e,r,n){var t={};ui(!0,r,t,null),ui(!1,n,t,null);for(var i in e)_$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ui(e,r,n,t){switch(r.$){case 1:var i=r.k,o=gd(e,i,t,r.l);n[i]=hd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)ui(e,l.a,n,t);return;case 3:ui(e,r.o,n,{s:r.n,t});return}}function gd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Or[r].e:Or[r].f;return a(o,i,t)}function hd(e,r,n){return n=n||{i:D,j:D},e?n.i=Xr(r,n.i):n.j=Xr(r,n.j),n}function bd(e){Or[e]&&Ta(3)}v(function(e,r){return r});function _d(e,r){return bd(e),Or[e]={f:xd,u:r,a:wd},x$(e)}var xd=v(function(e,r){return function(n){return e(r(n))}});function wd(e,r){var n=D,t=Or[e].u,i=Yn(null);Or[e].b=i,Or[e].c=M(function(l,c,u){return n=c,i});function o(l){var c=a(g$,t,l);Ar(c)||Ta(4,e,c.a);for(var u=c.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var $i,ln=typeof document!="undefined"?document:{};function Cl(e,r){e.appendChild(r)}re(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(bn(e,function(){}),i),{}});function Bo(e){return{$:0,a:e}}var w$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Pl(n),e:i,f:e,b:o}})}),mn=w$(void 0),yd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Pl(n),e:i,f:e,b:o}})}),Sd=yd(void 0);function Cd(e,r,n,t){return{$:3,d:Pl(e),g:r,h:n,i:t}}var Ld=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function zn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return zn([e,r],function(){return e(r)})});M(function(e,r,n){return zn([e,r,n],function(){return a(e,r,n)})});var Pd=re(function(e,r,n,t){return zn([e,r,n,t],function(){return h(e,r,n,t)})});Je(function(e,r,n,t,i){return zn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});Tr(function(e,r,n,t,i,o){return zn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});ki(function(e,r,n,t,i,o,l){return zn([e,r,n,t,i,o,l],function(){return ur(e,r,n,t,i,o,l)})});ze(function(e,r,n,t,i,o,l,c){return zn([e,r,n,t,i,o,l,c],function(){return _l(e,r,n,t,i,o,l,c)})});bl(function(e,r,n,t,i,o,l,c,u){return zn([e,r,n,t,i,o,l,c,u],function(){return xt(e,r,n,t,i,o,l,c,u)})});var y$=v(function(e,r){return{$:"a0",n:e,o:r}}),zd=v(function(e,r){return{$:"a1",n:e,o:r}}),Ll=v(function(e,r){return{$:"a2",n:e,o:r}}),Vr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function S$(e){return e=="script"?"p":e}function Md(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Td(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function kd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function C$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Dd=v(function(e,r){return r.$==="a0"?a(y$,r.n,Fd(e,r.o)):r});function Fd(e,r){var n=Vl(r);return{$:r.$,a:n?h(gg,n<3?Ad:Id,lr(e),r.a):a(si,e,r.a)}}var Ad=v(function(e,r){return L(e(r.a),r.b)}),Id=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function Pl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Oc(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Oc(l,i,o):l[i]=o}return r}function Oc(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function bn(e,r){var n=e.$;if(n===5)return bn(e.k||(e.k=e.m()),r);if(n===0)return ln.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=bn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Vo(l,r,e.d),l}var l=e.f?ln.createElementNS(e.f,e.c):ln.createElement(e.c);$i&&e.c=="a"&&l.addEventListener("click",$i(l)),Vo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)Cl(l,bn(n===1?c[u]:c[u].b,r));return l}function Vo(e,r,n){for(var t in n){var i=n[t];t==="a1"?Ed(e,i):t==="a0"?Rd(e,r,i):t==="a3"?Bd(e,i):t==="a4"?Vd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Ed(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Bd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Vd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Rd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=jd(r,o),e.addEventListener(i,l,zl&&{passive:Vl(o)<2}),t[i]=l}}var zl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){zl=!0}}))}catch{}function jd(e,r){function n(t){var i=n.q,o=Sr(i.a,t);if(!!Ar(o)){for(var l=Vl(i),c=o.a,u=l?l<3?c.a:c.aA:c,f=l==1?c.b:l==3&&c.dG,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.dv)&&t.preventDefault(),e),p,b;p=m.j;){if(typeof p=="function")u=p(u);else for(var b=p.length;b--;)u=p[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Ud(e,r){return e.$==r.$&&ua(e.a,r.a)}function L$(e,r){var n=[];return Ir(e,r,n,0),n}function rr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ir(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Yd(r),o=1;else{rr(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,f=u===c.length;f&&u--;)f=l[u]===c[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Ir(e.k,r.k,m,0),m.length>0&&rr(n,1,t,m);return;case 4:for(var p=e.j,b=r.j,s=!1,x=e.k;x.$===4;)s=!0,typeof p!="object"?p=[p,x.j]:p.push(x.j),x=x.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&p.length!==b.length){rr(n,0,t,r);return}(s?!Nd(p,b):p!==b)&&rr(n,2,t,b),Ir(x,_,n,t+1);return;case 0:e.a!==r.a&&rr(n,3,t,r.a);return;case 1:qc(e,r,n,t,Hd);return;case 2:qc(e,r,n,t,Gd);return;case 3:if(e.h!==r.h){rr(n,0,t,r);return}var S=Ml(e.d,r.d);S&&rr(n,4,t,S);var C=r.i(e.g,r.g);C&&rr(n,5,t,C);return}}}function Nd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function qc(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){rr(n,0,t,r);return}var o=Ml(e.d,r.d);o&&rr(n,4,t,o),i(e,r,n,t)}function Ml(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Ml(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Ud(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Hd(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?rr(n,6,t,{v:c,i:l-c}):l<c&&rr(n,7,t,{v:l,e:o});for(var u=l<c?l:c,f=0;f<u;f++){var m=i[f];Ir(m,o[f],n,++t),t+=m.b||0}}function Gd(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,f=c.length,m=u.length,p=0,b=0,s=t;p<f&&b<m;){var x=c[p],_=u[b],S=x.a,C=_.a,w=x.b,T=_.b,H=void 0,Z=void 0;if(S===C){s++,Ir(w,T,i,s),s+=w.b||0,p++,b++;continue}var ae=c[p+1],te=u[b+1];if(ae){var ie=ae.a,ne=ae.b;Z=C===ie}if(te){var q=te.a,de=te.b;H=S===q}if(H&&Z){s++,Ir(w,de,i,s),ja(o,i,S,T,b,l),s+=w.b||0,s++,Ua(o,i,S,ne,s),s+=ne.b||0,p+=2,b+=2;continue}if(H){s++,ja(o,i,C,T,b,l),Ir(w,de,i,s),s+=w.b||0,p+=1,b+=2;continue}if(Z){s++,Ua(o,i,S,w,s),s+=w.b||0,s++,Ir(ne,T,i,s),s+=ne.b||0,p+=2,b+=1;continue}if(ae&&ie===q){s++,Ua(o,i,S,w,s),ja(o,i,C,T,b,l),s+=w.b||0,s++,Ir(ne,de,i,s),s+=ne.b||0,p+=2,b+=2;continue}break}for(;p<f;){s++;var x=c[p],w=x.b;Ua(o,i,x.a,w,s),s+=w.b||0,p++}for(;b<m;){var pe=pe||[],_=u[b];ja(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&rr(n,8,t,{w:i,x:l,y:pe})}var P$="_elmW6BL";function ja(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Ir(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}ja(e,r,n+P$,t,i,o)}function Ua(e,r,n,t,i){var o=e[n];if(!o){var l=rr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Ir(t,o.z,c,i),rr(r,9,i,{w:c,A:o});return}Ua(e,r,n+P$,t,i)}function z$(e,r,n,t){Na(e,r,n,0,0,r.b,t)}function Na(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var f=c.$;if(f===1)z$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&Na(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var m=p.w;m.length>0&&Na(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Na(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,S=0;S<x.length;S++){i++;var C=b===1?x[S]:x[S].b,w=i+(C.b||0);if(i<=u&&u<=w&&(t=Na(_[S],C,n,t,i,w,l),!(c=n[t])||(u=c.r)>o))return t;i=w}return t}function M$(e,r,n,t){return n.length===0?e:(z$(e,r,n,t),vi(e,n))}function vi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Wd(i,t);i===e&&(e=o)}return e}function Wd(e,r){switch(r.$){case 0:return Od(e,r.s,r.u);case 4:return Vo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return vi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(bn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=vi(e,o.w),e;case 8:return qd(e,r);case 5:return r.s(e);default:Ta(10)}}function Od(e,r,n){var t=e.parentNode,i=bn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function qd(e,r){var n=r.s,t=Jd(n.y,r);e=vi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:bn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&Cl(e,t),e}function Jd(e,r){if(!!e){for(var n=ln.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Cl(n,o.c===2?o.s:bn(o.z,r.u))}return n}}function Tl(e){if(e.nodeType===3)return Bo(e.textContent);if(e.nodeType!==1)return Bo("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Xr(a(Vr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Xr(Tl(f[t]),u);return h(mn,c,r,u)}function Yd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Xd=re(function(e,r,n,t){return Sl(r,t,e.gS,e.ii,e.hX,function(i,o){var l=e.ik,c=t.node,u=Tl(c);return T$(o,function(f){var m=l(f),p=L$(u,m);c=M$(c,u,p,i),u=m})})});re(function(e,r,n,t){return Sl(r,t,e.gS,e.ii,e.hX,function(i,o){var l=e.dE&&e.dE(i),c=e.ik,u=ln.title,f=ln.body,m=Tl(f);return T$(o,function(p){$i=l;var b=c(p),s=mn("body")(D)(b.fU),x=L$(m,s);f=M$(f,m,x,i),m=s,$i=0,u!==b.id&&(ln.title=u=b.id)})})});var fi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function T$(e,r){r(e);var n=0;function t(){n=n===1?0:(fi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&fi(t),n=2)}}v(function(e,r){return a(jl,St,fn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(jl,St,fn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(jl,St,fn(function(){history.replaceState({},"",r),e()}))});var Kd={addEventListener:function(){},removeEventListener:function(){}},Zd=typeof window!="undefined"?window:Kd;M(function(e,r,n){return b$(fn(function(t){function i(o){wl(n(o))}return e.addEventListener(r,i,zl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Sr(e,r);return Ar(n)?X(n.a):J});function k$(e,r){return fn(function(n){fi(function(){var t=document.getElementById(e);n(t?Yn(r(t)):od(hg(e)))})})}function Qd(e){return fn(function(r){fi(function(){r(Yn(e()))})})}v(function(e,r){return k$(r,function(n){return n[e](),wt})});v(function(e,r){return Qd(function(){return Zd.scroll(e,r),wt})});M(function(e,r,n){return k$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,wt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var ep=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return X(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var rp=M(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var p=u[f];m[--f]=p?X(p):J}t.push(P(_f,u[0],u.index,i,$(m))),c=r.lastIndex}return r.lastIndex=l,$(t)});re(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var f=arguments[c];u[--c]=f?X(f):J}return n(P(_f,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var np=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/ap(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function ap(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var kl=new Float64Array(3),Jc=new Float64Array(3),Yc=new Float64Array(3),tp=M(function(e,r,n){return new Float64Array([e,r,n])}),ip=function(e){return e[0]},op=function(e){return e[1]},lp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var cp=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function D$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(D$);function F$(e,r,n){return n===void 0&&(n=new Float64Array(3)),mi(D$(e,r,n),n)}v(F$);function A$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function mi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/A$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var up=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ha=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ha);function Ro(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Ro);v(function(e,r){var n,t=kl,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ha(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ha(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ha(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ha(r,t)+e[14])/n,i});var $p=re(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var vp=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},fp=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/mp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function mp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var sp=new Float64Array(16),dp=new Float64Array(16),pp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},gp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function I$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}Tr(I$);re(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return I$(l,c,o,i,n,t)});function E$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}Tr(E$);re(function(e,r,n,t){return E$(e,r,n,t,-1,1)});function B$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],m=e[7],p=e[8],b=e[9],s=e[10],x=e[11],_=e[12],S=e[13],C=e[14],w=e[15],T=r[0],H=r[1],Z=r[2],ae=r[3],te=r[4],ie=r[5],ne=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],E=r[15];return n[0]=t*T+c*H+p*Z+_*ae,n[1]=i*T+u*H+b*Z+S*ae,n[2]=o*T+f*H+s*Z+C*ae,n[3]=l*T+m*H+x*Z+w*ae,n[4]=t*te+c*ie+p*ne+_*q,n[5]=i*te+u*ie+b*ne+S*q,n[6]=o*te+f*ie+s*ne+C*q,n[7]=l*te+m*ie+x*ne+w*q,n[8]=t*de+c*pe+p*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=l*de+m*pe+x*Me+w*Se,n[12]=t*me+c*Te+p*I+_*E,n[13]=i*me+u*Te+b*I+S*E,n[14]=o*me+f*Te+s*I+C*E,n[15]=l*me+m*Te+x*I+w*E,n}v(B$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],f=e[8],m=e[9],p=e[10],b=e[12],s=e[13],x=e[14],_=r[0],S=r[1],C=r[2],w=r[4],T=r[5],H=r[6],Z=r[8],ae=r[9],te=r[10],ie=r[12],ne=r[13],q=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+u*S+p*C,n[3]=0,n[4]=t*w+l*T+f*H,n[5]=i*w+c*T+m*H,n[6]=o*w+u*T+p*H,n[7]=0,n[8]=t*Z+l*ae+f*te,n[9]=i*Z+c*ae+m*te,n[10]=o*Z+u*ae+p*te,n[11]=0,n[12]=t*ie+l*ne+f*q+b,n[13]=i*ie+c*ne+m*q+s,n[14]=o*ie+u*ne+p*q+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=mi(r,kl);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/A$(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),p=o*m,b=l*m,s=c*m,x=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+u,w=x+s,T=_-b,H=x-s,Z=l*l*f+u,ae=S+p,te=_+b,ie=S-p,ne=c*c*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],E=n[8],B=n[9],V=n[10],R=n[11],j=n[12],U=n[13],N=n[14],Ne=n[15];return t[0]=q*C+Se*w+E*T,t[1]=de*C+me*w+B*T,t[2]=pe*C+Te*w+V*T,t[3]=Me*C+I*w+R*T,t[4]=q*H+Se*Z+E*ae,t[5]=de*H+me*Z+B*ae,t[6]=pe*H+Te*Z+V*ae,t[7]=Me*H+I*Z+R*ae,t[8]=q*te+Se*ie+E*ne,t[9]=de*te+me*ie+B*ne,t[10]=pe*te+Te*ie+V*ne,t[11]=Me*te+I*ie+R*ne,t[12]=j,t[13]=U,t[14]=N,t[15]=Ne,t});function hp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(hp);re(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function bp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(bp);re(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],f=t[4],m=t[5],p=t[6],b=t[7],s=t[8],x=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=f,i[5]=m,i[6]=p,i[7]=b,i[8]=s,i[9]=x,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=l*e+m*r+x*n+t[13],i[14]=c*e+p*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],f=r[3],m=r[4],p=r[5],b=r[6],s=r[7],x=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=f,n[4]=m,n[5]=p,n[6]=b,n[7]=s,n[8]=x,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+x*o+r[12],n[13]=c*t+p*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=F$(e,r,kl),i=mi(Ro(n,t,Jc),Jc),o=mi(Ro(t,i,Yc),Yc),l=sp,c=dp;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,B$(l,c)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Xc=0;function lt(e,r){for(;r.b;r=r.b)e(r.a)}function Dl(e){for(var r=0;e.b;e=e.b)r++;return r}var _p=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},xp=Je(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),wp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),yp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Sp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Cp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Pp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),zp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Mp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Tp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},kp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Dp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Fp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},V$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},R$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ap=function(e){e.gl.disable(e.gl.CULL_FACE)},Ip=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ep=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Bp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Kc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Vp=[kp,Dp,Fp,V$,R$,Ap,Ip,Ep,Bp];function Zc(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Rp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function j$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function jp(e,r,n,t){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(s,x,_,S,C){var w;if(i===1)for(w=0;w<x;w++)s[_++]=x===1?S[C]:S[C][w];else o.forEach(function(T){for(w=0;w<x;w++)s[_++]=x===1?S[T][C]:S[T][C][w]})}var u=j$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,p=new u.type(Dl(n.b)*m);lt(function(s){c(p,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),b}function Up(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Np(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Dl(r.b),indexBuffer:null,buffers:{}}}function Np(e,r){var n=new Uint32Array(Dl(e)*r),t=0,i;return lt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Qc(e,r){return e+"#"+r}var U$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),V$(n),R$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=Qc(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Xc++,f||(f=Zc(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Xc++,m||(m=Zc(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var p=Rp(t,f,m);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Hp(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(p,u),x=t.getAttribLocation(p,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(x)}l=Qc(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),Gp(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Up(t,o.d),n.buffers.set(o.d,_)),u=0;u<c.activeAttributes.length;u++){s=c.activeAttributes[u],x=c.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=jp(t,s,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=j$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,w=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(x+T),t.vertexAttribPointer(x+T,S.size,S.baseType,!1,w,C*T)}for(n.toggle=!n.toggle,lt(W_(n),o.a),u=0;u<Kc.length;u++){var H=n[Kc[u]];H.toggle!==n.toggle&&H.enabled&&(Vp[u](n),H.enabled=!1,H.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return lt(i,e.g),r});function Hp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(s,x){var _=x.name,S=e.getUniformLocation(s,_);switch(x.type){case e.INT:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};case e.FLOAT:return function(w){o[_]!==w&&(e.uniform1f(S,w),o[_]=w)};case e.FLOAT_VEC2:return function(w){o[_]!==w&&(e.uniform2f(S,w[0],w[1]),o[_]=w)};case e.FLOAT_VEC3:return function(w){o[_]!==w&&(e.uniform3f(S,w[0],w[1],w[2]),o[_]=w)};case e.FLOAT_VEC4:return function(w){o[_]!==w&&(e.uniform4f(S,w[0],w[1],w[2],w[3]),o[_]=w)};case e.FLOAT_MAT4:return function(w){o[_]!==w&&(e.uniformMatrix4fv(S,!1,new Float32Array(w)),o[_]=w)};case e.SAMPLER_2D:var C=l++;return function(w){e.activeTexture(e.TEXTURE0+C);var T=c.textures.get(w);T||(T=w.ge(e),c.textures.set(w,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==w&&(e.uniform1i(S,C),o[_]=w)};case e.BOOL:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<m;p++){var b=e.getActiveUniform(i,p);f[t[b.name]||b.name]=u(i,b)}return f}function Gp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Wp=M(function(e,r,n){return Cd(r,{g:n,f:{},h:e},Zp,Qp)}),Op=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),qp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Jp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Yp=v(function(e,r){e.contextAttributes.antialias=!0}),Xp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Kp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Zp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};lt(function(i){return a(G_,r,i)},e.h);var n=ln.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),_p(function(){return a(U$,e,n)})):(n=ln.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Qp(e,r){return r.f=e.f,U$(r)}var z=us,Ut=os,N$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(Ut,e,c,f)}else{var u=l.a;return h(Ut,o,c,u)}});return h(Ut,o,h(Ut,e,r,i),t)}),Fl=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=h(e,t,i,h(Fl,e,r,l)),f=o;e=c,r=u,n=f;continue e}}),eu=function(e){return h(Fl,M(function(r,n,t){return a(z,L(r,n),t)}),D,e)},H$=1,eg=2,G$=0,nr=function(e){return{$:1,a:e}},Al=v(function(e,r){return{$:3,a:e,b:r}}),ru=v(function(e,r){return{$:0,a:e,b:r}}),W$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},rg=function(e){return{$:2,a:e}},X=function(e){return{$:0,a:e}},J={$:1},ng=Is,ag=rd,k=p$,ce=v(function(e,r){return a(ks,e,Di(r))}),Il=v(function(e,r){return $(a(Ts,e,r))}),O$=function(e){return a(ce,`
    `,a(Il,`
`,e))},Ue=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),Wn=function(e){return h(Ue,v(function(r,n){return n+1}),0,e)},tg=$s,ig=M(function(e,r,n){e:for(;;)if(xe(e,r)<1){var t=e,i=r-1,o=a(z,r,n);e=t,r=i,n=o;continue e}else return n}),qr=v(function(e,r){return h(ig,e,r,D)}),q$=v(function(e,r){return h(tg,e,a(qr,0,Wn(r)-1),r)}),Jr=Ns,J$=function(e){var r=Jr(e);return 97<=r&&r<=122},Y$=function(e){var r=Jr(e);return r<=90&&65<=r},og=function(e){return J$(e)||Y$(e)},lg=function(e){var r=Jr(e);return r<=57&&48<=r},cg=function(e){return J$(e)||Y$(e)||lg(e)},mr=function(e){return h(Ue,z,D,e)},ka=Ls,ug=v(function(e,r){return`

(`+(k(e+1)+(") "+O$($g(r))))}),$g=function(e){return a(vg,e,D)},vg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=ka(n);if(_.$===1)return!1;var S=_.a,C=S.a,w=S.b;return og(C)&&a(ng,cg,w)}(),i=t?"."+n:"['"+(n+"']"),u=l,f=a(z,i,r);e=u,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),u=l,f=a(z,c,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",mr(r)):"Json.Decode.oneOf"}(),x=p+(" failed in the following "+(k(Wn(m))+" ways:"));return a(ce,`

`,a(z,x,a(q$,ug,m)))}else{var l=m.a,u=l,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",mr(r)):"!"}();default:var b=e.a,s=e.b,x=function(){return r.b?"Problem with the value at json"+(a(ce,"",mr(r))+`:

    `):`Problem with the given value:

`}();return x+(O$(a(ag,4,s))+(`

`+b))}}),_r=32,jo=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Uo=rs,ct=bs,El=v(function(e,r){return jc(r)/jc(e)}),Ga=gs,ut=ct(a(El,2,_r)),X$=P(jo,0,ut,Uo,Uo),K$=as,Z$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Q$=_s,No=ns,Lr=v(function(e,r){return xe(e,r)>0?e:r}),fg=function(e){return{$:0,a:e}},Bl=ts,mg=v(function(e,r){e:for(;;){var n=a(Bl,_r,e),t=n.a,i=n.b,o=a(z,fg(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return mr(o)}}),ev=function(e){var r=e.a;return r},sg=v(function(e,r){e:for(;;){var n=ct(r/_r);if(n===1)return a(Bl,_r,e).a;var t=a(mg,e,D),i=n;e=t,r=i;continue e}}),rv=v(function(e,r){if(r.n){var n=r.n*_r,t=Q$(a(El,_r,n-1)),i=e?mr(r.C):r.C,o=a(sg,i,r.n);return P(jo,No(r.r)+n,a(Lr,5,t*ut),o,r.r)}else return P(jo,No(r.r),ut,Uo,r.r)}),dg=Je(function(e,r,n,t,i){e:for(;;){if(r<0)return a(rv,!1,{C:t,n:n/_r|0,r:i});var o=Z$(h(K$,_r,r,e)),l=e,c=r-_r,u=n,f=a(z,o,t),m=i;e=l,r=c,n=u,t=f,i=m;continue e}}),pg=v(function(e,r){if(e<=0)return X$;var n=e%_r,t=h(K$,n,e-n,r),i=e-n-_r;return F(dg,r,i,e,D,t)}),Ar=function(e){return!e.$},Q=Ks,Pe=Os,K=Xs,We=qs,nv=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),si=Zs,gg=Qs,lr=Gs,Vl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Br=function(e){return e},hg=Br,nu=Tr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),bg=Es,Rn=Ps,$a=Ds,yt=v(function(e,r){return e<1?r:h($a,e,Rn(r),r)}),Fi=Vs,Ai=function(e){return e===""},Ii=v(function(e,r){return e<1?"":h($a,0,e,r)}),av=Rs,au=Je(function(e,r,n,t,i){if(Ai(i)||a(bg,"@",i))return J;var o=a(Fi,":",i);if(o.b){if(o.b.b)return J;var l=o.a,c=av(a(yt,l+1,i));if(c.$===1)return J;var u=c;return X(ur(nu,e,a(Ii,l,i),u,r,n,t))}else return X(ur(nu,e,i,J,r,n,t))}),tu=re(function(e,r,n,t){if(Ai(t))return J;var i=a(Fi,"/",t);if(i.b){var o=i.a;return F(au,e,a(yt,o,t),r,n,a(Ii,o,t))}else return F(au,e,"/",r,n,t)}),iu=M(function(e,r,n){if(Ai(n))return J;var t=a(Fi,"?",n);if(t.b){var i=t.a;return P(tu,e,X(a(yt,i+1,n)),r,a(Ii,i,n))}else return P(tu,e,J,r,n)});v(function(e,r){if(Ai(r))return J;var n=a(Fi,"#",r);if(n.b){var t=n.a;return h(iu,e,X(a(yt,t+1,r)),a(Ii,t,r))}else return h(iu,e,J,r)});var _g=Bs,St=function(e){},Ct=Yn,xg=Ct(0),tv=re(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,f=c.b;if(f.b){var m=f.a,p=f.b,b=n>500?h(Ue,e,r,mr(p)):P(tv,e,r,n+1,p);return a(e,i,a(e,l,a(e,u,a(e,m,b))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),Ze=M(function(e,r,n){return P(tv,e,r,0,n)}),ee=v(function(e,r){return h(Ze,v(function(n,t){return a(z,e(n),t)}),D,r)}),di=Eo,Rl=v(function(e,r){return a(di,function(n){return Ct(e(n))},r)}),wg=M(function(e,r,n){return a(di,function(t){return a(di,function(i){return Ct(a(e,t,i))},n)},r)}),yg=function(e){return h(Ze,wg(z),Ct(D),e)},Sg=sd,Cg=v(function(e,r){var n=r;return b$(a(di,Sg(e),n))}),Lg=M(function(e,r,n){return a(Rl,function(t){return 0},yg(a(ee,Cg(e),r)))}),Pg=M(function(e,r,n){return Ct(0)}),zg=v(function(e,r){var n=r;return a(Rl,e,n)});Or.Task=fd(xg,Lg,Pg,zg);var Mg=x$("Task"),jl=v(function(e,r){return Mg(a(Rl,e,r))}),Tg=Xd,kg=Ss,pi={$:1},iv=function(e){return{$:2,a:e}},Ul={$:0},Pr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=M(function(e,r,n){return r(e(n))}),Xn=function(e){var r=e.b.s;return r.a},Dg=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return X(a(Pr,r,{s:o,an:l,X:a(z,t,n)}))}else return J},Fe=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Fg=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dH;return(xe(o+r.gp,Xn(n).d1)>0?a(Xe,Dg,Fe(a(Pr,pi,i))):Br)(a(Pr,iv({dH:o+r.gp}),i));default:var l=i.s,c=l.a,u=l.b,f=a(nv,c.gb,Re(r,{d1:c.d1+r.gp})),m=a(e,f,u);return a(Pr,Ul,{s:L(f,m),an:D,X:a(z,i.s,i.X)})}}),ov=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),Ag=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(z,t,n);e=o,r=l,n=c;continue e}else return n}}),Ig=v(function(e,r){return mr(h(Ag,e,r,D))}),lv=M(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,w=i.a,o=i.b,l=o.a;return $([w,l]);case 3:if(t.b.b.b.b){var c=t.b,w=c.a,u=c.b,l=u.a,f=u.b,m=f.a;return $([w,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,w=p.a,b=p.b,l=b.a,s=b.b,m=s.a,x=s.b,_=x.a,S=x.b;return e>1e3?a(z,w,a(z,l,a(z,m,a(z,_,a(Ig,r-4,S))))):a(z,w,a(z,l,a(z,m,a(z,_,h(lv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,w=C.a;return $([w])}}),Eg=v(function(e,r){return h(lv,0,e,r)}),Bg=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Y(mr(n),Y($([t]),i)),l=a(Eg,e,o),c=a(ov,e,o);if(c.b){var u=c.a,f=c.b;return a(Pr,pi,{s:u,an:f,X:mr(l)})}else{var m=mr(l);if(m.b){var p=m.a,b=m.b;return a(Pr,pi,{s:p,an:D,X:b})}else return r}}),Vg=function(e){var r=e.b;return a(Pr,pi,r)},Rg=function(e){var r=e.b;return a(Pr,iv({dH:Xn(e).d1}),r)},jg=function(e){var r=e.b;return a(Pr,Ul,r)},Ug=v(function(e,r){switch(e.$){case 1:return Vg(r);case 2:return jg(r);case 3:return Rg(r);default:var n=e.a;return a(Bg,n,r)}}),gi=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),Ng=v(function(e,r){return Re(r,{aN:e(r.aN)})}),Hg=function(e){return{$:3,a:e}},cv=function(e){return{$:2,a:e}},uv=v(function(e,r){return{$:0,a:e,b:r}}),$v=v(function(e,r){return{$:1,a:e,b:r}}),je=v(function(e,r){if(r.$)return J;var n=r.a;return X(e(n))}),we=function(e){return e<0?-e:e},vv=js,Gg=M(function(e,r,n){return a(Fe,0/0,vv(a(e,r,n)))}),Lt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Wg=Ms,fv=function(e){return h(Wg,z,D,e)},Og=v(function(e,r){var n=a(Lt,function(t){return t!=="0"&&t!=="."},fv(r));return Y(e&&n?"-":"",r)}),ve=p$,Ho=Cs,mv=Hs,sv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=ka(n);if(t.$===1)return"01";var i=t.a;return a(Ho,"0",sv(i))}else{var o=Jr(r);return o>=48&&o<57?a(Ho,mv(o+1),n):"0"}},Go=hs,qg=ys,Ei=function(e){return a(Ho,e,"")},dv=M(function(e,r,n){return e<=0?n:h(dv,e>>1,Y(r,r),e&1?Y(n,r):n)}),$t=v(function(e,r){return h(dv,e,r,"")}),Wo=M(function(e,r,n){return Y(n,a($t,e-Rn(n),Ei(r)))}),Oo=zs,pv=function(e){var r=a(Il,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Jg=function(e){var r=a(Il,"e",ve(we(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Fe,0,av(a(_g,"+",i)?a(yt,1,i):i)),l=pv(n),c=l.a,u=l.b,f=Y(c,u),m=o<0?a(Fe,"0",a(je,function(p){var b=p.a,s=p.b;return b+("."+s)},a(je,gi(Ei),ka(Y(a($t,we(o),"0"),f))))):h(Wo,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Yg=M(function(e,r,n){if(Go(n)||qg(n))return ve(n);var t=n<0,i=pv(Jg(we(n))),o=i.a,l=i.b,c=Rn(o)+r,u=Y(a($t,-c+1,"0"),h(Wo,c,"0",Y(o,l))),f=Rn(u),m=a(Lr,1,c),p=a(e,t,h($a,m,f,u)),b=h($a,0,m,u),s=p?Oo(a(Fe,"1",a(je,sv,ka(Oo(b))))):b,x=Rn(s),_=s==="0"?s:r<=0?Y(s,a($t,we(r),"0")):xe(r,Rn(l))<0?h($a,0,x-r,s)+("."+h($a,x-r,x,s)):Y(o+".",h(Wo,r,"0",l));return a(Og,t,_)}),gv=Yg(v(function(e,r){var n=ka(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Jr(i))})),Xg=Gg(gv),Kg=M(function(e,r,n){var t=a(El,10,we(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Xg,i,n)}),hv=cs,Da=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(hv,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return X(t);default:var c=e,u=o;e=c,r=u;continue e}}}),fe=Je(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Kr={$:-2},ya=Je(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,p=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,p,b),F(fe,1,o,l,c,u))}else return F(fe,e,o,l,F(fe,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var x=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return F(fe,0,f,m,F(fe,1,x,_,S,C),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),qo=M(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,Kr,Kr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a(hv,e,i);switch(u){case 0:return F(ya,t,i,o,h(qo,e,r,l),c);case 1:return F(fe,t,i,r,l,c);default:return F(ya,t,i,o,l,h(qo,e,r,c))}}),da=M(function(e,r,n){var t=h(qo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return F(fe,1,i,o,l,c)}else{var u=t;return u}}),Zg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},bv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,f=e.e;f.a;var m=f.b,p=f.c,b=f.d;b.a;var s=b.b,x=b.c,_=b.d,S=b.e,C=f.e;return F(fe,0,s,x,F(fe,1,n,t,F(fe,0,o,l,c,u),_),F(fe,1,m,p,S,C))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,l=w.c,c=w.d,u=w.e,T=e.e;T.a;var m=T.b,p=T.c,b=T.d,C=T.e;return F(fe,1,n,t,F(fe,0,o,l,c,u),F(fe,0,m,p,b,C))}else return e},ou=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,f=c.c,m=c.d,p=c.e,b=i.e,s=e.e;s.a;var x=s.b,_=s.c,S=s.d,C=s.e;return F(fe,0,o,l,F(fe,1,u,f,m,p),F(fe,1,n,t,b,F(fe,0,x,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,l=w.c,T=w.d,b=w.e,H=e.e;H.a;var x=H.b,_=H.c,S=H.d,C=H.e;return F(fe,1,n,t,F(fe,0,o,l,T,b),F(fe,0,x,_,S,C))}else return e},Qg=ki(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,f=o.d,m=o.e;return F(fe,n,c,u,f,F(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var p=l.d;return p.a,ou(r)}else break e;else return l.a,l.d,ou(r);else break e;return r}}),ri=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(fe,r,n,t,ri(i),c);var u=bv(e);if(u.$===-1){var f=u.a,m=u.b,p=u.c,b=u.d,s=u.e;return F(ya,f,m,p,ri(b),s)}else return Kr}else return F(fe,r,n,t,ri(i),c)}else return Kr},Qa=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(xe(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(fe,n,t,i,a(Qa,e,o),l);var u=bv(r);if(u.$===-1){var f=u.a,m=u.b,p=u.c,b=u.d,s=u.e;return F(ya,f,m,p,a(Qa,e,b),s)}else return Kr}else return F(fe,n,t,i,a(Qa,e,o),l);else return a(e0,e,_l(Qg,e,r,n,t,i,o,l))}),e0=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(he(e,t)){var c=Zg(l);if(c.$===-1){var u=c.b,f=c.c;return F(ya,n,u,f,o,ri(l))}else return Kr}else return F(ya,n,t,i,o,a(Qa,e,l))}else return Kr}),r0=v(function(e,r){var n=a(Qa,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return F(fe,1,t,i,o,l)}else{var c=n;return c}}),Nt=M(function(e,r,n){var t=r(a(Da,e,n));if(t.$)return a(r0,e,n);var i=t.a;return h(da,e,i,n)}),n0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Nt,r,je(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a($v,L(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Nt,r,je(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(uv,L(o,l),h(Kg,o,l,n))}));case 3:var r=e.a,n=e.b;return a(Nt,r,je(function(t){return t.$===3?Hg(n):t}));default:var r=e.a,n=e.b;return a(Nt,r,je(function(t){return t.$===2?cv(n):t}))}},a0=function(e){return Ng(n0(e))},t0=v(function(e,r){return a(ee,a0(e),r)}),i0=v(function(e,r){return Re(r,{gb:a(t0,e,r.gb)})}),o0=v(function(e,r){var n=r.a,t=r.b;return a(Pr,n,Re(t,{s:a(gi,i0(e),t.s)}))}),Jo=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),l0=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Pr,t,Re(i,{s:a(Jo,a(e,o.a,r),o)}))}),c0=re(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Re(t,{bw:!t.bw});case 2:var i=n.a;return Re(t,{R:h(Fg,e,i,t.R)});case 3:var o=n.a;return Re(t,{bp:o});case 4:var l=n.a;return Re(t,{R:a(o0,l,t.R)});case 5:var c=n.a;return Re(t,{R:h(l0,r,c,t.R)});default:var u=n.a;return Re(t,{R:a(Ug,u,t.R)})}}),u0=v(function(e,r){return a(Pr,Ul,{s:L(e,r(e)),an:D,X:D})}),$0=dd,lu=$0(D),v0=function(e){return{$:2,a:e}},hi=Ys,Sa=Js,f0=_d("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return lr({d1:l,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(p){return lr({fJ:p,gd:m,d4:f,go:u,g4:c,hr:l,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",hi(Sa)))},a(K,"left",Pe))},a(K,"pressedKeys",hi(Sa)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return lr({d4:f,g$:u,ha:c,hy:l,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return lr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return lr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We))))),m0=function(e){return e.dN,f0(v0)},s0=function(e){return{$:5,a:e}},d0={$:0},bi=v(function(e,r){return e}),p0=function(e){var r=e.b.s;return r.b},g0=function(e){return{$:1,a:e}},h0=g0,_v=function(e){return{$:8,a:e}},ye=_v,vt=function(e){return{$:0,a:e}},Pt=M(function(e,r,n){return e(r(n))}),b0=a(Pt,vt,bi),hn=b0,Ie=function(e){return{$:1,a:e}},nn=Ie,xv=v(function(e,r){return{$:9,a:e,b:r}}),On={$:0},wv=v(function(e,r){return r.$===3?On:a(xv,e,r)}),Yo=function(e){return a(wv,4,e)},d={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},Nl=h$,kr=v(function(e,r){return a(Ll,e,Nl(r))}),Cr=kr("className"),br=function(e){return Ie(Cr(e))},yv=v(function(e,r){return{$:2,a:e,b:r}}),_0=v(function(e,r){return{$:1,a:e,b:r}}),er=function(e){return{$:0,a:e}},xr=2,x0={$:0},Kn=x0,w0={$:0},y0=d.fK+(" "+d.aw),S0=d.fK+(" "+d.gC),C0=d.fK+(" "+d.eY),L0=d.fK+(" "+d.eZ),P0=d.fK+(" "+d.af),z0=d.fK+(" "+d.hL),M0=function(e){switch(e){case 0:return P0;case 1:return y0;case 2:return z0;case 3:return S0;case 4:return L0;default:return C0}},cu=function(e){return{$:1,a:e}},Vn={$:0},Xo=function(e){return{$:1,a:e}},uu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),$u=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(ee,function(o){return L(e,o)},t),r);case 2:var i=n.a;return Y(r,a(ee,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return Y(a(ee,function(o){return L(e,o)},t),Y(r,a(ee,function(o){return L(e,o)},i)))}}),Ht=4,T0=function(e){return{$:0,a:e}},k0=function(e){return{$:1,a:e}},_e=function(e){return e>31?k0(1<<e-32):T0(1<<e)},Sv=_e(41),Cv=_e(40),Lv=_e(42),Pv=_e(43),Ca=mn("div"),Hl=Kr,zv=Hl,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Gr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Gr(o))}},Be=xs,Ve=function(e){return k(Be(e*255))},Gl=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("mv-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d;return X("tfrm-"+(Ve(l)+("-"+(Ve(c)+("-"+(Ve(u)+("-"+(Ve(m)+("-"+(Ve(p)+("-"+(Ve(b)+("-"+(Ve(x)+("-"+(Ve(_)+("-"+(Ve(S)+("-"+Ve(C))))))))))))))))))))}},ft=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(ee,Gr,i.hB))+("-cols-"+(a(ce,"-",a(ee,Gr,i.ak))+("-space-x-"+(Gr(i.hP.a)+("-space-y-"+Gr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var l=e.a,c=e.b,u=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(ee,function(m){var p=ft(m);if(p==="")return"";var b=p;return b+("-"+u)},c));default:var f=e.a;return a(Fe,"",Gl(f))}},D0=v(function(e,r){var n=r;return h(da,e,0,n)}),F0=v(function(e,r){var n=a(Da,e,r);return!n.$}),A0=v(function(e,r){var n=r;return a(F0,e,n)}),Mv=v(function(e,r){var n=r.a,t=r.b,i=ft(e);return a(A0,i,n)?r:L(a(D0,i,n),a(z,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),et=v(function(e,r){return{$:0,a:e,b:r}}),y=function(e){return"."+e},I0=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(z,i,n)}),Zr=v(function(e,r){return h(Ze,I0(e),D,r)}),va=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Be(r*255))+(","+k(Be(n*255))+(","+k(Be(t*255))+(","+(ve(i)+")")))))},Ko=function(e){return a(ce," ",a(Zr,Br,$([e.ej?X("inset"):J,X(ve(e.eV.a)+"px"),X(ve(e.eV.b)+"px"),X(ve(e.a2)+"px"),X(ve(e.bi)+"px"),X(va(e.b6))])))},Tv=function(e){return $([a(et,y(d.ea)+":focus-within",a(Zr,Br,$([a(je,function(r){return a(ue,"border-color",va(r))},e.fW),a(je,function(r){return a(ue,"background-color",va(r))},e.fO),a(je,function(r){return a(ue,"box-shadow",Ko({a2:r.a2,b6:r.b6,ej:!1,eV:a(Jo,Ga,a(gi,Ga,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))]))),a(et,y(d.fK)+":focus .focusable, "+(y(d.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(y(d.fK)+" .focusable-thumb"))),a(Zr,Br,$([a(je,function(r){return a(ue,"border-color",va(r))},e.fW),a(je,function(r){return a(ue,"background-color",va(r))},e.fO),a(je,function(r){return a(ue,"box-shadow",Ko({a2:r.a2,b6:r.b6,ej:!1,eV:a(Jo,Ga,a(gi,Ga,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))])))])},Hr=function(e){return mn(S$(e))},kv=v(function(e,r){return a(Ll,Td(e),C$(r))}),mo=v(function(e,r){return{$:2,a:e,b:r}}),Wl=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),E0=v(function(e,r){return{$:3,a:e,b:r}}),Dv=$([0,1,2,3,4,5]),B0=v(function(e,r){return r.b?h(Ze,z,r,e):e}),sr=function(e){return h(Ze,B0,D,e)},Fa=v(function(e,r){return sr(a(ee,e,r))}),V0=function(e){switch(e){case 0:return y(d.gc);case 1:return y(d.b9);case 2:return y(d.cb);case 3:return y(d.bt);case 4:return y(d.ca);default:return y(d.ax)}},_i=function(e){switch(e){case 0:return y(d.fH);case 1:return y(d.fA);case 2:return y(d.dY);case 3:return y(d.dX);case 4:return y(d.fB);default:return y(d.fC)}},Wa=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,V0(n),i),a(O,y(d.fK),$([a(A,_i(n),o)]))])};return Wl(a(Fa,r,Dv))},vu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,y(d.cZ),$([a(g,"z-index","0"),a(O,y(d.fQ),$([a(g,"z-index","-1")]))])),a(A,y(d.hG),$([a(O,y(d.Y),$([a(A,y(d.c$),$([a(g,"flex-grow","0")])),a(A,y(d.dP),$([a(g,"align-self","auto !important")]))]))])),a(O,y(d.c_),$([a(g,"height","auto")])),a(O,y(d.c$),$([a(g,"flex-grow","100000")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(O,y(d.fv),$([a(g,"width","100%")])),a(O,y(d.dO),$([a(g,"align-self","flex-start")])),Wa(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(O,y(d.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),R0=function(e){var r=function(n){return $([a(O,y(d.fK),$([a(A,_i(n),e(n))]))])};return Wl(a(Fa,r,Dv))},j0=function(){return $([0,1,2,3,4,5])}(),U0=$([a(pr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(pr,Y(y(d.fK),Y(y(d.hL),y(d.gN))),$([a(g,"display","block"),a(A,y(d.c$),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,y(d.dP),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(pr,y(d.fK)+":focus",$([a(g,"outline","none")])),a(pr,y(d.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Y(y(d.fK),y(d.c$)),$([a(g,"height","100%"),a(O,y(d.c$),$([a(g,"height","100%")]))])),a(O,y(d.gP),$([a(A,y(d.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(pr,y(d.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,y(d.hL),vu),Wl(function(e){return a(ee,e,j0)}(function(e){switch(e){case 0:return a(A,y(d.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,y(d.c$),$([a(g,"height","auto")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,y(d.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,y(d.c$),$([a(g,"height","auto")]))]));case 2:return a(A,y(d.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,y(d.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,y(d.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,y(d.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(pr,y(d.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,y(d.dQ),$([a(g,"flex-wrap","wrap")])),a(A,y(d.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,y(d.gf),$([a(g,"cursor","pointer")])),a(A,y(d.gg),$([a(g,"cursor","text")])),a(A,y(d.hn),$([a(g,"pointer-events","none !important")])),a(A,y(d.b4),$([a(g,"pointer-events","auto !important")])),a(A,y(d.a$),$([a(g,"opacity","0")])),a(A,y(d.aU),$([a(g,"opacity","1")])),a(A,y(Y(d.gK,d.a$))+":hover",$([a(g,"opacity","0")])),a(A,y(Y(d.gK,d.aU))+":hover",$([a(g,"opacity","1")])),a(A,y(Y(d.gx,d.a$))+":focus",$([a(g,"opacity","0")])),a(A,y(Y(d.gx,d.aU))+":focus",$([a(g,"opacity","1")])),a(A,y(Y(d.cL,d.a$))+":active",$([a(g,"opacity","0")])),a(A,y(Y(d.cL,d.aU))+":active",$([a(g,"opacity","1")])),a(A,y(d.fj),$([a(g,"transition",a(ce,", ",a(ee,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,y(d.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,y(d.hE),$([a(g,"overflow-x","auto"),a(A,y(d.af),$([a(g,"flex-shrink","1")]))])),a(A,y(d.hF),$([a(g,"overflow-y","auto"),a(A,y(d.aw),$([a(g,"flex-shrink","1")])),a(A,y(d.hL),$([a(g,"flex-shrink","1")]))])),a(A,y(d.f7),$([a(g,"overflow","hidden")])),a(A,y(d.f8),$([a(g,"overflow-x","hidden")])),a(A,y(d.f9),$([a(g,"overflow-y","hidden")])),a(A,y(d.dO),$([a(g,"width","auto")])),a(A,y(d.b1),$([a(g,"border-width","0")])),a(A,y(d.fX),$([a(g,"border-style","dashed")])),a(A,y(d.fY),$([a(g,"border-style","dotted")])),a(A,y(d.fZ),$([a(g,"border-style","solid")])),a(A,y(d.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,y(d.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,y(d.hL),vu),a(A,y(d.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,y(d.fK),$([a(g,"flex-basis","0%"),a(A,y(d.fu),$([a(g,"flex-basis","auto")])),a(A,y(d.et),$([a(g,"flex-basis","auto")]))])),a(O,y(d.c$),$([a(g,"align-self","stretch !important")])),a(O,y(d.ef),$([a(g,"align-self","stretch !important")])),a(O,y(d.dP),$([a(g,"flex-grow","100000")])),a(O,y(d.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+d.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fG+(" ~ s."+d.fE)),$([a(g,"flex-grow","0")])),Wa(function(e){switch(e){case 0:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return L($([a(g,"justify-content","flex-end")]),D);case 3:return L($([a(g,"justify-content","flex-start")]),D);case 4:return L($([a(g,"justify-content","center")]),D);default:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,y(d.hO),$([a(g,"justify-content","space-between")])),a(A,y(d.ci),$([a(g,"align-items","baseline")]))])),a(A,y(d.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,y(d.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,y(d.ee),$([a(g,"flex-basis","auto")]))])),a(O,y(d.c$),$([a(g,"flex-grow","100000")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(O,y(d.fv),$([a(g,"width","100%")])),a(O,y(d.dO),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+d.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fD+(" ~ s."+d.fF)),$([a(g,"flex-grow","0")])),Wa(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(g,"justify-content","center")]),D)}}),a(O,y(d.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,y(d.hO),$([a(g,"justify-content","space-between")]))])),a(A,y(d.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,y(d.fK),$([a(g,"width","100%")]))])),a(E0,L("display","grid"),$([L("display","grid")])),R0(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,y(d.eY),$([a(g,"display","block"),a(O,y(d.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,y(d.fK+(_i(3)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),a(O,y(d.fK+(_i(2)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),Wa(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return L(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,y(d.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,y(d.gW),$([a(A,y(d.hL),$([a(g,"flex-basis","auto")]))])),a(A,y(d.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,y(d.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,y(d.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,y(d.cZ),$([a(g,"z-index","0"),a(O,y(d.fQ),$([a(g,"z-index","-1")]))])),a(mo,y(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(mo,y(d.eZ),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(mo,y(d.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,y(d.fu),$([a(g,"display","inline-block")])),a(A,y(d.gP),$([a(g,"display","flex")])),a(A,y(d.fQ),$([a(g,"display","flex")])),a(A,y(d.fy),$([a(g,"display","flex")])),a(A,y(d.fR),$([a(g,"display","flex")])),a(A,y(d.hh),$([a(g,"display","flex")])),a(A,y(d.hg),$([a(g,"display","flex")])),a(O,y(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,y(d.af),$([a(g,"display","inline")])),a(O,y(d.aw),$([a(g,"display","inline-flex")])),a(O,y(d.gC),$([a(g,"display","inline-grid")])),Wa(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right")]));case 3:return L(D,$([a(g,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,y(d.ia),$([a(g,"font-weight","100")])),a(A,y(d.h1),$([a(g,"font-weight","200")])),a(A,y(d.h5),$([a(g,"font-weight","300")])),a(A,y(d.h7),$([a(g,"font-weight","400")])),a(A,y(d.h6),$([a(g,"font-weight","500")])),a(A,y(d.h9),$([a(g,"font-weight","600")])),a(A,y(d.fV),$([a(g,"font-weight","700")])),a(A,y(d.h0),$([a(g,"font-weight","800")])),a(A,y(d.h2),$([a(g,"font-weight","900")])),a(A,y(d.g2),$([a(g,"font-style","italic")])),a(A,y(d.hU),$([a(g,"text-decoration","line-through")])),a(A,y(d.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Y(y(d.ih),y(d.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,y(d.ib),$([a(g,"font-style","normal")])),a(A,y(d.h3),$([a(g,"text-align","justify")])),a(A,y(d.cF),$([a(g,"text-align","justify-all")])),a(A,y(d.h$),$([a(g,"text-align","center")])),a(A,y(d.h8),$([a(g,"text-align","right")])),a(A,y(d.h4),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),sn=function(e){return $([a(pr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(pr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},N0=sr($([a(ee,function(e){return a(pr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(qr,0,6)),a(ee,function(e){return a(pr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(qr,8,32)),a(ee,function(e){return a(pr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(qr,0,24)),$([a(pr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(pr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),sn("zero"),sn("onum"),sn("liga"),sn("dlig"),sn("ordn"),sn("tnum"),sn("afrc"),sn("frac")])),H0=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(d.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(d.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),G0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,W0=`
input[type=range] {
  -webkit-appearance: none; 
  background: transparent;
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  width: 100%;
  outline: dashed 1px;
  height: 100%;
  opacity: 0;
}
`,O0=`
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-moz-range-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-ms-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range][orient=vertical]{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical;  /* WebKit */
}
`,q0=`
input[type=range]::-moz-range-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-ms-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-webkit-slider-runnable-track {
    background: transparent;
    cursor: pointer;
}
`,J0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(y(d.fK)+(y(d.af)+(" > "+(y(d.fK)+(" { flex-basis: auto !important; } "+(y(d.fK)+(y(d.af)+(" > "+(y(d.fK)+(y(d.b8)+(" { flex-basis: auto !important; }}"+(G0+(W0+(q0+(O0+H0))))))))))))))),pa=function(e){return a(ce,"",e)},oa=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),la=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Re(o,{aE:a(z,L(l,c),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,p=i.b;return Re(o,{G:a(z,{b5:`
}`,G:D,aE:p,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Re(o,{G:a(z,a(la,a(oa,n.ag+(" + "+b),""),s),o.G)});case 1:var x=i.a,_=i.b;return Re(o,{G:a(z,a(la,a(oa,n.ag+(" > "+x),""),_),o.G)});case 2:var x=i.a,_=i.b;return Re(o,{G:a(z,a(la,a(oa,n.ag+(" "+x),""),_),o.G)});case 4:var S=i.a,C=i.b;return Re(o,{G:a(z,a(la,a(oa,Y(n.ag,S),""),C),o.G)});default:var w=i.a;return Re(o,{G:a(z,a(la,a(oa,n.ag,""),w),o.G)})}});return h(Ze,t,n,r)}),Y0=function(e){var r=function(i){return pa(a(ee,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return Y(n(o),pa(a(ee,t,o.G)))};return pa(a(ee,t,h(Ze,v(function(i,o){var l=i.a,c=i.b;return a(z,a(la,a(oa,l,""),c),o)}),D,e)))},fu=Y(J0,Y0(Y(U0,N0))),_n=Bo,Fv=function(e){var r=e.eS;switch(r){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([_n(fu)]))]));case 1:return _n("");default:return h(Hr,"elm-ui-static-rules",$([a(kv,"rules",Nl(fu))]),D)}},X0=v(function(e,r){return h(Ue,id(e),nd(),r)}),K0=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(td,t,i,n)}),ad(),e)},Z0=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},Q0=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},eh=function(e){if(e.$===5){var r=e.a;return a(Lt,Q0,r.fo)}else return!1},ga=v(function(e,r){return xe(e,r)<0?e:r}),Ra=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ae=re(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Ue,Ra(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Ue,Ra(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Ue,Ra(!1),"",t)+`
}`))])}case 0:var l=h(Ue,Ra(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(d.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(y(d.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(h(Ue,Ra(!1),"",t)+`
}`))])}}),rh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},nh=function(e){if(e.$===5){var r=e.a;return X(a(ce,", ",a(ee,rh,r.fo)))}else return J},ah=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d,w="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(p)+(", "+(ve(b)+")"))))),H="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return X(w+(" "+(T+(" "+H))))}},Ol=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(Ae,e,n,t,i);case 13:var u=r.a,b=r.b;return P(Ae,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,l=a(Lr,0,a(ga,1,1-o));return P(Ae,e,n,"."+u,$([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return P(Ae,e,n,".font-size-"+k(c),$([a(ue,"font-size",k(c)+"px")]));case 1:var u=r.a,f=r.b,m=a(ce,", ",a(Zr,nh,f)),p=$([a(ue,"font-family",a(ce,", ",a(ee,Z0,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Lt,eh,f)?"small-caps":"normal")]);return P(Ae,e,n,"."+u,p);case 3:var se=r.a,b=r.b,io=r.c;return P(Ae,e,n,"."+se,$([a(ue,b,io)]));case 4:var se=r.a,b=r.b,s=r.c;return P(Ae,e,n,"."+se,$([a(ue,b,va(s))]));case 5:var q=r.a,x=r.b,_=r.c,S=k(_)+"px",C=k(x)+"px",w="."+d.af,T="."+(d.dQ+w),pe="."+d.dY,H="."+d.eZ,Z="."+d.eY,Se="."+d.dX,ae=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+d.aw,se="."+q,ne="."+d.fK;return sr($([P(Ae,e,n,se+(w+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-left",C)])),P(Ae,e,n,se+(T+(" > "+ne)),$([a(ue,"margin",ae+(" "+te))])),P(Ae,e,n,se+(ie+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),P(Ae,e,n,se+(Z+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),P(Ae,e,n,se+(Z+(" > "+Se)),$([a(ue,"margin-right",C)])),P(Ae,e,n,se+(Z+(" > "+pe)),$([a(ue,"margin-left",C)])),P(Ae,e,n,Y(se,H),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),P(Ae,e,n,"textarea"+(ne+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),P(Ae,e,n,se+(H+(" > "+Se)),$([a(ue,"margin-right",C)])),P(Ae,e,n,se+(H+(" > "+pe)),$([a(ue,"margin-left",C)])),P(Ae,e,n,se+(H+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),P(Ae,e,n,se+(H+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return P(Ae,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return P(Ae,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ye,Va,Qr){e:for(;;)switch(Qr.$){case 0:var Zm=Qr.a;return k(Zm)+"px";case 1:var Dr=L(Ye,Va);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var An=Dr.b.a;return"minmax(max-content, "+(k(An)+"px)")}else if(Dr.b.$===1){var In=Dr.a.a;return Dr.b,"minmax("+(k(In)+"px, max-content)")}else{var In=Dr.a.a,An=Dr.b.a;return"minmax("+(k(In)+("px, "+(k(An)+"px)")))}case 2:var Rc=Qr.a,Fr=L(Ye,Va);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(Rc)+"fr";Fr.a;var An=Fr.b.a;return"minmax(max-content, "+(k(An)+"px)")}else if(Fr.b.$===1){var In=Fr.a.a;return Fr.b,"minmax("+(k(In)+("px, "+(k(Rc)+"frfr)")))}else{var In=Fr.a.a,An=Fr.b.a;return"minmax("+(k(In)+("px, "+(k(An)+"px)")))}case 3:var oo=Qr.a,lo=Qr.b,co=X(oo),uo=Va,$o=lo;Ye=co,Va=uo,Qr=$o;continue e;default:var oo=Qr.a,lo=Qr.b,co=Ye,uo=X(oo),$o=lo;Ye=co,Va=uo,Qr=$o;continue e}}),I=function(Ye){return h(Te,J,J,Ye)};I(me.hP.a);var E=I(me.hP.b),B=function(Ye){return"grid-template-rows: "+(Ye+";")}(a(ce," ",a(ee,I,me.hB))),V=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(a(ce,E,a(ee,I,me.ak))),R=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(a(ce,E,a(ee,I,me.ak))),j="grid-row-gap:"+(I(me.hP.b)+";"),U="grid-column-gap:"+(I(me.hP.a)+";"),N=function(Ye){return"grid-template-columns: "+(Ye+";")}(a(ce," ",a(ee,I,me.ak))),se=".grid-rows-"+(a(ce,"-",a(ee,Gr,me.hB))+("-cols-"+(a(ce,"-",a(ee,Gr,me.ak))+("-space-x-"+(Gr(me.hP.a)+("-space-y-"+Gr(me.hP.b))))))),no=se+("{"+(N+(B+(U+(j+"}"))))),ao="@supports (display:grid) {"+(no+"}"),to=se+("{"+(R+(V+"}")));return $([to,ao]);case 9:var Ne=r.a,Vt=a(ce," ",$(["-ms-grid-row: "+(k(Ne.af)+";"),"-ms-grid-row-span: "+(k(Ne.gH)+";"),"-ms-grid-column: "+(k(Ne.ga)+";"),"-ms-grid-column-span: "+(k(Ne.im)+";")])),ro=a(ce," ",$(["grid-row: "+(k(Ne.af)+(" / "+(k(Ne.af+Ne.gH)+";"))),"grid-column: "+(k(Ne.ga)+(" / "+(k(Ne.ga+Ne.im)+";")))])),se=".grid-pos-"+(k(Ne.af)+("-"+(k(Ne.ga)+("-"+(k(Ne.im)+("-"+k(Ne.gH))))))),no=se+("{"+(ro+"}")),ao="@supports (display:grid) {"+(no+"}"),to=se+("{"+(Vt+"}"));return $([to,ao]);case 11:var se=r.a,Ym=r.b,Xm=function(Ye){return h(Ol,e,Ye,X(se))};return a(Fa,Xm,Ym);default:var Vc=r.a,io=ah(Vc),se=Gl(Vc),Rt=L(se,io);if(!Rt.a.$&&!Rt.b.$){var q=Rt.a.a,Km=Rt.b.a;return P(Ae,e,n,"."+q,$([a(ue,"transform",Km)]))}else return D}}),th=v(function(e,r){return K0(a(ee,function(n){var t=h(Ol,e,n,J);return L(ft(n),a(X0,Nl,t))},r))}),xi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(ee,n,r))+"}"))}),mu=M(function(e,r,n){var t=n.a,i=n.b;return $([a(xi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(xi,"."+(e+("."+(r+("> ."+(d.Y+(", ."+(e+(" ."+(r+(" > ."+d.Y)))))))))),i)])}),ih=M(function(e,r,n){var t=r.a,i=r.b,o=he(e,n)?e:n+(" ."+e);return a(ce," ",Y(h(mu,o,d.hM,i),h(mu,o,d.gy,t)))}),oh=v(function(e,r){var n=he(e,r)?e:r+(" ."+e);return a(ce," ",$([a(xi,"."+(n+("."+(d.hM+(", "+("."+(n+(" ."+d.hM))))))),$([L("line-height","1")])),a(xi,"."+(n+("."+(d.hM+("> ."+(d.Y+(", ."+(n+(" ."+(d.hM+(" > ."+d.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),su=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),Av=v(function(e,r){return h(Ze,v(function(n,t){return e(n)?a(z,n,t):t}),D,r)}),lh=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Ue,Lr,r,n))}else return J},du=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Ue,ga,r,n))}else return J},pu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Fe,e.gk,du(r)),t=a(Fe,e.fP,du(a(Av,function(f){return!he(f,n)},r))),i=a(Fe,e.f1,lh(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f1:h(su,o,i-t,l),ec:h(su,c,i-n,u)}},gu=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gH)),L("vertical-align",ve(e.fp)+"em"),L("font-size",ve(e.bi)+"em")]))},ch=function(e){return h(Ue,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return X(L(gu(function(l){return l.ec}(pu(o))),gu(function(l){return l.f1}(pu(o)))))}else return n;else return n}),J,e)},uh=function(e){var r=function(o){if(o.$===4){var l=o.b;return X("@import url('"+(l+"');"))}else return J},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a(Zr,r,l));return c},t=a(ee,ev,e),i=function(o){var l=o.a,c=o.b,u=ch(c);if(u.$===1)return a(ce,"",a(ee,oh(l),t));var f=u.a;return a(ce,"",a(ee,a(ih,l,f),t))};return Y(a(ce,`
`,a(ee,n,e)),a(ce,`
`,a(ee,i,e)))},$h=function(e){if(e.$===1){var r=e.a,n=e.b;return X(L(r,n))}else return J},hu=v(function(e,r){var n=v(function(l,c){return{cB:Y(c.cB,h(Ol,e,l,J)),bT:function(){var u=$h(l);if(u.$===1)return c.bT;var f=u.a;return a(z,f,c.bT)}()}}),t=h(Ue,n,{cB:D,bT:D},r),i=t.bT,o=t.cB;return Y(uh(i),pa(o))}),Iv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([_n(a(hu,e,r))]))]));case 1:return h(Hr,"div",D,$([h(Hr,"style",D,$([_n(a(hu,e,r))]))]));default:return h(Hr,"elm-ui-rules",$([a(kv,"rules",a(th,e,r))]),D)}}),bu=re(function(e,r,n,t){var i=a(Iv,r,h(Ue,Mv,L(zv,Tv(r.gx)),n).b);return e?a(z,L("static-stylesheet",Fv(r)),a(z,L("dynamic-stylesheet",i),t)):a(z,L("dynamic-stylesheet",i),t)}),_u=re(function(e,r,n,t){var i=a(Iv,r,h(Ue,Mv,L(zv,Tv(r.gx)),n).b);return e?a(z,Fv(r),a(z,i,t)):a(z,i,t)}),Zo=_e(45),mt=_e(37),Ev=function(e){return Sd(S$(e))},vh=mn("p"),ir=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return he(o&t,o)}else{var i=e.a;return he(i&n,i)}}),xu=mn("s"),wu=mn("u"),Qo=_e(44),st=_e(39),Gt=Tr(function(e,r,n,t,i,o){var l=v(function(u,f){if(t.$===1){var m=t.a;return h(Ev,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return P(bu,!1,b,s,m);default:var b=i.a,s=i.b;return P(bu,!0,b,s,m)}}())}else{var p=t.a;return a(function(){switch(u){case"div":return Ca;case"p":return vh;default:return Hr(u)}}(),f,function(){switch(i.$){case 0:return p;case 2:var b=i.a,s=i.b;return P(_u,!1,b,s,p);default:var b=i.a,s=i.b;return P(_u,!0,b,s,p)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,f=r.b;return h(Hr,u,n,$([a(l,f,$([Cr(d.fK+(" "+d.hL))]))]))}}();switch(o){case 0:return a(ir,st,e)&&!a(ir,Qo,e)?c:a(ir,Cv,e)?a(wu,$([Cr(a(ce," ",$([d.fK,d.hL,d.b8,d.ax,d.fG])))]),$([c])):a(ir,Lv,e)?a(xu,$([Cr(a(ce," ",$([d.fK,d.hL,d.b8,d.ax,d.fE])))]),$([c])):c;case 1:return a(ir,mt,e)&&!a(ir,Zo,e)?c:a(ir,Pv,e)?a(xu,$([Cr(a(ce," ",$([d.fK,d.hL,d.b8,d.fF])))]),$([c])):a(ir,Sv,e)?a(wu,$([Cr(a(ce," ",$([d.fK,d.hL,d.b8,d.fD])))]),$([c])):c;default:return c}}),pn=function(e){return!e.b},ql=_n,fh=d.fK+(" "+(d.Y+(" "+(d.dO+(" "+d.c_))))),dt=function(e){return a(Ca,$([Cr(fh)]),$([ql(e)]))},mh=d.fK+(" "+(d.Y+(" "+(d.dP+(" "+d.c$))))),yu=function(e){return a(Ca,$([Cr(mh)]),$([ql(e)]))},sh=M(function(e,r,n){var t=v(function(x,_){var S=x.a,C=x.b,w=_.a,T=_.b;switch(C.$){case 0:var H=C.a;return he(e,Ht),L(a(z,L(S,H(e)),w),T);case 1:var Z=C.a;return he(e,Ht),L(a(z,L(S,a(Z.gL,Vn,e)),w),pn(T)?Z.hV:Y(Z.hV,T));case 2:var ae=C.a;return L(a(z,L(S,he(e,xr)?yu(ae):dt(ae)),w),T);default:return L(w,T)}}),i=v(function(x,_){var S=_.a,C=_.b;switch(x.$){case 0:var w=x.a;return he(e,Ht),L(a(z,w(e),S),C);case 1:var T=x.a;return he(e,Ht),L(a(z,a(T.gL,Vn,e),S),pn(C)?T.hV:Y(T.hV,C));case 2:var H=x.a;return L(a(z,he(e,xr)?yu(H):dt(H),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,l=h(Ze,t,L(D,D),o),c=l.a,u=l.b,f=pn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Xo({gL:P(Gt,n.aR,n.aT,n.aJ,cu(h($u,"nearby-element-pls",c,n.aM))),hV:m})}else return vt(F(Gt,n.aR,n.aT,n.aJ,cu(h($u,"nearby-element-pls",c,n.aM)),Vn))}else{var p=r.a,b=h(Ze,i,L(D,D),p),s=b.a,u=b.b,f=pn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Xo({gL:P(Gt,n.aR,n.aT,n.aJ,er(a(uu,s,n.aM))),hV:m})}else return vt(F(Gt,n.aR,n.aT,n.aJ,er(a(uu,s,n.aM)),Vn))}}),$r=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),dh=function(e){return{$:10,a:e}},wi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(wi,n,o|t)}else{var i=e.a;return a(wi,i|n,t)}}),Su=function(e){return{$:1,a:e}},Wt=v(function(e,r){return{$:3,a:e,b:r}}),Cu=function(e){return{$:2,a:e}},ph=v(function(e,r){return a(Ca,$([Cr(function(){switch(e){case 0:return a(ce," ",$([d.be,d.hL,d.fy]));case 1:return a(ce," ",$([d.be,d.hL,d.fR]));case 2:return a(ce," ",$([d.be,d.hL,d.hh]));case 3:return a(ce," ",$([d.be,d.hL,d.hg]));case 4:return a(ce," ",$([d.be,d.hL,d.gP]));default:return a(ce," ",$([d.be,d.hL,d.fQ]))}}())]),$([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return dt(n);case 0:var t=r.a;return t(xr);default:var i=r.a;return a(i.gL,Vn,xr)}}()]))}),gh=M(function(e,r,n){var t=a(ph,e,r);switch(n.$){case 0:return e===5?Su($([t])):Cu($([t]));case 1:var i=n.a;return e===5?Su(a(z,t,i)):a(Wt,i,$([t]));case 2:var o=n.a;return e===5?a(Wt,$([t]),o):Cu(a(z,t,o));default:var i=n.a,o=n.b;return e===5?a(Wt,a(z,t,i),o):a(Wt,i,a(z,t,o))}}),Lu=v(function(e,r){return{$:2,a:e,b:r}}),gn=function(e){return{$:1,a:e}},En=v(function(e,r){switch(r.$){case 0:return gn(e);case 1:var n=r.a;return a(Lu,n,e);default:var t=r.a,i=r.b;return a(Lu,t,i)}}),hh=function(e){switch(e){case 0:return d.cM+(" "+d.dX);case 2:return d.cM+(" "+d.dY);default:return d.cM+(" "+d.fB)}},bh=function(e){switch(e){case 0:return d.cN+(" "+d.fH);case 2:return d.cN+(" "+d.fA);default:return d.cN+(" "+d.fC)}},Oa=v(function(e,r){return a(Vr,Md(e),C$(r))}),jr=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),dn=function(e){return{$:1,a:e}},_h=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return dn(G(u,0,0));case 1:var f=r.a;return dn(G(0,f,0));case 2:var m=r.a;return dn(G(0,0,m));case 3:var n=r.a;return dn(n);case 4:var n=r.a,s=r.b;return P(jr,G(0,0,0),G(1,1,1),n,s);default:var n=r.a;return P(jr,G(0,0,0),n,G(0,0,1),0)}case 1:var c=e.a,u=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return dn(G(t,f,m));case 1:var i=r.a;return dn(G(u,i,m));case 2:var o=r.a;return dn(G(u,f,o));case 3:var n=r.a;return dn(n);case 4:var n=r.a,s=r.b;return P(jr,c,G(1,1,1),n,s);default:var l=r.a;return P(jr,c,l,G(0,0,1),0)}default:var c=e.a,u=c.a,f=c.b,m=c.c,p=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return P(jr,G(t,f,m),p,b,s);case 1:var i=r.a;return P(jr,G(u,i,m),p,b,s);case 2:var o=r.a;return P(jr,G(u,f,o),p,b,s);case 3:var x=r.a;return P(jr,x,p,b,s);case 4:var _=r.a,S=r.b;return P(jr,c,p,_,S);default:var C=r.a;return P(jr,c,C,b,s)}}}),ra=_e(7),Bv=_e(36),Pu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(wi,n|i,t|o)}),an=a(wi,0,0),el=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return G(an,d.ee+(" "+t),$([h($r,t,"height",n+"px")]));case 1:return G(a(ge,Bv,an),d.c_,D);case 2:var i=e.a;return i===1?G(a(ge,mt,an),d.c$,D):G(a(ge,mt,an),d.ef+(" height-fill-"+k(i)),$([h($r,d.fK+("."+(d.aw+(" > "+y("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h($r,f,"min-height",k(o)+"px !important"),l=el(u),b=l.a,s=l.b,x=l.c;return G(a(ge,Zo,b),f+(" "+s),a(z,m,x));default:var c=e.a,u=e.b,f="max-height-"+k(c),m=h($r,f,"max-height",k(c)+"px"),p=el(u),b=p.a,s=p.b,x=p.c;return G(a(ge,Zo,b),f+(" "+s),a(z,m,x))}},Vv=_e(38),rl=function(e){switch(e.$){case 0:var r=e.a;return G(an,d.fu+(" width-px-"+k(r)),$([h($r,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return G(a(ge,Vv,an),d.dO,D);case 2:var n=e.a;return n===1?G(a(ge,st,an),d.dP,D):G(a(ge,st,an),d.fv+(" width-fill-"+k(n)),$([h($r,d.fK+("."+(d.af+(" > "+y("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),u=h($r,c,"min-width",k(t)+"px"),i=rl(l),m=i.a,p=i.b,b=i.c;return G(a(ge,Qo,m),c+(" "+p),a(z,u,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),u=h($r,c,"max-width",k(o)+"px"),f=rl(l),m=f.a,p=f.b,b=f.c;return G(a(ge,Qo,m),c+(" "+p),a(z,u,b))}},Bi=_e(27),xh=v(function(e,r){if(he(e,Bi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return he(i,l)&&he(i,o)&&he(i,c)&&i>=0&&i<=24;default:return!1}}),na=_e(6),zu=_e(30),Mu=_e(29),wh=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,p=c.b;switch(m.$){case 0:var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 3:var _=m.a,b=m.b;if(a(ir,_,n)){var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=b+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}case 1:var s=m.a,I=e,E=r,B=n,V=t,R=i,j=a(z,s,o),U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 4:var _=m.a,x=m.b;if(a(ir,_,n)){var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else if(a(xh,_,x)){var I=ft(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=ft(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=a(z,x,i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}case 10:var _=m.a,S=m.b,I=e,E=r,B=a(ge,_,n),V=a(_h,t,S),R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 7:var C=m.a;if(a(ir,na,n)){var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else switch(C.$){case 0:var w=C.a,I=d.fu+(" width-px-"+k(w))+(" "+e),E=r,B=a(ge,na,n),V=t,R=a(z,h($r,"width-px-"+k(w),"width",k(w)+"px"),i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 1:var I=e+(" "+d.dO),E=r,B=a(ge,Vv,a(ge,na,n)),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 2:var T=C.a;if(T===1){var I=e+(" "+d.dP),E=r,B=a(ge,st,a(ge,na,n)),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=e+(" "+(d.fv+(" width-fill-"+k(T)))),E=r,B=a(ge,st,a(ge,na,n)),V=t,R=a(z,h($r,d.fK+("."+(d.af+(" > "+y("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}default:var H=rl(C),Z=H.a,ae=H.b,Te=H.c,I=e+(" "+ae),E=r,B=a(Pu,Z,a(ge,na,n)),V=t,R=Y(Te,i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}case 8:var te=m.a;if(a(ir,ra,n)){var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else switch(te.$){case 0:var w=te.a,ie=k(w)+"px",ne="height-px-"+ie,I=d.ee+(" "+(ne+(" "+e))),E=r,B=a(ge,ra,n),V=t,R=a(z,h($r,ne,"height ",ie),i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 1:var I=d.c_+(" "+e),E=r,B=a(ge,Bv,a(ge,ra,n)),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 2:var T=te.a;if(T===1){var I=d.c$+(" "+e),E=r,B=a(ge,mt,a(ge,ra,n)),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=e+(" "+(d.ef+(" height-fill-"+k(T)))),E=r,B=a(ge,mt,a(ge,ra,n)),V=t,R=a(z,h($r,d.fK+("."+(d.aw+(" > "+y("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}default:var q=el(te),Z=q.a,ae=q.b,Te=q.c,I=e+(" "+ae),E=r,B=a(Pu,Z,a(ge,ra,n)),V=t,R=Y(Te,i),j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}case 2:var de=m.a;switch(de.$){case 0:var I=e,E=a(En,"main",r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 1:var I=e,E=a(En,"nav",r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 2:var I=e,E=a(En,"footer",r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 3:var I=e,E=a(En,"aside",r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,E=a(En,"h1",r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else if(pe<7){var I=e,E=a(En,"h"+k(pe),r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=e,E=a(En,"h6",r),B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}case 9:var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 8:var I=e,E=r,B=n,V=t,R=i,j=a(z,a(Oa,"role","button"),o),U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 5:var Me=de.a,I=e,E=r,B=n,V=t,R=i,j=a(z,a(Oa,"aria-label",Me),o),U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 6:var I=e,E=r,B=n,V=t,R=i,j=a(z,a(Oa,"aria-live","polite"),o),U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;default:var I=e,E=r,B=n,V=t,R=i,j=a(z,a(Oa,"aria-live","assertive"),o),U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var ro=me.a;return Y(i,ro.hV)}}(),I=e,E=r,B=n,V=t,R=Te,j=o,U=h(gh,Se,me,l),N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e;case 6:var Ne=m.a;if(a(ir,zu,n)){var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=hh(Ne)+(" "+e),E=r,B=function(se){switch(Ne){case 1:return a(ge,Lv,se);case 2:return a(ge,Cv,se);default:return se}}(a(ge,zu,n)),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}default:var Vt=m.a;if(a(ir,Mu,n)){var I=e,E=r,B=n,V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}else{var I=bh(Vt)+(" "+e),E=r,B=function(se){switch(Vt){case 1:return a(ge,Pv,se);case 2:return a(ge,Sv,se);default:return se}}(a(ge,Mu,n)),V=t,R=i,j=o,U=l,N=p;e=I,r=E,n=B,t=V,i=R,o=j,l=U,c=N;continue e}}}else{var u=Gl(t);if(u.$===1)return{aJ:a(z,Cr(e),o),aM:l,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(z,Cr(e+(" "+f)),o),aM:l,aR:n,aT:r,hV:a(z,dh(t),i)}}}),yh={$:0},Sh=yh,cr=re(function(e,r,n,t){return h(sh,e,t,xt(wh,M0(e),r,an,Sh,D,D,w0,mr(n)))}),tn=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ch={fO:J,fW:J,hH:X({a2:0,b6:P(tn,155/255,203/255,1,1),eV:L(0,0),bi:3})},Lh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gK;return l.$===1?Re(i,{gK:X(o)}):i;case 1:var c=t.a,u=i.gx;return u.$===1?Re(i,{gx:X(c)}):i;default:var f=t.a,m=i.eS;return m.$===1?Re(i,{eS:X(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Ch;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(Ze,r,{gx:J,gK:J,eS:J},e))},Ph=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(xr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),xr);case 2:var i=r.a;return dt(i);default:return dt("")}}),zh=M(function(e,r,n){var t=Lh(e),i=function(){var o=t.eS;return o===1?yv(t):_0(t)}();return a(Ph,i,P(cr,xr,Kn,r,er($([n]))))}),pt=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Rv=v(function(e,r){return{$:1,a:e,b:r}}),jv=function(e){return{$:2,a:e}},Mh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),so=function(e){return{$:3,a:e}},Uv=_e(8),Nv=_e(14),Hv=_e(5),Gv=_e(4),La=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ve(r)+("-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))))},ni=As,po=Fs,Wv=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",po(ni(n)));case 4:var n=e.a;return e.b,a(ce,"-",po(ni(n)));default:var n=e.a.hc;return a(ce,"-",po(ni(n)))}}())}),Th=function(){var e=$([so("Open Sans"),so("Helvetica"),so("Verdana"),Mh]);return $([a(Ce,Uv,h(pt,"bg-"+La(P(tn,1,1,1,0)),"background-color",P(tn,1,1,1,0))),a(Ce,Nv,h(pt,"fc-"+La(P(tn,0,0,0,1)),"color",P(tn,0,0,0,1))),a(Ce,Gv,jv(20)),a(Ce,Hv,a(Rv,h(Ue,Wv,"font-",e),e))])}(),kh=M(function(e,r,n){var t=e.hl;return h(zh,t,a(z,br(a(ce," ",$([d.hA,d.fK,d.hL]))),Y(Th,r)),n)}),Ov={$:3},qv=function(e){return{$:2,a:e}},nl=Ld,Jv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Xo({gL:v(function(o,l){return a(nl,e,a(n.gL,o,l))}),hV:n.hV});case 0:var t=r.a;return vt(a(Pt,nl(e),t));case 2:var i=r.a;return qv(i);default:return Ov}}),Jl=Jv,Dh=nl,Fh=function(e){return{$:0,a:e}},De=Fh,Ah=zd,hr=Ah,Yv={$:1},Vi=function(e){return{$:5,a:e}},Xv=Vi(0),Rr=M(function(e,r,n){return P(tn,e/255,r/255,n/255,1)}),Kv=h(Rr,0,0,0),Ih=Vr("d"),Eh=Vr("fill"),Bh=Vr("height"),Zv=w$("http://www.w3.org/2000/svg"),Vh=Zv("path"),Rh=Zv("svg"),jh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Uh=function(e){var r=jh(e);return"rgba("+(k(Be(r.hu*255))+(","+k(Be(r.gA*255))+(","+k(Be(r.fS*255))+(","+ve(r.fI)+")"))))},Nh=Vr("viewBox"),Hh=Vr("width"),fa=M(function(e,r,n){return a(Rh,$([Nh("0 0 100 100"),Hh(k(e)),Bh(k(e))]),$([a(Vh,$([Ih(n),Eh(Uh(r))]),D)]))}),Gh={$:1},dr=Gh,Qv=function(e){return{$:7,a:e}},le=Qv,Le=v(function(e,r){return P(cr,xr,Kn,a(z,le(dr),a(z,ye(dr),e)),er($([r])))}),ef=function(e){return{$:2,a:e}},be=ef(1),jn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ha={c3:260,bE:54},cn=function(e){return a(Ce,Uv,h(pt,"bg-"+La(e),"background-color",e))},Wh=_e(28),xn=function(e){return a(Ce,Wh,h(pt,"bc-"+La(e),"border-color",e))},ai=1,zr=v(function(e,r){return P(cr,ai,Kn,a(z,br(d.gc+(" "+d.bt)),a(z,ye(dr),a(z,le(dr),e))),er(r))}),Oh=h(Rr,83,83,83),rf=re(function(e,r,n,t){return P(tn,e/255,r/255,n/255,t)}),Ri=P(rf,56,56,56,.25),qe=Ov,gt=Je(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),ht=_e(2),Un=function(e){var r=e;return a(Ce,ht,F(gt,"p-"+k(e),r,r,r,r))},nf=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),af=_e(3),tf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),wn=function(e){return a(Ce,af,h(nf,a(tf,e,e),e,e))},qh=P(rf,0,0,0,0),Jh=function(e){return{$:4,a:e}},al=0,Mn=v(function(e,r){return P(cr,al,Kn,a(z,br(d.bt+(" "+d.ax)),a(z,le(dr),a(z,ye(dr),e))),er(r))}),Yh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(yv,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return bi(_n(t));default:return bi(_n(""))}},Xh=v(function(e,r){return Yh(e(r))}),Kh=Pd,Zh=v(function(e,r){return vt(h(Kh,Xh,e,r))}),yn=function(e){return a(Ce,Nv,h(pt,"fc-"+La(e),"color",e))},Yl=h(Rr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),of=_e(13),Qh=a(Tn,of,d.h7),e3=_e(20),lf=a(Tn,e3,d.hF),Zn=function(e){return a(Ce,Gv,jv(e))},Xl=a(Tn,of,d.fV),tl=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return F(fe,n,t,a(e,t,i),a(tl,e,o),a(tl,e,l))}),cf=v(function(e,r){if(he(e,r)){var n=e;return a(Ce,ht,F(gt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,ht,F(gt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Sn=function(e){return qv(e)},r3=function(e){return h(Fl,M(function(r,n,t){return a(z,n,t)}),D,e)},n3=v(function(e,r){return{$:3,a:e,b:r}}),a3=v(function(e,r){return{$:2,a:e,b:r}}),t3=v(function(e,r){return{$:0,a:e,b:r}}),i3=v(function(e,r){return{$:1,a:e,b:r}}),ji=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Kl=P(ji,0/255,0/255,0/255,1),Ui=function(e){return{$:6,a:e}},o3=Ui(0),Ni=function(e){return{$:2,a:e}},l3={$:6},uf=Ni(l3),$f=M(function(e,r,n){if(r.$===1)return r.a,P(cr,ai,gn("label"),e,er($([n])));var t=r.a,i=r.b,o=r.c,l=P(cr,xr,Kn,i,er($([o])));switch(t){case 2:return P(cr,ai,gn("label"),a(z,br(d.ci),e),er($([l,n])));case 3:return P(cr,ai,gn("label"),a(z,br(d.ci),e),er($([n,l])));case 0:return P(cr,al,gn("label"),a(z,br(d.ci),e),er($([n,l])));default:return P(cr,al,gn("label"),a(z,br(d.ci),e),er($([l,n])))}}),il=Oa,vn=Vi(1),vf="Enter",c3=function(e){return{$:5,a:e}},ff=function(e){if(e.$===1){var r=e.a;return Ni(c3(r))}else return On},mf=function(e){return e.$===1},u3=function(e){return{$:0,a:e}},Zl=y$,$3=v(function(e,r){return a(Zl,e,u3(r))}),sf=function(e){return a($3,"click",lr(e))},v3=Ws,f3=function(e){return{$:2,a:e}},m3=v(function(e,r){return a(Zl,e,f3(r))}),df=function(e){var r=function(t){var i=e(t);if(i.$===1)return v3("No key matched");var o=i.a;return lr(o)},n=a(Q,r,a(K,"key",Sa));return Ie(a(m3,"keydown",a(si,function(t){return L(t,!0)},n)))},s3=_e(21),Nn=a(Tn,s3,d.gf),pf=" ",gf=function(e){return a(Vr,"tabIndex",k(e))},d3=a(Pt,Ie,gf),p3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bI,l=Y($([mf(n)?On:wn(6),Ie(sf(o(!i))),uf,df(function(c){return he(c,vf)||he(c,pf)?X(o(!i)):J}),d3(0),Nn,o3,le(be)]),e);return h($f,a(z,Ie(a(il,"role","checkbox")),a(z,Ie(a(il,"aria-checked",i?"true":"false")),a(z,ff(n),l))),n,P(cr,xr,Kn,$([vn,ye(be),le(dr)]),er($([t(i)]))))}),g3=M(function(e,r,n){return Y(a($t,e-Rn(n),Ei(r)),n)}),yi=fs,hf=function(e){var r=function(n){return n<10?k(n):Ei(mv(87+n))};return e<16?r(e):Y(hf(e/16|0),r(a(yi,16,e)))},h3=a(Xe,hf,a(g3,2,"0")),Ql=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},b3=function(e){var r=Ql(e),n=r.hu,t=r.gA,i=r.fS;return a(ce,"",a(z,"#",a(ee,a(Xe,Be,h3),$([n*255,t*255,i*255]))))},ec=_e(12),bf=a(Tn,ec,d.h$),ol=Ui(1),Yr=ms,qa=function(e){return e*Yr/180},_3=function(e){return{$:1,a:e}},rc=v(function(e,r){return{$:10,a:e,b:r}}),x3=_e(26),w3=function(e){return a(rc,x3,_3(-e))},ma=M(function(e,r,n){return P(tn,e,r,n,1)}),y3=tn,S3=v(function(e,r){return{$:4,a:e,b:r}}),C3=_e(24),L3=function(e){return a(rc,C3,a(S3,G(0,0,1),e))},P3=_e(17),Hn=function(e){return a(Ce,P3,h($r,"br-"+k(e),"border-radius",k(e)+"px"))},z3=function(e){return pa($([e.ej?"box-inset":"box-",Ve(e.eV.a)+"px",Ve(e.eV.b)+"px",Ve(e.a2)+"px",Ve(e.bi)+"px",La(e.b6)]))},M3=_e(19),T3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,M3,h($r,z3(r),"box-shadow",Ko(r)))},Tu=v(function(e,r){return{$:12,a:e,b:r}}),ku=_e(0),k3=function(e){return e?a(Ce,ku,a(Tu,"transparent",1)):a(Ce,ku,a(Tu,"visible",0))},go=h(ma,1,1,1),nc=Je(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Hi=function(e){return a(Ce,Bi,F(nc,"b-"+k(e),e,e,e,e))},D3=v(function(e,r){return a(Ce,Bi,F(nc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),zt=function(e){var r=e.b2,n=e.cH,t=e.g4,i=e.hx;return he(n,r)&&he(t,i)?he(n,i)?Hi(n):a(D3,t,n):a(Ce,Bi,F(nc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},F3=function(e){return a(Le,$([br("focusable"),le(De(14)),ye(De(14)),yn(go),vn,Zn(9),bf,Hn(3),xn(e?h(ma,59/255,153/255,252/255):h(ma,211/255,211/255,211/255)),T3({a2:1,b6:e?P(y3,238/255,238/255,238/255,0):h(ma,238/255,238/255,238/255),eV:L(0,0),bi:1}),cn(e?h(ma,59/255,153/255,252/255):go),Hi(e?0:1),Yo(a(Le,$([xn(go),ye(De(6)),le(De(9)),L3(qa(-45)),ol,vn,w3(1),k3(!e),zt({b2:2,g4:2,hx:0,cH:0})]),qe))]),qe)},A3=kr("htmlFor"),I3=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Si=v(function(e,r){if(r.$){var t=r.a;return nr(t)}else{var n=r.a;return e(n)}}),_f=re(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),E3=rp,B3=Us,V3=v(function(e,r){if(r.$)return nr(e);var n=r.a;return Ge(n)}),R3=ep,j3=function(e){return a(R3,{f2:!1,hb:!1},e)},Mt=function(e){if(e.b){var r=e.a;return e.b,X(r)}else return J},U3=v(function(e,r){if(r.$){var t=r.a;return nr(t)}else{var n=r.a;return Ge(e(n))}}),N3=function(e){return{$:2,a:e}},H3=function(e){return{$:0,a:e}},G3=function(e){return{$:1,a:e}},ho=v(function(e,r){return Jr(r)-Jr(e)}),bo=M(function(e,r,n){var t=Jr(n);return xe(Jr(e),t)<1&&xe(t,Jr(r))<1}),W3=v(function(e,r){var n=function(i){return xe(i,e)<0?Ge(i):nr(G3(r))},t=h(bo,"0","9",r)?Ge(a(ho,"0",r)):h(bo,"a","z",r)?Ge(10+a(ho,"a",r)):h(bo,"A","Z",r)?Ge(10+a(ho,"A",r)):nr(H3(r));return a(Si,n,t)}),xf=v(function(e,r){var n=ka(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(Si,function(l){return a(Si,function(c){return Ge(l+c*e)},a(xf,e,o))},a(W3,e,i))}),O3=v(function(e,r){return 2<=e&&e<=36?a(xf,e,Oo(r)):nr(N3(e))}),q3=O3(16),J3=M(function(e,r,n){return P(ji,e,r,n,1)}),Y3=re(function(e,r,n,t){return P(ji,e,r,n,t)}),Tt=vs,X3=v(function(e,r){var n=a(Tt,10,e);return Be(r*n)/n}),K3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=fv(n);if(t.b&&!t.b.b){var i=t.a;return B3($([i,i]))}else return n};return a(Xe,ni,a(Xe,function(n){return a(je,function(t){return h(E3,1,t,n)},j3(e))},a(Xe,I3(Mt),a(Xe,je(function(n){return n.hW}),a(Xe,je(Zr(Br)),a(Xe,V3("Parsing hex regex failed"),Si(function(n){var t=a(ee,a(Xe,r,a(Xe,q3,U3(Ga))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,f=c.b,m=f.a.a;return Ge(P(Y3,i/255,l/255,u/255,a(X3,2,m/255)))}else break e;else{var i=t.a.a,p=t.b,l=p.a.a,b=p.b,u=b.a.a;return Ge(h(J3,i/255,l/255,u/255))}else break e;return nr("Parsing ints from hex failed")})))))))}(),Z3=kr("id"),Q3=mn("input"),eb=mn("label"),wf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),rb=wf(0),nb=kr("name"),ab=function(e){return L(e,!0)},tb=function(e){return{$:1,a:e}},ib=v(function(e,r){return a(Zl,e,tb(r))}),ob=v(function(e,r){return h(Ze,K,r,e)}),lb=a(ob,$(["target","value"]),Sa),yf=function(e){return a(ib,"input",a(si,ab,a(si,e,lb)))},cb=a(Tn,ec,d.h4),Sf=a(Tn,ec,d.h8),ac=function(e){return a(wv,5,e)},tc=function(e){return a(Ce,Hv,a(Rv,h(Ue,Wv,"ff-",e),e))},ub=h(Rr,195,195,195),Cf=h(Rr,69,69,69),$b=wf(2),vb={$:2},ic=vb,fb=_e(32),mb=_e(31),Du=function(e){return h(Ze,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},sb=v(function(e,r){return a(Fe,r,h(Ze,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return X(L(i,l))}else return J;else{var i=t.a;return X(i)}}),J,e))}),Fu=function(e){return h(Ze,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},db=_e(33),pb=kr("max"),gb=kr("min"),hb=v(function(e,r){return a(Ce,af,h(nf,a(tf,e,r),e,r))}),bb=function(e){return a(kr,"step",e)},Lf=kr("type"),Pf=kr("value"),Pa=ef,_b=Dd,zf=v(function(e,r){switch(r.$){case 0:return On;case 2:var n=r.a;return Ni(n);case 6:var t=r.a;return Ui(t);case 5:var i=r.a;return Vi(i);case 7:var t=r.a;return Qv(t);case 8:var t=r.a;return _v(t);case 3:var t=r.a,i=r.b;return a(Tn,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,u=r.b;return a(xv,c,a(Jv,e,u));case 1:var f=r.a;return Ie(a(_b,e,f));default:var m=r.a,p=r.b;return a(rc,m,p)}}),xb=M(function(e,r,n){return a(Mn,$([le(be),ye(a(Fe,be,n)),vn]),$([a(Le,$([le(Pa(Be(e*1e4)))]),qe),a(Le,a(z,vn,a(ee,zf(St),r)),qe),a(Le,$([le(Pa(Be(we(1-e)*1e4)))]),qe)]))}),wb=M(function(e,r,n){return a(zr,$([ye(be),le(a(Fe,be,n)),ol]),$([a(Le,$([ye(Pa(Be(we(1-e)*1e4)))]),qe),a(Le,a(z,ol,a(ee,zf(St),r)),qe),a(Le,$([ye(Pa(Be(e*1e4)))]),qe)]))}),Mf=v(function(e,r){var n=Fu(e),t=Du(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var w=C.a.a.a,T=C.b.a.a;return xe(T,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),l=r.ic,c=l,u=Du(c),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Fu(c),p=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(p+("-"+f)),s=$([a(ue,"width",p),a(ue,"height",f)]),x=a(sb,e,L(5,5)),_=x.a,S=x.b;return h($f,$([mf(r.em)?On:a(hb,_,S),uf,le(function(){if(n.$===1)return be;if(n.a.$){var C=n.a;return C}else return dr}()),ye(function(){if(t.$===1)return dr;if(t.a.$){var C=t.a;return C}else return dr}())]),r.em,a(Mn,$([le(a(Fe,be,n)),ye(a(Fe,De(20),t))]),$([P(cr,xr,gn("input"),$([ff(r.em),a(Ce,fb,a(et,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,db,a(et,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,mb,a(et,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Cr(b+" ui-slide-bar focusable-parent")),Ie(yf(function(C){var w=vv(C);if(w.$===1)return r.bI(0);var T=w.a;return r.bI(T)})),Ie(Lf("range")),Ie(bb(function(){var C=r.cE;if(C.$===1)return"any";var w=C.a;return ve(w)}())),Ie(gb(ve(r.cr))),Ie(pb(ve(r.cq))),Ie(Pf(ve(r.cI))),i?Ie(a(il,"orient","vertical")):On,le(i?a(Fe,De(20),t):a(Fe,be,n)),ye(i?a(Fe,be,n):a(Fe,De(20),t))]),er(D)),a(Le,a(z,le(a(Fe,be,n)),a(z,ye(a(Fe,De(20),t)),Y(e,$([ac(i?h(wb,o,a(z,br("focusable-thumb"),c),n):h(xb,o,a(z,br("focusable-thumb"),c),t))])))),qe)])))}),yb=h(ma,.5,.5,.5),Tf=Br,Au=function(e){var r=e.c2,n=e.cI,t=e.cr,i=e.cq,o=e.cE,l=e.bI;return a(Le,$([le(be)]),a(Mf,$([wn(2),ac(a(Le,$([le(be),ye(De(16)),vn,cn(Cf),Hn(4)]),qe))]),{em:a($b,D,a(Mn,$([le(be)]),$([a(Le,$([cb]),Sn(r)),a(Le,$([le(be),Sf,tc($([ic]))]),Sn(ve(n)))]))),cq:i,cr:t,bI:l,cE:X(o),ic:Tf($([le(De(12)),ye(De(12)),Hn(4),Hi(0),xn(yb),cn(ub)])),cI:n}))},Sb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Cb=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(p3,D,{f6:l,gM:F3,em:a(rb,D,Sn(e)),bI:n3(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Au({c2:e,cq:o,cr:i,bI:t3(e),cE:.001*(o-i),cI:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Au({c2:e,cq:o,cr:i,bI:a(Xe,Be,i3(e)),cE:1,cI:l});default:var l=r.a;return a(Le,$([le(be)]),hn(a(Ca,D,$([a(Ca,$([a(hr,"margin-bottom","6px")]),$([a(eb,$([A3(e)]),$([ql(e)]))])),a(Q3,$([Lf("color"),a(hr,"width","100%"),a(hr,"height","26px"),a(hr,"padding","0px"),Z3(e),nb(e),yf(function(c){return a(a3,e,a(Sb,Kl,K3(c)))}),Pf(b3(l))]),D)]))))}}),ll=h(Rr,255,255,255),Lb=function(e){return a(zr,$([le(be),wn(8),a(cf,0,14),zt({b2:1,g4:0,hx:0,cH:0}),xn(Ri)]),$([a(Le,$([Zn(16),Xl,yn(ll)]),Sn(e.hc)),a(zr,$([le(be),wn(6)]),r3(a(tl,Cb,e.aN)))]))},Pb=function(e){return a(zr,$([le(be),ye(be),yn(Yl),Zn(12),Qh,lf]),a(ee,Lb,e))},zb=Zh(Pb),Mb=function(e){return a(zr,$([le(be),ye(be)]),$([a(Mn,$([wn(14),le(be)]),D),a(Jl,Jh,zb(Xn(e).gb))]))},Tb=function(e){return{$:6,a:e}},kb=re(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Db=function(e){var r=e.cH,n=e.hx,t=e.b2,i=e.g4;if(he(r,n)&&he(r,t)&&he(r,i)){var o=r;return a(Ce,ht,F(gt,"p-"+k(r),o,o,o,o))}else return a(Ce,ht,F(gt,P(kb,r,n,t,i),r,n,t,i))},Fb=function(e){return{$:0,a:e}},Ab=function(e){return{$:1,a:e}},Ib=Ab,Eb=function(e){var r=e.b.X;return Wn(r)},Ci=h(Rr,255,60,0),Bb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Wn(r)+1+Wn(n)},Vb=function(e){var r=L(Eb(e),Bb(e)-1),n=r.a,t=r.b;return a(Le,$([le(be),vn]),a(Mf,$([ac(a(Mn,$([le(be),ye(De(4)),vn,cn(Cf),Hn(2)]),$([a(Le,$([le(Pa(n)),ye(be),cn(Ci),Hn(2)]),qe),a(Le,$([le(Pa(t-n))]),qe)])))]),{em:Ib(""),cq:t,cr:0,bI:a(Xe,Be,Fb),cE:X(1),ic:Tf($([le(De(12)),ye(De(12)),Hn(6),cn(Ci)])),cI:n}))},Rb=Ui(2),ti=h(Rr,220,220,220),jb=function(e){var r=e.a,n=function(){return r.$?$([yn(ti)]):$([yn(Ci)])}();return a(Le,Y(n,$([Zn(14),Rb,Sf,tc($([ic]))])),Sn(a(gv,3,Xn(e).d1)))},Ub=function(e){e.a;var r=e.b.X;return a(je,function(n){return Be(60/(Xn(e).d1-n))},a(je,a(Xe,ev,function(n){return n.d1}),Mt(a(ov,59,r))))},Nb=function(e){var r=Ub(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([Zn(14),yn(Yl),tc($([ic]))]),Sn(k(n)+" FPS"))},Iu={$:1},Hb={$:3},Gb={$:2},Wb={$:8},Ob=h$,qb=v(function(e,r){return a(Ll,e,Ob(r))}),Jb=qb("disabled"),Yb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Xb=function(e){return a(Lt,Yb,e)?On:br("focusable")},Li=a(Pt,Ie,sf),kf=v(function(e,r){var n=r.eW,t=r.em;return P(cr,xr,Kn,a(z,le(dr),a(z,ye(dr),a(z,br(d.ca+(" "+(d.ax+(" "+(d.hG+(" "+d.eU)))))),a(z,Nn,a(z,Xb(e),a(z,Ni(Wb),a(z,Ie(gf(0)),function(){if(n.$===1)return a(z,Ie(Jb(!0)),e);var i=n.a;return a(z,Li(i),a(z,df(function(o){return he(o,vf)||he(o,pf)?X(i):J}),e))}()))))))),er($([t])))}),Eu=v(function(e,r){return a(kf,D,{em:a(Le,$([le(De(36)),Un(3),yn(r),bf,Zn(12),Xl,xn(r),Hi(1),Hn(4)]),Sn("REC")),eW:X(e)})}),Bu=M(function(e,r,n){return a(kf,D,{em:hn(h(fa,20,n,e)),eW:X(r)})}),Kb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Mn,D,$([a(Le,$([le(De(40))]),function(){switch(r.$){case 0:return a(Eu,Iu,Ci);case 1:return a(Eu,Gb,ti);default:return qe}}()),a(Le,$([le(De(28))]),function(){switch(r.$){case 0:return qe;case 1:return pn(n)?qe:h(Bu,jn.hp,Hb,ti);default:return h(Bu,jn.ho,Iu,ti)}}())]))},Zb=function(e){return a(zr,$([le(be)]),$([Vb(e),a(Mn,$([le(be),wn(14),a(cf,0,6),vn]),$([Kb(e),Nb(e),jb(e)]))]))},Qb=function(e){return a(zr,$([le(be),wn(14),Db({b2:20,g4:0,hx:0,cH:0}),zt({b2:1,g4:0,hx:0,cH:0}),xn(Ri)]),$([a(Le,$([Zn(16),Xl,yn(Yl)]),Sn("Time Travel")),a(Jl,Tb,Zb(e))]))},e1=v(function(e,r){return a(zr,$([Xn(r).dC.im>600?cn(Oh):cn(qh),zt({b2:0,g4:0,hx:1,cH:0}),xn(Ri),le(De(ha.c3)),ye(be)]),$([function(){return e?qe:a(zr,$([le(be),ye(be),Un(14),wn(14)]),$([Qb(r),Mb(r)]))}()]))}),r1=function(e){return{$:3,a:e}},Vu=Vi(2),n1=h(Rr,232,78,50),a1=h(Rr,48,48,48),t1=function(e){return a(kr,"href",kd(e))},i1=Vr("rel"),o1=kr("target"),Ru=v(function(e,r){var n=r.fn,t=r.em;return P(cr,xr,gn("a"),a(z,Ie(t1(n)),a(z,Ie(i1("noopener noreferrer")),a(z,Ie(o1("_blank")),a(z,le(dr),a(z,ye(dr),a(z,br(d.ca+(" "+(d.ax+(" "+d.et)))),e)))))),er($([t])))}),Ja=kr("title"),l1=h(Rr,31,161,242),c1=function(e){var r=M(function(o,l,c){var u=he(l,e)?ll:a1;return a(Le,$([nn(Ja(o)),Li(r1(l)),Nn,Un(7)]),hn(h(fa,40,u,c)))}),n=a(zr,$([Xv]),$([h(r,"Configurations",0,jn.hN)])),t=a(zr,D,$([a(Ru,$([nn(Ja("Twitter")),Vu,Nn,Un(7)]),{em:hn(h(fa,40,l1,jn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Ru,$([nn(Ja("Source Code")),Vu,Nn,Un(7)]),{em:hn(h(fa,40,n1,jn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([le(De(ha.bE)),Un(4),Li(Yv),zt({b2:1,g4:0,hx:0,cH:0}),xn(Ri),Nn,nn(Ja("Activate Distraction Free Mode"))]),hn(h(fa,46,ll,jn.fx)));return a(zr,$([le(De(ha.bE)),ye(be),lf,cn(Kv)]),$([i,n,t]))},u1=function(e){var r=a(Le,$([le(De(ha.bE)),Xv,Un(4),Li(Yv),Nn,nn(Ja("Deactivate Distraction Free Mode (A)"))]),hn(h(fa,46,Kv,jn.fx)));return e.bw?r:a(Mn,$([le(De(ha.bE+ha.c3)),ye(be)]),$([c1(e.bp),a(e1,e.bp,e.R)]))},$1=M(function(e,r,n){var t=p0(n.R),i=Xn(n.R);return h(kh,{hl:$([h0({fO:J,fW:J,hH:J})])},$([le(De(ct(i.dC.im))),ye(De(ct(i.dC.gH))),nn(a(hr,"-webkit-font-smoothing","antialiased")),nn(a(hr,"pointer-events","none")),nn(a(hr,"touch-action","none")),nn(a(hr,"user-select","none")),Yo(a(Jl,s0,a(r,i,t))),Yo(u1(n))]),hn(a(Dh,bi(d0),a(e,i,t))))}),v1=Tr(function(e,r,n,t,i,o){var l=v(function(u,f){return L(P(c0,r,o,u,f),lu)}),c=function(u){var f=a(nv,n,u.gY);return L({bp:0,bw:!0,R:a(u0,f,t),dN:0},lu)};return Tg({gS:c,hX:m0,ii:l,ik:a($1,e,i)})}),f1=re(function(e,r,n,t){return ur(v1,e,r,n,t,v(function(i,o){return qe}),M(function(i,o,l){return l}))}),m1=function(e){return{}},s1=v(function(e,r){return L(e,cv(r))}),d1=M(function(e,r,n){return{aN:n,g0:r,hc:e}}),p1=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(da,t,i,n)}),Hl,e)},g1=M(function(e,r,n){return h(d1,e,r,p1(n))}),_o=g1,aa=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a(uv,L(t,i),n))}),h1=re(function(e,r,n,t){var i=G(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,f=c*2-u,m=function(x){var _=x<0?x+1:x>1?x-1:x;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},p=m(o-1/3),b=m(o),s=m(o+1/3);return P(ji,s,b,p,t)}),Df=M(function(e,r,n){return P(h1,e,r,n,1)}),b1=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a($v,L(t,i),n))}),_1=$([h(_o,"Camera",!0,$([h(aa,"camera distance",L(3,60),50),h(aa,"camera azimuth",L(0,2*Yr),0),h(aa,"camera elevation",L(-Yr/2,Yr/2),.5)])),h(_o,"Parameters",!0,$([h(aa,"delay per index",L(0,1),.15),h(b1,"number of spheres",L(10,100),50)])),h(_o,"Colors and light",!0,$([h(aa,"saturation",L(0,1),.5),h(aa,"lighting",L(0,1),.7),a(s1,"background color",h(Df,.85,.32,.45))]))]),x1=v(function(e,r){return r}),w1=v(function(e,r){return a(je,function(n){if(n.$)return 0;var t=n.b;return t},a(Da,e,r.aN))}),y1=v(function(e,r){return a(Fe,0,Mt(a(Zr,w1(e),r)))}),S1=v(function(e,r){return a(y1,e,r.gb)}),ba=S1,qn=function(e){return e},Ya=function(e){return qn(Yr*(e/180))},C1=function(e){return e},un=function(e){return e},cl=function(e){var r=e;return-r},L1=v(function(e,r){var n=e,t=r;return{io:n.is*t.dU-n.dU*t.is,is:n.dU*t.io-n.io*t.dU,dU:n.io*t.is-n.is*t.io}}),Ff=function(e){var r=e;return r.dS},Af=function(e){var r=e;return r.dT},P1=function(e){return a(L1,Ff(e),Af(e))},Qn=function(e){var r=e;return r.dl},Jn=ss,za=ds,ii=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Jn(l),u=za(l),f=t.gm,m=f,p=m.io*u,b=c*p,s=p*p,x=m.is*u,_=c*x,S=p*x,C=x*x,w=1-2*(s+C),T=m.dU*u,H=c*T,Z=2*(S-H),ae=2*(S+H),te=p*T,ie=2*(te+_),ne=2*(te-_),q=x*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+Z*o.is+ie*o.dU,is:ae*o.io+me*o.is+de*o.dU,dU:ne*o.io+pe*o.is+w*o.dU}}),kt=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Jn(l),u=za(l),f=t.dl,m=f,p=o.io-m.io,b=o.is-m.is,s=o.dU-m.dU,x=t.gm,_=x,S=_.io*u,C=c*S,w=S*S,T=_.is*u,H=c*T,Z=S*T,ae=T*T,te=1-2*(w+ae),ie=_.dU*u,ne=c*ie,q=2*(Z-ne),de=2*(Z+ne),pe=S*ie,Me=2*(pe+H),Se=2*(pe-H),me=T*ie,Te=2*(me-C),I=2*(me+C),E=ie*ie,B=1-2*(ae+E),V=1-2*(w+E);return{io:m.io+B*p+q*b+Me*s,is:m.is+de*p+V*b+Te*s,dU:m.dU+Se*p+I*b+te*s}}),Cn=function(e){return e},kn=function(e){var r=e;return r.dS},Dn=function(e){var r=e;return r.dT},Fn=function(e){var r=e;return r.dV},If=M(function(e,r,n){return Cn({dl:h(kt,e,r,Qn(n)),dS:h(ii,e,r,kn(n)),dT:h(ii,e,r,Dn(n)),dV:h(ii,e,r,Fn(n))})}),ju=M(function(e,r,n){return h(If,e(n),r,n)}),oc=function(e){var r=e;return r.gm},Dt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dU:t.dU+n.dU}}),Ef=v(function(e,r){return Cn({dl:a(Dt,e,Qn(r)),dS:kn(r),dT:Dn(r),dV:Fn(r)})}),z1=v(function(e,r){var n=e,t=r;return{io:n*t.io,is:n*t.is,dU:n*t.dU}}),M1=M(function(e,r,n){return a(Ef,a(z1,r,e),n)}),T1=M(function(e,r,n){return h(M1,oc(e(n)),r,n)}),ea=v(function(e,r){return{gm:r,dl:e}}),k1=function(e){var r=e;return a(ea,r.dl,r.dS)},D1=function(e){var r=e;return a(ea,r.dl,r.dT)},F1=function(e){var r=e;return a(ea,r.dl,r.dV)},A1=function(e){var r=Cn({dl:e.ba,dS:Af(e.ed),dT:P1(e.ed),dV:Ff(e.ed)}),n=h(T1,F1,e.cY,h(ju,k1,cl(e.cc),h(ju,D1,e.b$,r)));return n},I1=function(e){return{$:0,a:e}},tr=function(e){var r=e;return we(r)},oi=function(e){var r=e;return .5*r},E1=ps,B1=function(e){var r=e;return E1(r)},V1=function(e){var r=oi(tr(e.fq)),n=B1(r);return{dw:I1(n),dM:e.dM}},Er={io:0,is:0,dU:0},Bf=Br,Gn=function(e){return e},R1=Gn({io:1,is:0,dU:0}),lc=R1,Vf=Gn({io:0,is:0,dU:1}),cc=Vf,j1=Bf({dl:Er,dS:cc,dT:lc}),U1=function(e){var r=e.ba,n=e.b$,t=e.cc,i=e.cY;return V1({fq:Ya(40),dM:A1({b$:qn(n),cY:un(i),cc:qn(t),ba:C1(r),ed:j1})})},N1=function(e){return U1({b$:a(ba,"camera azimuth",e),cY:a(ba,"camera distance",e),cc:a(ba,"camera elevation",e),ba:{io:0,is:0,dU:0}})},H1=v(function(e,r){return a(je,function(n){if(n.$===2){var t=n.a;return t}else return Kl},a(Da,e,r.aN))}),G1=v(function(e,r){return a(Fe,Kl,Mt(a(Zr,H1(e),r)))}),W1=v(function(e,r){return a(G1,e,r.gb)}),O1=W1,uc=v(function(e,r){return{$:0,a:e,b:r}}),$c=v(function(e,r){return{$:2,a:e,b:r}}),Gi=function(e){return{$:5,a:e}},vc=v(function(e,r){return{$:4,a:e,b:r}}),Wi=v(function(e,r){return{$:3,a:e,b:r}}),fc=v(function(e,r){return{$:1,a:e,b:r}}),q1=function(e){var r=e;return r},Oi=function(e){var r=e;return q1(r.fN)},qi=function(e){var r=e;return r.a4},J1=M(function(e,r,n){return{fN:h(If,e,r,Oi(n)),a4:qi(n)}}),Y1=v(function(e,r){var n=a(kt,e,r),t=a(ii,e,r);return function(i){var o=i;return a(ea,n(o.dl),t(o.gm))}}),X1=M(function(e,r,n){var t=n;return{m:h(Y1,e,r,t.m),g5:t.g5,hs:t.hs}}),mc=function(e){var r=e;return r},K1=function(e){return e},sc=v(function(e,r){var n=mc(r),t=n.a,i=n.b;return K1(L(e(t),e(i)))}),Z1=M(function(e,r,n){return a(sc,a(kt,e,r),n)}),Ji=function(e){var r=e;return r.f4},Yi=function(e){var r=e;return r.hs},Xi=v(function(e,r){return{f4:r,hs:tr(e)}}),Q1=M(function(e,r,n){return a(Xi,Yi(n),h(kt,e,r,Ji(n)))}),dc=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return G(e(t),e(i),e(o))}),e_=M(function(e,r,n){return a(dc,a(kt,e,r),n)}),Rf=M(function(e,r,n){switch(n.$){case 0:var c=n.a,t=n.b;return a(uc,c,h(J1,e,r,t));case 1:var c=n.a,i=n.b;return a(fc,c,h(e_,e,r,i));case 3:var c=n.a,o=n.b;return a(Wi,c,h(Q1,e,r,o));case 2:var c=n.a,l=n.b;return a($c,c,h(X1,e,r,l));case 4:var c=n.a,u=n.b;return a(vc,c,h(Z1,e,r,u));default:var f=n.a;return Gi(a(ee,a(Rf,e,r),f))}}),r_=Gn({io:0,is:1,dU:0}),pc=r_,n_=a(ea,Er,pc),ul=v(function(e,r){return h(Rf,n_,qn(e),r)}),a_=v(function(e,r){return a(je,function(n){if(n.$===1){var t=n.b;return t}else return 0},a(Da,e,r.aN))}),t_=v(function(e,r){return a(Fe,0,Mt(a(Zr,a_(e),r)))}),i_=v(function(e,r){return a(t_,e,r.gb)}),jf=i_,o_=function(e){return Gi(e)},$l=function(e){return{$:0,a:e}},Uf=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Nf=M(function(e,r,n){return xe(n,e)<0?e:xe(n,r)>0?r:n}),xo=function(e){return h(Nf,0,1,e<=.04045?e/12.92:a(Tt,(e+.055)/1.055,2.4))},Ft=tp,l_=function(e){var r=Ql(e),n=r.hu,t=r.gA,i=r.fS;return h(Ft,xo(n),xo(t),xo(i))},c_=function(e){return h(Uf,0,$l(l_(e)),$l(0))},u_=M(function(e,r,n){return{io:e,is:r,dU:n}}),$_=v(function(e,r){return{fN:a(Ef,e,Oi(r)),a4:qi(r)}}),v_=v(function(e,r){var n=r;return a(ea,a(Dt,e,n.dl),n.gm)}),f_=v(function(e,r){var n=r;return{m:a(v_,e,n.m),g5:n.g5,hs:n.hs}}),m_=v(function(e,r){return a(sc,Dt(e),r)}),s_=v(function(e,r){return a(Xi,Yi(r),a(Dt,e,Ji(r)))}),d_=v(function(e,r){return a(dc,Dt(e),r)}),gc=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(u_,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(uc,m,a($_,o,l));case 1:var m=r.a,c=r.b;return a(fc,m,a(d_,o,c));case 3:var m=r.a,u=r.b;return a(Wi,m,a(s_,o,u));case 2:var m=r.a,f=r.b;return a($c,m,a(f_,o,f));case 4:var m=r.a,p=r.b;return a(vc,m,a(m_,o,p));default:var b=r.a;return Gi(a(ee,gc(G(n,t,i)),b))}}),p_=function(e){return gc(G(e,0,0))},g_=function(e){return gc(G(0,e,0))},ke=v(function(e,r){var n=r;return e*n}),$n=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},At=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dU:t.dU+r*(i.dU-t.dU)}}),h_=M(function(e,r,n){var t=Oi(n),i=kn(t),o=Dn(t),l=Fn(t),c=h(At,e,r,Qn(t)),u=r>=0?Cn({dl:c,dS:i,dT:o,dV:l}):Cn({dl:c,dS:$n(i),dT:$n(o),dV:$n(l)}),f=qi(n),m=f.a,p=f.b,b=f.c,s=tr(a(ke,r,m)),x=tr(a(ke,r,p)),_=tr(a(ke,r,b));return{fN:u,a4:G(s,x,_)}}),hc=function(e){var r=e;return r.m},Uu=function(e){return oc(hc(e))},Hf=function(e){var r=e;return r.dl},b_=function(e){return Hf(hc(e))},Gf=function(e){var r=e;return r.g5},Wf=function(e){var r=e;return r.hs},__=M(function(e,r,n){var t=tr(a(ke,r,Wf(n))),i=tr(a(ke,r,Gf(n))),o=r>=0?Uu(n):$n(Uu(n)),l=h(At,e,r,b_(n));return{m:a(ea,l,o),g5:i,hs:t}}),x_=M(function(e,r,n){return a(sc,a(At,e,r),n)}),w_=M(function(e,r,n){return a(Xi,a(ke,we(r),Yi(n)),h(At,e,r,Ji(n)))}),y_=M(function(e,r,n){return a(dc,a(At,e,r),n)}),Of=v(function(e,r){switch(r.$){case 0:var l=r.a,n=r.b;return a(uc,l,h(h_,Er,e,n));case 1:var l=r.a,t=r.b;return a(fc,l,h(y_,Er,e,t));case 3:var l=r.a,i=r.b;return a(Wi,l,h(w_,Er,e,i));case 2:var l=r.a,o=r.b;return a($c,l,h(__,Er,e,o));case 4:var l=r.a,c=r.b;return a(vc,l,h(x_,Er,e,c));default:var u=r.a;return Gi(a(ee,Of(e),u))}}),S_=v(function(e,r){return a(Wi,e,a(Xi,un(r),Er))}),C_=v(function(e,r){return(r-Q$(r/e)*e)/e}),L_=function(e){return 2*Yr*e},Ot=re(function(e,r,n,t){return e+(r-e)*(1+Jn(L_(a(C_,n,t))))/2}),P_=v(function(e,r){var n=e.d1+r*a(ba,"delay per index",e),t=a(ba,"saturation",e),i=a(jf,"number of spheres",e),o=30/i,l=a(ba,"lighting",e),c=P(Ot,0,1,7,n);return a(g_,o*1.1*r,a(ul,P(Ot,0,10,20,n),a(p_,P(Ot,3,4,1,n),a(Of,P(Ot,1,4,4,n),a(S_,c_(h(Df,c,t,l)),o)))))}),wo=function(e){var r=a(jf,"number of spheres",e);return o_(a(ee,P_(e),a(qr,-(r/2|0),r/2|0)))},z_=function(e){return e},M_=function(e){return un(.01*e)},Nu=function(e){return e},T_=function(e){return e},k_=function(e){return{$:0,a:e}},D_=k_,F_={$:3},A_=F_,I_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),E_=I_,B_=function(e){return{$:1,a:e}},V_=B_,R_=function(e){return a(Vr,"height",k(e))},j_=Ev,U_=function(e){return{$:2,a:e}},N_=U_,H_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Be(c*1e3)/1e3},l=function(c){return Be(c*1e4)/100};return pa($(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},G_=v(function(e,r){switch(r.$){case 0:return a(Op,e,r);case 1:return a(qp,e,r);case 2:return a(Jp,e,r);case 3:return a(Yp,e,r);case 4:return a(Xp,e,r);default:return a(Kp,e,r)}}),W_=v(function(e,r){switch(r.$){case 0:return a(wp,e,r);case 1:return a(yp,e,r);case 2:return a(Sp,e,r);case 3:return a(Cp,e,r);case 4:return a(Lp,e,r);case 5:return a(Pp,e,r);case 6:return a(zp,e,r);case 7:return a(Mp,e,r);default:return Tp(e)}}),O_=M(function(e,r,n){return h(Wp,e,r,n)}),Hu=function(e){var r=e;return r},Aa=$p,yo=P(Aa,1,1,1,1),Ur=M(function(e,r,n){return a(ee,function(t){return a(t,r,n)},e)}),q_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),J_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(q_,n*t/i,n,n*(1-t-i)/i)}),Y_=function(e){var r=e.a,n=e.b,t=e.c;return h(Ft,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},bc=v(function(e,r){return Y_(a(J_,e,r))}),qf=v(function(e,r){return{ek:he(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Wr=pp,X_=function(e){return Wr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},So=Je(function(e,r,n,t,i){var o=t.ek?1:-1,l=P(Aa,t.cC,t.cC,t.cC,o);return ur(i,e,l,X_(t),t.ek,r,n)}),Jf=Tr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,f=r,m=n,p=a(qf,l,t),b=c,s=o;e=u,r=f,n=m,t=p,i=b,o=s;continue e;case 1:var x=i.b,_=a(z,F(So,e,r,n,t,x),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(z,F(So,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var w=i.a,T=a(z,F(So,e,r,n,t,w),o.hI);return{P:o.P,_:o._,hI:T};default:var H=i.a;return h(Ue,P(Jf,e,r,n,t),o,H)}}),K_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Yf=K_,_c=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Z_=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(_c,518,r,n,t)},Q_=v(function(e,r){return{$:6,a:e,b:r}}),e2=Q_,Xf=$([Z_({ab:1,ac:0,ai:!1}),P(Yf,!1,!1,!1,!1),a(e2,0,1)]),Ma=519,xc=8,Kf=15,_a=7681,r2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ee=xp,n2=v(function(e,r){return{$:0,a:e,b:r}}),a2=n2({d5:1,ei:0,eS:5}),gr=np,t2=a2($([{cx:a(gr,-1,-1)},{cx:a(gr,1,-1)},{cx:a(gr,-1,1)},{cx:a(gr,1,1)}])),i2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},o2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f,k:m}}}}}}}}}}}},wc=M(function(e,r,n){var t=e.dx,i=e.dc,o=e.dR,l=v(function(f,m){var p=f;return m(p)}),c=v(function(f,m){var p=f;return m(p)}),u=function(f){return a(Xe,l(f.bO),a(Xe,c(f.bz),a(Xe,c(f.bX),c(f.bY))))};return a(u,n,a(u,r,h(o2,t,i,o)))}),yc=function(e){return h(wc,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},Sc=function(e){return F(Ee,$([yc(e),P(Yf,!1,!1,!1,!1)]),i2,r2,t2,{})},l2=Sc({bz:_a,dc:0,dx:xc,bO:Ma,dR:Kf,bX:_a,bY:_a}),c2=516,Gu=5386,ar=7680,u2=function(e){return a(Tt,2,e+4)},Zf=function(e){return Sc({bz:ar,dc:Kf,dx:xc,bO:c2,dR:u2(e),bX:Gu,bY:Gu})},$2=M(function(e,r,n){return sr($([h(Ur,e,n,Xf),$([Zf(r),l2])]))}),v2=v(function(e,r){return sr(a(q$,$2(e),r))}),f2=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(_c,513,r,n,t)},m2=f2({ab:1,ac:0,ai:!0}),s2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f}}}}}}}}}}},d2=function(e){var r=e.cz,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function(u,f){var m=u.a,p=u.b,b=u.c,s=f.a,x=f.b,_=f.c;return s2(m)(p)(b)(s)(x)(_)(r)(n)(t)(i)});return a(c,o,l)},p2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Wu=v(function(e,r){var n=e,t=r;return h(p2,32774,n,t)}),g2=1,Ou=771,h2=770,Cc=d2({bZ:0,fI:a(Wu,g2,Ou),b0:0,b6:a(Wu,h2,Ou),cf:0,cz:0}),ta=$([m2,Cc]),b2=function(e){var r=e;return r.eL},_2=function(e){var r=e;return r.eM},Qf=function(e){var r=e;return r.eN},x2=function(e){var r=e;return r.eO},w2=function(e){var r=e;return r.eP},em=function(e){var r=e;return r.eQ},xa=v(function(e,r){var n=e,t=r;return t-n}),rm=function(e){return G(a(xa,x2(e),b2(e)),a(xa,w2(e),_2(e)),a(xa,em(e),Qf(e)))},qu=function(e){var r=e;return Qn(r)},y2=function(e){return e},S2=function(e){return Cn({dl:y2({io:e.K,is:e.L,dU:e.M}),dS:Gn({io:e.t,is:e.u,dU:e.v}),dT:Gn({io:e.w,is:e.x,dU:e.y}),dV:Gn({io:e.z,is:e.A,dU:e.B})})},Co=v(function(e,r){var n=e,t=r,i=n.dV,o=i,l=n.dT,c=l,u=n.dS,f=u;return{io:t.io*f.io+t.is*f.is+t.dU*f.dU,is:t.io*c.io+t.is*c.is+t.dU*c.dU,dU:t.io*o.io+t.is*o.is+t.dU*o.dU}}),nm=v(function(e,r){var n=e,t=r,i=n.dl,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dU-o.dU,f=n.dV,m=f,p=n.dT,b=p,s=n.dS,x=s;return{io:l*x.io+c*x.is+u*x.dU,is:l*b.io+c*b.is+u*b.dU,dU:l*m.io+c*m.is+u*m.dU}}),am=v(function(e,r){return{dl:a(nm,e,Qn(r)),dS:a(Co,e,kn(r)),dT:a(Co,e,Dn(r)),dV:a(Co,e,Fn(r))}}),C2=M(function(e,r,n){return{io:e,is:r,dU:n}}),Pi=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(Lr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(ga,n,t)}),L2=v(function(e,r){var n=Pi(r),t=Pi(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Mr=function(e){var r=e;return r},P2=function(e){var r=e;return G(r.io,r.is,r.dU)},rt=v(function(e,r){var n=e,t=r;return t+n}),z2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=oi(tr(t)),l=oi(tr(n)),c=oi(tr(i)),u=P2(r),f=u.a,m=u.b,p=u.c;return{eL:a(rt,l,f),eM:a(rt,o,m),eN:a(rt,c,p),eO:a(xa,l,f),eP:a(xa,o,m),eQ:a(xa,c,p)}}),Ju=re(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,l=2*n.gE*r,c=2*n.gD*r,u=i.dU*r,f=i.is*r,m=i.io*r,p=Mr(Fn(e)),b=we(c*p.io)+we(l*p.is)+we(o*p.dU),s=Mr(Dn(e)),x=we(c*s.io)+we(l*s.is)+we(o*s.dU),_=Mr(kn(e)),S=we(c*_.io)+we(l*_.is)+we(o*_.dU),C=a(z2,G(S,x,b),a(nm,e,h(C2,m,f,u)));if(t.$)return X(C);var w=t.a;return X(a(L2,w,C))}),vl=re(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 1:var l=i.a,c=P(Ju,e,r,l,n),s=e,x=r,_=c,S=o;e=s,r=x,n=_,t=S;continue e;case 2:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 3:var l=i.a,c=P(Ju,e,r,l,n),s=e,x=r,_=c,S=o;e=s,r=x,n=_,t=S;continue e;case 4:var u=i.a,s=e,x=r,_=P(vl,e,r,n,u),S=o;e=s,r=x,n=_,t=S;continue e;default:var f=i.a,m=i.b,p=a(am,S2(f),e),b=r*f.cC,s=e,x=r,_=P(vl,p,b,n,$([m])),S=o;e=s,r=x,n=_,t=S;continue e}}else return n}),Ia=ip,Ea=op,Ba=lp,tm=function(e){return{$:4,a:e}},M2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(z,n,r);e=i,r=o;continue e}else return r}),It=function(e){return tm(a(M2,e,D))},T2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},k2=function(e){var r=e;return r},Yu=Sc({bz:_a,dc:0,dx:xc,bO:Ma,dR:255,bX:_a,bY:_a}),sa=ws,on=0,D2=function(e){var r=e,n=a(Lr,we(r.io),a(Lr,we(r.is),we(r.dU)));if(n){var t=r.dU/n,i=r.is/n,o=r.io/n,l=sa(o*o+i*i+t*t);return l*n}else return on},or={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},yr=v(function(e,r){var n=e,t=r;return Wr({eu:n.io,ev:n.cz,ew:t.io,ex:t.cz,ey:n.is,ez:n.cf,eA:t.is,eB:t.cf,eC:n.dU,eD:n.b0,eE:t.dU,eF:t.b0,eG:n.dJ,eH:n.du,eI:t.dJ,eJ:t.du})}),Xa=L({bF:a(yr,or,or),cm:a(yr,or,or),cn:a(yr,or,or),co:a(yr,or,or)},P(Aa,0,0,0,0)),im=514,om=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(_c,515,r,n,t)},lm=240,F2=$([om({ab:1,ac:0,ai:!0}),yc({bz:ar,dc:lm,dx:0,bO:im,dR:0,bX:ar,bY:ar}),Cc]),A2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,l=tr(t),c=l,u=tr(i),f=u,m=n.dw;if(m.$){var b=m.a;return Go(f)?Wr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Wr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-c),eF:-(f+c)/(f-c),eG:0,eH:0,eI:0,eJ:1})}else{var p=m.a;return Go(f)?Wr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Wr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(f+c)/(f-c),eF:-2*f*c/(f-c),eG:0,eH:0,eI:-1,eJ:0})}}),qt=v(function(e,r){return(1&e>>r)===1?0:1}),I2=function(e){return $([om({ab:1,ac:0,ai:!0}),yc({bz:ar,dc:lm,dx:e,bO:im,dR:0,bX:ar,bY:ar}),Cc])},E2=M(function(e,r,n){return sr(a(ee,function(t){var i=t<<4,o=P(Aa,a(qt,t,0),a(qt,t,1),a(qt,t,2),a(qt,t,3));return h(Ur,e,L(r,o),I2(i))},a(qr,1,a(Tt,2,n)-1)))}),wa=function(e){var r=e;return r},B2=gp,Xu=function(e){var r=e;return $n(Fn(r))},V2={dl:Er,dS:lc,dT:pc,dV:cc},Ki=function(e){var r=e;return r},R2=function(e){var r=Ki(Qn(e)),n=Mr(Fn(e)),t=Mr(Dn(e)),i=Mr(kn(e));return Wr({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dU,eD:t.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},j2=v(function(e,r){var n=r;return R2(a(am,n,e))}),U2=function(e){return a(j2,V2,e)},N2=function(e){var r=e;return r.dM},H2=function(e){var r=e;return kn(r)},G2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),W2=function(e){var r=e;return Dn(r)},O2=function(e){var r=N2(e.f0),n=Cn({dl:qu(r),dS:H2(r),dT:W2(r),dV:$n(Xu(r))}),t=It(e.a8),i=t,o=P(vl,n,1,J,$([i]));if(o.$===1)return D;var l=o.a,c=U2(r),u=a(ke,.99,a(He,tr(e.a3),cl(Qf(l)))),f=rm(l),m=f.a,p=f.b,b=f.c,s=D2(h(G2,m,p,b)),x=a(ke,1.01,a(rt,s,cl(em(l)))),_=a(A2,e.f0,{fM:e.fM,gv:x,hd:u}),S=B2(_).eJ,C=S?Mr($n(Xu(r))):wa(qu(r)),w=function(){var me=e.cG;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),T=w.a,H=w.b,Z=e.cd,ae=Z,te=a(bc,ae,e.cK),ie=te,ne=Wr({eu:0,ev:C.io,ew:Ia(ie),ex:e.ff,ey:0,ez:C.is,eA:Ea(ie),eB:k2(s),eC:0,eD:C.dU,eE:Ba(ie),eF:T,eG:0,eH:S,eI:0,eJ:H}),q=ur(Jf,ne,c,_,T2,i,{P:D,_:D,hI:D}),de=e.cl;switch(de.$){case 0:var pe=de.a;return sr($([h(Ur,q.P,L(pe,yo),ta),h(Ur,q._,Xa,ta)]));case 1:var pe=de.a;return sr($([h(Ur,q.P,Xa,ta),$([Yu]),h(Ur,q.hI,pe.bF,Xf),$([Zf(0)]),h(Ur,q.P,L(pe,yo),F2),h(Ur,q._,Xa,ta)]));default:var Me=de.a,Se=de.b;return sr($([h(Ur,q.P,L(Se,yo),ta),$([Yu]),a(v2,q.hI,Me),h(E2,q.P,Se,Wn(Me)),h(Ur,q._,Xa,ta)]))}},q2=function(e){return a(Vr,"width",k(e))},J2=v(function(e,r){var n=$([V_(1),N_(0),D_(!0),P(E_,0,0,0,0)]),t=function(){var T=e.cO;switch(T.$){case 0:return G(n,"0",1);case 1:return G(a(z,A_,n),"1",1);default:var H=T.a;return G(n,"0",H)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,u=c.a,f=c.b,m=Hu(f),p=a(hr,"height",k(m)+"px"),b=Hu(u),s=b/m,x=a(Fa,function(T){return O2({fM:s,f0:e.f0,a3:e.a3,a8:T.a8,cd:T.cd,cl:T.cl,ff:l,cG:T.cG,cK:T.cK})},r),_=a(hr,"width",k(b)+"px"),S=e.a1,C=S,w=H_(C);return h(j_,"div",$([a(hr,"padding","0px"),_,p]),$([L(o,h(O_,i,$([q2(Be(b*l)),R_(Be(m*l)),_,p,a(hr,"display","block"),a(hr,"background-color",w)]),x))]))}),Y2=function(e){return a(J2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},cm=function(e){return e},Ku=cm({io:.31271,is:.32902}),X2=v(function(e,r){var n=e,t=Mr(r.gm),i=t.io,o=t.is,l=t.dU,c=a(bc,r.c0,r.cT),u=c;return{b0:Ba(u),f3:n,cf:Ea(u),du:0,cz:Ia(u),dJ:1,io:-i,is:-o,dU:-l}}),K2=function(e){return e},Z2=function(e){return K2(1.2*a(Tt,2,e))},Lo=function(e){return e},Q2={$:0},ex=Q2,um=function(e){return e},rx=v(function(e,r){var n=e,t=r;return xe(t,n)>0}),Zu=function(e){var r=e;return r},nx=function(e){e:for(;;){if(he(e.gZ,on)&&he(e.g_,on))return or;if(a(rx,tr(e.gZ),tr(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:$n(e.fm)};e=r;continue e}else{var n=we(Zu(e.g_)/Yr),t=we(Zu(e.gZ)/Yr),i=Mr(e.fm),o=i.io,l=i.is,c=i.dU,u=a(bc,um(1),e.cT),f=u;return{b0:t*Ba(f),f3:!1,cf:t*Ea(f),du:n/t,cz:t*Ia(f),dJ:3,io:o,is:l,dU:c}}}},Qu=function(e){return nx({cT:e.cT,gZ:e.c0,g_:on,fm:e.fm})},ax=function(e){var r=e;return r},$m=function(e){var r=h(Nf,1667,25e3,ax(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return cm({io:n,is:t})},vm=function(e){return e},tx=$m(vm(12e3)),ix=$m(vm(5600)),ox=function(e){return{$:2,a:e}},lx=function(e){return ox(e)},cx=v(function(e,r){return{$:2,a:e,b:r}}),fm=function(e){return{$:0,a:e}},Jt=function(e){var r=e;return r},ux=function(e){var r=e;return r.f3},$x=fm(Xa.a),vx=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?L(a(z,t,o),l):L(o,a(z,t,l))});return h(Ze,n,L(D,D),r)}),fx=function(e){var r=e;return Wr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},mx=ze(function(e,r,n,t,i,o,l,c){var u=a(vx,ux,$([Jt(e),Jt(r),Jt(n),Jt(t)])),f=u.a,m=u.b;if(f.b){var p=Y(f,m);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var b=p.a,s=p.b,x=s.a,_=s.b,S=_.a,C=_.b,w=C.a;return a(cx,a(ee,fx,f),{bF:a(yr,b,x),cm:a(yr,S,w),cn:a(yr,i,o),co:a(yr,l,c)})}else return $x}else return fm({bF:a(yr,e,r),cm:a(yr,n,t),cn:a(yr,i,o),co:a(yr,l,c)})}),sx=M(function(e,r,n){return xt(mx,e,r,n,or,or,or,or,or)}),dx=function(e){var r=a(X2,T_(e.hI),{cT:ix,gm:e.hZ,c0:Lo(8e4)}),n=Qu({cT:tx,c0:Lo(2e4),fm:e.fm}),t=Qu({cT:Ku,c0:Lo(15e3),fm:$n(e.fm)}),i=h(sx,r,n,t);return Y2({cO:lx(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:Z2(15),cl:i,cG:ex,cK:Ku})},mm=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),px=re(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),sm=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),dm=re(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),gx=re(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),hx=re(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),bx=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Lc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return P(bx,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return P(mm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return P(px,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return P(sm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return P(hx,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return P(dm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return P(gx,n,t,i,1);case 8:return e;case 9:return e;default:return e}},Pc={$:0},_x=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,f=c.b,m=Pi(l(u)),p=a(Oe,m.eO,e),b=a(He,m.eL,r),s=a(Oe,m.eP,n),x=a(He,m.eM,t),_=a(Oe,m.eQ,i),S=a(He,m.eN,o),C=l,w=f;e=p,r=b,n=s,t=x,i=_,o=S,l=C,c=w;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),xx=M(function(e,r,n){var t=Pi(e(r));return xt(_x,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),Po=v(function(e,r){var n=e,t=r;return xe(t,n)<1}),pm=function(e){return a(Po,e.eL,e.eO)&&a(Po,e.eM,e.eP)&&a(Po,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},bt=function(e){var r=e;return r},nt=function(e){var r=e;return r.io},at=function(e){var r=e;return r.is},tt=function(e){var r=e;return r.dU},gm=function(e){var r=bt(e),n=r.a,t=r.b,i=r.c,o=nt(n),l=at(n),c=tt(n),u=nt(t),f=at(t),m=tt(t),p=nt(i),b=at(i),s=tt(i);return pm({eL:a(He,o,a(He,u,p)),eM:a(He,l,a(He,f,b)),eN:a(He,c,a(He,m,s)),eO:a(Oe,o,a(Oe,u,p)),eP:a(Oe,l,a(Oe,f,b)),eQ:a(Oe,c,a(Oe,m,s))})},hm=cp,vr=function(e){return hm(Ki(e))},bm=function(e){var r=e;return r},Zi=function(e){return hm(bm(e))},wx=v(function(e,r){var n=e,t=r;return{io:t.is*n.dU-t.dU*n.is,is:t.dU*n.io-t.io*n.dU,dU:t.io*n.is-t.is*n.io}}),fl=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dU:t.dU-n.dU}}),yx={io:0,is:0,dU:0},Sx=v(function(e,r){var n=e,t=r,i=a(Lr,we(t.io),a(Lr,we(t.is),we(t.dU)));if(i){var o=t.dU/i,l=t.is/i,c=t.io/i,u=sa(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dU:n*o/u}}else return yx}),Cx=Sx(um(1)),_m=M(function(e,r,n){var t=a(fl,r,n),i=a(fl,e,r);return Cx(a(wx,t,i))}),Lx=function(e){var r=bt(e),n=r.a,t=r.b,i=r.c,o=Zi(h(_m,n,t,i));return G({q:o,cx:vr(n)},{q:o,cx:vr(t)},{q:o,cx:vr(i)})},Px=v(function(e,r){return{$:2,a:e,b:r}}),xm=Px({d5:3,ei:0,eS:4}),zx=function(e){if(e.b){var r=e.a,n=e.b,t=xm(a(ee,Lx,e)),i=h(xx,gm,r,n);return P(mm,i,e,t,0)}else return Pc},wr=M(function(e,r,n){return G(e,r,n)}),Qe=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),wm=function(){var e=un(1),r=un(1),n=un(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),l=h(Qe,o,i,t),c=a(ke,.5,e),u=h(Qe,o,i,c),f=a(ke,.5,r),m=h(Qe,o,f,t),p=h(Qe,o,f,c),b=a(ke,.5,n),s=h(Qe,b,i,t),x=h(Qe,b,f,t),_=h(Qe,b,i,c),S=h(Qe,b,f,c);return Lc(zx($([h(wr,l,x,s),h(wr,l,m,x),h(wr,u,_,S),h(wr,u,S,p),h(wr,s,x,S),h(wr,s,S,_),h(wr,l,p,m),h(wr,l,u,p),h(wr,l,s,_),h(wr,l,_,u),h(wr,m,S,x),h(wr,m,p,S)])))}(),Yt={$:0},Mx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Tx=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),f=Zi(h(_m,u,c,l)),m={q:f,cx:vr(u)},p={q:f,cx:vr(c)},b={q:f,cx:vr(l)};return a(z,m,a(z,p,a(z,b,n)))}),zc=function(e){var r=e;return r.H},kx=re(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var l=t.a;return X(h(e,i,o,l))}),ml=4294967295>>>32-ut,sl=is,Dx=M(function(e,r,n){e:for(;;){var t=ml&r>>>e,i=a(sl,t,n);if(i.$){var f=i.a;return a(sl,ml&r,f)}else{var o=i.a,l=e-ut,c=r,u=o;e=l,r=c,n=u;continue e}}}),Fx=function(e){return e>>>5<<5},Ax=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||xe(e,n)>-1?J:xe(e,Fx(n))>-1?X(a(sl,ml&e,o)):X(h(Dx,t,e,i))}),Mc=function(e){var r=e;return r.au},zo=v(function(e,r){return a(Ax,e,Mc(r))}),Ix=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(kx,M(function(l,c,u){return G(l,c,u)}),a(zo,t,e),a(zo,i,e),a(zo,o,e))};return a(Zr,r,zc(e))},Ex=M(function(e,r,n){e:for(;;){var t=a(Bl,_r,e),i=t.a,o=t.b;if(xe(No(i),_r)<0)return a(rv,!0,{C:r,n,r:i});var l=o,c=a(z,Z$(i),r),u=n+1;e=l,r=c,n=u;continue e}}),Tc=function(e){return e.b?h(Ex,e,D,0):X$},Bx=v(function(e,r){return!a(Lt,a(Pt,kg,e),r)}),Vx=function(e){var r=e.a;return r},ym=v(function(e,r){var n=Vx(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&xe(o,n)<0&&l>=0&&xe(l,n)<0&&c>=0&&xe(c,n)<0};return a(Bx,t,r)?{H:r,au:e}:{H:a(Av,t,r),au:e}}),Rx=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Et=Rx({d5:1,ei:3,eS:4}),li=v(function(e,r){var n=wa(r),t=wa(e);return L(G(t.io,t.is,t.dU),G(n.io,n.is,n.dU))}),e$=h(Ft,0,0,0),Mo=Tr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,f=a(Da,a(li,e,r),i);if(f.$){var p={q:e$,cx:vr(r)},b={q:e$,cx:vr(e)},s=u+1,x=u;return G(a(z,G(n,x,s),a(z,G(n,s,t),l)),a(z,p,a(z,b,c)),u+2)}else{var m=f.a;return G(a(z,G(n,m,t),l),c,u)}}),jx=Je(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,f=n.b,m=e(u),p=e(c),b=e(l),s=t+2,x=t+1,_=t,S=e,C=r,w=f,T=t+3,H=ur(Mo,m,b,s,_,r,ur(Mo,p,m,x,s,r,ur(Mo,b,p,_,x,r,i)));e=S,r=C,n=w,t=T,i=H;continue e}else{var Z=i,ae=Z.a,te=Z.b;return L(ae,mr(te))}}),Ux=Je(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,f=r.b,m=e(u),p=e(c),b=e(l),s=n+2,x=n+1,_=n,S=h(da,a(li,b,m),s,h(da,a(li,m,p),x,h(da,a(li,p,b),_,i))),C=a(z,G(_,x,s),t),w=e,T=f,H=n+3,Z=C,ae=S;e=w,r=T,n=H,t=Z,i=ae;continue e}else return G(t,i,n)}),Bn=M(function(e,r,n){var t=Ix(n),i=h(Ze,Tx(r),D,t),o=F(Ux,r,t,0,D,Hl),l=o.a,c=o.b,u=o.c,f=F(jx,r,c,t,0,G(l,D,u)),m=f.a,p=f.b,b=pn(p)?i:Y(i,p);return h(Mx,e,a(ym,Tc(b),m),a(Et,b,m))}),dl=function(e){return{H:a(ee,function(r){return G(3*r,3*r+1,3*r+2)},a(qr,0,Wn(e)-1)),au:Tc(sr(a(ee,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},Sm=function(e){switch(e.$){case 0:return Yt;case 1:var t=e.a,r=e.b,n=a(ee,bt,r);return h(Bn,t,Br,dl(n));case 2:var t=e.a,r=e.b,n=a(ee,bt,r);return h(Bn,t,Br,dl(n));case 3:var t=e.a,i=e.b;return h(Bn,t,Br,i);case 4:var t=e.a,i=e.b;return h(Bn,t,function(o){return o.cx},i);case 5:var t=e.a,i=e.b;return h(Bn,t,function(o){return o.cx},i);case 6:var t=e.a,i=e.b;return h(Bn,t,function(o){return o.cx},i);case 7:var t=e.a,i=e.b;return h(Bn,t,function(o){return o.cx},i);case 8:return Yt;case 9:return Yt;default:return Yt}},r$=Sm(wm),Cm={$:0},W=Cm,Ke=v(function(e,r){return{$:1,a:e,b:r}}),Nx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},Hx=1029,Gx=function(e){return{$:5,a:e}},Lm=function(e){var r=e;return Gx(r)},Wx=Lm(Hx),Ox=1028,qx=Lm(Ox),fr=M(function(e,r,n){return r===1?e?a(z,Wx,n):a(z,qx,n):n}),Pm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},To=re(function(e,r,n,t){return a(Ke,r,ze(function(i,o,l,c,u,f,m,p){return F(Ee,h(fr,c,t,p),Pm,Nx,n,{b7:e,c:l,d:o,e:f,f:i,g:u})}))}),kc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},zm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},en=re(function(e,r,n,t){return a(Ke,r,ze(function(i,o,l,c,u,f,m,p){return F(Ee,h(fr,c,t,p),zm,kc,n,{aO:e,c:l,d:o,e:f,f:i,g:u})}))}),Mm=v(function(e,r){return{$:3,a:e,b:r}}),Jx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Tm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Yx=re(function(e,r,n,t){return a(Mm,n,ze(function(i,o,l,c,u,f,m,p){return F(Ee,p,Tm,Jx,t,{aO:e,c:l,d:o,cw:r,e:f,f:i,g:u})}))}),Dc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Bt=function(e){var r=e;return r},Qi=up,rn=Je(function(e,r,n,t,i){return a(Ke,n,ze(function(o,l,c,u,f,m,p,b){return F(Ee,h(fr,u,i,b),zm,Dc,t,{a6:a(Qi,Bt(r),e),c,d:l,e:m,f:o,g:f})}))}),Xx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Kx=Je(function(e,r,n,t,i){return a(Mm,t,ze(function(o,l,c,u,f,m,p,b){return F(Ee,b,Tm,Xx,i,{a6:a(Qi,Bt(r),e),c,d:l,cw:n,e:m,f:o,g:f})}))}),km={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},Dm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Xt=re(function(e,r,n,t){return a(Ke,r,ze(function(i,o,l,c,u,f,m,p){var b=m.a,s=m.b;return F(Ee,h(fr,c,t,p),Dm,km,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,dd:e,c:l,d:o,e:f,f:i,g:u})}))}),Fm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Am={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Zx=Tr(function(e,r,n,t,i,o){return a(Ke,t,ze(function(l,c,u,f,m,p,b,s){var x=b.a,_=b.b;return F(Ee,h(fr,f,o,s),Am,Fm,i,{U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,de:e,c:u,d:c,bg:r,e:p,f:l,bm:n,g:m})}))}),Im={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Qx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return a(Ke,u,ze(function(p,b,s,x,_,S,C,w){var T=C.a,H=C.b;return F(Ee,h(fr,x,m,w),Am,Im,f,{cS:e,cU:r,cV:o,cW:t,U:H,bF:T.bF,cm:T.cm,cn:T.cn,co:T.co,dh:i,c:s,d:b,bg:l,e:S,dB:n,f:p,bm:c,g:_})}))}}}}}}}}}}},Em={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},Kt=Tr(function(e,r,n,t,i,o){return a(Ke,t,ze(function(l,c,u,f,m,p,b,s){var x=b.a,_=b.b;return F(Ee,h(fr,f,o,s),Dm,Em,i,{cR:e,U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,dg:n,c:u,d:c,e:p,dA:r,f:l,g:m})}))}),ew=function(e){return{$:0,a:e}},n$=v(function(e,r){return{$:1,a:e,b:r}}),it=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),rw=function(e){return P(Aa,Ia(e),Ea(e),Ba(e),1)},Fc=P(Aa,0,0,0,0),ci=v(function(e,r){if(r.$){var t=r.a.E;return L(t,Fc)}else{var n=r.a;return L(e,rw(n))}}),Bm=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(n$,L(i,Fc),a(it,i,r))}else if(n.b.$){var i=n.b.a.E;return a(n$,a(ci,i,e),a(it,i,r))}else{var t=n.a.a;return n.b.a,ew(t)}}),nw=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zt=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),aw=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),tw=function(e){return a(gr,e,1)},pl=a(gr,0,0),ia=v(function(e,r){if(r.$){var t=r.a.E;return L(t,pl)}else{var n=r.a;return L(e,tw(n))}}),Vm=re(function(e,r,n,t){var i=P(aw,e,r,n,t);if(i.a.$){var u=i.a.a.E;return P(Zt,L(u,Fc),a(ia,u,r),a(ia,u,n),a(it,u,t))}else if(i.b.$){var u=i.b.a.E;return P(Zt,a(ci,u,e),L(u,pl),a(ia,u,n),a(it,u,t))}else if(i.c.$){var u=i.c.a.E;return P(Zt,a(ci,u,e),a(ia,u,r),L(u,pl),a(it,u,t))}else if(i.d.$){var u=i.d.a.E;return P(Zt,a(ci,u,e),a(ia,u,r),a(ia,u,n),L(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(nw,o,l,c)}}),iw={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},ko=Je(function(e,r,n,t,i){return a(Ke,n,ze(function(o,l,c,u,f,m,p,b){return F(Ee,h(fr,u,i,b),Pm,iw,t,{cP:Bt(r),b7:e,c,d:l,e:m,f:o,g:f})}))}),Rm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ow=re(function(e,r,n,t){return a(Ke,r,ze(function(i,o,l,c,u,f,m,p){var b=m.a,s=m.b;return F(Ee,h(fr,c,t,p),Rm,Fm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,de:e,c:l,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),lw=bl(function(e,r,n,t,i,o,l,c,u){return a(Ke,l,ze(function(f,m,p,b,s,x,_,S){var C=_.a,w=_.b;return F(Ee,h(fr,b,u,S),Rm,Im,c,{cS:e,cU:r,cV:o,cW:t,U:w,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:p,d:m,bg:e,e:x,dB:n,f,bm:0,g:s})}))}),_t=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),cw=function(e){var r=e;return h(_t,r.eO,r.eL,.5)},uw=function(e){var r=e;return h(_t,r.eP,r.eM,.5)},$w=function(e){var r=e;return h(_t,r.eQ,r.eN,.5)},vw=function(e){return h(Qe,cw(e),uw(e),$w(e))},$e=function(e){var r=rm(e),n=r.a,t=r.b,i=r.c;return{f4:Ki(vw(e)),gD:n/2,gE:t/2,gF:i/2}},Ac=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return P(To,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return P(To,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return P(To,c,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return P(en,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return P(en,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return P(en,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return P(Yx,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return F(ko,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(ko,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(ko,c,f,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(rn,u,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return F(rn,u,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return F(rn,u,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return F(Kx,u,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ae=e.c,p=a(Bm,m,ae);if(p.$){var x=p.a,_=x.a;x.b;var S=p.b,C=S.a,w=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return P(ow,_,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return ur(Zx,_,C,w,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}else{var b=p.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,s=r.d;return P(Xt,b,$e(i),l,s);case 3:return W;case 4:var i=r.a,l=r.c,s=r.d;return P(Xt,b,$e(i),l,s);case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return P(Xt,b,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return P(Xt,b,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}default:e.a;var T=e.b,H=e.c,Z=e.d,ae=e.e,te=P(Vm,T,H,Z,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,E=I.a,B=I.b,V=te.d,C=V.a,w=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return es(lw,pe,Me,me,Te,E,B,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return Qx(pe)(Me)(me)(Te)(E)(B)(C)(w)($e(i))(l)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,ne=te.b,q=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,t=r.d;return ur(Kt,ie,ne,q,$e(i),l,t);case 3:return W;case 4:var i=r.a,l=r.c,t=r.d;return ur(Kt,ie,ne,q,$e(i),l,t);case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return ur(Kt,ie,ne,q,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return ur(Kt,ie,ne,q,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}}}),Do=function(e){var r=e;return r.io},Fo=function(e){var r=e;return r.is},Ao=function(e){var r=e;return r.dU},fw=function(e){var r=e,n=Ao(r.dV),t=Fo(r.dV),i=Do(r.dV),o=Ao(r.dT),l=Fo(r.dT),c=Do(r.dT),u=Ao(r.dS),f=Fo(r.dS),m=Do(r.dS);return m*l*n+f*o*i+u*c*t-u*l*i-f*c*n-m*o*t>0},mw=function(e){var r=Ki(Qn(e)),n=Mr(Fn(e)),t=Mr(Dn(e)),i=Mr(kn(e));return{ek:fw(e),t:i.io,u:i.is,v:i.dU,w:t.io,x:t.is,y:t.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},ca=v(function(e,r){return{$:5,a:e,b:r}}),jm=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(qf,t,e);return a(ca,o,i);case 1:return a(ca,e,n);case 3:return a(ca,e,n);case 2:return a(ca,e,n);default:return a(ca,e,n)}}),Um=v(function(e,r){return a(jm,mw(e),r)}),eo=function(e){return{$:2,a:e}},sw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dU:i*o.dU},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),dw=fp,pw=vp,a$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){var m=e.a,p=e.b,b=e.c,s=pw(t),x=s.io,_=s.is,S=s.dU,C=s.ft,w=dw({ft:C,io:x*m,is:_*p,dU:S*b});return xt(r,n,w,i,o,l,c,u,f)}}}}}}}}}},gl=v(function(e,r){switch(r.$){case 0:return Cm;case 5:var n=r.a,t=r.b;return a(ca,n,a(gl,e,t));case 1:var i=r.a,o=r.b;return a(Ke,a(sw,e,i),a(a$,e,o));case 3:return r;case 2:var o=r.a;return eo(a(a$,e,o));default:var l=r.a;return tm(a(ee,gl(e),l))}}),Ic=v(function(e,r){var n=r;return a(gl,e,n)}),Ec={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Nm=7683,Hm=7682,gw=h(wc,{dc:0,dx:0,dR:15},{bz:ar,bO:Ma,bX:ar,bY:Nm},{bz:ar,bO:Ma,bX:ar,bY:Hm}),hw=h(wc,{dc:0,dx:0,dR:15},{bz:ar,bO:Ma,bX:ar,bY:Hm},{bz:ar,bO:Ma,bX:ar,bY:Nm}),Bc=v(function(e,r){return e?a(z,hw,r):a(z,gw,r)}),bw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},_w=function(e){if(e.$){var r=e.c;return X(ze(function(n,t,i,o,l,c,u,f){return F(Ee,a(Bc,o,f),bw,Ec,r,{c:i,d:t,e:c,f:n,cD:u,g:l})}))}else return J},zi=function(e){var r=_w(e);if(r.$)return W;var n=r.a;return eo(n)},xw=re(function(e,r,n,t){var i=a(Ac,n,wm),o=function(){var m=L(e,r);return m.a?m.b?It($([i,zi(r$)])):i:m.b?zi(r$):W}(),l=qi(t),c=l.a,u=l.b,f=l.c;return a(Um,Oi(t),a(Ic,G(c,u,f),o))}),ww=v(function(e,r){return P(xw,!0,!0,e,r)}),Gm=v(function(e,r){return{$:0,a:e,b:r}}),yw=function(e){var r=Ql(e),n=r.hu,t=r.gA,i=r.fS;return h(Ft,n,t,i)},Sw=function(e){return a(Gm,0,$l(yw(e)))},ot=function(e){var r=e;return Jn(r)},Cw=v(function(e,r){var n=r;return n/e}),t$=function(e){var r=e;return{io:Jn(r),is:za(r)}},Lw=v(function(e,r){var n=e.cx,t=e.q;return a(z,{q:Zi(t),cx:vr(n)},r)}),Pw=ki(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,f=Ba(c.cx),m=Ea(c.cx),p=Ia(c.cx),b=a(ga,e,p),s=a(Lr,r,p),x=a(ga,n,m),_=a(Lr,t,m),S=a(ga,i,f),C=a(Lr,o,f),w=u;e=b,r=s,n=x,t=_,i=S,o=C,l=w;continue e}else return pm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Wm=v(function(e,r){var n=Ba(e.cx),t=Ea(e.cx),i=Ia(e.cx);return _l(Pw,i,i,t,t,n,n,r)}),zw=function(e){var r=h(N$,Lw,D,Mc(e));if(r.b){var n=r.a,t=r.b,i=a(Et,r,zc(e)),o=a(Wm,n,t);return P(sm,o,e,i,0)}else return Pc},Mw=Gn({io:0,is:0,dU:-1}),i$=v(function(e,r){var n=e,t=r,i=n.dT,o=i,l=n.dS,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dU:t.io*c.dU+t.is*o.dU}}),Mi=function(e){var r=e;return za(r)},Ka=function(e){var r=e;return r},hl=function(e){return qn(2*Yr*e)},o$=Bf({dl:Er,dS:lc,dT:pc}),Om=function(){var e=72,r=a(Cw,e,hl(1)),n=un(1),t=Ka(Vf),i=Ka(Mw),o=un(1),l=a(ke,.5,o),c=h(Qe,on,on,l),u=a(ke,-.5,o),f=h(Qe,on,on,u),m=function(s){var x=a(ke,s,r),_=Ka(a(i$,o$,t$(x))),S=a(ke,ot(x),n),C=a(ke,Mi(x),n),w=h(Qe,S,C,l),T=h(Qe,S,C,u),H=a(yi,e,s+1),Z=a(ke,H,r),ae=Ka(a(i$,o$,t$(Z))),te=a(ke,ot(Z),n),ie=a(ke,Mi(Z),n),ne=h(Qe,te,ie,u),q=h(Qe,te,ie,l);return $([G({q:i,cx:f},{q:i,cx:ne},{q:i,cx:T}),G({q:_,cx:T},{q:ae,cx:ne},{q:ae,cx:q}),G({q:_,cx:T},{q:ae,cx:q},{q:_,cx:w}),G({q:t,cx:c},{q:t,cx:w},{q:t,cx:q})])},p=a(ee,m,a(qr,0,e-1)),b=dl(sr(p));return Lc(zw(b))}(),l$=Sm(Om),Tw=function(e){var r=e,n=we(r.dU),t=we(r.is),i=we(r.io);if(xe(i,t)<1)if(xe(i,n)<1){var o=sa(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=sa(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(xe(t,n)<1){var o=sa(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=sa(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},kw=function(e){var r=Tw(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dU-o.dU*t.is,is:o.dU*t.io-o.io*t.dU,dU:o.io*t.is-o.is*t.io};return L(r,l)},Dw=function(e){var r=oc(e),n=kw(r),t=n.a,i=n.b;return Cn({dl:Hf(e),dS:t,dT:i,dV:r})},Fw=re(function(e,r,n,t){var i=Dw(hc(t)),o=a(Ac,n,Om),l=function(){var p=L(e,r);return p.a?p.b?It($([o,zi(l$)])):o:p.b?zi(l$):W}(),c=Wf(t),u=c,f=Gf(t),m=f;return a(Um,i,a(Ic,G(u,u,m),l))}),Aw=v(function(e,r){return P(Fw,!0,!0,e,r)}),c$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},u$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Za=function(e){var r=bt(e),n=r.a,t=r.b,i=r.c,o=wa(n),l=wa(t),c=wa(i);return Wr({eu:o.io,ev:l.io,ew:c.io,ex:0,ey:o.is,ez:l.is,eA:c.is,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Qt=xm($([G({dI:0},{dI:1},{dI:2})])),Iw=v(function(e,r){var n=gm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Ke,t,ze(function(w,T,H,Z,ae,te,ie,ne){return F(Ee,h(fr,Z,0,ne),c$,kc,Qt,{aO:i,c:H,d:T,e:te,f:w,bU:Za(r),g:ae})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,l=e.c;return a(Ke,t,ze(function(w,T,H,Z,ae,te,ie,ne){return F(Ee,h(fr,Z,0,ne),c$,Dc,Qt,{a6:a(Qi,Bt(l),o),c:H,d:T,e:te,f:w,bU:Za(r),g:ae})}));case 2:e.a;var c=e.b,s=e.c,u=a(Bm,c,s);if(u.$)return W;var f=u.a;return a(Ke,t,ze(function(w,T,H,Z,ae,te,ie,ne){var q=ie.a,de=ie.b;return F(Ee,h(fr,Z,0,ne),u$,km,Qt,{U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dd:f,c:H,d:T,e:te,f:w,bU:Za(r),g:ae})}));default:e.a;var m=e.b,p=e.c,b=e.d,s=e.e,x=P(Vm,m,p,b,s);if(x.$)return W;var _=x.a,S=x.b,C=x.c;return a(Ke,t,ze(function(w,T,H,Z,ae,te,ie,ne){var q=ie.a,de=ie.b;return F(Ee,h(fr,Z,0,ne),u$,Em,Qt,{cR:_,U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dg:C,c:H,d:T,e:te,dA:S,f:w,bU:Za(r),g:ae})}))}}),Ew=function(){var e=$([{bl:a(gr,0,1)},{bl:a(gr,1,1)},{bl:a(gr,2,1)},{bl:a(gr,0,-1)},{bl:a(gr,1,-1)},{bl:a(gr,2,-1)}]),r=$([G(0,1,2),G(3,5,4),G(3,4,1),G(3,1,0),G(4,5,2),G(4,2,1),G(5,3,0),G(5,0,2)]);return a(Et,e,r)}(),Bw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},$$=function(e){return eo(ze(function(r,n,t,i,o,l,c,u){return F(Ee,a(Bc,i,u),Bw,Ec,Ew,{c:t,d:n,e:l,f:r,cD:c,bU:Za(e),g:o})}))},Vw=re(function(e,r,n,t){var i=a(Iw,n,t),o=L(e,r);return o.a?o.b?It($([i,$$(t)])):i:o.b?$$(t):W}),Rw=v(function(e,r){return P(Vw,!0,!0,e,r)}),jw=v(function(e,r){var n=tt(r),t=tt(e),i=at(r),o=at(e),l=nt(r),c=nt(e);return{eL:a(He,c,l),eM:a(He,o,i),eN:a(He,t,n),eO:a(Oe,c,l),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Uw=function(e){var r=mc(e),n=r.a,t=r.b;return a(jw,n,t)},v$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Nw=v(function(e,r){return{$:1,a:e,b:r}}),Hw=Nw({d5:2,ei:0,eS:1}),f$=Hw($([L({es:0},{es:1})])),Gw=v(function(e,r){var n=Uw(r),t=$e(n),i=mc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var c=e.b.a;return a(Ke,t,ze(function(f,m,p,b,s,x,_,S){return F(Ee,S,v$,kc,f$,{aO:c,eq:vr(l),er:vr(o),c:p,d:m,e:x,f,g:s})}));case 1:if(e.b.$)return W;var c=e.b.a,u=e.c;return a(Ke,t,ze(function(m,p,b,s,x,_,S,C){return F(Ee,C,v$,Dc,f$,{a6:a(Qi,Bt(u),c),eq:vr(l),er:vr(o),c:b,d:p,e:_,f:m,g:x})}));case 2:return W;default:return W}}),Ww=v(function(e,r){return a(Gw,e,r)}),m$=v(function(e,r){var n=e,t=r;return n/t}),Ow=Je(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(z,o,i);if(he(r,e))return l;var c=e,u=r-1,f=n,m=t,p=l;e=c,r=u,n=f,t=m,i=p;continue e}}),s$=v(function(e,r){return e<1?D:F(Ow,0,e,e,r,D)}),qw=v(function(e,r){var n=e.cx,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(z,{q:Zi(t),cx:vr(n),O:a(gr,l,c)},r)}),Jw=function(e){var r=h(N$,qw,D,Mc(e));if(r.b){var n=r.a,t=r.b,i=a(Et,r,zc(e)),o=a(Wm,n,t);return P(dm,o,e,i,0)}else return Pc},qm=v(function(e,r){var n=e,t=r,i=Jn(t);return{io:i*Jn(n),is:i*za(n),dU:za(t)}}),Yw=function(){var e=un(1),r=72,n=a(qr,0,r-1),t=a(s$,r,a(_t,on,hl(1))),i=ct(r/2),o=a(qr,0,i-1),l=a(s$,i,a(_t,Ya(90),Ya(-90))),c=Tc(sr(a(ee,function(m){return a(ee,function(p){return{q:Ka(a(qm,m,p)),cx:h(Qe,a(ke,ot(p)*ot(m),e),a(ke,ot(p)*Mi(m),e),a(ke,Mi(p),e)),O:L(a(m$,m,hl(1)),a(m$,a(rt,Ya(90),p),Ya(180)))}},l)},t))),u=v(function(m,p){return m*(i+1)+p}),f=sr(a(ee,function(m){return sr(a(ee,function(p){var b=a(u,m+1,p),s=a(u,m,p),x=a(u,m+1,p+1),_=a(u,m,p+1);return $([G(_,x,b),G(_,b,s)])},o))},n));return Lc(Jw(a(ym,c,f)))}(),Ti=72,ei=2*Ti,Xw=v(function(e,r){e:for(;;){var n=ei+1,t=a(yi,ei,2*e+3),i=a(yi,ei,2*e+2),o=2*e+1,l=2*e,c=ei,u=a(z,G(c,l,i),a(z,G(l,t,i),a(z,G(l,o,t),a(z,G(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Kw=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Zw=v(function(e,r){e:for(;;){var n=h(Kw,0,2*Yr,e/Ti),t={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=a(z,t,a(z,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Qw=function(){var e=a(Zw,Ti-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=a(Xw,Ti-1,D);return a(Et,e,r)}(),ey={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},d$=function(e){return eo(ze(function(r,n,t,i,o,l,c,u){return F(Ee,a(Bc,!0,u),ey,Ec,Qw,{aO:h(Ft,0,0,1),c:t,d:n,e:l,f:r,cD:c,g:o})}))},ry=function(e){var r=bm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},ny=v(function(e,r){return a(jm,ry(e),r)}),ay=re(function(e,r,n,t){var i=a(Ac,n,Yw),o=function(){var u=L(e,r);return u.a?u.b?It($([i,d$()])):i:u.b?d$():W}(),l=Yi(t),c=l;return a(ny,a(fl,Er,Ji(t)),a(Ic,G(c,c,c),o))}),ty=v(function(e,r){return P(ay,!0,!0,e,r)}),iy=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),oy=Je(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),ly=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Gm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(iy,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(Uf,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return F(oy,n,t,i,o,l)}},cy=ly,Jm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(ww,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Rw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(ty,cy(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Aw,i,o)]);case 4:var l=e.a,c=e.b;return $([a(Ww,Sw(l),c)]);default:var u=e.a;return a(Fa,Jm,u)}},uy=function(e){return a(Fa,Jm,e)},$y=v(function(e,r){return dx({a1:z_(e.fO),f0:e.f0,a3:M_(.5),cX:e.cX,a4:L(Nu(Be(e.dC.im)),Nu(Be(e.dC.gH))),a8:uy(r),hI:!0,hZ:a(qm,qn(e.hY),qn(e.h_)),fm:cc})}),vy=v(function(e,r){return a($y,{fO:a(O1,"background color",e),f0:N1(e),cX:e.cX,dC:e.dC,hY:-qa(135),h_:-qa(45)},$([wo(e),a(ul,qa(120),wo(e)),a(ul,qa(240),wo(e))]))}),fy=P(f1,vy,x1,_1,m1);const my={Main:{init:fy(a(Q,function(e){return lr({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return lr({d1:l,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(p){return lr({fJ:p,gd:m,d4:f,go:u,g4:c,hr:l,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",hi(Sa)))},a(K,"left",Pe))},a(K,"pressedKeys",hi(Sa)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return lr({d4:f,g$:u,ha:c,hy:l,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return lr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return lr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},sy=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function p(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),l(s)&&(oe.keyboard.up=!0),c(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),l(s)&&(oe.keyboard.up=!1),c(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const x=s/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),p(oe)),window.requestAnimationFrame(b)}},dy=my.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});sy(dy);
