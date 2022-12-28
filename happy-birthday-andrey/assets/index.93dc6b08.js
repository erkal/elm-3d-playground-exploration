(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function dr(e,r,n){return n.a=e,n.f=r,n}function $(e){return dr(2,e,function(r){return function(n){return e(r,n)}})}function w(e){return dr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return dr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function we(e){return dr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Re(e){return dr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ht(e){return dr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ie(e){return dr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function _t(e){return dr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function x(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function li(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ca(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Bl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Al=[];function Fl(e){return e.length}var Rl=w(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),El=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,y(n,r)}),Zl=$(function(e,r){return r[e]});w(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});w(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Nl=w(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});w(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});w(function(e,r,n){return n.slice(e,r)});w(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+jl()),r});function jl(e){return"<internals>"}function Or(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Lr(e,r){for(var n,a=[],t=Ga(e,r,0,a);t&&(n=a.pop());t=Ga(n.a,n.b,0,a));return t}function Ga(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Or(5),!1;if(n>100)return a.push(y(e,r)),!0;e.$<0&&(e=Po(e),r=Po(r));for(var t in e)if(!Ga(e[t],r[t],n+1,a))return!1;return!0}$(Lr);$(function(e,r){return!Lr(e,r)});function N(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=N(e.a,r.a))||(n=N(e.b,r.b))?n:N(e.c,r.c);for(;e.b&&r.b&&!(n=N(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return N(e,r)<0});$(function(e,r){return N(e,r)<1});$(function(e,r){return N(e,r)>0});$(function(e,r){return N(e,r)>=0});var Gl=$(function(e,r){var n=N(e,r);return n<0?Ai:n?z$:Bi}),mn=0;function y(e,r){return{a:e,b:r}}function q(e,r,n){return{a:e,b:r,c:n}}function Ae(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ae);function ae(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Xe(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Xe(e.a,r);return n}var P={$:0};function Xe(e,r){return{$:1,a:e,b:r}}var Hl=$(Xe);function g(e){for(var r=P,n=e.length;n--;)r=Xe(e[n],r);return r}function la(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Wl=w(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});we(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(x(e,r.a,n.a,a.a,t.a));return g(i)});Re(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(la(r).sort(function(n,a){return N(e(n),e(a))}))});$(function(e,r){return g(la(r).sort(function(n,a){var t=o(e,n,a);return t===Bi?0:t===Ai?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Il=$(Math.pow);$(function(e,r){return r%e});var Ol=$(function(e,r){var n=r%e;return e===0?Or(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ul=Math.PI,Jl=Math.cos,ql=Math.sin,Yl=Math.tan,Xl=Math.atan;$(Math.atan2);function Ql(e){return e}function Kl(e){return e===1/0||e===-1/0}var eu=Math.ceil,ru=Math.floor,nu=Math.round,au=Math.sqrt,fo=Math.log,tu=isNaN;function ou(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var iu=$(function(e,r){return e+r});function cu(e){var r=e.charCodeAt(0);return isNaN(r)?H:K(55296<=r&&r<=56319?y(e[0]+e[1],e.slice(2)):y(e[0],e.slice(1)))}$(function(e,r){return e+r});function lu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function uu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}w(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var vu=w(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),$u=$(function(e,r){return r.split(e)}),fu=$(function(e,r){return r.join(e)}),su=w(function(e,r,n){return n.slice(e,r)});function mu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var du=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),pu=$(function(e,r){return r.indexOf(e)>-1}),bu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var gu=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function ui(e){return e+""}function hu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return H;r=10*r+i-48}return t==a?H:K(n==45?-r:r)}function _u(e){if(e.length===0||/[\sxbo]/.test(e))return H;var r=+e;return r===r?K(r):H}function Cu(e){return la(e).join("")}function yu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function wu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Lu(e){return{$:0,a:e}}function Ct(e){return{$:2,b:e}}var Su=Ct(function(e){return typeof e=="boolean"?te(e):Ue("a BOOL",e)}),xu=Ct(function(e){return typeof e=="number"?te(e):Ue("a FLOAT",e)}),Pu=Ct(function(e){return typeof e=="string"?te(e):e instanceof String?te(e+""):Ue("a STRING",e)});function Tu(e){return{$:3,b:e}}var zu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function pr(e,r){return{$:9,f:e,g:r}}var ku=$(function(e,r){return{$:10,b:r,h:e}}),Mu=$(function(e,r){return pr(e,[r])}),Du=w(function(e,r,n){return pr(e,[r,n])});B(function(e,r,n,a){return pr(e,[r,n,a])});we(function(e,r,n,a,t){return pr(e,[r,n,a,t])});Re(function(e,r,n,a,t,i){return pr(e,[r,n,a,t,i])});ht(function(e,r,n,a,t,i,c){return pr(e,[r,n,a,t,i,c])});ie(function(e,r,n,a,t,i,c,l){return pr(e,[r,n,a,t,i,c,l])});_t(function(e,r,n,a,t,i,c,l,u){return pr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Be(e,n)}catch(a){return me(o(Dt,"This is not valid JSON! "+a.message,r))}});var vi=$(function(e,r){return Be(e,r)});function Be(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?te(e.c):Ue("null",r);case 3:return Sn(r)?so(e.b,r,g):Ue("a LIST",r);case 4:return Sn(r)?so(e.b,r,Vu):Ue("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ue("an OBJECT with a field named `"+n+"`",r);var v=Be(e.b,r[n]);return je(v)?v:me(o(To,n,v.a));case 7:var a=e.e;if(!Sn(r))return Ue("an ARRAY",r);if(a>=r.length)return Ue("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Be(e.b,r[a]);return je(v)?v:me(o(Fi,a,v.a));case 8:if(typeof r!="object"||r===null||Sn(r))return Ue("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Be(e.b,r[i]);if(!je(v))return me(o(To,i,v.a));t=Xe(y(i,v.a),t)}return te(Te(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Be(l[u],r);if(!je(v))return v;c=c(v.a)}return te(c);case 10:var v=Be(e.b,r);return je(v)?Be(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Be(m.a,r);if(je(v))return v;s=Xe(v.a,s)}return me(k$(Te(s)));case 1:return me(o(Dt,e.a,r));case 0:return te(e.a)}}function so(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Be(e,r[i]);if(!je(c))return me(o(Fi,i,c.a));t[i]=c.a}return te(n(t))}function Sn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Vu(e){return o(U$,e.length,function(r){return e[r]})}function Ue(e,r){return me(o(Dt,"Expecting "+e,r))}function Br(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Br(e.b,r.b);case 6:return e.d===r.d&&Br(e.b,r.b);case 7:return e.e===r.e&&Br(e.b,r.b);case 9:return e.f===r.f&&mo(e.g,r.g);case 10:return e.h===r.h&&Br(e.b,r.b);case 11:return mo(e.g,r.g)}}function mo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Br(e[a],r[a]))return!1;return!0}var Bu=$(function(e,r){return JSON.stringify(r,null,e)+""});function $i(e){return e}w(function(e,r,n){return n[e]=r,n});function Pr(e){return{$:0,a:e}}function Au(e){return{$:1,a:e}}function ur(e){return{$:2,b:e,c:null}}var Ha=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Fu(e){return{$:5,b:e}}var Ru=0;function yt(e){var r={$:0,e:Ru++,f:e,g:null,h:[]};return wt(r),r}function fi(e){return ur(function(r){r(Pr(yt(e)))})}function si(e,r){e.h.push(r),wt(e)}var Eu=$(function(e,r){return ur(function(n){si(e,r),n(Pr(mn))})}),ha=!1,po=[];function wt(e){if(po.push(e),!ha){for(ha=!0;e=po.shift();)Zu(e);ha=!1}}function Zu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return Lt(r,a,e.e4,e.fO,e.fG,function(){return function(){}})});function Lt(e,r,n,a,t,i){var c=o(vi,e,r?r.flags:void 0);je(c)||Or(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Nu(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),go(l,b.b,t(v))}return go(l,u.b,t(v)),m?{ports:m}:{}}var qe={};function Nu(e,r){var n;for(var a in qe){var t=qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Gu(t,r)}return n}function ju(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Gu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ha,l,Fu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?x(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=yt(o(Ha,l,e.b))}var Hu=$(function(e,r){return ur(function(n){e.g(r),n(Pr(mn))})});$(function(e,r){return o(Eu,e.h,{$:0,a:r})});function mi(e){return function(r){return{$:1,k:e,l:r}}}function Wu(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var bo=[],_a=!1;function go(e,r,n){if(bo.push({p:e,q:r,r:n}),!_a){_a=!0;for(var a;a=bo.shift();)Iu(a.p,a.q,a.r);_a=!1}}function Iu(e,r,n){var a={};Hn(!0,r,a,null),Hn(!1,n,a,null);for(var t in e)si(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function Hn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Ou(e,t,a,r.l);n[t]=Uu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Hn(e,c.a,n,a);return;case 3:Hn(e,r.o,n,{s:r.n,t:a});return}}function Ou(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?qe[r].e:qe[r].f;return o(i,t,a)}function Uu(e,r,n){return n=n||{i:P,j:P},e?n.i=Xe(r,n.i):n.j=Xe(r,n.j),n}function Ju(e){qe[e]&&Or(3)}$(function(e,r){return r});function qu(e,r){return Ju(e),qe[e]={f:Yu,u:r,a:Xu},mi(e)}var Yu=$(function(e,r){return function(n){return e(r(n))}});function Xu(e,r){var n=P,a=qe[e].u,t=Pr(null);qe[e].b=t,qe[e].c=w(function(c,l,u){return n=l,t});function i(c){var l=o(vi,a,c);je(l)||Or(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Wn,ar=typeof document<"u"?document:{};function St(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(fr(e,function(){}),t),{}});function Wa(e){return{$:0,a:e}}var di=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:xt(n),e:t,f:e,b:i}})}),Tr=di(void 0),Qu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:xt(n),e:t,f:e,b:i}})}),Ku=Qu(void 0);function ev(e,r,n,a){return{$:3,d:xt(e),g:r,h:n,i:a}}var rv=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function br(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return br([e,r],function(){return e(r)})});w(function(e,r,n){return br([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return br([e,r,n,a],function(){return p(e,r,n,a)})});we(function(e,r,n,a,t){return br([e,r,n,a,t],function(){return x(e,r,n,a,t)})});Re(function(e,r,n,a,t,i){return br([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ht(function(e,r,n,a,t,i,c){return br([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ie(function(e,r,n,a,t,i,c,l){return br([e,r,n,a,t,i,c,l],function(){return li(e,r,n,a,t,i,c,l)})});_t(function(e,r,n,a,t,i,c,l,u){return br([e,r,n,a,t,i,c,l,u],function(){return ca(e,r,n,a,t,i,c,l,u)})});var pi=$(function(e,r){return{$:"a0",n:e,o:r}}),nv=$(function(e,r){return{$:"a1",n:e,o:r}}),bi=$(function(e,r){return{$:"a2",n:e,o:r}}),gr=$(function(e,r){return{$:"a3",n:e,o:r}}),av=w(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function tv(e){return e=="script"?"p":e}function ov(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(pi,r.n,iv(e,r.o)):r});function iv(e,r){var n=Rt(r);return{$:r.$,a:n?p(J$,n<3?cv:lv,xe(e),r.a):o(Jn,e,r.a)}}var cv=$(function(e,r){return y(e(r.a),r.b)}),lv=$(function(e,r){return{al:e(r.al),cT:r.cT,cI:r.cI}});function xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ho(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ho(c,t,i):c[t]=i}return r}function ho(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function fr(e,r){var n=e.$;if(n===5)return fr(e.k||(e.k=e.m()),r);if(n===0)return ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=fr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ia(c,r,e.d),c}var c=e.f?ar.createElementNS(e.f,e.c):ar.createElement(e.c);Wn&&e.c=="a"&&c.addEventListener("click",Wn(c)),Ia(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)St(c,fr(n===1?l[u]:l[u].b,r));return c}function Ia(e,r,n){for(var a in n){var t=n[a];a==="a1"?uv(e,t):a==="a0"?fv(e,r,t):a==="a3"?vv(e,t):a==="a4"?$v(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function uv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function vv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function $v(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function fv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=sv(r,i),e.addEventListener(t,c,Pt&&{passive:Rt(i)<2}),a[t]=c}}var Pt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Pt=!0}}))}catch{}function sv(e,r){function n(a){var t=n.q,i=Be(t.a,a);if(!!je(i)){for(var c=Rt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cT,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cI)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function mv(e,r){return e.$==r.$&&Br(e.a,r.a)}function gi(e,r){var n=[];return Ge(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ge(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=yv(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ge(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){$e(n,0,a,r);return}(f?!dv(m,d):m!==d)&&$e(n,2,a,d),Ge(h,b,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:_o(e,r,n,a,pv);return;case 2:_o(e,r,n,a,bv);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=Tt(e.d,r.d);C&&$e(n,4,a,C);var L=r.i(e.g,r.g);L&&$e(n,5,a,L);return}}}function dv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function _o(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=Tt(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function Tt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Tt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&mv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function pv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ge(s,i[v],n,++a),a+=s.b||0}}function bv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],C=h.a,L=b.a,_=h.b,T=b.b,A=void 0,U=void 0;if(C===L){f++,Ge(_,T,t,f),f+=_.b||0,m++,d++;continue}var W=l[m+1],j=u[d+1];if(W){var J=W.a,O=W.b;U=L===J}if(j){var Z=j.a,X=j.b;A=C===Z}if(A&&U){f++,Ge(_,X,t,f),Qr(i,t,C,T,d,c),f+=_.b||0,f++,Kr(i,t,C,O,f),f+=O.b||0,m+=2,d+=2;continue}if(A){f++,Qr(i,t,L,T,d,c),Ge(_,X,t,f),f+=_.b||0,m+=1,d+=2;continue}if(U){f++,Kr(i,t,C,_,f),f+=_.b||0,f++,Ge(O,T,t,f),f+=O.b||0,m+=2,d+=1;continue}if(W&&J===Z){f++,Kr(i,t,C,_,f),Qr(i,t,L,T,d,c),f+=_.b||0,f++,Ge(O,X,t,f),f+=O.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Kr(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];Qr(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&$e(n,8,a,{w:t,x:c,y:Q})}var hi="_elmW6BL";function Qr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ge(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Qr(e,r,n+hi,a,t,i)}function Kr(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ge(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}Kr(e,r,n+hi,a,t)}function _i(e,r,n,a){en(e,r,n,0,0,r.b,a)}function en(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)_i(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&en(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&en(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return en(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var L=d===1?h[C]:h[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=en(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Ci(e,r,n,a){return n.length===0?e:(_i(e,r,n,a),In(e,n))}function In(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=gv(t,a);t===e&&(e=i)}return e}function gv(e,r){switch(r.$){case 0:return hv(e,r.s,r.u);case 4:return Ia(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return In(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(fr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=In(e,i.w),e;case 8:return _v(e,r);case 5:return r.s(e);default:Or(10)}}function hv(e,r,n){var a=e.parentNode,t=fr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function _v(e,r){var n=r.s,a=Cv(n.y,r);e=In(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:fr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&St(e,a),e}function Cv(e,r){if(!!e){for(var n=ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;St(n,i.c===2?i.s:fr(i.z,r.u))}return n}}function zt(e){if(e.nodeType===3)return Wa(e.textContent);if(e.nodeType!==1)return Wa("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Xe(o(gr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=Xe(zt(v[a]),u);return p(Tr,l,r,u)}function yv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var wv=B(function(e,r,n,a){return Lt(r,a,e.e4,e.fO,e.fG,function(t,i){var c=e.fQ,l=a.node,u=zt(l);return yi(i,function(v){var s=c(v),m=gi(u,s);l=Ci(l,u,m,t),u=s})})});B(function(e,r,n,a){return Lt(r,a,e.e4,e.fO,e.fG,function(t,i){var c=e.cQ&&e.cQ(t),l=e.fQ,u=ar.title,v=ar.body,s=zt(v);return yi(i,function(m){Wn=c;var d=l(m),f=Tr("body")(P)(d.ew),h=gi(s,f);v=Ci(v,s,h,t),s=f,Wn=0,u!==d.fK&&(ar.title=u=d.fK)})})});var On=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function yi(e,r){r(e);var n=0;function a(){n=n===1?0:(On(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&On(a),n=2)}}$(function(e,r){return o(Nt,Et,ur(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Nt,Et,ur(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Nt,Et,ur(function(){history.replaceState({},"",r),e()}))});var Lv={addEventListener:function(){},removeEventListener:function(){}},Sv=typeof window<"u"?window:Lv;w(function(e,r,n){return fi(ur(function(a){function t(i){yt(n(i))}return e.addEventListener(r,t,Pt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Be(e,r);return je(n)?K(n.a):H});function wi(e,r){return ur(function(n){On(function(){var a=document.getElementById(e);n(a?Pr(r(a)):Au(Y$(e)))})})}function xv(e){return ur(function(r){On(function(){r(Pr(e()))})})}$(function(e,r){return wi(r,function(n){return n[e](),mn})});$(function(e,r){return xv(function(){return Sv.scroll(e,r),mn})});w(function(e,r,n){return wi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Pv=$(function(e,r){var n="g";e.fh&&(n+="m"),e.ey&&(n+="i");try{return K(new RegExp(r,n))}catch{return H}});$(function(e,r){return r.match(e)!==null});var Tv=w(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?K(m):H}a.push(x(Cc,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?K(v):H}return n(x(Cc,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});w(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var zv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/kv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function kv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var kt=new Float64Array(3),Co=new Float64Array(3),yo=new Float64Array(3),Mv=w(function(e,r,n){return new Float64Array([e,r,n])}),Dv=function(e){return e[0]},Vv=function(e){return e[1]},Bv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Av=function(e){return new Float64Array([e.fV,e.fZ,e.c2])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Li(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Li);function Si(e,r,n){return n===void 0&&(n=new Float64Array(3)),Un(Li(e,r,n),n)}$(Si);function xi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Un(e,r){r===void 0&&(r=new Float64Array(3));var n=1/xi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Fv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),rn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(rn);function Oa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Oa);$(function(e,r){var n,a=kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=rn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(rn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(rn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(rn(r,a)+e[14])/n,t});var Rv=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Ev=function(e){return{fV:e[0],fZ:e[1],c2:e[2],en:e[3]}},Zv=function(e){return new Float64Array([e.fV,e.fZ,e.c2,e.en])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Nv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Nv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var jv=new Float64Array(16),Gv=new Float64Array(16),Hv=function(e){var r=new Float64Array(16);return r[0]=e.dw,r[1]=e.dA,r[2]=e.dE,r[3]=e.dI,r[4]=e.dx,r[5]=e.dB,r[6]=e.dF,r[7]=e.dJ,r[8]=e.dy,r[9]=e.dC,r[10]=e.dG,r[11]=e.dK,r[12]=e.dz,r[13]=e.dD,r[14]=e.dH,r[15]=e.dL,r},Wv=function(e){return{dw:e[0],dA:e[1],dE:e[2],dI:e[3],dx:e[4],dB:e[5],dF:e[6],dJ:e[7],dy:e[8],dC:e[9],dG:e[10],dK:e[11],dz:e[12],dD:e[13],dH:e[14],dL:e[15]}};function Pi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Re(Pi);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Pi(c,l,i,t,n,a)});function Ti(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Re(Ti);B(function(e,r,n,a){return Ti(e,r,n,a,-1,1)});function zi(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],C=e[13],L=e[14],_=e[15],T=r[0],A=r[1],U=r[2],W=r[3],j=r[4],J=r[5],O=r[6],Z=r[7],X=r[8],Q=r[9],be=r[10],ge=r[11],ue=r[12],ve=r[13],Ze=r[14],Ne=r[15];return n[0]=a*T+l*A+m*U+b*W,n[1]=t*T+u*A+d*U+C*W,n[2]=i*T+v*A+f*U+L*W,n[3]=c*T+s*A+h*U+_*W,n[4]=a*j+l*J+m*O+b*Z,n[5]=t*j+u*J+d*O+C*Z,n[6]=i*j+v*J+f*O+L*Z,n[7]=c*j+s*J+h*O+_*Z,n[8]=a*X+l*Q+m*be+b*ge,n[9]=t*X+u*Q+d*be+C*ge,n[10]=i*X+v*Q+f*be+L*ge,n[11]=c*X+s*Q+h*be+_*ge,n[12]=a*ue+l*ve+m*Ze+b*Ne,n[13]=t*ue+u*ve+d*Ze+C*Ne,n[14]=i*ue+v*ve+f*Ze+L*Ne,n[15]=c*ue+s*ve+h*Ze+_*Ne,n}$(zi);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],C=r[1],L=r[2],_=r[4],T=r[5],A=r[6],U=r[8],W=r[9],j=r[10],J=r[12],O=r[13],Z=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*T+v*A,n[5]=t*_+l*T+s*A,n[6]=i*_+u*T+m*A,n[7]=0,n[8]=a*U+c*W+v*j,n[9]=t*U+l*W+s*j,n[10]=i*U+u*W+m*j,n[11]=0,n[12]=a*J+c*O+v*Z+d,n[13]=t*J+l*O+s*Z+f,n[14]=i*J+u*O+m*Z+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Un(r,kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});w(function(e,r,n){var a=new Float64Array(16),t=1/xi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=h+f,T=b-d,A=h-f,U=c*c*v+u,W=C+m,j=b+d,J=C-m,O=l*l*v+u,Z=n[0],X=n[1],Q=n[2],be=n[3],ge=n[4],ue=n[5],ve=n[6],Ze=n[7],Ne=n[8],zr=n[9],kr=n[10],ga=n[11],kl=n[12],Ml=n[13],Dl=n[14],Vl=n[15];return a[0]=Z*L+ge*_+Ne*T,a[1]=X*L+ue*_+zr*T,a[2]=Q*L+ve*_+kr*T,a[3]=be*L+Ze*_+ga*T,a[4]=Z*A+ge*U+Ne*W,a[5]=X*A+ue*U+zr*W,a[6]=Q*A+ve*U+kr*W,a[7]=be*A+Ze*U+ga*W,a[8]=Z*j+ge*J+Ne*O,a[9]=X*j+ue*J+zr*O,a[10]=Q*j+ve*J+kr*O,a[11]=be*j+Ze*J+ga*O,a[12]=kl,a[13]=Ml,a[14]=Dl,a[15]=Vl,a});function Iv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}w(Iv);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ov(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}w(Ov);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});w(function(e,r,n){var a=Si(e,r,kt),t=Un(Oa(n,a,Co),Co),i=Un(Oa(a,t,yo),yo),c=jv,l=Gv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,zi(c,l)});w(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var wo=0;function ln(e,r){for(;r.b;r=r.b)e(r.a)}function Mt(e){for(var r=0;e.b;e=e.b)r++;return r}var Uv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Jv=we(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),qv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Yv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Xv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Qv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Kv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),e$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),r$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),n$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),a$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},t$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},o$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},i$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ki=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Mi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},c$=function(e){e.gl.disable(e.gl.CULL_FACE)},l$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},u$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},v$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Lo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],$$=[t$,o$,i$,ki,Mi,c$,l$,u$,v$];function So(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function f$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Di(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function s$(e,r,n,a){for(var t=n.a.db,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,L){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[L]:C[L][_];else i.forEach(function(T){for(_=0;_<h;_++)f[b++]=h===1?C[T][L]:C[T][L][_]})}var u=Di(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Mt(n.b)*s);ln(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function m$(e,r){if(r.a.dk>0){var n=e.createBuffer(),a=d$(r.c,r.a.dk);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.db*Mt(r.b),indexBuffer:null,buffers:{}}}function d$(e,r){var n=new Uint32Array(Mt(e)*r),a=0,t;return ln(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function xo(e,r){return e+"#"+r}var Vi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ki(n),Mi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=xo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=wo++,v||(v=So(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=wo++,s||(s=So(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=f$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=p$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=xo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),b$(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=m$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=s$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=Di(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,T=0;T<C.arraySize;T++)a.enableVertexAttribArray(h+T),a.vertexAttribPointer(h+T,C.size,C.baseType,!1,_,L*T)}for(n.toggle=!n.toggle,ln(l0(n),i.a),u=0;u<Lo.length;u++){var A=n[Lo[u]];A.toggle!==n.toggle&&A.enabled&&($$[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dU,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dU,0,b.numIndices)}}return ln(t,e.g),r});function p$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var T=l.textures.get(_);T||(T=_.eF(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function b$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var g$=w(function(e,r,n){return ev(r,{g:n,f:{},h:e},S$,x$)}),h$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),_$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),C$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),y$=$(function(e,r){e.contextAttributes.antialias=!0}),w$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),L$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function S$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ln(function(t){return o(c0,r,t)},e.h);var n=ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Uv(function(){return o(Vi,e,n)})):(n=ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function x$(e,r){return r.f=e.f,Vi(r)}var V=Hl,xn=Nl;w(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(xn,e,l,v)}else{var u=c.a;return p(xn,i,l,u)}});return p(xn,i,p(xn,e,r,t),a)});var ua=w(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ua,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Po=function(e){return p(ua,w(function(r,n,a){return o(V,y(r,n),a)}),P,e)},P$=function(e){return p(ua,w(function(r,n,a){return o(V,r,a)}),P,e)},T$=function(e){var r=e;return P$(r)},Bi=1,z$=2,Ai=0,me=function(e){return{$:1,a:e}},Dt=$(function(e,r){return{$:3,a:e,b:r}}),To=$(function(e,r){return{$:0,a:e,b:r}}),Fi=$(function(e,r){return{$:1,a:e,b:r}}),te=function(e){return{$:0,a:e}},k$=function(e){return{$:2,a:e}},K=function(e){return{$:0,a:e}},H={$:1},M$=du,D$=Bu,Pe=ui,_r=$(function(e,r){return o(fu,e,la(r))}),Vt=$(function(e,r){return g(o($u,e,r))}),Ri=function(e){return o(_r,`
    `,o(Vt,`
`,e))},dn=w(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return p(dn,$(function(r,n){return n+1}),0,e)},V$=Wl,B$=w(function(e,r,n){e:for(;;)if(N(e,r)<1){var a=e,t=r-1,i=o(V,r,n);e=a,r=t,n=i;continue e}else return n}),Bt=$(function(e,r){return p(B$,e,r,P)}),Ei=$(function(e,r){return p(V$,e,o(Bt,0,Sr(r)-1),r)}),Ye=yu,Zi=function(e){var r=Ye(e);return 97<=r&&r<=122},Ni=function(e){var r=Ye(e);return r<=90&&65<=r},A$=function(e){return Zi(e)||Ni(e)},F$=function(e){var r=Ye(e);return r<=57&&48<=r},R$=function(e){return Zi(e)||Ni(e)||F$(e)},Te=function(e){return p(dn,V,P,e)},Ur=cu,E$=$(function(e,r){return`

(`+(Pe(e+1)+(") "+Ri(Z$(r))))}),Z$=function(e){return o(N$,e,P)},N$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Ur(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return A$(L)&&o(M$,R$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(V,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=o(V,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(_r,"",Te(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Pe(Sr(s))+" ways:"));return o(_r,`

`,o(V,h,o(Ei,E$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(_r,"",Te(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(_r,"",Te(r))+`:

    `):`Problem with the given value:

`}();return h+(Ri(o(D$,4,f))+(`

`+d))}}),ze=32,Ua=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ja=Al,ji=eu,At=$(function(e,r){return fo(r)/fo(e)}),j$=Ql,un=ji(o(At,2,ze)),Gi=x(Ua,0,un,Ja,Ja),Hi=Rl,Wi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ii=ru,qa=Fl,He=$(function(e,r){return N(e,r)>0?e:r}),G$=function(e){return{$:0,a:e}},Ft=El,H$=$(function(e,r){e:for(;;){var n=o(Ft,ze,e),a=n.a,t=n.b,i=o(V,G$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Te(i)}}),W$=function(e){var r=e.a;return r},I$=$(function(e,r){e:for(;;){var n=ji(r/ze);if(n===1)return o(Ft,ze,e).a;var a=o(H$,e,P),t=n;e=a,r=t;continue e}}),Oi=$(function(e,r){if(r.l){var n=r.l*ze,a=Ii(o(At,ze,n-1)),t=e?Te(r.z):r.z,i=o(I$,t,r.l);return x(Ua,qa(r.p)+n,o(He,5,a*un),i,r.p)}else return x(Ua,qa(r.p),un,Ja,r.p)}),O$=we(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Oi,!1,{z:a,l:n/ze|0,p:t});var i=Wi(p(Hi,ze,r,e)),c=e,l=r-ze,u=n,v=o(V,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),U$=$(function(e,r){if(e<=0)return Gi;var n=e%ze,a=p(Hi,n,e-n,r),t=e-n-ze;return S(O$,r,t,e,P,a)}),je=function(e){return!e.$},k=ku,Y=Su,z=zu,oe=xu,Jn=Mu,J$=Du,xe=Lu,Rt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Tr("div"),q$=function(e){return{$:2,a:e}},Ui=$(function(e,r){return e}),Ji=$(function(e,r){return{bD:r.bD,eD:e,b8:r.b8,eM:r.eM,dp:r.dp,bi:r.bi,bk:r.bk,fR:r.fR}}),Rr=function(e){return e},Y$=Rr,zo=Re(function(e,r,n,a,t,i){return{dg:i,di:r,dY:a,d$:n,d3:e,d4:t}}),X$=pu,Cr=lu,Ar=su,pn=$(function(e,r){return e<1?r:p(Ar,e,Cr(r),r)}),va=gu,$a=function(e){return e===""},fa=$(function(e,r){return e<1?"":p(Ar,0,e,r)}),qi=hu,ko=we(function(e,r,n,a,t){if($a(t)||o(X$,"@",t))return H;var i=o(va,":",t);if(i.b){if(i.b.b)return H;var c=i.a,l=qi(o(pn,c+1,t));if(l.$===1)return H;var u=l;return K(se(zo,e,o(fa,c,t),u,r,n,a))}else return K(se(zo,e,t,H,r,n,a))}),Mo=B(function(e,r,n,a){if($a(a))return H;var t=o(va,"/",a);if(t.b){var i=t.a;return S(ko,e,o(pn,i,a),r,n,o(fa,i,a))}else return S(ko,e,"/",r,n,a)}),Do=w(function(e,r,n){if($a(n))return H;var a=o(va,"?",n);if(a.b){var t=a.a;return x(Mo,e,K(o(pn,t+1,n)),r,o(fa,t,n))}else return x(Mo,e,H,r,n)});$(function(e,r){if($a(r))return H;var n=o(va,"#",r);if(n.b){var a=n.a;return p(Do,e,K(o(pn,a+1,r)),o(fa,a,r))}else return p(Do,e,H,r)});var Q$=bu,Et=function(e){},bn=Pr,K$=bn(0),Yi=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(dn,e,r,Te(m)):x(Yi,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),vr=w(function(e,r,n){return x(Yi,e,r,0,n)}),le=$(function(e,r){return p(vr,$(function(n,a){return o(V,e(n),a)}),P,r)}),qn=Ha,Zt=$(function(e,r){return o(qn,function(n){return bn(e(n))},r)}),ef=w(function(e,r,n){return o(qn,function(a){return o(qn,function(t){return bn(o(e,a,t))},n)},r)}),rf=function(e){return p(vr,ef(V),bn(P),e)},nf=Hu,af=$(function(e,r){var n=r;return fi(o(qn,nf(e),n))}),tf=w(function(e,r,n){return o(Zt,function(a){return 0},rf(o(le,af(e),r)))}),of=w(function(e,r,n){return bn(0)}),cf=$(function(e,r){var n=r;return o(Zt,e,n)});qe.Task=ju(K$,tf,of,cf);var lf=mi("Task"),Nt=$(function(e,r){return lf(o(Zt,e,r))}),uf=wv,vf=ou,Yn={$:1},Xi=function(e){return{$:2,a:e}},sa={$:0},Fe=$(function(e,r){return{$:0,a:e,b:r}}),re=w(function(e,r,n){return r(e(n))}),Jr=function(e){var r=e.b.B;return r.a},$f=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return K(o(Fe,r,{B:i,ab:c,T:o(V,a,n)}))}else return H},Qi=function(e){var r=e.b;return o(Fe,sa,r)},ir=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ff=w(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bi.da?Qi(n):n;case 2:var i=a.a.cU;return(N(i+r.eM,Jr(n).bD)>0?o(re,$f,ir(o(Fe,Yn,t))):Rr)(o(Fe,Xi({cU:i+r.eM}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ji,l.eD,Ae(r,{bD:l.bD+r.eM})),s=o(e,v,u);return o(Fe,sa,{B:y(v,s),ab:P,T:o(V,t.B,t.T)})}}),Ki=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),sf=w(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(V,a,n);e=i,r=c,n=l;continue e}else return n}}),mf=$(function(e,r){return Te(p(sf,e,r,P))}),ec=w(function(e,r,n){if(r<=0)return P;{var a=y(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(V,_,o(V,c,o(V,s,o(V,b,o(mf,r-4,C))))):o(V,_,o(V,c,o(V,s,o(V,b,p(ec,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return g([_])}}),df=$(function(e,r){return p(ec,0,e,r)}),pf=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ae(Te(n),ae(g([a]),t)),c=o(df,e,i),l=o(Ki,e,i);if(l.b){var u=l.a,v=l.b;return o(Fe,Yn,{B:u,ab:v,T:Te(c)})}else{var s=Te(c);if(s.b){var m=s.a,d=s.b;return o(Fe,Yn,{B:m,ab:P,T:d})}else return r}}),bf=function(e){var r=e.b;return o(Fe,Yn,r)},gf=function(e){var r=e.b;return o(Fe,Xi({cU:Jr(e).bD}),r)},hf=$(function(e,r){switch(e.$){case 1:return bf(r);case 2:return Qi(r);case 3:return gf(r);default:var n=e.a;return o(pf,n,r)}}),rc=$(function(e,r){var n=r.a,a=r.b;return y(e(n),a)}),_f=$(function(e,r){return Ae(r,{av:e(r.av)})}),Cf=function(e){return{$:3,a:e}},yf=function(e){return{$:2,a:e}},wf=$(function(e,r){return{$:0,a:e,b:r}}),Lf=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return H;var n=r.a;return K(e(n))}),G=function(e){return e<0?-e:e},jt=_u,Sf=w(function(e,r,n){return o(ir,0/0,jt(o(e,r,n)))}),nc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),xf=vu,ac=function(e){return p(xf,V,P,e)},Pf=$(function(e,r){var n=o(nc,function(a){return a!=="0"&&a!=="."},ac(r));return ae(e&&n?"-":"",r)}),ne=ui,Ya=iu,tc=wu,oc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Ur(n);if(a.$===1)return"01";var t=a.a;return o(Ya,"0",oc(t))}else{var i=Ye(r);return i>=48&&i<57?o(Ya,tc(i+1),n):"0"}},Xa=Kl,Tf=tu,ma=function(e){return o(Ya,e,"")},ic=w(function(e,r,n){return e<=0?n:p(ic,e>>1,ae(r,r),e&1?ae(n,r):n)}),vn=$(function(e,r){return p(ic,e,r,"")}),Qa=w(function(e,r,n){return ae(n,o(vn,e-Cr(n),ma(r)))}),Ka=uu,cc=function(e){var r=o(Vt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return y(n,t)}else{var n=r.a;return y(n,"0")}else return y("0","0")},zf=function(e){var r=o(Vt,"e",ne(G(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ir,0,qi(o(Q$,"+",t)?o(pn,1,t):t)),c=cc(n),l=c.a,u=c.b,v=ae(l,u),s=i<0?o(ir,"0",o(Ce,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Ce,rc(ma),Ur(ae(o(vn,G(i),"0"),v))))):p(Qa,i+1,"0",v);return ae(e<0?"-":"",s)}else{var n=r.a;return ae(e<0?"-":"",n)}else return""},kf=w(function(e,r,n){if(Xa(n)||Tf(n))return ne(n);var a=n<0,t=cc(zf(G(n))),i=t.a,c=t.b,l=Cr(i)+r,u=ae(o(vn,-l+1,"0"),p(Qa,l,"0",ae(i,c))),v=Cr(u),s=o(He,1,l),m=o(e,a,p(Ar,s,v,u)),d=p(Ar,0,s,u),f=m?Ka(o(ir,"1",o(Ce,oc,Ur(Ka(d))))):d,h=Cr(f),b=f==="0"?f:r<=0?ae(f,o(vn,G(r),"0")):N(r,Cr(c))<0?p(Ar,0,h-r,f)+("."+p(Ar,h-r,h,f)):ae(i+".",p(Qa,r,"0",c));return o(Pf,a,b)}),lc=kf($(function(e,r){var n=Ur(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ye(t))})),Mf=Sf(lc),Df=w(function(e,r,n){var a=o(At,10,G(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Mf,t,n)}),uc=Gl,vc=$(function(e,r){e:for(;;){if(r.$===-2)return H;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(uc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return K(a);default:var l=e,u=i;e=l,r=u;continue e}}}),F=we(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Qe={$:-2},Gr=we(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(F,0,r,n,S(F,1,v,s,m,d),S(F,1,i,c,l,u))}else return S(F,e,i,c,S(F,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return S(F,0,v,s,S(F,1,h,b,C,L),S(F,1,r,n,d,t))}else return S(F,e,r,n,a,t)}),et=w(function(e,r,n){if(n.$===-2)return S(F,0,e,r,Qe,Qe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(uc,e,t);switch(u){case 0:return S(Gr,a,t,i,p(et,e,r,c),l);case 1:return S(F,a,t,r,c,l);default:return S(Gr,a,t,i,c,p(et,e,r,l))}}),an=w(function(e,r,n){var a=p(et,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(F,1,t,i,c,l)}else{var u=a;return u}}),Vf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},$c=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,C=d.e,L=v.e;return S(F,0,f,h,S(F,1,n,a,S(F,0,i,c,l,u),b),S(F,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,L=T.e;return S(F,1,n,a,S(F,0,i,c,l,u),S(F,0,s,m,d,L))}else return e},Vo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,L=f.e;return S(F,0,i,c,S(F,1,u,v,s,m),S(F,1,n,a,d,S(F,0,h,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,d=_.e,A=e.e;A.a;var h=A.b,b=A.c,C=A.d,L=A.e;return S(F,1,n,a,S(F,0,i,c,T,d),S(F,0,h,b,C,L))}else return e},Bf=ht(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(F,n,l,u,v,S(F,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Vo(r)}else break e;else return c.a,c.d,Vo(r);else break e;return r}}),Fn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(F,r,n,a,Fn(t),l);var u=$c(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Gr,v,s,m,Fn(d),f)}else return Qe}else return S(F,r,n,a,Fn(t),l)}else return Qe},tn=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(N(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(F,n,a,t,o(tn,e,i),c);var u=$c(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Gr,v,s,m,o(tn,e,d),f)}else return Qe}else return S(F,n,a,t,o(tn,e,i),c);else return o(Af,e,li(Bf,e,r,n,a,t,i,c))}),Af=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Lr(e,a)){var l=Vf(c);if(l.$===-1){var u=l.b,v=l.c;return S(Gr,n,u,v,i,Fn(c))}else return Qe}else return S(Gr,n,a,t,i,o(tn,e,c))}else return Qe}),fc=$(function(e,r){var n=o(tn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(F,1,a,t,i,c)}else{var l=n;return l}}),Pn=w(function(e,r,n){var a=r(o(vc,e,n));if(a.$)return o(fc,e,n);var t=a.a;return p(an,e,t,n)}),Ff=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Pn,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Lf,y(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Pn,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(wf,y(i,c),p(Df,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Pn,r,Ce(function(a){return a.$===3?Cf(n):a}));default:var r=e.a,n=e.b;return o(Pn,r,Ce(function(a){return a.$===2?yf(n):a}))}},Rf=function(e){return _f(Ff(e))},Ef=$(function(e,r){return o(le,Rf(e),r)}),Zf=$(function(e,r){return Ae(r,{eD:o(Ef,e,r.eD)})}),Nf=$(function(e,r){var n=r.a,a=r.b;return o(Fe,n,Ae(a,{B:o(rc,Zf(e),a.B)}))}),jf=$(function(e,r){var n=r.a,a=r.b;return y(n,e(a))}),Gf=w(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Fe,a,Ae(t,{B:o(jf,o(e,i.a,r),i)}))}),Hf=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ae(a,{aM:!a.aM});case 2:var t=n.a;return Ae(a,{G:p(ff,e,t,a.G)});case 3:var i=n.a;return Ae(a,{G:o(Nf,i,a.G)});case 4:var c=n.a;return Ae(a,{G:p(Gf,r,c,a.G)});default:var l=n.a;return Ae(a,{G:o(hf,l,a.G)})}}),Wf=$(function(e,r){return o(Fe,sa,{B:y(e,r(e)),ab:P,T:P})}),If=Wu,Bo=If(P),Xn=Tu,$n=Pu,Of=qu("tick",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return xe({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fR:e})},o(z,"clock",oe))},o(z,"devicePixelRatio",oe))},o(z,"dt",oe))},o(z,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return xe({ep:m,eE:s,da:v,eL:u,e8:l,ft:c,fx:i,ea:t,ei:a})},o(z,"alt",Y))},o(z,"control",Y))},o(z,"down",Y))},o(z,"downs",Xn($n)))},o(z,"left",Y))},o(z,"pressedKeys",Xn($n)))},o(z,"right",Y))},o(z,"shift",Y))},o(z,"up",Y))))},o(z,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return xe({da:v,cb:u,fe:l,fy:c,fz:i,ei:t,fV:a,fZ:n})},o(z,"down",Y))},o(z,"isDown",Y))},o(z,"move",Y))},o(z,"rightDown",Y))},o(z,"rightUp",Y))},o(z,"up",Y))},o(z,"x",oe))},o(z,"y",oe))))},o(z,"screen",o(k,function(r){return o(k,function(n){return xe({e_:n,fT:r})},o(z,"height",oe))},o(z,"width",oe))))},o(z,"wheel",o(k,function(e){return o(k,function(r){return xe({eH:r,eI:e})},o(z,"deltaX",oe))},o(z,"deltaY",oe))))),Uf=function(e){return{$:4,a:e}},Jf={$:0},qf=$i,Ee=$(function(e,r){return o(bi,e,qf(r))}),E=Ee("className"),Yf=function(e){var r=e.b.B;return r.b},Qn=Ee("id"),Xf=rv,Kn=Xf,Qf=nv,ee=Qf,Kf={$:1},es=function(e){return{$:3,a:e}},rs=function(e){return{$:5,a:e}},Ao=Tr("a"),Gt=Tr("button"),Fo=function(e){return o(Ee,"href",ov(e))},ns=gr("clip-rule"),he=gr("d"),as=gr("fill"),sc=di("http://www.w3.org/2000/svg"),ts=sc("svg"),os=gr("viewBox"),is=o(av,"http://www.w3.org/XML/1998/namespace","xml:space"),Me=ts(g([os("0 0 24 24"),as("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),is("http://www.w3.org/2000/svg")])),cs=gr("fill-rule"),_e=sc("path"),yr={eG:Me(g([o(_e,g([he("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eU:Me(g([o(_e,g([he("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eZ:Me(g([o(_e,g([he("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),ff:Me(g([o(_e,g([he("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(_e,g([he("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fg:Me(g([o(_e,g([he("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(_e,g([he("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fq:Me(g([o(_e,g([he("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fr:Me(g([o(_e,g([he("M7 5V19L18 12L7 5Z")]),P)])),fs:Me(g([o(_e,g([he("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),bi:Me(g([o(_e,g([he("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Me(g([o(_e,g([cs("evenodd"),ns("evenodd"),he("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Me(g([o(_e,g([he("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f1:Me(g([o(_e,g([he("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},ls=function(e){return{$:0,a:e}},mc=pi,dc=$(function(e,r){return o(mc,e,ls(r))}),Ht=function(e){return o(dc,"click",xe(e))},Ro=Ee("target"),us=Ee("title"),rt=$(function(e,r){if(r.$===-2)return Qe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(F,n,a,o(e,a,t),o(rt,e,i),o(rt,e,c))}),vs=Wa,cr=vs,$s=function(e){return p(ua,w(function(r,n,a){return o(V,n,a)}),P,e)},fs=$(function(e,r){return{$:3,a:e,b:r}}),ss=$(function(e,r){return{$:2,a:e,b:r}}),ms=$(function(e,r){return{$:0,a:e,b:r}}),ds=$(function(e,r){return{$:1,a:e,b:r}}),da=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pc=x(da,0/255,0/255,0/255,1),ps=$i,bc=$(function(e,r){return o(bi,e,ps(r))}),bs=bc("checked"),pe=nu,gs=w(function(e,r,n){return ae(o(vn,e-Cr(n),ma(r)),n)}),hs=Ol,gc=function(e){var r=function(n){return n<10?Pe(n):ma(tc(87+n))};return e<16?r(e):ae(gc(e/16|0),r(o(hs,16,e)))},_s=o(re,gc,o(gs,2,"0")),hc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b4:a,ca:n,cK:r}},Cs=function(e){var r=hc(e),n=r.cK,a=r.ca,t=r.b4;return o(_r,"",o(V,"#",o(le,o(re,pe,_s),g([n*255,a*255,t*255]))))},nt=Ee("htmlFor"),at=$(function(e,r){if(r.$)return H;var n=r.a;return e(n)}),ea=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),ys=w(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(V,t,n)}),_c=$(function(e,r){return p(vr,ys(e),P,r)}),Cc=B(function(e,r,n,a){return{e3:r,fc:e,fl:n,fF:a}}),ws=Tv,Ls=Cu,Ss=$(function(e,r){if(r.$)return me(e);var n=r.a;return te(n)}),xs=Pv,Ps=function(e){return o(xs,{ey:!1,fh:!1},e)},yc=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return H},Ts=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return te(e(n))}}),zs=function(e){return{$:2,a:e}},ks=function(e){return{$:0,a:e}},Ms=function(e){return{$:1,a:e}},Ca=$(function(e,r){return Ye(r)-Ye(e)}),ya=w(function(e,r,n){var a=Ye(n);return N(Ye(e),a)<1&&N(a,Ye(r))<1}),Ds=$(function(e,r){var n=function(t){return N(t,e)<0?te(t):me(Ms(r))},a=p(ya,"0","9",r)?te(o(Ca,"0",r)):p(ya,"a","z",r)?te(10+o(Ca,"a",r)):p(ya,"A","Z",r)?te(10+o(Ca,"A",r)):me(ks(r));return o(ea,n,a)}),wc=$(function(e,r){var n=Ur(r);if(n.$===1)return te(0);var a=n.a,t=a.a,i=a.b;return o(ea,function(c){return o(ea,function(l){return te(c+l*e)},o(wc,e,i))},o(Ds,e,t))}),Vs=$(function(e,r){return 2<=e&&e<=36?o(wc,e,Ka(r)):me(zs(e))}),Bs=Vs(16),As=w(function(e,r,n){return x(da,e,r,n,1)}),Fs=B(function(e,r,n,a){return x(da,e,r,n,a)}),gn=Il,Rs=$(function(e,r){var n=o(gn,10,e);return pe(r*n)/n}),Es=mu,Zs=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ac(n);if(a.b&&!a.b.b){var t=a.a;return Ls(g([t,t]))}else return n};return o(re,Es,o(re,function(n){return o(Ce,function(a){return p(ws,1,a,n)},Ps(e))},o(re,at(yc),o(re,Ce(function(n){return n.fF}),o(re,Ce(_c(Rr)),o(re,Ss("Parsing hex regex failed"),ea(function(n){var a=o(le,o(re,r,o(re,Bs,Ts(j$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return te(x(Fs,t/255,c/255,u/255,o(Rs,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return te(p(As,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),ra=Tr("input"),tt=Tr("label"),ot=Ee("name"),Lc=$(function(e,r){return p(vr,z,r,e)}),Ns=o(Lc,g(["target","checked"]),Y),js=function(e){return o(dc,"change",o(Jn,e,Ns))},Gs=function(e){return y(e,!0)},Hs=function(e){return{$:1,a:e}},Ws=$(function(e,r){return o(mc,e,Hs(r))}),Is=o(Lc,g(["target","value"]),$n),Wt=function(e){return o(Ws,"input",o(Jn,Gs,o(Jn,e,Is)))},Sc=Ee("max"),xc=Ee("min"),Pc=function(e){return o(Ee,"step",e)},na=Ee("type"),It=Ee("value"),Eo=function(e){var r=e.cd,n=e.cZ,a=e.ct,t=e.cp,i=e.cS,c=e.cx;return o(I,P,g([o(tt,g([nt(r)]),g([o(I,g([E("relative w-full")]),g([o(I,g([E("inline-block")]),g([cr(r)])),o(I,g([E("inline-block float-right")]),g([cr(ne(n))]))]))])),o(ra,g([na("range"),o(ee,"width","100%"),Qn(r),ot(r),xc(ne(a)),Sc(ne(t)),It(ne(n)),Pc(ne(i)),Wt(o(re,jt,o(re,ir(42),c)))]),P)]))},Os=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Us=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,g([E("h-12 py-4")]),g([o(tt,g([E("block"),nt(e)]),g([o(ra,g([E("relative bottom-[1px] align-middle mr-2"),na("checkbox"),Qn(e),ot(e),js(fs(e)),bs(c)]),P),cr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Eo({cd:e,cp:i,ct:t,cx:ms(e),cS:.01*(i-t),cZ:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Eo({cd:e,cp:i,ct:t,cx:o(re,pe,ds(e)),cS:1,cZ:c});default:var c=r.a;return o(I,P,g([o(I,g([o(ee,"margin-bottom","6px")]),g([o(tt,g([nt(e)]),g([cr(e)]))])),o(ra,g([na("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),Qn(e),ot(e),Wt(function(l){return o(ss,e,o(Os,pc,Zs(l)))}),It(Cs(c))]),P)]))}}),Js=function(e){return o(I,g([E("p-4 border-y-[0.5px] border-white20")]),g([o(I,g([E("text-lg pb-2")]),g([cr(e.fi)])),o(I,g([E("pl-2 pr-2")]),$s(o(rt,Us,e.av)))]))},qs=function(e){return o(I,g([E("text-xs text-white60")]),o(le,Js,e))},Ys=function(e){return o(I,g([E("absolute left-[104px] bottom-2 text-sm text-white40")]),g([cr("clock: "+o(lc,3,Jr(e).bD))]))},Xs=function(e){e.a;var r=e.b.T;return o(Ce,function(n){return pe(60/(Jr(e).bD-n))},o(Ce,o(re,W$,function(n){return n.bD}),yc(o(Ki,59,r))))},Qs=function(e){return o(I,g([E("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Xs(e);if(r.$===1)return g([cr("... Fps")]);var n=r.a;return g([cr(Pe(n)+" Fps")])}())},Ks=function(e){return{$:0,a:e}},em=function(e){var r=e.b.T;return Sr(r)},rm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Sr(r)+1+Sr(n)},nm=function(e){return o(ra,g([E("absolute w-full"),na("range"),xc(Pe(0)),Sc(Pe(rm(e)-1)),It(Pe(em(e))),Pc(Pe(1)),Wt(o(re,jt,o(re,ir(42),o(re,pe,Ks))))]),P)},Zo={$:1},No={$:3},jo={$:2},it=function(e){return!e.b},Tc=bc("disabled"),wa=w(function(e,r,n){return o(Gt,g([E("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),E(n),Tc(e),Ht(r)]),g([cr("REC")]))}),La=w(function(e,r,n){return o(Gt,g([E("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Tc(e),Ht(n)]),g([o(I,g([E("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),am=function(e){var r=e.a,n=e.b.ab;return o(I,g([E("py-1")]),g([function(){switch(r.$){case 0:return p(wa,!1,Zo,"text-red-500 font-bold");case 1:return p(wa,!1,jo,"text-white60 hover:text-white80 font-bold");default:return p(wa,!0,jo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(La,it(n),yr.fr,No);case 1:return p(La,it(n),yr.fr,No);default:return p(La,!1,yr.fq,Zo)}}()]))},tm=function(e){return o(I,g([E("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([nm(e),am(e),Qs(e),Ys(e)]))},om=function(e){var r=e.a;return Lr(r,sa)},im=$(function(e,r){var n=om(r.G)?o(I,P,P):o(I,g([E("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.bi.fV+.5*e.bk.fT)+"px"),o(ee,"top",ne(-e.bi.fZ+.5*e.bk.e_)+"px")]),g([o(I,g([E(e.bi.cb?"text-black80":"text-black40")]),g([yr.bi]))]));return o(I,P,g([n]))}),cm=$(function(e,r){var n=o(Gt,g([E(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ht(Kf),us("Distraction Free Mode")]),g([yr.f1])),a=40,t=260,i=o(I,g([E("absolute w-8 bottom-12")]),g([o(Ao,g([E("text-twitterBlue40 hover:text-twitterBlue"),Fo("https://twitter.com/AzizErkalSelman"),Ro("_blank")]),g([yr.fN]))])),c=80,l=o(I,g([E("absolute w-8 bottom-2")]),g([o(Ao,g([E("text-githubCat40 hover:text-githubCat"),Fo("https://github.com/erkal/elm-3d-playground-exploration"),Ro("_blank")]),g([yr.eU]))])),u=e.bk.fT>640?q(e.bk.e_,a+t,e.bk.fT-(a+t)):q(e.bk.e_-c,a,e.bk.fT-a),v=u.a,s=u.b,m=u.c;return r.aM?o(I,g([E("fixed w-10 h-10 p-1")]),g([n])):o(I,P,g([o(I,g([E("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),g([n,i,l])),o(I,g([E("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),g([o(Kn,es,qs(Jr(r.G).eD))])),o(I,g([E("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),g([o(Kn,rs,tm(r.G))])),o(im,e,r)]))}),lm=w(function(e,r,n){var a=Yf(n.G),t=Jr(n.G);return o(I,g([E("bg-black40"),E("select-none"),E("antialiased"),E("font-mono"),o(ee,"width",ne(t.bk.fT)+"px"),o(ee,"height",ne(t.bk.e_)+"px")]),g([o(I,g([E("fixed")]),g([o(Kn,Ui(Jf),o(e,t,a))])),o(I,g([Qn("gui")]),g([o(cm,t,n),o(Kn,Uf,o(r,t,a))]))]))}),um=Re(function(e,r,n,a,t,i){var c=$(function(u,v){return y(x(Hf,r,i,u,v),Bo)}),l=function(u){var v=o(Ji,n,u.e5);return y({aM:u.e5.bk.fT<500,G:o(Wf,v,a)},Bo)};return uf({e4:l,fG:Ui(Of(q$)),fO:c,fQ:o(lm,e,t)})}),vm=B(function(e,r,n,a){return se(um,e,r,n,a,$(function(t,i){return o(I,P,P)}),w(function(t,i,c){return c}))}),zc=Qe,$m=zc,kc=$(function(e,r){var n=r;return p(an,e,0,n)}),fm=function(e){return p(dn,kc,$m,e)},sm=fm(g([y(-3,-3),y(-3,1),y(-3,2),y(-3,3),y(-2,-2),y(-2,0),y(-2,3),y(-2,4),y(-1,-5),y(-1,-4),y(-1,-3),y(-1,-2),y(-1,0),y(-1,3),y(-1,4),y(0,-4),y(0,-3),y(0,-2),y(0,-1),y(0,0),y(0,1),y(0,2),y(0,3),y(0,4),y(1,-5),y(1,-4),y(1,-3),y(1,-2),y(1,0),y(1,3),y(1,4),y(2,-2),y(2,0),y(2,3),y(2,4),y(3,-3),y(3,1),y(3,2),y(3,3)])),mm=function(e){return{ax:sm}},dm=Xl,$r=au,pm=$(function(e,r){var n=e,a=r,t=a.c2-n.c2,i=a.fZ-n.fZ,c=a.fV-n.fV,l=o(He,G(c),o(He,G(i),G(t)));if(l){var u=t/l,v=i/l,s=c/l,m=$r(s*s+v*v+u*u);return K({fV:s/m,fZ:v/m,c2:u/m})}else return H}),Rn=function(e){return e},Ot=$(function(e,r){var n=e,a=r;return{fV:a.fZ*n.c2-a.c2*n.fZ,fZ:a.c2*n.fV-a.fV*n.c2,c2:a.fV*n.fZ-a.fZ*n.fV}}),on=function(e){var r=e,n=o(He,G(r.fV),o(He,G(r.fZ),G(r.c2)));if(n){var a=r.c2/n,t=r.fZ/n,i=r.fV/n,c=$r(i*i+t*t+a*a);return K({fV:i/c,fZ:t/c,c2:a/c})}else return H},ct=$(function(e,r){var n=e,a=r;return{fV:a.fV-n.fV,fZ:a.fZ-n.fZ,c2:a.c2-n.c2}}),bm=$(function(e,r){var n=e,a=r;return a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2}),Mc=$(function(e,r){var n=e,a=r;return N(a,n)>0}),gm=$(function(e,r){var n=e,a=r;return N(a,n)<0}),hm=$(function(e,r){var n=e,a=r;return{fV:a.fV-n.fV,fZ:a.fZ-n.fZ,c2:a.c2-n.c2}}),_m=$(function(e,r){var n=e,a=r,t=a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2;return{fV:n.fV*t,fZ:n.fZ*t,c2:n.c2*t}}),Cm=function(e){var r=e;return{fV:-r.fV,fZ:-r.fZ,c2:-r.c2}},Hr=0,Dc={fV:0,fZ:0,c2:0},ym=w(function(e,r,n){return o(at,function(a){var t=o(hm,o(_m,a,r),r);return o(at,function(i){var c=o(Ot,r,e),l=o(bm,n,c),u=o(Mc,Hr,l)?c:o(gm,Hr,l)?Cm(c):Dc;return o(Ce,function(v){return q(a,i,v)},on(u))},on(t))},on(e))}),wm=function(e){var r=e,n=G(r.c2),a=G(r.fZ),t=G(r.fV);if(N(t,a)<1)if(N(t,n)<1){var i=$r(r.c2*r.c2+r.fZ*r.fZ);return{fV:0,fZ:-r.c2/i,c2:r.fZ/i}}else{var i=$r(r.fZ*r.fZ+r.fV*r.fV);return{fV:-r.fZ/i,fZ:r.fV/i,c2:0}}else if(N(a,n)<1){var i=$r(r.c2*r.c2+r.fV*r.fV);return{fV:r.c2/i,fZ:0,c2:-r.fV/i}}else{var i=$r(r.fV*r.fV+r.fZ*r.fZ);return{fV:-r.fZ/i,fZ:r.fV/i,c2:0}}},Vc=function(e){var r=wm(e),n=r,a=n,t=e,i=t,c={fV:i.fZ*a.c2-i.c2*a.fZ,fZ:i.c2*a.fV-i.fV*a.c2,c2:i.fV*a.fZ-i.fZ*a.fV};return y(r,c)},Lm=function(e){var r=e;return r},Wr=function(e){return e},Sm=$(function(e,r){var n=Vc(e),a=n.a,t=n.b;return Wr({cy:r,c0:a,c1:t,c3:e})}),xm=function(e){var r=o(ct,e.aS,e.df),n=Lm(e.ej),a=o(Ot,r,n),t=p(ym,r,n,a);if(t.$){var v=on(r);if(v.$){var m=Vc(e.ej),d=m.a,f=m.b;return Wr({cy:e.df,c0:f,c1:e.ej,c3:d})}else{var s=v.a;return o(Sm,s,e.df)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Wr({cy:e.df,c0:u,c1:l,c3:c})}},qr={fV:0,fZ:0,c2:0},Pm=function(e){return{$:0,a:e}},ye=function(e){var r=e;return G(r)},En=function(e){var r=e;return .5*r},Tm=Yl,zm=function(e){var r=e;return Tm(r)},km=function(e){var r=En(ye(e.ek)),n=zm(r);return{cJ:Pm(n),c_:e.c_}},tr=function(e){return e},Ut=tr({fV:0,fZ:1,c2:0}),lr=function(e){return e},Mm=function(e){var r=e.aS,n=e.df,a=e.ej;return km({ek:lr(2*dm(.5)),c_:xm({df:Rn(n),aS:Rn(r),ej:o(ir,Ut,o(pm,qr,Rn(a)))})})},fn=Jl,Dm=$(function(e,r){return(r-Ii(r/e)*e)/e}),xr=Ul,Vm=function(e){return 2*xr*e},lt=B(function(e,r,n,a){return e+(r-e)*(1+fn(Vm(o(Dm,n,a))))/2}),Jt=function(e){return Mm({df:{fV:1+x(lt,-5,5,7,e.bD),fZ:1,c2:20},aS:{fV:0,fZ:0,c2:0},ej:{fV:0,fZ:1,c2:0}})},wr=function(e){return e},Bm=w(function(e,r,n){return{fV:e,fZ:r,c2:n}}),Am=function(e){return lr(xr*(e/180))},Tn=function(e){return e},Zn=function(e){var r=e;return r},Fm=$(function(e,r){var n=e,a=r;return a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2}),Bc=function(e){var r=e;return r.eK},Je=$(function(e,r){var n=r;return e*n}),Ac=function(e){var r=e;return r.cy},Rm=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.fk,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ+(a.c2-i.c2)*l.c2}),Em=w(function(e,r,n){var a=e,t=r,i=n;return{fV:i.fV+t*a.fV,fZ:i.fZ+t*a.fZ,c2:i.c2+t*a.c2}}),Zm=$(function(e,r){var n=Bc(r),a=e,t=a.fk,i=o(Fm,t,n);if(i){var c=Ac(r),l=o(Rm,e,c),u=o(Je,-1/i,l);return K(p(Em,n,u,c))}else return H}),Nm=$(function(e,r){return{fV:e,fZ:r}}),Go=$(function(e,r){var n=e,a=r;return n*a}),jm=function(e){var r=e;return r},Ho=function(e){var r=e;return jm(r.et)},Gm=function(e){var r=e;return r.aL},Hm=$(function(e,r){var n=r;return n/e}),pa=function(e){var r=e;return r.cy},ut=function(e){var r=e;return pa(r)},vt=function(e){var r=e;return-r},Fc=tr({fV:0,fZ:0,c2:-1}),Wm=$(function(e,r){var n=e,a=r;return a/n}),Im=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fV:v.fV*a.fV+l.fV*a.fZ+i.fV*a.c2,fZ:v.fZ*a.fV+l.fZ*a.fZ+i.fZ*a.c2,c2:v.c2*a.fV+l.c2*a.fZ+i.c2*a.c2}}),sn=$(function(e,r){return{eK:r,cy:e}}),aa=function(e){var r=e;return{fV:-r.fV,fZ:-r.fZ,c2:-r.c2}},hn=function(e){var r=e;return r.c3},$t=function(e){var r=e;return aa(hn(r))},Om=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c0,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ}),qt=w(function(e,r,n){var a=e,t=r,i=n;return{fV:a,fZ:t,c2:i}}),Um=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cy,v=u,s=t.c3,m=s,d=t.c1,f=d,h=t.c0,b=h;return{fV:v.fV+i*b.fV+c*f.fV+l*m.fV,fZ:v.fZ+i*b.fZ+c*f.fZ+l*m.fZ,c2:v.c2+i*b.c2+c*f.c2+l*m.c2}}),Jm=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c1,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ}),qm=w(function(e,r,n){var a=e,t=o(Jm,Ho(r),n),i=o(Om,Ho(r),n),c=a.c_,l=c,u=Gm(r);u.a;var v=u.b,s=a.cJ;if(s.$){var h=s.a,b=o(Wm,v,h),C=x(Um,l,o(Go,b,i),o(Go,b,t),Hr);return o(sn,C,$t(a.c_))}else{var m=s.a,d=vt(o(Hm,m,o(Je,.5,v))),f=o(Im,l,o(ir,Fc,on(p(qt,i,t,d))));return o(sn,ut(a.c_),f)}}),ta=ql,Ym=function(e){var r=e;return{fV:fn(r),fZ:ta(r)}},Xm=function(e){var r=e;return{fV:-r.fZ,fZ:r.fV}},Qm=function(e){return e},Km=$(function(e,r){return Qm({cy:r,c0:e,c1:Xm(e)})}),ed=$(function(e,r){return o(Km,Ym(e),r)}),rd=w(function(e,r,n){var a=e.a,t=e.b;return{et:o(ed,r,n),aL:y(ye(a),ye(t))}}),Er=function(e){var r=e;return r.fV},nd=$(function(e,r){var n=e,a=r;return{fV:n,fZ:a}}),Zr=function(e){var r=e;return r.fZ},Nr=function(e){var r=e;return r.c2},ad=B(function(e,r,n,a){var t=n.fV,i=n.fZ,c=function(v){return p(Bm,Zn(Er(v)),Zn(Zr(v)),Zn(Nr(v)))},l=p(rd,y(Tn(r.fT),Tn(r.e_)),Am(0),o(Nm,0,0)),u=o(nd,Tn(t),Tn(i));return o(Ce,c,o(Zm,a,p(qm,e,l,u)))}),td=$(function(e,r){var n=e,a=r;return{fV:a.fV+n.fV,fZ:a.fZ+n.fZ,c2:a.c2+n.c2}}),od=$(function(e,r){return{fk:e,cy:r}}),id=$(function(e,r){var n=r;return o(od,n.fk,o(td,e,n.cy))}),cd=$(function(e,r){return{fk:r,cy:e}}),Rc=tr({fV:0,fZ:0,c2:1}),Yt=Rc,ld=o(cd,qr,Yt),ud=B(function(e,r,n,a){return x(ad,r,n,a,o(id,p(qt,wr(0),wr(0),wr(e)),ld))}),Ec=ud(0),vd=$(function(e,r){var n=p(Ec,Jt(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return Ae(r,{ax:o(kc,y(pe(a.fV),pe(a.fZ)),r.ax)})}),$d=$(function(e,r){var n=r;return o(fc,e,n)}),fd=$(function(e,r){var n=p(Ec,Jt(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return Ae(r,{ax:o($d,y(pe(a.fV),pe(a.fZ)),r.ax)})}),sd=$(function(e,r){return e.dp.ea&&e.bi.cb?o(fd,e,r):e.bi.cb?o(vd,e,r):r}),Xt=function(e){return e},Zc=w(function(e,r,n){return N(n,e)<0?e:N(n,r)>0?r:n}),md=function(e){var r=e;return r},dd=function(e){var r=p(Zc,1667,25e3,md(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Xt({fV:n,fZ:a})},pd=function(e){var r=e;return r},bd=function(e){var r=e;return pd(r.et)},Nc=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),gd=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),hd=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),_d=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Cd=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),yd=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),wd=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ld=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return x(wd,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return x(Nc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return x(gd,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return x(hd,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return x(yd,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return x(_d,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return x(Cd,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Sd={$:0},oa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(He,n,a)}),xd=$(function(e,r){return N(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(xd,n,a)}),Pd=ie(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=oa(c(u)),m=o(fe,s.dQ,e),d=o(ce,s.dN,r),f=o(fe,s.dR,n),h=o(ce,s.dO,a),b=o(fe,s.dS,t),C=o(ce,s.dP,i),L=c,_=v;e=m,r=d,n=f,a=h,t=b,i=C,c=L,l=_;continue e}else return{dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t}}),Td=w(function(e,r,n){var a=oa(e(r));return ca(Pd,a.dQ,a.dN,a.dR,a.dO,a.dS,a.dP,e,n)}),Sa=$(function(e,r){var n=e,a=r;return N(a,n)<1}),zd=function(e){return o(Sa,e.dN,e.dQ)&&o(Sa,e.dO,e.dR)&&o(Sa,e.dP,e.dS)?e:{dN:o(ce,e.dQ,e.dN),dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(fe,e.dQ,e.dN),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP)}},ia=function(e){var r=e;return r},kd=function(e){var r=ia(e),n=r.a,a=r.b,t=r.c,i=Er(n),c=Zr(n),l=Nr(n),u=Er(a),v=Zr(a),s=Nr(a),m=Er(t),d=Zr(t),f=Nr(t);return zd({dN:o(ce,i,o(ce,u,m)),dO:o(ce,c,o(ce,v,d)),dP:o(ce,l,o(ce,s,f)),dQ:o(fe,i,o(fe,u,m)),dR:o(fe,c,o(fe,v,d)),dS:o(fe,l,o(fe,s,f))})},jc=Av,Yr=function(e){var r=e;return r},sr=function(e){return jc(Yr(e))},Gc=function(e){var r=e;return r},Hc=function(e){return jc(Gc(e))},Wc=function(e){return e},Md=$(function(e,r){var n=e,a=r,t=o(He,G(a.fV),o(He,G(a.fZ),G(a.c2)));if(t){var i=a.c2/t,c=a.fZ/t,l=a.fV/t,u=$r(l*l+c*c+i*i);return{fV:n*l/u,fZ:n*c/u,c2:n*i/u}}else return Dc}),Dd=Md(Wc(1)),Ic=w(function(e,r,n){var a=o(ct,r,n),t=o(ct,e,r);return Dd(o(Ot,a,t))}),Vd=function(e){var r=ia(e),n=r.a,a=r.b,t=r.c,i=Hc(p(Ic,n,a,t));return q({o:i,d0:sr(n)},{o:i,d0:sr(a)},{o:i,d0:sr(t)})},Bd=$(function(e,r){return{$:2,a:e,b:r}}),Ad=Bd({db:3,dk:0,dU:4}),Fd=function(e){if(e.b){var r=e.a,n=e.b,a=Ad(o(le,Vd,e)),t=p(Td,kd,r,n);return x(Nc,t,e,a,0)}else return Sd},De=w(function(e,r,n){return q(e,r,n)}),Ie=w(function(e,r,n){var a=e,t=r,i=n;return{fV:a,fZ:t,c2:i}}),Oc=function(){var e=wr(1),r=wr(1),n=wr(1),a=o(Je,-.5,e),t=o(Je,-.5,r),i=o(Je,-.5,n),c=p(Ie,i,t,a),l=o(Je,.5,e),u=p(Ie,i,t,l),v=o(Je,.5,r),s=p(Ie,i,v,a),m=p(Ie,i,v,l),d=o(Je,.5,n),f=p(Ie,d,t,a),h=p(Ie,d,v,a),b=p(Ie,d,t,l),C=p(Ie,d,v,l);return Ld(Fd(g([p(De,c,h,f),p(De,c,s,h),p(De,u,b,C),p(De,u,C,m),p(De,f,h,C),p(De,f,C,b),p(De,c,m,s),p(De,c,u,m),p(De,c,f,b),p(De,c,b,u),p(De,s,C,h),p(De,s,m,C)])))}(),zn={$:0},Rd=w(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ed=w(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Hc(p(Ic,u,l,c)),s={o:v,d0:sr(u)},m={o:v,d0:sr(l)},d={o:v,d0:sr(c)};return o(V,s,o(V,m,o(V,d,n)))}),Zd=function(e){var r=e;return r.D},Nd=B(function(e,r,n,a){if(r.$===1)return H;var t=r.a;if(n.$===1)return H;var i=n.a;if(a.$===1)return H;var c=a.a;return K(p(e,t,i,c))}),ft=4294967295>>>32-un,st=Zl,jd=w(function(e,r,n){e:for(;;){var a=ft&r>>>e,t=o(st,a,n);if(t.$){var v=t.a;return o(st,ft&r,v)}else{var i=t.a,c=e-un,l=r,u=i;e=c,r=l,n=u;continue e}}}),Gd=function(e){return e>>>5<<5},Hd=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||N(e,n)>-1?H:N(e,Gd(n))>-1?K(o(st,ft&e,i)):K(p(jd,a,e,t))}),Wd=function(e){var r=e;return r.ah},xa=$(function(e,r){return o(Hd,e,Wd(r))}),Id=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return x(Nd,w(function(c,l,u){return q(c,l,u)}),o(xa,a,e),o(xa,t,e),o(xa,i,e))};return o(_c,r,Zd(e))},Od=w(function(e,r,n){e:for(;;){var a=o(Ft,ze,e),t=a.a,i=a.b;if(N(qa(t),ze)<0)return o(Oi,!0,{z:r,l:n,p:t});var c=i,l=o(V,Wi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Uc=function(e){return e.b?p(Od,e,P,0):Gi},Ud=w(function(e,r,n){return e(r(n))}),Jd=$(function(e,r){return!o(nc,o(Ud,vf,e),r)}),qd=$(function(e,r){return p(vr,$(function(n,a){return e(n)?o(V,n,a):a}),P,r)}),Yd=function(e){var r=e.a;return r},Xd=$(function(e,r){var n=Yd(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&N(i,n)<0&&c>=0&&N(c,n)<0&&l>=0&&N(l,n)<0};return o(Jd,a,r)?{D:r,ah:e}:{D:o(qd,a,r),ah:e}}),Qd=w(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Kd=Qd({db:1,dk:3,dU:4}),mt=function(e){var r=e;return r},Nn=$(function(e,r){var n=mt(r),a=mt(e);return y(q(a.fV,a.fZ,a.c2),q(n.fV,n.fZ,n.c2))}),Qt=Mv,Wo=p(Qt,0,0,0),Pa=Re(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(vc,o(Nn,e,r),t);if(v.$){var m={o:Wo,d0:sr(r)},d={o:Wo,d0:sr(e)},f=u+1,h=u;return q(o(V,q(n,h,f),o(V,q(n,f,a),c)),o(V,m,o(V,d,l)),u+2)}else{var s=v.a;return q(o(V,q(n,s,a),c),l,u)}}),e0=we(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,C=e,L=r,_=v,T=a+3,A=se(Pa,s,d,f,b,r,se(Pa,m,s,h,f,r,se(Pa,d,m,b,h,r,t)));e=C,r=L,n=_,a=T,t=A;continue e}else{var U=t,W=U.a,j=U.b;return y(W,Te(j))}}),r0=we(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,C=p(an,o(Nn,d,s),f,p(an,o(Nn,s,m),h,p(an,o(Nn,m,d),b,t))),L=o(V,q(b,h,f),a),_=e,T=v,A=n+3,U=L,W=C;e=_,r=T,n=A,a=U,t=W;continue e}else return q(a,t,n)}),hr=w(function(e,r,n){var a=Id(n),t=p(vr,Ed(r),P,a),i=S(r0,r,a,0,P,zc),c=i.a,l=i.b,u=i.c,v=S(e0,r,l,a,0,q(c,P,u)),s=v.a,m=v.b,d=it(m)?t:ae(t,m);return p(Rd,e,o(Xd,Uc(d),s),o(Kd,d,s))}),n0=$(function(e,r){return r.b?p(vr,V,r,e):e}),mr=function(e){return p(vr,n0,P,e)},Io=function(e){return{D:o(le,function(r){return q(3*r,3*r+1,3*r+2)},o(Bt,0,Sr(e)-1)),ah:Uc(mr(o(le,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},a0=function(e){switch(e.$){case 0:return zn;case 1:var a=e.a,r=e.b,n=o(le,ia,r);return p(hr,a,Rr,Io(n));case 2:var a=e.a,r=e.b,n=o(le,ia,r);return p(hr,a,Rr,Io(n));case 3:var a=e.a,t=e.b;return p(hr,a,Rr,t);case 4:var a=e.a,t=e.b;return p(hr,a,function(i){return i.d0},t);case 5:var a=e.a,t=e.b;return p(hr,a,function(i){return i.d0},t);case 6:var a=e.a,t=e.b;return p(hr,a,function(i){return i.d0},t);case 7:var a=e.a,t=e.b;return p(hr,a,function(i){return i.d0},t);case 8:return zn;case 9:return zn;default:return zn}},Oo=a0(Oc),t0=function(e){var r=e;return r.aL},Jc={$:0},M=Jc,qc=function(e){return{$:4,a:e}},o0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(V,n,r);e=t,r=i;continue e}else return r}),Kt=function(e){return qc(o(o0,e,P))},We=$(function(e,r){return{$:1,a:e,b:r}}),i0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bF"}},c0=$(function(e,r){switch(r.$){case 0:return o(h$,e,r);case 1:return o(_$,e,r);case 2:return o(C$,e,r);case 3:return o(y$,e,r);case 4:return o(w$,e,r);default:return o(L$,e,r)}}),l0=$(function(e,r){switch(r.$){case 0:return o(qv,e,r);case 1:return o(Yv,e,r);case 2:return o(Xv,e,r);case 3:return o(Qv,e,r);case 4:return o(Kv,e,r);case 5:return o(e$,e,r);case 6:return o(r$,e,r);case 7:return o(n$,e,r);default:return a$(e)}}),Le=Jv,u0=1029,v0=function(e){return{$:5,a:e}},Yc=function(e){var r=e;return v0(r)},$0=Yc(u0),f0=1028,s0=Yc(f0),Ke=w(function(e,r,n){return r===1?e?o(V,$0,n):o(V,s0,n):n}),Xc={src:`
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
    `,attributes:{position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ta=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){return S(Le,p(Ke,l,a,m),Xc,i0,n,{bF:e,b:c,c:i,d:v,e:t,f:u})}))}),m0={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Qc={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},er=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){return S(Le,p(Ke,l,a,m),Qc,m0,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Kc=$(function(e,r){return{$:3,a:e,b:r}}),d0={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bV",sceneProperties:"e"}},el={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bV",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},p0=B(function(e,r,n,a){return o(Kc,n,ie(function(t,i,c,l,u,v,s,m){return S(Le,m,el,d0,a,{aw:e,b:c,c:i,bV:r,d:v,e:t,f:u})}))}),b0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},eo=function(e){var r=e;return r},rl=Fv,rr=we(function(e,r,n,a,t){return o(We,n,ie(function(i,c,l,u,v,s,m,d){return S(Le,p(Ke,u,t,d),Qc,b0,a,{aO:o(rl,eo(r),e),b:l,c,d:s,e:i,f:v})}))}),g0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bV",sceneProperties:"e"}},h0=we(function(e,r,n,a,t){return o(Kc,a,ie(function(i,c,l,u,v,s,m,d){return S(Le,d,el,g0,t,{aO:o(rl,eo(r),e),b:l,c,bV:n,d:s,e:i,f:v})}))}),_0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColor:"cn",sceneProperties:"e",viewMatrix:"f"}},nl={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kn=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Ke,l,a,m),nl,_0,n,{P:f,be:d.be,bN:d.bN,bO:d.bO,bP:d.bP,cn:e,b:c,c:i,d:v,e:t,f:u})}))}),al={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColorTexture:"co",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},tl={src:`
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
    `,attributes:{normal:"o",position:"d0",tangent:"ef",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},C0=Re(function(e,r,n,a,t,i){return o(We,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return S(Le,p(Ke,v,i,f),tl,al,t,{P:b,be:h.be,bN:h.bN,bO:h.bO,bP:h.bP,co:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f:s})}))}),ol={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b5",constantMetallic:"b6",constantRoughness:"b7",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallicTexture:"cs",normalMapTexture:"aX",roughnessTexture:"cP",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},y0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(We,u,ie(function(m,d,f,h,b,C,L,_){var T=L.a,A=L.b;return S(Le,p(Ke,h,s,_),tl,ol,v,{b3:e,b5:r,b6:i,b7:a,P:A,be:T.be,bN:T.bN,bO:T.bO,bP:T.bP,cs:t,b:f,c:d,aX:c,d:C,cP:n,e:m,a0:l,f:b})}))}}}}}}}}}}},w0={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallic:"cr",roughness:"cO",sceneProperties:"e",viewMatrix:"f"}},Mn=Re(function(e,r,n,a,t,i){return o(We,a,ie(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return S(Le,p(Ke,v,i,f),nl,w0,t,{b2:e,P:b,be:h.be,bN:h.bN,bO:h.bO,bP:h.bP,cr:n,b:u,c:l,d:m,cO:r,e:c,f:s})}))}),L0=function(e){return{$:0,a:e}},Uo=$(function(e,r){return{$:1,a:e,b:r}}),cn=$(function(e,r){if(r.$){var n=r.a.C;return y(n,1)}else return r.a,y(e,0)}),_n=Dv,Cn=Vv,yn=Bv,Xr=Rv,S0=function(e){return x(Xr,_n(e),Cn(e),yn(e),1)},ro=x(Xr,0,0,0,0),jn=$(function(e,r){if(r.$){var a=r.a.C;return y(a,ro)}else{var n=r.a;return y(e,S0(n))}}),x0=$(function(e,r){var n=y(e,r);if(n.a.$){var t=n.a.a.C;return o(Uo,y(t,ro),o(cn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Uo,o(jn,t,e),o(cn,t,r))}else{var a=n.a.a;return n.b.a,L0(a)}}),P0=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Dn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),T0=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Fr=zv,z0=function(e){return o(Fr,e,1)},dt=o(Fr,0,0),Mr=$(function(e,r){if(r.$){var a=r.a.C;return y(a,dt)}else{var n=r.a;return y(e,z0(n))}}),k0=B(function(e,r,n,a){var t=x(T0,e,r,n,a);if(t.a.$){var u=t.a.a.C;return x(Dn,y(u,ro),o(Mr,u,r),o(Mr,u,n),o(cn,u,a))}else if(t.b.$){var u=t.b.a.C;return x(Dn,o(jn,u,e),y(u,dt),o(Mr,u,n),o(cn,u,a))}else if(t.c.$){var u=t.c.a.C;return x(Dn,o(jn,u,e),o(Mr,u,r),y(u,dt),o(cn,u,a))}else if(t.d.$){var u=t.d.a.C;return x(Dn,o(jn,u,e),o(Mr,u,r),o(Mr,u,n),y(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(P0,i,c,l)}}),M0={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bF",sceneProperties:"e"}},za=we(function(e,r,n,a,t){return o(We,n,ie(function(i,c,l,u,v,s,m,d){return S(Le,p(Ke,u,t,d),Xc,M0,a,{b0:eo(r),bF:e,b:l,c,d:s,e:i,f:v})}))}),il={src:`
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
    `,attributes:{normal:"o",position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},D0=B(function(e,r,n,a){return o(We,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Le,p(Ke,l,a,m),il,al,n,{P:f,be:d.be,bN:d.bN,bO:d.bO,bP:d.bP,co:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),V0=_t(function(e,r,n,a,t,i,c,l,u){return o(We,c,ie(function(v,s,m,d,f,h,b,C){var L=b.a,_=b.b;return S(Le,p(Ke,d,u,C),il,ol,l,{b3:e,b5:r,b6:i,b7:a,P:_,be:L.be,bN:L.bN,bO:L.bO,bP:L.bP,cs:t,b:m,c:s,aX:e,d:h,cP:n,e:v,a0:0,f})}))}),no=w(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),B0=function(e){var r=e;return p(no,r.dQ,r.dN,.5)},A0=function(e){var r=e;return p(no,r.dR,r.dO,.5)},F0=function(e){var r=e;return p(no,r.dS,r.dP,.5)},R0=function(e){return p(Ie,B0(e),A0(e),F0(e))},E0=function(e){var r=e;return r.dN},Z0=function(e){var r=e;return r.dO},cl=function(e){var r=e;return r.dP},N0=function(e){var r=e;return r.dQ},j0=function(e){var r=e;return r.dR},ll=function(e){var r=e;return r.dS},or=$(function(e,r){var n=e,a=r;return a-n}),ul=function(e){return q(o(or,N0(e),E0(e)),o(or,j0(e),Z0(e)),o(or,ll(e),cl(e)))},R=function(e){var r=ul(e),n=r.a,a=r.b,t=r.c;return{eA:Yr(R0(e)),eW:n/2,eX:a/2,eY:t/2}},G0=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return x(Ta,l,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Ta,l,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Ta,l,R(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(er,n,R(t),c,a);case 8:var t=r.a,c=r.c;return x(er,n,R(t),c,0);case 9:var t=r.a,c=r.c;return x(er,n,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(p0,n,i,R(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return S(za,l,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(za,l,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(za,l,v,R(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,R(t),c,a);case 8:var t=r.a,c=r.c;return S(rr,u,v,R(t),c,0);case 9:var t=r.a,c=r.c;return S(rr,u,v,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(h0,u,v,i,R(t),c)}}case 2:e.a;var s=e.b,W=e.c,m=o(x0,s,W);if(m.$){var h=m.a,b=h.a;h.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return x(D0,b,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(C0,b,L,_,R(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var d=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return x(kn,d,R(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return x(kn,d,R(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return x(kn,d,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return x(kn,d,R(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var T=e.b,A=e.c,U=e.d,W=e.e,j=x(k0,T,A,U,W);if(j.$){var X=j.a,Q=X.a,be=X.b,ge=j.b,ue=ge.a,ve=ge.b,Ze=j.c,Ne=Ze.a,zr=Ze.b,kr=j.d,L=kr.a,_=kr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Bl(V0,Q,be,ue,ve,Ne,zr,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return y0(Q)(be)(ue)(ve)(Ne)(zr)(L)(_)(R(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var J=j.a,O=j.b,Z=j.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return se(Mn,J,O,Z,R(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return se(Mn,J,O,Z,R(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return se(Mn,J,O,Z,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(Mn,J,O,Z,R(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),ka=function(e){var r=e;return r.fV},Ma=function(e){var r=e;return r.fZ},Da=function(e){var r=e;return r.c2},H0=function(e){var r=e,n=Da(r.c3),a=Ma(r.c3),t=ka(r.c3),i=Da(r.c1),c=Ma(r.c1),l=ka(r.c1),u=Da(r.c0),v=Ma(r.c0),s=ka(r.c0);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ke=function(e){var r=e;return r},wn=function(e){var r=e;return r.c0},Ln=function(e){var r=e;return r.c1},W0=function(e){var r=Yr(pa(e)),n=ke(hn(e)),a=ke(Ln(e)),t=ke(wn(e));return{dn:H0(e),q:t.fV,r:t.fZ,s:t.c2,t:a.fV,u:a.fZ,v:a.c2,w:n.fV,x:n.fZ,y:n.c2,H:r.fV,I:r.fZ,J:r.c2,bZ:1}},Vr=$(function(e,r){return{$:5,a:e,b:r}}),vl=$(function(e,r){return{dn:Lr(e.dn,r.dn),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bZ,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bZ,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bZ,bZ:e.bZ*r.bZ}}),ao=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(vl,a,e);return o(Vr,i,t);case 1:return o(Vr,e,n);case 3:return o(Vr,e,n);case 2:return o(Vr,e,n);default:return o(Vr,e,n)}}),I0=$(function(e,r){return o(ao,W0(e),r)}),$l=function(e){return{$:2,a:e}},O0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eA;return{eA:{fV:n*i.fV,fZ:a*i.fZ,c2:t*i.c2},eW:n*r.eW,eX:a*r.eX,eY:t*r.eY}}),U0=Zv,J0=Ev,Jo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=J0(a),h=f.fV,b=f.fZ,C=f.c2,L=f.en,_=U0({en:L,fV:h*s,fZ:b*m,c2:C*d});return ca(r,n,_,t,i,c,l,u,v)}}}}}}}}}},pt=$(function(e,r){switch(r.$){case 0:return Jc;case 5:var n=r.a,a=r.b;return o(Vr,n,o(pt,e,a));case 1:var t=r.a,i=r.b;return o(We,o(O0,e,t),o(Jo,e,i));case 3:return r;case 2:var i=r.a;return $l(o(Jo,e,i));default:var c=r.a;return qc(o(le,pt(e),c))}}),q0=$(function(e,r){var n=r;return o(pt,e,n)}),Y0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ir=519,fl=7683,sl=7682,de=7680,X0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},to=w(function(e,r,n){var a=e.cL,t=e.cm,i=e.c$,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bo),o(re,l(v.a9),o(re,l(v.bw),l(v.bx))))};return o(u,n,o(u,r,p(X0,a,t,i)))}),Q0=p(to,{cm:0,cL:0,c$:15},{a9:de,bo:Ir,bw:de,bx:fl},{a9:de,bo:Ir,bw:de,bx:sl}),K0=p(to,{cm:0,cL:0,c$:15},{a9:de,bo:Ir,bw:de,bx:sl},{a9:de,bo:Ir,bw:de,bx:fl}),ep=$(function(e,r){return e?o(V,K0,r):o(V,Q0,r)}),rp={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},np=function(e){if(e.$){var r=e.c;return K(ie(function(n,a,t,i,c,l,u,v){return S(Le,o(ep,i,v),rp,Y0,r,{b:t,c:a,d:l,e:n,b_:u,f:c})}))}else return H},qo=function(e){var r=np(e);if(r.$)return M;var n=r.a;return $l(n)},ap=B(function(e,r,n,a){var t=o(G0,n,Oc),i=function(){var s=y(e,r);return s.a?s.b?Kt(g([t,qo(Oo)])):t:s.b?qo(Oo):M}(),c=t0(a),l=c.a,u=c.b,v=c.c;return o(I0,bd(a),o(q0,q(l,u,v),i))}),tp=$(function(e,r){return x(ap,!0,!0,e,r)}),Va=$(function(e,r){var n=e,a=r;return N(a,n)>-1}),Ba=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),op=tr({fV:-1,fZ:0,c2:0}),ip=tr({fV:0,fZ:-1,c2:0}),ml=tr({fV:1,fZ:0,c2:0}),cp=Re(function(e,r,n,a,t,i){var c=o(Va,n,i)?Rc:Fc,l=o(Va,r,t)?Ut:ip,u=o(Va,e,a)?ml:op,v=q(ye(o(or,e,a)),ye(o(or,r,t)),ye(o(or,n,i))),s=p(Ie,o(Ba,e,a),o(Ba,r,t),o(Ba,n,i)),m=Wr({cy:s,c0:u,c1:l,c3:c});return{et:m,aL:v}}),lp=$(function(e,r){return se(cp,Er(e),Zr(e),Nr(e),Er(r),Zr(r),Nr(r))}),bt=w(function(e,r,n){return{fV:e,fZ:r,c2:n}}),up=$(function(e,r){var n=r/2;return o(tp,e,o(lp,p(bt,-n,-n,-n),p(bt,n,n,n)))}),vp=function(e){return Kt(e)},$p=vp,Yo=function(e){return{$:0,a:e}},fp=w(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Aa=function(e){return p(Zc,0,1,e<=.04045?e/12.92:o(gn,(e+.055)/1.055,2.4))},sp=function(e){var r=hc(e),n=r.cK,a=r.ca,t=r.b4;return p(Qt,Aa(n),Aa(a),Aa(t))},mp=function(e){return p(fp,0,Yo(sp(e)),Yo(0))},dp=w(function(e,r,n){return{fV:e,fZ:r,c2:n}}),pp=function(e){var r=Gc(e);return{dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fV,I:r.fZ,J:r.c2,bZ:1}},bp=$(function(e,r){return o(ao,pp(e),r)}),gp=$(function(e,r){return o(bp,e,r)}),oo=function(e){var r=e.a,n=e.b,a=e.c;return gp(p(dp,r,n,a))},hp=function(e){return oo(q(e,0,0))},Xo=function(e){return oo(q(0,e,0))},_p=function(e){return oo(q(0,0,e))},Cp=$(function(e,r){var n=r,a=Yr(Ac(e)),t=.5*n,i=fn(t),c=ta(t),l=ke(Bc(e)),u=l.fV*c,v=i*u,s=u*u,m=l.fZ*c,d=i*m,f=u*m,h=m*m,b=1-2*(s+h),C=l.c2*c,L=i*C,_=2*(f-L),T=2*(f+L),A=u*C,U=2*(A+d),W=2*(A-d),j=m*C,J=2*(j-v),O=2*(j+v),Z=C*C,X=1-2*(h+Z),Q=1-2*(s+Z);return{dn:!0,q:X,r:T,s:W,t:_,u:Q,v:O,w:U,x:J,y:b,H:a.fV-X*a.fV-_*a.fZ-U*a.c2,I:a.fZ-T*a.fV-Q*a.fZ-J*a.c2,J:a.c2-W*a.fV-O*a.fZ-b*a.c2,bZ:1}}),yp=w(function(e,r,n){return o(ao,o(Cp,e,r),n)}),io=w(function(e,r,n){return p(yp,e,r,n)}),dl=ml,wp=o(sn,qr,dl),Lp=$(function(e,r){return p(io,wp,lr(e),r)}),pl=Ut,Sp=o(sn,qr,pl),xp=$(function(e,r){return p(io,Sp,lr(e),r)}),Pp=o(sn,qr,Yt),Tp=$(function(e,r){return p(io,Pp,lr(e),r)}),zp=x(da,237/255,212/255,0/255,1),kp=$(function(e,r){var n=function(a){var t=a.a,i=a.b,c=(t+i)*.1,l=x(lt,-xr,xr,14,e.bD+c);return o(_p,-.5,o(Xo,i,o(hp,t,o(Tp,l,o(Lp,l,o(xp,l,o(up,mp(zp),1)))))))};return o(Xo,x(lt,-.5,.5,7,e.bD),$p(o(le,n,T$(r.ax))))}),Mp=function(e){return e},Dp=function(e){return{$:0,a:e}},Vp=Dp,Bp={$:3},Ap=Bp,Fp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Rp=Fp,Ep=$(function(e,r){return mr(o(le,e,r))}),Zp=function(e){return{$:1,a:e}},Np=Zp,jp=function(e){return o(gr,"height",Pe(e))},Gp=function(e){return Ku(tv(e))},Hp=Gp,Wp=function(e){return{$:2,a:e}},Ip=Wp,Op=function(e){return o(_r,"",e)},Up=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return pe(l*1e3)/1e3},c=function(l){return pe(l*1e4)/100};return Op(g(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},Jp=w(function(e,r,n){return p(g$,e,r,n)}),Qo=function(e){var r=e;return r},Fa=x(Xr,1,1,1,1),Oe=w(function(e,r,n){return o(le,function(a){return o(a,r,n)},e)}),qp=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yp=$(function(e,r){var n=e,a=r.fV,t=r.fZ;return p(qp,n*a/t,n,n*(1-a-t)/t)}),Xp=function(e){var r=e.a,n=e.b,a=e.c;return p(Qt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ba=$(function(e,r){return Xp(o(Yp,e,r))}),nr=Hv,Qp=function(e){return nr({dw:e.q,dx:e.t,dy:e.w,dz:e.H,dA:e.r,dB:e.u,dC:e.x,dD:e.I,dE:e.s,dF:e.v,dG:e.y,dH:e.J,dI:0,dJ:0,dK:0,dL:1})},Ra=we(function(e,r,n,a,t){var i=a.dn?1:-1,c=x(Xr,a.bZ,a.bZ,a.bZ,i);return se(t,e,c,Qp(a),a.dn,r,n)}),bl=Re(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(vl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(V,S(Ra,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,L=o(V,S(Ra,e,r,n,a,C),i.U);return{M:i.M,U:L,fB:i.fB};case 2:var _=t.a,T=o(V,S(Ra,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:T};default:var A=t.a;return p(dn,x(bl,e,r,n,a),i,A)}}),Kp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),gl=Kp,co=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),e1=function(e){var r=e.Z,n=e.W,a=e.V;return x(co,518,r,n,a)},r1=$(function(e,r){return{$:6,a:e,b:r}}),n1=r1,hl=g([e1({V:1,W:0,Z:!1}),x(gl,!1,!1,!1,!1),o(n1,0,1)]),lo=8,_l=15,jr=7681,a1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},t1=$(function(e,r){return{$:0,a:e,b:r}}),o1=t1({db:1,dk:0,dU:5}),i1=o1(g([{d0:o(Fr,-1,-1)},{d0:o(Fr,1,-1)},{d0:o(Fr,-1,1)},{d0:o(Fr,1,1)}])),c1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"d0"},uniforms:{}},uo=function(e){return p(to,{cm:e.cm,cL:e.cL,c$:e.c$},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx})},vo=function(e){return S(Le,g([uo(e),x(gl,!1,!1,!1,!1)]),c1,a1,i1,{})},l1=vo({a9:jr,cm:0,cL:lo,bo:Ir,c$:_l,bw:jr,bx:jr}),u1=516,Ko=5386,v1=function(e){return o(gn,2,e+4)},Cl=function(e){return vo({a9:de,cm:_l,cL:lo,bo:u1,c$:v1(e),bw:Ko,bx:Ko})},$1=w(function(e,r,n){return mr(g([p(Oe,e,n,hl),g([Cl(r),l1])]))}),f1=$(function(e,r){return mr(o(Ei,$1(e),r))}),s1=function(e){var r=e.Z,n=e.W,a=e.V;return x(co,513,r,n,a)},m1=s1({V:1,W:0,Z:!0}),d1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},p1=function(e){var r=e.bX,n=e.bI,a=e.bB,t=e.by,i=e.bE,c=e.aI,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return d1(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},b1=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ei=$(function(e,r){var n=e,a=r;return p(b1,32774,n,a)}),g1=1,ri=771,h1=770,$o=p1({by:0,aI:o(ei,g1,ri),bB:0,bE:o(ei,h1,ri),bI:0,bX:0}),Dr=g([m1,$o]),_1=function(e){return e},C1=function(e){return Wr({cy:_1({fV:e.H,fZ:e.I,c2:e.J}),c0:tr({fV:e.q,fZ:e.r,c2:e.s}),c1:tr({fV:e.t,fZ:e.u,c2:e.v}),c3:tr({fV:e.w,fZ:e.x,c2:e.y})})},Ea=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fV:a.fV*v.fV+a.fZ*v.fZ+a.c2*v.c2,fZ:a.fV*l.fV+a.fZ*l.fZ+a.c2*l.c2,c2:a.fV*i.fV+a.fZ*i.fZ+a.c2*i.c2}}),yl=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=a.fV-i.fV,l=a.fZ-i.fZ,u=a.c2-i.c2,v=n.c3,s=v,m=n.c1,d=m,f=n.c0,h=f;return{fV:c*h.fV+l*h.fZ+u*h.c2,fZ:c*d.fV+l*d.fZ+u*d.c2,c2:c*s.fV+l*s.fZ+u*s.c2}}),wl=$(function(e,r){return{cy:o(yl,e,pa(r)),c0:o(Ea,e,wn(r)),c1:o(Ea,e,Ln(r)),c3:o(Ea,e,hn(r))}}),y1=$(function(e,r){var n=oa(r),a=oa(e);return{dN:o(ce,a.dN,n.dN),dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(fe,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS)}}),w1=function(e){var r=e;return q(r.fV,r.fZ,r.c2)},Gn=$(function(e,r){var n=e,a=r;return a+n}),L1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=En(ye(a)),c=En(ye(n)),l=En(ye(t)),u=w1(r),v=u.a,s=u.b,m=u.c;return{dN:o(Gn,c,v),dO:o(Gn,i,s),dP:o(Gn,l,m),dQ:o(or,c,v),dR:o(or,i,s),dS:o(or,l,m)}}),ni=B(function(e,r,n,a){var t=n.eA,i=2*n.eY*r,c=2*n.eX*r,l=2*n.eW*r,u=t.c2*r,v=t.fZ*r,s=t.fV*r,m=ke(hn(e)),d=G(l*m.fV)+G(c*m.fZ)+G(i*m.c2),f=ke(Ln(e)),h=G(l*f.fV)+G(c*f.fZ)+G(i*f.c2),b=ke(wn(e)),C=G(l*b.fV)+G(c*b.fZ)+G(i*b.c2),L=o(L1,q(C,h,d),o(yl,e,p(bt,s,v,u)));if(a.$)return K(L);var _=a.a;return K(o(y1,_,L))}),gt=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=x(ni,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=x(ni,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=x(gt,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(wl,C1(v),e),d=r*v.bZ,f=e,h=r,b=x(gt,m,d,n,g([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),S1={dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bZ:1},ai=vo({a9:jr,cm:0,cL:lo,bo:Ir,c$:255,bw:jr,bx:jr}),x1=function(e){var r=e,n=o(He,G(r.fV),o(He,G(r.fZ),G(r.c2)));if(n){var a=r.c2/n,t=r.fZ/n,i=r.fV/n,c=$r(i*i+t*t+a*a);return c*n}else return Hr},Se={bB:0,ez:!1,bI:0,cH:0,bX:0,cW:0,fV:0,fZ:0,c2:0},Ve=$(function(e,r){var n=e,a=r;return nr({dw:n.fV,dx:n.bX,dy:a.fV,dz:a.bX,dA:n.fZ,dB:n.bI,dC:a.fZ,dD:a.bI,dE:n.c2,dF:n.bB,dG:a.c2,dH:a.bB,dI:n.cW,dJ:n.cH,dK:a.cW,dL:a.cH})}),nn=y({be:o(Ve,Se,Se),bN:o(Ve,Se,Se),bO:o(Ve,Se,Se),bP:o(Ve,Se,Se)},x(Xr,0,0,0,0)),Ll=514,Sl=function(e){var r=e.Z,n=e.W,a=e.V;return x(co,515,r,n,a)},xl=240,P1=g([Sl({V:1,W:0,Z:!0}),uo({a9:de,cm:xl,cL:0,bo:Ll,c$:0,bw:de,bx:de}),$o]),T1=$(function(e,r){var n=e,a=r.fj,t=r.eT,i=r.es,c=ye(a),l=c,u=ye(t),v=u,s=n.cJ;if(s.$){var d=s.a;return Xa(v)?nr({dw:2/(i*d),dx:0,dy:0,dz:0,dA:0,dB:2/d,dC:0,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:0,dJ:0,dK:0,dL:1}):nr({dw:2/(i*d),dx:0,dy:0,dz:0,dA:0,dB:2/d,dC:0,dD:0,dE:0,dF:0,dG:-2/(v-l),dH:-(v+l)/(v-l),dI:0,dJ:0,dK:0,dL:1})}else{var m=s.a;return Xa(v)?nr({dw:1/(i*m),dx:0,dy:0,dz:0,dA:0,dB:1/m,dC:0,dD:0,dE:0,dF:0,dG:-1,dH:-2*l,dI:0,dJ:0,dK:-1,dL:0}):nr({dw:1/(i*m),dx:0,dy:0,dz:0,dA:0,dB:1/m,dC:0,dD:0,dE:0,dF:0,dG:-(v+l)/(v-l),dH:-2*v*l/(v-l),dI:0,dJ:0,dK:-1,dL:0})}}),Vn=$(function(e,r){return(1&e>>r)===1?0:1}),z1=function(e){return g([Sl({V:1,W:0,Z:!0}),uo({a9:de,cm:xl,cL:e,bo:Ll,c$:0,bw:de,bx:de}),$o])},k1=w(function(e,r,n){return mr(o(le,function(a){var t=a<<4,i=x(Xr,o(Vn,a,0),o(Vn,a,1),o(Vn,a,2),o(Vn,a,3));return p(Oe,e,y(r,i),z1(t))},o(Bt,1,o(gn,2,n)-1)))}),M1=Wv,D1={cy:qr,c0:dl,c1:pl,c3:Yt},V1=function(e){var r=Yr(pa(e)),n=ke(hn(e)),a=ke(Ln(e)),t=ke(wn(e));return nr({dw:t.fV,dx:a.fV,dy:n.fV,dz:r.fV,dA:t.fZ,dB:a.fZ,dC:n.fZ,dD:r.fZ,dE:t.c2,dF:a.c2,dG:n.c2,dH:r.c2,dI:0,dJ:0,dK:0,dL:1})},B1=$(function(e,r){var n=r;return V1(o(wl,n,e))}),A1=function(e){return o(B1,D1,e)},F1=function(e){var r=e;return r.c_},R1=function(e){var r=e;return wn(r)},E1=function(e){var r=e;return Ln(r)},Z1=function(e){var r=F1(e.ex),n=Wr({cy:ut(r),c0:R1(r),c1:E1(r),c3:aa($t(r))}),a=Kt(e.aQ),t=a,i=x(gt,n,1,H,g([t]));if(i.$===1)return P;var c=i.a,l=A1(r),u=o(Je,.99,o(ce,ye(e.eC),vt(cl(c)))),v=ul(c),s=v.a,m=v.b,d=v.c,f=x1(p(qt,s,m,d)),h=o(Je,1.01,o(Gn,f,vt(ll(c)))),b=o(T1,e.ex,{es:e.es,eT:h,fj:u}),C=M1(b).dL,L=C?ke(aa($t(r))):mt(ut(r)),_=function(){var ue=e.fL;switch(ue.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var ve=ue.a;return y(3,ve);case 4:var ve=ue.a;return y(4,ve);default:return y(5,0)}}(),T=_.a,A=_.b,U=e.eR,W=U,j=o(ba,W,e.fS),J=j,O=nr({dw:0,dx:L.fV,dy:_n(J),dz:e.ed,dA:0,dB:L.fZ,dC:Cn(J),dD:Zn(f),dE:0,dF:L.c2,dG:yn(J),dH:T,dI:0,dJ:C,dK:0,dL:A}),Z=se(bl,O,l,b,S1,t,{M:P,U:P,fB:P}),X=e.fb;switch(X.$){case 0:var Q=X.a;return mr(g([p(Oe,Z.M,y(Q,Fa),Dr),p(Oe,Z.U,nn,Dr)]));case 1:var Q=X.a;return mr(g([p(Oe,Z.M,nn,Dr),g([ai]),p(Oe,Z.fB,Q.be,hl),g([Cl(0)]),p(Oe,Z.M,y(Q,Fa),P1),p(Oe,Z.U,nn,Dr)]));default:var be=X.a,ge=X.b;return mr(g([p(Oe,Z.M,y(ge,Fa),Dr),g([ai]),o(f1,Z.fB,be),p(k1,Z.M,ge,Sr(be)),p(Oe,Z.U,nn,Dr)]))}},N1=function(e){return o(gr,"width",Pe(e))},j1=$(function(e,r){var n=g([Np(1),Ip(0),Vp(!0),x(Rp,0,0,0,0)]),a=function(){var T=e.eq;switch(T.$){case 0:return q(n,"0",1);case 1:return q(o(V,Ap,n),"1",1);default:var A=T.a;return q(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Qo(v),m=o(ee,"height",Pe(s)+"px"),d=Qo(u),f=d/s,h=o(Ep,function(T){return Z1({es:f,ex:e.ex,eC:e.eC,aQ:T.aQ,eR:T.eR,fb:T.fb,ed:c,fL:T.fL,fS:T.fS})},r),b=o(ee,"width",Pe(d)+"px"),C=e.aJ,L=C,_=Up(L);return p(Hp,"div",g([o(ee,"padding","0px"),b,m]),g([y(i,p(Jp,t,g([N1(pe(d*c)),jp(pe(s*c)),b,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),G1=function(e){return{$:2,a:e}},H1=function(e){return G1(e)},W1=function(e){return o(j1,{eq:H1(e.b8),aJ:e.aJ,ex:e.ex,eC:e.eC,aL:e.aL},g([{aQ:e.aQ,eR:e.eR,fb:e.fb,fL:e.fL,fS:e.fS}]))},ti=function(e){return e},I1=$(function(e,r){return W1({eq:e.eq,aJ:Mp(e.eu),ex:e.ex,eC:wr(e.eC),b8:e.b8,aL:y(ti(pe(e.bk.fT)),ti(pe(e.bk.e_))),aQ:r,eR:e.eR,fb:e.fb,fL:e.fL,fS:e.fS})}),Bn=function(e){return e*xr/180},Pl=function(e){return e},O1=$(function(e,r){var n=e,a=ke(r.eK),t=a.fV,i=a.fZ,c=a.c2,l=o(ba,r.bK,r.aK),u=l;return{bB:yn(u),ez:n,bI:Cn(u),cH:0,bX:_n(u),cW:1,fV:-t,fZ:-i,c2:-c}}),Tl=$(function(e,r){var n=e,a=r,t=fn(a);return{fV:t*fn(n),fZ:t*ta(n),c2:ta(a)}}),U1=function(e){return o(O1,Pl(!0),{aK:e.aK,eK:o(Tl,lr(e.bA),lr(e.bG)),bK:e.bK})},J1=function(e){return e},q1=function(e){return J1(1.2*o(gn,2,e))},Za=Xt({fV:.37208,fZ:.37529}),Y1=$(function(e,r){return{$:2,a:e,b:r}}),zl=function(e){return{$:0,a:e}},An=function(e){var r=e;return r},X1=function(e){var r=e;return r.ez},Q1=zl(nn.a),K1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?y(o(V,a,i),c):y(i,o(V,a,c))});return p(vr,n,y(P,P),r)}),e3=function(e){var r=e;return nr({dw:r.fV,dx:r.bX,dy:0,dz:0,dA:r.fZ,dB:r.bI,dC:0,dD:0,dE:r.c2,dF:r.bB,dG:0,dH:0,dI:r.cW,dJ:r.cH,dK:0,dL:0})},r3=ie(function(e,r,n,a,t,i,c,l){var u=o(K1,X1,g([An(e),An(r),An(n),An(a)])),v=u.a,s=u.b;if(v.b){var m=ae(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(Y1,o(le,e3,v),{be:o(Ve,d,h),bN:o(Ve,C,_),bO:o(Ve,t,i),bP:o(Ve,c,l)})}else return Q1}else return zl({be:o(Ve,e,r),bN:o(Ve,n,a),bO:o(Ve,t,i),bP:o(Ve,c,l)})}),n3=B(function(e,r,n,a){return ca(r3,e,r,n,a,Se,Se,Se,Se)}),a3={$:5},t3=a3,o3=Xt({fV:.44757,fZ:.40745}),i3=function(e){return e},oi=function(e){return e},Na=function(e){return e},c3={$:1},l3=c3,u3=$(function(e,r){var n=e,a=Yr(r.d0),t=a.fV,i=a.fZ,c=a.c2,l=o(ba,r.bK,r.aK),u=l;return{bB:yn(u),ez:n,bI:Cn(u),cH:0,bX:_n(u),cW:2,fV:t,fZ:i,c2:c}}),ii=function(e){return o(u3,Pl(!0),{aK:e.aK,bK:e.bK,d0:Rn(e.d0)})},ci=function(e){var r=e;return r},v3=function(e){e:for(;;){if(Lr(e.dl,Hr)&&Lr(e.dm,Hr))return Se;if(o(Mc,ye(e.dl),ye(e.dm))){var r={aK:e.aK,dl:e.dm,dm:e.dl,ej:aa(e.ej)};e=r;continue e}else{var n=G(ci(e.dm)/xr),a=G(ci(e.dl)/xr),t=ke(e.ej),i=t.fV,c=t.fZ,l=t.c2,u=o(ba,Wc(1),e.aK),v=u;return{bB:a*yn(v),ez:!1,bI:a*Cn(v),cH:n/a,bX:a*_n(v),cW:3,fV:i,fZ:c,c2:l}}}},$3=function(e){return v3({aK:e.aK,dl:e.dl,dm:e.dm,ej:o(Tl,lr(e.bA),lr(e.bG))})},f3=$(function(e,r){var n=U1({bA:Bn(-90),aK:dd(i3(2e3)),bG:Bn(-45),bK:Na(100)}),a=ii({aK:Za,bK:oi(6e3),d0:{fV:2,fZ:3,c2:3}}),t=$3({bA:Bn(0),aK:Za,bG:Bn(-45),dl:Na(20),dm:Na(10)}),i=ii({aK:o3,bK:oi(6e3),d0:{fV:-2,fZ:4,c2:3}});return o(I1,{eq:l3,eu:pc,ex:Jt(e),eC:.1,b8:e.b8,eR:q1(6),fb:x(n3,i,a,n,t),bk:e.bk,fL:t3,fS:Za},g([o(kp,e,r)]))}),s3=x(vm,f3,sd,P,mm);const m3={Main:{init:s3(o(k,function(e){return xe({e5:e})},o(z,"inputs",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return xe({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fR:e})},o(z,"clock",oe))},o(z,"devicePixelRatio",oe))},o(z,"dt",oe))},o(z,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(m){return xe({ep:m,eE:s,da:v,eL:u,e8:l,ft:c,fx:i,ea:t,ei:a})},o(z,"alt",Y))},o(z,"control",Y))},o(z,"down",Y))},o(z,"downs",Xn($n)))},o(z,"left",Y))},o(z,"pressedKeys",Xn($n)))},o(z,"right",Y))},o(z,"shift",Y))},o(z,"up",Y))))},o(z,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return xe({da:v,cb:u,fe:l,fy:c,fz:i,ei:t,fV:a,fZ:n})},o(z,"down",Y))},o(z,"isDown",Y))},o(z,"move",Y))},o(z,"rightDown",Y))},o(z,"rightUp",Y))},o(z,"up",Y))},o(z,"x",oe))},o(z,"y",oe))))},o(z,"screen",o(k,function(r){return o(k,function(n){return xe({e_:n,fT:r})},o(z,"height",oe))},o(z,"width",oe))))},o(z,"wheel",o(k,function(e){return o(k,function(r){return xe({eH:r,eI:e})},o(z,"deltaX",oe))},o(z,"deltaY",oe)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},d3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-D.clock;b<.009||(D.dt=b,D.clock=h,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},p3=()=>{ja("pointerdown"),ja("wheel"),ja("keydown")},ja=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},b3=m3.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});p3();d3(b3);
