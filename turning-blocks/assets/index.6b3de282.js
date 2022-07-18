const Iu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Iu();function Sr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ie(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ht(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function It(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ju(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ou=[];function qu(e){return e.length}var Zu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ku=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Xu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+ev()),r});function ev(e){return"<internals>"}function ln(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function xr(e,r){for(var n,a=[],t=gt(e,r,0,a);t&&(n=a.pop());t=gt(n.a,n.b,0,a));return t}function gt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ln(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=_i(e),r=_i(r));for(var t in e)if(!gt(e[t],r[t],n+1,a))return!1;return!0}$(xr);$(function(e,r){return!xr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var rv=$(function(e,r){var n=J(e,r);return n<0?Rc:n?jf:Yc}),Mn=0;function P(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function er(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=or(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=or(e.a,r);return n}var z={$:0};function or(e,r){return{$:1,a:e,b:r}}var nv=$(or);function h(e){for(var r=z,n=e.length;n--;)r=or(e[n],r);return r}function Da(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var av=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ie(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Da(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return h(Da(r).sort(function(n,a){var t=o(e,n,a);return t===Yc?0:t===Rc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var tv=$(Math.pow);$(function(e,r){return r%e});var ov=$(function(e,r){var n=r%e;return e===0?ln(11):n>0&&e<0||n<0&&e>0?n+e:n}),iv=Math.PI,cv=Math.cos,lv=Math.sin,uv=Math.tan,vv=Math.atan;$(Math.atan2);function $v(e){return e}function fv(e){return e===1/0||e===-1/0}var sv=Math.ceil,dv=Math.floor,mv=Math.round,pv=Math.sqrt,ii=Math.log,bv=isNaN;function gv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var hv=$(function(e,r){return e+r});function _v(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}$(function(e,r){return e+r});function wv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function yv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var xv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Sv=$(function(e,r){return r.split(e)}),Cv=$(function(e,r){return r.join(e)}),Lv=y(function(e,r,n){return n.slice(e,r)});function zv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var kv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Pv=$(function(e,r){return r.indexOf(e)>-1}),Tv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Mv=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function sc(e){return e+""}function Dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function Av(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function Bv(e){return Da(e).join("")}function Fv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Vv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Uv(e){return{$:0,a:e}}function Jt(e){return{$:2,b:e}}var Ev=Jt(function(e){return typeof e=="boolean"?ue(e):Qe("a BOOL",e)}),Yv=Jt(function(e){return typeof e=="number"?ue(e):Qe("a FLOAT",e)}),Rv=Jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Qe("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Cr(e,r){return{$:9,f:e,g:r}}var Gv=$(function(e,r){return{$:10,b:r,h:e}}),Wv=$(function(e,r){return Cr(e,[r])}),Hv=y(function(e,r,n){return Cr(e,[r,n])});U(function(e,r,n,a){return Cr(e,[r,n,a])});he(function(e,r,n,a,t){return Cr(e,[r,n,a,t])});Ie(function(e,r,n,a,t,i){return Cr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return Cr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Cr(e,[r,n,a,t,i,c,l])});Ht(function(e,r,n,a,t,i,c,l,u){return Cr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(oo,"This is not valid JSON! "+a.message,r))}});var dc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Qe("null",r);case 3:return Gn(r)?ci(e.b,r,h):Qe("a LIST",r);case 4:return Gn(r)?ci(e.b,r,Iv):Qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Qe("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Oe(v)?v:ye(o(wi,n,v.a));case 7:var a=e.e;if(!Gn(r))return Qe("an ARRAY",r);if(a>=r.length)return Qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Oe(v)?v:ye(o(jc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Qe("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Oe(v))return ye(o(wi,i,v.a));t=or(P(i,v.a),t)}return ue(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Oe(v))return v;c=c(v.a)}return ue(c);case 10:var v=je(e.b,r);return Oe(v)?je(e.h(v.a),r):v;case 11:for(var s=z,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Oe(v))return v;s=or(v.a,s)}return ye(Nf(Ve(s)));case 1:return ye(o(oo,e.a,r));case 0:return ue(e.a)}}function ci(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Oe(c))return ye(o(jc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Iv(e){return o(os,e.length,function(r){return e[r]})}function Qe(e,r){return ye(o(oo,"Expecting "+e,r))}function Kr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Kr(e.b,r.b);case 6:return e.d===r.d&&Kr(e.b,r.b);case 7:return e.e===r.e&&Kr(e.b,r.b);case 9:return e.f===r.f&&li(e.g,r.g);case 10:return e.h===r.h&&Kr(e.b,r.b);case 11:return li(e.g,r.g)}}function li(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Kr(e[a],r[a]))return!1;return!0}var Jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function mc(e){return e}y(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Ov(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var ht=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function qv(e){return{$:5,b:e}}var Zv=0;function Ot(e){var r={$:0,e:Zv++,f:e,g:null,h:[]};return qt(r),r}function pc(e){return pr(function(r){r(Nr(Ot(e)))})}function bc(e,r){e.h.push(r),qt(e)}var Kv=$(function(e,r){return pr(function(n){bc(e,r),n(Nr(Mn))})}),Ka=!1,ui=[];function qt(e){if(ui.push(e),!Ka){for(Ka=!0;e=ui.shift();)Xv(e);Ka=!1}}function Xv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,qt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Zt(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function Zt(e,r,n,a,t,i){var c=o(dc,e,r?r.flags:void 0);Oe(c)||ln(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),$i(l,b.b,t(v))}return $i(l,u.b,t(v)),d?{ports:d}:{}}var ar={};function Qv(e,r){var n;for(var a in ar){var t=ar[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=r$(t,r)}return n}function e$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function r$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ht,l,qv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ot(o(ht,l,e.b))}var n$=$(function(e,r){return pr(function(n){e.g(r),n(Nr(Mn))})});$(function(e,r){return o(Kv,e.h,{$:0,a:r})});function gc(e){return function(r){return{$:1,k:e,l:r}}}function a$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var vi=[],Xa=!1;function $i(e,r,n){if(vi.push({p:e,q:r,r:n}),!Xa){Xa=!0;for(var a;a=vi.shift();)t$(a.p,a.q,a.r);Xa=!1}}function t$(e,r,n){var a={};va(!0,r,a,null),va(!1,n,a,null);for(var t in e)bc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function va(e,r,n,a){switch(r.$){case 1:var t=r.k,i=o$(e,t,a,r.l);n[t]=i$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)va(e,c.a,n,a);return;case 3:va(e,r.o,n,{s:r.n,t:a});return}}function o$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ar[r].e:ar[r].f;return o(i,t,a)}function i$(e,r,n){return n=n||{i:z,j:z},e?n.i=or(r,n.i):n.j=or(r,n.j),n}function c$(e){ar[e]&&ln(3)}$(function(e,r){return r});function l$(e,r){return c$(e),ar[e]={f:u$,u:r,a:v$},gc(e)}var u$=$(function(e,r){return function(n){return e(r(n))}});function v$(e,r){var n=z,a=ar[e].u,t=Nr(null);ar[e].b=t,ar[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(dc,a,c);Oe(l)||ln(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var $a,$r=typeof document!="undefined"?document:{};function Kt(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(wr(e,function(){}),t),{}});function _t(e){return{$:0,a:e}}var hc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),Gr=hc(void 0),$$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),f$=$$(void 0);function s$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var d$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Lr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Lr([e,r],function(){return e(r)})});y(function(e,r,n){return Lr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Lr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Lr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ie(function(e,r,n,a,t,i){return Lr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return Lr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Lr([e,r,n,a,t,i,c,l],function(){return It(e,r,n,a,t,i,c,l)})});Ht(function(e,r,n,a,t,i,c,l,u){return Lr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var _c=$(function(e,r){return{$:"a0",n:e,o:r}}),m$=$(function(e,r){return{$:"a1",n:e,o:r}}),wc=$(function(e,r){return{$:"a2",n:e,o:r}}),zr=$(function(e,r){return{$:"a3",n:e,o:r}}),p$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function b$(e){return e=="script"?"p":e}function g$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(_c,r.n,h$(e,r.o)):r});function h$(e,r){var n=vo(r);return{$:r.$,a:n?p(is,n<3?_$:w$,Ae(e),r.a):o(ma,e,r.a)}}var _$=$(function(e,r){return P(e(r.a),r.b)}),w$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?fi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?fi(c,t,i):c[t]=i}return r}function fi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function wr(e,r){var n=e.$;if(n===5)return wr(e.k||(e.k=e.m()),r);if(n===0)return $r.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=wr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?$r.createElementNS(e.f,e.c):$r.createElement(e.c);$a&&e.c=="a"&&c.addEventListener("click",$a(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Kt(c,wr(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?y$(e,t):a==="a0"?C$(e,r,t):a==="a3"?x$(e,t):a==="a4"?S$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function y$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function x$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function S$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function C$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=L$(r,i),e.addEventListener(t,c,Qt&&{passive:vo(i)<2}),a[t]=c}}var Qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Qt=!0}}))}catch{}function L$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Oe(i)){for(var c=vo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function z$(e,r){return e.$==r.$&&Kr(e.a,r.a)}function yc(e,r){var n=[];return qe(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function qe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=F$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];qe(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!k$(d,m):d!==m)&&_e(n,2,a,m),qe(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:si(e,r,n,a,P$);return;case 2:si(e,r,n,a,T$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=eo(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function k$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function si(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=eo(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function eo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=eo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&z$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function P$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];qe(s,i[v],n,++a),a+=s.b||0}}function T$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,T=void 0,j=void 0;if(w===x){f++,qe(_,C,t,f),f+=_.b||0,d++,m++;continue}var Y=l[d+1],E=u[m+1];if(Y){var R=Y.a,N=Y.b;j=x===R}if(E){var F=E.a,Z=E.b;T=w===F}if(T&&j){f++,qe(_,Z,t,f),dn(i,t,w,C,m,c),f+=_.b||0,f++,mn(i,t,w,N,f),f+=N.b||0,d+=2,m+=2;continue}if(T){f++,dn(i,t,x,C,m,c),qe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(j){f++,mn(i,t,w,_,f),f+=_.b||0,f++,qe(N,C,t,f),f+=N.b||0,d+=2,m+=1;continue}if(Y&&R===F){f++,mn(i,t,w,_,f),dn(i,t,x,C,m,c),f+=_.b||0,f++,qe(N,Z,t,f),f+=N.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;mn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];dn(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var xc="_elmW6BL";function dn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];qe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}dn(e,r,n+xc,a,t,i)}function mn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];qe(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}mn(e,r,n+xc,a,t)}function Sc(e,r,n,a){pn(e,r,n,0,0,r.b,a)}function pn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Sc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&pn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&pn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return pn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=pn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Cc(e,r,n,a){return n.length===0?e:(Sc(e,r,n,a),fa(e,n))}function fa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=M$(t,a);t===e&&(e=i)}return e}function M$(e,r){switch(r.$){case 0:return D$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return fa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(wr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=fa(e,i.w),e;case 8:return A$(e,r);case 5:return r.s(e);default:ln(10)}}function D$(e,r,n){var a=e.parentNode,t=wr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function A$(e,r){var n=r.s,a=B$(n.y,r);e=fa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:wr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Kt(e,a),e}function B$(e,r){if(!!e){for(var n=$r.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Kt(n,i.c===2?i.s:wr(i.z,r.u))}return n}}function ro(e){if(e.nodeType===3)return _t(e.textContent);if(e.nodeType!==1)return _t("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=or(o(zr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=or(ro(v[a]),u);return p(Gr,l,r,u)}function F$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var V$=U(function(e,r,n,a){return Zt(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=ro(l);return Lc(i,function(v){var s=c(v),d=yc(u,s);l=Cc(l,u,d,t),u=s})})});U(function(e,r,n,a){return Zt(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=$r.title,v=$r.body,s=ro(v);return Lc(i,function(d){$a=c;var m=l(d),f=Gr("body")(z)(m.er),g=yc(s,f);v=Cc(v,s,g,t),s=f,$a=0,u!==m.fJ&&($r.title=u=m.fJ)})})});var sa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Lc(e,r){r(e);var n=0;function a(){n=n===1?0:(sa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&sa(a),n=2)}}$(function(e,r){return o(so,$o,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(so,$o,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(so,$o,pr(function(){history.replaceState({},"",r),e()}))});var U$={addEventListener:function(){},removeEventListener:function(){}},E$=typeof window!="undefined"?window:U$;y(function(e,r,n){return pc(pr(function(a){function t(i){Ot(n(i))}return e.addEventListener(r,t,Qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Oe(n)?ne(n.a):q});function zc(e,r){return pr(function(n){sa(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Ov(ls(e)))})})}function Y$(e){return pr(function(r){sa(function(){r(Nr(e()))})})}$(function(e,r){return zc(r,function(n){return n[e](),Mn})});$(function(e,r){return Y$(function(){return E$.scroll(e,r),Mn})});y(function(e,r,n){return zc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var R$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var j$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):q}a.push(L(_l,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(L(_l,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var di=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function no(e){for(var r=0;e.b;e=e.b)r++;return r}var N$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},G$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),W$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),H$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),J$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),O$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),q$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Z$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),K$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),X$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Q$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},ef=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},rf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},kc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Pc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},nf=function(e){e.gl.disable(e.gl.CULL_FACE)},af=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},tf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},of=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},mi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],cf=[Q$,ef,rf,kc,Pc,nf,af,tf,of];function pi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function lf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Tc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function uf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Tc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(no(n.b)*s);Cn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function vf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=$f(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*no(r.b),indexBuffer:null,buffers:{}}}function $f(e,r){var n=new Uint32Array(no(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function bi(e,r){return e+"#"+r}var Mc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),kc(n),Pc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=bi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=di++,v||(v=pi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=di++,s||(s=pi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=lf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=ff(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=bi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),sf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=vf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=uf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Tc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Cn(m0(n),i.a),u=0;u<mi.length;u++){var T=n[mi[u]];T.toggle!==n.toggle&&T.enabled&&(cf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Cn(t,e.g),r});function ff(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function sf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var df=y(function(e,r,n){return s$(r,{g:n,f:{},h:e},wf,yf)}),mf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),pf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),bf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),gf=$(function(e,r){e.contextAttributes.antialias=!0}),hf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),_f=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function wf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(d0,r,t)},e.h);var n=$r.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),N$(function(){return o(Mc,e,n)})):(n=$r.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function yf(e,r){return r.f=e.f,Mc(r)}var xf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Sf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Sf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),gi=new Float64Array(3),hi=new Float64Array(3),Cf=y(function(e,r,n){return new Float64Array([e,r,n])}),Lf=function(e){return e[0]},zf=function(e){return e[1]},kf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Pf=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Dc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Dc);function Ac(e,r,n){return n===void 0&&(n=new Float64Array(3)),da(Dc(e,r,n),n)}$(Ac);function Bc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function da(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Bc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Tf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),bn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(bn);function yt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(yt);$(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=bn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(bn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(bn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(bn(r,a)+e[14])/n,t});var Mf=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Df=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},Af=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Bf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Bf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Ff=new Float64Array(16),Vf=new Float64Array(16),Uf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Ef=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Fc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ie(Fc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Fc(c,l,i,t,n,a)});function Vc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ie(Vc);U(function(e,r,n,a){return Vc(e,r,n,a,-1,1)});function Uc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],j=r[2],Y=r[3],E=r[4],R=r[5],N=r[6],F=r[7],Z=r[8],X=r[9],ie=r[10],ve=r[11],oe=r[12],me=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*j+b*Y,n[1]=t*C+u*T+m*j+w*Y,n[2]=i*C+v*T+f*j+x*Y,n[3]=c*C+s*T+g*j+_*Y,n[4]=a*E+l*R+d*N+b*F,n[5]=t*E+u*R+m*N+w*F,n[6]=i*E+v*R+f*N+x*F,n[7]=c*E+s*R+g*N+_*F,n[8]=a*Z+l*X+d*ie+b*ve,n[9]=t*Z+u*X+m*ie+w*ve,n[10]=i*Z+v*X+f*ie+x*ve,n[11]=c*Z+s*X+g*ie+_*ve,n[12]=a*oe+l*me+d*Me+b*Se,n[13]=t*oe+u*me+m*Me+w*Se,n[14]=i*oe+v*me+f*Me+x*Se,n[15]=c*oe+s*me+g*Me+_*Se,n}$(Uc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],j=r[8],Y=r[9],E=r[10],R=r[12],N=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*j+c*Y+v*E,n[9]=t*j+l*Y+s*E,n[10]=i*j+u*Y+d*E,n[11]=0,n[12]=a*R+c*N+v*F+m,n[13]=t*R+l*N+s*F+f,n[14]=i*R+u*N+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=da(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Bc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,T=g-f,j=c*c*v+u,Y=w+d,E=b+m,R=w-d,N=l*l*v+u,F=n[0],Z=n[1],X=n[2],ie=n[3],ve=n[4],oe=n[5],me=n[6],Me=n[7],Se=n[8],gr=n[9],hr=n[10],Za=n[11],Nu=n[12],Gu=n[13],Wu=n[14],Hu=n[15];return a[0]=F*x+ve*_+Se*C,a[1]=Z*x+oe*_+gr*C,a[2]=X*x+me*_+hr*C,a[3]=ie*x+Me*_+Za*C,a[4]=F*T+ve*j+Se*Y,a[5]=Z*T+oe*j+gr*Y,a[6]=X*T+me*j+hr*Y,a[7]=ie*T+Me*j+Za*Y,a[8]=F*E+ve*R+Se*N,a[9]=Z*E+oe*R+gr*N,a[10]=X*E+me*R+hr*N,a[11]=ie*E+Me*R+Za*N,a[12]=Nu,a[13]=Gu,a[14]=Wu,a[15]=Hu,a});function Yf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Yf);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Rf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Rf);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Ac(e,r,ao),t=da(yt(n,a,gi),gi),i=da(yt(a,t,hi),hi),c=Ff,l=Vf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Uc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=nv,Wn=Qu,Ec=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),to=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(to,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),_i=function(e){return p(to,y(function(r,n,a){return o(A,P(r,n),a)}),z,e)},Yc=1,jf=2,Rc=0,ye=function(e){return{$:1,a:e}},oo=$(function(e,r){return{$:3,a:e,b:r}}),wi=$(function(e,r){return{$:0,a:e,b:r}}),jc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Nf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},Gf=kv,Wf=Jv,Fe=sc,Dr=$(function(e,r){return o(Cv,e,Da(r))}),io=$(function(e,r){return h(o(Sv,e,r))}),Nc=function(e){return o(Dr,`
    `,o(io,`
`,e))},Dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Yr=function(e){return p(Dn,$(function(r,n){return n+1}),0,e)},Hf=av,If=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Rr=$(function(e,r){return p(If,e,r,z)}),Gc=$(function(e,r){return p(Hf,e,o(Rr,0,Yr(r)-1),r)}),tr=Fv,Wc=function(e){var r=tr(e);return 97<=r&&r<=122},Hc=function(e){var r=tr(e);return r<=90&&65<=r},Jf=function(e){return Wc(e)||Hc(e)},Of=function(e){var r=tr(e);return r<=57&&48<=r},qf=function(e){return Wc(e)||Hc(e)||Of(e)},Ve=function(e){return p(Dn,A,z,e)},un=_v,Zf=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Nc(Kf(r))))}),Kf=function(e){return o(Xf,e,z)},Xf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=un(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Jf(x)&&o(Gf,qf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Dr,"",Ve(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Fe(Yr(s))+" ways:"));return o(Dr,`

`,o(A,g,o(Gc,Zf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Dr,"",Ve(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Dr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(Nc(o(Wf,4,f))+(`

`+m))}}),Ue=32,xt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),St=Ou,co=sv,lo=$(function(e,r){return ii(r)/ii(e)}),Qf=$v,Ln=co(o(lo,2,Ue)),Ic=L(xt,0,Ln,St,St),Jc=Zu,Oc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var qc=dv,Ct=qu,Te=$(function(e,r){return J(e,r)>0?e:r}),es=function(e){return{$:0,a:e}},uo=Ku,rs=$(function(e,r){e:for(;;){var n=o(uo,Ue,e),a=n.a,t=n.b,i=o(A,es(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),ns=function(e){var r=e.a;return r},as=$(function(e,r){e:for(;;){var n=co(r/Ue);if(n===1)return o(uo,Ue,e).a;var a=o(rs,e,z),t=n;e=a,r=t;continue e}}),Zc=$(function(e,r){if(r.l){var n=r.l*Ue,a=qc(o(lo,Ue,n-1)),t=e?Ve(r.z):r.z,i=o(as,t,r.l);return L(xt,Ct(r.p)+n,o(Te,5,a*Ln),i,r.p)}else return L(xt,Ct(r.p),Ln,St,r.p)}),ts=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Zc,!1,{z:a,l:n/Ue|0,p:t});var i=Oc(p(Jc,Ue,r,e)),c=e,l=r-Ue,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),os=$(function(e,r){if(e<=0)return Ic;var n=e%Ue,a=p(Jc,n,e-n,r),t=e-n-Ue;return S(ts,r,t,e,z,a)}),Oe=function(e){return!e.$},D=Gv,K=Ev,M=Nv,$e=Yv,ma=Wv,is=Hv,Ae=Uv,vo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Gr("div"),cs=function(e){return{$:2,a:e}},Kc=$(function(e,r){return e}),Xc=$(function(e,r){return{b1:r.b1,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Br=function(e){return e},ls=Br,yi=Ie(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),us=Pv,Ar=wv,Xr=Lv,An=$(function(e,r){return e<1?r:p(Xr,e,Ar(r),r)}),Aa=Mv,Ba=function(e){return e===""},Fa=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),Qc=Dv,xi=he(function(e,r,n,a,t){if(Ba(t)||o(us,"@",t))return q;var i=o(Aa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Qc(o(An,c+1,t));if(l.$===1)return q;var u=l;return ne(we(yi,e,o(Fa,c,t),u,r,n,a))}else return ne(we(yi,e,t,q,r,n,a))}),Si=U(function(e,r,n,a){if(Ba(a))return q;var t=o(Aa,"/",a);if(t.b){var i=t.a;return S(xi,e,o(An,i,a),r,n,o(Fa,i,a))}else return S(xi,e,"/",r,n,a)}),Ci=y(function(e,r,n){if(Ba(n))return q;var a=o(Aa,"?",n);if(a.b){var t=a.a;return L(Si,e,ne(o(An,t+1,n)),r,o(Fa,t,n))}else return L(Si,e,q,r,n)});$(function(e,r){if(Ba(r))return q;var n=o(Aa,"#",r);if(n.b){var a=n.a;return p(Ci,e,ne(o(An,a+1,r)),o(Fa,a,r))}else return p(Ci,e,q,r)});var vs=Tv,$o=function(e){},Bn=Nr,$s=Bn(0),el=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Dn,e,r,Ve(d)):L(el,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return L(el,e,r,0,n)}),re=$(function(e,r){return p(br,$(function(n,a){return o(A,e(n),a)}),z,r)}),pa=ht,fo=$(function(e,r){return o(pa,function(n){return Bn(e(n))},r)}),fs=y(function(e,r,n){return o(pa,function(a){return o(pa,function(t){return Bn(o(e,a,t))},n)},r)}),ss=function(e){return p(br,fs(A),Bn(z),e)},ds=n$,ms=$(function(e,r){var n=r;return pc(o(pa,ds(e),n))}),ps=y(function(e,r,n){return o(fo,function(a){return 0},ss(o(re,ms(e),r)))}),bs=y(function(e,r,n){return Bn(0)}),gs=$(function(e,r){var n=r;return o(fo,e,n)});ar.Task=e$($s,ps,bs,gs);var hs=gc("Task"),so=$(function(e,r){return hs(o(fo,e,r))}),_s=V$,ws=gv,ba={$:1},rl=function(e){return{$:2,a:e}},Va={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),vn=function(e){var r=e.b.B;return r.a},ys=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Ge,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},nl=function(e){var r=e.b;return o(Ge,Va,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),xs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?nl(n):n;case 2:var i=a.a.cR;return(J(i+r.eH,vn(n).b1)>0?o(te,ys,dr(o(Ge,ba,t))):Br)(o(Ge,rl({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Xc,l.ey,er(r,{b1:l.b1+r.eH})),s=o(e,v,u);return o(Ge,Va,{B:P(v,s),ab:z,T:o(A,t.B,t.T)})}}),al=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ss=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Cs=$(function(e,r){return Ve(p(Ss,e,r,z))}),tl=y(function(e,r,n){if(r<=0)return z;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Cs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(tl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Ls=$(function(e,r){return p(tl,0,e,r)}),zs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ve(n),le(h([a]),t)),c=o(Ls,e,i),l=o(al,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,ba,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var d=s.a,m=s.b;return o(Ge,ba,{B:d,ab:z,T:m})}else return r}}),ks=function(e){var r=e.b;return o(Ge,ba,r)},Ps=function(e){var r=e.b;return o(Ge,rl({cR:vn(e).b1}),r)},Ts=$(function(e,r){switch(e.$){case 1:return ks(r);case 2:return nl(r);case 3:return Ps(r);default:var n=e.a;return o(zs,n,r)}}),ol=$(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Ms=$(function(e,r){return er(r,{av:e(r.av)})}),Ds=function(e){return{$:3,a:e}},As=function(e){return{$:2,a:e}},il=$(function(e,r){return{$:0,a:e,b:r}}),Bs=$(function(e,r){return{$:1,a:e,b:r}}),ze=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),O=function(e){return e<0?-e:e},mo=Av,Fs=y(function(e,r,n){return o(dr,0/0,mo(o(e,r,n)))}),cl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Vs=xv,ll=function(e){return p(Vs,A,z,e)},Us=$(function(e,r){var n=o(cl,function(a){return a!=="0"&&a!=="."},ll(r));return le(e&&n?"-":"",r)}),be=sc,Lt=hv,ul=Vv,vl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=un(n);if(a.$===1)return"01";var t=a.a;return o(Lt,"0",vl(t))}else{var i=tr(r);return i>=48&&i<57?o(Lt,ul(i+1),n):"0"}},zt=fv,Es=bv,Ua=function(e){return o(Lt,e,"")},$l=y(function(e,r,n){return e<=0?n:p($l,e>>1,le(r,r),e&1?le(n,r):n)}),zn=$(function(e,r){return p($l,e,r,"")}),kt=y(function(e,r,n){return le(n,o(zn,e-Ar(n),Ua(r)))}),Pt=yv,fl=function(e){var r=o(io,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Ys=function(e){var r=o(io,"e",be(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,Qc(o(vs,"+",t)?o(An,1,t):t)),c=fl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(dr,"0",o(ze,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ze,ol(Ua),un(le(o(zn,O(i),"0"),v))))):p(kt,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Rs=y(function(e,r,n){if(zt(n)||Es(n))return be(n);var a=n<0,t=fl(Ys(O(n))),i=t.a,c=t.b,l=Ar(i)+r,u=le(o(zn,-l+1,"0"),p(kt,l,"0",le(i,c))),v=Ar(u),s=o(Te,1,l),d=o(e,a,p(Xr,s,v,u)),m=p(Xr,0,s,u),f=d?Pt(o(dr,"1",o(ze,vl,un(Pt(m))))):m,g=Ar(f),b=f==="0"?f:r<=0?le(f,o(zn,O(r),"0")):J(r,Ar(c))<0?p(Xr,0,g-r,f)+("."+p(Xr,g-r,g,f)):le(i+".",p(kt,r,"0",c));return o(Us,a,b)}),sl=Rs($(function(e,r){var n=un(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(tr(t))})),js=Fs(sl),Ns=y(function(e,r,n){var a=o(lo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(js,t,n)}),dl=rv,po=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(dl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},an=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(W,0,r,n,S(W,1,v,s,d,m),S(W,1,i,c,l,u))}else return S(W,e,i,c,S(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(W,0,v,s,S(W,1,g,b,w,x),S(W,1,r,n,m,t))}else return S(W,e,r,n,a,t)}),Tt=y(function(e,r,n){if(n.$===-2)return S(W,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(dl,e,t);switch(u){case 0:return S(an,a,t,i,p(Tt,e,r,c),l);case 1:return S(W,a,t,r,c,l);default:return S(an,a,t,i,c,p(Tt,e,r,l))}}),_n=y(function(e,r,n){var a=p(Tt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(W,1,t,i,c,l)}else{var u=a;return u}}),Gs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ml=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(W,0,f,g,S(W,1,n,a,S(W,0,i,c,l,u),b),S(W,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(W,1,n,a,S(W,0,i,c,l,u),S(W,0,s,d,m,x))}else return e},Li=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(W,0,i,c,S(W,1,u,v,s,d),S(W,1,n,a,m,S(W,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return S(W,1,n,a,S(W,0,i,c,C,m),S(W,0,g,b,w,x))}else return e},Ws=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(W,n,l,u,v,S(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Li(r)}else break e;else return c.a,c.d,Li(r);else break e;return r}}),na=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(W,r,n,a,na(t),l);var u=ml(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(an,v,s,d,na(m),f)}else return ir}else return S(W,r,n,a,na(t),l)}else return ir},wn=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(W,n,a,t,o(wn,e,i),c);var u=ml(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(an,v,s,d,o(wn,e,m),f)}else return ir}else return S(W,n,a,t,o(wn,e,i),c);else return o(Hs,e,It(Ws,e,r,n,a,t,i,c))}),Hs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(xr(e,a)){var l=Gs(c);if(l.$===-1){var u=l.b,v=l.c;return S(an,n,u,v,i,na(c))}else return ir}else return S(an,n,a,t,i,o(wn,e,c))}else return ir}),Is=$(function(e,r){var n=o(wn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(W,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(po,e,n));if(a.$)return o(Is,e,n);var t=a.a;return p(_n,e,t,n)}),Js=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,ze(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Bs,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,ze(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(il,P(i,c),p(Ns,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,ze(function(a){return a.$===3?Ds(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,ze(function(a){return a.$===2?As(n):a}))}},Os=function(e){return Ms(Js(e))},qs=$(function(e,r){return o(re,Os(e),r)}),Zs=$(function(e,r){return er(r,{ey:o(qs,e,r.ey)})}),Ks=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,er(a,{B:o(ol,Zs(e),a.B)}))}),Xs=$(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Qs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,er(t,{B:o(Xs,o(e,i.a,r),i)}))}),ed=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return er(a,{aL:!a.aL});case 2:var t=n.a;return er(a,{G:p(xs,e,t,a.G)});case 3:var i=n.a;return er(a,{G:o(Ks,i,a.G)});case 4:var c=n.a;return er(a,{G:p(Qs,r,c,a.G)});default:var l=n.a;return er(a,{G:o(Ts,l,a.G)})}}),rd=$(function(e,r){return o(Ge,Va,{B:P(e,r(e)),ab:z,T:z})}),nd=a$,zi=nd(z),ga=jv,kn=Rv,ad=l$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({b1:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ae({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(M,"alt",K))},o(M,"control",K))},o(M,"down",K))},o(M,"downs",ga(kn)))},o(M,"left",K))},o(M,"pressedKeys",ga(kn)))},o(M,"right",K))},o(M,"shift",K))},o(M,"up",K))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ae({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(M,"down",K))},o(M,"isDown",K))},o(M,"move",K))},o(M,"rightDown",K))},o(M,"rightUp",K))},o(M,"up",K))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Ae({eV:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Ae({eC:r,eD:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),td=function(e){return{$:4,a:e}},od={$:0},id=mc,Je=$(function(e,r){return o(wc,e,id(r))}),H=Je("className"),cd=function(e){var r=e.b.B;return r.b},ha=Je("id"),ld=d$,_a=ld,ud=m$,se=ud,vd={$:1},$d=function(e){return{$:3,a:e}},fd=function(e){return{$:5,a:e}},ki=Gr("a"),bo=Gr("button"),Pi=function(e){return o(Je,"href",g$(e))},sd=zr("clip-rule"),Ce=zr("d"),dd=zr("fill"),pl=hc("http://www.w3.org/2000/svg"),md=pl("svg"),pd=zr("viewBox"),bd=o(p$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=md(h([pd("0 0 24 24"),dd("currentColor"),o(se,"width","100%"),o(se,"height","100%"),bd("http://www.w3.org/2000/svg")])),gd=zr("fill-rule"),Le=pl("path"),en={eB:Ee(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),eP:Ee(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),eU:Ee(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),fc:Ee(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),fd:Ee(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),fn:Ee(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),fo:Ee(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),z)])),fp:Ee(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),fq:Ee(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),fL:Ee(h([o(Le,h([gd("evenodd"),sd("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),fM:Ee(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),f0:Ee(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},hd=function(e){return{$:0,a:e}},bl=_c,gl=$(function(e,r){return o(bl,e,hd(r))}),go=function(e){return o(gl,"click",Ae(e))},Ti=Je("target"),_d=Je("title"),Mt=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(W,n,a,o(e,a,t),o(Mt,e,i),o(Mt,e,c))}),wd=_t,mr=wd,yd=function(e){return p(to,y(function(r,n,a){return o(A,n,a)}),z,e)},xd=$(function(e,r){return{$:3,a:e,b:r}}),Sd=$(function(e,r){return{$:2,a:e,b:r}}),Cd=$(function(e,r){return{$:0,a:e,b:r}}),Ld=$(function(e,r){return{$:1,a:e,b:r}}),Ea=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),zd=L(Ea,0/255,0/255,0/255,1),kd=mc,Pd=$(function(e,r){return o(wc,e,kd(r))}),Td=Pd("checked"),Ze=mv,Md=y(function(e,r,n){return le(o(zn,e-Ar(n),Ua(r)),n)}),wa=ov,hl=function(e){var r=function(n){return n<10?Fe(n):Ua(ul(87+n))};return e<16?r(e):le(hl(e/16|0),r(o(wa,16,e)))},Dd=o(te,hl,o(Md,2,"0")),ho=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b0:a,b7:n,cG:r}},Ad=function(e){var r=ho(e),n=r.cG,a=r.b7,t=r.b0;return o(Dr,"",o(A,"#",o(re,o(te,Ze,Dd),h([n*255,a*255,t*255]))))},Dt=Je("htmlFor"),At=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ya=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Bd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),_o=$(function(e,r){return p(br,Bd(e),z,r)}),_l=U(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),Fd=j$,Vd=Bv,Ud=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Ed=R$,Yd=function(e){return o(Ed,{et:!1,fe:!1},e)},wo=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},Rd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),jd=function(e){return{$:2,a:e}},Nd=function(e){return{$:0,a:e}},Gd=function(e){return{$:1,a:e}},Qa=$(function(e,r){return tr(r)-tr(e)}),et=y(function(e,r,n){var a=tr(n);return J(tr(e),a)<1&&J(a,tr(r))<1}),Wd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Gd(r))},a=p(et,"0","9",r)?ue(o(Qa,"0",r)):p(et,"a","z",r)?ue(10+o(Qa,"a",r)):p(et,"A","Z",r)?ue(10+o(Qa,"A",r)):ye(Nd(r));return o(ya,n,a)}),wl=$(function(e,r){var n=un(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ya,function(c){return o(ya,function(l){return ue(c+l*e)},o(wl,e,i))},o(Wd,e,t))}),Hd=$(function(e,r){return 2<=e&&e<=36?o(wl,e,Pt(r)):ye(jd(e))}),Id=Hd(16),Jd=y(function(e,r,n){return L(Ea,e,r,n,1)}),yl=U(function(e,r,n,a){return L(Ea,e,r,n,a)}),$n=tv,Od=$(function(e,r){var n=o($n,10,e);return Ze(r*n)/n}),qd=zv,Zd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ll(n);if(a.b&&!a.b.b){var t=a.a;return Vd(h([t,t]))}else return n};return o(te,qd,o(te,function(n){return o(ze,function(a){return p(Fd,1,a,n)},Yd(e))},o(te,At(wo),o(te,ze(function(n){return n.fE}),o(te,ze(_o(Br)),o(te,Ud("Parsing hex regex failed"),ya(function(n){var a=o(re,o(te,r,o(te,Id,Rd(Qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(L(yl,t/255,c/255,u/255,o(Od,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Jd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),xa=Gr("input"),Bt=Gr("label"),Ft=Je("name"),xl=$(function(e,r){return p(br,M,r,e)}),Kd=o(xl,h(["target","checked"]),K),Xd=function(e){return o(gl,"change",o(ma,e,Kd))},Qd=function(e){return P(e,!0)},em=function(e){return{$:1,a:e}},rm=$(function(e,r){return o(bl,e,em(r))}),nm=o(xl,h(["target","value"]),kn),yo=function(e){return o(rm,"input",o(ma,Qd,o(ma,e,nm)))},Sl=Je("max"),Cl=Je("min"),Ll=function(e){return o(Je,"step",e)},Sa=Je("type"),xo=Je("value"),Mi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,z,h([o(Bt,h([Dt(r)]),h([o(I,h([H("relative w-full")]),h([o(I,h([H("inline-block")]),h([mr(r)])),o(I,h([H("inline-block float-right")]),h([mr(be(n))]))]))])),o(xa,h([Sa("range"),o(se,"width","100%"),ha(r),Ft(r),Cl(be(a)),Sl(be(t)),xo(be(n)),Ll(be(i)),yo(o(te,mo,o(te,dr(42),c)))]),z)]))},am=$(function(e,r){if(r.$)return e;var n=r.a;return n}),tm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([H("h-12 py-4")]),h([o(Bt,h([H("block"),Dt(e)]),h([o(xa,h([H("relative bottom-[1px] align-middle mr-2"),Sa("checkbox"),ha(e),Ft(e),Xd(xd(e)),Td(c)]),z),mr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Mi({b9:e,cl:i,cp:t,ct:Cd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Mi({b9:e,cl:i,cp:t,ct:o(te,Ze,Ld(e)),cP:1,cW:c});default:var c=r.a;return o(I,z,h([o(I,h([o(se,"margin-bottom","6px")]),h([o(Bt,h([Dt(e)]),h([mr(e)]))])),o(xa,h([Sa("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ha(e),Ft(e),yo(function(l){return o(Sd,e,o(am,zd,Zd(l)))}),xo(Ad(c))]),z)]))}}),om=function(e){return o(I,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([H("text-lg pb-2")]),h([mr(e.ff)])),o(I,h([H("pl-2 pr-2")]),yd(o(Mt,tm,e.av)))]))},im=function(e){return o(I,h([H("text-xs text-white60")]),o(re,om,e))},cm=function(e){return o(I,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([mr("clock: "+o(sl,3,vn(e).b1))]))},lm=function(e){e.a;var r=e.b.T;return o(ze,function(n){return Ze(60/(vn(e).b1-n))},o(ze,o(te,ns,function(n){return n.b1}),wo(o(al,59,r))))},um=function(e){return o(I,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=lm(e);if(r.$===1)return h([mr("... Fps")]);var n=r.a;return h([mr(Fe(n)+" Fps")])}())},vm=function(e){return{$:0,a:e}},$m=function(e){var r=e.b.T;return Yr(r)},fm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Yr(r)+1+Yr(n)},sm=function(e){return o(xa,h([H("absolute w-full"),Sa("range"),Cl(Fe(0)),Sl(Fe(fm(e)-1)),xo(Fe($m(e))),Ll(Fe(1)),yo(o(te,mo,o(te,dr(42),o(te,Ze,vm))))]),z)},Di={$:1},dm={$:3},mm={$:2},zl=function(e){return!e.b},Ai=$(function(e,r){return o(bo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),go(e)]),h([mr("REC")]))}),Bi=$(function(e,r){return o(bo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),go(r)]),h([o(I,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([e]))]))}),pm=function(e){var r=e.a,n=e.b.ab;return o(I,h([H("py-1")]),h([function(){switch(r.$){case 0:return o(Ai,Di,"text-red-500 font-bold");case 1:return o(Ai,mm,"text-white60 hover:text-white80 font-bold");default:return o(I,z,z)}}(),function(){switch(r.$){case 0:return o(I,z,z);case 1:return zl(n)?o(I,z,z):o(Bi,en.fo,dm);default:return o(Bi,en.fn,Di)}}()]))},bm=function(e){return o(I,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([sm(e),pm(e),um(e),cm(e)]))},gm=function(e){var r=e.a;return xr(r,Va)},hm=$(function(e,r){var n=gm(r.G)?o(I,z,z):o(I,h([H("absolute pointer-events-none w-8 h-8"),o(se,"left",be(e.fq.fU+.5*e.cM.fS)+"px"),o(se,"top",be(-e.fq.fY+.5*e.cM.eV)+"px")]),h([o(I,h([H(e.fq.e1?"text-black80":"text-black40")]),h([en.fq]))]));return o(I,z,h([n]))}),_m=$(function(e,r){var n=o(bo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),go(vd),_d("Distraction Free Mode")]),h([en.f0])),a=o(I,h([H("absolute w-8 bottom-12")]),h([o(ki,h([H("text-twitterBlue40 hover:text-twitterBlue"),Pi("https://twitter.com/AzizErkalSelman"),Ti("_blank")]),h([en.fM]))])),t=o(I,h([H("absolute w-8 bottom-2")]),h([o(ki,h([H("text-githubCat40 hover:text-githubCat"),Pi("https://github.com/erkal/elm-3d-playground-exploration"),Ti("_blank")]),h([en.eP]))]));return r.aL?o(I,h([H("fixed w-10 h-10 p-1")]),h([n])):o(I,z,h([o(I,h([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",be(e.cM.eV-80)+"px")]),h([o(_a,$d,im(vn(r.G).ey))])),o(I,h([H("absolute bottom-0 left-10 h-20"),o(se,"width",e.cM.fS>600?"600px":be(e.cM.fS-40)+"px")]),h([o(_a,fd,bm(r.G))])),o(hm,e,r)]))}),wm=y(function(e,r,n){var a=cd(n.G),t=vn(n.G);return o(I,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(se,"width",be(t.cM.fS)+"px"),o(se,"height",be(t.cM.eV)+"px")]),h([o(I,h([H("fixed")]),h([o(_a,Kc(od),o(e,t,a))])),o(I,h([ha("gui")]),h([o(_m,t,n),o(_a,td,o(r,t,a))]))]))}),ym=Ie(function(e,r,n,a,t,i){var c=$(function(u,v){return P(L(ed,r,i,u,v),zi)}),l=function(u){var v=o(Xc,n,u.e0);return P({aL:u.e0.cM.fS<500,G:o(rd,v,a)},zi)};return _s({e$:l,fF:Kc(ad(cs)),fN:c,fP:o(wm,e,t)})}),xm=U(function(e,r,n,a){return we(ym,e,r,n,a,$(function(t,i){return o(I,z,z)}),y(function(t,i,c){return c}))}),Sm=function(e){return{}},Cm=y(function(e,r,n){return{av:n,e2:r,ff:e}}),kl=ir,Lm=function(e){return p(Dn,$(function(r,n){var a=r.a,t=r.b;return p(_n,a,t,n)}),kl,e)},zm=y(function(e,r,n){return p(Cm,e,r,Lm(n))}),Fi=zm,In=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(il,P(a,t),n))}),km=h([p(Fi,"Parameters",!0,h([p(In,"a",P(0,3),1)])),p(Fi,"Colors and light",!0,h([p(In,"lux",P(2,5),5),p(In,"intensity above",P(0,300),60),p(In,"intensity below",P(0,300),290)]))]),Pm=$(function(e,r){return r}),Tm=vv,_r=pv,Mm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Te,O(c),o(Te,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=_r(s*s+v*v+u*u);return ne({fU:s/d,fY:v/d,c$:u/d})}else return q}),aa=function(e){return e},So=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),ta=function(e){var r=e,n=o(Te,O(r.fU),o(Te,O(r.fY),O(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=_r(i*i+t*t+a*a);return ne({fU:i/c,fY:t/c,c$:a/c})}else return q},Ca=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Dm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),Pl=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Am=$(function(e,r){var n=e,a=r;return J(a,n)<0}),Bm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Fm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),Vm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},rr=0,Tl={fU:0,fY:0,c$:0},Um=y(function(e,r,n){return o(At,function(a){var t=o(Bm,o(Fm,a,r),r);return o(At,function(i){var c=o(So,r,e),l=o(Dm,n,c),u=o(Pl,rr,l)?c:o(Am,rr,l)?Vm(c):Tl;return o(ze,function(v){return B(a,i,v)},ta(u))},ta(t))},ta(e))}),Em=function(e){var r=e,n=O(r.c$),a=O(r.fY),t=O(r.fU);if(J(t,a)<1)if(J(t,n)<1){var i=_r(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=_r(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(J(a,n)<1){var i=_r(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=_r(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},Co=function(e){var r=Em(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return P(r,c)},Qr=function(e){var r=e;return r},Ke=function(e){return e},Ym=$(function(e,r){var n=Co(e),a=n.a,t=n.b;return Ke({cu:r,cZ:a,c_:t,c0:e})}),Rm=function(e){var r=o(Ca,e.aR,e.dc),n=Qr(e.ee),a=o(So,r,n),t=p(Um,r,n,a);if(t.$){var v=ta(r);if(v.$){var d=Co(e.ee),m=d.a,f=d.b;return Ke({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Ym,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Ke({cu:e.dc,cZ:u,c_:l,c0:c})}},Ne={fU:0,fY:0,c$:0},jm=function(e){return{$:0,a:e}},de=function(e){var r=e;return O(r)},oa=function(e){var r=e;return .5*r},Nm=uv,Gm=function(e){var r=e;return Nm(r)},Wm=function(e){var r=oa(de(e.ef)),n=Gm(r);return{cF:jm(n),cX:e.cX}},fr=function(e){return e},Lo=fr({fU:0,fY:1,c$:0}),cr=function(e){return e},Hm=function(e){var r=e.aR,n=e.dc,a=e.ee;return Wm({ef:cr(2*Tm(.5)),cX:Rm({dc:aa(n),aR:aa(r),ee:o(dr,Lo,o(Mm,Ne,aa(a)))})})},jr=cv,Im=$(function(e,r){return(r-qc(r/e)*e)/e}),tn=iv,Jm=function(e){return 2*tn*e},Ml=U(function(e,r,n,a){return e+(r-e)*(1+jr(Jm(o(Im,n,a))))/2}),Om=function(e){return Hm({dc:{fU:10,fY:L(Ml,-20,20,20,e.b1),c$:60},aR:{fU:0,fY:0,c$:0},ee:{fU:0,fY:1,c$:0}})},zo=function(e){return e},Dl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),qm=function(e){var r=e;return r},Zm=function(e){var r=p(Dl,1667,25e3,qm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return zo({fU:n,fY:a})},Km=function(e){return e},Xm=function(e){return{$:0,a:e}},Qm=Xm,e0={$:3},r0=e0,n0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),a0=n0,t0=$(function(e,r){return r.b?p(br,A,r,e):e}),We=function(e){return p(br,t0,z,e)},ko=$(function(e,r){return We(o(re,e,r))}),o0=function(e){return{$:1,a:e}},i0=o0,c0=function(e){return o(zr,"height",Fe(e))},l0=function(e){return f$(b$(e))},u0=l0,v0=function(e){return{$:2,a:e}},$0=v0,f0=function(e){return o(Dr,"",e)},s0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return f0(h(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},d0=$(function(e,r){switch(r.$){case 0:return o(mf,e,r);case 1:return o(pf,e,r);case 2:return o(bf,e,r);case 3:return o(gf,e,r);case 4:return o(hf,e,r);default:return o(_f,e,r)}}),m0=$(function(e,r){switch(r.$){case 0:return o(W$,e,r);case 1:return o(H$,e,r);case 2:return o(I$,e,r);case 3:return o(J$,e,r);case 4:return o(O$,e,r);case 5:return o(q$,e,r);case 6:return o(Z$,e,r);case 7:return o(K$,e,r);default:return X$(e)}}),p0=y(function(e,r,n){return p(df,e,r,n)}),Vi=function(e){var r=e;return r},fn=Mf,rt=L(fn,1,1,1,1),Xe=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),b0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),g0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(b0,n*a/t,n,n*(1-a-t)/t)}),Fn=Cf,h0=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ya=$(function(e,r){return h0(o(g0,e,r))}),Al=$(function(e,r){return{dk:xr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bV,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bV,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bV,bV:e.bV*r.bV}}),nr=Uf,_0=function(e){return nr({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},nt=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=L(fn,a.bV,a.bV,a.bV,i);return we(t,e,c,_0(a),a.dk,r,n)}),Bl=Ie(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Al,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(nt,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(A,S(nt,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,C=o(A,S(nt,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:C};default:var T=t.a;return p(Dn,L(Bl,e,r,n,a),i,T)}}),w0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Fl=w0,Po=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),y0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Po,518,r,n,a)},x0=$(function(e,r){return{$:6,a:e,b:r}}),S0=x0,Vl=h([y0({V:1,W:0,Z:!1}),L(Fl,!1,!1,!1,!1),o(S0,0,1)]),on=519,To=8,Ul=15,rn=7681,C0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=G$,L0=$(function(e,r){return{$:0,a:e,b:r}}),z0=L0({c8:1,dh:0,dQ:5}),Be=xf,k0=z0(h([{dY:o(Be,-1,-1)},{dY:o(Be,1,-1)},{dY:o(Be,-1,1)},{dY:o(Be,1,1)}])),P0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},T0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Mo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(T0,a,t,i)))}),Do=function(e){return p(Mo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Ao=function(e){return S(ae,h([Do(e),L(Fl,!1,!1,!1,!1)]),P0,C0,k0,{})},M0=Ao({a8:rn,ci:0,cH:To,bl:on,cY:Ul,bt:rn,bu:rn}),D0=516,Ui=5386,xe=7680,A0=function(e){return o($n,2,e+4)},El=function(e){return Ao({a8:xe,ci:Ul,cH:To,bl:D0,cY:A0(e),bt:Ui,bu:Ui})},B0=y(function(e,r,n){return We(h([p(Xe,e,n,Vl),h([El(r),M0])]))}),F0=$(function(e,r){return We(o(Gc,B0(e),r))}),V0=function(e){var r=e.Z,n=e.W,a=e.V;return L(Po,513,r,n,a)},U0=V0({V:1,W:0,Z:!0}),E0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Y0=function(e){var r=e.bT,n=e.bE,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return E0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},R0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ei=$(function(e,r){var n=e,a=r;return p(R0,32774,n,a)}),j0=1,Yi=771,N0=770,Bo=Y0({bv:0,aH:o(Ei,j0,Yi),by:0,bA:o(Ei,N0,Yi),bE:0,bT:0}),Or=h([U0,Bo]),G0=function(e){var r=e;return r.dJ},W0=function(e){var r=e;return r.dK},Yl=function(e){var r=e;return r.dL},H0=function(e){var r=e;return r.dM},I0=function(e){var r=e;return r.dN},Rl=function(e){var r=e;return r.dO},sr=$(function(e,r){var n=e,a=r;return a-n}),jl=function(e){return B(o(sr,H0(e),G0(e)),o(sr,I0(e),W0(e)),o(sr,Rl(e),Yl(e)))},Wr=function(e){var r=e;return r.cu},Ri=function(e){var r=e;return Wr(r)},J0=function(e){return e},O0=function(e){return Ke({cu:J0({fU:e.H,fY:e.I,c$:e.J}),cZ:fr({fU:e.q,fY:e.r,c$:e.s}),c_:fr({fU:e.t,fY:e.u,c$:e.v}),c0:fr({fU:e.w,fY:e.x,c$:e.y})})},at=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),Nl=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fU:c*g.fU+l*g.fY+u*g.c$,fY:c*m.fU+l*m.fY+u*m.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),kr=function(e){var r=e;return r.cZ},Pr=function(e){var r=e;return r.c_},Tr=function(e){var r=e;return r.c0},Gl=$(function(e,r){return{cu:o(Nl,e,Wr(r)),cZ:o(at,e,kr(r)),c_:o(at,e,Pr(r)),c0:o(at,e,Tr(r))}}),Vt=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),La=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Te,n,a)}),ia=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ia,n,a)}),q0=$(function(e,r){var n=La(r),a=La(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),He=function(e){var r=e;return r},Z0=function(e){var r=e;return B(r.fU,r.fY,r.c$)},yn=$(function(e,r){var n=e,a=r;return a+n}),K0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=oa(de(a)),c=oa(de(n)),l=oa(de(t)),u=Z0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(yn,c,v),dK:o(yn,i,s),dL:o(yn,l,d),dM:o(sr,c,v),dN:o(sr,i,s),dO:o(sr,l,d)}}),ji=U(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,d=He(Tr(e)),m=O(l*d.fU)+O(c*d.fY)+O(i*d.c$),f=He(Pr(e)),g=O(l*f.fU)+O(c*f.fY)+O(i*f.c$),b=He(kr(e)),w=O(l*b.fU)+O(c*b.fY)+O(i*b.c$),x=o(K0,B(w,g,m),o(Nl,e,p(Vt,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(q0,_,x))}),Ut=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Ut,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Gl,O0(v),e),m=r*v.bV,f=e,g=r,b=L(Ut,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Hr=Lf,Ir=zf,Jr=kf,Wl=function(e){return{$:4,a:e}},X0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return Wl(o(X0,e,z))},Q0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bV:1},ep=function(e){var r=e;return r},Ni=Ao({a8:rn,ci:0,cH:To,bl:on,cY:255,bt:rn,bu:rn}),rp=function(e){var r=e,n=o(Te,O(r.fU),o(Te,O(r.fY),O(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=_r(i*i+t*t+a*a);return c*n}else return rr},De={by:0,eu:!1,bE:0,cD:0,bT:0,cT:0,fU:0,fY:0,c$:0},Re=$(function(e,r){var n=e,a=r;return nr({ds:n.fU,dt:n.bT,du:a.fU,dv:a.bT,dw:n.fY,dx:n.bE,dy:a.fY,dz:a.bE,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),gn=P({bd:o(Re,De,De),bJ:o(Re,De,De),bK:o(Re,De,De),bL:o(Re,De,De)},L(fn,0,0,0,0)),Q=$(function(e,r){var n=r;return e*n}),Gi=function(e){var r=e;return-r},Hl=514,Il=function(e){var r=e.Z,n=e.W,a=e.V;return L(Po,515,r,n,a)},Jl=240,np=h([Il({V:1,W:0,Z:!0}),Do({a8:xe,ci:Jl,cH:0,bl:Hl,cY:0,bt:xe,bu:xe}),Bo]),ap=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=de(a),l=c,u=de(t),v=u,s=n.cF;if(s.$){var m=s.a;return zt(v)?nr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):nr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return zt(v)?nr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):nr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Jn=$(function(e,r){return(1&e>>r)===1?0:1}),tp=function(e){return h([Il({V:1,W:0,Z:!0}),Do({a8:xe,ci:Jl,cH:e,bl:Hl,cY:0,bt:xe,bu:xe}),Bo])},op=y(function(e,r,n){return We(o(re,function(a){var t=a<<4,i=L(fn,o(Jn,a,0),o(Jn,a,1),o(Jn,a,2),o(Jn,a,3));return p(Xe,e,P(r,i),tp(t))},o(Rr,1,o($n,2,n)-1)))}),yr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},nn=function(e){var r=e;return r},ip=Ef,Wi=function(e){var r=e;return yr(Tr(r))},Ol=fr({fU:1,fY:0,c$:0}),Fo=Ol,Vo=Lo,Uo=fr({fU:0,fY:0,c$:1}),ql=Uo,cp={cu:Ne,cZ:Fo,c_:Vo,c0:ql},Un=function(e){var r=e;return r},lp=function(e){var r=Un(Wr(e)),n=He(Tr(e)),a=He(Pr(e)),t=He(kr(e));return nr({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},up=$(function(e,r){var n=r;return lp(o(Gl,n,e))}),vp=function(e){return o(up,cp,e)},$p=function(e){var r=e;return r.cX},fp=function(e){var r=e;return kr(r)},sp=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),dp=function(e){var r=e;return Pr(r)},mp=function(e){var r=$p(e.es),n=Ke({cu:Ri(r),cZ:fp(r),c_:dp(r),c0:yr(Wi(r))}),a=Vn(e.aP),t=a,i=L(Ut,n,1,q,h([t]));if(i.$===1)return z;var c=i.a,l=vp(r),u=o(Q,.99,o(ce,de(e.ex),Gi(Yl(c)))),v=jl(c),s=v.a,d=v.b,m=v.c,f=rp(p(sp,s,d,m)),g=o(Q,1.01,o(yn,f,Gi(Rl(c)))),b=o(ap,e.es,{en:e.en,eO:g,fg:u}),w=ip(b).dH,x=w?He(yr(Wi(r))):nn(Ri(r)),_=function(){var oe=e.fK;switch(oe.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var me=oe.a;return P(3,me);case 4:var me=oe.a;return P(4,me);default:return P(5,0)}}(),C=_.a,T=_.b,j=e.eM,Y=j,E=o(Ya,Y,e.fR),R=E,N=nr({ds:0,dt:x.fU,du:Hr(R),dv:e.d8,dw:0,dx:x.fY,dy:Ir(R),dz:ep(f),dA:0,dB:x.c$,dC:Jr(R),dD:C,dE:0,dF:w,dG:0,dH:T}),F=we(Bl,N,l,b,Q0,t,{M:z,U:z,fz:z}),Z=e.e8;switch(Z.$){case 0:var X=Z.a;return We(h([p(Xe,F.M,P(X,rt),Or),p(Xe,F.U,gn,Or)]));case 1:var X=Z.a;return We(h([p(Xe,F.M,gn,Or),h([Ni]),p(Xe,F.fz,X.bd,Vl),h([El(0)]),p(Xe,F.M,P(X,rt),np),p(Xe,F.U,gn,Or)]));default:var ie=Z.a,ve=Z.b;return We(h([p(Xe,F.M,P(ve,rt),Or),h([Ni]),o(F0,F.fz,ie),p(op,F.M,ve,Yr(ie)),p(Xe,F.U,gn,Or)]))}},pp=function(e){return o(zr,"width",Fe(e))},bp=$(function(e,r){var n=h([i0(1),$0(0),Qm(!0),L(a0,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,r0,n),"1",1);default:var T=C.a;return B(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Vi(v),d=o(se,"height",Fe(s)+"px"),m=Vi(u),f=m/s,g=o(ko,function(C){return mp({en:f,es:e.es,ex:e.ex,aP:C.aP,eM:C.eM,e8:C.e8,d8:c,fK:C.fK,fR:C.fR})},r),b=o(se,"width",Fe(m)+"px"),w=e.aI,x=w,_=s0(x);return p(u0,"div",h([o(se,"padding","0px"),b,d]),h([P(i,p(p0,t,h([pp(Ze(m*c)),c0(Ze(s*c)),b,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),gp=function(e){return{$:2,a:e}},hp=function(e){return gp(e)},_p=function(e){return o(bp,{el:hp(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},h([{aP:e.aP,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},Hi=function(e){return e},Fr=function(e){return e},wp=function(e){var r=e;return r},Ra=function(e){var r=e;return wp(r.eo)},Zl=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),yp=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Kl=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Xl=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),xp=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Sp=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Cp=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Eo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Cp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(Zl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(yp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(Kl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Sp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(Xl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(xp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Yo={$:0},Lp=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=La(c(u)),d=o(fe,s.dM,e),m=o(ce,s.dJ,r),f=o(fe,s.dN,n),g=o(ce,s.dK,a),b=o(fe,s.dO,t),w=o(ce,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),zp=y(function(e,r,n){var a=La(e(r));return Ma(Lp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),tt=$(function(e,r){var n=e,a=r;return J(a,n)<1}),Ql=function(e){return o(tt,e.dJ,e.dM)&&o(tt,e.dK,e.dN)&&o(tt,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},Pn=function(e){var r=e;return r},Vr=function(e){var r=e;return r.fU},Ur=function(e){var r=e;return r.fY},Er=function(e){var r=e;return r.c$},eu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Vr(n),c=Ur(n),l=Er(n),u=Vr(a),v=Ur(a),s=Er(a),d=Vr(t),m=Ur(t),f=Er(t);return Ql({dJ:o(ce,i,o(ce,u,d)),dK:o(ce,c,o(ce,v,m)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,d)),dN:o(fe,c,o(fe,v,m)),dO:o(fe,l,o(fe,s,f))})},ru=Pf,ke=function(e){return ru(Un(e))},nu=function(e){var r=e;return r},ja=function(e){return ru(nu(e))},au=function(e){return e},kp=$(function(e,r){var n=e,a=r,t=o(Te,O(a.fU),o(Te,O(a.fY),O(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=_r(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return Tl}),Pp=kp(au(1)),tu=y(function(e,r,n){var a=o(Ca,r,n),t=o(Ca,e,r);return Pp(o(So,a,t))}),Tp=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=ja(p(tu,n,a,t));return B({o:i,dY:ke(n)},{o:i,dY:ke(a)},{o:i,dY:ke(t)})},Mp=$(function(e,r){return{$:2,a:e,b:r}}),ou=Mp({c8:3,dh:0,dQ:4}),Dp=function(e){if(e.b){var r=e.a,n=e.b,a=ou(o(re,Tp,e)),t=p(zp,eu,r,n);return L(Zl,t,e,a,0)}else return Yo},Ye=y(function(e,r,n){return B(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),iu=function(){var e=Fr(1),r=Fr(1),n=Fr(1),a=o(Q,-.5,e),t=o(Q,-.5,r),i=o(Q,-.5,n),c=p(pe,i,t,a),l=o(Q,.5,e),u=p(pe,i,t,l),v=o(Q,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(Q,.5,n),f=p(pe,m,t,a),g=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Eo(Dp(h([p(Ye,c,g,f),p(Ye,c,s,g),p(Ye,u,b,w),p(Ye,u,w,d),p(Ye,f,g,w),p(Ye,f,w,b),p(Ye,c,d,s),p(Ye,c,u,d),p(Ye,c,f,b),p(Ye,c,b,u),p(Ye,s,w,g),p(Ye,s,d,w)])))}(),On={$:0},Ap=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Bp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ja(p(tu,u,l,c)),s={o:v,dY:ke(u)},d={o:v,dY:ke(l)},m={o:v,dY:ke(c)};return o(A,s,o(A,d,o(A,m,n)))}),Ro=function(e){var r=e;return r.D},Fp=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),Et=4294967295>>>32-Ln,Yt=Xu,Vp=y(function(e,r,n){e:for(;;){var a=Et&r>>>e,t=o(Yt,a,n);if(t.$){var v=t.a;return o(Yt,Et&r,v)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),Up=function(e){return e>>>5<<5},Ep=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,Up(n))>-1?ne(o(Yt,Et&e,i)):ne(p(Vp,a,e,t))}),jo=function(e){var r=e;return r.ah},ot=$(function(e,r){return o(Ep,e,jo(r))}),Yp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Fp,y(function(c,l,u){return B(c,l,u)}),o(ot,a,e),o(ot,t,e),o(ot,i,e))};return o(_o,r,Ro(e))},Rp=y(function(e,r,n){e:for(;;){var a=o(uo,Ue,e),t=a.a,i=a.b;if(J(Ct(t),Ue)<0)return o(Zc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Oc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(Rp,e,z,0):Ic},jp=y(function(e,r,n){return e(r(n))}),Np=$(function(e,r){return!o(cl,o(jp,ws,e),r)}),Gp=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(A,n,a):a}),z,r)}),Wp=function(e){var r=e.a;return r},cu=$(function(e,r){var n=Wp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(Np,a,r)?{D:r,ah:e}:{D:o(Gp,a,r),ah:e}}),Hp=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=Hp({c8:1,dh:3,dQ:4}),ca=$(function(e,r){var n=nn(r),a=nn(e);return P(B(a.fU,a.fY,a.c$),B(n.fU,n.fY,n.c$))}),Ii=p(Fn,0,0,0),it=Ie(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(po,o(ca,e,r),t);if(v.$){var d={o:Ii,dY:ke(r)},m={o:Ii,dY:ke(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),Ip=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,T=we(it,s,m,f,b,r,we(it,d,s,g,f,r,we(it,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var j=t,Y=j.a,E=j.b;return P(Y,Ve(E))}}),Jp=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(_n,o(ca,m,s),f,p(_n,o(ca,s,d),g,p(_n,o(ca,d,m),b,t))),x=o(A,B(b,g,f),a),_=e,C=v,T=n+3,j=x,Y=w;e=_,r=C,n=T,a=j,t=Y;continue e}else return B(a,t,n)}),Mr=y(function(e,r,n){var a=Yp(n),t=p(br,Bp(r),z,a),i=S(Jp,r,a,0,z,kl),c=i.a,l=i.b,u=i.c,v=S(Ip,r,l,a,0,B(c,z,u)),s=v.a,d=v.b,m=zl(d)?t:le(t,d);return p(Ap,e,o(cu,No(m),s),o(En,m,s))}),Rt=function(e){return{D:o(re,function(r){return B(3*r,3*r+1,3*r+2)},o(Rr,0,Yr(e)-1)),ah:No(We(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},lu=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(re,Pn,r);return p(Mr,a,Br,Rt(n));case 2:var a=e.a,r=e.b,n=o(re,Pn,r);return p(Mr,a,Br,Rt(n));case 3:var a=e.a,t=e.b;return p(Mr,a,Br,t);case 4:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.dY},t);case 8:return On;case 9:return On;default:return On}},Ji=lu(iu),Na=function(e){var r=e;return r.aK},uu={$:0},k=uu,ge=$(function(e,r){return{$:1,a:e,b:r}}),Op={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},qp=1029,Zp=function(e){return{$:5,a:e}},vu=function(e){var r=e;return Zp(r)},Kp=vu(qp),Xp=1028,Qp=vu(Xp),Pe=y(function(e,r,n){return r===1?e?o(A,Kp,n):o(A,Qp,n):n}),$u={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ct=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Pe,l,a,d),$u,Op,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Go={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},fu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},lr=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Pe,l,a,d),fu,Go,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),su=$(function(e,r){return{$:3,a:e,b:r}}),e1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bR",sceneProperties:"e"}},du={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bR",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},r1=U(function(e,r,n,a){return o(su,n,ee(function(t,i,c,l,u,v,s,d){return S(ae,d,du,e1,a,{aw:e,b:c,c:i,bR:r,d:v,e:t,f:u})}))}),Wo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Yn=function(e){var r=e;return r},Ga=Tf,ur=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Pe,u,t,m),fu,Wo,a,{aN:o(Ga,Yn(r),e),b:l,c,d:s,e:i,f:v})}))}),n1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bR",sceneProperties:"e"}},a1=he(function(e,r,n,a,t){return o(su,a,ee(function(i,c,l,u,v,s,d,m){return S(ae,m,du,n1,t,{aN:o(Ga,Yn(r),e),b:l,c,bR:n,d:s,e:i,f:v})}))}),mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},pu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Pe,l,a,d),pu,mu,n,{P:f,bd:m.bd,bJ:m.bJ,bK:m.bK,bL:m.bL,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),bu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},t1=Ie(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Pe,v,i,f),gu,bu,t,{P:b,bd:g.bd,bJ:g.bJ,bK:g.bK,bL:g.bL,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),hu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b$",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},o1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(d,m,f,g,b,w,x,_){var C=x.a,T=x.b;return S(ae,p(Pe,g,s,_),gu,hu,v,{b$:e,b2:r,b3:i,b4:a,P:T,bd:C.bd,bJ:C.bJ,bK:C.bK,bL:C.bL,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},_u={src:`
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
    `,attributes:{},uniforms:{baseColor:"b_",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},Zn=Ie(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Pe,v,i,f),pu,_u,t,{b_:e,P:b,bd:g.bd,bJ:g.bJ,bK:g.bK,bL:g.bL,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),i1=function(e){return{$:0,a:e}},Oi=$(function(e,r){return{$:1,a:e,b:r}}),xn=$(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),c1=function(e){return L(fn,Hr(e),Ir(e),Jr(e),1)},Ho=L(fn,0,0,0,0),la=$(function(e,r){if(r.$){var a=r.a.C;return P(a,Ho)}else{var n=r.a;return P(e,c1(n))}}),wu=$(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Oi,P(t,Ho),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Oi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,i1(a)}}),l1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Kn=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),u1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),v1=function(e){return o(Be,e,1)},jt=o(Be,0,0),qr=$(function(e,r){if(r.$){var a=r.a.C;return P(a,jt)}else{var n=r.a;return P(e,v1(n))}}),yu=U(function(e,r,n,a){var t=L(u1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Kn,P(u,Ho),o(qr,u,r),o(qr,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Kn,o(la,u,e),P(u,jt),o(qr,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Kn,o(la,u,e),o(qr,u,r),P(u,jt),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Kn,o(la,u,e),o(qr,u,r),o(qr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(l1,i,c,l)}}),$1={src:`
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
    `,attributes:{},uniforms:{backlight:"bY",colorTexture:"bB",sceneProperties:"e"}},lt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Pe,u,t,m),$u,$1,a,{bY:Yn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),xu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},f1=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Pe,l,a,d),xu,bu,n,{P:f,bd:m.bd,bJ:m.bJ,bK:m.bK,bL:m.bL,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),s1=Ht(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(Pe,m,u,w),xu,hu,l,{b$:e,b2:r,b3:i,b4:a,P:_,bd:x.bd,bJ:x.bJ,bK:x.bK,bL:x.bL,co:t,b:d,c:s,aW:e,d:g,cL:n,e:v,a$:0,f})}))}),Tn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),d1=function(e){var r=e;return p(Tn,r.dM,r.dJ,.5)},m1=function(e){var r=e;return p(Tn,r.dN,r.dK,.5)},p1=function(e){var r=e;return p(Tn,r.dO,r.dL,.5)},b1=function(e){return p(pe,d1(e),m1(e),p1(e))},G=function(e){var r=jl(e),n=r.a,a=r.b,t=r.c;return{ev:Un(b1(e)),eR:n/2,eS:a/2,eT:t/2}},Io=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(ct,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ct,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ct,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(lr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(lr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(lr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(r1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ur,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(ur,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(ur,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(a1,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,Y=e.c,d=o(wu,s,Y);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(f1,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(t1,b,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,j=e.d,Y=e.e,E=L(yu,C,T,j,Y);if(E.$){var Z=E.a,X=Z.a,ie=Z.b,ve=E.b,oe=ve.a,me=ve.b,Me=E.c,Se=Me.a,gr=Me.b,hr=E.d,x=hr.a,_=hr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Ju(s1,X,ie,oe,me,Se,gr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return o1(X)(ie)(oe)(me)(Se)(gr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var R=E.a,N=E.b,F=E.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return we(Zn,R,N,F,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return we(Zn,R,N,F,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return we(Zn,R,N,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(Zn,R,N,F,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),ut=function(e){var r=e;return r.fU},vt=function(e){var r=e;return r.fY},$t=function(e){var r=e;return r.c$},g1=function(e){var r=e,n=$t(r.c0),a=vt(r.c0),t=ut(r.c0),i=$t(r.c_),c=vt(r.c_),l=ut(r.c_),u=$t(r.cZ),v=vt(r.cZ),s=ut(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},h1=function(e){var r=Un(Wr(e)),n=He(Tr(e)),a=He(Pr(e)),t=He(kr(e));return{dk:g1(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,H:r.fU,I:r.fY,J:r.c$,bV:1}},Zr=$(function(e,r){return{$:5,a:e,b:r}}),Su=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Al,a,e);return o(Zr,i,t);case 1:return o(Zr,e,n);case 3:return o(Zr,e,n);case 2:return o(Zr,e,n);default:return o(Zr,e,n)}}),Cu=$(function(e,r){return o(Su,h1(e),r)}),Wa=function(e){return{$:2,a:e}},_1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),w1=Af,y1=Df,qi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=y1(a),g=f.fU,b=f.fY,w=f.c$,x=f.ei,_=w1({ei:x,fU:g*s,fY:b*d,c$:w*m});return Ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Nt=$(function(e,r){switch(r.$){case 0:return uu;case 5:var n=r.a,a=r.b;return o(Zr,n,o(Nt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(_1,e,t),o(qi,e,i));case 3:return r;case 2:var i=r.a;return Wa(o(qi,e,i));default:var c=r.a;return Wl(o(re,Nt(e),c))}}),Jo=$(function(e,r){var n=r;return o(Nt,e,n)}),Oo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Lu=7683,zu=7682,x1=p(Mo,{ci:0,cH:0,cY:15},{a8:xe,bl:on,bt:xe,bu:Lu},{a8:xe,bl:on,bt:xe,bu:zu}),S1=p(Mo,{ci:0,cH:0,cY:15},{a8:xe,bl:on,bt:xe,bu:zu},{a8:xe,bl:on,bt:xe,bu:Lu}),qo=$(function(e,r){return e?o(A,S1,r):o(A,x1,r)}),C1={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},L1=function(e){if(e.$){var r=e.c;return ne(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(qo,i,v),C1,Oo,r,{b:t,c:a,d:l,e:n,bW:u,f:c})}))}else return q},za=function(e){var r=L1(e);if(r.$)return k;var n=r.a;return Wa(n)},z1=U(function(e,r,n,a){var t=o(Io,n,iu),i=function(){var s=P(e,r);return s.a?s.b?Vn(h([t,za(Ji)])):t:s.b?za(Ji):k}(),c=Na(a),l=c.a,u=c.b,v=c.c;return o(Cu,Ra(a),o(Jo,B(l,u,v),i))}),k1=$(function(e,r){return L(z1,!0,!0,e,r)}),Gt=function(e){return{$:0,a:e}},ku=$(function(e,r){return{$:0,a:e,b:r}}),P1=function(e){var r=ho(e),n=r.cG,a=r.b7,t=r.b0;return p(Fn,n,a,t)},T1=function(e){return o(ku,0,Gt(P1(e)))},Zo=function(e){var r=e;return r.k},Sn=function(e){var r=e;return jr(r)},M1=$(function(e,r){var n=r;return n/e}),cn=lv,Zi=function(e){var r=e;return{fU:jr(r),fY:cn(r)}},D1=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:ja(a),dY:ke(n)},r)}),A1=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Jr(l.dY),s=Ir(l.dY),d=Hr(l.dY),m=o(ia,e,d),f=o(Te,r,d),g=o(ia,n,s),b=o(Te,a,s),w=o(ia,t,v),x=o(Te,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return Ql({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Pu=$(function(e,r){var n=Jr(e.dY),a=Ir(e.dY),t=Hr(e.dY);return It(A1,t,t,a,a,n,n,r)}),B1=function(e){var r=p(Ec,D1,z,jo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Ro(e)),i=o(Pu,n,a);return L(Kl,i,e,t,0)}else return Yo},Tu=fr({fU:0,fY:0,c$:-1}),Ki=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c$:a.fU*l.c$+a.fY*i.c$}}),ka=function(e){var r=e;return cn(r)},Wt=function(e){return cr(2*tn*e)},F1=Br,Xi=F1({cu:Ne,cZ:Fo,c_:Vo}),Mu=function(){var e=72,r=o(M1,e,Wt(1)),n=Fr(1),a=Qr(Uo),t=Qr(Tu),i=Fr(1),c=o(Q,.5,i),l=p(pe,rr,rr,c),u=o(Q,-.5,i),v=p(pe,rr,rr,u),s=function(f){var g=o(Q,f,r),b=Qr(o(Ki,Xi,Zi(g))),w=o(Q,Sn(g),n),x=o(Q,ka(g),n),_=p(pe,w,x,c),C=p(pe,w,x,u),T=o(wa,e,f+1),j=o(Q,T,r),Y=Qr(o(Ki,Xi,Zi(j))),E=o(Q,Sn(j),n),R=o(Q,ka(j),n),N=p(pe,E,R,u),F=p(pe,E,R,c);return h([B({o:t,dY:v},{o:t,dY:N},{o:t,dY:C}),B({o:b,dY:C},{o:Y,dY:N},{o:Y,dY:F}),B({o:b,dY:C},{o:Y,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(re,s,o(Rr,0,e-1)),m=Rt(We(d));return Eo(B1(m))}(),Qi=lu(Mu),Du=function(e){var r=e;return r.eF},Au=function(e){var r=e;return r.cu},V1=function(e){var r=Du(e),n=Co(r),a=n.a,t=n.b;return Ke({cu:Au(e),cZ:a,c_:t,c0:r})},Bu=function(e){var r=e;return r.e6},Fu=function(e){var r=e;return r.fs},U1=U(function(e,r,n,a){var t=V1(Zo(a)),i=o(Io,n,Mu),c=function(){var d=P(e,r);return d.a?d.b?Vn(h([i,za(Qi)])):i:d.b?za(Qi):k}(),l=Fu(a),u=l,v=Bu(a),s=v;return o(Cu,t,o(Jo,B(u,u,s),c))}),E1=$(function(e,r){return L(U1,!0,!0,e,r)}),ec={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},rc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},hn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=nn(a),l=nn(t);return nr({ds:i.fU,dt:c.fU,du:l.fU,dv:0,dw:i.fY,dx:c.fY,dy:l.fY,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},Xn=ou(h([B({cS:0},{cS:1},{cS:2})])),Y1=$(function(e,r){var n=eu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(ge,a,ee(function(_,C,T,j,Y,E,R,N){return S(ae,p(Pe,j,0,N),ec,Go,Xn,{aw:t,b:T,c:C,d:E,e:_,bq:hn(r),f:Y})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,C,T,j,Y,E,R,N){return S(ae,p(Pe,j,0,N),ec,Wo,Xn,{aN:o(Ga,Yn(c),i),b:T,c:C,d:E,e:_,bq:hn(r),f:Y})}));case 2:e.a;var l=e.b,f=e.c,u=o(wu,l,f);if(u.$)return k;var v=u.a;return o(ge,a,ee(function(_,C,T,j,Y,E,R,N){var F=R.a,Z=R.b;return S(ae,p(Pe,j,0,N),rc,mu,Xn,{P:Z,bd:F.bd,bJ:F.bJ,bK:F.bK,bL:F.bL,cj:v,b:T,c:C,d:E,e:_,bq:hn(r),f:Y})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(yu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(_,C,T,j,Y,E,R,N){var F=R.a,Z=R.b;return S(ae,p(Pe,j,0,N),rc,_u,Xn,{b_:b,P:Z,bd:F.bd,bJ:F.bJ,bK:F.bK,bL:F.bL,cn:x,b:T,c:C,d:E,cK:w,e:_,bq:hn(r),f:Y})}))}}),R1=function(){var e=h([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(En,e,r)}(),j1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",triangleVertexPositions:"bq",viewMatrix:"f"}},nc=function(e){return Wa(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(qo,t,u),j1,Oo,R1,{b:a,c:n,d:c,e:r,bW:l,bq:hn(e),f:i})}))},N1=U(function(e,r,n,a){var t=o(Y1,n,a),i=P(e,r);return i.a?i.b?Vn(h([t,nc(a)])):t:i.b?nc(a):k}),G1=$(function(e,r){return L(N1,!0,!0,e,r)}),Ko=function(e){var r=e;return r},W1=$(function(e,r){var n=Er(r),a=Er(e),t=Ur(r),i=Ur(e),c=Vr(r),l=Vr(e);return{dJ:o(ce,l,c),dK:o(ce,i,t),dL:o(ce,a,n),dM:o(fe,l,c),dN:o(fe,i,t),dO:o(fe,a,n)}}),H1=function(e){var r=Ko(e),n=r.a,a=r.b;return o(W1,n,a)},ac={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},I1=$(function(e,r){return{$:1,a:e,b:r}}),J1=I1({c8:2,dh:0,dQ:1}),tc=J1(h([P({dr:0},{dr:1})])),O1=$(function(e,r){var n=H1(r),a=G(n),t=Ko(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(ge,a,ee(function(v,s,d,m,f,g,b,w){return S(ae,w,ac,Go,tc,{aw:l,dp:ke(c),dq:ke(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,m,f,g,b,w,x){return S(ae,x,ac,Wo,tc,{aN:o(Ga,Yn(u),l),dp:ke(c),dq:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),q1=$(function(e,r){return o(O1,e,r)}),Ha=function(e){var r=e;return r.ev},Ia=function(e){var r=e;return r.fs},Qn=function(e){return cr(tn*(e/180))},oc=$(function(e,r){var n=e,a=r;return n/a}),Z1=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(xr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ic=$(function(e,r){return e<1?z:S(Z1,0,e,e,r,z)}),K1=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:ja(a),dY:ke(n),L:o(Be,c,l)},r)}),X1=function(e){var r=p(Ec,K1,z,jo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Ro(e)),i=o(Pu,n,a);return L(Xl,i,e,t,0)}else return Yo},Xo=$(function(e,r){var n=e,a=r,t=jr(a);return{fU:t*jr(n),fY:t*cn(n),c$:cn(a)}}),Q1=function(){var e=Fr(1),r=72,n=o(Rr,0,r-1),a=o(ic,r,o(Tn,rr,Wt(1))),t=co(r/2),i=o(Rr,0,t-1),c=o(ic,t,o(Tn,Qn(90),Qn(-90))),l=No(We(o(re,function(s){return o(re,function(d){return{o:Qr(o(Xo,s,d)),dY:p(pe,o(Q,Sn(d)*Sn(s),e),o(Q,Sn(d)*ka(s),e),o(Q,ka(d),e)),L:P(o(oc,s,Wt(1)),o(oc,o(yn,Qn(90),d),Qn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(re,function(s){return We(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return Eo(X1(o(cu,l,v)))}(),Pa=72,ea=2*Pa,eb=$(function(e,r){e:for(;;){var n=ea+1,a=o(wa,ea,2*e+3),t=o(wa,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),rb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),nb=$(function(e,r){e:for(;;){var n=p(rb,0,2*tn,e/Pa),a={bw:n,bO:0,bU:1},t={bw:n,bO:1,bU:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ab=function(){var e=o(nb,Pa-1,h([{bw:0,bO:0,bU:0},{bw:0,bO:1,bU:0}])),r=o(eb,Pa-1,z);return o(En,e,r)}(),tb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bO",radiusScale:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},cc=function(e){return Wa(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(qo,!0,u),tb,Oo,ab,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,bW:l,f:i})}))},ob=function(e){var r=nu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c$,bV:1}},ib=$(function(e,r){return o(Su,ob(e),r)}),cb=U(function(e,r,n,a){var t=o(Io,n,Q1),i=function(){var u=P(e,r);return u.a?u.b?Vn(h([t,cc()])):t:u.b?cc():k}(),c=Ia(a),l=c;return o(ib,o(Ca,Ne,Ha(a)),o(Jo,B(l,l,l),i))}),lb=$(function(e,r){return L(cb,!0,!0,e,r)}),ub=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Vu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),vb=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),$b=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ku,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ub,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Vu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(vb,n,a,t,i,c)}},fb=$b,Uu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(k1,t,r)]);case 1:var t=e.a,n=e.b;return h([o(G1,t,n)]);case 3:var t=e.a,a=e.b;return h([o(lb,fb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(E1,t,i)]);case 4:var c=e.a,l=e.b;return h([o(q1,T1(c),l)]);default:var u=e.a;return o(ko,Uu,u)}},sb=function(e){return o(ko,Uu,e)},db=$(function(e,r){return _p({el:e.el,aI:Km(e.ep),es:e.es,ex:Fr(e.ex),b5:e.b5,aK:P(Hi(Ze(e.cM.fS)),Hi(Ze(e.cM.eV))),aP:sb(r),eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),Eu=function(e){return e},mb=$(function(e,r){var n=e,a=He(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(Ya,r.bG,r.aJ),u=l;return{by:Jr(u),eu:n,bE:Ir(u),cD:0,bT:Hr(u),cT:1,fU:-t,fY:-i,c$:-c}}),pb=function(e){return o(mb,Eu(!0),{aJ:e.aJ,eF:o(Xo,cr(e.bx),cr(e.bC)),bG:e.bG})},bb=function(e){return e},gb=function(e){return bb(1.2*o($n,2,e))},ft=zo({fU:.37208,fY:.37529}),hb=$(function(e,r){return{$:2,a:e,b:r}}),Yu=function(e){return{$:0,a:e}},ra=function(e){var r=e;return r},_b=function(e){var r=e;return r.eu},wb=Yu(gn.a),yb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(A,a,i),c):P(i,o(A,a,c))});return p(br,n,P(z,z),r)}),xb=function(e){var r=e;return nr({ds:r.fU,dt:r.bT,du:0,dv:0,dw:r.fY,dx:r.bE,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Sb=ee(function(e,r,n,a,t,i,c,l){var u=o(yb,_b,h([ra(e),ra(r),ra(n),ra(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(hb,o(re,xb,v),{bd:o(Re,m,g),bJ:o(Re,w,_),bK:o(Re,t,i),bL:o(Re,c,l)})}else return wb}else return Yu({bd:o(Re,e,r),bJ:o(Re,n,a),bK:o(Re,t,i),bL:o(Re,c,l)})}),Cb=U(function(e,r,n,a){return Ma(Sb,e,r,n,a,De,De,De,De)}),Lb=$(function(e,r){return o(ze,function(n){if(n.$)return 0;var a=n.b;return a},o(po,e,r.av))}),zb=$(function(e,r){return o(dr,0,wo(o(_o,Lb(e),r)))}),kb=$(function(e,r){return o(zb,e,r.ey)}),vr=kb,Pb={$:5},Tb=Pb,Mb=zo({fU:.44757,fY:.40745}),Db=function(e){return e},lc=function(e){return e},st=function(e){return e},Ab={$:1},Bb=Ab,Fb=$(function(e,r){var n=e,a=Un(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(Ya,r.bG,r.aJ),u=l;return{by:Jr(u),eu:n,bE:Ir(u),cD:0,bT:Hr(u),cT:2,fU:t,fY:i,c$:c}}),uc=function(e){return o(Fb,Eu(!0),{aJ:e.aJ,bG:e.bG,dY:aa(e.dY)})},Ja=$(function(e,r){return{$:0,a:e,b:r}}),dt=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),mt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Vb=fr({fU:-1,fY:0,c$:0}),Ub=fr({fU:0,fY:-1,c$:0}),Eb=Ie(function(e,r,n,a,t,i){var c=o(dt,n,i)?Uo:Tu,l=o(dt,r,t)?Lo:Ub,u=o(dt,e,a)?Ol:Vb,v=B(de(o(sr,e,a)),de(o(sr,r,t)),de(o(sr,n,i))),s=p(pe,o(mt,e,a),o(mt,r,t),o(mt,n,i)),d=Ke({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),Yb=$(function(e,r){return we(Eb,Vr(e),Ur(e),Er(e),Vr(r),Ur(r),Er(r))}),Rb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ja,e,o(Yb,p(Vt,-c,-l,-u),p(Vt,c,l,u)))}),Oa=function(e){return{$:5,a:e}},jb=function(e){return Oa(e)},Nb=U(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Ea,f,m,d,a)}),Gb=y(function(e,r,n){return L(Nb,e,r,n,1)}),pt=function(e){return p(Dl,0,1,e<=.04045?e/12.92:o($n,(e+.055)/1.055,2.4))},Wb=function(e){var r=ho(e),n=r.cG,a=r.b7,t=r.b0;return p(Fn,pt(n),pt(a),pt(t))},Hb=function(e){return p(Vu,0,Gt(Wb(e)),Gt(0))},Qo=$(function(e,r){return{$:2,a:e,b:r}}),ei=$(function(e,r){return{$:4,a:e,b:r}}),ri=$(function(e,r){return{$:3,a:e,b:r}}),ni=$(function(e,r){return{$:1,a:e,b:r}}),Ib=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),Rn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c$:a.c$+n.c$}}),Jb=$(function(e,r){return Ke({cu:o(Rn,e,Wr(r)),cZ:kr(r),c_:Pr(r),c0:Tr(r)})}),Ob=$(function(e,r){return{eo:o(Jb,e,Ra(r)),aK:Na(r)}}),sn=$(function(e,r){return{eF:r,cu:e}}),qb=$(function(e,r){var n=r;return o(sn,o(Rn,e,n.cu),n.eF)}),Zb=$(function(e,r){var n=r;return{k:o(qb,e,n.k),e6:n.e6,fs:n.fs}}),Kb=function(e){return e},ai=$(function(e,r){var n=Ko(r),a=n.a,t=n.b;return Kb(P(e(a),e(t)))}),Xb=$(function(e,r){return o(ai,Rn(e),r)}),ti=$(function(e,r){return{ev:r,fs:de(e)}}),Qb=$(function(e,r){return o(ti,Ia(r),o(Rn,e,Ha(r)))}),oi=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),e3=$(function(e,r){return o(oi,Rn(e),r)}),Ru=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Ib,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ja,s,o(Ob,i,c));case 1:var s=r.a,l=r.b;return o(ni,s,o(e3,i,l));case 3:var s=r.a,u=r.b;return o(ri,s,o(Qb,i,u));case 2:var s=r.a,v=r.b;return o(Qo,s,o(Zb,i,v));case 4:var s=r.a,d=r.b;return o(ei,s,o(Xb,i,d));default:var m=r.a;return Oa(o(re,Ru(B(n,a,t)),m))}}),vc=function(e){return Ru(B(e,0,0))},ua=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=cn(c),v=a.eF,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c$*u,T=l*C,j=2*(w-T),Y=2*(w+T),E=d*C,R=2*(E+b),N=2*(E-b),F=g*C,Z=2*(F-m),X=2*(F+m),ie=C*C,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+j*i.fY+R*i.c$,fY:Y*i.fU+oe*i.fY+Z*i.c$,c$:N*i.fU+X*i.fY+_*i.c$}}),jn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=cn(c),v=a.cu,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c$-s.c$,g=a.eF,b=g,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,T=l*C,j=w*C,Y=C*C,E=1-2*(_+Y),R=b.c$*u,N=l*R,F=2*(j-N),Z=2*(j+N),X=w*R,ie=2*(X+T),ve=2*(X-T),oe=C*R,me=2*(oe-x),Me=2*(oe+x),Se=R*R,gr=1-2*(Y+Se),hr=1-2*(_+Se);return{fU:s.fU+gr*d+F*m+ie*f,fY:s.fY+Z*d+hr*m+me*f,c$:s.c$+ve*d+Me*m+E*f}}),r3=y(function(e,r,n){return Ke({cu:p(jn,e,r,Wr(n)),cZ:p(ua,e,r,kr(n)),c_:p(ua,e,r,Pr(n)),c0:p(ua,e,r,Tr(n))})}),n3=y(function(e,r,n){return{eo:p(r3,e,r,Ra(n)),aK:Na(n)}}),a3=$(function(e,r){var n=o(jn,e,r),a=o(ua,e,r);return function(t){var i=t;return o(sn,n(i.cu),a(i.eF))}}),t3=y(function(e,r,n){var a=n;return{k:p(a3,e,r,a.k),e6:a.e6,fs:a.fs}}),o3=y(function(e,r,n){return o(ai,o(jn,e,r),n)}),i3=y(function(e,r,n){return o(ti,Ia(n),p(jn,e,r,Ha(n)))}),c3=y(function(e,r,n){return o(oi,o(jn,e,r),n)}),qa=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ja,l,p(n3,e,r,a));case 1:var l=n.a,t=n.b;return o(ni,l,p(c3,e,r,t));case 3:var l=n.a,i=n.b;return o(ri,l,p(i3,e,r,i));case 2:var l=n.a,c=n.b;return o(Qo,l,p(t3,e,r,c));case 4:var l=n.a,u=n.b;return o(ei,l,p(o3,e,r,u));default:var v=n.a;return Oa(o(re,o(qa,e,r),v))}}),l3=o(sn,Ne,Fo),u3=$(function(e,r){return p(qa,l3,cr(e),r)}),v3=o(sn,Ne,Vo),$3=$(function(e,r){return p(qa,v3,cr(e),r)}),f3=o(sn,Ne,ql),s3=$(function(e,r){return p(qa,f3,cr(e),r)}),Nn=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c$:a.c$+r*(t.c$-a.c$)}}),d3=y(function(e,r,n){var a=Ra(n),t=kr(a),i=Pr(a),c=Tr(a),l=p(Nn,e,r,Wr(a)),u=r>=0?Ke({cu:l,cZ:t,c_:i,c0:c}):Ke({cu:l,cZ:yr(t),c_:yr(i),c0:yr(c)}),v=Na(n),s=v.a,d=v.b,m=v.c,f=de(o(Q,r,s)),g=de(o(Q,r,d)),b=de(o(Q,r,m));return{eo:u,aK:B(f,g,b)}}),$c=function(e){return Du(Zo(e))},m3=function(e){return Au(Zo(e))},p3=y(function(e,r,n){var a=de(o(Q,r,Fu(n))),t=de(o(Q,r,Bu(n))),i=r>=0?$c(n):yr($c(n)),c=p(Nn,e,r,m3(n));return{k:o(sn,c,i),e6:t,fs:a}}),b3=y(function(e,r,n){return o(ai,o(Nn,e,r),n)}),g3=y(function(e,r,n){return o(ti,o(Q,O(r),Ia(n)),p(Nn,e,r,Ha(n)))}),h3=y(function(e,r,n){return o(oi,o(Nn,e,r),n)}),ju=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Ja,c,p(d3,Ne,e,n));case 1:var c=r.a,a=r.b;return o(ni,c,p(h3,Ne,e,a));case 3:var c=r.a,t=r.b;return o(ri,c,p(g3,Ne,e,t));case 2:var c=r.a,i=r.b;return o(Qo,c,p(p3,Ne,e,i));case 4:var c=r.a,l=r.b;return o(ei,c,p(b3,Ne,e,l));default:var u=r.a;return Oa(o(re,ju(e),u))}}),_3=function(e){var r=function(t){return .1*t},n=function(t){return L(Ml,0,1,4,e.b1+r(t))},a=function(t){return o(vc,1.4*t,o(s3,n(t),o(u3,n(t),o($3,n(t),o(vc,o(vr,"a",e)*t,o(ju,o(vr,"a",e)*t,o(Rb,Hb(p(Gb,n(t),.6,.8)),B(1,3,1))))))))};return jb(o(re,a,o(Rr,-10,10)))},w3=$(function(e,r){return h([_3(e)])}),fc=function(e){var r=e;return r},y3=function(e){e:for(;;){if(xr(e.di,rr)&&xr(e.dj,rr))return De;if(o(Pl,de(e.di),de(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:yr(e.ee)};e=r;continue e}else{var n=O(fc(e.dj)/tn),a=O(fc(e.di)/tn),t=He(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(Ya,au(1),e.aJ),v=u;return{by:a*Jr(v),eu:!1,bE:a*Ir(v),cD:n/a,bT:a*Hr(v),cT:3,fU:i,fY:c,c$:l}}}},x3=function(e){return y3({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(Xo,cr(e.bx),cr(e.bC))})},S3=$(function(e,r){var n=pb({bx:o(vr,"azimuth for third light",e),aJ:Zm(Db(2e3)),bC:o(vr,"elevation for third light",e),bG:st(o($n,10,o(vr,"lux",e)))}),a=uc({aJ:ft,bG:lc(6e3),dY:{fU:-45,fY:-30,c$:45}}),t=x3({bx:o(vr,"azimuth for fourth light",e),aJ:ft,bC:o(vr,"elevation for fourth light",e),di:st(o(vr,"intensity above",e)),dj:st(o(vr,"intensity below",e))}),i=uc({aJ:Mb,bG:lc(6e3),dY:{fU:-45,fY:30,c$:45}});return o(db,{el:Bb,ep:L(yl,0,0,0,.7),es:Om(e),ex:.1,b5:e.b5,eM:gb(6),e8:L(Cb,i,a,n,t),cM:e.cM,fK:Tb,fR:ft},o(w3,e,r))}),C3=L(xm,S3,Pm,km,Sm);const L3={Main:{init:C3(o(D,function(e){return Ae({e0:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({b1:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ae({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(M,"alt",K))},o(M,"control",K))},o(M,"down",K))},o(M,"downs",ga(kn)))},o(M,"left",K))},o(M,"pressedKeys",ga(kn)))},o(M,"right",K))},o(M,"shift",K))},o(M,"up",K))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ae({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(M,"down",K))},o(M,"isDown",K))},o(M,"move",K))},o(M,"rightDown",K))},o(M,"rightUp",K))},o(M,"up",K))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Ae({eV:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Ae({eC:r,eD:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},z3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},k3=()=>{bt("pointerdown"),bt("wheel"),bt("keydown")},bt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},P3=L3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});k3();z3(P3);
