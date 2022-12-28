(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function dr(e,r,n){return n.a=e,n.f=r,n}function $(e){return dr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return dr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function j(e){return dr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function xe(e){return dr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return dr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function la(e){return dr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ne(e){return dr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function gt(e){return dr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ce(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ht(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function _t(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Kl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var eu=[];function ru(e){return e.length}var nu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),au=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),tu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ou=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+iu()),r});function iu(e){return"<internals>"}function Zr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function zr(e,r){for(var n,a=[],t=Ua(e,r,0,a);t&&(n=a.pop());t=Ua(n.a,n.b,0,a));return t}function Ua(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Zr(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=Mo(e),r=Mo(r));for(var t in e)if(!Ua(e[t],r[t],n+1,a))return!1;return!0}$(zr);$(function(e,r){return!zr(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var cu=$(function(e,r){var n=U(e,r);return n<0?qi:n?q$:Ji}),yn=0;function T(e,r){return{a:e,b:r}}function N(e,r,n){return{a:e,b:r,c:n}}function Ee(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ie);function ie(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Qe(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Qe(e.a,r);return n}var P={$:0};function Qe(e,r){return{$:1,a:e,b:r}}var lu=$(Qe);function h(e){for(var r=P,n=e.length;n--;)r=Qe(e[n],r);return r}function ua(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var uu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});j(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});xe(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(ua(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return h(ua(r).sort(function(n,a){var t=o(e,n,a);return t===Ji?0:t===qi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var vu=$(Math.pow);$(function(e,r){return r%e});var $u=$(function(e,r){var n=r%e;return e===0?Zr(11):n>0&&e<0||n<0&&e>0?n+e:n}),fu=Math.PI,su=Math.cos,mu=Math.sin,du=Math.tan,pu=Math.acos,bu=Math.atan,gu=$(Math.atan2);function hu(e){return e}function _u(e){return e===1/0||e===-1/0}var Cu=Math.ceil,yu=Math.floor,xu=Math.round,wu=Math.sqrt,po=Math.log,Su=isNaN;function Lu(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Pu=$(function(e,r){return e+r});function Tu(e){var r=e.charCodeAt(0);return isNaN(r)?Z:ae(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function zu(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Mu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var ku=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Du=$(function(e,r){return r.split(e)}),Au=$(function(e,r){return r.join(e)}),Bu=x(function(e,r,n){return n.slice(e,r)});function Vu(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Fu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Eu=$(function(e,r){return r.indexOf(e)>-1}),Ru=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Nu=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function xi(e){return e+""}function ju(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Z;r=10*r+i-48}return t==a?Z:ae(n==45?-r:r)}function Gu(e){if(e.length===0||/[\sxbo]/.test(e))return Z;var r=+e;return r===r?ae(r):Z}function Wu(e){return ua(e).join("")}function Hu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Xu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Iu(e){return{$:0,a:e}}function Ct(e){return{$:2,b:e}}var Ou=Ct(function(e){return typeof e=="boolean"?ce(e):Ue("a BOOL",e)}),Uu=Ct(function(e){return typeof e=="number"?ce(e):Ue("a FLOAT",e)}),Ju=Ct(function(e){return typeof e=="string"?ce(e):e instanceof String?ce(e+""):Ue("a STRING",e)});function qu(e){return{$:3,b:e}}var Zu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function pr(e,r){return{$:9,f:e,g:r}}var Yu=$(function(e,r){return{$:10,b:r,h:e}}),Qu=$(function(e,r){return pr(e,[r])}),Ku=x(function(e,r,n){return pr(e,[r,n])});j(function(e,r,n,a){return pr(e,[r,n,a])});xe(function(e,r,n,a,t){return pr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return pr(e,[r,n,a,t,i])});la(function(e,r,n,a,t,i,c){return pr(e,[r,n,a,t,i,c])});ne(function(e,r,n,a,t,i,c,l){return pr(e,[r,n,a,t,i,c,l])});gt(function(e,r,n,a,t,i,c,l,u){return pr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Be(e,n)}catch(a){return me(o(At,"This is not valid JSON! "+a.message,r))}});var wi=$(function(e,r){return Be(e,r)});function Be(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ce(e.c):Ue("null",r);case 3:return Pn(r)?bo(e.b,r,h):Ue("a LIST",r);case 4:return Pn(r)?bo(e.b,r,ev):Ue("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ue("an OBJECT with a field named `"+n+"`",r);var v=Be(e.b,r[n]);return je(v)?v:me(o(ko,n,v.a));case 7:var a=e.e;if(!Pn(r))return Ue("an ARRAY",r);if(a>=r.length)return Ue("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Be(e.b,r[a]);return je(v)?v:me(o(Zi,a,v.a));case 8:if(typeof r!="object"||r===null||Pn(r))return Ue("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Be(e.b,r[i]);if(!je(v))return me(o(ko,i,v.a));t=Qe(T(i,v.a),t)}return ce(ze(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Be(l[u],r);if(!je(v))return v;c=c(v.a)}return ce(c);case 10:var v=Be(e.b,r);return je(v)?Be(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Be(m.a,r);if(je(v))return v;s=Qe(v.a,s)}return me(Z$(ze(s)));case 1:return me(o(At,e.a,r));case 0:return ce(e.a)}}function bo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Be(e,r[i]);if(!je(c))return me(o(Zi,i,c.a));t[i]=c.a}return ce(n(t))}function Pn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function ev(e){return o(df,e.length,function(r){return e[r]})}function Ue(e,r){return me(o(At,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&go(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return go(e.g,r.g)}}function go(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var rv=$(function(e,r){return JSON.stringify(r,null,e)+""});function Si(e){return e}x(function(e,r,n){return n[e]=r,n});function Ar(e){return{$:0,a:e}}function nv(e){return{$:1,a:e}}function ir(e){return{$:2,b:e,c:null}}var Ja=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function av(e){return{$:5,b:e}}var tv=0;function yt(e){var r={$:0,e:tv++,f:e,g:null,h:[]};return xt(r),r}function Li(e){return ir(function(r){r(Ar(yt(e)))})}function Pi(e,r){e.h.push(r),xt(e)}var ov=$(function(e,r){return ir(function(n){Pi(e,r),n(Ar(yn))})}),_a=!1,ho=[];function xt(e){if(ho.push(e),!_a){for(_a=!0;e=ho.shift();)iv(e);_a=!1}}function iv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,xt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}j(function(e,r,n,a){return wt(r,a,e.e3,e.fR,e.fK,function(){return function(){}})});function wt(e,r,n,a,t,i){var c=o(wi,e,r?r.flags:void 0);je(c)||Zr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=cv(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),Co(l,b.b,t(v))}return Co(l,u.b,t(v)),m?{ports:m}:{}}var qe={};function cv(e,r){var n;for(var a in qe){var t=qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=uv(t,r)}return n}function lv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function uv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Ja,l,av(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=yt(o(Ja,l,e.b))}var vv=$(function(e,r){return ir(function(n){e.g(r),n(Ar(yn))})});$(function(e,r){return o(ov,e.h,{$:0,a:r})});function Ti(e){return function(r){return{$:1,k:e,l:r}}}function $v(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var _o=[],Ca=!1;function Co(e,r,n){if(_o.push({p:e,q:r,r:n}),!Ca){Ca=!0;for(var a;a=_o.shift();)fv(a.p,a.q,a.r);Ca=!1}}function fv(e,r,n){var a={};On(!0,r,a,null),On(!1,n,a,null);for(var t in e)Pi(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function On(e,r,n,a){switch(r.$){case 1:var t=r.k,i=sv(e,t,a,r.l);n[t]=mv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)On(e,c.a,n,a);return;case 3:On(e,r.o,n,{s:r.n,t:a});return}}function sv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?qe[r].e:qe[r].f;return o(i,t,a)}function mv(e,r,n){return n=n||{i:P,j:P},e?n.i=Qe(r,n.i):n.j=Qe(r,n.j),n}function dv(e){qe[e]&&Zr(3)}$(function(e,r){return r});function pv(e,r){return dv(e),qe[e]={f:bv,u:r,a:gv},Ti(e)}var bv=$(function(e,r){return function(n){return e(r(n))}});function gv(e,r){var n=P,a=qe[e].u,t=Ar(null);qe[e].b=t,qe[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(wi,a,c);je(l)||Zr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Un,ar=typeof document<"u"?document:{};function St(e,r){e.appendChild(r)}j(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(fr(e,function(){}),t),{}});function qa(e){return{$:0,a:e}}var zi=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Lt(n),e:t,f:e,b:i}})}),Br=zi(void 0),hv=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Lt(n),e:t,f:e,b:i}})}),_v=hv(void 0);function Cv(e,r,n,a){return{$:3,d:Lt(e),g:r,h:n,i:a}}var yv=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function br(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return br([e,r],function(){return e(r)})});x(function(e,r,n){return br([e,r,n],function(){return o(e,r,n)})});j(function(e,r,n,a){return br([e,r,n,a],function(){return p(e,r,n,a)})});xe(function(e,r,n,a,t){return br([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return br([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});la(function(e,r,n,a,t,i,c){return br([e,r,n,a,t,i,c],function(){return Ce(e,r,n,a,t,i,c)})});ne(function(e,r,n,a,t,i,c,l){return br([e,r,n,a,t,i,c,l],function(){return ht(e,r,n,a,t,i,c,l)})});gt(function(e,r,n,a,t,i,c,l,u){return br([e,r,n,a,t,i,c,l,u],function(){return _t(e,r,n,a,t,i,c,l,u)})});var Mi=$(function(e,r){return{$:"a0",n:e,o:r}}),xv=$(function(e,r){return{$:"a1",n:e,o:r}}),ki=$(function(e,r){return{$:"a2",n:e,o:r}}),gr=$(function(e,r){return{$:"a3",n:e,o:r}}),wv=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Sv(e){return e=="script"?"p":e}function Lv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Mi,r.n,Pv(e,r.o)):r});function Pv(e,r){var n=Rt(r);return{$:r.$,a:n?p(pf,n<3?Tv:zv,Se(e),r.a):o(Yn,e,r.a)}}var Tv=$(function(e,r){return T(e(r.a),r.b)}),zv=$(function(e,r){return{al:e(r.al),cX:r.cX,cM:r.cM}});function Lt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?yo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?yo(c,t,i):c[t]=i}return r}function yo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function fr(e,r){var n=e.$;if(n===5)return fr(e.k||(e.k=e.m()),r);if(n===0)return ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=fr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Za(c,r,e.d),c}var c=e.f?ar.createElementNS(e.f,e.c):ar.createElement(e.c);Un&&e.c=="a"&&c.addEventListener("click",Un(c)),Za(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)St(c,fr(n===1?l[u]:l[u].b,r));return c}function Za(e,r,n){for(var a in n){var t=n[a];a==="a1"?Mv(e,t):a==="a0"?Av(e,r,t):a==="a3"?kv(e,t):a==="a4"?Dv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Mv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function kv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Dv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Av(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Bv(r,i),e.addEventListener(t,c,Pt&&{passive:Rt(i)<2}),a[t]=c}}var Pt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Pt=!0}}))}catch{}function Bv(e,r){function n(a){var t=n.q,i=Be(t.a,a);if(!!je(i)){for(var c=Rt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cM)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function Vv(e,r){return e.$==r.$&&Gr(e.a,r.a)}function Di(e,r){var n=[];return Ge(e,r,n,0),n}function se(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ge(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Hv(r),i=1;else{se(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ge(e.k,r.k,s,0),s.length>0&&se(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){se(n,0,a,r);return}(f?!Fv(m,d):m!==d)&&se(n,2,a,d),Ge(g,b,n,a+1);return;case 0:e.a!==r.a&&se(n,3,a,r.a);return;case 1:xo(e,r,n,a,Ev);return;case 2:xo(e,r,n,a,Rv);return;case 3:if(e.h!==r.h){se(n,0,a,r);return}var C=Tt(e.d,r.d);C&&se(n,4,a,C);var y=r.i(e.g,r.g);y&&se(n,5,a,y);return}}}function Fv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function xo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){se(n,0,a,r);return}var i=Tt(e.d,r.d);i&&se(n,4,a,i),t(e,r,n,a)}function Tt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Tt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Vv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Ev(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?se(n,6,a,{v:l,i:c-l}):c<l&&se(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ge(s,i[v],n,++a),a+=s.b||0}}function Rv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],C=g.a,y=b.a,_=g.b,w=b.b,z=void 0,G=void 0;if(C===y){f++,Ge(_,w,t,f),f+=_.b||0,m++,d++;continue}var E=l[m+1],B=u[d+1];if(E){var R=E.a,W=E.b;G=y===R}if(B){var A=B.a,O=B.b;z=C===A}if(z&&G){f++,Ge(_,O,t,f),ln(i,t,C,w,d,c),f+=_.b||0,f++,un(i,t,C,W,f),f+=W.b||0,m+=2,d+=2;continue}if(z){f++,ln(i,t,y,w,d,c),Ge(_,O,t,f),f+=_.b||0,m+=1,d+=2;continue}if(G){f++,un(i,t,C,_,f),f+=_.b||0,f++,Ge(W,w,t,f),f+=W.b||0,m+=2,d+=1;continue}if(E&&R===A){f++,un(i,t,C,_,f),ln(i,t,y,w,d,c),f+=_.b||0,f++,Ge(W,O,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;un(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var q=q||[],b=u[d];ln(i,t,b.a,b.b,void 0,q),d++}(t.length>0||c.length>0||q)&&se(n,8,a,{w:t,x:c,y:q})}var Ai="_elmW6BL";function ln(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ge(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ln(e,r,n+Ai,a,t,i)}function un(e,r,n,a,t){var i=e[n];if(!i){var c=se(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ge(a,i.z,l,t),se(r,9,t,{w:l,A:i});return}un(e,r,n+Ai,a,t)}function Bi(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Bi(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&vn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&vn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return vn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,C=0;C<g.length;C++){t++;var y=d===1?g[C]:g[C].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=vn(b[C],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Vi(e,r,n,a){return n.length===0?e:(Bi(e,r,n,a),Jn(e,n))}function Jn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Nv(t,a);t===e&&(e=i)}return e}function Nv(e,r){switch(r.$){case 0:return jv(e,r.s,r.u);case 4:return Za(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Jn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(fr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Jn(e,i.w),e;case 8:return Gv(e,r);case 5:return r.s(e);default:Zr(10)}}function jv(e,r,n){var a=e.parentNode,t=fr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Gv(e,r){var n=r.s,a=Wv(n.y,r);e=Jn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:fr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&St(e,a),e}function Wv(e,r){if(!!e){for(var n=ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;St(n,i.c===2?i.s:fr(i.z,r.u))}return n}}function zt(e){if(e.nodeType===3)return qa(e.textContent);if(e.nodeType!==1)return qa("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Qe(o(gr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=Qe(zt(v[a]),u);return p(Br,l,r,u)}function Hv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Xv=j(function(e,r,n,a){return wt(r,a,e.e3,e.fR,e.fK,function(t,i){var c=e.fT,l=a.node,u=zt(l);return Fi(i,function(v){var s=c(v),m=Di(u,s);l=Vi(l,u,m,t),u=s})})});j(function(e,r,n,a){return wt(r,a,e.e3,e.fR,e.fK,function(t,i){var c=e.cU&&e.cU(t),l=e.fT,u=ar.title,v=ar.body,s=zt(v);return Fi(i,function(m){Un=c;var d=l(m),f=Br("body")(P)(d.ew),g=Di(s,f);v=Vi(v,s,g,t),s=f,Un=0,u!==d.fO&&(ar.title=u=d.fO)})})});var qn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Fi(e,r){r(e);var n=0;function a(){n=n===1?0:(qn(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&qn(a),n=2)}}$(function(e,r){return o(Gt,Nt,ir(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Gt,Nt,ir(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Gt,Nt,ir(function(){history.replaceState({},"",r),e()}))});var Iv={addEventListener:function(){},removeEventListener:function(){}},Ov=typeof window<"u"?window:Iv;x(function(e,r,n){return Li(ir(function(a){function t(i){yt(n(i))}return e.addEventListener(r,t,Pt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Be(e,r);return je(n)?ae(n.a):Z});function Ei(e,r){return ir(function(n){qn(function(){var a=document.getElementById(e);n(a?Ar(r(a)):nv(gf(e)))})})}function Uv(e){return ir(function(r){qn(function(){r(Ar(e()))})})}$(function(e,r){return Ei(r,function(n){return n[e](),yn})});$(function(e,r){return Uv(function(){return Ov.scroll(e,r),yn})});x(function(e,r,n){return Ei(e,function(a){return a.scrollLeft=r,a.scrollTop=n,yn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Jv=$(function(e,r){var n="g";e.fj&&(n+="m"),e.ey&&(n+="i");try{return ae(new RegExp(r,n))}catch{return Z}});$(function(e,r){return r.match(e)!==null});var qv=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ae(m):Z}a.push(L(Dc,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});j(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ae(v):Z}return n(L(Dc,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var Zv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Yv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Yv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Mt=new Float64Array(3),wo=new Float64Array(3),So=new Float64Array(3),Qv=x(function(e,r,n){return new Float64Array([e,r,n])}),Kv=function(e){return e[0]},e$=function(e){return e[1]},r$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var n$=function(e){return new Float64Array([e.fX,e.f$,e.a1])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Ri(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Ri);function Ni(e,r,n){return n===void 0&&(n=new Float64Array(3)),Zn(Ri(e,r,n),n)}$(Ni);function ji(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Zn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/ji(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var a$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$($n);function Ya(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ya);$(function(e,r){var n,a=Mt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var t$=j(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var o$=function(e){return{fX:e[0],f$:e[1],a1:e[2],eo:e[3]}},i$=function(e){return new Float64Array([e.fX,e.f$,e.a1,e.eo])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/c$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function c$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var l$=new Float64Array(16),u$=new Float64Array(16),v$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},$$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Gi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Gi);j(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Gi(c,l,i,t,n,a)});function Wi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(Wi);j(function(e,r,n,a){return Wi(e,r,n,a,-1,1)});function Hi(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],C=e[13],y=e[14],_=e[15],w=r[0],z=r[1],G=r[2],E=r[3],B=r[4],R=r[5],W=r[6],A=r[7],O=r[8],q=r[9],oe=r[10],ue=r[11],te=r[12],$e=r[13],we=r[14],be=r[15];return n[0]=a*w+l*z+m*G+b*E,n[1]=t*w+u*z+d*G+C*E,n[2]=i*w+v*z+f*G+y*E,n[3]=c*w+s*z+g*G+_*E,n[4]=a*B+l*R+m*W+b*A,n[5]=t*B+u*R+d*W+C*A,n[6]=i*B+v*R+f*W+y*A,n[7]=c*B+s*R+g*W+_*A,n[8]=a*O+l*q+m*oe+b*ue,n[9]=t*O+u*q+d*oe+C*ue,n[10]=i*O+v*q+f*oe+y*ue,n[11]=c*O+s*q+g*oe+_*ue,n[12]=a*te+l*$e+m*we+b*be,n[13]=t*te+u*$e+d*we+C*be,n[14]=i*te+v*$e+f*we+y*be,n[15]=c*te+s*$e+g*we+_*be,n}$(Hi);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],C=r[1],y=r[2],_=r[4],w=r[5],z=r[6],G=r[8],E=r[9],B=r[10],R=r[12],W=r[13],A=r[14];return n[0]=a*b+c*C+v*y,n[1]=t*b+l*C+s*y,n[2]=i*b+u*C+m*y,n[3]=0,n[4]=a*_+c*w+v*z,n[5]=t*_+l*w+s*z,n[6]=i*_+u*w+m*z,n[7]=0,n[8]=a*G+c*E+v*B,n[9]=t*G+l*E+s*B,n[10]=i*G+u*E+m*B,n[11]=0,n[12]=a*R+c*W+v*A+d,n[13]=t*R+l*W+s*A+f,n[14]=i*R+u*W+m*A+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Zn(r,Mt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/ji(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,C=c*l*v,y=i*i*v+u,_=g+f,w=b-d,z=g-f,G=c*c*v+u,E=C+m,B=b+d,R=C-m,W=l*l*v+u,A=n[0],O=n[1],q=n[2],oe=n[3],ue=n[4],te=n[5],$e=n[6],we=n[7],be=n[8],lr=n[9],ur=n[10],ha=n[11],ql=n[12],Zl=n[13],Yl=n[14],Ql=n[15];return a[0]=A*y+ue*_+be*w,a[1]=O*y+te*_+lr*w,a[2]=q*y+$e*_+ur*w,a[3]=oe*y+we*_+ha*w,a[4]=A*z+ue*G+be*E,a[5]=O*z+te*G+lr*E,a[6]=q*z+$e*G+ur*E,a[7]=oe*z+we*G+ha*E,a[8]=A*B+ue*R+be*W,a[9]=O*B+te*R+lr*W,a[10]=q*B+$e*R+ur*W,a[11]=oe*B+we*R+ha*W,a[12]=ql,a[13]=Zl,a[14]=Yl,a[15]=Ql,a});function f$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(f$);j(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function s$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(s$);j(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],C=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=C,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=Ni(e,r,Mt),t=Zn(Ya(n,a,wo),wo),i=Zn(Ya(a,t,So),So),c=l$,l=u$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Hi(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Lo=0;function bn(e,r){for(;r.b;r=r.b)e(r.a)}function kt(e){for(var r=0;e.b;e=e.b)r++;return r}var m$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},d$=xe(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),p$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),b$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),g$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),h$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),_$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),C$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),y$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),x$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),w$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},S$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},L$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},P$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Xi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ii=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},T$=function(e){e.gl.disable(e.gl.CULL_FACE)},z$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},M$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},k$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Po=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],D$=[S$,L$,P$,Xi,Ii,T$,z$,M$,k$];function To(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function A$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Oi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function B$(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,C,y){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?C[y]:C[y][_];else i.forEach(function(w){for(_=0;_<g;_++)f[b++]=g===1?C[w][y]:C[w][y][_]})}var u=Oi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(kt(n.b)*s);bn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function V$(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=F$(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*kt(r.b),indexBuffer:null,buffers:{}}}function F$(e,r){var n=new Uint32Array(kt(e)*r),a=0,t;return bn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function zo(e,r){return e+"#"+r}var Ui=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Xi(n),Ii(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=zo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Lo++,v||(v=To(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Lo++,s||(s=To(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=A$(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=E$(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=zo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),R$(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=V$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=B$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=Oi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,C.size,C.baseType,!1,0,0);else for(var y=C.size*4,_=y*C.arraySize,w=0;w<C.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,C.size,C.baseType,!1,_,y*w)}for(n.toggle=!n.toggle,bn($0(n),i.a),u=0;u<Po.length;u++){var z=n[Po[u]];z.toggle!==n.toggle&&z.enabled&&(D$[u](n),z.enabled=!1,z.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return bn(t,e.g),r});function E$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,C=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var w=l.textures.get(_);w||(w=_.eF(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(C,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function R$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var N$=x(function(e,r,n){return Cv(r,{g:n,f:{},h:e},O$,U$)}),j$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),G$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),W$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),H$=$(function(e,r){e.contextAttributes.antialias=!0}),X$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),I$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function O$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};bn(function(t){return o(v0,r,t)},e.h);var n=ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),m$(function(){return o(Ui,e,n)})):(n=ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function U$(e,r){return r.f=e.f,Ui(r)}var F=lu,Tn=ou,J$=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Tn,e,l,v)}else{var u=c.a;return p(Tn,i,l,u)}});return p(Tn,i,p(Tn,e,r,t),a)}),Dt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Dt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Mo=function(e){return p(Dt,x(function(r,n,a){return o(F,T(r,n),a)}),P,e)},Ji=1,q$=2,qi=0,me=function(e){return{$:1,a:e}},At=$(function(e,r){return{$:3,a:e,b:r}}),ko=$(function(e,r){return{$:0,a:e,b:r}}),Zi=$(function(e,r){return{$:1,a:e,b:r}}),ce=function(e){return{$:0,a:e}},Z$=function(e){return{$:2,a:e}},ae=function(e){return{$:0,a:e}},Z={$:1},Y$=Fu,Q$=rv,Pe=xi,yr=$(function(e,r){return o(Au,e,ua(r))}),Bt=$(function(e,r){return h(o(Du,e,r))}),Yi=function(e){return o(yr,`
    `,o(Bt,`
`,e))},xn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(xn,$(function(r,n){return n+1}),0,e)},K$=uu,ef=x(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(F,r,n);e=a,r=t,n=i;continue e}else return n}),va=$(function(e,r){return p(ef,e,r,P)}),Qi=$(function(e,r){return p(K$,e,o(va,0,Mr(r)-1),r)}),Ze=Hu,Ki=function(e){var r=Ze(e);return 97<=r&&r<=122},ec=function(e){var r=Ze(e);return r<=90&&65<=r},rf=function(e){return Ki(e)||ec(e)},nf=function(e){var r=Ze(e);return r<=57&&48<=r},af=function(e){return Ki(e)||ec(e)||nf(e)},ze=function(e){return p(xn,F,P,e)},Yr=Tu,tf=$(function(e,r){return`

(`+(Pe(e+1)+(") "+Yi(of(r))))}),of=function(e){return o(cf,e,P)},cf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Yr(n);if(b.$===1)return!1;var C=b.a,y=C.a,_=C.b;return rf(y)&&o(Y$,af,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(F,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=o(F,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(yr,"",ze(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Pe(Mr(s))+" ways:"));return o(yr,`

`,o(F,g,o(Qi,tf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(yr,"",ze(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(yr,"",ze(r))+`:

    `):`Problem with the given value:

`}();return g+(Yi(o(Q$,4,f))+(`

`+d))}}),Me=32,Qa=j(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ka=eu,rc=Cu,Vt=$(function(e,r){return po(r)/po(e)}),lf=hu,gn=rc(o(Vt,2,Me)),nc=L(Qa,0,gn,Ka,Ka),ac=nu,tc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var uf=yu,et=ru,Ye=$(function(e,r){return U(e,r)>0?e:r}),vf=function(e){return{$:0,a:e}},Ft=au,$f=$(function(e,r){e:for(;;){var n=o(Ft,Me,e),a=n.a,t=n.b,i=o(F,vf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ze(i)}}),ff=function(e){var r=e.a;return r},sf=$(function(e,r){e:for(;;){var n=rc(r/Me);if(n===1)return o(Ft,Me,e).a;var a=o($f,e,P),t=n;e=a,r=t;continue e}}),oc=$(function(e,r){if(r.l){var n=r.l*Me,a=uf(o(Vt,Me,n-1)),t=e?ze(r.z):r.z,i=o(sf,t,r.l);return L(Qa,et(r.p)+n,o(Ye,5,a*gn),i,r.p)}else return L(Qa,et(r.p),gn,Ka,r.p)}),mf=xe(function(e,r,n,a,t){e:for(;;){if(r<0)return o(oc,!1,{z:a,l:n/Me|0,p:t});var i=tc(p(ac,Me,r,e)),c=e,l=r-Me,u=n,v=o(F,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),df=$(function(e,r){if(e<=0)return nc;var n=e%Me,a=p(ac,n,e-n,r),t=e-n-Me;return S(mf,r,t,e,P,a)}),je=function(e){return!e.$},D=Yu,Et=$(function(e,r){return e}),Yn=Qu,pf=Ku,Se=Iu,Rt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Br("div"),bf=function(e){return{$:2,a:e}},ic=$(function(e,r){return{eC:r.eC,eD:e,dd:r.dd,eM:r.eM,fa:r.fa,fv:r.fv,d9:r.d9,fU:r.fU}}),Sr=function(e){return e},gf=Sr,Do=Xe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),hf=Eu,xr=zu,Wr=Bu,wn=$(function(e,r){return e<1?r:p(Wr,e,xr(r),r)}),$a=Nu,fa=function(e){return e===""},sa=$(function(e,r){return e<1?"":p(Wr,0,e,r)}),cc=ju,Ao=xe(function(e,r,n,a,t){if(fa(t)||o(hf,"@",t))return Z;var i=o($a,":",t);if(i.b){if(i.b.b)return Z;var c=i.a,l=cc(o(wn,c+1,t));if(l.$===1)return Z;var u=l;return ae(Ce(Do,e,o(sa,c,t),u,r,n,a))}else return ae(Ce(Do,e,t,Z,r,n,a))}),Bo=j(function(e,r,n,a){if(fa(a))return Z;var t=o($a,"/",a);if(t.b){var i=t.a;return S(Ao,e,o(wn,i,a),r,n,o(sa,i,a))}else return S(Ao,e,"/",r,n,a)}),Vo=x(function(e,r,n){if(fa(n))return Z;var a=o($a,"?",n);if(a.b){var t=a.a;return L(Bo,e,ae(o(wn,t+1,n)),r,o(sa,t,n))}else return L(Bo,e,Z,r,n)});$(function(e,r){if(fa(r))return Z;var n=o($a,"#",r);if(n.b){var a=n.a;return p(Vo,e,ae(o(wn,a+1,r)),o(sa,a,r))}else return p(Vo,e,Z,r)});var _f=Ru,Nt=function(e){},Sn=Ar,Cf=Sn(0),lc=j(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(xn,e,r,ze(m)):L(lc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),cr=x(function(e,r,n){return L(lc,e,r,0,n)}),fe=$(function(e,r){return p(cr,$(function(n,a){return o(F,e(n),a)}),P,r)}),Qn=Ja,jt=$(function(e,r){return o(Qn,function(n){return Sn(e(n))},r)}),yf=x(function(e,r,n){return o(Qn,function(a){return o(Qn,function(t){return Sn(o(e,a,t))},n)},r)}),xf=function(e){return p(cr,yf(F),Sn(P),e)},wf=vv,Sf=$(function(e,r){var n=r;return Li(o(Qn,wf(e),n))}),Lf=x(function(e,r,n){return o(jt,function(a){return 0},xf(o(fe,Sf(e),r)))}),Pf=x(function(e,r,n){return Sn(0)}),Tf=$(function(e,r){var n=r;return o(jt,e,n)});qe.Task=lv(Cf,Lf,Pf,Tf);var zf=Ti("Task"),Gt=$(function(e,r){return zf(o(jt,e,r))}),Mf=Xv,kf=Lu,Kn={$:1},uc=function(e){return{$:2,a:e}},ma={$:0},Re=$(function(e,r){return{$:0,a:e,b:r}}),ee=x(function(e,r,n){return r(e(n))}),Qr=function(e){var r=e.b.B;return r.a},Df=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ae(o(Re,r,{B:i,ab:c,T:o(F,a,n)}))}else return Z},vc=function(e){var r=e.b;return o(Re,ma,r)},mr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Af=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fv.de?vc(n):n;case 2:var i=a.a.cY;return(U(i+r.eM,Qr(n).eC)>0?o(ee,Df,mr(o(Re,Kn,t))):Sr)(o(Re,uc({cY:i+r.eM}),t));default:var c=t.B,l=c.a,u=c.b,v=o(ic,l.eD,Ee(r,{eC:l.eC+r.eM})),s=o(e,v,u);return o(Re,ma,{B:T(v,s),ab:P,T:o(F,t.B,t.T)})}}),$c=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Bf=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(F,a,n);e=i,r=c,n=l;continue e}else return n}}),Vf=$(function(e,r){return ze(p(Bf,e,r,P))}),fc=x(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,C=g.b;return e>1e3?o(F,_,o(F,c,o(F,s,o(F,b,o(Vf,r-4,C))))):o(F,_,o(F,c,o(F,s,o(F,b,p(fc,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),Ff=$(function(e,r){return p(fc,0,e,r)}),Ef=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ie(ze(n),ie(h([a]),t)),c=o(Ff,e,i),l=o($c,e,i);if(l.b){var u=l.a,v=l.b;return o(Re,Kn,{B:u,ab:v,T:ze(c)})}else{var s=ze(c);if(s.b){var m=s.a,d=s.b;return o(Re,Kn,{B:m,ab:P,T:d})}else return r}}),Rf=function(e){var r=e.b;return o(Re,Kn,r)},Nf=function(e){var r=e.b;return o(Re,uc({cY:Qr(e).eC}),r)},jf=$(function(e,r){switch(e.$){case 1:return Rf(r);case 2:return vc(r);case 3:return Nf(r);default:var n=e.a;return o(Ef,n,r)}}),sc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Gf=$(function(e,r){return Ee(r,{av:e(r.av)})}),Wf=function(e){return{$:3,a:e}},mc=function(e){return{$:2,a:e}},dc=$(function(e,r){return{$:0,a:e,b:r}}),Hf=$(function(e,r){return{$:1,a:e,b:r}}),Te=$(function(e,r){if(r.$)return Z;var n=r.a;return ae(e(n))}),Q=function(e){return e<0?-e:e},Wt=Gu,Xf=x(function(e,r,n){return o(mr,0/0,Wt(o(e,r,n)))}),pc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),If=ku,bc=function(e){return p(If,F,P,e)},Of=$(function(e,r){var n=o(pc,function(a){return a!=="0"&&a!=="."},bc(r));return ie(e&&n?"-":"",r)}),re=xi,rt=Pu,gc=Xu,hc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Yr(n);if(a.$===1)return"01";var t=a.a;return o(rt,"0",hc(t))}else{var i=Ze(r);return i>=48&&i<57?o(rt,gc(i+1),n):"0"}},nt=_u,Uf=Su,da=function(e){return o(rt,e,"")},_c=x(function(e,r,n){return e<=0?n:p(_c,e>>1,ie(r,r),e&1?ie(n,r):n)}),hn=$(function(e,r){return p(_c,e,r,"")}),at=x(function(e,r,n){return ie(n,o(hn,e-xr(n),da(r)))}),tt=Mu,Cc=function(e){var r=o(Bt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Jf=function(e){var r=o(Bt,"e",re(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(mr,0,cc(o(_f,"+",t)?o(wn,1,t):t)),c=Cc(n),l=c.a,u=c.b,v=ie(l,u),s=i<0?o(mr,"0",o(Te,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Te,sc(da),Yr(ie(o(hn,Q(i),"0"),v))))):p(at,i+1,"0",v);return ie(e<0?"-":"",s)}else{var n=r.a;return ie(e<0?"-":"",n)}else return""},qf=x(function(e,r,n){if(nt(n)||Uf(n))return re(n);var a=n<0,t=Cc(Jf(Q(n))),i=t.a,c=t.b,l=xr(i)+r,u=ie(o(hn,-l+1,"0"),p(at,l,"0",ie(i,c))),v=xr(u),s=o(Ye,1,l),m=o(e,a,p(Wr,s,v,u)),d=p(Wr,0,s,u),f=m?tt(o(mr,"1",o(Te,hc,Yr(tt(d))))):d,g=xr(f),b=f==="0"?f:r<=0?ie(f,o(hn,Q(r),"0")):U(r,xr(c))<0?p(Wr,0,g-r,f)+("."+p(Wr,g-r,g,f)):ie(i+".",p(at,r,"0",c));return o(Of,a,b)}),yc=qf($(function(e,r){var n=Yr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ze(t))})),Zf=Xf(yc),Yf=x(function(e,r,n){var a=o(Vt,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Zf,t,n)}),xc=cu,Ht=$(function(e,r){e:for(;;){if(r.$===-2)return Z;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(xc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ae(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=xe(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Ke={$:-2},Ur=xe(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(H,0,r,n,S(H,1,v,s,m,d),S(H,1,i,c,l,u))}else return S(H,e,i,c,S(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,C=f.d,y=f.e,d=a.e;return S(H,0,v,s,S(H,1,g,b,C,y),S(H,1,r,n,d,t))}else return S(H,e,r,n,a,t)}),ot=x(function(e,r,n){if(n.$===-2)return S(H,0,e,r,Ke,Ke);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(xc,e,t);switch(u){case 0:return S(Ur,a,t,i,p(ot,e,r,c),l);case 1:return S(H,a,t,r,c,l);default:return S(Ur,a,t,i,c,p(ot,e,r,l))}}),mn=x(function(e,r,n){var a=p(ot,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(H,1,t,i,c,l)}else{var u=a;return u}}),Qf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},wc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,C=d.e,y=v.e;return S(H,0,f,g,S(H,1,n,a,S(H,0,i,c,l,u),b),S(H,1,s,m,C,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,y=w.e;return S(H,1,n,a,S(H,0,i,c,l,u),S(H,0,s,m,d,y))}else return e},Fo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,C=f.d,y=f.e;return S(H,0,i,c,S(H,1,u,v,s,m),S(H,1,n,a,d,S(H,0,g,b,C,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,z=e.e;z.a;var g=z.b,b=z.c,C=z.d,y=z.e;return S(H,1,n,a,S(H,0,i,c,w,d),S(H,0,g,b,C,y))}else return e},Kf=la(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(H,n,l,u,v,S(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Fo(r)}else break e;else return c.a,c.d,Fo(r);else break e;return r}}),Nn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(H,r,n,a,Nn(t),l);var u=wc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Ur,v,s,m,Nn(d),f)}else return Ke}else return S(H,r,n,a,Nn(t),l)}else return Ke},dn=$(function(e,r){if(r.$===-2)return Ke;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(H,n,a,t,o(dn,e,i),c);var u=wc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Ur,v,s,m,o(dn,e,d),f)}else return Ke}else return S(H,n,a,t,o(dn,e,i),c);else return o(es,e,ht(Kf,e,r,n,a,t,i,c))}),es=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(zr(e,a)){var l=Qf(c);if(l.$===-1){var u=l.b,v=l.c;return S(Ur,n,u,v,i,Nn(c))}else return Ke}else return S(Ur,n,a,t,i,o(dn,e,c))}else return Ke}),rs=$(function(e,r){var n=o(dn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(H,1,a,t,i,c)}else{var l=n;return l}}),zn=x(function(e,r,n){var a=r(o(Ht,e,n));if(a.$)return o(rs,e,n);var t=a.a;return p(mn,e,t,n)}),ns=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(zn,r,Te(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Hf,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(zn,r,Te(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(dc,T(i,c),p(Yf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(zn,r,Te(function(a){return a.$===3?Wf(n):a}));default:var r=e.a,n=e.b;return o(zn,r,Te(function(a){return a.$===2?mc(n):a}))}},as=function(e){return Gf(ns(e))},ts=$(function(e,r){return o(fe,as(e),r)}),os=$(function(e,r){return Ee(r,{eD:o(ts,e,r.eD)})}),is=$(function(e,r){var n=r.a,a=r.b;return o(Re,n,Ee(a,{B:o(sc,os(e),a.B)}))}),cs=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),ls=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Re,a,Ee(t,{B:o(cs,o(e,i.a,r),i)}))}),us=j(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ee(a,{aL:!a.aL});case 2:var t=n.a;return Ee(a,{G:p(Af,e,t,a.G)});case 3:var i=n.a;return Ee(a,{G:o(is,i,a.G)});case 4:var c=n.a;return Ee(a,{G:p(ls,r,c,a.G)});default:var l=n.a;return Ee(a,{G:o(jf,l,a.G)})}}),vs=$(function(e,r){return o(Re,ma,{B:T(e,r(e)),ab:P,T:P})}),$s=$v,Eo=$s(P),Y=Ou,k=Zu,ve=Uu,ea=qu,_n=Ju,fs=pv("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Se({eC:c,dd:i,eM:t,fa:a,fv:n,d9:r,fU:e})},o(k,"clock",ve))},o(k,"devicePixelRatio",ve))},o(k,"dt",ve))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return Se({eq:m,eE:s,de:v,eL:u,fb:l,fw:c,fA:i,fF:t,ej:a})},o(k,"alt",Y))},o(k,"control",Y))},o(k,"down",Y))},o(k,"downs",ea(_n)))},o(k,"left",Y))},o(k,"pressedKeys",ea(_n)))},o(k,"right",Y))},o(k,"shift",Y))},o(k,"up",Y))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Se({de:v,e7:u,fg:l,fB:c,fC:i,ej:t,fX:a,f$:n})},o(k,"down",Y))},o(k,"isDown",Y))},o(k,"move",Y))},o(k,"rightDown",Y))},o(k,"rightUp",Y))},o(k,"up",Y))},o(k,"x",ve))},o(k,"y",ve))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Se({eZ:n,fV:r})},o(k,"height",ve))},o(k,"width",ve))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Se({eH:r,eI:e})},o(k,"deltaX",ve))},o(k,"deltaY",ve))))),ss=function(e){return{$:4,a:e}},ms={$:0},ds=Si,Ne=$(function(e,r){return o(ki,e,ds(r))}),I=Ne("className"),ps=function(e){var r=e.b.B;return r.b},ra=Ne("id"),bs=yv,na=bs,gs=xv,K=gs,hs={$:1},_s=function(e){return{$:3,a:e}},Cs=function(e){return{$:5,a:e}},Ro=Br("a"),Xt=Br("button"),No=function(e){return o(Ne,"href",Lv(e))},ys=gr("clip-rule"),ge=gr("d"),xs=gr("fill"),Sc=zi("http://www.w3.org/2000/svg"),ws=Sc("svg"),Ss=gr("viewBox"),Ls=o(wv,"http://www.w3.org/XML/1998/namespace","xml:space"),De=ws(h([Ss("0 0 24 24"),xs("currentColor"),o(K,"width","100%"),o(K,"height","100%"),Ls("http://www.w3.org/2000/svg")])),Ps=gr("fill-rule"),he=Sc("path"),Lr={eG:De(h([o(he,h([ge("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eT:De(h([o(he,h([ge("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eY:De(h([o(he,h([ge("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fh:De(h([o(he,h([ge("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(he,h([ge("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fi:De(h([o(he,h([ge("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(he,h([ge("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fs:De(h([o(he,h([ge("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),ft:De(h([o(he,h([ge("M7 5V19L18 12L7 5Z")]),P)])),fu:De(h([o(he,h([ge("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fv:De(h([o(he,h([ge("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fP:De(h([o(he,h([Ps("evenodd"),ys("evenodd"),ge("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fQ:De(h([o(he,h([ge("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f3:De(h([o(he,h([ge("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Ts=function(e){return{$:0,a:e}},Lc=Mi,Pc=$(function(e,r){return o(Lc,e,Ts(r))}),It=function(e){return o(Pc,"click",Se(e))},jo=Ne("target"),zs=Ne("title"),it=$(function(e,r){if(r.$===-2)return Ke;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(H,n,a,o(e,a,t),o(it,e,i),o(it,e,c))}),Ms=qa,or=Ms,ks=function(e){return p(Dt,x(function(r,n,a){return o(F,n,a)}),P,e)},Ds=$(function(e,r){return{$:3,a:e,b:r}}),As=$(function(e,r){return{$:2,a:e,b:r}}),Bs=$(function(e,r){return{$:0,a:e,b:r}}),Vs=$(function(e,r){return{$:1,a:e,b:r}}),hr=j(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Fs=L(hr,0/255,0/255,0/255,1),Es=Si,Tc=$(function(e,r){return o(ki,e,Es(r))}),Rs=Tc("checked"),He=xu,Ns=x(function(e,r,n){return ie(o(hn,e-xr(n),da(r)),n)}),zc=$u,Mc=function(e){var r=function(n){return n<10?Pe(n):da(gc(87+n))};return e<16?r(e):ie(Mc(e/16|0),r(o(zc,16,e)))},js=o(ee,Mc,o(Ns,2,"0")),kc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b8:a,ce:n,cO:r}},Gs=function(e){var r=kc(e),n=r.cO,a=r.ce,t=r.b8;return o(yr,"",o(F,"#",o(fe,o(ee,He,js),h([n*255,a*255,t*255]))))},ct=Ne("htmlFor"),Ws=$(function(e,r){if(r.$)return Z;var n=r.a;return e(n)}),aa=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),Hs=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(F,t,n)}),Ot=$(function(e,r){return p(cr,Hs(e),P,r)}),Dc=j(function(e,r,n,a){return{e2:r,fe:e,fn:n,fJ:a}}),Xs=qv,Is=Wu,Os=$(function(e,r){if(r.$)return me(e);var n=r.a;return ce(n)}),Us=Jv,Js=function(e){return o(Us,{ey:!1,fj:!1},e)},Ut=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return Z},qs=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return ce(e(n))}}),Zs=function(e){return{$:2,a:e}},Ys=function(e){return{$:0,a:e}},Qs=function(e){return{$:1,a:e}},ya=$(function(e,r){return Ze(r)-Ze(e)}),xa=x(function(e,r,n){var a=Ze(n);return U(Ze(e),a)<1&&U(a,Ze(r))<1}),Ks=$(function(e,r){var n=function(t){return U(t,e)<0?ce(t):me(Qs(r))},a=p(xa,"0","9",r)?ce(o(ya,"0",r)):p(xa,"a","z",r)?ce(10+o(ya,"a",r)):p(xa,"A","Z",r)?ce(10+o(ya,"A",r)):me(Ys(r));return o(aa,n,a)}),Ac=$(function(e,r){var n=Yr(r);if(n.$===1)return ce(0);var a=n.a,t=a.a,i=a.b;return o(aa,function(c){return o(aa,function(l){return ce(c+l*e)},o(Ac,e,i))},o(Ks,e,t))}),em=$(function(e,r){return 2<=e&&e<=36?o(Ac,e,tt(r)):me(Zs(e))}),rm=em(16),nm=x(function(e,r,n){return L(hr,e,r,n,1)}),am=j(function(e,r,n,a){return L(hr,e,r,n,a)}),Pr=vu,tm=$(function(e,r){var n=o(Pr,10,e);return He(r*n)/n}),om=Vu,im=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=bc(n);if(a.b&&!a.b.b){var t=a.a;return Is(h([t,t]))}else return n};return o(ee,om,o(ee,function(n){return o(Te,function(a){return p(Xs,1,a,n)},Js(e))},o(ee,Ws(Ut),o(ee,Te(function(n){return n.fJ}),o(ee,Te(Ot(Sr)),o(ee,Os("Parsing hex regex failed"),aa(function(n){var a=o(fe,o(ee,r,o(ee,rm,qs(lf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ce(L(am,t/255,c/255,u/255,o(tm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ce(p(nm,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),ta=Br("input"),lt=Br("label"),ut=Ne("name"),Bc=$(function(e,r){return p(cr,k,r,e)}),cm=o(Bc,h(["target","checked"]),Y),lm=function(e){return o(Pc,"change",o(Yn,e,cm))},um=function(e){return T(e,!0)},vm=function(e){return{$:1,a:e}},$m=$(function(e,r){return o(Lc,e,vm(r))}),fm=o(Bc,h(["target","value"]),_n),Jt=function(e){return o($m,"input",o(Yn,um,o(Yn,e,fm)))},Vc=Ne("max"),Fc=Ne("min"),Ec=function(e){return o(Ne,"step",e)},oa=Ne("type"),qt=Ne("value"),Go=function(e){var r=e.ch,n=e.c1,a=e.cx,t=e.ct,i=e.cW,c=e.cB;return o(J,P,h([o(lt,h([ct(r)]),h([o(J,h([I("relative w-full")]),h([o(J,h([I("inline-block")]),h([or(r)])),o(J,h([I("inline-block float-right")]),h([or(re(n))]))]))])),o(ta,h([oa("range"),o(K,"width","100%"),ra(r),ut(r),Fc(re(a)),Vc(re(t)),qt(re(n)),Ec(re(i)),Jt(o(ee,Wt,o(ee,mr(42),c)))]),P)]))},sm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),mm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([I("h-12 py-4")]),h([o(lt,h([I("block"),ct(e)]),h([o(ta,h([I("relative bottom-[1px] align-middle mr-2"),oa("checkbox"),ra(e),ut(e),lm(Ds(e)),Rs(c)]),P),or(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Go({ch:e,ct:i,cx:t,cB:Bs(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Go({ch:e,ct:i,cx:t,cB:o(ee,He,Vs(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,h([o(J,h([o(K,"margin-bottom","6px")]),h([o(lt,h([ct(e)]),h([or(e)]))])),o(ta,h([oa("color"),o(K,"width","100%"),o(K,"height","26px"),o(K,"padding","0px"),ra(e),ut(e),Jt(function(l){return o(As,e,o(sm,Fs,im(l)))}),qt(Gs(c))]),P)]))}}),dm=function(e){return o(J,h([I("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([I("text-lg pb-2")]),h([or(e.fk)])),o(J,h([I("pl-2 pr-2")]),ks(o(it,mm,e.av)))]))},pm=function(e){return o(J,h([I("text-xs text-white60")]),o(fe,dm,e))},bm=function(e){return o(J,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([or("clock: "+o(yc,3,Qr(e).eC))]))},gm=function(e){e.a;var r=e.b.T;return o(Te,function(n){return He(60/(Qr(e).eC-n))},o(Te,o(ee,ff,function(n){return n.eC}),Ut(o($c,59,r))))},hm=function(e){return o(J,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=gm(e);if(r.$===1)return h([or("... Fps")]);var n=r.a;return h([or(Pe(n)+" Fps")])}())},_m=function(e){return{$:0,a:e}},Cm=function(e){var r=e.b.T;return Mr(r)},ym=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},xm=function(e){return o(ta,h([I("absolute w-full"),oa("range"),Fc(Pe(0)),Vc(Pe(ym(e)-1)),qt(Pe(Cm(e))),Ec(Pe(1)),Jt(o(ee,Wt,o(ee,mr(42),o(ee,He,_m))))]),P)},Wo={$:1},Ho={$:3},Xo={$:2},vt=function(e){return!e.b},Rc=Tc("disabled"),wa=x(function(e,r,n){return o(Xt,h([I("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),I(n),Rc(e),It(r)]),h([or("REC")]))}),Sa=x(function(e,r,n){return o(Xt,h([I("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Rc(e),It(n)]),h([o(J,h([I("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),wm=function(e){var r=e.a,n=e.b.ab;return o(J,h([I("py-1")]),h([function(){switch(r.$){case 0:return p(wa,!1,Wo,"text-red-500 font-bold");case 1:return p(wa,!1,Xo,"text-white60 hover:text-white80 font-bold");default:return p(wa,!0,Xo,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Sa,vt(n),Lr.ft,Ho);case 1:return p(Sa,vt(n),Lr.ft,Ho);default:return p(Sa,!1,Lr.fs,Wo)}}()]))},Sm=function(e){return o(J,h([I("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([xm(e),wm(e),hm(e),bm(e)]))},Lm=function(e){var r=e.a;return zr(r,ma)},Pm=$(function(e,r){var n=Lm(r.G)?o(J,P,P):o(J,h([I("absolute pointer-events-none w-8 h-8"),o(K,"left",re(e.fv.fX+.5*e.d9.fV)+"px"),o(K,"top",re(-e.fv.f$+.5*e.d9.eZ)+"px")]),h([o(J,h([I(e.fv.e7?"text-black80":"text-black40")]),h([Lr.fv]))]));return o(J,P,h([n]))}),Tm=$(function(e,r){var n=o(Xt,h([I(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),It(hs),zs("Distraction Free Mode")]),h([Lr.f3])),a=40,t=260,i=o(J,h([I("absolute w-8 bottom-12")]),h([o(Ro,h([I("text-twitterBlue40 hover:text-twitterBlue"),No("https://twitter.com/AzizErkalSelman"),jo("_blank")]),h([Lr.fQ]))])),c=80,l=o(J,h([I("absolute w-8 bottom-2")]),h([o(Ro,h([I("text-githubCat40 hover:text-githubCat"),No("https://github.com/erkal/elm-3d-playground-exploration"),jo("_blank")]),h([Lr.eT]))])),u=e.d9.fV>640?N(e.d9.eZ,a+t,e.d9.fV-(a+t)):N(e.d9.eZ-c,a,e.d9.fV-a),v=u.a,s=u.b,m=u.c;return r.aL?o(J,h([I("fixed w-10 h-10 p-1")]),h([n])):o(J,P,h([o(J,h([I("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(K,"width",re(a)+"px")]),h([n,i,l])),o(J,h([I("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(K,"width",re(t)+"px"),o(K,"height",re(v)+"px")]),h([o(na,_s,pm(Qr(r.G).eD))])),o(J,h([I("absolute bottom-0"),o(K,"left",re(s)+"px"),o(K,"height",re(c)+"px"),o(K,"width",re(m)+"px")]),h([o(na,Cs,Sm(r.G))])),o(Pm,e,r)]))}),zm=x(function(e,r,n){var a=ps(n.G),t=Qr(n.G);return o(J,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(K,"width",re(t.d9.fV)+"px"),o(K,"height",re(t.d9.eZ)+"px")]),h([o(J,h([I("fixed")]),h([o(na,Et(ms),o(e,t,a))])),o(J,h([ra("gui")]),h([o(Tm,t,n),o(na,ss,o(r,t,a))]))]))}),Mm=Xe(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(us,r,i,u,v),Eo)}),l=function(u){var v=o(ic,n,u.e4);return T({aL:u.e4.d9.fV<500,G:o(vs,v,a)},Eo)};return Mf({e3:l,fK:Et(fs(bf)),fR:c,fT:o(zm,e,t)})}),km=j(function(e,r,n,a){return Ce(Mm,e,r,n,a,$(function(t,i){return o(J,P,P)}),x(function(t,i,c){return c}))}),Dm=$(function(e,r){return T(e,mc(r))}),Am=x(function(e,r,n){return{av:n,e8:r,fk:e}}),Nc=Ke,Bm=function(e){return p(xn,$(function(r,n){var a=r.a,t=r.b;return p(mn,a,t,n)}),Nc,e)},Vm=x(function(e,r,n){return p(Am,e,r,Bm(n))}),La=Vm,Mn=x(function(e,r,n){var a=r.a,t=r.b;return T(e,o(dc,T(a,t),n))}),Fm=j(function(e,r,n,a){var t=N(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return L(hr,f,d,m,a)}),Em=x(function(e,r,n){return L(Fm,e,r,n,1)}),vr=fu,Rm=h([p(La,"Camera",!0,h([p(Mn,"camera distance",T(3,8),8),p(Mn,"camera azimuth",T(0,2*vr),vr/6),p(Mn,"camera elevation",T(-vr/2,vr/2),.5)])),p(La,"Color",!0,h([o(Dm,"cube color",p(Em,0,.36,.5))])),p(La,"Time",!0,h([p(Mn,"period",T(.1,5),.7)]))]),Nm=$(function(e,r){return r}),jm=$(function(e,r){return o(Te,function(n){if(n.$)return 0;var a=n.b;return a},o(Ht,e,r.av))}),Gm=$(function(e,r){return o(mr,0,Ut(o(Ot,jm(e),r)))}),Wm=$(function(e,r){return o(Gm,e,r.eD)}),Pa=Wm,Hm=bu,Xm=function(e){return e},Jr=function(e){return e},$t=function(e){var r=e;return-r},Im=$(function(e,r){var n=e,a=r;return{fX:n.f$*a.a1-n.a1*a.f$,f$:n.a1*a.fX-n.fX*a.a1,a1:n.fX*a.f$-n.f$*a.fX}}),jc=function(e){var r=e;return r.c4},Gc=function(e){var r=e;return r.c5},Om=function(e){return o(Im,jc(e),Gc(e))},Kr=function(e){var r=e;return r.cC},kr=su,Dr=mu,Ta=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=kr(c),u=Dr(c),v=a.eK,s=v,m=s.fX*u,d=l*m,f=m*m,g=s.f$*u,b=l*g,C=m*g,y=g*g,_=1-2*(f+y),w=s.a1*u,z=l*w,G=2*(C-z),E=2*(C+z),B=m*w,R=2*(B+b),W=2*(B-b),A=g*w,O=2*(A-d),q=2*(A+d),oe=w*w,ue=1-2*(y+oe),te=1-2*(f+oe);return{fX:ue*i.fX+G*i.f$+R*i.a1,f$:E*i.fX+te*i.f$+O*i.a1,a1:W*i.fX+q*i.f$+_*i.a1}}),Um=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=kr(c),u=Dr(c),v=a.cC,s=v,m=i.fX-s.fX,d=i.f$-s.f$,f=i.a1-s.a1,g=a.eK,b=g,C=b.fX*u,y=l*C,_=C*C,w=b.f$*u,z=l*w,G=C*w,E=w*w,B=1-2*(_+E),R=b.a1*u,W=l*R,A=2*(G-W),O=2*(G+W),q=C*R,oe=2*(q+z),ue=2*(q-z),te=w*R,$e=2*(te-y),we=2*(te+y),be=R*R,lr=1-2*(E+be),ur=1-2*(_+be);return{fX:s.fX+lr*m+A*d+oe*f,f$:s.f$+O*m+ur*d+$e*f,a1:s.a1+ue*m+we*d+B*f}}),en=function(e){return e},Vr=function(e){var r=e;return r.c4},Fr=function(e){var r=e;return r.c5},Er=function(e){var r=e;return r.c6},Jm=x(function(e,r,n){return en({cC:p(Um,e,r,Kr(n)),c4:p(Ta,e,r,Vr(n)),c5:p(Ta,e,r,Fr(n)),c6:p(Ta,e,r,Er(n))})}),Io=x(function(e,r,n){return p(Jm,e(n),r,n)}),Zt=function(e){var r=e;return r.eK},qm=$(function(e,r){var n=e,a=r;return{fX:a.fX+n.fX,f$:a.f$+n.f$,a1:a.a1+n.a1}}),Zm=$(function(e,r){return en({cC:o(qm,e,Kr(r)),c4:Vr(r),c5:Fr(r),c6:Er(r)})}),Ym=$(function(e,r){var n=e,a=r;return{fX:n*a.fX,f$:n*a.f$,a1:n*a.a1}}),Qm=x(function(e,r,n){return o(Zm,o(Ym,r,e),n)}),Km=x(function(e,r,n){return p(Qm,Zt(e(n)),r,n)}),rn=$(function(e,r){return{eK:r,cC:e}}),ed=function(e){var r=e;return o(rn,r.cC,r.c4)},rd=function(e){var r=e;return o(rn,r.cC,r.c5)},nd=function(e){var r=e;return o(rn,r.cC,r.c6)},ad=function(e){var r=en({cC:e.aR,c4:Gc(e.dl),c5:Om(e.dl),c6:jc(e.dl)}),n=p(Km,nd,e.cd,p(Io,ed,$t(e.bE),p(Io,rd,e.bz,r)));return n},td=function(e){return{$:0,a:e}},We=function(e){var r=e;return Q(r)},jn=function(e){var r=e;return .5*r},od=du,id=function(e){var r=e;return od(r)},cd=function(e){var r=jn(We(e.el)),n=id(r);return{cN:td(n),c2:e.c2}},sr=function(e){return e},nn={fX:0,f$:0,a1:0},Wc=Sr,Tr=function(e){return e},ld=Tr({fX:1,f$:0,a1:0}),Yt=ld,Hc=Tr({fX:0,f$:0,a1:1}),pa=Hc,ud=Wc({cC:nn,c4:pa,c5:Yt}),vd=function(e){var r=e.aR,n=e.bz,a=e.bE,t=e.cd;return cd({el:sr(2*Hm(.5)),c2:ad({bz:sr(n),cd:Jr(t),bE:sr(a),aR:Xm(r),dl:ud})})},$d=function(e){return vd({bz:o(Pa,"camera azimuth",e),cd:o(Pa,"camera distance",e),bE:o(Pa,"camera elevation",e),aR:{fX:0,f$:0,a1:0}})},ia=function(e){return e*vr/180},nr=x(function(e,r,n){return{fX:e,f$:r,a1:n}}),Xc=L(hr,52/255,101/255,164/255,1),fd=L(hr,115/255,210/255,22/255,1),Ic=function(e){return{$:4,a:e}},sd=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(F,n,r);e=t,r=i;continue e}else return r}),ba=function(e){return Ic(o(sd,e,P))},md=function(e){return ba(e)},Qt=md,dd=L(hr,204/255,0/255,0/255,1),pd=function(e){return{$:0,a:e}},bd=$(function(e,r){return{$:0,a:e,b:r}}),Kt=Qv,gd=function(e){var r=kc(e),n=r.cO,a=r.ce,t=r.b8;return p(Kt,n,a,t)},Oc=function(e){return o(bd,0,pd(gd(e)))},hd=x(function(e,r,n){return{k:o(rn,e,r),fc:We(n.fc),fx:We(n.fx)}}),_d=function(e){var r=e;return r.k},Cd=$(function(e,r){return r.b?p(cr,F,r,e):e}),tr=function(e){return p(cr,Cd,P,e)},Oo=function(e){var r=e;return kr(r)},yd=j(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),xd=j(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Uc=j(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),wd=j(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Sd=j(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Ld=j(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Pd=j(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Td=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Pd,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(yd,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(xd,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(Uc,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Ld,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(wd,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(Sd,n,a,t,1);case 8:return e;case 9:return e;default:return e}},zd=$(function(e,r){var n=r;return n/e}),Uo=function(e){var r=e;return{fX:kr(r),f$:Dr(r)}},Md={$:0},Jc=n$,Ln=function(e){var r=e;return r},Hr=function(e){return Jc(Ln(e))},qc=function(e){var r=e;return r},Zc=function(e){return Jc(qc(e))},kd=$(function(e,r){var n=e.bV,a=e.o;return o(F,{o:Zc(a),bV:Hr(n)},r)}),Yc=function(e){var r=e;return r.D},Dd=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),eo=Dd({df:1,$7:3,dV:4}),an=Kv,tn=e$,on=r$,za=$(function(e,r){var n=e,a=r;return U(a,n)<1}),Le=$(function(e,r){var n=e,a=r;return o(Ye,n,a)}),Gn=$(function(e,r){return U(e,r)<0?e:r}),Ve=$(function(e,r){var n=e,a=r;return o(Gn,n,a)}),Qc=function(e){return o(za,e.dO,e.dR)&&o(za,e.dP,e.dS)&&o(za,e.dQ,e.dT)?e:{dO:o(Le,e.dR,e.dO),dP:o(Le,e.dS,e.dP),dQ:o(Le,e.dT,e.dQ),dR:o(Ve,e.dR,e.dO),dS:o(Ve,e.dS,e.dP),dT:o(Ve,e.dT,e.dQ)}},Ad=la(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=on(l.bV),s=tn(l.bV),m=an(l.bV),d=o(Gn,e,m),f=o(Ye,r,m),g=o(Gn,n,s),b=o(Ye,a,s),C=o(Gn,t,v),y=o(Ye,i,v),_=u;e=d,r=f,n=g,a=b,t=C,i=y,c=_;continue e}else return Qc({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Bd=$(function(e,r){var n=on(e.bV),a=tn(e.bV),t=an(e.bV);return ht(Ad,t,t,a,a,n,n,r)}),Kc=function(e){var r=e;return r.ah},Vd=function(e){var r=p(J$,kd,P,Kc(e));if(r.b){var n=r.a,a=r.b,t=o(eo,r,Yc(e)),i=o(Bd,n,a);return L(Uc,i,e,t,0)}else return Md},Ie=$(function(e,r){var n=r;return e*n}),Fd=Tr({fX:0,f$:0,a1:-1}),Jo=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fX:a.fX*l.fX+a.f$*i.fX,f$:a.fX*l.f$+a.f$*i.f$,a1:a.fX*l.a1+a.f$*i.a1}}),qo=function(e){var r=e;return Dr(r)},kn=function(e){var r=e;return r},Ed=x(function(e,r,n){e:for(;;){var a=o(Ft,Me,e),t=a.a,i=a.b;if(U(et(t),Me)<0)return o(oc,!0,{z:r,l:n,p:t});var c=i,l=o(F,tc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),el=function(e){return e.b?p(Ed,e,P,0):nc},ft=function(e){return{D:o(fe,function(r){return N(3*r,3*r+1,3*r+2)},o(va,0,Mr(e)-1)),ah:el(tr(o(fe,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},Rd=function(e){return sr(2*vr*e)},rl=Tr({fX:0,f$:1,a1:0}),ro=rl,Zo=Wc({cC:nn,c4:Yt,c5:ro}),Cr=x(function(e,r,n){var a=e,t=r,i=n;return{fX:a,f$:t,a1:i}}),$r=0,nl=function(){var e=72,r=o(zd,e,Rd(1)),n=Jr(1),a=kn(Hc),t=kn(Fd),i=Jr(1),c=o(Ie,.5,i),l=p(Cr,$r,$r,c),u=o(Ie,-.5,i),v=p(Cr,$r,$r,u),s=function(f){var g=o(Ie,f,r),b=kn(o(Jo,Zo,Uo(g))),C=o(Ie,Oo(g),n),y=o(Ie,qo(g),n),_=p(Cr,C,y,c),w=p(Cr,C,y,u),z=o(zc,e,f+1),G=o(Ie,z,r),E=kn(o(Jo,Zo,Uo(G))),B=o(Ie,Oo(G),n),R=o(Ie,qo(G),n),W=p(Cr,B,R,u),A=p(Cr,B,R,c);return h([N({o:t,bV:v},{o:t,bV:W},{o:t,bV:w}),N({o:b,bV:w},{o:E,bV:W},{o:E,bV:A}),N({o:b,bV:w},{o:E,bV:A},{o:b,bV:_}),N({o:a,bV:l},{o:a,bV:_},{o:a,bV:A})])},m=o(fe,s,o(va,0,e-1)),d=ft(tr(m));return Td(Vd(d))}(),Dn={$:0},Nd=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),jd=$(function(e,r){var n=e,a=r;return{fX:a.f$*n.a1-a.a1*n.f$,f$:a.a1*n.fX-a.fX*n.a1,a1:a.fX*n.f$-a.f$*n.fX}}),Yo=$(function(e,r){var n=e,a=r;return{fX:a.fX-n.fX,f$:a.f$-n.f$,a1:a.a1-n.a1}}),al=function(e){return e},wr=wu,Gd={fX:0,f$:0,a1:0},Wd=$(function(e,r){var n=e,a=r,t=o(Ye,Q(a.fX),o(Ye,Q(a.f$),Q(a.a1)));if(t){var i=a.a1/t,c=a.f$/t,l=a.fX/t,u=wr(l*l+c*c+i*i);return{fX:n*l/u,f$:n*c/u,a1:n*i/u}}else return Gd}),Hd=Wd(al(1)),Xd=x(function(e,r,n){var a=o(Yo,r,n),t=o(Yo,e,r);return Hd(o(jd,a,t))}),Id=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Zc(p(Xd,u,l,c)),s={o:v,bV:Hr(u)},m={o:v,bV:Hr(l)},d={o:v,bV:Hr(c)};return o(F,s,o(F,m,o(F,d,n)))}),Od=j(function(e,r,n,a){if(r.$===1)return Z;var t=r.a;if(n.$===1)return Z;var i=n.a;if(a.$===1)return Z;var c=a.a;return ae(p(e,t,i,c))}),st=4294967295>>>32-gn,mt=tu,Ud=x(function(e,r,n){e:for(;;){var a=st&r>>>e,t=o(mt,a,n);if(t.$){var v=t.a;return o(mt,st&r,v)}else{var i=t.a,c=e-gn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Jd=function(e){return e>>>5<<5},qd=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?Z:U(e,Jd(n))>-1?ae(o(mt,st&e,i)):ae(p(Ud,a,e,t))}),Ma=$(function(e,r){return o(qd,e,Kc(r))}),Zd=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Od,x(function(c,l,u){return N(c,l,u)}),o(Ma,a,e),o(Ma,t,e),o(Ma,i,e))};return o(Ot,r,Yc(e))},Yd=x(function(e,r,n){return e(r(n))}),Qd=$(function(e,r){return!o(pc,o(Yd,kf,e),r)}),Kd=$(function(e,r){return p(cr,$(function(n,a){return e(n)?o(F,n,a):a}),P,r)}),e0=function(e){var r=e.a;return r},r0=$(function(e,r){var n=e0(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(Qd,a,r)?{D:r,ah:e}:{D:o(Kd,a,r),ah:e}}),Xr=function(e){var r=e;return r},Wn=$(function(e,r){var n=Xr(r),a=Xr(e);return T(N(a.fX,a.f$,a.a1),N(n.fX,n.f$,n.a1))}),Qo=p(Kt,0,0,0),ka=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ht,o(Wn,e,r),t);if(v.$){var m={o:Qo,bV:Hr(r)},d={o:Qo,bV:Hr(e)},f=u+1,g=u;return N(o(F,N(n,g,f),o(F,N(n,f,a),c)),o(F,m,o(F,d,l)),u+2)}else{var s=v.a;return N(o(F,N(n,s,a),c),l,u)}}),n0=xe(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,C=e,y=r,_=v,w=a+3,z=Ce(ka,s,d,f,b,r,Ce(ka,m,s,g,f,r,Ce(ka,d,m,b,g,r,t)));e=C,r=y,n=_,a=w,t=z;continue e}else{var G=t,E=G.a,B=G.b;return T(E,ze(B))}}),a0=xe(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,C=p(mn,o(Wn,d,s),f,p(mn,o(Wn,s,m),g,p(mn,o(Wn,m,d),b,t))),y=o(F,N(b,g,f),a),_=e,w=v,z=n+3,G=y,E=C;e=_,r=w,n=z,a=G,t=E;continue e}else return N(a,t,n)}),_r=x(function(e,r,n){var a=Zd(n),t=p(cr,Id(r),P,a),i=S(a0,r,a,0,P,Nc),c=i.a,l=i.b,u=i.c,v=S(n0,r,l,a,0,N(c,P,u)),s=v.a,m=v.b,d=vt(m)?t:ie(t,m);return p(Nd,e,o(r0,el(d),s),o(eo,d,s))}),ca=function(e){var r=e;return r},t0=function(e){switch(e.$){case 0:return Dn;case 1:var a=e.a,r=e.b,n=o(fe,ca,r);return p(_r,a,Sr,ft(n));case 2:var a=e.a,r=e.b,n=o(fe,ca,r);return p(_r,a,Sr,ft(n));case 3:var a=e.a,t=e.b;return p(_r,a,Sr,t);case 4:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bV},t);case 5:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bV},t);case 6:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bV},t);case 7:var a=e.a,t=e.b;return p(_r,a,function(i){return i.bV},t);case 8:return Dn;case 9:return Dn;default:return Dn}},Ko=t0(nl),tl={$:0},M=tl,ol=function(e){var r=e;return r.cC},o0=function(e){var r=e,n=Q(r.a1),a=Q(r.f$),t=Q(r.fX);if(U(t,a)<1)if(U(t,n)<1){var i=wr(r.a1*r.a1+r.f$*r.f$);return{fX:0,f$:-r.a1/i,a1:r.f$/i}}else{var i=wr(r.f$*r.f$+r.fX*r.fX);return{fX:-r.f$/i,f$:r.fX/i,a1:0}}else if(U(a,n)<1){var i=wr(r.a1*r.a1+r.fX*r.fX);return{fX:r.a1/i,f$:0,a1:-r.fX/i}}else{var i=wr(r.fX*r.fX+r.f$*r.f$);return{fX:-r.f$/i,f$:r.fX/i,a1:0}}},i0=function(e){var r=o0(e),n=r,a=n,t=e,i=t,c={fX:i.f$*a.a1-i.a1*a.f$,f$:i.a1*a.fX-i.fX*a.a1,a1:i.fX*a.f$-i.f$*a.fX};return T(r,c)},c0=function(e){var r=Zt(e),n=i0(r),a=n.a,t=n.b;return en({cC:ol(e),c4:a,c5:t,c6:r})},l0=function(e){var r=e;return r.fc},de=$(function(e,r){return{$:1,a:e,b:r}}),u0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bD"}},v0=$(function(e,r){switch(r.$){case 0:return o(j$,e,r);case 1:return o(G$,e,r);case 2:return o(W$,e,r);case 3:return o(H$,e,r);case 4:return o(X$,e,r);default:return o(I$,e,r)}}),$0=$(function(e,r){switch(r.$){case 0:return o(p$,e,r);case 1:return o(b$,e,r);case 2:return o(g$,e,r);case 3:return o(h$,e,r);case 4:return o(_$,e,r);case 5:return o(C$,e,r);case 6:return o(y$,e,r);case 7:return o(x$,e,r);default:return w$(e)}}),le=d$,f0=1029,s0=function(e){return{$:5,a:e}},il=function(e){var r=e;return s0(r)},m0=il(f0),d0=1028,p0=il(d0),ye=x(function(e,r,n){return r===1?e?o(F,m0,n):o(F,p0,n):n}),cl={src:`
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
    `,attributes:{position:"bV",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Da=j(function(e,r,n,a){return o(de,r,ne(function(t,i,c,l,u,v,s,m){return S(le,p(ye,l,a,m),cl,u0,n,{bD:e,b:c,c:i,d:v,e:t,f:u})}))}),ll={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},ul={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},er=j(function(e,r,n,a){return o(de,r,ne(function(t,i,c,l,u,v,s,m){return S(le,p(ye,l,a,m),ul,ll,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),vl=$(function(e,r){return{$:3,a:e,b:r}}),b0={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bU",sceneProperties:"e"}},$l={src:`
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
    `,attributes:{position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bU",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},g0=j(function(e,r,n,a){return o(vl,n,ne(function(t,i,c,l,u,v,s,m){return S(le,m,$l,b0,a,{aw:e,b:c,c:i,bU:r,d:v,e:t,f:u})}))}),fl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},ga=function(e){var r=e;return r},no=a$,rr=xe(function(e,r,n,a,t){return o(de,n,ne(function(i,c,l,u,v,s,m,d){return S(le,p(ye,u,t,d),ul,fl,a,{aN:o(no,ga(r),e),b:l,c,d:s,e:i,f:v})}))}),h0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bU",sceneProperties:"e"}},_0=xe(function(e,r,n,a,t){return o(vl,a,ne(function(i,c,l,u,v,s,m,d){return S(le,d,$l,h0,t,{aN:o(no,ga(r),e),b:l,c,bU:n,d:s,e:i,f:v})}))}),sl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bM",lights56:"bN",lights78:"bO",materialColor:"cr",sceneProperties:"e",viewMatrix:"f"}},ml={src:`
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
    `,attributes:{normal:"o",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},An=j(function(e,r,n,a){return o(de,r,ne(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(le,p(ye,l,a,m),ml,sl,n,{P:f,be:d.be,bM:d.bM,bN:d.bN,bO:d.bO,cr:e,b:c,c:i,d:v,e:t,f:u})}))}),dl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bM",lights56:"bN",lights78:"bO",materialColorTexture:"cs",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},pl={src:`
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
    `,attributes:{normal:"o",position:"bV",tangent:"ef",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},C0=Xe(function(e,r,n,a,t,i){return o(de,a,ne(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(le,p(ye,v,i,f),pl,dl,t,{P:b,be:g.be,bM:g.bM,bN:g.bN,bO:g.bO,cs:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),bl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b7",constantBaseColor:"ca",constantMetallic:"cb",constantRoughness:"cc",enabledLights:"P",lights12:"be",lights34:"bM",lights56:"bN",lights78:"bO",metallicTexture:"cw",normalMapTexture:"aW",roughnessTexture:"cT",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},y0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(de,u,ne(function(m,d,f,g,b,C,y,_){var w=y.a,z=y.b;return S(le,p(ye,g,s,_),pl,bl,v,{b7:e,ca:r,cb:i,cc:a,P:z,be:w.be,bM:w.bM,bN:w.bN,bO:w.bO,cw:t,b:f,c:d,aW:c,d:C,cT:n,e:m,a$:l,f:b})}))}}}}}}}}}}},gl={src:`
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
    `,attributes:{},uniforms:{baseColor:"b6",enabledLights:"P",lights12:"be",lights34:"bM",lights56:"bN",lights78:"bO",metallic:"cv",roughness:"cS",sceneProperties:"e",viewMatrix:"f"}},Bn=Xe(function(e,r,n,a,t,i){return o(de,a,ne(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(le,p(ye,v,i,f),ml,gl,t,{b6:e,P:b,be:g.be,bM:g.bM,bN:g.bN,bO:g.bO,cv:n,b:u,c:l,d:m,cS:r,e:c,f:s})}))}),x0=function(e){return{$:0,a:e}},ei=$(function(e,r){return{$:1,a:e,b:r}}),pn=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),cn=t$,w0=function(e){return L(cn,an(e),tn(e),on(e),1)},ao=L(cn,0,0,0,0),Hn=$(function(e,r){if(r.$){var a=r.a.C;return T(a,ao)}else{var n=r.a;return T(e,w0(n))}}),hl=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(ei,T(t,ao),o(pn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ei,o(Hn,t,e),o(pn,t,r))}else{var a=n.a.a;return n.b.a,x0(a)}}),S0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vn=j(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),L0=j(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Fe=Zv,P0=function(e){return o(Fe,e,1)},dt=o(Fe,0,0),Rr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,dt)}else{var n=r.a;return T(e,P0(n))}}),_l=j(function(e,r,n,a){var t=L(L0,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Vn,T(u,ao),o(Rr,u,r),o(Rr,u,n),o(pn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Vn,o(Hn,u,e),T(u,dt),o(Rr,u,n),o(pn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Vn,o(Hn,u,e),o(Rr,u,r),T(u,dt),o(pn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Vn,o(Hn,u,e),o(Rr,u,r),o(Rr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(S0,i,c,l)}}),T0={src:`
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
    `,attributes:{},uniforms:{backlight:"b4",colorTexture:"bD",sceneProperties:"e"}},Aa=xe(function(e,r,n,a,t){return o(de,n,ne(function(i,c,l,u,v,s,m,d){return S(le,p(ye,u,t,d),cl,T0,a,{b4:ga(r),bD:e,b:l,c,d:s,e:i,f:v})}))}),Cl={src:`
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
    `,attributes:{normal:"o",position:"bV",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},z0=j(function(e,r,n,a){return o(de,r,ne(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(le,p(ye,l,a,m),Cl,dl,n,{P:f,be:d.be,bM:d.bM,bN:d.bN,bO:d.bO,cs:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),M0=gt(function(e,r,n,a,t,i,c,l,u){return o(de,c,ne(function(v,s,m,d,f,g,b,C){var y=b.a,_=b.b;return S(le,p(ye,d,u,C),Cl,bl,l,{b7:e,ca:r,cb:i,cc:a,P:_,be:y.be,bM:y.bM,bN:y.bN,bO:y.bO,cw:t,b:m,c:s,aW:e,d:g,cT:n,e:v,a$:0,f})}))}),to=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),k0=function(e){var r=e;return p(to,r.dR,r.dO,.5)},D0=function(e){var r=e;return p(to,r.dS,r.dP,.5)},A0=function(e){var r=e;return p(to,r.dT,r.dQ,.5)},B0=function(e){return p(Cr,k0(e),D0(e),A0(e))},V0=function(e){var r=e;return r.dO},F0=function(e){var r=e;return r.dP},yl=function(e){var r=e;return r.dQ},E0=function(e){var r=e;return r.dR},R0=function(e){var r=e;return r.dS},xl=function(e){var r=e;return r.dT},Ir=$(function(e,r){var n=e,a=r;return a-n}),wl=function(e){return N(o(Ir,E0(e),V0(e)),o(Ir,R0(e),F0(e)),o(Ir,xl(e),yl(e)))},X=function(e){var r=wl(e),n=r.a,a=r.b,t=r.c;return{eA:Ln(B0(e)),eV:n/2,eW:a/2,eX:t/2}},N0=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return L(Da,l,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Da,l,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Da,l,X(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(er,n,X(t),c,a);case 8:var t=r.a,c=r.c;return L(er,n,X(t),c,0);case 9:var t=r.a,c=r.c;return L(er,n,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(g0,n,i,X(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return S(Aa,l,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Aa,l,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Aa,l,v,X(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(rr,u,v,X(t),c,a);case 8:var t=r.a,c=r.c;return S(rr,u,v,X(t),c,0);case 9:var t=r.a,c=r.c;return S(rr,u,v,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(_0,u,v,i,X(t),c)}}case 2:e.a;var s=e.b,E=e.c,m=o(hl,s,E);if(m.$){var g=m.a,b=g.a;g.b;var C=m.b,y=C.a,_=C.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return L(z0,b,X(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Ce(C0,b,y,_,X(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var d=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return L(An,d,X(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return L(An,d,X(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return L(An,d,X(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(An,d,X(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var w=e.b,z=e.c,G=e.d,E=e.e,B=L(_l,w,z,G,E);if(B.$){var O=B.a,q=O.a,oe=O.b,ue=B.b,te=ue.a,$e=ue.b,we=B.c,be=we.a,lr=we.b,ur=B.d,y=ur.a,_=ur.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Kl(M0,q,oe,te,$e,be,lr,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return y0(q)(oe)(te)($e)(be)(lr)(y)(_)(X(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var R=B.a,W=B.b,A=B.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return Ce(Bn,R,W,A,X(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return Ce(Bn,R,W,A,X(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Ce(Bn,R,W,A,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Ce(Bn,R,W,A,X(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),Ba=function(e){var r=e;return r.fX},Va=function(e){var r=e;return r.f$},Fa=function(e){var r=e;return r.a1},j0=function(e){var r=e,n=Fa(r.c6),a=Va(r.c6),t=Ba(r.c6),i=Fa(r.c5),c=Va(r.c5),l=Ba(r.c5),u=Fa(r.c4),v=Va(r.c4),s=Ba(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ke=function(e){var r=e;return r},G0=function(e){var r=Ln(Kr(e)),n=ke(Er(e)),a=ke(Fr(e)),t=ke(Vr(e));return{dp:j0(e),q:t.fX,r:t.f$,s:t.a1,t:a.fX,u:a.f$,v:a.a1,w:n.fX,x:n.f$,y:n.a1,H:r.fX,I:r.f$,J:r.a1,bZ:1}},jr=$(function(e,r){return{$:5,a:e,b:r}}),Sl=$(function(e,r){return{dp:zr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bZ,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bZ,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bZ,bZ:e.bZ*r.bZ}}),oo=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(Sl,a,e);return o(jr,i,t);case 1:return o(jr,e,n);case 3:return o(jr,e,n);case 2:return o(jr,e,n);default:return o(jr,e,n)}}),W0=$(function(e,r){return o(oo,G0(e),r)}),io=function(e){return{$:2,a:e}},H0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eA;return{eA:{fX:n*i.fX,f$:a*i.f$,a1:t*i.a1},eV:n*r.eV,eW:a*r.eW,eX:t*r.eX}}),X0=i$,I0=o$,ri=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=I0(a),g=f.fX,b=f.f$,C=f.a1,y=f.eo,_=X0({eo:y,fX:g*s,f$:b*m,a1:C*d});return _t(r,n,_,t,i,c,l,u,v)}}}}}}}}}},pt=$(function(e,r){switch(r.$){case 0:return tl;case 5:var n=r.a,a=r.b;return o(jr,n,o(pt,e,a));case 1:var t=r.a,i=r.b;return o(de,o(H0,e,t),o(ri,e,i));case 3:return r;case 2:var i=r.a;return io(o(ri,e,i));default:var c=r.a;return Ic(o(fe,pt(e),c))}}),O0=$(function(e,r){var n=r;return o(pt,e,n)}),U0=function(e){var r=e;return r.fx},Ll={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},qr=519,Pl=7683,Tl=7682,pe=7680,J0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},co=x(function(e,r,n){var a=e.cP,t=e.cq,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(ee,c(v.bm),o(ee,l(v.a9),o(ee,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(J0,a,t,i)))}),q0=p(co,{cq:0,cP:0,c3:15},{a9:pe,bm:qr,bu:pe,bv:Pl},{a9:pe,bm:qr,bu:pe,bv:Tl}),Z0=p(co,{cq:0,cP:0,c3:15},{a9:pe,bm:qr,bu:pe,bv:Tl},{a9:pe,bm:qr,bu:pe,bv:Pl}),zl=$(function(e,r){return e?o(F,Z0,r):o(F,q0,r)}),Y0={src:`
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
    `,attributes:{normal:"o",position:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",viewMatrix:"f"}},Q0=function(e){if(e.$){var r=e.c;return ae(ne(function(n,a,t,i,c,l,u,v){return S(le,o(zl,i,v),Y0,Ll,r,{b:t,c:a,d:l,e:n,b$:u,f:c})}))}else return Z},ni=function(e){var r=Q0(e);if(r.$)return M;var n=r.a;return io(n)},K0=j(function(e,r,n,a){var t=c0(_d(a)),i=o(N0,n,nl),c=function(){var m=T(e,r);return m.a?m.b?ba(h([i,ni(Ko)])):i:m.b?ni(Ko):M}(),l=U0(a),u=l,v=l0(a),s=v;return o(W0,t,o(O0,N(u,u,s),c))}),e1=$(function(e,r){return L(K0,!0,!0,e,r)}),r1=x(function(e,r,n){return o(e1,e,p(hd,nn,rl,{fc:Jr(n),fx:Jr(r)}))}),n1=x(function(e,r,n){return{fX:e,f$:r,a1:n}}),a1=function(e){var r=qc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fX,I:r.f$,J:r.a1,bZ:1}},t1=$(function(e,r){return o(oo,a1(e),r)}),o1=$(function(e,r){return o(t1,e,r)}),lo=function(e){var r=e.a,n=e.b,a=e.c;return o1(p(n1,r,n,a))},ai=function(e){return lo(N(e,0,0))},i1=function(e){return lo(N(0,e,0))},c1=function(e){return lo(N(0,0,e))},l1=$(function(e,r){var n=r,a=Ln(ol(e)),t=.5*n,i=kr(t),c=Dr(t),l=ke(Zt(e)),u=l.fX*c,v=i*u,s=u*u,m=l.f$*c,d=i*m,f=u*m,g=m*m,b=1-2*(s+g),C=l.a1*c,y=i*C,_=2*(f-y),w=2*(f+y),z=u*C,G=2*(z+d),E=2*(z-d),B=m*C,R=2*(B-v),W=2*(B+v),A=C*C,O=1-2*(g+A),q=1-2*(s+A);return{dp:!0,q:O,r:w,s:E,t:_,u:q,v:W,w:G,x:R,y:b,H:a.fX-O*a.fX-_*a.f$-G*a.a1,I:a.f$-w*a.fX-q*a.f$-R*a.a1,J:a.a1-E*a.fX-W*a.f$-b*a.a1,bZ:1}}),u1=x(function(e,r,n){return o(oo,o(l1,e,r),n)}),Ml=x(function(e,r,n){return p(u1,e,r,n)}),v1=o(rn,nn,ro),$1=$(function(e,r){return p(Ml,v1,sr(e),r)}),f1=o(rn,nn,pa),ti=$(function(e,r){return p(Ml,f1,sr(e),r)}),s1=pu,m1=gu,d1=function(e){var r=e.a,n=e.b,a=e.c;return wr(o(Pr,r,2)+o(Pr,n,2)+o(Pr,a,2))},p1=function(e){var r=e.a,n=e.b,a=e.c,t=d1(N(r,n,a));return{bz:o(m1,n,r),e1:s1(a/t),fx:t}},Ea=j(function(e,r,n,a){var t=a.a,i=a.b,c=N(i.fX-t.fX,i.f$-t.f$,i.a1-t.a1),l=c.a,u=c.b,v=c.c,s=p1(N(l,u,v)),m=s.fx,d=s.bz,f=s.e1;return o(c1,t.a1,o(i1,t.f$,o(ai,t.fX,o(ti,d,o($1,f-ia(90),o(ai,m/2,o(ti,ia(90),p(r1,Oc(r),n/2,m))))))))}),b1=function(e){return Qt(h([L(Ea,e,dd,.1,T(p(nr,0,0,0),p(nr,10,0,0))),L(Ea,e,fd,.1,T(p(nr,0,0,0),p(nr,0,10,0))),L(Ea,e,Xc,.1,T(p(nr,0,0,0),p(nr,0,0,10)))]))},Ra=function(e){return e/255},g1=x(function(e,r,n){return L(hr,Ra(e),Ra(r),Ra(n),1)}),h1=function(e){return e},_1=function(e){return Jr(.01*e)},oi=function(e){return e},C1=function(e){return e},y1=function(e){return{$:0,a:e}},x1=y1,w1={$:3},S1=w1,L1=j(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),P1=L1,T1=$(function(e,r){return tr(o(fe,e,r))}),z1=function(e){return{$:1,a:e}},M1=z1,k1=function(e){return o(gr,"height",Pe(e))},D1=function(e){return _v(Sv(e))},A1=D1,B1=function(e){return{$:2,a:e}},V1=B1,F1=function(e){return o(yr,"",e)},E1=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return He(l*1e3)/1e3},c=function(l){return He(l*1e4)/100};return F1(h(["rgba(",re(c(r)),"%,",re(c(n)),"%,",re(c(a)),"%,",re(i(t)),")"]))},R1=x(function(e,r,n){return p(N$,e,r,n)}),ii=function(e){var r=e;return r},Na=L(cn,1,1,1,1),Oe=x(function(e,r,n){return o(fe,function(a){return o(a,r,n)},e)}),N1=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),j1=$(function(e,r){var n=e,a=r.fX,t=r.f$;return p(N1,n*a/t,n,n*(1-a-t)/t)}),G1=function(e){var r=e.a,n=e.b,a=e.c;return p(Kt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},uo=$(function(e,r){return G1(o(j1,e,r))}),Je=v$,W1=function(e){return Je({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},ja=xe(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(cn,a.bZ,a.bZ,a.bZ,i);return Ce(t,e,c,W1(a),a.dp,r,n)}),kl=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Sl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(F,S(ja,e,r,n,a,g),i.M);return{M:b,U:i.U,fE:i.fE};case 3:var C=t.b,y=o(F,S(ja,e,r,n,a,C),i.U);return{M:i.M,U:y,fE:i.fE};case 2:var _=t.a,w=o(F,S(ja,e,r,n,a,_),i.fE);return{M:i.M,U:i.U,fE:w};default:var z=t.a;return p(xn,L(kl,e,r,n,a),i,z)}}),H1=j(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Dl=H1,vo=j(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),X1=function(e){var r=e.Z,n=e.W,a=e.V;return L(vo,518,r,n,a)},I1=$(function(e,r){return{$:6,a:e,b:r}}),O1=I1,Al=h([X1({V:1,W:0,Z:!1}),L(Dl,!1,!1,!1,!1),o(O1,0,1)]),$o=8,Bl=15,Or=7681,U1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},J1=$(function(e,r){return{$:0,a:e,b:r}}),q1=J1({df:1,$7:0,dV:5}),Z1=q1(h([{bV:o(Fe,-1,-1)},{bV:o(Fe,1,-1)},{bV:o(Fe,-1,1)},{bV:o(Fe,1,1)}])),Y1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bV"},uniforms:{}},fo=function(e){return p(co,{cq:e.cq,cP:e.cP,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},so=function(e){return S(le,h([fo(e),L(Dl,!1,!1,!1,!1)]),Y1,U1,Z1,{})},Q1=so({a9:Or,cq:0,cP:$o,bm:qr,c3:Bl,bu:Or,bv:Or}),K1=516,ci=5386,ep=function(e){return o(Pr,2,e+4)},Vl=function(e){return so({a9:pe,cq:Bl,cP:$o,bm:K1,c3:ep(e),bu:ci,bv:ci})},rp=x(function(e,r,n){return tr(h([p(Oe,e,n,Al),h([Vl(r),Q1])]))}),np=$(function(e,r){return tr(o(Qi,rp(e),r))}),ap=function(e){var r=e.Z,n=e.W,a=e.V;return L(vo,513,r,n,a)},tp=ap({V:1,W:0,Z:!0}),op=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},ip=function(e){var r=e.bX,n=e.bH,a=e.bA,t=e.bw,i=e.bC,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return op(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},cp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),li=$(function(e,r){var n=e,a=r;return p(cp,32774,n,a)}),lp=1,ui=771,up=770,mo=ip({bw:0,aH:o(li,lp,ui),bA:0,bC:o(li,up,ui),bH:0,bX:0}),Nr=h([tp,mo]),vi=function(e){var r=e;return Kr(r)},vp=function(e){return e},$p=function(e){return en({cC:vp({fX:e.H,f$:e.I,a1:e.J}),c4:Tr({fX:e.q,f$:e.r,a1:e.s}),c5:Tr({fX:e.t,f$:e.u,a1:e.v}),c6:Tr({fX:e.w,f$:e.x,a1:e.y})})},Ga=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fX:a.fX*v.fX+a.f$*v.f$+a.a1*v.a1,f$:a.fX*l.fX+a.f$*l.f$+a.a1*l.a1,a1:a.fX*i.fX+a.f$*i.f$+a.a1*i.a1}}),Fl=$(function(e,r){var n=e,a=r,t=n.cC,i=t,c=a.fX-i.fX,l=a.f$-i.f$,u=a.a1-i.a1,v=n.c6,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fX:c*g.fX+l*g.f$+u*g.a1,f$:c*d.fX+l*d.f$+u*d.a1,a1:c*s.fX+l*s.f$+u*s.a1}}),El=$(function(e,r){return{cC:o(Fl,e,Kr(r)),c4:o(Ga,e,Vr(r)),c5:o(Ga,e,Fr(r)),c6:o(Ga,e,Er(r))}}),Xn=x(function(e,r,n){return{fX:e,f$:r,a1:n}}),$i=function(e){var r=e;return r},fp=$(function(e,r){var n=$i(r),a=$i(e);return{dO:o(Le,a.dO,n.dO),dP:o(Le,a.dP,n.dP),dQ:o(Le,a.dQ,n.dQ),dR:o(Ve,a.dR,n.dR),dS:o(Ve,a.dS,n.dS),dT:o(Ve,a.dT,n.dT)}}),sp=function(e){var r=e;return N(r.fX,r.f$,r.a1)},In=$(function(e,r){var n=e,a=r;return a+n}),mp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=jn(We(a)),c=jn(We(n)),l=jn(We(t)),u=sp(r),v=u.a,s=u.b,m=u.c;return{dO:o(In,c,v),dP:o(In,i,s),dQ:o(In,l,m),dR:o(Ir,c,v),dS:o(Ir,i,s),dT:o(Ir,l,m)}}),fi=j(function(e,r,n,a){var t=n.eA,i=2*n.eX*r,c=2*n.eW*r,l=2*n.eV*r,u=t.a1*r,v=t.f$*r,s=t.fX*r,m=ke(Er(e)),d=Q(l*m.fX)+Q(c*m.f$)+Q(i*m.a1),f=ke(Fr(e)),g=Q(l*f.fX)+Q(c*f.f$)+Q(i*f.a1),b=ke(Vr(e)),C=Q(l*b.fX)+Q(c*b.f$)+Q(i*b.a1),y=o(mp,N(C,g,d),o(Fl,e,p(Xn,s,v,u)));if(a.$)return ae(y);var _=a.a;return ae(o(fp,_,y))}),bt=j(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 1:var c=t.a,l=L(fi,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 2:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 3:var c=t.a,l=L(fi,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 4:var u=t.a,f=e,g=r,b=L(bt,e,r,n,u),C=i;e=f,r=g,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(El,$p(v),e),d=r*v.bZ,f=e,g=r,b=L(bt,m,d,n,h([s])),C=i;e=f,r=g,n=b,a=C;continue e}}else return n}),dp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bZ:1},pp=function(e){var r=e;return r},si=so({a9:Or,cq:0,cP:$o,bm:qr,c3:255,bu:Or,bv:Or}),bp=function(e){var r=e,n=o(Ye,Q(r.fX),o(Ye,Q(r.f$),Q(r.a1)));if(n){var a=r.a1/n,t=r.f$/n,i=r.fX/n,c=wr(i*i+t*t+a*a);return c*n}else return $r},_e={bA:0,ez:!1,bH:0,cL:0,bX:0,c_:0,fX:0,f$:0,a1:0},Ae=$(function(e,r){var n=e,a=r;return Je({dx:n.fX,dy:n.bX,dz:a.fX,dA:a.bX,dB:n.f$,dC:n.bH,dD:a.f$,dE:a.bH,dF:n.a1,dG:n.bA,dH:a.a1,dI:a.bA,dJ:n.c_,dK:n.cL,dL:a.c_,dM:a.cL})}),fn=T({be:o(Ae,_e,_e),bM:o(Ae,_e,_e),bN:o(Ae,_e,_e),bO:o(Ae,_e,_e)},L(cn,0,0,0,0)),Rl=514,Nl=function(e){var r=e.Z,n=e.W,a=e.V;return L(vo,515,r,n,a)},jl=240,gp=h([Nl({V:1,W:0,Z:!0}),fo({a9:pe,cq:jl,cP:0,bm:Rl,c3:0,bu:pe,bv:pe}),mo]),hp=$(function(e,r){var n=e,a=r.fl,t=r.eS,i=r.es,c=We(a),l=c,u=We(t),v=u,s=n.cN;if(s.$){var d=s.a;return nt(v)?Je({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Je({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return nt(v)?Je({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Je({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Fn=$(function(e,r){return(1&e>>r)===1?0:1}),_p=function(e){return h([Nl({V:1,W:0,Z:!0}),fo({a9:pe,cq:jl,cP:e,bm:Rl,c3:0,bu:pe,bv:pe}),mo])},Cp=x(function(e,r,n){return tr(o(fe,function(a){var t=a<<4,i=L(cn,o(Fn,a,0),o(Fn,a,1),o(Fn,a,2),o(Fn,a,3));return p(Oe,e,T(r,i),_p(t))},o(va,1,o(Pr,2,n)-1)))}),Cn=function(e){var r=e;return{fX:-r.fX,f$:-r.f$,a1:-r.a1}},yp=$$,mi=function(e){var r=e;return Cn(Er(r))},xp={cC:nn,c4:Yt,c5:ro,c6:pa},wp=function(e){var r=Ln(Kr(e)),n=ke(Er(e)),a=ke(Fr(e)),t=ke(Vr(e));return Je({dx:t.fX,dy:a.fX,dz:n.fX,dA:r.fX,dB:t.f$,dC:a.f$,dD:n.f$,dE:r.f$,dF:t.a1,dG:a.a1,dH:n.a1,dI:r.a1,dJ:0,dK:0,dL:0,dM:1})},Sp=$(function(e,r){var n=r;return wp(o(El,n,e))}),Lp=function(e){return o(Sp,xp,e)},Pp=function(e){var r=e;return r.c2},Tp=function(e){var r=e;return Vr(r)},zp=x(function(e,r,n){var a=e,t=r,i=n;return{fX:a,f$:t,a1:i}}),Mp=function(e){var r=e;return Fr(r)},kp=function(e){var r=Pp(e.ex),n=en({cC:vi(r),c4:Tp(r),c5:Mp(r),c6:Cn(mi(r))}),a=ba(e.aP),t=a,i=L(bt,n,1,Z,h([t]));if(i.$===1)return P;var c=i.a,l=Lp(r),u=o(Ie,.99,o(Le,We(e.aJ),$t(yl(c)))),v=wl(c),s=v.a,m=v.b,d=v.c,f=bp(p(zp,s,m,d)),g=o(Ie,1.01,o(In,f,$t(xl(c)))),b=o(hp,e.ex,{es:e.es,eS:g,fl:u}),C=yp(b).dM,y=C?ke(Cn(mi(r))):Xr(vi(r)),_=function(){var te=e.b0;switch(te.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var $e=te.a;return T(3,$e);case 4:var $e=te.a;return T(4,$e);default:return T(5,0)}}(),w=_.a,z=_.b,G=e.bF,E=G,B=o(uo,E,e.b2),R=B,W=Je({dx:0,dy:y.fX,dz:an(R),dA:e.ed,dB:0,dC:y.f$,dD:tn(R),dE:pp(f),dF:0,dG:y.a1,dH:on(R),dI:w,dJ:0,dK:C,dL:0,dM:z}),A=Ce(kl,W,l,b,dp,t,{M:P,U:P,fE:P}),O=e.bL;switch(O.$){case 0:var q=O.a;return tr(h([p(Oe,A.M,T(q,Na),Nr),p(Oe,A.U,fn,Nr)]));case 1:var q=O.a;return tr(h([p(Oe,A.M,fn,Nr),h([si]),p(Oe,A.fE,q.be,Al),h([Vl(0)]),p(Oe,A.M,T(q,Na),gp),p(Oe,A.U,fn,Nr)]));default:var oe=O.a,ue=O.b;return tr(h([p(Oe,A.M,T(ue,Na),Nr),h([si]),o(np,A.fE,oe),p(Cp,A.M,ue,Mr(oe)),p(Oe,A.U,fn,Nr)]))}},Dp=function(e){return o(gr,"width",Pe(e))},Ap=$(function(e,r){var n=h([M1(1),V1(0),x1(!0),L(P1,0,0,0,0)]),a=function(){var w=e.b3;switch(w.$){case 0:return N(n,"0",1);case 1:return N(o(F,S1,n),"1",1);default:var z=w.a;return N(n,"0",z)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=ii(v),m=o(K,"height",Pe(s)+"px"),d=ii(u),f=d/s,g=o(T1,function(w){return kp({es:f,ex:e.ex,aJ:e.aJ,aP:w.aP,bF:w.bF,bL:w.bL,ed:c,b0:w.b0,b2:w.b2})},r),b=o(K,"width",Pe(d)+"px"),C=e.aI,y=C,_=E1(y);return p(A1,"div",h([o(K,"padding","0px"),b,m]),h([T(i,p(R1,t,h([Dp(He(d*c)),k1(He(s*c)),b,m,o(K,"display","block"),o(K,"background-color",_)]),g))]))}),Bp=function(e){return o(Ap,{b3:e.b3,aI:e.aI,ex:e.ex,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bF:e.bF,bL:e.bL,b0:e.b0,b2:e.b2}]))},Gl=function(e){return e},di=Gl({fX:.31271,f$:.32902}),Vp=$(function(e,r){var n=e,a=ke(r.eK),t=a.fX,i=a.f$,c=a.a1,l=o(uo,r.cf,r.b9),u=l;return{bA:on(u),ez:n,bH:tn(u),cL:0,bX:an(u),c_:1,fX:-t,f$:-i,a1:-c}}),Fp=function(e){return e},Ep=function(e){return Fp(1.2*o(Pr,2,e))},Wa=function(e){return e},Rp={$:0},Np=Rp,jp=$(function(e,r){var n=e,a=r;return U(a,n)>0}),pi=function(e){var r=e;return r},Gp=function(e){e:for(;;){if(zr(e.e5,$r)&&zr(e.e6,$r))return _e;if(o(jp,We(e.e5),We(e.e6))){var r={b9:e.b9,e5:e.e6,e6:e.e5,ek:Cn(e.ek)};e=r;continue e}else{var n=Q(pi(e.e6)/vr),a=Q(pi(e.e5)/vr),t=ke(e.ek),i=t.fX,c=t.f$,l=t.a1,u=o(uo,al(1),e.b9),v=u;return{bA:a*on(v),ez:!1,bH:a*tn(v),cL:n/a,bX:a*an(v),c_:3,fX:i,f$:c,a1:l}}}},bi=function(e){return Gp({b9:e.b9,e5:e.cf,e6:$r,ek:e.ek})},Wp=x(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),Hp=function(e){var r=e;return r},Wl=function(e){var r=p(Wp,1667,25e3,Hp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Gl({fX:n,f$:a})},Hl=function(e){return e},Xp=Wl(Hl(12e3)),Ip=Wl(Hl(5600)),Op=function(e){return{$:2,a:e}},Up=function(e){return Op(e)},Jp=$(function(e,r){return{$:2,a:e,b:r}}),Xl=function(e){return{$:0,a:e}},En=function(e){var r=e;return r},qp=function(e){var r=e;return r.ez},Zp=Xl(fn.a),Yp=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(F,a,i),c):T(i,o(F,a,c))});return p(cr,n,T(P,P),r)}),Qp=function(e){var r=e;return Je({dx:r.fX,dy:r.bX,dz:0,dA:0,dB:r.f$,dC:r.bH,dD:0,dE:0,dF:r.a1,dG:r.bA,dH:0,dI:0,dJ:r.c_,dK:r.cL,dL:0,dM:0})},Kp=ne(function(e,r,n,a,t,i,c,l){var u=o(Yp,qp,h([En(e),En(r),En(n),En(a)])),v=u.a,s=u.b;if(v.b){var m=ie(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,C=b.a,y=b.b,_=y.a;return o(Jp,o(fe,Qp,v),{be:o(Ae,d,g),bM:o(Ae,C,_),bN:o(Ae,t,i),bO:o(Ae,c,l)})}else return Zp}else return Xl({be:o(Ae,e,r),bM:o(Ae,n,a),bN:o(Ae,t,i),bO:o(Ae,c,l)})}),e3=x(function(e,r,n){return _t(Kp,e,r,n,_e,_e,_e,_e,_e)}),r3=function(e){var r=o(Vp,C1(e.fE),{b9:Ip,eK:e.fM,cf:Wa(8e4)}),n=bi({b9:Xp,cf:Wa(2e4),ek:e.ek}),a=bi({b9:di,cf:Wa(15e3),ek:Cn(e.ek)}),t=p(e3,r,n,a);return Bp({b3:Up(e.dd),aI:e.aI,ex:e.ex,aJ:e.aJ,aK:e.aK,aP:e.aP,bF:Ep(15),bL:t,b0:Np,b2:di})},n3=$(function(e,r){var n=e,a=r,t=kr(a);return{fX:t*kr(n),f$:t*Dr(n),a1:Dr(a)}}),a3=$(function(e,r){return r3({aI:h1(e.eu),ex:e.ex,aJ:_1(.5),dd:e.dd,aK:T(oi(He(e.d9.fV)),oi(He(e.d9.eZ))),aP:r,fE:!0,fM:o(n3,sr(e.fL),sr(e.fN)),ek:pa})}),gi=$(function(e,r){return r}),Ha=function(e){var r=e;return r.fX},Xa=function(e){var r=e;return r.f$},Ia=function(e){var r=e;return r.a1},t3=function(e){var r=ca(e),n=r.a,a=r.b,t=r.c,i=Ha(n),c=Xa(n),l=Ia(n),u=Ha(a),v=Xa(a),s=Ia(a),m=Ha(t),d=Xa(t),f=Ia(t);return Qc({dO:o(Le,i,o(Le,u,m)),dP:o(Le,c,o(Le,v,d)),dQ:o(Le,l,o(Le,s,f)),dR:o(Ve,i,o(Ve,u,m)),dS:o(Ve,c,o(Ve,v,d)),dT:o(Ve,l,o(Ve,s,f))})},hi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},_i={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},sn=function(e){var r=ca(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return Je({dx:i.fX,dy:c.fX,dz:l.fX,dA:0,dB:i.f$,dC:c.f$,dD:l.f$,dE:0,dF:i.a1,dG:c.a1,dH:l.a1,dI:0,dJ:0,dK:0,dL:0,dM:0})},o3=$(function(e,r){return{$:2,a:e,b:r}}),i3=o3({df:3,$7:0,dV:4}),Rn=i3(h([N({cZ:0},{cZ:1},{cZ:2})])),c3=$(function(e,r){var n=t3(r),a=X(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var t=e.b.a;return o(de,a,ne(function(_,w,z,G,E,B,R,W){return S(le,p(ye,G,0,W),hi,ll,Rn,{aw:t,b:z,c:w,d:B,e:_,br:sn(r),f:E})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return o(de,a,ne(function(_,w,z,G,E,B,R,W){return S(le,p(ye,G,0,W),hi,fl,Rn,{aN:o(no,ga(c),i),b:z,c:w,d:B,e:_,br:sn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(hl,l,f);if(u.$)return M;var v=u.a;return o(de,a,ne(function(_,w,z,G,E,B,R,W){var A=R.a,O=R.b;return S(le,p(ye,G,0,W),_i,sl,Rn,{P:O,be:A.be,bM:A.bM,bN:A.bN,bO:A.bO,cr:v,b:z,c:w,d:B,e:_,br:sn(r),f:E})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=L(_l,s,m,d,f);if(g.$)return M;var b=g.a,C=g.b,y=g.c;return o(de,a,ne(function(_,w,z,G,E,B,R,W){var A=R.a,O=R.b;return S(le,p(ye,G,0,W),_i,gl,Rn,{b6:b,P:O,be:A.be,bM:A.bM,bN:A.bN,bO:A.bO,cv:y,b:z,c:w,d:B,cS:C,e:_,br:sn(r),f:E})}))}}),l3=function(){var e=h([{a_:o(Fe,0,1)},{a_:o(Fe,1,1)},{a_:o(Fe,2,1)},{a_:o(Fe,0,-1)},{a_:o(Fe,1,-1)},{a_:o(Fe,2,-1)}]),r=h([N(0,1,2),N(3,5,4),N(3,4,1),N(3,1,0),N(4,5,2),N(4,2,1),N(5,3,0),N(5,0,2)]);return o(eo,e,r)}(),u3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b$",triangleVertexPositions:"br",viewMatrix:"f"}},Ci=function(e){return io(ne(function(r,n,a,t,i,c,l,u){return S(le,o(zl,t,u),u3,Ll,l3,{b:a,c:n,d:c,e:r,b$:l,br:sn(e),f:i})}))},v3=j(function(e,r,n,a){var t=o(c3,n,a),i=T(e,r);return i.a?i.b?ba(h([t,Ci(a)])):t:i.b?Ci(a):M}),$3=$(function(e,r){return L(v3,!0,!0,e,r)}),f3=x(function(e,r,n){return N(e,r,n)}),s3=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o($3,e,p(f3,p(Xn,n.fX,n.f$,n.a1),p(Xn,a.fX,a.f$,a.a1),p(Xn,t.fX,t.f$,t.a1)))}),m3=function(e){if(e.$)return e.a,Qt(P);var r=e.a,n=e.b;return o(s3,Oc(r),n)},Il=$(function(e,r){if(r.$){var n=r.a.bx,t=r.b;return o(gi,n,Qt(o(fe,Il(e),t)))}else{var n=r.a.bx,a=r.b;return o(gi,n,m3(a))}}),d3=$(function(e,r){return o(a3,{eu:p(g1,46,46,46),ex:$d(e),dd:e.dd,d9:e.d9,fL:-ia(135),fN:-ia(45)},h([b1(e),o(Il,e,r)]))}),p3=function(e){return L(km,d3,Nm,Rm,Et(e))},Ol=$(function(e,r){return{$:0,a:e,b:r}}),b3=$(function(e,r){return{$:0,a:e,b:r}}),g3={$:0},h3={eh:N(0,0,0),fX:N(1,0,0),f$:N(0,1,0),a1:N(0,0,1)},Ul={bx:h3,b_:g3},_3=j(function(e,r,n,a){return o(Ol,Ul,o(b3,e,N(r,n,a)))}),C3=L(_3,Xc,p(nr,1,0,0),p(nr,0,1,0),p(nr,0,0,1)),Jl=$(function(e,r){return{$:1,a:e,b:r}}),y3=Jl(Ul),yi=function(e){return{$:1,a:e}},x3=$(function(e,r){if(r.$){var n=r.a,t=r.b;return o(Jl,Ee(n,{b_:yi(e)}),t)}else{var n=r.a,a=r.b;return o(Ol,Ee(n,{b_:yi(e)}),a)}}),w3=p3(y3(h([o(x3,"blue triangle",C3)])));const S3={Main:{init:w3(o(D,function(e){return Se({e4:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Se({eC:c,dd:i,eM:t,fa:a,fv:n,d9:r,fU:e})},o(k,"clock",ve))},o(k,"devicePixelRatio",ve))},o(k,"dt",ve))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return Se({eq:m,eE:s,de:v,eL:u,fb:l,fw:c,fA:i,fF:t,ej:a})},o(k,"alt",Y))},o(k,"control",Y))},o(k,"down",Y))},o(k,"downs",ea(_n)))},o(k,"left",Y))},o(k,"pressedKeys",ea(_n)))},o(k,"right",Y))},o(k,"shift",Y))},o(k,"up",Y))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Se({de:v,e7:u,fg:l,fB:c,fC:i,ej:t,fX:a,f$:n})},o(k,"down",Y))},o(k,"isDown",Y))},o(k,"move",Y))},o(k,"rightDown",Y))},o(k,"rightUp",Y))},o(k,"up",Y))},o(k,"x",ve))},o(k,"y",ve))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Se({eZ:n,fV:r})},o(k,"height",ve))},o(k,"width",ve))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Se({eH:r,eI:e})},o(k,"deltaX",ve))},o(k,"deltaY",ve)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},L3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},P3=()=>{Oa("pointerdown"),Oa("wheel"),Oa("keydown")},Oa=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},T3=S3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});P3();L3(T3);
