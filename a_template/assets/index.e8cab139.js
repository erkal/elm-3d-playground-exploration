(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function mr(e,r,n){return n.a=e,n.f=r,n}function $(e){return mr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Se(e){return mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ee(e){return mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function mt(e){return mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ie(e){return mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function dt(e){return mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function y(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ti(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Kn(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function yl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var wl=[];function xl(e){return e.length}var Tl=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Pl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),Ml=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var zl=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+kl()),r});function kl(e){return"<internals>"}function Ir(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function xr(e,r){for(var n,a=[],t=Va(e,r,0,a);t&&(n=a.pop());t=Va(n.a,n.b,0,a));return t}function Va(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ir(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=Co(e),r=Co(r));for(var t in e)if(!Va(e[t],r[t],n+1,a))return!1;return!0}$(xr);$(function(e,r){return!xr(e,r)});function N(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=N(e.a,r.a))||(n=N(e.b,r.b))?n:N(e.c,r.c);for(;e.b&&r.b&&!(n=N(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return N(e,r)<0});$(function(e,r){return N(e,r)<1});$(function(e,r){return N(e,r)>0});$(function(e,r){return N(e,r)>=0});var Dl=$(function(e,r){var n=N(e,r);return n<0?ki:n?b$:zi}),fn=0;function k(e,r){return{a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function Je(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(te);function te(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ze(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ze(e.a,r);return n}var x={$:0};function Ze(e,r){return{$:1,a:e,b:r}}var Bl=$(Ze);function h(e){for(var r=x,n=e.length;n--;)r=Ze(e[n],r);return r}function ea(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Al=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});Se(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return h(i)});Ee(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(y(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(ea(r).sort(function(n,a){return N(e(n),e(a))}))});$(function(e,r){return h(ea(r).sort(function(n,a){var t=o(e,n,a);return t===zi?0:t===ki?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Fl=$(Math.pow);$(function(e,r){return r%e});var Ul=$(function(e,r){var n=r%e;return e===0?Ir(11):n>0&&e<0||n<0&&e>0?n+e:n}),El=Math.PI,Rl=Math.cos,Vl=Math.sin,Nl=Math.tan,Gl=Math.atan;$(Math.atan2);function jl(e){return e}function Wl(e){return e===1/0||e===-1/0}var Yl=Math.ceil,Hl=Math.floor,Il=Math.round,Ol=Math.sqrt,io=Math.log,Jl=isNaN;function ql(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Ql=$(function(e,r){return e+r});function Zl(e){var r=e.charCodeAt(0);return isNaN(r)?I:K(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function Xl(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Kl(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var eu=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),ru=$(function(e,r){return r.split(e)}),nu=$(function(e,r){return r.join(e)}),au=S(function(e,r,n){return n.slice(e,r)});function tu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ou=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),iu=$(function(e,r){return r.indexOf(e)>-1}),cu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var lu=$(function(e,r){var n=e.length;if(n<1)return x;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function oi(e){return e+""}function uu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return I;r=10*r+i-48}return t==a?I:K(n==45?-r:r)}function vu(e){if(e.length===0||/[\sxbo]/.test(e))return I;var r=+e;return r===r?K(r):I}function $u(e){return ea(e).join("")}function fu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function su(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function mu(e){return{$:0,a:e}}function pt(e){return{$:2,b:e}}var du=pt(function(e){return typeof e=="boolean"?oe(e):Oe("a BOOL",e)}),pu=pt(function(e){return typeof e=="number"?oe(e):Oe("a FLOAT",e)}),bu=pt(function(e){return typeof e=="string"?oe(e):e instanceof String?oe(e+""):Oe("a STRING",e)});function gu(e){return{$:3,b:e}}var hu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function dr(e,r){return{$:9,f:e,g:r}}var _u=$(function(e,r){return{$:10,b:r,h:e}}),Cu=$(function(e,r){return dr(e,[r])}),Su=S(function(e,r,n){return dr(e,[r,n])});F(function(e,r,n,a){return dr(e,[r,n,a])});Se(function(e,r,n,a,t){return dr(e,[r,n,a,t])});Ee(function(e,r,n,a,t,i){return dr(e,[r,n,a,t,i])});mt(function(e,r,n,a,t,i,c){return dr(e,[r,n,a,t,i,c])});ie(function(e,r,n,a,t,i,c,l){return dr(e,[r,n,a,t,i,c,l])});dt(function(e,r,n,a,t,i,c,l,u){return dr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Be(e,n)}catch(a){return me(o(Pt,"This is not valid JSON! "+a.message,r))}});var ii=$(function(e,r){return Be(e,r)});function Be(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?oe(e.c):Oe("null",r);case 3:return hn(r)?co(e.b,r,h):Oe("a LIST",r);case 4:return hn(r)?co(e.b,r,Lu):Oe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Oe("an OBJECT with a field named `"+n+"`",r);var v=Be(e.b,r[n]);return Ge(v)?v:me(o(So,n,v.a));case 7:var a=e.e;if(!hn(r))return Oe("an ARRAY",r);if(a>=r.length)return Oe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Be(e.b,r[a]);return Ge(v)?v:me(o(Di,a,v.a));case 8:if(typeof r!="object"||r===null||hn(r))return Oe("an OBJECT",r);var t=x;for(var i in r)if(r.hasOwnProperty(i)){var v=Be(e.b,r[i]);if(!Ge(v))return me(o(So,i,v.a));t=Ze(k(i,v.a),t)}return oe(xe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Be(l[u],r);if(!Ge(v))return v;c=c(v.a)}return oe(c);case 10:var v=Be(e.b,r);return Ge(v)?Be(e.h(v.a),r):v;case 11:for(var s=x,m=e.g;m.b;m=m.b){var v=Be(m.a,r);if(Ge(v))return v;s=Ze(v.a,s)}return me(g$(xe(s)));case 1:return me(o(Pt,e.a,r));case 0:return oe(e.a)}}function co(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Be(e,r[i]);if(!Ge(c))return me(o(Di,i,c.a));t[i]=c.a}return oe(n(t))}function hn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Lu(e){return o(F$,e.length,function(r){return e[r]})}function Oe(e,r){return me(o(Pt,"Expecting "+e,r))}function Ur(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ur(e.b,r.b);case 6:return e.d===r.d&&Ur(e.b,r.b);case 7:return e.e===r.e&&Ur(e.b,r.b);case 9:return e.f===r.f&&lo(e.g,r.g);case 10:return e.h===r.h&&Ur(e.b,r.b);case 11:return lo(e.g,r.g)}}function lo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ur(e[a],r[a]))return!1;return!0}var yu=$(function(e,r){return JSON.stringify(r,null,e)+""});function ci(e){return e}S(function(e,r,n){return n[e]=r,n});function Pr(e){return{$:0,a:e}}function wu(e){return{$:1,a:e}}function cr(e){return{$:2,b:e,c:null}}var Na=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function xu(e){return{$:5,b:e}}var Tu=0;function bt(e){var r={$:0,e:Tu++,f:e,g:null,h:[]};return gt(r),r}function li(e){return cr(function(r){r(Pr(bt(e)))})}function ui(e,r){e.h.push(r),gt(e)}var Pu=$(function(e,r){return cr(function(n){ui(e,r),n(Pr(fn))})}),ma=!1,uo=[];function gt(e){if(uo.push(e),!ma){for(ma=!0;e=uo.shift();)Mu(e);ma=!1}}function Mu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return ht(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function ht(e,r,n,a,t,i){var c=o(ii,e,r?r.flags:void 0);Ge(c)||Ir(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=zu(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),$o(l,b.b,t(v))}return $o(l,u.b,t(v)),m?{ports:m}:{}}var qe={};function zu(e,r){var n;for(var a in qe){var t=qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Du(t,r)}return n}function ku(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Du(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Na,l,xu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=bt(o(Na,l,e.b))}var Bu=$(function(e,r){return cr(function(n){e.g(r),n(Pr(fn))})});$(function(e,r){return o(Pu,e.h,{$:0,a:r})});function vi(e){return function(r){return{$:1,k:e,l:r}}}function Au(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var vo=[],da=!1;function $o(e,r,n){if(vo.push({p:e,q:r,r:n}),!da){da=!0;for(var a;a=vo.shift();)Fu(a.p,a.q,a.r);da=!1}}function Fu(e,r,n){var a={};Fn(!0,r,a,null),Fn(!1,n,a,null);for(var t in e)ui(e[t],{$:"fx",a:a[t]||{i:x,j:x}})}function Fn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Uu(e,t,a,r.l);n[t]=Eu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Fn(e,c.a,n,a);return;case 3:Fn(e,r.o,n,{s:r.n,t:a});return}}function Uu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?qe[r].e:qe[r].f;return o(i,t,a)}function Eu(e,r,n){return n=n||{i:x,j:x},e?n.i=Ze(r,n.i):n.j=Ze(r,n.j),n}function Ru(e){qe[e]&&Ir(3)}$(function(e,r){return r});function Vu(e,r){return Ru(e),qe[e]={f:Nu,u:r,a:Gu},vi(e)}var Nu=$(function(e,r){return function(n){return e(r(n))}});function Gu(e,r){var n=x,a=qe[e].u,t=Pr(null);qe[e].b=t,qe[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(ii,a,c);Ge(l)||Ir(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Un,ar=typeof document<"u"?document:{};function _t(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild($r(e,function(){}),t),{}});function Ga(e){return{$:0,a:e}}var $i=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ct(n),e:t,f:e,b:i}})}),Mr=$i(void 0),ju=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ct(n),e:t,f:e,b:i}})}),Wu=ju(void 0);function Yu(e,r,n,a){return{$:3,d:Ct(e),g:r,h:n,i:a}}var Hu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return pr([e,r],function(){return e(r)})});S(function(e,r,n){return pr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return pr([e,r,n,a],function(){return p(e,r,n,a)})});Se(function(e,r,n,a,t){return pr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});Ee(function(e,r,n,a,t,i){return pr([e,r,n,a,t,i],function(){return y(e,r,n,a,t,i)})});mt(function(e,r,n,a,t,i,c){return pr([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ie(function(e,r,n,a,t,i,c,l){return pr([e,r,n,a,t,i,c,l],function(){return ti(e,r,n,a,t,i,c,l)})});dt(function(e,r,n,a,t,i,c,l,u){return pr([e,r,n,a,t,i,c,l,u],function(){return Kn(e,r,n,a,t,i,c,l,u)})});var fi=$(function(e,r){return{$:"a0",n:e,o:r}}),Iu=$(function(e,r){return{$:"a1",n:e,o:r}}),si=$(function(e,r){return{$:"a2",n:e,o:r}}),br=$(function(e,r){return{$:"a3",n:e,o:r}}),Ou=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Ju(e){return e=="script"?"p":e}function qu(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(fi,r.n,Qu(e,r.o)):r});function Qu(e,r){var n=Bt(r);return{$:r.$,a:n?p(U$,n<3?Zu:Xu,Le(e),r.a):o(Nn,e,r.a)}}var Zu=$(function(e,r){return k(e(r.a),r.b)}),Xu=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ct(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?fo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?fo(c,t,i):c[t]=i}return r}function fo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function $r(e,r){var n=e.$;if(n===5)return $r(e.k||(e.k=e.m()),r);if(n===0)return ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=$r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ja(c,r,e.d),c}var c=e.f?ar.createElementNS(e.f,e.c):ar.createElement(e.c);Un&&e.c=="a"&&c.addEventListener("click",Un(c)),ja(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)_t(c,$r(n===1?l[u]:l[u].b,r));return c}function ja(e,r,n){for(var a in n){var t=n[a];a==="a1"?Ku(e,t):a==="a0"?nv(e,r,t):a==="a3"?ev(e,t):a==="a4"?rv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Ku(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function ev(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function rv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function nv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=av(r,i),e.addEventListener(t,c,St&&{passive:Bt(i)<2}),a[t]=c}}var St;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){St=!0}}))}catch{}function av(e,r){function n(a){var t=n.q,i=Be(t.a,a);if(!!Ge(i)){for(var c=Bt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function tv(e,r){return e.$==r.$&&Ur(e.a,r.a)}function mi(e,r){var n=[];return je(e,r,n,0),n}function fe(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=fv(r),i=1;else{fe(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];je(e.k,r.k,s,0),s.length>0&&fe(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){fe(n,0,a,r);return}(f?!ov(m,d):m!==d)&&fe(n,2,a,d),je(g,b,n,a+1);return;case 0:e.a!==r.a&&fe(n,3,a,r.a);return;case 1:so(e,r,n,a,iv);return;case 2:so(e,r,n,a,cv);return;case 3:if(e.h!==r.h){fe(n,0,a,r);return}var C=Lt(e.d,r.d);C&&fe(n,4,a,C);var L=r.i(e.g,r.g);L&&fe(n,5,a,L);return}}}function ov(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function so(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){fe(n,0,a,r);return}var i=Lt(e.d,r.d);i&&fe(n,4,a,i),t(e,r,n,a)}function Lt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Lt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&tv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function iv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?fe(n,6,a,{v:l,i:c-l}):c<l&&fe(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];je(s,i[v],n,++a),a+=s.b||0}}function cv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],C=g.a,L=b.a,_=g.b,T=b.b,A=void 0,J=void 0;if(C===L){f++,je(_,T,t,f),f+=_.b||0,m++,d++;continue}var W=l[m+1],G=u[d+1];if(W){var q=W.a,O=W.b;J=L===q}if(G){var V=G.a,Z=G.b;A=C===V}if(A&&J){f++,je(_,Z,t,f),Xr(i,t,C,T,d,c),f+=_.b||0,f++,Kr(i,t,C,O,f),f+=O.b||0,m+=2,d+=2;continue}if(A){f++,Xr(i,t,L,T,d,c),je(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(J){f++,Kr(i,t,C,_,f),f+=_.b||0,f++,je(O,T,t,f),f+=O.b||0,m+=2,d+=1;continue}if(W&&q===V){f++,Kr(i,t,C,_,f),Xr(i,t,L,T,d,c),f+=_.b||0,f++,je(O,Z,t,f),f+=O.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;Kr(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],b=u[d];Xr(i,t,b.a,b.b,void 0,X),d++}(t.length>0||c.length>0||X)&&fe(n,8,a,{w:t,x:c,y:X})}var di="_elmW6BL";function Xr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Xr(e,r,n+di,a,t,i)}function Kr(e,r,n,a,t){var i=e[n];if(!i){var c=fe(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];je(a,i.z,l,t),fe(r,9,t,{w:l,A:i});return}Kr(e,r,n+di,a,t)}function pi(e,r,n,a){en(e,r,n,0,0,r.b,a)}function en(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)pi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&en(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&en(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return en(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,C=0;C<g.length;C++){t++;var L=d===1?g[C]:g[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=en(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function bi(e,r,n,a){return n.length===0?e:(pi(e,r,n,a),En(e,n))}function En(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=lv(t,a);t===e&&(e=i)}return e}function lv(e,r){switch(r.$){case 0:return uv(e,r.s,r.u);case 4:return ja(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return En(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore($r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=En(e,i.w),e;case 8:return vv(e,r);case 5:return r.s(e);default:Ir(10)}}function uv(e,r,n){var a=e.parentNode,t=$r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function vv(e,r){var n=r.s,a=$v(n.y,r);e=En(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:$r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&_t(e,a),e}function $v(e,r){if(!!e){for(var n=ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;_t(n,i.c===2?i.s:$r(i.z,r.u))}return n}}function yt(e){if(e.nodeType===3)return Ga(e.textContent);if(e.nodeType!==1)return Ga("");for(var r=x,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ze(o(br,i,c),r)}for(var l=e.tagName.toLowerCase(),u=x,v=e.childNodes,a=v.length;a--;)u=Ze(yt(v[a]),u);return p(Mr,l,r,u)}function fv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var sv=F(function(e,r,n,a){return ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=yt(l);return gi(i,function(v){var s=c(v),m=mi(u,s);l=bi(l,u,m,t),u=s})})});F(function(e,r,n,a){return ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ar.title,v=ar.body,s=yt(v);return gi(i,function(m){Un=c;var d=l(m),f=Mr("body")(x)(d.eu),g=mi(s,f);v=bi(v,s,g,t),s=f,Un=0,u!==d.fL&&(ar.title=u=d.fL)})})});var Rn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function gi(e,r){r(e);var n=0;function a(){n=n===1?0:(Rn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Rn(a),n=2)}}$(function(e,r){return o(Ut,At,cr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Ut,At,cr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Ut,At,cr(function(){history.replaceState({},"",r),e()}))});var mv={addEventListener:function(){},removeEventListener:function(){}},dv=typeof window<"u"?window:mv;S(function(e,r,n){return li(cr(function(a){function t(i){bt(n(i))}return e.addEventListener(r,t,St&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Be(e,r);return Ge(n)?K(n.a):I});function hi(e,r){return cr(function(n){Rn(function(){var a=document.getElementById(e);n(a?Pr(r(a)):wu(R$(e)))})})}function pv(e){return cr(function(r){Rn(function(){r(Pr(e()))})})}$(function(e,r){return hi(r,function(n){return n[e](),fn})});$(function(e,r){return pv(function(){return dv.scroll(e,r),fn})});S(function(e,r,n){return hi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,fn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var bv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return K(new RegExp(r,n))}catch{return I}});$(function(e,r){return r.match(e)!==null});var gv=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?K(m):I}a.push(w(mc,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?K(v):I}return n(w(mc,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var hv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/_v(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function _v(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var wt=new Float64Array(3),mo=new Float64Array(3),po=new Float64Array(3),Cv=S(function(e,r,n){return new Float64Array([e,r,n])}),Sv=function(e){return e[0]},Lv=function(e){return e[1]},yv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var wv=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function _i(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(_i);function Ci(e,r,n){return n===void 0&&(n=new Float64Array(3)),Vn(_i(e,r,n),n)}$(Ci);function Si(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Vn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Si(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var xv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),rn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(rn);function Wa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Wa);$(function(e,r){var n,a=wt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=rn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(rn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(rn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(rn(r,a)+e[14])/n,t});var Tv=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Pv=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},Mv=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/zv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function zv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var kv=new Float64Array(16),Dv=new Float64Array(16),Bv=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Av=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Li(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ee(Li);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Li(c,l,i,t,n,a)});function yi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ee(yi);F(function(e,r,n,a){return yi(e,r,n,a,-1,1)});function wi(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],C=e[13],L=e[14],_=e[15],T=r[0],A=r[1],J=r[2],W=r[3],G=r[4],q=r[5],O=r[6],V=r[7],Z=r[8],X=r[9],be=r[10],ge=r[11],ve=r[12],$e=r[13],Ve=r[14],Ne=r[15];return n[0]=a*T+l*A+m*J+b*W,n[1]=t*T+u*A+d*J+C*W,n[2]=i*T+v*A+f*J+L*W,n[3]=c*T+s*A+g*J+_*W,n[4]=a*G+l*q+m*O+b*V,n[5]=t*G+u*q+d*O+C*V,n[6]=i*G+v*q+f*O+L*V,n[7]=c*G+s*q+g*O+_*V,n[8]=a*Z+l*X+m*be+b*ge,n[9]=t*Z+u*X+d*be+C*ge,n[10]=i*Z+v*X+f*be+L*ge,n[11]=c*Z+s*X+g*be+_*ge,n[12]=a*ve+l*$e+m*Ve+b*Ne,n[13]=t*ve+u*$e+d*Ve+C*Ne,n[14]=i*ve+v*$e+f*Ve+L*Ne,n[15]=c*ve+s*$e+g*Ve+_*Ne,n}$(wi);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],C=r[1],L=r[2],_=r[4],T=r[5],A=r[6],J=r[8],W=r[9],G=r[10],q=r[12],O=r[13],V=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*T+v*A,n[5]=t*_+l*T+s*A,n[6]=i*_+u*T+m*A,n[7]=0,n[8]=a*J+c*W+v*G,n[9]=t*J+l*W+s*G,n[10]=i*J+u*W+m*G,n[11]=0,n[12]=a*q+c*O+v*V+d,n[13]=t*q+l*O+s*V+f,n[14]=i*q+u*O+m*V+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Vn(r,wt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Si(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=g+f,T=b-d,A=g-f,J=c*c*v+u,W=C+m,G=b+d,q=C-m,O=l*l*v+u,V=n[0],Z=n[1],X=n[2],be=n[3],ge=n[4],ve=n[5],$e=n[6],Ve=n[7],Ne=n[8],kr=n[9],Dr=n[10],sa=n[11],_l=n[12],Cl=n[13],Sl=n[14],Ll=n[15];return a[0]=V*L+ge*_+Ne*T,a[1]=Z*L+ve*_+kr*T,a[2]=X*L+$e*_+Dr*T,a[3]=be*L+Ve*_+sa*T,a[4]=V*A+ge*J+Ne*W,a[5]=Z*A+ve*J+kr*W,a[6]=X*A+$e*J+Dr*W,a[7]=be*A+Ve*J+sa*W,a[8]=V*G+ge*q+Ne*O,a[9]=Z*G+ve*q+kr*O,a[10]=X*G+$e*q+Dr*O,a[11]=be*G+Ve*q+sa*O,a[12]=_l,a[13]=Cl,a[14]=Sl,a[15]=Ll,a});function Fv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(Fv);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Uv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(Uv);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});S(function(e,r,n){var a=Ci(e,r,wt),t=Vn(Wa(n,a,mo),mo),i=Vn(Wa(a,t,po),po),c=kv,l=Dv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,wi(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var bo=0;function cn(e,r){for(;r.b;r=r.b)e(r.a)}function xt(e){for(var r=0;e.b;e=e.b)r++;return r}var Ev=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Rv=Se(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Vv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Nv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Gv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),jv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Wv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Yv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Hv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Iv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ov=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Jv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},qv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Qv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},xi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ti=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Zv=function(e){e.gl.disable(e.gl.CULL_FACE)},Xv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Kv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},e$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},go=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],r$=[Jv,qv,Qv,xi,Ti,Zv,Xv,Kv,e$];function ho(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function n$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function a$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,C,L){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?C[L]:C[L][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?C[T][L]:C[T][L][_]})}var u=Pi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(xt(n.b)*s);cn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function t$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=o$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*xt(r.b),indexBuffer:null,buffers:{}}}function o$(e,r){var n=new Uint32Array(xt(e)*r),a=0,t;return cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function _o(e,r){return e+"#"+r}var Mi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),xi(n),Ti(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=_o(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=bo++,v||(v=ho(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=bo++,s||(s=ho(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=n$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=i$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=_o(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),c$(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=t$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=a$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=Pi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,T=0;T<C.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,C.size,C.baseType,!1,_,L*T)}for(n.toggle=!n.toggle,cn(Rm(n),i.a),u=0;u<go.length;u++){var A=n[go[u]];A.toggle!==n.toggle&&A.enabled&&(r$[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return cn(t,e.g),r});function i$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,C=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function c$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var l$=S(function(e,r,n){return Yu(r,{g:n,f:{},h:e},d$,p$)}),u$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),v$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),$$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),f$=$(function(e,r){e.contextAttributes.antialias=!0}),s$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),m$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function d$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};cn(function(t){return o(Em,r,t)},e.h);var n=ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Ev(function(){return o(Mi,e,n)})):(n=ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function p$(e,r){return r.f=e.f,Mi(r)}var B=Bl,_n=zl;S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(_n,e,l,v)}else{var u=c.a;return p(_n,i,l,u)}});return p(_n,i,p(_n,e,r,t),a)});var Tt=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Tt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Co=function(e){return p(Tt,S(function(r,n,a){return o(B,k(r,n),a)}),x,e)},zi=1,b$=2,ki=0,me=function(e){return{$:1,a:e}},Pt=$(function(e,r){return{$:3,a:e,b:r}}),So=$(function(e,r){return{$:0,a:e,b:r}}),Di=$(function(e,r){return{$:1,a:e,b:r}}),oe=function(e){return{$:0,a:e}},g$=function(e){return{$:2,a:e}},K=function(e){return{$:0,a:e}},I={$:1},h$=ou,_$=yu,ye=oi,_r=$(function(e,r){return o(nu,e,ea(r))}),Mt=$(function(e,r){return h(o(ru,e,r))}),Bi=function(e){return o(_r,`
    `,o(Mt,`
`,e))},ra=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Tr=function(e){return p(ra,$(function(r,n){return n+1}),0,e)},C$=Al,S$=S(function(e,r,n){e:for(;;)if(N(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),zt=$(function(e,r){return p(S$,e,r,x)}),Ai=$(function(e,r){return p(C$,e,o(zt,0,Tr(r)-1),r)}),Qe=fu,Fi=function(e){var r=Qe(e);return 97<=r&&r<=122},Ui=function(e){var r=Qe(e);return r<=90&&65<=r},L$=function(e){return Fi(e)||Ui(e)},y$=function(e){var r=Qe(e);return r<=57&&48<=r},w$=function(e){return Fi(e)||Ui(e)||y$(e)},xe=function(e){return p(ra,B,x,e)},Or=Zl,x$=$(function(e,r){return`

(`+(ye(e+1)+(") "+Bi(T$(r))))}),T$=function(e){return o(P$,e,x)},P$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Or(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return L$(L)&&o(h$,w$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(ye(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(_r,"",xe(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(ye(Tr(s))+" ways:"));return o(_r,`

`,o(B,g,o(Ai,x$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(_r,"",xe(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(_r,"",xe(r))+`:

    `):`Problem with the given value:

`}();return g+(Bi(o(_$,4,f))+(`

`+d))}}),Te=32,Ya=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ha=wl,Ei=Yl,kt=$(function(e,r){return io(r)/io(e)}),M$=jl,ln=Ei(o(kt,2,Te)),Ri=w(Ya,0,ln,Ha,Ha),Vi=Tl,Ni=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Gi=Hl,Ia=xl,We=$(function(e,r){return N(e,r)>0?e:r}),z$=function(e){return{$:0,a:e}},Dt=Pl,k$=$(function(e,r){e:for(;;){var n=o(Dt,Te,e),a=n.a,t=n.b,i=o(B,z$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return xe(i)}}),D$=function(e){var r=e.a;return r},B$=$(function(e,r){e:for(;;){var n=Ei(r/Te);if(n===1)return o(Dt,Te,e).a;var a=o(k$,e,x),t=n;e=a,r=t;continue e}}),ji=$(function(e,r){if(r.l){var n=r.l*Te,a=Gi(o(kt,Te,n-1)),t=e?xe(r.z):r.z,i=o(B$,t,r.l);return w(Ya,Ia(r.p)+n,o(We,5,a*ln),i,r.p)}else return w(Ya,Ia(r.p),ln,Ha,r.p)}),A$=Se(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ji,!1,{z:a,l:n/Te|0,p:t});var i=Ni(p(Vi,Te,r,e)),c=e,l=r-Te,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),F$=$(function(e,r){if(e<=0)return Ri;var n=e%Te,a=p(Vi,n,e-n,r),t=e-n-Te;return y(A$,r,t,e,x,a)}),Ge=function(e){return!e.$},z=_u,Q=du,P=hu,ce=pu,Nn=Cu,U$=Su,Le=mu,Bt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Y=Mr("div"),E$=function(e){return{$:2,a:e}},Wi=$(function(e,r){return e}),Yi=$(function(e,r){return{aK:r.aK,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Vr=function(e){return e},R$=Vr,Lo=Ee(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),V$=iu,Cr=Xl,Er=au,sn=$(function(e,r){return e<1?r:p(Er,e,Cr(r),r)}),na=lu,aa=function(e){return e===""},ta=$(function(e,r){return e<1?"":p(Er,0,e,r)}),Hi=uu,yo=Se(function(e,r,n,a,t){if(aa(t)||o(V$,"@",t))return I;var i=o(na,":",t);if(i.b){if(i.b.b)return I;var c=i.a,l=Hi(o(sn,c+1,t));if(l.$===1)return I;var u=l;return K(se(Lo,e,o(ta,c,t),u,r,n,a))}else return K(se(Lo,e,t,I,r,n,a))}),wo=F(function(e,r,n,a){if(aa(a))return I;var t=o(na,"/",a);if(t.b){var i=t.a;return y(yo,e,o(sn,i,a),r,n,o(ta,i,a))}else return y(yo,e,"/",r,n,a)}),xo=S(function(e,r,n){if(aa(n))return I;var a=o(na,"?",n);if(a.b){var t=a.a;return w(wo,e,K(o(sn,t+1,n)),r,o(ta,t,n))}else return w(wo,e,I,r,n)});$(function(e,r){if(aa(r))return I;var n=o(na,"#",r);if(n.b){var a=n.a;return p(xo,e,K(o(sn,a+1,r)),o(ta,a,r))}else return p(xo,e,I,r)});var N$=cu,At=function(e){},mn=Pr,G$=mn(0),Ii=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(ra,e,r,xe(m)):w(Ii,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),lr=S(function(e,r,n){return w(Ii,e,r,0,n)}),pe=$(function(e,r){return p(lr,$(function(n,a){return o(B,e(n),a)}),x,r)}),Gn=Na,Ft=$(function(e,r){return o(Gn,function(n){return mn(e(n))},r)}),j$=S(function(e,r,n){return o(Gn,function(a){return o(Gn,function(t){return mn(o(e,a,t))},n)},r)}),W$=function(e){return p(lr,j$(B),mn(x),e)},Y$=Bu,H$=$(function(e,r){var n=r;return li(o(Gn,Y$(e),n))}),I$=S(function(e,r,n){return o(Ft,function(a){return 0},W$(o(pe,H$(e),r)))}),O$=S(function(e,r,n){return mn(0)}),J$=$(function(e,r){var n=r;return o(Ft,e,n)});qe.Task=ku(G$,I$,O$,J$);var q$=vi("Task"),Ut=$(function(e,r){return q$(o(Ft,e,r))}),Q$=sv,Z$=ql,jn={$:1},Oi=function(e){return{$:2,a:e}},oa={$:0},Fe=$(function(e,r){return{$:0,a:e,b:r}}),re=S(function(e,r,n){return r(e(n))}),Jr=function(e){var r=e.b.B;return r.a},X$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return K(o(Fe,r,{B:i,ab:c,T:o(B,a,n)}))}else return I},Ji=function(e){var r=e.b;return o(Fe,oa,r)},sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),K$=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Ji(n):n;case 2:var i=a.a.cY;return(N(i+r.eJ,Jr(n).aK)>0?o(re,X$,sr(o(Fe,jn,t))):Vr)(o(Fe,Oi({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yi,l.eA,Je(r,{aK:l.aK+r.eJ})),s=o(e,v,u);return o(Fe,oa,{B:k(v,s),ab:x,T:o(B,t.B,t.T)})}}),qi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ef=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),rf=$(function(e,r){return xe(p(ef,e,r,x))}),Qi=S(function(e,r,n){if(r<=0)return x;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,C=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(rf,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,b,p(Qi,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return h([_])}}),nf=$(function(e,r){return p(Qi,0,e,r)}),af=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=te(xe(n),te(h([a]),t)),c=o(nf,e,i),l=o(qi,e,i);if(l.b){var u=l.a,v=l.b;return o(Fe,jn,{B:u,ab:v,T:xe(c)})}else{var s=xe(c);if(s.b){var m=s.a,d=s.b;return o(Fe,jn,{B:m,ab:x,T:d})}else return r}}),tf=function(e){var r=e.b;return o(Fe,jn,r)},of=function(e){var r=e.b;return o(Fe,Oi({cY:Jr(e).aK}),r)},cf=$(function(e,r){switch(e.$){case 1:return tf(r);case 2:return Ji(r);case 3:return of(r);default:var n=e.a;return o(af,n,r)}}),Zi=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),lf=$(function(e,r){return Je(r,{av:e(r.av)})}),uf=function(e){return{$:3,a:e}},vf=function(e){return{$:2,a:e}},$f=$(function(e,r){return{$:0,a:e,b:r}}),ff=$(function(e,r){return{$:1,a:e,b:r}}),we=$(function(e,r){if(r.$)return I;var n=r.a;return K(e(n))}),j=function(e){return e<0?-e:e},Et=vu,sf=S(function(e,r,n){return o(sr,0/0,Et(o(e,r,n)))}),Xi=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),mf=eu,Ki=function(e){return p(mf,B,x,e)},df=$(function(e,r){var n=o(Xi,function(a){return a!=="0"&&a!=="."},Ki(r));return te(e&&n?"-":"",r)}),ne=oi,Oa=Ql,ec=su,rc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Or(n);if(a.$===1)return"01";var t=a.a;return o(Oa,"0",rc(t))}else{var i=Qe(r);return i>=48&&i<57?o(Oa,ec(i+1),n):"0"}},Ja=Wl,pf=Jl,ia=function(e){return o(Oa,e,"")},nc=S(function(e,r,n){return e<=0?n:p(nc,e>>1,te(r,r),e&1?te(n,r):n)}),un=$(function(e,r){return p(nc,e,r,"")}),qa=S(function(e,r,n){return te(n,o(un,e-Cr(n),ia(r)))}),Qa=Kl,ac=function(e){var r=o(Mt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},bf=function(e){var r=o(Mt,"e",ne(j(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(sr,0,Hi(o(N$,"+",t)?o(sn,1,t):t)),c=ac(n),l=c.a,u=c.b,v=te(l,u),s=i<0?o(sr,"0",o(we,function(m){var d=m.a,f=m.b;return d+("."+f)},o(we,Zi(ia),Or(te(o(un,j(i),"0"),v))))):p(qa,i+1,"0",v);return te(e<0?"-":"",s)}else{var n=r.a;return te(e<0?"-":"",n)}else return""},gf=S(function(e,r,n){if(Ja(n)||pf(n))return ne(n);var a=n<0,t=ac(bf(j(n))),i=t.a,c=t.b,l=Cr(i)+r,u=te(o(un,-l+1,"0"),p(qa,l,"0",te(i,c))),v=Cr(u),s=o(We,1,l),m=o(e,a,p(Er,s,v,u)),d=p(Er,0,s,u),f=m?Qa(o(sr,"1",o(we,rc,Or(Qa(d))))):d,g=Cr(f),b=f==="0"?f:r<=0?te(f,o(un,j(r),"0")):N(r,Cr(c))<0?p(Er,0,g-r,f)+("."+p(Er,g-r,g,f)):te(i+".",p(qa,r,"0",c));return o(df,a,b)}),tc=gf($(function(e,r){var n=Or(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Qe(t))})),hf=sf(tc),_f=S(function(e,r,n){var a=o(kt,10,j(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(hf,t,n)}),oc=Dl,ic=$(function(e,r){e:for(;;){if(r.$===-2)return I;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(oc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return K(a);default:var l=e,u=i;e=l,r=u;continue e}}}),U=Se(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Xe={$:-2},Gr=Se(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return y(U,0,r,n,y(U,1,v,s,m,d),y(U,1,i,c,l,u))}else return y(U,e,i,c,y(U,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return y(U,0,v,s,y(U,1,g,b,C,L),y(U,1,r,n,d,t))}else return y(U,e,r,n,a,t)}),Za=S(function(e,r,n){if(n.$===-2)return y(U,0,e,r,Xe,Xe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(oc,e,t);switch(u){case 0:return y(Gr,a,t,i,p(Za,e,r,c),l);case 1:return y(U,a,t,r,c,l);default:return y(Gr,a,t,i,c,p(Za,e,r,l))}}),Pn=S(function(e,r,n){var a=p(Za,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return y(U,1,t,i,c,l)}else{var u=a;return u}}),Cf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,C=d.e,L=v.e;return y(U,0,f,g,y(U,1,n,a,y(U,0,i,c,l,u),b),y(U,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,L=T.e;return y(U,1,n,a,y(U,0,i,c,l,u),y(U,0,s,m,d,L))}else return e},To=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,C=f.d,L=f.e;return y(U,0,i,c,y(U,1,u,v,s,m),y(U,1,n,a,d,y(U,0,g,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,d=_.e,A=e.e;A.a;var g=A.b,b=A.c,C=A.d,L=A.e;return y(U,1,n,a,y(U,0,i,c,T,d),y(U,0,g,b,C,L))}else return e},Sf=mt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return y(U,n,l,u,v,y(U,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,To(r)}else break e;else return c.a,c.d,To(r);else break e;return r}}),Mn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,y(U,r,n,a,Mn(t),l);var u=cc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return y(Gr,v,s,m,Mn(d),f)}else return Xe}else return y(U,r,n,a,Mn(t),l)}else return Xe},an=$(function(e,r){if(r.$===-2)return Xe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(N(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,y(U,n,a,t,o(an,e,i),c);var u=cc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return y(Gr,v,s,m,o(an,e,d),f)}else return Xe}else return y(U,n,a,t,o(an,e,i),c);else return o(Lf,e,ti(Sf,e,r,n,a,t,i,c))}),Lf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(xr(e,a)){var l=Cf(c);if(l.$===-1){var u=l.b,v=l.c;return y(Gr,n,u,v,i,Mn(c))}else return Xe}else return y(Gr,n,a,t,i,o(an,e,c))}else return Xe}),yf=$(function(e,r){var n=o(an,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return y(U,1,a,t,i,c)}else{var l=n;return l}}),Cn=S(function(e,r,n){var a=r(o(ic,e,n));if(a.$)return o(yf,e,n);var t=a.a;return p(Pn,e,t,n)}),wf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Cn,r,we(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(ff,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Cn,r,we(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o($f,k(i,c),p(_f,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Cn,r,we(function(a){return a.$===3?uf(n):a}));default:var r=e.a,n=e.b;return o(Cn,r,we(function(a){return a.$===2?vf(n):a}))}},xf=function(e){return lf(wf(e))},Tf=$(function(e,r){return o(pe,xf(e),r)}),Pf=$(function(e,r){return Je(r,{eA:o(Tf,e,r.eA)})}),Mf=$(function(e,r){var n=r.a,a=r.b;return o(Fe,n,Je(a,{B:o(Zi,Pf(e),a.B)}))}),zf=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),kf=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Fe,a,Je(t,{B:o(zf,o(e,i.a,r),i)}))}),Df=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Je(a,{aM:!a.aM});case 2:var t=n.a;return Je(a,{G:p(K$,e,t,a.G)});case 3:var i=n.a;return Je(a,{G:o(Mf,i,a.G)});case 4:var c=n.a;return Je(a,{G:p(kf,r,c,a.G)});default:var l=n.a;return Je(a,{G:o(cf,l,a.G)})}}),Bf=$(function(e,r){return o(Fe,oa,{B:k(e,r(e)),ab:x,T:x})}),Af=Au,Po=Af(x),Wn=gu,vn=bu,Ff=Vu("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return Le({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(P,"clock",ce))},o(P,"devicePixelRatio",ce))},o(P,"dt",ce))},o(P,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return Le({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",Q))},o(P,"control",Q))},o(P,"down",Q))},o(P,"downs",Wn(vn)))},o(P,"left",Q))},o(P,"pressedKeys",Wn(vn)))},o(P,"right",Q))},o(P,"shift",Q))},o(P,"up",Q))))},o(P,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return Le({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",Q))},o(P,"isDown",Q))},o(P,"move",Q))},o(P,"rightDown",Q))},o(P,"rightUp",Q))},o(P,"up",Q))},o(P,"x",ce))},o(P,"y",ce))))},o(P,"screen",o(z,function(r){return o(z,function(n){return Le({eW:n,fS:r})},o(P,"height",ce))},o(P,"width",ce))))},o(P,"wheel",o(z,function(e){return o(z,function(r){return Le({eE:r,eF:e})},o(P,"deltaX",ce))},o(P,"deltaY",ce))))),Uf=function(e){return{$:4,a:e}},Ef={$:0},Rf=ci,Re=$(function(e,r){return o(si,e,Rf(r))}),R=Re("className"),Vf=function(e){var r=e.b.B;return r.b},Yn=Re("id"),Nf=Hu,Hn=Nf,Gf=Iu,ee=Gf,jf={$:1},Wf=function(e){return{$:3,a:e}},Yf=function(e){return{$:5,a:e}},Mo=Mr("a"),Rt=Mr("button"),zo=function(e){return o(Re,"href",qu(e))},Hf=br("clip-rule"),he=br("d"),If=br("fill"),lc=$i("http://www.w3.org/2000/svg"),Of=lc("svg"),Jf=br("viewBox"),qf=o(Ou,"http://www.w3.org/XML/1998/namespace","xml:space"),ze=Of(h([Jf("0 0 24 24"),If("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),qf("http://www.w3.org/2000/svg")])),Qf=br("fill-rule"),_e=lc("path"),Sr={eD:ze(h([o(_e,h([he("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),x)])),eQ:ze(h([o(_e,h([he("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),x)])),eV:ze(h([o(_e,h([he("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),x)])),fe:ze(h([o(_e,h([he("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),x),o(_e,h([he("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),x)])),ff:ze(h([o(_e,h([he("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),x),o(_e,h([he("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),x)])),fp:ze(h([o(_e,h([he("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),x)])),fq:ze(h([o(_e,h([he("M7 5V19L18 12L7 5Z")]),x)])),fr:ze(h([o(_e,h([he("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),x)])),fs:ze(h([o(_e,h([he("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),x)])),fM:ze(h([o(_e,h([Qf("evenodd"),Hf("evenodd"),he("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),x)])),fN:ze(h([o(_e,h([he("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),x)])),f0:ze(h([o(_e,h([he("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),x)]))},Zf=function(e){return{$:0,a:e}},uc=fi,vc=$(function(e,r){return o(uc,e,Zf(r))}),Vt=function(e){return o(vc,"click",Le(e))},ko=Re("target"),Xf=Re("title"),Xa=$(function(e,r){if(r.$===-2)return Xe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return y(U,n,a,o(e,a,t),o(Xa,e,i),o(Xa,e,c))}),Kf=Ga,ir=Kf,es=function(e){return p(Tt,S(function(r,n,a){return o(B,n,a)}),x,e)},rs=$(function(e,r){return{$:3,a:e,b:r}}),ns=$(function(e,r){return{$:2,a:e,b:r}}),as=$(function(e,r){return{$:0,a:e,b:r}}),ts=$(function(e,r){return{$:1,a:e,b:r}}),gr=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),os=w(gr,0/255,0/255,0/255,1),is=ci,$c=$(function(e,r){return o(si,e,is(r))}),cs=$c("checked"),Ye=Il,ls=S(function(e,r,n){return te(o(un,e-Cr(n),ia(r)),n)}),us=Ul,fc=function(e){var r=function(n){return n<10?ye(n):ia(ec(87+n))};return e<16?r(e):te(fc(e/16|0),r(o(us,16,e)))},vs=o(re,fc,o(ls,2,"0")),Nt=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},$s=function(e){var r=Nt(e),n=r.cN,a=r.cd,t=r.b6;return o(_r,"",o(B,"#",o(pe,o(re,Ye,vs),h([n*255,a*255,t*255]))))},Ka=Re("htmlFor"),et=$(function(e,r){if(r.$)return I;var n=r.a;return e(n)}),In=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),fs=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),sc=$(function(e,r){return p(lr,fs(e),x,r)}),mc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),ss=gv,ms=$u,ds=$(function(e,r){if(r.$)return me(e);var n=r.a;return oe(n)}),ps=bv,bs=function(e){return o(ps,{ew:!1,fg:!1},e)},dc=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return I},gs=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return oe(e(n))}}),hs=function(e){return{$:2,a:e}},_s=function(e){return{$:0,a:e}},Cs=function(e){return{$:1,a:e}},pa=$(function(e,r){return Qe(r)-Qe(e)}),ba=S(function(e,r,n){var a=Qe(n);return N(Qe(e),a)<1&&N(a,Qe(r))<1}),Ss=$(function(e,r){var n=function(t){return N(t,e)<0?oe(t):me(Cs(r))},a=p(ba,"0","9",r)?oe(o(pa,"0",r)):p(ba,"a","z",r)?oe(10+o(pa,"a",r)):p(ba,"A","Z",r)?oe(10+o(pa,"A",r)):me(_s(r));return o(In,n,a)}),pc=$(function(e,r){var n=Or(r);if(n.$===1)return oe(0);var a=n.a,t=a.a,i=a.b;return o(In,function(c){return o(In,function(l){return oe(c+l*e)},o(pc,e,i))},o(Ss,e,t))}),Ls=$(function(e,r){return 2<=e&&e<=36?o(pc,e,Qa(r)):me(hs(e))}),ys=Ls(16),ws=S(function(e,r,n){return w(gr,e,r,n,1)}),xs=F(function(e,r,n,a){return w(gr,e,r,n,a)}),dn=Fl,Ts=$(function(e,r){var n=o(dn,10,e);return Ye(r*n)/n}),Ps=tu,Ms=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ki(n);if(a.b&&!a.b.b){var t=a.a;return ms(h([t,t]))}else return n};return o(re,Ps,o(re,function(n){return o(we,function(a){return p(ss,1,a,n)},bs(e))},o(re,et(dc),o(re,we(function(n){return n.fG}),o(re,we(sc(Vr)),o(re,ds("Parsing hex regex failed"),In(function(n){var a=o(pe,o(re,r,o(re,ys,gs(M$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return oe(w(xs,t/255,c/255,u/255,o(Ts,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return oe(p(ws,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),On=Mr("input"),rt=Mr("label"),nt=Re("name"),bc=$(function(e,r){return p(lr,P,r,e)}),zs=o(bc,h(["target","checked"]),Q),ks=function(e){return o(vc,"change",o(Nn,e,zs))},Ds=function(e){return k(e,!0)},Bs=function(e){return{$:1,a:e}},As=$(function(e,r){return o(uc,e,Bs(r))}),Fs=o(bc,h(["target","value"]),vn),Gt=function(e){return o(As,"input",o(Nn,Ds,o(Nn,e,Fs)))},gc=Re("max"),hc=Re("min"),_c=function(e){return o(Re,"step",e)},Jn=Re("type"),jt=Re("value"),Do=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(Y,x,h([o(rt,h([Ka(r)]),h([o(Y,h([R("relative w-full")]),h([o(Y,h([R("inline-block")]),h([ir(r)])),o(Y,h([R("inline-block float-right")]),h([ir(ne(n))]))]))])),o(On,h([Jn("range"),o(ee,"width","100%"),Yn(r),nt(r),hc(ne(a)),gc(ne(t)),jt(ne(n)),_c(ne(i)),Gt(o(re,Et,o(re,sr(42),c)))]),x)]))},Us=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Es=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(Y,h([R("h-12 py-4")]),h([o(rt,h([R("block"),Ka(e)]),h([o(On,h([R("relative bottom-[1px] align-middle mr-2"),Jn("checkbox"),Yn(e),nt(e),ks(rs(e)),cs(c)]),x),ir(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Do({cg:e,cs:i,cw:t,cA:as(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Do({cg:e,cs:i,cw:t,cA:o(re,Ye,ts(e)),cW:1,c1:c});default:var c=r.a;return o(Y,x,h([o(Y,h([o(ee,"margin-bottom","6px")]),h([o(rt,h([Ka(e)]),h([ir(e)]))])),o(On,h([Jn("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),Yn(e),nt(e),Gt(function(l){return o(ns,e,o(Us,os,Ms(l)))}),jt($s(c))]),x)]))}}),Rs=function(e){return o(Y,h([R("p-4 border-y-[0.5px] border-white20")]),h([o(Y,h([R("text-lg pb-2")]),h([ir(e.fh)])),o(Y,h([R("pl-2 pr-2")]),es(o(Xa,Es,e.av)))]))},Vs=function(e){return o(Y,h([R("text-xs text-white60")]),o(pe,Rs,e))},Ns=function(e){return o(Y,h([R("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ir("clock: "+o(tc,3,Jr(e).aK))]))},Gs=function(e){e.a;var r=e.b.T;return o(we,function(n){return Ye(60/(Jr(e).aK-n))},o(we,o(re,D$,function(n){return n.aK}),dc(o(qi,59,r))))},js=function(e){return o(Y,h([R("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Gs(e);if(r.$===1)return h([ir("... Fps")]);var n=r.a;return h([ir(ye(n)+" Fps")])}())},Ws=function(e){return{$:0,a:e}},Ys=function(e){var r=e.b.T;return Tr(r)},Hs=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Tr(r)+1+Tr(n)},Is=function(e){return o(On,h([R("absolute w-full"),Jn("range"),hc(ye(0)),gc(ye(Hs(e)-1)),jt(ye(Ys(e))),_c(ye(1)),Gt(o(re,Et,o(re,sr(42),o(re,Ye,Ws))))]),x)},Bo={$:1},Ao={$:3},Fo={$:2},at=function(e){return!e.b},Cc=$c("disabled"),ga=S(function(e,r,n){return o(Rt,h([R("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),R(n),Cc(e),Vt(r)]),h([ir("REC")]))}),ha=S(function(e,r,n){return o(Rt,h([R("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Cc(e),Vt(n)]),h([o(Y,h([R("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),Os=function(e){var r=e.a,n=e.b.ab;return o(Y,h([R("py-1")]),h([function(){switch(r.$){case 0:return p(ga,!1,Bo,"text-red-500 font-bold");case 1:return p(ga,!1,Fo,"text-white60 hover:text-white80 font-bold");default:return p(ga,!0,Fo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(ha,at(n),Sr.fq,Ao);case 1:return p(ha,at(n),Sr.fq,Ao);default:return p(ha,!1,Sr.fp,Bo)}}()]))},Js=function(e){return o(Y,h([R("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([Is(e),Os(e),js(e),Ns(e)]))},qs=function(e){var r=e.a;return xr(r,oa)},Qs=$(function(e,r){var n=qs(r.G)?o(Y,x,x):o(Y,h([R("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.fs.fU+.5*e.cT.fS)+"px"),o(ee,"top",ne(-e.fs.fY+.5*e.cT.eW)+"px")]),h([o(Y,h([R(e.fs.e4?"text-black80":"text-black40")]),h([Sr.fs]))]));return o(Y,x,h([n]))}),Zs=$(function(e,r){var n=o(Rt,h([R(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Vt(jf),Xf("Distraction Free Mode")]),h([Sr.f0])),a=40,t=260,i=o(Y,h([R("absolute w-8 bottom-12")]),h([o(Mo,h([R("text-twitterBlue40 hover:text-twitterBlue"),zo("https://twitter.com/AzizErkalSelman"),ko("_blank")]),h([Sr.fN]))])),c=80,l=o(Y,h([R("absolute w-8 bottom-2")]),h([o(Mo,h([R("text-githubCat40 hover:text-githubCat"),zo("https://github.com/erkal/elm-3d-playground-exploration"),ko("_blank")]),h([Sr.eQ]))])),u=e.cT.fS>640?H(e.cT.eW,a+t,e.cT.fS-(a+t)):H(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aM?o(Y,h([R("fixed w-10 h-10 p-1")]),h([n])):o(Y,x,h([o(Y,h([R("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),h([n,i,l])),o(Y,h([R("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),h([o(Hn,Wf,Vs(Jr(r.G).eA))])),o(Y,h([R("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),h([o(Hn,Yf,Js(r.G))])),o(Qs,e,r)]))}),Xs=S(function(e,r,n){var a=Vf(n.G),t=Jr(n.G);return o(Y,h([R("bg-black40"),R("select-none"),R("antialiased"),R("font-mono"),o(ee,"width",ne(t.cT.fS)+"px"),o(ee,"height",ne(t.cT.eW)+"px")]),h([o(Y,h([R("fixed")]),h([o(Hn,Wi(Ef),o(e,t,a))])),o(Y,h([Yn("gui")]),h([o(Zs,t,n),o(Hn,Uf,o(r,t,a))]))]))}),Ks=Ee(function(e,r,n,a,t,i){var c=$(function(u,v){return k(w(Df,r,i,u,v),Po)}),l=function(u){var v=o(Yi,n,u.e1);return k({aM:u.e1.cT.fS<500,G:o(Bf,v,a)},Po)};return Q$({e0:l,fH:Wi(Ff(E$)),fO:c,fQ:o(Xs,e,t)})}),em=F(function(e,r,n,a){return se(Ks,e,r,n,a,$(function(t,i){return o(Y,x,x)}),S(function(t,i,c){return c}))}),rm=S(function(e,r,n){return w(em,e,r,x,n)}),nm=function(e){return{}},am=$(function(e,r){return r}),qn=El,Uo=function(e){return e*qn/180},tm=Gl,vr=Ol,om=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(We,j(c),o(We,j(i),j(t)));if(l){var u=t/l,v=i/l,s=c/l,m=vr(s*s+v*v+u*u);return K({fU:s/m,fY:v/m,c6:u/m})}else return I}),_a=function(e){return e},Wt=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),zn=function(e){var r=e,n=o(We,j(r.fU),o(We,j(r.fY),j(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=vr(i*i+t*t+a*a);return K({fU:i/c,fY:t/c,c6:a/c})}else return I},tt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),im=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),Sc=$(function(e,r){var n=e,a=r;return N(a,n)>0}),cm=$(function(e,r){var n=e,a=r;return N(a,n)<0}),lm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),um=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),vm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},jr=0,Lc={fU:0,fY:0,c6:0},$m=S(function(e,r,n){return o(et,function(a){var t=o(lm,o(um,a,r),r);return o(et,function(i){var c=o(Wt,r,e),l=o(im,n,c),u=o(Sc,jr,l)?c:o(cm,jr,l)?vm(c):Lc;return o(we,function(v){return H(a,i,v)},zn(u))},zn(t))},zn(e))}),fm=function(e){var r=e,n=j(r.c6),a=j(r.fY),t=j(r.fU);if(N(t,a)<1)if(N(t,n)<1){var i=vr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=vr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(N(a,n)<1){var i=vr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=vr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},yc=function(e){var r=fm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return k(r,c)},sm=function(e){var r=e;return r},Wr=function(e){return e},mm=$(function(e,r){var n=yc(e),a=n.a,t=n.b;return Wr({cB:r,c4:a,c5:t,c7:e})}),dm=function(e){var r=o(tt,e.aS,e.dj),n=sm(e.ei),a=o(Wt,r,n),t=p($m,r,n,a);if(t.$){var v=zn(r);if(v.$){var m=yc(e.ei),d=m.a,f=m.b;return Wr({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(mm,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Wr({cB:e.dj,c4:u,c5:l,c7:c})}},zr={fU:0,fY:0,c6:0},pm=function(e){return{$:0,a:e}},Ue=function(e){var r=e;return j(r)},kn=function(e){var r=e;return .5*r},bm=Nl,gm=function(e){var r=e;return bm(r)},hm=function(e){var r=kn(Ue(e.ej)),n=gm(r);return{cM:pm(n),c2:e.c2}},tr=function(e){return e},Yt=tr({fU:0,fY:1,c6:0}),Yr=function(e){return e},_m=function(e){var r=e.aS,n=e.dj,a=e.ei;return hm({ej:Yr(2*tm(.5)),c2:dm({dj:_a(n),aS:_a(r),ei:o(sr,Yt,o(om,zr,_a(a)))})})},Ca=function(e){return e/255},Cm=S(function(e,r,n){return w(gr,Ca(e),Ca(r),Ca(n),1)}),Sm=w(gr,52/255,101/255,164/255,1),Lm=w(gr,115/255,210/255,22/255,1),wc=function(e){return{$:4,a:e}},ym=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Ht=function(e){return wc(o(ym,e,x))},wm=function(e){return Ht(e)},xm=wm,ot=function(e){return{$:0,a:e}},Tm=$(function(e,r){return{$:0,a:e,b:r}}),ca=Cv,Pm=function(e){var r=Nt(e),n=r.cN,a=r.cd,t=r.b6;return p(ca,n,a,t)},Mm=function(e){return o(Tm,0,ot(Pm(e)))},zm=function(e){return e},km=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Dm=$(function(e,r){return zm(k(e,o(km,r,e)))}),xc=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Bm=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(xc,e(n),e(a),e(t))}),Me=$(function(e,r){return{$:1,a:e,b:r}}),Tc=function(e){var r=e;return r},ae=$(function(e,r){var n=e,a=r;return o(We,n,a)}),Am=$(function(e,r){return N(e,r)<0?e:r}),le=$(function(e,r){var n=e,a=r;return o(Am,n,a)}),Lr=function(e){var r=e;return r.fU},yr=function(e){var r=e;return r.fY},wr=function(e){var r=e;return r.c6},Fm=$(function(e,r){var n=wr(r),a=wr(e),t=yr(r),i=yr(e),c=Lr(r),l=Lr(e);return{dO:o(ae,l,c),dP:o(ae,i,t),dQ:o(ae,a,n),dR:o(le,l,c),dS:o(le,i,t),dT:o(le,a,n)}}),Um=function(e){var r=Tc(e),n=r.a,a=r.b;return o(Fm,n,a)},Pc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Mc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},zc={$:0},M=zc,Em=$(function(e,r){switch(r.$){case 0:return o(u$,e,r);case 1:return o(v$,e,r);case 2:return o($$,e,r);case 3:return o(f$,e,r);case 4:return o(s$,e,r);default:return o(m$,e,r)}}),Rm=$(function(e,r){switch(r.$){case 0:return o(Vv,e,r);case 1:return o(Nv,e,r);case 2:return o(Gv,e,r);case 3:return o(jv,e,r);case 4:return o(Wv,e,r);case 5:return o(Yv,e,r);case 6:return o(Hv,e,r);case 7:return o(Iv,e,r);default:return Ov(e)}}),ue=Rv,la=function(e){var r=e;return r},Eo={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Vm=$(function(e,r){return{$:1,a:e,b:r}}),Nm=Vm({df:2,$7:0,dV:1}),Ro=Nm(h([k({dw:0},{dw:1})])),It=xv,Ot=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Gm=function(e){var r=e;return p(Ot,r.dR,r.dO,.5)},jm=function(e){var r=e;return p(Ot,r.dS,r.dP,.5)},Wm=function(e){var r=e;return p(Ot,r.dT,r.dQ,.5)},He=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Ym=function(e){return p(He,Gm(e),jm(e),Wm(e))},Hm=function(e){var r=e;return r.dO},Im=function(e){var r=e;return r.dP},kc=function(e){var r=e;return r.dQ},Om=function(e){var r=e;return r.dR},Jm=function(e){var r=e;return r.dS},Dc=function(e){var r=e;return r.dT},or=$(function(e,r){var n=e,a=r;return a-n}),Bc=function(e){return H(o(or,Om(e),Hm(e)),o(or,Jm(e),Im(e)),o(or,Dc(e),kc(e)))},qr=function(e){var r=e;return r},E=function(e){var r=Bc(e),n=r.a,a=r.b,t=r.c;return{ey:qr(Ym(e)),eS:n/2,eT:a/2,eU:t/2}},Ac=wv,Ae=function(e){return Ac(qr(e))},qm=$(function(e,r){var n=Um(r),a=E(n),t=Tc(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var l=e.b.a;return o(Me,a,ie(function(v,s,m,d,f,g,b,C){return y(ue,C,Eo,Pc,Ro,{aw:l,du:Ae(c),dv:Ae(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return o(Me,a,ie(function(s,m,d,f,g,b,C,L){return y(ue,L,Eo,Mc,Ro,{aO:o(It,la(u),l),du:Ae(c),dv:Ae(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return M;default:return M}}),Qm=$(function(e,r){return o(qm,e,r)}),tn=function(e){return e},Sa=$(function(e,r){return o(Qm,Mm(e),o(Dm,zr,o(Bm,tn,r)))}),Zm=w(gr,204/255,0/255,0/255,1),Xm=xm(h([o(Sa,Zm,H(100,0,0)),o(Sa,Lm,H(0,100,0)),o(Sa,Sm,H(0,0,100))])),Km=function(e){var r=e;return r},ed=function(e){var r=e;return Km(r.er)},Fc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),rd=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),nd=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ad=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),td=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),od=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),id=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),cd=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(id,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(Fc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(rd,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(nd,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(od,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(ad,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(td,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ld={$:0},Qn=function(e){var r=e;return r},ud=ie(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Qn(c(u)),m=o(le,s.dR,e),d=o(ae,s.dO,r),f=o(le,s.dS,n),g=o(ae,s.dP,a),b=o(le,s.dT,t),C=o(ae,s.dQ,i),L=c,_=v;e=m,r=d,n=f,a=g,t=b,i=C,c=L,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),vd=S(function(e,r,n){var a=Qn(e(r));return Kn(ud,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),La=$(function(e,r){var n=e,a=r;return N(a,n)<1}),$d=function(e){return o(La,e.dO,e.dR)&&o(La,e.dP,e.dS)&&o(La,e.dQ,e.dT)?e:{dO:o(ae,e.dR,e.dO),dP:o(ae,e.dS,e.dP),dQ:o(ae,e.dT,e.dQ),dR:o(le,e.dR,e.dO),dS:o(le,e.dS,e.dP),dT:o(le,e.dT,e.dQ)}},Zn=function(e){var r=e;return r},fd=function(e){var r=Zn(e),n=r.a,a=r.b,t=r.c,i=Lr(n),c=yr(n),l=wr(n),u=Lr(a),v=yr(a),s=wr(a),m=Lr(t),d=yr(t),f=wr(t);return $d({dO:o(ae,i,o(ae,u,m)),dP:o(ae,c,o(ae,v,d)),dQ:o(ae,l,o(ae,s,f)),dR:o(le,i,o(le,u,m)),dS:o(le,c,o(le,v,d)),dT:o(le,l,o(le,s,f))})},sd=function(e){var r=e;return r},Uc=function(e){return Ac(sd(e))},Ec=function(e){return e},md=$(function(e,r){var n=e,a=r,t=o(We,j(a.fU),o(We,j(a.fY),j(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=vr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Lc}),dd=md(Ec(1)),Rc=S(function(e,r,n){var a=o(tt,r,n),t=o(tt,e,r);return dd(o(Wt,a,t))}),pd=function(e){var r=Zn(e),n=r.a,a=r.b,t=r.c,i=Uc(p(Rc,n,a,t));return H({o:i,bU:Ae(n)},{o:i,bU:Ae(a)},{o:i,bU:Ae(t)})},bd=$(function(e,r){return{$:2,a:e,b:r}}),gd=bd({df:3,$7:0,dV:4}),hd=function(e){if(e.b){var r=e.a,n=e.b,a=gd(o(pe,pd,e)),t=p(vd,fd,r,n);return w(Fc,t,e,a,0)}else return ld},ke=S(function(e,r,n){return H(e,r,n)}),ur=$(function(e,r){var n=r;return e*n}),Vc=function(){var e=tn(1),r=tn(1),n=tn(1),a=o(ur,-.5,e),t=o(ur,-.5,r),i=o(ur,-.5,n),c=p(He,i,t,a),l=o(ur,.5,e),u=p(He,i,t,l),v=o(ur,.5,r),s=p(He,i,v,a),m=p(He,i,v,l),d=o(ur,.5,n),f=p(He,d,t,a),g=p(He,d,v,a),b=p(He,d,t,l),C=p(He,d,v,l);return cd(hd(h([p(ke,c,g,f),p(ke,c,s,g),p(ke,u,b,C),p(ke,u,C,m),p(ke,f,g,C),p(ke,f,C,b),p(ke,c,m,s),p(ke,c,u,m),p(ke,c,f,b),p(ke,c,b,u),p(ke,s,C,g),p(ke,s,m,C)])))}(),Sn={$:0},_d=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Cd=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Uc(p(Rc,u,l,c)),s={o:v,bU:Ae(u)},m={o:v,bU:Ae(l)},d={o:v,bU:Ae(c)};return o(B,s,o(B,m,o(B,d,n)))}),Sd=Xe,Ld=function(e){var r=e;return r.D},yd=F(function(e,r,n,a){if(r.$===1)return I;var t=r.a;if(n.$===1)return I;var i=n.a;if(a.$===1)return I;var c=a.a;return K(p(e,t,i,c))}),it=4294967295>>>32-ln,ct=Ml,wd=S(function(e,r,n){e:for(;;){var a=it&r>>>e,t=o(ct,a,n);if(t.$){var v=t.a;return o(ct,it&r,v)}else{var i=t.a,c=e-ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),xd=function(e){return e>>>5<<5},Td=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||N(e,n)>-1?I:N(e,xd(n))>-1?K(o(ct,it&e,i)):K(p(wd,a,e,t))}),Pd=function(e){var r=e;return r.ah},ya=$(function(e,r){return o(Td,e,Pd(r))}),Md=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(yd,S(function(c,l,u){return H(c,l,u)}),o(ya,a,e),o(ya,t,e),o(ya,i,e))};return o(sc,r,Ld(e))},zd=S(function(e,r,n){e:for(;;){var a=o(Dt,Te,e),t=a.a,i=a.b;if(N(Ia(t),Te)<0)return o(ji,!0,{z:r,l:n,p:t});var c=i,l=o(B,Ni(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Nc=function(e){return e.b?p(zd,e,x,0):Ri},kd=S(function(e,r,n){return e(r(n))}),Dd=$(function(e,r){return!o(Xi,o(kd,Z$,e),r)}),Bd=$(function(e,r){return p(lr,$(function(n,a){return e(n)?o(B,n,a):a}),x,r)}),Ad=function(e){var r=e.a;return r},Fd=$(function(e,r){var n=Ad(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&N(i,n)<0&&c>=0&&N(c,n)<0&&l>=0&&N(l,n)<0};return o(Dd,a,r)?{D:r,ah:e}:{D:o(Bd,a,r),ah:e}}),Ud=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ed=Ud({df:1,$7:3,dV:4}),lt=function(e){var r=e;return r},Dn=$(function(e,r){var n=lt(r),a=lt(e);return k(H(a.fU,a.fY,a.c6),H(n.fU,n.fY,n.c6))}),Vo=p(ca,0,0,0),wa=Ee(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ic,o(Dn,e,r),t);if(v.$){var m={o:Vo,bU:Ae(r)},d={o:Vo,bU:Ae(e)},f=u+1,g=u;return H(o(B,H(n,g,f),o(B,H(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return H(o(B,H(n,s,a),c),l,u)}}),Rd=Se(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,C=e,L=r,_=v,T=a+3,A=se(wa,s,d,f,b,r,se(wa,m,s,g,f,r,se(wa,d,m,b,g,r,t)));e=C,r=L,n=_,a=T,t=A;continue e}else{var J=t,W=J.a,G=J.b;return k(W,xe(G))}}),Vd=Se(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,C=p(Pn,o(Dn,d,s),f,p(Pn,o(Dn,s,m),g,p(Pn,o(Dn,m,d),b,t))),L=o(B,H(b,g,f),a),_=e,T=v,A=n+3,J=L,W=C;e=_,r=T,n=A,a=J,t=W;continue e}else return H(a,t,n)}),hr=S(function(e,r,n){var a=Md(n),t=p(lr,Cd(r),x,a),i=y(Vd,r,a,0,x,Sd),c=i.a,l=i.b,u=i.c,v=y(Rd,r,l,a,0,H(c,x,u)),s=v.a,m=v.b,d=at(m)?t:te(t,m);return p(_d,e,o(Fd,Nc(d),s),o(Ed,d,s))}),Nd=$(function(e,r){return r.b?p(lr,B,r,e):e}),fr=function(e){return p(lr,Nd,x,e)},No=function(e){return{D:o(pe,function(r){return H(3*r,3*r+1,3*r+2)},o(zt,0,Tr(e)-1)),ah:Nc(fr(o(pe,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Gd=function(e){switch(e.$){case 0:return Sn;case 1:var a=e.a,r=e.b,n=o(pe,Zn,r);return p(hr,a,Vr,No(n));case 2:var a=e.a,r=e.b,n=o(pe,Zn,r);return p(hr,a,Vr,No(n));case 3:var a=e.a,t=e.b;return p(hr,a,Vr,t);case 4:var a=e.a,t=e.b;return p(hr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(hr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(hr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(hr,a,function(i){return i.bU},t);case 8:return Sn;case 9:return Sn;default:return Sn}},Go=Gd(Vc),jd=function(e){var r=e;return r.aL},Wd={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Yd=1029,Hd=function(e){return{$:5,a:e}},Gc=function(e){var r=e;return Hd(r)},Id=Gc(Yd),Od=1028,Jd=Gc(Od),Ke=S(function(e,r,n){return r===1?e?o(B,Id,n):o(B,Jd,n):n}),jc={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xa=F(function(e,r,n,a){return o(Me,r,ie(function(t,i,c,l,u,v,s,m){return y(ue,p(Ke,l,a,m),jc,Wd,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Wc={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},er=F(function(e,r,n,a){return o(Me,r,ie(function(t,i,c,l,u,v,s,m){return y(ue,p(Ke,l,a,m),Wc,Pc,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Yc=$(function(e,r){return{$:3,a:e,b:r}}),qd={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},Hc={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qd=F(function(e,r,n,a){return o(Yc,n,ie(function(t,i,c,l,u,v,s,m){return y(ue,m,Hc,qd,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),rr=Se(function(e,r,n,a,t){return o(Me,n,ie(function(i,c,l,u,v,s,m,d){return y(ue,p(Ke,u,t,d),Wc,Mc,a,{aO:o(It,la(r),e),b:l,c,d:s,e:i,f:v})}))}),Zd={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bT",sceneProperties:"e"}},Xd=Se(function(e,r,n,a,t){return o(Yc,a,ie(function(i,c,l,u,v,s,m,d){return y(ue,d,Hc,Zd,t,{aO:o(It,la(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Kd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Ic={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ln=F(function(e,r,n,a){return o(Me,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return y(ue,p(Ke,l,a,m),Ic,Kd,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Oc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Jc={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},e0=Ee(function(e,r,n,a,t,i){return o(Me,a,ie(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return y(ue,p(Ke,v,i,f),Jc,Oc,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f:s})}))}),qc={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aX",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},r0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Me,u,ie(function(m,d,f,g,b,C,L,_){var T=L.a,A=L.b;return y(ue,p(Ke,g,s,_),Jc,qc,v,{b5:e,b8:r,b9:i,ca:a,P:A,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:f,c:d,aX:c,d:C,cS:n,e:m,a0:l,f:b})}))}}}}}}}}}}},n0={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},yn=Ee(function(e,r,n,a,t,i){return o(Me,a,ie(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return y(ue,p(Ke,v,i,f),Ic,n0,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),a0=function(e){return{$:0,a:e}},jo=$(function(e,r){return{$:1,a:e,b:r}}),on=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),ua=Sv,va=Lv,$a=yv,Qr=Tv,t0=function(e){return w(Qr,ua(e),va(e),$a(e),1)},Jt=w(Qr,0,0,0,0),Bn=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Jt)}else{var n=r.a;return k(e,t0(n))}}),o0=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(jo,k(t,Jt),o(on,t,r))}else if(n.b.$){var t=n.b.a.C;return o(jo,o(Bn,t,e),o(on,t,r))}else{var a=n.a.a;return n.b.a,a0(a)}}),i0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),wn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),c0=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Rr=hv,l0=function(e){return o(Rr,e,1)},ut=o(Rr,0,0),Br=$(function(e,r){if(r.$){var a=r.a.C;return k(a,ut)}else{var n=r.a;return k(e,l0(n))}}),u0=F(function(e,r,n,a){var t=w(c0,e,r,n,a);if(t.a.$){var u=t.a.a.C;return w(wn,k(u,Jt),o(Br,u,r),o(Br,u,n),o(on,u,a))}else if(t.b.$){var u=t.b.a.C;return w(wn,o(Bn,u,e),k(u,ut),o(Br,u,n),o(on,u,a))}else if(t.c.$){var u=t.c.a.C;return w(wn,o(Bn,u,e),o(Br,u,r),k(u,ut),o(on,u,a))}else if(t.d.$){var u=t.d.a.C;return w(wn,o(Bn,u,e),o(Br,u,r),o(Br,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(i0,i,c,l)}}),v0={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},Ta=Se(function(e,r,n,a,t){return o(Me,n,ie(function(i,c,l,u,v,s,m,d){return y(ue,p(Ke,u,t,d),jc,v0,a,{b2:la(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Qc={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},$0=F(function(e,r,n,a){return o(Me,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return y(ue,p(Ke,l,a,m),Qc,Oc,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),f0=dt(function(e,r,n,a,t,i,c,l,u){return o(Me,c,ie(function(v,s,m,d,f,g,b,C){var L=b.a,_=b.b;return y(ue,p(Ke,d,u,C),Qc,qc,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:L.be,bL:L.bL,bM:L.bM,bN:L.bN,cv:t,b:m,c:s,aX:e,d:g,cS:n,e:v,a0:0,f})}))}),s0=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return w(xa,l,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(xa,l,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(xa,l,E(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(er,n,E(t),c,a);case 8:var t=r.a,c=r.c;return w(er,n,E(t),c,0);case 9:var t=r.a,c=r.c;return w(er,n,E(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(Qd,n,i,E(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return y(Ta,l,v,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return y(Ta,l,v,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return y(Ta,l,v,E(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return y(rr,u,v,E(t),c,a);case 8:var t=r.a,c=r.c;return y(rr,u,v,E(t),c,0);case 9:var t=r.a,c=r.c;return y(rr,u,v,E(t),c,0);default:var t=r.a,i=r.b,c=r.d;return y(Xd,u,v,i,E(t),c)}}case 2:e.a;var s=e.b,W=e.c,m=o(o0,s,W);if(m.$){var g=m.a,b=g.a;g.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return w($0,b,E(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(e0,b,L,_,E(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var d=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return w(Ln,d,E(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return w(Ln,d,E(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return w(Ln,d,E(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(Ln,d,E(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var T=e.b,A=e.c,J=e.d,W=e.e,G=w(u0,T,A,J,W);if(G.$){var Z=G.a,X=Z.a,be=Z.b,ge=G.b,ve=ge.a,$e=ge.b,Ve=G.c,Ne=Ve.a,kr=Ve.b,Dr=G.d,L=Dr.a,_=Dr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return yl(f0,X,be,ve,$e,Ne,kr,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return r0(X)(be)(ve)($e)(Ne)(kr)(L)(_)(E(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var q=G.a,O=G.b,V=G.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return se(yn,q,O,V,E(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return se(yn,q,O,V,E(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return se(yn,q,O,V,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(yn,q,O,V,E(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),Pa=function(e){var r=e;return r.fU},Ma=function(e){var r=e;return r.fY},za=function(e){var r=e;return r.c6},m0=function(e){var r=e,n=za(r.c7),a=Ma(r.c7),t=Pa(r.c7),i=za(r.c5),c=Ma(r.c5),l=Pa(r.c5),u=za(r.c4),v=Ma(r.c4),s=Pa(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},fa=function(e){var r=e;return r.cB},Pe=function(e){var r=e;return r},pn=function(e){var r=e;return r.c4},bn=function(e){var r=e;return r.c5},gn=function(e){var r=e;return r.c7},d0=function(e){var r=qr(fa(e)),n=Pe(gn(e)),a=Pe(bn(e)),t=Pe(pn(e));return{dp:m0(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Fr=$(function(e,r){return{$:5,a:e,b:r}}),Zc=$(function(e,r){return{dp:xr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),qt=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(Zc,a,e);return o(Fr,i,t);case 1:return o(Fr,e,n);case 3:return o(Fr,e,n);case 2:return o(Fr,e,n);default:return o(Fr,e,n)}}),p0=$(function(e,r){return o(qt,d0(e),r)}),Xc=function(e){return{$:2,a:e}},b0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),g0=Mv,h0=Pv,Wo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=h0(a),g=f.fU,b=f.fY,C=f.c6,L=f.em,_=g0({em:L,fU:g*s,fY:b*m,c6:C*d});return Kn(r,n,_,t,i,c,l,u,v)}}}}}}}}}},vt=$(function(e,r){switch(r.$){case 0:return zc;case 5:var n=r.a,a=r.b;return o(Fr,n,o(vt,e,a));case 1:var t=r.a,i=r.b;return o(Me,o(b0,e,t),o(Wo,e,i));case 3:return r;case 2:var i=r.a;return Xc(o(Wo,e,i));default:var c=r.a;return wc(o(pe,vt(e),c))}}),_0=$(function(e,r){var n=r;return o(vt,e,n)}),C0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Hr=519,Kc=7683,el=7682,de=7680,S0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Qt=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bm),o(re,l(v.a9),o(re,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(S0,a,t,i)))}),L0=p(Qt,{cp:0,cO:0,c3:15},{a9:de,bm:Hr,bu:de,bv:Kc},{a9:de,bm:Hr,bu:de,bv:el}),y0=p(Qt,{cp:0,cO:0,c3:15},{a9:de,bm:Hr,bu:de,bv:el},{a9:de,bm:Hr,bu:de,bv:Kc}),w0=$(function(e,r){return e?o(B,y0,r):o(B,L0,r)}),x0={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},T0=function(e){if(e.$){var r=e.c;return K(ie(function(n,a,t,i,c,l,u,v){return y(ue,o(w0,i,v),x0,C0,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return I},Yo=function(e){var r=T0(e);if(r.$)return M;var n=r.a;return Xc(n)},P0=F(function(e,r,n,a){var t=o(s0,n,Vc),i=function(){var s=k(e,r);return s.a?s.b?Ht(h([t,Yo(Go)])):t:s.b?Yo(Go):M}(),c=jd(a),l=c.a,u=c.b,v=c.c;return o(p0,ed(a),o(_0,H(l,u,v),i))}),M0=$(function(e,r){return w(P0,!0,!0,e,r)}),ka=$(function(e,r){var n=e,a=r;return N(a,n)>-1}),Da=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),z0=tr({fU:-1,fY:0,c6:0}),k0=tr({fU:0,fY:-1,c6:0}),D0=tr({fU:0,fY:0,c6:-1}),rl=tr({fU:1,fY:0,c6:0}),nl=tr({fU:0,fY:0,c6:1}),B0=Ee(function(e,r,n,a,t,i){var c=o(ka,n,i)?nl:D0,l=o(ka,r,t)?Yt:k0,u=o(ka,e,a)?rl:z0,v=H(Ue(o(or,e,a)),Ue(o(or,r,t)),Ue(o(or,n,i))),s=p(He,o(Da,e,a),o(Da,r,t),o(Da,n,i)),m=Wr({cB:s,c4:u,c5:l,c7:c});return{er:m,aL:v}}),A0=$(function(e,r){return se(B0,Lr(e),yr(e),wr(e),Lr(r),yr(r),wr(r))}),$t=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),F0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=H(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(M0,e,o(A0,p($t,-c,-l,-u),p($t,c,l,u)))}),U0=F(function(e,r,n,a){var t=H(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return w(gr,f,d,m,a)}),E0=S(function(e,r,n){return w(U0,e,r,n,1)}),R0=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),al=S(function(e,r,n){return N(n,e)<0?e:N(n,r)>0?r:n}),Ba=function(e){return p(al,0,1,e<=.04045?e/12.92:o(dn,(e+.055)/1.055,2.4))},V0=function(e){var r=Nt(e),n=r.cN,a=r.cd,t=r.b6;return p(ca,Ba(n),Ba(a),Ba(t))},N0=function(e){return p(R0,0,ot(V0(e)),ot(0))},Xn=Rl,G0=function(e){var r=e;return r.eH},j0=function(e){var r=e;return r.cB},ft=Vl,W0=$(function(e,r){var n=r,a=qr(j0(e)),t=.5*n,i=Xn(t),c=ft(t),l=Pe(G0(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,g=m*m,b=1-2*(s+g),C=l.c6*c,L=i*C,_=2*(f-L),T=2*(f+L),A=u*C,J=2*(A+d),W=2*(A-d),G=m*C,q=2*(G-v),O=2*(G+v),V=C*C,Z=1-2*(g+V),X=1-2*(s+V);return{dp:!0,q:Z,r:T,s:W,t:_,u:X,v:O,w:J,x:q,y:b,H:a.fU-Z*a.fU-_*a.fY-J*a.c6,I:a.fY-T*a.fU-X*a.fY-q*a.c6,J:a.c6-W*a.fU-O*a.fY-b*a.c6,bY:1}}),Y0=S(function(e,r,n){return o(qt,o(W0,e,r),n)}),Zt=S(function(e,r,n){return p(Y0,e,r,n)}),Xt=$(function(e,r){return{eH:r,cB:e}}),tl=rl,H0=o(Xt,zr,tl),I0=$(function(e,r){return p(Zt,H0,Yr(e),r)}),ol=Yt,O0=o(Xt,zr,ol),J0=$(function(e,r){return p(Zt,O0,Yr(e),r)}),Kt=nl,q0=o(Xt,zr,Kt),Q0=$(function(e,r){return p(Zt,q0,Yr(e),r)}),Z0=$(function(e,r){var n=qr(e),a=1-r;return{dp:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fU,I:a*n.fY,J:a*n.c6,bY:r}}),X0=S(function(e,r,n){return o(qt,o(Z0,e,r),n)}),K0=S(function(e,r,n){return p(X0,e,r,n)}),ep=K0(zr),rp=$(function(e,r){return(r-Gi(r/e)*e)/e}),np=function(e){return 2*qn*e},Zr=F(function(e,r,n,a){return e+(r-e)*(1+Xn(np(o(rp,n,a))))/2}),ap=function(e){return o(Q0,w(Zr,1,10,30,e.aK),o(J0,w(Zr,1,10,30,e.aK),o(I0,w(Zr,1,10,30,e.aK),o(ep,w(Zr,1,2,14,e.aK),o(F0,N0(p(E0,w(Zr,0,1,30,e.aK),.4,.4)),H(1,1,1))))))},tp=$(function(e,r){return h([Xm,ap(e)])}),op=function(e){return e},ip=function(e){return tn(.01*e)},Ho=function(e){return e},cp=function(e){return e},lp=function(e){return{$:0,a:e}},up=lp,vp={$:3},$p=vp,fp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),sp=fp,mp=$(function(e,r){return fr(o(pe,e,r))}),dp=function(e){return{$:1,a:e}},pp=dp,bp=function(e){return o(br,"height",ye(e))},gp=function(e){return Wu(Ju(e))},hp=gp,_p=function(e){return{$:2,a:e}},Cp=_p,Sp=function(e){return o(_r,"",e)},Lp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ye(l*1e3)/1e3},c=function(l){return Ye(l*1e4)/100};return Sp(h(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},yp=S(function(e,r,n){return p(l$,e,r,n)}),Io=function(e){var r=e;return r},Aa=w(Qr,1,1,1,1),Ie=S(function(e,r,n){return o(pe,function(a){return o(a,r,n)},e)}),wp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),xp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(wp,n*a/t,n,n*(1-a-t)/t)}),Tp=function(e){var r=e.a,n=e.b,a=e.c;return p(ca,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},eo=$(function(e,r){return Tp(o(xp,e,r))}),nr=Bv,Pp=function(e){return nr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Fa=Se(function(e,r,n,a,t){var i=a.dp?1:-1,c=w(Qr,a.bY,a.bY,a.bY,i);return se(t,e,c,Pp(a),a.dp,r,n)}),il=Ee(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Zc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(B,y(Fa,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,L=o(B,y(Fa,e,r,n,a,C),i.U);return{M:i.M,U:L,fB:i.fB};case 2:var _=t.a,T=o(B,y(Fa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:T};default:var A=t.a;return p(ra,w(il,e,r,n,a),i,A)}}),Mp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cl=Mp,ro=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),zp=function(e){var r=e.Z,n=e.W,a=e.V;return w(ro,518,r,n,a)},kp=$(function(e,r){return{$:6,a:e,b:r}}),Dp=kp,ll=h([zp({V:1,W:0,Z:!1}),w(cl,!1,!1,!1,!1),o(Dp,0,1)]),no=8,ul=15,Nr=7681,Bp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ap=$(function(e,r){return{$:0,a:e,b:r}}),Fp=Ap({df:1,$7:0,dV:5}),Up=Fp(h([{bU:o(Rr,-1,-1)},{bU:o(Rr,1,-1)},{bU:o(Rr,-1,1)},{bU:o(Rr,1,1)}])),Ep={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},ao=function(e){return p(Qt,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},to=function(e){return y(ue,h([ao(e),w(cl,!1,!1,!1,!1)]),Ep,Bp,Up,{})},Rp=to({a9:Nr,cp:0,cO:no,bm:Hr,c3:ul,bu:Nr,bv:Nr}),Vp=516,Oo=5386,Np=function(e){return o(dn,2,e+4)},vl=function(e){return to({a9:de,cp:ul,cO:no,bm:Vp,c3:Np(e),bu:Oo,bv:Oo})},Gp=S(function(e,r,n){return fr(h([p(Ie,e,n,ll),h([vl(r),Rp])]))}),jp=$(function(e,r){return fr(o(Ai,Gp(e),r))}),Wp=function(e){var r=e.Z,n=e.W,a=e.V;return w(ro,513,r,n,a)},Yp=Wp({V:1,W:0,Z:!0}),Hp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Ip=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return Hp(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Op=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jo=$(function(e,r){var n=e,a=r;return p(Op,32774,n,a)}),Jp=1,qo=771,qp=770,oo=Ip({bw:0,aH:o(Jo,Jp,qo),bz:0,bB:o(Jo,qp,qo),bG:0,bW:0}),Ar=h([Yp,oo]),Qo=function(e){var r=e;return fa(r)},Qp=function(e){return e},Zp=function(e){return Wr({cB:Qp({fU:e.H,fY:e.I,c6:e.J}),c4:tr({fU:e.q,fY:e.r,c6:e.s}),c5:tr({fU:e.t,fY:e.u,c6:e.v}),c7:tr({fU:e.w,fY:e.x,c6:e.y})})},Ua=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),$l=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),fl=$(function(e,r){return{cB:o($l,e,fa(r)),c4:o(Ua,e,pn(r)),c5:o(Ua,e,bn(r)),c7:o(Ua,e,gn(r))}}),Xp=$(function(e,r){var n=Qn(r),a=Qn(e);return{dO:o(ae,a.dO,n.dO),dP:o(ae,a.dP,n.dP),dQ:o(ae,a.dQ,n.dQ),dR:o(le,a.dR,n.dR),dS:o(le,a.dS,n.dS),dT:o(le,a.dT,n.dT)}}),Kp=function(e){var r=e;return H(r.fU,r.fY,r.c6)},An=$(function(e,r){var n=e,a=r;return a+n}),e1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=kn(Ue(a)),c=kn(Ue(n)),l=kn(Ue(t)),u=Kp(r),v=u.a,s=u.b,m=u.c;return{dO:o(An,c,v),dP:o(An,i,s),dQ:o(An,l,m),dR:o(or,c,v),dS:o(or,i,s),dT:o(or,l,m)}}),Zo=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=Pe(gn(e)),d=j(l*m.fU)+j(c*m.fY)+j(i*m.c6),f=Pe(bn(e)),g=j(l*f.fU)+j(c*f.fY)+j(i*f.c6),b=Pe(pn(e)),C=j(l*b.fU)+j(c*b.fY)+j(i*b.c6),L=o(e1,H(C,g,d),o($l,e,p($t,s,v,u)));if(a.$)return K(L);var _=a.a;return K(o(Xp,_,L))}),st=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 1:var c=t.a,l=w(Zo,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 2:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 3:var c=t.a,l=w(Zo,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 4:var u=t.a,f=e,g=r,b=w(st,e,r,n,u),C=i;e=f,r=g,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(fl,Zp(v),e),d=r*v.bY,f=e,g=r,b=w(st,m,d,n,h([s])),C=i;e=f,r=g,n=b,a=C;continue e}}else return n}),r1={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},n1=function(e){var r=e;return r},Xo=to({a9:Nr,cp:0,cO:no,bm:Hr,c3:255,bu:Nr,bv:Nr}),a1=function(e){var r=e,n=o(We,j(r.fU),o(We,j(r.fY),j(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=vr(i*i+t*t+a*a);return c*n}else return jr},Ce={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},De=$(function(e,r){var n=e,a=r;return nr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),nn=k({be:o(De,Ce,Ce),bL:o(De,Ce,Ce),bM:o(De,Ce,Ce),bN:o(De,Ce,Ce)},w(Qr,0,0,0,0)),Ko=function(e){var r=e;return-r},sl=514,ml=function(e){var r=e.Z,n=e.W,a=e.V;return w(ro,515,r,n,a)},dl=240,t1=h([ml({V:1,W:0,Z:!0}),ao({a9:de,cp:dl,cO:0,bm:sl,c3:0,bu:de,bv:de}),oo]),o1=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Ue(a),l=c,u=Ue(t),v=u,s=n.cM;if(s.$){var d=s.a;return Ja(v)?nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return Ja(v)?nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),xn=$(function(e,r){return(1&e>>r)===1?0:1}),i1=function(e){return h([ml({V:1,W:0,Z:!0}),ao({a9:de,cp:dl,cO:e,bm:sl,c3:0,bu:de,bv:de}),oo])},c1=S(function(e,r,n){return fr(o(pe,function(a){var t=a<<4,i=w(Qr,o(xn,a,0),o(xn,a,1),o(xn,a,2),o(xn,a,3));return p(Ie,e,k(r,i),i1(t))},o(zt,1,o(dn,2,n)-1)))}),$n=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},l1=Av,ei=function(e){var r=e;return $n(gn(r))},u1={cB:zr,c4:tl,c5:ol,c7:Kt},v1=function(e){var r=qr(fa(e)),n=Pe(gn(e)),a=Pe(bn(e)),t=Pe(pn(e));return nr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},$1=$(function(e,r){var n=r;return v1(o(fl,n,e))}),f1=function(e){return o($1,u1,e)},s1=function(e){var r=e;return r.c2},m1=function(e){var r=e;return pn(r)},d1=function(e){var r=e;return bn(r)},p1=function(e){var r=s1(e.ev),n=Wr({cB:Qo(r),c4:m1(r),c5:d1(r),c7:$n(ei(r))}),a=Ht(e.aQ),t=a,i=w(st,n,1,I,h([t]));if(i.$===1)return x;var c=i.a,l=f1(r),u=o(ur,.99,o(ae,Ue(e.aJ),Ko(kc(c)))),v=Bc(c),s=v.a,m=v.b,d=v.c,f=a1(p(xc,s,m,d)),g=o(ur,1.01,o(An,f,Ko(Dc(c)))),b=o(o1,e.ev,{eq:e.eq,eP:g,fi:u}),C=l1(b).dM,L=C?Pe($n(ei(r))):lt(Qo(r)),_=function(){var ve=e.b_;switch(ve.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var $e=ve.a;return k(3,$e);case 4:var $e=ve.a;return k(4,$e);default:return k(5,0)}}(),T=_.a,A=_.b,J=e.bE,W=J,G=o(eo,W,e.b0),q=G,O=nr({dx:0,dy:L.fU,dz:ua(q),dA:e.ec,dB:0,dC:L.fY,dD:va(q),dE:n1(f),dF:0,dG:L.c6,dH:$a(q),dI:T,dJ:0,dK:C,dL:0,dM:A}),V=se(il,O,l,b,r1,t,{M:x,U:x,fB:x}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return fr(h([p(Ie,V.M,k(X,Aa),Ar),p(Ie,V.U,nn,Ar)]));case 1:var X=Z.a;return fr(h([p(Ie,V.M,nn,Ar),h([Xo]),p(Ie,V.fB,X.be,ll),h([vl(0)]),p(Ie,V.M,k(X,Aa),t1),p(Ie,V.U,nn,Ar)]));default:var be=Z.a,ge=Z.b;return fr(h([p(Ie,V.M,k(ge,Aa),Ar),h([Xo]),o(jp,V.fB,be),p(c1,V.M,ge,Tr(be)),p(Ie,V.U,nn,Ar)]))}},b1=function(e){return o(br,"width",ye(e))},g1=$(function(e,r){var n=h([pp(1),Cp(0),up(!0),w(sp,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return H(n,"0",1);case 1:return H(o(B,$p,n),"1",1);default:var A=T.a;return H(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Io(v),m=o(ee,"height",ye(s)+"px"),d=Io(u),f=d/s,g=o(mp,function(T){return p1({eq:f,ev:e.ev,aJ:e.aJ,aQ:T.aQ,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),b=o(ee,"width",ye(d)+"px"),C=e.aI,L=C,_=Lp(L);return p(hp,"div",h([o(ee,"padding","0px"),b,m]),h([k(i,p(yp,t,h([b1(Ye(d*c)),bp(Ye(s*c)),b,m,o(ee,"display","block"),o(ee,"background-color",_)]),g))]))}),h1=function(e){return o(g1,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL},h([{aQ:e.aQ,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},pl=function(e){return e},ri=pl({fU:.31271,fY:.32902}),_1=$(function(e,r){var n=e,a=Pe(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(eo,r.ce,r.b7),u=l;return{bz:$a(u),ex:n,bG:va(u),cK:0,bW:ua(u),c_:1,fU:-t,fY:-i,c6:-c}}),C1=function(e){return e},S1=function(e){return C1(1.2*o(dn,2,e))},Ea=function(e){return e},L1={$:0},y1=L1,ni=function(e){var r=e;return r},w1=function(e){e:for(;;){if(xr(e.e2,jr)&&xr(e.e3,jr))return Ce;if(o(Sc,Ue(e.e2),Ue(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:$n(e.ei)};e=r;continue e}else{var n=j(ni(e.e3)/qn),a=j(ni(e.e2)/qn),t=Pe(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(eo,Ec(1),e.b7),v=u;return{bz:a*$a(v),ex:!1,bG:a*va(v),cK:n/a,bW:a*ua(v),c_:3,fU:i,fY:c,c6:l}}}},ai=function(e){return w1({b7:e.b7,e2:e.ce,e3:jr,ei:e.ei})},x1=function(e){var r=e;return r},bl=function(e){var r=p(al,1667,25e3,x1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return pl({fU:n,fY:a})},gl=function(e){return e},T1=bl(gl(12e3)),P1=bl(gl(5600)),M1=function(e){return{$:2,a:e}},z1=function(e){return M1(e)},k1=$(function(e,r){return{$:2,a:e,b:r}}),hl=function(e){return{$:0,a:e}},Tn=function(e){var r=e;return r},D1=function(e){var r=e;return r.ex},B1=hl(nn.a),A1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(B,a,i),c):k(i,o(B,a,c))});return p(lr,n,k(x,x),r)}),F1=function(e){var r=e;return nr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},U1=ie(function(e,r,n,a,t,i,c,l){var u=o(A1,D1,h([Tn(e),Tn(r),Tn(n),Tn(a)])),v=u.a,s=u.b;if(v.b){var m=te(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(k1,o(pe,F1,v),{be:o(De,d,g),bL:o(De,C,_),bM:o(De,t,i),bN:o(De,c,l)})}else return B1}else return hl({be:o(De,e,r),bL:o(De,n,a),bM:o(De,t,i),bN:o(De,c,l)})}),E1=S(function(e,r,n){return Kn(U1,e,r,n,Ce,Ce,Ce,Ce,Ce)}),R1=function(e){var r=o(_1,cp(e.fB),{b7:P1,eH:e.fJ,ce:Ea(8e4)}),n=ai({b7:T1,ce:Ea(2e4),ei:e.ei}),a=ai({b7:ri,ce:Ea(15e3),ei:$n(e.ei)}),t=p(E1,r,n,a);return h1({b1:z1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL,aQ:e.aQ,bE:S1(15),bK:t,b_:y1,b0:ri})},V1=$(function(e,r){var n=e,a=r,t=Xn(a);return{fU:t*Xn(n),fY:t*ft(n),c6:ft(a)}}),N1=$(function(e,r){return R1({aI:op(e.es),ev:e.ev,aJ:ip(.5),cb:e.cb,aL:k(Ho(Ye(e.cT.fS)),Ho(Ye(e.cT.eW))),aQ:r,fB:!0,fJ:o(V1,Yr(e.fI),Yr(e.fK)),ei:Kt})}),G1=$(function(e,r){return o(N1,{es:p(Cm,46,46,46),ev:_m({dj:{fU:0,fY:4,c6:8},aS:{fU:0,fY:0,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Uo(135),fK:-Uo(45)},o(tp,e,r))}),j1=p(rm,G1,am,nm);const W1={Main:{init:j1(o(z,function(e){return Le({e1:e})},o(P,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return Le({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(P,"clock",ce))},o(P,"devicePixelRatio",ce))},o(P,"dt",ce))},o(P,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return Le({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",Q))},o(P,"control",Q))},o(P,"down",Q))},o(P,"downs",Wn(vn)))},o(P,"left",Q))},o(P,"pressedKeys",Wn(vn)))},o(P,"right",Q))},o(P,"shift",Q))},o(P,"up",Q))))},o(P,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return Le({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",Q))},o(P,"isDown",Q))},o(P,"move",Q))},o(P,"rightDown",Q))},o(P,"rightUp",Q))},o(P,"up",Q))},o(P,"x",ce))},o(P,"y",ce))))},o(P,"screen",o(z,function(r){return o(z,function(n){return Le({eW:n,fS:r})},o(P,"height",ce))},o(P,"width",ce))))},o(P,"wheel",o(z,function(e){return o(z,function(r){return Le({eE:r,eF:e})},o(P,"deltaX",ce))},o(P,"deltaY",ce)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Y1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-D.clock;b<.009||(D.dt=b,D.clock=g,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},H1=()=>{Ra("pointerdown"),Ra("wheel"),Ra("keydown")},Ra=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},I1=W1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});H1();Y1(I1);
