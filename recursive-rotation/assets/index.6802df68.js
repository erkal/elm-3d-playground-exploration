(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function mr(e,r,n){return n.a=e,n.f=r,n}function $(e){return mr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ye(e){return mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ee(e){return mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ut(e){return mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ve(e){return mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function vt(e){return mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function x(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function me(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Qo(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Xn(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Cl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var yl=[];function Ll(e){return e.length}var Sl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),wl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),xl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Tl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Pl()),r});function Pl(e){return"<internals>"}function jr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Lr(e,r){for(var n,a=[],t=Ra(e,r,0,a);t&&(n=a.pop());t=Ra(n.a,n.b,0,a));return t}function Ra(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&jr(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=so(e),r=so(r));for(var t in e)if(!Ra(e[t],r[t],n+1,a))return!1;return!0}$(Lr);$(function(e,r){return!Lr(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return Y(e,r)<0});$(function(e,r){return Y(e,r)<1});$(function(e,r){return Y(e,r)>0});$(function(e,r){return Y(e,r)>=0});var Ml=$(function(e,r){var n=Y(e,r);return n<0?wi:n?f$:Si}),mn=0;function z(e,r){return{a:e,b:r}}function X(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(oe);function oe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=qe(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=qe(e.a,r);return n}var T={$:0};function qe(e,r){return{$:1,a:e,b:r}}var zl=$(qe);function g(e){for(var r=T,n=e.length;n--;)r=qe(e[n],r);return r}function Qn(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var kl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});ye(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(x(e,r.a,n.a,a.a,t.a));return g(i)});Ee(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(Qn(r).sort(function(n,a){return Y(e(n),e(a))}))});$(function(e,r){return g(Qn(r).sort(function(n,a){var t=o(e,n,a);return t===Si?0:t===wi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Dl=$(Math.pow);$(function(e,r){return r%e});var Al=$(function(e,r){var n=r%e;return e===0?jr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Bl=Math.PI,Fl=Math.cos,Rl=Math.sin;$(Math.atan2);function El(e){return e}function Ul(e){return e===1/0||e===-1/0}var Vl=Math.ceil,Nl=Math.floor,Gl=Math.round,jl=Math.sqrt,Kt=Math.log,Hl=isNaN;function Wl(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Il=$(function(e,r){return e+r});function Yl(e){var r=e.charCodeAt(0);return isNaN(r)?O:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function Jl(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Ol(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var ql=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Zl=$(function(e,r){return r.split(e)}),Xl=$(function(e,r){return r.join(e)}),Ql=y(function(e,r,n){return n.slice(e,r)});function Kl(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var eu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),ru=$(function(e,r){return r.indexOf(e)>-1}),nu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var au=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function Ko(e){return e+""}function tu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return O;r=10*r+i-48}return t==a?O:ne(n==45?-r:r)}function ou(e){if(e.length===0||/[\sxbo]/.test(e))return O;var r=+e;return r===r?ne(r):O}function iu(e){return Qn(e).join("")}function cu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function lu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function uu(e){return{$:0,a:e}}function $t(e){return{$:2,b:e}}var vu=$t(function(e){return typeof e=="boolean"?ie(e):Ie("a BOOL",e)}),$u=$t(function(e){return typeof e=="number"?ie(e):Ie("a FLOAT",e)}),fu=$t(function(e){return typeof e=="string"?ie(e):e instanceof String?ie(e+""):Ie("a STRING",e)});function su(e){return{$:3,b:e}}var mu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function dr(e,r){return{$:9,f:e,g:r}}var du=$(function(e,r){return{$:10,b:r,h:e}}),pu=$(function(e,r){return dr(e,[r])}),bu=y(function(e,r,n){return dr(e,[r,n])});F(function(e,r,n,a){return dr(e,[r,n,a])});ye(function(e,r,n,a,t){return dr(e,[r,n,a,t])});Ee(function(e,r,n,a,t,i){return dr(e,[r,n,a,t,i])});ut(function(e,r,n,a,t,i,c){return dr(e,[r,n,a,t,i,c])});ve(function(e,r,n,a,t,i,c,l){return dr(e,[r,n,a,t,i,c,l])});vt(function(e,r,n,a,t,i,c,l,u){return dr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Be(e,n)}catch(a){return de(o(Lt,"This is not valid JSON! "+a.message,r))}});var ei=$(function(e,r){return Be(e,r)});function Be(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ie(e.c):Ie("null",r);case 3:return _n(r)?eo(e.b,r,g):Ie("a LIST",r);case 4:return _n(r)?eo(e.b,r,gu):Ie("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ie("an OBJECT with a field named `"+n+"`",r);var v=Be(e.b,r[n]);return Ve(v)?v:de(o(mo,n,v.a));case 7:var a=e.e;if(!_n(r))return Ie("an ARRAY",r);if(a>=r.length)return Ie("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Be(e.b,r[a]);return Ve(v)?v:de(o(xi,a,v.a));case 8:if(typeof r!="object"||r===null||_n(r))return Ie("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=Be(e.b,r[i]);if(!Ve(v))return de(o(mo,i,v.a));t=qe(z(i,v.a),t)}return ie(Pe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Be(l[u],r);if(!Ve(v))return v;c=c(v.a)}return ie(c);case 10:var v=Be(e.b,r);return Ve(v)?Be(e.h(v.a),r):v;case 11:for(var s=T,m=e.g;m.b;m=m.b){var v=Be(m.a,r);if(Ve(v))return v;s=qe(v.a,s)}return de(s$(Pe(s)));case 1:return de(o(Lt,e.a,r));case 0:return ie(e.a)}}function eo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Be(e,r[i]);if(!Ve(c))return de(o(xi,i,c.a));t[i]=c.a}return ie(n(t))}function _n(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function gu(e){return o(z$,e.length,function(r){return e[r]})}function Ie(e,r){return de(o(Lt,"Expecting "+e,r))}function Br(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Br(e.b,r.b);case 6:return e.d===r.d&&Br(e.b,r.b);case 7:return e.e===r.e&&Br(e.b,r.b);case 9:return e.f===r.f&&ro(e.g,r.g);case 10:return e.h===r.h&&Br(e.b,r.b);case 11:return ro(e.g,r.g)}}function ro(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Br(e[a],r[a]))return!1;return!0}var hu=$(function(e,r){return JSON.stringify(r,null,e)+""});function ri(e){return e}y(function(e,r,n){return n[e]=r,n});function xr(e){return{$:0,a:e}}function _u(e){return{$:1,a:e}}function or(e){return{$:2,b:e,c:null}}var Ea=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Cu(e){return{$:5,b:e}}var yu=0;function ft(e){var r={$:0,e:yu++,f:e,g:null,h:[]};return st(r),r}function ni(e){return or(function(r){r(xr(ft(e)))})}function ai(e,r){e.h.push(r),st(e)}var Lu=$(function(e,r){return or(function(n){ai(e,r),n(xr(mn))})}),$a=!1,no=[];function st(e){if(no.push(e),!$a){for($a=!0;e=no.shift();)Su(e);$a=!1}}function Su(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,st(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return mt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function mt(e,r,n,a,t,i){var c=o(ei,e,r?r.flags:void 0);Ve(c)||jr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=wu(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),to(l,b.b,t(v))}return to(l,u.b,t(v)),m?{ports:m}:{}}var Je={};function wu(e,r){var n;for(var a in Je){var t=Je[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Tu(t,r)}return n}function xu(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Tu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ea,l,Cu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?x(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=ft(o(Ea,l,e.b))}var Pu=$(function(e,r){return or(function(n){e.g(r),n(xr(mn))})});$(function(e,r){return o(Lu,e.h,{$:0,a:r})});function ti(e){return function(r){return{$:1,k:e,l:r}}}function Mu(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ao=[],fa=!1;function to(e,r,n){if(ao.push({p:e,q:r,r:n}),!fa){fa=!0;for(var a;a=ao.shift();)zu(a.p,a.q,a.r);fa=!1}}function zu(e,r,n){var a={};An(!0,r,a,null),An(!1,n,a,null);for(var t in e)ai(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function An(e,r,n,a){switch(r.$){case 1:var t=r.k,i=ku(e,t,a,r.l);n[t]=Du(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)An(e,c.a,n,a);return;case 3:An(e,r.o,n,{s:r.n,t:a});return}}function ku(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Je[r].e:Je[r].f;return o(i,t,a)}function Du(e,r,n){return n=n||{i:T,j:T},e?n.i=qe(r,n.i):n.j=qe(r,n.j),n}function Au(e){Je[e]&&jr(3)}$(function(e,r){return r});function Bu(e,r){return Au(e),Je[e]={f:Fu,u:r,a:Ru},ti(e)}var Fu=$(function(e,r){return function(n){return e(r(n))}});function Ru(e,r){var n=T,a=Je[e].u,t=xr(null);Je[e].b=t,Je[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ei,a,c);Ve(l)||jr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Bn,rr=typeof document<"u"?document:{};function dt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(vr(e,function(){}),t),{}});function Ua(e){return{$:0,a:e}}var oi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:pt(n),e:t,f:e,b:i}})}),Tr=oi(void 0),Eu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:pt(n),e:t,f:e,b:i}})}),Uu=Eu(void 0);function Vu(e,r,n,a){return{$:3,d:pt(e),g:r,h:n,i:a}}var Nu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return pr([e,r],function(){return e(r)})});y(function(e,r,n){return pr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return pr([e,r,n,a],function(){return p(e,r,n,a)})});ye(function(e,r,n,a,t){return pr([e,r,n,a,t],function(){return x(e,r,n,a,t)})});Ee(function(e,r,n,a,t,i){return pr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ut(function(e,r,n,a,t,i,c){return pr([e,r,n,a,t,i,c],function(){return me(e,r,n,a,t,i,c)})});ve(function(e,r,n,a,t,i,c,l){return pr([e,r,n,a,t,i,c,l],function(){return Qo(e,r,n,a,t,i,c,l)})});vt(function(e,r,n,a,t,i,c,l,u){return pr([e,r,n,a,t,i,c,l,u],function(){return Xn(e,r,n,a,t,i,c,l,u)})});var ii=$(function(e,r){return{$:"a0",n:e,o:r}}),Gu=$(function(e,r){return{$:"a1",n:e,o:r}}),ci=$(function(e,r){return{$:"a2",n:e,o:r}}),br=$(function(e,r){return{$:"a3",n:e,o:r}}),ju=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Hu(e){return e=="script"?"p":e}function Wu(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(ii,r.n,Iu(e,r.o)):r});function Iu(e,r){var n=Pt(r);return{$:r.$,a:n?p(k$,n<3?Yu:Ju,we(e),r.a):o(Un,e,r.a)}}var Yu=$(function(e,r){return z(e(r.a),r.b)}),Ju=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function pt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?oo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?oo(c,t,i):c[t]=i}return r}function oo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function vr(e,r){var n=e.$;if(n===5)return vr(e.k||(e.k=e.m()),r);if(n===0)return rr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=vr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Va(c,r,e.d),c}var c=e.f?rr.createElementNS(e.f,e.c):rr.createElement(e.c);Bn&&e.c=="a"&&c.addEventListener("click",Bn(c)),Va(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)dt(c,vr(n===1?l[u]:l[u].b,r));return c}function Va(e,r,n){for(var a in n){var t=n[a];a==="a1"?Ou(e,t):a==="a0"?Xu(e,r,t):a==="a3"?qu(e,t):a==="a4"?Zu(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Ou(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function qu(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Zu(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Xu(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Qu(r,i),e.addEventListener(t,c,bt&&{passive:Pt(i)<2}),a[t]=c}}var bt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){bt=!0}}))}catch{}function Qu(e,r){function n(a){var t=n.q,i=Be(t.a,a);if(!!Ve(i)){for(var c=Pt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function Ku(e,r){return e.$==r.$&&Br(e.a,r.a)}function li(e,r){var n=[];return Ne(e,r,n,0),n}function fe(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ne(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=cv(r),i=1;else{fe(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ne(e.k,r.k,s,0),s.length>0&&fe(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){fe(n,0,a,r);return}(f?!ev(m,d):m!==d)&&fe(n,2,a,d),Ne(h,b,n,a+1);return;case 0:e.a!==r.a&&fe(n,3,a,r.a);return;case 1:io(e,r,n,a,rv);return;case 2:io(e,r,n,a,nv);return;case 3:if(e.h!==r.h){fe(n,0,a,r);return}var C=gt(e.d,r.d);C&&fe(n,4,a,C);var L=r.i(e.g,r.g);L&&fe(n,5,a,L);return}}}function ev(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function io(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){fe(n,0,a,r);return}var i=gt(e.d,r.d);i&&fe(n,4,a,i),t(e,r,n,a)}function gt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=gt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Ku(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function rv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?fe(n,6,a,{v:l,i:c-l}):c<l&&fe(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ne(s,i[v],n,++a),a+=s.b||0}}function nv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],C=h.a,L=b.a,_=h.b,w=b.b,D=void 0,W=void 0;if(C===L){f++,Ne(_,w,t,f),f+=_.b||0,m++,d++;continue}var N=l[m+1],U=u[d+1];if(N){var G=N.a,j=N.b;W=L===G}if(U){var E=U.a,q=U.b;D=C===E}if(D&&W){f++,Ne(_,q,t,f),qr(i,t,C,w,d,c),f+=_.b||0,f++,Zr(i,t,C,j,f),f+=j.b||0,m+=2,d+=2;continue}if(D){f++,qr(i,t,L,w,d,c),Ne(_,q,t,f),f+=_.b||0,m+=1,d+=2;continue}if(W){f++,Zr(i,t,C,_,f),f+=_.b||0,f++,Ne(j,w,t,f),f+=j.b||0,m+=2,d+=1;continue}if(N&&G===E){f++,Zr(i,t,C,_,f),qr(i,t,L,w,d,c),f+=_.b||0,f++,Ne(j,q,t,f),f+=j.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Zr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var J=J||[],b=u[d];qr(i,t,b.a,b.b,void 0,J),d++}(t.length>0||c.length>0||J)&&fe(n,8,a,{w:t,x:c,y:J})}var ui="_elmW6BL";function qr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ne(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}qr(e,r,n+ui,a,t,i)}function Zr(e,r,n,a,t){var i=e[n];if(!i){var c=fe(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ne(a,i.z,l,t),fe(r,9,t,{w:l,A:i});return}Zr(e,r,n+ui,a,t)}function vi(e,r,n,a){Xr(e,r,n,0,0,r.b,a)}function Xr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)vi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Xr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Xr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Xr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var L=d===1?h[C]:h[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=Xr(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function $i(e,r,n,a){return n.length===0?e:(vi(e,r,n,a),Fn(e,n))}function Fn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=av(t,a);t===e&&(e=i)}return e}function av(e,r){switch(r.$){case 0:return tv(e,r.s,r.u);case 4:return Va(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Fn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(vr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Fn(e,i.w),e;case 8:return ov(e,r);case 5:return r.s(e);default:jr(10)}}function tv(e,r,n){var a=e.parentNode,t=vr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function ov(e,r){var n=r.s,a=iv(n.y,r);e=Fn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:vr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&dt(e,a),e}function iv(e,r){if(!!e){for(var n=rr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;dt(n,i.c===2?i.s:vr(i.z,r.u))}return n}}function ht(e){if(e.nodeType===3)return Ua(e.textContent);if(e.nodeType!==1)return Ua("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=qe(o(br,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=qe(ht(v[a]),u);return p(Tr,l,r,u)}function cv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var lv=F(function(e,r,n,a){return mt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=ht(l);return fi(i,function(v){var s=c(v),m=li(u,s);l=$i(l,u,m,t),u=s})})});F(function(e,r,n,a){return mt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=rr.title,v=rr.body,s=ht(v);return fi(i,function(m){Bn=c;var d=l(m),f=Tr("body")(T)(d.eu),h=li(s,f);v=$i(v,s,h,t),s=f,Bn=0,u!==d.fL&&(rr.title=u=d.fL)})})});var Rn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function fi(e,r){r(e);var n=0;function a(){n=n===1?0:(Rn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Rn(a),n=2)}}$(function(e,r){return o(kt,Mt,or(function(){r&&history.go(r),e()}))});$(function(e,r){return o(kt,Mt,or(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(kt,Mt,or(function(){history.replaceState({},"",r),e()}))});var uv={addEventListener:function(){},removeEventListener:function(){}},vv=typeof window<"u"?window:uv;y(function(e,r,n){return ni(or(function(a){function t(i){ft(n(i))}return e.addEventListener(r,t,bt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Be(e,r);return Ve(n)?ne(n.a):O});function si(e,r){return or(function(n){Rn(function(){var a=document.getElementById(e);n(a?xr(r(a)):_u(A$(e)))})})}function $v(e){return or(function(r){Rn(function(){r(xr(e()))})})}$(function(e,r){return si(r,function(n){return n[e](),mn})});$(function(e,r){return $v(function(){return vv.scroll(e,r),mn})});y(function(e,r,n){return si(e,function(a){return a.scrollLeft=r,a.scrollTop=n,mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var fv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return O}});$(function(e,r){return r.match(e)!==null});var sv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):O}a.push(x(uc,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):O}return n(x(uc,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var co=0;function cn(e,r){for(;r.b;r=r.b)e(r.a)}function _t(e){for(var r=0;e.b;e=e.b)r++;return r}var mv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},dv=ye(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),pv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),bv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),gv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),hv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),_v=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Cv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),yv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Lv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Sv=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},wv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},xv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Tv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},di=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Pv=function(e){e.gl.disable(e.gl.CULL_FACE)},Mv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},zv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},kv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},lo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Dv=[wv,xv,Tv,mi,di,Pv,Mv,zv,kv];function uo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Av(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function pi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Bv(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,L){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[L]:C[L][_];else i.forEach(function(w){for(_=0;_<h;_++)f[b++]=h===1?C[w][L]:C[w][L][_]})}var u=pi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(_t(n.b)*s);cn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Fv(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Rv(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*_t(r.b),indexBuffer:null,buffers:{}}}function Rv(e,r){var n=new Uint32Array(_t(e)*r),a=0,t;return cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function vo(e,r){return e+"#"+r}var bi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mi(n),di(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=vo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=co++,v||(v=uo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=co++,s||(s=uo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Av(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Ev(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=vo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Uv(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Fv(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Bv(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=pi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,w=0;w<C.arraySize;w++)a.enableVertexAttribArray(h+w),a.vertexAttribPointer(h+w,C.size,C.baseType,!1,_,L*w)}for(n.toggle=!n.toggle,cn(Ym(n),i.a),u=0;u<lo.length;u++){var D=n[lo[u]];D.toggle!==n.toggle&&D.enabled&&(Dv[u](n),D.enabled=!1,D.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return cn(t,e.g),r});function Ev(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Uv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Vv=y(function(e,r,n){return Vu(r,{g:n,f:{},h:e},Yv,Jv)}),Nv=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Gv=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),jv=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Hv=$(function(e,r){e.contextAttributes.antialias=!0}),Wv=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Iv=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Yv(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};cn(function(t){return o(Im,r,t)},e.h);var n=rr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),mv(function(){return o(bi,e,n)})):(n=rr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Jv(e,r){return r.f=e.f,bi(r)}var Ov=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/qv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function qv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ct=new Float64Array(3),$o=new Float64Array(3),fo=new Float64Array(3),Zv=y(function(e,r,n){return new Float64Array([e,r,n])}),Xv=function(e){return e[0]},Qv=function(e){return e[1]},Kv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var e$=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(gi);function hi(e,r,n){return n===void 0&&(n=new Float64Array(3)),En(gi(e,r,n),n)}$(hi);function _i(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function En(e,r){r===void 0&&(r=new Float64Array(3));var n=1/_i(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var r$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Qr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Qr);function Na(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Na);$(function(e,r){var n,a=Ct,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Qr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Qr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Qr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Qr(r,a)+e[14])/n,t});var n$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var a$=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},t$=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/o$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function o$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var i$=new Float64Array(16),c$=new Float64Array(16),l$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},u$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Ci(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ee(Ci);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Ci(c,l,i,t,n,a)});function yi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ee(yi);F(function(e,r,n,a){return yi(e,r,n,a,-1,1)});function Li(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],C=e[13],L=e[14],_=e[15],w=r[0],D=r[1],W=r[2],N=r[3],U=r[4],G=r[5],j=r[6],E=r[7],q=r[8],J=r[9],te=r[10],ce=r[11],ae=r[12],ue=r[13],Se=r[14],ge=r[15];return n[0]=a*w+l*D+m*W+b*N,n[1]=t*w+u*D+d*W+C*N,n[2]=i*w+v*D+f*W+L*N,n[3]=c*w+s*D+h*W+_*N,n[4]=a*U+l*G+m*j+b*E,n[5]=t*U+u*G+d*j+C*E,n[6]=i*U+v*G+f*j+L*E,n[7]=c*U+s*G+h*j+_*E,n[8]=a*q+l*J+m*te+b*ce,n[9]=t*q+u*J+d*te+C*ce,n[10]=i*q+v*J+f*te+L*ce,n[11]=c*q+s*J+h*te+_*ce,n[12]=a*ae+l*ue+m*Se+b*ge,n[13]=t*ae+u*ue+d*Se+C*ge,n[14]=i*ae+v*ue+f*Se+L*ge,n[15]=c*ae+s*ue+h*Se+_*ge,n}$(Li);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],C=r[1],L=r[2],_=r[4],w=r[5],D=r[6],W=r[8],N=r[9],U=r[10],G=r[12],j=r[13],E=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*w+v*D,n[5]=t*_+l*w+s*D,n[6]=i*_+u*w+m*D,n[7]=0,n[8]=a*W+c*N+v*U,n[9]=t*W+l*N+s*U,n[10]=i*W+u*N+m*U,n[11]=0,n[12]=a*G+c*j+v*E+d,n[13]=t*G+l*j+s*E+f,n[14]=i*G+u*j+m*E+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=En(r,Ct);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/_i(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=h+f,w=b-d,D=h-f,W=c*c*v+u,N=C+m,U=b+d,G=C-m,j=l*l*v+u,E=n[0],q=n[1],J=n[2],te=n[3],ce=n[4],ae=n[5],ue=n[6],Se=n[7],ge=n[8],cr=n[9],lr=n[10],va=n[11],bl=n[12],gl=n[13],hl=n[14],_l=n[15];return a[0]=E*L+ce*_+ge*w,a[1]=q*L+ae*_+cr*w,a[2]=J*L+ue*_+lr*w,a[3]=te*L+Se*_+va*w,a[4]=E*D+ce*W+ge*N,a[5]=q*D+ae*W+cr*N,a[6]=J*D+ue*W+lr*N,a[7]=te*D+Se*W+va*N,a[8]=E*U+ce*G+ge*j,a[9]=q*U+ae*G+cr*j,a[10]=J*U+ue*G+lr*j,a[11]=te*U+Se*G+va*j,a[12]=bl,a[13]=gl,a[14]=hl,a[15]=_l,a});function v$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(v$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function $$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y($$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=hi(e,r,Ct),t=En(Na(n,a,$o),$o),i=En(Na(a,t,fo),fo),c=i$,l=c$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Li(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var B=zl,Cn=Tl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Cn,e,l,v)}else{var u=c.a;return p(Cn,i,l,u)}});return p(Cn,i,p(Cn,e,r,t),a)});var yt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(yt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),so=function(e){return p(yt,y(function(r,n,a){return o(B,z(r,n),a)}),T,e)},Si=1,f$=2,wi=0,de=function(e){return{$:1,a:e}},Lt=$(function(e,r){return{$:3,a:e,b:r}}),mo=$(function(e,r){return{$:0,a:e,b:r}}),xi=$(function(e,r){return{$:1,a:e,b:r}}),ie=function(e){return{$:0,a:e}},s$=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},O={$:1},m$=eu,d$=hu,xe=Ko,hr=$(function(e,r){return o(Xl,e,Qn(r))}),St=$(function(e,r){return g(o(Zl,e,r))}),Ti=function(e){return o(hr,`
    `,o(St,`
`,e))},dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return p(dn,$(function(r,n){return n+1}),0,e)},p$=kl,b$=y(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),wt=$(function(e,r){return p(b$,e,r,T)}),Pi=$(function(e,r){return p(p$,e,o(wt,0,Sr(r)-1),r)}),Oe=cu,Mi=function(e){var r=Oe(e);return 97<=r&&r<=122},zi=function(e){var r=Oe(e);return r<=90&&65<=r},g$=function(e){return Mi(e)||zi(e)},h$=function(e){var r=Oe(e);return r<=57&&48<=r},_$=function(e){return Mi(e)||zi(e)||h$(e)},Pe=function(e){return p(dn,B,T,e)},Hr=Yl,C$=$(function(e,r){return`

(`+(xe(e+1)+(") "+Ti(y$(r))))}),y$=function(e){return o(L$,e,T)},L$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Hr(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return g$(L)&&o(m$,_$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(xe(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(hr,"",Pe(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(xe(Sr(s))+" ways:"));return o(hr,`

`,o(B,h,o(Pi,C$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(hr,"",Pe(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(hr,"",Pe(r))+`:

    `):`Problem with the given value:

`}();return h+(Ti(o(d$,4,f))+(`

`+d))}}),Me=32,Ga=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ja=yl,ki=Vl,xt=$(function(e,r){return Kt(r)/Kt(e)}),S$=El,ln=ki(o(xt,2,Me)),Di=x(Ga,0,ln,ja,ja),Ai=Sl,Bi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Fi=Nl,Ha=Ll,wr=$(function(e,r){return Y(e,r)>0?e:r}),w$=function(e){return{$:0,a:e}},Tt=wl,x$=$(function(e,r){e:for(;;){var n=o(Tt,Me,e),a=n.a,t=n.b,i=o(B,w$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Pe(i)}}),T$=function(e){var r=e.a;return r},P$=$(function(e,r){e:for(;;){var n=ki(r/Me);if(n===1)return o(Tt,Me,e).a;var a=o(x$,e,T),t=n;e=a,r=t;continue e}}),Ri=$(function(e,r){if(r.l){var n=r.l*Me,a=Fi(o(xt,Me,n-1)),t=e?Pe(r.z):r.z,i=o(P$,t,r.l);return x(Ga,Ha(r.p)+n,o(wr,5,a*ln),i,r.p)}else return x(Ga,Ha(r.p),ln,ja,r.p)}),M$=ye(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ri,!1,{z:a,l:n/Me|0,p:t});var i=Bi(p(Ai,Me,r,e)),c=e,l=r-Me,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),z$=$(function(e,r){if(e<=0)return Di;var n=e%Me,a=p(Ai,n,e-n,r),t=e-n-Me;return S(M$,r,t,e,T,a)}),Ve=function(e){return!e.$},M=du,Z=vu,P=mu,le=$u,Un=pu,k$=bu,we=uu,Pt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Tr("div"),D$=function(e){return{$:2,a:e}},Ei=$(function(e,r){return e}),Ui=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Cr=function(e){return e},A$=Cr,po=Ee(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),B$=ru,_r=Jl,Fr=Ql,pn=$(function(e,r){return e<1?r:p(Fr,e,_r(r),r)}),Kn=au,ea=function(e){return e===""},ra=$(function(e,r){return e<1?"":p(Fr,0,e,r)}),Vi=tu,bo=ye(function(e,r,n,a,t){if(ea(t)||o(B$,"@",t))return O;var i=o(Kn,":",t);if(i.b){if(i.b.b)return O;var c=i.a,l=Vi(o(pn,c+1,t));if(l.$===1)return O;var u=l;return ne(me(po,e,o(ra,c,t),u,r,n,a))}else return ne(me(po,e,t,O,r,n,a))}),go=F(function(e,r,n,a){if(ea(a))return O;var t=o(Kn,"/",a);if(t.b){var i=t.a;return S(bo,e,o(pn,i,a),r,n,o(ra,i,a))}else return S(bo,e,"/",r,n,a)}),ho=y(function(e,r,n){if(ea(n))return O;var a=o(Kn,"?",n);if(a.b){var t=a.a;return x(go,e,ne(o(pn,t+1,n)),r,o(ra,t,n))}else return x(go,e,O,r,n)});$(function(e,r){if(ea(r))return O;var n=o(Kn,"#",r);if(n.b){var a=n.a;return p(ho,e,ne(o(pn,a+1,r)),o(ra,a,r))}else return p(ho,e,O,r)});var F$=nu,Mt=function(e){},bn=xr,R$=bn(0),Ni=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(dn,e,r,Pe(m)):x(Ni,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ir=y(function(e,r,n){return x(Ni,e,r,0,n)}),be=$(function(e,r){return p(ir,$(function(n,a){return o(B,e(n),a)}),T,r)}),Vn=Ea,zt=$(function(e,r){return o(Vn,function(n){return bn(e(n))},r)}),E$=y(function(e,r,n){return o(Vn,function(a){return o(Vn,function(t){return bn(o(e,a,t))},n)},r)}),U$=function(e){return p(ir,E$(B),bn(T),e)},V$=Pu,N$=$(function(e,r){var n=r;return ni(o(Vn,V$(e),n))}),G$=y(function(e,r,n){return o(zt,function(a){return 0},U$(o(be,N$(e),r)))}),j$=y(function(e,r,n){return bn(0)}),H$=$(function(e,r){var n=r;return o(zt,e,n)});Je.Task=xu(R$,G$,j$,H$);var W$=ti("Task"),kt=$(function(e,r){return W$(o(zt,e,r))}),I$=lv,Y$=Wl,Nn={$:1},Gi=function(e){return{$:2,a:e}},na={$:0},Fe=$(function(e,r){return{$:0,a:e,b:r}}),ee=y(function(e,r,n){return r(e(n))}),Wr=function(e){var r=e.b.B;return r.a},J$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Fe,r,{B:i,ab:c,T:o(B,a,n)}))}else return O},ji=function(e){var r=e.b;return o(Fe,na,r)},sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),O$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?ji(n):n;case 2:var i=a.a.cX;return(Y(i+r.eJ,Wr(n).db)>0?o(ee,J$,sr(o(Fe,Nn,t))):Cr)(o(Fe,Gi({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ui,l.eA,Ye(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Fe,na,{B:z(v,s),ab:T,T:o(B,t.B,t.T)})}}),Hi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),q$=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Z$=$(function(e,r){return Pe(p(q$,e,r,T))}),Wi=y(function(e,r,n){if(r<=0)return T;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(Z$,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,b,p(Wi,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return g([_])}}),X$=$(function(e,r){return p(Wi,0,e,r)}),Q$=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=oe(Pe(n),oe(g([a]),t)),c=o(X$,e,i),l=o(Hi,e,i);if(l.b){var u=l.a,v=l.b;return o(Fe,Nn,{B:u,ab:v,T:Pe(c)})}else{var s=Pe(c);if(s.b){var m=s.a,d=s.b;return o(Fe,Nn,{B:m,ab:T,T:d})}else return r}}),K$=function(e){var r=e.b;return o(Fe,Nn,r)},ef=function(e){var r=e.b;return o(Fe,Gi({cX:Wr(e).db}),r)},rf=$(function(e,r){switch(e.$){case 1:return K$(r);case 2:return ji(r);case 3:return ef(r);default:var n=e.a;return o(Q$,n,r)}}),Ii=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),nf=$(function(e,r){return Ye(r,{av:e(r.av)})}),af=function(e){return{$:3,a:e}},tf=function(e){return{$:2,a:e}},Yi=$(function(e,r){return{$:0,a:e,b:r}}),of=$(function(e,r){return{$:1,a:e,b:r}}),Te=$(function(e,r){if(r.$)return O;var n=r.a;return ne(e(n))}),Q=function(e){return e<0?-e:e},Dt=ou,cf=y(function(e,r,n){return o(sr,0/0,Dt(o(e,r,n)))}),Ji=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),lf=ql,Oi=function(e){return p(lf,B,T,e)},uf=$(function(e,r){var n=o(Ji,function(a){return a!=="0"&&a!=="."},Oi(r));return oe(e&&n?"-":"",r)}),re=Ko,Wa=Il,qi=lu,Zi=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Hr(n);if(a.$===1)return"01";var t=a.a;return o(Wa,"0",Zi(t))}else{var i=Oe(r);return i>=48&&i<57?o(Wa,qi(i+1),n):"0"}},Ia=Ul,vf=Hl,aa=function(e){return o(Wa,e,"")},Xi=y(function(e,r,n){return e<=0?n:p(Xi,e>>1,oe(r,r),e&1?oe(n,r):n)}),un=$(function(e,r){return p(Xi,e,r,"")}),Ya=y(function(e,r,n){return oe(n,o(un,e-_r(n),aa(r)))}),Ja=Ol,Qi=function(e){var r=o(St,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},$f=function(e){var r=o(St,"e",re(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(sr,0,Vi(o(F$,"+",t)?o(pn,1,t):t)),c=Qi(n),l=c.a,u=c.b,v=oe(l,u),s=i<0?o(sr,"0",o(Te,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Te,Ii(aa),Hr(oe(o(un,Q(i),"0"),v))))):p(Ya,i+1,"0",v);return oe(e<0?"-":"",s)}else{var n=r.a;return oe(e<0?"-":"",n)}else return""},ff=y(function(e,r,n){if(Ia(n)||vf(n))return re(n);var a=n<0,t=Qi($f(Q(n))),i=t.a,c=t.b,l=_r(i)+r,u=oe(o(un,-l+1,"0"),p(Ya,l,"0",oe(i,c))),v=_r(u),s=o(wr,1,l),m=o(e,a,p(Fr,s,v,u)),d=p(Fr,0,s,u),f=m?Ja(o(sr,"1",o(Te,Zi,Hr(Ja(d))))):d,h=_r(f),b=f==="0"?f:r<=0?oe(f,o(un,Q(r),"0")):Y(r,_r(c))<0?p(Fr,0,h-r,f)+("."+p(Fr,h-r,h,f)):oe(i+".",p(Ya,r,"0",c));return o(uf,a,b)}),Ki=ff($(function(e,r){var n=Hr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Oe(t))})),sf=cf(Ki),mf=y(function(e,r,n){var a=o(xt,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(sf,t,n)}),ec=Ml,At=$(function(e,r){e:for(;;){if(r.$===-2)return O;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ec,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),R=ye(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Ze={$:-2},Vr=ye(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(R,0,r,n,S(R,1,v,s,m,d),S(R,1,i,c,l,u))}else return S(R,e,i,c,S(R,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return S(R,0,v,s,S(R,1,h,b,C,L),S(R,1,r,n,d,t))}else return S(R,e,r,n,a,t)}),Oa=y(function(e,r,n){if(n.$===-2)return S(R,0,e,r,Ze,Ze);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ec,e,t);switch(u){case 0:return S(Vr,a,t,i,p(Oa,e,r,c),l);case 1:return S(R,a,t,r,c,l);default:return S(Vr,a,t,i,c,p(Oa,e,r,l))}}),en=y(function(e,r,n){var a=p(Oa,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(R,1,t,i,c,l)}else{var u=a;return u}}),df=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},rc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,C=d.e,L=v.e;return S(R,0,f,h,S(R,1,n,a,S(R,0,i,c,l,u),b),S(R,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,L=w.e;return S(R,1,n,a,S(R,0,i,c,l,u),S(R,0,s,m,d,L))}else return e},_o=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,L=f.e;return S(R,0,i,c,S(R,1,u,v,s,m),S(R,1,n,a,d,S(R,0,h,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,D=e.e;D.a;var h=D.b,b=D.c,C=D.d,L=D.e;return S(R,1,n,a,S(R,0,i,c,w,d),S(R,0,h,b,C,L))}else return e},pf=ut(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(R,n,l,u,v,S(R,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,_o(r)}else break e;else return c.a,c.d,_o(r);else break e;return r}}),Mn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(R,r,n,a,Mn(t),l);var u=rc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Vr,v,s,m,Mn(d),f)}else return Ze}else return S(R,r,n,a,Mn(t),l)}else return Ze},rn=$(function(e,r){if(r.$===-2)return Ze;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Y(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(R,n,a,t,o(rn,e,i),c);var u=rc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Vr,v,s,m,o(rn,e,d),f)}else return Ze}else return S(R,n,a,t,o(rn,e,i),c);else return o(bf,e,Qo(pf,e,r,n,a,t,i,c))}),bf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Lr(e,a)){var l=df(c);if(l.$===-1){var u=l.b,v=l.c;return S(Vr,n,u,v,i,Mn(c))}else return Ze}else return S(Vr,n,a,t,i,o(rn,e,c))}else return Ze}),gf=$(function(e,r){var n=o(rn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(R,1,a,t,i,c)}else{var l=n;return l}}),yn=y(function(e,r,n){var a=r(o(At,e,n));if(a.$)return o(gf,e,n);var t=a.a;return p(en,e,t,n)}),hf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(yn,r,Te(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(of,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(yn,r,Te(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Yi,z(i,c),p(mf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(yn,r,Te(function(a){return a.$===3?af(n):a}));default:var r=e.a,n=e.b;return o(yn,r,Te(function(a){return a.$===2?tf(n):a}))}},_f=function(e){return nf(hf(e))},Cf=$(function(e,r){return o(be,_f(e),r)}),yf=$(function(e,r){return Ye(r,{eA:o(Cf,e,r.eA)})}),Lf=$(function(e,r){var n=r.a,a=r.b;return o(Fe,n,Ye(a,{B:o(Ii,yf(e),a.B)}))}),Sf=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),wf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Fe,a,Ye(t,{B:o(Sf,o(e,i.a,r),i)}))}),xf=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aL:!a.aL});case 2:var t=n.a;return Ye(a,{G:p(O$,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(Lf,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(wf,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(rf,l,a.G)})}}),Tf=$(function(e,r){return o(Fe,na,{B:z(e,r(e)),ab:T,T})}),Pf=Mu,Co=Pf(T),Gn=su,vn=fu,Mf=Bu("tick",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return we({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(P,"clock",le))},o(P,"devicePixelRatio",le))},o(P,"dt",le))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(m){return we({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",Z))},o(P,"control",Z))},o(P,"down",Z))},o(P,"downs",Gn(vn)))},o(P,"left",Z))},o(P,"pressedKeys",Gn(vn)))},o(P,"right",Z))},o(P,"shift",Z))},o(P,"up",Z))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return we({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",Z))},o(P,"isDown",Z))},o(P,"move",Z))},o(P,"rightDown",Z))},o(P,"rightUp",Z))},o(P,"up",Z))},o(P,"x",le))},o(P,"y",le))))},o(P,"screen",o(M,function(r){return o(M,function(n){return we({eW:n,fS:r})},o(P,"height",le))},o(P,"width",le))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return we({eE:r,eF:e})},o(P,"deltaX",le))},o(P,"deltaY",le))))),zf=function(e){return{$:4,a:e}},kf={$:0},Df=ri,Ue=$(function(e,r){return o(ci,e,Df(r))}),H=Ue("className"),Af=function(e){var r=e.b.B;return r.b},jn=Ue("id"),Bf=Nu,Hn=Bf,Ff=Gu,K=Ff,Rf={$:1},Ef=function(e){return{$:3,a:e}},Uf=function(e){return{$:5,a:e}},yo=Tr("a"),Bt=Tr("button"),Lo=function(e){return o(Ue,"href",Wu(e))},Vf=br("clip-rule"),he=br("d"),Nf=br("fill"),nc=oi("http://www.w3.org/2000/svg"),Gf=nc("svg"),jf=br("viewBox"),Hf=o(ju,"http://www.w3.org/XML/1998/namespace","xml:space"),ke=Gf(g([jf("0 0 24 24"),Nf("currentColor"),o(K,"width","100%"),o(K,"height","100%"),Hf("http://www.w3.org/2000/svg")])),Wf=br("fill-rule"),_e=nc("path"),yr={eD:ke(g([o(_e,g([he("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eQ:ke(g([o(_e,g([he("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),eV:ke(g([o(_e,g([he("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fe:ke(g([o(_e,g([he("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(_e,g([he("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),ff:ke(g([o(_e,g([he("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(_e,g([he("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fp:ke(g([o(_e,g([he("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fq:ke(g([o(_e,g([he("M7 5V19L18 12L7 5Z")]),T)])),fr:ke(g([o(_e,g([he("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),fs:ke(g([o(_e,g([he("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fM:ke(g([o(_e,g([Wf("evenodd"),Vf("evenodd"),he("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fN:ke(g([o(_e,g([he("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f0:ke(g([o(_e,g([he("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},If=function(e){return{$:0,a:e}},ac=ii,tc=$(function(e,r){return o(ac,e,If(r))}),Ft=function(e){return o(tc,"click",we(e))},So=Ue("target"),Yf=Ue("title"),qa=$(function(e,r){if(r.$===-2)return Ze;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(R,n,a,o(e,a,t),o(qa,e,i),o(qa,e,c))}),Jf=Ua,tr=Jf,Of=function(e){return p(yt,y(function(r,n,a){return o(B,n,a)}),T,e)},qf=$(function(e,r){return{$:3,a:e,b:r}}),Zf=$(function(e,r){return{$:2,a:e,b:r}}),Xf=$(function(e,r){return{$:0,a:e,b:r}}),Qf=$(function(e,r){return{$:1,a:e,b:r}}),gn=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Kf=x(gn,0/255,0/255,0/255,1),es=ri,oc=$(function(e,r){return o(ci,e,es(r))}),rs=oc("checked"),Ge=Gl,ns=y(function(e,r,n){return oe(o(un,e-_r(n),aa(r)),n)}),ic=Al,cc=function(e){var r=function(n){return n<10?xe(n):aa(qi(87+n))};return e<16?r(e):oe(cc(e/16|0),r(o(ic,16,e)))},as=o(ee,cc,o(ns,2,"0")),lc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},ts=function(e){var r=lc(e),n=r.cM,a=r.cc,t=r.b5;return o(hr,"",o(B,"#",o(be,o(ee,Ge,as),g([n*255,a*255,t*255]))))},Za=Ue("htmlFor"),os=$(function(e,r){if(r.$)return O;var n=r.a;return e(n)}),Wn=$(function(e,r){if(r.$){var a=r.a;return de(a)}else{var n=r.a;return e(n)}}),is=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),Rt=$(function(e,r){return p(ir,is(e),T,r)}),uc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),cs=sv,ls=iu,us=$(function(e,r){if(r.$)return de(e);var n=r.a;return ie(n)}),vs=fv,$s=function(e){return o(vs,{ew:!1,fg:!1},e)},Et=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return O},fs=$(function(e,r){if(r.$){var a=r.a;return de(a)}else{var n=r.a;return ie(e(n))}}),ss=function(e){return{$:2,a:e}},ms=function(e){return{$:0,a:e}},ds=function(e){return{$:1,a:e}},sa=$(function(e,r){return Oe(r)-Oe(e)}),ma=y(function(e,r,n){var a=Oe(n);return Y(Oe(e),a)<1&&Y(a,Oe(r))<1}),ps=$(function(e,r){var n=function(t){return Y(t,e)<0?ie(t):de(ds(r))},a=p(ma,"0","9",r)?ie(o(sa,"0",r)):p(ma,"a","z",r)?ie(10+o(sa,"a",r)):p(ma,"A","Z",r)?ie(10+o(sa,"A",r)):de(ms(r));return o(Wn,n,a)}),vc=$(function(e,r){var n=Hr(r);if(n.$===1)return ie(0);var a=n.a,t=a.a,i=a.b;return o(Wn,function(c){return o(Wn,function(l){return ie(c+l*e)},o(vc,e,i))},o(ps,e,t))}),bs=$(function(e,r){return 2<=e&&e<=36?o(vc,e,Ja(r)):de(ss(e))}),gs=bs(16),hs=y(function(e,r,n){return x(gn,e,r,n,1)}),$c=F(function(e,r,n,a){return x(gn,e,r,n,a)}),hn=Dl,_s=$(function(e,r){var n=o(hn,10,e);return Ge(r*n)/n}),Cs=Kl,ys=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Oi(n);if(a.b&&!a.b.b){var t=a.a;return ls(g([t,t]))}else return n};return o(ee,Cs,o(ee,function(n){return o(Te,function(a){return p(cs,1,a,n)},$s(e))},o(ee,os(Et),o(ee,Te(function(n){return n.fG}),o(ee,Te(Rt(Cr)),o(ee,us("Parsing hex regex failed"),Wn(function(n){var a=o(be,o(ee,r,o(ee,gs,fs(S$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ie(x($c,t/255,c/255,u/255,o(_s,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ie(p(hs,t/255,c/255,u/255))}else break e;return de("Parsing ints from hex failed")})))))))}(),In=Tr("input"),Xa=Tr("label"),Qa=Ue("name"),fc=$(function(e,r){return p(ir,P,r,e)}),Ls=o(fc,g(["target","checked"]),Z),Ss=function(e){return o(tc,"change",o(Un,e,Ls))},ws=function(e){return z(e,!0)},xs=function(e){return{$:1,a:e}},Ts=$(function(e,r){return o(ac,e,xs(r))}),Ps=o(fc,g(["target","value"]),vn),Ut=function(e){return o(Ts,"input",o(Un,ws,o(Un,e,Ps)))},sc=Ue("max"),mc=Ue("min"),dc=function(e){return o(Ue,"step",e)},Yn=Ue("type"),Vt=Ue("value"),wo=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,T,g([o(Xa,g([Za(r)]),g([o(I,g([H("relative w-full")]),g([o(I,g([H("inline-block")]),g([tr(r)])),o(I,g([H("inline-block float-right")]),g([tr(re(n))]))]))])),o(In,g([Yn("range"),o(K,"width","100%"),jn(r),Qa(r),mc(re(a)),sc(re(t)),Vt(re(n)),dc(re(i)),Ut(o(ee,Dt,o(ee,sr(42),c)))]),T)]))},Ms=$(function(e,r){if(r.$)return e;var n=r.a;return n}),zs=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,g([H("h-12 py-4")]),g([o(Xa,g([H("block"),Za(e)]),g([o(In,g([H("relative bottom-[1px] align-middle mr-2"),Yn("checkbox"),jn(e),Qa(e),Ss(qf(e)),rs(c)]),T),tr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return wo({cf:e,cr:i,cv:t,cz:Xf(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return wo({cf:e,cr:i,cv:t,cz:o(ee,Ge,Qf(e)),cV:1,c0:c});default:var c=r.a;return o(I,T,g([o(I,g([o(K,"margin-bottom","6px")]),g([o(Xa,g([Za(e)]),g([tr(e)]))])),o(In,g([Yn("color"),o(K,"width","100%"),o(K,"height","26px"),o(K,"padding","0px"),jn(e),Qa(e),Ut(function(l){return o(Zf,e,o(Ms,Kf,ys(l)))}),Vt(ts(c))]),T)]))}}),ks=function(e){return o(I,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(I,g([H("text-lg pb-2")]),g([tr(e.fh)])),o(I,g([H("pl-2 pr-2")]),Of(o(qa,zs,e.av)))]))},Ds=function(e){return o(I,g([H("text-xs text-white60")]),o(be,ks,e))},As=function(e){return o(I,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([tr("clock: "+o(Ki,3,Wr(e).db))]))},Bs=function(e){e.a;var r=e.b.T;return o(Te,function(n){return Ge(60/(Wr(e).db-n))},o(Te,o(ee,T$,function(n){return n.db}),Et(o(Hi,59,r))))},Fs=function(e){return o(I,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Bs(e);if(r.$===1)return g([tr("... Fps")]);var n=r.a;return g([tr(xe(n)+" Fps")])}())},Rs=function(e){return{$:0,a:e}},Es=function(e){var r=e.b.T;return Sr(r)},Us=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Sr(r)+1+Sr(n)},Vs=function(e){return o(In,g([H("absolute w-full"),Yn("range"),mc(xe(0)),sc(xe(Us(e)-1)),Vt(xe(Es(e))),dc(xe(1)),Ut(o(ee,Dt,o(ee,sr(42),o(ee,Ge,Rs))))]),T)},xo={$:1},To={$:3},Po={$:2},Ka=function(e){return!e.b},pc=oc("disabled"),da=y(function(e,r,n){return o(Bt,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),pc(e),Ft(r)]),g([tr("REC")]))}),pa=y(function(e,r,n){return o(Bt,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),pc(e),Ft(n)]),g([o(I,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Ns=function(e){var r=e.a,n=e.b.ab;return o(I,g([H("py-1")]),g([function(){switch(r.$){case 0:return p(da,!1,xo,"text-red-500 font-bold");case 1:return p(da,!1,Po,"text-white60 hover:text-white80 font-bold");default:return p(da,!0,Po,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(pa,Ka(n),yr.fq,To);case 1:return p(pa,Ka(n),yr.fq,To);default:return p(pa,!1,yr.fp,xo)}}()]))},Gs=function(e){return o(I,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Vs(e),Ns(e),Fs(e),As(e)]))},js=function(e){var r=e.a;return Lr(r,na)},Hs=$(function(e,r){var n=js(r.G)?o(I,T,T):o(I,g([H("absolute pointer-events-none w-8 h-8"),o(K,"left",re(e.fs.fU+.5*e.cS.fS)+"px"),o(K,"top",re(-e.fs.fY+.5*e.cS.eW)+"px")]),g([o(I,g([H(e.fs.e4?"text-black80":"text-black40")]),g([yr.fs]))]));return o(I,T,g([n]))}),Ws=$(function(e,r){var n=o(Bt,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ft(Rf),Yf("Distraction Free Mode")]),g([yr.f0])),a=40,t=260,i=o(I,g([H("absolute w-8 bottom-12")]),g([o(yo,g([H("text-twitterBlue40 hover:text-twitterBlue"),Lo("https://twitter.com/AzizErkalSelman"),So("_blank")]),g([yr.fN]))])),c=80,l=o(I,g([H("absolute w-8 bottom-2")]),g([o(yo,g([H("text-githubCat40 hover:text-githubCat"),Lo("https://github.com/erkal/elm-3d-playground-exploration"),So("_blank")]),g([yr.eQ]))])),u=e.cS.fS>640?X(e.cS.eW,a+t,e.cS.fS-(a+t)):X(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(I,g([H("fixed w-10 h-10 p-1")]),g([n])):o(I,T,g([o(I,g([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(K,"width",re(a)+"px")]),g([n,i,l])),o(I,g([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(K,"width",re(t)+"px"),o(K,"height",re(v)+"px")]),g([o(Hn,Ef,Ds(Wr(r.G).eA))])),o(I,g([H("absolute bottom-0"),o(K,"left",re(s)+"px"),o(K,"height",re(c)+"px"),o(K,"width",re(m)+"px")]),g([o(Hn,Uf,Gs(r.G))])),o(Hs,e,r)]))}),Is=y(function(e,r,n){var a=Af(n.G),t=Wr(n.G);return o(I,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(K,"width",re(t.cS.fS)+"px"),o(K,"height",re(t.cS.eW)+"px")]),g([o(I,g([H("fixed")]),g([o(Hn,Ei(kf),o(e,t,a))])),o(I,g([jn("gui")]),g([o(Ws,t,n),o(Hn,zf,o(r,t,a))]))]))}),Ys=Ee(function(e,r,n,a,t,i){var c=$(function(u,v){return z(x(xf,r,i,u,v),Co)}),l=function(u){var v=o(Ui,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(Tf,v,a)},Co)};return I$({e0:l,fH:Ei(Mf(D$)),fO:c,fQ:o(Is,e,t)})}),Js=F(function(e,r,n,a){return me(Ys,e,r,n,a,$(function(t,i){return o(I,T,T)}),y(function(t,i,c){return c}))}),Os=function(e){return{}},qs=y(function(e,r,n){return{av:n,e5:r,fh:e}}),bc=Ze,Zs=function(e){return p(dn,$(function(r,n){var a=r.a,t=r.b;return p(en,a,t,n)}),bc,e)},Xs=y(function(e,r,n){return p(qs,e,r,Zs(n))}),Qs=Xs,Ks=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Yi,z(a,t),n))}),em=g([p(Qs,"Camera",!0,g([p(Ks,"camera height",z(1.4,1.57),1.57)]))]),rm=$(function(e,r){return r}),nm=$(function(e,r){return o(Te,function(n){if(n.$)return 0;var a=n.b;return a},o(At,e,r.av))}),am=$(function(e,r){return o(sr,0,Et(o(Rt,nm(e),r)))}),tm=$(function(e,r){return o(am,e,r.eA)}),Mo=tm,om=function(e){return e},Er=function(e){return e},et=function(e){var r=e;return-r},im=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),gc=function(e){var r=e;return r.c3},hc=function(e){var r=e;return r.c4},cm=function(e){return o(im,gc(e),hc(e))},Ir=function(e){var r=e;return r.cA},Nr=Fl,$n=Rl,ba=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Nr(c),u=$n(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,h=s.fY*u,b=l*h,C=m*h,L=h*h,_=1-2*(f+L),w=s.c5*u,D=l*w,W=2*(C-D),N=2*(C+D),U=m*w,G=2*(U+b),j=2*(U-b),E=h*w,q=2*(E-d),J=2*(E+d),te=w*w,ce=1-2*(L+te),ae=1-2*(f+te);return{fU:ce*i.fU+W*i.fY+G*i.c5,fY:N*i.fU+ae*i.fY+q*i.c5,c5:j*i.fU+J*i.fY+_*i.c5}}),lm=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Nr(c),u=$n(c),v=a.cA,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c5-s.c5,h=a.eH,b=h,C=b.fU*u,L=l*C,_=C*C,w=b.fY*u,D=l*w,W=C*w,N=w*w,U=1-2*(_+N),G=b.c5*u,j=l*G,E=2*(W-j),q=2*(W+j),J=C*G,te=2*(J+D),ce=2*(J-D),ae=w*G,ue=2*(ae-L),Se=2*(ae+L),ge=G*G,cr=1-2*(N+ge),lr=1-2*(_+ge);return{fU:s.fU+cr*m+E*d+te*f,fY:s.fY+q*m+lr*d+ue*f,c5:s.c5+ce*m+Se*d+U*f}}),Yr=function(e){return e},Pr=function(e){var r=e;return r.c3},Mr=function(e){var r=e;return r.c4},zr=function(e){var r=e;return r.c6},um=y(function(e,r,n){return Yr({cA:p(lm,e,r,Ir(n)),c3:p(ba,e,r,Pr(n)),c4:p(ba,e,r,Mr(n)),c6:p(ba,e,r,zr(n))})}),zo=y(function(e,r,n){return p(um,e(n),r,n)}),_c=function(e){var r=e;return r.eH},vm=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),$m=$(function(e,r){return Yr({cA:o(vm,e,Ir(r)),c3:Pr(r),c4:Mr(r),c6:zr(r)})}),fm=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),sm=y(function(e,r,n){return o($m,o(fm,r,e),n)}),mm=y(function(e,r,n){return p(sm,_c(e(n)),r,n)}),ta=$(function(e,r){return{eH:r,cA:e}}),dm=function(e){var r=e;return o(ta,r.cA,r.c3)},pm=function(e){var r=e;return o(ta,r.cA,r.c4)},bm=function(e){var r=e;return o(ta,r.cA,r.c6)},gm=function(e){var r=Yr({cA:e.aR,c3:hc(e.dl),c4:cm(e.dl),c6:gc(e.dl)}),n=p(mm,bm,e.cb,p(zo,dm,et(e.bC),p(zo,pm,e.bx,r)));return n},hm=function(e){return{$:1,a:e}},Re=function(e){var r=e;return Q(r)},_m=function(e){return{cL:hm(Re(e.el)),c1:e.c1}},fn=function(e){return e},oa={fU:0,fY:0,c5:0},Cm=Cr,nr=function(e){return e},Cc=nr({fU:1,fY:0,c5:0}),yc=Cc,Lc=nr({fU:0,fY:0,c5:1}),Nt=Lc,ym=Cm({cA:oa,c3:Nt,c4:yc}),Lm=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.el;return _m({c1:gm({bx:fn(n),cb:Er(1e3),bC:fn(a),aR:om(r),dl:ym}),el:Er(t)})},Sm=function(e){return Lm({bx:o(Mo,"camera height",e),bC:o(Mo,"camera height",e),aR:{fU:0,fY:2,c5:0},el:2})},Jn=Bl,rt=function(e){return e*Jn/180},wm=function(e){return e},xm=function(e){return Er(.01*e)},ko=function(e){return e},Tm=function(e){return e},Pm=function(e){return{$:0,a:e}},Mm=Pm,zm={$:3},km=zm,Dm=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Am=Dm,Bm=$(function(e,r){return r.b?p(ir,B,r,e):e}),$r=function(e){return p(ir,Bm,T,e)},Fm=$(function(e,r){return $r(o(be,e,r))}),Rm=function(e){return{$:1,a:e}},Em=Rm,Um=function(e){return o(br,"height",xe(e))},Vm=function(e){return Uu(Hu(e))},Nm=Vm,Gm=function(e){return{$:2,a:e}},jm=Gm,Hm=function(e){return o(hr,"",e)},Wm=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ge(l*1e3)/1e3},c=function(l){return Ge(l*1e4)/100};return Hm(g(["rgba(",re(c(r)),"%,",re(c(n)),"%,",re(c(a)),"%,",re(i(t)),")"]))},Im=$(function(e,r){switch(r.$){case 0:return o(Nv,e,r);case 1:return o(Gv,e,r);case 2:return o(jv,e,r);case 3:return o(Hv,e,r);case 4:return o(Wv,e,r);default:return o(Iv,e,r)}}),Ym=$(function(e,r){switch(r.$){case 0:return o(pv,e,r);case 1:return o(bv,e,r);case 2:return o(gv,e,r);case 3:return o(hv,e,r);case 4:return o(_v,e,r);case 5:return o(Cv,e,r);case 6:return o(yv,e,r);case 7:return o(Lv,e,r);default:return Sv(e)}}),Jm=y(function(e,r,n){return p(Vv,e,r,n)}),Do=function(e){var r=e;return r},Jr=n$,ga=x(Jr,1,1,1,1),He=y(function(e,r,n){return o(be,function(a){return o(a,r,n)},e)}),Om=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qm=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Om,n*a/t,n,n*(1-a-t)/t)}),Gt=Zv,Zm=function(e){var r=e.a,n=e.b,a=e.c;return p(Gt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},jt=$(function(e,r){return Zm(o(qm,e,r))}),Sc=$(function(e,r){return{dp:Lr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=l$,Xm=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},ha=ye(function(e,r,n,a,t){var i=a.dp?1:-1,c=x(Jr,a.bX,a.bX,a.bX,i);return me(t,e,c,Xm(a),a.dp,r,n)}),wc=Ee(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Sc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(B,S(ha,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,L=o(B,S(ha,e,r,n,a,C),i.U);return{M:i.M,U:L,fB:i.fB};case 2:var _=t.a,w=o(B,S(ha,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var D=t.a;return p(dn,x(wc,e,r,n,a),i,D)}}),Qm=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),xc=Qm,Ht=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Km=function(e){var r=e.Z,n=e.W,a=e.V;return x(Ht,518,r,n,a)},ed=$(function(e,r){return{$:6,a:e,b:r}}),rd=ed,Tc=g([Km({V:1,W:0,Z:!1}),x(xc,!1,!1,!1,!1),o(rd,0,1)]),Gr=519,Wt=8,Pc=15,Ur=7681,nd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Le=dv,ad=$(function(e,r){return{$:0,a:e,b:r}}),td=ad({df:1,$7:0,dV:5}),Rr=Ov,od=td(g([{bT:o(Rr,-1,-1)},{bT:o(Rr,1,-1)},{bT:o(Rr,-1,1)},{bT:o(Rr,1,1)}])),id={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},cd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},It=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(ee,c(v.bl),o(ee,l(v.a8),o(ee,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(cd,a,t,i)))}),Yt=function(e){return p(It,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Jt=function(e){return S(Le,g([Yt(e),x(xc,!1,!1,!1,!1)]),id,nd,od,{})},ld=Jt({a8:Ur,co:0,cN:Wt,bl:Gr,c2:Pc,bt:Ur,bu:Ur}),ud=516,Ao=5386,pe=7680,vd=function(e){return o(hn,2,e+4)},Mc=function(e){return Jt({a8:pe,co:Pc,cN:Wt,bl:ud,c2:vd(e),bt:Ao,bu:Ao})},$d=y(function(e,r,n){return $r(g([p(He,e,n,Tc),g([Mc(r),ld])]))}),fd=$(function(e,r){return $r(o(Pi,$d(e),r))}),sd=function(e){var r=e.Z,n=e.W,a=e.V;return x(Ht,513,r,n,a)},md=sd({V:1,W:0,Z:!0}),dd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},pd=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return dd(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},bd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Bo=$(function(e,r){var n=e,a=r;return p(bd,32774,n,a)}),gd=1,Fo=771,hd=770,Ot=pd({bv:0,aH:o(Bo,gd,Fo),by:0,bA:o(Bo,hd,Fo),bF:0,bV:0}),kr=g([md,Ot]),_d=function(e){var r=e;return r.dO},Cd=function(e){var r=e;return r.dP},zc=function(e){var r=e;return r.dQ},yd=function(e){var r=e;return r.dR},Ld=function(e){var r=e;return r.dS},kc=function(e){var r=e;return r.dT},ar=$(function(e,r){var n=e,a=r;return a-n}),Dc=function(e){return X(o(ar,yd(e),_d(e)),o(ar,Ld(e),Cd(e)),o(ar,kc(e),zc(e)))},Ro=function(e){var r=e;return Ir(r)},Sd=function(e){return e},wd=function(e){return Yr({cA:Sd({fU:e.H,fY:e.I,c5:e.J}),c3:nr({fU:e.q,fY:e.r,c5:e.s}),c4:nr({fU:e.t,fY:e.u,c5:e.v}),c6:nr({fU:e.w,fY:e.x,c5:e.y})})},_a=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Ac=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,h=f;return{fU:c*h.fU+l*h.fY+u*h.c5,fY:c*d.fU+l*d.fY+u*d.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Bc=$(function(e,r){return{cA:o(Ac,e,Ir(r)),c3:o(_a,e,Pr(r)),c4:o(_a,e,Mr(r)),c6:o(_a,e,zr(r))}}),nt=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),On=function(e){var r=e;return r},$e=$(function(e,r){var n=e,a=r;return o(wr,n,a)}),xd=$(function(e,r){return Y(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(xd,n,a)}),Td=$(function(e,r){var n=On(r),a=On(e);return{dO:o($e,a.dO,n.dO),dP:o($e,a.dP,n.dP),dQ:o($e,a.dQ,n.dQ),dR:o(se,a.dR,n.dR),dS:o(se,a.dS,n.dS),dT:o(se,a.dT,n.dT)}}),ze=function(e){var r=e;return r},Pd=function(e){var r=e;return X(r.fU,r.fY,r.c5)},Ca=function(e){var r=e;return .5*r},zn=$(function(e,r){var n=e,a=r;return a+n}),Md=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Ca(Re(a)),c=Ca(Re(n)),l=Ca(Re(t)),u=Pd(r),v=u.a,s=u.b,m=u.c;return{dO:o(zn,c,v),dP:o(zn,i,s),dQ:o(zn,l,m),dR:o(ar,c,v),dS:o(ar,i,s),dT:o(ar,l,m)}}),Eo=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,m=ze(zr(e)),d=Q(l*m.fU)+Q(c*m.fY)+Q(i*m.c5),f=ze(Mr(e)),h=Q(l*f.fU)+Q(c*f.fY)+Q(i*f.c5),b=ze(Pr(e)),C=Q(l*b.fU)+Q(c*b.fY)+Q(i*b.c5),L=o(Md,X(C,h,d),o(Ac,e,p(nt,s,v,u)));if(a.$)return ne(L);var _=a.a;return ne(o(Td,_,L))}),at=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=x(Eo,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=x(Eo,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=x(at,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(Bc,wd(v),e),d=r*v.bX,f=e,h=r,b=x(at,m,d,n,g([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),ia=Xv,ca=Qv,la=Kv,Fc=function(e){return{$:4,a:e}},zd=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),qt=function(e){return Fc(o(zd,e,T))},kd={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Dd=function(e){var r=e;return r},Uo=Jt({a8:Ur,co:0,cN:Wt,bl:Gr,c2:255,bt:Ur,bu:Ur}),Rc=jl,qn=0,Ad=function(e){var r=e,n=o(wr,Q(r.fU),o(wr,Q(r.fY),Q(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=Rc(i*i+t*t+a*a);return c*n}else return qn},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Ae=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),Kr=z({bd:o(Ae,Ce,Ce),bK:o(Ae,Ce,Ce),bL:o(Ae,Ce,Ce),bM:o(Ae,Ce,Ce)},x(Jr,0,0,0,0)),ur=$(function(e,r){var n=r;return e*n}),Ec=514,Uc=function(e){var r=e.Z,n=e.W,a=e.V;return x(Ht,515,r,n,a)},Vc=240,Bd=g([Uc({V:1,W:0,Z:!0}),Yt({a8:pe,co:Vc,cN:0,bl:Ec,c2:0,bt:pe,bu:pe}),Ot]),Fd=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Re(a),l=c,u=Re(t),v=u,s=n.cL;if(s.$){var d=s.a;return Ia(v)?er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return Ia(v)?er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Ln=$(function(e,r){return(1&e>>r)===1?0:1}),Rd=function(e){return g([Uc({V:1,W:0,Z:!0}),Yt({a8:pe,co:Vc,cN:e,bl:Ec,c2:0,bt:pe,bu:pe}),Ot])},Ed=y(function(e,r,n){return $r(o(be,function(a){var t=a<<4,i=x(Jr,o(Ln,a,0),o(Ln,a,1),o(Ln,a,2),o(Ln,a,3));return p(He,e,z(r,i),Rd(t))},o(wt,1,o(hn,2,n)-1)))}),sn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},tt=function(e){var r=e;return r},Ud=u$,Vo=function(e){var r=e;return sn(zr(r))},Nc=nr({fU:0,fY:1,c5:0}),Gc=Nc,Vd={cA:oa,c3:yc,c4:Gc,c6:Nt},Or=function(e){var r=e;return r},Nd=function(e){var r=Or(Ir(e)),n=ze(zr(e)),a=ze(Mr(e)),t=ze(Pr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Gd=$(function(e,r){var n=r;return Nd(o(Bc,n,e))}),jd=function(e){return o(Gd,Vd,e)},Hd=function(e){var r=e;return r.c1},Wd=function(e){var r=e;return Pr(r)},Id=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Yd=function(e){var r=e;return Mr(r)},Jd=function(e){var r=Hd(e.ev),n=Yr({cA:Ro(r),c3:Wd(r),c4:Yd(r),c6:sn(Vo(r))}),a=qt(e.aP),t=a,i=x(at,n,1,O,g([t]));if(i.$===1)return T;var c=i.a,l=jd(r),u=o(ur,.99,o($e,Re(e.aJ),et(zc(c)))),v=Dc(c),s=v.a,m=v.b,d=v.c,f=Ad(p(Id,s,m,d)),h=o(ur,1.01,o(zn,f,et(kc(c)))),b=o(Fd,e.ev,{eq:e.eq,eP:h,fi:u}),C=Ud(b).dM,L=C?ze(sn(Vo(r))):tt(Ro(r)),_=function(){var ae=e.bZ;switch(ae.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var ue=ae.a;return z(3,ue);case 4:var ue=ae.a;return z(4,ue);default:return z(5,0)}}(),w=_.a,D=_.b,W=e.bD,N=W,U=o(jt,N,e.b$),G=U,j=er({dx:0,dy:L.fU,dz:ia(G),dA:e.ec,dB:0,dC:L.fY,dD:ca(G),dE:Dd(f),dF:0,dG:L.c5,dH:la(G),dI:w,dJ:0,dK:C,dL:0,dM:D}),E=me(wc,j,l,b,kd,t,{M:T,U:T,fB:T}),q=e.bJ;switch(q.$){case 0:var J=q.a;return $r(g([p(He,E.M,z(J,ga),kr),p(He,E.U,Kr,kr)]));case 1:var J=q.a;return $r(g([p(He,E.M,Kr,kr),g([Uo]),p(He,E.fB,J.bd,Tc),g([Mc(0)]),p(He,E.M,z(J,ga),Bd),p(He,E.U,Kr,kr)]));default:var te=q.a,ce=q.b;return $r(g([p(He,E.M,z(ce,ga),kr),g([Uo]),o(fd,E.fB,te),p(Ed,E.M,ce,Sr(te)),p(He,E.U,Kr,kr)]))}},Od=function(e){return o(br,"width",xe(e))},qd=$(function(e,r){var n=g([Em(1),jm(0),Mm(!0),x(Am,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return X(n,"0",1);case 1:return X(o(B,km,n),"1",1);default:var D=w.a;return X(n,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Do(v),m=o(K,"height",xe(s)+"px"),d=Do(u),f=d/s,h=o(Fm,function(w){return Jd({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(K,"width",xe(d)+"px"),C=e.aI,L=C,_=Wm(L);return p(Nm,"div",g([o(K,"padding","0px"),b,m]),g([z(i,p(Jm,t,g([Od(Ge(d*c)),Um(Ge(s*c)),b,m,o(K,"display","block"),o(K,"background-color",_)]),h))]))}),Zd=function(e){return o(qd,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},jc=function(e){return e},No=jc({fU:.31271,fY:.32902}),Xd=$(function(e,r){var n=e,a=ze(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(jt,r.cd,r.b6),u=l;return{by:la(u),ex:n,bF:ca(u),cJ:0,bV:ia(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Qd=function(e){return e},Kd=function(e){return Qd(1.2*o(hn,2,e))},ya=function(e){return e},e0={$:0},r0=e0,Hc=function(e){return e},n0=$(function(e,r){var n=e,a=r;return Y(a,n)>0}),Go=function(e){var r=e;return r},a0=function(e){e:for(;;){if(Lr(e.e2,qn)&&Lr(e.e3,qn))return Ce;if(o(n0,Re(e.e2),Re(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:sn(e.ei)};e=r;continue e}else{var n=Q(Go(e.e3)/Jn),a=Q(Go(e.e2)/Jn),t=ze(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(jt,Hc(1),e.b6),v=u;return{by:a*la(v),ex:!1,bF:a*ca(v),cJ:n/a,bV:a*ia(v),cZ:3,fU:i,fY:c,c5:l}}}},jo=function(e){return a0({b6:e.b6,e2:e.cd,e3:qn,ei:e.ei})},Wc=y(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),t0=function(e){var r=e;return r},Ic=function(e){var r=p(Wc,1667,25e3,t0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return jc({fU:n,fY:a})},Yc=function(e){return e},o0=Ic(Yc(12e3)),i0=Ic(Yc(5600)),c0=function(e){return{$:2,a:e}},l0=function(e){return c0(e)},u0=$(function(e,r){return{$:2,a:e,b:r}}),Jc=function(e){return{$:0,a:e}},Sn=function(e){var r=e;return r},v0=function(e){var r=e;return r.ex},$0=Jc(Kr.a),f0=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(ir,n,z(T,T),r)}),s0=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},m0=ve(function(e,r,n,a,t,i,c,l){var u=o(f0,v0,g([Sn(e),Sn(r),Sn(n),Sn(a)])),v=u.a,s=u.b;if(v.b){var m=oe(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(u0,o(be,s0,v),{bd:o(Ae,d,h),bK:o(Ae,C,_),bL:o(Ae,t,i),bM:o(Ae,c,l)})}else return $0}else return Jc({bd:o(Ae,e,r),bK:o(Ae,n,a),bL:o(Ae,t,i),bM:o(Ae,c,l)})}),d0=y(function(e,r,n){return Xn(m0,e,r,n,Ce,Ce,Ce,Ce,Ce)}),p0=function(e){var r=o(Xd,Tm(e.fB),{b6:i0,eH:e.fJ,cd:ya(8e4)}),n=jo({b6:o0,cd:ya(2e4),ei:e.ei}),a=jo({b6:No,cd:ya(15e3),ei:sn(e.ei)}),t=p(d0,r,n,a);return Zd({b0:l0(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Kd(15),bJ:t,bZ:r0,b$:No})},b0=$(function(e,r){var n=e,a=r,t=Nr(a);return{fU:t*Nr(n),fY:t*$n(n),c5:$n(a)}}),g0=$(function(e,r){return p0({aI:wm(e.es),ev:e.ev,aJ:xm(.5),ca:e.ca,aK:z(ko(Ge(e.cS.fS)),ko(Ge(e.cS.eW))),aP:r,fB:!0,fJ:o(b0,fn(e.fI),fn(e.fK)),ei:Nt})}),h0=function(e){var r=e;return r},_0=function(e){var r=e;return h0(r.er)},Oc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),C0=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),y0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),L0=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),S0=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),w0=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),x0=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),T0=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return x(x0,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return x(Oc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return x(C0,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return x(y0,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return x(w0,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return x(L0,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return x(S0,n,a,t,1);case 8:return e;case 9:return e;default:return e}},P0={$:0},M0=ve(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=On(c(u)),m=o(se,s.dR,e),d=o($e,s.dO,r),f=o(se,s.dS,n),h=o($e,s.dP,a),b=o(se,s.dT,t),C=o($e,s.dQ,i),L=c,_=v;e=m,r=d,n=f,a=h,t=b,i=C,c=L,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),z0=y(function(e,r,n){var a=On(e(r));return Xn(M0,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),La=$(function(e,r){var n=e,a=r;return Y(a,n)<1}),k0=function(e){return o(La,e.dO,e.dR)&&o(La,e.dP,e.dS)&&o(La,e.dQ,e.dT)?e:{dO:o($e,e.dR,e.dO),dP:o($e,e.dS,e.dP),dQ:o($e,e.dT,e.dQ),dR:o(se,e.dR,e.dO),dS:o(se,e.dS,e.dP),dT:o(se,e.dT,e.dQ)}},Zn=function(e){var r=e;return r},nn=function(e){var r=e;return r.fU},an=function(e){var r=e;return r.fY},tn=function(e){var r=e;return r.c5},D0=function(e){var r=Zn(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=an(n),l=tn(n),u=nn(a),v=an(a),s=tn(a),m=nn(t),d=an(t),f=tn(t);return k0({dO:o($e,i,o($e,u,m)),dP:o($e,c,o($e,v,d)),dQ:o($e,l,o($e,s,f)),dR:o(se,i,o(se,u,m)),dS:o(se,c,o(se,v,d)),dT:o(se,l,o(se,s,f))})},qc=e$,fr=function(e){return qc(Or(e))},Zc=function(e){var r=e;return r},Xc=function(e){return qc(Zc(e))},A0=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Ho=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),B0={fU:0,fY:0,c5:0},F0=$(function(e,r){var n=e,a=r,t=o(wr,Q(a.fU),o(wr,Q(a.fY),Q(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=Rc(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return B0}),R0=F0(Hc(1)),Qc=y(function(e,r,n){var a=o(Ho,r,n),t=o(Ho,e,r);return R0(o(A0,a,t))}),E0=function(e){var r=Zn(e),n=r.a,a=r.b,t=r.c,i=Xc(p(Qc,n,a,t));return X({o:i,bT:fr(n)},{o:i,bT:fr(a)},{o:i,bT:fr(t)})},U0=$(function(e,r){return{$:2,a:e,b:r}}),V0=U0({df:3,$7:0,dV:4}),N0=function(e){if(e.b){var r=e.a,n=e.b,a=V0(o(be,E0,e)),t=p(z0,D0,r,n);return x(Oc,t,e,a,0)}else return P0},De=y(function(e,r,n){return X(e,r,n)}),We=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Kc=function(){var e=Er(1),r=Er(1),n=Er(1),a=o(ur,-.5,e),t=o(ur,-.5,r),i=o(ur,-.5,n),c=p(We,i,t,a),l=o(ur,.5,e),u=p(We,i,t,l),v=o(ur,.5,r),s=p(We,i,v,a),m=p(We,i,v,l),d=o(ur,.5,n),f=p(We,d,t,a),h=p(We,d,v,a),b=p(We,d,t,l),C=p(We,d,v,l);return T0(N0(g([p(De,c,h,f),p(De,c,s,h),p(De,u,b,C),p(De,u,C,m),p(De,f,h,C),p(De,f,C,b),p(De,c,m,s),p(De,c,u,m),p(De,c,f,b),p(De,c,b,u),p(De,s,C,h),p(De,s,m,C)])))}(),wn={$:0},G0=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),j0=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Xc(p(Qc,u,l,c)),s={o:v,bT:fr(u)},m={o:v,bT:fr(l)},d={o:v,bT:fr(c)};return o(B,s,o(B,m,o(B,d,n)))}),H0=function(e){var r=e;return r.D},W0=F(function(e,r,n,a){if(r.$===1)return O;var t=r.a;if(n.$===1)return O;var i=n.a;if(a.$===1)return O;var c=a.a;return ne(p(e,t,i,c))}),ot=4294967295>>>32-ln,it=xl,I0=y(function(e,r,n){e:for(;;){var a=ot&r>>>e,t=o(it,a,n);if(t.$){var v=t.a;return o(it,ot&r,v)}else{var i=t.a,c=e-ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),Y0=function(e){return e>>>5<<5},J0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Y(e,n)>-1?O:Y(e,Y0(n))>-1?ne(o(it,ot&e,i)):ne(p(I0,a,e,t))}),O0=function(e){var r=e;return r.ah},Sa=$(function(e,r){return o(J0,e,O0(r))}),q0=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return x(W0,y(function(c,l,u){return X(c,l,u)}),o(Sa,a,e),o(Sa,t,e),o(Sa,i,e))};return o(Rt,r,H0(e))},Z0=y(function(e,r,n){e:for(;;){var a=o(Tt,Me,e),t=a.a,i=a.b;if(Y(Ha(t),Me)<0)return o(Ri,!0,{z:r,l:n,p:t});var c=i,l=o(B,Bi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),el=function(e){return e.b?p(Z0,e,T,0):Di},X0=y(function(e,r,n){return e(r(n))}),Q0=$(function(e,r){return!o(Ji,o(X0,Y$,e),r)}),K0=$(function(e,r){return p(ir,$(function(n,a){return e(n)?o(B,n,a):a}),T,r)}),ep=function(e){var r=e.a;return r},rp=$(function(e,r){var n=ep(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Y(i,n)<0&&c>=0&&Y(c,n)<0&&l>=0&&Y(l,n)<0};return o(Q0,a,r)?{D:r,ah:e}:{D:o(K0,a,r),ah:e}}),np=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),ap=np({df:1,$7:3,dV:4}),kn=$(function(e,r){var n=tt(r),a=tt(e);return z(X(a.fU,a.fY,a.c5),X(n.fU,n.fY,n.c5))}),Wo=p(Gt,0,0,0),wa=Ee(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(At,o(kn,e,r),t);if(v.$){var m={o:Wo,bT:fr(r)},d={o:Wo,bT:fr(e)},f=u+1,h=u;return X(o(B,X(n,h,f),o(B,X(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return X(o(B,X(n,s,a),c),l,u)}}),tp=ye(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,C=e,L=r,_=v,w=a+3,D=me(wa,s,d,f,b,r,me(wa,m,s,h,f,r,me(wa,d,m,b,h,r,t)));e=C,r=L,n=_,a=w,t=D;continue e}else{var W=t,N=W.a,U=W.b;return z(N,Pe(U))}}),op=ye(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,C=p(en,o(kn,d,s),f,p(en,o(kn,s,m),h,p(en,o(kn,m,d),b,t))),L=o(B,X(b,h,f),a),_=e,w=v,D=n+3,W=L,N=C;e=_,r=w,n=D,a=W,t=N;continue e}else return X(a,t,n)}),gr=y(function(e,r,n){var a=q0(n),t=p(ir,j0(r),T,a),i=S(op,r,a,0,T,bc),c=i.a,l=i.b,u=i.c,v=S(tp,r,l,a,0,X(c,T,u)),s=v.a,m=v.b,d=Ka(m)?t:oe(t,m);return p(G0,e,o(rp,el(d),s),o(ap,d,s))}),Io=function(e){return{D:o(be,function(r){return X(3*r,3*r+1,3*r+2)},o(wt,0,Sr(e)-1)),ah:el($r(o(be,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},ip=function(e){switch(e.$){case 0:return wn;case 1:var a=e.a,r=e.b,n=o(be,Zn,r);return p(gr,a,Cr,Io(n));case 2:var a=e.a,r=e.b,n=o(be,Zn,r);return p(gr,a,Cr,Io(n));case 3:var a=e.a,t=e.b;return p(gr,a,Cr,t);case 4:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 8:return wn;case 9:return wn;default:return wn}},Yo=ip(Kc),cp=function(e){var r=e;return r.aK},rl={$:0},k=rl,je=$(function(e,r){return{$:1,a:e,b:r}}),lp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},up=1029,vp=function(e){return{$:5,a:e}},nl=function(e){var r=e;return vp(r)},$p=nl(up),fp=1028,sp=nl(fp),Xe=y(function(e,r,n){return r===1?e?o(B,$p,n):o(B,sp,n):n}),al={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xa=F(function(e,r,n,a){return o(je,r,ve(function(t,i,c,l,u,v,s,m){return S(Le,p(Xe,l,a,m),al,lp,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),mp={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},tl={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qe=F(function(e,r,n,a){return o(je,r,ve(function(t,i,c,l,u,v,s,m){return S(Le,p(Xe,l,a,m),tl,mp,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),ol=$(function(e,r){return{$:3,a:e,b:r}}),dp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},il={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pp=F(function(e,r,n,a){return o(ol,n,ve(function(t,i,c,l,u,v,s,m){return S(Le,m,il,dp,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),bp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Zt=function(e){var r=e;return r},cl=r$,Ke=ye(function(e,r,n,a,t){return o(je,n,ve(function(i,c,l,u,v,s,m,d){return S(Le,p(Xe,u,t,d),tl,bp,a,{aN:o(cl,Zt(r),e),b:l,c,d:s,e:i,f:v})}))}),gp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},hp=ye(function(e,r,n,a,t){return o(ol,a,ve(function(i,c,l,u,v,s,m,d){return S(Le,d,il,gp,t,{aN:o(cl,Zt(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),_p={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},ll={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xn=F(function(e,r,n,a){return o(je,r,ve(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Xe,l,a,m),ll,_p,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),ul={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},vl={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Cp=Ee(function(e,r,n,a,t,i){return o(je,a,ve(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return S(Le,p(Xe,v,i,f),vl,ul,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cq:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),$l={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(je,u,ve(function(m,d,f,h,b,C,L,_){var w=L.a,D=L.b;return S(Le,p(Xe,h,s,_),vl,$l,v,{b4:e,b7:r,b8:i,b9:a,P:D,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cu:t,b:f,c:d,aW:c,d:C,cR:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Lp={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Tn=Ee(function(e,r,n,a,t,i){return o(je,a,ve(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return S(Le,p(Xe,v,i,f),ll,Lp,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ct:n,b:u,c:l,d:m,cQ:r,e:c,f:s})}))}),Sp=function(e){return{$:0,a:e}},Jo=$(function(e,r){return{$:1,a:e,b:r}}),on=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),wp=function(e){return x(Jr,ia(e),ca(e),la(e),1)},Xt=x(Jr,0,0,0,0),Dn=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Xt)}else{var n=r.a;return z(e,wp(n))}}),xp=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Jo,z(t,Xt),o(on,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Jo,o(Dn,t,e),o(on,t,r))}else{var a=n.a.a;return n.b.a,Sp(a)}}),Tp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Pn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Pp=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mp=function(e){return o(Rr,e,1)},ct=o(Rr,0,0),Dr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,ct)}else{var n=r.a;return z(e,Mp(n))}}),zp=F(function(e,r,n,a){var t=x(Pp,e,r,n,a);if(t.a.$){var u=t.a.a.C;return x(Pn,z(u,Xt),o(Dr,u,r),o(Dr,u,n),o(on,u,a))}else if(t.b.$){var u=t.b.a.C;return x(Pn,o(Dn,u,e),z(u,ct),o(Dr,u,n),o(on,u,a))}else if(t.c.$){var u=t.c.a.C;return x(Pn,o(Dn,u,e),o(Dr,u,r),z(u,ct),o(on,u,a))}else if(t.d.$){var u=t.d.a.C;return x(Pn,o(Dn,u,e),o(Dr,u,r),o(Dr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Tp,i,c,l)}}),kp={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},Ta=ye(function(e,r,n,a,t){return o(je,n,ve(function(i,c,l,u,v,s,m,d){return S(Le,p(Xe,u,t,d),al,kp,a,{b1:Zt(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),fl={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Dp=F(function(e,r,n,a){return o(je,r,ve(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Xe,l,a,m),fl,ul,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Ap=vt(function(e,r,n,a,t,i,c,l,u){return o(je,c,ve(function(v,s,m,d,f,h,b,C){var L=b.a,_=b.b;return S(Le,p(Xe,d,u,C),fl,$l,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,cu:t,b:m,c:s,aW:e,d:h,cR:n,e:v,a$:0,f})}))}),Qt=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Bp=function(e){var r=e;return p(Qt,r.dR,r.dO,.5)},Fp=function(e){var r=e;return p(Qt,r.dS,r.dP,.5)},Rp=function(e){var r=e;return p(Qt,r.dT,r.dQ,.5)},Ep=function(e){return p(We,Bp(e),Fp(e),Rp(e))},V=function(e){var r=Dc(e),n=r.a,a=r.b,t=r.c;return{ey:Or(Ep(e)),eS:n/2,eT:a/2,eU:t/2}},Up=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return x(xa,l,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(xa,l,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(xa,l,V(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Qe,n,V(t),c,a);case 8:var t=r.a,c=r.c;return x(Qe,n,V(t),c,0);case 9:var t=r.a,c=r.c;return x(Qe,n,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(pp,n,i,V(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(Ta,l,v,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ta,l,v,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ta,l,v,V(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,V(t),c,a);case 8:var t=r.a,c=r.c;return S(Ke,u,v,V(t),c,0);case 9:var t=r.a,c=r.c;return S(Ke,u,v,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(hp,u,v,i,V(t),c)}}case 2:e.a;var s=e.b,N=e.c,m=o(xp,s,N);if(m.$){var h=m.a,b=h.a;h.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return x(Dp,b,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return me(Cp,b,L,_,V(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var d=m.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return x(xn,d,V(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return x(xn,d,V(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return x(xn,d,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return x(xn,d,V(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var w=e.b,D=e.c,W=e.d,N=e.e,U=x(zp,w,D,W,N);if(U.$){var q=U.a,J=q.a,te=q.b,ce=U.b,ae=ce.a,ue=ce.b,Se=U.c,ge=Se.a,cr=Se.b,lr=U.d,L=lr.a,_=lr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Cl(Ap,J,te,ae,ue,ge,cr,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return yp(J)(te)(ae)(ue)(ge)(cr)(L)(_)(V(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var G=U.a,j=U.b,E=U.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return me(Tn,G,j,E,V(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return me(Tn,G,j,E,V(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return me(Tn,G,j,E,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return me(Tn,G,j,E,V(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Pa=function(e){var r=e;return r.fU},Ma=function(e){var r=e;return r.fY},za=function(e){var r=e;return r.c5},Vp=function(e){var r=e,n=za(r.c6),a=Ma(r.c6),t=Pa(r.c6),i=za(r.c4),c=Ma(r.c4),l=Pa(r.c4),u=za(r.c3),v=Ma(r.c3),s=Pa(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Np=function(e){var r=Or(Ir(e)),n=ze(zr(e)),a=ze(Mr(e)),t=ze(Pr(e));return{dp:Vp(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Ar=$(function(e,r){return{$:5,a:e,b:r}}),ua=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Sc,a,e);return o(Ar,i,t);case 1:return o(Ar,e,n);case 3:return o(Ar,e,n);case 2:return o(Ar,e,n);default:return o(Ar,e,n)}}),Gp=$(function(e,r){return o(ua,Np(e),r)}),sl=function(e){return{$:2,a:e}},jp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),Hp=t$,Wp=a$,Oo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=Wp(a),h=f.fU,b=f.fY,C=f.c5,L=f.em,_=Hp({em:L,fU:h*s,fY:b*m,c5:C*d});return Xn(r,n,_,t,i,c,l,u,v)}}}}}}}}}},lt=$(function(e,r){switch(r.$){case 0:return rl;case 5:var n=r.a,a=r.b;return o(Ar,n,o(lt,e,a));case 1:var t=r.a,i=r.b;return o(je,o(jp,e,t),o(Oo,e,i));case 3:return r;case 2:var i=r.a;return sl(o(Oo,e,i));default:var c=r.a;return Fc(o(be,lt(e),c))}}),Ip=$(function(e,r){var n=r;return o(lt,e,n)}),Yp={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ml=7683,dl=7682,Jp=p(It,{co:0,cN:0,c2:15},{a8:pe,bl:Gr,bt:pe,bu:ml},{a8:pe,bl:Gr,bt:pe,bu:dl}),Op=p(It,{co:0,cN:0,c2:15},{a8:pe,bl:Gr,bt:pe,bu:dl},{a8:pe,bl:Gr,bt:pe,bu:ml}),qp=$(function(e,r){return e?o(B,Op,r):o(B,Jp,r)}),Zp={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Xp=function(e){if(e.$){var r=e.c;return ne(ve(function(n,a,t,i,c,l,u,v){return S(Le,o(qp,i,v),Zp,Yp,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return O},qo=function(e){var r=Xp(e);if(r.$)return k;var n=r.a;return sl(n)},Qp=F(function(e,r,n,a){var t=o(Up,n,Kc),i=function(){var s=z(e,r);return s.a?s.b?qt(g([t,qo(Yo)])):t:s.b?qo(Yo):k}(),c=cp(a),l=c.a,u=c.b,v=c.c;return o(Gp,_0(a),o(Ip,X(l,u,v),i))}),Kp=$(function(e,r){return x(Qp,!0,!0,e,r)}),ka=$(function(e,r){var n=e,a=r;return Y(a,n)>-1}),Da=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),e1=nr({fU:-1,fY:0,c5:0}),r1=nr({fU:0,fY:-1,c5:0}),n1=nr({fU:0,fY:0,c5:-1}),a1=Ee(function(e,r,n,a,t,i){var c=o(ka,n,i)?Lc:n1,l=o(ka,r,t)?Nc:r1,u=o(ka,e,a)?Cc:e1,v=X(Re(o(ar,e,a)),Re(o(ar,r,t)),Re(o(ar,n,i))),s=p(We,o(Da,e,a),o(Da,r,t),o(Da,n,i)),m=Yr({cA:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),t1=$(function(e,r){return me(a1,nn(e),an(e),tn(e),nn(r),an(r),tn(r))}),o1=$(function(e,r){var n=r/2;return o(Kp,e,o(t1,p(nt,-n,-n,-n),p(nt,n,n,n)))}),i1=function(e){return qt(e)},Zo=i1,Xo=function(e){return{$:0,a:e}},c1=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Aa=function(e){return p(Wc,0,1,e<=.04045?e/12.92:o(hn,(e+.055)/1.055,2.4))},l1=function(e){var r=lc(e),n=r.cM,a=r.cc,t=r.b5;return p(Gt,Aa(n),Aa(a),Aa(t))},u1=function(e){return p(c1,0,Xo(l1(e)),Xo(0))},v1=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),$1=function(e){var r=Zc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},f1=$(function(e,r){return o(ua,$1(e),r)}),s1=$(function(e,r){return o(f1,e,r)}),m1=function(e){var r=e.a,n=e.b,a=e.c;return s1(p(v1,r,n,a))},d1=function(e){return m1(X(0,e,0))},Ba=function(e){return e/255},p1=y(function(e,r,n){return x(gn,Ba(e),Ba(r),Ba(n),1)}),b1=function(e){var r=e;return r.cA},g1=$(function(e,r){var n=r,a=Or(b1(e)),t=.5*n,i=Nr(t),c=$n(t),l=ze(_c(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,b=1-2*(s+h),C=l.c5*c,L=i*C,_=2*(f-L),w=2*(f+L),D=u*C,W=2*(D+d),N=2*(D-d),U=m*C,G=2*(U-v),j=2*(U+v),E=C*C,q=1-2*(h+E),J=1-2*(s+E);return{dp:!0,q,r:w,s:N,t:_,u:J,v:j,w:W,x:G,y:b,H:a.fU-q*a.fU-_*a.fY-W*a.c5,I:a.fY-w*a.fU-J*a.fY-G*a.c5,J:a.c5-N*a.fU-j*a.fY-b*a.c5,bX:1}}),h1=y(function(e,r,n){return o(ua,o(g1,e,r),n)}),_1=y(function(e,r,n){return p(h1,e,r,n)}),C1=o(ta,oa,Gc),y1=$(function(e,r){return p(_1,C1,fn(e),r)}),L1=$(function(e,r){var n=Or(e),a=1-r;return{dp:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fU,I:a*n.fY,J:a*n.c5,bX:r}}),S1=y(function(e,r,n){return o(ua,o(L1,e,r),n)}),w1=y(function(e,r,n){return p(S1,e,r,n)}),x1=w1(oa),T1=$(function(e,r){return(r-Fi(r/e)*e)/e}),P1=$(function(e,r){return 360*o(T1,e,r)}),M1=x(gn,255/255,255/255,255/255,1),pl=$(function(e,r){var n=o(ic,2,r)?M1:p(p1,17,147,216),a=rt(o(P1,8,e.db))/4,t=.707/Nr(Jn/4-a);return Zo(r?g([o(o1,u1(n),1),o(d1,.3,o(y1,a,o(x1,t,o(pl,e,r-1))))]):T)}),z1=function(e){return o(pl,e,20)},k1=$(function(e,r){return o(g0,{es:x($c,0,0,0,.7),ev:Sm(e),ca:e.ca,cS:e.cS,fI:rt(90),fK:-rt(180)},g([z1(e)]))}),D1=x(Js,k1,rm,em,Os);const A1={Main:{init:D1(o(M,function(e){return we({e1:e})},o(P,"inputs",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return we({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(P,"clock",le))},o(P,"devicePixelRatio",le))},o(P,"dt",le))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(m){return we({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",Z))},o(P,"control",Z))},o(P,"down",Z))},o(P,"downs",Gn(vn)))},o(P,"left",Z))},o(P,"pressedKeys",Gn(vn)))},o(P,"right",Z))},o(P,"shift",Z))},o(P,"up",Z))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return we({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",Z))},o(P,"isDown",Z))},o(P,"move",Z))},o(P,"rightDown",Z))},o(P,"rightUp",Z))},o(P,"up",Z))},o(P,"x",le))},o(P,"y",le))))},o(P,"screen",o(M,function(r){return o(M,function(n){return we({eW:n,fS:r})},o(P,"height",le))},o(P,"width",le))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return we({eE:r,eF:e})},o(P,"deltaX",le))},o(P,"deltaY",le)))))))(0)}},A={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},B1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(A.keyboard.downs.push(f.code),A.keyboard.pressedKeys.push(f.code),r(f)&&(A.keyboard.control=!0),n(f)&&(A.keyboard.alt=!0),a(f)&&(A.keyboard.shift=!0),t(f)&&(A.keyboard.left=!0),i(f)&&(A.keyboard.right=!0),c(f)&&(A.keyboard.up=!0),l(f)&&(A.keyboard.down=!0))}),window.addEventListener("keyup",f=>{A.keyboard.pressedKeys=A.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(A.keyboard.control=!1,A.keyboard.pressedKeys=[]),n(f)&&(A.keyboard.alt=!1),a(f)&&(A.keyboard.shift=!1),t(f)&&(A.keyboard.left=!1),i(f)&&(A.keyboard.right=!1),c(f)&&(A.keyboard.up=!1),l(f)&&(A.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{A.pointer.x=-.5*A.screen.width+f.pageX,A.pointer.y=.5*A.screen.height-f.pageY,u(f)&&(A.pointer.down=!0,A.pointer.isDown=!0),v(f)&&(A.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{A.pointer.move=!0,A.pointer.x=-.5*A.screen.width+f.pageX,A.pointer.y=.5*A.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(A.pointer.up=!0,A.pointer.isDown=!1),v(f)&&(A.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(A.pointer.up=!0,A.pointer.isDown=!1),v(f)&&(A.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{A.wheel.deltaX=f.deltaX,A.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(A)}),window.addEventListener("focus",f=>{s(A)}),window.addEventListener("visibilitychange",f=>{s(A)}),window.addEventListener("resize",()=>{A.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-A.clock;b<.009||(A.dt=b,A.clock=h,e.ports.tick.send(A),m(A)),window.requestAnimationFrame(d)}},F1=()=>{Fa("pointerdown"),Fa("wheel"),Fa("keydown")},Fa=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},R1=A1.Main.init({node:document.querySelector("#app div"),flags:{inputs:A}});F1();B1(R1);
