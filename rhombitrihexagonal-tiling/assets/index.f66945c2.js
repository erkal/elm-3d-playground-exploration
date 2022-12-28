(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function br(e,r,n){return n.a=e,n.f=r,n}function $(e){return br(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return br(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return br(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Le(e){return br(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ne(e){return br(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function St(e){return br(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return br(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function wt(e){return br(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function de(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function _i(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function $a(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Kl=[];function eu(e){return e.length}var ru=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),nu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),au=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var tu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+ou()),r});function ou(e){return"<internals>"}function Hr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Lr(e,r){for(var n,a=[],t=Qa(e,r,0,a);t&&(n=a.pop());t=Qa(n.a,n.b,0,a));return t}function Qa(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Hr(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=Ao(e),r=Ao(r));for(var t in e)if(!Qa(e[t],r[t],n+1,a))return!1;return!0}$(Lr);$(function(e,r){return!Lr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var iu=$(function(e,r){var n=I(e,r);return n<0?Oi:n?H$:Ii}),_n=0;function T(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(te);function te(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var P={$:0};function rr(e,r){return{$:1,a:e,b:r}}var cu=$(rr);function b(e){for(var r=P,n=e.length;n--;)r=rr(e[n],r);return r}function fa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var lu=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});Le(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return b(i)});Ne(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(fa(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return b(fa(r).sort(function(n,a){var t=o(e,n,a);return t===Ii?0:t===Oi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var uu=$(Math.pow);$(function(e,r){return r%e});var vu=$(function(e,r){var n=r%e;return e===0?Hr(11):n>0&&e<0||n<0&&e>0?n+e:n}),$u=Math.PI,fu=Math.cos,su=Math.sin,mu=Math.tan,du=Math.atan;$(Math.atan2);function pu(e){return e}function bu(e){return e===1/0||e===-1/0}var gu=Math.ceil,hu=Math.floor,_u=Math.round,Cu=Math.sqrt,_o=Math.log,yu=isNaN;function xu(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Su=$(function(e,r){return e+r});function wu(e){var r=e.charCodeAt(0);return isNaN(r)?q:K(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function Lu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Pu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Tu=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Mu=$(function(e,r){return r.split(e)}),zu=$(function(e,r){return r.join(e)}),ku=y(function(e,r,n){return n.slice(e,r)});function Du(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Bu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Au=$(function(e,r){return r.indexOf(e)>-1}),Fu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Uu=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Ci(e){return e+""}function Vu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:K(n==45?-r:r)}function Eu(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?K(r):q}function Ru(e){return fa(e).join("")}function Nu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ju(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Gu(e){return{$:0,a:e}}function Lt(e){return{$:2,b:e}}var Wu=Lt(function(e){return typeof e=="boolean"?oe(e):Ze("a BOOL",e)}),Yu=Lt(function(e){return typeof e=="number"?oe(e):Ze("a FLOAT",e)}),Hu=Lt(function(e){return typeof e=="string"?oe(e):e instanceof String?oe(e+""):Ze("a STRING",e)});function Iu(e){return{$:3,b:e}}var Ou=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function gr(e,r){return{$:9,f:e,g:r}}var Ju=$(function(e,r){return{$:10,b:r,h:e}}),qu=$(function(e,r){return gr(e,[r])}),Zu=y(function(e,r,n){return gr(e,[r,n])});F(function(e,r,n,a){return gr(e,[r,n,a])});Le(function(e,r,n,a,t){return gr(e,[r,n,a,t])});Ne(function(e,r,n,a,t,i){return gr(e,[r,n,a,t,i])});St(function(e,r,n,a,t,i,c){return gr(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return gr(e,[r,n,a,t,i,c,l])});wt(function(e,r,n,a,t,i,c,l,u){return gr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Fe(e,n)}catch(a){return pe(o(Et,"This is not valid JSON! "+a.message,r))}});var yi=$(function(e,r){return Fe(e,r)});function Fe(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?oe(e.c):Ze("null",r);case 3:return kn(r)?Co(e.b,r,b):Ze("a LIST",r);case 4:return kn(r)?Co(e.b,r,Qu):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=Fe(e.b,r[n]);return Ye(v)?v:pe(o(Fo,n,v.a));case 7:var a=e.e;if(!kn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Fe(e.b,r[a]);return Ye(v)?v:pe(o(Ji,a,v.a));case 8:if(typeof r!="object"||r===null||kn(r))return Ze("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Fe(e.b,r[i]);if(!Ye(v))return pe(o(Fo,i,v.a));t=rr(T(i,v.a),t)}return oe(ze(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Fe(l[u],r);if(!Ye(v))return v;c=c(v.a)}return oe(c);case 10:var v=Fe(e.b,r);return Ye(v)?Fe(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Fe(m.a,r);if(Ye(v))return v;s=rr(v.a,s)}return pe(I$(ze(s)));case 1:return pe(o(Et,e.a,r));case 0:return oe(e.a)}}function Co(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Fe(e,r[i]);if(!Ye(c))return pe(o(Ji,i,c.a));t[i]=c.a}return oe(n(t))}function kn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Qu(e){return o(vf,e.length,function(r){return e[r]})}function Ze(e,r){return pe(o(Et,"Expecting "+e,r))}function Fr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Fr(e.b,r.b);case 6:return e.d===r.d&&Fr(e.b,r.b);case 7:return e.e===r.e&&Fr(e.b,r.b);case 9:return e.f===r.f&&yo(e.g,r.g);case 10:return e.h===r.h&&Fr(e.b,r.b);case 11:return yo(e.g,r.g)}}function yo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Fr(e[a],r[a]))return!1;return!0}var Xu=$(function(e,r){return JSON.stringify(r,null,e)+""});function xi(e){return e}y(function(e,r,n){return n[e]=r,n});function Tr(e){return{$:0,a:e}}function Ku(e){return{$:1,a:e}}function vr(e){return{$:2,b:e,c:null}}var Xa=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function ev(e){return{$:5,b:e}}var rv=0;function Pt(e){var r={$:0,e:rv++,f:e,g:null,h:[]};return Tt(r),r}function Si(e){return vr(function(r){r(Tr(Pt(e)))})}function wi(e,r){e.h.push(r),Tt(e)}var nv=$(function(e,r){return vr(function(n){wi(e,r),n(Tr(_n))})}),wa=!1,xo=[];function Tt(e){if(xo.push(e),!wa){for(wa=!0;e=xo.shift();)av(e);wa=!1}}function av(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Tt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return Mt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Mt(e,r,n,a,t,i){var c=o(yi,e,r?r.flags:void 0);Ye(c)||Hr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=tv(l,d);function d(f,h){var g=o(a,f,v);s(v=g.a,h),wo(l,g.b,t(v))}return wo(l,u.b,t(v)),m?{ports:m}:{}}var Ke={};function tv(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=iv(t,r)}return n}function ov(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function iv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Xa,l,ev(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Pt(o(Xa,l,e.b))}var cv=$(function(e,r){return vr(function(n){e.g(r),n(Tr(_n))})});$(function(e,r){return o(nv,e.h,{$:0,a:r})});function Li(e){return function(r){return{$:1,k:e,l:r}}}function lv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var So=[],La=!1;function wo(e,r,n){if(So.push({p:e,q:r,r:n}),!La){La=!0;for(var a;a=So.shift();)uv(a.p,a.q,a.r);La=!1}}function uv(e,r,n){var a={};Jn(!0,r,a,null),Jn(!1,n,a,null);for(var t in e)wi(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function Jn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=vv(e,t,a,r.l);n[t]=$v(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Jn(e,c.a,n,a);return;case 3:Jn(e,r.o,n,{s:r.n,t:a});return}}function vv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function $v(e,r,n){return n=n||{i:P,j:P},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function fv(e){Ke[e]&&Hr(3)}$(function(e,r){return r});function sv(e,r){return fv(e),Ke[e]={f:mv,u:r,a:dv},Li(e)}var mv=$(function(e,r){return function(n){return e(r(n))}});function dv(e,r){var n=P,a=Ke[e].u,t=Tr(null);Ke[e].b=t,Ke[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(yi,a,c);Ye(l)||Hr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var qn,or=typeof document<"u"?document:{};function zt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(sr(e,function(){}),t),{}});function Ka(e){return{$:0,a:e}}var Pi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:kt(n),e:t,f:e,b:i}})}),Mr=Pi(void 0),pv=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:kt(n),e:t,f:e,b:i}})}),bv=pv(void 0);function gv(e,r,n,a){return{$:3,d:kt(e),g:r,h:n,i:a}}var hv=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function hr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return hr([e,r],function(){return e(r)})});y(function(e,r,n){return hr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return hr([e,r,n,a],function(){return p(e,r,n,a)})});Le(function(e,r,n,a,t){return hr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});Ne(function(e,r,n,a,t,i){return hr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});St(function(e,r,n,a,t,i,c){return hr([e,r,n,a,t,i,c],function(){return de(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return hr([e,r,n,a,t,i,c,l],function(){return _i(e,r,n,a,t,i,c,l)})});wt(function(e,r,n,a,t,i,c,l,u){return hr([e,r,n,a,t,i,c,l,u],function(){return $a(e,r,n,a,t,i,c,l,u)})});var Ti=$(function(e,r){return{$:"a0",n:e,o:r}}),_v=$(function(e,r){return{$:"a1",n:e,o:r}}),Mi=$(function(e,r){return{$:"a2",n:e,o:r}}),_r=$(function(e,r){return{$:"a3",n:e,o:r}}),Cv=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function yv(e){return e=="script"?"p":e}function xv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Ti,r.n,Sv(e,r.o)):r});function Sv(e,r){var n=Gt(r);return{$:r.$,a:n?p($f,n<3?wv:Lv,Te(e),r.a):o(Kn,e,r.a)}}var wv=$(function(e,r){return T(e(r.a),r.b)}),Lv=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Lo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Lo(c,t,i):c[t]=i}return r}function Lo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function sr(e,r){var n=e.$;if(n===5)return sr(e.k||(e.k=e.m()),r);if(n===0)return or.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=sr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return et(c,r,e.d),c}var c=e.f?or.createElementNS(e.f,e.c):or.createElement(e.c);qn&&e.c=="a"&&c.addEventListener("click",qn(c)),et(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)zt(c,sr(n===1?l[u]:l[u].b,r));return c}function et(e,r,n){for(var a in n){var t=n[a];a==="a1"?Pv(e,t):a==="a0"?zv(e,r,t):a==="a3"?Tv(e,t):a==="a4"?Mv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Pv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Tv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Mv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function zv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=kv(r,i),e.addEventListener(t,c,Dt&&{passive:Gt(i)<2}),a[t]=c}}var Dt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Dt=!0}}))}catch{}function kv(e,r){function n(a){var t=n.q,i=Fe(t.a,a);if(!!Ye(i)){for(var c=Gt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function Dv(e,r){return e.$==r.$&&Fr(e.a,r.a)}function zi(e,r){var n=[];return He(e,r,n,0),n}function se(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function He(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Nv(r),i=1;else{se(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];He(e.k,r.k,s,0),s.length>0&&se(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){se(n,0,a,r);return}(f?!Bv(m,d):m!==d)&&se(n,2,a,d),He(h,g,n,a+1);return;case 0:e.a!==r.a&&se(n,3,a,r.a);return;case 1:Po(e,r,n,a,Av);return;case 2:Po(e,r,n,a,Fv);return;case 3:if(e.h!==r.h){se(n,0,a,r);return}var C=Bt(e.d,r.d);C&&se(n,4,a,C);var x=r.i(e.g,r.g);x&&se(n,5,a,x);return}}}function Bv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Po(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){se(n,0,a,r);return}var i=Bt(e.d,r.d);i&&se(n,4,a,i),t(e,r,n,a)}function Bt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Bt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Dv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Av(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?se(n,6,a,{v:l,i:c-l}):c<l&&se(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];He(s,i[v],n,++a),a+=s.b||0}}function Fv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],g=u[d],C=h.a,x=g.a,_=h.b,L=g.b,D=void 0,W=void 0;if(C===x){f++,He(_,L,t,f),f+=_.b||0,m++,d++;continue}var N=l[m+1],E=u[d+1];if(N){var Y=N.a,G=N.b;W=x===Y}if(E){var U=E.a,Z=E.b;D=C===U}if(D&&W){f++,He(_,Z,t,f),qr(i,t,C,L,d,c),f+=_.b||0,f++,Zr(i,t,C,G,f),f+=G.b||0,m+=2,d+=2;continue}if(D){f++,qr(i,t,x,L,d,c),He(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(W){f++,Zr(i,t,C,_,f),f+=_.b||0,f++,He(G,L,t,f),f+=G.b||0,m+=2,d+=1;continue}if(N&&Y===U){f++,Zr(i,t,C,_,f),qr(i,t,x,L,d,c),f+=_.b||0,f++,He(G,Z,t,f),f+=G.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Zr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],g=u[d];qr(i,t,g.a,g.b,void 0,X),d++}(t.length>0||c.length>0||X)&&se(n,8,a,{w:t,x:c,y:X})}var ki="_elmW6BL";function qr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];He(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}qr(e,r,n+ki,a,t,i)}function Zr(e,r,n,a,t){var i=e[n];if(!i){var c=se(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];He(a,i.z,l,t),se(r,9,t,{w:l,A:i});return}Zr(e,r,n+ki,a,t)}function Di(e,r,n,a){Qr(e,r,n,0,0,r.b,a)}function Qr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Di(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Qr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Qr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Qr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,C=0;C<h.length;C++){t++;var x=d===1?h[C]:h[C].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=Qr(g[C],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Bi(e,r,n,a){return n.length===0?e:(Di(e,r,n,a),Zn(e,n))}function Zn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Uv(t,a);t===e&&(e=i)}return e}function Uv(e,r){switch(r.$){case 0:return Vv(e,r.s,r.u);case 4:return et(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Zn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(sr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Zn(e,i.w),e;case 8:return Ev(e,r);case 5:return r.s(e);default:Hr(10)}}function Vv(e,r,n){var a=e.parentNode,t=sr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Ev(e,r){var n=r.s,a=Rv(n.y,r);e=Zn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:sr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&zt(e,a),e}function Rv(e,r){if(!!e){for(var n=or.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;zt(n,i.c===2?i.s:sr(i.z,r.u))}return n}}function At(e){if(e.nodeType===3)return Ka(e.textContent);if(e.nodeType!==1)return Ka("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(_r,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=rr(At(v[a]),u);return p(Mr,l,r,u)}function Nv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var jv=F(function(e,r,n,a){return Mt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=At(l);return Ai(i,function(v){var s=c(v),m=zi(u,s);l=Bi(l,u,m,t),u=s})})});F(function(e,r,n,a){return Mt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=or.title,v=or.body,s=At(v);return Ai(i,function(m){qn=c;var d=l(m),f=Mr("body")(P)(d.eu),h=zi(s,f);v=Bi(v,s,h,t),s=f,qn=0,u!==d.fL&&(or.title=u=d.fL)})})});var Qn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ai(e,r){r(e);var n=0;function a(){n=n===1?0:(Qn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Qn(a),n=2)}}$(function(e,r){return o(Ht,Wt,vr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Ht,Wt,vr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Ht,Wt,vr(function(){history.replaceState({},"",r),e()}))});var Gv={addEventListener:function(){},removeEventListener:function(){}},Wv=typeof window<"u"?window:Gv;y(function(e,r,n){return Si(vr(function(a){function t(i){Pt(n(i))}return e.addEventListener(r,t,Dt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Fe(e,r);return Ye(n)?K(n.a):q});function Fi(e,r){return vr(function(n){Qn(function(){var a=document.getElementById(e);n(a?Tr(r(a)):Ku(sf(e)))})})}function Yv(e){return vr(function(r){Qn(function(){r(Tr(e()))})})}$(function(e,r){return Fi(r,function(n){return n[e](),_n})});$(function(e,r){return Yv(function(){return Wv.scroll(e,r),_n})});y(function(e,r,n){return Fi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,_n})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Hv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return K(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Iv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?K(m):q}a.push(w(zc,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?K(v):q}return n(w(zc,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Ov=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Jv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Jv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ft=new Float64Array(3),To=new Float64Array(3),Mo=new Float64Array(3),qv=y(function(e,r,n){return new Float64Array([e,r,n])}),Zv=function(e){return e[0]},Qv=function(e){return e[1]},Xv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Kv=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Ui(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Ui);function Vi(e,r,n){return n===void 0&&(n=new Float64Array(3)),Xn(Ui(e,r,n),n)}$(Vi);function Ei(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Xn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Ei(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var e$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Xr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Xr);function rt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(rt);$(function(e,r){var n,a=Ft,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Xr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Xr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Xr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Xr(r,a)+e[14])/n,t});var r$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var n$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},a$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/t$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function t$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var o$=new Float64Array(16),i$=new Float64Array(16),c$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},l$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Ri(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ne(Ri);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Ri(c,l,i,t,n,a)});function Ni(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ne(Ni);F(function(e,r,n,a){return Ni(e,r,n,a,-1,1)});function ji(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],g=e[12],C=e[13],x=e[14],_=e[15],L=r[0],D=r[1],W=r[2],N=r[3],E=r[4],Y=r[5],G=r[6],U=r[7],Z=r[8],X=r[9],he=r[10],_e=r[11],$e=r[12],fe=r[13],Ge=r[14],We=r[15];return n[0]=a*L+l*D+m*W+g*N,n[1]=t*L+u*D+d*W+C*N,n[2]=i*L+v*D+f*W+x*N,n[3]=c*L+s*D+h*W+_*N,n[4]=a*E+l*Y+m*G+g*U,n[5]=t*E+u*Y+d*G+C*U,n[6]=i*E+v*Y+f*G+x*U,n[7]=c*E+s*Y+h*G+_*U,n[8]=a*Z+l*X+m*he+g*_e,n[9]=t*Z+u*X+d*he+C*_e,n[10]=i*Z+v*X+f*he+x*_e,n[11]=c*Z+s*X+h*he+_*_e,n[12]=a*$e+l*fe+m*Ge+g*We,n[13]=t*$e+u*fe+d*Ge+C*We,n[14]=i*$e+v*fe+f*Ge+x*We,n[15]=c*$e+s*fe+h*Ge+_*We,n}$(ji);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],g=r[0],C=r[1],x=r[2],_=r[4],L=r[5],D=r[6],W=r[8],N=r[9],E=r[10],Y=r[12],G=r[13],U=r[14];return n[0]=a*g+c*C+v*x,n[1]=t*g+l*C+s*x,n[2]=i*g+u*C+m*x,n[3]=0,n[4]=a*_+c*L+v*D,n[5]=t*_+l*L+s*D,n[6]=i*_+u*L+m*D,n[7]=0,n[8]=a*W+c*N+v*E,n[9]=t*W+l*N+s*E,n[10]=i*W+u*N+m*E,n[11]=0,n[12]=a*Y+c*G+v*U+d,n[13]=t*Y+l*G+s*U+f,n[14]=i*Y+u*G+m*U+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Xn(r,Ft);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Ei(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,g=i*l*v,C=c*l*v,x=i*i*v+u,_=h+f,L=g-d,D=h-f,W=c*c*v+u,N=C+m,E=g+d,Y=C-m,G=l*l*v+u,U=n[0],Z=n[1],X=n[2],he=n[3],_e=n[4],$e=n[5],fe=n[6],Ge=n[7],We=n[8],zr=n[9],kr=n[10],Sa=n[11],Jl=n[12],ql=n[13],Zl=n[14],Ql=n[15];return a[0]=U*x+_e*_+We*L,a[1]=Z*x+$e*_+zr*L,a[2]=X*x+fe*_+kr*L,a[3]=he*x+Ge*_+Sa*L,a[4]=U*D+_e*W+We*N,a[5]=Z*D+$e*W+zr*N,a[6]=X*D+fe*W+kr*N,a[7]=he*D+Ge*W+Sa*N,a[8]=U*E+_e*Y+We*G,a[9]=Z*E+$e*Y+zr*G,a[10]=X*E+fe*Y+kr*G,a[11]=he*E+Ge*Y+Sa*G,a[12]=Jl,a[13]=ql,a[14]=Zl,a[15]=Ql,a});function u$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(u$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function v$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(v$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],g=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=g,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],g=r[9],C=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=g,n[10]=C,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Vi(e,r,Ft),t=Xn(rt(n,a,To),To),i=Xn(rt(a,t,Mo),Mo),c=o$,l=i$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,ji(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var zo=0;function vn(e,r){for(;r.b;r=r.b)e(r.a)}function Ut(e){for(var r=0;e.b;e=e.b)r++;return r}var $$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},f$=Le(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),s$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),m$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),d$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),p$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),b$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),g$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),h$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),_$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),C$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},y$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},x$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},S$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Gi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},w$=function(e){e.gl.disable(e.gl.CULL_FACE)},L$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},P$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},T$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ko=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],M$=[y$,x$,S$,Gi,Wi,w$,L$,P$,T$];function Do(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function z$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Yi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function k$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,C,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?C[x]:C[x][_];else i.forEach(function(L){for(_=0;_<h;_++)f[g++]=h===1?C[L][x]:C[L][x][_]})}var u=Yi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Ut(n.b)*s);vn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function D$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=B$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Ut(r.b),indexBuffer:null,buffers:{}}}function B$(e,r){var n=new Uint32Array(Ut(e)*r),a=0,t;return vn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Bo(e,r){return e+"#"+r}var Hi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Gi(n),Wi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Bo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=zo++,v||(v=Do(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=zo++,s||(s=Do(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=z$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=A$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Bo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),F$(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=D$(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=k$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var C=Yi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var x=C.size*4,_=x*C.arraySize,L=0;L<C.arraySize;L++)a.enableVertexAttribArray(h+L),a.vertexAttribPointer(h+L,C.size,C.baseType,!1,_,x*L)}for(n.toggle=!n.toggle,vn(Ed(n),i.a),u=0;u<ko.length;u++){var D=n[ko[u]];D.toggle!==n.toggle&&D.enabled&&(M$[u](n),D.enabled=!1,D.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return vn(t,e.g),r});function A$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,C=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(C,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(C,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var L=l.textures.get(_);L||(L=_.eC(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[g]!==_&&(e.uniform1i(C,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function F$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var U$=y(function(e,r,n){return gv(r,{g:n,f:{},h:e},W$,Y$)}),V$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),E$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),R$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),N$=$(function(e,r){e.contextAttributes.antialias=!0}),j$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),G$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function W$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};vn(function(t){return o(Vd,r,t)},e.h);var n=or.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),$$(function(){return o(Hi,e,n)})):(n=or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Y$(e,r){return r.f=e.f,Hi(r)}var A=cu,Dn=tu;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Dn,e,l,v)}else{var u=c.a;return p(Dn,i,l,u)}});return p(Dn,i,p(Dn,e,r,t),a)});var Vt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Vt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ao=function(e){return p(Vt,y(function(r,n,a){return o(A,T(r,n),a)}),P,e)},Ii=1,H$=2,Oi=0,pe=function(e){return{$:1,a:e}},Et=$(function(e,r){return{$:3,a:e,b:r}}),Fo=$(function(e,r){return{$:0,a:e,b:r}}),Ji=$(function(e,r){return{$:1,a:e,b:r}}),oe=function(e){return{$:0,a:e}},I$=function(e){return{$:2,a:e}},K=function(e){return{$:0,a:e}},q={$:1},O$=Bu,J$=Xu,Me=Ci,xr=$(function(e,r){return o(zu,e,fa(r))}),Rt=$(function(e,r){return b(o(Mu,e,r))}),qi=function(e){return o(xr,`
    `,o(Rt,`
`,e))},Cn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Pr=function(e){return p(Cn,$(function(r,n){return n+1}),0,e)},q$=lu,Z$=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),$n=$(function(e,r){return p(Z$,e,r,P)}),Zi=$(function(e,r){return p(q$,e,o($n,0,Pr(r)-1),r)}),er=Nu,Qi=function(e){var r=er(e);return 97<=r&&r<=122},Xi=function(e){var r=er(e);return r<=90&&65<=r},Q$=function(e){return Qi(e)||Xi(e)},X$=function(e){var r=er(e);return r<=57&&48<=r},K$=function(e){return Qi(e)||Xi(e)||X$(e)},ze=function(e){return p(Cn,A,P,e)},Ir=wu,ef=$(function(e,r){return`

(`+(Me(e+1)+(") "+qi(rf(r))))}),rf=function(e){return o(nf,e,P)},nf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=Ir(n);if(g.$===1)return!1;var C=g.a,x=C.a,_=C.b;return Q$(x)&&o(O$,K$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Me(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(xr,"",ze(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Me(Pr(s))+" ways:"));return o(xr,`

`,o(A,h,o(Zi,ef,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(xr,"",ze(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(xr,"",ze(r))+`:

    `):`Problem with the given value:

`}();return h+(qi(o(J$,4,f))+(`

`+d))}}),ke=32,nt=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),at=Kl,Ki=gu,Nt=$(function(e,r){return _o(r)/_o(e)}),af=pu,fn=Ki(o(Nt,2,ke)),ec=w(nt,0,fn,at,at),rc=ru,nc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var ac=hu,tt=eu,Ie=$(function(e,r){return I(e,r)>0?e:r}),tf=function(e){return{$:0,a:e}},jt=nu,of=$(function(e,r){e:for(;;){var n=o(jt,ke,e),a=n.a,t=n.b,i=o(A,tf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ze(i)}}),cf=function(e){var r=e.a;return r},lf=$(function(e,r){e:for(;;){var n=Ki(r/ke);if(n===1)return o(jt,ke,e).a;var a=o(of,e,P),t=n;e=a,r=t;continue e}}),tc=$(function(e,r){if(r.l){var n=r.l*ke,a=ac(o(Nt,ke,n-1)),t=e?ze(r.z):r.z,i=o(lf,t,r.l);return w(nt,tt(r.p)+n,o(Ie,5,a*fn),i,r.p)}else return w(nt,tt(r.p),fn,at,r.p)}),uf=Le(function(e,r,n,a,t){e:for(;;){if(r<0)return o(tc,!1,{z:a,l:n/ke|0,p:t});var i=nc(p(rc,ke,r,e)),c=e,l=r-ke,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),vf=$(function(e,r){if(e<=0)return ec;var n=e%ke,a=p(rc,n,e-n,r),t=e-n-ke;return S(uf,r,t,e,P,a)}),Ye=function(e){return!e.$},k=Ju,Q=Wu,z=Ou,ce=Yu,Kn=qu,$f=Zu,Te=Gu,Gt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Mr("div"),ff=function(e){return{$:2,a:e}},oc=$(function(e,r){return e}),ic=$(function(e,r){return{aK:r.aK,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Vr=function(e){return e},sf=Vr,Uo=Ne(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),mf=Au,Sr=Lu,Ur=ku,yn=$(function(e,r){return e<1?r:p(Ur,e,Sr(r),r)}),sa=Uu,ma=function(e){return e===""},da=$(function(e,r){return e<1?"":p(Ur,0,e,r)}),cc=Vu,Vo=Le(function(e,r,n,a,t){if(ma(t)||o(mf,"@",t))return q;var i=o(sa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=cc(o(yn,c+1,t));if(l.$===1)return q;var u=l;return K(de(Uo,e,o(da,c,t),u,r,n,a))}else return K(de(Uo,e,t,q,r,n,a))}),Eo=F(function(e,r,n,a){if(ma(a))return q;var t=o(sa,"/",a);if(t.b){var i=t.a;return S(Vo,e,o(yn,i,a),r,n,o(da,i,a))}else return S(Vo,e,"/",r,n,a)}),Ro=y(function(e,r,n){if(ma(n))return q;var a=o(sa,"?",n);if(a.b){var t=a.a;return w(Eo,e,K(o(yn,t+1,n)),r,o(da,t,n))}else return w(Eo,e,q,r,n)});$(function(e,r){if(ma(r))return q;var n=o(sa,"#",r);if(n.b){var a=n.a;return p(Ro,e,K(o(yn,a+1,r)),o(da,a,r))}else return p(Ro,e,q,r)});var df=Fu,Wt=function(e){},xn=Tr,pf=xn(0),lc=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Cn,e,r,ze(m)):w(lc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),$r=y(function(e,r,n){return w(lc,e,r,0,n)}),ue=$(function(e,r){return p($r,$(function(n,a){return o(A,e(n),a)}),P,r)}),ea=Xa,Yt=$(function(e,r){return o(ea,function(n){return xn(e(n))},r)}),bf=y(function(e,r,n){return o(ea,function(a){return o(ea,function(t){return xn(o(e,a,t))},n)},r)}),gf=function(e){return p($r,bf(A),xn(P),e)},hf=cv,_f=$(function(e,r){var n=r;return Si(o(ea,hf(e),n))}),Cf=y(function(e,r,n){return o(Yt,function(a){return 0},gf(o(ue,_f(e),r)))}),yf=y(function(e,r,n){return xn(0)}),xf=$(function(e,r){var n=r;return o(Yt,e,n)});Ke.Task=ov(pf,Cf,yf,xf);var Sf=Li("Task"),Ht=$(function(e,r){return Sf(o(Yt,e,r))}),wf=jv,Lf=xu,ra={$:1},uc=function(e){return{$:2,a:e}},pa={$:0},Ee=$(function(e,r){return{$:0,a:e,b:r}}),ne=y(function(e,r,n){return r(e(n))}),Or=function(e){var r=e.b.B;return r.a},Pf=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return K(o(Ee,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},vc=function(e){var r=e.b;return o(Ee,pa,r)},lr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Tf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?vc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,Or(n).aK)>0?o(ne,Pf,lr(o(Ee,ra,t))):Vr)(o(Ee,uc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(ic,l.eA,Qe(r,{aK:l.aK+r.eJ})),s=o(e,v,u);return o(Ee,pa,{B:T(v,s),ab:P,T:o(A,t.B,t.T)})}}),$c=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Mf=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),zf=$(function(e,r){return ze(p(Mf,e,r,P))}),fc=y(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,g=h.a,C=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,g,o(zf,r-4,C))))):o(A,_,o(A,c,o(A,s,o(A,g,p(fc,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),kf=$(function(e,r){return p(fc,0,e,r)}),Df=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=te(ze(n),te(b([a]),t)),c=o(kf,e,i),l=o($c,e,i);if(l.b){var u=l.a,v=l.b;return o(Ee,ra,{B:u,ab:v,T:ze(c)})}else{var s=ze(c);if(s.b){var m=s.a,d=s.b;return o(Ee,ra,{B:m,ab:P,T:d})}else return r}}),Bf=function(e){var r=e.b;return o(Ee,ra,r)},Af=function(e){var r=e.b;return o(Ee,uc({cY:Or(e).aK}),r)},Ff=$(function(e,r){switch(e.$){case 1:return Bf(r);case 2:return vc(r);case 3:return Af(r);default:var n=e.a;return o(Df,n,r)}}),sc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Uf=$(function(e,r){return Qe(r,{av:e(r.av)})}),Vf=function(e){return{$:3,a:e}},Ef=function(e){return{$:2,a:e}},mc=$(function(e,r){return{$:0,a:e,b:r}}),Rf=$(function(e,r){return{$:1,a:e,b:r}}),Se=$(function(e,r){if(r.$)return q;var n=r.a;return K(e(n))}),O=function(e){return e<0?-e:e},It=Eu,Nf=y(function(e,r,n){return o(lr,0/0,It(o(e,r,n)))}),dc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),jf=Tu,pc=function(e){return p(jf,A,P,e)},Gf=$(function(e,r){var n=o(dc,function(a){return a!=="0"&&a!=="."},pc(r));return te(e&&n?"-":"",r)}),ae=Ci,ot=Su,bc=ju,gc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Ir(n);if(a.$===1)return"01";var t=a.a;return o(ot,"0",gc(t))}else{var i=er(r);return i>=48&&i<57?o(ot,bc(i+1),n):"0"}},it=bu,Wf=yu,ba=function(e){return o(ot,e,"")},hc=y(function(e,r,n){return e<=0?n:p(hc,e>>1,te(r,r),e&1?te(n,r):n)}),sn=$(function(e,r){return p(hc,e,r,"")}),ct=y(function(e,r,n){return te(n,o(sn,e-Sr(n),ba(r)))}),lt=Pu,_c=function(e){var r=o(Rt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Yf=function(e){var r=o(Rt,"e",ae(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(lr,0,cc(o(df,"+",t)?o(yn,1,t):t)),c=_c(n),l=c.a,u=c.b,v=te(l,u),s=i<0?o(lr,"0",o(Se,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Se,sc(ba),Ir(te(o(sn,O(i),"0"),v))))):p(ct,i+1,"0",v);return te(e<0?"-":"",s)}else{var n=r.a;return te(e<0?"-":"",n)}else return""},Hf=y(function(e,r,n){if(it(n)||Wf(n))return ae(n);var a=n<0,t=_c(Yf(O(n))),i=t.a,c=t.b,l=Sr(i)+r,u=te(o(sn,-l+1,"0"),p(ct,l,"0",te(i,c))),v=Sr(u),s=o(Ie,1,l),m=o(e,a,p(Ur,s,v,u)),d=p(Ur,0,s,u),f=m?lt(o(lr,"1",o(Se,gc,Ir(lt(d))))):d,h=Sr(f),g=f==="0"?f:r<=0?te(f,o(sn,O(r),"0")):I(r,Sr(c))<0?p(Ur,0,h-r,f)+("."+p(Ur,h-r,h,f)):te(i+".",p(ct,r,"0",c));return o(Gf,a,g)}),Cc=Hf($(function(e,r){var n=Ir(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),If=Nf(Cc),Of=y(function(e,r,n){var a=o(Nt,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(If,t,n)}),yc=iu,Ot=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(yc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return K(a);default:var l=e,u=i;e=l,r=u;continue e}}}),R=Le(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},Nr=Le(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(R,0,r,n,S(R,1,v,s,m,d),S(R,1,i,c,l,u))}else return S(R,e,i,c,S(R,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,C=f.d,x=f.e,d=a.e;return S(R,0,v,s,S(R,1,h,g,C,x),S(R,1,r,n,d,t))}else return S(R,e,r,n,a,t)}),ut=y(function(e,r,n){if(n.$===-2)return S(R,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(yc,e,t);switch(u){case 0:return S(Nr,a,t,i,p(ut,e,r,c),l);case 1:return S(R,a,t,r,c,l);default:return S(Nr,a,t,i,c,p(ut,e,r,l))}}),nn=y(function(e,r,n){var a=p(ut,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(R,1,t,i,c,l)}else{var u=a;return u}}),Jf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},xc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,g=d.d,C=d.e,x=v.e;return S(R,0,f,h,S(R,1,n,a,S(R,0,i,c,l,u),g),S(R,1,s,m,C,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,m=L.c,d=L.d,x=L.e;return S(R,1,n,a,S(R,0,i,c,l,u),S(R,0,s,m,d,x))}else return e},No=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,g=f.c,C=f.d,x=f.e;return S(R,0,i,c,S(R,1,u,v,s,m),S(R,1,n,a,d,S(R,0,h,g,C,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,d=_.e,D=e.e;D.a;var h=D.b,g=D.c,C=D.d,x=D.e;return S(R,1,n,a,S(R,0,i,c,L,d),S(R,0,h,g,C,x))}else return e},qf=St(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(R,n,l,u,v,S(R,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,No(r)}else break e;else return c.a,c.d,No(r);else break e;return r}}),jn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(R,r,n,a,jn(t),l);var u=xc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Nr,v,s,m,jn(d),f)}else return nr}else return S(R,r,n,a,jn(t),l)}else return nr},an=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(R,n,a,t,o(an,e,i),c);var u=xc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Nr,v,s,m,o(an,e,d),f)}else return nr}else return S(R,n,a,t,o(an,e,i),c);else return o(Zf,e,_i(qf,e,r,n,a,t,i,c))}),Zf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Lr(e,a)){var l=Jf(c);if(l.$===-1){var u=l.b,v=l.c;return S(Nr,n,u,v,i,jn(c))}else return nr}else return S(Nr,n,a,t,i,o(an,e,c))}else return nr}),Qf=$(function(e,r){var n=o(an,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(R,1,a,t,i,c)}else{var l=n;return l}}),Bn=y(function(e,r,n){var a=r(o(Ot,e,n));if(a.$)return o(Qf,e,n);var t=a.a;return p(nn,e,t,n)}),Xf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Bn,r,Se(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Rf,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Bn,r,Se(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(mc,T(i,c),p(Of,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Bn,r,Se(function(a){return a.$===3?Vf(n):a}));default:var r=e.a,n=e.b;return o(Bn,r,Se(function(a){return a.$===2?Ef(n):a}))}},Kf=function(e){return Uf(Xf(e))},es=$(function(e,r){return o(ue,Kf(e),r)}),rs=$(function(e,r){return Qe(r,{eA:o(es,e,r.eA)})}),ns=$(function(e,r){var n=r.a,a=r.b;return o(Ee,n,Qe(a,{B:o(sc,rs(e),a.B)}))}),as=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),ts=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ee,a,Qe(t,{B:o(as,o(e,i.a,r),i)}))}),os=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aM:!a.aM});case 2:var t=n.a;return Qe(a,{G:p(Tf,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(ns,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(ts,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Ff,l,a.G)})}}),is=$(function(e,r){return o(Ee,pa,{B:T(e,r(e)),ab:P,T:P})}),cs=lv,jo=cs(P),na=Iu,mn=Hu,ls=sv("tick",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return Te({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(z,"clock",ce))},o(z,"devicePixelRatio",ce))},o(z,"dt",ce))},o(z,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return Te({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(z,"alt",Q))},o(z,"control",Q))},o(z,"down",Q))},o(z,"downs",na(mn)))},o(z,"left",Q))},o(z,"pressedKeys",na(mn)))},o(z,"right",Q))},o(z,"shift",Q))},o(z,"up",Q))))},o(z,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return Te({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(z,"down",Q))},o(z,"isDown",Q))},o(z,"move",Q))},o(z,"rightDown",Q))},o(z,"rightUp",Q))},o(z,"up",Q))},o(z,"x",ce))},o(z,"y",ce))))},o(z,"screen",o(k,function(r){return o(k,function(n){return Te({eW:n,fS:r})},o(z,"height",ce))},o(z,"width",ce))))},o(z,"wheel",o(k,function(e){return o(k,function(r){return Te({eE:r,eF:e})},o(z,"deltaX",ce))},o(z,"deltaY",ce))))),us=function(e){return{$:4,a:e}},vs={$:0},$s=xi,je=$(function(e,r){return o(Mi,e,$s(r))}),H=je("className"),fs=function(e){var r=e.b.B;return r.b},aa=je("id"),ss=hv,ta=ss,ms=_v,ee=ms,ds={$:1},ps=function(e){return{$:3,a:e}},bs=function(e){return{$:5,a:e}},Go=Mr("a"),Jt=Mr("button"),Wo=function(e){return o(je,"href",xv(e))},gs=_r("clip-rule"),Ce=_r("d"),hs=_r("fill"),Sc=Pi("http://www.w3.org/2000/svg"),_s=Sc("svg"),Cs=_r("viewBox"),ys=o(Cv,"http://www.w3.org/XML/1998/namespace","xml:space"),Be=_s(b([Cs("0 0 24 24"),hs("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),ys("http://www.w3.org/2000/svg")])),xs=_r("fill-rule"),ye=Sc("path"),wr={eD:Be(b([o(ye,b([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Be(b([o(ye,b([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Be(b([o(ye,b([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Be(b([o(ye,b([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(ye,b([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Be(b([o(ye,b([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(ye,b([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Be(b([o(ye,b([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Be(b([o(ye,b([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Be(b([o(ye,b([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Be(b([o(ye,b([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Be(b([o(ye,b([xs("evenodd"),gs("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Be(b([o(ye,b([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Be(b([o(ye,b([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Ss=function(e){return{$:0,a:e}},wc=Ti,Lc=$(function(e,r){return o(wc,e,Ss(r))}),qt=function(e){return o(Lc,"click",Te(e))},Yo=je("target"),ws=je("title"),vt=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(R,n,a,o(e,a,t),o(vt,e,i),o(vt,e,c))}),Ls=Ka,ur=Ls,Ps=function(e){return p(Vt,y(function(r,n,a){return o(A,n,a)}),P,e)},Ts=$(function(e,r){return{$:3,a:e,b:r}}),Ms=$(function(e,r){return{$:2,a:e,b:r}}),zs=$(function(e,r){return{$:0,a:e,b:r}}),ks=$(function(e,r){return{$:1,a:e,b:r}}),Sn=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ds=w(Sn,0/255,0/255,0/255,1),Bs=xi,Pc=$(function(e,r){return o(Mi,e,Bs(r))}),As=Pc("checked"),Oe=_u,Fs=y(function(e,r,n){return te(o(sn,e-Sr(n),ba(r)),n)}),Us=vu,Tc=function(e){var r=function(n){return n<10?Me(n):ba(bc(87+n))};return e<16?r(e):te(Tc(e/16|0),r(o(Us,16,e)))},Vs=o(ne,Tc,o(Fs,2,"0")),Mc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Es=function(e){var r=Mc(e),n=r.cN,a=r.cd,t=r.b6;return o(xr,"",o(A,"#",o(ue,o(ne,Oe,Vs),b([n*255,a*255,t*255]))))},$t=je("htmlFor"),ft=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),oa=$(function(e,r){if(r.$){var a=r.a;return pe(a)}else{var n=r.a;return e(n)}}),Rs=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Zt=$(function(e,r){return p($r,Rs(e),P,r)}),zc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Ns=Iv,js=Ru,Gs=$(function(e,r){if(r.$)return pe(e);var n=r.a;return oe(n)}),Ws=Hv,Ys=function(e){return o(Ws,{ew:!1,fg:!1},e)},Qt=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return q},Hs=$(function(e,r){if(r.$){var a=r.a;return pe(a)}else{var n=r.a;return oe(e(n))}}),Is=function(e){return{$:2,a:e}},Os=function(e){return{$:0,a:e}},Js=function(e){return{$:1,a:e}},Pa=$(function(e,r){return er(r)-er(e)}),Ta=y(function(e,r,n){var a=er(n);return I(er(e),a)<1&&I(a,er(r))<1}),qs=$(function(e,r){var n=function(t){return I(t,e)<0?oe(t):pe(Js(r))},a=p(Ta,"0","9",r)?oe(o(Pa,"0",r)):p(Ta,"a","z",r)?oe(10+o(Pa,"a",r)):p(Ta,"A","Z",r)?oe(10+o(Pa,"A",r)):pe(Os(r));return o(oa,n,a)}),kc=$(function(e,r){var n=Ir(r);if(n.$===1)return oe(0);var a=n.a,t=a.a,i=a.b;return o(oa,function(c){return o(oa,function(l){return oe(c+l*e)},o(kc,e,i))},o(qs,e,t))}),Zs=$(function(e,r){return 2<=e&&e<=36?o(kc,e,lt(r)):pe(Is(e))}),Qs=Zs(16),Xs=y(function(e,r,n){return w(Sn,e,r,n,1)}),Ks=F(function(e,r,n,a){return w(Sn,e,r,n,a)}),wn=uu,em=$(function(e,r){var n=o(wn,10,e);return Oe(r*n)/n}),rm=Du,nm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=pc(n);if(a.b&&!a.b.b){var t=a.a;return js(b([t,t]))}else return n};return o(ne,rm,o(ne,function(n){return o(Se,function(a){return p(Ns,1,a,n)},Ys(e))},o(ne,ft(Qt),o(ne,Se(function(n){return n.fG}),o(ne,Se(Zt(Vr)),o(ne,Gs("Parsing hex regex failed"),oa(function(n){var a=o(ue,o(ne,r,o(ne,Qs,Hs(af))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return oe(w(Ks,t/255,c/255,u/255,o(em,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return oe(p(Xs,t/255,c/255,u/255))}else break e;return pe("Parsing ints from hex failed")})))))))}(),ia=Mr("input"),st=Mr("label"),mt=je("name"),Dc=$(function(e,r){return p($r,z,r,e)}),am=o(Dc,b(["target","checked"]),Q),tm=function(e){return o(Lc,"change",o(Kn,e,am))},om=function(e){return T(e,!0)},im=function(e){return{$:1,a:e}},cm=$(function(e,r){return o(wc,e,im(r))}),lm=o(Dc,b(["target","value"]),mn),Xt=function(e){return o(cm,"input",o(Kn,om,o(Kn,e,lm)))},Bc=je("max"),Ac=je("min"),Fc=function(e){return o(je,"step",e)},ca=je("type"),Kt=je("value"),Ho=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,P,b([o(st,b([$t(r)]),b([o(J,b([H("relative w-full")]),b([o(J,b([H("inline-block")]),b([ur(r)])),o(J,b([H("inline-block float-right")]),b([ur(ae(n))]))]))])),o(ia,b([ca("range"),o(ee,"width","100%"),aa(r),mt(r),Ac(ae(a)),Bc(ae(t)),Kt(ae(n)),Fc(ae(i)),Xt(o(ne,It,o(ne,lr(42),c)))]),P)]))},um=$(function(e,r){if(r.$)return e;var n=r.a;return n}),vm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,b([H("h-12 py-4")]),b([o(st,b([H("block"),$t(e)]),b([o(ia,b([H("relative bottom-[1px] align-middle mr-2"),ca("checkbox"),aa(e),mt(e),tm(Ts(e)),As(c)]),P),ur(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ho({cg:e,cs:i,cw:t,cA:zs(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ho({cg:e,cs:i,cw:t,cA:o(ne,Oe,ks(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,b([o(J,b([o(ee,"margin-bottom","6px")]),b([o(st,b([$t(e)]),b([ur(e)]))])),o(ia,b([ca("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),aa(e),mt(e),Xt(function(l){return o(Ms,e,o(um,Ds,nm(l)))}),Kt(Es(c))]),P)]))}}),$m=function(e){return o(J,b([H("p-4 border-y-[0.5px] border-white20")]),b([o(J,b([H("text-lg pb-2")]),b([ur(e.fh)])),o(J,b([H("pl-2 pr-2")]),Ps(o(vt,vm,e.av)))]))},fm=function(e){return o(J,b([H("text-xs text-white60")]),o(ue,$m,e))},sm=function(e){return o(J,b([H("absolute left-[104px] bottom-2 text-sm text-white40")]),b([ur("clock: "+o(Cc,3,Or(e).aK))]))},mm=function(e){e.a;var r=e.b.T;return o(Se,function(n){return Oe(60/(Or(e).aK-n))},o(Se,o(ne,cf,function(n){return n.aK}),Qt(o($c,59,r))))},dm=function(e){return o(J,b([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=mm(e);if(r.$===1)return b([ur("... Fps")]);var n=r.a;return b([ur(Me(n)+" Fps")])}())},pm=function(e){return{$:0,a:e}},bm=function(e){var r=e.b.T;return Pr(r)},gm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Pr(r)+1+Pr(n)},hm=function(e){return o(ia,b([H("absolute w-full"),ca("range"),Ac(Me(0)),Bc(Me(gm(e)-1)),Kt(Me(bm(e))),Fc(Me(1)),Xt(o(ne,It,o(ne,lr(42),o(ne,Oe,pm))))]),P)},Io={$:1},Oo={$:3},Jo={$:2},dt=function(e){return!e.b},Uc=Pc("disabled"),Ma=y(function(e,r,n){return o(Jt,b([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),Uc(e),qt(r)]),b([ur("REC")]))}),za=y(function(e,r,n){return o(Jt,b([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Uc(e),qt(n)]),b([o(J,b([H("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),_m=function(e){var r=e.a,n=e.b.ab;return o(J,b([H("py-1")]),b([function(){switch(r.$){case 0:return p(Ma,!1,Io,"text-red-500 font-bold");case 1:return p(Ma,!1,Jo,"text-white60 hover:text-white80 font-bold");default:return p(Ma,!0,Jo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(za,dt(n),wr.fq,Oo);case 1:return p(za,dt(n),wr.fq,Oo);default:return p(za,!1,wr.fp,Io)}}()]))},Cm=function(e){return o(J,b([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([hm(e),_m(e),dm(e),sm(e)]))},ym=function(e){var r=e.a;return Lr(r,pa)},xm=$(function(e,r){var n=ym(r.G)?o(J,P,P):o(J,b([H("absolute pointer-events-none w-8 h-8"),o(ee,"left",ae(e.fs.fU+.5*e.cT.fS)+"px"),o(ee,"top",ae(-e.fs.fY+.5*e.cT.eW)+"px")]),b([o(J,b([H(e.fs.e4?"text-black80":"text-black40")]),b([wr.fs]))]));return o(J,P,b([n]))}),Sm=$(function(e,r){var n=o(Jt,b([H(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),qt(ds),ws("Distraction Free Mode")]),b([wr.f0])),a=40,t=260,i=o(J,b([H("absolute w-8 bottom-12")]),b([o(Go,b([H("text-twitterBlue40 hover:text-twitterBlue"),Wo("https://twitter.com/AzizErkalSelman"),Yo("_blank")]),b([wr.fN]))])),c=80,l=o(J,b([H("absolute w-8 bottom-2")]),b([o(Go,b([H("text-githubCat40 hover:text-githubCat"),Wo("https://github.com/erkal/elm-3d-playground-exploration"),Yo("_blank")]),b([wr.eQ]))])),u=e.cT.fS>640?V(e.cT.eW,a+t,e.cT.fS-(a+t)):V(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aM?o(J,b([H("fixed w-10 h-10 p-1")]),b([n])):o(J,P,b([o(J,b([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ae(a)+"px")]),b([n,i,l])),o(J,b([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ae(t)+"px"),o(ee,"height",ae(v)+"px")]),b([o(ta,ps,fm(Or(r.G).eA))])),o(J,b([H("absolute bottom-0"),o(ee,"left",ae(s)+"px"),o(ee,"height",ae(c)+"px"),o(ee,"width",ae(m)+"px")]),b([o(ta,bs,Cm(r.G))])),o(xm,e,r)]))}),wm=y(function(e,r,n){var a=fs(n.G),t=Or(n.G);return o(J,b([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ee,"width",ae(t.cT.fS)+"px"),o(ee,"height",ae(t.cT.eW)+"px")]),b([o(J,b([H("fixed")]),b([o(ta,oc(vs),o(e,t,a))])),o(J,b([aa("gui")]),b([o(Sm,t,n),o(ta,us,o(r,t,a))]))]))}),Lm=Ne(function(e,r,n,a,t,i){var c=$(function(u,v){return T(w(os,r,i,u,v),jo)}),l=function(u){var v=o(ic,n,u.e1);return T({aM:u.e1.cT.fS<500,G:o(is,v,a)},jo)};return wf({e0:l,fH:oc(ls(ff)),fO:c,fQ:o(wm,e,t)})}),Pm=F(function(e,r,n,a){return de(Lm,e,r,n,a,$(function(t,i){return o(J,P,P)}),y(function(t,i,c){return c}))}),Tm=function(e){return{}},Mm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),Vc=nr,zm=function(e){return p(Cn,$(function(r,n){var a=r.a,t=r.b;return p(nn,a,t,n)}),Vc,e)},km=y(function(e,r,n){return p(Mm,e,r,zm(n))}),Dm=km,ka=y(function(e,r,n){var a=r.a,t=r.b;return T(e,o(mc,T(a,t),n))}),Bm=b([p(Dm,"Camera",!0,b([p(ka,"camera x",T(-40,40),0),p(ka,"camera y",T(-40,40),0),p(ka,"camera z",T(-40,40),16)]))]),Am=$(function(e,r){return r}),Fm=$(function(e,r){return r.b?p($r,A,r,e):e}),mr=function(e){return p($r,Fm,P,e)},Ec=$(function(e,r){return mr(o(ue,e,r))}),Um=function(e){var r=function(n){return o(ue,function(a){return T(n,a)},e)};return Ec(r)},Rc=function(e){return{$:4,a:e}},Vm=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),ga=function(e){return Rc(o(Vm,e,P))},Em=function(e){return ga(e)},la=Em,dn=$u,Ve=function(e){return e*dn/180},Rm=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),Ar=$(function(e,r){return{$:5,a:e,b:r}}),Nc=$(function(e,r){return{dp:Lr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),jc={$:0},M=jc,eo=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(Nc,a,e);return o(Ar,i,t);case 1:return o(Ar,e,n);case 3:return o(Ar,e,n);case 2:return o(Ar,e,n);default:return o(Ar,e,n)}}),Gc=function(e){var r=e;return r},Nm=function(e){var r=Gc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},jm=$(function(e,r){return o(eo,Nm(e),r)}),Gm=$(function(e,r){return o(jm,e,r)}),ro=function(e){var r=e.a,n=e.b,a=e.c;return Gm(p(Rm,r,n,a))},pt=function(e){return ro(V(e,0,0))},yr=function(e){return ro(V(0,e,0))},pn=function(e){return ro(V(0,0,e))},jr=function(e){return e},bn=fu,Wm=function(e){var r=e;return r.eH},Ym=function(e){var r=e;return r.cB},ua=su,De=function(e){var r=e;return r},Ln=function(e){var r=e;return r},Hm=$(function(e,r){var n=r,a=Ln(Ym(e)),t=.5*n,i=bn(t),c=ua(t),l=De(Wm(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,g=1-2*(s+h),C=l.c6*c,x=i*C,_=2*(f-x),L=2*(f+x),D=u*C,W=2*(D+d),N=2*(D-d),E=m*C,Y=2*(E-v),G=2*(E+v),U=C*C,Z=1-2*(h+U),X=1-2*(s+U);return{dp:!0,q:Z,r:L,s:N,t:_,u:X,v:G,w:W,x:Y,y:g,H:a.fU-Z*a.fU-_*a.fY-W*a.c6,I:a.fY-L*a.fU-X*a.fY-Y*a.c6,J:a.c6-N*a.fU-G*a.fY-g*a.c6,bY:1}}),Im=y(function(e,r,n){return o(eo,o(Hm,e,r),n)}),no=y(function(e,r,n){return p(Im,e,r,n)}),Pn={fU:0,fY:0,c6:0},ao=$(function(e,r){return{eH:r,cB:e}}),ir=function(e){return e},Wc=ir({fU:1,fY:0,c6:0}),Yc=Wc,Om=o(ao,Pn,Yc),qo=$(function(e,r){return p(no,Om,jr(e),r)}),to=ir({fU:0,fY:1,c6:0}),Hc=to,Jm=o(ao,Pn,Hc),qm=$(function(e,r){return p(no,Jm,jr(e),r)}),Ic=ir({fU:0,fY:0,c6:1}),oo=Ic,Zm=o(ao,Pn,oo),tn=$(function(e,r){return p(no,Zm,jr(e),r)}),le=Cu,Qm=function(e){var r=e;return r},Xm=function(e){var r=e;return Qm(r.er)},Oc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Km=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ed=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),rd=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),nd=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ad=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),td=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),od=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(td,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(Oc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(Km,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(ed,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(ad,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(rd,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(nd,n,a,t,1);case 8:return e;case 9:return e;default:return e}},id={$:0},va=function(e){var r=e;return r},ve=$(function(e,r){var n=e,a=r;return o(Ie,n,a)}),cd=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(cd,n,a)}),ld=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=va(c(u)),m=o(me,s.dR,e),d=o(ve,s.dO,r),f=o(me,s.dS,n),h=o(ve,s.dP,a),g=o(me,s.dT,t),C=o(ve,s.dQ,i),x=c,_=v;e=m,r=d,n=f,a=h,t=g,i=C,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),ud=y(function(e,r,n){var a=va(e(r));return $a(ld,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Da=$(function(e,r){var n=e,a=r;return I(a,n)<1}),vd=function(e){return o(Da,e.dO,e.dR)&&o(Da,e.dP,e.dS)&&o(Da,e.dQ,e.dT)?e:{dO:o(ve,e.dR,e.dO),dP:o(ve,e.dS,e.dP),dQ:o(ve,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},gn=function(e){var r=e;return r},on=function(e){var r=e;return r.fU},cn=function(e){var r=e;return r.fY},ln=function(e){var r=e;return r.c6},Jc=function(e){var r=gn(e),n=r.a,a=r.b,t=r.c,i=on(n),c=cn(n),l=ln(n),u=on(a),v=cn(a),s=ln(a),m=on(t),d=cn(t),f=ln(t);return vd({dO:o(ve,i,o(ve,u,m)),dP:o(ve,c,o(ve,v,d)),dQ:o(ve,l,o(ve,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,s,f))})},qc=Kv,dr=function(e){return qc(Ln(e))},Zc=function(e){return qc(Gc(e))},io=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),bt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Qc=function(e){return e},Xc={fU:0,fY:0,c6:0},$d=$(function(e,r){var n=e,a=r,t=o(Ie,O(a.fU),o(Ie,O(a.fY),O(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=le(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Xc}),fd=$d(Qc(1)),Kc=y(function(e,r,n){var a=o(bt,r,n),t=o(bt,e,r);return fd(o(io,a,t))}),sd=function(e){var r=gn(e),n=r.a,a=r.b,t=r.c,i=Zc(p(Kc,n,a,t));return V({o:i,bU:dr(n)},{o:i,bU:dr(a)},{o:i,bU:dr(t)})},md=$(function(e,r){return{$:2,a:e,b:r}}),el=md({df:3,$7:0,dV:4}),dd=function(e){if(e.b){var r=e.a,n=e.b,a=el(o(ue,sd,e)),t=p(ud,Jc,r,n);return w(Oc,t,e,a,0)}else return id},Pe=y(function(e,r,n){return V(e,r,n)}),Gn=function(e){return e},fr=$(function(e,r){var n=r;return e*n}),Je=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),rl=function(){var e=Gn(1),r=Gn(1),n=Gn(1),a=o(fr,-.5,e),t=o(fr,-.5,r),i=o(fr,-.5,n),c=p(Je,i,t,a),l=o(fr,.5,e),u=p(Je,i,t,l),v=o(fr,.5,r),s=p(Je,i,v,a),m=p(Je,i,v,l),d=o(fr,.5,n),f=p(Je,d,t,a),h=p(Je,d,v,a),g=p(Je,d,t,l),C=p(Je,d,v,l);return od(dd(b([p(Pe,c,h,f),p(Pe,c,s,h),p(Pe,u,g,C),p(Pe,u,C,m),p(Pe,f,h,C),p(Pe,f,C,g),p(Pe,c,m,s),p(Pe,c,u,m),p(Pe,c,f,g),p(Pe,c,g,u),p(Pe,s,C,h),p(Pe,s,m,C)])))}(),An={$:0},pd=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),bd=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Zc(p(Kc,u,l,c)),s={o:v,bU:dr(u)},m={o:v,bU:dr(l)},d={o:v,bU:dr(c)};return o(A,s,o(A,m,o(A,d,n)))}),gd=function(e){var r=e;return r.D},hd=F(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return K(p(e,t,i,c))}),gt=4294967295>>>32-fn,ht=au,_d=y(function(e,r,n){e:for(;;){var a=gt&r>>>e,t=o(ht,a,n);if(t.$){var v=t.a;return o(ht,gt&r,v)}else{var i=t.a,c=e-fn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Cd=function(e){return e>>>5<<5},yd=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,Cd(n))>-1?K(o(ht,gt&e,i)):K(p(_d,a,e,t))}),xd=function(e){var r=e;return r.ah},Ba=$(function(e,r){return o(yd,e,xd(r))}),Sd=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(hd,y(function(c,l,u){return V(c,l,u)}),o(Ba,a,e),o(Ba,t,e),o(Ba,i,e))};return o(Zt,r,gd(e))},wd=y(function(e,r,n){e:for(;;){var a=o(jt,ke,e),t=a.a,i=a.b;if(I(tt(t),ke)<0)return o(tc,!0,{z:r,l:n,p:t});var c=i,l=o(A,nc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),nl=function(e){return e.b?p(wd,e,P,0):ec},Ld=y(function(e,r,n){return e(r(n))}),Pd=$(function(e,r){return!o(dc,o(Ld,Lf,e),r)}),Td=$(function(e,r){return p($r,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Md=function(e){var r=e.a;return r},zd=$(function(e,r){var n=Md(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(Pd,a,r)?{D:r,ah:e}:{D:o(Td,a,r),ah:e}}),kd=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),al=kd({df:1,$7:3,dV:4}),Er=function(e){var r=e;return r},Wn=$(function(e,r){var n=Er(r),a=Er(e);return T(V(a.fU,a.fY,a.c6),V(n.fU,n.fY,n.c6))}),co=qv,Zo=p(co,0,0,0),Aa=Ne(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ot,o(Wn,e,r),t);if(v.$){var m={o:Zo,bU:dr(r)},d={o:Zo,bU:dr(e)},f=u+1,h=u;return V(o(A,V(n,h,f),o(A,V(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),Dd=Le(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,g=a,C=e,x=r,_=v,L=a+3,D=de(Aa,s,d,f,g,r,de(Aa,m,s,h,f,r,de(Aa,d,m,g,h,r,t)));e=C,r=x,n=_,a=L,t=D;continue e}else{var W=t,N=W.a,E=W.b;return T(N,ze(E))}}),Bd=Le(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,g=n,C=p(nn,o(Wn,d,s),f,p(nn,o(Wn,s,m),h,p(nn,o(Wn,m,d),g,t))),x=o(A,V(g,h,f),a),_=e,L=v,D=n+3,W=x,N=C;e=_,r=L,n=D,a=W,t=N;continue e}else return V(a,t,n)}),Cr=y(function(e,r,n){var a=Sd(n),t=p($r,bd(r),P,a),i=S(Bd,r,a,0,P,Vc),c=i.a,l=i.b,u=i.c,v=S(Dd,r,l,a,0,V(c,P,u)),s=v.a,m=v.b,d=dt(m)?t:te(t,m);return p(pd,e,o(zd,nl(d),s),o(al,d,s))}),Qo=function(e){return{D:o(ue,function(r){return V(3*r,3*r+1,3*r+2)},o($n,0,Pr(e)-1)),ah:nl(mr(o(ue,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Ad=function(e){switch(e.$){case 0:return An;case 1:var a=e.a,r=e.b,n=o(ue,gn,r);return p(Cr,a,Vr,Qo(n));case 2:var a=e.a,r=e.b,n=o(ue,gn,r);return p(Cr,a,Vr,Qo(n));case 3:var a=e.a,t=e.b;return p(Cr,a,Vr,t);case 4:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bU},t);case 8:return An;case 9:return An;default:return An}},Xo=Ad(rl),Fd=function(e){var r=e;return r.aL},be=$(function(e,r){return{$:1,a:e,b:r}}),Ud={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Vd=$(function(e,r){switch(r.$){case 0:return o(V$,e,r);case 1:return o(E$,e,r);case 2:return o(R$,e,r);case 3:return o(N$,e,r);case 4:return o(j$,e,r);default:return o(G$,e,r)}}),Ed=$(function(e,r){switch(r.$){case 0:return o(s$,e,r);case 1:return o(m$,e,r);case 2:return o(d$,e,r);case 3:return o(p$,e,r);case 4:return o(b$,e,r);case 5:return o(g$,e,r);case 6:return o(h$,e,r);case 7:return o(_$,e,r);default:return C$(e)}}),ie=f$,Rd=1029,Nd=function(e){return{$:5,a:e}},tl=function(e){var r=e;return Nd(r)},jd=tl(Rd),Gd=1028,Wd=tl(Gd),we=y(function(e,r,n){return r===1?e?o(A,jd,n):o(A,Wd,n):n}),ol={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Fa=F(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,m){return S(ie,p(we,l,a,m),ol,Ud,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),il={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},cl={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ar=F(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,m){return S(ie,p(we,l,a,m),cl,il,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),ll=$(function(e,r){return{$:3,a:e,b:r}}),Yd={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},ul={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Hd=F(function(e,r,n,a){return o(ll,n,re(function(t,i,c,l,u,v,s,m){return S(ie,m,ul,Yd,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),vl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},ha=function(e){var r=e;return r},lo=e$,tr=Le(function(e,r,n,a,t){return o(be,n,re(function(i,c,l,u,v,s,m,d){return S(ie,p(we,u,t,d),cl,vl,a,{aO:o(lo,ha(r),e),b:l,c,d:s,e:i,f:v})}))}),Id={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bT",sceneProperties:"e"}},Od=Le(function(e,r,n,a,t){return o(ll,a,re(function(i,c,l,u,v,s,m,d){return S(ie,d,ul,Id,t,{aO:o(lo,ha(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),$l={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},fl={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Fn=F(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ie,p(we,l,a,m),fl,$l,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),sl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},ml={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jd=Ne(function(e,r,n,a,t,i){return o(be,a,re(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return S(ie,p(we,v,i,f),ml,sl,t,{P:g,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cr:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f:s})}))}),dl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aX",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},qd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,re(function(m,d,f,h,g,C,x,_){var L=x.a,D=x.b;return S(ie,p(we,h,s,_),ml,dl,v,{b5:e,b8:r,b9:i,ca:a,P:D,be:L.be,bL:L.bL,bM:L.bM,bN:L.bN,cv:t,b:f,c:d,aX:c,d:C,cS:n,e:m,a0:l,f:g})}))}}}}}}}}}}},pl={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Un=Ne(function(e,r,n,a,t,i){return o(be,a,re(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return S(ie,p(we,v,i,f),fl,pl,t,{b4:e,P:g,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),Zd=function(e){return{$:0,a:e}},Ko=$(function(e,r){return{$:1,a:e,b:r}}),un=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),_a=Zv,Ca=Qv,ya=Xv,Jr=r$,Qd=function(e){return w(Jr,_a(e),Ca(e),ya(e),1)},uo=w(Jr,0,0,0,0),Yn=$(function(e,r){if(r.$){var a=r.a.C;return T(a,uo)}else{var n=r.a;return T(e,Qd(n))}}),bl=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Ko,T(t,uo),o(un,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ko,o(Yn,t,e),o(un,t,r))}else{var a=n.a.a;return n.b.a,Zd(a)}}),Xd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Kd=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ue=Ov,e0=function(e){return o(Ue,e,1)},_t=o(Ue,0,0),Dr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,_t)}else{var n=r.a;return T(e,e0(n))}}),gl=F(function(e,r,n,a){var t=w(Kd,e,r,n,a);if(t.a.$){var u=t.a.a.C;return w(Vn,T(u,uo),o(Dr,u,r),o(Dr,u,n),o(un,u,a))}else if(t.b.$){var u=t.b.a.C;return w(Vn,o(Yn,u,e),T(u,_t),o(Dr,u,n),o(un,u,a))}else if(t.c.$){var u=t.c.a.C;return w(Vn,o(Yn,u,e),o(Dr,u,r),T(u,_t),o(un,u,a))}else if(t.d.$){var u=t.d.a.C;return w(Vn,o(Yn,u,e),o(Dr,u,r),o(Dr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Xd,i,c,l)}}),r0={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},Ua=Le(function(e,r,n,a,t){return o(be,n,re(function(i,c,l,u,v,s,m,d){return S(ie,p(we,u,t,d),ol,r0,a,{b2:ha(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),hl={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},n0=F(function(e,r,n,a){return o(be,r,re(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(ie,p(we,l,a,m),hl,sl,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),a0=wt(function(e,r,n,a,t,i,c,l,u){return o(be,c,re(function(v,s,m,d,f,h,g,C){var x=g.a,_=g.b;return S(ie,p(we,d,u,C),hl,dl,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:s,aX:e,d:h,cS:n,e:v,a0:0,f})}))}),vo=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),t0=function(e){var r=e;return p(vo,r.dR,r.dO,.5)},o0=function(e){var r=e;return p(vo,r.dS,r.dP,.5)},i0=function(e){var r=e;return p(vo,r.dT,r.dQ,.5)},c0=function(e){return p(Je,t0(e),o0(e),i0(e))},l0=function(e){var r=e;return r.dO},u0=function(e){var r=e;return r.dP},_l=function(e){var r=e;return r.dQ},v0=function(e){var r=e;return r.dR},$0=function(e){var r=e;return r.dS},Cl=function(e){var r=e;return r.dT},cr=$(function(e,r){var n=e,a=r;return a-n}),yl=function(e){return V(o(cr,v0(e),l0(e)),o(cr,$0(e),u0(e)),o(cr,Cl(e),_l(e)))},j=function(e){var r=yl(e),n=r.a,a=r.b,t=r.c;return{ey:Ln(c0(e)),eS:n/2,eT:a/2,eU:t/2}},f0=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return w(Fa,l,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Fa,l,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Fa,l,j(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(ar,n,j(t),c,a);case 8:var t=r.a,c=r.c;return w(ar,n,j(t),c,0);case 9:var t=r.a,c=r.c;return w(ar,n,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(Hd,n,i,j(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return S(Ua,l,v,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ua,l,v,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ua,l,v,j(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(tr,u,v,j(t),c,a);case 8:var t=r.a,c=r.c;return S(tr,u,v,j(t),c,0);case 9:var t=r.a,c=r.c;return S(tr,u,v,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Od,u,v,i,j(t),c)}}case 2:e.a;var s=e.b,N=e.c,m=o(bl,s,N);if(m.$){var h=m.a,g=h.a;h.b;var C=m.b,x=C.a,_=C.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return w(n0,g,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return de(Jd,g,x,_,j(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var d=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return w(Fn,d,j(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return w(Fn,d,j(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return w(Fn,d,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(Fn,d,j(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var L=e.b,D=e.c,W=e.d,N=e.e,E=w(gl,L,D,W,N);if(E.$){var Z=E.a,X=Z.a,he=Z.b,_e=E.b,$e=_e.a,fe=_e.b,Ge=E.c,We=Ge.a,zr=Ge.b,kr=E.d,x=kr.a,_=kr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Xl(a0,X,he,$e,fe,We,zr,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return qd(X)(he)($e)(fe)(We)(zr)(x)(_)(j(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var Y=E.a,G=E.b,U=E.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return de(Un,Y,G,U,j(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return de(Un,Y,G,U,j(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return de(Un,Y,G,U,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return de(Un,Y,G,U,j(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),Va=function(e){var r=e;return r.fU},Ea=function(e){var r=e;return r.fY},Ra=function(e){var r=e;return r.c6},s0=function(e){var r=e,n=Ra(r.c7),a=Ea(r.c7),t=Va(r.c7),i=Ra(r.c5),c=Ea(r.c5),l=Va(r.c5),u=Ra(r.c4),v=Ea(r.c4),s=Va(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},xa=function(e){var r=e;return r.cB},Tn=function(e){var r=e;return r.c4},Mn=function(e){var r=e;return r.c5},zn=function(e){var r=e;return r.c7},m0=function(e){var r=Ln(xa(e)),n=De(zn(e)),a=De(Mn(e)),t=De(Tn(e));return{dp:s0(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},d0=$(function(e,r){return o(eo,m0(e),r)}),$o=function(e){return{$:2,a:e}},p0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),b0=a$,g0=n$,ei=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=g0(a),h=f.fU,g=f.fY,C=f.c6,x=f.em,_=b0({em:x,fU:h*s,fY:g*m,c6:C*d});return $a(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ct=$(function(e,r){switch(r.$){case 0:return jc;case 5:var n=r.a,a=r.b;return o(Ar,n,o(Ct,e,a));case 1:var t=r.a,i=r.b;return o(be,o(p0,e,t),o(ei,e,i));case 3:return r;case 2:var i=r.a;return $o(o(ei,e,i));default:var c=r.a;return Rc(o(ue,Ct(e),c))}}),h0=$(function(e,r){var n=r;return o(Ct,e,n)}),xl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Gr=519,Sl=7683,wl=7682,ge=7680,_0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},fo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(ne,c(v.bm),o(ne,l(v.a9),o(ne,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(_0,a,t,i)))}),C0=p(fo,{cp:0,cO:0,c3:15},{a9:ge,bm:Gr,bu:ge,bv:Sl},{a9:ge,bm:Gr,bu:ge,bv:wl}),y0=p(fo,{cp:0,cO:0,c3:15},{a9:ge,bm:Gr,bu:ge,bv:wl},{a9:ge,bm:Gr,bu:ge,bv:Sl}),Ll=$(function(e,r){return e?o(A,y0,r):o(A,C0,r)}),x0={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},S0=function(e){if(e.$){var r=e.c;return K(re(function(n,a,t,i,c,l,u,v){return S(ie,o(Ll,i,v),x0,xl,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},ri=function(e){var r=S0(e);if(r.$)return M;var n=r.a;return $o(n)},w0=F(function(e,r,n,a){var t=o(f0,n,rl),i=function(){var s=T(e,r);return s.a?s.b?ga(b([t,ri(Xo)])):t:s.b?ri(Xo):M}(),c=Fd(a),l=c.a,u=c.b,v=c.c;return o(d0,Xm(a),o(h0,V(l,u,v),i))}),Pl=$(function(e,r){return w(w0,!0,!0,e,r)}),Re=function(e){var r=e;return O(r)},Na=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),ja=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),L0=ir({fU:-1,fY:0,c6:0}),P0=ir({fU:0,fY:-1,c6:0}),T0=ir({fU:0,fY:0,c6:-1}),Wr=function(e){return e},M0=Ne(function(e,r,n,a,t,i){var c=o(Na,n,i)?Ic:T0,l=o(Na,r,t)?to:P0,u=o(Na,e,a)?Wc:L0,v=V(Re(o(cr,e,a)),Re(o(cr,r,t)),Re(o(cr,n,i))),s=p(Je,o(ja,e,a),o(ja,r,t),o(ja,n,i)),m=Wr({cB:s,c4:u,c5:l,c7:c});return{er:m,aL:v}}),Tl=$(function(e,r){return de(M0,on(e),cn(e),ln(e),on(r),cn(r),ln(r))}),pr=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),z0=$(function(e,r){var n=r/2;return o(Pl,e,o(Tl,p(pr,-n,-n,-n),p(pr,n,n,n)))}),k0=F(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return w(Sn,f,d,m,a)}),D0=y(function(e,r,n){return w(k0,e,r,n,1)}),ni=function(e){return{$:0,a:e}},B0=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ml=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Ga=function(e){return p(Ml,0,1,e<=.04045?e/12.92:o(wn,(e+.055)/1.055,2.4))},A0=function(e){var r=Mc(e),n=r.cN,a=r.cd,t=r.b6;return p(co,Ga(n),Ga(a),Ga(t))},zl=function(e){return p(B0,0,ni(A0(e)),ni(0))},F0=$(function(e,r){return(r-ac(r/e)*e)/e}),U0=function(e){return 2*dn*e},Kr=F(function(e,r,n,a){return e+(r-e)*(1+bn(U0(o(F0,n,a))))/2}),yt=function(e){return zl(p(D0,w(Kr,0,1,7,e.aK),.8,.8))},Wa=function(e){return o(z0,yt(e),1)},kl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=V(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Pl,e,o(Tl,p(pr,-c,-l,-u),p(pr,c,l,u)))}),ai={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},ti={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Xe=c$,en=function(e){var r=gn(e),n=r.a,a=r.b,t=r.c,i=Er(n),c=Er(a),l=Er(t);return Xe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},En=el(b([V({cZ:0},{cZ:1},{cZ:2})])),V0=$(function(e,r){var n=Jc(r),a=j(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var t=e.b.a;return o(be,a,re(function(_,L,D,W,N,E,Y,G){return S(ie,p(we,W,0,G),ai,il,En,{aw:t,b:D,c:L,d:E,e:_,br:en(r),f:N})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return o(be,a,re(function(_,L,D,W,N,E,Y,G){return S(ie,p(we,W,0,G),ai,vl,En,{aO:o(lo,ha(c),i),b:D,c:L,d:E,e:_,br:en(r),f:N})}));case 2:e.a;var l=e.b,f=e.c,u=o(bl,l,f);if(u.$)return M;var v=u.a;return o(be,a,re(function(_,L,D,W,N,E,Y,G){var U=Y.a,Z=Y.b;return S(ie,p(we,W,0,G),ti,$l,En,{P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cq:v,b:D,c:L,d:E,e:_,br:en(r),f:N})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,h=w(gl,s,m,d,f);if(h.$)return M;var g=h.a,C=h.b,x=h.c;return o(be,a,re(function(_,L,D,W,N,E,Y,G){var U=Y.a,Z=Y.b;return S(ie,p(we,W,0,G),ti,pl,En,{b4:g,P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cu:x,b:D,c:L,d:E,cR:C,e:_,br:en(r),f:N})}))}}),E0=function(){var e=b([{a$:o(Ue,0,1)},{a$:o(Ue,1,1)},{a$:o(Ue,2,1)},{a$:o(Ue,0,-1)},{a$:o(Ue,1,-1)},{a$:o(Ue,2,-1)}]),r=b([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(al,e,r)}(),R0={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},oi=function(e){return $o(re(function(r,n,a,t,i,c,l,u){return S(ie,o(Ll,t,u),R0,xl,E0,{b:a,c:n,d:c,e:r,bZ:l,br:en(e),f:i})}))},N0=F(function(e,r,n,a){var t=o(V0,n,a),i=T(e,r);return i.a?i.b?ga(b([t,oi(a)])):t:i.b?oi(a):M}),j0=$(function(e,r){return w(N0,!0,!0,e,r)}),G0=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(j0,e,p(Pe,p(pr,n.fU,n.fY,n.c6),p(pr,a.fU,a.fY,a.c6),p(pr,t.fU,t.fY,t.c6)))}),W0=function(e){var r=o(yr,-(le(3)/6),o(pt,-.5,o(tn,-Ve(30),o(G0,yt(e),V({fU:0,fY:0,c6:0},{fU:bn(Ve(30)),fY:ua(Ve(30)),c6:0},{fU:0,fY:1,c6:0}))))),n=o(yr,-(le(3)/6),o(kl,yt(e),V(1,1e-8,1)));return la(b([o(pn,-.5,r),o(pn,.5,r),n,o(tn,Ve(120),n),o(tn,Ve(240),n)]))},Y0=$(function(e,r){var n=r.a,a=r.b,t=$(function(m,d){return o(yr,(1+le(3))/2,o(tn,m,o(yr,-((1+le(3))/2),d)))}),i=dn,c=20,l=function(m){return o(qo,w(Kr,0,i,c,e.aK),m)},u=o(t,Ve(240),l(Wa(e))),v=o(pt,(3+le(3))/2,o(yr,(1+le(3))/2,l(Wa(e)))),s=l(la(b([o(tn,Ve(90),o(yr,1/2+le(3)/6,W0(e))),Wa(e)])));return o(pn,w(Kr,-1,1,7,e.aK),o(yr,a*(1+le(3)),o(pt,n*(3+le(3)),o(qm,w(Kr,0,i,c,e.aK),o(qo,w(Kr,0,i,c,e.aK),la(b([s,o(t,Ve(60),s),o(t,Ve(120),s),o(t,-Ve(60),s),v,u])))))))}),H0=function(e){return la(o(ue,Y0(e),o(Um,o($n,-1,1),o($n,-1,1))))},I0=$(function(e,r){return o(Se,function(n){if(n.$)return 0;var a=n.b;return a},o(Ot,e,r.av))}),O0=$(function(e,r){return o(lr,0,Qt(o(Zt,I0(e),r)))}),J0=$(function(e,r){return o(O0,e,r.eA)}),Ya=J0,q0=du,Z0=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Ie,O(c),o(Ie,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,m=le(s*s+v*v+u*u);return K({fU:s/m,fY:v/m,c6:u/m})}else return q}),Ha=function(e){return e},Hn=function(e){var r=e,n=o(Ie,O(r.fU),o(Ie,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=le(i*i+t*t+a*a);return K({fU:i/c,fY:t/c,c6:a/c})}else return q},Q0=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),Dl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),X0=$(function(e,r){var n=e,a=r;return I(a,n)<0}),K0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),ep=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),rp=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Yr=0,np=y(function(e,r,n){return o(ft,function(a){var t=o(K0,o(ep,a,r),r);return o(ft,function(i){var c=o(io,r,e),l=o(Q0,n,c),u=o(Dl,Yr,l)?c:o(X0,Yr,l)?rp(c):Xc;return o(Se,function(v){return V(a,i,v)},Hn(u))},Hn(t))},Hn(e))}),ap=function(e){var r=e,n=O(r.c6),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=le(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=le(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=le(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=le(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},Bl=function(e){var r=ap(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return T(r,c)},tp=function(e){var r=e;return r},op=$(function(e,r){var n=Bl(e),a=n.a,t=n.b;return Wr({cB:r,c4:a,c5:t,c7:e})}),ip=function(e){var r=o(bt,e.aS,e.dj),n=tp(e.ei),a=o(io,r,n),t=p(np,r,n,a);if(t.$){var v=Hn(r);if(v.$){var m=Bl(e.ei),d=m.a,f=m.b;return Wr({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(op,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Wr({cB:e.dj,c4:u,c5:l,c7:c})}},cp=function(e){return{$:0,a:e}},In=function(e){var r=e;return .5*r},lp=mu,up=function(e){var r=e;return lp(r)},vp=function(e){var r=In(Re(e.ej)),n=up(r);return{cM:cp(n),c2:e.c2}},$p=function(e){var r=e.aS,n=e.dj,a=e.ei;return vp({ej:jr(2*q0(.5)),c2:ip({dj:Ha(n),aS:Ha(r),ei:o(lr,to,o(Z0,Pn,Ha(a)))})})},fp=function(e){return e},sp=function(e){return Gn(.01*e)},ii=function(e){return e},mp=function(e){return e},dp=function(e){return{$:0,a:e}},pp=dp,bp={$:3},gp=bp,hp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),_p=hp,Cp=function(e){return{$:1,a:e}},yp=Cp,xp=function(e){return o(_r,"height",Me(e))},Sp=function(e){return bv(yv(e))},wp=Sp,Lp=function(e){return{$:2,a:e}},Pp=Lp,Tp=function(e){return o(xr,"",e)},Mp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return Tp(b(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(i(t)),")"]))},zp=y(function(e,r,n){return p(U$,e,r,n)}),ci=function(e){var r=e;return r},Ia=w(Jr,1,1,1,1),qe=y(function(e,r,n){return o(ue,function(a){return o(a,r,n)},e)}),kp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Dp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(kp,n*a/t,n,n*(1-a-t)/t)}),Bp=function(e){var r=e.a,n=e.b,a=e.c;return p(co,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},so=$(function(e,r){return Bp(o(Dp,e,r))}),Ap=function(e){return Xe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Oa=Le(function(e,r,n,a,t){var i=a.dp?1:-1,c=w(Jr,a.bY,a.bY,a.bY,i);return de(t,e,c,Ap(a),a.dp,r,n)}),Al=Ne(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Nc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,g=o(A,S(Oa,e,r,n,a,h),i.M);return{M:g,U:i.U,fB:i.fB};case 3:var C=t.b,x=o(A,S(Oa,e,r,n,a,C),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,L=o(A,S(Oa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:L};default:var D=t.a;return p(Cn,w(Al,e,r,n,a),i,D)}}),Fp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Fl=Fp,mo=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Up=function(e){var r=e.Z,n=e.W,a=e.V;return w(mo,518,r,n,a)},Vp=$(function(e,r){return{$:6,a:e,b:r}}),Ep=Vp,Ul=b([Up({V:1,W:0,Z:!1}),w(Fl,!1,!1,!1,!1),o(Ep,0,1)]),po=8,Vl=15,Rr=7681,Rp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Np=$(function(e,r){return{$:0,a:e,b:r}}),jp=Np({df:1,$7:0,dV:5}),Gp=jp(b([{bU:o(Ue,-1,-1)},{bU:o(Ue,1,-1)},{bU:o(Ue,-1,1)},{bU:o(Ue,1,1)}])),Wp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},bo=function(e){return p(fo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},go=function(e){return S(ie,b([bo(e),w(Fl,!1,!1,!1,!1)]),Wp,Rp,Gp,{})},Yp=go({a9:Rr,cp:0,cO:po,bm:Gr,c3:Vl,bu:Rr,bv:Rr}),Hp=516,li=5386,Ip=function(e){return o(wn,2,e+4)},El=function(e){return go({a9:ge,cp:Vl,cO:po,bm:Hp,c3:Ip(e),bu:li,bv:li})},Op=y(function(e,r,n){return mr(b([p(qe,e,n,Ul),b([El(r),Yp])]))}),Jp=$(function(e,r){return mr(o(Zi,Op(e),r))}),qp=function(e){var r=e.Z,n=e.W,a=e.V;return w(mo,513,r,n,a)},Zp=qp({V:1,W:0,Z:!0}),Qp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Xp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,g=v.c;return Qp(s)(m)(d)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},Kp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ui=$(function(e,r){var n=e,a=r;return p(Kp,32774,n,a)}),e1=1,vi=771,r1=770,ho=Xp({bw:0,aH:o(ui,e1,vi),bz:0,bB:o(ui,r1,vi),bG:0,bW:0}),Br=b([Zp,ho]),$i=function(e){var r=e;return xa(r)},n1=function(e){return e},a1=function(e){return Wr({cB:n1({fU:e.H,fY:e.I,c6:e.J}),c4:ir({fU:e.q,fY:e.r,c6:e.s}),c5:ir({fU:e.t,fY:e.u,c6:e.v}),c7:ir({fU:e.w,fY:e.x,c6:e.y})})},Ja=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Rl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Nl=$(function(e,r){return{cB:o(Rl,e,xa(r)),c4:o(Ja,e,Tn(r)),c5:o(Ja,e,Mn(r)),c7:o(Ja,e,zn(r))}}),t1=$(function(e,r){var n=va(r),a=va(e);return{dO:o(ve,a.dO,n.dO),dP:o(ve,a.dP,n.dP),dQ:o(ve,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),o1=function(e){var r=e;return V(r.fU,r.fY,r.c6)},On=$(function(e,r){var n=e,a=r;return a+n}),i1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=In(Re(a)),c=In(Re(n)),l=In(Re(t)),u=o1(r),v=u.a,s=u.b,m=u.c;return{dO:o(On,c,v),dP:o(On,i,s),dQ:o(On,l,m),dR:o(cr,c,v),dS:o(cr,i,s),dT:o(cr,l,m)}}),fi=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=De(zn(e)),d=O(l*m.fU)+O(c*m.fY)+O(i*m.c6),f=De(Mn(e)),h=O(l*f.fU)+O(c*f.fY)+O(i*f.c6),g=De(Tn(e)),C=O(l*g.fU)+O(c*g.fY)+O(i*g.c6),x=o(i1,V(C,h,d),o(Rl,e,p(pr,s,v,u)));if(a.$)return K(x);var _=a.a;return K(o(t1,_,x))}),xt=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 1:var c=t.a,l=w(fi,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 2:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 3:var c=t.a,l=w(fi,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 4:var u=t.a,f=e,h=r,g=w(xt,e,r,n,u),C=i;e=f,r=h,n=g,a=C;continue e;default:var v=t.a,s=t.b,m=o(Nl,a1(v),e),d=r*v.bY,f=e,h=r,g=w(xt,m,d,n,b([s])),C=i;e=f,r=h,n=g,a=C;continue e}}else return n}),c1={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},l1=function(e){var r=e;return r},si=go({a9:Rr,cp:0,cO:po,bm:Gr,c3:255,bu:Rr,bv:Rr}),u1=function(e){var r=e,n=o(Ie,O(r.fU),o(Ie,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=le(i*i+t*t+a*a);return c*n}else return Yr},xe={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},Ae=$(function(e,r){var n=e,a=r;return Xe({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),rn=T({be:o(Ae,xe,xe),bL:o(Ae,xe,xe),bM:o(Ae,xe,xe),bN:o(Ae,xe,xe)},w(Jr,0,0,0,0)),mi=function(e){var r=e;return-r},jl=514,Gl=function(e){var r=e.Z,n=e.W,a=e.V;return w(mo,515,r,n,a)},Wl=240,v1=b([Gl({V:1,W:0,Z:!0}),bo({a9:ge,cp:Wl,cO:0,bm:jl,c3:0,bu:ge,bv:ge}),ho]),$1=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Re(a),l=c,u=Re(t),v=u,s=n.cM;if(s.$){var d=s.a;return it(v)?Xe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Xe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return it(v)?Xe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Xe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Rn=$(function(e,r){return(1&e>>r)===1?0:1}),f1=function(e){return b([Gl({V:1,W:0,Z:!0}),bo({a9:ge,cp:Wl,cO:e,bm:jl,c3:0,bu:ge,bv:ge}),ho])},s1=y(function(e,r,n){return mr(o(ue,function(a){var t=a<<4,i=w(Jr,o(Rn,a,0),o(Rn,a,1),o(Rn,a,2),o(Rn,a,3));return p(qe,e,T(r,i),f1(t))},o($n,1,o(wn,2,n)-1)))}),hn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},m1=l$,di=function(e){var r=e;return hn(zn(r))},d1={cB:Pn,c4:Yc,c5:Hc,c7:oo},p1=function(e){var r=Ln(xa(e)),n=De(zn(e)),a=De(Mn(e)),t=De(Tn(e));return Xe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},b1=$(function(e,r){var n=r;return p1(o(Nl,n,e))}),g1=function(e){return o(b1,d1,e)},h1=function(e){var r=e;return r.c2},_1=function(e){var r=e;return Tn(r)},C1=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),y1=function(e){var r=e;return Mn(r)},x1=function(e){var r=h1(e.ev),n=Wr({cB:$i(r),c4:_1(r),c5:y1(r),c7:hn(di(r))}),a=ga(e.aQ),t=a,i=w(xt,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=g1(r),u=o(fr,.99,o(ve,Re(e.aJ),mi(_l(c)))),v=yl(c),s=v.a,m=v.b,d=v.c,f=u1(p(C1,s,m,d)),h=o(fr,1.01,o(On,f,mi(Cl(c)))),g=o($1,e.ev,{eq:e.eq,eP:h,fi:u}),C=m1(g).dM,x=C?De(hn(di(r))):Er($i(r)),_=function(){var $e=e.b_;switch($e.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var fe=$e.a;return T(3,fe);case 4:var fe=$e.a;return T(4,fe);default:return T(5,0)}}(),L=_.a,D=_.b,W=e.bE,N=W,E=o(so,N,e.b0),Y=E,G=Xe({dx:0,dy:x.fU,dz:_a(Y),dA:e.ec,dB:0,dC:x.fY,dD:Ca(Y),dE:l1(f),dF:0,dG:x.c6,dH:ya(Y),dI:L,dJ:0,dK:C,dL:0,dM:D}),U=de(Al,G,l,g,c1,t,{M:P,U:P,fB:P}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return mr(b([p(qe,U.M,T(X,Ia),Br),p(qe,U.U,rn,Br)]));case 1:var X=Z.a;return mr(b([p(qe,U.M,rn,Br),b([si]),p(qe,U.fB,X.be,Ul),b([El(0)]),p(qe,U.M,T(X,Ia),v1),p(qe,U.U,rn,Br)]));default:var he=Z.a,_e=Z.b;return mr(b([p(qe,U.M,T(_e,Ia),Br),b([si]),o(Jp,U.fB,he),p(s1,U.M,_e,Pr(he)),p(qe,U.U,rn,Br)]))}},S1=function(e){return o(_r,"width",Me(e))},w1=$(function(e,r){var n=b([yp(1),Pp(0),pp(!0),w(_p,0,0,0,0)]),a=function(){var L=e.b1;switch(L.$){case 0:return V(n,"0",1);case 1:return V(o(A,gp,n),"1",1);default:var D=L.a;return V(n,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=ci(v),m=o(ee,"height",Me(s)+"px"),d=ci(u),f=d/s,h=o(Ec,function(L){return x1({eq:f,ev:e.ev,aJ:e.aJ,aQ:L.aQ,bE:L.bE,bK:L.bK,ec:c,b_:L.b_,b0:L.b0})},r),g=o(ee,"width",Me(d)+"px"),C=e.aI,x=C,_=Mp(x);return p(wp,"div",b([o(ee,"padding","0px"),g,m]),b([T(i,p(zp,t,b([S1(Oe(d*c)),xp(Oe(s*c)),g,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),L1=function(e){return o(w1,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL},b([{aQ:e.aQ,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},Yl=function(e){return e},pi=Yl({fU:.31271,fY:.32902}),P1=$(function(e,r){var n=e,a=De(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(so,r.ce,r.b7),u=l;return{bz:ya(u),ex:n,bG:Ca(u),cK:0,bW:_a(u),c_:1,fU:-t,fY:-i,c6:-c}}),T1=function(e){return e},M1=function(e){return T1(1.2*o(wn,2,e))},qa=function(e){return e},z1={$:0},k1=z1,bi=function(e){var r=e;return r},D1=function(e){e:for(;;){if(Lr(e.e2,Yr)&&Lr(e.e3,Yr))return xe;if(o(Dl,Re(e.e2),Re(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:hn(e.ei)};e=r;continue e}else{var n=O(bi(e.e3)/dn),a=O(bi(e.e2)/dn),t=De(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(so,Qc(1),e.b7),v=u;return{bz:a*ya(v),ex:!1,bG:a*Ca(v),cK:n/a,bW:a*_a(v),c_:3,fU:i,fY:c,c6:l}}}},gi=function(e){return D1({b7:e.b7,e2:e.ce,e3:Yr,ei:e.ei})},B1=function(e){var r=e;return r},Hl=function(e){var r=p(Ml,1667,25e3,B1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Yl({fU:n,fY:a})},Il=function(e){return e},A1=Hl(Il(12e3)),F1=Hl(Il(5600)),U1=function(e){return{$:2,a:e}},V1=function(e){return U1(e)},E1=$(function(e,r){return{$:2,a:e,b:r}}),Ol=function(e){return{$:0,a:e}},Nn=function(e){var r=e;return r},R1=function(e){var r=e;return r.ex},N1=Ol(rn.a),j1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(A,a,i),c):T(i,o(A,a,c))});return p($r,n,T(P,P),r)}),G1=function(e){var r=e;return Xe({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},W1=re(function(e,r,n,a,t,i,c,l){var u=o(j1,R1,b([Nn(e),Nn(r),Nn(n),Nn(a)])),v=u.a,s=u.b;if(v.b){var m=te(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,g=f.b,C=g.a,x=g.b,_=x.a;return o(E1,o(ue,G1,v),{be:o(Ae,d,h),bL:o(Ae,C,_),bM:o(Ae,t,i),bN:o(Ae,c,l)})}else return N1}else return Ol({be:o(Ae,e,r),bL:o(Ae,n,a),bM:o(Ae,t,i),bN:o(Ae,c,l)})}),Y1=y(function(e,r,n){return $a(W1,e,r,n,xe,xe,xe,xe,xe)}),H1=function(e){var r=o(P1,mp(e.fB),{b7:F1,eH:e.fJ,ce:qa(8e4)}),n=gi({b7:A1,ce:qa(2e4),ei:e.ei}),a=gi({b7:pi,ce:qa(15e3),ei:hn(e.ei)}),t=p(Y1,r,n,a);return L1({b1:V1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL,aQ:e.aQ,bE:M1(15),bK:t,b_:k1,b0:pi})},I1=$(function(e,r){var n=e,a=r,t=bn(a);return{fU:t*bn(n),fY:t*ua(n),c6:ua(a)}}),O1=$(function(e,r){return H1({aI:fp(e.es),ev:e.ev,aJ:sp(.5),cb:e.cb,aL:T(ii(Oe(e.cT.fS)),ii(Oe(e.cT.eW))),aQ:r,fB:!0,fJ:o(I1,jr(e.fI),jr(e.fK)),ei:oo})}),hi=w(Sn,255/255,255/255,255/255,1),J1=$(function(e,r){return o(O1,{es:hi,ev:$p({dj:{fU:o(Ya,"camera x",e),fY:o(Ya,"camera y",e),c6:o(Ya,"camera z",e)},aS:{fU:0,fY:0,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Ve(135),fK:-Ve(45)},b([o(pn,-4,o(kl,zl(hi),V(40,40,1))),o(pn,-.5,H0(e))]))}),q1=w(Pm,J1,Am,Bm,Tm);const Z1={Main:{init:q1(o(k,function(e){return Te({e1:e})},o(z,"inputs",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return Te({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(z,"clock",ce))},o(z,"devicePixelRatio",ce))},o(z,"dt",ce))},o(z,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return Te({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(z,"alt",Q))},o(z,"control",Q))},o(z,"down",Q))},o(z,"downs",na(mn)))},o(z,"left",Q))},o(z,"pressedKeys",na(mn)))},o(z,"right",Q))},o(z,"shift",Q))},o(z,"up",Q))))},o(z,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return Te({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(z,"down",Q))},o(z,"isDown",Q))},o(z,"move",Q))},o(z,"rightDown",Q))},o(z,"rightUp",Q))},o(z,"up",Q))},o(z,"x",ce))},o(z,"y",ce))))},o(z,"screen",o(k,function(r){return o(k,function(n){return Te({eW:n,fS:r})},o(z,"height",ce))},o(z,"width",ce))))},o(z,"wheel",o(k,function(e){return o(k,function(r){return Te({eE:r,eF:e})},o(z,"deltaX",ce))},o(z,"deltaY",ce)))))))(0)}},B={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Q1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(B.keyboard.downs.push(f.code),B.keyboard.pressedKeys.push(f.code),r(f)&&(B.keyboard.control=!0),n(f)&&(B.keyboard.alt=!0),a(f)&&(B.keyboard.shift=!0),t(f)&&(B.keyboard.left=!0),i(f)&&(B.keyboard.right=!0),c(f)&&(B.keyboard.up=!0),l(f)&&(B.keyboard.down=!0))}),window.addEventListener("keyup",f=>{B.keyboard.pressedKeys=B.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(B.keyboard.control=!1,B.keyboard.pressedKeys=[]),n(f)&&(B.keyboard.alt=!1),a(f)&&(B.keyboard.shift=!1),t(f)&&(B.keyboard.left=!1),i(f)&&(B.keyboard.right=!1),c(f)&&(B.keyboard.up=!1),l(f)&&(B.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{B.pointer.x=-.5*B.screen.width+f.pageX,B.pointer.y=.5*B.screen.height-f.pageY,u(f)&&(B.pointer.down=!0,B.pointer.isDown=!0),v(f)&&(B.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{B.pointer.move=!0,B.pointer.x=-.5*B.screen.width+f.pageX,B.pointer.y=.5*B.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(B.pointer.up=!0,B.pointer.isDown=!1),v(f)&&(B.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(B.pointer.up=!0,B.pointer.isDown=!1),v(f)&&(B.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{B.wheel.deltaX=f.deltaX,B.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(B)}),window.addEventListener("focus",f=>{s(B)}),window.addEventListener("visibilitychange",f=>{s(B)}),window.addEventListener("resize",()=>{B.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,g=h-B.clock;g<.009||(B.dt=g,B.clock=h,e.ports.tick.send(B),m(B)),window.requestAnimationFrame(d)}},X1=()=>{Za("pointerdown"),Za("wheel"),Za("keydown")},Za=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},K1=Z1.Main.init({node:document.querySelector("#app div"),flags:{inputs:B}});X1();Q1(K1);
