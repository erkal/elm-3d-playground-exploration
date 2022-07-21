const Gu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Gu();function yr(e,r,n){return n.a=e,n.f=r,n}function $(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function He(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Yt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Hu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Iu=[];function Ju(e){return e.length}var Ou=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),qu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Zu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Xu()),r});function Xu(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function wr(e,r){for(var n,a=[],t=st(e,r,0,a);t&&(n=a.pop());t=st(n.a,n.b,0,a));return t}function st(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=fi(e),r=fi(r));for(var t in e)if(!st(e[t],r[t],n+1,a))return!1;return!0}$(wr);$(function(e,r){return!wr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Ku=$(function(e,r){var n=I(e,r);return n<0?Mc:n?Rf:Tc}),kn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var ev=$(ar);function h(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var rv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});He(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(za(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(za(r).sort(function(n,a){var t=o(e,n,a);return t===Tc?0:t===Mc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var nv=$(Math.pow);$(function(e,r){return r%e});var av=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),tv=Math.PI,ov=Math.cos,iv=Math.sin,cv=Math.tan,lv=Math.atan;$(Math.atan2);function uv(e){return e}function vv(e){return e===1/0||e===-1/0}var $v=Math.ceil,fv=Math.floor,sv=Math.round,dv=Math.sqrt,Xo=Math.log,mv=isNaN;function pv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var bv=$(function(e,r){return e+r});function gv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function hv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function _v(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var wv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),yv=$(function(e,r){return r.split(e)}),xv=$(function(e,r){return r.join(e)}),Sv=y(function(e,r,n){return n.slice(e,r)});function Cv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Lv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Pv=$(function(e,r){return r.indexOf(e)>-1}),zv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var kv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function tc(e){return e+""}function Tv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Mv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Dv(e){return za(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fv(e){return{$:0,a:e}}function Gt(e){return{$:2,b:e}}var Vv=Gt(function(e){return typeof e=="boolean"?$e(e):Xe("a BOOL",e)}),Uv=Gt(function(e){return typeof e=="number"?$e(e):Xe("a FLOAT",e)}),Ev=Gt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Xe("a STRING",e)});function Rv(e){return{$:3,b:e}}var jv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Nv=$(function(e,r){return{$:10,b:r,h:e}}),Wv=$(function(e,r){return xr(e,[r])}),Yv=y(function(e,r,n){return xr(e,[r,n])});U(function(e,r,n,a){return xr(e,[r,n,a])});ge(function(e,r,n,a,t){return xr(e,[r,n,a,t])});He(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return we(o(no,"This is not valid JSON! "+a.message,r))}});var oc=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Xe("null",r);case 3:return Nn(r)?Ko(e.b,r,h):Xe("a LIST",r);case 4:return Nn(r)?Ko(e.b,r,Gv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Je(v)?v:we(o(si,n,v.a));case 7:var a=e.e;if(!Nn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Je(v)?v:we(o(Dc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Je(v))return we(o(si,i,v.a));t=ar(z(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Je(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ne(e.b,r);return Je(v)?Ne(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ne(d.a,r);if(Je(v))return v;s=ar(v.a,s)}return we(jf(Fe(s)));case 1:return we(o(no,e.a,r));case 0:return $e(e.a)}}function Ko(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Je(c))return we(o(Dc,i,c.a));t[i]=c.a}return $e(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Gv(e){return o(as,e.length,function(r){return e[r]})}function Xe(e,r){return we(o(no,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&ei(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return ei(e.g,r.g)}}function ei(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Hv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Iv(e){return{$:1,a:e}}function mr(e){return{$:2,b:e,c:null}}var dt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Jv(e){return{$:5,b:e}}var Ov=0;function Ht(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return It(r),r}function cc(e){return mr(function(r){r(Rr(Ht(e)))})}function lc(e,r){e.h.push(r),It(e)}var qv=$(function(e,r){return mr(function(n){lc(e,r),n(Rr(kn))})}),Ya=!1,ri=[];function It(e){if(ri.push(e),!Ya){for(Ya=!0;e=ri.shift();)Zv(e);Ya=!1}}function Zv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,It(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Jt(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Je(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ai(l,b.b,t(v))}return ai(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function Qv(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Kv(t,r)}return n}function Xv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Kv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(dt,l,Jv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o(dt,l,e.b))}var e$=$(function(e,r){return mr(function(n){e.g(r),n(Rr(kn))})});$(function(e,r){return o(qv,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function r$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ni=[],Ga=!1;function ai(e,r,n){if(ni.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=ni.shift();)n$(a.p,a.q,a.r);Ga=!1}}function n$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=a$(e,t,a,r.l);n[t]=t$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function a$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function t$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function o$(e){rr[e]&&nn(3)}$(function(e,r){return r});function i$(e,r){return o$(e),rr[e]={f:c$,u:r,a:l$},uc(e)}var c$=$(function(e,r){return function(n){return e(r(n))}});function l$(e,r){var n=P,a=rr[e].u,t=Rr(null);rr[e].b=t,rr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Je(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,vr=typeof document!="undefined"?document:{};function Ot(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function mt(e){return{$:0,a:e}}var vc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:qt(n),e:t,f:e,b:i}})}),jr=vc(void 0),u$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:qt(n),e:t,f:e,b:i}})}),v$=u$(void 0);function $$(e,r,n,a){return{$:3,d:qt(e),g:r,h:n,i:a}}var f$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Sr([e,r],function(){return e(r)})});y(function(e,r,n){return Sr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Sr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Sr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});He(function(e,r,n,a,t,i){return Sr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Sr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Sr([e,r,n,a,t,i,c,l],function(){return Yt(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return Sr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var $c=$(function(e,r){return{$:"a0",n:e,o:r}}),s$=$(function(e,r){return{$:"a1",n:e,o:r}}),fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Cr=$(function(e,r){return{$:"a3",n:e,o:r}}),d$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function m$(e){return e=="script"?"p":e}function p$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o($c,r.n,b$(e,r.o)):r});function b$(e,r){var n=co(r);return{$:r.$,a:n?p(ts,n<3?g$:h$,De(e),r.a):o($a,e,r.a)}}var g$=$(function(e,r){return z(e(r.a),r.b)}),h$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function qt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ti(c,t,i):c[t]=i}return r}function ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return pt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),pt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ot(c,_r(n===1?l[u]:l[u].b,r));return c}function pt(e,r,n){for(var a in n){var t=n[a];a==="a1"?_$(e,t):a==="a0"?x$(e,r,t):a==="a3"?w$(e,t):a==="a4"?y$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function _$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function w$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function y$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function x$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=S$(r,i),e.addEventListener(t,c,Zt&&{passive:co(i)<2}),a[t]=c}}var Zt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zt=!0}}))}catch{}function S$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Je(i)){for(var c=co(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function C$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function sc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=A$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!L$(d,m):d!==m)&&he(n,2,a,m),Oe(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:oi(e,r,n,a,P$);return;case 2:oi(e,r,n,a,z$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Qt(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function L$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function oi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Qt(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&C$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function P$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Oe(s,i[v],n,++a),a+=s.b||0}}function z$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,T=void 0,N=void 0;if(w===x){f++,Oe(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],E=u[m+1];if(R){var j=R.a,W=R.b;N=x===j}if(E){var F=E.a,Z=E.b;T=w===F}if(T&&N){f++,Oe(_,Z,t,f),$n(i,t,w,C,m,c),f+=_.b||0,f++,fn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,$n(i,t,x,C,m,c),Oe(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,fn(i,t,w,_,f),f+=_.b||0,f++,Oe(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(R&&j===F){f++,fn(i,t,w,_,f),$n(i,t,x,C,m,c),f+=_.b||0,f++,Oe(W,Z,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;fn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],b=u[m];$n(i,t,b.a,b.b,void 0,X),m++}(t.length>0||c.length>0||X)&&he(n,8,a,{w:t,x:c,y:X})}var dc="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+dc,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}fn(e,r,n+dc,a,t)}function mc(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=sn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=k$(t,a);t===e&&(e=i)}return e}function k$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return pt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return M$(e,r);case 5:return r.s(e);default:nn(10)}}function T$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function M$(e,r){var n=r.s,a=D$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ot(e,a),e}function D$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ot(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function Xt(e){if(e.nodeType===3)return mt(e.textContent);if(e.nodeType!==1)return mt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(Xt(v[a]),u);return p(jr,l,r,u)}function A$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=U(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Xt(l);return bc(i,function(v){var s=c(v),d=sc(u,s);l=pc(l,u,d,t),u=s})})});U(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=vr.title,v=vr.body,s=Xt(v);return bc(i,function(d){ca=c;var m=l(d),f=jr("body")(P)(m.eu),g=sc(s,f);v=pc(v,s,g,t),s=f,ca=0,u!==m.fL&&(vr.title=u=m.fL)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(vo,lo,mr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(vo,lo,mr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(vo,lo,mr(function(){history.replaceState({},"",r),e()}))});var F$={addEventListener:function(){},removeEventListener:function(){}},V$=typeof window!="undefined"?window:F$;y(function(e,r,n){return cc(mr(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,Zt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Je(n)?re(n.a):q});function gc(e,r){return mr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Iv(is(e)))})})}function U$(e){return mr(function(r){ua(function(){r(Rr(e()))})})}$(function(e,r){return gc(r,function(n){return n[e](),kn})});$(function(e,r){return U$(function(){return V$.scroll(e,r),kn})});y(function(e,r,n){return gc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,kn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var E$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var R$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(L(sl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(sl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var j$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/N$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function N$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Kt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),W$=y(function(e,r,n){return new Float64Array([e,r,n])}),Y$=function(e){return e[0]},G$=function(e){return e[1]},H$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var I$=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(hc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(hc(e,r,n),n)}$(_c);function wc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var J$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),dn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(dn);function bt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(bt);$(function(e,r){var n,a=Kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=dn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(dn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(dn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(dn(r,a)+e[14])/n,t});var O$=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var q$=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Z$=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var X$=new Float64Array(16),K$=new Float64Array(16),ef=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},rf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}He(yc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return yc(c,l,i,t,n,a)});function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}He(xc);U(function(e,r,n,a){return xc(e,r,n,a,-1,1)});function Sc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],R=r[3],E=r[4],j=r[5],W=r[6],F=r[7],Z=r[8],X=r[9],ce=r[10],fe=r[11],ie=r[12],me=r[13],Me=r[14],Se=r[15];return n[0]=a*C+l*T+d*N+b*R,n[1]=t*C+u*T+m*N+w*R,n[2]=i*C+v*T+f*N+x*R,n[3]=c*C+s*T+g*N+_*R,n[4]=a*E+l*j+d*W+b*F,n[5]=t*E+u*j+m*W+w*F,n[6]=i*E+v*j+f*W+x*F,n[7]=c*E+s*j+g*W+_*F,n[8]=a*Z+l*X+d*ce+b*fe,n[9]=t*Z+u*X+m*ce+w*fe,n[10]=i*Z+v*X+f*ce+x*fe,n[11]=c*Z+s*X+g*ce+_*fe,n[12]=a*ie+l*me+d*Me+b*Se,n[13]=t*ie+u*me+m*Me+w*Se,n[14]=i*ie+v*me+f*Me+x*Se,n[15]=c*ie+s*me+g*Me+_*Se,n}$(Sc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],R=r[9],E=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+s*E,n[10]=i*N+u*R+d*E,n[11]=0,n[12]=a*j+c*W+v*F+m,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/wc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,T=g-f,N=c*c*v+u,R=w+d,E=b+m,j=w-d,W=l*l*v+u,F=n[0],Z=n[1],X=n[2],ce=n[3],fe=n[4],ie=n[5],me=n[6],Me=n[7],Se=n[8],br=n[9],gr=n[10],Wa=n[11],ju=n[12],Nu=n[13],Wu=n[14],Yu=n[15];return a[0]=F*x+fe*_+Se*C,a[1]=Z*x+ie*_+br*C,a[2]=X*x+me*_+gr*C,a[3]=ce*x+Me*_+Wa*C,a[4]=F*T+fe*N+Se*R,a[5]=Z*T+ie*N+br*R,a[6]=X*T+me*N+gr*R,a[7]=ce*T+Me*N+Wa*R,a[8]=F*E+fe*j+Se*W,a[9]=Z*E+ie*j+br*W,a[10]=X*E+me*j+gr*W,a[11]=ce*E+Me*j+Wa*W,a[12]=ju,a[13]=Nu,a[14]=Wu,a[15]=Yu,a});function nf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(nf);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function af(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(af);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=_c(e,r,Kt),t=va(bt(n,a,ii),ii),i=va(bt(a,t,ci),ci),c=X$,l=K$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Sc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var li=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function eo(e){for(var r=0;e.b;e=e.b)r++;return r}var tf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},of=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),cf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),lf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),vf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),sf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),df=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},pf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},bf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},gf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},_f=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},wf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},yf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],xf=[pf,bf,gf,Cc,Lc,hf,_f,wf,yf];function vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Sf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Cf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(eo(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Lf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Pf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*eo(r.b),indexBuffer:null,buffers:{}}}function Pf(e,r){var n=new Uint32Array(eo(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function $i(e,r){return e+"#"+r}var zc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=$i(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=li++,v||(v=vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=li++,s||(s=vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Sf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=zf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=$i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),kf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Lf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Cf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Pc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,yn(J0(n),i.a),u=0;u<ui.length;u++){var T=n[ui[u]];T.toggle!==n.toggle&&T.enabled&&(xf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function zf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function kf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Tf=y(function(e,r,n){return $$(r,{g:n,f:{},h:e},Uf,Ef)}),Mf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Df=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Af=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Bf=$(function(e,r){e.contextAttributes.antialias=!0}),Ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Vf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Uf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(I0,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),tf(function(){return o(zc,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ef(e,r){return r.f=e.f,zc(r)}var A=ev,Wn=Qu,kc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),ro=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ro,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),fi=function(e){return p(ro,y(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Tc=1,Rf=2,Mc=0,we=function(e){return{$:1,a:e}},no=$(function(e,r){return{$:3,a:e,b:r}}),si=$(function(e,r){return{$:0,a:e,b:r}}),Dc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},jf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Nf=Lv,Wf=Hv,Be=tc,Pr=$(function(e,r){return o(xv,e,za(r))}),ao=$(function(e,r){return h(o(yv,e,r))}),Ac=function(e){return o(Pr,`
    `,o(ao,`
`,e))},Tn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(Tn,$(function(r,n){return n+1}),0,e)},Yf=rv,Gf=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Vr=$(function(e,r){return p(Gf,e,r,P)}),Bc=$(function(e,r){return p(Yf,e,o(Vr,0,Fr(r)-1),r)}),nr=Av,Fc=function(e){var r=nr(e);return 97<=r&&r<=122},Vc=function(e){var r=nr(e);return r<=90&&65<=r},Hf=function(e){return Fc(e)||Vc(e)},If=function(e){var r=nr(e);return r<=57&&48<=r},Jf=function(e){return Fc(e)||Vc(e)||If(e)},Fe=function(e){return p(Tn,A,P,e)},an=gv,Of=$(function(e,r){return`

(`+(Be(e+1)+(") "+Ac(qf(r))))}),qf=function(e){return o(Zf,e,P)},Zf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Hf(x)&&o(Nf,Jf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Fe(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Be(Fr(s))+" ways:"));return o(Pr,`

`,o(A,g,o(Bc,Of,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Fe(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Ac(o(Wf,4,f))+(`

`+m))}}),Ve=32,gt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=Iu,to=$v,oo=$(function(e,r){return Xo(r)/Xo(e)}),Qf=uv,xn=to(o(oo,2,Ve)),Uc=L(gt,0,xn,ht,ht),Ec=Ou,Rc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var jc=fv,_t=Ju,Te=$(function(e,r){return I(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},io=qu,Kf=$(function(e,r){e:for(;;){var n=o(io,Ve,e),a=n.a,t=n.b,i=o(A,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),es=function(e){var r=e.a;return r},rs=$(function(e,r){e:for(;;){var n=to(r/Ve);if(n===1)return o(io,Ve,e).a;var a=o(Kf,e,P),t=n;e=a,r=t;continue e}}),Nc=$(function(e,r){if(r.l){var n=r.l*Ve,a=jc(o(oo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(rs,t,r.l);return L(gt,_t(r.p)+n,o(Te,5,a*xn),i,r.p)}else return L(gt,_t(r.p),xn,ht,r.p)}),ns=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Nc,!1,{z:a,l:n/Ve|0,p:t});var i=Rc(p(Ec,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),as=$(function(e,r){if(e<=0)return Uc;var n=e%Ve,a=p(Ec,n,e-n,r),t=e-n-Ve;return S(ns,r,t,e,P,a)}),Je=function(e){return!e.$},D=Nv,Q=Vv,M=jv,se=Uv,$a=Wv,ts=Yv,De=Fv,co=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=jr("div"),os=function(e){return{$:2,a:e}},Wc=$(function(e,r){return e}),Yc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),kr=function(e){return e},is=kr,di=He(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),cs=Pv,zr=hv,Or=Sv,Mn=$(function(e,r){return e<1?r:p(Or,e,zr(r),r)}),ka=kv,Ta=function(e){return e===""},Ma=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Gc=Tv,mi=ge(function(e,r,n,a,t){if(Ta(t)||o(cs,"@",t))return q;var i=o(ka,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(di,e,o(Ma,c,t),u,r,n,a))}else return re(_e(di,e,t,q,r,n,a))}),pi=U(function(e,r,n,a){if(Ta(a))return q;var t=o(ka,"/",a);if(t.b){var i=t.a;return S(mi,e,o(Mn,i,a),r,n,o(Ma,i,a))}else return S(mi,e,"/",r,n,a)}),bi=y(function(e,r,n){if(Ta(n))return q;var a=o(ka,"?",n);if(a.b){var t=a.a;return L(pi,e,re(o(Mn,t+1,n)),r,o(Ma,t,n))}else return L(pi,e,q,r,n)});$(function(e,r){if(Ta(r))return q;var n=o(ka,"#",r);if(n.b){var a=n.a;return p(bi,e,re(o(Mn,a+1,r)),o(Ma,a,r))}else return p(bi,e,q,r)});var ls=zv,lo=function(e){},Dn=Rr,us=Dn(0),Hc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Tn,e,r,Fe(d)):L(Hc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),pr=y(function(e,r,n){return L(Hc,e,r,0,n)}),ee=$(function(e,r){return p(pr,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=dt,uo=$(function(e,r){return o(fa,function(n){return Dn(e(n))},r)}),vs=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Dn(o(e,a,t))},n)},r)}),$s=function(e){return p(pr,vs(A),Dn(P),e)},fs=e$,ss=$(function(e,r){var n=r;return cc(o(fa,fs(e),n))}),ds=y(function(e,r,n){return o(uo,function(a){return 0},$s(o(ee,ss(e),r)))}),ms=y(function(e,r,n){return Dn(0)}),ps=$(function(e,r){var n=r;return o(uo,e,n)});rr.Task=Xv(us,ds,ms,ps);var bs=uc("Task"),vo=$(function(e,r){return bs(o(uo,e,r))}),gs=B$,hs=pv,sa={$:1},Ic=function(e){return{$:2,a:e}},Da={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},_s=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Jc=function(e){var r=e.b;return o(We,Da,r)},tr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ws=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Jc(n):n;case 2:var i=a.a.cX;return(I(i+r.eJ,tn(n).db)>0?o(te,_s,tr(o(We,sa,t))):kr)(o(We,Ic({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yc,l.eA,Ke(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(We,Da,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Oc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ys=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),xs=$(function(e,r){return Fe(p(ys,e,r,P))}),qc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(xs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Ss=$(function(e,r){return p(qc,0,e,r)}),Cs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(h([a]),t)),c=o(Ss,e,i),l=o(Oc,e,i);if(l.b){var u=l.a,v=l.b;return o(We,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,m=s.b;return o(We,sa,{B:d,ab:P,T:m})}else return r}}),Ls=function(e){var r=e.b;return o(We,sa,r)},Ps=function(e){var r=e.b;return o(We,Ic({cX:tn(e).db}),r)},zs=$(function(e,r){switch(e.$){case 1:return Ls(r);case 2:return Jc(r);case 3:return Ps(r);default:var n=e.a;return o(Cs,n,r)}}),Zc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),ks=$(function(e,r){return Ke(r,{av:e(r.av)})}),Ts=function(e){return{$:3,a:e}},Ms=function(e){return{$:2,a:e}},Qc=$(function(e,r){return{$:0,a:e,b:r}}),Xc=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},$o=Mv,Ds=y(function(e,r,n){return o(tr,0/0,$o(o(e,r,n)))}),Kc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=wv,el=function(e){return p(As,A,P,e)},Bs=$(function(e,r){var n=o(Kc,function(a){return a!=="0"&&a!=="."},el(r));return ve(e&&n?"-":"",r)}),oe=tc,wt=bv,rl=Bv,nl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(wt,"0",nl(t))}else{var i=nr(r);return i>=48&&i<57?o(wt,rl(i+1),n):"0"}},yt=vv,Fs=mv,Aa=function(e){return o(wt,e,"")},al=y(function(e,r,n){return e<=0?n:p(al,e>>1,ve(r,r),e&1?ve(n,r):n)}),Sn=$(function(e,r){return p(al,e,r,"")}),xt=y(function(e,r,n){return ve(n,o(Sn,e-zr(n),Aa(r)))}),St=_v,tl=function(e){var r=o(ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Vs=function(e){var r=o(ao,"e",oe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(tr,0,Gc(o(ls,"+",t)?o(Mn,1,t):t)),c=tl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(tr,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Zc(Aa),an(ve(o(Sn,J(i),"0"),v))))):p(xt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Us=y(function(e,r,n){if(yt(n)||Fs(n))return oe(n);var a=n<0,t=tl(Vs(J(n))),i=t.a,c=t.b,l=zr(i)+r,u=ve(o(Sn,-l+1,"0"),p(xt,l,"0",ve(i,c))),v=zr(u),s=o(Te,1,l),d=o(e,a,p(Or,s,v,u)),m=p(Or,0,s,u),f=d?St(o(tr,"1",o(ye,nl,an(St(m))))):m,g=zr(f),b=f==="0"?f:r<=0?ve(f,o(Sn,J(r),"0")):I(r,zr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):ve(i+".",p(xt,r,"0",c));return o(Bs,a,b)}),ol=Us($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Es=Ds(ol),Rs=y(function(e,r,n){var a=o(oo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),il=Ku,Ba=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(il,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Xr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,v,s,S(G,1,g,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),Ct=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(il,e,t);switch(u){case 0:return S(Xr,a,t,i,p(Ct,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S(Xr,a,t,i,c,p(Ct,e,r,l))}}),bn=y(function(e,r,n){var a=p(Ct,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},gi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,x))}else return e},Ns=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,gi(r)}else break e;else return c.a,c.d,gi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,Kn(t),l);var u=cl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,Kn(m),f)}else return or}else return S(G,r,n,a,Kn(t),l)}else return or},gn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(gn,e,i),c);var u=cl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,v,s,d,o(gn,e,m),f)}else return or}else return S(G,n,a,t,o(gn,e,i),c);else return o(Ws,e,Yt(Ns,e,r,n,a,t,i,c))}),Ws=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(wr(e,a)){var l=js(c);if(l.$===-1){var u=l.b,v=l.c;return S(Xr,n,u,v,i,Kn(c))}else return or}else return S(Xr,n,a,t,i,o(gn,e,c))}else return or}),Ys=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),Yn=y(function(e,r,n){var a=r(o(Ba,e,n));if(a.$)return o(Ys,e,n);var t=a.a;return p(bn,e,t,n)}),Gs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Xc,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Qc,z(i,c),p(Rs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){return a.$===3?Ts(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,ye(function(a){return a.$===2?Ms(n):a}))}},Hs=function(e){return ks(Gs(e))},Is=$(function(e,r){return o(ee,Hs(e),r)}),Js=$(function(e,r){return Ke(r,{eA:o(Is,e,r.eA)})}),Os=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Ke(a,{B:o(Zc,Js(e),a.B)}))}),qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Zs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Ke(t,{B:o(qs,o(e,i.a,r),i)}))}),Qs=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(ws,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Os,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(zs,l,a.G)})}}),Xs=$(function(e,r){return o(We,Da,{B:z(e,r(e)),ab:P,T:P})}),Ks=r$,hi=Ks(P),da=Rv,Cn=Ev,ed=i$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se))))),rd=function(e){return{$:4,a:e}},nd={$:0},ad=ic,Ie=$(function(e,r){return o(fc,e,ad(r))}),H=Ie("className"),td=function(e){var r=e.b.B;return r.b},ma=Ie("id"),od=f$,pa=od,id=s$,ne=id,cd={$:1},ld=function(e){return{$:3,a:e}},ud=function(e){return{$:5,a:e}},_i=jr("a"),fo=jr("button"),wi=function(e){return o(Ie,"href",p$(e))},vd=Cr("clip-rule"),Ce=Cr("d"),$d=Cr("fill"),ll=vc("http://www.w3.org/2000/svg"),fd=ll("svg"),sd=Cr("viewBox"),dd=o(d$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=fd(h([sd("0 0 24 24"),$d("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),dd("http://www.w3.org/2000/svg")])),md=Cr("fill-rule"),Le=ll("path"),Tr={eD:Ee(h([o(Le,h([Ce("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(h([o(Le,h([Ce("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(h([o(Le,h([Ce("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(h([o(Le,h([Ce("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([Ce("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(h([o(Le,h([Ce("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([Ce("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(h([o(Le,h([Ce("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(h([o(Le,h([Ce("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(h([o(Le,h([Ce("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(h([o(Le,h([Ce("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(h([o(Le,h([md("evenodd"),vd("evenodd"),Ce("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(h([o(Le,h([Ce("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(h([o(Le,h([Ce("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},pd=function(e){return{$:0,a:e}},ul=$c,vl=$(function(e,r){return o(ul,e,pd(r))}),so=function(e){return o(vl,"click",De(e))},yi=Ie("target"),bd=Ie("title"),Lt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Lt,e,i),o(Lt,e,c))}),gd=mt,sr=gd,hd=function(e){return p(ro,y(function(r,n,a){return o(A,n,a)}),P,e)},_d=$(function(e,r){return{$:3,a:e,b:r}}),wd=$(function(e,r){return{$:2,a:e,b:r}}),yd=$(function(e,r){return{$:0,a:e,b:r}}),xd=$(function(e,r){return{$:1,a:e,b:r}}),Fa=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Sd=L(Fa,0/255,0/255,0/255,1),Cd=ic,$l=$(function(e,r){return o(fc,e,Cd(r))}),Ld=$l("checked"),Ze=sv,Pd=y(function(e,r,n){return ve(o(Sn,e-zr(n),Aa(r)),n)}),ba=av,fl=function(e){var r=function(n){return n<10?Be(n):Aa(rl(87+n))};return e<16?r(e):ve(fl(e/16|0),r(o(ba,16,e)))},zd=o(te,fl,o(Pd,2,"0")),mo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},kd=function(e){var r=mo(e),n=r.cM,a=r.cc,t=r.b5;return o(Pr,"",o(A,"#",o(ee,o(te,Ze,zd),h([n*255,a*255,t*255]))))},Pt=Ie("htmlFor"),zt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Td=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Va=$(function(e,r){return p(pr,Td(e),P,r)}),sl=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Md=R$,Dd=Dv,Ad=$(function(e,r){if(r.$)return we(e);var n=r.a;return $e(n)}),Bd=E$,Fd=function(e){return o(Bd,{ew:!1,fg:!1},e)},Ua=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Vd=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return $e(e(n))}}),Ud=function(e){return{$:2,a:e}},Ed=function(e){return{$:0,a:e}},Rd=function(e){return{$:1,a:e}},Ha=$(function(e,r){return nr(r)-nr(e)}),Ia=y(function(e,r,n){var a=nr(n);return I(nr(e),a)<1&&I(a,nr(r))<1}),jd=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):we(Rd(r))},a=p(Ia,"0","9",r)?$e(o(Ha,"0",r)):p(Ia,"a","z",r)?$e(10+o(Ha,"a",r)):p(Ia,"A","Z",r)?$e(10+o(Ha,"A",r)):we(Ed(r));return o(ga,n,a)}),dl=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return $e(c+l*e)},o(dl,e,i))},o(jd,e,t))}),Nd=$(function(e,r){return 2<=e&&e<=36?o(dl,e,St(r)):we(Ud(e))}),Wd=Nd(16),Yd=y(function(e,r,n){return L(Fa,e,r,n,1)}),ml=U(function(e,r,n,a){return L(Fa,e,r,n,a)}),An=nv,Gd=$(function(e,r){var n=o(An,10,e);return Ze(r*n)/n}),Hd=Cv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=el(n);if(a.b&&!a.b.b){var t=a.a;return Dd(h([t,t]))}else return n};return o(te,Hd,o(te,function(n){return o(ye,function(a){return p(Md,1,a,n)},Fd(e))},o(te,zt(Ua),o(te,ye(function(n){return n.fG}),o(te,ye(Va(kr)),o(te,Ad("Parsing hex regex failed"),ga(function(n){var a=o(ee,o(te,r,o(te,Wd,Vd(Qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(ml,t/255,c/255,u/255,o(Gd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(Yd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ha=jr("input"),kt=jr("label"),Tt=Ie("name"),pl=$(function(e,r){return p(pr,M,r,e)}),Jd=o(pl,h(["target","checked"]),Q),Od=function(e){return o(vl,"change",o($a,e,Jd))},qd=function(e){return z(e,!0)},Zd=function(e){return{$:1,a:e}},Qd=$(function(e,r){return o(ul,e,Zd(r))}),Xd=o(pl,h(["target","value"]),Cn),po=function(e){return o(Qd,"input",o($a,qd,o($a,e,Xd)))},bl=Ie("max"),gl=Ie("min"),hl=function(e){return o(Ie,"step",e)},_a=Ie("type"),bo=Ie("value"),xi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(O,P,h([o(kt,h([Pt(r)]),h([o(O,h([H("relative w-full")]),h([o(O,h([H("inline-block")]),h([sr(r)])),o(O,h([H("inline-block float-right")]),h([sr(oe(n))]))]))])),o(ha,h([_a("range"),o(ne,"width","100%"),ma(r),Tt(r),gl(oe(a)),bl(oe(t)),bo(oe(n)),hl(oe(i)),po(o(te,$o,o(te,tr(42),c)))]),P)]))},Kd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),em=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,h([H("h-12 py-4")]),h([o(kt,h([H("block"),Pt(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),Tt(e),Od(_d(e)),Ld(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return xi({cf:e,cr:i,cv:t,cz:yd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return xi({cf:e,cr:i,cv:t,cz:o(te,Ze,xd(e)),cV:1,c0:c});default:var c=r.a;return o(O,P,h([o(O,h([o(ne,"margin-bottom","6px")]),h([o(kt,h([Pt(e)]),h([sr(e)]))])),o(ha,h([_a("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),ma(e),Tt(e),po(function(l){return o(wd,e,o(Kd,Sd,Id(l)))}),bo(kd(c))]),P)]))}}),rm=function(e){return o(O,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(O,h([H("text-lg pb-2")]),h([sr(e.fh)])),o(O,h([H("pl-2 pr-2")]),hd(o(Lt,em,e.av)))]))},nm=function(e){return o(O,h([H("text-xs text-white60")]),o(ee,rm,e))},am=function(e){return o(O,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(ol,3,tn(e).db))]))},tm=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Ze(60/(tn(e).db-n))},o(ye,o(te,es,function(n){return n.db}),Ua(o(Oc,59,r))))},om=function(e){return o(O,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=tm(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Be(n)+" Fps")])}())},im=function(e){return{$:0,a:e}},cm=function(e){var r=e.b.T;return Fr(r)},lm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},um=function(e){return o(ha,h([H("absolute w-full"),_a("range"),gl(Be(0)),bl(Be(lm(e)-1)),bo(Be(cm(e))),hl(Be(1)),po(o(te,$o,o(te,tr(42),o(te,Ze,im))))]),P)},Si={$:1},Ci={$:3},Li={$:2},Mt=function(e){return!e.b},_l=$l("disabled"),Ja=y(function(e,r,n){return o(fo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),_l(e),so(r)]),h([sr("REC")]))}),Oa=y(function(e,r,n){return o(fo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),_l(e),so(n)]),h([o(O,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),vm=function(e){var r=e.a,n=e.b.ab;return o(O,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(Ja,!1,Si,"text-red-500 font-bold");case 1:return p(Ja,!1,Li,"text-white60 hover:text-white80 font-bold");default:return p(Ja,!0,Li,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Oa,Mt(n),Tr.fq,Ci);case 1:return p(Oa,Mt(n),Tr.fq,Ci);default:return p(Oa,!1,Tr.fp,Si)}}()]))},$m=function(e){return o(O,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([um(e),vm(e),om(e),am(e)]))},fm=function(e){var r=e.a;return wr(r,Da)},sm=$(function(e,r){var n=fm(r.G)?o(O,P,P):o(O,h([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fs.fU+.5*e.cS.fS)+"px"),o(ne,"top",oe(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(O,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Tr.fs]))]));return o(O,P,h([n]))}),dm=$(function(e,r){var n=o(fo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),so(cd),bd("Distraction Free Mode")]),h([Tr.f0])),a=40,t=260,i=o(O,h([H("absolute w-8 bottom-12")]),h([o(_i,h([H("text-twitterBlue40 hover:text-twitterBlue"),wi("https://twitter.com/AzizErkalSelman"),yi("_blank")]),h([Tr.fN]))])),c=80,l=o(O,h([H("absolute w-8 bottom-2")]),h([o(_i,h([H("text-githubCat40 hover:text-githubCat"),wi("https://github.com/erkal/elm-3d-playground-exploration"),yi("_blank")]),h([Tr.eQ]))])),u=e.cS.fS>640?B(e.cS.eW,a+t,e.cS.fS-(a+t)):B(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,d=u.c;return r.aL?o(O,h([H("fixed w-10 h-10 p-1")]),h([n])):o(O,P,h([o(O,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),h([n,i,l])),o(O,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),h([o(pa,ld,nm(tn(r.G).eA))])),o(O,h([H("absolute bottom-0"),o(ne,"left",oe(s)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(d)+"px")]),h([o(pa,ud,$m(r.G))])),o(sm,e,r)]))}),mm=y(function(e,r,n){var a=td(n.G),t=tn(n.G);return o(O,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",oe(t.cS.fS)+"px"),o(ne,"height",oe(t.cS.eW)+"px")]),h([o(O,h([H("fixed")]),h([o(pa,Wc(nd),o(e,t,a))])),o(O,h([ma("gui")]),h([o(dm,t,n),o(pa,rd,o(r,t,a))]))]))}),pm=He(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(Qs,r,i,u,v),hi)}),l=function(u){var v=o(Yc,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(Xs,v,a)},hi)};return gs({e0:l,fH:Wc(ed(os)),fO:c,fQ:o(mm,e,t)})}),bm=U(function(e,r,n,a){return _e(pm,e,r,n,a,$(function(t,i){return o(O,P,P)}),y(function(t,i,c){return c}))}),gm=function(e){return{}},hm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),wl=or,_m=function(e){return p(Tn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),wl,e)},wm=y(function(e,r,n){return p(hm,e,r,_m(n))}),qa=wm,ir=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Qc,z(a,t),n))}),Pi=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Xc,z(a,t),n))}),ym=h([p(qa,"Camera",!0,h([p(ir,"camera x",z(0,16),8),p(ir,"camera y",z(0,10),0),p(ir,"camera z",z(0,16),6)])),p(qa,"Parameters",!0,h([p(ir,"radius",z(0,6),1),p(Pi,"number of cubes",z(1,100),19),p(Pi,"number of waves",z(1,20),2),p(ir,"cube size",z(.1,4),1),p(ir,"cycle duration",z(1,10),5),p(ir,"wave height",z(.5,6),1.5)])),p(qa,"Colors and light",!0,h([p(ir,"saturation",z(0,1),.8),p(ir,"lightness",z(0,1),.7)]))]),xm=$(function(e,r){return r}),go=$(function(e,r){return{$:0,a:e,b:r}}),Ue=function(e){var r=e;return J(r)},Za=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),fr=function(e){return e},Sm=fr({fU:-1,fY:0,c5:0}),Cm=fr({fU:0,fY:-1,c5:0}),yl=fr({fU:0,fY:0,c5:-1}),xl=fr({fU:1,fY:0,c5:0}),ho=fr({fU:0,fY:1,c5:0}),_o=fr({fU:0,fY:0,c5:1}),dr=function(e){return e},pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Lm=He(function(e,r,n,a,t,i){var c=o(Za,n,i)?_o:yl,l=o(Za,r,t)?ho:Cm,u=o(Za,e,a)?xl:Sm,v=B(Ue(o($r,e,a)),Ue(o($r,r,t)),Ue(o($r,n,i))),s=p(pe,o(Qa,e,a),o(Qa,r,t),o(Qa,n,i)),d=dr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Mr=function(e){var r=e;return r.fU},Dr=function(e){var r=e;return r.fY},Ar=function(e){var r=e;return r.c5},Pm=$(function(e,r){return _e(Lm,Mr(e),Dr(e),Ar(e),Mr(r),Dr(r),Ar(r))}),Dt=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),zm=$(function(e,r){var n=r/2;return o(go,e,o(Pm,p(Dt,-n,-n,-n),p(Dt,n,n,n)))}),Ur=tv,At=function(e){return e*Ur/180},km=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Ba,e,r.av))}),Tm=$(function(e,r){return o(tr,0,Ua(o(Va,km(e),r)))}),Mm=$(function(e,r){return o(Tm,e,r.eA)}),ur=Mm,Dm=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Ba,e,r.av))}),Am=$(function(e,r){return o(tr,0,Ua(o(Va,Dm(e),r)))}),Bm=$(function(e,r){return o(Am,e,r.eA)}),zi=Bm,wo=function(e){return{$:5,a:e}},Fm=function(e){return wo(e)},Vm=U(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Fa,f,m,d,a)}),Um=y(function(e,r,n){return L(Vm,e,r,n,1)}),Bt=function(e){return{$:0,a:e}},Sl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Cl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Xa=function(e){return p(Cl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Bn=W$,Em=function(e){var r=mo(e),n=r.cM,a=r.cc,t=r.b5;return p(Bn,Xa(n),Xa(a),Xa(t))},Rm=function(e){return p(Sl,0,Bt(Em(e)),Bt(0))},Ll=$(function(e,r){return{$:2,a:e,b:r}}),Pl=$(function(e,r){return{$:4,a:e,b:r}}),zl=$(function(e,r){return{$:3,a:e,b:r}}),kl=$(function(e,r){return{$:1,a:e,b:r}}),jm=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),Nm=function(e){var r=e;return r},yo=function(e){var r=e;return Nm(r.er)},xo=function(e){var r=e;return r.aK},on=function(e){var r=e;return r.cA},Fn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),Nr=function(e){var r=e;return r.c3},Wr=function(e){var r=e;return r.c4},Yr=function(e){var r=e;return r.c6},Wm=$(function(e,r){return dr({cA:o(Fn,e,on(r)),c3:Nr(r),c4:Wr(r),c6:Yr(r)})}),Ym=$(function(e,r){return{er:o(Wm,e,yo(r)),aK:xo(r)}}),So=$(function(e,r){return{eH:r,cA:e}}),Gm=$(function(e,r){var n=r;return o(So,o(Fn,e,n.cA),n.eH)}),Hm=$(function(e,r){var n=r;return{k:o(Gm,e,n.k),e9:n.e9,fu:n.fu}}),Co=function(e){var r=e;return r},Im=function(e){return e},Tl=$(function(e,r){var n=Co(r),a=n.a,t=n.b;return Im(z(e(a),e(t)))}),Jm=$(function(e,r){return o(Tl,Fn(e),r)}),Lo=function(e){var r=e;return r.ey},Po=function(e){var r=e;return r.fu},Ml=$(function(e,r){return{ey:r,fu:Ue(e)}}),Om=$(function(e,r){return o(Ml,Po(r),o(Fn,e,Lo(r)))}),Dl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),qm=$(function(e,r){return o(Dl,Fn(e),r)}),zo=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(jm,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(go,s,o(Ym,i,c));case 1:var s=r.a,l=r.b;return o(kl,s,o(qm,i,l));case 3:var s=r.a,u=r.b;return o(zl,s,o(Om,i,u));case 2:var s=r.a,v=r.b;return o(Ll,s,o(Hm,i,v));case 4:var s=r.a,d=r.b;return o(Pl,s,o(Jm,i,d));default:var m=r.a;return wo(o(ee,zo(B(n,a,t)),m))}}),Zm=function(e){return zo(B(0,e,0))},Qm=function(e){return zo(B(0,0,e))},Kr=function(e){return e},Er=ov,en=iv,ea=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=en(c),v=a.eH,s=v,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c5*u,T=l*C,N=2*(w-T),R=2*(w+T),E=d*C,j=2*(E+b),W=2*(E-b),F=g*C,Z=2*(F-m),X=2*(F+m),ce=C*C,fe=1-2*(x+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+N*i.fY+j*i.c5,fY:R*i.fU+ie*i.fY+Z*i.c5,c5:W*i.fU+X*i.fY+_*i.c5}}),Vn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=en(c),v=a.cA,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,w=b.fU*u,x=l*w,_=w*w,C=b.fY*u,T=l*C,N=w*C,R=C*C,E=1-2*(_+R),j=b.c5*u,W=l*j,F=2*(N-W),Z=2*(N+W),X=w*j,ce=2*(X+T),fe=2*(X-T),ie=C*j,me=2*(ie-x),Me=2*(ie+x),Se=j*j,br=1-2*(R+Se),gr=1-2*(_+Se);return{fU:s.fU+br*d+F*m+ce*f,fY:s.fY+Z*d+gr*m+me*f,c5:s.c5+fe*d+Me*m+E*f}}),Xm=y(function(e,r,n){return dr({cA:p(Vn,e,r,on(n)),c3:p(ea,e,r,Nr(n)),c4:p(ea,e,r,Wr(n)),c6:p(ea,e,r,Yr(n))})}),Km=y(function(e,r,n){return{er:p(Xm,e,r,yo(n)),aK:xo(n)}}),e0=$(function(e,r){var n=o(Vn,e,r),a=o(ea,e,r);return function(t){var i=t;return o(So,n(i.cA),a(i.eH))}}),r0=y(function(e,r,n){var a=n;return{k:p(e0,e,r,a.k),e9:a.e9,fu:a.fu}}),n0=y(function(e,r,n){return o(Tl,o(Vn,e,r),n)}),a0=y(function(e,r,n){return o(Ml,Po(n),p(Vn,e,r,Lo(n)))}),t0=y(function(e,r,n){return o(Dl,o(Vn,e,r),n)}),Al=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(go,l,p(Km,e,r,a));case 1:var l=n.a,t=n.b;return o(kl,l,p(t0,e,r,t));case 3:var l=n.a,i=n.b;return o(zl,l,p(a0,e,r,i));case 2:var l=n.a,c=n.b;return o(Ll,l,p(r0,e,r,c));case 4:var l=n.a,u=n.b;return o(Pl,l,p(n0,e,r,u));default:var v=n.a;return wo(o(ee,o(Al,e,r),v))}}),Un={fU:0,fY:0,c5:0},ko=ho,o0=o(So,Un,ko),i0=$(function(e,r){return p(Al,o0,Kr(e),r)}),c0=$(function(e,r){return(r-jc(r/e)*e)/e}),l0=function(e){return 2*Ur*e},u0=U(function(e,r,n,a){return e+(r-e)*(1+Er(l0(o(c0,n,a))))/2}),v0=function(e){var r=o(ur,"wave height",e),n=o(zi,"number of waves",e),a=o(zi,"number of cubes",e),t=o(ur,"cycle duration",e),i=function(c){var l=c/a,u=n*t*l;return o(i0,At(360)*l,o(Zm,L(u0,-r,r,t,e.db+u),o(Qm,o(ur,"radius",e),o(zm,Rm(p(Um,l,o(ur,"saturation",e),o(ur,"lightness",e))),o(ur,"cube size",e)))))};return Fm(o(ee,i,o(Vr,0,a-1)))},$0=lv,hr=dv,f0=$(function(e,r){var n=e,a=r,t=a.c5-n.c5,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Te,J(c),o(Te,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c5:u/d})}else return q}),Ka=function(e){return e},To=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),ra=function(e){var r=e,n=o(Te,J(r.fU),o(Te,J(r.fY),J(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c5:a/c})}else return q},wa=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),s0=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c5*n.c5}),Bl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),d0=$(function(e,r){var n=e,a=r;return I(a,n)<0}),m0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),p0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c5*n.c5;return{fU:n.fU*t,fY:n.fY*t,c5:n.c5*t}}),b0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},qe=0,Fl={fU:0,fY:0,c5:0},g0=y(function(e,r,n){return o(zt,function(a){var t=o(m0,o(p0,a,r),r);return o(zt,function(i){var c=o(To,r,e),l=o(s0,n,c),u=o(Bl,qe,l)?c:o(d0,qe,l)?b0(c):Fl;return o(ye,function(v){return B(a,i,v)},ra(u))},ra(t))},ra(e))}),h0=function(e){var r=e,n=J(r.c5),a=J(r.fY),t=J(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=hr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(I(a,n)<1){var i=hr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},Mo=function(e){var r=h0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return z(r,c)},qr=function(e){var r=e;return r},_0=$(function(e,r){var n=Mo(e),a=n.a,t=n.b;return dr({cA:r,c3:a,c4:t,c6:e})}),w0=function(e){var r=o(wa,e.aR,e.dj),n=qr(e.ei),a=o(To,r,n),t=p(g0,r,n,a);if(t.$){var v=ra(r);if(v.$){var d=Mo(e.ei),m=d.a,f=d.b;return dr({cA:e.dj,c3:f,c4:e.ei,c6:m})}else{var s=v.a;return o(_0,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return dr({cA:e.dj,c3:u,c4:l,c6:c})}},y0=function(e){return{$:0,a:e}},na=function(e){var r=e;return .5*r},x0=cv,S0=function(e){var r=e;return x0(r)},C0=function(e){var r=na(Ue(e.ej)),n=S0(r);return{cL:y0(n),c1:e.c1}},L0=function(e){var r=e.aR,n=e.dj,a=e.ei;return C0({ej:Kr(2*$0(.5)),c1:w0({dj:Ka(n),aR:Ka(r),ei:o(tr,ho,o(f0,Un,Ka(a)))})})},P0=function(e){return e},Br=function(e){return e},z0=function(e){return Br(.01*e)},ki=function(e){return e},k0=function(e){return e},T0=function(e){return{$:0,a:e}},M0=T0,D0={$:3},A0=D0,B0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),F0=B0,V0=$(function(e,r){return r.b?p(pr,A,r,e):e}),Ye=function(e){return p(pr,V0,P,e)},Do=$(function(e,r){return Ye(o(ee,e,r))}),U0=function(e){return{$:1,a:e}},E0=U0,R0=function(e){return o(Cr,"height",Be(e))},j0=function(e){return v$(m$(e))},N0=j0,W0=function(e){return{$:2,a:e}},Y0=W0,G0=function(e){return o(Pr,"",e)},H0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ze(l*1e3)/1e3},c=function(l){return Ze(l*1e4)/100};return G0(h(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},I0=$(function(e,r){switch(r.$){case 0:return o(Mf,e,r);case 1:return o(Df,e,r);case 2:return o(Af,e,r);case 3:return o(Bf,e,r);case 4:return o(Ff,e,r);default:return o(Vf,e,r)}}),J0=$(function(e,r){switch(r.$){case 0:return o(cf,e,r);case 1:return o(lf,e,r);case 2:return o(uf,e,r);case 3:return o(vf,e,r);case 4:return o($f,e,r);case 5:return o(ff,e,r);case 6:return o(sf,e,r);case 7:return o(df,e,r);default:return mf(e)}}),O0=y(function(e,r,n){return p(Tf,e,r,n)}),Ti=function(e){var r=e;return r},cn=O$,et=L(cn,1,1,1,1),Qe=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),q0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(q0,n*a/t,n,n*(1-a-t)/t)}),Q0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ao=$(function(e,r){return Q0(o(Z0,e,r))}),Vl=$(function(e,r){return{dp:wr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),er=ef,X0=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},rt=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(cn,a.bX,a.bX,a.bX,i);return _e(t,e,c,X0(a),a.dp,r,n)}),Ul=He(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Vl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(rt,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(A,S(rt,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(A,S(rt,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Tn,L(Ul,e,r,n,a),i,T)}}),K0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),El=K0,Bo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ep=function(e){var r=e.Z,n=e.W,a=e.V;return L(Bo,518,r,n,a)},rp=$(function(e,r){return{$:6,a:e,b:r}}),np=rp,Rl=h([ep({V:1,W:0,Z:!1}),L(El,!1,!1,!1,!1),o(np,0,1)]),rn=519,Fo=8,jl=15,Zr=7681,ap={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=of,tp=$(function(e,r){return{$:0,a:e,b:r}}),op=tp({df:1,$7:0,dV:5}),Ae=j$,ip=op(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),cp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Vo=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(lp,a,t,i)))}),Uo=function(e){return p(Vo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Eo=function(e){return S(ae,h([Uo(e),L(El,!1,!1,!1,!1)]),cp,ap,ip,{})},up=Eo({a8:Zr,co:0,cN:Fo,bl:rn,c2:jl,bt:Zr,bu:Zr}),vp=516,Mi=5386,xe=7680,$p=function(e){return o(An,2,e+4)},Nl=function(e){return Eo({a8:xe,co:jl,cN:Fo,bl:vp,c2:$p(e),bt:Mi,bu:Mi})},fp=y(function(e,r,n){return Ye(h([p(Qe,e,n,Rl),h([Nl(r),up])]))}),sp=$(function(e,r){return Ye(o(Bc,fp(e),r))}),dp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Bo,513,r,n,a)},mp=dp({V:1,W:0,Z:!0}),pp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},bp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return pp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},gp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Di=$(function(e,r){var n=e,a=r;return p(gp,32774,n,a)}),hp=1,Ai=771,_p=770,Ro=bp({bv:0,aH:o(Di,hp,Ai),by:0,bA:o(Di,_p,Ai),bF:0,bV:0}),Gr=h([mp,Ro]),wp=function(e){var r=e;return r.dO},yp=function(e){var r=e;return r.dP},Wl=function(e){var r=e;return r.dQ},xp=function(e){var r=e;return r.dR},Sp=function(e){var r=e;return r.dS},Yl=function(e){var r=e;return r.dT},Gl=function(e){return B(o($r,xp(e),wp(e)),o($r,Sp(e),yp(e)),o($r,Yl(e),Wl(e)))},Bi=function(e){var r=e;return on(r)},Cp=function(e){return e},Lp=function(e){return dr({cA:Cp({fU:e.H,fY:e.I,c5:e.J}),c3:fr({fU:e.q,fY:e.r,c5:e.s}),c4:fr({fU:e.t,fY:e.u,c5:e.v}),c6:fr({fU:e.w,fY:e.x,c5:e.y})})},nt=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Hl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Il=$(function(e,r){return{cA:o(Hl,e,on(r)),c3:o(nt,e,Nr(r)),c4:o(nt,e,Wr(r)),c6:o(nt,e,Yr(r))}}),ya=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Te,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),Pp=$(function(e,r){var n=ya(r),a=ya(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},zp=function(e){var r=e;return B(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),kp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(Ue(a)),c=na(Ue(n)),l=na(Ue(t)),u=zp(r),v=u.a,s=u.b,d=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,d)}}),Fi=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,d=Ge(Yr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c5),f=Ge(Wr(e)),g=J(l*f.fU)+J(c*f.fY)+J(i*f.c5),b=Ge(Nr(e)),w=J(l*b.fU)+J(c*b.fY)+J(i*b.c5),x=o(kp,B(w,g,m),o(Hl,e,p(Dt,s,v,u)));if(a.$)return re(x);var _=a.a;return re(o(Pp,_,x))}),Ft=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Fi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Fi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Ft,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Il,Lp(v),e),m=r*v.bX,f=e,g=r,b=L(Ft,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),ln=Y$,un=G$,vn=H$,Jl=function(e){return{$:4,a:e}},Tp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Jl(o(Tp,e,P))},Mp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Dp=function(e){var r=e;return r},Vi=Eo({a8:Zr,co:0,cN:Fo,bl:rn,c2:255,bt:Zr,bu:Zr}),Ap=function(e){var r=e,n=o(Te,J(r.fU),o(Te,J(r.fY),J(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return qe},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),mn=z({bd:o(je,Pe,Pe),bK:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe)},L(cn,0,0,0,0)),le=$(function(e,r){var n=r;return e*n}),Ui=function(e){var r=e;return-r},Ol=514,ql=function(e){var r=e.Z,n=e.W,a=e.V;return L(Bo,515,r,n,a)},Zl=240,Bp=h([ql({V:1,W:0,Z:!0}),Uo({a8:xe,co:Zl,cN:0,bl:Ol,c2:0,bt:xe,bu:xe}),Ro]),Fp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Ue(a),l=c,u=Ue(t),v=u,s=n.cL;if(s.$){var m=s.a;return yt(v)?er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return yt(v)?er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),Vp=function(e){return h([ql({V:1,W:0,Z:!0}),Uo({a8:xe,co:Zl,cN:e,bl:Ol,c2:0,bt:xe,bu:xe}),Ro])},Up=y(function(e,r,n){return Ye(o(ee,function(a){var t=a<<4,i=L(cn,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Qe,e,z(r,i),Vp(t))},o(Vr,1,o(An,2,n)-1)))}),Ln=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Qr=function(e){var r=e;return r},Ep=rf,Ei=function(e){var r=e;return Ln(Yr(r))},Ql=xl,Xl=_o,Rp={cA:Un,c3:Ql,c4:ko,c6:Xl},Ea=function(e){var r=e;return r},jp=function(e){var r=Ea(on(e)),n=Ge(Yr(e)),a=Ge(Wr(e)),t=Ge(Nr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Np=$(function(e,r){var n=r;return jp(o(Il,n,e))}),Wp=function(e){return o(Np,Rp,e)},Yp=function(e){var r=e;return r.c1},Gp=function(e){var r=e;return Nr(r)},Hp=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Ip=function(e){var r=e;return Wr(r)},Jp=function(e){var r=Yp(e.ev),n=dr({cA:Bi(r),c3:Gp(r),c4:Ip(r),c6:Ln(Ei(r))}),a=En(e.aP),t=a,i=L(Ft,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Wp(r),u=o(le,.99,o(ue,Ue(e.aJ),Ui(Wl(c)))),v=Gl(c),s=v.a,d=v.b,m=v.c,f=Ap(p(Hp,s,d,m)),g=o(le,1.01,o(hn,f,Ui(Yl(c)))),b=o(Fp,e.ev,{eq:e.eq,eP:g,fi:u}),w=Ep(b).dM,x=w?Ge(Ln(Ei(r))):Qr(Bi(r)),_=function(){var ie=e.bZ;switch(ie.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var me=ie.a;return z(3,me);case 4:var me=ie.a;return z(4,me);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,R=N,E=o(Ao,R,e.b$),j=E,W=er({dx:0,dy:x.fU,dz:ln(j),dA:e.ec,dB:0,dC:x.fY,dD:un(j),dE:Dp(f),dF:0,dG:x.c5,dH:vn(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),F=_e(Ul,W,l,b,Mp,t,{M:P,U:P,fB:P}),Z=e.bJ;switch(Z.$){case 0:var X=Z.a;return Ye(h([p(Qe,F.M,z(X,et),Gr),p(Qe,F.U,mn,Gr)]));case 1:var X=Z.a;return Ye(h([p(Qe,F.M,mn,Gr),h([Vi]),p(Qe,F.fB,X.bd,Rl),h([Nl(0)]),p(Qe,F.M,z(X,et),Bp),p(Qe,F.U,mn,Gr)]));default:var ce=Z.a,fe=Z.b;return Ye(h([p(Qe,F.M,z(fe,et),Gr),h([Vi]),o(sp,F.fB,ce),p(Up,F.M,fe,Fr(ce)),p(Qe,F.U,mn,Gr)]))}},Op=function(e){return o(Cr,"width",Be(e))},qp=$(function(e,r){var n=h([E0(1),Y0(0),M0(!0),L(F0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,A0,n),"1",1);default:var T=C.a;return B(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ti(v),d=o(ne,"height",Be(s)+"px"),m=Ti(u),f=m/s,g=o(Do,function(C){return Jp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),b=o(ne,"width",Be(m)+"px"),w=e.aI,x=w,_=H0(x);return p(N0,"div",h([o(ne,"padding","0px"),b,d]),h([z(i,p(O0,t,h([Op(Ze(m*c)),R0(Ze(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),Zp=function(e){return o(qp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kl=function(e){return e},Ri=Kl({fU:.31271,fY:.32902}),Qp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Ao,r.cd,r.b6),u=l;return{by:vn(u),ex:n,bF:un(u),cJ:0,bV:ln(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Xp=function(e){return e},Kp=function(e){return Xp(1.2*o(An,2,e))},at=function(e){return e},eb={$:0},rb=eb,eu=function(e){return e},ji=function(e){var r=e;return r},nb=function(e){e:for(;;){if(wr(e.e2,qe)&&wr(e.e3,qe))return Pe;if(o(Bl,Ue(e.e2),Ue(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=J(ji(e.e3)/Ur),a=J(ji(e.e2)/Ur),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Ao,eu(1),e.b6),v=u;return{by:a*vn(v),ex:!1,bF:a*un(v),cJ:n/a,bV:a*ln(v),cZ:3,fU:i,fY:c,c5:l}}}},Ni=function(e){return nb({b6:e.b6,e2:e.cd,e3:qe,ei:e.ei})},ab=function(e){var r=e;return r},ru=function(e){var r=p(Cl,1667,25e3,ab(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kl({fU:n,fY:a})},nu=function(e){return e},tb=ru(nu(12e3)),ob=ru(nu(5600)),ib=function(e){return{$:2,a:e}},cb=function(e){return ib(e)},lb=$(function(e,r){return{$:2,a:e,b:r}}),au=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},ub=function(e){var r=e;return r.ex},vb=au(mn.a),$b=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(pr,n,z(P,P),r)}),fb=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},sb=K(function(e,r,n,a,t,i,c,l){var u=o($b,ub,h([Hn(e),Hn(r),Hn(n),Hn(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(lb,o(ee,fb,v),{bd:o(je,m,g),bK:o(je,w,_),bL:o(je,t,i),bM:o(je,c,l)})}else return vb}else return au({bd:o(je,e,r),bK:o(je,n,a),bL:o(je,t,i),bM:o(je,c,l)})}),db=y(function(e,r,n){return Pa(sb,e,r,n,Pe,Pe,Pe,Pe,Pe)}),mb=function(e){var r=o(Qp,k0(e.fB),{b6:ob,eH:e.fJ,cd:at(8e4)}),n=Ni({b6:tb,cd:at(2e4),ei:e.ei}),a=Ni({b6:Ri,cd:at(15e3),ei:Ln(e.ei)}),t=p(db,r,n,a);return Zp({b0:cb(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Kp(15),bJ:t,bZ:rb,b$:Ri})},tu=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),pb=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ou=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),iu=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),bb=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),gb=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),hb=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),jo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(hb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(tu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(pb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(gb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(iu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(bb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},No={$:0},_b=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ya(c(u)),d=o(de,s.dR,e),m=o(ue,s.dO,r),f=o(de,s.dS,n),g=o(ue,s.dP,a),b=o(de,s.dT,t),w=o(ue,s.dQ,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),wb=y(function(e,r,n){var a=ya(e(r));return Pa(_b,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),tt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),cu=function(e){return o(tt,e.dO,e.dR)&&o(tt,e.dP,e.dS)&&o(tt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},lu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Mr(n),c=Dr(n),l=Ar(n),u=Mr(a),v=Dr(a),s=Ar(a),d=Mr(t),m=Dr(t),f=Ar(t);return cu({dO:o(ue,i,o(ue,u,d)),dP:o(ue,c,o(ue,v,m)),dQ:o(ue,l,o(ue,s,f)),dR:o(de,i,o(de,u,d)),dS:o(de,c,o(de,v,m)),dT:o(de,l,o(de,s,f))})},uu=I$,ze=function(e){return uu(Ea(e))},vu=function(e){var r=e;return r},Ra=function(e){return uu(vu(e))},yb=$(function(e,r){var n=e,a=r,t=o(Te,J(a.fU),o(Te,J(a.fY),J(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return Fl}),xb=yb(eu(1)),$u=y(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return xb(o(To,a,t))}),Sb=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Ra(p($u,n,a,t));return B({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},Cb=$(function(e,r){return{$:2,a:e,b:r}}),fu=Cb({df:3,$7:0,dV:4}),Lb=function(e){if(e.b){var r=e.a,n=e.b,a=fu(o(ee,Sb,e)),t=p(wb,lu,r,n);return L(tu,t,e,a,0)}else return No},Re=y(function(e,r,n){return B(e,r,n)}),su=function(){var e=Br(1),r=Br(1),n=Br(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(pe,i,t,a),l=o(le,.5,e),u=p(pe,i,t,l),v=o(le,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(le,.5,n),f=p(pe,m,t,a),g=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return jo(Lb(h([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,g,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,g),p(Re,s,d,w)])))}(),In={$:0},Pb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ra(p($u,u,l,c)),s={o:v,bT:ze(u)},d={o:v,bT:ze(l)},m={o:v,bT:ze(c)};return o(A,s,o(A,d,o(A,m,n)))}),Wo=function(e){var r=e;return r.D},kb=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Vt=4294967295>>>32-xn,Ut=Zu,Tb=y(function(e,r,n){e:for(;;){var a=Vt&r>>>e,t=o(Ut,a,n);if(t.$){var v=t.a;return o(Ut,Vt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Mb=function(e){return e>>>5<<5},Db=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,Mb(n))>-1?re(o(Ut,Vt&e,i)):re(p(Tb,a,e,t))}),Yo=function(e){var r=e;return r.ah},ot=$(function(e,r){return o(Db,e,Yo(r))}),Ab=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(kb,y(function(c,l,u){return B(c,l,u)}),o(ot,a,e),o(ot,t,e),o(ot,i,e))};return o(Va,r,Wo(e))},Bb=y(function(e,r,n){e:for(;;){var a=o(io,Ve,e),t=a.a,i=a.b;if(I(_t(t),Ve)<0)return o(Nc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(Bb,e,P,0):Uc},Fb=y(function(e,r,n){return e(r(n))}),Vb=$(function(e,r){return!o(Kc,o(Fb,hs,e),r)}),Ub=$(function(e,r){return p(pr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Eb=function(e){var r=e.a;return r},du=$(function(e,r){var n=Eb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(Vb,a,r)?{D:r,ah:e}:{D:o(Ub,a,r),ah:e}}),Rb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=Rb({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Qr(r),a=Qr(e);return z(B(a.fU,a.fY,a.c5),B(n.fU,n.fY,n.c5))}),Wi=p(Bn,0,0,0),it=He(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Ba,o(ta,e,r),t);if(v.$){var d={o:Wi,bT:ze(r)},m={o:Wi,bT:ze(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),jb=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,T=_e(it,s,m,f,b,r,_e(it,d,s,g,f,r,_e(it,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,R=N.a,E=N.b;return z(R,Fe(E))}}),Nb=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(bn,o(ta,m,s),f,p(bn,o(ta,s,d),g,p(bn,o(ta,d,m),b,t))),x=o(A,B(b,g,f),a),_=e,C=v,T=n+3,N=x,R=w;e=_,r=C,n=T,a=N,t=R;continue e}else return B(a,t,n)}),Lr=y(function(e,r,n){var a=Ab(n),t=p(pr,zb(r),P,a),i=S(Nb,r,a,0,P,wl),c=i.a,l=i.b,u=i.c,v=S(jb,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=Mt(d)?t:ve(t,d);return p(Pb,e,o(du,Go(m),s),o(Rn,m,s))}),Et=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Vr,0,Fr(e)-1)),ah:Go(Ye(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},mu=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,kr,Et(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(Lr,a,kr,Et(n));case 3:var a=e.a,t=e.b;return p(Lr,a,kr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return In;case 9:return In;default:return In}},Yi=mu(su),pu={$:0},k=pu,be=$(function(e,r){return{$:1,a:e,b:r}}),Wb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Yb=1029,Gb=function(e){return{$:5,a:e}},bu=function(e){var r=e;return Gb(r)},Hb=bu(Yb),Ib=1028,Jb=bu(Ib),ke=y(function(e,r,n){return r===1?e?o(A,Hb,n):o(A,Jb,n):n}),gu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ct=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return S(ae,p(ke,l,a,d),gu,Wb,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Ho={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},hu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return S(ae,p(ke,l,a,d),hu,Ho,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),_u=$(function(e,r){return{$:3,a:e,b:r}}),Ob={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},wu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qb=U(function(e,r,n,a){return o(_u,n,K(function(t,i,c,l,u,v,s,d){return S(ae,d,wu,Ob,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Io={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},jn=function(e){var r=e;return r},ja=J$,lr=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return S(ae,p(ke,u,t,m),hu,Io,a,{aN:o(ja,jn(r),e),b:l,c,d:s,e:i,f:v})}))}),Zb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Qb=ge(function(e,r,n,a,t){return o(_u,a,K(function(i,c,l,u,v,s,d,m){return S(ae,m,wu,Zb,t,{aN:o(ja,jn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),yu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},xu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),xu,yu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),Su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Cu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xb=He(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(ke,v,i,f),Cu,Su,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Lu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Kb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(d,m,f,g,b,w,x,_){var C=x.a,T=x.b;return S(ae,p(ke,g,s,_),Cu,Lu,v,{b4:e,b7:r,b8:i,b9:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Pu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},On=He(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(ke,v,i,f),xu,Pu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),e1=function(e){return{$:0,a:e}},Gi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),r1=function(e){return L(cn,ln(e),un(e),vn(e),1)},Jo=L(cn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Jo)}else{var n=r.a;return z(e,r1(n))}}),zu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Gi,z(t,Jo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Gi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,e1(a)}}),n1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),a1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),t1=function(e){return o(Ae,e,1)},Rt=o(Ae,0,0),Hr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Rt)}else{var n=r.a;return z(e,t1(n))}}),ku=U(function(e,r,n,a){var t=L(a1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(qn,z(u,Jo),o(Hr,u,r),o(Hr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(qn,o(oa,u,e),z(u,Rt),o(Hr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(qn,o(oa,u,e),o(Hr,u,r),z(u,Rt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(qn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(n1,i,c,l)}}),o1={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},lt=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return S(ae,p(ke,u,t,m),gu,o1,a,{b1:jn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Tu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},i1=U(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(ke,l,a,d),Tu,Su,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),c1=Wt(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(ke,m,u,w),Tu,Lu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),zn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),l1=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},u1=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},v1=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},$1=function(e){return p(pe,l1(e),u1(e),v1(e))},Y=function(e){var r=Gl(e),n=r.a,a=r.b,t=r.c;return{ey:Ea($1(e)),eS:n/2,eT:a/2,eU:t/2}},Oo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(ct,l,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ct,l,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ct,l,Y(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,Y(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(qb,n,i,Y(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lt,l,v,Y(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,v,Y(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,v,Y(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Qb,u,v,i,Y(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(zu,s,R);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(i1,b,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Xb,b,x,_,Y(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Jn,m,Y(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,R=e.e,E=L(ku,C,T,N,R);if(E.$){var Z=E.a,X=Z.a,ce=Z.b,fe=E.b,ie=fe.a,me=fe.b,Me=E.c,Se=Me.a,br=Me.b,gr=E.d,x=gr.a,_=gr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Hu(c1,X,ce,ie,me,Se,br,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Kb(X)(ce)(ie)(me)(Se)(br)(x)(_)(Y(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=E.a,W=E.b,F=E.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(On,j,W,F,Y(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),ut=function(e){var r=e;return r.fU},vt=function(e){var r=e;return r.fY},$t=function(e){var r=e;return r.c5},f1=function(e){var r=e,n=$t(r.c6),a=vt(r.c6),t=ut(r.c6),i=$t(r.c4),c=vt(r.c4),l=ut(r.c4),u=$t(r.c3),v=vt(r.c3),s=ut(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},s1=function(e){var r=Ea(on(e)),n=Ge(Yr(e)),a=Ge(Wr(e)),t=Ge(Nr(e));return{dp:f1(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),Mu=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Vl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Du=$(function(e,r){return o(Mu,s1(e),r)}),Na=function(e){return{$:2,a:e}},d1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),m1=Z$,p1=q$,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=p1(a),g=f.fU,b=f.fY,w=f.c5,x=f.em,_=m1({em:x,fU:g*s,fY:b*d,c5:w*m});return Pa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},jt=$(function(e,r){switch(r.$){case 0:return pu;case 5:var n=r.a,a=r.b;return o(Ir,n,o(jt,e,a));case 1:var t=r.a,i=r.b;return o(be,o(d1,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Na(o(Hi,e,i));default:var c=r.a;return Jl(o(ee,jt(e),c))}}),qo=$(function(e,r){var n=r;return o(jt,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Au=7683,Bu=7682,b1=p(Vo,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:Au},{a8:xe,bl:rn,bt:xe,bu:Bu}),g1=p(Vo,{co:0,cN:0,c2:15},{a8:xe,bl:rn,bt:xe,bu:Bu},{a8:xe,bl:rn,bt:xe,bu:Au}),Qo=$(function(e,r){return e?o(A,g1,r):o(A,b1,r)}),h1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},_1=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ae,o(Qo,i,v),h1,Zo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},xa=function(e){var r=_1(e);if(r.$)return k;var n=r.a;return Na(n)},w1=U(function(e,r,n,a){var t=o(Oo,n,su),i=function(){var s=z(e,r);return s.a?s.b?En(h([t,xa(Yi)])):t:s.b?xa(Yi):k}(),c=xo(a),l=c.a,u=c.b,v=c.c;return o(Du,yo(a),o(qo,B(l,u,v),i))}),y1=$(function(e,r){return L(w1,!0,!0,e,r)}),Fu=$(function(e,r){return{$:0,a:e,b:r}}),x1=function(e){var r=mo(e),n=r.cM,a=r.cc,t=r.b5;return p(Bn,n,a,t)},S1=function(e){return o(Fu,0,Bt(x1(e)))},C1=function(e){var r=e;return r.k},wn=function(e){var r=e;return Er(r)},L1=$(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fU:Er(r),fY:en(r)}},P1=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ra(a),bT:ze(n)},r)}),z1=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=vn(l.bT),s=un(l.bT),d=ln(l.bT),m=o(aa,e,d),f=o(Te,r,d),g=o(aa,n,s),b=o(Te,a,s),w=o(aa,t,v),x=o(Te,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return cu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Vu=$(function(e,r){var n=vn(e.bT),a=un(e.bT),t=ln(e.bT);return Yt(z1,t,t,a,a,n,n,r)}),k1=function(e){var r=p(kc,P1,P,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Wo(e)),i=o(Vu,n,a);return L(ou,i,e,t,0)}else return No},Ji=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),Sa=function(e){var r=e;return en(r)},Nt=function(e){return Kr(2*Ur*e)},T1=kr,Oi=T1({cA:Un,c3:Ql,c4:ko}),Uu=function(){var e=72,r=o(L1,e,Nt(1)),n=Br(1),a=qr(_o),t=qr(yl),i=Br(1),c=o(le,.5,i),l=p(pe,qe,qe,c),u=o(le,-.5,i),v=p(pe,qe,qe,u),s=function(f){var g=o(le,f,r),b=qr(o(Ji,Oi,Ii(g))),w=o(le,wn(g),n),x=o(le,Sa(g),n),_=p(pe,w,x,c),C=p(pe,w,x,u),T=o(ba,e,f+1),N=o(le,T,r),R=qr(o(Ji,Oi,Ii(N))),E=o(le,wn(N),n),j=o(le,Sa(N),n),W=p(pe,E,j,u),F=p(pe,E,j,c);return h([B({o:t,bT:v},{o:t,bT:W},{o:t,bT:C}),B({o:b,bT:C},{o:R,bT:W},{o:R,bT:F}),B({o:b,bT:C},{o:R,bT:F},{o:b,bT:_}),B({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},d=o(ee,s,o(Vr,0,e-1)),m=Et(Ye(d));return jo(k1(m))}(),qi=mu(Uu),M1=function(e){var r=e;return r.eH},D1=function(e){var r=e;return r.cA},A1=function(e){var r=M1(e),n=Mo(r),a=n.a,t=n.b;return dr({cA:D1(e),c3:a,c4:t,c6:r})},B1=function(e){var r=e;return r.e9},F1=function(e){var r=e;return r.fu},V1=U(function(e,r,n,a){var t=A1(C1(a)),i=o(Oo,n,Uu),c=function(){var d=z(e,r);return d.a?d.b?En(h([i,xa(qi)])):i:d.b?xa(qi):k}(),l=F1(a),u=l,v=B1(a),s=v;return o(Du,t,o(qo,B(u,u,s),c))}),U1=$(function(e,r){return L(V1,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return er({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Zn=fu(h([B({cY:0},{cY:1},{cY:2})])),E1=$(function(e,r){var n=lu(r),a=Y(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(be,a,K(function(_,C,T,N,R,E,j,W){return S(ae,p(ke,N,0,W),Zi,Ho,Zn,{aw:t,b:T,c:C,d:E,e:_,bq:pn(r),f:R})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(be,a,K(function(_,C,T,N,R,E,j,W){return S(ae,p(ke,N,0,W),Zi,Io,Zn,{aN:o(ja,jn(c),i),b:T,c:C,d:E,e:_,bq:pn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(zu,l,f);if(u.$)return k;var v=u.a;return o(be,a,K(function(_,C,T,N,R,E,j,W){var F=j.a,Z=j.b;return S(ae,p(ke,N,0,W),Qi,yu,Zn,{P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cp:v,b:T,c:C,d:E,e:_,bq:pn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(ku,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,x=g.c;return o(be,a,K(function(_,C,T,N,R,E,j,W){var F=j.a,Z=j.b;return S(ae,p(ke,N,0,W),Qi,Pu,Zn,{b3:b,P:Z,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,ct:x,b:T,c:C,d:E,cQ:w,e:_,bq:pn(r),f:R})}))}}),R1=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Rn,e,r)}(),j1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Xi=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return S(ae,o(Qo,t,u),j1,Zo,R1,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},N1=U(function(e,r,n,a){var t=o(E1,n,a),i=z(e,r);return i.a?i.b?En(h([t,Xi(a)])):t:i.b?Xi(a):k}),W1=$(function(e,r){return L(N1,!0,!0,e,r)}),Y1=$(function(e,r){var n=Ar(r),a=Ar(e),t=Dr(r),i=Dr(e),c=Mr(r),l=Mr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(de,l,c),dS:o(de,i,t),dT:o(de,a,n)}}),G1=function(e){var r=Co(e),n=r.a,a=r.b;return o(Y1,n,a)},Ki={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},H1=$(function(e,r){return{$:1,a:e,b:r}}),I1=H1({df:2,$7:0,dV:1}),ec=I1(h([z({dw:0},{dw:1})])),J1=$(function(e,r){var n=G1(r),a=Y(n),t=Co(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(be,a,K(function(v,s,d,m,f,g,b,w){return S(ae,w,Ki,Ho,ec,{aw:l,du:ze(c),dv:ze(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(be,a,K(function(s,d,m,f,g,b,w,x){return S(ae,x,Ki,Io,ec,{aN:o(ja,jn(u),l),du:ze(c),dv:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),O1=$(function(e,r){return o(J1,e,r)}),Qn=function(e){return Kr(Ur*(e/180))},rc=$(function(e,r){var n=e,a=r;return n/a}),q1=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(wr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),nc=$(function(e,r){return e<1?P:S(q1,0,e,e,r,P)}),Z1=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ra(a),bT:ze(n),L:o(Ae,c,l)},r)}),Q1=function(e){var r=p(kc,Z1,P,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,Wo(e)),i=o(Vu,n,a);return L(iu,i,e,t,0)}else return No},Eu=$(function(e,r){var n=e,a=r,t=Er(a);return{fU:t*Er(n),fY:t*en(n),c5:en(a)}}),X1=function(){var e=Br(1),r=72,n=o(Vr,0,r-1),a=o(nc,r,o(zn,qe,Nt(1))),t=to(r/2),i=o(Vr,0,t-1),c=o(nc,t,o(zn,Qn(90),Qn(-90))),l=Go(Ye(o(ee,function(s){return o(ee,function(d){return{o:qr(o(Eu,s,d)),bT:p(pe,o(le,wn(d)*wn(s),e),o(le,wn(d)*Sa(s),e),o(le,Sa(d),e)),L:z(o(rc,s,Nt(1)),o(rc,o(hn,Qn(90),d),Qn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ye(o(ee,function(s){return Ye(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return jo(Q1(o(du,l,v)))}(),Ca=72,Xn=2*Ca,K1=$(function(e,r){e:for(;;){var n=Xn+1,a=o(ba,Xn,2*e+3),t=o(ba,Xn,2*e+2),i=2*e+1,c=2*e,l=Xn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),e3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),r3=$(function(e,r){e:for(;;){var n=p(e3,0,2*Ur,e/Ca),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),n3=function(){var e=o(r3,Ca-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(K1,Ca-1,P);return o(Rn,e,r)}(),a3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ac=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return S(ae,o(Qo,!0,u),a3,Zo,n3,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},t3=function(e){var r=vu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},o3=$(function(e,r){return o(Mu,t3(e),r)}),i3=U(function(e,r,n,a){var t=o(Oo,n,X1),i=function(){var u=z(e,r);return u.a?u.b?En(h([t,ac()])):t:u.b?ac():k}(),c=Po(a),l=c;return o(o3,o(wa,Un,Lo(a)),o(qo,B(l,l,l),i))}),c3=$(function(e,r){return L(i3,!0,!0,e,r)}),l3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),u3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),v3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Fu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(l3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Sl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(u3,n,a,t,i,c)}},$3=v3,Ru=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(y1,t,r)]);case 1:var t=e.a,n=e.b;return h([o(W1,t,n)]);case 3:var t=e.a,a=e.b;return h([o(c3,$3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(U1,t,i)]);case 4:var c=e.a,l=e.b;return h([o(O1,S1(c),l)]);default:var u=e.a;return o(Do,Ru,u)}},f3=function(e){return o(Do,Ru,e)},s3=$(function(e,r){return mb({aI:P0(e.es),ev:e.ev,aJ:z0(.5),ca:e.ca,aK:z(ki(Ze(e.cS.fS)),ki(Ze(e.cS.eW))),aP:f3(r),fB:!0,fJ:o(Eu,Kr(e.fI),Kr(e.fK)),ei:Xl})}),d3=$(function(e,r){return o(s3,{es:L(ml,0,0,0,0),ev:L0({dj:{fU:o(ur,"camera x",e),fY:o(ur,"camera y",e),c5:o(ur,"camera z",e)},aR:{fU:0,fY:0,c5:0},ei:{fU:0,fY:1,c5:0}}),ca:e.ca,cS:e.cS,fI:-At(135),fK:-At(45)},h([v0(e)]))}),m3=L(bm,d3,xm,ym,gm);const p3={Main:{init:m3(o(D,function(e){return De({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return De({eo:d,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Q))},o(M,"control",Q))},o(M,"down",Q))},o(M,"downs",da(Cn)))},o(M,"left",Q))},o(M,"pressedKeys",da(Cn)))},o(M,"right",Q))},o(M,"shift",Q))},o(M,"up",Q))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Q))},o(M,"isDown",Q))},o(M,"move",Q))},o(M,"rightDown",Q))},o(M,"rightUp",Q))},o(M,"up",Q))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},b3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},g3=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},h3=p3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});g3();b3(h3);
