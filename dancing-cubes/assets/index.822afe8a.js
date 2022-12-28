(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function pr(e,r,n){return n.a=e,n.f=r,n}function $(e){return pr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return pr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return pr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ye(e){return pr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Fe(e){return pr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function dt(e){return pr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ie(e){return pr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function pt(e){return pr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ni(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Kn(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ll(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Sl=[];function wl(e){return e.length}var Tl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),xl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Pl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ml=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+zl()),r});function zl(e){return"<internals>"}function Gr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Sr(e,r){for(var n,a=[],t=ja(e,r,0,a);t&&(n=a.pop());t=ja(n.a,n.b,0,a));return t}function ja(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Gr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=ho(e),r=ho(r));for(var t in e)if(!ja(e[t],r[t],n+1,a))return!1;return!0}$(Sr);$(function(e,r){return!Sr(e,r)});function j(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=j(e.a,r.a))||(n=j(e.b,r.b))?n:j(e.c,r.c);for(;e.b&&r.b&&!(n=j(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return j(e,r)<0});$(function(e,r){return j(e,r)<1});$(function(e,r){return j(e,r)>0});$(function(e,r){return j(e,r)>=0});var kl=$(function(e,r){var n=j(e,r);return n<0?Mi:n?p$:Pi}),un=0;function P(e,r){return{a:e,b:r}}function q(e,r,n){return{a:e,b:r,c:n}}function Je(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ae);function ae(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ze(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ze(e.a,r);return n}var x={$:0};function Ze(e,r){return{$:1,a:e,b:r}}var Dl=$(Ze);function g(e){for(var r=x,n=e.length;n--;)r=Ze(e[n],r);return r}function ea(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Al=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});ye(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return g(i)});Fe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(ea(r).sort(function(n,a){return j(e(n),e(a))}))});$(function(e,r){return g(ea(r).sort(function(n,a){var t=o(e,n,a);return t===Pi?0:t===Mi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Bl=$(Math.pow);$(function(e,r){return r%e});var Fl=$(function(e,r){var n=r%e;return e===0?Gr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Rl=Math.PI,Ul=Math.cos,Vl=Math.sin,El=Math.tan,jl=Math.atan;$(Math.atan2);function Nl(e){return e}function Gl(e){return e===1/0||e===-1/0}var Wl=Math.ceil,Hl=Math.floor,Yl=Math.round,Il=Math.sqrt,to=Math.log,Jl=isNaN;function Ol(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var ql=$(function(e,r){return e+r});function Zl(e){var r=e.charCodeAt(0);return isNaN(r)?Y:K(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function Xl(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Ql(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Kl=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),eu=$(function(e,r){return r.split(e)}),ru=$(function(e,r){return r.join(e)}),nu=y(function(e,r,n){return n.slice(e,r)});function au(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var tu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),ou=$(function(e,r){return r.indexOf(e)>-1}),iu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var cu=$(function(e,r){var n=e.length;if(n<1)return x;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function ai(e){return e+""}function lu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:K(n==45?-r:r)}function uu(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?K(r):Y}function vu(e){return ea(e).join("")}function $u(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function fu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function su(e){return{$:0,a:e}}function bt(e){return{$:2,b:e}}var mu=bt(function(e){return typeof e=="boolean"?te(e):Ie("a BOOL",e)}),du=bt(function(e){return typeof e=="number"?te(e):Ie("a FLOAT",e)}),pu=bt(function(e){return typeof e=="string"?te(e):e instanceof String?te(e+""):Ie("a STRING",e)});function bu(e){return{$:3,b:e}}var gu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function br(e,r){return{$:9,f:e,g:r}}var hu=$(function(e,r){return{$:10,b:r,h:e}}),_u=$(function(e,r){return br(e,[r])}),Cu=y(function(e,r,n){return br(e,[r,n])});F(function(e,r,n,a){return br(e,[r,n,a])});ye(function(e,r,n,a,t){return br(e,[r,n,a,t])});Fe(function(e,r,n,a,t,i){return br(e,[r,n,a,t,i])});dt(function(e,r,n,a,t,i,c){return br(e,[r,n,a,t,i,c])});ie(function(e,r,n,a,t,i,c,l){return br(e,[r,n,a,t,i,c,l])});pt(function(e,r,n,a,t,i,c,l,u){return br(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return De(e,n)}catch(a){return me(o(Mt,"This is not valid JSON! "+a.message,r))}});var ti=$(function(e,r){return De(e,r)});function De(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?te(e.c):Ie("null",r);case 3:return gn(r)?oo(e.b,r,g):Ie("a LIST",r);case 4:return gn(r)?oo(e.b,r,yu):Ie("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ie("an OBJECT with a field named `"+n+"`",r);var v=De(e.b,r[n]);return Ee(v)?v:me(o(_o,n,v.a));case 7:var a=e.e;if(!gn(r))return Ie("an ARRAY",r);if(a>=r.length)return Ie("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=De(e.b,r[a]);return Ee(v)?v:me(o(zi,a,v.a));case 8:if(typeof r!="object"||r===null||gn(r))return Ie("an OBJECT",r);var t=x;for(var i in r)if(r.hasOwnProperty(i)){var v=De(e.b,r[i]);if(!Ee(v))return me(o(_o,i,v.a));t=Ze(P(i,v.a),t)}return te(Te(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=De(l[u],r);if(!Ee(v))return v;c=c(v.a)}return te(c);case 10:var v=De(e.b,r);return Ee(v)?De(e.h(v.a),r):v;case 11:for(var s=x,m=e.g;m.b;m=m.b){var v=De(m.a,r);if(Ee(v))return v;s=Ze(v.a,s)}return me(b$(Te(s)));case 1:return me(o(Mt,e.a,r));case 0:return te(e.a)}}function oo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=De(e,r[i]);if(!Ee(c))return me(o(zi,i,c.a));t[i]=c.a}return te(n(t))}function gn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function yu(e){return o(B$,e.length,function(r){return e[r]})}function Ie(e,r){return me(o(Mt,"Expecting "+e,r))}function Ar(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ar(e.b,r.b);case 6:return e.d===r.d&&Ar(e.b,r.b);case 7:return e.e===r.e&&Ar(e.b,r.b);case 9:return e.f===r.f&&io(e.g,r.g);case 10:return e.h===r.h&&Ar(e.b,r.b);case 11:return io(e.g,r.g)}}function io(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ar(e[a],r[a]))return!1;return!0}var Lu=$(function(e,r){return JSON.stringify(r,null,e)+""});function oi(e){return e}y(function(e,r,n){return n[e]=r,n});function Tr(e){return{$:0,a:e}}function Su(e){return{$:1,a:e}}function ur(e){return{$:2,b:e,c:null}}var Na=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function wu(e){return{$:5,b:e}}var Tu=0;function gt(e){var r={$:0,e:Tu++,f:e,g:null,h:[]};return ht(r),r}function ii(e){return ur(function(r){r(Tr(gt(e)))})}function ci(e,r){e.h.push(r),ht(e)}var xu=$(function(e,r){return ur(function(n){ci(e,r),n(Tr(un))})}),pa=!1,co=[];function ht(e){if(co.push(e),!pa){for(pa=!0;e=co.shift();)Pu(e);pa=!1}}function Pu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ht(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return _t(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function _t(e,r,n,a,t,i){var c=o(ti,e,r?r.flags:void 0);Ee(c)||Gr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Mu(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),uo(l,b.b,t(v))}return uo(l,u.b,t(v)),m?{ports:m}:{}}var Oe={};function Mu(e,r){var n;for(var a in Oe){var t=Oe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=ku(t,r)}return n}function zu(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function ku(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Na,l,wu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=gt(o(Na,l,e.b))}var Du=$(function(e,r){return ur(function(n){e.g(r),n(Tr(un))})});$(function(e,r){return o(xu,e.h,{$:0,a:r})});function li(e){return function(r){return{$:1,k:e,l:r}}}function Au(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var lo=[],ba=!1;function uo(e,r,n){if(lo.push({p:e,q:r,r:n}),!ba){ba=!0;for(var a;a=lo.shift();)Bu(a.p,a.q,a.r);ba=!1}}function Bu(e,r,n){var a={};Bn(!0,r,a,null),Bn(!1,n,a,null);for(var t in e)ci(e[t],{$:"fx",a:a[t]||{i:x,j:x}})}function Bn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Fu(e,t,a,r.l);n[t]=Ru(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Bn(e,c.a,n,a);return;case 3:Bn(e,r.o,n,{s:r.n,t:a});return}}function Fu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Oe[r].e:Oe[r].f;return o(i,t,a)}function Ru(e,r,n){return n=n||{i:x,j:x},e?n.i=Ze(r,n.i):n.j=Ze(r,n.j),n}function Uu(e){Oe[e]&&Gr(3)}$(function(e,r){return r});function Vu(e,r){return Uu(e),Oe[e]={f:Eu,u:r,a:ju},li(e)}var Eu=$(function(e,r){return function(n){return e(r(n))}});function ju(e,r){var n=x,a=Oe[e].u,t=Tr(null);Oe[e].b=t,Oe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ti,a,c);Ee(l)||Gr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Fn,or=typeof document<"u"?document:{};function Ct(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(sr(e,function(){}),t),{}});function Ga(e){return{$:0,a:e}}var ui=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:yt(n),e:t,f:e,b:i}})}),xr=ui(void 0),Nu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:yt(n),e:t,f:e,b:i}})}),Gu=Nu(void 0);function Wu(e,r,n,a){return{$:3,d:yt(e),g:r,h:n,i:a}}var Hu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return gr([e,r],function(){return e(r)})});y(function(e,r,n){return gr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return gr([e,r,n,a],function(){return p(e,r,n,a)})});ye(function(e,r,n,a,t){return gr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});Fe(function(e,r,n,a,t,i){return gr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});dt(function(e,r,n,a,t,i,c){return gr([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ie(function(e,r,n,a,t,i,c,l){return gr([e,r,n,a,t,i,c,l],function(){return ni(e,r,n,a,t,i,c,l)})});pt(function(e,r,n,a,t,i,c,l,u){return gr([e,r,n,a,t,i,c,l,u],function(){return Kn(e,r,n,a,t,i,c,l,u)})});var vi=$(function(e,r){return{$:"a0",n:e,o:r}}),Yu=$(function(e,r){return{$:"a1",n:e,o:r}}),$i=$(function(e,r){return{$:"a2",n:e,o:r}}),hr=$(function(e,r){return{$:"a3",n:e,o:r}}),Iu=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Ju(e){return e=="script"?"p":e}function Ou(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(vi,r.n,qu(e,r.o)):r});function qu(e,r){var n=At(r);return{$:r.$,a:n?p(F$,n<3?Zu:Xu,Se(e),r.a):o(En,e,r.a)}}var Zu=$(function(e,r){return P(e(r.a),r.b)}),Xu=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function yt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?vo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?vo(c,t,i):c[t]=i}return r}function vo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function sr(e,r){var n=e.$;if(n===5)return sr(e.k||(e.k=e.m()),r);if(n===0)return or.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=sr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Wa(c,r,e.d),c}var c=e.f?or.createElementNS(e.f,e.c):or.createElement(e.c);Fn&&e.c=="a"&&c.addEventListener("click",Fn(c)),Wa(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ct(c,sr(n===1?l[u]:l[u].b,r));return c}function Wa(e,r,n){for(var a in n){var t=n[a];a==="a1"?Qu(e,t):a==="a0"?rv(e,r,t):a==="a3"?Ku(e,t):a==="a4"?ev(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Qu(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Ku(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function ev(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function rv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=nv(r,i),e.addEventListener(t,c,Lt&&{passive:At(i)<2}),a[t]=c}}var Lt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Lt=!0}}))}catch{}function nv(e,r){function n(a){var t=n.q,i=De(t.a,a);if(!!Ee(i)){for(var c=At(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function av(e,r){return e.$==r.$&&Ar(e.a,r.a)}function fi(e,r){var n=[];return je(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=$v(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];je(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){$e(n,0,a,r);return}(f?!tv(m,d):m!==d)&&$e(n,2,a,d),je(h,b,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:$o(e,r,n,a,ov);return;case 2:$o(e,r,n,a,iv);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=St(e.d,r.d);C&&$e(n,4,a,C);var L=r.i(e.g,r.g);L&&$e(n,5,a,L);return}}}function tv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function $o(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=St(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function St(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=St(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&av(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function ov(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];je(s,i[v],n,++a),a+=s.b||0}}function iv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],C=h.a,L=b.a,_=h.b,T=b.b,B=void 0,J=void 0;if(C===L){f++,je(_,T,t,f),f+=_.b||0,m++,d++;continue}var W=l[m+1],N=u[d+1];if(W){var O=W.a,I=W.b;J=L===O}if(N){var E=N.a,X=N.b;B=C===E}if(B&&J){f++,je(_,X,t,f),Ir(i,t,C,T,d,c),f+=_.b||0,f++,Jr(i,t,C,I,f),f+=I.b||0,m+=2,d+=2;continue}if(B){f++,Ir(i,t,L,T,d,c),je(_,X,t,f),f+=_.b||0,m+=1,d+=2;continue}if(J){f++,Jr(i,t,C,_,f),f+=_.b||0,f++,je(I,T,t,f),f+=I.b||0,m+=2,d+=1;continue}if(W&&O===E){f++,Jr(i,t,C,_,f),Ir(i,t,L,T,d,c),f+=_.b||0,f++,je(I,X,t,f),f+=I.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Jr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];Ir(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&$e(n,8,a,{w:t,x:c,y:Q})}var si="_elmW6BL";function Ir(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Ir(e,r,n+si,a,t,i)}function Jr(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];je(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}Jr(e,r,n+si,a,t)}function mi(e,r,n,a){Or(e,r,n,0,0,r.b,a)}function Or(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Or(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Or(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Or(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var L=d===1?h[C]:h[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=Or(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function di(e,r,n,a){return n.length===0?e:(mi(e,r,n,a),Rn(e,n))}function Rn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=cv(t,a);t===e&&(e=i)}return e}function cv(e,r){switch(r.$){case 0:return lv(e,r.s,r.u);case 4:return Wa(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Rn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(sr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Rn(e,i.w),e;case 8:return uv(e,r);case 5:return r.s(e);default:Gr(10)}}function lv(e,r,n){var a=e.parentNode,t=sr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function uv(e,r){var n=r.s,a=vv(n.y,r);e=Rn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:sr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ct(e,a),e}function vv(e,r){if(!!e){for(var n=or.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ct(n,i.c===2?i.s:sr(i.z,r.u))}return n}}function wt(e){if(e.nodeType===3)return Ga(e.textContent);if(e.nodeType!==1)return Ga("");for(var r=x,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ze(o(hr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=x,v=e.childNodes,a=v.length;a--;)u=Ze(wt(v[a]),u);return p(xr,l,r,u)}function $v(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var fv=F(function(e,r,n,a){return _t(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=wt(l);return pi(i,function(v){var s=c(v),m=fi(u,s);l=di(l,u,m,t),u=s})})});F(function(e,r,n,a){return _t(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=or.title,v=or.body,s=wt(v);return pi(i,function(m){Fn=c;var d=l(m),f=xr("body")(x)(d.eu),h=fi(s,f);v=di(v,s,h,t),s=f,Fn=0,u!==d.fL&&(or.title=u=d.fL)})})});var Un=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function pi(e,r){r(e);var n=0;function a(){n=n===1?0:(Un(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Un(a),n=2)}}$(function(e,r){return o(Rt,Bt,ur(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Rt,Bt,ur(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Rt,Bt,ur(function(){history.replaceState({},"",r),e()}))});var sv={addEventListener:function(){},removeEventListener:function(){}},mv=typeof window<"u"?window:sv;y(function(e,r,n){return ii(ur(function(a){function t(i){gt(n(i))}return e.addEventListener(r,t,Lt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=De(e,r);return Ee(n)?K(n.a):Y});function bi(e,r){return ur(function(n){Un(function(){var a=document.getElementById(e);n(a?Tr(r(a)):Su(U$(e)))})})}function dv(e){return ur(function(r){Un(function(){r(Tr(e()))})})}$(function(e,r){return bi(r,function(n){return n[e](),un})});$(function(e,r){return dv(function(){return mv.scroll(e,r),un})});y(function(e,r,n){return bi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,un})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var pv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return K(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var bv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?K(m):Y}a.push(w(sc,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?K(v):Y}return n(w(sc,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var gv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/hv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function hv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Tt=new Float64Array(3),fo=new Float64Array(3),so=new Float64Array(3),_v=y(function(e,r,n){return new Float64Array([e,r,n])}),Cv=function(e){return e[0]},yv=function(e){return e[1]},Lv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Sv=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(gi);function hi(e,r,n){return n===void 0&&(n=new Float64Array(3)),Vn(gi(e,r,n),n)}$(hi);function _i(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Vn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/_i(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var wv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),qr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(qr);function Ha(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ha);$(function(e,r){var n,a=Tt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=qr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(qr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(qr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(qr(r,a)+e[14])/n,t});var Tv=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var xv=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Pv=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Mv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Mv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var zv=new Float64Array(16),kv=new Float64Array(16),Dv=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Av=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Ci(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Fe(Ci);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Ci(c,l,i,t,n,a)});function yi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Fe(yi);F(function(e,r,n,a){return yi(e,r,n,a,-1,1)});function Li(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],C=e[13],L=e[14],_=e[15],T=r[0],B=r[1],J=r[2],W=r[3],N=r[4],O=r[5],I=r[6],E=r[7],X=r[8],Q=r[9],be=r[10],ge=r[11],ue=r[12],ve=r[13],Ue=r[14],Ve=r[15];return n[0]=a*T+l*B+m*J+b*W,n[1]=t*T+u*B+d*J+C*W,n[2]=i*T+v*B+f*J+L*W,n[3]=c*T+s*B+h*J+_*W,n[4]=a*N+l*O+m*I+b*E,n[5]=t*N+u*O+d*I+C*E,n[6]=i*N+v*O+f*I+L*E,n[7]=c*N+s*O+h*I+_*E,n[8]=a*X+l*Q+m*be+b*ge,n[9]=t*X+u*Q+d*be+C*ge,n[10]=i*X+v*Q+f*be+L*ge,n[11]=c*X+s*Q+h*be+_*ge,n[12]=a*ue+l*ve+m*Ue+b*Ve,n[13]=t*ue+u*ve+d*Ue+C*Ve,n[14]=i*ue+v*ve+f*Ue+L*Ve,n[15]=c*ue+s*ve+h*Ue+_*Ve,n}$(Li);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],C=r[1],L=r[2],_=r[4],T=r[5],B=r[6],J=r[8],W=r[9],N=r[10],O=r[12],I=r[13],E=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*T+v*B,n[5]=t*_+l*T+s*B,n[6]=i*_+u*T+m*B,n[7]=0,n[8]=a*J+c*W+v*N,n[9]=t*J+l*W+s*N,n[10]=i*J+u*W+m*N,n[11]=0,n[12]=a*O+c*I+v*E+d,n[13]=t*O+l*I+s*E+f,n[14]=i*O+u*I+m*E+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Vn(r,Tt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/_i(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=h+f,T=b-d,B=h-f,J=c*c*v+u,W=C+m,N=b+d,O=C-m,I=l*l*v+u,E=n[0],X=n[1],Q=n[2],be=n[3],ge=n[4],ue=n[5],ve=n[6],Ue=n[7],Ve=n[8],Pr=n[9],Mr=n[10],da=n[11],hl=n[12],_l=n[13],Cl=n[14],yl=n[15];return a[0]=E*L+ge*_+Ve*T,a[1]=X*L+ue*_+Pr*T,a[2]=Q*L+ve*_+Mr*T,a[3]=be*L+Ue*_+da*T,a[4]=E*B+ge*J+Ve*W,a[5]=X*B+ue*J+Pr*W,a[6]=Q*B+ve*J+Mr*W,a[7]=be*B+Ue*J+da*W,a[8]=E*N+ge*O+Ve*I,a[9]=X*N+ue*O+Pr*I,a[10]=Q*N+ve*O+Mr*I,a[11]=be*N+Ue*O+da*I,a[12]=hl,a[13]=_l,a[14]=Cl,a[15]=yl,a});function Bv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Bv);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Fv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Fv);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=hi(e,r,Tt),t=Vn(Ha(n,a,fo),fo),i=Vn(Ha(a,t,so),so),c=zv,l=kv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Li(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mo=0;function an(e,r){for(;r.b;r=r.b)e(r.a)}function xt(e){for(var r=0;e.b;e=e.b)r++;return r}var Rv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Uv=ye(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Vv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Ev=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),jv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Nv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Gv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Wv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Hv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Yv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Iv=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Jv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ov=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},qv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Si=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},wi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Zv=function(e){e.gl.disable(e.gl.CULL_FACE)},Xv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Qv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Kv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},po=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],e$=[Jv,Ov,qv,Si,wi,Zv,Xv,Qv,Kv];function bo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function r$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Ti(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function n$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,L){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[L]:C[L][_];else i.forEach(function(T){for(_=0;_<h;_++)f[b++]=h===1?C[T][L]:C[T][L][_]})}var u=Ti(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(xt(n.b)*s);an(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function a$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=t$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*xt(r.b),indexBuffer:null,buffers:{}}}function t$(e,r){var n=new Uint32Array(xt(e)*r),a=0,t;return an(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function go(e,r){return e+"#"+r}var xi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Si(n),wi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=go(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=mo++,v||(v=bo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=mo++,s||(s=bo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=r$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=o$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=go(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),i$(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=a$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=n$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=Ti(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,T=0;T<C.arraySize;T++)a.enableVertexAttribArray(h+T),a.vertexAttribPointer(h+T,C.size,C.baseType,!1,_,L*T)}for(n.toggle=!n.toggle,an(qm(n),i.a),u=0;u<po.length;u++){var B=n[po[u]];B.toggle!==n.toggle&&B.enabled&&(e$[u](n),B.enabled=!1,B.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return an(t,e.g),r});function o$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function i$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var c$=y(function(e,r,n){return Wu(r,{g:n,f:{},h:e},m$,d$)}),l$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),u$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),v$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),$$=$(function(e,r){e.contextAttributes.antialias=!0}),f$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),s$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function m$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};an(function(t){return o(Om,r,t)},e.h);var n=or.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Rv(function(){return o(xi,e,n)})):(n=or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function d$(e,r){return r.f=e.f,xi(r)}var A=Dl,hn=Ml;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(hn,e,l,v)}else{var u=c.a;return p(hn,i,l,u)}});return p(hn,i,p(hn,e,r,t),a)});var Pt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Pt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ho=function(e){return p(Pt,y(function(r,n,a){return o(A,P(r,n),a)}),x,e)},Pi=1,p$=2,Mi=0,me=function(e){return{$:1,a:e}},Mt=$(function(e,r){return{$:3,a:e,b:r}}),_o=$(function(e,r){return{$:0,a:e,b:r}}),zi=$(function(e,r){return{$:1,a:e,b:r}}),te=function(e){return{$:0,a:e}},b$=function(e){return{$:2,a:e}},K=function(e){return{$:0,a:e}},Y={$:1},g$=tu,h$=Lu,we=ai,Cr=$(function(e,r){return o(ru,e,ea(r))}),zt=$(function(e,r){return g(o(eu,e,r))}),ki=function(e){return o(Cr,`
    `,o(zt,`
`,e))},vn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),wr=function(e){return p(vn,$(function(r,n){return n+1}),0,e)},_$=Al,C$=y(function(e,r,n){e:for(;;)if(j(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),ra=$(function(e,r){return p(C$,e,r,x)}),Di=$(function(e,r){return p(_$,e,o(ra,0,wr(r)-1),r)}),qe=$u,Ai=function(e){var r=qe(e);return 97<=r&&r<=122},Bi=function(e){var r=qe(e);return r<=90&&65<=r},y$=function(e){return Ai(e)||Bi(e)},L$=function(e){var r=qe(e);return r<=57&&48<=r},S$=function(e){return Ai(e)||Bi(e)||L$(e)},Te=function(e){return p(vn,A,x,e)},Wr=Zl,w$=$(function(e,r){return`

(`+(we(e+1)+(") "+ki(T$(r))))}),T$=function(e){return o(x$,e,x)},x$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Wr(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return y$(L)&&o(g$,S$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(we(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Cr,"",Te(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(we(wr(s))+" ways:"));return o(Cr,`

`,o(A,h,o(Di,w$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Cr,"",Te(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Cr,"",Te(r))+`:

    `):`Problem with the given value:

`}();return h+(ki(o(h$,4,f))+(`

`+d))}}),xe=32,Ya=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ia=Sl,Fi=Wl,kt=$(function(e,r){return to(r)/to(e)}),P$=Nl,tn=Fi(o(kt,2,xe)),Ri=w(Ya,0,tn,Ia,Ia),Ui=Tl,Vi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ei=Hl,Ja=wl,Ne=$(function(e,r){return j(e,r)>0?e:r}),M$=function(e){return{$:0,a:e}},Dt=xl,z$=$(function(e,r){e:for(;;){var n=o(Dt,xe,e),a=n.a,t=n.b,i=o(A,M$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Te(i)}}),k$=function(e){var r=e.a;return r},D$=$(function(e,r){e:for(;;){var n=Fi(r/xe);if(n===1)return o(Dt,xe,e).a;var a=o(z$,e,x),t=n;e=a,r=t;continue e}}),ji=$(function(e,r){if(r.l){var n=r.l*xe,a=Ei(o(kt,xe,n-1)),t=e?Te(r.z):r.z,i=o(D$,t,r.l);return w(Ya,Ja(r.p)+n,o(Ne,5,a*tn),i,r.p)}else return w(Ya,Ja(r.p),tn,Ia,r.p)}),A$=ye(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ji,!1,{z:a,l:n/xe|0,p:t});var i=Vi(p(Ui,xe,r,e)),c=e,l=r-xe,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),B$=$(function(e,r){if(e<=0)return Ri;var n=e%xe,a=p(Ui,n,e-n,r),t=e-n-xe;return S(A$,r,t,e,x,a)}),Ee=function(e){return!e.$},z=hu,Z=mu,M=gu,oe=du,En=_u,F$=Cu,Se=su,At=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},H=xr("div"),R$=function(e){return{$:2,a:e}},Ni=$(function(e,r){return e}),Gi=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Rr=function(e){return e},U$=Rr,Co=Fe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),V$=ou,yr=Xl,Br=nu,$n=$(function(e,r){return e<1?r:p(Br,e,yr(r),r)}),na=cu,aa=function(e){return e===""},ta=$(function(e,r){return e<1?"":p(Br,0,e,r)}),Wi=lu,yo=ye(function(e,r,n,a,t){if(aa(t)||o(V$,"@",t))return Y;var i=o(na,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Wi(o($n,c+1,t));if(l.$===1)return Y;var u=l;return K(se(Co,e,o(ta,c,t),u,r,n,a))}else return K(se(Co,e,t,Y,r,n,a))}),Lo=F(function(e,r,n,a){if(aa(a))return Y;var t=o(na,"/",a);if(t.b){var i=t.a;return S(yo,e,o($n,i,a),r,n,o(ta,i,a))}else return S(yo,e,"/",r,n,a)}),So=y(function(e,r,n){if(aa(n))return Y;var a=o(na,"?",n);if(a.b){var t=a.a;return w(Lo,e,K(o($n,t+1,n)),r,o(ta,t,n))}else return w(Lo,e,Y,r,n)});$(function(e,r){if(aa(r))return Y;var n=o(na,"#",r);if(n.b){var a=n.a;return p(So,e,K(o($n,a+1,r)),o(ta,a,r))}else return p(So,e,Y,r)});var E$=iu,Bt=function(e){},fn=Tr,j$=fn(0),Hi=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(vn,e,r,Te(m)):w(Hi,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),vr=y(function(e,r,n){return w(Hi,e,r,0,n)}),le=$(function(e,r){return p(vr,$(function(n,a){return o(A,e(n),a)}),x,r)}),jn=Na,Ft=$(function(e,r){return o(jn,function(n){return fn(e(n))},r)}),N$=y(function(e,r,n){return o(jn,function(a){return o(jn,function(t){return fn(o(e,a,t))},n)},r)}),G$=function(e){return p(vr,N$(A),fn(x),e)},W$=Du,H$=$(function(e,r){var n=r;return ii(o(jn,W$(e),n))}),Y$=y(function(e,r,n){return o(Ft,function(a){return 0},G$(o(le,H$(e),r)))}),I$=y(function(e,r,n){return fn(0)}),J$=$(function(e,r){var n=r;return o(Ft,e,n)});Oe.Task=zu(j$,Y$,I$,J$);var O$=li("Task"),Rt=$(function(e,r){return O$(o(Ft,e,r))}),q$=fv,Z$=Ol,Nn={$:1},Yi=function(e){return{$:2,a:e}},oa={$:0},Ae=$(function(e,r){return{$:0,a:e,b:r}}),re=y(function(e,r,n){return r(e(n))}),Hr=function(e){var r=e.b.B;return r.a},X$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return K(o(Ae,r,{B:i,ab:c,T:o(A,a,n)}))}else return Y},Ii=function(e){var r=e.b;return o(Ae,oa,r)},Xe=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Q$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Ii(n):n;case 2:var i=a.a.cX;return(j(i+r.eJ,Hr(n).db)>0?o(re,X$,Xe(o(Ae,Nn,t))):Rr)(o(Ae,Yi({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Gi,l.eA,Je(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ae,oa,{B:P(v,s),ab:x,T:o(A,t.B,t.T)})}}),Ji=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),K$=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ef=$(function(e,r){return Te(p(K$,e,r,x))}),Oi=y(function(e,r,n){if(r<=0)return x;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(ef,r-4,C))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Oi,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return g([_])}}),rf=$(function(e,r){return p(Oi,0,e,r)}),nf=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ae(Te(n),ae(g([a]),t)),c=o(rf,e,i),l=o(Ji,e,i);if(l.b){var u=l.a,v=l.b;return o(Ae,Nn,{B:u,ab:v,T:Te(c)})}else{var s=Te(c);if(s.b){var m=s.a,d=s.b;return o(Ae,Nn,{B:m,ab:x,T:d})}else return r}}),af=function(e){var r=e.b;return o(Ae,Nn,r)},tf=function(e){var r=e.b;return o(Ae,Yi({cX:Hr(e).db}),r)},of=$(function(e,r){switch(e.$){case 1:return af(r);case 2:return Ii(r);case 3:return tf(r);default:var n=e.a;return o(nf,n,r)}}),qi=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),cf=$(function(e,r){return Je(r,{av:e(r.av)})}),lf=function(e){return{$:3,a:e}},uf=function(e){return{$:2,a:e}},Zi=$(function(e,r){return{$:0,a:e,b:r}}),Xi=$(function(e,r){return{$:1,a:e,b:r}}),de=$(function(e,r){if(r.$)return Y;var n=r.a;return K(e(n))}),G=function(e){return e<0?-e:e},Ut=uu,vf=y(function(e,r,n){return o(Xe,0/0,Ut(o(e,r,n)))}),Qi=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),$f=Kl,Ki=function(e){return p($f,A,x,e)},ff=$(function(e,r){var n=o(Qi,function(a){return a!=="0"&&a!=="."},Ki(r));return ae(e&&n?"-":"",r)}),ne=ai,Oa=ql,ec=fu,rc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Wr(n);if(a.$===1)return"01";var t=a.a;return o(Oa,"0",rc(t))}else{var i=qe(r);return i>=48&&i<57?o(Oa,ec(i+1),n):"0"}},qa=Gl,sf=Jl,ia=function(e){return o(Oa,e,"")},nc=y(function(e,r,n){return e<=0?n:p(nc,e>>1,ae(r,r),e&1?ae(n,r):n)}),on=$(function(e,r){return p(nc,e,r,"")}),Za=y(function(e,r,n){return ae(n,o(on,e-yr(n),ia(r)))}),Xa=Ql,ac=function(e){var r=o(zt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},mf=function(e){var r=o(zt,"e",ne(G(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Xe,0,Wi(o(E$,"+",t)?o($n,1,t):t)),c=ac(n),l=c.a,u=c.b,v=ae(l,u),s=i<0?o(Xe,"0",o(de,function(m){var d=m.a,f=m.b;return d+("."+f)},o(de,qi(ia),Wr(ae(o(on,G(i),"0"),v))))):p(Za,i+1,"0",v);return ae(e<0?"-":"",s)}else{var n=r.a;return ae(e<0?"-":"",n)}else return""},df=y(function(e,r,n){if(qa(n)||sf(n))return ne(n);var a=n<0,t=ac(mf(G(n))),i=t.a,c=t.b,l=yr(i)+r,u=ae(o(on,-l+1,"0"),p(Za,l,"0",ae(i,c))),v=yr(u),s=o(Ne,1,l),m=o(e,a,p(Br,s,v,u)),d=p(Br,0,s,u),f=m?Xa(o(Xe,"1",o(de,rc,Wr(Xa(d))))):d,h=yr(f),b=f==="0"?f:r<=0?ae(f,o(on,G(r),"0")):j(r,yr(c))<0?p(Br,0,h-r,f)+("."+p(Br,h-r,h,f)):ae(i+".",p(Za,r,"0",c));return o(ff,a,b)}),tc=df($(function(e,r){var n=Wr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(qe(t))})),pf=vf(tc),bf=y(function(e,r,n){var a=o(kt,10,G(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(pf,t,n)}),oc=kl,ca=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(oc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return K(a);default:var l=e,u=i;e=l,r=u;continue e}}}),R=ye(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Qe={$:-2},Vr=ye(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(R,0,r,n,S(R,1,v,s,m,d),S(R,1,i,c,l,u))}else return S(R,e,i,c,S(R,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return S(R,0,v,s,S(R,1,h,b,C,L),S(R,1,r,n,d,t))}else return S(R,e,r,n,a,t)}),Qa=y(function(e,r,n){if(n.$===-2)return S(R,0,e,r,Qe,Qe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(oc,e,t);switch(u){case 0:return S(Vr,a,t,i,p(Qa,e,r,c),l);case 1:return S(R,a,t,r,c,l);default:return S(Vr,a,t,i,c,p(Qa,e,r,l))}}),Xr=y(function(e,r,n){var a=p(Qa,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(R,1,t,i,c,l)}else{var u=a;return u}}),gf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ic=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,C=d.e,L=v.e;return S(R,0,f,h,S(R,1,n,a,S(R,0,i,c,l,u),b),S(R,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,L=T.e;return S(R,1,n,a,S(R,0,i,c,l,u),S(R,0,s,m,d,L))}else return e},wo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,L=f.e;return S(R,0,i,c,S(R,1,u,v,s,m),S(R,1,n,a,d,S(R,0,h,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,d=_.e,B=e.e;B.a;var h=B.b,b=B.c,C=B.d,L=B.e;return S(R,1,n,a,S(R,0,i,c,T,d),S(R,0,h,b,C,L))}else return e},hf=dt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(R,n,l,u,v,S(R,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,wo(r)}else break e;else return c.a,c.d,wo(r);else break e;return r}}),xn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(R,r,n,a,xn(t),l);var u=ic(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Vr,v,s,m,xn(d),f)}else return Qe}else return S(R,r,n,a,xn(t),l)}else return Qe},Qr=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(j(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(R,n,a,t,o(Qr,e,i),c);var u=ic(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Vr,v,s,m,o(Qr,e,d),f)}else return Qe}else return S(R,n,a,t,o(Qr,e,i),c);else return o(_f,e,ni(hf,e,r,n,a,t,i,c))}),_f=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Sr(e,a)){var l=gf(c);if(l.$===-1){var u=l.b,v=l.c;return S(Vr,n,u,v,i,xn(c))}else return Qe}else return S(Vr,n,a,t,i,o(Qr,e,c))}else return Qe}),Cf=$(function(e,r){var n=o(Qr,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(R,1,a,t,i,c)}else{var l=n;return l}}),_n=y(function(e,r,n){var a=r(o(ca,e,n));if(a.$)return o(Cf,e,n);var t=a.a;return p(Xr,e,t,n)}),yf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(_n,r,de(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Xi,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(_n,r,de(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Zi,P(i,c),p(bf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(_n,r,de(function(a){return a.$===3?lf(n):a}));default:var r=e.a,n=e.b;return o(_n,r,de(function(a){return a.$===2?uf(n):a}))}},Lf=function(e){return cf(yf(e))},Sf=$(function(e,r){return o(le,Lf(e),r)}),wf=$(function(e,r){return Je(r,{eA:o(Sf,e,r.eA)})}),Tf=$(function(e,r){var n=r.a,a=r.b;return o(Ae,n,Je(a,{B:o(qi,wf(e),a.B)}))}),xf=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Pf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ae,a,Je(t,{B:o(xf,o(e,i.a,r),i)}))}),Mf=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Je(a,{aL:!a.aL});case 2:var t=n.a;return Je(a,{G:p(Q$,e,t,a.G)});case 3:var i=n.a;return Je(a,{G:o(Tf,i,a.G)});case 4:var c=n.a;return Je(a,{G:p(Pf,r,c,a.G)});default:var l=n.a;return Je(a,{G:o(of,l,a.G)})}}),zf=$(function(e,r){return o(Ae,oa,{B:P(e,r(e)),ab:x,T:x})}),kf=Au,To=kf(x),Gn=bu,cn=pu,Df=Vu("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return Se({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",oe))},o(M,"devicePixelRatio",oe))},o(M,"dt",oe))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return Se({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Gn(cn)))},o(M,"left",Z))},o(M,"pressedKeys",Gn(cn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return Se({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",oe))},o(M,"y",oe))))},o(M,"screen",o(z,function(r){return o(z,function(n){return Se({eW:n,fS:r})},o(M,"height",oe))},o(M,"width",oe))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return Se({eE:r,eF:e})},o(M,"deltaX",oe))},o(M,"deltaY",oe))))),Af=function(e){return{$:4,a:e}},Bf={$:0},Ff=oi,Re=$(function(e,r){return o($i,e,Ff(r))}),V=Re("className"),Rf=function(e){var r=e.b.B;return r.b},Wn=Re("id"),Uf=Hu,Hn=Uf,Vf=Yu,ee=Vf,Ef={$:1},jf=function(e){return{$:3,a:e}},Nf=function(e){return{$:5,a:e}},xo=xr("a"),Vt=xr("button"),Po=function(e){return o(Re,"href",Ou(e))},Gf=hr("clip-rule"),he=hr("d"),Wf=hr("fill"),cc=ui("http://www.w3.org/2000/svg"),Hf=cc("svg"),Yf=hr("viewBox"),If=o(Iu,"http://www.w3.org/XML/1998/namespace","xml:space"),Me=Hf(g([Yf("0 0 24 24"),Wf("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),If("http://www.w3.org/2000/svg")])),Jf=hr("fill-rule"),_e=cc("path"),Lr={eD:Me(g([o(_e,g([he("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),x)])),eQ:Me(g([o(_e,g([he("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),x)])),eV:Me(g([o(_e,g([he("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),x)])),fe:Me(g([o(_e,g([he("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),x),o(_e,g([he("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),x)])),ff:Me(g([o(_e,g([he("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),x),o(_e,g([he("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),x)])),fp:Me(g([o(_e,g([he("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),x)])),fq:Me(g([o(_e,g([he("M7 5V19L18 12L7 5Z")]),x)])),fr:Me(g([o(_e,g([he("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),x)])),fs:Me(g([o(_e,g([he("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),x)])),fM:Me(g([o(_e,g([Jf("evenodd"),Gf("evenodd"),he("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),x)])),fN:Me(g([o(_e,g([he("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),x)])),f0:Me(g([o(_e,g([he("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),x)]))},Of=function(e){return{$:0,a:e}},lc=vi,uc=$(function(e,r){return o(lc,e,Of(r))}),Et=function(e){return o(uc,"click",Se(e))},Mo=Re("target"),qf=Re("title"),Ka=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(R,n,a,o(e,a,t),o(Ka,e,i),o(Ka,e,c))}),Zf=Ga,lr=Zf,Xf=function(e){return p(Pt,y(function(r,n,a){return o(A,n,a)}),x,e)},Qf=$(function(e,r){return{$:3,a:e,b:r}}),Kf=$(function(e,r){return{$:2,a:e,b:r}}),es=$(function(e,r){return{$:0,a:e,b:r}}),rs=$(function(e,r){return{$:1,a:e,b:r}}),la=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ns=w(la,0/255,0/255,0/255,1),as=oi,vc=$(function(e,r){return o($i,e,as(r))}),ts=vc("checked"),Ge=Yl,os=y(function(e,r,n){return ae(o(on,e-yr(n),ia(r)),n)}),is=Fl,$c=function(e){var r=function(n){return n<10?we(n):ia(ec(87+n))};return e<16?r(e):ae($c(e/16|0),r(o(is,16,e)))},cs=o(re,$c,o(os,2,"0")),fc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},ls=function(e){var r=fc(e),n=r.cM,a=r.cc,t=r.b5;return o(Cr,"",o(A,"#",o(le,o(re,Ge,cs),g([n*255,a*255,t*255]))))},et=Re("htmlFor"),rt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),Yn=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),us=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),ua=$(function(e,r){return p(vr,us(e),x,r)}),sc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),vs=bv,$s=vu,fs=$(function(e,r){if(r.$)return me(e);var n=r.a;return te(n)}),ss=pv,ms=function(e){return o(ss,{ew:!1,fg:!1},e)},va=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return Y},ds=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return te(e(n))}}),ps=function(e){return{$:2,a:e}},bs=function(e){return{$:0,a:e}},gs=function(e){return{$:1,a:e}},ga=$(function(e,r){return qe(r)-qe(e)}),ha=y(function(e,r,n){var a=qe(n);return j(qe(e),a)<1&&j(a,qe(r))<1}),hs=$(function(e,r){var n=function(t){return j(t,e)<0?te(t):me(gs(r))},a=p(ha,"0","9",r)?te(o(ga,"0",r)):p(ha,"a","z",r)?te(10+o(ga,"a",r)):p(ha,"A","Z",r)?te(10+o(ga,"A",r)):me(bs(r));return o(Yn,n,a)}),mc=$(function(e,r){var n=Wr(r);if(n.$===1)return te(0);var a=n.a,t=a.a,i=a.b;return o(Yn,function(c){return o(Yn,function(l){return te(c+l*e)},o(mc,e,i))},o(hs,e,t))}),_s=$(function(e,r){return 2<=e&&e<=36?o(mc,e,Xa(r)):me(ps(e))}),Cs=_s(16),ys=y(function(e,r,n){return w(la,e,r,n,1)}),dc=F(function(e,r,n,a){return w(la,e,r,n,a)}),sn=Bl,Ls=$(function(e,r){var n=o(sn,10,e);return Ge(r*n)/n}),Ss=au,ws=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ki(n);if(a.b&&!a.b.b){var t=a.a;return $s(g([t,t]))}else return n};return o(re,Ss,o(re,function(n){return o(de,function(a){return p(vs,1,a,n)},ms(e))},o(re,rt(va),o(re,de(function(n){return n.fG}),o(re,de(ua(Rr)),o(re,fs("Parsing hex regex failed"),Yn(function(n){var a=o(le,o(re,r,o(re,Cs,ds(P$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return te(w(dc,t/255,c/255,u/255,o(Ls,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return te(p(ys,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),In=xr("input"),nt=xr("label"),at=Re("name"),pc=$(function(e,r){return p(vr,M,r,e)}),Ts=o(pc,g(["target","checked"]),Z),xs=function(e){return o(uc,"change",o(En,e,Ts))},Ps=function(e){return P(e,!0)},Ms=function(e){return{$:1,a:e}},zs=$(function(e,r){return o(lc,e,Ms(r))}),ks=o(pc,g(["target","value"]),cn),jt=function(e){return o(zs,"input",o(En,Ps,o(En,e,ks)))},bc=Re("max"),gc=Re("min"),hc=function(e){return o(Re,"step",e)},Jn=Re("type"),Nt=Re("value"),zo=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(H,x,g([o(nt,g([et(r)]),g([o(H,g([V("relative w-full")]),g([o(H,g([V("inline-block")]),g([lr(r)])),o(H,g([V("inline-block float-right")]),g([lr(ne(n))]))]))])),o(In,g([Jn("range"),o(ee,"width","100%"),Wn(r),at(r),gc(ne(a)),bc(ne(t)),Nt(ne(n)),hc(ne(i)),jt(o(re,Ut,o(re,Xe(42),c)))]),x)]))},Ds=$(function(e,r){if(r.$)return e;var n=r.a;return n}),As=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(H,g([V("h-12 py-4")]),g([o(nt,g([V("block"),et(e)]),g([o(In,g([V("relative bottom-[1px] align-middle mr-2"),Jn("checkbox"),Wn(e),at(e),xs(Qf(e)),ts(c)]),x),lr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return zo({cf:e,cr:i,cv:t,cz:es(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return zo({cf:e,cr:i,cv:t,cz:o(re,Ge,rs(e)),cV:1,c0:c});default:var c=r.a;return o(H,x,g([o(H,g([o(ee,"margin-bottom","6px")]),g([o(nt,g([et(e)]),g([lr(e)]))])),o(In,g([Jn("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),Wn(e),at(e),jt(function(l){return o(Kf,e,o(Ds,ns,ws(l)))}),Nt(ls(c))]),x)]))}}),Bs=function(e){return o(H,g([V("p-4 border-y-[0.5px] border-white20")]),g([o(H,g([V("text-lg pb-2")]),g([lr(e.fh)])),o(H,g([V("pl-2 pr-2")]),Xf(o(Ka,As,e.av)))]))},Fs=function(e){return o(H,g([V("text-xs text-white60")]),o(le,Bs,e))},Rs=function(e){return o(H,g([V("absolute left-[104px] bottom-2 text-sm text-white40")]),g([lr("clock: "+o(tc,3,Hr(e).db))]))},Us=function(e){e.a;var r=e.b.T;return o(de,function(n){return Ge(60/(Hr(e).db-n))},o(de,o(re,k$,function(n){return n.db}),va(o(Ji,59,r))))},Vs=function(e){return o(H,g([V("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Us(e);if(r.$===1)return g([lr("... Fps")]);var n=r.a;return g([lr(we(n)+" Fps")])}())},Es=function(e){return{$:0,a:e}},js=function(e){var r=e.b.T;return wr(r)},Ns=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return wr(r)+1+wr(n)},Gs=function(e){return o(In,g([V("absolute w-full"),Jn("range"),gc(we(0)),bc(we(Ns(e)-1)),Nt(we(js(e))),hc(we(1)),jt(o(re,Ut,o(re,Xe(42),o(re,Ge,Es))))]),x)},ko={$:1},Do={$:3},Ao={$:2},tt=function(e){return!e.b},_c=vc("disabled"),_a=y(function(e,r,n){return o(Vt,g([V("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),V(n),_c(e),Et(r)]),g([lr("REC")]))}),Ca=y(function(e,r,n){return o(Vt,g([V("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),_c(e),Et(n)]),g([o(H,g([V("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Ws=function(e){var r=e.a,n=e.b.ab;return o(H,g([V("py-1")]),g([function(){switch(r.$){case 0:return p(_a,!1,ko,"text-red-500 font-bold");case 1:return p(_a,!1,Ao,"text-white60 hover:text-white80 font-bold");default:return p(_a,!0,Ao,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ca,tt(n),Lr.fq,Do);case 1:return p(Ca,tt(n),Lr.fq,Do);default:return p(Ca,!1,Lr.fp,ko)}}()]))},Hs=function(e){return o(H,g([V("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Gs(e),Ws(e),Vs(e),Rs(e)]))},Ys=function(e){var r=e.a;return Sr(r,oa)},Is=$(function(e,r){var n=Ys(r.G)?o(H,x,x):o(H,g([V("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.fs.fU+.5*e.cS.fS)+"px"),o(ee,"top",ne(-e.fs.fY+.5*e.cS.eW)+"px")]),g([o(H,g([V(e.fs.e4?"text-black80":"text-black40")]),g([Lr.fs]))]));return o(H,x,g([n]))}),Js=$(function(e,r){var n=o(Vt,g([V(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Et(Ef),qf("Distraction Free Mode")]),g([Lr.f0])),a=40,t=260,i=o(H,g([V("absolute w-8 bottom-12")]),g([o(xo,g([V("text-twitterBlue40 hover:text-twitterBlue"),Po("https://twitter.com/AzizErkalSelman"),Mo("_blank")]),g([Lr.fN]))])),c=80,l=o(H,g([V("absolute w-8 bottom-2")]),g([o(xo,g([V("text-githubCat40 hover:text-githubCat"),Po("https://github.com/erkal/elm-3d-playground-exploration"),Mo("_blank")]),g([Lr.eQ]))])),u=e.cS.fS>640?q(e.cS.eW,a+t,e.cS.fS-(a+t)):q(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(H,g([V("fixed w-10 h-10 p-1")]),g([n])):o(H,x,g([o(H,g([V("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),g([n,i,l])),o(H,g([V("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),g([o(Hn,jf,Fs(Hr(r.G).eA))])),o(H,g([V("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),g([o(Hn,Nf,Hs(r.G))])),o(Is,e,r)]))}),Os=y(function(e,r,n){var a=Rf(n.G),t=Hr(n.G);return o(H,g([V("bg-black40"),V("select-none"),V("antialiased"),V("font-mono"),o(ee,"width",ne(t.cS.fS)+"px"),o(ee,"height",ne(t.cS.eW)+"px")]),g([o(H,g([V("fixed")]),g([o(Hn,Ni(Bf),o(e,t,a))])),o(H,g([Wn("gui")]),g([o(Js,t,n),o(Hn,Af,o(r,t,a))]))]))}),qs=Fe(function(e,r,n,a,t,i){var c=$(function(u,v){return P(w(Mf,r,i,u,v),To)}),l=function(u){var v=o(Gi,n,u.e1);return P({aL:u.e1.cS.fS<500,G:o(zf,v,a)},To)};return q$({e0:l,fH:Ni(Df(R$)),fO:c,fQ:o(Os,e,t)})}),Zs=F(function(e,r,n,a){return se(qs,e,r,n,a,$(function(t,i){return o(H,x,x)}),y(function(t,i,c){return c}))}),Xs=function(e){return{}},Qs=y(function(e,r,n){return{av:n,e5:r,fh:e}}),Cc=Qe,Ks=function(e){return p(vn,$(function(r,n){var a=r.a,t=r.b;return p(Xr,a,t,n)}),Cc,e)},em=y(function(e,r,n){return p(Qs,e,r,Ks(n))}),ya=em,er=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Zi,P(a,t),n))}),Bo=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Xi,P(a,t),n))}),rm=g([p(ya,"Camera",!0,g([p(er,"camera x",P(0,16),8),p(er,"camera y",P(0,10),0),p(er,"camera z",P(0,16),6)])),p(ya,"Parameters",!0,g([p(er,"radius",P(0,6),1),p(Bo,"number of cubes",P(1,100),19),p(Bo,"number of waves",P(1,20),2),p(er,"cube size",P(.1,4),1),p(er,"cycle duration",P(1,10),5),p(er,"wave height",P(.5,6),1.5)])),p(ya,"Colors and light",!0,g([p(er,"saturation",P(0,1),.8),p(er,"lightness",P(0,1),.7)]))]),nm=$(function(e,r){return r}),am=function(e){var r=e;return r},tm=function(e){var r=e;return am(r.er)},yc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),om=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),im=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cm=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),lm=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),um=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),vm=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),$m=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(vm,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(yc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(om,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(im,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(um,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(cm,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(lm,n,a,t,1);case 8:return e;case 9:return e;default:return e}},fm={$:0},On=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Ne,n,a)}),sm=$(function(e,r){return j(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(sm,n,a)}),mm=ie(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=On(c(u)),m=o(fe,s.dR,e),d=o(ce,s.dO,r),f=o(fe,s.dS,n),h=o(ce,s.dP,a),b=o(fe,s.dT,t),C=o(ce,s.dQ,i),L=c,_=v;e=m,r=d,n=f,a=h,t=b,i=C,c=L,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),dm=y(function(e,r,n){var a=On(e(r));return Kn(mm,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),La=$(function(e,r){var n=e,a=r;return j(a,n)<1}),pm=function(e){return o(La,e.dO,e.dR)&&o(La,e.dP,e.dS)&&o(La,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},qn=function(e){var r=e;return r},Kr=function(e){var r=e;return r.fU},en=function(e){var r=e;return r.fY},rn=function(e){var r=e;return r.c5},bm=function(e){var r=qn(e),n=r.a,a=r.b,t=r.c,i=Kr(n),c=en(n),l=rn(n),u=Kr(a),v=en(a),s=rn(a),m=Kr(t),d=en(t),f=rn(t);return pm({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,s,f))})},Lc=Sv,mn=function(e){var r=e;return r},mr=function(e){return Lc(mn(e))},Sc=function(e){var r=e;return r},wc=function(e){return Lc(Sc(e))},Gt=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),ot=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),Tc=function(e){return e},fr=Il,xc={fU:0,fY:0,c5:0},gm=$(function(e,r){var n=e,a=r,t=o(Ne,G(a.fU),o(Ne,G(a.fY),G(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=fr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return xc}),hm=gm(Tc(1)),Pc=y(function(e,r,n){var a=o(ot,r,n),t=o(ot,e,r);return hm(o(Gt,a,t))}),_m=function(e){var r=qn(e),n=r.a,a=r.b,t=r.c,i=wc(p(Pc,n,a,t));return q({o:i,bT:mr(n)},{o:i,bT:mr(a)},{o:i,bT:mr(t)})},Cm=$(function(e,r){return{$:2,a:e,b:r}}),ym=Cm({df:3,$7:0,dV:4}),Lm=function(e){if(e.b){var r=e.a,n=e.b,a=ym(o(le,_m,e)),t=p(dm,bm,r,n);return w(yc,t,e,a,0)}else return fm},ze=y(function(e,r,n){return q(e,r,n)}),Pn=function(e){return e},$r=$(function(e,r){var n=r;return e*n}),He=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Mc=function(){var e=Pn(1),r=Pn(1),n=Pn(1),a=o($r,-.5,e),t=o($r,-.5,r),i=o($r,-.5,n),c=p(He,i,t,a),l=o($r,.5,e),u=p(He,i,t,l),v=o($r,.5,r),s=p(He,i,v,a),m=p(He,i,v,l),d=o($r,.5,n),f=p(He,d,t,a),h=p(He,d,v,a),b=p(He,d,t,l),C=p(He,d,v,l);return $m(Lm(g([p(ze,c,h,f),p(ze,c,s,h),p(ze,u,b,C),p(ze,u,C,m),p(ze,f,h,C),p(ze,f,C,b),p(ze,c,m,s),p(ze,c,u,m),p(ze,c,f,b),p(ze,c,b,u),p(ze,s,C,h),p(ze,s,m,C)])))}(),Cn={$:0},Sm=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),wm=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=wc(p(Pc,u,l,c)),s={o:v,bT:mr(u)},m={o:v,bT:mr(l)},d={o:v,bT:mr(c)};return o(A,s,o(A,m,o(A,d,n)))}),Tm=function(e){var r=e;return r.D},xm=F(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return K(p(e,t,i,c))}),it=4294967295>>>32-tn,ct=Pl,Pm=y(function(e,r,n){e:for(;;){var a=it&r>>>e,t=o(ct,a,n);if(t.$){var v=t.a;return o(ct,it&r,v)}else{var i=t.a,c=e-tn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Mm=function(e){return e>>>5<<5},zm=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||j(e,n)>-1?Y:j(e,Mm(n))>-1?K(o(ct,it&e,i)):K(p(Pm,a,e,t))}),km=function(e){var r=e;return r.ah},Sa=$(function(e,r){return o(zm,e,km(r))}),Dm=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(xm,y(function(c,l,u){return q(c,l,u)}),o(Sa,a,e),o(Sa,t,e),o(Sa,i,e))};return o(ua,r,Tm(e))},Am=y(function(e,r,n){e:for(;;){var a=o(Dt,xe,e),t=a.a,i=a.b;if(j(Ja(t),xe)<0)return o(ji,!0,{z:r,l:n,p:t});var c=i,l=o(A,Vi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),zc=function(e){return e.b?p(Am,e,x,0):Ri},Bm=y(function(e,r,n){return e(r(n))}),Fm=$(function(e,r){return!o(Qi,o(Bm,Z$,e),r)}),Rm=$(function(e,r){return p(vr,$(function(n,a){return e(n)?o(A,n,a):a}),x,r)}),Um=function(e){var r=e.a;return r},Vm=$(function(e,r){var n=Um(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&j(i,n)<0&&c>=0&&j(c,n)<0&&l>=0&&j(l,n)<0};return o(Fm,a,r)?{D:r,ah:e}:{D:o(Rm,a,r),ah:e}}),Em=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jm=Em({df:1,$7:3,dV:4}),lt=function(e){var r=e;return r},Mn=$(function(e,r){var n=lt(r),a=lt(e);return P(q(a.fU,a.fY,a.c5),q(n.fU,n.fY,n.c5))}),Wt=_v,Fo=p(Wt,0,0,0),wa=Fe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ca,o(Mn,e,r),t);if(v.$){var m={o:Fo,bT:mr(r)},d={o:Fo,bT:mr(e)},f=u+1,h=u;return q(o(A,q(n,h,f),o(A,q(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return q(o(A,q(n,s,a),c),l,u)}}),Nm=ye(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,C=e,L=r,_=v,T=a+3,B=se(wa,s,d,f,b,r,se(wa,m,s,h,f,r,se(wa,d,m,b,h,r,t)));e=C,r=L,n=_,a=T,t=B;continue e}else{var J=t,W=J.a,N=J.b;return P(W,Te(N))}}),Gm=ye(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,C=p(Xr,o(Mn,d,s),f,p(Xr,o(Mn,s,m),h,p(Xr,o(Mn,m,d),b,t))),L=o(A,q(b,h,f),a),_=e,T=v,B=n+3,J=L,W=C;e=_,r=T,n=B,a=J,t=W;continue e}else return q(a,t,n)}),_r=y(function(e,r,n){var a=Dm(n),t=p(vr,wm(r),x,a),i=S(Gm,r,a,0,x,Cc),c=i.a,l=i.b,u=i.c,v=S(Nm,r,l,a,0,q(c,x,u)),s=v.a,m=v.b,d=tt(m)?t:ae(t,m);return p(Sm,e,o(Vm,zc(d),s),o(jm,d,s))}),Wm=$(function(e,r){return r.b?p(vr,A,r,e):e}),dr=function(e){return p(vr,Wm,x,e)},Ro=function(e){return{D:o(le,function(r){return q(3*r,3*r+1,3*r+2)},o(ra,0,wr(e)-1)),ah:zc(dr(o(le,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},Hm=function(e){switch(e.$){case 0:return Cn;case 1:var a=e.a,r=e.b,n=o(le,qn,r);return p(_r,a,Rr,Ro(n));case 2:var a=e.a,r=e.b,n=o(le,qn,r);return p(_r,a,Rr,Ro(n));case 3:var a=e.a,t=e.b;return p(_r,a,Rr,t);case 4:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bT},t);case 8:return Cn;case 9:return Cn;default:return Cn}},Uo=Hm(Mc),Ym=function(e){var r=e;return r.aK},kc={$:0},k=kc,Dc=function(e){return{$:4,a:e}},Im=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Ht=function(e){return Dc(o(Im,e,x))},We=$(function(e,r){return{$:1,a:e,b:r}}),Jm={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Om=$(function(e,r){switch(r.$){case 0:return o(l$,e,r);case 1:return o(u$,e,r);case 2:return o(v$,e,r);case 3:return o($$,e,r);case 4:return o(f$,e,r);default:return o(s$,e,r)}}),qm=$(function(e,r){switch(r.$){case 0:return o(Vv,e,r);case 1:return o(Ev,e,r);case 2:return o(jv,e,r);case 3:return o(Nv,e,r);case 4:return o(Gv,e,r);case 5:return o(Wv,e,r);case 6:return o(Hv,e,r);case 7:return o(Yv,e,r);default:return Iv(e)}}),Le=Uv,Zm=1029,Xm=function(e){return{$:5,a:e}},Ac=function(e){var r=e;return Xm(r)},Qm=Ac(Zm),Km=1028,ed=Ac(Km),Ke=y(function(e,r,n){return r===1?e?o(A,Qm,n):o(A,ed,n):n}),Bc={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ta=F(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){return S(Le,p(Ke,l,a,m),Bc,Jm,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),rd={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Fc={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rr=F(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){return S(Le,p(Ke,l,a,m),Fc,rd,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Rc=$(function(e,r){return{$:3,a:e,b:r}}),nd={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Uc={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ad=F(function(e,r,n,a){return o(Rc,n,ie(function(t,i,c,l,u,v,s,m){return S(Le,m,Uc,nd,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),td={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Yt=function(e){var r=e;return r},Vc=wv,nr=ye(function(e,r,n,a,t){return o(We,n,ie(function(i,c,l,u,v,s,m,d){return S(Le,p(Ke,u,t,d),Fc,td,a,{aN:o(Vc,Yt(r),e),b:l,c,d:s,e:i,f:v})}))}),od={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},id=ye(function(e,r,n,a,t){return o(Rc,a,ie(function(i,c,l,u,v,s,m,d){return S(Le,d,Uc,od,t,{aN:o(Vc,Yt(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),cd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},Ec={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},yn=F(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Ke,l,a,m),Ec,cd,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),jc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Nc={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ld=Fe(function(e,r,n,a,t,i){return o(We,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return S(Le,p(Ke,v,i,f),Nc,jc,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cq:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Gc={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},ud=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(We,u,ie(function(m,d,f,h,b,C,L,_){var T=L.a,B=L.b;return S(Le,p(Ke,h,s,_),Nc,Gc,v,{b4:e,b7:r,b8:i,b9:a,P:B,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:d,aW:c,d:C,cR:n,e:m,a$:l,f:b})}))}}}}}}}}}}},vd={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Ln=Fe(function(e,r,n,a,t,i){return o(We,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return S(Le,p(Ke,v,i,f),Ec,vd,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ct:n,b:u,c:l,d:m,cQ:r,e:c,f:s})}))}),$d=function(e){return{$:0,a:e}},Vo=$(function(e,r){return{$:1,a:e,b:r}}),nn=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),$a=Cv,fa=yv,sa=Lv,Yr=Tv,fd=function(e){return w(Yr,$a(e),fa(e),sa(e),1)},It=w(Yr,0,0,0,0),zn=$(function(e,r){if(r.$){var a=r.a.C;return P(a,It)}else{var n=r.a;return P(e,fd(n))}}),sd=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Vo,P(t,It),o(nn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Vo,o(zn,t,e),o(nn,t,r))}else{var a=n.a.a;return n.b.a,$d(a)}}),md=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Sn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),dd=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Fr=gv,pd=function(e){return o(Fr,e,1)},ut=o(Fr,0,0),zr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,ut)}else{var n=r.a;return P(e,pd(n))}}),bd=F(function(e,r,n,a){var t=w(dd,e,r,n,a);if(t.a.$){var u=t.a.a.C;return w(Sn,P(u,It),o(zr,u,r),o(zr,u,n),o(nn,u,a))}else if(t.b.$){var u=t.b.a.C;return w(Sn,o(zn,u,e),P(u,ut),o(zr,u,n),o(nn,u,a))}else if(t.c.$){var u=t.c.a.C;return w(Sn,o(zn,u,e),o(zr,u,r),P(u,ut),o(nn,u,a))}else if(t.d.$){var u=t.d.a.C;return w(Sn,o(zn,u,e),o(zr,u,r),o(zr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(md,i,c,l)}}),gd={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},xa=ye(function(e,r,n,a,t){return o(We,n,ie(function(i,c,l,u,v,s,m,d){return S(Le,p(Ke,u,t,d),Bc,gd,a,{b1:Yt(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Wc={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},hd=F(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Ke,l,a,m),Wc,jc,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),_d=pt(function(e,r,n,a,t,i,c,l,u){return o(We,c,ie(function(v,s,m,d,f,h,b,C){var L=b.a,_=b.b;return S(Le,p(Ke,d,u,C),Wc,Gc,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,cu:t,b:m,c:s,aW:e,d:h,cR:n,e:v,a$:0,f})}))}),Jt=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Cd=function(e){var r=e;return p(Jt,r.dR,r.dO,.5)},yd=function(e){var r=e;return p(Jt,r.dS,r.dP,.5)},Ld=function(e){var r=e;return p(Jt,r.dT,r.dQ,.5)},Sd=function(e){return p(He,Cd(e),yd(e),Ld(e))},wd=function(e){var r=e;return r.dO},Td=function(e){var r=e;return r.dP},Hc=function(e){var r=e;return r.dQ},xd=function(e){var r=e;return r.dR},Pd=function(e){var r=e;return r.dS},Yc=function(e){var r=e;return r.dT},ir=$(function(e,r){var n=e,a=r;return a-n}),Ic=function(e){return q(o(ir,xd(e),wd(e)),o(ir,Pd(e),Td(e)),o(ir,Yc(e),Hc(e)))},U=function(e){var r=Ic(e),n=r.a,a=r.b,t=r.c;return{ey:mn(Sd(e)),eS:n/2,eT:a/2,eU:t/2}},Md=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return w(Ta,l,U(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Ta,l,U(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Ta,l,U(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(rr,n,U(t),c,a);case 8:var t=r.a,c=r.c;return w(rr,n,U(t),c,0);case 9:var t=r.a,c=r.c;return w(rr,n,U(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(ad,n,i,U(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(xa,l,v,U(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(xa,l,v,U(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(xa,l,v,U(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nr,u,v,U(t),c,a);case 8:var t=r.a,c=r.c;return S(nr,u,v,U(t),c,0);case 9:var t=r.a,c=r.c;return S(nr,u,v,U(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(id,u,v,i,U(t),c)}}case 2:e.a;var s=e.b,W=e.c,m=o(sd,s,W);if(m.$){var h=m.a,b=h.a;h.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return w(hd,b,U(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(ld,b,L,_,U(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var d=m.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return w(yn,d,U(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return w(yn,d,U(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return w(yn,d,U(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(yn,d,U(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var T=e.b,B=e.c,J=e.d,W=e.e,N=w(bd,T,B,J,W);if(N.$){var X=N.a,Q=X.a,be=X.b,ge=N.b,ue=ge.a,ve=ge.b,Ue=N.c,Ve=Ue.a,Pr=Ue.b,Mr=N.d,L=Mr.a,_=Mr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Ll(_d,Q,be,ue,ve,Ve,Pr,U(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ud(Q)(be)(ue)(ve)(Ve)(Pr)(L)(_)(U(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var O=N.a,I=N.b,E=N.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return se(Ln,O,I,E,U(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return se(Ln,O,I,E,U(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return se(Ln,O,I,E,U(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Ln,O,I,E,U(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Pa=function(e){var r=e;return r.fU},Ma=function(e){var r=e;return r.fY},za=function(e){var r=e;return r.c5},zd=function(e){var r=e,n=za(r.c6),a=Ma(r.c6),t=Pa(r.c6),i=za(r.c4),c=Ma(r.c4),l=Pa(r.c4),u=za(r.c3),v=Ma(r.c3),s=Pa(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ma=function(e){var r=e;return r.cA},Pe=function(e){var r=e;return r},dn=function(e){var r=e;return r.c3},pn=function(e){var r=e;return r.c4},bn=function(e){var r=e;return r.c6},kd=function(e){var r=mn(ma(e)),n=Pe(bn(e)),a=Pe(pn(e)),t=Pe(dn(e));return{dp:zd(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Dr=$(function(e,r){return{$:5,a:e,b:r}}),Jc=$(function(e,r){return{dp:Sr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ot=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Jc,a,e);return o(Dr,i,t);case 1:return o(Dr,e,n);case 3:return o(Dr,e,n);case 2:return o(Dr,e,n);default:return o(Dr,e,n)}}),Dd=$(function(e,r){return o(Ot,kd(e),r)}),Oc=function(e){return{$:2,a:e}},Ad=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),Bd=Pv,Fd=xv,Eo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=Fd(a),h=f.fU,b=f.fY,C=f.c5,L=f.em,_=Bd({em:L,fU:h*s,fY:b*m,c5:C*d});return Kn(r,n,_,t,i,c,l,u,v)}}}}}}}}}},vt=$(function(e,r){switch(r.$){case 0:return kc;case 5:var n=r.a,a=r.b;return o(Dr,n,o(vt,e,a));case 1:var t=r.a,i=r.b;return o(We,o(Ad,e,t),o(Eo,e,i));case 3:return r;case 2:var i=r.a;return Oc(o(Eo,e,i));default:var c=r.a;return Dc(o(le,vt(e),c))}}),Rd=$(function(e,r){var n=r;return o(vt,e,n)}),Ud={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Er=519,qc=7683,Zc=7682,pe=7680,Vd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},qt=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bl),o(re,l(v.a8),o(re,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(Vd,a,t,i)))}),Ed=p(qt,{co:0,cN:0,c2:15},{a8:pe,bl:Er,bt:pe,bu:qc},{a8:pe,bl:Er,bt:pe,bu:Zc}),jd=p(qt,{co:0,cN:0,c2:15},{a8:pe,bl:Er,bt:pe,bu:Zc},{a8:pe,bl:Er,bt:pe,bu:qc}),Nd=$(function(e,r){return e?o(A,jd,r):o(A,Ed,r)}),Gd={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Wd=function(e){if(e.$){var r=e.c;return K(ie(function(n,a,t,i,c,l,u,v){return S(Le,o(Nd,i,v),Gd,Ud,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return Y},jo=function(e){var r=Wd(e);if(r.$)return k;var n=r.a;return Oc(n)},Hd=F(function(e,r,n,a){var t=o(Md,n,Mc),i=function(){var s=P(e,r);return s.a?s.b?Ht(g([t,jo(Uo)])):t:s.b?jo(Uo):k}(),c=Ym(a),l=c.a,u=c.b,v=c.c;return o(Dd,tm(a),o(Rd,q(l,u,v),i))}),Yd=$(function(e,r){return w(Hd,!0,!0,e,r)}),Be=function(e){var r=e;return G(r)},ka=$(function(e,r){var n=e,a=r;return j(a,n)>-1}),Da=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),cr=function(e){return e},Id=cr({fU:-1,fY:0,c5:0}),Jd=cr({fU:0,fY:-1,c5:0}),Od=cr({fU:0,fY:0,c5:-1}),Xc=cr({fU:1,fY:0,c5:0}),Zt=cr({fU:0,fY:1,c5:0}),Qc=cr({fU:0,fY:0,c5:1}),jr=function(e){return e},qd=Fe(function(e,r,n,a,t,i){var c=o(ka,n,i)?Qc:Od,l=o(ka,r,t)?Zt:Jd,u=o(ka,e,a)?Xc:Id,v=q(Be(o(ir,e,a)),Be(o(ir,r,t)),Be(o(ir,n,i))),s=p(He,o(Da,e,a),o(Da,r,t),o(Da,n,i)),m=jr({cA:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),Zd=$(function(e,r){return se(qd,Kr(e),en(e),rn(e),Kr(r),en(r),rn(r))}),$t=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),Xd=$(function(e,r){var n=r/2;return o(Yd,e,o(Zd,p($t,-n,-n,-n),p($t,n,n,n)))}),Zn=Rl,ft=function(e){return e*Zn/180},Qd=$(function(e,r){return o(de,function(n){if(n.$)return 0;var a=n.b;return a},o(ca,e,r.av))}),Kd=$(function(e,r){return o(Xe,0,va(o(ua,Qd(e),r)))}),e0=$(function(e,r){return o(Kd,e,r.eA)}),ar=e0,r0=$(function(e,r){return o(de,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(ca,e,r.av))}),n0=$(function(e,r){return o(Xe,0,va(o(ua,r0(e),r)))}),a0=$(function(e,r){return o(n0,e,r.eA)}),No=a0,t0=function(e){return Ht(e)},o0=t0,i0=F(function(e,r,n,a){var t=q(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return w(la,f,d,m,a)}),c0=y(function(e,r,n){return w(i0,e,r,n,1)}),Go=function(e){return{$:0,a:e}},l0=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Kc=y(function(e,r,n){return j(n,e)<0?e:j(n,r)>0?r:n}),Aa=function(e){return p(Kc,0,1,e<=.04045?e/12.92:o(sn,(e+.055)/1.055,2.4))},u0=function(e){var r=fc(e),n=r.cM,a=r.cc,t=r.b5;return p(Wt,Aa(n),Aa(a),Aa(t))},v0=function(e){return p(l0,0,Go(u0(e)),Go(0))},$0=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),f0=function(e){var r=Sc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},s0=$(function(e,r){return o(Ot,f0(e),r)}),m0=$(function(e,r){return o(s0,e,r)}),el=function(e){var r=e.a,n=e.b,a=e.c;return m0(p($0,r,n,a))},d0=function(e){return el(q(0,e,0))},p0=function(e){return el(q(0,0,e))},Xn=function(e){return e},Qn=Ul,b0=function(e){var r=e;return r.eH},g0=function(e){var r=e;return r.cA},st=Vl,h0=$(function(e,r){var n=r,a=mn(g0(e)),t=.5*n,i=Qn(t),c=st(t),l=Pe(b0(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,b=1-2*(s+h),C=l.c5*c,L=i*C,_=2*(f-L),T=2*(f+L),B=u*C,J=2*(B+d),W=2*(B-d),N=m*C,O=2*(N-v),I=2*(N+v),E=C*C,X=1-2*(h+E),Q=1-2*(s+E);return{dp:!0,q:X,r:T,s:W,t:_,u:Q,v:I,w:J,x:O,y:b,H:a.fU-X*a.fU-_*a.fY-J*a.c5,I:a.fY-T*a.fU-Q*a.fY-O*a.c5,J:a.c5-W*a.fU-I*a.fY-b*a.c5,bX:1}}),_0=y(function(e,r,n){return o(Ot,o(h0,e,r),n)}),C0=y(function(e,r,n){return p(_0,e,r,n)}),Xt={fU:0,fY:0,c5:0},y0=$(function(e,r){return{eH:r,cA:e}}),rl=Zt,L0=o(y0,Xt,rl),S0=$(function(e,r){return p(C0,L0,Xn(e),r)}),w0=$(function(e,r){return(r-Ei(r/e)*e)/e}),T0=function(e){return 2*Zn*e},x0=F(function(e,r,n,a){return e+(r-e)*(1+Qn(T0(o(w0,n,a))))/2}),P0=function(e){var r=o(ar,"wave height",e),n=o(No,"number of waves",e),a=o(No,"number of cubes",e),t=o(ar,"cycle duration",e),i=function(c){var l=c/a,u=n*t*l;return o(S0,ft(360)*l,o(d0,w(x0,-r,r,t,e.db+u),o(p0,o(ar,"radius",e),o(Xd,v0(p(c0,l,o(ar,"saturation",e),o(ar,"lightness",e))),o(ar,"cube size",e)))))};return o0(o(le,i,o(ra,0,a-1)))},M0=jl,z0=$(function(e,r){var n=e,a=r,t=a.c5-n.c5,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Ne,G(c),o(Ne,G(i),G(t)));if(l){var u=t/l,v=i/l,s=c/l,m=fr(s*s+v*v+u*u);return K({fU:s/m,fY:v/m,c5:u/m})}else return Y}),Ba=function(e){return e},kn=function(e){var r=e,n=o(Ne,G(r.fU),o(Ne,G(r.fY),G(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=fr(i*i+t*t+a*a);return K({fU:i/c,fY:t/c,c5:a/c})}else return Y},k0=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c5*n.c5}),nl=$(function(e,r){var n=e,a=r;return j(a,n)>0}),D0=$(function(e,r){var n=e,a=r;return j(a,n)<0}),A0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),B0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c5*n.c5;return{fU:n.fU*t,fY:n.fY*t,c5:n.c5*t}}),F0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Nr=0,R0=y(function(e,r,n){return o(rt,function(a){var t=o(A0,o(B0,a,r),r);return o(rt,function(i){var c=o(Gt,r,e),l=o(k0,n,c),u=o(nl,Nr,l)?c:o(D0,Nr,l)?F0(c):xc;return o(de,function(v){return q(a,i,v)},kn(u))},kn(t))},kn(e))}),U0=function(e){var r=e,n=G(r.c5),a=G(r.fY),t=G(r.fU);if(j(t,a)<1)if(j(t,n)<1){var i=fr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=fr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(j(a,n)<1){var i=fr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=fr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},al=function(e){var r=U0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return P(r,c)},V0=function(e){var r=e;return r},E0=$(function(e,r){var n=al(e),a=n.a,t=n.b;return jr({cA:r,c3:a,c4:t,c6:e})}),j0=function(e){var r=o(ot,e.aR,e.dj),n=V0(e.ei),a=o(Gt,r,n),t=p(R0,r,n,a);if(t.$){var v=kn(r);if(v.$){var m=al(e.ei),d=m.a,f=m.b;return jr({cA:e.dj,c3:f,c4:e.ei,c6:d})}else{var s=v.a;return o(E0,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return jr({cA:e.dj,c3:u,c4:l,c6:c})}},N0=function(e){return{$:0,a:e}},Dn=function(e){var r=e;return .5*r},G0=El,W0=function(e){var r=e;return G0(r)},H0=function(e){var r=Dn(Be(e.ej)),n=W0(r);return{cL:N0(n),c1:e.c1}},Y0=function(e){var r=e.aR,n=e.dj,a=e.ei;return H0({ej:Xn(2*M0(.5)),c1:j0({dj:Ba(n),aR:Ba(r),ei:o(Xe,Zt,o(z0,Xt,Ba(a)))})})},I0=function(e){return e},J0=function(e){return Pn(.01*e)},Wo=function(e){return e},O0=function(e){return e},q0=function(e){return{$:0,a:e}},Z0=q0,X0={$:3},Q0=X0,K0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ep=K0,rp=$(function(e,r){return dr(o(le,e,r))}),np=function(e){return{$:1,a:e}},ap=np,tp=function(e){return o(hr,"height",we(e))},op=function(e){return Gu(Ju(e))},ip=op,cp=function(e){return{$:2,a:e}},lp=cp,up=function(e){return o(Cr,"",e)},vp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ge(l*1e3)/1e3},c=function(l){return Ge(l*1e4)/100};return up(g(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},$p=y(function(e,r,n){return p(c$,e,r,n)}),Ho=function(e){var r=e;return r},Fa=w(Yr,1,1,1,1),Ye=y(function(e,r,n){return o(le,function(a){return o(a,r,n)},e)}),fp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),sp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(fp,n*a/t,n,n*(1-a-t)/t)}),mp=function(e){var r=e.a,n=e.b,a=e.c;return p(Wt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Qt=$(function(e,r){return mp(o(sp,e,r))}),tr=Dv,dp=function(e){return tr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ra=ye(function(e,r,n,a,t){var i=a.dp?1:-1,c=w(Yr,a.bX,a.bX,a.bX,i);return se(t,e,c,dp(a),a.dp,r,n)}),tl=Fe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Jc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(A,S(Ra,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,L=o(A,S(Ra,e,r,n,a,C),i.U);return{M:i.M,U:L,fB:i.fB};case 2:var _=t.a,T=o(A,S(Ra,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:T};default:var B=t.a;return p(vn,w(tl,e,r,n,a),i,B)}}),pp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ol=pp,Kt=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),bp=function(e){var r=e.Z,n=e.W,a=e.V;return w(Kt,518,r,n,a)},gp=$(function(e,r){return{$:6,a:e,b:r}}),hp=gp,il=g([bp({V:1,W:0,Z:!1}),w(ol,!1,!1,!1,!1),o(hp,0,1)]),eo=8,cl=15,Ur=7681,_p={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Cp=$(function(e,r){return{$:0,a:e,b:r}}),yp=Cp({df:1,$7:0,dV:5}),Lp=yp(g([{bT:o(Fr,-1,-1)},{bT:o(Fr,1,-1)},{bT:o(Fr,-1,1)},{bT:o(Fr,1,1)}])),Sp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},ro=function(e){return p(qt,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},no=function(e){return S(Le,g([ro(e),w(ol,!1,!1,!1,!1)]),Sp,_p,Lp,{})},wp=no({a8:Ur,co:0,cN:eo,bl:Er,c2:cl,bt:Ur,bu:Ur}),Tp=516,Yo=5386,xp=function(e){return o(sn,2,e+4)},ll=function(e){return no({a8:pe,co:cl,cN:eo,bl:Tp,c2:xp(e),bt:Yo,bu:Yo})},Pp=y(function(e,r,n){return dr(g([p(Ye,e,n,il),g([ll(r),wp])]))}),Mp=$(function(e,r){return dr(o(Di,Pp(e),r))}),zp=function(e){var r=e.Z,n=e.W,a=e.V;return w(Kt,513,r,n,a)},kp=zp({V:1,W:0,Z:!0}),Dp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Ap=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return Dp(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},Bp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Io=$(function(e,r){var n=e,a=r;return p(Bp,32774,n,a)}),Fp=1,Jo=771,Rp=770,ao=Ap({bv:0,aH:o(Io,Fp,Jo),by:0,bA:o(Io,Rp,Jo),bF:0,bV:0}),kr=g([kp,ao]),Oo=function(e){var r=e;return ma(r)},Up=function(e){return e},Vp=function(e){return jr({cA:Up({fU:e.H,fY:e.I,c5:e.J}),c3:cr({fU:e.q,fY:e.r,c5:e.s}),c4:cr({fU:e.t,fY:e.u,c5:e.v}),c6:cr({fU:e.w,fY:e.x,c5:e.y})})},Ua=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),ul=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,h=f;return{fU:c*h.fU+l*h.fY+u*h.c5,fY:c*d.fU+l*d.fY+u*d.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),vl=$(function(e,r){return{cA:o(ul,e,ma(r)),c3:o(Ua,e,dn(r)),c4:o(Ua,e,pn(r)),c6:o(Ua,e,bn(r))}}),Ep=$(function(e,r){var n=On(r),a=On(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),jp=function(e){var r=e;return q(r.fU,r.fY,r.c5)},An=$(function(e,r){var n=e,a=r;return a+n}),Np=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Dn(Be(a)),c=Dn(Be(n)),l=Dn(Be(t)),u=jp(r),v=u.a,s=u.b,m=u.c;return{dO:o(An,c,v),dP:o(An,i,s),dQ:o(An,l,m),dR:o(ir,c,v),dS:o(ir,i,s),dT:o(ir,l,m)}}),qo=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,m=Pe(bn(e)),d=G(l*m.fU)+G(c*m.fY)+G(i*m.c5),f=Pe(pn(e)),h=G(l*f.fU)+G(c*f.fY)+G(i*f.c5),b=Pe(dn(e)),C=G(l*b.fU)+G(c*b.fY)+G(i*b.c5),L=o(Np,q(C,h,d),o(ul,e,p($t,s,v,u)));if(a.$)return K(L);var _=a.a;return K(o(Ep,_,L))}),mt=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=w(qo,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=w(qo,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=w(mt,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(vl,Vp(v),e),d=r*v.bX,f=e,h=r,b=w(mt,m,d,n,g([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),Gp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Wp=function(e){var r=e;return r},Zo=no({a8:Ur,co:0,cN:eo,bl:Er,c2:255,bt:Ur,bu:Ur}),Hp=function(e){var r=e,n=o(Ne,G(r.fU),o(Ne,G(r.fY),G(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=fr(i*i+t*t+a*a);return c*n}else return Nr},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},ke=$(function(e,r){var n=e,a=r;return tr({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),Zr=P({bd:o(ke,Ce,Ce),bK:o(ke,Ce,Ce),bL:o(ke,Ce,Ce),bM:o(ke,Ce,Ce)},w(Yr,0,0,0,0)),Xo=function(e){var r=e;return-r},$l=514,fl=function(e){var r=e.Z,n=e.W,a=e.V;return w(Kt,515,r,n,a)},sl=240,Yp=g([fl({V:1,W:0,Z:!0}),ro({a8:pe,co:sl,cN:0,bl:$l,c2:0,bt:pe,bu:pe}),ao]),Ip=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Be(a),l=c,u=Be(t),v=u,s=n.cL;if(s.$){var d=s.a;return qa(v)?tr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):tr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return qa(v)?tr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):tr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),wn=$(function(e,r){return(1&e>>r)===1?0:1}),Jp=function(e){return g([fl({V:1,W:0,Z:!0}),ro({a8:pe,co:sl,cN:e,bl:$l,c2:0,bt:pe,bu:pe}),ao])},Op=y(function(e,r,n){return dr(o(le,function(a){var t=a<<4,i=w(Yr,o(wn,a,0),o(wn,a,1),o(wn,a,2),o(wn,a,3));return p(Ye,e,P(r,i),Jp(t))},o(ra,1,o(sn,2,n)-1)))}),ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},qp=Av,Qo=function(e){var r=e;return ln(bn(r))},Zp=Xc,ml=Qc,Xp={cA:Xt,c3:Zp,c4:rl,c6:ml},Qp=function(e){var r=mn(ma(e)),n=Pe(bn(e)),a=Pe(pn(e)),t=Pe(dn(e));return tr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Kp=$(function(e,r){var n=r;return Qp(o(vl,n,e))}),e1=function(e){return o(Kp,Xp,e)},r1=function(e){var r=e;return r.c1},n1=function(e){var r=e;return dn(r)},a1=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),t1=function(e){var r=e;return pn(r)},o1=function(e){var r=r1(e.ev),n=jr({cA:Oo(r),c3:n1(r),c4:t1(r),c6:ln(Qo(r))}),a=Ht(e.aP),t=a,i=w(mt,n,1,Y,g([t]));if(i.$===1)return x;var c=i.a,l=e1(r),u=o($r,.99,o(ce,Be(e.aJ),Xo(Hc(c)))),v=Ic(c),s=v.a,m=v.b,d=v.c,f=Hp(p(a1,s,m,d)),h=o($r,1.01,o(An,f,Xo(Yc(c)))),b=o(Ip,e.ev,{eq:e.eq,eP:h,fi:u}),C=qp(b).dM,L=C?Pe(ln(Qo(r))):lt(Oo(r)),_=function(){var ue=e.bZ;switch(ue.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var ve=ue.a;return P(3,ve);case 4:var ve=ue.a;return P(4,ve);default:return P(5,0)}}(),T=_.a,B=_.b,J=e.bD,W=J,N=o(Qt,W,e.b$),O=N,I=tr({dx:0,dy:L.fU,dz:$a(O),dA:e.ec,dB:0,dC:L.fY,dD:fa(O),dE:Wp(f),dF:0,dG:L.c5,dH:sa(O),dI:T,dJ:0,dK:C,dL:0,dM:B}),E=se(tl,I,l,b,Gp,t,{M:x,U:x,fB:x}),X=e.bJ;switch(X.$){case 0:var Q=X.a;return dr(g([p(Ye,E.M,P(Q,Fa),kr),p(Ye,E.U,Zr,kr)]));case 1:var Q=X.a;return dr(g([p(Ye,E.M,Zr,kr),g([Zo]),p(Ye,E.fB,Q.bd,il),g([ll(0)]),p(Ye,E.M,P(Q,Fa),Yp),p(Ye,E.U,Zr,kr)]));default:var be=X.a,ge=X.b;return dr(g([p(Ye,E.M,P(ge,Fa),kr),g([Zo]),o(Mp,E.fB,be),p(Op,E.M,ge,wr(be)),p(Ye,E.U,Zr,kr)]))}},i1=function(e){return o(hr,"width",we(e))},c1=$(function(e,r){var n=g([ap(1),lp(0),Z0(!0),w(ep,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return q(n,"0",1);case 1:return q(o(A,Q0,n),"1",1);default:var B=T.a;return q(n,"0",B)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ho(v),m=o(ee,"height",we(s)+"px"),d=Ho(u),f=d/s,h=o(rp,function(T){return o1({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(ee,"width",we(d)+"px"),C=e.aI,L=C,_=vp(L);return p(ip,"div",g([o(ee,"padding","0px"),b,m]),g([P(i,p($p,t,g([i1(Ge(d*c)),tp(Ge(s*c)),b,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),l1=function(e){return o(c1,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},dl=function(e){return e},Ko=dl({fU:.31271,fY:.32902}),u1=$(function(e,r){var n=e,a=Pe(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Qt,r.cd,r.b6),u=l;return{by:sa(u),ex:n,bF:fa(u),cJ:0,bV:$a(u),cZ:1,fU:-t,fY:-i,c5:-c}}),v1=function(e){return e},$1=function(e){return v1(1.2*o(sn,2,e))},Va=function(e){return e},f1={$:0},s1=f1,ei=function(e){var r=e;return r},m1=function(e){e:for(;;){if(Sr(e.e2,Nr)&&Sr(e.e3,Nr))return Ce;if(o(nl,Be(e.e2),Be(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:ln(e.ei)};e=r;continue e}else{var n=G(ei(e.e3)/Zn),a=G(ei(e.e2)/Zn),t=Pe(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Qt,Tc(1),e.b6),v=u;return{by:a*sa(v),ex:!1,bF:a*fa(v),cJ:n/a,bV:a*$a(v),cZ:3,fU:i,fY:c,c5:l}}}},ri=function(e){return m1({b6:e.b6,e2:e.cd,e3:Nr,ei:e.ei})},d1=function(e){var r=e;return r},pl=function(e){var r=p(Kc,1667,25e3,d1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return dl({fU:n,fY:a})},bl=function(e){return e},p1=pl(bl(12e3)),b1=pl(bl(5600)),g1=function(e){return{$:2,a:e}},h1=function(e){return g1(e)},_1=$(function(e,r){return{$:2,a:e,b:r}}),gl=function(e){return{$:0,a:e}},Tn=function(e){var r=e;return r},C1=function(e){var r=e;return r.ex},y1=gl(Zr.a),L1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(A,a,i),c):P(i,o(A,a,c))});return p(vr,n,P(x,x),r)}),S1=function(e){var r=e;return tr({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},w1=ie(function(e,r,n,a,t,i,c,l){var u=o(L1,C1,g([Tn(e),Tn(r),Tn(n),Tn(a)])),v=u.a,s=u.b;if(v.b){var m=ae(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(_1,o(le,S1,v),{bd:o(ke,d,h),bK:o(ke,C,_),bL:o(ke,t,i),bM:o(ke,c,l)})}else return y1}else return gl({bd:o(ke,e,r),bK:o(ke,n,a),bL:o(ke,t,i),bM:o(ke,c,l)})}),T1=y(function(e,r,n){return Kn(w1,e,r,n,Ce,Ce,Ce,Ce,Ce)}),x1=function(e){var r=o(u1,O0(e.fB),{b6:b1,eH:e.fJ,cd:Va(8e4)}),n=ri({b6:p1,cd:Va(2e4),ei:e.ei}),a=ri({b6:Ko,cd:Va(15e3),ei:ln(e.ei)}),t=p(T1,r,n,a);return l1({b0:h1(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:$1(15),bJ:t,bZ:s1,b$:Ko})},P1=$(function(e,r){var n=e,a=r,t=Qn(a);return{fU:t*Qn(n),fY:t*st(n),c5:st(a)}}),M1=$(function(e,r){return x1({aI:I0(e.es),ev:e.ev,aJ:J0(.5),ca:e.ca,aK:P(Wo(Ge(e.cS.fS)),Wo(Ge(e.cS.eW))),aP:r,fB:!0,fJ:o(P1,Xn(e.fI),Xn(e.fK)),ei:ml})}),z1=$(function(e,r){return o(M1,{es:w(dc,0,0,0,0),ev:Y0({dj:{fU:o(ar,"camera x",e),fY:o(ar,"camera y",e),c5:o(ar,"camera z",e)},aR:{fU:0,fY:0,c5:0},ei:{fU:0,fY:1,c5:0}}),ca:e.ca,cS:e.cS,fI:-ft(135),fK:-ft(45)},g([P0(e)]))}),k1=w(Zs,z1,nm,rm,Xs);const D1={Main:{init:k1(o(z,function(e){return Se({e1:e})},o(M,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return Se({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",oe))},o(M,"devicePixelRatio",oe))},o(M,"dt",oe))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return Se({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Gn(cn)))},o(M,"left",Z))},o(M,"pressedKeys",Gn(cn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return Se({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",oe))},o(M,"y",oe))))},o(M,"screen",o(z,function(r){return o(z,function(n){return Se({eW:n,fS:r})},o(M,"height",oe))},o(M,"width",oe))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return Se({eE:r,eF:e})},o(M,"deltaX",oe))},o(M,"deltaY",oe)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},A1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-D.clock;b<.009||(D.dt=b,D.clock=h,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},B1=()=>{Ea("pointerdown"),Ea("wheel"),Ea("keydown")},Ea=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},F1=D1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});B1();A1(F1);
