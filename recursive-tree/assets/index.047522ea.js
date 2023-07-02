(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function mr(e,r,n){return n.a=e,n.f=r,n}function $(e){return mr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ye(e){return mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Me(e){return mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function gt(e){return mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ce(e){return mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function ht(e){return mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ie(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function $i(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function oa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Bl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Al=[];function Fl(e){return e.length}var Ul=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Rl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),El=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Vl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Nl()),r});function Nl(e){return"<internals>"}function Yr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Lr(e,r){for(var n,a=[],t=Ga(e,r,0,a);t&&(n=a.pop());t=Ga(n.a,n.b,0,a));return t}function Ga(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Yr(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=wo(e),r=wo(r));for(var t in e)if(!Ga(e[t],r[t],n+1,a))return!1;return!0}$(Lr);$(function(e,r){return!Lr(e,r)});function N(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=N(e.a,r.a))||(n=N(e.b,r.b))?n:N(e.c,r.c);for(;e.b&&r.b&&!(n=N(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return N(e,r)<0});$(function(e,r){return N(e,r)<1});$(function(e,r){return N(e,r)>0});$(function(e,r){return N(e,r)>=0});var jl=$(function(e,r){var n=N(e,r);return n<0?Ei:n?x$:Ri}),mn=0;function z(e,r){return{a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function Oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ae);function ae(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ze(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ze(e.a,r);return n}var T={$:0};function Ze(e,r){return{$:1,a:e,b:r}}var Gl=$(Ze);function b(e){for(var r=T,n=e.length;n--;)r=Ze(e[n],r);return r}function ia(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Wl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});ye(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return b(i)});Me(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(ia(r).sort(function(n,a){return N(e(n),e(a))}))});$(function(e,r){return b(ia(r).sort(function(n,a){var t=o(e,n,a);return t===Ri?0:t===Ei?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Yl=$(Math.pow);$(function(e,r){return r%e});var Hl=$(function(e,r){var n=r%e;return e===0?Yr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Il=Math.PI,Ol=Math.cos,Jl=Math.sin,ql=Math.tan,Zl=Math.atan,Ql=$(Math.atan2);function Xl(e){return e}function Kl(e){return e===1/0||e===-1/0}var eu=Math.ceil,ru=Math.floor,nu=Math.round,au=Math.sqrt,vo=Math.log,tu=isNaN;function ou(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var iu=$(function(e,r){return e+r});function cu(e){var r=e.charCodeAt(0);return isNaN(r)?I:K(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function lu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function uu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var vu=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),$u=$(function(e,r){return r.split(e)}),fu=$(function(e,r){return r.join(e)}),su=y(function(e,r,n){return n.slice(e,r)});function mu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var du=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),pu=$(function(e,r){return r.indexOf(e)>-1}),bu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var gu=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function fi(e){return e+""}function hu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return I;r=10*r+i-48}return t==a?I:K(n==45?-r:r)}function _u(e){if(e.length===0||/[\sxbo]/.test(e))return I;var r=+e;return r===r?K(r):I}function Cu(e){return ia(e).join("")}function yu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Lu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Su(e){return{$:0,a:e}}function _t(e){return{$:2,b:e}}var wu=_t(function(e){return typeof e=="boolean"?te(e):Ie("a BOOL",e)}),Tu=_t(function(e){return typeof e=="number"?te(e):Ie("a FLOAT",e)}),xu=_t(function(e){return typeof e=="string"?te(e):e instanceof String?te(e+""):Ie("a STRING",e)});function Pu(e){return{$:3,b:e}}var Mu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function dr(e,r){return{$:9,f:e,g:r}}var zu=$(function(e,r){return{$:10,b:r,h:e}}),ku=$(function(e,r){return dr(e,[r])}),Du=y(function(e,r,n){return dr(e,[r,n])});F(function(e,r,n,a){return dr(e,[r,n,a])});ye(function(e,r,n,a,t){return dr(e,[r,n,a,t])});Me(function(e,r,n,a,t,i){return dr(e,[r,n,a,t,i])});gt(function(e,r,n,a,t,i,c){return dr(e,[r,n,a,t,i,c])});ce(function(e,r,n,a,t,i,c,l){return dr(e,[r,n,a,t,i,c,l])});ht(function(e,r,n,a,t,i,c,l,u){return dr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Be(e,n)}catch(a){return se(o(Dt,"This is not valid JSON! "+a.message,r))}});var si=$(function(e,r){return Be(e,r)});function Be(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?te(e.c):Ie("null",r);case 3:return yn(r)?$o(e.b,r,b):Ie("a LIST",r);case 4:return yn(r)?$o(e.b,r,Bu):Ie("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ie("an OBJECT with a field named `"+n+"`",r);var v=Be(e.b,r[n]);return Ve(v)?v:se(o(To,n,v.a));case 7:var a=e.e;if(!yn(r))return Ie("an ARRAY",r);if(a>=r.length)return Ie("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Be(e.b,r[a]);return Ve(v)?v:se(o(Vi,a,v.a));case 8:if(typeof r!="object"||r===null||yn(r))return Ie("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=Be(e.b,r[i]);if(!Ve(v))return se(o(To,i,v.a));t=Ze(z(i,v.a),t)}return te(Te(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Be(l[u],r);if(!Ve(v))return v;c=c(v.a)}return te(c);case 10:var v=Be(e.b,r);return Ve(v)?Be(e.h(v.a),r):v;case 11:for(var s=T,m=e.g;m.b;m=m.b){var v=Be(m.a,r);if(Ve(v))return v;s=Ze(v.a,s)}return se(P$(Te(s)));case 1:return se(o(Dt,e.a,r));case 0:return te(e.a)}}function $o(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Be(e,r[i]);if(!Ve(c))return se(o(Vi,i,c.a));t[i]=c.a}return te(n(t))}function yn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Bu(e){return o(H$,e.length,function(r){return e[r]})}function Ie(e,r){return se(o(Dt,"Expecting "+e,r))}function Ar(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ar(e.b,r.b);case 6:return e.d===r.d&&Ar(e.b,r.b);case 7:return e.e===r.e&&Ar(e.b,r.b);case 9:return e.f===r.f&&fo(e.g,r.g);case 10:return e.h===r.h&&Ar(e.b,r.b);case 11:return fo(e.g,r.g)}}function fo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ar(e[a],r[a]))return!1;return!0}var Au=$(function(e,r){return JSON.stringify(r,null,e)+""});function mi(e){return e}y(function(e,r,n){return n[e]=r,n});function Tr(e){return{$:0,a:e}}function Fu(e){return{$:1,a:e}}function lr(e){return{$:2,b:e,c:null}}var Wa=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Uu(e){return{$:5,b:e}}var Ru=0;function Ct(e){var r={$:0,e:Ru++,f:e,g:null,h:[]};return yt(r),r}function di(e){return lr(function(r){r(Tr(Ct(e)))})}function pi(e,r){e.h.push(r),yt(e)}var Eu=$(function(e,r){return lr(function(n){pi(e,r),n(Tr(mn))})}),ga=!1,so=[];function yt(e){if(so.push(e),!ga){for(ga=!0;e=so.shift();)Vu(e);ga=!1}}function Vu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return Lt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Lt(e,r,n,a,t,i){var c=o(si,e,r?r.flags:void 0);Ve(c)||Yr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Nu(l,d);function d(f,h){var g=o(a,f,v);s(v=g.a,h),po(l,g.b,t(v))}return po(l,u.b,t(v)),m?{ports:m}:{}}var Je={};function Nu(e,r){var n;for(var a in Je){var t=Je[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Gu(t,r)}return n}function ju(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Gu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Wa,l,Uu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ct(o(Wa,l,e.b))}var Wu=$(function(e,r){return lr(function(n){e.g(r),n(Tr(mn))})});$(function(e,r){return o(Eu,e.h,{$:0,a:r})});function bi(e){return function(r){return{$:1,k:e,l:r}}}function Yu(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var mo=[],ha=!1;function po(e,r,n){if(mo.push({p:e,q:r,r:n}),!ha){ha=!0;for(var a;a=mo.shift();)Hu(a.p,a.q,a.r);ha=!1}}function Hu(e,r,n){var a={};Nn(!0,r,a,null),Nn(!1,n,a,null);for(var t in e)pi(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Nn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Iu(e,t,a,r.l);n[t]=Ou(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Nn(e,c.a,n,a);return;case 3:Nn(e,r.o,n,{s:r.n,t:a});return}}function Iu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Je[r].e:Je[r].f;return o(i,t,a)}function Ou(e,r,n){return n=n||{i:T,j:T},e?n.i=Ze(r,n.i):n.j=Ze(r,n.j),n}function Ju(e){Je[e]&&Yr(3)}$(function(e,r){return r});function qu(e,r){return Ju(e),Je[e]={f:Zu,u:r,a:Qu},bi(e)}var Zu=$(function(e,r){return function(n){return e(r(n))}});function Qu(e,r){var n=T,a=Je[e].u,t=Tr(null);Je[e].b=t,Je[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(si,a,c);Ve(l)||Yr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var jn,ar=typeof document<"u"?document:{};function St(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild($r(e,function(){}),t),{}});function Ya(e){return{$:0,a:e}}var gi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:wt(n),e:t,f:e,b:i}})}),xr=gi(void 0),Xu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:wt(n),e:t,f:e,b:i}})}),Ku=Xu(void 0);function ev(e,r,n,a){return{$:3,d:wt(e),g:r,h:n,i:a}}var rv=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return pr([e,r],function(){return e(r)})});y(function(e,r,n){return pr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return pr([e,r,n,a],function(){return p(e,r,n,a)})});ye(function(e,r,n,a,t){return pr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});Me(function(e,r,n,a,t,i){return pr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});gt(function(e,r,n,a,t,i,c){return pr([e,r,n,a,t,i,c],function(){return ie(e,r,n,a,t,i,c)})});ce(function(e,r,n,a,t,i,c,l){return pr([e,r,n,a,t,i,c,l],function(){return $i(e,r,n,a,t,i,c,l)})});ht(function(e,r,n,a,t,i,c,l,u){return pr([e,r,n,a,t,i,c,l,u],function(){return oa(e,r,n,a,t,i,c,l,u)})});var hi=$(function(e,r){return{$:"a0",n:e,o:r}}),nv=$(function(e,r){return{$:"a1",n:e,o:r}}),_i=$(function(e,r){return{$:"a2",n:e,o:r}}),br=$(function(e,r){return{$:"a3",n:e,o:r}}),av=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function tv(e){return e=="script"?"p":e}function ov(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(hi,r.n,iv(e,r.o)):r});function iv(e,r){var n=Rt(r);return{$:r.$,a:n?p(I$,n<3?cv:lv,Se(e),r.a):o(Hn,e,r.a)}}var cv=$(function(e,r){return z(e(r.a),r.b)}),lv=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function wt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?bo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?bo(c,t,i):c[t]=i}return r}function bo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function $r(e,r){var n=e.$;if(n===5)return $r(e.k||(e.k=e.m()),r);if(n===0)return ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=$r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ha(c,r,e.d),c}var c=e.f?ar.createElementNS(e.f,e.c):ar.createElement(e.c);jn&&e.c=="a"&&c.addEventListener("click",jn(c)),Ha(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)St(c,$r(n===1?l[u]:l[u].b,r));return c}function Ha(e,r,n){for(var a in n){var t=n[a];a==="a1"?uv(e,t):a==="a0"?fv(e,r,t):a==="a3"?vv(e,t):a==="a4"?$v(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function uv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function vv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function $v(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function fv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=sv(r,i),e.addEventListener(t,c,Tt&&{passive:Rt(i)<2}),a[t]=c}}var Tt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Tt=!0}}))}catch{}function sv(e,r){function n(a){var t=n.q,i=Be(t.a,a);if(!!Ve(i)){for(var c=Rt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function mv(e,r){return e.$==r.$&&Ar(e.a,r.a)}function Ci(e,r){var n=[];return Ne(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ne(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=yv(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ne(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){$e(n,0,a,r);return}(f?!dv(m,d):m!==d)&&$e(n,2,a,d),Ne(h,g,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:go(e,r,n,a,pv);return;case 2:go(e,r,n,a,bv);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=xt(e.d,r.d);C&&$e(n,4,a,C);var L=r.i(e.g,r.g);L&&$e(n,5,a,L);return}}}function dv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function go(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=xt(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&mv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function pv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ne(s,i[v],n,++a),a+=s.b||0}}function bv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],g=u[d],C=h.a,L=g.a,_=h.b,x=g.b,A=void 0,J=void 0;if(C===L){f++,Ne(_,x,t,f),f+=_.b||0,m++,d++;continue}var W=l[m+1],j=u[d+1];if(W){var q=W.a,O=W.b;J=L===q}if(j){var V=j.a,Q=j.b;A=C===V}if(A&&J){f++,Ne(_,Q,t,f),qr(i,t,C,x,d,c),f+=_.b||0,f++,Zr(i,t,C,O,f),f+=O.b||0,m+=2,d+=2;continue}if(A){f++,qr(i,t,L,x,d,c),Ne(_,Q,t,f),f+=_.b||0,m+=1,d+=2;continue}if(J){f++,Zr(i,t,C,_,f),f+=_.b||0,f++,Ne(O,x,t,f),f+=O.b||0,m+=2,d+=1;continue}if(W&&q===V){f++,Zr(i,t,C,_,f),qr(i,t,L,x,d,c),f+=_.b||0,f++,Ne(O,Q,t,f),f+=O.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Zr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],g=u[d];qr(i,t,g.a,g.b,void 0,X),d++}(t.length>0||c.length>0||X)&&$e(n,8,a,{w:t,x:c,y:X})}var yi="_elmW6BL";function qr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ne(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}qr(e,r,n+yi,a,t,i)}function Zr(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ne(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}Zr(e,r,n+yi,a,t)}function Li(e,r,n,a){Qr(e,r,n,0,0,r.b,a)}function Qr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Li(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Qr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Qr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Qr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,C=0;C<h.length;C++){t++;var L=d===1?h[C]:h[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=Qr(g[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Si(e,r,n,a){return n.length===0?e:(Li(e,r,n,a),Gn(e,n))}function Gn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=gv(t,a);t===e&&(e=i)}return e}function gv(e,r){switch(r.$){case 0:return hv(e,r.s,r.u);case 4:return Ha(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Gn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore($r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Gn(e,i.w),e;case 8:return _v(e,r);case 5:return r.s(e);default:Yr(10)}}function hv(e,r,n){var a=e.parentNode,t=$r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function _v(e,r){var n=r.s,a=Cv(n.y,r);e=Gn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:$r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&St(e,a),e}function Cv(e,r){if(!!e){for(var n=ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;St(n,i.c===2?i.s:$r(i.z,r.u))}return n}}function Pt(e){if(e.nodeType===3)return Ya(e.textContent);if(e.nodeType!==1)return Ya("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ze(o(br,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=Ze(Pt(v[a]),u);return p(xr,l,r,u)}function yv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Lv=F(function(e,r,n,a){return Lt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Pt(l);return wi(i,function(v){var s=c(v),m=Ci(u,s);l=Si(l,u,m,t),u=s})})});F(function(e,r,n,a){return Lt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ar.title,v=ar.body,s=Pt(v);return wi(i,function(m){jn=c;var d=l(m),f=xr("body")(T)(d.eu),h=Ci(s,f);v=Si(v,s,h,t),s=f,jn=0,u!==d.fL&&(ar.title=u=d.fL)})})});var Wn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function wi(e,r){r(e);var n=0;function a(){n=n===1?0:(Wn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Wn(a),n=2)}}$(function(e,r){return o(Nt,Et,lr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Nt,Et,lr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Nt,Et,lr(function(){history.replaceState({},"",r),e()}))});var Sv={addEventListener:function(){},removeEventListener:function(){}},wv=typeof window<"u"?window:Sv;y(function(e,r,n){return di(lr(function(a){function t(i){Ct(n(i))}return e.addEventListener(r,t,Tt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Be(e,r);return Ve(n)?K(n.a):I});function Ti(e,r){return lr(function(n){Wn(function(){var a=document.getElementById(e);n(a?Tr(r(a)):Fu(J$(e)))})})}function Tv(e){return lr(function(r){Wn(function(){r(Tr(e()))})})}$(function(e,r){return Ti(r,function(n){return n[e](),mn})});$(function(e,r){return Tv(function(){return wv.scroll(e,r),mn})});y(function(e,r,n){return Ti(e,function(a){return a.scrollLeft=r,a.scrollTop=n,mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var xv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return K(new RegExp(r,n))}catch{return I}});$(function(e,r){return r.match(e)!==null});var Pv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?K(m):I}a.push(w(Cc,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?K(v):I}return n(w(Cc,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Mv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/zv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function zv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Mt=new Float64Array(3),ho=new Float64Array(3),_o=new Float64Array(3),kv=y(function(e,r,n){return new Float64Array([e,r,n])}),Dv=function(e){return e[0]},Bv=function(e){return e[1]},Av=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Fv=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(xi);function Pi(e,r,n){return n===void 0&&(n=new Float64Array(3)),Yn(xi(e,r,n),n)}$(Pi);function Mi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Yn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Mi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Uv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Xr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Xr);function Ia(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ia);$(function(e,r){var n,a=Mt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Xr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Xr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Xr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Xr(r,a)+e[14])/n,t});var Rv=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Ev=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},Vv=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Nv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Nv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var jv=new Float64Array(16),Gv=new Float64Array(16),Wv=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Yv=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function zi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Me(zi);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return zi(c,l,i,t,n,a)});function ki(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Me(ki);F(function(e,r,n,a){return ki(e,r,n,a,-1,1)});function Di(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],g=e[12],C=e[13],L=e[14],_=e[15],x=r[0],A=r[1],J=r[2],W=r[3],j=r[4],q=r[5],O=r[6],V=r[7],Q=r[8],X=r[9],pe=r[10],be=r[11],ue=r[12],ve=r[13],Re=r[14],Ee=r[15];return n[0]=a*x+l*A+m*J+g*W,n[1]=t*x+u*A+d*J+C*W,n[2]=i*x+v*A+f*J+L*W,n[3]=c*x+s*A+h*J+_*W,n[4]=a*j+l*q+m*O+g*V,n[5]=t*j+u*q+d*O+C*V,n[6]=i*j+v*q+f*O+L*V,n[7]=c*j+s*q+h*O+_*V,n[8]=a*Q+l*X+m*pe+g*be,n[9]=t*Q+u*X+d*pe+C*be,n[10]=i*Q+v*X+f*pe+L*be,n[11]=c*Q+s*X+h*pe+_*be,n[12]=a*ue+l*ve+m*Re+g*Ee,n[13]=t*ue+u*ve+d*Re+C*Ee,n[14]=i*ue+v*ve+f*Re+L*Ee,n[15]=c*ue+s*ve+h*Re+_*Ee,n}$(Di);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],g=r[0],C=r[1],L=r[2],_=r[4],x=r[5],A=r[6],J=r[8],W=r[9],j=r[10],q=r[12],O=r[13],V=r[14];return n[0]=a*g+c*C+v*L,n[1]=t*g+l*C+s*L,n[2]=i*g+u*C+m*L,n[3]=0,n[4]=a*_+c*x+v*A,n[5]=t*_+l*x+s*A,n[6]=i*_+u*x+m*A,n[7]=0,n[8]=a*J+c*W+v*j,n[9]=t*J+l*W+s*j,n[10]=i*J+u*W+m*j,n[11]=0,n[12]=a*q+c*O+v*V+d,n[13]=t*q+l*O+s*V+f,n[14]=i*q+u*O+m*V+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Yn(r,Mt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Mi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,g=i*l*v,C=c*l*v,L=i*i*v+u,_=h+f,x=g-d,A=h-f,J=c*c*v+u,W=C+m,j=g+d,q=C-m,O=l*l*v+u,V=n[0],Q=n[1],X=n[2],pe=n[3],be=n[4],ue=n[5],ve=n[6],Re=n[7],Ee=n[8],Mr=n[9],zr=n[10],ba=n[11],Ml=n[12],zl=n[13],kl=n[14],Dl=n[15];return a[0]=V*L+be*_+Ee*x,a[1]=Q*L+ue*_+Mr*x,a[2]=X*L+ve*_+zr*x,a[3]=pe*L+Re*_+ba*x,a[4]=V*A+be*J+Ee*W,a[5]=Q*A+ue*J+Mr*W,a[6]=X*A+ve*J+zr*W,a[7]=pe*A+Re*J+ba*W,a[8]=V*j+be*q+Ee*O,a[9]=Q*j+ue*q+Mr*O,a[10]=X*j+ve*q+zr*O,a[11]=pe*j+Re*q+ba*O,a[12]=Ml,a[13]=zl,a[14]=kl,a[15]=Dl,a});function Hv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Hv);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Iv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Iv);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],g=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=g,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],g=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=g,n[10]=C,n[11]=L,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=Pi(e,r,Mt),t=Yn(Ia(n,a,ho),ho),i=Yn(Ia(a,t,_o),_o),c=jv,l=Gv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Di(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Co=0;function cn(e,r){for(;r.b;r=r.b)e(r.a)}function zt(e){for(var r=0;e.b;e=e.b)r++;return r}var Ov=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Jv=ye(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),qv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Zv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Qv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Xv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Kv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),e$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),r$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),n$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),a$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},t$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},o$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},i$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Bi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ai=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},c$=function(e){e.gl.disable(e.gl.CULL_FACE)},l$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},u$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},v$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},yo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],$$=[t$,o$,i$,Bi,Ai,c$,l$,u$,v$];function Lo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function f$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Fi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function s$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,C,L){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?C[L]:C[L][_];else i.forEach(function(x){for(_=0;_<h;_++)f[g++]=h===1?C[x][L]:C[x][L][_]})}var u=Fi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(zt(n.b)*s);cn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function m$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=d$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*zt(r.b),indexBuffer:null,buffers:{}}}function d$(e,r){var n=new Uint32Array(zt(e)*r),a=0,t;return cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function So(e,r){return e+"#"+r}var Ui=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Bi(n),Ai(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=So(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Co++,v||(v=Lo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Co++,s||(s=Lo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=f$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=p$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=So(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),b$(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=m$(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=s$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var C=Fi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(h+x),a.vertexAttribPointer(h+x,C.size,C.baseType,!1,_,L*x)}for(n.toggle=!n.toggle,cn(xd(n),i.a),u=0;u<yo.length;u++){var A=n[yo[u]];A.toggle!==n.toggle&&A.enabled&&($$[u](n),A.enabled=!1,A.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return cn(t,e.g),r});function p$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,C=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(C,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(C,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var x=l.textures.get(_);x||(x=_.eC(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[g]!==_&&(e.uniform1i(C,L),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function b$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var g$=y(function(e,r,n){return ev(r,{g:n,f:{},h:e},w$,T$)}),h$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),_$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),C$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),y$=$(function(e,r){e.contextAttributes.antialias=!0}),L$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),S$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function w$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};cn(function(t){return o(Td,r,t)},e.h);var n=ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Ov(function(){return o(Ui,e,n)})):(n=ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function T$(e,r){return r.f=e.f,Ui(r)}var B=Gl,Ln=Vl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Ln,e,l,v)}else{var u=c.a;return p(Ln,i,l,u)}});return p(Ln,i,p(Ln,e,r,t),a)});var kt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(kt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),wo=function(e){return p(kt,y(function(r,n,a){return o(B,z(r,n),a)}),T,e)},Ri=1,x$=2,Ei=0,se=function(e){return{$:1,a:e}},Dt=$(function(e,r){return{$:3,a:e,b:r}}),To=$(function(e,r){return{$:0,a:e,b:r}}),Vi=$(function(e,r){return{$:1,a:e,b:r}}),te=function(e){return{$:0,a:e}},P$=function(e){return{$:2,a:e}},K=function(e){return{$:0,a:e}},I={$:1},M$=du,z$=Au,we=fi,hr=$(function(e,r){return o(fu,e,ia(r))}),Bt=$(function(e,r){return b(o($u,e,r))}),Ni=function(e){return o(hr,`
    `,o(Bt,`
`,e))},dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return p(dn,$(function(r,n){return n+1}),0,e)},k$=Wl,D$=y(function(e,r,n){e:for(;;)if(N(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),At=$(function(e,r){return p(D$,e,r,T)}),ji=$(function(e,r){return p(k$,e,o(At,0,Sr(r)-1),r)}),qe=yu,Gi=function(e){var r=qe(e);return 97<=r&&r<=122},Wi=function(e){var r=qe(e);return r<=90&&65<=r},B$=function(e){return Gi(e)||Wi(e)},A$=function(e){var r=qe(e);return r<=57&&48<=r},F$=function(e){return Gi(e)||Wi(e)||A$(e)},Te=function(e){return p(dn,B,T,e)},Hr=cu,U$=$(function(e,r){return`

(`+(we(e+1)+(") "+Ni(R$(r))))}),R$=function(e){return o(E$,e,T)},E$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=Hr(n);if(g.$===1)return!1;var C=g.a,L=C.a,_=C.b;return B$(L)&&o(M$,F$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(we(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(hr,"",Te(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(we(Sr(s))+" ways:"));return o(hr,`

`,o(B,h,o(ji,U$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(hr,"",Te(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(hr,"",Te(r))+`:

    `):`Problem with the given value:

`}();return h+(Ni(o(z$,4,f))+(`

`+d))}}),xe=32,Oa=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ja=Al,Yi=eu,Ft=$(function(e,r){return vo(r)/vo(e)}),V$=Xl,ln=Yi(o(Ft,2,xe)),Hi=w(Oa,0,ln,Ja,Ja),Ii=Ul,Oi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ji=ru,qa=Fl,je=$(function(e,r){return N(e,r)>0?e:r}),N$=function(e){return{$:0,a:e}},Ut=Rl,j$=$(function(e,r){e:for(;;){var n=o(Ut,xe,e),a=n.a,t=n.b,i=o(B,N$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Te(i)}}),G$=function(e){var r=e.a;return r},W$=$(function(e,r){e:for(;;){var n=Yi(r/xe);if(n===1)return o(Ut,xe,e).a;var a=o(j$,e,T),t=n;e=a,r=t;continue e}}),qi=$(function(e,r){if(r.l){var n=r.l*xe,a=Ji(o(Ft,xe,n-1)),t=e?Te(r.z):r.z,i=o(W$,t,r.l);return w(Oa,qa(r.p)+n,o(je,5,a*ln),i,r.p)}else return w(Oa,qa(r.p),ln,Ja,r.p)}),Y$=ye(function(e,r,n,a,t){e:for(;;){if(r<0)return o(qi,!1,{z:a,l:n/xe|0,p:t});var i=Oi(p(Ii,xe,r,e)),c=e,l=r-xe,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),H$=$(function(e,r){if(e<=0)return Hi;var n=e%xe,a=p(Ii,n,e-n,r),t=e-n-xe;return S(Y$,r,t,e,T,a)}),Ve=function(e){return!e.$},M=zu,Z=wu,P=Mu,oe=Tu,Hn=ku,I$=Du,Se=Su,Rt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Y=xr("div"),O$=function(e){return{$:2,a:e}},Zi=$(function(e,r){return e}),Qi=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Er=function(e){return e},J$=Er,xo=Me(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),q$=pu,_r=lu,Fr=su,pn=$(function(e,r){return e<1?r:p(Fr,e,_r(r),r)}),ca=gu,la=function(e){return e===""},ua=$(function(e,r){return e<1?"":p(Fr,0,e,r)}),Xi=hu,Po=ye(function(e,r,n,a,t){if(la(t)||o(q$,"@",t))return I;var i=o(ca,":",t);if(i.b){if(i.b.b)return I;var c=i.a,l=Xi(o(pn,c+1,t));if(l.$===1)return I;var u=l;return K(ie(xo,e,o(ua,c,t),u,r,n,a))}else return K(ie(xo,e,t,I,r,n,a))}),Mo=F(function(e,r,n,a){if(la(a))return I;var t=o(ca,"/",a);if(t.b){var i=t.a;return S(Po,e,o(pn,i,a),r,n,o(ua,i,a))}else return S(Po,e,"/",r,n,a)}),zo=y(function(e,r,n){if(la(n))return I;var a=o(ca,"?",n);if(a.b){var t=a.a;return w(Mo,e,K(o(pn,t+1,n)),r,o(ua,t,n))}else return w(Mo,e,I,r,n)});$(function(e,r){if(la(r))return I;var n=o(ca,"#",r);if(n.b){var a=n.a;return p(zo,e,K(o(pn,a+1,r)),o(ua,a,r))}else return p(zo,e,I,r)});var Z$=bu,Et=function(e){},bn=Tr,Q$=bn(0),Ki=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(dn,e,r,Te(m)):w(Ki,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ur=y(function(e,r,n){return w(Ki,e,r,0,n)}),de=$(function(e,r){return p(ur,$(function(n,a){return o(B,e(n),a)}),T,r)}),In=Wa,Vt=$(function(e,r){return o(In,function(n){return bn(e(n))},r)}),X$=y(function(e,r,n){return o(In,function(a){return o(In,function(t){return bn(o(e,a,t))},n)},r)}),K$=function(e){return p(ur,X$(B),bn(T),e)},ef=Wu,rf=$(function(e,r){var n=r;return di(o(In,ef(e),n))}),nf=y(function(e,r,n){return o(Vt,function(a){return 0},K$(o(de,rf(e),r)))}),af=y(function(e,r,n){return bn(0)}),tf=$(function(e,r){var n=r;return o(Vt,e,n)});Je.Task=ju(Q$,nf,af,tf);var of=bi("Task"),Nt=$(function(e,r){return of(o(Vt,e,r))}),cf=Lv,lf=ou,On={$:1},ec=function(e){return{$:2,a:e}},va={$:0},Ae=$(function(e,r){return{$:0,a:e,b:r}}),re=y(function(e,r,n){return r(e(n))}),Ir=function(e){var r=e.b.B;return r.a},uf=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return K(o(Ae,r,{B:i,ab:c,T:o(B,a,n)}))}else return I},rc=function(e){var r=e.b;return o(Ae,va,r)},ir=$(function(e,r){if(r.$)return e;var n=r.a;return n}),vf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?rc(n):n;case 2:var i=a.a.cY;return(N(i+r.eJ,Ir(n).a4)>0?o(re,uf,ir(o(Ae,On,t))):Er)(o(Ae,ec({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Qi,l.eA,Oe(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(Ae,va,{B:z(v,s),ab:T,T:o(B,t.B,t.T)})}}),nc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),$f=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),ff=$(function(e,r){return Te(p($f,e,r,T))}),ac=y(function(e,r,n){if(r<=0)return T;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,g=h.a,C=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,g,o(ff,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,g,p(ac,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return b([_])}}),sf=$(function(e,r){return p(ac,0,e,r)}),mf=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ae(Te(n),ae(b([a]),t)),c=o(sf,e,i),l=o(nc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ae,On,{B:u,ab:v,T:Te(c)})}else{var s=Te(c);if(s.b){var m=s.a,d=s.b;return o(Ae,On,{B:m,ab:T,T:d})}else return r}}),df=function(e){var r=e.b;return o(Ae,On,r)},pf=function(e){var r=e.b;return o(Ae,ec({cY:Ir(e).a4}),r)},bf=$(function(e,r){switch(e.$){case 1:return df(r);case 2:return rc(r);case 3:return pf(r);default:var n=e.a;return o(mf,n,r)}}),tc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),gf=$(function(e,r){return Oe(r,{av:e(r.av)})}),hf=function(e){return{$:3,a:e}},_f=function(e){return{$:2,a:e}},oc=$(function(e,r){return{$:0,a:e,b:r}}),Cf=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return I;var n=r.a;return K(e(n))}),G=function(e){return e<0?-e:e},jt=_u,yf=y(function(e,r,n){return o(ir,0/0,jt(o(e,r,n)))}),ic=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Lf=vu,cc=function(e){return p(Lf,B,T,e)},Sf=$(function(e,r){var n=o(ic,function(a){return a!=="0"&&a!=="."},cc(r));return ae(e&&n?"-":"",r)}),ne=fi,Za=iu,lc=Lu,uc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Hr(n);if(a.$===1)return"01";var t=a.a;return o(Za,"0",uc(t))}else{var i=qe(r);return i>=48&&i<57?o(Za,lc(i+1),n):"0"}},Qa=Kl,wf=tu,$a=function(e){return o(Za,e,"")},vc=y(function(e,r,n){return e<=0?n:p(vc,e>>1,ae(r,r),e&1?ae(n,r):n)}),un=$(function(e,r){return p(vc,e,r,"")}),Xa=y(function(e,r,n){return ae(n,o(un,e-_r(n),$a(r)))}),Ka=uu,$c=function(e){var r=o(Bt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Tf=function(e){var r=o(Bt,"e",ne(G(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ir,0,Xi(o(Z$,"+",t)?o(pn,1,t):t)),c=$c(n),l=c.a,u=c.b,v=ae(l,u),s=i<0?o(ir,"0",o(Ce,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Ce,tc($a),Hr(ae(o(un,G(i),"0"),v))))):p(Xa,i+1,"0",v);return ae(e<0?"-":"",s)}else{var n=r.a;return ae(e<0?"-":"",n)}else return""},xf=y(function(e,r,n){if(Qa(n)||wf(n))return ne(n);var a=n<0,t=$c(Tf(G(n))),i=t.a,c=t.b,l=_r(i)+r,u=ae(o(un,-l+1,"0"),p(Xa,l,"0",ae(i,c))),v=_r(u),s=o(je,1,l),m=o(e,a,p(Fr,s,v,u)),d=p(Fr,0,s,u),f=m?Ka(o(ir,"1",o(Ce,uc,Hr(Ka(d))))):d,h=_r(f),g=f==="0"?f:r<=0?ae(f,o(un,G(r),"0")):N(r,_r(c))<0?p(Fr,0,h-r,f)+("."+p(Fr,h-r,h,f)):ae(i+".",p(Xa,r,"0",c));return o(Sf,a,g)}),fc=xf($(function(e,r){var n=Hr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(qe(t))})),Pf=yf(fc),Mf=y(function(e,r,n){var a=o(Ft,10,G(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Pf,t,n)}),sc=jl,Gt=$(function(e,r){e:for(;;){if(r.$===-2)return I;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(sc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return K(a);default:var l=e,u=i;e=l,r=u;continue e}}}),U=ye(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Qe={$:-2},Nr=ye(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(U,0,r,n,S(U,1,v,s,m,d),S(U,1,i,c,l,u))}else return S(U,e,i,c,S(U,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,C=f.d,L=f.e,d=a.e;return S(U,0,v,s,S(U,1,h,g,C,L),S(U,1,r,n,d,t))}else return S(U,e,r,n,a,t)}),et=y(function(e,r,n){if(n.$===-2)return S(U,0,e,r,Qe,Qe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(sc,e,t);switch(u){case 0:return S(Nr,a,t,i,p(et,e,r,c),l);case 1:return S(U,a,t,r,c,l);default:return S(Nr,a,t,i,c,p(et,e,r,l))}}),en=y(function(e,r,n){var a=p(et,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(U,1,t,i,c,l)}else{var u=a;return u}}),zf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},mc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,g=d.d,C=d.e,L=v.e;return S(U,0,f,h,S(U,1,n,a,S(U,0,i,c,l,u),g),S(U,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var s=x.b,m=x.c,d=x.d,L=x.e;return S(U,1,n,a,S(U,0,i,c,l,u),S(U,0,s,m,d,L))}else return e},ko=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,g=f.c,C=f.d,L=f.e;return S(U,0,i,c,S(U,1,u,v,s,m),S(U,1,n,a,d,S(U,0,h,g,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,d=_.e,A=e.e;A.a;var h=A.b,g=A.c,C=A.d,L=A.e;return S(U,1,n,a,S(U,0,i,c,x,d),S(U,0,h,g,C,L))}else return e},kf=gt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(U,n,l,u,v,S(U,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,ko(r)}else break e;else return c.a,c.d,ko(r);else break e;return r}}),Dn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(U,r,n,a,Dn(t),l);var u=mc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Nr,v,s,m,Dn(d),f)}else return Qe}else return S(U,r,n,a,Dn(t),l)}else return Qe},rn=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(N(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(U,n,a,t,o(rn,e,i),c);var u=mc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Nr,v,s,m,o(rn,e,d),f)}else return Qe}else return S(U,n,a,t,o(rn,e,i),c);else return o(Df,e,$i(kf,e,r,n,a,t,i,c))}),Df=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Lr(e,a)){var l=zf(c);if(l.$===-1){var u=l.b,v=l.c;return S(Nr,n,u,v,i,Dn(c))}else return Qe}else return S(Nr,n,a,t,i,o(rn,e,c))}else return Qe}),Bf=$(function(e,r){var n=o(rn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(U,1,a,t,i,c)}else{var l=n;return l}}),Sn=y(function(e,r,n){var a=r(o(Gt,e,n));if(a.$)return o(Bf,e,n);var t=a.a;return p(en,e,t,n)}),Af=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Sn,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Cf,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Sn,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(oc,z(i,c),p(Mf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Sn,r,Ce(function(a){return a.$===3?hf(n):a}));default:var r=e.a,n=e.b;return o(Sn,r,Ce(function(a){return a.$===2?_f(n):a}))}},Ff=function(e){return gf(Af(e))},Uf=$(function(e,r){return o(de,Ff(e),r)}),Rf=$(function(e,r){return Oe(r,{eA:o(Uf,e,r.eA)})}),Ef=$(function(e,r){var n=r.a,a=r.b;return o(Ae,n,Oe(a,{B:o(tc,Rf(e),a.B)}))}),Vf=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Nf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ae,a,Oe(t,{B:o(Vf,o(e,i.a,r),i)}))}),jf=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Oe(a,{aL:!a.aL});case 2:var t=n.a;return Oe(a,{G:p(vf,e,t,a.G)});case 3:var i=n.a;return Oe(a,{G:o(Ef,i,a.G)});case 4:var c=n.a;return Oe(a,{G:p(Nf,r,c,a.G)});default:var l=n.a;return Oe(a,{G:o(bf,l,a.G)})}}),Gf=$(function(e,r){return o(Ae,va,{B:z(e,r(e)),ab:T,T})}),Wf=Yu,Do=Wf(T),Jn=Pu,vn=xu,Yf=qu("tick",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return Se({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(P,"clock",oe))},o(P,"devicePixelRatio",oe))},o(P,"dt",oe))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(m){return Se({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",Z))},o(P,"control",Z))},o(P,"down",Z))},o(P,"downs",Jn(vn)))},o(P,"left",Z))},o(P,"pressedKeys",Jn(vn)))},o(P,"right",Z))},o(P,"shift",Z))},o(P,"up",Z))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return Se({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",Z))},o(P,"isDown",Z))},o(P,"move",Z))},o(P,"rightDown",Z))},o(P,"rightUp",Z))},o(P,"up",Z))},o(P,"x",oe))},o(P,"y",oe))))},o(P,"screen",o(M,function(r){return o(M,function(n){return Se({eW:n,fS:r})},o(P,"height",oe))},o(P,"width",oe))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return Se({eE:r,eF:e})},o(P,"deltaX",oe))},o(P,"deltaY",oe))))),Hf=function(e){return{$:4,a:e}},If={$:0},Of=mi,Ue=$(function(e,r){return o(_i,e,Of(r))}),E=Ue("className"),Jf=function(e){var r=e.b.B;return r.b},qn=Ue("id"),qf=rv,Zn=qf,Zf=nv,ee=Zf,Qf={$:1},Xf=function(e){return{$:3,a:e}},Kf=function(e){return{$:5,a:e}},Bo=xr("a"),Wt=xr("button"),Ao=function(e){return o(Ue,"href",ov(e))},es=br("clip-rule"),ge=br("d"),rs=br("fill"),dc=gi("http://www.w3.org/2000/svg"),ns=dc("svg"),as=br("viewBox"),ts=o(av,"http://www.w3.org/XML/1998/namespace","xml:space"),ze=ns(b([as("0 0 24 24"),rs("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),ts("http://www.w3.org/2000/svg")])),os=br("fill-rule"),he=dc("path"),yr={eD:ze(b([o(he,b([ge("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eQ:ze(b([o(he,b([ge("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),eV:ze(b([o(he,b([ge("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fe:ze(b([o(he,b([ge("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(he,b([ge("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),ff:ze(b([o(he,b([ge("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(he,b([ge("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fp:ze(b([o(he,b([ge("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fq:ze(b([o(he,b([ge("M7 5V19L18 12L7 5Z")]),T)])),fr:ze(b([o(he,b([ge("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),fs:ze(b([o(he,b([ge("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fM:ze(b([o(he,b([os("evenodd"),es("evenodd"),ge("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fN:ze(b([o(he,b([ge("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f0:ze(b([o(he,b([ge("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},is=function(e){return{$:0,a:e}},pc=hi,bc=$(function(e,r){return o(pc,e,is(r))}),Yt=function(e){return o(bc,"click",Se(e))},Fo=Ue("target"),cs=Ue("title"),rt=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(U,n,a,o(e,a,t),o(rt,e,i),o(rt,e,c))}),ls=Ya,cr=ls,us=function(e){return p(kt,y(function(r,n,a){return o(B,n,a)}),T,e)},vs=$(function(e,r){return{$:3,a:e,b:r}}),$s=$(function(e,r){return{$:2,a:e,b:r}}),fs=$(function(e,r){return{$:0,a:e,b:r}}),ss=$(function(e,r){return{$:1,a:e,b:r}}),Pr=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ms=w(Pr,0/255,0/255,0/255,1),ds=mi,gc=$(function(e,r){return o(_i,e,ds(r))}),ps=gc("checked"),Ge=nu,bs=y(function(e,r,n){return ae(o(un,e-_r(n),$a(r)),n)}),gs=Hl,hc=function(e){var r=function(n){return n<10?we(n):$a(lc(87+n))};return e<16?r(e):ae(hc(e/16|0),r(o(gs,16,e)))},hs=o(re,hc,o(bs,2,"0")),_c=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},_s=function(e){var r=_c(e),n=r.cN,a=r.cd,t=r.b6;return o(hr,"",o(B,"#",o(de,o(re,Ge,hs),b([n*255,a*255,t*255]))))},nt=Ue("htmlFor"),at=$(function(e,r){if(r.$)return I;var n=r.a;return e(n)}),Qn=$(function(e,r){if(r.$){var a=r.a;return se(a)}else{var n=r.a;return e(n)}}),Cs=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),Ht=$(function(e,r){return p(ur,Cs(e),T,r)}),Cc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),ys=Pv,Ls=Cu,Ss=$(function(e,r){if(r.$)return se(e);var n=r.a;return te(n)}),ws=xv,Ts=function(e){return o(ws,{ew:!1,fg:!1},e)},It=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return I},xs=$(function(e,r){if(r.$){var a=r.a;return se(a)}else{var n=r.a;return te(e(n))}}),Ps=function(e){return{$:2,a:e}},Ms=function(e){return{$:0,a:e}},zs=function(e){return{$:1,a:e}},_a=$(function(e,r){return qe(r)-qe(e)}),Ca=y(function(e,r,n){var a=qe(n);return N(qe(e),a)<1&&N(a,qe(r))<1}),ks=$(function(e,r){var n=function(t){return N(t,e)<0?te(t):se(zs(r))},a=p(Ca,"0","9",r)?te(o(_a,"0",r)):p(Ca,"a","z",r)?te(10+o(_a,"a",r)):p(Ca,"A","Z",r)?te(10+o(_a,"A",r)):se(Ms(r));return o(Qn,n,a)}),yc=$(function(e,r){var n=Hr(r);if(n.$===1)return te(0);var a=n.a,t=a.a,i=a.b;return o(Qn,function(c){return o(Qn,function(l){return te(c+l*e)},o(yc,e,i))},o(ks,e,t))}),Ds=$(function(e,r){return 2<=e&&e<=36?o(yc,e,Ka(r)):se(Ps(e))}),Bs=Ds(16),As=y(function(e,r,n){return w(Pr,e,r,n,1)}),Fs=F(function(e,r,n,a){return w(Pr,e,r,n,a)}),wr=Yl,Us=$(function(e,r){var n=o(wr,10,e);return Ge(r*n)/n}),Rs=mu,Es=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=cc(n);if(a.b&&!a.b.b){var t=a.a;return Ls(b([t,t]))}else return n};return o(re,Rs,o(re,function(n){return o(Ce,function(a){return p(ys,1,a,n)},Ts(e))},o(re,at(It),o(re,Ce(function(n){return n.fG}),o(re,Ce(Ht(Er)),o(re,Ss("Parsing hex regex failed"),Qn(function(n){var a=o(de,o(re,r,o(re,Bs,xs(V$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return te(w(Fs,t/255,c/255,u/255,o(Us,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return te(p(As,t/255,c/255,u/255))}else break e;return se("Parsing ints from hex failed")})))))))}(),Xn=xr("input"),tt=xr("label"),ot=Ue("name"),Lc=$(function(e,r){return p(ur,P,r,e)}),Vs=o(Lc,b(["target","checked"]),Z),Ns=function(e){return o(bc,"change",o(Hn,e,Vs))},js=function(e){return z(e,!0)},Gs=function(e){return{$:1,a:e}},Ws=$(function(e,r){return o(pc,e,Gs(r))}),Ys=o(Lc,b(["target","value"]),vn),Ot=function(e){return o(Ws,"input",o(Hn,js,o(Hn,e,Ys)))},Sc=Ue("max"),wc=Ue("min"),Tc=function(e){return o(Ue,"step",e)},Kn=Ue("type"),Jt=Ue("value"),Uo=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(Y,T,b([o(tt,b([nt(r)]),b([o(Y,b([E("relative w-full")]),b([o(Y,b([E("inline-block")]),b([cr(r)])),o(Y,b([E("inline-block float-right")]),b([cr(ne(n))]))]))])),o(Xn,b([Kn("range"),o(ee,"width","100%"),qn(r),ot(r),wc(ne(a)),Sc(ne(t)),Jt(ne(n)),Tc(ne(i)),Ot(o(re,jt,o(re,ir(42),c)))]),T)]))},Hs=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Is=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(Y,b([E("h-12 py-4")]),b([o(tt,b([E("block"),nt(e)]),b([o(Xn,b([E("relative bottom-[1px] align-middle mr-2"),Kn("checkbox"),qn(e),ot(e),Ns(vs(e)),ps(c)]),T),cr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Uo({cg:e,cs:i,cw:t,cA:fs(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Uo({cg:e,cs:i,cw:t,cA:o(re,Ge,ss(e)),cW:1,c1:c});default:var c=r.a;return o(Y,T,b([o(Y,b([o(ee,"margin-bottom","6px")]),b([o(tt,b([nt(e)]),b([cr(e)]))])),o(Xn,b([Kn("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),qn(e),ot(e),Ot(function(l){return o($s,e,o(Hs,ms,Es(l)))}),Jt(_s(c))]),T)]))}}),Os=function(e){return o(Y,b([E("p-4 border-y-[0.5px] border-white20")]),b([o(Y,b([E("text-lg pb-2")]),b([cr(e.fh)])),o(Y,b([E("pl-2 pr-2")]),us(o(rt,Is,e.av)))]))},Js=function(e){return o(Y,b([E("text-xs text-white60")]),o(de,Os,e))},qs=function(e){return o(Y,b([E("absolute left-[104px] bottom-2 text-sm text-white40")]),b([cr("clock: "+o(fc,3,Ir(e).a4))]))},Zs=function(e){e.a;var r=e.b.T;return o(Ce,function(n){return Ge(60/(Ir(e).a4-n))},o(Ce,o(re,G$,function(n){return n.a4}),It(o(nc,59,r))))},Qs=function(e){return o(Y,b([E("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Zs(e);if(r.$===1)return b([cr("... Fps")]);var n=r.a;return b([cr(we(n)+" Fps")])}())},Xs=function(e){return{$:0,a:e}},Ks=function(e){var r=e.b.T;return Sr(r)},em=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Sr(r)+1+Sr(n)},rm=function(e){return o(Xn,b([E("absolute w-full"),Kn("range"),wc(we(0)),Sc(we(em(e)-1)),Jt(we(Ks(e))),Tc(we(1)),Ot(o(re,jt,o(re,ir(42),o(re,Ge,Xs))))]),T)},Ro={$:1},Eo={$:3},Vo={$:2},it=function(e){return!e.b},xc=gc("disabled"),ya=y(function(e,r,n){return o(Wt,b([E("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),E(n),xc(e),Yt(r)]),b([cr("REC")]))}),La=y(function(e,r,n){return o(Wt,b([E("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),xc(e),Yt(n)]),b([o(Y,b([E("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),nm=function(e){var r=e.a,n=e.b.ab;return o(Y,b([E("py-1")]),b([function(){switch(r.$){case 0:return p(ya,!1,Ro,"text-red-500 font-bold");case 1:return p(ya,!1,Vo,"text-white60 hover:text-white80 font-bold");default:return p(ya,!0,Vo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(La,it(n),yr.fq,Eo);case 1:return p(La,it(n),yr.fq,Eo);default:return p(La,!1,yr.fp,Ro)}}()]))},am=function(e){return o(Y,b([E("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([rm(e),nm(e),Qs(e),qs(e)]))},tm=function(e){var r=e.a;return Lr(r,va)},om=$(function(e,r){var n=tm(r.G)?o(Y,T,T):o(Y,b([E("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.fs.fU+.5*e.cT.fS)+"px"),o(ee,"top",ne(-e.fs.fY+.5*e.cT.eW)+"px")]),b([o(Y,b([E(e.fs.e4?"text-black80":"text-black40")]),b([yr.fs]))]));return o(Y,T,b([n]))}),im=$(function(e,r){var n=o(Wt,b([E(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Yt(Qf),cs("Distraction Free Mode")]),b([yr.f0])),a=40,t=260,i=o(Y,b([E("absolute w-8 bottom-12")]),b([o(Bo,b([E("text-twitterBlue40 hover:text-twitterBlue"),Ao("https://twitter.com/AzizErkalSelman"),Fo("_blank")]),b([yr.fN]))])),c=80,l=o(Y,b([E("absolute w-8 bottom-2")]),b([o(Bo,b([E("text-githubCat40 hover:text-githubCat"),Ao("https://github.com/erkal/elm-3d-playground-exploration"),Fo("_blank")]),b([yr.eQ]))])),u=e.cT.fS>640?H(e.cT.eW,a+t,e.cT.fS-(a+t)):H(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(Y,b([E("fixed w-10 h-10 p-1")]),b([n])):o(Y,T,b([o(Y,b([E("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),b([n,i,l])),o(Y,b([E("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),b([o(Zn,Xf,Js(Ir(r.G).eA))])),o(Y,b([E("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),b([o(Zn,Kf,am(r.G))])),o(om,e,r)]))}),cm=y(function(e,r,n){var a=Jf(n.G),t=Ir(n.G);return o(Y,b([E("bg-black40"),E("select-none"),E("antialiased"),E("font-mono"),o(ee,"width",ne(t.cT.fS)+"px"),o(ee,"height",ne(t.cT.eW)+"px")]),b([o(Y,b([E("fixed")]),b([o(Zn,Zi(If),o(e,t,a))])),o(Y,b([qn("gui")]),b([o(im,t,n),o(Zn,Hf,o(r,t,a))]))]))}),lm=Me(function(e,r,n,a,t,i){var c=$(function(u,v){return z(w(jf,r,i,u,v),Do)}),l=function(u){var v=o(Qi,n,u.e1);return z({aL:u.e1.cT.fS<500,G:o(Gf,v,a)},Do)};return cf({e0:l,fH:Zi(Yf(O$)),fO:c,fQ:o(cm,e,t)})}),um=F(function(e,r,n,a){return ie(lm,e,r,n,a,$(function(t,i){return o(Y,T,T)}),y(function(t,i,c){return c}))}),vm=function(e){return{}},$m=y(function(e,r,n){return{av:n,e5:r,fh:e}}),Pc=Qe,fm=function(e){return p(dn,$(function(r,n){var a=r.a,t=r.b;return p(en,a,t,n)}),Pc,e)},sm=y(function(e,r,n){return p($m,e,r,fm(n))}),mm=sm,No=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(oc,z(a,t),n))}),dm=b([p(mm,"Parameters",!0,b([p(No,"s",z(1,2),1.5),p(No,"t",z(1,2),1.5)]))]),pm=$(function(e,r){return r}),$n=Il,ct=function(e){return e*$n/180},bm=w(Pr,114/255,159/255,207/255,1),gm=Zl,rr=au,hm=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(je,G(c),o(je,G(i),G(t)));if(l){var u=t/l,v=i/l,s=c/l,m=rr(s*s+v*v+u*u);return K({fU:s/m,fY:v/m,c6:u/m})}else return I}),Sa=function(e){return e},qt=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Bn=function(e){var r=e,n=o(je,G(r.fU),o(je,G(r.fY),G(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=rr(i*i+t*t+a*a);return K({fU:i/c,fY:t/c,c6:a/c})}else return I},lt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),_m=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),Mc=$(function(e,r){var n=e,a=r;return N(a,n)>0}),Cm=$(function(e,r){var n=e,a=r;return N(a,n)<0}),ym=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Lm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),Sm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},jr=0,zc={fU:0,fY:0,c6:0},wm=y(function(e,r,n){return o(at,function(a){var t=o(ym,o(Lm,a,r),r);return o(at,function(i){var c=o(qt,r,e),l=o(_m,n,c),u=o(Mc,jr,l)?c:o(Cm,jr,l)?Sm(c):zc;return o(Ce,function(v){return H(a,i,v)},Bn(u))},Bn(t))},Bn(e))}),Tm=function(e){var r=e,n=G(r.c6),a=G(r.fY),t=G(r.fU);if(N(t,a)<1)if(N(t,n)<1){var i=rr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=rr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(N(a,n)<1){var i=rr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=rr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},kc=function(e){var r=Tm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return z(r,c)},xm=function(e){var r=e;return r},Gr=function(e){return e},Pm=$(function(e,r){var n=kc(e),a=n.a,t=n.b;return Gr({cB:r,c4:a,c5:t,c7:e})}),Mm=function(e){var r=o(lt,e.aR,e.dj),n=xm(e.ei),a=o(qt,r,n),t=p(wm,r,n,a);if(t.$){var v=Bn(r);if(v.$){var m=kc(e.ei),d=m.a,f=m.b;return Gr({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Pm,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Gr({cB:e.dj,c4:u,c5:l,c7:c})}},gn={fU:0,fY:0,c6:0},zm=function(e){return{$:0,a:e}},Fe=function(e){var r=e;return G(r)},An=function(e){var r=e;return .5*r},km=ql,Dm=function(e){var r=e;return km(r)},Bm=function(e){var r=An(Fe(e.ej)),n=Dm(r);return{cM:zm(n),c2:e.c2}},tr=function(e){return e},Zt=tr({fU:0,fY:1,c6:0}),fn=function(e){return e},Am=function(e){var r=e.aR,n=e.dj,a=e.ei;return Bm({ej:fn(2*gm(.5)),c2:Mm({dj:Sa(n),aR:Sa(r),ei:o(ir,Zt,o(hm,gn,Sa(a)))})})},Fm=function(e){var r=e;return r},Um=function(e){var r=e;return Fm(r.er)},Dc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Rm=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Em=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Vm=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Nm=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),jm=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Gm=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Wm=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(Gm,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(Dc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(Rm,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(Em,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(jm,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(Vm,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(Nm,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ym={$:0},ea=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(je,n,a)}),Hm=$(function(e,r){return N(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(Hm,n,a)}),Im=ce(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ea(c(u)),m=o(fe,s.dR,e),d=o(le,s.dO,r),f=o(fe,s.dS,n),h=o(le,s.dP,a),g=o(fe,s.dT,t),C=o(le,s.dQ,i),L=c,_=v;e=m,r=d,n=f,a=h,t=g,i=C,c=L,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),Om=y(function(e,r,n){var a=ea(e(r));return oa(Im,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),wa=$(function(e,r){var n=e,a=r;return N(a,n)<1}),Jm=function(e){return o(wa,e.dO,e.dR)&&o(wa,e.dP,e.dS)&&o(wa,e.dQ,e.dT)?e:{dO:o(le,e.dR,e.dO),dP:o(le,e.dS,e.dP),dQ:o(le,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},ra=function(e){var r=e;return r},nn=function(e){var r=e;return r.fU},an=function(e){var r=e;return r.fY},tn=function(e){var r=e;return r.c6},qm=function(e){var r=ra(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=an(n),l=tn(n),u=nn(a),v=an(a),s=tn(a),m=nn(t),d=an(t),f=tn(t);return Jm({dO:o(le,i,o(le,u,m)),dP:o(le,c,o(le,v,d)),dQ:o(le,l,o(le,s,f)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,s,f))})},Bc=Fv,Or=function(e){var r=e;return r},fr=function(e){return Bc(Or(e))},Ac=function(e){var r=e;return r},Fc=function(e){return Bc(Ac(e))},Uc=function(e){return e},Zm=$(function(e,r){var n=e,a=r,t=o(je,G(a.fU),o(je,G(a.fY),G(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=rr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return zc}),Qm=Zm(Uc(1)),Rc=y(function(e,r,n){var a=o(lt,r,n),t=o(lt,e,r);return Qm(o(qt,a,t))}),Xm=function(e){var r=ra(e),n=r.a,a=r.b,t=r.c,i=Fc(p(Rc,n,a,t));return H({o:i,bU:fr(n)},{o:i,bU:fr(a)},{o:i,bU:fr(t)})},Km=$(function(e,r){return{$:2,a:e,b:r}}),ed=Km({df:3,$7:0,dV:4}),rd=function(e){if(e.b){var r=e.a,n=e.b,a=ed(o(de,Xm,e)),t=p(Om,qm,r,n);return w(Dc,t,e,a,0)}else return Ym},ke=y(function(e,r,n){return H(e,r,n)}),Fn=function(e){return e},vr=$(function(e,r){var n=r;return e*n}),Ye=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Ec=function(){var e=Fn(1),r=Fn(1),n=Fn(1),a=o(vr,-.5,e),t=o(vr,-.5,r),i=o(vr,-.5,n),c=p(Ye,i,t,a),l=o(vr,.5,e),u=p(Ye,i,t,l),v=o(vr,.5,r),s=p(Ye,i,v,a),m=p(Ye,i,v,l),d=o(vr,.5,n),f=p(Ye,d,t,a),h=p(Ye,d,v,a),g=p(Ye,d,t,l),C=p(Ye,d,v,l);return Wm(rd(b([p(ke,c,h,f),p(ke,c,s,h),p(ke,u,g,C),p(ke,u,C,m),p(ke,f,h,C),p(ke,f,C,g),p(ke,c,m,s),p(ke,c,u,m),p(ke,c,f,g),p(ke,c,g,u),p(ke,s,C,h),p(ke,s,m,C)])))}(),wn={$:0},nd=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ad=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Fc(p(Rc,u,l,c)),s={o:v,bU:fr(u)},m={o:v,bU:fr(l)},d={o:v,bU:fr(c)};return o(B,s,o(B,m,o(B,d,n)))}),td=function(e){var r=e;return r.D},od=F(function(e,r,n,a){if(r.$===1)return I;var t=r.a;if(n.$===1)return I;var i=n.a;if(a.$===1)return I;var c=a.a;return K(p(e,t,i,c))}),ut=4294967295>>>32-ln,vt=El,id=y(function(e,r,n){e:for(;;){var a=ut&r>>>e,t=o(vt,a,n);if(t.$){var v=t.a;return o(vt,ut&r,v)}else{var i=t.a,c=e-ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),cd=function(e){return e>>>5<<5},ld=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||N(e,n)>-1?I:N(e,cd(n))>-1?K(o(vt,ut&e,i)):K(p(id,a,e,t))}),ud=function(e){var r=e;return r.ah},Ta=$(function(e,r){return o(ld,e,ud(r))}),vd=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(od,y(function(c,l,u){return H(c,l,u)}),o(Ta,a,e),o(Ta,t,e),o(Ta,i,e))};return o(Ht,r,td(e))},$d=y(function(e,r,n){e:for(;;){var a=o(Ut,xe,e),t=a.a,i=a.b;if(N(qa(t),xe)<0)return o(qi,!0,{z:r,l:n,p:t});var c=i,l=o(B,Oi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Vc=function(e){return e.b?p($d,e,T,0):Hi},fd=y(function(e,r,n){return e(r(n))}),sd=$(function(e,r){return!o(ic,o(fd,lf,e),r)}),md=$(function(e,r){return p(ur,$(function(n,a){return e(n)?o(B,n,a):a}),T,r)}),dd=function(e){var r=e.a;return r},pd=$(function(e,r){var n=dd(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&N(i,n)<0&&c>=0&&N(c,n)<0&&l>=0&&N(l,n)<0};return o(sd,a,r)?{D:r,ah:e}:{D:o(md,a,r),ah:e}}),bd=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),gd=bd({df:1,$7:3,dV:4}),$t=function(e){var r=e;return r},Un=$(function(e,r){var n=$t(r),a=$t(e);return z(H(a.fU,a.fY,a.c6),H(n.fU,n.fY,n.c6))}),Qt=kv,jo=p(Qt,0,0,0),xa=Me(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Gt,o(Un,e,r),t);if(v.$){var m={o:jo,bU:fr(r)},d={o:jo,bU:fr(e)},f=u+1,h=u;return H(o(B,H(n,h,f),o(B,H(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return H(o(B,H(n,s,a),c),l,u)}}),hd=ye(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,g=a,C=e,L=r,_=v,x=a+3,A=ie(xa,s,d,f,g,r,ie(xa,m,s,h,f,r,ie(xa,d,m,g,h,r,t)));e=C,r=L,n=_,a=x,t=A;continue e}else{var J=t,W=J.a,j=J.b;return z(W,Te(j))}}),_d=ye(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,g=n,C=p(en,o(Un,d,s),f,p(en,o(Un,s,m),h,p(en,o(Un,m,d),g,t))),L=o(B,H(g,h,f),a),_=e,x=v,A=n+3,J=L,W=C;e=_,r=x,n=A,a=J,t=W;continue e}else return H(a,t,n)}),gr=y(function(e,r,n){var a=vd(n),t=p(ur,ad(r),T,a),i=S(_d,r,a,0,T,Pc),c=i.a,l=i.b,u=i.c,v=S(hd,r,l,a,0,H(c,T,u)),s=v.a,m=v.b,d=it(m)?t:ae(t,m);return p(nd,e,o(pd,Vc(d),s),o(gd,d,s))}),Cd=$(function(e,r){return r.b?p(ur,B,r,e):e}),sr=function(e){return p(ur,Cd,T,e)},Go=function(e){return{D:o(de,function(r){return H(3*r,3*r+1,3*r+2)},o(At,0,Sr(e)-1)),ah:Vc(sr(o(de,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},yd=function(e){switch(e.$){case 0:return wn;case 1:var a=e.a,r=e.b,n=o(de,ra,r);return p(gr,a,Er,Go(n));case 2:var a=e.a,r=e.b,n=o(de,ra,r);return p(gr,a,Er,Go(n));case 3:var a=e.a,t=e.b;return p(gr,a,Er,t);case 4:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bU},t);case 8:return wn;case 9:return wn;default:return wn}},Wo=yd(Ec),Ld=function(e){var r=e;return r.aK},Nc={$:0},k=Nc,jc=function(e){return{$:4,a:e}},Sd=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Xt=function(e){return jc(o(Sd,e,T))},We=$(function(e,r){return{$:1,a:e,b:r}}),wd={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Td=$(function(e,r){switch(r.$){case 0:return o(h$,e,r);case 1:return o(_$,e,r);case 2:return o(C$,e,r);case 3:return o(y$,e,r);case 4:return o(L$,e,r);default:return o(S$,e,r)}}),xd=$(function(e,r){switch(r.$){case 0:return o(qv,e,r);case 1:return o(Zv,e,r);case 2:return o(Qv,e,r);case 3:return o(Xv,e,r);case 4:return o(Kv,e,r);case 5:return o(e$,e,r);case 6:return o(r$,e,r);case 7:return o(n$,e,r);default:return a$(e)}}),Le=Jv,Pd=1029,Md=function(e){return{$:5,a:e}},Gc=function(e){var r=e;return Md(r)},zd=Gc(Pd),kd=1028,Dd=Gc(kd),Xe=y(function(e,r,n){return r===1?e?o(B,zd,n):o(B,Dd,n):n}),Wc={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Pa=F(function(e,r,n,a){return o(We,r,ce(function(t,i,c,l,u,v,s,m){return S(Le,p(Xe,l,a,m),Wc,wd,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Bd={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Yc={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ke=F(function(e,r,n,a){return o(We,r,ce(function(t,i,c,l,u,v,s,m){return S(Le,p(Xe,l,a,m),Yc,Bd,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Hc=$(function(e,r){return{$:3,a:e,b:r}}),Ad={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},Ic={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Fd=F(function(e,r,n,a){return o(Hc,n,ce(function(t,i,c,l,u,v,s,m){return S(Le,m,Ic,Ad,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Ud={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Kt=function(e){var r=e;return r},Oc=Uv,er=ye(function(e,r,n,a,t){return o(We,n,ce(function(i,c,l,u,v,s,m,d){return S(Le,p(Xe,u,t,d),Yc,Ud,a,{aN:o(Oc,Kt(r),e),b:l,c,d:s,e:i,f:v})}))}),Rd={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},Ed=ye(function(e,r,n,a,t){return o(Hc,a,ce(function(i,c,l,u,v,s,m,d){return S(Le,d,Ic,Rd,t,{aN:o(Oc,Kt(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Vd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Jc={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Tn=F(function(e,r,n,a){return o(We,r,ce(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Xe,l,a,m),Jc,Vd,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),qc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Zc={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Nd=Me(function(e,r,n,a,t,i){return o(We,a,ce(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return S(Le,p(Xe,v,i,f),Zc,qc,t,{P:g,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Qc={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},jd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(We,u,ce(function(m,d,f,h,g,C,L,_){var x=L.a,A=L.b;return S(Le,p(Xe,h,s,_),Zc,Qc,v,{b5:e,b8:r,b9:i,ca:a,P:A,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:f,c:d,aW:c,d:C,cS:n,e:m,a$:l,f:g})}))}}}}}}}}}}},Gd={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},xn=Me(function(e,r,n,a,t,i){return o(We,a,ce(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return S(Le,p(Xe,v,i,f),Jc,Gd,t,{b4:e,P:g,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),Wd=function(e){return{$:0,a:e}},Yo=$(function(e,r){return{$:1,a:e,b:r}}),on=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),fa=Dv,sa=Bv,ma=Av,Jr=Rv,Yd=function(e){return w(Jr,fa(e),sa(e),ma(e),1)},eo=w(Jr,0,0,0,0),Rn=$(function(e,r){if(r.$){var a=r.a.C;return z(a,eo)}else{var n=r.a;return z(e,Yd(n))}}),Hd=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Yo,z(t,eo),o(on,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Yo,o(Rn,t,e),o(on,t,r))}else{var a=n.a.a;return n.b.a,Wd(a)}}),Id=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Pn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Od=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ur=Mv,Jd=function(e){return o(Ur,e,1)},ft=o(Ur,0,0),kr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,ft)}else{var n=r.a;return z(e,Jd(n))}}),qd=F(function(e,r,n,a){var t=w(Od,e,r,n,a);if(t.a.$){var u=t.a.a.C;return w(Pn,z(u,eo),o(kr,u,r),o(kr,u,n),o(on,u,a))}else if(t.b.$){var u=t.b.a.C;return w(Pn,o(Rn,u,e),z(u,ft),o(kr,u,n),o(on,u,a))}else if(t.c.$){var u=t.c.a.C;return w(Pn,o(Rn,u,e),o(kr,u,r),z(u,ft),o(on,u,a))}else if(t.d.$){var u=t.d.a.C;return w(Pn,o(Rn,u,e),o(kr,u,r),o(kr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Id,i,c,l)}}),Zd={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},Ma=ye(function(e,r,n,a,t){return o(We,n,ce(function(i,c,l,u,v,s,m,d){return S(Le,p(Xe,u,t,d),Wc,Zd,a,{b2:Kt(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Xc={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qd=F(function(e,r,n,a){return o(We,r,ce(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Xe,l,a,m),Xc,qc,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Xd=ht(function(e,r,n,a,t,i,c,l,u){return o(We,c,ce(function(v,s,m,d,f,h,g,C){var L=g.a,_=g.b;return S(Le,p(Xe,d,u,C),Xc,Qc,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:L.be,bL:L.bL,bM:L.bM,bN:L.bN,cv:t,b:m,c:s,aW:e,d:h,cS:n,e:v,a$:0,f})}))}),ro=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Kd=function(e){var r=e;return p(ro,r.dR,r.dO,.5)},e0=function(e){var r=e;return p(ro,r.dS,r.dP,.5)},r0=function(e){var r=e;return p(ro,r.dT,r.dQ,.5)},n0=function(e){return p(Ye,Kd(e),e0(e),r0(e))},a0=function(e){var r=e;return r.dO},t0=function(e){var r=e;return r.dP},Kc=function(e){var r=e;return r.dQ},o0=function(e){var r=e;return r.dR},i0=function(e){var r=e;return r.dS},el=function(e){var r=e;return r.dT},or=$(function(e,r){var n=e,a=r;return a-n}),rl=function(e){return H(o(or,o0(e),a0(e)),o(or,i0(e),t0(e)),o(or,el(e),Kc(e)))},R=function(e){var r=rl(e),n=r.a,a=r.b,t=r.c;return{ey:Or(n0(e)),eS:n/2,eT:a/2,eU:t/2}},c0=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return w(Pa,l,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Pa,l,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Pa,l,R(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Ke,n,R(t),c,a);case 8:var t=r.a,c=r.c;return w(Ke,n,R(t),c,0);case 9:var t=r.a,c=r.c;return w(Ke,n,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(Fd,n,i,R(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(Ma,l,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ma,l,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ma,l,v,R(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(er,u,v,R(t),c,a);case 8:var t=r.a,c=r.c;return S(er,u,v,R(t),c,0);case 9:var t=r.a,c=r.c;return S(er,u,v,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Ed,u,v,i,R(t),c)}}case 2:e.a;var s=e.b,W=e.c,m=o(Hd,s,W);if(m.$){var h=m.a,g=h.a;h.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return w(Qd,g,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ie(Nd,g,L,_,R(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var d=m.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return w(Tn,d,R(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return w(Tn,d,R(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return w(Tn,d,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(Tn,d,R(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var x=e.b,A=e.c,J=e.d,W=e.e,j=w(qd,x,A,J,W);if(j.$){var Q=j.a,X=Q.a,pe=Q.b,be=j.b,ue=be.a,ve=be.b,Re=j.c,Ee=Re.a,Mr=Re.b,zr=j.d,L=zr.a,_=zr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Bl(Xd,X,pe,ue,ve,Ee,Mr,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return jd(X)(pe)(ue)(ve)(Ee)(Mr)(L)(_)(R(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var q=j.a,O=j.b,V=j.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return ie(xn,q,O,V,R(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return ie(xn,q,O,V,R(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return ie(xn,q,O,V,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ie(xn,q,O,V,R(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),za=function(e){var r=e;return r.fU},ka=function(e){var r=e;return r.fY},Da=function(e){var r=e;return r.c6},l0=function(e){var r=e,n=Da(r.c7),a=ka(r.c7),t=za(r.c7),i=Da(r.c5),c=ka(r.c5),l=za(r.c5),u=Da(r.c4),v=ka(r.c4),s=za(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},da=function(e){var r=e;return r.cB},Pe=function(e){var r=e;return r},hn=function(e){var r=e;return r.c4},_n=function(e){var r=e;return r.c5},Cn=function(e){var r=e;return r.c7},u0=function(e){var r=Or(da(e)),n=Pe(Cn(e)),a=Pe(_n(e)),t=Pe(hn(e));return{dp:l0(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Br=$(function(e,r){return{$:5,a:e,b:r}}),nl=$(function(e,r){return{dp:Lr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),pa=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(nl,a,e);return o(Br,i,t);case 1:return o(Br,e,n);case 3:return o(Br,e,n);case 2:return o(Br,e,n);default:return o(Br,e,n)}}),v0=$(function(e,r){return o(pa,u0(e),r)}),al=function(e){return{$:2,a:e}},$0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),f0=Vv,s0=Ev,Ho=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=s0(a),h=f.fU,g=f.fY,C=f.c6,L=f.em,_=f0({em:L,fU:h*s,fY:g*m,c6:C*d});return oa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},st=$(function(e,r){switch(r.$){case 0:return Nc;case 5:var n=r.a,a=r.b;return o(Br,n,o(st,e,a));case 1:var t=r.a,i=r.b;return o(We,o($0,e,t),o(Ho,e,i));case 3:return r;case 2:var i=r.a;return al(o(Ho,e,i));default:var c=r.a;return jc(o(de,st(e),c))}}),m0=$(function(e,r){var n=r;return o(st,e,n)}),d0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Wr=519,tl=7683,ol=7682,me=7680,p0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},no=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bm),o(re,l(v.a9),o(re,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(p0,a,t,i)))}),b0=p(no,{cp:0,cO:0,c3:15},{a9:me,bm:Wr,bu:me,bv:tl},{a9:me,bm:Wr,bu:me,bv:ol}),g0=p(no,{cp:0,cO:0,c3:15},{a9:me,bm:Wr,bu:me,bv:ol},{a9:me,bm:Wr,bu:me,bv:tl}),h0=$(function(e,r){return e?o(B,g0,r):o(B,b0,r)}),_0={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},C0=function(e){if(e.$){var r=e.c;return K(ce(function(n,a,t,i,c,l,u,v){return S(Le,o(h0,i,v),_0,d0,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return I},Io=function(e){var r=C0(e);if(r.$)return k;var n=r.a;return al(n)},y0=F(function(e,r,n,a){var t=o(c0,n,Ec),i=function(){var s=z(e,r);return s.a?s.b?Xt(b([t,Io(Wo)])):t:s.b?Io(Wo):k}(),c=Ld(a),l=c.a,u=c.b,v=c.c;return o(v0,Um(a),o(m0,H(l,u,v),i))}),L0=$(function(e,r){return w(y0,!0,!0,e,r)}),Ba=$(function(e,r){var n=e,a=r;return N(a,n)>-1}),Aa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),S0=tr({fU:-1,fY:0,c6:0}),w0=tr({fU:0,fY:-1,c6:0}),T0=tr({fU:0,fY:0,c6:-1}),il=tr({fU:1,fY:0,c6:0}),cl=tr({fU:0,fY:0,c6:1}),x0=Me(function(e,r,n,a,t,i){var c=o(Ba,n,i)?cl:T0,l=o(Ba,r,t)?Zt:w0,u=o(Ba,e,a)?il:S0,v=H(Fe(o(or,e,a)),Fe(o(or,r,t)),Fe(o(or,n,i))),s=p(Ye,o(Aa,e,a),o(Aa,r,t),o(Aa,n,i)),m=Gr({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),P0=$(function(e,r){return ie(x0,nn(e),an(e),tn(e),nn(r),an(r),tn(r))}),mt=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),ll=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=H(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(L0,e,o(P0,p(mt,-c,-l,-u),p(mt,c,l,u)))}),M0=w(Pr,52/255,101/255,164/255,1),Oo=w(Pr,211/255,215/255,207/255,1),z0=function(e){return Xt(e)},na=z0,Jo=function(e){return{$:0,a:e}},k0=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ul=y(function(e,r,n){return N(n,e)<0?e:N(n,r)>0?r:n}),Fa=function(e){return p(ul,0,1,e<=.04045?e/12.92:o(wr,(e+.055)/1.055,2.4))},D0=function(e){var r=_c(e),n=r.cN,a=r.cd,t=r.b6;return p(Qt,Fa(n),Fa(a),Fa(t))},En=function(e){return p(k0,0,Jo(D0(e)),Jo(0))},B0=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),A0=function(e){var r=Ac(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},F0=$(function(e,r){return o(pa,A0(e),r)}),U0=$(function(e,r){return o(F0,e,r)}),vl=function(e){var r=e.a,n=e.b,a=e.c;return U0(p(B0,r,n,a))},Cr=function(e){return vl(H(0,e,0))},aa=Ol,R0=function(e){var r=e;return r.eH},E0=function(e){var r=e;return r.cB},dt=Jl,V0=$(function(e,r){var n=r,a=Or(E0(e)),t=.5*n,i=aa(t),c=dt(t),l=Pe(R0(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,h=m*m,g=1-2*(s+h),C=l.c6*c,L=i*C,_=2*(f-L),x=2*(f+L),A=u*C,J=2*(A+d),W=2*(A-d),j=m*C,q=2*(j-v),O=2*(j+v),V=C*C,Q=1-2*(h+V),X=1-2*(s+V);return{dp:!0,q:Q,r:x,s:W,t:_,u:X,v:O,w:J,x:q,y:g,H:a.fU-Q*a.fU-_*a.fY-J*a.c6,I:a.fY-x*a.fU-X*a.fY-q*a.c6,J:a.c6-W*a.fU-O*a.fY-g*a.c6,bY:1}}),N0=y(function(e,r,n){return o(pa,o(V0,e,r),n)}),$l=y(function(e,r,n){return p(N0,e,r,n)}),fl=$(function(e,r){return{eH:r,cB:e}}),sl=Zt,j0=o(fl,gn,sl),ta=$(function(e,r){return p($l,j0,fn(e),r)}),G0=$(function(e,r){var n=Or(e),a=1-r;return{dp:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fU,I:a*n.fY,J:a*n.c6,bY:r}}),W0=y(function(e,r,n){return o(pa,o(G0,e,r),n)}),Y0=y(function(e,r,n){return p(W0,e,r,n)}),Rr=Y0(gn),H0=function(){var e=function(n){return o(Cr,-1,o(ll,n,H(10,1,10)))},r=function(n){return na(b([e(n),o(ta,ct(45),e(n))]))};return na(b([r(En(Oo)),o(Cr,-.1,o(Rr,1.1,r(En(M0)))),o(Cr,-.2,o(Rr,1.2,r(En(Oo))))]))}(),I0=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(Gt,e,r.av))}),O0=$(function(e,r){return o(ir,0,It(o(Ht,I0(e),r)))}),J0=$(function(e,r){return o(O0,e,r.eA)}),qo=J0,Zo=Ql,q0=F(function(e,r,n,a){var t=H(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return w(Pr,f,d,m,a)}),Z0=y(function(e,r,n){return w(q0,e,r,n,1)}),Mn=function(e){return vl(H(e,0,0))},ao=cl,Q0=o(fl,gn,ao),Qo=$(function(e,r){return p($l,Q0,fn(e),r)}),ml=$(function(e,r){return(r-Ji(r/e)*e)/e}),X0=function(e){return 2*$n*e},Ua=F(function(e,r,n,a){return e+(r-e)*(1+aa(X0(o(ml,n,a))))/2}),pt=Me(function(e,r,n,a,t,i){var c=function(f){return p(Z0,w(Ua,f/6,1,10,e.a4),.6,.6)},l=$(function(f,h){return rr(o(wr,f,2)+o(wr,h,2))}),u=o(ll,En(c(i)),H(r,n,n)),v=z(o(l,a,t),o(l,r-a,t)),s=v.a,m=v.b,d=i?b([o(Cr,n/2,o(Mn,-(r/2),o(Rr,s/r,o(Qo,o(Zo,t,a),o(Cr,n/2,o(Mn,r/2,o(ta,w(Ua,-2,2,8,e.a4),o(Rr,.86,ie(pt,e,r,n,a,t,i-1))))))))),o(Cr,n/2,o(Mn,r/2,o(Rr,m/r,o(Qo,-o(Zo,t,r-a),o(Cr,n/2,o(Mn,-(r/2),o(ta,w(Ua,2,-2,8,$n+e.a4),o(Rr,.86,ie(pt,e,r,n,a,t,i-1)))))))))]):T;return na(o(B,u,d))}),K0=$(function(e,r){return 360*o(ml,e,r)}),ep=$(function(e,r){return b([o(ta,o(K0,1e3,e.a4),na(b([H0,ie(pt,e,2,2,o(qo,"s",e),o(qo,"t",e),5)])))])}),rp=function(e){return e},np=function(e){return Fn(.01*e)},Xo=function(e){return e},ap=function(e){return e},tp=function(e){return{$:0,a:e}},op=tp,ip={$:3},cp=ip,lp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),up=lp,vp=$(function(e,r){return sr(o(de,e,r))}),$p=function(e){return{$:1,a:e}},fp=$p,sp=function(e){return o(br,"height",we(e))},mp=function(e){return Ku(tv(e))},dp=mp,pp=function(e){return{$:2,a:e}},bp=pp,gp=function(e){return o(hr,"",e)},hp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ge(l*1e3)/1e3},c=function(l){return Ge(l*1e4)/100};return gp(b(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},_p=y(function(e,r,n){return p(g$,e,r,n)}),Ko=function(e){var r=e;return r},Ra=w(Jr,1,1,1,1),He=y(function(e,r,n){return o(de,function(a){return o(a,r,n)},e)}),Cp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),yp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Cp,n*a/t,n,n*(1-a-t)/t)}),Lp=function(e){var r=e.a,n=e.b,a=e.c;return p(Qt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},to=$(function(e,r){return Lp(o(yp,e,r))}),nr=Wv,Sp=function(e){return nr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ea=ye(function(e,r,n,a,t){var i=a.dp?1:-1,c=w(Jr,a.bY,a.bY,a.bY,i);return ie(t,e,c,Sp(a),a.dp,r,n)}),dl=Me(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(nl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,g=o(B,S(Ea,e,r,n,a,h),i.M);return{M:g,U:i.U,fB:i.fB};case 3:var C=t.b,L=o(B,S(Ea,e,r,n,a,C),i.U);return{M:i.M,U:L,fB:i.fB};case 2:var _=t.a,x=o(B,S(Ea,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:x};default:var A=t.a;return p(dn,w(dl,e,r,n,a),i,A)}}),wp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),pl=wp,oo=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Tp=function(e){var r=e.Z,n=e.W,a=e.V;return w(oo,518,r,n,a)},xp=$(function(e,r){return{$:6,a:e,b:r}}),Pp=xp,bl=b([Tp({V:1,W:0,Z:!1}),w(pl,!1,!1,!1,!1),o(Pp,0,1)]),io=8,gl=15,Vr=7681,Mp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},zp=$(function(e,r){return{$:0,a:e,b:r}}),kp=zp({df:1,$7:0,dV:5}),Dp=kp(b([{bU:o(Ur,-1,-1)},{bU:o(Ur,1,-1)},{bU:o(Ur,-1,1)},{bU:o(Ur,1,1)}])),Bp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},co=function(e){return p(no,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},lo=function(e){return S(Le,b([co(e),w(pl,!1,!1,!1,!1)]),Bp,Mp,Dp,{})},Ap=lo({a9:Vr,cp:0,cO:io,bm:Wr,c3:gl,bu:Vr,bv:Vr}),Fp=516,ei=5386,Up=function(e){return o(wr,2,e+4)},hl=function(e){return lo({a9:me,cp:gl,cO:io,bm:Fp,c3:Up(e),bu:ei,bv:ei})},Rp=y(function(e,r,n){return sr(b([p(He,e,n,bl),b([hl(r),Ap])]))}),Ep=$(function(e,r){return sr(o(ji,Rp(e),r))}),Vp=function(e){var r=e.Z,n=e.W,a=e.V;return w(oo,513,r,n,a)},Np=Vp({V:1,W:0,Z:!0}),jp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Gp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,g=v.c;return jp(s)(m)(d)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},Wp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ri=$(function(e,r){var n=e,a=r;return p(Wp,32774,n,a)}),Yp=1,ni=771,Hp=770,uo=Gp({bw:0,aH:o(ri,Yp,ni),bz:0,bB:o(ri,Hp,ni),bG:0,bW:0}),Dr=b([Np,uo]),ai=function(e){var r=e;return da(r)},Ip=function(e){return e},Op=function(e){return Gr({cB:Ip({fU:e.H,fY:e.I,c6:e.J}),c4:tr({fU:e.q,fY:e.r,c6:e.s}),c5:tr({fU:e.t,fY:e.u,c6:e.v}),c7:tr({fU:e.w,fY:e.x,c6:e.y})})},Va=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),_l=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Cl=$(function(e,r){return{cB:o(_l,e,da(r)),c4:o(Va,e,hn(r)),c5:o(Va,e,_n(r)),c7:o(Va,e,Cn(r))}}),Jp=$(function(e,r){var n=ea(r),a=ea(e);return{dO:o(le,a.dO,n.dO),dP:o(le,a.dP,n.dP),dQ:o(le,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),qp=function(e){var r=e;return H(r.fU,r.fY,r.c6)},Vn=$(function(e,r){var n=e,a=r;return a+n}),Zp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=An(Fe(a)),c=An(Fe(n)),l=An(Fe(t)),u=qp(r),v=u.a,s=u.b,m=u.c;return{dO:o(Vn,c,v),dP:o(Vn,i,s),dQ:o(Vn,l,m),dR:o(or,c,v),dS:o(or,i,s),dT:o(or,l,m)}}),ti=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=Pe(Cn(e)),d=G(l*m.fU)+G(c*m.fY)+G(i*m.c6),f=Pe(_n(e)),h=G(l*f.fU)+G(c*f.fY)+G(i*f.c6),g=Pe(hn(e)),C=G(l*g.fU)+G(c*g.fY)+G(i*g.c6),L=o(Zp,H(C,h,d),o(_l,e,p(mt,s,v,u)));if(a.$)return K(L);var _=a.a;return K(o(Jp,_,L))}),bt=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 1:var c=t.a,l=w(ti,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 2:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 3:var c=t.a,l=w(ti,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 4:var u=t.a,f=e,h=r,g=w(bt,e,r,n,u),C=i;e=f,r=h,n=g,a=C;continue e;default:var v=t.a,s=t.b,m=o(Cl,Op(v),e),d=r*v.bY,f=e,h=r,g=w(bt,m,d,n,b([s])),C=i;e=f,r=h,n=g,a=C;continue e}}else return n}),Qp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Xp=function(e){var r=e;return r},oi=lo({a9:Vr,cp:0,cO:io,bm:Wr,c3:255,bu:Vr,bv:Vr}),Kp=function(e){var r=e,n=o(je,G(r.fU),o(je,G(r.fY),G(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=rr(i*i+t*t+a*a);return c*n}else return jr},_e={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},De=$(function(e,r){var n=e,a=r;return nr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),Kr=z({be:o(De,_e,_e),bL:o(De,_e,_e),bM:o(De,_e,_e),bN:o(De,_e,_e)},w(Jr,0,0,0,0)),ii=function(e){var r=e;return-r},yl=514,Ll=function(e){var r=e.Z,n=e.W,a=e.V;return w(oo,515,r,n,a)},Sl=240,e1=b([Ll({V:1,W:0,Z:!0}),co({a9:me,cp:Sl,cO:0,bm:yl,c3:0,bu:me,bv:me}),uo]),r1=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Fe(a),l=c,u=Fe(t),v=u,s=n.cM;if(s.$){var d=s.a;return Qa(v)?nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):nr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return Qa(v)?nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),zn=$(function(e,r){return(1&e>>r)===1?0:1}),n1=function(e){return b([Ll({V:1,W:0,Z:!0}),co({a9:me,cp:Sl,cO:e,bm:yl,c3:0,bu:me,bv:me}),uo])},a1=y(function(e,r,n){return sr(o(de,function(a){var t=a<<4,i=w(Jr,o(zn,a,0),o(zn,a,1),o(zn,a,2),o(zn,a,3));return p(He,e,z(r,i),n1(t))},o(At,1,o(wr,2,n)-1)))}),sn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},t1=Yv,ci=function(e){var r=e;return sn(Cn(r))},o1=il,i1={cB:gn,c4:o1,c5:sl,c7:ao},c1=function(e){var r=Or(da(e)),n=Pe(Cn(e)),a=Pe(_n(e)),t=Pe(hn(e));return nr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},l1=$(function(e,r){var n=r;return c1(o(Cl,n,e))}),u1=function(e){return o(l1,i1,e)},v1=function(e){var r=e;return r.c2},$1=function(e){var r=e;return hn(r)},f1=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),s1=function(e){var r=e;return _n(r)},m1=function(e){var r=v1(e.ev),n=Gr({cB:ai(r),c4:$1(r),c5:s1(r),c7:sn(ci(r))}),a=Xt(e.aP),t=a,i=w(bt,n,1,I,b([t]));if(i.$===1)return T;var c=i.a,l=u1(r),u=o(vr,.99,o(le,Fe(e.aJ),ii(Kc(c)))),v=rl(c),s=v.a,m=v.b,d=v.c,f=Kp(p(f1,s,m,d)),h=o(vr,1.01,o(Vn,f,ii(el(c)))),g=o(r1,e.ev,{eq:e.eq,eP:h,fi:u}),C=t1(g).dM,L=C?Pe(sn(ci(r))):$t(ai(r)),_=function(){var ue=e.b_;switch(ue.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var ve=ue.a;return z(3,ve);case 4:var ve=ue.a;return z(4,ve);default:return z(5,0)}}(),x=_.a,A=_.b,J=e.bE,W=J,j=o(to,W,e.b0),q=j,O=nr({dx:0,dy:L.fU,dz:fa(q),dA:e.ec,dB:0,dC:L.fY,dD:sa(q),dE:Xp(f),dF:0,dG:L.c6,dH:ma(q),dI:x,dJ:0,dK:C,dL:0,dM:A}),V=ie(dl,O,l,g,Qp,t,{M:T,U:T,fB:T}),Q=e.bK;switch(Q.$){case 0:var X=Q.a;return sr(b([p(He,V.M,z(X,Ra),Dr),p(He,V.U,Kr,Dr)]));case 1:var X=Q.a;return sr(b([p(He,V.M,Kr,Dr),b([oi]),p(He,V.fB,X.be,bl),b([hl(0)]),p(He,V.M,z(X,Ra),e1),p(He,V.U,Kr,Dr)]));default:var pe=Q.a,be=Q.b;return sr(b([p(He,V.M,z(be,Ra),Dr),b([oi]),o(Ep,V.fB,pe),p(a1,V.M,be,Sr(pe)),p(He,V.U,Kr,Dr)]))}},d1=function(e){return o(br,"width",we(e))},p1=$(function(e,r){var n=b([fp(1),bp(0),op(!0),w(up,0,0,0,0)]),a=function(){var x=e.b1;switch(x.$){case 0:return H(n,"0",1);case 1:return H(o(B,cp,n),"1",1);default:var A=x.a;return H(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ko(v),m=o(ee,"height",we(s)+"px"),d=Ko(u),f=d/s,h=o(vp,function(x){return m1({eq:f,ev:e.ev,aJ:e.aJ,aP:x.aP,bE:x.bE,bK:x.bK,ec:c,b_:x.b_,b0:x.b0})},r),g=o(ee,"width",we(d)+"px"),C=e.aI,L=C,_=hp(L);return p(dp,"div",b([o(ee,"padding","0px"),g,m]),b([z(i,p(_p,t,b([d1(Ge(d*c)),sp(Ge(s*c)),g,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),b1=function(e){return o(p1,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},wl=function(e){return e},li=wl({fU:.31271,fY:.32902}),g1=$(function(e,r){var n=e,a=Pe(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(to,r.ce,r.b7),u=l;return{bz:ma(u),ex:n,bG:sa(u),cK:0,bW:fa(u),c_:1,fU:-t,fY:-i,c6:-c}}),h1=function(e){return e},_1=function(e){return h1(1.2*o(wr,2,e))},Na=function(e){return e},C1={$:0},y1=C1,ui=function(e){var r=e;return r},L1=function(e){e:for(;;){if(Lr(e.e2,jr)&&Lr(e.e3,jr))return _e;if(o(Mc,Fe(e.e2),Fe(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:sn(e.ei)};e=r;continue e}else{var n=G(ui(e.e3)/$n),a=G(ui(e.e2)/$n),t=Pe(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(to,Uc(1),e.b7),v=u;return{bz:a*ma(v),ex:!1,bG:a*sa(v),cK:n/a,bW:a*fa(v),c_:3,fU:i,fY:c,c6:l}}}},vi=function(e){return L1({b7:e.b7,e2:e.ce,e3:jr,ei:e.ei})},S1=function(e){var r=e;return r},Tl=function(e){var r=p(ul,1667,25e3,S1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return wl({fU:n,fY:a})},xl=function(e){return e},w1=Tl(xl(12e3)),T1=Tl(xl(5600)),x1=function(e){return{$:2,a:e}},P1=function(e){return x1(e)},M1=$(function(e,r){return{$:2,a:e,b:r}}),Pl=function(e){return{$:0,a:e}},kn=function(e){var r=e;return r},z1=function(e){var r=e;return r.ex},k1=Pl(Kr.a),D1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(ur,n,z(T,T),r)}),B1=function(e){var r=e;return nr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},A1=ce(function(e,r,n,a,t,i,c,l){var u=o(D1,z1,b([kn(e),kn(r),kn(n),kn(a)])),v=u.a,s=u.b;if(v.b){var m=ae(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,g=f.b,C=g.a,L=g.b,_=L.a;return o(M1,o(de,B1,v),{be:o(De,d,h),bL:o(De,C,_),bM:o(De,t,i),bN:o(De,c,l)})}else return k1}else return Pl({be:o(De,e,r),bL:o(De,n,a),bM:o(De,t,i),bN:o(De,c,l)})}),F1=y(function(e,r,n){return oa(A1,e,r,n,_e,_e,_e,_e,_e)}),U1=function(e){var r=o(g1,ap(e.fB),{b7:T1,eH:e.fJ,ce:Na(8e4)}),n=vi({b7:w1,ce:Na(2e4),ei:e.ei}),a=vi({b7:li,ce:Na(15e3),ei:sn(e.ei)}),t=p(F1,r,n,a);return b1({b1:P1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:_1(15),bK:t,b_:y1,b0:li})},R1=$(function(e,r){var n=e,a=r,t=aa(a);return{fU:t*aa(n),fY:t*dt(n),c6:dt(a)}}),E1=$(function(e,r){return U1({aI:rp(e.es),ev:e.ev,aJ:np(.5),cb:e.cb,aK:z(Xo(Ge(e.cT.fS)),Xo(Ge(e.cT.eW))),aP:r,fB:!0,fJ:o(R1,fn(e.fI),fn(e.fK)),ei:ao})}),V1=$(function(e,r){return o(E1,{es:bm,ev:Am({dj:{fU:0,fY:15,c6:18},aR:{fU:0,fY:4,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-ct(135),fK:-ct(45)},o(ep,e,r))}),N1=w(um,V1,pm,dm,vm);const j1={Main:{init:N1(o(M,function(e){return Se({e1:e})},o(P,"inputs",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return Se({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(P,"clock",oe))},o(P,"devicePixelRatio",oe))},o(P,"dt",oe))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(m){return Se({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",Z))},o(P,"control",Z))},o(P,"down",Z))},o(P,"downs",Jn(vn)))},o(P,"left",Z))},o(P,"pressedKeys",Jn(vn)))},o(P,"right",Z))},o(P,"shift",Z))},o(P,"up",Z))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return Se({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",Z))},o(P,"isDown",Z))},o(P,"move",Z))},o(P,"rightDown",Z))},o(P,"rightUp",Z))},o(P,"up",Z))},o(P,"x",oe))},o(P,"y",oe))))},o(P,"screen",o(M,function(r){return o(M,function(n){return Se({eW:n,fS:r})},o(P,"height",oe))},o(P,"width",oe))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return Se({eE:r,eF:e})},o(P,"deltaX",oe))},o(P,"deltaY",oe)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},G1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,g=h-D.clock;g<.009||(D.dt=g,D.clock=h,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},W1=()=>{ja("pointerdown"),ja("wheel"),ja("keydown")},ja=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Y1=j1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});W1();G1(Y1);
