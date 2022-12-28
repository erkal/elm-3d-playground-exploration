(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function pr(e,r,n){return n.a=e,n.f=r,n}function $(e){return pr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return pr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return pr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Ce(e){return pr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Fe(e){return pr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function mt(e){return pr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ie(e){return pr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function dt(e){return pr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function S(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ti(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function aa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function wl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Sl=[];function xl(e){return e.length}var Tl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Pl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),Ml=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var zl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+kl()),r});function kl(e){return"<internals>"}function Nr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=Va(e,r,0,a);t&&(n=a.pop());t=Va(n.a,n.b,0,a));return t}function Va(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Nr(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$<0&&(e=Co(e),r=Co(r));for(var t in e)if(!Va(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return Y(e,r)<0});$(function(e,r){return Y(e,r)<1});$(function(e,r){return Y(e,r)>0});$(function(e,r){return Y(e,r)>=0});var Dl=$(function(e,r){var n=Y(e,r);return n<0?ki:n?b$:zi}),$n=0;function M(e,r){return{a:e,b:r}}function O(e,r,n){return{a:e,b:r,c:n}}function Je(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ae);function ae(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ze(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ze(e.a,r);return n}var T={$:0};function Ze(e,r){return{$:1,a:e,b:r}}var Al=$(Ze);function g(e){for(var r=T,n=e.length;n--;)r=Ze(e[n],r);return r}function ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Bl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});Ce(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(S(e,r.a,n.a,a.a,t.a));return g(i)});Fe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(w(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(ta(r).sort(function(n,a){return Y(e(n),e(a))}))});$(function(e,r){return g(ta(r).sort(function(n,a){var t=o(e,n,a);return t===zi?0:t===ki?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Fl=$(Math.pow);$(function(e,r){return r%e});var Ul=$(function(e,r){var n=r%e;return e===0?Nr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Rl=Math.PI,El=Math.cos,Vl=Math.sin,Yl=Math.tan,jl=Math.atan;$(Math.atan2);function Nl(e){return e}function Gl(e){return e===1/0||e===-1/0}var Hl=Math.ceil,Wl=Math.floor,Il=Math.round,Jl=Math.sqrt,io=Math.log,Ol=isNaN;function ql(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Zl=$(function(e,r){return e+r});function Kl(e){var r=e.charCodeAt(0);return isNaN(r)?W:Q(55296<=r&&r<=56319?M(e[0]+e[1],e.slice(2)):M(e[0],e.slice(1)))}$(function(e,r){return e+r});function Xl(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Ql(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var eu=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),ru=$(function(e,r){return r.split(e)}),nu=$(function(e,r){return r.join(e)}),au=y(function(e,r,n){return n.slice(e,r)});function tu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ou=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),iu=$(function(e,r){return r.indexOf(e)>-1}),cu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var lu=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function oi(e){return e+""}function uu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return W;r=10*r+i-48}return t==a?W:Q(n==45?-r:r)}function vu(e){if(e.length===0||/[\sxbo]/.test(e))return W;var r=+e;return r===r?Q(r):W}function $u(e){return ta(e).join("")}function fu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function su(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function mu(e){return{$:0,a:e}}function pt(e){return{$:2,b:e}}var du=pt(function(e){return typeof e=="boolean"?te(e):Ie("a BOOL",e)}),pu=pt(function(e){return typeof e=="number"?te(e):Ie("a FLOAT",e)}),bu=pt(function(e){return typeof e=="string"?te(e):e instanceof String?te(e+""):Ie("a STRING",e)});function gu(e){return{$:3,b:e}}var hu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function br(e,r){return{$:9,f:e,g:r}}var _u=$(function(e,r){return{$:10,b:r,h:e}}),Cu=$(function(e,r){return br(e,[r])}),yu=y(function(e,r,n){return br(e,[r,n])});B(function(e,r,n,a){return br(e,[r,n,a])});Ce(function(e,r,n,a,t){return br(e,[r,n,a,t])});Fe(function(e,r,n,a,t,i){return br(e,[r,n,a,t,i])});mt(function(e,r,n,a,t,i,c){return br(e,[r,n,a,t,i,c])});ie(function(e,r,n,a,t,i,c,l){return br(e,[r,n,a,t,i,c,l])});dt(function(e,r,n,a,t,i,c,l,u){return br(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return De(e,n)}catch(a){return me(o(Pt,"This is not valid JSON! "+a.message,r))}});var ii=$(function(e,r){return De(e,r)});function De(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?te(e.c):Ie("null",r);case 3:return Cn(r)?co(e.b,r,g):Ie("a LIST",r);case 4:return Cn(r)?co(e.b,r,Lu):Ie("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ie("an OBJECT with a field named `"+n+"`",r);var v=De(e.b,r[n]);return Ve(v)?v:me(o(yo,n,v.a));case 7:var a=e.e;if(!Cn(r))return Ie("an ARRAY",r);if(a>=r.length)return Ie("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=De(e.b,r[a]);return Ve(v)?v:me(o(Di,a,v.a));case 8:if(typeof r!="object"||r===null||Cn(r))return Ie("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=De(e.b,r[i]);if(!Ve(v))return me(o(yo,i,v.a));t=Ze(M(i,v.a),t)}return te(xe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=De(l[u],r);if(!Ve(v))return v;c=c(v.a)}return te(c);case 10:var v=De(e.b,r);return Ve(v)?De(e.h(v.a),r):v;case 11:for(var s=T,m=e.g;m.b;m=m.b){var v=De(m.a,r);if(Ve(v))return v;s=Ze(v.a,s)}return me(g$(xe(s)));case 1:return me(o(Pt,e.a,r));case 0:return te(e.a)}}function co(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=De(e,r[i]);if(!Ve(c))return me(o(Di,i,c.a));t[i]=c.a}return te(n(t))}function Cn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Lu(e){return o(F$,e.length,function(r){return e[r]})}function Ie(e,r){return me(o(Pt,"Expecting "+e,r))}function Br(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Br(e.b,r.b);case 6:return e.d===r.d&&Br(e.b,r.b);case 7:return e.e===r.e&&Br(e.b,r.b);case 9:return e.f===r.f&&lo(e.g,r.g);case 10:return e.h===r.h&&Br(e.b,r.b);case 11:return lo(e.g,r.g)}}function lo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Br(e[a],r[a]))return!1;return!0}var wu=$(function(e,r){return JSON.stringify(r,null,e)+""});function ci(e){return e}y(function(e,r,n){return n[e]=r,n});function xr(e){return{$:0,a:e}}function Su(e){return{$:1,a:e}}function lr(e){return{$:2,b:e,c:null}}var Ya=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function xu(e){return{$:5,b:e}}var Tu=0;function bt(e){var r={$:0,e:Tu++,f:e,g:null,h:[]};return gt(r),r}function li(e){return lr(function(r){r(xr(bt(e)))})}function ui(e,r){e.h.push(r),gt(e)}var Pu=$(function(e,r){return lr(function(n){ui(e,r),n(xr($n))})}),pa=!1,uo=[];function gt(e){if(uo.push(e),!pa){for(pa=!0;e=uo.shift();)Mu(e);pa=!1}}function Mu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return ht(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function ht(e,r,n,a,t,i){var c=o(ii,e,r?r.flags:void 0);Ve(c)||Nr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=zu(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),$o(l,b.b,t(v))}return $o(l,u.b,t(v)),m?{ports:m}:{}}var Oe={};function zu(e,r){var n;for(var a in Oe){var t=Oe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Du(t,r)}return n}function ku(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Du(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ya,l,xu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?S(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=bt(o(Ya,l,e.b))}var Au=$(function(e,r){return lr(function(n){e.g(r),n(xr($n))})});$(function(e,r){return o(Pu,e.h,{$:0,a:r})});function vi(e){return function(r){return{$:1,k:e,l:r}}}function Bu(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var vo=[],ba=!1;function $o(e,r,n){if(vo.push({p:e,q:r,r:n}),!ba){ba=!0;for(var a;a=vo.shift();)Fu(a.p,a.q,a.r);ba=!1}}function Fu(e,r,n){var a={};Vn(!0,r,a,null),Vn(!1,n,a,null);for(var t in e)ui(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Vn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Uu(e,t,a,r.l);n[t]=Ru(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Vn(e,c.a,n,a);return;case 3:Vn(e,r.o,n,{s:r.n,t:a});return}}function Uu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Oe[r].e:Oe[r].f;return o(i,t,a)}function Ru(e,r,n){return n=n||{i:T,j:T},e?n.i=Ze(r,n.i):n.j=Ze(r,n.j),n}function Eu(e){Oe[e]&&Nr(3)}$(function(e,r){return r});function Vu(e,r){return Eu(e),Oe[e]={f:Yu,u:r,a:ju},vi(e)}var Yu=$(function(e,r){return function(n){return e(r(n))}});function ju(e,r){var n=T,a=Oe[e].u,t=xr(null);Oe[e].b=t,Oe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ii,a,c);Ve(l)||Nr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Yn,ar=typeof document<"u"?document:{};function _t(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(fr(e,function(){}),t),{}});function ja(e){return{$:0,a:e}}var $i=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ct(n),e:t,f:e,b:i}})}),Tr=$i(void 0),Nu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ct(n),e:t,f:e,b:i}})}),Gu=Nu(void 0);function Hu(e,r,n,a){return{$:3,d:Ct(e),g:r,h:n,i:a}}var Wu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return gr([e,r],function(){return e(r)})});y(function(e,r,n){return gr([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return gr([e,r,n,a],function(){return p(e,r,n,a)})});Ce(function(e,r,n,a,t){return gr([e,r,n,a,t],function(){return S(e,r,n,a,t)})});Fe(function(e,r,n,a,t,i){return gr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});mt(function(e,r,n,a,t,i,c){return gr([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ie(function(e,r,n,a,t,i,c,l){return gr([e,r,n,a,t,i,c,l],function(){return ti(e,r,n,a,t,i,c,l)})});dt(function(e,r,n,a,t,i,c,l,u){return gr([e,r,n,a,t,i,c,l,u],function(){return aa(e,r,n,a,t,i,c,l,u)})});var fi=$(function(e,r){return{$:"a0",n:e,o:r}}),Iu=$(function(e,r){return{$:"a1",n:e,o:r}}),si=$(function(e,r){return{$:"a2",n:e,o:r}}),hr=$(function(e,r){return{$:"a3",n:e,o:r}}),Ju=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Ou(e){return e=="script"?"p":e}function qu(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(fi,r.n,Zu(e,r.o)):r});function Zu(e,r){var n=Dt(r);return{$:r.$,a:n?p(U$,n<3?Ku:Xu,we(e),r.a):o(Hn,e,r.a)}}var Ku=$(function(e,r){return M(e(r.a),r.b)}),Xu=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Ct(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?fo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?fo(c,t,i):c[t]=i}return r}function fo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function fr(e,r){var n=e.$;if(n===5)return fr(e.k||(e.k=e.m()),r);if(n===0)return ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=fr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Na(c,r,e.d),c}var c=e.f?ar.createElementNS(e.f,e.c):ar.createElement(e.c);Yn&&e.c=="a"&&c.addEventListener("click",Yn(c)),Na(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)_t(c,fr(n===1?l[u]:l[u].b,r));return c}function Na(e,r,n){for(var a in n){var t=n[a];a==="a1"?Qu(e,t):a==="a0"?nv(e,r,t):a==="a3"?ev(e,t):a==="a4"?rv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Qu(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function ev(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function rv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function nv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=av(r,i),e.addEventListener(t,c,yt&&{passive:Dt(i)<2}),a[t]=c}}var yt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yt=!0}}))}catch{}function av(e,r){function n(a){var t=n.q,i=De(t.a,a);if(!!Ve(i)){for(var c=Dt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function tv(e,r){return e.$==r.$&&Br(e.a,r.a)}function mi(e,r){var n=[];return Ye(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ye(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=fv(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ye(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){$e(n,0,a,r);return}(f?!ov(m,d):m!==d)&&$e(n,2,a,d),Ye(h,b,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:so(e,r,n,a,iv);return;case 2:so(e,r,n,a,cv);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=Lt(e.d,r.d);C&&$e(n,4,a,C);var L=r.i(e.g,r.g);L&&$e(n,5,a,L);return}}}function ov(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function so(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=Lt(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function Lt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Lt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&tv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function iv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ye(s,i[v],n,++a),a+=s.b||0}}function cv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],C=h.a,L=b.a,_=h.b,x=b.b,F=void 0,J=void 0;if(C===L){f++,Ye(_,x,t,f),f+=_.b||0,m++,d++;continue}var G=l[m+1],j=u[d+1];if(G){var q=G.a,I=G.b;J=L===q}if(j){var V=j.a,K=j.b;F=C===V}if(F&&J){f++,Ye(_,K,t,f),Or(i,t,C,x,d,c),f+=_.b||0,f++,qr(i,t,C,I,f),f+=I.b||0,m+=2,d+=2;continue}if(F){f++,Or(i,t,L,x,d,c),Ye(_,K,t,f),f+=_.b||0,m+=1,d+=2;continue}if(J){f++,qr(i,t,C,_,f),f+=_.b||0,f++,Ye(I,x,t,f),f+=I.b||0,m+=2,d+=1;continue}if(G&&q===V){f++,qr(i,t,C,_,f),Or(i,t,L,x,d,c),f+=_.b||0,f++,Ye(I,K,t,f),f+=I.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;qr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],b=u[d];Or(i,t,b.a,b.b,void 0,X),d++}(t.length>0||c.length>0||X)&&$e(n,8,a,{w:t,x:c,y:X})}var di="_elmW6BL";function Or(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ye(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Or(e,r,n+di,a,t,i)}function qr(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ye(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}qr(e,r,n+di,a,t)}function pi(e,r,n,a){Zr(e,r,n,0,0,r.b,a)}function Zr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)pi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Zr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Zr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Zr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var L=d===1?h[C]:h[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=Zr(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function bi(e,r,n,a){return n.length===0?e:(pi(e,r,n,a),jn(e,n))}function jn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=lv(t,a);t===e&&(e=i)}return e}function lv(e,r){switch(r.$){case 0:return uv(e,r.s,r.u);case 4:return Na(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return jn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(fr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=jn(e,i.w),e;case 8:return vv(e,r);case 5:return r.s(e);default:Nr(10)}}function uv(e,r,n){var a=e.parentNode,t=fr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function vv(e,r){var n=r.s,a=$v(n.y,r);e=jn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:fr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&_t(e,a),e}function $v(e,r){if(!!e){for(var n=ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;_t(n,i.c===2?i.s:fr(i.z,r.u))}return n}}function wt(e){if(e.nodeType===3)return ja(e.textContent);if(e.nodeType!==1)return ja("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ze(o(hr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=Ze(wt(v[a]),u);return p(Tr,l,r,u)}function fv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var sv=B(function(e,r,n,a){return ht(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=wt(l);return gi(i,function(v){var s=c(v),m=mi(u,s);l=bi(l,u,m,t),u=s})})});B(function(e,r,n,a){return ht(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=ar.title,v=ar.body,s=wt(v);return gi(i,function(m){Yn=c;var d=l(m),f=Tr("body")(T)(d.er),h=mi(s,f);v=bi(v,s,h,t),s=f,Yn=0,u!==d.fJ&&(ar.title=u=d.fJ)})})});var Nn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function gi(e,r){r(e);var n=0;function a(){n=n===1?0:(Nn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Nn(a),n=2)}}$(function(e,r){return o(Ft,At,lr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Ft,At,lr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Ft,At,lr(function(){history.replaceState({},"",r),e()}))});var mv={addEventListener:function(){},removeEventListener:function(){}},dv=typeof window<"u"?window:mv;y(function(e,r,n){return li(lr(function(a){function t(i){bt(n(i))}return e.addEventListener(r,t,yt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=De(e,r);return Ve(n)?Q(n.a):W});function hi(e,r){return lr(function(n){Nn(function(){var a=document.getElementById(e);n(a?xr(r(a)):Su(E$(e)))})})}function pv(e){return lr(function(r){Nn(function(){r(xr(e()))})})}$(function(e,r){return hi(r,function(n){return n[e](),$n})});$(function(e,r){return pv(function(){return dv.scroll(e,r),$n})});y(function(e,r,n){return hi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,$n})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var bv=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return Q(new RegExp(r,n))}catch{return W}});$(function(e,r){return r.match(e)!==null});var gv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?Q(m):W}a.push(S(mc,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Q(v):W}return n(S(mc,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var mo=0;function on(e,r){for(;r.b;r=r.b)e(r.a)}function St(e){for(var r=0;e.b;e=e.b)r++;return r}var hv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},_v=Ce(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Cv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),yv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Lv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),wv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Tv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Pv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Mv=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},zv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},kv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Dv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},_i=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ci=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Av=function(e){e.gl.disable(e.gl.CULL_FACE)},Bv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Fv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Uv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},po=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Rv=[zv,kv,Dv,_i,Ci,Av,Bv,Fv,Uv];function bo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Ev(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function yi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Vv(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,L){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[L]:C[L][_];else i.forEach(function(x){for(_=0;_<h;_++)f[b++]=h===1?C[x][L]:C[x][L][_]})}var u=yi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(St(n.b)*s);on(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Yv(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=jv(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*St(r.b),indexBuffer:null,buffers:{}}}function jv(e,r){var n=new Uint32Array(St(e)*r),a=0,t;return on(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function go(e,r){return e+"#"+r}var Li=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),_i(n),Ci(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=go(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=mo++,v||(v=bo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=mo++,s||(s=bo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Ev(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Nv(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=go(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Gv(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Yv(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Vv(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=yi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(h+x),a.vertexAttribPointer(h+x,C.size,C.baseType,!1,_,L*x)}for(n.toggle=!n.toggle,on(Im(n),i.a),u=0;u<po.length;u++){var F=n[po[u]];F.toggle!==n.toggle&&F.enabled&&(Rv[u](n),F.enabled=!1,F.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return on(t,e.g),r});function Nv(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var x=l.textures.get(_);x||(x=_.eA(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Gv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Hv=y(function(e,r,n){return Hu(r,{g:n,f:{},h:e},Kv,Xv)}),Wv=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Iv=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Jv=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ov=$(function(e,r){e.contextAttributes.antialias=!0}),qv=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Zv=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Kv(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};on(function(t){return o(Wm,r,t)},e.h);var n=ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),hv(function(){return o(Li,e,n)})):(n=ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Xv(e,r){return r.f=e.f,Li(r)}var Qv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/e$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function e$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var xt=new Float64Array(3),ho=new Float64Array(3),_o=new Float64Array(3),r$=y(function(e,r,n){return new Float64Array([e,r,n])}),n$=function(e){return e[0]},a$=function(e){return e[1]},t$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var o$=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(wi);function Si(e,r,n){return n===void 0&&(n=new Float64Array(3)),Gn(wi(e,r,n),n)}$(Si);function xi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Gn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/xi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var i$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Kr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Kr);function Ga(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ga);$(function(e,r){var n,a=xt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Kr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Kr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Kr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Kr(r,a)+e[14])/n,t});var c$=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var l$=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},u$=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/v$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function v$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var $$=new Float64Array(16),f$=new Float64Array(16),s$=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},m$=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Ti(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Fe(Ti);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Ti(c,l,i,t,n,a)});function Pi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Fe(Pi);B(function(e,r,n,a){return Pi(e,r,n,a,-1,1)});function Mi(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],C=e[13],L=e[14],_=e[15],x=r[0],F=r[1],J=r[2],G=r[3],j=r[4],q=r[5],I=r[6],V=r[7],K=r[8],X=r[9],pe=r[10],be=r[11],ue=r[12],ve=r[13],Re=r[14],Ee=r[15];return n[0]=a*x+l*F+m*J+b*G,n[1]=t*x+u*F+d*J+C*G,n[2]=i*x+v*F+f*J+L*G,n[3]=c*x+s*F+h*J+_*G,n[4]=a*j+l*q+m*I+b*V,n[5]=t*j+u*q+d*I+C*V,n[6]=i*j+v*q+f*I+L*V,n[7]=c*j+s*q+h*I+_*V,n[8]=a*K+l*X+m*pe+b*be,n[9]=t*K+u*X+d*pe+C*be,n[10]=i*K+v*X+f*pe+L*be,n[11]=c*K+s*X+h*pe+_*be,n[12]=a*ue+l*ve+m*Re+b*Ee,n[13]=t*ue+u*ve+d*Re+C*Ee,n[14]=i*ue+v*ve+f*Re+L*Ee,n[15]=c*ue+s*ve+h*Re+_*Ee,n}$(Mi);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],C=r[1],L=r[2],_=r[4],x=r[5],F=r[6],J=r[8],G=r[9],j=r[10],q=r[12],I=r[13],V=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*x+v*F,n[5]=t*_+l*x+s*F,n[6]=i*_+u*x+m*F,n[7]=0,n[8]=a*J+c*G+v*j,n[9]=t*J+l*G+s*j,n[10]=i*J+u*G+m*j,n[11]=0,n[12]=a*q+c*I+v*V+d,n[13]=t*q+l*I+s*V+f,n[14]=i*q+u*I+m*V+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Gn(r,xt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/xi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=h+f,x=b-d,F=h-f,J=c*c*v+u,G=C+m,j=b+d,q=C-m,I=l*l*v+u,V=n[0],K=n[1],X=n[2],pe=n[3],be=n[4],ue=n[5],ve=n[6],Re=n[7],Ee=n[8],Mr=n[9],zr=n[10],da=n[11],_l=n[12],Cl=n[13],yl=n[14],Ll=n[15];return a[0]=V*L+be*_+Ee*x,a[1]=K*L+ue*_+Mr*x,a[2]=X*L+ve*_+zr*x,a[3]=pe*L+Re*_+da*x,a[4]=V*F+be*J+Ee*G,a[5]=K*F+ue*J+Mr*G,a[6]=X*F+ve*J+zr*G,a[7]=pe*F+Re*J+da*G,a[8]=V*j+be*q+Ee*I,a[9]=K*j+ue*q+Mr*I,a[10]=X*j+ve*q+zr*I,a[11]=pe*j+Re*q+da*I,a[12]=_l,a[13]=Cl,a[14]=yl,a[15]=Ll,a});function d$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(d$);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function p$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(p$);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=Si(e,r,xt),t=Gn(Ga(n,a,ho),ho),i=Gn(Ga(a,t,_o),_o),c=$$,l=f$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Mi(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=Al,yn=zl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(yn,e,l,v)}else{var u=c.a;return p(yn,i,l,u)}});return p(yn,i,p(yn,e,r,t),a)});var Tt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Tt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Co=function(e){return p(Tt,y(function(r,n,a){return o(A,M(r,n),a)}),T,e)},zi=1,b$=2,ki=0,me=function(e){return{$:1,a:e}},Pt=$(function(e,r){return{$:3,a:e,b:r}}),yo=$(function(e,r){return{$:0,a:e,b:r}}),Di=$(function(e,r){return{$:1,a:e,b:r}}),te=function(e){return{$:0,a:e}},g$=function(e){return{$:2,a:e}},Q=function(e){return{$:0,a:e}},W={$:1},h$=ou,_$=wu,Se=oi,Cr=$(function(e,r){return o(nu,e,ta(r))}),Mt=$(function(e,r){return g(o(ru,e,r))}),Ai=function(e){return o(Cr,`
    `,o(Mt,`
`,e))},fn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return p(fn,$(function(r,n){return n+1}),0,e)},C$=Bl,y$=y(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),oa=$(function(e,r){return p(y$,e,r,T)}),Bi=$(function(e,r){return p(C$,e,o(oa,0,Sr(r)-1),r)}),qe=fu,Fi=function(e){var r=qe(e);return 97<=r&&r<=122},Ui=function(e){var r=qe(e);return r<=90&&65<=r},L$=function(e){return Fi(e)||Ui(e)},w$=function(e){var r=qe(e);return r<=57&&48<=r},S$=function(e){return Fi(e)||Ui(e)||w$(e)},xe=function(e){return p(fn,A,T,e)},Gr=Kl,x$=$(function(e,r){return`

(`+(Se(e+1)+(") "+Ai(T$(r))))}),T$=function(e){return o(P$,e,T)},P$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Gr(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return L$(L)&&o(h$,S$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Se(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Cr,"",xe(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Se(Sr(s))+" ways:"));return o(Cr,`

`,o(A,h,o(Bi,x$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Cr,"",xe(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Cr,"",xe(r))+`:

    `):`Problem with the given value:

`}();return h+(Ai(o(_$,4,f))+(`

`+d))}}),Te=32,Ha=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Wa=Sl,Ri=Hl,zt=$(function(e,r){return io(r)/io(e)}),M$=Nl,cn=Ri(o(zt,2,Te)),Ei=S(Ha,0,cn,Wa,Wa),Vi=Tl,Yi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var ji=Wl,Ia=xl,je=$(function(e,r){return Y(e,r)>0?e:r}),z$=function(e){return{$:0,a:e}},kt=Pl,k$=$(function(e,r){e:for(;;){var n=o(kt,Te,e),a=n.a,t=n.b,i=o(A,z$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return xe(i)}}),D$=function(e){var r=e.a;return r},A$=$(function(e,r){e:for(;;){var n=Ri(r/Te);if(n===1)return o(kt,Te,e).a;var a=o(k$,e,T),t=n;e=a,r=t;continue e}}),Ni=$(function(e,r){if(r.l){var n=r.l*Te,a=ji(o(zt,Te,n-1)),t=e?xe(r.z):r.z,i=o(A$,t,r.l);return S(Ha,Ia(r.p)+n,o(je,5,a*cn),i,r.p)}else return S(Ha,Ia(r.p),cn,Wa,r.p)}),B$=Ce(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ni,!1,{z:a,l:n/Te|0,p:t});var i=Yi(p(Vi,Te,r,e)),c=e,l=r-Te,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),F$=$(function(e,r){if(e<=0)return Ei;var n=e%Te,a=p(Vi,n,e-n,r),t=e-n-Te;return w(B$,r,t,e,T,a)}),Ve=function(e){return!e.$},z=_u,Z=du,P=hu,oe=pu,Hn=Cu,U$=yu,we=mu,Dt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},H=Tr("div"),R$=function(e){return{$:2,a:e}},Gi=$(function(e,r){return e}),Hi=$(function(e,r){return{b1:r.b1,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Rr=function(e){return e},E$=Rr,Lo=Fe(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),V$=iu,yr=Xl,Fr=au,sn=$(function(e,r){return e<1?r:p(Fr,e,yr(r),r)}),ia=lu,ca=function(e){return e===""},la=$(function(e,r){return e<1?"":p(Fr,0,e,r)}),Wi=uu,wo=Ce(function(e,r,n,a,t){if(ca(t)||o(V$,"@",t))return W;var i=o(ia,":",t);if(i.b){if(i.b.b)return W;var c=i.a,l=Wi(o(sn,c+1,t));if(l.$===1)return W;var u=l;return Q(se(Lo,e,o(la,c,t),u,r,n,a))}else return Q(se(Lo,e,t,W,r,n,a))}),So=B(function(e,r,n,a){if(ca(a))return W;var t=o(ia,"/",a);if(t.b){var i=t.a;return w(wo,e,o(sn,i,a),r,n,o(la,i,a))}else return w(wo,e,"/",r,n,a)}),xo=y(function(e,r,n){if(ca(n))return W;var a=o(ia,"?",n);if(a.b){var t=a.a;return S(So,e,Q(o(sn,t+1,n)),r,o(la,t,n))}else return S(So,e,W,r,n)});$(function(e,r){if(ca(r))return W;var n=o(ia,"#",r);if(n.b){var a=n.a;return p(xo,e,Q(o(sn,a+1,r)),o(la,a,r))}else return p(xo,e,W,r)});var Y$=cu,At=function(e){},mn=xr,j$=mn(0),Ii=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(fn,e,r,xe(m)):S(Ii,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ur=y(function(e,r,n){return S(Ii,e,r,0,n)}),le=$(function(e,r){return p(ur,$(function(n,a){return o(A,e(n),a)}),T,r)}),Wn=Ya,Bt=$(function(e,r){return o(Wn,function(n){return mn(e(n))},r)}),N$=y(function(e,r,n){return o(Wn,function(a){return o(Wn,function(t){return mn(o(e,a,t))},n)},r)}),G$=function(e){return p(ur,N$(A),mn(T),e)},H$=Au,W$=$(function(e,r){var n=r;return li(o(Wn,H$(e),n))}),I$=y(function(e,r,n){return o(Bt,function(a){return 0},G$(o(le,W$(e),r)))}),J$=y(function(e,r,n){return mn(0)}),O$=$(function(e,r){var n=r;return o(Bt,e,n)});Oe.Task=ku(j$,I$,J$,O$);var q$=vi("Task"),Ft=$(function(e,r){return q$(o(Bt,e,r))}),Z$=sv,K$=ql,In={$:1},Ji=function(e){return{$:2,a:e}},ua={$:0},Ae=$(function(e,r){return{$:0,a:e,b:r}}),re=y(function(e,r,n){return r(e(n))}),Hr=function(e){var r=e.b.B;return r.a},X$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return Q(o(Ae,r,{B:i,ab:c,T:o(A,a,n)}))}else return W},Oi=function(e){var r=e.b;return o(Ae,ua,r)},ir=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Q$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?Oi(n):n;case 2:var i=a.a.cR;return(Y(i+r.eH,Hr(n).b1)>0?o(re,X$,ir(o(Ae,In,t))):Rr)(o(Ae,Ji({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Hi,l.ey,Je(r,{b1:l.b1+r.eH})),s=o(e,v,u);return o(Ae,ua,{B:M(v,s),ab:T,T:o(A,t.B,t.T)})}}),qi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ef=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),rf=$(function(e,r){return xe(p(ef,e,r,T))}),Zi=y(function(e,r,n){if(r<=0)return T;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(rf,r-4,C))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Zi,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return g([_])}}),nf=$(function(e,r){return p(Zi,0,e,r)}),af=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ae(xe(n),ae(g([a]),t)),c=o(nf,e,i),l=o(qi,e,i);if(l.b){var u=l.a,v=l.b;return o(Ae,In,{B:u,ab:v,T:xe(c)})}else{var s=xe(c);if(s.b){var m=s.a,d=s.b;return o(Ae,In,{B:m,ab:T,T:d})}else return r}}),tf=function(e){var r=e.b;return o(Ae,In,r)},of=function(e){var r=e.b;return o(Ae,Ji({cR:Hr(e).b1}),r)},cf=$(function(e,r){switch(e.$){case 1:return tf(r);case 2:return Oi(r);case 3:return of(r);default:var n=e.a;return o(af,n,r)}}),Ki=$(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),lf=$(function(e,r){return Je(r,{av:e(r.av)})}),uf=function(e){return{$:3,a:e}},vf=function(e){return{$:2,a:e}},Xi=$(function(e,r){return{$:0,a:e,b:r}}),$f=$(function(e,r){return{$:1,a:e,b:r}}),_e=$(function(e,r){if(r.$)return W;var n=r.a;return Q(e(n))}),N=function(e){return e<0?-e:e},Ut=vu,ff=y(function(e,r,n){return o(ir,0/0,Ut(o(e,r,n)))}),Qi=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),sf=eu,ec=function(e){return p(sf,A,T,e)},mf=$(function(e,r){var n=o(Qi,function(a){return a!=="0"&&a!=="."},ec(r));return ae(e&&n?"-":"",r)}),ne=oi,Ja=Zl,rc=su,nc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Gr(n);if(a.$===1)return"01";var t=a.a;return o(Ja,"0",nc(t))}else{var i=qe(r);return i>=48&&i<57?o(Ja,rc(i+1),n):"0"}},Oa=Gl,df=Ol,va=function(e){return o(Ja,e,"")},ac=y(function(e,r,n){return e<=0?n:p(ac,e>>1,ae(r,r),e&1?ae(n,r):n)}),ln=$(function(e,r){return p(ac,e,r,"")}),qa=y(function(e,r,n){return ae(n,o(ln,e-yr(n),va(r)))}),Za=Ql,tc=function(e){var r=o(Mt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return M(n,t)}else{var n=r.a;return M(n,"0")}else return M("0","0")},pf=function(e){var r=o(Mt,"e",ne(N(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ir,0,Wi(o(Y$,"+",t)?o(sn,1,t):t)),c=tc(n),l=c.a,u=c.b,v=ae(l,u),s=i<0?o(ir,"0",o(_e,function(m){var d=m.a,f=m.b;return d+("."+f)},o(_e,Ki(va),Gr(ae(o(ln,N(i),"0"),v))))):p(qa,i+1,"0",v);return ae(e<0?"-":"",s)}else{var n=r.a;return ae(e<0?"-":"",n)}else return""},bf=y(function(e,r,n){if(Oa(n)||df(n))return ne(n);var a=n<0,t=tc(pf(N(n))),i=t.a,c=t.b,l=yr(i)+r,u=ae(o(ln,-l+1,"0"),p(qa,l,"0",ae(i,c))),v=yr(u),s=o(je,1,l),m=o(e,a,p(Fr,s,v,u)),d=p(Fr,0,s,u),f=m?Za(o(ir,"1",o(_e,nc,Gr(Za(d))))):d,h=yr(f),b=f==="0"?f:r<=0?ae(f,o(ln,N(r),"0")):Y(r,yr(c))<0?p(Fr,0,h-r,f)+("."+p(Fr,h-r,h,f)):ae(i+".",p(qa,r,"0",c));return o(mf,a,b)}),oc=bf($(function(e,r){var n=Gr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(qe(t))})),gf=ff(oc),hf=y(function(e,r,n){var a=o(zt,10,N(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(gf,t,n)}),ic=Dl,Rt=$(function(e,r){e:for(;;){if(r.$===-2)return W;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ic,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return Q(a);default:var l=e,u=i;e=l,r=u;continue e}}}),U=Ce(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Ke={$:-2},Vr=Ce(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return w(U,0,r,n,w(U,1,v,s,m,d),w(U,1,i,c,l,u))}else return w(U,e,i,c,w(U,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return w(U,0,v,s,w(U,1,h,b,C,L),w(U,1,r,n,d,t))}else return w(U,e,r,n,a,t)}),Ka=y(function(e,r,n){if(n.$===-2)return w(U,0,e,r,Ke,Ke);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ic,e,t);switch(u){case 0:return w(Vr,a,t,i,p(Ka,e,r,c),l);case 1:return w(U,a,t,r,c,l);default:return w(Vr,a,t,i,c,p(Ka,e,r,l))}}),Qr=y(function(e,r,n){var a=p(Ka,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return w(U,1,t,i,c,l)}else{var u=a;return u}}),_f=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,C=d.e,L=v.e;return w(U,0,f,h,w(U,1,n,a,w(U,0,i,c,l,u),b),w(U,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var s=x.b,m=x.c,d=x.d,L=x.e;return w(U,1,n,a,w(U,0,i,c,l,u),w(U,0,s,m,d,L))}else return e},To=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,L=f.e;return w(U,0,i,c,w(U,1,u,v,s,m),w(U,1,n,a,d,w(U,0,h,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,d=_.e,F=e.e;F.a;var h=F.b,b=F.c,C=F.d,L=F.e;return w(U,1,n,a,w(U,0,i,c,x,d),w(U,0,h,b,C,L))}else return e},Cf=mt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return w(U,n,l,u,v,w(U,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,To(r)}else break e;else return c.a,c.d,To(r);else break e;return r}}),kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,w(U,r,n,a,kn(t),l);var u=cc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Vr,v,s,m,kn(d),f)}else return Ke}else return w(U,r,n,a,kn(t),l)}else return Ke},en=$(function(e,r){if(r.$===-2)return Ke;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Y(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,w(U,n,a,t,o(en,e,i),c);var u=cc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Vr,v,s,m,o(en,e,d),f)}else return Ke}else return w(U,n,a,t,o(en,e,i),c);else return o(yf,e,ti(Cf,e,r,n,a,t,i,c))}),yf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=_f(c);if(l.$===-1){var u=l.b,v=l.c;return w(Vr,n,u,v,i,kn(c))}else return Ke}else return w(Vr,n,a,t,i,o(en,e,c))}else return Ke}),Lf=$(function(e,r){var n=o(en,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return w(U,1,a,t,i,c)}else{var l=n;return l}}),Ln=y(function(e,r,n){var a=r(o(Rt,e,n));if(a.$)return o(Lf,e,n);var t=a.a;return p(Qr,e,t,n)}),wf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Ln,r,_e(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o($f,M(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Ln,r,_e(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Xi,M(i,c),p(hf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Ln,r,_e(function(a){return a.$===3?uf(n):a}));default:var r=e.a,n=e.b;return o(Ln,r,_e(function(a){return a.$===2?vf(n):a}))}},Sf=function(e){return lf(wf(e))},xf=$(function(e,r){return o(le,Sf(e),r)}),Tf=$(function(e,r){return Je(r,{ey:o(xf,e,r.ey)})}),Pf=$(function(e,r){var n=r.a,a=r.b;return o(Ae,n,Je(a,{B:o(Ki,Tf(e),a.B)}))}),Mf=$(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),zf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ae,a,Je(t,{B:o(Mf,o(e,i.a,r),i)}))}),kf=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Je(a,{aL:!a.aL});case 2:var t=n.a;return Je(a,{G:p(Q$,e,t,a.G)});case 3:var i=n.a;return Je(a,{G:o(Pf,i,a.G)});case 4:var c=n.a;return Je(a,{G:p(zf,r,c,a.G)});default:var l=n.a;return Je(a,{G:o(cf,l,a.G)})}}),Df=$(function(e,r){return o(Ae,ua,{B:M(e,r(e)),ab:T,T})}),Af=Bu,Po=Af(T),Jn=gu,un=bu,Bf=Vu("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return we({b1:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(P,"clock",oe))},o(P,"devicePixelRatio",oe))},o(P,"dt",oe))},o(P,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return we({ek:m,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(P,"alt",Z))},o(P,"control",Z))},o(P,"down",Z))},o(P,"downs",Jn(un)))},o(P,"left",Z))},o(P,"pressedKeys",Jn(un)))},o(P,"right",Z))},o(P,"shift",Z))},o(P,"up",Z))))},o(P,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return we({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(P,"down",Z))},o(P,"isDown",Z))},o(P,"move",Z))},o(P,"rightDown",Z))},o(P,"rightUp",Z))},o(P,"up",Z))},o(P,"x",oe))},o(P,"y",oe))))},o(P,"screen",o(z,function(r){return o(z,function(n){return we({eV:n,fS:r})},o(P,"height",oe))},o(P,"width",oe))))},o(P,"wheel",o(z,function(e){return o(z,function(r){return we({eC:r,eD:e})},o(P,"deltaX",oe))},o(P,"deltaY",oe))))),Ff=function(e){return{$:4,a:e}},Uf={$:0},Rf=ci,Ue=$(function(e,r){return o(si,e,Rf(r))}),E=Ue("className"),Ef=function(e){var r=e.b.B;return r.b},On=Ue("id"),Vf=Wu,qn=Vf,Yf=Iu,ee=Yf,jf={$:1},Nf=function(e){return{$:3,a:e}},Gf=function(e){return{$:5,a:e}},Mo=Tr("a"),Et=Tr("button"),zo=function(e){return o(Ue,"href",qu(e))},Hf=hr("clip-rule"),ge=hr("d"),Wf=hr("fill"),lc=$i("http://www.w3.org/2000/svg"),If=lc("svg"),Jf=hr("viewBox"),Of=o(Ju,"http://www.w3.org/XML/1998/namespace","xml:space"),Me=If(g([Jf("0 0 24 24"),Wf("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),Of("http://www.w3.org/2000/svg")])),qf=hr("fill-rule"),he=lc("path"),Lr={eB:Me(g([o(he,g([ge("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eP:Me(g([o(he,g([ge("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),eU:Me(g([o(he,g([ge("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fc:Me(g([o(he,g([ge("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(he,g([ge("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),fd:Me(g([o(he,g([ge("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(he,g([ge("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fn:Me(g([o(he,g([ge("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fo:Me(g([o(he,g([ge("M7 5V19L18 12L7 5Z")]),T)])),fp:Me(g([o(he,g([ge("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),fq:Me(g([o(he,g([ge("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fL:Me(g([o(he,g([qf("evenodd"),Hf("evenodd"),ge("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fM:Me(g([o(he,g([ge("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f0:Me(g([o(he,g([ge("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},Zf=function(e){return{$:0,a:e}},uc=fi,vc=$(function(e,r){return o(uc,e,Zf(r))}),Vt=function(e){return o(vc,"click",we(e))},ko=Ue("target"),Kf=Ue("title"),Xa=$(function(e,r){if(r.$===-2)return Ke;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return w(U,n,a,o(e,a,t),o(Xa,e,i),o(Xa,e,c))}),Xf=ja,cr=Xf,Qf=function(e){return p(Tt,y(function(r,n,a){return o(A,n,a)}),T,e)},es=$(function(e,r){return{$:3,a:e,b:r}}),rs=$(function(e,r){return{$:2,a:e,b:r}}),ns=$(function(e,r){return{$:0,a:e,b:r}}),as=$(function(e,r){return{$:1,a:e,b:r}}),$a=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ts=S($a,0/255,0/255,0/255,1),os=ci,$c=$(function(e,r){return o(si,e,os(r))}),is=$c("checked"),Ne=Il,cs=y(function(e,r,n){return ae(o(ln,e-yr(n),va(r)),n)}),ls=Ul,fc=function(e){var r=function(n){return n<10?Se(n):va(rc(87+n))};return e<16?r(e):ae(fc(e/16|0),r(o(ls,16,e)))},us=o(re,fc,o(cs,2,"0")),sc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b0:a,b7:n,cG:r}},vs=function(e){var r=sc(e),n=r.cG,a=r.b7,t=r.b0;return o(Cr,"",o(A,"#",o(le,o(re,Ne,us),g([n*255,a*255,t*255]))))},Qa=Ue("htmlFor"),et=$(function(e,r){if(r.$)return W;var n=r.a;return e(n)}),Zn=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),$s=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Yt=$(function(e,r){return p(ur,$s(e),T,r)}),mc=B(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),fs=gv,ss=$u,ms=$(function(e,r){if(r.$)return me(e);var n=r.a;return te(n)}),ds=bv,ps=function(e){return o(ds,{et:!1,fe:!1},e)},jt=function(e){if(e.b){var r=e.a;return e.b,Q(r)}else return W},bs=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return te(e(n))}}),gs=function(e){return{$:2,a:e}},hs=function(e){return{$:0,a:e}},_s=function(e){return{$:1,a:e}},ga=$(function(e,r){return qe(r)-qe(e)}),ha=y(function(e,r,n){var a=qe(n);return Y(qe(e),a)<1&&Y(a,qe(r))<1}),Cs=$(function(e,r){var n=function(t){return Y(t,e)<0?te(t):me(_s(r))},a=p(ha,"0","9",r)?te(o(ga,"0",r)):p(ha,"a","z",r)?te(10+o(ga,"a",r)):p(ha,"A","Z",r)?te(10+o(ga,"A",r)):me(hs(r));return o(Zn,n,a)}),dc=$(function(e,r){var n=Gr(r);if(n.$===1)return te(0);var a=n.a,t=a.a,i=a.b;return o(Zn,function(c){return o(Zn,function(l){return te(c+l*e)},o(dc,e,i))},o(Cs,e,t))}),ys=$(function(e,r){return 2<=e&&e<=36?o(dc,e,Za(r)):me(gs(e))}),Ls=ys(16),ws=y(function(e,r,n){return S($a,e,r,n,1)}),pc=B(function(e,r,n,a){return S($a,e,r,n,a)}),Wr=Fl,Ss=$(function(e,r){var n=o(Wr,10,e);return Ne(r*n)/n}),xs=tu,Ts=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ec(n);if(a.b&&!a.b.b){var t=a.a;return ss(g([t,t]))}else return n};return o(re,xs,o(re,function(n){return o(_e,function(a){return p(fs,1,a,n)},ps(e))},o(re,et(jt),o(re,_e(function(n){return n.fE}),o(re,_e(Yt(Rr)),o(re,ms("Parsing hex regex failed"),Zn(function(n){var a=o(le,o(re,r,o(re,Ls,bs(M$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return te(S(pc,t/255,c/255,u/255,o(Ss,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return te(p(ws,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),Kn=Tr("input"),rt=Tr("label"),nt=Ue("name"),bc=$(function(e,r){return p(ur,P,r,e)}),Ps=o(bc,g(["target","checked"]),Z),Ms=function(e){return o(vc,"change",o(Hn,e,Ps))},zs=function(e){return M(e,!0)},ks=function(e){return{$:1,a:e}},Ds=$(function(e,r){return o(uc,e,ks(r))}),As=o(bc,g(["target","value"]),un),Nt=function(e){return o(Ds,"input",o(Hn,zs,o(Hn,e,As)))},gc=Ue("max"),hc=Ue("min"),_c=function(e){return o(Ue,"step",e)},Xn=Ue("type"),Gt=Ue("value"),Do=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(H,T,g([o(rt,g([Qa(r)]),g([o(H,g([E("relative w-full")]),g([o(H,g([E("inline-block")]),g([cr(r)])),o(H,g([E("inline-block float-right")]),g([cr(ne(n))]))]))])),o(Kn,g([Xn("range"),o(ee,"width","100%"),On(r),nt(r),hc(ne(a)),gc(ne(t)),Gt(ne(n)),_c(ne(i)),Nt(o(re,Ut,o(re,ir(42),c)))]),T)]))},Bs=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Fs=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(H,g([E("h-12 py-4")]),g([o(rt,g([E("block"),Qa(e)]),g([o(Kn,g([E("relative bottom-[1px] align-middle mr-2"),Xn("checkbox"),On(e),nt(e),Ms(es(e)),is(c)]),T),cr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Do({b9:e,cl:i,cp:t,ct:ns(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Do({b9:e,cl:i,cp:t,ct:o(re,Ne,as(e)),cP:1,cW:c});default:var c=r.a;return o(H,T,g([o(H,g([o(ee,"margin-bottom","6px")]),g([o(rt,g([Qa(e)]),g([cr(e)]))])),o(Kn,g([Xn("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),On(e),nt(e),Nt(function(l){return o(rs,e,o(Bs,ts,Ts(l)))}),Gt(vs(c))]),T)]))}}),Us=function(e){return o(H,g([E("p-4 border-y-[0.5px] border-white20")]),g([o(H,g([E("text-lg pb-2")]),g([cr(e.ff)])),o(H,g([E("pl-2 pr-2")]),Qf(o(Xa,Fs,e.av)))]))},Rs=function(e){return o(H,g([E("text-xs text-white60")]),o(le,Us,e))},Es=function(e){return o(H,g([E("absolute left-[104px] bottom-2 text-sm text-white40")]),g([cr("clock: "+o(oc,3,Hr(e).b1))]))},Vs=function(e){e.a;var r=e.b.T;return o(_e,function(n){return Ne(60/(Hr(e).b1-n))},o(_e,o(re,D$,function(n){return n.b1}),jt(o(qi,59,r))))},Ys=function(e){return o(H,g([E("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Vs(e);if(r.$===1)return g([cr("... Fps")]);var n=r.a;return g([cr(Se(n)+" Fps")])}())},js=function(e){return{$:0,a:e}},Ns=function(e){var r=e.b.T;return Sr(r)},Gs=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Sr(r)+1+Sr(n)},Hs=function(e){return o(Kn,g([E("absolute w-full"),Xn("range"),hc(Se(0)),gc(Se(Gs(e)-1)),Gt(Se(Ns(e))),_c(Se(1)),Nt(o(re,Ut,o(re,ir(42),o(re,Ne,js))))]),T)},Ao={$:1},Bo={$:3},Fo={$:2},at=function(e){return!e.b},Cc=$c("disabled"),_a=y(function(e,r,n){return o(Et,g([E("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),E(n),Cc(e),Vt(r)]),g([cr("REC")]))}),Ca=y(function(e,r,n){return o(Et,g([E("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Cc(e),Vt(n)]),g([o(H,g([E("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Ws=function(e){var r=e.a,n=e.b.ab;return o(H,g([E("py-1")]),g([function(){switch(r.$){case 0:return p(_a,!1,Ao,"text-red-500 font-bold");case 1:return p(_a,!1,Fo,"text-white60 hover:text-white80 font-bold");default:return p(_a,!0,Fo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ca,at(n),Lr.fo,Bo);case 1:return p(Ca,at(n),Lr.fo,Bo);default:return p(Ca,!1,Lr.fn,Ao)}}()]))},Is=function(e){return o(H,g([E("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Hs(e),Ws(e),Ys(e),Es(e)]))},Js=function(e){var r=e.a;return wr(r,ua)},Os=$(function(e,r){var n=Js(r.G)?o(H,T,T):o(H,g([E("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.fq.fU+.5*e.cM.fS)+"px"),o(ee,"top",ne(-e.fq.fY+.5*e.cM.eV)+"px")]),g([o(H,g([E(e.fq.e1?"text-black80":"text-black40")]),g([Lr.fq]))]));return o(H,T,g([n]))}),qs=$(function(e,r){var n=o(Et,g([E(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Vt(jf),Kf("Distraction Free Mode")]),g([Lr.f0])),a=40,t=260,i=o(H,g([E("absolute w-8 bottom-12")]),g([o(Mo,g([E("text-twitterBlue40 hover:text-twitterBlue"),zo("https://twitter.com/AzizErkalSelman"),ko("_blank")]),g([Lr.fM]))])),c=80,l=o(H,g([E("absolute w-8 bottom-2")]),g([o(Mo,g([E("text-githubCat40 hover:text-githubCat"),zo("https://github.com/erkal/elm-3d-playground-exploration"),ko("_blank")]),g([Lr.eP]))])),u=e.cM.fS>640?O(e.cM.eV,a+t,e.cM.fS-(a+t)):O(e.cM.eV-c,a,e.cM.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(H,g([E("fixed w-10 h-10 p-1")]),g([n])):o(H,T,g([o(H,g([E("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),g([n,i,l])),o(H,g([E("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),g([o(qn,Nf,Rs(Hr(r.G).ey))])),o(H,g([E("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),g([o(qn,Gf,Is(r.G))])),o(Os,e,r)]))}),Zs=y(function(e,r,n){var a=Ef(n.G),t=Hr(n.G);return o(H,g([E("bg-black40"),E("select-none"),E("antialiased"),E("font-mono"),o(ee,"width",ne(t.cM.fS)+"px"),o(ee,"height",ne(t.cM.eV)+"px")]),g([o(H,g([E("fixed")]),g([o(qn,Gi(Uf),o(e,t,a))])),o(H,g([On("gui")]),g([o(qs,t,n),o(qn,Ff,o(r,t,a))]))]))}),Ks=Fe(function(e,r,n,a,t,i){var c=$(function(u,v){return M(S(kf,r,i,u,v),Po)}),l=function(u){var v=o(Hi,n,u.e0);return M({aL:u.e0.cM.fS<500,G:o(Df,v,a)},Po)};return Z$({e$:l,fF:Gi(Bf(R$)),fN:c,fP:o(Zs,e,t)})}),Xs=B(function(e,r,n,a){return se(Ks,e,r,n,a,$(function(t,i){return o(H,T,T)}),y(function(t,i,c){return c}))}),Qs=function(e){return{}},em=y(function(e,r,n){return{av:n,e2:r,ff:e}}),yc=Ke,rm=function(e){return p(fn,$(function(r,n){var a=r.a,t=r.b;return p(Qr,a,t,n)}),yc,e)},nm=y(function(e,r,n){return p(em,e,r,rm(n))}),Uo=nm,wn=y(function(e,r,n){var a=r.a,t=r.b;return M(e,o(Xi,M(a,t),n))}),am=g([p(Uo,"Parameters",!0,g([p(wn,"a",M(0,3),1)])),p(Uo,"Colors and light",!0,g([p(wn,"lux",M(2,5),5),p(wn,"intensity above",M(0,300),60),p(wn,"intensity below",M(0,300),290)]))]),tm=$(function(e,r){return r}),om=jl,$r=Jl,im=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(je,N(c),o(je,N(i),N(t)));if(l){var u=t/l,v=i/l,s=c/l,m=$r(s*s+v*v+u*u);return Q({fU:s/m,fY:v/m,c$:u/m})}else return W}),Dn=function(e){return e},Ht=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),An=function(e){var r=e,n=o(je,N(r.fU),o(je,N(r.fY),N(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=$r(i*i+t*t+a*a);return Q({fU:i/c,fY:t/c,c$:a/c})}else return W},tt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),cm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),Lc=$(function(e,r){var n=e,a=r;return Y(a,n)>0}),lm=$(function(e,r){var n=e,a=r;return Y(a,n)<0}),um=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),vm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),$m=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},vn=0,wc={fU:0,fY:0,c$:0},fm=y(function(e,r,n){return o(et,function(a){var t=o(um,o(vm,a,r),r);return o(et,function(i){var c=o(Ht,r,e),l=o(cm,n,c),u=o(Lc,vn,l)?c:o(lm,vn,l)?$m(c):wc;return o(_e,function(v){return O(a,i,v)},An(u))},An(t))},An(e))}),sm=function(e){var r=e,n=N(r.c$),a=N(r.fY),t=N(r.fU);if(Y(t,a)<1)if(Y(t,n)<1){var i=$r(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=$r(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(Y(a,n)<1){var i=$r(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=$r(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},Sc=function(e){var r=sm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return M(r,c)},mm=function(e){var r=e;return r},Yr=function(e){return e},dm=$(function(e,r){var n=Sc(e),a=n.a,t=n.b;return Yr({cu:r,cZ:a,c_:t,c0:e})}),pm=function(e){var r=o(tt,e.aR,e.dc),n=mm(e.ee),a=o(Ht,r,n),t=p(fm,r,n,a);if(t.$){var v=An(r);if(v.$){var m=Sc(e.ee),d=m.a,f=m.b;return Yr({cu:e.dc,cZ:f,c_:e.ee,c0:d})}else{var s=v.a;return o(dm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Yr({cu:e.dc,cZ:u,c_:l,c0:c})}},Ir={fU:0,fY:0,c$:0},bm=function(e){return{$:0,a:e}},Be=function(e){var r=e;return N(r)},Bn=function(e){var r=e;return .5*r},gm=Yl,hm=function(e){var r=e;return gm(r)},_m=function(e){var r=Bn(Be(e.ef)),n=hm(r);return{cF:bm(n),cX:e.cX}},tr=function(e){return e},Wt=tr({fU:0,fY:1,c$:0}),dr=function(e){return e},Cm=function(e){var r=e.aR,n=e.dc,a=e.ee;return _m({ef:dr(2*om(.5)),cX:pm({dc:Dn(n),aR:Dn(r),ee:o(ir,Wt,o(im,Ir,Dn(a)))})})},Qn=El,ym=$(function(e,r){return(r-ji(r/e)*e)/e}),ot=Rl,Lm=function(e){return 2*ot*e},xc=B(function(e,r,n,a){return e+(r-e)*(1+Qn(Lm(o(ym,n,a))))/2}),wm=function(e){return Cm({dc:{fU:10,fY:S(xc,-20,20,20,e.b1),c$:60},aR:{fU:0,fY:0,c$:0},ee:{fU:0,fY:1,c$:0}})},It=function(e){return e},Tc=y(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),Sm=function(e){var r=e;return r},xm=function(e){var r=p(Tc,1667,25e3,Sm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return It({fU:n,fY:a})},Tm=function(e){return e},Pm=function(e){return{$:0,a:e}},Mm=Pm,zm={$:3},km=zm,Dm=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Am=Dm,Bm=$(function(e,r){return r.b?p(ur,A,r,e):e}),sr=function(e){return p(ur,Bm,T,e)},Fm=$(function(e,r){return sr(o(le,e,r))}),Um=function(e){return{$:1,a:e}},Rm=Um,Em=function(e){return o(hr,"height",Se(e))},Vm=function(e){return Gu(Ou(e))},Ym=Vm,jm=function(e){return{$:2,a:e}},Nm=jm,Gm=function(e){return o(Cr,"",e)},Hm=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ne(l*1e3)/1e3},c=function(l){return Ne(l*1e4)/100};return Gm(g(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},Wm=$(function(e,r){switch(r.$){case 0:return o(Wv,e,r);case 1:return o(Iv,e,r);case 2:return o(Jv,e,r);case 3:return o(Ov,e,r);case 4:return o(qv,e,r);default:return o(Zv,e,r)}}),Im=$(function(e,r){switch(r.$){case 0:return o(Cv,e,r);case 1:return o(yv,e,r);case 2:return o(Lv,e,r);case 3:return o(wv,e,r);case 4:return o(Sv,e,r);case 5:return o(xv,e,r);case 6:return o(Tv,e,r);case 7:return o(Pv,e,r);default:return Mv(e)}}),Jm=y(function(e,r,n){return p(Hv,e,r,n)}),Ro=function(e){var r=e;return r},Jr=c$,ya=S(Jr,1,1,1,1),He=y(function(e,r,n){return o(le,function(a){return o(a,r,n)},e)}),Om=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qm=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Om,n*a/t,n,n*(1-a-t)/t)}),Jt=r$,Zm=function(e){var r=e.a,n=e.b,a=e.c;return p(Jt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},fa=$(function(e,r){return Zm(o(qm,e,r))}),Pc=$(function(e,r){return{dk:wr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bV,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bV,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bV,bV:e.bV*r.bV}}),nr=s$,Km=function(e){return nr({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},La=Ce(function(e,r,n,a,t){var i=a.dk?1:-1,c=S(Jr,a.bV,a.bV,a.bV,i);return se(t,e,c,Km(a),a.dk,r,n)}),Mc=Fe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Pc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(A,w(La,e,r,n,a,h),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var C=t.b,L=o(A,w(La,e,r,n,a,C),i.U);return{M:i.M,U:L,fz:i.fz};case 2:var _=t.a,x=o(A,w(La,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:x};default:var F=t.a;return p(fn,S(Mc,e,r,n,a),i,F)}}),Xm=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),zc=Xm,Ot=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Qm=function(e){var r=e.Z,n=e.W,a=e.V;return S(Ot,518,r,n,a)},ed=$(function(e,r){return{$:6,a:e,b:r}}),rd=ed,kc=g([Qm({V:1,W:0,Z:!1}),S(zc,!1,!1,!1,!1),o(rd,0,1)]),jr=519,qt=8,Dc=15,Er=7681,nd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ye=_v,ad=$(function(e,r){return{$:0,a:e,b:r}}),td=ad({c8:1,dh:0,dQ:5}),Ur=Qv,od=td(g([{dY:o(Ur,-1,-1)},{dY:o(Ur,1,-1)},{dY:o(Ur,-1,1)},{dY:o(Ur,1,1)}])),id={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},cd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Zt=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bl),o(re,l(v.a8),o(re,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(cd,a,t,i)))}),Kt=function(e){return p(Zt,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Xt=function(e){return w(ye,g([Kt(e),S(zc,!1,!1,!1,!1)]),id,nd,od,{})},ld=Xt({a8:Er,ci:0,cH:qt,bl:jr,cY:Dc,bt:Er,bu:Er}),ud=516,Eo=5386,de=7680,vd=function(e){return o(Wr,2,e+4)},Ac=function(e){return Xt({a8:de,ci:Dc,cH:qt,bl:ud,cY:vd(e),bt:Eo,bu:Eo})},$d=y(function(e,r,n){return sr(g([p(He,e,n,kc),g([Ac(r),ld])]))}),fd=$(function(e,r){return sr(o(Bi,$d(e),r))}),sd=function(e){var r=e.Z,n=e.W,a=e.V;return S(Ot,513,r,n,a)},md=sd({V:1,W:0,Z:!0}),dd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},pd=function(e){var r=e.bT,n=e.bE,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return dd(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},bd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vo=$(function(e,r){var n=e,a=r;return p(bd,32774,n,a)}),gd=1,Yo=771,hd=770,Qt=pd({bv:0,aH:o(Vo,gd,Yo),by:0,bA:o(Vo,hd,Yo),bE:0,bT:0}),kr=g([md,Qt]),_d=function(e){var r=e;return r.dJ},Cd=function(e){var r=e;return r.dK},Bc=function(e){var r=e;return r.dL},yd=function(e){var r=e;return r.dM},Ld=function(e){var r=e;return r.dN},Fc=function(e){var r=e;return r.dO},or=$(function(e,r){var n=e,a=r;return a-n}),Uc=function(e){return O(o(or,yd(e),_d(e)),o(or,Ld(e),Cd(e)),o(or,Fc(e),Bc(e)))},sa=function(e){var r=e;return r.cu},jo=function(e){var r=e;return sa(r)},wd=function(e){return e},Sd=function(e){return Yr({cu:wd({fU:e.H,fY:e.I,c$:e.J}),cZ:tr({fU:e.q,fY:e.r,c$:e.s}),c_:tr({fU:e.t,fY:e.u,c$:e.v}),c0:tr({fU:e.w,fY:e.x,c$:e.y})})},wa=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),Rc=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,m=n.c_,d=m,f=n.cZ,h=f;return{fU:c*h.fU+l*h.fY+u*h.c$,fY:c*d.fU+l*d.fY+u*d.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),dn=function(e){var r=e;return r.cZ},pn=function(e){var r=e;return r.c_},bn=function(e){var r=e;return r.c0},Ec=$(function(e,r){return{cu:o(Rc,e,sa(r)),cZ:o(wa,e,dn(r)),c_:o(wa,e,pn(r)),c0:o(wa,e,bn(r))}}),it=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),ea=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(je,n,a)}),xd=$(function(e,r){return Y(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(xd,n,a)}),Td=$(function(e,r){var n=ea(r),a=ea(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),Pe=function(e){var r=e;return r},Pd=function(e){var r=e;return O(r.fU,r.fY,r.c$)},Fn=$(function(e,r){var n=e,a=r;return a+n}),Md=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Bn(Be(a)),c=Bn(Be(n)),l=Bn(Be(t)),u=Pd(r),v=u.a,s=u.b,m=u.c;return{dJ:o(Fn,c,v),dK:o(Fn,i,s),dL:o(Fn,l,m),dM:o(or,c,v),dN:o(or,i,s),dO:o(or,l,m)}}),No=B(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,m=Pe(bn(e)),d=N(l*m.fU)+N(c*m.fY)+N(i*m.c$),f=Pe(pn(e)),h=N(l*f.fU)+N(c*f.fY)+N(i*f.c$),b=Pe(dn(e)),C=N(l*b.fU)+N(c*b.fY)+N(i*b.c$),L=o(Md,O(C,h,d),o(Rc,e,p(it,s,v,u)));if(a.$)return Q(L);var _=a.a;return Q(o(Td,_,L))}),ct=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=S(No,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=S(No,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=S(ct,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(Ec,Sd(v),e),d=r*v.bV,f=e,h=r,b=S(ct,m,d,n,g([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),gn=n$,hn=a$,_n=t$,Vc=function(e){return{$:4,a:e}},zd=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),eo=function(e){return Vc(o(zd,e,T))},kd={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bV:1},Dd=function(e){var r=e;return r},Go=Xt({a8:Er,ci:0,cH:qt,bl:jr,cY:255,bt:Er,bu:Er}),Ad=function(e){var r=e,n=o(je,N(r.fU),o(je,N(r.fY),N(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=$r(i*i+t*t+a*a);return c*n}else return vn},Le={by:0,eu:!1,bE:0,cD:0,bT:0,cT:0,fU:0,fY:0,c$:0},ke=$(function(e,r){var n=e,a=r;return nr({ds:n.fU,dt:n.bT,du:a.fU,dv:a.bT,dw:n.fY,dx:n.bE,dy:a.fY,dz:a.bE,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),Xr=M({bd:o(ke,Le,Le),bJ:o(ke,Le,Le),bK:o(ke,Le,Le),bL:o(ke,Le,Le)},S(Jr,0,0,0,0)),vr=$(function(e,r){var n=r;return e*n}),Ho=function(e){var r=e;return-r},Yc=514,jc=function(e){var r=e.Z,n=e.W,a=e.V;return S(Ot,515,r,n,a)},Nc=240,Bd=g([jc({V:1,W:0,Z:!0}),Kt({a8:de,ci:Nc,cH:0,bl:Yc,cY:0,bt:de,bu:de}),Qt]),Fd=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=Be(a),l=c,u=Be(t),v=u,s=n.cF;if(s.$){var d=s.a;return Oa(v)?nr({ds:2/(i*d),dt:0,du:0,dv:0,dw:0,dx:2/d,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):nr({ds:2/(i*d),dt:0,du:0,dv:0,dw:0,dx:2/d,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var m=s.a;return Oa(v)?nr({ds:1/(i*m),dt:0,du:0,dv:0,dw:0,dx:1/m,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):nr({ds:1/(i*m),dt:0,du:0,dv:0,dw:0,dx:1/m,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Sn=$(function(e,r){return(1&e>>r)===1?0:1}),Ud=function(e){return g([jc({V:1,W:0,Z:!0}),Kt({a8:de,ci:Nc,cH:e,bl:Yc,cY:0,bt:de,bu:de}),Qt])},Rd=y(function(e,r,n){return sr(o(le,function(a){var t=a<<4,i=S(Jr,o(Sn,a,0),o(Sn,a,1),o(Sn,a,2),o(Sn,a,3));return p(He,e,M(r,i),Ud(t))},o(oa,1,o(Wr,2,n)-1)))}),ra=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},lt=function(e){var r=e;return r},Ed=m$,Wo=function(e){var r=e;return ra(bn(r))},Gc=tr({fU:1,fY:0,c$:0}),Hc=Gc,Wc=Wt,Ic=tr({fU:0,fY:0,c$:1}),Jc=Ic,Vd={cu:Ir,cZ:Hc,c_:Wc,c0:Jc},Pr=function(e){var r=e;return r},Yd=function(e){var r=Pr(sa(e)),n=Pe(bn(e)),a=Pe(pn(e)),t=Pe(dn(e));return nr({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},jd=$(function(e,r){var n=r;return Yd(o(Ec,n,e))}),Nd=function(e){return o(jd,Vd,e)},Gd=function(e){var r=e;return r.cX},Hd=function(e){var r=e;return dn(r)},Wd=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Id=function(e){var r=e;return pn(r)},Jd=function(e){var r=Gd(e.es),n=Yr({cu:jo(r),cZ:Hd(r),c_:Id(r),c0:ra(Wo(r))}),a=eo(e.aP),t=a,i=S(ct,n,1,W,g([t]));if(i.$===1)return T;var c=i.a,l=Nd(r),u=o(vr,.99,o(ce,Be(e.ex),Ho(Bc(c)))),v=Uc(c),s=v.a,m=v.b,d=v.c,f=Ad(p(Wd,s,m,d)),h=o(vr,1.01,o(Fn,f,Ho(Fc(c)))),b=o(Fd,e.es,{en:e.en,eO:h,fg:u}),C=Ed(b).dH,L=C?Pe(ra(Wo(r))):lt(jo(r)),_=function(){var ue=e.fK;switch(ue.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var ve=ue.a;return M(3,ve);case 4:var ve=ue.a;return M(4,ve);default:return M(5,0)}}(),x=_.a,F=_.b,J=e.eM,G=J,j=o(fa,G,e.fR),q=j,I=nr({ds:0,dt:L.fU,du:gn(q),dv:e.d8,dw:0,dx:L.fY,dy:hn(q),dz:Dd(f),dA:0,dB:L.c$,dC:_n(q),dD:x,dE:0,dF:C,dG:0,dH:F}),V=se(Mc,I,l,b,kd,t,{M:T,U:T,fz:T}),K=e.e8;switch(K.$){case 0:var X=K.a;return sr(g([p(He,V.M,M(X,ya),kr),p(He,V.U,Xr,kr)]));case 1:var X=K.a;return sr(g([p(He,V.M,Xr,kr),g([Go]),p(He,V.fz,X.bd,kc),g([Ac(0)]),p(He,V.M,M(X,ya),Bd),p(He,V.U,Xr,kr)]));default:var pe=K.a,be=K.b;return sr(g([p(He,V.M,M(be,ya),kr),g([Go]),o(fd,V.fz,pe),p(Rd,V.M,be,Sr(pe)),p(He,V.U,Xr,kr)]))}},Od=function(e){return o(hr,"width",Se(e))},qd=$(function(e,r){var n=g([Rm(1),Nm(0),Mm(!0),S(Am,0,0,0,0)]),a=function(){var x=e.el;switch(x.$){case 0:return O(n,"0",1);case 1:return O(o(A,km,n),"1",1);default:var F=x.a;return O(n,"0",F)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ro(v),m=o(ee,"height",Se(s)+"px"),d=Ro(u),f=d/s,h=o(Fm,function(x){return Jd({en:f,es:e.es,ex:e.ex,aP:x.aP,eM:x.eM,e8:x.e8,d8:c,fK:x.fK,fR:x.fR})},r),b=o(ee,"width",Se(d)+"px"),C=e.aI,L=C,_=Hm(L);return p(Ym,"div",g([o(ee,"padding","0px"),b,m]),g([M(i,p(Jm,t,g([Od(Ne(d*c)),Em(Ne(s*c)),b,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),Zd=function(e){return{$:2,a:e}},Kd=function(e){return Zd(e)},Xd=function(e){return o(qd,{el:Kd(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},g([{aP:e.aP,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},Io=function(e){return e},Un=function(e){return e},Qd=$(function(e,r){return Xd({el:e.el,aI:Tm(e.ep),es:e.es,ex:Un(e.ex),b5:e.b5,aK:M(Io(Ne(e.cM.fS)),Io(Ne(e.cM.eV))),aP:r,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),Oc=function(e){return e},e0=$(function(e,r){var n=e,a=Pe(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(fa,r.bG,r.aJ),u=l;return{by:_n(u),eu:n,bE:hn(u),cD:0,bT:gn(u),cT:1,fU:-t,fY:-i,c$:-c}}),ut=Vl,qc=$(function(e,r){var n=e,a=r,t=Qn(a);return{fU:t*Qn(n),fY:t*ut(n),c$:ut(a)}}),r0=function(e){return o(e0,Oc(!0),{aJ:e.aJ,eF:o(qc,dr(e.bx),dr(e.bC)),bG:e.bG})},n0=function(e){return e},a0=function(e){return n0(1.2*o(Wr,2,e))},Sa=It({fU:.37208,fY:.37529}),t0=$(function(e,r){return{$:2,a:e,b:r}}),Zc=function(e){return{$:0,a:e}},xn=function(e){var r=e;return r},o0=function(e){var r=e;return r.eu},i0=Zc(Xr.a),c0=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?M(o(A,a,i),c):M(i,o(A,a,c))});return p(ur,n,M(T,T),r)}),l0=function(e){var r=e;return nr({ds:r.fU,dt:r.bT,du:0,dv:0,dw:r.fY,dx:r.bE,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},u0=ie(function(e,r,n,a,t,i,c,l){var u=o(c0,o0,g([xn(e),xn(r),xn(n),xn(a)])),v=u.a,s=u.b;if(v.b){var m=ae(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(t0,o(le,l0,v),{bd:o(ke,d,h),bJ:o(ke,C,_),bK:o(ke,t,i),bL:o(ke,c,l)})}else return i0}else return Zc({bd:o(ke,e,r),bJ:o(ke,n,a),bK:o(ke,t,i),bL:o(ke,c,l)})}),v0=B(function(e,r,n,a){return aa(u0,e,r,n,a,Le,Le,Le,Le)}),$0=$(function(e,r){return o(_e,function(n){if(n.$)return 0;var a=n.b;return a},o(Rt,e,r.av))}),f0=$(function(e,r){return o(ir,0,jt(o(Yt,$0(e),r)))}),s0=$(function(e,r){return o(f0,e,r.ey)}),rr=s0,m0={$:5},d0=m0,p0=It({fU:.44757,fY:.40745}),b0=function(e){return e},Jo=function(e){return e},xa=function(e){return e},g0={$:1},h0=g0,_0=$(function(e,r){var n=e,a=Pr(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(fa,r.bG,r.aJ),u=l;return{by:_n(u),eu:n,bE:hn(u),cD:0,bT:gn(u),cT:2,fU:t,fY:i,c$:c}}),Oo=function(e){return o(_0,Oc(!0),{aJ:e.aJ,bG:e.bG,dY:Dn(e.dY)})},C0=function(e){var r=e;return r},y0=function(e){var r=e;return C0(r.eo)},Kc=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),L0=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),w0=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),S0=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),x0=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),T0=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),P0=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),M0=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return S(P0,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return S(Kc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return S(L0,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return S(w0,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return S(T0,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return S(S0,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return S(x0,n,a,t,1);case 8:return e;case 9:return e;default:return e}},z0={$:0},k0=ie(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ea(c(u)),m=o(fe,s.dM,e),d=o(ce,s.dJ,r),f=o(fe,s.dN,n),h=o(ce,s.dK,a),b=o(fe,s.dO,t),C=o(ce,s.dL,i),L=c,_=v;e=m,r=d,n=f,a=h,t=b,i=C,c=L,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),D0=y(function(e,r,n){var a=ea(e(r));return aa(k0,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),Ta=$(function(e,r){var n=e,a=r;return Y(a,n)<1}),A0=function(e){return o(Ta,e.dJ,e.dM)&&o(Ta,e.dK,e.dN)&&o(Ta,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},na=function(e){var r=e;return r},rn=function(e){var r=e;return r.fU},nn=function(e){var r=e;return r.fY},an=function(e){var r=e;return r.c$},B0=function(e){var r=na(e),n=r.a,a=r.b,t=r.c,i=rn(n),c=nn(n),l=an(n),u=rn(a),v=nn(a),s=an(a),m=rn(t),d=nn(t),f=an(t);return A0({dJ:o(ce,i,o(ce,u,m)),dK:o(ce,c,o(ce,v,d)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,m)),dN:o(fe,c,o(fe,v,d)),dO:o(fe,l,o(fe,s,f))})},Xc=o$,mr=function(e){return Xc(Pr(e))},Qc=function(e){var r=e;return r},el=function(e){return Xc(Qc(e))},rl=function(e){return e},F0=$(function(e,r){var n=e,a=r,t=o(je,N(a.fU),o(je,N(a.fY),N(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=$r(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return wc}),U0=F0(rl(1)),nl=y(function(e,r,n){var a=o(tt,r,n),t=o(tt,e,r);return U0(o(Ht,a,t))}),R0=function(e){var r=na(e),n=r.a,a=r.b,t=r.c,i=el(p(nl,n,a,t));return O({o:i,dY:mr(n)},{o:i,dY:mr(a)},{o:i,dY:mr(t)})},E0=$(function(e,r){return{$:2,a:e,b:r}}),V0=E0({c8:3,dh:0,dQ:4}),Y0=function(e){if(e.b){var r=e.a,n=e.b,a=V0(o(le,R0,e)),t=p(D0,B0,r,n);return S(Kc,t,e,a,0)}else return z0},ze=y(function(e,r,n){return O(e,r,n)}),We=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),al=function(){var e=Un(1),r=Un(1),n=Un(1),a=o(vr,-.5,e),t=o(vr,-.5,r),i=o(vr,-.5,n),c=p(We,i,t,a),l=o(vr,.5,e),u=p(We,i,t,l),v=o(vr,.5,r),s=p(We,i,v,a),m=p(We,i,v,l),d=o(vr,.5,n),f=p(We,d,t,a),h=p(We,d,v,a),b=p(We,d,t,l),C=p(We,d,v,l);return M0(Y0(g([p(ze,c,h,f),p(ze,c,s,h),p(ze,u,b,C),p(ze,u,C,m),p(ze,f,h,C),p(ze,f,C,b),p(ze,c,m,s),p(ze,c,u,m),p(ze,c,f,b),p(ze,c,b,u),p(ze,s,C,h),p(ze,s,m,C)])))}(),Tn={$:0},j0=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),N0=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=el(p(nl,u,l,c)),s={o:v,dY:mr(u)},m={o:v,dY:mr(l)},d={o:v,dY:mr(c)};return o(A,s,o(A,m,o(A,d,n)))}),G0=function(e){var r=e;return r.D},H0=B(function(e,r,n,a){if(r.$===1)return W;var t=r.a;if(n.$===1)return W;var i=n.a;if(a.$===1)return W;var c=a.a;return Q(p(e,t,i,c))}),vt=4294967295>>>32-cn,$t=Ml,W0=y(function(e,r,n){e:for(;;){var a=vt&r>>>e,t=o($t,a,n);if(t.$){var v=t.a;return o($t,vt&r,v)}else{var i=t.a,c=e-cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),I0=function(e){return e>>>5<<5},J0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Y(e,n)>-1?W:Y(e,I0(n))>-1?Q(o($t,vt&e,i)):Q(p(W0,a,e,t))}),O0=function(e){var r=e;return r.ah},Pa=$(function(e,r){return o(J0,e,O0(r))}),q0=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return S(H0,y(function(c,l,u){return O(c,l,u)}),o(Pa,a,e),o(Pa,t,e),o(Pa,i,e))};return o(Yt,r,G0(e))},Z0=y(function(e,r,n){e:for(;;){var a=o(kt,Te,e),t=a.a,i=a.b;if(Y(Ia(t),Te)<0)return o(Ni,!0,{z:r,l:n,p:t});var c=i,l=o(A,Yi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),tl=function(e){return e.b?p(Z0,e,T,0):Ei},K0=y(function(e,r,n){return e(r(n))}),X0=$(function(e,r){return!o(Qi,o(K0,K$,e),r)}),Q0=$(function(e,r){return p(ur,$(function(n,a){return e(n)?o(A,n,a):a}),T,r)}),ep=function(e){var r=e.a;return r},rp=$(function(e,r){var n=ep(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Y(i,n)<0&&c>=0&&Y(c,n)<0&&l>=0&&Y(l,n)<0};return o(X0,a,r)?{D:r,ah:e}:{D:o(Q0,a,r),ah:e}}),np=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),ap=np({c8:1,dh:3,dQ:4}),Rn=$(function(e,r){var n=lt(r),a=lt(e);return M(O(a.fU,a.fY,a.c$),O(n.fU,n.fY,n.c$))}),qo=p(Jt,0,0,0),Ma=Fe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Rt,o(Rn,e,r),t);if(v.$){var m={o:qo,dY:mr(r)},d={o:qo,dY:mr(e)},f=u+1,h=u;return O(o(A,O(n,h,f),o(A,O(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return O(o(A,O(n,s,a),c),l,u)}}),tp=Ce(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,C=e,L=r,_=v,x=a+3,F=se(Ma,s,d,f,b,r,se(Ma,m,s,h,f,r,se(Ma,d,m,b,h,r,t)));e=C,r=L,n=_,a=x,t=F;continue e}else{var J=t,G=J.a,j=J.b;return M(G,xe(j))}}),op=Ce(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,C=p(Qr,o(Rn,d,s),f,p(Qr,o(Rn,s,m),h,p(Qr,o(Rn,m,d),b,t))),L=o(A,O(b,h,f),a),_=e,x=v,F=n+3,J=L,G=C;e=_,r=x,n=F,a=J,t=G;continue e}else return O(a,t,n)}),_r=y(function(e,r,n){var a=q0(n),t=p(ur,N0(r),T,a),i=w(op,r,a,0,T,yc),c=i.a,l=i.b,u=i.c,v=w(tp,r,l,a,0,O(c,T,u)),s=v.a,m=v.b,d=at(m)?t:ae(t,m);return p(j0,e,o(rp,tl(d),s),o(ap,d,s))}),Zo=function(e){return{D:o(le,function(r){return O(3*r,3*r+1,3*r+2)},o(oa,0,Sr(e)-1)),ah:tl(sr(o(le,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},ip=function(e){switch(e.$){case 0:return Tn;case 1:var a=e.a,r=e.b,n=o(le,na,r);return p(_r,a,Rr,Zo(n));case 2:var a=e.a,r=e.b,n=o(le,na,r);return p(_r,a,Rr,Zo(n));case 3:var a=e.a,t=e.b;return p(_r,a,Rr,t);case 4:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 8:return Tn;case 9:return Tn;default:return Tn}},Ko=ip(al),cp=function(e){var r=e;return r.aK},ol={$:0},k=ol,Ge=$(function(e,r){return{$:1,a:e,b:r}}),lp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},up=1029,vp=function(e){return{$:5,a:e}},il=function(e){var r=e;return vp(r)},$p=il(up),fp=1028,sp=il(fp),Xe=y(function(e,r,n){return r===1?e?o(A,$p,n):o(A,sp,n):n}),cl={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},za=B(function(e,r,n,a){return o(Ge,r,ie(function(t,i,c,l,u,v,s,m){return w(ye,p(Xe,l,a,m),cl,lp,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),mp={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},ll={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qe=B(function(e,r,n,a){return o(Ge,r,ie(function(t,i,c,l,u,v,s,m){return w(ye,p(Xe,l,a,m),ll,mp,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),ul=$(function(e,r){return{$:3,a:e,b:r}}),dp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bR",sceneProperties:"e"}},vl={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bR",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pp=B(function(e,r,n,a){return o(ul,n,ie(function(t,i,c,l,u,v,s,m){return w(ye,m,vl,dp,a,{aw:e,b:c,c:i,bR:r,d:v,e:t,f:u})}))}),bp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},ro=function(e){var r=e;return r},$l=i$,er=Ce(function(e,r,n,a,t){return o(Ge,n,ie(function(i,c,l,u,v,s,m,d){return w(ye,p(Xe,u,t,d),ll,bp,a,{aN:o($l,ro(r),e),b:l,c,d:s,e:i,f:v})}))}),gp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bR",sceneProperties:"e"}},hp=Ce(function(e,r,n,a,t){return o(ul,a,ie(function(i,c,l,u,v,s,m,d){return w(ye,d,vl,gp,t,{aN:o($l,ro(r),e),b:l,c,bR:n,d:s,e:i,f:v})}))}),_p={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},fl={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Pn=B(function(e,r,n,a){return o(Ge,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(ye,p(Xe,l,a,m),fl,_p,n,{P:f,bd:d.bd,bJ:d.bJ,bK:d.bK,bL:d.bL,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),sl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},ml={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Cp=Fe(function(e,r,n,a,t,i){return o(Ge,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return w(ye,p(Xe,v,i,f),ml,sl,t,{P:b,bd:h.bd,bJ:h.bJ,bK:h.bK,bL:h.bL,ck:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),dl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b$",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ge,u,ie(function(m,d,f,h,b,C,L,_){var x=L.a,F=L.b;return w(ye,p(Xe,h,s,_),ml,dl,v,{b$:e,b2:r,b3:i,b4:a,P:F,bd:x.bd,bJ:x.bJ,bK:x.bK,bL:x.bL,co:t,b:f,c:d,aW:c,d:C,cL:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Lp={src:`
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
    `,attributes:{},uniforms:{baseColor:"b_",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},Mn=Fe(function(e,r,n,a,t,i){return o(Ge,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return w(ye,p(Xe,v,i,f),fl,Lp,t,{b_:e,P:b,bd:h.bd,bJ:h.bJ,bK:h.bK,bL:h.bL,cn:n,b:u,c:l,d:m,cK:r,e:c,f:s})}))}),wp=function(e){return{$:0,a:e}},Xo=$(function(e,r){return{$:1,a:e,b:r}}),tn=$(function(e,r){if(r.$){var n=r.a.C;return M(n,1)}else return r.a,M(e,0)}),Sp=function(e){return S(Jr,gn(e),hn(e),_n(e),1)},no=S(Jr,0,0,0,0),En=$(function(e,r){if(r.$){var a=r.a.C;return M(a,no)}else{var n=r.a;return M(e,Sp(n))}}),xp=$(function(e,r){var n=M(e,r);if(n.a.$){var t=n.a.a.C;return o(Xo,M(t,no),o(tn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Xo,o(En,t,e),o(tn,t,r))}else{var a=n.a.a;return n.b.a,wp(a)}}),Tp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Pp=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mp=function(e){return o(Ur,e,1)},ft=o(Ur,0,0),Dr=$(function(e,r){if(r.$){var a=r.a.C;return M(a,ft)}else{var n=r.a;return M(e,Mp(n))}}),zp=B(function(e,r,n,a){var t=S(Pp,e,r,n,a);if(t.a.$){var u=t.a.a.C;return S(zn,M(u,no),o(Dr,u,r),o(Dr,u,n),o(tn,u,a))}else if(t.b.$){var u=t.b.a.C;return S(zn,o(En,u,e),M(u,ft),o(Dr,u,n),o(tn,u,a))}else if(t.c.$){var u=t.c.a.C;return S(zn,o(En,u,e),o(Dr,u,r),M(u,ft),o(tn,u,a))}else if(t.d.$){var u=t.d.a.C;return S(zn,o(En,u,e),o(Dr,u,r),o(Dr,u,n),M(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Tp,i,c,l)}}),kp={src:`
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
    `,attributes:{},uniforms:{backlight:"bY",colorTexture:"bB",sceneProperties:"e"}},ka=Ce(function(e,r,n,a,t){return o(Ge,n,ie(function(i,c,l,u,v,s,m,d){return w(ye,p(Xe,u,t,d),cl,kp,a,{bY:ro(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),pl={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Dp=B(function(e,r,n,a){return o(Ge,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(ye,p(Xe,l,a,m),pl,sl,n,{P:f,bd:d.bd,bJ:d.bJ,bK:d.bK,bL:d.bL,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Ap=dt(function(e,r,n,a,t,i,c,l,u){return o(Ge,c,ie(function(v,s,m,d,f,h,b,C){var L=b.a,_=b.b;return w(ye,p(Xe,d,u,C),pl,dl,l,{b$:e,b2:r,b3:i,b4:a,P:_,bd:L.bd,bJ:L.bJ,bK:L.bK,bL:L.bL,co:t,b:m,c:s,aW:e,d:h,cL:n,e:v,a$:0,f})}))}),ao=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Bp=function(e){var r=e;return p(ao,r.dM,r.dJ,.5)},Fp=function(e){var r=e;return p(ao,r.dN,r.dK,.5)},Up=function(e){var r=e;return p(ao,r.dO,r.dL,.5)},Rp=function(e){return p(We,Bp(e),Fp(e),Up(e))},R=function(e){var r=Uc(e),n=r.a,a=r.b,t=r.c;return{ev:Pr(Rp(e)),eR:n/2,eS:a/2,eT:t/2}},Ep=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(za,l,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(za,l,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(za,l,R(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Qe,n,R(t),c,a);case 8:var t=r.a,c=r.c;return S(Qe,n,R(t),c,0);case 9:var t=r.a,c=r.c;return S(Qe,n,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(pp,n,i,R(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return w(ka,l,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(ka,l,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(ka,l,v,R(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(er,u,v,R(t),c,a);case 8:var t=r.a,c=r.c;return w(er,u,v,R(t),c,0);case 9:var t=r.a,c=r.c;return w(er,u,v,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(hp,u,v,i,R(t),c)}}case 2:e.a;var s=e.b,G=e.c,m=o(xp,s,G);if(m.$){var h=m.a,b=h.a;h.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return S(Dp,b,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(Cp,b,L,_,R(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var d=m.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var x=e.b,F=e.c,J=e.d,G=e.e,j=S(zp,x,F,J,G);if(j.$){var K=j.a,X=K.a,pe=K.b,be=j.b,ue=be.a,ve=be.b,Re=j.c,Ee=Re.a,Mr=Re.b,zr=j.d,L=zr.a,_=zr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return wl(Ap,X,pe,ue,ve,Ee,Mr,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return yp(X)(pe)(ue)(ve)(Ee)(Mr)(L)(_)(R(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var q=j.a,I=j.b,V=j.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Da=function(e){var r=e;return r.fU},Aa=function(e){var r=e;return r.fY},Ba=function(e){var r=e;return r.c$},Vp=function(e){var r=e,n=Ba(r.c0),a=Aa(r.c0),t=Da(r.c0),i=Ba(r.c_),c=Aa(r.c_),l=Da(r.c_),u=Ba(r.cZ),v=Aa(r.cZ),s=Da(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Yp=function(e){var r=Pr(sa(e)),n=Pe(bn(e)),a=Pe(pn(e)),t=Pe(dn(e));return{dk:Vp(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,H:r.fU,I:r.fY,J:r.c$,bV:1}},Ar=$(function(e,r){return{$:5,a:e,b:r}}),ma=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Pc,a,e);return o(Ar,i,t);case 1:return o(Ar,e,n);case 3:return o(Ar,e,n);case 2:return o(Ar,e,n);default:return o(Ar,e,n)}}),jp=$(function(e,r){return o(ma,Yp(e),r)}),bl=function(e){return{$:2,a:e}},Np=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),Gp=u$,Hp=l$,Qo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=Hp(a),h=f.fU,b=f.fY,C=f.c$,L=f.ei,_=Gp({ei:L,fU:h*s,fY:b*m,c$:C*d});return aa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},st=$(function(e,r){switch(r.$){case 0:return ol;case 5:var n=r.a,a=r.b;return o(Ar,n,o(st,e,a));case 1:var t=r.a,i=r.b;return o(Ge,o(Np,e,t),o(Qo,e,i));case 3:return r;case 2:var i=r.a;return bl(o(Qo,e,i));default:var c=r.a;return Vc(o(le,st(e),c))}}),Wp=$(function(e,r){var n=r;return o(st,e,n)}),Ip={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},gl=7683,hl=7682,Jp=p(Zt,{ci:0,cH:0,cY:15},{a8:de,bl:jr,bt:de,bu:gl},{a8:de,bl:jr,bt:de,bu:hl}),Op=p(Zt,{ci:0,cH:0,cY:15},{a8:de,bl:jr,bt:de,bu:hl},{a8:de,bl:jr,bt:de,bu:gl}),qp=$(function(e,r){return e?o(A,Op,r):o(A,Jp,r)}),Zp={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},Kp=function(e){if(e.$){var r=e.c;return Q(ie(function(n,a,t,i,c,l,u,v){return w(ye,o(qp,i,v),Zp,Ip,r,{b:t,c:a,d:l,e:n,bW:u,f:c})}))}else return W},ei=function(e){var r=Kp(e);if(r.$)return k;var n=r.a;return bl(n)},Xp=B(function(e,r,n,a){var t=o(Ep,n,al),i=function(){var s=M(e,r);return s.a?s.b?eo(g([t,ei(Ko)])):t:s.b?ei(Ko):k}(),c=cp(a),l=c.a,u=c.b,v=c.c;return o(jp,y0(a),o(Wp,O(l,u,v),i))}),Qp=$(function(e,r){return S(Xp,!0,!0,e,r)}),Fa=$(function(e,r){var n=e,a=r;return Y(a,n)>-1}),Ua=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),e1=tr({fU:-1,fY:0,c$:0}),r1=tr({fU:0,fY:-1,c$:0}),n1=tr({fU:0,fY:0,c$:-1}),a1=Fe(function(e,r,n,a,t,i){var c=o(Fa,n,i)?Ic:n1,l=o(Fa,r,t)?Wt:r1,u=o(Fa,e,a)?Gc:e1,v=O(Be(o(or,e,a)),Be(o(or,r,t)),Be(o(or,n,i))),s=p(We,o(Ua,e,a),o(Ua,r,t),o(Ua,n,i)),m=Yr({cu:s,cZ:u,c_:l,c0:c});return{eo:m,aK:v}}),t1=$(function(e,r){return se(a1,rn(e),nn(e),an(e),rn(r),nn(r),an(r))}),o1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=O(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Qp,e,o(t1,p(it,-c,-l,-u),p(it,c,l,u)))}),i1=function(e){return eo(e)},c1=i1,l1=B(function(e,r,n,a){var t=O(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return S($a,f,d,m,a)}),u1=y(function(e,r,n){return S(l1,e,r,n,1)}),ri=function(e){return{$:0,a:e}},v1=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ra=function(e){return p(Tc,0,1,e<=.04045?e/12.92:o(Wr,(e+.055)/1.055,2.4))},$1=function(e){var r=sc(e),n=r.cG,a=r.b7,t=r.b0;return p(Jt,Ra(n),Ra(a),Ra(t))},f1=function(e){return p(v1,0,ri($1(e)),ri(0))},s1=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),m1=function(e){var r=Qc(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c$,bV:1}},d1=$(function(e,r){return o(ma,m1(e),r)}),p1=$(function(e,r){return o(d1,e,r)}),b1=function(e){var r=e.a,n=e.b,a=e.c;return p1(p(s1,r,n,a))},ni=function(e){return b1(O(e,0,0))},g1=function(e){var r=e;return r.eF},h1=function(e){var r=e;return r.cu},_1=$(function(e,r){var n=r,a=Pr(h1(e)),t=.5*n,i=Qn(t),c=ut(t),l=Pe(g1(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,b=1-2*(s+h),C=l.c$*c,L=i*C,_=2*(f-L),x=2*(f+L),F=u*C,J=2*(F+d),G=2*(F-d),j=m*C,q=2*(j-v),I=2*(j+v),V=C*C,K=1-2*(h+V),X=1-2*(s+V);return{dk:!0,q:K,r:x,s:G,t:_,u:X,v:I,w:J,x:q,y:b,H:a.fU-K*a.fU-_*a.fY-J*a.c$,I:a.fY-x*a.fU-X*a.fY-q*a.c$,J:a.c$-G*a.fU-I*a.fY-b*a.c$,bV:1}}),C1=y(function(e,r,n){return o(ma,o(_1,e,r),n)}),to=y(function(e,r,n){return p(C1,e,r,n)}),oo=$(function(e,r){return{eF:r,cu:e}}),y1=o(oo,Ir,Hc),L1=$(function(e,r){return p(to,y1,dr(e),r)}),w1=o(oo,Ir,Wc),S1=$(function(e,r){return p(to,w1,dr(e),r)}),x1=o(oo,Ir,Jc),T1=$(function(e,r){return p(to,x1,dr(e),r)}),P1=$(function(e,r){var n=Pr(e),a=1-r;return{dk:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fU,I:a*n.fY,J:a*n.c$,bV:r}}),M1=y(function(e,r,n){return o(ma,o(P1,e,r),n)}),z1=y(function(e,r,n){return p(M1,e,r,n)}),k1=z1(Ir),D1=function(e){var r=function(t){return .1*t},n=function(t){return S(xc,0,1,4,e.b1+r(t))},a=function(t){return o(ni,1.4*t,o(T1,n(t),o(L1,n(t),o(S1,n(t),o(ni,o(rr,"a",e)*t,o(k1,o(rr,"a",e)*t,o(o1,f1(p(u1,n(t),.6,.8)),O(1,3,1))))))))};return c1(o(le,a,o(oa,-10,10)))},A1=$(function(e,r){return g([D1(e)])}),ai=function(e){var r=e;return r},B1=function(e){e:for(;;){if(wr(e.di,vn)&&wr(e.dj,vn))return Le;if(o(Lc,Be(e.di),Be(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:ra(e.ee)};e=r;continue e}else{var n=N(ai(e.dj)/ot),a=N(ai(e.di)/ot),t=Pe(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(fa,rl(1),e.aJ),v=u;return{by:a*_n(v),eu:!1,bE:a*hn(v),cD:n/a,bT:a*gn(v),cT:3,fU:i,fY:c,c$:l}}}},F1=function(e){return B1({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(qc,dr(e.bx),dr(e.bC))})},U1=$(function(e,r){var n=r0({bx:o(rr,"azimuth for third light",e),aJ:xm(b0(2e3)),bC:o(rr,"elevation for third light",e),bG:xa(o(Wr,10,o(rr,"lux",e)))}),a=Oo({aJ:Sa,bG:Jo(6e3),dY:{fU:-45,fY:-30,c$:45}}),t=F1({bx:o(rr,"azimuth for fourth light",e),aJ:Sa,bC:o(rr,"elevation for fourth light",e),di:xa(o(rr,"intensity above",e)),dj:xa(o(rr,"intensity below",e))}),i=Oo({aJ:p0,bG:Jo(6e3),dY:{fU:-45,fY:30,c$:45}});return o(Qd,{el:h0,ep:S(pc,0,0,0,.7),es:wm(e),ex:.1,b5:e.b5,eM:a0(6),e8:S(v0,i,a,n,t),cM:e.cM,fK:d0,fR:Sa},o(A1,e,r))}),R1=S(Xs,U1,tm,am,Qs);const E1={Main:{init:R1(o(z,function(e){return we({e0:e})},o(P,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return we({b1:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(P,"clock",oe))},o(P,"devicePixelRatio",oe))},o(P,"dt",oe))},o(P,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return we({ek:m,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(P,"alt",Z))},o(P,"control",Z))},o(P,"down",Z))},o(P,"downs",Jn(un)))},o(P,"left",Z))},o(P,"pressedKeys",Jn(un)))},o(P,"right",Z))},o(P,"shift",Z))},o(P,"up",Z))))},o(P,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return we({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(P,"down",Z))},o(P,"isDown",Z))},o(P,"move",Z))},o(P,"rightDown",Z))},o(P,"rightUp",Z))},o(P,"up",Z))},o(P,"x",oe))},o(P,"y",oe))))},o(P,"screen",o(z,function(r){return o(z,function(n){return we({eV:n,fS:r})},o(P,"height",oe))},o(P,"width",oe))))},o(P,"wheel",o(z,function(e){return o(z,function(r){return we({eC:r,eD:e})},o(P,"deltaX",oe))},o(P,"deltaY",oe)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},V1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-D.clock;b<.009||(D.dt=b,D.clock=h,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},Y1=()=>{Ea("pointerdown"),Ea("wheel"),Ea("keydown")},Ea=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},j1=E1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});Y1();V1(j1);
