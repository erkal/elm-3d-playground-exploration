(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function gr(e,r,n){return n.a=e,n.f=r,n}function $(e){return gr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return gr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return gr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Le(e){return gr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ne(e){return gr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ht(e){return gr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function le(e){return gr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function _t(e){return gr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function me(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function $i(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ra(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function zl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Dl=[];function Al(e){return e.length}var Bl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Fl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),Rl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Vl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+El()),r});function El(e){return"<internals>"}function Or(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function xr(e,r){for(var n,a=[],t=Wa(e,r,0,a);t&&(n=a.pop());t=Wa(n.a,n.b,0,a));return t}function Wa(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Or(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=Po(e),r=Po(r));for(var t in e)if(!Wa(e[t],r[t],n+1,a))return!1;return!0}$(xr);$(function(e,r){return!xr(e,r)});function j(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=j(e.a,r.a))||(n=j(e.b,r.b))?n:j(e.c,r.c);for(;e.b&&r.b&&!(n=j(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return j(e,r)<0});$(function(e,r){return j(e,r)<1});$(function(e,r){return j(e,r)>0});$(function(e,r){return j(e,r)>=0});var Nl=$(function(e,r){var n=j(e,r);return n<0?Ei:n?L$:Vi}),vn=0;function k(e,r){return{a:e,b:r}}function U(e,r,n){return{a:e,b:r,c:n}}function ae(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(te);function te(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=er(e.a,r);return n}var T={$:0};function er(e,r){return{$:1,a:e,b:r}}var jl=$(er);function b(e){for(var r=T,n=e.length;n--;)r=er(e[n],r);return r}function na(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Wl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});Le(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return b(i)});Ne(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(w(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(na(r).sort(function(n,a){return j(e(n),e(a))}))});$(function(e,r){return b(na(r).sort(function(n,a){var t=o(e,n,a);return t===Vi?0:t===Ei?-1:1}))});var Gl=$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Il=$(Math.pow);$(function(e,r){return r%e});var Hl=$(function(e,r){var n=r%e;return e===0?Or(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ul=Math.PI,Ol=Math.cos,Jl=Math.sin,ql=Math.tan,Yl=Math.atan;$(Math.atan2);function Xl(e){return e}function Zl(e){return e===1/0||e===-1/0}var Ql=Math.ceil,Kl=Math.floor,eu=Math.round,ru=Math.sqrt,so=Math.log,nu=isNaN;function au(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var tu=$(function(e,r){return e+r});function ou(e){var r=e.charCodeAt(0);return isNaN(r)?G:Z(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function iu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function cu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var lu=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),uu=$(function(e,r){return r.split(e)}),vu=$(function(e,r){return r.join(e)}),$u=y(function(e,r,n){return n.slice(e,r)});function fu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var su=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),du=$(function(e,r){return r.indexOf(e)>-1}),mu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var pu=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function fi(e){return e+""}function bu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return G;r=10*r+i-48}return t==a?G:Z(n==45?-r:r)}function gu(e){if(e.length===0||/[\sxbo]/.test(e))return G;var r=+e;return r===r?Z(r):G}function hu(e){return na(e).join("")}function _u(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Cu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function yu(e){return{$:0,a:e}}function Ct(e){return{$:2,b:e}}var Su=Ct(function(e){return typeof e=="boolean"?oe(e):Xe("a BOOL",e)}),wu=Ct(function(e){return typeof e=="number"?oe(e):Xe("a FLOAT",e)}),Lu=Ct(function(e){return typeof e=="string"?oe(e):e instanceof String?oe(e+""):Xe("a STRING",e)});function Tu(e){return{$:3,b:e}}var xu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function hr(e,r){return{$:9,f:e,g:r}}var Pu=$(function(e,r){return{$:10,b:r,h:e}}),Mu=$(function(e,r){return hr(e,[r])}),ku=y(function(e,r,n){return hr(e,[r,n])});B(function(e,r,n,a){return hr(e,[r,n,a])});Le(function(e,r,n,a,t){return hr(e,[r,n,a,t])});Ne(function(e,r,n,a,t,i){return hr(e,[r,n,a,t,i])});ht(function(e,r,n,a,t,i,c){return hr(e,[r,n,a,t,i,c])});le(function(e,r,n,a,t,i,c,l){return hr(e,[r,n,a,t,i,c,l])});_t(function(e,r,n,a,t,i,c,l,u){return hr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return pe(o(At,"This is not valid JSON! "+a.message,r))}});var si=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?oe(e.c):Xe("null",r);case 3:return hn(r)?mo(e.b,r,b):Xe("a LIST",r);case 4:return hn(r)?mo(e.b,r,zu):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return Ie(v)?v:pe(o(Mo,n,v.a));case 7:var a=e.e;if(!hn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return Ie(v)?v:pe(o(Ni,a,v.a));case 8:if(typeof r!="object"||r===null||hn(r))return Xe("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!Ie(v))return pe(o(Mo,i,v.a));t=er(k(i,v.a),t)}return oe(Se(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!Ie(v))return v;c=c(v.a)}return oe(c);case 10:var v=Re(e.b,r);return Ie(v)?Re(e.h(v.a),r):v;case 11:for(var s=T,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(Ie(v))return v;s=er(v.a,s)}return pe(T$(Se(s)));case 1:return pe(o(At,e.a,r));case 0:return oe(e.a)}}function mo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!Ie(c))return pe(o(Ni,i,c.a));t[i]=c.a}return oe(n(t))}function hn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function zu(e){return o(U$,e.length,function(r){return e[r]})}function Xe(e,r){return pe(o(At,"Expecting "+e,r))}function Rr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Rr(e.b,r.b);case 6:return e.d===r.d&&Rr(e.b,r.b);case 7:return e.e===r.e&&Rr(e.b,r.b);case 9:return e.f===r.f&&po(e.g,r.g);case 10:return e.h===r.h&&Rr(e.b,r.b);case 11:return po(e.g,r.g)}}function po(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Rr(e[a],r[a]))return!1;return!0}var Du=$(function(e,r){return JSON.stringify(r,null,e)+""});function di(e){return e}y(function(e,r,n){return n[e]=r,n});function Mr(e){return{$:0,a:e}}function Au(e){return{$:1,a:e}}function vr(e){return{$:2,b:e,c:null}}var Ga=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Bu(e){return{$:5,b:e}}var Fu=0;function yt(e){var r={$:0,e:Fu++,f:e,g:null,h:[]};return St(r),r}function mi(e){return vr(function(r){r(Mr(yt(e)))})}function pi(e,r){e.h.push(r),St(e)}var Ru=$(function(e,r){return vr(function(n){pi(e,r),n(Mr(vn))})}),ba=!1,bo=[];function St(e){if(bo.push(e),!ba){for(ba=!0;e=bo.shift();)Vu(e);ba=!1}}function Vu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,St(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return wt(r,a,e.fi,e.f0,e.fV,function(){return function(){}})});function wt(e,r,n,a,t,i){var c=o(si,e,r?r.flags:void 0);Ie(c)||Or(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Eu(l,m);function m(f,h){var g=o(a,f,v);s(v=g.a,h),ho(l,g.b,t(v))}return ho(l,u.b,t(v)),d?{ports:d}:{}}var Qe={};function Eu(e,r){var n;for(var a in Qe){var t=Qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=ju(t,r)}return n}function Nu(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function ju(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ga,l,Bu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=yt(o(Ga,l,e.b))}var Wu=$(function(e,r){return vr(function(n){e.g(r),n(Mr(vn))})});$(function(e,r){return o(Ru,e.h,{$:0,a:r})});function bi(e){return function(r){return{$:1,k:e,l:r}}}function Gu(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var go=[],ga=!1;function ho(e,r,n){if(go.push({p:e,q:r,r:n}),!ga){ga=!0;for(var a;a=go.shift();)Iu(a.p,a.q,a.r);ga=!1}}function Iu(e,r,n){var a={};Rn(!0,r,a,null),Rn(!1,n,a,null);for(var t in e)pi(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Rn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Hu(e,t,a,r.l);n[t]=Uu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Rn(e,c.a,n,a);return;case 3:Rn(e,r.o,n,{s:r.n,t:a});return}}function Hu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Qe[r].e:Qe[r].f;return o(i,t,a)}function Uu(e,r,n){return n=n||{i:T,j:T},e?n.i=er(r,n.i):n.j=er(r,n.j),n}function Ou(e){Qe[e]&&Or(3)}$(function(e,r){return r});function Ju(e,r){return Ou(e),Qe[e]={f:qu,u:r,a:Yu},bi(e)}var qu=$(function(e,r){return function(n){return e(r(n))}});function Yu(e,r){var n=T,a=Qe[e].u,t=Mr(null);Qe[e].b=t,Qe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(si,a,c);Ie(l)||Or(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Vn,cr=typeof document<"u"?document:{};function Lt(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(sr(e,function(){}),t),{}});function Ia(e){return{$:0,a:e}}var gi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Tt(n),e:t,f:e,b:i}})}),kr=gi(void 0),Xu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Tt(n),e:t,f:e,b:i}})}),Zu=Xu(void 0);function Qu(e,r,n,a){return{$:3,d:Tt(e),g:r,h:n,i:a}}var Ku=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function _r(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return _r([e,r],function(){return e(r)})});y(function(e,r,n){return _r([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return _r([e,r,n,a],function(){return p(e,r,n,a)})});Le(function(e,r,n,a,t){return _r([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ne(function(e,r,n,a,t,i){return _r([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});ht(function(e,r,n,a,t,i,c){return _r([e,r,n,a,t,i,c],function(){return me(e,r,n,a,t,i,c)})});le(function(e,r,n,a,t,i,c,l){return _r([e,r,n,a,t,i,c,l],function(){return $i(e,r,n,a,t,i,c,l)})});_t(function(e,r,n,a,t,i,c,l,u){return _r([e,r,n,a,t,i,c,l,u],function(){return ra(e,r,n,a,t,i,c,l,u)})});var hi=$(function(e,r){return{$:"a0",n:e,o:r}}),ev=$(function(e,r){return{$:"a1",n:e,o:r}}),_i=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),rv=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function nv(e){return e=="script"?"p":e}function av(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(hi,r.n,tv(e,r.o)):r});function tv(e,r){var n=Vt(r);return{$:r.$,a:n?p(O$,n<3?ov:iv,xe(e),r.a):o(Wn,e,r.a)}}var ov=$(function(e,r){return k(e(r.a),r.b)}),iv=$(function(e,r){return{an:e(r.an),c3:r.c3,cT:r.cT}});function Tt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?_o(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?_o(c,t,i):c[t]=i}return r}function _o(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function sr(e,r){var n=e.$;if(n===5)return sr(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=sr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ha(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);Vn&&e.c=="a"&&c.addEventListener("click",Vn(c)),Ha(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Lt(c,sr(n===1?l[u]:l[u].b,r));return c}function Ha(e,r,n){for(var a in n){var t=n[a];a==="a1"?cv(e,t):a==="a0"?vv(e,r,t):a==="a3"?lv(e,t):a==="a4"?uv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function cv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function lv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function uv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function vv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=$v(r,i),e.addEventListener(t,c,xt&&{passive:Vt(i)<2}),a[t]=c}}var xt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xt=!0}}))}catch{}function $v(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!Ie(i)){for(var c=Vt(t),l=i.a,u=c?c<3?l.a:l.an:l,v=c==1?l.b:c==3&&l.c3,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cT)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function fv(e,r){return e.$==r.$&&Rr(e.a,r.a)}function Ci(e,r){var n=[];return He(e,r,n,0),n}function se(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function He(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=_v(r),i=1;else{se(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];He(e.k,r.k,s,0),s.length>0&&se(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){se(n,0,a,r);return}(f?!sv(d,m):d!==m)&&se(n,2,a,m),He(h,g,n,a+1);return;case 0:e.a!==r.a&&se(n,3,a,r.a);return;case 1:Co(e,r,n,a,dv);return;case 2:Co(e,r,n,a,mv);return;case 3:if(e.h!==r.h){se(n,0,a,r);return}var C=Pt(e.d,r.d);C&&se(n,4,a,C);var S=r.i(e.g,r.g);S&&se(n,5,a,S);return}}}function sv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Co(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){se(n,0,a,r);return}var i=Pt(e.d,r.d);i&&se(n,4,a,i),t(e,r,n,a)}function Pt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Pt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&fv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function dv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?se(n,6,a,{v:l,i:c-l}):c<l&&se(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];He(s,i[v],n,++a),a+=s.b||0}}function mv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],g=u[m],C=h.a,S=g.a,_=h.b,x=g.b,F=void 0,Y=void 0;if(C===S){f++,He(_,x,t,f),f+=_.b||0,d++,m++;continue}var O=l[d+1],H=u[m+1];if(O){var X=O.a,J=O.b;Y=S===X}if(H){var I=H.a,K=H.b;F=C===I}if(F&&Y){f++,He(_,K,t,f),Xr(i,t,C,x,m,c),f+=_.b||0,f++,Zr(i,t,C,J,f),f+=J.b||0,d+=2,m+=2;continue}if(F){f++,Xr(i,t,S,x,m,c),He(_,K,t,f),f+=_.b||0,d+=1,m+=2;continue}if(Y){f++,Zr(i,t,C,_,f),f+=_.b||0,f++,He(J,x,t,f),f+=J.b||0,d+=2,m+=1;continue}if(O&&X===I){f++,Zr(i,t,C,_,f),Xr(i,t,S,x,m,c),f+=_.b||0,f++,He(J,K,t,f),f+=J.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;Zr(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var ee=ee||[],g=u[m];Xr(i,t,g.a,g.b,void 0,ee),m++}(t.length>0||c.length>0||ee)&&se(n,8,a,{w:t,x:c,y:ee})}var yi="_elmW6BL";function Xr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];He(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Xr(e,r,n+yi,a,t,i)}function Zr(e,r,n,a,t){var i=e[n];if(!i){var c=se(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];He(a,i.z,l,t),se(r,9,t,{w:l,A:i});return}Zr(e,r,n+yi,a,t)}function Si(e,r,n,a){Qr(e,r,n,0,0,r.b,a)}function Qr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Si(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Qr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Qr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return Qr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,C=0;C<h.length;C++){t++;var S=m===1?h[C]:h[C].b,_=t+(S.b||0);if(t<=u&&u<=_&&(a=Qr(g[C],S,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function wi(e,r,n,a){return n.length===0?e:(Si(e,r,n,a),En(e,n))}function En(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=pv(t,a);t===e&&(e=i)}return e}function pv(e,r){switch(r.$){case 0:return bv(e,r.s,r.u);case 4:return Ha(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return En(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(sr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=En(e,i.w),e;case 8:return gv(e,r);case 5:return r.s(e);default:Or(10)}}function bv(e,r,n){var a=e.parentNode,t=sr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function gv(e,r){var n=r.s,a=hv(n.y,r);e=En(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:sr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Lt(e,a),e}function hv(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Lt(n,i.c===2?i.s:sr(i.z,r.u))}return n}}function Mt(e){if(e.nodeType===3)return Ia(e.textContent);if(e.nodeType!==1)return Ia("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=er(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=er(Mt(v[a]),u);return p(kr,l,r,u)}function _v(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Cv=B(function(e,r,n,a){return wt(r,a,e.fi,e.f0,e.fV,function(t,i){var c=e.f2,l=a.node,u=Mt(l);return Li(i,function(v){var s=c(v),d=Ci(u,s);l=wi(l,u,d,t),u=s})})});B(function(e,r,n,a){return wt(r,a,e.fi,e.f0,e.fV,function(t,i){var c=e.c0&&e.c0(t),l=e.f2,u=cr.title,v=cr.body,s=Mt(v);return Li(i,function(d){Vn=c;var m=l(d),f=kr("body")(T)(m.eM),h=Ci(s,f);v=wi(v,s,h,t),s=f,Vn=0,u!==m.fZ&&(cr.title=u=m.fZ)})})});var Nn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Li(e,r){r(e);var n=0;function a(){n=n===1?0:(Nn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Nn(a),n=2)}}$(function(e,r){return o(jt,Et,vr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(jt,Et,vr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(jt,Et,vr(function(){history.replaceState({},"",r),e()}))});var yv={addEventListener:function(){},removeEventListener:function(){}},Sv=typeof window<"u"?window:yv;y(function(e,r,n){return mi(vr(function(a){function t(i){yt(n(i))}return e.addEventListener(r,t,xt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return Ie(n)?Z(n.a):G});function Ti(e,r){return vr(function(n){Nn(function(){var a=document.getElementById(e);n(a?Mr(r(a)):Au(q$(e)))})})}function wv(e){return vr(function(r){Nn(function(){r(Mr(e()))})})}$(function(e,r){return Ti(r,function(n){return n[e](),vn})});$(function(e,r){return wv(function(){return Sv.scroll(e,r),vn})});y(function(e,r,n){return Ti(e,function(a){return a.scrollLeft=r,a.scrollTop=n,vn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Lv=$(function(e,r){var n="g";e.fv&&(n+="m"),e.eO&&(n+="i");try{return Z(new RegExp(r,n))}catch{return G}});$(function(e,r){return r.match(e)!==null});var Tv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?Z(d):G}a.push(L(Cc,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Z(v):G}return n(L(Cc,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var xv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Pv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Pv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var kt=new Float64Array(3),yo=new Float64Array(3),So=new Float64Array(3),Mv=y(function(e,r,n){return new Float64Array([e,r,n])}),kv=function(e){return e[0]},zv=function(e){return e[1]},Dv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Av=function(e){return new Float64Array([e.f6,e.ga,e.de])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(xi);function Pi(e,r,n){return n===void 0&&(n=new Float64Array(3)),jn(xi(e,r,n),n)}$(Pi);function Mi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function jn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Mi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Bv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Kr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Kr);function Ua(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ua);$(function(e,r){var n,a=kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Kr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Kr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Kr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Kr(r,a)+e[14])/n,t});var Fv=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Rv=function(e){return{f6:e[0],ga:e[1],de:e[2],eE:e[3]}},Vv=function(e){return new Float64Array([e.f6,e.ga,e.de,e.eE])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Ev(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Ev(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Nv=new Float64Array(16),jv=new Float64Array(16),Wv=function(e){var r=new Float64Array(16);return r[0]=e.dM,r[1]=e.dQ,r[2]=e.dU,r[3]=e.dY,r[4]=e.dN,r[5]=e.dR,r[6]=e.dV,r[7]=e.dZ,r[8]=e.dO,r[9]=e.dS,r[10]=e.dW,r[11]=e.d_,r[12]=e.dP,r[13]=e.dT,r[14]=e.dX,r[15]=e.d$,r},Gv=function(e){return{dM:e[0],dQ:e[1],dU:e[2],dY:e[3],dN:e[4],dR:e[5],dV:e[6],dZ:e[7],dO:e[8],dS:e[9],dW:e[10],d_:e[11],dP:e[12],dT:e[13],dX:e[14],d$:e[15]}};function ki(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ne(ki);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return ki(c,l,i,t,n,a)});function zi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ne(zi);B(function(e,r,n,a){return zi(e,r,n,a,-1,1)});function Di(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],g=e[12],C=e[13],S=e[14],_=e[15],x=r[0],F=r[1],Y=r[2],O=r[3],H=r[4],X=r[5],J=r[6],I=r[7],K=r[8],ee=r[9],ge=r[10],he=r[11],$e=r[12],fe=r[13],We=r[14],Ge=r[15];return n[0]=a*x+l*F+d*Y+g*O,n[1]=t*x+u*F+m*Y+C*O,n[2]=i*x+v*F+f*Y+S*O,n[3]=c*x+s*F+h*Y+_*O,n[4]=a*H+l*X+d*J+g*I,n[5]=t*H+u*X+m*J+C*I,n[6]=i*H+v*X+f*J+S*I,n[7]=c*H+s*X+h*J+_*I,n[8]=a*K+l*ee+d*ge+g*he,n[9]=t*K+u*ee+m*ge+C*he,n[10]=i*K+v*ee+f*ge+S*he,n[11]=c*K+s*ee+h*ge+_*he,n[12]=a*$e+l*fe+d*We+g*Ge,n[13]=t*$e+u*fe+m*We+C*Ge,n[14]=i*$e+v*fe+f*We+S*Ge,n[15]=c*$e+s*fe+h*We+_*Ge,n}$(Di);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],g=r[0],C=r[1],S=r[2],_=r[4],x=r[5],F=r[6],Y=r[8],O=r[9],H=r[10],X=r[12],J=r[13],I=r[14];return n[0]=a*g+c*C+v*S,n[1]=t*g+l*C+s*S,n[2]=i*g+u*C+d*S,n[3]=0,n[4]=a*_+c*x+v*F,n[5]=t*_+l*x+s*F,n[6]=i*_+u*x+d*F,n[7]=0,n[8]=a*Y+c*O+v*H,n[9]=t*Y+l*O+s*H,n[10]=i*Y+u*O+d*H,n[11]=0,n[12]=a*X+c*J+v*I+m,n[13]=t*X+l*J+s*I+f,n[14]=i*X+u*J+d*I+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=jn(r,kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Mi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,g=i*l*v,C=c*l*v,S=i*i*v+u,_=h+f,x=g-m,F=h-f,Y=c*c*v+u,O=C+d,H=g+m,X=C-d,J=l*l*v+u,I=n[0],K=n[1],ee=n[2],ge=n[3],he=n[4],$e=n[5],fe=n[6],We=n[7],Ge=n[8],zr=n[9],Dr=n[10],pa=n[11],xl=n[12],Pl=n[13],Ml=n[14],kl=n[15];return a[0]=I*S+he*_+Ge*x,a[1]=K*S+$e*_+zr*x,a[2]=ee*S+fe*_+Dr*x,a[3]=ge*S+We*_+pa*x,a[4]=I*F+he*Y+Ge*O,a[5]=K*F+$e*Y+zr*O,a[6]=ee*F+fe*Y+Dr*O,a[7]=ge*F+We*Y+pa*O,a[8]=I*H+he*X+Ge*J,a[9]=K*H+$e*X+zr*J,a[10]=ee*H+fe*X+Dr*J,a[11]=ge*H+We*X+pa*J,a[12]=xl,a[13]=Pl,a[14]=Ml,a[15]=kl,a});function Iv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Iv);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Hv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Hv);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],g=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=g,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],g=r[9],C=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=g,n[10]=C,n[11]=S,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+C*i+r[14],n[15]=v*a+f*t+S*i+r[15],n});y(function(e,r,n){var a=Pi(e,r,kt),t=jn(Ua(n,a,yo),yo),i=jn(Ua(a,t,So),So),c=Nv,l=jv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Di(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var wo=0;function tn(e,r){for(;r.b;r=r.b)e(r.a)}function zt(e){for(var r=0;e.b;e=e.b)r++;return r}var Uv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Ov=Le(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Jv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),qv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Yv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Xv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Zv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Qv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Kv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),e$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),r$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},n$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},a$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},t$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ai=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Bi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},o$=function(e){e.gl.disable(e.gl.CULL_FACE)},i$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},c$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},l$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Lo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],u$=[n$,a$,t$,Ai,Bi,o$,i$,c$,l$];function To(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function v$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Fi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function $$(e,r,n,a){for(var t=n.a.dq,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,C,S){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?C[S]:C[S][_];else i.forEach(function(x){for(_=0;_<h;_++)f[g++]=h===1?C[x][S]:C[x][S][_]})}var u=Fi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(zt(n.b)*s);tn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function f$(e,r){if(r.a.dA>0){var n=e.createBuffer(),a=s$(r.c,r.a.dA);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dq*zt(r.b),indexBuffer:null,buffers:{}}}function s$(e,r){var n=new Uint32Array(zt(e)*r),a=0,t;return tn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function xo(e,r){return e+"#"+r}var Ri=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ai(n),Bi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=xo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=wo++,v||(v=To(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=wo++,s||(s=To(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=v$(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=d$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=xo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),m$(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=f$(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=$$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var C=Fi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var S=C.size*4,_=S*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(h+x),a.vertexAttribPointer(h+x,C.size,C.baseType,!1,_,S*x)}for(n.toggle=!n.toggle,tn(_0(n),i.a),u=0;u<Lo.length;u++){var F=n[Lo[u]];F.toggle!==n.toggle&&F.enabled&&(u$[u](n),F.enabled=!1,F.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.d8,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d8,0,g.numIndices)}}return tn(t,e.g),r});function d$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,C=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(C,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(C,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var S=c++;return function(_){e.activeTexture(e.TEXTURE0+S);var x=l.textures.get(_);x||(x=_.eV(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[g]!==_&&(e.uniform1i(C,S),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function m$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var p$=y(function(e,r,n){return Qu(r,{g:n,f:{},h:e},S$,w$)}),b$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),g$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),h$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),_$=$(function(e,r){e.contextAttributes.antialias=!0}),C$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),y$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function S$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};tn(function(t){return o(h0,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Uv(function(){return o(Ri,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function w$(e,r){return r.f=e.f,Ri(r)}var A=jl,_n=Vl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(_n,e,l,v)}else{var u=c.a;return p(_n,i,l,u)}});return p(_n,i,p(_n,e,r,t),a)});var Dt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Dt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Po=function(e){return p(Dt,y(function(r,n,a){return o(A,k(r,n),a)}),T,e)},Vi=1,L$=2,Ei=0,pe=function(e){return{$:1,a:e}},At=$(function(e,r){return{$:3,a:e,b:r}}),Mo=$(function(e,r){return{$:0,a:e,b:r}}),Ni=$(function(e,r){return{$:1,a:e,b:r}}),oe=function(e){return{$:0,a:e}},T$=function(e){return{$:2,a:e}},x$=Gl,Z=function(e){return{$:0,a:e}},G={$:1},P$=su,M$=Du,Pe=fi,Sr=$(function(e,r){return o(vu,e,na(r))}),Bt=$(function(e,r){return b(o(uu,e,r))}),ji=function(e){return o(Sr,`
    `,o(Bt,`
`,e))},$n=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),br=function(e){return p($n,$(function(r,n){return n+1}),0,e)},k$=Wl,z$=y(function(e,r,n){e:for(;;)if(j(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),aa=$(function(e,r){return p(z$,e,r,T)}),Wi=$(function(e,r){return p(k$,e,o(aa,0,br(r)-1),r)}),Ke=_u,Gi=function(e){var r=Ke(e);return 97<=r&&r<=122},Ii=function(e){var r=Ke(e);return r<=90&&65<=r},D$=function(e){return Gi(e)||Ii(e)},A$=function(e){var r=Ke(e);return r<=57&&48<=r},B$=function(e){return Gi(e)||Ii(e)||A$(e)},Se=function(e){return p($n,A,T,e)},Jr=ou,F$=$(function(e,r){return`

(`+(Pe(e+1)+(") "+ji(R$(r))))}),R$=function(e){return o(V$,e,T)},V$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=Jr(n);if(g.$===1)return!1;var C=g.a,S=C.a,_=C.b;return D$(S)&&o(P$,B$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Sr,"",Se(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Pe(br(s))+" ways:"));return o(Sr,`

`,o(A,h,o(Wi,F$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Sr,"",Se(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Sr,"",Se(r))+`:

    `):`Problem with the given value:

`}();return h+(ji(o(M$,4,f))+(`

`+m))}}),Me=32,Oa=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ja=Dl,Hi=Ql,Ft=$(function(e,r){return so(r)/so(e)}),E$=Xl,on=Hi(o(Ft,2,Me)),Ui=L(Oa,0,on,Ja,Ja),Oi=Bl,Ji=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var N$=Kl,qa=Al,Ue=$(function(e,r){return j(e,r)>0?e:r}),j$=function(e){return{$:0,a:e}},Rt=Fl,W$=$(function(e,r){e:for(;;){var n=o(Rt,Me,e),a=n.a,t=n.b,i=o(A,j$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Se(i)}}),G$=function(e){var r=e.a;return r},I$=$(function(e,r){e:for(;;){var n=Hi(r/Me);if(n===1)return o(Rt,Me,e).a;var a=o(W$,e,T),t=n;e=a,r=t;continue e}}),qi=$(function(e,r){if(r.l){var n=r.l*Me,a=N$(o(Ft,Me,n-1)),t=e?Se(r.y):r.y,i=o(I$,t,r.l);return L(Oa,qa(r.o)+n,o(Ue,5,a*on),i,r.o)}else return L(Oa,qa(r.o),on,Ja,r.o)}),H$=Le(function(e,r,n,a,t){e:for(;;){if(r<0)return o(qi,!1,{y:a,l:n/Me|0,o:t});var i=Ji(p(Oi,Me,r,e)),c=e,l=r-Me,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),U$=$(function(e,r){if(e<=0)return Ui;var n=e%Me,a=p(Oi,n,e-n,r),t=e-n-Me;return w(H$,r,t,e,T,a)}),Ie=function(e){return!e.$},M=Pu,q=Su,P=xu,ie=wu,Wn=Mu,O$=ku,xe=yu,Vt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},W=kr("div"),J$=function(e){return{$:2,a:e}},Yi=$(function(e,r){return e}),Xi=$(function(e,r){return{eS:r.eS,eT:e,ci:r.ci,dp:r.dp,dE:r.dE,bn:r.bn,b3:r.b3,f3:r.f3}}),dr=function(e){return e},q$=dr,ko=Ne(function(e,r,n,a,t,i){return{dw:i,dy:r,ec:a,eg:n,ej:e,ek:t}}),Y$=du,wr=iu,Vr=$u,fn=$(function(e,r){return e<1?r:p(Vr,e,wr(r),r)}),ta=pu,oa=function(e){return e===""},ia=$(function(e,r){return e<1?"":p(Vr,0,e,r)}),Zi=bu,zo=Le(function(e,r,n,a,t){if(oa(t)||o(Y$,"@",t))return G;var i=o(ta,":",t);if(i.b){if(i.b.b)return G;var c=i.a,l=Zi(o(fn,c+1,t));if(l.$===1)return G;var u=l;return Z(me(ko,e,o(ia,c,t),u,r,n,a))}else return Z(me(ko,e,t,G,r,n,a))}),Do=B(function(e,r,n,a){if(oa(a))return G;var t=o(ta,"/",a);if(t.b){var i=t.a;return w(zo,e,o(fn,i,a),r,n,o(ia,i,a))}else return w(zo,e,"/",r,n,a)}),Ao=y(function(e,r,n){if(oa(n))return G;var a=o(ta,"?",n);if(a.b){var t=a.a;return L(Do,e,Z(o(fn,t+1,n)),r,o(ia,t,n))}else return L(Do,e,G,r,n)});$(function(e,r){if(oa(r))return G;var n=o(ta,"#",r);if(n.b){var a=n.a;return p(Ao,e,Z(o(fn,a+1,r)),o(ia,a,r))}else return p(Ao,e,G,r)});var X$=mu,Et=function(e){},sn=Mr,Z$=sn(0),Qi=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p($n,e,r,Se(d)):L(Qi,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),$r=y(function(e,r,n){return L(Qi,e,r,0,n)}),ce=$(function(e,r){return p($r,$(function(n,a){return o(A,e(n),a)}),T,r)}),Gn=Ga,Nt=$(function(e,r){return o(Gn,function(n){return sn(e(n))},r)}),Q$=y(function(e,r,n){return o(Gn,function(a){return o(Gn,function(t){return sn(o(e,a,t))},n)},r)}),K$=function(e){return p($r,Q$(A),sn(T),e)},ef=Wu,rf=$(function(e,r){var n=r;return mi(o(Gn,ef(e),n))}),nf=y(function(e,r,n){return o(Nt,function(a){return 0},K$(o(ce,rf(e),r)))}),af=y(function(e,r,n){return sn(0)}),tf=$(function(e,r){var n=r;return o(Nt,e,n)});Qe.Task=Nu(Z$,nf,af,tf);var of=bi("Task"),jt=$(function(e,r){return of(o(Nt,e,r))}),cf=Cv,lf=au,In={$:1},Ki=function(e){return{$:2,a:e}},ca={$:0},Ve=$(function(e,r){return{$:0,a:e,b:r}}),re=y(function(e,r,n){return r(e(n))}),qr=function(e){var r=e.b.A;return r.a},uf=function(e){var r=e.a,n=e.b.T,a=e.b.A,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return Z(o(Ve,r,{A:i,ac:c,T:o(A,a,n)}))}else return G},ec=function(e){var r=e.b;return o(Ve,ca,r)},ze=$(function(e,r){if(r.$)return e;var n=r.a;return n}),vf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bn.$7?ec(n):n;case 2:var i=a.a.c4;return(j(i+r.dp,qr(n).eS)>0?o(re,uf,ze(o(Ve,In,t))):dr)(o(Ve,Ki({c4:i+r.dp}),t));default:var c=t.A,l=c.a,u=c.b,v=o(Xi,l.eT,ae(r,{eS:l.eS+r.dp})),s=o(e,v,u);return o(Ve,ca,{A:k(v,s),ac:T,T:o(A,t.A,t.T)})}}),rc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),$f=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ff=$(function(e,r){return Se(p($f,e,r,T))}),nc=y(function(e,r,n){if(r<=0)return T;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,g=h.a,C=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,g,o(ff,r-4,C))))):o(A,_,o(A,c,o(A,s,o(A,g,p(nc,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return b([_])}}),Wt=$(function(e,r){return p(nc,0,e,r)}),sf=$(function(e,r){var n=r.b.T,a=r.b.A,t=r.b.ac,i=te(Se(n),te(b([a]),t)),c=o(Wt,e,i),l=o(rc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ve,In,{A:u,ac:v,T:Se(c)})}else{var s=Se(c);if(s.b){var d=s.a,m=s.b;return o(Ve,In,{A:d,ac:T,T:m})}else return r}}),df=function(e){var r=e.b;return o(Ve,In,r)},mf=function(e){var r=e.b;return o(Ve,Ki({c4:qr(e).eS}),r)},pf=$(function(e,r){switch(e.$){case 1:return df(r);case 2:return ec(r);case 3:return mf(r);default:var n=e.a;return o(sf,n,r)}}),ac=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),bf=$(function(e,r){return ae(r,{ax:e(r.ax)})}),gf=function(e){return{$:3,a:e}},hf=function(e){return{$:2,a:e}},_f=$(function(e,r){return{$:0,a:e,b:r}}),Cf=$(function(e,r){return{$:1,a:e,b:r}}),ve=$(function(e,r){if(r.$)return G;var n=r.a;return Z(e(n))}),N=function(e){return e<0?-e:e},Gt=gu,yf=y(function(e,r,n){return o(ze,0/0,Gt(o(e,r,n)))}),tc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Sf=lu,oc=function(e){return p(Sf,A,T,e)},wf=$(function(e,r){var n=o(tc,function(a){return a!=="0"&&a!=="."},oc(r));return te(e&&n?"-":"",r)}),ne=fi,Ya=tu,ic=Cu,cc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Jr(n);if(a.$===1)return"01";var t=a.a;return o(Ya,"0",cc(t))}else{var i=Ke(r);return i>=48&&i<57?o(Ya,ic(i+1),n):"0"}},Xa=Zl,Lf=nu,la=function(e){return o(Ya,e,"")},lc=y(function(e,r,n){return e<=0?n:p(lc,e>>1,te(r,r),e&1?te(n,r):n)}),cn=$(function(e,r){return p(lc,e,r,"")}),Za=y(function(e,r,n){return te(n,o(cn,e-wr(n),la(r)))}),Qa=cu,uc=function(e){var r=o(Bt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Tf=function(e){var r=o(Bt,"e",ne(N(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ze,0,Zi(o(X$,"+",t)?o(fn,1,t):t)),c=uc(n),l=c.a,u=c.b,v=te(l,u),s=i<0?o(ze,"0",o(ve,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ve,ac(la),Jr(te(o(cn,N(i),"0"),v))))):p(Za,i+1,"0",v);return te(e<0?"-":"",s)}else{var n=r.a;return te(e<0?"-":"",n)}else return""},xf=y(function(e,r,n){if(Xa(n)||Lf(n))return ne(n);var a=n<0,t=uc(Tf(N(n))),i=t.a,c=t.b,l=wr(i)+r,u=te(o(cn,-l+1,"0"),p(Za,l,"0",te(i,c))),v=wr(u),s=o(Ue,1,l),d=o(e,a,p(Vr,s,v,u)),m=p(Vr,0,s,u),f=d?Qa(o(ze,"1",o(ve,cc,Jr(Qa(m))))):m,h=wr(f),g=f==="0"?f:r<=0?te(f,o(cn,N(r),"0")):j(r,wr(c))<0?p(Vr,0,h-r,f)+("."+p(Vr,h-r,h,f)):te(i+".",p(Za,r,"0",c));return o(wf,a,g)}),vc=xf($(function(e,r){var n=Jr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ke(t))})),Pf=yf(vc),Mf=y(function(e,r,n){var a=o(Ft,10,N(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Pf,t,n)}),$c=Nl,fc=$(function(e,r){e:for(;;){if(r.$===-2)return G;var n=r.b,a=r.c,t=r.d,i=r.e,c=o($c,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return Z(a);default:var l=e,u=i;e=l,r=u;continue e}}}),R=Le(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),rr={$:-2},Ir=Le(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return w(R,0,r,n,w(R,1,v,s,d,m),w(R,1,i,c,l,u))}else return w(R,e,i,c,w(R,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,C=f.d,S=f.e,m=a.e;return w(R,0,v,s,w(R,1,h,g,C,S),w(R,1,r,n,m,t))}else return w(R,e,r,n,a,t)}),Ka=y(function(e,r,n){if(n.$===-2)return w(R,0,e,r,rr,rr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o($c,e,t);switch(u){case 0:return w(Ir,a,t,i,p(Ka,e,r,c),l);case 1:return w(R,a,t,r,c,l);default:return w(Ir,a,t,i,c,p(Ka,e,r,l))}}),Mn=y(function(e,r,n){var a=p(Ka,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return w(R,1,t,i,c,l)}else{var u=a;return u}}),kf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},sc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,g=m.d,C=m.e,S=v.e;return w(R,0,f,h,w(R,1,n,a,w(R,0,i,c,l,u),g),w(R,1,s,d,C,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var s=x.b,d=x.c,m=x.d,S=x.e;return w(R,1,n,a,w(R,0,i,c,l,u),w(R,0,s,d,m,S))}else return e},Bo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,g=f.c,C=f.d,S=f.e;return w(R,0,i,c,w(R,1,u,v,s,d),w(R,1,n,a,m,w(R,0,h,g,C,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,m=_.e,F=e.e;F.a;var h=F.b,g=F.c,C=F.d,S=F.e;return w(R,1,n,a,w(R,0,i,c,x,m),w(R,0,h,g,C,S))}else return e},zf=ht(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return w(R,n,l,u,v,w(R,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Bo(r)}else break e;else return c.a,c.d,Bo(r);else break e;return r}}),kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,w(R,r,n,a,kn(t),l);var u=sc(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return w(Ir,v,s,d,kn(m),f)}else return rr}else return w(R,r,n,a,kn(t),l)}else return rr},rn=$(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(j(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,w(R,n,a,t,o(rn,e,i),c);var u=sc(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return w(Ir,v,s,d,o(rn,e,m),f)}else return rr}else return w(R,n,a,t,o(rn,e,i),c);else return o(Df,e,$i(zf,e,r,n,a,t,i,c))}),Df=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(xr(e,a)){var l=kf(c);if(l.$===-1){var u=l.b,v=l.c;return w(Ir,n,u,v,i,kn(c))}else return rr}else return w(Ir,n,a,t,i,o(rn,e,c))}else return rr}),Af=$(function(e,r){var n=o(rn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return w(R,1,a,t,i,c)}else{var l=n;return l}}),Cn=y(function(e,r,n){var a=r(o(fc,e,n));if(a.$)return o(Af,e,n);var t=a.a;return p(Mn,e,t,n)}),Bf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Cn,r,ve(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Cf,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Cn,r,ve(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(_f,k(i,c),p(Mf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Cn,r,ve(function(a){return a.$===3?gf(n):a}));default:var r=e.a,n=e.b;return o(Cn,r,ve(function(a){return a.$===2?hf(n):a}))}},Ff=function(e){return bf(Bf(e))},Rf=$(function(e,r){return o(ce,Ff(e),r)}),Vf=$(function(e,r){return ae(r,{eT:o(Rf,e,r.eT)})}),Ef=$(function(e,r){var n=r.a,a=r.b;return o(Ve,n,ae(a,{A:o(ac,Vf(e),a.A)}))}),Nf=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),jf=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ve,a,ae(t,{A:o(Nf,o(e,i.a,r),i)}))}),Wf=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ae(a,{aO:!a.aO});case 2:var t=n.a;return ae(a,{G:p(vf,e,t,a.G)});case 3:var i=n.a;return ae(a,{G:o(Ef,i,a.G)});case 4:var c=n.a;return ae(a,{G:p(jf,r,c,a.G)});default:var l=n.a;return ae(a,{G:o(pf,l,a.G)})}}),Gf=$(function(e,r){return o(Ve,ca,{A:k(e,r(e)),ac:T,T})}),If=Gu,Fo=If(T),Hn=Tu,ln=Lu,Hf=Ju("tick",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return xe({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f3:e})},o(P,"clock",ie))},o(P,"devicePixelRatio",ie))},o(P,"dt",ie))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(d){return xe({eG:d,eU:s,$7:v,e$:u,dF:l,fI:c,eo:i,fQ:t,ez:a})},o(P,"alt",q))},o(P,"control",q))},o(P,"down",q))},o(P,"downs",Hn(ln)))},o(P,"left",q))},o(P,"pressedKeys",Hn(ln)))},o(P,"right",q))},o(P,"shift",q))},o(P,"up",q))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return xe({$7:v,dB:u,fs:l,fM:c,fN:i,ez:t,f6:a,ga:n})},o(P,"down",q))},o(P,"isDown",q))},o(P,"move",q))},o(P,"rightDown",q))},o(P,"rightUp",q))},o(P,"up",q))},o(P,"x",ie))},o(P,"y",ie))))},o(P,"screen",o(M,function(r){return o(M,function(n){return xe({fc:n,f4:r})},o(P,"height",ie))},o(P,"width",ie))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return xe({eX:r,eY:e})},o(P,"deltaX",ie))},o(P,"deltaY",ie))))),Uf=function(e){return{$:4,a:e}},Of={$:0},Jf=di,je=$(function(e,r){return o(_i,e,Jf(r))}),E=je("className"),qf=function(e){var r=e.b.A;return r.b},Un=je("id"),Yf=Ku,On=Yf,Xf=ev,Q=Xf,Zf={$:1},Qf=function(e){return{$:3,a:e}},Kf=function(e){return{$:5,a:e}},Ro=kr("a"),It=kr("button"),Vo=function(e){return o(je,"href",av(e))},es=Cr("clip-rule"),_e=Cr("d"),rs=Cr("fill"),dc=gi("http://www.w3.org/2000/svg"),ns=dc("svg"),as=Cr("viewBox"),ts=o(rv,"http://www.w3.org/XML/1998/namespace","xml:space"),Ae=ns(b([as("0 0 24 24"),rs("currentColor"),o(Q,"width","100%"),o(Q,"height","100%"),ts("http://www.w3.org/2000/svg")])),os=Cr("fill-rule"),Ce=dc("path"),Lr={eW:Ae(b([o(Ce,b([_e("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),e6:Ae(b([o(Ce,b([_e("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),fb:Ae(b([o(Ce,b([_e("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),ft:Ae(b([o(Ce,b([_e("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(Ce,b([_e("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),fu:Ae(b([o(Ce,b([_e("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(Ce,b([_e("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fF:Ae(b([o(Ce,b([_e("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fG:Ae(b([o(Ce,b([_e("M7 5V19L18 12L7 5Z")]),T)])),fH:Ae(b([o(Ce,b([_e("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),bn:Ae(b([o(Ce,b([_e("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),f_:Ae(b([o(Ce,b([os("evenodd"),es("evenodd"),_e("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),f$:Ae(b([o(Ce,b([_e("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),ge:Ae(b([o(Ce,b([_e("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},is=function(e){return{$:0,a:e}},mc=hi,pc=$(function(e,r){return o(mc,e,is(r))}),Ht=function(e){return o(pc,"click",xe(e))},Eo=je("target"),cs=je("title"),et=$(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return w(R,n,a,o(e,a,t),o(et,e,i),o(et,e,c))}),ls=Ia,nr=ls,us=function(e){return p(Dt,y(function(r,n,a){return o(A,n,a)}),T,e)},vs=$(function(e,r){return{$:3,a:e,b:r}}),$s=$(function(e,r){return{$:2,a:e,b:r}}),fs=$(function(e,r){return{$:0,a:e,b:r}}),ss=$(function(e,r){return{$:1,a:e,b:r}}),Oe=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ds=L(Oe,0/255,0/255,0/255,1),ms=di,bc=$(function(e,r){return o(_i,e,ms(r))}),ps=bc("checked"),De=eu,bs=y(function(e,r,n){return te(o(cn,e-wr(n),la(r)),n)}),Ut=Hl,gc=function(e){var r=function(n){return n<10?Pe(n):la(ic(87+n))};return e<16?r(e):te(gc(e/16|0),r(o(Ut,16,e)))},gs=o(re,gc,o(bs,2,"0")),hc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aK:t,cd:a,ck:n,cV:r}},hs=function(e){var r=hc(e),n=r.cV,a=r.ck,t=r.cd;return o(Sr,"",o(A,"#",o(ce,o(re,De,gs),b([n*255,a*255,t*255]))))},rt=je("htmlFor"),nt=$(function(e,r){if(r.$)return G;var n=r.a;return e(n)}),Jn=$(function(e,r){if(r.$){var a=r.a;return pe(a)}else{var n=r.a;return e(n)}}),_s=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),_c=$(function(e,r){return p($r,_s(e),T,r)}),Cc=B(function(e,r,n,a){return{fh:r,fq:e,fA:n,fU:a}}),Cs=Tv,ys=hu,Ss=$(function(e,r){if(r.$)return pe(e);var n=r.a;return oe(n)}),ws=Lv,Ls=function(e){return o(ws,{eO:!1,fv:!1},e)},qn=function(e){if(e.b){var r=e.a;return e.b,Z(r)}else return G},Ts=$(function(e,r){if(r.$){var a=r.a;return pe(a)}else{var n=r.a;return oe(e(n))}}),xs=function(e){return{$:2,a:e}},Ps=function(e){return{$:0,a:e}},Ms=function(e){return{$:1,a:e}},ha=$(function(e,r){return Ke(r)-Ke(e)}),_a=y(function(e,r,n){var a=Ke(n);return j(Ke(e),a)<1&&j(a,Ke(r))<1}),ks=$(function(e,r){var n=function(t){return j(t,e)<0?oe(t):pe(Ms(r))},a=p(_a,"0","9",r)?oe(o(ha,"0",r)):p(_a,"a","z",r)?oe(10+o(ha,"a",r)):p(_a,"A","Z",r)?oe(10+o(ha,"A",r)):pe(Ps(r));return o(Jn,n,a)}),yc=$(function(e,r){var n=Jr(r);if(n.$===1)return oe(0);var a=n.a,t=a.a,i=a.b;return o(Jn,function(c){return o(Jn,function(l){return oe(c+l*e)},o(yc,e,i))},o(ks,e,t))}),zs=$(function(e,r){return 2<=e&&e<=36?o(yc,e,Qa(r)):pe(xs(e))}),Ds=zs(16),As=y(function(e,r,n){return L(Oe,e,r,n,1)}),Bs=B(function(e,r,n,a){return L(Oe,e,r,n,a)}),dn=Il,Fs=$(function(e,r){var n=o(dn,10,e);return De(r*n)/n}),Rs=fu,Vs=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=oc(n);if(a.b&&!a.b.b){var t=a.a;return ys(b([t,t]))}else return n};return o(re,Rs,o(re,function(n){return o(ve,function(a){return p(Cs,1,a,n)},Ls(e))},o(re,nt(qn),o(re,ve(function(n){return n.fU}),o(re,ve(_c(dr)),o(re,Ss("Parsing hex regex failed"),Jn(function(n){var a=o(ce,o(re,r,o(re,Ds,Ts(E$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return oe(L(Bs,t/255,c/255,u/255,o(Fs,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return oe(p(As,t/255,c/255,u/255))}else break e;return pe("Parsing ints from hex failed")})))))))}(),Yn=kr("input"),at=kr("label"),tt=je("name"),Sc=$(function(e,r){return p($r,P,r,e)}),Es=o(Sc,b(["target","checked"]),q),Ns=function(e){return o(pc,"change",o(Wn,e,Es))},js=function(e){return k(e,!0)},Ws=function(e){return{$:1,a:e}},Gs=$(function(e,r){return o(mc,e,Ws(r))}),Is=o(Sc,b(["target","value"]),ln),Ot=function(e){return o(Gs,"input",o(Wn,js,o(Wn,e,Is)))},wc=je("max"),Lc=je("min"),Tc=function(e){return o(je,"step",e)},Xn=je("type"),Jt=je("value"),No=function(e){var r=e.cn,n=e.c9,a=e.cD,t=e.cz,i=e.c2,c=e.cH;return o(W,T,b([o(at,b([rt(r)]),b([o(W,b([E("relative w-full")]),b([o(W,b([E("inline-block")]),b([nr(r)])),o(W,b([E("inline-block float-right")]),b([nr(ne(n))]))]))])),o(Yn,b([Xn("range"),o(Q,"width","100%"),Un(r),tt(r),Lc(ne(a)),wc(ne(t)),Jt(ne(n)),Tc(ne(i)),Ot(o(re,Gt,o(re,ze(42),c)))]),T)]))},Hs=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Us=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(W,b([E("h-12 py-4")]),b([o(at,b([E("block"),rt(e)]),b([o(Yn,b([E("relative bottom-[1px] align-middle mr-2"),Xn("checkbox"),Un(e),tt(e),Ns(vs(e)),ps(c)]),T),nr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return No({cn:e,cz:i,cD:t,cH:fs(e),c2:.01*(i-t),c9:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return No({cn:e,cz:i,cD:t,cH:o(re,De,ss(e)),c2:1,c9:c});default:var c=r.a;return o(W,T,b([o(W,b([o(Q,"margin-bottom","6px")]),b([o(at,b([rt(e)]),b([nr(e)]))])),o(Yn,b([Xn("color"),o(Q,"width","100%"),o(Q,"height","26px"),o(Q,"padding","0px"),Un(e),tt(e),Ot(function(l){return o($s,e,o(Hs,ds,Vs(l)))}),Jt(hs(c))]),T)]))}}),Os=function(e){return o(W,b([E("p-4 border-y-[0.5px] border-white20")]),b([o(W,b([E("text-lg pb-2")]),b([nr(e.fw)])),o(W,b([E("pl-2 pr-2")]),us(o(et,Us,e.ax)))]))},Js=function(e){return o(W,b([E("text-xs text-white60")]),o(ce,Os,e))},qs=function(e){return o(W,b([E("absolute left-[104px] bottom-2 text-sm text-white40")]),b([nr("clock: "+o(vc,3,qr(e).eS))]))},Ys=function(e){e.a;var r=e.b.T;return o(ve,function(n){return De(60/(qr(e).eS-n))},o(ve,o(re,G$,function(n){return n.eS}),qn(o(rc,59,r))))},Xs=function(e){return o(W,b([E("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Ys(e);if(r.$===1)return b([nr("... Fps")]);var n=r.a;return b([nr(Pe(n)+" Fps")])}())},Zs=function(e){return{$:0,a:e}},Qs=function(e){var r=e.b.T;return br(r)},Ks=function(e){var r=e.b.T;e.b.A;var n=e.b.ac;return br(r)+1+br(n)},ed=function(e){return o(Yn,b([E("absolute w-full"),Xn("range"),Lc(Pe(0)),wc(Pe(Ks(e)-1)),Jt(Pe(Qs(e))),Tc(Pe(1)),Ot(o(re,Gt,o(re,ze(42),o(re,De,Zs))))]),T)},jo={$:1},Wo={$:3},Go={$:2},ot=function(e){return!e.b},xc=bc("disabled"),Ca=y(function(e,r,n){return o(It,b([E("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),E(n),xc(e),Ht(r)]),b([nr("REC")]))}),ya=y(function(e,r,n){return o(It,b([E("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),xc(e),Ht(n)]),b([o(W,b([E("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),rd=function(e){var r=e.a,n=e.b.ac;return o(W,b([E("py-1")]),b([function(){switch(r.$){case 0:return p(Ca,!1,jo,"text-red-500 font-bold");case 1:return p(Ca,!1,Go,"text-white60 hover:text-white80 font-bold");default:return p(Ca,!0,Go,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(ya,ot(n),Lr.fG,Wo);case 1:return p(ya,ot(n),Lr.fG,Wo);default:return p(ya,!1,Lr.fF,jo)}}()]))},nd=function(e){return o(W,b([E("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([ed(e),rd(e),Xs(e),qs(e)]))},ad=function(e){var r=e.a;return xr(r,ca)},td=$(function(e,r){var n=ad(r.G)?o(W,T,T):o(W,b([E("absolute pointer-events-none w-8 h-8"),o(Q,"left",ne(e.bn.f6+.5*e.b3.f4)+"px"),o(Q,"top",ne(-e.bn.ga+.5*e.b3.fc)+"px")]),b([o(W,b([E(e.bn.dB?"text-black80":"text-black40")]),b([Lr.bn]))]));return o(W,T,b([n]))}),od=$(function(e,r){var n=o(It,b([E(r.aO?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ht(Zf),cs("Distraction Free Mode")]),b([Lr.ge])),a=40,t=260,i=o(W,b([E("absolute w-8 bottom-12")]),b([o(Ro,b([E("text-twitterBlue40 hover:text-twitterBlue"),Vo("https://twitter.com/AzizErkalSelman"),Eo("_blank")]),b([Lr.f$]))])),c=80,l=o(W,b([E("absolute w-8 bottom-2")]),b([o(Ro,b([E("text-githubCat40 hover:text-githubCat"),Vo("https://github.com/erkal/elm-3d-playground-exploration"),Eo("_blank")]),b([Lr.e6]))])),u=e.b3.f4>640?U(e.b3.fc,a+t,e.b3.f4-(a+t)):U(e.b3.fc-c,a,e.b3.f4-a),v=u.a,s=u.b,d=u.c;return r.aO?o(W,b([E("fixed w-10 h-10 p-1")]),b([n])):o(W,T,b([o(W,b([E("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(Q,"width",ne(a)+"px")]),b([n,i,l])),o(W,b([E("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(Q,"width",ne(t)+"px"),o(Q,"height",ne(v)+"px")]),b([o(On,Qf,Js(qr(r.G).eT))])),o(W,b([E("absolute bottom-0"),o(Q,"left",ne(s)+"px"),o(Q,"height",ne(c)+"px"),o(Q,"width",ne(d)+"px")]),b([o(On,Kf,nd(r.G))])),o(td,e,r)]))}),id=y(function(e,r,n){var a=qf(n.G),t=qr(n.G);return o(W,b([E("bg-black40"),E("select-none"),E("antialiased"),E("font-mono"),o(Q,"width",ne(t.b3.f4)+"px"),o(Q,"height",ne(t.b3.fc)+"px")]),b([o(W,b([E("fixed")]),b([o(On,Yi(Of),o(e,t,a))])),o(W,b([Un("gui")]),b([o(od,t,n),o(On,Uf,o(r,t,a))]))]))}),cd=Ne(function(e,r,n,a,t,i){var c=$(function(u,v){return k(L(Wf,r,i,u,v),Fo)}),l=function(u){var v=o(Xi,n,u.fj);return k({aO:u.fj.b3.f4<500,G:o(Gf,v,a)},Fo)};return cf({fi:l,fV:Yi(Hf(J$)),f0:c,f2:o(id,e,t)})}),ld=B(function(e,r,n,a){return me(cd,e,r,n,a,$(function(t,i){return o(W,T,T)}),y(function(t,i,c){return c}))}),ud=y(function(e,r,n){return L(ld,e,r,T,n)}),vd=L(Oe,85/255,87/255,83/255,1),$d=L(Oe,32/255,74/255,135/255,1),fd=L(Oe,211/255,215/255,207/255,1),ua=function(e){return{$:0,a:e}},sd=y(function(e,r,n){e:for(;;){var a=o(Rt,Me,e),t=a.a,i=a.b;if(j(qa(t),Me)<0)return o(qi,!0,{y:r,l:n,o:t});var c=i,l=o(A,Ji(t),r),u=n+1;e=c,r=l,n=u;continue e}}),qt=function(e){return e.b?p(sd,e,T,0):Ui},dd=$(function(e,r){return{dv:e,am:T,C:0,cY:qt(r),aE:ua({a$:0,a2:0})}}),md=L(Oe,114/255,159/255,207/255,1),pd=L(Oe,233/255,185/255,110/255,1),bd=L(Oe,245/255,121/255,0/255,1),gd=L(Oe,117/255,80/255,123/255,1),hd=function(e){return o(dd,pd,b([gd,vd,$d,md,fd,bd]))},ke={V:.35,bk:6},va=$(function(e,r){return e*De(r/e)}),_d=function(e){var r=e;return ae(r,{aE:ua({a$:.2*-ke.bk,a2:o(va,ke.V,r.C-ke.V)})})},Cd=function(e){var r=e;return ae(r,{aE:ua({a$:.2*ke.bk,a2:o(va,ke.V,r.C+ke.V)})})},yd=function(e){var r=e.dE;return r.dF?Cd:r.eo?_d:dr},Sd=Yl,fr=ru,wd=$(function(e,r){var n=e,a=r,t=a.de-n.de,i=a.ga-n.ga,c=a.f6-n.f6,l=o(Ue,N(c),o(Ue,N(i),N(t)));if(l){var u=t/l,v=i/l,s=c/l,d=fr(s*s+v*v+u*u);return Z({f6:s/d,ga:v/d,de:u/d})}else return G}),Sa=function(e){return e},Yt=$(function(e,r){var n=e,a=r;return{f6:a.ga*n.de-a.de*n.ga,ga:a.de*n.f6-a.f6*n.de,de:a.f6*n.ga-a.ga*n.f6}}),nn=function(e){var r=e,n=o(Ue,N(r.f6),o(Ue,N(r.ga),N(r.de)));if(n){var a=r.de/n,t=r.ga/n,i=r.f6/n,c=fr(i*i+t*t+a*a);return Z({f6:i/c,ga:t/c,de:a/c})}else return G},it=$(function(e,r){var n=e,a=r;return{f6:a.f6-n.f6,ga:a.ga-n.ga,de:a.de-n.de}}),Ld=$(function(e,r){var n=e,a=r;return a.f6*n.f6+a.ga*n.ga+a.de*n.de}),Pc=$(function(e,r){var n=e,a=r;return j(a,n)>0}),Td=$(function(e,r){var n=e,a=r;return j(a,n)<0}),xd=$(function(e,r){var n=e,a=r;return{f6:a.f6-n.f6,ga:a.ga-n.ga,de:a.de-n.de}}),Pd=$(function(e,r){var n=e,a=r,t=a.f6*n.f6+a.ga*n.ga+a.de*n.de;return{f6:n.f6*t,ga:n.ga*t,de:n.de*t}}),Md=function(e){var r=e;return{f6:-r.f6,ga:-r.ga,de:-r.de}},Pr=0,Mc={f6:0,ga:0,de:0},kd=y(function(e,r,n){return o(nt,function(a){var t=o(xd,o(Pd,a,r),r);return o(nt,function(i){var c=o(Yt,r,e),l=o(Ld,n,c),u=o(Pc,Pr,l)?c:o(Td,Pr,l)?Md(c):Mc;return o(ve,function(v){return U(a,i,v)},nn(u))},nn(t))},nn(e))}),zd=function(e){var r=e,n=N(r.de),a=N(r.ga),t=N(r.f6);if(j(t,a)<1)if(j(t,n)<1){var i=fr(r.de*r.de+r.ga*r.ga);return{f6:0,ga:-r.de/i,de:r.ga/i}}else{var i=fr(r.ga*r.ga+r.f6*r.f6);return{f6:-r.ga/i,ga:r.f6/i,de:0}}else if(j(a,n)<1){var i=fr(r.de*r.de+r.f6*r.f6);return{f6:r.de/i,ga:0,de:-r.f6/i}}else{var i=fr(r.f6*r.f6+r.ga*r.ga);return{f6:-r.ga/i,ga:r.f6/i,de:0}}},kc=function(e){var r=zd(e),n=r,a=n,t=e,i=t,c={f6:i.ga*a.de-i.de*a.ga,ga:i.de*a.f6-i.f6*a.de,de:i.f6*a.ga-i.ga*a.f6};return k(r,c)},Dd=function(e){var r=e;return r},Hr=function(e){return e},Ad=$(function(e,r){var n=kc(e),a=n.a,t=n.b;return Hr({cI:r,dc:a,dd:t,df:e})}),Bd=function(e){var r=o(it,e.aU,e.du),n=Dd(e.eA),a=o(Yt,r,n),t=p(kd,r,n,a);if(t.$){var v=nn(r);if(v.$){var d=kc(e.eA),m=d.a,f=d.b;return Hr({cI:e.du,dc:f,dd:e.eA,df:m})}else{var s=v.a;return o(Ad,s,e.du)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Hr({cI:e.du,dc:u,dd:l,df:c})}},$a={f6:0,ga:0,de:0},Fd=function(e){return{$:0,a:e}},we=function(e){var r=e;return N(r)},zn=function(e){var r=e;return .5*r},Rd=ql,Vd=function(e){var r=e;return Rd(r)},Ed=function(e){var r=zn(we(e.eB)),n=Vd(r);return{cU:Fd(n),da:e.da}},lr=function(e){return e},Xt=lr({f6:0,ga:1,de:0}),Zn=function(e){return e},Nd=function(e){var r=e.aU,n=e.du,a=e.eA;return Ed({eB:Zn(2*Sd(.5)),da:Bd({du:Sa(n),aU:Sa(r),eA:o(ze,Xt,o(wd,$a,Sa(a)))})})},zc=Nd({du:{f6:0,ga:-.2,de:1},aU:{f6:0,ga:0,de:0},eA:{f6:0,ga:1,de:0}}),Tr=function(e){return e},jd=y(function(e,r,n){return{f6:e,ga:r,de:n}}),Qn=Ul,Wd=function(e){return Zn(Qn*(e/180))},yn=function(e){return e},Dn=function(e){var r=e;return r},Gd=$(function(e,r){var n=e,a=r;return a.f6*n.f6+a.ga*n.ga+a.de*n.de}),Id=function(e){var r=e;return r.e_},Ze=$(function(e,r){var n=r;return e*n}),Hd=function(e){var r=e;return r.cI},Ud=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.fy,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga+(a.de-i.de)*l.de}),Od=y(function(e,r,n){var a=e,t=r,i=n;return{f6:i.f6+t*a.f6,ga:i.ga+t*a.ga,de:i.de+t*a.de}}),Jd=$(function(e,r){var n=Id(r),a=e,t=a.fy,i=o(Gd,t,n);if(i){var c=Hd(r),l=o(Ud,e,c),u=o(Ze,-1/i,l);return Z(p(Od,n,u,c))}else return G}),qd=$(function(e,r){return{f6:e,ga:r}}),Io=$(function(e,r){var n=e,a=r;return n*a}),Yd=function(e){var r=e;return r},Ho=function(e){var r=e;return Yd(r.eJ)},Xd=function(e){var r=e;return r.aN},Zd=$(function(e,r){var n=r;return n/e}),fa=function(e){var r=e;return r.cI},ct=function(e){var r=e;return fa(r)},lt=function(e){var r=e;return-r},Dc=lr({f6:0,ga:0,de:-1}),Qd=$(function(e,r){var n=e,a=r;return a/n}),Kd=$(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,v=u;return{f6:v.f6*a.f6+l.f6*a.ga+i.f6*a.de,ga:v.ga*a.f6+l.ga*a.ga+i.ga*a.de,de:v.de*a.f6+l.de*a.ga+i.de*a.de}}),Uo=$(function(e,r){return{e_:r,cI:e}}),un=function(e){var r=e;return{f6:-r.f6,ga:-r.ga,de:-r.de}},mn=function(e){var r=e;return r.df},ut=function(e){var r=e;return un(mn(r))},em=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dc,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga}),Zt=y(function(e,r,n){var a=e,t=r,i=n;return{f6:a,ga:t,de:i}}),rm=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cI,v=u,s=t.df,d=s,m=t.dd,f=m,h=t.dc,g=h;return{f6:v.f6+i*g.f6+c*f.f6+l*d.f6,ga:v.ga+i*g.ga+c*f.ga+l*d.ga,de:v.de+i*g.de+c*f.de+l*d.de}}),nm=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dd,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga}),am=y(function(e,r,n){var a=e,t=o(nm,Ho(r),n),i=o(em,Ho(r),n),c=a.da,l=c,u=Xd(r);u.a;var v=u.b,s=a.cU;if(s.$){var h=s.a,g=o(Qd,v,h),C=L(rm,l,o(Io,g,i),o(Io,g,t),Pr);return o(Uo,C,ut(a.da))}else{var d=s.a,m=lt(o(Zd,d,o(Ze,.5,v))),f=o(Kd,l,o(ze,Dc,nn(p(Zt,i,t,m))));return o(Uo,ct(a.da),f)}}),vt=Ol,$t=Jl,tm=function(e){var r=e;return{f6:vt(r),ga:$t(r)}},om=function(e){var r=e;return{f6:-r.ga,ga:r.f6}},im=function(e){return e},cm=$(function(e,r){return im({cI:r,dc:e,dd:om(e)})}),lm=$(function(e,r){return o(cm,tm(e),r)}),um=y(function(e,r,n){var a=e.a,t=e.b;return{eJ:o(lm,r,n),aN:k(we(a),we(t))}}),Nr=function(e){var r=e;return r.f6},vm=$(function(e,r){var n=e,a=r;return{f6:n,ga:a}}),jr=function(e){var r=e;return r.ga},Wr=function(e){var r=e;return r.de},$m=B(function(e,r,n,a){var t=n.f6,i=n.ga,c=function(v){return p(jd,Dn(Nr(v)),Dn(jr(v)),Dn(Wr(v)))},l=p(um,k(yn(r.f4),yn(r.fc)),Wd(0),o(qd,0,0)),u=o(vm,yn(t),yn(i));return o(ve,c,o(Jd,a,p(am,e,l,u)))}),fm=$(function(e,r){var n=e,a=r;return{f6:a.f6+n.f6,ga:a.ga+n.ga,de:a.de+n.de}}),sm=$(function(e,r){return{fy:e,cI:r}}),dm=$(function(e,r){var n=r;return o(sm,n.fy,o(fm,e,n.cI))}),mm=$(function(e,r){return{fy:r,cI:e}}),Ac=lr({f6:0,ga:0,de:1}),Qt=Ac,pm=o(mm,$a,Qt),bm=B(function(e,r,n,a){return L($m,r,n,a,o(dm,p(Zt,Tr(0),Tr(0),Tr(e)),pm))}),gm=bm(0),Oo=$(function(e,r){return e?r:dr}),hm=y(function(e,r,n){var a=e.bn,t=r.ef,i=r.el,c=n;return ae(c,{C:i-(t-a.f6)})}),_m=B(function(e,r,n,a){var t=a;return j(N(r-t.C),.5*ke.V)<0?ae(t,{C:t.C+.1*(r-t.C)}):ae(t,{C:t.C+e*n})}),Cm=function(e){var r=e;return ae(r,{am:T})},ym=function(e){return{$:1,a:e}},Sm=$(function(e,r){var n=r;return ae(n,{aE:ym({ef:e.bn.f6,el:n.C})})}),Kt=y(function(e,r,n){return j(n,e)<0?e:j(n,r)>0?r:n}),wm=function(e){return p($n,x$,0,e)},Lm=function(e){var r=e,n=wm(o(Wt,br(r.am)-1,o(ce,function(u){return u.dn},r.am))),a=k(o(ze,0,o(ve,function(u){return u.cS},qn(r.am))),o(ze,0,o(ve,function(u){return u.cS},qn(Se(r.am))))),t=a.a,i=a.b,c=t-i,l=n?c/n:0;return ae(r,{aE:ua({a$:p(Kt,-ke.bk,ke.bk,l),a2:o(va,ke.V,r.C+.3*l)})})},Tm=$(function(e,r){var n=e.dp,a=e.bn,t=r;return ae(t,{am:o(Wt,6,o(A,{dn:n,cS:a.f6},t.am))})}),xm=$(function(e,r){var n=r,a=n.aE;if(a.$===1){var t=a.a;return p(Oo,!e.bn.dB,Lm,p(hm,e,t,o(Tm,e,n)))}else{var i=a.a.a2,c=a.a.a$;return L(_m,e.dp,i,c,p(Oo,e.bn.dB,Sm(e),Cm(n)))}}),Pm=$(function(e,r){var n=e.bn,a=o(ze,{f6:0,ga:0,de:0},p(gm,zc,e.b3,n)),t=a.f6,i=a.ga,c=ae(e,{bn:ae(n,{f6:t,ga:i})});return o(xm,c,r)}),Mm=$(function(e,r){return e.bn,o(Pm,e,o(yd,e,r))}),Jo=function(e){return e*Qn/180},km=function(e){var r=e;return r},zm=function(e){var r=e;return km(r.eJ)},Bc=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Dm=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Am=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bm=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Fm=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Rm=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Vm=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Em=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Vm,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Bc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(Dm,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(Am,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Rm,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(Bm,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(Fm,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Nm={$:0},Kn=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Ue,n,a)}),jm=$(function(e,r){return j(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(jm,n,a)}),Wm=le(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Kn(c(u)),d=o(de,s.d4,e),m=o(ue,s.d1,r),f=o(de,s.d5,n),h=o(ue,s.d2,a),g=o(de,s.d6,t),C=o(ue,s.d3,i),S=c,_=v;e=d,r=m,n=f,a=h,t=g,i=C,c=S,l=_;continue e}else return{d1:r,d2:a,d3:i,d4:e,d5:n,d6:t}}),Gm=y(function(e,r,n){var a=Kn(e(r));return ra(Wm,a.d4,a.d1,a.d5,a.d2,a.d6,a.d3,e,n)}),wa=$(function(e,r){var n=e,a=r;return j(a,n)<1}),Im=function(e){return o(wa,e.d1,e.d4)&&o(wa,e.d2,e.d5)&&o(wa,e.d3,e.d6)?e:{d1:o(ue,e.d4,e.d1),d2:o(ue,e.d5,e.d2),d3:o(ue,e.d6,e.d3),d4:o(de,e.d4,e.d1),d5:o(de,e.d5,e.d2),d6:o(de,e.d6,e.d3)}},ea=function(e){var r=e;return r},Hm=function(e){var r=ea(e),n=r.a,a=r.b,t=r.c,i=Nr(n),c=jr(n),l=Wr(n),u=Nr(a),v=jr(a),s=Wr(a),d=Nr(t),m=jr(t),f=Wr(t);return Im({d1:o(ue,i,o(ue,u,d)),d2:o(ue,c,o(ue,v,m)),d3:o(ue,l,o(ue,s,f)),d4:o(de,i,o(de,u,d)),d5:o(de,c,o(de,v,m)),d6:o(de,l,o(de,s,f))})},Fc=Av,pn=function(e){var r=e;return r},mr=function(e){return Fc(pn(e))},Rc=function(e){var r=e;return r},Vc=function(e){return Fc(Rc(e))},Ec=function(e){return e},Um=$(function(e,r){var n=e,a=r,t=o(Ue,N(a.f6),o(Ue,N(a.ga),N(a.de)));if(t){var i=a.de/t,c=a.ga/t,l=a.f6/t,u=fr(l*l+c*c+i*i);return{f6:n*l/u,ga:n*c/u,de:n*i/u}}else return Mc}),Om=Um(Ec(1)),Nc=y(function(e,r,n){var a=o(it,r,n),t=o(it,e,r);return Om(o(Yt,a,t))}),Jm=function(e){var r=ea(e),n=r.a,a=r.b,t=r.c,i=Vc(p(Nc,n,a,t));return U({n:i,b_:mr(n)},{n:i,b_:mr(a)},{n:i,b_:mr(t)})},qm=$(function(e,r){return{$:2,a:e,b:r}}),Ym=qm({dq:3,dA:0,d8:4}),Xm=function(e){if(e.b){var r=e.a,n=e.b,a=Ym(o(ce,Jm,e)),t=p(Gm,Hm,r,n);return L(Bc,t,e,a,0)}else return Nm},Be=y(function(e,r,n){return U(e,r,n)}),qe=y(function(e,r,n){var a=e,t=r,i=n;return{f6:a,ga:t,de:i}}),jc=function(){var e=Tr(1),r=Tr(1),n=Tr(1),a=o(Ze,-.5,e),t=o(Ze,-.5,r),i=o(Ze,-.5,n),c=p(qe,i,t,a),l=o(Ze,.5,e),u=p(qe,i,t,l),v=o(Ze,.5,r),s=p(qe,i,v,a),d=p(qe,i,v,l),m=o(Ze,.5,n),f=p(qe,m,t,a),h=p(qe,m,v,a),g=p(qe,m,t,l),C=p(qe,m,v,l);return Em(Xm(b([p(Be,c,h,f),p(Be,c,s,h),p(Be,u,g,C),p(Be,u,C,d),p(Be,f,h,C),p(Be,f,C,g),p(Be,c,d,s),p(Be,c,u,d),p(Be,c,f,g),p(Be,c,g,u),p(Be,s,C,h),p(Be,s,d,C)])))}(),Sn={$:0},Zm=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Qm=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Vc(p(Nc,u,l,c)),s={n:v,b_:mr(u)},d={n:v,b_:mr(l)},m={n:v,b_:mr(c)};return o(A,s,o(A,d,o(A,m,n)))}),Km=rr,e0=function(e){var r=e;return r.D},r0=B(function(e,r,n,a){if(r.$===1)return G;var t=r.a;if(n.$===1)return G;var i=n.a;if(a.$===1)return G;var c=a.a;return Z(p(e,t,i,c))}),ft=4294967295>>>32-on,st=Rl,n0=y(function(e,r,n){e:for(;;){var a=ft&r>>>e,t=o(st,a,n);if(t.$){var v=t.a;return o(st,ft&r,v)}else{var i=t.a,c=e-on,l=r,u=i;e=c,r=l,n=u;continue e}}}),a0=function(e){return e>>>5<<5},Wc=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||j(e,n)>-1?G:j(e,a0(n))>-1?Z(o(st,ft&e,i)):Z(p(n0,a,e,t))}),t0=function(e){var r=e;return r.ai},La=$(function(e,r){return o(Wc,e,t0(r))}),o0=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(r0,y(function(c,l,u){return U(c,l,u)}),o(La,a,e),o(La,t,e),o(La,i,e))};return o(_c,r,e0(e))},i0=y(function(e,r,n){return e(r(n))}),c0=$(function(e,r){return!o(tc,o(i0,lf,e),r)}),l0=$(function(e,r){return p($r,$(function(n,a){return e(n)?o(A,n,a):a}),T,r)}),Gc=function(e){var r=e.a;return r},u0=$(function(e,r){var n=Gc(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&j(i,n)<0&&c>=0&&j(c,n)<0&&l>=0&&j(l,n)<0};return o(c0,a,r)?{D:r,ai:e}:{D:o(l0,a,r),ai:e}}),v0=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),$0=v0({dq:1,dA:3,d8:4}),dt=function(e){var r=e;return r},An=$(function(e,r){var n=dt(r),a=dt(e);return k(U(a.f6,a.ga,a.de),U(n.f6,n.ga,n.de))}),eo=Mv,qo=p(eo,0,0,0),Ta=Ne(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(fc,o(An,e,r),t);if(v.$){var d={n:qo,b_:mr(r)},m={n:qo,b_:mr(e)},f=u+1,h=u;return U(o(A,U(n,h,f),o(A,U(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return U(o(A,U(n,s,a),c),l,u)}}),f0=Le(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,g=a,C=e,S=r,_=v,x=a+3,F=me(Ta,s,m,f,g,r,me(Ta,d,s,h,f,r,me(Ta,m,d,g,h,r,t)));e=C,r=S,n=_,a=x,t=F;continue e}else{var Y=t,O=Y.a,H=Y.b;return k(O,Se(H))}}),s0=Le(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,g=n,C=p(Mn,o(An,m,s),f,p(Mn,o(An,s,d),h,p(Mn,o(An,d,m),g,t))),S=o(A,U(g,h,f),a),_=e,x=v,F=n+3,Y=S,O=C;e=_,r=x,n=F,a=Y,t=O;continue e}else return U(a,t,n)}),yr=y(function(e,r,n){var a=o0(n),t=p($r,Qm(r),T,a),i=w(s0,r,a,0,T,Km),c=i.a,l=i.b,u=i.c,v=w(f0,r,l,a,0,U(c,T,u)),s=v.a,d=v.b,m=ot(d)?t:te(t,d);return p(Zm,e,o(u0,qt(m),s),o($0,m,s))}),d0=$(function(e,r){return r.b?p($r,A,r,e):e}),pr=function(e){return p($r,d0,T,e)},Yo=function(e){return{D:o(ce,function(r){return U(3*r,3*r+1,3*r+2)},o(aa,0,br(e)-1)),ai:qt(pr(o(ce,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},m0=function(e){switch(e.$){case 0:return Sn;case 1:var a=e.a,r=e.b,n=o(ce,ea,r);return p(yr,a,dr,Yo(n));case 2:var a=e.a,r=e.b,n=o(ce,ea,r);return p(yr,a,dr,Yo(n));case 3:var a=e.a,t=e.b;return p(yr,a,dr,t);case 4:var a=e.a,t=e.b;return p(yr,a,function(i){return i.b_},t);case 5:var a=e.a,t=e.b;return p(yr,a,function(i){return i.b_},t);case 6:var a=e.a,t=e.b;return p(yr,a,function(i){return i.b_},t);case 7:var a=e.a,t=e.b;return p(yr,a,function(i){return i.b_},t);case 8:return Sn;case 9:return Sn;default:return Sn}},Xo=m0(jc),p0=function(e){var r=e;return r.aN},Ic={$:0},z=Ic,Hc=function(e){return{$:4,a:e}},b0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),ro=function(e){return Hc(o(b0,e,T))},Je=$(function(e,r){return{$:1,a:e,b:r}}),g0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bI"}},h0=$(function(e,r){switch(r.$){case 0:return o(b$,e,r);case 1:return o(g$,e,r);case 2:return o(h$,e,r);case 3:return o(_$,e,r);case 4:return o(C$,e,r);default:return o(y$,e,r)}}),_0=$(function(e,r){switch(r.$){case 0:return o(Jv,e,r);case 1:return o(qv,e,r);case 2:return o(Yv,e,r);case 3:return o(Xv,e,r);case 4:return o(Zv,e,r);case 5:return o(Qv,e,r);case 6:return o(Kv,e,r);case 7:return o(e$,e,r);default:return r$(e)}}),Te=Ov,C0=1029,y0=function(e){return{$:5,a:e}},Uc=function(e){var r=e;return y0(r)},S0=Uc(C0),w0=1028,L0=Uc(w0),ar=y(function(e,r,n){return r===1?e?o(A,S0,n):o(A,L0,n):n}),Oc={src:`
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
    `,attributes:{position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},xa=B(function(e,r,n,a){return o(Je,r,le(function(t,i,c,l,u,v,s,d){return w(Te,p(ar,l,a,d),Oc,g0,n,{bI:e,b:c,c:i,d:v,e:t,f:u})}))}),T0={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ay"}},Jc={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=B(function(e,r,n,a){return o(Je,r,le(function(t,i,c,l,u,v,s,d){return w(Te,p(ar,l,a,d),Jc,T0,n,{ay:e,b:c,c:i,d:v,e:t,f:u})}))}),qc=$(function(e,r){return{$:3,a:e,b:r}}),x0={src:`
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
    `,attributes:{},uniforms:{constantColor:"ay",pointRadius:"bZ",sceneProperties:"e"}},Yc={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bZ",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},P0=B(function(e,r,n,a){return o(qc,n,le(function(t,i,c,l,u,v,s,d){return w(Te,d,Yc,x0,a,{ay:e,b:c,c:i,bZ:r,d:v,e:t,f:u})}))}),M0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",sceneProperties:"e"}},no=function(e){var r=e;return r},Xc=Bv,or=Le(function(e,r,n,a,t){return o(Je,n,le(function(i,c,l,u,v,s,d,m){return w(Te,p(ar,u,t,m),Jc,M0,a,{aQ:o(Xc,no(r),e),b:l,c,d:s,e:i,f:v})}))}),k0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",pointRadius:"bZ",sceneProperties:"e"}},z0=Le(function(e,r,n,a,t){return o(qc,a,le(function(i,c,l,u,v,s,d,m){return w(Te,m,Yc,k0,t,{aQ:o(Xc,no(r),e),b:l,c,bZ:n,d:s,e:i,f:v})}))}),D0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColor:"cx",sceneProperties:"e",viewMatrix:"f"}},Zc={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wn=B(function(e,r,n,a){return o(Je,r,le(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return w(Te,p(ar,l,a,d),Zc,D0,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cx:e,b:c,c:i,d:v,e:t,f:u})}))}),Qc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColorTexture:"cy",normalMapTexture:"aZ",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Kc={src:`
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
    `,attributes:{normal:"n",position:"b_",tangent:"ew",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},A0=Ne(function(e,r,n,a,t,i){return o(Je,a,le(function(c,l,u,v,s,d,m,f){var h=m.a,g=m.b;return w(Te,p(ar,v,i,f),Kc,Qc,t,{P:g,bi:h.bi,bR:h.bR,bS:h.bS,bT:h.bT,cy:e,b:u,c:l,aZ:r,d,e:c,a4:n,f:s})}))}),el={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cc",constantBaseColor:"cf",constantMetallic:"cg",constantRoughness:"ch",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallicTexture:"cC",normalMapTexture:"aZ",roughnessTexture:"c$",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},B0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Je,u,le(function(d,m,f,h,g,C,S,_){var x=S.a,F=S.b;return w(Te,p(ar,h,s,_),Kc,el,v,{cc:e,cf:r,cg:i,ch:a,P:F,bi:x.bi,bR:x.bR,bS:x.bS,bT:x.bT,cC:t,b:f,c:m,aZ:c,d:C,c$:n,e:d,a4:l,f:g})}))}}}}}}}}}}},F0={src:`
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
    `,attributes:{},uniforms:{baseColor:"cb",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallic:"cB",roughness:"c_",sceneProperties:"e",viewMatrix:"f"}},Ln=Ne(function(e,r,n,a,t,i){return o(Je,a,le(function(c,l,u,v,s,d,m,f){var h=m.a,g=m.b;return w(Te,p(ar,v,i,f),Zc,F0,t,{cb:e,P:g,bi:h.bi,bR:h.bR,bS:h.bS,bT:h.bT,cB:n,b:u,c:l,d,c_:r,e:c,f:s})}))}),R0=function(e){return{$:0,a:e}},Zo=$(function(e,r){return{$:1,a:e,b:r}}),an=$(function(e,r){if(r.$){var n=r.a.B;return k(n,1)}else return r.a,k(e,0)}),sa=kv,da=zv,ma=Dv,Yr=Fv,V0=function(e){return L(Yr,sa(e),da(e),ma(e),1)},ao=L(Yr,0,0,0,0),Bn=$(function(e,r){if(r.$){var a=r.a.B;return k(a,ao)}else{var n=r.a;return k(e,V0(n))}}),E0=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.B;return o(Zo,k(t,ao),o(an,t,r))}else if(n.b.$){var t=n.b.a.B;return o(Zo,o(Bn,t,e),o(an,t,r))}else{var a=n.a.a;return n.b.a,R0(a)}}),N0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Tn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),j0=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Er=xv,W0=function(e){return o(Er,e,1)},mt=o(Er,0,0),Ar=$(function(e,r){if(r.$){var a=r.a.B;return k(a,mt)}else{var n=r.a;return k(e,W0(n))}}),G0=B(function(e,r,n,a){var t=L(j0,e,r,n,a);if(t.a.$){var u=t.a.a.B;return L(Tn,k(u,ao),o(Ar,u,r),o(Ar,u,n),o(an,u,a))}else if(t.b.$){var u=t.b.a.B;return L(Tn,o(Bn,u,e),k(u,mt),o(Ar,u,n),o(an,u,a))}else if(t.c.$){var u=t.c.a.B;return L(Tn,o(Bn,u,e),o(Ar,u,r),k(u,mt),o(an,u,a))}else if(t.d.$){var u=t.d.a.B;return L(Tn,o(Bn,u,e),o(Ar,u,r),o(Ar,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(N0,i,c,l)}}),I0={src:`
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
    `,attributes:{},uniforms:{backlight:"b9",colorTexture:"bI",sceneProperties:"e"}},Pa=Le(function(e,r,n,a,t){return o(Je,n,le(function(i,c,l,u,v,s,d,m){return w(Te,p(ar,u,t,m),Oc,I0,a,{b9:no(r),bI:e,b:l,c,d:s,e:i,f:v})}))}),rl={src:`
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
    `,attributes:{normal:"n",position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},H0=B(function(e,r,n,a){return o(Je,r,le(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return w(Te,p(ar,l,a,d),rl,Qc,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cy:e,b:c,c:i,aZ:e,d:v,e:t,a4:0,f:u})}))}),U0=_t(function(e,r,n,a,t,i,c,l,u){return o(Je,c,le(function(v,s,d,m,f,h,g,C){var S=g.a,_=g.b;return w(Te,p(ar,m,u,C),rl,el,l,{cc:e,cf:r,cg:i,ch:a,P:_,bi:S.bi,bR:S.bR,bS:S.bS,bT:S.bT,cC:t,b:d,c:s,aZ:e,d:h,c$:n,e:v,a4:0,f})}))}),to=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),O0=function(e){var r=e;return p(to,r.d4,r.d1,.5)},J0=function(e){var r=e;return p(to,r.d5,r.d2,.5)},q0=function(e){var r=e;return p(to,r.d6,r.d3,.5)},Y0=function(e){return p(qe,O0(e),J0(e),q0(e))},X0=function(e){var r=e;return r.d1},Z0=function(e){var r=e;return r.d2},nl=function(e){var r=e;return r.d3},Q0=function(e){var r=e;return r.d4},K0=function(e){var r=e;return r.d5},al=function(e){var r=e;return r.d6},ur=$(function(e,r){var n=e,a=r;return a-n}),tl=function(e){return U(o(ur,Q0(e),X0(e)),o(ur,K0(e),Z0(e)),o(ur,al(e),nl(e)))},V=function(e){var r=tl(e),n=r.a,a=r.b,t=r.c;return{eQ:pn(Y0(e)),e8:n/2,e9:a/2,fa:t/2}},ep=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(xa,l,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(xa,l,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(xa,l,V(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tr,n,V(t),c,a);case 8:var t=r.a,c=r.c;return L(tr,n,V(t),c,0);case 9:var t=r.a,c=r.c;return L(tr,n,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(P0,n,i,V(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return w(Pa,l,v,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Pa,l,v,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Pa,l,v,V(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(or,u,v,V(t),c,a);case 8:var t=r.a,c=r.c;return w(or,u,v,V(t),c,0);case 9:var t=r.a,c=r.c;return w(or,u,v,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(z0,u,v,i,V(t),c)}}case 2:e.a;var s=e.b,O=e.c,d=o(E0,s,O);if(d.$){var h=d.a,g=h.a;h.b;var C=d.b,S=C.a,_=C.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(H0,g,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return me(A0,g,S,_,V(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(wn,m,V(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(wn,m,V(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(wn,m,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(wn,m,V(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var x=e.b,F=e.c,Y=e.d,O=e.e,H=L(G0,x,F,Y,O);if(H.$){var K=H.a,ee=K.a,ge=K.b,he=H.b,$e=he.a,fe=he.b,We=H.c,Ge=We.a,zr=We.b,Dr=H.d,S=Dr.a,_=Dr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return zl(U0,ee,ge,$e,fe,Ge,zr,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return B0(ee)(ge)($e)(fe)(Ge)(zr)(S)(_)(V(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var X=H.a,J=H.b,I=H.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return me(Ln,X,J,I,V(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return me(Ln,X,J,I,V(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return me(Ln,X,J,I,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return me(Ln,X,J,I,V(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),Ma=function(e){var r=e;return r.f6},ka=function(e){var r=e;return r.ga},za=function(e){var r=e;return r.de},rp=function(e){var r=e,n=za(r.df),a=ka(r.df),t=Ma(r.df),i=za(r.dd),c=ka(r.dd),l=Ma(r.dd),u=za(r.dc),v=ka(r.dc),s=Ma(r.dc);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Ee=function(e){var r=e;return r},bn=function(e){var r=e;return r.dc},gn=function(e){var r=e;return r.dd},np=function(e){var r=pn(fa(e)),n=Ee(mn(e)),a=Ee(gn(e)),t=Ee(bn(e));return{dC:rp(e),p:t.f6,q:t.ga,r:t.de,s:a.f6,t:a.ga,u:a.de,v:n.f6,w:n.ga,x:n.de,H:r.f6,I:r.ga,J:r.de,b2:1}},Fr=$(function(e,r){return{$:5,a:e,b:r}}),ol=$(function(e,r){return{dC:xr(e.dC,r.dC),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,H:r.H+(e.H*r.p+e.I*r.s+e.J*r.v)*r.b2,I:r.I+(e.H*r.q+e.I*r.t+e.J*r.w)*r.b2,J:r.J+(e.H*r.r+e.I*r.u+e.J*r.x)*r.b2,b2:e.b2*r.b2}}),oo=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(ol,a,e);return o(Fr,i,t);case 1:return o(Fr,e,n);case 3:return o(Fr,e,n);case 2:return o(Fr,e,n);default:return o(Fr,e,n)}}),ap=$(function(e,r){return o(oo,np(e),r)}),il=function(e){return{$:2,a:e}},tp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eQ;return{eQ:{f6:n*i.f6,ga:a*i.ga,de:t*i.de},e8:n*r.e8,e9:a*r.e9,fa:t*r.fa}}),op=Vv,ip=Rv,Qo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=ip(a),h=f.f6,g=f.ga,C=f.de,S=f.eE,_=op({eE:S,f6:h*s,ga:g*d,de:C*m});return ra(r,n,_,t,i,c,l,u,v)}}}}}}}}}},pt=$(function(e,r){switch(r.$){case 0:return Ic;case 5:var n=r.a,a=r.b;return o(Fr,n,o(pt,e,a));case 1:var t=r.a,i=r.b;return o(Je,o(tp,e,t),o(Qo,e,i));case 3:return r;case 2:var i=r.a;return il(o(Qo,e,i));default:var c=r.a;return Hc(o(ce,pt(e),c))}}),cp=$(function(e,r){var n=r;return o(pt,e,n)}),lp={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ur=519,cl=7683,ll=7682,be=7680,up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},io=y(function(e,r,n){var a=e.cW,t=e.cw,i=e.db,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(re,c(v.bs),o(re,l(v.bd),o(re,l(v.bA),l(v.bB))))};return o(u,n,o(u,r,p(up,a,t,i)))}),vp=p(io,{cw:0,cW:0,db:15},{bd:be,bs:Ur,bA:be,bB:cl},{bd:be,bs:Ur,bA:be,bB:ll}),$p=p(io,{cw:0,cW:0,db:15},{bd:be,bs:Ur,bA:be,bB:ll},{bd:be,bs:Ur,bA:be,bB:cl}),fp=$(function(e,r){return e?o(A,$p,r):o(A,vp,r)}),sp={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},dp=function(e){if(e.$){var r=e.c;return Z(le(function(n,a,t,i,c,l,u,v){return w(Te,o(fp,i,v),sp,lp,r,{b:t,c:a,d:l,e:n,b4:u,f:c})}))}else return G},Ko=function(e){var r=dp(e);if(r.$)return z;var n=r.a;return il(n)},mp=B(function(e,r,n,a){var t=o(ep,n,jc),i=function(){var s=k(e,r);return s.a?s.b?ro(b([t,Ko(Xo)])):t:s.b?Ko(Xo):z}(),c=p0(a),l=c.a,u=c.b,v=c.c;return o(ap,zm(a),o(cp,U(l,u,v),i))}),pp=$(function(e,r){return L(mp,!0,!0,e,r)}),Da=$(function(e,r){var n=e,a=r;return j(a,n)>-1}),Aa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),bp=lr({f6:-1,ga:0,de:0}),gp=lr({f6:0,ga:-1,de:0}),ul=lr({f6:1,ga:0,de:0}),hp=Ne(function(e,r,n,a,t,i){var c=o(Da,n,i)?Ac:Dc,l=o(Da,r,t)?Xt:gp,u=o(Da,e,a)?ul:bp,v=U(we(o(ur,e,a)),we(o(ur,r,t)),we(o(ur,n,i))),s=p(qe,o(Aa,e,a),o(Aa,r,t),o(Aa,n,i)),d=Hr({cI:s,dc:u,dd:l,df:c});return{eJ:d,aN:v}}),_p=$(function(e,r){return me(hp,Nr(e),jr(e),Wr(e),Nr(r),jr(r),Wr(r))}),bt=y(function(e,r,n){return{f6:e,ga:r,de:n}}),Cp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=U(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(pp,e,o(_p,p(bt,-c,-l,-u),p(bt,c,l,u)))}),ei=function(e){return{$:0,a:e}},yp=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ba=function(e){return p(Kt,0,1,e<=.04045?e/12.92:o(dn,(e+.055)/1.055,2.4))},Sp=function(e){var r=hc(e),n=r.cV,a=r.ck,t=r.cd;return p(eo,Ba(n),Ba(a),Ba(t))},wp=function(e){return p(yp,0,ei(Sp(e)),ei(0))},Lp=$(function(e,r){return o(Cp,wp(r),U(.2,.3,.3))}),vl=function(e){var r=e;return Gc(r.cY)+1},$l=$(function(e,r){var n=r,a=o(Ut,vl(n),e);return{di:o(ze,n.dv,o(Wc,a-1,n.cY)),fh:a,fz:n.C-o(va,ke.V,n.C)}}),Tp=function(e){var r=e;return o(Ut,vl(r),De(-r.C/ke.V))},xp=function(e){var r=e;return o($l,Tp(r),r)},Pp=function(e){return ro(e)},Mp=Pp,kp=y(function(e,r,n){return{f6:e,ga:r,de:n}}),zp=function(e){var r=Rc(e);return{dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:r.f6,I:r.ga,J:r.de,b2:1}},Dp=$(function(e,r){return o(oo,zp(e),r)}),Ap=$(function(e,r){return o(Dp,e,r)}),fl=function(e){var r=e.a,n=e.b,a=e.c;return Ap(p(kp,r,n,a))},Bp=function(e){return fl(U(e,0,0))},Fp=function(e){return fl(U(0,e,0))},Rp=$(function(e,r){var n=pn(e),a=1-r;return{dC:r>=0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:a*n.f6,I:a*n.ga,J:a*n.de,b2:r}}),Vp=y(function(e,r,n){return o(oo,o(Rp,e,r),n)}),Ep=y(function(e,r,n){return p(Vp,e,r,n)}),Np=Ep($a),jp=$(function(e,r){var n=xp(r),a=n.fz,t=n.fh,i=function(l){return a+(l-t)*ke.V},c=function(l){return o(Bp,i(l),o(Fp,-(.1*N(i(l))),o(Np,1-.7*N(i(l)),o(Lp,e,o($l,l,r).di))))};return Mp(o(ce,c,o(aa,t-3,t+3)))}),Fa=function(e){return e/255},Wp=y(function(e,r,n){return L(Oe,Fa(e),Fa(r),Fa(n),1)}),Gp=function(e){return e},Ip=function(e){return Tr(.01*e)},ri=function(e){return e},Hp=function(e){return e},Up=function(e){return{$:0,a:e}},Op=Up,Jp={$:3},qp=Jp,Yp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Xp=Yp,Zp=$(function(e,r){return pr(o(ce,e,r))}),Qp=function(e){return{$:1,a:e}},Kp=Qp,e1=function(e){return o(Cr,"height",Pe(e))},r1=function(e){return Zu(nv(e))},n1=r1,a1=function(e){return{$:2,a:e}},t1=a1,o1=function(e){return o(Sr,"",e)},i1=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return De(l*1e3)/1e3},c=function(l){return De(l*1e4)/100};return o1(b(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},c1=y(function(e,r,n){return p(p$,e,r,n)}),ni=function(e){var r=e;return r},Ra=L(Yr,1,1,1,1),Ye=y(function(e,r,n){return o(ce,function(a){return o(a,r,n)},e)}),l1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),u1=$(function(e,r){var n=e,a=r.f6,t=r.ga;return p(l1,n*a/t,n,n*(1-a-t)/t)}),v1=function(e){var r=e.a,n=e.b,a=e.c;return p(eo,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},co=$(function(e,r){return v1(o(u1,e,r))}),ir=Wv,$1=function(e){return ir({dM:e.p,dN:e.s,dO:e.v,dP:e.H,dQ:e.q,dR:e.t,dS:e.w,dT:e.I,dU:e.r,dV:e.u,dW:e.x,dX:e.J,dY:0,dZ:0,d_:0,d$:1})},Va=Le(function(e,r,n,a,t){var i=a.dC?1:-1,c=L(Yr,a.b2,a.b2,a.b2,i);return me(t,e,c,$1(a),a.dC,r,n)}),sl=Ne(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(ol,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,g=o(A,w(Va,e,r,n,a,h),i.M);return{M:g,U:i.U,fP:i.fP};case 3:var C=t.b,S=o(A,w(Va,e,r,n,a,C),i.U);return{M:i.M,U:S,fP:i.fP};case 2:var _=t.a,x=o(A,w(Va,e,r,n,a,_),i.fP);return{M:i.M,U:i.U,fP:x};default:var F=t.a;return p($n,L(sl,e,r,n,a),i,F)}}),f1=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),dl=f1,lo=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),s1=function(e){var r=e._,n=e.X,a=e.W;return L(lo,518,r,n,a)},d1=$(function(e,r){return{$:6,a:e,b:r}}),m1=d1,ml=b([s1({W:1,X:0,_:!1}),L(dl,!1,!1,!1,!1),o(m1,0,1)]),uo=8,pl=15,Gr=7681,p1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},b1=$(function(e,r){return{$:0,a:e,b:r}}),g1=b1({dq:1,dA:0,d8:5}),h1=g1(b([{b_:o(Er,-1,-1)},{b_:o(Er,1,-1)},{b_:o(Er,-1,1)},{b_:o(Er,1,1)}])),_1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"b_"},uniforms:{}},vo=function(e){return p(io,{cw:e.cw,cW:e.cW,db:e.db},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB})},$o=function(e){return w(Te,b([vo(e),L(dl,!1,!1,!1,!1)]),_1,p1,h1,{})},C1=$o({bd:Gr,cw:0,cW:uo,bs:Ur,db:pl,bA:Gr,bB:Gr}),y1=516,ai=5386,S1=function(e){return o(dn,2,e+4)},bl=function(e){return $o({bd:be,cw:pl,cW:uo,bs:y1,db:S1(e),bA:ai,bB:ai})},w1=y(function(e,r,n){return pr(b([p(Ye,e,n,ml),b([bl(r),C1])]))}),L1=$(function(e,r){return pr(o(Wi,w1(e),r))}),T1=function(e){var r=e._,n=e.X,a=e.W;return L(lo,513,r,n,a)},x1=T1({W:1,X:0,_:!0}),P1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},M1=function(e){var r=e.b0,n=e.bM,a=e.bF,t=e.bC,i=e.bH,c=e.aK,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,g=v.c;return P1(s)(d)(m)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},k1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ti=$(function(e,r){var n=e,a=r;return p(k1,32774,n,a)}),z1=1,oi=771,D1=770,fo=M1({bC:0,aK:o(ti,z1,oi),bF:0,bH:o(ti,D1,oi),bM:0,b0:0}),Br=b([x1,fo]),A1=function(e){return e},B1=function(e){return Hr({cI:A1({f6:e.H,ga:e.I,de:e.J}),dc:lr({f6:e.p,ga:e.q,de:e.r}),dd:lr({f6:e.s,ga:e.t,de:e.u}),df:lr({f6:e.v,ga:e.w,de:e.x})})},Ea=$(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,v=u;return{f6:a.f6*v.f6+a.ga*v.ga+a.de*v.de,ga:a.f6*l.f6+a.ga*l.ga+a.de*l.de,de:a.f6*i.f6+a.ga*i.ga+a.de*i.de}}),gl=$(function(e,r){var n=e,a=r,t=n.cI,i=t,c=a.f6-i.f6,l=a.ga-i.ga,u=a.de-i.de,v=n.df,s=v,d=n.dd,m=d,f=n.dc,h=f;return{f6:c*h.f6+l*h.ga+u*h.de,ga:c*m.f6+l*m.ga+u*m.de,de:c*s.f6+l*s.ga+u*s.de}}),hl=$(function(e,r){return{cI:o(gl,e,fa(r)),dc:o(Ea,e,bn(r)),dd:o(Ea,e,gn(r)),df:o(Ea,e,mn(r))}}),F1=$(function(e,r){var n=Kn(r),a=Kn(e);return{d1:o(ue,a.d1,n.d1),d2:o(ue,a.d2,n.d2),d3:o(ue,a.d3,n.d3),d4:o(de,a.d4,n.d4),d5:o(de,a.d5,n.d5),d6:o(de,a.d6,n.d6)}}),R1=function(e){var r=e;return U(r.f6,r.ga,r.de)},Fn=$(function(e,r){var n=e,a=r;return a+n}),V1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=zn(we(a)),c=zn(we(n)),l=zn(we(t)),u=R1(r),v=u.a,s=u.b,d=u.c;return{d1:o(Fn,c,v),d2:o(Fn,i,s),d3:o(Fn,l,d),d4:o(ur,c,v),d5:o(ur,i,s),d6:o(ur,l,d)}}),ii=B(function(e,r,n,a){var t=n.eQ,i=2*n.fa*r,c=2*n.e9*r,l=2*n.e8*r,u=t.de*r,v=t.ga*r,s=t.f6*r,d=Ee(mn(e)),m=N(l*d.f6)+N(c*d.ga)+N(i*d.de),f=Ee(gn(e)),h=N(l*f.f6)+N(c*f.ga)+N(i*f.de),g=Ee(bn(e)),C=N(l*g.f6)+N(c*g.ga)+N(i*g.de),S=o(V1,U(C,h,m),o(gl,e,p(bt,s,v,u)));if(a.$)return Z(S);var _=a.a;return Z(o(F1,_,S))}),gt=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 1:var c=t.a,l=L(ii,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 2:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 3:var c=t.a,l=L(ii,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 4:var u=t.a,f=e,h=r,g=L(gt,e,r,n,u),C=i;e=f,r=h,n=g,a=C;continue e;default:var v=t.a,s=t.b,d=o(hl,B1(v),e),m=r*v.b2,f=e,h=r,g=L(gt,d,m,n,b([s])),C=i;e=f,r=h,n=g,a=C;continue e}}else return n}),E1={dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:0,I:0,J:0,b2:1},ci=$o({bd:Gr,cw:0,cW:uo,bs:Ur,db:255,bA:Gr,bB:Gr}),N1=function(e){var r=e,n=o(Ue,N(r.f6),o(Ue,N(r.ga),N(r.de)));if(n){var a=r.de/n,t=r.ga/n,i=r.f6/n,c=fr(i*i+t*t+a*a);return c*n}else return Pr},ye={bF:0,eP:!1,bM:0,cR:0,b0:0,c6:0,f6:0,ga:0,de:0},Fe=$(function(e,r){var n=e,a=r;return ir({dM:n.f6,dN:n.b0,dO:a.f6,dP:a.b0,dQ:n.ga,dR:n.bM,dS:a.ga,dT:a.bM,dU:n.de,dV:n.bF,dW:a.de,dX:a.bF,dY:n.c6,dZ:n.cR,d_:a.c6,d$:a.cR})}),en=k({bi:o(Fe,ye,ye),bR:o(Fe,ye,ye),bS:o(Fe,ye,ye),bT:o(Fe,ye,ye)},L(Yr,0,0,0,0)),_l=514,Cl=function(e){var r=e._,n=e.X,a=e.W;return L(lo,515,r,n,a)},yl=240,j1=b([Cl({W:1,X:0,_:!0}),vo({bd:be,cw:yl,cW:0,bs:_l,db:0,bA:be,bB:be}),fo]),W1=$(function(e,r){var n=e,a=r.fx,t=r.e5,i=r.eI,c=we(a),l=c,u=we(t),v=u,s=n.cU;if(s.$){var m=s.a;return Xa(v)?ir({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:0,dX:-1,dY:0,dZ:0,d_:0,d$:1}):ir({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:-2/(v-l),dX:-(v+l)/(v-l),dY:0,dZ:0,d_:0,d$:1})}else{var d=s.a;return Xa(v)?ir({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-1,dX:-2*l,dY:0,dZ:0,d_:-1,d$:0}):ir({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-(v+l)/(v-l),dX:-2*v*l/(v-l),dY:0,dZ:0,d_:-1,d$:0})}}),xn=$(function(e,r){return(1&e>>r)===1?0:1}),G1=function(e){return b([Cl({W:1,X:0,_:!0}),vo({bd:be,cw:yl,cW:e,bs:_l,db:0,bA:be,bB:be}),fo])},I1=y(function(e,r,n){return pr(o(ce,function(a){var t=a<<4,i=L(Yr,o(xn,a,0),o(xn,a,1),o(xn,a,2),o(xn,a,3));return p(Ye,e,k(r,i),G1(t))},o(aa,1,o(dn,2,n)-1)))}),H1=Gv,U1=ul,O1=Xt,J1={cI:$a,dc:U1,dd:O1,df:Qt},q1=function(e){var r=pn(fa(e)),n=Ee(mn(e)),a=Ee(gn(e)),t=Ee(bn(e));return ir({dM:t.f6,dN:a.f6,dO:n.f6,dP:r.f6,dQ:t.ga,dR:a.ga,dS:n.ga,dT:r.ga,dU:t.de,dV:a.de,dW:n.de,dX:r.de,dY:0,dZ:0,d_:0,d$:1})},Y1=$(function(e,r){var n=r;return q1(o(hl,n,e))}),X1=function(e){return o(Y1,J1,e)},Z1=function(e){var r=e;return r.da},Q1=function(e){var r=e;return bn(r)},K1=function(e){var r=e;return gn(r)},e3=function(e){var r=Z1(e.eN),n=Hr({cI:ct(r),dc:Q1(r),dd:K1(r),df:un(ut(r))}),a=ro(e.aS),t=a,i=L(gt,n,1,G,b([t]));if(i.$===1)return T;var c=i.a,l=X1(r),u=o(Ze,.99,o(ue,we(e.aM),lt(nl(c)))),v=tl(c),s=v.a,d=v.b,m=v.c,f=N1(p(Zt,s,d,m)),h=o(Ze,1.01,o(Fn,f,lt(al(c)))),g=o(W1,e.eN,{eI:e.eI,e5:h,fx:u}),C=H1(g).d$,S=C?Ee(un(ut(r))):dt(ct(r)),_=function(){var $e=e.b5;switch($e.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var fe=$e.a;return k(3,fe);case 4:var fe=$e.a;return k(4,fe);default:return k(5,0)}}(),x=_.a,F=_.b,Y=e.bK,O=Y,H=o(co,O,e.b7),X=H,J=ir({dM:0,dN:S.f6,dO:sa(X),dP:e.eu,dQ:0,dR:S.ga,dS:da(X),dT:Dn(f),dU:0,dV:S.de,dW:ma(X),dX:x,dY:0,dZ:C,d_:0,d$:F}),I=me(sl,J,l,g,E1,t,{M:T,U:T,fP:T}),K=e.bQ;switch(K.$){case 0:var ee=K.a;return pr(b([p(Ye,I.M,k(ee,Ra),Br),p(Ye,I.U,en,Br)]));case 1:var ee=K.a;return pr(b([p(Ye,I.M,en,Br),b([ci]),p(Ye,I.fP,ee.bi,ml),b([bl(0)]),p(Ye,I.M,k(ee,Ra),j1),p(Ye,I.U,en,Br)]));default:var ge=K.a,he=K.b;return pr(b([p(Ye,I.M,k(he,Ra),Br),b([ci]),o(L1,I.fP,ge),p(I1,I.M,he,br(ge)),p(Ye,I.U,en,Br)]))}},r3=function(e){return o(Cr,"width",Pe(e))},n3=$(function(e,r){var n=b([Kp(1),t1(0),Op(!0),L(Xp,0,0,0,0)]),a=function(){var x=e.b8;switch(x.$){case 0:return U(n,"0",1);case 1:return U(o(A,qp,n),"1",1);default:var F=x.a;return U(n,"0",F)}}(),t=a.a,i=a.b,c=a.c,l=e.aN,u=l.a,v=l.b,s=ni(v),d=o(Q,"height",Pe(s)+"px"),m=ni(u),f=m/s,h=o(Zp,function(x){return e3({eI:f,eN:e.eN,aM:e.aM,aS:x.aS,bK:x.bK,bQ:x.bQ,eu:c,b5:x.b5,b7:x.b7})},r),g=o(Q,"width",Pe(m)+"px"),C=e.aL,S=C,_=i1(S);return p(n1,"div",b([o(Q,"padding","0px"),g,d]),b([k(i,p(c1,t,b([r3(De(m*c)),e1(De(s*c)),g,d,o(Q,"display","block"),o(Q,"background-color",_)]),h))]))}),a3=function(e){return o(n3,{b8:e.b8,aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN},b([{aS:e.aS,bK:e.bK,bQ:e.bQ,b5:e.b5,b7:e.b7}]))},Sl=function(e){return e},li=Sl({f6:.31271,ga:.32902}),t3=$(function(e,r){var n=e,a=Ee(r.e_),t=a.f6,i=a.ga,c=a.de,l=o(co,r.cl,r.ce),u=l;return{bF:ma(u),eP:n,bM:da(u),cR:0,b0:sa(u),c6:1,f6:-t,ga:-i,de:-c}}),o3=function(e){return e},i3=function(e){return o3(1.2*o(dn,2,e))},Na=function(e){return e},c3={$:0},l3=c3,ui=function(e){var r=e;return r},u3=function(e){e:for(;;){if(xr(e.fk,Pr)&&xr(e.fl,Pr))return ye;if(o(Pc,we(e.fk),we(e.fl))){var r={ce:e.ce,fk:e.fl,fl:e.fk,eA:un(e.eA)};e=r;continue e}else{var n=N(ui(e.fl)/Qn),a=N(ui(e.fk)/Qn),t=Ee(e.eA),i=t.f6,c=t.ga,l=t.de,u=o(co,Ec(1),e.ce),v=u;return{bF:a*ma(v),eP:!1,bM:a*da(v),cR:n/a,b0:a*sa(v),c6:3,f6:i,ga:c,de:l}}}},vi=function(e){return u3({ce:e.ce,fk:e.cl,fl:Pr,eA:e.eA})},v3=function(e){var r=e;return r},wl=function(e){var r=p(Kt,1667,25e3,v3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Sl({f6:n,ga:a})},Ll=function(e){return e},$3=wl(Ll(12e3)),f3=wl(Ll(5600)),s3=function(e){return{$:2,a:e}},d3=function(e){return s3(e)},m3=$(function(e,r){return{$:2,a:e,b:r}}),Tl=function(e){return{$:0,a:e}},Pn=function(e){var r=e;return r},p3=function(e){var r=e;return r.eP},b3=Tl(en.a),g3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(A,a,i),c):k(i,o(A,a,c))});return p($r,n,k(T,T),r)}),h3=function(e){var r=e;return ir({dM:r.f6,dN:r.b0,dO:0,dP:0,dQ:r.ga,dR:r.bM,dS:0,dT:0,dU:r.de,dV:r.bF,dW:0,dX:0,dY:r.c6,dZ:r.cR,d_:0,d$:0})},_3=le(function(e,r,n,a,t,i,c,l){var u=o(g3,p3,b([Pn(e),Pn(r),Pn(n),Pn(a)])),v=u.a,s=u.b;if(v.b){var d=te(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,g=f.b,C=g.a,S=g.b,_=S.a;return o(m3,o(ce,h3,v),{bi:o(Fe,m,h),bR:o(Fe,C,_),bS:o(Fe,t,i),bT:o(Fe,c,l)})}else return b3}else return Tl({bi:o(Fe,e,r),bR:o(Fe,n,a),bS:o(Fe,t,i),bT:o(Fe,c,l)})}),C3=y(function(e,r,n){return ra(_3,e,r,n,ye,ye,ye,ye,ye)}),y3=function(e){var r=o(t3,Hp(e.fP),{ce:f3,e_:e.fX,cl:Na(8e4)}),n=vi({ce:$3,cl:Na(2e4),eA:e.eA}),a=vi({ce:li,cl:Na(15e3),eA:un(e.eA)}),t=p(C3,r,n,a);return a3({b8:d3(e.ci),aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN,aS:e.aS,bK:i3(15),bQ:t,b5:l3,b7:li})},S3=$(function(e,r){var n=e,a=r,t=vt(a);return{f6:t*vt(n),ga:t*$t(n),de:$t(a)}}),w3=$(function(e,r){return y3({aL:Gp(e.eK),eN:e.eN,aM:Ip(.5),ci:e.ci,aN:k(ri(De(e.b3.f4)),ri(De(e.b3.fc))),aS:r,fP:!0,fX:o(S3,Zn(e.fW),Zn(e.fY)),eA:Qt})}),L3=$(function(e,r){return o(w3,{eK:p(Wp,46,46,46),eN:zc,ci:e.ci,b3:e.b3,fW:-Jo(15),fY:-Jo(45)},b([o(jp,e,r)]))}),T3=$(function(e,r){return o(W,b([E("w-full")]),b([o(W,b([E("absolute p-4 text-white80"),E("grid place-items-center w-full")]),b([o(W,T,b([nr("Swipe or press left/right arrow keys")]))])),o(L3,e,r)]))}),x3=p(ud,T3,Mm,hd);const P3={Main:{init:x3(o(M,function(e){return xe({fj:e})},o(P,"inputs",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return xe({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f3:e})},o(P,"clock",ie))},o(P,"devicePixelRatio",ie))},o(P,"dt",ie))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(d){return xe({eG:d,eU:s,$7:v,e$:u,dF:l,fI:c,eo:i,fQ:t,ez:a})},o(P,"alt",q))},o(P,"control",q))},o(P,"down",q))},o(P,"downs",Hn(ln)))},o(P,"left",q))},o(P,"pressedKeys",Hn(ln)))},o(P,"right",q))},o(P,"shift",q))},o(P,"up",q))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return xe({$7:v,dB:u,fs:l,fM:c,fN:i,ez:t,f6:a,ga:n})},o(P,"down",q))},o(P,"isDown",q))},o(P,"move",q))},o(P,"rightDown",q))},o(P,"rightUp",q))},o(P,"up",q))},o(P,"x",ie))},o(P,"y",ie))))},o(P,"screen",o(M,function(r){return o(M,function(n){return xe({fc:n,f4:r})},o(P,"height",ie))},o(P,"width",ie))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return xe({eX:r,eY:e})},o(P,"deltaX",ie))},o(P,"deltaY",ie)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},M3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,g=h-D.clock;g<.009||(D.dt=g,D.clock=h,e.ports.tick.send(D),d(D)),window.requestAnimationFrame(m)}},k3=()=>{ja("pointerdown"),ja("wheel"),ja("keydown")},ja=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},z3=P3.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});k3();M3(z3);
