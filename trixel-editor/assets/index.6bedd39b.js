const mu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};mu();function Lr(e,r,n){return n.a=e,n.f=r,n}function s(e){return Lr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Lr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return Lr(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function xe(e){return Lr(5,e,function(r){return function(n){return function(a){return function(i){return function(l){return e(r,n,a,i,l)}}}}})}function rr(e){return Lr(6,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return e(r,n,a,i,l,u)}}}}}})}function Ha(e){return Lr(7,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return e(r,n,a,i,l,u,v)}}}}}}})}function oe(e){return Lr(8,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return e(r,n,a,i,l,u,v,$)}}}}}}}})}function oo(e){return Lr(9,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return e(r,n,a,i,l,u,v,$,f)}}}}}}}}})}function c(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function t(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function P(e,r,n,a,i,l){return e.a===5?e.f(r,n,a,i,l):e(r)(n)(a)(i)(l)}function Te(e,r,n,a,i,l,u){return e.a===6?e.f(r,n,a,i,l,u):e(r)(n)(a)(i)(l)(u)}function io(e,r,n,a,i,l,u,v){return e.a===7?e.f(r,n,a,i,l,u,v):e(r)(n)(a)(i)(l)(u)(v)}function Ga(e,r,n,a,i,l,u,v,$){return e.a===8?e.f(r,n,a,i,l,u,v,$):e(r)(n)(a)(i)(l)(u)(v)($)}function du(e,r,n,a,i,l,u,v,$,f){return e.a===9?e.f(r,n,a,i,l,u,v,$,f):e(r)(n)(a)(i)(l)(u)(v)($)(f)}var pu=[];function gu(e){return e.length}var bu=x(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),hu=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),_u=s(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=n[l];return i[e]=r,i});s(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=c(e,n[i],r);return r});var wu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=c(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});x(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=c(e,r+l,n[l]);return i});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var l=a+i,u=new Array(l),v=0;v<a;v++)u[v]=r[v];for(var v=0;v<i;v++)u[v+a]=n[v];return u});s(function(e,r){return r});s(function(e,r){return console.log(e+": "+yu()),r});function yu(e){return"<internals>"}function $n(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],i=Lt(e,r,0,a);i&&(n=a.pop());i=Lt(n.a,n.b,0,a));return i}function Lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&$n(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=Ai(e),r=Ai(r));for(var i in e)if(!Lt(e[i],r[i],n+1,a))return!1;return!0}s(gr);s(function(e,r){return!gr(e,r)});function Z(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=Z(e.a,r.a))||(n=Z(e.b,r.b))?n:Z(e.c,r.c);for(;e.b&&r.b&&!(n=Z(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return Z(e,r)<0});s(function(e,r){return Z(e,r)<1});s(function(e,r){return Z(e,r)>0});s(function(e,r){return Z(e,r)>=0});var xu=s(function(e,r){var n=Z(e,r);return n<0?nc:n?i3:rc}),Hn=0;function k(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function X(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(fe);function fe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=lr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=lr(e.a,r);return n}var L={$:0};function lr(e,r){return{$:1,a:e,b:r}}var Su=s(lr);function b(e){for(var r=L,n=e.length;n--;)r=lr(e[n],r);return r}function Wa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Cu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(c(e,r.a,n.a));return b(a)});R(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(t(e,r.a,n.a,a.a));return b(i)});xe(function(e,r,n,a,i){for(var l=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)l.push(z(e,r.a,n.a,a.a,i.a));return b(l)});rr(function(e,r,n,a,i,l){for(var u=[];r.b&&n.b&&a.b&&i.b&&l.b;r=r.b,n=n.b,a=a.b,i=i.b,l=l.b)u.push(P(e,r.a,n.a,a.a,i.a,l.a));return b(u)});s(function(e,r){return b(Wa(r).sort(function(n,a){return Z(e(n),e(a))}))});s(function(e,r){return b(Wa(r).sort(function(n,a){var i=c(e,n,a);return i===rc?0:i===nc?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var Pu=s(Math.pow);s(function(e,r){return r%e});var Lu=s(function(e,r){var n=r%e;return e===0?$n(11):n>0&&e<0||n<0&&e>0?n+e:n}),zu=Math.PI,ku=Math.cos,Tu=Math.sin,Mu=Math.tan;s(Math.atan2);function Fu(e){return e}function Du(e){return e===1/0||e===-1/0}var Ju=Math.ceil,Au=Math.floor,Bu=Math.round,ju=Math.sqrt,wi=Math.log,Vu=isNaN;function Ru(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var Eu=s(function(e,r){return e+r});function Nu(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}s(function(e,r){return e+r});function Hu(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var l=r.charCodeAt(i);if(55296<=l&&l<=56319){a[i]=e(r[i]+r[i+1]),i+=2;continue}a[i]=e(r[i]),i++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var l=r[i],u=r.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=r[i],i++),e(l)&&n.push(l)}return n.join("")});function Gu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,i=0;i<a;){var l=n[i],u=n.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=n[i],i++),r=c(e,l,r)}return r});var Wu=x(function(e,r,n){for(var a=n.length;a--;){var i=n[a],l=n.charCodeAt(a);56320<=l&&l<=57343&&(a--,i=n[a]+i),r=c(e,i,r)}return r}),Iu=s(function(e,r){return r.split(e)}),Uu=s(function(e,r){return r.join(e)}),Ou=x(function(e,r,n){return n.slice(e,r)});function qu(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Yu=s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Zu=s(function(e,r){return r.indexOf(e)>-1}),Xu=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Qu=s(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return b(i)});function k0(e){return e+""}function Ku(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var l=e.charCodeAt(i);if(l<48||57<l)return q;r=10*r+l-48}return i==a?q:te(n==45?-r:r)}function ev(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function rv(e){return Wa(e).join("")}function nv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function av(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function tv(e){return{$:0,a:e}}function co(e){return{$:2,b:e}}var ov=co(function(e){return typeof e=="boolean"?me(e):ar("a BOOL",e)}),iv=co(function(e){return typeof e=="number"?me(e):ar("a FLOAT",e)}),cv=co(function(e){return typeof e=="string"?me(e):e instanceof String?me(e+""):ar("a STRING",e)});function lv(e){return{$:3,b:e}}var uv=s(function(e,r){return{$:6,d:e,b:r}});s(function(e,r){return{$:7,e,b:r}});function zr(e,r){return{$:9,f:e,g:r}}var vv=s(function(e,r){return{$:10,b:r,h:e}}),$v=s(function(e,r){return zr(e,[r])}),sv=x(function(e,r,n){return zr(e,[r,n])});R(function(e,r,n,a){return zr(e,[r,n,a])});xe(function(e,r,n,a,i){return zr(e,[r,n,a,i])});rr(function(e,r,n,a,i,l){return zr(e,[r,n,a,i,l])});Ha(function(e,r,n,a,i,l,u){return zr(e,[r,n,a,i,l,u])});oe(function(e,r,n,a,i,l,u,v){return zr(e,[r,n,a,i,l,u,v])});oo(function(e,r,n,a,i,l,u,v,$){return zr(e,[r,n,a,i,l,u,v,$])});s(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return Ce(c(_o,"This is not valid JSON! "+a.message,r))}});var T0=s(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?me(e.c):ar("null",r);case 3:return na(r)?yi(e.b,r,b):ar("a LIST",r);case 4:return na(r)?yi(e.b,r,fv):ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ar("an OBJECT with a field named `"+n+"`",r);var f=Ne(e.b,r[n]);return Ye(f)?f:Ce(c(Bi,n,f.a));case 7:var a=e.e;if(!na(r))return ar("an ARRAY",r);if(a>=r.length)return ar("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var f=Ne(e.b,r[a]);return Ye(f)?f:Ce(c(ac,a,f.a));case 8:if(typeof r!="object"||r===null||na(r))return ar("an OBJECT",r);var i=L;for(var l in r)if(r.hasOwnProperty(l)){var f=Ne(e.b,r[l]);if(!Ye(f))return Ce(c(Bi,l,f.a));i=lr(k(l,f.a),i)}return me(De(i));case 9:for(var u=e.f,v=e.g,$=0;$<v.length;$++){var f=Ne(v[$],r);if(!Ye(f))return f;u=u(f.a)}return me(u);case 10:var f=Ne(e.b,r);return Ye(f)?Ne(e.h(f.a),r):f;case 11:for(var d=L,p=e.g;p.b;p=p.b){var f=Ne(p.a,r);if(Ye(f))return f;d=lr(f.a,d)}return Ce(c3(De(d)));case 1:return Ce(c(_o,e.a,r));case 0:return me(e.a)}}function yi(e,r,n){for(var a=r.length,i=new Array(a),l=0;l<a;l++){var u=Ne(e,r[l]);if(!Ye(u))return Ce(c(ac,l,u.a));i[l]=u.a}return me(n(i))}function na(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function fv(e){return c(S3,e.length,function(r){return e[r]})}function ar(e,r){return Ce(c(_o,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&xi(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return xi(e.g,r.g)}}function xi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var mv=s(function(e,r){return JSON.stringify(r,null,e)+""});function M0(e){return e}x(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function dv(e){return{$:1,a:e}}function hr(e){return{$:2,b:e,c:null}}var zt=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function pv(e){return{$:5,b:e}}var gv=0;function lo(e){var r={$:0,e:gv++,f:e,g:null,h:[]};return uo(r),r}function F0(e){return hr(function(r){r(Nr(lo(e)))})}function D0(e,r){e.h.push(r),uo(e)}var bv=s(function(e,r){return hr(function(n){D0(e,r),n(Nr(Hn))})}),ut=!1,Si=[];function uo(e){if(Si.push(e),!ut){for(ut=!0;e=Si.shift();)hv(e);ut=!1}}function hv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,uo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return vo(r,a,e.fM,e.gy,e.gr,function(){return function(){}})});function vo(e,r,n,a,i,l){var u=c(T0,e,r?r.flags:void 0);Ye(u)||$n(2);var v={},$=n(u.a),f=$.a,d=l(g,f),p=_v(v,g);function g(m,_){var h=c(a,m,f);d(f=h.a,_),Pi(v,h.b,i(f))}return Pi(v,$.b,i(f)),p?{ports:p}:{}}var or={};function _v(e,r){var n;for(var a in or){var i=or[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=yv(i,r)}return n}function wv(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function yv(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,l=e.e,u=e.f;function v($){return c(zt,v,pv(function(f){var d=f.a;return f.$===0?t(i,n,d,$):l&&u?z(a,n,d.i,d.j,$):t(a,n,l?d.i:d.j,$)}))}return n.h=lo(c(zt,v,e.b))}var xv=s(function(e,r){return hr(function(n){e.g(r),n(Nr(Hn))})});s(function(e,r){return c(bv,e.h,{$:0,a:r})});function J0(e){return function(r){return{$:1,k:e,l:r}}}function Sv(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var Ci=[],vt=!1;function Pi(e,r,n){if(Ci.push({p:e,q:r,r:n}),!vt){vt=!0;for(var a;a=Ci.shift();)Cv(a.p,a.q,a.r);vt=!1}}function Cv(e,r,n){var a={};xa(!0,r,a,null),xa(!1,n,a,null);for(var i in e)D0(e[i],{$:"fx",a:a[i]||{i:L,j:L}})}function xa(e,r,n,a){switch(r.$){case 1:var i=r.k,l=Pv(e,i,a,r.l);n[i]=Lv(e,l,n[i]);return;case 2:for(var u=r.m;u.b;u=u.b)xa(e,u.a,n,a);return;case 3:xa(e,r.o,n,{s:r.n,t:a});return}}function Pv(e,r,n,a){function i(u){for(var v=n;v;v=v.t)u=v.s(u);return u}var l=e?or[r].e:or[r].f;return c(l,i,a)}function Lv(e,r,n){return n=n||{i:L,j:L},e?n.i=lr(r,n.i):n.j=lr(r,n.j),n}function zv(e){or[e]&&$n(3)}s(function(e,r){return r});function kv(e,r){return zv(e),or[e]={f:Tv,u:r,a:Mv},J0(e)}var Tv=s(function(e,r){return function(n){return e(r(n))}});function Mv(e,r){var n=L,a=or[e].u,i=Nr(null);or[e].b=i,or[e].c=x(function(u,v,$){return n=v,i});function l(u){var v=c(T0,a,u);Ye(v)||$n(4,e,v.a);for(var $=v.a,f=n;f.b;f=f.b)r(f.a($))}return{send:l}}var Sa,dr=typeof document!="undefined"?document:{};function $o(e,r){e.appendChild(r)}R(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(xr(e,function(){}),i),{}});function kt(e){return{$:0,a:e}}var A0=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b||0,i.push(u)}return l+=i.length,{$:1,c:r,d:so(n),e:i,f:e,b:l}})}),Oe=A0(void 0),Fv=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b.b||0,i.push(u)}return l+=i.length,{$:2,c:r,d:so(n),e:i,f:e,b:l}})}),Dv=Fv(void 0);function Jv(e,r,n,a){return{$:3,d:so(e),g:r,h:n,i:a}}var Av=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kr(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return kr([e,r],function(){return e(r)})});x(function(e,r,n){return kr([e,r,n],function(){return c(e,r,n)})});R(function(e,r,n,a){return kr([e,r,n,a],function(){return t(e,r,n,a)})});xe(function(e,r,n,a,i){return kr([e,r,n,a,i],function(){return z(e,r,n,a,i)})});rr(function(e,r,n,a,i,l){return kr([e,r,n,a,i,l],function(){return P(e,r,n,a,i,l)})});Ha(function(e,r,n,a,i,l,u){return kr([e,r,n,a,i,l,u],function(){return Te(e,r,n,a,i,l,u)})});oe(function(e,r,n,a,i,l,u,v){return kr([e,r,n,a,i,l,u,v],function(){return io(e,r,n,a,i,l,u,v)})});oo(function(e,r,n,a,i,l,u,v,$){return kr([e,r,n,a,i,l,u,v,$],function(){return Ga(e,r,n,a,i,l,u,v,$)})});var B0=s(function(e,r){return{$:"a0",n:e,o:r}}),Bv=s(function(e,r){return{$:"a1",n:e,o:r}}),j0=s(function(e,r){return{$:"a2",n:e,o:r}}),Gn=s(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function jv(e){return e=="script"?"p":e}function Vv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}s(function(e,r){return r.$==="a0"?c(B0,r.n,Rv(e,r.o)):r});function Rv(e,r){var n=Po(r);return{$:r.$,a:n?t(P3,n<3?Ev:Nv,je(e),r.a):c(An,e,r.a)}}var Ev=s(function(e,r){return k(e(r.a),r.b)}),Nv=s(function(e,r){return{ax:e(r.ax),dw:r.dw,dj:r.dj}});function so(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,l=n.o;if(a==="a2"){i==="className"?Li(r,i,l):r[i]=l;continue}var u=r[a]||(r[a]={});a==="a3"&&i==="class"?Li(u,i,l):u[i]=l}return r}function Li(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function xr(e,r){var n=e.$;if(n===5)return xr(e.k||(e.k=e.m()),r);if(n===0)return dr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var l={j:i,p:r},u=xr(a,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return Tt(u,r,e.d),u}var u=e.f?dr.createElementNS(e.f,e.c):dr.createElement(e.c);Sa&&e.c=="a"&&u.addEventListener("click",Sa(u)),Tt(u,r,e.d);for(var v=e.e,$=0;$<v.length;$++)$o(u,xr(n===1?v[$]:v[$].b,r));return u}function Tt(e,r,n){for(var a in n){var i=n[a];a==="a1"?Hv(e,i):a==="a0"?Iv(e,r,i):a==="a3"?Gv(e,i):a==="a4"?Wv(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Hv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Gv(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Wv(e,r){for(var n in r){var a=r[n],i=a.f,l=a.o;typeof l!="undefined"?e.setAttributeNS(i,n,l):e.removeAttributeNS(i,n)}}function Iv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var l=n[i],u=a[i];if(!l){e.removeEventListener(i,u),a[i]=void 0;continue}if(u){var v=u.q;if(v.$===l.$){u.q=l;continue}e.removeEventListener(i,u)}u=Uv(r,l),e.addEventListener(i,u,fo&&{passive:Po(l)<2}),a[i]=u}}var fo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){fo=!0}}))}catch{}function Uv(e,r){function n(a){var i=n.q,l=Ne(i.a,a);if(!!Ye(l)){for(var u=Po(i),v=l.a,$=u?u<3?v.a:v.ax:v,f=u==1?v.b:u==3&&v.dw,d=(f&&a.stopPropagation(),(u==2?v.b:u==3&&v.dj)&&a.preventDefault(),e),p,g;p=d.j;){if(typeof p=="function")$=p($);else for(var g=p.length;g--;)$=p[g]($);d=d.p}d($,f)}}return n.q=r,n}function Ov(e,r){return e.$==r.$&&Or(e.a,r.a)}function V0(e,r){var n=[];return Ze(e,r,n,0),n}function Se(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Ze(e,r,n,a){if(e!==r){var i=e.$,l=r.$;if(i!==l)if(i===1&&l===2)r=r$(r),l=1;else{Se(n,0,a,r);return}switch(l){case 5:for(var u=e.l,v=r.l,$=u.length,f=$===v.length;f&&$--;)f=u[$]===v[$];if(f){r.k=e.k;return}r.k=r.m();var d=[];Ze(e.k,r.k,d,0),d.length>0&&Se(n,1,a,d);return;case 4:for(var p=e.j,g=r.j,m=!1,_=e.k;_.$===4;)m=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var h=r.k;h.$===4;)m=!0,typeof g!="object"?g=[g,h.j]:g.push(h.j),h=h.k;if(m&&p.length!==g.length){Se(n,0,a,r);return}(m?!qv(p,g):p!==g)&&Se(n,2,a,g),Ze(_,h,n,a+1);return;case 0:e.a!==r.a&&Se(n,3,a,r.a);return;case 1:zi(e,r,n,a,Yv);return;case 2:zi(e,r,n,a,Zv);return;case 3:if(e.h!==r.h){Se(n,0,a,r);return}var y=mo(e.d,r.d);y&&Se(n,4,a,y);var S=r.i(e.g,r.g);S&&Se(n,5,a,S);return}}}function qv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function zi(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Se(n,0,a,r);return}var l=mo(e.d,r.d);l&&Se(n,4,a,l),i(e,r,n,a)}function mo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var l=mo(e[i],r[i]||{},i);l&&(a=a||{},a[i]=l);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var u=e[i],v=r[i];u===v&&i!=="value"&&i!=="checked"||n==="a0"&&Ov(u,v)||(a=a||{},a[i]=v)}for(var $ in r)$ in e||(a=a||{},a[$]=r[$]);return a}function Yv(e,r,n,a){var i=e.e,l=r.e,u=i.length,v=l.length;u>v?Se(n,6,a,{v,i:u-v}):u<v&&Se(n,7,a,{v:u,e:l});for(var $=u<v?u:v,f=0;f<$;f++){var d=i[f];Ze(d,l[f],n,++a),a+=d.b||0}}function Zv(e,r,n,a){for(var i=[],l={},u=[],v=e.e,$=r.e,f=v.length,d=$.length,p=0,g=0,m=a;p<f&&g<d;){var _=v[p],h=$[g],y=_.a,S=h.a,w=_.b,C=h.b,F=void 0,W=void 0;if(y===S){m++,Ze(w,C,i,m),m+=w.b||0,p++,g++;continue}var H=v[p+1],N=$[g+1];if(H){var G=H.a,I=H.b;W=S===G}if(N){var B=N.a,Q=N.b;F=y===B}if(F&&W){m++,Ze(w,Q,i,m),_n(l,i,y,C,g,u),m+=w.b||0,m++,wn(l,i,y,I,m),m+=I.b||0,p+=2,g+=2;continue}if(F){m++,_n(l,i,S,C,g,u),Ze(w,Q,i,m),m+=w.b||0,p+=1,g+=2;continue}if(W){m++,wn(l,i,y,w,m),m+=w.b||0,m++,Ze(I,C,i,m),m+=I.b||0,p+=2,g+=1;continue}if(H&&G===B){m++,wn(l,i,y,w,m),_n(l,i,S,C,g,u),m+=w.b||0,m++,Ze(I,Q,i,m),m+=I.b||0,p+=2,g+=2;continue}break}for(;p<f;){m++;var _=v[p],w=_.b;wn(l,i,_.a,w,m),m+=w.b||0,p++}for(;g<d;){var ne=ne||[],h=$[g];_n(l,i,h.a,h.b,void 0,ne),g++}(i.length>0||u.length>0||ne)&&Se(n,8,a,{w:i,x:u,y:ne})}var R0="_elmW6BL";function _n(e,r,n,a,i,l){var u=e[n];if(!u){u={c:0,z:a,r:i,s:void 0},l.push({r:i,A:u}),e[n]=u;return}if(u.c===1){l.push({r:i,A:u}),u.c=2;var v=[];Ze(u.z,a,v,u.r),u.r=i,u.s.s={w:v,A:u};return}_n(e,r,n+R0,a,i,l)}function wn(e,r,n,a,i){var l=e[n];if(!l){var u=Se(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:u};return}if(l.c===0){l.c=2;var v=[];Ze(a,l.z,v,i),Se(r,9,i,{w:v,A:l});return}wn(e,r,n+R0,a,i)}function E0(e,r,n,a){yn(e,r,n,0,0,r.b,a)}function yn(e,r,n,a,i,l,u){for(var v=n[a],$=v.r;$===i;){var f=v.$;if(f===1)E0(e,r.k,v.s,u);else if(f===8){v.t=e,v.u=u;var d=v.s.w;d.length>0&&yn(e,r,d,0,i,l,u)}else if(f===9){v.t=e,v.u=u;var p=v.s;if(p){p.A.s=e;var d=p.w;d.length>0&&yn(e,r,d,0,i,l,u)}}else v.t=e,v.u=u;if(a++,!(v=n[a])||($=v.r)>l)return a}var g=r.$;if(g===4){for(var m=r.k;m.$===4;)m=m.k;return yn(e,m,n,a,i+1,l,e.elm_event_node_ref)}for(var _=r.e,h=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=$&&$<=w&&(a=yn(h[y],S,n,a,i,w,u),!(v=n[a])||($=v.r)>l))return a;i=w}return a}function N0(e,r,n,a){return n.length===0?e:(E0(e,r,n,a),Ca(e,n))}function Ca(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,l=Xv(i,a);i===e&&(e=l)}return e}function Xv(e,r){switch(r.$){case 0:return Qv(e,r.s,r.u);case 4:return Tt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ca(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var l=r.s,a=0;a<l.i;a++)e.removeChild(e.childNodes[l.v]);return e;case 7:for(var l=r.s,n=l.e,a=l.v,i=e.childNodes[a];a<n.length;a++)e.insertBefore(xr(n[a],r.u),i);return e;case 9:var l=r.s;if(!l)return e.parentNode.removeChild(e),e;var u=l.A;return typeof u.r!="undefined"&&e.parentNode.removeChild(e),u.s=Ca(e,l.w),e;case 8:return Kv(e,r);case 5:return r.s(e);default:$n(10)}}function Qv(e,r,n){var a=e.parentNode,i=xr(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Kv(e,r){var n=r.s,a=e$(n.y,r);e=Ca(e,n.w);for(var i=n.x,l=0;l<i.length;l++){var u=i[l],v=u.A,$=v.c===2?v.s:xr(v.z,r.u);e.insertBefore($,e.childNodes[u.r])}return a&&$o(e,a),e}function e$(e,r){if(!!e){for(var n=dr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],l=i.A;$o(n,l.c===2?l.s:xr(l.z,r.u))}return n}}function po(e){if(e.nodeType===3)return kt(e.textContent);if(e.nodeType!==1)return kt("");for(var r=L,n=e.attributes,a=n.length;a--;){var i=n[a],l=i.name,u=i.value;r=lr(c(Gn,l,u),r)}for(var v=e.tagName.toLowerCase(),$=L,f=e.childNodes,a=f.length;a--;)$=lr(po(f[a]),$);return t(Oe,v,r,$)}function r$(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var n$=R(function(e,r,n,a){return vo(r,a,e.fM,e.gy,e.gr,function(i,l){var u=e.gB,v=a.node,$=po(v);return H0(l,function(f){var d=u(f),p=V0($,d);v=N0(v,$,p,i),$=d})})});R(function(e,r,n,a){return vo(r,a,e.fM,e.gy,e.gr,function(i,l){var u=e.dt&&e.dt(i),v=e.gB,$=dr.title,f=dr.body,d=po(f);return H0(l,function(p){Sa=u;var g=v(p),m=Oe("body")(L)(g.fa),_=V0(d,m);f=N0(f,d,_,i),d=m,Sa=0,$!==g.gv&&(dr.title=$=g.gv)})})});var Pa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function H0(e,r){r(e);var n=0;function a(){n=n===1?0:(Pa(a),r(e),1)}return function(i,l){e=i,l?(r(e),n===2&&(n=1)):(n===0&&Pa(a),n=2)}}s(function(e,r){return c(ko,Lo,hr(function(){r&&history.go(r),e()}))});s(function(e,r){return c(ko,Lo,hr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return c(ko,Lo,hr(function(){history.replaceState({},"",r),e()}))});var a$={addEventListener:function(){},removeEventListener:function(){}},t$=typeof window!="undefined"?window:a$;x(function(e,r,n){return F0(hr(function(a){function i(l){lo(n(l))}return e.addEventListener(r,i,fo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});s(function(e,r){var n=Ne(e,r);return Ye(n)?te(n.a):q});function G0(e,r){return hr(function(n){Pa(function(){var a=document.getElementById(e);n(a?Nr(r(a)):dv(L3(e)))})})}function o$(e){return hr(function(r){Pa(function(){r(Nr(e()))})})}s(function(e,r){return G0(r,function(n){return n[e](),Hn})});s(function(e,r){return o$(function(){return t$.scroll(e,r),Hn})});x(function(e,r,n){return G0(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Hn})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var i$=s(function(e,r){var n="g";e.f0&&(n+="m"),e.fc&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});s(function(e,r){return r.match(e)!==null});var c$=x(function(e,r,n){for(var a=[],i=0,l=n,u=r.lastIndex,v=-1,$;i++<e&&($=r.exec(l))&&v!=r.lastIndex;){for(var f=$.length-1,d=new Array(f);f>0;){var p=$[f];d[--f]=p?te(p):q}a.push(z(Jc,$[0],$.index,i,b(d))),v=r.lastIndex}return r.lastIndex=u,b(a)});R(function(e,r,n,a){var i=0;function l(u){if(i++>=e)return u;for(var v=arguments.length-3,$=new Array(v);v>0;){var f=arguments[v];$[--v]=f?te(f):q}return n(z(Jc,u,arguments[arguments.length-2],i,b($)))}return a.replace(r,l)});x(function(e,r,n){for(var a=n,i=[],l=r.lastIndex,u=r.lastIndex;e--;){var v=r.exec(a);if(!v)break;i.push(a.slice(l,v.index)),l=r.lastIndex}return i.push(a.slice(l)),r.lastIndex=u,b(i)});var l$=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/u$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function u$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var go=new Float64Array(3),ki=new Float64Array(3),Ti=new Float64Array(3),v$=x(function(e,r,n){return new Float64Array([e,r,n])}),$$=function(e){return e[0]},s$=function(e){return e[1]},f$=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var m$=function(e){return new Float64Array([e.gF,e.gJ,e.dJ])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function W0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(W0);function I0(e,r,n){return n===void 0&&(n=new Float64Array(3)),La(W0(e,r,n),n)}s(I0);function U0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function La(e,r){r===void 0&&(r=new Float64Array(3));var n=1/U0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var d$=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),xn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(xn);function Mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(Mt);s(function(e,r){var n,a=go,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=xn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(xn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(xn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(xn(r,a)+e[14])/n,i});var p$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var g$=function(e){return{gF:e[0],gJ:e[1],dJ:e[2],e0:e[3]}},b$=function(e){return new Float64Array([e.gF,e.gJ,e.dJ,e.e0])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/h$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function h$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+l*l)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return n*n+a*a+i*i+l*l});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var _$=new Float64Array(16),w$=new Float64Array(16),y$=function(e){var r=new Float64Array(16);return r[0]=e.ea,r[1]=e.ee,r[2]=e.ei,r[3]=e.em,r[4]=e.eb,r[5]=e.ef,r[6]=e.ej,r[7]=e.en,r[8]=e.ec,r[9]=e.eg,r[10]=e.ek,r[11]=e.eo,r[12]=e.ed,r[13]=e.eh,r[14]=e.el,r[15]=e.ep,r},x$=function(e){return{ea:e[0],ee:e[1],ei:e[2],em:e[3],eb:e[4],ef:e[5],ej:e[6],en:e[7],ec:e[8],eg:e[9],ek:e[10],eo:e[11],ed:e[12],eh:e[13],el:e[14],ep:e[15]}};function O0(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2*i/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*i/(a-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(a+n)/(a-n),u[10]=-(l+i)/(l-i),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*i/(l-i),u[15]=0,u}rr(O0);R(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),l=-i,u=l*r,v=i*r;return O0(u,v,l,i,n,a)});function q0(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(a-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-i),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(a+n)/(a-n),u[14]=-(l+i)/(l-i),u[15]=1,u}rr(q0);R(function(e,r,n,a){return q0(e,r,n,a,-1,1)});function Y0(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[3],v=e[4],$=e[5],f=e[6],d=e[7],p=e[8],g=e[9],m=e[10],_=e[11],h=e[12],y=e[13],S=e[14],w=e[15],C=r[0],F=r[1],W=r[2],H=r[3],N=r[4],G=r[5],I=r[6],B=r[7],Q=r[8],ne=r[9],$e=r[10],de=r[11],ve=r[12],be=r[13],Ae=r[14],ze=r[15];return n[0]=a*C+v*F+p*W+h*H,n[1]=i*C+$*F+g*W+y*H,n[2]=l*C+f*F+m*W+S*H,n[3]=u*C+d*F+_*W+w*H,n[4]=a*N+v*G+p*I+h*B,n[5]=i*N+$*G+g*I+y*B,n[6]=l*N+f*G+m*I+S*B,n[7]=u*N+d*G+_*I+w*B,n[8]=a*Q+v*ne+p*$e+h*de,n[9]=i*Q+$*ne+g*$e+y*de,n[10]=l*Q+f*ne+m*$e+S*de,n[11]=u*Q+d*ne+_*$e+w*de,n[12]=a*ve+v*be+p*Ae+h*ze,n[13]=i*ve+$*be+g*Ae+y*ze,n[14]=l*ve+f*be+m*Ae+S*ze,n[15]=u*ve+d*be+_*Ae+w*ze,n}s(Y0);s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[4],v=e[5],$=e[6],f=e[8],d=e[9],p=e[10],g=e[12],m=e[13],_=e[14],h=r[0],y=r[1],S=r[2],w=r[4],C=r[5],F=r[6],W=r[8],H=r[9],N=r[10],G=r[12],I=r[13],B=r[14];return n[0]=a*h+u*y+f*S,n[1]=i*h+v*y+d*S,n[2]=l*h+$*y+p*S,n[3]=0,n[4]=a*w+u*C+f*F,n[5]=i*w+v*C+d*F,n[6]=l*w+$*C+p*F,n[7]=0,n[8]=a*W+u*H+f*N,n[9]=i*W+v*H+d*N,n[10]=l*W+$*H+p*N,n[11]=0,n[12]=a*G+u*I+f*B+g,n[13]=i*G+v*I+d*B+m,n[14]=l*G+$*I+p*B+_,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=La(r,go);var a=r[0],i=r[1],l=r[2],u=Math.cos(e),v=1-u,$=Math.sin(e);return n[0]=a*a*v+u,n[1]=i*a*v+l*$,n[2]=l*a*v-i*$,n[3]=0,n[4]=a*i*v-l*$,n[5]=i*i*v+u,n[6]=i*l*v+a*$,n[7]=0,n[8]=a*l*v+i*$,n[9]=i*l*v-a*$,n[10]=l*l*v+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),i=1/U0(r),l=r[0]*i,u=r[1]*i,v=r[2]*i,$=Math.cos(e),f=1-$,d=Math.sin(e),p=l*d,g=u*d,m=v*d,_=l*u*f,h=l*v*f,y=u*v*f,S=l*l*f+$,w=_+m,C=h-g,F=_-m,W=u*u*f+$,H=y+p,N=h+g,G=y-p,I=v*v*f+$,B=n[0],Q=n[1],ne=n[2],$e=n[3],de=n[4],ve=n[5],be=n[6],Ae=n[7],ze=n[8],_r=n[9],wr=n[10],lt=n[11],vu=n[12],$u=n[13],su=n[14],fu=n[15];return a[0]=B*S+de*w+ze*C,a[1]=Q*S+ve*w+_r*C,a[2]=ne*S+be*w+wr*C,a[3]=$e*S+Ae*w+lt*C,a[4]=B*F+de*W+ze*H,a[5]=Q*F+ve*W+_r*H,a[6]=ne*F+be*W+wr*H,a[7]=$e*F+Ae*W+lt*H,a[8]=B*N+de*G+ze*I,a[9]=Q*N+ve*G+_r*I,a[10]=ne*N+be*G+wr*I,a[11]=$e*N+Ae*G+lt*I,a[12]=vu,a[13]=$u,a[14]=su,a[15]=fu,a});function S$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(S$);R(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function C$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(C$);R(function(e,r,n,a){var i=new Float64Array(16),l=a[0],u=a[1],v=a[2],$=a[3],f=a[4],d=a[5],p=a[6],g=a[7],m=a[8],_=a[9],h=a[10],y=a[11];return i[0]=l,i[1]=u,i[2]=v,i[3]=$,i[4]=f,i[5]=d,i[6]=p,i[7]=g,i[8]=m,i[9]=_,i[10]=h,i[11]=y,i[12]=l*e+f*r+m*n+a[12],i[13]=u*e+d*r+_*n+a[13],i[14]=v*e+p*r+h*n+a[14],i[15]=$*e+g*r+y*n+a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=r[0],v=r[1],$=r[2],f=r[3],d=r[4],p=r[5],g=r[6],m=r[7],_=r[8],h=r[9],y=r[10],S=r[11];return n[0]=u,n[1]=v,n[2]=$,n[3]=f,n[4]=d,n[5]=p,n[6]=g,n[7]=m,n[8]=_,n[9]=h,n[10]=y,n[11]=S,n[12]=u*a+d*i+_*l+r[12],n[13]=v*a+p*i+h*l+r[13],n[14]=$*a+g*i+y*l+r[14],n[15]=f*a+m*i+S*l+r[15],n});x(function(e,r,n){var a=I0(e,r,go),i=La(Mt(n,a,ki),ki),l=La(Mt(a,i,Ti),Ti),u=_$,v=w$;return u[0]=i[0],u[1]=l[0],u[2]=a[0],u[3]=0,u[4]=i[1],u[5]=l[1],u[6]=a[1],u[7]=0,u[8]=i[2],u[9]=l[2],u[10]=a[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=-e[0],v[13]=-e[1],v[14]=-e[2],v[15]=1,Y0(u,v)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Mi=0;function Dn(e,r){for(;r.b;r=r.b)e(r.a)}function bo(e){for(var r=0;e.b;e=e.b)r++;return r}var P$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},L$=xe(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),z$=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),k$=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),T$=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),M$=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),F$=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),D$=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),J$=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),A$=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),B$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},j$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},V$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},R$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Z0=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},X0=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},E$=function(e){e.gl.disable(e.gl.CULL_FACE)},N$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},H$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},G$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Fi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],W$=[j$,V$,R$,Z0,X0,E$,N$,H$,G$];function Di(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function I$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Q0(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function U$(e,r,n,a){for(var i=n.a.dT,l=[],u=0;u<i;u++)l.push(String.fromCharCode(97+u));function v(m,_,h,y,S){var w;if(i===1)for(w=0;w<_;w++)m[h++]=_===1?y[S]:y[S][w];else l.forEach(function(C){for(w=0;w<_;w++)m[h++]=_===1?y[C][S]:y[C][S][w]})}var $=Q0(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var f=0,d=$.size*$.arraySize*i,p=new $.type(bo(n.b)*d);Dn(function(m){v(p,$.size*$.arraySize,f,m,a[r.name]||r.name),f+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function O$(e,r){if(r.a.d0>0){var n=e.createBuffer(),a=q$(r.c,r.a.d0);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dT*bo(r.b),indexBuffer:null,buffers:{}}}function q$(e,r){var n=new Uint32Array(bo(e)*r),a=0,i;return Dn(function(l){if(r===1)n[a++]=l;else for(i=0;i<r;i++)n[a++]=l[String.fromCharCode(97+i)]},e),n}function Ji(e,r){return e+"#"+r}var K0=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Z0(n),X0(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(l){if(!!l.d.b.b){var u,v,$;if(l.b.id&&l.c.id&&(u=Ji(l.b.id,l.c.id),v=n.programs[u]),!v){var f;l.b.id?f=n.shaders[l.b.id]:l.b.id=Mi++,f||(f=Di(a,l.b.src,a.VERTEX_SHADER),n.shaders[l.b.id]=f);var d;l.c.id?d=n.shaders[l.c.id]:l.c.id=Mi++,d||(d=Di(a,l.c.src,a.FRAGMENT_SHADER),n.shaders[l.c.id]=d);var p=I$(a,f,d);v={glProgram:p,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},v.uniformSetters=Y$(a,e,v,Object.assign({},l.b.uniforms,l.c.uniforms));var g=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var m=a.getActiveAttrib(p,$),_=a.getAttribLocation(p,m.name);v.activeAttributes.push(m),v.activeAttributeLocations.push(_)}u=Ji(l.b.id,l.c.id),n.programs[u]=v}n.lastProgId!==u&&(a.useProgram(v.glProgram),n.lastProgId=u),Z$(v.uniformSetters,l.e);var h=n.buffers.get(l.d);for(h||(h=O$(a,l.d),n.buffers.set(l.d,h)),$=0;$<v.activeAttributes.length;$++){m=v.activeAttributes[$],_=v.activeAttributeLocations[$],h.buffers[m.name]===void 0&&(h.buffers[m.name]=U$(a,m,l.d,v.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[m.name]);var y=Q0(a,m.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,w,S*C)}for(n.toggle=!n.toggle,Dn(vd(n),l.a),$=0;$<Fi.length;$++){var F=n[Fi[$]];F.toggle!==n.toggle&&F.enabled&&(W$[$](n),F.enabled=!1,F.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(l.d.a.ey,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(l.d.a.ey,0,h.numIndices)}}return Dn(i,e.g),r});function Y$(e,r,n,a){var i=n.glProgram,l=n.currentUniforms,u=0,v=r.f;function $(m,_){var h=_.name,y=e.getUniformLocation(m,h);switch(_.type){case e.INT:return function(w){l[h]!==w&&(e.uniform1i(y,w),l[h]=w)};case e.FLOAT:return function(w){l[h]!==w&&(e.uniform1f(y,w),l[h]=w)};case e.FLOAT_VEC2:return function(w){l[h]!==w&&(e.uniform2f(y,w[0],w[1]),l[h]=w)};case e.FLOAT_VEC3:return function(w){l[h]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),l[h]=w)};case e.FLOAT_VEC4:return function(w){l[h]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),l[h]=w)};case e.FLOAT_MAT4:return function(w){l[h]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),l[h]=w)};case e.SAMPLER_2D:var S=u++;return function(w){e.activeTexture(e.TEXTURE0+S);var C=v.textures.get(w);C||(C=w.fj(e),v.textures.set(w,C)),e.bindTexture(e.TEXTURE_2D,C),l[h]!==w&&(e.uniform1i(y,S),l[h]=w)};case e.BOOL:return function(w){l[h]!==w&&(e.uniform1i(y,w),l[h]=w)};default:return function(){}}}for(var f={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var g=e.getActiveUniform(i,p);f[a[g.name]||g.name]=$(i,g)}return f}function Z$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var X$=x(function(e,r,n){return Jv(r,{g:n,f:{},h:e},t3,o3)}),Q$=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),K$=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),e3=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),r3=s(function(e,r){e.contextAttributes.antialias=!0}),n3=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),a3=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function t3(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Dn(function(i){return c(ud,r,i)},e.h);var n=dr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),P$(function(){return c(K0,e,n)})):(n=dr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function o3(e,r){return r.f=e.f,K0(r)}var T=Su,aa=wu,ec=x(function(e,r,n){var a=n.c,i=n.d,l=s(function(u,v){if(u.$){var f=u.a;return t(aa,e,v,f)}else{var $=u.a;return t(aa,l,v,$)}});return t(aa,l,t(aa,e,r,i),a)}),ho=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,l=n.d,u=n.e,v=e,$=t(e,a,i,t(ho,e,r,u)),f=l;e=v,r=$,n=f;continue e}}),Ai=function(e){return t(ho,x(function(r,n,a){return c(T,k(r,n),a)}),L,e)},rc=1,i3=2,nc=0,Ce=function(e){return{$:1,a:e}},_o=s(function(e,r){return{$:3,a:e,b:r}}),Bi=s(function(e,r){return{$:0,a:e,b:r}}),ac=s(function(e,r){return{$:1,a:e,b:r}}),me=function(e){return{$:0,a:e}},c3=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},l3=Yu,u3=mv,ye=k0,Br=s(function(e,r){return c(Uu,e,Wa(r))}),wo=s(function(e,r){return b(c(Iu,e,r))}),tc=function(e){return c(Br,`
    `,c(wo,`
`,e))},Wn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,l=e,u=c(e,a,r),v=i;e=l,r=u,n=v;continue e}else return r}),Ke=function(e){return t(Wn,s(function(r,n){return n+1}),0,e)},v3=Cu,$3=x(function(e,r,n){e:for(;;)if(Z(e,r)<1){var a=e,i=r-1,l=c(T,r,n);e=a,r=i,n=l;continue e}else return n}),on=s(function(e,r){return t($3,e,r,L)}),yo=s(function(e,r){return t(v3,e,c(on,0,Ke(r)-1),r)}),ir=nv,oc=function(e){var r=ir(e);return 97<=r&&r<=122},ic=function(e){var r=ir(e);return r<=90&&65<=r},s3=function(e){return oc(e)||ic(e)},f3=function(e){var r=ir(e);return r<=57&&48<=r},m3=function(e){return oc(e)||ic(e)||f3(e)},De=function(e){return t(Wn,T,L,e)},sn=Nu,d3=s(function(e,r){return`

(`+(ye(e+1)+(") "+tc(p3(r))))}),p3=function(e){return c(g3,e,L)},g3=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,u=e.b,a=function(){var h=sn(n);if(h.$===1)return!1;var y=h.a,S=y.a,w=y.b;return s3(S)&&c(l3,m3,w)}(),i=a?"."+n:"['"+(n+"']"),$=u,f=c(T,i,r);e=$,r=f;continue e;case 1:var l=e.a,u=e.b,v="["+(ye(l)+"]"),$=u,f=c(T,v,r);e=$,r=f;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+c(Br,"",De(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(ye(Ke(d))+" ways:"));return c(Br,`

`,c(T,_,c(yo,d3,d)))}else{var u=d.a,$=u,f=r;e=$,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+c(Br,"",De(r)):"!"}();default:var g=e.a,m=e.b,_=function(){return r.b?"Problem with the value at json"+(c(Br,"",De(r))+`:

    `):`Problem with the given value:

`}();return _+(tc(c(u3,4,m))+(`

`+g))}}),Re=32,Ft=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Dt=pu,xo=Ju,So=s(function(e,r){return wi(r)/wi(e)}),b3=Fu,Jn=xo(c(So,2,Re)),cc=z(Ft,0,Jn,Dt,Dt),lc=bu,uc=function(e){return{$:1,a:e}};s(function(e,r){return e(r)});s(function(e,r){return r(e)});var Ar=Au,Jt=gu,Je=s(function(e,r){return Z(e,r)>0?e:r}),h3=function(e){return{$:0,a:e}},Co=hu,_3=s(function(e,r){e:for(;;){var n=c(Co,Re,e),a=n.a,i=n.b,l=c(T,h3(a),r);if(i.b){var u=i,v=l;e=u,r=v;continue e}else return De(l)}}),w3=function(e){var r=e.a;return r},y3=s(function(e,r){e:for(;;){var n=xo(r/Re);if(n===1)return c(Co,Re,e).a;var a=c(_3,e,L),i=n;e=a,r=i;continue e}}),vc=s(function(e,r){if(r.o){var n=r.o*Re,a=Ar(c(So,Re,n-1)),i=e?De(r.D):r.D,l=c(y3,i,r.o);return z(Ft,Jt(r.t)+n,c(Je,5,a*Jn),l,r.t)}else return z(Ft,Jt(r.t),Jn,Dt,r.t)}),x3=xe(function(e,r,n,a,i){e:for(;;){if(r<0)return c(vc,!1,{D:a,o:n/Re|0,t:i});var l=uc(t(lc,Re,r,e)),u=e,v=r-Re,$=n,f=c(T,l,a),d=i;e=u,r=v,n=$,a=f,i=d;continue e}}),S3=s(function(e,r){if(e<=0)return cc;var n=e%Re,a=t(lc,n,e-n,r),i=e-n-Re;return P(x3,r,i,e,L,a)}),Ye=function(e){return!e.$},J=vv,K=ov,D=uv,pe=iv,C3=function(e){return{$:2,a:e}},$c=s(function(e,r){return e}),sc=s(function(e,r){return{dP:r.dP,fh:e,cJ:r.cJ,fs:r.fs,d3:r.d3,ci:r.ci,bF:r.bF,gC:r.gC}}),An=$v,P3=sv,je=tv,Po=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Sr=function(e){return e},L3=Sr,ji=rr(function(e,r,n,a,i,l){return{dY:l,d_:r,eC:a,eF:n,eI:e,eJ:i}}),z3=Zu,jr=Hu,qr=Ou,In=s(function(e,r){return e<1?r:t(qr,e,jr(r),r)}),Ia=Qu,Ua=function(e){return e===""},Oa=s(function(e,r){return e<1?"":t(qr,0,e,r)}),fc=Ku,Vi=xe(function(e,r,n,a,i){if(Ua(i)||c(z3,"@",i))return q;var l=c(Ia,":",i);if(l.b){if(l.b.b)return q;var u=l.a,v=fc(c(In,u+1,i));if(v.$===1)return q;var $=v;return te(Te(ji,e,c(Oa,u,i),$,r,n,a))}else return te(Te(ji,e,i,q,r,n,a))}),Ri=R(function(e,r,n,a){if(Ua(a))return q;var i=c(Ia,"/",a);if(i.b){var l=i.a;return P(Vi,e,c(In,l,a),r,n,c(Oa,l,a))}else return P(Vi,e,"/",r,n,a)}),Ei=x(function(e,r,n){if(Ua(n))return q;var a=c(Ia,"?",n);if(a.b){var i=a.a;return z(Ri,e,te(c(In,i+1,n)),r,c(Oa,i,n))}else return z(Ri,e,q,r,n)});s(function(e,r){if(Ua(r))return q;var n=c(Ia,"#",r);if(n.b){var a=n.a;return t(Ei,e,te(c(In,a+1,r)),c(Oa,a,r))}else return t(Ei,e,q,r)});var k3=Xu,Lo=function(e){},Un=Nr,T3=Un(0),mc=R(function(e,r,n,a){if(a.b){var i=a.a,l=a.b;if(l.b){var u=l.a,v=l.b;if(v.b){var $=v.a,f=v.b;if(f.b){var d=f.a,p=f.b,g=n>500?t(Wn,e,r,De(p)):z(mc,e,r,n+1,p);return c(e,i,c(e,u,c(e,$,c(e,d,g))))}else return c(e,i,c(e,u,c(e,$,r)))}else return c(e,i,c(e,u,r))}else return c(e,i,r)}else return r}),$r=x(function(e,r,n){return z(mc,e,r,0,n)}),ie=s(function(e,r){return t($r,s(function(n,a){return c(T,e(n),a)}),L,r)}),za=zt,zo=s(function(e,r){return c(za,function(n){return Un(e(n))},r)}),M3=x(function(e,r,n){return c(za,function(a){return c(za,function(i){return Un(c(e,a,i))},n)},r)}),F3=function(e){return t($r,M3(T),Un(L),e)},D3=xv,J3=s(function(e,r){var n=r;return F0(c(za,D3(e),n))}),A3=x(function(e,r,n){return c(zo,function(a){return 0},F3(c(ie,J3(e),r)))}),B3=x(function(e,r,n){return Un(0)}),j3=s(function(e,r){var n=r;return c(zo,e,n)});or.Task=wv(T3,A3,B3,j3);var V3=J0("Task"),ko=s(function(e,r){return V3(c(zo,e,r))}),R3=n$,E3=Ru,ka={$:1},dc=function(e){return{$:2,a:e}},qa={$:0},Ge=s(function(e,r){return{$:0,a:e,b:r}}),ee=x(function(e,r,n){return r(e(n))}),fn=function(e){var r=e.b.r;return r.a},N3=function(e){var r=e.a,n=e.b.ab,a=e.b.r,i=e.b.al;if(i.b){var l=i.a,u=i.b;return te(c(Ge,r,{r:l,al:u,ab:c(T,a,n)}))}else return q},pc=function(e){var r=e.b;return c(Ge,qa,r)},Ue=s(function(e,r){if(r.$)return e;var n=r.a;return n}),H3=x(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return r.ci.dS?pc(n):n;case 2:var l=a.a.dy;return(Z(l+r.fs,fn(n).dP)>0?c(ee,N3,Ue(c(Ge,ka,i))):Sr)(c(Ge,dc({dy:l+r.fs}),i));default:var u=i.r,v=u.a,$=u.b,f=c(sc,v.fh,X(r,{dP:v.dP+r.fs})),d=c(e,f,$);return c(Ge,qa,{r:k(f,d),al:L,ab:c(T,i.r,i.ab)})}}),gc=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),G3=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,l=e-1,u=i,v=c(T,a,n);e=l,r=u,n=v;continue e}else return n}}),W3=s(function(e,r){return De(t(G3,e,r,L))}),bc=x(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,l=i.b,u=l.a;return b([w,u]);case 3:if(a.b.b.b.b){var v=a.b,w=v.a,$=v.b,u=$.a,f=$.b,d=f.a;return b([w,u,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,w=p.a,g=p.b,u=g.a,m=g.b,d=m.a,_=m.b,h=_.a,y=_.b;return e>1e3?c(T,w,c(T,u,c(T,d,c(T,h,c(W3,r-4,y))))):c(T,w,c(T,u,c(T,d,c(T,h,t(bc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return b([w])}}),I3=s(function(e,r){return t(bc,0,e,r)}),U3=s(function(e,r){var n=r.b.ab,a=r.b.r,i=r.b.al,l=fe(De(n),fe(b([a]),i)),u=c(I3,e,l),v=c(gc,e,l);if(v.b){var $=v.a,f=v.b;return c(Ge,ka,{r:$,al:f,ab:De(u)})}else{var d=De(u);if(d.b){var p=d.a,g=d.b;return c(Ge,ka,{r:p,al:L,ab:g})}else return r}}),O3=function(e){var r=e.b;return c(Ge,ka,r)},q3=function(e){var r=e.b;return c(Ge,dc({dy:fn(e).dP}),r)},Y3=s(function(e,r){switch(e.$){case 1:return O3(r);case 2:return pc(r);case 3:return q3(r);default:var n=e.a;return c(U3,n,r)}}),hc=s(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Z3=s(function(e,r){return X(r,{aI:e(r.aI)})}),X3=function(e){return{$:3,a:e}},Q3=function(e){return{$:2,a:e}},_c=s(function(e,r){return{$:0,a:e,b:r}}),K3=s(function(e,r){return{$:1,a:e,b:r}}),Pe=s(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Y=function(e){return e<0?-e:e},To=ev,es=x(function(e,r,n){return c(Ue,0/0,To(c(e,r,n)))}),wc=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,l=a;e=i,r=l;continue e}else return!1}),rs=Wu,yc=function(e){return t(rs,T,L,e)},ns=s(function(e,r){var n=c(wc,function(a){return a!=="0"&&a!=="."},yc(r));return fe(e&&n?"-":"",r)}),le=k0,At=Eu,xc=av,Sc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=sn(n);if(a.$===1)return"01";var i=a.a;return c(At,"0",Sc(i))}else{var l=ir(r);return l>=48&&l<57?c(At,xc(l+1),n):"0"}},Bt=Du,as=Vu,Ya=function(e){return c(At,e,"")},Cc=x(function(e,r,n){return e<=0?n:t(Cc,e>>1,fe(r,r),e&1?fe(n,r):n)}),Bn=s(function(e,r){return t(Cc,e,r,"")}),jt=x(function(e,r,n){return fe(n,c(Bn,e-jr(n),Ya(r)))}),Vt=Gu,Pc=function(e){var r=c(wo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return k(n,i)}else{var n=r.a;return k(n,"0")}else return k("0","0")},ts=function(e){var r=c(wo,"e",le(Y(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,l=c(Ue,0,fc(c(k3,"+",i)?c(In,1,i):i)),u=Pc(n),v=u.a,$=u.b,f=fe(v,$),d=l<0?c(Ue,"0",c(Pe,function(p){var g=p.a,m=p.b;return g+("."+m)},c(Pe,hc(Ya),sn(fe(c(Bn,Y(l),"0"),f))))):t(jt,l+1,"0",f);return fe(e<0?"-":"",d)}else{var n=r.a;return fe(e<0?"-":"",n)}else return""},os=x(function(e,r,n){if(Bt(n)||as(n))return le(n);var a=n<0,i=Pc(ts(Y(n))),l=i.a,u=i.b,v=jr(l)+r,$=fe(c(Bn,-v+1,"0"),t(jt,v,"0",fe(l,u))),f=jr($),d=c(Je,1,v),p=c(e,a,t(qr,d,f,$)),g=t(qr,0,d,$),m=p?Vt(c(Ue,"1",c(Pe,Sc,sn(Vt(g))))):g,_=jr(m),h=m==="0"?m:r<=0?fe(m,c(Bn,Y(r),"0")):Z(r,jr(u))<0?t(qr,0,_-r,m)+("."+t(qr,_-r,_,m)):fe(l+".",t(jt,r,"0",u));return c(ns,a,h)}),Pn=os(s(function(e,r){var n=sn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(l){return l>53&&e||l>=53&&!e}(ir(i))})),is=es(Pn),cs=x(function(e,r,n){var a=c(So,10,Y(r-e)),i=a<0?3:a<1?2:a<2?1:0;return c(is,i,n)}),Lc=xu,Mo=s(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,i=r.d,l=r.e,u=c(Lc,e,n);switch(u){case 0:var v=e,$=i;e=v,r=$;continue e;case 1:return te(a);default:var v=e,$=l;e=v,r=$;continue e}}}),O=xe(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),ur={$:-2},cn=xe(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,$=i.e;if(a.$===-1&&!a.a){a.a;var f=a.b,d=a.c,p=a.d,g=a.e;return P(O,0,r,n,P(O,1,f,d,p,g),P(O,1,l,u,v,$))}else return P(O,e,l,u,P(O,0,r,n,a,v),$)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var f=a.b,d=a.c,m=a.d;m.a;var _=m.b,h=m.c,y=m.d,S=m.e,g=a.e;return P(O,0,f,d,P(O,1,_,h,y,S),P(O,1,r,n,g,i))}else return P(O,e,r,n,a,i)}),Rt=x(function(e,r,n){if(n.$===-2)return P(O,0,e,r,ur,ur);var a=n.a,i=n.b,l=n.c,u=n.d,v=n.e,$=c(Lc,e,i);switch($){case 0:return P(cn,a,i,l,t(Rt,e,r,u),v);case 1:return P(O,a,i,r,u,v);default:return P(cn,a,i,l,u,t(Rt,e,r,v))}}),Xr=x(function(e,r,n){var a=t(Rt,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,l=a.c,u=a.d,v=a.e;return P(O,1,i,l,u,v)}else{var $=a;return $}}),ls=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},zc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,v=i.d,$=i.e,f=e.e;f.a;var d=f.b,p=f.c,g=f.d;g.a;var m=g.b,_=g.c,h=g.d,y=g.e,S=f.e;return P(O,0,m,_,P(O,1,n,a,P(O,0,l,u,v,$),h),P(O,1,d,p,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,v=w.d,$=w.e,C=e.e;C.a;var d=C.b,p=C.c,g=C.d,S=C.e;return P(O,1,n,a,P(O,0,l,u,v,$),P(O,0,d,p,g,S))}else return e},Ni=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,v=i.d;v.a;var $=v.b,f=v.c,d=v.d,p=v.e,g=i.e,m=e.e;m.a;var _=m.b,h=m.c,y=m.d,S=m.e;return P(O,0,l,u,P(O,1,$,f,d,p),P(O,1,n,a,g,P(O,0,_,h,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,C=w.d,g=w.e,F=e.e;F.a;var _=F.b,h=F.c,y=F.d,S=F.e;return P(O,1,n,a,P(O,0,l,u,C,g),P(O,0,_,h,y,S))}else return e},us=Ha(function(e,r,n,a,i,l,u){if(l.$===-1&&!l.a){l.a;var v=l.b,$=l.c,f=l.d,d=l.e;return P(O,n,v,$,f,P(O,0,a,i,d,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var p=u.d;return p.a,Ni(r)}else break e;else return u.a,u.d,Ni(r);else break e;return r}}),ma=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,l=i.a,u=i.d,v=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,P(O,r,n,a,ma(i),v);var $=zc(e);if($.$===-1){var f=$.a,d=$.b,p=$.c,g=$.d,m=$.e;return P(cn,f,d,p,ma(g),m)}else return ur}else return P(O,r,n,a,ma(i),v)}else return ur},Ln=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(Z(e,a)<0)if(l.$===-1&&l.a===1){l.a;var v=l.d;if(v.$===-1&&!v.a)return v.a,P(O,n,a,i,c(Ln,e,l),u);var $=zc(r);if($.$===-1){var f=$.a,d=$.b,p=$.c,g=$.d,m=$.e;return P(cn,f,d,p,c(Ln,e,g),m)}else return ur}else return P(O,n,a,i,c(Ln,e,l),u);else return c(vs,e,io(us,e,r,n,a,i,l,u))}),vs=s(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(gr(e,a)){var v=ls(u);if(v.$===-1){var $=v.b,f=v.c;return P(cn,n,$,f,l,ma(u))}else return ur}else return P(cn,n,a,i,l,c(Ln,e,u))}else return ur}),kc=s(function(e,r){var n=c(Ln,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,l=n.d,u=n.e;return P(O,1,a,i,l,u)}else{var v=n;return v}}),ta=x(function(e,r,n){var a=r(c(Mo,e,n));if(a.$)return c(kc,e,n);var i=a.a;return t(Xr,e,i,n)}),$s=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return c(ta,r,Pe(function(a){if(a.$===1){var i=a.a,l=i.a,u=i.b;return c(K3,k(l,u),n)}else return a}));case 0:var r=e.a,n=e.b;return c(ta,r,Pe(function(a){if(a.$)return a;var i=a.a,l=i.a,u=i.b;return c(_c,k(l,u),t(cs,l,u,n))}));case 3:var r=e.a,n=e.b;return c(ta,r,Pe(function(a){return a.$===3?X3(n):a}));default:var r=e.a,n=e.b;return c(ta,r,Pe(function(a){return a.$===2?Q3(n):a}))}},ss=function(e){return Z3($s(e))},fs=s(function(e,r){return c(ie,ss(e),r)}),ms=s(function(e,r){return X(r,{fh:c(fs,e,r.fh)})}),ds=s(function(e,r){var n=r.a,a=r.b;return c(Ge,n,X(a,{r:c(hc,ms(e),a.r)}))}),ps=s(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),gs=x(function(e,r,n){var a=n.a,i=n.b,l=i.r;return c(Ge,a,X(i,{r:c(ps,c(e,l.a,r),l)}))}),bs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return X(a,{a$:!a.a$});case 2:var i=n.a;return X(a,{K:t(H3,e,i,a.K)});case 3:var l=n.a;return X(a,{K:c(ds,l,a.K)});case 4:var u=n.a;return X(a,{K:t(gs,r,u,a.K)});default:var v=n.a;return X(a,{K:c(Y3,v,a.K)})}}),hs=s(function(e,r){return c(Ge,qa,{r:k(e,r(e)),al:L,ab:L})}),_s=Sv,Hi=_s(L),Ta=lv,jn=cv,ws=kv("tick",c(J,function(e){return c(J,function(r){return c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return je({dP:u,cJ:l,fs:i,d3:a,ci:n,bF:r,gC:e})},c(D,"clock",pe))},c(D,"devicePixelRatio",pe))},c(D,"dt",pe))},c(D,"keyboard",c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return c(J,function(d){return c(J,function(p){return je({e2:p,fi:d,dS:f,fr:$,fU:v,gc:u,gh:l,eP:i,eX:a})},c(D,"alt",K))},c(D,"control",K))},c(D,"down",K))},c(D,"downs",Ta(jn)))},c(D,"left",K))},c(D,"pressedKeys",Ta(jn)))},c(D,"right",K))},c(D,"shift",K))},c(D,"up",K))))},c(D,"pointer",c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return je({dS:f,cO:$,f$:v,gi:u,gj:l,eX:i,gF:a,gJ:n})},c(D,"down",K))},c(D,"isDown",K))},c(D,"move",K))},c(D,"rightDown",K))},c(D,"rightUp",K))},c(D,"up",K))},c(D,"x",pe))},c(D,"y",pe))))},c(D,"screen",c(J,function(r){return c(J,function(n){return je({fF:n,gD:r})},c(D,"height",pe))},c(D,"width",pe))))},c(D,"wheel",c(J,function(e){return c(J,function(r){return je({fl:r,fm:e})},c(D,"deltaX",pe))},c(D,"deltaY",pe))))),ys=function(e){return{$:4,a:e}},xs={$:0},Ss=M0,qe=s(function(e,r){return c(j0,e,Ss(r))}),V=qe("className"),Cs=function(e){var r=e.b.r;return r.b},E=Oe("div"),Ma=qe("id"),Ps=Av,Fa=Ps,Ls=Bv,ce=Ls,zs={$:1},ks=function(e){return{$:3,a:e}},Ts=function(e){return{$:5,a:e}},Gi=Oe("a"),Za=Oe("button"),Ms=Gn("d"),Tc=A0("http://www.w3.org/2000/svg"),Fs=Tc("path"),Ds=Tc("svg"),Js=Gn("viewBox"),zn=function(e){return c(Ds,b([Js("0 0 100 100"),c(ce,"width","100%"),c(ce,"height","100%")]),b([c(Fs,b([Ms(e)]),L)]))},Wi=function(e){return c(qe,"href",Vv(e))},Qr={fq:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fE:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ga:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",gb:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ci:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",ge:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",gn:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",gx:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",gz:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gO:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},As=function(e){return{$:0,a:e}},Mc=B0,Fo=s(function(e,r){return c(Mc,e,As(r))}),On=function(e){return c(Fo,"click",je(e))},Ii=qe("target"),Bs=qe("title"),Et=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;return P(O,n,a,c(e,a,i),c(Et,e,l),c(Et,e,u))}),js=kt,ae=js,Fc=function(e){return t(ho,x(function(r,n,a){return c(T,n,a)}),L,e)},Vs=s(function(e,r){return{$:3,a:e,b:r}}),Rs=s(function(e,r){return{$:2,a:e,b:r}}),Es=s(function(e,r){return{$:0,a:e,b:r}}),Ns=s(function(e,r){return{$:1,a:e,b:r}}),Do=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Hs=z(Do,0/255,0/255,0/255,1),Gs=M0,Ws=s(function(e,r){return c(j0,e,Gs(r))}),Is=Ws("checked"),er=Bu,Us=x(function(e,r,n){return fe(c(Bn,e-jr(n),Ya(r)),n)}),ln=Lu,Dc=function(e){var r=function(n){return n<10?ye(n):Ya(xc(87+n))};return e<16?r(e):fe(Dc(e/16|0),r(c(ln,16,e)))},Os=c(ee,Dc,c(Us,2,"0")),Jo=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{aX:i,cC:a,cM:n,dn:r}},qs=function(e){var r=Jo(e),n=r.dn,a=r.cM,i=r.cC;return c(Br,"",c(T,"#",c(ie,c(ee,er,Os),b([n*255,a*255,i*255]))))},Nt=qe("htmlFor"),Ht=s(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Da=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return e(n)}}),Ys=x(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return c(T,i,n)}),Ao=s(function(e,r){return t($r,Ys(e),L,r)}),Jc=R(function(e,r,n,a){return{fL:r,fZ:e,f4:n,gq:a}}),Zs=c$,Xs=rv,Qs=s(function(e,r){if(r.$)return Ce(e);var n=r.a;return me(n)}),Ks=i$,e1=function(e){return c(Ks,{fc:!1,f0:!1},e)},Bo=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},r1=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return me(e(n))}}),n1=function(e){return{$:2,a:e}},a1=function(e){return{$:0,a:e}},t1=function(e){return{$:1,a:e}},$t=s(function(e,r){return ir(r)-ir(e)}),st=x(function(e,r,n){var a=ir(n);return Z(ir(e),a)<1&&Z(a,ir(r))<1}),o1=s(function(e,r){var n=function(i){return Z(i,e)<0?me(i):Ce(t1(r))},a=t(st,"0","9",r)?me(c($t,"0",r)):t(st,"a","z",r)?me(10+c($t,"a",r)):t(st,"A","Z",r)?me(10+c($t,"A",r)):Ce(a1(r));return c(Da,n,a)}),Ac=s(function(e,r){var n=sn(r);if(n.$===1)return me(0);var a=n.a,i=a.a,l=a.b;return c(Da,function(u){return c(Da,function(v){return me(u+v*e)},c(Ac,e,l))},c(o1,e,i))}),i1=s(function(e,r){return 2<=e&&e<=36?c(Ac,e,Vt(r)):Ce(n1(e))}),c1=i1(16),o=x(function(e,r,n){return z(Do,e,r,n,1)}),l1=R(function(e,r,n,a){return z(Do,e,r,n,a)}),qn=Pu,u1=s(function(e,r){var n=c(qn,10,e);return er(r*n)/n}),v1=qu,$1=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=yc(n);if(a.b&&!a.b.b){var i=a.a;return Xs(b([i,i]))}else return n};return c(ee,v1,c(ee,function(n){return c(Pe,function(a){return t(Zs,1,a,n)},e1(e))},c(ee,Ht(Bo),c(ee,Pe(function(n){return n.gq}),c(ee,Pe(Ao(Sr)),c(ee,Qs("Parsing hex regex failed"),Da(function(n){var a=c(ie,c(ee,r,c(ee,c1,r1(b3))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,l=a.b,u=l.a.a,v=l.b,$=v.a.a,f=v.b,d=f.a.a;return me(z(l1,i/255,u/255,$/255,c(u1,2,d/255)))}else break e;else{var i=a.a.a,p=a.b,u=p.a.a,g=p.b,$=g.a.a;return me(t(o,i/255,u/255,$/255))}else break e;return Ce("Parsing ints from hex failed")})))))))}(),Ja=Oe("input"),Gt=Oe("label"),Wt=qe("name"),Bc=s(function(e,r){return t($r,D,r,e)}),s1=c(Bc,b(["target","checked"]),K),f1=function(e){return c(Fo,"change",c(An,e,s1))},m1=function(e){return k(e,!0)},d1=function(e){return{$:1,a:e}},p1=s(function(e,r){return c(Mc,e,d1(r))}),jc=c(Bc,b(["target","value"]),jn),jo=function(e){return c(p1,"input",c(An,m1,c(An,e,jc)))},Vc=qe("max"),Rc=qe("min"),Ec=function(e){return c(qe,"step",e)},Aa=qe("type"),Yn=qe("value"),Ui=function(e){var r=e.cQ,n=e.dD,a=e.c4,i=e.c0,l=e.dv,u=e.c8;return c(E,L,b([c(Gt,b([Nt(r)]),b([c(E,b([V("relative w-full")]),b([c(E,b([V("inline-block")]),b([ae(r)])),c(E,b([V("inline-block float-right")]),b([ae(le(n))]))]))])),c(Ja,b([Aa("range"),c(ce,"width","100%"),Ma(r),Wt(r),Rc(le(a)),Vc(le(i)),Yn(le(n)),Ec(le(l)),jo(c(ee,To,c(ee,Ue(42),u)))]),L)]))},g1=s(function(e,r){if(r.$)return e;var n=r.a;return n}),b1=s(function(e,r){switch(r.$){case 3:var u=r.a;return c(E,L,b([c(E,b([V("mb-2")]),b([c(Gt,b([Nt(e)]),b([ae(e)]))])),c(Ja,b([Aa("checkbox"),Ma(e),Wt(e),f1(Vs(e)),Is(u)]),L)]));case 0:var n=r.a,i=n.a,l=n.b,u=r.b;return Ui({cQ:e,c0:l,c4:i,c8:Es(e),dv:.01*(l-i),dD:u});case 1:var a=r.a,i=a.a,l=a.b,u=r.b;return Ui({cQ:e,c0:l,c4:i,c8:c(ee,er,Ns(e)),dv:1,dD:u});default:var u=r.a;return c(E,L,b([c(E,b([c(ce,"margin-bottom","6px")]),b([c(Gt,b([Nt(e)]),b([ae(e)]))])),c(Ja,b([Aa("color"),c(ce,"width","100%"),c(ce,"height","26px"),c(ce,"padding","0px"),Ma(e),Wt(e),jo(function(v){return c(Rs,e,c(g1,Hs,$1(v)))}),Yn(qs(u))]),L)]))}}),h1=function(e){return c(E,b([V("p-6 border-y-[0.5px] border-white20")]),b([c(E,b([V("text-lg pb-2")]),b([ae(e.f1)])),c(E,b([V("pl-2 pr-2")]),Fc(c(Et,b1,e.aI)))]))},_1=function(e){return c(E,b([V("text-xs text-white60")]),c(ie,h1,e))},w1=function(e){return c(E,b([V("absolute left-[104px] bottom-2 text-sm text-white40")]),b([ae("clock: "+c(Pn,3,fn(e).dP))]))},y1=function(e){e.a;var r=e.b.ab;return c(Pe,function(n){return er(60/(fn(e).dP-n))},c(Pe,c(ee,w3,function(n){return n.dP}),Bo(c(gc,59,r))))},x1=function(e){return c(E,b([V("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=y1(e);if(r.$===1)return b([ae("... Fps")]);var n=r.a;return b([ae(ye(n)+" Fps")])}())},S1=function(e){return{$:0,a:e}},C1=function(e){var r=e.b.ab;return Ke(r)},P1=function(e){var r=e.b.ab;e.b.r;var n=e.b.al;return Ke(r)+1+Ke(n)},L1=function(e){return c(Ja,b([V("absolute left-[100px] w-[490px]"),Aa("range"),Rc(ye(0)),Vc(ye(P1(e)-1)),Yn(ye(C1(e))),Ec(ye(1)),jo(c(ee,To,c(ee,Ue(42),c(ee,er,S1))))]),L)},Oi={$:1},z1={$:3},k1={$:2},Nc=function(e){return!e.b},qi=s(function(e,r){return c(Za,b([V("px-2 bg-black40"),V(r),On(e)]),b([ae("REC")]))}),Yi=s(function(e,r){return c(Za,b([V("absolute left-[60px] mx-1 px-1 bg-black40"),On(r)]),b([c(E,b([V("w-4 h-6 fill-white80")]),b([zn(e)]))]))}),T1=function(e){var r=e.a,n=e.b.al;return c(E,b([V("py-1")]),b([function(){switch(r.$){case 0:return c(qi,Oi,"text-red-500 font-bold");case 1:return c(qi,k1,"text-white80 font-bold");default:return c(E,L,L)}}(),function(){switch(r.$){case 0:return c(E,L,L);case 1:return Nc(n)?c(E,L,L):c(Yi,Qr.gb,z1);default:return c(Yi,Qr.ga,Oi)}}()]))},M1=function(e){return c(E,b([V("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),b([L1(e),T1(e),x1(e),w1(e)]))},Vo=function(e){return c(Br,"",e)},F1=s(function(e,r){if(r.b){var n=r.a,a=r.b,i=s(function(u,v){return c(T,e,c(T,u,v))}),l=t($r,i,L,a);return c(T,n,l)}else return L}),D1=function(e){var r=e.a;return gr(r,qa)},yr=Oe("p"),J1=Oe("pre"),A1=s(function(e,r){var n=D1(r.K)?c(E,L,L):c(E,b([V("absolute pointer-events-none w-8 h-8"),c(ce,"left",le(e.ci.gF+.5*e.bF.gD)+"px"),c(ce,"top",le(-e.ci.gJ+.5*e.bF.fF)+"px")]),b([c(E,b([V(e.ci.cO?"fill-black80":"fill-white40")]),b([zn(Qr.ci)]))]));return c(E,L,b([n,c(J1,b([V("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),b([c(yr,L,b([ae("pressedKeys: "+Vo(c(F1," ",e.d3.gc)))])),c(yr,L,b([ae("delta time: "+c(Pn,4,e.fs))])),c(yr,L,b([ae("pointer is down: "+(e.ci.cO?"yes":"no"))])),c(yr,L,b([ae("pointer.x: "+c(Pn,2,e.ci.gF))])),c(yr,L,b([ae("pointer.y: "+c(Pn,2,e.ci.gJ))])),c(yr,L,b([ae("wheel deltaX: "+le(e.gC.fl))])),c(yr,L,b([ae("wheel deltaY: "+le(e.gC.fm))]))]))]))}),B1=s(function(e,r){var n=c(Za,b([V(r.a$?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),On(zs),Bs("Distraction Free Mode")]),b([zn(Qr.gO)])),a=c(E,b([V("absolute w-8 bottom-12")]),b([c(Gi,b([V("fill-twitterBlue40 hover:fill-twitterBlue"),Wi("https://twitter.com/AzizErkalSelman"),Ii("_blank")]),b([zn(Qr.gx)]))])),i=c(E,b([V("absolute w-8 bottom-2")]),b([c(Gi,b([V("fill-githubCat40 hover:fill-githubCat"),Wi("https://github.com/erkal/elm-3d-playground-exploration"),Ii("_blank")]),b([zn(Qr.fz)]))]));return r.a$?c(E,b([V("fixed w-10 h-10 p-1")]),b([n])):c(E,L,b([c(E,b([V("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,i])),c(E,b([V("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),b([c(Fa,ks,_1(fn(r.K).fh))])),c(Fa,Ts,M1(r.K)),c(A1,e,r)]))}),j1=x(function(e,r,n){var a=Cs(n.K),i=fn(n.K);return c(E,b([V("bg-black40"),V("select-none"),V("antialiased"),V("font-mono"),c(ce,"width",le(i.bF.gD)+"px"),c(ce,"height",le(i.bF.fF)+"px")]),b([c(E,b([V("fixed")]),b([c(Fa,$c(xs),c(e,i,a))])),c(E,b([Ma("gui")]),b([c(B1,i,n),c(E,b([V("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),b([c(Fa,ys,c(r,i,a))]))]))]))}),V1=rr(function(e,r,n,a,i,l){var u=s(function($,f){return k(z(bs,r,l,$,f),Hi)}),v=function($){var f=c(sc,n,$.fN);return k({a$:$.fN.bF.gD<500,K:c(hs,f,a)},Hi)};return R3({fM:v,gr:$c(ws(C3)),gy:u,gB:c(j1,e,i)})}),Ro=ur,R1=function(e){return{a:Ro,_:e}},E1=function(e){var r=e.a,n=e.b,a=e.c;return k(k(n,a),function(){return r?1:0}())},Hc={e7:150,bB:1,gw:R1(E1)},N1=function(e){return{F:L,n:L,r:e}},H1=function(e){return{l:N1(Hc),a9:{cr:0,ct:0},aB:0}},G1=x(function(e,r,n){return{aI:n,fQ:r,f1:e}}),W1=function(e){return t(Wn,s(function(r,n){var a=r.a,i=r.b;return t(Xr,a,i,n)}),Ro,e)},I1=x(function(e,r,n){return t(G1,e,r,W1(n))}),Zi=I1,Rr=zu,mr=function(e){return e*Rr/180},Dr=x(function(e,r,n){var a=r.a,i=r.b;return k(e,c(_c,k(a,i),n))}),U1=b([t(Zi,"Camera",!0,b([t(Dr,"camera x",k(-40,40),0),t(Dr,"camera y",k(-40,0),0),t(Dr,"camera z",k(1,50),20)])),t(Zi,"Parameters",!0,b([t(Dr,"trixel scale",k(.5,1),1),t(Dr,"minimum rotation degree",k(-mr(180),0),0),t(Dr,"maximum rotation degree",k(0,mr(180)),0),t(Dr,"rotation period",k(1,20),5)]))]),Xi=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Gc=function(e){var r=e.cr,n=e.ct,a=function(i){return i-Ar(i)};return a(r)+a(n)<1?t(Xi,0,Ar(r),Ar(n)):t(Xi,1,Ar(r),Ar(n))},O1=x(function(e,r,n){var a=n;return X(a,{a:t(Xr,a._(e),k(e,r),a.a)})}),q1=x(function(e,r,n){return X(n,{gw:t(O1,e,r,n.gw)})}),Y1=s(function(e,r){var n=r;return X(n,{r:e(n.r)})}),Ba=s(function(e,r){return X(r,{l:c(Y1,e,r.l)})}),Z1=s(function(e,r){return e.ci.cO?c(Ba,c(q1,Gc(r.a9),r.aB),r):r}),X1=s(function(e,r){var n=r;return X(n,{a:c(kc,n._(e),n.a)})}),Q1=s(function(e,r){return X(r,{gw:c(X1,e,r.gw)})}),K1=s(function(e,r){return e.d3.eP&&e.ci.cO?c(Ba,Q1(Gc(r.a9)),r):r}),ef=s(function(e,r){return c(Pe,function(n){if(n.$)return 0;var a=n.b;return a},c(Mo,e,r.aI))}),rf=s(function(e,r){return c(Ue,0,Bo(c(Ao,ef(e),r)))}),nf=s(function(e,r){return c(rf,e,r.fh)}),Vr=nf,un=function(e){return e},Yr=function(e){return un(Rr*(e/180))},Qe=ju,af=s(function(e,r){var n=e,a=r,i=a.dJ-n.dJ,l=a.gJ-n.gJ,u=a.gF-n.gF,v=c(Je,Y(u),c(Je,Y(l),Y(i)));if(v){var $=i/v,f=l/v,d=u/v,p=Qe(d*d+f*f+$*$);return te({gF:d/p,gJ:f/p,dJ:$/p})}else return q}),da=function(e){return e},Eo=s(function(e,r){var n=e,a=r;return{gF:a.gJ*n.dJ-a.dJ*n.gJ,gJ:a.dJ*n.gF-a.gF*n.dJ,dJ:a.gF*n.gJ-a.gJ*n.gF}}),kn=function(e){var r=e,n=c(Je,Y(r.gF),c(Je,Y(r.gJ),Y(r.dJ)));if(n){var a=r.dJ/n,i=r.gJ/n,l=r.gF/n,u=Qe(l*l+i*i+a*a);return te({gF:l/u,gJ:i/u,dJ:a/u})}else return q},ja=s(function(e,r){var n=e,a=r;return{gF:a.gF-n.gF,gJ:a.gJ-n.gJ,dJ:a.dJ-n.dJ}}),tf=s(function(e,r){var n=e,a=r;return a.gF*n.gF+a.gJ*n.gJ+a.dJ*n.dJ}),Wc=s(function(e,r){var n=e,a=r;return Z(a,n)>0}),of=s(function(e,r){var n=e,a=r;return Z(a,n)<0}),cf=s(function(e,r){var n=e,a=r;return{gF:a.gF-n.gF,gJ:a.gJ-n.gJ,dJ:a.dJ-n.dJ}}),lf=s(function(e,r){var n=e,a=r,i=a.gF*n.gF+a.gJ*n.gJ+a.dJ*n.dJ;return{gF:n.gF*i,gJ:n.gJ*i,dJ:n.dJ*i}}),uf=function(e){var r=e;return{gF:-r.gF,gJ:-r.gJ,dJ:-r.dJ}},He=0,Ic={gF:0,gJ:0,dJ:0},vf=x(function(e,r,n){return c(Ht,function(a){var i=c(cf,c(lf,a,r),r);return c(Ht,function(l){var u=c(Eo,r,e),v=c(tf,n,u),$=c(Wc,He,v)?u:c(of,He,v)?uf(u):Ic;return c(Pe,function(f){return A(a,l,f)},kn($))},kn(i))},kn(e))}),$f=function(e){var r=e,n=Y(r.dJ),a=Y(r.gJ),i=Y(r.gF);if(Z(i,a)<1)if(Z(i,n)<1){var l=Qe(r.dJ*r.dJ+r.gJ*r.gJ);return{gF:0,gJ:-r.dJ/l,dJ:r.gJ/l}}else{var l=Qe(r.gJ*r.gJ+r.gF*r.gF);return{gF:-r.gJ/l,gJ:r.gF/l,dJ:0}}else if(Z(a,n)<1){var l=Qe(r.dJ*r.dJ+r.gF*r.gF);return{gF:r.dJ/l,gJ:0,dJ:-r.gF/l}}else{var l=Qe(r.gF*r.gF+r.gJ*r.gJ);return{gF:-r.gJ/l,gJ:r.gF/l,dJ:0}}},No=function(e){var r=$f(e),n=r,a=n,i=e,l=i,u={gF:l.gJ*a.dJ-l.dJ*a.gJ,gJ:l.dJ*a.gF-l.gF*a.dJ,dJ:l.gF*a.gJ-l.gJ*a.gF};return k(r,u)},Zr=function(e){var r=e;return r},vr=function(e){return e},sf=s(function(e,r){var n=No(e),a=n.a,i=n.b;return vr({c9:r,dH:a,dI:i,dK:e})}),ff=function(e){var r=c(ja,e.a5,e.dX),n=Zr(e.eY),a=c(Eo,r,n),i=t(vf,r,n,a);if(i.$){var f=kn(r);if(f.$){var p=No(e.eY),g=p.a,m=p.b;return vr({c9:e.dX,dH:m,dI:e.eY,dK:g})}else{var d=f.a;return c(sf,d,e.dX)}}else{var l=i.a,u=l.a,v=l.b,$=l.c;return vr({c9:e.dX,dH:$,dI:v,dK:u})}},Xe={gF:0,gJ:0,dJ:0},mf=function(e){return{$:0,a:e}},_e=function(e){var r=e;return Y(r)},pa=function(e){var r=e;return .5*r},df=Mu,pf=function(e){var r=e;return df(r)},gf=function(e){var r=pa(_e(e.eZ)),n=pf(r);return{dm:mf(n),dF:e.dF}},Cr=function(e){return e},Uc=Cr({gF:0,gJ:1,dJ:0}),bf=function(e){var r=e.a5,n=e.dX,a=e.eY;return gf({eZ:Yr(40),dF:ff({dX:da(n),a5:da(r),eY:c(Ue,Uc,c(af,Xe,da(a)))})})},Oc=function(e){return bf({dX:{gF:c(Vr,"camera x",e),gJ:c(Vr,"camera y",e),dJ:c(Vr,"camera z",e)},a5:{gF:0,gJ:0,dJ:0},eY:{gF:0,gJ:1,dJ:0}})},hf=function(e){var r=e.gF,n=e.gJ;return{cr:2/Qe(3)*r,ct:-1/Qe(3)*r+n}},cr=function(e){return e},_f=x(function(e,r,n){return{gF:e,gJ:r,dJ:n}}),oa=function(e){return e},ga=function(e){var r=e;return r},wf=s(function(e,r){var n=e,a=r;return a.gF*n.gF+a.gJ*n.gJ+a.dJ*n.dJ}),Ho=function(e){var r=e;return r.fo},re=s(function(e,r){var n=r;return e*n}),Go=function(e){var r=e;return r.c9},yf=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=n.f3,v=u;return(a.gF-l.gF)*v.gF+(a.gJ-l.gJ)*v.gJ+(a.dJ-l.dJ)*v.dJ}),xf=x(function(e,r,n){var a=e,i=r,l=n;return{gF:l.gF+i*a.gF,gJ:l.gJ+i*a.gJ,dJ:l.dJ+i*a.dJ}}),Sf=s(function(e,r){var n=Ho(r),a=e,i=a.f3,l=c(wf,i,n);if(l){var u=Go(r),v=c(yf,e,u),$=c(re,-1/l,v);return te(t(xf,n,$,u))}else return q}),Cf=s(function(e,r){return{gF:e,gJ:r}}),Qi=s(function(e,r){var n=e,a=r;return n*a}),Pf=function(e){var r=e;return r},Ki=function(e){var r=e;return Pf(r.e5)},Lf=function(e){var r=e;return r.a_},qc=s(function(e,r){var n=r;return n/e}),Hr=function(e){var r=e;return r.c9},It=function(e){var r=e;return Hr(r)},Ut=function(e){var r=e;return-r},Yc=Cr({gF:0,gJ:0,dJ:-1}),zf=s(function(e,r){var n=e,a=r;return a/n}),kf=s(function(e,r){var n=e,a=r,i=n.dK,l=i,u=n.dI,v=u,$=n.dH,f=$;return{gF:f.gF*a.gF+v.gF*a.gJ+l.gF*a.dJ,gJ:f.gJ*a.gF+v.gJ*a.gJ+l.gJ*a.dJ,dJ:f.dJ*a.gF+v.dJ*a.gJ+l.dJ*a.dJ}}),Er=s(function(e,r){return{fo:r,c9:e}}),pr=function(e){var r=e;return{gF:-r.gF,gJ:-r.gJ,dJ:-r.dJ}},Tr=function(e){var r=e;return r.dK},Ot=function(e){var r=e;return pr(Tr(r))},Tf=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=n.dH,v=u;return(a.gF-l.gF)*v.gF+(a.gJ-l.gJ)*v.gJ}),Wo=x(function(e,r,n){var a=e,i=r,l=n;return{gF:a,gJ:i,dJ:l}}),Mf=R(function(e,r,n,a){var i=e,l=r,u=n,v=a,$=i.c9,f=$,d=i.dK,p=d,g=i.dI,m=g,_=i.dH,h=_;return{gF:f.gF+l*h.gF+u*m.gF+v*p.gF,gJ:f.gJ+l*h.gJ+u*m.gJ+v*p.gJ,dJ:f.dJ+l*h.dJ+u*m.dJ+v*p.dJ}}),Ff=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=n.dI,v=u;return(a.gF-l.gF)*v.gF+(a.gJ-l.gJ)*v.gJ}),Df=x(function(e,r,n){var a=e,i=c(Ff,Ki(r),n),l=c(Tf,Ki(r),n),u=a.dF,v=u,$=Lf(r);$.a;var f=$.b,d=a.dm;if(d.$){var _=d.a,h=c(zf,f,_),y=z(Mf,v,c(Qi,h,l),c(Qi,h,i),He);return c(Er,y,Ot(a.dF))}else{var p=d.a,g=Ut(c(qc,p,c(re,.5,f))),m=c(kf,v,c(Ue,Yc,kn(t(Wo,l,i,g))));return c(Er,It(a.dF),m)}}),br=ku,Pr=Tu,qt=function(e){var r=e;return{gF:br(r),gJ:Pr(r)}},Jf=function(e){var r=e;return{gF:-r.gJ,gJ:r.gF}},Af=function(e){return e},Bf=s(function(e,r){return Af({c9:r,dH:e,dI:Jf(e)})}),jf=s(function(e,r){return c(Bf,qt(e),r)}),Vf=x(function(e,r,n){var a=e.a,i=e.b;return{e5:c(jf,r,n),a_:k(_e(a),_e(i))}}),Kr=function(e){var r=e;return r.gF},Rf=s(function(e,r){var n=e,a=r;return{gF:n,gJ:a}}),en=function(e){var r=e;return r.gJ},rn=function(e){var r=e;return r.dJ},Ef=R(function(e,r,n,a){var i=n.gF,l=n.gJ,u=function(f){return t(_f,ga(Kr(f)),ga(en(f)),ga(rn(f)))},v=t(Vf,k(oa(r.gD),oa(r.fF)),Yr(0),c(Cf,0,0)),$=c(Rf,oa(i),oa(l));return c(Pe,u,c(Sf,a,t(Df,e,v,$)))}),mn=s(function(e,r){var n=e,a=r;return{gF:a.gF+n.gF,gJ:a.gJ+n.gJ,dJ:a.dJ+n.dJ}}),Nf=s(function(e,r){return{f3:e,c9:r}}),Hf=s(function(e,r){var n=r;return c(Nf,n.f3,c(mn,e,n.c9))}),Gf=s(function(e,r){return{f3:r,c9:e}}),Zc=Cr({gF:0,gJ:0,dJ:1}),Xa=Zc,Wf=c(Gf,Xe,Xa),If=R(function(e,r,n,a){return z(Ef,r,n,a,c(Hf,t(Wo,cr(0),cr(0),cr(e)),Wf))}),Uf=If(0),Of=s(function(e,r){var n=t(Uf,Oc(e),e.bF,e.ci);if(n.$===1)return r;var a=n.a;return X(r,{a9:hf({gF:a.gF,gJ:a.gJ})})}),qf=s(function(e,r){return c(K1,e,c(Z1,e,c(Of,e,r)))}),Yf=s(function(e,r){var n=r;return X(n,{n:c(T,n.r,n.n),r:e})}),Zf=function(e){var r=e,n=r.F;if(n.b){var a=n.a,i=n.b;return te({F:i,n:c(T,r.r,r.n),r:a})}else return q},Xf=function(e){var r=e,n=r.n;if(n.b){var a=n.a,i=n.b;return te({F:c(T,r.r,r.F),n:i,r:a})}else return q},Qf=function(e){var r=e,n=r.F;if(n.b){var a=n.a,i=n.b;return X(r,{F:i,n:c(T,a,r.n)})}else return X(r,{F:De(r.n),n:L})},Kf=function(e){var r=e,n=r.n;if(n.b){var a=n.a,i=n.b;return X(r,{n:i,r:a})}else{var l=r.F;if(l.b){var a=l.a,i=l.b;return X(r,{F:i,r:a})}else return r}},em=s(function(e,r){return X(r,{e7:e})}),rm=s(function(e,r){return X(r,{bB:e})}),nm=x(function(e,r,n){switch(r.$){case 0:var a=r.a;return c(Ba,rm(a),n);case 1:var i=r.a;return X(n,{aB:i});case 2:return c(Ba,em(n.aB),n);case 3:return X(n,{l:c(Ue,n.l,Xf(n.l))});case 4:return X(n,{l:c(Ue,n.l,Zf(n.l))});case 5:return X(n,{l:c(Yf,Hc,n.l)});case 6:return X(n,{l:Kf(n.l)});default:return X(n,{l:Qf(n.l)})}}),Vn=function(e){var r=e;return r.r},dn=s(function(e,r){return{$:0,a:e,b:r}}),am=c(dn,t(o,.001462,466e-6,.013866),b([t(o,.002267,.00127,.01857),t(o,.003299,.002249,.024239),t(o,.004547,.003392,.030909),t(o,.006006,.004692,.038558),t(o,.007676,.006136,.046836),t(o,.009561,.007713,.055143),t(o,.011663,.009417,.06346),t(o,.013995,.011225,.071862),t(o,.016561,.013136,.080282),t(o,.019373,.015133,.088767),t(o,.022447,.017199,.097327),t(o,.025793,.019331,.10593),t(o,.029432,.021503,.114621),t(o,.033385,.023702,.123397),t(o,.037668,.025921,.132232),t(o,.042253,.028139,.141141),t(o,.046915,.030324,.150164),t(o,.051644,.032474,.159254),t(o,.056449,.034569,.168414),t(o,.06134,.03659,.177642),t(o,.066331,.038504,.186962),t(o,.071429,.040294,.196354),t(o,.076637,.041905,.205799),t(o,.081962,.043328,.215289),t(o,.087411,.044556,.224813),t(o,.09299,.045583,.234358),t(o,.098702,.046402,.243904),t(o,.104551,.047008,.25343),t(o,.110536,.047399,.262912),t(o,.116656,.047574,.272321),t(o,.122908,.047536,.281624),t(o,.129285,.047293,.290788),t(o,.135778,.046856,.299776),t(o,.142378,.046242,.308553),t(o,.149073,.045468,.317085),t(o,.15585,.044559,.325338),t(o,.162689,.043554,.333277),t(o,.169575,.042489,.340874),t(o,.176493,.041402,.348111),t(o,.183429,.040329,.354971),t(o,.190367,.039309,.361447),t(o,.197297,.0384,.367535),t(o,.204209,.037632,.373238),t(o,.211095,.03703,.378563),t(o,.217949,.036615,.383522),t(o,.224763,.036405,.388129),t(o,.231538,.036405,.3924),t(o,.238273,.036621,.396353),t(o,.244967,.037055,.400007),t(o,.25162,.037705,.403378),t(o,.258234,.038571,.406485),t(o,.26481,.039647,.409345),t(o,.271347,.040922,.411976),t(o,.27785,.042353,.414392),t(o,.284321,.043933,.416608),t(o,.290763,.045644,.418637),t(o,.297178,.04747,.420491),t(o,.303568,.049396,.422182),t(o,.309935,.051407,.423721),t(o,.316282,.05349,.425116),t(o,.32261,.055634,.426377),t(o,.328921,.057827,.427511),t(o,.335217,.06006,.428524),t(o,.3415,.062325,.429425),t(o,.347771,.064616,.430217),t(o,.354032,.066925,.430906),t(o,.360284,.069247,.431497),t(o,.366529,.071579,.431994),t(o,.372768,.073915,.4324),t(o,.379001,.076253,.432719),t(o,.385228,.078591,.432955),t(o,.391453,.080927,.433109),t(o,.397674,.083257,.433183),t(o,.403894,.08558,.433179),t(o,.410113,.087896,.433098),t(o,.416331,.090203,.432943),t(o,.422549,.092501,.432714),t(o,.428768,.09479,.432412),t(o,.434987,.097069,.432039),t(o,.441207,.099338,.431594),t(o,.447428,.101597,.43108),t(o,.453651,.103848,.430498),t(o,.459875,.106089,.429846),t(o,.4661,.108322,.429125),t(o,.472328,.110547,.428334),t(o,.478558,.112764,.427475),t(o,.484789,.114974,.426548),t(o,.491022,.117179,.425552),t(o,.497257,.119379,.424488),t(o,.503493,.121575,.423356),t(o,.50973,.123769,.422156),t(o,.515967,.12596,.420887),t(o,.522206,.12815,.419549),t(o,.528444,.130341,.418142),t(o,.534683,.132534,.416667),t(o,.54092,.134729,.415123),t(o,.547157,.136929,.413511),t(o,.553392,.139134,.411829),t(o,.559624,.141346,.410078),t(o,.565854,.143567,.408258),t(o,.572081,.145797,.406369),t(o,.578304,.148039,.404411),t(o,.584521,.150294,.402385),t(o,.590734,.152563,.40029),t(o,.59694,.154848,.398125),t(o,.603139,.157151,.395891),t(o,.60933,.159474,.393589),t(o,.615513,.161817,.391219),t(o,.621685,.164184,.388781),t(o,.627847,.166575,.386276),t(o,.633998,.168992,.383704),t(o,.640135,.171438,.381065),t(o,.64626,.173914,.378359),t(o,.652369,.176421,.375586),t(o,.658463,.178962,.372748),t(o,.66454,.181539,.369846),t(o,.670599,.184153,.366879),t(o,.676638,.186807,.363849),t(o,.682656,.189501,.360757),t(o,.688653,.192239,.357603),t(o,.694627,.195021,.354388),t(o,.700576,.197851,.351113),t(o,.7065,.200728,.347777),t(o,.712396,.203656,.344383),t(o,.718264,.206636,.340931),t(o,.724103,.20967,.337424),t(o,.729909,.212759,.333861),t(o,.735683,.215906,.330245),t(o,.741423,.219112,.326576),t(o,.747127,.222378,.322856),t(o,.752794,.225706,.319085),t(o,.758422,.229097,.315266),t(o,.76401,.232554,.311399),t(o,.769556,.236077,.307485),t(o,.775059,.239667,.303526),t(o,.780517,.243327,.299523),t(o,.785929,.247056,.295477),t(o,.791293,.250856,.29139),t(o,.796607,.254728,.287264),t(o,.801871,.258674,.283099),t(o,.807082,.262692,.278898),t(o,.812239,.266786,.274661),t(o,.817341,.270954,.27039),t(o,.822386,.275197,.266085),t(o,.827372,.279517,.26175),t(o,.832299,.283913,.257383),t(o,.837165,.288385,.252988),t(o,.841969,.292933,.248564),t(o,.846709,.297559,.244113),t(o,.851384,.30226,.239636),t(o,.855992,.307038,.235133),t(o,.860533,.311892,.230606),t(o,.865006,.316822,.226055),t(o,.869409,.321827,.221482),t(o,.873741,.326906,.216886),t(o,.878001,.33206,.212268),t(o,.882188,.337287,.207628),t(o,.886302,.342586,.202968),t(o,.890341,.347957,.198286),t(o,.894305,.353399,.193584),t(o,.898192,.358911,.18886),t(o,.902003,.364492,.184116),t(o,.905735,.37014,.17935),t(o,.90939,.375856,.174563),t(o,.912966,.381636,.169755),t(o,.916462,.387481,.164924),t(o,.919879,.393389,.16007),t(o,.923215,.399359,.155193),t(o,.92647,.405389,.150292),t(o,.929644,.411479,.145367),t(o,.932737,.417627,.140417),t(o,.935747,.423831,.13544),t(o,.938675,.430091,.130438),t(o,.941521,.436405,.125409),t(o,.944285,.442772,.120354),t(o,.946965,.449191,.115272),t(o,.949562,.45566,.110164),t(o,.952075,.462178,.105031),t(o,.954506,.468744,.099874),t(o,.956852,.475356,.094695),t(o,.959114,.482014,.089499),t(o,.961293,.488716,.084289),t(o,.963387,.495462,.079073),t(o,.965397,.502249,.073859),t(o,.967322,.509078,.068659),t(o,.969163,.515946,.063488),t(o,.970919,.522853,.058367),t(o,.97259,.529798,.053324),t(o,.974176,.53678,.048392),t(o,.975677,.543798,.043618),t(o,.977092,.55085,.03905),t(o,.978422,.557937,.034931),t(o,.979666,.565057,.031409),t(o,.980824,.572209,.028508),t(o,.981895,.579392,.02625),t(o,.982881,.586606,.024661),t(o,.983779,.593849,.02377),t(o,.984591,.601122,.023606),t(o,.985315,.608422,.024202),t(o,.985952,.61575,.025592),t(o,.986502,.623105,.027814),t(o,.986964,.630485,.030908),t(o,.987337,.63789,.034916),t(o,.987622,.64532,.039886),t(o,.987819,.652773,.045581),t(o,.987926,.66025,.05175),t(o,.987945,.667748,.058329),t(o,.987874,.675267,.065257),t(o,.987714,.682807,.072489),t(o,.987464,.690366,.07999),t(o,.987124,.697944,.087731),t(o,.986694,.70554,.095694),t(o,.986175,.713153,.103863),t(o,.985566,.720782,.112229),t(o,.984865,.728427,.120785),t(o,.984075,.736087,.129527),t(o,.983196,.743758,.138453),t(o,.982228,.751442,.147565),t(o,.981173,.759135,.156863),t(o,.980032,.766837,.166353),t(o,.978806,.774545,.176037),t(o,.977497,.782258,.185923),t(o,.976108,.789974,.196018),t(o,.974638,.797692,.206332),t(o,.973088,.805409,.216877),t(o,.971468,.813122,.227658),t(o,.969783,.820825,.238686),t(o,.968041,.828515,.249972),t(o,.966243,.836191,.261534),t(o,.964394,.843848,.273391),t(o,.962517,.851476,.285546),t(o,.960626,.859069,.29801),t(o,.95872,.866624,.31082),t(o,.956834,.874129,.323974),t(o,.954997,.881569,.337475),t(o,.953215,.888942,.351369),t(o,.951546,.896226,.365627),t(o,.950018,.903409,.380271),t(o,.948683,.910473,.395289),t(o,.947594,.917399,.410665),t(o,.946809,.924168,.426373),t(o,.946392,.930761,.442367),t(o,.946403,.937159,.458592),t(o,.946903,.943348,.47497),t(o,.947937,.949318,.491426),t(o,.949545,.955063,.50786),t(o,.95174,.960587,.524203),t(o,.954529,.965896,.540361),t(o,.957896,.971003,.556275),t(o,.961812,.975924,.571925),t(o,.966249,.980678,.587206),t(o,.971162,.985282,.602154),t(o,.976511,.989753,.61676),t(o,.982257,.994109,.631017),t(o,.988362,.998364,.644924)])),tm=c(dn,t(o,.001462,466e-6,.013866),b([t(o,.002258,.001295,.018331),t(o,.003279,.002305,.023708),t(o,.004512,.00349,.029965),t(o,.007588,.006356,.044973),t(o,.009426,.008022,.052844),t(o,.011465,.009828,.06075),t(o,.013708,.011771,.068667),t(o,.016156,.01384,.076603),t(o,.018815,.016026,.084584),t(o,.021692,.01832,.09261),t(o,.024792,.020715,.100676),t(o,.028123,.023201,.108787),t(o,.031696,.025765,.116965),t(o,.03552,.028397,.125209),t(o,.039608,.03109,.133515),t(o,.04383,.03383,.141886),t(o,.048062,.036607,.150327),t(o,.05232,.039407,.158841),t(o,.056615,.04216,.167446),t(o,.060949,.044794,.176129),t(o,.06533,.047318,.184892),t(o,.069764,.049726,.193735),t(o,.074257,.052017,.20266),t(o,.078815,.054184,.211667),t(o,.083446,.056225,.220755),t(o,.088155,.058133,.229922),t(o,.092949,.059904,.239164),t(o,.097833,.061531,.248477),t(o,.102815,.06301,.257854),t(o,.107899,.064335,.267289),t(o,.113094,.065492,.276784),t(o,.118405,.066479,.286321),t(o,.123833,.067295,.295879),t(o,.12938,.067935,.305443),t(o,.135053,.068391,.315),t(o,.140858,.068654,.324538),t(o,.146785,.068738,.334011),t(o,.152839,.068637,.343404),t(o,.159018,.068354,.352688),t(o,.165308,.067911,.361816),t(o,.171713,.067305,.370771),t(o,.178212,.066576,.379497),t(o,.184801,.065732,.387973),t(o,.19146,.064818,.396152),t(o,.198177,.063862,.404009),t(o,.204935,.062907,.411514),t(o,.211718,.061992,.418647),t(o,.218512,.061158,.425392),t(o,.225302,.060445,.431742),t(o,.232077,.059889,.437695),t(o,.238826,.059517,.443256),t(o,.245543,.059352,.448436),t(o,.25222,.059415,.453248),t(o,.258857,.059706,.45771),t(o,.265447,.060237,.46184),t(o,.271994,.060994,.46566),t(o,.278493,.061978,.46919),t(o,.284951,.063168,.472451),t(o,.291366,.064553,.475462),t(o,.29774,.066117,.478243),t(o,.304081,.067835,.480812),t(o,.310382,.069702,.483186),t(o,.316654,.07169,.48538),t(o,.322899,.073782,.487408),t(o,.329114,.075972,.489287),t(o,.335308,.078236,.491024),t(o,.341482,.080564,.492631),t(o,.347636,.082946,.494121),t(o,.353773,.085373,.495501),t(o,.359898,.087831,.496778),t(o,.366012,.090314,.49796),t(o,.372116,.092816,.499053),t(o,.378211,.095332,.500067),t(o,.384299,.097855,.501002),t(o,.390384,.100379,.501864),t(o,.396467,.102902,.502658),t(o,.402548,.10542,.503386),t(o,.408629,.10793,.504052),t(o,.414709,.110431,.504662),t(o,.420791,.11292,.505215),t(o,.426877,.115395,.505714),t(o,.432967,.117855,.50616),t(o,.439062,.120298,.506555),t(o,.445163,.122724,.506901),t(o,.451271,.125132,.507198),t(o,.457386,.127522,.507448),t(o,.463508,.129893,.507652),t(o,.46964,.132245,.507809),t(o,.47578,.134577,.507921),t(o,.481929,.136891,.507989),t(o,.488088,.139186,.508011),t(o,.494258,.141462,.507988),t(o,.500438,.143719,.50792),t(o,.506629,.145958,.507806),t(o,.512831,.148179,.507648),t(o,.519045,.150383,.507443),t(o,.52527,.152569,.507192),t(o,.531507,.154739,.506895),t(o,.537755,.156894,.506551),t(o,.544015,.159033,.506159),t(o,.550287,.161158,.505719),t(o,.556571,.163269,.50523),t(o,.562866,.165368,.504692),t(o,.569172,.167454,.504105),t(o,.57549,.16953,.503466),t(o,.581819,.171596,.502777),t(o,.588158,.173652,.502035),t(o,.594508,.175701,.501241),t(o,.600868,.177743,.500394),t(o,.607238,.179779,.499492),t(o,.613617,.181811,.498536),t(o,.620005,.18384,.497524),t(o,.626401,.185867,.496456),t(o,.632805,.187893,.495332),t(o,.639216,.189921,.49415),t(o,.645633,.191952,.49291),t(o,.652056,.193986,.491611),t(o,.658483,.196027,.490253),t(o,.664915,.198075,.488836),t(o,.671349,.200133,.487358),t(o,.677786,.202203,.485819),t(o,.684224,.204286,.484219),t(o,.690661,.206384,.482558),t(o,.697098,.208501,.480835),t(o,.703532,.210638,.479049),t(o,.709962,.212797,.477201),t(o,.716387,.214982,.47529),t(o,.722805,.217194,.473316),t(o,.729216,.219437,.471279),t(o,.735616,.221713,.46918),t(o,.742004,.224025,.467018),t(o,.748378,.226377,.464794),t(o,.754737,.228772,.462509),t(o,.761077,.231214,.460162),t(o,.767398,.233705,.457755),t(o,.773695,.236249,.455289),t(o,.779968,.238851,.452765),t(o,.786212,.241514,.450184),t(o,.792427,.244242,.447543),t(o,.798608,.24704,.444848),t(o,.804752,.249911,.442102),t(o,.810855,.252861,.439305),t(o,.816914,.255895,.436461),t(o,.822926,.259016,.433573),t(o,.828886,.262229,.430644),t(o,.834791,.26554,.427671),t(o,.840636,.268953,.424666),t(o,.846416,.272473,.421631),t(o,.852126,.276106,.418573),t(o,.857763,.279857,.415496),t(o,.86332,.283729,.412403),t(o,.868793,.287728,.409303),t(o,.874176,.291859,.406205),t(o,.879464,.296125,.403118),t(o,.884651,.30053,.400047),t(o,.889731,.305079,.397002),t(o,.8947,.309773,.393995),t(o,.899552,.314616,.391037),t(o,.904281,.31961,.388137),t(o,.908884,.324755,.385308),t(o,.913354,.330052,.382563),t(o,.917689,.3355,.379915),t(o,.921884,.341098,.377376),t(o,.925937,.346844,.374959),t(o,.929845,.352734,.372677),t(o,.933606,.358764,.370541),t(o,.937221,.364929,.368567),t(o,.940687,.371224,.366762),t(o,.944006,.377643,.365136),t(o,.94718,.384178,.363701),t(o,.95021,.39082,.362468),t(o,.953099,.397563,.361438),t(o,.955849,.4044,.360619),t(o,.958464,.411324,.360014),t(o,.960949,.418323,.35963),t(o,.96331,.42539,.359469),t(o,.965549,.432519,.359529),t(o,.967671,.439703,.35981),t(o,.96968,.446936,.360311),t(o,.971582,.45421,.36103),t(o,.973381,.46152,.361965),t(o,.975082,.468861,.363111),t(o,.97669,.476226,.364466),t(o,.97821,.483612,.366025),t(o,.979645,.491014,.367783),t(o,.981,.498428,.369734),t(o,.982279,.505851,.371874),t(o,.983485,.51328,.374198),t(o,.984622,.520713,.376698),t(o,.985693,.528148,.379371),t(o,.9867,.535582,.38221),t(o,.987646,.543015,.38521),t(o,.988533,.550446,.388365),t(o,.989363,.557873,.391671),t(o,.990138,.565296,.395122),t(o,.990871,.572706,.398714),t(o,.991558,.580107,.402441),t(o,.992196,.587502,.406299),t(o,.992785,.594891,.410283),t(o,.993326,.602275,.41439),t(o,.993834,.609644,.418613),t(o,.994309,.616999,.42295),t(o,.994738,.62435,.427397),t(o,.995122,.631696,.431951),t(o,.99548,.639027,.436607),t(o,.99581,.646344,.441361),t(o,.996096,.653659,.446213),t(o,.996341,.660969,.45116),t(o,.99658,.668256,.456192),t(o,.996775,.675541,.461314),t(o,.996925,.682828,.466526),t(o,.997077,.690088,.471811),t(o,.997186,.697349,.477182),t(o,.997254,.704611,.482635),t(o,.997325,.711848,.488154),t(o,.997351,.719089,.493755),t(o,.997351,.726324,.499428),t(o,.997341,.733545,.505167),t(o,.997285,.740772,.510983),t(o,.997228,.747981,.516859),t(o,.997138,.75519,.522806),t(o,.997019,.762398,.528821),t(o,.996898,.769591,.534892),t(o,.996727,.776795,.541039),t(o,.996571,.783977,.547233),t(o,.996369,.791167,.553499),t(o,.996162,.798348,.55982),t(o,.995932,.805527,.566202),t(o,.99568,.812706,.572645),t(o,.995424,.819875,.57914),t(o,.995131,.827052,.585701),t(o,.994851,.834213,.592307),t(o,.994524,.841387,.598983),t(o,.994222,.84854,.605696),t(o,.993866,.855711,.612482),t(o,.993545,.862859,.619299),t(o,.99317,.870024,.626189),t(o,.992831,.877168,.633109),t(o,.99244,.88433,.640099),t(o,.992089,.89147,.647116),t(o,.991688,.898627,.654202),t(o,.991332,.905763,.661309),t(o,.99093,.912915,.668481),t(o,.99057,.920049,.675675),t(o,.990175,.927196,.682926),t(o,.989815,.934329,.690198),t(o,.989434,.94147,.697519),t(o,.989077,.948604,.704863),t(o,.988717,.955742,.712242),t(o,.988367,.962878,.719649),t(o,.988033,.970012,.727077),t(o,.987691,.977154,.734536),t(o,.987387,.984288,.742002),t(o,.987053,.991438,.749504)])),om=c(dn,t(o,.2081,.1663,.5292),b([t(o,.2091,.1721,.5411),t(o,.2101,.1779,.553),t(o,.2109,.1837,.565),t(o,.2116,.1895,.5771),t(o,.2121,.1954,.5892),t(o,.2124,.2013,.6013),t(o,.2125,.2072,.6135),t(o,.2123,.2132,.6258),t(o,.2118,.2192,.6381),t(o,.2111,.2253,.6505),t(o,.2099,.2315,.6629),t(o,.2084,.2377,.6753),t(o,.2063,.244,.6878),t(o,.2038,.2503,.7003),t(o,.2006,.2568,.7129),t(o,.1968,.2632,.7255),t(o,.1921,.2698,.7381),t(o,.1867,.2764,.7507),t(o,.1802,.2832,.7634),t(o,.1728,.2902,.7762),t(o,.1641,.2975,.789),t(o,.1541,.3052,.8017),t(o,.1427,.3132,.8145),t(o,.1295,.3217,.8269),t(o,.1147,.3306,.8387),t(o,.0986,.3397,.8495),t(o,.0816,.3486,.8588),t(o,.0646,.3572,.8664),t(o,.0482,.3651,.8722),t(o,.0329,.3724,.8765),t(o,.0213,.3792,.8796),t(o,.0136,.3853,.8815),t(o,.0086,.3911,.8827),t(o,.006,.3965,.8833),t(o,.0051,.4017,.8834),t(o,.0054,.4066,.8831),t(o,.0067,.4113,.8825),t(o,.0089,.4159,.8816),t(o,.0116,.4203,.8805),t(o,.0148,.4246,.8793),t(o,.0184,.4288,.8779),t(o,.0223,.4329,.8763),t(o,.0264,.437,.8747),t(o,.0306,.441,.8729),t(o,.0349,.4449,.8711),t(o,.0394,.4488,.8692),t(o,.0437,.4526,.8672),t(o,.0477,.4564,.8652),t(o,.0514,.4602,.8632),t(o,.0549,.464,.8611),t(o,.0582,.4677,.8589),t(o,.0612,.4714,.8568),t(o,.064,.4751,.8546),t(o,.0666,.4788,.8525),t(o,.0689,.4825,.8503),t(o,.071,.4862,.8481),t(o,.0729,.4899,.846),t(o,.0746,.4937,.8439),t(o,.0761,.4974,.8418),t(o,.0773,.5012,.8398),t(o,.0782,.5051,.8378),t(o,.0789,.5089,.8359),t(o,.0794,.5129,.8341),t(o,.0795,.5169,.8324),t(o,.0793,.521,.8308),t(o,.0788,.5251,.8293),t(o,.0778,.5295,.828),t(o,.0764,.5339,.827),t(o,.0746,.5384,.8261),t(o,.0724,.5431,.8253),t(o,.0698,.5479,.8247),t(o,.0668,.5527,.8243),t(o,.0636,.5577,.8239),t(o,.06,.5627,.8237),t(o,.0562,.5677,.8234),t(o,.0523,.5727,.8231),t(o,.0484,.5777,.8228),t(o,.0445,.5826,.8223),t(o,.0408,.5874,.8217),t(o,.0372,.5922,.8209),t(o,.0342,.5968,.8198),t(o,.0317,.6012,.8186),t(o,.0296,.6055,.8171),t(o,.0279,.6097,.8154),t(o,.0265,.6137,.8135),t(o,.0255,.6176,.8114),t(o,.0248,.6214,.8091),t(o,.0243,.625,.8066),t(o,.0239,.6285,.8039),t(o,.0237,.6319,.801),t(o,.0235,.6352,.798),t(o,.0233,.6384,.7948),t(o,.0231,.6415,.7916),t(o,.023,.6445,.7881),t(o,.0229,.6474,.7846),t(o,.0227,.6503,.781),t(o,.0227,.6531,.7773),t(o,.0232,.6558,.7735),t(o,.0238,.6585,.7696),t(o,.0246,.6611,.7656),t(o,.0263,.6637,.7615),t(o,.0282,.6663,.7574),t(o,.0306,.6688,.7532),t(o,.0338,.6712,.749),t(o,.0373,.6737,.7446),t(o,.0418,.6761,.7402),t(o,.0467,.6784,.7358),t(o,.0516,.6808,.7313),t(o,.0574,.6831,.7267),t(o,.0629,.6854,.7221),t(o,.0692,.6877,.7173),t(o,.0755,.6899,.7126),t(o,.082,.6921,.7078),t(o,.0889,.6943,.7029),t(o,.0956,.6965,.6979),t(o,.1031,.6986,.6929),t(o,.1104,.7007,.6878),t(o,.118,.7028,.6827),t(o,.1258,.7049,.6775),t(o,.1335,.7069,.6723),t(o,.1418,.7089,.6669),t(o,.1499,.7109,.6616),t(o,.1585,.7129,.6561),t(o,.1671,.7148,.6507),t(o,.1758,.7168,.6451),t(o,.1849,.7186,.6395),t(o,.1938,.7205,.6338),t(o,.2033,.7223,.6281),t(o,.2128,.7241,.6223),t(o,.2224,.7259,.6165),t(o,.2324,.7275,.6107),t(o,.2423,.7292,.6048),t(o,.2527,.7308,.5988),t(o,.2631,.7324,.5929),t(o,.2735,.7339,.5869),t(o,.2845,.7354,.5809),t(o,.2953,.7368,.5749),t(o,.3064,.7381,.5689),t(o,.3177,.7394,.563),t(o,.3289,.7406,.557),t(o,.3405,.7417,.5512),t(o,.352,.7428,.5453),t(o,.3635,.7438,.5396),t(o,.3753,.7446,.5339),t(o,.3869,.7454,.5283),t(o,.3986,.7461,.5229),t(o,.4103,.7467,.5175),t(o,.4218,.7473,.5123),t(o,.4334,.7477,.5072),t(o,.4447,.7482,.5021),t(o,.4561,.7485,.4972),t(o,.4672,.7487,.4924),t(o,.4783,.7489,.4877),t(o,.4892,.7491,.4831),t(o,.5,.7491,.4786),t(o,.5106,.7492,.4741),t(o,.5212,.7492,.4698),t(o,.5315,.7491,.4655),t(o,.5418,.749,.4613),t(o,.5519,.7489,.4571),t(o,.5619,.7487,.4531),t(o,.5718,.7485,.449),t(o,.5816,.7482,.4451),t(o,.5913,.7479,.4412),t(o,.6009,.7476,.4374),t(o,.6103,.7473,.4335),t(o,.6197,.7469,.4298),t(o,.629,.7465,.4261),t(o,.6382,.746,.4224),t(o,.6473,.7456,.4188),t(o,.6564,.7451,.4152),t(o,.6653,.7446,.4116),t(o,.6742,.7441,.4081),t(o,.683,.7435,.4046),t(o,.6918,.743,.4011),t(o,.7004,.7424,.3976),t(o,.7091,.7418,.3942),t(o,.7176,.7412,.3908),t(o,.7261,.7405,.3874),t(o,.7346,.7399,.384),t(o,.743,.7392,.3806),t(o,.7513,.7385,.3773),t(o,.7596,.7378,.3739),t(o,.7679,.7372,.3706),t(o,.7761,.7364,.3673),t(o,.7843,.7357,.3639),t(o,.7924,.735,.3606),t(o,.8005,.7343,.3573),t(o,.8085,.7336,.3539),t(o,.8166,.7329,.3506),t(o,.8246,.7322,.3472),t(o,.8325,.7315,.3438),t(o,.8405,.7308,.3404),t(o,.8484,.7301,.337),t(o,.8563,.7294,.3336),t(o,.8642,.7288,.33),t(o,.872,.7282,.3265),t(o,.8798,.7276,.3229),t(o,.8877,.7271,.3193),t(o,.8954,.7266,.3156),t(o,.9032,.7262,.3117),t(o,.911,.7259,.3078),t(o,.9187,.7256,.3038),t(o,.9264,.7256,.2996),t(o,.9341,.7256,.2953),t(o,.9417,.7259,.2907),t(o,.9493,.7264,.2859),t(o,.9567,.7273,.2808),t(o,.9639,.7285,.2754),t(o,.9708,.7303,.2696),t(o,.9773,.7326,.2634),t(o,.9831,.7355,.257),t(o,.9882,.739,.2504),t(o,.9922,.7431,.2437),t(o,.9952,.7476,.2373),t(o,.9973,.7524,.231),t(o,.9986,.7573,.2251),t(o,.9991,.7624,.2195),t(o,.999,.7675,.2141),t(o,.9985,.7726,.209),t(o,.9976,.7778,.2042),t(o,.9964,.7829,.1995),t(o,.995,.788,.1949),t(o,.9933,.7931,.1905),t(o,.9914,.7981,.1863),t(o,.9894,.8032,.1821),t(o,.9873,.8083,.178),t(o,.9851,.8133,.174),t(o,.9828,.8184,.17),t(o,.9805,.8235,.1661),t(o,.9782,.8286,.1622),t(o,.9759,.8337,.1583),t(o,.9736,.8389,.1544),t(o,.9713,.8441,.1505),t(o,.9692,.8494,.1465),t(o,.9672,.8548,.1425),t(o,.9654,.8603,.1385),t(o,.9638,.8659,.1343),t(o,.9623,.8716,.1301),t(o,.9611,.8774,.1258),t(o,.96,.8834,.1215),t(o,.9593,.8895,.1171),t(o,.9588,.8958,.1126),t(o,.9586,.9022,.1082),t(o,.9587,.9088,.1036),t(o,.9591,.9155,.099),t(o,.9599,.9225,.0944),t(o,.961,.9296,.0897),t(o,.9624,.9368,.085),t(o,.9641,.9443,.0802),t(o,.9662,.9518,.0753),t(o,.9685,.9595,.0703),t(o,.971,.9673,.0651),t(o,.9736,.9752,.0597),t(o,.9763,.9831,.0538)])),im=c(dn,t(o,.050383,.029803,.527975),b([t(o,.063536,.028426,.533124),t(o,.075353,.027206,.538007),t(o,.086222,.026125,.542658),t(o,.096379,.025165,.547103),t(o,.10598,.024309,.551368),t(o,.115124,.023556,.555468),t(o,.123903,.022878,.559423),t(o,.132381,.022258,.56325),t(o,.140603,.021687,.566959),t(o,.148607,.021154,.570562),t(o,.156421,.020651,.574065),t(o,.16407,.020171,.577478),t(o,.171574,.019706,.580806),t(o,.17895,.019252,.584054),t(o,.186213,.018803,.587228),t(o,.193374,.018354,.59033),t(o,.200445,.017902,.593364),t(o,.207435,.017442,.596333),t(o,.21435,.016973,.599239),t(o,.221197,.016497,.602083),t(o,.227983,.016007,.604867),t(o,.234715,.015502,.607592),t(o,.241396,.014979,.610259),t(o,.248032,.014439,.612868),t(o,.254627,.013882,.615419),t(o,.261183,.013308,.617911),t(o,.267703,.012716,.620346),t(o,.274191,.012109,.622722),t(o,.280648,.011488,.625038),t(o,.287076,.010855,.627295),t(o,.293478,.010213,.62949),t(o,.299855,.009561,.631624),t(o,.30621,.008902,.633694),t(o,.312543,.008239,.6357),t(o,.318856,.007576,.63764),t(o,.32515,.006915,.639512),t(o,.331426,.006261,.641316),t(o,.337683,.005618,.643049),t(o,.343925,.004991,.64471),t(o,.35015,.004382,.646298),t(o,.356359,.003798,.64781),t(o,.362553,.003243,.649245),t(o,.368733,.002724,.650601),t(o,.374897,.002245,.651876),t(o,.381047,.001814,.653068),t(o,.387183,.001434,.654177),t(o,.393304,.001114,.655199),t(o,.399411,859e-6,.656133),t(o,.405503,678e-6,.656977),t(o,.41158,577e-6,.65773),t(o,.417642,564e-6,.65839),t(o,.423689,646e-6,.658956),t(o,.429719,831e-6,.659425),t(o,.435734,.001127,.659797),t(o,.441732,.00154,.660069),t(o,.447714,.00208,.66024),t(o,.453677,.002755,.66031),t(o,.459623,.003574,.660277),t(o,.46555,.004545,.660139),t(o,.471457,.005678,.659897),t(o,.477344,.00698,.659549),t(o,.48321,.00846,.659095),t(o,.489055,.010127,.658534),t(o,.494877,.01199,.657865),t(o,.500678,.014055,.657088),t(o,.506454,.016333,.656202),t(o,.512206,.018833,.655209),t(o,.517933,.021563,.654109),t(o,.523633,.024532,.652901),t(o,.529306,.027747,.651586),t(o,.534952,.031217,.650165),t(o,.54057,.03495,.64864),t(o,.546157,.038954,.64701),t(o,.551715,.043136,.645277),t(o,.557243,.047331,.643443),t(o,.562738,.051545,.641509),t(o,.568201,.055778,.639477),t(o,.573632,.060028,.637349),t(o,.579029,.064296,.635126),t(o,.584391,.068579,.632812),t(o,.589719,.072878,.630408),t(o,.595011,.07719,.627917),t(o,.600266,.081516,.625342),t(o,.605485,.085854,.622686),t(o,.610667,.090204,.619951),t(o,.615812,.094564,.61714),t(o,.620919,.098934,.614257),t(o,.625987,.103312,.611305),t(o,.631017,.107699,.608287),t(o,.636008,.112092,.605205),t(o,.640959,.116492,.602065),t(o,.645872,.120898,.598867),t(o,.650746,.125309,.595617),t(o,.65558,.129725,.592317),t(o,.660374,.134144,.588971),t(o,.665129,.138566,.585582),t(o,.669845,.142992,.582154),t(o,.674522,.147419,.578688),t(o,.67916,.151848,.575189),t(o,.683758,.156278,.57166),t(o,.688318,.160709,.568103),t(o,.69284,.165141,.564522),t(o,.697324,.169573,.560919),t(o,.701769,.174005,.557296),t(o,.706178,.178437,.553657),t(o,.710549,.182868,.550004),t(o,.714883,.187299,.546338),t(o,.719181,.191729,.542663),t(o,.723444,.196158,.538981),t(o,.72767,.200586,.535293),t(o,.731862,.205013,.531601),t(o,.736019,.209439,.527908),t(o,.740143,.213864,.524216),t(o,.744232,.218288,.520524),t(o,.748289,.222711,.516834),t(o,.752312,.227133,.513149),t(o,.756304,.231555,.509468),t(o,.760264,.235976,.505794),t(o,.764193,.240396,.502126),t(o,.76809,.244817,.498465),t(o,.771958,.249237,.494813),t(o,.775796,.253658,.491171),t(o,.779604,.258078,.487539),t(o,.783383,.2625,.483918),t(o,.787133,.266922,.480307),t(o,.790855,.271345,.476706),t(o,.794549,.27577,.473117),t(o,.798216,.280197,.469538),t(o,.801855,.284626,.465971),t(o,.805467,.289057,.462415),t(o,.809052,.293491,.45887),t(o,.812612,.297928,.455338),t(o,.816144,.302368,.451816),t(o,.819651,.306812,.448306),t(o,.823132,.311261,.444806),t(o,.826588,.315714,.441316),t(o,.830018,.320172,.437836),t(o,.833422,.324635,.434366),t(o,.836801,.329105,.430905),t(o,.840155,.33358,.427455),t(o,.843484,.338062,.424013),t(o,.846788,.342551,.420579),t(o,.850066,.347048,.417153),t(o,.853319,.351553,.413734),t(o,.856547,.356066,.410322),t(o,.85975,.360588,.406917),t(o,.862927,.365119,.403519),t(o,.866078,.36966,.400126),t(o,.869203,.374212,.396738),t(o,.872303,.378774,.393355),t(o,.875376,.383347,.389976),t(o,.878423,.387932,.3866),t(o,.881443,.392529,.383229),t(o,.884436,.397139,.37986),t(o,.887402,.401762,.376494),t(o,.89034,.406398,.37313),t(o,.89325,.411048,.369768),t(o,.896131,.415712,.366407),t(o,.898984,.420392,.363047),t(o,.901807,.425087,.359688),t(o,.904601,.429797,.356329),t(o,.907365,.434524,.35297),t(o,.910098,.439268,.34961),t(o,.9128,.444029,.346251),t(o,.915471,.448807,.34289),t(o,.918109,.453603,.339529),t(o,.920714,.458417,.336166),t(o,.923287,.463251,.332801),t(o,.925825,.468103,.329435),t(o,.928329,.472975,.326067),t(o,.930798,.477867,.322697),t(o,.933232,.48278,.319325),t(o,.93563,.487712,.315952),t(o,.93799,.492667,.312575),t(o,.940313,.497642,.309197),t(o,.942598,.502639,.305816),t(o,.944844,.507658,.302433),t(o,.947051,.512699,.299049),t(o,.949217,.517763,.295662),t(o,.951344,.52285,.292275),t(o,.953428,.52796,.288883),t(o,.95547,.533093,.28549),t(o,.957469,.53825,.282096),t(o,.959424,.543431,.278701),t(o,.961336,.548636,.275305),t(o,.963203,.553865,.271909),t(o,.965024,.559118,.268513),t(o,.966798,.564396,.265118),t(o,.968526,.5697,.261721),t(o,.970205,.575028,.258325),t(o,.971835,.580382,.254931),t(o,.973416,.585761,.25154),t(o,.974947,.591165,.248151),t(o,.976428,.596595,.244767),t(o,.977856,.602051,.241387),t(o,.979233,.607532,.238013),t(o,.980556,.613039,.234646),t(o,.981826,.618572,.231287),t(o,.983041,.624131,.227937),t(o,.984199,.629718,.224595),t(o,.985301,.63533,.221265),t(o,.986345,.640969,.217948),t(o,.987332,.646633,.214648),t(o,.98826,.652325,.211364),t(o,.989128,.658043,.2081),t(o,.989935,.663787,.204859),t(o,.990681,.669558,.201642),t(o,.991365,.675355,.198453),t(o,.991985,.681179,.195295),t(o,.992541,.68703,.19217),t(o,.993032,.692907,.189084),t(o,.993456,.69881,.186041),t(o,.993814,.704741,.183043),t(o,.994103,.710698,.180097),t(o,.994324,.716681,.177208),t(o,.994474,.722691,.174381),t(o,.994553,.728728,.171622),t(o,.994561,.734791,.168938),t(o,.994495,.74088,.166335),t(o,.994355,.746995,.163821),t(o,.994141,.753137,.161404),t(o,.993851,.759304,.159092),t(o,.993482,.765499,.156891),t(o,.993033,.77172,.154808),t(o,.992505,.777967,.152855),t(o,.991897,.784239,.151042),t(o,.991209,.790537,.149377),t(o,.990439,.796859,.14787),t(o,.989587,.803205,.146529),t(o,.988648,.809579,.145357),t(o,.987621,.815978,.144363),t(o,.986509,.822401,.143557),t(o,.985314,.828846,.142945),t(o,.984031,.835315,.142528),t(o,.982653,.841812,.142303),t(o,.98119,.848329,.142279),t(o,.979644,.854866,.142453),t(o,.977995,.861432,.142808),t(o,.976265,.868016,.143351),t(o,.974443,.874622,.144061),t(o,.97253,.88125,.144923),t(o,.970533,.887896,.145919),t(o,.968443,.894564,.147014),t(o,.966271,.901249,.14818),t(o,.964021,.90795,.14937),t(o,.961681,.914672,.15052),t(o,.959276,.921407,.151566),t(o,.956808,.928152,.152409),t(o,.954287,.934908,.152921),t(o,.951726,.941671,.152925),t(o,.949151,.948435,.152178),t(o,.946602,.95519,.150328),t(o,.944152,.961916,.146861),t(o,.941896,.96859,.140956),t(o,.940015,.975158,.131326)])),cm=c(dn,t(o,.267004,.004874,.329415),b([t(o,.26851,.009605,.335427),t(o,.269944,.014625,.341379),t(o,.271305,.019942,.347269),t(o,.272594,.025563,.353093),t(o,.273809,.031497,.358853),t(o,.274952,.037752,.364543),t(o,.276022,.044167,.370164),t(o,.277018,.050344,.375715),t(o,.277941,.056324,.381191),t(o,.278791,.062145,.386592),t(o,.279566,.067836,.391917),t(o,.280267,.073417,.397163),t(o,.280894,.078907,.402329),t(o,.281446,.08432,.407414),t(o,.281924,.089666,.412415),t(o,.282327,.094955,.417331),t(o,.282656,.100196,.42216),t(o,.28291,.105393,.426902),t(o,.283091,.110553,.431554),t(o,.283197,.11568,.436115),t(o,.283229,.120777,.440584),t(o,.283187,.125848,.44496),t(o,.283072,.130895,.449241),t(o,.282884,.13592,.453427),t(o,.282623,.140926,.457517),t(o,.28229,.145912,.46151),t(o,.281887,.150881,.465405),t(o,.281412,.155834,.469201),t(o,.280868,.160771,.472899),t(o,.280255,.165693,.476498),t(o,.279574,.170599,.479997),t(o,.278826,.17549,.483397),t(o,.278012,.180367,.486697),t(o,.277134,.185228,.489898),t(o,.276194,.190074,.493001),t(o,.275191,.194905,.496005),t(o,.274128,.199721,.498911),t(o,.273006,.20452,.501721),t(o,.271828,.209303,.504434),t(o,.270595,.214069,.507052),t(o,.269308,.218818,.509577),t(o,.267968,.223549,.512008),t(o,.26658,.228262,.514349),t(o,.265145,.232956,.516599),t(o,.263663,.237631,.518762),t(o,.262138,.242286,.520837),t(o,.260571,.246922,.522828),t(o,.258965,.251537,.524736),t(o,.257322,.25613,.526563),t(o,.255645,.260703,.528312),t(o,.253935,.265254,.529983),t(o,.252194,.269783,.531579),t(o,.250425,.27429,.533103),t(o,.248629,.278775,.534556),t(o,.246811,.283237,.535941),t(o,.244972,.287675,.53726),t(o,.243113,.292092,.538516),t(o,.241237,.296485,.539709),t(o,.239346,.300855,.540844),t(o,.237441,.305202,.541921),t(o,.235526,.309527,.542944),t(o,.233603,.313828,.543914),t(o,.231674,.318106,.544834),t(o,.229739,.322361,.545706),t(o,.227802,.326594,.546532),t(o,.225863,.330805,.547314),t(o,.223925,.334994,.548053),t(o,.221989,.339161,.548752),t(o,.220057,.343307,.549413),t(o,.21813,.347432,.550038),t(o,.21621,.351535,.550627),t(o,.214298,.355619,.551184),t(o,.212395,.359683,.55171),t(o,.210503,.363727,.552206),t(o,.208623,.367752,.552675),t(o,.206756,.371758,.553117),t(o,.204903,.375746,.553533),t(o,.203063,.379716,.553925),t(o,.201239,.38367,.554294),t(o,.19943,.387607,.554642),t(o,.197636,.391528,.554969),t(o,.19586,.395433,.555276),t(o,.1941,.399323,.555565),t(o,.192357,.403199,.555836),t(o,.190631,.407061,.556089),t(o,.188923,.41091,.556326),t(o,.187231,.414746,.556547),t(o,.185556,.41857,.556753),t(o,.183898,.422383,.556944),t(o,.182256,.426184,.55712),t(o,.180629,.429975,.557282),t(o,.179019,.433756,.55743),t(o,.177423,.437527,.557565),t(o,.175841,.44129,.557685),t(o,.174274,.445044,.557792),t(o,.172719,.448791,.557885),t(o,.171176,.45253,.557965),t(o,.169646,.456262,.55803),t(o,.168126,.459988,.558082),t(o,.166617,.463708,.558119),t(o,.165117,.467423,.558141),t(o,.163625,.471133,.558148),t(o,.162142,.474838,.55814),t(o,.160665,.47854,.558115),t(o,.159194,.482237,.558073),t(o,.157729,.485932,.558013),t(o,.15627,.489624,.557936),t(o,.154815,.493313,.55784),t(o,.153364,.497,.557724),t(o,.151918,.500685,.557587),t(o,.150476,.504369,.55743),t(o,.149039,.508051,.55725),t(o,.147607,.511733,.557049),t(o,.14618,.515413,.556823),t(o,.144759,.519093,.556572),t(o,.143343,.522773,.556295),t(o,.141935,.526453,.555991),t(o,.140536,.530132,.555659),t(o,.139147,.533812,.555298),t(o,.13777,.537492,.554906),t(o,.136408,.541173,.554483),t(o,.135066,.544853,.554029),t(o,.133743,.548535,.553541),t(o,.132444,.552216,.553018),t(o,.131172,.555899,.552459),t(o,.129933,.559582,.551864),t(o,.128729,.563265,.551229),t(o,.127568,.566949,.550556),t(o,.126453,.570633,.549841),t(o,.125394,.574318,.549086),t(o,.124395,.578002,.548287),t(o,.123463,.581687,.547445),t(o,.122606,.585371,.546557),t(o,.121831,.589055,.545623),t(o,.121148,.592739,.544641),t(o,.120565,.596422,.543611),t(o,.120092,.600104,.54253),t(o,.119738,.603785,.5414),t(o,.119512,.607464,.540218),t(o,.119423,.611141,.538982),t(o,.119483,.614817,.537692),t(o,.119699,.61849,.536347),t(o,.120081,.622161,.534946),t(o,.120638,.625828,.533488),t(o,.12138,.629492,.531973),t(o,.122312,.633153,.530398),t(o,.123444,.636809,.528763),t(o,.12478,.640461,.527068),t(o,.126326,.644107,.525311),t(o,.128087,.647749,.523491),t(o,.130067,.651384,.521608),t(o,.132268,.655014,.519661),t(o,.134692,.658636,.517649),t(o,.137339,.662252,.515571),t(o,.14021,.665859,.513427),t(o,.143303,.669459,.511215),t(o,.146616,.67305,.508936),t(o,.150148,.676631,.506589),t(o,.153894,.680203,.504172),t(o,.157851,.683765,.501686),t(o,.162016,.687316,.499129),t(o,.166383,.690856,.496502),t(o,.170948,.694384,.493803),t(o,.175707,.6979,.491033),t(o,.180653,.701402,.488189),t(o,.185783,.704891,.485273),t(o,.19109,.708366,.482284),t(o,.196571,.711827,.479221),t(o,.202219,.715272,.476084),t(o,.20803,.718701,.472873),t(o,.214,.722114,.469588),t(o,.220124,.725509,.466226),t(o,.226397,.728888,.462789),t(o,.232815,.732247,.459277),t(o,.239374,.735588,.455688),t(o,.24607,.73891,.452024),t(o,.252899,.742211,.448284),t(o,.259857,.745492,.444467),t(o,.266941,.748751,.440573),t(o,.274149,.751988,.436601),t(o,.281477,.755203,.432552),t(o,.288921,.758394,.428426),t(o,.296479,.761561,.424223),t(o,.304148,.764704,.419943),t(o,.311925,.767822,.415586),t(o,.319809,.770914,.411152),t(o,.327796,.77398,.40664),t(o,.335885,.777018,.402049),t(o,.344074,.780029,.397381),t(o,.35236,.783011,.392636),t(o,.360741,.785964,.387814),t(o,.369214,.788888,.382914),t(o,.377779,.791781,.377939),t(o,.386433,.794644,.372886),t(o,.395174,.797475,.367757),t(o,.404001,.800275,.362552),t(o,.412913,.803041,.357269),t(o,.421908,.805774,.35191),t(o,.430983,.808473,.346476),t(o,.440137,.811138,.340967),t(o,.449368,.813768,.335384),t(o,.458674,.816363,.329727),t(o,.468053,.818921,.323998),t(o,.477504,.821444,.318195),t(o,.487026,.823929,.312321),t(o,.496615,.826376,.306377),t(o,.506271,.828786,.300362),t(o,.515992,.831158,.294279),t(o,.525776,.833491,.288127),t(o,.535621,.835785,.281908),t(o,.545524,.838039,.275626),t(o,.555484,.840254,.269281),t(o,.565498,.84243,.262877),t(o,.575563,.844566,.256415),t(o,.585678,.846661,.249897),t(o,.595839,.848717,.243329),t(o,.606045,.850733,.236712),t(o,.616293,.852709,.230052),t(o,.626579,.854645,.223353),t(o,.636902,.856542,.21662),t(o,.647257,.8584,.209861),t(o,.657642,.860219,.203082),t(o,.668054,.861999,.196293),t(o,.678489,.863742,.189503),t(o,.688944,.865448,.182725),t(o,.699415,.867117,.175971),t(o,.709898,.868751,.169257),t(o,.720391,.87035,.162603),t(o,.730889,.871916,.156029),t(o,.741388,.873449,.149561),t(o,.751884,.874951,.143228),t(o,.762373,.876424,.137064),t(o,.772852,.877868,.131109),t(o,.783315,.879285,.125405),t(o,.79376,.880678,.120005),t(o,.804182,.882046,.114965),t(o,.814576,.883393,.110347),t(o,.82494,.88472,.106217),t(o,.83527,.886029,.102646),t(o,.845561,.887322,.099702),t(o,.85581,.888601,.097452),t(o,.866013,.889868,.095953),t(o,.876168,.891125,.09525),t(o,.886271,.892374,.095374),t(o,.89632,.893616,.096335),t(o,.906311,.894855,.098125),t(o,.916242,.896091,.100717),t(o,.926106,.89733,.104071),t(o,.935904,.89857,.108131),t(o,.945636,.899815,.112838),t(o,.9553,.901065,.118128),t(o,.964894,.902323,.123941),t(o,.974417,.90359,.130215),t(o,.983868,.904867,.136897),t(o,.993248,.906157,.143936)])),Xc=function(e){switch(e){case 0:return am;case 1:return tm;case 2:return om;case 3:return im;default:return cm}},lm=function(e){e.a;var r=e.b;return Ke(r)+1},um=s(function(e,r){var n=r.a,a=r.b,i=c(ln,lm(r),e),l=s(function(u,v){e:for(;;)if(v.b){var $=v.a,f=v.b;if(u){var d=u-1,p=f;u=d,v=p;continue e}else return $}else return n});return i?c(l,i-1,a):n}),Qc=s(function(e,r){return c(um,e,Xc(r))}),Yt=function(e){return{$:0,a:e}},Kc=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),el=x(function(e,r,n){return Z(n,e)<0?e:Z(n,r)>0?r:n}),ft=function(e){return t(el,0,1,e<=.04045?e/12.92:c(qn,(e+.055)/1.055,2.4))},Zn=v$,vm=function(e){var r=Jo(e),n=r.dn,a=r.cM,i=r.cC;return t(Zn,ft(n),ft(a),ft(i))},$m=function(e){return t(Kc,0,Yt(vm(e)),Yt(0))},Io=s(function(e,r){return{$:0,a:e,b:r}}),Uo=s(function(e,r){return{$:2,a:e,b:r}}),Qa=function(e){return{$:5,a:e}},Oo=s(function(e,r){return{$:4,a:e,b:r}}),qo=s(function(e,r){return{$:3,a:e,b:r}}),Ka=s(function(e,r){return{$:1,a:e,b:r}}),sm=x(function(e,r,n){return{gF:e,gJ:r,dJ:n}}),fm=function(e){var r=e;return r},et=function(e){var r=e;return fm(r.e5)},rt=function(e){var r=e;return r.a_},Mr=function(e){var r=e;return r.dH},Fr=function(e){var r=e;return r.dI},mm=s(function(e,r){return vr({c9:c(mn,e,Hr(r)),dH:Mr(r),dI:Fr(r),dK:Tr(r)})}),dm=s(function(e,r){return{e5:c(mm,e,et(r)),a_:rt(r)}}),pm=s(function(e,r){var n=r;return c(Er,c(mn,e,n.c9),n.fo)}),gm=s(function(e,r){var n=r;return{m:c(pm,e,n.m),fV:n.fV,gd:n.gd}}),Yo=function(e){var r=e;return r},bm=function(e){return e},Zo=s(function(e,r){var n=Yo(r),a=n.a,i=n.b;return bm(k(e(a),e(i)))}),hm=s(function(e,r){return c(Zo,mn(e),r)}),nt=function(e){var r=e;return r.fe},at=function(e){var r=e;return r.gd},Xo=s(function(e,r){return{fe:r,gd:_e(e)}}),_m=s(function(e,r){return c(Xo,at(r),c(mn,e,nt(r)))}),Qo=s(function(e,r){var n=r,a=n.a,i=n.b,l=n.c;return A(e(a),e(i),e(l))}),wm=s(function(e,r){return c(Qo,mn(e),r)}),Rn=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=t(sm,n,a,i);switch(r.$){case 0:var d=r.a,u=r.b;return c(Io,d,c(dm,l,u));case 1:var d=r.a,v=r.b;return c(Ka,d,c(wm,l,v));case 3:var d=r.a,$=r.b;return c(qo,d,c(_m,l,$));case 2:var d=r.a,f=r.b;return c(Uo,d,c(gm,l,f));case 4:var d=r.a,p=r.b;return c(Oo,d,c(hm,l,p));default:var g=r.a;return Qa(c(ie,Rn(A(n,a,i)),g))}}),e0=function(e){return Rn(A(e,0,0))},r0=function(e){return Rn(A(0,e,0))},ba=x(function(e,r,n){var a=e,i=r,l=n,u=.5*i,v=br(u),$=Pr(u),f=a.fo,d=f,p=d.gF*$,g=v*p,m=p*p,_=d.gJ*$,h=v*_,y=p*_,S=_*_,w=1-2*(m+S),C=d.dJ*$,F=v*C,W=2*(y-F),H=2*(y+F),N=p*C,G=2*(N+h),I=2*(N-h),B=_*C,Q=2*(B-g),ne=2*(B+g),$e=C*C,de=1-2*(S+$e),ve=1-2*(m+$e);return{gF:de*l.gF+W*l.gJ+G*l.dJ,gJ:H*l.gF+ve*l.gJ+Q*l.dJ,dJ:I*l.gF+ne*l.gJ+w*l.dJ}}),Xn=x(function(e,r,n){var a=e,i=r,l=n,u=.5*i,v=br(u),$=Pr(u),f=a.c9,d=f,p=l.gF-d.gF,g=l.gJ-d.gJ,m=l.dJ-d.dJ,_=a.fo,h=_,y=h.gF*$,S=v*y,w=y*y,C=h.gJ*$,F=v*C,W=y*C,H=C*C,N=1-2*(w+H),G=h.dJ*$,I=v*G,B=2*(W-I),Q=2*(W+I),ne=y*G,$e=2*(ne+F),de=2*(ne-F),ve=C*G,be=2*(ve-S),Ae=2*(ve+S),ze=G*G,_r=1-2*(H+ze),wr=1-2*(w+ze);return{gF:d.gF+_r*p+B*g+$e*m,gJ:d.gJ+Q*p+wr*g+be*m,dJ:d.dJ+de*p+Ae*g+N*m}}),ym=x(function(e,r,n){return vr({c9:t(Xn,e,r,Hr(n)),dH:t(ba,e,r,Mr(n)),dI:t(ba,e,r,Fr(n)),dK:t(ba,e,r,Tr(n))})}),xm=x(function(e,r,n){return{e5:t(ym,e,r,et(n)),a_:rt(n)}}),Sm=s(function(e,r){var n=c(Xn,e,r),a=c(ba,e,r);return function(i){var l=i;return c(Er,n(l.c9),a(l.fo))}}),Cm=x(function(e,r,n){var a=n;return{m:t(Sm,e,r,a.m),fV:a.fV,gd:a.gd}}),Pm=x(function(e,r,n){return c(Zo,c(Xn,e,r),n)}),Lm=x(function(e,r,n){return c(Xo,at(n),t(Xn,e,r,nt(n)))}),zm=x(function(e,r,n){return c(Qo,c(Xn,e,r),n)}),Ko=x(function(e,r,n){switch(n.$){case 0:var v=n.a,a=n.b;return c(Io,v,t(xm,e,r,a));case 1:var v=n.a,i=n.b;return c(Ka,v,t(zm,e,r,i));case 3:var v=n.a,l=n.b;return c(qo,v,t(Lm,e,r,l));case 2:var v=n.a,u=n.b;return c(Uo,v,t(Cm,e,r,u));case 4:var v=n.a,$=n.b;return c(Oo,v,t(Pm,e,r,$));default:var f=n.a;return Qa(c(ie,c(Ko,e,r),f))}}),km=s(function(e,r){var n=e.a,a=e.b,i=a.a,l=a.b,u=a.c;return c(Ko,c(Er,da(n),Cr({gF:i,gJ:l,dJ:u})),un(r))}),Tm=c(Er,Xe,Xa),Mm=s(function(e,r){return t(Ko,Tm,un(e),r)}),Qn=x(function(e,r,n){var a=e,i=n;return{gF:a.gF+r*(i.gF-a.gF),gJ:a.gJ+r*(i.gJ-a.gJ),dJ:a.dJ+r*(i.dJ-a.dJ)}}),Fm=x(function(e,r,n){var a=et(n),i=Mr(a),l=Fr(a),u=Tr(a),v=t(Qn,e,r,Hr(a)),$=r>=0?vr({c9:v,dH:i,dI:l,dK:u}):vr({c9:v,dH:pr(i),dI:pr(l),dK:pr(u)}),f=rt(n),d=f.a,p=f.b,g=f.c,m=_e(c(re,r,d)),_=_e(c(re,r,p)),h=_e(c(re,r,g));return{e5:$,a_:A(m,_,h)}}),ei=function(e){var r=e;return r.m},n0=function(e){return Ho(ei(e))},Dm=function(e){return Go(ei(e))},rl=function(e){var r=e;return r.fV},nl=function(e){var r=e;return r.gd},Jm=x(function(e,r,n){var a=_e(c(re,r,nl(n))),i=_e(c(re,r,rl(n))),l=r>=0?n0(n):pr(n0(n)),u=t(Qn,e,r,Dm(n));return{m:c(Er,u,l),fV:i,gd:a}}),Am=x(function(e,r,n){return c(Zo,c(Qn,e,r),n)}),Bm=x(function(e,r,n){return c(Xo,c(re,Y(r),at(n)),t(Qn,e,r,nt(n)))}),jm=x(function(e,r,n){return c(Qo,c(Qn,e,r),n)}),al=s(function(e,r){switch(r.$){case 0:var u=r.a,n=r.b;return c(Io,u,t(Fm,Xe,e,n));case 1:var u=r.a,a=r.b;return c(Ka,u,t(jm,Xe,e,a));case 3:var u=r.a,i=r.b;return c(qo,u,t(Bm,Xe,e,i));case 2:var u=r.a,l=r.b;return c(Uo,u,t(Jm,Xe,e,l));case 4:var u=r.a,v=r.b;return c(Oo,u,t(Am,Xe,e,v));default:var $=r.a;return Qa(c(ie,al(e),$))}}),Vm=s(function(e,r){var n=e.gF,a=e.gJ,i=e.dJ;return c(ee,Rn(A(-n,-a,-i)),c(ee,al(r),Rn(A(n,a,i))))}),a0=function(e){var r=e.cr,n=e.ct;return{gF:Qe(3)/2*r,gJ:1/2*r+n}},Be=x(function(e,r,n){return A(e,r,n)}),ha=x(function(e,r,n){return{gF:e,gJ:r,dJ:n}}),Rm=s(function(e,r){var n=r.a,a=r.b,i=r.c;return c(Ka,e,t(Be,t(ha,n.gF,n.gJ,n.dJ),t(ha,a.gF,a.gJ,a.dJ),t(ha,i.gF,i.gJ,i.dJ)))}),Em=s(function(e,r){return(r-Ar(r/e)*e)/e}),Nm=function(e){return 2*Rr*e},Hm=R(function(e,r,n,a){return e+(r-e)*(1+br(Nm(c(Em,n,a))))/2}),Gm=x(function(e,r,n){var a=n.a,i=a.a,l=a.b,u=a.c,v=n.b,$=c(Vr,"minimum rotation degree",e),f=c(Vr,"maximum rotation degree",e),d=function(){var C=a0(function(){return i?{cr:.6666666666666666,ct:.6666666666666666}:{cr:.3333333333333333,ct:.3333333333333333}}());return{gF:C.gF,gJ:C.gJ,dJ:0}}(),p=c(Vr,"rotation period",e),g=z(Hm,$,f,p,e.dP),m=c(ee,Sr,c(km,k(d,A(0,0,1)),g)),_=c(Rm,$m(c(Qc,v,r)),A({gF:0,gJ:0,dJ:0},{gF:br(mr(30)),gJ:Pr(mr(30)),dJ:0},{gF:0,gJ:1,dJ:0})),h=c(r0,1+Pr(mr(30)),c(e0,br(mr(30)),c(Mm,mr(180),_))),y=a0({cr:l,ct:u}),S=y.gF,w=y.gJ;return c(r0,w,c(e0,S,m(t(Vm,d,c(Vr,"trixel scale",e),function(){return i?h:_}()))))}),Zt=function(e){return Qa(e)},Wm=function(e){var r=e.a;return Fc(r)},Im=s(function(e,r){var n=Vn(r.l);return Zt(c(ie,c(Gm,e,n.bB),Wm(n.gw)))}),Um=function(e){return e},Om=function(e){return cr(.01*e)},t0=function(e){return e},qm=function(e){return e},Ym=function(e){return{$:0,a:e}},Zm=Ym,Xm={$:3},Qm=Xm,Km=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ed=Km,rd=s(function(e,r){return r.b?t($r,T,r,e):e}),We=function(e){return t($r,rd,L,e)},ri=s(function(e,r){return We(c(ie,e,r))}),nd=function(e){return{$:1,a:e}},ad=nd,td=function(e){return c(Gn,"height",ye(e))},od=function(e){return Dv(jv(e))},id=od,cd=function(e){return{$:2,a:e}},ld=cd,tl=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,l=function(v){return er(v*1e3)/1e3},u=function(v){return er(v*1e4)/100};return Vo(b(["rgba(",le(u(r)),"%,",le(u(n)),"%,",le(u(a)),"%,",le(l(i)),")"]))},ud=s(function(e,r){switch(r.$){case 0:return c(Q$,e,r);case 1:return c(K$,e,r);case 2:return c(e3,e,r);case 3:return c(r3,e,r);case 4:return c(n3,e,r);default:return c(a3,e,r)}}),vd=s(function(e,r){switch(r.$){case 0:return c(z$,e,r);case 1:return c(k$,e,r);case 2:return c(T$,e,r);case 3:return c(M$,e,r);case 4:return c(F$,e,r);case 5:return c(D$,e,r);case 6:return c(J$,e,r);case 7:return c(A$,e,r);default:return B$(e)}}),$d=x(function(e,r,n){return t(X$,e,r,n)}),o0=function(e){var r=e;return r},pn=p$,mt=z(pn,1,1,1,1),nr=x(function(e,r,n){return c(ie,function(a){return c(a,r,n)},e)}),sd=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),fd=s(function(e,r){var n=e,a=r.gF,i=r.gJ;return t(sd,n*a/i,n,n*(1-a-i)/i)}),md=function(e){var r=e.a,n=e.b,a=e.c;return t(Zn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ni=s(function(e,r){return md(c(fd,e,r))}),ol=s(function(e,r){return{d1:gr(e.d1,r.d1),u:e.u*r.u+e.v*r.x+e.w*r.A,v:e.u*r.v+e.v*r.y+e.w*r.B,w:e.u*r.w+e.v*r.z+e.w*r.C,x:e.x*r.u+e.y*r.x+e.z*r.A,y:e.x*r.v+e.y*r.y+e.z*r.B,z:e.x*r.w+e.y*r.z+e.z*r.C,A:e.A*r.u+e.B*r.x+e.C*r.A,B:e.A*r.v+e.B*r.y+e.C*r.B,C:e.A*r.w+e.B*r.z+e.C*r.C,M:r.M+(e.M*r.u+e.N*r.x+e.O*r.A)*r.cn,N:r.N+(e.M*r.v+e.N*r.y+e.O*r.B)*r.cn,O:r.O+(e.M*r.w+e.N*r.z+e.O*r.C)*r.cn,cn:e.cn*r.cn}}),tr=y$,dd=function(e){return tr({ea:e.u,eb:e.x,ec:e.A,ed:e.M,ee:e.v,ef:e.y,eg:e.B,eh:e.N,ei:e.w,ej:e.z,ek:e.C,el:e.O,em:0,en:0,eo:0,ep:1})},dt=xe(function(e,r,n,a,i){var l=a.d1?1:-1,u=z(pn,a.cn,a.cn,a.cn,l);return Te(i,e,u,dd(a),a.d1,r,n)}),il=rr(function(e,r,n,a,i,l){e:for(;;)switch(i.$){case 0:return l;case 5:var u=i.a,v=i.b,$=e,f=r,d=n,p=c(ol,u,a),g=v,m=l;e=$,r=f,n=d,a=p,i=g,l=m;continue e;case 1:var _=i.b,h=c(T,P(dt,e,r,n,a,_),l.R);return{R:h,ac:l.ac,gl:l.gl};case 3:var y=i.b,S=c(T,P(dt,e,r,n,a,y),l.ac);return{R:l.R,ac:S,gl:l.gl};case 2:var w=i.a,C=c(T,P(dt,e,r,n,a,w),l.gl);return{R:l.R,ac:l.ac,gl:C};default:var F=i.a;return t(Wn,z(il,e,r,n,a),l,F)}}),pd=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cl=pd,ai=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),gd=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(ai,518,r,n,a)},bd=s(function(e,r){return{$:6,a:e,b:r}}),hd=bd,ll=b([gd({ad:1,ae:0,ai:!1}),z(cl,!1,!1,!1,!1),c(hd,0,1)]),vn=519,ti=8,ul=15,nn=7681,_d={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ue=L$,wd=s(function(e,r){return{$:0,a:e,b:r}}),yd=wd({dT:1,d0:0,ey:5}),Ve=l$,xd=yd(b([{cj:c(Ve,-1,-1)},{cj:c(Ve,1,-1)},{cj:c(Ve,-1,1)},{cj:c(Ve,1,1)}])),Sd={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cj"},uniforms:{}},Cd=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:v,i:$,j:f,k:d}}}}}}}}}}}},oi=x(function(e,r,n){var a=e.$7,i=e.cZ,l=e.dG,u=s(function(f,d){var p=f;return d(p)}),v=s(function(f,d){var p=f;return d(p)}),$=function(f){return c(ee,u(f.bL),c(ee,v(f.br),c(ee,v(f.bU),v(f.bV))))};return c($,n,c($,r,t(Cd,a,i,l)))}),ii=function(e){return t(oi,{cZ:e.cZ,$7:e.$7,dG:e.dG},{br:e.br,bL:e.bL,bU:e.bU,bV:e.bV},{br:e.br,bL:e.bL,bU:e.bU,bV:e.bV})},ci=function(e){return P(ue,b([ii(e),z(cl,!1,!1,!1,!1)]),Sd,_d,xd,{})},Pd=ci({br:nn,cZ:0,$7:ti,bL:vn,dG:ul,bU:nn,bV:nn}),Ld=516,i0=5386,Le=7680,zd=function(e){return c(qn,2,e+4)},vl=function(e){return ci({br:Le,cZ:ul,$7:ti,bL:Ld,dG:zd(e),bU:i0,bV:i0})},kd=x(function(e,r,n){return We(b([t(nr,e,n,ll),b([vl(r),Pd])]))}),Td=s(function(e,r){return We(c(yo,kd(e),r))}),Md=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(ai,513,r,n,a)},Fd=Md({ad:1,ae:0,ai:!0}),Dd=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return{$:0,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:v,i:$,j:f}}}}}}}}}}},Jd=function(e){var r=e.cl,n=e.b4,a=e.bZ,i=e.bW,l=e.b$,u=e.aX,v=s(function($,f){var d=$.a,p=$.b,g=$.c,m=f.a,_=f.b,h=f.c;return Dd(d)(p)(g)(m)(_)(h)(r)(n)(a)(i)});return c(v,l,u)},Ad=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),c0=s(function(e,r){var n=e,a=r;return t(Ad,32774,n,a)}),Bd=1,l0=771,jd=770,li=Jd({bW:0,aX:c(c0,Bd,l0),bZ:0,b$:c(c0,jd,l0),b4:0,cl:0}),Gr=b([Fd,li]),Vd=function(e){var r=e;return r.er},Rd=function(e){var r=e;return r.es},$l=function(e){var r=e;return r.et},Ed=function(e){var r=e;return r.eu},Nd=function(e){var r=e;return r.ev},sl=function(e){var r=e;return r.ew},an=s(function(e,r){var n=e,a=r;return a-n}),fl=function(e){return A(c(an,Ed(e),Vd(e)),c(an,Nd(e),Rd(e)),c(an,sl(e),$l(e)))},Hd=function(e){return e},Gd=function(e){return vr({c9:Hd({gF:e.M,gJ:e.N,dJ:e.O}),dH:Cr({gF:e.u,gJ:e.v,dJ:e.w}),dI:Cr({gF:e.x,gJ:e.y,dJ:e.z}),dK:Cr({gF:e.A,gJ:e.B,dJ:e.C})})},pt=s(function(e,r){var n=e,a=r,i=n.dK,l=i,u=n.dI,v=u,$=n.dH,f=$;return{gF:a.gF*f.gF+a.gJ*f.gJ+a.dJ*f.dJ,gJ:a.gF*v.gF+a.gJ*v.gJ+a.dJ*v.dJ,dJ:a.gF*l.gF+a.gJ*l.gJ+a.dJ*l.dJ}}),ml=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=a.gF-l.gF,v=a.gJ-l.gJ,$=a.dJ-l.dJ,f=n.dK,d=f,p=n.dI,g=p,m=n.dH,_=m;return{gF:u*_.gF+v*_.gJ+$*_.dJ,gJ:u*g.gF+v*g.gJ+$*g.dJ,dJ:u*d.gF+v*d.gJ+$*d.dJ}}),dl=s(function(e,r){return{c9:c(ml,e,Hr(r)),dH:c(pt,e,Mr(r)),dI:c(pt,e,Fr(r)),dK:c(pt,e,Tr(r))}}),Va=function(e){var r=e;return r},se=s(function(e,r){var n=e,a=r;return c(Je,n,a)}),_a=s(function(e,r){return Z(e,r)<0?e:r}),ge=s(function(e,r){var n=e,a=r;return c(_a,n,a)}),Wd=s(function(e,r){var n=Va(r),a=Va(e);return{er:c(se,a.er,n.er),es:c(se,a.es,n.es),et:c(se,a.et,n.et),eu:c(ge,a.eu,n.eu),ev:c(ge,a.ev,n.ev),ew:c(ge,a.ew,n.ew)}}),Ie=function(e){var r=e;return r},Id=function(e){var r=e;return A(r.gF,r.gJ,r.dJ)},Tn=s(function(e,r){var n=e,a=r;return a+n}),Ud=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=pa(_e(a)),u=pa(_e(n)),v=pa(_e(i)),$=Id(r),f=$.a,d=$.b,p=$.c;return{er:c(Tn,u,f),es:c(Tn,l,d),et:c(Tn,v,p),eu:c(an,u,f),ev:c(an,l,d),ew:c(an,v,p)}}),u0=R(function(e,r,n,a){var i=n.fe,l=2*n.fD*r,u=2*n.fC*r,v=2*n.fB*r,$=i.dJ*r,f=i.gJ*r,d=i.gF*r,p=Ie(Tr(e)),g=Y(v*p.gF)+Y(u*p.gJ)+Y(l*p.dJ),m=Ie(Fr(e)),_=Y(v*m.gF)+Y(u*m.gJ)+Y(l*m.dJ),h=Ie(Mr(e)),y=Y(v*h.gF)+Y(u*h.gJ)+Y(l*h.dJ),S=c(Ud,A(y,_,g),c(ml,e,t(ha,d,f,$)));if(a.$)return te(S);var w=a.a;return te(c(Wd,w,S))}),Xt=R(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,l=a.b;switch(i.$){case 0:var m=e,_=r,h=n,y=l;e=m,r=_,n=h,a=y;continue e;case 1:var u=i.a,v=z(u0,e,r,u,n),m=e,_=r,h=v,y=l;e=m,r=_,n=h,a=y;continue e;case 2:var m=e,_=r,h=n,y=l;e=m,r=_,n=h,a=y;continue e;case 3:var u=i.a,v=z(u0,e,r,u,n),m=e,_=r,h=v,y=l;e=m,r=_,n=h,a=y;continue e;case 4:var $=i.a,m=e,_=r,h=z(Xt,e,r,n,$),y=l;e=m,r=_,n=h,a=y;continue e;default:var f=i.a,d=i.b,p=c(dl,Gd(f),e),g=r*f.cn,m=e,_=r,h=z(Xt,p,g,n,b([d])),y=l;e=m,r=_,n=h,a=y;continue e}}else return n}),gn=$$,bn=s$,hn=f$,pl=function(e){return{$:4,a:e}},Od=s(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,l=c(T,n,r);e=i,r=l;continue e}else return r}),Kn=function(e){return pl(c(Od,e,L))},qd={d1:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,M:0,N:0,O:0,cn:1},v0=ci({br:nn,cZ:0,$7:ti,bL:vn,dG:255,bU:nn,bV:nn}),Yd=function(e){var r=e,n=c(Je,Y(r.gF),c(Je,Y(r.gJ),Y(r.dJ)));if(n){var a=r.dJ/n,i=r.gJ/n,l=r.gF/n,u=Qe(l*l+i*i+a*a);return u*n}else return He},ke={bZ:0,fd:!1,b4:0,di:0,cl:0,dA:0,gF:0,gJ:0,dJ:0},Ee=s(function(e,r){var n=e,a=r;return tr({ea:n.gF,eb:n.cl,ec:a.gF,ed:a.cl,ee:n.gJ,ef:n.b4,eg:a.gJ,eh:a.b4,ei:n.dJ,ej:n.bZ,ek:a.dJ,el:a.bZ,em:n.dA,en:n.di,eo:a.dA,ep:a.di})}),Sn=k({by:c(Ee,ke,ke),b9:c(Ee,ke,ke),ca:c(Ee,ke,ke),cb:c(Ee,ke,ke)},z(pn,0,0,0,0)),gl=514,bl=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(ai,515,r,n,a)},hl=240,Zd=b([bl({ad:1,ae:0,ai:!0}),ii({br:Le,cZ:hl,$7:0,bL:gl,dG:0,bU:Le,bV:Le}),li]),Xd=s(function(e,r){var n=e,a=r.f2,i=r.fy,l=r.e4,u=_e(a),v=u,$=_e(i),f=$,d=n.dm;if(d.$){var g=d.a;return Bt(f)?tr({ea:2/(l*g),eb:0,ec:0,ed:0,ee:0,ef:2/g,eg:0,eh:0,ei:0,ej:0,ek:0,el:-1,em:0,en:0,eo:0,ep:1}):tr({ea:2/(l*g),eb:0,ec:0,ed:0,ee:0,ef:2/g,eg:0,eh:0,ei:0,ej:0,ek:-2/(f-v),el:-(f+v)/(f-v),em:0,en:0,eo:0,ep:1})}else{var p=d.a;return Bt(f)?tr({ea:1/(l*p),eb:0,ec:0,ed:0,ee:0,ef:1/p,eg:0,eh:0,ei:0,ej:0,ek:-1,el:-2*v,em:0,en:0,eo:-1,ep:0}):tr({ea:1/(l*p),eb:0,ec:0,ed:0,ee:0,ef:1/p,eg:0,eh:0,ei:0,ej:0,ek:-(f+v)/(f-v),el:-2*f*v/(f-v),em:0,en:0,eo:-1,ep:0})}}),ia=s(function(e,r){return(1&e>>r)===1?0:1}),Qd=function(e){return b([bl({ad:1,ae:0,ai:!0}),ii({br:Le,cZ:hl,$7:e,bL:gl,dG:0,bU:Le,bV:Le}),li])},Kd=x(function(e,r,n){return We(c(ie,function(a){var i=a<<4,l=z(pn,c(ia,a,0),c(ia,a,1),c(ia,a,2),c(ia,a,3));return t(nr,e,k(r,l),Qd(i))},c(on,1,c(qn,2,n)-1)))}),tn=function(e){var r=e;return r},e2=x$,r2=Cr({gF:1,gJ:0,dJ:0}),_l=r2,wl=Uc,n2={c9:Xe,dH:_l,dI:wl,dK:Xa},tt=function(e){var r=e;return r},a2=function(e){var r=tt(Hr(e)),n=Ie(Tr(e)),a=Ie(Fr(e)),i=Ie(Mr(e));return tr({ea:i.gF,eb:a.gF,ec:n.gF,ed:r.gF,ee:i.gJ,ef:a.gJ,eg:n.gJ,eh:r.gJ,ei:i.dJ,ej:a.dJ,ek:n.dJ,el:r.dJ,em:0,en:0,eo:0,ep:1})},t2=s(function(e,r){var n=r;return a2(c(dl,n,e))}),o2=function(e){return c(t2,n2,e)},i2=function(e){var r=e;return r.dF},c2=function(e){var r=e;return Mr(r)},l2=function(e){var r=e;return Fr(r)},u2=function(e){var r=i2(e.fb),n=vr({c9:It(r),dH:c2(r),dI:l2(r),dK:pr(Ot(r))}),a=Kn(e.a3),i=a,l=z(Xt,n,1,q,b([i]));if(l.$===1)return L;var u=l.a,v=o2(r),$=c(re,.99,c(se,_e(e.aZ),Ut($l(u)))),f=fl(u),d=f.a,p=f.b,g=f.c,m=Yd(t(Wo,d,p,g)),_=c(re,1.01,c(Tn,m,Ut(sl(u)))),h=c(Xd,e.fb,{e4:e.e4,fy:_,f2:$}),y=e2(h).ep,S=y?Ie(pr(Ot(r))):tn(It(r)),w=function(){var ve=e.cq;switch(ve.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var be=ve.a;return k(3,be);case 4:var be=ve.a;return k(4,be);default:return k(5,0)}}(),C=w.a,F=w.b,W=e.b2,H=W,N=c(ni,H,e.cv),G=N,I=tr({ea:0,eb:S.gF,ec:gn(G),ed:e.eS,ee:0,ef:S.gJ,eg:bn(G),eh:ga(m),ei:0,ej:S.dJ,ek:hn(G),el:C,em:0,en:y,eo:0,ep:F}),B=Te(il,I,v,h,qd,i,{R:L,ac:L,gl:L}),Q=e.b8;switch(Q.$){case 0:var ne=Q.a;return We(b([t(nr,B.R,k(ne,mt),Gr),t(nr,B.ac,Sn,Gr)]));case 1:var ne=Q.a;return We(b([t(nr,B.R,Sn,Gr),b([v0]),t(nr,B.gl,ne.by,ll),b([vl(0)]),t(nr,B.R,k(ne,mt),Zd),t(nr,B.ac,Sn,Gr)]));default:var $e=Q.a,de=Q.b;return We(b([t(nr,B.R,k(de,mt),Gr),b([v0]),c(Td,B.gl,$e),t(Kd,B.R,de,Ke($e)),t(nr,B.ac,Sn,Gr)]))}},v2=function(e){return c(Gn,"width",ye(e))},$2=s(function(e,r){var n=b([ad(1),ld(0),Zm(!0),z(ed,0,0,0,0)]),a=function(){var C=e.cw;switch(C.$){case 0:return A(n,"0",1);case 1:return A(c(T,Qm,n),"1",1);default:var F=C.a;return A(n,"0",F)}}(),i=a.a,l=a.b,u=a.c,v=e.a_,$=v.a,f=v.b,d=o0(f),p=c(ce,"height",ye(d)+"px"),g=o0($),m=g/d,_=c(ri,function(C){return u2({e4:m,fb:e.fb,aZ:e.aZ,a3:C.a3,b2:C.b2,b8:C.b8,eS:u,cq:C.cq,cv:C.cv})},r),h=c(ce,"width",ye(g)+"px"),y=e.aY,S=y,w=tl(S);return t(id,"div",b([c(ce,"padding","0px"),h,p]),b([k(l,t($d,i,b([v2(er(g*u)),td(er(d*u)),h,p,c(ce,"display","block"),c(ce,"background-color",w)]),_))]))}),s2=function(e){return c($2,{cw:e.cw,aY:e.aY,fb:e.fb,aZ:e.aZ,a_:e.a_},b([{a3:e.a3,b2:e.b2,b8:e.b8,cq:e.cq,cv:e.cv}]))},yl=function(e){return e},$0=yl({gF:.31271,gJ:.32902}),f2=s(function(e,r){var n=e,a=Ie(r.fo),i=a.gF,l=a.gJ,u=a.dJ,v=c(ni,r.cN,r.cD),$=v;return{bZ:hn($),fd:n,b4:bn($),di:0,cl:gn($),dA:1,gF:-i,gJ:-l,dJ:-u}}),m2=function(e){return e},d2=function(e){return m2(1.2*c(qn,2,e))},gt=function(e){return e},p2={$:0},g2=p2,xl=function(e){return e},s0=function(e){var r=e;return r},b2=function(e){e:for(;;){if(gr(e.fO,He)&&gr(e.fP,He))return ke;if(c(Wc,_e(e.fO),_e(e.fP))){var r={cD:e.cD,fO:e.fP,fP:e.fO,eY:pr(e.eY)};e=r;continue e}else{var n=Y(s0(e.fP)/Rr),a=Y(s0(e.fO)/Rr),i=Ie(e.eY),l=i.gF,u=i.gJ,v=i.dJ,$=c(ni,xl(1),e.cD),f=$;return{bZ:a*hn(f),fd:!1,b4:a*bn(f),di:n/a,cl:a*gn(f),dA:3,gF:l,gJ:u,dJ:v}}}},f0=function(e){return b2({cD:e.cD,fO:e.cN,fP:He,eY:e.eY})},h2=function(e){var r=e;return r},Sl=function(e){var r=t(el,1667,25e3,h2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return yl({gF:n,gJ:a})},Cl=function(e){return e},_2=Sl(Cl(12e3)),w2=Sl(Cl(5600)),y2=function(e){return{$:2,a:e}},x2=function(e){return y2(e)},S2=s(function(e,r){return{$:2,a:e,b:r}}),Pl=function(e){return{$:0,a:e}},ca=function(e){var r=e;return r},C2=function(e){var r=e;return r.fd},P2=Pl(Sn.a),L2=s(function(e,r){var n=s(function(a,i){var l=i.a,u=i.b;return e(a)?k(c(T,a,l),u):k(l,c(T,a,u))});return t($r,n,k(L,L),r)}),z2=function(e){var r=e;return tr({ea:r.gF,eb:r.cl,ec:0,ed:0,ee:r.gJ,ef:r.b4,eg:0,eh:0,ei:r.dJ,ej:r.bZ,ek:0,el:0,em:r.dA,en:r.di,eo:0,ep:0})},k2=oe(function(e,r,n,a,i,l,u,v){var $=c(L2,C2,b([ca(e),ca(r),ca(n),ca(a)])),f=$.a,d=$.b;if(f.b){var p=fe(f,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,m=p.b,_=m.a,h=m.b,y=h.a,S=h.b,w=S.a;return c(S2,c(ie,z2,f),{by:c(Ee,g,_),b9:c(Ee,y,w),ca:c(Ee,i,l),cb:c(Ee,u,v)})}else return P2}else return Pl({by:c(Ee,e,r),b9:c(Ee,n,a),ca:c(Ee,i,l),cb:c(Ee,u,v)})}),T2=x(function(e,r,n){return Ga(k2,e,r,n,ke,ke,ke,ke,ke)}),M2=function(e){var r=c(f2,qm(e.gl),{cD:w2,fo:e.gt,cN:gt(8e4)}),n=f0({cD:_2,cN:gt(2e4),eY:e.eY}),a=f0({cD:$0,cN:gt(15e3),eY:pr(e.eY)}),i=t(T2,r,n,a);return s2({cw:x2(e.cJ),aY:e.aY,fb:e.fb,aZ:e.aZ,a_:e.a_,a3:e.a3,b2:d2(15),b8:i,cq:g2,cv:$0})},Ll=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),F2=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),zl=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),kl=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),D2=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),J2=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),A2=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ui=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(A2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(Ll,n,r,i,1);case 3:var n=e.a,a=e.b,i=e.c;return z(F2,n,a,i,1);case 4:var n=e.a,a=e.b,i=e.c;return z(zl,n,a,i,1);case 5:var n=e.a,a=e.b,i=e.c;return z(J2,n,a,i,1);case 6:var n=e.a,a=e.b,i=e.c;return z(kl,n,a,i,1);case 7:var n=e.a,a=e.b,i=e.c;return z(D2,n,a,i,1);case 8:return e;case 9:return e;default:return e}},vi={$:0},B2=oe(function(e,r,n,a,i,l,u,v){e:for(;;)if(v.b){var $=v.a,f=v.b,d=Va(u($)),p=c(ge,d.eu,e),g=c(se,d.er,r),m=c(ge,d.ev,n),_=c(se,d.es,a),h=c(ge,d.ew,i),y=c(se,d.et,l),S=u,w=f;e=p,r=g,n=m,a=_,i=h,l=y,u=S,v=w;continue e}else return{er:r,es:a,et:l,eu:e,ev:n,ew:i}}),j2=x(function(e,r,n){var a=Va(e(r));return Ga(B2,a.eu,a.er,a.ev,a.es,a.ew,a.et,e,n)}),bt=s(function(e,r){var n=e,a=r;return Z(a,n)<1}),Tl=function(e){return c(bt,e.er,e.eu)&&c(bt,e.es,e.ev)&&c(bt,e.et,e.ew)?e:{er:c(se,e.eu,e.er),es:c(se,e.ev,e.es),et:c(se,e.ew,e.et),eu:c(ge,e.eu,e.er),ev:c(ge,e.ev,e.es),ew:c(ge,e.ew,e.et)}},En=function(e){var r=e;return r},Ml=function(e){var r=En(e),n=r.a,a=r.b,i=r.c,l=Kr(n),u=en(n),v=rn(n),$=Kr(a),f=en(a),d=rn(a),p=Kr(i),g=en(i),m=rn(i);return Tl({er:c(se,l,c(se,$,p)),es:c(se,u,c(se,f,g)),et:c(se,v,c(se,d,m)),eu:c(ge,l,c(ge,$,p)),ev:c(ge,u,c(ge,f,g)),ew:c(ge,v,c(ge,d,m))})},Fl=m$,Me=function(e){return Fl(tt(e))},Dl=function(e){var r=e;return r},ot=function(e){return Fl(Dl(e))},V2=s(function(e,r){var n=e,a=r,i=c(Je,Y(a.gF),c(Je,Y(a.gJ),Y(a.dJ)));if(i){var l=a.dJ/i,u=a.gJ/i,v=a.gF/i,$=Qe(v*v+u*u+l*l);return{gF:n*v/$,gJ:n*u/$,dJ:n*l/$}}else return Ic}),R2=V2(xl(1)),Jl=x(function(e,r,n){var a=c(ja,r,n),i=c(ja,e,r);return R2(c(Eo,a,i))}),E2=function(e){var r=En(e),n=r.a,a=r.b,i=r.c,l=ot(t(Jl,n,a,i));return A({s:l,cj:Me(n)},{s:l,cj:Me(a)},{s:l,cj:Me(i)})},N2=s(function(e,r){return{$:2,a:e,b:r}}),Al=N2({dT:3,d0:0,ey:4}),H2=function(e){if(e.b){var r=e.a,n=e.b,a=Al(c(ie,E2,e)),i=t(j2,Ml,r,n);return z(Ll,i,e,a,0)}else return vi},we=x(function(e,r,n){var a=e,i=r,l=n;return{gF:a,gJ:i,dJ:l}}),Bl=function(){var e=cr(1),r=cr(1),n=cr(1),a=c(re,-.5,e),i=c(re,-.5,r),l=c(re,-.5,n),u=t(we,l,i,a),v=c(re,.5,e),$=t(we,l,i,v),f=c(re,.5,r),d=t(we,l,f,a),p=t(we,l,f,v),g=c(re,.5,n),m=t(we,g,i,a),_=t(we,g,f,a),h=t(we,g,i,v),y=t(we,g,f,v);return ui(H2(b([t(Be,u,_,m),t(Be,u,d,_),t(Be,$,h,y),t(Be,$,y,p),t(Be,m,_,y),t(Be,m,y,h),t(Be,u,p,d),t(Be,u,$,p),t(Be,u,m,h),t(Be,u,h,$),t(Be,d,y,_),t(Be,d,p,y)])))}(),la={$:0},G2=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),W2=x(function(e,r,n){var a=r.a,i=r.b,l=r.c,u=e(l),v=e(i),$=e(a),f=ot(t(Jl,$,v,u)),d={s:f,cj:Me($)},p={s:f,cj:Me(v)},g={s:f,cj:Me(u)};return c(T,d,c(T,p,c(T,g,n)))}),$i=function(e){var r=e;return r.H},I2=R(function(e,r,n,a){if(r.$===1)return q;var i=r.a;if(n.$===1)return q;var l=n.a;if(a.$===1)return q;var u=a.a;return te(t(e,i,l,u))}),Qt=4294967295>>>32-Jn,Kt=_u,U2=x(function(e,r,n){e:for(;;){var a=Qt&r>>>e,i=c(Kt,a,n);if(i.$){var f=i.a;return c(Kt,Qt&r,f)}else{var l=i.a,u=e-Jn,v=r,$=l;e=u,r=v,n=$;continue e}}}),O2=function(e){return e>>>5<<5},q2=s(function(e,r){var n=r.a,a=r.b,i=r.c,l=r.d;return e<0||Z(e,n)>-1?q:Z(e,O2(n))>-1?te(c(Kt,Qt&e,l)):te(t(U2,a,e,i))}),si=function(e){var r=e;return r.as},ht=s(function(e,r){return c(q2,e,si(r))}),Y2=function(e){var r=function(n){var a=n.a,i=n.b,l=n.c;return z(I2,x(function(u,v,$){return A(u,v,$)}),c(ht,a,e),c(ht,i,e),c(ht,l,e))};return c(Ao,r,$i(e))},Z2=x(function(e,r,n){e:for(;;){var a=c(Co,Re,e),i=a.a,l=a.b;if(Z(Jt(i),Re)<0)return c(vc,!0,{D:r,o:n,t:i});var u=l,v=c(T,uc(i),r),$=n+1;e=u,r=v,n=$;continue e}}),fi=function(e){return e.b?t(Z2,e,L,0):cc},X2=x(function(e,r,n){return e(r(n))}),Q2=s(function(e,r){return!c(wc,c(X2,E3,e),r)}),K2=s(function(e,r){return t($r,s(function(n,a){return e(n)?c(T,n,a):a}),L,r)}),e4=function(e){var r=e.a;return r},jl=s(function(e,r){var n=e4(e),a=function(i){var l=i.a,u=i.b,v=i.c;return l>=0&&Z(l,n)<0&&u>=0&&Z(u,n)<0&&v>=0&&Z(v,n)<0};return c(Q2,a,r)?{H:r,as:e}:{H:c(K2,a,r),as:e}}),r4=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),ea=r4({dT:1,d0:3,ey:4}),wa=s(function(e,r){var n=tn(r),a=tn(e);return k(A(a.gF,a.gJ,a.dJ),A(n.gF,n.gJ,n.dJ))}),m0=t(Zn,0,0,0),_t=rr(function(e,r,n,a,i,l){var u=l.a,v=l.b,$=l.c,f=c(Mo,c(wa,e,r),i);if(f.$){var p={s:m0,cj:Me(r)},g={s:m0,cj:Me(e)},m=$+1,_=$;return A(c(T,A(n,_,m),c(T,A(n,m,a),u)),c(T,p,c(T,g,v)),$+2)}else{var d=f.a;return A(c(T,A(n,d,a),u),v,$)}}),n4=xe(function(e,r,n,a,i){e:for(;;)if(n.b){var l=n.a,u=l.a,v=l.b,$=l.c,f=n.b,d=e($),p=e(v),g=e(u),m=a+2,_=a+1,h=a,y=e,S=r,w=f,C=a+3,F=Te(_t,d,g,m,h,r,Te(_t,p,d,_,m,r,Te(_t,g,p,h,_,r,i)));e=y,r=S,n=w,a=C,i=F;continue e}else{var W=i,H=W.a,N=W.b;return k(H,De(N))}}),a4=xe(function(e,r,n,a,i){e:for(;;)if(r.b){var l=r.a,u=l.a,v=l.b,$=l.c,f=r.b,d=e($),p=e(v),g=e(u),m=n+2,_=n+1,h=n,y=t(Xr,c(wa,g,d),m,t(Xr,c(wa,d,p),_,t(Xr,c(wa,p,g),h,i))),S=c(T,A(h,_,m),a),w=e,C=f,F=n+3,W=S,H=y;e=w,r=C,n=F,a=W,i=H;continue e}else return A(a,i,n)}),Jr=x(function(e,r,n){var a=Y2(n),i=t($r,W2(r),L,a),l=P(a4,r,a,0,L,Ro),u=l.a,v=l.b,$=l.c,f=P(n4,r,v,a,0,A(u,L,$)),d=f.a,p=f.b,g=Nc(p)?i:fe(i,p);return t(G2,e,c(jl,fi(g),d),c(ea,g,d))}),eo=function(e){return{H:c(ie,function(r){return A(3*r,3*r+1,3*r+2)},c(on,0,Ke(e)-1)),as:fi(We(c(ie,function(r){var n=r.a,a=r.b,i=r.c;return b([n,a,i])},e)))}},Vl=function(e){switch(e.$){case 0:return la;case 1:var a=e.a,r=e.b,n=c(ie,En,r);return t(Jr,a,Sr,eo(n));case 2:var a=e.a,r=e.b,n=c(ie,En,r);return t(Jr,a,Sr,eo(n));case 3:var a=e.a,i=e.b;return t(Jr,a,Sr,i);case 4:var a=e.a,i=e.b;return t(Jr,a,function(l){return l.cj},i);case 5:var a=e.a,i=e.b;return t(Jr,a,function(l){return l.cj},i);case 6:var a=e.a,i=e.b;return t(Jr,a,function(l){return l.cj},i);case 7:var a=e.a,i=e.b;return t(Jr,a,function(l){return l.cj},i);case 8:return la;case 9:return la;default:return la}},d0=Vl(Bl),Rl={$:0},M=Rl,he=s(function(e,r){return{$:1,a:e,b:r}}),t4={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b0"}},o4=1029,i4=function(e){return{$:5,a:e}},El=function(e){var r=e;return i4(r)},c4=El(o4),l4=1028,u4=El(l4),Fe=x(function(e,r,n){return r===1?e?c(T,c4,n):c(T,u4,n):n}),Nl={src:`
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
    `,attributes:{position:"cj",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},wt=R(function(e,r,n,a){return c(he,r,oe(function(i,l,u,v,$,f,d,p){return P(ue,t(Fe,v,a,p),Nl,t4,n,{b0:e,c:u,d:l,e:f,f:i,g:$})}))}),mi={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aJ"}},Hl={src:`
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
    `,attributes:{position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},sr=R(function(e,r,n,a){return c(he,r,oe(function(i,l,u,v,$,f,d,p){return P(ue,t(Fe,v,a,p),Hl,mi,n,{aJ:e,c:u,d:l,e:f,f:i,g:$})}))}),Gl=s(function(e,r){return{$:3,a:e,b:r}}),v4={src:`
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
    `,attributes:{},uniforms:{constantColor:"aJ",pointRadius:"ch",sceneProperties:"f"}},Wl={src:`
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
    `,attributes:{position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"ch",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$4=R(function(e,r,n,a){return c(Gl,n,oe(function(i,l,u,v,$,f,d,p){return P(ue,p,Wl,v4,a,{aJ:e,c:u,d:l,ch:r,e:f,f:i,g:$})}))}),di={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a1",sceneProperties:"f"}},ra=function(e){var r=e;return r},it=d$,fr=xe(function(e,r,n,a,i){return c(he,n,oe(function(l,u,v,$,f,d,p,g){return P(ue,t(Fe,$,i,g),Hl,di,a,{a1:c(it,ra(r),e),c:v,d:u,e:d,f:l,g:f})}))}),s4={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a1",pointRadius:"ch",sceneProperties:"f"}},f4=xe(function(e,r,n,a,i){return c(Gl,a,oe(function(l,u,v,$,f,d,p,g){return P(ue,g,Wl,s4,i,{a1:c(it,ra(r),e),c:v,d:u,ch:n,e:d,f:l,g:f})}))}),Il={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"by",lights34:"b9",lights56:"ca",lights78:"cb",materialColor:"c_",sceneProperties:"f",viewMatrix:"g"}},Ul={src:`
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
    `,attributes:{normal:"s",position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ua=R(function(e,r,n,a){return c(he,r,oe(function(i,l,u,v,$,f,d,p){var g=d.a,m=d.b;return P(ue,t(Fe,v,a,p),Ul,Il,n,{U:m,by:g.by,b9:g.b9,ca:g.ca,cb:g.cb,c_:e,c:u,d:l,e:f,f:i,g:$})}))}),Ol={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"by",lights34:"b9",lights56:"ca",lights78:"cb",materialColorTexture:"c$",normalMapTexture:"bb",sceneProperties:"f",useNormalMap:"bi",viewMatrix:"g"}},ql={src:`
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
    `,attributes:{normal:"s",position:"cj",tangent:"eU",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},m4=rr(function(e,r,n,a,i,l){return c(he,a,oe(function(u,v,$,f,d,p,g,m){var _=g.a,h=g.b;return P(ue,t(Fe,f,l,m),ql,Ol,i,{U:h,by:_.by,b9:_.b9,ca:_.ca,cb:_.cb,c$:e,c:$,d:v,bb:r,e:p,f:u,bi:n,g:d})}))}),Yl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cB",constantBaseColor:"cF",constantMetallic:"cG",constantRoughness:"cH",enabledLights:"U",lights12:"by",lights34:"b9",lights56:"ca",lights78:"cb",metallicTexture:"c3",normalMapTexture:"bb",roughnessTexture:"ds",sceneProperties:"f",useNormalMap:"bi",viewMatrix:"g"}},d4=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return function(d){return c(he,$,oe(function(p,g,m,_,h,y,S,w){var C=S.a,F=S.b;return P(ue,t(Fe,_,d,w),ql,Yl,f,{cB:e,cF:r,cG:l,cH:a,U:F,by:C.by,b9:C.b9,ca:C.ca,cb:C.cb,c3:i,c:m,d:g,bb:u,e:y,ds:n,f:p,bi:v,g:h})}))}}}}}}}}}}},Zl={src:`
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
    `,attributes:{},uniforms:{baseColor:"cA",enabledLights:"U",lights12:"by",lights34:"b9",lights56:"ca",lights78:"cb",metallic:"c2",roughness:"dr",sceneProperties:"f",viewMatrix:"g"}},va=rr(function(e,r,n,a,i,l){return c(he,a,oe(function(u,v,$,f,d,p,g,m){var _=g.a,h=g.b;return P(ue,t(Fe,f,l,m),Ul,Zl,i,{cA:e,U:h,by:_.by,b9:_.b9,ca:_.ca,cb:_.cb,c2:n,c:$,d:v,e:p,dr:r,f:u,g:d})}))}),p4=function(e){return{$:0,a:e}},p0=s(function(e,r){return{$:1,a:e,b:r}}),Mn=s(function(e,r){if(r.$){var n=r.a.G;return k(n,1)}else return r.a,k(e,0)}),g4=function(e){return z(pn,gn(e),bn(e),hn(e),1)},pi=z(pn,0,0,0,0),ya=s(function(e,r){if(r.$){var a=r.a.G;return k(a,pi)}else{var n=r.a;return k(e,g4(n))}}),Xl=s(function(e,r){var n=k(e,r);if(n.a.$){var i=n.a.a.G;return c(p0,k(i,pi),c(Mn,i,r))}else if(n.b.$){var i=n.b.a.G;return c(p0,c(ya,i,e),c(Mn,i,r))}else{var a=n.a.a;return n.b.a,p4(a)}}),b4=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),$a=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),h4=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_4=function(e){return c(Ve,e,1)},ro=c(Ve,0,0),Wr=s(function(e,r){if(r.$){var a=r.a.G;return k(a,ro)}else{var n=r.a;return k(e,_4(n))}}),Ql=R(function(e,r,n,a){var i=z(h4,e,r,n,a);if(i.a.$){var $=i.a.a.G;return z($a,k($,pi),c(Wr,$,r),c(Wr,$,n),c(Mn,$,a))}else if(i.b.$){var $=i.b.a.G;return z($a,c(ya,$,e),k($,ro),c(Wr,$,n),c(Mn,$,a))}else if(i.c.$){var $=i.c.a.G;return z($a,c(ya,$,e),c(Wr,$,r),k($,ro),c(Mn,$,a))}else if(i.d.$){var $=i.d.a.G;return z($a,c(ya,$,e),c(Wr,$,r),c(Wr,$,n),k($,1))}else{var l=i.a.a,u=i.b.a,v=i.c.a;return i.d.a,t(b4,l,u,v)}}),w4={src:`
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
    `,attributes:{},uniforms:{backlight:"cx",colorTexture:"b0",sceneProperties:"f"}},yt=xe(function(e,r,n,a,i){return c(he,n,oe(function(l,u,v,$,f,d,p,g){return P(ue,t(Fe,$,i,g),Nl,w4,a,{cx:ra(r),b0:e,c:v,d:u,e:d,f:l,g:f})}))}),Kl={src:`
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
    `,attributes:{normal:"s",position:"cj",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},y4=R(function(e,r,n,a){return c(he,r,oe(function(i,l,u,v,$,f,d,p){var g=d.a,m=d.b;return P(ue,t(Fe,v,a,p),Kl,Ol,n,{U:m,by:g.by,b9:g.b9,ca:g.ca,cb:g.cb,c$:e,c:u,d:l,bb:e,e:f,f:i,bi:0,g:$})}))}),x4=oo(function(e,r,n,a,i,l,u,v,$){return c(he,u,oe(function(f,d,p,g,m,_,h,y){var S=h.a,w=h.b;return P(ue,t(Fe,g,$,y),Kl,Yl,v,{cB:e,cF:r,cG:l,cH:a,U:w,by:S.by,b9:S.b9,ca:S.ca,cb:S.cb,c3:i,c:p,d,bb:e,e:_,ds:n,f,bi:0,g:m})}))}),Nn=x(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),S4=function(e){var r=e;return t(Nn,r.eu,r.er,.5)},C4=function(e){var r=e;return t(Nn,r.ev,r.es,.5)},P4=function(e){var r=e;return t(Nn,r.ew,r.et,.5)},L4=function(e){return t(we,S4(e),C4(e),P4(e))},U=function(e){var r=fl(e),n=r.a,a=r.b,i=r.c;return{fe:tt(L4(e)),fB:n/2,fC:a/2,fD:i/2}},gi=s(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var v=e.b.a.G;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var i=r.a,u=r.c,a=r.d;return z(wt,v,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z(wt,v,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z(wt,v,U(i),u,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z(sr,n,U(i),u,a);case 8:var i=r.a,u=r.c;return z(sr,n,U(i),u,0);case 9:var i=r.a,u=r.c;return z(sr,n,U(i),u,0);default:var i=r.a,l=r.b,u=r.d;return z($4,n,l,U(i),u)}}case 1:if(e.b.$){e.a;var v=e.b.a.G,f=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var i=r.a,u=r.c,a=r.d;return P(yt,v,f,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return P(yt,v,f,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return P(yt,v,f,U(i),u,a);case 8:return M;case 9:return M;default:return M}}else{var $=e.b.a,f=e.c;switch(r.$){case 0:return M;case 1:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return P(fr,$,f,U(i),u,a);case 8:var i=r.a,u=r.c;return P(fr,$,f,U(i),u,0);case 9:var i=r.a,u=r.c;return P(fr,$,f,U(i),u,0);default:var i=r.a,l=r.b,u=r.d;return P(f4,$,f,l,U(i),u)}}case 2:e.a;var d=e.b,H=e.c,p=c(Xl,d,H);if(p.$){var _=p.a,h=_.a;_.b;var y=p.b,S=y.a,w=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var i=r.a,u=r.c,m=r.d;return z(y4,h,U(i),u,m);case 7:var i=r.a,u=r.c,m=r.d;return Te(m4,h,S,w,U(i),u,m);case 8:return M;case 9:return M;default:return M}}else{var g=p.a;switch(r.$){case 0:return M;case 1:return M;case 2:var i=r.a,u=r.c,m=r.d;return z(ua,g,U(i),u,m);case 3:return M;case 4:var i=r.a,u=r.c,m=r.d;return z(ua,g,U(i),u,m);case 5:return M;case 6:var i=r.a,u=r.c,m=r.d;return z(ua,g,U(i),u,m);case 7:var i=r.a,u=r.c,m=r.d;return z(ua,g,U(i),u,m);case 8:return M;case 9:return M;default:return M}}default:e.a;var C=e.b,F=e.c,W=e.d,H=e.e,N=z(Ql,C,F,W,H);if(N.$){var Q=N.a,ne=Q.a,$e=Q.b,de=N.b,ve=de.a,be=de.b,Ae=N.c,ze=Ae.a,_r=Ae.b,wr=N.d,S=wr.a,w=wr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var i=r.a,u=r.c,a=r.d;return du(x4,ne,$e,ve,be,ze,_r,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return d4(ne)($e)(ve)(be)(ze)(_r)(S)(w)(U(i))(u)(a);case 8:return M;case 9:return M;default:return M}}else{var G=N.a,I=N.b,B=N.c;switch(r.$){case 0:return M;case 1:return M;case 2:var i=r.a,u=r.c,a=r.d;return Te(va,G,I,B,U(i),u,a);case 3:return M;case 4:var i=r.a,u=r.c,a=r.d;return Te(va,G,I,B,U(i),u,a);case 5:return M;case 6:var i=r.a,u=r.c,a=r.d;return Te(va,G,I,B,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return Te(va,G,I,B,U(i),u,a);case 8:return M;case 9:return M;default:return M}}}}),xt=function(e){var r=e;return r.gF},St=function(e){var r=e;return r.gJ},Ct=function(e){var r=e;return r.dJ},z4=function(e){var r=e,n=Ct(r.dK),a=St(r.dK),i=xt(r.dK),l=Ct(r.dI),u=St(r.dI),v=xt(r.dI),$=Ct(r.dH),f=St(r.dH),d=xt(r.dH);return d*u*n+f*l*i+$*v*a-$*u*i-f*v*n-d*l*a>0},k4=function(e){var r=tt(Hr(e)),n=Ie(Tr(e)),a=Ie(Fr(e)),i=Ie(Mr(e));return{d1:z4(e),u:i.gF,v:i.gJ,w:i.dJ,x:a.gF,y:a.gJ,z:a.dJ,A:n.gF,B:n.gJ,C:n.dJ,M:r.gF,N:r.gJ,O:r.dJ,cn:1}},Ir=s(function(e,r){return{$:5,a:e,b:r}}),eu=s(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,i=n.b,l=c(ol,a,e);return c(Ir,l,i);case 1:return c(Ir,e,n);case 3:return c(Ir,e,n);case 2:return c(Ir,e,n);default:return c(Ir,e,n)}}),ru=s(function(e,r){return c(eu,k4(e),r)}),ct=function(e){return{$:2,a:e}},T4=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=r.fe;return{fe:{gF:n*l.gF,gJ:a*l.gJ,dJ:i*l.dJ},fB:n*r.fB,fC:a*r.fC,fD:i*r.fD}}),M4=b$,F4=g$,g0=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){var d=e.a,p=e.b,g=e.c,m=F4(a),_=m.gF,h=m.gJ,y=m.dJ,S=m.e0,w=M4({e0:S,gF:_*d,gJ:h*p,dJ:y*g});return Ga(r,n,w,i,l,u,v,$,f)}}}}}}}}}},no=s(function(e,r){switch(r.$){case 0:return Rl;case 5:var n=r.a,a=r.b;return c(Ir,n,c(no,e,a));case 1:var i=r.a,l=r.b;return c(he,c(T4,e,i),c(g0,e,l));case 3:return r;case 2:var l=r.a;return ct(c(g0,e,l));default:var u=r.a;return pl(c(ie,no(e),u))}}),bi=s(function(e,r){var n=r;return c(no,e,n)}),hi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},nu=7683,au=7682,D4=t(oi,{cZ:0,$7:0,dG:15},{br:Le,bL:vn,bU:Le,bV:nu},{br:Le,bL:vn,bU:Le,bV:au}),J4=t(oi,{cZ:0,$7:0,dG:15},{br:Le,bL:vn,bU:Le,bV:au},{br:Le,bL:vn,bU:Le,bV:nu}),_i=s(function(e,r){return e?c(T,J4,r):c(T,D4,r)}),A4={src:`
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
    `,attributes:{normal:"s",position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"co",viewMatrix:"g"}},B4=function(e){if(e.$){var r=e.c;return te(oe(function(n,a,i,l,u,v,$,f){return P(ue,c(_i,l,f),A4,hi,r,{c:i,d:a,e:v,f:n,co:$,g:u})}))}else return q},Ra=function(e){var r=B4(e);if(r.$)return M;var n=r.a;return ct(n)},j4=R(function(e,r,n,a){var i=c(gi,n,Bl),l=function(){var d=k(e,r);return d.a?d.b?Kn(b([i,Ra(d0)])):i:d.b?Ra(d0):M}(),u=rt(a),v=u.a,$=u.b,f=u.c;return c(ru,et(a),c(bi,A(v,$,f),l))}),V4=s(function(e,r){return z(j4,!0,!0,e,r)}),tu=s(function(e,r){return{$:0,a:e,b:r}}),R4=function(e){var r=Jo(e),n=r.dn,a=r.cM,i=r.cC;return t(Zn,n,a,i)},E4=function(e){return c(tu,0,Yt(R4(e)))},Fn=function(e){var r=e;return br(r)},N4=s(function(e,r){var n=e.cj,a=e.s;return c(T,{s:ot(a),cj:Me(n)},r)}),H4=Ha(function(e,r,n,a,i,l,u){e:for(;;)if(u.b){var v=u.a,$=u.b,f=hn(v.cj),d=bn(v.cj),p=gn(v.cj),g=c(_a,e,p),m=c(Je,r,p),_=c(_a,n,d),h=c(Je,a,d),y=c(_a,i,f),S=c(Je,l,f),w=$;e=g,r=m,n=_,a=h,i=y,l=S,u=w;continue e}else return Tl({er:r,es:a,et:l,eu:e,ev:n,ew:i})}),ou=s(function(e,r){var n=hn(e.cj),a=bn(e.cj),i=gn(e.cj);return io(H4,i,i,a,a,n,n,r)}),G4=function(e){var r=t(ec,N4,L,si(e));if(r.b){var n=r.a,a=r.b,i=c(ea,r,$i(e)),l=c(ou,n,a);return z(zl,l,e,i,0)}else return vi},b0=s(function(e,r){var n=e,a=r,i=n.dI,l=i,u=n.dH,v=u;return{gF:a.gF*v.gF+a.gJ*l.gF,gJ:a.gF*v.gJ+a.gJ*l.gJ,dJ:a.gF*v.dJ+a.gJ*l.dJ}}),Ea=function(e){var r=e;return Pr(r)},ao=function(e){return un(2*Rr*e)},W4=Sr,h0=W4({c9:Xe,dH:_l,dI:wl}),iu=function(){var e=72,r=c(qc,e,ao(1)),n=cr(1),a=Zr(Zc),i=Zr(Yc),l=cr(1),u=c(re,.5,l),v=t(we,He,He,u),$=c(re,-.5,l),f=t(we,He,He,$),d=function(m){var _=c(re,m,r),h=Zr(c(b0,h0,qt(_))),y=c(re,Fn(_),n),S=c(re,Ea(_),n),w=t(we,y,S,u),C=t(we,y,S,$),F=c(ln,e,m+1),W=c(re,F,r),H=Zr(c(b0,h0,qt(W))),N=c(re,Fn(W),n),G=c(re,Ea(W),n),I=t(we,N,G,$),B=t(we,N,G,u);return b([A({s:i,cj:f},{s:i,cj:I},{s:i,cj:C}),A({s:h,cj:C},{s:H,cj:I},{s:H,cj:B}),A({s:h,cj:C},{s:H,cj:B},{s:h,cj:w}),A({s:a,cj:v},{s:a,cj:w},{s:a,cj:B})])},p=c(ie,d,c(on,0,e-1)),g=eo(We(p));return ui(G4(g))}(),_0=Vl(iu),I4=function(e){var r=Ho(e),n=No(r),a=n.a,i=n.b;return vr({c9:Go(e),dH:a,dI:i,dK:r})},U4=R(function(e,r,n,a){var i=I4(ei(a)),l=c(gi,n,iu),u=function(){var p=k(e,r);return p.a?p.b?Kn(b([l,Ra(_0)])):l:p.b?Ra(_0):M}(),v=nl(a),$=v,f=rl(a),d=f;return c(ru,i,c(bi,A($,$,d),u))}),O4=s(function(e,r){return z(U4,!0,!0,e,r)}),w0={src:`
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
    `,attributes:{triangleVertex:"dz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bQ",viewMatrix:"g"}},y0={src:`
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
    `,attributes:{triangleVertex:"dz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bQ",viewMatrix:"g"}},Cn=function(e){var r=En(e),n=r.a,a=r.b,i=r.c,l=tn(n),u=tn(a),v=tn(i);return tr({ea:l.gF,eb:u.gF,ec:v.gF,ed:0,ee:l.gJ,ef:u.gJ,eg:v.gJ,eh:0,ei:l.dJ,ej:u.dJ,ek:v.dJ,el:0,em:0,en:0,eo:0,ep:0})},sa=Al(b([A({dz:0},{dz:1},{dz:2})])),q4=s(function(e,r){var n=Ml(r),a=U(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.G,M;var i=e.b.a;return c(he,a,oe(function(w,C,F,W,H,N,G,I){return P(ue,t(Fe,W,0,I),w0,mi,sa,{aJ:i,c:F,d:C,e:N,f:w,bQ:Cn(r),g:H})}));case 1:if(e.b.$)return e.a,M;var l=e.b.a,u=e.c;return c(he,a,oe(function(w,C,F,W,H,N,G,I){return P(ue,t(Fe,W,0,I),w0,di,sa,{a1:c(it,ra(u),l),c:F,d:C,e:N,f:w,bQ:Cn(r),g:H})}));case 2:e.a;var v=e.b,m=e.c,$=c(Xl,v,m);if($.$)return M;var f=$.a;return c(he,a,oe(function(w,C,F,W,H,N,G,I){var B=G.a,Q=G.b;return P(ue,t(Fe,W,0,I),y0,Il,sa,{U:Q,by:B.by,b9:B.b9,ca:B.ca,cb:B.cb,c_:f,c:F,d:C,e:N,f:w,bQ:Cn(r),g:H})}));default:e.a;var d=e.b,p=e.c,g=e.d,m=e.e,_=z(Ql,d,p,g,m);if(_.$)return M;var h=_.a,y=_.b,S=_.c;return c(he,a,oe(function(w,C,F,W,H,N,G,I){var B=G.a,Q=G.b;return P(ue,t(Fe,W,0,I),y0,Zl,sa,{cA:h,U:Q,by:B.by,b9:B.b9,ca:B.ca,cb:B.cb,c2:S,c:F,d:C,e:N,dr:y,f:w,bQ:Cn(r),g:H})}))}}),Y4=function(){var e=b([{bh:c(Ve,0,1)},{bh:c(Ve,1,1)},{bh:c(Ve,2,1)},{bh:c(Ve,0,-1)},{bh:c(Ve,1,-1)},{bh:c(Ve,2,-1)}]),r=b([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return c(ea,e,r)}(),Z4={src:`
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
    `,attributes:{triangleShadowVertex:"bh"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"co",triangleVertexPositions:"bQ",viewMatrix:"g"}},x0=function(e){return ct(oe(function(r,n,a,i,l,u,v,$){return P(ue,c(_i,i,$),Z4,hi,Y4,{c:a,d:n,e:u,f:r,co:v,bQ:Cn(e),g:l})}))},X4=R(function(e,r,n,a){var i=c(q4,n,a),l=k(e,r);return l.a?l.b?Kn(b([i,x0(a)])):i:l.b?x0(a):M}),Q4=s(function(e,r){return z(X4,!0,!0,e,r)}),K4=s(function(e,r){var n=rn(r),a=rn(e),i=en(r),l=en(e),u=Kr(r),v=Kr(e);return{er:c(se,v,u),es:c(se,l,i),et:c(se,a,n),eu:c(ge,v,u),ev:c(ge,l,i),ew:c(ge,a,n)}}),e5=function(e){var r=Yo(e),n=r.a,a=r.b;return c(K4,n,a)},S0={src:`
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
    `,attributes:{lineSegmentVertex:"d9"},uniforms:{lineSegmentEndPoint:"d7",lineSegmentStartPoint:"d8",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},r5=s(function(e,r){return{$:1,a:e,b:r}}),n5=r5({dT:2,d0:0,ey:1}),C0=n5(b([k({d9:0},{d9:1})])),a5=s(function(e,r){var n=e5(r),a=U(n),i=Yo(r),l=i.a,u=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.G,M;var v=e.b.a;return c(he,a,oe(function(f,d,p,g,m,_,h,y){return P(ue,y,S0,mi,C0,{aJ:v,d7:Me(u),d8:Me(l),c:p,d,e:_,f,g:m})}));case 1:if(e.b.$)return M;var v=e.b.a,$=e.c;return c(he,a,oe(function(d,p,g,m,_,h,y,S){return P(ue,S,S0,di,C0,{a1:c(it,ra($),v),d7:Me(u),d8:Me(l),c:g,d:p,e:h,f:d,g:_})}));case 2:return M;default:return M}}),t5=s(function(e,r){return c(a5,e,r)}),P0=s(function(e,r){var n=e,a=r;return n/a}),o5=xe(function(e,r,n,a,i){e:for(;;){var l=a(r/n),u=c(T,l,i);if(gr(r,e))return u;var v=e,$=r-1,f=n,d=a,p=u;e=v,r=$,n=f,a=d,i=p;continue e}}),L0=s(function(e,r){return e<1?L:P(o5,0,e,e,r,L)}),i5=s(function(e,r){var n=e.cj,a=e.s,i=e.Q,l=i,u=l.a,v=l.b;return c(T,{s:ot(a),cj:Me(n),Q:c(Ve,u,v)},r)}),c5=function(e){var r=t(ec,i5,L,si(e));if(r.b){var n=r.a,a=r.b,i=c(ea,r,$i(e)),l=c(ou,n,a);return z(kl,l,e,i,0)}else return vi},cu=s(function(e,r){var n=e,a=r,i=br(a);return{gF:i*br(n),gJ:i*Pr(n),dJ:Pr(a)}}),l5=function(){var e=cr(1),r=72,n=c(on,0,r-1),a=c(L0,r,c(Nn,He,ao(1))),i=xo(r/2),l=c(on,0,i-1),u=c(L0,i,c(Nn,Yr(90),Yr(-90))),v=fi(We(c(ie,function(d){return c(ie,function(p){return{s:Zr(c(cu,d,p)),cj:t(we,c(re,Fn(p)*Fn(d),e),c(re,Fn(p)*Ea(d),e),c(re,Ea(p),e)),Q:k(c(P0,d,ao(1)),c(P0,c(Tn,Yr(90),p),Yr(180)))}},u)},a))),$=s(function(d,p){return d*(i+1)+p}),f=We(c(ie,function(d){return We(c(ie,function(p){var g=c($,d+1,p),m=c($,d,p),_=c($,d+1,p+1),h=c($,d,p+1);return b([A(h,_,g),A(h,g,m)])},l))},n));return ui(c5(c(jl,v,f)))}(),Na=72,fa=2*Na,u5=s(function(e,r){e:for(;;){var n=fa+1,a=c(ln,fa,2*e+3),i=c(ln,fa,2*e+2),l=2*e+1,u=2*e,v=fa,$=c(T,A(v,u,i),c(T,A(u,a,i),c(T,A(u,l,a),c(T,A(l,n,a),r))));if(e){var f=e-1,d=$;e=f,r=d;continue e}else return $}}),v5=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$5=s(function(e,r){e:for(;;){var n=t(v5,0,2*Rr,e/Na),a={bX:n,ce:0,cm:1},i={bX:n,ce:1,cm:1},l=c(T,a,c(T,i,r));if(e){var u=e-1,v=l;e=u,r=v;continue e}else return l}}),s5=function(){var e=c($5,Na-1,b([{bX:0,ce:0,cm:0},{bX:0,ce:1,cm:0}])),r=c(u5,Na-1,L);return c(ea,e,r)}(),f5={src:`
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
    `,attributes:{angle:"bX",offsetScale:"ce",radiusScale:"cm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"co",viewMatrix:"g"}},z0=function(e){return ct(oe(function(r,n,a,i,l,u,v,$){return P(ue,c(_i,!0,$),f5,hi,s5,{aJ:t(Zn,0,0,1),c:a,d:n,e:u,f:r,co:v,g:l})}))},m5=function(e){var r=Dl(e);return{d1:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,M:r.gF,N:r.gJ,O:r.dJ,cn:1}},d5=s(function(e,r){return c(eu,m5(e),r)}),p5=R(function(e,r,n,a){var i=c(gi,n,l5),l=function(){var $=k(e,r);return $.a?$.b?Kn(b([i,z0()])):i:$.b?z0():M}(),u=at(a),v=u;return c(d5,c(ja,Xe,nt(a)),c(bi,A(v,v,v),l))}),g5=s(function(e,r){return z(p5,!0,!0,e,r)}),b5=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),h5=xe(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),_5=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return c(tu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return t(b5,n,a,r);case 2:var n=e.a,a=e.b,u=e.c;return t(Kc,n,a,u);default:var n=e.a,a=e.b,i=e.c,l=e.d,u=e.e;return P(h5,n,a,i,l,u)}},w5=_5,lu=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return b([c(V4,i,r)]);case 1:var i=e.a,n=e.b;return b([c(Q4,i,n)]);case 3:var i=e.a,a=e.b;return b([c(g5,w5(i),a)]);case 2:var i=e.a,l=e.b;return b([c(O4,i,l)]);case 4:var u=e.a,v=e.b;return b([c(t5,E4(u),v)]);default:var $=e.a;return c(ri,lu,$)}},y5=function(e){return c(ri,lu,e)},x5=s(function(e,r){return M2({aY:Um(e.e6),fb:e.fb,aZ:Om(.5),cJ:e.cJ,a_:k(t0(er(e.bF.gD)),t0(er(e.bF.fF))),a3:y5(r),gl:!0,gt:c(cu,un(e.gs),un(e.gu)),eY:Xa})}),S5=s(function(e,r){return c(x5,{e6:c(Qc,Vn(r.l).e7,Vn(r.l).bB),fb:Oc(e),cJ:e.cJ,bF:e.bF,gs:mr(225),gu:mr(315)},b([Zt(b([Zt(L),c(Im,e,r)]))]))}),C5={$:5},P5={$:7},L5={$:4},z5={$:3},k5={$:6},T5=function(e){var r=e;return r.n},M5=function(e){return Ke(T5(e))+1},Ur=s(function(e,r){return c(Za,b([V("m-1 p-2 rounded bg-black40 hover:bg-black80"),On(e)]),b([ae(r)]))}),F5=function(e){var r=e;return 1+Ke(r.n)+Ke(r.F)},uu=Oe("span"),D5=function(e){return c(E,b([V("p-4 border-[0.5px] border-white20")]),b([c(E,b([V("text-lg")]),b([ae("Level Selection")])),c(yr,L,b([c(Ur,z5,"<"),c(uu,b([c(ce,"margin","10px")]),b([ae(Vo(b([ye(M5(e.l))," / ",ye(F5(e.l))])))])),c(Ur,L5,">")])),c(Ur,C5,"Add level"),c(Ur,k5,"Remove current level"),c(Ur,P5,"Move level one up")]))},J5={$:2},A5=function(e){return{$:0,a:e}},B5=c(ee,function(e){return e.l},c(ee,Vn,function(e){return e.bB})),j5=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},V5=function(e){return c(Fo,"change",c(An,e,jc))},R5=Oe("option"),to=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},E5=function(e){return c(R5,b([Yn(to(e))]),b([ae(to(e))]))},N5=Oe("select"),H5=function(e){return c(E,b([V("p-2")]),b([c(uu,b([V("p-2")]),b([ae("Choose a palette:")])),c(N5,b([V("p-2 text-white80 bg-black20"),V5(c(ee,j5,A5)),Yn(to(B5(e)))]),c(ie,E5,b([2,0,1,3,4])))]))},G5=function(e){return{$:1,a:e}},W5=s(function(e,r){var n=r.a,a=r.b,i=s(function(l,u){return c(e,l+1,u)});return c(dn,c(e,0,n),c(yo,i,a))}),I5=function(e){var r=e.a,n=e.b;return c(T,r,n)},U5=function(e){var r=Vn(e.l),n=20,a=0,i=13,l=2,u=s(function(v,$){var f=(v/n|0)*(i+a),d=c(ln,n,v)*(i+a),p=gr(e.aB,v)?k(l,i-2*l):k(0,i),g=p.a,m=p.b;return c(E,b([c(ce,"position","absolute"),c(ce,"width",le(m)+"px"),c(ce,"height",le(m)+"px"),c(ce,"background-color",tl($)),c(ce,"transform","translate("+(le(d)+("px,"+(le(f)+"px)")))),On(G5(v)),c(ce,"border","solid white "+(le(g)+"px"))]),L)});return c(E,b([V("h-[200px]")]),I5(c(W5,u,Xc(r.bB))))},O5=function(e){return c(E,b([V("p-4 border-[0.5px] border-white20")]),b([c(E,b([V("text-lg")]),b([ae("Color Palette")])),H5(e),c(Ur,J5,"Set selected as background"),c(E,L,b([ae(ye(e.aB))])),U5(e)]))},q5=c(E,b([V("p-4 border-[0.5px] border-white20")]),b([c(E,b([V("text-lg")]),b([ae("Instructions")])),c(E,b([V("pl-2")]),b([ae("- Press mouse to add trixel")])),c(E,b([V("pl-2")]),b([ae("- Hold shift and press mouse to remove trixel")]))])),Y5=s(function(e,r){return c(E,b([V("w-full overflow-y-scroll text-xs bg-black20"),c(ce,"height",le(e.bF.fF-140)+"px")]),b([c(E,b([V("relative")]),b([q5,O5(r),D5(r)]))]))}),Z5=Te(V1,S5,qf,U1,H1,Y5,nm);const X5={Main:{init:Z5(c(J,function(e){return je({fN:e})},c(D,"inputs",c(J,function(e){return c(J,function(r){return c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return je({dP:u,cJ:l,fs:i,d3:a,ci:n,bF:r,gC:e})},c(D,"clock",pe))},c(D,"devicePixelRatio",pe))},c(D,"dt",pe))},c(D,"keyboard",c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return c(J,function(d){return c(J,function(p){return je({e2:p,fi:d,dS:f,fr:$,fU:v,gc:u,gh:l,eP:i,eX:a})},c(D,"alt",K))},c(D,"control",K))},c(D,"down",K))},c(D,"downs",Ta(jn)))},c(D,"left",K))},c(D,"pressedKeys",Ta(jn)))},c(D,"right",K))},c(D,"shift",K))},c(D,"up",K))))},c(D,"pointer",c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return je({dS:f,cO:$,f$:v,gi:u,gj:l,eX:i,gF:a,gJ:n})},c(D,"down",K))},c(D,"isDown",K))},c(D,"move",K))},c(D,"rightDown",K))},c(D,"rightUp",K))},c(D,"up",K))},c(D,"x",pe))},c(D,"y",pe))))},c(D,"screen",c(J,function(r){return c(J,function(n){return je({fF:n,gD:r})},c(D,"height",pe))},c(D,"width",pe))))},c(D,"wheel",c(J,function(e){return c(J,function(r){return je({fl:r,fm:e})},c(D,"deltaX",pe))},c(D,"deltaY",pe)))))))(0)}},j={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Q5=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),i=m=>m.code=="ArrowLeft",l=m=>m.code=="ArrowRight",u=m=>m.code=="ArrowUp",v=m=>m.code=="ArrowDown",$=m=>m.button==0,f=m=>m.button==2;function d(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function p(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(j.keyboard.downs.push(m.code),j.keyboard.pressedKeys.push(m.code),r(m)&&(j.keyboard.control=!0),n(m)&&(j.keyboard.alt=!0),a(m)&&(j.keyboard.shift=!0),i(m)&&(j.keyboard.left=!0),l(m)&&(j.keyboard.right=!0),u(m)&&(j.keyboard.up=!0),v(m)&&(j.keyboard.down=!0))}),window.addEventListener("keyup",m=>{j.keyboard.pressedKeys=j.keyboard.pressedKeys.filter(_=>_!=m.code),r(m)&&(j.keyboard.control=!1,j.keyboard.pressedKeys=[]),n(m)&&(j.keyboard.alt=!1),a(m)&&(j.keyboard.shift=!1),i(m)&&(j.keyboard.left=!1),l(m)&&(j.keyboard.right=!1),u(m)&&(j.keyboard.up=!1),v(m)&&(j.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{j.pointer.x=-.5*j.screen.width+m.pageX,j.pointer.y=.5*j.screen.height-m.pageY,$(m)&&(j.pointer.down=!0,j.pointer.isDown=!0),f(m)&&(j.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{j.pointer.move=!0,j.pointer.x=-.5*j.screen.width+m.pageX,j.pointer.y=.5*j.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{$(m)&&(j.pointer.up=!0,j.pointer.isDown=!1),f(m)&&(j.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{$(m)&&(j.pointer.up=!0,j.pointer.isDown=!1),f(m)&&(j.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{j.wheel.deltaX=m.deltaX,j.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{d(j)}),window.addEventListener("focus",m=>{d(j)}),window.addEventListener("visibilitychange",m=>{d(j)}),window.addEventListener("resize",()=>{j.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(m){const _=m/1e3,h=_-j.clock;h<.009||(j.dt=h,j.clock=_,e.ports.tick.send(j),p(j)),window.requestAnimationFrame(g)}},K5=()=>{Pt("pointerdown"),Pt("wheel"),Pt("keydown")},Pt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},e6=X5.Main.init({node:document.querySelector("#app div"),flags:{inputs:j}});K5();Q5(e6);
