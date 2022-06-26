const Bv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}};Bv();function Ie(n,e,r){return r.a=n,r.f=e,r}function $(n){return Ie(2,n,function(e){return function(r){return n(e,r)}})}function w(n){return Ie(3,n,function(e){return function(r){return function(a){return n(e,r,a)}}})}function V(n){return Ie(4,n,function(e){return function(r){return function(a){return function(t){return n(e,r,a,t)}}}})}function Sn(n){return Ie(5,n,function(e){return function(r){return function(a){return function(t){return function(i){return n(e,r,a,t,i)}}}}})}function Zn(n){return Ie(6,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return n(e,r,a,t,i,c)}}}}}})}function wt(n){return Ie(7,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return n(e,r,a,t,i,c,l)}}}}}}})}function cn(n){return Ie(8,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return n(e,r,a,t,i,c,l,u)}}}}}}}})}function li(n){return Ie(9,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return n(e,r,a,t,i,c,l,u,v)}}}}}}}}})}function o(n,e,r){return n.a===2?n.f(e,r):n(e)(r)}function m(n,e,r,a){return n.a===3?n.f(e,r,a):n(e)(r)(a)}function j(n,e,r,a,t){return n.a===4?n.f(e,r,a,t):n(e)(r)(a)(t)}function C(n,e,r,a,t,i){return n.a===5?n.f(e,r,a,t,i):n(e)(r)(a)(t)(i)}function mn(n,e,r,a,t,i,c){return n.a===6?n.f(e,r,a,t,i,c):n(e)(r)(a)(t)(i)(c)}function ui(n,e,r,a,t,i,c,l){return n.a===7?n.f(e,r,a,t,i,c,l):n(e)(r)(a)(t)(i)(c)(l)}function yt(n,e,r,a,t,i,c,l,u){return n.a===8?n.f(e,r,a,t,i,c,l,u):n(e)(r)(a)(t)(i)(c)(l)(u)}function Vv(n,e,r,a,t,i,c,l,u,v){return n.a===9?n.f(e,r,a,t,i,c,l,u,v):n(e)(r)(a)(t)(i)(c)(l)(u)(v)}var Ev=[];function Rv(n){return n.length}var Wv=w(function(n,e,r){for(var a=new Array(n),t=0;t<n;t++)a[t]=r(e+t);return a}),Nv=$(function(n,e){for(var r=new Array(n),a=0;a<n&&e.b;a++)r[a]=e.a,e=e.b;return r.length=a,y(r,e)}),Hv=$(function(n,e){return e[n]});w(function(n,e,r){for(var a=r.length,t=new Array(a),i=0;i<a;i++)t[i]=r[i];return t[n]=e,t});$(function(n,e){for(var r=e.length,a=new Array(r+1),t=0;t<r;t++)a[t]=e[t];return a[r]=n,a});w(function(n,e,r){for(var a=r.length,t=0;t<a;t++)e=o(n,r[t],e);return e});var Gv=w(function(n,e,r){for(var a=r.length-1;a>=0;a--)e=o(n,r[a],e);return e});$(function(n,e){for(var r=e.length,a=new Array(r),t=0;t<r;t++)a[t]=n(e[t]);return a});w(function(n,e,r){for(var a=r.length,t=new Array(a),i=0;i<a;i++)t[i]=o(n,e+i,r[i]);return t});w(function(n,e,r){return r.slice(n,e)});w(function(n,e,r){var a=e.length,t=n-a;t>r.length&&(t=r.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=e[l];for(var l=0;l<t;l++)c[l+a]=r[l];return c});$(function(n,e){return e});$(function(n,e){return console.log(n+": "+Uv()),e});function Uv(n){return"<internals>"}function Lr(n){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function on(n,e){for(var r,a=[],t=zo(n,e,0,a);t&&(r=a.pop());t=zo(r.a,r.b,0,a));return t}function zo(n,e,r,a){if(n===e)return!0;if(typeof n!="object"||n===null||e===null)return typeof n=="function"&&Lr(5),!1;if(r>100)return a.push(y(n,e)),!0;n.$<0&&(n=Dc(n),e=Dc(e));for(var t in n)if(!zo(n[t],e[t],r+1,a))return!1;return!0}var Iv=$(on);$(function(n,e){return!on(n,e)});function Y(n,e,r){if(typeof n!="object")return n===e?0:n<e?-1:1;if(typeof n.$=="undefined")return(r=Y(n.a,e.a))||(r=Y(n.b,e.b))?r:Y(n.c,e.c);for(;n.b&&e.b&&!(r=Y(n.a,e.a));n=n.b,e=e.b);return r||(n.b?1:e.b?-1:0)}$(function(n,e){return Y(n,e)<0});$(function(n,e){return Y(n,e)<1});$(function(n,e){return Y(n,e)>0});$(function(n,e){return Y(n,e)>=0});var Ov=$(function(n,e){var r=Y(n,e);return r<0?$u:r?Nd:uu}),fa=0;function y(n,e){return{a:n,b:e}}function T(n,e,r){return{a:n,b:e,c:r}}function W(n,e){var r={};for(var a in n)r[a]=n[a];for(var a in e)r[a]=e[a];return r}$(un);function un(n,e){if(typeof n=="string")return n+e;if(!n.b)return e;var r=he(n.a,e);n=n.b;for(var a=r;n.b;n=n.b)a=a.b=he(n.a,e);return r}var x={$:0};function he(n,e){return{$:1,a:n,b:e}}var qv=$(he);function p(n){for(var e=x,r=n.length;r--;)e=he(n[r],e);return e}function xt(n){for(var e=[];n.b;n=n.b)e.push(n.a);return e}var Jv=w(function(n,e,r){for(var a=[];e.b&&r.b;e=e.b,r=r.b)a.push(o(n,e.a,r.a));return p(a)});V(function(n,e,r,a){for(var t=[];e.b&&r.b&&a.b;e=e.b,r=r.b,a=a.b)t.push(m(n,e.a,r.a,a.a));return p(t)});Sn(function(n,e,r,a,t){for(var i=[];e.b&&r.b&&a.b&&t.b;e=e.b,r=r.b,a=a.b,t=t.b)i.push(j(n,e.a,r.a,a.a,t.a));return p(i)});Zn(function(n,e,r,a,t,i){for(var c=[];e.b&&r.b&&a.b&&t.b&&i.b;e=e.b,r=r.b,a=a.b,t=t.b,i=i.b)c.push(C(n,e.a,r.a,a.a,t.a,i.a));return p(c)});$(function(n,e){return p(xt(e).sort(function(r,a){return Y(n(r),n(a))}))});$(function(n,e){return p(xt(e).sort(function(r,a){var t=o(n,r,a);return t===uu?0:t===$u?-1:1}))});$(function(n,e){return n+e});$(function(n,e){return n-e});$(function(n,e){return n*e});$(function(n,e){return n/e});$(function(n,e){return n/e|0});var Zv=$(Math.pow);$(function(n,e){return e%n});var Yv=$(function(n,e){var r=e%n;return n===0?Lr(11):r>0&&n<0||r<0&&n>0?r+n:r}),Xv=Math.PI,Qv=Math.cos,Kv=Math.sin,nf=Math.tan;$(Math.atan2);function ef(n){return n}function rf(n){return n===1/0||n===-1/0}var af=Math.ceil,tf=Math.floor,of=Math.round,cf=Math.sqrt,Ac=Math.log,lf=isNaN;function uf(n){return!n}$(function(n,e){return n&&e});$(function(n,e){return n||e});$(function(n,e){return n!==e});var $f=$(function(n,e){return n+e});function vf(n){var e=n.charCodeAt(0);return isNaN(e)?q:U(55296<=e&&e<=56319?y(n[0]+n[1],n.slice(2)):y(n[0],n.slice(1)))}$(function(n,e){return n+e});function ff(n){return n.length}$(function(n,e){for(var r=e.length,a=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=n(e[t]+e[t+1]),t+=2;continue}a[t]=n(e[t]),t++}return a.join("")});$(function(n,e){for(var r=[],a=e.length,t=0;t<a;){var i=e[t],c=e.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=e[t],t++),n(i)&&r.push(i)}return r.join("")});function sf(n){for(var e=n.length,r=new Array(e),a=0;a<e;){var t=n.charCodeAt(a);55296<=t&&t<=56319?(r[e-a]=n[a+1],a++,r[e-a]=n[a-1],a++):(r[e-a]=n[a],a++)}return r.join("")}w(function(n,e,r){for(var a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e=o(n,i,e)}return e});var df=w(function(n,e,r){for(var a=r.length;a--;){var t=r[a],i=r.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=r[a]+t),e=o(n,t,e)}return e}),mf=$(function(n,e){return e.split(n)}),pf=$(function(n,e){return e.join(n)}),gf=w(function(n,e,r){return r.slice(n,e)});function bf(n){return n.toLowerCase()}$(function(n,e){for(var r=e.length;r--;){var a=e[r],t=e.charCodeAt(r);if(56320<=t&&t<=57343&&(r--,a=e[r]+a),n(a))return!0}return!1});var hf=$(function(n,e){for(var r=e.length;r--;){var a=e[r],t=e.charCodeAt(r);if(56320<=t&&t<=57343&&(r--,a=e[r]+a),!n(a))return!1}return!0}),Af=$(function(n,e){return e.indexOf(n)>-1}),_f=$(function(n,e){return e.indexOf(n)===0});$(function(n,e){return e.length>=n.length&&e.lastIndexOf(n)===e.length-n.length});var wf=$(function(n,e){var r=n.length;if(r<1)return x;for(var a=0,t=[];(a=e.indexOf(n,a))>-1;)t.push(a),a=a+r;return p(t)});function El(n){return n+""}function yf(n){for(var e=0,r=n.charCodeAt(0),a=r==43||r==45?1:0,t=a;t<n.length;++t){var i=n.charCodeAt(t);if(i<48||57<i)return q;e=10*e+i-48}return t==a?q:U(r==45?-e:e)}function xf(n){if(n.length===0||/[\sxbo]/.test(n))return q;var e=+n;return e===e?U(e):q}function Sf(n){return xt(n).join("")}function Cf(n){var e=n.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+n.charCodeAt(1)-56320+65536:e}function Pf(n){return n<0||1114111<n?"\uFFFD":n<=65535?String.fromCharCode(n):(n-=65536,String.fromCharCode(Math.floor(n/1024)+55296,n%1024+56320))}function jf(n){return{$:0,a:n}}function Lf(n){return{$:1,a:n}}function St(n){return{$:2,b:n}}var kf=St(function(n){return typeof n!="number"?Kn("an INT",n):-2147483647<n&&n<2147483647&&(n|0)===n||isFinite(n)&&!(n%1)?fn(n):Kn("an INT",n)}),zf=St(function(n){return typeof n=="boolean"?fn(n):Kn("a BOOL",n)}),Tf=St(function(n){return typeof n=="number"?fn(n):Kn("a FLOAT",n)}),Mf=St(function(n){return typeof n=="string"?fn(n):n instanceof String?fn(n+""):Kn("a STRING",n)});function Df(n){return{$:3,b:n}}var Ff=$(function(n,e){return{$:6,d:n,b:e}});$(function(n,e){return{$:7,e:n,b:e}});function Oe(n,e){return{$:9,f:n,g:e}}var Bf=$(function(n,e){return{$:10,b:e,h:n}}),Vf=$(function(n,e){return Oe(n,[e])}),Ef=w(function(n,e,r){return Oe(n,[e,r])}),Rf=V(function(n,e,r,a){return Oe(n,[e,r,a])});Sn(function(n,e,r,a,t){return Oe(n,[e,r,a,t])});var Wf=Zn(function(n,e,r,a,t,i){return Oe(n,[e,r,a,t,i])});wt(function(n,e,r,a,t,i,c){return Oe(n,[e,r,a,t,i,c])});cn(function(n,e,r,a,t,i,c,l){return Oe(n,[e,r,a,t,i,c,l])});li(function(n,e,r,a,t,i,c,l,u){return Oe(n,[e,r,a,t,i,c,l,u])});var Nf=$(function(n,e){try{var r=JSON.parse(e);return Qn(n,r)}catch(a){return Fn(o(_i,"This is not valid JSON! "+a.message,e))}}),Rl=$(function(n,e){return Qn(n,e)});function Qn(n,e){switch(n.$){case 2:return n.b(e);case 5:return e===null?fn(n.c):Kn("null",e);case 3:return La(e)?_c(n.b,e,p):Kn("a LIST",e);case 4:return La(e)?_c(n.b,e,Hf):Kn("an ARRAY",e);case 6:var r=n.d;if(typeof e!="object"||e===null||!(r in e))return Kn("an OBJECT with a field named `"+r+"`",e);var v=Qn(n.b,e[r]);return ue(v)?v:Fn(o(Fc,r,v.a));case 7:var a=n.e;if(!La(e))return Kn("an ARRAY",e);if(a>=e.length)return Kn("a LONGER array. Need index "+a+" but only see "+e.length+" entries",e);var v=Qn(n.b,e[a]);return ue(v)?v:Fn(o(vu,a,v.a));case 8:if(typeof e!="object"||e===null||La(e))return Kn("an OBJECT",e);var t=x;for(var i in e)if(e.hasOwnProperty(i)){var v=Qn(n.b,e[i]);if(!ue(v))return Fn(o(Fc,i,v.a));t=he(y(i,v.a),t)}return fn(zn(t));case 9:for(var c=n.f,l=n.g,u=0;u<l.length;u++){var v=Qn(l[u],e);if(!ue(v))return v;c=c(v.a)}return fn(c);case 10:var v=Qn(n.b,e);return ue(v)?Qn(n.h(v.a),e):v;case 11:for(var f=x,s=n.g;s.b;s=s.b){var v=Qn(s.a,e);if(ue(v))return v;f=he(v.a,f)}return Fn(Hd(zn(f)));case 1:return Fn(o(_i,n.a,e));case 0:return fn(n.a)}}function _c(n,e,r){for(var a=e.length,t=new Array(a),i=0;i<a;i++){var c=Qn(n,e[i]);if(!ue(c))return Fn(o(vu,i,c.a));t[i]=c.a}return fn(r(t))}function La(n){return Array.isArray(n)||typeof FileList!="undefined"&&n instanceof FileList}function Hf(n){return o(em,n.length,function(e){return n[e]})}function Kn(n,e){return Fn(o(_i,"Expecting "+n,e))}function gr(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return gr(n.b,e.b);case 6:return n.d===e.d&&gr(n.b,e.b);case 7:return n.e===e.e&&gr(n.b,e.b);case 9:return n.f===e.f&&wc(n.g,e.g);case 10:return n.h===e.h&&gr(n.b,e.b);case 11:return wc(n.g,e.g)}}function wc(n,e){var r=n.length;if(r!==e.length)return!1;for(var a=0;a<r;a++)if(!gr(n[a],e[a]))return!1;return!0}var Gf=$(function(n,e){return JSON.stringify(e,null,n)+""});function $i(n){return n}function Uf(){return[]}function If(){return{}}var Of=w(function(n,e,r){return r[n]=e,r});function qf(n){return $(function(e,r){return r.push(n(e)),r})}function cr(n){return{$:0,a:n}}function Jf(n){return{$:1,a:n}}function ke(n){return{$:2,b:n,c:null}}var To=$(function(n,e){return{$:3,b:n,d:e}});$(function(n,e){return{$:4,b:n,d:e}});function Zf(n){return{$:5,b:n}}var Yf=0;function vi(n){var e={$:0,e:Yf++,f:n,g:null,h:[]};return fi(e),e}function Wl(n){return ke(function(e){e(cr(vi(n)))})}function Nl(n,e){n.h.push(e),fi(n)}var Xf=$(function(n,e){return ke(function(r){Nl(n,e),r(cr(fa))})}),to=!1,yc=[];function fi(n){if(yc.push(n),!to){for(to=!0;n=yc.shift();)Qf(n);to=!1}}function Qf(n){for(;n.f;){var e=n.f.$;if(e===0||e===1){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else if(e===2){n.f.c=n.f.b(function(r){n.f=r,fi(n)});return}else if(e===5){if(n.h.length===0)return;n.f=n.f.b(n.h.shift())}else n.g={$:e===3?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}V(function(n,e,r,a){return si(e,a,n.fq,n.f7,n.f$,function(){return function(){}})});function si(n,e,r,a,t,i){var c=o(Rl,n,e?e.flags:void 0);ue(c)||Lr(2);var l={},u=r(c.a),v=u.a,f=i(g,v),s=Kf(l,g);function g(d,h){var b=o(a,d,v);f(v=b.a,h),Sc(l,b.b,t(v))}return Sc(l,u.b,t(v)),s?{ports:s}:{}}var de={};function Kf(n,e){var r;for(var a in de){var t=de[a];t.a&&(r=r||{},r[a]=t.a(a,e)),n[a]=es(t,e)}return r}function ns(n,e,r,a,t){return{b:n,c:e,d:r,e:a,f:t}}function es(n,e){var r={g:e,h:void 0},a=n.c,t=n.d,i=n.e,c=n.f;function l(u){return o(To,l,Zf(function(v){var f=v.a;return v.$===0?m(t,r,f,u):i&&c?j(a,r,f.i,f.j,u):m(a,r,i?f.i:f.j,u)}))}return r.h=vi(o(To,l,n.b))}var rs=$(function(n,e){return ke(function(r){n.g(e),r(cr(fa))})});$(function(n,e){return o(Xf,n.h,{$:0,a:e})});function Hl(n){return function(e){return{$:1,k:n,l:e}}}function as(n){return{$:2,m:n}}$(function(n,e){return{$:3,n,o:e}});var xc=[],oo=!1;function Sc(n,e,r){if(xc.push({p:n,q:e,r}),!oo){oo=!0;for(var a;a=xc.shift();)ts(a.p,a.q,a.r);oo=!1}}function ts(n,e,r){var a={};Ka(!0,e,a,null),Ka(!1,r,a,null);for(var t in n)Nl(n[t],{$:"fx",a:a[t]||{i:x,j:x}})}function Ka(n,e,r,a){switch(e.$){case 1:var t=e.k,i=os(n,t,a,e.l);r[t]=is(n,i,r[t]);return;case 2:for(var c=e.m;c.b;c=c.b)Ka(n,c.a,r,a);return;case 3:Ka(n,e.o,r,{s:e.n,t:a});return}}function os(n,e,r,a){function t(c){for(var l=r;l;l=l.t)c=l.s(c);return c}var i=n?de[e].e:de[e].f;return o(i,t,a)}function is(n,e,r){return r=r||{i:x,j:x},n?r.i=he(e,r.i):r.j=he(e,r.j),r}function cs(n){de[n]&&Lr(3)}$(function(n,e){return e});function ls(n,e){return cs(n),de[n]={f:us,u:e,a:$s},Hl(n)}var us=$(function(n,e){return function(r){return n(e(r))}});function $s(n,e){var r=x,a=de[n].u,t=cr(null);de[n].b=t,de[n].c=w(function(c,l,u){return r=l,t});function i(c){var l=o(Rl,a,c);ue(l)||Lr(4,n,l.a);for(var u=l.a,v=r;v.b;v=v.b)e(v.a(u))}return{send:i}}var nt,Ce=typeof document!="undefined"?document:{};function di(n,e){n.appendChild(e)}V(function(n,e,r,a){var t=a.node;return t.parentNode.replaceChild(Be(n,function(){}),t),{}});function Mo(n){return{$:0,a:n}}var Gl=$(function(n,e){return $(function(r,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:e,d:mi(r),e:t,f:n,b:i}})}),ce=Gl(void 0),vs=$(function(n,e){return $(function(r,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:e,d:mi(r),e:t,f:n,b:i}})}),fs=vs(void 0);function ss(n,e,r,a){return{$:3,d:mi(n),g:e,h:r,i:a}}var ds=$(function(n,e){return{$:4,j:n,k:e,b:1+(e.b||0)}});function qe(n,e){return{$:5,l:n,m:e,k:void 0}}$(function(n,e){return qe([n,e],function(){return n(e)})});w(function(n,e,r){return qe([n,e,r],function(){return o(n,e,r)})});V(function(n,e,r,a){return qe([n,e,r,a],function(){return m(n,e,r,a)})});Sn(function(n,e,r,a,t){return qe([n,e,r,a,t],function(){return j(n,e,r,a,t)})});Zn(function(n,e,r,a,t,i){return qe([n,e,r,a,t,i],function(){return C(n,e,r,a,t,i)})});wt(function(n,e,r,a,t,i,c){return qe([n,e,r,a,t,i,c],function(){return mn(n,e,r,a,t,i,c)})});cn(function(n,e,r,a,t,i,c,l){return qe([n,e,r,a,t,i,c,l],function(){return ui(n,e,r,a,t,i,c,l)})});li(function(n,e,r,a,t,i,c,l,u){return qe([n,e,r,a,t,i,c,l,u],function(){return yt(n,e,r,a,t,i,c,l,u)})});var Ul=$(function(n,e){return{$:"a0",n,o:e}}),ms=$(function(n,e){return{$:"a1",n,o:e}}),Il=$(function(n,e){return{$:"a2",n,o:e}}),lr=$(function(n,e){return{$:"a3",n,o:e}});w(function(n,e,r){return{$:"a4",n:e,o:{f:n,o:r}}});function ps(n){return n=="script"?"p":n}function gs(n){return/^javascript:/i.test(n.replace(/\s/g,""))?"":n}$(function(n,e){return e.$==="a0"?o(Ul,e.n,bs(n,e.o)):e});function bs(n,e){var r=Ci(e);return{$:e.$,a:r?m(sa,r<3?hs:As,dn(n),e.a):o(tt,n,e.a)}}var hs=$(function(n,e){return y(n(e.a),e.b)}),As=$(function(n,e){return{aq:n(e.aq),c6:e.c6,cW:e.cW}});function mi(n){for(var e={};n.b;n=n.b){var r=n.a,a=r.$,t=r.n,i=r.o;if(a==="a2"){t==="className"?Cc(e,t,i):e[t]=i;continue}var c=e[a]||(e[a]={});a==="a3"&&t==="class"?Cc(c,t,i):c[t]=i}return e}function Cc(n,e,r){var a=n[e];n[e]=a?a+" "+r:r}function Be(n,e){var r=n.$;if(r===5)return Be(n.k||(n.k=n.m()),e);if(r===0)return Ce.createTextNode(n.a);if(r===4){for(var a=n.k,t=n.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:e},c=Be(a,i);return c.elm_event_node_ref=i,c}if(r===3){var c=n.h(n.g);return Do(c,e,n.d),c}var c=n.f?Ce.createElementNS(n.f,n.c):Ce.createElement(n.c);nt&&n.c=="a"&&c.addEventListener("click",nt(c)),Do(c,e,n.d);for(var l=n.e,u=0;u<l.length;u++)di(c,Be(r===1?l[u]:l[u].b,e));return c}function Do(n,e,r){for(var a in r){var t=r[a];a==="a1"?_s(n,t):a==="a0"?xs(n,e,t):a==="a3"?ws(n,t):a==="a4"?ys(n,t):(a!=="value"&&a!=="checked"||n[a]!==t)&&(n[a]=t)}}function _s(n,e){var r=n.style;for(var a in e)r[a]=e[a]}function ws(n,e){for(var r in e){var a=e[r];typeof a!="undefined"?n.setAttribute(r,a):n.removeAttribute(r)}}function ys(n,e){for(var r in e){var a=e[r],t=a.f,i=a.o;typeof i!="undefined"?n.setAttributeNS(t,r,i):n.removeAttributeNS(t,r)}}function xs(n,e,r){var a=n.elmFs||(n.elmFs={});for(var t in r){var i=r[t],c=a[t];if(!i){n.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}n.removeEventListener(t,c)}c=Ss(e,i),n.addEventListener(t,c,pi&&{passive:Ci(i)<2}),a[t]=c}}var pi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){pi=!0}}))}catch{}function Ss(n,e){function r(a){var t=r.q,i=Qn(t.a,a);if(!!ue(i)){for(var c=Ci(t),l=i.a,u=c?c<3?l.a:l.aq:l,v=c==1?l.b:c==3&&l.c6,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),n),s,g;s=f.j;){if(typeof s=="function")u=s(u);else for(var g=s.length;g--;)u=s[g](u);f=f.p}f(u,v)}}return r.q=e,r}function Cs(n,e){return n.$==e.$&&gr(n.a,e.a)}function Ol(n,e){var r=[];return $e(n,e,r,0),r}function Mn(n,e,r,a){var t={$:e,r,s:a,t:void 0,u:void 0};return n.push(t),t}function $e(n,e,r,a){if(n!==e){var t=n.$,i=e.$;if(t!==i)if(t===1&&i===2)e=Ds(e),i=1;else{Mn(r,0,a,e);return}switch(i){case 5:for(var c=n.l,l=e.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){e.k=n.k;return}e.k=e.m();var f=[];$e(n.k,e.k,f,0),f.length>0&&Mn(r,1,a,f);return;case 4:for(var s=n.j,g=e.j,d=!1,h=n.k;h.$===4;)d=!0,typeof s!="object"?s=[s,h.j]:s.push(h.j),h=h.k;for(var b=e.k;b.$===4;)d=!0,typeof g!="object"?g=[g,b.j]:g.push(b.j),b=b.k;if(d&&s.length!==g.length){Mn(r,0,a,e);return}(d?!Ps(s,g):s!==g)&&Mn(r,2,a,g),$e(h,b,r,a+1);return;case 0:n.a!==e.a&&Mn(r,3,a,e.a);return;case 1:Pc(n,e,r,a,js);return;case 2:Pc(n,e,r,a,Ls);return;case 3:if(n.h!==e.h){Mn(r,0,a,e);return}var _=gi(n.d,e.d);_&&Mn(r,4,a,_);var S=e.i(n.g,e.g);S&&Mn(r,5,a,S);return}}}function Ps(n,e){for(var r=0;r<n.length;r++)if(n[r]!==e[r])return!1;return!0}function Pc(n,e,r,a,t){if(n.c!==e.c||n.f!==e.f){Mn(r,0,a,e);return}var i=gi(n.d,e.d);i&&Mn(r,4,a,i),t(n,e,r,a)}function gi(n,e,r){var a;for(var t in n){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=gi(n[t],e[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in e)){a=a||{},a[t]=r?r==="a1"?"":r==="a0"||r==="a3"?void 0:{f:n[t].f,o:void 0}:typeof n[t]=="string"?"":null;continue}var c=n[t],l=e[t];c===l&&t!=="value"&&t!=="checked"||r==="a0"&&Cs(c,l)||(a=a||{},a[t]=l)}for(var u in e)u in n||(a=a||{},a[u]=e[u]);return a}function js(n,e,r,a){var t=n.e,i=e.e,c=t.length,l=i.length;c>l?Mn(r,6,a,{v:l,i:c-l}):c<l&&Mn(r,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=t[v];$e(f,i[v],r,++a),a+=f.b||0}}function Ls(n,e,r,a){for(var t=[],i={},c=[],l=n.e,u=e.e,v=l.length,f=u.length,s=0,g=0,d=a;s<v&&g<f;){var h=l[s],b=u[g],_=h.a,S=b.a,A=h.b,P=b.b,D=void 0,I=void 0;if(_===S){d++,$e(A,P,t,d),d+=A.b||0,s++,g++;continue}var H=l[s+1],N=u[g+1];if(H){var G=H.a,O=H.b;I=S===G}if(N){var E=N.a,en=N.b;D=_===E}if(D&&I){d++,$e(A,en,t,d),Rr(i,t,_,P,g,c),d+=A.b||0,d++,Wr(i,t,_,O,d),d+=O.b||0,s+=2,g+=2;continue}if(D){d++,Rr(i,t,S,P,g,c),$e(A,en,t,d),d+=A.b||0,s+=1,g+=2;continue}if(I){d++,Wr(i,t,_,A,d),d+=A.b||0,d++,$e(O,P,t,d),d+=O.b||0,s+=2,g+=1;continue}if(H&&G===E){d++,Wr(i,t,_,A,d),Rr(i,t,S,P,g,c),d+=A.b||0,d++,$e(O,en,t,d),d+=O.b||0,s+=2,g+=2;continue}break}for(;s<v;){d++;var h=l[s],A=h.b;Wr(i,t,h.a,A,d),d+=A.b||0,s++}for(;g<f;){var tn=tn||[],b=u[g];Rr(i,t,b.a,b.b,void 0,tn),g++}(t.length>0||c.length>0||tn)&&Mn(r,8,a,{w:t,x:c,y:tn})}var ql="_elmW6BL";function Rr(n,e,r,a,t,i){var c=n[r];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),n[r]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];$e(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Rr(n,e,r+ql,a,t,i)}function Wr(n,e,r,a,t){var i=n[r];if(!i){var c=Mn(e,9,t,void 0);n[r]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];$e(a,i.z,l,t),Mn(e,9,t,{w:l,A:i});return}Wr(n,e,r+ql,a,t)}function Jl(n,e,r,a){Nr(n,e,r,0,0,e.b,a)}function Nr(n,e,r,a,t,i,c){for(var l=r[a],u=l.r;u===t;){var v=l.$;if(v===1)Jl(n,e.k,l.s,c);else if(v===8){l.t=n,l.u=c;var f=l.s.w;f.length>0&&Nr(n,e,f,0,t,i,c)}else if(v===9){l.t=n,l.u=c;var s=l.s;if(s){s.A.s=n;var f=s.w;f.length>0&&Nr(n,e,f,0,t,i,c)}}else l.t=n,l.u=c;if(a++,!(l=r[a])||(u=l.r)>i)return a}var g=e.$;if(g===4){for(var d=e.k;d.$===4;)d=d.k;return Nr(n,d,r,a,t+1,i,n.elm_event_node_ref)}for(var h=e.e,b=n.childNodes,_=0;_<h.length;_++){t++;var S=g===1?h[_]:h[_].b,A=t+(S.b||0);if(t<=u&&u<=A&&(a=Nr(b[_],S,r,a,t,A,c),!(l=r[a])||(u=l.r)>i))return a;t=A}return a}function Zl(n,e,r,a){return r.length===0?n:(Jl(n,e,r,a),et(n,r))}function et(n,e){for(var r=0;r<e.length;r++){var a=e[r],t=a.t,i=ks(t,a);t===n&&(n=i)}return n}function ks(n,e){switch(e.$){case 0:return zs(n,e.s,e.u);case 4:return Do(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return et(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var i=e.s,a=0;a<i.i;a++)n.removeChild(n.childNodes[i.v]);return n;case 7:for(var i=e.s,r=i.e,a=i.v,t=n.childNodes[a];a<r.length;a++)n.insertBefore(Be(r[a],e.u),t);return n;case 9:var i=e.s;if(!i)return n.parentNode.removeChild(n),n;var c=i.A;return typeof c.r!="undefined"&&n.parentNode.removeChild(n),c.s=et(n,i.w),n;case 8:return Ts(n,e);case 5:return e.s(n);default:Lr(10)}}function zs(n,e,r){var a=n.parentNode,t=Be(e,r);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),a&&t!==n&&a.replaceChild(t,n),t}function Ts(n,e){var r=e.s,a=Ms(r.y,e);n=et(n,r.w);for(var t=r.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Be(l.z,e.u);n.insertBefore(u,n.childNodes[c.r])}return a&&di(n,a),n}function Ms(n,e){if(!!n){for(var r=Ce.createDocumentFragment(),a=0;a<n.length;a++){var t=n[a],i=t.A;di(r,i.c===2?i.s:Be(i.z,e.u))}return r}}function bi(n){if(n.nodeType===3)return Mo(n.textContent);if(n.nodeType!==1)return Mo("");for(var e=x,r=n.attributes,a=r.length;a--;){var t=r[a],i=t.name,c=t.value;e=he(o(lr,i,c),e)}for(var l=n.tagName.toLowerCase(),u=x,v=n.childNodes,a=v.length;a--;)u=he(bi(v[a]),u);return m(ce,l,e,u)}function Ds(n){for(var e=n.e,r=e.length,a=new Array(r),t=0;t<r;t++)a[t]=e[t].b;return{$:1,c:n.c,d:n.d,e:a,f:n.f,b:n.b}}var Fs=V(function(n,e,r,a){return si(e,a,n.fq,n.f7,n.f$,function(t,i){var c=n.ga,l=a.node,u=bi(l);return Yl(i,function(v){var f=c(v),s=Ol(u,f);l=Zl(l,u,s,t),u=f})})});V(function(n,e,r,a){return si(e,a,n.fq,n.f7,n.f$,function(t,i){var c=n.c2&&n.c2(t),l=n.ga,u=Ce.title,v=Ce.body,f=bi(v);return Yl(i,function(s){nt=c;var g=l(s),d=ce("body")(x)(g.eS),h=Ol(f,d);v=Zl(v,f,h,t),f=d,nt=0,u!==g.f4&&(Ce.title=u=g.f4)})})});var rt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function Yl(n,e){e(n);var r=0;function a(){r=r===1?0:(rt(a),e(n),1)}return function(t,i){n=t,i?(e(n),r===2&&(r=1)):(r===0&&rt(a),r=2)}}$(function(n,e){return o(Li,Pi,ke(function(){e&&history.go(e),n()}))});$(function(n,e){return o(Li,Pi,ke(function(){history.pushState({},"",e),n()}))});$(function(n,e){return o(Li,Pi,ke(function(){history.replaceState({},"",e),n()}))});var Bs={addEventListener:function(){},removeEventListener:function(){}},Vs=typeof window!="undefined"?window:Bs;w(function(n,e,r){return Wl(ke(function(a){function t(i){vi(r(i))}return n.addEventListener(e,t,pi&&{passive:!0}),function(){n.removeEventListener(e,t)}}))});$(function(n,e){var r=Qn(n,e);return ue(r)?U(r.a):q});function Xl(n,e){return ke(function(r){rt(function(){var a=document.getElementById(n);r(a?cr(e(a)):Jf(am(n)))})})}function Es(n){return ke(function(e){rt(function(){e(cr(n()))})})}$(function(n,e){return Xl(e,function(r){return r[n](),fa})});$(function(n,e){return Es(function(){return Vs.scroll(n,e),fa})});w(function(n,e,r){return Xl(n,function(a){return a.scrollLeft=e,a.scrollTop=r,fa})});$(function(n,e){return n&e});$(function(n,e){return n|e});$(function(n,e){return n^e});$(function(n,e){return e<<n});$(function(n,e){return e>>n});$(function(n,e){return e>>>n});var Rs=$(function(n,e){var r="g";n.fB&&(r+="m"),n.eU&&(r+="i");try{return U(new RegExp(e,r))}catch{return q}});$(function(n,e){return e.match(n)!==null});var Ws=w(function(n,e,r){for(var a=[],t=0,i=r,c=e.lastIndex,l=-1,u;t++<n&&(u=e.exec(i))&&l!=e.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var s=u[v];f[--v]=s?U(s):q}a.push(j(Iu,u[0],u.index,t,p(f))),l=e.lastIndex}return e.lastIndex=c,p(a)});V(function(n,e,r,a){var t=0;function i(c){if(t++>=n)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?U(v):q}return r(j(Iu,c,arguments[arguments.length-2],t,p(u)))}return a.replace(e,i)});w(function(n,e,r){for(var a=r,t=[],i=e.lastIndex,c=e.lastIndex;n--;){var l=e.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=e.lastIndex}return t.push(a.slice(i)),e.lastIndex=c,p(t)});var jc=0;function na(n,e){for(;e.b;e=e.b)n(e.a)}function hi(n){for(var e=0;n.b;n=n.b)e++;return e}var Ns=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){setTimeout(n,1e3/60)},Hs=Sn(function(n,e,r,a,t){return{$:0,a:n,b:e,c:r,d:a,e:t}}),Gs=$(function(n,e){var r=n.blend;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.BLEND),r.enabled=!0),(r.a!==e.a||r.d!==e.d)&&(n.gl.blendEquationSeparate(e.a,e.d),r.a=e.a,r.d=e.d),(r.b!==e.b||r.c!==e.c||r.e!==e.e||r.f!==e.f)&&(n.gl.blendFuncSeparate(e.b,e.c,e.e,e.f),r.b=e.b,r.c=e.c,r.e=e.e,r.f=e.f),(r.g!==e.g||r.h!==e.h||r.i!==e.i||r.j!==e.j)&&(n.gl.blendColor(e.g,e.h,e.i,e.j),r.g=e.g,r.h=e.h,r.i=e.i,r.j=e.j)}),Us=$(function(n,e){var r=n.depthTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.DEPTH_TEST),r.enabled=!0),r.a!==e.a&&(n.gl.depthFunc(e.a),r.a=e.a),r.b!==e.b&&(n.gl.depthMask(e.b),r.b=e.b),(r.c!==e.c||r.d!==e.d)&&(n.gl.depthRange(e.c,e.d),r.c=e.c,r.d=e.d)}),Is=$(function(n,e){var r=n.stencilTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.STENCIL_TEST),r.enabled=!0),(r.d!==e.d||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.FRONT,e.d,e.a,e.b),r.d=e.d),(r.e!==e.e||r.f!==e.f||r.g!==e.g)&&(n.gl.stencilOpSeparate(n.gl.FRONT,e.e,e.f,e.g),r.e=e.e,r.f=e.f,r.g=e.g),r.c!==e.c&&(n.gl.stencilMask(e.c),r.c=e.c),(r.h!==e.h||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.BACK,e.h,e.a,e.b),r.h=e.h,r.a=e.a,r.b=e.b),(r.i!==e.i||r.j!==e.j||r.k!==e.k)&&(n.gl.stencilOpSeparate(n.gl.BACK,e.i,e.j,e.k),r.i=e.i,r.j=e.j,r.k=e.k)}),Os=$(function(n,e){var r=n.scissor;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SCISSOR_TEST),r.enabled=!0),(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.scissor(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),qs=$(function(n,e){var r=n.colorMask;r.toggle=n.toggle,r.enabled=!0,(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.colorMask(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),Js=$(function(n,e){var r=n.cullFace;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.CULL_FACE),r.enabled=!0),r.a!==e.a&&(n.gl.cullFace(e.a),r.a=e.a)}),Zs=$(function(n,e){var r=n.polygonOffset;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.POLYGON_OFFSET_FILL),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.polygonOffset(e.a,e.b),r.a=e.a,r.b=e.b)}),Ys=$(function(n,e){var r=n.sampleCoverage;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SAMPLE_COVERAGE),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.sampleCoverage(e.a,e.b),r.a=e.a,r.b=e.b)}),Xs=function(n){var e=n.sampleAlphaToCoverage;e.toggle=n.toggle,e.enabled||(n.gl.enable(n.gl.SAMPLE_ALPHA_TO_COVERAGE),e.enabled=!0)},Qs=function(n){n.blend.enabled&&(n.gl.disable(n.gl.BLEND),n.blend.enabled=!1)},Ks=function(n){n.depthTest.enabled&&(n.gl.disable(n.gl.DEPTH_TEST),n.depthTest.enabled=!1)},nd=function(n){n.stencilTest.enabled&&(n.gl.disable(n.gl.STENCIL_TEST),n.stencilTest.enabled=!1)},Ql=function(n){n.scissor.enabled&&(n.gl.disable(n.gl.SCISSOR_TEST),n.scissor.enabled=!1)},Kl=function(n){var e=n.colorMask;(!e.a||!e.b||!e.c||!e.d)&&(n.gl.colorMask(!0,!0,!0,!0),e.a=!0,e.b=!0,e.c=!0,e.d=!0)},ed=function(n){n.gl.disable(n.gl.CULL_FACE)},rd=function(n){n.gl.disable(n.gl.POLYGON_OFFSET_FILL)},ad=function(n){n.gl.disable(n.gl.SAMPLE_COVERAGE)},td=function(n){n.gl.disable(n.gl.SAMPLE_ALPHA_TO_COVERAGE)},Lc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],od=[Qs,Ks,nd,Ql,Kl,ed,rd,ad,td];function kc(n,e,r){var a=n.createShader(r);return n.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+e),n.compileShader(a),a}function id(n,e,r){var a=n.createProgram();if(n.attachShader(a,e),n.attachShader(a,r),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw"Link failed: "+n.getProgramInfoLog(a)+`
vs info-log: `+n.getShaderInfoLog(e)+`
fs info-log: `+n.getShaderInfoLog(r);return a}function nu(n,e){switch(e){case n.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:n.FLOAT};case n.INT:return{size:1,arraySize:1,type:Int32Array,baseType:n.INT}}}function cd(n,e,r,a){for(var t=r.a.ds,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(d,h,b,_,S){var A;if(t===1)for(A=0;A<h;A++)d[b++]=h===1?_[S]:_[S][A];else i.forEach(function(P){for(A=0;A<h;A++)d[b++]=h===1?_[P][S]:_[P][S][A]})}var u=nu(n,e.type);if(u===void 0)throw new Error("No info available for: "+e.type);var v=0,f=u.size*u.arraySize*t,s=new u.type(hi(r.b)*f);na(function(d){l(s,u.size*u.arraySize,v,d,a[e.name]||e.name),v+=f},r.b);var g=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,s,n.STATIC_DRAW),g}function ld(n,e){if(e.a.dB>0){var r=n.createBuffer(),a=ud(e.c,e.a.dB);return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),n.bufferData(n.ELEMENT_ARRAY_BUFFER,a,n.STATIC_DRAW),{numIndices:a.length,indexBuffer:r,buffers:{}}}else return{numIndices:e.a.ds*hi(e.b),indexBuffer:null,buffers:{}}}function ud(n,e){var r=new Uint32Array(hi(n)*e),a=0,t;return na(function(i){if(e===1)r[a++]=i;else for(t=0;t<e;t++)r[a++]=i[String.fromCharCode(97+t)]},n),r}function zc(n,e){return n+"#"+e}var eu=$(function(n,e){var r=n.f,a=r.gl;if(!a)return e;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),r.depthTest.b||(a.depthMask(!0),r.depthTest.b=!0),r.stencilTest.c!==r.STENCIL_WRITEMASK&&(a.stencilMask(r.STENCIL_WRITEMASK),r.stencilTest.c=r.STENCIL_WRITEMASK),Ql(r),Kl(r),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=zc(i.b.id,i.c.id),l=r.programs[c]),!l){var v;i.b.id?v=r.shaders[i.b.id]:i.b.id=jc++,v||(v=kc(a,i.b.src,a.VERTEX_SHADER),r.shaders[i.b.id]=v);var f;i.c.id?f=r.shaders[i.c.id]:i.c.id=jc++,f||(f=kc(a,i.c.src,a.FRAGMENT_SHADER),r.shaders[i.c.id]=f);var s=id(a,v,f);l={glProgram:s,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=$d(a,n,l,Object.assign({},i.b.uniforms,i.c.uniforms));var g=a.getProgramParameter(s,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var d=a.getActiveAttrib(s,u),h=a.getAttribLocation(s,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(h)}c=zc(i.b.id,i.c.id),r.programs[c]=l}r.lastProgId!==c&&(a.useProgram(l.glProgram),r.lastProgId=c),vd(l.uniformSetters,i.e);var b=r.buffers.get(i.d);for(b||(b=ld(a,i.d),r.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[d.name]===void 0&&(b.buffers[d.name]=cd(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[d.name]);var _=nu(a,d.type);if(_.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,_.size,_.baseType,!1,0,0);else for(var S=_.size*4,A=S*_.arraySize,P=0;P<_.arraySize;P++)a.enableVertexAttribArray(h+P),a.vertexAttribPointer(h+P,_.size,_.baseType,!1,A,S*P)}for(r.toggle=!r.toggle,na(Ug(r),i.a),u=0;u<Lc.length;u++){var D=r[Lc[u]];D.toggle!==r.toggle&&D.enabled&&(od[u](r),D.enabled=!1,D.toggle=r.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.ec,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ec,0,b.numIndices)}}return na(t,n.g),e});function $d(n,e,r,a){var t=r.glProgram,i=r.currentUniforms,c=0,l=e.f;function u(d,h){var b=h.name,_=n.getUniformLocation(d,b);switch(h.type){case n.INT:return function(A){i[b]!==A&&(n.uniform1i(_,A),i[b]=A)};case n.FLOAT:return function(A){i[b]!==A&&(n.uniform1f(_,A),i[b]=A)};case n.FLOAT_VEC2:return function(A){i[b]!==A&&(n.uniform2f(_,A[0],A[1]),i[b]=A)};case n.FLOAT_VEC3:return function(A){i[b]!==A&&(n.uniform3f(_,A[0],A[1],A[2]),i[b]=A)};case n.FLOAT_VEC4:return function(A){i[b]!==A&&(n.uniform4f(_,A[0],A[1],A[2],A[3]),i[b]=A)};case n.FLOAT_MAT4:return function(A){i[b]!==A&&(n.uniformMatrix4fv(_,!1,new Float32Array(A)),i[b]=A)};case n.SAMPLER_2D:var S=c++;return function(A){n.activeTexture(n.TEXTURE0+S);var P=l.textures.get(A);P||(P=A.e$(n),l.textures.set(A,P)),n.bindTexture(n.TEXTURE_2D,P),i[b]!==A&&(n.uniform1i(_,S),i[b]=A)};case n.BOOL:return function(A){i[b]!==A&&(n.uniform1i(_,A),i[b]=A)};default:return function(){}}}for(var v={},f=n.getProgramParameter(t,n.ACTIVE_UNIFORMS),s=0;s<f;s++){var g=n.getActiveUniform(t,s);v[a[g.name]||g.name]=u(t,g)}return v}function vd(n,e){Object.keys(e).forEach(function(r){var a=n[r];a&&a(e[r])})}var fd=w(function(n,e,r){return ss(e,{g:r,f:{},h:n},hd,Ad)}),sd=$(function(n,e){n.contextAttributes.alpha=!0,n.contextAttributes.premultipliedAlpha=e.a}),dd=$(function(n,e){n.contextAttributes.depth=!0,n.sceneSettings.push(function(r){r.clearDepth(e.a)})}),md=$(function(n,e){n.contextAttributes.stencil=!0,n.sceneSettings.push(function(r){r.clearStencil(e.a)})}),pd=$(function(n,e){n.contextAttributes.antialias=!0}),gd=$(function(n,e){n.sceneSettings.push(function(r){r.clearColor(e.a,e.b,e.c,e.d)})}),bd=$(function(n,e){n.contextAttributes.preserveDrawingBuffer=!0});function hd(n){var e={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};na(function(t){return o(Gg,e,t)},n.h);var r=Ce.createElement("canvas"),a=r.getContext&&(r.getContext("webgl",e.contextAttributes)||r.getContext("experimental-webgl",e.contextAttributes));return a&&typeof WeakMap!="undefined"?(e.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),n.f.gl=a,n.f.toggle=!1,n.f.blend={enabled:!1,toggle:!1},n.f.depthTest={enabled:!1,toggle:!1},n.f.stencilTest={enabled:!1,toggle:!1},n.f.scissor={enabled:!1,toggle:!1},n.f.colorMask={enabled:!1,toggle:!1},n.f.cullFace={enabled:!1,toggle:!1},n.f.polygonOffset={enabled:!1,toggle:!1},n.f.sampleCoverage={enabled:!1,toggle:!1},n.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},n.f.shaders=[],n.f.programs={},n.f.lastProgId=null,n.f.buffers=new WeakMap,n.f.textures=new WeakMap,n.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Ns(function(){return o(eu,n,r)})):(r=Ce.createElement("div"),r.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),r}function Ad(n,e){return e.f=n.f,eu(e)}var _d=$(function(n,e){return new Float64Array([n,e])});$(function(n,e){return new Float64Array([n,e[1]])});$(function(n,e){return new Float64Array([e[0],n])});$(function(n,e){var r=new Float64Array(2);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r});$(function(n,e){var r=new Float64Array(2);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r});$(function(n,e){var r=new Float64Array(2);r[0]=n[0]-e[0],r[1]=n[1]-e[1];var a=1/wd(r);return r[0]=r[0]*a,r[1]=r[1]*a,r});function wd(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1];return Math.sqrt(r*r+a*a)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1];return r*r+a*a});$(function(n,e){var r=new Float64Array(2);return r[0]=e[0]*n,r[1]=e[1]*n,r});$(function(n,e){return n[0]*e[0]+n[1]*e[1]});var Ai=new Float64Array(3),Tc=new Float64Array(3),Mc=new Float64Array(3),yd=w(function(n,e,r){return new Float64Array([n,e,r])}),xd=function(n){return n[0]},Sd=function(n){return n[1]},Cd=function(n){return n[2]};$(function(n,e){return new Float64Array([n,e[1],e[2]])});$(function(n,e){return new Float64Array([e[0],n,e[2]])});$(function(n,e){return new Float64Array([e[0],e[1],n])});var Pd=function(n){return new Float64Array([n.gf,n.gj,n.dj])};$(function(n,e){var r=new Float64Array(3);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r});function ru(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r}$(ru);function au(n,e,r){return r===void 0&&(r=new Float64Array(3)),at(ru(n,e,r),r)}$(au);function tu(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2];return Math.sqrt(r*r+a*a+t*t)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2];return r*r+a*a+t*t});function at(n,e){e===void 0&&(e=new Float64Array(3));var r=1/tu(n);return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e}var jd=$(function(n,e){return new Float64Array([e[0]*n,e[1]*n,e[2]*n])}),Hr=function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]};$(Hr);function Fo(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[1]*e[2]-n[2]*e[1],r[1]=n[2]*e[0]-n[0]*e[2],r[2]=n[0]*e[1]-n[1]*e[0],r}$(Fo);$(function(n,e){var r,a=Ai,t=new Float64Array(3);return a[0]=n[3],a[1]=n[7],a[2]=n[11],r=Hr(e,a)+n[15],a[0]=n[0],a[1]=n[4],a[2]=n[8],t[0]=(Hr(e,a)+n[12])/r,a[0]=n[1],a[1]=n[5],a[2]=n[9],t[1]=(Hr(e,a)+n[13])/r,a[0]=n[2],a[1]=n[6],a[2]=n[10],t[2]=(Hr(e,a)+n[14])/r,t});var Ld=V(function(n,e,r,a){return new Float64Array([n,e,r,a])});$(function(n,e){return new Float64Array([n,e[1],e[2],e[3]])});$(function(n,e){return new Float64Array([e[0],n,e[2],e[3]])});$(function(n,e){return new Float64Array([e[0],e[1],n,e[3]])});$(function(n,e){return new Float64Array([e[0],e[1],e[2],n])});var kd=function(n){return{gf:n[0],gj:n[1],dj:n[2],eI:n[3]}},zd=function(n){return new Float64Array([n.gf,n.gj,n.dj,n.eI])};$(function(n,e){var r=new Float64Array(4);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r[3]=n[3]+e[3],r});$(function(n,e){var r=new Float64Array(4);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3],r});$(function(n,e){var r=new Float64Array(4);r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3];var a=1/Td(r);return r[0]=r[0]*a,r[1]=r[1]*a,r[2]=r[2]*a,r[3]=r[3]*a,r});function Td(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]+n[3]*n[3])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2],i=n[3]-e[3];return Math.sqrt(r*r+a*a+t*t+i*i)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2],i=n[3]-e[3];return r*r+a*a+t*t+i*i});$(function(n,e){var r=new Float64Array(4);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r});$(function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]});var Md=new Float64Array(16),Dd=new Float64Array(16),Fd=function(n){var e=new Float64Array(16);return e[0]=n.dQ,e[1]=n.dU,e[2]=n.dY,e[3]=n.d0,e[4]=n.dR,e[5]=n.dV,e[6]=n.dZ,e[7]=n.d1,e[8]=n.dS,e[9]=n.dW,e[10]=n.d_,e[11]=n.d2,e[12]=n.dT,e[13]=n.dX,e[14]=n.d$,e[15]=n.d3,e},Bd=function(n){return{dQ:n[0],dU:n[1],dY:n[2],d0:n[3],dR:n[4],dV:n[5],dZ:n[6],d1:n[7],dS:n[8],dW:n[9],d_:n[10],d2:n[11],dT:n[12],dX:n[13],d$:n[14],d3:n[15]}};function ou(n,e,r,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-r),c[6]=0,c[7]=0,c[8]=(e+n)/(e-n),c[9]=(a+r)/(a-r),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Zn(ou);V(function(n,e,r,a){var t=r*Math.tan(n*Math.PI/360),i=-t,c=i*e,l=t*e;return ou(c,l,i,t,r,a)});function iu(n,e,r,a,t,i){var c=new Float64Array(16);return c[0]=2/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-r),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(e+n)/(e-n),c[13]=-(a+r)/(a-r),c[14]=-(i+t)/(i-t),c[15]=1,c}Zn(iu);V(function(n,e,r,a){return iu(n,e,r,a,-1,1)});function cu(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=n[3],l=n[4],u=n[5],v=n[6],f=n[7],s=n[8],g=n[9],d=n[10],h=n[11],b=n[12],_=n[13],S=n[14],A=n[15],P=e[0],D=e[1],I=e[2],H=e[3],N=e[4],G=e[5],O=e[6],E=e[7],en=e[8],tn=e[9],gn=e[10],An=e[11],sn=e[12],Cn=e[13],Gn=e[14],En=e[15];return r[0]=a*P+l*D+s*I+b*H,r[1]=t*P+u*D+g*I+_*H,r[2]=i*P+v*D+d*I+S*H,r[3]=c*P+f*D+h*I+A*H,r[4]=a*N+l*G+s*O+b*E,r[5]=t*N+u*G+g*O+_*E,r[6]=i*N+v*G+d*O+S*E,r[7]=c*N+f*G+h*O+A*E,r[8]=a*en+l*tn+s*gn+b*An,r[9]=t*en+u*tn+g*gn+_*An,r[10]=i*en+v*tn+d*gn+S*An,r[11]=c*en+f*tn+h*gn+A*An,r[12]=a*sn+l*Cn+s*Gn+b*En,r[13]=t*sn+u*Cn+g*Gn+_*En,r[14]=i*sn+v*Cn+d*Gn+S*En,r[15]=c*sn+f*Cn+h*Gn+A*En,r}$(cu);$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=n[4],l=n[5],u=n[6],v=n[8],f=n[9],s=n[10],g=n[12],d=n[13],h=n[14],b=e[0],_=e[1],S=e[2],A=e[4],P=e[5],D=e[6],I=e[8],H=e[9],N=e[10],G=e[12],O=e[13],E=e[14];return r[0]=a*b+c*_+v*S,r[1]=t*b+l*_+f*S,r[2]=i*b+u*_+s*S,r[3]=0,r[4]=a*A+c*P+v*D,r[5]=t*A+l*P+f*D,r[6]=i*A+u*P+s*D,r[7]=0,r[8]=a*I+c*H+v*N,r[9]=t*I+l*H+f*N,r[10]=i*I+u*H+s*N,r[11]=0,r[12]=a*G+c*O+v*E+g,r[13]=t*G+l*O+f*E+d,r[14]=i*G+u*O+s*E+h,r[15]=1,r});$(function(n,e){var r=new Float64Array(16);e=at(e,Ai);var a=e[0],t=e[1],i=e[2],c=Math.cos(n),l=1-c,u=Math.sin(n);return r[0]=a*a*l+c,r[1]=t*a*l+i*u,r[2]=i*a*l-t*u,r[3]=0,r[4]=a*t*l-i*u,r[5]=t*t*l+c,r[6]=t*i*l+a*u,r[7]=0,r[8]=a*i*l+t*u,r[9]=t*i*l-a*u,r[10]=i*i*l+c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r});w(function(n,e,r){var a=new Float64Array(16),t=1/tu(e),i=e[0]*t,c=e[1]*t,l=e[2]*t,u=Math.cos(n),v=1-u,f=Math.sin(n),s=i*f,g=c*f,d=l*f,h=i*c*v,b=i*l*v,_=c*l*v,S=i*i*v+u,A=h+d,P=b-g,D=h-d,I=c*c*v+u,H=_+s,N=b+g,G=_-s,O=l*l*v+u,E=r[0],en=r[1],tn=r[2],gn=r[3],An=r[4],sn=r[5],Cn=r[6],Gn=r[7],En=r[8],ze=r[9],Te=r[10],ao=r[11],Tv=r[12],Mv=r[13],Dv=r[14],Fv=r[15];return a[0]=E*S+An*A+En*P,a[1]=en*S+sn*A+ze*P,a[2]=tn*S+Cn*A+Te*P,a[3]=gn*S+Gn*A+ao*P,a[4]=E*D+An*I+En*H,a[5]=en*D+sn*I+ze*H,a[6]=tn*D+Cn*I+Te*H,a[7]=gn*D+Gn*I+ao*H,a[8]=E*N+An*G+En*O,a[9]=en*N+sn*G+ze*O,a[10]=tn*N+Cn*G+Te*O,a[11]=gn*N+Gn*G+ao*O,a[12]=Tv,a[13]=Mv,a[14]=Dv,a[15]=Fv,a});function Vd(n,e,r){var a=new Float64Array(16);return a[0]=n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}w(Vd);V(function(n,e,r,a){var t=new Float64Array(16);return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*e,t[5]=a[5]*e,t[6]=a[6]*e,t[7]=a[7]*e,t[8]=a[8]*r,t[9]=a[9]*r,t[10]=a[10]*r,t[11]=a[11]*r,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2];return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r[4]=e[4]*t,r[5]=e[5]*t,r[6]=e[6]*t,r[7]=e[7]*t,r[8]=e[8]*i,r[9]=e[9]*i,r[10]=e[10]*i,r[11]=e[11]*i,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r});function Ed(n,e,r){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=n,a[13]=e,a[14]=r,a[15]=1,a}w(Ed);V(function(n,e,r,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],s=a[6],g=a[7],d=a[8],h=a[9],b=a[10],_=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=f,t[6]=s,t[7]=g,t[8]=d,t[9]=h,t[10]=b,t[11]=_,t[12]=i*n+v*e+d*r+a[12],t[13]=c*n+f*e+h*r+a[13],t[14]=l*n+s*e+b*r+a[14],t[15]=u*n+g*e+_*r+a[15],t});$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=e[0],l=e[1],u=e[2],v=e[3],f=e[4],s=e[5],g=e[6],d=e[7],h=e[8],b=e[9],_=e[10],S=e[11];return r[0]=c,r[1]=l,r[2]=u,r[3]=v,r[4]=f,r[5]=s,r[6]=g,r[7]=d,r[8]=h,r[9]=b,r[10]=_,r[11]=S,r[12]=c*a+f*t+h*i+e[12],r[13]=l*a+s*t+b*i+e[13],r[14]=u*a+g*t+_*i+e[14],r[15]=v*a+d*t+S*i+e[15],r});w(function(n,e,r){var a=au(n,e,Ai),t=at(Fo(r,a,Tc),Tc),i=at(Fo(a,t,Mc),Mc),c=Md,l=Dd;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-n[0],l[13]=-n[1],l[14]=-n[2],l[15]=1,cu(c,l)});w(function(n,e,r){var a=new Float64Array(16);return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=0,a[4]=e[0],a[5]=e[1],a[6]=e[2],a[7]=0,a[8]=r[0],a[9]=r[1],a[10]=r[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=qv,ka=Gv,lu=w(function(n,e,r){var a=r.c,t=r.d,i=$(function(c,l){if(c.$){var v=c.a;return m(ka,n,l,v)}else{var u=c.a;return m(ka,i,l,u)}});return m(ka,i,m(ka,n,e,t),a)}),Ct=w(function(n,e,r){n:for(;;){if(r.$===-2)return e;var a=r.b,t=r.c,i=r.d,c=r.e,l=n,u=m(n,a,t,m(Ct,n,e,c)),v=i;n=l,e=u,r=v;continue n}}),Dc=function(n){return m(Ct,w(function(e,r,a){return o(k,y(e,r),a)}),x,n)},Rd=function(n){return m(Ct,w(function(e,r,a){return o(k,e,a)}),x,n)},Wd=function(n){var e=n;return Rd(e)},uu=1,Nd=2,$u=0,Fn=function(n){return{$:1,a:n}},_i=$(function(n,e){return{$:3,a:n,b:e}}),Fc=$(function(n,e){return{$:0,a:n,b:e}}),vu=$(function(n,e){return{$:1,a:n,b:e}}),fn=function(n){return{$:0,a:n}},Hd=function(n){return{$:2,a:n}},U=function(n){return{$:0,a:n}},q={$:1},Gd=hf,fu=Gf,xn=El,er=$(function(n,e){return o(pf,n,xt(e))}),wi=$(function(n,e){return p(o(mf,n,e))}),su=function(n){return o(er,`
    `,o(wi,`
`,n))},_e=w(function(n,e,r){n:for(;;)if(r.b){var a=r.a,t=r.b,i=n,c=o(n,a,e),l=t;n=i,e=c,r=l;continue n}else return e}),oe=function(n){return m(_e,$(function(e,r){return r+1}),0,n)},du=Jv,Ud=w(function(n,e,r){n:for(;;)if(Y(n,e)<1){var a=n,t=e-1,i=o(k,e,r);n=a,e=t,r=i;continue n}else return r}),Sr=$(function(n,e){return m(Ud,n,e,x)}),Pt=$(function(n,e){return m(du,n,o(Sr,0,oe(e)-1),e)}),me=Cf,mu=function(n){var e=me(n);return 97<=e&&e<=122},pu=function(n){var e=me(n);return e<=90&&65<=e},Id=function(n){return mu(n)||pu(n)},Od=function(n){var e=me(n);return e<=57&&48<=e},qd=function(n){return mu(n)||pu(n)||Od(n)},zn=function(n){return m(_e,k,x,n)},kr=vf,Jd=$(function(n,e){return`

(`+(xn(n+1)+(") "+su(Zd(e))))}),Zd=function(n){return o(Yd,n,x)},Yd=$(function(n,e){n:for(;;)switch(n.$){case 0:var r=n.a,c=n.b,a=function(){var b=kr(r);if(b.$===1)return!1;var _=b.a,S=_.a,A=_.b;return Id(S)&&o(Gd,qd,A)}(),t=a?"."+r:"['"+(r+"']"),u=c,v=o(k,t,e);n=u,e=v;continue n;case 1:var i=n.a,c=n.b,l="["+(xn(i)+"]"),u=c,v=o(k,l,e);n=u,e=v;continue n;case 2:var f=n.a;if(f.b)if(f.b.b){var s=function(){return e.b?"The Json.Decode.oneOf at json"+o(er,"",zn(e)):"Json.Decode.oneOf"}(),h=s+(" failed in the following "+(xn(oe(f))+" ways:"));return o(er,`

`,o(k,h,o(Pt,Jd,f)))}else{var c=f.a,u=c,v=e;n=u,e=v;continue n}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+o(er,"",zn(e)):"!"}();default:var g=n.a,d=n.b,h=function(){return e.b?"Problem with the value at json"+(o(er,"",zn(e))+`:

    `):`Problem with the given value:

`}();return h+(su(o(fu,4,d))+(`

`+g))}}),In=32,Bo=V(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Vo=Ev,yi=af,xi=$(function(n,e){return Ac(e)/Ac(n)}),Gr=ef,ea=yi(o(xi,2,In)),gu=j(Bo,0,ea,Vo,Vo),bu=Wv,hu=function(n){return{$:1,a:n}};$(function(n,e){return n(e)});$(function(n,e){return e(n)});var jt=Iv,Au=tf,Eo=Rv,On=$(function(n,e){return Y(n,e)>0?n:e}),Xd=function(n){return{$:0,a:n}},Si=Nv,Qd=$(function(n,e){n:for(;;){var r=o(Si,In,n),a=r.a,t=r.b,i=o(k,Xd(a),e);if(t.b){var c=t,l=i;n=c,e=l;continue n}else return zn(i)}}),Ro=function(n){var e=n.a;return e},Kd=$(function(n,e){n:for(;;){var r=yi(e/In);if(r===1)return o(Si,In,n).a;var a=o(Qd,n,x),t=r;n=a,e=t;continue n}}),_u=$(function(n,e){if(e.p){var r=e.p*In,a=Au(o(xi,In,r-1)),t=n?zn(e.D):e.D,i=o(Kd,t,e.p);return j(Bo,Eo(e.t)+r,o(On,5,a*ea),i,e.t)}else return j(Bo,Eo(e.t),ea,Vo,e.t)}),nm=Sn(function(n,e,r,a,t){n:for(;;){if(e<0)return o(_u,!1,{D:a,p:r/In|0,t});var i=hu(m(bu,In,e,n)),c=n,l=e-In,u=r,v=o(k,i,a),f=t;n=c,e=l,r=u,a=v,t=f;continue n}}),em=$(function(n,e){if(n<=0)return gu;var r=n%In,a=m(bu,r,n-r,e),t=n-r-In;return C(nm,e,t,n,x,a)}),ue=function(n){return!n.$},M=Bf,rn=zf,L=Ff,_n=Tf,rm=function(n){return{$:2,a:n}},wu=$(function(n,e){return n}),yu=$(function(n,e){return{V:e.V,eZ:n,cg:e.cg,e6:e.e6,dH:e.dH,cV:e.cV,bq:e.bq,gb:e.gb}}),tt=Vf,sa=Ef,dn=jf,Ci=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Nn=function(n){return n},am=Nn,Bc=Zn(function(n,e,r,a,t,i){return{dx:i,dz:e,eh:a,el:r,ep:n,eq:t}}),tm=Af,rr=ff,br=gf,da=$(function(n,e){return n<1?e:m(br,n,rr(e),e)}),Lt=wf,kt=function(n){return n===""},zt=$(function(n,e){return n<1?"":m(br,0,n,e)}),xu=yf,Vc=Sn(function(n,e,r,a,t){if(kt(t)||o(tm,"@",t))return q;var i=o(Lt,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=xu(o(da,c+1,t));if(l.$===1)return q;var u=l;return U(mn(Bc,n,o(zt,c,t),u,e,r,a))}else return U(mn(Bc,n,t,q,e,r,a))}),Ec=V(function(n,e,r,a){if(kt(a))return q;var t=o(Lt,"/",a);if(t.b){var i=t.a;return C(Vc,n,o(da,i,a),e,r,o(zt,i,a))}else return C(Vc,n,"/",e,r,a)}),Rc=w(function(n,e,r){if(kt(r))return q;var a=o(Lt,"?",r);if(a.b){var t=a.a;return j(Ec,n,U(o(da,t+1,r)),e,o(zt,t,r))}else return j(Ec,n,q,e,r)});$(function(n,e){if(kt(e))return q;var r=o(Lt,"#",e);if(r.b){var a=r.a;return m(Rc,n,U(o(da,a+1,e)),o(zt,a,e))}else return m(Rc,n,q,e)});var om=_f,Pi=function(n){},ma=cr,im=ma(0),Su=V(function(n,e,r,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,s=v.b,g=r>500?m(_e,n,e,zn(s)):j(Su,n,e,r+1,s);return o(n,t,o(n,c,o(n,u,o(n,f,g))))}else return o(n,t,o(n,c,o(n,u,e)))}else return o(n,t,o(n,c,e))}else return o(n,t,e)}else return e}),we=w(function(n,e,r){return j(Su,n,e,0,r)}),X=$(function(n,e){return m(we,$(function(r,a){return o(k,n(r),a)}),x,e)}),ot=To,ji=$(function(n,e){return o(ot,function(r){return ma(n(r))},e)}),cm=w(function(n,e,r){return o(ot,function(a){return o(ot,function(t){return ma(o(n,a,t))},r)},e)}),lm=function(n){return m(we,cm(k),ma(x),n)},um=rs,$m=$(function(n,e){var r=e;return Wl(o(ot,um(n),r))}),vm=w(function(n,e,r){return o(ji,function(a){return 0},lm(o(X,$m(n),e)))}),fm=w(function(n,e,r){return ma(0)}),sm=$(function(n,e){var r=e;return o(ji,n,r)});de.Task=ns(im,vm,fm,sm);var dm=Hl("Task"),Li=$(function(n,e){return dm(o(ji,n,e))}),mm=Fs,pm=uf,it={$:1},Cu=function(n){return{$:2,a:n}},Tt={$:0},re=$(function(n,e){return{$:0,a:n,b:e}}),nn=w(function(n,e,r){return e(n(r))}),zr=function(n){var e=n.b.n;return e.a},gm=function(n){var e=n.a,r=n.b.X,a=n.b.n,t=n.b.af;if(t.b){var i=t.a,c=t.b;return U(o(re,e,{n:i,af:c,X:o(k,a,r)}))}else return q},Pu=function(n){var e=n.b;return o(re,Tt,e)},pn=$(function(n,e){if(e.$)return n;var r=e.a;return r}),bm=w(function(n,e,r){var a=r.a,t=r.b;switch(a.$){case 1:return e.cV.ci?Pu(r):r;case 2:var i=a.a.c7;return(Y(i+e.e6,zr(r).V)>0?o(nn,gm,pn(o(re,it,t))):Nn)(o(re,Cu({c7:i+e.e6}),t));default:var c=t.n,l=c.a,u=c.b,v=o(yu,l.eZ,W(e,{V:l.V+e.e6})),f=o(n,v,u);return o(re,Tt,{n:y(v,f),af:x,X:o(k,t.n,t.X)})}}),ki=$(function(n,e){n:for(;;){if(n<=0)return e;if(e.b){e.a;var r=e.b,a=n-1,t=r;n=a,e=t;continue n}else return e}}),hm=w(function(n,e,r){n:for(;;){if(n<=0)return r;if(e.b){var a=e.a,t=e.b,i=n-1,c=t,l=o(k,a,r);n=i,e=c,r=l;continue n}else return r}}),Am=$(function(n,e){return zn(m(hm,n,e,x))}),ju=w(function(n,e,r){if(e<=0)return x;{var a=y(e,r);n:for(;;){e:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break n;case 2:var t=a.b,A=t.a,i=t.b,c=i.a;return p([A,c]);case 3:if(a.b.b.b.b){var l=a.b,A=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return p([A,c,f])}else break e;default:if(a.b.b.b.b&&a.b.b.b.b.b){var s=a.b,A=s.a,g=s.b,c=g.a,d=g.b,f=d.a,h=d.b,b=h.a,_=h.b;return n>1e3?o(k,A,o(k,c,o(k,f,o(k,b,o(Am,e-4,_))))):o(k,A,o(k,c,o(k,f,o(k,b,m(ju,n+1,e-4,_)))))}else break e}else{if(a.a===1)break n;break e}else return r;return r}var S=a.b,A=S.a;return p([A])}}),Lu=$(function(n,e){return m(ju,0,n,e)}),_m=$(function(n,e){var r=e.b.X,a=e.b.n,t=e.b.af,i=un(zn(r),un(p([a]),t)),c=o(Lu,n,i),l=o(ki,n,i);if(l.b){var u=l.a,v=l.b;return o(re,it,{n:u,af:v,X:zn(c)})}else{var f=zn(c);if(f.b){var s=f.a,g=f.b;return o(re,it,{n:s,af:x,X:g})}else return e}}),wm=function(n){var e=n.b;return o(re,it,e)},ym=function(n){var e=n.b;return o(re,Cu({c7:zr(n).V}),e)},xm=$(function(n,e){switch(n.$){case 1:return wm(e);case 2:return Pu(e);case 3:return ym(e);default:var r=n.a;return o(_m,r,e)}}),ku=$(function(n,e){var r=e.a,a=e.b;return y(n(r),a)}),Sm=$(function(n,e){return W(e,{aA:n(e.aA)})}),Cm=function(n){return{$:3,a:n}},zu=function(n){return{$:2,a:n}},Tu=$(function(n,e){return{$:0,a:n,b:e}}),Pm=$(function(n,e){return{$:1,a:n,b:e}}),Ln=$(function(n,e){if(e.$)return q;var r=e.a;return U(n(r))}),Q=function(n){return n<0?-n:n},zi=xf,jm=w(function(n,e,r){return o(pn,0/0,zi(o(n,e,r)))}),Mt=$(function(n,e){n:for(;;)if(e.b){var r=e.a,a=e.b;if(n(r))return!0;var t=n,i=a;n=t,e=i;continue n}else return!1}),Lm=df,Mu=function(n){return m(Lm,k,x,n)},km=$(function(n,e){var r=o(Mt,function(a){return a!=="0"&&a!=="."},Mu(e));return un(n&&r?"-":"",e)}),yn=El,Wo=$f,Du=Pf,Fu=function(n){var e=n.a,r=n.b;if(e==="9"){var a=kr(r);if(a.$===1)return"01";var t=a.a;return o(Wo,"0",Fu(t))}else{var i=me(e);return i>=48&&i<57?o(Wo,Du(i+1),r):"0"}},No=rf,zm=lf,Dt=function(n){return o(Wo,n,"")},Bu=w(function(n,e,r){return n<=0?r:m(Bu,n>>1,un(e,e),n&1?un(r,e):r)}),ra=$(function(n,e){return m(Bu,n,e,"")}),Ho=w(function(n,e,r){return un(r,o(ra,n-rr(r),Dt(e)))}),Go=sf,Vu=function(n){var e=o(wi,".",n);if(e.b)if(e.b.b){var r=e.a,a=e.b,t=a.a;return y(r,t)}else{var r=e.a;return y(r,"0")}else return y("0","0")},Tm=function(n){var e=o(wi,"e",yn(Q(n)));if(e.b)if(e.b.b){var r=e.a,a=e.b,t=a.a,i=o(pn,0,xu(o(om,"+",t)?o(da,1,t):t)),c=Vu(r),l=c.a,u=c.b,v=un(l,u),f=i<0?o(pn,"0",o(Ln,function(s){var g=s.a,d=s.b;return g+("."+d)},o(Ln,ku(Dt),kr(un(o(ra,Q(i),"0"),v))))):m(Ho,i+1,"0",v);return un(n<0?"-":"",f)}else{var r=e.a;return un(n<0?"-":"",r)}else return""},Mm=w(function(n,e,r){if(No(r)||zm(r))return yn(r);var a=r<0,t=Vu(Tm(Q(r))),i=t.a,c=t.b,l=rr(i)+e,u=un(o(ra,-l+1,"0"),m(Ho,l,"0",un(i,c))),v=rr(u),f=o(On,1,l),s=o(n,a,m(br,f,v,u)),g=m(br,0,f,u),d=s?Go(o(pn,"1",o(Ln,Fu,kr(Go(g))))):g,h=rr(d),b=d==="0"?d:e<=0?un(d,o(ra,Q(e),"0")):Y(e,rr(c))<0?m(br,0,h-e,d)+("."+m(br,h-e,h,d)):un(i+".",m(Ho,e,"0",c));return o(km,a,b)}),Jr=Mm($(function(n,e){var r=kr(e);if(r.$===1)return!1;if(r.a.a==="5")return r.a.b===""?(r.a,!n):(r.a,!0);var a=r.a,t=a.a;return function(i){return i>53&&n||i>=53&&!n}(me(t))})),Dm=jm(Jr),Fm=w(function(n,e,r){var a=o(xi,10,Q(e-n)),t=a<0?3:a<1?2:a<2?1:0;return o(Dm,t,r)}),Eu=Ov,pa=$(function(n,e){n:for(;;){if(e.$===-2)return q;var r=e.b,a=e.c,t=e.d,i=e.e,c=o(Eu,n,r);switch(c){case 0:var l=n,u=t;n=l,e=u;continue n;case 1:return U(a);default:var l=n,u=i;n=l,e=u;continue n}}}),Z=Sn(function(n,e,r,a,t){return{$:-1,a:n,b:e,c:r,d:a,e:t}}),Ae={$:-2},Cr=Sn(function(n,e,r,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,s=a.d,g=a.e;return C(Z,0,e,r,C(Z,1,v,f,s,g),C(Z,1,i,c,l,u))}else return C(Z,n,i,c,C(Z,0,e,r,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,d=a.d;d.a;var h=d.b,b=d.c,_=d.d,S=d.e,g=a.e;return C(Z,0,v,f,C(Z,1,h,b,_,S),C(Z,1,e,r,g,t))}else return C(Z,n,e,r,a,t)}),Uo=w(function(n,e,r){if(r.$===-2)return C(Z,0,n,e,Ae,Ae);var a=r.a,t=r.b,i=r.c,c=r.d,l=r.e,u=o(Eu,n,t);switch(u){case 0:return C(Cr,a,t,i,m(Uo,n,e,c),l);case 1:return C(Z,a,t,e,c,l);default:return C(Cr,a,t,i,c,m(Uo,n,e,l))}}),Ar=w(function(n,e,r){var a=m(Uo,n,e,r);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(Z,1,t,i,c,l)}else{var u=a;return u}}),Bm=function(n){n:for(;;)if(n.$===-1&&n.d.$===-1){var e=n.d,r=e;n=r;continue n}else return n},Ru=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.e.d.$===-1&&!n.e.d.a){var e=n.a,r=n.b,a=n.c,t=n.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=n.e;v.a;var f=v.b,s=v.c,g=v.d;g.a;var d=g.b,h=g.c,b=g.d,_=g.e,S=v.e;return C(Z,0,d,h,C(Z,1,r,a,C(Z,0,i,c,l,u),b),C(Z,1,f,s,_,S))}else{var e=n.a,r=n.b,a=n.c,A=n.d;A.a;var i=A.b,c=A.c,l=A.d,u=A.e,P=n.e;P.a;var f=P.b,s=P.c,g=P.d,S=P.e;return C(Z,1,r,a,C(Z,0,i,c,l,u),C(Z,0,f,s,g,S))}else return n},Wc=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.d.d.$===-1&&!n.d.d.a){var e=n.a,r=n.b,a=n.c,t=n.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,f=l.d,s=l.e,g=t.e,d=n.e;d.a;var h=d.b,b=d.c,_=d.d,S=d.e;return C(Z,0,i,c,C(Z,1,u,v,f,s),C(Z,1,r,a,g,C(Z,0,h,b,_,S)))}else{var e=n.a,r=n.b,a=n.c,A=n.d;A.a;var i=A.b,c=A.c,P=A.d,g=A.e,D=n.e;D.a;var h=D.b,b=D.c,_=D.d,S=D.e;return C(Z,1,r,a,C(Z,0,i,c,P,g),C(Z,0,h,b,_,S))}else return n},Vm=wt(function(n,e,r,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return C(Z,r,l,u,v,C(Z,0,a,t,f,c))}else{n:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var s=c.d;return s.a,Wc(e)}else break n;else return c.a,c.d,Wc(e);else break n;return e}}),Ia=function(n){if(n.$===-1&&n.d.$===-1){var e=n.a,r=n.b,a=n.c,t=n.d,i=t.a,c=t.d,l=n.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(Z,e,r,a,Ia(t),l);var u=Ru(n);if(u.$===-1){var v=u.a,f=u.b,s=u.c,g=u.d,d=u.e;return C(Cr,v,f,s,Ia(g),d)}else return Ae}else return C(Z,e,r,a,Ia(t),l)}else return Ae},Zr=$(function(n,e){if(e.$===-2)return Ae;var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;if(Y(n,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(Z,r,a,t,o(Zr,n,i),c);var u=Ru(e);if(u.$===-1){var v=u.a,f=u.b,s=u.c,g=u.d,d=u.e;return C(Cr,v,f,s,o(Zr,n,g),d)}else return Ae}else return C(Z,r,a,t,o(Zr,n,i),c);else return o(Em,n,ui(Vm,n,e,r,a,t,i,c))}),Em=$(function(n,e){if(e.$===-1){var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;if(on(n,a)){var l=Bm(c);if(l.$===-1){var u=l.b,v=l.c;return C(Cr,r,u,v,i,Ia(c))}else return Ae}else return C(Cr,r,a,t,i,o(Zr,n,c))}else return Ae}),Wu=$(function(n,e){var r=o(Zr,n,e);if(r.$===-1&&!r.a){r.a;var a=r.b,t=r.c,i=r.d,c=r.e;return C(Z,1,a,t,i,c)}else{var l=r;return l}}),za=w(function(n,e,r){var a=e(o(pa,n,r));if(a.$)return o(Wu,n,r);var t=a.a;return m(Ar,n,t,r)}),Rm=function(n){switch(n.$){case 1:var e=n.a,r=n.b;return o(za,e,Ln(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Pm,y(i,c),r)}else return a}));case 0:var e=n.a,r=n.b;return o(za,e,Ln(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Tu,y(i,c),m(Fm,i,c,r))}));case 3:var e=n.a,r=n.b;return o(za,e,Ln(function(a){return a.$===3?Cm(r):a}));default:var e=n.a,r=n.b;return o(za,e,Ln(function(a){return a.$===2?zu(r):a}))}},Wm=function(n){return Sm(Rm(n))},Nm=$(function(n,e){return o(X,Wm(n),e)}),Hm=$(function(n,e){return W(e,{eZ:o(Nm,n,e.eZ)})}),Gm=$(function(n,e){var r=e.a,a=e.b;return o(re,r,W(a,{n:o(ku,Hm(n),a.n)}))}),Um=$(function(n,e){var r=e.a,a=e.b;return y(r,n(a))}),Im=w(function(n,e,r){var a=r.a,t=r.b,i=t.n;return o(re,a,W(t,{n:o(Um,o(n,i.a,e),i)}))}),Om=V(function(n,e,r,a){switch(r.$){case 0:return a;case 1:return W(a,{aQ:!a.aQ});case 2:var t=r.a;return W(a,{J:m(bm,n,t,a.J)});case 3:var i=r.a;return W(a,{J:o(Gm,i,a.J)});case 4:var c=r.a;return W(a,{J:m(Im,e,c,a.J)});default:var l=r.a;return W(a,{J:o(xm,l,a.J)})}}),qm=$(function(n,e){return o(re,Tt,{n:y(n,e(n)),af:x,X:x})}),Jm=as,Nc=Jm(x),Ne=Df,tr=Mf,Zm=ls("tick",o(M,function(n){return o(M,function(e){return o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return dn({V:c,cg:i,e6:t,dH:a,cV:r,bq:e,gb:n})},o(L,"clock",_n))},o(L,"devicePixelRatio",_n))},o(L,"dt",_n))},o(L,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(f){return o(M,function(s){return dn({eL:s,e_:f,ci:v,e5:u,dI:l,fM:c,et:i,fV:t,dc:a})},o(L,"alt",rn))},o(L,"control",rn))},o(L,"down",rn))},o(L,"downs",Ne(tr)))},o(L,"left",rn))},o(L,"pressedKeys",Ne(tr)))},o(L,"right",rn))},o(L,"shift",rn))},o(L,"up",rn))))},o(L,"pointer",o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return dn({ci:v,dE:u,fA:l,fR:c,fS:i,dc:t,gf:a,gj:r})},o(L,"down",rn))},o(L,"isDown",rn))},o(L,"move",rn))},o(L,"rightDown",rn))},o(L,"rightUp",rn))},o(L,"up",rn))},o(L,"x",_n))},o(L,"y",_n))))},o(L,"screen",o(M,function(e){return o(M,function(r){return dn({fk:r,gd:e})},o(L,"height",_n))},o(L,"width",_n))))},o(L,"wheel",o(M,function(n){return o(M,function(e){return dn({e0:e,e1:n})},o(L,"deltaX",_n))},o(L,"deltaY",_n))))),Ym=function(n){return{$:4,a:n}},Xm={$:0},Ti=$i,le=$(function(n,e){return o(Il,n,Ti(e))}),B=le("className"),Hc=function(n){var e=n.b;return e},Qm=function(n){var e=n.b.n;return e.b},F=ce("div"),aa=le("id"),Km=ds,ct=Km,n0=ms,ln=n0,e0={$:1},r0=function(n){return{$:3,a:n}},a0=function(n){return{$:5,a:n}},Gc=ce("a"),Ft=ce("button"),t0=lr("d"),Nu=Gl("http://www.w3.org/2000/svg"),o0=Nu("path"),i0=Nu("svg"),c0=lr("viewBox"),Yr=function(n){return o(i0,p([c0("0 0 100 100"),o(ln,"width","100%"),o(ln,"height","100%")]),p([o(o0,p([t0(n)]),x)]))},Uc=function(n){return o(le,"href",gs(n))},_r={e4:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fe:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fj:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fK:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fL:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",cV:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fO:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fX:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",f6:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",f8:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gn:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},l0=function(n){return{$:0,a:n}},Hu=Ul,Bt=$(function(n,e){return o(Hu,n,l0(e))}),Vt=function(n){return o(Bt,"click",dn(n))},Ic=le("target"),u0=le("title"),Io=$(function(n,e){if(e.$===-2)return Ae;var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(Z,r,a,o(n,a,t),o(Io,n,i),o(Io,n,c))}),$0=Mo,K=$0,v0=function(n){return m(Ct,w(function(e,r,a){return o(k,r,a)}),x,n)},f0=$(function(n,e){return{$:3,a:n,b:e}}),s0=$(function(n,e){return{$:2,a:n,b:e}}),d0=$(function(n,e){return{$:0,a:n,b:e}}),m0=$(function(n,e){return{$:1,a:n,b:e}}),Je=V(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Mi=j(Je,0/255,0/255,0/255,1),p0=$i,g0=$(function(n,e){return o(Il,n,p0(e))}),Gu=g0("checked"),qn=of,b0=w(function(n,e,r){return un(o(ra,n-rr(r),Dt(e)),r)}),ta=Yv,Uu=function(n){var e=function(r){return r<10?xn(r):Dt(Du(87+r))};return n<16?e(n):un(Uu(n/16|0),e(o(ta,16,n)))},h0=o(nn,Uu,o(b0,2,"0")),Di=function(n){var e=n.a,r=n.b,a=n.c,t=n.d;return{aM:t,cc:a,cj:r,cY:e}},A0=function(n){var e=Di(n),r=e.cY,a=e.cj,t=e.cc;return o(er,"",o(k,"#",o(X,o(nn,qn,h0),p([r*255,a*255,t*255]))))},lt=le("htmlFor"),_0=$(function(n,e){if(e.$)return q;var r=e.a;return n(r)}),ut=$(function(n,e){if(e.$){var a=e.a;return Fn(a)}else{var r=e.a;return n(r)}}),w0=w(function(n,e,r){var a=n(e);if(a.$)return r;var t=a.a;return o(k,t,r)}),ga=$(function(n,e){return m(we,w0(n),x,e)}),Iu=V(function(n,e,r,a){return{fp:e,fy:n,fF:r,f_:a}}),y0=Ws,x0=Sf,S0=$(function(n,e){if(e.$)return Fn(n);var r=e.a;return fn(r)}),C0=Rs,P0=function(n){return o(C0,{eU:!1,fB:!1},n)},Tr=function(n){if(n.b){var e=n.a;return n.b,U(e)}else return q},j0=$(function(n,e){if(e.$){var a=e.a;return Fn(a)}else{var r=e.a;return fn(n(r))}}),L0=function(n){return{$:2,a:n}},k0=function(n){return{$:0,a:n}},z0=function(n){return{$:1,a:n}},io=$(function(n,e){return me(e)-me(n)}),co=w(function(n,e,r){var a=me(r);return Y(me(n),a)<1&&Y(a,me(e))<1}),T0=$(function(n,e){var r=function(t){return Y(t,n)<0?fn(t):Fn(z0(e))},a=m(co,"0","9",e)?fn(o(io,"0",e)):m(co,"a","z",e)?fn(10+o(io,"a",e)):m(co,"A","Z",e)?fn(10+o(io,"A",e)):Fn(k0(e));return o(ut,r,a)}),Ou=$(function(n,e){var r=kr(e);if(r.$===1)return fn(0);var a=r.a,t=a.a,i=a.b;return o(ut,function(c){return o(ut,function(l){return fn(c+l*n)},o(Ou,n,i))},o(T0,n,t))}),M0=$(function(n,e){return 2<=n&&n<=36?o(Ou,n,Go(e)):Fn(L0(n))}),D0=M0(16),F0=w(function(n,e,r){return j(Je,n,e,r,1)}),B0=V(function(n,e,r,a){return j(Je,n,e,r,a)}),He=Zv,V0=$(function(n,e){var r=o(He,10,n);return qn(e*r)/r}),E0=bf,R0=function(){var n="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",e=function(r){var a=Mu(r);if(a.b&&!a.b.b){var t=a.a;return x0(p([t,t]))}else return r};return o(nn,E0,o(nn,function(r){return o(Ln,function(a){return m(y0,1,a,r)},P0(n))},o(nn,_0(Tr),o(nn,Ln(function(r){return r.f_}),o(nn,Ln(ga(Nn)),o(nn,S0("Parsing hex regex failed"),ut(function(r){var a=o(X,o(nn,e,o(nn,D0,j0(Gr))),r);n:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return fn(j(B0,t/255,c/255,u/255,o(V0,2,f/255)))}else break n;else{var t=a.a.a,s=a.b,c=s.a.a,g=s.b,u=g.a.a;return fn(m(F0,t/255,c/255,u/255))}else break n;return Fn("Parsing ints from hex failed")})))))))}(),oa=ce("input"),$t=ce("label"),vt=le("name"),qu=$(function(n,e){return m(we,L,e,n)}),W0=o(qu,p(["target","checked"]),rn),Ju=function(n){return o(Bt,"change",o(tt,n,W0))},N0=function(n){return y(n,!0)},H0=function(n){return{$:1,a:n}},G0=$(function(n,e){return o(Hu,n,H0(e))}),U0=o(qu,p(["target","value"]),tr),Et=function(n){return o(G0,"input",o(tt,N0,o(tt,n,U0)))},Zu=le("max"),Yu=le("min"),Xu=function(n){return o(le,"step",n)},ia=le("type"),Rt=le("value"),Oc=function(n){var e=n.co,r=n.dd,a=n.cE,t=n.cA,i=n.c5,c=n.cJ;return o(F,x,p([o($t,p([lt(e)]),p([o(F,p([B("relative w-full")]),p([o(F,p([B("inline-block")]),p([K(e)])),o(F,p([B("inline-block float-right")]),p([K(yn(r))]))]))])),o(oa,p([ia("range"),o(ln,"width","100%"),aa(e),vt(e),Yu(yn(a)),Zu(yn(t)),Rt(yn(r)),Xu(yn(i)),Et(o(nn,zi,o(nn,pn(42),c)))]),x)]))},Fi=$(function(n,e){if(e.$)return n;var r=e.a;return r}),I0=$(function(n,e){switch(e.$){case 3:var c=e.a;return o(F,x,p([o(F,p([B("mb-2")]),p([o($t,p([lt(n)]),p([K(n)]))])),o(oa,p([ia("checkbox"),aa(n),vt(n),Ju(f0(n)),Gu(c)]),x)]));case 0:var r=e.a,t=r.a,i=r.b,c=e.b;return Oc({co:n,cA:i,cE:t,cJ:d0(n),c5:.01*(i-t),dd:c});case 1:var a=e.a,t=a.a,i=a.b,c=e.b;return Oc({co:n,cA:i,cE:t,cJ:o(nn,qn,m0(n)),c5:1,dd:c});default:var c=e.a;return o(F,x,p([o(F,p([o(ln,"margin-bottom","6px")]),p([o($t,p([lt(n)]),p([K(n)]))])),o(oa,p([ia("color"),o(ln,"width","100%"),o(ln,"height","26px"),o(ln,"padding","0px"),aa(n),vt(n),Et(function(l){return o(s0,n,o(Fi,Mi,R0(l)))}),Rt(A0(c))]),x)]))}}),O0=function(n){return o(F,p([B("p-6 border-y-[0.5px] border-white20")]),p([o(F,p([B("text-lg pb-2")]),p([K(n.fC)])),o(F,p([B("pl-2 pr-2")]),v0(o(Io,I0,n.aA)))]))},q0=function(n){return o(F,p([B("text-xs text-white60")]),o(X,O0,n))},J0=function(n){return o(F,p([B("absolute left-[104px] bottom-2 text-sm text-white40")]),p([K("clock: "+o(Jr,3,zr(n).V))]))},Z0=function(n){n.a;var e=n.b.X;return o(Ln,function(r){return qn(60/(zr(n).V-r))},o(Ln,o(nn,Ro,function(r){return r.V}),Tr(o(ki,59,e))))},Y0=function(n){return o(F,p([B("absolute bottom-2 right-4 text-sm text-white40")]),function(){var e=Z0(n);if(e.$===1)return p([K("... Fps")]);var r=e.a;return p([K(xn(r)+" Fps")])}())},X0=function(n){return{$:0,a:n}},Q0=function(n){var e=n.b.X;return oe(e)},K0=function(n){var e=n.b.X;n.b.n;var r=n.b.af;return oe(e)+1+oe(r)},n1=function(n){return o(oa,p([B("absolute left-[100px] w-[490px]"),ia("range"),Yu(xn(0)),Zu(xn(K0(n)-1)),Rt(xn(Q0(n))),Xu(xn(1)),Et(o(nn,zi,o(nn,pn(42),o(nn,qn,X0))))]),x)},qc={$:1},e1={$:3},r1={$:2},Bi=function(n){return!n.b},Jc=$(function(n,e){return o(Ft,p([B("px-2 bg-black40"),B(e),Vt(n)]),p([K("REC")]))}),Zc=$(function(n,e){return o(Ft,p([B("absolute left-[60px] mx-1 px-1 bg-black40"),Vt(e)]),p([o(F,p([B("w-4 h-6 fill-white80")]),p([Yr(n)]))]))}),a1=function(n){var e=n.a,r=n.b.af;return o(F,p([B("py-1")]),p([function(){switch(e.$){case 0:return o(Jc,qc,"text-red-500 font-bold");case 1:return o(Jc,r1,"text-white80 font-bold");default:return o(F,x,x)}}(),function(){switch(e.$){case 0:return o(F,x,x);case 1:return Bi(r)?o(F,x,x):o(Zc,_r.fL,e1);default:return o(Zc,_r.fK,qc)}}()]))},t1=function(n){return o(F,p([B("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),p([n1(n),a1(n),Y0(n),J0(n)]))},Vi=function(n){return o(er,"",n)},o1=$(function(n,e){if(e.b){var r=e.a,a=e.b,t=$(function(c,l){return o(k,n,o(k,c,l))}),i=m(we,t,x,a);return o(k,r,i)}else return x}),i1=function(n){var e=n.a;return on(e,Tt)},ne=ce("p"),Qu=ce("pre"),c1=$(function(n,e){var r=i1(e.J)?o(F,x,x):o(F,p([B("absolute pointer-events-none w-8 h-8"),o(ln,"left",yn(n.cV.gf+.5*n.bq.gd)+"px"),o(ln,"top",yn(-n.cV.gj+.5*n.bq.fk)+"px")]),p([o(F,p([B(n.cV.dE?"fill-black80":"fill-white40")]),p([Yr(_r.cV)]))]));return o(F,x,p([r,o(Qu,p([B("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),p([o(ne,x,p([K("pressedKeys: "+Vi(o(o1," ",n.dH.fM)))])),o(ne,x,p([K("delta time: "+o(Jr,4,n.e6))])),o(ne,x,p([K("pointer is down: "+(n.cV.dE?"yes":"no"))])),o(ne,x,p([K("pointer.x: "+o(Jr,2,n.cV.gf))])),o(ne,x,p([K("pointer.y: "+o(Jr,2,n.cV.gj))])),o(ne,x,p([K("wheel deltaX: "+yn(n.gb.e0))])),o(ne,x,p([K("wheel deltaY: "+yn(n.gb.e1))]))]))]))}),l1=$(function(n,e){var r=o(Ft,p([B(e.aQ?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Vt(e0),u0("Distraction Free Mode")]),p([Yr(_r.gn)])),a=o(F,p([B("absolute w-8 bottom-12")]),p([o(Gc,p([B("fill-twitterBlue40 hover:fill-twitterBlue"),Uc("https://twitter.com/AzizErkalSelman"),Ic("_blank")]),p([Yr(_r.f6)]))])),t=o(F,p([B("absolute w-8 bottom-2")]),p([o(Gc,p([B("fill-githubCat40 hover:fill-githubCat"),Uc("https://github.com/erkal/elm-3d-playground-exploration"),Ic("_blank")]),p([Yr(_r.fe)]))]));return e.aQ?o(F,p([B("fixed w-10 h-10 p-1")]),p([r])):o(F,x,p([o(F,p([B("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),p([r,a,t])),o(F,p([B("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),p([o(ct,r0,q0(zr(e.J).eZ))])),o(ct,a0,t1(e.J)),o(c1,n,e)]))}),u1=w(function(n,e,r){var a=Qm(r.J),t=zr(r.J);return o(F,p([B("bg-black40"),B("select-none"),B("antialiased"),B("font-mono"),o(ln,"width",yn(t.bq.gd)+"px"),o(ln,"height",yn(t.bq.fk)+"px")]),p([o(F,p([B("fixed")]),p([o(ct,wu(Xm),o(n,t,a))])),o(F,p([aa("gui")]),p([o(l1,t,r),o(F,p([B("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),p([o(ct,Ym,o(e,t,a))]))]))]))}),$1=Zn(function(n,e,r,a,t,i){var c=$(function(u,v){return y(j(Om,e,i,u,v),Nc)}),l=function(u){var v=o(yu,r,u.fr);return y({aQ:u.fr.bq.gd<500,J:o(qm,v,a)},Nc)};return mm({fq:l,f$:wu(Zm(rm)),f7:c,ga:o(u1,n,t)})}),ft={$:0},Ku=Nf,n$=Sn(function(n,e,r,a,t){return{dn:t,dL:r,bT:a,cU:n,ej:e}}),ca=$(function(n,e){return{$:0,a:n,b:e}}),Yc=kf,Oo=m(sa,$(function(n,e){return y(n,e)}),o(L,"A1",Yc),o(L,"A2",Yc)),ve=$(function(n,e){return{$:0,a:n,b:e}}),e$=Lf,v1=function(){var n=function(e){switch(e){case"X":return dn(0);case"Y":return dn(1);case"Z":return dn(2);default:var r=e;return e$("Unknown constructor for type Axis: "+r)}};return o(M,n,tr)}(),f1=function(){var n=function(e){switch(e){case"Positive":return dn(0);case"Negative":return dn(1);default:var r=e;return e$("Unknown constructor for type Sign: "+r)}};return o(M,n,tr)}(),s1=m(sa,ve,o(L,"A1",v1),o(L,"A2",f1)),Xc=m(sa,ca,o(L,"A1",Oo),o(L,"A2",s1)),pe=$(function(n,e){return{fu:n,bn:e}}),lo=m(sa,pe,o(L,"last",Oo),o(L,"rest",Ne(Oo))),d1=Wf,r$=mn(d1,n$,o(L,"playerCube",Xc),o(L,"playerPath",lo),o(L,"levelEditingCube",Xc),o(L,"levelEditingPath",lo),o(L,"calculatedSolutions",Ne(lo))),m1=Rf,a$=function(n){var e=w(function(r,a,t){return{q:t,l:r,n:a}});return j(m1,e,o(L,"before",Ne(n)),o(L,"current",n),o(L,"after",Ne(n)))},t$=C(n$,o(ca,y(0,0),o(ve,2,0)),o(pe,y(0,0),x),o(ca,y(0,0),o(ve,2,0)),o(pe,y(0,0),x),x),p1=`
{
  "before": [
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -1,
          "A2": -2
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -1,
          "A2": -2
        },
        "rest": [
          {
            "A1": 0,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -3
          },
          {
            "A1": 2,
            "A2": -3
          },
          {
            "A1": 2,
            "A2": -2
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 3,
            "A2": -2
          },
          {
            "A1": 4,
            "A2": -2
          },
          {
            "A1": 4,
            "A2": -1
          },
          {
            "A1": 4,
            "A2": 0
          },
          {
            "A1": 4,
            "A2": 1
          },
          {
            "A1": 4,
            "A2": 2
          },
          {
            "A1": 4,
            "A2": 3
          },
          {
            "A1": 3,
            "A2": 3
          },
          {
            "A1": 3,
            "A2": 4
          },
          {
            "A1": 2,
            "A2": 4
          },
          {
            "A1": 2,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": -1,
            "A2": -2
          },
          "rest": [
            {
              "A1": 0,
              "A2": -2
            },
            {
              "A1": 1,
              "A2": -2
            },
            {
              "A1": 1,
              "A2": -3
            },
            {
              "A1": 2,
              "A2": -3
            },
            {
              "A1": 2,
              "A2": -2
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 3,
              "A2": -2
            },
            {
              "A1": 4,
              "A2": -2
            },
            {
              "A1": 4,
              "A2": -1
            },
            {
              "A1": 4,
              "A2": 0
            },
            {
              "A1": 4,
              "A2": 1
            },
            {
              "A1": 4,
              "A2": 2
            },
            {
              "A1": 4,
              "A2": 3
            },
            {
              "A1": 3,
              "A2": 3
            },
            {
              "A1": 3,
              "A2": 4
            },
            {
              "A1": 2,
              "A2": 4
            },
            {
              "A1": 2,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 3,
              "A2": 2
            },
            {
              "A1": 3,
              "A2": 1
            },
            {
              "A1": 3,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 0,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -1,
          "A2": 2
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -1,
          "A2": 2
        },
        "rest": [
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -3,
            "A2": 1
          },
          {
            "A1": -3,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": -1
          },
          {
            "A1": -2,
            "A2": -1
          },
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": -2
          },
          {
            "A1": -2,
            "A2": -2
          },
          {
            "A1": -3,
            "A2": -2
          },
          {
            "A1": -3,
            "A2": -3
          },
          {
            "A1": -3,
            "A2": -4
          },
          {
            "A1": -2,
            "A2": -4
          },
          {
            "A1": -2,
            "A2": -3
          },
          {
            "A1": -1,
            "A2": -3
          },
          {
            "A1": -1,
            "A2": -4
          },
          {
            "A1": -1,
            "A2": -5
          },
          {
            "A1": 0,
            "A2": -5
          },
          {
            "A1": 1,
            "A2": -5
          },
          {
            "A1": 1,
            "A2": -4
          },
          {
            "A1": 0,
            "A2": -4
          },
          {
            "A1": 0,
            "A2": -3
          },
          {
            "A1": 0,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -3
          },
          {
            "A1": 2,
            "A2": -3
          },
          {
            "A1": 2,
            "A2": -2
          },
          {
            "A1": 3,
            "A2": -2
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 0
          },
          {
            "A1": 3,
            "A2": 0
          },
          {
            "A1": 3,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": -1,
            "A2": 2
          },
          "rest": [
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -3,
              "A2": 1
            },
            {
              "A1": -3,
              "A2": 0
            },
            {
              "A1": -3,
              "A2": -1
            },
            {
              "A1": -2,
              "A2": -1
            },
            {
              "A1": -2,
              "A2": 0
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": -2
            },
            {
              "A1": -2,
              "A2": -2
            },
            {
              "A1": -3,
              "A2": -2
            },
            {
              "A1": -3,
              "A2": -3
            },
            {
              "A1": -3,
              "A2": -4
            },
            {
              "A1": -2,
              "A2": -4
            },
            {
              "A1": -2,
              "A2": -3
            },
            {
              "A1": -1,
              "A2": -3
            },
            {
              "A1": -1,
              "A2": -4
            },
            {
              "A1": -1,
              "A2": -5
            },
            {
              "A1": 0,
              "A2": -5
            },
            {
              "A1": 1,
              "A2": -5
            },
            {
              "A1": 1,
              "A2": -4
            },
            {
              "A1": 0,
              "A2": -4
            },
            {
              "A1": 0,
              "A2": -3
            },
            {
              "A1": 0,
              "A2": -2
            },
            {
              "A1": 1,
              "A2": -2
            },
            {
              "A1": 1,
              "A2": -3
            },
            {
              "A1": 2,
              "A2": -3
            },
            {
              "A1": 2,
              "A2": -2
            },
            {
              "A1": 3,
              "A2": -2
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": 1
            },
            {
              "A1": 3,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": 1,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": 1,
          "A2": 3
        },
        "rest": [
          {
            "A1": 2,
            "A2": 3
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 3
          },
          {
            "A1": 4,
            "A2": 3
          },
          {
            "A1": 4,
            "A2": 2
          },
          {
            "A1": 5,
            "A2": 2
          },
          {
            "A1": 5,
            "A2": 1
          },
          {
            "A1": 5,
            "A2": 0
          },
          {
            "A1": 4,
            "A2": 0
          },
          {
            "A1": 4,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 0
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": 1,
            "A2": 3
          },
          "rest": [
            {
              "A1": 2,
              "A2": 3
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 3,
              "A2": 2
            },
            {
              "A1": 3,
              "A2": 3
            },
            {
              "A1": 4,
              "A2": 3
            },
            {
              "A1": 4,
              "A2": 2
            },
            {
              "A1": 5,
              "A2": 2
            },
            {
              "A1": 5,
              "A2": 1
            },
            {
              "A1": 5,
              "A2": 0
            },
            {
              "A1": 4,
              "A2": 0
            },
            {
              "A1": 4,
              "A2": 1
            },
            {
              "A1": 3,
              "A2": 1
            },
            {
              "A1": 3,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 0,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": 1,
          "A2": 1
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": 1,
          "A2": 1
        },
        "rest": [
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 4
          },
          {
            "A1": 0,
            "A2": 4
          },
          {
            "A1": -1,
            "A2": 4
          },
          {
            "A1": -2,
            "A2": 4
          },
          {
            "A1": -3,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 3
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -3,
            "A2": 2
          },
          {
            "A1": -4,
            "A2": 2
          },
          {
            "A1": -5,
            "A2": 2
          },
          {
            "A1": -5,
            "A2": 1
          },
          {
            "A1": -5,
            "A2": 0
          },
          {
            "A1": -4,
            "A2": 0
          },
          {
            "A1": -4,
            "A2": 1
          },
          {
            "A1": -3,
            "A2": 1
          },
          {
            "A1": -3,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": -1
          },
          {
            "A1": -2,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": 1,
            "A2": 1
          },
          "rest": [
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 4
            },
            {
              "A1": 0,
              "A2": 4
            },
            {
              "A1": -1,
              "A2": 4
            },
            {
              "A1": -2,
              "A2": 4
            },
            {
              "A1": -3,
              "A2": 4
            },
            {
              "A1": -4,
              "A2": 4
            },
            {
              "A1": -4,
              "A2": 3
            },
            {
              "A1": -3,
              "A2": 3
            },
            {
              "A1": -3,
              "A2": 2
            },
            {
              "A1": -4,
              "A2": 2
            },
            {
              "A1": -5,
              "A2": 2
            },
            {
              "A1": -5,
              "A2": 1
            },
            {
              "A1": -5,
              "A2": 0
            },
            {
              "A1": -4,
              "A2": 0
            },
            {
              "A1": -4,
              "A2": 1
            },
            {
              "A1": -3,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 0
            },
            {
              "A1": -3,
              "A2": 0
            },
            {
              "A1": -3,
              "A2": -1
            },
            {
              "A1": -2,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": -1,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        },
        {
          "last": {
            "A1": 1,
            "A2": 1
          },
          "rest": [
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 4
            },
            {
              "A1": 0,
              "A2": 4
            },
            {
              "A1": -1,
              "A2": 4
            },
            {
              "A1": -2,
              "A2": 4
            },
            {
              "A1": -3,
              "A2": 4
            },
            {
              "A1": -4,
              "A2": 4
            },
            {
              "A1": -4,
              "A2": 3
            },
            {
              "A1": -3,
              "A2": 3
            },
            {
              "A1": -3,
              "A2": 2
            },
            {
              "A1": -4,
              "A2": 2
            },
            {
              "A1": -5,
              "A2": 2
            },
            {
              "A1": -5,
              "A2": 1
            },
            {
              "A1": -5,
              "A2": 0
            },
            {
              "A1": -4,
              "A2": 0
            },
            {
              "A1": -4,
              "A2": 1
            },
            {
              "A1": -3,
              "A2": 1
            },
            {
              "A1": -3,
              "A2": 0
            },
            {
              "A1": -3,
              "A2": -1
            },
            {
              "A1": -2,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": 2,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": 2,
          "A2": 0
        },
        "rest": [
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -2
          },
          {
            "A1": -1,
            "A2": -2
          },
          {
            "A1": -2,
            "A2": -2
          },
          {
            "A1": -2,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": 0
          },
          {
            "A1": -3,
            "A2": 1
          },
          {
            "A1": -3,
            "A2": 2
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": 2,
            "A2": 0
          },
          "rest": [
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 0,
              "A2": -1
            },
            {
              "A1": 0,
              "A2": -2
            },
            {
              "A1": -1,
              "A2": -2
            },
            {
              "A1": -2,
              "A2": -2
            },
            {
              "A1": -2,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": -2,
              "A2": 0
            },
            {
              "A1": -3,
              "A2": 0
            },
            {
              "A1": -3,
              "A2": 1
            },
            {
              "A1": -3,
              "A2": 2
            },
            {
              "A1": -3,
              "A2": 3
            },
            {
              "A1": -2,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 2
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -1,
          "A2": -1
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -1,
          "A2": -1
        },
        "rest": [
          {
            "A1": 0,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 3,
            "A2": 0
          },
          {
            "A1": 3,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 2
          },
          {
            "A1": 3,
            "A2": 3
          },
          {
            "A1": 2,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": -1,
            "A2": 3
          },
          {
            "A1": -2,
            "A2": 3
          },
          {
            "A1": -3,
            "A2": 3
          },
          {
            "A1": -3,
            "A2": 2
          },
          {
            "A1": -3,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 1
          },
          {
            "A1": -2,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 2
          },
          {
            "A1": -1,
            "A2": 1
          },
          {
            "A1": -1,
            "A2": 0
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": -1,
            "A2": -1
          },
          "rest": [
            {
              "A1": 0,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 3,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": 1
            },
            {
              "A1": 3,
              "A2": 2
            },
            {
              "A1": 3,
              "A2": 3
            },
            {
              "A1": 2,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": -1,
              "A2": 3
            },
            {
              "A1": -2,
              "A2": 3
            },
            {
              "A1": -3,
              "A2": 3
            },
            {
              "A1": -3,
              "A2": 2
            },
            {
              "A1": -3,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 1
            },
            {
              "A1": -2,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 2
            },
            {
              "A1": -1,
              "A2": 1
            },
            {
              "A1": -1,
              "A2": 0
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -1,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -1,
          "A2": 0
        },
        "rest": [
          {
            "A1": -1,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -1
          },
          {
            "A1": 0,
            "A2": -2
          },
          {
            "A1": 0,
            "A2": -3
          },
          {
            "A1": 1,
            "A2": -3
          },
          {
            "A1": 2,
            "A2": -3
          },
          {
            "A1": 3,
            "A2": -3
          },
          {
            "A1": 3,
            "A2": -2
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -2
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": -1,
            "A2": 0
          },
          "rest": [
            {
              "A1": -1,
              "A2": -1
            },
            {
              "A1": 0,
              "A2": -1
            },
            {
              "A1": 0,
              "A2": -2
            },
            {
              "A1": 0,
              "A2": -3
            },
            {
              "A1": 1,
              "A2": -3
            },
            {
              "A1": 2,
              "A2": -3
            },
            {
              "A1": 3,
              "A2": -3
            },
            {
              "A1": 3,
              "A2": -2
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": -2
            },
            {
              "A1": 1,
              "A2": -2
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": 3,
          "A2": 2
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": 3,
          "A2": 2
        },
        "rest": [
          {
            "A1": 3,
            "A2": 1
          },
          {
            "A1": 3,
            "A2": 0
          },
          {
            "A1": 3,
            "A2": -1
          },
          {
            "A1": 2,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": -1
          },
          {
            "A1": 1,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 0
          },
          {
            "A1": 2,
            "A2": 1
          },
          {
            "A1": 2,
            "A2": 2
          },
          {
            "A1": 2,
            "A2": 3
          },
          {
            "A1": 1,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 3
          },
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": 3,
            "A2": 2
          },
          "rest": [
            {
              "A1": 3,
              "A2": 1
            },
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 2,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        },
        {
          "last": {
            "A1": 3,
            "A2": 2
          },
          "rest": [
            {
              "A1": 3,
              "A2": 1
            },
            {
              "A1": 3,
              "A2": 0
            },
            {
              "A1": 3,
              "A2": -1
            },
            {
              "A1": 2,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": -1
            },
            {
              "A1": 1,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 0
            },
            {
              "A1": 2,
              "A2": 1
            },
            {
              "A1": 2,
              "A2": 2
            },
            {
              "A1": 2,
              "A2": 3
            },
            {
              "A1": 1,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 3
            },
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": -1,
          "A2": 2
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -1,
          "A2": 2
        },
        "rest": [
          {
            "A1": 0,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 2
          },
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": -1,
            "A2": 2
          },
          "rest": [
            {
              "A1": 0,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 2
            },
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    },
    {
      "playerCube": {
        "A1": {
          "A1": 0,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "playerPath": {
        "last": {
          "A1": 0,
          "A2": 0
        },
        "rest": []
      },
      "levelEditingCube": {
        "A1": {
          "A1": 1,
          "A2": 0
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": 1,
          "A2": 0
        },
        "rest": [
          {
            "A1": 1,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 1
          },
          {
            "A1": 0,
            "A2": 0
          }
        ]
      },
      "calculatedSolutions": [
        {
          "last": {
            "A1": 1,
            "A2": 0
          },
          "rest": [
            {
              "A1": 1,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 1
            },
            {
              "A1": 0,
              "A2": 0
            }
          ]
        }
      ]
    }
  ],
  "current": {
    "playerCube": {
      "A1": {
        "A1": -4,
        "A2": 3
      },
      "A2": {
        "A1": "Z",
        "A2": "Positive"
      }
    },
    "playerPath": {
      "last": {
        "A1": -4,
        "A2": 3
      },
      "rest": []
    },
    "levelEditingCube": {
      "A1": {
        "A1": 3,
        "A2": 3
      },
      "A2": {
        "A1": "Z",
        "A2": "Positive"
      }
    },
    "levelEditingPath": {
      "last": {
        "A1": 3,
        "A2": 3
      },
      "rest": [
        {
          "A1": 2,
          "A2": 3
        },
        {
          "A1": 1,
          "A2": 3
        },
        {
          "A1": 0,
          "A2": 3
        },
        {
          "A1": 0,
          "A2": 2
        },
        {
          "A1": 1,
          "A2": 2
        },
        {
          "A1": 1,
          "A2": 1
        },
        {
          "A1": 2,
          "A2": 1
        },
        {
          "A1": 2,
          "A2": 2
        },
        {
          "A1": 3,
          "A2": 2
        },
        {
          "A1": 3,
          "A2": 1
        },
        {
          "A1": 3,
          "A2": 0
        },
        {
          "A1": 3,
          "A2": -1
        },
        {
          "A1": 3,
          "A2": -2
        },
        {
          "A1": 3,
          "A2": -3
        },
        {
          "A1": 3,
          "A2": -4
        },
        {
          "A1": 2,
          "A2": -4
        },
        {
          "A1": 2,
          "A2": -3
        },
        {
          "A1": 1,
          "A2": -3
        },
        {
          "A1": 1,
          "A2": -4
        },
        {
          "A1": 0,
          "A2": -4
        },
        {
          "A1": 0,
          "A2": -3
        },
        {
          "A1": 0,
          "A2": -2
        },
        {
          "A1": 1,
          "A2": -2
        },
        {
          "A1": 2,
          "A2": -2
        },
        {
          "A1": 2,
          "A2": -1
        },
        {
          "A1": 2,
          "A2": 0
        },
        {
          "A1": 1,
          "A2": 0
        },
        {
          "A1": 1,
          "A2": -1
        },
        {
          "A1": 0,
          "A2": -1
        },
        {
          "A1": 0,
          "A2": 0
        },
        {
          "A1": 0,
          "A2": 1
        },
        {
          "A1": -1,
          "A2": 1
        },
        {
          "A1": -1,
          "A2": 0
        },
        {
          "A1": -1,
          "A2": -1
        },
        {
          "A1": -2,
          "A2": -1
        },
        {
          "A1": -2,
          "A2": 0
        },
        {
          "A1": -3,
          "A2": 0
        },
        {
          "A1": -3,
          "A2": -1
        },
        {
          "A1": -3,
          "A2": -2
        },
        {
          "A1": -2,
          "A2": -2
        },
        {
          "A1": -1,
          "A2": -2
        },
        {
          "A1": -1,
          "A2": -3
        },
        {
          "A1": -1,
          "A2": -4
        },
        {
          "A1": -2,
          "A2": -4
        },
        {
          "A1": -2,
          "A2": -3
        },
        {
          "A1": -3,
          "A2": -3
        },
        {
          "A1": -3,
          "A2": -4
        },
        {
          "A1": -4,
          "A2": -4
        },
        {
          "A1": -4,
          "A2": -3
        },
        {
          "A1": -4,
          "A2": -2
        },
        {
          "A1": -4,
          "A2": -1
        },
        {
          "A1": -4,
          "A2": 0
        },
        {
          "A1": -4,
          "A2": 1
        },
        {
          "A1": -4,
          "A2": 2
        },
        {
          "A1": -3,
          "A2": 2
        },
        {
          "A1": -3,
          "A2": 1
        },
        {
          "A1": -2,
          "A2": 1
        },
        {
          "A1": -2,
          "A2": 2
        },
        {
          "A1": -1,
          "A2": 2
        },
        {
          "A1": -1,
          "A2": 3
        },
        {
          "A1": -2,
          "A2": 3
        },
        {
          "A1": -3,
          "A2": 3
        },
        {
          "A1": -4,
          "A2": 3
        }
      ]
    },
    "calculatedSolutions": []
  },
  "after": []
}
`,g1=function(n){return{q:x,l:x,n}},b1=o(Fi,g1(t$),o(Ku,a$(r$),p1)),h1={ck:!1,cl:"",cm:"",ee:q,c4:0},Wt={$:0},A1=Wt,_1=function(n){return{a9:y(0,0),o:h1,a:b1,c4:ft,bt:A1}},Qe=$(function(n,e){return y(n,zu(e))}),w1=w(function(n,e,r){return{aA:r,fs:e,fC:n}}),Ei=Ae,y1=function(n){return m(_e,$(function(e,r){var a=e.a,t=e.b;return m(Ar,a,t,r)}),Ei,n)},x1=w(function(n,e,r){return m(w1,n,e,y1(r))}),uo=x1,Me=w(function(n,e,r){var a=e.a,t=e.b;return y(n,o(Tu,y(a,t),r))}),ee=Xv,$o=function(n){return n/255},Ke=w(function(n,e,r){return j(Je,$o(n),$o(e),$o(r),1)}),S1=p([m(uo,"Camera",!0,p([m(Me,"camera distance",y(3,60),20),m(Me,"camera azimuth",y(-ee,ee),0),m(Me,"camera elevation",y(-ee/2,ee/2),-.15)])),m(uo,"Parameters",!0,p([m(Me,"cubes side length",y(.5,1),.95),m(Me,"duration of step animation",y(.1,1),.23),m(Me,"duration of mistake animation",y(.1,1),.5),m(Me,"height of following lights",y(.1,8),5)])),m(uo,"Colors and light",!0,p([m(Me,"lumens of following lights",y(4e4,12e4),1e5),o(Qe,"background color",m(Ke,150,150,150)),o(Qe,"color 1",m(Ke,244,88,67)),o(Qe,"color 2",m(Ke,255,200,40)),o(Qe,"path color",m(Ke,244,88,67)),o(Qe,"board color",m(Ke,200,170,170)),o(Qe,"finish mark color",m(Ke,150,215,106)),o(Qe,"wall color",m(Ke,38,48,64))]))]),Tn=function(n){var e=n;return e.n},C1=function(n){return{$:1,a:n}},Oa=Zn(function(n,e,r,a,t,i){var c=i.c4;return c.$?i:W(i,{c4:C1({cF:t,bp:r,b6:e,aj:n.V,eJ:a})})}),P1={$:1},j1={$:0},vo=function(n){return{$:2,a:n}},o$=$(function(n,e){return o(Mt,function(r){return on(r,n)},e)}),qa=$(function(n,e){var r=e.fu,a=e.bn;return o(o$,n,o(k,r,a))}),qo=function(n){return on(n,o(ve,2,0))},st=$(function(n,e){var r=e.a,a=e.b;switch(n){case 0:return y(r,a+1);case 1:return y(r,a-1);case 2:return y(r-1,a);default:return y(r+1,a)}}),i$=function(n){return n?0:1},Ta=function(n){var e=n.a,r=n.b;switch(e){case 0:return o(ve,e,r);case 1:return o(ve,2,r);default:return o(ve,1,i$(r))}},Ma=function(n){var e=n.a,r=n.b;switch(e){case 0:return o(ve,2,i$(r));case 1:return o(ve,e,r);default:return o(ve,0,r)}},L1=function(n){switch(n){case 0:return o(nn,Ta,o(nn,Ta,Ta));case 1:return Ta;case 2:return o(nn,Ma,o(nn,Ma,Ma));default:return Ma}},c$=$(function(n,e){var r=e.a,a=e.b;return o(ca,o(st,n,r),o(L1,n,a))}),k1=$(function(n,e){var r=o(c$,n,e.dL),a=r.a,t=e.dL,i=t.b,c=e.bT.bn;if(c.b){var l=c.a,u=c.b;return on(l,a)?vo(W(e,{dL:r,bT:o(pe,l,u)})):qo(i)?j1:o(qa,a,e.bT)?P1:vo(W(e,{dL:r,bT:o(pe,a,o(k,e.bT.fu,o(k,l,u)))}))}else return vo(W(e,{dL:r,bT:o(pe,a,p([e.bT.fu]))}))}),z1=V(function(n,e,r,a){var t=o(k1,n,Tn(a.a));switch(t.$){case 0:return a;case 1:return a;default:var i=t.a;return mn(Oa,r,e,n,!1,i,a)}}),T1=function(n){return{$:2,a:n}},Qc=Sn(function(n,e,r,a,t){var i=t.c4;return i.$?t:W(t,{c4:T1({bp:a,b6:r,aj:n.V,df:e})})}),M1=function(n){return{$:3,a:n}},D1=function(n){return{$:1,a:n}},Kc=function(n){return{$:2,a:n}},Er=function(n){return{$:0,a:n}},dt=function(n){var e=n.bn;return 1+oe(e)},l$=$(function(n,e){var r=o(c$,n,e.cU),a=r.a,t=r.b,i=e.ej.bn;if(i.b){var c=i.a,l=i.b;if(on(c,a))return D1(W(e,{cU:r,ej:o(pe,c,l)}));if(o(qa,a,e.bT)){if(o(qa,a,e.ej))return Er(3);var u=W(e,{cU:r,ej:o(pe,a,o(k,e.ej.fu,o(k,c,l)))});return on(a,e.bT.fu)?on(dt(u.ej),dt(u.bT))&&qo(t)?M1(u):Er(0):qo(t)?Er(1):Kc(u)}else return Er(2)}else return o(qa,a,e.bT)?Kc(W(e,{cU:r,ej:o(pe,a,p([e.ej.fu]))})):Er(2)}),F1=V(function(n,e,r,a){var t=o(l$,n,Tn(a.a));switch(t.$){case 0:switch(t.a){case 3:return t.a,a;case 2:return t.a,a;case 1:return t.a,C(Qc,r,1,e,n,a);default:return t.a,C(Qc,r,0,e,n,a)}case 2:var i=t.a;return mn(Oa,r,e,n,!1,i,a);case 1:var i=t.a;return mn(Oa,r,e,n,!1,i,a);default:var i=t.a;return mn(Oa,r,e,n,!0,i,a)}}),nl=function(n){var e=n.a;return e},B1=function(n){var e=p([n.dc,n.ci,n.dI,n.et]);n:for(;;)if(e.b)if(e.a)if(e.b.b&&!e.b.a&&e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var r=e.b,a=r.b;return a.b,U(0)}else break n;else if(e.b.b)if(e.b.a)if(e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var t=e.b,i=t.b;return i.b,U(1)}else break n;else if(e.b.b.b)if(e.b.b.a)if(e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var c=e.b,l=c.b;return l.b,U(2)}else break n;else if(e.b.b.b.b&&e.b.b.b.a&&!e.b.b.b.b.b){var u=e.b,v=u.b;return v.b,U(3)}else break n;else break n;else break n;else break n;return q},ba=function(n){return{$:2,a:n}},V1=jt(ba(3)),E1=jt(ba(0)),R1=jt(ba(1)),W1=jt(ba(2)),N1=function(n){return W1(n)?U(0):V1(n)?U(1):E1(n)?U(2):R1(n)?U(3):q},H1=$(function(n,e){var r=y(N1(e.bt),B1(n.dH));if(r.a.$){if(r.b.$)return q;var t=r.b.a;return U(t)}else{var a=r.a.a;return U(a)}}),G1={$:3},U1=$(function(n,e){return o(Ln,function(r){if(r.$)return 0;var a=r.b;return a},o(pa,n,e.aA))}),I1=$(function(n,e){return o(pn,0,Tr(o(ga,U1(n),e)))}),O1=$(function(n,e){return o(I1,n,e.eZ)}),bn=O1,q1=$(function(n,e){var r=e;return W(r,{n})}),J1=$(function(n,e){var r=e.c4;switch(r.$){case 1:var i=r.a.aj,a=r.a.cF,t=r.a.eJ;return Y(n.V-i,o(bn,"duration of step animation",n))>0?W(e,{a:o(q1,a,e.a),c4:t?G1:ft}):e;case 2:var i=r.a.aj;return Y(n.V-i,o(bn,"duration of mistake animation",n))>0?W(e,{c4:ft}):e;default:return e}}),Pr=function(n){var e=n.fu,r=n.bn;return o(k,e,r)},el=function(n){if(n.b){var e=n.a,r=n.b;return U(m(_e,On,e,r))}else return q},wr=$(function(n,e){return Y(n,e)<0?n:e}),rl=function(n){if(n.b){var e=n.a,r=n.b;return U(m(_e,wr,e,r))}else return q},Z1=function(n){var e=Pr(n.bT),r={d5:o(pn,0,el(o(X,o(nn,Ro,Gr),e))),d6:o(pn,0,el(o(X,o(nn,Hc,Gr),e))),d8:o(pn,0,rl(o(X,o(nn,Ro,Gr),e))),d9:o(pn,0,rl(o(X,o(nn,Hc,Gr),e)))},a=r.d8,t=r.d5,i=r.d9,c=r.d6;return{gf:.5*(a+t),gj:.5*(i+c)}},ie=function(n){return n},hr=function(n){return ie(ee*(n/180))},Ri=function(n){return n},Hn=function(n){return n},mt=function(n){var e=n;return-e},Y1=$(function(n,e){var r=n,a=e;return{gf:r.gj*a.dj-r.dj*a.gj,gj:r.dj*a.gf-r.gf*a.dj,dj:r.gf*a.gj-r.gj*a.gf}}),u$=function(n){var e=n;return e.dh},$$=function(n){var e=n;return e.di},X1=function(n){return o(Y1,u$(n),$$(n))},ur=function(n){var e=n;return e.cK},or=Qv,ir=Kv,Ja=w(function(n,e,r){var a=n,t=e,i=r,c=.5*t,l=or(c),u=ir(c),v=a.e3,f=v,s=f.gf*u,g=l*s,d=s*s,h=f.gj*u,b=l*h,_=s*h,S=h*h,A=1-2*(d+S),P=f.dj*u,D=l*P,I=2*(_-D),H=2*(_+D),N=s*P,G=2*(N+b),O=2*(N-b),E=h*P,en=2*(E-g),tn=2*(E+g),gn=P*P,An=1-2*(S+gn),sn=1-2*(d+gn);return{gf:An*i.gf+I*i.gj+G*i.dj,gj:H*i.gf+sn*i.gj+en*i.dj,dj:O*i.gf+tn*i.gj+A*i.dj}}),ha=w(function(n,e,r){var a=n,t=e,i=r,c=.5*t,l=or(c),u=ir(c),v=a.cK,f=v,s=i.gf-f.gf,g=i.gj-f.gj,d=i.dj-f.dj,h=a.e3,b=h,_=b.gf*u,S=l*_,A=_*_,P=b.gj*u,D=l*P,I=_*P,H=P*P,N=1-2*(A+H),G=b.dj*u,O=l*G,E=2*(I-O),en=2*(I+O),tn=_*G,gn=2*(tn+D),An=2*(tn-D),sn=P*G,Cn=2*(sn-S),Gn=2*(sn+S),En=G*G,ze=1-2*(H+En),Te=1-2*(A+En);return{gf:f.gf+ze*s+E*g+gn*d,gj:f.gj+en*s+Te*g+Cn*d,dj:f.dj+An*s+Gn*g+N*d}}),je=function(n){return n},Ze=function(n){var e=n;return e.dh},Ye=function(n){var e=n;return e.di},Xe=function(n){var e=n;return e.dk},v$=w(function(n,e,r){return je({cK:m(ha,n,e,ur(r)),dh:m(Ja,n,e,Ze(r)),di:m(Ja,n,e,Ye(r)),dk:m(Ja,n,e,Xe(r))})}),al=w(function(n,e,r){return m(v$,n(r),e,r)}),Nt=function(n){var e=n;return e.e3},Mr=$(function(n,e){var r=n,a=e;return{gf:a.gf+r.gf,gj:a.gj+r.gj,dj:a.dj+r.dj}}),f$=$(function(n,e){return je({cK:o(Mr,n,ur(e)),dh:Ze(e),di:Ye(e),dk:Xe(e)})}),Q1=$(function(n,e){var r=n,a=e;return{gf:r*a.gf,gj:r*a.gj,dj:r*a.dj}}),K1=w(function(n,e,r){return o(f$,o(Q1,e,n),r)}),np=w(function(n,e,r){return m(K1,Nt(n(r)),e,r)}),Jn=$(function(n,e){return{e3:e,cK:n}}),ep=function(n){var e=n;return o(Jn,e.cK,e.dh)},rp=function(n){var e=n;return o(Jn,e.cK,e.di)},ap=function(n){var e=n;return o(Jn,e.cK,e.dk)},tp=function(n){var e=je({cK:n.aW,dh:$$(n.dy),di:X1(n.dy),dk:u$(n.dy)}),r=m(np,ap,n.ch,m(al,ep,mt(n.bM),m(al,rp,n.bH,e)));return r},op=function(n){return{$:0,a:n}},vn=function(n){var e=n;return Q(e)},Za=function(n){var e=n;return .5*e},ip=nf,cp=function(n){var e=n;return ip(e)},lp=function(n){var e=Za(vn(n.eF)),r=cp(e);return{cX:op(r),de:n.de}},Bn={gf:0,gj:0,dj:0},s$=Nn,ge=function(n){return n},d$=ge({gf:1,gj:0,dj:0}),Ht=d$,Wi=ge({gf:0,gj:0,dj:1}),Gt=Wi,up=s$({cK:Bn,dh:Gt,di:Ht}),$p=function(n){var e=n.aW,r=n.bH,a=n.bM,t=n.ch;return lp({eF:hr(40),de:tp({bH:ie(r),ch:Hn(t),bM:ie(a),aW:Ri(e),dy:up})})},m$=$(function(n,e){return $p({bH:o(bn,"camera azimuth",n),ch:o(bn,"camera distance",n),bM:o(bn,"camera elevation",n),aW:function(){var r=Z1(Tn(e.a));return{gf:r.gf,gj:r.gj,dj:0}}()})}),vp=w(function(n,e,r){return{gf:n,gj:e,dj:r}}),Da=function(n){return n},Ya=function(n){var e=n;return e},fp=$(function(n,e){var r=n,a=e;return a.gf*r.gf+a.gj*r.gj+a.dj*r.dj}),an=$(function(n,e){var r=e;return n*r}),Ni=function(n){var e=n;return e.cK},sp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.fE,l=c;return(a.gf-i.gf)*l.gf+(a.gj-i.gj)*l.gj+(a.dj-i.dj)*l.dj}),dp=w(function(n,e,r){var a=n,t=e,i=r;return{gf:i.gf+t*a.gf,gj:i.gj+t*a.gj,dj:i.dj+t*a.dj}}),mp=$(function(n,e){var r=Nt(e),a=n,t=a.fE,i=o(fp,t,r);if(i){var c=Ni(e),l=o(sp,n,c),u=o(an,-1/i,l);return U(m(dp,r,u,c))}else return q}),pp=$(function(n,e){return{gf:n,gj:e}}),tl=$(function(n,e){var r=n,a=e;return r*a}),gp=function(n){var e=n;return e},ol=function(n){var e=n;return gp(e.eP)},bp=function(n){var e=n;return e.aP},Fe=cf,hp=function(n){var e=n,r=o(On,Q(e.gf),o(On,Q(e.gj),Q(e.dj)));if(r){var a=e.dj/r,t=e.gj/r,i=e.gf/r,c=Fe(i*i+t*t+a*a);return U({gf:i/c,gj:t/c,dj:a/c})}else return q},p$=$(function(n,e){var r=e;return r/n}),Jo=function(n){var e=n;return ur(e)},Hi=ge({gf:0,gj:0,dj:-1}),Ap=$(function(n,e){var r=n,a=e;return a/r}),_p=$(function(n,e){var r=n,a=e,t=r.dk,i=t,c=r.di,l=c,u=r.dh,v=u;return{gf:v.gf*a.gf+l.gf*a.gj+i.gf*a.dj,gj:v.gj*a.gf+l.gj*a.gj+i.gj*a.dj,dj:v.dj*a.gf+l.dj*a.gj+i.dj*a.dj}}),Ve=function(n){var e=n;return{gf:-e.gf,gj:-e.gj,dj:-e.dj}},Zo=function(n){var e=n;return Ve(Xe(e))},wp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.dh,l=c;return(a.gf-i.gf)*l.gf+(a.gj-i.gj)*l.gj}),Gi=w(function(n,e,r){var a=n,t=e,i=r;return{gf:a,gj:t,dj:i}}),yp=V(function(n,e,r,a){var t=n,i=e,c=r,l=a,u=t.cK,v=u,f=t.dk,s=f,g=t.di,d=g,h=t.dh,b=h;return{gf:v.gf+i*b.gf+c*d.gf+l*s.gf,gj:v.gj+i*b.gj+c*d.gj+l*s.gj,dj:v.dj+i*b.dj+c*d.dj+l*s.dj}}),xp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.di,l=c;return(a.gf-i.gf)*l.gf+(a.gj-i.gj)*l.gj}),Se=0,Sp=w(function(n,e,r){var a=n,t=o(xp,ol(e),r),i=o(wp,ol(e),r),c=a.de,l=c,u=bp(e);u.a;var v=u.b,f=a.cX;if(f.$){var h=f.a,b=o(Ap,v,h),_=j(yp,l,o(tl,b,i),o(tl,b,t),Se);return o(Jn,_,Zo(a.de))}else{var s=f.a,g=mt(o(p$,s,o(an,.5,v))),d=o(_p,l,o(pn,Hi,hp(m(Gi,i,t,g))));return o(Jn,Jo(a.de),d)}}),Yo=function(n){var e=n;return{gf:or(e),gj:ir(e)}},Cp=function(n){var e=n;return{gf:-e.gj,gj:e.gf}},Pp=function(n){return n},jp=$(function(n,e){return Pp({cK:e,dh:n,di:Cp(n)})}),Lp=$(function(n,e){return o(jp,Yo(n),e)}),kp=w(function(n,e,r){var a=n.a,t=n.b;return{eP:o(Lp,e,r),aP:y(vn(a),vn(t))}}),Ee=function(n){var e=n;return e.gf},zp=$(function(n,e){var r=n,a=e;return{gf:r,gj:a}}),Re=function(n){var e=n;return e.gj},We=function(n){var e=n;return e.dj},Tp=V(function(n,e,r,a){var t=r.gf,i=r.gj,c=function(v){return m(vp,Ya(Ee(v)),Ya(Re(v)),Ya(We(v)))},l=m(kp,y(Da(e.gd),Da(e.fk)),hr(0),o(pp,0,0)),u=o(zp,Da(t),Da(i));return o(Ln,c,o(mp,a,m(Sp,n,l,u)))}),Mp=$(function(n,e){return{fE:n,cK:e}}),Dp=$(function(n,e){var r=e;return o(Mp,r.fE,o(Mr,n,r.cK))}),Fp=$(function(n,e){return{fE:e,cK:n}}),Bp=o(Fp,Bn,Gt),Vp=V(function(n,e,r,a){return j(Tp,e,r,a,o(Dp,m(Gi,Hn(0),Hn(0),Hn(n)),Bp))}),Ep=Vp(0),Rp=$(function(n,e){return W(e,{a9:o(pn,e.a9,o(Ln,function(r){var a=r.gf,t=r.gj;return y(qn(a),qn(t))},m(Ep,o(m$,n,e),n.bq,n.cV)))})}),Wp=function(n){return n.$===2?Wt:n},Np=$(function(n,e){return n.cV.dE?e:Wt}),Hp=$(function(n,e){return Fe(o(He,n.gf-e.gf,2)+o(He,n.gj-e.gj,2))}),Gp=w(function(n,e,r){var a=y(e,r),t=a.a,i=a.b;return Y(o(Hp,t,i),n)<0?q:Y(i.gf-t.gf,Q(i.gj-t.gj))>0?U(1):Y(t.gf-i.gf,Q(i.gj-t.gj))>0?U(0):Y(i.gj-t.gj,Q(i.gf-t.gf))>0?U(2):U(3)}),g$=function(n){return{gf:n.cV.gf,gj:n.cV.gj}},Up=w(function(n,e,r){var a=e.f3,t=y(r,n.cV.dE);if(t.a.$===1&&t.b){var i=t.a.a,c=m(Gp,a,i,g$(n));if(c.$)return r;var l=c.a;return ba(l)}else return r}),Ip=function(n){return{$:1,a:n}},Op=$(function(n,e){return e.$===1?e:n.cV.dE?Ip(g$(n)):Wt}),qp=w(function(n,e,r){return m(Up,n,e,o(Np,n,o(Op,n,Wp(r))))}),Jp=$(function(n,e){return W(e,{bt:m(qp,n,{f3:20},e.bt)})}),Zp=$(function(n,e){var r=Tn(e.a).cU,a=Tn(e.a).dL,t=function(){var i=o(H1,n,e);if(i.$===1)return Nn;var c=i.a;return e.o.ck?m(z1,c,nl(a),n):m(F1,c,nl(r),n)}();return o(J1,n,t(o(Rp,n,o(Jp,n,e))))}),Yp=$(function(n,e){var r=e;return W(r,{l:o(k,r.n,r.l),n})}),Xp=$(function(n,e){return e.b?m(we,k,e,n):n}),ae=function(n){return m(we,Xp,x,n)},Aa=$(function(n,e){return ae(o(X,n,e))}),Dr=$(function(n,e){return m(we,$(function(r,a){return n(r)?o(k,r,a):a}),x,e)}),b$=w(function(n,e,r){n:for(;;){if(r.$===-2)return e;var a=r.b,t=r.c,i=r.d,c=r.e,l=n,u=m(n,a,t,m(b$,n,e,i)),v=c;n=l,e=u,r=v;continue n}}),Qp=$(function(n,e){return m(b$,w(function(r,a,t){return o(Wu,r,t)}),n,e)}),Kp=$(function(n,e){var r=n,a=e;return o(Qp,r,a)}),h$=Ei,A$=$(function(n,e){var r=e;return m(Ar,n,0,r)}),il=function(n){return m(_e,A$,h$,n)},ng=$(function(n,e){var r=o(pa,n,e);return!r.$}),_$=$(function(n,e){var r=e;return o(ng,n,r)}),eg=$(function(n,e){return o(Dr,function(r){return o(_$,r,n)},o(X,function(r){return o(st,r,e)},p([0,1,2,3])))}),rg=$(function(n,e){var r=$(function(a,t){n:for(;;)if(t.b){var i=t.a,c=t.b,l=o(Dr,function(f){return!(o(o$,f,t)||o(_$,f,a))},o(eg,e,i)),u=o(A$,i,a),v=un(c,l);a=u,t=v;continue n}else return a});return o(r,h$,p([n]))}),w$=$(function(n,e){n:for(;;){if(e.$===-2)return n;var r=e.d,a=e.e,t=o(w$,n+1,a),i=r;n=t,e=i;continue n}}),ag=function(n){return o(w$,0,n)},cl=function(n){var e=n;return ag(e)},tg=function(n){var e=cl(n);return o(pn,!1,o(Ln,function(r){return Y(cl(o(rg,r,n)),e)<0},Tr(Wd(n))))},og=function(n){return tg(o(Kp,il(Pr(n.bT)),il(Pr(n.ej))))},ig=function(n){var e=n.fu,r=n.bn;return o(pn,e,Tr(zn(r)))},Ui=function(n){var e=ig(n.bT);return W(n,{cU:o(ca,e,o(ve,2,0)),ej:o(pe,e,x)})},cg=function(n){var e=$(function(r,a){n:for(;;){if(Bi(a))return r;var t=un(r,a),i=o(Aa,function(c){return og(c)?x:o(ga,function(l){var u=o(l$,l,c);switch(u.$){case 0:return q;case 1:return q;case 2:var v=u.a;return U(v);default:var v=u.a;return U(v)}},p([0,1,2,3]))},a);r=t,a=i;continue n}});return o(Dr,function(r){return on(dt(r),dt(n.bT))},o(X,function(r){return r.ej},o(e,x,p([Ui(n)]))))},pt=$(function(n,e){return m(_e,qf(n),Uf(),e)}),Fr=function(n){return m(_e,$(function(e,r){var a=e.a,t=e.b;return m(Of,a,t,r)}),If(),n)},lg=$(function(n,e){var r=e;return Fr(p([y("before",o(pt,n,r.l)),y("current",n(r.n)),y("after",o(pt,n,r.q))]))}),ll=$i,Xo=function(n){var e=n.a,r=n.b;return Fr(p([y("A1",ll(e)),y("A2",ll(r))]))},ug=function(n){return Ti(function(){switch(n){case 0:return"X";case 1:return"Y";default:return"Z"}}())},$g=function(n){return Ti(function(){return n?"Negative":"Positive"}())},vg=function(n){var e=n.a,r=n.b;return Fr(p([y("A1",ug(e)),y("A2",$g(r))]))},ul=function(n){var e=n.a,r=n.b;return Fr(p([y("A1",Xo(e)),y("A2",vg(r))]))},fo=function(n){return Fr(p([y("last",Xo(n.fu)),y("rest",o(pt,Xo,n.bn))]))},fg=function(n){return Fr(p([y("playerCube",ul(n.cU)),y("playerPath",fo(n.ej)),y("levelEditingCube",ul(n.dL)),y("levelEditingPath",fo(n.bT)),y("calculatedSolutions",o(pt,fo,n.dn))]))},sg=$(function(n,e){return W(e,{cl:o(fu,2,o(lg,o(nn,Ui,fg),n))})}),dg=function(n){var e=n;return un(zn(e.l),un(p([e.n]),e.q))},mg=$(function(n,e){var r=e,a=dg(r),t=o(ta,oe(a)+1,n),i=o(ki,t-1,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:zn(o(Lu,t-1,a)),n:c}}else return r}),pg=function(n){var e=n,r=e.q;if(r.b){var a=r.a,t=r.b;return U({q:t,l:o(k,e.n,e.l),n:a})}else return q},gg=function(n){var e=n,r=e.l;if(r.b){var a=r.a,t=r.b;return U({q:o(k,e.n,e.q),l:t,n:a})}else return q},bg=$(function(n,e){var r=e;return{q:o(X,n,r.q),l:o(X,n,r.l),n:n(r.n)}}),hg=$(function(n,e){var r=e;return W(r,{n:n(r.n)})}),Ag=function(n){var e=n,r=e.q;if(r.b){var a=r.a,t=r.b;return W(e,{q:t,l:o(k,a,e.l)})}else return W(e,{q:zn(e.l),l:x})},_g=function(n){var e=n,r=e.l;if(r.b){var a=r.a,t=r.b;return W(e,{l:t,n:a})}else{var i=e.q;if(i.b){var a=i.a,t=i.b;return W(e,{q:t,n:a})}else return e}},wg=$(function(n,e){return W(e,{cm:n})}),yg=$(function(n,e){return W(e,{ck:n,c4:0})}),xg=w(function(n,e,r){var a=r.o;switch(e.$){case 0:var t=e.a;return W(r,{o:o(yg,t,r.o),a:o(bg,Ui,r.a),c4:ft});case 1:return W(r,{a:o(hg,function(u){return W(u,{dn:cg(Tn(r.a))})},r.a)});case 2:var i=e.a;return W(r,{o:W(a,{ee:U(i)})});case 3:return W(r,{o:W(a,{ee:q})});case 4:var c=e.a;return W(r,{a:o(mg,c,r.a)});case 5:return W(r,{a:o(pn,r.a,gg(r.a))});case 6:return W(r,{a:o(pn,r.a,pg(r.a))});case 7:return W(r,{a:o(Yp,t$,r.a)});case 8:return W(r,{a:_g(r.a)});case 9:return W(r,{a:Ag(r.a)});case 10:return W(r,{o:o(sg,r.a,r.o)});case 11:return W(r,{a:o(Fi,r.a,o(Ku,a$(r$),r.o.cm))});default:var l=e.a;return W(r,{o:o(wg,l,r.o)})}}),Fa=ce("br"),Ur=ce("span"),Sg=$(function(n,e){return o(F,p([o(ln,"position","fixed"),o(ln,"width","100%"),o(ln,"text-align","center"),o(ln,"font-size","14px")]),p([o(F,p([B("text-lg font-bold")]),p([K("The Red-Faced Cube")])),o(ne,p([B("font-bold italic")]),p([o(ne,x,p([K("A puzzle from the book Mathematical Carnival")])),o(ne,x,p([K("(1975, Martin Gardner)")]))])),o(ne,p([B("text-xs")]),p([o(Ur,function(){var r=e.c4;if(r.$===2){r.a.aj;var a=r.a.df;return a?x:p([o(ln,"background-color","red")])}else return x}(),p([K(" Visit each cell exactly once.")])),o(Fa,x,x),o(Ur,x,p([K("End with the cube red side up on the (marked) finish cell.")])),o(Fa,x,x),o(Ur,function(){var r=e.c4;if(r.$===2){r.a.aj;var a=r.a.df;return a===1?p([o(ln,"background-color","red")]):x}else return x}(),p([K("At no time during the tour, however,"),o(Fa,x,x),K("is the cube allowed to rest with the red side up.")])),o(Fa,x,x),o(Ur,x,p([K("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Ii=function(n){return n},Oi=w(function(n,e,r){return Y(r,n)<0?n:Y(r,e)>0?e:r}),Cg=function(n){var e=n;return e},Pg=function(n){var e=m(Oi,1667,25e3,Cg(n)),r=e<=4e3?-.2661239*1e9/(e*e*e)-.2343589*1e6/(e*e)+.8776956*1e3/e+.17991:-3.0258469*1e9/(e*e*e)+2.1070379*1e6/(e*e)+.2226347*1e3/e+.24039,a=e<=2222?-1.1063814*(r*r*r)-1.3481102*(r*r)+2.18555832*r-.20219683:e<=4e3?-.9549476*(r*r*r)-1.37418593*(r*r)+2.09137015*r-.16748867:3.081758*(r*r*r)-5.8733867*(r*r)+3.75112997*r-.37001483;return Ii({gf:r,gj:a})},jg=function(n){return n},Lg=function(n){return{$:0,a:n}},kg=Lg,zg={$:3},Tg=zg,Mg=V(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),Dg=Mg,Fg=function(n){return{$:1,a:n}},Bg=Fg,Vg=function(n){return o(lr,"height",xn(n))},Eg=function(n){return fs(ps(n))},Rg=Eg,Wg=function(n){return{$:2,a:n}},Ng=Wg,Hg=function(n){var e=n.a,r=n.b,a=n.c,t=n.d,i=function(l){return qn(l*1e3)/1e3},c=function(l){return qn(l*1e4)/100};return Vi(p(["rgba(",yn(c(e)),"%,",yn(c(r)),"%,",yn(c(a)),"%,",yn(i(t)),")"]))},Gg=$(function(n,e){switch(e.$){case 0:return o(sd,n,e);case 1:return o(dd,n,e);case 2:return o(md,n,e);case 3:return o(pd,n,e);case 4:return o(gd,n,e);default:return o(bd,n,e)}}),Ug=$(function(n,e){switch(e.$){case 0:return o(Gs,n,e);case 1:return o(Us,n,e);case 2:return o(Is,n,e);case 3:return o(Os,n,e);case 4:return o(qs,n,e);case 5:return o(Js,n,e);case 6:return o(Zs,n,e);case 7:return o(Ys,n,e);default:return Xs(n)}}),Ig=w(function(n,e,r){return m(fd,n,e,r)}),$l=function(n){var e=n;return e},Br=Ld,so=j(Br,1,1,1,1),fe=w(function(n,e,r){return o(X,function(a){return o(a,e,r)},n)}),Og=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),qg=$(function(n,e){var r=n,a=e.gf,t=e.gj;return m(Og,r*a/t,r,r*(1-a-t)/t)}),_a=yd,Jg=function(n){var e=n.a,r=n.b,a=n.c;return m(_a,3.2406*e-1.5372*r-.4986*a,-.9689*e+1.8758*r+.0415*a,.0557*e-.204*r+1.057*a)},Ut=$(function(n,e){return Jg(o(qg,n,e))}),y$=$(function(n,e){return{dF:on(n.dF,e.dF),u:n.u*e.u+n.v*e.x+n.w*e.A,v:n.u*e.v+n.v*e.y+n.w*e.B,w:n.u*e.w+n.v*e.z+n.w*e.C,x:n.x*e.u+n.y*e.x+n.z*e.A,y:n.x*e.v+n.y*e.y+n.z*e.B,z:n.x*e.w+n.y*e.z+n.z*e.C,A:n.A*e.u+n.B*e.x+n.C*e.A,B:n.A*e.v+n.B*e.y+n.C*e.B,C:n.A*e.w+n.B*e.z+n.C*e.C,K:e.K+(n.K*e.u+n.L*e.x+n.M*e.A)*e.b4,L:e.L+(n.K*e.v+n.L*e.y+n.M*e.B)*e.b4,M:e.M+(n.K*e.w+n.L*e.z+n.M*e.C)*e.b4,b4:n.b4*e.b4}}),se=Fd,Zg=function(n){return se({dQ:n.u,dR:n.x,dS:n.A,dT:n.K,dU:n.v,dV:n.y,dW:n.B,dX:n.L,dY:n.w,dZ:n.z,d_:n.C,d$:n.M,d0:0,d1:0,d2:0,d3:1})},mo=Sn(function(n,e,r,a,t){var i=a.dF?1:-1,c=j(Br,a.b4,a.b4,a.b4,i);return mn(t,n,c,Zg(a),a.dF,e,r)}),x$=Zn(function(n,e,r,a,t,i){n:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=n,v=e,f=r,s=o(y$,c,a),g=l,d=i;n=u,e=v,r=f,a=s,t=g,i=d;continue n;case 1:var h=t.b,b=o(k,C(mo,n,e,r,a,h),i.P);return{P:b,Y:i.Y,fU:i.fU};case 3:var _=t.b,S=o(k,C(mo,n,e,r,a,_),i.Y);return{P:i.P,Y:S,fU:i.fU};case 2:var A=t.a,P=o(k,C(mo,n,e,r,a,A),i.fU);return{P:i.P,Y:i.Y,fU:P};default:var D=t.a;return m(_e,j(x$,n,e,r,a),i,D)}}),Yg=V(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),S$=Yg,qi=V(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),Xg=function(n){var e=n.ac,r=n._,a=n.Z;return j(qi,518,e,r,a)},Qg=$(function(n,e){return{$:6,a:n,b:e}}),Kg=Qg,C$=p([Xg({Z:1,_:0,ac:!1}),j(S$,!1,!1,!1,!1),o(Kg,0,1)]),jr=519,Ji=8,P$=15,yr=7681,n3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},$n=Hs,e3=$(function(n,e){return{$:0,a:n,b:e}}),r3=e3({ds:1,dB:0,ec:5}),Un=_d,a3=r3(p([{em:o(Un,-1,-1)},{em:o(Un,1,-1)},{em:o(Un,-1,1)},{em:o(Un,1,1)}])),t3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"em"},uniforms:{}},o3=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:n,b:e,c:r,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Zi=w(function(n,e,r){var a=n.cZ,t=n.cx,i=n.dg,c=$(function(v,f){var s=v;return f(s)}),l=$(function(v,f){var s=v;return f(s)}),u=function(v){return o(nn,c(v.bv),o(nn,l(v.be),o(nn,l(v.bD),l(v.bE))))};return o(u,r,o(u,e,m(o3,a,t,i)))}),Yi=function(n){return m(Zi,{cx:n.cx,cZ:n.cZ,dg:n.dg},{be:n.be,bv:n.bv,bD:n.bD,bE:n.bE},{be:n.be,bv:n.bv,bD:n.bD,bE:n.bE})},Xi=function(n){return C($n,p([Yi(n),j(S$,!1,!1,!1,!1)]),t3,n3,a3,{})},i3=Xi({be:yr,cx:0,cZ:Ji,bv:jr,dg:P$,bD:yr,bE:yr}),c3=516,vl=5386,Vn=7680,l3=function(n){return o(He,2,n+4)},j$=function(n){return Xi({be:Vn,cx:P$,cZ:Ji,bv:c3,dg:l3(n),bD:vl,bE:vl})},u3=w(function(n,e,r){return ae(p([m(fe,n,r,C$),p([j$(e),i3])]))}),$3=$(function(n,e){return ae(o(Pt,u3(n),e))}),v3=function(n){var e=n.ac,r=n._,a=n.Z;return j(qi,513,e,r,a)},f3=v3({Z:1,_:0,ac:!0}),s3=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:n,b:e,c:r,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},d3=function(n){var e=n.b2,r=n.bO,a=n.bI,t=n.bF,i=n.bK,c=n.aM,l=$(function(u,v){var f=u.a,s=u.b,g=u.c,d=v.a,h=v.b,b=v.c;return s3(f)(s)(g)(d)(h)(b)(e)(r)(a)(t)});return o(l,i,c)},m3=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),fl=$(function(n,e){var r=n,a=e;return m(m3,32774,r,a)}),p3=1,sl=771,g3=770,Qi=d3({bF:0,aM:o(fl,p3,sl),bI:0,bK:o(fl,g3,sl),bO:0,b2:0}),dr=p([f3,Qi]),b3=function(n){var e=n;return e.d5},h3=function(n){var e=n;return e.d6},L$=function(n){var e=n;return e.d7},A3=function(n){var e=n;return e.d8},_3=function(n){var e=n;return e.d9},k$=function(n){var e=n;return e.ea},Pe=$(function(n,e){var r=n,a=e;return a-r}),z$=function(n){return T(o(Pe,A3(n),b3(n)),o(Pe,_3(n),h3(n)),o(Pe,k$(n),L$(n)))},w3=function(n){return n},y3=function(n){return je({cK:w3({gf:n.K,gj:n.L,dj:n.M}),dh:ge({gf:n.u,gj:n.v,dj:n.w}),di:ge({gf:n.x,gj:n.y,dj:n.z}),dk:ge({gf:n.A,gj:n.B,dj:n.C})})},po=$(function(n,e){var r=n,a=e,t=r.dk,i=t,c=r.di,l=c,u=r.dh,v=u;return{gf:a.gf*v.gf+a.gj*v.gj+a.dj*v.dj,gj:a.gf*l.gf+a.gj*l.gj+a.dj*l.dj,dj:a.gf*i.gf+a.gj*i.gj+a.dj*i.dj}}),T$=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=a.gf-i.gf,l=a.gj-i.gj,u=a.dj-i.dj,v=r.dk,f=v,s=r.di,g=s,d=r.dh,h=d;return{gf:c*h.gf+l*h.gj+u*h.dj,gj:c*g.gf+l*g.gj+u*g.dj,dj:c*f.gf+l*f.gj+u*f.dj}}),M$=$(function(n,e){return{cK:o(T$,n,ur(e)),dh:o(po,n,Ze(e)),di:o(po,n,Ye(e)),dk:o(po,n,Xe(e))}}),la=w(function(n,e,r){return{gf:n,gj:e,dj:r}}),gt=function(n){var e=n;return e},hn=$(function(n,e){var r=n,a=e;return o(On,r,a)}),wn=$(function(n,e){var r=n,a=e;return o(wr,r,a)}),x3=$(function(n,e){var r=gt(e),a=gt(n);return{d5:o(hn,a.d5,r.d5),d6:o(hn,a.d6,r.d6),d7:o(hn,a.d7,r.d7),d8:o(wn,a.d8,r.d8),d9:o(wn,a.d9,r.d9),ea:o(wn,a.ea,r.ea)}}),te=function(n){var e=n;return e},S3=function(n){var e=n;return T(e.gf,e.gj,e.dj)},Xr=$(function(n,e){var r=n,a=e;return a+r}),C3=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=Za(vn(a)),c=Za(vn(r)),l=Za(vn(t)),u=S3(e),v=u.a,f=u.b,s=u.c;return{d5:o(Xr,c,v),d6:o(Xr,i,f),d7:o(Xr,l,s),d8:o(Pe,c,v),d9:o(Pe,i,f),ea:o(Pe,l,s)}}),dl=V(function(n,e,r,a){var t=r.eW,i=2*r.fi*e,c=2*r.fh*e,l=2*r.fg*e,u=t.dj*e,v=t.gj*e,f=t.gf*e,s=te(Xe(n)),g=Q(l*s.gf)+Q(c*s.gj)+Q(i*s.dj),d=te(Ye(n)),h=Q(l*d.gf)+Q(c*d.gj)+Q(i*d.dj),b=te(Ze(n)),_=Q(l*b.gf)+Q(c*b.gj)+Q(i*b.dj),S=o(C3,T(_,h,g),o(T$,n,m(la,f,v,u)));if(a.$)return U(S);var A=a.a;return U(o(x3,A,S))}),Qo=V(function(n,e,r,a){n:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var d=n,h=e,b=r,_=i;n=d,e=h,r=b,a=_;continue n;case 1:var c=t.a,l=j(dl,n,e,c,r),d=n,h=e,b=l,_=i;n=d,e=h,r=b,a=_;continue n;case 2:var d=n,h=e,b=r,_=i;n=d,e=h,r=b,a=_;continue n;case 3:var c=t.a,l=j(dl,n,e,c,r),d=n,h=e,b=l,_=i;n=d,e=h,r=b,a=_;continue n;case 4:var u=t.a,d=n,h=e,b=j(Qo,n,e,r,u),_=i;n=d,e=h,r=b,a=_;continue n;default:var v=t.a,f=t.b,s=o(M$,y3(v),n),g=e*v.b4,d=n,h=e,b=j(Qo,s,g,r,p([f])),_=i;n=d,e=h,r=b,a=_;continue n}}else return r}),$r=xd,vr=Sd,fr=Cd,D$=function(n){return{$:4,a:n}},P3=$(function(n,e){n:for(;;)if(n.b){var r=n.a,a=n.b,t=a,i=o(k,r,e);n=t,e=i;continue n}else return e}),wa=function(n){return D$(o(P3,n,x))},j3={dF:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,K:0,L:0,M:0,b4:1},ml=Xi({be:yr,cx:0,cZ:Ji,bv:jr,dg:255,bD:yr,bE:yr}),L3=function(n){var e=n,r=o(On,Q(e.gf),o(On,Q(e.gj),Q(e.dj)));if(r){var a=e.dj/r,t=e.gj/r,i=e.gf/r,c=Fe(i*i+t*t+a*a);return c*r}else return Se},Dn={bI:0,eV:!1,bO:0,cT:0,b2:0,c9:0,gf:0,gj:0,dj:0},Xn=$(function(n,e){var r=n,a=e;return se({dQ:r.gf,dR:r.b2,dS:a.gf,dT:a.b2,dU:r.gj,dV:r.bO,dW:a.gj,dX:a.bO,dY:r.dj,dZ:r.bI,d_:a.dj,d$:a.bI,d0:r.c9,d1:r.cT,d2:a.c9,d3:a.cT})}),Ir=y({bj:o(Xn,Dn,Dn),bU:o(Xn,Dn,Dn),bV:o(Xn,Dn,Dn),bW:o(Xn,Dn,Dn)},j(Br,0,0,0,0)),F$=514,B$=function(n){var e=n.ac,r=n._,a=n.Z;return j(qi,515,e,r,a)},V$=240,k3=p([B$({Z:1,_:0,ac:!0}),Yi({be:Vn,cx:V$,cZ:0,bv:F$,dg:0,bD:Vn,bE:Vn}),Qi]),z3=$(function(n,e){var r=n,a=e.fD,t=e.fd,i=e.eO,c=vn(a),l=c,u=vn(t),v=u,f=r.cX;if(f.$){var g=f.a;return No(v)?se({dQ:2/(i*g),dR:0,dS:0,dT:0,dU:0,dV:2/g,dW:0,dX:0,dY:0,dZ:0,d_:0,d$:-1,d0:0,d1:0,d2:0,d3:1}):se({dQ:2/(i*g),dR:0,dS:0,dT:0,dU:0,dV:2/g,dW:0,dX:0,dY:0,dZ:0,d_:-2/(v-l),d$:-(v+l)/(v-l),d0:0,d1:0,d2:0,d3:1})}else{var s=f.a;return No(v)?se({dQ:1/(i*s),dR:0,dS:0,dT:0,dU:0,dV:1/s,dW:0,dX:0,dY:0,dZ:0,d_:-1,d$:-2*l,d0:0,d1:0,d2:-1,d3:0}):se({dQ:1/(i*s),dR:0,dS:0,dT:0,dU:0,dV:1/s,dW:0,dX:0,dY:0,dZ:0,d_:-(v+l)/(v-l),d$:-2*v*l/(v-l),d0:0,d1:0,d2:-1,d3:0})}}),Ba=$(function(n,e){return(1&n>>e)===1?0:1}),T3=function(n){return p([B$({Z:1,_:0,ac:!0}),Yi({be:Vn,cx:V$,cZ:n,bv:F$,dg:0,bD:Vn,bE:Vn}),Qi])},M3=w(function(n,e,r){return ae(o(X,function(a){var t=a<<4,i=j(Br,o(Ba,a,0),o(Ba,a,1),o(Ba,a,2),o(Ba,a,3));return m(fe,n,y(e,i),T3(t))},o(Sr,1,o(He,2,r)-1)))}),xr=function(n){var e=n;return e},D3=Bd,Ki=ge({gf:0,gj:1,dj:0}),nc=Ki,F3={cK:Bn,dh:Ht,di:nc,dk:Gt},ya=function(n){var e=n;return e},B3=function(n){var e=ya(ur(n)),r=te(Xe(n)),a=te(Ye(n)),t=te(Ze(n));return se({dQ:t.gf,dR:a.gf,dS:r.gf,dT:e.gf,dU:t.gj,dV:a.gj,dW:r.gj,dX:e.gj,dY:t.dj,dZ:a.dj,d_:r.dj,d$:e.dj,d0:0,d1:0,d2:0,d3:1})},V3=$(function(n,e){var r=e;return B3(o(M$,r,n))}),E3=function(n){return o(V3,F3,n)},R3=function(n){var e=n;return e.de},W3=function(n){var e=n;return Ze(e)},N3=function(n){var e=n;return Ye(e)},H3=function(n){var e=R3(n.eT),r=je({cK:Jo(e),dh:W3(e),di:N3(e),dk:Ve(Zo(e))}),a=wa(n.aU),t=a,i=j(Qo,r,1,q,p([t]));if(i.$===1)return x;var c=i.a,l=E3(e),u=o(an,.99,o(hn,vn(n.eY),mt(L$(c)))),v=z$(c),f=v.a,s=v.b,g=v.c,d=L3(m(Gi,f,s,g)),h=o(an,1.01,o(Xr,d,mt(k$(c)))),b=o(z3,n.eT,{eO:n.eO,fd:h,fD:u}),_=D3(b).d3,S=_?te(Ve(Zo(e))):xr(Jo(e)),A=function(){var sn=n.f5;switch(sn.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var Cn=sn.a;return y(3,Cn);case 4:var Cn=sn.a;return y(4,Cn);default:return y(5,0)}}(),P=A.a,D=A.b,I=n.fb,H=I,N=o(Ut,H,n.gc),G=N,O=se({dQ:0,dR:S.gf,dS:$r(G),dT:n.ez,dU:0,dV:S.gj,dW:vr(G),dX:Ya(d),dY:0,dZ:S.dj,d_:fr(G),d$:P,d0:0,d1:_,d2:0,d3:D}),E=mn(x$,O,l,b,j3,t,{P:x,Y:x,fU:x}),en=n.fx;switch(en.$){case 0:var tn=en.a;return ae(p([m(fe,E.P,y(tn,so),dr),m(fe,E.Y,Ir,dr)]));case 1:var tn=en.a;return ae(p([m(fe,E.P,Ir,dr),p([ml]),m(fe,E.fU,tn.bj,C$),p([j$(0)]),m(fe,E.P,y(tn,so),k3),m(fe,E.Y,Ir,dr)]));default:var gn=en.a,An=en.b;return ae(p([m(fe,E.P,y(An,so),dr),p([ml]),o($3,E.fU,gn),m(M3,E.P,An,oe(gn)),m(fe,E.Y,Ir,dr)]))}},G3=function(n){return o(lr,"width",xn(n))},U3=$(function(n,e){var r=p([Bg(1),Ng(0),kg(!0),j(Dg,0,0,0,0)]),a=function(){var P=n.eM;switch(P.$){case 0:return T(r,"0",1);case 1:return T(o(k,Tg,r),"1",1);default:var D=P.a;return T(r,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=n.aP,u=l.a,v=l.b,f=$l(v),s=o(ln,"height",xn(f)+"px"),g=$l(u),d=g/f,h=o(Aa,function(P){return H3({eO:d,eT:n.eT,eY:n.eY,aU:P.aU,fb:P.fb,fx:P.fx,ez:c,f5:P.f5,gc:P.gc})},e),b=o(ln,"width",xn(g)+"px"),_=n.aN,S=_,A=Hg(S);return m(Rg,"div",p([o(ln,"padding","0px"),b,s]),p([y(i,m(Ig,t,p([G3(qn(g*c)),Vg(qn(f*c)),b,s,o(ln,"display","block"),o(ln,"background-color",A)]),h))]))}),I3=function(n){return{$:2,a:n}},O3=function(n){return I3(n)},q3=function(n){return o(U3,{eM:O3(n.cg),aN:n.aN,eT:n.eT,eY:n.eY,aP:n.aP},p([{aU:n.aU,fb:n.fb,fx:n.fx,f5:n.f5,gc:n.gc}]))},pl=function(n){return n},J3=function(n){var e=n;return e},It=function(n){var e=n;return J3(e.eP)},E$=V(function(n,e,r,a){return{$:2,a:n,b:e,c:r,d:a}}),Z3=V(function(n,e,r,a){return{$:3,a:n,b:e,c:r,d:a}}),R$=V(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),W$=V(function(n,e,r,a){return{$:6,a:n,b:e,c:r,d:a}}),Y3=V(function(n,e,r,a){return{$:7,a:n,b:e,c:r,d:a}}),X3=V(function(n,e,r,a){return{$:5,a:n,b:e,c:r,d:a}}),Q3=V(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),ec=function(n){switch(n.$){case 0:return n;case 1:var r=n.a,e=n.b,t=n.c;return j(Q3,r,e,t,1);case 2:var r=n.a,e=n.b,t=n.c;return j(E$,r,e,t,1);case 3:var r=n.a,a=n.b,t=n.c;return j(Z3,r,a,t,1);case 4:var r=n.a,a=n.b,t=n.c;return j(R$,r,a,t,1);case 5:var r=n.a,a=n.b,t=n.c;return j(X3,r,a,t,1);case 6:var r=n.a,a=n.b,t=n.c;return j(W$,r,a,t,1);case 7:var r=n.a,a=n.b,t=n.c;return j(Y3,r,a,t,1);case 8:return n;case 9:return n;default:return n}},rc={$:0},K3=cn(function(n,e,r,a,t,i,c,l){n:for(;;)if(l.b){var u=l.a,v=l.b,f=gt(c(u)),s=o(wn,f.d8,n),g=o(hn,f.d5,e),d=o(wn,f.d9,r),h=o(hn,f.d6,a),b=o(wn,f.ea,t),_=o(hn,f.d7,i),S=c,A=v;n=s,e=g,r=d,a=h,t=b,i=_,c=S,l=A;continue n}else return{d5:e,d6:a,d7:i,d8:n,d9:r,ea:t}}),nb=w(function(n,e,r){var a=gt(n(e));return yt(K3,a.d8,a.d5,a.d9,a.d6,a.ea,a.d7,n,r)}),go=$(function(n,e){var r=n,a=e;return Y(a,r)<1}),N$=function(n){return o(go,n.d5,n.d8)&&o(go,n.d6,n.d9)&&o(go,n.d7,n.ea)?n:{d5:o(hn,n.d8,n.d5),d6:o(hn,n.d9,n.d6),d7:o(hn,n.ea,n.d7),d8:o(wn,n.d8,n.d5),d9:o(wn,n.d9,n.d6),ea:o(wn,n.ea,n.d7)}},ua=function(n){var e=n;return e},H$=function(n){var e=ua(n),r=e.a,a=e.b,t=e.c,i=Ee(r),c=Re(r),l=We(r),u=Ee(a),v=Re(a),f=We(a),s=Ee(t),g=Re(t),d=We(t);return N$({d5:o(hn,i,o(hn,u,s)),d6:o(hn,c,o(hn,v,g)),d7:o(hn,l,o(hn,f,d)),d8:o(wn,i,o(wn,u,s)),d9:o(wn,c,o(wn,v,g)),ea:o(wn,l,o(wn,f,d))})},G$=Pd,Rn=function(n){return G$(ya(n))},U$=function(n){var e=n;return e},Ot=function(n){return G$(U$(n))},eb=$(function(n,e){var r=n,a=e;return{gf:a.gj*r.dj-a.dj*r.gj,gj:a.dj*r.gf-a.gf*r.dj,dj:a.gf*r.gj-a.gj*r.gf}}),Ko=$(function(n,e){var r=n,a=e;return{gf:a.gf-r.gf,gj:a.gj-r.gj,dj:a.dj-r.dj}}),I$=function(n){return n},rb={gf:0,gj:0,dj:0},ab=$(function(n,e){var r=n,a=e,t=o(On,Q(a.gf),o(On,Q(a.gj),Q(a.dj)));if(t){var i=a.dj/t,c=a.gj/t,l=a.gf/t,u=Fe(l*l+c*c+i*i);return{gf:r*l/u,gj:r*c/u,dj:r*i/u}}else return rb}),tb=ab(I$(1)),O$=w(function(n,e,r){var a=o(Ko,e,r),t=o(Ko,n,e);return tb(o(eb,a,t))}),ob=function(n){var e=ua(n),r=e.a,a=e.b,t=e.c,i=Ot(m(O$,r,a,t));return T({s:i,em:Rn(r)},{s:i,em:Rn(a)},{s:i,em:Rn(t)})},ib=$(function(n,e){return{$:2,a:n,b:e}}),q$=ib({ds:3,dB:0,ec:4}),cb=function(n){if(n.b){var e=n.a,r=n.b,a=q$(o(X,ob,n)),t=m(nb,H$,e,r);return j(E$,t,n,a,0)}else return rc},Yn=w(function(n,e,r){return T(n,e,r)}),Pn=w(function(n,e,r){var a=n,t=e,i=r;return{gf:a,gj:t,dj:i}}),J$=function(){var n=Hn(1),e=Hn(1),r=Hn(1),a=o(an,-.5,n),t=o(an,-.5,e),i=o(an,-.5,r),c=m(Pn,i,t,a),l=o(an,.5,n),u=m(Pn,i,t,l),v=o(an,.5,e),f=m(Pn,i,v,a),s=m(Pn,i,v,l),g=o(an,.5,r),d=m(Pn,g,t,a),h=m(Pn,g,v,a),b=m(Pn,g,t,l),_=m(Pn,g,v,l);return ec(cb(p([m(Yn,c,h,d),m(Yn,c,f,h),m(Yn,u,b,_),m(Yn,u,_,s),m(Yn,d,h,_),m(Yn,d,_,b),m(Yn,c,s,f),m(Yn,c,u,s),m(Yn,c,d,b),m(Yn,c,b,u),m(Yn,f,_,h),m(Yn,f,s,_)])))}(),Va={$:0},lb=w(function(n,e,r){return{$:1,a:n,b:e,c:r}}),ub=w(function(n,e,r){var a=e.a,t=e.b,i=e.c,c=n(i),l=n(t),u=n(a),v=Ot(m(O$,u,l,c)),f={s:v,em:Rn(u)},s={s:v,em:Rn(l)},g={s:v,em:Rn(c)};return o(k,f,o(k,s,o(k,g,r)))}),ac=function(n){var e=n;return e.G},$b=V(function(n,e,r,a){if(e.$===1)return q;var t=e.a;if(r.$===1)return q;var i=r.a;if(a.$===1)return q;var c=a.a;return U(m(n,t,i,c))}),ni=4294967295>>>32-ea,ei=Hv,vb=w(function(n,e,r){n:for(;;){var a=ni&e>>>n,t=o(ei,a,r);if(t.$){var v=t.a;return o(ei,ni&e,v)}else{var i=t.a,c=n-ea,l=e,u=i;n=c,e=l,r=u;continue n}}}),fb=function(n){return n>>>5<<5},sb=$(function(n,e){var r=e.a,a=e.b,t=e.c,i=e.d;return n<0||Y(n,r)>-1?q:Y(n,fb(r))>-1?U(o(ei,ni&n,i)):U(m(vb,a,n,t))}),tc=function(n){var e=n;return e.am},bo=$(function(n,e){return o(sb,n,tc(e))}),db=function(n){var e=function(r){var a=r.a,t=r.b,i=r.c;return j($b,w(function(c,l,u){return T(c,l,u)}),o(bo,a,n),o(bo,t,n),o(bo,i,n))};return o(ga,e,ac(n))},mb=w(function(n,e,r){n:for(;;){var a=o(Si,In,n),t=a.a,i=a.b;if(Y(Eo(t),In)<0)return o(_u,!0,{D:e,p:r,t});var c=i,l=o(k,hu(t),e),u=r+1;n=c,e=l,r=u;continue n}}),oc=function(n){return n.b?m(mb,n,x,0):gu},pb=w(function(n,e,r){return n(e(r))}),gb=$(function(n,e){return!o(Mt,o(pb,pm,n),e)}),bb=function(n){var e=n.a;return e},Z$=$(function(n,e){var r=bb(n),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Y(i,r)<0&&c>=0&&Y(c,r)<0&&l>=0&&Y(l,r)<0};return o(gb,a,e)?{G:e,am:n}:{G:o(Dr,a,e),am:n}}),hb=w(function(n,e,r){return{$:3,a:n,b:e,c:r}}),xa=hb({ds:1,dB:3,ec:4}),Xa=$(function(n,e){var r=xr(e),a=xr(n);return y(T(a.gf,a.gj,a.dj),T(r.gf,r.gj,r.dj))}),gl=m(_a,0,0,0),ho=Zn(function(n,e,r,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(pa,o(Xa,n,e),t);if(v.$){var s={s:gl,em:Rn(e)},g={s:gl,em:Rn(n)},d=u+1,h=u;return T(o(k,T(r,h,d),o(k,T(r,d,a),c)),o(k,s,o(k,g,l)),u+2)}else{var f=v.a;return T(o(k,T(r,f,a),c),l,u)}}),Ab=Sn(function(n,e,r,a,t){n:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=n(u),s=n(l),g=n(c),d=a+2,h=a+1,b=a,_=n,S=e,A=v,P=a+3,D=mn(ho,f,g,d,b,e,mn(ho,s,f,h,d,e,mn(ho,g,s,b,h,e,t)));n=_,e=S,r=A,a=P,t=D;continue n}else{var I=t,H=I.a,N=I.b;return y(H,zn(N))}}),_b=Sn(function(n,e,r,a,t){n:for(;;)if(e.b){var i=e.a,c=i.a,l=i.b,u=i.c,v=e.b,f=n(u),s=n(l),g=n(c),d=r+2,h=r+1,b=r,_=m(Ar,o(Xa,g,f),d,m(Ar,o(Xa,f,s),h,m(Ar,o(Xa,s,g),b,t))),S=o(k,T(b,h,d),a),A=n,P=v,D=r+3,I=S,H=_;n=A,e=P,r=D,a=I,t=H;continue n}else return T(a,t,r)}),nr=w(function(n,e,r){var a=db(r),t=m(we,ub(e),x,a),i=C(_b,e,a,0,x,Ei),c=i.a,l=i.b,u=i.c,v=C(Ab,e,l,a,0,T(c,x,u)),f=v.a,s=v.b,g=Bi(s)?t:un(t,s);return m(lb,n,o(Z$,oc(g),f),o(xa,g,f))}),ri=function(n){return{G:o(X,function(e){return T(3*e,3*e+1,3*e+2)},o(Sr,0,oe(n)-1)),am:oc(ae(o(X,function(e){var r=e.a,a=e.b,t=e.c;return p([r,a,t])},n)))}},Y$=function(n){switch(n.$){case 0:return Va;case 1:var a=n.a,e=n.b,r=o(X,ua,e);return m(nr,a,Nn,ri(r));case 2:var a=n.a,e=n.b,r=o(X,ua,e);return m(nr,a,Nn,ri(r));case 3:var a=n.a,t=n.b;return m(nr,a,Nn,t);case 4:var a=n.a,t=n.b;return m(nr,a,function(i){return i.em},t);case 5:var a=n.a,t=n.b;return m(nr,a,function(i){return i.em},t);case 6:var a=n.a,t=n.b;return m(nr,a,function(i){return i.em},t);case 7:var a=n.a,t=n.b;return m(nr,a,function(i){return i.em},t);case 8:return Va;case 9:return Va;default:return Va}},bl=Y$(J$),qt=function(n){var e=n;return e.aP},X$={$:0},z=X$,kn=$(function(n,e){return{$:1,a:n,b:e}}),wb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bL"}},yb=1029,xb=function(n){return{$:5,a:n}},Q$=function(n){var e=n;return xb(e)},Sb=Q$(yb),Cb=1028,Pb=Q$(Cb),Wn=w(function(n,e,r){return e===1?n?o(k,Sb,r):o(k,Pb,r):r}),K$={src:`
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
    `,attributes:{position:"em",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ao=V(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,f,s){return C($n,m(Wn,l,a,s),K$,wb,r,{bL:n,c,d:i,e:v,f:t,g:u})}))}),ic={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aB"}},nv={src:`
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
    `,attributes:{position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ye=V(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,f,s){return C($n,m(Wn,l,a,s),nv,ic,r,{aB:n,c,d:i,e:v,f:t,g:u})}))}),ev=$(function(n,e){return{$:3,a:n,b:e}}),jb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aB",pointRadius:"b0",sceneProperties:"f"}},rv={src:`
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
    `,attributes:{position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"b0",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Lb=V(function(n,e,r,a){return o(ev,r,cn(function(t,i,c,l,u,v,f,s){return C($n,s,rv,jb,a,{aB:n,c,d:i,b0:e,e:v,f:t,g:u})}))}),cc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aS",sceneProperties:"f"}},Sa=function(n){var e=n;return e},Jt=jd,xe=Sn(function(n,e,r,a,t){return o(kn,r,cn(function(i,c,l,u,v,f,s,g){return C($n,m(Wn,u,t,g),nv,cc,a,{aS:o(Jt,Sa(e),n),c:l,d:c,e:f,f:i,g:v})}))}),kb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aS",pointRadius:"b0",sceneProperties:"f"}},zb=Sn(function(n,e,r,a,t){return o(ev,a,cn(function(i,c,l,u,v,f,s,g){return C($n,g,rv,kb,t,{aS:o(Jt,Sa(e),n),c:l,d:c,b0:r,e:f,f:i,g:v})}))}),av={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",materialColor:"cy",sceneProperties:"f",viewMatrix:"g"}},tv={src:`
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
    `,attributes:{normal:"s",position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ea=V(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,f,s){var g=f.a,d=f.b;return C($n,m(Wn,l,a,s),tv,av,r,{S:d,bj:g.bj,bU:g.bU,bV:g.bV,bW:g.bW,cy:n,c,d:i,e:v,f:t,g:u})}))}),ov={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",materialColorTexture:"cz",normalMapTexture:"a$",sceneProperties:"f",useNormalMap:"a4",viewMatrix:"g"}},iv={src:`
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
    `,attributes:{normal:"s",position:"em",tangent:"eB",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Tb=Zn(function(n,e,r,a,t,i){return o(kn,a,cn(function(c,l,u,v,f,s,g,d){var h=g.a,b=g.b;return C($n,m(Wn,v,i,d),iv,ov,t,{S:b,bj:h.bj,bU:h.bU,bV:h.bV,bW:h.bW,cz:n,c:u,d:l,a$:e,e:s,f:c,a4:r,g:f})}))}),cv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cb",constantBaseColor:"cd",constantMetallic:"ce",constantRoughness:"cf",enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",metallicTexture:"cD",normalMapTexture:"a$",roughnessTexture:"c1",sceneProperties:"f",useNormalMap:"a4",viewMatrix:"g"}},Mb=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return o(kn,u,cn(function(s,g,d,h,b,_,S,A){var P=S.a,D=S.b;return C($n,m(Wn,h,f,A),iv,cv,v,{cb:n,cd:e,ce:i,cf:a,S:D,bj:P.bj,bU:P.bU,bV:P.bV,bW:P.bW,cD:t,c:d,d:g,a$:c,e:_,c1:r,f:s,a4:l,g:b})}))}}}}}}}}}}},lv={src:`
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
    `,attributes:{},uniforms:{baseColor:"ca",enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",metallic:"cC",roughness:"c0",sceneProperties:"f",viewMatrix:"g"}},Ra=Zn(function(n,e,r,a,t,i){return o(kn,a,cn(function(c,l,u,v,f,s,g,d){var h=g.a,b=g.b;return C($n,m(Wn,v,i,d),tv,lv,t,{ca:n,S:b,bj:h.bj,bU:h.bU,bV:h.bV,bW:h.bW,cC:r,c:u,d:l,e:s,c0:e,f:c,g:f})}))}),Db=function(n){return{$:0,a:n}},hl=$(function(n,e){return{$:1,a:n,b:e}}),Qr=$(function(n,e){if(e.$){var r=e.a.F;return y(r,1)}else return e.a,y(n,0)}),Fb=function(n){return j(Br,$r(n),vr(n),fr(n),1)},lc=j(Br,0,0,0,0),Qa=$(function(n,e){if(e.$){var a=e.a.F;return y(a,lc)}else{var r=e.a;return y(n,Fb(r))}}),uv=$(function(n,e){var r=y(n,e);if(r.a.$){var t=r.a.a.F;return o(hl,y(t,lc),o(Qr,t,e))}else if(r.b.$){var t=r.b.a.F;return o(hl,o(Qa,t,n),o(Qr,t,e))}else{var a=r.a.a;return r.b.a,Db(a)}}),Bb=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Wa=V(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),Vb=V(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Eb=function(n){return o(Un,n,1)},ai=o(Un,0,0),mr=$(function(n,e){if(e.$){var a=e.a.F;return y(a,ai)}else{var r=e.a;return y(n,Eb(r))}}),$v=V(function(n,e,r,a){var t=j(Vb,n,e,r,a);if(t.a.$){var u=t.a.a.F;return j(Wa,y(u,lc),o(mr,u,e),o(mr,u,r),o(Qr,u,a))}else if(t.b.$){var u=t.b.a.F;return j(Wa,o(Qa,u,n),y(u,ai),o(mr,u,r),o(Qr,u,a))}else if(t.c.$){var u=t.c.a.F;return j(Wa,o(Qa,u,n),o(mr,u,e),y(u,ai),o(Qr,u,a))}else if(t.d.$){var u=t.d.a.F;return j(Wa,o(Qa,u,n),o(mr,u,e),o(mr,u,r),y(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,m(Bb,i,c,l)}}),Rb={src:`
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
    `,attributes:{},uniforms:{backlight:"b8",colorTexture:"bL",sceneProperties:"f"}},_o=Sn(function(n,e,r,a,t){return o(kn,r,cn(function(i,c,l,u,v,f,s,g){return C($n,m(Wn,u,t,g),K$,Rb,a,{b8:Sa(e),bL:n,c:l,d:c,e:f,f:i,g:v})}))}),vv={src:`
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
    `,attributes:{normal:"s",position:"em",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Wb=V(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,f,s){var g=f.a,d=f.b;return C($n,m(Wn,l,a,s),vv,ov,r,{S:d,bj:g.bj,bU:g.bU,bV:g.bV,bW:g.bW,cz:n,c,d:i,a$:n,e:v,f:t,a4:0,g:u})}))}),Nb=li(function(n,e,r,a,t,i,c,l,u){return o(kn,c,cn(function(v,f,s,g,d,h,b,_){var S=b.a,A=b.b;return C($n,m(Wn,g,u,_),vv,cv,l,{cb:n,cd:e,ce:i,cf:a,S:A,bj:S.bj,bU:S.bU,bV:S.bV,bW:S.bW,cD:t,c:s,d:f,a$:n,e:h,c1:r,f:v,a4:0,g:d})}))}),$a=w(function(n,e,r){var a=n,t=e;return r<=.5?a+r*(t-a):t+(1-r)*(a-t)}),Hb=function(n){var e=n;return m($a,e.d8,e.d5,.5)},Gb=function(n){var e=n;return m($a,e.d9,e.d6,.5)},Ub=function(n){var e=n;return m($a,e.ea,e.d7,.5)},Ib=function(n){return m(Pn,Hb(n),Gb(n),Ub(n))},J=function(n){var e=z$(n),r=e.a,a=e.b,t=e.c;return{eW:ya(Ib(n)),fg:r/2,fh:a/2,fi:t/2}},uc=$(function(n,e){switch(n.$){case 0:if(n.b.$){n.a;var l=n.b.a.F;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=e.a,c=e.c,a=e.d;return j(Ao,l,J(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return j(Ao,l,J(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return j(Ao,l,J(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var r=n.b.a;switch(e.$){case 0:return z;case 1:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 2:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 3:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 4:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 5:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return j(ye,r,J(t),c,a);case 8:var t=e.a,c=e.c;return j(ye,r,J(t),c,0);case 9:var t=e.a,c=e.c;return j(ye,r,J(t),c,0);default:var t=e.a,i=e.b,c=e.d;return j(Lb,r,i,J(t),c)}}case 1:if(n.b.$){n.a;var l=n.b.a.F,v=n.c;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=e.a,c=e.c,a=e.d;return C(_o,l,v,J(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return C(_o,l,v,J(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return C(_o,l,v,J(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=n.b.a,v=n.c;switch(e.$){case 0:return z;case 1:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 2:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 3:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 4:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 5:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return C(xe,u,v,J(t),c,a);case 8:var t=e.a,c=e.c;return C(xe,u,v,J(t),c,0);case 9:var t=e.a,c=e.c;return C(xe,u,v,J(t),c,0);default:var t=e.a,i=e.b,c=e.d;return C(zb,u,v,i,J(t),c)}}case 2:n.a;var f=n.b,H=n.c,s=o(uv,f,H);if(s.$){var h=s.a,b=h.a;h.b;var _=s.b,S=_.a,A=_.b;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=e.a,c=e.c,d=e.d;return j(Wb,b,J(t),c,d);case 7:var t=e.a,c=e.c,d=e.d;return mn(Tb,b,S,A,J(t),c,d);case 8:return z;case 9:return z;default:return z}}else{var g=s.a;switch(e.$){case 0:return z;case 1:return z;case 2:var t=e.a,c=e.c,d=e.d;return j(Ea,g,J(t),c,d);case 3:return z;case 4:var t=e.a,c=e.c,d=e.d;return j(Ea,g,J(t),c,d);case 5:return z;case 6:var t=e.a,c=e.c,d=e.d;return j(Ea,g,J(t),c,d);case 7:var t=e.a,c=e.c,d=e.d;return j(Ea,g,J(t),c,d);case 8:return z;case 9:return z;default:return z}}default:n.a;var P=n.b,D=n.c,I=n.d,H=n.e,N=j($v,P,D,I,H);if(N.$){var en=N.a,tn=en.a,gn=en.b,An=N.b,sn=An.a,Cn=An.b,Gn=N.c,En=Gn.a,ze=Gn.b,Te=N.d,S=Te.a,A=Te.b;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=e.a,c=e.c,a=e.d;return Vv(Nb,tn,gn,sn,Cn,En,ze,J(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return Mb(tn)(gn)(sn)(Cn)(En)(ze)(S)(A)(J(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var G=N.a,O=N.b,E=N.c;switch(e.$){case 0:return z;case 1:return z;case 2:var t=e.a,c=e.c,a=e.d;return mn(Ra,G,O,E,J(t),c,a);case 3:return z;case 4:var t=e.a,c=e.c,a=e.d;return mn(Ra,G,O,E,J(t),c,a);case 5:return z;case 6:var t=e.a,c=e.c,a=e.d;return mn(Ra,G,O,E,J(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return mn(Ra,G,O,E,J(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),wo=function(n){var e=n;return e.gf},yo=function(n){var e=n;return e.gj},xo=function(n){var e=n;return e.dj},Ob=function(n){var e=n,r=xo(e.dk),a=yo(e.dk),t=wo(e.dk),i=xo(e.di),c=yo(e.di),l=wo(e.di),u=xo(e.dh),v=yo(e.dh),f=wo(e.dh);return f*c*r+v*i*t+u*l*a-u*c*t-v*l*r-f*i*a>0},qb=function(n){var e=ya(ur(n)),r=te(Xe(n)),a=te(Ye(n)),t=te(Ze(n));return{dF:Ob(n),u:t.gf,v:t.gj,w:t.dj,x:a.gf,y:a.gj,z:a.dj,A:r.gf,B:r.gj,C:r.dj,K:e.gf,L:e.gj,M:e.dj,b4:1}},pr=$(function(n,e){return{$:5,a:n,b:e}}),fv=$(function(n,e){var r=e;switch(r.$){case 0:return z;case 5:var a=r.a,t=r.b,i=o(y$,a,n);return o(pr,i,t);case 1:return o(pr,n,r);case 3:return o(pr,n,r);case 2:return o(pr,n,r);default:return o(pr,n,r)}}),sv=$(function(n,e){return o(fv,qb(n),e)}),Zt=function(n){return{$:2,a:n}},Jb=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=e.eW;return{eW:{gf:r*i.gf,gj:a*i.gj,dj:t*i.dj},fg:r*e.fg,fh:a*e.fh,fi:t*e.fi}}),Zb=zd,Yb=kd,Al=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var f=n.a,s=n.b,g=n.c,d=Yb(a),h=d.gf,b=d.gj,_=d.dj,S=d.eI,A=Zb({eI:S,gf:h*f,gj:b*s,dj:_*g});return yt(e,r,A,t,i,c,l,u,v)}}}}}}}}}},ti=$(function(n,e){switch(e.$){case 0:return X$;case 5:var r=e.a,a=e.b;return o(pr,r,o(ti,n,a));case 1:var t=e.a,i=e.b;return o(kn,o(Jb,n,t),o(Al,n,i));case 3:return e;case 2:var i=e.a;return Zt(o(Al,n,i));default:var c=e.a;return D$(o(X,ti(n),c))}}),$c=$(function(n,e){var r=e;return o(ti,n,r)}),vc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},dv=7683,mv=7682,Xb=m(Zi,{cx:0,cZ:0,dg:15},{be:Vn,bv:jr,bD:Vn,bE:dv},{be:Vn,bv:jr,bD:Vn,bE:mv}),Qb=m(Zi,{cx:0,cZ:0,dg:15},{be:Vn,bv:jr,bD:Vn,bE:mv},{be:Vn,bv:jr,bD:Vn,bE:dv}),fc=$(function(n,e){return n?o(k,Qb,e):o(k,Xb,e)}),Kb={src:`
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
    `,attributes:{normal:"s",position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b5",viewMatrix:"g"}},n2=function(n){if(n.$){var e=n.c;return U(cn(function(r,a,t,i,c,l,u,v){return C($n,o(fc,i,v),Kb,vc,e,{c:t,d:a,e:l,f:r,b5:u,g:c})}))}else return q},bt=function(n){var e=n2(n);if(e.$)return z;var r=e.a;return Zt(r)},e2=V(function(n,e,r,a){var t=o(uc,r,J$),i=function(){var f=y(n,e);return f.a?f.b?wa(p([t,bt(bl)])):t:f.b?bt(bl):z}(),c=qt(a),l=c.a,u=c.b,v=c.c;return o(sv,It(a),o($c,T(l,u,v),i))}),r2=$(function(n,e){return j(e2,!0,!0,n,e)}),oi=function(n){return{$:0,a:n}},pv=$(function(n,e){return{$:0,a:n,b:e}}),a2=function(n){var e=Di(n),r=e.cY,a=e.cj,t=e.cc;return m(_a,r,a,t)},t2=function(n){return o(pv,0,oi(a2(n)))},sc=function(n){var e=n;return e.m},Kr=function(n){var e=n;return or(e)},o2=$(function(n,e){var r=n.em,a=n.s;return o(k,{s:Ot(a),em:Rn(r)},e)}),i2=wt(function(n,e,r,a,t,i,c){n:for(;;)if(c.b){var l=c.a,u=c.b,v=fr(l.em),f=vr(l.em),s=$r(l.em),g=o(wr,n,s),d=o(On,e,s),h=o(wr,r,f),b=o(On,a,f),_=o(wr,t,v),S=o(On,i,v),A=u;n=g,e=d,r=h,a=b,t=_,i=S,c=A;continue n}else return N$({d5:e,d6:a,d7:i,d8:n,d9:r,ea:t})}),gv=$(function(n,e){var r=fr(n.em),a=vr(n.em),t=$r(n.em);return ui(i2,t,t,a,a,r,r,e)}),c2=function(n){var e=m(lu,o2,x,tc(n));if(e.b){var r=e.a,a=e.b,t=o(xa,e,ac(n)),i=o(gv,r,a);return j(R$,i,n,t,0)}else return rc},_l=$(function(n,e){var r=n,a=e,t=r.di,i=t,c=r.dh,l=c;return{gf:a.gf*l.gf+a.gj*i.gf,gj:a.gf*l.gj+a.gj*i.gj,dj:a.gf*l.dj+a.gj*i.dj}}),ht=function(n){var e=n;return ir(e)},Or=function(n){var e=n;return e},ii=function(n){return ie(2*ee*n)},wl=s$({cK:Bn,dh:Ht,di:nc}),bv=function(){var n=72,e=o(p$,n,ii(1)),r=Hn(1),a=Or(Wi),t=Or(Hi),i=Hn(1),c=o(an,.5,i),l=m(Pn,Se,Se,c),u=o(an,-.5,i),v=m(Pn,Se,Se,u),f=function(d){var h=o(an,d,e),b=Or(o(_l,wl,Yo(h))),_=o(an,Kr(h),r),S=o(an,ht(h),r),A=m(Pn,_,S,c),P=m(Pn,_,S,u),D=o(ta,n,d+1),I=o(an,D,e),H=Or(o(_l,wl,Yo(I))),N=o(an,Kr(I),r),G=o(an,ht(I),r),O=m(Pn,N,G,u),E=m(Pn,N,G,c);return p([T({s:t,em:v},{s:t,em:O},{s:t,em:P}),T({s:b,em:P},{s:H,em:O},{s:H,em:E}),T({s:b,em:P},{s:H,em:E},{s:b,em:A}),T({s:a,em:l},{s:a,em:A},{s:a,em:E})])},s=o(X,f,o(Sr,0,n-1)),g=ri(ae(s));return ec(c2(g))}(),yl=Y$(bv),l2=function(n){var e=n,r=Q(e.dj),a=Q(e.gj),t=Q(e.gf);if(Y(t,a)<1)if(Y(t,r)<1){var i=Fe(e.dj*e.dj+e.gj*e.gj);return{gf:0,gj:-e.dj/i,dj:e.gj/i}}else{var i=Fe(e.gj*e.gj+e.gf*e.gf);return{gf:-e.gj/i,gj:e.gf/i,dj:0}}else if(Y(a,r)<1){var i=Fe(e.dj*e.dj+e.gf*e.gf);return{gf:e.dj/i,gj:0,dj:-e.gf/i}}else{var i=Fe(e.gf*e.gf+e.gj*e.gj);return{gf:-e.gj/i,gj:e.gf/i,dj:0}}},u2=function(n){var e=l2(n),r=e,a=r,t=n,i=t,c={gf:i.gj*a.dj-i.dj*a.gj,gj:i.dj*a.gf-i.gf*a.dj,dj:i.gf*a.gj-i.gj*a.gf};return y(e,c)},$2=function(n){var e=Nt(n),r=u2(e),a=r.a,t=r.b;return je({cK:Ni(n),dh:a,di:t,dk:e})},hv=function(n){var e=n;return e.fv},Av=function(n){var e=n;return e.fN},v2=V(function(n,e,r,a){var t=$2(sc(a)),i=o(uc,r,bv),c=function(){var s=y(n,e);return s.a?s.b?wa(p([i,bt(yl)])):i:s.b?bt(yl):z}(),l=Av(a),u=l,v=hv(a),f=v;return o(sv,t,o($c,T(u,u,f),c))}),f2=$(function(n,e){return j(v2,!0,!0,n,e)}),xl={src:`
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
    `,attributes:{triangleVertex:"c8"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bA",viewMatrix:"g"}},Sl={src:`
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
    `,attributes:{triangleVertex:"c8"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bA",viewMatrix:"g"}},qr=function(n){var e=ua(n),r=e.a,a=e.b,t=e.c,i=xr(r),c=xr(a),l=xr(t);return se({dQ:i.gf,dR:c.gf,dS:l.gf,dT:0,dU:i.gj,dV:c.gj,dW:l.gj,dX:0,dY:i.dj,dZ:c.dj,d_:l.dj,d$:0,d0:0,d1:0,d2:0,d3:0})},Na=q$(p([T({c8:0},{c8:1},{c8:2})])),s2=$(function(n,e){var r=H$(e),a=J(r);switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.F,z;var t=n.b.a;return o(kn,a,cn(function(A,P,D,I,H,N,G,O){return C($n,m(Wn,I,0,O),xl,ic,Na,{aB:t,c:D,d:P,e:N,f:A,bA:qr(e),g:H})}));case 1:if(n.b.$)return n.a,z;var i=n.b.a,c=n.c;return o(kn,a,cn(function(A,P,D,I,H,N,G,O){return C($n,m(Wn,I,0,O),xl,cc,Na,{aS:o(Jt,Sa(c),i),c:D,d:P,e:N,f:A,bA:qr(e),g:H})}));case 2:n.a;var l=n.b,d=n.c,u=o(uv,l,d);if(u.$)return z;var v=u.a;return o(kn,a,cn(function(A,P,D,I,H,N,G,O){var E=G.a,en=G.b;return C($n,m(Wn,I,0,O),Sl,av,Na,{S:en,bj:E.bj,bU:E.bU,bV:E.bV,bW:E.bW,cy:v,c:D,d:P,e:N,f:A,bA:qr(e),g:H})}));default:n.a;var f=n.b,s=n.c,g=n.d,d=n.e,h=j($v,f,s,g,d);if(h.$)return z;var b=h.a,_=h.b,S=h.c;return o(kn,a,cn(function(A,P,D,I,H,N,G,O){var E=G.a,en=G.b;return C($n,m(Wn,I,0,O),Sl,lv,Na,{ca:b,S:en,bj:E.bj,bU:E.bU,bV:E.bV,bW:E.bW,cC:S,c:D,d:P,e:N,c0:_,f:A,bA:qr(e),g:H})}))}}),d2=function(){var n=p([{a3:o(Un,0,1)},{a3:o(Un,1,1)},{a3:o(Un,2,1)},{a3:o(Un,0,-1)},{a3:o(Un,1,-1)},{a3:o(Un,2,-1)}]),e=p([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return o(xa,n,e)}(),m2={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b5",triangleVertexPositions:"bA",viewMatrix:"g"}},Cl=function(n){return Zt(cn(function(e,r,a,t,i,c,l,u){return C($n,o(fc,t,u),m2,vc,d2,{c:a,d:r,e:c,f:e,b5:l,bA:qr(n),g:i})}))},p2=V(function(n,e,r,a){var t=o(s2,r,a),i=y(n,e);return i.a?i.b?wa(p([t,Cl(a)])):t:i.b?Cl(a):z}),g2=$(function(n,e){return j(p2,!0,!0,n,e)}),dc=function(n){var e=n;return e},b2=$(function(n,e){var r=We(e),a=We(n),t=Re(e),i=Re(n),c=Ee(e),l=Ee(n);return{d5:o(hn,l,c),d6:o(hn,i,t),d7:o(hn,a,r),d8:o(wn,l,c),d9:o(wn,i,t),ea:o(wn,a,r)}}),h2=function(n){var e=dc(n),r=e.a,a=e.b;return o(b2,r,a)},Pl={src:`
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
    `,attributes:{lineSegmentVertex:"dP"},uniforms:{lineSegmentEndPoint:"dN",lineSegmentStartPoint:"dO",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},A2=$(function(n,e){return{$:1,a:n,b:e}}),_2=A2({ds:2,dB:0,ec:1}),jl=_2(p([y({dP:0},{dP:1})])),w2=$(function(n,e){var r=h2(e),a=J(r),t=dc(e),i=t.a,c=t.b;switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.F,z;var l=n.b.a;return o(kn,a,cn(function(v,f,s,g,d,h,b,_){return C($n,_,Pl,ic,jl,{aB:l,dN:Rn(c),dO:Rn(i),c:s,d:f,e:h,f:v,g:d})}));case 1:if(n.b.$)return z;var l=n.b.a,u=n.c;return o(kn,a,cn(function(f,s,g,d,h,b,_,S){return C($n,S,Pl,cc,jl,{aS:o(Jt,Sa(u),l),dN:Rn(c),dO:Rn(i),c:g,d:s,e:b,f,g:h})}));case 2:return z;default:return z}}),y2=$(function(n,e){return o(w2,n,e)}),Yt=function(n){var e=n;return e.eW},Xt=function(n){var e=n;return e.fN},Ll=$(function(n,e){var r=n,a=e;return r/a}),x2=Sn(function(n,e,r,a,t){n:for(;;){var i=a(e/r),c=o(k,i,t);if(on(e,n))return c;var l=n,u=e-1,v=r,f=a,s=c;n=l,e=u,r=v,a=f,t=s;continue n}}),kl=$(function(n,e){return n<1?x:C(x2,0,n,n,e,x)}),S2=$(function(n,e){var r=n.em,a=n.s,t=n.O,i=t,c=i.a,l=i.b;return o(k,{s:Ot(a),em:Rn(r),O:o(Un,c,l)},e)}),C2=function(n){var e=m(lu,S2,x,tc(n));if(e.b){var r=e.a,a=e.b,t=o(xa,e,ac(n)),i=o(gv,r,a);return j(W$,i,n,t,0)}else return rc},mc=$(function(n,e){var r=n,a=e,t=or(a);return{gf:t*or(r),gj:t*ir(r),dj:ir(a)}}),P2=function(){var n=Hn(1),e=72,r=o(Sr,0,e-1),a=o(kl,e,o($a,Se,ii(1))),t=yi(e/2),i=o(Sr,0,t-1),c=o(kl,t,o($a,hr(90),hr(-90))),l=oc(ae(o(X,function(f){return o(X,function(s){return{s:Or(o(mc,f,s)),em:m(Pn,o(an,Kr(s)*Kr(f),n),o(an,Kr(s)*ht(f),n),o(an,ht(s),n)),O:y(o(Ll,f,ii(1)),o(Ll,o(Xr,hr(90),s),hr(180)))}},c)},a))),u=$(function(f,s){return f*(t+1)+s}),v=ae(o(X,function(f){return ae(o(X,function(s){var g=o(u,f+1,s),d=o(u,f,s),h=o(u,f+1,s+1),b=o(u,f,s+1);return p([T(b,h,g),T(b,g,d)])},i))},r));return ec(C2(o(Z$,l,v)))}(),At=72,Ha=2*At,j2=$(function(n,e){n:for(;;){var r=Ha+1,a=o(ta,Ha,2*n+3),t=o(ta,Ha,2*n+2),i=2*n+1,c=2*n,l=Ha,u=o(k,T(l,c,t),o(k,T(c,a,t),o(k,T(c,i,a),o(k,T(i,r,a),e))));if(n){var v=n-1,f=u;n=v,e=f;continue n}else return u}}),L2=w(function(n,e,r){return r<=.5?n+r*(e-n):e+(1-r)*(n-e)}),k2=$(function(n,e){n:for(;;){var r=m(L2,0,2*ee,n/At),a={bG:r,bZ:0,b3:1},t={bG:r,bZ:1,b3:1},i=o(k,a,o(k,t,e));if(n){var c=n-1,l=i;n=c,e=l;continue n}else return i}}),z2=function(){var n=o(k2,At-1,p([{bG:0,bZ:0,b3:0},{bG:0,bZ:1,b3:0}])),e=o(j2,At-1,x);return o(xa,n,e)}(),T2={src:`
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
    `,attributes:{angle:"bG",offsetScale:"bZ",radiusScale:"b3"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b5",viewMatrix:"g"}},zl=function(n){return Zt(cn(function(e,r,a,t,i,c,l,u){return C($n,o(fc,!0,u),T2,vc,z2,{aB:m(_a,0,0,1),c:a,d:r,e:c,f:e,b5:l,g:i})}))},M2=function(n){var e=U$(n);return{dF:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,K:e.gf,L:e.gj,M:e.dj,b4:1}},D2=$(function(n,e){return o(fv,M2(n),e)}),F2=V(function(n,e,r,a){var t=o(uc,r,P2),i=function(){var u=y(n,e);return u.a?u.b?wa(p([t,zl()])):t:u.b?zl():z}(),c=Xt(a),l=c;return o(D2,o(Ko,Bn,Yt(a)),o($c,T(l,l,l),i))}),B2=$(function(n,e){return j(F2,!0,!0,n,e)}),V2=w(function(n,e,r){return{$:1,a:n,b:e,c:r}}),_v=w(function(n,e,r){return{$:2,a:n,b:e,c:r}}),E2=Sn(function(n,e,r,a,t){return{$:3,a:n,b:e,c:r,d:a,e:t}}),R2=function(n){switch(n.$){case 0:var r=n.a,a=n.b;return o(pv,r,a);case 1:var r=n.a,a=n.b,e=n.c;return m(V2,r,a,e);case 2:var r=n.a,a=n.b,c=n.c;return m(_v,r,a,c);default:var r=n.a,a=n.b,t=n.c,i=n.d,c=n.e;return C(E2,r,a,t,i,c)}},W2=R2,wv=function(n){switch(n.$){case 0:var t=n.a,e=n.b;return p([o(r2,t,e)]);case 1:var t=n.a,r=n.b;return p([o(g2,t,r)]);case 3:var t=n.a,a=n.b;return p([o(B2,W2(t),a)]);case 2:var t=n.a,i=n.b;return p([o(f2,t,i)]);case 4:var c=n.a,l=n.b;return p([o(y2,t2(c),l)]);default:var u=n.a;return o(Aa,wv,u)}},N2=function(n){return o(Aa,wv,n)},H2=$(function(n,e){return q3({eM:n.eM,aN:jg(n.eQ),eT:n.eT,eY:Hn(n.eY),cg:n.cg,aP:y(pl(qn(n.bq.gd)),pl(qn(n.bq.fk))),aU:N2(e),fb:n.fb,fx:n.fx,f5:n.f5,gc:n.gc})}),yv=function(n){return n},G2=$(function(n,e){var r=n,a=te(e.e3),t=a.gf,i=a.gj,c=a.dj,l=o(Ut,e.bQ,e.aO),u=l;return{bI:fr(u),eV:r,bO:vr(u),cT:0,b2:$r(u),c9:1,gf:-t,gj:-i,dj:-c}}),U2=function(n){return o(G2,yv(!0),{aO:n.aO,e3:o(mc,ie(n.bH),ie(n.bM)),bQ:n.bQ})},Ca=$(function(n,e){return{$:0,a:n,b:e}}),So=$(function(n,e){var r=n,a=e;return Y(a,r)>-1}),Co=$(function(n,e){var r=n,a=e;return r+.5*(a-r)}),I2=ge({gf:-1,gj:0,dj:0}),O2=ge({gf:0,gj:-1,dj:0}),q2=Zn(function(n,e,r,a,t,i){var c=o(So,r,i)?Wi:Hi,l=o(So,e,t)?Ki:O2,u=o(So,n,a)?d$:I2,v=T(vn(o(Pe,n,a)),vn(o(Pe,e,t)),vn(o(Pe,r,i))),f=m(Pn,o(Co,n,a),o(Co,e,t),o(Co,r,i)),s=je({cK:f,dh:u,di:l,dk:c});return{eP:s,aP:v}}),xv=$(function(n,e){return mn(q2,Ee(n),Re(n),We(n),Ee(e),Re(e),We(e))}),Sv=$(function(n,e){var r=e/2;return o(Ca,n,o(xv,m(la,-r,-r,-r),m(la,r,r,r)))}),J2=$(function(n,e){return o(Ln,function(r){if(r.$===2){var a=r.a;return a}else return Mi},o(pa,n,e.aA))}),Z2=$(function(n,e){return o(pn,Mi,Tr(o(ga,J2(n),e)))}),Y2=$(function(n,e){return o(Z2,n,e.eZ)}),Ge=Y2,Qt=function(n){return{$:5,a:n}},Vr=function(n){return Qt(n)},Po=function(n){return m(Oi,0,1,n<=.04045?n/12.92:o(He,(n+.055)/1.055,2.4))},X2=function(n){var e=Di(n),r=e.cY,a=e.cj,t=e.cc;return m(_a,Po(r),Po(a),Po(t))},Le=function(n){return m(_v,0,oi(X2(n)),oi(0))},Kt=$(function(n,e){return{$:2,a:n,b:e}}),pc=$(function(n,e){return{$:4,a:n,b:e}}),no=$(function(n,e){return{$:3,a:n,b:e}}),gc=$(function(n,e){return{$:1,a:n,b:e}}),Q2=w(function(n,e,r){return{gf:n,gj:e,dj:r}}),K2=$(function(n,e){return{eP:o(f$,n,It(e)),aP:qt(e)}}),nh=$(function(n,e){var r=e;return o(Jn,o(Mr,n,r.cK),r.e3)}),eh=$(function(n,e){var r=e;return{m:o(nh,n,r.m),fv:r.fv,fN:r.fN}}),rh=function(n){return n},bc=$(function(n,e){var r=dc(e),a=r.a,t=r.b;return rh(y(n(a),n(t)))}),ah=$(function(n,e){return o(bc,Mr(n),e)}),eo=$(function(n,e){return{eW:e,fN:vn(n)}}),th=$(function(n,e){return o(eo,Xt(e),o(Mr,n,Yt(e)))}),hc=$(function(n,e){var r=e,a=r.a,t=r.b,i=r.c;return T(n(a),n(t),n(i))}),oh=$(function(n,e){return o(hc,Mr(n),e)}),ro=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=m(Q2,r,a,t);switch(e.$){case 0:var f=e.a,c=e.b;return o(Ca,f,o(K2,i,c));case 1:var f=e.a,l=e.b;return o(gc,f,o(oh,i,l));case 3:var f=e.a,u=e.b;return o(no,f,o(th,i,u));case 2:var f=e.a,v=e.b;return o(Kt,f,o(eh,i,v));case 4:var f=e.a,s=e.b;return o(pc,f,o(ah,i,s));default:var g=e.a;return Qt(o(X,ro(T(r,a,t)),g))}}),sr=function(n){return ro(T(n,0,0))},Ue=function(n){return ro(T(0,n,0))},be=function(n){return ro(T(0,0,n))},Tl=$(function(n,e){var r=function(a){var t=a.a,i=a.b;return o(Ue,i,o(sr,t,o(be,-.495,o(Sv,Le(o(Ge,"board color",n)),1))))};return Vr(o(X,r,Pr(Tn(e.a).bT)))}),va=$(function(n,e){var r=e.a,a=e.b,t=e.c,i=T(r/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ca,n,o(xv,m(la,-c,-l,-u),m(la,c,l,u)))}),jn=function(n){return n*ee/180},ih=function(n){return o(He,n,2)},ch=w(function(n,e,r){return{eP:m(v$,n,e,It(r)),aP:qt(r)}}),lh=$(function(n,e){var r=o(ha,n,e),a=o(Ja,n,e);return function(t){var i=t;return o(Jn,r(i.cK),a(i.e3))}}),uh=w(function(n,e,r){var a=r;return{m:m(lh,n,e,a.m),fv:a.fv,fN:a.fN}}),$h=w(function(n,e,r){return o(bc,o(ha,n,e),r)}),vh=w(function(n,e,r){return o(eo,Xt(r),m(ha,n,e,Yt(r)))}),fh=w(function(n,e,r){return o(hc,o(ha,n,e),r)}),Pa=w(function(n,e,r){switch(r.$){case 0:var l=r.a,a=r.b;return o(Ca,l,m(ch,n,e,a));case 1:var l=r.a,t=r.b;return o(gc,l,m(fh,n,e,t));case 3:var l=r.a,i=r.b;return o(no,l,m(vh,n,e,i));case 2:var l=r.a,c=r.b;return o(Kt,l,m(uh,n,e,c));case 4:var l=r.a,u=r.b;return o(pc,l,m($h,n,e,u));default:var v=r.a;return Qt(o(X,o(Pa,n,e),v))}}),Ml=$(function(n,e){var r=n.a,a=n.b,t=a.a,i=a.b,c=a.c;return o(Pa,o(Jn,Ri(r),ge({gf:t,gj:i,dj:c})),ie(e))}),Cv=w(function(n,e,r){var a=e.c4;switch(a.$){case 1:var v=a.a.aj,f=a.a.b6,s=a.a.bp;if(a.a.cF,on(f,r)){var t=function(){switch(s){case 0:return y({gf:.5,gj:.5,dj:-.5},T(-1,0,0));case 1:return y({gf:-.5,gj:-.5,dj:-.5},T(1,0,0));case 2:return y({gf:-.5,gj:.5,dj:-.5},T(0,-1,0));default:return y({gf:.5,gj:-.5,dj:-.5},T(0,1,0))}}(),i=o(bn,"duration of step animation",n),c=(n.V-v)/i,l=ih(c),u=o(wr,jn(90),l*jn(90));return o(Ml,t,u)}else return Nn;case 2:var v=a.a.aj,f=a.a.b6,s=a.a.bp;if(on(f,r)){var t=function(){switch(s){case 0:return y({gf:.5,gj:.5,dj:-.5},T(-1,0,0));case 1:return y({gf:-.5,gj:-.5,dj:-.5},T(1,0,0));case 2:return y({gf:-.5,gj:.5,dj:-.5},T(0,-1,0));default:return y({gf:.5,gj:-.5,dj:-.5},T(0,1,0))}}(),i=o(bn,"duration of mistake animation",n),c=(n.V-v)/i,l=ir(ee*c),u=m(Oi,jn(0),jn(45),l*jn(45));return o(Ml,t,u)}else return Nn;default:return Nn}}),sh=o(Jn,Bn,Ht),ar=$(function(n,e){return m(Pa,sh,ie(n),e)}),dh=o(Jn,Bn,nc),_t=$(function(n,e){return m(Pa,dh,ie(n),e)}),mh=$(function(n,e){var r=o(bn,"cubes side length",n),a=o(Ge,"color 2",n),t=o(be,-(r/4),o(va,Le(a),T(r,r,r/2))),i=o(Ge,"color 1",n),c=o(be,r/4,o(va,Le(i),T(r,r,r/2))),l=Tn(e.a).dL,u=l.a,v=u.a,f=u.b,s=l.b,g=function(){if(s.b)switch(s.a){case 2:return s.a,s.b,ar(jn(180));case 1:return s.a,s.b,ar(jn(90));default:return s.a,s.b,_t(-jn(90))}else switch(s.a){case 2:return s.a,s.b,Nn;case 1:return s.a,s.b,ar(-jn(90));default:return s.a,s.b,_t(jn(90))}}();return o(Ue,f,o(sr,v,o(be,r/2,j(Cv,n,e,y(v,f),g(Vr(p([c,t])))))))}),ph=w(function(n,e,r){return{m:o(Jn,n,e),fv:vn(r.fv),fN:vn(r.fN)}}),gh=w(function(n,e,r){return o(Kt,n,m(ph,Bn,Ki,{fv:Hn(r),fN:Hn(e)}))}),bh=$(function(n,e){return(e-Au(e/n)*n)/n}),hh=function(n){return 2*ee*n},ci=V(function(n,e,r,a){return n+(e-n)*(1+or(hh(o(bh,r,a))))/2}),Ah=$(function(n,e){var r=Tn(e.a).bT.fu,a=r.a,t=r.b;return o(Ue,t,o(sr,a,o(be,j(ci,-.3,-.4,.5,n.V),o(ar,jn(90),m(gh,Le(o(Ge,"finish mark color",n)),.3,1)))))}),_h=$(function(n,e){var r=o(bn,"cubes side length",n),a=o(Ge,"color 2",n),t=o(be,-(r/4),o(va,Le(a),T(r,r,r/2))),i=o(Ge,"color 1",n),c=o(be,r/4,o(va,Le(i),T(r,r,r/2))),l=Tn(e.a).cU,u=l.a,v=u.a,f=u.b,s=l.b,g=function(){if(s.b)switch(s.a){case 2:return s.a,s.b,ar(jn(180));case 1:return s.a,s.b,ar(jn(90));default:return s.a,s.b,_t(-jn(90))}else switch(s.a){case 2:return s.a,s.b,Nn;case 1:return s.a,s.b,ar(-jn(90));default:return s.a,s.b,_t(jn(90))}}();return o(Ue,f,o(sr,v,o(be,r/2,j(Cv,n,e,y(v,f),g(Vr(p([c,t])))))))}),wh=V(function(n,e,r,a){var t=T(n,e,r),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,f=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},s=f(i-1/3),g=f(i),d=f(i+1/3);return j(Je,d,g,s,a)}),yh=w(function(n,e,r){return j(wh,n,e,r,1)}),ja=w(function(n,e,r){var a=n,t=r;return{gf:a.gf+e*(t.gf-a.gf),gj:a.gj+e*(t.gj-a.gj),dj:a.dj+e*(t.dj-a.dj)}}),xh=w(function(n,e,r){var a=It(r),t=Ze(a),i=Ye(a),c=Xe(a),l=m(ja,n,e,ur(a)),u=e>=0?je({cK:l,dh:t,di:i,dk:c}):je({cK:l,dh:Ve(t),di:Ve(i),dk:Ve(c)}),v=qt(r),f=v.a,s=v.b,g=v.c,d=vn(o(an,e,f)),h=vn(o(an,e,s)),b=vn(o(an,e,g));return{eP:u,aP:T(d,h,b)}}),Dl=function(n){return Nt(sc(n))},Sh=function(n){return Ni(sc(n))},Ch=w(function(n,e,r){var a=vn(o(an,e,Av(r))),t=vn(o(an,e,hv(r))),i=e>=0?Dl(r):Ve(Dl(r)),c=m(ja,n,e,Sh(r));return{m:o(Jn,c,i),fv:t,fN:a}}),Ph=w(function(n,e,r){return o(bc,o(ja,n,e),r)}),jh=w(function(n,e,r){return o(eo,o(an,Q(e),Xt(r)),m(ja,n,e,Yt(r)))}),Lh=w(function(n,e,r){return o(hc,o(ja,n,e),r)}),Pv=$(function(n,e){switch(e.$){case 0:var c=e.a,r=e.b;return o(Ca,c,m(xh,Bn,n,r));case 1:var c=e.a,a=e.b;return o(gc,c,m(Lh,Bn,n,a));case 3:var c=e.a,t=e.b;return o(no,c,m(jh,Bn,n,t));case 2:var c=e.a,i=e.b;return o(Kt,c,m(Ch,Bn,n,i));case 4:var c=e.a,l=e.b;return o(pc,c,m(Ph,Bn,n,l));default:var u=e.a;return Qt(o(X,Pv(n),u))}}),kh=j(Je,255/255,255/255,255/255,1),zh=$(function(n,e){var r=function(i){var c=e.c4;return c.$===3?m(yh,j(ci,0,1,6,n.V+.03*i),1,.8):kh},a=function(i){var c=e.c4;return c.$===3?o(nn,Pv(.9),be(j(ci,.1,.7,6,n.V+.3*i))):Nn},t=$(function(i,c){var l=c.a,u=c.b;return o(Ue,u,o(sr,l,o(be,-.49,o(a,i,o(Sv,Le(r(i)),1)))))});return Vr(o(Pt,t,Pr(Tn(e.a).ej)))}),Th=j(Je,164/255,0/255,0/255,1),Mh=j(Je,239/255,41/255,41/255,1),Dh=$(function(n,e){return o(no,n,o(eo,Hn(e),Bn))}),Fh=$(function(n,e){var r=n.cV.dE?Mh:Th,a=e.a9,t=a.a,i=a.b;return o(Ue,i,o(sr,t,o(Dh,Le(r),.2)))}),Bh=$(function(n,e){return y(n,e)}),Vh=function(n){var e=n.fu,r=n.bn;return m(du,Bh,o(k,e,r),r)},jv=$(function(n,e){var r=n.a,a=n.b,t=function(i){var c=i.a,l=c.a,u=c.b,v=i.b,f=v.a,s=v.b;return a?on(r,c)&&on(f,l+1)||on(r,v)&&on(f,l-1):on(r,c)&&on(s,u-1)||on(r,v)&&on(s,u+1)};return o(Mt,t,Vh(e))}),Eh=o(Jn,Bn,Gt),Rh=$(function(n,e){return m(Pa,Eh,ie(n),e)}),Lv=$(function(n,e){var r=e.a,a=r.a,t=r.b,i=e.b,c=1-o(bn,"cubes side length",n),l=o(Ue,-.5,o(va,Le(o(Ge,"wall color",n)),T(1+c,c,c))),u=o(Rh,jn(90),l);return o(Ue,t,o(sr,a,function(){return i?u:l}()))}),Ga=$(function(n,e){return{$:0,a:n,b:e}}),Wh=function(n){return p([o(Ga,n,0),o(Ga,n,1),o(Ga,o(st,0,n),0),o(Ga,o(st,2,n),1)])},kv=function(n){return o(Aa,Wh,Pr(n))},Nh=$(function(n,e){var r=o(pn,Tn(e.a).bT,e.o.ee);return Vr(o(X,Lv(n),o(Dr,function(a){return!o(jv,a,r)},kv(r))))}),Hh=$(function(n,e){return Vr(o(X,Lv(n),o(Dr,function(r){return!o(jv,r,Tn(e.a).ej)},kv(Tn(e.a).bT))))}),Gh=function(n){return n},Uh=function(n){return Gh(1.2*o(He,2,n))},jo=Ii({gf:.37208,gj:.37529}),Ih={$:5},Oh=Ih,qh=Ii({gf:.44757,gj:.40745}),Jh=function(n){return n},Fl=function(n){return n},Lo=function(n){return n},Zh={$:1},Yh=Zh,Xh=$(function(n,e){var r=n,a=ya(e.em),t=a.gf,i=a.gj,c=a.dj,l=o(Ut,e.bQ,e.aO),u=l;return{bI:fr(u),eV:r,bO:vr(u),cT:0,b2:$r(u),c9:2,gf:t,gj:i,dj:c}}),Bl=function(n){return o(Xh,yv(!0),{aO:n.aO,bQ:n.bQ,em:Ri(n.em)})},Qh=$(function(n,e){var r=n,a=e;return Y(a,r)>0}),Vl=function(n){var e=n;return e},Kh=function(n){n:for(;;){if(on(n.dC,Se)&&on(n.dD,Se))return Dn;if(o(Qh,vn(n.dC),vn(n.dD))){var e={aO:n.aO,dC:n.dD,dD:n.dC,eE:Ve(n.eE)};n=e;continue n}else{var r=Q(Vl(n.dD)/ee),a=Q(Vl(n.dC)/ee),t=te(n.eE),i=t.gf,c=t.gj,l=t.dj,u=o(Ut,I$(1),n.aO),v=u;return{bI:a*fr(v),eV:!1,bO:a*vr(v),cT:r/a,b2:a*$r(v),c9:3,gf:i,gj:c,dj:l}}}},nA=function(n){return Kh({aO:n.aO,dC:n.dC,dD:n.dD,eE:o(mc,ie(n.bH),ie(n.bM))})},eA=$(function(n,e){return{$:2,a:n,b:e}}),zv=function(n){return{$:0,a:n}},Ua=function(n){var e=n;return e},rA=function(n){var e=n;return e.eV},aA=zv(Ir.a),tA=$(function(n,e){var r=$(function(a,t){var i=t.a,c=t.b;return n(a)?y(o(k,a,i),c):y(i,o(k,a,c))});return m(we,r,y(x,x),e)}),oA=function(n){var e=n;return se({dQ:e.gf,dR:e.b2,dS:0,dT:0,dU:e.gj,dV:e.bO,dW:0,dX:0,dY:e.dj,dZ:e.bI,d_:0,d$:0,d0:e.c9,d1:e.cT,d2:0,d3:0})},iA=cn(function(n,e,r,a,t,i,c,l){var u=o(tA,rA,p([Ua(n),Ua(e),Ua(r),Ua(a)])),v=u.a,f=u.b;if(v.b){var s=un(v,f);if(s.b&&s.b.b&&s.b.b.b&&s.b.b.b.b&&!s.b.b.b.b.b){var g=s.a,d=s.b,h=d.a,b=d.b,_=b.a,S=b.b,A=S.a;return o(eA,o(X,oA,v),{bj:o(Xn,g,h),bU:o(Xn,_,A),bV:o(Xn,t,i),bW:o(Xn,c,l)})}else return aA}else return zv({bj:o(Xn,n,e),bU:o(Xn,r,a),bV:o(Xn,t,i),bW:o(Xn,c,l)})}),cA=$(function(n,e){return yt(iA,n,e,Dn,Dn,Dn,Dn,Dn,Dn)}),lA=$(function(n,e){U2({bH:o(bn,"azimuth for third light",n),aO:Pg(Jh(2e3)),bM:o(bn,"elevation for third light",n),bQ:Lo(100)}),nA({bH:o(bn,"azimuth for fourth light",n),aO:jo,bM:o(bn,"elevation for fourth light",n),dC:Lo(120),dD:Lo(40)});var r=Tn(e.a).cU,a=r.a,t=a.a,i=a.b,c=function(){var s=e.c4;if(s.$===1){var g=s.a.aj,d=s.a.bp,h=o(bn,"duration of step animation",n),b=(n.V-g)/h,_=function(){switch(d){case 0:return y(0,b);case 1:return y(0,-b);case 2:return y(-b,0);default:return y(b,0)}}(),S=_.a,A=_.b;return y(t+S,i+A)}else return y(t,i)}(),l=c.a,u=c.b,v=Bl({aO:qh,bQ:Fl(o(bn,"lumens of following lights",n)),em:{gf:l+.5,gj:u+.5,dj:o(bn,"height of following lights",n)}}),f=Bl({aO:jo,bQ:Fl(o(bn,"lumens of following lights",n)),em:{gf:l-.5,gj:u-.5,dj:o(bn,"height of following lights",n)}});return o(H2,{eM:Yh,eQ:o(Ge,"background color",n),eT:o(m$,n,e),eY:.1,cg:n.cg,fb:Uh(6),fx:o(cA,v,f),bq:n.bq,f5:Oh,gc:jo},e.o.ck?p([o(Tl,n,e),o(mh,n,e),o(Nh,n,e),o(Fh,n,e)]):p([o(Tl,n,e),o(_h,n,e),o(Ah,n,e),o(Hh,n,e),o(zh,n,e)]))}),uA=$(function(n,e){return o(F,x,p([o(Sg,n,e),o(lA,n,e)]))}),$A=function(n){return{$:0,a:n}},vA={$:10},De=$(function(n,e){return o(Ft,p([B("m-1 p-2 rounded bg-black40 hover:bg-black80"),Vt(n)]),p([K(e)]))}),fA=function(n){return o(Qu,p([B("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),p([K(n.o.cl)]))},sA=$(function(n,e){return o(F,x,p([o(De,vA,"Export Levels"),fA(e)]))}),dA={$:11},mA=function(n){return{$:12,a:n}},pA=function(n){return o(lr,"cols",xn(n))},gA=function(n){return o(lr,"rows",xn(n))},bA=ce("textarea"),hA=function(n){return o(bA,p([B("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),gA(150),pA(10),Et(mA),Rt(n.o.cm)]),p([K("todo")]))},AA=$(function(n,e){return o(F,x,p([o(De,dA,"Import Levels"),hA(e)]))}),_A={$:7},wA={$:9},yA={$:6},xA={$:5},SA={$:8},CA=function(n){var e=n;return e.l},PA=function(n){return oe(CA(n))+1},jA=function(n){var e=n;return 1+oe(e.l)+oe(e.q)},LA=function(n){return o(F,x,p([o(F,p([B("text-lg")]),p([K("Level Selection")])),o(ne,x,p([o(De,xA,"<"),o(Ur,p([o(ln,"margin","10px")]),p([K(Vi(p([xn(PA(n.a))," / ",xn(jA(n.a))])))])),o(De,yA,">")])),o(De,_A,"Add level"),o(De,SA,"Remove current level"),o(De,wA,"Move level one up")]))},kA=function(n){return{$:2,a:n}},zA={$:3},TA={$:1},MA=function(n){return o(Bt,"mouseenter",dn(n))},DA=function(n){return o(Bt,"mouseleave",dn(n))},FA=$(function(n,e){return o(F,x,p([o(F,p([B("h-40")]),p([o(F,p([B("text-lg")]),p([K("Solution Calculator")])),o(De,TA,"Calculate all solutions"),o(F,x,o(Pt,$(function(r,a){return o(F,p([B("m-2 p-2 w-24 bg-black60 hover:bg-black cursor-crosshair"),MA(kA(a)),DA(zA)]),p([K("Solution "+xn(r))]))}),Tn(e.a).dn))]))]))}),BA=$(function(n,e){return e.o.ck?o(F,x,p([o(F,p([B("p-4")]),p([o(FA,n,e)])),o(F,p([B("p-4 border-[0.5px] border-white20")]),p([LA(e)])),o(F,p([B("p-4 border-[0.5px] border-white20")]),p([o(sA,n,e)])),o(F,p([B("p-4 border-[0.5px] border-white20")]),p([o(AA,n,e)]))])):o(F,x,x)}),VA=w(function(n,e,r){return o(F,x,p([o(oa,p([B("align-bottom"),ia("checkbox"),aa(r),vt(r),Ju(n),Gu(e)]),x),o($t,p([B("pl-2 font-bold"),lt(r)]),p([K(r)]))]))}),EA=$(function(n,e){return o(F,p([B("w-[300px] overflow-y-scroll text-xs bg-black20"),o(ln,"height",yn(n.bq.fk-140)+"px")]),p([o(F,p([B("m-4")]),p([m(VA,$A,e.o.ck,"Editor")])),o(BA,n,e)]))}),RA=mn($1,uA,Zp,S1,_1,EA,xg);const WA={Main:{init:RA(o(M,function(n){return dn({fr:n})},o(L,"inputs",o(M,function(n){return o(M,function(e){return o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return dn({V:c,cg:i,e6:t,dH:a,cV:r,bq:e,gb:n})},o(L,"clock",_n))},o(L,"devicePixelRatio",_n))},o(L,"dt",_n))},o(L,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(f){return o(M,function(s){return dn({eL:s,e_:f,ci:v,e5:u,dI:l,fM:c,et:i,fV:t,dc:a})},o(L,"alt",rn))},o(L,"control",rn))},o(L,"down",rn))},o(L,"downs",Ne(tr)))},o(L,"left",rn))},o(L,"pressedKeys",Ne(tr)))},o(L,"right",rn))},o(L,"shift",rn))},o(L,"up",rn))))},o(L,"pointer",o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return dn({ci:v,dE:u,fA:l,fR:c,fS:i,dc:t,gf:a,gj:r})},o(L,"down",rn))},o(L,"isDown",rn))},o(L,"move",rn))},o(L,"rightDown",rn))},o(L,"rightUp",rn))},o(L,"up",rn))},o(L,"x",_n))},o(L,"y",_n))))},o(L,"screen",o(M,function(e){return o(M,function(r){return dn({fk:r,gd:e})},o(L,"height",_n))},o(L,"width",_n))))},o(L,"wheel",o(M,function(n){return o(M,function(e){return dn({e0:e,e1:n})},o(L,"deltaX",_n))},o(L,"deltaY",_n)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},NA=n=>{const e=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),r=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),t=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function f(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function s(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),e(d)&&(R.keyboard.control=!0),r(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),t(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(h=>h!=d.code),e(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),r(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),t(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{f(R)}),window.addEventListener("focus",d=>{f(R)}),window.addEventListener("visibilitychange",d=>{f(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(d){const h=d/1e3,b=h-R.clock;b<.009||(R.dt=b,R.clock=h,n.ports.tick.send(R),s(R)),window.requestAnimationFrame(g)}},HA=()=>{ko("pointerdown"),ko("wheel"),ko("keydown")},ko=n=>{document.addEventListener(n,function(e){var r;e.target&&((r=document.querySelector("#gui"))==null?void 0:r.contains(e.target))&&e.stopPropagation()},!0)},GA=WA.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});HA();NA(GA);
