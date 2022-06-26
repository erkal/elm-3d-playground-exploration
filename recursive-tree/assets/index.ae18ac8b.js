const us=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};us();function zn(e,r,n){return n.a=e,n.f=r,n}function v(e){return zn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return zn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return zn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ze(e){return zn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function gr(e){return zn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Fi(e){return zn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function ze(e){return zn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function Sc(e){return zn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function V(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function Je(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function Cc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function _t(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function $s(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var vs=[];function fs(e){return e.length}var ms=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),ss=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,P(n,r)}),ds=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var ps=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+gs()),r});function gs(e){return"<internals>"}function Fa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=jo(e,r,0,t);i&&(n=t.pop());i=jo(n.a,n.b,0,t));return i}function jo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Fa(5),!1;if(n>100)return t.push(P(e,r)),!0;e.$<0&&(e=uu(e),r=uu(r));for(var i in e)if(!jo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function be(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=be(e.a,r.a))||(n=be(e.b,r.b))?n:be(e.c,r.c);for(;e.b&&r.b&&!(n=be(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return be(e,r)<0});v(function(e,r){return be(e,r)<1});v(function(e,r){return be(e,r)>0});v(function(e,r){return be(e,r)>=0});var hs=v(function(e,r){var n=be(e,r);return n<0?tv:n?v0:av}),yt=0;function P(e,r){return{a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Z);function Z(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Zr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Zr(e.a,r);return n}var D={$:0};function Zr(e,r){return{$:1,a:e,b:r}}var bs=v(Zr);function $(e){for(var r=D,n=e.length;n--;)r=Zr(e[n],r);return r}function Ii(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var _s=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Ze(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return $(o)});gr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(Ii(r).sort(function(n,t){return be(e(n),e(t))}))});v(function(e,r){return $(Ii(r).sort(function(n,t){var i=a(e,n,t);return i===av?0:i===tv?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ys=v(Math.pow);v(function(e,r){return r%e});var xs=v(function(e,r){var n=r%e;return e===0?Fa(11):n>0&&e<0||n<0&&e>0?n+e:n}),ws=Math.PI,Ss=Math.cos,Cs=Math.sin,Ls=Math.tan,Ps=v(Math.atan2);function zs(e){return e}function Ms(e){return e===1/0||e===-1/0}var Ts=Math.ceil,ks=Math.floor,Ds=Math.round,Vs=Math.sqrt,Yl=Math.log,As=isNaN;function Fs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Is=v(function(e,r){return e+r});function Es(e){var r=e.charCodeAt(0);return isNaN(r)?J:Y(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function Bs(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Rs(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var js=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ns=v(function(e,r){return r.split(e)}),Gs=v(function(e,r){return r.join(e)}),Ws=M(function(e,r,n){return n.slice(e,r)});function Hs(e){return $(e.trim().split(/\s+/g))}function Us(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Os=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Js=v(function(e,r){return r.indexOf(e)>-1}),qs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ys=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function T$(e){return e+""}function Zs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:Y(n==45?-r:r)}function Ks(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?Y(r):J}function Xs(e){return Ii(e).join("")}function Qs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ed(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function rd(e){return{$:0,a:e}}function nd(e){return{$:1,a:e}}function Lc(e){return{$:2,b:e}}var ad=Lc(function(e){return typeof e=="boolean"?He(e):Hr("a BOOL",e)}),td=Lc(function(e){return typeof e=="number"?He(e):Hr("a FLOAT",e)}),id=Lc(function(e){return typeof e=="string"?He(e):e instanceof String?He(e+""):Hr("a STRING",e)});function od(e){return{$:3,b:e}}var cd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Mn(e,r){return{$:9,f:e,g:r}}var ld=v(function(e,r){return{$:10,b:r,h:e}}),ud=v(function(e,r){return Mn(e,[r])}),$d=M(function(e,r,n){return Mn(e,[r,n])});ee(function(e,r,n,t){return Mn(e,[r,n,t])});Ze(function(e,r,n,t,i){return Mn(e,[r,n,t,i])});gr(function(e,r,n,t,i,o){return Mn(e,[r,n,t,i,o])});Fi(function(e,r,n,t,i,o,c){return Mn(e,[r,n,t,i,o,c])});ze(function(e,r,n,t,i,o,c,l){return Mn(e,[r,n,t,i,o,c,l])});Sc(function(e,r,n,t,i,o,c,l,u){return Mn(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Lr(e,n)}catch(t){return ir(a(Rc,"This is not valid JSON! "+t.message,r))}});var k$=v(function(e,r){return Lr(e,r)});function Lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?He(e.c):Hr("null",r);case 3:return Bt(r)?Zl(e.b,r,$):Hr("a LIST",r);case 4:return Bt(r)?Zl(e.b,r,vd):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var f=Lr(e.b,r[n]);return Ar(f)?f:ir(a($u,n,f.a));case 7:var t=e.e;if(!Bt(r))return Hr("an ARRAY",r);if(t>=r.length)return Hr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Lr(e.b,r[t]);return Ar(f)?f:ir(a(iv,t,f.a));case 8:if(typeof r!="object"||r===null||Bt(r))return Hr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Lr(e.b,r[o]);if(!Ar(f))return ir(a($u,o,f.a));i=Zr(P(o,f.a),i)}return He(sr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Lr(l[u],r);if(!Ar(f))return f;c=c(f.a)}return He(c);case 10:var f=Lr(e.b,r);return Ar(f)?Lr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=Lr(d.a,r);if(Ar(f))return f;m=Zr(f.a,m)}return ir(f0(sr(m)));case 1:return ir(a(Rc,e.a,r));case 0:return He(e.a)}}function Zl(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Lr(e,r[o]);if(!Ar(c))return ir(a(iv,o,c.a));i[o]=c.a}return He(n(i))}function Bt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function vd(e){return a(P0,e.length,function(r){return e[r]})}function Hr(e,r){return ir(a(Rc,"Expecting "+e,r))}function da(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return da(e.b,r.b);case 6:return e.d===r.d&&da(e.b,r.b);case 7:return e.e===r.e&&da(e.b,r.b);case 9:return e.f===r.f&&Kl(e.g,r.g);case 10:return e.h===r.h&&da(e.b,r.b);case 11:return Kl(e.g,r.g)}}function Kl(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!da(e[t],r[t]))return!1;return!0}var fd=v(function(e,r){return JSON.stringify(r,null,e)+""});function D$(e){return e}function md(){return[]}function sd(){return{}}var dd=M(function(e,r,n){return n[e]=r,n});function pd(e){return v(function(r,n){return n.push(e(r)),n})}function na(e){return{$:0,a:e}}function gd(e){return{$:1,a:e}}function mn(e){return{$:2,b:e,c:null}}var No=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function hd(e){return{$:5,b:e}}var bd=0;function Pc(e){var r={$:0,e:bd++,f:e,g:null,h:[]};return zc(r),r}function V$(e){return mn(function(r){r(na(Pc(e)))})}function A$(e,r){e.h.push(r),zc(e)}var _d=v(function(e,r){return mn(function(n){A$(e,r),n(na(yt))})}),so=!1,Xl=[];function zc(e){if(Xl.push(e),!so){for(so=!0;e=Xl.shift();)yd(e);so=!1}}function yd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,zc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return Mc(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function Mc(e,r,n,t,i,o){var c=a(k$,e,r?r.flags:void 0);Ar(c)||Fa(2);var l={},u=n(c.a),f=u.a,m=o(b,f),d=xd(l,b);function b(s,y){var _=a(t,s,f);m(f=_.a,y),eu(l,_.b,i(f))}return eu(l,u.b,i(f)),d?{ports:d}:{}}var qr={};function xd(e,r){var n;for(var t in qr){var i=qr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Sd(i,r)}return n}function wd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Sd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(No,l,hd(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?L(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=Pc(a(No,l,e.b))}var Cd=v(function(e,r){return mn(function(n){e.g(r),n(na(yt))})});v(function(e,r){return a(_d,e.h,{$:0,a:r})});function F$(e){return function(r){return{$:1,k:e,l:r}}}function Ld(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Ql=[],po=!1;function eu(e,r,n){if(Ql.push({p:e,q:r,r:n}),!po){po=!0;for(var t;t=Ql.shift();)Pd(t.p,t.q,t.r);po=!1}}function Pd(e,r,n){var t={};ui(!0,r,t,null),ui(!1,n,t,null);for(var i in e)A$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ui(e,r,n,t){switch(r.$){case 1:var i=r.k,o=zd(e,i,t,r.l);n[i]=Md(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)ui(e,c.a,n,t);return;case 3:ui(e,r.o,n,{s:r.n,t});return}}function zd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?qr[r].e:qr[r].f;return a(o,i,t)}function Md(e,r,n){return n=n||{i:D,j:D},e?n.i=Zr(r,n.i):n.j=Zr(r,n.j),n}function Td(e){qr[e]&&Fa(3)}v(function(e,r){return r});function kd(e,r){return Td(e),qr[e]={f:Dd,u:r,a:Vd},F$(e)}var Dd=v(function(e,r){return function(n){return e(r(n))}});function Vd(e,r){var n=D,t=qr[e].u,i=na(null);qr[e].b=i,qr[e].c=M(function(c,l,u){return n=l,i});function o(c){var l=a(k$,t,c);Ar(l)||Fa(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var $i,on=typeof document!="undefined"?document:{};function Tc(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(_n(e,function(){}),i),{}});function Go(e){return{$:0,a:e}}var I$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Dc(n),e:i,f:e,b:o}})}),sn=I$(void 0),Ad=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Dc(n),e:i,f:e,b:o}})}),Fd=Ad(void 0);function Id(e,r,n,t){return{$:3,d:Dc(e),g:r,h:n,i:t}}var Ed=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Tn([e,r],function(){return e(r)})});M(function(e,r,n){return Tn([e,r,n],function(){return a(e,r,n)})});var Bd=ee(function(e,r,n,t){return Tn([e,r,n,t],function(){return h(e,r,n,t)})});Ze(function(e,r,n,t,i){return Tn([e,r,n,t,i],function(){return L(e,r,n,t,i)})});gr(function(e,r,n,t,i,o){return Tn([e,r,n,t,i,o],function(){return V(e,r,n,t,i,o)})});Fi(function(e,r,n,t,i,o,c){return Tn([e,r,n,t,i,o,c],function(){return Je(e,r,n,t,i,o,c)})});ze(function(e,r,n,t,i,o,c,l){return Tn([e,r,n,t,i,o,c,l],function(){return Cc(e,r,n,t,i,o,c,l)})});Sc(function(e,r,n,t,i,o,c,l,u){return Tn([e,r,n,t,i,o,c,l,u],function(){return _t(e,r,n,t,i,o,c,l,u)})});var E$=v(function(e,r){return{$:"a0",n:e,o:r}}),Rd=v(function(e,r){return{$:"a1",n:e,o:r}}),kc=v(function(e,r){return{$:"a2",n:e,o:r}}),jr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function B$(e){return e=="script"?"p":e}function jd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Nd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Gd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function R$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Wd=v(function(e,r){return r.$==="a0"?a(E$,r.n,Hd(e,r.o)):r});function Hd(e,r){var n=Wc(r);return{$:r.$,a:n?h(z0,n<3?Ud:Od,ur(e),r.a):a(si,e,r.a)}}var Ud=v(function(e,r){return P(e(r.a),r.b)}),Od=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function Dc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?ru(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?ru(c,i,o):c[i]=o}return r}function ru(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function _n(e,r){var n=e.$;if(n===5)return _n(e.k||(e.k=e.m()),r);if(n===0)return on.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=_n(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Wo(c,r,e.d),c}var c=e.f?on.createElementNS(e.f,e.c):on.createElement(e.c);$i&&e.c=="a"&&c.addEventListener("click",$i(c)),Wo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Tc(c,_n(n===1?l[u]:l[u].b,r));return c}function Wo(e,r,n){for(var t in n){var i=n[t];t==="a1"?Jd(e,i):t==="a0"?Zd(e,r,i):t==="a3"?qd(e,i):t==="a4"?Yd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Jd(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function qd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Yd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Zd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Kd(r,o),e.addEventListener(i,c,Vc&&{passive:Wc(o)<2}),t[i]=c}}var Vc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Vc=!0}}))}catch{}function Kd(e,r){function n(t){var i=n.q,o=Lr(i.a,t);if(!!Ar(o)){for(var c=Wc(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dH,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Xd(e,r){return e.$==r.$&&da(e.a,r.a)}function j$(e,r){var n=[];return Fr(e,r,n,0),n}function tr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Fr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=op(r),o=1;else{tr(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Fr(e.k,r.k,m,0),m.length>0&&tr(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,s=!1,y=e.k;y.$===4;)s=!0,typeof d!="object"?d=[d,y.j]:d.push(y.j),y=y.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){tr(n,0,t,r);return}(s?!Qd(d,b):d!==b)&&tr(n,2,t,b),Fr(y,_,n,t+1);return;case 0:e.a!==r.a&&tr(n,3,t,r.a);return;case 1:nu(e,r,n,t,ep);return;case 2:nu(e,r,n,t,rp);return;case 3:if(e.h!==r.h){tr(n,0,t,r);return}var S=Ac(e.d,r.d);S&&tr(n,4,t,S);var C=r.i(e.g,r.g);C&&tr(n,5,t,C);return}}}function Qd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function nu(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){tr(n,0,t,r);return}var o=Ac(e.d,r.d);o&&tr(n,4,t,o),i(e,r,n,t)}function Ac(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Ac(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Xd(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function ep(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?tr(n,6,t,{v:l,i:c-l}):c<l&&tr(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Fr(m,o[f],n,++t),t+=m.b||0}}function rp(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,d=0,b=0,s=t;d<f&&b<m;){var y=l[d],_=u[b],S=y.a,C=_.a,x=y.b,T=_.b,H=void 0,X=void 0;if(S===C){s++,Fr(x,T,i,s),s+=x.b||0,d++,b++;continue}var ae=l[d+1],te=u[b+1];if(ae){var ie=ae.a,re=ae.b;X=C===ie}if(te){var q=te.a,de=te.b;H=S===q}if(H&&X){s++,Fr(x,de,i,s),Ha(o,i,S,T,b,c),s+=x.b||0,s++,Ua(o,i,S,re,s),s+=re.b||0,d+=2,b+=2;continue}if(H){s++,Ha(o,i,C,T,b,c),Fr(x,de,i,s),s+=x.b||0,d+=1,b+=2;continue}if(X){s++,Ua(o,i,S,x,s),s+=x.b||0,s++,Fr(re,T,i,s),s+=re.b||0,d+=2,b+=1;continue}if(ae&&ie===q){s++,Ua(o,i,S,x,s),Ha(o,i,C,T,b,c),s+=x.b||0,s++,Fr(re,de,i,s),s+=re.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var y=l[d],x=y.b;Ua(o,i,y.a,x,s),s+=x.b||0,d++}for(;b<m;){var pe=pe||[],_=u[b];Ha(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&tr(n,8,t,{w:i,x:c,y:pe})}var N$="_elmW6BL";function Ha(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Fr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ha(e,r,n+N$,t,i,o)}function Ua(e,r,n,t,i){var o=e[n];if(!o){var c=tr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Fr(t,o.z,l,i),tr(r,9,i,{w:l,A:o});return}Ua(e,r,n+N$,t,i)}function G$(e,r,n,t){Oa(e,r,n,0,0,r.b,t)}function Oa(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)G$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Oa(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var m=d.w;m.length>0&&Oa(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Oa(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,S=0;S<y.length;S++){i++;var C=b===1?y[S]:y[S].b,x=i+(C.b||0);if(i<=u&&u<=x&&(t=Oa(_[S],C,n,t,i,x,c),!(l=n[t])||(u=l.r)>o))return t;i=x}return t}function W$(e,r,n,t){return n.length===0?e:(G$(e,r,n,t),vi(e,n))}function vi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=np(i,t);i===e&&(e=o)}return e}function np(e,r){switch(r.$){case 0:return ap(e,r.s,r.u);case 4:return Wo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return vi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(_n(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=vi(e,o.w),e;case 8:return tp(e,r);case 5:return r.s(e);default:Fa(10)}}function ap(e,r,n){var t=e.parentNode,i=_n(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function tp(e,r){var n=r.s,t=ip(n.y,r);e=vi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:_n(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&Tc(e,t),e}function ip(e,r){if(!!e){for(var n=on.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Tc(n,o.c===2?o.s:_n(o.z,r.u))}return n}}function Fc(e){if(e.nodeType===3)return Go(e.textContent);if(e.nodeType!==1)return Go("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Zr(a(jr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Zr(Fc(f[t]),u);return h(sn,l,r,u)}function op(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var cp=ee(function(e,r,n,t){return Mc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=t.node,u=Fc(l);return H$(o,function(f){var m=c(f),d=j$(u,m);l=W$(l,u,d,i),u=m})})});ee(function(e,r,n,t){return Mc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=on.title,f=on.body,m=Fc(f);return H$(o,function(d){$i=c;var b=l(d),s=sn("body")(D)(b.fU),y=j$(m,s);f=W$(f,m,y,i),m=s,$i=0,u!==b.id&&(on.title=u=b.id)})})});var fi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function H$(e,r){r(e);var n=0;function t(){n=n===1?0:(fi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&fi(t),n=2)}}v(function(e,r){return a(Uc,wt,mn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Uc,wt,mn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Uc,wt,mn(function(){history.replaceState({},"",r),e()}))});var lp={addEventListener:function(){},removeEventListener:function(){}},up=typeof window!="undefined"?window:lp;M(function(e,r,n){return V$(mn(function(t){function i(o){Pc(n(o))}return e.addEventListener(r,i,Vc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Lr(e,r);return Ar(n)?Y(n.a):J});function U$(e,r){return mn(function(n){fi(function(){var t=document.getElementById(e);n(t?na(r(t)):gd(M0(e)))})})}function $p(e){return mn(function(r){fi(function(){r(na(e()))})})}v(function(e,r){return U$(r,function(n){return n[e](),yt})});v(function(e,r){return $p(function(){return up.scroll(e,r),yt})});M(function(e,r,n){return U$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,yt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var vp=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return Y(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var fp=M(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?Y(d):J}t.push(L(Df,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(t)});ee(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?Y(f):J}return n(L(Df,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var mp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/sp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function sp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ic=new Float64Array(3),au=new Float64Array(3),tu=new Float64Array(3),dp=M(function(e,r,n){return new Float64Array([e,r,n])}),pp=function(e){return e[0]},gp=function(e){return e[1]},hp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var bp=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function O$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(O$);function J$(e,r,n){return n===void 0&&(n=new Float64Array(3)),mi(O$(e,r,n),n)}v(J$);function q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function mi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/q$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var _p=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ja=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ja);function Ho(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Ho);v(function(e,r){var n,t=Ic,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ja(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ja(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ja(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ja(r,t)+e[14])/n,i});var yp=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var xp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},wp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Sp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Sp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Cp=new Float64Array(16),Lp=new Float64Array(16),Pp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},zp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function Y$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}gr(Y$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return Y$(c,l,o,i,n,t)});function Z$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}gr(Z$);ee(function(e,r,n,t){return Z$(e,r,n,t,-1,1)});function K$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],y=e[11],_=e[12],S=e[13],C=e[14],x=e[15],T=r[0],H=r[1],X=r[2],ae=r[3],te=r[4],ie=r[5],re=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],F=r[14],I=r[15];return n[0]=t*T+l*H+d*X+_*ae,n[1]=i*T+u*H+b*X+S*ae,n[2]=o*T+f*H+s*X+C*ae,n[3]=c*T+m*H+y*X+x*ae,n[4]=t*te+l*ie+d*re+_*q,n[5]=i*te+u*ie+b*re+S*q,n[6]=o*te+f*ie+s*re+C*q,n[7]=c*te+m*ie+y*re+x*q,n[8]=t*de+l*pe+d*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=c*de+m*pe+y*Me+x*Se,n[12]=t*me+l*Te+d*F+_*I,n[13]=i*me+u*Te+b*F+S*I,n[14]=o*me+f*Te+s*F+C*I,n[15]=c*me+m*Te+y*F+x*I,n}v(K$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],y=e[14],_=r[0],S=r[1],C=r[2],x=r[4],T=r[5],H=r[6],X=r[8],ae=r[9],te=r[10],ie=r[12],re=r[13],q=r[14];return n[0]=t*_+c*S+f*C,n[1]=i*_+l*S+m*C,n[2]=o*_+u*S+d*C,n[3]=0,n[4]=t*x+c*T+f*H,n[5]=i*x+l*T+m*H,n[6]=o*x+u*T+d*H,n[7]=0,n[8]=t*X+c*ae+f*te,n[9]=i*X+l*ae+m*te,n[10]=o*X+u*ae+d*te,n[11]=0,n[12]=t*ie+c*re+f*q+b,n[13]=i*ie+l*re+m*q+s,n[14]=o*ie+u*re+d*q+y,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=mi(r,Ic);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/q$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=c*m,s=l*m,y=o*c*f,_=o*l*f,S=c*l*f,C=o*o*f+u,x=y+s,T=_-b,H=y-s,X=c*c*f+u,ae=S+d,te=_+b,ie=S-d,re=l*l*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],F=n[7],I=n[8],E=n[9],B=n[10],j=n[11],N=n[12],G=n[13],W=n[14],Ge=n[15];return t[0]=q*C+Se*x+I*T,t[1]=de*C+me*x+E*T,t[2]=pe*C+Te*x+B*T,t[3]=Me*C+F*x+j*T,t[4]=q*H+Se*X+I*ae,t[5]=de*H+me*X+E*ae,t[6]=pe*H+Te*X+B*ae,t[7]=Me*H+F*X+j*ae,t[8]=q*te+Se*ie+I*re,t[9]=de*te+me*ie+E*re,t[10]=pe*te+Te*ie+B*re,t[11]=Me*te+F*ie+j*re,t[12]=N,t[13]=G,t[14]=W,t[15]=Ge,t});function Mp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Mp);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Tp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Tp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],m=t[5],d=t[6],b=t[7],s=t[8],y=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=y,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=c*e+m*r+y*n+t[13],i[14]=l*e+d*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],y=r[8],_=r[9],S=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=y,n[9]=_,n[10]=S,n[11]=C,n[12]=c*t+m*i+y*o+r[12],n[13]=l*t+d*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=J$(e,r,Ic),i=mi(Ho(n,t,au),au),o=mi(Ho(t,i,tu),tu),c=Cp,l=Lp;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,K$(c,l)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var iu=0;function ot(e,r){for(;r.b;r=r.b)e(r.a)}function Ec(e){for(var r=0;e.b;e=e.b)r++;return r}var kp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Dp=Ze(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Vp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Ap=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Fp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Ip=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ep=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Bp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Rp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),jp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Np=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Gp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Wp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Hp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},X$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Q$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Up=function(e){e.gl.disable(e.gl.CULL_FACE)},Op=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Jp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},qp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ou=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Yp=[Gp,Wp,Hp,X$,Q$,Up,Op,Jp,qp];function cu(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Zp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function ev(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Kp(e,r,n,t){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(s,y,_,S,C){var x;if(i===1)for(x=0;x<y;x++)s[_++]=y===1?S[C]:S[C][x];else o.forEach(function(T){for(x=0;x<y;x++)s[_++]=y===1?S[T][C]:S[T][C][x]})}var u=ev(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(Ec(n.b)*m);ot(function(s){l(d,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function Xp(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Qp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Ec(r.b),indexBuffer:null,buffers:{}}}function Qp(e,r){var n=new Uint32Array(Ec(e)*r),t=0,i;return ot(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function lu(e,r){return e+"#"+r}var rv=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),X$(n),Q$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=lu(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=iu++,f||(f=cu(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=iu++,m||(m=cu(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=Zp(t,f,m);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=e0(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(d,u),y=t.getAttribLocation(d,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(y)}c=lu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),r0(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Xp(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],y=l.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=Kp(t,s,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=ev(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,x=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(y+T),t.vertexAttribPointer(y+T,S.size,S.baseType,!1,x,C*T)}for(n.toggle=!n.toggle,ot(X_(n),o.a),u=0;u<ou.length;u++){var H=n[ou[u]];H.toggle!==n.toggle&&H.enabled&&(Yp[u](n),H.enabled=!1,H.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return ot(i,e.g),r});function e0(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(s,y){var _=y.name,S=e.getUniformLocation(s,_);switch(y.type){case e.INT:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};case e.FLOAT:return function(x){o[_]!==x&&(e.uniform1f(S,x),o[_]=x)};case e.FLOAT_VEC2:return function(x){o[_]!==x&&(e.uniform2f(S,x[0],x[1]),o[_]=x)};case e.FLOAT_VEC3:return function(x){o[_]!==x&&(e.uniform3f(S,x[0],x[1],x[2]),o[_]=x)};case e.FLOAT_VEC4:return function(x){o[_]!==x&&(e.uniform4f(S,x[0],x[1],x[2],x[3]),o[_]=x)};case e.FLOAT_MAT4:return function(x){o[_]!==x&&(e.uniformMatrix4fv(S,!1,new Float32Array(x)),o[_]=x)};case e.SAMPLER_2D:var C=c++;return function(x){e.activeTexture(e.TEXTURE0+C);var T=l.textures.get(x);T||(T=x.ge(e),l.textures.set(x,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==x&&(e.uniform1i(S,C),o[_]=x)};case e.BOOL:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=u(i,b)}return f}function r0(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var n0=M(function(e,r,n){return Id(r,{g:n,f:{},h:e},u0,$0)}),a0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),t0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),i0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),o0=v(function(e,r){e.contextAttributes.antialias=!0}),c0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),l0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function u0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ot(function(i){return a(K_,r,i)},e.h);var n=on.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),kp(function(){return a(rv,e,n)})):(n=on.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function $0(e,r){return r.f=e.f,rv(r)}var z=bs,Rt=ps,nv=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Rt,e,l,f)}else{var u=c.a;return h(Rt,o,l,u)}});return h(Rt,o,h(Rt,e,r,i),t)}),Bc=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(Bc,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),uu=function(e){return h(Bc,M(function(r,n,t){return a(z,P(r,n),t)}),D,e)},av=1,v0=2,tv=0,ir=function(e){return{$:1,a:e}},Rc=v(function(e,r){return{$:3,a:e,b:r}}),$u=v(function(e,r){return{$:0,a:e,b:r}}),iv=v(function(e,r){return{$:1,a:e,b:r}}),He=function(e){return{$:0,a:e}},f0=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},J={$:1},m0=Os,s0=fd,k=T$,le=v(function(e,r){return a(Gs,e,Ii(r))}),jc=v(function(e,r){return $(a(Ns,e,r))}),ov=function(e){return a(le,`
    `,a(jc,`
`,e))},Ne=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Xn=function(e){return h(Ne,v(function(r,n){return n+1}),0,e)},d0=_s,p0=M(function(e,r,n){e:for(;;)if(be(e,r)<1){var t=e,i=r-1,o=a(z,r,n);e=t,r=i,n=o;continue e}else return n}),cn=v(function(e,r){return h(p0,e,r,D)}),cv=v(function(e,r){return h(d0,e,a(cn,0,Xn(r)-1),r)}),Yr=Qs,lv=function(e){var r=Yr(e);return 97<=r&&r<=122},uv=function(e){var r=Yr(e);return r<=90&&65<=r},g0=function(e){return lv(e)||uv(e)},h0=function(e){var r=Yr(e);return r<=57&&48<=r},b0=function(e){return lv(e)||uv(e)||h0(e)},sr=function(e){return h(Ne,z,D,e)},Ia=Es,_0=v(function(e,r){return`

(`+(k(e+1)+(") "+ov(y0(r))))}),y0=function(e){return a(x0,e,D)},x0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=Ia(n);if(_.$===1)return!1;var S=_.a,C=S.a,x=S.b;return g0(C)&&a(m0,b0,x)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(z,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),u=c,f=a(z,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",sr(r)):"Json.Decode.oneOf"}(),y=d+(" failed in the following "+(k(Xn(m))+" ways:"));return a(le,`

`,a(z,y,a(cv,_0,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",sr(r)):"!"}();default:var b=e.a,s=e.b,y=function(){return r.b?"Problem with the value at json"+(a(le,"",sr(r))+`:

    `):`Problem with the given value:

`}();return y+(ov(a(s0,4,s))+(`

`+b))}}),xr=32,Uo=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Oo=vs,ct=Ts,Nc=v(function(e,r){return Yl(r)/Yl(e)}),qa=zs,lt=ct(a(Nc,2,xr)),$v=L(Uo,0,lt,Oo,Oo),vv=ms,fv=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var mv=ks,Jo=fs,ar=v(function(e,r){return be(e,r)>0?e:r}),w0=function(e){return{$:0,a:e}},Gc=ss,S0=v(function(e,r){e:for(;;){var n=a(Gc,xr,e),t=n.a,i=n.b,o=a(z,w0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return sr(o)}}),sv=function(e){var r=e.a;return r},C0=v(function(e,r){e:for(;;){var n=ct(r/xr);if(n===1)return a(Gc,xr,e).a;var t=a(S0,e,D),i=n;e=t,r=i;continue e}}),dv=v(function(e,r){if(r.n){var n=r.n*xr,t=mv(a(Nc,xr,n-1)),i=e?sr(r.C):r.C,o=a(C0,i,r.n);return L(Uo,Jo(r.r)+n,a(ar,5,t*lt),o,r.r)}else return L(Uo,Jo(r.r),lt,Oo,r.r)}),L0=Ze(function(e,r,n,t,i){e:for(;;){if(r<0)return a(dv,!1,{C:t,n:n/xr|0,r:i});var o=fv(h(vv,xr,r,e)),c=e,l=r-xr,u=n,f=a(z,o,t),m=i;e=c,r=l,n=u,t=f,i=m;continue e}}),P0=v(function(e,r){if(e<=0)return $v;var n=e%xr,t=h(vv,n,e-n,r),i=e-n-xr;return V(L0,r,i,e,D,t)}),Ar=function(e){return!e.$},Q=ld,Pe=ad,K=cd,Ue=td,pv=v(function(e,r){return{bt:r.bt,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),si=ud,z0=$d,ur=rd,Wc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Br=function(e){return e},M0=Br,vu=gr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),T0=Js,Nn=Bs,pa=Ws,xt=v(function(e,r){return e<1?r:h(pa,e,Nn(r),r)}),Ei=Ys,Bi=function(e){return e===""},Ri=v(function(e,r){return e<1?"":h(pa,0,e,r)}),gv=Zs,fu=Ze(function(e,r,n,t,i){if(Bi(i)||a(T0,"@",i))return J;var o=a(Ei,":",i);if(o.b){if(o.b.b)return J;var c=o.a,l=gv(a(xt,c+1,i));if(l.$===1)return J;var u=l;return Y(Je(vu,e,a(Ri,c,i),u,r,n,t))}else return Y(Je(vu,e,i,J,r,n,t))}),mu=ee(function(e,r,n,t){if(Bi(t))return J;var i=a(Ei,"/",t);if(i.b){var o=i.a;return V(fu,e,a(xt,o,t),r,n,a(Ri,o,t))}else return V(fu,e,"/",r,n,t)}),su=M(function(e,r,n){if(Bi(n))return J;var t=a(Ei,"?",n);if(t.b){var i=t.a;return L(mu,e,Y(a(xt,i+1,n)),r,a(Ri,i,n))}else return L(mu,e,J,r,n)});v(function(e,r){if(Bi(r))return J;var n=a(Ei,"#",r);if(n.b){var t=n.a;return h(su,e,Y(a(xt,t+1,r)),a(Ri,t,r))}else return h(su,e,J,r)});var k0=qs,wt=function(e){},St=na,D0=St(0),hv=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(Ne,e,r,sr(d)):L(hv,e,r,n+1,d);return a(e,i,a(e,c,a(e,u,a(e,m,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),rr=M(function(e,r,n){return L(hv,e,r,0,n)}),ne=v(function(e,r){return h(rr,v(function(n,t){return a(z,e(n),t)}),D,r)}),di=No,Hc=v(function(e,r){return a(di,function(n){return St(e(n))},r)}),V0=M(function(e,r,n){return a(di,function(t){return a(di,function(i){return St(a(e,t,i))},n)},r)}),A0=function(e){return h(rr,V0(z),St(D),e)},F0=Cd,I0=v(function(e,r){var n=r;return V$(a(di,F0(e),n))}),E0=M(function(e,r,n){return a(Hc,function(t){return 0},A0(a(ne,I0(e),r)))}),B0=M(function(e,r,n){return St(0)}),R0=v(function(e,r){var n=r;return a(Hc,e,n)});qr.Task=wd(D0,E0,B0,R0);var j0=F$("Task"),Uc=v(function(e,r){return j0(a(Hc,e,r))}),N0=cp,G0=Fs,pi={$:1},bv=function(e){return{$:2,a:e}},Oc={$:0},zr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=M(function(e,r,n){return r(e(n))}),aa=function(e){var r=e.b.s;return r.a},W0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return Y(a(zr,r,{s:o,an:c,X:a(z,t,n)}))}else return J},Ae=v(function(e,r){if(r.$)return e;var n=r.a;return n}),H0=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dI;return(be(o+r.gp,aa(n).bt)>0?a(Xe,W0,Ae(a(zr,pi,i))):Br)(a(zr,bv({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,f=a(pv,l.gb,Re(r,{bt:l.bt+r.gp})),m=a(e,f,u);return a(zr,Oc,{s:P(f,m),an:D,X:a(z,i.s,i.X)})}}),_v=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),U0=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(z,t,n);e=o,r=c,n=l;continue e}else return n}}),O0=v(function(e,r){return sr(h(U0,e,r,D))}),yv=M(function(e,r,n){if(r<=0)return D;{var t=P(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(t.b.b.b.b){var l=t.b,x=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([x,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,x=d.a,b=d.b,c=b.a,s=b.b,m=s.a,y=s.b,_=y.a,S=y.b;return e>1e3?a(z,x,a(z,c,a(z,m,a(z,_,a(O0,r-4,S))))):a(z,x,a(z,c,a(z,m,a(z,_,h(yv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,x=C.a;return $([x])}}),J0=v(function(e,r){return h(yv,0,e,r)}),q0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Z(sr(n),Z($([t]),i)),c=a(J0,e,o),l=a(_v,e,o);if(l.b){var u=l.a,f=l.b;return a(zr,pi,{s:u,an:f,X:sr(c)})}else{var m=sr(c);if(m.b){var d=m.a,b=m.b;return a(zr,pi,{s:d,an:D,X:b})}else return r}}),Y0=function(e){var r=e.b;return a(zr,pi,r)},Z0=function(e){var r=e.b;return a(zr,bv({dI:aa(e).bt}),r)},K0=function(e){var r=e.b;return a(zr,Oc,r)},X0=v(function(e,r){switch(e.$){case 1:return Y0(r);case 2:return K0(r);case 3:return Z0(r);default:var n=e.a;return a(q0,n,r)}}),gi=v(function(e,r){var n=r.a,t=r.b;return P(e(n),t)}),Q0=v(function(e,r){return Re(r,{aN:e(r.aN)})}),eg=function(e){return{$:3,a:e}},rg=function(e){return{$:2,a:e}},xv=v(function(e,r){return{$:0,a:e,b:r}}),ng=v(function(e,r){return{$:1,a:e,b:r}}),je=v(function(e,r){if(r.$)return J;var n=r.a;return Y(e(n))}),he=function(e){return e<0?-e:e},wv=Ks,ag=M(function(e,r,n){return a(Ae,0/0,wv(a(e,r,n)))}),Ct=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),tg=js,Sv=function(e){return h(tg,z,D,e)},ig=v(function(e,r){var n=a(Ct,function(t){return t!=="0"&&t!=="."},Sv(r));return Z(e&&n?"-":"",r)}),ve=T$,qo=Is,Cv=ed,Lv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ia(n);if(t.$===1)return"01";var i=t.a;return a(qo,"0",Lv(i))}else{var o=Yr(r);return o>=48&&o<57?a(qo,Cv(o+1),n):"0"}},Yo=Ms,og=As,ji=function(e){return a(qo,e,"")},Pv=M(function(e,r,n){return e<=0?n:h(Pv,e>>1,Z(r,r),e&1?Z(n,r):n)}),ut=v(function(e,r){return h(Pv,e,r,"")}),Zo=M(function(e,r,n){return Z(n,a(ut,e-Nn(n),ji(r)))}),Ko=Rs,zv=function(e){var r=a(jc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},cg=function(e){var r=a(jc,"e",ve(he(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ae,0,gv(a(k0,"+",i)?a(xt,1,i):i)),c=zv(n),l=c.a,u=c.b,f=Z(l,u),m=o<0?a(Ae,"0",a(je,function(d){var b=d.a,s=d.b;return b+("."+s)},a(je,gi(ji),Ia(Z(a(ut,he(o),"0"),f))))):h(Zo,o+1,"0",f);return Z(e<0?"-":"",m)}else{var n=r.a;return Z(e<0?"-":"",n)}else return""},lg=M(function(e,r,n){if(Yo(n)||og(n))return ve(n);var t=n<0,i=zv(cg(he(n))),o=i.a,c=i.b,l=Nn(o)+r,u=Z(a(ut,-l+1,"0"),h(Zo,l,"0",Z(o,c))),f=Nn(u),m=a(ar,1,l),d=a(e,t,h(pa,m,f,u)),b=h(pa,0,m,u),s=d?Ko(a(Ae,"1",a(je,Lv,Ia(Ko(b))))):b,y=Nn(s),_=s==="0"?s:r<=0?Z(s,a(ut,he(r),"0")):be(r,Nn(c))<0?h(pa,0,y-r,s)+("."+h(pa,y-r,y,s)):Z(o+".",h(Zo,r,"0",c));return a(ig,t,_)}),Mv=lg(v(function(e,r){var n=Ia(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Yr(i))})),ug=ag(Mv),$g=M(function(e,r,n){var t=a(Nc,10,he(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(ug,i,n)}),Tv=hs,Ni=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(Tv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return Y(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Ze(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Kr={$:-2},Pa=Ze(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return V(fe,0,r,n,V(fe,1,f,m,d,b),V(fe,1,o,c,l,u))}else return V(fe,e,o,c,V(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var y=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return V(fe,0,f,m,V(fe,1,y,_,S,C),V(fe,1,r,n,b,i))}else return V(fe,e,r,n,t,i)}),Xo=M(function(e,r,n){if(n.$===-2)return V(fe,0,e,r,Kr,Kr);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(Tv,e,i);switch(u){case 0:return V(Pa,t,i,o,h(Xo,e,r,c),l);case 1:return V(fe,t,i,r,c,l);default:return V(Pa,t,i,o,c,h(Xo,e,r,l))}}),ya=M(function(e,r,n){var t=h(Xo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return V(fe,1,i,o,c,l)}else{var u=t;return u}}),vg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},kv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,y=b.c,_=b.d,S=b.e,C=f.e;return V(fe,0,s,y,V(fe,1,n,t,V(fe,0,o,c,l,u),_),V(fe,1,m,d,S,C))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,T=e.e;T.a;var m=T.b,d=T.c,b=T.d,C=T.e;return V(fe,1,n,t,V(fe,0,o,c,l,u),V(fe,0,m,d,b,C))}else return e},du=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,d=l.e,b=i.e,s=e.e;s.a;var y=s.b,_=s.c,S=s.d,C=s.e;return V(fe,0,o,c,V(fe,1,u,f,m,d),V(fe,1,n,t,b,V(fe,0,y,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,T=x.d,b=x.e,H=e.e;H.a;var y=H.b,_=H.c,S=H.d,C=H.e;return V(fe,1,n,t,V(fe,0,o,c,T,b),V(fe,0,y,_,S,C))}else return e},fg=Fi(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return V(fe,n,l,u,f,V(fe,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,du(r)}else break e;else return c.a,c.d,du(r);else break e;return r}}),Qt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(fe,r,n,t,Qt(i),l);var u=kv(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return V(Pa,f,m,d,Qt(b),s)}else return Kr}else return V(fe,r,n,t,Qt(i),l)}else return Kr},rt=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(be(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(fe,n,t,i,a(rt,e,o),c);var u=kv(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return V(Pa,f,m,d,a(rt,e,b),s)}else return Kr}else return V(fe,n,t,i,a(rt,e,o),c);else return a(mg,e,Cc(fg,e,r,n,t,i,o,c))}),mg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(_e(e,t)){var l=vg(c);if(l.$===-1){var u=l.b,f=l.c;return V(Pa,n,u,f,o,Qt(c))}else return Kr}else return V(Pa,n,t,i,o,a(rt,e,c))}else return Kr}),sg=v(function(e,r){var n=a(rt,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return V(fe,1,t,i,o,c)}else{var l=n;return l}}),jt=M(function(e,r,n){var t=r(a(Ni,e,n));if(t.$)return a(sg,e,n);var i=t.a;return h(ya,e,i,n)}),dg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(jt,r,je(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(ng,P(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(jt,r,je(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(xv,P(o,c),h($g,o,c,n))}));case 3:var r=e.a,n=e.b;return a(jt,r,je(function(t){return t.$===3?eg(n):t}));default:var r=e.a,n=e.b;return a(jt,r,je(function(t){return t.$===2?rg(n):t}))}},pg=function(e){return Q0(dg(e))},gg=v(function(e,r){return a(ne,pg(e),r)}),hg=v(function(e,r){return Re(r,{gb:a(gg,e,r.gb)})}),bg=v(function(e,r){var n=r.a,t=r.b;return a(zr,n,Re(t,{s:a(gi,hg(e),t.s)}))}),Qo=v(function(e,r){var n=r.a,t=r.b;return P(n,e(t))}),_g=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(zr,t,Re(i,{s:a(Qo,a(e,o.a,r),o)}))}),yg=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Re(t,{bx:!t.bx});case 2:var i=n.a;return Re(t,{R:h(H0,e,i,t.R)});case 3:var o=n.a;return Re(t,{bp:o});case 4:var c=n.a;return Re(t,{R:a(bg,c,t.R)});case 5:var l=n.a;return Re(t,{R:h(_g,r,l,t.R)});default:var u=n.a;return Re(t,{R:a(X0,u,t.R)})}}),xg=v(function(e,r){return a(zr,Oc,{s:P(e,r(e)),an:D,X:D})}),wg=Ld,pu=wg(D),Sg=function(e){return{$:2,a:e}},hi=od,za=id,Cg=kd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({bt:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return ur({fJ:d,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",hi(za)))},a(K,"left",Pe))},a(K,"pressedKeys",hi(za)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue))))),Lg=function(e){return e.dO,Cg(Sg)},Pg=function(e){return{$:5,a:e}},zg={$:0},bi=v(function(e,r){return e}),Mg=function(e){var r=e.b.s;return r.b},Tg=function(e){return{$:1,a:e}},kg=Tg,Dv=function(e){return{$:8,a:e}},we=Dv,$t=function(e){return{$:0,a:e}},Lt=M(function(e,r,n){return e(r(n))}),Dg=a(Lt,$t,bi),bn=Dg,Fe=function(e){return{$:1,a:e}},rn=Fe,Vv=v(function(e,r){return{$:9,a:e,b:r}}),Qn={$:0},Av=v(function(e,r){return r.$===3?Qn:a(Vv,e,r)}),ec=function(e){return a(Av,4,e)},p={fy:"a",cM:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cN:"ah",cO:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b2:"bn",fZ:"bs",b5:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bu:"cl",cc:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",cj:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cG:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Jc=D$,kr=v(function(e,r){return a(kc,e,Jc(r))}),Pr=kr("className"),yr=function(e){return Fe(Pr(e))},Fv=v(function(e,r){return{$:2,a:e,b:r}}),Vg=v(function(e,r){return{$:1,a:e,b:r}}),nr=function(e){return{$:0,a:e}},wr=2,Ag={$:0},ta=Ag,Fg={$:0},Ig=p.fK+(" "+p.aw),Eg=p.fK+(" "+p.gC),Bg=p.fK+(" "+p.eY),Rg=p.fK+(" "+p.eZ),jg=p.fK+(" "+p.af),Ng=p.fK+(" "+p.hL),Gg=function(e){switch(e){case 0:return jg;case 1:return Ig;case 2:return Ng;case 3:return Eg;case 4:return Rg;default:return Bg}},gu=function(e){return{$:1,a:e}},jn={$:0},rc=function(e){return{$:1,a:e}},hu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Z(n,e);case 2:var t=r.a;return Z(e,t);default:var n=r.a,t=r.b;return Z(n,Z(e,t))}}),bu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Z(a(ne,function(o){return P(e,o)},t),r);case 2:var i=n.a;return Z(r,a(ne,function(o){return P(e,o)},i));default:var t=n.a,i=n.b;return Z(a(ne,function(o){return P(e,o)},t),Z(r,a(ne,function(o){return P(e,o)},i)))}}),Nt=4,Wg=function(e){return{$:0,a:e}},Hg=function(e){return{$:1,a:e}},xe=function(e){return e>31?Hg(1<<e-32):Wg(1<<e)},Iv=xe(41),Ev=xe(40),Bv=xe(42),Rv=xe(43),Ma=sn("div"),qc=Kr,jv=qc,Or=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Or(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Or(o))}},Ee=Ds,Be=function(e){return k(Ee(e*255))},Yc=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Be(n)+("-"+(Be(t)+("-"+Be(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,y=s.a,_=s.b,S=s.c,C=e.d;return Y("tfrm-"+(Be(c)+("-"+(Be(l)+("-"+(Be(u)+("-"+(Be(m)+("-"+(Be(d)+("-"+(Be(b)+("-"+(Be(y)+("-"+(Be(_)+("-"+(Be(S)+("-"+Be(C))))))))))))))))))))}},vt=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(ne,Or,i.hB))+("-cols-"+(a(le,"-",a(ne,Or,i.ak))+("-space-x-"+(Or(i.hP.a)+("-space-y-"+Or(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(ne,function(m){var d=vt(m);if(d==="")return"";var b=d;return b+("-"+u)},l));default:var f=e.a;return a(Ae,"",Yc(f))}},Ug=v(function(e,r){var n=r;return h(ya,e,0,n)}),Og=v(function(e,r){var n=a(Ni,e,r);return!n.$}),Jg=v(function(e,r){var n=r;return a(Og,e,n)}),Nv=v(function(e,r){var n=r.a,t=r.b,i=vt(e);return a(Jg,i,n)?r:P(a(Ug,i,n),a(z,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),nt=v(function(e,r){return{$:0,a:e,b:r}}),w=function(e){return"."+e},qg=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(z,i,n)}),yn=v(function(e,r){return h(rr,qg(e),D,r)}),ga=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ee(r*255))+(","+k(Ee(n*255))+(","+k(Ee(t*255))+(","+(ve(i)+")")))))},nc=function(e){return a(le," ",a(yn,Br,$([e.ej?Y("inset"):J,Y(ve(e.eV.a)+"px"),Y(ve(e.eV.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bi)+"px"),Y(ga(e.b7))])))},Gv=function(e){return $([a(nt,w(p.ea)+":focus-within",a(yn,Br,$([a(je,function(r){return a(ue,"border-color",ga(r))},e.fW),a(je,function(r){return a(ue,"background-color",ga(r))},e.fO),a(je,function(r){return a(ue,"box-shadow",nc({a2:r.a2,b7:r.b7,ej:!1,eV:a(Qo,qa,a(gi,qa,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))]))),a(nt,w(p.fK)+":focus .focusable, "+(w(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(w(p.fK)+" .focusable-thumb"))),a(yn,Br,$([a(je,function(r){return a(ue,"border-color",ga(r))},e.fW),a(je,function(r){return a(ue,"background-color",ga(r))},e.fO),a(je,function(r){return a(ue,"box-shadow",nc({a2:r.a2,b7:r.b7,ej:!1,eV:a(Qo,qa,a(gi,qa,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))])))])},Ur=function(e){return sn(B$(e))},Wv=v(function(e,r){return a(kc,Nd(e),R$(r))}),go=v(function(e,r){return{$:2,a:e,b:r}}),Zc=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),hr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),Yg=v(function(e,r){return{$:3,a:e,b:r}}),Hv=$([0,1,2,3,4,5]),Zg=v(function(e,r){return r.b?h(rr,z,r,e):e}),dr=function(e){return h(rr,Zg,D,e)},Ea=v(function(e,r){return dr(a(ne,e,r))}),Kg=function(e){switch(e){case 0:return w(p.gc);case 1:return w(p.ca);case 2:return w(p.cc);case 3:return w(p.bu);case 4:return w(p.cb);default:return w(p.ax)}},_i=function(e){switch(e){case 0:return w(p.fH);case 1:return w(p.fA);case 2:return w(p.dZ);case 3:return w(p.dY);case 4:return w(p.fB);default:return w(p.fC)}},Ya=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,Kg(n),i),a(O,w(p.fK),$([a(A,_i(n),o)]))])};return Zc(a(Ea,r,Hv))},_u=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,w(p.c_),$([a(g,"z-index","0"),a(O,w(p.fQ),$([a(g,"z-index","-1")]))])),a(A,w(p.hG),$([a(O,w(p.Y),$([a(A,w(p.c0),$([a(g,"flex-grow","0")])),a(A,w(p.dQ),$([a(g,"align-self","auto !important")]))]))])),a(O,w(p.c$),$([a(g,"height","auto")])),a(O,w(p.c0),$([a(g,"flex-grow","100000")])),a(O,w(p.dQ),$([a(g,"width","100%")])),a(O,w(p.fv),$([a(g,"width","100%")])),a(O,w(p.dP),$([a(g,"align-self","flex-start")])),Ya(function(e){switch(e){case 0:return P($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return P($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return P($([a(O,w(p.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Xg=function(e){var r=function(n){return $([a(O,w(p.fK),$([a(A,_i(n),e(n))]))])};return Zc(a(Ea,r,Hv))},Qg=function(){return $([0,1,2,3,4,5])}(),eh=$([a(hr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(hr,Z(w(p.fK),Z(w(p.hL),w(p.gN))),$([a(g,"display","block"),a(A,w(p.c0),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,w(p.dQ),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(hr,w(p.fK)+":focus",$([a(g,"outline","none")])),a(hr,w(p.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Z(w(p.fK),w(p.c0)),$([a(g,"height","100%"),a(O,w(p.c0),$([a(g,"height","100%")]))])),a(O,w(p.gP),$([a(A,w(p.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(hr,w(p.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,w(p.hL),_u),Zc(function(e){return a(ne,e,Qg)}(function(e){switch(e){case 0:return a(A,w(p.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,w(p.c0),$([a(g,"height","auto")])),a(O,w(p.dQ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,w(p.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,w(p.c0),$([a(g,"height","auto")]))]));case 2:return a(A,w(p.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,w(p.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,w(p.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,w(p.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(hr,w(p.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,w(p.dR),$([a(g,"flex-wrap","wrap")])),a(A,w(p.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,w(p.gf),$([a(g,"cursor","pointer")])),a(A,w(p.gg),$([a(g,"cursor","text")])),a(A,w(p.hn),$([a(g,"pointer-events","none !important")])),a(A,w(p.b5),$([a(g,"pointer-events","auto !important")])),a(A,w(p.a$),$([a(g,"opacity","0")])),a(A,w(p.aU),$([a(g,"opacity","1")])),a(A,w(Z(p.gK,p.a$))+":hover",$([a(g,"opacity","0")])),a(A,w(Z(p.gK,p.aU))+":hover",$([a(g,"opacity","1")])),a(A,w(Z(p.gx,p.a$))+":focus",$([a(g,"opacity","0")])),a(A,w(Z(p.gx,p.aU))+":focus",$([a(g,"opacity","1")])),a(A,w(Z(p.cM,p.a$))+":active",$([a(g,"opacity","0")])),a(A,w(Z(p.cM,p.aU))+":active",$([a(g,"opacity","1")])),a(A,w(p.fj),$([a(g,"transition",a(le,", ",a(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,w(p.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,w(p.hE),$([a(g,"overflow-x","auto"),a(A,w(p.af),$([a(g,"flex-shrink","1")]))])),a(A,w(p.hF),$([a(g,"overflow-y","auto"),a(A,w(p.aw),$([a(g,"flex-shrink","1")])),a(A,w(p.hL),$([a(g,"flex-shrink","1")]))])),a(A,w(p.f7),$([a(g,"overflow","hidden")])),a(A,w(p.f8),$([a(g,"overflow-x","hidden")])),a(A,w(p.f9),$([a(g,"overflow-y","hidden")])),a(A,w(p.dP),$([a(g,"width","auto")])),a(A,w(p.b2),$([a(g,"border-width","0")])),a(A,w(p.fX),$([a(g,"border-style","dashed")])),a(A,w(p.fY),$([a(g,"border-style","dotted")])),a(A,w(p.fZ),$([a(g,"border-style","solid")])),a(A,w(p.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,w(p.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,w(p.hL),_u),a(A,w(p.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,w(p.fK),$([a(g,"flex-basis","0%"),a(A,w(p.fu),$([a(g,"flex-basis","auto")])),a(A,w(p.et),$([a(g,"flex-basis","auto")]))])),a(O,w(p.c0),$([a(g,"align-self","stretch !important")])),a(O,w(p.ef),$([a(g,"align-self","stretch !important")])),a(O,w(p.dQ),$([a(g,"flex-grow","100000")])),a(O,w(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+p.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,w(p.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,w(p.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([a(g,"flex-grow","0")])),Ya(function(e){switch(e){case 0:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return P($([a(g,"justify-content","flex-end")]),D);case 3:return P($([a(g,"justify-content","flex-start")]),D);case 4:return P($([a(g,"justify-content","center")]),D);default:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,w(p.hO),$([a(g,"justify-content","space-between")])),a(A,w(p.cj),$([a(g,"align-items","baseline")]))])),a(A,w(p.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,w(p.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,w(p.ee),$([a(g,"flex-basis","auto")]))])),a(O,w(p.c0),$([a(g,"flex-grow","100000")])),a(O,w(p.dQ),$([a(g,"width","100%")])),a(O,w(p.fv),$([a(g,"width","100%")])),a(O,w(p.dP),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+p.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([a(g,"flex-grow","0")])),Ya(function(e){switch(e){case 0:return P($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return P($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return P($([a(g,"justify-content","center")]),D)}}),a(O,w(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,w(p.hO),$([a(g,"justify-content","space-between")]))])),a(A,w(p.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,w(p.fK),$([a(g,"width","100%")]))])),a(Yg,P("display","grid"),$([P("display","grid")])),Xg(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,w(p.eY),$([a(g,"display","block"),a(O,w(p.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,w(p.fK+(_i(3)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),a(O,w(p.fK+(_i(2)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),Ya(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return P(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),a(A,w(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,w(p.gW),$([a(A,w(p.hL),$([a(g,"flex-basis","auto")]))])),a(A,w(p.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,w(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,w(p.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,w(p.c_),$([a(g,"z-index","0"),a(O,w(p.fQ),$([a(g,"z-index","-1")]))])),a(go,w(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(go,w(p.eZ),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(go,w(p.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,w(p.fu),$([a(g,"display","inline-block")])),a(A,w(p.gP),$([a(g,"display","flex")])),a(A,w(p.fQ),$([a(g,"display","flex")])),a(A,w(p.fy),$([a(g,"display","flex")])),a(A,w(p.fR),$([a(g,"display","flex")])),a(A,w(p.hh),$([a(g,"display","flex")])),a(A,w(p.hg),$([a(g,"display","flex")])),a(O,w(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,w(p.af),$([a(g,"display","inline")])),a(O,w(p.aw),$([a(g,"display","inline-flex")])),a(O,w(p.gC),$([a(g,"display","inline-grid")])),Ya(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([a(g,"float","right")]));case 3:return P(D,$([a(g,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,w(p.ia),$([a(g,"font-weight","100")])),a(A,w(p.h1),$([a(g,"font-weight","200")])),a(A,w(p.h5),$([a(g,"font-weight","300")])),a(A,w(p.h7),$([a(g,"font-weight","400")])),a(A,w(p.h6),$([a(g,"font-weight","500")])),a(A,w(p.h9),$([a(g,"font-weight","600")])),a(A,w(p.fV),$([a(g,"font-weight","700")])),a(A,w(p.h0),$([a(g,"font-weight","800")])),a(A,w(p.h2),$([a(g,"font-weight","900")])),a(A,w(p.g2),$([a(g,"font-style","italic")])),a(A,w(p.hU),$([a(g,"text-decoration","line-through")])),a(A,w(p.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Z(w(p.ih),w(p.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,w(p.ib),$([a(g,"font-style","normal")])),a(A,w(p.h3),$([a(g,"text-align","justify")])),a(A,w(p.cG),$([a(g,"text-align","justify-all")])),a(A,w(p.h$),$([a(g,"text-align","center")])),a(A,w(p.h8),$([a(g,"text-align","right")])),a(A,w(p.h4),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),dn=function(e){return $([a(hr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(hr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},rh=dr($([a(ne,function(e){return a(hr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(cn,0,6)),a(ne,function(e){return a(hr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(cn,8,32)),a(ne,function(e){return a(hr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(cn,0,24)),$([a(hr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(hr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),dn("zero"),dn("onum"),dn("liga"),dn("dlig"),dn("ordn"),dn("tnum"),dn("afrc"),dn("frac")])),nh=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),ah=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,th=`
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
`,ih=`
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
`,oh=`
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
`,ch="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(w(p.fK)+(w(p.af)+(" > "+(w(p.fK)+(" { flex-basis: auto !important; } "+(w(p.fK)+(w(p.af)+(" > "+(w(p.fK)+(w(p.b9)+(" { flex-basis: auto !important; }}"+(ah+(th+(oh+(ih+nh))))))))))))))),xa=function(e){return a(le,"",e)},fa=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),ma=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Re(o,{aE:a(z,P(c,l),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return Re(o,{G:a(z,{b6:`
}`,G:D,aE:d,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Re(o,{G:a(z,a(ma,a(fa,n.ag+(" + "+b),""),s),o.G)});case 1:var y=i.a,_=i.b;return Re(o,{G:a(z,a(ma,a(fa,n.ag+(" > "+y),""),_),o.G)});case 2:var y=i.a,_=i.b;return Re(o,{G:a(z,a(ma,a(fa,n.ag+(" "+y),""),_),o.G)});case 4:var S=i.a,C=i.b;return Re(o,{G:a(z,a(ma,a(fa,Z(n.ag,S),""),C),o.G)});default:var x=i.a;return Re(o,{G:a(z,a(ma,a(fa,n.ag,""),x),o.G)})}});return h(rr,t,n,r)}),lh=function(e){var r=function(i){return xa(a(ne,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},t=function(i){var o=i;return Z(n(o),xa(a(ne,t,o.G)))};return xa(a(ne,t,h(rr,v(function(i,o){var c=i.a,l=i.b;return a(z,a(ma,a(fa,c,""),l),o)}),D,e)))},yu=Z(ch,lh(Z(eh,rh))),xn=Go,Uv=function(e){var r=e.eS;switch(r){case 0:return h(Ur,"div",D,$([h(Ur,"style",D,$([xn(yu)]))]));case 1:return xn("");default:return h(Ur,"elm-ui-static-rules",$([a(Wv,"rules",Jc(yu))]),D)}},uh=v(function(e,r){return h(Ne,pd(e),md(),r)}),$h=function(e){return h(Ne,v(function(r,n){var t=r.a,i=r.b;return h(dd,t,i,n)}),sd(),e)},vh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},fh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},mh=function(e){if(e.$===5){var r=e.a;return a(Ct,fh,r.fo)}else return!1},wa=v(function(e,r){return be(e,r)<0?e:r}),Wa=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ve=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Ne,Wa(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Ne,Wa(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Ne,Wa(!1),"",t)+`
}`))])}case 0:var c=h(Ne,Wa(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(w(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(Ne,Wa(!1),"",t)+`
}`))])}}),sh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},dh=function(e){if(e.$===5){var r=e.a;return Y(a(le,", ",a(ne,sh,r.fo)))}else return J},ph=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,y=s.a,_=s.b,S=s.c,C=e.d,x="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),H="rotate3d("+(ve(y)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(x+(" "+(T+(" "+H))))}},Kc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Ve,e,n,t,i);case 13:var u=r.a,b=r.b;return L(Ve,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(ar,0,a(wa,1,1-o));return L(Ve,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return L(Ve,e,n,".font-size-"+k(l),$([a(ue,"font-size",k(l)+"px")]));case 1:var u=r.a,f=r.b,m=a(le,", ",a(yn,dh,f)),d=$([a(ue,"font-family",a(le,", ",a(ne,vh,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Ct,mh,f)?"small-caps":"normal")]);return L(Ve,e,n,"."+u,d);case 3:var se=r.a,b=r.b,lo=r.c;return L(Ve,e,n,"."+se,$([a(ue,b,lo)]));case 4:var se=r.a,b=r.b,s=r.c;return L(Ve,e,n,"."+se,$([a(ue,b,ga(s))]));case 5:var q=r.a,y=r.b,_=r.c,S=k(_)+"px",C=k(y)+"px",x="."+p.af,T="."+(p.dR+x),pe="."+p.dZ,H="."+p.eZ,X="."+p.eY,Se="."+p.dY,ae=ve(_/2)+"px",te=ve(y/2)+"px",ie="."+p.aw,se="."+q,re="."+p.fK;return dr($([L(Ve,e,n,se+(x+(" > "+(re+(" + "+re)))),$([a(ue,"margin-left",C)])),L(Ve,e,n,se+(T+(" > "+re)),$([a(ue,"margin",ae+(" "+te))])),L(Ve,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),L(Ve,e,n,se+(X+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),L(Ve,e,n,se+(X+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Ve,e,n,se+(X+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Ve,e,n,Z(se,H),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),L(Ve,e,n,"textarea"+(re+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),L(Ve,e,n,se+(H+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Ve,e,n,se+(H+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Ve,e,n,se+(H+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),L(Ve,e,n,se+(H+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ve,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ve,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ke,Ga,Xr){e:for(;;)switch(Xr.$){case 0:var ls=Xr.a;return k(ls)+"px";case 1:var Dr=P(Ke,Ga);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var In=Dr.b.a;return"minmax(max-content, "+(k(In)+"px)")}else if(Dr.b.$===1){var En=Dr.a.a;return Dr.b,"minmax("+(k(En)+"px, max-content)")}else{var En=Dr.a.a,In=Dr.b.a;return"minmax("+(k(En)+("px, "+(k(In)+"px)")))}case 2:var ql=Xr.a,Vr=P(Ke,Ga);if(Vr.a.$===1){if(Vr.b.$===1)return Vr.a,Vr.b,k(ql)+"fr";Vr.a;var In=Vr.b.a;return"minmax(max-content, "+(k(In)+"px)")}else if(Vr.b.$===1){var En=Vr.a.a;return Vr.b,"minmax("+(k(En)+("px, "+(k(ql)+"frfr)")))}else{var En=Vr.a.a,In=Vr.b.a;return"minmax("+(k(En)+("px, "+(k(In)+"px)")))}case 3:var uo=Xr.a,$o=Xr.b,vo=Y(uo),fo=Ga,mo=$o;Ke=vo,Ga=fo,Xr=mo;continue e;default:var uo=Xr.a,$o=Xr.b,vo=Ke,fo=Y(uo),mo=$o;Ke=vo,Ga=fo,Xr=mo;continue e}}),F=function(Ke){return h(Te,J,J,Ke)};F(me.hP.a);var I=F(me.hP.b),E=function(Ke){return"grid-template-rows: "+(Ke+";")}(a(le," ",a(ne,F,me.hB))),B=function(Ke){return"-ms-grid-rows: "+(Ke+";")}(a(le,I,a(ne,F,me.ak))),j=function(Ke){return"-ms-grid-columns: "+(Ke+";")}(a(le,I,a(ne,F,me.ak))),N="grid-row-gap:"+(F(me.hP.b)+";"),G="grid-column-gap:"+(F(me.hP.a)+";"),W=function(Ke){return"grid-template-columns: "+(Ke+";")}(a(le," ",a(ne,F,me.ak))),se=".grid-rows-"+(a(le,"-",a(ne,Or,me.hB))+("-cols-"+(a(le,"-",a(ne,Or,me.ak))+("-space-x-"+(Or(me.hP.a)+("-space-y-"+Or(me.hP.b))))))),io=se+("{"+(W+(E+(G+(N+"}"))))),oo="@supports (display:grid) {"+(io+"}"),co=se+("{"+(j+(B+"}")));return $([co,oo]);case 9:var Ge=r.a,It=a(le," ",$(["-ms-grid-row: "+(k(Ge.af)+";"),"-ms-grid-row-span: "+(k(Ge.gH)+";"),"-ms-grid-column: "+(k(Ge.ga)+";"),"-ms-grid-column-span: "+(k(Ge.im)+";")])),to=a(le," ",$(["grid-row: "+(k(Ge.af)+(" / "+(k(Ge.af+Ge.gH)+";"))),"grid-column: "+(k(Ge.ga)+(" / "+(k(Ge.ga+Ge.im)+";")))])),se=".grid-pos-"+(k(Ge.af)+("-"+(k(Ge.ga)+("-"+(k(Ge.im)+("-"+k(Ge.gH))))))),io=se+("{"+(to+"}")),oo="@supports (display:grid) {"+(io+"}"),co=se+("{"+(It+"}"));return $([co,oo]);case 11:var se=r.a,is=r.b,os=function(Ke){return h(Kc,e,Ke,Y(se))};return a(Ea,os,is);default:var Jl=r.a,lo=ph(Jl),se=Yc(Jl),Et=P(se,lo);if(!Et.a.$&&!Et.b.$){var q=Et.a.a,cs=Et.b.a;return L(Ve,e,n,"."+q,$([a(ue,"transform",cs)]))}else return D}}),gh=v(function(e,r){return $h(a(ne,function(n){var t=h(Kc,e,n,J);return P(vt(n),a(uh,Jc,t))},r))}),yi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(ne,n,r))+"}"))}),xu=M(function(e,r,n){var t=n.a,i=n.b;return $([a(yi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(yi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),hh=M(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(le," ",Z(h(xu,o,p.hM,i),h(xu,o,p.gy,t)))}),bh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(le," ",$([a(yi,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([P("line-height","1")])),a(yi,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),wu=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),Ov=v(function(e,r){return h(rr,v(function(n,t){return e(n)?a(z,n,t):t}),D,r)}),_h=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Ne,ar,r,n))}else return J},Su=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Ne,wa,r,n))}else return J},Cu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Ae,e.gk,Su(r)),t=a(Ae,e.fP,Su(a(Ov,function(f){return!_e(f,n)},r))),i=a(Ae,e.f1,_h(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f1:h(wu,o,i-t,c),ec:h(wu,l,i-n,u)}},Lu=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ve(e.gH)),P("vertical-align",ve(e.fp)+"em"),P("font-size",ve(e.bi)+"em")]))},yh=function(e){return h(Ne,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return Y(P(Lu(function(c){return c.ec}(Cu(o))),Lu(function(c){return c.f1}(Cu(o)))))}else return n;else return n}),J,e)},xh=function(e){var r=function(o){if(o.$===4){var c=o.b;return Y("@import url('"+(c+"');"))}else return J},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(yn,r,c));return l},t=a(ne,sv,e),i=function(o){var c=o.a,l=o.b,u=yh(l);if(u.$===1)return a(le,"",a(ne,bh(c),t));var f=u.a;return a(le,"",a(ne,a(hh,c,f),t))};return Z(a(le,`
`,a(ne,n,e)),a(le,`
`,a(ne,i,e)))},wh=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(P(r,n))}else return J},Pu=v(function(e,r){var n=v(function(c,l){return{cC:Z(l.cC,h(Kc,e,c,J)),bU:function(){var u=wh(c);if(u.$===1)return l.bU;var f=u.a;return a(z,f,l.bU)}()}}),t=h(Ne,n,{cC:D,bU:D},r),i=t.bU,o=t.cC;return Z(xh(i),xa(o))}),Jv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Ur,"div",D,$([h(Ur,"style",D,$([xn(a(Pu,e,r))]))]));case 1:return h(Ur,"div",D,$([h(Ur,"style",D,$([xn(a(Pu,e,r))]))]));default:return h(Ur,"elm-ui-rules",$([a(Wv,"rules",a(gh,e,r))]),D)}}),zu=ee(function(e,r,n,t){var i=a(Jv,r,h(Ne,Nv,P(jv,Gv(r.gx)),n).b);return e?a(z,P("static-stylesheet",Uv(r)),a(z,P("dynamic-stylesheet",i),t)):a(z,P("dynamic-stylesheet",i),t)}),Mu=ee(function(e,r,n,t){var i=a(Jv,r,h(Ne,Nv,P(jv,Gv(r.gx)),n).b);return e?a(z,Uv(r),a(z,i,t)):a(z,i,t)}),ac=xe(45),ft=xe(37),qv=function(e){return Fd(B$(e))},Sh=sn("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),Tu=sn("s"),ku=sn("u"),tc=xe(44),mt=xe(39),Gt=gr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var m=t.a;return h(qv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return L(zu,!1,b,s,m);default:var b=i.a,s=i.b;return L(zu,!0,b,s,m)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Ma;case"p":return Sh;default:return Ur(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return L(Mu,!1,b,s,d);default:var b=i.a,s=i.b;return L(Mu,!0,b,s,d)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Ur,u,n,$([a(c,f,$([Pr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return a(cr,mt,e)&&!a(cr,tc,e)?l:a(cr,Ev,e)?a(ku,$([Pr(a(le," ",$([p.fK,p.hL,p.b9,p.ax,p.fG])))]),$([l])):a(cr,Bv,e)?a(Tu,$([Pr(a(le," ",$([p.fK,p.hL,p.b9,p.ax,p.fE])))]),$([l])):l;case 1:return a(cr,ft,e)&&!a(cr,ac,e)?l:a(cr,Rv,e)?a(Tu,$([Pr(a(le," ",$([p.fK,p.hL,p.b9,p.fF])))]),$([l])):a(cr,Iv,e)?a(ku,$([Pr(a(le," ",$([p.fK,p.hL,p.b9,p.fD])))]),$([l])):l;default:return l}}),gn=function(e){return!e.b},Xc=xn,Ch=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),st=function(e){return a(Ma,$([Pr(Ch)]),$([Xc(e)]))},Lh=p.fK+(" "+(p.Y+(" "+(p.dQ+(" "+p.c0))))),Du=function(e){return a(Ma,$([Pr(Lh)]),$([Xc(e)]))},Ph=M(function(e,r,n){var t=v(function(y,_){var S=y.a,C=y.b,x=_.a,T=_.b;switch(C.$){case 0:var H=C.a;return _e(e,Nt),P(a(z,P(S,H(e)),x),T);case 1:var X=C.a;return _e(e,Nt),P(a(z,P(S,a(X.gL,jn,e)),x),gn(T)?X.hV:Z(X.hV,T));case 2:var ae=C.a;return P(a(z,P(S,_e(e,wr)?Du(ae):st(ae)),x),T);default:return P(x,T)}}),i=v(function(y,_){var S=_.a,C=_.b;switch(y.$){case 0:var x=y.a;return _e(e,Nt),P(a(z,x(e),S),C);case 1:var T=y.a;return _e(e,Nt),P(a(z,a(T.gL,jn,e),S),gn(C)?T.hV:Z(T.hV,C));case 2:var H=y.a;return P(a(z,_e(e,wr)?Du(H):st(H),S),C);default:return P(S,C)}});if(r.$===1){var o=r.a,c=h(rr,t,P(D,D),o),l=c.a,u=c.b,f=gn(u)?n.hV:Z(n.hV,u);if(f.b){var m=f;return rc({gL:L(Gt,n.aR,n.aT,n.aJ,gu(h(bu,"nearby-element-pls",l,n.aM))),hV:m})}else return $t(V(Gt,n.aR,n.aT,n.aJ,gu(h(bu,"nearby-element-pls",l,n.aM)),jn))}else{var d=r.a,b=h(rr,i,P(D,D),d),s=b.a,u=b.b,f=gn(u)?n.hV:Z(n.hV,u);if(f.b){var m=f;return rc({gL:L(Gt,n.aR,n.aT,n.aJ,nr(a(hu,s,n.aM))),hV:m})}else return $t(V(Gt,n.aR,n.aT,n.aJ,nr(a(hu,s,n.aM)),jn))}}),vr=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),zh=function(e){return{$:10,a:e}},xi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(xi,n,o|t)}else{var i=e.a;return a(xi,i|n,t)}}),Vu=function(e){return{$:1,a:e}},Wt=v(function(e,r){return{$:3,a:e,b:r}}),Au=function(e){return{$:2,a:e}},Mh=v(function(e,r){return a(Ma,$([Pr(function(){switch(e){case 0:return a(le," ",$([p.be,p.hL,p.fy]));case 1:return a(le," ",$([p.be,p.hL,p.fR]));case 2:return a(le," ",$([p.be,p.hL,p.hh]));case 3:return a(le," ",$([p.be,p.hL,p.hg]));case 4:return a(le," ",$([p.be,p.hL,p.gP]));default:return a(le," ",$([p.be,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return xn("");case 2:var n=r.a;return st(n);case 0:var t=r.a;return t(wr);default:var i=r.a;return a(i.gL,jn,wr)}}()]))}),Th=M(function(e,r,n){var t=a(Mh,e,r);switch(n.$){case 0:return e===5?Vu($([t])):Au($([t]));case 1:var i=n.a;return e===5?Vu(a(z,t,i)):a(Wt,i,$([t]));case 2:var o=n.a;return e===5?a(Wt,$([t]),o):Au(a(z,t,o));default:var i=n.a,o=n.b;return e===5?a(Wt,a(z,t,i),o):a(Wt,i,a(z,t,o))}}),Fu=v(function(e,r){return{$:2,a:e,b:r}}),hn=function(e){return{$:1,a:e}},Bn=v(function(e,r){switch(r.$){case 0:return hn(e);case 1:var n=r.a;return a(Fu,n,e);default:var t=r.a,i=r.b;return a(Fu,t,i)}}),kh=function(e){switch(e){case 0:return p.cN+(" "+p.dY);case 2:return p.cN+(" "+p.dZ);default:return p.cN+(" "+p.fB)}},Dh=function(e){switch(e){case 0:return p.cO+(" "+p.fH);case 2:return p.cO+(" "+p.fA);default:return p.cO+(" "+p.fC)}},Za=v(function(e,r){return a(jr,jd(e),R$(r))}),Gr=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),pn=function(e){return{$:1,a:e}},Vh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return pn(R(u,0,0));case 1:var f=r.a;return pn(R(0,f,0));case 2:var m=r.a;return pn(R(0,0,m));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return L(Gr,R(0,0,0),R(1,1,1),n,s);default:var n=r.a;return L(Gr,R(0,0,0),n,R(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return pn(R(t,f,m));case 1:var i=r.a;return pn(R(u,i,m));case 2:var o=r.a;return pn(R(u,f,o));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return L(Gr,l,R(1,1,1),n,s);default:var c=r.a;return L(Gr,l,c,R(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return L(Gr,R(t,f,m),d,b,s);case 1:var i=r.a;return L(Gr,R(u,i,m),d,b,s);case 2:var o=r.a;return L(Gr,R(u,f,o),d,b,s);case 3:var y=r.a;return L(Gr,y,d,b,s);case 4:var _=r.a,S=r.b;return L(Gr,l,d,_,S);default:var C=r.a;return L(Gr,l,C,b,s)}}}),la=xe(7),Yv=xe(36),Iu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(xi,n|i,t|o)}),nn=a(xi,0,0),ic=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return R(nn,p.ee+(" "+t),$([h(vr,t,"height",n+"px")]));case 1:return R(a(ge,Yv,nn),p.c$,D);case 2:var i=e.a;return i===1?R(a(ge,ft,nn),p.c0,D):R(a(ge,ft,nn),p.ef+(" height-fill-"+k(i)),$([h(vr,p.fK+("."+(p.aw+(" > "+w("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h(vr,f,"min-height",k(o)+"px !important"),c=ic(u),b=c.a,s=c.b,y=c.c;return R(a(ge,ac,b),f+(" "+s),a(z,m,y));default:var l=e.a,u=e.b,f="max-height-"+k(l),m=h(vr,f,"max-height",k(l)+"px"),d=ic(u),b=d.a,s=d.b,y=d.c;return R(a(ge,ac,b),f+(" "+s),a(z,m,y))}},Zv=xe(38),oc=function(e){switch(e.$){case 0:var r=e.a;return R(nn,p.fu+(" width-px-"+k(r)),$([h(vr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return R(a(ge,Zv,nn),p.dP,D);case 2:var n=e.a;return n===1?R(a(ge,mt,nn),p.dQ,D):R(a(ge,mt,nn),p.fv+(" width-fill-"+k(n)),$([h(vr,p.fK+("."+(p.af+(" > "+w("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),u=h(vr,l,"min-width",k(t)+"px"),i=oc(c),m=i.a,d=i.b,b=i.c;return R(a(ge,tc,m),l+(" "+d),a(z,u,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),u=h(vr,l,"max-width",k(o)+"px"),f=oc(c),m=f.a,d=f.b,b=f.c;return R(a(ge,tc,m),l+(" "+d),a(z,u,b))}},Gi=xe(27),Ah=v(function(e,r){if(_e(e,Gi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return _e(i,c)&&_e(i,o)&&_e(i,l)&&i>=0&&i<=24;default:return!1}}),ua=xe(6),Eu=xe(30),Bu=xe(29),Fh=ze(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,d=l.b;switch(m.$){case 0:var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 3:var _=m.a,b=m.b;if(a(cr,_,n)){var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=b+(" "+e),I=r,E=a(ge,_,n),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}case 1:var s=m.a,F=e,I=r,E=n,B=t,j=i,N=a(z,s,o),G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 4:var _=m.a,y=m.b;if(a(cr,_,n)){var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else if(a(Ah,_,y)){var F=vt(y)+(" "+e),I=r,E=a(ge,_,n),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=vt(y)+(" "+e),I=r,E=a(ge,_,n),B=t,j=a(z,y,i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}case 10:var _=m.a,S=m.b,F=e,I=r,E=a(ge,_,n),B=a(Vh,t,S),j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 7:var C=m.a;if(a(cr,ua,n)){var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else switch(C.$){case 0:var x=C.a,F=p.fu+(" width-px-"+k(x))+(" "+e),I=r,E=a(ge,ua,n),B=t,j=a(z,h(vr,"width-px-"+k(x),"width",k(x)+"px"),i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 1:var F=e+(" "+p.dP),I=r,E=a(ge,Zv,a(ge,ua,n)),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 2:var T=C.a;if(T===1){var F=e+(" "+p.dQ),I=r,E=a(ge,mt,a(ge,ua,n)),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=e+(" "+(p.fv+(" width-fill-"+k(T)))),I=r,E=a(ge,mt,a(ge,ua,n)),B=t,j=a(z,h(vr,p.fK+("."+(p.af+(" > "+w("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}default:var H=oc(C),X=H.a,ae=H.b,Te=H.c,F=e+(" "+ae),I=r,E=a(Iu,X,a(ge,ua,n)),B=t,j=Z(Te,i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}case 8:var te=m.a;if(a(cr,la,n)){var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else switch(te.$){case 0:var x=te.a,ie=k(x)+"px",re="height-px-"+ie,F=p.ee+(" "+(re+(" "+e))),I=r,E=a(ge,la,n),B=t,j=a(z,h(vr,re,"height ",ie),i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 1:var F=p.c$+(" "+e),I=r,E=a(ge,Yv,a(ge,la,n)),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 2:var T=te.a;if(T===1){var F=p.c0+(" "+e),I=r,E=a(ge,ft,a(ge,la,n)),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=e+(" "+(p.ef+(" height-fill-"+k(T)))),I=r,E=a(ge,ft,a(ge,la,n)),B=t,j=a(z,h(vr,p.fK+("."+(p.aw+(" > "+w("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}default:var q=ic(te),X=q.a,ae=q.b,Te=q.c,F=e+(" "+ae),I=r,E=a(Iu,X,a(ge,la,n)),B=t,j=Z(Te,i),N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}case 2:var de=m.a;switch(de.$){case 0:var F=e,I=a(Bn,"main",r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 1:var F=e,I=a(Bn,"nav",r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 2:var F=e,I=a(Bn,"footer",r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 3:var F=e,I=a(Bn,"aside",r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 4:var pe=de.a;if(pe<=1){var F=e,I=a(Bn,"h1",r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else if(pe<7){var F=e,I=a(Bn,"h"+k(pe),r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=e,I=a(Bn,"h6",r),E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}case 9:var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 8:var F=e,I=r,E=n,B=t,j=i,N=a(z,a(Za,"role","button"),o),G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 5:var Me=de.a,F=e,I=r,E=n,B=t,j=i,N=a(z,a(Za,"aria-label",Me),o),G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 6:var F=e,I=r,E=n,B=t,j=i,N=a(z,a(Za,"aria-live","polite"),o),G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;default:var F=e,I=r,E=n,B=t,j=i,N=a(z,a(Za,"aria-live","assertive"),o),G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var to=me.a;return Z(i,to.hV)}}(),F=e,I=r,E=n,B=t,j=Te,N=o,G=h(Th,Se,me,c),W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e;case 6:var Ge=m.a;if(a(cr,Eu,n)){var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=kh(Ge)+(" "+e),I=r,E=function(se){switch(Ge){case 1:return a(ge,Bv,se);case 2:return a(ge,Ev,se);default:return se}}(a(ge,Eu,n)),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}default:var It=m.a;if(a(cr,Bu,n)){var F=e,I=r,E=n,B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}else{var F=Dh(It)+(" "+e),I=r,E=function(se){switch(It){case 1:return a(ge,Rv,se);case 2:return a(ge,Iv,se);default:return se}}(a(ge,Bu,n)),B=t,j=i,N=o,G=c,W=d;e=F,r=I,n=E,t=B,i=j,o=N,c=G,l=W;continue e}}}else{var u=Yc(t);if(u.$===1)return{aJ:a(z,Pr(e),o),aM:c,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(z,Pr(e+(" "+f)),o),aM:c,aR:n,aT:r,hV:a(z,zh(t),i)}}}),Ih={$:0},Eh=Ih,$r=ee(function(e,r,n,t){return h(Ph,e,t,_t(Fh,Gg(e),r,nn,Eh,D,D,Fg,sr(n)))}),an=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Bh={fO:J,fW:J,hH:Y({a2:0,b7:L(an,155/255,203/255,1,1),eV:P(0,0),bi:3})},Rh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gK;return c.$===1?Re(i,{gK:Y(o)}):i;case 1:var l=t.a,u=i.gx;return u.$===1?Re(i,{gx:Y(l)}):i;default:var f=t.a,m=i.eS;return m.$===1?Re(i,{eS:Y(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Bh;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(rr,r,{gx:J,gK:J,eS:J},e))},jh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(wr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),wr);case 2:var i=r.a;return st(i);default:return st("")}}),Nh=M(function(e,r,n){var t=Rh(e),i=function(){var o=t.eS;return o===1?Fv(t):Vg(t)}();return a(jh,i,L($r,wr,ta,r,nr($([n]))))}),dt=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Kv=v(function(e,r){return{$:1,a:e,b:r}}),Xv=function(e){return{$:2,a:e}},Gh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),ho=function(e){return{$:3,a:e}},Qv=xe(8),ef=xe(14),rf=xe(5),nf=xe(4),Ta=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Be(r)+("-"+(Be(n)+("-"+(Be(t)+("-"+Be(i))))))},ei=Us,bo=Hs,af=v(function(e,r){return Z(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",bo(ei(n)));case 4:var n=e.a;return e.b,a(le,"-",bo(ei(n)));default:var n=e.a.hc;return a(le,"-",bo(ei(n)))}}())}),Wh=function(){var e=$([ho("Open Sans"),ho("Helvetica"),ho("Verdana"),Gh]);return $([a(Ce,Qv,h(dt,"bg-"+Ta(L(an,1,1,1,0)),"background-color",L(an,1,1,1,0))),a(Ce,ef,h(dt,"fc-"+Ta(L(an,0,0,0,1)),"color",L(an,0,0,0,1))),a(Ce,nf,Xv(20)),a(Ce,rf,a(Kv,h(Ne,af,"font-",e),e))])}(),Hh=M(function(e,r,n){var t=e.hl;return h(Nh,t,a(z,yr(a(le," ",$([p.hA,p.fK,p.hL]))),Z(Wh,r)),n)}),tf={$:3},of=function(e){return{$:2,a:e}},cc=Ed,cf=v(function(e,r){switch(r.$){case 1:var n=r.a;return rc({gL:v(function(o,c){return a(cc,e,a(n.gL,o,c))}),hV:n.hV});case 0:var t=r.a;return $t(a(Lt,cc(e),t));case 2:var i=r.a;return of(i);default:return tf}}),Qc=cf,Uh=cc,Oh=function(e){return{$:0,a:e}},De=Oh,Jh=Rd,_r=Jh,lf={$:1},Wi=function(e){return{$:5,a:e}},uf=Wi(0),Nr=M(function(e,r,n){return L(an,e/255,r/255,n/255,1)}),$f=h(Nr,0,0,0),qh=jr("d"),Yh=jr("fill"),Zh=jr("height"),vf=I$("http://www.w3.org/2000/svg"),Kh=vf("path"),Xh=vf("svg"),Qh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},e3=function(e){var r=Qh(e);return"rgba("+(k(Ee(r.hu*255))+(","+k(Ee(r.gA*255))+(","+k(Ee(r.fS*255))+(","+ve(r.fI)+")"))))},r3=jr("viewBox"),n3=jr("width"),ha=M(function(e,r,n){return a(Xh,$([r3("0 0 100 100"),n3(k(e)),Zh(k(e))]),$([a(Kh,$([qh(n),Yh(e3(r))]),D)]))}),a3={$:1},pr=a3,ff=function(e){return{$:7,a:e}},ce=ff,Le=v(function(e,r){return L($r,wr,ta,a(z,ce(pr),a(z,we(pr),e)),nr($([r])))}),mf=function(e){return{$:2,a:e}},ye=mf(1),Gn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Sa={c4:260,bF:54},ln=function(e){return a(Ce,Qv,h(dt,"bg-"+Ta(e),"background-color",e))},t3=xe(28),wn=function(e){return a(Ce,t3,h(dt,"bc-"+Ta(e),"border-color",e))},ri=1,Mr=v(function(e,r){return L($r,ri,ta,a(z,yr(p.gc+(" "+p.bu)),a(z,we(pr),a(z,ce(pr),e))),nr(r))}),i3=h(Nr,83,83,83),sf=ee(function(e,r,n,t){return L(an,e/255,r/255,n/255,t)}),Hi=L(sf,56,56,56,.25),qe=tf,pt=Ze(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),gt=xe(2),Wn=function(e){var r=e;return a(Ce,gt,V(pt,"p-"+k(e),r,r,r,r))},df=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),pf=xe(3),gf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Sn=function(e){return a(Ce,pf,h(df,a(gf,e,e),e,e))},o3=L(sf,0,0,0,0),c3=function(e){return{$:4,a:e}},lc=0,kn=v(function(e,r){return L($r,lc,ta,a(z,yr(p.bu+(" "+p.ax)),a(z,ce(pr),a(z,we(pr),e))),nr(r))}),l3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(Fv,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return bi(xn(t));default:return bi(xn(""))}},u3=v(function(e,r){return l3(e(r))}),$3=Bd,v3=v(function(e,r){return $t(h($3,u3,e,r))}),Cn=function(e){return a(Ce,ef,h(dt,"fc-"+Ta(e),"color",e))},el=h(Nr,195,195,195),Dn=v(function(e,r){return{$:3,a:e,b:r}}),hf=xe(13),f3=a(Dn,hf,p.h7),m3=xe(20),bf=a(Dn,m3,p.hF),ia=function(e){return a(Ce,nf,Xv(e))},rl=a(Dn,hf,p.fV),uc=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return V(fe,n,t,a(e,t,i),a(uc,e,o),a(uc,e,c))}),_f=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,gt,V(pt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,gt,V(pt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Ln=function(e){return of(e)},s3=function(e){return h(Bc,M(function(r,n,t){return a(z,n,t)}),D,e)},d3=v(function(e,r){return{$:3,a:e,b:r}}),p3=v(function(e,r){return{$:2,a:e,b:r}}),g3=v(function(e,r){return{$:0,a:e,b:r}}),h3=v(function(e,r){return{$:1,a:e,b:r}}),oa=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),b3=L(oa,0/255,0/255,0/255,1),Ui=function(e){return{$:6,a:e}},_3=Ui(0),Oi=function(e){return{$:2,a:e}},y3={$:6},yf=Oi(y3),xf=M(function(e,r,n){if(r.$===1)return r.a,L($r,ri,hn("label"),e,nr($([n])));var t=r.a,i=r.b,o=r.c,c=L($r,wr,ta,i,nr($([o])));switch(t){case 2:return L($r,ri,hn("label"),a(z,yr(p.cj),e),nr($([c,n])));case 3:return L($r,ri,hn("label"),a(z,yr(p.cj),e),nr($([n,c])));case 0:return L($r,lc,hn("label"),a(z,yr(p.cj),e),nr($([n,c])));default:return L($r,lc,hn("label"),a(z,yr(p.cj),e),nr($([c,n])))}}),$c=Za,fn=Wi(1),wf="Enter",x3=function(e){return{$:5,a:e}},Sf=function(e){if(e.$===1){var r=e.a;return Oi(x3(r))}else return Qn},Cf=function(e){return e.$===1},w3=function(e){return{$:0,a:e}},nl=E$,S3=v(function(e,r){return a(nl,e,w3(r))}),Lf=function(e){return a(S3,"click",ur(e))},C3=nd,L3=function(e){return{$:2,a:e}},P3=v(function(e,r){return a(nl,e,L3(r))}),Pf=function(e){var r=function(t){var i=e(t);if(i.$===1)return C3("No key matched");var o=i.a;return ur(o)},n=a(Q,r,a(K,"key",za));return Fe(a(P3,"keydown",a(si,function(t){return P(t,!0)},n)))},z3=xe(21),Hn=a(Dn,z3,p.gf),zf=" ",Mf=function(e){return a(jr,"tabIndex",k(e))},M3=a(Lt,Fe,Mf),T3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bJ,c=Z($([Cf(n)?Qn:Sn(6),Fe(Lf(o(!i))),yf,Pf(function(l){return _e(l,wf)||_e(l,zf)?Y(o(!i)):J}),M3(0),Hn,_3,ce(ye)]),e);return h(xf,a(z,Fe(a($c,"role","checkbox")),a(z,Fe(a($c,"aria-checked",i?"true":"false")),a(z,Sf(n),c))),n,L($r,wr,ta,$([fn,we(ye),ce(pr)]),nr($([t(i)]))))}),k3=M(function(e,r,n){return Z(a(ut,e-Nn(n),ji(r)),n)}),wi=xs,Tf=function(e){var r=function(n){return n<10?k(n):ji(Cv(87+n))};return e<16?r(e):Z(Tf(e/16|0),r(a(wi,16,e)))},D3=a(Xe,Tf,a(k3,2,"0")),al=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},V3=function(e){var r=al(e),n=r.hu,t=r.gA,i=r.fS;return a(le,"",a(z,"#",a(ne,a(Xe,Ee,D3),$([n*255,t*255,i*255]))))},tl=xe(12),kf=a(Dn,tl,p.h$),vc=Ui(1),Pn=ws,Si=function(e){return e*Pn/180},A3=function(e){return{$:1,a:e}},il=v(function(e,r){return{$:10,a:e,b:r}}),F3=xe(26),I3=function(e){return a(il,F3,A3(-e))},ba=M(function(e,r,n){return L(an,e,r,n,1)}),E3=an,B3=v(function(e,r){return{$:4,a:e,b:r}}),R3=xe(24),j3=function(e){return a(il,R3,a(B3,R(0,0,1),e))},N3=xe(17),Jn=function(e){return a(Ce,N3,h(vr,"br-"+k(e),"border-radius",k(e)+"px"))},G3=function(e){return xa($([e.ej?"box-inset":"box-",Be(e.eV.a)+"px",Be(e.eV.b)+"px",Be(e.a2)+"px",Be(e.bi)+"px",Ta(e.b7)]))},W3=xe(19),H3=function(e){var r={a2:e.a2,b7:e.b7,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,W3,h(vr,G3(r),"box-shadow",nc(r)))},Ru=v(function(e,r){return{$:12,a:e,b:r}}),ju=xe(0),U3=function(e){return e?a(Ce,ju,a(Ru,"transparent",1)):a(Ce,ju,a(Ru,"visible",0))},_o=h(ba,1,1,1),ol=Ze(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Ji=function(e){return a(Ce,Gi,V(ol,"b-"+k(e),e,e,e,e))},O3=v(function(e,r){return a(Ce,Gi,V(ol,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Pt=function(e){var r=e.b3,n=e.cI,t=e.g4,i=e.hx;return _e(n,r)&&_e(t,i)?_e(n,i)?Ji(n):a(O3,t,n):a(Ce,Gi,V(ol,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},J3=function(e){return a(Le,$([yr("focusable"),ce(De(14)),we(De(14)),Cn(_o),fn,ia(9),kf,Jn(3),wn(e?h(ba,59/255,153/255,252/255):h(ba,211/255,211/255,211/255)),H3({a2:1,b7:e?L(E3,238/255,238/255,238/255,0):h(ba,238/255,238/255,238/255),eV:P(0,0),bi:1}),ln(e?h(ba,59/255,153/255,252/255):_o),Ji(e?0:1),ec(a(Le,$([wn(_o),we(De(6)),ce(De(9)),j3(Si(-45)),vc,fn,I3(1),U3(!e),Pt({b3:2,g4:2,hx:0,cI:0})]),qe))]),qe)},q3=kr("htmlFor"),fc=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Ci=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return e(n)}}),Df=ee(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),Y3=fp,Z3=Xs,K3=v(function(e,r){if(r.$)return ir(e);var n=r.a;return He(n)}),X3=vp,Q3=function(e){return a(X3,{f2:!1,hb:!1},e)},cl=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return J},eb=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return He(e(n))}}),rb=function(e){return{$:2,a:e}},nb=function(e){return{$:0,a:e}},ab=function(e){return{$:1,a:e}},yo=v(function(e,r){return Yr(r)-Yr(e)}),xo=M(function(e,r,n){var t=Yr(n);return be(Yr(e),t)<1&&be(t,Yr(r))<1}),tb=v(function(e,r){var n=function(i){return be(i,e)<0?He(i):ir(ab(r))},t=h(xo,"0","9",r)?He(a(yo,"0",r)):h(xo,"a","z",r)?He(10+a(yo,"a",r)):h(xo,"A","Z",r)?He(10+a(yo,"A",r)):ir(nb(r));return a(Ci,n,t)}),Vf=v(function(e,r){var n=Ia(r);if(n.$===1)return He(0);var t=n.a,i=t.a,o=t.b;return a(Ci,function(c){return a(Ci,function(l){return He(c+l*e)},a(Vf,e,o))},a(tb,e,i))}),ib=v(function(e,r){return 2<=e&&e<=36?a(Vf,e,Ko(r)):ir(rb(e))}),ob=ib(16),cb=M(function(e,r,n){return L(oa,e,r,n,1)}),lb=ee(function(e,r,n,t){return L(oa,e,r,n,t)}),ea=ys,ub=v(function(e,r){var n=a(ea,10,e);return Ee(r*n)/n}),$b=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=Sv(n);if(t.b&&!t.b.b){var i=t.a;return Z3($([i,i]))}else return n};return a(Xe,ei,a(Xe,function(n){return a(je,function(t){return h(Y3,1,t,n)},Q3(e))},a(Xe,fc(cl),a(Xe,je(function(n){return n.hW}),a(Xe,je(yn(Br)),a(Xe,K3("Parsing hex regex failed"),Ci(function(n){var t=a(ne,a(Xe,r,a(Xe,ob,eb(qa))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return He(L(lb,i/255,c/255,u/255,a(ub,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,b=d.b,u=b.a.a;return He(h(cb,i/255,c/255,u/255))}else break e;return ir("Parsing ints from hex failed")})))))))}(),vb=kr("id"),fb=sn("input"),mb=sn("label"),Af=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),sb=Af(0),db=kr("name"),pb=function(e){return P(e,!0)},gb=function(e){return{$:1,a:e}},hb=v(function(e,r){return a(nl,e,gb(r))}),bb=v(function(e,r){return h(rr,K,r,e)}),_b=a(bb,$(["target","value"]),za),Ff=function(e){return a(hb,"input",a(si,pb,a(si,e,_b)))},yb=a(Dn,tl,p.h4),If=a(Dn,tl,p.h8),ll=function(e){return a(Av,5,e)},ul=function(e){return a(Ce,rf,a(Kv,h(Ne,af,"ff-",e),e))},xb=h(Nr,195,195,195),Ef=h(Nr,69,69,69),wb=Af(2),Sb={$:2},$l=Sb,Cb=xe(32),Lb=xe(31),Nu=function(e){return h(rr,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},Pb=v(function(e,r){return a(Ae,r,h(rr,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return Y(P(i,c))}else return J;else{var i=t.a;return Y(i)}}),J,e))}),Gu=function(e){return h(rr,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},zb=xe(33),Mb=kr("max"),Tb=kr("min"),kb=v(function(e,r){return a(Ce,pf,h(df,a(gf,e,r),e,r))}),Db=function(e){return a(kr,"step",e)},Bf=kr("type"),Rf=kr("value"),ka=mf,Vb=Wd,jf=v(function(e,r){switch(r.$){case 0:return Qn;case 2:var n=r.a;return Oi(n);case 6:var t=r.a;return Ui(t);case 5:var i=r.a;return Wi(i);case 7:var t=r.a;return ff(t);case 8:var t=r.a;return Dv(t);case 3:var t=r.a,i=r.b;return a(Dn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(Vv,l,a(cf,e,u));case 1:var f=r.a;return Fe(a(Vb,e,f));default:var m=r.a,d=r.b;return a(il,m,d)}}),Ab=M(function(e,r,n){return a(kn,$([ce(ye),we(a(Ae,ye,n)),fn]),$([a(Le,$([ce(ka(Ee(e*1e4)))]),qe),a(Le,a(z,fn,a(ne,jf(wt),r)),qe),a(Le,$([ce(ka(Ee(he(1-e)*1e4)))]),qe)]))}),Fb=M(function(e,r,n){return a(Mr,$([we(ye),ce(a(Ae,ye,n)),vc]),$([a(Le,$([we(ka(Ee(he(1-e)*1e4)))]),qe),a(Le,a(z,vc,a(ne,jf(wt),r)),qe),a(Le,$([we(ka(Ee(e*1e4)))]),qe)]))}),Nf=v(function(e,r){var n=Gu(e),t=Nu(e),i=function(){var C=P(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var x=C.a.a.a,T=C.b.a.a;return be(T,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cs)/(r.cr-r.cs),c=r.ic,l=c,u=Nu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Gu(l),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([a(ue,"width",d),a(ue,"height",f)]),y=a(Pb,e,P(5,5)),_=y.a,S=y.b;return h(xf,$([Cf(r.em)?Qn:a(kb,_,S),yf,ce(function(){if(n.$===1)return ye;if(n.a.$){var C=n.a;return C}else return pr}()),we(function(){if(t.$===1)return pr;if(t.a.$){var C=t.a;return C}else return pr}())]),r.em,a(kn,$([ce(a(Ae,ye,n)),we(a(Ae,De(20),t))]),$([L($r,wr,hn("input"),$([Sf(r.em),a(Ce,Cb,a(nt,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,zb,a(nt,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,Lb,a(nt,'input[type="range"].'+(b+"::-ms-thumb"),s)),Fe(Pr(b+" ui-slide-bar focusable-parent")),Fe(Ff(function(C){var x=wv(C);if(x.$===1)return r.bJ(0);var T=x.a;return r.bJ(T)})),Fe(Bf("range")),Fe(Db(function(){var C=r.cF;if(C.$===1)return"any";var x=C.a;return ve(x)}())),Fe(Tb(ve(r.cs))),Fe(Mb(ve(r.cr))),Fe(Rf(ve(r.cJ))),i?Fe(a($c,"orient","vertical")):Qn,ce(i?a(Ae,De(20),t):a(Ae,ye,n)),we(i?a(Ae,ye,n):a(Ae,De(20),t))]),nr(D)),a(Le,a(z,ce(a(Ae,ye,n)),a(z,we(a(Ae,De(20),t)),Z(e,$([ll(i?h(Fb,o,a(z,yr("focusable-thumb"),l),n):h(Ab,o,a(z,yr("focusable-thumb"),l),t))])))),qe)])))}),Ib=h(ba,.5,.5,.5),Gf=Br,Wu=function(e){var r=e.c3,n=e.cJ,t=e.cs,i=e.cr,o=e.cF,c=e.bJ;return a(Le,$([ce(ye)]),a(Nf,$([Sn(2),ll(a(Le,$([ce(ye),we(De(16)),fn,ln(Ef),Jn(4)]),qe))]),{em:a(wb,D,a(kn,$([ce(ye)]),$([a(Le,$([yb]),Ln(r)),a(Le,$([ce(ye),If,ul($([$l]))]),Ln(ve(n)))]))),cr:i,cs:t,bJ:c,cF:Y(o),ic:Gf($([ce(De(12)),we(De(12)),Jn(4),Ji(0),wn(Ib),ln(xb)])),cJ:n}))},Eb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Bb=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(T3,D,{f6:c,gM:J3,em:a(sb,D,Ln(e)),bJ:d3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return Wu({c3:e,cr:o,cs:i,bJ:g3(e),cF:.001*(o-i),cJ:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return Wu({c3:e,cr:o,cs:i,bJ:a(Xe,Ee,h3(e)),cF:1,cJ:c});default:var c=r.a;return a(Le,$([ce(ye)]),bn(a(Ma,D,$([a(Ma,$([a(_r,"margin-bottom","6px")]),$([a(mb,$([q3(e)]),$([Xc(e)]))])),a(fb,$([Bf("color"),a(_r,"width","100%"),a(_r,"height","26px"),a(_r,"padding","0px"),vb(e),db(e),Ff(function(l){return a(p3,e,a(Eb,b3,$b(l)))}),Rf(V3(c))]),D)]))))}}),mc=h(Nr,255,255,255),Rb=function(e){return a(Mr,$([ce(ye),Sn(8),a(_f,0,14),Pt({b3:1,g4:0,hx:0,cI:0}),wn(Hi)]),$([a(Le,$([ia(16),rl,Cn(mc)]),Ln(e.hc)),a(Mr,$([ce(ye),Sn(6)]),s3(a(uc,Bb,e.aN)))]))},jb=function(e){return a(Mr,$([ce(ye),we(ye),Cn(el),ia(12),f3,bf]),a(ne,Rb,e))},Nb=v3(jb),Gb=function(e){return a(Mr,$([ce(ye),we(ye)]),$([a(kn,$([Sn(14),ce(ye)]),D),a(Qc,c3,Nb(aa(e).gb))]))},Wb=function(e){return{$:6,a:e}},Hb=ee(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Ub=function(e){var r=e.cI,n=e.hx,t=e.b3,i=e.g4;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,gt,V(pt,"p-"+k(r),o,o,o,o))}else return a(Ce,gt,V(pt,L(Hb,r,n,t,i),r,n,t,i))},Ob=function(e){return{$:0,a:e}},Jb=function(e){return{$:1,a:e}},qb=Jb,Yb=function(e){var r=e.b.X;return Xn(r)},Li=h(Nr,255,60,0),Zb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Xn(r)+1+Xn(n)},Kb=function(e){var r=P(Yb(e),Zb(e)-1),n=r.a,t=r.b;return a(Le,$([ce(ye),fn]),a(Nf,$([ll(a(kn,$([ce(ye),we(De(4)),fn,ln(Ef),Jn(2)]),$([a(Le,$([ce(ka(n)),we(ye),ln(Li),Jn(2)]),qe),a(Le,$([ce(ka(t-n))]),qe)])))]),{em:qb(""),cr:t,cs:0,bJ:a(Xe,Ee,Ob),cF:Y(1),ic:Gf($([ce(De(12)),we(De(12)),Jn(6),ln(Li)])),cJ:n}))},Xb=Ui(2),ni=h(Nr,220,220,220),Qb=function(e){var r=e.a,n=function(){return r.$?$([Cn(ni)]):$([Cn(Li)])}();return a(Le,Z(n,$([ia(14),Xb,If,ul($([$l]))])),Ln(a(Mv,3,aa(e).bt)))},e1=function(e){e.a;var r=e.b.X;return a(je,function(n){return Ee(60/(aa(e).bt-n))},a(je,a(Xe,sv,function(n){return n.bt}),cl(a(_v,59,r))))},r1=function(e){var r=e1(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([ia(14),Cn(el),ul($([$l]))]),Ln(k(n)+" FPS"))},Hu={$:1},n1={$:3},a1={$:2},t1={$:8},i1=D$,o1=v(function(e,r){return a(kc,e,i1(r))}),c1=o1("disabled"),l1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},u1=function(e){return a(Ct,l1,e)?Qn:yr("focusable")},Pi=a(Lt,Fe,Lf),Wf=v(function(e,r){var n=r.eW,t=r.em;return L($r,wr,ta,a(z,ce(pr),a(z,we(pr),a(z,yr(p.cb+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),a(z,Hn,a(z,u1(e),a(z,Oi(t1),a(z,Fe(Mf(0)),function(){if(n.$===1)return a(z,Fe(c1(!0)),e);var i=n.a;return a(z,Pi(i),a(z,Pf(function(o){return _e(o,wf)||_e(o,zf)?Y(i):J}),e))}()))))))),nr($([t])))}),Uu=v(function(e,r){return a(Wf,D,{em:a(Le,$([ce(De(36)),Wn(3),Cn(r),kf,ia(12),rl,wn(r),Ji(1),Jn(4)]),Ln("REC")),eW:Y(e)})}),Ou=M(function(e,r,n){return a(Wf,D,{em:bn(h(ha,20,n,e)),eW:Y(r)})}),$1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(kn,D,$([a(Le,$([ce(De(40))]),function(){switch(r.$){case 0:return a(Uu,Hu,Li);case 1:return a(Uu,a1,ni);default:return qe}}()),a(Le,$([ce(De(28))]),function(){switch(r.$){case 0:return qe;case 1:return gn(n)?qe:h(Ou,Gn.hp,n1,ni);default:return h(Ou,Gn.ho,Hu,ni)}}())]))},v1=function(e){return a(Mr,$([ce(ye)]),$([Kb(e),a(kn,$([ce(ye),Sn(14),a(_f,0,6),fn]),$([$1(e),r1(e),Qb(e)]))]))},f1=function(e){return a(Mr,$([ce(ye),Sn(14),Ub({b3:20,g4:0,hx:0,cI:0}),Pt({b3:1,g4:0,hx:0,cI:0}),wn(Hi)]),$([a(Le,$([ia(16),rl,Cn(el)]),Ln("Time Travel")),a(Qc,Wb,v1(e))]))},m1=v(function(e,r){return a(Mr,$([aa(r).dD.im>600?ln(i3):ln(o3),Pt({b3:0,g4:0,hx:1,cI:0}),wn(Hi),ce(De(Sa.c4)),we(ye)]),$([function(){return e?qe:a(Mr,$([ce(ye),we(ye),Wn(14),Sn(14)]),$([f1(r),Gb(r)]))}()]))}),s1=function(e){return{$:3,a:e}},Ju=Wi(2),d1=h(Nr,232,78,50),p1=h(Nr,48,48,48),g1=function(e){return a(kr,"href",Gd(e))},h1=jr("rel"),b1=kr("target"),qu=v(function(e,r){var n=r.fn,t=r.em;return L($r,wr,hn("a"),a(z,Fe(g1(n)),a(z,Fe(h1("noopener noreferrer")),a(z,Fe(b1("_blank")),a(z,ce(pr),a(z,we(pr),a(z,yr(p.cb+(" "+(p.ax+(" "+p.et)))),e)))))),nr($([t])))}),Ka=kr("title"),_1=h(Nr,31,161,242),y1=function(e){var r=M(function(o,c,l){var u=_e(c,e)?mc:p1;return a(Le,$([rn(Ka(o)),Pi(s1(c)),Hn,Wn(7)]),bn(h(ha,40,u,l)))}),n=a(Mr,$([uf]),$([h(r,"Configurations",0,Gn.hN)])),t=a(Mr,D,$([a(qu,$([rn(Ka("Twitter")),Ju,Hn,Wn(7)]),{em:bn(h(ha,40,_1,Gn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(qu,$([rn(Ka("Source Code")),Ju,Hn,Wn(7)]),{em:bn(h(ha,40,d1,Gn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([ce(De(Sa.bF)),Wn(4),Pi(lf),Pt({b3:1,g4:0,hx:0,cI:0}),wn(Hi),Hn,rn(Ka("Activate Distraction Free Mode"))]),bn(h(ha,46,mc,Gn.fx)));return a(Mr,$([ce(De(Sa.bF)),we(ye),bf,ln($f)]),$([i,n,t]))},x1=function(e){var r=a(Le,$([ce(De(Sa.bF)),uf,Wn(4),Pi(lf),Hn,rn(Ka("Deactivate Distraction Free Mode (A)"))]),bn(h(ha,46,$f,Gn.fx)));return e.bx?r:a(kn,$([ce(De(Sa.bF+Sa.c4)),we(ye)]),$([y1(e.bp),a(m1,e.bp,e.R)]))},w1=M(function(e,r,n){var t=Mg(n.R),i=aa(n.R);return h(Hh,{hl:$([kg({fO:J,fW:J,hH:J})])},$([ce(De(ct(i.dD.im))),we(De(ct(i.dD.gH))),rn(a(_r,"-webkit-font-smoothing","antialiased")),rn(a(_r,"pointer-events","none")),rn(a(_r,"touch-action","none")),rn(a(_r,"user-select","none")),ec(a(Qc,Pg,a(r,i,t))),ec(x1(n))]),bn(a(Uh,bi(zg),a(e,i,t))))}),S1=gr(function(e,r,n,t,i,o){var c=v(function(u,f){return P(L(yg,r,o,u,f),pu)}),l=function(u){var f=a(pv,n,u.gY);return P({bp:0,bx:!0,R:a(xg,f,t),dO:0},pu)};return N0({gS:l,hX:Lg,ii:c,ik:a(w1,e,i)})}),C1=ee(function(e,r,n,t){return Je(S1,e,r,n,t,v(function(i,o){return qe}),M(function(i,o,c){return c}))}),L1=function(e){return{}},P1=M(function(e,r,n){return{aN:n,g0:r,hc:e}}),z1=function(e){return h(Ne,v(function(r,n){var t=r.a,i=r.b;return h(ya,t,i,n)}),qc,e)},M1=M(function(e,r,n){return h(P1,e,r,z1(n))}),T1=M1,Yu=M(function(e,r,n){var t=r.a,i=r.b;return P(e,a(xv,P(t,i),n))}),k1=$([h(T1,"Parameters",!0,$([h(Yu,"s",P(1,2),1.5),h(Yu,"t",P(1,2),1.5)]))]),D1=v(function(e,r){return r}),V1=L(oa,114/255,159/255,207/255,1),Da=function(e){return e},Xa=function(e){return Da(Pn*(e/180))},tn=Vs,A1=v(function(e,r){var n=e,t=r,i=t.dV-n.dV,o=t.is-n.is,c=t.io-n.io,l=a(ar,he(c),a(ar,he(o),he(i)));if(l){var u=i/l,f=o/l,m=c/l,d=tn(m*m+f*f+u*u);return Y({io:m/d,is:f/d,dV:u/d})}else return J}),wo=function(e){return e},vl=v(function(e,r){var n=e,t=r;return{io:t.is*n.dV-t.dV*n.is,is:t.dV*n.io-t.io*n.dV,dV:t.io*n.is-t.is*n.io}}),ai=function(e){var r=e,n=a(ar,he(r.io),a(ar,he(r.is),he(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=tn(o*o+i*i+t*t);return Y({io:o/c,is:i/c,dV:t/c})}else return J},zi=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),F1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dV*n.dV}),Hf=v(function(e,r){var n=e,t=r;return be(t,n)>0}),I1=v(function(e,r){var n=e,t=r;return be(t,n)<0}),E1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),B1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),R1=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Er=0,Uf={io:0,is:0,dV:0},j1=M(function(e,r,n){return a(fc,function(t){var i=a(E1,a(B1,t,r),r);return a(fc,function(o){var c=a(vl,r,e),l=a(F1,n,c),u=a(Hf,Er,l)?c:a(I1,Er,l)?R1(c):Uf;return a(je,function(f){return R(t,o,f)},ai(u))},ai(i))},ai(e))}),N1=function(e){var r=e,n=he(r.dV),t=he(r.is),i=he(r.io);if(be(i,t)<1)if(be(i,n)<1){var o=tn(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=tn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(be(t,n)<1){var o=tn(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=tn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},fl=function(e){var r=N1(e),n=r,t=n,i=e,o=i,c={io:o.is*t.dV-o.dV*t.is,is:o.dV*t.io-o.io*t.dV,dV:o.io*t.is-o.is*t.io};return P(r,c)},_a=function(e){var r=e;return r},Rr=function(e){return e},G1=v(function(e,r){var n=fl(e),t=n.a,i=n.b;return Rr({dm:r,dT:t,dU:i,dW:e})}),W1=function(e){var r=a(zi,e.ba,e.d9),n=_a(e.fm),t=a(vl,r,n),i=h(j1,r,n,t);if(i.$){var f=ai(r);if(f.$){var d=fl(e.fm),b=d.a,s=d.b;return Rr({dm:e.d9,dT:s,dU:e.fm,dW:b})}else{var m=f.a;return a(G1,m,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return Rr({dm:e.d9,dT:u,dU:l,dW:c})}},Ir={io:0,is:0,dV:0},H1=function(e){return{$:0,a:e}},Ye=function(e){var r=e;return he(r)},ti=function(e){var r=e;return .5*r},U1=Ls,O1=function(e){var r=e;return U1(r)},J1=function(e){var r=ti(Ye(e.fq)),n=O1(r);return{dx:H1(n),dN:e.dN}},un=function(e){return e},ml=un({io:0,is:1,dV:0}),q1=function(e){var r=e.ba,n=e.d9,t=e.fm;return J1({fq:Xa(40),dN:W1({d9:wo(n),ba:wo(r),fm:a(Ae,ml,a(A1,Ir,wo(t)))})})},qi=v(function(e,r){return{$:0,a:e,b:r}}),So=v(function(e,r){var n=e,t=r;return be(t,n)>-1}),Co=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),$n=v(function(e,r){var n=e,t=r;return t-n}),Y1=un({io:-1,is:0,dV:0}),Z1=un({io:0,is:-1,dV:0}),Of=un({io:0,is:0,dV:-1}),Jf=un({io:1,is:0,dV:0}),sl=un({io:0,is:0,dV:1}),Qe=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),K1=gr(function(e,r,n,t,i,o){var c=a(So,n,o)?sl:Of,l=a(So,r,i)?ml:Z1,u=a(So,e,t)?Jf:Y1,f=R(Ye(a($n,e,t)),Ye(a($n,r,i)),Ye(a($n,n,o))),m=h(Qe,a(Co,e,t),a(Co,r,i),a(Co,n,o)),d=Rr({dm:m,dT:u,dU:l,dW:c});return{fN:d,a4:f}}),qn=function(e){var r=e;return r.io},Yn=function(e){var r=e;return r.is},Zn=function(e){var r=e;return r.dV},X1=v(function(e,r){return Je(K1,qn(e),Yn(e),Zn(e),qn(r),Yn(r),Zn(r))}),sc=M(function(e,r,n){return{io:e,is:r,dV:n}}),qf=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=R(n/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(qi,e,a(X1,h(sc,-c,-l,-u),h(sc,c,l,u)))}),Q1=L(oa,52/255,101/255,164/255,1),Zu=L(oa,211/255,215/255,207/255,1),Yi=function(e){return{$:5,a:e}},Mi=function(e){return Yi(e)},dc=function(e){return{$:0,a:e}},Yf=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Zf=M(function(e,r,n){return be(n,e)<0?e:be(n,r)>0?r:n}),Lo=function(e){return h(Zf,0,1,e<=.04045?e/12.92:a(ea,(e+.055)/1.055,2.4))},zt=dp,e_=function(e){var r=al(e),n=r.hu,t=r.gA,i=r.fS;return h(zt,Lo(n),Lo(t),Lo(i))},ii=function(e){return h(Yf,0,dc(e_(e)),dc(0))},dl=v(function(e,r){return{$:2,a:e,b:r}}),pl=v(function(e,r){return{$:4,a:e,b:r}}),gl=v(function(e,r){return{$:3,a:e,b:r}}),hl=v(function(e,r){return{$:1,a:e,b:r}}),r_=M(function(e,r,n){return{io:e,is:r,dV:n}}),n_=function(e){var r=e;return r},Zi=function(e){var r=e;return n_(r.fN)},Ki=function(e){var r=e;return r.a4},ca=function(e){var r=e;return r.dm},Mt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dV:t.dV+n.dV}}),Vn=function(e){var r=e;return r.dT},An=function(e){var r=e;return r.dU},Fn=function(e){var r=e;return r.dW},a_=v(function(e,r){return Rr({dm:a(Mt,e,ca(r)),dT:Vn(r),dU:An(r),dW:Fn(r)})}),t_=v(function(e,r){return{fN:a(a_,e,Zi(r)),a4:Ki(r)}}),Tt=v(function(e,r){return{gm:r,dm:e}}),i_=v(function(e,r){var n=r;return a(Tt,a(Mt,e,n.dm),n.gm)}),o_=v(function(e,r){var n=r;return{m:a(i_,e,n.m),g5:n.g5,hs:n.hs}}),bl=function(e){var r=e;return r},c_=function(e){return e},_l=v(function(e,r){var n=bl(r),t=n.a,i=n.b;return c_(P(e(t),e(i)))}),l_=v(function(e,r){return a(_l,Mt(e),r)}),Xi=function(e){var r=e;return r.f4},Qi=function(e){var r=e;return r.hs},yl=v(function(e,r){return{f4:r,hs:Ye(e)}}),u_=v(function(e,r){return a(yl,Qi(r),a(Mt,e,Xi(r)))}),xl=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return R(e(t),e(i),e(o))}),$_=v(function(e,r){return a(xl,Mt(e),r)}),wl=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(r_,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(qi,m,a(t_,o,c));case 1:var m=r.a,l=r.b;return a(hl,m,a($_,o,l));case 3:var m=r.a,u=r.b;return a(gl,m,a(u_,o,u));case 2:var m=r.a,f=r.b;return a(dl,m,a(o_,o,f));case 4:var m=r.a,d=r.b;return a(pl,m,a(l_,o,d));default:var b=r.a;return Yi(a(ne,wl(R(n,t,i)),b))}}),Un=function(e){return wl(R(0,e,0))},ra=Ss,Va=Cs,oi=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=ra(c),u=Va(c),f=t.gm,m=f,d=m.io*u,b=l*d,s=d*d,y=m.is*u,_=l*y,S=d*y,C=y*y,x=1-2*(s+C),T=m.dV*u,H=l*T,X=2*(S-H),ae=2*(S+H),te=d*T,ie=2*(te+_),re=2*(te-_),q=y*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+X*o.is+ie*o.dV,is:ae*o.io+me*o.is+de*o.dV,dV:re*o.io+pe*o.is+x*o.dV}}),kt=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=ra(c),u=Va(c),f=t.dm,m=f,d=o.io-m.io,b=o.is-m.is,s=o.dV-m.dV,y=t.gm,_=y,S=_.io*u,C=l*S,x=S*S,T=_.is*u,H=l*T,X=S*T,ae=T*T,te=1-2*(x+ae),ie=_.dV*u,re=l*ie,q=2*(X-re),de=2*(X+re),pe=S*ie,Me=2*(pe+H),Se=2*(pe-H),me=T*ie,Te=2*(me-C),F=2*(me+C),I=ie*ie,E=1-2*(ae+I),B=1-2*(x+I);return{io:m.io+E*d+q*b+Me*s,is:m.is+de*d+B*b+Te*s,dV:m.dV+Se*d+F*b+te*s}}),v_=M(function(e,r,n){return Rr({dm:h(kt,e,r,ca(n)),dT:h(oi,e,r,Vn(n)),dU:h(oi,e,r,An(n)),dW:h(oi,e,r,Fn(n))})}),f_=M(function(e,r,n){return{fN:h(v_,e,r,Zi(n)),a4:Ki(n)}}),m_=v(function(e,r){var n=a(kt,e,r),t=a(oi,e,r);return function(i){var o=i;return a(Tt,n(o.dm),t(o.gm))}}),s_=M(function(e,r,n){var t=n;return{m:h(m_,e,r,t.m),g5:t.g5,hs:t.hs}}),d_=M(function(e,r,n){return a(_l,a(kt,e,r),n)}),p_=M(function(e,r,n){return a(yl,Qi(n),h(kt,e,r,Xi(n)))}),g_=M(function(e,r,n){return a(xl,a(kt,e,r),n)}),Sl=M(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(qi,l,h(f_,e,r,t));case 1:var l=n.a,i=n.b;return a(hl,l,h(g_,e,r,i));case 3:var l=n.a,o=n.b;return a(gl,l,h(p_,e,r,o));case 2:var l=n.a,c=n.b;return a(dl,l,h(s_,e,r,c));case 4:var l=n.a,u=n.b;return a(pl,l,h(d_,e,r,u));default:var f=n.a;return Yi(a(ne,a(Sl,e,r),f))}}),Cl=ml,h_=a(Tt,Ir,Cl),Ti=v(function(e,r){return h(Sl,h_,Da(e),r)}),ke=v(function(e,r){var n=r;return e*n}),vn=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Dt=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dV:t.dV+r*(i.dV-t.dV)}}),b_=M(function(e,r,n){var t=Zi(n),i=Vn(t),o=An(t),c=Fn(t),l=h(Dt,e,r,ca(t)),u=r>=0?Rr({dm:l,dT:i,dU:o,dW:c}):Rr({dm:l,dT:vn(i),dU:vn(o),dW:vn(c)}),f=Ki(n),m=f.a,d=f.b,b=f.c,s=Ye(a(ke,r,m)),y=Ye(a(ke,r,d)),_=Ye(a(ke,r,b));return{fN:u,a4:R(s,y,_)}}),Ll=function(e){var r=e;return r.m},Kf=function(e){var r=e;return r.gm},Ku=function(e){return Kf(Ll(e))},Xf=function(e){var r=e;return r.dm},__=function(e){return Xf(Ll(e))},Qf=function(e){var r=e;return r.g5},em=function(e){var r=e;return r.hs},y_=M(function(e,r,n){var t=Ye(a(ke,r,em(n))),i=Ye(a(ke,r,Qf(n))),o=r>=0?Ku(n):vn(Ku(n)),c=h(Dt,e,r,__(n));return{m:a(Tt,c,o),g5:i,hs:t}}),x_=M(function(e,r,n){return a(_l,a(Dt,e,r),n)}),w_=M(function(e,r,n){return a(yl,a(ke,he(r),Qi(n)),h(Dt,e,r,Xi(n)))}),S_=M(function(e,r,n){return a(xl,a(Dt,e,r),n)}),On=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return a(qi,c,h(b_,Ir,e,n));case 1:var c=r.a,t=r.b;return a(hl,c,h(S_,Ir,e,t));case 3:var c=r.a,i=r.b;return a(gl,c,h(w_,Ir,e,i));case 2:var c=r.a,o=r.b;return a(dl,c,h(y_,Ir,e,o));case 4:var c=r.a,l=r.b;return a(pl,c,h(x_,Ir,e,l));default:var u=r.a;return Yi(a(ne,On(e),u))}}),C_=function(){var e=function(n){return a(Un,-1,a(qf,n,R(10,1,10)))},r=function(n){return Mi($([e(n),a(Ti,Si(45),e(n))]))};return Mi($([r(ii(Zu)),a(Un,-.1,a(On,1.1,r(ii(Q1)))),a(Un,-.2,a(On,1.2,r(ii(Zu))))]))}(),L_=v(function(e,r){return a(je,function(n){if(n.$)return 0;var t=n.b;return t},a(Ni,e,r.aN))}),P_=v(function(e,r){return a(Ae,0,cl(a(yn,L_(e),r)))}),z_=v(function(e,r){return a(P_,e,r.gb)}),Xu=z_,Qu=Ps,M_=ee(function(e,r,n,t){var i=R(e,r,n),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,f=l*2-u,m=function(y){var _=y<0?y+1:y>1?y-1:y;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},d=m(o-1/3),b=m(o),s=m(o+1/3);return L(oa,s,b,d,t)}),T_=M(function(e,r,n){return L(M_,e,r,n,1)}),Ht=function(e){return wl(R(e,0,0))},Pl=sl,k_=a(Tt,Ir,Pl),e$=v(function(e,r){return h(Sl,k_,Da(e),r)}),rm=v(function(e,r){return(r-mv(r/e)*e)/e}),D_=function(e){return 2*Pn*e},Po=ee(function(e,r,n,t){return e+(r-e)*(1+ra(D_(a(rm,n,t))))/2}),pc=gr(function(e,r,n,t,i,o){var c=function(s){return h(T_,L(Po,s/6,1,10,e.bt),.6,.6)},l=v(function(s,y){return tn(a(ea,s,2)+a(ea,y,2))}),u=a(qf,ii(c(o)),R(r,n,n)),f=P(a(l,t,i),a(l,r-t,i)),m=f.a,d=f.b,b=o?$([a(Un,n/2,a(Ht,-(r/2),a(On,m/r,a(e$,a(Qu,i,t),a(Un,n/2,a(Ht,r/2,a(Ti,L(Po,-2,2,8,e.bt),a(On,.86,Je(pc,e,r,n,t,i,o-1))))))))),a(Un,n/2,a(Ht,r/2,a(On,d/r,a(e$,-a(Qu,i,r-t),a(Un,n/2,a(Ht,-(r/2),a(Ti,L(Po,2,-2,8,Pn+e.bt),a(On,.86,Je(pc,e,r,n,t,i,o-1)))))))))]):D;return Mi(a(z,u,b))}),V_=v(function(e,r){return 360*a(rm,e,r)}),A_=v(function(e,r){return $([a(Ti,a(V_,1e3,e.bt),Mi($([C_,Je(pc,e,2,2,a(Xu,"s",e),a(Xu,"t",e),5)])))])}),F_=function(e){return e},Kn=function(e){return e},I_=function(e){return Kn(.01*e)},r$=function(e){return e},E_=function(e){return e},B_=function(e){return{$:0,a:e}},R_=B_,j_={$:3},N_=j_,G_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),W_=G_,H_=function(e){return{$:1,a:e}},U_=H_,O_=function(e){return a(jr,"height",k(e))},J_=qv,q_=function(e){return{$:2,a:e}},Y_=q_,Z_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Ee(l*1e3)/1e3},c=function(l){return Ee(l*1e4)/100};return xa($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},K_=v(function(e,r){switch(r.$){case 0:return a(a0,e,r);case 1:return a(t0,e,r);case 2:return a(i0,e,r);case 3:return a(o0,e,r);case 4:return a(c0,e,r);default:return a(l0,e,r)}}),X_=v(function(e,r){switch(r.$){case 0:return a(Vp,e,r);case 1:return a(Ap,e,r);case 2:return a(Fp,e,r);case 3:return a(Ip,e,r);case 4:return a(Ep,e,r);case 5:return a(Bp,e,r);case 6:return a(Rp,e,r);case 7:return a(jp,e,r);default:return Np(e)}}),Q_=M(function(e,r,n){return h(n0,e,r,n)}),n$=function(e){var r=e;return r},Ba=yp,zo=L(Ba,1,1,1,1),Wr=M(function(e,r,n){return a(ne,function(t){return a(t,r,n)},e)}),e2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),r2=v(function(e,r){var n=e,t=r.io,i=r.is;return h(e2,n*t/i,n,n*(1-t-i)/i)}),n2=function(e){var r=e.a,n=e.b,t=e.c;return h(zt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},zl=v(function(e,r){return n2(a(r2,e,r))}),nm=v(function(e,r){return{ek:_e(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cD,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cD,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cD,cD:e.cD*r.cD}}),Jr=Pp,a2=function(e){return Jr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Mo=Ze(function(e,r,n,t,i){var o=t.ek?1:-1,c=L(Ba,t.cD,t.cD,t.cD,o);return Je(i,e,c,a2(t),t.ek,r,n)}),am=gr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,d=a(nm,c,t),b=l,s=o;e=u,r=f,n=m,t=d,i=b,o=s;continue e;case 1:var y=i.b,_=a(z,V(Mo,e,r,n,t,y),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(z,V(Mo,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var x=i.a,T=a(z,V(Mo,e,r,n,t,x),o.hI);return{P:o.P,_:o._,hI:T};default:var H=i.a;return h(Ne,L(am,e,r,n,t),o,H)}}),t2=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),tm=t2,Ml=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),i2=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(Ml,518,r,n,t)},o2=v(function(e,r){return{$:6,a:e,b:r}}),c2=o2,im=$([i2({ab:1,ac:0,ai:!1}),L(tm,!1,!1,!1,!1),a(c2,0,1)]),Aa=519,Tl=8,om=15,Ca=7681,l2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ie=Dp,u2=v(function(e,r){return{$:0,a:e,b:r}}),$2=u2({d5:1,ei:0,eS:5}),br=mp,v2=$2($([{cy:a(br,-1,-1)},{cy:a(br,1,-1)},{cy:a(br,-1,1)},{cy:a(br,1,1)}])),f2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cy"},uniforms:{}},m2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},kl=M(function(e,r,n){var t=e.dy,i=e.dd,o=e.dS,c=v(function(f,m){var d=f;return m(d)}),l=v(function(f,m){var d=f;return m(d)}),u=function(f){return a(Xe,c(f.bP),a(Xe,l(f.bA),a(Xe,l(f.bY),l(f.bZ))))};return a(u,n,a(u,r,h(m2,t,i,o)))}),Dl=function(e){return h(kl,{dd:e.dd,dy:e.dy,dS:e.dS},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},Vl=function(e){return V(Ie,$([Dl(e),L(tm,!1,!1,!1,!1)]),f2,l2,v2,{})},s2=Vl({bA:Ca,dd:0,dy:Tl,bP:Aa,dS:om,bY:Ca,bZ:Ca}),d2=516,a$=5386,or=7680,p2=function(e){return a(ea,2,e+4)},cm=function(e){return Vl({bA:or,dd:om,dy:Tl,bP:d2,dS:p2(e),bY:a$,bZ:a$})},g2=M(function(e,r,n){return dr($([h(Wr,e,n,im),$([cm(r),s2])]))}),h2=v(function(e,r){return dr(a(cv,g2(e),r))}),b2=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(Ml,513,r,n,t)},_2=b2({ab:1,ac:0,ai:!0}),y2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},x2=function(e){var r=e.cA,n=e.cg,t=e.b1,i=e.b_,o=e.b7,c=e.fI,l=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,y=f.b,_=f.c;return y2(m)(d)(b)(s)(y)(_)(r)(n)(t)(i)});return a(l,o,c)},w2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),t$=v(function(e,r){var n=e,t=r;return h(w2,32774,n,t)}),S2=1,i$=771,C2=770,Al=x2({b_:0,fI:a(t$,S2,i$),b1:0,b7:a(t$,C2,i$),cg:0,cA:0}),$a=$([_2,Al]),L2=function(e){var r=e;return r.eL},P2=function(e){var r=e;return r.eM},lm=function(e){var r=e;return r.eN},z2=function(e){var r=e;return r.eO},M2=function(e){var r=e;return r.eP},um=function(e){var r=e;return r.eQ},$m=function(e){return R(a($n,z2(e),L2(e)),a($n,M2(e),P2(e)),a($n,um(e),lm(e)))},o$=function(e){var r=e;return ca(r)},T2=function(e){return e},k2=function(e){return Rr({dm:T2({io:e.K,is:e.L,dV:e.M}),dT:un({io:e.t,is:e.u,dV:e.v}),dU:un({io:e.w,is:e.x,dV:e.y}),dW:un({io:e.z,is:e.A,dV:e.B})})},To=v(function(e,r){var n=e,t=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,f=u;return{io:t.io*f.io+t.is*f.is+t.dV*f.dV,is:t.io*l.io+t.is*l.is+t.dV*l.dV,dV:t.io*o.io+t.is*o.is+t.dV*o.dV}}),vm=v(function(e,r){var n=e,t=r,i=n.dm,o=i,c=t.io-o.io,l=t.is-o.is,u=t.dV-o.dV,f=n.dW,m=f,d=n.dU,b=d,s=n.dT,y=s;return{io:c*y.io+l*y.is+u*y.dV,is:c*b.io+l*b.is+u*b.dV,dV:c*m.io+l*m.is+u*m.dV}}),fm=v(function(e,r){return{dm:a(vm,e,ca(r)),dT:a(To,e,Vn(r)),dU:a(To,e,An(r)),dW:a(To,e,Fn(r))}}),ki=function(e){var r=e;return r},We=v(function(e,r){var n=e,t=r;return a(ar,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(wa,n,t)}),D2=v(function(e,r){var n=ki(r),t=ki(e);return{eL:a(We,t.eL,n.eL),eM:a(We,t.eM,n.eM),eN:a(We,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Tr=function(e){var r=e;return r},V2=function(e){var r=e;return R(r.io,r.is,r.dV)},at=v(function(e,r){var n=e,t=r;return t+n}),A2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ti(Ye(t)),c=ti(Ye(n)),l=ti(Ye(i)),u=V2(r),f=u.a,m=u.b,d=u.c;return{eL:a(at,c,f),eM:a(at,o,m),eN:a(at,l,d),eO:a($n,c,f),eP:a($n,o,m),eQ:a($n,l,d)}}),c$=ee(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,f=i.is*r,m=i.io*r,d=Tr(Fn(e)),b=he(l*d.io)+he(c*d.is)+he(o*d.dV),s=Tr(An(e)),y=he(l*s.io)+he(c*s.is)+he(o*s.dV),_=Tr(Vn(e)),S=he(l*_.io)+he(c*_.is)+he(o*_.dV),C=a(A2,R(S,y,b),a(vm,e,h(sc,m,f,u)));if(t.$)return Y(C);var x=t.a;return Y(a(D2,x,C))}),gc=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,y=r,_=n,S=o;e=s,r=y,n=_,t=S;continue e;case 1:var c=i.a,l=L(c$,e,r,c,n),s=e,y=r,_=l,S=o;e=s,r=y,n=_,t=S;continue e;case 2:var s=e,y=r,_=n,S=o;e=s,r=y,n=_,t=S;continue e;case 3:var c=i.a,l=L(c$,e,r,c,n),s=e,y=r,_=l,S=o;e=s,r=y,n=_,t=S;continue e;case 4:var u=i.a,s=e,y=r,_=L(gc,e,r,n,u),S=o;e=s,r=y,n=_,t=S;continue e;default:var f=i.a,m=i.b,d=a(fm,k2(f),e),b=r*f.cD,s=e,y=r,_=L(gc,d,b,n,$([m])),S=o;e=s,r=y,n=_,t=S;continue e}}else return n}),Ra=pp,ja=gp,Na=hp,mm=function(e){return{$:4,a:e}},F2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(z,n,r);e=i,r=o;continue e}else return r}),Vt=function(e){return mm(a(F2,e,D))},I2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cD:1},E2=function(e){var r=e;return r},l$=Vl({bA:Ca,dd:0,dy:Tl,bP:Aa,dS:255,bY:Ca,bZ:Ca}),B2=function(e){var r=e,n=a(ar,he(r.io),a(ar,he(r.is),he(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=tn(o*o+i*i+t*t);return c*n}else return Er},lr={b1:0,f3:!1,cg:0,dv:0,cA:0,dK:0,io:0,is:0,dV:0},Cr=v(function(e,r){var n=e,t=r;return Jr({eu:n.io,ev:n.cA,ew:t.io,ex:t.cA,ey:n.is,ez:n.cg,eA:t.is,eB:t.cg,eC:n.dV,eD:n.b1,eE:t.dV,eF:t.b1,eG:n.dK,eH:n.dv,eI:t.dK,eJ:t.dv})}),Qa=P({bG:a(Cr,lr,lr),cn:a(Cr,lr,lr),co:a(Cr,lr,lr),cp:a(Cr,lr,lr)},L(Ba,0,0,0,0)),u$=function(e){var r=e;return-r},sm=514,dm=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(Ml,515,r,n,t)},pm=240,R2=$([dm({ab:1,ac:0,ai:!0}),Dl({bA:or,dd:pm,dy:0,bP:sm,dS:0,bY:or,bZ:or}),Al]),j2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,c=Ye(t),l=c,u=Ye(i),f=u,m=n.dx;if(m.$){var b=m.a;return Yo(f)?Jr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Jr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-l),eF:-(f+l)/(f-l),eG:0,eH:0,eI:0,eJ:1})}else{var d=m.a;return Yo(f)?Jr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Jr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(f+l)/(f-l),eF:-2*f*l/(f-l),eG:0,eH:0,eI:-1,eJ:0})}}),Ut=v(function(e,r){return(1&e>>r)===1?0:1}),N2=function(e){return $([dm({ab:1,ac:0,ai:!0}),Dl({bA:or,dd:pm,dy:e,bP:sm,dS:0,bY:or,bZ:or}),Al])},G2=M(function(e,r,n){return dr(a(ne,function(t){var i=t<<4,o=L(Ba,a(Ut,t,0),a(Ut,t,1),a(Ut,t,2),a(Ut,t,3));return h(Wr,e,P(r,o),N2(i))},a(cn,1,a(ea,2,n)-1)))}),La=function(e){var r=e;return r},W2=zp,$$=function(e){var r=e;return vn(Fn(r))},gm=Jf,H2={dm:Ir,dT:gm,dU:Cl,dW:Pl},eo=function(e){var r=e;return r},U2=function(e){var r=eo(ca(e)),n=Tr(Fn(e)),t=Tr(An(e)),i=Tr(Vn(e));return Jr({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dV,eD:t.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},O2=v(function(e,r){var n=r;return U2(a(fm,n,e))}),J2=function(e){return a(O2,H2,e)},q2=function(e){var r=e;return r.dN},Y2=function(e){var r=e;return Vn(r)},Z2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),K2=function(e){var r=e;return An(r)},X2=function(e){var r=q2(e.f0),n=Rr({dm:o$(r),dT:Y2(r),dU:K2(r),dW:vn($$(r))}),t=Vt(e.a8),i=t,o=L(gc,n,1,J,$([i]));if(o.$===1)return D;var c=o.a,l=J2(r),u=a(ke,.99,a(We,Ye(e.a3),u$(lm(c)))),f=$m(c),m=f.a,d=f.b,b=f.c,s=B2(h(Z2,m,d,b)),y=a(ke,1.01,a(at,s,u$(um(c)))),_=a(j2,e.f0,{fM:e.fM,gv:y,hd:u}),S=W2(_).eJ,C=S?Tr(vn($$(r))):La(o$(r)),x=function(){var me=e.cH;switch(me.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var Te=me.a;return P(3,Te);case 4:var Te=me.a;return P(4,Te);default:return P(5,0)}}(),T=x.a,H=x.b,X=e.ce,ae=X,te=a(zl,ae,e.cL),ie=te,re=Jr({eu:0,ev:C.io,ew:Ra(ie),ex:e.ff,ey:0,ez:C.is,eA:ja(ie),eB:E2(s),eC:0,eD:C.dV,eE:Na(ie),eF:T,eG:0,eH:S,eI:0,eJ:H}),q=Je(am,re,l,_,I2,i,{P:D,_:D,hI:D}),de=e.cm;switch(de.$){case 0:var pe=de.a;return dr($([h(Wr,q.P,P(pe,zo),$a),h(Wr,q._,Qa,$a)]));case 1:var pe=de.a;return dr($([h(Wr,q.P,Qa,$a),$([l$]),h(Wr,q.hI,pe.bG,im),$([cm(0)]),h(Wr,q.P,P(pe,zo),R2),h(Wr,q._,Qa,$a)]));default:var Me=de.a,Se=de.b;return dr($([h(Wr,q.P,P(Se,zo),$a),$([l$]),a(h2,q.hI,Me),h(G2,q.P,Se,Xn(Me)),h(Wr,q._,Qa,$a)]))}},Q2=function(e){return a(jr,"width",k(e))},ey=v(function(e,r){var n=$([U_(1),Y_(0),R_(!0),L(W_,0,0,0,0)]),t=function(){var T=e.cP;switch(T.$){case 0:return R(n,"0",1);case 1:return R(a(z,N_,n),"1",1);default:var H=T.a;return R(n,"0",H)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,f=l.b,m=n$(f),d=a(_r,"height",k(m)+"px"),b=n$(u),s=b/m,y=a(Ea,function(T){return X2({fM:s,f0:e.f0,a3:e.a3,a8:T.a8,ce:T.ce,cm:T.cm,ff:c,cH:T.cH,cL:T.cL})},r),_=a(_r,"width",k(b)+"px"),S=e.a1,C=S,x=Z_(C);return h(J_,"div",$([a(_r,"padding","0px"),_,d]),$([P(o,h(Q_,i,$([Q2(Ee(b*c)),O_(Ee(m*c)),_,d,a(_r,"display","block"),a(_r,"background-color",x)]),y))]))}),ry=function(e){return a(ey,{cP:e.cP,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,ce:e.ce,cm:e.cm,cH:e.cH,cL:e.cL}]))},hm=function(e){return e},v$=hm({io:.31271,is:.32902}),ny=v(function(e,r){var n=e,t=Tr(r.gm),i=t.io,o=t.is,c=t.dV,l=a(zl,r.c1,r.cU),u=l;return{b1:Na(u),f3:n,cg:ja(u),dv:0,cA:Ra(u),dK:1,io:-i,is:-o,dV:-c}}),ay=function(e){return e},ty=function(e){return ay(1.2*a(ea,2,e))},ko=function(e){return e},iy={$:0},oy=iy,bm=function(e){return e},f$=function(e){var r=e;return r},cy=function(e){e:for(;;){if(_e(e.gZ,Er)&&_e(e.g_,Er))return lr;if(a(Hf,Ye(e.gZ),Ye(e.g_))){var r={cU:e.cU,gZ:e.g_,g_:e.gZ,fm:vn(e.fm)};e=r;continue e}else{var n=he(f$(e.g_)/Pn),t=he(f$(e.gZ)/Pn),i=Tr(e.fm),o=i.io,c=i.is,l=i.dV,u=a(zl,bm(1),e.cU),f=u;return{b1:t*Na(f),f3:!1,cg:t*ja(f),dv:n/t,cA:t*Ra(f),dK:3,io:o,is:c,dV:l}}}},m$=function(e){return cy({cU:e.cU,gZ:e.c1,g_:Er,fm:e.fm})},ly=function(e){var r=e;return r},_m=function(e){var r=h(Zf,1667,25e3,ly(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return hm({io:n,is:t})},ym=function(e){return e},uy=_m(ym(12e3)),$y=_m(ym(5600)),vy=function(e){return{$:2,a:e}},fy=function(e){return vy(e)},my=v(function(e,r){return{$:2,a:e,b:r}}),xm=function(e){return{$:0,a:e}},Ot=function(e){var r=e;return r},sy=function(e){var r=e;return r.f3},dy=xm(Qa.a),py=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?P(a(z,t,o),c):P(o,a(z,t,c))});return h(rr,n,P(D,D),r)}),gy=function(e){var r=e;return Jr({eu:r.io,ev:r.cA,ew:0,ex:0,ey:r.is,ez:r.cg,eA:0,eB:0,eC:r.dV,eD:r.b1,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},hy=ze(function(e,r,n,t,i,o,c,l){var u=a(py,sy,$([Ot(e),Ot(r),Ot(n),Ot(t)])),f=u.a,m=u.b;if(f.b){var d=Z(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,y=s.a,_=s.b,S=_.a,C=_.b,x=C.a;return a(my,a(ne,gy,f),{bG:a(Cr,b,y),cn:a(Cr,S,x),co:a(Cr,i,o),cp:a(Cr,c,l)})}else return dy}else return xm({bG:a(Cr,e,r),cn:a(Cr,n,t),co:a(Cr,i,o),cp:a(Cr,c,l)})}),by=M(function(e,r,n){return _t(hy,e,r,n,lr,lr,lr,lr,lr)}),_y=function(e){var r=a(ny,E_(e.hI),{cU:$y,gm:e.hZ,c1:ko(8e4)}),n=m$({cU:uy,c1:ko(2e4),fm:e.fm}),t=m$({cU:v$,c1:ko(15e3),fm:vn(e.fm)}),i=h(by,r,n,t);return ry({cP:fy(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,ce:ty(15),cm:i,cH:oy,cL:v$})},wm=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),yy=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Sm=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Cm=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),xy=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),wy=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),Sy=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Fl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(Sy,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(wm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(yy,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(Sm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(wy,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(Cm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(xy,n,t,i,1);case 8:return e;case 9:return e;default:return e}},Il={$:0},Cy=ze(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=ki(c(u)),d=a(Oe,m.eO,e),b=a(We,m.eL,r),s=a(Oe,m.eP,n),y=a(We,m.eM,t),_=a(Oe,m.eQ,i),S=a(We,m.eN,o),C=c,x=f;e=d,r=b,n=s,t=y,i=_,o=S,c=C,l=x;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),Ly=M(function(e,r,n){var t=ki(e(r));return _t(Cy,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),Do=v(function(e,r){var n=e,t=r;return be(t,n)<1}),Lm=function(e){return a(Do,e.eL,e.eO)&&a(Do,e.eM,e.eP)&&a(Do,e.eN,e.eQ)?e:{eL:a(We,e.eO,e.eL),eM:a(We,e.eP,e.eM),eN:a(We,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},ht=function(e){var r=e;return r},Pm=function(e){var r=ht(e),n=r.a,t=r.b,i=r.c,o=qn(n),c=Yn(n),l=Zn(n),u=qn(t),f=Yn(t),m=Zn(t),d=qn(i),b=Yn(i),s=Zn(i);return Lm({eL:a(We,o,a(We,u,d)),eM:a(We,c,a(We,f,b)),eN:a(We,l,a(We,m,s)),eO:a(Oe,o,a(Oe,u,d)),eP:a(Oe,c,a(Oe,f,b)),eQ:a(Oe,l,a(Oe,m,s))})},zm=bp,fr=function(e){return zm(eo(e))},Mm=function(e){var r=e;return r},ro=function(e){return zm(Mm(e))},Py=v(function(e,r){var n=e,t=r,i=a(ar,he(t.io),a(ar,he(t.is),he(t.dV)));if(i){var o=t.dV/i,c=t.is/i,l=t.io/i,u=tn(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return Uf}),zy=Py(bm(1)),Tm=M(function(e,r,n){var t=a(zi,r,n),i=a(zi,e,r);return zy(a(vl,t,i))}),My=function(e){var r=ht(e),n=r.a,t=r.b,i=r.c,o=ro(h(Tm,n,t,i));return R({q:o,cy:fr(n)},{q:o,cy:fr(t)},{q:o,cy:fr(i)})},Ty=v(function(e,r){return{$:2,a:e,b:r}}),km=Ty({d5:3,ei:0,eS:4}),ky=function(e){if(e.b){var r=e.a,n=e.b,t=km(a(ne,My,e)),i=h(Ly,Pm,r,n);return L(wm,i,e,t,0)}else return Il},Sr=M(function(e,r,n){return R(e,r,n)}),Dm=function(){var e=Kn(1),r=Kn(1),n=Kn(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),c=h(Qe,o,i,t),l=a(ke,.5,e),u=h(Qe,o,i,l),f=a(ke,.5,r),m=h(Qe,o,f,t),d=h(Qe,o,f,l),b=a(ke,.5,n),s=h(Qe,b,i,t),y=h(Qe,b,f,t),_=h(Qe,b,i,l),S=h(Qe,b,f,l);return Fl(ky($([h(Sr,c,y,s),h(Sr,c,m,y),h(Sr,u,_,S),h(Sr,u,S,d),h(Sr,s,y,S),h(Sr,s,S,_),h(Sr,c,d,m),h(Sr,c,u,d),h(Sr,c,s,_),h(Sr,c,_,u),h(Sr,m,S,y),h(Sr,m,d,S)])))}(),Jt={$:0},Dy=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Vy=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=ro(h(Tm,u,l,c)),m={q:f,cy:fr(u)},d={q:f,cy:fr(l)},b={q:f,cy:fr(c)};return a(z,m,a(z,d,a(z,b,n)))}),El=function(e){var r=e;return r.H},Ay=ee(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var c=t.a;return Y(h(e,i,o,c))}),hc=4294967295>>>32-lt,bc=ds,Fy=M(function(e,r,n){e:for(;;){var t=hc&r>>>e,i=a(bc,t,n);if(i.$){var f=i.a;return a(bc,hc&r,f)}else{var o=i.a,c=e-lt,l=r,u=o;e=c,r=l,n=u;continue e}}}),Iy=function(e){return e>>>5<<5},Ey=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||be(e,n)>-1?J:be(e,Iy(n))>-1?Y(a(bc,hc&e,o)):Y(h(Fy,t,e,i))}),Bl=function(e){var r=e;return r.au},Vo=v(function(e,r){return a(Ey,e,Bl(r))}),By=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(Ay,M(function(c,l,u){return R(c,l,u)}),a(Vo,t,e),a(Vo,i,e),a(Vo,o,e))};return a(yn,r,El(e))},Ry=M(function(e,r,n){e:for(;;){var t=a(Gc,xr,e),i=t.a,o=t.b;if(be(Jo(i),xr)<0)return a(dv,!0,{C:r,n,r:i});var c=o,l=a(z,fv(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Rl=function(e){return e.b?h(Ry,e,D,0):$v},jy=v(function(e,r){return!a(Ct,a(Lt,G0,e),r)}),Ny=function(e){var r=e.a;return r},Vm=v(function(e,r){var n=Ny(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&be(o,n)<0&&c>=0&&be(c,n)<0&&l>=0&&be(l,n)<0};return a(jy,t,r)?{H:r,au:e}:{H:a(Ov,t,r),au:e}}),Gy=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),At=Gy({d5:1,ei:3,eS:4}),ci=v(function(e,r){var n=La(r),t=La(e);return P(R(t.io,t.is,t.dV),R(n.io,n.is,n.dV))}),s$=h(zt,0,0,0),Ao=gr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Ni,a(ci,e,r),i);if(f.$){var d={q:s$,cy:fr(r)},b={q:s$,cy:fr(e)},s=u+1,y=u;return R(a(z,R(n,y,s),a(z,R(n,s,t),c)),a(z,d,a(z,b,l)),u+2)}else{var m=f.a;return R(a(z,R(n,m,t),c),l,u)}}),Wy=Ze(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),d=e(l),b=e(c),s=t+2,y=t+1,_=t,S=e,C=r,x=f,T=t+3,H=Je(Ao,m,b,s,_,r,Je(Ao,d,m,y,s,r,Je(Ao,b,d,_,y,r,i)));e=S,r=C,n=x,t=T,i=H;continue e}else{var X=i,ae=X.a,te=X.b;return P(ae,sr(te))}}),Hy=Ze(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),d=e(l),b=e(c),s=n+2,y=n+1,_=n,S=h(ya,a(ci,b,m),s,h(ya,a(ci,m,d),y,h(ya,a(ci,d,b),_,i))),C=a(z,R(_,y,s),t),x=e,T=f,H=n+3,X=C,ae=S;e=x,r=T,n=H,t=X,i=ae;continue e}else return R(t,i,n)}),Rn=M(function(e,r,n){var t=By(n),i=h(rr,Vy(r),D,t),o=V(Hy,r,t,0,D,qc),c=o.a,l=o.b,u=o.c,f=V(Wy,r,l,t,0,R(c,D,u)),m=f.a,d=f.b,b=gn(d)?i:Z(i,d);return h(Dy,e,a(Vm,Rl(b),m),a(At,b,m))}),_c=function(e){return{H:a(ne,function(r){return R(3*r,3*r+1,3*r+2)},a(cn,0,Xn(e)-1)),au:Rl(dr(a(ne,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},Am=function(e){switch(e.$){case 0:return Jt;case 1:var t=e.a,r=e.b,n=a(ne,ht,r);return h(Rn,t,Br,_c(n));case 2:var t=e.a,r=e.b,n=a(ne,ht,r);return h(Rn,t,Br,_c(n));case 3:var t=e.a,i=e.b;return h(Rn,t,Br,i);case 4:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cy},i);case 5:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cy},i);case 6:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cy},i);case 7:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cy},i);case 8:return Jt;case 9:return Jt;default:return Jt}},d$=Am(Dm),Fm={$:0},U=Fm,er=v(function(e,r){return{$:1,a:e,b:r}}),Uy={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},Oy=1029,Jy=function(e){return{$:5,a:e}},Im=function(e){var r=e;return Jy(r)},qy=Im(Oy),Yy=1028,Zy=Im(Yy),mr=M(function(e,r,n){return r===1?e?a(z,qy,n):a(z,Zy,n):n}),Em={src:`
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
    `,attributes:{position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Fo=ee(function(e,r,n,t){return a(er,r,ze(function(i,o,c,l,u,f,m,d){return V(Ie,h(mr,l,t,d),Em,Uy,n,{b8:e,c,d:o,e:f,f:i,g:u})}))}),jl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Bm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qr=ee(function(e,r,n,t){return a(er,r,ze(function(i,o,c,l,u,f,m,d){return V(Ie,h(mr,l,t,d),Bm,jl,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),Rm=v(function(e,r){return{$:3,a:e,b:r}}),Ky={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cx",sceneProperties:"f"}},jm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cx",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Xy=ee(function(e,r,n,t){return a(Rm,n,ze(function(i,o,c,l,u,f,m,d){return V(Ie,d,jm,Ky,t,{aO:e,c,d:o,cx:r,e:f,f:i,g:u})}))}),Nl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Ft=function(e){var r=e;return r},no=_p,en=Ze(function(e,r,n,t,i){return a(er,n,ze(function(o,c,l,u,f,m,d,b){return V(Ie,h(mr,u,i,b),Bm,Nl,t,{a6:a(no,Ft(r),e),c:l,d:c,e:m,f:o,g:f})}))}),Qy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cx",sceneProperties:"f"}},ex=Ze(function(e,r,n,t,i){return a(Rm,t,ze(function(o,c,l,u,f,m,d,b){return V(Ie,b,jm,Qy,i,{a6:a(no,Ft(r),e),c:l,d:c,cx:n,e:m,f:o,g:f})}))}),Nm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},Gm={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},qt=ee(function(e,r,n,t){return a(er,r,ze(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return V(Ie,h(mr,l,t,d),Gm,Nm,n,{U:s,bG:b.bG,cn:b.cn,co:b.co,cp:b.cp,de:e,c,d:o,e:f,f:i,g:u})}))}),Wm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Hm={src:`
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
    `,attributes:{normal:"q",position:"cy",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},rx=gr(function(e,r,n,t,i,o){return a(er,t,ze(function(c,l,u,f,m,d,b,s){var y=b.a,_=b.b;return V(Ie,h(mr,f,o,s),Hm,Wm,i,{U:_,bG:y.bG,cn:y.cn,co:y.co,cp:y.cp,df:e,c:u,d:l,bg:r,e:d,f:c,bm:n,g:m})}))}),Um={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cT",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},nx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return a(er,u,ze(function(d,b,s,y,_,S,C,x){var T=C.a,H=C.b;return V(Ie,h(mr,y,m,x),Hm,Um,f,{cT:e,cV:r,cW:o,cX:t,U:H,bG:T.bG,cn:T.cn,co:T.co,cp:T.cp,di:i,c:s,d:b,bg:c,e:S,dC:n,f:d,bm:l,g:_})}))}}}}}}}}}}},Om={src:`
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
    `,attributes:{},uniforms:{baseColor:"cS",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Yt=gr(function(e,r,n,t,i,o){return a(er,t,ze(function(c,l,u,f,m,d,b,s){var y=b.a,_=b.b;return V(Ie,h(mr,f,o,s),Gm,Om,i,{cS:e,U:_,bG:y.bG,cn:y.cn,co:y.co,cp:y.cp,dh:n,c:u,d:l,e:d,dB:r,f:c,g:m})}))}),ax=function(e){return{$:0,a:e}},p$=v(function(e,r){return{$:1,a:e,b:r}}),tt=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),tx=function(e){return L(Ba,Ra(e),ja(e),Na(e),1)},Gl=L(Ba,0,0,0,0),li=v(function(e,r){if(r.$){var t=r.a.E;return P(t,Gl)}else{var n=r.a;return P(e,tx(n))}}),Jm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return a(p$,P(i,Gl),a(tt,i,r))}else if(n.b.$){var i=n.b.a.E;return a(p$,a(li,i,e),a(tt,i,r))}else{var t=n.a.a;return n.b.a,ax(t)}}),ix=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zt=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),ox=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),cx=function(e){return a(br,e,1)},yc=a(br,0,0),va=v(function(e,r){if(r.$){var t=r.a.E;return P(t,yc)}else{var n=r.a;return P(e,cx(n))}}),qm=ee(function(e,r,n,t){var i=L(ox,e,r,n,t);if(i.a.$){var u=i.a.a.E;return L(Zt,P(u,Gl),a(va,u,r),a(va,u,n),a(tt,u,t))}else if(i.b.$){var u=i.b.a.E;return L(Zt,a(li,u,e),P(u,yc),a(va,u,n),a(tt,u,t))}else if(i.c.$){var u=i.c.a.E;return L(Zt,a(li,u,e),a(va,u,r),P(u,yc),a(tt,u,t))}else if(i.d.$){var u=i.d.a.E;return L(Zt,a(li,u,e),a(va,u,r),a(va,u,n),P(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(ix,o,c,l)}}),lx={src:`
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
    `,attributes:{},uniforms:{backlight:"cQ",colorTexture:"b8",sceneProperties:"f"}},Io=Ze(function(e,r,n,t,i){return a(er,n,ze(function(o,c,l,u,f,m,d,b){return V(Ie,h(mr,u,i,b),Em,lx,t,{cQ:Ft(r),b8:e,c:l,d:c,e:m,f:o,g:f})}))}),Ym={src:`
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
    `,attributes:{normal:"q",position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ux=ee(function(e,r,n,t){return a(er,r,ze(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return V(Ie,h(mr,l,t,d),Ym,Wm,n,{U:s,bG:b.bG,cn:b.cn,co:b.co,cp:b.cp,df:e,c,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),$x=Sc(function(e,r,n,t,i,o,c,l,u){return a(er,c,ze(function(f,m,d,b,s,y,_,S){var C=_.a,x=_.b;return V(Ie,h(mr,b,u,S),Ym,Um,l,{cT:e,cV:r,cW:o,cX:t,U:x,bG:C.bG,cn:C.cn,co:C.co,cp:C.cp,di:i,c:d,d:m,bg:e,e:y,dC:n,f,bm:0,g:s})}))}),bt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),vx=function(e){var r=e;return h(bt,r.eO,r.eL,.5)},fx=function(e){var r=e;return h(bt,r.eP,r.eM,.5)},mx=function(e){var r=e;return h(bt,r.eQ,r.eN,.5)},sx=function(e){return h(Qe,vx(e),fx(e),mx(e))},$e=function(e){var r=$m(e),n=r.a,t=r.b,i=r.c;return{f4:eo(sx(e)),gD:n/2,gE:t/2,gF:i/2}},Wl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return L(Fo,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(Fo,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(Fo,l,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var n=e.b.a;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return L(Qr,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return L(Qr,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return L(Xy,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return V(Io,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(Io,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(Io,l,f,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return V(en,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return V(en,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return V(ex,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,ae=e.c,d=a(Jm,m,ae);if(d.$){var y=d.a,_=y.a;y.b;var S=d.b,C=S.a,x=S.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,s=r.d;return L(ux,_,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return Je(rx,_,C,x,$e(i),c,s);case 8:return U;case 9:return U;default:return U}}else{var b=d.a;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,s=r.d;return L(qt,b,$e(i),c,s);case 3:return U;case 4:var i=r.a,c=r.c,s=r.d;return L(qt,b,$e(i),c,s);case 5:return U;case 6:var i=r.a,c=r.c,s=r.d;return L(qt,b,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return L(qt,b,$e(i),c,s);case 8:return U;case 9:return U;default:return U}}default:e.a;var T=e.b,H=e.c,X=e.d,ae=e.e,te=L(qm,T,H,X,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,F=te.c,I=F.a,E=F.b,B=te.d,C=B.a,x=B.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return $s($x,pe,Me,me,Te,I,E,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return nx(pe)(Me)(me)(Te)(I)(E)(C)(x)($e(i))(c)(t);case 8:return U;case 9:return U;default:return U}}else{var ie=te.a,re=te.b,q=te.c;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,t=r.d;return Je(Yt,ie,re,q,$e(i),c,t);case 3:return U;case 4:var i=r.a,c=r.c,t=r.d;return Je(Yt,ie,re,q,$e(i),c,t);case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return Je(Yt,ie,re,q,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return Je(Yt,ie,re,q,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}}}),Eo=function(e){var r=e;return r.io},Bo=function(e){var r=e;return r.is},Ro=function(e){var r=e;return r.dV},dx=function(e){var r=e,n=Ro(r.dW),t=Bo(r.dW),i=Eo(r.dW),o=Ro(r.dU),c=Bo(r.dU),l=Eo(r.dU),u=Ro(r.dT),f=Bo(r.dT),m=Eo(r.dT);return m*c*n+f*o*i+u*l*t-u*c*i-f*l*n-m*o*t>0},px=function(e){var r=eo(ca(e)),n=Tr(Fn(e)),t=Tr(An(e)),i=Tr(Vn(e));return{ek:dx(e),t:i.io,u:i.is,v:i.dV,w:t.io,x:t.is,y:t.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cD:1}},sa=v(function(e,r){return{$:5,a:e,b:r}}),Zm=v(function(e,r){var n=r;switch(n.$){case 0:return U;case 5:var t=n.a,i=n.b,o=a(nm,t,e);return a(sa,o,i);case 1:return a(sa,e,n);case 3:return a(sa,e,n);case 2:return a(sa,e,n);default:return a(sa,e,n)}}),Km=v(function(e,r){return a(Zm,px(e),r)}),ao=function(e){return{$:2,a:e}},gx=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dV:i*o.dV},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),hx=wp,bx=xp,g$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=bx(t),y=s.io,_=s.is,S=s.dV,C=s.ft,x=hx({ft:C,io:y*m,is:_*d,dV:S*b});return _t(r,n,x,i,o,c,l,u,f)}}}}}}}}}},xc=v(function(e,r){switch(r.$){case 0:return Fm;case 5:var n=r.a,t=r.b;return a(sa,n,a(xc,e,t));case 1:var i=r.a,o=r.b;return a(er,a(gx,e,i),a(g$,e,o));case 3:return r;case 2:var o=r.a;return ao(a(g$,e,o));default:var c=r.a;return mm(a(ne,xc(e),c))}}),Hl=v(function(e,r){var n=r;return a(xc,e,n)}),Ul={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Xm=7683,Qm=7682,_x=h(kl,{dd:0,dy:0,dS:15},{bA:or,bP:Aa,bY:or,bZ:Xm},{bA:or,bP:Aa,bY:or,bZ:Qm}),yx=h(kl,{dd:0,dy:0,dS:15},{bA:or,bP:Aa,bY:or,bZ:Qm},{bA:or,bP:Aa,bY:or,bZ:Xm}),Ol=v(function(e,r){return e?a(z,yx,r):a(z,_x,r)}),xx={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},wx=function(e){if(e.$){var r=e.c;return Y(ze(function(n,t,i,o,c,l,u,f){return V(Ie,a(Ol,o,f),xx,Ul,r,{c:i,d:t,e:l,f:n,cE:u,g:c})}))}else return J},Di=function(e){var r=wx(e);if(r.$)return U;var n=r.a;return ao(n)},Sx=ee(function(e,r,n,t){var i=a(Wl,n,Dm),o=function(){var m=P(e,r);return m.a?m.b?Vt($([i,Di(d$)])):i:m.b?Di(d$):U}(),c=Ki(t),l=c.a,u=c.b,f=c.c;return a(Km,Zi(t),a(Hl,R(l,u,f),o))}),Cx=v(function(e,r){return L(Sx,!0,!0,e,r)}),es=v(function(e,r){return{$:0,a:e,b:r}}),Lx=function(e){var r=al(e),n=r.hu,t=r.gA,i=r.fS;return h(zt,n,t,i)},Px=function(e){return a(es,0,dc(Lx(e)))},it=function(e){var r=e;return ra(r)},zx=v(function(e,r){var n=r;return n/e}),h$=function(e){var r=e;return{io:ra(r),is:Va(r)}},Mx=v(function(e,r){var n=e.cy,t=e.q;return a(z,{q:ro(t),cy:fr(n)},r)}),Tx=Fi(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=Na(l.cy),m=ja(l.cy),d=Ra(l.cy),b=a(wa,e,d),s=a(ar,r,d),y=a(wa,n,m),_=a(ar,t,m),S=a(wa,i,f),C=a(ar,o,f),x=u;e=b,r=s,n=y,t=_,i=S,o=C,c=x;continue e}else return Lm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),rs=v(function(e,r){var n=Na(e.cy),t=ja(e.cy),i=Ra(e.cy);return Cc(Tx,i,i,t,t,n,n,r)}),kx=function(e){var r=h(nv,Mx,D,Bl(e));if(r.b){var n=r.a,t=r.b,i=a(At,r,El(e)),o=a(rs,n,t);return L(Sm,o,e,i,0)}else return Il},b$=v(function(e,r){var n=e,t=r,i=n.dU,o=i,c=n.dT,l=c;return{io:t.io*l.io+t.is*o.io,is:t.io*l.is+t.is*o.is,dV:t.io*l.dV+t.is*o.dV}}),Vi=function(e){var r=e;return Va(r)},wc=function(e){return Da(2*Pn*e)},Dx=Br,_$=Dx({dm:Ir,dT:gm,dU:Cl}),ns=function(){var e=72,r=a(zx,e,wc(1)),n=Kn(1),t=_a(sl),i=_a(Of),o=Kn(1),c=a(ke,.5,o),l=h(Qe,Er,Er,c),u=a(ke,-.5,o),f=h(Qe,Er,Er,u),m=function(s){var y=a(ke,s,r),_=_a(a(b$,_$,h$(y))),S=a(ke,it(y),n),C=a(ke,Vi(y),n),x=h(Qe,S,C,c),T=h(Qe,S,C,u),H=a(wi,e,s+1),X=a(ke,H,r),ae=_a(a(b$,_$,h$(X))),te=a(ke,it(X),n),ie=a(ke,Vi(X),n),re=h(Qe,te,ie,u),q=h(Qe,te,ie,c);return $([R({q:i,cy:f},{q:i,cy:re},{q:i,cy:T}),R({q:_,cy:T},{q:ae,cy:re},{q:ae,cy:q}),R({q:_,cy:T},{q:ae,cy:q},{q:_,cy:x}),R({q:t,cy:l},{q:t,cy:x},{q:t,cy:q})])},d=a(ne,m,a(cn,0,e-1)),b=_c(dr(d));return Fl(kx(b))}(),y$=Am(ns),Vx=function(e){var r=Kf(e),n=fl(r),t=n.a,i=n.b;return Rr({dm:Xf(e),dT:t,dU:i,dW:r})},Ax=ee(function(e,r,n,t){var i=Vx(Ll(t)),o=a(Wl,n,ns),c=function(){var d=P(e,r);return d.a?d.b?Vt($([o,Di(y$)])):o:d.b?Di(y$):U}(),l=em(t),u=l,f=Qf(t),m=f;return a(Km,i,a(Hl,R(u,u,m),c))}),Fx=v(function(e,r){return L(Ax,!0,!0,e,r)}),x$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},w$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},et=function(e){var r=ht(e),n=r.a,t=r.b,i=r.c,o=La(n),c=La(t),l=La(i);return Jr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Kt=km($([R({dJ:0},{dJ:1},{dJ:2})])),Ix=v(function(e,r){var n=Pm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var i=e.b.a;return a(er,t,ze(function(x,T,H,X,ae,te,ie,re){return V(Ie,h(mr,X,0,re),x$,jl,Kt,{aO:i,c:H,d:T,e:te,f:x,bV:et(r),g:ae})}));case 1:if(e.b.$)return e.a,U;var o=e.b.a,c=e.c;return a(er,t,ze(function(x,T,H,X,ae,te,ie,re){return V(Ie,h(mr,X,0,re),x$,Nl,Kt,{a6:a(no,Ft(c),o),c:H,d:T,e:te,f:x,bV:et(r),g:ae})}));case 2:e.a;var l=e.b,s=e.c,u=a(Jm,l,s);if(u.$)return U;var f=u.a;return a(er,t,ze(function(x,T,H,X,ae,te,ie,re){var q=ie.a,de=ie.b;return V(Ie,h(mr,X,0,re),w$,Nm,Kt,{U:de,bG:q.bG,cn:q.cn,co:q.co,cp:q.cp,de:f,c:H,d:T,e:te,f:x,bV:et(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,y=L(qm,m,d,b,s);if(y.$)return U;var _=y.a,S=y.b,C=y.c;return a(er,t,ze(function(x,T,H,X,ae,te,ie,re){var q=ie.a,de=ie.b;return V(Ie,h(mr,X,0,re),w$,Om,Kt,{cS:_,U:de,bG:q.bG,cn:q.cn,co:q.co,cp:q.cp,dh:C,c:H,d:T,e:te,dB:S,f:x,bV:et(r),g:ae})}))}}),Ex=function(){var e=$([{bl:a(br,0,1)},{bl:a(br,1,1)},{bl:a(br,2,1)},{bl:a(br,0,-1)},{bl:a(br,1,-1)},{bl:a(br,2,-1)}]),r=$([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return a(At,e,r)}(),Bx={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",triangleVertexPositions:"bV",viewMatrix:"g"}},S$=function(e){return ao(ze(function(r,n,t,i,o,c,l,u){return V(Ie,a(Ol,i,u),Bx,Ul,Ex,{c:t,d:n,e:c,f:r,cE:l,bV:et(e),g:o})}))},Rx=ee(function(e,r,n,t){var i=a(Ix,n,t),o=P(e,r);return o.a?o.b?Vt($([i,S$(t)])):i:o.b?S$(t):U}),jx=v(function(e,r){return L(Rx,!0,!0,e,r)}),Nx=v(function(e,r){var n=Zn(r),t=Zn(e),i=Yn(r),o=Yn(e),c=qn(r),l=qn(e);return{eL:a(We,l,c),eM:a(We,o,i),eN:a(We,t,n),eO:a(Oe,l,c),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Gx=function(e){var r=bl(e),n=r.a,t=r.b;return a(Nx,n,t)},C$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Wx=v(function(e,r){return{$:1,a:e,b:r}}),Hx=Wx({d5:2,ei:0,eS:1}),L$=Hx($([P({es:0},{es:1})])),Ux=v(function(e,r){var n=Gx(r),t=$e(n),i=bl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var l=e.b.a;return a(er,t,ze(function(f,m,d,b,s,y,_,S){return V(Ie,S,C$,jl,L$,{aO:l,eq:fr(c),er:fr(o),c:d,d:m,e:y,f,g:s})}));case 1:if(e.b.$)return U;var l=e.b.a,u=e.c;return a(er,t,ze(function(m,d,b,s,y,_,S,C){return V(Ie,C,C$,Nl,L$,{a6:a(no,Ft(u),l),eq:fr(c),er:fr(o),c:b,d,e:_,f:m,g:y})}));case 2:return U;default:return U}}),Ox=v(function(e,r){return a(Ux,e,r)}),P$=v(function(e,r){var n=e,t=r;return n/t}),Jx=Ze(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(z,o,i);if(_e(r,e))return c;var l=e,u=r-1,f=n,m=t,d=c;e=l,r=u,n=f,t=m,i=d;continue e}}),z$=v(function(e,r){return e<1?D:V(Jx,0,e,e,r,D)}),qx=v(function(e,r){var n=e.cy,t=e.q,i=e.O,o=i,c=o.a,l=o.b;return a(z,{q:ro(t),cy:fr(n),O:a(br,c,l)},r)}),Yx=function(e){var r=h(nv,qx,D,Bl(e));if(r.b){var n=r.a,t=r.b,i=a(At,r,El(e)),o=a(rs,n,t);return L(Cm,o,e,i,0)}else return Il},as=v(function(e,r){var n=e,t=r,i=ra(t);return{io:i*ra(n),is:i*Va(n),dV:Va(t)}}),Zx=function(){var e=Kn(1),r=72,n=a(cn,0,r-1),t=a(z$,r,a(bt,Er,wc(1))),i=ct(r/2),o=a(cn,0,i-1),c=a(z$,i,a(bt,Xa(90),Xa(-90))),l=Rl(dr(a(ne,function(m){return a(ne,function(d){return{q:_a(a(as,m,d)),cy:h(Qe,a(ke,it(d)*it(m),e),a(ke,it(d)*Vi(m),e),a(ke,Vi(d),e)),O:P(a(P$,m,wc(1)),a(P$,a(at,Xa(90),d),Xa(180)))}},c)},t))),u=v(function(m,d){return m*(i+1)+d}),f=dr(a(ne,function(m){return dr(a(ne,function(d){var b=a(u,m+1,d),s=a(u,m,d),y=a(u,m+1,d+1),_=a(u,m,d+1);return $([R(_,y,b),R(_,b,s)])},o))},n));return Fl(Yx(a(Vm,l,f)))}(),Ai=72,Xt=2*Ai,Kx=v(function(e,r){e:for(;;){var n=Xt+1,t=a(wi,Xt,2*e+3),i=a(wi,Xt,2*e+2),o=2*e+1,c=2*e,l=Xt,u=a(z,R(l,c,i),a(z,R(c,t,i),a(z,R(c,o,t),a(z,R(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Xx=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Qx=v(function(e,r){e:for(;;){var n=h(Xx,0,2*Pn,e/Ai),t={b$:n,cu:0,cB:1},i={b$:n,cu:1,cB:1},o=a(z,t,a(z,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),ew=function(){var e=a(Qx,Ai-1,$([{b$:0,cu:0,cB:0},{b$:0,cu:1,cB:0}])),r=a(Kx,Ai-1,D);return a(At,e,r)}(),rw={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cu",radiusScale:"cB"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},M$=function(e){return ao(ze(function(r,n,t,i,o,c,l,u){return V(Ie,a(Ol,!0,u),rw,Ul,ew,{aO:h(zt,0,0,1),c:t,d:n,e:c,f:r,cE:l,g:o})}))},nw=function(e){var r=Mm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cD:1}},aw=v(function(e,r){return a(Zm,nw(e),r)}),tw=ee(function(e,r,n,t){var i=a(Wl,n,Zx),o=function(){var u=P(e,r);return u.a?u.b?Vt($([i,M$()])):i:u.b?M$():U}(),c=Qi(t),l=c;return a(aw,a(zi,Ir,Xi(t)),a(Hl,R(l,l,l),o))}),iw=v(function(e,r){return L(tw,!0,!0,e,r)}),ow=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),cw=Ze(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),lw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(es,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(ow,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(Yf,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return V(cw,n,t,i,o,c)}},uw=lw,ts=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(Cx,i,r)]);case 1:var i=e.a,n=e.b;return $([a(jx,i,n)]);case 3:var i=e.a,t=e.b;return $([a(iw,uw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Fx,i,o)]);case 4:var c=e.a,l=e.b;return $([a(Ox,Px(c),l)]);default:var u=e.a;return a(Ea,ts,u)}},$w=function(e){return a(Ea,ts,e)},vw=v(function(e,r){return _y({a1:F_(e.fO),f0:e.f0,a3:I_(.5),cY:e.cY,a4:P(r$(Ee(e.dD.im)),r$(Ee(e.dD.gH))),a8:$w(r),hI:!0,hZ:a(as,Da(e.hY),Da(e.h_)),fm:Pl})}),fw=v(function(e,r){return a(vw,{fO:V1,f0:q1({d9:{io:0,is:15,dV:18},ba:{io:0,is:4,dV:0},fm:{io:0,is:1,dV:0}}),cY:e.cY,dD:e.dD,hY:-Si(135),h_:-Si(45)},a(A_,e,r))}),mw=L(C1,fw,D1,k1,L1);const sw={Main:{init:mw(a(Q,function(e){return ur({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({bt:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return ur({fJ:d,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",hi(za)))},a(K,"left",Pe))},a(K,"pressedKeys",hi(za)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},dw=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),c(s)&&(oe.keyboard.up=!0),l(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(y=>y!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),c(s)&&(oe.keyboard.up=!1),l(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const y=s/1e3,_=y-oe.clock;_<.009||(oe.dt=_,oe.clock=y,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},pw=sw.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});dw(pw);
