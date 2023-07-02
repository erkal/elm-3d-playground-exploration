(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function xr(e,r,n){return n.a=e,n.f=r,n}function $(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return xr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return xr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return xr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Dt(e){return xr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ve(e){return xr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function At(e){return xr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function L(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function me(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Pi(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Kl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var eu=[];function ru(e){return e.length}var nu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),au=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,S(n,r)}),tu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ou=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+iu()),r});function iu(e){return"<internals>"}function en(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Oe(e,r){for(var n,a=[],t=tt(e,r,0,a);t&&(n=a.pop());t=tt(n.a,n.b,0,a));return t}function tt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&en(5),!1;if(n>100)return a.push(S(e,r)),!0;e.$<0&&(e=Ho(e),r=Ho(r));for(var t in e)if(!tt(e[t],r[t],n+1,a))return!1;return!0}$(Oe);$(function(e,r){return!Oe(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var cu=$(function(e,r){var n=U(e,r);return n<0?ec:n?O$:Ki}),wn=0;function S(e,r){return{a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function je(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(oe);function oe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var T={$:0};function tr(e,r){return{$:1,a:e,b:r}}var lu=$(tr);function b(e){for(var r=T,n=e.length;n--;)r=tr(e[n],r);return r}function pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var uu=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return b(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(L(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(pa(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return b(pa(r).sort(function(n,a){var t=o(e,n,a);return t===Ki?0:t===ec?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var vu=$(Math.pow);$(function(e,r){return r%e});var $u=$(function(e,r){var n=r%e;return e===0?en(11):n>0&&e<0||n<0&&e>0?n+e:n}),fu=Math.PI,su=Math.cos,du=Math.sin,mu=Math.tan,pu=Math.atan;$(Math.atan2);function bu(e){return e}function gu(e){return e===1/0||e===-1/0}var hu=Math.ceil,_u=Math.floor,Cu=Math.round,yu=Math.sqrt,zo=Math.log,wu=isNaN;function Lu(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Su=$(function(e,r){return e+r});function xu(e){var r=e.charCodeAt(0);return isNaN(r)?J:ee(55296<=r&&r<=56319?S(e[0]+e[1],e.slice(2)):S(e[0],e.slice(1)))}$(function(e,r){return e+r});function Pu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Tu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var zu=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Mu=$(function(e,r){return r.split(e)}),ku=$(function(e,r){return r.join(e)}),Du=y(function(e,r,n){return n.slice(e,r)});function Au(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Fu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Bu=$(function(e,r){return r.indexOf(e)>-1}),Eu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vu=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Ti(e){return e+""}function Ru(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return J;r=10*r+i-48}return t==a?J:ee(n==45?-r:r)}function ju(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?ee(r):J}function Nu(e){return pa(e).join("")}function Wu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Gu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Hu(e){return{$:0,a:e}}function Ft(e){return{$:2,b:e}}var Zu=Ft(function(e){return typeof e=="boolean"?ie(e):Ye("a BOOL",e)}),Iu=Ft(function(e){return typeof e=="number"?ie(e):Ye("a FLOAT",e)}),Ou=Ft(function(e){return typeof e=="string"?ie(e):e instanceof String?ie(e+""):Ye("a STRING",e)});function Uu(e){return{$:3,b:e}}var Ju=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Pr(e,r){return{$:9,f:e,g:r}}var qu=$(function(e,r){return{$:10,b:r,h:e}}),Yu=$(function(e,r){return Pr(e,[r])}),Xu=y(function(e,r,n){return Pr(e,[r,n])});B(function(e,r,n,a){return Pr(e,[r,n,a])});he(function(e,r,n,a,t){return Pr(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return Pr(e,[r,n,a,t,i])});Dt(function(e,r,n,a,t,i,c){return Pr(e,[r,n,a,t,i,c])});ve(function(e,r,n,a,t,i,c,l){return Pr(e,[r,n,a,t,i,c,l])});At(function(e,r,n,a,t,i,c,l,u){return Pr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return pe(o(Ot,"This is not valid JSON! "+a.message,r))}});var zi=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ie(e.c):Ye("null",r);case 3:return kn(r)?Mo(e.b,r,b):Ye("a LIST",r);case 4:return kn(r)?Mo(e.b,r,Qu):Ye("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ye("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return Ze(v)?v:pe(o(Zo,n,v.a));case 7:var a=e.e;if(!kn(r))return Ye("an ARRAY",r);if(a>=r.length)return Ye("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return Ze(v)?v:pe(o(rc,a,v.a));case 8:if(typeof r!="object"||r===null||kn(r))return Ye("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!Ze(v))return pe(o(Zo,i,v.a));t=tr(S(i,v.a),t)}return ie(ke(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!Ze(v))return v;c=c(v.a)}return ie(c);case 10:var v=Re(e.b,r);return Ze(v)?Re(e.h(v.a),r):v;case 11:for(var s=T,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(Ze(v))return v;s=tr(v.a,s)}return pe(U$(ke(s)));case 1:return pe(o(Ot,e.a,r));case 0:return ie(e.a)}}function Mo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!Ze(c))return pe(o(rc,i,c.a));t[i]=c.a}return ie(n(t))}function kn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Qu(e){return o(ff,e.length,function(r){return e[r]})}function Ye(e,r){return pe(o(Ot,"Expecting "+e,r))}function Hr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Hr(e.b,r.b);case 6:return e.d===r.d&&Hr(e.b,r.b);case 7:return e.e===r.e&&Hr(e.b,r.b);case 9:return e.f===r.f&&ko(e.g,r.g);case 10:return e.h===r.h&&Hr(e.b,r.b);case 11:return ko(e.g,r.g)}}function ko(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Hr(e[a],r[a]))return!1;return!0}var Ku=$(function(e,r){return JSON.stringify(r,null,e)+""});function Mi(e){return e}y(function(e,r,n){return n[e]=r,n});function Er(e){return{$:0,a:e}}function ev(e){return{$:1,a:e}}function br(e){return{$:2,b:e,c:null}}var ot=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function rv(e){return{$:5,b:e}}var nv=0;function Bt(e){var r={$:0,e:nv++,f:e,g:null,h:[]};return Et(r),r}function ki(e){return br(function(r){r(Er(Bt(e)))})}function Di(e,r){e.h.push(r),Et(e)}var av=$(function(e,r){return br(function(n){Di(e,r),n(Er(wn))})}),za=!1,Do=[];function Et(e){if(Do.push(e),!za){for(za=!0;e=Do.shift();)tv(e);za=!1}}function tv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Et(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return Vt(r,a,e.e7,e.fT,e.fM,function(){return function(){}})});function Vt(e,r,n,a,t,i){var c=o(zi,e,r?r.flags:void 0);Ze(c)||en(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=ov(l,m);function m(f,h){var g=o(a,f,v);s(v=g.a,h),Fo(l,g.b,t(v))}return Fo(l,u.b,t(v)),d?{ports:d}:{}}var Ke={};function ov(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=cv(t,r)}return n}function iv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function cv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ot,l,rv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?P(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Bt(o(ot,l,e.b))}var lv=$(function(e,r){return br(function(n){e.g(r),n(Er(wn))})});$(function(e,r){return o(av,e.h,{$:0,a:r})});function Ai(e){return function(r){return{$:1,k:e,l:r}}}function uv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ao=[],Ma=!1;function Fo(e,r,n){if(Ao.push({p:e,q:r,r:n}),!Ma){Ma=!0;for(var a;a=Ao.shift();)vv(a.p,a.q,a.r);Ma=!1}}function vv(e,r,n){var a={};Yn(!0,r,a,null),Yn(!1,n,a,null);for(var t in e)Di(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Yn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=$v(e,t,a,r.l);n[t]=fv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Yn(e,c.a,n,a);return;case 3:Yn(e,r.o,n,{s:r.n,t:a});return}}function $v(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function fv(e,r,n){return n=n||{i:T,j:T},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function sv(e){Ke[e]&&en(3)}$(function(e,r){return r});function dv(e,r){return sv(e),Ke[e]={f:mv,u:r,a:pv},Ai(e)}var mv=$(function(e,r){return function(n){return e(r(n))}});function pv(e,r){var n=T,a=Ke[e].u,t=Er(null);Ke[e].b=t,Ke[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(zi,a,c);Ze(l)||en(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Xn,fr=typeof document<"u"?document:{};function Rt(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(yr(e,function(){}),t),{}});function it(e){return{$:0,a:e}}var Fi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:jt(n),e:t,f:e,b:i}})}),gr=Fi(void 0),bv=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:jt(n),e:t,f:e,b:i}})}),gv=bv(void 0);function hv(e,r,n,a){return{$:3,d:jt(e),g:r,h:n,i:a}}var _v=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Tr([e,r],function(){return e(r)})});y(function(e,r,n){return Tr([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return Tr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Tr([e,r,n,a,t],function(){return P(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return Tr([e,r,n,a,t,i],function(){return L(e,r,n,a,t,i)})});Dt(function(e,r,n,a,t,i,c){return Tr([e,r,n,a,t,i,c],function(){return me(e,r,n,a,t,i,c)})});ve(function(e,r,n,a,t,i,c,l){return Tr([e,r,n,a,t,i,c,l],function(){return Pi(e,r,n,a,t,i,c,l)})});At(function(e,r,n,a,t,i,c,l,u){return Tr([e,r,n,a,t,i,c,l,u],function(){return ma(e,r,n,a,t,i,c,l,u)})});var Bi=$(function(e,r){return{$:"a0",n:e,o:r}}),Cv=$(function(e,r){return{$:"a1",n:e,o:r}}),Ei=$(function(e,r){return{$:"a2",n:e,o:r}}),zr=$(function(e,r){return{$:"a3",n:e,o:r}}),yv=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function wv(e){return e=="script"?"p":e}function Lv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Bi,r.n,Sv(e,r.o)):r});function Sv(e,r){var n=Xt(r);return{$:r.$,a:n?p(sf,n<3?xv:Pv,Te(e),r.a):o(ra,e,r.a)}}var xv=$(function(e,r){return S(e(r.a),r.b)}),Pv=$(function(e,r){return{ak:e(r.ak),c$:r.c$,cP:r.cP}});function jt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Bo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Bo(c,t,i):c[t]=i}return r}function Bo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function yr(e,r){var n=e.$;if(n===5)return yr(e.k||(e.k=e.m()),r);if(n===0)return fr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=yr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ct(c,r,e.d),c}var c=e.f?fr.createElementNS(e.f,e.c):fr.createElement(e.c);Xn&&e.c=="a"&&c.addEventListener("click",Xn(c)),ct(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Rt(c,yr(n===1?l[u]:l[u].b,r));return c}function ct(e,r,n){for(var a in n){var t=n[a];a==="a1"?Tv(e,t):a==="a0"?kv(e,r,t):a==="a3"?zv(e,t):a==="a4"?Mv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Tv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function zv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Mv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function kv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Dv(r,i),e.addEventListener(t,c,Nt&&{passive:Xt(i)<2}),a[t]=c}}var Nt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Nt=!0}}))}catch{}function Dv(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!Ze(i)){for(var c=Xt(t),l=i.a,u=c?c<3?l.a:l.ak:l,v=c==1?l.b:c==3&&l.c$,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cP)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function Av(e,r){return e.$==r.$&&Hr(e.a,r.a)}function Vi(e,r){var n=[];return Ie(e,r,n,0),n}function se(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Wv(r),i=1;else{se(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&se(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){se(n,0,a,r);return}(f?!Fv(d,m):d!==m)&&se(n,2,a,m),Ie(h,g,n,a+1);return;case 0:e.a!==r.a&&se(n,3,a,r.a);return;case 1:Eo(e,r,n,a,Bv);return;case 2:Eo(e,r,n,a,Ev);return;case 3:if(e.h!==r.h){se(n,0,a,r);return}var C=Wt(e.d,r.d);C&&se(n,4,a,C);var w=r.i(e.g,r.g);w&&se(n,5,a,w);return}}}function Fv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Eo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){se(n,0,a,r);return}var i=Wt(e.d,r.d);i&&se(n,4,a,i),t(e,r,n,a)}function Wt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Wt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Av(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Bv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?se(n,6,a,{v:l,i:c-l}):c<l&&se(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ie(s,i[v],n,++a),a+=s.b||0}}function Ev(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],g=u[m],C=h.a,w=g.a,_=h.b,x=g.b,D=void 0,I=void 0;if(C===w){f++,Ie(_,x,t,f),f+=_.b||0,d++,m++;continue}var W=l[d+1],R=u[m+1];if(W){var G=W.a,Z=W.b;I=w===G}if(R){var V=R.a,Y=R.b;D=C===V}if(D&&I){f++,Ie(_,Y,t,f),un(i,t,C,x,m,c),f+=_.b||0,f++,vn(i,t,C,Z,f),f+=Z.b||0,d+=2,m+=2;continue}if(D){f++,un(i,t,w,x,m,c),Ie(_,Y,t,f),f+=_.b||0,d+=1,m+=2;continue}if(I){f++,vn(i,t,C,_,f),f+=_.b||0,f++,Ie(Z,x,t,f),f+=Z.b||0,d+=2,m+=1;continue}if(W&&G===V){f++,vn(i,t,C,_,f),un(i,t,w,x,m,c),f+=_.b||0,f++,Ie(Z,Y,t,f),f+=Z.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;vn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var q=q||[],g=u[m];un(i,t,g.a,g.b,void 0,q),m++}(t.length>0||c.length>0||q)&&se(n,8,a,{w:t,x:c,y:q})}var Ri="_elmW6BL";function un(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}un(e,r,n+Ri,a,t,i)}function vn(e,r,n,a,t){var i=e[n];if(!i){var c=se(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),se(r,9,t,{w:l,A:i});return}vn(e,r,n+Ri,a,t)}function ji(e,r,n,a){$n(e,r,n,0,0,r.b,a)}function $n(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)ji(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&$n(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&$n(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return $n(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,C=0;C<h.length;C++){t++;var w=m===1?h[C]:h[C].b,_=t+(w.b||0);if(t<=u&&u<=_&&(a=$n(g[C],w,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Ni(e,r,n,a){return n.length===0?e:(ji(e,r,n,a),Qn(e,n))}function Qn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Vv(t,a);t===e&&(e=i)}return e}function Vv(e,r){switch(r.$){case 0:return Rv(e,r.s,r.u);case 4:return ct(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Qn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(yr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Qn(e,i.w),e;case 8:return jv(e,r);case 5:return r.s(e);default:en(10)}}function Rv(e,r,n){var a=e.parentNode,t=yr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function jv(e,r){var n=r.s,a=Nv(n.y,r);e=Qn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:yr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Rt(e,a),e}function Nv(e,r){if(!!e){for(var n=fr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Rt(n,i.c===2?i.s:yr(i.z,r.u))}return n}}function Gt(e){if(e.nodeType===3)return it(e.textContent);if(e.nodeType!==1)return it("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(zr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=tr(Gt(v[a]),u);return p(gr,l,r,u)}function Wv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Gv=B(function(e,r,n,a){return Vt(r,a,e.e7,e.fT,e.fM,function(t,i){var c=e.fV,l=a.node,u=Gt(l);return Wi(i,function(v){var s=c(v),d=Vi(u,s);l=Ni(l,u,d,t),u=s})})});B(function(e,r,n,a){return Vt(r,a,e.e7,e.fT,e.fM,function(t,i){var c=e.cX&&e.cX(t),l=e.fV,u=fr.title,v=fr.body,s=Gt(v);return Wi(i,function(d){Xn=c;var m=l(d),f=gr("body")(T)(m.eB),h=Vi(s,f);v=Ni(v,s,h,t),s=f,Xn=0,u!==m.fQ&&(fr.title=u=m.fQ)})})});var Kn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Wi(e,r){r(e);var n=0;function a(){n=n===1?0:(Kn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Kn(a),n=2)}}$(function(e,r){return o(eo,Qt,br(function(){r&&history.go(r),e()}))});$(function(e,r){return o(eo,Qt,br(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(eo,Qt,br(function(){history.replaceState({},"",r),e()}))});var Hv={addEventListener:function(){},removeEventListener:function(){}},Zv=typeof window<"u"?window:Hv;y(function(e,r,n){return ki(br(function(a){function t(i){Bt(n(i))}return e.addEventListener(r,t,Nt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return Ze(n)?ee(n.a):J});function Gi(e,r){return br(function(n){Kn(function(){var a=document.getElementById(e);n(a?Er(r(a)):ev(mf(e)))})})}function Iv(e){return br(function(r){Kn(function(){r(Er(e()))})})}$(function(e,r){return Gi(r,function(n){return n[e](),wn})});$(function(e,r){return Iv(function(){return Zv.scroll(e,r),wn})});y(function(e,r,n){return Gi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,wn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Ov=$(function(e,r){var n="g";e.fm&&(n+="m"),e.eD&&(n+="i");try{return ee(new RegExp(r,n))}catch{return J}});$(function(e,r){return r.match(e)!==null});var Uv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ee(d):J}a.push(P(Ec,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ee(v):J}return n(P(Ec,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Jv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/qv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function qv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ht=new Float64Array(3),Vo=new Float64Array(3),Ro=new Float64Array(3),Yv=y(function(e,r,n){return new Float64Array([e,r,n])}),Xv=function(e){return e[0]},Qv=function(e){return e[1]},Kv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var e$=function(e){return new Float64Array([e.fZ,e.f1,e.da])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Hi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Hi);function Zi(e,r,n){return n===void 0&&(n=new Float64Array(3)),ea(Hi(e,r,n),n)}$(Zi);function Ii(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ea(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Ii(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var r$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),fn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(fn);function lt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(lt);$(function(e,r){var n,a=Ht,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=fn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(fn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(fn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(fn(r,a)+e[14])/n,t});var n$=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var a$=function(e){return{fZ:e[0],f1:e[1],da:e[2],et:e[3]}},t$=function(e){return new Float64Array([e.fZ,e.f1,e.da,e.et])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/o$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function o$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var i$=new Float64Array(16),c$=new Float64Array(16),l$=function(e){var r=new Float64Array(16);return r[0]=e.dC,r[1]=e.dG,r[2]=e.dK,r[3]=e.dO,r[4]=e.dD,r[5]=e.dH,r[6]=e.dL,r[7]=e.dP,r[8]=e.dE,r[9]=e.dI,r[10]=e.dM,r[11]=e.dQ,r[12]=e.dF,r[13]=e.dJ,r[14]=e.dN,r[15]=e.dR,r},u$=function(e){return{dC:e[0],dG:e[1],dK:e[2],dO:e[3],dD:e[4],dH:e[5],dL:e[6],dP:e[7],dE:e[8],dI:e[9],dM:e[10],dQ:e[11],dF:e[12],dJ:e[13],dN:e[14],dR:e[15]}};function Oi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(Oi);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Oi(c,l,i,t,n,a)});function Ui(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(Ui);B(function(e,r,n,a){return Ui(e,r,n,a,-1,1)});function Ji(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],g=e[12],C=e[13],w=e[14],_=e[15],x=r[0],D=r[1],I=r[2],W=r[3],R=r[4],G=r[5],Z=r[6],V=r[7],Y=r[8],q=r[9],te=r[10],ce=r[11],ae=r[12],ue=r[13],Pe=r[14],_e=r[15];return n[0]=a*x+l*D+d*I+g*W,n[1]=t*x+u*D+m*I+C*W,n[2]=i*x+v*D+f*I+w*W,n[3]=c*x+s*D+h*I+_*W,n[4]=a*R+l*G+d*Z+g*V,n[5]=t*R+u*G+m*Z+C*V,n[6]=i*R+v*G+f*Z+w*V,n[7]=c*R+s*G+h*Z+_*V,n[8]=a*Y+l*q+d*te+g*ce,n[9]=t*Y+u*q+m*te+C*ce,n[10]=i*Y+v*q+f*te+w*ce,n[11]=c*Y+s*q+h*te+_*ce,n[12]=a*ae+l*ue+d*Pe+g*_e,n[13]=t*ae+u*ue+m*Pe+C*_e,n[14]=i*ae+v*ue+f*Pe+w*_e,n[15]=c*ae+s*ue+h*Pe+_*_e,n}$(Ji);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],g=r[0],C=r[1],w=r[2],_=r[4],x=r[5],D=r[6],I=r[8],W=r[9],R=r[10],G=r[12],Z=r[13],V=r[14];return n[0]=a*g+c*C+v*w,n[1]=t*g+l*C+s*w,n[2]=i*g+u*C+d*w,n[3]=0,n[4]=a*_+c*x+v*D,n[5]=t*_+l*x+s*D,n[6]=i*_+u*x+d*D,n[7]=0,n[8]=a*I+c*W+v*R,n[9]=t*I+l*W+s*R,n[10]=i*I+u*W+d*R,n[11]=0,n[12]=a*G+c*Z+v*V+m,n[13]=t*G+l*Z+s*V+f,n[14]=i*G+u*Z+d*V+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ea(r,Ht);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Ii(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,g=i*l*v,C=c*l*v,w=i*i*v+u,_=h+f,x=g-m,D=h-f,I=c*c*v+u,W=C+d,R=g+m,G=C-d,Z=l*l*v+u,V=n[0],Y=n[1],q=n[2],te=n[3],ce=n[4],ae=n[5],ue=n[6],Pe=n[7],_e=n[8],_r=n[9],Cr=n[10],Ta=n[11],ql=n[12],Yl=n[13],Xl=n[14],Ql=n[15];return a[0]=V*w+ce*_+_e*x,a[1]=Y*w+ae*_+_r*x,a[2]=q*w+ue*_+Cr*x,a[3]=te*w+Pe*_+Ta*x,a[4]=V*D+ce*I+_e*W,a[5]=Y*D+ae*I+_r*W,a[6]=q*D+ue*I+Cr*W,a[7]=te*D+Pe*I+Ta*W,a[8]=V*R+ce*G+_e*Z,a[9]=Y*R+ae*G+_r*Z,a[10]=q*R+ue*G+Cr*Z,a[11]=te*R+Pe*G+Ta*Z,a[12]=ql,a[13]=Yl,a[14]=Xl,a[15]=Ql,a});function v$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(v$);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function $$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y($$);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],g=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=g,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],g=r[9],C=r[10],w=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=g,n[10]=C,n[11]=w,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+C*i+r[14],n[15]=v*a+f*t+w*i+r[15],n});y(function(e,r,n){var a=Zi(e,r,Ht),t=ea(lt(n,a,Vo),Vo),i=ea(lt(a,t,Ro),Ro),c=i$,l=c$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Ji(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var jo=0;function bn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var f$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},s$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),d$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),m$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),p$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),b$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),g$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),h$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),_$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),C$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),y$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},w$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},L$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},S$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},qi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Yi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},x$=function(e){e.gl.disable(e.gl.CULL_FACE)},P$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},T$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},z$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},No=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],M$=[w$,L$,S$,qi,Yi,x$,P$,T$,z$];function Wo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function k$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Xi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function D$(e,r,n,a){for(var t=n.a.dj,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,C,w){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?C[w]:C[w][_];else i.forEach(function(x){for(_=0;_<h;_++)f[g++]=h===1?C[x][w]:C[x][w][_]})}var u=Xi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Zt(n.b)*s);bn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function A$(e,r){if(r.a.ds>0){var n=e.createBuffer(),a=F$(r.c,r.a.ds);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dj*Zt(r.b),indexBuffer:null,buffers:{}}}function F$(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return bn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Go(e,r){return e+"#"+r}var Qi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),qi(n),Yi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Go(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=jo++,v||(v=Wo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=jo++,s||(s=Wo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=k$(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=B$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Go(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),E$(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=A$(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=D$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var C=Xi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var w=C.size*4,_=w*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(h+x),a.vertexAttribPointer(h+x,C.size,C.baseType,!1,_,w*x)}for(n.toggle=!n.toggle,bn(H0(n),i.a),u=0;u<No.length;u++){var D=n[No[u]];D.toggle!==n.toggle&&D.enabled&&(M$[u](n),D.enabled=!1,D.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.d_,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d_,0,g.numIndices)}}return bn(t,e.g),r});function B$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,C=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(C,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(C,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var w=c++;return function(_){e.activeTexture(e.TEXTURE0+w);var x=l.textures.get(_);x||(x=_.eJ(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[g]!==_&&(e.uniform1i(C,w),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function E$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var V$=y(function(e,r,n){return hv(r,{g:n,f:{},h:e},Z$,I$)}),R$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),j$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),N$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),W$=$(function(e,r){e.contextAttributes.antialias=!0}),G$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),H$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Z$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};bn(function(t){return o(G0,r,t)},e.h);var n=fr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),f$(function(){return o(Qi,e,n)})):(n=fr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function I$(e,r){return r.f=e.f,Qi(r)}var F=lu,Dn=ou;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Dn,e,l,v)}else{var u=c.a;return p(Dn,i,l,u)}});return p(Dn,i,p(Dn,e,r,t),a)});var It=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(It,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ho=function(e){return p(It,y(function(r,n,a){return o(F,S(r,n),a)}),T,e)},Ki=1,O$=2,ec=0,pe=function(e){return{$:1,a:e}},Ot=$(function(e,r){return{$:3,a:e,b:r}}),Zo=$(function(e,r){return{$:0,a:e,b:r}}),rc=$(function(e,r){return{$:1,a:e,b:r}}),ie=function(e){return{$:0,a:e}},U$=function(e){return{$:2,a:e}},ee=function(e){return{$:0,a:e}},J={$:1},J$=Fu,q$=Ku,ze=Ti,Dr=$(function(e,r){return o(ku,e,pa(r))}),Ut=$(function(e,r){return b(o(Mu,e,r))}),nc=function(e){return o(Dr,`
    `,o(Ut,`
`,e))},Ln=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Br=function(e){return p(Ln,$(function(r,n){return n+1}),0,e)},Y$=uu,X$=y(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(F,r,n);e=a,r=t,n=i;continue e}else return n}),Jt=$(function(e,r){return p(X$,e,r,T)}),ac=$(function(e,r){return p(Y$,e,o(Jt,0,Br(r)-1),r)}),er=Wu,tc=function(e){var r=er(e);return 97<=r&&r<=122},oc=function(e){var r=er(e);return r<=90&&65<=r},Q$=function(e){return tc(e)||oc(e)},K$=function(e){var r=er(e);return r<=57&&48<=r},ef=function(e){return tc(e)||oc(e)||K$(e)},ke=function(e){return p(Ln,F,T,e)},rn=xu,rf=$(function(e,r){return`

(`+(ze(e+1)+(") "+nc(nf(r))))}),nf=function(e){return o(af,e,T)},af=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=rn(n);if(g.$===1)return!1;var C=g.a,w=C.a,_=C.b;return Q$(w)&&o(J$,ef,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(F,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(ze(i)+"]"),u=c,v=o(F,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Dr,"",ke(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(ze(Br(s))+" ways:"));return o(Dr,`

`,o(F,h,o(ac,rf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Dr,"",ke(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Dr,"",ke(r))+`:

    `):`Problem with the given value:

`}();return h+(nc(o(q$,4,f))+(`

`+m))}}),De=32,ut=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),vt=eu,ic=hu,qt=$(function(e,r){return zo(r)/zo(e)}),tf=bu,gn=ic(o(qt,2,De)),cc=P(ut,0,gn,vt,vt),lc=nu,uc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var of=_u,$t=ru,mr=$(function(e,r){return U(e,r)>0?e:r}),cf=function(e){return{$:0,a:e}},Yt=au,lf=$(function(e,r){e:for(;;){var n=o(Yt,De,e),a=n.a,t=n.b,i=o(F,cf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ke(i)}}),uf=function(e){var r=e.a;return r},vf=$(function(e,r){e:for(;;){var n=ic(r/De);if(n===1)return o(Yt,De,e).a;var a=o(lf,e,T),t=n;e=a,r=t;continue e}}),vc=$(function(e,r){if(r.l){var n=r.l*De,a=of(o(qt,De,n-1)),t=e?ke(r.y):r.y,i=o(vf,t,r.l);return P(ut,$t(r.o)+n,o(mr,5,a*gn),i,r.o)}else return P(ut,$t(r.o),gn,vt,r.o)}),$f=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(vc,!1,{y:a,l:n/De|0,o:t});var i=uc(p(lc,De,r,e)),c=e,l=r-De,u=n,v=o(F,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ff=$(function(e,r){if(e<=0)return cc;var n=e%De,a=p(lc,n,e-n,r),t=e-n-De;return L($f,r,t,e,T,a)}),Ze=function(e){return!e.$},M=qu,X=Zu,z=Ju,le=Iu,ra=Yu,sf=Xu,Te=Hu,Xt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=gr("div"),df=function(e){return{$:2,a:e}},$c=$(function(e,r){return e}),fc=$(function(e,r){return{bB:r.bB,eH:e,cd:r.cd,eQ:r.eQ,fd:r.fd,cO:r.cO,b_:r.b_,fW:r.fW}}),rr=function(e){return e},mf=rr,Io=We(function(e,r,n,a,t,i){return{$7:i,dq:r,d2:a,d5:n,d8:e,d9:t}}),pf=Bu,Ar=Pu,Zr=Du,Sn=$(function(e,r){return e<1?r:p(Zr,e,Ar(r),r)}),ba=Vu,ga=function(e){return e===""},ha=$(function(e,r){return e<1?"":p(Zr,0,e,r)}),sc=Ru,Oo=he(function(e,r,n,a,t){if(ga(t)||o(pf,"@",t))return J;var i=o(ba,":",t);if(i.b){if(i.b.b)return J;var c=i.a,l=sc(o(Sn,c+1,t));if(l.$===1)return J;var u=l;return ee(me(Io,e,o(ha,c,t),u,r,n,a))}else return ee(me(Io,e,t,J,r,n,a))}),Uo=B(function(e,r,n,a){if(ga(a))return J;var t=o(ba,"/",a);if(t.b){var i=t.a;return L(Oo,e,o(Sn,i,a),r,n,o(ha,i,a))}else return L(Oo,e,"/",r,n,a)}),Jo=y(function(e,r,n){if(ga(n))return J;var a=o(ba,"?",n);if(a.b){var t=a.a;return P(Uo,e,ee(o(Sn,t+1,n)),r,o(ha,t,n))}else return P(Uo,e,J,r,n)});$(function(e,r){if(ga(r))return J;var n=o(ba,"#",r);if(n.b){var a=n.a;return p(Jo,e,ee(o(Sn,a+1,r)),o(ha,a,r))}else return p(Jo,e,J,r)});var bf=Eu,Qt=function(e){},xn=Er,gf=xn(0),dc=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Ln,e,r,ke(d)):P(dc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),hr=y(function(e,r,n){return P(dc,e,r,0,n)}),fe=$(function(e,r){return p(hr,$(function(n,a){return o(F,e(n),a)}),T,r)}),na=ot,Kt=$(function(e,r){return o(na,function(n){return xn(e(n))},r)}),hf=y(function(e,r,n){return o(na,function(a){return o(na,function(t){return xn(o(e,a,t))},n)},r)}),_f=function(e){return p(hr,hf(F),xn(T),e)},Cf=lv,yf=$(function(e,r){var n=r;return ki(o(na,Cf(e),n))}),wf=y(function(e,r,n){return o(Kt,function(a){return 0},_f(o(fe,yf(e),r)))}),Lf=y(function(e,r,n){return xn(0)}),Sf=$(function(e,r){var n=r;return o(Kt,e,n)});Ke.Task=iv(gf,wf,Lf,Sf);var xf=Ai("Task"),eo=$(function(e,r){return xf(o(Kt,e,r))}),Pf=Gv,Tf=Lu,aa={$:1},mc=function(e){return{$:2,a:e}},_a={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),K=y(function(e,r,n){return r(e(n))}),nn=function(e){var r=e.b.A;return r.a},zf=function(e){var r=e.a,n=e.b.S,a=e.b.A,t=e.b.aa;if(t.b){var i=t.a,c=t.b;return ee(o(Ne,r,{A:i,aa:c,S:o(F,a,n)}))}else return J},pc=function(e){var r=e.b;return o(Ne,_a,r)},or=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Mf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cO.di?pc(n):n;case 2:var i=a.a.c0;return(U(i+r.eQ,nn(n).bB)>0?o(K,zf,or(o(Ne,aa,t))):rr)(o(Ne,mc({c0:i+r.eQ}),t));default:var c=t.A,l=c.a,u=c.b,v=o(fc,l.eH,je(r,{bB:l.bB+r.eQ})),s=o(e,v,u);return o(Ne,_a,{A:S(v,s),aa:T,S:o(F,t.A,t.S)})}}),bc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),kf=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(F,a,n);e=i,r=c,n=l;continue e}else return n}}),Df=$(function(e,r){return ke(p(kf,e,r,T))}),gc=y(function(e,r,n){if(r<=0)return T;{var a=S(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,g=h.a,C=h.b;return e>1e3?o(F,_,o(F,c,o(F,s,o(F,g,o(Df,r-4,C))))):o(F,_,o(F,c,o(F,s,o(F,g,p(gc,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var w=a.b,_=w.a;return b([_])}}),Af=$(function(e,r){return p(gc,0,e,r)}),Ff=$(function(e,r){var n=r.b.S,a=r.b.A,t=r.b.aa,i=oe(ke(n),oe(b([a]),t)),c=o(Af,e,i),l=o(bc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,aa,{A:u,aa:v,S:ke(c)})}else{var s=ke(c);if(s.b){var d=s.a,m=s.b;return o(Ne,aa,{A:d,aa:T,S:m})}else return r}}),Bf=function(e){var r=e.b;return o(Ne,aa,r)},Ef=function(e){var r=e.b;return o(Ne,mc({c0:nn(e).bB}),r)},Vf=$(function(e,r){switch(e.$){case 1:return Bf(r);case 2:return pc(r);case 3:return Ef(r);default:var n=e.a;return o(Ff,n,r)}}),hc=$(function(e,r){var n=r.a,a=r.b;return S(e(n),a)}),Rf=$(function(e,r){return je(r,{au:e(r.au)})}),jf=function(e){return{$:3,a:e}},_c=function(e){return{$:2,a:e}},Cc=$(function(e,r){return{$:0,a:e,b:r}}),Nf=$(function(e,r){return{$:1,a:e,b:r}}),be=$(function(e,r){if(r.$)return J;var n=r.a;return ee(e(n))}),Q=function(e){return e<0?-e:e},ro=ju,Wf=y(function(e,r,n){return o(or,0/0,ro(o(e,r,n)))}),no=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Gf=zu,yc=function(e){return p(Gf,F,T,e)},Hf=$(function(e,r){var n=o(no,function(a){return a!=="0"&&a!=="."},yc(r));return oe(e&&n?"-":"",r)}),ne=Ti,ft=Su,wc=Gu,Lc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=rn(n);if(a.$===1)return"01";var t=a.a;return o(ft,"0",Lc(t))}else{var i=er(r);return i>=48&&i<57?o(ft,wc(i+1),n):"0"}},st=gu,Zf=wu,Ca=function(e){return o(ft,e,"")},Sc=y(function(e,r,n){return e<=0?n:p(Sc,e>>1,oe(r,r),e&1?oe(n,r):n)}),hn=$(function(e,r){return p(Sc,e,r,"")}),dt=y(function(e,r,n){return oe(n,o(hn,e-Ar(n),Ca(r)))}),mt=Tu,xc=function(e){var r=o(Ut,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return S(n,t)}else{var n=r.a;return S(n,"0")}else return S("0","0")},If=function(e){var r=o(Ut,"e",ne(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(or,0,sc(o(bf,"+",t)?o(Sn,1,t):t)),c=xc(n),l=c.a,u=c.b,v=oe(l,u),s=i<0?o(or,"0",o(be,function(d){var m=d.a,f=d.b;return m+("."+f)},o(be,hc(Ca),rn(oe(o(hn,Q(i),"0"),v))))):p(dt,i+1,"0",v);return oe(e<0?"-":"",s)}else{var n=r.a;return oe(e<0?"-":"",n)}else return""},Of=y(function(e,r,n){if(st(n)||Zf(n))return ne(n);var a=n<0,t=xc(If(Q(n))),i=t.a,c=t.b,l=Ar(i)+r,u=oe(o(hn,-l+1,"0"),p(dt,l,"0",oe(i,c))),v=Ar(u),s=o(mr,1,l),d=o(e,a,p(Zr,s,v,u)),m=p(Zr,0,s,u),f=d?mt(o(or,"1",o(be,Lc,rn(mt(m))))):m,h=Ar(f),g=f==="0"?f:r<=0?oe(f,o(hn,Q(r),"0")):U(r,Ar(c))<0?p(Zr,0,h-r,f)+("."+p(Zr,h-r,h,f)):oe(i+".",p(dt,r,"0",c));return o(Hf,a,g)}),Pc=Of($(function(e,r){var n=rn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Uf=Wf(Pc),Jf=y(function(e,r,n){var a=o(qt,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Uf,t,n)}),Tc=cu,ya=$(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Tc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ee(a);default:var l=e,u=i;e=l,r=u;continue e}}}),E=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},Yr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return L(E,0,r,n,L(E,1,v,s,d,m),L(E,1,i,c,l,u))}else return L(E,e,i,c,L(E,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,C=f.d,w=f.e,m=a.e;return L(E,0,v,s,L(E,1,h,g,C,w),L(E,1,r,n,m,t))}else return L(E,e,r,n,a,t)}),pt=y(function(e,r,n){if(n.$===-2)return L(E,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Tc,e,t);switch(u){case 0:return L(Yr,a,t,i,p(pt,e,r,c),l);case 1:return L(E,a,t,r,c,l);default:return L(Yr,a,t,i,c,p(pt,e,r,l))}}),dn=y(function(e,r,n){var a=p(pt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return L(E,1,t,i,c,l)}else{var u=a;return u}}),qf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},zc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,g=m.d,C=m.e,w=v.e;return L(E,0,f,h,L(E,1,n,a,L(E,0,i,c,l,u),g),L(E,1,s,d,C,w))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var s=x.b,d=x.c,m=x.d,w=x.e;return L(E,1,n,a,L(E,0,i,c,l,u),L(E,0,s,d,m,w))}else return e},qo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,g=f.c,C=f.d,w=f.e;return L(E,0,i,c,L(E,1,u,v,s,d),L(E,1,n,a,m,L(E,0,h,g,C,w)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,m=_.e,D=e.e;D.a;var h=D.b,g=D.c,C=D.d,w=D.e;return L(E,1,n,a,L(E,0,i,c,x,m),L(E,0,h,g,C,w))}else return e},Yf=Dt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return L(E,n,l,u,v,L(E,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,qo(r)}else break e;else return c.a,c.d,qo(r);else break e;return r}}),Hn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(E,r,n,a,Hn(t),l);var u=zc(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return L(Yr,v,s,d,Hn(m),f)}else return ir}else return L(E,r,n,a,Hn(t),l)}else return ir},mn=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(E,n,a,t,o(mn,e,i),c);var u=zc(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return L(Yr,v,s,d,o(mn,e,m),f)}else return ir}else return L(E,n,a,t,o(mn,e,i),c);else return o(Xf,e,Pi(Yf,e,r,n,a,t,i,c))}),Xf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Oe(e,a)){var l=qf(c);if(l.$===-1){var u=l.b,v=l.c;return L(Yr,n,u,v,i,Hn(c))}else return ir}else return L(Yr,n,a,t,i,o(mn,e,c))}else return ir}),Qf=$(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return L(E,1,a,t,i,c)}else{var l=n;return l}}),An=y(function(e,r,n){var a=r(o(ya,e,n));if(a.$)return o(Qf,e,n);var t=a.a;return p(dn,e,t,n)}),Kf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(An,r,be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Nf,S(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(An,r,be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Cc,S(i,c),p(Jf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(An,r,be(function(a){return a.$===3?jf(n):a}));default:var r=e.a,n=e.b;return o(An,r,be(function(a){return a.$===2?_c(n):a}))}},es=function(e){return Rf(Kf(e))},rs=$(function(e,r){return o(fe,es(e),r)}),ns=$(function(e,r){return je(r,{eH:o(rs,e,r.eH)})}),as=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,je(a,{A:o(hc,ns(e),a.A)}))}),ts=$(function(e,r){var n=r.a,a=r.b;return S(n,e(a))}),os=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ne,a,je(t,{A:o(ts,o(e,i.a,r),i)}))}),is=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return je(a,{aL:!a.aL});case 2:var t=n.a;return je(a,{F:p(Mf,e,t,a.F)});case 3:var i=n.a;return je(a,{F:o(as,i,a.F)});case 4:var c=n.a;return je(a,{F:p(os,r,c,a.F)});default:var l=n.a;return je(a,{F:o(Vf,l,a.F)})}}),cs=$(function(e,r){return o(Ne,_a,{A:S(e,r(e)),aa:T,S:T})}),ls=uv,Yo=ls(T),ta=Uu,_n=Ou,us=dv("tick",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return Te({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fW:e})},o(z,"clock",le))},o(z,"devicePixelRatio",le))},o(z,"dt",le))},o(z,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(d){return Te({ev:d,eI:s,di:v,eP:u,fe:l,fy:c,fC:i,fH:t,eo:a})},o(z,"alt",X))},o(z,"control",X))},o(z,"down",X))},o(z,"downs",ta(_n)))},o(z,"left",X))},o(z,"pressedKeys",ta(_n)))},o(z,"right",X))},o(z,"shift",X))},o(z,"up",X))))},o(z,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return Te({di:v,dt:u,fj:l,fD:c,fE:i,eo:t,fZ:a,f1:n})},o(z,"down",X))},o(z,"isDown",X))},o(z,"move",X))},o(z,"rightDown",X))},o(z,"rightUp",X))},o(z,"up",X))},o(z,"x",le))},o(z,"y",le))))},o(z,"screen",o(M,function(r){return o(M,function(n){return Te({e1:n,fX:r})},o(z,"height",le))},o(z,"width",le))))},o(z,"wheel",o(M,function(e){return o(M,function(r){return Te({eL:r,eM:e})},o(z,"deltaX",le))},o(z,"deltaY",le))))),vs=function(e){return{$:4,a:e}},$s={$:0},fs=Mi,Ge=$(function(e,r){return o(Ei,e,fs(r))}),N=Ge("className"),ss=function(e){var r=e.b.A;return r.b},oa=Ge("id"),ds=_v,ia=ds,ms=Cv,re=ms,ps={$:1},bs=function(e){return{$:3,a:e}},gs=function(e){return{$:5,a:e}},Xo=gr("a"),ao=gr("button"),Qo=function(e){return o(Ge,"href",Lv(e))},hs=zr("clip-rule"),Ce=zr("d"),_s=zr("fill"),Mc=Fi("http://www.w3.org/2000/svg"),Cs=Mc("svg"),ys=zr("viewBox"),ws=o(yv,"http://www.w3.org/XML/1998/namespace","xml:space"),Be=Cs(b([ys("0 0 24 24"),_s("currentColor"),o(re,"width","100%"),o(re,"height","100%"),ws("http://www.w3.org/2000/svg")])),Ls=zr("fill-rule"),ye=Mc("path"),Fr={eK:Be(b([o(ye,b([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eX:Be(b([o(ye,b([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),e0:Be(b([o(ye,b([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fk:Be(b([o(ye,b([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(ye,b([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),fl:Be(b([o(ye,b([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(ye,b([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fv:Be(b([o(ye,b([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fw:Be(b([o(ye,b([Ce("M7 5V19L18 12L7 5Z")]),T)])),fx:Be(b([o(ye,b([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),cO:Be(b([o(ye,b([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fR:Be(b([o(ye,b([Ls("evenodd"),hs("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fS:Be(b([o(ye,b([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f5:Be(b([o(ye,b([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},Ss=function(e){return{$:0,a:e}},kc=Bi,Dc=$(function(e,r){return o(kc,e,Ss(r))}),to=function(e){return o(Dc,"click",Te(e))},Ko=Ge("target"),xs=Ge("title"),bt=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return L(E,n,a,o(e,a,t),o(bt,e,i),o(bt,e,c))}),Ps=it,Me=Ps,Ts=function(e){return p(It,y(function(r,n,a){return o(F,n,a)}),T,e)},zs=$(function(e,r){return{$:3,a:e,b:r}}),Ms=$(function(e,r){return{$:2,a:e,b:r}}),ks=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),wa=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),oo=P(wa,0/255,0/255,0/255,1),As=Mi,Ac=$(function(e,r){return o(Ei,e,As(r))}),Fs=Ac("checked"),Fe=Cu,Bs=y(function(e,r,n){return oe(o(hn,e-Ar(n),Ca(r)),n)}),Es=$u,Fc=function(e){var r=function(n){return n<10?ze(n):Ca(wc(87+n))};return e<16?r(e):oe(Fc(e/16|0),r(o(Es,16,e)))},Vs=o(K,Fc,o(Bs,2,"0")),Bc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b8:a,cf:n,cR:r}},Rs=function(e){var r=Bc(e),n=r.cR,a=r.cf,t=r.b8;return o(Dr,"",o(F,"#",o(fe,o(K,Fe,Vs),b([n*255,a*255,t*255]))))},gt=Ge("htmlFor"),js=$(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),ca=$(function(e,r){if(r.$){var a=r.a;return pe(a)}else{var n=r.a;return e(n)}}),Ns=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(F,t,n)}),Pn=$(function(e,r){return p(hr,Ns(e),T,r)}),Ec=B(function(e,r,n,a){return{e6:r,fh:e,fq:n,fL:a}}),Ws=Uv,Gs=Nu,Hs=$(function(e,r){if(r.$)return pe(e);var n=r.a;return ie(n)}),Zs=Ov,Is=function(e){return o(Zs,{eD:!1,fm:!1},e)},an=function(e){if(e.b){var r=e.a;return e.b,ee(r)}else return J},Os=$(function(e,r){if(r.$){var a=r.a;return pe(a)}else{var n=r.a;return ie(e(n))}}),Us=function(e){return{$:2,a:e}},Js=function(e){return{$:0,a:e}},qs=function(e){return{$:1,a:e}},ka=$(function(e,r){return er(r)-er(e)}),Da=y(function(e,r,n){var a=er(n);return U(er(e),a)<1&&U(a,er(r))<1}),Ys=$(function(e,r){var n=function(t){return U(t,e)<0?ie(t):pe(qs(r))},a=p(Da,"0","9",r)?ie(o(ka,"0",r)):p(Da,"a","z",r)?ie(10+o(ka,"a",r)):p(Da,"A","Z",r)?ie(10+o(ka,"A",r)):pe(Js(r));return o(ca,n,a)}),Vc=$(function(e,r){var n=rn(r);if(n.$===1)return ie(0);var a=n.a,t=a.a,i=a.b;return o(ca,function(c){return o(ca,function(l){return ie(c+l*e)},o(Vc,e,i))},o(Ys,e,t))}),Xs=$(function(e,r){return 2<=e&&e<=36?o(Vc,e,mt(r)):pe(Us(e))}),Qs=Xs(16),Ks=y(function(e,r,n){return P(wa,e,r,n,1)}),Rc=B(function(e,r,n,a){return P(wa,e,r,n,a)}),Tn=vu,ed=$(function(e,r){var n=o(Tn,10,e);return Fe(r*n)/n}),rd=Au,nd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=yc(n);if(a.b&&!a.b.b){var t=a.a;return Gs(b([t,t]))}else return n};return o(K,rd,o(K,function(n){return o(be,function(a){return p(Ws,1,a,n)},Is(e))},o(K,js(an),o(K,be(function(n){return n.fL}),o(K,be(Pn(rr)),o(K,Hs("Parsing hex regex failed"),ca(function(n){var a=o(fe,o(K,r,o(K,Qs,Os(tf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ie(P(Rc,t/255,c/255,u/255,o(ed,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ie(p(Ks,t/255,c/255,u/255))}else break e;return pe("Parsing ints from hex failed")})))))))}(),la=gr("input"),ht=gr("label"),_t=Ge("name"),jc=$(function(e,r){return p(hr,z,r,e)}),ad=o(jc,b(["target","checked"]),X),td=function(e){return o(Dc,"change",o(ra,e,ad))},od=function(e){return S(e,!0)},id=function(e){return{$:1,a:e}},cd=$(function(e,r){return o(kc,e,id(r))}),ld=o(jc,b(["target","value"]),_n),io=function(e){return o(cd,"input",o(ra,od,o(ra,e,ld)))},Nc=Ge("max"),Wc=Ge("min"),Gc=function(e){return o(Ge,"step",e)},ua=Ge("type"),co=Ge("value"),ei=function(e){var r=e.ci,n=e.c5,a=e.cy,t=e.cu,i=e.c_,c=e.cD;return o(O,T,b([o(ht,b([gt(r)]),b([o(O,b([N("relative w-full")]),b([o(O,b([N("inline-block")]),b([Me(r)])),o(O,b([N("inline-block float-right")]),b([Me(ne(n))]))]))])),o(la,b([ua("range"),o(re,"width","100%"),oa(r),_t(r),Wc(ne(a)),Nc(ne(t)),co(ne(n)),Gc(ne(i)),io(o(K,ro,o(K,or(42),c)))]),T)]))},ud=$(function(e,r){if(r.$)return e;var n=r.a;return n}),vd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,b([N("h-12 py-4")]),b([o(ht,b([N("block"),gt(e)]),b([o(la,b([N("relative bottom-[1px] align-middle mr-2"),ua("checkbox"),oa(e),_t(e),td(zs(e)),Fs(c)]),T),Me(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return ei({ci:e,cu:i,cy:t,cD:ks(e),c_:.01*(i-t),c5:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return ei({ci:e,cu:i,cy:t,cD:o(K,Fe,Ds(e)),c_:1,c5:c});default:var c=r.a;return o(O,T,b([o(O,b([o(re,"margin-bottom","6px")]),b([o(ht,b([gt(e)]),b([Me(e)]))])),o(la,b([ua("color"),o(re,"width","100%"),o(re,"height","26px"),o(re,"padding","0px"),oa(e),_t(e),io(function(l){return o(Ms,e,o(ud,oo,nd(l)))}),co(Rs(c))]),T)]))}}),$d=function(e){return o(O,b([N("p-4 border-y-[0.5px] border-white20")]),b([o(O,b([N("text-lg pb-2")]),b([Me(e.fn)])),o(O,b([N("pl-2 pr-2")]),Ts(o(bt,vd,e.au)))]))},fd=function(e){return o(O,b([N("text-xs text-white60")]),o(fe,$d,e))},sd=function(e){return o(O,b([N("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Me("clock: "+o(Pc,3,nn(e).bB))]))},dd=function(e){e.a;var r=e.b.S;return o(be,function(n){return Fe(60/(nn(e).bB-n))},o(be,o(K,uf,function(n){return n.bB}),an(o(bc,59,r))))},md=function(e){return o(O,b([N("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=dd(e);if(r.$===1)return b([Me("... Fps")]);var n=r.a;return b([Me(ze(n)+" Fps")])}())},pd=function(e){return{$:0,a:e}},bd=function(e){var r=e.b.S;return Br(r)},gd=function(e){var r=e.b.S;e.b.A;var n=e.b.aa;return Br(r)+1+Br(n)},hd=function(e){return o(la,b([N("absolute w-full"),ua("range"),Wc(ze(0)),Nc(ze(gd(e)-1)),co(ze(bd(e))),Gc(ze(1)),io(o(K,ro,o(K,or(42),o(K,Fe,pd))))]),T)},ri={$:1},ni={$:3},ai={$:2},Ct=function(e){return!e.b},Hc=Ac("disabled"),Aa=y(function(e,r,n){return o(ao,b([N("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),N(n),Hc(e),to(r)]),b([Me("REC")]))}),Fa=y(function(e,r,n){return o(ao,b([N("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Hc(e),to(n)]),b([o(O,b([N("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),_d=function(e){var r=e.a,n=e.b.aa;return o(O,b([N("py-1")]),b([function(){switch(r.$){case 0:return p(Aa,!1,ri,"text-red-500 font-bold");case 1:return p(Aa,!1,ai,"text-white60 hover:text-white80 font-bold");default:return p(Aa,!0,ai,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Fa,Ct(n),Fr.fw,ni);case 1:return p(Fa,Ct(n),Fr.fw,ni);default:return p(Fa,!1,Fr.fv,ri)}}()]))},Cd=function(e){return o(O,b([N("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([hd(e),_d(e),md(e),sd(e)]))},yd=function(e){var r=e.a;return Oe(r,_a)},wd=$(function(e,r){var n=yd(r.F)?o(O,T,T):o(O,b([N("absolute pointer-events-none w-8 h-8"),o(re,"left",ne(e.cO.fZ+.5*e.b_.fX)+"px"),o(re,"top",ne(-e.cO.f1+.5*e.b_.e1)+"px")]),b([o(O,b([N(e.cO.dt?"text-black80":"text-black40")]),b([Fr.cO]))]));return o(O,T,b([n]))}),Ld=$(function(e,r){var n=o(ao,b([N(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),to(ps),xs("Distraction Free Mode")]),b([Fr.f5])),a=40,t=260,i=o(O,b([N("absolute w-8 bottom-12")]),b([o(Xo,b([N("text-twitterBlue40 hover:text-twitterBlue"),Qo("https://twitter.com/AzizErkalSelman"),Ko("_blank")]),b([Fr.fS]))])),c=80,l=o(O,b([N("absolute w-8 bottom-2")]),b([o(Xo,b([N("text-githubCat40 hover:text-githubCat"),Qo("https://github.com/erkal/elm-3d-playground-exploration"),Ko("_blank")]),b([Fr.eX]))])),u=e.b_.fX>640?H(e.b_.e1,a+t,e.b_.fX-(a+t)):H(e.b_.e1-c,a,e.b_.fX-a),v=u.a,s=u.b,d=u.c;return r.aL?o(O,b([N("fixed w-10 h-10 p-1")]),b([n])):o(O,T,b([o(O,b([N("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(re,"width",ne(a)+"px")]),b([n,i,l])),o(O,b([N("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(re,"width",ne(t)+"px"),o(re,"height",ne(v)+"px")]),b([o(ia,bs,fd(nn(r.F).eH))])),o(O,b([N("absolute bottom-0"),o(re,"left",ne(s)+"px"),o(re,"height",ne(c)+"px"),o(re,"width",ne(d)+"px")]),b([o(ia,gs,Cd(r.F))])),o(wd,e,r)]))}),Sd=y(function(e,r,n){var a=ss(n.F),t=nn(n.F);return o(O,b([N("bg-black40"),N("select-none"),N("antialiased"),N("font-mono"),o(re,"width",ne(t.b_.fX)+"px"),o(re,"height",ne(t.b_.e1)+"px")]),b([o(O,b([N("fixed")]),b([o(ia,$c($s),o(e,t,a))])),o(O,b([oa("gui")]),b([o(Ld,t,n),o(ia,vs,o(r,t,a))]))]))}),xd=We(function(e,r,n,a,t,i){var c=$(function(u,v){return S(P(is,r,i,u,v),Yo)}),l=function(u){var v=o(fc,n,u.e8);return S({aL:u.e8.b_.fX<500,F:o(cs,v,a)},Yo)};return Pf({e7:l,fM:$c(us(df)),fT:c,fV:o(Sd,e,t)})}),Pd=B(function(e,r,n,a){return me(xd,e,r,n,a,$(function(t,i){return o(O,T,T)}),y(function(t,i,c){return c}))}),Zc={$:0},vr=$(function(e,r){return{$:0,a:e,b:r}}),we=$(function(e,r){return{$:0,a:e,b:r}}),Td=b([o(vr,S(-1,1),o(we,2,0)),o(vr,S(-1,0),o(we,2,0)),o(vr,S(-1,-1),o(we,2,0)),o(vr,S(0,-1),o(we,2,0)),o(vr,S(0,1),o(we,2,0)),o(vr,S(1,1),o(we,2,0)),o(vr,S(1,0),o(we,2,0)),o(vr,S(1,-1),o(we,2,0))]),zd=function(e){return{aB:Zc,bt:Td}},Ba=$(function(e,r){return S(e,_c(r))}),Md=y(function(e,r,n){return{au:n,fb:r,fn:e}}),Ic=ir,kd=function(e){return p(Ln,$(function(r,n){var a=r.a,t=r.b;return p(dn,a,t,n)}),Ic,e)},Dd=y(function(e,r,n){return p(Md,e,r,kd(n))}),Ea=Dd,Mr=y(function(e,r,n){var a=r.a,t=r.b;return S(e,o(Cc,S(a,t),n))}),He=fu,Va=function(e){return e/255},Ra=y(function(e,r,n){return P(wa,Va(e),Va(r),Va(n),1)}),Ad=b([p(Ea,"Camera",!0,b([p(Mr,"camera distance",S(3,20),10),p(Mr,"camera azimuth",S(-He,He),0),p(Mr,"camera elevation",S(-He/2,He/2),0)])),p(Ea,"Parameters",!0,b([p(Mr,"cubes side length",S(.5,1),.9),p(Mr,"duration of rolling animation",S(.1,1),.25)])),p(Ea,"Colors and light",!0,b([o(Ba,"color 1",p(Ra,244,88,67)),o(Ba,"color 2",p(Ra,47,41,43)),o(Ba,"board color",p(Ra,223,224,226)),p(Mr,"sunlight azimuth",S(-He,He),2),p(Mr,"sunlight elevation",S(-He,0),-2)]))]),Fd=$(function(e,r){return o(be,function(n){if(n.$)return 0;var a=n.b;return a},o(ya,e,r.au))}),Bd=$(function(e,r){return o(or,0,an(o(Pn,Fd(e),r)))}),Ed=$(function(e,r){return o(Bd,e,r.eH)}),sr=Ed,Vd=pu,Oc=function(e){return e},wr=function(e){return e},va=function(e){var r=e;return-r},Rd=$(function(e,r){var n=e,a=r;return{fZ:n.f1*a.da-n.da*a.f1,f1:n.da*a.fZ-n.fZ*a.da,da:n.fZ*a.f1-n.f1*a.fZ}}),Uc=function(e){var r=e;return r.c8},Jc=function(e){var r=e;return r.c9},jd=function(e){return o(Rd,Uc(e),Jc(e))},tn=function(e){var r=e;return r.cE},Xr=su,Qr=du,ja=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Xr(c),u=Qr(c),v=a.eO,s=v,d=s.fZ*u,m=l*d,f=d*d,h=s.f1*u,g=l*h,C=d*h,w=h*h,_=1-2*(f+w),x=s.da*u,D=l*x,I=2*(C-D),W=2*(C+D),R=d*x,G=2*(R+g),Z=2*(R-g),V=h*x,Y=2*(V-m),q=2*(V+m),te=x*x,ce=1-2*(w+te),ae=1-2*(f+te);return{fZ:ce*i.fZ+I*i.f1+G*i.da,f1:W*i.fZ+ae*i.f1+Y*i.da,da:Z*i.fZ+q*i.f1+_*i.da}}),Nd=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Xr(c),u=Qr(c),v=a.cE,s=v,d=i.fZ-s.fZ,m=i.f1-s.f1,f=i.da-s.da,h=a.eO,g=h,C=g.fZ*u,w=l*C,_=C*C,x=g.f1*u,D=l*x,I=C*x,W=x*x,R=1-2*(_+W),G=g.da*u,Z=l*G,V=2*(I-Z),Y=2*(I+Z),q=C*G,te=2*(q+D),ce=2*(q-D),ae=x*G,ue=2*(ae-w),Pe=2*(ae+w),_e=G*G,_r=1-2*(W+_e),Cr=1-2*(_+_e);return{fZ:s.fZ+_r*d+V*m+te*f,f1:s.f1+Y*d+Cr*m+ue*f,da:s.da+ce*d+Pe*m+R*f}}),on=function(e){return e},Vr=function(e){var r=e;return r.c8},Rr=function(e){var r=e;return r.c9},jr=function(e){var r=e;return r.db},Wd=y(function(e,r,n){return on({cE:p(Nd,e,r,tn(n)),c8:p(ja,e,r,Vr(n)),c9:p(ja,e,r,Rr(n)),db:p(ja,e,r,jr(n))})}),ti=y(function(e,r,n){return p(Wd,e(n),r,n)}),lo=function(e){var r=e;return r.eO},qc=$(function(e,r){var n=e,a=r;return{fZ:a.fZ+n.fZ,f1:a.f1+n.f1,da:a.da+n.da}}),Gd=$(function(e,r){return on({cE:o(qc,e,tn(r)),c8:Vr(r),c9:Rr(r),db:jr(r)})}),Hd=$(function(e,r){var n=e,a=r;return{fZ:n*a.fZ,f1:n*a.f1,da:n*a.da}}),Zd=y(function(e,r,n){return o(Gd,o(Hd,r,e),n)}),Id=y(function(e,r,n){return p(Zd,lo(e(n)),r,n)}),pr=$(function(e,r){return{eO:r,cE:e}}),Od=function(e){var r=e;return o(pr,r.cE,r.c8)},Ud=function(e){var r=e;return o(pr,r.cE,r.c9)},Jd=function(e){var r=e;return o(pr,r.cE,r.db)},qd=function(e){var r=on({cE:e.aR,c8:Jc(e.dp),c9:jd(e.dp),db:Uc(e.dp)}),n=p(Id,Jd,e.ce,p(ti,Od,va(e.bE),p(ti,Ud,e.by,r)));return n},Yd=function(e){return{$:0,a:e}},Se=function(e){var r=e;return Q(r)},Zn=function(e){var r=e;return .5*r},Xd=mu,Qd=function(e){var r=e;return Xd(r)},Kd=function(e){var r=Zn(Se(e.eq)),n=Qd(r);return{cQ:Yd(n),c6:e.c6}},nr=function(e){return e},cn={fZ:0,f1:0,da:0},em=rr,ar=function(e){return e},Yc=ar({fZ:1,f1:0,da:0}),uo=Yc,Xc=ar({fZ:0,f1:0,da:1}),zn=Xc,rm=em({cE:cn,c8:zn,c9:uo}),nm=function(e){var r=e.aR,n=e.by,a=e.bE,t=e.ce;return Kd({eq:nr(2*Vd(.5)),c6:qd({by:nr(n),ce:wr(t),bE:nr(a),aR:Oc(r),dp:rm})})},Qc=function(e){return nm({by:o(sr,"camera azimuth",e),ce:o(sr,"camera distance",e),bE:o(sr,"camera elevation",e),aR:{fZ:0,f1:0,da:0}})},am={$:0},vo=$(function(e,r){return p(hr,$(function(n,a){return e(n)?o(F,n,a):a}),T,r)}),tm={$:1},om=$(function(e,r){return{$:2,a:e,b:r}}),im=function(e){return no(function(r){var n=r.a;return Oe(e,n)})},cm=function(e){var r=e.a,n=e.b;return U(r,-1)>-1&&r<=1&&U(n,-1)>-1&&n<=1},lm=$(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return S(n,a+1);case 1:return S(n,a-1);case 2:return S(n-1,a);default:return S(n+1,a)}}),Kc=function(e){return e?0:1},Fn=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(we,r,n);case 1:return o(we,2,n);default:return o(we,1,Kc(n))}},Bn=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(we,2,Kc(n));case 1:return o(we,r,n);default:return o(we,0,n)}},um=function(e){switch(e){case 0:return o(K,Fn,o(K,Fn,Fn));case 1:return Fn;case 2:return o(K,Bn,o(K,Bn,Bn));default:return Bn}},vm=$(function(e,r){var n=r.a,a=r.b;return o(vr,o(lm,e,n),o(um,e,a))}),$m=$(function(e,r){var n=e.a,a=an(o(Pn,function(l){var u=o(vm,l,e),v=u.a;return o(im,v,r)||!cm(v)?J:ee(S(u,l))},b([0,1,2,3])));if(a.$===1)return tm;var t=a.a,i=t.a,c=t.b;return o(om,c,o(F,i,o(vo,function(l){var u=l.a;return!Oe(u,n)},r)))}),fm=$(function(e,r){var n=function(i){var c=i.a;return Oe(c,e)},a=an(o(vo,n,r));if(a.$===1)return am;var t=a.a;return o($m,t,r)}),sm=function(e){return{$:1,a:e}},dm=he(function(e,r,n,a,t){var i=t.aB;return i.$?t:je(t,{aB:sm({cz:a,ec:n,eh:r,cZ:e.bB})})}),mm=y(function(e,r,n){var a=e.fZ,t=e.f1,i=S(Fe(a),Fe(t)),c=o(fm,i,n.bt);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return L(dm,r,i,l,u,n)}}),pm=y(function(e,r,n){return{fZ:e,f1:r,da:n}}),bm=function(e){return nr(He*(e/180))},En=function(e){return e},In=function(e){var r=e;return r},gm=$(function(e,r){var n=e,a=r;return a.fZ*n.fZ+a.f1*n.f1+a.da*n.da}),Xe=$(function(e,r){var n=r;return e*n}),el=function(e){var r=e;return r.cE},hm=$(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.fp,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1+(a.da-i.da)*l.da}),_m=y(function(e,r,n){var a=e,t=r,i=n;return{fZ:i.fZ+t*a.fZ,f1:i.f1+t*a.f1,da:i.da+t*a.da}}),Cm=$(function(e,r){var n=lo(r),a=e,t=a.fp,i=o(gm,t,n);if(i){var c=el(r),l=o(hm,e,c),u=o(Xe,-1/i,l);return ee(p(_m,n,u,c))}else return J}),ym=$(function(e,r){return{fZ:e,f1:r}}),oi=$(function(e,r){var n=e,a=r;return n*a}),wm=function(e){var r=e;return r},ii=function(e){var r=e;return wm(r.ey)},Lm=function(e){var r=e;return r.aK},$o=yu,Sm=function(e){var r=e,n=o(mr,Q(r.fZ),o(mr,Q(r.f1),Q(r.da)));if(n){var a=r.da/n,t=r.f1/n,i=r.fZ/n,c=$o(i*i+t*t+a*a);return ee({fZ:i/c,f1:t/c,da:a/c})}else return J},xm=$(function(e,r){var n=r;return n/e}),yt=function(e){var r=e;return tn(r)},rl=ar({fZ:0,f1:0,da:-1}),Pm=$(function(e,r){var n=e,a=r;return a/n}),Tm=$(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,v=u;return{fZ:v.fZ*a.fZ+l.fZ*a.f1+i.fZ*a.da,f1:v.f1*a.fZ+l.f1*a.f1+i.f1*a.da,da:v.da*a.fZ+l.da*a.f1+i.da*a.da}}),Cn=function(e){var r=e;return{fZ:-r.fZ,f1:-r.f1,da:-r.da}},wt=function(e){var r=e;return Cn(jr(r))},zm=$(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c8,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1}),fo=y(function(e,r,n){var a=e,t=r,i=n;return{fZ:a,f1:t,da:i}}),Mm=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cE,v=u,s=t.db,d=s,m=t.c9,f=m,h=t.c8,g=h;return{fZ:v.fZ+i*g.fZ+c*f.fZ+l*d.fZ,f1:v.f1+i*g.f1+c*f.f1+l*d.f1,da:v.da+i*g.da+c*f.da+l*d.da}}),km=$(function(e,r){var n=e,a=r,t=n.cE,i=t,c=n.c9,l=c;return(a.fZ-i.fZ)*l.fZ+(a.f1-i.f1)*l.f1}),yn=0,Dm=y(function(e,r,n){var a=e,t=o(km,ii(r),n),i=o(zm,ii(r),n),c=a.c6,l=c,u=Lm(r);u.a;var v=u.b,s=a.cQ;if(s.$){var h=s.a,g=o(Pm,v,h),C=P(Mm,l,o(oi,g,i),o(oi,g,t),yn);return o(pr,C,wt(a.c6))}else{var d=s.a,m=va(o(xm,d,o(Xe,.5,v))),f=o(Tm,l,o(or,rl,Sm(p(fo,i,t,m))));return o(pr,yt(a.c6),f)}}),Am=function(e){var r=e;return{fZ:Xr(r),f1:Qr(r)}},Fm=function(e){var r=e;return{fZ:-r.f1,f1:r.fZ}},Bm=function(e){return e},Em=$(function(e,r){return Bm({cE:r,c8:e,c9:Fm(e)})}),Vm=$(function(e,r){return o(Em,Am(e),r)}),Rm=y(function(e,r,n){var a=e.a,t=e.b;return{ey:o(Vm,r,n),aK:S(Se(a),Se(t))}}),Or=function(e){var r=e;return r.fZ},jm=$(function(e,r){var n=e,a=r;return{fZ:n,f1:a}}),Ur=function(e){var r=e;return r.f1},Jr=function(e){var r=e;return r.da},Nm=B(function(e,r,n,a){var t=n.fZ,i=n.f1,c=function(v){return p(pm,In(Or(v)),In(Ur(v)),In(Jr(v)))},l=p(Rm,S(En(r.fX),En(r.e1)),bm(0),o(ym,0,0)),u=o(jm,En(t),En(i));return o(be,c,o(Cm,a,p(Dm,e,l,u)))}),Wm=$(function(e,r){return{fp:e,cE:r}}),Gm=$(function(e,r){var n=r;return o(Wm,n.fp,o(qc,e,n.cE))}),Hm=$(function(e,r){return{fp:r,cE:e}}),Zm=o(Hm,cn,zn),Im=B(function(e,r,n,a){return P(Nm,r,n,a,o(Gm,p(fo,wr(0),wr(0),wr(e)),Zm))}),Om=$(function(e,r){if(e.cO.dt){var n=P(Im,o(sr,"cubes side length",e),Qc(e),e.b_,e.cO);if(n.$===1)return r;var a=n.a;return p(mm,a,e,r)}else return r}),Um=$(function(e,r){var n=r.aB;if(n.$){var a=n.a.cZ,t=n.a.cz;return U(e.bB-a,o(sr,"duration of rolling animation",e))>0?je(r,{aB:Zc,bt:t}):r}else return r}),Jm=$(function(e,r){return o(Um,e,o(Om,e,r))}),qm=gr("br"),ci=gr("p"),Ym=o(O,b([N("absolute w-full text-center")]),b([o(O,b([N("font-bold pt-2 text-lg")]),b([Me("Eight Rolling Cubes Puzzle"),o(qm,T,T),Me("by John Harris")])),o(ci,T,b([Me("Can you make all the red faces look down")])),o(ci,T,b([Me(" with the center cell vacant?")]))])),Xm=function(e){var r=e;return r},Qm=function(e){var r=e;return Xm(r.ey)},nl=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Km=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),e0=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),r0=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),n0=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),a0=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),t0=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),o0=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return P(t0,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return P(nl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return P(Km,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return P(e0,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return P(a0,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return P(r0,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return P(n0,n,a,t,1);case 8:return e;case 9:return e;default:return e}},i0={$:0},$a=function(e){var r=e;return r},$e=$(function(e,r){var n=e,a=r;return o(mr,n,a)}),al=$(function(e,r){return U(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(al,n,a)}),c0=ve(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=$a(c(u)),d=o(de,s.dW,e),m=o($e,s.dT,r),f=o(de,s.dX,n),h=o($e,s.dU,a),g=o(de,s.dY,t),C=o($e,s.dV,i),w=c,_=v;e=d,r=m,n=f,a=h,t=g,i=C,c=w,l=_;continue e}else return{dT:r,dU:a,dV:i,dW:e,dX:n,dY:t}}),l0=y(function(e,r,n){var a=$a(e(r));return ma(c0,a.dW,a.dT,a.dX,a.dU,a.dY,a.dV,e,n)}),Na=$(function(e,r){var n=e,a=r;return U(a,n)<1}),u0=function(e){return o(Na,e.dT,e.dW)&&o(Na,e.dU,e.dX)&&o(Na,e.dV,e.dY)?e:{dT:o($e,e.dW,e.dT),dU:o($e,e.dX,e.dU),dV:o($e,e.dY,e.dV),dW:o(de,e.dW,e.dT),dX:o(de,e.dX,e.dU),dY:o(de,e.dY,e.dV)}},fa=function(e){var r=e;return r},v0=function(e){var r=fa(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Ur(n),l=Jr(n),u=Or(a),v=Ur(a),s=Jr(a),d=Or(t),m=Ur(t),f=Jr(t);return u0({dT:o($e,i,o($e,u,d)),dU:o($e,c,o($e,v,m)),dV:o($e,l,o($e,s,f)),dW:o(de,i,o(de,u,d)),dX:o(de,c,o(de,v,m)),dY:o(de,l,o(de,s,f))})},tl=e$,Mn=function(e){var r=e;return r},Lr=function(e){return tl(Mn(e))},ol=function(e){var r=e;return r},il=function(e){return tl(ol(e))},$0=$(function(e,r){var n=e,a=r;return{fZ:a.f1*n.da-a.da*n.f1,f1:a.da*n.fZ-a.fZ*n.da,da:a.fZ*n.f1-a.f1*n.fZ}}),li=$(function(e,r){var n=e,a=r;return{fZ:a.fZ-n.fZ,f1:a.f1-n.f1,da:a.da-n.da}}),cl=function(e){return e},f0={fZ:0,f1:0,da:0},s0=$(function(e,r){var n=e,a=r,t=o(mr,Q(a.fZ),o(mr,Q(a.f1),Q(a.da)));if(t){var i=a.da/t,c=a.f1/t,l=a.fZ/t,u=$o(l*l+c*c+i*i);return{fZ:n*l/u,f1:n*c/u,da:n*i/u}}else return f0}),d0=s0(cl(1)),ll=y(function(e,r,n){var a=o(li,r,n),t=o(li,e,r);return d0(o($0,a,t))}),m0=function(e){var r=fa(e),n=r.a,a=r.b,t=r.c,i=il(p(ll,n,a,t));return H({n:i,bV:Lr(n)},{n:i,bV:Lr(a)},{n:i,bV:Lr(t)})},p0=$(function(e,r){return{$:2,a:e,b:r}}),b0=p0({dj:3,ds:0,d_:4}),g0=function(e){if(e.b){var r=e.a,n=e.b,a=b0(o(fe,m0,e)),t=p(l0,v0,r,n);return P(nl,t,e,a,0)}else return i0},Ee=y(function(e,r,n){return H(e,r,n)}),Je=y(function(e,r,n){var a=e,t=r,i=n;return{fZ:a,f1:t,da:i}}),ul=function(){var e=wr(1),r=wr(1),n=wr(1),a=o(Xe,-.5,e),t=o(Xe,-.5,r),i=o(Xe,-.5,n),c=p(Je,i,t,a),l=o(Xe,.5,e),u=p(Je,i,t,l),v=o(Xe,.5,r),s=p(Je,i,v,a),d=p(Je,i,v,l),m=o(Xe,.5,n),f=p(Je,m,t,a),h=p(Je,m,v,a),g=p(Je,m,t,l),C=p(Je,m,v,l);return o0(g0(b([p(Ee,c,h,f),p(Ee,c,s,h),p(Ee,u,g,C),p(Ee,u,C,d),p(Ee,f,h,C),p(Ee,f,C,g),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,g),p(Ee,c,g,u),p(Ee,s,C,h),p(Ee,s,d,C)])))}(),Vn={$:0},h0=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_0=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=il(p(ll,u,l,c)),s={n:v,bV:Lr(u)},d={n:v,bV:Lr(l)},m={n:v,bV:Lr(c)};return o(F,s,o(F,d,o(F,m,n)))}),C0=function(e){var r=e;return r.C},y0=B(function(e,r,n,a){if(r.$===1)return J;var t=r.a;if(n.$===1)return J;var i=n.a;if(a.$===1)return J;var c=a.a;return ee(p(e,t,i,c))}),Lt=4294967295>>>32-gn,St=tu,w0=y(function(e,r,n){e:for(;;){var a=Lt&r>>>e,t=o(St,a,n);if(t.$){var v=t.a;return o(St,Lt&r,v)}else{var i=t.a,c=e-gn,l=r,u=i;e=c,r=l,n=u;continue e}}}),L0=function(e){return e>>>5<<5},S0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?J:U(e,L0(n))>-1?ee(o(St,Lt&e,i)):ee(p(w0,a,e,t))}),x0=function(e){var r=e;return r.ag},Wa=$(function(e,r){return o(S0,e,x0(r))}),P0=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(y0,y(function(c,l,u){return H(c,l,u)}),o(Wa,a,e),o(Wa,t,e),o(Wa,i,e))};return o(Pn,r,C0(e))},T0=y(function(e,r,n){e:for(;;){var a=o(Yt,De,e),t=a.a,i=a.b;if(U($t(t),De)<0)return o(vc,!0,{y:r,l:n,o:t});var c=i,l=o(F,uc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),vl=function(e){return e.b?p(T0,e,T,0):cc},z0=y(function(e,r,n){return e(r(n))}),M0=$(function(e,r){return!o(no,o(z0,Tf,e),r)}),k0=function(e){var r=e.a;return r},D0=$(function(e,r){var n=k0(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(M0,a,r)?{C:r,ag:e}:{C:o(vo,a,r),ag:e}}),A0=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),F0=A0({dj:1,ds:3,d_:4}),xt=function(e){var r=e;return r},On=$(function(e,r){var n=xt(r),a=xt(e);return S(H(a.fZ,a.f1,a.da),H(n.fZ,n.f1,n.da))}),so=Yv,ui=p(so,0,0,0),Ga=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ya,o(On,e,r),t);if(v.$){var d={n:ui,bV:Lr(r)},m={n:ui,bV:Lr(e)},f=u+1,h=u;return H(o(F,H(n,h,f),o(F,H(n,f,a),c)),o(F,d,o(F,m,l)),u+2)}else{var s=v.a;return H(o(F,H(n,s,a),c),l,u)}}),B0=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,g=a,C=e,w=r,_=v,x=a+3,D=me(Ga,s,m,f,g,r,me(Ga,d,s,h,f,r,me(Ga,m,d,g,h,r,t)));e=C,r=w,n=_,a=x,t=D;continue e}else{var I=t,W=I.a,R=I.b;return S(W,ke(R))}}),E0=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,g=n,C=p(dn,o(On,m,s),f,p(dn,o(On,s,d),h,p(dn,o(On,d,m),g,t))),w=o(F,H(g,h,f),a),_=e,x=v,D=n+3,I=w,W=C;e=_,r=x,n=D,a=I,t=W;continue e}else return H(a,t,n)}),kr=y(function(e,r,n){var a=P0(n),t=p(hr,_0(r),T,a),i=L(E0,r,a,0,T,Ic),c=i.a,l=i.b,u=i.c,v=L(B0,r,l,a,0,H(c,T,u)),s=v.a,d=v.b,m=Ct(d)?t:oe(t,d);return p(h0,e,o(D0,vl(m),s),o(F0,m,s))}),V0=$(function(e,r){return r.b?p(hr,F,r,e):e}),Sr=function(e){return p(hr,V0,T,e)},vi=function(e){return{C:o(fe,function(r){return H(3*r,3*r+1,3*r+2)},o(Jt,0,Br(e)-1)),ag:vl(Sr(o(fe,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},R0=function(e){switch(e.$){case 0:return Vn;case 1:var a=e.a,r=e.b,n=o(fe,fa,r);return p(kr,a,rr,vi(n));case 2:var a=e.a,r=e.b,n=o(fe,fa,r);return p(kr,a,rr,vi(n));case 3:var a=e.a,t=e.b;return p(kr,a,rr,t);case 4:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bV},t);case 5:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bV},t);case 6:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bV},t);case 7:var a=e.a,t=e.b;return p(kr,a,function(i){return i.bV},t);case 8:return Vn;case 9:return Vn;default:return Vn}},$i=R0(ul),j0=function(e){var r=e;return r.aK},$l={$:0},k=$l,fl=function(e){return{$:4,a:e}},N0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(F,n,r);e=t,r=i;continue e}else return r}),mo=function(e){return fl(o(N0,e,T))},Ue=$(function(e,r){return{$:1,a:e,b:r}}),W0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bD"}},G0=$(function(e,r){switch(r.$){case 0:return o(R$,e,r);case 1:return o(j$,e,r);case 2:return o(N$,e,r);case 3:return o(W$,e,r);case 4:return o(G$,e,r);default:return o(H$,e,r)}}),H0=$(function(e,r){switch(r.$){case 0:return o(d$,e,r);case 1:return o(m$,e,r);case 2:return o(p$,e,r);case 3:return o(b$,e,r);case 4:return o(g$,e,r);case 5:return o(h$,e,r);case 6:return o(_$,e,r);case 7:return o(C$,e,r);default:return y$(e)}}),xe=s$,Z0=1029,I0=function(e){return{$:5,a:e}},sl=function(e){var r=e;return I0(r)},O0=sl(Z0),U0=1028,J0=sl(U0),cr=y(function(e,r,n){return r===1?e?o(F,O0,n):o(F,J0,n):n}),dl={src:`
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
    `,attributes:{position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ha=B(function(e,r,n,a){return o(Ue,r,ve(function(t,i,c,l,u,v,s,d){return L(xe,p(cr,l,a,d),dl,W0,n,{bD:e,b:c,c:i,d:v,e:t,f:u})}))}),q0={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"av"}},ml={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},lr=B(function(e,r,n,a){return o(Ue,r,ve(function(t,i,c,l,u,v,s,d){return L(xe,p(cr,l,a,d),ml,q0,n,{av:e,b:c,c:i,d:v,e:t,f:u})}))}),pl=$(function(e,r){return{$:3,a:e,b:r}}),Y0={src:`
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
    `,attributes:{},uniforms:{constantColor:"av",pointRadius:"bU",sceneProperties:"e"}},bl={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bU",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},X0=B(function(e,r,n,a){return o(pl,n,ve(function(t,i,c,l,u,v,s,d){return L(xe,d,bl,Y0,a,{av:e,b:c,c:i,bU:r,d:v,e:t,f:u})}))}),Q0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},po=function(e){var r=e;return r},gl=r$,ur=he(function(e,r,n,a,t){return o(Ue,n,ve(function(i,c,l,u,v,s,d,m){return L(xe,p(cr,u,t,m),ml,Q0,a,{aN:o(gl,po(r),e),b:l,c,d:s,e:i,f:v})}))}),K0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bU",sceneProperties:"e"}},e1=he(function(e,r,n,a,t){return o(pl,a,ve(function(i,c,l,u,v,s,d,m){return L(xe,m,bl,K0,t,{aN:o(gl,po(r),e),b:l,c,bU:n,d:s,e:i,f:v})}))}),r1={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColor:"cs",sceneProperties:"e",viewMatrix:"f"}},hl={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Rn=B(function(e,r,n,a){return o(Ue,r,ve(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return L(xe,p(cr,l,a,d),hl,r1,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,cs:e,b:c,c:i,d:v,e:t,f:u})}))}),_l={src:`
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
    `,attributes:{},uniforms:{enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",materialColorTexture:"ct",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Cl={src:`
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
    `,attributes:{normal:"n",position:"bV",tangent:"el",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},n1=We(function(e,r,n,a,t,i){return o(Ue,a,ve(function(c,l,u,v,s,d,m,f){var h=m.a,g=m.b;return L(xe,p(cr,v,i,f),Cl,_l,t,{O:g,bd:h.bd,bM:h.bM,bN:h.bN,bO:h.bO,ct:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),yl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b7",constantBaseColor:"ca",constantMetallic:"cb",constantRoughness:"cc",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallicTexture:"cx",normalMapTexture:"aW",roughnessTexture:"cW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},a1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ue,u,ve(function(d,m,f,h,g,C,w,_){var x=w.a,D=w.b;return L(xe,p(cr,h,s,_),Cl,yl,v,{b7:e,ca:r,cb:i,cc:a,O:D,bd:x.bd,bM:x.bM,bN:x.bN,bO:x.bO,cx:t,b:f,c:m,aW:c,d:C,cW:n,e:d,a$:l,f:g})}))}}}}}}}}}}},t1={src:`
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
    `,attributes:{},uniforms:{baseColor:"b6",enabledLights:"O",lights12:"bd",lights34:"bM",lights56:"bN",lights78:"bO",metallic:"cw",roughness:"cV",sceneProperties:"e",viewMatrix:"f"}},jn=We(function(e,r,n,a,t,i){return o(Ue,a,ve(function(c,l,u,v,s,d,m,f){var h=m.a,g=m.b;return L(xe,p(cr,v,i,f),hl,t1,t,{b6:e,O:g,bd:h.bd,bM:h.bM,bN:h.bN,bO:h.bO,cw:n,b:u,c:l,d,cV:r,e:c,f:s})}))}),o1=function(e){return{$:0,a:e}},fi=$(function(e,r){return{$:1,a:e,b:r}}),pn=$(function(e,r){if(r.$){var n=r.a.B;return S(n,1)}else return r.a,S(e,0)}),La=Xv,Sa=Qv,xa=Kv,ln=n$,i1=function(e){return P(ln,La(e),Sa(e),xa(e),1)},bo=P(ln,0,0,0,0),Un=$(function(e,r){if(r.$){var a=r.a.B;return S(a,bo)}else{var n=r.a;return S(e,i1(n))}}),c1=$(function(e,r){var n=S(e,r);if(n.a.$){var t=n.a.a.B;return o(fi,S(t,bo),o(pn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(fi,o(Un,t,e),o(pn,t,r))}else{var a=n.a.a;return n.b.a,o1(a)}}),l1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Nn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),u1=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ir=Jv,v1=function(e){return o(Ir,e,1)},Pt=o(Ir,0,0),Nr=$(function(e,r){if(r.$){var a=r.a.B;return S(a,Pt)}else{var n=r.a;return S(e,v1(n))}}),$1=B(function(e,r,n,a){var t=P(u1,e,r,n,a);if(t.a.$){var u=t.a.a.B;return P(Nn,S(u,bo),o(Nr,u,r),o(Nr,u,n),o(pn,u,a))}else if(t.b.$){var u=t.b.a.B;return P(Nn,o(Un,u,e),S(u,Pt),o(Nr,u,n),o(pn,u,a))}else if(t.c.$){var u=t.c.a.B;return P(Nn,o(Un,u,e),o(Nr,u,r),S(u,Pt),o(pn,u,a))}else if(t.d.$){var u=t.d.a.B;return P(Nn,o(Un,u,e),o(Nr,u,r),o(Nr,u,n),S(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(l1,i,c,l)}}),f1={src:`
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
    `,attributes:{},uniforms:{backlight:"b4",colorTexture:"bD",sceneProperties:"e"}},Za=he(function(e,r,n,a,t){return o(Ue,n,ve(function(i,c,l,u,v,s,d,m){return L(xe,p(cr,u,t,m),dl,f1,a,{b4:po(r),bD:e,b:l,c,d:s,e:i,f:v})}))}),wl={src:`
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
    `,attributes:{normal:"n",position:"bV",uv:"K"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},s1=B(function(e,r,n,a){return o(Ue,r,ve(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return L(xe,p(cr,l,a,d),wl,_l,n,{O:f,bd:m.bd,bM:m.bM,bN:m.bN,bO:m.bO,ct:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),d1=At(function(e,r,n,a,t,i,c,l,u){return o(Ue,c,ve(function(v,s,d,m,f,h,g,C){var w=g.a,_=g.b;return L(xe,p(cr,m,u,C),wl,yl,l,{b7:e,ca:r,cb:i,cc:a,O:_,bd:w.bd,bM:w.bM,bN:w.bN,bO:w.bO,cx:t,b:d,c:s,aW:e,d:h,cW:n,e:v,a$:0,f})}))}),go=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),m1=function(e){var r=e;return p(go,r.dW,r.dT,.5)},p1=function(e){var r=e;return p(go,r.dX,r.dU,.5)},b1=function(e){var r=e;return p(go,r.dY,r.dV,.5)},g1=function(e){return p(Je,m1(e),p1(e),b1(e))},h1=function(e){var r=e;return r.dT},_1=function(e){var r=e;return r.dU},Ll=function(e){var r=e;return r.dV},C1=function(e){var r=e;return r.dW},y1=function(e){var r=e;return r.dX},Sl=function(e){var r=e;return r.dY},dr=$(function(e,r){var n=e,a=r;return a-n}),xl=function(e){return H(o(dr,C1(e),h1(e)),o(dr,y1(e),_1(e)),o(dr,Sl(e),Ll(e)))},j=function(e){var r=xl(e),n=r.a,a=r.b,t=r.c;return{eF:Mn(g1(e)),eZ:n/2,e_:a/2,e$:t/2}},w1=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return P(Ha,l,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(Ha,l,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(Ha,l,j(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(lr,n,j(t),c,a);case 8:var t=r.a,c=r.c;return P(lr,n,j(t),c,0);case 9:var t=r.a,c=r.c;return P(lr,n,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return P(X0,n,i,j(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(Za,l,v,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Za,l,v,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Za,l,v,j(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ur,u,v,j(t),c,a);case 8:var t=r.a,c=r.c;return L(ur,u,v,j(t),c,0);case 9:var t=r.a,c=r.c;return L(ur,u,v,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(e1,u,v,i,j(t),c)}}case 2:e.a;var s=e.b,W=e.c,d=o(c1,s,W);if(d.$){var h=d.a,g=h.a;h.b;var C=d.b,w=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return P(s1,g,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return me(n1,g,w,_,j(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return P(Rn,m,j(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return P(Rn,m,j(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return P(Rn,m,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return P(Rn,m,j(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var x=e.b,D=e.c,I=e.d,W=e.e,R=P($1,x,D,I,W);if(R.$){var Y=R.a,q=Y.a,te=Y.b,ce=R.b,ae=ce.a,ue=ce.b,Pe=R.c,_e=Pe.a,_r=Pe.b,Cr=R.d,w=Cr.a,_=Cr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Kl(d1,q,te,ae,ue,_e,_r,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return a1(q)(te)(ae)(ue)(_e)(_r)(w)(_)(j(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var G=R.a,Z=R.b,V=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return me(jn,G,Z,V,j(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return me(jn,G,Z,V,j(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return me(jn,G,Z,V,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return me(jn,G,Z,V,j(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Ia=function(e){var r=e;return r.fZ},Oa=function(e){var r=e;return r.f1},Ua=function(e){var r=e;return r.da},L1=function(e){var r=e,n=Ua(r.db),a=Oa(r.db),t=Ia(r.db),i=Ua(r.c9),c=Oa(r.c9),l=Ia(r.c9),u=Ua(r.c8),v=Oa(r.c8),s=Ia(r.c8);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Ae=function(e){var r=e;return r},S1=function(e){var r=Mn(tn(e)),n=Ae(jr(e)),a=Ae(Rr(e)),t=Ae(Vr(e));return{du:L1(e),p:t.fZ,q:t.f1,r:t.da,s:a.fZ,t:a.f1,u:a.da,v:n.fZ,w:n.f1,x:n.da,G:r.fZ,H:r.f1,I:r.da,bZ:1}},Gr=$(function(e,r){return{$:5,a:e,b:r}}),Pl=$(function(e,r){return{du:Oe(e.du,r.du),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,G:r.G+(e.G*r.p+e.H*r.s+e.I*r.v)*r.bZ,H:r.H+(e.G*r.q+e.H*r.t+e.I*r.w)*r.bZ,I:r.I+(e.G*r.r+e.H*r.u+e.I*r.x)*r.bZ,bZ:e.bZ*r.bZ}}),ho=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Pl,a,e);return o(Gr,i,t);case 1:return o(Gr,e,n);case 3:return o(Gr,e,n);case 2:return o(Gr,e,n);default:return o(Gr,e,n)}}),x1=$(function(e,r){return o(ho,S1(e),r)}),Tl=function(e){return{$:2,a:e}},P1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eF;return{eF:{fZ:n*i.fZ,f1:a*i.f1,da:t*i.da},eZ:n*r.eZ,e_:a*r.e_,e$:t*r.e$}}),T1=t$,z1=a$,si=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=z1(a),h=f.fZ,g=f.f1,C=f.da,w=f.et,_=T1({et:w,fZ:h*s,f1:g*d,da:C*m});return ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Tt=$(function(e,r){switch(r.$){case 0:return $l;case 5:var n=r.a,a=r.b;return o(Gr,n,o(Tt,e,a));case 1:var t=r.a,i=r.b;return o(Ue,o(P1,e,t),o(si,e,i));case 3:return r;case 2:var i=r.a;return Tl(o(si,e,i));default:var c=r.a;return fl(o(fe,Tt(e),c))}}),M1=$(function(e,r){var n=r;return o(Tt,e,n)}),k1={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Kr=519,zl=7683,Ml=7682,ge=7680,D1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},_o=y(function(e,r,n){var a=e.cS,t=e.cr,i=e.c7,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(K,c(v.bl),o(K,l(v.a8),o(K,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(D1,a,t,i)))}),A1=p(_o,{cr:0,cS:0,c7:15},{a8:ge,bl:Kr,bu:ge,bv:zl},{a8:ge,bl:Kr,bu:ge,bv:Ml}),F1=p(_o,{cr:0,cS:0,c7:15},{a8:ge,bl:Kr,bu:ge,bv:Ml},{a8:ge,bl:Kr,bu:ge,bv:zl}),B1=$(function(e,r){return e?o(F,F1,r):o(F,A1,r)}),E1={src:`
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
    `,attributes:{normal:"n",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},V1=function(e){if(e.$){var r=e.c;return ee(ve(function(n,a,t,i,c,l,u,v){return L(xe,o(B1,i,v),E1,k1,r,{b:t,c:a,d:l,e:n,b$:u,f:c})}))}else return J},di=function(e){var r=V1(e);if(r.$)return k;var n=r.a;return Tl(n)},R1=B(function(e,r,n,a){var t=o(w1,n,ul),i=function(){var s=S(e,r);return s.a?s.b?mo(b([t,di($i)])):t:s.b?di($i):k}(),c=j0(a),l=c.a,u=c.b,v=c.c;return o(x1,Qm(a),o(M1,H(l,u,v),i))}),j1=$(function(e,r){return P(R1,!0,!0,e,r)}),Ja=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),N1=ar({fZ:-1,f1:0,da:0}),W1=ar({fZ:0,f1:-1,da:0}),kl=ar({fZ:0,f1:1,da:0}),G1=We(function(e,r,n,a,t,i){var c=o(Ja,n,i)?Xc:rl,l=o(Ja,r,t)?kl:W1,u=o(Ja,e,a)?Yc:N1,v=H(Se(o(dr,e,a)),Se(o(dr,r,t)),Se(o(dr,n,i))),s=p(Je,o(qa,e,a),o(qa,r,t),o(qa,n,i)),d=on({cE:s,c8:u,c9:l,db:c});return{ey:d,aK:v}}),H1=$(function(e,r){return me(G1,Or(e),Ur(e),Jr(e),Or(r),Ur(r),Jr(r))}),zt=y(function(e,r,n){return{fZ:e,f1:r,da:n}}),sa=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=H(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(j1,e,o(H1,p(zt,-c,-l,-u),p(zt,c,l,u)))}),Qe=function(e){return e*He/180},Z1=$(function(e,r){return o(be,function(n){if(n.$===2){var a=n.a;return a}else return oo},o(ya,e,r.au))}),I1=$(function(e,r){return o(or,oo,an(o(Pn,Z1(e),r)))}),O1=$(function(e,r){return o(I1,e,r.eH)}),Mt=O1,U1=function(e){return mo(e)},Co=U1,mi=function(e){return{$:0,a:e}},J1=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Dl=y(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),Ya=function(e){return p(Dl,0,1,e<=.04045?e/12.92:o(Tn,(e+.055)/1.055,2.4))},q1=function(e){var r=Bc(e),n=r.cR,a=r.cf,t=r.b8;return p(so,Ya(n),Ya(a),Ya(t))},da=function(e){return p(J1,0,mi(q1(e)),mi(0))},Y1=y(function(e,r,n){return{fZ:e,f1:r,da:n}}),X1=function(e){var r=ol(e);return{du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:r.fZ,H:r.f1,I:r.da,bZ:1}},Q1=$(function(e,r){return o(ho,X1(e),r)}),K1=$(function(e,r){return o(Q1,e,r)}),yo=function(e){var r=e.a,n=e.b,a=e.c;return K1(p(Y1,r,n,a))},Al=function(e){return yo(H(e,0,0))},Jn=function(e){return yo(H(0,0,e))},ep=$(function(e,r){var n=r,a=Mn(el(e)),t=.5*n,i=Xr(t),c=Qr(t),l=Ae(lo(e)),u=l.fZ*c,v=i*u,s=u*u,d=l.f1*c,m=i*d,f=u*d,h=d*d,g=1-2*(s+h),C=l.da*c,w=i*C,_=2*(f-w),x=2*(f+w),D=u*C,I=2*(D+m),W=2*(D-m),R=d*C,G=2*(R-v),Z=2*(R+v),V=C*C,Y=1-2*(h+V),q=1-2*(s+V);return{du:!0,p:Y,q:x,r:W,s:_,t:q,u:Z,v:I,w:G,x:g,G:a.fZ-Y*a.fZ-_*a.f1-I*a.da,H:a.f1-x*a.fZ-q*a.f1-G*a.da,I:a.da-W*a.fZ-Z*a.f1-g*a.da,bZ:1}}),rp=y(function(e,r,n){return o(ho,o(ep,e,r),n)}),Pa=y(function(e,r,n){return p(rp,e,r,n)}),np=o(pr,cn,zn),Xa=$(function(e,r){return p(Pa,np,nr(e),r)}),ap=function(e){var r=o(Mt,"board color",e),n=o(Al,-1.55,o(sa,da(r),H(.1,3.2,.2))),a=o(Jn,-.5,o(sa,da(r),H(3,3,1)));return Co(b([n,o(Xa,Qe(90),n),o(Xa,Qe(180),n),o(Xa,Qe(270),n),a]))},tp=function(e){return yo(H(0,e,0))},op=$(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(Pa,o(pr,Oc(n),ar({fZ:t,f1:i,da:c})),nr(r))}),ip=y(function(e,r,n){var a=r.aB;if(a.$){var t=a.a.cZ,i=a.a.eh,c=a.a.ec;if(a.a.cz,Oe(i,n)){var l=o(sr,"duration of rolling animation",e),u=(e.bB-t)/l,v=u,s=o(al,Qe(90),v*Qe(90)),d=function(){switch(c){case 0:return S({fZ:.5,f1:.5,da:-.5},H(-1,0,0));case 1:return S({fZ:-.5,f1:-.5,da:-.5},H(1,0,0));case 2:return S({fZ:-.5,f1:.5,da:-.5},H(0,-1,0));default:return S({fZ:.5,f1:-.5,da:-.5},H(0,1,0))}}();return o(op,d,s)}else return rr}else return rr}),cp=o(pr,cn,uo),Qa=$(function(e,r){return p(Pa,cp,nr(e),r)}),Fl=kl,lp=o(pr,cn,Fl),pi=$(function(e,r){return p(Pa,lp,nr(e),r)}),up=y(function(e,r,n){var a=n.a,t=a.a,i=a.b,c=n.b,l=o(sr,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,Qa(Qe(180));case 1:return c.a,c.b,Qa(Qe(90));default:return c.a,c.b,pi(-Qe(90))}else switch(c.a){case 2:return c.a,c.b,rr;case 1:return c.a,c.b,Qa(-Qe(90));default:return c.a,c.b,pi(Qe(90))}}(),v=o(Mt,"color 2",e),s=o(Mt,"color 1",e),d=o(Jn,l/4,o(sa,da(s),H(l,l,l/2))),m=o(Jn,-(l/4),o(sa,da(v),H(l,l,l/2)));return o(tp,i,o(Al,t,o(Jn,l/2,P(ip,e,r,S(t,i),u(Co(b([d,m])))))))}),vp=$(function(e,r){return Co(o(fe,o(up,e,r),r.bt))}),$p=function(e){return e},fp=function(e){return wr(.01*e)},bi=function(e){return e},sp=function(e){return e},dp=function(e){return{$:0,a:e}},mp=dp,pp={$:3},bp=pp,gp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),hp=gp,_p=$(function(e,r){return Sr(o(fe,e,r))}),Cp=function(e){return{$:1,a:e}},yp=Cp,wp=function(e){return o(zr,"height",ze(e))},Lp=function(e){return gv(wv(e))},Sp=Lp,xp=function(e){return{$:2,a:e}},Pp=xp,Tp=function(e){return o(Dr,"",e)},zp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Fe(l*1e3)/1e3},c=function(l){return Fe(l*1e4)/100};return Tp(b(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},Mp=y(function(e,r,n){return p(V$,e,r,n)}),gi=function(e){var r=e;return r},Ka=P(ln,1,1,1,1),qe=y(function(e,r,n){return o(fe,function(a){return o(a,r,n)},e)}),kp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Dp=$(function(e,r){var n=e,a=r.fZ,t=r.f1;return p(kp,n*a/t,n,n*(1-a-t)/t)}),Ap=function(e){var r=e.a,n=e.b,a=e.c;return p(so,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},wo=$(function(e,r){return Ap(o(Dp,e,r))}),$r=l$,Fp=function(e){return $r({dC:e.p,dD:e.s,dE:e.v,dF:e.G,dG:e.q,dH:e.t,dI:e.w,dJ:e.H,dK:e.r,dL:e.u,dM:e.x,dN:e.I,dO:0,dP:0,dQ:0,dR:1})},et=he(function(e,r,n,a,t){var i=a.du?1:-1,c=P(ln,a.bZ,a.bZ,a.bZ,i);return me(t,e,c,Fp(a),a.du,r,n)}),Bl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Pl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,g=o(F,L(et,e,r,n,a,h),i.L);return{L:g,T:i.T,fG:i.fG};case 3:var C=t.b,w=o(F,L(et,e,r,n,a,C),i.T);return{L:i.L,T:w,fG:i.fG};case 2:var _=t.a,x=o(F,L(et,e,r,n,a,_),i.fG);return{L:i.L,T:i.T,fG:x};default:var D=t.a;return p(Ln,P(Bl,e,r,n,a),i,D)}}),Bp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),El=Bp,Lo=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ep=function(e){var r=e.Y,n=e.V,a=e.U;return P(Lo,518,r,n,a)},Vp=$(function(e,r){return{$:6,a:e,b:r}}),Rp=Vp,Vl=b([Ep({U:1,V:0,Y:!1}),P(El,!1,!1,!1,!1),o(Rp,0,1)]),So=8,Rl=15,qr=7681,jp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Np=$(function(e,r){return{$:0,a:e,b:r}}),Wp=Np({dj:1,ds:0,d_:5}),Gp=Wp(b([{bV:o(Ir,-1,-1)},{bV:o(Ir,1,-1)},{bV:o(Ir,-1,1)},{bV:o(Ir,1,1)}])),Hp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bV"},uniforms:{}},xo=function(e){return p(_o,{cr:e.cr,cS:e.cS,c7:e.c7},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv},{a8:e.a8,bl:e.bl,bu:e.bu,bv:e.bv})},Po=function(e){return L(xe,b([xo(e),P(El,!1,!1,!1,!1)]),Hp,jp,Gp,{})},Zp=Po({a8:qr,cr:0,cS:So,bl:Kr,c7:Rl,bu:qr,bv:qr}),Ip=516,hi=5386,Op=function(e){return o(Tn,2,e+4)},jl=function(e){return Po({a8:ge,cr:Rl,cS:So,bl:Ip,c7:Op(e),bu:hi,bv:hi})},Up=y(function(e,r,n){return Sr(b([p(qe,e,n,Vl),b([jl(r),Zp])]))}),Jp=$(function(e,r){return Sr(o(ac,Up(e),r))}),qp=function(e){var r=e.Y,n=e.V,a=e.U;return P(Lo,513,r,n,a)},Yp=qp({U:1,V:0,Y:!0}),Xp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Qp=function(e){var r=e.bX,n=e.bH,a=e.bz,t=e.bw,i=e.bC,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,g=v.c;return Xp(s)(d)(m)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},Kp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),_i=$(function(e,r){var n=e,a=r;return p(Kp,32774,n,a)}),e3=1,Ci=771,r3=770,To=Qp({bw:0,aH:o(_i,e3,Ci),bz:0,bC:o(_i,r3,Ci),bH:0,bX:0}),Wr=b([Yp,To]),n3=function(e){return e},a3=function(e){return on({cE:n3({fZ:e.G,f1:e.H,da:e.I}),c8:ar({fZ:e.p,f1:e.q,da:e.r}),c9:ar({fZ:e.s,f1:e.t,da:e.u}),db:ar({fZ:e.v,f1:e.w,da:e.x})})},rt=$(function(e,r){var n=e,a=r,t=n.db,i=t,c=n.c9,l=c,u=n.c8,v=u;return{fZ:a.fZ*v.fZ+a.f1*v.f1+a.da*v.da,f1:a.fZ*l.fZ+a.f1*l.f1+a.da*l.da,da:a.fZ*i.fZ+a.f1*i.f1+a.da*i.da}}),Nl=$(function(e,r){var n=e,a=r,t=n.cE,i=t,c=a.fZ-i.fZ,l=a.f1-i.f1,u=a.da-i.da,v=n.db,s=v,d=n.c9,m=d,f=n.c8,h=f;return{fZ:c*h.fZ+l*h.f1+u*h.da,f1:c*m.fZ+l*m.f1+u*m.da,da:c*s.fZ+l*s.f1+u*s.da}}),Wl=$(function(e,r){return{cE:o(Nl,e,tn(r)),c8:o(rt,e,Vr(r)),c9:o(rt,e,Rr(r)),db:o(rt,e,jr(r))}}),t3=$(function(e,r){var n=$a(r),a=$a(e);return{dT:o($e,a.dT,n.dT),dU:o($e,a.dU,n.dU),dV:o($e,a.dV,n.dV),dW:o(de,a.dW,n.dW),dX:o(de,a.dX,n.dX),dY:o(de,a.dY,n.dY)}}),o3=function(e){var r=e;return H(r.fZ,r.f1,r.da)},qn=$(function(e,r){var n=e,a=r;return a+n}),i3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Zn(Se(a)),c=Zn(Se(n)),l=Zn(Se(t)),u=o3(r),v=u.a,s=u.b,d=u.c;return{dT:o(qn,c,v),dU:o(qn,i,s),dV:o(qn,l,d),dW:o(dr,c,v),dX:o(dr,i,s),dY:o(dr,l,d)}}),yi=B(function(e,r,n,a){var t=n.eF,i=2*n.e$*r,c=2*n.e_*r,l=2*n.eZ*r,u=t.da*r,v=t.f1*r,s=t.fZ*r,d=Ae(jr(e)),m=Q(l*d.fZ)+Q(c*d.f1)+Q(i*d.da),f=Ae(Rr(e)),h=Q(l*f.fZ)+Q(c*f.f1)+Q(i*f.da),g=Ae(Vr(e)),C=Q(l*g.fZ)+Q(c*g.f1)+Q(i*g.da),w=o(i3,H(C,h,m),o(Nl,e,p(zt,s,v,u)));if(a.$)return ee(w);var _=a.a;return ee(o(t3,_,w))}),kt=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 1:var c=t.a,l=P(yi,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 2:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 3:var c=t.a,l=P(yi,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 4:var u=t.a,f=e,h=r,g=P(kt,e,r,n,u),C=i;e=f,r=h,n=g,a=C;continue e;default:var v=t.a,s=t.b,d=o(Wl,a3(v),e),m=r*v.bZ,f=e,h=r,g=P(kt,d,m,n,b([s])),C=i;e=f,r=h,n=g,a=C;continue e}}else return n}),c3={du:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,G:0,H:0,I:0,bZ:1},wi=Po({a8:qr,cr:0,cS:So,bl:Kr,c7:255,bu:qr,bv:qr}),l3=function(e){var r=e,n=o(mr,Q(r.fZ),o(mr,Q(r.f1),Q(r.da)));if(n){var a=r.da/n,t=r.f1/n,i=r.fZ/n,c=$o(i*i+t*t+a*a);return c*n}else return yn},Le={bz:0,eE:!1,bH:0,cN:0,bX:0,c2:0,fZ:0,f1:0,da:0},Ve=$(function(e,r){var n=e,a=r;return $r({dC:n.fZ,dD:n.bX,dE:a.fZ,dF:a.bX,dG:n.f1,dH:n.bH,dI:a.f1,dJ:a.bH,dK:n.da,dL:n.bz,dM:a.da,dN:a.bz,dO:n.c2,dP:n.cN,dQ:a.c2,dR:a.cN})}),sn=S({bd:o(Ve,Le,Le),bM:o(Ve,Le,Le),bN:o(Ve,Le,Le),bO:o(Ve,Le,Le)},P(ln,0,0,0,0)),Gl=514,Hl=function(e){var r=e.Y,n=e.V,a=e.U;return P(Lo,515,r,n,a)},Zl=240,u3=b([Hl({U:1,V:0,Y:!0}),xo({a8:ge,cr:Zl,cS:0,bl:Gl,c7:0,bu:ge,bv:ge}),To]),v3=$(function(e,r){var n=e,a=r.fo,t=r.eW,i=r.ex,c=Se(a),l=c,u=Se(t),v=u,s=n.cQ;if(s.$){var m=s.a;return st(v)?$r({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:0,dN:-1,dO:0,dP:0,dQ:0,dR:1}):$r({dC:2/(i*m),dD:0,dE:0,dF:0,dG:0,dH:2/m,dI:0,dJ:0,dK:0,dL:0,dM:-2/(v-l),dN:-(v+l)/(v-l),dO:0,dP:0,dQ:0,dR:1})}else{var d=s.a;return st(v)?$r({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-1,dN:-2*l,dO:0,dP:0,dQ:-1,dR:0}):$r({dC:1/(i*d),dD:0,dE:0,dF:0,dG:0,dH:1/d,dI:0,dJ:0,dK:0,dL:0,dM:-(v+l)/(v-l),dN:-2*v*l/(v-l),dO:0,dP:0,dQ:-1,dR:0})}}),Wn=$(function(e,r){return(1&e>>r)===1?0:1}),$3=function(e){return b([Hl({U:1,V:0,Y:!0}),xo({a8:ge,cr:Zl,cS:e,bl:Gl,c7:0,bu:ge,bv:ge}),To])},f3=y(function(e,r,n){return Sr(o(fe,function(a){var t=a<<4,i=P(ln,o(Wn,a,0),o(Wn,a,1),o(Wn,a,2),o(Wn,a,3));return p(qe,e,S(r,i),$3(t))},o(Jt,1,o(Tn,2,n)-1)))}),s3=u$,d3={cE:cn,c8:uo,c9:Fl,db:zn},m3=function(e){var r=Mn(tn(e)),n=Ae(jr(e)),a=Ae(Rr(e)),t=Ae(Vr(e));return $r({dC:t.fZ,dD:a.fZ,dE:n.fZ,dF:r.fZ,dG:t.f1,dH:a.f1,dI:n.f1,dJ:r.f1,dK:t.da,dL:a.da,dM:n.da,dN:r.da,dO:0,dP:0,dQ:0,dR:1})},p3=$(function(e,r){var n=r;return m3(o(Wl,n,e))}),b3=function(e){return o(p3,d3,e)},g3=function(e){var r=e;return r.c6},h3=function(e){var r=e;return Vr(r)},_3=function(e){var r=e;return Rr(r)},C3=function(e){var r=g3(e.eC),n=on({cE:yt(r),c8:h3(r),c9:_3(r),db:Cn(wt(r))}),a=mo(e.aP),t=a,i=P(kt,n,1,J,b([t]));if(i.$===1)return T;var c=i.a,l=b3(r),u=o(Xe,.99,o($e,Se(e.aJ),va(Ll(c)))),v=xl(c),s=v.a,d=v.b,m=v.c,f=l3(p(fo,s,d,m)),h=o(Xe,1.01,o(qn,f,va(Sl(c)))),g=o(v3,e.eC,{ex:e.ex,eW:h,fo:u}),C=s3(g).dR,w=C?Ae(Cn(wt(r))):xt(yt(r)),_=function(){var ae=e.b0;switch(ae.$){case 0:return S(0,0);case 1:return S(1,0);case 2:return S(2,0);case 3:var ue=ae.a;return S(3,ue);case 4:var ue=ae.a;return S(4,ue);default:return S(5,0)}}(),x=_.a,D=_.b,I=e.bF,W=I,R=o(wo,W,e.b2),G=R,Z=$r({dC:0,dD:w.fZ,dE:La(G),dF:e.ej,dG:0,dH:w.f1,dI:Sa(G),dJ:In(f),dK:0,dL:w.da,dM:xa(G),dN:x,dO:0,dP:C,dQ:0,dR:D}),V=me(Bl,Z,l,g,c3,t,{L:T,T,fG:T}),Y=e.bL;switch(Y.$){case 0:var q=Y.a;return Sr(b([p(qe,V.L,S(q,Ka),Wr),p(qe,V.T,sn,Wr)]));case 1:var q=Y.a;return Sr(b([p(qe,V.L,sn,Wr),b([wi]),p(qe,V.fG,q.bd,Vl),b([jl(0)]),p(qe,V.L,S(q,Ka),u3),p(qe,V.T,sn,Wr)]));default:var te=Y.a,ce=Y.b;return Sr(b([p(qe,V.L,S(ce,Ka),Wr),b([wi]),o(Jp,V.fG,te),p(f3,V.L,ce,Br(te)),p(qe,V.T,sn,Wr)]))}},y3=function(e){return o(zr,"width",ze(e))},w3=$(function(e,r){var n=b([yp(1),Pp(0),mp(!0),P(hp,0,0,0,0)]),a=function(){var x=e.b3;switch(x.$){case 0:return H(n,"0",1);case 1:return H(o(F,bp,n),"1",1);default:var D=x.a;return H(n,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=gi(v),d=o(re,"height",ze(s)+"px"),m=gi(u),f=m/s,h=o(_p,function(x){return C3({ex:f,eC:e.eC,aJ:e.aJ,aP:x.aP,bF:x.bF,bL:x.bL,ej:c,b0:x.b0,b2:x.b2})},r),g=o(re,"width",ze(m)+"px"),C=e.aI,w=C,_=zp(w);return p(Sp,"div",b([o(re,"padding","0px"),g,d]),b([S(i,p(Mp,t,b([y3(Fe(m*c)),wp(Fe(s*c)),g,d,o(re,"display","block"),o(re,"background-color",_)]),h))]))}),L3=function(e){return o(w3,{b3:e.b3,aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bF:e.bF,bL:e.bL,b0:e.b0,b2:e.b2}]))},Il=function(e){return e},Li=Il({fZ:.31271,f1:.32902}),S3=$(function(e,r){var n=e,a=Ae(r.eO),t=a.fZ,i=a.f1,c=a.da,l=o(wo,r.cg,r.b9),u=l;return{bz:xa(u),eE:n,bH:Sa(u),cN:0,bX:La(u),c2:1,fZ:-t,f1:-i,da:-c}}),x3=function(e){return e},P3=function(e){return x3(1.2*o(Tn,2,e))},nt=function(e){return e},T3={$:0},z3=T3,M3=$(function(e,r){var n=e,a=r;return U(a,n)>0}),Si=function(e){var r=e;return r},k3=function(e){e:for(;;){if(Oe(e.e9,yn)&&Oe(e.fa,yn))return Le;if(o(M3,Se(e.e9),Se(e.fa))){var r={b9:e.b9,e9:e.fa,fa:e.e9,ep:Cn(e.ep)};e=r;continue e}else{var n=Q(Si(e.fa)/He),a=Q(Si(e.e9)/He),t=Ae(e.ep),i=t.fZ,c=t.f1,l=t.da,u=o(wo,cl(1),e.b9),v=u;return{bz:a*xa(v),eE:!1,bH:a*Sa(v),cN:n/a,bX:a*La(v),c2:3,fZ:i,f1:c,da:l}}}},xi=function(e){return k3({b9:e.b9,e9:e.cg,fa:yn,ep:e.ep})},D3=function(e){var r=e;return r},Ol=function(e){var r=p(Dl,1667,25e3,D3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Il({fZ:n,f1:a})},Ul=function(e){return e},A3=Ol(Ul(12e3)),F3=Ol(Ul(5600)),B3=function(e){return{$:2,a:e}},E3=function(e){return B3(e)},V3=$(function(e,r){return{$:2,a:e,b:r}}),Jl=function(e){return{$:0,a:e}},Gn=function(e){var r=e;return r},R3=function(e){var r=e;return r.eE},j3=Jl(sn.a),N3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?S(o(F,a,i),c):S(i,o(F,a,c))});return p(hr,n,S(T,T),r)}),W3=function(e){var r=e;return $r({dC:r.fZ,dD:r.bX,dE:0,dF:0,dG:r.f1,dH:r.bH,dI:0,dJ:0,dK:r.da,dL:r.bz,dM:0,dN:0,dO:r.c2,dP:r.cN,dQ:0,dR:0})},G3=ve(function(e,r,n,a,t,i,c,l){var u=o(N3,R3,b([Gn(e),Gn(r),Gn(n),Gn(a)])),v=u.a,s=u.b;if(v.b){var d=oe(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,g=f.b,C=g.a,w=g.b,_=w.a;return o(V3,o(fe,W3,v),{bd:o(Ve,m,h),bM:o(Ve,C,_),bN:o(Ve,t,i),bO:o(Ve,c,l)})}else return j3}else return Jl({bd:o(Ve,e,r),bM:o(Ve,n,a),bN:o(Ve,t,i),bO:o(Ve,c,l)})}),H3=y(function(e,r,n){return ma(G3,e,r,n,Le,Le,Le,Le,Le)}),Z3=function(e){var r=o(S3,sp(e.fG),{b9:F3,eO:e.fO,cg:nt(8e4)}),n=xi({b9:A3,cg:nt(2e4),ep:e.ep}),a=xi({b9:Li,cg:nt(15e3),ep:Cn(e.ep)}),t=p(H3,r,n,a);return L3({b3:E3(e.cd),aI:e.aI,eC:e.eC,aJ:e.aJ,aK:e.aK,aP:e.aP,bF:P3(15),bL:t,b0:z3,b2:Li})},I3=$(function(e,r){var n=e,a=r,t=Xr(a);return{fZ:t*Xr(n),f1:t*Qr(n),da:Qr(a)}}),O3=$(function(e,r){return Z3({aI:$p(e.ez),eC:e.eC,aJ:fp(.5),cd:e.cd,aK:S(bi(Fe(e.b_.fX)),bi(Fe(e.b_.e1))),aP:r,fG:!0,fO:o(I3,nr(e.fN),nr(e.fP)),ep:zn})}),U3=$(function(e,r){return o(O3,{ez:P(Rc,0,0,0,0),eC:Qc(e),cd:e.cd,b_:e.b_,fN:o(sr,"sunlight azimuth",e),fP:o(sr,"sunlight elevation",e)},b([ap(e),o(vp,e,r)]))}),J3=$(function(e,r){return o(O,b([o(re,"width","100%")]),b([Ym,o(U3,e,r)]))}),q3=P(Pd,J3,Jm,Ad,zd);const Y3={Main:{init:q3(o(M,function(e){return Te({e8:e})},o(z,"inputs",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return Te({bB:c,cd:i,eQ:t,fd:a,cO:n,b_:r,fW:e})},o(z,"clock",le))},o(z,"devicePixelRatio",le))},o(z,"dt",le))},o(z,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(d){return Te({ev:d,eI:s,di:v,eP:u,fe:l,fy:c,fC:i,fH:t,eo:a})},o(z,"alt",X))},o(z,"control",X))},o(z,"down",X))},o(z,"downs",ta(_n)))},o(z,"left",X))},o(z,"pressedKeys",ta(_n)))},o(z,"right",X))},o(z,"shift",X))},o(z,"up",X))))},o(z,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return Te({di:v,dt:u,fj:l,fD:c,fE:i,eo:t,fZ:a,f1:n})},o(z,"down",X))},o(z,"isDown",X))},o(z,"move",X))},o(z,"rightDown",X))},o(z,"rightUp",X))},o(z,"up",X))},o(z,"x",le))},o(z,"y",le))))},o(z,"screen",o(M,function(r){return o(M,function(n){return Te({e1:n,fX:r})},o(z,"height",le))},o(z,"width",le))))},o(z,"wheel",o(M,function(e){return o(M,function(r){return Te({eL:r,eM:e})},o(z,"deltaX",le))},o(z,"deltaY",le)))))))(0)}},A={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},X3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(A.keyboard.downs.push(f.code),A.keyboard.pressedKeys.push(f.code),r(f)&&(A.keyboard.control=!0),n(f)&&(A.keyboard.alt=!0),a(f)&&(A.keyboard.shift=!0),t(f)&&(A.keyboard.left=!0),i(f)&&(A.keyboard.right=!0),c(f)&&(A.keyboard.up=!0),l(f)&&(A.keyboard.down=!0))}),window.addEventListener("keyup",f=>{A.keyboard.pressedKeys=A.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(A.keyboard.control=!1,A.keyboard.pressedKeys=[]),n(f)&&(A.keyboard.alt=!1),a(f)&&(A.keyboard.shift=!1),t(f)&&(A.keyboard.left=!1),i(f)&&(A.keyboard.right=!1),c(f)&&(A.keyboard.up=!1),l(f)&&(A.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{A.pointer.x=-.5*A.screen.width+f.pageX,A.pointer.y=.5*A.screen.height-f.pageY,u(f)&&(A.pointer.down=!0,A.pointer.isDown=!0),v(f)&&(A.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{A.pointer.move=!0,A.pointer.x=-.5*A.screen.width+f.pageX,A.pointer.y=.5*A.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(A.pointer.up=!0,A.pointer.isDown=!1),v(f)&&(A.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(A.pointer.up=!0,A.pointer.isDown=!1),v(f)&&(A.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{A.wheel.deltaX=f.deltaX,A.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(A)}),window.addEventListener("focus",f=>{s(A)}),window.addEventListener("visibilitychange",f=>{s(A)}),window.addEventListener("resize",()=>{A.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,g=h-A.clock;g<.009||(A.dt=g,A.clock=h,e.ports.tick.send(A),d(A)),window.requestAnimationFrame(m)}},Q3=()=>{at("pointerdown"),at("wheel"),at("keydown")},at=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},K3=Y3.Main.init({node:document.querySelector("#app div"),flags:{inputs:A}});Q3();X3(K3);
