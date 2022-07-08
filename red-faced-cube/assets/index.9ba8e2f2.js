const Rv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}};Rv();function Ue(n,e,r){return r.a=n,r.f=e,r}function $(n){return Ue(2,n,function(e){return function(r){return n(e,r)}})}function w(n){return Ue(3,n,function(e){return function(r){return function(a){return n(e,r,a)}}})}function B(n){return Ue(4,n,function(e){return function(r){return function(a){return function(t){return n(e,r,a,t)}}}})}function xn(n){return Ue(5,n,function(e){return function(r){return function(a){return function(t){return function(i){return n(e,r,a,t,i)}}}}})}function Yn(n){return Ue(6,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return n(e,r,a,t,i,c)}}}}}})}function At(n){return Ue(7,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return n(e,r,a,t,i,c,l)}}}}}}})}function cn(n){return Ue(8,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return n(e,r,a,t,i,c,l,u)}}}}}}}})}function vi(n){return Ue(9,n,function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return n(e,r,a,t,i,c,l,u,v)}}}}}}}}})}function o(n,e,r){return n.a===2?n.f(e,r):n(e)(r)}function m(n,e,r,a){return n.a===3?n.f(e,r,a):n(e)(r)(a)}function L(n,e,r,a,t){return n.a===4?n.f(e,r,a,t):n(e)(r)(a)(t)}function C(n,e,r,a,t,i){return n.a===5?n.f(e,r,a,t,i):n(e)(r)(a)(t)(i)}function mn(n,e,r,a,t,i,c){return n.a===6?n.f(e,r,a,t,i,c):n(e)(r)(a)(t)(i)(c)}function si(n,e,r,a,t,i,c,l){return n.a===7?n.f(e,r,a,t,i,c,l):n(e)(r)(a)(t)(i)(c)(l)}function _t(n,e,r,a,t,i,c,l,u){return n.a===8?n.f(e,r,a,t,i,c,l,u):n(e)(r)(a)(t)(i)(c)(l)(u)}function Wv(n,e,r,a,t,i,c,l,u,v){return n.a===9?n.f(e,r,a,t,i,c,l,u,v):n(e)(r)(a)(t)(i)(c)(l)(u)(v)}var Nv=[];function Gv(n){return n.length}var Hv=w(function(n,e,r){for(var a=new Array(n),t=0;t<n;t++)a[t]=r(e+t);return a}),Uv=$(function(n,e){for(var r=new Array(n),a=0;a<n&&e.b;a++)r[a]=e.a,e=e.b;return r.length=a,y(r,e)}),Iv=$(function(n,e){return e[n]});w(function(n,e,r){for(var a=r.length,t=new Array(a),i=0;i<a;i++)t[i]=r[i];return t[n]=e,t});$(function(n,e){for(var r=e.length,a=new Array(r+1),t=0;t<r;t++)a[t]=e[t];return a[r]=n,a});w(function(n,e,r){for(var a=r.length,t=0;t<a;t++)e=o(n,r[t],e);return e});var Ov=w(function(n,e,r){for(var a=r.length-1;a>=0;a--)e=o(n,r[a],e);return e});$(function(n,e){for(var r=e.length,a=new Array(r),t=0;t<r;t++)a[t]=n(e[t]);return a});w(function(n,e,r){for(var a=r.length,t=new Array(a),i=0;i<a;i++)t[i]=o(n,e+i,r[i]);return t});w(function(n,e,r){return r.slice(n,e)});w(function(n,e,r){var a=e.length,t=n-a;t>r.length&&(t=r.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=e[l];for(var l=0;l<t;l++)c[l+a]=r[l];return c});$(function(n,e){return e});$(function(n,e){return console.log(n+": "+Jv()),e});function Jv(n){return"<internals>"}function Pr(n){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function tn(n,e){for(var r,a=[],t=Po(n,e,0,a);t&&(r=a.pop());t=Po(r.a,r.b,0,a));return t}function Po(n,e,r,a){if(n===e)return!0;if(typeof n!="object"||n===null||e===null)return typeof n=="function"&&Pr(5),!1;if(r>100)return a.push(y(n,e)),!0;n.$<0&&(n=Vc(n),e=Vc(e));for(var t in n)if(!Po(n[t],e[t],r+1,a))return!1;return!0}var qv=$(tn);$(function(n,e){return!tn(n,e)});function Y(n,e,r){if(typeof n!="object")return n===e?0:n<e?-1:1;if(typeof n.$=="undefined")return(r=Y(n.a,e.a))||(r=Y(n.b,e.b))?r:Y(n.c,e.c);for(;n.b&&e.b&&!(r=Y(n.a,e.a));n=n.b,e=e.b);return r||(n.b?1:e.b?-1:0)}$(function(n,e){return Y(n,e)<0});$(function(n,e){return Y(n,e)<1});$(function(n,e){return Y(n,e)>0});$(function(n,e){return Y(n,e)>=0});var Zv=$(function(n,e){var r=Y(n,e);return r<0?du:r?Id:fu}),la=0;function y(n,e){return{a:n,b:e}}function M(n,e,r){return{a:n,b:e,c:r}}function W(n,e){var r={};for(var a in n)r[a]=n[a];for(var a in e)r[a]=e[a];return r}$(un);function un(n,e){if(typeof n=="string")return n+e;if(!n.b)return e;var r=he(n.a,e);n=n.b;for(var a=r;n.b;n=n.b)a=a.b=he(n.a,e);return r}var S={$:0};function he(n,e){return{$:1,a:n,b:e}}var Yv=$(he);function p(n){for(var e=S,r=n.length;r--;)e=he(n[r],e);return e}function wt(n){for(var e=[];n.b;n=n.b)e.push(n.a);return e}var Xv=w(function(n,e,r){for(var a=[];e.b&&r.b;e=e.b,r=r.b)a.push(o(n,e.a,r.a));return p(a)});B(function(n,e,r,a){for(var t=[];e.b&&r.b&&a.b;e=e.b,r=r.b,a=a.b)t.push(m(n,e.a,r.a,a.a));return p(t)});xn(function(n,e,r,a,t){for(var i=[];e.b&&r.b&&a.b&&t.b;e=e.b,r=r.b,a=a.b,t=t.b)i.push(L(n,e.a,r.a,a.a,t.a));return p(i)});Yn(function(n,e,r,a,t,i){for(var c=[];e.b&&r.b&&a.b&&t.b&&i.b;e=e.b,r=r.b,a=a.b,t=t.b,i=i.b)c.push(C(n,e.a,r.a,a.a,t.a,i.a));return p(c)});$(function(n,e){return p(wt(e).sort(function(r,a){return Y(n(r),n(a))}))});$(function(n,e){return p(wt(e).sort(function(r,a){var t=o(n,r,a);return t===fu?0:t===du?-1:1}))});$(function(n,e){return n+e});$(function(n,e){return n-e});$(function(n,e){return n*e});$(function(n,e){return n/e});$(function(n,e){return n/e|0});var Qv=$(Math.pow);$(function(n,e){return e%n});var Kv=$(function(n,e){var r=e%n;return n===0?Pr(11):r>0&&n<0||r<0&&n>0?r+n:r}),ns=Math.PI,es=Math.cos,rs=Math.sin,as=Math.tan,ts=Math.atan;$(Math.atan2);function os(n){return n}function is(n){return n===1/0||n===-1/0}var cs=Math.ceil,ls=Math.floor,us=Math.round,$s=Math.sqrt,wc=Math.log,vs=isNaN;function ss(n){return!n}$(function(n,e){return n&&e});$(function(n,e){return n||e});$(function(n,e){return n!==e});var fs=$(function(n,e){return n+e});function ds(n){var e=n.charCodeAt(0);return isNaN(e)?J:U(55296<=e&&e<=56319?y(n[0]+n[1],n.slice(2)):y(n[0],n.slice(1)))}$(function(n,e){return n+e});function ms(n){return n.length}$(function(n,e){for(var r=e.length,a=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=n(e[t]+e[t+1]),t+=2;continue}a[t]=n(e[t]),t++}return a.join("")});$(function(n,e){for(var r=[],a=e.length,t=0;t<a;){var i=e[t],c=e.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=e[t],t++),n(i)&&r.push(i)}return r.join("")});function ps(n){for(var e=n.length,r=new Array(e),a=0;a<e;){var t=n.charCodeAt(a);55296<=t&&t<=56319?(r[e-a]=n[a+1],a++,r[e-a]=n[a-1],a++):(r[e-a]=n[a],a++)}return r.join("")}w(function(n,e,r){for(var a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e=o(n,i,e)}return e});var gs=w(function(n,e,r){for(var a=r.length;a--;){var t=r[a],i=r.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=r[a]+t),e=o(n,t,e)}return e}),hs=$(function(n,e){return e.split(n)}),bs=$(function(n,e){return e.join(n)}),As=w(function(n,e,r){return r.slice(n,e)});function _s(n){return n.toLowerCase()}$(function(n,e){for(var r=e.length;r--;){var a=e[r],t=e.charCodeAt(r);if(56320<=t&&t<=57343&&(r--,a=e[r]+a),n(a))return!0}return!1});var ws=$(function(n,e){for(var r=e.length;r--;){var a=e[r],t=e.charCodeAt(r);if(56320<=t&&t<=57343&&(r--,a=e[r]+a),!n(a))return!1}return!0}),ys=$(function(n,e){return e.indexOf(n)>-1}),xs=$(function(n,e){return e.indexOf(n)===0});$(function(n,e){return e.length>=n.length&&e.lastIndexOf(n)===e.length-n.length});var Ss=$(function(n,e){var r=n.length;if(r<1)return S;for(var a=0,t=[];(a=e.indexOf(n,a))>-1;)t.push(a),a=a+r;return p(t)});function Gl(n){return n+""}function Cs(n){for(var e=0,r=n.charCodeAt(0),a=r==43||r==45?1:0,t=a;t<n.length;++t){var i=n.charCodeAt(t);if(i<48||57<i)return J;e=10*e+i-48}return t==a?J:U(r==45?-e:e)}function Ps(n){if(n.length===0||/[\sxbo]/.test(n))return J;var e=+n;return e===e?U(e):J}function Ls(n){return wt(n).join("")}function zs(n){var e=n.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+n.charCodeAt(1)-56320+65536:e}function ks(n){return n<0||1114111<n?"\uFFFD":n<=65535?String.fromCharCode(n):(n-=65536,String.fromCharCode(Math.floor(n/1024)+55296,n%1024+56320))}function Ts(n){return{$:0,a:n}}function Ms(n){return{$:1,a:n}}function yt(n){return{$:2,b:n}}var js=yt(function(n){return typeof n!="number"?ne("an INT",n):-2147483647<n&&n<2147483647&&(n|0)===n||isFinite(n)&&!(n%1)?sn(n):ne("an INT",n)}),Ds=yt(function(n){return typeof n=="boolean"?sn(n):ne("a BOOL",n)}),Fs=yt(function(n){return typeof n=="number"?sn(n):ne("a FLOAT",n)}),Vs=yt(function(n){return typeof n=="string"?sn(n):n instanceof String?sn(n+""):ne("a STRING",n)});function Bs(n){return{$:3,b:n}}var Es=$(function(n,e){return{$:6,d:n,b:e}});$(function(n,e){return{$:7,e:n,b:e}});function Ie(n,e){return{$:9,f:n,g:e}}var Rs=$(function(n,e){return{$:10,b:e,h:n}}),Ws=$(function(n,e){return Ie(n,[e])}),Ns=w(function(n,e,r){return Ie(n,[e,r])}),Gs=B(function(n,e,r,a){return Ie(n,[e,r,a])});xn(function(n,e,r,a,t){return Ie(n,[e,r,a,t])});var Hs=Yn(function(n,e,r,a,t,i){return Ie(n,[e,r,a,t,i])});At(function(n,e,r,a,t,i,c){return Ie(n,[e,r,a,t,i,c])});cn(function(n,e,r,a,t,i,c,l){return Ie(n,[e,r,a,t,i,c,l])});vi(function(n,e,r,a,t,i,c,l,u){return Ie(n,[e,r,a,t,i,c,l,u])});var Us=$(function(n,e){try{var r=JSON.parse(e);return Kn(n,r)}catch(a){return Fn(o(xi,"This is not valid JSON! "+a.message,e))}}),Hl=$(function(n,e){return Kn(n,e)});function Kn(n,e){switch(n.$){case 2:return n.b(e);case 5:return e===null?sn(n.c):ne("null",e);case 3:return Pa(e)?yc(n.b,e,p):ne("a LIST",e);case 4:return Pa(e)?yc(n.b,e,Is):ne("an ARRAY",e);case 6:var r=n.d;if(typeof e!="object"||e===null||!(r in e))return ne("an OBJECT with a field named `"+r+"`",e);var v=Kn(n.b,e[r]);return le(v)?v:Fn(o(Bc,r,v.a));case 7:var a=n.e;if(!Pa(e))return ne("an ARRAY",e);if(a>=e.length)return ne("a LONGER array. Need index "+a+" but only see "+e.length+" entries",e);var v=Kn(n.b,e[a]);return le(v)?v:Fn(o(mu,a,v.a));case 8:if(typeof e!="object"||e===null||Pa(e))return ne("an OBJECT",e);var t=S;for(var i in e)if(e.hasOwnProperty(i)){var v=Kn(n.b,e[i]);if(!le(v))return Fn(o(Bc,i,v.a));t=he(y(i,v.a),t)}return sn(Tn(t));case 9:for(var c=n.f,l=n.g,u=0;u<l.length;u++){var v=Kn(l[u],e);if(!le(v))return v;c=c(v.a)}return sn(c);case 10:var v=Kn(n.b,e);return le(v)?Kn(n.h(v.a),e):v;case 11:for(var s=S,f=n.g;f.b;f=f.b){var v=Kn(f.a,e);if(le(v))return v;s=he(v.a,s)}return Fn(Od(Tn(s)));case 1:return Fn(o(xi,n.a,e));case 0:return sn(n.a)}}function yc(n,e,r){for(var a=e.length,t=new Array(a),i=0;i<a;i++){var c=Kn(n,e[i]);if(!le(c))return Fn(o(mu,i,c.a));t[i]=c.a}return sn(r(t))}function Pa(n){return Array.isArray(n)||typeof FileList!="undefined"&&n instanceof FileList}function Is(n){return o(om,n.length,function(e){return n[e]})}function ne(n,e){return Fn(o(xi,"Expecting "+n,e))}function pr(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return pr(n.b,e.b);case 6:return n.d===e.d&&pr(n.b,e.b);case 7:return n.e===e.e&&pr(n.b,e.b);case 9:return n.f===e.f&&xc(n.g,e.g);case 10:return n.h===e.h&&pr(n.b,e.b);case 11:return xc(n.g,e.g)}}function xc(n,e){var r=n.length;if(r!==e.length)return!1;for(var a=0;a<r;a++)if(!pr(n[a],e[a]))return!1;return!0}var Os=$(function(n,e){return JSON.stringify(e,null,n)+""});function fi(n){return n}function Js(){return[]}function qs(){return{}}var Zs=w(function(n,e,r){return r[n]=e,r});function Ys(n){return $(function(e,r){return r.push(n(e)),r})}function cr(n){return{$:0,a:n}}function Xs(n){return{$:1,a:n}}function Le(n){return{$:2,b:n,c:null}}var Lo=$(function(n,e){return{$:3,b:n,d:e}});$(function(n,e){return{$:4,b:n,d:e}});function Qs(n){return{$:5,b:n}}var Ks=0;function di(n){var e={$:0,e:Ks++,f:n,g:null,h:[]};return mi(e),e}function Ul(n){return Le(function(e){e(cr(di(n)))})}function Il(n,e){n.h.push(e),mi(n)}var nf=$(function(n,e){return Le(function(r){Il(n,e),r(cr(la))})}),no=!1,Sc=[];function mi(n){if(Sc.push(n),!no){for(no=!0;n=Sc.shift();)ef(n);no=!1}}function ef(n){for(;n.f;){var e=n.f.$;if(e===0||e===1){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else if(e===2){n.f.c=n.f.b(function(r){n.f=r,mi(n)});return}else if(e===5){if(n.h.length===0)return;n.f=n.f.b(n.h.shift())}else n.g={$:e===3?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}B(function(n,e,r,a){return pi(e,a,n.fs,n.f9,n.f1,function(){return function(){}})});function pi(n,e,r,a,t,i){var c=o(Hl,n,e?e.flags:void 0);le(c)||Pr(2);var l={},u=r(c.a),v=u.a,s=i(g,v),f=rf(l,g);function g(d,b){var h=o(a,d,v);s(v=h.a,b),Pc(l,h.b,t(v))}return Pc(l,u.b,t(v)),f?{ports:f}:{}}var fe={};function rf(n,e){var r;for(var a in fe){var t=fe[a];t.a&&(r=r||{},r[a]=t.a(a,e)),n[a]=tf(t,e)}return r}function af(n,e,r,a,t){return{b:n,c:e,d:r,e:a,f:t}}function tf(n,e){var r={g:e,h:void 0},a=n.c,t=n.d,i=n.e,c=n.f;function l(u){return o(Lo,l,Qs(function(v){var s=v.a;return v.$===0?m(t,r,s,u):i&&c?L(a,r,s.i,s.j,u):m(a,r,i?s.i:s.j,u)}))}return r.h=di(o(Lo,l,n.b))}var of=$(function(n,e){return Le(function(r){n.g(e),r(cr(la))})});$(function(n,e){return o(nf,n.h,{$:0,a:e})});function Ol(n){return function(e){return{$:1,k:n,l:e}}}function cf(n){return{$:2,m:n}}$(function(n,e){return{$:3,n,o:e}});var Cc=[],eo=!1;function Pc(n,e,r){if(Cc.push({p:n,q:e,r}),!eo){eo=!0;for(var a;a=Cc.shift();)lf(a.p,a.q,a.r);eo=!1}}function lf(n,e,r){var a={};Xa(!0,e,a,null),Xa(!1,r,a,null);for(var t in n)Il(n[t],{$:"fx",a:a[t]||{i:S,j:S}})}function Xa(n,e,r,a){switch(e.$){case 1:var t=e.k,i=uf(n,t,a,e.l);r[t]=$f(n,i,r[t]);return;case 2:for(var c=e.m;c.b;c=c.b)Xa(n,c.a,r,a);return;case 3:Xa(n,e.o,r,{s:e.n,t:a});return}}function uf(n,e,r,a){function t(c){for(var l=r;l;l=l.t)c=l.s(c);return c}var i=n?fe[e].e:fe[e].f;return o(i,t,a)}function $f(n,e,r){return r=r||{i:S,j:S},n?r.i=he(e,r.i):r.j=he(e,r.j),r}function vf(n){fe[n]&&Pr(3)}$(function(n,e){return e});function sf(n,e){return vf(n),fe[n]={f:ff,u:e,a:df},Ol(n)}var ff=$(function(n,e){return function(r){return n(e(r))}});function df(n,e){var r=S,a=fe[n].u,t=cr(null);fe[n].b=t,fe[n].c=w(function(c,l,u){return r=l,t});function i(c){var l=o(Hl,a,c);le(l)||Pr(4,n,l.a);for(var u=l.a,v=r;v.b;v=v.b)e(v.a(u))}return{send:i}}var Qa,xe=typeof document!="undefined"?document:{};function gi(n,e){n.appendChild(e)}B(function(n,e,r,a){var t=a.node;return t.parentNode.replaceChild(Fe(n,function(){}),t),{}});function zo(n){return{$:0,a:n}}var Jl=$(function(n,e){return $(function(r,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:e,d:hi(r),e:t,f:n,b:i}})}),ie=Jl(void 0),mf=$(function(n,e){return $(function(r,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:e,d:hi(r),e:t,f:n,b:i}})}),pf=mf(void 0);function gf(n,e,r,a){return{$:3,d:hi(n),g:e,h:r,i:a}}var hf=$(function(n,e){return{$:4,j:n,k:e,b:1+(e.b||0)}});function Oe(n,e){return{$:5,l:n,m:e,k:void 0}}$(function(n,e){return Oe([n,e],function(){return n(e)})});w(function(n,e,r){return Oe([n,e,r],function(){return o(n,e,r)})});B(function(n,e,r,a){return Oe([n,e,r,a],function(){return m(n,e,r,a)})});xn(function(n,e,r,a,t){return Oe([n,e,r,a,t],function(){return L(n,e,r,a,t)})});Yn(function(n,e,r,a,t,i){return Oe([n,e,r,a,t,i],function(){return C(n,e,r,a,t,i)})});At(function(n,e,r,a,t,i,c){return Oe([n,e,r,a,t,i,c],function(){return mn(n,e,r,a,t,i,c)})});cn(function(n,e,r,a,t,i,c,l){return Oe([n,e,r,a,t,i,c,l],function(){return si(n,e,r,a,t,i,c,l)})});vi(function(n,e,r,a,t,i,c,l,u){return Oe([n,e,r,a,t,i,c,l,u],function(){return _t(n,e,r,a,t,i,c,l,u)})});var ql=$(function(n,e){return{$:"a0",n,o:e}}),bf=$(function(n,e){return{$:"a1",n,o:e}}),Zl=$(function(n,e){return{$:"a2",n,o:e}}),Je=$(function(n,e){return{$:"a3",n,o:e}});w(function(n,e,r){return{$:"a4",n:e,o:{f:n,o:r}}});function Af(n){return n=="script"?"p":n}function _f(n){return/^javascript:/i.test(n.replace(/\s/g,""))?"":n}$(function(n,e){return e.$==="a0"?o(ql,e.n,wf(n,e.o)):e});function wf(n,e){var r=zi(e);return{$:e.$,a:r?m(ua,r<3?yf:xf,dn(n),e.a):o(rt,n,e.a)}}var yf=$(function(n,e){return y(n(e.a),e.b)}),xf=$(function(n,e){return{aq:n(e.aq),c6:e.c6,cW:e.cW}});function hi(n){for(var e={};n.b;n=n.b){var r=n.a,a=r.$,t=r.n,i=r.o;if(a==="a2"){t==="className"?Lc(e,t,i):e[t]=i;continue}var c=e[a]||(e[a]={});a==="a3"&&t==="class"?Lc(c,t,i):c[t]=i}return e}function Lc(n,e,r){var a=n[e];n[e]=a?a+" "+r:r}function Fe(n,e){var r=n.$;if(r===5)return Fe(n.k||(n.k=n.m()),e);if(r===0)return xe.createTextNode(n.a);if(r===4){for(var a=n.k,t=n.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:e},c=Fe(a,i);return c.elm_event_node_ref=i,c}if(r===3){var c=n.h(n.g);return ko(c,e,n.d),c}var c=n.f?xe.createElementNS(n.f,n.c):xe.createElement(n.c);Qa&&n.c=="a"&&c.addEventListener("click",Qa(c)),ko(c,e,n.d);for(var l=n.e,u=0;u<l.length;u++)gi(c,Fe(r===1?l[u]:l[u].b,e));return c}function ko(n,e,r){for(var a in r){var t=r[a];a==="a1"?Sf(n,t):a==="a0"?Lf(n,e,t):a==="a3"?Cf(n,t):a==="a4"?Pf(n,t):(a!=="value"&&a!=="checked"||n[a]!==t)&&(n[a]=t)}}function Sf(n,e){var r=n.style;for(var a in e)r[a]=e[a]}function Cf(n,e){for(var r in e){var a=e[r];typeof a!="undefined"?n.setAttribute(r,a):n.removeAttribute(r)}}function Pf(n,e){for(var r in e){var a=e[r],t=a.f,i=a.o;typeof i!="undefined"?n.setAttributeNS(t,r,i):n.removeAttributeNS(t,r)}}function Lf(n,e,r){var a=n.elmFs||(n.elmFs={});for(var t in r){var i=r[t],c=a[t];if(!i){n.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}n.removeEventListener(t,c)}c=zf(e,i),n.addEventListener(t,c,bi&&{passive:zi(i)<2}),a[t]=c}}var bi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){bi=!0}}))}catch{}function zf(n,e){function r(a){var t=r.q,i=Kn(t.a,a);if(!!le(i)){for(var c=zi(t),l=i.a,u=c?c<3?l.a:l.aq:l,v=c==1?l.b:c==3&&l.c6,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),n),f,g;f=s.j;){if(typeof f=="function")u=f(u);else for(var g=f.length;g--;)u=f[g](u);s=s.p}s(u,v)}}return r.q=e,r}function kf(n,e){return n.$==e.$&&pr(n.a,e.a)}function Yl(n,e){var r=[];return ue(n,e,r,0),r}function jn(n,e,r,a){var t={$:e,r,s:a,t:void 0,u:void 0};return n.push(t),t}function ue(n,e,r,a){if(n!==e){var t=n.$,i=e.$;if(t!==i)if(t===1&&i===2)e=Ef(e),i=1;else{jn(r,0,a,e);return}switch(i){case 5:for(var c=n.l,l=e.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){e.k=n.k;return}e.k=e.m();var s=[];ue(n.k,e.k,s,0),s.length>0&&jn(r,1,a,s);return;case 4:for(var f=n.j,g=e.j,d=!1,b=n.k;b.$===4;)d=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var h=e.k;h.$===4;)d=!0,typeof g!="object"?g=[g,h.j]:g.push(h.j),h=h.k;if(d&&f.length!==g.length){jn(r,0,a,e);return}(d?!Tf(f,g):f!==g)&&jn(r,2,a,g),ue(b,h,r,a+1);return;case 0:n.a!==e.a&&jn(r,3,a,e.a);return;case 1:zc(n,e,r,a,Mf);return;case 2:zc(n,e,r,a,jf);return;case 3:if(n.h!==e.h){jn(r,0,a,e);return}var _=Ai(n.d,e.d);_&&jn(r,4,a,_);var x=e.i(n.g,e.g);x&&jn(r,5,a,x);return}}}function Tf(n,e){for(var r=0;r<n.length;r++)if(n[r]!==e[r])return!1;return!0}function zc(n,e,r,a,t){if(n.c!==e.c||n.f!==e.f){jn(r,0,a,e);return}var i=Ai(n.d,e.d);i&&jn(r,4,a,i),t(n,e,r,a)}function Ai(n,e,r){var a;for(var t in n){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ai(n[t],e[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in e)){a=a||{},a[t]=r?r==="a1"?"":r==="a0"||r==="a3"?void 0:{f:n[t].f,o:void 0}:typeof n[t]=="string"?"":null;continue}var c=n[t],l=e[t];c===l&&t!=="value"&&t!=="checked"||r==="a0"&&kf(c,l)||(a=a||{},a[t]=l)}for(var u in e)u in n||(a=a||{},a[u]=e[u]);return a}function Mf(n,e,r,a){var t=n.e,i=e.e,c=t.length,l=i.length;c>l?jn(r,6,a,{v:l,i:c-l}):c<l&&jn(r,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];ue(s,i[v],r,++a),a+=s.b||0}}function jf(n,e,r,a){for(var t=[],i={},c=[],l=n.e,u=e.e,v=l.length,s=u.length,f=0,g=0,d=a;f<v&&g<s;){var b=l[f],h=u[g],_=b.a,x=h.a,A=b.b,P=h.b,D=void 0,I=void 0;if(_===x){d++,ue(A,P,t,d),d+=A.b||0,f++,g++;continue}var G=l[f+1],N=u[g+1];if(G){var H=G.a,O=G.b;I=x===H}if(N){var E=N.a,nn=N.b;D=_===E}if(D&&I){d++,ue(A,nn,t,d),Br(i,t,_,P,g,c),d+=A.b||0,d++,Er(i,t,_,O,d),d+=O.b||0,f+=2,g+=2;continue}if(D){d++,Br(i,t,x,P,g,c),ue(A,nn,t,d),d+=A.b||0,f+=1,g+=2;continue}if(I){d++,Er(i,t,_,A,d),d+=A.b||0,d++,ue(O,P,t,d),d+=O.b||0,f+=2,g+=1;continue}if(G&&H===E){d++,Er(i,t,_,A,d),Br(i,t,x,P,g,c),d+=A.b||0,d++,ue(O,nn,t,d),d+=O.b||0,f+=2,g+=2;continue}break}for(;f<v;){d++;var b=l[f],A=b.b;Er(i,t,b.a,A,d),d+=A.b||0,f++}for(;g<s;){var an=an||[],h=u[g];Br(i,t,h.a,h.b,void 0,an),g++}(t.length>0||c.length>0||an)&&jn(r,8,a,{w:t,x:c,y:an})}var Xl="_elmW6BL";function Br(n,e,r,a,t,i){var c=n[r];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),n[r]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Br(n,e,r+Xl,a,t,i)}function Er(n,e,r,a,t){var i=n[r];if(!i){var c=jn(e,9,t,void 0);n[r]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];ue(a,i.z,l,t),jn(e,9,t,{w:l,A:i});return}Er(n,e,r+Xl,a,t)}function Ql(n,e,r,a){Rr(n,e,r,0,0,e.b,a)}function Rr(n,e,r,a,t,i,c){for(var l=r[a],u=l.r;u===t;){var v=l.$;if(v===1)Ql(n,e.k,l.s,c);else if(v===8){l.t=n,l.u=c;var s=l.s.w;s.length>0&&Rr(n,e,s,0,t,i,c)}else if(v===9){l.t=n,l.u=c;var f=l.s;if(f){f.A.s=n;var s=f.w;s.length>0&&Rr(n,e,s,0,t,i,c)}}else l.t=n,l.u=c;if(a++,!(l=r[a])||(u=l.r)>i)return a}var g=e.$;if(g===4){for(var d=e.k;d.$===4;)d=d.k;return Rr(n,d,r,a,t+1,i,n.elm_event_node_ref)}for(var b=e.e,h=n.childNodes,_=0;_<b.length;_++){t++;var x=g===1?b[_]:b[_].b,A=t+(x.b||0);if(t<=u&&u<=A&&(a=Rr(h[_],x,r,a,t,A,c),!(l=r[a])||(u=l.r)>i))return a;t=A}return a}function Kl(n,e,r,a){return r.length===0?n:(Ql(n,e,r,a),Ka(n,r))}function Ka(n,e){for(var r=0;r<e.length;r++){var a=e[r],t=a.t,i=Df(t,a);t===n&&(n=i)}return n}function Df(n,e){switch(e.$){case 0:return Ff(n,e.s,e.u);case 4:return ko(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return Ka(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var i=e.s,a=0;a<i.i;a++)n.removeChild(n.childNodes[i.v]);return n;case 7:for(var i=e.s,r=i.e,a=i.v,t=n.childNodes[a];a<r.length;a++)n.insertBefore(Fe(r[a],e.u),t);return n;case 9:var i=e.s;if(!i)return n.parentNode.removeChild(n),n;var c=i.A;return typeof c.r!="undefined"&&n.parentNode.removeChild(n),c.s=Ka(n,i.w),n;case 8:return Vf(n,e);case 5:return e.s(n);default:Pr(10)}}function Ff(n,e,r){var a=n.parentNode,t=Fe(e,r);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),a&&t!==n&&a.replaceChild(t,n),t}function Vf(n,e){var r=e.s,a=Bf(r.y,e);n=Ka(n,r.w);for(var t=r.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Fe(l.z,e.u);n.insertBefore(u,n.childNodes[c.r])}return a&&gi(n,a),n}function Bf(n,e){if(!!n){for(var r=xe.createDocumentFragment(),a=0;a<n.length;a++){var t=n[a],i=t.A;gi(r,i.c===2?i.s:Fe(i.z,e.u))}return r}}function _i(n){if(n.nodeType===3)return zo(n.textContent);if(n.nodeType!==1)return zo("");for(var e=S,r=n.attributes,a=r.length;a--;){var t=r[a],i=t.name,c=t.value;e=he(o(Je,i,c),e)}for(var l=n.tagName.toLowerCase(),u=S,v=n.childNodes,a=v.length;a--;)u=he(_i(v[a]),u);return m(ie,l,e,u)}function Ef(n){for(var e=n.e,r=e.length,a=new Array(r),t=0;t<r;t++)a[t]=e[t].b;return{$:1,c:n.c,d:n.d,e:a,f:n.f,b:n.b}}var Rf=B(function(n,e,r,a){return pi(e,a,n.fs,n.f9,n.f1,function(t,i){var c=n.gc,l=a.node,u=_i(l);return nu(i,function(v){var s=c(v),f=Yl(u,s);l=Kl(l,u,f,t),u=s})})});B(function(n,e,r,a){return pi(e,a,n.fs,n.f9,n.f1,function(t,i){var c=n.c2&&n.c2(t),l=n.gc,u=xe.title,v=xe.body,s=_i(v);return nu(i,function(f){Qa=c;var g=l(f),d=ie("body")(S)(g.eU),b=Yl(s,d);v=Kl(v,s,b,t),s=d,Qa=0,u!==g.f6&&(xe.title=u=g.f6)})})});var nt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function nu(n,e){e(n);var r=0;function a(){r=r===1?0:(nt(a),e(n),1)}return function(t,i){n=t,i?(e(n),r===2&&(r=1)):(r===0&&nt(a),r=2)}}$(function(n,e){return o(Mi,ki,Le(function(){e&&history.go(e),n()}))});$(function(n,e){return o(Mi,ki,Le(function(){history.pushState({},"",e),n()}))});$(function(n,e){return o(Mi,ki,Le(function(){history.replaceState({},"",e),n()}))});var Wf={addEventListener:function(){},removeEventListener:function(){}},Nf=typeof window!="undefined"?window:Wf;w(function(n,e,r){return Ul(Le(function(a){function t(i){di(r(i))}return n.addEventListener(e,t,bi&&{passive:!0}),function(){n.removeEventListener(e,t)}}))});$(function(n,e){var r=Kn(n,e);return le(r)?U(r.a):J});function eu(n,e){return Le(function(r){nt(function(){var a=document.getElementById(n);r(a?cr(e(a)):Xs(cm(n)))})})}function Gf(n){return Le(function(e){nt(function(){e(cr(n()))})})}$(function(n,e){return eu(e,function(r){return r[n](),la})});$(function(n,e){return Gf(function(){return Nf.scroll(n,e),la})});w(function(n,e,r){return eu(n,function(a){return a.scrollLeft=e,a.scrollTop=r,la})});$(function(n,e){return n&e});$(function(n,e){return n|e});$(function(n,e){return n^e});$(function(n,e){return e<<n});$(function(n,e){return e>>n});$(function(n,e){return e>>>n});var Hf=$(function(n,e){var r="g";n.fD&&(r+="m"),n.eW&&(r+="i");try{return U(new RegExp(e,r))}catch{return J}});$(function(n,e){return e.match(n)!==null});var Uf=w(function(n,e,r){for(var a=[],t=0,i=r,c=e.lastIndex,l=-1,u;t++<n&&(u=e.exec(i))&&l!=e.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var f=u[v];s[--v]=f?U(f):J}a.push(L(Zu,u[0],u.index,t,p(s))),l=e.lastIndex}return e.lastIndex=c,p(a)});B(function(n,e,r,a){var t=0;function i(c){if(t++>=n)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?U(v):J}return r(L(Zu,c,arguments[arguments.length-2],t,p(u)))}return a.replace(e,i)});w(function(n,e,r){for(var a=r,t=[],i=e.lastIndex,c=e.lastIndex;n--;){var l=e.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=e.lastIndex}return t.push(a.slice(i)),e.lastIndex=c,p(t)});var kc=0;function Kr(n,e){for(;e.b;e=e.b)n(e.a)}function wi(n){for(var e=0;n.b;n=n.b)e++;return e}var If=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){setTimeout(n,1e3/60)},Of=xn(function(n,e,r,a,t){return{$:0,a:n,b:e,c:r,d:a,e:t}}),Jf=$(function(n,e){var r=n.blend;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.BLEND),r.enabled=!0),(r.a!==e.a||r.d!==e.d)&&(n.gl.blendEquationSeparate(e.a,e.d),r.a=e.a,r.d=e.d),(r.b!==e.b||r.c!==e.c||r.e!==e.e||r.f!==e.f)&&(n.gl.blendFuncSeparate(e.b,e.c,e.e,e.f),r.b=e.b,r.c=e.c,r.e=e.e,r.f=e.f),(r.g!==e.g||r.h!==e.h||r.i!==e.i||r.j!==e.j)&&(n.gl.blendColor(e.g,e.h,e.i,e.j),r.g=e.g,r.h=e.h,r.i=e.i,r.j=e.j)}),qf=$(function(n,e){var r=n.depthTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.DEPTH_TEST),r.enabled=!0),r.a!==e.a&&(n.gl.depthFunc(e.a),r.a=e.a),r.b!==e.b&&(n.gl.depthMask(e.b),r.b=e.b),(r.c!==e.c||r.d!==e.d)&&(n.gl.depthRange(e.c,e.d),r.c=e.c,r.d=e.d)}),Zf=$(function(n,e){var r=n.stencilTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.STENCIL_TEST),r.enabled=!0),(r.d!==e.d||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.FRONT,e.d,e.a,e.b),r.d=e.d),(r.e!==e.e||r.f!==e.f||r.g!==e.g)&&(n.gl.stencilOpSeparate(n.gl.FRONT,e.e,e.f,e.g),r.e=e.e,r.f=e.f,r.g=e.g),r.c!==e.c&&(n.gl.stencilMask(e.c),r.c=e.c),(r.h!==e.h||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.BACK,e.h,e.a,e.b),r.h=e.h,r.a=e.a,r.b=e.b),(r.i!==e.i||r.j!==e.j||r.k!==e.k)&&(n.gl.stencilOpSeparate(n.gl.BACK,e.i,e.j,e.k),r.i=e.i,r.j=e.j,r.k=e.k)}),Yf=$(function(n,e){var r=n.scissor;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SCISSOR_TEST),r.enabled=!0),(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.scissor(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),Xf=$(function(n,e){var r=n.colorMask;r.toggle=n.toggle,r.enabled=!0,(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.colorMask(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),Qf=$(function(n,e){var r=n.cullFace;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.CULL_FACE),r.enabled=!0),r.a!==e.a&&(n.gl.cullFace(e.a),r.a=e.a)}),Kf=$(function(n,e){var r=n.polygonOffset;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.POLYGON_OFFSET_FILL),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.polygonOffset(e.a,e.b),r.a=e.a,r.b=e.b)}),nd=$(function(n,e){var r=n.sampleCoverage;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SAMPLE_COVERAGE),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.sampleCoverage(e.a,e.b),r.a=e.a,r.b=e.b)}),ed=function(n){var e=n.sampleAlphaToCoverage;e.toggle=n.toggle,e.enabled||(n.gl.enable(n.gl.SAMPLE_ALPHA_TO_COVERAGE),e.enabled=!0)},rd=function(n){n.blend.enabled&&(n.gl.disable(n.gl.BLEND),n.blend.enabled=!1)},ad=function(n){n.depthTest.enabled&&(n.gl.disable(n.gl.DEPTH_TEST),n.depthTest.enabled=!1)},td=function(n){n.stencilTest.enabled&&(n.gl.disable(n.gl.STENCIL_TEST),n.stencilTest.enabled=!1)},ru=function(n){n.scissor.enabled&&(n.gl.disable(n.gl.SCISSOR_TEST),n.scissor.enabled=!1)},au=function(n){var e=n.colorMask;(!e.a||!e.b||!e.c||!e.d)&&(n.gl.colorMask(!0,!0,!0,!0),e.a=!0,e.b=!0,e.c=!0,e.d=!0)},od=function(n){n.gl.disable(n.gl.CULL_FACE)},id=function(n){n.gl.disable(n.gl.POLYGON_OFFSET_FILL)},cd=function(n){n.gl.disable(n.gl.SAMPLE_COVERAGE)},ld=function(n){n.gl.disable(n.gl.SAMPLE_ALPHA_TO_COVERAGE)},Tc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],ud=[rd,ad,td,ru,au,od,id,cd,ld];function Mc(n,e,r){var a=n.createShader(r);return n.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+e),n.compileShader(a),a}function $d(n,e,r){var a=n.createProgram();if(n.attachShader(a,e),n.attachShader(a,r),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw"Link failed: "+n.getProgramInfoLog(a)+`
vs info-log: `+n.getShaderInfoLog(e)+`
fs info-log: `+n.getShaderInfoLog(r);return a}function tu(n,e){switch(e){case n.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:n.FLOAT};case n.INT:return{size:1,arraySize:1,type:Int32Array,baseType:n.INT}}}function vd(n,e,r,a){for(var t=r.a.du,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,_,x){var A;if(t===1)for(A=0;A<b;A++)d[h++]=b===1?_[x]:_[x][A];else i.forEach(function(P){for(A=0;A<b;A++)d[h++]=b===1?_[P][x]:_[P][x][A]})}var u=tu(n,e.type);if(u===void 0)throw new Error("No info available for: "+e.type);var v=0,s=u.size*u.arraySize*t,f=new u.type(wi(r.b)*s);Kr(function(d){l(f,u.size*u.arraySize,v,d,a[e.name]||e.name),v+=s},r.b);var g=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,f,n.STATIC_DRAW),g}function sd(n,e){if(e.a.dD>0){var r=n.createBuffer(),a=fd(e.c,e.a.dD);return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),n.bufferData(n.ELEMENT_ARRAY_BUFFER,a,n.STATIC_DRAW),{numIndices:a.length,indexBuffer:r,buffers:{}}}else return{numIndices:e.a.du*wi(e.b),indexBuffer:null,buffers:{}}}function fd(n,e){var r=new Uint32Array(wi(n)*e),a=0,t;return Kr(function(i){if(e===1)r[a++]=i;else for(t=0;t<e;t++)r[a++]=i[String.fromCharCode(97+t)]},n),r}function jc(n,e){return n+"#"+e}var ou=$(function(n,e){var r=n.f,a=r.gl;if(!a)return e;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),r.depthTest.b||(a.depthMask(!0),r.depthTest.b=!0),r.stencilTest.c!==r.STENCIL_WRITEMASK&&(a.stencilMask(r.STENCIL_WRITEMASK),r.stencilTest.c=r.STENCIL_WRITEMASK),ru(r),au(r),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=jc(i.b.id,i.c.id),l=r.programs[c]),!l){var v;i.b.id?v=r.shaders[i.b.id]:i.b.id=kc++,v||(v=Mc(a,i.b.src,a.VERTEX_SHADER),r.shaders[i.b.id]=v);var s;i.c.id?s=r.shaders[i.c.id]:i.c.id=kc++,s||(s=Mc(a,i.c.src,a.FRAGMENT_SHADER),r.shaders[i.c.id]=s);var f=$d(a,v,s);l={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=dd(a,n,l,Object.assign({},i.b.uniforms,i.c.uniforms));var g=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var d=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=jc(i.b.id,i.c.id),r.programs[c]=l}r.lastProgId!==c&&(a.useProgram(l.glProgram),r.lastProgId=c),md(l.uniformSetters,i.e);var h=r.buffers.get(i.d);for(h||(h=sd(a,i.d),r.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=vd(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var _=tu(a,d.type);if(_.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,_.size,_.baseType,!1,0,0);else for(var x=_.size*4,A=x*_.arraySize,P=0;P<_.arraySize;P++)a.enableVertexAttribArray(b+P),a.vertexAttribPointer(b+P,_.size,_.baseType,!1,A,x*P)}for(r.toggle=!r.toggle,Kr(Og(r),i.a),u=0;u<Tc.length;u++){var D=r[Tc[u]];D.toggle!==r.toggle&&D.enabled&&(ud[u](r),D.enabled=!1,D.toggle=r.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.ee,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ee,0,h.numIndices)}}return Kr(t,n.g),e});function dd(n,e,r,a){var t=r.glProgram,i=r.currentUniforms,c=0,l=e.f;function u(d,b){var h=b.name,_=n.getUniformLocation(d,h);switch(b.type){case n.INT:return function(A){i[h]!==A&&(n.uniform1i(_,A),i[h]=A)};case n.FLOAT:return function(A){i[h]!==A&&(n.uniform1f(_,A),i[h]=A)};case n.FLOAT_VEC2:return function(A){i[h]!==A&&(n.uniform2f(_,A[0],A[1]),i[h]=A)};case n.FLOAT_VEC3:return function(A){i[h]!==A&&(n.uniform3f(_,A[0],A[1],A[2]),i[h]=A)};case n.FLOAT_VEC4:return function(A){i[h]!==A&&(n.uniform4f(_,A[0],A[1],A[2],A[3]),i[h]=A)};case n.FLOAT_MAT4:return function(A){i[h]!==A&&(n.uniformMatrix4fv(_,!1,new Float32Array(A)),i[h]=A)};case n.SAMPLER_2D:var x=c++;return function(A){n.activeTexture(n.TEXTURE0+x);var P=l.textures.get(A);P||(P=A.e1(n),l.textures.set(A,P)),n.bindTexture(n.TEXTURE_2D,P),i[h]!==A&&(n.uniform1i(_,x),i[h]=A)};case n.BOOL:return function(A){i[h]!==A&&(n.uniform1i(_,A),i[h]=A)};default:return function(){}}}for(var v={},s=n.getProgramParameter(t,n.ACTIVE_UNIFORMS),f=0;f<s;f++){var g=n.getActiveUniform(t,f);v[a[g.name]||g.name]=u(t,g)}return v}function md(n,e){Object.keys(e).forEach(function(r){var a=n[r];a&&a(e[r])})}var pd=w(function(n,e,r){return gf(e,{g:r,f:{},h:n},yd,xd)}),gd=$(function(n,e){n.contextAttributes.alpha=!0,n.contextAttributes.premultipliedAlpha=e.a}),hd=$(function(n,e){n.contextAttributes.depth=!0,n.sceneSettings.push(function(r){r.clearDepth(e.a)})}),bd=$(function(n,e){n.contextAttributes.stencil=!0,n.sceneSettings.push(function(r){r.clearStencil(e.a)})}),Ad=$(function(n,e){n.contextAttributes.antialias=!0}),_d=$(function(n,e){n.sceneSettings.push(function(r){r.clearColor(e.a,e.b,e.c,e.d)})}),wd=$(function(n,e){n.contextAttributes.preserveDrawingBuffer=!0});function yd(n){var e={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Kr(function(t){return o(Ig,e,t)},n.h);var r=xe.createElement("canvas"),a=r.getContext&&(r.getContext("webgl",e.contextAttributes)||r.getContext("experimental-webgl",e.contextAttributes));return a&&typeof WeakMap!="undefined"?(e.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),n.f.gl=a,n.f.toggle=!1,n.f.blend={enabled:!1,toggle:!1},n.f.depthTest={enabled:!1,toggle:!1},n.f.stencilTest={enabled:!1,toggle:!1},n.f.scissor={enabled:!1,toggle:!1},n.f.colorMask={enabled:!1,toggle:!1},n.f.cullFace={enabled:!1,toggle:!1},n.f.polygonOffset={enabled:!1,toggle:!1},n.f.sampleCoverage={enabled:!1,toggle:!1},n.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},n.f.shaders=[],n.f.programs={},n.f.lastProgId=null,n.f.buffers=new WeakMap,n.f.textures=new WeakMap,n.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),If(function(){return o(ou,n,r)})):(r=xe.createElement("div"),r.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),r}function xd(n,e){return e.f=n.f,ou(e)}var Sd=$(function(n,e){return new Float64Array([n,e])});$(function(n,e){return new Float64Array([n,e[1]])});$(function(n,e){return new Float64Array([e[0],n])});$(function(n,e){var r=new Float64Array(2);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r});$(function(n,e){var r=new Float64Array(2);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r});$(function(n,e){var r=new Float64Array(2);r[0]=n[0]-e[0],r[1]=n[1]-e[1];var a=1/Cd(r);return r[0]=r[0]*a,r[1]=r[1]*a,r});function Cd(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1];return Math.sqrt(r*r+a*a)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1];return r*r+a*a});$(function(n,e){var r=new Float64Array(2);return r[0]=e[0]*n,r[1]=e[1]*n,r});$(function(n,e){return n[0]*e[0]+n[1]*e[1]});var yi=new Float64Array(3),Dc=new Float64Array(3),Fc=new Float64Array(3),Pd=w(function(n,e,r){return new Float64Array([n,e,r])}),Ld=function(n){return n[0]},zd=function(n){return n[1]},kd=function(n){return n[2]};$(function(n,e){return new Float64Array([n,e[1],e[2]])});$(function(n,e){return new Float64Array([e[0],n,e[2]])});$(function(n,e){return new Float64Array([e[0],e[1],n])});var Td=function(n){return new Float64Array([n.gh,n.gl,n.dj])};$(function(n,e){var r=new Float64Array(3);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r});function iu(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r}$(iu);function cu(n,e,r){return r===void 0&&(r=new Float64Array(3)),et(iu(n,e,r),r)}$(cu);function lu(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2];return Math.sqrt(r*r+a*a+t*t)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2];return r*r+a*a+t*t});function et(n,e){e===void 0&&(e=new Float64Array(3));var r=1/lu(n);return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e}var Md=$(function(n,e){return new Float64Array([e[0]*n,e[1]*n,e[2]*n])}),Wr=function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]};$(Wr);function To(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[1]*e[2]-n[2]*e[1],r[1]=n[2]*e[0]-n[0]*e[2],r[2]=n[0]*e[1]-n[1]*e[0],r}$(To);$(function(n,e){var r,a=yi,t=new Float64Array(3);return a[0]=n[3],a[1]=n[7],a[2]=n[11],r=Wr(e,a)+n[15],a[0]=n[0],a[1]=n[4],a[2]=n[8],t[0]=(Wr(e,a)+n[12])/r,a[0]=n[1],a[1]=n[5],a[2]=n[9],t[1]=(Wr(e,a)+n[13])/r,a[0]=n[2],a[1]=n[6],a[2]=n[10],t[2]=(Wr(e,a)+n[14])/r,t});var jd=B(function(n,e,r,a){return new Float64Array([n,e,r,a])});$(function(n,e){return new Float64Array([n,e[1],e[2],e[3]])});$(function(n,e){return new Float64Array([e[0],n,e[2],e[3]])});$(function(n,e){return new Float64Array([e[0],e[1],n,e[3]])});$(function(n,e){return new Float64Array([e[0],e[1],e[2],n])});var Dd=function(n){return{gh:n[0],gl:n[1],dj:n[2],eK:n[3]}},Fd=function(n){return new Float64Array([n.gh,n.gl,n.dj,n.eK])};$(function(n,e){var r=new Float64Array(4);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r[3]=n[3]+e[3],r});$(function(n,e){var r=new Float64Array(4);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3],r});$(function(n,e){var r=new Float64Array(4);r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3];var a=1/Vd(r);return r[0]=r[0]*a,r[1]=r[1]*a,r[2]=r[2]*a,r[3]=r[3]*a,r});function Vd(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]+n[3]*n[3])}$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2],i=n[3]-e[3];return Math.sqrt(r*r+a*a+t*t+i*i)});$(function(n,e){var r=n[0]-e[0],a=n[1]-e[1],t=n[2]-e[2],i=n[3]-e[3];return r*r+a*a+t*t+i*i});$(function(n,e){var r=new Float64Array(4);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r});$(function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]});var Bd=new Float64Array(16),Ed=new Float64Array(16),Rd=function(n){var e=new Float64Array(16);return e[0]=n.dS,e[1]=n.dW,e[2]=n.d_,e[3]=n.d2,e[4]=n.dT,e[5]=n.dX,e[6]=n.d$,e[7]=n.d3,e[8]=n.dU,e[9]=n.dY,e[10]=n.d0,e[11]=n.d4,e[12]=n.dV,e[13]=n.dZ,e[14]=n.d1,e[15]=n.d5,e},Wd=function(n){return{dS:n[0],dW:n[1],d_:n[2],d2:n[3],dT:n[4],dX:n[5],d$:n[6],d3:n[7],dU:n[8],dY:n[9],d0:n[10],d4:n[11],dV:n[12],dZ:n[13],d1:n[14],d5:n[15]}};function uu(n,e,r,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-r),c[6]=0,c[7]=0,c[8]=(e+n)/(e-n),c[9]=(a+r)/(a-r),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Yn(uu);B(function(n,e,r,a){var t=r*Math.tan(n*Math.PI/360),i=-t,c=i*e,l=t*e;return uu(c,l,i,t,r,a)});function $u(n,e,r,a,t,i){var c=new Float64Array(16);return c[0]=2/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-r),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(e+n)/(e-n),c[13]=-(a+r)/(a-r),c[14]=-(i+t)/(i-t),c[15]=1,c}Yn($u);B(function(n,e,r,a){return $u(n,e,r,a,-1,1)});function vu(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=n[3],l=n[4],u=n[5],v=n[6],s=n[7],f=n[8],g=n[9],d=n[10],b=n[11],h=n[12],_=n[13],x=n[14],A=n[15],P=e[0],D=e[1],I=e[2],G=e[3],N=e[4],H=e[5],O=e[6],E=e[7],nn=e[8],an=e[9],gn=e[10],An=e[11],fn=e[12],Sn=e[13],Hn=e[14],En=e[15];return r[0]=a*P+l*D+f*I+h*G,r[1]=t*P+u*D+g*I+_*G,r[2]=i*P+v*D+d*I+x*G,r[3]=c*P+s*D+b*I+A*G,r[4]=a*N+l*H+f*O+h*E,r[5]=t*N+u*H+g*O+_*E,r[6]=i*N+v*H+d*O+x*E,r[7]=c*N+s*H+b*O+A*E,r[8]=a*nn+l*an+f*gn+h*An,r[9]=t*nn+u*an+g*gn+_*An,r[10]=i*nn+v*an+d*gn+x*An,r[11]=c*nn+s*an+b*gn+A*An,r[12]=a*fn+l*Sn+f*Hn+h*En,r[13]=t*fn+u*Sn+g*Hn+_*En,r[14]=i*fn+v*Sn+d*Hn+x*En,r[15]=c*fn+s*Sn+b*Hn+A*En,r}$(vu);$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=n[4],l=n[5],u=n[6],v=n[8],s=n[9],f=n[10],g=n[12],d=n[13],b=n[14],h=e[0],_=e[1],x=e[2],A=e[4],P=e[5],D=e[6],I=e[8],G=e[9],N=e[10],H=e[12],O=e[13],E=e[14];return r[0]=a*h+c*_+v*x,r[1]=t*h+l*_+s*x,r[2]=i*h+u*_+f*x,r[3]=0,r[4]=a*A+c*P+v*D,r[5]=t*A+l*P+s*D,r[6]=i*A+u*P+f*D,r[7]=0,r[8]=a*I+c*G+v*N,r[9]=t*I+l*G+s*N,r[10]=i*I+u*G+f*N,r[11]=0,r[12]=a*H+c*O+v*E+g,r[13]=t*H+l*O+s*E+d,r[14]=i*H+u*O+f*E+b,r[15]=1,r});$(function(n,e){var r=new Float64Array(16);e=et(e,yi);var a=e[0],t=e[1],i=e[2],c=Math.cos(n),l=1-c,u=Math.sin(n);return r[0]=a*a*l+c,r[1]=t*a*l+i*u,r[2]=i*a*l-t*u,r[3]=0,r[4]=a*t*l-i*u,r[5]=t*t*l+c,r[6]=t*i*l+a*u,r[7]=0,r[8]=a*i*l+t*u,r[9]=t*i*l-a*u,r[10]=i*i*l+c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r});w(function(n,e,r){var a=new Float64Array(16),t=1/lu(e),i=e[0]*t,c=e[1]*t,l=e[2]*t,u=Math.cos(n),v=1-u,s=Math.sin(n),f=i*s,g=c*s,d=l*s,b=i*c*v,h=i*l*v,_=c*l*v,x=i*i*v+u,A=b+d,P=h-g,D=b-d,I=c*c*v+u,G=_+f,N=h+g,H=_-f,O=l*l*v+u,E=r[0],nn=r[1],an=r[2],gn=r[3],An=r[4],fn=r[5],Sn=r[6],Hn=r[7],En=r[8],ke=r[9],Te=r[10],Kt=r[11],Fv=r[12],Vv=r[13],Bv=r[14],Ev=r[15];return a[0]=E*x+An*A+En*P,a[1]=nn*x+fn*A+ke*P,a[2]=an*x+Sn*A+Te*P,a[3]=gn*x+Hn*A+Kt*P,a[4]=E*D+An*I+En*G,a[5]=nn*D+fn*I+ke*G,a[6]=an*D+Sn*I+Te*G,a[7]=gn*D+Hn*I+Kt*G,a[8]=E*N+An*H+En*O,a[9]=nn*N+fn*H+ke*O,a[10]=an*N+Sn*H+Te*O,a[11]=gn*N+Hn*H+Kt*O,a[12]=Fv,a[13]=Vv,a[14]=Bv,a[15]=Ev,a});function Nd(n,e,r){var a=new Float64Array(16);return a[0]=n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}w(Nd);B(function(n,e,r,a){var t=new Float64Array(16);return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*e,t[5]=a[5]*e,t[6]=a[6]*e,t[7]=a[7]*e,t[8]=a[8]*r,t[9]=a[9]*r,t[10]=a[10]*r,t[11]=a[11]*r,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2];return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r[4]=e[4]*t,r[5]=e[5]*t,r[6]=e[6]*t,r[7]=e[7]*t,r[8]=e[8]*i,r[9]=e[9]*i,r[10]=e[10]*i,r[11]=e[11]*i,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r});function Gd(n,e,r){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=n,a[13]=e,a[14]=r,a[15]=1,a}w(Gd);B(function(n,e,r,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],f=a[6],g=a[7],d=a[8],b=a[9],h=a[10],_=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=f,t[7]=g,t[8]=d,t[9]=b,t[10]=h,t[11]=_,t[12]=i*n+v*e+d*r+a[12],t[13]=c*n+s*e+b*r+a[13],t[14]=l*n+f*e+h*r+a[14],t[15]=u*n+g*e+_*r+a[15],t});$(function(n,e){var r=new Float64Array(16),a=n[0],t=n[1],i=n[2],c=e[0],l=e[1],u=e[2],v=e[3],s=e[4],f=e[5],g=e[6],d=e[7],b=e[8],h=e[9],_=e[10],x=e[11];return r[0]=c,r[1]=l,r[2]=u,r[3]=v,r[4]=s,r[5]=f,r[6]=g,r[7]=d,r[8]=b,r[9]=h,r[10]=_,r[11]=x,r[12]=c*a+s*t+b*i+e[12],r[13]=l*a+f*t+h*i+e[13],r[14]=u*a+g*t+_*i+e[14],r[15]=v*a+d*t+x*i+e[15],r});w(function(n,e,r){var a=cu(n,e,yi),t=et(To(r,a,Dc),Dc),i=et(To(a,t,Fc),Fc),c=Bd,l=Ed;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-n[0],l[13]=-n[1],l[14]=-n[2],l[15]=1,vu(c,l)});w(function(n,e,r){var a=new Float64Array(16);return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=0,a[4]=e[0],a[5]=e[1],a[6]=e[2],a[7]=0,a[8]=r[0],a[9]=r[1],a[10]=r[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=Yv,La=Ov,su=w(function(n,e,r){var a=r.c,t=r.d,i=$(function(c,l){if(c.$){var v=c.a;return m(La,n,l,v)}else{var u=c.a;return m(La,i,l,u)}});return m(La,i,m(La,n,e,t),a)}),xt=w(function(n,e,r){n:for(;;){if(r.$===-2)return e;var a=r.b,t=r.c,i=r.d,c=r.e,l=n,u=m(n,a,t,m(xt,n,e,c)),v=i;n=l,e=u,r=v;continue n}}),Vc=function(n){return m(xt,w(function(e,r,a){return o(k,y(e,r),a)}),S,n)},Hd=function(n){return m(xt,w(function(e,r,a){return o(k,e,a)}),S,n)},Ud=function(n){var e=n;return Hd(e)},fu=1,Id=2,du=0,Fn=function(n){return{$:1,a:n}},xi=$(function(n,e){return{$:3,a:n,b:e}}),Bc=$(function(n,e){return{$:0,a:n,b:e}}),mu=$(function(n,e){return{$:1,a:n,b:e}}),sn=function(n){return{$:0,a:n}},Od=function(n){return{$:2,a:n}},U=function(n){return{$:0,a:n}},J={$:1},Jd=ws,pu=Os,yn=Gl,er=$(function(n,e){return o(bs,n,wt(e))}),Si=$(function(n,e){return p(o(hs,n,e))}),gu=function(n){return o(er,`
    `,o(Si,`
`,n))},Ae=w(function(n,e,r){n:for(;;)if(r.b){var a=r.a,t=r.b,i=n,c=o(n,a,e),l=t;n=i,e=c,r=l;continue n}else return e}),oe=function(n){return m(Ae,$(function(e,r){return r+1}),0,n)},hu=Xv,qd=w(function(n,e,r){n:for(;;)if(Y(n,e)<1){var a=n,t=e-1,i=o(k,e,r);n=a,e=t,r=i;continue n}else return r}),yr=$(function(n,e){return m(qd,n,e,S)}),St=$(function(n,e){return m(hu,n,o(yr,0,oe(e)-1),e)}),de=zs,bu=function(n){var e=de(n);return 97<=e&&e<=122},Au=function(n){var e=de(n);return e<=90&&65<=e},Zd=function(n){return bu(n)||Au(n)},Yd=function(n){var e=de(n);return e<=57&&48<=e},Xd=function(n){return bu(n)||Au(n)||Yd(n)},Tn=function(n){return m(Ae,k,S,n)},Lr=ds,Qd=$(function(n,e){return`

(`+(yn(n+1)+(") "+gu(Kd(e))))}),Kd=function(n){return o(nm,n,S)},nm=$(function(n,e){n:for(;;)switch(n.$){case 0:var r=n.a,c=n.b,a=function(){var h=Lr(r);if(h.$===1)return!1;var _=h.a,x=_.a,A=_.b;return Zd(x)&&o(Jd,Xd,A)}(),t=a?"."+r:"['"+(r+"']"),u=c,v=o(k,t,e);n=u,e=v;continue n;case 1:var i=n.a,c=n.b,l="["+(yn(i)+"]"),u=c,v=o(k,l,e);n=u,e=v;continue n;case 2:var s=n.a;if(s.b)if(s.b.b){var f=function(){return e.b?"The Json.Decode.oneOf at json"+o(er,"",Tn(e)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(yn(oe(s))+" ways:"));return o(er,`

`,o(k,b,o(St,Qd,s)))}else{var c=s.a,u=c,v=e;n=u,e=v;continue n}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+o(er,"",Tn(e)):"!"}();default:var g=n.a,d=n.b,b=function(){return e.b?"Problem with the value at json"+(o(er,"",Tn(e))+`:

    `):`Problem with the given value:

`}();return b+(gu(o(pu,4,d))+(`

`+g))}}),In=32,Mo=B(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),jo=Nv,Ci=cs,Pi=$(function(n,e){return wc(e)/wc(n)}),Nr=os,na=Ci(o(Pi,2,In)),_u=L(Mo,0,na,jo,jo),wu=Hv,yu=function(n){return{$:1,a:n}};$(function(n,e){return n(e)});$(function(n,e){return e(n)});var Ct=qv,xu=ls,Do=Gv,On=$(function(n,e){return Y(n,e)>0?n:e}),em=function(n){return{$:0,a:n}},Li=Uv,rm=$(function(n,e){n:for(;;){var r=o(Li,In,n),a=r.a,t=r.b,i=o(k,em(a),e);if(t.b){var c=t,l=i;n=c,e=l;continue n}else return Tn(i)}}),Fo=function(n){var e=n.a;return e},am=$(function(n,e){n:for(;;){var r=Ci(e/In);if(r===1)return o(Li,In,n).a;var a=o(rm,n,S),t=r;n=a,e=t;continue n}}),Su=$(function(n,e){if(e.p){var r=e.p*In,a=xu(o(Pi,In,r-1)),t=n?Tn(e.D):e.D,i=o(am,t,e.p);return L(Mo,Do(e.t)+r,o(On,5,a*na),i,e.t)}else return L(Mo,Do(e.t),na,jo,e.t)}),tm=xn(function(n,e,r,a,t){n:for(;;){if(e<0)return o(Su,!1,{D:a,p:r/In|0,t});var i=yu(m(wu,In,e,n)),c=n,l=e-In,u=r,v=o(k,i,a),s=t;n=c,e=l,r=u,a=v,t=s;continue n}}),om=$(function(n,e){if(n<=0)return _u;var r=n%In,a=m(wu,r,n-r,e),t=n-r-In;return C(tm,e,t,n,S,a)}),le=function(n){return!n.$},j=Rs,en=Ds,z=Es,_n=Fs,im=function(n){return{$:2,a:n}},Cu=$(function(n,e){return n}),Pu=$(function(n,e){return{V:e.V,e$:n,ch:e.ch,e8:e.e8,dJ:e.dJ,cV:e.cV,b5:e.b5,gd:e.gd}}),rt=Ws,ua=Ns,dn=Ts,zi=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Nn=function(n){return n},cm=Nn,Ec=Yn(function(n,e,r,a,t,i){return{dz:i,dB:e,ej:a,en:r,er:n,es:t}}),lm=ys,rr=ms,gr=As,$a=$(function(n,e){return n<1?e:m(gr,n,rr(e),e)}),Pt=Ss,Lt=function(n){return n===""},zt=$(function(n,e){return n<1?"":m(gr,0,n,e)}),Lu=Cs,Rc=xn(function(n,e,r,a,t){if(Lt(t)||o(lm,"@",t))return J;var i=o(Pt,":",t);if(i.b){if(i.b.b)return J;var c=i.a,l=Lu(o($a,c+1,t));if(l.$===1)return J;var u=l;return U(mn(Ec,n,o(zt,c,t),u,e,r,a))}else return U(mn(Ec,n,t,J,e,r,a))}),Wc=B(function(n,e,r,a){if(Lt(a))return J;var t=o(Pt,"/",a);if(t.b){var i=t.a;return C(Rc,n,o($a,i,a),e,r,o(zt,i,a))}else return C(Rc,n,"/",e,r,a)}),Nc=w(function(n,e,r){if(Lt(r))return J;var a=o(Pt,"?",r);if(a.b){var t=a.a;return L(Wc,n,U(o($a,t+1,r)),e,o(zt,t,r))}else return L(Wc,n,J,e,r)});$(function(n,e){if(Lt(e))return J;var r=o(Pt,"#",e);if(r.b){var a=r.a;return m(Nc,n,U(o($a,a+1,e)),o(zt,a,e))}else return m(Nc,n,J,e)});var um=xs,ki=function(n){},va=cr,$m=va(0),zu=B(function(n,e,r,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,f=v.b,g=r>500?m(Ae,n,e,Tn(f)):L(zu,n,e,r+1,f);return o(n,t,o(n,c,o(n,u,o(n,s,g))))}else return o(n,t,o(n,c,o(n,u,e)))}else return o(n,t,o(n,c,e))}else return o(n,t,e)}else return e}),ze=w(function(n,e,r){return L(zu,n,e,0,r)}),X=$(function(n,e){return m(ze,$(function(r,a){return o(k,n(r),a)}),S,e)}),at=Lo,Ti=$(function(n,e){return o(at,function(r){return va(n(r))},e)}),vm=w(function(n,e,r){return o(at,function(a){return o(at,function(t){return va(o(n,a,t))},r)},e)}),sm=function(n){return m(ze,vm(k),va(S),n)},fm=of,dm=$(function(n,e){var r=e;return Ul(o(at,fm(n),r))}),mm=w(function(n,e,r){return o(Ti,function(a){return 0},sm(o(X,dm(n),e)))}),pm=w(function(n,e,r){return va(0)}),gm=$(function(n,e){var r=e;return o(Ti,n,r)});fe.Task=af($m,mm,pm,gm);var hm=Ol("Task"),Mi=$(function(n,e){return hm(o(Ti,n,e))}),bm=Rf,Am=ss,tt={$:1},ku=function(n){return{$:2,a:n}},kt={$:0},re=$(function(n,e){return{$:0,a:n,b:e}}),K=w(function(n,e,r){return e(n(r))}),zr=function(n){var e=n.b.n;return e.a},_m=function(n){var e=n.a,r=n.b.X,a=n.b.n,t=n.b.af;if(t.b){var i=t.a,c=t.b;return U(o(re,e,{n:i,af:c,X:o(k,a,r)}))}else return J},Tu=function(n){var e=n.b;return o(re,kt,e)},pn=$(function(n,e){if(e.$)return n;var r=e.a;return r}),wm=w(function(n,e,r){var a=r.a,t=r.b;switch(a.$){case 1:return e.cV.cj?Tu(r):r;case 2:var i=a.a.c7;return(Y(i+e.e8,zr(r).V)>0?o(K,_m,pn(o(re,tt,t))):Nn)(o(re,ku({c7:i+e.e8}),t));default:var c=t.n,l=c.a,u=c.b,v=o(Pu,l.e$,W(e,{V:l.V+e.e8})),s=o(n,v,u);return o(re,kt,{n:y(v,s),af:S,X:o(k,t.n,t.X)})}}),ji=$(function(n,e){n:for(;;){if(n<=0)return e;if(e.b){e.a;var r=e.b,a=n-1,t=r;n=a,e=t;continue n}else return e}}),ym=w(function(n,e,r){n:for(;;){if(n<=0)return r;if(e.b){var a=e.a,t=e.b,i=n-1,c=t,l=o(k,a,r);n=i,e=c,r=l;continue n}else return r}}),xm=$(function(n,e){return Tn(m(ym,n,e,S))}),Mu=w(function(n,e,r){if(e<=0)return S;{var a=y(e,r);n:for(;;){e:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break n;case 2:var t=a.b,A=t.a,i=t.b,c=i.a;return p([A,c]);case 3:if(a.b.b.b.b){var l=a.b,A=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return p([A,c,s])}else break e;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,A=f.a,g=f.b,c=g.a,d=g.b,s=d.a,b=d.b,h=b.a,_=b.b;return n>1e3?o(k,A,o(k,c,o(k,s,o(k,h,o(xm,e-4,_))))):o(k,A,o(k,c,o(k,s,o(k,h,m(Mu,n+1,e-4,_)))))}else break e}else{if(a.a===1)break n;break e}else return r;return r}var x=a.b,A=x.a;return p([A])}}),ju=$(function(n,e){return m(Mu,0,n,e)}),Sm=$(function(n,e){var r=e.b.X,a=e.b.n,t=e.b.af,i=un(Tn(r),un(p([a]),t)),c=o(ju,n,i),l=o(ji,n,i);if(l.b){var u=l.a,v=l.b;return o(re,tt,{n:u,af:v,X:Tn(c)})}else{var s=Tn(c);if(s.b){var f=s.a,g=s.b;return o(re,tt,{n:f,af:S,X:g})}else return e}}),Cm=function(n){var e=n.b;return o(re,tt,e)},Pm=function(n){var e=n.b;return o(re,ku({c7:zr(n).V}),e)},Lm=$(function(n,e){switch(n.$){case 1:return Cm(e);case 2:return Tu(e);case 3:return Pm(e);default:var r=n.a;return o(Sm,r,e)}}),Du=$(function(n,e){var r=e.a,a=e.b;return y(n(r),a)}),zm=$(function(n,e){return W(e,{aA:n(e.aA)})}),km=function(n){return{$:3,a:n}},Fu=function(n){return{$:2,a:n}},Vu=$(function(n,e){return{$:0,a:n,b:e}}),Tm=$(function(n,e){return{$:1,a:n,b:e}}),zn=$(function(n,e){if(e.$)return J;var r=e.a;return U(n(r))}),Q=function(n){return n<0?-n:n},Di=Ps,Mm=w(function(n,e,r){return o(pn,0/0,Di(o(n,e,r)))}),Tt=$(function(n,e){n:for(;;)if(e.b){var r=e.a,a=e.b;if(n(r))return!0;var t=n,i=a;n=t,e=i;continue n}else return!1}),jm=gs,Bu=function(n){return m(jm,k,S,n)},Dm=$(function(n,e){var r=o(Tt,function(a){return a!=="0"&&a!=="."},Bu(e));return un(n&&r?"-":"",e)}),Pn=Gl,Vo=fs,Eu=ks,Ru=function(n){var e=n.a,r=n.b;if(e==="9"){var a=Lr(r);if(a.$===1)return"01";var t=a.a;return o(Vo,"0",Ru(t))}else{var i=de(e);return i>=48&&i<57?o(Vo,Eu(i+1),r):"0"}},Bo=is,Fm=vs,Mt=function(n){return o(Vo,n,"")},Wu=w(function(n,e,r){return n<=0?r:m(Wu,n>>1,un(e,e),n&1?un(r,e):r)}),ea=$(function(n,e){return m(Wu,n,e,"")}),Eo=w(function(n,e,r){return un(r,o(ea,n-rr(r),Mt(e)))}),Ro=ps,Nu=function(n){var e=o(Si,".",n);if(e.b)if(e.b.b){var r=e.a,a=e.b,t=a.a;return y(r,t)}else{var r=e.a;return y(r,"0")}else return y("0","0")},Vm=function(n){var e=o(Si,"e",Pn(Q(n)));if(e.b)if(e.b.b){var r=e.a,a=e.b,t=a.a,i=o(pn,0,Lu(o(um,"+",t)?o($a,1,t):t)),c=Nu(r),l=c.a,u=c.b,v=un(l,u),s=i<0?o(pn,"0",o(zn,function(f){var g=f.a,d=f.b;return g+("."+d)},o(zn,Du(Mt),Lr(un(o(ea,Q(i),"0"),v))))):m(Eo,i+1,"0",v);return un(n<0?"-":"",s)}else{var r=e.a;return un(n<0?"-":"",r)}else return""},Bm=w(function(n,e,r){if(Bo(r)||Fm(r))return Pn(r);var a=r<0,t=Nu(Vm(Q(r))),i=t.a,c=t.b,l=rr(i)+e,u=un(o(ea,-l+1,"0"),m(Eo,l,"0",un(i,c))),v=rr(u),s=o(On,1,l),f=o(n,a,m(gr,s,v,u)),g=m(gr,0,s,u),d=f?Ro(o(pn,"1",o(zn,Ru,Lr(Ro(g))))):g,b=rr(d),h=d==="0"?d:e<=0?un(d,o(ea,Q(e),"0")):Y(e,rr(c))<0?m(gr,0,b-e,d)+("."+m(gr,b-e,b,d)):un(i+".",m(Eo,e,"0",c));return o(Dm,a,h)}),Gu=Bm($(function(n,e){var r=Lr(e);if(r.$===1)return!1;if(r.a.a==="5")return r.a.b===""?(r.a,!n):(r.a,!0);var a=r.a,t=a.a;return function(i){return i>53&&n||i>=53&&!n}(de(t))})),Em=Mm(Gu),Rm=w(function(n,e,r){var a=o(Pi,10,Q(e-n)),t=a<0?3:a<1?2:a<2?1:0;return o(Em,t,r)}),Hu=Zv,sa=$(function(n,e){n:for(;;){if(e.$===-2)return J;var r=e.b,a=e.c,t=e.d,i=e.e,c=o(Hu,n,r);switch(c){case 0:var l=n,u=t;n=l,e=u;continue n;case 1:return U(a);default:var l=n,u=i;n=l,e=u;continue n}}}),Z=xn(function(n,e,r,a,t){return{$:-1,a:n,b:e,c:r,d:a,e:t}}),be={$:-2},xr=xn(function(n,e,r,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,f=a.d,g=a.e;return C(Z,0,e,r,C(Z,1,v,s,f,g),C(Z,1,i,c,l,u))}else return C(Z,n,i,c,C(Z,0,e,r,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,d=a.d;d.a;var b=d.b,h=d.c,_=d.d,x=d.e,g=a.e;return C(Z,0,v,s,C(Z,1,b,h,_,x),C(Z,1,e,r,g,t))}else return C(Z,n,e,r,a,t)}),Wo=w(function(n,e,r){if(r.$===-2)return C(Z,0,n,e,be,be);var a=r.a,t=r.b,i=r.c,c=r.d,l=r.e,u=o(Hu,n,t);switch(u){case 0:return C(xr,a,t,i,m(Wo,n,e,c),l);case 1:return C(Z,a,t,e,c,l);default:return C(xr,a,t,i,c,m(Wo,n,e,l))}}),hr=w(function(n,e,r){var a=m(Wo,n,e,r);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(Z,1,t,i,c,l)}else{var u=a;return u}}),Wm=function(n){n:for(;;)if(n.$===-1&&n.d.$===-1){var e=n.d,r=e;n=r;continue n}else return n},Uu=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.e.d.$===-1&&!n.e.d.a){var e=n.a,r=n.b,a=n.c,t=n.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=n.e;v.a;var s=v.b,f=v.c,g=v.d;g.a;var d=g.b,b=g.c,h=g.d,_=g.e,x=v.e;return C(Z,0,d,b,C(Z,1,r,a,C(Z,0,i,c,l,u),h),C(Z,1,s,f,_,x))}else{var e=n.a,r=n.b,a=n.c,A=n.d;A.a;var i=A.b,c=A.c,l=A.d,u=A.e,P=n.e;P.a;var s=P.b,f=P.c,g=P.d,x=P.e;return C(Z,1,r,a,C(Z,0,i,c,l,u),C(Z,0,s,f,g,x))}else return n},Gc=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.d.d.$===-1&&!n.d.d.a){var e=n.a,r=n.b,a=n.c,t=n.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,f=l.e,g=t.e,d=n.e;d.a;var b=d.b,h=d.c,_=d.d,x=d.e;return C(Z,0,i,c,C(Z,1,u,v,s,f),C(Z,1,r,a,g,C(Z,0,b,h,_,x)))}else{var e=n.a,r=n.b,a=n.c,A=n.d;A.a;var i=A.b,c=A.c,P=A.d,g=A.e,D=n.e;D.a;var b=D.b,h=D.c,_=D.d,x=D.e;return C(Z,1,r,a,C(Z,0,i,c,P,g),C(Z,0,b,h,_,x))}else return n},Nm=At(function(n,e,r,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(Z,r,l,u,v,C(Z,0,a,t,s,c))}else{n:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var f=c.d;return f.a,Gc(e)}else break n;else return c.a,c.d,Gc(e);else break n;return e}}),Ha=function(n){if(n.$===-1&&n.d.$===-1){var e=n.a,r=n.b,a=n.c,t=n.d,i=t.a,c=t.d,l=n.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(Z,e,r,a,Ha(t),l);var u=Uu(n);if(u.$===-1){var v=u.a,s=u.b,f=u.c,g=u.d,d=u.e;return C(xr,v,s,f,Ha(g),d)}else return be}else return C(Z,e,r,a,Ha(t),l)}else return be},qr=$(function(n,e){if(e.$===-2)return be;var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;if(Y(n,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(Z,r,a,t,o(qr,n,i),c);var u=Uu(e);if(u.$===-1){var v=u.a,s=u.b,f=u.c,g=u.d,d=u.e;return C(xr,v,s,f,o(qr,n,g),d)}else return be}else return C(Z,r,a,t,o(qr,n,i),c);else return o(Gm,n,si(Nm,n,e,r,a,t,i,c))}),Gm=$(function(n,e){if(e.$===-1){var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;if(tn(n,a)){var l=Wm(c);if(l.$===-1){var u=l.b,v=l.c;return C(xr,r,u,v,i,Ha(c))}else return be}else return C(xr,r,a,t,i,o(qr,n,c))}else return be}),Iu=$(function(n,e){var r=o(qr,n,e);if(r.$===-1&&!r.a){r.a;var a=r.b,t=r.c,i=r.d,c=r.e;return C(Z,1,a,t,i,c)}else{var l=r;return l}}),za=w(function(n,e,r){var a=e(o(sa,n,r));if(a.$)return o(Iu,n,r);var t=a.a;return m(hr,n,t,r)}),Hm=function(n){switch(n.$){case 1:var e=n.a,r=n.b;return o(za,e,zn(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Tm,y(i,c),r)}else return a}));case 0:var e=n.a,r=n.b;return o(za,e,zn(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Vu,y(i,c),m(Rm,i,c,r))}));case 3:var e=n.a,r=n.b;return o(za,e,zn(function(a){return a.$===3?km(r):a}));default:var e=n.a,r=n.b;return o(za,e,zn(function(a){return a.$===2?Fu(r):a}))}},Um=function(n){return zm(Hm(n))},Im=$(function(n,e){return o(X,Um(n),e)}),Om=$(function(n,e){return W(e,{e$:o(Im,n,e.e$)})}),Jm=$(function(n,e){var r=e.a,a=e.b;return o(re,r,W(a,{n:o(Du,Om(n),a.n)}))}),qm=$(function(n,e){var r=e.a,a=e.b;return y(r,n(a))}),Zm=w(function(n,e,r){var a=r.a,t=r.b,i=t.n;return o(re,a,W(t,{n:o(qm,o(n,i.a,e),i)}))}),Ym=B(function(n,e,r,a){switch(r.$){case 0:return a;case 1:return W(a,{aQ:!a.aQ});case 2:var t=r.a;return W(a,{J:m(wm,n,t,a.J)});case 3:var i=r.a;return W(a,{J:o(Jm,i,a.J)});case 4:var c=r.a;return W(a,{J:m(Zm,e,c,a.J)});default:var l=r.a;return W(a,{J:o(Lm,l,a.J)})}}),Xm=$(function(n,e){return o(re,kt,{n:y(n,e(n)),af:S,X:S})}),Qm=cf,Hc=Qm(S),We=Bs,tr=Vs,Km=sf("tick",o(j,function(n){return o(j,function(e){return o(j,function(r){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(c){return dn({V:c,ch:i,e8:t,dJ:a,cV:r,b5:e,gd:n})},o(z,"clock",_n))},o(z,"devicePixelRatio",_n))},o(z,"dt",_n))},o(z,"keyboard",o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(c){return o(j,function(l){return o(j,function(u){return o(j,function(v){return o(j,function(s){return o(j,function(f){return dn({eN:f,e0:s,cj:v,e7:u,dK:l,fO:c,ev:i,fX:t,dc:a})},o(z,"alt",en))},o(z,"control",en))},o(z,"down",en))},o(z,"downs",We(tr)))},o(z,"left",en))},o(z,"pressedKeys",We(tr)))},o(z,"right",en))},o(z,"shift",en))},o(z,"up",en))))},o(z,"pointer",o(j,function(r){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(c){return o(j,function(l){return o(j,function(u){return o(j,function(v){return dn({cj:v,dG:u,fC:l,fT:c,fU:i,dc:t,gh:a,gl:r})},o(z,"down",en))},o(z,"isDown",en))},o(z,"move",en))},o(z,"rightDown",en))},o(z,"rightUp",en))},o(z,"up",en))},o(z,"x",_n))},o(z,"y",_n))))},o(z,"screen",o(j,function(e){return o(j,function(r){return dn({fm:r,gf:e})},o(z,"height",_n))},o(z,"width",_n))))},o(z,"wheel",o(j,function(n){return o(j,function(e){return dn({e2:e,e3:n})},o(z,"deltaX",_n))},o(z,"deltaY",_n))))),n0=function(n){return{$:4,a:n}},e0={$:0},Fi=fi,ce=$(function(n,e){return o(Zl,n,Fi(e))}),F=ce("className"),Uc=function(n){var e=n.b;return e},r0=function(n){var e=n.b.n;return e.b},V=ie("div"),ot=ce("id"),a0=hf,it=a0,t0=bf,on=t0,o0={$:1},i0=function(n){return{$:3,a:n}},c0=function(n){return{$:5,a:n}},Ic=ie("a"),fa=ie("button"),No=Je("d"),Ou=Jl("http://www.w3.org/2000/svg"),Go=Ou("path"),Ho=Ou("svg"),Uo=Je("viewBox"),Zr=function(n){return o(Ho,p([Uo("0 0 100 100"),o(on,"width","100%"),o(on,"height","100%")]),p([o(Go,p([No(n)]),S)]))},Oc=function(n){return o(ce,"href",_f(n))},br={e6:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fg:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fl:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fM:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fN:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",cV:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fQ:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fZ:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",f8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ga:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gp:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},l0=function(n){return{$:0,a:n}},Ju=ql,jt=$(function(n,e){return o(Ju,n,l0(e))}),da=function(n){return o(jt,"click",dn(n))},Jc=ce("target"),u0=ce("title"),Io=$(function(n,e){if(e.$===-2)return be;var r=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(Z,r,a,o(n,a,t),o(Io,n,i),o(Io,n,c))}),$0=zo,ln=$0,v0=function(n){return m(xt,w(function(e,r,a){return o(k,r,a)}),S,n)},s0=$(function(n,e){return{$:3,a:n,b:e}}),f0=$(function(n,e){return{$:2,a:n,b:e}}),d0=$(function(n,e){return{$:0,a:n,b:e}}),m0=$(function(n,e){return{$:1,a:n,b:e}}),qe=B(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),Vi=L(qe,0/255,0/255,0/255,1),p0=fi,g0=$(function(n,e){return o(Zl,n,p0(e))}),h0=g0("checked"),qn=us,b0=w(function(n,e,r){return un(o(ea,n-rr(r),Mt(e)),r)}),ra=Kv,qu=function(n){var e=function(r){return r<10?yn(r):Mt(Eu(87+r))};return n<16?e(n):un(qu(n/16|0),e(o(ra,16,n)))},A0=o(K,qu,o(b0,2,"0")),Bi=function(n){var e=n.a,r=n.b,a=n.c,t=n.d;return{aM:t,cd:a,ck:r,cY:e}},_0=function(n){var e=Bi(n),r=e.cY,a=e.ck,t=e.cd;return o(er,"",o(k,"#",o(X,o(K,qn,A0),p([r*255,a*255,t*255]))))},Oo=ce("htmlFor"),w0=$(function(n,e){if(e.$)return J;var r=e.a;return n(r)}),ct=$(function(n,e){if(e.$){var a=e.a;return Fn(a)}else{var r=e.a;return n(r)}}),y0=w(function(n,e,r){var a=n(e);if(a.$)return r;var t=a.a;return o(k,t,r)}),ma=$(function(n,e){return m(ze,y0(n),S,e)}),Zu=B(function(n,e,r,a){return{fr:e,fA:n,fH:r,f0:a}}),x0=Uf,S0=Ls,C0=$(function(n,e){if(e.$)return Fn(n);var r=e.a;return sn(r)}),P0=Hf,L0=function(n){return o(P0,{eW:!1,fD:!1},n)},kr=function(n){if(n.b){var e=n.a;return n.b,U(e)}else return J},z0=$(function(n,e){if(e.$){var a=e.a;return Fn(a)}else{var r=e.a;return sn(n(r))}}),k0=function(n){return{$:2,a:n}},T0=function(n){return{$:0,a:n}},M0=function(n){return{$:1,a:n}},ro=$(function(n,e){return de(e)-de(n)}),ao=w(function(n,e,r){var a=de(r);return Y(de(n),a)<1&&Y(a,de(e))<1}),j0=$(function(n,e){var r=function(t){return Y(t,n)<0?sn(t):Fn(M0(e))},a=m(ao,"0","9",e)?sn(o(ro,"0",e)):m(ao,"a","z",e)?sn(10+o(ro,"a",e)):m(ao,"A","Z",e)?sn(10+o(ro,"A",e)):Fn(T0(e));return o(ct,r,a)}),Yu=$(function(n,e){var r=Lr(e);if(r.$===1)return sn(0);var a=r.a,t=a.a,i=a.b;return o(ct,function(c){return o(ct,function(l){return sn(c+l*n)},o(Yu,n,i))},o(j0,n,t))}),D0=$(function(n,e){return 2<=n&&n<=36?o(Yu,n,Ro(e)):Fn(k0(n))}),F0=D0(16),V0=w(function(n,e,r){return L(qe,n,e,r,1)}),B0=B(function(n,e,r,a){return L(qe,n,e,r,a)}),Ne=Qv,E0=$(function(n,e){var r=o(Ne,10,n);return qn(e*r)/r}),R0=_s,W0=function(){var n="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",e=function(r){var a=Bu(r);if(a.b&&!a.b.b){var t=a.a;return S0(p([t,t]))}else return r};return o(K,R0,o(K,function(r){return o(zn,function(a){return m(x0,1,a,r)},L0(n))},o(K,w0(kr),o(K,zn(function(r){return r.f0}),o(K,zn(ma(Nn)),o(K,C0("Parsing hex regex failed"),ct(function(r){var a=o(X,o(K,e,o(K,F0,z0(Nr))),r);n:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return sn(L(B0,t/255,c/255,u/255,o(E0,2,s/255)))}else break n;else{var t=a.a.a,f=a.b,c=f.a.a,g=f.b,u=g.a.a;return sn(m(V0,t/255,c/255,u/255))}else break n;return Fn("Parsing ints from hex failed")})))))))}(),lt=ie("input"),Jo=ie("label"),qo=ce("name"),Xu=$(function(n,e){return m(ze,z,e,n)}),N0=o(Xu,p(["target","checked"]),en),G0=function(n){return o(jt,"change",o(rt,n,N0))},H0=function(n){return y(n,!0)},U0=function(n){return{$:1,a:n}},I0=$(function(n,e){return o(Ju,n,U0(e))}),O0=o(Xu,p(["target","value"]),tr),Dt=function(n){return o(I0,"input",o(rt,H0,o(rt,n,O0)))},Qu=ce("max"),Ku=ce("min"),n$=function(n){return o(ce,"step",n)},ut=ce("type"),Ft=ce("value"),qc=function(n){var e=n.co,r=n.dd,a=n.cE,t=n.cA,i=n.c5,c=n.cJ;return o(V,S,p([o(Jo,p([Oo(e)]),p([o(V,p([F("relative w-full")]),p([o(V,p([F("inline-block")]),p([ln(e)])),o(V,p([F("inline-block float-right")]),p([ln(Pn(r))]))]))])),o(lt,p([ut("range"),o(on,"width","100%"),ot(e),qo(e),Ku(Pn(a)),Qu(Pn(t)),Ft(Pn(r)),n$(Pn(i)),Dt(o(K,Di,o(K,pn(42),c)))]),S)]))},Ei=$(function(n,e){if(e.$)return n;var r=e.a;return r}),J0=$(function(n,e){switch(e.$){case 3:var c=e.a;return o(V,S,p([o(V,p([F("mb-2")]),p([o(Jo,p([Oo(n)]),p([ln(n)]))])),o(lt,p([ut("checkbox"),ot(n),qo(n),G0(s0(n)),h0(c)]),S)]));case 0:var r=e.a,t=r.a,i=r.b,c=e.b;return qc({co:n,cA:i,cE:t,cJ:d0(n),c5:.01*(i-t),dd:c});case 1:var a=e.a,t=a.a,i=a.b,c=e.b;return qc({co:n,cA:i,cE:t,cJ:o(K,qn,m0(n)),c5:1,dd:c});default:var c=e.a;return o(V,S,p([o(V,p([o(on,"margin-bottom","6px")]),p([o(Jo,p([Oo(n)]),p([ln(n)]))])),o(lt,p([ut("color"),o(on,"width","100%"),o(on,"height","26px"),o(on,"padding","0px"),ot(n),qo(n),Dt(function(l){return o(f0,n,o(Ei,Vi,W0(l)))}),Ft(_0(c))]),S)]))}}),q0=function(n){return o(V,p([F("p-4 border-y-[0.5px] border-white20")]),p([o(V,p([F("text-lg pb-2")]),p([ln(n.fE)])),o(V,p([F("pl-2 pr-2")]),v0(o(Io,J0,n.aA)))]))},Z0=function(n){return o(V,p([F("text-xs text-white60")]),o(X,q0,n))},Y0=function(n){return o(V,p([F("absolute left-[104px] bottom-2 text-sm text-white40")]),p([ln("clock: "+o(Gu,3,zr(n).V))]))},X0=function(n){n.a;var e=n.b.X;return o(zn,function(r){return qn(60/(zr(n).V-r))},o(zn,o(K,Fo,function(r){return r.V}),kr(o(ji,59,e))))},Q0=function(n){return o(V,p([F("absolute bottom-2 right-4 text-sm text-white40")]),function(){var e=X0(n);if(e.$===1)return p([ln("... Fps")]);var r=e.a;return p([ln(yn(r)+" Fps")])}())},K0=function(n){return{$:0,a:n}},n1=function(n){var e=n.b.X;return oe(e)},e1=function(n){var e=n.b.X;n.b.n;var r=n.b.af;return oe(e)+1+oe(r)},r1=function(n){return o(lt,p([F("absolute w-full"),ut("range"),Ku(yn(0)),Qu(yn(e1(n)-1)),Ft(yn(n1(n))),n$(yn(1)),Dt(o(K,Di,o(K,pn(42),o(K,qn,K0))))]),S)},Zc={$:1},a1={$:3},t1={$:2},Ri=function(n){return!n.b},Yc=$(function(n,e){return o(fa,p([F("px-2 bg-black40"),F(e),da(n)]),p([ln("REC")]))}),Xc=$(function(n,e){return o(fa,p([F("absolute left-[60px] mx-1 px-1 bg-black40"),da(e)]),p([o(V,p([F("w-4 h-6 fill-white80")]),p([Zr(n)]))]))}),o1=function(n){var e=n.a,r=n.b.af;return o(V,p([F("py-1")]),p([function(){switch(e.$){case 0:return o(Yc,Zc,"text-red-500 font-bold");case 1:return o(Yc,t1,"text-white80 font-bold");default:return o(V,S,S)}}(),function(){switch(e.$){case 0:return o(V,S,S);case 1:return Ri(r)?o(V,S,S):o(Xc,br.fN,a1);default:return o(Xc,br.fM,Zc)}}()]))},i1=function(n){return o(V,p([F("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),p([r1(n),o1(n),Q0(n),Y0(n)]))},c1=function(n){var e=n.a;return tn(e,kt)},l1=$(function(n,e){var r=c1(e.J)?o(V,S,S):o(V,p([F("absolute pointer-events-none w-8 h-8"),o(on,"left",Pn(n.cV.gh+.5*n.b5.gf)+"px"),o(on,"top",Pn(-n.cV.gl+.5*n.b5.fm)+"px")]),p([o(V,p([F(n.cV.dG?"fill-black80":"fill-white40")]),p([Zr(br.cV)]))]));return o(V,S,p([r]))}),u1=$(function(n,e){var r=o(fa,p([F(e.aQ?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),da(o0),u0("Distraction Free Mode")]),p([Zr(br.gp)])),a=o(V,p([F("absolute w-8 bottom-12")]),p([o(Ic,p([F("fill-twitterBlue40 hover:fill-twitterBlue"),Oc("https://twitter.com/AzizErkalSelman"),Jc("_blank")]),p([Zr(br.f8)]))])),t=o(V,p([F("absolute w-8 bottom-2")]),p([o(Ic,p([F("fill-githubCat40 hover:fill-githubCat"),Oc("https://github.com/erkal/elm-3d-playground-exploration"),Jc("_blank")]),p([Zr(br.fg)]))]));return e.aQ?o(V,p([F("fixed w-10 h-10 p-1")]),p([r])):o(V,S,p([o(V,p([F("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),p([r,a,t])),o(V,p([F("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(on,"height",Pn(n.b5.fm-80)+"px")]),p([o(it,i0,Z0(zr(e.J).e$))])),o(V,p([F("absolute bottom-0 left-10 h-20"),o(on,"width",n.b5.gf>600?"600px":Pn(n.b5.gf-40)+"px")]),p([o(it,c0,i1(e.J))])),o(l1,n,e)]))}),$1=w(function(n,e,r){var a=r0(r.J),t=zr(r.J);return o(V,p([F("bg-black40"),F("select-none"),F("antialiased"),F("font-mono"),o(on,"width",Pn(t.b5.gf)+"px"),o(on,"height",Pn(t.b5.fm)+"px")]),p([o(V,p([F("fixed")]),p([o(it,Cu(e0),o(n,t,a))])),o(V,p([ot("gui")]),p([o(u1,t,r),o(it,n0,o(e,t,a))]))]))}),v1=Yn(function(n,e,r,a,t,i){var c=$(function(u,v){return y(L(Ym,e,i,u,v),Hc)}),l=function(u){var v=o(Pu,r,u.ft);return y({aQ:u.ft.b5.gf<500,J:o(Xm,v,a)},Hc)};return bm({fs:l,f1:Cu(Km(im)),f9:c,gc:o($1,n,t)})}),$t={$:0},e$=Us,r$=xn(function(n,e,r,a,t){return{dn:t,dN:r,bT:a,cU:n,el:e}}),aa=$(function(n,e){return{$:0,a:n,b:e}}),Qc=js,Zo=m(ua,$(function(n,e){return y(n,e)}),o(z,"A1",Qc),o(z,"A2",Qc)),$e=$(function(n,e){return{$:0,a:n,b:e}}),a$=Ms,s1=function(){var n=function(e){switch(e){case"X":return dn(0);case"Y":return dn(1);case"Z":return dn(2);default:var r=e;return a$("Unknown constructor for type Axis: "+r)}};return o(j,n,tr)}(),f1=function(){var n=function(e){switch(e){case"Positive":return dn(0);case"Negative":return dn(1);default:var r=e;return a$("Unknown constructor for type Sign: "+r)}};return o(j,n,tr)}(),d1=m(ua,$e,o(z,"A1",s1),o(z,"A2",f1)),Kc=m(ua,aa,o(z,"A1",Zo),o(z,"A2",d1)),me=$(function(n,e){return{fw:n,bn:e}}),to=m(ua,me,o(z,"last",Zo),o(z,"rest",We(Zo))),m1=Hs,t$=mn(m1,r$,o(z,"playerCube",Kc),o(z,"playerPath",to),o(z,"levelEditingCube",Kc),o(z,"levelEditingPath",to),o(z,"calculatedSolutions",We(to))),p1=Gs,o$=function(n){var e=w(function(r,a,t){return{q:t,l:r,n:a}});return L(p1,e,o(z,"before",We(n)),o(z,"current",n),o(z,"after",We(n)))},i$=C(r$,o(aa,y(0,0),o($e,2,0)),o(me,y(0,0),S),o(aa,y(0,0),o($e,2,0)),o(me,y(0,0),S),S),g1=`
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
`,h1=function(n){return{q:S,l:S,n}},b1=o(Ei,h1(i$),o(e$,o$(t$),g1)),A1={bQ:!1,cl:"",cm:"",eg:J,c4:0},Vt={$:0},_1=Vt,w1=function(n){return{a9:y(0,0),o:A1,a:b1,c4:$t,bs:_1}},Qe=$(function(n,e){return y(n,Fu(e))}),y1=w(function(n,e,r){return{aA:r,fu:e,fE:n}}),Wi=be,x1=function(n){return m(Ae,$(function(e,r){var a=e.a,t=e.b;return m(hr,a,t,r)}),Wi,n)},S1=w(function(n,e,r){return m(y1,n,e,x1(r))}),oo=S1,Me=w(function(n,e,r){var a=e.a,t=e.b;return y(n,o(Vu,y(a,t),r))}),ee=ns,io=function(n){return n/255},Ke=w(function(n,e,r){return L(qe,io(n),io(e),io(r),1)}),C1=p([m(oo,"Camera",!0,p([m(Me,"camera distance",y(3,60),20),m(Me,"camera azimuth",y(-ee,ee),0),m(Me,"camera elevation",y(-ee/2,ee/2),-.15)])),m(oo,"Parameters",!0,p([m(Me,"cubes side length",y(.5,1),.95),m(Me,"duration of step animation",y(.1,1),.23),m(Me,"duration of mistake animation",y(.1,1),.5),m(Me,"height of following lights",y(.1,8),5)])),m(oo,"Colors and light",!0,p([m(Me,"lumens of following lights",y(4e4,12e4),1e5),o(Qe,"background color",m(Ke,150,150,150)),o(Qe,"color 1",m(Ke,244,88,67)),o(Qe,"color 2",m(Ke,255,200,40)),o(Qe,"path color",m(Ke,244,88,67)),o(Qe,"board color",m(Ke,200,170,170)),o(Qe,"finish mark color",m(Ke,150,215,106)),o(Qe,"wall color",m(Ke,38,48,64))]))]),Mn=function(n){var e=n;return e.n},P1=function(n){return{$:1,a:n}},Ua=Yn(function(n,e,r,a,t,i){var c=i.c4;return c.$?i:W(i,{c4:P1({cF:t,bp:r,b7:e,aj:n.V,eL:a})})}),L1={$:1},z1={$:0},co=function(n){return{$:2,a:n}},c$=$(function(n,e){return o(Tt,function(r){return tn(r,n)},e)}),Ia=$(function(n,e){var r=e.fw,a=e.bn;return o(c$,n,o(k,r,a))}),Yo=function(n){return tn(n,o($e,2,0))},vt=$(function(n,e){var r=e.a,a=e.b;switch(n){case 0:return y(r,a+1);case 1:return y(r,a-1);case 2:return y(r-1,a);default:return y(r+1,a)}}),l$=function(n){return n?0:1},ka=function(n){var e=n.a,r=n.b;switch(e){case 0:return o($e,e,r);case 1:return o($e,2,r);default:return o($e,1,l$(r))}},Ta=function(n){var e=n.a,r=n.b;switch(e){case 0:return o($e,2,l$(r));case 1:return o($e,e,r);default:return o($e,0,r)}},k1=function(n){switch(n){case 0:return o(K,ka,o(K,ka,ka));case 1:return ka;case 2:return o(K,Ta,o(K,Ta,Ta));default:return Ta}},u$=$(function(n,e){var r=e.a,a=e.b;return o(aa,o(vt,n,r),o(k1,n,a))}),T1=$(function(n,e){var r=o(u$,n,e.dN),a=r.a,t=e.dN,i=t.b,c=e.bT.bn;if(c.b){var l=c.a,u=c.b;return tn(l,a)?co(W(e,{dN:r,bT:o(me,l,u)})):Yo(i)?z1:o(Ia,a,e.bT)?L1:co(W(e,{dN:r,bT:o(me,a,o(k,e.bT.fw,o(k,l,u)))}))}else return co(W(e,{dN:r,bT:o(me,a,p([e.bT.fw]))}))}),M1=B(function(n,e,r,a){var t=o(T1,n,Mn(a.a));switch(t.$){case 0:return a;case 1:return a;default:var i=t.a;return mn(Ua,r,e,n,!1,i,a)}}),j1=function(n){return{$:2,a:n}},nl=xn(function(n,e,r,a,t){var i=t.c4;return i.$?t:W(t,{c4:j1({bp:a,b7:r,aj:n.V,df:e})})}),D1=function(n){return{$:3,a:n}},F1=function(n){return{$:1,a:n}},el=function(n){return{$:2,a:n}},Vr=function(n){return{$:0,a:n}},st=function(n){var e=n.bn;return 1+oe(e)},$$=$(function(n,e){var r=o(u$,n,e.cU),a=r.a,t=r.b,i=e.el.bn;if(i.b){var c=i.a,l=i.b;if(tn(c,a))return F1(W(e,{cU:r,el:o(me,c,l)}));if(o(Ia,a,e.bT)){if(o(Ia,a,e.el))return Vr(3);var u=W(e,{cU:r,el:o(me,a,o(k,e.el.fw,o(k,c,l)))});return tn(a,e.bT.fw)?tn(st(u.el),st(u.bT))&&Yo(t)?D1(u):Vr(0):Yo(t)?Vr(1):el(u)}else return Vr(2)}else return o(Ia,a,e.bT)?el(W(e,{cU:r,el:o(me,a,p([e.el.fw]))})):Vr(2)}),V1=B(function(n,e,r,a){var t=o($$,n,Mn(a.a));switch(t.$){case 0:switch(t.a){case 3:return t.a,a;case 2:return t.a,a;case 1:return t.a,C(nl,r,1,e,n,a);default:return t.a,C(nl,r,0,e,n,a)}case 2:var i=t.a;return mn(Ua,r,e,n,!1,i,a);case 1:var i=t.a;return mn(Ua,r,e,n,!1,i,a);default:var i=t.a;return mn(Ua,r,e,n,!0,i,a)}}),rl=function(n){var e=n.a;return e},B1=function(n){var e=p([n.dc,n.cj,n.dK,n.ev]);n:for(;;)if(e.b)if(e.a)if(e.b.b&&!e.b.a&&e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var r=e.b,a=r.b;return a.b,U(0)}else break n;else if(e.b.b)if(e.b.a)if(e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var t=e.b,i=t.b;return i.b,U(1)}else break n;else if(e.b.b.b)if(e.b.b.a)if(e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var c=e.b,l=c.b;return l.b,U(2)}else break n;else if(e.b.b.b.b&&e.b.b.b.a&&!e.b.b.b.b.b){var u=e.b,v=u.b;return v.b,U(3)}else break n;else break n;else break n;else break n;return J},pa=function(n){return{$:2,a:n}},E1=Ct(pa(3)),R1=Ct(pa(0)),W1=Ct(pa(1)),N1=Ct(pa(2)),G1=function(n){return N1(n)?U(0):E1(n)?U(1):R1(n)?U(2):W1(n)?U(3):J},H1=$(function(n,e){var r=y(G1(e.bs),B1(n.dJ));if(r.a.$){if(r.b.$)return J;var t=r.b.a;return U(t)}else{var a=r.a.a;return U(a)}}),U1={$:3},I1=$(function(n,e){return o(zn,function(r){if(r.$)return 0;var a=r.b;return a},o(sa,n,e.aA))}),O1=$(function(n,e){return o(pn,0,kr(o(ma,I1(n),e)))}),J1=$(function(n,e){return o(O1,n,e.e$)}),hn=J1,q1=$(function(n,e){var r=e;return W(r,{n})}),Z1=$(function(n,e){var r=e.c4;switch(r.$){case 1:var i=r.a.aj,a=r.a.cF,t=r.a.eL;return Y(n.V-i,o(hn,"duration of step animation",n))>0?W(e,{a:o(q1,a,e.a),c4:t?U1:$t}):e;case 2:var i=r.a.aj;return Y(n.V-i,o(hn,"duration of mistake animation",n))>0?W(e,{c4:$t}):e;default:return e}}),Sr=function(n){var e=n.fw,r=n.bn;return o(k,e,r)},al=function(n){if(n.b){var e=n.a,r=n.b;return U(m(Ae,On,e,r))}else return J},Ar=$(function(n,e){return Y(n,e)<0?n:e}),tl=function(n){if(n.b){var e=n.a,r=n.b;return U(m(Ae,Ar,e,r))}else return J},Y1=function(n){var e=Sr(n.bT),r={d7:o(pn,0,al(o(X,o(K,Fo,Nr),e))),d8:o(pn,0,al(o(X,o(K,Uc,Nr),e))),ea:o(pn,0,tl(o(X,o(K,Fo,Nr),e))),eb:o(pn,0,tl(o(X,o(K,Uc,Nr),e)))},a=r.ea,t=r.d7,i=r.eb,c=r.d8;return{gh:.5*(a+t),gl:.5*(i+c)}},X1=ts,Ni=function(n){return n},Gn=function(n){return n},ft=function(n){var e=n;return-e},Q1=$(function(n,e){var r=n,a=e;return{gh:r.gl*a.dj-r.dj*a.gl,gl:r.dj*a.gh-r.gh*a.dj,dj:r.gh*a.gl-r.gl*a.gh}}),v$=function(n){var e=n;return e.dh},s$=function(n){var e=n;return e.di},K1=function(n){return o(Q1,v$(n),s$(n))},lr=function(n){var e=n;return e.cK},or=es,ir=rs,Oa=w(function(n,e,r){var a=n,t=e,i=r,c=.5*t,l=or(c),u=ir(c),v=a.e5,s=v,f=s.gh*u,g=l*f,d=f*f,b=s.gl*u,h=l*b,_=f*b,x=b*b,A=1-2*(d+x),P=s.dj*u,D=l*P,I=2*(_-D),G=2*(_+D),N=f*P,H=2*(N+h),O=2*(N-h),E=b*P,nn=2*(E-g),an=2*(E+g),gn=P*P,An=1-2*(x+gn),fn=1-2*(d+gn);return{gh:An*i.gh+I*i.gl+H*i.dj,gl:G*i.gh+fn*i.gl+nn*i.dj,dj:O*i.gh+an*i.gl+A*i.dj}}),ga=w(function(n,e,r){var a=n,t=e,i=r,c=.5*t,l=or(c),u=ir(c),v=a.cK,s=v,f=i.gh-s.gh,g=i.gl-s.gl,d=i.dj-s.dj,b=a.e5,h=b,_=h.gh*u,x=l*_,A=_*_,P=h.gl*u,D=l*P,I=_*P,G=P*P,N=1-2*(A+G),H=h.dj*u,O=l*H,E=2*(I-O),nn=2*(I+O),an=_*H,gn=2*(an+D),An=2*(an-D),fn=P*H,Sn=2*(fn-x),Hn=2*(fn+x),En=H*H,ke=1-2*(G+En),Te=1-2*(A+En);return{gh:s.gh+ke*f+E*g+gn*d,gl:s.gl+nn*f+Te*g+Sn*d,dj:s.dj+An*f+Hn*g+N*d}}),Ce=function(n){return n},Ze=function(n){var e=n;return e.dh},Ye=function(n){var e=n;return e.di},Xe=function(n){var e=n;return e.dk},f$=w(function(n,e,r){return Ce({cK:m(ga,n,e,lr(r)),dh:m(Oa,n,e,Ze(r)),di:m(Oa,n,e,Ye(r)),dk:m(Oa,n,e,Xe(r))})}),ol=w(function(n,e,r){return m(f$,n(r),e,r)}),Bt=function(n){var e=n;return e.e5},Tr=$(function(n,e){var r=n,a=e;return{gh:a.gh+r.gh,gl:a.gl+r.gl,dj:a.dj+r.dj}}),d$=$(function(n,e){return Ce({cK:o(Tr,n,lr(e)),dh:Ze(e),di:Ye(e),dk:Xe(e)})}),np=$(function(n,e){var r=n,a=e;return{gh:r*a.gh,gl:r*a.gl,dj:r*a.dj}}),ep=w(function(n,e,r){return o(d$,o(np,e,n),r)}),rp=w(function(n,e,r){return m(ep,Bt(n(r)),e,r)}),Zn=$(function(n,e){return{e5:e,cK:n}}),ap=function(n){var e=n;return o(Zn,e.cK,e.dh)},tp=function(n){var e=n;return o(Zn,e.cK,e.di)},op=function(n){var e=n;return o(Zn,e.cK,e.dk)},ip=function(n){var e=Ce({cK:n.aW,dh:s$(n.dA),di:K1(n.dA),dk:v$(n.dA)}),r=m(rp,op,n.ci,m(ol,ap,ft(n.bL),m(ol,tp,n.bG,e)));return r},cp=function(n){return{$:0,a:n}},vn=function(n){var e=n;return Q(e)},Ja=function(n){var e=n;return .5*e},lp=as,up=function(n){var e=n;return lp(e)},$p=function(n){var e=Ja(vn(n.eH)),r=up(e);return{cX:cp(r),de:n.de}},Jn=function(n){return n},Vn={gh:0,gl:0,dj:0},m$=Nn,pe=function(n){return n},p$=pe({gh:1,gl:0,dj:0}),Et=p$,Gi=pe({gh:0,gl:0,dj:1}),Rt=Gi,vp=m$({cK:Vn,dh:Rt,di:Et}),sp=function(n){var e=n.aW,r=n.bG,a=n.bL,t=n.ci;return $p({eH:Jn(2*X1(.5)),de:ip({bG:Jn(r),ci:Gn(t),bL:Jn(a),aW:Ni(e),dA:vp})})},g$=$(function(n,e){return sp({bG:o(hn,"camera azimuth",n),ci:o(hn,"camera distance",n),bL:o(hn,"camera elevation",n),aW:function(){var r=Y1(Mn(e.a));return{gh:r.gh,gl:r.gl,dj:0}}()})}),fp=w(function(n,e,r){return{gh:n,gl:e,dj:r}}),Gr=function(n){return Jn(ee*(n/180))},Ma=function(n){return n},qa=function(n){var e=n;return e},dp=$(function(n,e){var r=n,a=e;return a.gh*r.gh+a.gl*r.gl+a.dj*r.dj}),rn=$(function(n,e){var r=e;return n*r}),Hi=function(n){var e=n;return e.cK},mp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.fG,l=c;return(a.gh-i.gh)*l.gh+(a.gl-i.gl)*l.gl+(a.dj-i.dj)*l.dj}),pp=w(function(n,e,r){var a=n,t=e,i=r;return{gh:i.gh+t*a.gh,gl:i.gl+t*a.gl,dj:i.dj+t*a.dj}}),gp=$(function(n,e){var r=Bt(e),a=n,t=a.fG,i=o(dp,t,r);if(i){var c=Hi(e),l=o(mp,n,c),u=o(rn,-1/i,l);return U(m(pp,r,u,c))}else return J}),hp=$(function(n,e){return{gh:n,gl:e}}),il=$(function(n,e){var r=n,a=e;return r*a}),bp=function(n){var e=n;return e},cl=function(n){var e=n;return bp(e.eR)},Ap=function(n){var e=n;return e.aP},De=$s,_p=function(n){var e=n,r=o(On,Q(e.gh),o(On,Q(e.gl),Q(e.dj)));if(r){var a=e.dj/r,t=e.gl/r,i=e.gh/r,c=De(i*i+t*t+a*a);return U({gh:i/c,gl:t/c,dj:a/c})}else return J},h$=$(function(n,e){var r=e;return r/n}),Xo=function(n){var e=n;return lr(e)},Ui=pe({gh:0,gl:0,dj:-1}),wp=$(function(n,e){var r=n,a=e;return a/r}),yp=$(function(n,e){var r=n,a=e,t=r.dk,i=t,c=r.di,l=c,u=r.dh,v=u;return{gh:v.gh*a.gh+l.gh*a.gl+i.gh*a.dj,gl:v.gl*a.gh+l.gl*a.gl+i.gl*a.dj,dj:v.dj*a.gh+l.dj*a.gl+i.dj*a.dj}}),Ve=function(n){var e=n;return{gh:-e.gh,gl:-e.gl,dj:-e.dj}},Qo=function(n){var e=n;return Ve(Xe(e))},xp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.dh,l=c;return(a.gh-i.gh)*l.gh+(a.gl-i.gl)*l.gl}),Ii=w(function(n,e,r){var a=n,t=e,i=r;return{gh:a,gl:t,dj:i}}),Sp=B(function(n,e,r,a){var t=n,i=e,c=r,l=a,u=t.cK,v=u,s=t.dk,f=s,g=t.di,d=g,b=t.dh,h=b;return{gh:v.gh+i*h.gh+c*d.gh+l*f.gh,gl:v.gl+i*h.gl+c*d.gl+l*f.gl,dj:v.dj+i*h.dj+c*d.dj+l*f.dj}}),Cp=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=r.di,l=c;return(a.gh-i.gh)*l.gh+(a.gl-i.gl)*l.gl}),ye=0,Pp=w(function(n,e,r){var a=n,t=o(Cp,cl(e),r),i=o(xp,cl(e),r),c=a.de,l=c,u=Ap(e);u.a;var v=u.b,s=a.cX;if(s.$){var b=s.a,h=o(wp,v,b),_=L(Sp,l,o(il,h,i),o(il,h,t),ye);return o(Zn,_,Qo(a.de))}else{var f=s.a,g=ft(o(h$,f,o(rn,.5,v))),d=o(yp,l,o(pn,Ui,_p(m(Ii,i,t,g))));return o(Zn,Xo(a.de),d)}}),Ko=function(n){var e=n;return{gh:or(e),gl:ir(e)}},Lp=function(n){var e=n;return{gh:-e.gl,gl:e.gh}},zp=function(n){return n},kp=$(function(n,e){return zp({cK:e,dh:n,di:Lp(n)})}),Tp=$(function(n,e){return o(kp,Ko(n),e)}),Mp=w(function(n,e,r){var a=n.a,t=n.b;return{eR:o(Tp,e,r),aP:y(vn(a),vn(t))}}),Be=function(n){var e=n;return e.gh},jp=$(function(n,e){var r=n,a=e;return{gh:r,gl:a}}),Ee=function(n){var e=n;return e.gl},Re=function(n){var e=n;return e.dj},Dp=B(function(n,e,r,a){var t=r.gh,i=r.gl,c=function(v){return m(fp,qa(Be(v)),qa(Ee(v)),qa(Re(v)))},l=m(Mp,y(Ma(e.gf),Ma(e.fm)),Gr(0),o(hp,0,0)),u=o(jp,Ma(t),Ma(i));return o(zn,c,o(gp,a,m(Pp,n,l,u)))}),Fp=$(function(n,e){return{fG:n,cK:e}}),Vp=$(function(n,e){var r=e;return o(Fp,r.fG,o(Tr,n,r.cK))}),Bp=$(function(n,e){return{fG:e,cK:n}}),Ep=o(Bp,Vn,Rt),Rp=B(function(n,e,r,a){return L(Dp,e,r,a,o(Vp,m(Ii,Gn(0),Gn(0),Gn(n)),Ep))}),Wp=Rp(0),Np=$(function(n,e){return W(e,{a9:o(pn,e.a9,o(zn,function(r){var a=r.gh,t=r.gl;return y(qn(a),qn(t))},m(Wp,o(g$,n,e),n.b5,n.cV)))})}),Gp=function(n){return n.$===2?Vt:n},Hp=$(function(n,e){return n.cV.dG?e:Vt}),Up=$(function(n,e){return De(o(Ne,n.gh-e.gh,2)+o(Ne,n.gl-e.gl,2))}),Ip=w(function(n,e,r){var a=y(e,r),t=a.a,i=a.b;return Y(o(Up,t,i),n)<0?J:Y(i.gh-t.gh,Q(i.gl-t.gl))>0?U(1):Y(t.gh-i.gh,Q(i.gl-t.gl))>0?U(0):Y(i.gl-t.gl,Q(i.gh-t.gh))>0?U(2):U(3)}),b$=function(n){return{gh:n.cV.gh,gl:n.cV.gl}},Op=w(function(n,e,r){var a=e.f5,t=y(r,n.cV.dG);if(t.a.$===1&&t.b){var i=t.a.a,c=m(Ip,a,i,b$(n));if(c.$)return r;var l=c.a;return pa(l)}else return r}),Jp=function(n){return{$:1,a:n}},qp=$(function(n,e){return e.$===1?e:n.cV.dG?Jp(b$(n)):Vt}),Zp=w(function(n,e,r){return m(Op,n,e,o(Hp,n,o(qp,n,Gp(r))))}),Yp=$(function(n,e){return W(e,{bs:m(Zp,n,{f5:20},e.bs)})}),Xp=$(function(n,e){var r=Mn(e.a).cU,a=Mn(e.a).dN,t=function(){var i=o(H1,n,e);if(i.$===1)return Nn;var c=i.a;return e.o.bQ?m(M1,c,rl(a),n):m(V1,c,rl(r),n)}();return o(Z1,n,t(o(Np,n,o(Yp,n,e))))}),Qp=$(function(n,e){var r=e;return W(r,{l:o(k,r.n,r.l),n})}),Kp=$(function(n,e){return e.b?m(ze,k,e,n):n}),ae=function(n){return m(ze,Kp,S,n)},ha=$(function(n,e){return ae(o(X,n,e))}),Mr=$(function(n,e){return m(ze,$(function(r,a){return n(r)?o(k,r,a):a}),S,e)}),A$=w(function(n,e,r){n:for(;;){if(r.$===-2)return e;var a=r.b,t=r.c,i=r.d,c=r.e,l=n,u=m(n,a,t,m(A$,n,e,i)),v=c;n=l,e=u,r=v;continue n}}),ng=$(function(n,e){return m(A$,w(function(r,a,t){return o(Iu,r,t)}),n,e)}),eg=$(function(n,e){var r=n,a=e;return o(ng,r,a)}),_$=Wi,w$=$(function(n,e){var r=e;return m(hr,n,0,r)}),ll=function(n){return m(Ae,w$,_$,n)},rg=$(function(n,e){var r=o(sa,n,e);return!r.$}),y$=$(function(n,e){var r=e;return o(rg,n,r)}),ag=$(function(n,e){return o(Mr,function(r){return o(y$,r,n)},o(X,function(r){return o(vt,r,e)},p([0,1,2,3])))}),tg=$(function(n,e){var r=$(function(a,t){n:for(;;)if(t.b){var i=t.a,c=t.b,l=o(Mr,function(s){return!(o(c$,s,t)||o(y$,s,a))},o(ag,e,i)),u=o(w$,i,a),v=un(c,l);a=u,t=v;continue n}else return a});return o(r,_$,p([n]))}),x$=$(function(n,e){n:for(;;){if(e.$===-2)return n;var r=e.d,a=e.e,t=o(x$,n+1,a),i=r;n=t,e=i;continue n}}),og=function(n){return o(x$,0,n)},ul=function(n){var e=n;return og(e)},ig=function(n){var e=ul(n);return o(pn,!1,o(zn,function(r){return Y(ul(o(tg,r,n)),e)<0},kr(Ud(n))))},cg=function(n){return ig(o(eg,ll(Sr(n.bT)),ll(Sr(n.el))))},lg=function(n){var e=n.fw,r=n.bn;return o(pn,e,kr(Tn(r)))},Oi=function(n){var e=lg(n.bT);return W(n,{cU:o(aa,e,o($e,2,0)),el:o(me,e,S)})},ug=function(n){var e=$(function(r,a){n:for(;;){if(Ri(a))return r;var t=un(r,a),i=o(ha,function(c){return cg(c)?S:o(ma,function(l){var u=o($$,l,c);switch(u.$){case 0:return J;case 1:return J;case 2:var v=u.a;return U(v);default:var v=u.a;return U(v)}},p([0,1,2,3]))},a);r=t,a=i;continue n}});return o(Mr,function(r){return tn(st(r),st(n.bT))},o(X,function(r){return r.el},o(e,S,p([Oi(n)]))))},dt=$(function(n,e){return m(Ae,Ys(n),Js(),e)}),jr=function(n){return m(Ae,$(function(e,r){var a=e.a,t=e.b;return m(Zs,a,t,r)}),qs(),n)},$g=$(function(n,e){var r=e;return jr(p([y("before",o(dt,n,r.l)),y("current",n(r.n)),y("after",o(dt,n,r.q))]))}),$l=fi,ni=function(n){var e=n.a,r=n.b;return jr(p([y("A1",$l(e)),y("A2",$l(r))]))},vg=function(n){return Fi(function(){switch(n){case 0:return"X";case 1:return"Y";default:return"Z"}}())},sg=function(n){return Fi(function(){return n?"Negative":"Positive"}())},fg=function(n){var e=n.a,r=n.b;return jr(p([y("A1",vg(e)),y("A2",sg(r))]))},vl=function(n){var e=n.a,r=n.b;return jr(p([y("A1",ni(e)),y("A2",fg(r))]))},lo=function(n){return jr(p([y("last",ni(n.fw)),y("rest",o(dt,ni,n.bn))]))},dg=function(n){return jr(p([y("playerCube",vl(n.cU)),y("playerPath",lo(n.el)),y("levelEditingCube",vl(n.dN)),y("levelEditingPath",lo(n.bT)),y("calculatedSolutions",o(dt,lo,n.dn))]))},mg=$(function(n,e){return W(e,{cl:o(pu,2,o($g,o(K,Oi,dg),n))})}),pg=function(n){var e=n;return un(Tn(e.l),un(p([e.n]),e.q))},gg=$(function(n,e){var r=e,a=pg(r),t=o(ra,oe(a)+1,n),i=o(ji,t-1,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:Tn(o(ju,t-1,a)),n:c}}else return r}),hg=function(n){var e=n,r=e.q;if(r.b){var a=r.a,t=r.b;return U({q:t,l:o(k,e.n,e.l),n:a})}else return J},bg=function(n){var e=n,r=e.l;if(r.b){var a=r.a,t=r.b;return U({q:o(k,e.n,e.q),l:t,n:a})}else return J},Ag=$(function(n,e){var r=e;return{q:o(X,n,r.q),l:o(X,n,r.l),n:n(r.n)}}),_g=$(function(n,e){var r=e;return W(r,{n:n(r.n)})}),wg=function(n){var e=n,r=e.q;if(r.b){var a=r.a,t=r.b;return W(e,{q:t,l:o(k,a,e.l)})}else return W(e,{q:Tn(e.l),l:S})},yg=function(n){var e=n,r=e.l;if(r.b){var a=r.a,t=r.b;return W(e,{l:t,n:a})}else{var i=e.q;if(i.b){var a=i.a,t=i.b;return W(e,{q:t,n:a})}else return e}},xg=$(function(n,e){return W(e,{cm:n})}),Sg=function(n){return W(n,{bQ:!n.bQ,c4:0})},Cg=w(function(n,e,r){var a=r.o;switch(e.$){case 0:return W(r,{o:Sg(r.o),a:o(Ag,Oi,r.a),c4:$t});case 1:return W(r,{a:o(_g,function(l){return W(l,{dn:ug(Mn(r.a))})},r.a)});case 2:var t=e.a;return W(r,{o:W(a,{eg:U(t)})});case 3:return W(r,{o:W(a,{eg:J})});case 4:var i=e.a;return W(r,{a:o(gg,i,r.a)});case 5:return W(r,{a:o(pn,r.a,bg(r.a))});case 6:return W(r,{a:o(pn,r.a,hg(r.a))});case 7:return W(r,{a:o(Qp,i$,r.a)});case 8:return W(r,{a:yg(r.a)});case 9:return W(r,{a:wg(r.a)});case 10:return W(r,{o:o(mg,r.a,r.o)});case 11:return W(r,{a:o(Ei,r.a,o(e$,o$(t$),r.o.cm))});default:var c=e.a;return W(r,{o:o(xg,c,r.o)})}}),ja=ie("br"),Hr=ie("p"),Ur=ie("span"),Pg=$(function(n,e){return o(V,p([o(on,"position","fixed"),o(on,"width","100%"),o(on,"text-align","center"),o(on,"font-size","14px")]),p([o(V,p([F("text-lg font-bold")]),p([ln("The Red-Faced Cube")])),o(Hr,p([F("font-bold italic")]),p([o(Hr,S,p([ln("A puzzle from the book Mathematical Carnival")])),o(Hr,S,p([ln("(1975, Martin Gardner)")]))])),o(Hr,p([F("text-xs")]),p([o(Ur,function(){var r=e.c4;if(r.$===2){r.a.aj;var a=r.a.df;return a?S:p([o(on,"background-color","red")])}else return S}(),p([ln(" Visit each cell exactly once.")])),o(ja,S,S),o(Ur,S,p([ln("End with the cube red side up on the (marked) finish cell.")])),o(ja,S,S),o(Ur,function(){var r=e.c4;if(r.$===2){r.a.aj;var a=r.a.df;return a===1?p([o(on,"background-color","red")]):S}else return S}(),p([ln("At no time during the tour, however,"),o(ja,S,S),ln("is the cube allowed to rest with the red side up.")])),o(ja,S,S),o(Ur,S,p([ln("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Ji=function(n){return n},qi=w(function(n,e,r){return Y(r,n)<0?n:Y(r,e)>0?e:r}),Lg=function(n){var e=n;return e},zg=function(n){var e=m(qi,1667,25e3,Lg(n)),r=e<=4e3?-.2661239*1e9/(e*e*e)-.2343589*1e6/(e*e)+.8776956*1e3/e+.17991:-3.0258469*1e9/(e*e*e)+2.1070379*1e6/(e*e)+.2226347*1e3/e+.24039,a=e<=2222?-1.1063814*(r*r*r)-1.3481102*(r*r)+2.18555832*r-.20219683:e<=4e3?-.9549476*(r*r*r)-1.37418593*(r*r)+2.09137015*r-.16748867:3.081758*(r*r*r)-5.8733867*(r*r)+3.75112997*r-.37001483;return Ji({gh:r,gl:a})},kg=function(n){return n},Tg=function(n){return{$:0,a:n}},Mg=Tg,jg={$:3},Dg=jg,Fg=B(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),Vg=Fg,Bg=function(n){return{$:1,a:n}},Eg=Bg,Rg=function(n){return o(Je,"height",yn(n))},Wg=function(n){return pf(Af(n))},Ng=Wg,Gg=function(n){return{$:2,a:n}},Hg=Gg,S$=function(n){return o(er,"",n)},Ug=function(n){var e=n.a,r=n.b,a=n.c,t=n.d,i=function(l){return qn(l*1e3)/1e3},c=function(l){return qn(l*1e4)/100};return S$(p(["rgba(",Pn(c(e)),"%,",Pn(c(r)),"%,",Pn(c(a)),"%,",Pn(i(t)),")"]))},Ig=$(function(n,e){switch(e.$){case 0:return o(gd,n,e);case 1:return o(hd,n,e);case 2:return o(bd,n,e);case 3:return o(Ad,n,e);case 4:return o(_d,n,e);default:return o(wd,n,e)}}),Og=$(function(n,e){switch(e.$){case 0:return o(Jf,n,e);case 1:return o(qf,n,e);case 2:return o(Zf,n,e);case 3:return o(Yf,n,e);case 4:return o(Xf,n,e);case 5:return o(Qf,n,e);case 6:return o(Kf,n,e);case 7:return o(nd,n,e);default:return ed(n)}}),Jg=w(function(n,e,r){return m(pd,n,e,r)}),sl=function(n){var e=n;return e},Dr=jd,uo=L(Dr,1,1,1,1),ve=w(function(n,e,r){return o(X,function(a){return o(a,e,r)},n)}),qg=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Zg=$(function(n,e){var r=n,a=e.gh,t=e.gl;return m(qg,r*a/t,r,r*(1-a-t)/t)}),ba=Pd,Yg=function(n){var e=n.a,r=n.b,a=n.c;return m(ba,3.2406*e-1.5372*r-.4986*a,-.9689*e+1.8758*r+.0415*a,.0557*e-.204*r+1.057*a)},Wt=$(function(n,e){return Yg(o(Zg,n,e))}),C$=$(function(n,e){return{dH:tn(n.dH,e.dH),u:n.u*e.u+n.v*e.x+n.w*e.A,v:n.u*e.v+n.v*e.y+n.w*e.B,w:n.u*e.w+n.v*e.z+n.w*e.C,x:n.x*e.u+n.y*e.x+n.z*e.A,y:n.x*e.v+n.y*e.y+n.z*e.B,z:n.x*e.w+n.y*e.z+n.z*e.C,A:n.A*e.u+n.B*e.x+n.C*e.A,B:n.A*e.v+n.B*e.y+n.C*e.B,C:n.A*e.w+n.B*e.z+n.C*e.C,K:e.K+(n.K*e.u+n.L*e.x+n.M*e.A)*e.b4,L:e.L+(n.K*e.v+n.L*e.y+n.M*e.B)*e.b4,M:e.M+(n.K*e.w+n.L*e.z+n.M*e.C)*e.b4,b4:n.b4*e.b4}}),se=Rd,Xg=function(n){return se({dS:n.u,dT:n.x,dU:n.A,dV:n.K,dW:n.v,dX:n.y,dY:n.B,dZ:n.L,d_:n.w,d$:n.z,d0:n.C,d1:n.M,d2:0,d3:0,d4:0,d5:1})},$o=xn(function(n,e,r,a,t){var i=a.dH?1:-1,c=L(Dr,a.b4,a.b4,a.b4,i);return mn(t,n,c,Xg(a),a.dH,e,r)}),P$=Yn(function(n,e,r,a,t,i){n:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=n,v=e,s=r,f=o(C$,c,a),g=l,d=i;n=u,e=v,r=s,a=f,t=g,i=d;continue n;case 1:var b=t.b,h=o(k,C($o,n,e,r,a,b),i.P);return{P:h,Y:i.Y,fW:i.fW};case 3:var _=t.b,x=o(k,C($o,n,e,r,a,_),i.Y);return{P:i.P,Y:x,fW:i.fW};case 2:var A=t.a,P=o(k,C($o,n,e,r,a,A),i.fW);return{P:i.P,Y:i.Y,fW:P};default:var D=t.a;return m(Ae,L(P$,n,e,r,a),i,D)}}),Qg=B(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),L$=Qg,Zi=B(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),Kg=function(n){var e=n.ac,r=n._,a=n.Z;return L(Zi,518,e,r,a)},nh=$(function(n,e){return{$:6,a:n,b:e}}),eh=nh,z$=p([Kg({Z:1,_:0,ac:!1}),L(L$,!1,!1,!1,!1),o(eh,0,1)]),Cr=519,Yi=8,k$=15,_r=7681,rh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},$n=Of,ah=$(function(n,e){return{$:0,a:n,b:e}}),th=ah({du:1,dD:0,ee:5}),Un=Sd,oh=th(p([{eo:o(Un,-1,-1)},{eo:o(Un,1,-1)},{eo:o(Un,-1,1)},{eo:o(Un,1,1)}])),ih={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"eo"},uniforms:{}},ch=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:n,b:e,c:r,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Xi=w(function(n,e,r){var a=n.cZ,t=n.cx,i=n.dg,c=$(function(v,s){var f=v;return s(f)}),l=$(function(v,s){var f=v;return s(f)}),u=function(v){return o(K,c(v.bu),o(K,l(v.be),o(K,l(v.bC),l(v.bD))))};return o(u,r,o(u,e,m(ch,a,t,i)))}),Qi=function(n){return m(Xi,{cx:n.cx,cZ:n.cZ,dg:n.dg},{be:n.be,bu:n.bu,bC:n.bC,bD:n.bD},{be:n.be,bu:n.bu,bC:n.bC,bD:n.bD})},Ki=function(n){return C($n,p([Qi(n),L(L$,!1,!1,!1,!1)]),ih,rh,oh,{})},lh=Ki({be:_r,cx:0,cZ:Yi,bu:Cr,dg:k$,bC:_r,bD:_r}),uh=516,fl=5386,Bn=7680,$h=function(n){return o(Ne,2,n+4)},T$=function(n){return Ki({be:Bn,cx:k$,cZ:Yi,bu:uh,dg:$h(n),bC:fl,bD:fl})},vh=w(function(n,e,r){return ae(p([m(ve,n,r,z$),p([T$(e),lh])]))}),sh=$(function(n,e){return ae(o(St,vh(n),e))}),fh=function(n){var e=n.ac,r=n._,a=n.Z;return L(Zi,513,e,r,a)},dh=fh({Z:1,_:0,ac:!0}),mh=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:n,b:e,c:r,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},ph=function(n){var e=n.b2,r=n.bN,a=n.bH,t=n.bE,i=n.bJ,c=n.aM,l=$(function(u,v){var s=u.a,f=u.b,g=u.c,d=v.a,b=v.b,h=v.c;return mh(s)(f)(g)(d)(b)(h)(e)(r)(a)(t)});return o(l,i,c)},gh=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),dl=$(function(n,e){var r=n,a=e;return m(gh,32774,r,a)}),hh=1,ml=771,bh=770,nc=ph({bE:0,aM:o(dl,hh,ml),bH:0,bJ:o(dl,bh,ml),bN:0,b2:0}),fr=p([dh,nc]),Ah=function(n){var e=n;return e.d7},_h=function(n){var e=n;return e.d8},M$=function(n){var e=n;return e.d9},wh=function(n){var e=n;return e.ea},yh=function(n){var e=n;return e.eb},j$=function(n){var e=n;return e.ec},Se=$(function(n,e){var r=n,a=e;return a-r}),D$=function(n){return M(o(Se,wh(n),Ah(n)),o(Se,yh(n),_h(n)),o(Se,j$(n),M$(n)))},xh=function(n){return n},Sh=function(n){return Ce({cK:xh({gh:n.K,gl:n.L,dj:n.M}),dh:pe({gh:n.u,gl:n.v,dj:n.w}),di:pe({gh:n.x,gl:n.y,dj:n.z}),dk:pe({gh:n.A,gl:n.B,dj:n.C})})},vo=$(function(n,e){var r=n,a=e,t=r.dk,i=t,c=r.di,l=c,u=r.dh,v=u;return{gh:a.gh*v.gh+a.gl*v.gl+a.dj*v.dj,gl:a.gh*l.gh+a.gl*l.gl+a.dj*l.dj,dj:a.gh*i.gh+a.gl*i.gl+a.dj*i.dj}}),F$=$(function(n,e){var r=n,a=e,t=r.cK,i=t,c=a.gh-i.gh,l=a.gl-i.gl,u=a.dj-i.dj,v=r.dk,s=v,f=r.di,g=f,d=r.dh,b=d;return{gh:c*b.gh+l*b.gl+u*b.dj,gl:c*g.gh+l*g.gl+u*g.dj,dj:c*s.gh+l*s.gl+u*s.dj}}),V$=$(function(n,e){return{cK:o(F$,n,lr(e)),dh:o(vo,n,Ze(e)),di:o(vo,n,Ye(e)),dk:o(vo,n,Xe(e))}}),ta=w(function(n,e,r){return{gh:n,gl:e,dj:r}}),mt=function(n){var e=n;return e},bn=$(function(n,e){var r=n,a=e;return o(On,r,a)}),wn=$(function(n,e){var r=n,a=e;return o(Ar,r,a)}),Ch=$(function(n,e){var r=mt(e),a=mt(n);return{d7:o(bn,a.d7,r.d7),d8:o(bn,a.d8,r.d8),d9:o(bn,a.d9,r.d9),ea:o(wn,a.ea,r.ea),eb:o(wn,a.eb,r.eb),ec:o(wn,a.ec,r.ec)}}),te=function(n){var e=n;return e},Ph=function(n){var e=n;return M(e.gh,e.gl,e.dj)},Yr=$(function(n,e){var r=n,a=e;return a+r}),Lh=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=Ja(vn(a)),c=Ja(vn(r)),l=Ja(vn(t)),u=Ph(e),v=u.a,s=u.b,f=u.c;return{d7:o(Yr,c,v),d8:o(Yr,i,s),d9:o(Yr,l,f),ea:o(Se,c,v),eb:o(Se,i,s),ec:o(Se,l,f)}}),pl=B(function(n,e,r,a){var t=r.eY,i=2*r.fk*e,c=2*r.fj*e,l=2*r.fi*e,u=t.dj*e,v=t.gl*e,s=t.gh*e,f=te(Xe(n)),g=Q(l*f.gh)+Q(c*f.gl)+Q(i*f.dj),d=te(Ye(n)),b=Q(l*d.gh)+Q(c*d.gl)+Q(i*d.dj),h=te(Ze(n)),_=Q(l*h.gh)+Q(c*h.gl)+Q(i*h.dj),x=o(Lh,M(_,b,g),o(F$,n,m(ta,s,v,u)));if(a.$)return U(x);var A=a.a;return U(o(Ch,A,x))}),ei=B(function(n,e,r,a){n:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var d=n,b=e,h=r,_=i;n=d,e=b,r=h,a=_;continue n;case 1:var c=t.a,l=L(pl,n,e,c,r),d=n,b=e,h=l,_=i;n=d,e=b,r=h,a=_;continue n;case 2:var d=n,b=e,h=r,_=i;n=d,e=b,r=h,a=_;continue n;case 3:var c=t.a,l=L(pl,n,e,c,r),d=n,b=e,h=l,_=i;n=d,e=b,r=h,a=_;continue n;case 4:var u=t.a,d=n,b=e,h=L(ei,n,e,r,u),_=i;n=d,e=b,r=h,a=_;continue n;default:var v=t.a,s=t.b,f=o(V$,Sh(v),n),g=e*v.b4,d=n,b=e,h=L(ei,f,g,r,p([s])),_=i;n=d,e=b,r=h,a=_;continue n}}else return r}),ur=Ld,$r=zd,vr=kd,B$=function(n){return{$:4,a:n}},zh=$(function(n,e){n:for(;;)if(n.b){var r=n.a,a=n.b,t=a,i=o(k,r,e);n=t,e=i;continue n}else return e}),Aa=function(n){return B$(o(zh,n,S))},kh={dH:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,K:0,L:0,M:0,b4:1},gl=Ki({be:_r,cx:0,cZ:Yi,bu:Cr,dg:255,bC:_r,bD:_r}),Th=function(n){var e=n,r=o(On,Q(e.gh),o(On,Q(e.gl),Q(e.dj)));if(r){var a=e.dj/r,t=e.gl/r,i=e.gh/r,c=De(i*i+t*t+a*a);return c*r}else return ye},Dn={bH:0,eX:!1,bN:0,cT:0,b2:0,c9:0,gh:0,gl:0,dj:0},Qn=$(function(n,e){var r=n,a=e;return se({dS:r.gh,dT:r.b2,dU:a.gh,dV:a.b2,dW:r.gl,dX:r.bN,dY:a.gl,dZ:a.bN,d_:r.dj,d$:r.bH,d0:a.dj,d1:a.bH,d2:r.c9,d3:r.cT,d4:a.c9,d5:a.cT})}),Ir=y({bj:o(Qn,Dn,Dn),bU:o(Qn,Dn,Dn),bV:o(Qn,Dn,Dn),bW:o(Qn,Dn,Dn)},L(Dr,0,0,0,0)),E$=514,R$=function(n){var e=n.ac,r=n._,a=n.Z;return L(Zi,515,e,r,a)},W$=240,Mh=p([R$({Z:1,_:0,ac:!0}),Qi({be:Bn,cx:W$,cZ:0,bu:E$,dg:0,bC:Bn,bD:Bn}),nc]),jh=$(function(n,e){var r=n,a=e.fF,t=e.ff,i=e.eQ,c=vn(a),l=c,u=vn(t),v=u,s=r.cX;if(s.$){var g=s.a;return Bo(v)?se({dS:2/(i*g),dT:0,dU:0,dV:0,dW:0,dX:2/g,dY:0,dZ:0,d_:0,d$:0,d0:0,d1:-1,d2:0,d3:0,d4:0,d5:1}):se({dS:2/(i*g),dT:0,dU:0,dV:0,dW:0,dX:2/g,dY:0,dZ:0,d_:0,d$:0,d0:-2/(v-l),d1:-(v+l)/(v-l),d2:0,d3:0,d4:0,d5:1})}else{var f=s.a;return Bo(v)?se({dS:1/(i*f),dT:0,dU:0,dV:0,dW:0,dX:1/f,dY:0,dZ:0,d_:0,d$:0,d0:-1,d1:-2*l,d2:0,d3:0,d4:-1,d5:0}):se({dS:1/(i*f),dT:0,dU:0,dV:0,dW:0,dX:1/f,dY:0,dZ:0,d_:0,d$:0,d0:-(v+l)/(v-l),d1:-2*v*l/(v-l),d2:0,d3:0,d4:-1,d5:0})}}),Da=$(function(n,e){return(1&n>>e)===1?0:1}),Dh=function(n){return p([R$({Z:1,_:0,ac:!0}),Qi({be:Bn,cx:W$,cZ:n,bu:E$,dg:0,bC:Bn,bD:Bn}),nc])},Fh=w(function(n,e,r){return ae(o(X,function(a){var t=a<<4,i=L(Dr,o(Da,a,0),o(Da,a,1),o(Da,a,2),o(Da,a,3));return m(ve,n,y(e,i),Dh(t))},o(yr,1,o(Ne,2,r)-1)))}),wr=function(n){var e=n;return e},Vh=Wd,ec=pe({gh:0,gl:1,dj:0}),rc=ec,Bh={cK:Vn,dh:Et,di:rc,dk:Rt},_a=function(n){var e=n;return e},Eh=function(n){var e=_a(lr(n)),r=te(Xe(n)),a=te(Ye(n)),t=te(Ze(n));return se({dS:t.gh,dT:a.gh,dU:r.gh,dV:e.gh,dW:t.gl,dX:a.gl,dY:r.gl,dZ:e.gl,d_:t.dj,d$:a.dj,d0:r.dj,d1:e.dj,d2:0,d3:0,d4:0,d5:1})},Rh=$(function(n,e){var r=e;return Eh(o(V$,r,n))}),Wh=function(n){return o(Rh,Bh,n)},Nh=function(n){var e=n;return e.de},Gh=function(n){var e=n;return Ze(e)},Hh=function(n){var e=n;return Ye(e)},Uh=function(n){var e=Nh(n.eV),r=Ce({cK:Xo(e),dh:Gh(e),di:Hh(e),dk:Ve(Qo(e))}),a=Aa(n.aU),t=a,i=L(ei,r,1,J,p([t]));if(i.$===1)return S;var c=i.a,l=Wh(e),u=o(rn,.99,o(bn,vn(n.e_),ft(M$(c)))),v=D$(c),s=v.a,f=v.b,g=v.c,d=Th(m(Ii,s,f,g)),b=o(rn,1.01,o(Yr,d,ft(j$(c)))),h=o(jh,n.eV,{eQ:n.eQ,ff:b,fF:u}),_=Vh(h).d5,x=_?te(Ve(Qo(e))):wr(Xo(e)),A=function(){var fn=n.f7;switch(fn.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var Sn=fn.a;return y(3,Sn);case 4:var Sn=fn.a;return y(4,Sn);default:return y(5,0)}}(),P=A.a,D=A.b,I=n.fd,G=I,N=o(Wt,G,n.ge),H=N,O=se({dS:0,dT:x.gh,dU:ur(H),dV:n.eB,dW:0,dX:x.gl,dY:$r(H),dZ:qa(d),d_:0,d$:x.dj,d0:vr(H),d1:P,d2:0,d3:_,d4:0,d5:D}),E=mn(P$,O,l,h,kh,t,{P:S,Y:S,fW:S}),nn=n.fz;switch(nn.$){case 0:var an=nn.a;return ae(p([m(ve,E.P,y(an,uo),fr),m(ve,E.Y,Ir,fr)]));case 1:var an=nn.a;return ae(p([m(ve,E.P,Ir,fr),p([gl]),m(ve,E.fW,an.bj,z$),p([T$(0)]),m(ve,E.P,y(an,uo),Mh),m(ve,E.Y,Ir,fr)]));default:var gn=nn.a,An=nn.b;return ae(p([m(ve,E.P,y(An,uo),fr),p([gl]),o(sh,E.fW,gn),m(Fh,E.P,An,oe(gn)),m(ve,E.Y,Ir,fr)]))}},Ih=function(n){return o(Je,"width",yn(n))},Oh=$(function(n,e){var r=p([Eg(1),Hg(0),Mg(!0),L(Vg,0,0,0,0)]),a=function(){var P=n.eO;switch(P.$){case 0:return M(r,"0",1);case 1:return M(o(k,Dg,r),"1",1);default:var D=P.a;return M(r,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=n.aP,u=l.a,v=l.b,s=sl(v),f=o(on,"height",yn(s)+"px"),g=sl(u),d=g/s,b=o(ha,function(P){return Uh({eQ:d,eV:n.eV,e_:n.e_,aU:P.aU,fd:P.fd,fz:P.fz,eB:c,f7:P.f7,ge:P.ge})},e),h=o(on,"width",yn(g)+"px"),_=n.aN,x=_,A=Ug(x);return m(Ng,"div",p([o(on,"padding","0px"),h,f]),p([y(i,m(Jg,t,p([Ih(qn(g*c)),Rg(qn(s*c)),h,f,o(on,"display","block"),o(on,"background-color",A)]),b))]))}),Jh=function(n){return{$:2,a:n}},qh=function(n){return Jh(n)},Zh=function(n){return o(Oh,{eO:qh(n.ch),aN:n.aN,eV:n.eV,e_:n.e_,aP:n.aP},p([{aU:n.aU,fd:n.fd,fz:n.fz,f7:n.f7,ge:n.ge}]))},hl=function(n){return n},Yh=function(n){var e=n;return e},Nt=function(n){var e=n;return Yh(e.eR)},N$=B(function(n,e,r,a){return{$:2,a:n,b:e,c:r,d:a}}),Xh=B(function(n,e,r,a){return{$:3,a:n,b:e,c:r,d:a}}),G$=B(function(n,e,r,a){return{$:4,a:n,b:e,c:r,d:a}}),H$=B(function(n,e,r,a){return{$:6,a:n,b:e,c:r,d:a}}),Qh=B(function(n,e,r,a){return{$:7,a:n,b:e,c:r,d:a}}),Kh=B(function(n,e,r,a){return{$:5,a:n,b:e,c:r,d:a}}),n3=B(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),ac=function(n){switch(n.$){case 0:return n;case 1:var r=n.a,e=n.b,t=n.c;return L(n3,r,e,t,1);case 2:var r=n.a,e=n.b,t=n.c;return L(N$,r,e,t,1);case 3:var r=n.a,a=n.b,t=n.c;return L(Xh,r,a,t,1);case 4:var r=n.a,a=n.b,t=n.c;return L(G$,r,a,t,1);case 5:var r=n.a,a=n.b,t=n.c;return L(Kh,r,a,t,1);case 6:var r=n.a,a=n.b,t=n.c;return L(H$,r,a,t,1);case 7:var r=n.a,a=n.b,t=n.c;return L(Qh,r,a,t,1);case 8:return n;case 9:return n;default:return n}},tc={$:0},e3=cn(function(n,e,r,a,t,i,c,l){n:for(;;)if(l.b){var u=l.a,v=l.b,s=mt(c(u)),f=o(wn,s.ea,n),g=o(bn,s.d7,e),d=o(wn,s.eb,r),b=o(bn,s.d8,a),h=o(wn,s.ec,t),_=o(bn,s.d9,i),x=c,A=v;n=f,e=g,r=d,a=b,t=h,i=_,c=x,l=A;continue n}else return{d7:e,d8:a,d9:i,ea:n,eb:r,ec:t}}),r3=w(function(n,e,r){var a=mt(n(e));return _t(e3,a.ea,a.d7,a.eb,a.d8,a.ec,a.d9,n,r)}),so=$(function(n,e){var r=n,a=e;return Y(a,r)<1}),U$=function(n){return o(so,n.d7,n.ea)&&o(so,n.d8,n.eb)&&o(so,n.d9,n.ec)?n:{d7:o(bn,n.ea,n.d7),d8:o(bn,n.eb,n.d8),d9:o(bn,n.ec,n.d9),ea:o(wn,n.ea,n.d7),eb:o(wn,n.eb,n.d8),ec:o(wn,n.ec,n.d9)}},oa=function(n){var e=n;return e},I$=function(n){var e=oa(n),r=e.a,a=e.b,t=e.c,i=Be(r),c=Ee(r),l=Re(r),u=Be(a),v=Ee(a),s=Re(a),f=Be(t),g=Ee(t),d=Re(t);return U$({d7:o(bn,i,o(bn,u,f)),d8:o(bn,c,o(bn,v,g)),d9:o(bn,l,o(bn,s,d)),ea:o(wn,i,o(wn,u,f)),eb:o(wn,c,o(wn,v,g)),ec:o(wn,l,o(wn,s,d))})},O$=Td,Rn=function(n){return O$(_a(n))},J$=function(n){var e=n;return e},Gt=function(n){return O$(J$(n))},a3=$(function(n,e){var r=n,a=e;return{gh:a.gl*r.dj-a.dj*r.gl,gl:a.dj*r.gh-a.gh*r.dj,dj:a.gh*r.gl-a.gl*r.gh}}),ri=$(function(n,e){var r=n,a=e;return{gh:a.gh-r.gh,gl:a.gl-r.gl,dj:a.dj-r.dj}}),q$=function(n){return n},t3={gh:0,gl:0,dj:0},o3=$(function(n,e){var r=n,a=e,t=o(On,Q(a.gh),o(On,Q(a.gl),Q(a.dj)));if(t){var i=a.dj/t,c=a.gl/t,l=a.gh/t,u=De(l*l+c*c+i*i);return{gh:r*l/u,gl:r*c/u,dj:r*i/u}}else return t3}),i3=o3(q$(1)),Z$=w(function(n,e,r){var a=o(ri,e,r),t=o(ri,n,e);return i3(o(a3,a,t))}),c3=function(n){var e=oa(n),r=e.a,a=e.b,t=e.c,i=Gt(m(Z$,r,a,t));return M({s:i,eo:Rn(r)},{s:i,eo:Rn(a)},{s:i,eo:Rn(t)})},l3=$(function(n,e){return{$:2,a:n,b:e}}),Y$=l3({du:3,dD:0,ee:4}),u3=function(n){if(n.b){var e=n.a,r=n.b,a=Y$(o(X,c3,n)),t=m(r3,I$,e,r);return L(N$,t,n,a,0)}else return tc},Xn=w(function(n,e,r){return M(n,e,r)}),Cn=w(function(n,e,r){var a=n,t=e,i=r;return{gh:a,gl:t,dj:i}}),X$=function(){var n=Gn(1),e=Gn(1),r=Gn(1),a=o(rn,-.5,n),t=o(rn,-.5,e),i=o(rn,-.5,r),c=m(Cn,i,t,a),l=o(rn,.5,n),u=m(Cn,i,t,l),v=o(rn,.5,e),s=m(Cn,i,v,a),f=m(Cn,i,v,l),g=o(rn,.5,r),d=m(Cn,g,t,a),b=m(Cn,g,v,a),h=m(Cn,g,t,l),_=m(Cn,g,v,l);return ac(u3(p([m(Xn,c,b,d),m(Xn,c,s,b),m(Xn,u,h,_),m(Xn,u,_,f),m(Xn,d,b,_),m(Xn,d,_,h),m(Xn,c,f,s),m(Xn,c,u,f),m(Xn,c,d,h),m(Xn,c,h,u),m(Xn,s,_,b),m(Xn,s,f,_)])))}(),Fa={$:0},$3=w(function(n,e,r){return{$:1,a:n,b:e,c:r}}),v3=w(function(n,e,r){var a=e.a,t=e.b,i=e.c,c=n(i),l=n(t),u=n(a),v=Gt(m(Z$,u,l,c)),s={s:v,eo:Rn(u)},f={s:v,eo:Rn(l)},g={s:v,eo:Rn(c)};return o(k,s,o(k,f,o(k,g,r)))}),oc=function(n){var e=n;return e.G},s3=B(function(n,e,r,a){if(e.$===1)return J;var t=e.a;if(r.$===1)return J;var i=r.a;if(a.$===1)return J;var c=a.a;return U(m(n,t,i,c))}),ai=4294967295>>>32-na,ti=Iv,f3=w(function(n,e,r){n:for(;;){var a=ai&e>>>n,t=o(ti,a,r);if(t.$){var v=t.a;return o(ti,ai&e,v)}else{var i=t.a,c=n-na,l=e,u=i;n=c,e=l,r=u;continue n}}}),d3=function(n){return n>>>5<<5},m3=$(function(n,e){var r=e.a,a=e.b,t=e.c,i=e.d;return n<0||Y(n,r)>-1?J:Y(n,d3(r))>-1?U(o(ti,ai&n,i)):U(m(f3,a,n,t))}),ic=function(n){var e=n;return e.am},fo=$(function(n,e){return o(m3,n,ic(e))}),p3=function(n){var e=function(r){var a=r.a,t=r.b,i=r.c;return L(s3,w(function(c,l,u){return M(c,l,u)}),o(fo,a,n),o(fo,t,n),o(fo,i,n))};return o(ma,e,oc(n))},g3=w(function(n,e,r){n:for(;;){var a=o(Li,In,n),t=a.a,i=a.b;if(Y(Do(t),In)<0)return o(Su,!0,{D:e,p:r,t});var c=i,l=o(k,yu(t),e),u=r+1;n=c,e=l,r=u;continue n}}),cc=function(n){return n.b?m(g3,n,S,0):_u},h3=w(function(n,e,r){return n(e(r))}),b3=$(function(n,e){return!o(Tt,o(h3,Am,n),e)}),A3=function(n){var e=n.a;return e},Q$=$(function(n,e){var r=A3(n),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Y(i,r)<0&&c>=0&&Y(c,r)<0&&l>=0&&Y(l,r)<0};return o(b3,a,e)?{G:e,am:n}:{G:o(Mr,a,e),am:n}}),_3=w(function(n,e,r){return{$:3,a:n,b:e,c:r}}),wa=_3({du:1,dD:3,ee:4}),Za=$(function(n,e){var r=wr(e),a=wr(n);return y(M(a.gh,a.gl,a.dj),M(r.gh,r.gl,r.dj))}),bl=m(ba,0,0,0),mo=Yn(function(n,e,r,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(sa,o(Za,n,e),t);if(v.$){var f={s:bl,eo:Rn(e)},g={s:bl,eo:Rn(n)},d=u+1,b=u;return M(o(k,M(r,b,d),o(k,M(r,d,a),c)),o(k,f,o(k,g,l)),u+2)}else{var s=v.a;return M(o(k,M(r,s,a),c),l,u)}}),w3=xn(function(n,e,r,a,t){n:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=n(u),f=n(l),g=n(c),d=a+2,b=a+1,h=a,_=n,x=e,A=v,P=a+3,D=mn(mo,s,g,d,h,e,mn(mo,f,s,b,d,e,mn(mo,g,f,h,b,e,t)));n=_,e=x,r=A,a=P,t=D;continue n}else{var I=t,G=I.a,N=I.b;return y(G,Tn(N))}}),y3=xn(function(n,e,r,a,t){n:for(;;)if(e.b){var i=e.a,c=i.a,l=i.b,u=i.c,v=e.b,s=n(u),f=n(l),g=n(c),d=r+2,b=r+1,h=r,_=m(hr,o(Za,g,s),d,m(hr,o(Za,s,f),b,m(hr,o(Za,f,g),h,t))),x=o(k,M(h,b,d),a),A=n,P=v,D=r+3,I=x,G=_;n=A,e=P,r=D,a=I,t=G;continue n}else return M(a,t,r)}),nr=w(function(n,e,r){var a=p3(r),t=m(ze,v3(e),S,a),i=C(y3,e,a,0,S,Wi),c=i.a,l=i.b,u=i.c,v=C(w3,e,l,a,0,M(c,S,u)),s=v.a,f=v.b,g=Ri(f)?t:un(t,f);return m($3,n,o(Q$,cc(g),s),o(wa,g,s))}),oi=function(n){return{G:o(X,function(e){return M(3*e,3*e+1,3*e+2)},o(yr,0,oe(n)-1)),am:cc(ae(o(X,function(e){var r=e.a,a=e.b,t=e.c;return p([r,a,t])},n)))}},K$=function(n){switch(n.$){case 0:return Fa;case 1:var a=n.a,e=n.b,r=o(X,oa,e);return m(nr,a,Nn,oi(r));case 2:var a=n.a,e=n.b,r=o(X,oa,e);return m(nr,a,Nn,oi(r));case 3:var a=n.a,t=n.b;return m(nr,a,Nn,t);case 4:var a=n.a,t=n.b;return m(nr,a,function(i){return i.eo},t);case 5:var a=n.a,t=n.b;return m(nr,a,function(i){return i.eo},t);case 6:var a=n.a,t=n.b;return m(nr,a,function(i){return i.eo},t);case 7:var a=n.a,t=n.b;return m(nr,a,function(i){return i.eo},t);case 8:return Fa;case 9:return Fa;default:return Fa}},Al=K$(X$),Ht=function(n){var e=n;return e.aP},nv={$:0},T=nv,kn=$(function(n,e){return{$:1,a:n,b:e}}),x3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bK"}},S3=1029,C3=function(n){return{$:5,a:n}},ev=function(n){var e=n;return C3(e)},P3=ev(S3),L3=1028,z3=ev(L3),Wn=w(function(n,e,r){return e===1?n?o(k,P3,r):o(k,z3,r):r}),rv={src:`
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
    `,attributes:{position:"eo",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},po=B(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,s,f){return C($n,m(Wn,l,a,f),rv,x3,r,{bK:n,c,d:i,e:v,f:t,g:u})}))}),lc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aB"}},av={src:`
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
    `,attributes:{position:"eo"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},_e=B(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,s,f){return C($n,m(Wn,l,a,f),av,lc,r,{aB:n,c,d:i,e:v,f:t,g:u})}))}),tv=$(function(n,e){return{$:3,a:n,b:e}}),k3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aB",pointRadius:"b0",sceneProperties:"f"}},ov={src:`
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
    `,attributes:{position:"eo"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"b0",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},T3=B(function(n,e,r,a){return o(tv,r,cn(function(t,i,c,l,u,v,s,f){return C($n,f,ov,k3,a,{aB:n,c,d:i,b0:e,e:v,f:t,g:u})}))}),uc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aS",sceneProperties:"f"}},ya=function(n){var e=n;return e},Ut=Md,we=xn(function(n,e,r,a,t){return o(kn,r,cn(function(i,c,l,u,v,s,f,g){return C($n,m(Wn,u,t,g),av,uc,a,{aS:o(Ut,ya(e),n),c:l,d:c,e:s,f:i,g:v})}))}),M3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aS",pointRadius:"b0",sceneProperties:"f"}},j3=xn(function(n,e,r,a,t){return o(tv,a,cn(function(i,c,l,u,v,s,f,g){return C($n,g,ov,M3,t,{aS:o(Ut,ya(e),n),c:l,d:c,b0:r,e:s,f:i,g:v})}))}),iv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",materialColor:"cy",sceneProperties:"f",viewMatrix:"g"}},cv={src:`
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
    `,attributes:{normal:"s",position:"eo"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Va=B(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,s,f){var g=s.a,d=s.b;return C($n,m(Wn,l,a,f),cv,iv,r,{S:d,bj:g.bj,bU:g.bU,bV:g.bV,bW:g.bW,cy:n,c,d:i,e:v,f:t,g:u})}))}),lv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",materialColorTexture:"cz",normalMapTexture:"a$",sceneProperties:"f",useNormalMap:"a4",viewMatrix:"g"}},uv={src:`
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
    `,attributes:{normal:"s",position:"eo",tangent:"eD",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},D3=Yn(function(n,e,r,a,t,i){return o(kn,a,cn(function(c,l,u,v,s,f,g,d){var b=g.a,h=g.b;return C($n,m(Wn,v,i,d),uv,lv,t,{S:h,bj:b.bj,bU:b.bU,bV:b.bV,bW:b.bW,cz:n,c:u,d:l,a$:e,e:f,f:c,a4:r,g:s})}))}),$v={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cc",constantBaseColor:"ce",constantMetallic:"cf",constantRoughness:"cg",enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",metallicTexture:"cD",normalMapTexture:"a$",roughnessTexture:"c1",sceneProperties:"f",useNormalMap:"a4",viewMatrix:"g"}},F3=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(kn,u,cn(function(f,g,d,b,h,_,x,A){var P=x.a,D=x.b;return C($n,m(Wn,b,s,A),uv,$v,v,{cc:n,ce:e,cf:i,cg:a,S:D,bj:P.bj,bU:P.bU,bV:P.bV,bW:P.bW,cD:t,c:d,d:g,a$:c,e:_,c1:r,f,a4:l,g:h})}))}}}}}}}}}}},vv={src:`
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
    `,attributes:{},uniforms:{baseColor:"cb",enabledLights:"S",lights12:"bj",lights34:"bU",lights56:"bV",lights78:"bW",metallic:"cC",roughness:"c0",sceneProperties:"f",viewMatrix:"g"}},Ba=Yn(function(n,e,r,a,t,i){return o(kn,a,cn(function(c,l,u,v,s,f,g,d){var b=g.a,h=g.b;return C($n,m(Wn,v,i,d),cv,vv,t,{cb:n,S:h,bj:b.bj,bU:b.bU,bV:b.bV,bW:b.bW,cC:r,c:u,d:l,e:f,c0:e,f:c,g:s})}))}),V3=function(n){return{$:0,a:n}},_l=$(function(n,e){return{$:1,a:n,b:e}}),Xr=$(function(n,e){if(e.$){var r=e.a.F;return y(r,1)}else return e.a,y(n,0)}),B3=function(n){return L(Dr,ur(n),$r(n),vr(n),1)},$c=L(Dr,0,0,0,0),Ya=$(function(n,e){if(e.$){var a=e.a.F;return y(a,$c)}else{var r=e.a;return y(n,B3(r))}}),sv=$(function(n,e){var r=y(n,e);if(r.a.$){var t=r.a.a.F;return o(_l,y(t,$c),o(Xr,t,e))}else if(r.b.$){var t=r.b.a.F;return o(_l,o(Ya,t,n),o(Xr,t,e))}else{var a=r.a.a;return r.b.a,V3(a)}}),E3=w(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Ea=B(function(n,e,r,a){return{$:1,a:n,b:e,c:r,d:a}}),R3=B(function(n,e,r,a){return{$:0,a:n,b:e,c:r,d:a}}),W3=function(n){return o(Un,n,1)},ii=o(Un,0,0),dr=$(function(n,e){if(e.$){var a=e.a.F;return y(a,ii)}else{var r=e.a;return y(n,W3(r))}}),fv=B(function(n,e,r,a){var t=L(R3,n,e,r,a);if(t.a.$){var u=t.a.a.F;return L(Ea,y(u,$c),o(dr,u,e),o(dr,u,r),o(Xr,u,a))}else if(t.b.$){var u=t.b.a.F;return L(Ea,o(Ya,u,n),y(u,ii),o(dr,u,r),o(Xr,u,a))}else if(t.c.$){var u=t.c.a.F;return L(Ea,o(Ya,u,n),o(dr,u,e),y(u,ii),o(Xr,u,a))}else if(t.d.$){var u=t.d.a.F;return L(Ea,o(Ya,u,n),o(dr,u,e),o(dr,u,r),y(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,m(E3,i,c,l)}}),N3={src:`
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
    `,attributes:{},uniforms:{backlight:"b9",colorTexture:"bK",sceneProperties:"f"}},go=xn(function(n,e,r,a,t){return o(kn,r,cn(function(i,c,l,u,v,s,f,g){return C($n,m(Wn,u,t,g),rv,N3,a,{b9:ya(e),bK:n,c:l,d:c,e:s,f:i,g:v})}))}),dv={src:`
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
    `,attributes:{normal:"s",position:"eo",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},G3=B(function(n,e,r,a){return o(kn,e,cn(function(t,i,c,l,u,v,s,f){var g=s.a,d=s.b;return C($n,m(Wn,l,a,f),dv,lv,r,{S:d,bj:g.bj,bU:g.bU,bV:g.bV,bW:g.bW,cz:n,c,d:i,a$:n,e:v,f:t,a4:0,g:u})}))}),H3=vi(function(n,e,r,a,t,i,c,l,u){return o(kn,c,cn(function(v,s,f,g,d,b,h,_){var x=h.a,A=h.b;return C($n,m(Wn,g,u,_),dv,$v,l,{cc:n,ce:e,cf:i,cg:a,S:A,bj:x.bj,bU:x.bU,bV:x.bV,bW:x.bW,cD:t,c:f,d:s,a$:n,e:b,c1:r,f:v,a4:0,g:d})}))}),ia=w(function(n,e,r){var a=n,t=e;return r<=.5?a+r*(t-a):t+(1-r)*(a-t)}),U3=function(n){var e=n;return m(ia,e.ea,e.d7,.5)},I3=function(n){var e=n;return m(ia,e.eb,e.d8,.5)},O3=function(n){var e=n;return m(ia,e.ec,e.d9,.5)},J3=function(n){return m(Cn,U3(n),I3(n),O3(n))},q=function(n){var e=D$(n),r=e.a,a=e.b,t=e.c;return{eY:_a(J3(n)),fi:r/2,fj:a/2,fk:t/2}},vc=$(function(n,e){switch(n.$){case 0:if(n.b.$){n.a;var l=n.b.a.F;switch(e.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=e.a,c=e.c,a=e.d;return L(po,l,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return L(po,l,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return L(po,l,q(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var r=n.b.a;switch(e.$){case 0:return T;case 1:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 2:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 3:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 4:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 5:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return L(_e,r,q(t),c,a);case 8:var t=e.a,c=e.c;return L(_e,r,q(t),c,0);case 9:var t=e.a,c=e.c;return L(_e,r,q(t),c,0);default:var t=e.a,i=e.b,c=e.d;return L(T3,r,i,q(t),c)}}case 1:if(n.b.$){n.a;var l=n.b.a.F,v=n.c;switch(e.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=e.a,c=e.c,a=e.d;return C(go,l,v,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return C(go,l,v,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return C(go,l,v,q(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var u=n.b.a,v=n.c;switch(e.$){case 0:return T;case 1:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 2:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 3:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 4:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 5:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 6:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return C(we,u,v,q(t),c,a);case 8:var t=e.a,c=e.c;return C(we,u,v,q(t),c,0);case 9:var t=e.a,c=e.c;return C(we,u,v,q(t),c,0);default:var t=e.a,i=e.b,c=e.d;return C(j3,u,v,i,q(t),c)}}case 2:n.a;var s=n.b,G=n.c,f=o(sv,s,G);if(f.$){var b=f.a,h=b.a;b.b;var _=f.b,x=_.a,A=_.b;switch(e.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=e.a,c=e.c,d=e.d;return L(G3,h,q(t),c,d);case 7:var t=e.a,c=e.c,d=e.d;return mn(D3,h,x,A,q(t),c,d);case 8:return T;case 9:return T;default:return T}}else{var g=f.a;switch(e.$){case 0:return T;case 1:return T;case 2:var t=e.a,c=e.c,d=e.d;return L(Va,g,q(t),c,d);case 3:return T;case 4:var t=e.a,c=e.c,d=e.d;return L(Va,g,q(t),c,d);case 5:return T;case 6:var t=e.a,c=e.c,d=e.d;return L(Va,g,q(t),c,d);case 7:var t=e.a,c=e.c,d=e.d;return L(Va,g,q(t),c,d);case 8:return T;case 9:return T;default:return T}}default:n.a;var P=n.b,D=n.c,I=n.d,G=n.e,N=L(fv,P,D,I,G);if(N.$){var nn=N.a,an=nn.a,gn=nn.b,An=N.b,fn=An.a,Sn=An.b,Hn=N.c,En=Hn.a,ke=Hn.b,Te=N.d,x=Te.a,A=Te.b;switch(e.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=e.a,c=e.c,a=e.d;return Wv(H3,an,gn,fn,Sn,En,ke,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return F3(an)(gn)(fn)(Sn)(En)(ke)(x)(A)(q(t))(c)(a);case 8:return T;case 9:return T;default:return T}}else{var H=N.a,O=N.b,E=N.c;switch(e.$){case 0:return T;case 1:return T;case 2:var t=e.a,c=e.c,a=e.d;return mn(Ba,H,O,E,q(t),c,a);case 3:return T;case 4:var t=e.a,c=e.c,a=e.d;return mn(Ba,H,O,E,q(t),c,a);case 5:return T;case 6:var t=e.a,c=e.c,a=e.d;return mn(Ba,H,O,E,q(t),c,a);case 7:var t=e.a,c=e.c,a=e.d;return mn(Ba,H,O,E,q(t),c,a);case 8:return T;case 9:return T;default:return T}}}}),ho=function(n){var e=n;return e.gh},bo=function(n){var e=n;return e.gl},Ao=function(n){var e=n;return e.dj},q3=function(n){var e=n,r=Ao(e.dk),a=bo(e.dk),t=ho(e.dk),i=Ao(e.di),c=bo(e.di),l=ho(e.di),u=Ao(e.dh),v=bo(e.dh),s=ho(e.dh);return s*c*r+v*i*t+u*l*a-u*c*t-v*l*r-s*i*a>0},Z3=function(n){var e=_a(lr(n)),r=te(Xe(n)),a=te(Ye(n)),t=te(Ze(n));return{dH:q3(n),u:t.gh,v:t.gl,w:t.dj,x:a.gh,y:a.gl,z:a.dj,A:r.gh,B:r.gl,C:r.dj,K:e.gh,L:e.gl,M:e.dj,b4:1}},mr=$(function(n,e){return{$:5,a:n,b:e}}),mv=$(function(n,e){var r=e;switch(r.$){case 0:return T;case 5:var a=r.a,t=r.b,i=o(C$,a,n);return o(mr,i,t);case 1:return o(mr,n,r);case 3:return o(mr,n,r);case 2:return o(mr,n,r);default:return o(mr,n,r)}}),pv=$(function(n,e){return o(mv,Z3(n),e)}),It=function(n){return{$:2,a:n}},Y3=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=e.eY;return{eY:{gh:r*i.gh,gl:a*i.gl,dj:t*i.dj},fi:r*e.fi,fj:a*e.fj,fk:t*e.fk}}),X3=Fd,Q3=Dd,wl=function(n){return function(e){return function(r){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=n.a,f=n.b,g=n.c,d=Q3(a),b=d.gh,h=d.gl,_=d.dj,x=d.eK,A=X3({eK:x,gh:b*s,gl:h*f,dj:_*g});return _t(e,r,A,t,i,c,l,u,v)}}}}}}}}}},ci=$(function(n,e){switch(e.$){case 0:return nv;case 5:var r=e.a,a=e.b;return o(mr,r,o(ci,n,a));case 1:var t=e.a,i=e.b;return o(kn,o(Y3,n,t),o(wl,n,i));case 3:return e;case 2:var i=e.a;return It(o(wl,n,i));default:var c=e.a;return B$(o(X,ci(n),c))}}),sc=$(function(n,e){var r=e;return o(ci,n,r)}),fc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},gv=7683,hv=7682,K3=m(Xi,{cx:0,cZ:0,dg:15},{be:Bn,bu:Cr,bC:Bn,bD:gv},{be:Bn,bu:Cr,bC:Bn,bD:hv}),nb=m(Xi,{cx:0,cZ:0,dg:15},{be:Bn,bu:Cr,bC:Bn,bD:hv},{be:Bn,bu:Cr,bC:Bn,bD:gv}),dc=$(function(n,e){return n?o(k,nb,e):o(k,K3,e)}),eb={src:`
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
    `,attributes:{normal:"s",position:"eo"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b6",viewMatrix:"g"}},rb=function(n){if(n.$){var e=n.c;return U(cn(function(r,a,t,i,c,l,u,v){return C($n,o(dc,i,v),eb,fc,e,{c:t,d:a,e:l,f:r,b6:u,g:c})}))}else return J},pt=function(n){var e=rb(n);if(e.$)return T;var r=e.a;return It(r)},ab=B(function(n,e,r,a){var t=o(vc,r,X$),i=function(){var s=y(n,e);return s.a?s.b?Aa(p([t,pt(Al)])):t:s.b?pt(Al):T}(),c=Ht(a),l=c.a,u=c.b,v=c.c;return o(pv,Nt(a),o(sc,M(l,u,v),i))}),tb=$(function(n,e){return L(ab,!0,!0,n,e)}),li=function(n){return{$:0,a:n}},bv=$(function(n,e){return{$:0,a:n,b:e}}),ob=function(n){var e=Bi(n),r=e.cY,a=e.ck,t=e.cd;return m(ba,r,a,t)},ib=function(n){return o(bv,0,li(ob(n)))},mc=function(n){var e=n;return e.m},Qr=function(n){var e=n;return or(e)},cb=$(function(n,e){var r=n.eo,a=n.s;return o(k,{s:Gt(a),eo:Rn(r)},e)}),lb=At(function(n,e,r,a,t,i,c){n:for(;;)if(c.b){var l=c.a,u=c.b,v=vr(l.eo),s=$r(l.eo),f=ur(l.eo),g=o(Ar,n,f),d=o(On,e,f),b=o(Ar,r,s),h=o(On,a,s),_=o(Ar,t,v),x=o(On,i,v),A=u;n=g,e=d,r=b,a=h,t=_,i=x,c=A;continue n}else return U$({d7:e,d8:a,d9:i,ea:n,eb:r,ec:t})}),Av=$(function(n,e){var r=vr(n.eo),a=$r(n.eo),t=ur(n.eo);return si(lb,t,t,a,a,r,r,e)}),ub=function(n){var e=m(su,cb,S,ic(n));if(e.b){var r=e.a,a=e.b,t=o(wa,e,oc(n)),i=o(Av,r,a);return L(G$,i,n,t,0)}else return tc},yl=$(function(n,e){var r=n,a=e,t=r.di,i=t,c=r.dh,l=c;return{gh:a.gh*l.gh+a.gl*i.gh,gl:a.gh*l.gl+a.gl*i.gl,dj:a.gh*l.dj+a.gl*i.dj}}),gt=function(n){var e=n;return ir(e)},Or=function(n){var e=n;return e},ui=function(n){return Jn(2*ee*n)},xl=m$({cK:Vn,dh:Et,di:rc}),_v=function(){var n=72,e=o(h$,n,ui(1)),r=Gn(1),a=Or(Gi),t=Or(Ui),i=Gn(1),c=o(rn,.5,i),l=m(Cn,ye,ye,c),u=o(rn,-.5,i),v=m(Cn,ye,ye,u),s=function(d){var b=o(rn,d,e),h=Or(o(yl,xl,Ko(b))),_=o(rn,Qr(b),r),x=o(rn,gt(b),r),A=m(Cn,_,x,c),P=m(Cn,_,x,u),D=o(ra,n,d+1),I=o(rn,D,e),G=Or(o(yl,xl,Ko(I))),N=o(rn,Qr(I),r),H=o(rn,gt(I),r),O=m(Cn,N,H,u),E=m(Cn,N,H,c);return p([M({s:t,eo:v},{s:t,eo:O},{s:t,eo:P}),M({s:h,eo:P},{s:G,eo:O},{s:G,eo:E}),M({s:h,eo:P},{s:G,eo:E},{s:h,eo:A}),M({s:a,eo:l},{s:a,eo:A},{s:a,eo:E})])},f=o(X,s,o(yr,0,n-1)),g=oi(ae(f));return ac(ub(g))}(),Sl=K$(_v),$b=function(n){var e=n,r=Q(e.dj),a=Q(e.gl),t=Q(e.gh);if(Y(t,a)<1)if(Y(t,r)<1){var i=De(e.dj*e.dj+e.gl*e.gl);return{gh:0,gl:-e.dj/i,dj:e.gl/i}}else{var i=De(e.gl*e.gl+e.gh*e.gh);return{gh:-e.gl/i,gl:e.gh/i,dj:0}}else if(Y(a,r)<1){var i=De(e.dj*e.dj+e.gh*e.gh);return{gh:e.dj/i,gl:0,dj:-e.gh/i}}else{var i=De(e.gh*e.gh+e.gl*e.gl);return{gh:-e.gl/i,gl:e.gh/i,dj:0}}},vb=function(n){var e=$b(n),r=e,a=r,t=n,i=t,c={gh:i.gl*a.dj-i.dj*a.gl,gl:i.dj*a.gh-i.gh*a.dj,dj:i.gh*a.gl-i.gl*a.gh};return y(e,c)},sb=function(n){var e=Bt(n),r=vb(e),a=r.a,t=r.b;return Ce({cK:Hi(n),dh:a,di:t,dk:e})},wv=function(n){var e=n;return e.fx},yv=function(n){var e=n;return e.fP},fb=B(function(n,e,r,a){var t=sb(mc(a)),i=o(vc,r,_v),c=function(){var f=y(n,e);return f.a?f.b?Aa(p([i,pt(Sl)])):i:f.b?pt(Sl):T}(),l=yv(a),u=l,v=wv(a),s=v;return o(pv,t,o(sc,M(u,u,s),c))}),db=$(function(n,e){return L(fb,!0,!0,n,e)}),Cl={src:`
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
    `,attributes:{triangleVertex:"c8"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bz",viewMatrix:"g"}},Pl={src:`
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
    `,attributes:{triangleVertex:"c8"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bz",viewMatrix:"g"}},Jr=function(n){var e=oa(n),r=e.a,a=e.b,t=e.c,i=wr(r),c=wr(a),l=wr(t);return se({dS:i.gh,dT:c.gh,dU:l.gh,dV:0,dW:i.gl,dX:c.gl,dY:l.gl,dZ:0,d_:i.dj,d$:c.dj,d0:l.dj,d1:0,d2:0,d3:0,d4:0,d5:0})},Ra=Y$(p([M({c8:0},{c8:1},{c8:2})])),mb=$(function(n,e){var r=I$(e),a=q(r);switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.F,T;var t=n.b.a;return o(kn,a,cn(function(A,P,D,I,G,N,H,O){return C($n,m(Wn,I,0,O),Cl,lc,Ra,{aB:t,c:D,d:P,e:N,f:A,bz:Jr(e),g:G})}));case 1:if(n.b.$)return n.a,T;var i=n.b.a,c=n.c;return o(kn,a,cn(function(A,P,D,I,G,N,H,O){return C($n,m(Wn,I,0,O),Cl,uc,Ra,{aS:o(Ut,ya(c),i),c:D,d:P,e:N,f:A,bz:Jr(e),g:G})}));case 2:n.a;var l=n.b,d=n.c,u=o(sv,l,d);if(u.$)return T;var v=u.a;return o(kn,a,cn(function(A,P,D,I,G,N,H,O){var E=H.a,nn=H.b;return C($n,m(Wn,I,0,O),Pl,iv,Ra,{S:nn,bj:E.bj,bU:E.bU,bV:E.bV,bW:E.bW,cy:v,c:D,d:P,e:N,f:A,bz:Jr(e),g:G})}));default:n.a;var s=n.b,f=n.c,g=n.d,d=n.e,b=L(fv,s,f,g,d);if(b.$)return T;var h=b.a,_=b.b,x=b.c;return o(kn,a,cn(function(A,P,D,I,G,N,H,O){var E=H.a,nn=H.b;return C($n,m(Wn,I,0,O),Pl,vv,Ra,{cb:h,S:nn,bj:E.bj,bU:E.bU,bV:E.bV,bW:E.bW,cC:x,c:D,d:P,e:N,c0:_,f:A,bz:Jr(e),g:G})}))}}),pb=function(){var n=p([{a3:o(Un,0,1)},{a3:o(Un,1,1)},{a3:o(Un,2,1)},{a3:o(Un,0,-1)},{a3:o(Un,1,-1)},{a3:o(Un,2,-1)}]),e=p([M(0,1,2),M(3,5,4),M(3,4,1),M(3,1,0),M(4,5,2),M(4,2,1),M(5,3,0),M(5,0,2)]);return o(wa,n,e)}(),gb={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b6",triangleVertexPositions:"bz",viewMatrix:"g"}},Ll=function(n){return It(cn(function(e,r,a,t,i,c,l,u){return C($n,o(dc,t,u),gb,fc,pb,{c:a,d:r,e:c,f:e,b6:l,bz:Jr(n),g:i})}))},hb=B(function(n,e,r,a){var t=o(mb,r,a),i=y(n,e);return i.a?i.b?Aa(p([t,Ll(a)])):t:i.b?Ll(a):T}),bb=$(function(n,e){return L(hb,!0,!0,n,e)}),pc=function(n){var e=n;return e},Ab=$(function(n,e){var r=Re(e),a=Re(n),t=Ee(e),i=Ee(n),c=Be(e),l=Be(n);return{d7:o(bn,l,c),d8:o(bn,i,t),d9:o(bn,a,r),ea:o(wn,l,c),eb:o(wn,i,t),ec:o(wn,a,r)}}),_b=function(n){var e=pc(n),r=e.a,a=e.b;return o(Ab,r,a)},zl={src:`
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
    `,attributes:{lineSegmentVertex:"dR"},uniforms:{lineSegmentEndPoint:"dP",lineSegmentStartPoint:"dQ",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},wb=$(function(n,e){return{$:1,a:n,b:e}}),yb=wb({du:2,dD:0,ee:1}),kl=yb(p([y({dR:0},{dR:1})])),xb=$(function(n,e){var r=_b(e),a=q(r),t=pc(e),i=t.a,c=t.b;switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.F,T;var l=n.b.a;return o(kn,a,cn(function(v,s,f,g,d,b,h,_){return C($n,_,zl,lc,kl,{aB:l,dP:Rn(c),dQ:Rn(i),c:f,d:s,e:b,f:v,g:d})}));case 1:if(n.b.$)return T;var l=n.b.a,u=n.c;return o(kn,a,cn(function(s,f,g,d,b,h,_,x){return C($n,x,zl,uc,kl,{aS:o(Ut,ya(u),l),dP:Rn(c),dQ:Rn(i),c:g,d:f,e:h,f:s,g:b})}));case 2:return T;default:return T}}),Sb=$(function(n,e){return o(xb,n,e)}),Ot=function(n){var e=n;return e.eY},Jt=function(n){var e=n;return e.fP},Tl=$(function(n,e){var r=n,a=e;return r/a}),Cb=xn(function(n,e,r,a,t){n:for(;;){var i=a(e/r),c=o(k,i,t);if(tn(e,n))return c;var l=n,u=e-1,v=r,s=a,f=c;n=l,e=u,r=v,a=s,t=f;continue n}}),Ml=$(function(n,e){return n<1?S:C(Cb,0,n,n,e,S)}),Pb=$(function(n,e){var r=n.eo,a=n.s,t=n.O,i=t,c=i.a,l=i.b;return o(k,{s:Gt(a),eo:Rn(r),O:o(Un,c,l)},e)}),Lb=function(n){var e=m(su,Pb,S,ic(n));if(e.b){var r=e.a,a=e.b,t=o(wa,e,oc(n)),i=o(Av,r,a);return L(H$,i,n,t,0)}else return tc},gc=$(function(n,e){var r=n,a=e,t=or(a);return{gh:t*or(r),gl:t*ir(r),dj:ir(a)}}),zb=function(){var n=Gn(1),e=72,r=o(yr,0,e-1),a=o(Ml,e,o(ia,ye,ui(1))),t=Ci(e/2),i=o(yr,0,t-1),c=o(Ml,t,o(ia,Gr(90),Gr(-90))),l=cc(ae(o(X,function(s){return o(X,function(f){return{s:Or(o(gc,s,f)),eo:m(Cn,o(rn,Qr(f)*Qr(s),n),o(rn,Qr(f)*gt(s),n),o(rn,gt(f),n)),O:y(o(Tl,s,ui(1)),o(Tl,o(Yr,Gr(90),f),Gr(180)))}},c)},a))),u=$(function(s,f){return s*(t+1)+f}),v=ae(o(X,function(s){return ae(o(X,function(f){var g=o(u,s+1,f),d=o(u,s,f),b=o(u,s+1,f+1),h=o(u,s,f+1);return p([M(h,b,g),M(h,g,d)])},i))},r));return ac(Lb(o(Q$,l,v)))}(),ht=72,Wa=2*ht,kb=$(function(n,e){n:for(;;){var r=Wa+1,a=o(ra,Wa,2*n+3),t=o(ra,Wa,2*n+2),i=2*n+1,c=2*n,l=Wa,u=o(k,M(l,c,t),o(k,M(c,a,t),o(k,M(c,i,a),o(k,M(i,r,a),e))));if(n){var v=n-1,s=u;n=v,e=s;continue n}else return u}}),Tb=w(function(n,e,r){return r<=.5?n+r*(e-n):e+(1-r)*(n-e)}),Mb=$(function(n,e){n:for(;;){var r=m(Tb,0,2*ee,n/ht),a={bF:r,bZ:0,b3:1},t={bF:r,bZ:1,b3:1},i=o(k,a,o(k,t,e));if(n){var c=n-1,l=i;n=c,e=l;continue n}else return i}}),jb=function(){var n=o(Mb,ht-1,p([{bF:0,bZ:0,b3:0},{bF:0,bZ:1,b3:0}])),e=o(kb,ht-1,S);return o(wa,n,e)}(),Db={src:`
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
    `,attributes:{angle:"bF",offsetScale:"bZ",radiusScale:"b3"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"b6",viewMatrix:"g"}},jl=function(n){return It(cn(function(e,r,a,t,i,c,l,u){return C($n,o(dc,!0,u),Db,fc,jb,{aB:m(ba,0,0,1),c:a,d:r,e:c,f:e,b6:l,g:i})}))},Fb=function(n){var e=J$(n);return{dH:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,K:e.gh,L:e.gl,M:e.dj,b4:1}},Vb=$(function(n,e){return o(mv,Fb(n),e)}),Bb=B(function(n,e,r,a){var t=o(vc,r,zb),i=function(){var u=y(n,e);return u.a?u.b?Aa(p([t,jl()])):t:u.b?jl():T}(),c=Jt(a),l=c;return o(Vb,o(ri,Vn,Ot(a)),o(sc,M(l,l,l),i))}),Eb=$(function(n,e){return L(Bb,!0,!0,n,e)}),Rb=w(function(n,e,r){return{$:1,a:n,b:e,c:r}}),xv=w(function(n,e,r){return{$:2,a:n,b:e,c:r}}),Wb=xn(function(n,e,r,a,t){return{$:3,a:n,b:e,c:r,d:a,e:t}}),Nb=function(n){switch(n.$){case 0:var r=n.a,a=n.b;return o(bv,r,a);case 1:var r=n.a,a=n.b,e=n.c;return m(Rb,r,a,e);case 2:var r=n.a,a=n.b,c=n.c;return m(xv,r,a,c);default:var r=n.a,a=n.b,t=n.c,i=n.d,c=n.e;return C(Wb,r,a,t,i,c)}},Gb=Nb,Sv=function(n){switch(n.$){case 0:var t=n.a,e=n.b;return p([o(tb,t,e)]);case 1:var t=n.a,r=n.b;return p([o(bb,t,r)]);case 3:var t=n.a,a=n.b;return p([o(Eb,Gb(t),a)]);case 2:var t=n.a,i=n.b;return p([o(db,t,i)]);case 4:var c=n.a,l=n.b;return p([o(Sb,ib(c),l)]);default:var u=n.a;return o(ha,Sv,u)}},Hb=function(n){return o(ha,Sv,n)},Ub=$(function(n,e){return Zh({eO:n.eO,aN:kg(n.eS),eV:n.eV,e_:Gn(n.e_),ch:n.ch,aP:y(hl(qn(n.b5.gf)),hl(qn(n.b5.fm))),aU:Hb(e),fd:n.fd,fz:n.fz,f7:n.f7,ge:n.ge})}),Cv=function(n){return n},Ib=$(function(n,e){var r=n,a=te(e.e5),t=a.gh,i=a.gl,c=a.dj,l=o(Wt,e.bP,e.aO),u=l;return{bH:vr(u),eX:r,bN:$r(u),cT:0,b2:ur(u),c9:1,gh:-t,gl:-i,dj:-c}}),Ob=function(n){return o(Ib,Cv(!0),{aO:n.aO,e5:o(gc,Jn(n.bG),Jn(n.bL)),bP:n.bP})},xa=$(function(n,e){return{$:0,a:n,b:e}}),_o=$(function(n,e){var r=n,a=e;return Y(a,r)>-1}),wo=$(function(n,e){var r=n,a=e;return r+.5*(a-r)}),Jb=pe({gh:-1,gl:0,dj:0}),qb=pe({gh:0,gl:-1,dj:0}),Zb=Yn(function(n,e,r,a,t,i){var c=o(_o,r,i)?Gi:Ui,l=o(_o,e,t)?ec:qb,u=o(_o,n,a)?p$:Jb,v=M(vn(o(Se,n,a)),vn(o(Se,e,t)),vn(o(Se,r,i))),s=m(Cn,o(wo,n,a),o(wo,e,t),o(wo,r,i)),f=Ce({cK:s,dh:u,di:l,dk:c});return{eR:f,aP:v}}),Pv=$(function(n,e){return mn(Zb,Be(n),Ee(n),Re(n),Be(e),Ee(e),Re(e))}),Lv=$(function(n,e){var r=e/2;return o(xa,n,o(Pv,m(ta,-r,-r,-r),m(ta,r,r,r)))}),Yb=$(function(n,e){return o(zn,function(r){if(r.$===2){var a=r.a;return a}else return Vi},o(sa,n,e.aA))}),Xb=$(function(n,e){return o(pn,Vi,kr(o(ma,Yb(n),e)))}),Qb=$(function(n,e){return o(Xb,n,e.e$)}),Ge=Qb,qt=function(n){return{$:5,a:n}},Fr=function(n){return qt(n)},yo=function(n){return m(qi,0,1,n<=.04045?n/12.92:o(Ne,(n+.055)/1.055,2.4))},Kb=function(n){var e=Bi(n),r=e.cY,a=e.ck,t=e.cd;return m(ba,yo(r),yo(a),yo(t))},Pe=function(n){return m(xv,0,li(Kb(n)),li(0))},Zt=$(function(n,e){return{$:2,a:n,b:e}}),hc=$(function(n,e){return{$:4,a:n,b:e}}),Yt=$(function(n,e){return{$:3,a:n,b:e}}),bc=$(function(n,e){return{$:1,a:n,b:e}}),n2=w(function(n,e,r){return{gh:n,gl:e,dj:r}}),e2=$(function(n,e){return{eR:o(d$,n,Nt(e)),aP:Ht(e)}}),r2=$(function(n,e){var r=e;return o(Zn,o(Tr,n,r.cK),r.e5)}),a2=$(function(n,e){var r=e;return{m:o(r2,n,r.m),fx:r.fx,fP:r.fP}}),t2=function(n){return n},Ac=$(function(n,e){var r=pc(e),a=r.a,t=r.b;return t2(y(n(a),n(t)))}),o2=$(function(n,e){return o(Ac,Tr(n),e)}),Xt=$(function(n,e){return{eY:e,fP:vn(n)}}),i2=$(function(n,e){return o(Xt,Jt(e),o(Tr,n,Ot(e)))}),_c=$(function(n,e){var r=e,a=r.a,t=r.b,i=r.c;return M(n(a),n(t),n(i))}),c2=$(function(n,e){return o(_c,Tr(n),e)}),Qt=$(function(n,e){var r=n.a,a=n.b,t=n.c,i=m(n2,r,a,t);switch(e.$){case 0:var s=e.a,c=e.b;return o(xa,s,o(e2,i,c));case 1:var s=e.a,l=e.b;return o(bc,s,o(c2,i,l));case 3:var s=e.a,u=e.b;return o(Yt,s,o(i2,i,u));case 2:var s=e.a,v=e.b;return o(Zt,s,o(a2,i,v));case 4:var s=e.a,f=e.b;return o(hc,s,o(o2,i,f));default:var g=e.a;return qt(o(X,Qt(M(r,a,t)),g))}}),sr=function(n){return Qt(M(n,0,0))},He=function(n){return Qt(M(0,n,0))},ge=function(n){return Qt(M(0,0,n))},Dl=$(function(n,e){var r=function(a){var t=a.a,i=a.b;return o(He,i,o(sr,t,o(ge,-.495,o(Lv,Pe(o(Ge,"board color",n)),1))))};return Fr(o(X,r,Sr(Mn(e.a).bT)))}),ca=$(function(n,e){var r=e.a,a=e.b,t=e.c,i=M(r/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(xa,n,o(Pv,m(ta,-c,-l,-u),m(ta,c,l,u)))}),Ln=function(n){return n*ee/180},l2=function(n){return o(Ne,n,2)},u2=w(function(n,e,r){return{eR:m(f$,n,e,Nt(r)),aP:Ht(r)}}),$2=$(function(n,e){var r=o(ga,n,e),a=o(Oa,n,e);return function(t){var i=t;return o(Zn,r(i.cK),a(i.e5))}}),v2=w(function(n,e,r){var a=r;return{m:m($2,n,e,a.m),fx:a.fx,fP:a.fP}}),s2=w(function(n,e,r){return o(Ac,o(ga,n,e),r)}),f2=w(function(n,e,r){return o(Xt,Jt(r),m(ga,n,e,Ot(r)))}),d2=w(function(n,e,r){return o(_c,o(ga,n,e),r)}),Sa=w(function(n,e,r){switch(r.$){case 0:var l=r.a,a=r.b;return o(xa,l,m(u2,n,e,a));case 1:var l=r.a,t=r.b;return o(bc,l,m(d2,n,e,t));case 3:var l=r.a,i=r.b;return o(Yt,l,m(f2,n,e,i));case 2:var l=r.a,c=r.b;return o(Zt,l,m(v2,n,e,c));case 4:var l=r.a,u=r.b;return o(hc,l,m(s2,n,e,u));default:var v=r.a;return qt(o(X,o(Sa,n,e),v))}}),Fl=$(function(n,e){var r=n.a,a=n.b,t=a.a,i=a.b,c=a.c;return o(Sa,o(Zn,Ni(r),pe({gh:t,gl:i,dj:c})),Jn(e))}),zv=w(function(n,e,r){var a=e.c4;switch(a.$){case 1:var v=a.a.aj,s=a.a.b7,f=a.a.bp;if(a.a.cF,tn(s,r)){var t=function(){switch(f){case 0:return y({gh:.5,gl:.5,dj:-.5},M(-1,0,0));case 1:return y({gh:-.5,gl:-.5,dj:-.5},M(1,0,0));case 2:return y({gh:-.5,gl:.5,dj:-.5},M(0,-1,0));default:return y({gh:.5,gl:-.5,dj:-.5},M(0,1,0))}}(),i=o(hn,"duration of step animation",n),c=(n.V-v)/i,l=l2(c),u=o(Ar,Ln(90),l*Ln(90));return o(Fl,t,u)}else return Nn;case 2:var v=a.a.aj,s=a.a.b7,f=a.a.bp;if(tn(s,r)){var t=function(){switch(f){case 0:return y({gh:.5,gl:.5,dj:-.5},M(-1,0,0));case 1:return y({gh:-.5,gl:-.5,dj:-.5},M(1,0,0));case 2:return y({gh:-.5,gl:.5,dj:-.5},M(0,-1,0));default:return y({gh:.5,gl:-.5,dj:-.5},M(0,1,0))}}(),i=o(hn,"duration of mistake animation",n),c=(n.V-v)/i,l=ir(ee*c),u=m(qi,Ln(0),Ln(45),l*Ln(45));return o(Fl,t,u)}else return Nn;default:return Nn}}),m2=o(Zn,Vn,Et),ar=$(function(n,e){return m(Sa,m2,Jn(n),e)}),p2=o(Zn,Vn,rc),bt=$(function(n,e){return m(Sa,p2,Jn(n),e)}),g2=$(function(n,e){var r=o(hn,"cubes side length",n),a=o(Ge,"color 2",n),t=o(ge,-(r/4),o(ca,Pe(a),M(r,r,r/2))),i=o(Ge,"color 1",n),c=o(ge,r/4,o(ca,Pe(i),M(r,r,r/2))),l=Mn(e.a).dN,u=l.a,v=u.a,s=u.b,f=l.b,g=function(){if(f.b)switch(f.a){case 2:return f.a,f.b,ar(Ln(180));case 1:return f.a,f.b,ar(Ln(90));default:return f.a,f.b,bt(-Ln(90))}else switch(f.a){case 2:return f.a,f.b,Nn;case 1:return f.a,f.b,ar(-Ln(90));default:return f.a,f.b,bt(Ln(90))}}();return o(He,s,o(sr,v,o(ge,r/2,L(zv,n,e,y(v,s),g(Fr(p([c,t])))))))}),h2=w(function(n,e,r){return{m:o(Zn,n,e),fx:vn(r.fx),fP:vn(r.fP)}}),b2=w(function(n,e,r){return o(Zt,n,m(h2,Vn,ec,{fx:Gn(r),fP:Gn(e)}))}),A2=$(function(n,e){return(e-xu(e/n)*n)/n}),_2=function(n){return 2*ee*n},$i=B(function(n,e,r,a){return n+(e-n)*(1+or(_2(o(A2,r,a))))/2}),w2=$(function(n,e){var r=Mn(e.a).bT.fw,a=r.a,t=r.b;return o(He,t,o(sr,a,o(ge,L($i,-.3,-.4,.5,n.V),o(ar,Ln(90),m(b2,Pe(o(Ge,"finish mark color",n)),.3,1)))))}),y2=$(function(n,e){var r=o(hn,"cubes side length",n),a=o(Ge,"color 2",n),t=o(ge,-(r/4),o(ca,Pe(a),M(r,r,r/2))),i=o(Ge,"color 1",n),c=o(ge,r/4,o(ca,Pe(i),M(r,r,r/2))),l=Mn(e.a).cU,u=l.a,v=u.a,s=u.b,f=l.b,g=function(){if(f.b)switch(f.a){case 2:return f.a,f.b,ar(Ln(180));case 1:return f.a,f.b,ar(Ln(90));default:return f.a,f.b,bt(-Ln(90))}else switch(f.a){case 2:return f.a,f.b,Nn;case 1:return f.a,f.b,ar(-Ln(90));default:return f.a,f.b,bt(Ln(90))}}();return o(He,s,o(sr,v,o(ge,r/2,L(zv,n,e,y(v,s),g(Fr(p([c,t])))))))}),x2=B(function(n,e,r,a){var t=M(n,e,r),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(b){var h=b<0?b+1:b>1?b-1:b;return h*6<1?v+(u-v)*h*6:h*2<1?u:h*3<2?v+(u-v)*(2/3-h)*6:v},f=s(i-1/3),g=s(i),d=s(i+1/3);return L(qe,d,g,f,a)}),S2=w(function(n,e,r){return L(x2,n,e,r,1)}),Ca=w(function(n,e,r){var a=n,t=r;return{gh:a.gh+e*(t.gh-a.gh),gl:a.gl+e*(t.gl-a.gl),dj:a.dj+e*(t.dj-a.dj)}}),C2=w(function(n,e,r){var a=Nt(r),t=Ze(a),i=Ye(a),c=Xe(a),l=m(Ca,n,e,lr(a)),u=e>=0?Ce({cK:l,dh:t,di:i,dk:c}):Ce({cK:l,dh:Ve(t),di:Ve(i),dk:Ve(c)}),v=Ht(r),s=v.a,f=v.b,g=v.c,d=vn(o(rn,e,s)),b=vn(o(rn,e,f)),h=vn(o(rn,e,g));return{eR:u,aP:M(d,b,h)}}),Vl=function(n){return Bt(mc(n))},P2=function(n){return Hi(mc(n))},L2=w(function(n,e,r){var a=vn(o(rn,e,yv(r))),t=vn(o(rn,e,wv(r))),i=e>=0?Vl(r):Ve(Vl(r)),c=m(Ca,n,e,P2(r));return{m:o(Zn,c,i),fx:t,fP:a}}),z2=w(function(n,e,r){return o(Ac,o(Ca,n,e),r)}),k2=w(function(n,e,r){return o(Xt,o(rn,Q(e),Jt(r)),m(Ca,n,e,Ot(r)))}),T2=w(function(n,e,r){return o(_c,o(Ca,n,e),r)}),kv=$(function(n,e){switch(e.$){case 0:var c=e.a,r=e.b;return o(xa,c,m(C2,Vn,n,r));case 1:var c=e.a,a=e.b;return o(bc,c,m(T2,Vn,n,a));case 3:var c=e.a,t=e.b;return o(Yt,c,m(k2,Vn,n,t));case 2:var c=e.a,i=e.b;return o(Zt,c,m(L2,Vn,n,i));case 4:var c=e.a,l=e.b;return o(hc,c,m(z2,Vn,n,l));default:var u=e.a;return qt(o(X,kv(n),u))}}),M2=L(qe,255/255,255/255,255/255,1),j2=$(function(n,e){var r=function(i){var c=e.c4;return c.$===3?m(S2,L($i,0,1,6,n.V+.03*i),1,.8):M2},a=function(i){var c=e.c4;return c.$===3?o(K,kv(.9),ge(L($i,.1,.7,6,n.V+.3*i))):Nn},t=$(function(i,c){var l=c.a,u=c.b;return o(He,u,o(sr,l,o(ge,-.49,o(a,i,o(Lv,Pe(r(i)),1)))))});return Fr(o(St,t,Sr(Mn(e.a).el)))}),D2=L(qe,164/255,0/255,0/255,1),F2=L(qe,239/255,41/255,41/255,1),V2=$(function(n,e){return o(Yt,n,o(Xt,Gn(e),Vn))}),B2=$(function(n,e){var r=n.cV.dG?F2:D2,a=e.a9,t=a.a,i=a.b;return o(He,i,o(sr,t,o(V2,Pe(r),.2)))}),E2=$(function(n,e){return y(n,e)}),R2=function(n){var e=n.fw,r=n.bn;return m(hu,E2,o(k,e,r),r)},Tv=$(function(n,e){var r=n.a,a=n.b,t=function(i){var c=i.a,l=c.a,u=c.b,v=i.b,s=v.a,f=v.b;return a?tn(r,c)&&tn(s,l+1)||tn(r,v)&&tn(s,l-1):tn(r,c)&&tn(f,u-1)||tn(r,v)&&tn(f,u+1)};return o(Tt,t,R2(e))}),W2=o(Zn,Vn,Rt),N2=$(function(n,e){return m(Sa,W2,Jn(n),e)}),Mv=$(function(n,e){var r=e.a,a=r.a,t=r.b,i=e.b,c=1-o(hn,"cubes side length",n),l=o(He,-.5,o(ca,Pe(o(Ge,"wall color",n)),M(1+c,c,c))),u=o(N2,Ln(90),l);return o(He,t,o(sr,a,function(){return i?u:l}()))}),Na=$(function(n,e){return{$:0,a:n,b:e}}),G2=function(n){return p([o(Na,n,0),o(Na,n,1),o(Na,o(vt,0,n),0),o(Na,o(vt,2,n),1)])},jv=function(n){return o(ha,G2,Sr(n))},H2=$(function(n,e){var r=o(pn,Mn(e.a).bT,e.o.eg);return Fr(o(X,Mv(n),o(Mr,function(a){return!o(Tv,a,r)},jv(r))))}),U2=$(function(n,e){return Fr(o(X,Mv(n),o(Mr,function(r){return!o(Tv,r,Mn(e.a).el)},jv(Mn(e.a).bT))))}),I2=function(n){return n},O2=function(n){return I2(1.2*o(Ne,2,n))},xo=Ji({gh:.37208,gl:.37529}),J2={$:5},q2=J2,Z2=Ji({gh:.44757,gl:.40745}),Y2=function(n){return n},Bl=function(n){return n},So=function(n){return n},X2={$:1},Q2=X2,K2=$(function(n,e){var r=n,a=_a(e.eo),t=a.gh,i=a.gl,c=a.dj,l=o(Wt,e.bP,e.aO),u=l;return{bH:vr(u),eX:r,bN:$r(u),cT:0,b2:ur(u),c9:2,gh:t,gl:i,dj:c}}),El=function(n){return o(K2,Cv(!0),{aO:n.aO,bP:n.bP,eo:Ni(n.eo)})},nA=$(function(n,e){var r=n,a=e;return Y(a,r)>0}),Rl=function(n){var e=n;return e},eA=function(n){n:for(;;){if(tn(n.dE,ye)&&tn(n.dF,ye))return Dn;if(o(nA,vn(n.dE),vn(n.dF))){var e={aO:n.aO,dE:n.dF,dF:n.dE,eG:Ve(n.eG)};n=e;continue n}else{var r=Q(Rl(n.dF)/ee),a=Q(Rl(n.dE)/ee),t=te(n.eG),i=t.gh,c=t.gl,l=t.dj,u=o(Wt,q$(1),n.aO),v=u;return{bH:a*vr(v),eX:!1,bN:a*$r(v),cT:r/a,b2:a*ur(v),c9:3,gh:i,gl:c,dj:l}}}},rA=function(n){return eA({aO:n.aO,dE:n.dE,dF:n.dF,eG:o(gc,Jn(n.bG),Jn(n.bL))})},aA=$(function(n,e){return{$:2,a:n,b:e}}),Dv=function(n){return{$:0,a:n}},Ga=function(n){var e=n;return e},tA=function(n){var e=n;return e.eX},oA=Dv(Ir.a),iA=$(function(n,e){var r=$(function(a,t){var i=t.a,c=t.b;return n(a)?y(o(k,a,i),c):y(i,o(k,a,c))});return m(ze,r,y(S,S),e)}),cA=function(n){var e=n;return se({dS:e.gh,dT:e.b2,dU:0,dV:0,dW:e.gl,dX:e.bN,dY:0,dZ:0,d_:e.dj,d$:e.bH,d0:0,d1:0,d2:e.c9,d3:e.cT,d4:0,d5:0})},lA=cn(function(n,e,r,a,t,i,c,l){var u=o(iA,tA,p([Ga(n),Ga(e),Ga(r),Ga(a)])),v=u.a,s=u.b;if(v.b){var f=un(v,s);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var g=f.a,d=f.b,b=d.a,h=d.b,_=h.a,x=h.b,A=x.a;return o(aA,o(X,cA,v),{bj:o(Qn,g,b),bU:o(Qn,_,A),bV:o(Qn,t,i),bW:o(Qn,c,l)})}else return oA}else return Dv({bj:o(Qn,n,e),bU:o(Qn,r,a),bV:o(Qn,t,i),bW:o(Qn,c,l)})}),uA=$(function(n,e){return _t(lA,n,e,Dn,Dn,Dn,Dn,Dn,Dn)}),$A=$(function(n,e){Ob({bG:o(hn,"azimuth for third light",n),aO:zg(Y2(2e3)),bL:o(hn,"elevation for third light",n),bP:So(100)}),rA({bG:o(hn,"azimuth for fourth light",n),aO:xo,bL:o(hn,"elevation for fourth light",n),dE:So(120),dF:So(40)});var r=Mn(e.a).cU,a=r.a,t=a.a,i=a.b,c=function(){var f=e.c4;if(f.$===1){var g=f.a.aj,d=f.a.bp,b=o(hn,"duration of step animation",n),h=(n.V-g)/b,_=function(){switch(d){case 0:return y(0,h);case 1:return y(0,-h);case 2:return y(-h,0);default:return y(h,0)}}(),x=_.a,A=_.b;return y(t+x,i+A)}else return y(t,i)}(),l=c.a,u=c.b,v=El({aO:Z2,bP:Bl(o(hn,"lumens of following lights",n)),eo:{gh:l+.5,gl:u+.5,dj:o(hn,"height of following lights",n)}}),s=El({aO:xo,bP:Bl(o(hn,"lumens of following lights",n)),eo:{gh:l-.5,gl:u-.5,dj:o(hn,"height of following lights",n)}});return o(Ub,{eO:Q2,eS:o(Ge,"background color",n),eV:o(g$,n,e),e_:.1,ch:n.ch,fd:O2(6),fz:o(uA,v,s),b5:n.b5,f7:q2,ge:xo},e.o.bQ?p([o(Dl,n,e),o(g2,n,e),o(H2,n,e),o(B2,n,e)]):p([o(Dl,n,e),o(y2,n,e),o(w2,n,e),o(U2,n,e),o(j2,n,e)]))}),vA=$(function(n,e){return o(V,S,p([o(Pg,n,e),o($A,n,e)]))}),sA={$:10},je=$(function(n,e){return o(fa,p([F("m-1 p-2 rounded bg-black40 hover:bg-black80"),da(n)]),p([ln(e)]))}),fA=ie("pre"),dA=function(n){return o(fA,p([F("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),p([ln(n.o.cl)]))},mA=$(function(n,e){return o(V,S,p([o(je,sA,"Export Levels"),dA(e)]))}),pA={$:11},gA=function(n){return{$:12,a:n}},hA=function(n){return o(Je,"cols",yn(n))},bA=function(n){return o(Je,"rows",yn(n))},AA=ie("textarea"),_A=function(n){return o(AA,p([F("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),bA(150),hA(10),Dt(gA),Ft(n.o.cm)]),p([ln("todo")]))},wA=$(function(n,e){return o(V,S,p([o(je,pA,"Import Levels"),_A(e)]))}),yA={$:7},xA={$:9},SA={$:6},CA={$:5},PA={$:8},LA=function(n){var e=n;return e.l},zA=function(n){return oe(LA(n))+1},kA=function(n){var e=n;return 1+oe(e.l)+oe(e.q)},TA=function(n){return o(V,S,p([o(V,p([F("text-lg")]),p([ln("Level Selection")])),o(Hr,S,p([o(je,CA,"<"),o(Ur,p([o(on,"margin","10px")]),p([ln(S$(p([yn(zA(n.a))," / ",yn(kA(n.a))])))])),o(je,SA,">")])),o(je,yA,"Add level"),o(je,PA,"Remove current level"),o(je,xA,"Move level one up")]))},MA=function(n){return{$:2,a:n}},jA={$:3},DA={$:1},FA=function(n){return o(jt,"mouseenter",dn(n))},VA=function(n){return o(jt,"mouseleave",dn(n))},BA=$(function(n,e){return o(V,S,p([o(V,p([F("h-40")]),p([o(V,p([F("text-lg")]),p([ln("Solution Calculator")])),o(je,DA,"Calculate all solutions"),o(V,S,o(St,$(function(r,a){return o(V,p([F("m-2 p-2 w-24 bg-black60 hover:bg-black cursor-crosshair"),FA(MA(a)),VA(jA)]),p([ln("Solution "+yn(r))]))}),Mn(e.a).dn))]))]))}),EA=$(function(n,e){return e.o.bQ?o(V,p([F("fixed top-0 right-0 w-[300px] h-full"),F("bg-black20"),F("border-[0.5px] border-white20"),F("overflow-y-scroll"),F("text-xs text-white60")]),p([o(V,p([F("p-4")]),p([o(BA,n,e)])),o(V,p([F("p-4 border-[0.5px] border-white20")]),p([TA(e)])),o(V,p([F("p-4 border-[0.5px] border-white20")]),p([o(mA,n,e)])),o(V,p([F("p-4 border-[0.5px] border-white20")]),p([o(wA,n,e)]))])):o(V,S,S)}),RA={$:0},Wl=Je("fill"),Nl={dq:o(Ho,p([Uo("0 0 24 24"),Wl("currentColor")]),p([o(Go,p([No("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),S)])),dt:o(Ho,p([Uo("0 0 24 24"),Wl("currentColor")]),p([o(Go,p([No("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),S)]))},WA=function(n){return o(V,p([F("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),p([o(fa,p([F("w-6"),da(RA)]),p([n.o.bQ?Nl.dq:Nl.dt]))]))},NA=$(function(n,e){return o(V,S,p([o(EA,n,e),WA(e)]))}),GA=mn(v1,vA,Xp,C1,w1,NA,Cg);const HA={Main:{init:GA(o(j,function(n){return dn({ft:n})},o(z,"inputs",o(j,function(n){return o(j,function(e){return o(j,function(r){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(c){return dn({V:c,ch:i,e8:t,dJ:a,cV:r,b5:e,gd:n})},o(z,"clock",_n))},o(z,"devicePixelRatio",_n))},o(z,"dt",_n))},o(z,"keyboard",o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(c){return o(j,function(l){return o(j,function(u){return o(j,function(v){return o(j,function(s){return o(j,function(f){return dn({eN:f,e0:s,cj:v,e7:u,dK:l,fO:c,ev:i,fX:t,dc:a})},o(z,"alt",en))},o(z,"control",en))},o(z,"down",en))},o(z,"downs",We(tr)))},o(z,"left",en))},o(z,"pressedKeys",We(tr)))},o(z,"right",en))},o(z,"shift",en))},o(z,"up",en))))},o(z,"pointer",o(j,function(r){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(c){return o(j,function(l){return o(j,function(u){return o(j,function(v){return dn({cj:v,dG:u,fC:l,fT:c,fU:i,dc:t,gh:a,gl:r})},o(z,"down",en))},o(z,"isDown",en))},o(z,"move",en))},o(z,"rightDown",en))},o(z,"rightUp",en))},o(z,"up",en))},o(z,"x",_n))},o(z,"y",_n))))},o(z,"screen",o(j,function(e){return o(j,function(r){return dn({fm:r,gf:e})},o(z,"height",_n))},o(z,"width",_n))))},o(z,"wheel",o(j,function(n){return o(j,function(e){return dn({e2:e,e3:n})},o(z,"deltaX",_n))},o(z,"deltaY",_n)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},UA=n=>{const e=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),r=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),t=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function s(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function f(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),e(d)&&(R.keyboard.control=!0),r(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),t(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=d.code),e(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),r(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),t(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{s(R)}),window.addEventListener("focus",d=>{s(R)}),window.addEventListener("visibilitychange",d=>{s(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(d){const b=d/1e3,h=b-R.clock;h<.009||(R.dt=h,R.clock=b,n.ports.tick.send(R),f(R)),window.requestAnimationFrame(g)}},IA=()=>{Co("pointerdown"),Co("wheel"),Co("keydown")},Co=n=>{document.addEventListener(n,function(e){var r;e.target&&((r=document.querySelector("#gui"))==null?void 0:r.contains(e.target))&&e.stopPropagation()},!0)},OA=HA.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});IA();UA(OA);
