(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function hr(e,r,n){return n.a=e,n.f=r,n}function $(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function se(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function sa(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function le(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Lt(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function x(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ce(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function xt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Tt(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function vu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var $u=[];function fu(e){return e.length}var su=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),mu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),du=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var pu=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+bu()),r});function bu(e){return"<internals>"}function Zr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function br(e,r){for(var n,a=[],t=Ja(e,r,0,a);t&&(n=a.pop());t=Ja(n.a,n.b,0,a));return t}function Ja(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Zr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=Ro(e),r=Ro(r));for(var t in e)if(!Ja(e[t],r[t],n+1,a))return!1;return!0}$(br);$(function(e,r){return!br(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var gu=$(function(e,r){var n=I(e,r);return n<0?cc:n?af:ic}),wn=0;function P(e,r){return{a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(oe);function oe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ze(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ze(e.a,r);return n}var T={$:0};function Ze(e,r){return{$:1,a:e,b:r}}var hu=$(Ze);function g(e){for(var r=T,n=e.length;n--;)r=Ze(e[n],r);return r}function ma(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var _u=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});se(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(x(e,r.a,n.a,a.a,t.a));return g(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(w(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(ma(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return g(ma(r).sort(function(n,a){var t=o(e,n,a);return t===ic?0:t===cc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Cu=$(Math.pow);$(function(e,r){return r%e});var yu=$(function(e,r){var n=r%e;return e===0?Zr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Su=Math.PI,wu=Math.cos,Lu=Math.sin,xu=Math.tan,Tu=Math.atan;$(Math.atan2);function Pu(e){return e}function zu(e){return e===1/0||e===-1/0}var Mu=Math.ceil,ku=Math.floor,Du=Math.round,Bu=Math.sqrt,So=Math.log,Au=isNaN;function Fu(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Uu=$(function(e,r){return e+r});function Ru(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function Eu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Vu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var ju=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Nu=$(function(e,r){return r.split(e)}),Wu=$(function(e,r){return r.join(e)}),Gu=S(function(e,r,n){return n.slice(e,r)});function Hu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Yu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Iu=$(function(e,r){return r.indexOf(e)>-1}),Ou=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ju=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function Ai(e){return e+""}function qu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function Zu(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function Xu(e){return ma(e).join("")}function Qu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ku(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function ev(e){return{$:0,a:e}}function Pt(e){return{$:2,b:e}}var rv=Pt(function(e){return typeof e=="boolean"?ie(e):He("a BOOL",e)}),nv=Pt(function(e){return typeof e=="number"?ie(e):He("a FLOAT",e)}),av=Pt(function(e){return typeof e=="string"?ie(e):e instanceof String?ie(e+""):He("a STRING",e)});function tv(e){return{$:3,b:e}}var ov=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var iv=$(function(e,r){return{$:10,b:r,h:e}}),cv=$(function(e,r){return _r(e,[r])}),lv=S(function(e,r,n){return _r(e,[r,n])});F(function(e,r,n,a){return _r(e,[r,n,a])});se(function(e,r,n,a,t){return _r(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});sa(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});le(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Lt(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Be(e,n)}catch(a){return de(o(jt,"This is not valid JSON! "+a.message,r))}});var Fi=$(function(e,r){return Be(e,r)});function Be(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ie(e.c):He("null",r);case 3:return kn(r)?wo(e.b,r,g):He("a LIST",r);case 4:return kn(r)?wo(e.b,r,uv):He("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return He("an OBJECT with a field named `"+n+"`",r);var v=Be(e.b,r[n]);return Ee(v)?v:de(o(Eo,n,v.a));case 7:var a=e.e;if(!kn(r))return He("an ARRAY",r);if(a>=r.length)return He("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Be(e.b,r[a]);return Ee(v)?v:de(o(lc,a,v.a));case 8:if(typeof r!="object"||r===null||kn(r))return He("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=Be(e.b,r[i]);if(!Ee(v))return de(o(Eo,i,v.a));t=Ze(P(i,v.a),t)}return ie(Te(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Be(l[u],r);if(!Ee(v))return v;c=c(v.a)}return ie(c);case 10:var v=Be(e.b,r);return Ee(v)?Be(e.h(v.a),r):v;case 11:for(var s=T,m=e.g;m.b;m=m.b){var v=Be(m.a,r);if(Ee(v))return v;s=Ze(v.a,s)}return de(tf(Te(s)));case 1:return de(o(jt,e.a,r));case 0:return ie(e.a)}}function wo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Be(e,r[i]);if(!Ee(c))return de(o(lc,i,c.a));t[i]=c.a}return ie(n(t))}function kn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function uv(e){return o(yf,e.length,function(r){return e[r]})}function He(e,r){return de(o(jt,"Expecting "+e,r))}function Nr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Nr(e.b,r.b);case 6:return e.d===r.d&&Nr(e.b,r.b);case 7:return e.e===r.e&&Nr(e.b,r.b);case 9:return e.f===r.f&&Lo(e.g,r.g);case 10:return e.h===r.h&&Nr(e.b,r.b);case 11:return Lo(e.g,r.g)}}function Lo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Nr(e[a],r[a]))return!1;return!0}var vv=$(function(e,r){return JSON.stringify(r,null,e)+""});function Ui(e){return e}S(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function $v(e){return{$:1,a:e}}function ur(e){return{$:2,b:e,c:null}}var qa=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function fv(e){return{$:5,b:e}}var sv=0;function zt(e){var r={$:0,e:sv++,f:e,g:null,h:[]};return Mt(r),r}function Ri(e){return ur(function(r){r(Br(zt(e)))})}function Ei(e,r){e.h.push(r),Mt(e)}var mv=$(function(e,r){return ur(function(n){Ei(e,r),n(Br(wn))})}),La=!1,xo=[];function Mt(e){if(xo.push(e),!La){for(La=!0;e=xo.shift();)dv(e);La=!1}}function dv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Mt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return kt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function kt(e,r,n,a,t,i){var c=o(Fi,e,r?r.flags:void 0);Ee(c)||Zr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=pv(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),Po(l,b.b,t(v))}return Po(l,u.b,t(v)),m?{ports:m}:{}}var Ie={};function pv(e,r){var n;for(var a in Ie){var t=Ie[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=gv(t,r)}return n}function bv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function gv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(qa,l,fv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?x(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=zt(o(qa,l,e.b))}var hv=$(function(e,r){return ur(function(n){e.g(r),n(Br(wn))})});$(function(e,r){return o(mv,e.h,{$:0,a:r})});function Vi(e){return function(r){return{$:1,k:e,l:r}}}function _v(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var To=[],xa=!1;function Po(e,r,n){if(To.push({p:e,q:r,r:n}),!xa){xa=!0;for(var a;a=To.shift();)Cv(a.p,a.q,a.r);xa=!1}}function Cv(e,r,n){var a={};Zn(!0,r,a,null),Zn(!1,n,a,null);for(var t in e)Ei(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Zn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=yv(e,t,a,r.l);n[t]=Sv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Zn(e,c.a,n,a);return;case 3:Zn(e,r.o,n,{s:r.n,t:a});return}}function yv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ie[r].e:Ie[r].f;return o(i,t,a)}function Sv(e,r,n){return n=n||{i:T,j:T},e?n.i=Ze(r,n.i):n.j=Ze(r,n.j),n}function wv(e){Ie[e]&&Zr(3)}$(function(e,r){return r});function Lv(e,r){return wv(e),Ie[e]={f:xv,u:r,a:Tv},Vi(e)}var xv=$(function(e,r){return function(n){return e(r(n))}});function Tv(e,r){var n=T,a=Ie[e].u,t=Br(null);Ie[e].b=t,Ie[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(Fi,a,c);Ee(l)||Zr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Xn,ar=typeof document<"u"?document:{};function Dt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function Za(e){return{$:0,a:e}}var ji=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Bt(n),e:t,f:e,b:i}})}),Ar=ji(void 0),Pv=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Bt(n),e:t,f:e,b:i}})}),zv=Pv(void 0);function Mv(e,r,n,a){return{$:3,d:Bt(e),g:r,h:n,i:a}}var kv=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Cr([e,r],function(){return e(r)})});S(function(e,r,n){return Cr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return Cr([e,r,n,a],function(){return p(e,r,n,a)})});se(function(e,r,n,a,t){return Cr([e,r,n,a,t],function(){return x(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return Cr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});sa(function(e,r,n,a,t,i,c){return Cr([e,r,n,a,t,i,c],function(){return Ce(e,r,n,a,t,i,c)})});le(function(e,r,n,a,t,i,c,l){return Cr([e,r,n,a,t,i,c,l],function(){return xt(e,r,n,a,t,i,c,l)})});Lt(function(e,r,n,a,t,i,c,l,u){return Cr([e,r,n,a,t,i,c,l,u],function(){return Tt(e,r,n,a,t,i,c,l,u)})});var Ni=$(function(e,r){return{$:"a0",n:e,o:r}}),Dv=$(function(e,r){return{$:"a1",n:e,o:r}}),Wi=$(function(e,r){return{$:"a2",n:e,o:r}}),yr=$(function(e,r){return{$:"a3",n:e,o:r}}),Bv=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Av(e){return e=="script"?"p":e}function Fv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Ni,r.n,Uv(e,r.o)):r});function Uv(e,r){var n=Yt(r);return{$:r.$,a:n?p(Sf,n<3?Rv:Ev,we(e),r.a):o(ra,e,r.a)}}var Rv=$(function(e,r){return P(e(r.a),r.b)}),Ev=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Bt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?zo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?zo(c,t,i):c[t]=i}return r}function zo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Xa(c,r,e.d),c}var c=e.f?ar.createElementNS(e.f,e.c):ar.createElement(e.c);Xn&&e.c=="a"&&c.addEventListener("click",Xn(c)),Xa(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Dt(c,pr(n===1?l[u]:l[u].b,r));return c}function Xa(e,r,n){for(var a in n){var t=n[a];a==="a1"?Vv(e,t):a==="a0"?Wv(e,r,t):a==="a3"?jv(e,t):a==="a4"?Nv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Vv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function jv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Nv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Wv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Gv(r,i),e.addEventListener(t,c,At&&{passive:Yt(i)<2}),a[t]=c}}var At;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){At=!0}}))}catch{}function Gv(e,r){function n(a){var t=n.q,i=Be(t.a,a);if(!!Ee(i)){for(var c=Yt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function Hv(e,r){return e.$==r.$&&Nr(e.a,r.a)}function Gi(e,r){var n=[];return Ve(e,r,n,0),n}function me(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ve(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Qv(r),i=1;else{me(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ve(e.k,r.k,s,0),s.length>0&&me(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){me(n,0,a,r);return}(f?!Yv(m,d):m!==d)&&me(n,2,a,d),Ve(h,b,n,a+1);return;case 0:e.a!==r.a&&me(n,3,a,r.a);return;case 1:Mo(e,r,n,a,Iv);return;case 2:Mo(e,r,n,a,Ov);return;case 3:if(e.h!==r.h){me(n,0,a,r);return}var C=Ft(e.d,r.d);C&&me(n,4,a,C);var y=r.i(e.g,r.g);y&&me(n,5,a,y);return}}}function Yv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Mo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){me(n,0,a,r);return}var i=Ft(e.d,r.d);i&&me(n,4,a,i),t(e,r,n,a)}function Ft(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ft(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Hv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Iv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?me(n,6,a,{v:l,i:c-l}):c<l&&me(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ve(s,i[v],n,++a),a+=s.b||0}}function Ov(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],C=h.a,y=b.a,_=h.b,L=b.b,B=void 0,W=void 0;if(C===y){f++,Ve(_,L,t,f),f+=_.b||0,m++,d++;continue}var E=l[m+1],R=u[d+1];if(E){var j=E.a,G=E.b;W=y===j}if(R){var U=R.a,Z=R.b;B=C===U}if(B&&W){f++,Ve(_,Z,t,f),cn(i,t,C,L,d,c),f+=_.b||0,f++,ln(i,t,C,G,f),f+=G.b||0,m+=2,d+=2;continue}if(B){f++,cn(i,t,y,L,d,c),Ve(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(W){f++,ln(i,t,C,_,f),f+=_.b||0,f++,Ve(G,L,t,f),f+=G.b||0,m+=2,d+=1;continue}if(E&&j===U){f++,ln(i,t,C,_,f),cn(i,t,y,L,d,c),f+=_.b||0,f++,Ve(G,Z,t,f),f+=G.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;ln(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var J=J||[],b=u[d];cn(i,t,b.a,b.b,void 0,J),d++}(t.length>0||c.length>0||J)&&me(n,8,a,{w:t,x:c,y:J})}var Hi="_elmW6BL";function cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ve(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}cn(e,r,n+Hi,a,t,i)}function ln(e,r,n,a,t){var i=e[n];if(!i){var c=me(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ve(a,i.z,l,t),me(r,9,t,{w:l,A:i});return}ln(e,r,n+Hi,a,t)}function Yi(e,r,n,a){un(e,r,n,0,0,r.b,a)}function un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Yi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&un(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return un(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var y=d===1?h[C]:h[C].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=un(b[C],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Ii(e,r,n,a){return n.length===0?e:(Yi(e,r,n,a),Qn(e,n))}function Qn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Jv(t,a);t===e&&(e=i)}return e}function Jv(e,r){switch(r.$){case 0:return qv(e,r.s,r.u);case 4:return Xa(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Qn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Qn(e,i.w),e;case 8:return Zv(e,r);case 5:return r.s(e);default:Zr(10)}}function qv(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Zv(e,r){var n=r.s,a=Xv(n.y,r);e=Qn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Dt(e,a),e}function Xv(e,r){if(!!e){for(var n=ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Dt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function Ut(e){if(e.nodeType===3)return Za(e.textContent);if(e.nodeType!==1)return Za("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ze(o(yr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=Ze(Ut(v[a]),u);return p(Ar,l,r,u)}function Qv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Kv=F(function(e,r,n,a){return kt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Ut(l);return Oi(i,function(v){var s=c(v),m=Gi(u,s);l=Ii(l,u,m,t),u=s})})});F(function(e,r,n,a){return kt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ar.title,v=ar.body,s=Ut(v);return Oi(i,function(m){Xn=c;var d=l(m),f=Ar("body")(T)(d.eu),h=Gi(s,f);v=Ii(v,s,h,t),s=f,Xn=0,u!==d.fL&&(ar.title=u=d.fL)})})});var Kn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Oi(e,r){r(e);var n=0;function a(){n=n===1?0:(Kn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Kn(a),n=2)}}$(function(e,r){return o(Jt,It,ur(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Jt,It,ur(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Jt,It,ur(function(){history.replaceState({},"",r),e()}))});var e$={addEventListener:function(){},removeEventListener:function(){}},r$=typeof window<"u"?window:e$;S(function(e,r,n){return Ri(ur(function(a){function t(i){zt(n(i))}return e.addEventListener(r,t,At&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Be(e,r);return Ee(n)?ne(n.a):q});function Ji(e,r){return ur(function(n){Kn(function(){var a=document.getElementById(e);n(a?Br(r(a)):$v(Lf(e)))})})}function n$(e){return ur(function(r){Kn(function(){r(Br(e()))})})}$(function(e,r){return Ji(r,function(n){return n[e](),wn})});$(function(e,r){return n$(function(){return r$.scroll(e,r),wn})});S(function(e,r,n){return Ji(e,function(a){return a.scrollLeft=r,a.scrollTop=n,wn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var a$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var t$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):q}a.push(x(Wc,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(x(Wc,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var o$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/i$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function i$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Rt=new Float64Array(3),ko=new Float64Array(3),Do=new Float64Array(3),c$=S(function(e,r,n){return new Float64Array([e,r,n])}),l$=function(e){return e[0]},u$=function(e){return e[1]},v$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var $$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function qi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(qi);function Zi(e,r,n){return n===void 0&&(n=new Float64Array(3)),ea(qi(e,r,n),n)}$(Zi);function Xi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ea(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Xi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var f$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),vn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(vn);function Qa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Qa);$(function(e,r){var n,a=Rt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=vn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(vn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(vn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(vn(r,a)+e[14])/n,t});var s$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var m$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},d$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/p$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function p$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var b$=new Float64Array(16),g$=new Float64Array(16),h$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},_$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Qi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(Qi);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Qi(c,l,i,t,n,a)});function Ki(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(Ki);F(function(e,r,n,a){return Ki(e,r,n,a,-1,1)});function ec(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],C=e[13],y=e[14],_=e[15],L=r[0],B=r[1],W=r[2],E=r[3],R=r[4],j=r[5],G=r[6],U=r[7],Z=r[8],J=r[9],te=r[10],ue=r[11],ae=r[12],$e=r[13],ye=r[14],be=r[15];return n[0]=a*L+l*B+m*W+b*E,n[1]=t*L+u*B+d*W+C*E,n[2]=i*L+v*B+f*W+y*E,n[3]=c*L+s*B+h*W+_*E,n[4]=a*R+l*j+m*G+b*U,n[5]=t*R+u*j+d*G+C*U,n[6]=i*R+v*j+f*G+y*U,n[7]=c*R+s*j+h*G+_*U,n[8]=a*Z+l*J+m*te+b*ue,n[9]=t*Z+u*J+d*te+C*ue,n[10]=i*Z+v*J+f*te+y*ue,n[11]=c*Z+s*J+h*te+_*ue,n[12]=a*ae+l*$e+m*ye+b*be,n[13]=t*ae+u*$e+d*ye+C*be,n[14]=i*ae+v*$e+f*ye+y*be,n[15]=c*ae+s*$e+h*ye+_*be,n}$(ec);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],C=r[1],y=r[2],_=r[4],L=r[5],B=r[6],W=r[8],E=r[9],R=r[10],j=r[12],G=r[13],U=r[14];return n[0]=a*b+c*C+v*y,n[1]=t*b+l*C+s*y,n[2]=i*b+u*C+m*y,n[3]=0,n[4]=a*_+c*L+v*B,n[5]=t*_+l*L+s*B,n[6]=i*_+u*L+m*B,n[7]=0,n[8]=a*W+c*E+v*R,n[9]=t*W+l*E+s*R,n[10]=i*W+u*E+m*R,n[11]=0,n[12]=a*j+c*G+v*U+d,n[13]=t*j+l*G+s*U+f,n[14]=i*j+u*G+m*U+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ea(r,Rt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Xi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,C=c*l*v,y=i*i*v+u,_=h+f,L=b-d,B=h-f,W=c*c*v+u,E=C+m,R=b+d,j=C-m,G=l*l*v+u,U=n[0],Z=n[1],J=n[2],te=n[3],ue=n[4],ae=n[5],$e=n[6],ye=n[7],be=n[8],sr=n[9],mr=n[10],wa=n[11],iu=n[12],cu=n[13],lu=n[14],uu=n[15];return a[0]=U*y+ue*_+be*L,a[1]=Z*y+ae*_+sr*L,a[2]=J*y+$e*_+mr*L,a[3]=te*y+ye*_+wa*L,a[4]=U*B+ue*W+be*E,a[5]=Z*B+ae*W+sr*E,a[6]=J*B+$e*W+mr*E,a[7]=te*B+ye*W+wa*E,a[8]=U*R+ue*j+be*G,a[9]=Z*R+ae*j+sr*G,a[10]=J*R+$e*j+mr*G,a[11]=te*R+ye*j+wa*G,a[12]=iu,a[13]=cu,a[14]=lu,a[15]=uu,a});function C$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(C$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function y$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(y$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],C=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=y,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});S(function(e,r,n){var a=Zi(e,r,Rt),t=ea(Qa(n,a,ko),ko),i=ea(Qa(a,t,Do),Do),c=b$,l=g$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,ec(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Bo=0;function gn(e,r){for(;r.b;r=r.b)e(r.a)}function Et(e){for(var r=0;e.b;e=e.b)r++;return r}var S$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},w$=se(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),L$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),x$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),T$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),P$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),z$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),M$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),k$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),D$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),B$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},A$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},F$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},U$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},rc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},nc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},R$=function(e){e.gl.disable(e.gl.CULL_FACE)},E$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},V$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},j$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Ao=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],N$=[A$,F$,U$,rc,nc,R$,E$,V$,j$];function Fo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function W$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function ac(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function G$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,y){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[y]:C[y][_];else i.forEach(function(L){for(_=0;_<h;_++)f[b++]=h===1?C[L][y]:C[L][y][_]})}var u=ac(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Et(n.b)*s);gn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function H$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Y$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Et(r.b),indexBuffer:null,buffers:{}}}function Y$(e,r){var n=new Uint32Array(Et(e)*r),a=0,t;return gn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Uo(e,r){return e+"#"+r}var tc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),rc(n),nc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Uo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Bo++,v||(v=Fo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Bo++,s||(s=Fo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=W$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=I$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Uo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),O$(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=H$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=G$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=ac(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var y=C.size*4,_=y*C.arraySize,L=0;L<C.arraySize;L++)a.enableVertexAttribArray(h+L),a.vertexAttribPointer(h+L,C.size,C.baseType,!1,_,y*L)}for(n.toggle=!n.toggle,gn(ad(n),i.a),u=0;u<Ao.length;u++){var B=n[Ao[u]];B.toggle!==n.toggle&&B.enabled&&(N$[u](n),B.enabled=!1,B.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return gn(t,e.g),r});function I$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var L=l.textures.get(_);L||(L=_.eC(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[b]!==_&&(e.uniform1i(C,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function O$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var J$=S(function(e,r,n){return Mv(r,{g:n,f:{},h:e},rf,nf)}),q$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Z$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),X$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Q$=$(function(e,r){e.contextAttributes.antialias=!0}),K$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),ef=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function rf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};gn(function(t){return o(nd,r,t)},e.h);var n=ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),S$(function(){return o(tc,e,n)})):(n=ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function nf(e,r){return r.f=e.f,tc(r)}var D=hu,Dn=pu,oc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Dn,e,l,v)}else{var u=c.a;return p(Dn,i,l,u)}});return p(Dn,i,p(Dn,e,r,t),a)}),Vt=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Vt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ro=function(e){return p(Vt,S(function(r,n,a){return o(D,P(r,n),a)}),T,e)},ic=1,af=2,cc=0,de=function(e){return{$:1,a:e}},jt=$(function(e,r){return{$:3,a:e,b:r}}),Eo=$(function(e,r){return{$:0,a:e,b:r}}),lc=$(function(e,r){return{$:1,a:e,b:r}}),ie=function(e){return{$:0,a:e}},tf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},of=Yu,cf=vv,Le=Ai,wr=$(function(e,r){return o(Wu,e,ma(r))}),Nt=$(function(e,r){return g(o(Nu,e,r))}),uc=function(e){return o(wr,`
    `,o(Nt,`
`,e))},Ln=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(Ln,$(function(r,n){return n+1}),0,e)},lf=_u,uf=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),Or=$(function(e,r){return p(uf,e,r,T)}),vc=$(function(e,r){return p(lf,e,o(Or,0,Mr(r)-1),r)}),Oe=Qu,$c=function(e){var r=Oe(e);return 97<=r&&r<=122},fc=function(e){var r=Oe(e);return r<=90&&65<=r},vf=function(e){return $c(e)||fc(e)},$f=function(e){var r=Oe(e);return r<=57&&48<=r},ff=function(e){return $c(e)||fc(e)||$f(e)},Te=function(e){return p(Ln,D,T,e)},Xr=Ru,sf=$(function(e,r){return`

(`+(Le(e+1)+(") "+uc(mf(r))))}),mf=function(e){return o(df,e,T)},df=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Xr(n);if(b.$===1)return!1;var C=b.a,y=C.a,_=C.b;return vf(y)&&o(of,ff,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(D,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Le(i)+"]"),u=c,v=o(D,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(wr,"",Te(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Le(Mr(s))+" ways:"));return o(wr,`

`,o(D,h,o(vc,sf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(wr,"",Te(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(wr,"",Te(r))+`:

    `):`Problem with the given value:

`}();return h+(uc(o(cf,4,f))+(`

`+d))}}),Pe=32,Ka=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),et=$u,Wt=Mu,Gt=$(function(e,r){return So(r)/So(e)}),pf=Pu,hn=Wt(o(Gt,2,Pe)),sc=x(Ka,0,hn,et,et),mc=su,dc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var pc=ku,rt=fu,Je=$(function(e,r){return I(e,r)>0?e:r}),bf=function(e){return{$:0,a:e}},Ht=mu,gf=$(function(e,r){e:for(;;){var n=o(Ht,Pe,e),a=n.a,t=n.b,i=o(D,bf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Te(i)}}),hf=function(e){var r=e.a;return r},_f=$(function(e,r){e:for(;;){var n=Wt(r/Pe);if(n===1)return o(Ht,Pe,e).a;var a=o(gf,e,T),t=n;e=a,r=t;continue e}}),bc=$(function(e,r){if(r.l){var n=r.l*Pe,a=pc(o(Gt,Pe,n-1)),t=e?Te(r.z):r.z,i=o(_f,t,r.l);return x(Ka,rt(r.p)+n,o(Je,5,a*hn),i,r.p)}else return x(Ka,rt(r.p),hn,et,r.p)}),Cf=se(function(e,r,n,a,t){e:for(;;){if(r<0)return o(bc,!1,{z:a,l:n/Pe|0,p:t});var i=dc(p(mc,Pe,r,e)),c=e,l=r-Pe,u=n,v=o(D,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),yf=$(function(e,r){if(e<=0)return sc;var n=e%Pe,a=p(mc,n,e-n,r),t=e-n-Pe;return w(Cf,r,t,e,T,a)}),Ee=function(e){return!e.$},k=iv,X=rv,M=ov,ve=nv,ra=cv,Sf=lv,we=ev,Yt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=Ar("div"),wf=function(e){return{$:2,a:e}},gc=$(function(e,r){return e}),hc=$(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Tr=function(e){return e},Lf=Tr,Vo=We(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),xf=Iu,Lr=Eu,Wr=Gu,xn=$(function(e,r){return e<1?r:p(Wr,e,Lr(r),r)}),da=Ju,pa=function(e){return e===""},ba=$(function(e,r){return e<1?"":p(Wr,0,e,r)}),_c=qu,jo=se(function(e,r,n,a,t){if(pa(t)||o(xf,"@",t))return q;var i=o(da,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=_c(o(xn,c+1,t));if(l.$===1)return q;var u=l;return ne(Ce(Vo,e,o(ba,c,t),u,r,n,a))}else return ne(Ce(Vo,e,t,q,r,n,a))}),No=F(function(e,r,n,a){if(pa(a))return q;var t=o(da,"/",a);if(t.b){var i=t.a;return w(jo,e,o(xn,i,a),r,n,o(ba,i,a))}else return w(jo,e,"/",r,n,a)}),Wo=S(function(e,r,n){if(pa(n))return q;var a=o(da,"?",n);if(a.b){var t=a.a;return x(No,e,ne(o(xn,t+1,n)),r,o(ba,t,n))}else return x(No,e,q,r,n)});$(function(e,r){if(pa(r))return q;var n=o(da,"#",r);if(n.b){var a=n.a;return p(Wo,e,ne(o(xn,a+1,r)),o(ba,a,r))}else return p(Wo,e,q,r)});var Tf=Ou,It=function(e){},Tn=Br,Pf=Tn(0),Cc=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Ln,e,r,Te(m)):x(Cc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),vr=S(function(e,r,n){return x(Cc,e,r,0,n)}),ce=$(function(e,r){return p(vr,$(function(n,a){return o(D,e(n),a)}),T,r)}),na=qa,Ot=$(function(e,r){return o(na,function(n){return Tn(e(n))},r)}),zf=S(function(e,r,n){return o(na,function(a){return o(na,function(t){return Tn(o(e,a,t))},n)},r)}),Mf=function(e){return p(vr,zf(D),Tn(T),e)},kf=hv,Df=$(function(e,r){var n=r;return Ri(o(na,kf(e),n))}),Bf=S(function(e,r,n){return o(Ot,function(a){return 0},Mf(o(ce,Df(e),r)))}),Af=S(function(e,r,n){return Tn(0)}),Ff=$(function(e,r){var n=r;return o(Ot,e,n)});Ie.Task=bv(Pf,Bf,Af,Ff);var Uf=Vi("Task"),Jt=$(function(e,r){return Uf(o(Ot,e,r))}),Rf=Kv,Ef=Fu,aa={$:1},yc=function(e){return{$:2,a:e}},ga={$:0},Ae=$(function(e,r){return{$:0,a:e,b:r}}),ee=S(function(e,r,n){return r(e(n))}),Qr=function(e){var r=e.b.B;return r.a},Vf=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Ae,r,{B:i,ab:c,T:o(D,a,n)}))}else return q},Sc=function(e){var r=e.b;return o(Ae,ga,r)},gr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),jf=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Sc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,Qr(n).b7)>0?o(ee,Vf,gr(o(Ae,aa,t))):Tr)(o(Ae,yc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(hc,l.eA,Ye(r,{b7:l.b7+r.eJ})),s=o(e,v,u);return o(Ae,ga,{B:P(v,s),ab:T,T:o(D,t.B,t.T)})}}),wc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Nf=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Wf=$(function(e,r){return Te(p(Nf,e,r,T))}),Lc=S(function(e,r,n){if(r<=0)return T;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(D,_,o(D,c,o(D,s,o(D,b,o(Wf,r-4,C))))):o(D,_,o(D,c,o(D,s,o(D,b,p(Lc,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return g([_])}}),Gf=$(function(e,r){return p(Lc,0,e,r)}),Hf=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=oe(Te(n),oe(g([a]),t)),c=o(Gf,e,i),l=o(wc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ae,aa,{B:u,ab:v,T:Te(c)})}else{var s=Te(c);if(s.b){var m=s.a,d=s.b;return o(Ae,aa,{B:m,ab:T,T:d})}else return r}}),Yf=function(e){var r=e.b;return o(Ae,aa,r)},If=function(e){var r=e.b;return o(Ae,yc({cY:Qr(e).b7}),r)},Of=$(function(e,r){switch(e.$){case 1:return Yf(r);case 2:return Sc(r);case 3:return If(r);default:var n=e.a;return o(Hf,n,r)}}),xc=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Jf=$(function(e,r){return Ye(r,{av:e(r.av)})}),qf=function(e){return{$:3,a:e}},Zf=function(e){return{$:2,a:e}},Tc=$(function(e,r){return{$:0,a:e,b:r}}),Xf=$(function(e,r){return{$:1,a:e,b:r}}),xe=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),Q=function(e){return e<0?-e:e},qt=Zu,Qf=S(function(e,r,n){return o(gr,0/0,qt(o(e,r,n)))}),Pc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Kf=ju,zc=function(e){return p(Kf,D,T,e)},es=$(function(e,r){var n=o(Pc,function(a){return a!=="0"&&a!=="."},zc(r));return oe(e&&n?"-":"",r)}),re=Ai,nt=Uu,Mc=Ku,kc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Xr(n);if(a.$===1)return"01";var t=a.a;return o(nt,"0",kc(t))}else{var i=Oe(r);return i>=48&&i<57?o(nt,Mc(i+1),n):"0"}},at=zu,rs=Au,ha=function(e){return o(nt,e,"")},Dc=S(function(e,r,n){return e<=0?n:p(Dc,e>>1,oe(r,r),e&1?oe(n,r):n)}),_n=$(function(e,r){return p(Dc,e,r,"")}),tt=S(function(e,r,n){return oe(n,o(_n,e-Lr(n),ha(r)))}),ot=Vu,Bc=function(e){var r=o(Nt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},ns=function(e){var r=o(Nt,"e",re(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(gr,0,_c(o(Tf,"+",t)?o(xn,1,t):t)),c=Bc(n),l=c.a,u=c.b,v=oe(l,u),s=i<0?o(gr,"0",o(xe,function(m){var d=m.a,f=m.b;return d+("."+f)},o(xe,xc(ha),Xr(oe(o(_n,Q(i),"0"),v))))):p(tt,i+1,"0",v);return oe(e<0?"-":"",s)}else{var n=r.a;return oe(e<0?"-":"",n)}else return""},as=S(function(e,r,n){if(at(n)||rs(n))return re(n);var a=n<0,t=Bc(ns(Q(n))),i=t.a,c=t.b,l=Lr(i)+r,u=oe(o(_n,-l+1,"0"),p(tt,l,"0",oe(i,c))),v=Lr(u),s=o(Je,1,l),m=o(e,a,p(Wr,s,v,u)),d=p(Wr,0,s,u),f=m?ot(o(gr,"1",o(xe,kc,Xr(ot(d))))):d,h=Lr(f),b=f==="0"?f:r<=0?oe(f,o(_n,Q(r),"0")):I(r,Lr(c))<0?p(Wr,0,h-r,f)+("."+p(Wr,h-r,h,f)):oe(i+".",p(tt,r,"0",c));return o(es,a,b)}),Ac=as($(function(e,r){var n=Xr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Oe(t))})),ts=Qf(Ac),os=S(function(e,r,n){var a=o(Gt,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(ts,t,n)}),Fc=gu,Zt=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Fc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),V=se(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Xe={$:-2},Jr=se(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return w(V,0,r,n,w(V,1,v,s,m,d),w(V,1,i,c,l,u))}else return w(V,e,i,c,w(V,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,y=f.e,d=a.e;return w(V,0,v,s,w(V,1,h,b,C,y),w(V,1,r,n,d,t))}else return w(V,e,r,n,a,t)}),it=S(function(e,r,n){if(n.$===-2)return w(V,0,e,r,Xe,Xe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Fc,e,t);switch(u){case 0:return w(Jr,a,t,i,p(it,e,r,c),l);case 1:return w(V,a,t,r,c,l);default:return w(Jr,a,t,i,c,p(it,e,r,l))}}),sn=S(function(e,r,n){var a=p(it,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return w(V,1,t,i,c,l)}else{var u=a;return u}}),is=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Uc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,C=d.e,y=v.e;return w(V,0,f,h,w(V,1,n,a,w(V,0,i,c,l,u),b),w(V,1,s,m,C,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,m=L.c,d=L.d,y=L.e;return w(V,1,n,a,w(V,0,i,c,l,u),w(V,0,s,m,d,y))}else return e},Go=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,y=f.e;return w(V,0,i,c,w(V,1,u,v,s,m),w(V,1,n,a,d,w(V,0,h,b,C,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,d=_.e,B=e.e;B.a;var h=B.b,b=B.c,C=B.d,y=B.e;return w(V,1,n,a,w(V,0,i,c,L,d),w(V,0,h,b,C,y))}else return e},cs=sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return w(V,n,l,u,v,w(V,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Go(r)}else break e;else return c.a,c.d,Go(r);else break e;return r}}),Gn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,w(V,r,n,a,Gn(t),l);var u=Uc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Jr,v,s,m,Gn(d),f)}else return Xe}else return w(V,r,n,a,Gn(t),l)}else return Xe},mn=$(function(e,r){if(r.$===-2)return Xe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,w(V,n,a,t,o(mn,e,i),c);var u=Uc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return w(Jr,v,s,m,o(mn,e,d),f)}else return Xe}else return w(V,n,a,t,o(mn,e,i),c);else return o(ls,e,xt(cs,e,r,n,a,t,i,c))}),ls=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(br(e,a)){var l=is(c);if(l.$===-1){var u=l.b,v=l.c;return w(Jr,n,u,v,i,Gn(c))}else return Xe}else return w(Jr,n,a,t,i,o(mn,e,c))}else return Xe}),us=$(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return w(V,1,a,t,i,c)}else{var l=n;return l}}),Bn=S(function(e,r,n){var a=r(o(Zt,e,n));if(a.$)return o(us,e,n);var t=a.a;return p(sn,e,t,n)}),vs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Bn,r,xe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Xf,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Bn,r,xe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Tc,P(i,c),p(os,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Bn,r,xe(function(a){return a.$===3?qf(n):a}));default:var r=e.a,n=e.b;return o(Bn,r,xe(function(a){return a.$===2?Zf(n):a}))}},$s=function(e){return Jf(vs(e))},fs=$(function(e,r){return o(ce,$s(e),r)}),ss=$(function(e,r){return Ye(r,{eA:o(fs,e,r.eA)})}),ms=$(function(e,r){var n=r.a,a=r.b;return o(Ae,n,Ye(a,{B:o(xc,ss(e),a.B)}))}),ds=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),ps=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ae,a,Ye(t,{B:o(ds,o(e,i.a,r),i)}))}),bs=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aL:!a.aL});case 2:var t=n.a;return Ye(a,{G:p(jf,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(ms,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(ps,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(Of,l,a.G)})}}),gs=$(function(e,r){return o(Ae,ga,{B:P(e,r(e)),ab:T,T})}),hs=_v,Ho=hs(T),ta=tv,Cn=av,_s=Lv("tick",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return we({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",ve))},o(M,"devicePixelRatio",ve))},o(M,"dt",ve))},o(M,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return we({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ta(Cn)))},o(M,"left",X))},o(M,"pressedKeys",ta(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return we({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",ve))},o(M,"y",ve))))},o(M,"screen",o(k,function(r){return o(k,function(n){return we({eW:n,fS:r})},o(M,"height",ve))},o(M,"width",ve))))},o(M,"wheel",o(k,function(e){return o(k,function(r){return we({eE:r,eF:e})},o(M,"deltaX",ve))},o(M,"deltaY",ve))))),Cs=function(e){return{$:4,a:e}},ys={$:0},Ss=Ui,Re=$(function(e,r){return o(Wi,e,Ss(r))}),Y=Re("className"),ws=function(e){var r=e.b.B;return r.b},oa=Re("id"),Ls=kv,ia=Ls,xs=Dv,K=xs,Ts={$:1},Ps=function(e){return{$:3,a:e}},zs=function(e){return{$:5,a:e}},Yo=Ar("a"),Xt=Ar("button"),Io=function(e){return o(Re,"href",Fv(e))},Ms=yr("clip-rule"),ge=yr("d"),ks=yr("fill"),Rc=ji("http://www.w3.org/2000/svg"),Ds=Rc("svg"),Bs=yr("viewBox"),As=o(Bv,"http://www.w3.org/XML/1998/namespace","xml:space"),ke=Ds(g([Bs("0 0 24 24"),ks("currentColor"),o(K,"width","100%"),o(K,"height","100%"),As("http://www.w3.org/2000/svg")])),Fs=yr("fill-rule"),he=Rc("path"),Pr={eD:ke(g([o(he,g([ge("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eQ:ke(g([o(he,g([ge("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),eV:ke(g([o(he,g([ge("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fe:ke(g([o(he,g([ge("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(he,g([ge("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),ff:ke(g([o(he,g([ge("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(he,g([ge("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fp:ke(g([o(he,g([ge("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fq:ke(g([o(he,g([ge("M7 5V19L18 12L7 5Z")]),T)])),fr:ke(g([o(he,g([ge("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),fs:ke(g([o(he,g([ge("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fM:ke(g([o(he,g([Fs("evenodd"),Ms("evenodd"),ge("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fN:ke(g([o(he,g([ge("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f0:ke(g([o(he,g([ge("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},Us=function(e){return{$:0,a:e}},Ec=Ni,Vc=$(function(e,r){return o(Ec,e,Us(r))}),Qt=function(e){return o(Vc,"click",we(e))},Oo=Re("target"),Rs=Re("title"),ct=$(function(e,r){if(r.$===-2)return Xe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return w(V,n,a,o(e,a,t),o(ct,e,i),o(ct,e,c))}),Es=Za,cr=Es,Vs=function(e){return p(Vt,S(function(r,n,a){return o(D,n,a)}),T,e)},js=$(function(e,r){return{$:3,a:e,b:r}}),Ns=$(function(e,r){return{$:2,a:e,b:r}}),Ws=$(function(e,r){return{$:0,a:e,b:r}}),Gs=$(function(e,r){return{$:1,a:e,b:r}}),$r=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Hs=x($r,0/255,0/255,0/255,1),Ys=Ui,jc=$(function(e,r){return o(Wi,e,Ys(r))}),Is=jc("checked"),Ne=Du,Os=S(function(e,r,n){return oe(o(_n,e-Lr(n),ha(r)),n)}),ca=yu,Nc=function(e){var r=function(n){return n<10?Le(n):ha(Mc(87+n))};return e<16?r(e):oe(Nc(e/16|0),r(o(ca,16,e)))},Js=o(ee,Nc,o(Os,2,"0")),Kt=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},qs=function(e){var r=Kt(e),n=r.cN,a=r.cd,t=r.b5;return o(wr,"",o(D,"#",o(ce,o(ee,Ne,Js),g([n*255,a*255,t*255]))))},lt=Re("htmlFor"),Zs=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),la=$(function(e,r){if(r.$){var a=r.a;return de(a)}else{var n=r.a;return e(n)}}),Xs=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),eo=$(function(e,r){return p(vr,Xs(e),T,r)}),Wc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Qs=t$,Ks=Xu,em=$(function(e,r){if(r.$)return de(e);var n=r.a;return ie(n)}),rm=a$,nm=function(e){return o(rm,{ew:!1,fg:!1},e)},ro=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},am=$(function(e,r){if(r.$){var a=r.a;return de(a)}else{var n=r.a;return ie(e(n))}}),tm=function(e){return{$:2,a:e}},om=function(e){return{$:0,a:e}},im=function(e){return{$:1,a:e}},Ta=$(function(e,r){return Oe(r)-Oe(e)}),Pa=S(function(e,r,n){var a=Oe(n);return I(Oe(e),a)<1&&I(a,Oe(r))<1}),cm=$(function(e,r){var n=function(t){return I(t,e)<0?ie(t):de(im(r))},a=p(Pa,"0","9",r)?ie(o(Ta,"0",r)):p(Pa,"a","z",r)?ie(10+o(Ta,"a",r)):p(Pa,"A","Z",r)?ie(10+o(Ta,"A",r)):de(om(r));return o(la,n,a)}),Gc=$(function(e,r){var n=Xr(r);if(n.$===1)return ie(0);var a=n.a,t=a.a,i=a.b;return o(la,function(c){return o(la,function(l){return ie(c+l*e)},o(Gc,e,i))},o(cm,e,t))}),lm=$(function(e,r){return 2<=e&&e<=36?o(Gc,e,ot(r)):de(tm(e))}),um=lm(16),vm=S(function(e,r,n){return x($r,e,r,n,1)}),$m=F(function(e,r,n,a){return x($r,e,r,n,a)}),Pn=Cu,fm=$(function(e,r){var n=o(Pn,10,e);return Ne(r*n)/n}),sm=Hu,mm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=zc(n);if(a.b&&!a.b.b){var t=a.a;return Ks(g([t,t]))}else return n};return o(ee,sm,o(ee,function(n){return o(xe,function(a){return p(Qs,1,a,n)},nm(e))},o(ee,Zs(ro),o(ee,xe(function(n){return n.fG}),o(ee,xe(eo(Tr)),o(ee,em("Parsing hex regex failed"),la(function(n){var a=o(ce,o(ee,r,o(ee,um,am(pf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ie(x($m,t/255,c/255,u/255,o(fm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ie(p(vm,t/255,c/255,u/255))}else break e;return de("Parsing ints from hex failed")})))))))}(),ua=Ar("input"),ut=Ar("label"),vt=Re("name"),Hc=$(function(e,r){return p(vr,M,r,e)}),dm=o(Hc,g(["target","checked"]),X),pm=function(e){return o(Vc,"change",o(ra,e,dm))},bm=function(e){return P(e,!0)},gm=function(e){return{$:1,a:e}},hm=$(function(e,r){return o(Ec,e,gm(r))}),_m=o(Hc,g(["target","value"]),Cn),no=function(e){return o(hm,"input",o(ra,bm,o(ra,e,_m)))},Yc=Re("max"),Ic=Re("min"),Oc=function(e){return o(Re,"step",e)},va=Re("type"),ao=Re("value"),Jo=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(O,T,g([o(ut,g([lt(r)]),g([o(O,g([Y("relative w-full")]),g([o(O,g([Y("inline-block")]),g([cr(r)])),o(O,g([Y("inline-block float-right")]),g([cr(re(n))]))]))])),o(ua,g([va("range"),o(K,"width","100%"),oa(r),vt(r),Ic(re(a)),Yc(re(t)),ao(re(n)),Oc(re(i)),no(o(ee,qt,o(ee,gr(42),c)))]),T)]))},Cm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ym=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,g([Y("h-12 py-4")]),g([o(ut,g([Y("block"),lt(e)]),g([o(ua,g([Y("relative bottom-[1px] align-middle mr-2"),va("checkbox"),oa(e),vt(e),pm(js(e)),Is(c)]),T),cr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Jo({cg:e,cs:i,cw:t,cA:Ws(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Jo({cg:e,cs:i,cw:t,cA:o(ee,Ne,Gs(e)),cW:1,c1:c});default:var c=r.a;return o(O,T,g([o(O,g([o(K,"margin-bottom","6px")]),g([o(ut,g([lt(e)]),g([cr(e)]))])),o(ua,g([va("color"),o(K,"width","100%"),o(K,"height","26px"),o(K,"padding","0px"),oa(e),vt(e),no(function(l){return o(Ns,e,o(Cm,Hs,mm(l)))}),ao(qs(c))]),T)]))}}),Sm=function(e){return o(O,g([Y("p-4 border-y-[0.5px] border-white20")]),g([o(O,g([Y("text-lg pb-2")]),g([cr(e.fh)])),o(O,g([Y("pl-2 pr-2")]),Vs(o(ct,ym,e.av)))]))},wm=function(e){return o(O,g([Y("text-xs text-white60")]),o(ce,Sm,e))},Lm=function(e){return o(O,g([Y("absolute left-[104px] bottom-2 text-sm text-white40")]),g([cr("clock: "+o(Ac,3,Qr(e).b7))]))},xm=function(e){e.a;var r=e.b.T;return o(xe,function(n){return Ne(60/(Qr(e).b7-n))},o(xe,o(ee,hf,function(n){return n.b7}),ro(o(wc,59,r))))},Tm=function(e){return o(O,g([Y("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=xm(e);if(r.$===1)return g([cr("... Fps")]);var n=r.a;return g([cr(Le(n)+" Fps")])}())},Pm=function(e){return{$:0,a:e}},zm=function(e){var r=e.b.T;return Mr(r)},Mm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},km=function(e){return o(ua,g([Y("absolute w-full"),va("range"),Ic(Le(0)),Yc(Le(Mm(e)-1)),ao(Le(zm(e))),Oc(Le(1)),no(o(ee,qt,o(ee,gr(42),o(ee,Ne,Pm))))]),T)},qo={$:1},Zo={$:3},Xo={$:2},$t=function(e){return!e.b},Jc=jc("disabled"),za=S(function(e,r,n){return o(Xt,g([Y("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Y(n),Jc(e),Qt(r)]),g([cr("REC")]))}),Ma=S(function(e,r,n){return o(Xt,g([Y("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Jc(e),Qt(n)]),g([o(O,g([Y("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Dm=function(e){var r=e.a,n=e.b.ab;return o(O,g([Y("py-1")]),g([function(){switch(r.$){case 0:return p(za,!1,qo,"text-red-500 font-bold");case 1:return p(za,!1,Xo,"text-white60 hover:text-white80 font-bold");default:return p(za,!0,Xo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ma,$t(n),Pr.fq,Zo);case 1:return p(Ma,$t(n),Pr.fq,Zo);default:return p(Ma,!1,Pr.fp,qo)}}()]))},Bm=function(e){return o(O,g([Y("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([km(e),Dm(e),Tm(e),Lm(e)]))},Am=function(e){var r=e.a;return br(r,ga)},Fm=$(function(e,r){var n=Am(r.G)?o(O,T,T):o(O,g([Y("absolute pointer-events-none w-8 h-8"),o(K,"left",re(e.fs.fU+.5*e.cT.fS)+"px"),o(K,"top",re(-e.fs.fY+.5*e.cT.eW)+"px")]),g([o(O,g([Y(e.fs.e4?"text-black80":"text-black40")]),g([Pr.fs]))]));return o(O,T,g([n]))}),Um=$(function(e,r){var n=o(Xt,g([Y(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Qt(Ts),Rs("Distraction Free Mode")]),g([Pr.f0])),a=40,t=260,i=o(O,g([Y("absolute w-8 bottom-12")]),g([o(Yo,g([Y("text-twitterBlue40 hover:text-twitterBlue"),Io("https://twitter.com/AzizErkalSelman"),Oo("_blank")]),g([Pr.fN]))])),c=80,l=o(O,g([Y("absolute w-8 bottom-2")]),g([o(Yo,g([Y("text-githubCat40 hover:text-githubCat"),Io("https://github.com/erkal/elm-3d-playground-exploration"),Oo("_blank")]),g([Pr.eQ]))])),u=e.cT.fS>640?H(e.cT.eW,a+t,e.cT.fS-(a+t)):H(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(O,g([Y("fixed w-10 h-10 p-1")]),g([n])):o(O,T,g([o(O,g([Y("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(K,"width",re(a)+"px")]),g([n,i,l])),o(O,g([Y("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(K,"width",re(t)+"px"),o(K,"height",re(v)+"px")]),g([o(ia,Ps,wm(Qr(r.G).eA))])),o(O,g([Y("absolute bottom-0"),o(K,"left",re(s)+"px"),o(K,"height",re(c)+"px"),o(K,"width",re(m)+"px")]),g([o(ia,zs,Bm(r.G))])),o(Fm,e,r)]))}),Rm=S(function(e,r,n){var a=ws(n.G),t=Qr(n.G);return o(O,g([Y("bg-black40"),Y("select-none"),Y("antialiased"),Y("font-mono"),o(K,"width",re(t.cT.fS)+"px"),o(K,"height",re(t.cT.eW)+"px")]),g([o(O,g([Y("fixed")]),g([o(ia,gc(ys),o(e,t,a))])),o(O,g([oa("gui")]),g([o(Um,t,n),o(ia,Cs,o(r,t,a))]))]))}),Em=We(function(e,r,n,a,t,i){var c=$(function(u,v){return P(x(bs,r,i,u,v),Ho)}),l=function(u){var v=o(hc,n,u.e1);return P({aL:u.e1.cT.fS<500,G:o(gs,v,a)},Ho)};return Rf({e0:l,fH:gc(_s(wf)),fO:c,fQ:o(Rm,e,t)})}),Vm=F(function(e,r,n,a){return Ce(Em,e,r,n,a,$(function(t,i){return o(O,T,T)}),S(function(t,i,c){return c}))}),jm=function(e){return{}},Nm=S(function(e,r,n){return{av:n,e5:r,fh:e}}),qc=Xe,Wm=function(e){return p(Ln,$(function(r,n){var a=r.a,t=r.b;return p(sn,a,t,n)}),qc,e)},Gm=S(function(e,r,n){return p(Nm,e,r,Wm(n))}),Qo=Gm,An=S(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Tc,P(a,t),n))}),tr=Su,Hm=g([p(Qo,"Camera",!0,g([p(An,"camera distance",P(3,8),4),p(An,"camera azimuth",P(0,2*tr),0),p(An,"camera elevation",P(-tr/2,tr/2),.5)])),p(Qo,"Parameters",!0,g([p(An,"sun size",P(.1,.5),.3)]))]),Ym=$(function(e,r){return r}),ft=x($r,52/255,101/255,164/255,1),Im=x($r,115/255,210/255,22/255,1),Zc=function(e){return{$:4,a:e}},Om=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),_a=function(e){return Zc(o(Om,e,T))},Jm=function(e){return _a(e)},Xc=Jm,st=function(e){return{$:0,a:e}},Qc=$(function(e,r){return{$:0,a:e,b:r}}),zn=c$,qm=function(e){var r=Kt(e),n=r.cN,a=r.cd,t=r.b5;return p(zn,n,a,t)},Zm=function(e){return o(Qc,0,st(qm(e)))},Xm=function(e){return e},Kc=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Qm=$(function(e,r){return Xm(P(e,o(Kc,r,e)))}),el=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Km=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(el,e(n),e(a),e(t))}),Me=$(function(e,r){return{$:1,a:e,b:r}}),rl=function(e){var r=e;return r},qe=$(function(e,r){var n=e,a=r;return o(Je,n,a)}),Hn=$(function(e,r){return I(e,r)<0?e:r}),or=$(function(e,r){var n=e,a=r;return o(Hn,n,a)}),Ko=function(e){var r=e;return r.fU},ei=function(e){var r=e;return r.fY},ri=function(e){var r=e;return r.c6},ed=$(function(e,r){var n=ri(r),a=ri(e),t=ei(r),i=ei(e),c=Ko(r),l=Ko(e);return{dO:o(qe,l,c),dP:o(qe,i,t),dQ:o(qe,a,n),dR:o(or,l,c),dS:o(or,i,t),dT:o(or,a,n)}}),rd=function(e){var r=rl(e),n=r.a,a=r.b;return o(ed,n,a)},nl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},al={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},tl={$:0},z=tl,nd=$(function(e,r){switch(r.$){case 0:return o(q$,e,r);case 1:return o(Z$,e,r);case 2:return o(X$,e,r);case 3:return o(Q$,e,r);case 4:return o(K$,e,r);default:return o(ef,e,r)}}),ad=$(function(e,r){switch(r.$){case 0:return o(L$,e,r);case 1:return o(x$,e,r);case 2:return o(T$,e,r);case 3:return o(P$,e,r);case 4:return o(z$,e,r);case 5:return o(M$,e,r);case 6:return o(k$,e,r);case 7:return o(D$,e,r);default:return B$(e)}}),fe=w$,Ca=function(e){var r=e;return r},ni={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},td=$(function(e,r){return{$:1,a:e,b:r}}),od=td({df:2,$7:0,dV:1}),ai=od(g([P({dw:0},{dw:1})])),to=f$,yn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),id=function(e){var r=e;return p(yn,r.dR,r.dO,.5)},cd=function(e){var r=e;return p(yn,r.dS,r.dP,.5)},ld=function(e){var r=e;return p(yn,r.dT,r.dQ,.5)},dr=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),ud=function(e){return p(dr,id(e),cd(e),ld(e))},vd=function(e){var r=e;return r.dO},$d=function(e){var r=e;return r.dP},ol=function(e){var r=e;return r.dQ},fd=function(e){var r=e;return r.dR},sd=function(e){var r=e;return r.dS},il=function(e){var r=e;return r.dT},Yr=$(function(e,r){var n=e,a=r;return a-n}),cl=function(e){return H(o(Yr,fd(e),vd(e)),o(Yr,sd(e),$d(e)),o(Yr,il(e),ol(e)))},Mn=function(e){var r=e;return r},N=function(e){var r=cl(e),n=r.a,a=r.b,t=r.c;return{ey:Mn(ud(e)),eS:n/2,eT:a/2,eU:t/2}},ll=$$,je=function(e){return ll(Mn(e))},md=$(function(e,r){var n=rd(r),a=N(n),t=rl(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(Me,a,le(function(v,s,m,d,f,h,b,C){return w(fe,C,ni,nl,ai,{aw:l,du:je(c),dv:je(i),b:m,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(Me,a,le(function(s,m,d,f,h,b,C,y){return w(fe,y,ni,al,ai,{aN:o(to,Ca(u),l),du:je(c),dv:je(i),b:d,c:m,d:b,e:s,f:h})}));case 2:return z;default:return z}}),dd=$(function(e,r){return o(md,e,r)}),lr=function(e){return e},fr={fU:0,fY:0,c6:0},ka=$(function(e,r){return o(dd,Zm(e),o(Qm,fr,o(Km,lr,r)))}),pd=x($r,204/255,0/255,0/255,1),bd=Xc(g([o(ka,pd,H(100,0,0)),o(ka,Im,H(0,100,0)),o(ka,ft,H(0,0,100))])),gd=$(function(e,r){return o(xe,function(n){if(n.$)return 0;var a=n.b;return a},o(Zt,e,r.av))}),hd=$(function(e,r){return o(gr,0,ro(o(eo,gd(e),r)))}),_d=$(function(e,r){return o(hd,e,r.eA)}),Yn=_d,Cd=Tu,yd=function(e){return e},mt=function(e){var r=e;return-r},Sd=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c6-n.c6*a.fY,fY:n.c6*a.fU-n.fU*a.c6,c6:n.fU*a.fY-n.fY*a.fU}}),ul=function(e){var r=e;return r.c4},vl=function(e){var r=e;return r.c5},wd=function(e){return o(Sd,ul(e),vl(e))},Kr=function(e){var r=e;return r.cB},kr=wu,Dr=Lu,Da=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=kr(c),u=Dr(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,h=s.fY*u,b=l*h,C=m*h,y=h*h,_=1-2*(f+y),L=s.c6*u,B=l*L,W=2*(C-B),E=2*(C+B),R=m*L,j=2*(R+b),G=2*(R-b),U=h*L,Z=2*(U-d),J=2*(U+d),te=L*L,ue=1-2*(y+te),ae=1-2*(f+te);return{fU:ue*i.fU+W*i.fY+j*i.c6,fY:E*i.fU+ae*i.fY+Z*i.c6,c6:G*i.fU+J*i.fY+_*i.c6}}),Ld=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=kr(c),u=Dr(c),v=a.cB,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c6-s.c6,h=a.eH,b=h,C=b.fU*u,y=l*C,_=C*C,L=b.fY*u,B=l*L,W=C*L,E=L*L,R=1-2*(_+E),j=b.c6*u,G=l*j,U=2*(W-G),Z=2*(W+G),J=C*j,te=2*(J+B),ue=2*(J-B),ae=L*j,$e=2*(ae-y),ye=2*(ae+y),be=j*j,sr=1-2*(E+be),mr=1-2*(_+be);return{fU:s.fU+sr*m+U*d+te*f,fY:s.fY+Z*m+mr*d+$e*f,c6:s.c6+ue*m+ye*d+R*f}}),en=function(e){return e},Fr=function(e){var r=e;return r.c4},Ur=function(e){var r=e;return r.c5},Rr=function(e){var r=e;return r.c7},xd=S(function(e,r,n){return en({cB:p(Ld,e,r,Kr(n)),c4:p(Da,e,r,Fr(n)),c5:p(Da,e,r,Ur(n)),c7:p(Da,e,r,Rr(n))})}),ti=S(function(e,r,n){return p(xd,e(n),r,n)}),oo=function(e){var r=e;return r.eH},Td=$(function(e,r){return en({cB:o(Kc,e,Kr(r)),c4:Fr(r),c5:Ur(r),c7:Rr(r)})}),Pd=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c6:n*a.c6}}),zd=S(function(e,r,n){return o(Td,o(Pd,r,e),n)}),Md=S(function(e,r,n){return p(zd,oo(e(n)),r,n)}),rn=$(function(e,r){return{eH:r,cB:e}}),kd=function(e){var r=e;return o(rn,r.cB,r.c4)},Dd=function(e){var r=e;return o(rn,r.cB,r.c5)},Bd=function(e){var r=e;return o(rn,r.cB,r.c7)},Ad=function(e){var r=en({cB:e.aR,c4:vl(e.dl),c5:wd(e.dl),c7:ul(e.dl)}),n=p(Md,Bd,e.cc,p(ti,kd,mt(e.bC),p(ti,Dd,e.bx,r)));return n},Fd=function(e){return{$:0,a:e}},Fe=function(e){var r=e;return Q(r)},In=function(e){var r=e;return .5*r},Ud=xu,Rd=function(e){var r=e;return Ud(r)},Ed=function(e){var r=In(Fe(e.ej)),n=Rd(r);return{cM:Fd(n),c2:e.c2}},ir=function(e){return e},$l=Tr,zr=function(e){return e},Vd=zr({fU:1,fY:0,c6:0}),io=Vd,fl=zr({fU:0,fY:0,c6:1}),ya=fl,jd=$l({cB:fr,c4:ya,c5:io}),Nd=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cc;return Ed({ej:ir(2*Cd(.5)),c2:Ad({bx:ir(n),cc:lr(t),bC:ir(a),aR:yd(r),dl:jd})})},Wd=function(e){return Nd({bx:o(Yn,"camera azimuth",e),cc:o(Yn,"camera distance",e),bC:o(Yn,"camera elevation",e),aR:{fU:0,fY:0,c6:0}})},Gr=function(e){return e*tr/180},Gd=S(function(e,r,n){return{k:o(rn,e,r),e9:Fe(n.e9),fu:Fe(n.fu)}}),Hd=function(e){var r=e;return r.k},Yd=$(function(e,r){return r.b?p(vr,D,r,e):e}),Ue=function(e){return p(vr,Yd,T,e)},dn=function(e){var r=e;return kr(r)},Id=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Od=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),sl=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ml=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Jd=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),qd=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Zd=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),dl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return x(Zd,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return x(Id,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return x(Od,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return x(sl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return x(qd,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return x(ml,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return x(Jd,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Xd=$(function(e,r){var n=r;return n/e}),oi=function(e){var r=e;return{fU:kr(r),fY:Dr(r)}},pl={$:0},bl=function(e){var r=e;return r},co=function(e){return ll(bl(e))},Qd=$(function(e,r){var n=e.bT,a=e.o;return o(D,{o:co(a),bT:je(n)},r)}),lo=function(e){var r=e;return r.D},Kd=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Sa=Kd({df:1,$7:3,dV:4}),nn=l$,an=u$,tn=v$,Ba=$(function(e,r){var n=e,a=r;return I(a,n)<1}),e0=function(e){return o(Ba,e.dO,e.dR)&&o(Ba,e.dP,e.dS)&&o(Ba,e.dQ,e.dT)?e:{dO:o(qe,e.dR,e.dO),dP:o(qe,e.dS,e.dP),dQ:o(qe,e.dT,e.dQ),dR:o(or,e.dR,e.dO),dS:o(or,e.dS,e.dP),dT:o(or,e.dT,e.dQ)}},r0=sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=tn(l.bT),s=an(l.bT),m=nn(l.bT),d=o(Hn,e,m),f=o(Je,r,m),h=o(Hn,n,s),b=o(Je,a,s),C=o(Hn,t,v),y=o(Je,i,v),_=u;e=d,r=f,n=h,a=b,t=C,i=y,c=_;continue e}else return e0({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),gl=$(function(e,r){var n=tn(e.bT),a=an(e.bT),t=nn(e.bT);return xt(r0,t,t,a,a,n,n,r)}),uo=function(e){var r=e;return r.ah},n0=function(e){var r=p(oc,Qd,T,uo(e));if(r.b){var n=r.a,a=r.b,t=o(Sa,r,lo(e)),i=o(gl,n,a);return x(sl,i,e,t,0)}else return pl},Se=$(function(e,r){var n=r;return e*n}),a0=zr({fU:0,fY:0,c6:-1}),ii=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),$a=function(e){var r=e;return Dr(r)},$n=function(e){var r=e;return r},t0=S(function(e,r,n){e:for(;;){var a=o(Ht,Pe,e),t=a.a,i=a.b;if(I(rt(t),Pe)<0)return o(bc,!0,{z:r,l:n,p:t});var c=i,l=o(D,dc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),vo=function(e){return e.b?p(t0,e,T,0):sc},dt=function(e){return{D:o(ce,function(r){return H(3*r,3*r+1,3*r+2)},o(Or,0,Mr(e)-1)),ah:vo(Ue(o(ce,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},pt=function(e){return ir(2*tr*e)},hl=zr({fU:0,fY:1,c6:0}),$o=hl,ci=$l({cB:fr,c4:io,c5:$o}),rr=0,_l=function(){var e=72,r=o(Xd,e,pt(1)),n=lr(1),a=$n(fl),t=$n(a0),i=lr(1),c=o(Se,.5,i),l=p(dr,rr,rr,c),u=o(Se,-.5,i),v=p(dr,rr,rr,u),s=function(f){var h=o(Se,f,r),b=$n(o(ii,ci,oi(h))),C=o(Se,dn(h),n),y=o(Se,$a(h),n),_=p(dr,C,y,c),L=p(dr,C,y,u),B=o(ca,e,f+1),W=o(Se,B,r),E=$n(o(ii,ci,oi(W))),R=o(Se,dn(W),n),j=o(Se,$a(W),n),G=p(dr,R,j,u),U=p(dr,R,j,c);return g([H({o:t,bT:v},{o:t,bT:G},{o:t,bT:L}),H({o:b,bT:L},{o:E,bT:G},{o:E,bT:U}),H({o:b,bT:L},{o:E,bT:U},{o:b,bT:_}),H({o:a,bT:l},{o:a,bT:_},{o:a,bT:U})])},m=o(ce,s,o(Or,0,e-1)),d=dt(Ue(m));return dl(n0(d))}(),Fn={$:0},o0=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),i0=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),bt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Cl=function(e){return e},Hr=Bu,c0={fU:0,fY:0,c6:0},l0=$(function(e,r){var n=e,a=r,t=o(Je,Q(a.fU),o(Je,Q(a.fY),Q(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=Hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return c0}),u0=l0(Cl(1)),v0=S(function(e,r,n){var a=o(bt,r,n),t=o(bt,e,r);return u0(o(i0,a,t))}),$0=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=co(p(v0,u,l,c)),s={o:v,bT:je(u)},m={o:v,bT:je(l)},d={o:v,bT:je(c)};return o(D,s,o(D,m,o(D,d,n)))}),f0=F(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),gt=4294967295>>>32-hn,ht=du,s0=S(function(e,r,n){e:for(;;){var a=gt&r>>>e,t=o(ht,a,n);if(t.$){var v=t.a;return o(ht,gt&r,v)}else{var i=t.a,c=e-hn,l=r,u=i;e=c,r=l,n=u;continue e}}}),m0=function(e){return e>>>5<<5},d0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,m0(n))>-1?ne(o(ht,gt&e,i)):ne(p(s0,a,e,t))}),Aa=$(function(e,r){return o(d0,e,uo(r))}),p0=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return x(f0,S(function(c,l,u){return H(c,l,u)}),o(Aa,a,e),o(Aa,t,e),o(Aa,i,e))};return o(eo,r,lo(e))},b0=S(function(e,r,n){return e(r(n))}),g0=$(function(e,r){return!o(Pc,o(b0,Ef,e),r)}),h0=$(function(e,r){return p(vr,$(function(n,a){return e(n)?o(D,n,a):a}),T,r)}),_0=function(e){var r=e.a;return r},yl=$(function(e,r){var n=_0(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(g0,a,r)?{D:r,ah:e}:{D:o(h0,a,r),ah:e}}),_t=function(e){var r=e;return r},On=$(function(e,r){var n=_t(r),a=_t(e);return P(H(a.fU,a.fY,a.c6),H(n.fU,n.fY,n.c6))}),li=p(zn,0,0,0),Fa=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Zt,o(On,e,r),t);if(v.$){var m={o:li,bT:je(r)},d={o:li,bT:je(e)},f=u+1,h=u;return H(o(D,H(n,h,f),o(D,H(n,f,a),c)),o(D,m,o(D,d,l)),u+2)}else{var s=v.a;return H(o(D,H(n,s,a),c),l,u)}}),C0=se(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,C=e,y=r,_=v,L=a+3,B=Ce(Fa,s,d,f,b,r,Ce(Fa,m,s,h,f,r,Ce(Fa,d,m,b,h,r,t)));e=C,r=y,n=_,a=L,t=B;continue e}else{var W=t,E=W.a,R=W.b;return P(E,Te(R))}}),y0=se(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,C=p(sn,o(On,d,s),f,p(sn,o(On,s,m),h,p(sn,o(On,m,d),b,t))),y=o(D,H(b,h,f),a),_=e,L=v,B=n+3,W=y,E=C;e=_,r=L,n=B,a=W,t=E;continue e}else return H(a,t,n)}),Sr=S(function(e,r,n){var a=p0(n),t=p(vr,$0(r),T,a),i=w(y0,r,a,0,T,qc),c=i.a,l=i.b,u=i.c,v=w(C0,r,l,a,0,H(c,T,u)),s=v.a,m=v.b,d=$t(m)?t:oe(t,m);return p(o0,e,o(yl,vo(d),s),o(Sa,d,s))}),ui=function(e){var r=e;return r},S0=function(e){switch(e.$){case 0:return Fn;case 1:var a=e.a,r=e.b,n=o(ce,ui,r);return p(Sr,a,Tr,dt(n));case 2:var a=e.a,r=e.b,n=o(ce,ui,r);return p(Sr,a,Tr,dt(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 8:return Fn;case 9:return Fn;default:return Fn}},vi=S0(_l),Sl=function(e){var r=e;return r.cB},w0=function(e){var r=e,n=Q(r.c6),a=Q(r.fY),t=Q(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=Hr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=Hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=Hr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=Hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},L0=function(e){var r=w0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return P(r,c)},x0=function(e){var r=oo(e),n=L0(r),a=n.a,t=n.b;return en({cB:Sl(e),c4:a,c5:t,c7:r})},T0=function(e){var r=e;return r.e9},P0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},z0=1029,M0=function(e){return{$:5,a:e}},wl=function(e){var r=e;return M0(r)},k0=wl(z0),D0=1028,B0=wl(D0),Qe=S(function(e,r,n){return r===1?e?o(D,k0,n):o(D,B0,n):n}),Ll={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ua=F(function(e,r,n,a){return o(Me,r,le(function(t,i,c,l,u,v,s,m){return w(fe,p(Qe,l,a,m),Ll,P0,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),xl={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ke=F(function(e,r,n,a){return o(Me,r,le(function(t,i,c,l,u,v,s,m){return w(fe,p(Qe,l,a,m),xl,nl,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Tl=$(function(e,r){return{$:3,a:e,b:r}}),A0={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Pl={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},F0=F(function(e,r,n,a){return o(Tl,n,le(function(t,i,c,l,u,v,s,m){return w(fe,m,Pl,A0,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),er=se(function(e,r,n,a,t){return o(Me,n,le(function(i,c,l,u,v,s,m,d){return w(fe,p(Qe,u,t,d),xl,al,a,{aN:o(to,Ca(r),e),b:l,c,d:s,e:i,f:v})}))}),U0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},R0=se(function(e,r,n,a,t){return o(Tl,a,le(function(i,c,l,u,v,s,m,d){return w(fe,d,Pl,U0,t,{aN:o(to,Ca(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),E0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},zl={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Un=F(function(e,r,n,a){return o(Me,r,le(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(fe,p(Qe,l,a,m),zl,E0,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Ml={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},kl={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},V0=We(function(e,r,n,a,t,i){return o(Me,a,le(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return w(fe,p(Qe,v,i,f),kl,Ml,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Dl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},j0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Me,u,le(function(m,d,f,h,b,C,y,_){var L=y.a,B=y.b;return w(fe,p(Qe,h,s,_),kl,Dl,v,{b4:e,b8:r,b9:i,ca:a,P:B,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,cv:t,b:f,c:d,aW:c,d:C,cS:n,e:m,a$:l,f:b})}))}}}}}}}}}}},N0={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Rn=We(function(e,r,n,a,t,i){return o(Me,a,le(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return w(fe,p(Qe,v,i,f),zl,N0,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),W0=function(e){return{$:0,a:e}},$i=$(function(e,r){return{$:1,a:e,b:r}}),pn=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),on=s$,G0=function(e){return x(on,nn(e),an(e),tn(e),1)},fo=x(on,0,0,0,0),Jn=$(function(e,r){if(r.$){var a=r.a.C;return P(a,fo)}else{var n=r.a;return P(e,G0(n))}}),H0=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o($i,P(t,fo),o(pn,t,r))}else if(n.b.$){var t=n.b.a.C;return o($i,o(Jn,t,e),o(pn,t,r))}else{var a=n.a.a;return n.b.a,W0(a)}}),Y0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),En=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),I0=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xr=o$,O0=function(e){return o(xr,e,1)},Ct=o(xr,0,0),Er=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Ct)}else{var n=r.a;return P(e,O0(n))}}),J0=F(function(e,r,n,a){var t=x(I0,e,r,n,a);if(t.a.$){var u=t.a.a.C;return x(En,P(u,fo),o(Er,u,r),o(Er,u,n),o(pn,u,a))}else if(t.b.$){var u=t.b.a.C;return x(En,o(Jn,u,e),P(u,Ct),o(Er,u,n),o(pn,u,a))}else if(t.c.$){var u=t.c.a.C;return x(En,o(Jn,u,e),o(Er,u,r),P(u,Ct),o(pn,u,a))}else if(t.d.$){var u=t.d.a.C;return x(En,o(Jn,u,e),o(Er,u,r),o(Er,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Y0,i,c,l)}}),q0={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},Ra=se(function(e,r,n,a,t){return o(Me,n,le(function(i,c,l,u,v,s,m,d){return w(fe,p(Qe,u,t,d),Ll,q0,a,{b1:Ca(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Bl={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Z0=F(function(e,r,n,a){return o(Me,r,le(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return w(fe,p(Qe,l,a,m),Bl,Ml,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),X0=Lt(function(e,r,n,a,t,i,c,l,u){return o(Me,c,le(function(v,s,m,d,f,h,b,C){var y=b.a,_=b.b;return w(fe,p(Qe,d,u,C),Bl,Dl,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cv:t,b:m,c:s,aW:e,d:h,cS:n,e:v,a$:0,f})}))}),Al=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return x(Ua,l,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Ua,l,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Ua,l,N(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Ke,n,N(t),c,a);case 8:var t=r.a,c=r.c;return x(Ke,n,N(t),c,0);case 9:var t=r.a,c=r.c;return x(Ke,n,N(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(F0,n,i,N(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return w(Ra,l,v,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Ra,l,v,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Ra,l,v,N(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(er,u,v,N(t),c,a);case 8:var t=r.a,c=r.c;return w(er,u,v,N(t),c,0);case 9:var t=r.a,c=r.c;return w(er,u,v,N(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(R0,u,v,i,N(t),c)}}case 2:e.a;var s=e.b,E=e.c,m=o(H0,s,E);if(m.$){var h=m.a,b=h.a;h.b;var C=m.b,y=C.a,_=C.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return x(Z0,b,N(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Ce(V0,b,y,_,N(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var d=m.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return x(Un,d,N(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return x(Un,d,N(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return x(Un,d,N(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return x(Un,d,N(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var L=e.b,B=e.c,W=e.d,E=e.e,R=x(J0,L,B,W,E);if(R.$){var Z=R.a,J=Z.a,te=Z.b,ue=R.b,ae=ue.a,$e=ue.b,ye=R.c,be=ye.a,sr=ye.b,mr=R.d,y=mr.a,_=mr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return vu(X0,J,te,ae,$e,be,sr,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return j0(J)(te)(ae)($e)(be)(sr)(y)(_)(N(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=R.a,G=R.b,U=R.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return Ce(Rn,j,G,U,N(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return Ce(Rn,j,G,U,N(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Ce(Rn,j,G,U,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Ce(Rn,j,G,U,N(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),Ea=function(e){var r=e;return r.fU},Va=function(e){var r=e;return r.fY},ja=function(e){var r=e;return r.c6},Q0=function(e){var r=e,n=ja(r.c7),a=Va(r.c7),t=Ea(r.c7),i=ja(r.c5),c=Va(r.c5),l=Ea(r.c5),u=ja(r.c4),v=Va(r.c4),s=Ea(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ze=function(e){var r=e;return r},K0=function(e){var r=Mn(Kr(e)),n=ze(Rr(e)),a=ze(Ur(e)),t=ze(Fr(e));return{dp:Q0(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},jr=$(function(e,r){return{$:5,a:e,b:r}}),Fl=$(function(e,r){return{dp:br(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),so=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Fl,a,e);return o(jr,i,t);case 1:return o(jr,e,n);case 3:return o(jr,e,n);case 2:return o(jr,e,n);default:return o(jr,e,n)}}),ep=$(function(e,r){return o(so,K0(e),r)}),mo=function(e){return{$:2,a:e}},rp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),np=d$,ap=m$,fi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=ap(a),h=f.fU,b=f.fY,C=f.c6,y=f.em,_=np({em:y,fU:h*s,fY:b*m,c6:C*d});return Tt(r,n,_,t,i,c,l,u,v)}}}}}}}}}},yt=$(function(e,r){switch(r.$){case 0:return tl;case 5:var n=r.a,a=r.b;return o(jr,n,o(yt,e,a));case 1:var t=r.a,i=r.b;return o(Me,o(rp,e,t),o(fi,e,i));case 3:return r;case 2:var i=r.a;return mo(o(fi,e,i));default:var c=r.a;return Zc(o(ce,yt(e),c))}}),Ul=$(function(e,r){var n=r;return o(yt,e,n)}),tp=function(e){var r=e;return r.fu},Rl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},qr=519,El=7683,Vl=7682,pe=7680,op=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},po=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(ee,c(v.bl),o(ee,l(v.a8),o(ee,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(op,a,t,i)))}),ip=p(po,{cp:0,cO:0,c3:15},{a8:pe,bl:qr,bt:pe,bu:El},{a8:pe,bl:qr,bt:pe,bu:Vl}),cp=p(po,{cp:0,cO:0,c3:15},{a8:pe,bl:qr,bt:pe,bu:Vl},{a8:pe,bl:qr,bt:pe,bu:El}),jl=$(function(e,r){return e?o(D,cp,r):o(D,ip,r)}),lp={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},up=function(e){if(e.$){var r=e.c;return ne(le(function(n,a,t,i,c,l,u,v){return w(fe,o(jl,i,v),lp,Rl,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},si=function(e){var r=up(e);if(r.$)return z;var n=r.a;return mo(n)},vp=F(function(e,r,n,a){var t=x0(Hd(a)),i=o(Al,n,_l),c=function(){var m=P(e,r);return m.a?m.b?_a(g([i,si(vi)])):i:m.b?si(vi):z}(),l=tp(a),u=l,v=T0(a),s=v;return o(ep,t,o(Ul,H(u,u,s),c))}),$p=$(function(e,r){return x(vp,!0,!0,e,r)}),fp=S(function(e,r,n){return o($p,e,p(Gd,fr,hl,{e9:lr(n),fu:lr(r)}))}),Nl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Wl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Na=function(e){return p(Wl,0,1,e<=.04045?e/12.92:o(Pn,(e+.055)/1.055,2.4))},sp=function(e){var r=Kt(e),n=r.cN,a=r.cd,t=r.b5;return p(zn,Na(n),Na(a),Na(t))},qn=function(e){return p(Nl,0,st(sp(e)),st(0))},mp=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),dp=function(e){var r=bl(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},Gl=$(function(e,r){return o(so,dp(e),r)}),pp=$(function(e,r){return o(Gl,e,r)}),bp=function(e){var r=e.a,n=e.b,a=e.c;return pp(p(mp,r,n,a))},mi=function(e){return bp(H(e,0,0))},gp=$(function(e,r){var n=r,a=Mn(Sl(e)),t=.5*n,i=kr(t),c=Dr(t),l=ze(oo(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,b=1-2*(s+h),C=l.c6*c,y=i*C,_=2*(f-y),L=2*(f+y),B=u*C,W=2*(B+d),E=2*(B-d),R=m*C,j=2*(R-v),G=2*(R+v),U=C*C,Z=1-2*(h+U),J=1-2*(s+U);return{dp:!0,q:Z,r:L,s:E,t:_,u:J,v:G,w:W,x:j,y:b,H:a.fU-Z*a.fU-_*a.fY-W*a.c6,I:a.fY-L*a.fU-J*a.fY-j*a.c6,J:a.c6-E*a.fU-G*a.fY-b*a.c6,bX:1}}),hp=S(function(e,r,n){return o(so,o(gp,e,r),n)}),Hl=S(function(e,r,n){return p(hp,e,r,n)}),_p=o(rn,fr,$o),di=$(function(e,r){return p(Hl,_p,ir(e),r)}),Cp=o(rn,fr,ya),pi=$(function(e,r){return p(Hl,Cp,ir(e),r)}),yp=function(e){var r=e;return r.ey},Sp=function(e){var r=e;return r.fu},Vn=function(e){return ir(tr*(e/180))},bn=$(function(e,r){var n=e,a=r;return a+n}),bi=$(function(e,r){var n=e,a=r;return n/a}),wp=se(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(br(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),gi=$(function(e,r){return e<1?T:w(wp,0,e,e,r,T)}),Lp=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(D,{o:co(a),bT:je(n),L:o(xr,c,l)},r)}),xp=function(e){var r=p(oc,Lp,T,uo(e));if(r.b){var n=r.a,a=r.b,t=o(Sa,r,lo(e)),i=o(gl,n,a);return x(ml,i,e,t,0)}else return pl},Yl=$(function(e,r){var n=e,a=r,t=kr(a);return{fU:t*kr(n),fY:t*Dr(n),c6:Dr(a)}}),Tp=function(){var e=lr(1),r=72,n=o(Or,0,r-1),a=o(gi,r,o(yn,rr,pt(1))),t=Wt(r/2),i=o(Or,0,t-1),c=o(gi,t,o(yn,Vn(90),Vn(-90))),l=vo(Ue(o(ce,function(s){return o(ce,function(m){return{o:$n(o(Yl,s,m)),bT:p(dr,o(Se,dn(m)*dn(s),e),o(Se,dn(m)*$a(s),e),o(Se,$a(m),e)),L:P(o(bi,s,pt(1)),o(bi,o(bn,Vn(90),m),Vn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Ue(o(ce,function(s){return Ue(o(ce,function(m){var d=o(u,s+1,m),f=o(u,s,m),h=o(u,s+1,m+1),b=o(u,s,m+1);return g([H(b,h,d),H(b,d,f)])},i))},n));return dl(xp(o(yl,l,v)))}(),fa=72,jn=2*fa,Pp=$(function(e,r){e:for(;;){var n=jn+1,a=o(ca,jn,2*e+3),t=o(ca,jn,2*e+2),i=2*e+1,c=2*e,l=jn,u=o(D,H(l,c,t),o(D,H(c,a,t),o(D,H(c,i,a),o(D,H(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),zp=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Mp=$(function(e,r){e:for(;;){var n=p(zp,0,2*tr,e/fa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),kp=function(){var e=o(Mp,fa-1,g([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Pp,fa-1,T);return o(Sa,e,r)}(),Dp={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},hi=function(e){return mo(le(function(r,n,a,t,i,c,l,u){return w(fe,o(jl,!0,u),Dp,Rl,kp,{aw:p(zn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},Bp=F(function(e,r,n,a){var t=o(Al,n,Tp),i=function(){var u=P(e,r);return u.a?u.b?_a(g([t,hi()])):t:u.b?hi():z}(),c=Sp(a),l=c;return o(Gl,o(bt,fr,yp(a)),o(Ul,H(l,l,l),i))}),Ap=$(function(e,r){return x(Bp,!0,!0,e,r)}),Fp=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Up=se(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Rp=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Qc,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Fp,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Nl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return w(Up,n,a,t,i,c)}},Ep=Rp,Vp=$(function(e,r){return{ey:r,fu:Fe(e)}}),St=$(function(e,r){return o(Ap,Ep(e),o(Vp,lr(r),fr))}),jp=$(function(e,r){return(r-pc(r/e)*e)/e}),_i=$(function(e,r){return 360*o(jp,e,r)}),Np=x($r,255/255,255/255,255/255,1),Wp=function(e){var r=o(pi,Gr(20),p(fp,qn(ft),.2,.05)),n=o(pi,Gr(20),o(di,Gr(o(_i,3,e.b7)),o(mi,.2,o(St,qn(Np),.04)))),a=o(St,qn(ft),.1);return o(di,Gr(o(_i,10,e.b7)),o(mi,1,Xc(g([a,n,r]))))},Wa=function(e){return e/255},Gp=S(function(e,r,n){return x($r,Wa(e),Wa(r),Wa(n),1)}),Hp=x($r,245/255,121/255,0/255,1),Yp=function(e){return o(St,qn(Hp),o(Yn,"sun size",e))},Ip=function(e){return e},Op=function(e){return lr(.01*e)},Ci=function(e){return e},Jp=function(e){return e},qp=function(e){return{$:0,a:e}},Zp=qp,Xp={$:3},Qp=Xp,Kp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),e1=Kp,r1=$(function(e,r){return Ue(o(ce,e,r))}),n1=function(e){return{$:1,a:e}},a1=n1,t1=function(e){return o(yr,"height",Le(e))},o1=function(e){return zv(Av(e))},i1=o1,c1=function(e){return{$:2,a:e}},l1=c1,u1=function(e){return o(wr,"",e)},v1=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ne(l*1e3)/1e3},c=function(l){return Ne(l*1e4)/100};return u1(g(["rgba(",re(c(r)),"%,",re(c(n)),"%,",re(c(a)),"%,",re(i(t)),")"]))},$1=S(function(e,r,n){return p(J$,e,r,n)}),yi=function(e){var r=e;return r},Ga=x(on,1,1,1,1),Ge=S(function(e,r,n){return o(ce,function(a){return o(a,r,n)},e)}),f1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),s1=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(f1,n*a/t,n,n*(1-a-t)/t)}),m1=function(e){var r=e.a,n=e.b,a=e.c;return p(zn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},bo=$(function(e,r){return m1(o(s1,e,r))}),nr=h$,d1=function(e){return nr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ha=se(function(e,r,n,a,t){var i=a.dp?1:-1,c=x(on,a.bX,a.bX,a.bX,i);return Ce(t,e,c,d1(a),a.dp,r,n)}),Il=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Fl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(D,w(Ha,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,y=o(D,w(Ha,e,r,n,a,C),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,L=o(D,w(Ha,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:L};default:var B=t.a;return p(Ln,x(Il,e,r,n,a),i,B)}}),p1=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ol=p1,go=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),b1=function(e){var r=e.Z,n=e.W,a=e.V;return x(go,518,r,n,a)},g1=$(function(e,r){return{$:6,a:e,b:r}}),h1=g1,Jl=g([b1({V:1,W:0,Z:!1}),x(Ol,!1,!1,!1,!1),o(h1,0,1)]),ho=8,ql=15,Ir=7681,_1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},C1=$(function(e,r){return{$:0,a:e,b:r}}),y1=C1({df:1,$7:0,dV:5}),S1=y1(g([{bT:o(xr,-1,-1)},{bT:o(xr,1,-1)},{bT:o(xr,-1,1)},{bT:o(xr,1,1)}])),w1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},_o=function(e){return p(po,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Co=function(e){return w(fe,g([_o(e),x(Ol,!1,!1,!1,!1)]),w1,_1,S1,{})},L1=Co({a8:Ir,cp:0,cO:ho,bl:qr,c3:ql,bt:Ir,bu:Ir}),x1=516,Si=5386,T1=function(e){return o(Pn,2,e+4)},Zl=function(e){return Co({a8:pe,cp:ql,cO:ho,bl:x1,c3:T1(e),bt:Si,bu:Si})},P1=S(function(e,r,n){return Ue(g([p(Ge,e,n,Jl),g([Zl(r),L1])]))}),z1=$(function(e,r){return Ue(o(vc,P1(e),r))}),M1=function(e){var r=e.Z,n=e.W,a=e.V;return x(go,513,r,n,a)},k1=M1({V:1,W:0,Z:!0}),D1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},B1=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return D1(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},A1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),wi=$(function(e,r){var n=e,a=r;return p(A1,32774,n,a)}),F1=1,Li=771,U1=770,yo=B1({bv:0,aH:o(wi,F1,Li),by:0,bA:o(wi,U1,Li),bF:0,bV:0}),Vr=g([k1,yo]),xi=function(e){var r=e;return Kr(r)},R1=function(e){return e},E1=function(e){return en({cB:R1({fU:e.H,fY:e.I,c6:e.J}),c4:zr({fU:e.q,fY:e.r,c6:e.s}),c5:zr({fU:e.t,fY:e.u,c6:e.v}),c7:zr({fU:e.w,fY:e.x,c6:e.y})})},Ya=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Xl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Ql=$(function(e,r){return{cB:o(Xl,e,Kr(r)),c4:o(Ya,e,Fr(r)),c5:o(Ya,e,Ur(r)),c7:o(Ya,e,Rr(r))}}),V1=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),Ti=function(e){var r=e;return r},j1=$(function(e,r){var n=Ti(r),a=Ti(e);return{dO:o(qe,a.dO,n.dO),dP:o(qe,a.dP,n.dP),dQ:o(qe,a.dQ,n.dQ),dR:o(or,a.dR,n.dR),dS:o(or,a.dS,n.dS),dT:o(or,a.dT,n.dT)}}),N1=function(e){var r=e;return H(r.fU,r.fY,r.c6)},W1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=In(Fe(a)),c=In(Fe(n)),l=In(Fe(t)),u=N1(r),v=u.a,s=u.b,m=u.c;return{dO:o(bn,c,v),dP:o(bn,i,s),dQ:o(bn,l,m),dR:o(Yr,c,v),dS:o(Yr,i,s),dT:o(Yr,l,m)}}),Pi=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=ze(Rr(e)),d=Q(l*m.fU)+Q(c*m.fY)+Q(i*m.c6),f=ze(Ur(e)),h=Q(l*f.fU)+Q(c*f.fY)+Q(i*f.c6),b=ze(Fr(e)),C=Q(l*b.fU)+Q(c*b.fY)+Q(i*b.c6),y=o(W1,H(C,h,d),o(Xl,e,p(V1,s,v,u)));if(a.$)return ne(y);var _=a.a;return ne(o(j1,_,y))}),wt=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=x(Pi,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=x(Pi,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=x(wt,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(Ql,E1(v),e),d=r*v.bX,f=e,h=r,b=x(wt,m,d,n,g([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),G1={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},H1=function(e){var r=e;return r},zi=Co({a8:Ir,cp:0,cO:ho,bl:qr,c3:255,bt:Ir,bu:Ir}),Y1=function(e){var r=e,n=o(Je,Q(r.fU),o(Je,Q(r.fY),Q(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=Hr(i*i+t*t+a*a);return c*n}else return rr},_e={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},De=$(function(e,r){var n=e,a=r;return nr({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),fn=P({bd:o(De,_e,_e),bK:o(De,_e,_e),bL:o(De,_e,_e),bM:o(De,_e,_e)},x(on,0,0,0,0)),Kl=514,eu=function(e){var r=e.Z,n=e.W,a=e.V;return x(go,515,r,n,a)},ru=240,I1=g([eu({V:1,W:0,Z:!0}),_o({a8:pe,cp:ru,cO:0,bl:Kl,c3:0,bt:pe,bu:pe}),yo]),O1=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Fe(a),l=c,u=Fe(t),v=u,s=n.cM;if(s.$){var d=s.a;return at(v)?nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return at(v)?nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Nn=$(function(e,r){return(1&e>>r)===1?0:1}),J1=function(e){return g([eu({V:1,W:0,Z:!0}),_o({a8:pe,cp:ru,cO:e,bl:Kl,c3:0,bt:pe,bu:pe}),yo])},q1=S(function(e,r,n){return Ue(o(ce,function(a){var t=a<<4,i=x(on,o(Nn,a,0),o(Nn,a,1),o(Nn,a,2),o(Nn,a,3));return p(Ge,e,P(r,i),J1(t))},o(Or,1,o(Pn,2,n)-1)))}),Sn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Z1=_$,Mi=function(e){var r=e;return Sn(Rr(r))},X1={cB:fr,c4:io,c5:$o,c7:ya},Q1=function(e){var r=Mn(Kr(e)),n=ze(Rr(e)),a=ze(Ur(e)),t=ze(Fr(e));return nr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},K1=$(function(e,r){var n=r;return Q1(o(Ql,n,e))}),e3=function(e){return o(K1,X1,e)},r3=function(e){var r=e;return r.c2},n3=function(e){var r=e;return Fr(r)},a3=function(e){var r=e;return Ur(r)},t3=function(e){var r=r3(e.ev),n=en({cB:xi(r),c4:n3(r),c5:a3(r),c7:Sn(Mi(r))}),a=_a(e.aP),t=a,i=x(wt,n,1,q,g([t]));if(i.$===1)return T;var c=i.a,l=e3(r),u=o(Se,.99,o(qe,Fe(e.aJ),mt(ol(c)))),v=cl(c),s=v.a,m=v.b,d=v.c,f=Y1(p(el,s,m,d)),h=o(Se,1.01,o(bn,f,mt(il(c)))),b=o(O1,e.ev,{eq:e.eq,eP:h,fi:u}),C=Z1(b).dM,y=C?ze(Sn(Mi(r))):_t(xi(r)),_=function(){var ae=e.bZ;switch(ae.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var $e=ae.a;return P(3,$e);case 4:var $e=ae.a;return P(4,$e);default:return P(5,0)}}(),L=_.a,B=_.b,W=e.bD,E=W,R=o(bo,E,e.b$),j=R,G=nr({dx:0,dy:y.fU,dz:nn(j),dA:e.ec,dB:0,dC:y.fY,dD:an(j),dE:H1(f),dF:0,dG:y.c6,dH:tn(j),dI:L,dJ:0,dK:C,dL:0,dM:B}),U=Ce(Il,G,l,b,G1,t,{M:T,U:T,fB:T}),Z=e.bJ;switch(Z.$){case 0:var J=Z.a;return Ue(g([p(Ge,U.M,P(J,Ga),Vr),p(Ge,U.U,fn,Vr)]));case 1:var J=Z.a;return Ue(g([p(Ge,U.M,fn,Vr),g([zi]),p(Ge,U.fB,J.bd,Jl),g([Zl(0)]),p(Ge,U.M,P(J,Ga),I1),p(Ge,U.U,fn,Vr)]));default:var te=Z.a,ue=Z.b;return Ue(g([p(Ge,U.M,P(ue,Ga),Vr),g([zi]),o(z1,U.fB,te),p(q1,U.M,ue,Mr(te)),p(Ge,U.U,fn,Vr)]))}},o3=function(e){return o(yr,"width",Le(e))},i3=$(function(e,r){var n=g([a1(1),l1(0),Zp(!0),x(e1,0,0,0,0)]),a=function(){var L=e.b0;switch(L.$){case 0:return H(n,"0",1);case 1:return H(o(D,Qp,n),"1",1);default:var B=L.a;return H(n,"0",B)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=yi(v),m=o(K,"height",Le(s)+"px"),d=yi(u),f=d/s,h=o(r1,function(L){return t3({eq:f,ev:e.ev,aJ:e.aJ,aP:L.aP,bD:L.bD,bJ:L.bJ,ec:c,bZ:L.bZ,b$:L.b$})},r),b=o(K,"width",Le(d)+"px"),C=e.aI,y=C,_=v1(y);return p(i1,"div",g([o(K,"padding","0px"),b,m]),g([P(i,p($1,t,g([o3(Ne(d*c)),t1(Ne(s*c)),b,m,o(K,"display","block"),o(K,"background-color",_)]),h))]))}),c3=function(e){return o(i3,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},nu=function(e){return e},ki=nu({fU:.31271,fY:.32902}),l3=$(function(e,r){var n=e,a=ze(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(bo,r.ce,r.b6),u=l;return{by:tn(u),ex:n,bF:an(u),cK:0,bV:nn(u),c_:1,fU:-t,fY:-i,c6:-c}}),u3=function(e){return e},v3=function(e){return u3(1.2*o(Pn,2,e))},Ia=function(e){return e},$3={$:0},f3=$3,s3=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Di=function(e){var r=e;return r},m3=function(e){e:for(;;){if(br(e.e2,rr)&&br(e.e3,rr))return _e;if(o(s3,Fe(e.e2),Fe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Sn(e.ei)};e=r;continue e}else{var n=Q(Di(e.e3)/tr),a=Q(Di(e.e2)/tr),t=ze(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(bo,Cl(1),e.b6),v=u;return{by:a*tn(v),ex:!1,bF:a*an(v),cK:n/a,bV:a*nn(v),c_:3,fU:i,fY:c,c6:l}}}},Bi=function(e){return m3({b6:e.b6,e2:e.ce,e3:rr,ei:e.ei})},d3=function(e){var r=e;return r},au=function(e){var r=p(Wl,1667,25e3,d3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return nu({fU:n,fY:a})},tu=function(e){return e},p3=au(tu(12e3)),b3=au(tu(5600)),g3=function(e){return{$:2,a:e}},h3=function(e){return g3(e)},_3=$(function(e,r){return{$:2,a:e,b:r}}),ou=function(e){return{$:0,a:e}},Wn=function(e){var r=e;return r},C3=function(e){var r=e;return r.ex},y3=ou(fn.a),S3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(D,a,i),c):P(i,o(D,a,c))});return p(vr,n,P(T,T),r)}),w3=function(e){var r=e;return nr({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},L3=le(function(e,r,n,a,t,i,c,l){var u=o(S3,C3,g([Wn(e),Wn(r),Wn(n),Wn(a)])),v=u.a,s=u.b;if(v.b){var m=oe(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,C=b.a,y=b.b,_=y.a;return o(_3,o(ce,w3,v),{bd:o(De,d,h),bK:o(De,C,_),bL:o(De,t,i),bM:o(De,c,l)})}else return y3}else return ou({bd:o(De,e,r),bK:o(De,n,a),bL:o(De,t,i),bM:o(De,c,l)})}),x3=S(function(e,r,n){return Tt(L3,e,r,n,_e,_e,_e,_e,_e)}),T3=function(e){var r=o(l3,Jp(e.fB),{b6:b3,eH:e.fJ,ce:Ia(8e4)}),n=Bi({b6:p3,ce:Ia(2e4),ei:e.ei}),a=Bi({b6:ki,ce:Ia(15e3),ei:Sn(e.ei)}),t=p(x3,r,n,a);return c3({b0:h3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:v3(15),bJ:t,bZ:f3,b$:ki})},P3=$(function(e,r){return T3({aI:Ip(e.es),ev:e.ev,aJ:Op(.5),cb:e.cb,aK:P(Ci(Ne(e.cT.fS)),Ci(Ne(e.cT.eW))),aP:r,fB:!0,fJ:o(Yl,ir(e.fI),ir(e.fK)),ei:ya})}),z3=$(function(e,r){return o(P3,{es:p(Gp,46,46,46),ev:Wd(e),cb:e.cb,cT:e.cT,fI:-Gr(135),fK:-Gr(45)},g([Yp(e),Wp(e),bd]))}),M3=x(Vm,z3,Ym,Hm,jm);const k3={Main:{init:M3(o(k,function(e){return we({e1:e})},o(M,"inputs",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return we({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",ve))},o(M,"devicePixelRatio",ve))},o(M,"dt",ve))},o(M,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return we({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ta(Cn)))},o(M,"left",X))},o(M,"pressedKeys",ta(Cn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return we({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",ve))},o(M,"y",ve))))},o(M,"screen",o(k,function(r){return o(k,function(n){return we({eW:n,fS:r})},o(M,"height",ve))},o(M,"width",ve))))},o(M,"wheel",o(k,function(e){return o(k,function(r){return we({eE:r,eF:e})},o(M,"deltaX",ve))},o(M,"deltaY",ve)))))))(0)}},A={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},D3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(A.keyboard.downs.push(f.code),A.keyboard.pressedKeys.push(f.code),r(f)&&(A.keyboard.control=!0),n(f)&&(A.keyboard.alt=!0),a(f)&&(A.keyboard.shift=!0),t(f)&&(A.keyboard.left=!0),i(f)&&(A.keyboard.right=!0),c(f)&&(A.keyboard.up=!0),l(f)&&(A.keyboard.down=!0))}),window.addEventListener("keyup",f=>{A.keyboard.pressedKeys=A.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(A.keyboard.control=!1,A.keyboard.pressedKeys=[]),n(f)&&(A.keyboard.alt=!1),a(f)&&(A.keyboard.shift=!1),t(f)&&(A.keyboard.left=!1),i(f)&&(A.keyboard.right=!1),c(f)&&(A.keyboard.up=!1),l(f)&&(A.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{A.pointer.x=-.5*A.screen.width+f.pageX,A.pointer.y=.5*A.screen.height-f.pageY,u(f)&&(A.pointer.down=!0,A.pointer.isDown=!0),v(f)&&(A.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{A.pointer.move=!0,A.pointer.x=-.5*A.screen.width+f.pageX,A.pointer.y=.5*A.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(A.pointer.up=!0,A.pointer.isDown=!1),v(f)&&(A.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(A.pointer.up=!0,A.pointer.isDown=!1),v(f)&&(A.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{A.wheel.deltaX=f.deltaX,A.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(A)}),window.addEventListener("focus",f=>{s(A)}),window.addEventListener("visibilitychange",f=>{s(A)}),window.addEventListener("resize",()=>{A.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-A.clock;b<.009||(A.dt=b,A.clock=h,e.ports.tick.send(A),m(A)),window.requestAnimationFrame(d)}},B3=()=>{Oa("pointerdown"),Oa("wheel"),Oa("keydown")},Oa=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},A3=k3.Main.init({node:document.querySelector("#app div"),flags:{inputs:A}});B3();D3(A3);
