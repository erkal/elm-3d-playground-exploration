(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function pr(e,r,n){return n.a=e,n.f=r,n}function $(e){return pr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return pr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return pr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Te(e){return pr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function je(e){return pr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ia(e){return pr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ie(e){return pr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function _t(e){return pr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function L(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function pe(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ct(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ca(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ql=[];function Kl(e){return e.length}var eu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),ru=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),nu=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var au=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+tu()),r});function tu(e){return"<internals>"}function Ir(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Mr(e,r){for(var n,a=[],t=Ya(e,r,0,a);t&&(n=a.pop());t=Ya(n.a,n.b,0,a));return t}function Ya(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ir(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=wo(e),r=wo(r));for(var t in e)if(!Ya(e[t],r[t],n+1,a))return!1;return!0}$(Mr);$(function(e,r){return!Mr(e,r)});function W(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=W(e.a,r.a))||(n=W(e.b,r.b))?n:W(e.c,r.c);for(;e.b&&r.b&&!(n=W(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return W(e,r)<0});$(function(e,r){return W(e,r)<1});$(function(e,r){return W(e,r)>0});$(function(e,r){return W(e,r)>=0});var ou=$(function(e,r){var n=W(e,r);return n<0?Vi:n?Y$:Ri}),pn=0;function k(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(te);function te(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ke(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ke(e.a,r);return n}var x={$:0};function Ke(e,r){return{$:1,a:e,b:r}}var iu=$(Ke);function h(e){for(var r=x,n=e.length;n--;)r=Ke(e[n],r);return r}function la(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var cu=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});Te(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return h(i)});je(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(L(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(la(r).sort(function(n,a){return W(e(n),e(a))}))});$(function(e,r){return h(la(r).sort(function(n,a){var t=o(e,n,a);return t===Ri?0:t===Vi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var lu=$(Math.pow);$(function(e,r){return r%e});var uu=$(function(e,r){var n=r%e;return e===0?Ir(11):n>0&&e<0||n<0&&e>0?n+e:n}),vu=Math.PI,$u=Math.cos,fu=Math.sin,su=Math.tan,mu=Math.atan;$(Math.atan2);function du(e){return e}function pu(e){return e===1/0||e===-1/0}var bu=Math.ceil,gu=Math.floor,hu=Math.round,_u=Math.sqrt,vo=Math.log,Cu=isNaN;function yu(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Su=$(function(e,r){return e+r});function Lu(e){var r=e.charCodeAt(0);return isNaN(r)?q:K(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function wu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Tu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var xu=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Pu=$(function(e,r){return r.split(e)}),Mu=$(function(e,r){return r.join(e)}),zu=S(function(e,r,n){return n.slice(e,r)});function ku(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Du=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Bu=$(function(e,r){return r.indexOf(e)>-1}),Au=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Fu=$(function(e,r){var n=e.length;if(n<1)return x;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function fi(e){return e+""}function Uu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:K(n==45?-r:r)}function Ru(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?K(r):q}function Vu(e){return la(e).join("")}function Eu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ju(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Nu(e){return{$:0,a:e}}function yt(e){return{$:2,b:e}}var Gu=yt(function(e){return typeof e=="boolean"?oe(e):Je("a BOOL",e)}),Wu=yt(function(e){return typeof e=="number"?oe(e):Je("a FLOAT",e)}),Hu=yt(function(e){return typeof e=="string"?oe(e):e instanceof String?oe(e+""):Je("a STRING",e)});function Yu(e){return{$:3,b:e}}var Iu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function br(e,r){return{$:9,f:e,g:r}}var Ou=$(function(e,r){return{$:10,b:r,h:e}}),Ju=$(function(e,r){return br(e,[r])}),qu=S(function(e,r,n){return br(e,[r,n])});F(function(e,r,n,a){return br(e,[r,n,a])});Te(function(e,r,n,a,t){return br(e,[r,n,a,t])});je(function(e,r,n,a,t,i){return br(e,[r,n,a,t,i])});ia(function(e,r,n,a,t,i,c){return br(e,[r,n,a,t,i,c])});ie(function(e,r,n,a,t,i,c,l){return br(e,[r,n,a,t,i,c,l])});_t(function(e,r,n,a,t,i,c,l,u){return br(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ve(e,n)}catch(a){return be(o(At,"This is not valid JSON! "+a.message,r))}});var si=$(function(e,r){return Ve(e,r)});function Ve(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?oe(e.c):Je("null",r);case 3:return wn(r)?$o(e.b,r,h):Je("a LIST",r);case 4:return wn(r)?$o(e.b,r,Zu):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var v=Ve(e.b,r[n]);return He(v)?v:be(o(To,n,v.a));case 7:var a=e.e;if(!wn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ve(e.b,r[a]);return He(v)?v:be(o(Ei,a,v.a));case 8:if(typeof r!="object"||r===null||wn(r))return Je("an OBJECT",r);var t=x;for(var i in r)if(r.hasOwnProperty(i)){var v=Ve(e.b,r[i]);if(!He(v))return be(o(To,i,v.a));t=Ke(k(i,v.a),t)}return oe(ke(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ve(l[u],r);if(!He(v))return v;c=c(v.a)}return oe(c);case 10:var v=Ve(e.b,r);return He(v)?Ve(e.h(v.a),r):v;case 11:for(var s=x,m=e.g;m.b;m=m.b){var v=Ve(m.a,r);if(He(v))return v;s=Ke(v.a,s)}return be(I$(ke(s)));case 1:return be(o(At,e.a,r));case 0:return oe(e.a)}}function $o(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ve(e,r[i]);if(!He(c))return be(o(Ei,i,c.a));t[i]=c.a}return oe(n(t))}function wn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Zu(e){return o(vf,e.length,function(r){return e[r]})}function Je(e,r){return be(o(At,"Expecting "+e,r))}function Er(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Er(e.b,r.b);case 6:return e.d===r.d&&Er(e.b,r.b);case 7:return e.e===r.e&&Er(e.b,r.b);case 9:return e.f===r.f&&fo(e.g,r.g);case 10:return e.h===r.h&&Er(e.b,r.b);case 11:return fo(e.g,r.g)}}function fo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Er(e[a],r[a]))return!1;return!0}var Xu=$(function(e,r){return JSON.stringify(r,null,e)+""});function mi(e){return e}S(function(e,r,n){return n[e]=r,n});function Dr(e){return{$:0,a:e}}function Qu(e){return{$:1,a:e}}function $r(e){return{$:2,b:e,c:null}}var Ia=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Ku(e){return{$:5,b:e}}var ev=0;function St(e){var r={$:0,e:ev++,f:e,g:null,h:[]};return Lt(r),r}function di(e){return $r(function(r){r(Dr(St(e)))})}function pi(e,r){e.h.push(r),Lt(e)}var rv=$(function(e,r){return $r(function(n){pi(e,r),n(Dr(pn))})}),Ca=!1,so=[];function Lt(e){if(so.push(e),!Ca){for(Ca=!0;e=so.shift();)nv(e);Ca=!1}}function nv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Lt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return wt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function wt(e,r,n,a,t,i){var c=o(si,e,r?r.flags:void 0);He(c)||Ir(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=av(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),po(l,b.b,t(v))}return po(l,u.b,t(v)),m?{ports:m}:{}}var Xe={};function av(e,r){var n;for(var a in Xe){var t=Xe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=ov(t,r)}return n}function tv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function ov(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ia,l,Ku(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=St(o(Ia,l,e.b))}var iv=$(function(e,r){return $r(function(n){e.g(r),n(Dr(pn))})});$(function(e,r){return o(rv,e.h,{$:0,a:r})});function bi(e){return function(r){return{$:1,k:e,l:r}}}function cv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var mo=[],ya=!1;function po(e,r,n){if(mo.push({p:e,q:r,r:n}),!ya){ya=!0;for(var a;a=mo.shift();)lv(a.p,a.q,a.r);ya=!1}}function lv(e,r,n){var a={};Gn(!0,r,a,null),Gn(!1,n,a,null);for(var t in e)pi(e[t],{$:"fx",a:a[t]||{i:x,j:x}})}function Gn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=uv(e,t,a,r.l);n[t]=vv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Gn(e,c.a,n,a);return;case 3:Gn(e,r.o,n,{s:r.n,t:a});return}}function uv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Xe[r].e:Xe[r].f;return o(i,t,a)}function vv(e,r,n){return n=n||{i:x,j:x},e?n.i=Ke(r,n.i):n.j=Ke(r,n.j),n}function $v(e){Xe[e]&&Ir(3)}$(function(e,r){return r});function fv(e,r){return $v(e),Xe[e]={f:sv,u:r,a:mv},bi(e)}var sv=$(function(e,r){return function(n){return e(r(n))}});function mv(e,r){var n=x,a=Xe[e].u,t=Dr(null);Xe[e].b=t,Xe[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(si,a,c);He(l)||Ir(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Wn,or=typeof document<"u"?document:{};function Tt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(mr(e,function(){}),t),{}});function Oa(e){return{$:0,a:e}}var gi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:xt(n),e:t,f:e,b:i}})}),Br=gi(void 0),dv=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:xt(n),e:t,f:e,b:i}})}),pv=dv(void 0);function bv(e,r,n,a){return{$:3,d:xt(e),g:r,h:n,i:a}}var gv=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return gr([e,r],function(){return e(r)})});S(function(e,r,n){return gr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return gr([e,r,n,a],function(){return p(e,r,n,a)})});Te(function(e,r,n,a,t){return gr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});je(function(e,r,n,a,t,i){return gr([e,r,n,a,t,i],function(){return L(e,r,n,a,t,i)})});ia(function(e,r,n,a,t,i,c){return gr([e,r,n,a,t,i,c],function(){return pe(e,r,n,a,t,i,c)})});ie(function(e,r,n,a,t,i,c,l){return gr([e,r,n,a,t,i,c,l],function(){return Ct(e,r,n,a,t,i,c,l)})});_t(function(e,r,n,a,t,i,c,l,u){return gr([e,r,n,a,t,i,c,l,u],function(){return ca(e,r,n,a,t,i,c,l,u)})});var hi=$(function(e,r){return{$:"a0",n:e,o:r}}),hv=$(function(e,r){return{$:"a1",n:e,o:r}}),_i=$(function(e,r){return{$:"a2",n:e,o:r}}),hr=$(function(e,r){return{$:"a3",n:e,o:r}}),_v=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Cv(e){return e=="script"?"p":e}function yv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(hi,r.n,Sv(e,r.o)):r});function Sv(e,r){var n=Vt(r);return{$:r.$,a:n?p($f,n<3?Lv:wv,xe(e),r.a):o(On,e,r.a)}}var Lv=$(function(e,r){return k(e(r.a),r.b)}),wv=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?bo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?bo(c,t,i):c[t]=i}return r}function bo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function mr(e,r){var n=e.$;if(n===5)return mr(e.k||(e.k=e.m()),r);if(n===0)return or.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=mr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ja(c,r,e.d),c}var c=e.f?or.createElementNS(e.f,e.c):or.createElement(e.c);Wn&&e.c=="a"&&c.addEventListener("click",Wn(c)),Ja(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Tt(c,mr(n===1?l[u]:l[u].b,r));return c}function Ja(e,r,n){for(var a in n){var t=n[a];a==="a1"?Tv(e,t):a==="a0"?Mv(e,r,t):a==="a3"?xv(e,t):a==="a4"?Pv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Tv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function xv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Pv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Mv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=zv(r,i),e.addEventListener(t,c,Pt&&{passive:Vt(i)<2}),a[t]=c}}var Pt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Pt=!0}}))}catch{}function zv(e,r){function n(a){var t=n.q,i=Ve(t.a,a);if(!!He(i)){for(var c=Vt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function kv(e,r){return e.$==r.$&&Er(e.a,r.a)}function Ci(e,r){var n=[];return Ye(e,r,n,0),n}function de(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ye(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Ev(r),i=1;else{de(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ye(e.k,r.k,s,0),s.length>0&&de(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){de(n,0,a,r);return}(f?!Dv(m,d):m!==d)&&de(n,2,a,d),Ye(g,b,n,a+1);return;case 0:e.a!==r.a&&de(n,3,a,r.a);return;case 1:go(e,r,n,a,Bv);return;case 2:go(e,r,n,a,Av);return;case 3:if(e.h!==r.h){de(n,0,a,r);return}var C=Mt(e.d,r.d);C&&de(n,4,a,C);var y=r.i(e.g,r.g);y&&de(n,5,a,y);return}}}function Dv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function go(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){de(n,0,a,r);return}var i=Mt(e.d,r.d);i&&de(n,4,a,i),t(e,r,n,a)}function Mt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Mt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&kv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Bv(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?de(n,6,a,{v:l,i:c-l}):c<l&&de(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ye(s,i[v],n,++a),a+=s.b||0}}function Av(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],C=g.a,y=b.a,_=g.b,T=b.b,A=void 0,H=void 0;if(C===y){f++,Ye(_,T,t,f),f+=_.b||0,m++,d++;continue}var N=l[m+1],j=u[d+1];if(N){var O=N.a,Y=N.b;H=y===O}if(j){var V=j.a,X=j.b;A=C===V}if(A&&H){f++,Ye(_,X,t,f),en(i,t,C,T,d,c),f+=_.b||0,f++,rn(i,t,C,Y,f),f+=Y.b||0,m+=2,d+=2;continue}if(A){f++,en(i,t,y,T,d,c),Ye(_,X,t,f),f+=_.b||0,m+=1,d+=2;continue}if(H){f++,rn(i,t,C,_,f),f+=_.b||0,f++,Ye(Y,T,t,f),f+=Y.b||0,m+=2,d+=1;continue}if(N&&O===V){f++,rn(i,t,C,_,f),en(i,t,y,T,d,c),f+=_.b||0,f++,Ye(Y,X,t,f),f+=Y.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;rn(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];en(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&de(n,8,a,{w:t,x:c,y:Q})}var yi="_elmW6BL";function en(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ye(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}en(e,r,n+yi,a,t,i)}function rn(e,r,n,a,t){var i=e[n];if(!i){var c=de(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ye(a,i.z,l,t),de(r,9,t,{w:l,A:i});return}rn(e,r,n+yi,a,t)}function Si(e,r,n,a){nn(e,r,n,0,0,r.b,a)}function nn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Si(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&nn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&nn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return nn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,C=0;C<g.length;C++){t++;var y=d===1?g[C]:g[C].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=nn(b[C],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Li(e,r,n,a){return n.length===0?e:(Si(e,r,n,a),Hn(e,n))}function Hn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Fv(t,a);t===e&&(e=i)}return e}function Fv(e,r){switch(r.$){case 0:return Uv(e,r.s,r.u);case 4:return Ja(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Hn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(mr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Hn(e,i.w),e;case 8:return Rv(e,r);case 5:return r.s(e);default:Ir(10)}}function Uv(e,r,n){var a=e.parentNode,t=mr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Rv(e,r){var n=r.s,a=Vv(n.y,r);e=Hn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:mr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Tt(e,a),e}function Vv(e,r){if(!!e){for(var n=or.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Tt(n,i.c===2?i.s:mr(i.z,r.u))}return n}}function zt(e){if(e.nodeType===3)return Oa(e.textContent);if(e.nodeType!==1)return Oa("");for(var r=x,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ke(o(hr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=x,v=e.childNodes,a=v.length;a--;)u=Ke(zt(v[a]),u);return p(Br,l,r,u)}function Ev(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var jv=F(function(e,r,n,a){return wt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=zt(l);return wi(i,function(v){var s=c(v),m=Ci(u,s);l=Li(l,u,m,t),u=s})})});F(function(e,r,n,a){return wt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=or.title,v=or.body,s=zt(v);return wi(i,function(m){Wn=c;var d=l(m),f=Br("body")(x)(d.eu),g=Ci(s,f);v=Li(v,s,g,t),s=f,Wn=0,u!==d.fL&&(or.title=u=d.fL)})})});var Yn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function wi(e,r){r(e);var n=0;function a(){n=n===1?0:(Yn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Yn(a),n=2)}}$(function(e,r){return o(Nt,Et,$r(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Nt,Et,$r(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Nt,Et,$r(function(){history.replaceState({},"",r),e()}))});var Nv={addEventListener:function(){},removeEventListener:function(){}},Gv=typeof window<"u"?window:Nv;S(function(e,r,n){return di($r(function(a){function t(i){St(n(i))}return e.addEventListener(r,t,Pt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ve(e,r);return He(n)?K(n.a):q});function Ti(e,r){return $r(function(n){Yn(function(){var a=document.getElementById(e);n(a?Dr(r(a)):Qu(sf(e)))})})}function Wv(e){return $r(function(r){Yn(function(){r(Dr(e()))})})}$(function(e,r){return Ti(r,function(n){return n[e](),pn})});$(function(e,r){return Wv(function(){return Gv.scroll(e,r),pn})});S(function(e,r,n){return Ti(e,function(a){return a.scrollLeft=r,a.scrollTop=n,pn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Hv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return K(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Yv=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?K(m):q}a.push(w(yc,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?K(v):q}return n(w(yc,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var Iv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Ov(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Ov(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var kt=new Float64Array(3),ho=new Float64Array(3),_o=new Float64Array(3),Jv=S(function(e,r,n){return new Float64Array([e,r,n])}),qv=function(e){return e[0]},Zv=function(e){return e[1]},Xv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Qv=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xi(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(xi);function Pi(e,r,n){return n===void 0&&(n=new Float64Array(3)),In(xi(e,r,n),n)}$(Pi);function Mi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function In(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Mi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Kv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),an=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(an);function qa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(qa);$(function(e,r){var n,a=kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=an(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(an(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(an(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(an(r,a)+e[14])/n,t});var e$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var r$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},n$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/a$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function a$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var t$=new Float64Array(16),o$=new Float64Array(16),i$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},c$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function zi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}je(zi);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return zi(c,l,i,t,n,a)});function ki(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}je(ki);F(function(e,r,n,a){return ki(e,r,n,a,-1,1)});function Di(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],C=e[13],y=e[14],_=e[15],T=r[0],A=r[1],H=r[2],N=r[3],j=r[4],O=r[5],Y=r[6],V=r[7],X=r[8],Q=r[9],he=r[10],_e=r[11],se=r[12],me=r[13],Ge=r[14],We=r[15];return n[0]=a*T+l*A+m*H+b*N,n[1]=t*T+u*A+d*H+C*N,n[2]=i*T+v*A+f*H+y*N,n[3]=c*T+s*A+g*H+_*N,n[4]=a*j+l*O+m*Y+b*V,n[5]=t*j+u*O+d*Y+C*V,n[6]=i*j+v*O+f*Y+y*V,n[7]=c*j+s*O+g*Y+_*V,n[8]=a*X+l*Q+m*he+b*_e,n[9]=t*X+u*Q+d*he+C*_e,n[10]=i*X+v*Q+f*he+y*_e,n[11]=c*X+s*Q+g*he+_*_e,n[12]=a*se+l*me+m*Ge+b*We,n[13]=t*se+u*me+d*Ge+C*We,n[14]=i*se+v*me+f*Ge+y*We,n[15]=c*se+s*me+g*Ge+_*We,n}$(Di);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],C=r[1],y=r[2],_=r[4],T=r[5],A=r[6],H=r[8],N=r[9],j=r[10],O=r[12],Y=r[13],V=r[14];return n[0]=a*b+c*C+v*y,n[1]=t*b+l*C+s*y,n[2]=i*b+u*C+m*y,n[3]=0,n[4]=a*_+c*T+v*A,n[5]=t*_+l*T+s*A,n[6]=i*_+u*T+m*A,n[7]=0,n[8]=a*H+c*N+v*j,n[9]=t*H+l*N+s*j,n[10]=i*H+u*N+m*j,n[11]=0,n[12]=a*O+c*Y+v*V+d,n[13]=t*O+l*Y+s*V+f,n[14]=i*O+u*Y+m*V+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=In(r,kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Mi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,C=c*l*v,y=i*i*v+u,_=g+f,T=b-d,A=g-f,H=c*c*v+u,N=C+m,j=b+d,O=C-m,Y=l*l*v+u,V=n[0],X=n[1],Q=n[2],he=n[3],_e=n[4],se=n[5],me=n[6],Ge=n[7],We=n[8],Ar=n[9],Fr=n[10],_a=n[11],Ol=n[12],Jl=n[13],ql=n[14],Zl=n[15];return a[0]=V*y+_e*_+We*T,a[1]=X*y+se*_+Ar*T,a[2]=Q*y+me*_+Fr*T,a[3]=he*y+Ge*_+_a*T,a[4]=V*A+_e*H+We*N,a[5]=X*A+se*H+Ar*N,a[6]=Q*A+me*H+Fr*N,a[7]=he*A+Ge*H+_a*N,a[8]=V*j+_e*O+We*Y,a[9]=X*j+se*O+Ar*Y,a[10]=Q*j+me*O+Fr*Y,a[11]=he*j+Ge*O+_a*Y,a[12]=Ol,a[13]=Jl,a[14]=ql,a[15]=Zl,a});function l$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(l$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function u$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(u$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],C=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=C,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});S(function(e,r,n){var a=Pi(e,r,kt),t=In(qa(n,a,ho),ho),i=In(qa(a,t,_o),_o),c=t$,l=o$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Di(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Co=0;function un(e,r){for(;r.b;r=r.b)e(r.a)}function Dt(e){for(var r=0;e.b;e=e.b)r++;return r}var v$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},$$=Te(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),f$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),s$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),m$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),d$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),p$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),b$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),g$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),h$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),_$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},C$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},y$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},S$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Bi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ai=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},L$=function(e){e.gl.disable(e.gl.CULL_FACE)},w$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},T$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},x$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},yo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],P$=[C$,y$,S$,Bi,Ai,L$,w$,T$,x$];function So(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function M$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Fi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function z$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,C,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?C[y]:C[y][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?C[T][y]:C[T][y][_]})}var u=Fi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Dt(n.b)*s);un(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function k$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=D$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Dt(r.b),indexBuffer:null,buffers:{}}}function D$(e,r){var n=new Uint32Array(Dt(e)*r),a=0,t;return un(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Lo(e,r){return e+"#"+r}var Ui=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Bi(n),Ai(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Lo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Co++,v||(v=So(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Co++,s||(s=So(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=M$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=B$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=Lo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),A$(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=k$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=z$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=Fi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,C.size,C.baseType,!1,0,0);else for(var y=C.size*4,_=y*C.arraySize,T=0;T<C.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,C.size,C.baseType,!1,_,y*T)}for(n.toggle=!n.toggle,un(ld(n),i.a),u=0;u<yo.length;u++){var A=n[yo[u]];A.toggle!==n.toggle&&A.enabled&&(P$[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return un(t,e.g),r});function B$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,C=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(C,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function A$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var F$=S(function(e,r,n){return bv(r,{g:n,f:{},h:e},G$,W$)}),U$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),R$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),V$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),E$=$(function(e,r){e.contextAttributes.antialias=!0}),j$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),N$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function G$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};un(function(t){return o(cd,r,t)},e.h);var n=or.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),v$(function(){return o(Ui,e,n)})):(n=or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function W$(e,r){return r.f=e.f,Ui(r)}var B=iu,Tn=au,H$=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Tn,e,l,v)}else{var u=c.a;return p(Tn,i,l,u)}});return p(Tn,i,p(Tn,e,r,t),a)}),Bt=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Bt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),wo=function(e){return p(Bt,S(function(r,n,a){return o(B,k(r,n),a)}),x,e)},Ri=1,Y$=2,Vi=0,be=function(e){return{$:1,a:e}},At=$(function(e,r){return{$:3,a:e,b:r}}),To=$(function(e,r){return{$:0,a:e,b:r}}),Ei=$(function(e,r){return{$:1,a:e,b:r}}),oe=function(e){return{$:0,a:e}},I$=function(e){return{$:2,a:e}},K=function(e){return{$:0,a:e}},q={$:1},O$=Du,J$=Xu,Pe=fi,yr=$(function(e,r){return o(Mu,e,la(r))}),Ft=$(function(e,r){return h(o(Pu,e,r))}),ji=function(e){return o(yr,`
    `,o(Ft,`
`,e))},ua=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),zr=function(e){return p(ua,$(function(r,n){return n+1}),0,e)},q$=cu,Z$=S(function(e,r,n){e:for(;;)if(W(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),bn=$(function(e,r){return p(Z$,e,r,x)}),Ni=$(function(e,r){return p(q$,e,o(bn,0,zr(r)-1),r)}),Qe=Eu,Gi=function(e){var r=Qe(e);return 97<=r&&r<=122},Wi=function(e){var r=Qe(e);return r<=90&&65<=r},X$=function(e){return Gi(e)||Wi(e)},Q$=function(e){var r=Qe(e);return r<=57&&48<=r},K$=function(e){return Gi(e)||Wi(e)||Q$(e)},ke=function(e){return p(ua,B,x,e)},Or=Lu,ef=$(function(e,r){return`

(`+(Pe(e+1)+(") "+ji(rf(r))))}),rf=function(e){return o(nf,e,x)},nf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Or(n);if(b.$===1)return!1;var C=b.a,y=C.a,_=C.b;return X$(y)&&o(O$,K$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(yr,"",ke(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Pe(zr(s))+" ways:"));return o(yr,`

`,o(B,g,o(Ni,ef,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(yr,"",ke(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(yr,"",ke(r))+`:

    `):`Problem with the given value:

`}();return g+(ji(o(J$,4,f))+(`

`+d))}}),De=32,Za=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Xa=Ql,Hi=bu,Ut=$(function(e,r){return vo(r)/vo(e)}),af=du,vn=Hi(o(Ut,2,De)),Yi=w(Za,0,vn,Xa,Xa),Ii=eu,Oi=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Ji=gu,Qa=Kl,Le=$(function(e,r){return W(e,r)>0?e:r}),tf=function(e){return{$:0,a:e}},Rt=ru,of=$(function(e,r){e:for(;;){var n=o(Rt,De,e),a=n.a,t=n.b,i=o(B,tf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ke(i)}}),cf=function(e){var r=e.a;return r},lf=$(function(e,r){e:for(;;){var n=Hi(r/De);if(n===1)return o(Rt,De,e).a;var a=o(of,e,x),t=n;e=a,r=t;continue e}}),qi=$(function(e,r){if(r.l){var n=r.l*De,a=Ji(o(Ut,De,n-1)),t=e?ke(r.z):r.z,i=o(lf,t,r.l);return w(Za,Qa(r.p)+n,o(Le,5,a*vn),i,r.p)}else return w(Za,Qa(r.p),vn,Xa,r.p)}),uf=Te(function(e,r,n,a,t){e:for(;;){if(r<0)return o(qi,!1,{z:a,l:n/De|0,p:t});var i=Oi(p(Ii,De,r,e)),c=e,l=r-De,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),vf=$(function(e,r){if(e<=0)return Yi;var n=e%De,a=p(Ii,n,e-n,r),t=e-n-De;return L(uf,r,t,e,x,a)}),He=function(e){return!e.$},z=Ou,Z=Gu,M=Iu,ce=Wu,On=Ju,$f=qu,xe=Nu,Vt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Br("div"),ff=function(e){return{$:2,a:e}},Zi=$(function(e,r){return e}),Xi=$(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Lr=function(e){return e},sf=Lr,xo=je(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),mf=Bu,Sr=wu,jr=zu,gn=$(function(e,r){return e<1?r:p(jr,e,Sr(r),r)}),va=Fu,$a=function(e){return e===""},fa=$(function(e,r){return e<1?"":p(jr,0,e,r)}),Qi=Uu,Po=Te(function(e,r,n,a,t){if($a(t)||o(mf,"@",t))return q;var i=o(va,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Qi(o(gn,c+1,t));if(l.$===1)return q;var u=l;return K(pe(xo,e,o(fa,c,t),u,r,n,a))}else return K(pe(xo,e,t,q,r,n,a))}),Mo=F(function(e,r,n,a){if($a(a))return q;var t=o(va,"/",a);if(t.b){var i=t.a;return L(Po,e,o(gn,i,a),r,n,o(fa,i,a))}else return L(Po,e,"/",r,n,a)}),zo=S(function(e,r,n){if($a(n))return q;var a=o(va,"?",n);if(a.b){var t=a.a;return w(Mo,e,K(o(gn,t+1,n)),r,o(fa,t,n))}else return w(Mo,e,q,r,n)});$(function(e,r){if($a(r))return q;var n=o(va,"#",r);if(n.b){var a=n.a;return p(zo,e,K(o(gn,a+1,r)),o(fa,a,r))}else return p(zo,e,q,r)});var df=Au,Et=function(e){},hn=Dr,pf=hn(0),Ki=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(ua,e,r,ke(m)):w(Ki,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),fr=S(function(e,r,n){return w(Ki,e,r,0,n)}),ue=$(function(e,r){return p(fr,$(function(n,a){return o(B,e(n),a)}),x,r)}),Jn=Ia,jt=$(function(e,r){return o(Jn,function(n){return hn(e(n))},r)}),bf=S(function(e,r,n){return o(Jn,function(a){return o(Jn,function(t){return hn(o(e,a,t))},n)},r)}),gf=function(e){return p(fr,bf(B),hn(x),e)},hf=iv,_f=$(function(e,r){var n=r;return di(o(Jn,hf(e),n))}),Cf=S(function(e,r,n){return o(jt,function(a){return 0},gf(o(ue,_f(e),r)))}),yf=S(function(e,r,n){return hn(0)}),Sf=$(function(e,r){var n=r;return o(jt,e,n)});Xe.Task=tv(pf,Cf,yf,Sf);var Lf=bi("Task"),Nt=$(function(e,r){return Lf(o(jt,e,r))}),wf=jv,Tf=yu,qn={$:1},ec=function(e){return{$:2,a:e}},sa={$:0},Ee=$(function(e,r){return{$:0,a:e,b:r}}),re=S(function(e,r,n){return r(e(n))}),Jr=function(e){var r=e.b.B;return r.a},xf=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return K(o(Ee,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},rc=function(e){var r=e.b;return o(Ee,sa,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Pf=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?rc(n):n;case 2:var i=a.a.cY;return(W(i+r.eJ,Jr(n).b7)>0?o(re,xf,dr(o(Ee,qn,t))):Lr)(o(Ee,ec({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Xi,l.eA,qe(r,{b7:l.b7+r.eJ})),s=o(e,v,u);return o(Ee,sa,{B:k(v,s),ab:x,T:o(B,t.B,t.T)})}}),nc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Mf=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),zf=$(function(e,r){return ke(p(Mf,e,r,x))}),ac=S(function(e,r,n){if(r<=0)return x;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,C=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(zf,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,b,p(ac,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),kf=$(function(e,r){return p(ac,0,e,r)}),Df=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=te(ke(n),te(h([a]),t)),c=o(kf,e,i),l=o(nc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ee,qn,{B:u,ab:v,T:ke(c)})}else{var s=ke(c);if(s.b){var m=s.a,d=s.b;return o(Ee,qn,{B:m,ab:x,T:d})}else return r}}),Bf=function(e){var r=e.b;return o(Ee,qn,r)},Af=function(e){var r=e.b;return o(Ee,ec({cY:Jr(e).b7}),r)},Ff=$(function(e,r){switch(e.$){case 1:return Bf(r);case 2:return rc(r);case 3:return Af(r);default:var n=e.a;return o(Df,n,r)}}),tc=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Uf=$(function(e,r){return qe(r,{av:e(r.av)})}),Rf=function(e){return{$:3,a:e}},Vf=function(e){return{$:2,a:e}},Ef=$(function(e,r){return{$:0,a:e,b:r}}),jf=$(function(e,r){return{$:1,a:e,b:r}}),Me=$(function(e,r){if(r.$)return q;var n=r.a;return K(e(n))}),I=function(e){return e<0?-e:e},Gt=Ru,Nf=S(function(e,r,n){return o(dr,0/0,Gt(o(e,r,n)))}),oc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Gf=xu,ic=function(e){return p(Gf,B,x,e)},Wf=$(function(e,r){var n=o(oc,function(a){return a!=="0"&&a!=="."},ic(r));return te(e&&n?"-":"",r)}),ne=fi,Ka=Su,cc=ju,lc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Or(n);if(a.$===1)return"01";var t=a.a;return o(Ka,"0",lc(t))}else{var i=Qe(r);return i>=48&&i<57?o(Ka,cc(i+1),n):"0"}},et=pu,Hf=Cu,ma=function(e){return o(Ka,e,"")},uc=S(function(e,r,n){return e<=0?n:p(uc,e>>1,te(r,r),e&1?te(n,r):n)}),$n=$(function(e,r){return p(uc,e,r,"")}),rt=S(function(e,r,n){return te(n,o($n,e-Sr(n),ma(r)))}),nt=Tu,vc=function(e){var r=o(Ft,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Yf=function(e){var r=o(Ft,"e",ne(I(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,Qi(o(df,"+",t)?o(gn,1,t):t)),c=vc(n),l=c.a,u=c.b,v=te(l,u),s=i<0?o(dr,"0",o(Me,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Me,tc(ma),Or(te(o($n,I(i),"0"),v))))):p(rt,i+1,"0",v);return te(e<0?"-":"",s)}else{var n=r.a;return te(e<0?"-":"",n)}else return""},If=S(function(e,r,n){if(et(n)||Hf(n))return ne(n);var a=n<0,t=vc(Yf(I(n))),i=t.a,c=t.b,l=Sr(i)+r,u=te(o($n,-l+1,"0"),p(rt,l,"0",te(i,c))),v=Sr(u),s=o(Le,1,l),m=o(e,a,p(jr,s,v,u)),d=p(jr,0,s,u),f=m?nt(o(dr,"1",o(Me,lc,Or(nt(d))))):d,g=Sr(f),b=f==="0"?f:r<=0?te(f,o($n,I(r),"0")):W(r,Sr(c))<0?p(jr,0,g-r,f)+("."+p(jr,g-r,g,f)):te(i+".",p(rt,r,"0",c));return o(Wf,a,b)}),$c=If($(function(e,r){var n=Or(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Qe(t))})),Of=Nf($c),Jf=S(function(e,r,n){var a=o(Ut,10,I(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Of,t,n)}),fc=ou,sc=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(fc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return K(a);default:var l=e,u=i;e=l,r=u;continue e}}}),U=Te(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),er={$:-2},Wr=Te(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return L(U,0,r,n,L(U,1,v,s,m,d),L(U,1,i,c,l,u))}else return L(U,e,i,c,L(U,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,C=f.d,y=f.e,d=a.e;return L(U,0,v,s,L(U,1,g,b,C,y),L(U,1,r,n,d,t))}else return L(U,e,r,n,a,t)}),at=S(function(e,r,n){if(n.$===-2)return L(U,0,e,r,er,er);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(fc,e,t);switch(u){case 0:return L(Wr,a,t,i,p(at,e,r,c),l);case 1:return L(U,a,t,r,c,l);default:return L(Wr,a,t,i,c,p(at,e,r,l))}}),An=S(function(e,r,n){var a=p(at,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return L(U,1,t,i,c,l)}else{var u=a;return u}}),qf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},mc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,C=d.e,y=v.e;return L(U,0,f,g,L(U,1,n,a,L(U,0,i,c,l,u),b),L(U,1,s,m,C,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,m=T.c,d=T.d,y=T.e;return L(U,1,n,a,L(U,0,i,c,l,u),L(U,0,s,m,d,y))}else return e},ko=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,C=f.d,y=f.e;return L(U,0,i,c,L(U,1,u,v,s,m),L(U,1,n,a,d,L(U,0,g,b,C,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,d=_.e,A=e.e;A.a;var g=A.b,b=A.c,C=A.d,y=A.e;return L(U,1,n,a,L(U,0,i,c,T,d),L(U,0,g,b,C,y))}else return e},Zf=ia(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return L(U,n,l,u,v,L(U,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,ko(r)}else break e;else return c.a,c.d,ko(r);else break e;return r}}),Fn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(U,r,n,a,Fn(t),l);var u=mc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return L(Wr,v,s,m,Fn(d),f)}else return er}else return L(U,r,n,a,Fn(t),l)}else return er},cn=$(function(e,r){if(r.$===-2)return er;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(W(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(U,n,a,t,o(cn,e,i),c);var u=mc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return L(Wr,v,s,m,o(cn,e,d),f)}else return er}else return L(U,n,a,t,o(cn,e,i),c);else return o(Xf,e,Ct(Zf,e,r,n,a,t,i,c))}),Xf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Mr(e,a)){var l=qf(c);if(l.$===-1){var u=l.b,v=l.c;return L(Wr,n,u,v,i,Fn(c))}else return er}else return L(Wr,n,a,t,i,o(cn,e,c))}else return er}),Qf=$(function(e,r){var n=o(cn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return L(U,1,a,t,i,c)}else{var l=n;return l}}),xn=S(function(e,r,n){var a=r(o(sc,e,n));if(a.$)return o(Qf,e,n);var t=a.a;return p(An,e,t,n)}),Kf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(xn,r,Me(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(jf,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(xn,r,Me(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ef,k(i,c),p(Jf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(xn,r,Me(function(a){return a.$===3?Rf(n):a}));default:var r=e.a,n=e.b;return o(xn,r,Me(function(a){return a.$===2?Vf(n):a}))}},es=function(e){return Uf(Kf(e))},rs=$(function(e,r){return o(ue,es(e),r)}),ns=$(function(e,r){return qe(r,{eA:o(rs,e,r.eA)})}),as=$(function(e,r){var n=r.a,a=r.b;return o(Ee,n,qe(a,{B:o(tc,ns(e),a.B)}))}),ts=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),os=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ee,a,qe(t,{B:o(ts,o(e,i.a,r),i)}))}),is=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(Pf,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(as,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(os,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(Ff,l,a.G)})}}),cs=$(function(e,r){return o(Ee,sa,{B:k(e,r(e)),ab:x,T:x})}),ls=cv,Do=ls(x),Zn=Yu,fn=Hu,us=fv("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return xe({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",ce))},o(M,"devicePixelRatio",ce))},o(M,"dt",ce))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return xe({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Zn(fn)))},o(M,"left",Z))},o(M,"pressedKeys",Zn(fn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return xe({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",ce))},o(M,"y",ce))))},o(M,"screen",o(z,function(r){return o(z,function(n){return xe({eW:n,fS:r})},o(M,"height",ce))},o(M,"width",ce))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return xe({eE:r,eF:e})},o(M,"deltaX",ce))},o(M,"deltaY",ce))))),vs=function(e){return{$:4,a:e}},$s={$:0},fs=mi,Ne=$(function(e,r){return o(_i,e,fs(r))}),G=Ne("className"),ss=function(e){var r=e.b.B;return r.b},Xn=Ne("id"),ms=gv,Qn=ms,ds=hv,ee=ds,ps={$:1},bs=function(e){return{$:3,a:e}},gs=function(e){return{$:5,a:e}},Bo=Br("a"),Wt=Br("button"),Ao=function(e){return o(Ne,"href",yv(e))},hs=hr("clip-rule"),Ce=hr("d"),_s=hr("fill"),dc=gi("http://www.w3.org/2000/svg"),Cs=dc("svg"),ys=hr("viewBox"),Ss=o(_v,"http://www.w3.org/XML/1998/namespace","xml:space"),Fe=Cs(h([ys("0 0 24 24"),_s("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),Ss("http://www.w3.org/2000/svg")])),Ls=hr("fill-rule"),ye=dc("path"),wr={eD:Fe(h([o(ye,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),x)])),eQ:Fe(h([o(ye,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),x)])),eV:Fe(h([o(ye,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),x)])),fe:Fe(h([o(ye,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),x),o(ye,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),x)])),ff:Fe(h([o(ye,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),x),o(ye,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),x)])),fp:Fe(h([o(ye,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),x)])),fq:Fe(h([o(ye,h([Ce("M7 5V19L18 12L7 5Z")]),x)])),fr:Fe(h([o(ye,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),x)])),fs:Fe(h([o(ye,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),x)])),fM:Fe(h([o(ye,h([Ls("evenodd"),hs("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),x)])),fN:Fe(h([o(ye,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),x)])),f0:Fe(h([o(ye,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),x)]))},ws=function(e){return{$:0,a:e}},pc=hi,bc=$(function(e,r){return o(pc,e,ws(r))}),Ht=function(e){return o(bc,"click",xe(e))},Fo=Ne("target"),Ts=Ne("title"),tt=$(function(e,r){if(r.$===-2)return er;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return L(U,n,a,o(e,a,t),o(tt,e,i),o(tt,e,c))}),xs=Oa,vr=xs,Ps=function(e){return p(Bt,S(function(r,n,a){return o(B,n,a)}),x,e)},Ms=$(function(e,r){return{$:3,a:e,b:r}}),zs=$(function(e,r){return{$:2,a:e,b:r}}),ks=$(function(e,r){return{$:0,a:e,b:r}}),Ds=$(function(e,r){return{$:1,a:e,b:r}}),_r=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Bs=w(_r,0/255,0/255,0/255,1),As=mi,gc=$(function(e,r){return o(_i,e,As(r))}),Fs=gc("checked"),Ie=hu,Us=S(function(e,r,n){return te(o($n,e-Sr(n),ma(r)),n)}),hc=uu,_c=function(e){var r=function(n){return n<10?Pe(n):ma(cc(87+n))};return e<16?r(e):te(_c(e/16|0),r(o(hc,16,e)))},Rs=o(re,_c,o(Us,2,"0")),Yt=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Vs=function(e){var r=Yt(e),n=r.cN,a=r.cd,t=r.b5;return o(yr,"",o(B,"#",o(ue,o(re,Ie,Rs),h([n*255,a*255,t*255]))))},ot=Ne("htmlFor"),it=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Kn=$(function(e,r){if(r.$){var a=r.a;return be(a)}else{var n=r.a;return e(n)}}),Es=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),Cc=$(function(e,r){return p(fr,Es(e),x,r)}),yc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),js=Yv,Ns=Vu,Gs=$(function(e,r){if(r.$)return be(e);var n=r.a;return oe(n)}),Ws=Hv,Hs=function(e){return o(Ws,{ew:!1,fg:!1},e)},Sc=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return q},Ys=$(function(e,r){if(r.$){var a=r.a;return be(a)}else{var n=r.a;return oe(e(n))}}),Is=function(e){return{$:2,a:e}},Os=function(e){return{$:0,a:e}},Js=function(e){return{$:1,a:e}},Sa=$(function(e,r){return Qe(r)-Qe(e)}),La=S(function(e,r,n){var a=Qe(n);return W(Qe(e),a)<1&&W(a,Qe(r))<1}),qs=$(function(e,r){var n=function(t){return W(t,e)<0?oe(t):be(Js(r))},a=p(La,"0","9",r)?oe(o(Sa,"0",r)):p(La,"a","z",r)?oe(10+o(Sa,"a",r)):p(La,"A","Z",r)?oe(10+o(Sa,"A",r)):be(Os(r));return o(Kn,n,a)}),Lc=$(function(e,r){var n=Or(r);if(n.$===1)return oe(0);var a=n.a,t=a.a,i=a.b;return o(Kn,function(c){return o(Kn,function(l){return oe(c+l*e)},o(Lc,e,i))},o(qs,e,t))}),Zs=$(function(e,r){return 2<=e&&e<=36?o(Lc,e,nt(r)):be(Is(e))}),Xs=Zs(16),wc=S(function(e,r,n){return w(_r,e,r,n,1)}),Qs=F(function(e,r,n,a){return w(_r,e,r,n,a)}),_n=lu,Ks=$(function(e,r){var n=o(_n,10,e);return Ie(r*n)/n}),em=ku,rm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ic(n);if(a.b&&!a.b.b){var t=a.a;return Ns(h([t,t]))}else return n};return o(re,em,o(re,function(n){return o(Me,function(a){return p(js,1,a,n)},Hs(e))},o(re,it(Sc),o(re,Me(function(n){return n.fG}),o(re,Me(Cc(Lr)),o(re,Gs("Parsing hex regex failed"),Kn(function(n){var a=o(ue,o(re,r,o(re,Xs,Ys(af))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return oe(w(Qs,t/255,c/255,u/255,o(Ks,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return oe(p(wc,t/255,c/255,u/255))}else break e;return be("Parsing ints from hex failed")})))))))}(),ea=Br("input"),ct=Br("label"),lt=Ne("name"),Tc=$(function(e,r){return p(fr,M,r,e)}),nm=o(Tc,h(["target","checked"]),Z),am=function(e){return o(bc,"change",o(On,e,nm))},tm=function(e){return k(e,!0)},om=function(e){return{$:1,a:e}},im=$(function(e,r){return o(pc,e,om(r))}),cm=o(Tc,h(["target","value"]),fn),It=function(e){return o(im,"input",o(On,tm,o(On,e,cm)))},xc=Ne("max"),Pc=Ne("min"),Mc=function(e){return o(Ne,"step",e)},ra=Ne("type"),Ot=Ne("value"),Uo=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,x,h([o(ct,h([ot(r)]),h([o(J,h([G("relative w-full")]),h([o(J,h([G("inline-block")]),h([vr(r)])),o(J,h([G("inline-block float-right")]),h([vr(ne(n))]))]))])),o(ea,h([ra("range"),o(ee,"width","100%"),Xn(r),lt(r),Pc(ne(a)),xc(ne(t)),Ot(ne(n)),Mc(ne(i)),It(o(re,Gt,o(re,dr(42),c)))]),x)]))},lm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),um=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([G("h-12 py-4")]),h([o(ct,h([G("block"),ot(e)]),h([o(ea,h([G("relative bottom-[1px] align-middle mr-2"),ra("checkbox"),Xn(e),lt(e),am(Ms(e)),Fs(c)]),x),vr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Uo({cg:e,cs:i,cw:t,cA:ks(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Uo({cg:e,cs:i,cw:t,cA:o(re,Ie,Ds(e)),cW:1,c1:c});default:var c=r.a;return o(J,x,h([o(J,h([o(ee,"margin-bottom","6px")]),h([o(ct,h([ot(e)]),h([vr(e)]))])),o(ea,h([ra("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),Xn(e),lt(e),It(function(l){return o(zs,e,o(lm,Bs,rm(l)))}),Ot(Vs(c))]),x)]))}}),vm=function(e){return o(J,h([G("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([G("text-lg pb-2")]),h([vr(e.fh)])),o(J,h([G("pl-2 pr-2")]),Ps(o(tt,um,e.av)))]))},$m=function(e){return o(J,h([G("text-xs text-white60")]),o(ue,vm,e))},fm=function(e){return o(J,h([G("absolute left-[104px] bottom-2 text-sm text-white40")]),h([vr("clock: "+o($c,3,Jr(e).b7))]))},sm=function(e){e.a;var r=e.b.T;return o(Me,function(n){return Ie(60/(Jr(e).b7-n))},o(Me,o(re,cf,function(n){return n.b7}),Sc(o(nc,59,r))))},mm=function(e){return o(J,h([G("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=sm(e);if(r.$===1)return h([vr("... Fps")]);var n=r.a;return h([vr(Pe(n)+" Fps")])}())},dm=function(e){return{$:0,a:e}},pm=function(e){var r=e.b.T;return zr(r)},bm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return zr(r)+1+zr(n)},gm=function(e){return o(ea,h([G("absolute w-full"),ra("range"),Pc(Pe(0)),xc(Pe(bm(e)-1)),Ot(Pe(pm(e))),Mc(Pe(1)),It(o(re,Gt,o(re,dr(42),o(re,Ie,dm))))]),x)},Ro={$:1},Vo={$:3},Eo={$:2},ut=function(e){return!e.b},zc=gc("disabled"),wa=S(function(e,r,n){return o(Wt,h([G("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),G(n),zc(e),Ht(r)]),h([vr("REC")]))}),Ta=S(function(e,r,n){return o(Wt,h([G("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),zc(e),Ht(n)]),h([o(J,h([G("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),hm=function(e){var r=e.a,n=e.b.ab;return o(J,h([G("py-1")]),h([function(){switch(r.$){case 0:return p(wa,!1,Ro,"text-red-500 font-bold");case 1:return p(wa,!1,Eo,"text-white60 hover:text-white80 font-bold");default:return p(wa,!0,Eo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ta,ut(n),wr.fq,Vo);case 1:return p(Ta,ut(n),wr.fq,Vo);default:return p(Ta,!1,wr.fp,Ro)}}()]))},_m=function(e){return o(J,h([G("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([gm(e),hm(e),mm(e),fm(e)]))},Cm=function(e){var r=e.a;return Mr(r,sa)},ym=$(function(e,r){var n=Cm(r.G)?o(J,x,x):o(J,h([G("absolute pointer-events-none w-8 h-8"),o(ee,"left",ne(e.fs.fU+.5*e.cT.fS)+"px"),o(ee,"top",ne(-e.fs.fY+.5*e.cT.eW)+"px")]),h([o(J,h([G(e.fs.e4?"text-black80":"text-black40")]),h([wr.fs]))]));return o(J,x,h([n]))}),Sm=$(function(e,r){var n=o(Wt,h([G(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ht(ps),Ts("Distraction Free Mode")]),h([wr.f0])),a=40,t=260,i=o(J,h([G("absolute w-8 bottom-12")]),h([o(Bo,h([G("text-twitterBlue40 hover:text-twitterBlue"),Ao("https://twitter.com/AzizErkalSelman"),Fo("_blank")]),h([wr.fN]))])),c=80,l=o(J,h([G("absolute w-8 bottom-2")]),h([o(Bo,h([G("text-githubCat40 hover:text-githubCat"),Ao("https://github.com/erkal/elm-3d-playground-exploration"),Fo("_blank")]),h([wr.eQ]))])),u=e.cT.fS>640?E(e.cT.eW,a+t,e.cT.fS-(a+t)):E(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(J,h([G("fixed w-10 h-10 p-1")]),h([n])):o(J,x,h([o(J,h([G("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",ne(a)+"px")]),h([n,i,l])),o(J,h([G("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",ne(t)+"px"),o(ee,"height",ne(v)+"px")]),h([o(Qn,bs,$m(Jr(r.G).eA))])),o(J,h([G("absolute bottom-0"),o(ee,"left",ne(s)+"px"),o(ee,"height",ne(c)+"px"),o(ee,"width",ne(m)+"px")]),h([o(Qn,gs,_m(r.G))])),o(ym,e,r)]))}),Lm=S(function(e,r,n){var a=ss(n.G),t=Jr(n.G);return o(J,h([G("bg-black40"),G("select-none"),G("antialiased"),G("font-mono"),o(ee,"width",ne(t.cT.fS)+"px"),o(ee,"height",ne(t.cT.eW)+"px")]),h([o(J,h([G("fixed")]),h([o(Qn,Zi($s),o(e,t,a))])),o(J,h([Xn("gui")]),h([o(Sm,t,n),o(Qn,vs,o(r,t,a))]))]))}),wm=je(function(e,r,n,a,t,i){var c=$(function(u,v){return k(w(is,r,i,u,v),Do)}),l=function(u){var v=o(Xi,n,u.e1);return k({aL:u.e1.cT.fS<500,G:o(cs,v,a)},Do)};return wf({e0:l,fH:Zi(us(ff)),fO:c,fQ:o(Lm,e,t)})}),Tm=F(function(e,r,n,a){return pe(wm,e,r,n,a,$(function(t,i){return o(J,x,x)}),S(function(t,i,c){return c}))}),xm=S(function(e,r,n){return w(Tm,e,r,x,n)}),Pm=function(e){return{}},Mm=$(function(e,r){return r}),zm=mu,sr=_u,km=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Le,I(c),o(Le,I(i),I(t)));if(l){var u=t/l,v=i/l,s=c/l,m=sr(s*s+v*v+u*u);return K({fU:s/m,fY:v/m,c6:u/m})}else return q}),xa=function(e){return e},Jt=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Un=function(e){var r=e,n=o(Le,I(r.fU),o(Le,I(r.fY),I(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=sr(i*i+t*t+a*a);return K({fU:i/c,fY:t/c,c6:a/c})}else return q},vt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Dm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),kc=$(function(e,r){var n=e,a=r;return W(a,n)>0}),Bm=$(function(e,r){var n=e,a=r;return W(a,n)<0}),Am=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Fm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),Um=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Ze=0,Dc={fU:0,fY:0,c6:0},Rm=S(function(e,r,n){return o(it,function(a){var t=o(Am,o(Fm,a,r),r);return o(it,function(i){var c=o(Jt,r,e),l=o(Dm,n,c),u=o(kc,Ze,l)?c:o(Bm,Ze,l)?Um(c):Dc;return o(Me,function(v){return E(a,i,v)},Un(u))},Un(t))},Un(e))}),Vm=function(e){var r=e,n=I(r.c6),a=I(r.fY),t=I(r.fU);if(W(t,a)<1)if(W(t,n)<1){var i=sr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=sr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(W(a,n)<1){var i=sr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=sr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},qt=function(e){var r=Vm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return k(r,c)},tn=function(e){var r=e;return r},kr=function(e){return e},Em=$(function(e,r){var n=qt(e),a=n.a,t=n.b;return kr({cB:r,c4:a,c5:t,c7:e})}),jm=function(e){var r=o(vt,e.aR,e.dj),n=tn(e.ei),a=o(Jt,r,n),t=p(Rm,r,n,a);if(t.$){var v=Un(r);if(v.$){var m=qt(e.ei),d=m.a,f=m.b;return kr({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Em,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return kr({cB:e.dj,c4:u,c5:l,c7:c})}},qr={fU:0,fY:0,c6:0},Nm=function(e){return{$:0,a:e}},we=function(e){var r=e;return I(r)},Rn=function(e){var r=e;return .5*r},Gm=su,Wm=function(e){var r=e;return Gm(r)},Hm=function(e){var r=Rn(we(e.ej)),n=Wm(r);return{cM:Nm(n),c2:e.c2}},ir=function(e){return e},da=ir({fU:0,fY:1,c6:0}),sn=function(e){return e},Ym=function(e){var r=e.aR,n=e.dj,a=e.ei;return Hm({ej:sn(2*zm(.5)),c2:jm({dj:xa(n),aR:xa(r),ei:o(dr,da,o(km,qr,xa(a)))})})},Im=Ym({dj:{fU:0,fY:10,c6:30},aR:{fU:0,fY:10,c6:0},ei:{fU:0,fY:1,c6:0}}),Om=w(_r,114/255,159/255,207/255,1),Jm=w(_r,52/255,101/255,164/255,1),qm=w(_r,115/255,210/255,22/255,1),Bc=function(e){return{$:4,a:e}},Zm=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),pa=function(e){return Bc(o(Zm,e,x))},Xm=function(e){return pa(e)},Ac=Xm,$t=function(e){return{$:0,a:e}},Qm=$(function(e,r){return{$:0,a:e,b:r}}),ba=Jv,Km=function(e){var r=Yt(e),n=r.cN,a=r.cd,t=r.b5;return p(ba,n,a,t)},ed=function(e){return o(Qm,0,$t(Km(e)))},rd=function(e){return e},nd=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),ad=$(function(e,r){return rd(k(e,o(nd,r,e)))}),Fc=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),td=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(Fc,e(n),e(a),e(t))}),Ae=$(function(e,r){return{$:1,a:e,b:r}}),Uc=function(e){var r=e;return r},ae=$(function(e,r){var n=e,a=r;return o(Le,n,a)}),Vn=$(function(e,r){return W(e,r)<0?e:r}),le=$(function(e,r){var n=e,a=r;return o(Vn,n,a)}),Tr=function(e){var r=e;return r.fU},xr=function(e){var r=e;return r.fY},Pr=function(e){var r=e;return r.c6},od=$(function(e,r){var n=Pr(r),a=Pr(e),t=xr(r),i=xr(e),c=Tr(r),l=Tr(e);return{dO:o(ae,l,c),dP:o(ae,i,t),dQ:o(ae,a,n),dR:o(le,l,c),dS:o(le,i,t),dT:o(le,a,n)}}),id=function(e){var r=Uc(e),n=r.a,a=r.b;return o(od,n,a)},Rc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Vc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Ec={$:0},P=Ec,cd=$(function(e,r){switch(r.$){case 0:return o(U$,e,r);case 1:return o(R$,e,r);case 2:return o(V$,e,r);case 3:return o(E$,e,r);case 4:return o(j$,e,r);default:return o(N$,e,r)}}),ld=$(function(e,r){switch(r.$){case 0:return o(f$,e,r);case 1:return o(s$,e,r);case 2:return o(m$,e,r);case 3:return o(d$,e,r);case 4:return o(p$,e,r);case 5:return o(b$,e,r);case 6:return o(g$,e,r);case 7:return o(h$,e,r);default:return _$(e)}}),fe=$$,ga=function(e){var r=e;return r},jo={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ud=$(function(e,r){return{$:1,a:e,b:r}}),vd=ud({df:2,$7:0,dV:1}),No=vd(h([k({dw:0},{dw:1})])),Zt=Kv,Xt=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),$d=function(e){var r=e;return p(Xt,r.dR,r.dO,.5)},fd=function(e){var r=e;return p(Xt,r.dS,r.dP,.5)},sd=function(e){var r=e;return p(Xt,r.dT,r.dQ,.5)},ve=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),md=function(e){return p(ve,$d(e),fd(e),sd(e))},dd=function(e){var r=e;return r.dO},pd=function(e){var r=e;return r.dP},jc=function(e){var r=e;return r.dQ},bd=function(e){var r=e;return r.dR},gd=function(e){var r=e;return r.dS},Nc=function(e){var r=e;return r.dT},cr=$(function(e,r){var n=e,a=r;return a-n}),Gc=function(e){return E(o(cr,bd(e),dd(e)),o(cr,gd(e),pd(e)),o(cr,Nc(e),jc(e)))},Cn=function(e){var r=e;return r},R=function(e){var r=Gc(e),n=r.a,a=r.b,t=r.c;return{ey:Cn(md(e)),eS:n/2,eT:a/2,eU:t/2}},Wc=Qv,ze=function(e){return Wc(Cn(e))},hd=$(function(e,r){var n=id(r),a=R(n),t=Uc(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(Ae,a,ie(function(v,s,m,d,f,g,b,C){return L(fe,C,jo,Rc,No,{aw:l,du:ze(c),dv:ze(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(Ae,a,ie(function(s,m,d,f,g,b,C,y){return L(fe,y,jo,Vc,No,{aN:o(Zt,ga(u),l),du:ze(c),dv:ze(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return P;default:return P}}),_d=$(function(e,r){return o(hd,e,r)}),lr=function(e){return e},Pa=$(function(e,r){return o(_d,ed(e),o(ad,qr,o(td,lr,r)))}),Cd=w(_r,204/255,0/255,0/255,1),yd=Ac(h([o(Pa,Cd,E(100,0,0)),o(Pa,qm,E(0,100,0)),o(Pa,Jm,E(0,0,100))])),Sd=function(e){var r=e;return r},Ld=function(e){var r=e;return Sd(r.er)},Hc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),wd=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Yc=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Td=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),xd=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Pd=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Md=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ic=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(Md,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(Hc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(wd,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(Yc,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(Pd,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(Td,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(xd,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Oc={$:0},na=function(e){var r=e;return r},zd=ie(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=na(c(u)),m=o(le,s.dR,e),d=o(ae,s.dO,r),f=o(le,s.dS,n),g=o(ae,s.dP,a),b=o(le,s.dT,t),C=o(ae,s.dQ,i),y=c,_=v;e=m,r=d,n=f,a=g,t=b,i=C,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),kd=S(function(e,r,n){var a=na(e(r));return ca(zd,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Ma=$(function(e,r){var n=e,a=r;return W(a,n)<1}),Jc=function(e){return o(Ma,e.dO,e.dR)&&o(Ma,e.dP,e.dS)&&o(Ma,e.dQ,e.dT)?e:{dO:o(ae,e.dR,e.dO),dP:o(ae,e.dS,e.dP),dQ:o(ae,e.dT,e.dQ),dR:o(le,e.dR,e.dO),dS:o(le,e.dS,e.dP),dT:o(le,e.dT,e.dQ)}},aa=function(e){var r=e;return r},Dd=function(e){var r=aa(e),n=r.a,a=r.b,t=r.c,i=Tr(n),c=xr(n),l=Pr(n),u=Tr(a),v=xr(a),s=Pr(a),m=Tr(t),d=xr(t),f=Pr(t);return Jc({dO:o(ae,i,o(ae,u,m)),dP:o(ae,c,o(ae,v,d)),dQ:o(ae,l,o(ae,s,f)),dR:o(le,i,o(le,u,m)),dS:o(le,c,o(le,v,d)),dT:o(le,l,o(le,s,f))})},qc=function(e){var r=e;return r},Qt=function(e){return Wc(qc(e))},Zc=function(e){return e},Bd=$(function(e,r){var n=e,a=r,t=o(Le,I(a.fU),o(Le,I(a.fY),I(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=sr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Dc}),Ad=Bd(Zc(1)),Xc=S(function(e,r,n){var a=o(vt,r,n),t=o(vt,e,r);return Ad(o(Jt,a,t))}),Fd=function(e){var r=aa(e),n=r.a,a=r.b,t=r.c,i=Qt(p(Xc,n,a,t));return E({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},Ud=$(function(e,r){return{$:2,a:e,b:r}}),Rd=Ud({df:3,$7:0,dV:4}),Vd=function(e){if(e.b){var r=e.a,n=e.b,a=Rd(o(ue,Fd,e)),t=p(kd,Dd,r,n);return w(Hc,t,e,a,0)}else return Oc},Ue=S(function(e,r,n){return E(e,r,n)}),$e=$(function(e,r){var n=r;return e*n}),Qc=function(){var e=lr(1),r=lr(1),n=lr(1),a=o($e,-.5,e),t=o($e,-.5,r),i=o($e,-.5,n),c=p(ve,i,t,a),l=o($e,.5,e),u=p(ve,i,t,l),v=o($e,.5,r),s=p(ve,i,v,a),m=p(ve,i,v,l),d=o($e,.5,n),f=p(ve,d,t,a),g=p(ve,d,v,a),b=p(ve,d,t,l),C=p(ve,d,v,l);return Ic(Vd(h([p(Ue,c,g,f),p(Ue,c,s,g),p(Ue,u,b,C),p(Ue,u,C,m),p(Ue,f,g,C),p(Ue,f,C,b),p(Ue,c,m,s),p(Ue,c,u,m),p(Ue,c,f,b),p(Ue,c,b,u),p(Ue,s,C,g),p(Ue,s,m,C)])))}(),Pn={$:0},Ed=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),jd=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Qt(p(Xc,u,l,c)),s={o:v,bT:ze(u)},m={o:v,bT:ze(l)},d={o:v,bT:ze(c)};return o(B,s,o(B,m,o(B,d,n)))}),Nd=er,Kc=function(e){var r=e;return r.D},Gd=F(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return K(p(e,t,i,c))}),ft=4294967295>>>32-vn,st=nu,Wd=S(function(e,r,n){e:for(;;){var a=ft&r>>>e,t=o(st,a,n);if(t.$){var v=t.a;return o(st,ft&r,v)}else{var i=t.a,c=e-vn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Hd=function(e){return e>>>5<<5},Yd=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||W(e,n)>-1?q:W(e,Hd(n))>-1?K(o(st,ft&e,i)):K(p(Wd,a,e,t))}),el=function(e){var r=e;return r.ah},za=$(function(e,r){return o(Yd,e,el(r))}),Id=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(Gd,S(function(c,l,u){return E(c,l,u)}),o(za,a,e),o(za,t,e),o(za,i,e))};return o(Cc,r,Kc(e))},Od=S(function(e,r,n){e:for(;;){var a=o(Rt,De,e),t=a.a,i=a.b;if(W(Qa(t),De)<0)return o(qi,!0,{z:r,l:n,p:t});var c=i,l=o(B,Oi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),rl=function(e){return e.b?p(Od,e,x,0):Yi},Jd=S(function(e,r,n){return e(r(n))}),qd=$(function(e,r){return!o(oc,o(Jd,Tf,e),r)}),Zd=$(function(e,r){return p(fr,$(function(n,a){return e(n)?o(B,n,a):a}),x,r)}),Xd=function(e){var r=e.a;return r},Qd=$(function(e,r){var n=Xd(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&W(i,n)<0&&c>=0&&W(c,n)<0&&l>=0&&W(l,n)<0};return o(qd,a,r)?{D:r,ah:e}:{D:o(Zd,a,r),ah:e}}),Kd=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),nl=Kd({df:1,$7:3,dV:4}),mt=function(e){var r=e;return r},En=$(function(e,r){var n=mt(r),a=mt(e);return k(E(a.fU,a.fY,a.c6),E(n.fU,n.fY,n.c6))}),Go=p(ba,0,0,0),ka=je(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(sc,o(En,e,r),t);if(v.$){var m={o:Go,bT:ze(r)},d={o:Go,bT:ze(e)},f=u+1,g=u;return E(o(B,E(n,g,f),o(B,E(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return E(o(B,E(n,s,a),c),l,u)}}),e0=Te(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,C=e,y=r,_=v,T=a+3,A=pe(ka,s,d,f,b,r,pe(ka,m,s,g,f,r,pe(ka,d,m,b,g,r,t)));e=C,r=y,n=_,a=T,t=A;continue e}else{var H=t,N=H.a,j=H.b;return k(N,ke(j))}}),r0=Te(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,C=p(An,o(En,d,s),f,p(An,o(En,s,m),g,p(An,o(En,m,d),b,t))),y=o(B,E(b,g,f),a),_=e,T=v,A=n+3,H=y,N=C;e=_,r=T,n=A,a=H,t=N;continue e}else return E(a,t,n)}),Cr=S(function(e,r,n){var a=Id(n),t=p(fr,jd(r),x,a),i=L(r0,r,a,0,x,Nd),c=i.a,l=i.b,u=i.c,v=L(e0,r,l,a,0,E(c,x,u)),s=v.a,m=v.b,d=ut(m)?t:te(t,m);return p(Ed,e,o(Qd,rl(d),s),o(nl,d,s))}),n0=$(function(e,r){return r.b?p(fr,B,r,e):e}),ur=function(e){return p(fr,n0,x,e)},dt=function(e){return{D:o(ue,function(r){return E(3*r,3*r+1,3*r+2)},o(bn,0,zr(e)-1)),ah:rl(ur(o(ue,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},al=function(e){switch(e.$){case 0:return Pn;case 1:var a=e.a,r=e.b,n=o(ue,aa,r);return p(Cr,a,Lr,dt(n));case 2:var a=e.a,r=e.b,n=o(ue,aa,r);return p(Cr,a,Lr,dt(n));case 3:var a=e.a,t=e.b;return p(Cr,a,Lr,t);case 4:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 8:return Pn;case 9:return Pn;default:return Pn}},Wo=al(Qc),a0=function(e){var r=e;return r.aK},t0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},o0=1029,i0=function(e){return{$:5,a:e}},tl=function(e){var r=e;return i0(r)},c0=tl(o0),l0=1028,u0=tl(l0),rr=S(function(e,r,n){return r===1?e?o(B,c0,n):o(B,u0,n):n}),ol={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Da=F(function(e,r,n,a){return o(Ae,r,ie(function(t,i,c,l,u,v,s,m){return L(fe,p(rr,l,a,m),ol,t0,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),il={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nr=F(function(e,r,n,a){return o(Ae,r,ie(function(t,i,c,l,u,v,s,m){return L(fe,p(rr,l,a,m),il,Rc,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),cl=$(function(e,r){return{$:3,a:e,b:r}}),v0={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},ll={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},$0=F(function(e,r,n,a){return o(cl,n,ie(function(t,i,c,l,u,v,s,m){return L(fe,m,ll,v0,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ar=Te(function(e,r,n,a,t){return o(Ae,n,ie(function(i,c,l,u,v,s,m,d){return L(fe,p(rr,u,t,d),il,Vc,a,{aN:o(Zt,ga(r),e),b:l,c,d:s,e:i,f:v})}))}),f0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},s0=Te(function(e,r,n,a,t){return o(cl,a,ie(function(i,c,l,u,v,s,m,d){return L(fe,d,ll,f0,t,{aN:o(Zt,ga(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),m0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},ul={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Mn=F(function(e,r,n,a){return o(Ae,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return L(fe,p(rr,l,a,m),ul,m0,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),vl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},$l={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},d0=je(function(e,r,n,a,t,i){return o(Ae,a,ie(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return L(fe,p(rr,v,i,f),$l,vl,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),fl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},p0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ae,u,ie(function(m,d,f,g,b,C,y,_){var T=y.a,A=y.b;return L(fe,p(rr,g,s,_),$l,fl,v,{b4:e,b8:r,b9:i,ca:a,P:A,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cv:t,b:f,c:d,aW:c,d:C,cS:n,e:m,a$:l,f:b})}))}}}}}}}}}}},b0={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},zn=je(function(e,r,n,a,t,i){return o(Ae,a,ie(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return L(fe,p(rr,v,i,f),ul,b0,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),g0=function(e){return{$:0,a:e}},Ho=$(function(e,r){return{$:1,a:e,b:r}}),ln=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),Zr=qv,Xr=Zv,Qr=Xv,Kr=e$,h0=function(e){return w(Kr,Zr(e),Xr(e),Qr(e),1)},Kt=w(Kr,0,0,0,0),jn=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Kt)}else{var n=r.a;return k(e,h0(n))}}),_0=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(Ho,k(t,Kt),o(ln,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ho,o(jn,t,e),o(ln,t,r))}else{var a=n.a.a;return n.b.a,g0(a)}}),C0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),kn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),y0=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Nr=Iv,S0=function(e){return o(Nr,e,1)},pt=o(Nr,0,0),Ur=$(function(e,r){if(r.$){var a=r.a.C;return k(a,pt)}else{var n=r.a;return k(e,S0(n))}}),L0=F(function(e,r,n,a){var t=w(y0,e,r,n,a);if(t.a.$){var u=t.a.a.C;return w(kn,k(u,Kt),o(Ur,u,r),o(Ur,u,n),o(ln,u,a))}else if(t.b.$){var u=t.b.a.C;return w(kn,o(jn,u,e),k(u,pt),o(Ur,u,n),o(ln,u,a))}else if(t.c.$){var u=t.c.a.C;return w(kn,o(jn,u,e),o(Ur,u,r),k(u,pt),o(ln,u,a))}else if(t.d.$){var u=t.d.a.C;return w(kn,o(jn,u,e),o(Ur,u,r),o(Ur,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(C0,i,c,l)}}),w0={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},Ba=Te(function(e,r,n,a,t){return o(Ae,n,ie(function(i,c,l,u,v,s,m,d){return L(fe,p(rr,u,t,d),ol,w0,a,{b1:ga(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),sl={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},T0=F(function(e,r,n,a){return o(Ae,r,ie(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return L(fe,p(rr,l,a,m),sl,vl,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),x0=_t(function(e,r,n,a,t,i,c,l,u){return o(Ae,c,ie(function(v,s,m,d,f,g,b,C){var y=b.a,_=b.b;return L(fe,p(rr,d,u,C),sl,fl,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cv:t,b:m,c:s,aW:e,d:g,cS:n,e:v,a$:0,f})}))}),ml=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return w(Da,l,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(Da,l,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(Da,l,R(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(nr,n,R(t),c,a);case 8:var t=r.a,c=r.c;return w(nr,n,R(t),c,0);case 9:var t=r.a,c=r.c;return w(nr,n,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w($0,n,i,R(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return L(Ba,l,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Ba,l,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Ba,l,v,R(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ar,u,v,R(t),c,a);case 8:var t=r.a,c=r.c;return L(ar,u,v,R(t),c,0);case 9:var t=r.a,c=r.c;return L(ar,u,v,R(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(s0,u,v,i,R(t),c)}}case 2:e.a;var s=e.b,N=e.c,m=o(_0,s,N);if(m.$){var g=m.a,b=g.a;g.b;var C=m.b,y=C.a,_=C.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return w(T0,b,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return pe(d0,b,y,_,R(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return w(Mn,d,R(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return w(Mn,d,R(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return w(Mn,d,R(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(Mn,d,R(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,A=e.c,H=e.d,N=e.e,j=w(L0,T,A,H,N);if(j.$){var X=j.a,Q=X.a,he=X.b,_e=j.b,se=_e.a,me=_e.b,Ge=j.c,We=Ge.a,Ar=Ge.b,Fr=j.d,y=Fr.a,_=Fr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Xl(x0,Q,he,se,me,We,Ar,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return p0(Q)(he)(se)(me)(We)(Ar)(y)(_)(R(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var O=j.a,Y=j.b,V=j.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return pe(zn,O,Y,V,R(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return pe(zn,O,Y,V,R(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return pe(zn,O,Y,V,R(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return pe(zn,O,Y,V,R(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),Aa=function(e){var r=e;return r.fU},Fa=function(e){var r=e;return r.fY},Ua=function(e){var r=e;return r.c6},P0=function(e){var r=e,n=Ua(r.c7),a=Fa(r.c7),t=Aa(r.c7),i=Ua(r.c5),c=Fa(r.c5),l=Aa(r.c5),u=Ua(r.c4),v=Fa(r.c4),s=Aa(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ha=function(e){var r=e;return r.cB},Be=function(e){var r=e;return r},yn=function(e){var r=e;return r.c4},Sn=function(e){var r=e;return r.c5},Ln=function(e){var r=e;return r.c7},M0=function(e){var r=Cn(ha(e)),n=Be(Ln(e)),a=Be(Sn(e)),t=Be(yn(e));return{dp:P0(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},Vr=$(function(e,r){return{$:5,a:e,b:r}}),dl=$(function(e,r){return{dp:Mr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),eo=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(dl,a,e);return o(Vr,i,t);case 1:return o(Vr,e,n);case 3:return o(Vr,e,n);case 2:return o(Vr,e,n);default:return o(Vr,e,n)}}),pl=$(function(e,r){return o(eo,M0(e),r)}),bl=function(e){return{$:2,a:e}},z0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),k0=n$,D0=r$,Yo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=D0(a),g=f.fU,b=f.fY,C=f.c6,y=f.em,_=k0({em:y,fU:g*s,fY:b*m,c6:C*d});return ca(r,n,_,t,i,c,l,u,v)}}}}}}}}}},bt=$(function(e,r){switch(r.$){case 0:return Ec;case 5:var n=r.a,a=r.b;return o(Vr,n,o(bt,e,a));case 1:var t=r.a,i=r.b;return o(Ae,o(z0,e,t),o(Yo,e,i));case 3:return r;case 2:var i=r.a;return bl(o(Yo,e,i));default:var c=r.a;return Bc(o(ue,bt(e),c))}}),gl=$(function(e,r){var n=r;return o(bt,e,n)}),B0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Hr=519,hl=7683,_l=7682,ge=7680,A0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},ro=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bl),o(re,l(v.a8),o(re,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(A0,a,t,i)))}),F0=p(ro,{cp:0,cO:0,c3:15},{a8:ge,bl:Hr,bt:ge,bu:hl},{a8:ge,bl:Hr,bt:ge,bu:_l}),U0=p(ro,{cp:0,cO:0,c3:15},{a8:ge,bl:Hr,bt:ge,bu:_l},{a8:ge,bl:Hr,bt:ge,bu:hl}),R0=$(function(e,r){return e?o(B,U0,r):o(B,F0,r)}),V0={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},E0=function(e){if(e.$){var r=e.c;return K(ie(function(n,a,t,i,c,l,u,v){return L(fe,o(R0,i,v),V0,B0,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ta=function(e){var r=E0(e);if(r.$)return P;var n=r.a;return bl(n)},j0=F(function(e,r,n,a){var t=o(ml,n,Qc),i=function(){var s=k(e,r);return s.a?s.b?pa(h([t,ta(Wo)])):t:s.b?ta(Wo):P}(),c=a0(a),l=c.a,u=c.b,v=c.c;return o(pl,Ld(a),o(gl,E(l,u,v),i))}),N0=$(function(e,r){return w(j0,!0,!0,e,r)}),Ra=$(function(e,r){var n=e,a=r;return W(a,n)>-1}),Va=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),G0=ir({fU:-1,fY:0,c6:0}),W0=ir({fU:0,fY:-1,c6:0}),Cl=ir({fU:0,fY:0,c6:-1}),yl=ir({fU:1,fY:0,c6:0}),no=ir({fU:0,fY:0,c6:1}),H0=je(function(e,r,n,a,t,i){var c=o(Ra,n,i)?no:Cl,l=o(Ra,r,t)?da:W0,u=o(Ra,e,a)?yl:G0,v=E(we(o(cr,e,a)),we(o(cr,r,t)),we(o(cr,n,i))),s=p(ve,o(Va,e,a),o(Va,r,t),o(Va,n,i)),m=kr({cB:s,c4:u,c5:l,c7:c});return{er:m,aK:v}}),Y0=$(function(e,r){return pe(H0,Tr(e),xr(e),Pr(e),Tr(r),xr(r),Pr(r))}),gt=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),I0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=E(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(N0,e,o(Y0,p(gt,-c,-l,-u),p(gt,c,l,u)))}),O0=F(function(e,r,n,a){var t=E(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return w(_r,f,d,m,a)}),J0=S(function(e,r,n){return w(O0,e,r,n,1)}),q0=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Sl=S(function(e,r,n){return W(n,e)<0?e:W(n,r)>0?r:n}),Ea=function(e){return p(Sl,0,1,e<=.04045?e/12.92:o(_n,(e+.055)/1.055,2.4))},Z0=function(e){var r=Yt(e),n=r.cN,a=r.cd,t=r.b5;return p(ba,Ea(n),Ea(a),Ea(t))},Ll=function(e){return p(q0,0,$t(Z0(e)),$t(0))},X0=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),Q0=function(e){var r=qc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},K0=$(function(e,r){return o(eo,Q0(e),r)}),ep=$(function(e,r){return o(K0,e,r)}),rp=function(e){var r=e.a,n=e.b,a=e.c;return ep(p(X0,r,n,a))},wl=function(e){return rp(E(0,e,0))},Yr=$u,Tl=function(e){var r=e;return r.eH},xl=function(e){var r=e;return r.cB},mn=fu,np=$(function(e,r){var n=r,a=Cn(xl(e)),t=.5*n,i=Yr(t),c=mn(t),l=Be(Tl(e)),u=l.fU*c,v=i*u,s=u*u,m=l.fY*c,d=i*m,f=u*m,g=m*m,b=1-2*(s+g),C=l.c6*c,y=i*C,_=2*(f-y),T=2*(f+y),A=u*C,H=2*(A+d),N=2*(A-d),j=m*C,O=2*(j-v),Y=2*(j+v),V=C*C,X=1-2*(g+V),Q=1-2*(s+V);return{dp:!0,q:X,r:T,s:N,t:_,u:Q,v:Y,w:H,x:O,y:b,H:a.fU-X*a.fU-_*a.fY-H*a.c6,I:a.fY-T*a.fU-Q*a.fY-O*a.c6,J:a.c6-N*a.fU-Y*a.fY-b*a.c6,bX:1}}),ap=S(function(e,r,n){return o(eo,o(np,e,r),n)}),tp=S(function(e,r,n){return p(ap,e,r,n)}),Pl=$(function(e,r){return{eH:r,cB:e}}),ao=da,op=o(Pl,qr,ao),Io=$(function(e,r){return p(tp,op,sn(e),r)}),Ml=$(function(e,r){return(r-Ji(r/e)*e)/e}),ip=$(function(e,r){return 360*o(Ml,e,r)}),oa=vu,cp=function(e){return 2*oa*e},lp=F(function(e,r,n,a){return e+(r-e)*(1+Yr(cp(o(Ml,n,a))))/2}),up=$(function(e,r){var n=w(lp,.2,.8,10,e.b7);return o(Io,o(ip,1e3,e.b7),o(Io,.1*r,o(wl,r*1.1,o(I0,Ll(p(J0,n,.5,.5)),E(r,1,r)))))}),vp=function(e){return Ac(o(ue,up(e),o(bn,1,18)))},$p=S(function(e,r,n){return{k:o(Pl,e,r),e9:we(n.e9),fu:we(n.fu)}}),fp=function(e){var r=e;return r.k},Oo=function(e){var r=e;return Yr(r)},sp=$(function(e,r){var n=r;return n/e}),Jo=function(e){var r=e;return{fU:Yr(r),fY:mn(r)}},mp=$(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Qt(a),bT:ze(n)},r)}),dp=ia(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Qr(l.bT),s=Xr(l.bT),m=Zr(l.bT),d=o(Vn,e,m),f=o(Le,r,m),g=o(Vn,n,s),b=o(Le,a,s),C=o(Vn,t,v),y=o(Le,i,v),_=u;e=d,r=f,n=g,a=b,t=C,i=y,c=_;continue e}else return Jc({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),pp=$(function(e,r){var n=Qr(e.bT),a=Xr(e.bT),t=Zr(e.bT);return Ct(dp,t,t,a,a,n,n,r)}),bp=function(e){var r=p(H$,mp,x,el(e));if(r.b){var n=r.a,a=r.b,t=o(nl,r,Kc(e)),i=o(pp,n,a);return w(Yc,i,e,t,0)}else return Oc},qo=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),Zo=function(e){var r=e;return mn(r)},gp=function(e){return sn(2*oa*e)},hp=Lr,zl=yl,Xo=hp({cB:qr,c4:zl,c5:ao}),kl=function(){var e=72,r=o(sp,e,gp(1)),n=lr(1),a=tn(no),t=tn(Cl),i=lr(1),c=o($e,.5,i),l=p(ve,Ze,Ze,c),u=o($e,-.5,i),v=p(ve,Ze,Ze,u),s=function(f){var g=o($e,f,r),b=tn(o(qo,Xo,Jo(g))),C=o($e,Oo(g),n),y=o($e,Zo(g),n),_=p(ve,C,y,c),T=p(ve,C,y,u),A=o(hc,e,f+1),H=o($e,A,r),N=tn(o(qo,Xo,Jo(H))),j=o($e,Oo(H),n),O=o($e,Zo(H),n),Y=p(ve,j,O,u),V=p(ve,j,O,c);return h([E({o:t,bT:v},{o:t,bT:Y},{o:t,bT:T}),E({o:b,bT:T},{o:N,bT:Y},{o:N,bT:V}),E({o:b,bT:T},{o:N,bT:V},{o:b,bT:_}),E({o:a,bT:l},{o:a,bT:_},{o:a,bT:V})])},m=o(ue,s,o(bn,0,e-1)),d=dt(ur(m));return Ic(bp(d))}(),Qo=al(kl),_p=function(e){var r=Tl(e),n=qt(r),a=n.a,t=n.b;return kr({cB:xl(e),c4:a,c5:t,c7:r})},Cp=function(e){var r=e;return r.e9},yp=function(e){var r=e;return r.fu},Sp=F(function(e,r,n,a){var t=_p(fp(a)),i=o(ml,n,kl),c=function(){var m=k(e,r);return m.a?m.b?pa(h([i,ta(Qo)])):i:m.b?ta(Qo):P}(),l=yp(a),u=l,v=Cp(a),s=v;return o(pl,t,o(gl,E(u,u,s),c))}),Lp=$(function(e,r){return w(Sp,!0,!0,e,r)}),wp=S(function(e,r,n){return o(Lp,e,p($p,qr,da,{e9:lr(n),fu:lr(r)}))}),Tp=o(wl,-1.001,p(wp,Ll(p(wc,.294,.588,.478)),30,1)),xp=$(function(e,r){return h([yd,Tp,vp(e)])}),Pp=function(e){return e},Mp=function(e){return lr(.01*e)},Ko=function(e){return e},zp=function(e){return e},kp=function(e){return{$:0,a:e}},Dp=kp,Bp={$:3},Ap=Bp,Fp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Up=Fp,Rp=$(function(e,r){return ur(o(ue,e,r))}),Vp=function(e){return{$:1,a:e}},Ep=Vp,jp=function(e){return o(hr,"height",Pe(e))},Np=function(e){return pv(Cv(e))},Gp=Np,Wp=function(e){return{$:2,a:e}},Hp=Wp,Yp=function(e){return o(yr,"",e)},Ip=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ie(l*1e3)/1e3},c=function(l){return Ie(l*1e4)/100};return Yp(h(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},Op=S(function(e,r,n){return p(F$,e,r,n)}),ei=function(e){var r=e;return r},ja=w(Kr,1,1,1,1),Oe=S(function(e,r,n){return o(ue,function(a){return o(a,r,n)},e)}),Jp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qp=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Jp,n*a/t,n,n*(1-a-t)/t)}),Zp=function(e){var r=e.a,n=e.b,a=e.c;return p(ba,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},to=$(function(e,r){return Zp(o(qp,e,r))}),tr=i$,Xp=function(e){return tr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Na=Te(function(e,r,n,a,t){var i=a.dp?1:-1,c=w(Kr,a.bX,a.bX,a.bX,i);return pe(t,e,c,Xp(a),a.dp,r,n)}),Dl=je(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(dl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(B,L(Na,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,y=o(B,L(Na,e,r,n,a,C),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,T=o(B,L(Na,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:T};default:var A=t.a;return p(ua,w(Dl,e,r,n,a),i,A)}}),Qp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bl=Qp,oo=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Kp=function(e){var r=e.Z,n=e.W,a=e.V;return w(oo,518,r,n,a)},e1=$(function(e,r){return{$:6,a:e,b:r}}),r1=e1,Al=h([Kp({V:1,W:0,Z:!1}),w(Bl,!1,!1,!1,!1),o(r1,0,1)]),io=8,Fl=15,Gr=7681,n1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},a1=$(function(e,r){return{$:0,a:e,b:r}}),t1=a1({df:1,$7:0,dV:5}),o1=t1(h([{bT:o(Nr,-1,-1)},{bT:o(Nr,1,-1)},{bT:o(Nr,-1,1)},{bT:o(Nr,1,1)}])),i1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},co=function(e){return p(ro,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},lo=function(e){return L(fe,h([co(e),w(Bl,!1,!1,!1,!1)]),i1,n1,o1,{})},c1=lo({a8:Gr,cp:0,cO:io,bl:Hr,c3:Fl,bt:Gr,bu:Gr}),l1=516,ri=5386,u1=function(e){return o(_n,2,e+4)},Ul=function(e){return lo({a8:ge,cp:Fl,cO:io,bl:l1,c3:u1(e),bt:ri,bu:ri})},v1=S(function(e,r,n){return ur(h([p(Oe,e,n,Al),h([Ul(r),c1])]))}),$1=$(function(e,r){return ur(o(Ni,v1(e),r))}),f1=function(e){var r=e.Z,n=e.W,a=e.V;return w(oo,513,r,n,a)},s1=f1({V:1,W:0,Z:!0}),m1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},d1=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return m1(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},p1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ni=$(function(e,r){var n=e,a=r;return p(p1,32774,n,a)}),b1=1,ai=771,g1=770,uo=d1({bv:0,aH:o(ni,b1,ai),by:0,bA:o(ni,g1,ai),bF:0,bV:0}),Rr=h([s1,uo]),ti=function(e){var r=e;return ha(r)},h1=function(e){return e},_1=function(e){return kr({cB:h1({fU:e.H,fY:e.I,c6:e.J}),c4:ir({fU:e.q,fY:e.r,c6:e.s}),c5:ir({fU:e.t,fY:e.u,c6:e.v}),c7:ir({fU:e.w,fY:e.x,c6:e.y})})},Ga=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Rl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Vl=$(function(e,r){return{cB:o(Rl,e,ha(r)),c4:o(Ga,e,yn(r)),c5:o(Ga,e,Sn(r)),c7:o(Ga,e,Ln(r))}}),C1=$(function(e,r){var n=na(r),a=na(e);return{dO:o(ae,a.dO,n.dO),dP:o(ae,a.dP,n.dP),dQ:o(ae,a.dQ,n.dQ),dR:o(le,a.dR,n.dR),dS:o(le,a.dS,n.dS),dT:o(le,a.dT,n.dT)}}),y1=function(e){var r=e;return E(r.fU,r.fY,r.c6)},Nn=$(function(e,r){var n=e,a=r;return a+n}),S1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Rn(we(a)),c=Rn(we(n)),l=Rn(we(t)),u=y1(r),v=u.a,s=u.b,m=u.c;return{dO:o(Nn,c,v),dP:o(Nn,i,s),dQ:o(Nn,l,m),dR:o(cr,c,v),dS:o(cr,i,s),dT:o(cr,l,m)}}),oi=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=Be(Ln(e)),d=I(l*m.fU)+I(c*m.fY)+I(i*m.c6),f=Be(Sn(e)),g=I(l*f.fU)+I(c*f.fY)+I(i*f.c6),b=Be(yn(e)),C=I(l*b.fU)+I(c*b.fY)+I(i*b.c6),y=o(S1,E(C,g,d),o(Rl,e,p(gt,s,v,u)));if(a.$)return K(y);var _=a.a;return K(o(C1,_,y))}),ht=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 1:var c=t.a,l=w(oi,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 2:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 3:var c=t.a,l=w(oi,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 4:var u=t.a,f=e,g=r,b=w(ht,e,r,n,u),C=i;e=f,r=g,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(Vl,_1(v),e),d=r*v.bX,f=e,g=r,b=w(ht,m,d,n,h([s])),C=i;e=f,r=g,n=b,a=C;continue e}}else return n}),L1={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},w1=function(e){var r=e;return r},ii=lo({a8:Gr,cp:0,cO:io,bl:Hr,c3:255,bt:Gr,bu:Gr}),T1=function(e){var r=e,n=o(Le,I(r.fU),o(Le,I(r.fY),I(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=sr(i*i+t*t+a*a);return c*n}else return Ze},Se={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},Re=$(function(e,r){var n=e,a=r;return tr({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),on=k({bd:o(Re,Se,Se),bK:o(Re,Se,Se),bL:o(Re,Se,Se),bM:o(Re,Se,Se)},w(Kr,0,0,0,0)),ci=function(e){var r=e;return-r},El=514,jl=function(e){var r=e.Z,n=e.W,a=e.V;return w(oo,515,r,n,a)},Nl=240,x1=h([jl({V:1,W:0,Z:!0}),co({a8:ge,cp:Nl,cO:0,bl:El,c3:0,bt:ge,bu:ge}),uo]),P1=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=we(a),l=c,u=we(t),v=u,s=n.cM;if(s.$){var d=s.a;return et(v)?tr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):tr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return et(v)?tr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):tr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Dn=$(function(e,r){return(1&e>>r)===1?0:1}),M1=function(e){return h([jl({V:1,W:0,Z:!0}),co({a8:ge,cp:Nl,cO:e,bl:El,c3:0,bt:ge,bu:ge}),uo])},z1=S(function(e,r,n){return ur(o(ue,function(a){var t=a<<4,i=w(Kr,o(Dn,a,0),o(Dn,a,1),o(Dn,a,2),o(Dn,a,3));return p(Oe,e,k(r,i),M1(t))},o(bn,1,o(_n,2,n)-1)))}),dn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},k1=c$,li=function(e){var r=e;return dn(Ln(r))},Gl=no,D1={cB:qr,c4:zl,c5:ao,c7:Gl},B1=function(e){var r=Cn(ha(e)),n=Be(Ln(e)),a=Be(Sn(e)),t=Be(yn(e));return tr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},A1=$(function(e,r){var n=r;return B1(o(Vl,n,e))}),F1=function(e){return o(A1,D1,e)},U1=function(e){var r=e;return r.c2},R1=function(e){var r=e;return yn(r)},V1=function(e){var r=e;return Sn(r)},E1=function(e){var r=U1(e.ev),n=kr({cB:ti(r),c4:R1(r),c5:V1(r),c7:dn(li(r))}),a=pa(e.aP),t=a,i=w(ht,n,1,q,h([t]));if(i.$===1)return x;var c=i.a,l=F1(r),u=o($e,.99,o(ae,we(e.aJ),ci(jc(c)))),v=Gc(c),s=v.a,m=v.b,d=v.c,f=T1(p(Fc,s,m,d)),g=o($e,1.01,o(Nn,f,ci(Nc(c)))),b=o(P1,e.ev,{eq:e.eq,eP:g,fi:u}),C=k1(b).dM,y=C?Be(dn(li(r))):mt(ti(r)),_=function(){var se=e.bZ;switch(se.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var me=se.a;return k(3,me);case 4:var me=se.a;return k(4,me);default:return k(5,0)}}(),T=_.a,A=_.b,H=e.bD,N=H,j=o(to,N,e.b$),O=j,Y=tr({dx:0,dy:y.fU,dz:Zr(O),dA:e.ec,dB:0,dC:y.fY,dD:Xr(O),dE:w1(f),dF:0,dG:y.c6,dH:Qr(O),dI:T,dJ:0,dK:C,dL:0,dM:A}),V=pe(Dl,Y,l,b,L1,t,{M:x,U:x,fB:x}),X=e.bJ;switch(X.$){case 0:var Q=X.a;return ur(h([p(Oe,V.M,k(Q,ja),Rr),p(Oe,V.U,on,Rr)]));case 1:var Q=X.a;return ur(h([p(Oe,V.M,on,Rr),h([ii]),p(Oe,V.fB,Q.bd,Al),h([Ul(0)]),p(Oe,V.M,k(Q,ja),x1),p(Oe,V.U,on,Rr)]));default:var he=X.a,_e=X.b;return ur(h([p(Oe,V.M,k(_e,ja),Rr),h([ii]),o($1,V.fB,he),p(z1,V.M,_e,zr(he)),p(Oe,V.U,on,Rr)]))}},j1=function(e){return o(hr,"width",Pe(e))},N1=$(function(e,r){var n=h([Ep(1),Hp(0),Dp(!0),w(Up,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return E(n,"0",1);case 1:return E(o(B,Ap,n),"1",1);default:var A=T.a;return E(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=ei(v),m=o(ee,"height",Pe(s)+"px"),d=ei(u),f=d/s,g=o(Rp,function(T){return E1({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(ee,"width",Pe(d)+"px"),C=e.aI,y=C,_=Ip(y);return p(Gp,"div",h([o(ee,"padding","0px"),b,m]),h([k(i,p(Op,t,h([j1(Ie(d*c)),jp(Ie(s*c)),b,m,o(ee,"display","block"),o(ee,"background-color",_)]),g))]))}),G1=function(e){return o(N1,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Wl=function(e){return e},ui=Wl({fU:.31271,fY:.32902}),W1=$(function(e,r){var n=e,a=Be(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(to,r.ce,r.b6),u=l;return{by:Qr(u),ex:n,bF:Xr(u),cK:0,bV:Zr(u),c_:1,fU:-t,fY:-i,c6:-c}}),H1=function(e){return e},Y1=function(e){return H1(1.2*o(_n,2,e))},Wa=function(e){return e},I1={$:0},O1=I1,vi=function(e){var r=e;return r},J1=function(e){e:for(;;){if(Mr(e.e2,Ze)&&Mr(e.e3,Ze))return Se;if(o(kc,we(e.e2),we(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:dn(e.ei)};e=r;continue e}else{var n=I(vi(e.e3)/oa),a=I(vi(e.e2)/oa),t=Be(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(to,Zc(1),e.b6),v=u;return{by:a*Qr(v),ex:!1,bF:a*Xr(v),cK:n/a,bV:a*Zr(v),c_:3,fU:i,fY:c,c6:l}}}},$i=function(e){return J1({b6:e.b6,e2:e.ce,e3:Ze,ei:e.ei})},q1=function(e){var r=e;return r},Hl=function(e){var r=p(Sl,1667,25e3,q1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Wl({fU:n,fY:a})},Yl=function(e){return e},Z1=Hl(Yl(12e3)),X1=Hl(Yl(5600)),Q1=function(e){return{$:2,a:e}},K1=function(e){return Q1(e)},e3=$(function(e,r){return{$:2,a:e,b:r}}),Il=function(e){return{$:0,a:e}},Bn=function(e){var r=e;return r},r3=function(e){var r=e;return r.ex},n3=Il(on.a),a3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(B,a,i),c):k(i,o(B,a,c))});return p(fr,n,k(x,x),r)}),t3=function(e){var r=e;return tr({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},o3=ie(function(e,r,n,a,t,i,c,l){var u=o(a3,r3,h([Bn(e),Bn(r),Bn(n),Bn(a)])),v=u.a,s=u.b;if(v.b){var m=te(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,C=b.a,y=b.b,_=y.a;return o(e3,o(ue,t3,v),{bd:o(Re,d,g),bK:o(Re,C,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return n3}else return Il({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),i3=S(function(e,r,n){return ca(o3,e,r,n,Se,Se,Se,Se,Se)}),c3=function(e){var r=o(W1,zp(e.fB),{b6:X1,eH:e.fJ,ce:Wa(8e4)}),n=$i({b6:Z1,ce:Wa(2e4),ei:e.ei}),a=$i({b6:ui,ce:Wa(15e3),ei:dn(e.ei)}),t=p(i3,r,n,a);return G1({b0:K1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Y1(15),bJ:t,bZ:O1,b$:ui})},l3=$(function(e,r){var n=e,a=r,t=Yr(a);return{fU:t*Yr(n),fY:t*mn(n),c6:mn(a)}}),u3=$(function(e,r){return c3({aI:Pp(e.es),ev:e.ev,aJ:Mp(.5),cb:e.cb,aK:k(Ko(Ie(e.cT.fS)),Ko(Ie(e.cT.eW))),aP:r,fB:!0,fJ:o(l3,sn(e.fI),sn(e.fK)),ei:Gl})}),v3=$(function(e,r){return o(u3,{es:Om,ev:Im,cb:e.cb,cT:e.cT,fI:0,fK:0},o(xp,e,r))}),$3=p(xm,v3,Mm,Pm);const f3={Main:{init:$3(o(z,function(e){return xe({e1:e})},o(M,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return xe({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",ce))},o(M,"devicePixelRatio",ce))},o(M,"dt",ce))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return xe({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",Zn(fn)))},o(M,"left",Z))},o(M,"pressedKeys",Zn(fn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return xe({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",ce))},o(M,"y",ce))))},o(M,"screen",o(z,function(r){return o(z,function(n){return xe({eW:n,fS:r})},o(M,"height",ce))},o(M,"width",ce))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return xe({eE:r,eF:e})},o(M,"deltaX",ce))},o(M,"deltaY",ce)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},s3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-D.clock;b<.009||(D.dt=b,D.clock=g,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},m3=()=>{Ha("pointerdown"),Ha("wheel"),Ha("keydown")},Ha=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},d3=f3.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});m3();s3(d3);
