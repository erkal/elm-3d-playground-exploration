const Ou=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ou();function Sr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ie(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Nt(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ju(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var qu=[];function Zu(e){return e.length}var Qu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Xu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),Ku=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ev=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+rv()),r});function rv(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=ft(e,r,0,a);t&&(n=a.pop());t=ft(n.a,n.b,0,a));return t}function ft(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=fi(e),r=fi(r));for(var t in e)if(!ft(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var nv=$(function(e,r){var n=I(e,r);return n<0?Mc:n?Wf:Tc}),zn=0;function k(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function er(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var av=$(tr);function g(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var tv=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return g(i)});Ie(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(za(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return g(za(r).sort(function(n,a){var t=o(e,n,a);return t===Tc?0:t===Mc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var ov=$(Math.pow);$(function(e,r){return r%e});var iv=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),cv=Math.PI,lv=Math.cos,uv=Math.sin,vv=Math.tan,$v=Math.atan;$(Math.atan2);function fv(e){return e}function sv(e){return e===1/0||e===-1/0}var dv=Math.ceil,mv=Math.floor,pv=Math.round,bv=Math.sqrt,Xo=Math.log,hv=isNaN;function gv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var _v=$(function(e,r){return e+r});function wv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function xv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function yv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Sv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Cv=$(function(e,r){return r.split(e)}),Lv=$(function(e,r){return r.join(e)}),Pv=x(function(e,r,n){return n.slice(e,r)});function zv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var kv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=$(function(e,r){return r.indexOf(e)>-1}),Mv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Dv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function tc(e){return e+""}function Bv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Av(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Uv(e){return za(e).join("")}function Fv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Vv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ev(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var Rv=Wt(function(e){return typeof e=="boolean"?$e(e):Ke("a BOOL",e)}),Nv=Wt(function(e){return typeof e=="number"?$e(e):Ke("a FLOAT",e)}),jv=Wt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ke("a STRING",e)});function Wv(e){return{$:3,b:e}}var Yv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Cr(e,r){return{$:9,f:e,g:r}}var Gv=$(function(e,r){return{$:10,b:r,h:e}}),Hv=$(function(e,r){return Cr(e,[r])}),Iv=x(function(e,r,n){return Cr(e,[r,n])});V(function(e,r,n,a){return Cr(e,[r,n,a])});ge(function(e,r,n,a,t){return Cr(e,[r,n,a,t])});Ie(function(e,r,n,a,t,i){return Cr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return Cr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return Cr(e,[r,n,a,t,i,c,l])});Nt(function(e,r,n,a,t,i,c,l,u){return Cr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return We(e,n)}catch(a){return xe(o(eo,"This is not valid JSON! "+a.message,r))}});var oc=$(function(e,r){return We(e,r)});function We(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ke("null",r);case 3:return Rn(r)?Ko(e.b,r,g):Ke("a LIST",r);case 4:return Rn(r)?Ko(e.b,r,Ov):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=We(e.b,r[n]);return Je(v)?v:xe(o(si,n,v.a));case 7:var a=e.e;if(!Rn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=We(e.b,r[a]);return Je(v)?v:xe(o(Dc,a,v.a));case 8:if(typeof r!="object"||r===null||Rn(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=We(e.b,r[i]);if(!Je(v))return xe(o(si,i,v.a));t=tr(k(i,v.a),t)}return $e(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=We(l[u],r);if(!Je(v))return v;c=c(v.a)}return $e(c);case 10:var v=We(e.b,r);return Je(v)?We(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=We(d.a,r);if(Je(v))return v;s=tr(v.a,s)}return xe(Yf(Ve(s)));case 1:return xe(o(eo,e.a,r));case 0:return $e(e.a)}}function Ko(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=We(e,r[i]);if(!Je(c))return xe(o(Dc,i,c.a));t[i]=c.a}return $e(n(t))}function Rn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ov(e){return o(is,e.length,function(r){return e[r]})}function Ke(e,r){return xe(o(eo,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&ei(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return ei(e.g,r.g)}}function ei(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}x(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function qv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var st=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Zv(e){return{$:5,b:e}}var Qv=0;function Yt(e){var r={$:0,e:Qv++,f:e,g:null,h:[]};return Gt(r),r}function cc(e){return dr(function(r){r(Rr(Yt(e)))})}function lc(e,r){e.h.push(r),Gt(e)}var Xv=$(function(e,r){return dr(function(n){lc(e,r),n(Rr(zn))})}),ja=!1,ri=[];function Gt(e){if(ri.push(e),!ja){for(ja=!0;e=ri.shift();)Kv(e);ja=!1}}function Kv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Ht(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Je(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=e$(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),ai(l,b.b,t(v))}return ai(l,u.b,t(v)),d?{ports:d}:{}}var nr={};function e$(e,r){var n;for(var a in nr){var t=nr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=n$(t,r)}return n}function r$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function n$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(st,l,Zv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Yt(o(st,l,e.b))}var a$=$(function(e,r){return dr(function(n){e.g(r),n(Rr(zn))})});$(function(e,r){return o(Xv,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function t$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ni=[],Wa=!1;function ai(e,r,n){if(ni.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=ni.shift();)o$(a.p,a.q,a.r);Wa=!1}}function o$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=i$(e,t,a,r.l);n[t]=c$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function i$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?nr[r].e:nr[r].f;return o(i,t,a)}function c$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function l$(e){nr[e]&&an(3)}$(function(e,r){return r});function u$(e,r){return l$(e),nr[e]={f:v$,u:r,a:$$},uc(e)}var v$=$(function(e,r){return function(n){return e(r(n))}});function $$(e,r){var n=P,a=nr[e].u,t=Rr(null);nr[e].b=t,nr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Je(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document!="undefined"?document:{};function It(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var vc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ot(n),e:t,f:e,b:i}})}),Nr=vc(void 0),f$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ot(n),e:t,f:e,b:i}})}),s$=f$(void 0);function d$(e,r,n,a){return{$:3,d:Ot(e),g:r,h:n,i:a}}var m$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Lr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Lr([e,r],function(){return e(r)})});x(function(e,r,n){return Lr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return Lr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Lr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ie(function(e,r,n,a,t,i){return Lr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Lr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Lr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Nt(function(e,r,n,a,t,i,c,l,u){return Lr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var $c=$(function(e,r){return{$:"a0",n:e,o:r}}),p$=$(function(e,r){return{$:"a1",n:e,o:r}}),fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Pr=$(function(e,r){return{$:"a3",n:e,o:r}}),b$=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function h$(e){return e=="script"?"p":e}function g$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o($c,r.n,_$(e,r.o)):r});function _$(e,r){var n=oo(r);return{$:r.$,a:n?p(cs,n<3?w$:x$,De(e),r.a):o($a,e,r.a)}}var w$=$(function(e,r){return k(e(r.a),r.b)}),x$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ot(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ti(c,t,i):c[t]=i}return r}function ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return mt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),mt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,gr(n===1?l[u]:l[u].b,r));return c}function mt(e,r,n){for(var a in n){var t=n[a];a==="a1"?y$(e,t):a==="a0"?L$(e,r,t):a==="a3"?S$(e,t):a==="a4"?C$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function y$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function S$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function C$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function L$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=P$(r,i),e.addEventListener(t,c,Jt&&{passive:oo(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function P$(e,r){function n(a){var t=n.q,i=We(t.a,a);if(!!Je(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function z$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function sc(e,r){var n=[];return qe(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function qe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=F$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];qe(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!k$(d,m):d!==m)&&_e(n,2,a,m),qe(h,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:oi(e,r,n,a,T$);return;case 2:oi(e,r,n,a,M$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=qt(e.d,r.d);w&&_e(n,4,a,w);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function k$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function oi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=qt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&z$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function T$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];qe(s,i[v],n,++a),a+=s.b||0}}function M$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],w=h.a,y=b.a,_=h.b,C=b.b,T=void 0,j=void 0;if(w===y){f++,qe(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var N=R.a,W=R.b;j=y===N}if(E){var U=E.a,Z=E.b;T=w===U}if(T&&j){f++,qe(_,Z,t,f),fn(i,t,w,C,m,c),f+=_.b||0,f++,sn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,fn(i,t,y,C,m,c),qe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(j){f++,sn(i,t,w,_,f),f+=_.b||0,f++,qe(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(R&&N===U){f++,sn(i,t,w,_,f),fn(i,t,y,C,m,c),f+=_.b||0,f++,qe(W,Z,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;sn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];fn(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var dc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];qe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+dc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];qe(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}sn(e,r,n+dc,a,t)}function mc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,w=0;w<h.length;w++){t++;var y=m===1?h[w]:h[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=dn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=D$(t,a);t===e&&(e=i)}return e}function D$(e,r){switch(r.$){case 0:return B$(e,r.s,r.u);case 4:return mt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return A$(e,r);case 5:return r.s(e);default:an(10)}}function B$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function A$(e,r){var n=r.s,a=U$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function U$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Pr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Zt(v[a]),u);return p(Nr,l,r,u)}function F$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var V$=V(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Zt(l);return bc(i,function(v){var s=c(v),d=sc(u,s);l=pc(l,u,d,t),u=s})})});V(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ur.title,v=ur.body,s=Zt(v);return bc(i,function(d){ca=c;var m=l(d),f=Nr("body")(P)(m.eu),h=sc(s,f);v=pc(v,s,h,t),s=f,ca=0,u!==m.fL&&(ur.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(lo,io,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(lo,io,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(lo,io,dr(function(){history.replaceState({},"",r),e()}))});var E$={addEventListener:function(){},removeEventListener:function(){}},R$=typeof window!="undefined"?window:E$;x(function(e,r,n){return cc(dr(function(a){function t(i){Yt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=We(e,r);return Je(n)?re(n.a):q});function hc(e,r){return dr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):qv(us(e)))})})}function N$(e){return dr(function(r){ua(function(){r(Rr(e()))})})}$(function(e,r){return hc(r,function(n){return n[e](),zn})});$(function(e,r){return N$(function(){return R$.scroll(e,r),zn})});x(function(e,r,n){return hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var j$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var W$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(sl,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(sl,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var Y$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/G$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function G$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Qt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),H$=x(function(e,r,n){return new Float64Array([e,r,n])}),I$=function(e){return e[0]},O$=function(e){return e[1]},J$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var q$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(gc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(gc(e,r,n),n)}$(_c);function wc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Z$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(pt);$(function(e,r){var n,a=Qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var Q$=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var X$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},K$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/ef(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function ef(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var rf=new Float64Array(16),nf=new Float64Array(16),af=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},tf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ie(xc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return xc(c,l,i,t,n,a)});function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ie(yc);V(function(e,r,n,a){return yc(e,r,n,a,-1,1)});function Sc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],w=e[13],y=e[14],_=e[15],C=r[0],T=r[1],j=r[2],R=r[3],E=r[4],N=r[5],W=r[6],U=r[7],Z=r[8],X=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*j+b*R,n[1]=t*C+u*T+m*j+w*R,n[2]=i*C+v*T+f*j+y*R,n[3]=c*C+s*T+h*j+_*R,n[4]=a*E+l*N+d*W+b*U,n[5]=t*E+u*N+m*W+w*U,n[6]=i*E+v*N+f*W+y*U,n[7]=c*E+s*N+h*W+_*U,n[8]=a*Z+l*X+d*le+b*fe,n[9]=t*Z+u*X+m*le+w*fe,n[10]=i*Z+v*X+f*le+y*fe,n[11]=c*Z+s*X+h*le+_*fe,n[12]=a*ce+l*pe+d*Me+b*Se,n[13]=t*ce+u*pe+m*Me+w*Se,n[14]=i*ce+v*pe+f*Me+y*Se,n[15]=c*ce+s*pe+h*Me+_*Se,n}$(Sc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],w=r[1],y=r[2],_=r[4],C=r[5],T=r[6],j=r[8],R=r[9],E=r[10],N=r[12],W=r[13],U=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*j+c*R+v*E,n[9]=t*j+l*R+s*E,n[10]=i*j+u*R+d*E,n[11]=0,n[12]=a*N+c*W+v*U+m,n[13]=t*N+l*W+s*U+f,n[14]=i*N+u*W+d*U+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/wc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=h+f,C=b-m,T=h-f,j=c*c*v+u,R=w+d,E=b+m,N=w-d,W=l*l*v+u,U=n[0],Z=n[1],X=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],Me=n[7],Se=n[8],pr=n[9],br=n[10],Na=n[11],Yu=n[12],Gu=n[13],Hu=n[14],Iu=n[15];return a[0]=U*y+fe*_+Se*C,a[1]=Z*y+ce*_+pr*C,a[2]=X*y+pe*_+br*C,a[3]=le*y+Me*_+Na*C,a[4]=U*T+fe*j+Se*R,a[5]=Z*T+ce*j+pr*R,a[6]=X*T+pe*j+br*R,a[7]=le*T+Me*j+Na*R,a[8]=U*E+fe*N+Se*W,a[9]=Z*E+ce*N+pr*W,a[10]=X*E+pe*N+br*W,a[11]=le*E+Me*N+Na*W,a[12]=Yu,a[13]=Gu,a[14]=Hu,a[15]=Iu,a});function of(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(of);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function cf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(cf);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=_c(e,r,Qt),t=va(pt(n,a,ii),ii),i=va(pt(a,t,ci),ci),c=rf,l=nf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Sc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var li=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function Xt(e){for(var r=0;e.b;e=e.b)r++;return r}var lf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},uf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),vf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),$f=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),sf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),df=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),pf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),hf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},gf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},_f=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},xf=function(e){e.gl.disable(e.gl.CULL_FACE)},yf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Cf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Lf=[gf,_f,wf,Cc,Lc,xf,yf,Sf,Cf];function vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Pf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function zf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,w,y){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?w[y]:w[y][_];else i.forEach(function(C){for(_=0;_<h;_++)f[b++]=h===1?w[C][y]:w[C][y][_]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Xt(n.b)*s);xn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function kf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Tf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Xt(r.b),indexBuffer:null,buffers:{}}}function Tf(e,r){var n=new Uint32Array(Xt(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function $i(e,r){return e+"#"+r}var zc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=$i(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=li++,v||(v=vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=li++,s||(s=vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Pf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Mf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=$i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Df(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=kf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=zf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Pc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,y*C)}for(n.toggle=!n.toggle,xn(J0(n),i.a),u=0;u<ui.length;u++){var T=n[ui[u]];T.toggle!==n.toggle&&T.enabled&&(Lf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function Mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,w=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Df(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Bf=x(function(e,r,n){return d$(r,{g:n,f:{},h:e},Nf,jf)}),Af=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Uf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ff=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Vf=$(function(e,r){e.contextAttributes.antialias=!0}),Ef=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Rf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Nf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(O0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),lf(function(){return o(zc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function jf(e,r){return r.f=e.f,zc(r)}var B=av,Nn=ev,kc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Nn,e,l,v)}else{var u=c.a;return p(Nn,i,l,u)}});return p(Nn,i,p(Nn,e,r,t),a)}),Kt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Kt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),fi=function(e){return p(Kt,x(function(r,n,a){return o(B,k(r,n),a)}),P,e)},Tc=1,Wf=2,Mc=0,xe=function(e){return{$:1,a:e}},eo=$(function(e,r){return{$:3,a:e,b:r}}),si=$(function(e,r){return{$:0,a:e,b:r}}),Dc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Yf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Gf=kv,Hf=Jv,Ue=tc,kr=$(function(e,r){return o(Lv,e,za(r))}),ro=$(function(e,r){return g(o(Cv,e,r))}),Bc=function(e){return o(kr,`
    `,o(ro,`
`,e))},ka=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(ka,$(function(r,n){return n+1}),0,e)},If=tv,Of=x(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=$(function(e,r){return p(Of,e,r,P)}),Ac=$(function(e,r){return p(If,e,o(Kr,0,Fr(r)-1),r)}),ar=Fv,Uc=function(e){var r=ar(e);return 97<=r&&r<=122},Fc=function(e){var r=ar(e);return r<=90&&65<=r},Jf=function(e){return Uc(e)||Fc(e)},qf=function(e){var r=ar(e);return r<=57&&48<=r},Zf=function(e){return Uc(e)||Fc(e)||qf(e)},Ve=function(e){return p(ka,B,P,e)},tn=wv,Qf=$(function(e,r){return`

(`+(Ue(e+1)+(") "+Bc(Xf(r))))}),Xf=function(e){return o(Kf,e,P)},Kf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Jf(y)&&o(Gf,Zf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ue(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(kr,"",Ve(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ue(Fr(s))+" ways:"));return o(kr,`

`,o(B,h,o(Ac,Qf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(kr,"",Ve(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(kr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return h+(Bc(o(Hf,4,f))+(`

`+m))}}),Ee=32,bt=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=qu,no=dv,ao=$(function(e,r){return Xo(r)/Xo(e)}),es=fv,yn=no(o(ao,2,Ee)),Vc=L(bt,0,yn,ht,ht),Ec=Qu,Rc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Nc=mv,gt=Zu,Te=$(function(e,r){return I(e,r)>0?e:r}),rs=function(e){return{$:0,a:e}},to=Xu,ns=$(function(e,r){e:for(;;){var n=o(to,Ee,e),a=n.a,t=n.b,i=o(B,rs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),as=function(e){var r=e.a;return r},ts=$(function(e,r){e:for(;;){var n=no(r/Ee);if(n===1)return o(to,Ee,e).a;var a=o(ns,e,P),t=n;e=a,r=t;continue e}}),jc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Nc(o(ao,Ee,n-1)),t=e?Ve(r.z):r.z,i=o(ts,t,r.l);return L(bt,gt(r.p)+n,o(Te,5,a*yn),i,r.p)}else return L(bt,gt(r.p),yn,ht,r.p)}),os=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(jc,!1,{z:a,l:n/Ee|0,p:t});var i=Rc(p(Ec,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),is=$(function(e,r){if(e<=0)return Vc;var n=e%Ee,a=p(Ec,n,e-n,r),t=e-n-Ee;return S(os,r,t,e,P,a)}),Je=function(e){return!e.$},D=Gv,Q=Rv,M=Yv,se=Nv,$a=Hv,cs=Iv,De=Ev,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Nr("div"),ls=function(e){return{$:2,a:e}},Wc=$(function(e,r){return e}),Yc=$(function(e,r){return{a4:r.a4,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Mr=function(e){return e},us=Mr,di=Ie(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),vs=Tv,Tr=xv,qr=Pv,kn=$(function(e,r){return e<1?r:p(qr,e,Tr(r),r)}),Ta=Dv,Ma=function(e){return e===""},Da=$(function(e,r){return e<1?"":p(qr,0,e,r)}),Gc=Bv,mi=ge(function(e,r,n,a,t){if(Ma(t)||o(vs,"@",t))return q;var i=o(Ta,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(we(di,e,o(Da,c,t),u,r,n,a))}else return re(we(di,e,t,q,r,n,a))}),pi=V(function(e,r,n,a){if(Ma(a))return q;var t=o(Ta,"/",a);if(t.b){var i=t.a;return S(mi,e,o(kn,i,a),r,n,o(Da,i,a))}else return S(mi,e,"/",r,n,a)}),bi=x(function(e,r,n){if(Ma(n))return q;var a=o(Ta,"?",n);if(a.b){var t=a.a;return L(pi,e,re(o(kn,t+1,n)),r,o(Da,t,n))}else return L(pi,e,q,r,n)});$(function(e,r){if(Ma(r))return q;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(bi,e,re(o(kn,a+1,r)),o(Da,a,r))}else return p(bi,e,q,r)});var $s=Mv,io=function(e){},Tn=Rr,fs=Tn(0),Hc=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(ka,e,r,Ve(d)):L(Hc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=x(function(e,r,n){return L(Hc,e,r,0,n)}),ae=$(function(e,r){return p(mr,$(function(n,a){return o(B,e(n),a)}),P,r)}),fa=st,co=$(function(e,r){return o(fa,function(n){return Tn(e(n))},r)}),ss=x(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Tn(o(e,a,t))},n)},r)}),ds=function(e){return p(mr,ss(B),Tn(P),e)},ms=a$,ps=$(function(e,r){var n=r;return cc(o(fa,ms(e),n))}),bs=x(function(e,r,n){return o(co,function(a){return 0},ds(o(ae,ps(e),r)))}),hs=x(function(e,r,n){return Tn(0)}),gs=$(function(e,r){var n=r;return o(co,e,n)});nr.Task=r$(fs,bs,hs,gs);var _s=uc("Task"),lo=$(function(e,r){return _s(o(co,e,r))}),ws=V$,xs=gv,sa={$:1},Ic=function(e){return{$:2,a:e}},Ba={$:0},Ye=$(function(e,r){return{$:0,a:e,b:r}}),oe=x(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},ys=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ye,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Oc=function(e){var r=e.b;return o(Ye,Ba,r)},xr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ss=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Oc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,on(n).a4)>0?o(oe,ys,xr(o(Ye,sa,t))):Mr)(o(Ye,Ic({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yc,l.eA,er(r,{a4:l.a4+r.eJ})),s=o(e,v,u);return o(Ye,Ba,{B:k(v,s),ab:P,T:o(B,t.B,t.T)})}}),Jc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Cs=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Ls=$(function(e,r){return Ve(p(Cs,e,r,P))}),qc=x(function(e,r,n){if(r<=0)return P;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,w=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(Ls,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,b,p(qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return g([_])}}),Ps=$(function(e,r){return p(qc,0,e,r)}),zs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ve(n),ve(g([a]),t)),c=o(Ps,e,i),l=o(Jc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ye,sa,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var d=s.a,m=s.b;return o(Ye,sa,{B:d,ab:P,T:m})}else return r}}),ks=function(e){var r=e.b;return o(Ye,sa,r)},Ts=function(e){var r=e.b;return o(Ye,Ic({cY:on(e).a4}),r)},Ms=$(function(e,r){switch(e.$){case 1:return ks(r);case 2:return Oc(r);case 3:return Ts(r);default:var n=e.a;return o(zs,n,r)}}),Zc=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Ds=$(function(e,r){return er(r,{av:e(r.av)})}),Bs=function(e){return{$:3,a:e}},As=function(e){return{$:2,a:e}},Us=$(function(e,r){return{$:0,a:e,b:r}}),Fs=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},uo=Av,Vs=x(function(e,r,n){return o(xr,0/0,uo(o(e,r,n)))}),Qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Es=Sv,Xc=function(e){return p(Es,B,P,e)},Rs=$(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},Xc(r));return ve(e&&n?"-":"",r)}),ie=tc,_t=_v,Kc=Vv,el=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(_t,"0",el(t))}else{var i=ar(r);return i>=48&&i<57?o(_t,Kc(i+1),n):"0"}},wt=sv,Ns=hv,Aa=function(e){return o(_t,e,"")},rl=x(function(e,r,n){return e<=0?n:p(rl,e>>1,ve(r,r),e&1?ve(n,r):n)}),Sn=$(function(e,r){return p(rl,e,r,"")}),xt=x(function(e,r,n){return ve(n,o(Sn,e-Tr(n),Aa(r)))}),yt=yv,nl=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},js=function(e){var r=o(ro,"e",ie(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(xr,0,Gc(o($s,"+",t)?o(kn,1,t):t)),c=nl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(xr,"0",o(Fe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Fe,Zc(Aa),tn(ve(o(Sn,O(i),"0"),v))))):p(xt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Ws=x(function(e,r,n){if(wt(n)||Ns(n))return ie(n);var a=n<0,t=nl(js(O(n))),i=t.a,c=t.b,l=Tr(i)+r,u=ve(o(Sn,-l+1,"0"),p(xt,l,"0",ve(i,c))),v=Tr(u),s=o(Te,1,l),d=o(e,a,p(qr,s,v,u)),m=p(qr,0,s,u),f=d?yt(o(xr,"1",o(Fe,el,tn(yt(m))))):m,h=Tr(f),b=f==="0"?f:r<=0?ve(f,o(Sn,O(r),"0")):I(r,Tr(c))<0?p(qr,0,h-r,f)+("."+p(qr,h-r,h,f)):ve(i+".",p(xt,r,"0",c));return o(Rs,a,b)}),al=Ws($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ar(t))})),Ys=Vs(al),Gs=x(function(e,r,n){var a=o(ao,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ys,t,n)}),tl=nv,ol=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(tl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},en=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(G,0,v,s,S(G,1,h,b,w,y),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),St=x(function(e,r,n){if(n.$===-2)return S(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(tl,e,t);switch(u){case 0:return S(en,a,t,i,p(St,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(en,a,t,i,c,p(St,e,r,l))}}),Xn=x(function(e,r,n){var a=p(St,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),Hs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,w=m.e,y=v.e;return S(G,0,f,h,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,y=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,y))}else return e},hi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,w=f.d,y=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,h,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var h=T.b,b=T.c,w=T.d,y=T.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,h,b,w,y))}else return e},Is=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,hi(r)}else break e;else return c.a,c.d,hi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,Kn(t),l);var u=il(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,Kn(m),f)}else return or}else return S(G,r,n,a,Kn(t),l)}else return or},hn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(hn,e,i),c);var u=il(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(en,v,s,d,o(hn,e,m),f)}else return or}else return S(G,n,a,t,o(hn,e,i),c);else return o(Os,e,jt(Is,e,r,n,a,t,i,c))}),Os=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=Hs(c);if(l.$===-1){var u=l.b,v=l.c;return S(en,n,u,v,i,Kn(c))}else return or}else return S(en,n,a,t,i,o(hn,e,c))}else return or}),Js=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),jn=x(function(e,r,n){var a=r(o(ol,e,n));if(a.$)return o(Js,e,n);var t=a.a;return p(Xn,e,t,n)}),qs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Fs,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Us,k(i,c),p(Gs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===3?Bs(n):a}));default:var r=e.a,n=e.b;return o(jn,r,Fe(function(a){return a.$===2?As(n):a}))}},Zs=function(e){return Ds(qs(e))},Qs=$(function(e,r){return o(ae,Zs(e),r)}),Xs=$(function(e,r){return er(r,{eA:o(Qs,e,r.eA)})}),Ks=$(function(e,r){var n=r.a,a=r.b;return o(Ye,n,er(a,{B:o(Zc,Xs(e),a.B)}))}),ed=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),rd=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ye,a,er(t,{B:o(ed,o(e,i.a,r),i)}))}),nd=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return er(a,{aL:!a.aL});case 2:var t=n.a;return er(a,{G:p(Ss,e,t,a.G)});case 3:var i=n.a;return er(a,{G:o(Ks,i,a.G)});case 4:var c=n.a;return er(a,{G:p(rd,r,c,a.G)});default:var l=n.a;return er(a,{G:o(Ms,l,a.G)})}}),ad=$(function(e,r){return o(Ye,Ba,{B:k(e,r(e)),ab:P,T:P})}),td=t$,gi=td(P),da=Wv,Cn=jv,od=u$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se))))),id=function(e){return{$:4,a:e}},cd={$:0},ld=ic,Oe=$(function(e,r){return o(fc,e,ld(r))}),H=Oe("className"),ud=function(e){var r=e.b.B;return r.b},ma=Oe("id"),vd=m$,pa=vd,$d=p$,ne=$d,fd={$:1},sd=function(e){return{$:3,a:e}},dd=function(e){return{$:5,a:e}},_i=Nr("a"),vo=Nr("button"),wi=function(e){return o(Oe,"href",g$(e))},md=Pr("clip-rule"),Ce=Pr("d"),pd=Pr("fill"),cl=vc("http://www.w3.org/2000/svg"),bd=cl("svg"),hd=Pr("viewBox"),gd=o(b$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=bd(g([hd("0 0 24 24"),pd("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),gd("http://www.w3.org/2000/svg")])),_d=Pr("fill-rule"),Le=cl("path"),Dr={eD:Re(g([o(Le,g([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(g([o(Le,g([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(g([o(Le,g([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(g([o(Le,g([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,g([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(g([o(Le,g([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,g([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(g([o(Le,g([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(g([o(Le,g([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(g([o(Le,g([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(g([o(Le,g([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(g([o(Le,g([_d("evenodd"),md("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(g([o(Le,g([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(g([o(Le,g([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},wd=function(e){return{$:0,a:e}},ll=$c,ul=$(function(e,r){return o(ll,e,wd(r))}),$o=function(e){return o(ul,"click",De(e))},xi=Oe("target"),xd=Oe("title"),Ct=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Ct,e,i),o(Ct,e,c))}),yd=dt,sr=yd,Sd=function(e){return p(Kt,x(function(r,n,a){return o(B,n,a)}),P,e)},Cd=$(function(e,r){return{$:3,a:e,b:r}}),Ld=$(function(e,r){return{$:2,a:e,b:r}}),Pd=$(function(e,r){return{$:0,a:e,b:r}}),zd=$(function(e,r){return{$:1,a:e,b:r}}),jr=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),kd=L(jr,0/255,0/255,0/255,1),Td=ic,vl=$(function(e,r){return o(fc,e,Td(r))}),Md=vl("checked"),Qe=pv,Dd=x(function(e,r,n){return ve(o(Sn,e-Tr(n),Aa(r)),n)}),ba=iv,$l=function(e){var r=function(n){return n<10?Ue(n):Aa(Kc(87+n))};return e<16?r(e):ve($l(e/16|0),r(o(ba,16,e)))},Bd=o(oe,$l,o(Dd,2,"0")),fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Ad=function(e){var r=fo(e),n=r.cN,a=r.cd,t=r.b6;return o(kr,"",o(B,"#",o(ae,o(oe,Qe,Bd),g([n*255,a*255,t*255]))))},Lt=Oe("htmlFor"),Pt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ha=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Ud=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),fl=$(function(e,r){return p(mr,Ud(e),P,r)}),sl=V(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Fd=W$,Vd=Uv,Ed=$(function(e,r){if(r.$)return xe(e);var n=r.a;return $e(n)}),Rd=j$,Nd=function(e){return o(Rd,{ew:!1,fg:!1},e)},dl=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},jd=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return $e(e(n))}}),Wd=function(e){return{$:2,a:e}},Yd=function(e){return{$:0,a:e}},Gd=function(e){return{$:1,a:e}},Ya=$(function(e,r){return ar(r)-ar(e)}),Ga=x(function(e,r,n){var a=ar(n);return I(ar(e),a)<1&&I(a,ar(r))<1}),Hd=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):xe(Gd(r))},a=p(Ga,"0","9",r)?$e(o(Ya,"0",r)):p(Ga,"a","z",r)?$e(10+o(Ya,"a",r)):p(Ga,"A","Z",r)?$e(10+o(Ya,"A",r)):xe(Yd(r));return o(ha,n,a)}),ml=$(function(e,r){var n=tn(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ha,function(c){return o(ha,function(l){return $e(c+l*e)},o(ml,e,i))},o(Hd,e,t))}),Id=$(function(e,r){return 2<=e&&e<=36?o(ml,e,yt(r)):xe(Wd(e))}),Od=Id(16),Jd=x(function(e,r,n){return L(jr,e,r,n,1)}),qd=V(function(e,r,n,a){return L(jr,e,r,n,a)}),Mn=ov,Zd=$(function(e,r){var n=o(Mn,10,e);return Qe(r*n)/n}),Qd=zv,Xd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Xc(n);if(a.b&&!a.b.b){var t=a.a;return Vd(g([t,t]))}else return n};return o(oe,Qd,o(oe,function(n){return o(Fe,function(a){return p(Fd,1,a,n)},Nd(e))},o(oe,Pt(dl),o(oe,Fe(function(n){return n.fG}),o(oe,Fe(fl(Mr)),o(oe,Ed("Parsing hex regex failed"),ha(function(n){var a=o(ae,o(oe,r,o(oe,Od,jd(es))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(qd,t/255,c/255,u/255,o(Zd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(Jd,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),ga=Nr("input"),zt=Nr("label"),kt=Oe("name"),pl=$(function(e,r){return p(mr,M,r,e)}),Kd=o(pl,g(["target","checked"]),Q),em=function(e){return o(ul,"change",o($a,e,Kd))},rm=function(e){return k(e,!0)},nm=function(e){return{$:1,a:e}},am=$(function(e,r){return o(ll,e,nm(r))}),tm=o(pl,g(["target","value"]),Cn),so=function(e){return o(am,"input",o($a,rm,o($a,e,tm)))},bl=Oe("max"),hl=Oe("min"),gl=function(e){return o(Oe,"step",e)},_a=Oe("type"),mo=Oe("value"),yi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,P,g([o(zt,g([Lt(r)]),g([o(J,g([H("relative w-full")]),g([o(J,g([H("inline-block")]),g([sr(r)])),o(J,g([H("inline-block float-right")]),g([sr(ie(n))]))]))])),o(ga,g([_a("range"),o(ne,"width","100%"),ma(r),kt(r),hl(ie(a)),bl(ie(t)),mo(ie(n)),gl(ie(i)),so(o(oe,uo,o(oe,xr(42),c)))]),P)]))},om=$(function(e,r){if(r.$)return e;var n=r.a;return n}),im=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,g([H("h-12 py-4")]),g([o(zt,g([H("block"),Lt(e)]),g([o(ga,g([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),kt(e),em(Cd(e)),Md(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return yi({cg:e,cs:i,cw:t,cA:Pd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return yi({cg:e,cs:i,cw:t,cA:o(oe,Qe,zd(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,g([o(J,g([o(ne,"margin-bottom","6px")]),g([o(zt,g([Lt(e)]),g([sr(e)]))])),o(ga,g([_a("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),ma(e),kt(e),so(function(l){return o(Ld,e,o(om,kd,Xd(l)))}),mo(Ad(c))]),P)]))}}),cm=function(e){return o(J,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(J,g([H("text-lg pb-2")]),g([sr(e.fh)])),o(J,g([H("pl-2 pr-2")]),Sd(o(Ct,im,e.av)))]))},lm=function(e){return o(J,g([H("text-xs text-white60")]),o(ae,cm,e))},um=function(e){return o(J,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([sr("clock: "+o(al,3,on(e).a4))]))},vm=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return Qe(60/(on(e).a4-n))},o(Fe,o(oe,as,function(n){return n.a4}),dl(o(Jc,59,r))))},$m=function(e){return o(J,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=vm(e);if(r.$===1)return g([sr("... Fps")]);var n=r.a;return g([sr(Ue(n)+" Fps")])}())},fm=function(e){return{$:0,a:e}},sm=function(e){var r=e.b.T;return Fr(r)},dm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},mm=function(e){return o(ga,g([H("absolute w-full"),_a("range"),hl(Ue(0)),bl(Ue(dm(e)-1)),mo(Ue(sm(e))),gl(Ue(1)),so(o(oe,uo,o(oe,xr(42),o(oe,Qe,fm))))]),P)},Si={$:1},Ci={$:3},Li={$:2},Tt=function(e){return!e.b},_l=vl("disabled"),Ha=x(function(e,r,n){return o(vo,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),_l(e),$o(r)]),g([sr("REC")]))}),Ia=x(function(e,r,n){return o(vo,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),_l(e),$o(n)]),g([o(J,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),pm=function(e){var r=e.a,n=e.b.ab;return o(J,g([H("py-1")]),g([function(){switch(r.$){case 0:return p(Ha,!1,Si,"text-red-500 font-bold");case 1:return p(Ha,!1,Li,"text-white60 hover:text-white80 font-bold");default:return p(Ha,!0,Li,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ia,Tt(n),Dr.fq,Ci);case 1:return p(Ia,Tt(n),Dr.fq,Ci);default:return p(Ia,!1,Dr.fp,Si)}}()]))},bm=function(e){return o(J,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([mm(e),pm(e),$m(e),um(e)]))},hm=function(e){var r=e.a;return wr(r,Ba)},gm=$(function(e,r){var n=hm(r.G)?o(J,P,P):o(J,g([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",ie(e.fs.fU+.5*e.cT.fS)+"px"),o(ne,"top",ie(-e.fs.fY+.5*e.cT.eW)+"px")]),g([o(J,g([H(e.fs.e4?"text-black80":"text-black40")]),g([Dr.fs]))]));return o(J,P,g([n]))}),_m=$(function(e,r){var n=o(vo,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),$o(fd),xd("Distraction Free Mode")]),g([Dr.f0])),a=40,t=260,i=o(J,g([H("absolute w-8 bottom-12")]),g([o(_i,g([H("text-twitterBlue40 hover:text-twitterBlue"),wi("https://twitter.com/AzizErkalSelman"),xi("_blank")]),g([Dr.fN]))])),c=80,l=o(J,g([H("absolute w-8 bottom-2")]),g([o(_i,g([H("text-githubCat40 hover:text-githubCat"),wi("https://github.com/erkal/elm-3d-playground-exploration"),xi("_blank")]),g([Dr.eQ]))])),u=e.cT.fS>640?A(e.cT.eW,a+t,e.cT.fS-(a+t)):A(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,d=u.c;return r.aL?o(J,g([H("fixed w-10 h-10 p-1")]),g([n])):o(J,P,g([o(J,g([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",ie(a)+"px")]),g([n,i,l])),o(J,g([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",ie(t)+"px"),o(ne,"height",ie(v)+"px")]),g([o(pa,sd,lm(on(r.G).eA))])),o(J,g([H("absolute bottom-0"),o(ne,"left",ie(s)+"px"),o(ne,"height",ie(c)+"px"),o(ne,"width",ie(d)+"px")]),g([o(pa,dd,bm(r.G))])),o(gm,e,r)]))}),wm=x(function(e,r,n){var a=ud(n.G),t=on(n.G);return o(J,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",ie(t.cT.fS)+"px"),o(ne,"height",ie(t.cT.eW)+"px")]),g([o(J,g([H("fixed")]),g([o(pa,Wc(cd),o(e,t,a))])),o(J,g([ma("gui")]),g([o(_m,t,n),o(pa,id,o(r,t,a))]))]))}),xm=Ie(function(e,r,n,a,t,i){var c=$(function(u,v){return k(L(nd,r,i,u,v),gi)}),l=function(u){var v=o(Yc,n,u.e1);return k({aL:u.e1.cT.fS<500,G:o(ad,v,a)},gi)};return ws({e0:l,fH:Wc(od(ls)),fO:c,fQ:o(wm,e,t)})}),ym=V(function(e,r,n,a){return we(xm,e,r,n,a,$(function(t,i){return o(J,P,P)}),x(function(t,i,c){return c}))}),Sm=x(function(e,r,n){return L(ym,e,r,P,n)}),Cm=function(e){return{}},Lm=$(function(e,r){return r}),Vr=cv,Pi=function(e){return e*Vr/180},Pm=$v,hr=bv,zm=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Te,O(c),o(Te,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c6:u/d})}else return q}),Oa=function(e){return e},po=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),ea=function(e){var r=e,n=o(Te,O(r.fU),o(Te,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},wa=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),km=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),wl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Tm=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Mm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Dm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),Bm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Ze=0,xl={fU:0,fY:0,c6:0},Am=x(function(e,r,n){return o(Pt,function(a){var t=o(Mm,o(Dm,a,r),r);return o(Pt,function(i){var c=o(po,r,e),l=o(km,n,c),u=o(wl,Ze,l)?c:o(Tm,Ze,l)?Bm(c):xl;return o(Fe,function(v){return A(a,i,v)},ea(u))},ea(t))},ea(e))}),Um=function(e){var r=e,n=O(r.c6),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=hr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=hr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},bo=function(e){var r=Um(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return k(r,c)},Zr=function(e){var r=e;return r},ir=function(e){return e},Fm=$(function(e,r){var n=bo(e),a=n.a,t=n.b;return ir({cB:r,c4:a,c5:t,c7:e})}),Vm=function(e){var r=o(wa,e.aR,e.dj),n=Zr(e.ei),a=o(po,r,n),t=p(Am,r,n,a);if(t.$){var v=ea(r);if(v.$){var d=bo(e.ei),m=d.a,f=d.b;return ir({cB:e.dj,c4:f,c5:e.ei,c7:m})}else{var s=v.a;return o(Fm,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ir({cB:e.dj,c4:u,c5:l,c7:c})}},Ae={fU:0,fY:0,c6:0},Em=function(e){return{$:0,a:e}},me=function(e){var r=e;return O(r)},ra=function(e){var r=e;return .5*r},Rm=vv,Nm=function(e){var r=e;return Rm(r)},jm=function(e){var r=ra(me(e.ej)),n=Nm(r);return{cM:Em(n),c2:e.c2}},vr=function(e){return e},ho=vr({fU:0,fY:1,c6:0}),yr=function(e){return e},Wm=function(e){var r=e.aR,n=e.dj,a=e.ei;return jm({ej:yr(2*Pm(.5)),c2:Vm({dj:Oa(n),aR:Oa(r),ei:o(xr,ho,o(zm,Ae,Oa(a)))})})},Ja=function(e){return e/255},Ym=x(function(e,r,n){return L(jr,Ja(e),Ja(r),Ja(n),1)}),yl=L(jr,52/255,101/255,164/255,1),Gm=L(jr,115/255,210/255,22/255,1),go=function(e){return{$:5,a:e}},Hm=function(e){return go(e)},_o=$(function(e,r){return{$:4,a:e,b:r}}),Sl=function(e){return e},Im=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Om=$(function(e,r){return Sl(k(e,o(Im,r,e)))}),Cl=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Jm=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(Cl,e(n),e(a),e(t))}),_r=function(e){return e},qa=$(function(e,r){return o(_o,e,o(Om,Ae,o(Jm,_r,r)))}),qm=L(jr,204/255,0/255,0/255,1),Zm=Hm(g([o(qa,qm,A(100,0,0)),o(qa,Gm,A(0,100,0)),o(qa,yl,A(0,0,100))])),wo=$(function(e,r){return{$:0,a:e,b:r}}),Za=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),Qm=vr({fU:-1,fY:0,c6:0}),Xm=vr({fU:0,fY:-1,c6:0}),Ll=vr({fU:0,fY:0,c6:-1}),Pl=vr({fU:1,fY:0,c6:0}),xo=vr({fU:0,fY:0,c6:1}),be=x(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Km=Ie(function(e,r,n,a,t,i){var c=o(Za,n,i)?xo:Ll,l=o(Za,r,t)?ho:Xm,u=o(Za,e,a)?Pl:Qm,v=A(me(o($r,e,a)),me(o($r,r,t)),me(o($r,n,i))),s=p(be,o(Qa,e,a),o(Qa,r,t),o(Qa,n,i)),d=ir({cB:s,c4:u,c5:l,c7:c});return{er:d,aK:v}}),Br=function(e){var r=e;return r.fU},Ar=function(e){var r=e;return r.fY},Ur=function(e){var r=e;return r.c6},e0=$(function(e,r){return we(Km,Br(e),Ar(e),Ur(e),Br(r),Ar(r),Ur(r))}),Mt=x(function(e,r,n){return{fU:e,fY:r,c6:n}}),r0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(wo,e,o(e0,p(Mt,-c,-l,-u),p(Mt,c,l,u)))}),Dt=function(e){return{$:0,a:e}},zl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),kl=x(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Xa=function(e){return p(kl,0,1,e<=.04045?e/12.92:o(Mn,(e+.055)/1.055,2.4))},Dn=H$,n0=function(e){var r=fo(e),n=r.cN,a=r.cd,t=r.b6;return p(Dn,Xa(n),Xa(a),Xa(t))},a0=function(e){return p(zl,0,Dt(n0(e)),Dt(0))},Tl=$(function(e,r){return{$:2,a:e,b:r}}),Ml=$(function(e,r){return{$:3,a:e,b:r}}),Dl=$(function(e,r){return{$:1,a:e,b:r}}),t0=function(e){var r=e;return r},yo=function(e){var r=e;return t0(r.er)},So=function(e){var r=e;return r.aK},cn=function(e){var r=e;return r.cB},Er=lv,rn=uv,na=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=rn(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,w=d*h,y=h*h,_=1-2*(f+y),C=s.c6*u,T=l*C,j=2*(w-T),R=2*(w+T),E=d*C,N=2*(E+b),W=2*(E-b),U=h*C,Z=2*(U-m),X=2*(U+m),le=C*C,fe=1-2*(y+le),ce=1-2*(f+le);return{fU:fe*i.fU+j*i.fY+N*i.c6,fY:R*i.fU+ce*i.fY+Z*i.c6,c6:W*i.fU+X*i.fY+_*i.c6}}),Bn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=rn(c),v=a.cB,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,h=a.eH,b=h,w=b.fU*u,y=l*w,_=w*w,C=b.fY*u,T=l*C,j=w*C,R=C*C,E=1-2*(_+R),N=b.c6*u,W=l*N,U=2*(j-W),Z=2*(j+W),X=w*N,le=2*(X+T),fe=2*(X-T),ce=C*N,pe=2*(ce-y),Me=2*(ce+y),Se=N*N,pr=1-2*(R+Se),br=1-2*(_+Se);return{fU:s.fU+pr*d+U*m+le*f,fY:s.fY+Z*d+br*m+pe*f,c6:s.c6+fe*d+Me*m+E*f}}),Wr=function(e){var r=e;return r.c4},Yr=function(e){var r=e;return r.c5},Gr=function(e){var r=e;return r.c7},o0=x(function(e,r,n){return ir({cB:p(Bn,e,r,cn(n)),c4:p(na,e,r,Wr(n)),c5:p(na,e,r,Yr(n)),c7:p(na,e,r,Gr(n))})}),i0=x(function(e,r,n){return{er:p(o0,e,r,yo(n)),aK:So(n)}}),An=$(function(e,r){return{eH:r,cB:e}}),c0=$(function(e,r){var n=o(Bn,e,r),a=o(na,e,r);return function(t){var i=t;return o(An,n(i.cB),a(i.eH))}}),l0=x(function(e,r,n){var a=n;return{k:p(c0,e,r,a.k),e9:a.e9,fu:a.fu}}),Co=function(e){var r=e;return r},Bl=$(function(e,r){var n=Co(r),a=n.a,t=n.b;return Sl(k(e(a),e(t)))}),u0=x(function(e,r,n){return o(Bl,o(Bn,e,r),n)}),Lo=function(e){var r=e;return r.ey},Po=function(e){var r=e;return r.fu},Al=$(function(e,r){return{ey:r,fu:me(e)}}),v0=x(function(e,r,n){return o(Al,Po(n),p(Bn,e,r,Lo(n)))}),Ul=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),$0=x(function(e,r,n){return o(Ul,o(Bn,e,r),n)}),Ua=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(wo,l,p(i0,e,r,a));case 1:var l=n.a,t=n.b;return o(Dl,l,p($0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ml,l,p(v0,e,r,i));case 2:var l=n.a,c=n.b;return o(Tl,l,p(l0,e,r,c));case 4:var l=n.a,u=n.b;return o(_o,l,p(u0,e,r,u));default:var v=n.a;return go(o(ae,o(Ua,e,r),v))}}),zo=Pl,f0=o(An,Ae,zo),s0=$(function(e,r){return p(Ua,f0,yr(e),r)}),ko=ho,d0=o(An,Ae,ko),m0=$(function(e,r){return p(Ua,d0,yr(e),r)}),To=xo,p0=o(An,Ae,To),b0=$(function(e,r){return p(Ua,p0,yr(e),r)}),K=$(function(e,r){var n=r;return e*n}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Un=x(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c6:a.c6+r*(t.c6-a.c6)}}),h0=x(function(e,r,n){var a=yo(n),t=Wr(a),i=Yr(a),c=Gr(a),l=p(Un,e,r,cn(a)),u=r>=0?ir({cB:l,c4:t,c5:i,c7:c}):ir({cB:l,c4:fr(t),c5:fr(i),c7:fr(c)}),v=So(n),s=v.a,d=v.b,m=v.c,f=me(o(K,r,s)),h=me(o(K,r,d)),b=me(o(K,r,m));return{er:u,aK:A(f,h,b)}}),Mo=function(e){var r=e;return r.k},Fl=function(e){var r=e;return r.eH},zi=function(e){return Fl(Mo(e))},Vl=function(e){var r=e;return r.cB},g0=function(e){return Vl(Mo(e))},El=function(e){var r=e;return r.e9},Rl=function(e){var r=e;return r.fu},_0=x(function(e,r,n){var a=me(o(K,r,Rl(n))),t=me(o(K,r,El(n))),i=r>=0?zi(n):fr(zi(n)),c=p(Un,e,r,g0(n));return{k:o(An,c,i),e9:t,fu:a}}),w0=x(function(e,r,n){return o(Bl,o(Un,e,r),n)}),x0=x(function(e,r,n){return o(Al,o(K,O(r),Po(n)),p(Un,e,r,Lo(n)))}),y0=x(function(e,r,n){return o(Ul,o(Un,e,r),n)}),Nl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(wo,c,p(h0,Ae,e,n));case 1:var c=r.a,a=r.b;return o(Dl,c,p(y0,Ae,e,a));case 3:var c=r.a,t=r.b;return o(Ml,c,p(x0,Ae,e,t));case 2:var c=r.a,i=r.b;return o(Tl,c,p(_0,Ae,e,i));case 4:var c=r.a,l=r.b;return o(_o,c,p(w0,Ae,e,l));default:var u=r.a;return go(o(ae,Nl(e),u))}}),S0=$(function(e,r){return(r-Nc(r/e)*e)/e}),C0=function(e){return 2*Vr*e},Wn=V(function(e,r,n,a){return e+(r-e)*(1+Er(C0(o(S0,n,a))))/2}),L0=function(e){return o(b0,L(Wn,1,10,30,e.a4),o(m0,L(Wn,1,10,30,e.a4),o(s0,L(Wn,1,10,30,e.a4),o(Nl,L(Wn,1,2,14,e.a4),o(r0,a0(yl),A(1,1,1))))))},P0=$(function(e,r){return g([Zm,L0(e)])}),z0=function(e){return e},k0=function(e){return _r(.01*e)},ki=function(e){return e},T0=function(e){return e},M0=function(e){return{$:0,a:e}},D0=M0,B0={$:3},A0=B0,U0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),F0=U0,V0=$(function(e,r){return r.b?p(mr,B,r,e):e}),Ge=function(e){return p(mr,V0,P,e)},Do=$(function(e,r){return Ge(o(ae,e,r))}),E0=function(e){return{$:1,a:e}},R0=E0,N0=function(e){return o(Pr,"height",Ue(e))},j0=function(e){return s$(h$(e))},W0=j0,Y0=function(e){return{$:2,a:e}},G0=Y0,H0=function(e){return o(kr,"",e)},I0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return H0(g(["rgba(",ie(c(r)),"%,",ie(c(n)),"%,",ie(c(a)),"%,",ie(i(t)),")"]))},O0=$(function(e,r){switch(r.$){case 0:return o(Af,e,r);case 1:return o(Uf,e,r);case 2:return o(Ff,e,r);case 3:return o(Vf,e,r);case 4:return o(Ef,e,r);default:return o(Rf,e,r)}}),J0=$(function(e,r){switch(r.$){case 0:return o(vf,e,r);case 1:return o($f,e,r);case 2:return o(ff,e,r);case 3:return o(sf,e,r);case 4:return o(df,e,r);case 5:return o(mf,e,r);case 6:return o(pf,e,r);case 7:return o(bf,e,r);default:return hf(e)}}),q0=x(function(e,r,n){return p(Bf,e,r,n)}),Ti=function(e){var r=e;return r},ln=Q$,Ka=L(ln,1,1,1,1),Xe=x(function(e,r,n){return o(ae,function(a){return o(a,r,n)},e)}),Z0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Q0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Z0,n*a/t,n,n*(1-a-t)/t)}),X0=function(e){var r=e.a,n=e.b,a=e.c;return p(Dn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Bo=$(function(e,r){return X0(o(Q0,e,r))}),jl=$(function(e,r){return{dp:wr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),rr=af,K0=function(e){return rr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},et=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(ln,a.bY,a.bY,a.bY,i);return we(t,e,c,K0(a),a.dp,r,n)}),Wl=Ie(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(jl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(B,S(et,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,y=o(B,S(et,e,r,n,a,w),i.U);return{M:i.M,U:y,fB:i.fB};case 2:var _=t.a,C=o(B,S(et,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(ka,L(Wl,e,r,n,a),i,T)}}),ep=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Yl=ep,Ao=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),rp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,518,r,n,a)},np=$(function(e,r){return{$:6,a:e,b:r}}),ap=np,Gl=g([rp({V:1,W:0,Z:!1}),L(Yl,!1,!1,!1,!1),o(ap,0,1)]),nn=519,Uo=8,Hl=15,Qr=7681,tp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},te=uf,op=$(function(e,r){return{$:0,a:e,b:r}}),ip=op({df:1,$7:0,dV:5}),Be=Y$,cp=ip(g([{bU:o(Be,-1,-1)},{bU:o(Be,1,-1)},{bU:o(Be,-1,1)},{bU:o(Be,1,1)}])),lp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Fo=x(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(oe,c(v.bm),o(oe,l(v.a9),o(oe,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(up,a,t,i)))}),Vo=function(e){return p(Fo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Eo=function(e){return S(te,g([Vo(e),L(Yl,!1,!1,!1,!1)]),lp,tp,cp,{})},vp=Eo({a9:Qr,cp:0,cO:Uo,bm:nn,c3:Hl,bu:Qr,bv:Qr}),$p=516,Mi=5386,ye=7680,fp=function(e){return o(Mn,2,e+4)},Il=function(e){return Eo({a9:ye,cp:Hl,cO:Uo,bm:$p,c3:fp(e),bu:Mi,bv:Mi})},sp=x(function(e,r,n){return Ge(g([p(Xe,e,n,Gl),g([Il(r),vp])]))}),dp=$(function(e,r){return Ge(o(Ac,sp(e),r))}),mp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,513,r,n,a)},pp=mp({V:1,W:0,Z:!0}),bp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},hp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return bp(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},gp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Di=$(function(e,r){var n=e,a=r;return p(gp,32774,n,a)}),_p=1,Bi=771,wp=770,Ro=hp({bw:0,aH:o(Di,_p,Bi),bz:0,bB:o(Di,wp,Bi),bG:0,bW:0}),Hr=g([pp,Ro]),xp=function(e){var r=e;return r.dO},yp=function(e){var r=e;return r.dP},Ol=function(e){var r=e;return r.dQ},Sp=function(e){var r=e;return r.dR},Cp=function(e){var r=e;return r.dS},Jl=function(e){var r=e;return r.dT},ql=function(e){return A(o($r,Sp(e),xp(e)),o($r,Cp(e),yp(e)),o($r,Jl(e),Ol(e)))},Ai=function(e){var r=e;return cn(r)},Lp=function(e){return e},Pp=function(e){return ir({cB:Lp({fU:e.H,fY:e.I,c6:e.J}),c4:vr({fU:e.q,fY:e.r,c6:e.s}),c5:vr({fU:e.t,fY:e.u,c6:e.v}),c7:vr({fU:e.w,fY:e.x,c6:e.y})})},rt=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Zl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,d=n.c5,m=d,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Ql=$(function(e,r){return{cB:o(Zl,e,cn(r)),c4:o(rt,e,Wr(r)),c5:o(rt,e,Yr(r)),c7:o(rt,e,Gr(r))}}),xa=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Te,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),zp=$(function(e,r){var n=xa(r),a=xa(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),He=function(e){var r=e;return r},kp=function(e){var r=e;return A(r.fU,r.fY,r.c6)},gn=$(function(e,r){var n=e,a=r;return a+n}),Tp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(me(a)),c=ra(me(n)),l=ra(me(t)),u=kp(r),v=u.a,s=u.b,d=u.c;return{dO:o(gn,c,v),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Ui=V(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,d=He(Gr(e)),m=O(l*d.fU)+O(c*d.fY)+O(i*d.c6),f=He(Yr(e)),h=O(l*f.fU)+O(c*f.fY)+O(i*f.c6),b=He(Wr(e)),w=O(l*b.fU)+O(c*b.fY)+O(i*b.c6),y=o(Tp,A(w,h,m),o(Zl,e,p(Mt,s,v,u)));if(a.$)return re(y);var _=a.a;return re(o(zp,_,y))}),Bt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 1:var c=t.a,l=L(Ui,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 2:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 3:var c=t.a,l=L(Ui,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 4:var u=t.a,f=e,h=r,b=L(Bt,e,r,n,u),w=i;e=f,r=h,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Ql,Pp(v),e),m=r*v.bY,f=e,h=r,b=L(Bt,d,m,n,g([s])),w=i;e=f,r=h,n=b,a=w;continue e}}else return n}),un=I$,vn=O$,$n=J$,Xl=function(e){return{$:4,a:e}},Mp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Xl(o(Mp,e,P))},Dp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Bp=function(e){var r=e;return r},Fi=Eo({a9:Qr,cp:0,cO:Uo,bm:nn,c3:255,bu:Qr,bv:Qr}),Ap=function(e){var r=e,n=o(Te,O(r.fU),o(Te,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return Ze},Pe={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},je=$(function(e,r){var n=e,a=r;return rr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=k({be:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe),bN:o(je,Pe,Pe)},L(ln,0,0,0,0)),Vi=function(e){var r=e;return-r},Kl=514,eu=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,515,r,n,a)},ru=240,Up=g([eu({V:1,W:0,Z:!0}),Vo({a9:ye,cp:ru,cO:0,bm:Kl,c3:0,bu:ye,bv:ye}),Ro]),Fp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=me(a),l=c,u=me(t),v=u,s=n.cM;if(s.$){var m=s.a;return wt(v)?rr({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):rr({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return wt(v)?rr({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):rr({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Yn=$(function(e,r){return(1&e>>r)===1?0:1}),Vp=function(e){return g([eu({V:1,W:0,Z:!0}),Vo({a9:ye,cp:ru,cO:e,bm:Kl,c3:0,bu:ye,bv:ye}),Ro])},Ep=x(function(e,r,n){return Ge(o(ae,function(a){var t=a<<4,i=L(ln,o(Yn,a,0),o(Yn,a,1),o(Yn,a,2),o(Yn,a,3));return p(Xe,e,k(r,i),Vp(t))},o(Kr,1,o(Mn,2,n)-1)))}),Xr=function(e){var r=e;return r},Rp=tf,Ei=function(e){var r=e;return fr(Gr(r))},Np={cB:Ae,c4:zo,c5:ko,c7:To},Fa=function(e){var r=e;return r},jp=function(e){var r=Fa(cn(e)),n=He(Gr(e)),a=He(Yr(e)),t=He(Wr(e));return rr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Wp=$(function(e,r){var n=r;return jp(o(Ql,n,e))}),Yp=function(e){return o(Wp,Np,e)},Gp=function(e){var r=e;return r.c2},Hp=function(e){var r=e;return Wr(r)},Ip=function(e){var r=e;return Yr(r)},Op=function(e){var r=Gp(e.ev),n=ir({cB:Ai(r),c4:Hp(r),c5:Ip(r),c7:fr(Ei(r))}),a=Fn(e.aP),t=a,i=L(Bt,n,1,q,g([t]));if(i.$===1)return P;var c=i.a,l=Yp(r),u=o(K,.99,o(ue,me(e.aJ),Vi(Ol(c)))),v=ql(c),s=v.a,d=v.b,m=v.c,f=Ap(p(Cl,s,d,m)),h=o(K,1.01,o(gn,f,Vi(Jl(c)))),b=o(Fp,e.ev,{eq:e.eq,eP:h,fi:u}),w=Rp(b).dM,y=w?He(fr(Ei(r))):Xr(Ai(r)),_=function(){var ce=e.b_;switch(ce.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var pe=ce.a;return k(3,pe);case 4:var pe=ce.a;return k(4,pe);default:return k(5,0)}}(),C=_.a,T=_.b,j=e.bE,R=j,E=o(Bo,R,e.b0),N=E,W=rr({dx:0,dy:y.fU,dz:un(N),dA:e.ec,dB:0,dC:y.fY,dD:vn(N),dE:Bp(f),dF:0,dG:y.c6,dH:$n(N),dI:C,dJ:0,dK:w,dL:0,dM:T}),U=we(Wl,W,l,b,Dp,t,{M:P,U:P,fB:P}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return Ge(g([p(Xe,U.M,k(X,Ka),Hr),p(Xe,U.U,pn,Hr)]));case 1:var X=Z.a;return Ge(g([p(Xe,U.M,pn,Hr),g([Fi]),p(Xe,U.fB,X.be,Gl),g([Il(0)]),p(Xe,U.M,k(X,Ka),Up),p(Xe,U.U,pn,Hr)]));default:var le=Z.a,fe=Z.b;return Ge(g([p(Xe,U.M,k(fe,Ka),Hr),g([Fi]),o(dp,U.fB,le),p(Ep,U.M,fe,Fr(le)),p(Xe,U.U,pn,Hr)]))}},Jp=function(e){return o(Pr,"width",Ue(e))},qp=$(function(e,r){var n=g([R0(1),G0(0),D0(!0),L(F0,0,0,0,0)]),a=function(){var C=e.b1;switch(C.$){case 0:return A(n,"0",1);case 1:return A(o(B,A0,n),"1",1);default:var T=C.a;return A(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ti(v),d=o(ne,"height",Ue(s)+"px"),m=Ti(u),f=m/s,h=o(Do,function(C){return Op({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bE:C.bE,bK:C.bK,ec:c,b_:C.b_,b0:C.b0})},r),b=o(ne,"width",Ue(m)+"px"),w=e.aI,y=w,_=I0(y);return p(W0,"div",g([o(ne,"padding","0px"),b,d]),g([k(i,p(q0,t,g([Jp(Qe(m*c)),N0(Qe(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),h))]))}),Zp=function(e){return o(qp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},nu=function(e){return e},Ri=nu({fU:.31271,fY:.32902}),Qp=$(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Bo,r.ce,r.b7),u=l;return{bz:$n(u),ex:n,bG:vn(u),cK:0,bW:un(u),c_:1,fU:-t,fY:-i,c6:-c}}),Xp=function(e){return e},Kp=function(e){return Xp(1.2*o(Mn,2,e))},nt=function(e){return e},eb={$:0},rb=eb,au=function(e){return e},Ni=function(e){var r=e;return r},nb=function(e){e:for(;;){if(wr(e.e2,Ze)&&wr(e.e3,Ze))return Pe;if(o(wl,me(e.e2),me(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=O(Ni(e.e3)/Vr),a=O(Ni(e.e2)/Vr),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Bo,au(1),e.b7),v=u;return{bz:a*$n(v),ex:!1,bG:a*vn(v),cK:n/a,bW:a*un(v),c_:3,fU:i,fY:c,c6:l}}}},ji=function(e){return nb({b7:e.b7,e2:e.ce,e3:Ze,ei:e.ei})},ab=function(e){var r=e;return r},tu=function(e){var r=p(kl,1667,25e3,ab(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return nu({fU:n,fY:a})},ou=function(e){return e},tb=tu(ou(12e3)),ob=tu(ou(5600)),ib=function(e){return{$:2,a:e}},cb=function(e){return ib(e)},lb=$(function(e,r){return{$:2,a:e,b:r}}),iu=function(e){return{$:0,a:e}},Gn=function(e){var r=e;return r},ub=function(e){var r=e;return r.ex},vb=iu(pn.a),$b=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(B,a,i),c):k(i,o(B,a,c))});return p(mr,n,k(P,P),r)}),fb=function(e){var r=e;return rr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},sb=ee(function(e,r,n,a,t,i,c,l){var u=o($b,ub,g([Gn(e),Gn(r),Gn(n),Gn(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,w=b.a,y=b.b,_=y.a;return o(lb,o(ae,fb,v),{be:o(je,m,h),bL:o(je,w,_),bM:o(je,t,i),bN:o(je,c,l)})}else return vb}else return iu({be:o(je,e,r),bL:o(je,n,a),bM:o(je,t,i),bN:o(je,c,l)})}),db=x(function(e,r,n){return Pa(sb,e,r,n,Pe,Pe,Pe,Pe,Pe)}),mb=function(e){var r=o(Qp,T0(e.fB),{b7:ob,eH:e.fJ,ce:nt(8e4)}),n=ji({b7:tb,ce:nt(2e4),ei:e.ei}),a=ji({b7:Ri,ce:nt(15e3),ei:fr(e.ei)}),t=p(db,r,n,a);return Zp({b1:cb(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bE:Kp(15),bK:t,b_:rb,b0:Ri})},cu=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),pb=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),lu=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),uu=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),bb=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),hb=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),gb=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),No=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(gb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(cu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(pb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(lu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(hb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(uu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(bb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},jo={$:0},_b=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=xa(c(u)),d=o(de,s.dR,e),m=o(ue,s.dO,r),f=o(de,s.dS,n),h=o(ue,s.dP,a),b=o(de,s.dT,t),w=o(ue,s.dQ,i),y=c,_=v;e=d,r=m,n=f,a=h,t=b,i=w,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),wb=x(function(e,r,n){var a=xa(e(r));return Pa(_b,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),at=$(function(e,r){var n=e,a=r;return I(a,n)<1}),vu=function(e){return o(at,e.dO,e.dR)&&o(at,e.dP,e.dS)&&o(at,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},$u=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Br(n),c=Ar(n),l=Ur(n),u=Br(a),v=Ar(a),s=Ur(a),d=Br(t),m=Ar(t),f=Ur(t);return vu({dO:o(ue,i,o(ue,u,d)),dP:o(ue,c,o(ue,v,m)),dQ:o(ue,l,o(ue,s,f)),dR:o(de,i,o(de,u,d)),dS:o(de,c,o(de,v,m)),dT:o(de,l,o(de,s,f))})},fu=q$,ze=function(e){return fu(Fa(e))},su=function(e){var r=e;return r},Va=function(e){return fu(su(e))},xb=$(function(e,r){var n=e,a=r,t=o(Te,O(a.fU),o(Te,O(a.fY),O(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return xl}),yb=xb(au(1)),du=x(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return yb(o(po,a,t))}),Sb=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Va(p(du,n,a,t));return A({o:i,bU:ze(n)},{o:i,bU:ze(a)},{o:i,bU:ze(t)})},Cb=$(function(e,r){return{$:2,a:e,b:r}}),mu=Cb({df:3,$7:0,dV:4}),Lb=function(e){if(e.b){var r=e.a,n=e.b,a=mu(o(ae,Sb,e)),t=p(wb,$u,r,n);return L(cu,t,e,a,0)}else return jo},Ne=x(function(e,r,n){return A(e,r,n)}),pu=function(){var e=_r(1),r=_r(1),n=_r(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),d=p(be,i,v,l),m=o(K,.5,n),f=p(be,m,t,a),h=p(be,m,v,a),b=p(be,m,t,l),w=p(be,m,v,l);return No(Lb(g([p(Ne,c,h,f),p(Ne,c,s,h),p(Ne,u,b,w),p(Ne,u,w,d),p(Ne,f,h,w),p(Ne,f,w,b),p(Ne,c,d,s),p(Ne,c,u,d),p(Ne,c,f,b),p(Ne,c,b,u),p(Ne,s,w,h),p(Ne,s,d,w)])))}(),Hn={$:0},Pb=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zb=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(du,u,l,c)),s={o:v,bU:ze(u)},d={o:v,bU:ze(l)},m={o:v,bU:ze(c)};return o(B,s,o(B,d,o(B,m,n)))}),kb=or,Wo=function(e){var r=e;return r.D},Tb=V(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),At=4294967295>>>32-yn,Ut=Ku,Mb=x(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Ut,a,n);if(t.$){var v=t.a;return o(Ut,At&r,v)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Db=function(e){return e>>>5<<5},Bb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,Db(n))>-1?re(o(Ut,At&e,i)):re(p(Mb,a,e,t))}),Yo=function(e){var r=e;return r.ah},tt=$(function(e,r){return o(Bb,e,Yo(r))}),Ab=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Tb,x(function(c,l,u){return A(c,l,u)}),o(tt,a,e),o(tt,t,e),o(tt,i,e))};return o(fl,r,Wo(e))},Ub=x(function(e,r,n){e:for(;;){var a=o(to,Ee,e),t=a.a,i=a.b;if(I(gt(t),Ee)<0)return o(jc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(Ub,e,P,0):Vc},Fb=x(function(e,r,n){return e(r(n))}),Vb=$(function(e,r){return!o(Qc,o(Fb,xs,e),r)}),Eb=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),Rb=function(e){var r=e.a;return r},bu=$(function(e,r){var n=Rb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(Vb,a,r)?{D:r,ah:e}:{D:o(Eb,a,r),ah:e}}),Nb=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=Nb({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return k(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Wi=p(Dn,0,0,0),ot=Ie(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ol,o(ta,e,r),t);if(v.$){var d={o:Wi,bU:ze(r)},m={o:Wi,bU:ze(e)},f=u+1,h=u;return A(o(B,A(n,h,f),o(B,A(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),jb=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,w=e,y=r,_=v,C=a+3,T=we(ot,s,m,f,b,r,we(ot,d,s,h,f,r,we(ot,m,d,b,h,r,t)));e=w,r=y,n=_,a=C,t=T;continue e}else{var j=t,R=j.a,E=j.b;return k(R,Ve(E))}}),Wb=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,w=p(Xn,o(ta,m,s),f,p(Xn,o(ta,s,d),h,p(Xn,o(ta,d,m),b,t))),y=o(B,A(b,h,f),a),_=e,C=v,T=n+3,j=y,R=w;e=_,r=C,n=T,a=j,t=R;continue e}else return A(a,t,n)}),zr=x(function(e,r,n){var a=Ab(n),t=p(mr,zb(r),P,a),i=S(Wb,r,a,0,P,kb),c=i.a,l=i.b,u=i.c,v=S(jb,r,l,a,0,A(c,P,u)),s=v.a,d=v.b,m=Tt(d)?t:ve(t,d);return p(Pb,e,o(bu,Go(m),s),o(Vn,m,s))}),Ft=function(e){return{D:o(ae,function(r){return A(3*r,3*r+1,3*r+2)},o(Kr,0,Fr(e)-1)),ah:Go(Ge(o(ae,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},hu=function(e){switch(e.$){case 0:return Hn;case 1:var a=e.a,r=e.b,n=o(ae,Ln,r);return p(zr,a,Mr,Ft(n));case 2:var a=e.a,r=e.b,n=o(ae,Ln,r);return p(zr,a,Mr,Ft(n));case 3:var a=e.a,t=e.b;return p(zr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bU},t);case 8:return Hn;case 9:return Hn;default:return Hn}},Yi=hu(pu),gu={$:0},z=gu,he=$(function(e,r){return{$:1,a:e,b:r}}),Yb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Gb=1029,Hb=function(e){return{$:5,a:e}},_u=function(e){var r=e;return Hb(r)},Ib=_u(Gb),Ob=1028,Jb=_u(Ob),ke=x(function(e,r,n){return r===1?e?o(B,Ib,n):o(B,Jb,n):n}),wu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return S(te,p(ke,l,a,d),wu,Yb,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Ho={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},xu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return S(te,p(ke,l,a,d),xu,Ho,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),yu=$(function(e,r){return{$:3,a:e,b:r}}),qb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},Su={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Zb=V(function(e,r,n,a){return o(yu,n,ee(function(t,i,c,l,u,v,s,d){return S(te,d,Su,qb,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Io={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Ea=Z$,lr=ge(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,m){return S(te,p(ke,u,t,m),xu,Io,a,{aN:o(Ea,En(r),e),b:l,c,d:s,e:i,f:v})}))}),Qb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bT",sceneProperties:"e"}},Xb=ge(function(e,r,n,a,t){return o(yu,a,ee(function(i,c,l,u,v,s,d,m){return S(te,m,Su,Qb,t,{aN:o(Ea,En(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Lu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},In=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(te,p(ke,l,a,d),Lu,Cu,n,{P:f,be:m.be,bL:m.bL,bM:m.bM,bN:m.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},zu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Kb=Ie(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(te,p(ke,v,i,f),zu,Pu,t,{P:b,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),ku={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},e1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(he,u,ee(function(d,m,f,h,b,w,y,_){var C=y.a,T=y.b;return S(te,p(ke,h,s,_),zu,ku,v,{b5:e,b8:r,b9:i,ca:a,P:T,be:C.be,bL:C.bL,bM:C.bM,bN:C.bN,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Tu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},On=Ie(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(te,p(ke,v,i,f),Lu,Tu,t,{b4:e,P:b,be:h.be,bL:h.bL,bM:h.bM,bN:h.bN,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),r1=function(e){return{$:0,a:e}},Gi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),n1=function(e){return L(ln,un(e),vn(e),$n(e),1)},Oo=L(ln,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Oo)}else{var n=r.a;return k(e,n1(n))}}),Mu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(Gi,k(t,Oo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Gi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,r1(a)}}),a1=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),t1=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),o1=function(e){return o(Be,e,1)},Vt=o(Be,0,0),Ir=$(function(e,r){if(r.$){var a=r.a.C;return k(a,Vt)}else{var n=r.a;return k(e,o1(n))}}),Du=V(function(e,r,n,a){var t=L(t1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Jn,k(u,Oo),o(Ir,u,r),o(Ir,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Jn,o(oa,u,e),k(u,Vt),o(Ir,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Jn,o(oa,u,e),o(Ir,u,r),k(u,Vt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Jn,o(oa,u,e),o(Ir,u,r),o(Ir,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(a1,i,c,l)}}),i1={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},ct=ge(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,m){return S(te,p(ke,u,t,m),wu,i1,a,{b2:En(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Bu={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},c1=V(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(te,p(ke,l,a,d),Bu,Pu,n,{P:f,be:m.be,bL:m.bL,bM:m.bM,bN:m.bN,cr:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),l1=Nt(function(e,r,n,a,t,i,c,l,u){return o(he,c,ee(function(v,s,d,m,f,h,b,w){var y=b.a,_=b.b;return S(te,p(ke,m,u,w),Bu,ku,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:y.be,bL:y.bL,bM:y.bM,bN:y.bN,cv:t,b:d,c:s,aW:e,d:h,cS:n,e:v,a$:0,f})}))}),Pn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),u1=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},v1=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},$1=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},f1=function(e){return p(be,u1(e),v1(e),$1(e))},Y=function(e){var r=ql(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(f1(e)),eS:n/2,eT:a/2,eU:t/2}},Jo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(it,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(it,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(it,l,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Zb,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(ct,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ct,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ct,l,v,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Xb,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Mu,s,R);if(d.$){var h=d.a,b=h.a;h.b;var w=d.b,y=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(c1,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(Kb,b,y,_,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(In,m,Y(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var C=e.b,T=e.c,j=e.d,R=e.e,E=L(Du,C,T,j,R);if(E.$){var Z=E.a,X=Z.a,le=Z.b,fe=E.b,ce=fe.a,pe=fe.b,Me=E.c,Se=Me.a,pr=Me.b,br=E.d,y=br.a,_=br.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Ju(l1,X,le,ce,pe,Se,pr,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return e1(X)(le)(ce)(pe)(Se)(pr)(y)(_)(Y(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,W=E.b,U=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(On,N,W,U,Y(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),lt=function(e){var r=e;return r.fU},ut=function(e){var r=e;return r.fY},vt=function(e){var r=e;return r.c6},s1=function(e){var r=e,n=vt(r.c7),a=ut(r.c7),t=lt(r.c7),i=vt(r.c5),c=ut(r.c5),l=lt(r.c5),u=vt(r.c4),v=ut(r.c4),s=lt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},d1=function(e){var r=Fa(cn(e)),n=He(Gr(e)),a=He(Yr(e)),t=He(Wr(e));return{dp:s1(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Or=$(function(e,r){return{$:5,a:e,b:r}}),Au=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(jl,a,e);return o(Or,i,t);case 1:return o(Or,e,n);case 3:return o(Or,e,n);case 2:return o(Or,e,n);default:return o(Or,e,n)}}),Uu=$(function(e,r){return o(Au,d1(e),r)}),Ra=function(e){return{$:2,a:e}},m1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),p1=K$,b1=X$,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=b1(a),h=f.fU,b=f.fY,w=f.c6,y=f.em,_=p1({em:y,fU:h*s,fY:b*d,c6:w*m});return Pa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Et=$(function(e,r){switch(r.$){case 0:return gu;case 5:var n=r.a,a=r.b;return o(Or,n,o(Et,e,a));case 1:var t=r.a,i=r.b;return o(he,o(m1,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Hi,e,i));default:var c=r.a;return Xl(o(ae,Et(e),c))}}),qo=$(function(e,r){var n=r;return o(Et,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Fu=7683,Vu=7682,h1=p(Fo,{cp:0,cO:0,c3:15},{a9:ye,bm:nn,bu:ye,bv:Fu},{a9:ye,bm:nn,bu:ye,bv:Vu}),g1=p(Fo,{cp:0,cO:0,c3:15},{a9:ye,bm:nn,bu:ye,bv:Vu},{a9:ye,bm:nn,bu:ye,bv:Fu}),Qo=$(function(e,r){return e?o(B,g1,r):o(B,h1,r)}),_1={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},w1=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,v){return S(te,o(Qo,i,v),_1,Zo,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},ya=function(e){var r=w1(e);if(r.$)return z;var n=r.a;return Ra(n)},x1=V(function(e,r,n,a){var t=o(Jo,n,pu),i=function(){var s=k(e,r);return s.a?s.b?Fn(g([t,ya(Yi)])):t:s.b?ya(Yi):z}(),c=So(a),l=c.a,u=c.b,v=c.c;return o(Uu,yo(a),o(qo,A(l,u,v),i))}),y1=$(function(e,r){return L(x1,!0,!0,e,r)}),Eu=$(function(e,r){return{$:0,a:e,b:r}}),S1=function(e){var r=fo(e),n=r.cN,a=r.cd,t=r.b6;return p(Dn,n,a,t)},C1=function(e){return o(Eu,0,Dt(S1(e)))},wn=function(e){var r=e;return Er(r)},L1=$(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fU:Er(r),fY:rn(r)}},P1=$(function(e,r){var n=e.bU,a=e.o;return o(B,{o:Va(a),bU:ze(n)},r)}),z1=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bU),s=vn(l.bU),d=un(l.bU),m=o(aa,e,d),f=o(Te,r,d),h=o(aa,n,s),b=o(Te,a,s),w=o(aa,t,v),y=o(Te,i,v),_=u;e=m,r=f,n=h,a=b,t=w,i=y,c=_;continue e}else return vu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Ru=$(function(e,r){var n=$n(e.bU),a=vn(e.bU),t=un(e.bU);return jt(z1,t,t,a,a,n,n,r)}),k1=function(e){var r=p(kc,P1,P,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Wo(e)),i=o(Ru,n,a);return L(lu,i,e,t,0)}else return jo},Oi=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),Sa=function(e){var r=e;return rn(r)},Rt=function(e){return yr(2*Vr*e)},T1=Mr,Ji=T1({cB:Ae,c4:zo,c5:ko}),Nu=function(){var e=72,r=o(L1,e,Rt(1)),n=_r(1),a=Zr(xo),t=Zr(Ll),i=_r(1),c=o(K,.5,i),l=p(be,Ze,Ze,c),u=o(K,-.5,i),v=p(be,Ze,Ze,u),s=function(f){var h=o(K,f,r),b=Zr(o(Oi,Ji,Ii(h))),w=o(K,wn(h),n),y=o(K,Sa(h),n),_=p(be,w,y,c),C=p(be,w,y,u),T=o(ba,e,f+1),j=o(K,T,r),R=Zr(o(Oi,Ji,Ii(j))),E=o(K,wn(j),n),N=o(K,Sa(j),n),W=p(be,E,N,u),U=p(be,E,N,c);return g([A({o:t,bU:v},{o:t,bU:W},{o:t,bU:C}),A({o:b,bU:C},{o:R,bU:W},{o:R,bU:U}),A({o:b,bU:C},{o:R,bU:U},{o:b,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:U})])},d=o(ae,s,o(Kr,0,e-1)),m=Ft(Ge(d));return No(k1(m))}(),qi=hu(Nu),M1=function(e){var r=Fl(e),n=bo(r),a=n.a,t=n.b;return ir({cB:Vl(e),c4:a,c5:t,c7:r})},D1=V(function(e,r,n,a){var t=M1(Mo(a)),i=o(Jo,n,Nu),c=function(){var d=k(e,r);return d.a?d.b?Fn(g([i,ya(qi)])):i:d.b?ya(qi):z}(),l=Rl(a),u=l,v=El(a),s=v;return o(Uu,t,o(qo,A(u,u,s),c))}),B1=$(function(e,r){return L(D1,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},bn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return rr({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},qn=mu(g([A({cZ:0},{cZ:1},{cZ:2})])),A1=$(function(e,r){var n=$u(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(he,a,ee(function(_,C,T,j,R,E,N,W){return S(te,p(ke,j,0,W),Zi,Ho,qn,{aw:t,b:T,c:C,d:E,e:_,br:bn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(he,a,ee(function(_,C,T,j,R,E,N,W){return S(te,p(ke,j,0,W),Zi,Io,qn,{aN:o(Ea,En(c),i),b:T,c:C,d:E,e:_,br:bn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Mu,l,f);if(u.$)return z;var v=u.a;return o(he,a,ee(function(_,C,T,j,R,E,N,W){var U=N.a,Z=N.b;return S(te,p(ke,j,0,W),Qi,Cu,qn,{P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cq:v,b:T,c:C,d:E,e:_,br:bn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=L(Du,s,d,m,f);if(h.$)return z;var b=h.a,w=h.b,y=h.c;return o(he,a,ee(function(_,C,T,j,R,E,N,W){var U=N.a,Z=N.b;return S(te,p(ke,j,0,W),Qi,Tu,qn,{b4:b,P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cu:y,b:T,c:C,d:E,cR:w,e:_,br:bn(r),f:R})}))}}),U1=function(){var e=g([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=g([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Vn,e,r)}(),F1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},Xi=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return S(te,o(Qo,t,u),F1,Zo,U1,{b:a,c:n,d:c,e:r,bZ:l,br:bn(e),f:i})}))},V1=V(function(e,r,n,a){var t=o(A1,n,a),i=k(e,r);return i.a?i.b?Fn(g([t,Xi(a)])):t:i.b?Xi(a):z}),E1=$(function(e,r){return L(V1,!0,!0,e,r)}),R1=$(function(e,r){var n=Ur(r),a=Ur(e),t=Ar(r),i=Ar(e),c=Br(r),l=Br(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(de,l,c),dS:o(de,i,t),dT:o(de,a,n)}}),N1=function(e){var r=Co(e),n=r.a,a=r.b;return o(R1,n,a)},Ki={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},j1=$(function(e,r){return{$:1,a:e,b:r}}),W1=j1({df:2,$7:0,dV:1}),ec=W1(g([k({dw:0},{dw:1})])),Y1=$(function(e,r){var n=N1(r),a=Y(n),t=Co(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(he,a,ee(function(v,s,d,m,f,h,b,w){return S(te,w,Ki,Ho,ec,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(he,a,ee(function(s,d,m,f,h,b,w,y){return S(te,y,Ki,Io,ec,{aN:o(Ea,En(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return z;default:return z}}),G1=$(function(e,r){return o(Y1,e,r)}),Zn=function(e){return yr(Vr*(e/180))},rc=$(function(e,r){var n=e,a=r;return n/a}),H1=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(wr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),nc=$(function(e,r){return e<1?P:S(H1,0,e,e,r,P)}),I1=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bU:ze(n),L:o(Be,c,l)},r)}),O1=function(e){var r=p(kc,I1,P,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Wo(e)),i=o(Ru,n,a);return L(uu,i,e,t,0)}else return jo},ju=$(function(e,r){var n=e,a=r,t=Er(a);return{fU:t*Er(n),fY:t*rn(n),c6:rn(a)}}),J1=function(){var e=_r(1),r=72,n=o(Kr,0,r-1),a=o(nc,r,o(Pn,Ze,Rt(1))),t=no(r/2),i=o(Kr,0,t-1),c=o(nc,t,o(Pn,Zn(90),Zn(-90))),l=Go(Ge(o(ae,function(s){return o(ae,function(d){return{o:Zr(o(ju,s,d)),bU:p(be,o(K,wn(d)*wn(s),e),o(K,wn(d)*Sa(s),e),o(K,Sa(d),e)),L:k(o(rc,s,Rt(1)),o(rc,o(gn,Zn(90),d),Zn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(ae,function(s){return Ge(o(ae,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([A(b,h,m),A(b,m,f)])},i))},n));return No(O1(o(bu,l,v)))}(),Ca=72,Qn=2*Ca,q1=$(function(e,r){e:for(;;){var n=Qn+1,a=o(ba,Qn,2*e+3),t=o(ba,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Z1=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Q1=$(function(e,r){e:for(;;){var n=p(Z1,0,2*Vr,e/Ca),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),X1=function(){var e=o(Q1,Ca-1,g([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(q1,Ca-1,P);return o(Vn,e,r)}(),K1={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},ac=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return S(te,o(Qo,!0,u),K1,Zo,X1,{aw:p(Dn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},e3=function(e){var r=su(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},r3=$(function(e,r){return o(Au,e3(e),r)}),n3=V(function(e,r,n,a){var t=o(Jo,n,J1),i=function(){var u=k(e,r);return u.a?u.b?Fn(g([t,ac()])):t:u.b?ac():z}(),c=Po(a),l=c;return o(r3,o(wa,Ae,Lo(a)),o(qo,A(l,l,l),i))}),a3=$(function(e,r){return L(n3,!0,!0,e,r)}),t3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),o3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),i3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Eu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(t3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(zl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(o3,n,a,t,i,c)}},c3=i3,Wu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(y1,t,r)]);case 1:var t=e.a,n=e.b;return g([o(E1,t,n)]);case 3:var t=e.a,a=e.b;return g([o(a3,c3(t),a)]);case 2:var t=e.a,i=e.b;return g([o(B1,t,i)]);case 4:var c=e.a,l=e.b;return g([o(G1,C1(c),l)]);default:var u=e.a;return o(Do,Wu,u)}},l3=function(e){return o(Do,Wu,e)},u3=$(function(e,r){return mb({aI:z0(e.es),ev:e.ev,aJ:k0(.5),cb:e.cb,aK:k(ki(Qe(e.cT.fS)),ki(Qe(e.cT.eW))),aP:l3(r),fB:!0,fJ:o(ju,yr(e.fI),yr(e.fK)),ei:To})}),v3=$(function(e,r){return o(u3,{es:p(Ym,46,46,46),ev:Wm({dj:{fU:0,fY:4,c6:8},aR:{fU:0,fY:0,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Pi(135),fK:-Pi(45)},o(P0,e,r))}),$3=p(Sm,v3,Lm,Cm);const f3={Main:{init:$3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({a4:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},s3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-F.clock;b<.009||(F.dt=b,F.clock=h,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},d3=()=>{$t("pointerdown"),$t("wheel"),$t("keydown")},$t=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},m3=f3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});d3();s3(m3);
