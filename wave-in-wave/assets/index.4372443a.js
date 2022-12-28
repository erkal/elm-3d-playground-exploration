(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function dr(e,r,n){return n.a=e,n.f=r,n}function $(e){return dr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return dr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return dr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Ce(e){return dr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return dr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function pt(e){return dr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ie(e){return dr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function bt(e){return dr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function S(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ni(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function aa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function yl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ll=[];function wl(e){return e.length}var Sl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),xl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Tl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Pl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ml()),r});function Ml(e){return"<internals>"}function Nr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=Ya(e,r,0,a);t&&(n=a.pop());t=Ya(n.a,n.b,0,a));return t}function Ya(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Nr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=_o(e),r=_o(r));for(var t in e)if(!Ya(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return Y(e,r)<0});$(function(e,r){return Y(e,r)<1});$(function(e,r){return Y(e,r)>0});$(function(e,r){return Y(e,r)>=0});var zl=$(function(e,r){var n=Y(e,r);return n<0?Mi:n?d$:Pi}),fn=0;function P(e,r){return{a:e,b:r}}function J(e,r,n){return{a:e,b:r,c:n}}function Oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ae);function ae(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ke(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ke(e.a,r);return n}var T={$:0};function Ke(e,r){return{$:1,a:e,b:r}}var kl=$(Ke);function g(e){for(var r=T,n=e.length;n--;)r=Ke(e[n],r);return r}function ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Dl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});Ce(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(S(e,r.a,n.a,a.a,t.a));return g(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(w(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(ta(r).sort(function(n,a){return Y(e(n),e(a))}))});$(function(e,r){return g(ta(r).sort(function(n,a){var t=o(e,n,a);return t===Pi?0:t===Mi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Al=$(Math.pow);$(function(e,r){return r%e});var Bl=$(function(e,r){var n=r%e;return e===0?Nr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Fl=Math.PI,Ul=Math.cos,Rl=Math.sin,El=Math.tan,Vl=Math.atan;$(Math.atan2);function Yl(e){return e}function jl(e){return e===1/0||e===-1/0}var Nl=Math.ceil,Hl=Math.floor,Wl=Math.round,Gl=Math.sqrt,oo=Math.log,Il=isNaN;function Jl(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Ol=$(function(e,r){return e+r});function ql(e){var r=e.charCodeAt(0);return isNaN(r)?G:Q(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function Zl(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Kl(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Xl=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Ql=$(function(e,r){return r.split(e)}),eu=$(function(e,r){return r.join(e)}),ru=y(function(e,r,n){return n.slice(e,r)});function nu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var au=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),tu=$(function(e,r){return r.indexOf(e)>-1}),ou=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var iu=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function ai(e){return e+""}function cu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return G;r=10*r+i-48}return t==a?G:Q(n==45?-r:r)}function lu(e){if(e.length===0||/[\sxbo]/.test(e))return G;var r=+e;return r===r?Q(r):G}function uu(e){return ta(e).join("")}function vu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function $u(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function fu(e){return{$:0,a:e}}function gt(e){return{$:2,b:e}}var su=gt(function(e){return typeof e=="boolean"?te(e):Je("a BOOL",e)}),mu=gt(function(e){return typeof e=="number"?te(e):Je("a FLOAT",e)}),du=gt(function(e){return typeof e=="string"?te(e):e instanceof String?te(e+""):Je("a STRING",e)});function pu(e){return{$:3,b:e}}var bu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function pr(e,r){return{$:9,f:e,g:r}}var gu=$(function(e,r){return{$:10,b:r,h:e}}),hu=$(function(e,r){return pr(e,[r])}),_u=y(function(e,r,n){return pr(e,[r,n])});B(function(e,r,n,a){return pr(e,[r,n,a])});Ce(function(e,r,n,a,t){return pr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return pr(e,[r,n,a,t,i])});pt(function(e,r,n,a,t,i,c){return pr(e,[r,n,a,t,i,c])});ie(function(e,r,n,a,t,i,c,l){return pr(e,[r,n,a,t,i,c,l])});bt(function(e,r,n,a,t,i,c,l,u){return pr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return De(e,n)}catch(a){return me(o(zt,"This is not valid JSON! "+a.message,r))}});var ti=$(function(e,r){return De(e,r)});function De(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?te(e.c):Je("null",r);case 3:return yn(r)?io(e.b,r,g):Je("a LIST",r);case 4:return yn(r)?io(e.b,r,Cu):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var v=De(e.b,r[n]);return je(v)?v:me(o(Co,n,v.a));case 7:var a=e.e;if(!yn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=De(e.b,r[a]);return je(v)?v:me(o(zi,a,v.a));case 8:if(typeof r!="object"||r===null||yn(r))return Je("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=De(e.b,r[i]);if(!je(v))return me(o(Co,i,v.a));t=Ke(P(i,v.a),t)}return te(xe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=De(l[u],r);if(!je(v))return v;c=c(v.a)}return te(c);case 10:var v=De(e.b,r);return je(v)?De(e.h(v.a),r):v;case 11:for(var s=T,m=e.g;m.b;m=m.b){var v=De(m.a,r);if(je(v))return v;s=Ke(v.a,s)}return me(p$(xe(s)));case 1:return me(o(zt,e.a,r));case 0:return te(e.a)}}function io(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=De(e,r[i]);if(!je(c))return me(o(zi,i,c.a));t[i]=c.a}return te(n(t))}function yn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Cu(e){return o(A$,e.length,function(r){return e[r]})}function Je(e,r){return me(o(zt,"Expecting "+e,r))}function Ar(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ar(e.b,r.b);case 6:return e.d===r.d&&Ar(e.b,r.b);case 7:return e.e===r.e&&Ar(e.b,r.b);case 9:return e.f===r.f&&co(e.g,r.g);case 10:return e.h===r.h&&Ar(e.b,r.b);case 11:return co(e.g,r.g)}}function co(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ar(e[a],r[a]))return!1;return!0}var yu=$(function(e,r){return JSON.stringify(r,null,e)+""});function oi(e){return e}y(function(e,r,n){return n[e]=r,n});function xr(e){return{$:0,a:e}}function Lu(e){return{$:1,a:e}}function lr(e){return{$:2,b:e,c:null}}var ja=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function wu(e){return{$:5,b:e}}var Su=0;function ht(e){var r={$:0,e:Su++,f:e,g:null,h:[]};return _t(r),r}function ii(e){return lr(function(r){r(xr(ht(e)))})}function ci(e,r){e.h.push(r),_t(e)}var xu=$(function(e,r){return lr(function(n){ci(e,r),n(xr(fn))})}),ba=!1,lo=[];function _t(e){if(lo.push(e),!ba){for(ba=!0;e=lo.shift();)Tu(e);ba=!1}}function Tu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,_t(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return Ct(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function Ct(e,r,n,a,t,i){var c=o(ti,e,r?r.flags:void 0);je(c)||Nr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Pu(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),vo(l,b.b,t(v))}return vo(l,u.b,t(v)),m?{ports:m}:{}}var qe={};function Pu(e,r){var n;for(var a in qe){var t=qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=zu(t,r)}return n}function Mu(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function zu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ja,l,wu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?S(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=ht(o(ja,l,e.b))}var ku=$(function(e,r){return lr(function(n){e.g(r),n(xr(fn))})});$(function(e,r){return o(xu,e.h,{$:0,a:r})});function li(e){return function(r){return{$:1,k:e,l:r}}}function Du(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var uo=[],ga=!1;function vo(e,r,n){if(uo.push({p:e,q:r,r:n}),!ga){ga=!0;for(var a;a=uo.shift();)Au(a.p,a.q,a.r);ga=!1}}function Au(e,r,n){var a={};Vn(!0,r,a,null),Vn(!1,n,a,null);for(var t in e)ci(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Vn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Bu(e,t,a,r.l);n[t]=Fu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Vn(e,c.a,n,a);return;case 3:Vn(e,r.o,n,{s:r.n,t:a});return}}function Bu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?qe[r].e:qe[r].f;return o(i,t,a)}function Fu(e,r,n){return n=n||{i:T,j:T},e?n.i=Ke(r,n.i):n.j=Ke(r,n.j),n}function Uu(e){qe[e]&&Nr(3)}$(function(e,r){return r});function Ru(e,r){return Uu(e),qe[e]={f:Eu,u:r,a:Vu},li(e)}var Eu=$(function(e,r){return function(n){return e(r(n))}});function Vu(e,r){var n=T,a=qe[e].u,t=xr(null);qe[e].b=t,qe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ti,a,c);je(l)||Nr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Yn,tr=typeof document<"u"?document:{};function yt(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(fr(e,function(){}),t),{}});function Na(e){return{$:0,a:e}}var ui=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Lt(n),e:t,f:e,b:i}})}),Tr=ui(void 0),Yu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Lt(n),e:t,f:e,b:i}})}),ju=Yu(void 0);function Nu(e,r,n,a){return{$:3,d:Lt(e),g:r,h:n,i:a}}var Hu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function br(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return br([e,r],function(){return e(r)})});y(function(e,r,n){return br([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return br([e,r,n,a],function(){return p(e,r,n,a)})});Ce(function(e,r,n,a,t){return br([e,r,n,a,t],function(){return S(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return br([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});pt(function(e,r,n,a,t,i,c){return br([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ie(function(e,r,n,a,t,i,c,l){return br([e,r,n,a,t,i,c,l],function(){return ni(e,r,n,a,t,i,c,l)})});bt(function(e,r,n,a,t,i,c,l,u){return br([e,r,n,a,t,i,c,l,u],function(){return aa(e,r,n,a,t,i,c,l,u)})});var vi=$(function(e,r){return{$:"a0",n:e,o:r}}),Wu=$(function(e,r){return{$:"a1",n:e,o:r}}),$i=$(function(e,r){return{$:"a2",n:e,o:r}}),gr=$(function(e,r){return{$:"a3",n:e,o:r}}),Gu=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Iu(e){return e=="script"?"p":e}function Ju(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(vi,r.n,Ou(e,r.o)):r});function Ou(e,r){var n=Bt(r);return{$:r.$,a:n?p(B$,n<3?qu:Zu,we(e),r.a):o(Wn,e,r.a)}}var qu=$(function(e,r){return P(e(r.a),r.b)}),Zu=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Lt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?$o(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?$o(c,t,i):c[t]=i}return r}function $o(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function fr(e,r){var n=e.$;if(n===5)return fr(e.k||(e.k=e.m()),r);if(n===0)return tr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=fr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ha(c,r,e.d),c}var c=e.f?tr.createElementNS(e.f,e.c):tr.createElement(e.c);Yn&&e.c=="a"&&c.addEventListener("click",Yn(c)),Ha(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)yt(c,fr(n===1?l[u]:l[u].b,r));return c}function Ha(e,r,n){for(var a in n){var t=n[a];a==="a1"?Ku(e,t):a==="a0"?ev(e,r,t):a==="a3"?Xu(e,t):a==="a4"?Qu(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Ku(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Xu(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Qu(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function ev(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=rv(r,i),e.addEventListener(t,c,wt&&{passive:Bt(i)<2}),a[t]=c}}var wt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){wt=!0}}))}catch{}function rv(e,r){function n(a){var t=n.q,i=De(t.a,a);if(!!je(i)){for(var c=Bt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function nv(e,r){return e.$==r.$&&Ar(e.a,r.a)}function fi(e,r){var n=[];return Ne(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ne(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=vv(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ne(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){$e(n,0,a,r);return}(f?!av(m,d):m!==d)&&$e(n,2,a,d),Ne(h,b,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:fo(e,r,n,a,tv);return;case 2:fo(e,r,n,a,ov);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=St(e.d,r.d);C&&$e(n,4,a,C);var L=r.i(e.g,r.g);L&&$e(n,5,a,L);return}}}function av(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function fo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=St(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function St(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=St(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&nv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function tv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ne(s,i[v],n,++a),a+=s.b||0}}function ov(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],C=h.a,L=b.a,_=h.b,x=b.b,F=void 0,O=void 0;if(C===L){f++,Ne(_,x,t,f),f+=_.b||0,m++,d++;continue}var H=l[m+1],j=u[d+1];if(H){var q=H.a,I=H.b;O=L===q}if(j){var V=j.a,K=j.b;F=C===V}if(F&&O){f++,Ne(_,K,t,f),qr(i,t,C,x,d,c),f+=_.b||0,f++,Zr(i,t,C,I,f),f+=I.b||0,m+=2,d+=2;continue}if(F){f++,qr(i,t,L,x,d,c),Ne(_,K,t,f),f+=_.b||0,m+=1,d+=2;continue}if(O){f++,Zr(i,t,C,_,f),f+=_.b||0,f++,Ne(I,x,t,f),f+=I.b||0,m+=2,d+=1;continue}if(H&&q===V){f++,Zr(i,t,C,_,f),qr(i,t,L,x,d,c),f+=_.b||0,f++,Ne(I,K,t,f),f+=I.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Zr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],b=u[d];qr(i,t,b.a,b.b,void 0,X),d++}(t.length>0||c.length>0||X)&&$e(n,8,a,{w:t,x:c,y:X})}var si="_elmW6BL";function qr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ne(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}qr(e,r,n+si,a,t,i)}function Zr(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ne(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}Zr(e,r,n+si,a,t)}function mi(e,r,n,a){Kr(e,r,n,0,0,r.b,a)}function Kr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Kr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Kr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Kr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var L=d===1?h[C]:h[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=Kr(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function di(e,r,n,a){return n.length===0?e:(mi(e,r,n,a),jn(e,n))}function jn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=iv(t,a);t===e&&(e=i)}return e}function iv(e,r){switch(r.$){case 0:return cv(e,r.s,r.u);case 4:return Ha(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return jn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(fr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=jn(e,i.w),e;case 8:return lv(e,r);case 5:return r.s(e);default:Nr(10)}}function cv(e,r,n){var a=e.parentNode,t=fr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function lv(e,r){var n=r.s,a=uv(n.y,r);e=jn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:fr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&yt(e,a),e}function uv(e,r){if(!!e){for(var n=tr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;yt(n,i.c===2?i.s:fr(i.z,r.u))}return n}}function xt(e){if(e.nodeType===3)return Na(e.textContent);if(e.nodeType!==1)return Na("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ke(o(gr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=Ke(xt(v[a]),u);return p(Tr,l,r,u)}function vv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var $v=B(function(e,r,n,a){return Ct(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=xt(l);return pi(i,function(v){var s=c(v),m=fi(u,s);l=di(l,u,m,t),u=s})})});B(function(e,r,n,a){return Ct(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=tr.title,v=tr.body,s=xt(v);return pi(i,function(m){Yn=c;var d=l(m),f=Tr("body")(T)(d.er),h=fi(s,f);v=di(v,s,h,t),s=f,Yn=0,u!==d.fJ&&(tr.title=u=d.fJ)})})});var Nn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function pi(e,r){r(e);var n=0;function a(){n=n===1?0:(Nn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Nn(a),n=2)}}$(function(e,r){return o(Rt,Ft,lr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Rt,Ft,lr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Rt,Ft,lr(function(){history.replaceState({},"",r),e()}))});var fv={addEventListener:function(){},removeEventListener:function(){}},sv=typeof window<"u"?window:fv;y(function(e,r,n){return ii(lr(function(a){function t(i){ht(n(i))}return e.addEventListener(r,t,wt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=De(e,r);return je(n)?Q(n.a):G});function bi(e,r){return lr(function(n){Nn(function(){var a=document.getElementById(e);n(a?xr(r(a)):Lu(U$(e)))})})}function mv(e){return lr(function(r){Nn(function(){r(xr(e()))})})}$(function(e,r){return bi(r,function(n){return n[e](),fn})});$(function(e,r){return mv(function(){return sv.scroll(e,r),fn})});y(function(e,r,n){return bi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,fn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var dv=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return Q(new RegExp(r,n))}catch{return G}});$(function(e,r){return r.match(e)!==null});var pv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?Q(m):G}a.push(S(sc,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Q(v):G}return n(S(sc,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var so=0;function cn(e,r){for(;r.b;r=r.b)e(r.a)}function Tt(e){for(var r=0;e.b;e=e.b)r++;return r}var bv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},gv=Ce(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),hv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),_v=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Cv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),yv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),wv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Sv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),xv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Tv=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Pv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Mv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},zv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},gi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},hi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},kv=function(e){e.gl.disable(e.gl.CULL_FACE)},Dv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Av=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Bv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},mo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Fv=[Pv,Mv,zv,gi,hi,kv,Dv,Av,Bv];function po(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Uv(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function _i(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Rv(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,L){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[L]:C[L][_];else i.forEach(function(x){for(_=0;_<h;_++)f[b++]=h===1?C[x][L]:C[x][L][_]})}var u=_i(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Tt(n.b)*s);cn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Ev(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=Vv(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*Tt(r.b),indexBuffer:null,buffers:{}}}function Vv(e,r){var n=new Uint32Array(Tt(e)*r),a=0,t;return cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function bo(e,r){return e+"#"+r}var Ci=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),gi(n),hi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=bo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=so++,v||(v=po(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=so++,s||(s=po(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Uv(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Yv(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=bo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),jv(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Ev(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Rv(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=_i(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(h+x),a.vertexAttribPointer(h+x,C.size,C.baseType,!1,_,L*x)}for(n.toggle=!n.toggle,cn(Gm(n),i.a),u=0;u<mo.length;u++){var F=n[mo[u]];F.toggle!==n.toggle&&F.enabled&&(Fv[u](n),F.enabled=!1,F.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return cn(t,e.g),r});function Yv(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var x=l.textures.get(_);x||(x=_.eA(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function jv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Nv=y(function(e,r,n){return Nu(r,{g:n,f:{},h:e},qv,Zv)}),Hv=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Wv=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Gv=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Iv=$(function(e,r){e.contextAttributes.antialias=!0}),Jv=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ov=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function qv(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};cn(function(t){return o(Wm,r,t)},e.h);var n=tr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),bv(function(){return o(Ci,e,n)})):(n=tr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Zv(e,r){return r.f=e.f,Ci(r)}var Kv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Xv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Xv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Pt=new Float64Array(3),go=new Float64Array(3),ho=new Float64Array(3),Qv=y(function(e,r,n){return new Float64Array([e,r,n])}),e$=function(e){return e[0]},r$=function(e){return e[1]},n$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var a$=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function yi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(yi);function Li(e,r,n){return n===void 0&&(n=new Float64Array(3)),Hn(yi(e,r,n),n)}$(Li);function wi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Hn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var t$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Xr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Xr);function Wa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Wa);$(function(e,r){var n,a=Pt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Xr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Xr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Xr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Xr(r,a)+e[14])/n,t});var o$=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var i$=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},c$=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/l$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function l$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var u$=new Float64Array(16),v$=new Float64Array(16),$$=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},f$=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Si(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(Si);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Si(c,l,i,t,n,a)});function xi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(xi);B(function(e,r,n,a){return xi(e,r,n,a,-1,1)});function Ti(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],C=e[13],L=e[14],_=e[15],x=r[0],F=r[1],O=r[2],H=r[3],j=r[4],q=r[5],I=r[6],V=r[7],K=r[8],X=r[9],be=r[10],ge=r[11],ue=r[12],ve=r[13],Ee=r[14],Ve=r[15];return n[0]=a*x+l*F+m*O+b*H,n[1]=t*x+u*F+d*O+C*H,n[2]=i*x+v*F+f*O+L*H,n[3]=c*x+s*F+h*O+_*H,n[4]=a*j+l*q+m*I+b*V,n[5]=t*j+u*q+d*I+C*V,n[6]=i*j+v*q+f*I+L*V,n[7]=c*j+s*q+h*I+_*V,n[8]=a*K+l*X+m*be+b*ge,n[9]=t*K+u*X+d*be+C*ge,n[10]=i*K+v*X+f*be+L*ge,n[11]=c*K+s*X+h*be+_*ge,n[12]=a*ue+l*ve+m*Ee+b*Ve,n[13]=t*ue+u*ve+d*Ee+C*Ve,n[14]=i*ue+v*ve+f*Ee+L*Ve,n[15]=c*ue+s*ve+h*Ee+_*Ve,n}$(Ti);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],C=r[1],L=r[2],_=r[4],x=r[5],F=r[6],O=r[8],H=r[9],j=r[10],q=r[12],I=r[13],V=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*x+v*F,n[5]=t*_+l*x+s*F,n[6]=i*_+u*x+m*F,n[7]=0,n[8]=a*O+c*H+v*j,n[9]=t*O+l*H+s*j,n[10]=i*O+u*H+m*j,n[11]=0,n[12]=a*q+c*I+v*V+d,n[13]=t*q+l*I+s*V+f,n[14]=i*q+u*I+m*V+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Hn(r,Pt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/wi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=h+f,x=b-d,F=h-f,O=c*c*v+u,H=C+m,j=b+d,q=C-m,I=l*l*v+u,V=n[0],K=n[1],X=n[2],be=n[3],ge=n[4],ue=n[5],ve=n[6],Ee=n[7],Ve=n[8],Pr=n[9],Mr=n[10],pa=n[11],gl=n[12],hl=n[13],_l=n[14],Cl=n[15];return a[0]=V*L+ge*_+Ve*x,a[1]=K*L+ue*_+Pr*x,a[2]=X*L+ve*_+Mr*x,a[3]=be*L+Ee*_+pa*x,a[4]=V*F+ge*O+Ve*H,a[5]=K*F+ue*O+Pr*H,a[6]=X*F+ve*O+Mr*H,a[7]=be*F+Ee*O+pa*H,a[8]=V*j+ge*q+Ve*I,a[9]=K*j+ue*q+Pr*I,a[10]=X*j+ve*q+Mr*I,a[11]=be*j+Ee*q+pa*I,a[12]=gl,a[13]=hl,a[14]=_l,a[15]=Cl,a});function s$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(s$);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function m$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(m$);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=Li(e,r,Pt),t=Hn(Wa(n,a,go),go),i=Hn(Wa(a,t,ho),ho),c=u$,l=v$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Ti(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=kl,Ln=Pl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Ln,e,l,v)}else{var u=c.a;return p(Ln,i,l,u)}});return p(Ln,i,p(Ln,e,r,t),a)});var Mt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Mt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),_o=function(e){return p(Mt,y(function(r,n,a){return o(A,P(r,n),a)}),T,e)},Pi=1,d$=2,Mi=0,me=function(e){return{$:1,a:e}},zt=$(function(e,r){return{$:3,a:e,b:r}}),Co=$(function(e,r){return{$:0,a:e,b:r}}),zi=$(function(e,r){return{$:1,a:e,b:r}}),te=function(e){return{$:0,a:e}},p$=function(e){return{$:2,a:e}},Q=function(e){return{$:0,a:e}},G={$:1},b$=au,g$=yu,Se=ai,Cr=$(function(e,r){return o(eu,e,ta(r))}),kt=$(function(e,r){return g(o(Ql,e,r))}),ki=function(e){return o(Cr,`
    `,o(kt,`
`,e))},sn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return p(sn,$(function(r,n){return n+1}),0,e)},h$=Dl,_$=y(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),oa=$(function(e,r){return p(_$,e,r,T)}),Di=$(function(e,r){return p(h$,e,o(oa,0,Sr(r)-1),r)}),Ze=vu,Ai=function(e){var r=Ze(e);return 97<=r&&r<=122},Bi=function(e){var r=Ze(e);return r<=90&&65<=r},C$=function(e){return Ai(e)||Bi(e)},y$=function(e){var r=Ze(e);return r<=57&&48<=r},L$=function(e){return Ai(e)||Bi(e)||y$(e)},xe=function(e){return p(sn,A,T,e)},Hr=ql,w$=$(function(e,r){return`

(`+(Se(e+1)+(") "+ki(S$(r))))}),S$=function(e){return o(x$,e,T)},x$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Hr(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return C$(L)&&o(b$,L$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Se(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Cr,"",xe(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Se(Sr(s))+" ways:"));return o(Cr,`

`,o(A,h,o(Di,w$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Cr,"",xe(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Cr,"",xe(r))+`:

    `):`Problem with the given value:

`}();return h+(ki(o(g$,4,f))+(`

`+d))}}),Te=32,Ga=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ia=Ll,Fi=Nl,Dt=$(function(e,r){return oo(r)/oo(e)}),T$=Yl,ln=Fi(o(Dt,2,Te)),Ui=S(Ga,0,ln,Ia,Ia),Ri=Sl,Ei=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Vi=Hl,Ja=wl,Fe=$(function(e,r){return Y(e,r)>0?e:r}),P$=function(e){return{$:0,a:e}},At=xl,M$=$(function(e,r){e:for(;;){var n=o(At,Te,e),a=n.a,t=n.b,i=o(A,P$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return xe(i)}}),z$=function(e){var r=e.a;return r},k$=$(function(e,r){e:for(;;){var n=Fi(r/Te);if(n===1)return o(At,Te,e).a;var a=o(M$,e,T),t=n;e=a,r=t;continue e}}),Yi=$(function(e,r){if(r.l){var n=r.l*Te,a=Vi(o(Dt,Te,n-1)),t=e?xe(r.z):r.z,i=o(k$,t,r.l);return S(Ga,Ja(r.p)+n,o(Fe,5,a*ln),i,r.p)}else return S(Ga,Ja(r.p),ln,Ia,r.p)}),D$=Ce(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Yi,!1,{z:a,l:n/Te|0,p:t});var i=Ei(p(Ri,Te,r,e)),c=e,l=r-Te,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),A$=$(function(e,r){if(e<=0)return Ui;var n=e%Te,a=p(Ri,n,e-n,r),t=e-n-Te;return w(D$,r,t,e,T,a)}),je=function(e){return!e.$},z=gu,Z=su,M=bu,oe=mu,Wn=hu,B$=_u,we=fu,Bt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},W=Tr("div"),F$=function(e){return{$:2,a:e}},ji=$(function(e,r){return e}),Ni=$(function(e,r){return{bA:r.bA,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Ur=function(e){return e},U$=Ur,yo=Ue(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),R$=tu,yr=Zl,Br=ru,mn=$(function(e,r){return e<1?r:p(Br,e,yr(r),r)}),ia=iu,ca=function(e){return e===""},la=$(function(e,r){return e<1?"":p(Br,0,e,r)}),Hi=cu,Lo=Ce(function(e,r,n,a,t){if(ca(t)||o(R$,"@",t))return G;var i=o(ia,":",t);if(i.b){if(i.b.b)return G;var c=i.a,l=Hi(o(mn,c+1,t));if(l.$===1)return G;var u=l;return Q(se(yo,e,o(la,c,t),u,r,n,a))}else return Q(se(yo,e,t,G,r,n,a))}),wo=B(function(e,r,n,a){if(ca(a))return G;var t=o(ia,"/",a);if(t.b){var i=t.a;return w(Lo,e,o(mn,i,a),r,n,o(la,i,a))}else return w(Lo,e,"/",r,n,a)}),So=y(function(e,r,n){if(ca(n))return G;var a=o(ia,"?",n);if(a.b){var t=a.a;return S(wo,e,Q(o(mn,t+1,n)),r,o(la,t,n))}else return S(wo,e,G,r,n)});$(function(e,r){if(ca(r))return G;var n=o(ia,"#",r);if(n.b){var a=n.a;return p(So,e,Q(o(mn,a+1,r)),o(la,a,r))}else return p(So,e,G,r)});var E$=ou,Ft=function(e){},dn=xr,V$=dn(0),Wi=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(sn,e,r,xe(m)):S(Wi,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ur=y(function(e,r,n){return S(Wi,e,r,0,n)}),le=$(function(e,r){return p(ur,$(function(n,a){return o(A,e(n),a)}),T,r)}),Gn=ja,Ut=$(function(e,r){return o(Gn,function(n){return dn(e(n))},r)}),Y$=y(function(e,r,n){return o(Gn,function(a){return o(Gn,function(t){return dn(o(e,a,t))},n)},r)}),j$=function(e){return p(ur,Y$(A),dn(T),e)},N$=ku,H$=$(function(e,r){var n=r;return ii(o(Gn,N$(e),n))}),W$=y(function(e,r,n){return o(Ut,function(a){return 0},j$(o(le,H$(e),r)))}),G$=y(function(e,r,n){return dn(0)}),I$=$(function(e,r){var n=r;return o(Ut,e,n)});qe.Task=Mu(V$,W$,G$,I$);var J$=li("Task"),Rt=$(function(e,r){return J$(o(Ut,e,r))}),O$=$v,q$=Jl,In={$:1},Gi=function(e){return{$:2,a:e}},ua={$:0},Ae=$(function(e,r){return{$:0,a:e,b:r}}),re=y(function(e,r,n){return r(e(n))}),Wr=function(e){var r=e.b.B;return r.a},Z$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return Q(o(Ae,r,{B:i,ab:c,T:o(A,a,n)}))}else return G},Ii=function(e){var r=e.b;return o(Ae,ua,r)},Xe=$(function(e,r){if(r.$)return e;var n=r.a;return n}),K$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?Ii(n):n;case 2:var i=a.a.cR;return(Y(i+r.eH,Wr(n).bA)>0?o(re,Z$,Xe(o(Ae,In,t))):Ur)(o(Ae,Gi({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ni,l.ey,Oe(r,{bA:l.bA+r.eH})),s=o(e,v,u);return o(Ae,ua,{B:P(v,s),ab:T,T:o(A,t.B,t.T)})}}),Ji=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),X$=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Q$=$(function(e,r){return xe(p(X$,e,r,T))}),Oi=y(function(e,r,n){if(r<=0)return T;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Q$,r-4,C))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Oi,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return g([_])}}),ef=$(function(e,r){return p(Oi,0,e,r)}),rf=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ae(xe(n),ae(g([a]),t)),c=o(ef,e,i),l=o(Ji,e,i);if(l.b){var u=l.a,v=l.b;return o(Ae,In,{B:u,ab:v,T:xe(c)})}else{var s=xe(c);if(s.b){var m=s.a,d=s.b;return o(Ae,In,{B:m,ab:T,T:d})}else return r}}),nf=function(e){var r=e.b;return o(Ae,In,r)},af=function(e){var r=e.b;return o(Ae,Gi({cR:Wr(e).bA}),r)},tf=$(function(e,r){switch(e.$){case 1:return nf(r);case 2:return Ii(r);case 3:return af(r);default:var n=e.a;return o(rf,n,r)}}),qi=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),of=$(function(e,r){return Oe(r,{av:e(r.av)})}),cf=function(e){return{$:3,a:e}},lf=function(e){return{$:2,a:e}},Zi=$(function(e,r){return{$:0,a:e,b:r}}),Ki=$(function(e,r){return{$:1,a:e,b:r}}),de=$(function(e,r){if(r.$)return G;var n=r.a;return Q(e(n))}),N=function(e){return e<0?-e:e},Et=lu,uf=y(function(e,r,n){return o(Xe,0/0,Et(o(e,r,n)))}),Xi=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),vf=Xl,Qi=function(e){return p(vf,A,T,e)},$f=$(function(e,r){var n=o(Xi,function(a){return a!=="0"&&a!=="."},Qi(r));return ae(e&&n?"-":"",r)}),ne=ai,Oa=Ol,ec=$u,rc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Hr(n);if(a.$===1)return"01";var t=a.a;return o(Oa,"0",rc(t))}else{var i=Ze(r);return i>=48&&i<57?o(Oa,ec(i+1),n):"0"}},qa=jl,ff=Il,va=function(e){return o(Oa,e,"")},nc=y(function(e,r,n){return e<=0?n:p(nc,e>>1,ae(r,r),e&1?ae(n,r):n)}),un=$(function(e,r){return p(nc,e,r,"")}),Za=y(function(e,r,n){return ae(n,o(un,e-yr(n),va(r)))}),Ka=Kl,ac=function(e){var r=o(kt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},sf=function(e){var r=o(kt,"e",ne(N(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Xe,0,Hi(o(E$,"+",t)?o(mn,1,t):t)),c=ac(n),l=c.a,u=c.b,v=ae(l,u),s=i<0?o(Xe,"0",o(de,function(m){var d=m.a,f=m.b;return d+("."+f)},o(de,qi(va),Hr(ae(o(un,N(i),"0"),v))))):p(Za,i+1,"0",v);return ae(e<0?"-":"",s)}else{var n=r.a;return ae(e<0?"-":"",n)}else return""},mf=y(function(e,r,n){if(qa(n)||ff(n))return ne(n);var a=n<0,t=ac(sf(N(n))),i=t.a,c=t.b,l=yr(i)+r,u=ae(o(un,-l+1,"0"),p(Za,l,"0",ae(i,c))),v=yr(u),s=o(Fe,1,l),m=o(e,a,p(Br,s,v,u)),d=p(Br,0,s,u),f=m?Ka(o(Xe,"1",o(de,rc,Hr(Ka(d))))):d,h=yr(f),b=f==="0"?f:r<=0?ae(f,o(un,N(r),"0")):Y(r,yr(c))<0?p(Br,0,h-r,f)+("."+p(Br,h-r,h,f)):ae(i+".",p(Za,r,"0",c));return o($f,a,b)}),tc=mf($(function(e,r){var n=Hr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ze(t))})),df=uf(tc),pf=y(function(e,r,n){var a=o(Dt,10,N(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(df,t,n)}),oc=zl,$a=$(function(e,r){e:for(;;){if(r.$===-2)return G;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(oc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return Q(a);default:var l=e,u=i;e=l,r=u;continue e}}}),U=Ce(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Qe={$:-2},Er=Ce(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return w(U,0,r,n,w(U,1,v,s,m,d),w(U,1,i,c,l,u))}else return w(U,e,i,c,w(U,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return w(U,0,v,s,w(U,1,h,b,C,L),w(U,1,r,n,d,t))}else return w(U,e,r,n,a,t)}),Xa=y(function(e,r,n){if(n.$===-2)return w(U,0,e,r,Qe,Qe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(oc,e,t);switch(u){case 0:return w(Er,a,t,i,p(Xa,e,r,c),l);case 1:return w(U,a,t,r,c,l);default:return w(Er,a,t,i,c,p(Xa,e,r,l))}}),en=y(function(e,r,n){var a=p(Xa,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return w(U,1,t,i,c,l)}else{var u=a;return u}}),bf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ic=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,C=d.e,L=v.e;return w(U,0,f,h,w(U,1,n,a,w(U,0,i,c,l,u),b),w(U,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var s=x.b,m=x.c,d=x.d,L=x.e;return w(U,1,n,a,w(U,0,i,c,l,u),w(U,0,s,m,d,L))}else return e},xo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,L=f.e;return w(U,0,i,c,w(U,1,u,v,s,m),w(U,1,n,a,d,w(U,0,h,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,d=_.e,F=e.e;F.a;var h=F.b,b=F.c,C=F.d,L=F.e;return w(U,1,n,a,w(U,0,i,c,x,d),w(U,0,h,b,C,L))}else return e},gf=pt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return w(U,n,l,u,v,w(U,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,xo(r)}else break e;else return c.a,c.d,xo(r);else break e;return r}}),kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,w(U,r,n,a,kn(t),l);var u=ic(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Er,v,s,m,kn(d),f)}else return Qe}else return w(U,r,n,a,kn(t),l)}else return Qe},rn=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Y(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,w(U,n,a,t,o(rn,e,i),c);var u=ic(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Er,v,s,m,o(rn,e,d),f)}else return Qe}else return w(U,n,a,t,o(rn,e,i),c);else return o(hf,e,ni(gf,e,r,n,a,t,i,c))}),hf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=bf(c);if(l.$===-1){var u=l.b,v=l.c;return w(Er,n,u,v,i,kn(c))}else return Qe}else return w(Er,n,a,t,i,o(rn,e,c))}else return Qe}),_f=$(function(e,r){var n=o(rn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return w(U,1,a,t,i,c)}else{var l=n;return l}}),wn=y(function(e,r,n){var a=r(o($a,e,n));if(a.$)return o(_f,e,n);var t=a.a;return p(en,e,t,n)}),Cf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(wn,r,de(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ki,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(wn,r,de(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Zi,P(i,c),p(pf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(wn,r,de(function(a){return a.$===3?cf(n):a}));default:var r=e.a,n=e.b;return o(wn,r,de(function(a){return a.$===2?lf(n):a}))}},yf=function(e){return of(Cf(e))},Lf=$(function(e,r){return o(le,yf(e),r)}),wf=$(function(e,r){return Oe(r,{ey:o(Lf,e,r.ey)})}),Sf=$(function(e,r){var n=r.a,a=r.b;return o(Ae,n,Oe(a,{B:o(qi,wf(e),a.B)}))}),xf=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Tf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ae,a,Oe(t,{B:o(xf,o(e,i.a,r),i)}))}),Pf=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Oe(a,{aL:!a.aL});case 2:var t=n.a;return Oe(a,{G:p(K$,e,t,a.G)});case 3:var i=n.a;return Oe(a,{G:o(Sf,i,a.G)});case 4:var c=n.a;return Oe(a,{G:p(Tf,r,c,a.G)});default:var l=n.a;return Oe(a,{G:o(tf,l,a.G)})}}),Mf=$(function(e,r){return o(Ae,ua,{B:P(e,r(e)),ab:T,T})}),zf=Du,To=zf(T),Jn=pu,vn=du,kf=Ru("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return we({bA:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(M,"clock",oe))},o(M,"devicePixelRatio",oe))},o(M,"dt",oe))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return we({ek:m,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Jn(vn)))},o(M,"left",Z))},o(M,"pressedKeys",Jn(vn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return we({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",oe))},o(M,"y",oe))))},o(M,"screen",o(z,function(r){return o(z,function(n){return we({eV:n,fS:r})},o(M,"height",oe))},o(M,"width",oe))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return we({eC:r,eD:e})},o(M,"deltaX",oe))},o(M,"deltaY",oe))))),Df=function(e){return{$:4,a:e}},Af={$:0},Bf=oi,Re=$(function(e,r){return o($i,e,Bf(r))}),E=Re("className"),Ff=function(e){var r=e.b.B;return r.b},On=Re("id"),Uf=Hu,qn=Uf,Rf=Wu,ee=Rf,Ef={$:1},Vf=function(e){return{$:3,a:e}},Yf=function(e){return{$:5,a:e}},Po=Tr("a"),Vt=Tr("button"),Mo=function(e){return o(Re,"href",Ju(e))},jf=gr("clip-rule"),he=gr("d"),Nf=gr("fill"),cc=ui("http://www.w3.org/2000/svg"),Hf=cc("svg"),Wf=gr("viewBox"),Gf=o(Gu,"http://www.w3.org/XML/1998/namespace","xml:space"),Me=Hf(g([Wf("0 0 24 24"),Nf("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),Gf("http://www.w3.org/2000/svg")])),If=gr("fill-rule"),_e=cc("path"),Lr={eB:Me(g([o(_e,g([he("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eP:Me(g([o(_e,g([he("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),eU:Me(g([o(_e,g([he("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fc:Me(g([o(_e,g([he("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(_e,g([he("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),fd:Me(g([o(_e,g([he("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(_e,g([he("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fn:Me(g([o(_e,g([he("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fo:Me(g([o(_e,g([he("M7 5V19L18 12L7 5Z")]),T)])),fp:Me(g([o(_e,g([he("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),fq:Me(g([o(_e,g([he("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fL:Me(g([o(_e,g([If("evenodd"),jf("evenodd"),he("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fM:Me(g([o(_e,g([he("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f0:Me(g([o(_e,g([he("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},Jf=function(e){return{$:0,a:e}},lc=vi,uc=$(function(e,r){return o(lc,e,Jf(r))}),Yt=function(e){return o(uc,"click",we(e))},zo=Re("target"),Of=Re("title"),Qa=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return w(U,n,a,o(e,a,t),o(Qa,e,i),o(Qa,e,c))}),qf=Na,cr=qf,Zf=function(e){return p(Mt,y(function(r,n,a){return o(A,n,a)}),T,e)},Kf=$(function(e,r){return{$:3,a:e,b:r}}),Xf=$(function(e,r){return{$:2,a:e,b:r}}),Qf=$(function(e,r){return{$:0,a:e,b:r}}),es=$(function(e,r){return{$:1,a:e,b:r}}),Gr=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),rs=S(Gr,0/255,0/255,0/255,1),ns=oi,vc=$(function(e,r){return o($i,e,ns(r))}),as=vc("checked"),He=Wl,ts=y(function(e,r,n){return ae(o(un,e-yr(n),va(r)),n)}),os=Bl,$c=function(e){var r=function(n){return n<10?Se(n):va(ec(87+n))};return e<16?r(e):ae($c(e/16|0),r(o(os,16,e)))},is=o(re,$c,o(ts,2,"0")),fc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b1:a,b7:n,cG:r}},cs=function(e){var r=fc(e),n=r.cG,a=r.b7,t=r.b1;return o(Cr,"",o(A,"#",o(le,o(re,He,is),g([n*255,a*255,t*255]))))},et=Re("htmlFor"),rt=$(function(e,r){if(r.$)return G;var n=r.a;return e(n)}),Zn=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),ls=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),fa=$(function(e,r){return p(ur,ls(e),T,r)}),sc=B(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),us=pv,vs=uu,$s=$(function(e,r){if(r.$)return me(e);var n=r.a;return te(n)}),fs=dv,ss=function(e){return o(fs,{et:!1,fe:!1},e)},sa=function(e){if(e.b){var r=e.a;return e.b,Q(r)}else return G},ms=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return te(e(n))}}),ds=function(e){return{$:2,a:e}},ps=function(e){return{$:0,a:e}},bs=function(e){return{$:1,a:e}},ha=$(function(e,r){return Ze(r)-Ze(e)}),_a=y(function(e,r,n){var a=Ze(n);return Y(Ze(e),a)<1&&Y(a,Ze(r))<1}),gs=$(function(e,r){var n=function(t){return Y(t,e)<0?te(t):me(bs(r))},a=p(_a,"0","9",r)?te(o(ha,"0",r)):p(_a,"a","z",r)?te(10+o(ha,"a",r)):p(_a,"A","Z",r)?te(10+o(ha,"A",r)):me(ps(r));return o(Zn,n,a)}),mc=$(function(e,r){var n=Hr(r);if(n.$===1)return te(0);var a=n.a,t=a.a,i=a.b;return o(Zn,function(c){return o(Zn,function(l){return te(c+l*e)},o(mc,e,i))},o(gs,e,t))}),hs=$(function(e,r){return 2<=e&&e<=36?o(mc,e,Ka(r)):me(ds(e))}),_s=hs(16),Cs=y(function(e,r,n){return S(Gr,e,r,n,1)}),ys=B(function(e,r,n,a){return S(Gr,e,r,n,a)}),Ir=Al,Ls=$(function(e,r){var n=o(Ir,10,e);return He(r*n)/n}),ws=nu,Ss=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Qi(n);if(a.b&&!a.b.b){var t=a.a;return vs(g([t,t]))}else return n};return o(re,ws,o(re,function(n){return o(de,function(a){return p(us,1,a,n)},ss(e))},o(re,rt(sa),o(re,de(function(n){return n.fE}),o(re,de(fa(Ur)),o(re,$s("Parsing hex regex failed"),Zn(function(n){var a=o(le,o(re,r,o(re,_s,ms(T$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return te(S(ys,t/255,c/255,u/255,o(Ls,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return te(p(Cs,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),Kn=Tr("input"),nt=Tr("label"),at=Re("name"),dc=$(function(e,r){return p(ur,M,r,e)}),xs=o(dc,g(["target","checked"]),Z),Ts=function(e){return o(uc,"change",o(Wn,e,xs))},Ps=function(e){return P(e,!0)},Ms=function(e){return{$:1,a:e}},zs=$(function(e,r){return o(lc,e,Ms(r))}),ks=o(dc,g(["target","value"]),vn),jt=function(e){return o(zs,"input",o(Wn,Ps,o(Wn,e,ks)))},pc=Re("max"),bc=Re("min"),gc=function(e){return o(Re,"step",e)},Xn=Re("type"),Nt=Re("value"),ko=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(W,T,g([o(nt,g([et(r)]),g([o(W,g([E("relative w-full")]),g([o(W,g([E("inline-block")]),g([cr(r)])),o(W,g([E("inline-block float-right")]),g([cr(ne(n))]))]))])),o(Kn,g([Xn("range"),o(ee,"width","100%"),On(r),at(r),bc(ne(a)),pc(ne(t)),Nt(ne(n)),gc(ne(i)),jt(o(re,Et,o(re,Xe(42),c)))]),T)]))},Ds=$(function(e,r){if(r.$)return e;var n=r.a;return n}),As=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(W,g([E("h-12 py-4")]),g([o(nt,g([E("block"),et(e)]),g([o(Kn,g([E("relative bottom-[1px] align-middle mr-2"),Xn("checkbox"),On(e),at(e),Ts(Kf(e)),as(c)]),T),cr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return ko({b9:e,cl:i,cp:t,ct:Qf(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return ko({b9:e,cl:i,cp:t,ct:o(re,He,es(e)),cP:1,cW:c});default:var c=r.a;return o(W,T,g([o(W,g([o(ee,"margin-bottom","6px")]),g([o(nt,g([et(e)]),g([cr(e)]))])),o(Kn,g([Xn("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),On(e),at(e),jt(function(l){return o(Xf,e,o(Ds,rs,Ss(l)))}),Nt(cs(c))]),T)]))}}),Bs=function(e){return o(W,g([E("p-4 border-y-[0.5px] border-white20")]),g([o(W,g([E("text-lg pb-2")]),g([cr(e.ff)])),o(W,g([E("pl-2 pr-2")]),Zf(o(Qa,As,e.av)))]))},Fs=function(e){return o(W,g([E("text-xs text-white60")]),o(le,Bs,e))},Us=function(e){return o(W,g([E("absolute left-[104px] bottom-2 text-sm text-white40")]),g([cr("clock: "+o(tc,3,Wr(e).bA))]))},Rs=function(e){e.a;var r=e.b.T;return o(de,function(n){return He(60/(Wr(e).bA-n))},o(de,o(re,z$,function(n){return n.bA}),sa(o(Ji,59,r))))},Es=function(e){return o(W,g([E("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Rs(e);if(r.$===1)return g([cr("... Fps")]);var n=r.a;return g([cr(Se(n)+" Fps")])}())},Vs=function(e){return{$:0,a:e}},Ys=function(e){var r=e.b.T;return Sr(r)},js=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Sr(r)+1+Sr(n)},Ns=function(e){return o(Kn,g([E("absolute w-full"),Xn("range"),bc(Se(0)),pc(Se(js(e)-1)),Nt(Se(Ys(e))),gc(Se(1)),jt(o(re,Et,o(re,Xe(42),o(re,He,Vs))))]),T)},Do={$:1},Ao={$:3},Bo={$:2},tt=function(e){return!e.b},hc=vc("disabled"),Ca=y(function(e,r,n){return o(Vt,g([E("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),E(n),hc(e),Yt(r)]),g([cr("REC")]))}),ya=y(function(e,r,n){return o(Vt,g([E("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),hc(e),Yt(n)]),g([o(W,g([E("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Hs=function(e){var r=e.a,n=e.b.ab;return o(W,g([E("py-1")]),g([function(){switch(r.$){case 0:return p(Ca,!1,Do,"text-red-500 font-bold");case 1:return p(Ca,!1,Bo,"text-white60 hover:text-white80 font-bold");default:return p(Ca,!0,Bo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(ya,tt(n),Lr.fo,Ao);case 1:return p(ya,tt(n),Lr.fo,Ao);default:return p(ya,!1,Lr.fn,Do)}}()]))},Ws=function(e){return o(W,g([E("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Ns(e),Hs(e),Es(e),Us(e)]))},Gs=function(e){var r=e.a;return wr(r,ua)},Is=$(function(e,r){var n=Gs(r.G)?o(W,T,T):o(W,g([E("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.fq.fU+.5*e.cM.fS)+"px"),o(ee,"top",ne(-e.fq.fY+.5*e.cM.eV)+"px")]),g([o(W,g([E(e.fq.e1?"text-black80":"text-black40")]),g([Lr.fq]))]));return o(W,T,g([n]))}),Js=$(function(e,r){var n=o(Vt,g([E(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Yt(Ef),Of("Distraction Free Mode")]),g([Lr.f0])),a=40,t=260,i=o(W,g([E("absolute w-8 bottom-12")]),g([o(Po,g([E("text-twitterBlue40 hover:text-twitterBlue"),Mo("https://twitter.com/AzizErkalSelman"),zo("_blank")]),g([Lr.fM]))])),c=80,l=o(W,g([E("absolute w-8 bottom-2")]),g([o(Po,g([E("text-githubCat40 hover:text-githubCat"),Mo("https://github.com/erkal/elm-3d-playground-exploration"),zo("_blank")]),g([Lr.eP]))])),u=e.cM.fS>640?J(e.cM.eV,a+t,e.cM.fS-(a+t)):J(e.cM.eV-c,a,e.cM.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(W,g([E("fixed w-10 h-10 p-1")]),g([n])):o(W,T,g([o(W,g([E("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),g([n,i,l])),o(W,g([E("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),g([o(qn,Vf,Fs(Wr(r.G).ey))])),o(W,g([E("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),g([o(qn,Yf,Ws(r.G))])),o(Is,e,r)]))}),Os=y(function(e,r,n){var a=Ff(n.G),t=Wr(n.G);return o(W,g([E("bg-black40"),E("select-none"),E("antialiased"),E("font-mono"),o(ee,"width",ne(t.cM.fS)+"px"),o(ee,"height",ne(t.cM.eV)+"px")]),g([o(W,g([E("fixed")]),g([o(qn,ji(Af),o(e,t,a))])),o(W,g([On("gui")]),g([o(Js,t,n),o(qn,Df,o(r,t,a))]))]))}),qs=Ue(function(e,r,n,a,t,i){var c=$(function(u,v){return P(S(Pf,r,i,u,v),To)}),l=function(u){var v=o(Ni,n,u.e0);return P({aL:u.e0.cM.fS<500,G:o(Mf,v,a)},To)};return O$({e$:l,fF:ji(kf(F$)),fN:c,fP:o(Os,e,t)})}),Zs=B(function(e,r,n,a){return se(qs,e,r,n,a,$(function(t,i){return o(W,T,T)}),y(function(t,i,c){return c}))}),Ks=function(e){return{}},Xs=y(function(e,r,n){return{av:n,e2:r,ff:e}}),_c=Qe,Qs=function(e){return p(sn,$(function(r,n){var a=r.a,t=r.b;return p(en,a,t,n)}),_c,e)},em=y(function(e,r,n){return p(Xs,e,r,Qs(n))}),Fo=em,hr=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Zi,P(a,t),n))}),rm=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Ki,P(a,t),n))}),nm=g([p(Fo,"Parameters",!0,g([p(rm,"number of blocks",P(10,60),25),p(hr,"frequency",P(1,20),10),p(hr,"minWidth",P(0,45),35),p(hr,"maxWidth",P(10,50),37),p(hr,"period",P(.5,10),5)])),p(Fo,"Colors and light",!0,g([p(hr,"lux",P(2,5),5),p(hr,"intensity above",P(0,300),0),p(hr,"intensity below",P(0,300),0)]))]),am=$(function(e,r){return r}),tm=Vl,$r=Gl,om=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Fe,N(c),o(Fe,N(i),N(t)));if(l){var u=t/l,v=i/l,s=c/l,m=$r(s*s+v*v+u*u);return Q({fU:s/m,fY:v/m,c$:u/m})}else return G}),Dn=function(e){return e},Ht=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),An=function(e){var r=e,n=o(Fe,N(r.fU),o(Fe,N(r.fY),N(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=$r(i*i+t*t+a*a);return Q({fU:i/c,fY:t/c,c$:a/c})}else return G},ot=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),im=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),Cc=$(function(e,r){var n=e,a=r;return Y(a,n)>0}),cm=$(function(e,r){var n=e,a=r;return Y(a,n)<0}),lm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),um=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),vm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},$n=0,yc={fU:0,fY:0,c$:0},$m=y(function(e,r,n){return o(rt,function(a){var t=o(lm,o(um,a,r),r);return o(rt,function(i){var c=o(Ht,r,e),l=o(im,n,c),u=o(Cc,$n,l)?c:o(cm,$n,l)?vm(c):yc;return o(de,function(v){return J(a,i,v)},An(u))},An(t))},An(e))}),fm=function(e){var r=e,n=N(r.c$),a=N(r.fY),t=N(r.fU);if(Y(t,a)<1)if(Y(t,n)<1){var i=$r(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=$r(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(Y(a,n)<1){var i=$r(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=$r(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},Lc=function(e){var r=fm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return P(r,c)},sm=function(e){var r=e;return r},Vr=function(e){return e},mm=$(function(e,r){var n=Lc(e),a=n.a,t=n.b;return Vr({cu:r,cZ:a,c_:t,c0:e})}),dm=function(e){var r=o(ot,e.aR,e.dc),n=sm(e.ee),a=o(Ht,r,n),t=p($m,r,n,a);if(t.$){var v=An(r);if(v.$){var m=Lc(e.ee),d=m.a,f=m.b;return Vr({cu:e.dc,cZ:f,c_:e.ee,c0:d})}else{var s=v.a;return o(mm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Vr({cu:e.dc,cZ:u,c_:l,c0:c})}},Wt={fU:0,fY:0,c$:0},pm=function(e){return{$:0,a:e}},Be=function(e){var r=e;return N(r)},Bn=function(e){var r=e;return .5*r},bm=El,gm=function(e){var r=e;return bm(r)},hm=function(e){var r=Bn(Be(e.ef)),n=gm(r);return{cF:pm(n),cX:e.cX}},or=function(e){return e},Gt=or({fU:0,fY:1,c$:0}),Yr=function(e){return e},_m=function(e){var r=e.aR,n=e.dc,a=e.ee;return hm({ef:Yr(2*tm(.5)),cX:dm({dc:Dn(n),aR:Dn(r),ee:o(Xe,Gt,o(om,Wt,Dn(a)))})})},Qn=Ul,Cm=$(function(e,r){return(r-Vi(r/e)*e)/e}),it=Fl,ym=function(e){return 2*it*e},ct=B(function(e,r,n,a){return e+(r-e)*(1+Qn(ym(o(Cm,n,a))))/2}),Lm=function(e){return _m({dc:{fU:10,fY:S(ct,-20,20,20,e.bA),c$:145},aR:{fU:0,fY:0,c$:0},ee:{fU:0,fY:1,c$:0}})},It=function(e){return e},wc=y(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),wm=function(e){var r=e;return r},Sm=function(e){var r=p(wc,1667,25e3,wm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return It({fU:n,fY:a})},xm=function(e){return e},Tm=function(e){return{$:0,a:e}},Pm=Tm,Mm={$:3},zm=Mm,km=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Dm=km,Am=$(function(e,r){return r.b?p(ur,A,r,e):e}),sr=function(e){return p(ur,Am,T,e)},Bm=$(function(e,r){return sr(o(le,e,r))}),Fm=function(e){return{$:1,a:e}},Um=Fm,Rm=function(e){return o(gr,"height",Se(e))},Em=function(e){return ju(Iu(e))},Vm=Em,Ym=function(e){return{$:2,a:e}},jm=Ym,Nm=function(e){return o(Cr,"",e)},Hm=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return He(l*1e3)/1e3},c=function(l){return He(l*1e4)/100};return Nm(g(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},Wm=$(function(e,r){switch(r.$){case 0:return o(Hv,e,r);case 1:return o(Wv,e,r);case 2:return o(Gv,e,r);case 3:return o(Iv,e,r);case 4:return o(Jv,e,r);default:return o(Ov,e,r)}}),Gm=$(function(e,r){switch(r.$){case 0:return o(hv,e,r);case 1:return o(_v,e,r);case 2:return o(Cv,e,r);case 3:return o(yv,e,r);case 4:return o(Lv,e,r);case 5:return o(wv,e,r);case 6:return o(Sv,e,r);case 7:return o(xv,e,r);default:return Tv(e)}}),Im=y(function(e,r,n){return p(Nv,e,r,n)}),Uo=function(e){var r=e;return r},Jr=o$,La=S(Jr,1,1,1,1),Ge=y(function(e,r,n){return o(le,function(a){return o(a,r,n)},e)}),Jm=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Om=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Jm,n*a/t,n,n*(1-a-t)/t)}),Jt=Qv,qm=function(e){var r=e.a,n=e.b,a=e.c;return p(Jt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ma=$(function(e,r){return qm(o(Om,e,r))}),Sc=$(function(e,r){return{dk:wr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),ar=$$,Zm=function(e){return ar({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},wa=Ce(function(e,r,n,a,t){var i=a.dk?1:-1,c=S(Jr,a.bW,a.bW,a.bW,i);return se(t,e,c,Zm(a),a.dk,r,n)}),xc=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Sc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(A,w(wa,e,r,n,a,h),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var C=t.b,L=o(A,w(wa,e,r,n,a,C),i.U);return{M:i.M,U:L,fz:i.fz};case 2:var _=t.a,x=o(A,w(wa,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:x};default:var F=t.a;return p(sn,S(xc,e,r,n,a),i,F)}}),Km=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Tc=Km,Ot=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Xm=function(e){var r=e.Z,n=e.W,a=e.V;return S(Ot,518,r,n,a)},Qm=$(function(e,r){return{$:6,a:e,b:r}}),ed=Qm,Pc=g([Xm({V:1,W:0,Z:!1}),S(Tc,!1,!1,!1,!1),o(ed,0,1)]),jr=519,qt=8,Mc=15,Rr=7681,rd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ye=gv,nd=$(function(e,r){return{$:0,a:e,b:r}}),ad=nd({c8:1,dh:0,dQ:5}),Fr=Kv,td=ad(g([{dY:o(Fr,-1,-1)},{dY:o(Fr,1,-1)},{dY:o(Fr,-1,1)},{dY:o(Fr,1,1)}])),od={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},id=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Zt=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bl),o(re,l(v.a8),o(re,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(id,a,t,i)))}),Kt=function(e){return p(Zt,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Xt=function(e){return w(ye,g([Kt(e),S(Tc,!1,!1,!1,!1)]),od,rd,td,{})},cd=Xt({a8:Rr,ci:0,cH:qt,bl:jr,cY:Mc,bt:Rr,bu:Rr}),ld=516,Ro=5386,pe=7680,ud=function(e){return o(Ir,2,e+4)},zc=function(e){return Xt({a8:pe,ci:Mc,cH:qt,bl:ld,cY:ud(e),bt:Ro,bu:Ro})},vd=y(function(e,r,n){return sr(g([p(Ge,e,n,Pc),g([zc(r),cd])]))}),$d=$(function(e,r){return sr(o(Di,vd(e),r))}),fd=function(e){var r=e.Z,n=e.W,a=e.V;return S(Ot,513,r,n,a)},sd=fd({V:1,W:0,Z:!0}),md=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},dd=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return md(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},pd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Eo=$(function(e,r){var n=e,a=r;return p(pd,32774,n,a)}),bd=1,Vo=771,gd=770,Qt=dd({bv:0,aH:o(Eo,bd,Vo),by:0,bB:o(Eo,gd,Vo),bF:0,bU:0}),zr=g([sd,Qt]),hd=function(e){var r=e;return r.dJ},_d=function(e){var r=e;return r.dK},kc=function(e){var r=e;return r.dL},Cd=function(e){var r=e;return r.dM},yd=function(e){var r=e;return r.dN},Dc=function(e){var r=e;return r.dO},ir=$(function(e,r){var n=e,a=r;return a-n}),Ac=function(e){return J(o(ir,Cd(e),hd(e)),o(ir,yd(e),_d(e)),o(ir,Dc(e),kc(e)))},da=function(e){var r=e;return r.cu},Yo=function(e){var r=e;return da(r)},Ld=function(e){return e},wd=function(e){return Vr({cu:Ld({fU:e.H,fY:e.I,c$:e.J}),cZ:or({fU:e.q,fY:e.r,c$:e.s}),c_:or({fU:e.t,fY:e.u,c$:e.v}),c0:or({fU:e.w,fY:e.x,c$:e.y})})},Sa=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),Bc=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,m=n.c_,d=m,f=n.cZ,h=f;return{fU:c*h.fU+l*h.fY+u*h.c$,fY:c*d.fU+l*d.fY+u*d.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),pn=function(e){var r=e;return r.cZ},bn=function(e){var r=e;return r.c_},gn=function(e){var r=e;return r.c0},Fc=$(function(e,r){return{cu:o(Bc,e,da(r)),cZ:o(Sa,e,pn(r)),c_:o(Sa,e,bn(r)),c0:o(Sa,e,gn(r))}}),lt=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),ea=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Fe,n,a)}),Sd=$(function(e,r){return Y(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(Sd,n,a)}),xd=$(function(e,r){var n=ea(r),a=ea(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),Pe=function(e){var r=e;return r},Td=function(e){var r=e;return J(r.fU,r.fY,r.c$)},Fn=$(function(e,r){var n=e,a=r;return a+n}),Pd=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Bn(Be(a)),c=Bn(Be(n)),l=Bn(Be(t)),u=Td(r),v=u.a,s=u.b,m=u.c;return{dJ:o(Fn,c,v),dK:o(Fn,i,s),dL:o(Fn,l,m),dM:o(ir,c,v),dN:o(ir,i,s),dO:o(ir,l,m)}}),jo=B(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,m=Pe(gn(e)),d=N(l*m.fU)+N(c*m.fY)+N(i*m.c$),f=Pe(bn(e)),h=N(l*f.fU)+N(c*f.fY)+N(i*f.c$),b=Pe(pn(e)),C=N(l*b.fU)+N(c*b.fY)+N(i*b.c$),L=o(Pd,J(C,h,d),o(Bc,e,p(lt,s,v,u)));if(a.$)return Q(L);var _=a.a;return Q(o(xd,_,L))}),ut=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=S(jo,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=S(jo,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=S(ut,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(Fc,wd(v),e),d=r*v.bW,f=e,h=r,b=S(ut,m,d,n,g([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),hn=e$,_n=r$,Cn=n$,Uc=function(e){return{$:4,a:e}},Md=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),eo=function(e){return Uc(o(Md,e,T))},zd={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},kd=function(e){var r=e;return r},No=Xt({a8:Rr,ci:0,cH:qt,bl:jr,cY:255,bt:Rr,bu:Rr}),Dd=function(e){var r=e,n=o(Fe,N(r.fU),o(Fe,N(r.fY),N(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=$r(i*i+t*t+a*a);return c*n}else return $n},Le={by:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fU:0,fY:0,c$:0},ke=$(function(e,r){var n=e,a=r;return ar({ds:n.fU,dt:n.bU,du:a.fU,dv:a.bU,dw:n.fY,dx:n.bF,dy:a.fY,dz:a.bF,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),Qr=P({bd:o(ke,Le,Le),bK:o(ke,Le,Le),bL:o(ke,Le,Le),bM:o(ke,Le,Le)},S(Jr,0,0,0,0)),vr=$(function(e,r){var n=r;return e*n}),Ho=function(e){var r=e;return-r},Rc=514,Ec=function(e){var r=e.Z,n=e.W,a=e.V;return S(Ot,515,r,n,a)},Vc=240,Ad=g([Ec({V:1,W:0,Z:!0}),Kt({a8:pe,ci:Vc,cH:0,bl:Rc,cY:0,bt:pe,bu:pe}),Qt]),Bd=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=Be(a),l=c,u=Be(t),v=u,s=n.cF;if(s.$){var d=s.a;return qa(v)?ar({ds:2/(i*d),dt:0,du:0,dv:0,dw:0,dx:2/d,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):ar({ds:2/(i*d),dt:0,du:0,dv:0,dw:0,dx:2/d,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var m=s.a;return qa(v)?ar({ds:1/(i*m),dt:0,du:0,dv:0,dw:0,dx:1/m,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):ar({ds:1/(i*m),dt:0,du:0,dv:0,dw:0,dx:1/m,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Sn=$(function(e,r){return(1&e>>r)===1?0:1}),Fd=function(e){return g([Ec({V:1,W:0,Z:!0}),Kt({a8:pe,ci:Vc,cH:e,bl:Rc,cY:0,bt:pe,bu:pe}),Qt])},Ud=y(function(e,r,n){return sr(o(le,function(a){var t=a<<4,i=S(Jr,o(Sn,a,0),o(Sn,a,1),o(Sn,a,2),o(Sn,a,3));return p(Ge,e,P(r,i),Fd(t))},o(oa,1,o(Ir,2,n)-1)))}),ra=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},vt=function(e){var r=e;return r},Rd=f$,Wo=function(e){var r=e;return ra(gn(r))},Yc=or({fU:1,fY:0,c$:0}),Ed=Yc,jc=Gt,Nc=or({fU:0,fY:0,c$:1}),Vd=Nc,Yd={cu:Wt,cZ:Ed,c_:jc,c0:Vd},Or=function(e){var r=e;return r},jd=function(e){var r=Or(da(e)),n=Pe(gn(e)),a=Pe(bn(e)),t=Pe(pn(e));return ar({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},Nd=$(function(e,r){var n=r;return jd(o(Fc,n,e))}),Hd=function(e){return o(Nd,Yd,e)},Wd=function(e){var r=e;return r.cX},Gd=function(e){var r=e;return pn(r)},Id=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Jd=function(e){var r=e;return bn(r)},Od=function(e){var r=Wd(e.es),n=Vr({cu:Yo(r),cZ:Gd(r),c_:Jd(r),c0:ra(Wo(r))}),a=eo(e.aP),t=a,i=S(ut,n,1,G,g([t]));if(i.$===1)return T;var c=i.a,l=Hd(r),u=o(vr,.99,o(ce,Be(e.ex),Ho(kc(c)))),v=Ac(c),s=v.a,m=v.b,d=v.c,f=Dd(p(Id,s,m,d)),h=o(vr,1.01,o(Fn,f,Ho(Dc(c)))),b=o(Bd,e.es,{en:e.en,eO:h,fg:u}),C=Rd(b).dH,L=C?Pe(ra(Wo(r))):vt(Yo(r)),_=function(){var ue=e.fK;switch(ue.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var ve=ue.a;return P(3,ve);case 4:var ve=ue.a;return P(4,ve);default:return P(5,0)}}(),x=_.a,F=_.b,O=e.eM,H=O,j=o(ma,H,e.fR),q=j,I=ar({ds:0,dt:L.fU,du:hn(q),dv:e.d8,dw:0,dx:L.fY,dy:_n(q),dz:kd(f),dA:0,dB:L.c$,dC:Cn(q),dD:x,dE:0,dF:C,dG:0,dH:F}),V=se(xc,I,l,b,zd,t,{M:T,U:T,fz:T}),K=e.e8;switch(K.$){case 0:var X=K.a;return sr(g([p(Ge,V.M,P(X,La),zr),p(Ge,V.U,Qr,zr)]));case 1:var X=K.a;return sr(g([p(Ge,V.M,Qr,zr),g([No]),p(Ge,V.fz,X.bd,Pc),g([zc(0)]),p(Ge,V.M,P(X,La),Ad),p(Ge,V.U,Qr,zr)]));default:var be=K.a,ge=K.b;return sr(g([p(Ge,V.M,P(ge,La),zr),g([No]),o($d,V.fz,be),p(Ud,V.M,ge,Sr(be)),p(Ge,V.U,Qr,zr)]))}},qd=function(e){return o(gr,"width",Se(e))},Zd=$(function(e,r){var n=g([Um(1),jm(0),Pm(!0),S(Dm,0,0,0,0)]),a=function(){var x=e.el;switch(x.$){case 0:return J(n,"0",1);case 1:return J(o(A,zm,n),"1",1);default:var F=x.a;return J(n,"0",F)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Uo(v),m=o(ee,"height",Se(s)+"px"),d=Uo(u),f=d/s,h=o(Bm,function(x){return Od({en:f,es:e.es,ex:e.ex,aP:x.aP,eM:x.eM,e8:x.e8,d8:c,fK:x.fK,fR:x.fR})},r),b=o(ee,"width",Se(d)+"px"),C=e.aI,L=C,_=Hm(L);return p(Vm,"div",g([o(ee,"padding","0px"),b,m]),g([P(i,p(Im,t,g([qd(He(d*c)),Rm(He(s*c)),b,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),Kd=function(e){return{$:2,a:e}},Xd=function(e){return Kd(e)},Qd=function(e){return o(Zd,{el:Xd(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},g([{aP:e.aP,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},Go=function(e){return e},Un=function(e){return e},e0=$(function(e,r){return Qd({el:e.el,aI:xm(e.ep),es:e.es,ex:Un(e.ex),b5:e.b5,aK:P(Go(He(e.cM.fS)),Go(He(e.cM.eV))),aP:r,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),r0=S(Gr,186/255,189/255,182/255,1),Hc=function(e){return e},n0=$(function(e,r){var n=e,a=Pe(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(ma,r.bH,r.aJ),u=l;return{by:Cn(u),eu:n,bF:_n(u),cD:0,bU:hn(u),cT:1,fU:-t,fY:-i,c$:-c}}),$t=Rl,Wc=$(function(e,r){var n=e,a=r,t=Qn(a);return{fU:t*Qn(n),fY:t*$t(n),c$:$t(a)}}),a0=function(e){return o(n0,Hc(!0),{aJ:e.aJ,eF:o(Wc,Yr(e.bx),Yr(e.bD)),bH:e.bH})},t0=function(e){return e},o0=function(e){return t0(1.2*o(Ir,2,e))},xa=It({fU:.37208,fY:.37529}),i0=$(function(e,r){return{$:2,a:e,b:r}}),Gc=function(e){return{$:0,a:e}},xn=function(e){var r=e;return r},c0=function(e){var r=e;return r.eu},l0=Gc(Qr.a),u0=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(A,a,i),c):P(i,o(A,a,c))});return p(ur,n,P(T,T),r)}),v0=function(e){var r=e;return ar({ds:r.fU,dt:r.bU,du:0,dv:0,dw:r.fY,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},$0=ie(function(e,r,n,a,t,i,c,l){var u=o(u0,c0,g([xn(e),xn(r),xn(n),xn(a)])),v=u.a,s=u.b;if(v.b){var m=ae(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(i0,o(le,v0,v),{bd:o(ke,d,h),bK:o(ke,C,_),bL:o(ke,t,i),bM:o(ke,c,l)})}else return l0}else return Gc({bd:o(ke,e,r),bK:o(ke,n,a),bL:o(ke,t,i),bM:o(ke,c,l)})}),f0=B(function(e,r,n,a){return aa($0,e,r,n,a,Le,Le,Le,Le)}),s0=$(function(e,r){return o(de,function(n){if(n.$)return 0;var a=n.b;return a},o($a,e,r.av))}),m0=$(function(e,r){return o(Xe,0,sa(o(fa,s0(e),r)))}),d0=$(function(e,r){return o(m0,e,r.ey)}),Ye=d0,p0={$:5},b0=p0,g0=It({fU:.44757,fY:.40745}),h0=function(e){return e},Io=function(e){return e},Ta=function(e){return e},_0={$:1},C0=_0,y0=$(function(e,r){var n=e,a=Or(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(ma,r.bH,r.aJ),u=l;return{by:Cn(u),eu:n,bF:_n(u),cD:0,bU:hn(u),cT:2,fU:t,fY:i,c$:c}}),Jo=function(e){return o(y0,Hc(!0),{aJ:e.aJ,bH:e.bH,dY:Dn(e.dY)})},L0=function(e){var r=e;return r},w0=function(e){var r=e;return L0(r.eo)},Ic=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),S0=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),x0=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),T0=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),P0=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),M0=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),z0=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),k0=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return S(z0,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return S(Ic,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return S(S0,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return S(x0,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return S(M0,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return S(T0,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return S(P0,n,a,t,1);case 8:return e;case 9:return e;default:return e}},D0={$:0},A0=ie(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ea(c(u)),m=o(fe,s.dM,e),d=o(ce,s.dJ,r),f=o(fe,s.dN,n),h=o(ce,s.dK,a),b=o(fe,s.dO,t),C=o(ce,s.dL,i),L=c,_=v;e=m,r=d,n=f,a=h,t=b,i=C,c=L,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),B0=y(function(e,r,n){var a=ea(e(r));return aa(A0,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),Pa=$(function(e,r){var n=e,a=r;return Y(a,n)<1}),F0=function(e){return o(Pa,e.dJ,e.dM)&&o(Pa,e.dK,e.dN)&&o(Pa,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},na=function(e){var r=e;return r},nn=function(e){var r=e;return r.fU},an=function(e){var r=e;return r.fY},tn=function(e){var r=e;return r.c$},U0=function(e){var r=na(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=an(n),l=tn(n),u=nn(a),v=an(a),s=tn(a),m=nn(t),d=an(t),f=tn(t);return F0({dJ:o(ce,i,o(ce,u,m)),dK:o(ce,c,o(ce,v,d)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,m)),dN:o(fe,c,o(fe,v,d)),dO:o(fe,l,o(fe,s,f))})},Jc=a$,mr=function(e){return Jc(Or(e))},Oc=function(e){var r=e;return r},qc=function(e){return Jc(Oc(e))},Zc=function(e){return e},R0=$(function(e,r){var n=e,a=r,t=o(Fe,N(a.fU),o(Fe,N(a.fY),N(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=$r(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return yc}),E0=R0(Zc(1)),Kc=y(function(e,r,n){var a=o(ot,r,n),t=o(ot,e,r);return E0(o(Ht,a,t))}),V0=function(e){var r=na(e),n=r.a,a=r.b,t=r.c,i=qc(p(Kc,n,a,t));return J({o:i,dY:mr(n)},{o:i,dY:mr(a)},{o:i,dY:mr(t)})},Y0=$(function(e,r){return{$:2,a:e,b:r}}),j0=Y0({c8:3,dh:0,dQ:4}),N0=function(e){if(e.b){var r=e.a,n=e.b,a=j0(o(le,V0,e)),t=p(B0,U0,r,n);return S(Ic,t,e,a,0)}else return D0},ze=y(function(e,r,n){return J(e,r,n)}),Ie=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Xc=function(){var e=Un(1),r=Un(1),n=Un(1),a=o(vr,-.5,e),t=o(vr,-.5,r),i=o(vr,-.5,n),c=p(Ie,i,t,a),l=o(vr,.5,e),u=p(Ie,i,t,l),v=o(vr,.5,r),s=p(Ie,i,v,a),m=p(Ie,i,v,l),d=o(vr,.5,n),f=p(Ie,d,t,a),h=p(Ie,d,v,a),b=p(Ie,d,t,l),C=p(Ie,d,v,l);return k0(N0(g([p(ze,c,h,f),p(ze,c,s,h),p(ze,u,b,C),p(ze,u,C,m),p(ze,f,h,C),p(ze,f,C,b),p(ze,c,m,s),p(ze,c,u,m),p(ze,c,f,b),p(ze,c,b,u),p(ze,s,C,h),p(ze,s,m,C)])))}(),Tn={$:0},H0=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),W0=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=qc(p(Kc,u,l,c)),s={o:v,dY:mr(u)},m={o:v,dY:mr(l)},d={o:v,dY:mr(c)};return o(A,s,o(A,m,o(A,d,n)))}),G0=function(e){var r=e;return r.D},I0=B(function(e,r,n,a){if(r.$===1)return G;var t=r.a;if(n.$===1)return G;var i=n.a;if(a.$===1)return G;var c=a.a;return Q(p(e,t,i,c))}),ft=4294967295>>>32-ln,st=Tl,J0=y(function(e,r,n){e:for(;;){var a=ft&r>>>e,t=o(st,a,n);if(t.$){var v=t.a;return o(st,ft&r,v)}else{var i=t.a,c=e-ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),O0=function(e){return e>>>5<<5},q0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Y(e,n)>-1?G:Y(e,O0(n))>-1?Q(o(st,ft&e,i)):Q(p(J0,a,e,t))}),Z0=function(e){var r=e;return r.ah},Ma=$(function(e,r){return o(q0,e,Z0(r))}),K0=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return S(I0,y(function(c,l,u){return J(c,l,u)}),o(Ma,a,e),o(Ma,t,e),o(Ma,i,e))};return o(fa,r,G0(e))},X0=y(function(e,r,n){e:for(;;){var a=o(At,Te,e),t=a.a,i=a.b;if(Y(Ja(t),Te)<0)return o(Yi,!0,{z:r,l:n,p:t});var c=i,l=o(A,Ei(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Qc=function(e){return e.b?p(X0,e,T,0):Ui},Q0=y(function(e,r,n){return e(r(n))}),ep=$(function(e,r){return!o(Xi,o(Q0,q$,e),r)}),rp=$(function(e,r){return p(ur,$(function(n,a){return e(n)?o(A,n,a):a}),T,r)}),np=function(e){var r=e.a;return r},ap=$(function(e,r){var n=np(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Y(i,n)<0&&c>=0&&Y(c,n)<0&&l>=0&&Y(l,n)<0};return o(ep,a,r)?{D:r,ah:e}:{D:o(rp,a,r),ah:e}}),tp=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),op=tp({c8:1,dh:3,dQ:4}),Rn=$(function(e,r){var n=vt(r),a=vt(e);return P(J(a.fU,a.fY,a.c$),J(n.fU,n.fY,n.c$))}),Oo=p(Jt,0,0,0),za=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o($a,o(Rn,e,r),t);if(v.$){var m={o:Oo,dY:mr(r)},d={o:Oo,dY:mr(e)},f=u+1,h=u;return J(o(A,J(n,h,f),o(A,J(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return J(o(A,J(n,s,a),c),l,u)}}),ip=Ce(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,C=e,L=r,_=v,x=a+3,F=se(za,s,d,f,b,r,se(za,m,s,h,f,r,se(za,d,m,b,h,r,t)));e=C,r=L,n=_,a=x,t=F;continue e}else{var O=t,H=O.a,j=O.b;return P(H,xe(j))}}),cp=Ce(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,C=p(en,o(Rn,d,s),f,p(en,o(Rn,s,m),h,p(en,o(Rn,m,d),b,t))),L=o(A,J(b,h,f),a),_=e,x=v,F=n+3,O=L,H=C;e=_,r=x,n=F,a=O,t=H;continue e}else return J(a,t,n)}),_r=y(function(e,r,n){var a=K0(n),t=p(ur,W0(r),T,a),i=w(cp,r,a,0,T,_c),c=i.a,l=i.b,u=i.c,v=w(ip,r,l,a,0,J(c,T,u)),s=v.a,m=v.b,d=tt(m)?t:ae(t,m);return p(H0,e,o(ap,Qc(d),s),o(op,d,s))}),qo=function(e){return{D:o(le,function(r){return J(3*r,3*r+1,3*r+2)},o(oa,0,Sr(e)-1)),ah:Qc(sr(o(le,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},lp=function(e){switch(e.$){case 0:return Tn;case 1:var a=e.a,r=e.b,n=o(le,na,r);return p(_r,a,Ur,qo(n));case 2:var a=e.a,r=e.b,n=o(le,na,r);return p(_r,a,Ur,qo(n));case 3:var a=e.a,t=e.b;return p(_r,a,Ur,t);case 4:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(_r,a,function(i){return i.dY},t);case 8:return Tn;case 9:return Tn;default:return Tn}},Zo=lp(Xc),up=function(e){var r=e;return r.aK},el={$:0},k=el,We=$(function(e,r){return{$:1,a:e,b:r}}),vp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},$p=1029,fp=function(e){return{$:5,a:e}},rl=function(e){var r=e;return fp(r)},sp=rl($p),mp=1028,dp=rl(mp),er=y(function(e,r,n){return r===1?e?o(A,sp,n):o(A,dp,n):n}),nl={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ka=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){return w(ye,p(er,l,a,m),nl,vp,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),pp={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},al={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rr=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){return w(ye,p(er,l,a,m),al,pp,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),tl=$(function(e,r){return{$:3,a:e,b:r}}),bp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},ol={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},gp=B(function(e,r,n,a){return o(tl,n,ie(function(t,i,c,l,u,v,s,m){return w(ye,m,ol,bp,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),hp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},ro=function(e){var r=e;return r},il=t$,nr=Ce(function(e,r,n,a,t){return o(We,n,ie(function(i,c,l,u,v,s,m,d){return w(ye,p(er,u,t,d),al,hp,a,{aN:o(il,ro(r),e),b:l,c,d:s,e:i,f:v})}))}),_p={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Cp=Ce(function(e,r,n,a,t){return o(tl,a,ie(function(i,c,l,u,v,s,m,d){return w(ye,d,ol,_p,t,{aN:o(il,ro(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),yp={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},cl={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Pn=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(ye,p(er,l,a,m),cl,yp,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),ll={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},ul={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Lp=Ue(function(e,r,n,a,t,i){return o(We,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return w(ye,p(er,v,i,f),ul,ll,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ck:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),vl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},wp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(We,u,ie(function(m,d,f,h,b,C,L,_){var x=L.a,F=L.b;return w(ye,p(er,h,s,_),ul,vl,v,{b0:e,b2:r,b3:i,b4:a,P:F,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:f,c:d,aW:c,d:C,cL:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Sp={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},Mn=Ue(function(e,r,n,a,t,i){return o(We,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return w(ye,p(er,v,i,f),cl,Sp,t,{b$:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cn:n,b:u,c:l,d:m,cK:r,e:c,f:s})}))}),xp=function(e){return{$:0,a:e}},Ko=$(function(e,r){return{$:1,a:e,b:r}}),on=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),Tp=function(e){return S(Jr,hn(e),_n(e),Cn(e),1)},no=S(Jr,0,0,0,0),En=$(function(e,r){if(r.$){var a=r.a.C;return P(a,no)}else{var n=r.a;return P(e,Tp(n))}}),Pp=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Ko,P(t,no),o(on,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ko,o(En,t,e),o(on,t,r))}else{var a=n.a.a;return n.b.a,xp(a)}}),Mp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),zp=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),kp=function(e){return o(Fr,e,1)},mt=o(Fr,0,0),kr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,mt)}else{var n=r.a;return P(e,kp(n))}}),Dp=B(function(e,r,n,a){var t=S(zp,e,r,n,a);if(t.a.$){var u=t.a.a.C;return S(zn,P(u,no),o(kr,u,r),o(kr,u,n),o(on,u,a))}else if(t.b.$){var u=t.b.a.C;return S(zn,o(En,u,e),P(u,mt),o(kr,u,n),o(on,u,a))}else if(t.c.$){var u=t.c.a.C;return S(zn,o(En,u,e),o(kr,u,r),P(u,mt),o(on,u,a))}else if(t.d.$){var u=t.d.a.C;return S(zn,o(En,u,e),o(kr,u,r),o(kr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Mp,i,c,l)}}),Ap={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},Da=Ce(function(e,r,n,a,t){return o(We,n,ie(function(i,c,l,u,v,s,m,d){return w(ye,p(er,u,t,d),nl,Ap,a,{bZ:ro(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),$l={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Bp=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(ye,p(er,l,a,m),$l,ll,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Fp=bt(function(e,r,n,a,t,i,c,l,u){return o(We,c,ie(function(v,s,m,d,f,h,b,C){var L=b.a,_=b.b;return w(ye,p(er,d,u,C),$l,vl,l,{b0:e,b2:r,b3:i,b4:a,P:_,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,co:t,b:m,c:s,aW:e,d:h,cL:n,e:v,a$:0,f})}))}),ao=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Up=function(e){var r=e;return p(ao,r.dM,r.dJ,.5)},Rp=function(e){var r=e;return p(ao,r.dN,r.dK,.5)},Ep=function(e){var r=e;return p(ao,r.dO,r.dL,.5)},Vp=function(e){return p(Ie,Up(e),Rp(e),Ep(e))},R=function(e){var r=Ac(e),n=r.a,a=r.b,t=r.c;return{ev:Or(Vp(e)),eR:n/2,eS:a/2,eT:t/2}},Yp=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(ka,l,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ka,l,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ka,l,R(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(rr,n,R(t),c,a);case 8:var t=r.a,c=r.c;return S(rr,n,R(t),c,0);case 9:var t=r.a,c=r.c;return S(rr,n,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(gp,n,i,R(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return w(Da,l,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Da,l,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Da,l,v,R(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(nr,u,v,R(t),c,a);case 8:var t=r.a,c=r.c;return w(nr,u,v,R(t),c,0);case 9:var t=r.a,c=r.c;return w(nr,u,v,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(Cp,u,v,i,R(t),c)}}case 2:e.a;var s=e.b,H=e.c,m=o(Pp,s,H);if(m.$){var h=m.a,b=h.a;h.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return S(Bp,b,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(Lp,b,L,_,R(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var d=m.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return S(Pn,d,R(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var x=e.b,F=e.c,O=e.d,H=e.e,j=S(Dp,x,F,O,H);if(j.$){var K=j.a,X=K.a,be=K.b,ge=j.b,ue=ge.a,ve=ge.b,Ee=j.c,Ve=Ee.a,Pr=Ee.b,Mr=j.d,L=Mr.a,_=Mr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return yl(Fp,X,be,ue,ve,Ve,Pr,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return wp(X)(be)(ue)(ve)(Ve)(Pr)(L)(_)(R(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var q=j.a,I=j.b,V=j.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Mn,q,I,V,R(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Aa=function(e){var r=e;return r.fU},Ba=function(e){var r=e;return r.fY},Fa=function(e){var r=e;return r.c$},jp=function(e){var r=e,n=Fa(r.c0),a=Ba(r.c0),t=Aa(r.c0),i=Fa(r.c_),c=Ba(r.c_),l=Aa(r.c_),u=Fa(r.cZ),v=Ba(r.cZ),s=Aa(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Np=function(e){var r=Or(da(e)),n=Pe(gn(e)),a=Pe(bn(e)),t=Pe(pn(e));return{dk:jp(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,H:r.fU,I:r.fY,J:r.c$,bW:1}},Dr=$(function(e,r){return{$:5,a:e,b:r}}),to=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Sc,a,e);return o(Dr,i,t);case 1:return o(Dr,e,n);case 3:return o(Dr,e,n);case 2:return o(Dr,e,n);default:return o(Dr,e,n)}}),Hp=$(function(e,r){return o(to,Np(e),r)}),fl=function(e){return{$:2,a:e}},Wp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),Gp=c$,Ip=i$,Xo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=Ip(a),h=f.fU,b=f.fY,C=f.c$,L=f.ei,_=Gp({ei:L,fU:h*s,fY:b*m,c$:C*d});return aa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},dt=$(function(e,r){switch(r.$){case 0:return el;case 5:var n=r.a,a=r.b;return o(Dr,n,o(dt,e,a));case 1:var t=r.a,i=r.b;return o(We,o(Wp,e,t),o(Xo,e,i));case 3:return r;case 2:var i=r.a;return fl(o(Xo,e,i));default:var c=r.a;return Uc(o(le,dt(e),c))}}),Jp=$(function(e,r){var n=r;return o(dt,e,n)}),Op={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},sl=7683,ml=7682,qp=p(Zt,{ci:0,cH:0,cY:15},{a8:pe,bl:jr,bt:pe,bu:sl},{a8:pe,bl:jr,bt:pe,bu:ml}),Zp=p(Zt,{ci:0,cH:0,cY:15},{a8:pe,bl:jr,bt:pe,bu:ml},{a8:pe,bl:jr,bt:pe,bu:sl}),Kp=$(function(e,r){return e?o(A,Zp,r):o(A,qp,r)}),Xp={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},Qp=function(e){if(e.$){var r=e.c;return Q(ie(function(n,a,t,i,c,l,u,v){return w(ye,o(Kp,i,v),Xp,Op,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return G},Qo=function(e){var r=Qp(e);if(r.$)return k;var n=r.a;return fl(n)},e1=B(function(e,r,n,a){var t=o(Yp,n,Xc),i=function(){var s=P(e,r);return s.a?s.b?eo(g([t,Qo(Zo)])):t:s.b?Qo(Zo):k}(),c=up(a),l=c.a,u=c.b,v=c.c;return o(Hp,w0(a),o(Jp,J(l,u,v),i))}),r1=$(function(e,r){return S(e1,!0,!0,e,r)}),Ua=$(function(e,r){var n=e,a=r;return Y(a,n)>-1}),Ra=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),n1=or({fU:-1,fY:0,c$:0}),a1=or({fU:0,fY:-1,c$:0}),t1=or({fU:0,fY:0,c$:-1}),o1=Ue(function(e,r,n,a,t,i){var c=o(Ua,n,i)?Nc:t1,l=o(Ua,r,t)?Gt:a1,u=o(Ua,e,a)?Yc:n1,v=J(Be(o(ir,e,a)),Be(o(ir,r,t)),Be(o(ir,n,i))),s=p(Ie,o(Ra,e,a),o(Ra,r,t),o(Ra,n,i)),m=Vr({cu:s,cZ:u,c_:l,c0:c});return{eo:m,aK:v}}),i1=$(function(e,r){return se(o1,nn(e),an(e),tn(e),nn(r),an(r),tn(r))}),dl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=J(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(r1,e,o(i1,p(lt,-c,-l,-u),p(lt,c,l,u)))}),c1=S(Gr,211/255,215/255,207/255,1),ei=function(e){return{$:0,a:e}},l1=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ea=function(e){return p(wc,0,1,e<=.04045?e/12.92:o(Ir,(e+.055)/1.055,2.4))},u1=function(e){var r=fc(e),n=r.cG,a=r.b7,t=r.b1;return p(Jt,Ea(n),Ea(a),Ea(t))},pl=function(e){return p(l1,0,ei(u1(e)),ei(0))},v1=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),$1=function(e){var r=Oc(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c$,bW:1}},f1=$(function(e,r){return o(to,$1(e),r)}),s1=$(function(e,r){return o(f1,e,r)}),m1=function(e){var r=e.a,n=e.b,a=e.c;return s1(p(v1,r,n,a))},bl=function(e){return m1(J(0,e,0))},d1=$(function(e,r){return o(de,function(n){if(n.$===1){var a=n.b;return a}else return 0},o($a,e,r.av))}),p1=$(function(e,r){return o(Xe,0,sa(o(fa,d1(e),r)))}),b1=$(function(e,r){return o(p1,e,r.ey)}),g1=b1,h1=function(e){return eo(e)},_1=h1,C1=B(function(e,r,n,a){var t=J(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return S(Gr,f,d,m,a)}),y1=y(function(e,r,n){return S(C1,e,r,n,1)}),L1=function(e){var r=e;return r.eF},w1=function(e){var r=e;return r.cu},S1=$(function(e,r){var n=r,a=Or(w1(e)),t=.5*n,i=Qn(t),c=$t(t),l=Pe(L1(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,b=1-2*(s+h),C=l.c$*c,L=i*C,_=2*(f-L),x=2*(f+L),F=u*C,O=2*(F+d),H=2*(F-d),j=m*C,q=2*(j-v),I=2*(j+v),V=C*C,K=1-2*(h+V),X=1-2*(s+V);return{dk:!0,q:K,r:x,s:H,t:_,u:X,v:I,w:O,x:q,y:b,H:a.fU-K*a.fU-_*a.fY-O*a.c$,I:a.fY-x*a.fU-X*a.fY-q*a.c$,J:a.c$-H*a.fU-I*a.fY-b*a.c$,bW:1}}),x1=y(function(e,r,n){return o(to,o(S1,e,r),n)}),T1=y(function(e,r,n){return p(x1,e,r,n)}),P1=$(function(e,r){return{eF:r,cu:e}}),M1=o(P1,Wt,jc),z1=$(function(e,r){return p(T1,M1,Yr(e),r)}),k1=function(e){var r=o(Ye,"period",e),n=o(g1,"number of blocks",e),a=o(Ye,"minWidth",e),t=o(Fe,a,o(Ye,"maxWidth",e)),i=o(Ye,"frequency",e),c=80/n,l=function(d){return i*d/n},u=function(d){return S(ct,a,t,r,e.bA+l(d))},v=function(d){return .004*r*d},s=function(d){return p(y1,S(ct,0,1,3,e.bA+v(d)),.65,.7)},m=function(d){return o(z1,.1*u(d),o(bl,d*c,o(dl,pl(s(d)),J(u(d),.9*c,u(d)))))};return _1(o(le,m,o(oa,-(n/2|0),n/2|0)))},D1=$(function(e,r){return g([k1(e),o(bl,-33,o(dl,pl(c1),J(300,1,300)))])}),ri=function(e){var r=e;return r},A1=function(e){e:for(;;){if(wr(e.di,$n)&&wr(e.dj,$n))return Le;if(o(Cc,Be(e.di),Be(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:ra(e.ee)};e=r;continue e}else{var n=N(ri(e.dj)/it),a=N(ri(e.di)/it),t=Pe(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(ma,Zc(1),e.aJ),v=u;return{by:a*Cn(v),eu:!1,bF:a*_n(v),cD:n/a,bU:a*hn(v),cT:3,fU:i,fY:c,c$:l}}}},B1=function(e){return A1({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(Wc,Yr(e.bx),Yr(e.bD))})},F1=$(function(e,r){var n=a0({bx:o(Ye,"azimuth for third light",e),aJ:Sm(h0(2e3)),bD:o(Ye,"elevation for third light",e),bH:Ta(o(Ir,10,o(Ye,"lux",e)))}),a=Jo({aJ:xa,bH:Io(6e3),dY:{fU:-45,fY:-30,c$:45}}),t=B1({bx:o(Ye,"azimuth for fourth light",e),aJ:xa,bD:o(Ye,"elevation for fourth light",e),di:Ta(o(Ye,"intensity above",e)),dj:Ta(o(Ye,"intensity below",e))}),i=Jo({aJ:g0,bH:Io(6e3),dY:{fU:-45,fY:30,c$:45}});return o(e0,{el:C0,ep:r0,es:Lm(e),ex:.1,b5:e.b5,eM:o0(6),e8:S(f0,i,a,n,t),cM:e.cM,fK:b0,fR:xa},o(D1,e,r))}),U1=S(Zs,F1,am,nm,Ks);const R1={Main:{init:U1(o(z,function(e){return we({e0:e})},o(M,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return we({bA:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(M,"clock",oe))},o(M,"devicePixelRatio",oe))},o(M,"dt",oe))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return we({ek:m,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Jn(vn)))},o(M,"left",Z))},o(M,"pressedKeys",Jn(vn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return we({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",oe))},o(M,"y",oe))))},o(M,"screen",o(z,function(r){return o(z,function(n){return we({eV:n,fS:r})},o(M,"height",oe))},o(M,"width",oe))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return we({eC:r,eD:e})},o(M,"deltaX",oe))},o(M,"deltaY",oe)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},E1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-D.clock;b<.009||(D.dt=b,D.clock=h,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},V1=()=>{Va("pointerdown"),Va("wheel"),Va("keydown")},Va=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Y1=R1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});V1();E1(Y1);
