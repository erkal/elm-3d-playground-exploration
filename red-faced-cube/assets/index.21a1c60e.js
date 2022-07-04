const Fv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}};Fv();function Ue(n,e,r){return r.a=n,r.f=e,r}function $(n){return Ue(2,n,function(e){return function(r){return n(e,r)}})}function w(n){return Ue(3,n,function(e){return function(r){return function(a){return n(e,r,a)}}})}function V(n){return Ue(4,n,function(e){return function(r){return function(a){return function(t){return n(e,r,a,t)}}}})}function xn(n){return Ue(5,n,function(e){return function(r){return function(a){return function(t){return function(i){return n(e,r,a,t,i)}}}}})}function Yn(n){return Ue(6,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return n(e,r,a,t,i,c)}}}}}})}function _t(n){return Ue(7,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return n(e,r,a,t,i,c,l)}}}}}}})}function cn(n){return Ue(8,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return n(e,r,a,t,i,c,l,u)}}}}}}}})}function ci(n){return Ue(9,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return n(e,r,a,t,i,c,l,u,v)}}}}}}}}})}function o(n,e,r){return n.a===2?n.f(e,r):n(e)(r)}function m(n,e,r,a){return n.a===3?n.f(e,r,a):n(e)(r)(a)}function j(n,e,r,a,t){return n.a===4?n.f(e,r,a,t):n(e)(r)(a)(t)}function C(n,e,r,a,t,i){return n.a===5?n.f(e,r,a,t,i):n(e)(r)(a)(t)(i)}function mn(n,e,r,a,t,i,c){return n.a===6?n.f(e,r,a,t,i,c):n(e)(r)(a)(t)(i)(c)}function li(n,e,r,a,t,i,c,l){return n.a===7?n.f(e,r,a,t,i,c,l):n(e)(r)(a)(t)(i)(c)(l)}function wt(n,e,r,a,t,i,c,l,u){return n.a===8?n.f(e,r,a,t,i,c,l,u):n(e)(r)(a)(t)(i)(c)(l)(u)}function Bv(n,e,r,a,t,i,c,l,u,v){return n.a===9?n.f(e,r,a,t,i,c,l,u,v):n(e)(r)(a)(t)(i)(c)(l)(u)(v)}var Vv=[];function Ev(n){return n.length}var Rv=w(function(n,e,r){for(var a=new Array(n),t=0;t<n;t++)a[t]=r(e+t);return a}),Wv=$(function(n,e){for(var r=new Array(n),a=0;a<n&&e.b;a++)r[a]=e.a,e=e.b;return r.length=a,y(r,e)}),Nv=$(function(n,e){return e[n]});w(function(n,e,r){for(var a=r.length,t=new Array(a),i=0;i<a;i++)t[i]=r[i];return t[n]=e,t});$(function(n,e){for(var r=e.length,a=new Array(r+1),t=0;t<r;t++)a[t]=e[t];return a[r]=n,a});w(function(n,e,r){for(var a=r.length,t=0;t<a;t++)e=o(n,r[t],e);return e});var Hv=w(function(n,e,r){for(var a=r.length-1;a>=0;a--)e=o(n,r[a],e);return e});$(function(n,e){for(var r=e.length,a=new Array(r),t=0;t<r;t++)a[t]=n(e[t]);return a});w(function(n,e,r){for(var a=r.length,t=new Array(a),i=0;i<a;i++)t[i]=o(n,e+i,r[i]);return t});w(function(n,e,r){return r.slice(n,e)});w(function(n,e,r){var a=e.length,t=n-a;t>r.length&&(t=r.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=e[l];for(var l=0;l<t;l++)c[l+a]=r[l];return c});$(function(n,e){return e});$(function(n,e){return console.log(n+": "+Gv()),e});function Gv(n){return"<internals>"}function jr(n){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function tn(n,e){for(var r,a=[],t=ko(n,e,0,a);t&&(r=a.pop());t=ko(r.a,r.b,0,a));return t}function ko(n,e,r,a){if(n===e)return!0;if(typeof n!="object"||n===null||e===null)return typeof n=="function"&&jr(5),!1;if(r>100)return a.push(y(n,e)),!0;n.$<0&&(n=Tc(n),e=Tc(e));for(var t in n)if(!ko(n[t],e[t],r+1,a))return!1;return!0}var Uv=$(tn);$(function(n,e){return!tn(n,e)});function Z(n,e,r){if(typeof n!="object")return n===e?0:n<e?-1:1;if(typeof n.$=="undefined")return(r=Z(n.a,e.a))||(r=Z(n.b,e.b))?r:Z(n.c,e.c);for(;n.b&&e.b&&!(r=Z(n.a,e.a));n=n.b,e=e.b);return r||(n.b?1:e.b?-1:0)}$(function(n,e){return Z(n,e)<0});$(function(n,e){return Z(n,e)<1});$(function(n,e){return Z(n,e)>0});$(function(n,e){return Z(n,e)>=0});var Iv=$(function(n,e){var r=Z(n,e);return r<0?lu:r?Wd:cu}),va=0;function y(n,e){return{a:n,b:e}}function T(n,e,r){return{a:n,b:e,c:r}}function W(n,e){var r={};for(var a in n)r[a]=n[a];for(var a in e)r[a]=e[a];return r}$(un);function un(n,e){if(typeof n=="string")return n+e;if(!n.b)return e;var r=be(n.a,e);n=n.b;for(var a=r;n.b;n=n.b)a=a.b=be(n.a,e);return r}var S={$:0};function be(n,e){return{$:1,a:n,b:e}}var Ov=$(be);function g(n){for(var e=S,r=n.length;r--;)e=be(n[r],e);return e}function yt(n){for(var e=[];n.b;n=n.b)e.push(n.a);return e}var Jv=w(function(n,e,r){for(var a=[];e.b&&r.b;e=e.b,r=r.b)a.push(o(n,e.a,r.a));return g(a)});V(function(n,e,r,a){for(var t=[];e.b&&r.b&&a.b;e=e.b,r=r.b,a=a.b)t.push(m(n,e.a,r.a,a.a));return g(t)});xn(function(n,e,r,a,t){for(var i=[];e.b&&r.b&&a.b&&t.b;e=e.b,r=r.b,a=a.b,t=t.b)i.push(j(n,e.a,r.a,a.a,t.a));return g(i)});Yn(function(n,e,r,a,t,i){for(var c=[];e.b&&r.b&&a.b&&t.b&&i.b;e=e.b,r=r.b,a=a.b,t=t.b,i=i.b)c.push(C(n,e.a,r.a,a.a,t.a,i.a));return g(c)});$(function(n,e){return g(yt(e).sort(function(r,a){return Z(n(r),n(a))}))});$(function(n,e){return g(yt(e).sort(function(r,a){var t=o(n,r,a);return t===cu?0:t===lu?-1:1}))});$(function(n,e){return n+e});$(function(n,e){return n-e});$(function(n,e){return n*e});$(function(n,e){return n/e});$(function(n,e){return n/e|0});var qv=$(Math.pow);$(function(n,e){return e%n});var Yv=$(function(n,e){var r=e%n;return n===0?jr(11):r>0&&n<0||r<0&&n>0?r+n:r}),Zv=Math.PI,Xv=Math.cos,Qv=Math.sin,Kv=Math.tan;$(Math.atan2);function nf(n){return n}function ef(n){return n===1/0||n===-1/0}var rf=Math.ceil,af=Math.floor,tf=Math.round,of=Math.sqrt,bc=Math.log,cf=isNaN;function lf(n){return!n}$(function(n,e){return n&&e});$(function(n,e){return n||e});$(function(n,e){return n!==e});var uf=$(function(n,e){return n+e});function $f(n){var e=n.charCodeAt(0);return isNaN(e)?J:U(55296<=e&&e<=56319?y(n[0]+n[1],n.slice(2)):y(n[0],n.slice(1)))}$(function(n,e){return n+e});function vf(n){return n.length}$(function(n,e){for(var r=e.length,a=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=n(e[t]+e[t+1]),t+=2;continue}a[t]=n(e[t]),t++}return a.join("")});$(function(n,e){for(var r=[],a=e.length,t=0;t<a;){var i=e[t],c=e.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=e[t],t++),n(i)&&r.push(i)}return r.join("")});function ff(n){for(var e=n.length,r=new Array(e),a=0;a<e;){var t=n.charCodeAt(a);55296<=t&&t<=56319?(r[e-a]=n[a+1],a++,r[e-a]=n[a-1],a++):(r[e-a]=n[a],a++)}return r.join("")}w(function(n,e,r){for(var a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e=o(n,i,e)}return e});var sf=w(function(n,e,r){for(var a=r.length;a--;){var t=r[a],i=r.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=r[a]+t),e=o(n,t,e)}return e}),df=$(function(n,e){return e.split(n)}),mf=$(function(n,e){return e.join(n)}),pf=w(function(n,e,r){return r.slice(n,e)});function gf(n){return n.toLowerCase()}$(function(n,e){for(var r=e.length;r--;){var a=e[r],t=e.charCodeAt(r);if(56320<=t&&t<=57343&&(r--,a=e[r]+a),n(a))return!0}return!1});var bf=$(function(n,e){for(var r=e.length;r--;){var a=e[r],t=e.charCodeAt(r);if(56320<=t&&t<=57343&&(r--,a=e[r]+a),!n(a))return!1}return!0}),hf=$(function(n,e){return e.indexOf(n)>-1}),Af=$(function(n,e){return e.indexOf(n)===0});$(function(n,e){return e.length>=n.length&&e.lastIndexOf(n)===e.length-n.length});var _f=$(function(n,e){var r=n.length;if(r<1)return S;for(var a=0,t=[];(a=e.indexOf(n,a))>-1;)t.push(a),a=a+r;return g(t)});function Bl(n){return n+""}function wf(n){for(var e=0,r=n.charCodeAt(0),a=r==43||r==45?1:0,t=a;t<n.length;++t){var i=n.charCodeAt(t);if(i<48||57<i)return J;e=10*e+i-48}return t==a?J:U(r==45?-e:e)}function yf(n){if(n.length===0||/[\sxbo]/.test(n))return J;var e=+n;return e===e?U(e):J}function xf(n){return yt(n).join("")}function Sf(n){var e=n.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+n.charCodeAt(1)-56320+65536:e}function Cf(n){return n<0||1114111<n?"\uFFFD":n<=65535?String.fromCharCode(n):(n-=65536,String.fromCharCode(Math.floor(n/1024)+55296,n%1024+56320))}function Pf(n){return{$:0,a:n}}function jf(n){return{$:1,a:n}}function xt(n){return{$:2,b:n}}var Lf=xt(function(n){return typeof n!="number"?Kn("an INT",n):-2147483647<n&&n<2147483647&&(n|0)===n||isFinite(n)&&!(n%1)?fn(n):Kn("an INT",n)}),kf=xt(function(n){return typeof n=="boolean"?fn(n):Kn("a BOOL",n)}),zf=xt(function(n){return typeof n=="number"?fn(n):Kn("a FLOAT",n)}),Tf=xt(function(n){return typeof n=="string"?fn(n):n instanceof String?fn(n+""):Kn("a STRING",n)});function Mf(n){return{$:3,b:n}}var Df=$(function(n,e){return{$:6,d:n,b:e}});$(function(n,e){return{$:7,e:n,b:e}});function Ie(n,e){return{$:9,f:n,g:e}}var Ff=$(function(n,e){return{$:10,b:e,h:n}}),Bf=$(function(n,e){return Ie(n,[e])}),Vf=w(function(n,e,r){return Ie(n,[e,r])}),Ef=V(function(n,e,r,a){return Ie(n,[e,r,a])});xn(function(n,e,r,a,t){return Ie(n,[e,r,a,t])});var Rf=Yn(function(n,e,r,a,t,i){return Ie(n,[e,r,a,t,i])});_t(function(n,e,r,a,t,i,c){return Ie(n,[e,r,a,t,i,c])});cn(function(n,e,r,a,t,i,c,l){return Ie(n,[e,r,a,t,i,c,l])});ci(function(n,e,r,a,t,i,c,l,u){return Ie(n,[e,r,a,t,i,c,l,u])});var Wf=$(function(n,e){try{var r=JSON.parse(e);return Qn(n,r)}catch(a){return Dn(o(Ai,"This is not valid JSON! "+a.message,e))}}),Vl=$(function(n,e){return Qn(n,e)});function Qn(n,e){switch(n.$){case 2:return n.b(e);case 5:return e===null?fn(n.c):Kn("null",e);case 3:return ja(e)?hc(n.b,e,g):Kn("a LIST",e);case 4:return ja(e)?hc(n.b,e,Nf):Kn("an ARRAY",e);case 6:var r=n.d;if(typeof e!="object"||e===null||!(r in e))return Kn("an OBJECT with a field named `"+r+"`",e);var v=Qn(n.b,e[r]);return le(v)?v:Dn(o(Mc,r,v.a));case 7:var a=n.e;if(!ja(e))return Kn("an ARRAY",e);if(a>=e.length)return Kn("a LONGER array. Need index "+a+" but only see "+e.length+" entries",e);var v=Qn(n.b,e[a]);return le(v)?v:Dn(o(uu,a,v.a));case 8:if(typeof e!="object"||e===null||ja(e))return Kn("an OBJECT",e);var t=S;for(var i in e)if(e.hasOwnProperty(i)){var v=Qn(n.b,e[i]);if(!le(v))return Dn(o(Mc,i,v.a));t=be(y(i,v.a),t)}return fn(kn(t));case 9:for(var c=n.f,l=n.g,u=0;u<l.length;u++){var v=Qn(l[u],e);if(!le(v))return v;c=c(v.a)}return fn(c);case 10:var v=Qn(n.b,e);return le(v)?Qn(n.h(v.a),e):v;case 11:for(var f=S,s=n.g;s.b;s=s.b){var v=Qn(s.a,e);if(le(v))return v;f=be(v.a,f)}return Dn(Nd(kn(f)));case 1:return Dn(o(Ai,n.a,e));case 0:return fn(n.a)}}function hc(n,e,r){for(var a=e.length,t=new Array(a),i=0;i<a;i++){var c=Qn(n,e[i]);if(!le(c))return Dn(o(uu,i,c.a));t[i]=c.a}return fn(r(t))}function ja(n){return Array.isArray(n)||typeof FileList!="undefined"&&n instanceof FileList}function Nf(n){return o(nm,n.length,function(e){return n[e]})}function Kn(n,e){return Dn(o(Ai,"Expecting "+n,e))}function pr(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return pr(n.b,e.b);case 6:return n.d===e.d&&pr(n.b,e.b);case 7:return n.e===e.e&&pr(n.b,e.b);case 9:return n.f===e.f&&Ac(n.g,e.g);case 10:return n.h===e.h&&pr(n.b,e.b);case 11:return Ac(n.g,e.g)}}function Ac(n,e){var r=n.length;if(r!==e.length)return!1;for(var a=0;a<r;a++)if(!pr(n[a],e[a]))return!1;return!0}var Hf=$(function(n,e){return JSON.stringify(e,null,n)+""});function ui(n){return n}function Gf(){return[]}function Uf(){return{}}var If=w(function(n,e,r){return r[n]=e,r});function Of(n){return $(function(e,r){return r.push(n(e)),r})}function ir(n){return{$:0,a:n}}function Jf(n){return{$:1,a:n}}function je(n){return{$:2,b:n,c:null}}var zo=$(function(n,e){return{$:3,b:n,d:e}});$(function(n,e){return{$:4,b:n,d:e}});function qf(n){return{$:5,b:n}}var Yf=0;function $i(n){var e={$:0,e:Yf++,f:n,g:null,h:[]};return vi(e),e}function El(n){return je(function(e){e(ir($i(n)))})}function Rl(n,e){n.h.push(e),vi(n)}var Zf=$(function(n,e){return je(function(r){Rl(n,e),r(ir(va))})}),ao=!1,_c=[];function vi(n){if(_c.push(n),!ao){for(ao=!0;n=_c.shift();)Xf(n);ao=!1}}function Xf(n){for(;n.f;){var e=n.f.$;if(e===0||e===1){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else if(e===2){n.f.c=n.f.b(function(r){n.f=r,vi(n)});return}else if(e===5){if(n.h.length===0)return;n.f=n.f.b(n.h.shift())}else n.g={$:e===3?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}V(function(n,e,r,a){return fi(e,a,n.fq,n.f7,n.f$,function(){return function(){}})});function fi(n,e,r,a,t,i){var c=o(Vl,n,e?e.flags:void 0);le(c)||jr(2);var l={},u=r(c.a),v=u.a,f=i(p,v),s=Qf(l,p);function p(d,h){var b=o(a,d,v);f(v=b.a,h),yc(l,b.b,t(v))}return yc(l,u.b,t(v)),s?{ports:s}:{}}var se={};function Qf(n,e){var r;for(var a in se){var t=se[a];t.a&&(r=r||{},r[a]=t.a(a,e)),n[a]=ns(t,e)}return r}function Kf(n,e,r,a,t){return{b:n,c:e,d:r,e:a,f:t}}function ns(n,e){var r={g:e,h:void 0},a=n.c,t=n.d,i=n.e,c=n.f;function l(u){return o(zo,l,qf(function(v){var f=v.a;return v.$===0?m(t,r,f,u):i&&c?j(a,r,f.i,f.j,u):m(a,r,i?f.i:f.j,u)}))}return r.h=$i(o(zo,l,n.b))}var es=$(function(n,e){return je(function(r){n.g(e),r(ir(va))})});$(function(n,e){return o(Zf,n.h,{$:0,a:e})});function Wl(n){return function(e){return{$:1,k:n,l:e}}}function rs(n){return{$:2,m:n}}$(function(n,e){return{$:3,n,o:e}});var wc=[],to=!1;function yc(n,e,r){if(wc.push({p:n,q:e,r}),!to){to=!0;for(var a;a=wc.shift();)as(a.p,a.q,a.r);to=!1}}function as(n,e,r){var a={};Qa(!0,e,a,null),Qa(!1,r,a,null);for(var t in n)Rl(n[t],{$:"fx",a:a[t]||{i:S,j:S}})}function Qa(n,e,r,a){switch(e.$){case 1:var t=e.k,i=ts(n,t,a,e.l);r[t]=os(n,i,r[t]);return;case 2:for(var c=e.m;c.b;c=c.b)Qa(n,c.a,r,a);return;case 3:Qa(n,e.o,r,{s:e.n,t:a});return}}function ts(n,e,r,a){function t(c){for(var l=r;l;l=l.t)c=l.s(c);return c}var i=n?se[e].e:se[e].f;return o(i,t,a)}function os(n,e,r){return r=r||{i:S,j:S},n?r.i=be(e,r.i):r.j=be(e,r.j),r}function is(n){se[n]&&jr(3)}$(function(n,e){return e});function cs(n,e){return is(n),se[n]={f:ls,u:e,a:us},Wl(n)}var ls=$(function(n,e){return function(r){return n(e(r))}});function us(n,e){var r=S,a=se[n].u,t=ir(null);se[n].b=t,se[n].c=w(function(c,l,u){return r=l,t});function i(c){var l=o(Vl,a,c);le(l)||jr(4,n,l.a);for(var u=l.a,v=r;v.b;v=v.b)e(v.a(u))}return{send:i}}var Ka,xe=typeof document!="undefined"?document:{};function si(n,e){n.appendChild(e)}V(function(n,e,r,a){var t=a.node;return t.parentNode.replaceChild(Fe(n,function(){}),t),{}});function To(n){return{$:0,a:n}}var Nl=$(function(n,e){return $(function(r,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:e,d:di(r),e:t,f:n,b:i}})}),ie=Nl(void 0),$s=$(function(n,e){return $(function(r,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:e,d:di(r),e:t,f:n,b:i}})}),vs=$s(void 0);function fs(n,e,r,a){return{$:3,d:di(n),g:e,h:r,i:a}}var ss=$(function(n,e){return{$:4,j:n,k:e,b:1+(e.b||0)}});function Oe(n,e){return{$:5,l:n,m:e,k:void 0}}$(function(n,e){return Oe([n,e],function(){return n(e)})});w(function(n,e,r){return Oe([n,e,r],function(){return o(n,e,r)})});V(function(n,e,r,a){return Oe([n,e,r,a],function(){return m(n,e,r,a)})});xn(function(n,e,r,a,t){return Oe([n,e,r,a,t],function(){return j(n,e,r,a,t)})});Yn(function(n,e,r,a,t,i){return Oe([n,e,r,a,t,i],function(){return C(n,e,r,a,t,i)})});_t(function(n,e,r,a,t,i,c){return Oe([n,e,r,a,t,i,c],function(){return mn(n,e,r,a,t,i,c)})});cn(function(n,e,r,a,t,i,c,l){return Oe([n,e,r,a,t,i,c,l],function(){return li(n,e,r,a,t,i,c,l)})});ci(function(n,e,r,a,t,i,c,l,u){return Oe([n,e,r,a,t,i,c,l,u],function(){return wt(n,e,r,a,t,i,c,l,u)})});var Hl=$(function(n,e){return{$:"a0",n,o:e}}),ds=$(function(n,e){return{$:"a1",n,o:e}}),Gl=$(function(n,e){return{$:"a2",n,o:e}}),cr=$(function(n,e){return{$:"a3",n,o:e}});w(function(n,e,r){return{$:"a4",n:e,o:{f:n,o:r}}});function ms(n){return n=="script"?"p":n}function ps(n){return/^javascript:/i.test(n.replace(/\s/g,""))?"":n}$(function(n,e){return e.$==="a0"?o(Hl,e.n,gs(n,e.o)):e});function gs(n,e){var r=Si(e);return{$:e.$,a:r?m(fa,r<3?bs:hs,dn(n),e.a):o(at,n,e.a)}}var bs=$(function(n,e){return y(n(e.a),e.b)}),hs=$(function(n,e){return{aq:n(e.aq),c6:e.c6,cW:e.cW}});function di(n){for(var e={};n.b;n=n.b){var r=n.a,a=r.$,t=r.n,i=r.o;if(a==="a2"){t==="className"?xc(e,t,i):e[t]=i;continue}var c=e[a]||(e[a]={});a==="a3"&&t==="class"?xc(c,t,i):c[t]=i}return e}function xc(n,e,r){var a=n[e];n[e]=a?a+" "+r:r}function Fe(n,e){var r=n.$;if(r===5)return Fe(n.k||(n.k=n.m()),e);if(r===0)return xe.createTextNode(n.a);if(r===4){for(var a=n.k,t=n.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:e},c=Fe(a,i);return c.elm_event_node_ref=i,c}if(r===3){var c=n.h(n.g);return Mo(c,e,n.d),c}var c=n.f?xe.createElementNS(n.f,n.c):xe.createElement(n.c);Ka&&n.c=="a"&&c.addEventListener("click",Ka(c)),Mo(c,e,n.d);for(var l=n.e,u=0;u<l.length;u++)si(c,Fe(r===1?l[u]:l[u].b,e));return c}function Mo(n,e,r){for(var a in r){var t=r[a];a==="a1"?As(n,t):a==="a0"?ys(n,e,t):a==="a3"?_s(n,t):a==="a4"?ws(n,t):(a!=="value"&&a!=="checked"||n[a]!==t)&&(n[a]=t)}}function As(n,e){var r=n.style;for(var a in e)r[a]=e[a]}function _s(n,e){for(var r in e){var a=e[r];typeof a!="undefined"?n.setAttribute(r,a):n.removeAttribute(r)}}function ws(n,e){for(var r in e){var a=e[r],t=a.f,i=a.o;typeof i!="undefined"?n.setAttributeNS(t,r,i):n.removeAttributeNS(t,r)}}function ys(n,e,r){var a=n.elmFs||(n.elmFs={});for(var t in r){var i=r[t],c=a[t];if(!i){n.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}n.removeEventListener(t,c)}c=xs(e,i),n.addEventListener(t,c,mi&&{passive:Si(i)<2}),a[t]=c}}var mi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){mi=!0}}))}catch{}function xs(n,e){function r(a){var t=r.q,i=Qn(t.a,a);if(!!le(i)){for(var c=Si(t),l=i.a,u=c?c<3?l.a:l.aq:l,v=c==1?l.b:c==3&&l.c6,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),n),s,p;s=f.j;){if(typeof s=="function")u=s(u);else for(var p=s.length;p--;)u=s[p](u);f=f.p}f(u,v)}}return r.q=e,r}function Ss(n,e){return n.$==e.$&&pr(n.a,e.a)}function Ul(n,e){var r=[];return ue(n,e,r,0),r}function Tn(n,e,r,a){var t={$:e,r,s:a,t:void 0,u:void 0};return n.push(t),t}function ue(n,e,r,a){if(n!==e){var t=n.$,i=e.$;if(t!==i)if(t===1&&i===2)e=Ms(e),i=1;else{Tn(r,0,a,e);return}switch(i){case 5:for(var c=n.l,l=e.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){e.k=n.k;return}e.k=e.m();var f=[];ue(n.k,e.k,f,0),f.length>0&&Tn(r,1,a,f);return;case 4:for(var s=n.j,p=e.j,d=!1,h=n.k;h.$===4;)d=!0,typeof s!="object"?s=[s,h.j]:s.push(h.j),h=h.k;for(var b=e.k;b.$===4;)d=!0,typeof p!="object"?p=[p,b.j]:p.push(b.j),b=b.k;if(d&&s.length!==p.length){Tn(r,0,a,e);return}(d?!Cs(s,p):s!==p)&&Tn(r,2,a,p),ue(h,b,r,a+1);return;case 0:n.a!==e.a&&Tn(r,3,a,e.a);return;case 1:Sc(n,e,r,a,Ps);return;case 2:Sc(n,e,r,a,js);return;case 3:if(n.h!==e.h){Tn(r,0,a,e);return}var _=pi(n.d,e.d);_&&Tn(r,4,a,_);var x=e.i(n.g,e.g);x&&Tn(r,5,a,x);return}}}function Cs(n,e){for(var r=0;r<n.length;r++)if(n[r]!==e[r])return!1;return!0}function Sc(n,e,r,a,t){if(n.c!==e.c||n.f!==e.f){Tn(r,0,a,e);return}var i=pi(n.d,e.d);i&&Tn(r,4,a,i),t(n,e,r,a)}function pi(n,e,r){var a;for(var t in n){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=pi(n[t],e[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in e)){a=a||{},a[t]=r?r==="a1"?"":r==="a0"||r==="a3"?void 0:{f:n[t].f,o:void 0}:typeof n[t]=="string"?"":null;continue}var c=n[t],l=e[t];c===l&&t!=="value"&&t!=="checked"||r==="a0"&&Ss(c,l)||(a=a||{},a[t]=l)}for(var u in e)u in n||(a=a||{},a[u]=e[u]);return a}function Ps(n,e,r,a){var t=n.e,i=e.e,c=t.length,l=i.length;c>l?Tn(r,6,a,{v:l,i:c-l}):c<l&&Tn(r,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=t[v];ue(f,i[v],r,++a),a+=f.b||0}}function js(n,e,r,a){for(var t=[],i={},c=[],l=n.e,u=e.e,v=l.length,f=u.length,s=0,p=0,d=a;s<v&&p<f;){var h=l[s],b=u[p],_=h.a,x=b.a,A=h.b,P=b.b,D=void 0,I=void 0;if(_===x){d++,ue(A,P,t,d),d+=A.b||0,s++,p++;continue}var H=l[s+1],N=u[p+1];if(H){var G=H.a,O=H.b;I=x===G}if(N){var E=N.a,nn=N.b;D=_===E}if(D&&I){d++,ue(A,nn,t,d),Er(i,t,_,P,p,c),d+=A.b||0,d++,Rr(i,t,_,O,d),d+=O.b||0,s+=2,p+=2;continue}if(D){d++,Er(i,t,x,P,p,c),ue(A,nn,t,d),d+=A.b||0,s+=1,p+=2;continue}if(I){d++,Rr(i,t,_,A,d),d+=A.b||0,d++,ue(O,P,t,d),d+=O.b||0,s+=2,p+=1;continue}if(H&&G===E){d++,Rr(i,t,_,A,d),Er(i,t,x,P,p,c),d+=A.b||0,d++,ue(O,nn,t,d),d+=O.b||0,s+=2,p+=2;continue}break}for(;s<v;){d++;var h=l[s],A=h.b;Rr(i,t,h.a,A,d),d+=A.b||0,s++}for(;p<f;){var an=an||[],b=u[p];Er(i,t,b.a,b.b,void 0,an),p++}(t.length>0||c.length>0||an)&&Tn(r,8,a,{w:t,x:c,y:an})}var Il="_elmW6BL";function Er(n,e,r,a,t,i){var c=n[r];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),n[r]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Er(n,e,r+Il,a,t,i)}function Rr(n,e,r,a,t){var i=n[r];if(!i){var c=Tn(e,9,t,void 0);n[r]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];ue(a,i.z,l,t),Tn(e,9,t,{w:l,A:i});return}Rr(n,e,r+Il,a,t)}function Ol(n,e,r,a){Wr(n,e,r,0,0,e.b,a)}function Wr(n,e,r,a,t,i,c){for(var l=r[a],u=l.r;u===t;){var v=l.$;if(v===1)Ol(n,e.k,l.s,c);else if(v===8){l.t=n,l.u=c;var f=l.s.w;f.length>0&&Wr(n,e,f,0,t,i,c)}else if(v===9){l.t=n,l.u=c;var s=l.s;if(s){s.A.s=n;var f=s.w;f.length>0&&Wr(n,e,f,0,t,i,c)}}else l.t=n,l.u=c;if(a++,!(l=r[a])||(u=l.r)>i)return a}var p=e.$;if(p===4){for(var d=e.k;d.$===4;)d=d.k;return Wr(n,d,r,a,t+1,i,n.elm_event_node_ref)}for(var h=e.e,b=n.childNodes,_=0;_<h.length;_++){t++;var x=p===1?h[_]:h[_].b,A=t+(x.b||0);if(t<=u&&u<=A&&(a=Wr(b[_],x,r,a,t,A,c),!(l=r[a])||(u=l.r)>i))return a;t=A}return a}function Jl(n,e,r,a){return r.length===0?n:(Ol(n,e,r,a),nt(n,r))}function nt(n,e){for(var r=0;r<e.length;r++){var a=e[r],t=a.t,i=Ls(t,a);t===n&&(n=i)}return n}function Ls(n,e){switch(e.$){case 0:return ks(n,e.s,e.u);case 4:return Mo(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return nt(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var i=e.s,a=0;a<i.i;a++)n.removeChild(n.childNodes[i.v]);return n;case 7:for(var i=e.s,r=i.e,a=i.v,t=n.childNodes[a];a<r.length;a++)n.insertBefore(Fe(r[a],e.u),t);return n;case 9:var i=e.s;if(!i)return n.parentNode.removeChild(n),n;var c=i.A;return typeof c.r!="undefined"&&n.parentNode.removeChild(n),c.s=nt(n,i.w),n;case 8:return zs(n,e);case 5:return e.s(n);default:jr(10)}}function ks(n,e,r){var a=n.parentNode,t=Fe(e,r);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),a&&t!==n&&a.replaceChild(t,n),t}function zs(n,e){var r=e.s,a=Ts(r.y,e);n=nt(n,r.w);for(var t=r.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Fe(l.z,e.u);n.insertBefore(u,n.childNodes[c.r])}return a&&si(n,a),n}function Ts(n,e){if(!!n){for(var r=xe.createDocumentFragment(),a=0;a<n.length;a++){var t=n[a],i=t.A;si(r,i.c===2?i.s:Fe(i.z,e.u))}return r}}function gi(n){if(n.nodeType===3)return To(n.textContent);if(n.nodeType!==1)return To("");for(var e=S,r=n.attributes,a=r.length;a--;){var t=r[a],i=t.name,c=t.value;e=be(o(cr,i,c),e)}for(var l=n.tagName.toLowerCase(),u=S,v=n.childNodes,a=v.length;a--;)u=be(gi(v[a]),u);return m(ie,l,e,u)}function Ms(n){for(var e=n.e,r=e.length,a=new Array(r),t=0;t<r;t++)a[t]=e[t].b;return{$:1,c:n.c,d:n.d,e:a,f:n.f,b:n.b}}var Ds=V(function(n,e,r,a){return fi(e,a,n.fq,n.f7,n.f$,function(t,i){var c=n.ga,l=a.node,u=gi(l);return ql(i,function(v){var f=c(v),s=Ul(u,f);l=Jl(l,u,s,t),u=f})})});V(function(n,e,r,a){return fi(e,a,n.fq,n.f7,n.f$,function(t,i){var c=n.c2&&n.c2(t),l=n.ga,u=xe.title,v=xe.body,f=gi(v);return ql(i,function(s){Ka=c;var p=l(s),d=ie("body")(S)(p.eS),h=Ul(f,d);v=Jl(v,f,h,t),f=d,Ka=0,u!==p.f4&&(xe.title=u=p.f4)})})});var et=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function ql(n,e){e(n);var r=0;function a(){r=r===1?0:(et(a),e(n),1)}return function(t,i){n=t,i?(e(n),r===2&&(r=1)):(r===0&&et(a),r=2)}}$(function(n,e){return o(ji,Ci,je(function(){e&&history.go(e),n()}))});$(function(n,e){return o(ji,Ci,je(function(){history.pushState({},"",e),n()}))});$(function(n,e){return o(ji,Ci,je(function(){history.replaceState({},"",e),n()}))});var Fs={addEventListener:function(){},removeEventListener:function(){}},Bs=typeof window!="undefined"?window:Fs;w(function(n,e,r){return El(je(function(a){function t(i){$i(r(i))}return n.addEventListener(e,t,mi&&{passive:!0}),function(){n.removeEventListener(e,t)}}))});$(function(n,e){var r=Qn(n,e);return le(r)?U(r.a):J});function Yl(n,e){return je(function(r){et(function(){var a=document.getElementById(n);r(a?ir(e(a)):Jf(rm(n)))})})}function Vs(n){return je(function(e){et(function(){e(ir(n()))})})}$(function(n,e){return Yl(e,function(r){return r[n](),va})});$(function(n,e){return Vs(function(){return Bs.scroll(n,e),va})});w(function(n,e,r){return Yl(n,function(a){return a.scrollLeft=e,a.scrollTop=r,va})});$(function(n,e){return n&e});$(function(n,e){return n|e});$(function(n,e){return n^e});$(function(n,e){return e<<n});$(function(n,e){return e>>n});$(function(n,e){return e>>>n});var Es=$(function(n,e){var r="g";n.fB&&(r+="m"),n.eU&&(r+="i");try{return U(new RegExp(e,r))}catch{return J}});$(function(n,e){return e.match(n)!==null});var Rs=w(function(n,e,r){for(var a=[],t=0,i=r,c=e.lastIndex,l=-1,u;t++<n&&(u=e.exec(i))&&l!=e.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var s=u[v];f[--v]=s?U(s):J}a.push(j(Uu,u[0],u.index,t,g(f))),l=e.lastIndex}return e.lastIndex=c,g(a)});V(function(n,e,r,a){var t=0;function i(c){if(t++>=n)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?U(v):J}return r(j(Uu,c,arguments[arguments.length-2],t,g(u)))}return a.replace(e,i)});w(function(n,e,r){for(var a=r,t=[],i=e.lastIndex,c=e.lastIndex;n--;){var l=e.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=e.lastIndex}return t.push(a.slice(i)),e.lastIndex=c,g(t)});var Cc=0;function Kr(n,e){for(;e.b;e=e.b)n(e.a)}function bi(n){for(var e=0;n.b;n=n.b)e++;return e}var Ws=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){setTimeout(n,1e3/60)},Ns=xn(function(n,e,r,a,t){return{$:0,a:n,b:e,c:r,d:a,e:t}}),Hs=$(function(n,e){var r=n.blend;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.BLEND),r.enabled=!0),(r.a!==e.a||r.d!==e.d)&&(n.gl.blendEquationSeparate(e.a,e.d),r.a=e.a,r.d=e.d),(r.b!==e.b||r.c!==e.c||r.e!==e.e||r.f!==e.f)&&(n.gl.blendFuncSeparate(e.b,e.c,e.e,e.f),r.b=e.b,r.c=e.c,r.e=e.e,r.f=e.f),(r.g!==e.g||r.h!==e.h||r.i!==e.i||r.j!==e.j)&&(n.gl.blendColor(e.g,e.h,e.i,e.j),r.g=e.g,r.h=e.h,r.i=e.i,r.j=e.j)}),Gs=$(function(n,e){var r=n.depthTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.DEPTH_TEST),r.enabled=!0),r.a!==e.a&&(n.gl.depthFunc(e.a),r.a=e.a),r.b!==e.b&&(n.gl.depthMask(e.b),r.b=e.b),(r.c!==e.c||r.d!==e.d)&&(n.gl.depthRange(e.c,e.d),r.c=e.c,r.d=e.d)}),Us=$(function(n,e){var r=n.stencilTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.STENCIL_TEST),r.enabled=!0),(r.d!==e.d||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.FRONT,e.d,e.a,e.b),r.d=e.d),(r.e!==e.e||r.f!==e.f||r.g!==e.g)&&(n.gl.stencilOpSeparate(n.gl.FRONT,e.e,e.f,e.g),r.e=e.e,r.f=e.f,r.g=e.g),r.c!==e.c&&(n.gl.stencilMask(e.c),r.c=e.c),(r.h!==e.h||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.BACK,e.h,e.a,e.b),r.h=e.h,r.a=e.a,r.b=e.b),(r.i!==e.i||r.j!==e.j||r.k!==e.k)&&(n.gl.stencilOpSeparate(n.gl.BACK,e.i,e.j,e.k),r.i=e.i,r.j=e.j,r.k=e.k)}),Is=$(function(n,e){var r=n.scissor;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SCISSOR_TEST),r.enabled=!0),(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.scissor(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),Os=$(function(n,e){var r=n.colorMask;r.toggle=n.toggle,r.enabled=!0,(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.colorMask(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),Js=$(function(n,e){var r=n.cullFace;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.CULL_FACE),r.enabled=!0),r.a!==e.a&&(n.gl.cullFace(e.a),r.a=e.a)}),qs=$(function(n,e){var r=n.polygonOffset;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.POLYGON_OFFSET_FILL),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.polygonOffset(e.a,e.b),r.a=e.a,r.b=e.b)}),Ys=$(function(n,e){var r=n.sampleCoverage;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SAMPLE_COVERAGE),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.sampleCoverage(e.a,e.b),r.a=e.a,r.b=e.b)}),Zs=function(n){var e=n.sampleAlphaToCoverage;e.toggle=n.toggle,e.enabled||(n.gl.enable(n.gl.SAMPLE_ALPHA_TO_COVERAGE),e.enabled=!0)},Xs=function(n){n.blend.enabled&&(n.gl.disable(n.gl.BLEND),n.blend.enabled=!1)},Qs=function(n){n.depthTest.enabled&&(n.gl.disable(n.gl.DEPTH_TEST),n.depthTest.enabled=!1)},Ks=function(n){n.stencilTest.enabled&&(n.gl.disable(n.gl.STENCIL_TEST),n.stencilTest.enabled=!1)},Zl=function(n){n.scissor.enabled&&(n.gl.disable(n.gl.SCISSOR_TEST),n.scissor.enabled=!1)},Xl=function(n){var e=n.colorMask;(!e.a||!e.b||!e.c||!e.d)&&(n.gl.colorMask(!0,!0,!0,!0),e.a=!0,e.b=!0,e.c=!0,e.d=!0)},nd=function(n){n.gl.disable(n.gl.CULL_FACE)},ed=function(n){n.gl.disable(n.gl.POLYGON_OFFSET_FILL)},rd=function(n){n.gl.disable(n.gl.SAMPLE_COVERAGE)},ad=function(n){n.gl.disable(n.gl.SAMPLE_ALPHA_TO_COVERAGE)},Pc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],td=[Xs,Qs,Ks,Zl,Xl,nd,ed,rd,ad];function jc(n,e,r){var a=n.createShader(r);return n.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+e),n.compileShader(a),a}function od(n,e,r){var a=n.createProgram();if(n.attachShader(a,e),n.attachShader(a,r),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw"Link failed: "+n.getProgramInfoLog(a)+`
vs info-log: `+n.getShaderInfoLog(e)+`
fs info-log: `+n.getShaderInfoLog(r);return a}function Ql(n,e){switch(e){case n.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:n.FLOAT};case n.INT:return{size:1,arraySize:1,type:Int32Array,baseType:n.INT}}}function id(n,e,r,a){for(var t=r.a.ds,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(d,h,b,_,x){var A;if(t===1)for(A=0;A<h;A++)d[b++]=h===1?_[x]:_[x][A];else i.forEach(function(P){for(A=0;A<h;A++)d[b++]=h===1?_[P][x]:_[P][x][A]})}var u=Ql(n,e.type);if(u===void 0)throw new Error("No info available for: "+e.type);var v=0,f=u.size*u.arraySize*t,s=new u.type(bi(r.b)*f);Kr(function(d){l(s,u.size*u.arraySize,v,d,a[e.name]||e.name),v+=f},r.b);var p=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,s,n.STATIC_DRAW),p}function cd(n,e){if(e.a.dB>0){var r=n.createBuffer(),a=ld(e.c,e.a.dB);return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),n.bufferData(n.ELEMENT_ARRAY_BUFFER,a,n.STATIC_DRAW),{numIndices:a.length,indexBuffer:r,buffers:{}}}else return{numIndices:e.a.ds*bi(e.b),indexBuffer:null,buffers:{}}}function ld(n,e){var r=new Uint32Array(bi(n)*e),a=0,t;return Kr(function(i){if(e===1)r[a++]=i;else for(t=0;t<e;t++)r[a++]=i[String.fromCharCode(97+t)]},n),r}function Lc(n,e){return n+"#"+e}var Kl=$(function(n,e){var r=n.f,a=r.gl;if(!a)return e;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),r.depthTest.b||(a.depthMask(!0),r.depthTest.b=!0),r.stencilTest.c!==r.STENCIL_WRITEMASK&&(a.stencilMask(r.STENCIL_WRITEMASK),r.stencilTest.c=r.STENCIL_WRITEMASK),Zl(r),Xl(r),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Lc(i.b.id,i.c.id),l=r.programs[c]),!l){var v;i.b.id?v=r.shaders[i.b.id]:i.b.id=Cc++,v||(v=jc(a,i.b.src,a.VERTEX_SHADER),r.shaders[i.b.id]=v);var f;i.c.id?f=r.shaders[i.c.id]:i.c.id=Cc++,f||(f=jc(a,i.c.src,a.FRAGMENT_SHADER),r.shaders[i.c.id]=f);var s=od(a,v,f);l={glProgram:s,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=ud(a,n,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(s,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var d=a.getActiveAttrib(s,u),h=a.getAttribLocation(s,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(h)}c=Lc(i.b.id,i.c.id),r.programs[c]=l}r.lastProgId!==c&&(a.useProgram(l.glProgram),r.lastProgId=c),$d(l.uniformSetters,i.e);var b=r.buffers.get(i.d);for(b||(b=cd(a,i.d),r.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[d.name]===void 0&&(b.buffers[d.name]=id(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[d.name]);var _=Ql(a,d.type);if(_.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,_.size,_.baseType,!1,0,0);else for(var x=_.size*4,A=x*_.arraySize,P=0;P<_.arraySize;P++)a.enableVertexAttribArray(h+P),a.vertexAttribPointer(h+P,_.size,_.baseType,!1,A,x*P)}for(r.toggle=!r.toggle,Kr(Hg(r),i.a),u=0;u<Pc.length;u++){var D=r[Pc[u]];D.toggle!==r.toggle&&D.enabled&&(td[u](r),D.enabled=!1,D.toggle=r.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.ec,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ec,0,b.numIndices)}}return Kr(t,n.g),e});function ud(n,e,r,a){var t=r.glProgram,i=r.currentUniforms,c=0,l=e.f;function u(d,h){var b=h.name,_=n.getUniformLocation(d,b);switch(h.type){case n.INT:return function(A){i[b]!==A&&(n.uniform1i(_,A),i[b]=A)};case n.FLOAT:return function(A){i[b]!==A&&(n.uniform1f(_,A),i[b]=A)};case n.FLOAT_VEC2:return function(A){i[b]!==A&&(n.uniform2f(_,A[0],A[1]),i[b]=A)};case n.FLOAT_VEC3:return function(A){i[b]!==A&&(n.uniform3f(_,A[0],A[1],A[2]),i[b]=A)};case n.FLOAT_VEC4:return function(A){i[b]!==A&&(n.uniform4f(_,A[0],A[1],A[2],A[3]),i[b]=A)};case n.FLOAT_MAT4:return function(A){i[b]!==A&&(n.uniformMatrix4fv(_,!1,new Float32Array(A)),i[b]=A)};case n.SAMPLER_2D:var x=c++;return function(A){n.activeTexture(n.TEXTURE0+x);var P=l.textures.get(A);P||(P=A.e$(n),l.textures.set(A,P)),n.bindTexture(n.TEXTURE_2D,P),i[b]!==A&&(n.uniform1i(_,x),i[b]=A)};case n.BOOL:return function(A){i[b]!==A&&(n.uniform1i(_,A),i[b]=A)};default:return function(){}}}for(var v={},f=n.getProgramParameter(t,n.ACTIVE_UNIFORMS),s=0;s<f;s++){var p=n.getActiveUniform(t,s);v[a[p.name]||p.name]=u(t,p)}return v}function $d(n,e){Object.keys(e).forEach(function(r){var a=n[r];a&&a(e[r])})}var vd=w(function(n,e,r){return fs(e,{g:r,f:{},h:n},bd,hd)}),fd=$(function(n,e){n.contextAttributes.alpha=!0,n.contextAttributes.premultipliedAlpha=e.a}),sd=$(function(n,e){n.contextAttributes.depth=!0,n.sceneSettings.push(function(r){r.clearDepth(e.a)})}),dd=$(function(n,e){n.contextAttributes.stencil=!0,n.sceneSettings.push(function(r){r.clearStencil(e.a)})}),md=$(function(n,e){n.contextAttributes.antialias=!0}),pd=$(function(n,e){n.sceneSettings.push(function(r){r.clearColor(e.a,e.b,e.c,e.d)})}),gd=$(function(n,e){n.contextAttributes.preserveDrawingBuffer=!0});function bd(n){var e={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Kr(function(t){return o(Ng,e,t)},n.h);var r=xe.createElement("canvas"),a=r.getContext&&(r.getContext("webgl",e.contextAttributes)||r.getContext("experimental-webgl",e.contextAttributes));return a&&typeof WeakMap!="undefined"?(e.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),n.f.gl=a,n.f.toggle=!1,n.f.blend={enabled:!1,toggle:!1},n.f.depthTest={enabled:!1,toggle:!1},n.f.stencilTest={enabled:!1,toggle:!1},n.f.scissor={enabled:!1,toggle:!1},n.f.colorMask={enabled:!1,toggle:!1},n.f.cullFace={enabled:!1,toggle:!1},n.f.polygonOffset={enabled:!1,toggle:!1},n.f.sampleCoverage={enabled:!1,toggle:!1},n.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},n.f.shaders=[],n.f.programs={},n.f.lastProgId=null,n.f.buffers=new WeakMap,n.f.textures=new WeakMap,n.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Ws(function(){return o(Kl,n,r)})):(r=xe.createElement("div"),r.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),r}function hd(n,e){return e.f=n.f,Kl(e)}var Ad=$(function(n,e){return new Float64Array([n,e])});$(function(n,e){return new Float64Array([n,e[1]])});$(function(n,e){return new Float64Array([e[0],n])});$(function(n,e){var r=new Float64Array(2);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r});$(function(n,e){var r=new Float64Array(2);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r});$(function(n,e){var r=new Float64Array(2);r[0]=n[0]-e[0],r[1]=n[1]-e[1];var a=1/_d(r);return r[0]=r[0]*a,r[1]=r[1]*a,r});function _d(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1];return Math.sqrt(r*r+a*a)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1];return r*r+a*a});$(function(n,e){var r=new Float64Array(2);return r[0]=e[0]*n,r[1]=e[1]*n,r});$(function(n,e){return n[0]*e[0]+n[1]*e[1]});var hi=new Float64Array(3),kc=new Float64Array(3),zc=new Float64Array(3),wd=w(function(n,e,r){return new Float64Array([n,e,r])}),yd=function(n){return n[0]},xd=function(n){return n[1]},Sd=function(n){return n[2]};$(function(n,e){return new Float64Array([n,e[1],e[2]])});$(function(n,e){return new Float64Array([e[0],n,e[2]])});$(function(n,e){return new Float64Array([e[0],e[1],n])});var Cd=function(n){return new Float64Array([n.gf,n.gj,n.dj])};$(function(n,e){var r=new Float64Array(3);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r});function nu(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r}$(nu);function eu(n,e,r){return r===void 0&&(r=new Float64Array(3)),rt(nu(n,e,r),r)}$(eu);function ru(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2];return Math.sqrt(r*r+a*a+t*t)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2];return r*r+a*a+t*t});function rt(n,e){e===void 0&&(e=new Float64Array(3));var r=1/ru(n);return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e}var Pd=$(function(n,e){return new Float64Array([e[0]*n,e[1]*n,e[2]*n])}),Nr=function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]};$(Nr);function Do(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[1]*e[2]-n[2]*e[1],r[1]=n[2]*e[0]-n[0]*e[2],r[2]=n[0]*e[1]-n[1]*e[0],r}$(Do);$(function(n,e){var r,a=hi,t=new Float64Array(3);return a[0]=n[3],a[1]=n[7],a[2]=n[11],r=Nr(e,a)+n[15],a[0]=n[0],a[1]=n[4],a[2]=n[8],t[0]=(Nr(e,a)+n[12])/r,a[0]=n[1],a[1]=n[5],a[2]=n[9],t[1]=(Nr(e,a)+n[13])/r,a[0]=n[2],a[1]=n[6],a[2]=n[10],t[2]=(Nr(e,a)+n[14])/r,t});var jd=V(function(n,e,r,a){return new Float64Array([n,e,r,a])});$(function(n,e){return new Float64Array([n,e[1],e[2],e[3]])});$(function(n,e){return new Float64Array([e[0],n,e[2],e[3]])});$(function(n,e){return new Float64Array([e[0],e[1],n,e[3]])});$(function(n,e){return new Float64Array([e[0],e[1],e[2],n])});var Ld=function(n){return{gf:n[0],gj:n[1],dj:n[2],eI:n[3]}},kd=function(n){return new Float64Array([n.gf,n.gj,n.dj,n.eI])};$(function(n,e){var r=new Float64Array(4);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r[3]=n[3]+e[3],r});$(function(n,e){var r=new Float64Array(4);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3],r});$(function(n,e){var r=new Float64Array(4);r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3];var a=1/zd(r);return r[0]=r[0]*a,r[1]=r[1]*a,r[2]=r[2]*a,r[3]=r[3]*a,r});function zd(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]+n[3]*n[3])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2],i=n[3]-e[3];return Math.sqrt(r*r+a*a+t*t+i*i)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2],i=n[3]-e[3];return r*r+a*a+t*t+i*i});$(function(n,e){var r=new Float64Array(4);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r});$(function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]});var Td=new Float64Array(16),Md=new Float64Array(16),Dd=function(n){var e=new Float64Array(16);return e[0]=n.dQ,e[1]=n.dU,e[2]=n.dY,e[3]=n.d0,e[4]=n.dR,e[5]=n.dV,e[6]=n.dZ,e[7]=n.d1,e[8]=n.dS,e[9]=n.dW,e[10]=n.d_,e[11]=n.d2,e[12]=n.dT,e[13]=n.dX,e[14]=n.d$,e[15]=n.d3,e},Fd=function(n){return{dQ:n[0],dU:n[1],dY:n[2],d0:n[3],dR:n[4],dV:n[5],dZ:n[6],d1:n[7],dS:n[8],dW:n[9],d_:n[10],d2:n[11],dT:n[12],dX:n[13],d$:n[14],d3:n[15]}};function au(n,e,r,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-r),c[6]=0,c[7]=0,c[8]=(e+n)/(e-n),c[9]=(a+r)/(a-r),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Yn(au);V(function(n,e,r,a){var t=r*Math.tan(n*Math.PI/360),i=-t,c=i*e,l=t*e;return au(c,l,i,t,r,a)});function tu(n,e,r,a,t,i){var c=new Float64Array(16);return c[0]=2/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-r),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(e+n)/(e-n),c[13]=-(a+r)/(a-r),c[14]=-(i+t)/(i-t),c[15]=1,c}Yn(tu);V(function(n,e,r,a){return tu(n,e,r,a,-1,1)});function ou(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=n[3],l=n[4],u=n[5],v=n[6],f=n[7],s=n[8],p=n[9],d=n[10],h=n[11],b=n[12],_=n[13],x=n[14],A=n[15],P=e[0],D=e[1],I=e[2],H=e[3],N=e[4],G=e[5],O=e[6],E=e[7],nn=e[8],an=e[9],gn=e[10],An=e[11],sn=e[12],Sn=e[13],Gn=e[14],En=e[15];return r[0]=a*P+l*D+s*I+b*H,r[1]=t*P+u*D+p*I+_*H,r[2]=i*P+v*D+d*I+x*H,r[3]=c*P+f*D+h*I+A*H,r[4]=a*N+l*G+s*O+b*E,r[5]=t*N+u*G+p*O+_*E,r[6]=i*N+v*G+d*O+x*E,r[7]=c*N+f*G+h*O+A*E,r[8]=a*nn+l*an+s*gn+b*An,r[9]=t*nn+u*an+p*gn+_*An,r[10]=i*nn+v*an+d*gn+x*An,r[11]=c*nn+f*an+h*gn+A*An,r[12]=a*sn+l*Sn+s*Gn+b*En,r[13]=t*sn+u*Sn+p*Gn+_*En,r[14]=i*sn+v*Sn+d*Gn+x*En,r[15]=c*sn+f*Sn+h*Gn+A*En,r}$(ou);$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=n[4],l=n[5],u=n[6],v=n[8],f=n[9],s=n[10],p=n[12],d=n[13],h=n[14],b=e[0],_=e[1],x=e[2],A=e[4],P=e[5],D=e[6],I=e[8],H=e[9],N=e[10],G=e[12],O=e[13],E=e[14];return r[0]=a*b+c*_+v*x,r[1]=t*b+l*_+f*x,r[2]=i*b+u*_+s*x,r[3]=0,r[4]=a*A+c*P+v*D,r[5]=t*A+l*P+f*D,r[6]=i*A+u*P+s*D,r[7]=0,r[8]=a*I+c*H+v*N,r[9]=t*I+l*H+f*N,r[10]=i*I+u*H+s*N,r[11]=0,r[12]=a*G+c*O+v*E+p,r[13]=t*G+l*O+f*E+d,r[14]=i*G+u*O+s*E+h,r[15]=1,r});$(function(n,e){var r=new Float64Array(16);e=rt(e,hi);var a=e[0],t=e[1],i=e[2],c=Math.cos(n),l=1-c,u=Math.sin(n);return r[0]=a*a*l+c,r[1]=t*a*l+i*u,r[2]=i*a*l-t*u,r[3]=0,r[4]=a*t*l-i*u,r[5]=t*t*l+c,r[6]=t*i*l+a*u,r[7]=0,r[8]=a*i*l+t*u,r[9]=t*i*l-a*u,r[10]=i*i*l+c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r});w(function(n,e,r){var a=new Float64Array(16),t=1/ru(e),i=e[0]*t,c=e[1]*t,l=e[2]*t,u=Math.cos(n),v=1-u,f=Math.sin(n),s=i*f,p=c*f,d=l*f,h=i*c*v,b=i*l*v,_=c*l*v,x=i*i*v+u,A=h+d,P=b-p,D=h-d,I=c*c*v+u,H=_+s,N=b+p,G=_-s,O=l*l*v+u,E=r[0],nn=r[1],an=r[2],gn=r[3],An=r[4],sn=r[5],Sn=r[6],Gn=r[7],En=r[8],ke=r[9],ze=r[10],ro=r[11],zv=r[12],Tv=r[13],Mv=r[14],Dv=r[15];return a[0]=E*x+An*A+En*P,a[1]=nn*x+sn*A+ke*P,a[2]=an*x+Sn*A+ze*P,a[3]=gn*x+Gn*A+ro*P,a[4]=E*D+An*I+En*H,a[5]=nn*D+sn*I+ke*H,a[6]=an*D+Sn*I+ze*H,a[7]=gn*D+Gn*I+ro*H,a[8]=E*N+An*G+En*O,a[9]=nn*N+sn*G+ke*O,a[10]=an*N+Sn*G+ze*O,a[11]=gn*N+Gn*G+ro*O,a[12]=zv,a[13]=Tv,a[14]=Mv,a[15]=Dv,a});function Bd(n,e,r){var a=new Float64Array(16);return a[0]=n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}w(Bd);V(function(n,e,r,a){var t=new Float64Array(16);return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*e,t[5]=a[5]*e,t[6]=a[6]*e,t[7]=a[7]*e,t[8]=a[8]*r,t[9]=a[9]*r,t[10]=a[10]*r,t[11]=a[11]*r,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2];return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r[4]=e[4]*t,r[5]=e[5]*t,r[6]=e[6]*t,r[7]=e[7]*t,r[8]=e[8]*i,r[9]=e[9]*i,r[10]=e[10]*i,r[11]=e[11]*i,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r});function Vd(n,e,r){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=n,a[13]=e,a[14]=r,a[15]=1,a}w(Vd);V(function(n,e,r,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],s=a[6],p=a[7],d=a[8],h=a[9],b=a[10],_=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=f,t[6]=s,t[7]=p,t[8]=d,t[9]=h,t[10]=b,t[11]=_,t[12]=i*n+v*e+d*r+a[12],t[13]=c*n+f*e+h*r+a[13],t[14]=l*n+s*e+b*r+a[14],t[15]=u*n+p*e+_*r+a[15],t});$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=e[0],l=e[1],u=e[2],v=e[3],f=e[4],s=e[5],p=e[6],d=e[7],h=e[8],b=e[9],_=e[10],x=e[11];return r[0]=c,r[1]=l,r[2]=u,r[3]=v,r[4]=f,r[5]=s,r[6]=p,r[7]=d,r[8]=h,r[9]=b,r[10]=_,r[11]=x,r[12]=c*a+f*t+h*i+e[12],r[13]=l*a+s*t+b*i+e[13],r[14]=u*a+p*t+_*i+e[14],r[15]=v*a+d*t+x*i+e[15],r});w(function(n,e,r){var a=eu(n,e,hi),t=rt(Do(r,a,kc),kc),i=rt(Do(a,t,zc),zc),c=Td,l=Md;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-n[0],l[13]=-n[1],l[14]=-n[2],l[15]=1,ou(c,l)});w(function(n,e,r){var a=new Float64Array(16);return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=0,a[4]=e[0],a[5]=e[1],a[6]=e[2],a[7]=0,a[8]=r[0],a[9]=r[1],a[10]=r[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=Ov,La=Hv,iu=w(function(n,e,r){var a=r.c,t=r.d,i=$(function(c,l){if(c.$){var v=c.a;return m(La,n,l,v)}else{var u=c.a;return m(La,i,l,u)}});return m(La,i,m(La,n,e,t),a)}),St=w(function(n,e,r){n:for(;;){if(r.$===-2)return e;var a=r.b,t=r.c,i=r.d,c=r.e,l=n,u=m(n,a,t,m(St,n,e,c)),v=i;n=l,e=u,r=v;continue n}}),Tc=function(n){return m(St,w(function(e,r,a){return o(k,y(e,r),a)}),S,n)},Ed=function(n){return m(St,w(function(e,r,a){return o(k,e,a)}),S,n)},Rd=function(n){var e=n;return Ed(e)},cu=1,Wd=2,lu=0,Dn=function(n){return{$:1,a:n}},Ai=$(function(n,e){return{$:3,a:n,b:e}}),Mc=$(function(n,e){return{$:0,a:n,b:e}}),uu=$(function(n,e){return{$:1,a:n,b:e}}),fn=function(n){return{$:0,a:n}},Nd=function(n){return{$:2,a:n}},U=function(n){return{$:0,a:n}},J={$:1},Hd=bf,$u=Hf,yn=Bl,nr=$(function(n,e){return o(mf,n,yt(e))}),_i=$(function(n,e){return g(o(df,n,e))}),vu=function(n){return o(nr,`
    `,o(_i,`
`,n))},Ae=w(function(n,e,r){n:for(;;)if(r.b){var a=r.a,t=r.b,i=n,c=o(n,a,e),l=t;n=i,e=c,r=l;continue n}else return e}),te=function(n){return m(Ae,$(function(e,r){return r+1}),0,n)},fu=Jv,Gd=w(function(n,e,r){n:for(;;)if(Z(n,e)<1){var a=n,t=e-1,i=o(k,e,r);n=a,e=t,r=i;continue n}else return r}),xr=$(function(n,e){return m(Gd,n,e,S)}),Ct=$(function(n,e){return m(fu,n,o(xr,0,te(e)-1),e)}),de=Sf,su=function(n){var e=de(n);return 97<=e&&e<=122},du=function(n){var e=de(n);return e<=90&&65<=e},Ud=function(n){return su(n)||du(n)},Id=function(n){var e=de(n);return e<=57&&48<=e},Od=function(n){return su(n)||du(n)||Id(n)},kn=function(n){return m(Ae,k,S,n)},Lr=$f,Jd=$(function(n,e){return`

(`+(yn(n+1)+(") "+vu(qd(e))))}),qd=function(n){return o(Yd,n,S)},Yd=$(function(n,e){n:for(;;)switch(n.$){case 0:var r=n.a,c=n.b,a=function(){var b=Lr(r);if(b.$===1)return!1;var _=b.a,x=_.a,A=_.b;return Ud(x)&&o(Hd,Od,A)}(),t=a?"."+r:"['"+(r+"']"),u=c,v=o(k,t,e);n=u,e=v;continue n;case 1:var i=n.a,c=n.b,l="["+(yn(i)+"]"),u=c,v=o(k,l,e);n=u,e=v;continue n;case 2:var f=n.a;if(f.b)if(f.b.b){var s=function(){return e.b?"The Json.Decode.oneOf at json"+o(nr,"",kn(e)):"Json.Decode.oneOf"}(),h=s+(" failed in the following "+(yn(te(f))+" ways:"));return o(nr,`

`,o(k,h,o(Ct,Jd,f)))}else{var c=f.a,u=c,v=e;n=u,e=v;continue n}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+o(nr,"",kn(e)):"!"}();default:var p=n.a,d=n.b,h=function(){return e.b?"Problem with the value at json"+(o(nr,"",kn(e))+`:

    `):`Problem with the given value:

`}();return h+(vu(o($u,4,d))+(`

`+p))}}),In=32,Fo=V(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Bo=Vv,wi=rf,yi=$(function(n,e){return bc(e)/bc(n)}),Hr=nf,na=wi(o(yi,2,In)),mu=j(Fo,0,na,Bo,Bo),pu=Rv,gu=function(n){return{$:1,a:n}};$(function(n,e){return n(e)});$(function(n,e){return e(n)});var Pt=Uv,bu=af,Vo=Ev,On=$(function(n,e){return Z(n,e)>0?n:e}),Zd=function(n){return{$:0,a:n}},xi=Wv,Xd=$(function(n,e){n:for(;;){var r=o(xi,In,n),a=r.a,t=r.b,i=o(k,Zd(a),e);if(t.b){var c=t,l=i;n=c,e=l;continue n}else return kn(i)}}),Eo=function(n){var e=n.a;return e},Qd=$(function(n,e){n:for(;;){var r=wi(e/In);if(r===1)return o(xi,In,n).a;var a=o(Xd,n,S),t=r;n=a,e=t;continue n}}),hu=$(function(n,e){if(e.p){var r=e.p*In,a=bu(o(yi,In,r-1)),t=n?kn(e.D):e.D,i=o(Qd,t,e.p);return j(Fo,Vo(e.t)+r,o(On,5,a*na),i,e.t)}else return j(Fo,Vo(e.t),na,Bo,e.t)}),Kd=xn(function(n,e,r,a,t){n:for(;;){if(e<0)return o(hu,!1,{D:a,p:r/In|0,t});var i=gu(m(pu,In,e,n)),c=n,l=e-In,u=r,v=o(k,i,a),f=t;n=c,e=l,r=u,a=v,t=f;continue n}}),nm=$(function(n,e){if(n<=0)return mu;var r=n%In,a=m(pu,r,n-r,e),t=n-r-In;return C(Kd,e,t,n,S,a)}),le=function(n){return!n.$},M=Ff,en=kf,L=Df,_n=zf,em=function(n){return{$:2,a:n}},Au=$(function(n,e){return n}),_u=$(function(n,e){return{V:e.V,eZ:n,cg:e.cg,e6:e.e6,dH:e.dH,cV:e.cV,b4:e.b4,gb:e.gb}}),at=Bf,fa=Vf,dn=Pf,Si=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Nn=function(n){return n},rm=Nn,Dc=Yn(function(n,e,r,a,t,i){return{dx:i,dz:e,eh:a,el:r,ep:n,eq:t}}),am=hf,er=vf,gr=pf,sa=$(function(n,e){return n<1?e:m(gr,n,er(e),e)}),jt=_f,Lt=function(n){return n===""},kt=$(function(n,e){return n<1?"":m(gr,0,n,e)}),wu=wf,Fc=xn(function(n,e,r,a,t){if(Lt(t)||o(am,"@",t))return J;var i=o(jt,":",t);if(i.b){if(i.b.b)return J;var c=i.a,l=wu(o(sa,c+1,t));if(l.$===1)return J;var u=l;return U(mn(Dc,n,o(kt,c,t),u,e,r,a))}else return U(mn(Dc,n,t,J,e,r,a))}),Bc=V(function(n,e,r,a){if(Lt(a))return J;var t=o(jt,"/",a);if(t.b){var i=t.a;return C(Fc,n,o(sa,i,a),e,r,o(kt,i,a))}else return C(Fc,n,"/",e,r,a)}),Vc=w(function(n,e,r){if(Lt(r))return J;var a=o(jt,"?",r);if(a.b){var t=a.a;return j(Bc,n,U(o(sa,t+1,r)),e,o(kt,t,r))}else return j(Bc,n,J,e,r)});$(function(n,e){if(Lt(e))return J;var r=o(jt,"#",e);if(r.b){var a=r.a;return m(Vc,n,U(o(sa,a+1,e)),o(kt,a,e))}else return m(Vc,n,J,e)});var tm=Af,Ci=function(n){},da=ir,om=da(0),yu=V(function(n,e,r,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,s=v.b,p=r>500?m(Ae,n,e,kn(s)):j(yu,n,e,r+1,s);return o(n,t,o(n,c,o(n,u,o(n,f,p))))}else return o(n,t,o(n,c,o(n,u,e)))}else return o(n,t,o(n,c,e))}else return o(n,t,e)}else return e}),Le=w(function(n,e,r){return j(yu,n,e,0,r)}),X=$(function(n,e){return m(Le,$(function(r,a){return o(k,n(r),a)}),S,e)}),tt=zo,Pi=$(function(n,e){return o(tt,function(r){return da(n(r))},e)}),im=w(function(n,e,r){return o(tt,function(a){return o(tt,function(t){return da(o(n,a,t))},r)},e)}),cm=function(n){return m(Le,im(k),da(S),n)},lm=es,um=$(function(n,e){var r=e;return El(o(tt,lm(n),r))}),$m=w(function(n,e,r){return o(Pi,function(a){return 0},cm(o(X,um(n),e)))}),vm=w(function(n,e,r){return da(0)}),fm=$(function(n,e){var r=e;return o(Pi,n,r)});se.Task=Kf(om,$m,vm,fm);var sm=Wl("Task"),ji=$(function(n,e){return sm(o(Pi,n,e))}),dm=Ds,mm=lf,ot={$:1},xu=function(n){return{$:2,a:n}},zt={$:0},ee=$(function(n,e){return{$:0,a:n,b:e}}),K=w(function(n,e,r){return e(n(r))}),kr=function(n){var e=n.b.n;return e.a},pm=function(n){var e=n.a,r=n.b.X,a=n.b.n,t=n.b.af;if(t.b){var i=t.a,c=t.b;return U(o(ee,e,{n:i,af:c,X:o(k,a,r)}))}else return J},Su=function(n){var e=n.b;return o(ee,zt,e)},pn=$(function(n,e){if(e.$)return n;var r=e.a;return r}),gm=w(function(n,e,r){var a=r.a,t=r.b;switch(a.$){case 1:return e.cV.ci?Su(r):r;case 2:var i=a.a.c7;return(Z(i+e.e6,kr(r).V)>0?o(K,pm,pn(o(ee,ot,t))):Nn)(o(ee,xu({c7:i+e.e6}),t));default:var c=t.n,l=c.a,u=c.b,v=o(_u,l.eZ,W(e,{V:l.V+e.e6})),f=o(n,v,u);return o(ee,zt,{n:y(v,f),af:S,X:o(k,t.n,t.X)})}}),Li=$(function(n,e){n:for(;;){if(n<=0)return e;if(e.b){e.a;var r=e.b,a=n-1,t=r;n=a,e=t;continue n}else return e}}),bm=w(function(n,e,r){n:for(;;){if(n<=0)return r;if(e.b){var a=e.a,t=e.b,i=n-1,c=t,l=o(k,a,r);n=i,e=c,r=l;continue n}else return r}}),hm=$(function(n,e){return kn(m(bm,n,e,S))}),Cu=w(function(n,e,r){if(e<=0)return S;{var a=y(e,r);n:for(;;){e:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break n;case 2:var t=a.b,A=t.a,i=t.b,c=i.a;return g([A,c]);case 3:if(a.b.b.b.b){var l=a.b,A=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return g([A,c,f])}else break e;default:if(a.b.b.b.b&&a.b.b.b.b.b){var s=a.b,A=s.a,p=s.b,c=p.a,d=p.b,f=d.a,h=d.b,b=h.a,_=h.b;return n>1e3?o(k,A,o(k,c,o(k,f,o(k,b,o(hm,e-4,_))))):o(k,A,o(k,c,o(k,f,o(k,b,m(Cu,n+1,e-4,_)))))}else break e}else{if(a.a===1)break n;break e}else return r;return r}var x=a.b,A=x.a;return g([A])}}),Pu=$(function(n,e){return m(Cu,0,n,e)}),Am=$(function(n,e){var r=e.b.X,a=e.b.n,t=e.b.af,i=un(kn(r),un(g([a]),t)),c=o(Pu,n,i),l=o(Li,n,i);if(l.b){var u=l.a,v=l.b;return o(ee,ot,{n:u,af:v,X:kn(c)})}else{var f=kn(c);if(f.b){var s=f.a,p=f.b;return o(ee,ot,{n:s,af:S,X:p})}else return e}}),_m=function(n){var e=n.b;return o(ee,ot,e)},wm=function(n){var e=n.b;return o(ee,xu({c7:kr(n).V}),e)},ym=$(function(n,e){switch(n.$){case 1:return _m(e);case 2:return Su(e);case 3:return wm(e);default:var r=n.a;return o(Am,r,e)}}),ju=$(function(n,e){var r=e.a,a=e.b;return y(n(r),a)}),xm=$(function(n,e){return W(e,{aA:n(e.aA)})}),Sm=function(n){return{$:3,a:n}},Lu=function(n){return{$:2,a:n}},ku=$(function(n,e){return{$:0,a:n,b:e}}),Cm=$(function(n,e){return{$:1,a:n,b:e}}),jn=$(function(n,e){if(e.$)return J;var r=e.a;return U(n(r))}),Q=function(n){return n<0?-n:n},ki=yf,Pm=w(function(n,e,r){return o(pn,0/0,ki(o(n,e,r)))}),Tt=$(function(n,e){n:for(;;)if(e.b){var r=e.a,a=e.b;if(n(r))return!0;var t=n,i=a;n=t,e=i;continue n}else return!1}),jm=sf,zu=function(n){return m(jm,k,S,n)},Lm=$(function(n,e){var r=o(Tt,function(a){return a!=="0"&&a!=="."},zu(e));return un(n&&r?"-":"",e)}),Fn=Bl,Ro=uf,Tu=Cf,Mu=function(n){var e=n.a,r=n.b;if(e==="9"){var a=Lr(r);if(a.$===1)return"01";var t=a.a;return o(Ro,"0",Mu(t))}else{var i=de(e);return i>=48&&i<57?o(Ro,Tu(i+1),r):"0"}},Wo=ef,km=cf,Mt=function(n){return o(Ro,n,"")},Du=w(function(n,e,r){return n<=0?r:m(Du,n>>1,un(e,e),n&1?un(r,e):r)}),ea=$(function(n,e){return m(Du,n,e,"")}),No=w(function(n,e,r){return un(r,o(ea,n-er(r),Mt(e)))}),Ho=ff,Fu=function(n){var e=o(_i,".",n);if(e.b)if(e.b.b){var r=e.a,a=e.b,t=a.a;return y(r,t)}else{var r=e.a;return y(r,"0")}else return y("0","0")},zm=function(n){var e=o(_i,"e",Fn(Q(n)));if(e.b)if(e.b.b){var r=e.a,a=e.b,t=a.a,i=o(pn,0,wu(o(tm,"+",t)?o(sa,1,t):t)),c=Fu(r),l=c.a,u=c.b,v=un(l,u),f=i<0?o(pn,"0",o(jn,function(s){var p=s.a,d=s.b;return p+("."+d)},o(jn,ju(Mt),Lr(un(o(ea,Q(i),"0"),v))))):m(No,i+1,"0",v);return un(n<0?"-":"",f)}else{var r=e.a;return un(n<0?"-":"",r)}else return""},Tm=w(function(n,e,r){if(Wo(r)||km(r))return Fn(r);var a=r<0,t=Fu(zm(Q(r))),i=t.a,c=t.b,l=er(i)+e,u=un(o(ea,-l+1,"0"),m(No,l,"0",un(i,c))),v=er(u),f=o(On,1,l),s=o(n,a,m(gr,f,v,u)),p=m(gr,0,f,u),d=s?Ho(o(pn,"1",o(jn,Mu,Lr(Ho(p))))):p,h=er(d),b=d==="0"?d:e<=0?un(d,o(ea,Q(e),"0")):Z(e,er(c))<0?m(gr,0,h-e,d)+("."+m(gr,h-e,h,d)):un(i+".",m(No,e,"0",c));return o(Lm,a,b)}),Bu=Tm($(function(n,e){var r=Lr(e);if(r.$===1)return!1;if(r.a.a==="5")return r.a.b===""?(r.a,!n):(r.a,!0);var a=r.a,t=a.a;return function(i){return i>53&&n||i>=53&&!n}(de(t))})),Mm=Pm(Bu),Dm=w(function(n,e,r){var a=o(yi,10,Q(e-n)),t=a<0?3:a<1?2:a<2?1:0;return o(Mm,t,r)}),Vu=Iv,ma=$(function(n,e){n:for(;;){if(e.$===-2)return J;var r=e.b,a=e.c,t=e.d,i=e.e,c=o(Vu,n,r);switch(c){case 0:var l=n,u=t;n=l,e=u;continue n;case 1:return U(a);default:var l=n,u=i;n=l,e=u;continue n}}}),Y=xn(function(n,e,r,a,t){return{$:-1,a:n,b:e,c:r,d:a,e:t}}),he={$:-2},Sr=xn(function(n,e,r,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,s=a.d,p=a.e;return C(Y,0,e,r,C(Y,1,v,f,s,p),C(Y,1,i,c,l,u))}else return C(Y,n,i,c,C(Y,0,e,r,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,d=a.d;d.a;var h=d.b,b=d.c,_=d.d,x=d.e,p=a.e;return C(Y,0,v,f,C(Y,1,h,b,_,x),C(Y,1,e,r,p,t))}else return C(Y,n,e,r,a,t)}),Go=w(function(n,e,r){if(r.$===-2)return C(Y,0,n,e,he,he);var a=r.a,t=r.b,i=r.c,c=r.d,l=r.e,u=o(Vu,n,t);switch(u){case 0:return C(Sr,a,t,i,m(Go,n,e,c),l);case 1:return C(Y,a,t,e,c,l);default:return C(Sr,a,t,i,c,m(Go,n,e,l))}}),hr=w(function(n,e,r){var a=m(Go,n,e,r);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(Y,1,t,i,c,l)}else{var u=a;return u}}),Fm=function(n){n:for(;;)if(n.$===-1&&n.d.$===-1){var e=n.d,r=e;n=r;continue n}else return n},Eu=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.e.d.$===-1&&!n.e.d.a){var e=n.a,r=n.b,a=n.c,t=n.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=n.e;v.a;var f=v.b,s=v.c,p=v.d;p.a;var d=p.b,h=p.c,b=p.d,_=p.e,x=v.e;return C(Y,0,d,h,C(Y,1,r,a,C(Y,0,i,c,l,u),b),C(Y,1,f,s,_,x))}else{var e=n.a,r=n.b,a=n.c,A=n.d;A.a;var i=A.b,c=A.c,l=A.d,u=A.e,P=n.e;P.a;var f=P.b,s=P.c,p=P.d,x=P.e;return C(Y,1,r,a,C(Y,0,i,c,l,u),C(Y,0,f,s,p,x))}else return n},Ec=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.d.d.$===-1&&!n.d.d.a){var e=n.a,r=n.b,a=n.c,t=n.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,f=l.d,s=l.e,p=t.e,d=n.e;d.a;var h=d.b,b=d.c,_=d.d,x=d.e;return C(Y,0,i,c,C(Y,1,u,v,f,s),C(Y,1,r,a,p,C(Y,0,h,b,_,x)))}else{var e=n.a,r=n.b,a=n.c,A=n.d;A.a;var i=A.b,c=A.c,P=A.d,p=A.e,D=n.e;D.a;var h=D.b,b=D.c,_=D.d,x=D.e;return C(Y,1,r,a,C(Y,0,i,c,P,p),C(Y,0,h,b,_,x))}else return n},Bm=_t(function(n,e,r,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return C(Y,r,l,u,v,C(Y,0,a,t,f,c))}else{n:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var s=c.d;return s.a,Ec(e)}else break n;else return c.a,c.d,Ec(e);else break n;return e}}),Ua=function(n){if(n.$===-1&&n.d.$===-1){var e=n.a,r=n.b,a=n.c,t=n.d,i=t.a,c=t.d,l=n.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(Y,e,r,a,Ua(t),l);var u=Eu(n);if(u.$===-1){var v=u.a,f=u.b,s=u.c,p=u.d,d=u.e;return C(Sr,v,f,s,Ua(p),d)}else return he}else return C(Y,e,r,a,Ua(t),l)}else return he},qr=$(function(n,e){if(e.$===-2)return he;var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;if(Z(n,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(Y,r,a,t,o(qr,n,i),c);var u=Eu(e);if(u.$===-1){var v=u.a,f=u.b,s=u.c,p=u.d,d=u.e;return C(Sr,v,f,s,o(qr,n,p),d)}else return he}else return C(Y,r,a,t,o(qr,n,i),c);else return o(Vm,n,li(Bm,n,e,r,a,t,i,c))}),Vm=$(function(n,e){if(e.$===-1){var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;if(tn(n,a)){var l=Fm(c);if(l.$===-1){var u=l.b,v=l.c;return C(Sr,r,u,v,i,Ua(c))}else return he}else return C(Sr,r,a,t,i,o(qr,n,c))}else return he}),Ru=$(function(n,e){var r=o(qr,n,e);if(r.$===-1&&!r.a){r.a;var a=r.b,t=r.c,i=r.d,c=r.e;return C(Y,1,a,t,i,c)}else{var l=r;return l}}),ka=w(function(n,e,r){var a=e(o(ma,n,r));if(a.$)return o(Ru,n,r);var t=a.a;return m(hr,n,t,r)}),Em=function(n){switch(n.$){case 1:var e=n.a,r=n.b;return o(ka,e,jn(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Cm,y(i,c),r)}else return a}));case 0:var e=n.a,r=n.b;return o(ka,e,jn(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(ku,y(i,c),m(Dm,i,c,r))}));case 3:var e=n.a,r=n.b;return o(ka,e,jn(function(a){return a.$===3?Sm(r):a}));default:var e=n.a,r=n.b;return o(ka,e,jn(function(a){return a.$===2?Lu(r):a}))}},Rm=function(n){return xm(Em(n))},Wm=$(function(n,e){return o(X,Rm(n),e)}),Nm=$(function(n,e){return W(e,{eZ:o(Wm,n,e.eZ)})}),Hm=$(function(n,e){var r=e.a,a=e.b;return o(ee,r,W(a,{n:o(ju,Nm(n),a.n)}))}),Gm=$(function(n,e){var r=e.a,a=e.b;return y(r,n(a))}),Um=w(function(n,e,r){var a=r.a,t=r.b,i=t.n;return o(ee,a,W(t,{n:o(Gm,o(n,i.a,e),i)}))}),Im=V(function(n,e,r,a){switch(r.$){case 0:return a;case 1:return W(a,{aQ:!a.aQ});case 2:var t=r.a;return W(a,{J:m(gm,n,t,a.J)});case 3:var i=r.a;return W(a,{J:o(Hm,i,a.J)});case 4:var c=r.a;return W(a,{J:m(Um,e,c,a.J)});default:var l=r.a;return W(a,{J:o(ym,l,a.J)})}}),Om=$(function(n,e){return o(ee,zt,{n:y(n,e(n)),af:S,X:S})}),Jm=rs,Rc=Jm(S),We=Mf,ar=Tf,qm=cs("tick",o(M,function(n){return o(M,function(e){return o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return dn({V:c,cg:i,e6:t,dH:a,cV:r,b4:e,gb:n})},o(L,"clock",_n))},o(L,"devicePixelRatio",_n))},o(L,"dt",_n))},o(L,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(f){return o(M,function(s){return dn({eL:s,e_:f,ci:v,e5:u,dI:l,fM:c,et:i,fV:t,dc:a})},o(L,"alt",en))},o(L,"control",en))},o(L,"down",en))},o(L,"downs",We(ar)))},o(L,"left",en))},o(L,"pressedKeys",We(ar)))},o(L,"right",en))},o(L,"shift",en))},o(L,"up",en))))},o(L,"pointer",o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return dn({ci:v,dE:u,fA:l,fR:c,fS:i,dc:t,gf:a,gj:r})},o(L,"down",en))},o(L,"isDown",en))},o(L,"move",en))},o(L,"rightDown",en))},o(L,"rightUp",en))},o(L,"up",en))},o(L,"x",_n))},o(L,"y",_n))))},o(L,"screen",o(M,function(e){return o(M,function(r){return dn({fk:r,gd:e})},o(L,"height",_n))},o(L,"width",_n))))},o(L,"wheel",o(M,function(n){return o(M,function(e){return dn({e0:e,e1:n})},o(L,"deltaX",_n))},o(L,"deltaY",_n))))),Ym=function(n){return{$:4,a:n}},Zm={$:0},zi=ui,ce=$(function(n,e){return o(Gl,n,zi(e))}),F=ce("className"),Wc=function(n){var e=n.b;return e},Xm=function(n){var e=n.b.n;return e.b},B=ie("div"),ra=ce("id"),Qm=ss,it=Qm,Km=ds,ln=Km,n0={$:1},e0=function(n){return{$:3,a:n}},r0=function(n){return{$:5,a:n}},Nc=ie("a"),Dt=ie("button"),a0=cr("d"),Wu=Nl("http://www.w3.org/2000/svg"),t0=Wu("path"),o0=Wu("svg"),i0=cr("viewBox"),Yr=function(n){return o(o0,g([i0("0 0 100 100"),o(ln,"width","100%"),o(ln,"height","100%")]),g([o(t0,g([a0(n)]),S)]))},Hc=function(n){return o(ce,"href",ps(n))},Ar={e4:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fe:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fj:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fK:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fL:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",cV:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fO:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fX:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",f6:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",f8:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gn:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},c0=function(n){return{$:0,a:n}},Nu=Hl,Ft=$(function(n,e){return o(Nu,n,c0(e))}),Bt=function(n){return o(Ft,"click",dn(n))},Gc=ce("target"),l0=ce("title"),Uo=$(function(n,e){if(e.$===-2)return he;var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(Y,r,a,o(n,a,t),o(Uo,n,i),o(Uo,n,c))}),u0=To,on=u0,$0=function(n){return m(St,w(function(e,r,a){return o(k,r,a)}),S,n)},v0=$(function(n,e){return{$:3,a:n,b:e}}),f0=$(function(n,e){return{$:2,a:n,b:e}}),s0=$(function(n,e){return{$:0,a:n,b:e}}),d0=$(function(n,e){return{$:1,a:n,b:e}}),Je=V(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Ti=j(Je,0/255,0/255,0/255,1),m0=ui,p0=$(function(n,e){return o(Gl,n,m0(e))}),Hu=p0("checked"),Jn=tf,g0=w(function(n,e,r){return un(o(ea,n-er(r),Mt(e)),r)}),aa=Yv,Gu=function(n){var e=function(r){return r<10?yn(r):Mt(Tu(87+r))};return n<16?e(n):un(Gu(n/16|0),e(o(aa,16,n)))},b0=o(K,Gu,o(g0,2,"0")),Mi=function(n){var e=n.a,r=n.b,a=n.c,t=n.d;return{aM:t,cc:a,cj:r,cY:e}},h0=function(n){var e=Mi(n),r=e.cY,a=e.cj,t=e.cc;return o(nr,"",o(k,"#",o(X,o(K,Jn,b0),g([r*255,a*255,t*255]))))},ct=ce("htmlFor"),A0=$(function(n,e){if(e.$)return J;var r=e.a;return n(r)}),lt=$(function(n,e){if(e.$){var a=e.a;return Dn(a)}else{var r=e.a;return n(r)}}),_0=w(function(n,e,r){var a=n(e);if(a.$)return r;var t=a.a;return o(k,t,r)}),pa=$(function(n,e){return m(Le,_0(n),S,e)}),Uu=V(function(n,e,r,a){return{fp:e,fy:n,fF:r,f_:a}}),w0=Rs,y0=xf,x0=$(function(n,e){if(e.$)return Dn(n);var r=e.a;return fn(r)}),S0=Es,C0=function(n){return o(S0,{eU:!1,fB:!1},n)},zr=function(n){if(n.b){var e=n.a;return n.b,U(e)}else return J},P0=$(function(n,e){if(e.$){var a=e.a;return Dn(a)}else{var r=e.a;return fn(n(r))}}),j0=function(n){return{$:2,a:n}},L0=function(n){return{$:0,a:n}},k0=function(n){return{$:1,a:n}},oo=$(function(n,e){return de(e)-de(n)}),io=w(function(n,e,r){var a=de(r);return Z(de(n),a)<1&&Z(a,de(e))<1}),z0=$(function(n,e){var r=function(t){return Z(t,n)<0?fn(t):Dn(k0(e))},a=m(io,"0","9",e)?fn(o(oo,"0",e)):m(io,"a","z",e)?fn(10+o(oo,"a",e)):m(io,"A","Z",e)?fn(10+o(oo,"A",e)):Dn(L0(e));return o(lt,r,a)}),Iu=$(function(n,e){var r=Lr(e);if(r.$===1)return fn(0);var a=r.a,t=a.a,i=a.b;return o(lt,function(c){return o(lt,function(l){return fn(c+l*n)},o(Iu,n,i))},o(z0,n,t))}),T0=$(function(n,e){return 2<=n&&n<=36?o(Iu,n,Ho(e)):Dn(j0(n))}),M0=T0(16),D0=w(function(n,e,r){return j(Je,n,e,r,1)}),F0=V(function(n,e,r,a){return j(Je,n,e,r,a)}),Ne=qv,B0=$(function(n,e){var r=o(Ne,10,n);return Jn(e*r)/r}),V0=gf,E0=function(){var n="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",e=function(r){var a=zu(r);if(a.b&&!a.b.b){var t=a.a;return y0(g([t,t]))}else return r};return o(K,V0,o(K,function(r){return o(jn,function(a){return m(w0,1,a,r)},C0(n))},o(K,A0(zr),o(K,jn(function(r){return r.f_}),o(K,jn(pa(Nn)),o(K,x0("Parsing hex regex failed"),lt(function(r){var a=o(X,o(K,e,o(K,M0,P0(Hr))),r);n:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return fn(j(F0,t/255,c/255,u/255,o(B0,2,f/255)))}else break n;else{var t=a.a.a,s=a.b,c=s.a.a,p=s.b,u=p.a.a;return fn(m(D0,t/255,c/255,u/255))}else break n;return Dn("Parsing ints from hex failed")})))))))}(),ta=ie("input"),ut=ie("label"),$t=ce("name"),Ou=$(function(n,e){return m(Le,L,e,n)}),R0=o(Ou,g(["target","checked"]),en),Ju=function(n){return o(Ft,"change",o(at,n,R0))},W0=function(n){return y(n,!0)},N0=function(n){return{$:1,a:n}},H0=$(function(n,e){return o(Nu,n,N0(e))}),G0=o(Ou,g(["target","value"]),ar),Vt=function(n){return o(H0,"input",o(at,W0,o(at,n,G0)))},qu=ce("max"),Yu=ce("min"),Zu=function(n){return o(ce,"step",n)},oa=ce("type"),Et=ce("value"),Uc=function(n){var e=n.co,r=n.dd,a=n.cE,t=n.cA,i=n.c5,c=n.cJ;return o(B,S,g([o(ut,g([ct(e)]),g([o(B,g([F("relative w-full")]),g([o(B,g([F("inline-block")]),g([on(e)])),o(B,g([F("inline-block float-right")]),g([on(Fn(r))]))]))])),o(ta,g([oa("range"),o(ln,"width","100%"),ra(e),$t(e),Yu(Fn(a)),qu(Fn(t)),Et(Fn(r)),Zu(Fn(i)),Vt(o(K,ki,o(K,pn(42),c)))]),S)]))},Di=$(function(n,e){if(e.$)return n;var r=e.a;return r}),U0=$(function(n,e){switch(e.$){case 3:var c=e.a;return o(B,S,g([o(B,g([F("mb-2")]),g([o(ut,g([ct(n)]),g([on(n)]))])),o(ta,g([oa("checkbox"),ra(n),$t(n),Ju(v0(n)),Hu(c)]),S)]));case 0:var r=e.a,t=r.a,i=r.b,c=e.b;return Uc({co:n,cA:i,cE:t,cJ:s0(n),c5:.01*(i-t),dd:c});case 1:var a=e.a,t=a.a,i=a.b,c=e.b;return Uc({co:n,cA:i,cE:t,cJ:o(K,Jn,d0(n)),c5:1,dd:c});default:var c=e.a;return o(B,S,g([o(B,g([o(ln,"margin-bottom","6px")]),g([o(ut,g([ct(n)]),g([on(n)]))])),o(ta,g([oa("color"),o(ln,"width","100%"),o(ln,"height","26px"),o(ln,"padding","0px"),ra(n),$t(n),Vt(function(l){return o(f0,n,o(Di,Ti,E0(l)))}),Et(h0(c))]),S)]))}}),I0=function(n){return o(B,g([F("p-4 border-y-[0.5px] border-white20")]),g([o(B,g([F("text-lg pb-2")]),g([on(n.fC)])),o(B,g([F("pl-2 pr-2")]),$0(o(Uo,U0,n.aA)))]))},O0=function(n){return o(B,g([F("text-xs text-white60")]),o(X,I0,n))},J0=function(n){return o(B,g([F("absolute left-[104px] bottom-2 text-sm text-white40")]),g([on("clock: "+o(Bu,3,kr(n).V))]))},q0=function(n){n.a;var e=n.b.X;return o(jn,function(r){return Jn(60/(kr(n).V-r))},o(jn,o(K,Eo,function(r){return r.V}),zr(o(Li,59,e))))},Y0=function(n){return o(B,g([F("absolute bottom-2 right-4 text-sm text-white40")]),function(){var e=q0(n);if(e.$===1)return g([on("... Fps")]);var r=e.a;return g([on(yn(r)+" Fps")])}())},Z0=function(n){return{$:0,a:n}},X0=function(n){var e=n.b.X;return te(e)},Q0=function(n){var e=n.b.X;n.b.n;var r=n.b.af;return te(e)+1+te(r)},K0=function(n){return o(ta,g([F("absolute w-full"),oa("range"),Yu(yn(0)),qu(yn(Q0(n)-1)),Et(yn(X0(n))),Zu(yn(1)),Vt(o(K,ki,o(K,pn(42),o(K,Jn,Z0))))]),S)},Ic={$:1},n1={$:3},e1={$:2},Fi=function(n){return!n.b},Oc=$(function(n,e){return o(Dt,g([F("px-2 bg-black40"),F(e),Bt(n)]),g([on("REC")]))}),Jc=$(function(n,e){return o(Dt,g([F("absolute left-[60px] mx-1 px-1 bg-black40"),Bt(e)]),g([o(B,g([F("w-4 h-6 fill-white80")]),g([Yr(n)]))]))}),r1=function(n){var e=n.a,r=n.b.af;return o(B,g([F("py-1")]),g([function(){switch(e.$){case 0:return o(Oc,Ic,"text-red-500 font-bold");case 1:return o(Oc,e1,"text-white80 font-bold");default:return o(B,S,S)}}(),function(){switch(e.$){case 0:return o(B,S,S);case 1:return Fi(r)?o(B,S,S):o(Jc,Ar.fL,n1);default:return o(Jc,Ar.fK,Ic)}}()]))},a1=function(n){return o(B,g([F("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([K0(n),r1(n),Y0(n),J0(n)]))},t1=function(n){var e=n.a;return tn(e,zt)},o1=$(function(n,e){var r=t1(e.J)?o(B,S,S):o(B,g([F("absolute pointer-events-none w-8 h-8"),o(ln,"left",Fn(n.cV.gf+.5*n.b4.gd)+"px"),o(ln,"top",Fn(-n.cV.gj+.5*n.b4.fk)+"px")]),g([o(B,g([F(n.cV.dE?"fill-black80":"fill-white40")]),g([Yr(Ar.cV)]))]));return o(B,S,g([r]))}),i1=$(function(n,e){var r=o(Dt,g([F(e.aQ?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Bt(n0),l0("Distraction Free Mode")]),g([Yr(Ar.gn)])),a=o(B,g([F("absolute w-8 bottom-12")]),g([o(Nc,g([F("fill-twitterBlue40 hover:fill-twitterBlue"),Hc("https://twitter.com/AzizErkalSelman"),Gc("_blank")]),g([Yr(Ar.f6)]))])),t=o(B,g([F("absolute w-8 bottom-2")]),g([o(Nc,g([F("fill-githubCat40 hover:fill-githubCat"),Hc("https://github.com/erkal/elm-3d-playground-exploration"),Gc("_blank")]),g([Yr(Ar.fe)]))]));return e.aQ?o(B,g([F("fixed w-10 h-10 p-1")]),g([r])):o(B,S,g([o(B,g([F("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([r,a,t])),o(B,g([F("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),g([o(it,e0,O0(kr(e.J).eZ))])),o(B,g([F("absolute bottom-0 left-[300px] w-[600px] h-20")]),g([o(it,r0,a1(e.J))])),o(o1,n,e)]))}),c1=w(function(n,e,r){var a=Xm(r.J),t=kr(r.J);return o(B,g([F("bg-black40"),F("select-none"),F("antialiased"),F("font-mono"),o(ln,"width",Fn(t.b4.gd)+"px"),o(ln,"height",Fn(t.b4.fk)+"px")]),g([o(B,g([F("fixed")]),g([o(it,Au(Zm),o(n,t,a))])),o(B,g([ra("gui")]),g([o(i1,t,r),o(it,Ym,o(e,t,a))]))]))}),l1=Yn(function(n,e,r,a,t,i){var c=$(function(u,v){return y(j(Im,e,i,u,v),Rc)}),l=function(u){var v=o(_u,r,u.fr);return y({aQ:u.fr.b4.gd<500,J:o(Om,v,a)},Rc)};return dm({fq:l,f$:Au(qm(em)),f7:c,ga:o(c1,n,t)})}),vt={$:0},Xu=Wf,Qu=xn(function(n,e,r,a,t){return{dn:t,dL:r,bS:a,cU:n,ej:e}}),ia=$(function(n,e){return{$:0,a:n,b:e}}),qc=Lf,Io=m(fa,$(function(n,e){return y(n,e)}),o(L,"A1",qc),o(L,"A2",qc)),$e=$(function(n,e){return{$:0,a:n,b:e}}),Ku=jf,u1=function(){var n=function(e){switch(e){case"X":return dn(0);case"Y":return dn(1);case"Z":return dn(2);default:var r=e;return Ku("Unknown constructor for type Axis: "+r)}};return o(M,n,ar)}(),$1=function(){var n=function(e){switch(e){case"Positive":return dn(0);case"Negative":return dn(1);default:var r=e;return Ku("Unknown constructor for type Sign: "+r)}};return o(M,n,ar)}(),v1=m(fa,$e,o(L,"A1",u1),o(L,"A2",$1)),Yc=m(fa,ia,o(L,"A1",Io),o(L,"A2",v1)),me=$(function(n,e){return{fu:n,bn:e}}),co=m(fa,me,o(L,"last",Io),o(L,"rest",We(Io))),f1=Rf,n$=mn(f1,Qu,o(L,"playerCube",Yc),o(L,"playerPath",co),o(L,"levelEditingCube",Yc),o(L,"levelEditingPath",co),o(L,"calculatedSolutions",We(co))),s1=Ef,e$=function(n){var e=w(function(r,a,t){return{q:t,l:r,n:a}});return j(s1,e,o(L,"before",We(n)),o(L,"current",n),o(L,"after",We(n)))},r$=C(Qu,o(ia,y(0,0),o($e,2,0)),o(me,y(0,0),S),o(ia,y(0,0),o($e,2,0)),o(me,y(0,0),S),S),d1=`
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
`,m1=function(n){return{q:S,l:S,n}},p1=o(Di,m1(r$),o(Xu,e$(n$),d1)),g1={ck:!1,cl:"",cm:"",ee:J,c4:0},Rt={$:0},b1=Rt,h1=function(n){return{a9:y(0,0),o:g1,a:p1,c4:vt,bs:b1}},Xe=$(function(n,e){return y(n,Lu(e))}),A1=w(function(n,e,r){return{aA:r,fs:e,fC:n}}),Bi=he,_1=function(n){return m(Ae,$(function(e,r){var a=e.a,t=e.b;return m(hr,a,t,r)}),Bi,n)},w1=w(function(n,e,r){return m(A1,n,e,_1(r))}),lo=w1,Te=w(function(n,e,r){var a=e.a,t=e.b;return y(n,o(ku,y(a,t),r))}),ne=Zv,uo=function(n){return n/255},Qe=w(function(n,e,r){return j(Je,uo(n),uo(e),uo(r),1)}),y1=g([m(lo,"Camera",!0,g([m(Te,"camera distance",y(3,60),20),m(Te,"camera azimuth",y(-ne,ne),0),m(Te,"camera elevation",y(-ne/2,ne/2),-.15)])),m(lo,"Parameters",!0,g([m(Te,"cubes side length",y(.5,1),.95),m(Te,"duration of step animation",y(.1,1),.23),m(Te,"duration of mistake animation",y(.1,1),.5),m(Te,"height of following lights",y(.1,8),5)])),m(lo,"Colors and light",!0,g([m(Te,"lumens of following lights",y(4e4,12e4),1e5),o(Xe,"background color",m(Qe,150,150,150)),o(Xe,"color 1",m(Qe,244,88,67)),o(Xe,"color 2",m(Qe,255,200,40)),o(Xe,"path color",m(Qe,244,88,67)),o(Xe,"board color",m(Qe,200,170,170)),o(Xe,"finish mark color",m(Qe,150,215,106)),o(Xe,"wall color",m(Qe,38,48,64))]))]),zn=function(n){var e=n;return e.n},x1=function(n){return{$:1,a:n}},Ia=Yn(function(n,e,r,a,t,i){var c=i.c4;return c.$?i:W(i,{c4:x1({cF:t,bp:r,b6:e,aj:n.V,eJ:a})})}),S1={$:1},C1={$:0},$o=function(n){return{$:2,a:n}},a$=$(function(n,e){return o(Tt,function(r){return tn(r,n)},e)}),Oa=$(function(n,e){var r=e.fu,a=e.bn;return o(a$,n,o(k,r,a))}),Oo=function(n){return tn(n,o($e,2,0))},ft=$(function(n,e){var r=e.a,a=e.b;switch(n){case 0:return y(r,a+1);case 1:return y(r,a-1);case 2:return y(r-1,a);default:return y(r+1,a)}}),t$=function(n){return n?0:1},za=function(n){var e=n.a,r=n.b;switch(e){case 0:return o($e,e,r);case 1:return o($e,2,r);default:return o($e,1,t$(r))}},Ta=function(n){var e=n.a,r=n.b;switch(e){case 0:return o($e,2,t$(r));case 1:return o($e,e,r);default:return o($e,0,r)}},P1=function(n){switch(n){case 0:return o(K,za,o(K,za,za));case 1:return za;case 2:return o(K,Ta,o(K,Ta,Ta));default:return Ta}},o$=$(function(n,e){var r=e.a,a=e.b;return o(ia,o(ft,n,r),o(P1,n,a))}),j1=$(function(n,e){var r=o(o$,n,e.dL),a=r.a,t=e.dL,i=t.b,c=e.bS.bn;if(c.b){var l=c.a,u=c.b;return tn(l,a)?$o(W(e,{dL:r,bS:o(me,l,u)})):Oo(i)?C1:o(Oa,a,e.bS)?S1:$o(W(e,{dL:r,bS:o(me,a,o(k,e.bS.fu,o(k,l,u)))}))}else return $o(W(e,{dL:r,bS:o(me,a,g([e.bS.fu]))}))}),L1=V(function(n,e,r,a){var t=o(j1,n,zn(a.a));switch(t.$){case 0:return a;case 1:return a;default:var i=t.a;return mn(Ia,r,e,n,!1,i,a)}}),k1=function(n){return{$:2,a:n}},Zc=xn(function(n,e,r,a,t){var i=t.c4;return i.$?t:W(t,{c4:k1({bp:a,b6:r,aj:n.V,df:e})})}),z1=function(n){return{$:3,a:n}},T1=function(n){return{$:1,a:n}},Xc=function(n){return{$:2,a:n}},Vr=function(n){return{$:0,a:n}},st=function(n){var e=n.bn;return 1+te(e)},i$=$(function(n,e){var r=o(o$,n,e.cU),a=r.a,t=r.b,i=e.ej.bn;if(i.b){var c=i.a,l=i.b;if(tn(c,a))return T1(W(e,{cU:r,ej:o(me,c,l)}));if(o(Oa,a,e.bS)){if(o(Oa,a,e.ej))return Vr(3);var u=W(e,{cU:r,ej:o(me,a,o(k,e.ej.fu,o(k,c,l)))});return tn(a,e.bS.fu)?tn(st(u.ej),st(u.bS))&&Oo(t)?z1(u):Vr(0):Oo(t)?Vr(1):Xc(u)}else return Vr(2)}else return o(Oa,a,e.bS)?Xc(W(e,{cU:r,ej:o(me,a,g([e.ej.fu]))})):Vr(2)}),M1=V(function(n,e,r,a){var t=o(i$,n,zn(a.a));switch(t.$){case 0:switch(t.a){case 3:return t.a,a;case 2:return t.a,a;case 1:return t.a,C(Zc,r,1,e,n,a);default:return t.a,C(Zc,r,0,e,n,a)}case 2:var i=t.a;return mn(Ia,r,e,n,!1,i,a);case 1:var i=t.a;return mn(Ia,r,e,n,!1,i,a);default:var i=t.a;return mn(Ia,r,e,n,!0,i,a)}}),Qc=function(n){var e=n.a;return e},D1=function(n){var e=g([n.dc,n.ci,n.dI,n.et]);n:for(;;)if(e.b)if(e.a)if(e.b.b&&!e.b.a&&e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var r=e.b,a=r.b;return a.b,U(0)}else break n;else if(e.b.b)if(e.b.a)if(e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var t=e.b,i=t.b;return i.b,U(1)}else break n;else if(e.b.b.b)if(e.b.b.a)if(e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var c=e.b,l=c.b;return l.b,U(2)}else break n;else if(e.b.b.b.b&&e.b.b.b.a&&!e.b.b.b.b.b){var u=e.b,v=u.b;return v.b,U(3)}else break n;else break n;else break n;else break n;return J},ga=function(n){return{$:2,a:n}},F1=Pt(ga(3)),B1=Pt(ga(0)),V1=Pt(ga(1)),E1=Pt(ga(2)),R1=function(n){return E1(n)?U(0):F1(n)?U(1):B1(n)?U(2):V1(n)?U(3):J},W1=$(function(n,e){var r=y(R1(e.bs),D1(n.dH));if(r.a.$){if(r.b.$)return J;var t=r.b.a;return U(t)}else{var a=r.a.a;return U(a)}}),N1={$:3},H1=$(function(n,e){return o(jn,function(r){if(r.$)return 0;var a=r.b;return a},o(ma,n,e.aA))}),G1=$(function(n,e){return o(pn,0,zr(o(pa,H1(n),e)))}),U1=$(function(n,e){return o(G1,n,e.eZ)}),bn=U1,I1=$(function(n,e){var r=e;return W(r,{n})}),O1=$(function(n,e){var r=e.c4;switch(r.$){case 1:var i=r.a.aj,a=r.a.cF,t=r.a.eJ;return Z(n.V-i,o(bn,"duration of step animation",n))>0?W(e,{a:o(I1,a,e.a),c4:t?N1:vt}):e;case 2:var i=r.a.aj;return Z(n.V-i,o(bn,"duration of mistake animation",n))>0?W(e,{c4:vt}):e;default:return e}}),Cr=function(n){var e=n.fu,r=n.bn;return o(k,e,r)},Kc=function(n){if(n.b){var e=n.a,r=n.b;return U(m(Ae,On,e,r))}else return J},_r=$(function(n,e){return Z(n,e)<0?n:e}),nl=function(n){if(n.b){var e=n.a,r=n.b;return U(m(Ae,_r,e,r))}else return J},J1=function(n){var e=Cr(n.bS),r={d5:o(pn,0,Kc(o(X,o(K,Eo,Hr),e))),d6:o(pn,0,Kc(o(X,o(K,Wc,Hr),e))),d8:o(pn,0,nl(o(X,o(K,Eo,Hr),e))),d9:o(pn,0,nl(o(X,o(K,Wc,Hr),e)))},a=r.d8,t=r.d5,i=r.d9,c=r.d6;return{gf:.5*(a+t),gj:.5*(i+c)}},oe=function(n){return n},br=function(n){return oe(ne*(n/180))},Vi=function(n){return n},Hn=function(n){return n},dt=function(n){var e=n;return-e},q1=$(function(n,e){var r=n,a=e;return{gf:r.gj*a.dj-r.dj*a.gj,gj:r.dj*a.gf-r.gf*a.dj,dj:r.gf*a.gj-r.gj*a.gf}}),c$=function(n){var e=n;return e.dh},l$=function(n){var e=n;return e.di},Y1=function(n){return o(q1,c$(n),l$(n))},lr=function(n){var e=n;return e.cK},tr=Xv,or=Qv,Ja=w(function(n,e,r){var a=n,t=e,i=r,c=.5*t,l=tr(c),u=or(c),v=a.e3,f=v,s=f.gf*u,p=l*s,d=s*s,h=f.gj*u,b=l*h,_=s*h,x=h*h,A=1-2*(d+x),P=f.dj*u,D=l*P,I=2*(_-D),H=2*(_+D),N=s*P,G=2*(N+b),O=2*(N-b),E=h*P,nn=2*(E-p),an=2*(E+p),gn=P*P,An=1-2*(x+gn),sn=1-2*(d+gn);return{gf:An*i.gf+I*i.gj+G*i.dj,gj:H*i.gf+sn*i.gj+nn*i.dj,dj:O*i.gf+an*i.gj+A*i.dj}}),ba=w(function(n,e,r){var a=n,t=e,i=r,c=.5*t,l=tr(c),u=or(c),v=a.cK,f=v,s=i.gf-f.gf,p=i.gj-f.gj,d=i.dj-f.dj,h=a.e3,b=h,_=b.gf*u,x=l*_,A=_*_,P=b.gj*u,D=l*P,I=_*P,H=P*P,N=1-2*(A+H),G=b.dj*u,O=l*G,E=2*(I-O),nn=2*(I+O),an=_*G,gn=2*(an+D),An=2*(an-D),sn=P*G,Sn=2*(sn-x),Gn=2*(sn+x),En=G*G,ke=1-2*(H+En),ze=1-2*(A+En);return{gf:f.gf+ke*s+E*p+gn*d,gj:f.gj+nn*s+ze*p+Sn*d,dj:f.dj+An*s+Gn*p+N*d}}),Ce=function(n){return n},qe=function(n){var e=n;return e.dh},Ye=function(n){var e=n;return e.di},Ze=function(n){var e=n;return e.dk},u$=w(function(n,e,r){return Ce({cK:m(ba,n,e,lr(r)),dh:m(Ja,n,e,qe(r)),di:m(Ja,n,e,Ye(r)),dk:m(Ja,n,e,Ze(r))})}),el=w(function(n,e,r){return m(u$,n(r),e,r)}),Wt=function(n){var e=n;return e.e3},Tr=$(function(n,e){var r=n,a=e;return{gf:a.gf+r.gf,gj:a.gj+r.gj,dj:a.dj+r.dj}}),$$=$(function(n,e){return Ce({cK:o(Tr,n,lr(e)),dh:qe(e),di:Ye(e),dk:Ze(e)})}),Z1=$(function(n,e){var r=n,a=e;return{gf:r*a.gf,gj:r*a.gj,dj:r*a.dj}}),X1=w(function(n,e,r){return o($$,o(Z1,e,n),r)}),Q1=w(function(n,e,r){return m(X1,Wt(n(r)),e,r)}),qn=$(function(n,e){return{e3:e,cK:n}}),K1=function(n){var e=n;return o(qn,e.cK,e.dh)},np=function(n){var e=n;return o(qn,e.cK,e.di)},ep=function(n){var e=n;return o(qn,e.cK,e.dk)},rp=function(n){var e=Ce({cK:n.aW,dh:l$(n.dy),di:Y1(n.dy),dk:c$(n.dy)}),r=m(Q1,ep,n.ch,m(el,K1,dt(n.bL),m(el,np,n.bG,e)));return r},ap=function(n){return{$:0,a:n}},vn=function(n){var e=n;return Q(e)},qa=function(n){var e=n;return .5*e},tp=Kv,op=function(n){var e=n;return tp(e)},ip=function(n){var e=qa(vn(n.eF)),r=op(e);return{cX:ap(r),de:n.de}},Bn={gf:0,gj:0,dj:0},v$=Nn,pe=function(n){return n},f$=pe({gf:1,gj:0,dj:0}),Nt=f$,Ei=pe({gf:0,gj:0,dj:1}),Ht=Ei,cp=v$({cK:Bn,dh:Ht,di:Nt}),lp=function(n){var e=n.aW,r=n.bG,a=n.bL,t=n.ch;return ip({eF:br(40),de:rp({bG:oe(r),ch:Hn(t),bL:oe(a),aW:Vi(e),dy:cp})})},s$=$(function(n,e){return lp({bG:o(bn,"camera azimuth",n),ch:o(bn,"camera distance",n),bL:o(bn,"camera elevation",n),aW:function(){var r=J1(zn(e.a));return{gf:r.gf,gj:r.gj,dj:0}}()})}),up=w(function(n,e,r){return{gf:n,gj:e,dj:r}}),Ma=function(n){return n},Ya=function(n){var e=n;return e},$p=$(function(n,e){var r=n,a=e;return a.gf*r.gf+a.gj*r.gj+a.dj*r.dj}),rn=$(function(n,e){var r=e;return n*r}),Ri=function(n){var e=n;return e.cK},vp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.fE,l=c;return(a.gf-i.gf)*l.gf+(a.gj-i.gj)*l.gj+(a.dj-i.dj)*l.dj}),fp=w(function(n,e,r){var a=n,t=e,i=r;return{gf:i.gf+t*a.gf,gj:i.gj+t*a.gj,dj:i.dj+t*a.dj}}),sp=$(function(n,e){var r=Wt(e),a=n,t=a.fE,i=o($p,t,r);if(i){var c=Ri(e),l=o(vp,n,c),u=o(rn,-1/i,l);return U(m(fp,r,u,c))}else return J}),dp=$(function(n,e){return{gf:n,gj:e}}),rl=$(function(n,e){var r=n,a=e;return r*a}),mp=function(n){var e=n;return e},al=function(n){var e=n;return mp(e.eP)},pp=function(n){var e=n;return e.aP},De=of,gp=function(n){var e=n,r=o(On,Q(e.gf),o(On,Q(e.gj),Q(e.dj)));if(r){var a=e.dj/r,t=e.gj/r,i=e.gf/r,c=De(i*i+t*t+a*a);return U({gf:i/c,gj:t/c,dj:a/c})}else return J},d$=$(function(n,e){var r=e;return r/n}),Jo=function(n){var e=n;return lr(e)},Wi=pe({gf:0,gj:0,dj:-1}),bp=$(function(n,e){var r=n,a=e;return a/r}),hp=$(function(n,e){var r=n,a=e,t=r.dk,i=t,c=r.di,l=c,u=r.dh,v=u;return{gf:v.gf*a.gf+l.gf*a.gj+i.gf*a.dj,gj:v.gj*a.gf+l.gj*a.gj+i.gj*a.dj,dj:v.dj*a.gf+l.dj*a.gj+i.dj*a.dj}}),Be=function(n){var e=n;return{gf:-e.gf,gj:-e.gj,dj:-e.dj}},qo=function(n){var e=n;return Be(Ze(e))},Ap=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.dh,l=c;return(a.gf-i.gf)*l.gf+(a.gj-i.gj)*l.gj}),Ni=w(function(n,e,r){var a=n,t=e,i=r;return{gf:a,gj:t,dj:i}}),_p=V(function(n,e,r,a){var t=n,i=e,c=r,l=a,u=t.cK,v=u,f=t.dk,s=f,p=t.di,d=p,h=t.dh,b=h;return{gf:v.gf+i*b.gf+c*d.gf+l*s.gf,gj:v.gj+i*b.gj+c*d.gj+l*s.gj,dj:v.dj+i*b.dj+c*d.dj+l*s.dj}}),wp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.di,l=c;return(a.gf-i.gf)*l.gf+(a.gj-i.gj)*l.gj}),ye=0,yp=w(function(n,e,r){var a=n,t=o(wp,al(e),r),i=o(Ap,al(e),r),c=a.de,l=c,u=pp(e);u.a;var v=u.b,f=a.cX;if(f.$){var h=f.a,b=o(bp,v,h),_=j(_p,l,o(rl,b,i),o(rl,b,t),ye);return o(qn,_,qo(a.de))}else{var s=f.a,p=dt(o(d$,s,o(rn,.5,v))),d=o(hp,l,o(pn,Wi,gp(m(Ni,i,t,p))));return o(qn,Jo(a.de),d)}}),Yo=function(n){var e=n;return{gf:tr(e),gj:or(e)}},xp=function(n){var e=n;return{gf:-e.gj,gj:e.gf}},Sp=function(n){return n},Cp=$(function(n,e){return Sp({cK:e,dh:n,di:xp(n)})}),Pp=$(function(n,e){return o(Cp,Yo(n),e)}),jp=w(function(n,e,r){var a=n.a,t=n.b;return{eP:o(Pp,e,r),aP:y(vn(a),vn(t))}}),Ve=function(n){var e=n;return e.gf},Lp=$(function(n,e){var r=n,a=e;return{gf:r,gj:a}}),Ee=function(n){var e=n;return e.gj},Re=function(n){var e=n;return e.dj},kp=V(function(n,e,r,a){var t=r.gf,i=r.gj,c=function(v){return m(up,Ya(Ve(v)),Ya(Ee(v)),Ya(Re(v)))},l=m(jp,y(Ma(e.gd),Ma(e.fk)),br(0),o(dp,0,0)),u=o(Lp,Ma(t),Ma(i));return o(jn,c,o(sp,a,m(yp,n,l,u)))}),zp=$(function(n,e){return{fE:n,cK:e}}),Tp=$(function(n,e){var r=e;return o(zp,r.fE,o(Tr,n,r.cK))}),Mp=$(function(n,e){return{fE:e,cK:n}}),Dp=o(Mp,Bn,Ht),Fp=V(function(n,e,r,a){return j(kp,e,r,a,o(Tp,m(Ni,Hn(0),Hn(0),Hn(n)),Dp))}),Bp=Fp(0),Vp=$(function(n,e){return W(e,{a9:o(pn,e.a9,o(jn,function(r){var a=r.gf,t=r.gj;return y(Jn(a),Jn(t))},m(Bp,o(s$,n,e),n.b4,n.cV)))})}),Ep=function(n){return n.$===2?Rt:n},Rp=$(function(n,e){return n.cV.dE?e:Rt}),Wp=$(function(n,e){return De(o(Ne,n.gf-e.gf,2)+o(Ne,n.gj-e.gj,2))}),Np=w(function(n,e,r){var a=y(e,r),t=a.a,i=a.b;return Z(o(Wp,t,i),n)<0?J:Z(i.gf-t.gf,Q(i.gj-t.gj))>0?U(1):Z(t.gf-i.gf,Q(i.gj-t.gj))>0?U(0):Z(i.gj-t.gj,Q(i.gf-t.gf))>0?U(2):U(3)}),m$=function(n){return{gf:n.cV.gf,gj:n.cV.gj}},Hp=w(function(n,e,r){var a=e.f3,t=y(r,n.cV.dE);if(t.a.$===1&&t.b){var i=t.a.a,c=m(Np,a,i,m$(n));if(c.$)return r;var l=c.a;return ga(l)}else return r}),Gp=function(n){return{$:1,a:n}},Up=$(function(n,e){return e.$===1?e:n.cV.dE?Gp(m$(n)):Rt}),Ip=w(function(n,e,r){return m(Hp,n,e,o(Rp,n,o(Up,n,Ep(r))))}),Op=$(function(n,e){return W(e,{bs:m(Ip,n,{f3:20},e.bs)})}),Jp=$(function(n,e){var r=zn(e.a).cU,a=zn(e.a).dL,t=function(){var i=o(W1,n,e);if(i.$===1)return Nn;var c=i.a;return e.o.ck?m(L1,c,Qc(a),n):m(M1,c,Qc(r),n)}();return o(O1,n,t(o(Vp,n,o(Op,n,e))))}),qp=$(function(n,e){var r=e;return W(r,{l:o(k,r.n,r.l),n})}),Yp=$(function(n,e){return e.b?m(Le,k,e,n):n}),re=function(n){return m(Le,Yp,S,n)},ha=$(function(n,e){return re(o(X,n,e))}),Mr=$(function(n,e){return m(Le,$(function(r,a){return n(r)?o(k,r,a):a}),S,e)}),p$=w(function(n,e,r){n:for(;;){if(r.$===-2)return e;var a=r.b,t=r.c,i=r.d,c=r.e,l=n,u=m(n,a,t,m(p$,n,e,i)),v=c;n=l,e=u,r=v;continue n}}),Zp=$(function(n,e){return m(p$,w(function(r,a,t){return o(Ru,r,t)}),n,e)}),Xp=$(function(n,e){var r=n,a=e;return o(Zp,r,a)}),g$=Bi,b$=$(function(n,e){var r=e;return m(hr,n,0,r)}),tl=function(n){return m(Ae,b$,g$,n)},Qp=$(function(n,e){var r=o(ma,n,e);return!r.$}),h$=$(function(n,e){var r=e;return o(Qp,n,r)}),Kp=$(function(n,e){return o(Mr,function(r){return o(h$,r,n)},o(X,function(r){return o(ft,r,e)},g([0,1,2,3])))}),ng=$(function(n,e){var r=$(function(a,t){n:for(;;)if(t.b){var i=t.a,c=t.b,l=o(Mr,function(f){return!(o(a$,f,t)||o(h$,f,a))},o(Kp,e,i)),u=o(b$,i,a),v=un(c,l);a=u,t=v;continue n}else return a});return o(r,g$,g([n]))}),A$=$(function(n,e){n:for(;;){if(e.$===-2)return n;var r=e.d,a=e.e,t=o(A$,n+1,a),i=r;n=t,e=i;continue n}}),eg=function(n){return o(A$,0,n)},ol=function(n){var e=n;return eg(e)},rg=function(n){var e=ol(n);return o(pn,!1,o(jn,function(r){return Z(ol(o(ng,r,n)),e)<0},zr(Rd(n))))},ag=function(n){return rg(o(Xp,tl(Cr(n.bS)),tl(Cr(n.ej))))},tg=function(n){var e=n.fu,r=n.bn;return o(pn,e,zr(kn(r)))},Hi=function(n){var e=tg(n.bS);return W(n,{cU:o(ia,e,o($e,2,0)),ej:o(me,e,S)})},og=function(n){var e=$(function(r,a){n:for(;;){if(Fi(a))return r;var t=un(r,a),i=o(ha,function(c){return ag(c)?S:o(pa,function(l){var u=o(i$,l,c);switch(u.$){case 0:return J;case 1:return J;case 2:var v=u.a;return U(v);default:var v=u.a;return U(v)}},g([0,1,2,3]))},a);r=t,a=i;continue n}});return o(Mr,function(r){return tn(st(r),st(n.bS))},o(X,function(r){return r.ej},o(e,S,g([Hi(n)]))))},mt=$(function(n,e){return m(Ae,Of(n),Gf(),e)}),Dr=function(n){return m(Ae,$(function(e,r){var a=e.a,t=e.b;return m(If,a,t,r)}),Uf(),n)},ig=$(function(n,e){var r=e;return Dr(g([y("before",o(mt,n,r.l)),y("current",n(r.n)),y("after",o(mt,n,r.q))]))}),il=ui,Zo=function(n){var e=n.a,r=n.b;return Dr(g([y("A1",il(e)),y("A2",il(r))]))},cg=function(n){return zi(function(){switch(n){case 0:return"X";case 1:return"Y";default:return"Z"}}())},lg=function(n){return zi(function(){return n?"Negative":"Positive"}())},ug=function(n){var e=n.a,r=n.b;return Dr(g([y("A1",cg(e)),y("A2",lg(r))]))},cl=function(n){var e=n.a,r=n.b;return Dr(g([y("A1",Zo(e)),y("A2",ug(r))]))},vo=function(n){return Dr(g([y("last",Zo(n.fu)),y("rest",o(mt,Zo,n.bn))]))},$g=function(n){return Dr(g([y("playerCube",cl(n.cU)),y("playerPath",vo(n.ej)),y("levelEditingCube",cl(n.dL)),y("levelEditingPath",vo(n.bS)),y("calculatedSolutions",o(mt,vo,n.dn))]))},vg=$(function(n,e){return W(e,{cl:o($u,2,o(ig,o(K,Hi,$g),n))})}),fg=function(n){var e=n;return un(kn(e.l),un(g([e.n]),e.q))},sg=$(function(n,e){var r=e,a=fg(r),t=o(aa,te(a)+1,n),i=o(Li,t-1,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:kn(o(Pu,t-1,a)),n:c}}else return r}),dg=function(n){var e=n,r=e.q;if(r.b){var a=r.a,t=r.b;return U({q:t,l:o(k,e.n,e.l),n:a})}else return J},mg=function(n){var e=n,r=e.l;if(r.b){var a=r.a,t=r.b;return U({q:o(k,e.n,e.q),l:t,n:a})}else return J},pg=$(function(n,e){var r=e;return{q:o(X,n,r.q),l:o(X,n,r.l),n:n(r.n)}}),gg=$(function(n,e){var r=e;return W(r,{n:n(r.n)})}),bg=function(n){var e=n,r=e.q;if(r.b){var a=r.a,t=r.b;return W(e,{q:t,l:o(k,a,e.l)})}else return W(e,{q:kn(e.l),l:S})},hg=function(n){var e=n,r=e.l;if(r.b){var a=r.a,t=r.b;return W(e,{l:t,n:a})}else{var i=e.q;if(i.b){var a=i.a,t=i.b;return W(e,{q:t,n:a})}else return e}},Ag=$(function(n,e){return W(e,{cm:n})}),_g=$(function(n,e){return W(e,{ck:n,c4:0})}),wg=w(function(n,e,r){var a=r.o;switch(e.$){case 0:var t=e.a;return W(r,{o:o(_g,t,r.o),a:o(pg,Hi,r.a),c4:vt});case 1:return W(r,{a:o(gg,function(u){return W(u,{dn:og(zn(r.a))})},r.a)});case 2:var i=e.a;return W(r,{o:W(a,{ee:U(i)})});case 3:return W(r,{o:W(a,{ee:J})});case 4:var c=e.a;return W(r,{a:o(sg,c,r.a)});case 5:return W(r,{a:o(pn,r.a,mg(r.a))});case 6:return W(r,{a:o(pn,r.a,dg(r.a))});case 7:return W(r,{a:o(qp,r$,r.a)});case 8:return W(r,{a:hg(r.a)});case 9:return W(r,{a:bg(r.a)});case 10:return W(r,{o:o(vg,r.a,r.o)});case 11:return W(r,{a:o(Di,r.a,o(Xu,e$(n$),r.o.cm))});default:var l=e.a;return W(r,{o:o(Ag,l,r.o)})}}),Da=ie("br"),Gr=ie("p"),Ur=ie("span"),yg=$(function(n,e){return o(B,g([o(ln,"position","fixed"),o(ln,"width","100%"),o(ln,"text-align","center"),o(ln,"font-size","14px")]),g([o(B,g([F("text-lg font-bold")]),g([on("The Red-Faced Cube")])),o(Gr,g([F("font-bold italic")]),g([o(Gr,S,g([on("A puzzle from the book Mathematical Carnival")])),o(Gr,S,g([on("(1975, Martin Gardner)")]))])),o(Gr,g([F("text-xs")]),g([o(Ur,function(){var r=e.c4;if(r.$===2){r.a.aj;var a=r.a.df;return a?S:g([o(ln,"background-color","red")])}else return S}(),g([on(" Visit each cell exactly once.")])),o(Da,S,S),o(Ur,S,g([on("End with the cube red side up on the (marked) finish cell.")])),o(Da,S,S),o(Ur,function(){var r=e.c4;if(r.$===2){r.a.aj;var a=r.a.df;return a===1?g([o(ln,"background-color","red")]):S}else return S}(),g([on("At no time during the tour, however,"),o(Da,S,S),on("is the cube allowed to rest with the red side up.")])),o(Da,S,S),o(Ur,S,g([on("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Gi=function(n){return n},Ui=w(function(n,e,r){return Z(r,n)<0?n:Z(r,e)>0?e:r}),xg=function(n){var e=n;return e},Sg=function(n){var e=m(Ui,1667,25e3,xg(n)),r=e<=4e3?-.2661239*1e9/(e*e*e)-.2343589*1e6/(e*e)+.8776956*1e3/e+.17991:-3.0258469*1e9/(e*e*e)+2.1070379*1e6/(e*e)+.2226347*1e3/e+.24039,a=e<=2222?-1.1063814*(r*r*r)-1.3481102*(r*r)+2.18555832*r-.20219683:e<=4e3?-.9549476*(r*r*r)-1.37418593*(r*r)+2.09137015*r-.16748867:3.081758*(r*r*r)-5.8733867*(r*r)+3.75112997*r-.37001483;return Gi({gf:r,gj:a})},Cg=function(n){return n},Pg=function(n){return{$:0,a:n}},jg=Pg,Lg={$:3},kg=Lg,zg=V(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),Tg=zg,Mg=function(n){return{$:1,a:n}},Dg=Mg,Fg=function(n){return o(cr,"height",yn(n))},Bg=function(n){return vs(ms(n))},Vg=Bg,Eg=function(n){return{$:2,a:n}},Rg=Eg,_$=function(n){return o(nr,"",n)},Wg=function(n){var e=n.a,r=n.b,a=n.c,t=n.d,i=function(l){return Jn(l*1e3)/1e3},c=function(l){return Jn(l*1e4)/100};return _$(g(["rgba(",Fn(c(e)),"%,",Fn(c(r)),"%,",Fn(c(a)),"%,",Fn(i(t)),")"]))},Ng=$(function(n,e){switch(e.$){case 0:return o(fd,n,e);case 1:return o(sd,n,e);case 2:return o(dd,n,e);case 3:return o(md,n,e);case 4:return o(pd,n,e);default:return o(gd,n,e)}}),Hg=$(function(n,e){switch(e.$){case 0:return o(Hs,n,e);case 1:return o(Gs,n,e);case 2:return o(Us,n,e);case 3:return o(Is,n,e);case 4:return o(Os,n,e);case 5:return o(Js,n,e);case 6:return o(qs,n,e);case 7:return o(Ys,n,e);default:return Zs(n)}}),Gg=w(function(n,e,r){return m(vd,n,e,r)}),ll=function(n){var e=n;return e},Fr=jd,fo=j(Fr,1,1,1,1),ve=w(function(n,e,r){return o(X,function(a){return o(a,e,r)},n)}),Ug=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Ig=$(function(n,e){var r=n,a=e.gf,t=e.gj;return m(Ug,r*a/t,r,r*(1-a-t)/t)}),Aa=wd,Og=function(n){var e=n.a,r=n.b,a=n.c;return m(Aa,3.2406*e-1.5372*r-.4986*a,-.9689*e+1.8758*r+.0415*a,.0557*e-.204*r+1.057*a)},Gt=$(function(n,e){return Og(o(Ig,n,e))}),w$=$(function(n,e){return{dF:tn(n.dF,e.dF),u:n.u*e.u+n.v*e.x+n.w*e.A,v:n.u*e.v+n.v*e.y+n.w*e.B,w:n.u*e.w+n.v*e.z+n.w*e.C,x:n.x*e.u+n.y*e.x+n.z*e.A,y:n.x*e.v+n.y*e.y+n.z*e.B,z:n.x*e.w+n.y*e.z+n.z*e.C,A:n.A*e.u+n.B*e.x+n.C*e.A,B:n.A*e.v+n.B*e.y+n.C*e.B,C:n.A*e.w+n.B*e.z+n.C*e.C,K:e.K+(n.K*e.u+n.L*e.x+n.M*e.A)*e.b3,L:e.L+(n.K*e.v+n.L*e.y+n.M*e.B)*e.b3,M:e.M+(n.K*e.w+n.L*e.z+n.M*e.C)*e.b3,b3:n.b3*e.b3}}),fe=Dd,Jg=function(n){return fe({dQ:n.u,dR:n.x,dS:n.A,dT:n.K,dU:n.v,dV:n.y,dW:n.B,dX:n.L,dY:n.w,dZ:n.z,d_:n.C,d$:n.M,d0:0,d1:0,d2:0,d3:1})},so=xn(function(n,e,r,a,t){var i=a.dF?1:-1,c=j(Fr,a.b3,a.b3,a.b3,i);return mn(t,n,c,Jg(a),a.dF,e,r)}),y$=Yn(function(n,e,r,a,t,i){n:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=n,v=e,f=r,s=o(w$,c,a),p=l,d=i;n=u,e=v,r=f,a=s,t=p,i=d;continue n;case 1:var h=t.b,b=o(k,C(so,n,e,r,a,h),i.P);return{P:b,Y:i.Y,fU:i.fU};case 3:var _=t.b,x=o(k,C(so,n,e,r,a,_),i.Y);return{P:i.P,Y:x,fU:i.fU};case 2:var A=t.a,P=o(k,C(so,n,e,r,a,A),i.fU);return{P:i.P,Y:i.Y,fU:P};default:var D=t.a;return m(Ae,j(y$,n,e,r,a),i,D)}}),qg=V(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),x$=qg,Ii=V(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),Yg=function(n){var e=n.ac,r=n._,a=n.Z;return j(Ii,518,e,r,a)},Zg=$(function(n,e){return{$:6,a:n,b:e}}),Xg=Zg,S$=g([Yg({Z:1,_:0,ac:!1}),j(x$,!1,!1,!1,!1),o(Xg,0,1)]),Pr=519,Oi=8,C$=15,wr=7681,Qg={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},$n=Ns,Kg=$(function(n,e){return{$:0,a:n,b:e}}),n3=Kg({ds:1,dB:0,ec:5}),Un=Ad,e3=n3(g([{em:o(Un,-1,-1)},{em:o(Un,1,-1)},{em:o(Un,-1,1)},{em:o(Un,1,1)}])),r3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"em"},uniforms:{}},a3=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:n,b:e,c:r,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Ji=w(function(n,e,r){var a=n.cZ,t=n.cx,i=n.dg,c=$(function(v,f){var s=v;return f(s)}),l=$(function(v,f){var s=v;return f(s)}),u=function(v){return o(K,c(v.bu),o(K,l(v.be),o(K,l(v.bC),l(v.bD))))};return o(u,r,o(u,e,m(a3,a,t,i)))}),qi=function(n){return m(Ji,{cx:n.cx,cZ:n.cZ,dg:n.dg},{be:n.be,bu:n.bu,bC:n.bC,bD:n.bD},{be:n.be,bu:n.bu,bC:n.bC,bD:n.bD})},Yi=function(n){return C($n,g([qi(n),j(x$,!1,!1,!1,!1)]),r3,Qg,e3,{})},t3=Yi({be:wr,cx:0,cZ:Oi,bu:Pr,dg:C$,bC:wr,bD:wr}),o3=516,ul=5386,Vn=7680,i3=function(n){return o(Ne,2,n+4)},P$=function(n){return Yi({be:Vn,cx:C$,cZ:Oi,bu:o3,dg:i3(n),bC:ul,bD:ul})},c3=w(function(n,e,r){return re(g([m(ve,n,r,S$),g([P$(e),t3])]))}),l3=$(function(n,e){return re(o(Ct,c3(n),e))}),u3=function(n){var e=n.ac,r=n._,a=n.Z;return j(Ii,513,e,r,a)},$3=u3({Z:1,_:0,ac:!0}),v3=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:n,b:e,c:r,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},f3=function(n){var e=n.b1,r=n.bN,a=n.bH,t=n.bE,i=n.bJ,c=n.aM,l=$(function(u,v){var f=u.a,s=u.b,p=u.c,d=v.a,h=v.b,b=v.c;return v3(f)(s)(p)(d)(h)(b)(e)(r)(a)(t)});return o(l,i,c)},s3=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),$l=$(function(n,e){var r=n,a=e;return m(s3,32774,r,a)}),d3=1,vl=771,m3=770,Zi=f3({bE:0,aM:o($l,d3,vl),bH:0,bJ:o($l,m3,vl),bN:0,b1:0}),sr=g([$3,Zi]),p3=function(n){var e=n;return e.d5},g3=function(n){var e=n;return e.d6},j$=function(n){var e=n;return e.d7},b3=function(n){var e=n;return e.d8},h3=function(n){var e=n;return e.d9},L$=function(n){var e=n;return e.ea},Se=$(function(n,e){var r=n,a=e;return a-r}),k$=function(n){return T(o(Se,b3(n),p3(n)),o(Se,h3(n),g3(n)),o(Se,L$(n),j$(n)))},A3=function(n){return n},_3=function(n){return Ce({cK:A3({gf:n.K,gj:n.L,dj:n.M}),dh:pe({gf:n.u,gj:n.v,dj:n.w}),di:pe({gf:n.x,gj:n.y,dj:n.z}),dk:pe({gf:n.A,gj:n.B,dj:n.C})})},mo=$(function(n,e){var r=n,a=e,t=r.dk,i=t,c=r.di,l=c,u=r.dh,v=u;return{gf:a.gf*v.gf+a.gj*v.gj+a.dj*v.dj,gj:a.gf*l.gf+a.gj*l.gj+a.dj*l.dj,dj:a.gf*i.gf+a.gj*i.gj+a.dj*i.dj}}),z$=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=a.gf-i.gf,l=a.gj-i.gj,u=a.dj-i.dj,v=r.dk,f=v,s=r.di,p=s,d=r.dh,h=d;return{gf:c*h.gf+l*h.gj+u*h.dj,gj:c*p.gf+l*p.gj+u*p.dj,dj:c*f.gf+l*f.gj+u*f.dj}}),T$=$(function(n,e){return{cK:o(z$,n,lr(e)),dh:o(mo,n,qe(e)),di:o(mo,n,Ye(e)),dk:o(mo,n,Ze(e))}}),ca=w(function(n,e,r){return{gf:n,gj:e,dj:r}}),pt=function(n){var e=n;return e},hn=$(function(n,e){var r=n,a=e;return o(On,r,a)}),wn=$(function(n,e){var r=n,a=e;return o(_r,r,a)}),w3=$(function(n,e){var r=pt(e),a=pt(n);return{d5:o(hn,a.d5,r.d5),d6:o(hn,a.d6,r.d6),d7:o(hn,a.d7,r.d7),d8:o(wn,a.d8,r.d8),d9:o(wn,a.d9,r.d9),ea:o(wn,a.ea,r.ea)}}),ae=function(n){var e=n;return e},y3=function(n){var e=n;return T(e.gf,e.gj,e.dj)},Zr=$(function(n,e){var r=n,a=e;return a+r}),x3=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=qa(vn(a)),c=qa(vn(r)),l=qa(vn(t)),u=y3(e),v=u.a,f=u.b,s=u.c;return{d5:o(Zr,c,v),d6:o(Zr,i,f),d7:o(Zr,l,s),d8:o(Se,c,v),d9:o(Se,i,f),ea:o(Se,l,s)}}),fl=V(function(n,e,r,a){var t=r.eW,i=2*r.fi*e,c=2*r.fh*e,l=2*r.fg*e,u=t.dj*e,v=t.gj*e,f=t.gf*e,s=ae(Ze(n)),p=Q(l*s.gf)+Q(c*s.gj)+Q(i*s.dj),d=ae(Ye(n)),h=Q(l*d.gf)+Q(c*d.gj)+Q(i*d.dj),b=ae(qe(n)),_=Q(l*b.gf)+Q(c*b.gj)+Q(i*b.dj),x=o(x3,T(_,h,p),o(z$,n,m(ca,f,v,u)));if(a.$)return U(x);var A=a.a;return U(o(w3,A,x))}),Xo=V(function(n,e,r,a){n:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var d=n,h=e,b=r,_=i;n=d,e=h,r=b,a=_;continue n;case 1:var c=t.a,l=j(fl,n,e,c,r),d=n,h=e,b=l,_=i;n=d,e=h,r=b,a=_;continue n;case 2:var d=n,h=e,b=r,_=i;n=d,e=h,r=b,a=_;continue n;case 3:var c=t.a,l=j(fl,n,e,c,r),d=n,h=e,b=l,_=i;n=d,e=h,r=b,a=_;continue n;case 4:var u=t.a,d=n,h=e,b=j(Xo,n,e,r,u),_=i;n=d,e=h,r=b,a=_;continue n;default:var v=t.a,f=t.b,s=o(T$,_3(v),n),p=e*v.b3,d=n,h=e,b=j(Xo,s,p,r,g([f])),_=i;n=d,e=h,r=b,a=_;continue n}}else return r}),ur=yd,$r=xd,vr=Sd,M$=function(n){return{$:4,a:n}},S3=$(function(n,e){n:for(;;)if(n.b){var r=n.a,a=n.b,t=a,i=o(k,r,e);n=t,e=i;continue n}else return e}),_a=function(n){return M$(o(S3,n,S))},C3={dF:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,K:0,L:0,M:0,b3:1},sl=Yi({be:wr,cx:0,cZ:Oi,bu:Pr,dg:255,bC:wr,bD:wr}),P3=function(n){var e=n,r=o(On,Q(e.gf),o(On,Q(e.gj),Q(e.dj)));if(r){var a=e.dj/r,t=e.gj/r,i=e.gf/r,c=De(i*i+t*t+a*a);return c*r}else return ye},Mn={bH:0,eV:!1,bN:0,cT:0,b1:0,c9:0,gf:0,gj:0,dj:0},Xn=$(function(n,e){var r=n,a=e;return fe({dQ:r.gf,dR:r.b1,dS:a.gf,dT:a.b1,dU:r.gj,dV:r.bN,dW:a.gj,dX:a.bN,dY:r.dj,dZ:r.bH,d_:a.dj,d$:a.bH,d0:r.c9,d1:r.cT,d2:a.c9,d3:a.cT})}),Ir=y({bj:o(Xn,Mn,Mn),bT:o(Xn,Mn,Mn),bU:o(Xn,Mn,Mn),bV:o(Xn,Mn,Mn)},j(Fr,0,0,0,0)),D$=514,F$=function(n){var e=n.ac,r=n._,a=n.Z;return j(Ii,515,e,r,a)},B$=240,j3=g([F$({Z:1,_:0,ac:!0}),qi({be:Vn,cx:B$,cZ:0,bu:D$,dg:0,bC:Vn,bD:Vn}),Zi]),L3=$(function(n,e){var r=n,a=e.fD,t=e.fd,i=e.eO,c=vn(a),l=c,u=vn(t),v=u,f=r.cX;if(f.$){var p=f.a;return Wo(v)?fe({dQ:2/(i*p),dR:0,dS:0,dT:0,dU:0,dV:2/p,dW:0,dX:0,dY:0,dZ:0,d_:0,d$:-1,d0:0,d1:0,d2:0,d3:1}):fe({dQ:2/(i*p),dR:0,dS:0,dT:0,dU:0,dV:2/p,dW:0,dX:0,dY:0,dZ:0,d_:-2/(v-l),d$:-(v+l)/(v-l),d0:0,d1:0,d2:0,d3:1})}else{var s=f.a;return Wo(v)?fe({dQ:1/(i*s),dR:0,dS:0,dT:0,dU:0,dV:1/s,dW:0,dX:0,dY:0,dZ:0,d_:-1,d$:-2*l,d0:0,d1:0,d2:-1,d3:0}):fe({dQ:1/(i*s),dR:0,dS:0,dT:0,dU:0,dV:1/s,dW:0,dX:0,dY:0,dZ:0,d_:-(v+l)/(v-l),d$:-2*v*l/(v-l),d0:0,d1:0,d2:-1,d3:0})}}),Fa=$(function(n,e){return(1&n>>e)===1?0:1}),k3=function(n){return g([F$({Z:1,_:0,ac:!0}),qi({be:Vn,cx:B$,cZ:n,bu:D$,dg:0,bC:Vn,bD:Vn}),Zi])},z3=w(function(n,e,r){return re(o(X,function(a){var t=a<<4,i=j(Fr,o(Fa,a,0),o(Fa,a,1),o(Fa,a,2),o(Fa,a,3));return m(ve,n,y(e,i),k3(t))},o(xr,1,o(Ne,2,r)-1)))}),yr=function(n){var e=n;return e},T3=Fd,Xi=pe({gf:0,gj:1,dj:0}),Qi=Xi,M3={cK:Bn,dh:Nt,di:Qi,dk:Ht},wa=function(n){var e=n;return e},D3=function(n){var e=wa(lr(n)),r=ae(Ze(n)),a=ae(Ye(n)),t=ae(qe(n));return fe({dQ:t.gf,dR:a.gf,dS:r.gf,dT:e.gf,dU:t.gj,dV:a.gj,dW:r.gj,dX:e.gj,dY:t.dj,dZ:a.dj,d_:r.dj,d$:e.dj,d0:0,d1:0,d2:0,d3:1})},F3=$(function(n,e){var r=e;return D3(o(T$,r,n))}),B3=function(n){return o(F3,M3,n)},V3=function(n){var e=n;return e.de},E3=function(n){var e=n;return qe(e)},R3=function(n){var e=n;return Ye(e)},W3=function(n){var e=V3(n.eT),r=Ce({cK:Jo(e),dh:E3(e),di:R3(e),dk:Be(qo(e))}),a=_a(n.aU),t=a,i=j(Xo,r,1,J,g([t]));if(i.$===1)return S;var c=i.a,l=B3(e),u=o(rn,.99,o(hn,vn(n.eY),dt(j$(c)))),v=k$(c),f=v.a,s=v.b,p=v.c,d=P3(m(Ni,f,s,p)),h=o(rn,1.01,o(Zr,d,dt(L$(c)))),b=o(L3,n.eT,{eO:n.eO,fd:h,fD:u}),_=T3(b).d3,x=_?ae(Be(qo(e))):yr(Jo(e)),A=function(){var sn=n.f5;switch(sn.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var Sn=sn.a;return y(3,Sn);case 4:var Sn=sn.a;return y(4,Sn);default:return y(5,0)}}(),P=A.a,D=A.b,I=n.fb,H=I,N=o(Gt,H,n.gc),G=N,O=fe({dQ:0,dR:x.gf,dS:ur(G),dT:n.ez,dU:0,dV:x.gj,dW:$r(G),dX:Ya(d),dY:0,dZ:x.dj,d_:vr(G),d$:P,d0:0,d1:_,d2:0,d3:D}),E=mn(y$,O,l,b,C3,t,{P:S,Y:S,fU:S}),nn=n.fx;switch(nn.$){case 0:var an=nn.a;return re(g([m(ve,E.P,y(an,fo),sr),m(ve,E.Y,Ir,sr)]));case 1:var an=nn.a;return re(g([m(ve,E.P,Ir,sr),g([sl]),m(ve,E.fU,an.bj,S$),g([P$(0)]),m(ve,E.P,y(an,fo),j3),m(ve,E.Y,Ir,sr)]));default:var gn=nn.a,An=nn.b;return re(g([m(ve,E.P,y(An,fo),sr),g([sl]),o(l3,E.fU,gn),m(z3,E.P,An,te(gn)),m(ve,E.Y,Ir,sr)]))}},N3=function(n){return o(cr,"width",yn(n))},H3=$(function(n,e){var r=g([Dg(1),Rg(0),jg(!0),j(Tg,0,0,0,0)]),a=function(){var P=n.eM;switch(P.$){case 0:return T(r,"0",1);case 1:return T(o(k,kg,r),"1",1);default:var D=P.a;return T(r,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=n.aP,u=l.a,v=l.b,f=ll(v),s=o(ln,"height",yn(f)+"px"),p=ll(u),d=p/f,h=o(ha,function(P){return W3({eO:d,eT:n.eT,eY:n.eY,aU:P.aU,fb:P.fb,fx:P.fx,ez:c,f5:P.f5,gc:P.gc})},e),b=o(ln,"width",yn(p)+"px"),_=n.aN,x=_,A=Wg(x);return m(Vg,"div",g([o(ln,"padding","0px"),b,s]),g([y(i,m(Gg,t,g([N3(Jn(p*c)),Fg(Jn(f*c)),b,s,o(ln,"display","block"),o(ln,"background-color",A)]),h))]))}),G3=function(n){return{$:2,a:n}},U3=function(n){return G3(n)},I3=function(n){return o(H3,{eM:U3(n.cg),aN:n.aN,eT:n.eT,eY:n.eY,aP:n.aP},g([{aU:n.aU,fb:n.fb,fx:n.fx,f5:n.f5,gc:n.gc}]))},dl=function(n){return n},O3=function(n){var e=n;return e},Ut=function(n){var e=n;return O3(e.eP)},V$=V(function(n,e,r,a){return{$:2,a:n,b:e,c:r,d:a}}),J3=V(function(n,e,r,a){return{$:3,a:n,b:e,c:r,d:a}}),E$=V(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),R$=V(function(n,e,r,a){return{$:6,a:n,b:e,c:r,d:a}}),q3=V(function(n,e,r,a){return{$:7,a:n,b:e,c:r,d:a}}),Y3=V(function(n,e,r,a){return{$:5,a:n,b:e,c:r,d:a}}),Z3=V(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),Ki=function(n){switch(n.$){case 0:return n;case 1:var r=n.a,e=n.b,t=n.c;return j(Z3,r,e,t,1);case 2:var r=n.a,e=n.b,t=n.c;return j(V$,r,e,t,1);case 3:var r=n.a,a=n.b,t=n.c;return j(J3,r,a,t,1);case 4:var r=n.a,a=n.b,t=n.c;return j(E$,r,a,t,1);case 5:var r=n.a,a=n.b,t=n.c;return j(Y3,r,a,t,1);case 6:var r=n.a,a=n.b,t=n.c;return j(R$,r,a,t,1);case 7:var r=n.a,a=n.b,t=n.c;return j(q3,r,a,t,1);case 8:return n;case 9:return n;default:return n}},nc={$:0},X3=cn(function(n,e,r,a,t,i,c,l){n:for(;;)if(l.b){var u=l.a,v=l.b,f=pt(c(u)),s=o(wn,f.d8,n),p=o(hn,f.d5,e),d=o(wn,f.d9,r),h=o(hn,f.d6,a),b=o(wn,f.ea,t),_=o(hn,f.d7,i),x=c,A=v;n=s,e=p,r=d,a=h,t=b,i=_,c=x,l=A;continue n}else return{d5:e,d6:a,d7:i,d8:n,d9:r,ea:t}}),Q3=w(function(n,e,r){var a=pt(n(e));return wt(X3,a.d8,a.d5,a.d9,a.d6,a.ea,a.d7,n,r)}),po=$(function(n,e){var r=n,a=e;return Z(a,r)<1}),W$=function(n){return o(po,n.d5,n.d8)&&o(po,n.d6,n.d9)&&o(po,n.d7,n.ea)?n:{d5:o(hn,n.d8,n.d5),d6:o(hn,n.d9,n.d6),d7:o(hn,n.ea,n.d7),d8:o(wn,n.d8,n.d5),d9:o(wn,n.d9,n.d6),ea:o(wn,n.ea,n.d7)}},la=function(n){var e=n;return e},N$=function(n){var e=la(n),r=e.a,a=e.b,t=e.c,i=Ve(r),c=Ee(r),l=Re(r),u=Ve(a),v=Ee(a),f=Re(a),s=Ve(t),p=Ee(t),d=Re(t);return W$({d5:o(hn,i,o(hn,u,s)),d6:o(hn,c,o(hn,v,p)),d7:o(hn,l,o(hn,f,d)),d8:o(wn,i,o(wn,u,s)),d9:o(wn,c,o(wn,v,p)),ea:o(wn,l,o(wn,f,d))})},H$=Cd,Rn=function(n){return H$(wa(n))},G$=function(n){var e=n;return e},It=function(n){return H$(G$(n))},K3=$(function(n,e){var r=n,a=e;return{gf:a.gj*r.dj-a.dj*r.gj,gj:a.dj*r.gf-a.gf*r.dj,dj:a.gf*r.gj-a.gj*r.gf}}),Qo=$(function(n,e){var r=n,a=e;return{gf:a.gf-r.gf,gj:a.gj-r.gj,dj:a.dj-r.dj}}),U$=function(n){return n},nb={gf:0,gj:0,dj:0},eb=$(function(n,e){var r=n,a=e,t=o(On,Q(a.gf),o(On,Q(a.gj),Q(a.dj)));if(t){var i=a.dj/t,c=a.gj/t,l=a.gf/t,u=De(l*l+c*c+i*i);return{gf:r*l/u,gj:r*c/u,dj:r*i/u}}else return nb}),rb=eb(U$(1)),I$=w(function(n,e,r){var a=o(Qo,e,r),t=o(Qo,n,e);return rb(o(K3,a,t))}),ab=function(n){var e=la(n),r=e.a,a=e.b,t=e.c,i=It(m(I$,r,a,t));return T({s:i,em:Rn(r)},{s:i,em:Rn(a)},{s:i,em:Rn(t)})},tb=$(function(n,e){return{$:2,a:n,b:e}}),O$=tb({ds:3,dB:0,ec:4}),ob=function(n){if(n.b){var e=n.a,r=n.b,a=O$(o(X,ab,n)),t=m(Q3,N$,e,r);return j(V$,t,n,a,0)}else return nc},Zn=w(function(n,e,r){return T(n,e,r)}),Cn=w(function(n,e,r){var a=n,t=e,i=r;return{gf:a,gj:t,dj:i}}),J$=function(){var n=Hn(1),e=Hn(1),r=Hn(1),a=o(rn,-.5,n),t=o(rn,-.5,e),i=o(rn,-.5,r),c=m(Cn,i,t,a),l=o(rn,.5,n),u=m(Cn,i,t,l),v=o(rn,.5,e),f=m(Cn,i,v,a),s=m(Cn,i,v,l),p=o(rn,.5,r),d=m(Cn,p,t,a),h=m(Cn,p,v,a),b=m(Cn,p,t,l),_=m(Cn,p,v,l);return Ki(ob(g([m(Zn,c,h,d),m(Zn,c,f,h),m(Zn,u,b,_),m(Zn,u,_,s),m(Zn,d,h,_),m(Zn,d,_,b),m(Zn,c,s,f),m(Zn,c,u,s),m(Zn,c,d,b),m(Zn,c,b,u),m(Zn,f,_,h),m(Zn,f,s,_)])))}(),Ba={$:0},ib=w(function(n,e,r){return{$:1,a:n,b:e,c:r}}),cb=w(function(n,e,r){var a=e.a,t=e.b,i=e.c,c=n(i),l=n(t),u=n(a),v=It(m(I$,u,l,c)),f={s:v,em:Rn(u)},s={s:v,em:Rn(l)},p={s:v,em:Rn(c)};return o(k,f,o(k,s,o(k,p,r)))}),ec=function(n){var e=n;return e.G},lb=V(function(n,e,r,a){if(e.$===1)return J;var t=e.a;if(r.$===1)return J;var i=r.a;if(a.$===1)return J;var c=a.a;return U(m(n,t,i,c))}),Ko=4294967295>>>32-na,ni=Nv,ub=w(function(n,e,r){n:for(;;){var a=Ko&e>>>n,t=o(ni,a,r);if(t.$){var v=t.a;return o(ni,Ko&e,v)}else{var i=t.a,c=n-na,l=e,u=i;n=c,e=l,r=u;continue n}}}),$b=function(n){return n>>>5<<5},vb=$(function(n,e){var r=e.a,a=e.b,t=e.c,i=e.d;return n<0||Z(n,r)>-1?J:Z(n,$b(r))>-1?U(o(ni,Ko&n,i)):U(m(ub,a,n,t))}),rc=function(n){var e=n;return e.am},go=$(function(n,e){return o(vb,n,rc(e))}),fb=function(n){var e=function(r){var a=r.a,t=r.b,i=r.c;return j(lb,w(function(c,l,u){return T(c,l,u)}),o(go,a,n),o(go,t,n),o(go,i,n))};return o(pa,e,ec(n))},sb=w(function(n,e,r){n:for(;;){var a=o(xi,In,n),t=a.a,i=a.b;if(Z(Vo(t),In)<0)return o(hu,!0,{D:e,p:r,t});var c=i,l=o(k,gu(t),e),u=r+1;n=c,e=l,r=u;continue n}}),ac=function(n){return n.b?m(sb,n,S,0):mu},db=w(function(n,e,r){return n(e(r))}),mb=$(function(n,e){return!o(Tt,o(db,mm,n),e)}),pb=function(n){var e=n.a;return e},q$=$(function(n,e){var r=pb(n),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Z(i,r)<0&&c>=0&&Z(c,r)<0&&l>=0&&Z(l,r)<0};return o(mb,a,e)?{G:e,am:n}:{G:o(Mr,a,e),am:n}}),gb=w(function(n,e,r){return{$:3,a:n,b:e,c:r}}),ya=gb({ds:1,dB:3,ec:4}),Za=$(function(n,e){var r=yr(e),a=yr(n);return y(T(a.gf,a.gj,a.dj),T(r.gf,r.gj,r.dj))}),ml=m(Aa,0,0,0),bo=Yn(function(n,e,r,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ma,o(Za,n,e),t);if(v.$){var s={s:ml,em:Rn(e)},p={s:ml,em:Rn(n)},d=u+1,h=u;return T(o(k,T(r,h,d),o(k,T(r,d,a),c)),o(k,s,o(k,p,l)),u+2)}else{var f=v.a;return T(o(k,T(r,f,a),c),l,u)}}),bb=xn(function(n,e,r,a,t){n:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=n(u),s=n(l),p=n(c),d=a+2,h=a+1,b=a,_=n,x=e,A=v,P=a+3,D=mn(bo,f,p,d,b,e,mn(bo,s,f,h,d,e,mn(bo,p,s,b,h,e,t)));n=_,e=x,r=A,a=P,t=D;continue n}else{var I=t,H=I.a,N=I.b;return y(H,kn(N))}}),hb=xn(function(n,e,r,a,t){n:for(;;)if(e.b){var i=e.a,c=i.a,l=i.b,u=i.c,v=e.b,f=n(u),s=n(l),p=n(c),d=r+2,h=r+1,b=r,_=m(hr,o(Za,p,f),d,m(hr,o(Za,f,s),h,m(hr,o(Za,s,p),b,t))),x=o(k,T(b,h,d),a),A=n,P=v,D=r+3,I=x,H=_;n=A,e=P,r=D,a=I,t=H;continue n}else return T(a,t,r)}),Ke=w(function(n,e,r){var a=fb(r),t=m(Le,cb(e),S,a),i=C(hb,e,a,0,S,Bi),c=i.a,l=i.b,u=i.c,v=C(bb,e,l,a,0,T(c,S,u)),f=v.a,s=v.b,p=Fi(s)?t:un(t,s);return m(ib,n,o(q$,ac(p),f),o(ya,p,f))}),ei=function(n){return{G:o(X,function(e){return T(3*e,3*e+1,3*e+2)},o(xr,0,te(n)-1)),am:ac(re(o(X,function(e){var r=e.a,a=e.b,t=e.c;return g([r,a,t])},n)))}},Y$=function(n){switch(n.$){case 0:return Ba;case 1:var a=n.a,e=n.b,r=o(X,la,e);return m(Ke,a,Nn,ei(r));case 2:var a=n.a,e=n.b,r=o(X,la,e);return m(Ke,a,Nn,ei(r));case 3:var a=n.a,t=n.b;return m(Ke,a,Nn,t);case 4:var a=n.a,t=n.b;return m(Ke,a,function(i){return i.em},t);case 5:var a=n.a,t=n.b;return m(Ke,a,function(i){return i.em},t);case 6:var a=n.a,t=n.b;return m(Ke,a,function(i){return i.em},t);case 7:var a=n.a,t=n.b;return m(Ke,a,function(i){return i.em},t);case 8:return Ba;case 9:return Ba;default:return Ba}},pl=Y$(J$),Ot=function(n){var e=n;return e.aP},Z$={$:0},z=Z$,Ln=$(function(n,e){return{$:1,a:n,b:e}}),Ab={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bK"}},_b=1029,wb=function(n){return{$:5,a:n}},X$=function(n){var e=n;return wb(e)},yb=X$(_b),xb=1028,Sb=X$(xb),Wn=w(function(n,e,r){return e===1?n?o(k,yb,r):o(k,Sb,r):r}),Q$={src:`
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
    `,attributes:{position:"em",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ho=V(function(n,e,r,a){return o(Ln,e,cn(function(t,i,c,l,u,v,f,s){return C($n,m(Wn,l,a,s),Q$,Ab,r,{bK:n,c,d:i,e:v,f:t,g:u})}))}),tc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aB"}},K$={src:`
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
    `,attributes:{position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},_e=V(function(n,e,r,a){return o(Ln,e,cn(function(t,i,c,l,u,v,f,s){return C($n,m(Wn,l,a,s),K$,tc,r,{aB:n,c,d:i,e:v,f:t,g:u})}))}),nv=$(function(n,e){return{$:3,a:n,b:e}}),Cb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aB",pointRadius:"b$",sceneProperties:"f"}},ev={src:`
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
    `,attributes:{position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"b$",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Pb=V(function(n,e,r,a){return o(nv,r,cn(function(t,i,c,l,u,v,f,s){return C($n,s,ev,Cb,a,{aB:n,c,d:i,b$:e,e:v,f:t,g:u})}))}),oc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aS",sceneProperties:"f"}},xa=function(n){var e=n;return e},Jt=Pd,we=xn(function(n,e,r,a,t){return o(Ln,r,cn(function(i,c,l,u,v,f,s,p){return C($n,m(Wn,u,t,p),K$,oc,a,{aS:o(Jt,xa(e),n),c:l,d:c,e:f,f:i,g:v})}))}),jb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aS",pointRadius:"b$",sceneProperties:"f"}},Lb=xn(function(n,e,r,a,t){return o(nv,a,cn(function(i,c,l,u,v,f,s,p){return C($n,p,ev,jb,t,{aS:o(Jt,xa(e),n),c:l,d:c,b$:r,e:f,f:i,g:v})}))}),rv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bj",lights34:"bT",lights56:"bU",lights78:"bV",materialColor:"cy",sceneProperties:"f",viewMatrix:"g"}},av={src:`
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
    `,attributes:{normal:"s",position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Va=V(function(n,e,r,a){return o(Ln,e,cn(function(t,i,c,l,u,v,f,s){var p=f.a,d=f.b;return C($n,m(Wn,l,a,s),av,rv,r,{S:d,bj:p.bj,bT:p.bT,bU:p.bU,bV:p.bV,cy:n,c,d:i,e:v,f:t,g:u})}))}),tv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bj",lights34:"bT",lights56:"bU",lights78:"bV",materialColorTexture:"cz",normalMapTexture:"a$",sceneProperties:"f",useNormalMap:"a4",viewMatrix:"g"}},ov={src:`
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
    `,attributes:{normal:"s",position:"em",tangent:"eB",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},kb=Yn(function(n,e,r,a,t,i){return o(Ln,a,cn(function(c,l,u,v,f,s,p,d){var h=p.a,b=p.b;return C($n,m(Wn,v,i,d),ov,tv,t,{S:b,bj:h.bj,bT:h.bT,bU:h.bU,bV:h.bV,cz:n,c:u,d:l,a$:e,e:s,f:c,a4:r,g:f})}))}),iv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cb",constantBaseColor:"cd",constantMetallic:"ce",constantRoughness:"cf",enabledLights:"S",lights12:"bj",lights34:"bT",lights56:"bU",lights78:"bV",metallicTexture:"cD",normalMapTexture:"a$",roughnessTexture:"c1",sceneProperties:"f",useNormalMap:"a4",viewMatrix:"g"}},zb=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return o(Ln,u,cn(function(s,p,d,h,b,_,x,A){var P=x.a,D=x.b;return C($n,m(Wn,h,f,A),ov,iv,v,{cb:n,cd:e,ce:i,cf:a,S:D,bj:P.bj,bT:P.bT,bU:P.bU,bV:P.bV,cD:t,c:d,d:p,a$:c,e:_,c1:r,f:s,a4:l,g:b})}))}}}}}}}}}}},cv={src:`
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
    `,attributes:{},uniforms:{baseColor:"ca",enabledLights:"S",lights12:"bj",lights34:"bT",lights56:"bU",lights78:"bV",metallic:"cC",roughness:"c0",sceneProperties:"f",viewMatrix:"g"}},Ea=Yn(function(n,e,r,a,t,i){return o(Ln,a,cn(function(c,l,u,v,f,s,p,d){var h=p.a,b=p.b;return C($n,m(Wn,v,i,d),av,cv,t,{ca:n,S:b,bj:h.bj,bT:h.bT,bU:h.bU,bV:h.bV,cC:r,c:u,d:l,e:s,c0:e,f:c,g:f})}))}),Tb=function(n){return{$:0,a:n}},gl=$(function(n,e){return{$:1,a:n,b:e}}),Xr=$(function(n,e){if(e.$){var r=e.a.F;return y(r,1)}else return e.a,y(n,0)}),Mb=function(n){return j(Fr,ur(n),$r(n),vr(n),1)},ic=j(Fr,0,0,0,0),Xa=$(function(n,e){if(e.$){var a=e.a.F;return y(a,ic)}else{var r=e.a;return y(n,Mb(r))}}),lv=$(function(n,e){var r=y(n,e);if(r.a.$){var t=r.a.a.F;return o(gl,y(t,ic),o(Xr,t,e))}else if(r.b.$){var t=r.b.a.F;return o(gl,o(Xa,t,n),o(Xr,t,e))}else{var a=r.a.a;return r.b.a,Tb(a)}}),Db=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Ra=V(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),Fb=V(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Bb=function(n){return o(Un,n,1)},ri=o(Un,0,0),dr=$(function(n,e){if(e.$){var a=e.a.F;return y(a,ri)}else{var r=e.a;return y(n,Bb(r))}}),uv=V(function(n,e,r,a){var t=j(Fb,n,e,r,a);if(t.a.$){var u=t.a.a.F;return j(Ra,y(u,ic),o(dr,u,e),o(dr,u,r),o(Xr,u,a))}else if(t.b.$){var u=t.b.a.F;return j(Ra,o(Xa,u,n),y(u,ri),o(dr,u,r),o(Xr,u,a))}else if(t.c.$){var u=t.c.a.F;return j(Ra,o(Xa,u,n),o(dr,u,e),y(u,ri),o(Xr,u,a))}else if(t.d.$){var u=t.d.a.F;return j(Ra,o(Xa,u,n),o(dr,u,e),o(dr,u,r),y(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,m(Db,i,c,l)}}),Vb={src:`
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
    `,attributes:{},uniforms:{backlight:"b8",colorTexture:"bK",sceneProperties:"f"}},Ao=xn(function(n,e,r,a,t){return o(Ln,r,cn(function(i,c,l,u,v,f,s,p){return C($n,m(Wn,u,t,p),Q$,Vb,a,{b8:xa(e),bK:n,c:l,d:c,e:f,f:i,g:v})}))}),$v={src:`
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
    `,attributes:{normal:"s",position:"em",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Eb=V(function(n,e,r,a){return o(Ln,e,cn(function(t,i,c,l,u,v,f,s){var p=f.a,d=f.b;return C($n,m(Wn,l,a,s),$v,tv,r,{S:d,bj:p.bj,bT:p.bT,bU:p.bU,bV:p.bV,cz:n,c,d:i,a$:n,e:v,f:t,a4:0,g:u})}))}),Rb=ci(function(n,e,r,a,t,i,c,l,u){return o(Ln,c,cn(function(v,f,s,p,d,h,b,_){var x=b.a,A=b.b;return C($n,m(Wn,p,u,_),$v,iv,l,{cb:n,cd:e,ce:i,cf:a,S:A,bj:x.bj,bT:x.bT,bU:x.bU,bV:x.bV,cD:t,c:s,d:f,a$:n,e:h,c1:r,f:v,a4:0,g:d})}))}),ua=w(function(n,e,r){var a=n,t=e;return r<=.5?a+r*(t-a):t+(1-r)*(a-t)}),Wb=function(n){var e=n;return m(ua,e.d8,e.d5,.5)},Nb=function(n){var e=n;return m(ua,e.d9,e.d6,.5)},Hb=function(n){var e=n;return m(ua,e.ea,e.d7,.5)},Gb=function(n){return m(Cn,Wb(n),Nb(n),Hb(n))},q=function(n){var e=k$(n),r=e.a,a=e.b,t=e.c;return{eW:wa(Gb(n)),fg:r/2,fh:a/2,fi:t/2}},cc=$(function(n,e){switch(n.$){case 0:if(n.b.$){n.a;var l=n.b.a.F;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=e.a,c=e.c,a=e.d;return j(ho,l,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return j(ho,l,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return j(ho,l,q(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var r=n.b.a;switch(e.$){case 0:return z;case 1:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 2:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 3:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 4:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 5:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return j(_e,r,q(t),c,a);case 8:var t=e.a,c=e.c;return j(_e,r,q(t),c,0);case 9:var t=e.a,c=e.c;return j(_e,r,q(t),c,0);default:var t=e.a,i=e.b,c=e.d;return j(Pb,r,i,q(t),c)}}case 1:if(n.b.$){n.a;var l=n.b.a.F,v=n.c;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=e.a,c=e.c,a=e.d;return C(Ao,l,v,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return C(Ao,l,v,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return C(Ao,l,v,q(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=n.b.a,v=n.c;switch(e.$){case 0:return z;case 1:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 2:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 3:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 4:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 5:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 8:var t=e.a,c=e.c;return C(we,u,v,q(t),c,0);case 9:var t=e.a,c=e.c;return C(we,u,v,q(t),c,0);default:var t=e.a,i=e.b,c=e.d;return C(Lb,u,v,i,q(t),c)}}case 2:n.a;var f=n.b,H=n.c,s=o(lv,f,H);if(s.$){var h=s.a,b=h.a;h.b;var _=s.b,x=_.a,A=_.b;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=e.a,c=e.c,d=e.d;return j(Eb,b,q(t),c,d);case 7:var t=e.a,c=e.c,d=e.d;return mn(kb,b,x,A,q(t),c,d);case 8:return z;case 9:return z;default:return z}}else{var p=s.a;switch(e.$){case 0:return z;case 1:return z;case 2:var t=e.a,c=e.c,d=e.d;return j(Va,p,q(t),c,d);case 3:return z;case 4:var t=e.a,c=e.c,d=e.d;return j(Va,p,q(t),c,d);case 5:return z;case 6:var t=e.a,c=e.c,d=e.d;return j(Va,p,q(t),c,d);case 7:var t=e.a,c=e.c,d=e.d;return j(Va,p,q(t),c,d);case 8:return z;case 9:return z;default:return z}}default:n.a;var P=n.b,D=n.c,I=n.d,H=n.e,N=j(uv,P,D,I,H);if(N.$){var nn=N.a,an=nn.a,gn=nn.b,An=N.b,sn=An.a,Sn=An.b,Gn=N.c,En=Gn.a,ke=Gn.b,ze=N.d,x=ze.a,A=ze.b;switch(e.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=e.a,c=e.c,a=e.d;return Bv(Rb,an,gn,sn,Sn,En,ke,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return zb(an)(gn)(sn)(Sn)(En)(ke)(x)(A)(q(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var G=N.a,O=N.b,E=N.c;switch(e.$){case 0:return z;case 1:return z;case 2:var t=e.a,c=e.c,a=e.d;return mn(Ea,G,O,E,q(t),c,a);case 3:return z;case 4:var t=e.a,c=e.c,a=e.d;return mn(Ea,G,O,E,q(t),c,a);case 5:return z;case 6:var t=e.a,c=e.c,a=e.d;return mn(Ea,G,O,E,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return mn(Ea,G,O,E,q(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),_o=function(n){var e=n;return e.gf},wo=function(n){var e=n;return e.gj},yo=function(n){var e=n;return e.dj},Ub=function(n){var e=n,r=yo(e.dk),a=wo(e.dk),t=_o(e.dk),i=yo(e.di),c=wo(e.di),l=_o(e.di),u=yo(e.dh),v=wo(e.dh),f=_o(e.dh);return f*c*r+v*i*t+u*l*a-u*c*t-v*l*r-f*i*a>0},Ib=function(n){var e=wa(lr(n)),r=ae(Ze(n)),a=ae(Ye(n)),t=ae(qe(n));return{dF:Ub(n),u:t.gf,v:t.gj,w:t.dj,x:a.gf,y:a.gj,z:a.dj,A:r.gf,B:r.gj,C:r.dj,K:e.gf,L:e.gj,M:e.dj,b3:1}},mr=$(function(n,e){return{$:5,a:n,b:e}}),vv=$(function(n,e){var r=e;switch(r.$){case 0:return z;case 5:var a=r.a,t=r.b,i=o(w$,a,n);return o(mr,i,t);case 1:return o(mr,n,r);case 3:return o(mr,n,r);case 2:return o(mr,n,r);default:return o(mr,n,r)}}),fv=$(function(n,e){return o(vv,Ib(n),e)}),qt=function(n){return{$:2,a:n}},Ob=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=e.eW;return{eW:{gf:r*i.gf,gj:a*i.gj,dj:t*i.dj},fg:r*e.fg,fh:a*e.fh,fi:t*e.fi}}),Jb=kd,qb=Ld,bl=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var f=n.a,s=n.b,p=n.c,d=qb(a),h=d.gf,b=d.gj,_=d.dj,x=d.eI,A=Jb({eI:x,gf:h*f,gj:b*s,dj:_*p});return wt(e,r,A,t,i,c,l,u,v)}}}}}}}}}},ai=$(function(n,e){switch(e.$){case 0:return Z$;case 5:var r=e.a,a=e.b;return o(mr,r,o(ai,n,a));case 1:var t=e.a,i=e.b;return o(Ln,o(Ob,n,t),o(bl,n,i));case 3:return e;case 2:var i=e.a;return qt(o(bl,n,i));default:var c=e.a;return M$(o(X,ai(n),c))}}),lc=$(function(n,e){var r=e;return o(ai,n,r)}),uc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},sv=7683,dv=7682,Yb=m(Ji,{cx:0,cZ:0,dg:15},{be:Vn,bu:Pr,bC:Vn,bD:sv},{be:Vn,bu:Pr,bC:Vn,bD:dv}),Zb=m(Ji,{cx:0,cZ:0,dg:15},{be:Vn,bu:Pr,bC:Vn,bD:dv},{be:Vn,bu:Pr,bC:Vn,bD:sv}),$c=$(function(n,e){return n?o(k,Zb,e):o(k,Yb,e)}),Xb={src:`
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
    `,attributes:{normal:"s",position:"em"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b5",viewMatrix:"g"}},Qb=function(n){if(n.$){var e=n.c;return U(cn(function(r,a,t,i,c,l,u,v){return C($n,o($c,i,v),Xb,uc,e,{c:t,d:a,e:l,f:r,b5:u,g:c})}))}else return J},gt=function(n){var e=Qb(n);if(e.$)return z;var r=e.a;return qt(r)},Kb=V(function(n,e,r,a){var t=o(cc,r,J$),i=function(){var f=y(n,e);return f.a?f.b?_a(g([t,gt(pl)])):t:f.b?gt(pl):z}(),c=Ot(a),l=c.a,u=c.b,v=c.c;return o(fv,Ut(a),o(lc,T(l,u,v),i))}),n2=$(function(n,e){return j(Kb,!0,!0,n,e)}),ti=function(n){return{$:0,a:n}},mv=$(function(n,e){return{$:0,a:n,b:e}}),e2=function(n){var e=Mi(n),r=e.cY,a=e.cj,t=e.cc;return m(Aa,r,a,t)},r2=function(n){return o(mv,0,ti(e2(n)))},vc=function(n){var e=n;return e.m},Qr=function(n){var e=n;return tr(e)},a2=$(function(n,e){var r=n.em,a=n.s;return o(k,{s:It(a),em:Rn(r)},e)}),t2=_t(function(n,e,r,a,t,i,c){n:for(;;)if(c.b){var l=c.a,u=c.b,v=vr(l.em),f=$r(l.em),s=ur(l.em),p=o(_r,n,s),d=o(On,e,s),h=o(_r,r,f),b=o(On,a,f),_=o(_r,t,v),x=o(On,i,v),A=u;n=p,e=d,r=h,a=b,t=_,i=x,c=A;continue n}else return W$({d5:e,d6:a,d7:i,d8:n,d9:r,ea:t})}),pv=$(function(n,e){var r=vr(n.em),a=$r(n.em),t=ur(n.em);return li(t2,t,t,a,a,r,r,e)}),o2=function(n){var e=m(iu,a2,S,rc(n));if(e.b){var r=e.a,a=e.b,t=o(ya,e,ec(n)),i=o(pv,r,a);return j(E$,i,n,t,0)}else return nc},hl=$(function(n,e){var r=n,a=e,t=r.di,i=t,c=r.dh,l=c;return{gf:a.gf*l.gf+a.gj*i.gf,gj:a.gf*l.gj+a.gj*i.gj,dj:a.gf*l.dj+a.gj*i.dj}}),bt=function(n){var e=n;return or(e)},Or=function(n){var e=n;return e},oi=function(n){return oe(2*ne*n)},Al=v$({cK:Bn,dh:Nt,di:Qi}),gv=function(){var n=72,e=o(d$,n,oi(1)),r=Hn(1),a=Or(Ei),t=Or(Wi),i=Hn(1),c=o(rn,.5,i),l=m(Cn,ye,ye,c),u=o(rn,-.5,i),v=m(Cn,ye,ye,u),f=function(d){var h=o(rn,d,e),b=Or(o(hl,Al,Yo(h))),_=o(rn,Qr(h),r),x=o(rn,bt(h),r),A=m(Cn,_,x,c),P=m(Cn,_,x,u),D=o(aa,n,d+1),I=o(rn,D,e),H=Or(o(hl,Al,Yo(I))),N=o(rn,Qr(I),r),G=o(rn,bt(I),r),O=m(Cn,N,G,u),E=m(Cn,N,G,c);return g([T({s:t,em:v},{s:t,em:O},{s:t,em:P}),T({s:b,em:P},{s:H,em:O},{s:H,em:E}),T({s:b,em:P},{s:H,em:E},{s:b,em:A}),T({s:a,em:l},{s:a,em:A},{s:a,em:E})])},s=o(X,f,o(xr,0,n-1)),p=ei(re(s));return Ki(o2(p))}(),_l=Y$(gv),i2=function(n){var e=n,r=Q(e.dj),a=Q(e.gj),t=Q(e.gf);if(Z(t,a)<1)if(Z(t,r)<1){var i=De(e.dj*e.dj+e.gj*e.gj);return{gf:0,gj:-e.dj/i,dj:e.gj/i}}else{var i=De(e.gj*e.gj+e.gf*e.gf);return{gf:-e.gj/i,gj:e.gf/i,dj:0}}else if(Z(a,r)<1){var i=De(e.dj*e.dj+e.gf*e.gf);return{gf:e.dj/i,gj:0,dj:-e.gf/i}}else{var i=De(e.gf*e.gf+e.gj*e.gj);return{gf:-e.gj/i,gj:e.gf/i,dj:0}}},c2=function(n){var e=i2(n),r=e,a=r,t=n,i=t,c={gf:i.gj*a.dj-i.dj*a.gj,gj:i.dj*a.gf-i.gf*a.dj,dj:i.gf*a.gj-i.gj*a.gf};return y(e,c)},l2=function(n){var e=Wt(n),r=c2(e),a=r.a,t=r.b;return Ce({cK:Ri(n),dh:a,di:t,dk:e})},bv=function(n){var e=n;return e.fv},hv=function(n){var e=n;return e.fN},u2=V(function(n,e,r,a){var t=l2(vc(a)),i=o(cc,r,gv),c=function(){var s=y(n,e);return s.a?s.b?_a(g([i,gt(_l)])):i:s.b?gt(_l):z}(),l=hv(a),u=l,v=bv(a),f=v;return o(fv,t,o(lc,T(u,u,f),c))}),$2=$(function(n,e){return j(u2,!0,!0,n,e)}),wl={src:`
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
    `,attributes:{triangleVertex:"c8"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bz",viewMatrix:"g"}},yl={src:`
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
    `,attributes:{triangleVertex:"c8"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bz",viewMatrix:"g"}},Jr=function(n){var e=la(n),r=e.a,a=e.b,t=e.c,i=yr(r),c=yr(a),l=yr(t);return fe({dQ:i.gf,dR:c.gf,dS:l.gf,dT:0,dU:i.gj,dV:c.gj,dW:l.gj,dX:0,dY:i.dj,dZ:c.dj,d_:l.dj,d$:0,d0:0,d1:0,d2:0,d3:0})},Wa=O$(g([T({c8:0},{c8:1},{c8:2})])),v2=$(function(n,e){var r=N$(e),a=q(r);switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.F,z;var t=n.b.a;return o(Ln,a,cn(function(A,P,D,I,H,N,G,O){return C($n,m(Wn,I,0,O),wl,tc,Wa,{aB:t,c:D,d:P,e:N,f:A,bz:Jr(e),g:H})}));case 1:if(n.b.$)return n.a,z;var i=n.b.a,c=n.c;return o(Ln,a,cn(function(A,P,D,I,H,N,G,O){return C($n,m(Wn,I,0,O),wl,oc,Wa,{aS:o(Jt,xa(c),i),c:D,d:P,e:N,f:A,bz:Jr(e),g:H})}));case 2:n.a;var l=n.b,d=n.c,u=o(lv,l,d);if(u.$)return z;var v=u.a;return o(Ln,a,cn(function(A,P,D,I,H,N,G,O){var E=G.a,nn=G.b;return C($n,m(Wn,I,0,O),yl,rv,Wa,{S:nn,bj:E.bj,bT:E.bT,bU:E.bU,bV:E.bV,cy:v,c:D,d:P,e:N,f:A,bz:Jr(e),g:H})}));default:n.a;var f=n.b,s=n.c,p=n.d,d=n.e,h=j(uv,f,s,p,d);if(h.$)return z;var b=h.a,_=h.b,x=h.c;return o(Ln,a,cn(function(A,P,D,I,H,N,G,O){var E=G.a,nn=G.b;return C($n,m(Wn,I,0,O),yl,cv,Wa,{ca:b,S:nn,bj:E.bj,bT:E.bT,bU:E.bU,bV:E.bV,cC:x,c:D,d:P,e:N,c0:_,f:A,bz:Jr(e),g:H})}))}}),f2=function(){var n=g([{a3:o(Un,0,1)},{a3:o(Un,1,1)},{a3:o(Un,2,1)},{a3:o(Un,0,-1)},{a3:o(Un,1,-1)},{a3:o(Un,2,-1)}]),e=g([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return o(ya,n,e)}(),s2={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b5",triangleVertexPositions:"bz",viewMatrix:"g"}},xl=function(n){return qt(cn(function(e,r,a,t,i,c,l,u){return C($n,o($c,t,u),s2,uc,f2,{c:a,d:r,e:c,f:e,b5:l,bz:Jr(n),g:i})}))},d2=V(function(n,e,r,a){var t=o(v2,r,a),i=y(n,e);return i.a?i.b?_a(g([t,xl(a)])):t:i.b?xl(a):z}),m2=$(function(n,e){return j(d2,!0,!0,n,e)}),fc=function(n){var e=n;return e},p2=$(function(n,e){var r=Re(e),a=Re(n),t=Ee(e),i=Ee(n),c=Ve(e),l=Ve(n);return{d5:o(hn,l,c),d6:o(hn,i,t),d7:o(hn,a,r),d8:o(wn,l,c),d9:o(wn,i,t),ea:o(wn,a,r)}}),g2=function(n){var e=fc(n),r=e.a,a=e.b;return o(p2,r,a)},Sl={src:`
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
    `,attributes:{lineSegmentVertex:"dP"},uniforms:{lineSegmentEndPoint:"dN",lineSegmentStartPoint:"dO",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},b2=$(function(n,e){return{$:1,a:n,b:e}}),h2=b2({ds:2,dB:0,ec:1}),Cl=h2(g([y({dP:0},{dP:1})])),A2=$(function(n,e){var r=g2(e),a=q(r),t=fc(e),i=t.a,c=t.b;switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.F,z;var l=n.b.a;return o(Ln,a,cn(function(v,f,s,p,d,h,b,_){return C($n,_,Sl,tc,Cl,{aB:l,dN:Rn(c),dO:Rn(i),c:s,d:f,e:h,f:v,g:d})}));case 1:if(n.b.$)return z;var l=n.b.a,u=n.c;return o(Ln,a,cn(function(f,s,p,d,h,b,_,x){return C($n,x,Sl,oc,Cl,{aS:o(Jt,xa(u),l),dN:Rn(c),dO:Rn(i),c:p,d:s,e:b,f,g:h})}));case 2:return z;default:return z}}),_2=$(function(n,e){return o(A2,n,e)}),Yt=function(n){var e=n;return e.eW},Zt=function(n){var e=n;return e.fN},Pl=$(function(n,e){var r=n,a=e;return r/a}),w2=xn(function(n,e,r,a,t){n:for(;;){var i=a(e/r),c=o(k,i,t);if(tn(e,n))return c;var l=n,u=e-1,v=r,f=a,s=c;n=l,e=u,r=v,a=f,t=s;continue n}}),jl=$(function(n,e){return n<1?S:C(w2,0,n,n,e,S)}),y2=$(function(n,e){var r=n.em,a=n.s,t=n.O,i=t,c=i.a,l=i.b;return o(k,{s:It(a),em:Rn(r),O:o(Un,c,l)},e)}),x2=function(n){var e=m(iu,y2,S,rc(n));if(e.b){var r=e.a,a=e.b,t=o(ya,e,ec(n)),i=o(pv,r,a);return j(R$,i,n,t,0)}else return nc},sc=$(function(n,e){var r=n,a=e,t=tr(a);return{gf:t*tr(r),gj:t*or(r),dj:or(a)}}),S2=function(){var n=Hn(1),e=72,r=o(xr,0,e-1),a=o(jl,e,o(ua,ye,oi(1))),t=wi(e/2),i=o(xr,0,t-1),c=o(jl,t,o(ua,br(90),br(-90))),l=ac(re(o(X,function(f){return o(X,function(s){return{s:Or(o(sc,f,s)),em:m(Cn,o(rn,Qr(s)*Qr(f),n),o(rn,Qr(s)*bt(f),n),o(rn,bt(s),n)),O:y(o(Pl,f,oi(1)),o(Pl,o(Zr,br(90),s),br(180)))}},c)},a))),u=$(function(f,s){return f*(t+1)+s}),v=re(o(X,function(f){return re(o(X,function(s){var p=o(u,f+1,s),d=o(u,f,s),h=o(u,f+1,s+1),b=o(u,f,s+1);return g([T(b,h,p),T(b,p,d)])},i))},r));return Ki(x2(o(q$,l,v)))}(),ht=72,Na=2*ht,C2=$(function(n,e){n:for(;;){var r=Na+1,a=o(aa,Na,2*n+3),t=o(aa,Na,2*n+2),i=2*n+1,c=2*n,l=Na,u=o(k,T(l,c,t),o(k,T(c,a,t),o(k,T(c,i,a),o(k,T(i,r,a),e))));if(n){var v=n-1,f=u;n=v,e=f;continue n}else return u}}),P2=w(function(n,e,r){return r<=.5?n+r*(e-n):e+(1-r)*(n-e)}),j2=$(function(n,e){n:for(;;){var r=m(P2,0,2*ne,n/ht),a={bF:r,bY:0,b2:1},t={bF:r,bY:1,b2:1},i=o(k,a,o(k,t,e));if(n){var c=n-1,l=i;n=c,e=l;continue n}else return i}}),L2=function(){var n=o(j2,ht-1,g([{bF:0,bY:0,b2:0},{bF:0,bY:1,b2:0}])),e=o(C2,ht-1,S);return o(ya,n,e)}(),k2={src:`
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
    `,attributes:{angle:"bF",offsetScale:"bY",radiusScale:"b2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b5",viewMatrix:"g"}},Ll=function(n){return qt(cn(function(e,r,a,t,i,c,l,u){return C($n,o($c,!0,u),k2,uc,L2,{aB:m(Aa,0,0,1),c:a,d:r,e:c,f:e,b5:l,g:i})}))},z2=function(n){var e=G$(n);return{dF:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,K:e.gf,L:e.gj,M:e.dj,b3:1}},T2=$(function(n,e){return o(vv,z2(n),e)}),M2=V(function(n,e,r,a){var t=o(cc,r,S2),i=function(){var u=y(n,e);return u.a?u.b?_a(g([t,Ll()])):t:u.b?Ll():z}(),c=Zt(a),l=c;return o(T2,o(Qo,Bn,Yt(a)),o(lc,T(l,l,l),i))}),D2=$(function(n,e){return j(M2,!0,!0,n,e)}),F2=w(function(n,e,r){return{$:1,a:n,b:e,c:r}}),Av=w(function(n,e,r){return{$:2,a:n,b:e,c:r}}),B2=xn(function(n,e,r,a,t){return{$:3,a:n,b:e,c:r,d:a,e:t}}),V2=function(n){switch(n.$){case 0:var r=n.a,a=n.b;return o(mv,r,a);case 1:var r=n.a,a=n.b,e=n.c;return m(F2,r,a,e);case 2:var r=n.a,a=n.b,c=n.c;return m(Av,r,a,c);default:var r=n.a,a=n.b,t=n.c,i=n.d,c=n.e;return C(B2,r,a,t,i,c)}},E2=V2,_v=function(n){switch(n.$){case 0:var t=n.a,e=n.b;return g([o(n2,t,e)]);case 1:var t=n.a,r=n.b;return g([o(m2,t,r)]);case 3:var t=n.a,a=n.b;return g([o(D2,E2(t),a)]);case 2:var t=n.a,i=n.b;return g([o($2,t,i)]);case 4:var c=n.a,l=n.b;return g([o(_2,r2(c),l)]);default:var u=n.a;return o(ha,_v,u)}},R2=function(n){return o(ha,_v,n)},W2=$(function(n,e){return I3({eM:n.eM,aN:Cg(n.eQ),eT:n.eT,eY:Hn(n.eY),cg:n.cg,aP:y(dl(Jn(n.b4.gd)),dl(Jn(n.b4.fk))),aU:R2(e),fb:n.fb,fx:n.fx,f5:n.f5,gc:n.gc})}),wv=function(n){return n},N2=$(function(n,e){var r=n,a=ae(e.e3),t=a.gf,i=a.gj,c=a.dj,l=o(Gt,e.bP,e.aO),u=l;return{bH:vr(u),eV:r,bN:$r(u),cT:0,b1:ur(u),c9:1,gf:-t,gj:-i,dj:-c}}),H2=function(n){return o(N2,wv(!0),{aO:n.aO,e3:o(sc,oe(n.bG),oe(n.bL)),bP:n.bP})},Sa=$(function(n,e){return{$:0,a:n,b:e}}),xo=$(function(n,e){var r=n,a=e;return Z(a,r)>-1}),So=$(function(n,e){var r=n,a=e;return r+.5*(a-r)}),G2=pe({gf:-1,gj:0,dj:0}),U2=pe({gf:0,gj:-1,dj:0}),I2=Yn(function(n,e,r,a,t,i){var c=o(xo,r,i)?Ei:Wi,l=o(xo,e,t)?Xi:U2,u=o(xo,n,a)?f$:G2,v=T(vn(o(Se,n,a)),vn(o(Se,e,t)),vn(o(Se,r,i))),f=m(Cn,o(So,n,a),o(So,e,t),o(So,r,i)),s=Ce({cK:f,dh:u,di:l,dk:c});return{eP:s,aP:v}}),yv=$(function(n,e){return mn(I2,Ve(n),Ee(n),Re(n),Ve(e),Ee(e),Re(e))}),xv=$(function(n,e){var r=e/2;return o(Sa,n,o(yv,m(ca,-r,-r,-r),m(ca,r,r,r)))}),O2=$(function(n,e){return o(jn,function(r){if(r.$===2){var a=r.a;return a}else return Ti},o(ma,n,e.aA))}),J2=$(function(n,e){return o(pn,Ti,zr(o(pa,O2(n),e)))}),q2=$(function(n,e){return o(J2,n,e.eZ)}),He=q2,Xt=function(n){return{$:5,a:n}},Br=function(n){return Xt(n)},Co=function(n){return m(Ui,0,1,n<=.04045?n/12.92:o(Ne,(n+.055)/1.055,2.4))},Y2=function(n){var e=Mi(n),r=e.cY,a=e.cj,t=e.cc;return m(Aa,Co(r),Co(a),Co(t))},Pe=function(n){return m(Av,0,ti(Y2(n)),ti(0))},Qt=$(function(n,e){return{$:2,a:n,b:e}}),dc=$(function(n,e){return{$:4,a:n,b:e}}),Kt=$(function(n,e){return{$:3,a:n,b:e}}),mc=$(function(n,e){return{$:1,a:n,b:e}}),Z2=w(function(n,e,r){return{gf:n,gj:e,dj:r}}),X2=$(function(n,e){return{eP:o($$,n,Ut(e)),aP:Ot(e)}}),Q2=$(function(n,e){var r=e;return o(qn,o(Tr,n,r.cK),r.e3)}),K2=$(function(n,e){var r=e;return{m:o(Q2,n,r.m),fv:r.fv,fN:r.fN}}),nh=function(n){return n},pc=$(function(n,e){var r=fc(e),a=r.a,t=r.b;return nh(y(n(a),n(t)))}),eh=$(function(n,e){return o(pc,Tr(n),e)}),no=$(function(n,e){return{eW:e,fN:vn(n)}}),rh=$(function(n,e){return o(no,Zt(e),o(Tr,n,Yt(e)))}),gc=$(function(n,e){var r=e,a=r.a,t=r.b,i=r.c;return T(n(a),n(t),n(i))}),ah=$(function(n,e){return o(gc,Tr(n),e)}),eo=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=m(Z2,r,a,t);switch(e.$){case 0:var f=e.a,c=e.b;return o(Sa,f,o(X2,i,c));case 1:var f=e.a,l=e.b;return o(mc,f,o(ah,i,l));case 3:var f=e.a,u=e.b;return o(Kt,f,o(rh,i,u));case 2:var f=e.a,v=e.b;return o(Qt,f,o(K2,i,v));case 4:var f=e.a,s=e.b;return o(dc,f,o(eh,i,s));default:var p=e.a;return Xt(o(X,eo(T(r,a,t)),p))}}),fr=function(n){return eo(T(n,0,0))},Ge=function(n){return eo(T(0,n,0))},ge=function(n){return eo(T(0,0,n))},kl=$(function(n,e){var r=function(a){var t=a.a,i=a.b;return o(Ge,i,o(fr,t,o(ge,-.495,o(xv,Pe(o(He,"board color",n)),1))))};return Br(o(X,r,Cr(zn(e.a).bS)))}),$a=$(function(n,e){var r=e.a,a=e.b,t=e.c,i=T(r/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Sa,n,o(yv,m(ca,-c,-l,-u),m(ca,c,l,u)))}),Pn=function(n){return n*ne/180},th=function(n){return o(Ne,n,2)},oh=w(function(n,e,r){return{eP:m(u$,n,e,Ut(r)),aP:Ot(r)}}),ih=$(function(n,e){var r=o(ba,n,e),a=o(Ja,n,e);return function(t){var i=t;return o(qn,r(i.cK),a(i.e3))}}),ch=w(function(n,e,r){var a=r;return{m:m(ih,n,e,a.m),fv:a.fv,fN:a.fN}}),lh=w(function(n,e,r){return o(pc,o(ba,n,e),r)}),uh=w(function(n,e,r){return o(no,Zt(r),m(ba,n,e,Yt(r)))}),$h=w(function(n,e,r){return o(gc,o(ba,n,e),r)}),Ca=w(function(n,e,r){switch(r.$){case 0:var l=r.a,a=r.b;return o(Sa,l,m(oh,n,e,a));case 1:var l=r.a,t=r.b;return o(mc,l,m($h,n,e,t));case 3:var l=r.a,i=r.b;return o(Kt,l,m(uh,n,e,i));case 2:var l=r.a,c=r.b;return o(Qt,l,m(ch,n,e,c));case 4:var l=r.a,u=r.b;return o(dc,l,m(lh,n,e,u));default:var v=r.a;return Xt(o(X,o(Ca,n,e),v))}}),zl=$(function(n,e){var r=n.a,a=n.b,t=a.a,i=a.b,c=a.c;return o(Ca,o(qn,Vi(r),pe({gf:t,gj:i,dj:c})),oe(e))}),Sv=w(function(n,e,r){var a=e.c4;switch(a.$){case 1:var v=a.a.aj,f=a.a.b6,s=a.a.bp;if(a.a.cF,tn(f,r)){var t=function(){switch(s){case 0:return y({gf:.5,gj:.5,dj:-.5},T(-1,0,0));case 1:return y({gf:-.5,gj:-.5,dj:-.5},T(1,0,0));case 2:return y({gf:-.5,gj:.5,dj:-.5},T(0,-1,0));default:return y({gf:.5,gj:-.5,dj:-.5},T(0,1,0))}}(),i=o(bn,"duration of step animation",n),c=(n.V-v)/i,l=th(c),u=o(_r,Pn(90),l*Pn(90));return o(zl,t,u)}else return Nn;case 2:var v=a.a.aj,f=a.a.b6,s=a.a.bp;if(tn(f,r)){var t=function(){switch(s){case 0:return y({gf:.5,gj:.5,dj:-.5},T(-1,0,0));case 1:return y({gf:-.5,gj:-.5,dj:-.5},T(1,0,0));case 2:return y({gf:-.5,gj:.5,dj:-.5},T(0,-1,0));default:return y({gf:.5,gj:-.5,dj:-.5},T(0,1,0))}}(),i=o(bn,"duration of mistake animation",n),c=(n.V-v)/i,l=or(ne*c),u=m(Ui,Pn(0),Pn(45),l*Pn(45));return o(zl,t,u)}else return Nn;default:return Nn}}),vh=o(qn,Bn,Nt),rr=$(function(n,e){return m(Ca,vh,oe(n),e)}),fh=o(qn,Bn,Qi),At=$(function(n,e){return m(Ca,fh,oe(n),e)}),sh=$(function(n,e){var r=o(bn,"cubes side length",n),a=o(He,"color 2",n),t=o(ge,-(r/4),o($a,Pe(a),T(r,r,r/2))),i=o(He,"color 1",n),c=o(ge,r/4,o($a,Pe(i),T(r,r,r/2))),l=zn(e.a).dL,u=l.a,v=u.a,f=u.b,s=l.b,p=function(){if(s.b)switch(s.a){case 2:return s.a,s.b,rr(Pn(180));case 1:return s.a,s.b,rr(Pn(90));default:return s.a,s.b,At(-Pn(90))}else switch(s.a){case 2:return s.a,s.b,Nn;case 1:return s.a,s.b,rr(-Pn(90));default:return s.a,s.b,At(Pn(90))}}();return o(Ge,f,o(fr,v,o(ge,r/2,j(Sv,n,e,y(v,f),p(Br(g([c,t])))))))}),dh=w(function(n,e,r){return{m:o(qn,n,e),fv:vn(r.fv),fN:vn(r.fN)}}),mh=w(function(n,e,r){return o(Qt,n,m(dh,Bn,Xi,{fv:Hn(r),fN:Hn(e)}))}),ph=$(function(n,e){return(e-bu(e/n)*n)/n}),gh=function(n){return 2*ne*n},ii=V(function(n,e,r,a){return n+(e-n)*(1+tr(gh(o(ph,r,a))))/2}),bh=$(function(n,e){var r=zn(e.a).bS.fu,a=r.a,t=r.b;return o(Ge,t,o(fr,a,o(ge,j(ii,-.3,-.4,.5,n.V),o(rr,Pn(90),m(mh,Pe(o(He,"finish mark color",n)),.3,1)))))}),hh=$(function(n,e){var r=o(bn,"cubes side length",n),a=o(He,"color 2",n),t=o(ge,-(r/4),o($a,Pe(a),T(r,r,r/2))),i=o(He,"color 1",n),c=o(ge,r/4,o($a,Pe(i),T(r,r,r/2))),l=zn(e.a).cU,u=l.a,v=u.a,f=u.b,s=l.b,p=function(){if(s.b)switch(s.a){case 2:return s.a,s.b,rr(Pn(180));case 1:return s.a,s.b,rr(Pn(90));default:return s.a,s.b,At(-Pn(90))}else switch(s.a){case 2:return s.a,s.b,Nn;case 1:return s.a,s.b,rr(-Pn(90));default:return s.a,s.b,At(Pn(90))}}();return o(Ge,f,o(fr,v,o(ge,r/2,j(Sv,n,e,y(v,f),p(Br(g([c,t])))))))}),Ah=V(function(n,e,r,a){var t=T(n,e,r),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,f=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},s=f(i-1/3),p=f(i),d=f(i+1/3);return j(Je,d,p,s,a)}),_h=w(function(n,e,r){return j(Ah,n,e,r,1)}),Pa=w(function(n,e,r){var a=n,t=r;return{gf:a.gf+e*(t.gf-a.gf),gj:a.gj+e*(t.gj-a.gj),dj:a.dj+e*(t.dj-a.dj)}}),wh=w(function(n,e,r){var a=Ut(r),t=qe(a),i=Ye(a),c=Ze(a),l=m(Pa,n,e,lr(a)),u=e>=0?Ce({cK:l,dh:t,di:i,dk:c}):Ce({cK:l,dh:Be(t),di:Be(i),dk:Be(c)}),v=Ot(r),f=v.a,s=v.b,p=v.c,d=vn(o(rn,e,f)),h=vn(o(rn,e,s)),b=vn(o(rn,e,p));return{eP:u,aP:T(d,h,b)}}),Tl=function(n){return Wt(vc(n))},yh=function(n){return Ri(vc(n))},xh=w(function(n,e,r){var a=vn(o(rn,e,hv(r))),t=vn(o(rn,e,bv(r))),i=e>=0?Tl(r):Be(Tl(r)),c=m(Pa,n,e,yh(r));return{m:o(qn,c,i),fv:t,fN:a}}),Sh=w(function(n,e,r){return o(pc,o(Pa,n,e),r)}),Ch=w(function(n,e,r){return o(no,o(rn,Q(e),Zt(r)),m(Pa,n,e,Yt(r)))}),Ph=w(function(n,e,r){return o(gc,o(Pa,n,e),r)}),Cv=$(function(n,e){switch(e.$){case 0:var c=e.a,r=e.b;return o(Sa,c,m(wh,Bn,n,r));case 1:var c=e.a,a=e.b;return o(mc,c,m(Ph,Bn,n,a));case 3:var c=e.a,t=e.b;return o(Kt,c,m(Ch,Bn,n,t));case 2:var c=e.a,i=e.b;return o(Qt,c,m(xh,Bn,n,i));case 4:var c=e.a,l=e.b;return o(dc,c,m(Sh,Bn,n,l));default:var u=e.a;return Xt(o(X,Cv(n),u))}}),jh=j(Je,255/255,255/255,255/255,1),Lh=$(function(n,e){var r=function(i){var c=e.c4;return c.$===3?m(_h,j(ii,0,1,6,n.V+.03*i),1,.8):jh},a=function(i){var c=e.c4;return c.$===3?o(K,Cv(.9),ge(j(ii,.1,.7,6,n.V+.3*i))):Nn},t=$(function(i,c){var l=c.a,u=c.b;return o(Ge,u,o(fr,l,o(ge,-.49,o(a,i,o(xv,Pe(r(i)),1)))))});return Br(o(Ct,t,Cr(zn(e.a).ej)))}),kh=j(Je,164/255,0/255,0/255,1),zh=j(Je,239/255,41/255,41/255,1),Th=$(function(n,e){return o(Kt,n,o(no,Hn(e),Bn))}),Mh=$(function(n,e){var r=n.cV.dE?zh:kh,a=e.a9,t=a.a,i=a.b;return o(Ge,i,o(fr,t,o(Th,Pe(r),.2)))}),Dh=$(function(n,e){return y(n,e)}),Fh=function(n){var e=n.fu,r=n.bn;return m(fu,Dh,o(k,e,r),r)},Pv=$(function(n,e){var r=n.a,a=n.b,t=function(i){var c=i.a,l=c.a,u=c.b,v=i.b,f=v.a,s=v.b;return a?tn(r,c)&&tn(f,l+1)||tn(r,v)&&tn(f,l-1):tn(r,c)&&tn(s,u-1)||tn(r,v)&&tn(s,u+1)};return o(Tt,t,Fh(e))}),Bh=o(qn,Bn,Ht),Vh=$(function(n,e){return m(Ca,Bh,oe(n),e)}),jv=$(function(n,e){var r=e.a,a=r.a,t=r.b,i=e.b,c=1-o(bn,"cubes side length",n),l=o(Ge,-.5,o($a,Pe(o(He,"wall color",n)),T(1+c,c,c))),u=o(Vh,Pn(90),l);return o(Ge,t,o(fr,a,function(){return i?u:l}()))}),Ha=$(function(n,e){return{$:0,a:n,b:e}}),Eh=function(n){return g([o(Ha,n,0),o(Ha,n,1),o(Ha,o(ft,0,n),0),o(Ha,o(ft,2,n),1)])},Lv=function(n){return o(ha,Eh,Cr(n))},Rh=$(function(n,e){var r=o(pn,zn(e.a).bS,e.o.ee);return Br(o(X,jv(n),o(Mr,function(a){return!o(Pv,a,r)},Lv(r))))}),Wh=$(function(n,e){return Br(o(X,jv(n),o(Mr,function(r){return!o(Pv,r,zn(e.a).ej)},Lv(zn(e.a).bS))))}),Nh=function(n){return n},Hh=function(n){return Nh(1.2*o(Ne,2,n))},Po=Gi({gf:.37208,gj:.37529}),Gh={$:5},Uh=Gh,Ih=Gi({gf:.44757,gj:.40745}),Oh=function(n){return n},Ml=function(n){return n},jo=function(n){return n},Jh={$:1},qh=Jh,Yh=$(function(n,e){var r=n,a=wa(e.em),t=a.gf,i=a.gj,c=a.dj,l=o(Gt,e.bP,e.aO),u=l;return{bH:vr(u),eV:r,bN:$r(u),cT:0,b1:ur(u),c9:2,gf:t,gj:i,dj:c}}),Dl=function(n){return o(Yh,wv(!0),{aO:n.aO,bP:n.bP,em:Vi(n.em)})},Zh=$(function(n,e){var r=n,a=e;return Z(a,r)>0}),Fl=function(n){var e=n;return e},Xh=function(n){n:for(;;){if(tn(n.dC,ye)&&tn(n.dD,ye))return Mn;if(o(Zh,vn(n.dC),vn(n.dD))){var e={aO:n.aO,dC:n.dD,dD:n.dC,eE:Be(n.eE)};n=e;continue n}else{var r=Q(Fl(n.dD)/ne),a=Q(Fl(n.dC)/ne),t=ae(n.eE),i=t.gf,c=t.gj,l=t.dj,u=o(Gt,U$(1),n.aO),v=u;return{bH:a*vr(v),eV:!1,bN:a*$r(v),cT:r/a,b1:a*ur(v),c9:3,gf:i,gj:c,dj:l}}}},Qh=function(n){return Xh({aO:n.aO,dC:n.dC,dD:n.dD,eE:o(sc,oe(n.bG),oe(n.bL))})},Kh=$(function(n,e){return{$:2,a:n,b:e}}),kv=function(n){return{$:0,a:n}},Ga=function(n){var e=n;return e},nA=function(n){var e=n;return e.eV},eA=kv(Ir.a),rA=$(function(n,e){var r=$(function(a,t){var i=t.a,c=t.b;return n(a)?y(o(k,a,i),c):y(i,o(k,a,c))});return m(Le,r,y(S,S),e)}),aA=function(n){var e=n;return fe({dQ:e.gf,dR:e.b1,dS:0,dT:0,dU:e.gj,dV:e.bN,dW:0,dX:0,dY:e.dj,dZ:e.bH,d_:0,d$:0,d0:e.c9,d1:e.cT,d2:0,d3:0})},tA=cn(function(n,e,r,a,t,i,c,l){var u=o(rA,nA,g([Ga(n),Ga(e),Ga(r),Ga(a)])),v=u.a,f=u.b;if(v.b){var s=un(v,f);if(s.b&&s.b.b&&s.b.b.b&&s.b.b.b.b&&!s.b.b.b.b.b){var p=s.a,d=s.b,h=d.a,b=d.b,_=b.a,x=b.b,A=x.a;return o(Kh,o(X,aA,v),{bj:o(Xn,p,h),bT:o(Xn,_,A),bU:o(Xn,t,i),bV:o(Xn,c,l)})}else return eA}else return kv({bj:o(Xn,n,e),bT:o(Xn,r,a),bU:o(Xn,t,i),bV:o(Xn,c,l)})}),oA=$(function(n,e){return wt(tA,n,e,Mn,Mn,Mn,Mn,Mn,Mn)}),iA=$(function(n,e){H2({bG:o(bn,"azimuth for third light",n),aO:Sg(Oh(2e3)),bL:o(bn,"elevation for third light",n),bP:jo(100)}),Qh({bG:o(bn,"azimuth for fourth light",n),aO:Po,bL:o(bn,"elevation for fourth light",n),dC:jo(120),dD:jo(40)});var r=zn(e.a).cU,a=r.a,t=a.a,i=a.b,c=function(){var s=e.c4;if(s.$===1){var p=s.a.aj,d=s.a.bp,h=o(bn,"duration of step animation",n),b=(n.V-p)/h,_=function(){switch(d){case 0:return y(0,b);case 1:return y(0,-b);case 2:return y(-b,0);default:return y(b,0)}}(),x=_.a,A=_.b;return y(t+x,i+A)}else return y(t,i)}(),l=c.a,u=c.b,v=Dl({aO:Ih,bP:Ml(o(bn,"lumens of following lights",n)),em:{gf:l+.5,gj:u+.5,dj:o(bn,"height of following lights",n)}}),f=Dl({aO:Po,bP:Ml(o(bn,"lumens of following lights",n)),em:{gf:l-.5,gj:u-.5,dj:o(bn,"height of following lights",n)}});return o(W2,{eM:qh,eQ:o(He,"background color",n),eT:o(s$,n,e),eY:.1,cg:n.cg,fb:Hh(6),fx:o(oA,v,f),b4:n.b4,f5:Uh,gc:Po},e.o.ck?g([o(kl,n,e),o(sh,n,e),o(Rh,n,e),o(Mh,n,e)]):g([o(kl,n,e),o(hh,n,e),o(bh,n,e),o(Wh,n,e),o(Lh,n,e)]))}),cA=$(function(n,e){return o(B,S,g([o(yg,n,e),o(iA,n,e)]))}),lA=function(n){return{$:0,a:n}},uA={$:10},Me=$(function(n,e){return o(Dt,g([F("m-1 p-2 rounded bg-black40 hover:bg-black80"),Bt(n)]),g([on(e)]))}),$A=ie("pre"),vA=function(n){return o($A,g([F("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),g([on(n.o.cl)]))},fA=$(function(n,e){return o(B,S,g([o(Me,uA,"Export Levels"),vA(e)]))}),sA={$:11},dA=function(n){return{$:12,a:n}},mA=function(n){return o(cr,"cols",yn(n))},pA=function(n){return o(cr,"rows",yn(n))},gA=ie("textarea"),bA=function(n){return o(gA,g([F("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),pA(150),mA(10),Vt(dA),Et(n.o.cm)]),g([on("todo")]))},hA=$(function(n,e){return o(B,S,g([o(Me,sA,"Import Levels"),bA(e)]))}),AA={$:7},_A={$:9},wA={$:6},yA={$:5},xA={$:8},SA=function(n){var e=n;return e.l},CA=function(n){return te(SA(n))+1},PA=function(n){var e=n;return 1+te(e.l)+te(e.q)},jA=function(n){return o(B,S,g([o(B,g([F("text-lg")]),g([on("Level Selection")])),o(Gr,S,g([o(Me,yA,"<"),o(Ur,g([o(ln,"margin","10px")]),g([on(_$(g([yn(CA(n.a))," / ",yn(PA(n.a))])))])),o(Me,wA,">")])),o(Me,AA,"Add level"),o(Me,xA,"Remove current level"),o(Me,_A,"Move level one up")]))},LA=function(n){return{$:2,a:n}},kA={$:3},zA={$:1},TA=function(n){return o(Ft,"mouseenter",dn(n))},MA=function(n){return o(Ft,"mouseleave",dn(n))},DA=$(function(n,e){return o(B,S,g([o(B,g([F("h-40")]),g([o(B,g([F("text-lg")]),g([on("Solution Calculator")])),o(Me,zA,"Calculate all solutions"),o(B,S,o(Ct,$(function(r,a){return o(B,g([F("m-2 p-2 w-24 bg-black60 hover:bg-black cursor-crosshair"),TA(LA(a)),MA(kA)]),g([on("Solution "+yn(r))]))}),zn(e.a).dn))]))]))}),FA=$(function(n,e){return e.o.ck?o(B,S,g([o(B,g([F("p-4")]),g([o(DA,n,e)])),o(B,g([F("p-4 border-[0.5px] border-white20")]),g([jA(e)])),o(B,g([F("p-4 border-[0.5px] border-white20")]),g([o(fA,n,e)])),o(B,g([F("p-4 border-[0.5px] border-white20")]),g([o(hA,n,e)]))])):o(B,S,S)}),BA=w(function(n,e,r){return o(B,S,g([o(ta,g([F("align-bottom"),oa("checkbox"),ra(r),$t(r),Ju(n),Hu(e)]),S),o(ut,g([F("pl-2 font-bold"),ct(r)]),g([on(r)]))]))}),VA=$(function(n,e){return o(B,g([F("fixed w-[300px] h-full top-0 right-0"),F("bg-black20"),F("border-[0.5px] border-white20"),F("overflow-y-scroll"),F("text-xs text-white60")]),g([o(B,g([F("m-4")]),g([m(BA,lA,e.o.ck,"Editor")])),o(FA,n,e)]))}),EA=mn(l1,cA,Jp,y1,h1,VA,wg);const RA={Main:{init:EA(o(M,function(n){return dn({fr:n})},o(L,"inputs",o(M,function(n){return o(M,function(e){return o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return dn({V:c,cg:i,e6:t,dH:a,cV:r,b4:e,gb:n})},o(L,"clock",_n))},o(L,"devicePixelRatio",_n))},o(L,"dt",_n))},o(L,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(f){return o(M,function(s){return dn({eL:s,e_:f,ci:v,e5:u,dI:l,fM:c,et:i,fV:t,dc:a})},o(L,"alt",en))},o(L,"control",en))},o(L,"down",en))},o(L,"downs",We(ar)))},o(L,"left",en))},o(L,"pressedKeys",We(ar)))},o(L,"right",en))},o(L,"shift",en))},o(L,"up",en))))},o(L,"pointer",o(M,function(r){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return dn({ci:v,dE:u,fA:l,fR:c,fS:i,dc:t,gf:a,gj:r})},o(L,"down",en))},o(L,"isDown",en))},o(L,"move",en))},o(L,"rightDown",en))},o(L,"rightUp",en))},o(L,"up",en))},o(L,"x",_n))},o(L,"y",_n))))},o(L,"screen",o(M,function(e){return o(M,function(r){return dn({fk:r,gd:e})},o(L,"height",_n))},o(L,"width",_n))))},o(L,"wheel",o(M,function(n){return o(M,function(e){return dn({e0:e,e1:n})},o(L,"deltaX",_n))},o(L,"deltaY",_n)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},WA=n=>{const e=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),r=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),t=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function f(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function s(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),e(d)&&(R.keyboard.control=!0),r(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),t(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(h=>h!=d.code),e(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),r(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),t(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{f(R)}),window.addEventListener("focus",d=>{f(R)}),window.addEventListener("visibilitychange",d=>{f(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(d){const h=d/1e3,b=h-R.clock;b<.009||(R.dt=b,R.clock=h,n.ports.tick.send(R),s(R)),window.requestAnimationFrame(p)}},NA=()=>{Lo("pointerdown"),Lo("wheel"),Lo("keydown")},Lo=n=>{document.addEventListener(n,function(e){var r;e.target&&((r=document.querySelector("#gui"))==null?void 0:r.contains(e.target))&&e.stopPropagation()},!0)},HA=RA.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});NA();WA(HA);
