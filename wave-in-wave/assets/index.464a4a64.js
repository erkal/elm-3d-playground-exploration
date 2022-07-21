const Wu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Wu();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ge(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ka(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ht(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Hu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Gu=[];function Iu(e){return e.length}var Ju=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ou=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function on(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=dt(e,r,0,a);t&&(n=a.pop());t=dt(n.a,n.b,0,a));return t}function dt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&on(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=si(e),r=si(r));for(var t in e)if(!dt(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Xu=$(function(e,r){var n=I(e,r);return n<0?Tc:n?Ef:Mc}),Mn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var Qu=$(tr);function g(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return g(i)});Ge(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(Ta(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return g(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Mc?0:t===Tc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?on(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan,cv=Math.atan;$(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,Qo=Math.log,dv=isNaN;function mv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var pv=$(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function hv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),wv=$(function(e,r){return r.split(e)}),yv=$(function(e,r){return r.join(e)}),xv=y(function(e,r,n){return n.slice(e,r)});function Sv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function tc(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Mv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Tv(e){return Ta(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Av(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bv(e){return{$:0,a:e}}function Gt(e){return{$:2,b:e}}var Fv=Gt(function(e){return typeof e=="boolean"?$e(e):Xe("a BOOL",e)}),Vv=Gt(function(e){return typeof e=="number"?$e(e):Xe("a FLOAT",e)}),Uv=Gt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Xe("a STRING",e)});function Ev(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Yv=$(function(e,r){return{$:10,b:r,h:e}}),jv=$(function(e,r){return xr(e,[r])}),Nv=y(function(e,r,n){return xr(e,[r,n])});U(function(e,r,n,a){return xr(e,[r,n,a])});he(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Ge(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});ka(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return we(o(ao,"This is not valid JSON! "+a.message,r))}});var oc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Xe("null",r);case 3:return Nn(r)?ei(e.b,r,g):Xe("a LIST",r);case 4:return Nn(r)?ei(e.b,r,Wv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Oe(v)?v:we(o(di,n,v.a));case 7:var a=e.e;if(!Nn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Oe(v)?v:we(o(Dc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Oe(v))return we(o(di,i,v.a));t=tr(z(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Oe(v))return v;c=c(v.a)}return $e(c);case 10:var v=je(e.b,r);return Oe(v)?je(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Oe(v))return v;s=tr(v.a,s)}return we(Rf(Fe(s)));case 1:return we(o(ao,e.a,r));case 0:return $e(e.a)}}function ei(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Oe(c))return we(o(Dc,i,c.a));t[i]=c.a}return $e(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Wv(e){return o(ns,e.length,function(r){return e[r]})}function Xe(e,r){return we(o(ao,"Expecting "+e,r))}function Zr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Zr(e.b,r.b);case 6:return e.d===r.d&&Zr(e.b,r.b);case 7:return e.e===r.e&&Zr(e.b,r.b);case 9:return e.f===r.f&&ri(e.g,r.g);case 10:return e.h===r.h&&Zr(e.b,r.b);case 11:return ri(e.g,r.g)}}function ri(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Zr(e[a],r[a]))return!1;return!0}var Hv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Gv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var mt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Jv=0;function It(e){var r={$:0,e:Jv++,f:e,g:null,h:[]};return Jt(r),r}function cc(e){return dr(function(r){r(Rr(It(e)))})}function lc(e,r){e.h.push(r),Jt(e)}var Ov=$(function(e,r){return dr(function(n){lc(e,r),n(Rr(Mn))})}),Ga=!1,ni=[];function Jt(e){if(ni.push(e),!Ga){for(Ga=!0;e=ni.shift();)qv(e);Ga=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Jt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Ot(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function Ot(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Oe(c)||on(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,h){var b=o(a,f,v);s(v=b.a,h),ti(l,b.b,t(v))}return ti(l,u.b,t(v)),d?{ports:d}:{}}var nr={};function Zv(e,r){var n;for(var a in nr){var t=nr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Xv(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Xv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mt,l,Iv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=It(o(mt,l,e.b))}var Qv=$(function(e,r){return dr(function(n){e.g(r),n(Rr(Mn))})});$(function(e,r){return o(Ov,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ai=[],Ia=!1;function ti(e,r,n){if(ai.push({p:e,q:r,r:n}),!Ia){Ia=!0;for(var a;a=ai.shift();)r$(a.p,a.q,a.r);Ia=!1}}function r$(e,r,n){var a={};la(!0,r,a,null),la(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function la(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)la(e,c.a,n,a);return;case 3:la(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?nr[r].e:nr[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function t$(e){nr[e]&&on(3)}$(function(e,r){return r});function o$(e,r){return t$(e),nr[e]={f:i$,u:r,a:c$},uc(e)}var i$=$(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=P,a=nr[e].u,t=Rr(null);nr[e].b=t,nr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Oe(l)||on(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ua,ur=typeof document!="undefined"?document:{};function qt(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function pt(e){return{$:0,a:e}}var vc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Zt(n),e:t,f:e,b:i}})}),Yr=vc(void 0),l$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Zt(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:Zt(e),g:r,h:n,i:a}}var $$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});y(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ge(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ka(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return Ht(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var $c=$(function(e,r){return{$:"a0",n:e,o:r}}),f$=$(function(e,r){return{$:"a1",n:e,o:r}}),fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),s$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o($c,r.n,p$(e,r.o)):r});function p$(e,r){var n=lo(r);return{$:r.$,a:n?p(as,n<3?b$:h$,De(e),r.a):o(sa,e,r.a)}}var b$=$(function(e,r){return z(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function Zt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?oi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?oi(c,t,i):c[t]=i}return r}function oi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return bt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ua&&e.c=="a"&&c.addEventListener("click",ua(c)),bt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)qt(c,gr(n===1?l[u]:l[u].b,r));return c}function bt(e,r,n){for(var a in n){var t=n[a];a==="a1"?g$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function g$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,Kt&&{passive:lo(i)<2}),a[t]=c}}var Kt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Kt=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Oe(i)){for(var c=lo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Zr(e.a,r.a)}function sc(e,r){var n=[];return qe(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function qe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];qe(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!C$(d,m):d!==m)&&ge(n,2,a,m),qe(h,b,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:ii(e,r,n,a,L$);return;case 2:ii(e,r,n,a,P$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=Xt(e.d,r.d);w&&ge(n,4,a,w);var x=r.i(e.g,r.g);x&&ge(n,5,a,x);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ii(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=Xt(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function Xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];qe(s,i[v],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],b=u[m],w=h.a,x=b.a,_=h.b,C=b.b,M=void 0,j=void 0;if(w===x){f++,qe(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var Y=R.a,N=R.b;j=x===Y}if(E){var F=E.a,Z=E.b;M=w===F}if(M&&j){f++,qe(_,Z,t,f),sn(i,t,w,C,m,c),f+=_.b||0,f++,dn(i,t,w,N,f),f+=N.b||0,d+=2,m+=2;continue}if(M){f++,sn(i,t,x,C,m,c),qe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(j){f++,dn(i,t,w,_,f),f+=_.b||0,f++,qe(N,C,t,f),f+=N.b||0,d+=2,m+=1;continue}if(R&&Y===F){f++,dn(i,t,w,_,f),sn(i,t,x,C,m,c),f+=_.b||0,f++,qe(N,Z,t,f),f+=N.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;dn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];sn(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&ge(n,8,a,{w:t,x:c,y:X})}var dc="_elmW6BL";function sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];qe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}sn(e,r,n+dc,a,t,i)}function dn(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];qe(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}dn(e,r,n+dc,a,t)}function mc(e,r,n,a){mn(e,r,n,0,0,r.b,a)}function mn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&mn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&mn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return mn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,w=0;w<h.length;w++){t++;var x=m===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=mn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),va(e,n))}function va(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return bt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return va(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=va(e,i.w),e;case 8:return M$(e,r);case 5:return r.s(e);default:on(10)}}function k$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function M$(e,r){var n=r.s,a=T$(n.y,r);e=va(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&qt(e,a),e}function T$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;qt(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function Qt(e){if(e.nodeType===3)return pt(e.textContent);if(e.nodeType!==1)return pt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Qt(v[a]),u);return p(Yr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=U(function(e,r,n,a){return Ot(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=Qt(l);return bc(i,function(v){var s=c(v),d=sc(u,s);l=pc(l,u,d,t),u=s})})});U(function(e,r,n,a){return Ot(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=ur.title,v=ur.body,s=Qt(v);return bc(i,function(d){ua=c;var m=l(d),f=Yr("body")(P)(m.er),h=sc(s,f);v=pc(v,s,h,t),s=f,ua=0,u!==m.fJ&&(ur.title=u=m.fJ)})})});var $a=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:($a(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&$a(a),n=2)}}$(function(e,r){return o($o,uo,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o($o,uo,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o($o,uo,dr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:B$;y(function(e,r,n){return cc(dr(function(a){function t(i){It(n(i))}return e.addEventListener(r,t,Kt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Oe(n)?re(n.a):q});function hc(e,r){return dr(function(n){$a(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Gv(os(e)))})})}function V$(e){return dr(function(r){$a(function(){r(Rr(e()))})})}$(function(e,r){return hc(r,function(n){return n[e](),Mn})});$(function(e,r){return V$(function(){return F$.scroll(e,r),Mn})});y(function(e,r,n){return hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var U$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var E$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(sl,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(sl,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var ci=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function eo(e){for(var r=0;e.b;e=e.b)r++;return r}var R$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Y$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),j$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),N$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),W$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),H$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),G$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),J$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),O$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),q$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Z$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},K$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},X$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},gc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},_c=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Q$=function(e){e.gl.disable(e.gl.CULL_FACE)},ef=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},rf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},nf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},li=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],af=[Z$,K$,X$,gc,_c,Q$,ef,rf,nf];function ui(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function tf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function wc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function of(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,w,x){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<h;_++)f[b++]=h===1?w[C][x]:w[C][x][_]})}var u=wc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(eo(n.b)*s);Sn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function cf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=lf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*eo(r.b),indexBuffer:null,buffers:{}}}function lf(e,r){var n=new Uint32Array(eo(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function vi(e,r){return e+"#"+r}var yc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),gc(n),_c(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=vi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ci++,v||(v=ui(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ci++,s||(s=ui(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=tf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=uf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=vi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),vf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=of(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=wc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Sn(v0(n),i.a),u=0;u<li.length;u++){var M=n[li[u]];M.toggle!==n.toggle&&M.enabled&&(af[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Sn(t,e.g),r});function uf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,w=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function vf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var $f=y(function(e,r,n){return v$(r,{g:n,f:{},h:e},hf,gf)}),ff=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),sf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),mf=$(function(e,r){e.contextAttributes.antialias=!0}),pf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),bf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function hf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(u0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),R$(function(){return o(yc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function gf(e,r){return r.f=e.f,yc(r)}var _f=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ro=new Float64Array(3),$i=new Float64Array(3),fi=new Float64Array(3),yf=y(function(e,r,n){return new Float64Array([e,r,n])}),xf=function(e){return e[0]},Sf=function(e){return e[1]},Cf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Lf=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(xc);function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),fa(xc(e,r,n),n)}$(Sc);function Cc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function fa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Cc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Pf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(pn);function ht(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(ht);$(function(e,r){var n,a=ro,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(pn(r,a)+e[14])/n,t});var zf=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var kf=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},Mf=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Tf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Tf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Df=new Float64Array(16),Af=new Float64Array(16),Bf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Ff=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ge(Lc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Lc(c,l,i,t,n,a)});function Pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ge(Pc);U(function(e,r,n,a){return Pc(e,r,n,a,-1,1)});function zc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],M=r[1],j=r[2],R=r[3],E=r[4],Y=r[5],N=r[6],F=r[7],Z=r[8],X=r[9],ce=r[10],fe=r[11],ie=r[12],me=r[13],Me=r[14],Ce=r[15];return n[0]=a*C+l*M+d*j+b*R,n[1]=t*C+u*M+m*j+w*R,n[2]=i*C+v*M+f*j+x*R,n[3]=c*C+s*M+h*j+_*R,n[4]=a*E+l*Y+d*N+b*F,n[5]=t*E+u*Y+m*N+w*F,n[6]=i*E+v*Y+f*N+x*F,n[7]=c*E+s*Y+h*N+_*F,n[8]=a*Z+l*X+d*ce+b*fe,n[9]=t*Z+u*X+m*ce+w*fe,n[10]=i*Z+v*X+f*ce+x*fe,n[11]=c*Z+s*X+h*ce+_*fe,n[12]=a*ie+l*me+d*Me+b*Ce,n[13]=t*ie+u*me+m*Me+w*Ce,n[14]=i*ie+v*me+f*Me+x*Ce,n[15]=c*ie+s*me+h*Me+_*Ce,n}$(zc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],M=r[6],j=r[8],R=r[9],E=r[10],Y=r[12],N=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*M,n[5]=t*_+l*C+s*M,n[6]=i*_+u*C+d*M,n[7]=0,n[8]=a*j+c*R+v*E,n[9]=t*j+l*R+s*E,n[10]=i*j+u*R+d*E,n[11]=0,n[12]=a*Y+c*N+v*F+m,n[13]=t*Y+l*N+s*F+f,n[14]=i*Y+u*N+d*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=fa(r,ro);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Cc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=h+f,C=b-m,M=h-f,j=c*c*v+u,R=w+d,E=b+m,Y=w-d,N=l*l*v+u,F=n[0],Z=n[1],X=n[2],ce=n[3],fe=n[4],ie=n[5],me=n[6],Me=n[7],Ce=n[8],pr=n[9],br=n[10],Ha=n[11],Ru=n[12],Yu=n[13],ju=n[14],Nu=n[15];return a[0]=F*x+fe*_+Ce*C,a[1]=Z*x+ie*_+pr*C,a[2]=X*x+me*_+br*C,a[3]=ce*x+Me*_+Ha*C,a[4]=F*M+fe*j+Ce*R,a[5]=Z*M+ie*j+pr*R,a[6]=X*M+me*j+br*R,a[7]=ce*M+Me*j+Ha*R,a[8]=F*E+fe*Y+Ce*N,a[9]=Z*E+ie*Y+pr*N,a[10]=X*E+me*Y+br*N,a[11]=ce*E+Me*Y+Ha*N,a[12]=Ru,a[13]=Yu,a[14]=ju,a[15]=Nu,a});function Vf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Vf);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Uf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Uf);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Sc(e,r,ro),t=fa(ht(n,a,$i),$i),i=fa(ht(a,t,fi),fi),c=Df,l=Af;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,zc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=Qu,Wn=Zu,kc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),no=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(no,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),si=function(e){return p(no,y(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Mc=1,Ef=2,Tc=0,we=function(e){return{$:1,a:e}},ao=$(function(e,r){return{$:3,a:e,b:r}}),di=$(function(e,r){return{$:0,a:e,b:r}}),Dc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Yf=Cv,jf=Hv,Be=tc,zr=$(function(e,r){return o(yv,e,Ta(r))}),to=$(function(e,r){return g(o(wv,e,r))}),Ac=function(e){return o(zr,`
    `,o(to,`
`,e))},Tn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Vr=function(e){return p(Tn,$(function(r,n){return n+1}),0,e)},Nf=ev,Wf=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Ur=$(function(e,r){return p(Wf,e,r,P)}),Bc=$(function(e,r){return p(Nf,e,o(Ur,0,Vr(r)-1),r)}),ar=Dv,Fc=function(e){var r=ar(e);return 97<=r&&r<=122},Vc=function(e){var r=ar(e);return r<=90&&65<=r},Hf=function(e){return Fc(e)||Vc(e)},Gf=function(e){var r=ar(e);return r<=57&&48<=r},If=function(e){return Fc(e)||Vc(e)||Gf(e)},Fe=function(e){return p(Tn,A,P,e)},cn=bv,Jf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Ac(Of(r))))}),Of=function(e){return o(qf,e,P)},qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=cn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Hf(x)&&o(Yf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",Fe(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Be(Vr(s))+" ways:"));return o(zr,`

`,o(A,h,o(Bc,Jf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(zr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return h+(Ac(o(jf,4,f))+(`

`+m))}}),Ve=32,gt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_t=Gu,oo=vv,io=$(function(e,r){return Qo(r)/Qo(e)}),Zf=lv,Cn=oo(o(io,2,Ve)),Uc=L(gt,0,Cn,_t,_t),Ec=Ju,Rc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Yc=$v,wt=Iu,Se=$(function(e,r){return I(e,r)>0?e:r}),Kf=function(e){return{$:0,a:e}},co=Ou,Xf=$(function(e,r){e:for(;;){var n=o(co,Ve,e),a=n.a,t=n.b,i=o(A,Kf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),Qf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=oo(r/Ve);if(n===1)return o(co,Ve,e).a;var a=o(Xf,e,P),t=n;e=a,r=t;continue e}}),jc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Yc(o(io,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(es,t,r.l);return L(gt,wt(r.p)+n,o(Se,5,a*Cn),i,r.p)}else return L(gt,wt(r.p),Cn,_t,r.p)}),rs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(jc,!1,{z:a,l:n/Ve|0,p:t});var i=Rc(p(Ec,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Uc;var n=e%Ve,a=p(Ec,n,e-n,r),t=e-n-Ve;return S(rs,r,t,e,P,a)}),Oe=function(e){return!e.$},D=Yv,K=Fv,T=Rv,se=Vv,sa=jv,as=Nv,De=Bv,lo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=Yr("div"),ts=function(e){return{$:2,a:e}},Nc=$(function(e,r){return e}),Wc=$(function(e,r){return{bA:r.bA,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Mr=function(e){return e},os=Mr,mi=Ge(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),is=Lv,kr=hv,Kr=xv,Dn=$(function(e,r){return e<1?r:p(Kr,e,kr(r),r)}),Da=zv,Aa=function(e){return e===""},Ba=$(function(e,r){return e<1?"":p(Kr,0,e,r)}),Hc=kv,pi=he(function(e,r,n,a,t){if(Aa(t)||o(is,"@",t))return q;var i=o(Da,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Hc(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(mi,e,o(Ba,c,t),u,r,n,a))}else return re(_e(mi,e,t,q,r,n,a))}),bi=U(function(e,r,n,a){if(Aa(a))return q;var t=o(Da,"/",a);if(t.b){var i=t.a;return S(pi,e,o(Dn,i,a),r,n,o(Ba,i,a))}else return S(pi,e,"/",r,n,a)}),hi=y(function(e,r,n){if(Aa(n))return q;var a=o(Da,"?",n);if(a.b){var t=a.a;return L(bi,e,re(o(Dn,t+1,n)),r,o(Ba,t,n))}else return L(bi,e,q,r,n)});$(function(e,r){if(Aa(r))return q;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(hi,e,re(o(Dn,a+1,r)),o(Ba,a,r))}else return p(hi,e,q,r)});var cs=Pv,uo=function(e){},An=Rr,ls=An(0),Gc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Tn,e,r,Fe(d)):L(Gc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=y(function(e,r,n){return L(Gc,e,r,0,n)}),ee=$(function(e,r){return p(mr,$(function(n,a){return o(A,e(n),a)}),P,r)}),da=mt,vo=$(function(e,r){return o(da,function(n){return An(e(n))},r)}),us=y(function(e,r,n){return o(da,function(a){return o(da,function(t){return An(o(e,a,t))},n)},r)}),vs=function(e){return p(mr,us(A),An(P),e)},$s=Qv,fs=$(function(e,r){var n=r;return cc(o(da,$s(e),n))}),ss=y(function(e,r,n){return o(vo,function(a){return 0},vs(o(ee,fs(e),r)))}),ds=y(function(e,r,n){return An(0)}),ms=$(function(e,r){var n=r;return o(vo,e,n)});nr.Task=Kv(ls,ss,ds,ms);var ps=uc("Task"),$o=$(function(e,r){return ps(o(vo,e,r))}),bs=A$,hs=mv,ma={$:1},Ic=function(e){return{$:2,a:e}},Fa={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),ln=function(e){var r=e.b.B;return r.a},gs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Jc=function(e){var r=e.b;return o(Ne,Fa,r)},or=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?Jc(n):n;case 2:var i=a.a.cR;return(I(i+r.eH,ln(n).bA)>0?o(te,gs,or(o(Ne,ma,t))):Mr)(o(Ne,Ic({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Wc,l.ey,Qe(r,{bA:l.bA+r.eH})),s=o(e,v,u);return o(Ne,Fa,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Oc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=$(function(e,r){return Fe(p(ws,e,r,P))}),qc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,w=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(ys,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return g([_])}}),xs=$(function(e,r){return p(qc,0,e,r)}),Ss=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(g([a]),t)),c=o(xs,e,i),l=o(Oc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,ma,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(Ne,ma,{B:d,ab:P,T:m})}else return r}}),Cs=function(e){var r=e.b;return o(Ne,ma,r)},Ls=function(e){var r=e.b;return o(Ne,Ic({cR:ln(e).bA}),r)},Ps=$(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return Jc(r);case 3:return Ls(r);default:var n=e.a;return o(Ss,n,r)}}),Zc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),zs=$(function(e,r){return Qe(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ms=function(e){return{$:2,a:e}},Kc=$(function(e,r){return{$:0,a:e,b:r}}),Xc=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},fo=Mv,Ts=y(function(e,r,n){return o(or,0/0,fo(o(e,r,n)))}),Qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ds=_v,el=function(e){return p(Ds,A,P,e)},As=$(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},el(r));return ve(e&&n?"-":"",r)}),oe=tc,yt=pv,rl=Av,nl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=cn(n);if(a.$===1)return"01";var t=a.a;return o(yt,"0",nl(t))}else{var i=ar(r);return i>=48&&i<57?o(yt,rl(i+1),n):"0"}},xt=uv,Bs=dv,Va=function(e){return o(yt,e,"")},al=y(function(e,r,n){return e<=0?n:p(al,e>>1,ve(r,r),e&1?ve(n,r):n)}),Ln=$(function(e,r){return p(al,e,r,"")}),St=y(function(e,r,n){return ve(n,o(Ln,e-kr(n),Va(r)))}),Ct=gv,tl=function(e){var r=o(to,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Fs=function(e){var r=o(to,"e",oe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(or,0,Hc(o(cs,"+",t)?o(Dn,1,t):t)),c=tl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(or,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Zc(Va),cn(ve(o(Ln,J(i),"0"),v))))):p(St,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Vs=y(function(e,r,n){if(xt(n)||Bs(n))return oe(n);var a=n<0,t=tl(Fs(J(n))),i=t.a,c=t.b,l=kr(i)+r,u=ve(o(Ln,-l+1,"0"),p(St,l,"0",ve(i,c))),v=kr(u),s=o(Se,1,l),d=o(e,a,p(Kr,s,v,u)),m=p(Kr,0,s,u),f=d?Ct(o(or,"1",o(ye,nl,cn(Ct(m))))):m,h=kr(f),b=f==="0"?f:r<=0?ve(f,o(Ln,J(r),"0")):I(r,kr(c))<0?p(Kr,0,h-r,f)+("."+p(Kr,h-r,h,f)):ve(i+".",p(St,r,"0",c));return o(As,a,b)}),ol=Vs($(function(e,r){var n=cn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ar(t))})),Us=Ts(ol),Es=y(function(e,r,n){var a=o(io,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Us,t,n)}),il=Xu,Ua=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(il,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},rn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(H,0,r,n,S(H,1,v,s,d,m),S(H,1,i,c,l,u))}else return S(H,e,i,c,S(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(H,0,v,s,S(H,1,h,b,w,x),S(H,1,r,n,m,t))}else return S(H,e,r,n,a,t)}),Lt=y(function(e,r,n){if(n.$===-2)return S(H,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(il,e,t);switch(u){case 0:return S(rn,a,t,i,p(Lt,e,r,c),l);case 1:return S(H,a,t,r,c,l);default:return S(rn,a,t,i,c,p(Lt,e,r,l))}}),gn=y(function(e,r,n){var a=p(Lt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(H,1,t,i,c,l)}else{var u=a;return u}}),Rs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,b=m.d,w=m.e,x=v.e;return S(H,0,f,h,S(H,1,n,a,S(H,0,i,c,l,u),b),S(H,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(H,1,n,a,S(H,0,i,c,l,u),S(H,0,s,d,m,x))}else return e},gi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,w=f.d,x=f.e;return S(H,0,i,c,S(H,1,u,v,s,d),S(H,1,n,a,m,S(H,0,h,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,M=e.e;M.a;var h=M.b,b=M.c,w=M.d,x=M.e;return S(H,1,n,a,S(H,0,i,c,C,m),S(H,0,h,b,w,x))}else return e},Ys=ka(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(H,n,l,u,v,S(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,gi(r)}else break e;else return c.a,c.d,gi(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(H,r,n,a,ea(t),l);var u=cl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(rn,v,s,d,ea(m),f)}else return ir}else return S(H,r,n,a,ea(t),l)}else return ir},_n=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(H,n,a,t,o(_n,e,i),c);var u=cl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(rn,v,s,d,o(_n,e,m),f)}else return ir}else return S(H,n,a,t,o(_n,e,i),c);else return o(js,e,Ht(Ys,e,r,n,a,t,i,c))}),js=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=Rs(c);if(l.$===-1){var u=l.b,v=l.c;return S(rn,n,u,v,i,ea(c))}else return ir}else return S(rn,n,a,t,i,o(_n,e,c))}else return ir}),Ns=$(function(e,r){var n=o(_n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(Ua,e,n));if(a.$)return o(Ns,e,n);var t=a.a;return p(gn,e,t,n)}),Ws=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Xc,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Kc,z(i,c),p(Es,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,ye(function(a){return a.$===2?Ms(n):a}))}},Hs=function(e){return zs(Ws(e))},Gs=$(function(e,r){return o(ee,Hs(e),r)}),Is=$(function(e,r){return Qe(r,{ey:o(Gs,e,r.ey)})}),Js=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Qe(a,{B:o(Zc,Is(e),a.B)}))}),Os=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),qs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Qe(t,{B:o(Os,o(e,i.a,r),i)}))}),Zs=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Qe(a,{aL:!a.aL});case 2:var t=n.a;return Qe(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Qe(a,{G:o(Js,i,a.G)});case 4:var c=n.a;return Qe(a,{G:p(qs,r,c,a.G)});default:var l=n.a;return Qe(a,{G:o(Ps,l,a.G)})}}),Ks=$(function(e,r){return o(Ne,Fa,{B:z(e,r(e)),ab:P,T:P})}),Xs=e$,_i=Xs(P),pa=Ev,Pn=Uv,Qs=o$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({bA:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",se))},o(T,"devicePixelRatio",se))},o(T,"dt",se))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",K))},o(T,"control",K))},o(T,"down",K))},o(T,"downs",pa(Pn)))},o(T,"left",K))},o(T,"pressedKeys",pa(Pn)))},o(T,"right",K))},o(T,"shift",K))},o(T,"up",K))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",K))},o(T,"isDown",K))},o(T,"move",K))},o(T,"rightDown",K))},o(T,"rightUp",K))},o(T,"up",K))},o(T,"x",se))},o(T,"y",se))))},o(T,"screen",o(D,function(r){return o(D,function(n){return De({eV:n,fS:r})},o(T,"height",se))},o(T,"width",se))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return De({eC:r,eD:e})},o(T,"deltaX",se))},o(T,"deltaY",se))))),ed=function(e){return{$:4,a:e}},rd={$:0},nd=ic,Ie=$(function(e,r){return o(fc,e,nd(r))}),G=Ie("className"),ad=function(e){var r=e.b.B;return r.b},ba=Ie("id"),td=$$,ha=td,od=f$,ne=od,id={$:1},cd=function(e){return{$:3,a:e}},ld=function(e){return{$:5,a:e}},wi=Yr("a"),so=Yr("button"),yi=function(e){return o(Ie,"href",m$(e))},ud=Cr("clip-rule"),Le=Cr("d"),vd=Cr("fill"),ll=vc("http://www.w3.org/2000/svg"),$d=ll("svg"),fd=Cr("viewBox"),sd=o(s$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=$d(g([fd("0 0 24 24"),vd("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),sd("http://www.w3.org/2000/svg")])),dd=Cr("fill-rule"),Pe=ll("path"),Tr={eB:Ee(g([o(Pe,g([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eP:Ee(g([o(Pe,g([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eU:Ee(g([o(Pe,g([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fc:Ee(g([o(Pe,g([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Pe,g([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fd:Ee(g([o(Pe,g([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Pe,g([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fn:Ee(g([o(Pe,g([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fo:Ee(g([o(Pe,g([Le("M7 5V19L18 12L7 5Z")]),P)])),fp:Ee(g([o(Pe,g([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fq:Ee(g([o(Pe,g([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fL:Ee(g([o(Pe,g([dd("evenodd"),ud("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fM:Ee(g([o(Pe,g([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(g([o(Pe,g([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},md=function(e){return{$:0,a:e}},ul=$c,vl=$(function(e,r){return o(ul,e,md(r))}),mo=function(e){return o(vl,"click",De(e))},xi=Ie("target"),pd=Ie("title"),Pt=$(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(H,n,a,o(e,a,t),o(Pt,e,i),o(Pt,e,c))}),bd=pt,fr=bd,hd=function(e){return p(no,y(function(r,n,a){return o(A,n,a)}),P,e)},gd=$(function(e,r){return{$:3,a:e,b:r}}),_d=$(function(e,r){return{$:2,a:e,b:r}}),wd=$(function(e,r){return{$:0,a:e,b:r}}),yd=$(function(e,r){return{$:1,a:e,b:r}}),un=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xd=L(un,0/255,0/255,0/255,1),Sd=ic,$l=$(function(e,r){return o(fc,e,Sd(r))}),Cd=$l("checked"),Ze=fv,Ld=y(function(e,r,n){return ve(o(Ln,e-kr(n),Va(r)),n)}),ga=nv,fl=function(e){var r=function(n){return n<10?Be(n):Va(rl(87+n))};return e<16?r(e):ve(fl(e/16|0),r(o(ga,16,e)))},Pd=o(te,fl,o(Ld,2,"0")),po=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b1:a,b7:n,cG:r}},zd=function(e){var r=po(e),n=r.cG,a=r.b7,t=r.b1;return o(zr,"",o(A,"#",o(ee,o(te,Ze,Pd),g([n*255,a*255,t*255]))))},zt=Ie("htmlFor"),kt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),_a=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),kd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ea=$(function(e,r){return p(mr,kd(e),P,r)}),sl=U(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),Md=E$,Td=Tv,Dd=$(function(e,r){if(r.$)return we(e);var n=r.a;return $e(n)}),Ad=U$,Bd=function(e){return o(Ad,{et:!1,fe:!1},e)},Ra=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Fd=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return $e(e(n))}}),Vd=function(e){return{$:2,a:e}},Ud=function(e){return{$:0,a:e}},Ed=function(e){return{$:1,a:e}},Ja=$(function(e,r){return ar(r)-ar(e)}),Oa=y(function(e,r,n){var a=ar(n);return I(ar(e),a)<1&&I(a,ar(r))<1}),Rd=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):we(Ed(r))},a=p(Oa,"0","9",r)?$e(o(Ja,"0",r)):p(Oa,"a","z",r)?$e(10+o(Ja,"a",r)):p(Oa,"A","Z",r)?$e(10+o(Ja,"A",r)):we(Ud(r));return o(_a,n,a)}),dl=$(function(e,r){var n=cn(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(_a,function(c){return o(_a,function(l){return $e(c+l*e)},o(dl,e,i))},o(Rd,e,t))}),Yd=$(function(e,r){return 2<=e&&e<=36?o(dl,e,Ct(r)):we(Vd(e))}),jd=Yd(16),Nd=y(function(e,r,n){return L(un,e,r,n,1)}),Wd=U(function(e,r,n,a){return L(un,e,r,n,a)}),vn=rv,Hd=$(function(e,r){var n=o(vn,10,e);return Ze(r*n)/n}),Gd=Sv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=el(n);if(a.b&&!a.b.b){var t=a.a;return Td(g([t,t]))}else return n};return o(te,Gd,o(te,function(n){return o(ye,function(a){return p(Md,1,a,n)},Bd(e))},o(te,kt(Ra),o(te,ye(function(n){return n.fE}),o(te,ye(Ea(Mr)),o(te,Dd("Parsing hex regex failed"),_a(function(n){var a=o(ee,o(te,r,o(te,jd,Fd(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(Wd,t/255,c/255,u/255,o(Hd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(Nd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),wa=Yr("input"),Mt=Yr("label"),Tt=Ie("name"),ml=$(function(e,r){return p(mr,T,r,e)}),Jd=o(ml,g(["target","checked"]),K),Od=function(e){return o(vl,"change",o(sa,e,Jd))},qd=function(e){return z(e,!0)},Zd=function(e){return{$:1,a:e}},Kd=$(function(e,r){return o(ul,e,Zd(r))}),Xd=o(ml,g(["target","value"]),Pn),bo=function(e){return o(Kd,"input",o(sa,qd,o(sa,e,Xd)))},pl=Ie("max"),bl=Ie("min"),hl=function(e){return o(Ie,"step",e)},ya=Ie("type"),ho=Ie("value"),Si=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(O,P,g([o(Mt,g([zt(r)]),g([o(O,g([G("relative w-full")]),g([o(O,g([G("inline-block")]),g([fr(r)])),o(O,g([G("inline-block float-right")]),g([fr(oe(n))]))]))])),o(wa,g([ya("range"),o(ne,"width","100%"),ba(r),Tt(r),bl(oe(a)),pl(oe(t)),ho(oe(n)),hl(oe(i)),bo(o(te,fo,o(te,or(42),c)))]),P)]))},Qd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),em=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,g([G("h-12 py-4")]),g([o(Mt,g([G("block"),zt(e)]),g([o(wa,g([G("relative bottom-[1px] align-middle mr-2"),ya("checkbox"),ba(e),Tt(e),Od(gd(e)),Cd(c)]),P),fr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Si({b9:e,cl:i,cp:t,ct:wd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Si({b9:e,cl:i,cp:t,ct:o(te,Ze,yd(e)),cP:1,cW:c});default:var c=r.a;return o(O,P,g([o(O,g([o(ne,"margin-bottom","6px")]),g([o(Mt,g([zt(e)]),g([fr(e)]))])),o(wa,g([ya("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),ba(e),Tt(e),bo(function(l){return o(_d,e,o(Qd,xd,Id(l)))}),ho(zd(c))]),P)]))}}),rm=function(e){return o(O,g([G("p-4 border-y-[0.5px] border-white20")]),g([o(O,g([G("text-lg pb-2")]),g([fr(e.ff)])),o(O,g([G("pl-2 pr-2")]),hd(o(Pt,em,e.av)))]))},nm=function(e){return o(O,g([G("text-xs text-white60")]),o(ee,rm,e))},am=function(e){return o(O,g([G("absolute left-[104px] bottom-2 text-sm text-white40")]),g([fr("clock: "+o(ol,3,ln(e).bA))]))},tm=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Ze(60/(ln(e).bA-n))},o(ye,o(te,Qf,function(n){return n.bA}),Ra(o(Oc,59,r))))},om=function(e){return o(O,g([G("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=tm(e);if(r.$===1)return g([fr("... Fps")]);var n=r.a;return g([fr(Be(n)+" Fps")])}())},im=function(e){return{$:0,a:e}},cm=function(e){var r=e.b.T;return Vr(r)},lm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Vr(r)+1+Vr(n)},um=function(e){return o(wa,g([G("absolute w-full"),ya("range"),bl(Be(0)),pl(Be(lm(e)-1)),ho(Be(cm(e))),hl(Be(1)),bo(o(te,fo,o(te,or(42),o(te,Ze,im))))]),P)},Ci={$:1},Li={$:3},Pi={$:2},Dt=function(e){return!e.b},gl=$l("disabled"),qa=y(function(e,r,n){return o(so,g([G("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),G(n),gl(e),mo(r)]),g([fr("REC")]))}),Za=y(function(e,r,n){return o(so,g([G("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),gl(e),mo(n)]),g([o(O,g([G("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),vm=function(e){var r=e.a,n=e.b.ab;return o(O,g([G("py-1")]),g([function(){switch(r.$){case 0:return p(qa,!1,Ci,"text-red-500 font-bold");case 1:return p(qa,!1,Pi,"text-white60 hover:text-white80 font-bold");default:return p(qa,!0,Pi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Za,Dt(n),Tr.fo,Li);case 1:return p(Za,Dt(n),Tr.fo,Li);default:return p(Za,!1,Tr.fn,Ci)}}()]))},$m=function(e){return o(O,g([G("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([um(e),vm(e),om(e),am(e)]))},fm=function(e){var r=e.a;return _r(r,Fa)},sm=$(function(e,r){var n=fm(r.G)?o(O,P,P):o(O,g([G("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fq.fU+.5*e.cM.fS)+"px"),o(ne,"top",oe(-e.fq.fY+.5*e.cM.eV)+"px")]),g([o(O,g([G(e.fq.e1?"text-black80":"text-black40")]),g([Tr.fq]))]));return o(O,P,g([n]))}),dm=$(function(e,r){var n=o(so,g([G(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),mo(id),pd("Distraction Free Mode")]),g([Tr.f0])),a=40,t=260,i=o(O,g([G("absolute w-8 bottom-12")]),g([o(wi,g([G("text-twitterBlue40 hover:text-twitterBlue"),yi("https://twitter.com/AzizErkalSelman"),xi("_blank")]),g([Tr.fM]))])),c=80,l=o(O,g([G("absolute w-8 bottom-2")]),g([o(wi,g([G("text-githubCat40 hover:text-githubCat"),yi("https://github.com/erkal/elm-3d-playground-exploration"),xi("_blank")]),g([Tr.eP]))])),u=e.cM.fS>640?B(e.cM.eV,a+t,e.cM.fS-(a+t)):B(e.cM.eV-c,a,e.cM.fS-a),v=u.a,s=u.b,d=u.c;return r.aL?o(O,g([G("fixed w-10 h-10 p-1")]),g([n])):o(O,P,g([o(O,g([G("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),g([n,i,l])),o(O,g([G("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),g([o(ha,cd,nm(ln(r.G).ey))])),o(O,g([G("absolute bottom-0"),o(ne,"left",oe(s)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(d)+"px")]),g([o(ha,ld,$m(r.G))])),o(sm,e,r)]))}),mm=y(function(e,r,n){var a=ad(n.G),t=ln(n.G);return o(O,g([G("bg-black40"),G("select-none"),G("antialiased"),G("font-mono"),o(ne,"width",oe(t.cM.fS)+"px"),o(ne,"height",oe(t.cM.eV)+"px")]),g([o(O,g([G("fixed")]),g([o(ha,Nc(rd),o(e,t,a))])),o(O,g([ba("gui")]),g([o(dm,t,n),o(ha,ed,o(r,t,a))]))]))}),pm=Ge(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Zs,r,i,u,v),_i)}),l=function(u){var v=o(Wc,n,u.e0);return z({aL:u.e0.cM.fS<500,G:o(Ks,v,a)},_i)};return bs({e$:l,fF:Nc(Qs(ts)),fN:c,fP:o(mm,e,t)})}),bm=U(function(e,r,n,a){return _e(pm,e,r,n,a,$(function(t,i){return o(O,P,P)}),y(function(t,i,c){return c}))}),hm=function(e){return{}},gm=y(function(e,r,n){return{av:n,e2:r,ff:e}}),_l=ir,_m=function(e){return p(Tn,$(function(r,n){var a=r.a,t=r.b;return p(gn,a,t,n)}),_l,e)},wm=y(function(e,r,n){return p(gm,e,r,_m(n))}),zi=wm,Lr=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Kc,z(a,t),n))}),ym=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Xc,z(a,t),n))}),xm=g([p(zi,"Parameters",!0,g([p(ym,"number of blocks",z(10,60),25),p(Lr,"frequency",z(1,20),10),p(Lr,"minWidth",z(0,45),35),p(Lr,"maxWidth",z(10,50),37),p(Lr,"period",z(.5,10),5)])),p(zi,"Colors and light",!0,g([p(Lr,"lux",z(2,5),5),p(Lr,"intensity above",z(0,300),0),p(Lr,"intensity below",z(0,300),0)]))]),Sm=$(function(e,r){return r}),Cm=cv,hr=sv,Lm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Se,J(c),o(Se,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c$:u/d})}else return q}),ra=function(e){return e},go=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),na=function(e){var r=e,n=o(Se,J(r.fU),o(Se,J(r.fY),J(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c$:a/c})}else return q},xa=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Pm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),wl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),zm=$(function(e,r){var n=e,a=r;return I(a,n)<0}),km=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Mm=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),Tm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},er=0,yl={fU:0,fY:0,c$:0},Dm=y(function(e,r,n){return o(kt,function(a){var t=o(km,o(Mm,a,r),r);return o(kt,function(i){var c=o(go,r,e),l=o(Pm,n,c),u=o(wl,er,l)?c:o(zm,er,l)?Tm(c):yl;return o(ye,function(v){return B(a,i,v)},na(u))},na(t))},na(e))}),Am=function(e){var r=e,n=J(r.c$),a=J(r.fY),t=J(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=hr(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(I(a,n)<1){var i=hr(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},_o=function(e){var r=Am(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return z(r,c)},Xr=function(e){var r=e;return r},sr=function(e){return e},Bm=$(function(e,r){var n=_o(e),a=n.a,t=n.b;return sr({cu:r,cZ:a,c_:t,c0:e})}),Fm=function(e){var r=o(xa,e.aR,e.dc),n=Xr(e.ee),a=o(go,r,n),t=p(Dm,r,n,a);if(t.$){var v=na(r);if(v.$){var d=_o(e.ee),m=d.a,f=d.b;return sr({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Bm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return sr({cu:e.dc,cZ:u,c_:l,c0:c})}},Bn={fU:0,fY:0,c$:0},Vm=function(e){return{$:0,a:e}},Ue=function(e){var r=e;return J(r)},aa=function(e){var r=e;return .5*r},Um=iv,Em=function(e){var r=e;return Um(r)},Rm=function(e){var r=aa(Ue(e.ef)),n=Em(r);return{cF:Vm(n),cX:e.cX}},vr=function(e){return e},wo=vr({fU:0,fY:1,c$:0}),wr=function(e){return e},Ym=function(e){var r=e.aR,n=e.dc,a=e.ee;return Rm({ef:wr(2*Cm(.5)),cX:Fm({dc:ra(n),aR:ra(r),ee:o(or,wo,o(Lm,Bn,ra(a)))})})},Er=tv,jm=$(function(e,r){return(r-Yc(r/e)*e)/e}),nn=av,Nm=function(e){return 2*nn*e},At=U(function(e,r,n,a){return e+(r-e)*(1+Er(Nm(o(jm,n,a))))/2}),Wm=function(e){return Ym({dc:{fU:10,fY:L(At,-20,20,20,e.bA),c$:145},aR:{fU:0,fY:0,c$:0},ee:{fU:0,fY:1,c$:0}})},yo=function(e){return e},xl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Hm=function(e){var r=e;return r},Gm=function(e){var r=p(xl,1667,25e3,Hm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return yo({fU:n,fY:a})},Im=function(e){return e},Jm=function(e){return{$:0,a:e}},Om=Jm,qm={$:3},Zm=qm,Km=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Xm=Km,Qm=$(function(e,r){return r.b?p(mr,A,r,e):e}),We=function(e){return p(mr,Qm,P,e)},xo=$(function(e,r){return We(o(ee,e,r))}),e0=function(e){return{$:1,a:e}},r0=e0,n0=function(e){return o(Cr,"height",Be(e))},a0=function(e){return u$(d$(e))},t0=a0,o0=function(e){return{$:2,a:e}},i0=o0,c0=function(e){return o(zr,"",e)},l0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return c0(g(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},u0=$(function(e,r){switch(r.$){case 0:return o(ff,e,r);case 1:return o(sf,e,r);case 2:return o(df,e,r);case 3:return o(mf,e,r);case 4:return o(pf,e,r);default:return o(bf,e,r)}}),v0=$(function(e,r){switch(r.$){case 0:return o(j$,e,r);case 1:return o(N$,e,r);case 2:return o(W$,e,r);case 3:return o(H$,e,r);case 4:return o(G$,e,r);case 5:return o(I$,e,r);case 6:return o(J$,e,r);case 7:return o(O$,e,r);default:return q$(e)}}),$0=y(function(e,r,n){return p($f,e,r,n)}),ki=function(e){var r=e;return r},$n=zf,Ka=L($n,1,1,1,1),Ke=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),f0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),s0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(f0,n*a/t,n,n*(1-a-t)/t)}),Fn=yf,d0=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ya=$(function(e,r){return d0(o(s0,e,r))}),Sl=$(function(e,r){return{dk:_r(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),rr=Bf,m0=function(e){return rr({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},Xa=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=L($n,a.bW,a.bW,a.bW,i);return _e(t,e,c,m0(a),a.dk,r,n)}),Cl=Ge(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Sl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(A,S(Xa,e,r,n,a,h),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(A,S(Xa,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,C=o(A,S(Xa,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:C};default:var M=t.a;return p(Tn,L(Cl,e,r,n,a),i,M)}}),p0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ll=p0,So=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),b0=function(e){var r=e.Z,n=e.W,a=e.V;return L(So,518,r,n,a)},h0=$(function(e,r){return{$:6,a:e,b:r}}),g0=h0,Pl=g([b0({V:1,W:0,Z:!1}),L(Ll,!1,!1,!1,!1),o(g0,0,1)]),an=519,Co=8,zl=15,Qr=7681,_0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=Y$,w0=$(function(e,r){return{$:0,a:e,b:r}}),y0=w0({c8:1,dh:0,dQ:5}),Ae=_f,x0=y0(g([{dY:o(Ae,-1,-1)},{dY:o(Ae,1,-1)},{dY:o(Ae,-1,1)},{dY:o(Ae,1,1)}])),S0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},C0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Lo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(C0,a,t,i)))}),Po=function(e){return p(Lo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},zo=function(e){return S(ae,g([Po(e),L(Ll,!1,!1,!1,!1)]),S0,_0,x0,{})},L0=zo({a8:Qr,ci:0,cH:Co,bl:an,cY:zl,bt:Qr,bu:Qr}),P0=516,Mi=5386,xe=7680,z0=function(e){return o(vn,2,e+4)},kl=function(e){return zo({a8:xe,ci:zl,cH:Co,bl:P0,cY:z0(e),bt:Mi,bu:Mi})},k0=y(function(e,r,n){return We(g([p(Ke,e,n,Pl),g([kl(r),L0])]))}),M0=$(function(e,r){return We(o(Bc,k0(e),r))}),T0=function(e){var r=e.Z,n=e.W,a=e.V;return L(So,513,r,n,a)},D0=T0({V:1,W:0,Z:!0}),A0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},B0=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,b=v.c;return A0(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},F0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ti=$(function(e,r){var n=e,a=r;return p(F0,32774,n,a)}),V0=1,Di=771,U0=770,ko=B0({bv:0,aH:o(Ti,V0,Di),by:0,bB:o(Ti,U0,Di),bF:0,bU:0}),Jr=g([D0,ko]),E0=function(e){var r=e;return r.dJ},R0=function(e){var r=e;return r.dK},Ml=function(e){var r=e;return r.dL},Y0=function(e){var r=e;return r.dM},j0=function(e){var r=e;return r.dN},Tl=function(e){var r=e;return r.dO},$r=$(function(e,r){var n=e,a=r;return a-n}),Dl=function(e){return B(o($r,Y0(e),E0(e)),o($r,j0(e),R0(e)),o($r,Tl(e),Ml(e)))},fn=function(e){var r=e;return r.cu},Ai=function(e){var r=e;return fn(r)},N0=function(e){return e},W0=function(e){return sr({cu:N0({fU:e.H,fY:e.I,c$:e.J}),cZ:vr({fU:e.q,fY:e.r,c$:e.s}),c_:vr({fU:e.t,fY:e.u,c$:e.v}),c0:vr({fU:e.w,fY:e.x,c$:e.y})})},Qa=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),Al=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,h=f;return{fU:c*h.fU+l*h.fY+u*h.c$,fY:c*m.fU+l*m.fY+u*m.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),jr=function(e){var r=e;return r.cZ},Nr=function(e){var r=e;return r.c_},Wr=function(e){var r=e;return r.c0},Bl=$(function(e,r){return{cu:o(Al,e,fn(r)),cZ:o(Qa,e,jr(r)),c_:o(Qa,e,Nr(r)),c0:o(Qa,e,Wr(r))}}),Bt=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),Sa=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Se,n,a)}),ta=$(function(e,r){return I(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(ta,n,a)}),H0=$(function(e,r){var n=Sa(r),a=Sa(e);return{dJ:o(ue,a.dJ,n.dJ),dK:o(ue,a.dK,n.dK),dL:o(ue,a.dL,n.dL),dM:o(de,a.dM,n.dM),dN:o(de,a.dN,n.dN),dO:o(de,a.dO,n.dO)}}),He=function(e){var r=e;return r},G0=function(e){var r=e;return B(r.fU,r.fY,r.c$)},wn=$(function(e,r){var n=e,a=r;return a+n}),I0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(Ue(a)),c=aa(Ue(n)),l=aa(Ue(t)),u=G0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(wn,c,v),dK:o(wn,i,s),dL:o(wn,l,d),dM:o($r,c,v),dN:o($r,i,s),dO:o($r,l,d)}}),Bi=U(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,d=He(Wr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c$),f=He(Nr(e)),h=J(l*f.fU)+J(c*f.fY)+J(i*f.c$),b=He(jr(e)),w=J(l*b.fU)+J(c*b.fY)+J(i*b.c$),x=o(I0,B(w,h,m),o(Al,e,p(Bt,s,v,u)));if(a.$)return re(x);var _=a.a;return re(o(H0,_,x))}),Ft=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 1:var c=t.a,l=L(Bi,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 2:var f=e,h=r,b=n,w=i;e=f,r=h,n=b,a=w;continue e;case 3:var c=t.a,l=L(Bi,e,r,c,n),f=e,h=r,b=l,w=i;e=f,r=h,n=b,a=w;continue e;case 4:var u=t.a,f=e,h=r,b=L(Ft,e,r,n,u),w=i;e=f,r=h,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Bl,W0(v),e),m=r*v.bW,f=e,h=r,b=L(Ft,d,m,n,g([s])),w=i;e=f,r=h,n=b,a=w;continue e}}else return n}),Hr=xf,Gr=Sf,Ir=Cf,Fl=function(e){return{$:4,a:e}},J0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return Fl(o(J0,e,P))},O0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},q0=function(e){var r=e;return r},Fi=zo({a8:Qr,ci:0,cH:Co,bl:an,cY:255,bt:Qr,bu:Qr}),Z0=function(e){var r=e,n=o(Se,J(r.fU),o(Se,J(r.fY),J(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return er},Te={by:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fU:0,fY:0,c$:0},Ye=$(function(e,r){var n=e,a=r;return rr({ds:n.fU,dt:n.bU,du:a.fU,dv:a.bU,dw:n.fY,dx:n.bF,dy:a.fY,dz:a.bF,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),bn=z({bd:o(Ye,Te,Te),bK:o(Ye,Te,Te),bL:o(Ye,Te,Te),bM:o(Ye,Te,Te)},L($n,0,0,0,0)),le=$(function(e,r){var n=r;return e*n}),Vi=function(e){var r=e;return-r},Vl=514,Ul=function(e){var r=e.Z,n=e.W,a=e.V;return L(So,515,r,n,a)},El=240,K0=g([Ul({V:1,W:0,Z:!0}),Po({a8:xe,ci:El,cH:0,bl:Vl,cY:0,bt:xe,bu:xe}),ko]),X0=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=Ue(a),l=c,u=Ue(t),v=u,s=n.cF;if(s.$){var m=s.a;return xt(v)?rr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):rr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return xt(v)?rr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):rr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),Q0=function(e){return g([Ul({V:1,W:0,Z:!0}),Po({a8:xe,ci:El,cH:e,bl:Vl,cY:0,bt:xe,bu:xe}),ko])},ep=y(function(e,r,n){return We(o(ee,function(a){var t=a<<4,i=L($n,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Ke,e,z(r,i),Q0(t))},o(Ur,1,o(vn,2,n)-1)))}),Ca=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},en=function(e){var r=e;return r},rp=Ff,Ui=function(e){var r=e;return Ca(Wr(r))},Rl=vr({fU:1,fY:0,c$:0}),Yl=Rl,Mo=wo,To=vr({fU:0,fY:0,c$:1}),np=To,ap={cu:Bn,cZ:Yl,c_:Mo,c0:np},Un=function(e){var r=e;return r},tp=function(e){var r=Un(fn(e)),n=He(Wr(e)),a=He(Nr(e)),t=He(jr(e));return rr({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},op=$(function(e,r){var n=r;return tp(o(Bl,n,e))}),ip=function(e){return o(op,ap,e)},cp=function(e){var r=e;return r.cX},lp=function(e){var r=e;return jr(r)},up=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),vp=function(e){var r=e;return Nr(r)},$p=function(e){var r=cp(e.es),n=sr({cu:Ai(r),cZ:lp(r),c_:vp(r),c0:Ca(Ui(r))}),a=Vn(e.aP),t=a,i=L(Ft,n,1,q,g([t]));if(i.$===1)return P;var c=i.a,l=ip(r),u=o(le,.99,o(ue,Ue(e.ex),Vi(Ml(c)))),v=Dl(c),s=v.a,d=v.b,m=v.c,f=Z0(p(up,s,d,m)),h=o(le,1.01,o(wn,f,Vi(Tl(c)))),b=o(X0,e.es,{en:e.en,eO:h,fg:u}),w=rp(b).dH,x=w?He(Ca(Ui(r))):en(Ai(r)),_=function(){var ie=e.fK;switch(ie.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var me=ie.a;return z(3,me);case 4:var me=ie.a;return z(4,me);default:return z(5,0)}}(),C=_.a,M=_.b,j=e.eM,R=j,E=o(Ya,R,e.fR),Y=E,N=rr({ds:0,dt:x.fU,du:Hr(Y),dv:e.d8,dw:0,dx:x.fY,dy:Gr(Y),dz:q0(f),dA:0,dB:x.c$,dC:Ir(Y),dD:C,dE:0,dF:w,dG:0,dH:M}),F=_e(Cl,N,l,b,O0,t,{M:P,U:P,fz:P}),Z=e.e8;switch(Z.$){case 0:var X=Z.a;return We(g([p(Ke,F.M,z(X,Ka),Jr),p(Ke,F.U,bn,Jr)]));case 1:var X=Z.a;return We(g([p(Ke,F.M,bn,Jr),g([Fi]),p(Ke,F.fz,X.bd,Pl),g([kl(0)]),p(Ke,F.M,z(X,Ka),K0),p(Ke,F.U,bn,Jr)]));default:var ce=Z.a,fe=Z.b;return We(g([p(Ke,F.M,z(fe,Ka),Jr),g([Fi]),o(M0,F.fz,ce),p(ep,F.M,fe,Vr(ce)),p(Ke,F.U,bn,Jr)]))}},fp=function(e){return o(Cr,"width",Be(e))},sp=$(function(e,r){var n=g([r0(1),i0(0),Om(!0),L(Xm,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,Zm,n),"1",1);default:var M=C.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=ki(v),d=o(ne,"height",Be(s)+"px"),m=ki(u),f=m/s,h=o(xo,function(C){return $p({en:f,es:e.es,ex:e.ex,aP:C.aP,eM:C.eM,e8:C.e8,d8:c,fK:C.fK,fR:C.fR})},r),b=o(ne,"width",Be(m)+"px"),w=e.aI,x=w,_=l0(x);return p(t0,"div",g([o(ne,"padding","0px"),b,d]),g([z(i,p($0,t,g([fp(Ze(m*c)),n0(Ze(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),h))]))}),dp=function(e){return{$:2,a:e}},mp=function(e){return dp(e)},pp=function(e){return o(sp,{el:mp(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},g([{aP:e.aP,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},Ei=function(e){return e},Dr=function(e){return e},bp=function(e){var r=e;return r},Do=function(e){var r=e;return bp(r.eo)},jl=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),hp=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Nl=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Wl=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),gp=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),_p=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),wp=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ao=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(wp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(jl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(hp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(Nl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(_p,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(Wl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(gp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Bo={$:0},yp=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),d=o(de,s.dM,e),m=o(ue,s.dJ,r),f=o(de,s.dN,n),h=o(ue,s.dK,a),b=o(de,s.dO,t),w=o(ue,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=h,t=b,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),xp=y(function(e,r,n){var a=Sa(e(r));return Ma(yp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),et=$(function(e,r){var n=e,a=r;return I(a,n)<1}),Hl=function(e){return o(et,e.dJ,e.dM)&&o(et,e.dK,e.dN)&&o(et,e.dL,e.dO)?e:{dJ:o(ue,e.dM,e.dJ),dK:o(ue,e.dN,e.dK),dL:o(ue,e.dO,e.dL),dM:o(de,e.dM,e.dJ),dN:o(de,e.dN,e.dK),dO:o(de,e.dO,e.dL)}},zn=function(e){var r=e;return r},Ar=function(e){var r=e;return r.fU},Br=function(e){var r=e;return r.fY},Fr=function(e){var r=e;return r.c$},Gl=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Ar(n),c=Br(n),l=Fr(n),u=Ar(a),v=Br(a),s=Fr(a),d=Ar(t),m=Br(t),f=Fr(t);return Hl({dJ:o(ue,i,o(ue,u,d)),dK:o(ue,c,o(ue,v,m)),dL:o(ue,l,o(ue,s,f)),dM:o(de,i,o(de,u,d)),dN:o(de,c,o(de,v,m)),dO:o(de,l,o(de,s,f))})},Il=Lf,ze=function(e){return Il(Un(e))},Jl=function(e){var r=e;return r},ja=function(e){return Il(Jl(e))},Ol=function(e){return e},Sp=$(function(e,r){var n=e,a=r,t=o(Se,J(a.fU),o(Se,J(a.fY),J(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return yl}),Cp=Sp(Ol(1)),ql=y(function(e,r,n){var a=o(xa,r,n),t=o(xa,e,r);return Cp(o(go,a,t))}),Lp=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=ja(p(ql,n,a,t));return B({o:i,dY:ze(n)},{o:i,dY:ze(a)},{o:i,dY:ze(t)})},Pp=$(function(e,r){return{$:2,a:e,b:r}}),Zl=Pp({c8:3,dh:0,dQ:4}),zp=function(e){if(e.b){var r=e.a,n=e.b,a=Zl(o(ee,Lp,e)),t=p(xp,Gl,r,n);return L(jl,t,e,a,0)}else return Bo},Re=y(function(e,r,n){return B(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Kl=function(){var e=Dr(1),r=Dr(1),n=Dr(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(pe,i,t,a),l=o(le,.5,e),u=p(pe,i,t,l),v=o(le,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(le,.5,n),f=p(pe,m,t,a),h=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Ao(zp(g([p(Re,c,h,f),p(Re,c,s,h),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,h,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,h),p(Re,s,d,w)])))}(),In={$:0},kp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Mp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ja(p(ql,u,l,c)),s={o:v,dY:ze(u)},d={o:v,dY:ze(l)},m={o:v,dY:ze(c)};return o(A,s,o(A,d,o(A,m,n)))}),Fo=function(e){var r=e;return r.D},Tp=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Vt=4294967295>>>32-Cn,Ut=qu,Dp=y(function(e,r,n){e:for(;;){var a=Vt&r>>>e,t=o(Ut,a,n);if(t.$){var v=t.a;return o(Ut,Vt&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Ap=function(e){return e>>>5<<5},Bp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,Ap(n))>-1?re(o(Ut,Vt&e,i)):re(p(Dp,a,e,t))}),Vo=function(e){var r=e;return r.ah},rt=$(function(e,r){return o(Bp,e,Vo(r))}),Fp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Tp,y(function(c,l,u){return B(c,l,u)}),o(rt,a,e),o(rt,t,e),o(rt,i,e))};return o(Ea,r,Fo(e))},Vp=y(function(e,r,n){e:for(;;){var a=o(co,Ve,e),t=a.a,i=a.b;if(I(wt(t),Ve)<0)return o(jc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Uo=function(e){return e.b?p(Vp,e,P,0):Uc},Up=y(function(e,r,n){return e(r(n))}),Ep=$(function(e,r){return!o(Qc,o(Up,hs,e),r)}),Rp=$(function(e,r){return p(mr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Yp=function(e){var r=e.a;return r},Xl=$(function(e,r){var n=Yp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(Ep,a,r)?{D:r,ah:e}:{D:o(Rp,a,r),ah:e}}),jp=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=jp({c8:1,dh:3,dQ:4}),oa=$(function(e,r){var n=en(r),a=en(e);return z(B(a.fU,a.fY,a.c$),B(n.fU,n.fY,n.c$))}),Ri=p(Fn,0,0,0),nt=Ge(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ua,o(oa,e,r),t);if(v.$){var d={o:Ri,dY:ze(r)},m={o:Ri,dY:ze(e)},f=u+1,h=u;return B(o(A,B(n,h,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),Np=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,b=a,w=e,x=r,_=v,C=a+3,M=_e(nt,s,m,f,b,r,_e(nt,d,s,h,f,r,_e(nt,m,d,b,h,r,t)));e=w,r=x,n=_,a=C,t=M;continue e}else{var j=t,R=j.a,E=j.b;return z(R,Fe(E))}}),Wp=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,b=n,w=p(gn,o(oa,m,s),f,p(gn,o(oa,s,d),h,p(gn,o(oa,d,m),b,t))),x=o(A,B(b,h,f),a),_=e,C=v,M=n+3,j=x,R=w;e=_,r=C,n=M,a=j,t=R;continue e}else return B(a,t,n)}),Pr=y(function(e,r,n){var a=Fp(n),t=p(mr,Mp(r),P,a),i=S(Wp,r,a,0,P,_l),c=i.a,l=i.b,u=i.c,v=S(Np,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=Dt(d)?t:ve(t,d);return p(kp,e,o(Xl,Uo(m),s),o(En,m,s))}),Et=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Ur,0,Vr(e)-1)),ah:Uo(We(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},Ql=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,zn,r);return p(Pr,a,Mr,Et(n));case 2:var a=e.a,r=e.b,n=o(ee,zn,r);return p(Pr,a,Mr,Et(n));case 3:var a=e.a,t=e.b;return p(Pr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Pr,a,function(i){return i.dY},t);case 8:return In;case 9:return In;default:return In}},Yi=Ql(Kl),Eo=function(e){var r=e;return r.aK},eu={$:0},k=eu,be=$(function(e,r){return{$:1,a:e,b:r}}),Hp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},Gp=1029,Ip=function(e){return{$:5,a:e}},ru=function(e){var r=e;return Ip(r)},Jp=ru(Gp),Op=1028,qp=ru(Op),ke=y(function(e,r,n){return r===1?e?o(A,Jp,n):o(A,qp,n):n}),nu={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},at=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ae,p(ke,l,a,d),nu,Hp,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Ro={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},au={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ae,p(ke,l,a,d),au,Ro,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),tu=$(function(e,r){return{$:3,a:e,b:r}}),Zp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},ou={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Kp=U(function(e,r,n,a){return o(tu,n,Q(function(t,i,c,l,u,v,s,d){return S(ae,d,ou,Zp,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Yo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Rn=function(e){var r=e;return r},Na=Pf,lr=he(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ae,p(ke,u,t,m),au,Yo,a,{aN:o(Na,Rn(r),e),b:l,c,d:s,e:i,f:v})}))}),Xp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Qp=he(function(e,r,n,a,t){return o(tu,a,Q(function(i,c,l,u,v,s,d,m){return S(ae,m,ou,Xp,t,{aN:o(Na,Rn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),iu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},cu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),cu,iu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),lu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},uu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},e1=Ge(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ae,p(ke,v,i,f),uu,lu,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),vu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},r1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,Q(function(d,m,f,h,b,w,x,_){var C=x.a,M=x.b;return S(ae,p(ke,h,s,_),uu,vu,v,{b0:e,b2:r,b3:i,b4:a,P:M,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},$u={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},On=Ge(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var h=m.a,b=m.b;return S(ae,p(ke,v,i,f),cu,$u,t,{b$:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),n1=function(e){return{$:0,a:e}},ji=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),a1=function(e){return L($n,Hr(e),Gr(e),Ir(e),1)},jo=L($n,0,0,0,0),ia=$(function(e,r){if(r.$){var a=r.a.C;return z(a,jo)}else{var n=r.a;return z(e,a1(n))}}),fu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(ji,z(t,jo),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ji,o(ia,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,n1(a)}}),t1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),o1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),i1=function(e){return o(Ae,e,1)},Rt=o(Ae,0,0),Or=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Rt)}else{var n=r.a;return z(e,i1(n))}}),su=U(function(e,r,n,a){var t=L(o1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(qn,z(u,jo),o(Or,u,r),o(Or,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(qn,o(ia,u,e),z(u,Rt),o(Or,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(qn,o(ia,u,e),o(Or,u,r),z(u,Rt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(qn,o(ia,u,e),o(Or,u,r),o(Or,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(t1,i,c,l)}}),c1={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},tt=he(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ae,p(ke,u,t,m),nu,c1,a,{bZ:Rn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),du={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},l1=U(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),du,lu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),u1=Wt(function(e,r,n,a,t,i,c,l,u){return o(be,c,Q(function(v,s,d,m,f,h,b,w){var x=b.a,_=b.b;return S(ae,p(ke,m,u,w),du,vu,l,{b0:e,b2:r,b3:i,b4:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:d,c:s,aW:e,d:h,cL:n,e:v,a$:0,f})}))}),kn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),v1=function(e){var r=e;return p(kn,r.dM,r.dJ,.5)},$1=function(e){var r=e;return p(kn,r.dN,r.dK,.5)},f1=function(e){var r=e;return p(kn,r.dO,r.dL,.5)},s1=function(e){return p(pe,v1(e),$1(e),f1(e))},W=function(e){var r=Dl(e),n=r.a,a=r.b,t=r.c;return{ev:Un(s1(e)),eR:n/2,eS:a/2,eT:t/2}},No=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(at,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(at,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(at,l,W(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Kp,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,W(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Qp,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(fu,s,R);if(d.$){var h=d.a,b=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(l1,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(e1,b,x,_,W(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Jn,m,W(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,M=e.c,j=e.d,R=e.e,E=L(su,C,M,j,R);if(E.$){var Z=E.a,X=Z.a,ce=Z.b,fe=E.b,ie=fe.a,me=fe.b,Me=E.c,Ce=Me.a,pr=Me.b,br=E.d,x=br.a,_=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Hu(u1,X,ce,ie,me,Ce,pr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return r1(X)(ce)(ie)(me)(Ce)(pr)(x)(_)(W(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var Y=E.a,N=E.b,F=E.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,Y,N,F,W(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,Y,N,F,W(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,Y,N,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,Y,N,F,W(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),ot=function(e){var r=e;return r.fU},it=function(e){var r=e;return r.fY},ct=function(e){var r=e;return r.c$},d1=function(e){var r=e,n=ct(r.c0),a=it(r.c0),t=ot(r.c0),i=ct(r.c_),c=it(r.c_),l=ot(r.c_),u=ct(r.cZ),v=it(r.cZ),s=ot(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},m1=function(e){var r=Un(fn(e)),n=He(Wr(e)),a=He(Nr(e)),t=He(jr(e));return{dk:d1(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,H:r.fU,I:r.fY,J:r.c$,bW:1}},qr=$(function(e,r){return{$:5,a:e,b:r}}),mu=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Sl,a,e);return o(qr,i,t);case 1:return o(qr,e,n);case 3:return o(qr,e,n);case 2:return o(qr,e,n);default:return o(qr,e,n)}}),pu=$(function(e,r){return o(mu,m1(e),r)}),Wa=function(e){return{$:2,a:e}},p1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),b1=Mf,h1=kf,Ni=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=h1(a),h=f.fU,b=f.fY,w=f.c$,x=f.ei,_=b1({ei:x,fU:h*s,fY:b*d,c$:w*m});return Ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Yt=$(function(e,r){switch(r.$){case 0:return eu;case 5:var n=r.a,a=r.b;return o(qr,n,o(Yt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(p1,e,t),o(Ni,e,i));case 3:return r;case 2:var i=r.a;return Wa(o(Ni,e,i));default:var c=r.a;return Fl(o(ee,Yt(e),c))}}),Wo=$(function(e,r){var n=r;return o(Yt,e,n)}),Ho={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},bu=7683,hu=7682,g1=p(Lo,{ci:0,cH:0,cY:15},{a8:xe,bl:an,bt:xe,bu},{a8:xe,bl:an,bt:xe,bu:hu}),_1=p(Lo,{ci:0,cH:0,cY:15},{a8:xe,bl:an,bt:xe,bu:hu},{a8:xe,bl:an,bt:xe,bu}),Go=$(function(e,r){return e?o(A,_1,r):o(A,g1,r)}),w1={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},y1=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return S(ae,o(Go,i,v),w1,Ho,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},La=function(e){var r=y1(e);if(r.$)return k;var n=r.a;return Wa(n)},x1=U(function(e,r,n,a){var t=o(No,n,Kl),i=function(){var s=z(e,r);return s.a?s.b?Vn(g([t,La(Yi)])):t:s.b?La(Yi):k}(),c=Eo(a),l=c.a,u=c.b,v=c.c;return o(pu,Do(a),o(Wo,B(l,u,v),i))}),S1=$(function(e,r){return L(x1,!0,!0,e,r)}),jt=function(e){return{$:0,a:e}},gu=$(function(e,r){return{$:0,a:e,b:r}}),C1=function(e){var r=po(e),n=r.cG,a=r.b7,t=r.b1;return p(Fn,n,a,t)},L1=function(e){return o(gu,0,jt(C1(e)))},P1=function(e){var r=e;return r.k},xn=function(e){var r=e;return Er(r)},z1=$(function(e,r){var n=r;return n/e}),tn=ov,Wi=function(e){var r=e;return{fU:Er(r),fY:tn(r)}},k1=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:ja(a),dY:ze(n)},r)}),M1=ka(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Ir(l.dY),s=Gr(l.dY),d=Hr(l.dY),m=o(ta,e,d),f=o(Se,r,d),h=o(ta,n,s),b=o(Se,a,s),w=o(ta,t,v),x=o(Se,i,v),_=u;e=m,r=f,n=h,a=b,t=w,i=x,c=_;continue e}else return Hl({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),_u=$(function(e,r){var n=Ir(e.dY),a=Gr(e.dY),t=Hr(e.dY);return Ht(M1,t,t,a,a,n,n,r)}),T1=function(e){var r=p(kc,k1,P,Vo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Fo(e)),i=o(_u,n,a);return L(Nl,i,e,t,0)}else return Bo},wu=vr({fU:0,fY:0,c$:-1}),Hi=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c$:a.fU*l.c$+a.fY*i.c$}}),Pa=function(e){var r=e;return tn(r)},Nt=function(e){return wr(2*nn*e)},D1=Mr,Gi=D1({cu:Bn,cZ:Yl,c_:Mo}),yu=function(){var e=72,r=o(z1,e,Nt(1)),n=Dr(1),a=Xr(To),t=Xr(wu),i=Dr(1),c=o(le,.5,i),l=p(pe,er,er,c),u=o(le,-.5,i),v=p(pe,er,er,u),s=function(f){var h=o(le,f,r),b=Xr(o(Hi,Gi,Wi(h))),w=o(le,xn(h),n),x=o(le,Pa(h),n),_=p(pe,w,x,c),C=p(pe,w,x,u),M=o(ga,e,f+1),j=o(le,M,r),R=Xr(o(Hi,Gi,Wi(j))),E=o(le,xn(j),n),Y=o(le,Pa(j),n),N=p(pe,E,Y,u),F=p(pe,E,Y,c);return g([B({o:t,dY:v},{o:t,dY:N},{o:t,dY:C}),B({o:b,dY:C},{o:R,dY:N},{o:R,dY:F}),B({o:b,dY:C},{o:R,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(ee,s,o(Ur,0,e-1)),m=Et(We(d));return Ao(T1(m))}(),Ii=Ql(yu),A1=function(e){var r=e;return r.eF},B1=function(e){var r=e;return r.cu},F1=function(e){var r=A1(e),n=_o(r),a=n.a,t=n.b;return sr({cu:B1(e),cZ:a,c_:t,c0:r})},V1=function(e){var r=e;return r.e6},U1=function(e){var r=e;return r.fs},E1=U(function(e,r,n,a){var t=F1(P1(a)),i=o(No,n,yu),c=function(){var d=z(e,r);return d.a?d.b?Vn(g([i,La(Ii)])):i:d.b?La(Ii):k}(),l=U1(a),u=l,v=V1(a),s=v;return o(pu,t,o(Wo,B(u,u,s),c))}),R1=$(function(e,r){return L(E1,!0,!0,e,r)}),Ji={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Oi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},hn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=en(n),c=en(a),l=en(t);return rr({ds:i.fU,dt:c.fU,du:l.fU,dv:0,dw:i.fY,dx:c.fY,dy:l.fY,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},Zn=Zl(g([B({cS:0},{cS:1},{cS:2})])),Y1=$(function(e,r){var n=Gl(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){return S(ae,p(ke,j,0,N),Ji,Ro,Zn,{aw:t,b:M,c:C,d:E,e:_,bq:hn(r),f:R})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){return S(ae,p(ke,j,0,N),Ji,Yo,Zn,{aN:o(Na,Rn(c),i),b:M,c:C,d:E,e:_,bq:hn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(fu,l,f);if(u.$)return k;var v=u.a;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){var F=Y.a,Z=Y.b;return S(ae,p(ke,j,0,N),Oi,iu,Zn,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:M,c:C,d:E,e:_,bq:hn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=L(su,s,d,m,f);if(h.$)return k;var b=h.a,w=h.b,x=h.c;return o(be,a,Q(function(_,C,M,j,R,E,Y,N){var F=Y.a,Z=Y.b;return S(ae,p(ke,j,0,N),Oi,$u,Zn,{b$:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cn:x,b:M,c:C,d:E,cK:w,e:_,bq:hn(r),f:R})}))}}),j1=function(){var e=g([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=g([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(En,e,r)}(),N1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},qi=function(e){return Wa(Q(function(r,n,a,t,i,c,l,u){return S(ae,o(Go,t,u),N1,Ho,j1,{b:a,c:n,d:c,e:r,bX:l,bq:hn(e),f:i})}))},W1=U(function(e,r,n,a){var t=o(Y1,n,a),i=z(e,r);return i.a?i.b?Vn(g([t,qi(a)])):t:i.b?qi(a):k}),H1=$(function(e,r){return L(W1,!0,!0,e,r)}),Io=function(e){var r=e;return r},G1=$(function(e,r){var n=Fr(r),a=Fr(e),t=Br(r),i=Br(e),c=Ar(r),l=Ar(e);return{dJ:o(ue,l,c),dK:o(ue,i,t),dL:o(ue,a,n),dM:o(de,l,c),dN:o(de,i,t),dO:o(de,a,n)}}),I1=function(e){var r=Io(e),n=r.a,a=r.b;return o(G1,n,a)},Zi={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},J1=$(function(e,r){return{$:1,a:e,b:r}}),O1=J1({c8:2,dh:0,dQ:1}),Ki=O1(g([z({dr:0},{dr:1})])),q1=$(function(e,r){var n=I1(r),a=W(n),t=Io(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(be,a,Q(function(v,s,d,m,f,h,b,w){return S(ae,w,Zi,Ro,Ki,{aw:l,dp:ze(c),dq:ze(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,Q(function(s,d,m,f,h,b,w,x){return S(ae,x,Zi,Yo,Ki,{aN:o(Na,Rn(u),l),dp:ze(c),dq:ze(i),b:m,c:d,d:b,e:s,f:h})}));case 2:return k;default:return k}}),Z1=$(function(e,r){return o(q1,e,r)}),Jo=function(e){var r=e;return r.ev},Oo=function(e){var r=e;return r.fs},Kn=function(e){return wr(nn*(e/180))},Xi=$(function(e,r){var n=e,a=r;return n/a}),K1=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Qi=$(function(e,r){return e<1?P:S(K1,0,e,e,r,P)}),X1=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:ja(a),dY:ze(n),L:o(Ae,c,l)},r)}),Q1=function(e){var r=p(kc,X1,P,Vo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Fo(e)),i=o(_u,n,a);return L(Wl,i,e,t,0)}else return Bo},qo=$(function(e,r){var n=e,a=r,t=Er(a);return{fU:t*Er(n),fY:t*tn(n),c$:tn(a)}}),eb=function(){var e=Dr(1),r=72,n=o(Ur,0,r-1),a=o(Qi,r,o(kn,er,Nt(1))),t=oo(r/2),i=o(Ur,0,t-1),c=o(Qi,t,o(kn,Kn(90),Kn(-90))),l=Uo(We(o(ee,function(s){return o(ee,function(d){return{o:Xr(o(qo,s,d)),dY:p(pe,o(le,xn(d)*xn(s),e),o(le,xn(d)*Pa(s),e),o(le,Pa(d),e)),L:z(o(Xi,s,Nt(1)),o(Xi,o(wn,Kn(90),d),Kn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=We(o(ee,function(s){return We(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return g([B(b,h,m),B(b,m,f)])},i))},n));return Ao(Q1(o(Xl,l,v)))}(),za=72,Xn=2*za,rb=$(function(e,r){e:for(;;){var n=Xn+1,a=o(ga,Xn,2*e+3),t=o(ga,Xn,2*e+2),i=2*e+1,c=2*e,l=Xn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),nb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ab=$(function(e,r){e:for(;;){var n=p(nb,0,2*nn,e/za),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),tb=function(){var e=o(ab,za-1,g([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(rb,za-1,P);return o(En,e,r)}(),ob={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},ec=function(e){return Wa(Q(function(r,n,a,t,i,c,l,u){return S(ae,o(Go,!0,u),ob,Ho,tb,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},ib=function(e){var r=Jl(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c$,bW:1}},cb=$(function(e,r){return o(mu,ib(e),r)}),lb=U(function(e,r,n,a){var t=o(No,n,eb),i=function(){var u=z(e,r);return u.a?u.b?Vn(g([t,ec()])):t:u.b?ec():k}(),c=Oo(a),l=c;return o(cb,o(xa,Bn,Jo(a)),o(Wo,B(l,l,l),i))}),ub=$(function(e,r){return L(lb,!0,!0,e,r)}),vb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),xu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),$b=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),fb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(gu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(vb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(xu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S($b,n,a,t,i,c)}},sb=fb,Su=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(S1,t,r)]);case 1:var t=e.a,n=e.b;return g([o(H1,t,n)]);case 3:var t=e.a,a=e.b;return g([o(ub,sb(t),a)]);case 2:var t=e.a,i=e.b;return g([o(R1,t,i)]);case 4:var c=e.a,l=e.b;return g([o(Z1,L1(c),l)]);default:var u=e.a;return o(xo,Su,u)}},db=function(e){return o(xo,Su,e)},mb=$(function(e,r){return pp({el:e.el,aI:Im(e.ep),es:e.es,ex:Dr(e.ex),b5:e.b5,aK:z(Ei(Ze(e.cM.fS)),Ei(Ze(e.cM.eV))),aP:db(r),eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),pb=L(un,186/255,189/255,182/255,1),Cu=function(e){return e},bb=$(function(e,r){var n=e,a=He(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(Ya,r.bH,r.aJ),u=l;return{by:Ir(u),eu:n,bF:Gr(u),cD:0,bU:Hr(u),cT:1,fU:-t,fY:-i,c$:-c}}),hb=function(e){return o(bb,Cu(!0),{aJ:e.aJ,eF:o(qo,wr(e.bx),wr(e.bD)),bH:e.bH})},gb=function(e){return e},_b=function(e){return gb(1.2*o(vn,2,e))},lt=yo({fU:.37208,fY:.37529}),wb=$(function(e,r){return{$:2,a:e,b:r}}),Lu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},yb=function(e){var r=e;return r.eu},xb=Lu(bn.a),Sb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(mr,n,z(P,P),r)}),Cb=function(e){var r=e;return rr({ds:r.fU,dt:r.bU,du:0,dv:0,dw:r.fY,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Lb=Q(function(e,r,n,a,t,i,c,l){var u=o(Sb,yb,g([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(wb,o(ee,Cb,v),{bd:o(Ye,m,h),bK:o(Ye,w,_),bL:o(Ye,t,i),bM:o(Ye,c,l)})}else return xb}else return Lu({bd:o(Ye,e,r),bK:o(Ye,n,a),bL:o(Ye,t,i),bM:o(Ye,c,l)})}),Pb=U(function(e,r,n,a){return Ma(Lb,e,r,n,a,Te,Te,Te,Te)}),zb=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Ua,e,r.av))}),kb=$(function(e,r){return o(or,0,Ra(o(Ea,zb(e),r)))}),Mb=$(function(e,r){return o(kb,e,r.ey)}),Je=Mb,Tb={$:5},Db=Tb,Ab=yo({fU:.44757,fY:.40745}),Bb=function(e){return e},rc=function(e){return e},ut=function(e){return e},Fb={$:1},Vb=Fb,Ub=$(function(e,r){var n=e,a=Un(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(Ya,r.bH,r.aJ),u=l;return{by:Ir(u),eu:n,bF:Gr(u),cD:0,bU:Hr(u),cT:2,fU:t,fY:i,c$:c}}),nc=function(e){return o(Ub,Cu(!0),{aJ:e.aJ,bH:e.bH,dY:ra(e.dY)})},Zo=$(function(e,r){return{$:0,a:e,b:r}}),vt=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),$t=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Eb=vr({fU:-1,fY:0,c$:0}),Rb=vr({fU:0,fY:-1,c$:0}),Yb=Ge(function(e,r,n,a,t,i){var c=o(vt,n,i)?To:wu,l=o(vt,r,t)?wo:Rb,u=o(vt,e,a)?Rl:Eb,v=B(Ue(o($r,e,a)),Ue(o($r,r,t)),Ue(o($r,n,i))),s=p(pe,o($t,e,a),o($t,r,t),o($t,n,i)),d=sr({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),jb=$(function(e,r){return _e(Yb,Ar(e),Br(e),Fr(e),Ar(r),Br(r),Fr(r))}),Pu=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Zo,e,o(jb,p(Bt,-c,-l,-u),p(Bt,c,l,u)))}),Nb=L(un,211/255,215/255,207/255,1),ft=function(e){return p(xl,0,1,e<=.04045?e/12.92:o(vn,(e+.055)/1.055,2.4))},Wb=function(e){var r=po(e),n=r.cG,a=r.b7,t=r.b1;return p(Fn,ft(n),ft(a),ft(t))},zu=function(e){return p(xu,0,jt(Wb(e)),jt(0))},ku=$(function(e,r){return{$:2,a:e,b:r}}),Ko=function(e){return{$:5,a:e}},Mu=$(function(e,r){return{$:4,a:e,b:r}}),Tu=$(function(e,r){return{$:3,a:e,b:r}}),Du=$(function(e,r){return{$:1,a:e,b:r}}),Hb=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),Yn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c$:a.c$+n.c$}}),Gb=$(function(e,r){return sr({cu:o(Yn,e,fn(r)),cZ:jr(r),c_:Nr(r),c0:Wr(r)})}),Ib=$(function(e,r){return{eo:o(Gb,e,Do(r)),aK:Eo(r)}}),Xo=$(function(e,r){return{eF:r,cu:e}}),Jb=$(function(e,r){var n=r;return o(Xo,o(Yn,e,n.cu),n.eF)}),Ob=$(function(e,r){var n=r;return{k:o(Jb,e,n.k),e6:n.e6,fs:n.fs}}),qb=function(e){return e},Au=$(function(e,r){var n=Io(r),a=n.a,t=n.b;return qb(z(e(a),e(t)))}),Zb=$(function(e,r){return o(Au,Yn(e),r)}),Bu=$(function(e,r){return{ev:r,fs:Ue(e)}}),Kb=$(function(e,r){return o(Bu,Oo(r),o(Yn,e,Jo(r)))}),Fu=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),Xb=$(function(e,r){return o(Fu,Yn(e),r)}),Vu=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Hb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Zo,s,o(Ib,i,c));case 1:var s=r.a,l=r.b;return o(Du,s,o(Xb,i,l));case 3:var s=r.a,u=r.b;return o(Tu,s,o(Kb,i,u));case 2:var s=r.a,v=r.b;return o(ku,s,o(Ob,i,v));case 4:var s=r.a,d=r.b;return o(Mu,s,o(Zb,i,d));default:var m=r.a;return Ko(o(ee,Vu(B(n,a,t)),m))}}),Uu=function(e){return Vu(B(0,e,0))},Qb=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ua,e,r.av))}),e3=$(function(e,r){return o(or,0,Ra(o(Ea,Qb(e),r)))}),r3=$(function(e,r){return o(e3,e,r.ey)}),n3=r3,a3=function(e){return Ko(e)},t3=U(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(un,f,m,d,a)}),o3=y(function(e,r,n){return L(t3,e,r,n,1)}),ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=tn(c),v=a.eF,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,w=d*h,x=h*h,_=1-2*(f+x),C=s.c$*u,M=l*C,j=2*(w-M),R=2*(w+M),E=d*C,Y=2*(E+b),N=2*(E-b),F=h*C,Z=2*(F-m),X=2*(F+m),ce=C*C,fe=1-2*(x+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+j*i.fY+Y*i.c$,fY:R*i.fU+ie*i.fY+Z*i.c$,c$:N*i.fU+X*i.fY+_*i.c$}}),jn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=tn(c),v=a.cu,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c$-s.c$,h=a.eF,b=h,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,M=l*C,j=w*C,R=C*C,E=1-2*(_+R),Y=b.c$*u,N=l*Y,F=2*(j-N),Z=2*(j+N),X=w*Y,ce=2*(X+M),fe=2*(X-M),ie=C*Y,me=2*(ie-x),Me=2*(ie+x),Ce=Y*Y,pr=1-2*(R+Ce),br=1-2*(_+Ce);return{fU:s.fU+pr*d+F*m+ce*f,fY:s.fY+Z*d+br*m+me*f,c$:s.c$+fe*d+Me*m+E*f}}),i3=y(function(e,r,n){return sr({cu:p(jn,e,r,fn(n)),cZ:p(ca,e,r,jr(n)),c_:p(ca,e,r,Nr(n)),c0:p(ca,e,r,Wr(n))})}),c3=y(function(e,r,n){return{eo:p(i3,e,r,Do(n)),aK:Eo(n)}}),l3=$(function(e,r){var n=o(jn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(Xo,n(i.cu),a(i.eF))}}),u3=y(function(e,r,n){var a=n;return{k:p(l3,e,r,a.k),e6:a.e6,fs:a.fs}}),v3=y(function(e,r,n){return o(Au,o(jn,e,r),n)}),$3=y(function(e,r,n){return o(Bu,Oo(n),p(jn,e,r,Jo(n)))}),f3=y(function(e,r,n){return o(Fu,o(jn,e,r),n)}),Eu=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Zo,l,p(c3,e,r,a));case 1:var l=n.a,t=n.b;return o(Du,l,p(f3,e,r,t));case 3:var l=n.a,i=n.b;return o(Tu,l,p($3,e,r,i));case 2:var l=n.a,c=n.b;return o(ku,l,p(u3,e,r,c));case 4:var l=n.a,u=n.b;return o(Mu,l,p(v3,e,r,u));default:var v=n.a;return Ko(o(ee,o(Eu,e,r),v))}}),s3=o(Xo,Bn,Mo),d3=$(function(e,r){return p(Eu,s3,wr(e),r)}),m3=function(e){var r=o(Je,"period",e),n=o(n3,"number of blocks",e),a=o(Je,"minWidth",e),t=o(Se,a,o(Je,"maxWidth",e)),i=o(Je,"frequency",e),c=80/n,l=function(m){return i*m/n},u=function(m){return L(At,a,t,r,e.bA+l(m))},v=function(m){return .004*r*m},s=function(m){return p(o3,L(At,0,1,3,e.bA+v(m)),.65,.7)},d=function(m){return o(d3,.1*u(m),o(Uu,m*c,o(Pu,zu(s(m)),B(u(m),.9*c,u(m)))))};return a3(o(ee,d,o(Ur,-(n/2|0),n/2|0)))},p3=$(function(e,r){return g([m3(e),o(Uu,-33,o(Pu,zu(Nb),B(300,1,300)))])}),ac=function(e){var r=e;return r},b3=function(e){e:for(;;){if(_r(e.di,er)&&_r(e.dj,er))return Te;if(o(wl,Ue(e.di),Ue(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:Ca(e.ee)};e=r;continue e}else{var n=J(ac(e.dj)/nn),a=J(ac(e.di)/nn),t=He(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(Ya,Ol(1),e.aJ),v=u;return{by:a*Ir(v),eu:!1,bF:a*Gr(v),cD:n/a,bU:a*Hr(v),cT:3,fU:i,fY:c,c$:l}}}},h3=function(e){return b3({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(qo,wr(e.bx),wr(e.bD))})},g3=$(function(e,r){var n=hb({bx:o(Je,"azimuth for third light",e),aJ:Gm(Bb(2e3)),bD:o(Je,"elevation for third light",e),bH:ut(o(vn,10,o(Je,"lux",e)))}),a=nc({aJ:lt,bH:rc(6e3),dY:{fU:-45,fY:-30,c$:45}}),t=h3({bx:o(Je,"azimuth for fourth light",e),aJ:lt,bD:o(Je,"elevation for fourth light",e),di:ut(o(Je,"intensity above",e)),dj:ut(o(Je,"intensity below",e))}),i=nc({aJ:Ab,bH:rc(6e3),dY:{fU:-45,fY:30,c$:45}});return o(mb,{el:Vb,ep:pb,es:Wm(e),ex:.1,b5:e.b5,eM:_b(6),e8:L(Pb,i,a,n,t),cM:e.cM,fK:Db,fR:lt},o(p3,e,r))}),_3=L(bm,g3,Sm,xm,hm);const w3={Main:{init:_3(o(D,function(e){return De({e0:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({bA:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",se))},o(T,"devicePixelRatio",se))},o(T,"dt",se))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",K))},o(T,"control",K))},o(T,"down",K))},o(T,"downs",pa(Pn)))},o(T,"left",K))},o(T,"pressedKeys",pa(Pn)))},o(T,"right",K))},o(T,"shift",K))},o(T,"up",K))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",K))},o(T,"isDown",K))},o(T,"move",K))},o(T,"rightDown",K))},o(T,"rightUp",K))},o(T,"up",K))},o(T,"x",se))},o(T,"y",se))))},o(T,"screen",o(D,function(r){return o(D,function(n){return De({eV:n,fS:r})},o(T,"height",se))},o(T,"width",se))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return De({eC:r,eD:e})},o(T,"deltaX",se))},o(T,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},y3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-V.clock;b<.009||(V.dt=b,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},x3=()=>{st("pointerdown"),st("wheel"),st("keydown")},st=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},S3=w3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});x3();y3(S3);
