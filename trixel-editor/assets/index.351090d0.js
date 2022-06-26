const Cm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};Cm();function In(e,r,n){return n.a=e,n.f=r,n}function m(e){return In(2,e,function(r){return function(n){return e(r,n)}})}function L(e){return In(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ne(e){return In(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function Qe(e){return In(5,e,function(r){return function(n){return function(t){return function(o){return function(l){return e(r,n,t,o,l)}}}}})}function Fr(e){return In(6,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return e(r,n,t,o,l,u)}}}}}})}function Gi(e){return In(7,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return e(r,n,t,o,l,u,$)}}}}}}})}function Te(e){return In(8,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return e(r,n,t,o,l,u,$,f)}}}}}}}})}function B0(e){return In(9,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(s){return e(r,n,t,o,l,u,$,f,s)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function i(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function j(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function A(e,r,n,t,o,l){return e.a===5?e.f(r,n,t,o,l):e(r)(n)(t)(o)(l)}function pr(e,r,n,t,o,l,u){return e.a===6?e.f(r,n,t,o,l,u):e(r)(n)(t)(o)(l)(u)}function E0(e,r,n,t,o,l,u,$){return e.a===7?e.f(r,n,t,o,l,u,$):e(r)(n)(t)(o)(l)(u)($)}function Tt(e,r,n,t,o,l,u,$,f){return e.a===8?e.f(r,n,t,o,l,u,$,f):e(r)(n)(t)(o)(l)(u)($)(f)}function zm(e,r,n,t,o,l,u,$,f,s){return e.a===9?e.f(r,n,t,o,l,u,$,f,s):e(r)(n)(t)(o)(l)(u)($)(f)(s)}var Pm=[];function Mm(e){return e.length}var jm=L(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),Lm=m(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,P(n,r)}),km=m(function(e,r){return r[e]});L(function(e,r,n){for(var t=n.length,o=new Array(t),l=0;l<t;l++)o[l]=n[l];return o[e]=r,o});m(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t});L(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r});var Tm=L(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});m(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t});L(function(e,r,n){for(var t=n.length,o=new Array(t),l=0;l<t;l++)o[l]=a(e,r+l,n[l]);return o});L(function(e,r,n){return n.slice(e,r)});L(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var l=t+o,u=new Array(l),$=0;$<t;$++)u[$]=r[$];for(var $=0;$<o;$++)u[$+t]=n[$];return u});m(function(e,r){return r});m(function(e,r){return console.log(e+": "+Dm()),r});function Dm(e){return"<internals>"}function Wa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function xe(e,r){for(var n,t=[],o=Jo(e,r,0,t);o&&(n=t.pop());o=Jo(n.a,n.b,0,t));return o}function Jo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Wa(5),!1;if(n>100)return t.push(P(e,r)),!0;e.$<0&&(e=_l(e),r=_l(r));for(var o in e)if(!Jo(e[o],r[o],n+1,t))return!1;return!0}m(xe);m(function(e,r){return!xe(e,r)});function Se(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=Se(e.a,r.a))||(n=Se(e.b,r.b))?n:Se(e.c,r.c);for(;e.b&&r.b&&!(n=Se(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}m(function(e,r){return Se(e,r)<0});m(function(e,r){return Se(e,r)<1});m(function(e,r){return Se(e,r)>0});m(function(e,r){return Se(e,r)>=0});var Am=m(function(e,r){var n=Se(e,r);return n<0?m$:n?zs:f$}),Dt=0;function P(e,r){return{a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function fe(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}m(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=an(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=an(e.a,r);return n}var k={$:0};function an(e,r){return{$:1,a:e,b:r}}var Im=m(an);function v(e){for(var r=k,n=e.length;n--;)r=an(e[n],r);return r}function Oi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Fm=L(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return v(t)});ne(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(i(e,r.a,n.a,t.a));return v(o)});Qe(function(e,r,n,t,o){for(var l=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)l.push(j(e,r.a,n.a,t.a,o.a));return v(l)});Fr(function(e,r,n,t,o,l){for(var u=[];r.b&&n.b&&t.b&&o.b&&l.b;r=r.b,n=n.b,t=t.b,o=o.b,l=l.b)u.push(A(e,r.a,n.a,t.a,o.a,l.a));return v(u)});m(function(e,r){return v(Oi(r).sort(function(n,t){return Se(e(n),e(t))}))});m(function(e,r){return v(Oi(r).sort(function(n,t){var o=a(e,n,t);return o===f$?0:o===m$?-1:1}))});m(function(e,r){return e+r});m(function(e,r){return e-r});m(function(e,r){return e*r});m(function(e,r){return e/r});m(function(e,r){return e/r|0});var Bm=m(Math.pow);m(function(e,r){return r%e});var Em=m(function(e,r){var n=r%e;return e===0?Wa(11):n>0&&e<0||n<0&&e>0?n+e:n}),Vm=Math.PI,Rm=Math.cos,Nm=Math.sin,Wm=Math.tan;m(Math.atan2);function Hm(e){return e}function Gm(e){return e===1/0||e===-1/0}var Om=Math.ceil,Um=Math.floor,qm=Math.round,Ym=Math.sqrt,ol=Math.log,Jm=isNaN;function Zm(e){return!e}m(function(e,r){return e&&r});m(function(e,r){return e||r});m(function(e,r){return e!==r});var Xm=m(function(e,r){return e+r});function Qm(e){var r=e.charCodeAt(0);return isNaN(r)?U:q(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}m(function(e,r){return e+r});function Km(e){return e.length}m(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var l=r.charCodeAt(o);if(55296<=l&&l<=56319){t[o]=e(r[o]+r[o+1]),o+=2;continue}t[o]=e(r[o]),o++}return t.join("")});m(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var l=r[o],u=r.charCodeAt(o);o++,55296<=u&&u<=56319&&(l+=r[o],o++),e(l)&&n.push(l)}return n.join("")});function e3(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}L(function(e,r,n){for(var t=n.length,o=0;o<t;){var l=n[o],u=n.charCodeAt(o);o++,55296<=u&&u<=56319&&(l+=n[o],o++),r=a(e,l,r)}return r});var r3=L(function(e,r,n){for(var t=n.length;t--;){var o=n[t],l=n.charCodeAt(t);56320<=l&&l<=57343&&(t--,o=n[t]+o),r=a(e,o,r)}return r}),n3=m(function(e,r){return r.split(e)}),a3=m(function(e,r){return r.join(e)}),t3=L(function(e,r,n){return n.slice(e,r)});function i3(e){return v(e.trim().split(/\s+/g))}function o3(e){return e.toLowerCase()}m(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var c3=m(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),l3=m(function(e,r){return r.indexOf(e)>-1}),u3=m(function(e,r){return r.indexOf(e)===0});m(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var $3=m(function(e,r){var n=e.length;if(n<1)return k;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return v(o)});function Vu(e){return e+""}function v3(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var l=e.charCodeAt(o);if(l<48||57<l)return U;r=10*r+l-48}return o==t?U:q(n==45?-r:r)}function f3(e){if(e.length===0||/[\sxbo]/.test(e))return U;var r=+e;return r===r?q(r):U}function m3(e){return Oi(e).join("")}function s3(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function d3(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function p3(e){return{$:0,a:e}}function g3(e){return{$:1,a:e}}function V0(e){return{$:2,b:e}}var h3=V0(function(e){return typeof e=="boolean"?Je(e):Jr("a BOOL",e)}),b3=V0(function(e){return typeof e=="number"?Je(e):Jr("a FLOAT",e)}),_3=V0(function(e){return typeof e=="string"?Je(e):e instanceof String?Je(e+""):Jr("a STRING",e)});function w3(e){return{$:3,b:e}}var x3=m(function(e,r){return{$:6,d:e,b:r}});m(function(e,r){return{$:7,e,b:r}});function Fn(e,r){return{$:9,f:e,g:r}}var y3=m(function(e,r){return{$:10,b:r,h:e}}),S3=m(function(e,r){return Fn(e,[r])}),C3=L(function(e,r,n){return Fn(e,[r,n])});ne(function(e,r,n,t){return Fn(e,[r,n,t])});Qe(function(e,r,n,t,o){return Fn(e,[r,n,t,o])});Fr(function(e,r,n,t,o,l){return Fn(e,[r,n,t,o,l])});Gi(function(e,r,n,t,o,l,u){return Fn(e,[r,n,t,o,l,u])});Te(function(e,r,n,t,o,l,u,$){return Fn(e,[r,n,t,o,l,u,$])});B0(function(e,r,n,t,o,l,u,$,f){return Fn(e,[r,n,t,o,l,u,$,f])});m(function(e,r){try{var n=JSON.parse(r);return jr(e,n)}catch(t){return lr(a(Q0,"This is not valid JSON! "+t.message,r))}});var Ru=m(function(e,r){return jr(e,r)});function jr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Je(e.c):Jr("null",r);case 3:return Jt(r)?cl(e.b,r,v):Jr("a LIST",r);case 4:return Jt(r)?cl(e.b,r,z3):Jr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Jr("an OBJECT with a field named `"+n+"`",r);var s=jr(e.b,r[n]);return Rr(s)?s:lr(a(wl,n,s.a));case 7:var t=e.e;if(!Jt(r))return Jr("an ARRAY",r);if(t>=r.length)return Jr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var s=jr(e.b,r[t]);return Rr(s)?s:lr(a(s$,t,s.a));case 8:if(typeof r!="object"||r===null||Jt(r))return Jr("an OBJECT",r);var o=k;for(var l in r)if(r.hasOwnProperty(l)){var s=jr(e.b,r[l]);if(!Rr(s))return lr(a(wl,l,s.a));o=an(P(l,s.a),o)}return Je($r(o));case 9:for(var u=e.f,$=e.g,f=0;f<$.length;f++){var s=jr($[f],r);if(!Rr(s))return s;u=u(s.a)}return Je(u);case 10:var s=jr(e.b,r);return Rr(s)?jr(e.h(s.a),r):s;case 11:for(var d=k,g=e.g;g.b;g=g.b){var s=jr(g.a,r);if(Rr(s))return s;d=an(s.a,d)}return lr(Ps($r(d)));case 1:return lr(a(Q0,e.a,r));case 0:return Je(e.a)}}function cl(e,r,n){for(var t=r.length,o=new Array(t),l=0;l<t;l++){var u=jr(e,r[l]);if(!Rr(u))return lr(a(s$,l,u.a));o[l]=u.a}return Je(n(o))}function Jt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function z3(e){return a(Ws,e.length,function(r){return e[r]})}function Jr(e,r){return lr(a(Q0,"Expecting "+e,r))}function _a(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return _a(e.b,r.b);case 6:return e.d===r.d&&_a(e.b,r.b);case 7:return e.e===r.e&&_a(e.b,r.b);case 9:return e.f===r.f&&ll(e.g,r.g);case 10:return e.h===r.h&&_a(e.b,r.b);case 11:return ll(e.g,r.g)}}function ll(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!_a(e[t],r[t]))return!1;return!0}var P3=m(function(e,r){return JSON.stringify(r,null,e)+""});function Nu(e){return e}function M3(){return[]}function j3(){return{}}var L3=L(function(e,r,n){return n[e]=r,n});function k3(e){return m(function(r,n){return n.push(e(r)),n})}function ca(e){return{$:0,a:e}}function T3(e){return{$:1,a:e}}function wn(e){return{$:2,b:e,c:null}}var Zo=m(function(e,r){return{$:3,b:e,d:r}});m(function(e,r){return{$:4,b:e,d:r}});function D3(e){return{$:5,b:e}}var A3=0;function R0(e){var r={$:0,e:A3++,f:e,g:null,h:[]};return N0(r),r}function Wu(e){return wn(function(r){r(ca(R0(e)))})}function Hu(e,r){e.h.push(r),N0(e)}var I3=m(function(e,r){return wn(function(n){Hu(e,r),n(ca(Dt))})}),Po=!1,ul=[];function N0(e){if(ul.push(e),!Po){for(Po=!0;e=ul.shift();)F3(e);Po=!1}}function F3(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,N0(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ne(function(e,r,n,t){return W0(r,t,e.hC,e.i4,e.iI,function(){return function(){}})});function W0(e,r,n,t,o,l){var u=a(Ru,e,r?r.flags:void 0);Rr(u)||Wa(2);var $={},f=n(u.a),s=f.a,d=l(_,s),g=B3($,_);function _(p,x){var w=a(t,p,s);d(s=w.a,x),vl($,w.b,o(s))}return vl($,f.b,o(s)),g?{ports:g}:{}}var en={};function B3(e,r){var n;for(var t in en){var o=en[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=V3(o,r)}return n}function E3(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function V3(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,l=e.e,u=e.f;function $(f){return a(Zo,$,D3(function(s){var d=s.a;return s.$===0?i(o,n,d,f):l&&u?j(t,n,d.i,d.j,f):i(t,n,l?d.i:d.j,f)}))}return n.h=R0(a(Zo,$,e.b))}var R3=m(function(e,r){return wn(function(n){e.g(r),n(ca(Dt))})});m(function(e,r){return a(I3,e.h,{$:0,a:r})});function Gu(e){return function(r){return{$:1,k:e,l:r}}}function N3(e){return{$:2,m:e}}m(function(e,r){return{$:3,n:e,o:r}});var $l=[],Mo=!1;function vl(e,r,n){if($l.push({p:e,q:r,r:n}),!Mo){Mo=!0;for(var t;t=$l.shift();)W3(t.p,t.q,t.r);Mo=!1}}function W3(e,r,n){var t={};xi(!0,r,t,null),xi(!1,n,t,null);for(var o in e)Hu(e[o],{$:"fx",a:t[o]||{i:k,j:k}})}function xi(e,r,n,t){switch(r.$){case 1:var o=r.k,l=H3(e,o,t,r.l);n[o]=G3(e,l,n[o]);return;case 2:for(var u=r.m;u.b;u=u.b)xi(e,u.a,n,t);return;case 3:xi(e,r.o,n,{s:r.n,t});return}}function H3(e,r,n,t){function o(u){for(var $=n;$;$=$.t)u=$.s(u);return u}var l=e?en[r].e:en[r].f;return a(l,o,t)}function G3(e,r,n){return n=n||{i:k,j:k},e?n.i=an(r,n.i):n.j=an(r,n.j),n}function O3(e){en[e]&&Wa(3)}m(function(e,r){return r});function U3(e,r){return O3(e),en[e]={f:q3,u:r,a:Y3},Gu(e)}var q3=m(function(e,r){return function(n){return e(r(n))}});function Y3(e,r){var n=k,t=en[e].u,o=ca(null);en[e].b=o,en[e].c=L(function(u,$,f){return n=$,o});function l(u){var $=a(Ru,t,u);Rr($)||Wa(4,e,$.a);for(var f=$.a,s=n;s.b;s=s.b)r(s.a(f))}return{send:l}}var yi,dn=typeof document!="undefined"?document:{};function H0(e,r){e.appendChild(r)}ne(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(zn(e,function(){}),o),{}});function Xo(e){return{$:0,a:e}}var Ou=m(function(e,r){return m(function(n,t){for(var o=[],l=0;t.b;t=t.b){var u=t.a;l+=u.b||0,o.push(u)}return l+=o.length,{$:1,c:r,d:O0(n),e:o,f:e,b:l}})}),vr=Ou(void 0),J3=m(function(e,r){return m(function(n,t){for(var o=[],l=0;t.b;t=t.b){var u=t.a;l+=u.b.b||0,o.push(u)}return l+=o.length,{$:2,c:r,d:O0(n),e:o,f:e,b:l}})}),Z3=J3(void 0);function X3(e,r,n,t){return{$:3,d:O0(e),g:r,h:n,i:t}}var Q3=m(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Bn(e,r){return{$:5,l:e,m:r,k:void 0}}m(function(e,r){return Bn([e,r],function(){return e(r)})});L(function(e,r,n){return Bn([e,r,n],function(){return a(e,r,n)})});var K3=ne(function(e,r,n,t){return Bn([e,r,n,t],function(){return i(e,r,n,t)})});Qe(function(e,r,n,t,o){return Bn([e,r,n,t,o],function(){return j(e,r,n,t,o)})});Fr(function(e,r,n,t,o,l){return Bn([e,r,n,t,o,l],function(){return A(e,r,n,t,o,l)})});Gi(function(e,r,n,t,o,l,u){return Bn([e,r,n,t,o,l,u],function(){return pr(e,r,n,t,o,l,u)})});Te(function(e,r,n,t,o,l,u,$){return Bn([e,r,n,t,o,l,u,$],function(){return E0(e,r,n,t,o,l,u,$)})});B0(function(e,r,n,t,o,l,u,$,f){return Bn([e,r,n,t,o,l,u,$,f],function(){return Tt(e,r,n,t,o,l,u,$,f)})});var Uu=m(function(e,r){return{$:"a0",n:e,o:r}}),e1=m(function(e,r){return{$:"a1",n:e,o:r}}),G0=m(function(e,r){return{$:"a2",n:e,o:r}}),Or=m(function(e,r){return{$:"a3",n:e,o:r}});L(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function qu(e){return e=="script"?"p":e}function r1(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function n1(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function a1(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Yu(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var t1=m(function(e,r){return r.$==="a0"?a(Uu,r.n,i1(e,r.o)):r});function i1(e,r){var n=ac(r);return{$:r.$,a:n?i(Hs,n<3?o1:c1,sr(e),r.a):a(ht,e,r.a)}}var o1=m(function(e,r){return P(e(r.a),r.b)}),c1=m(function(e,r){return{aM:e(r.aM),eg:r.eg,d4:r.d4}});function O0(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,l=n.o;if(t==="a2"){o==="className"?fl(r,o,l):r[o]=l;continue}var u=r[t]||(r[t]={});t==="a3"&&o==="class"?fl(u,o,l):u[o]=l}return r}function fl(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function zn(e,r){var n=e.$;if(n===5)return zn(e.k||(e.k=e.m()),r);if(n===0)return dn.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var l={j:o,p:r},u=zn(t,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return Qo(u,r,e.d),u}var u=e.f?dn.createElementNS(e.f,e.c):dn.createElement(e.c);yi&&e.c=="a"&&u.addEventListener("click",yi(u)),Qo(u,r,e.d);for(var $=e.e,f=0;f<$.length;f++)H0(u,zn(n===1?$[f]:$[f].b,r));return u}function Qo(e,r,n){for(var t in n){var o=n[t];t==="a1"?l1(e,o):t==="a0"?v1(e,r,o):t==="a3"?u1(e,o):t==="a4"?$1(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function l1(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function u1(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function $1(e,r){for(var n in r){var t=r[n],o=t.f,l=t.o;typeof l!="undefined"?e.setAttributeNS(o,n,l):e.removeAttributeNS(o,n)}}function v1(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var l=n[o],u=t[o];if(!l){e.removeEventListener(o,u),t[o]=void 0;continue}if(u){var $=u.q;if($.$===l.$){u.q=l;continue}e.removeEventListener(o,u)}u=f1(r,l),e.addEventListener(o,u,U0&&{passive:ac(l)<2}),t[o]=u}}var U0;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){U0=!0}}))}catch{}function f1(e,r){function n(t){var o=n.q,l=jr(o.a,t);if(!!Rr(l)){for(var u=ac(o),$=l.a,f=u?u<3?$.a:$.aM:$,s=u==1?$.b:u==3&&$.eg,d=(s&&t.stopPropagation(),(u==2?$.b:u==3&&$.d4)&&t.preventDefault(),e),g,_;g=d.j;){if(typeof g=="function")f=g(f);else for(var _=g.length;_--;)f=g[_](f);d=d.p}d(f,s)}}return n.q=r,n}function m1(e,r){return e.$==r.$&&_a(e.a,r.a)}function Ju(e,r){var n=[];return Nr(e,r,n,0),n}function cr(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function Nr(e,r,n,t){if(e!==r){var o=e.$,l=r.$;if(o!==l)if(o===1&&l===2)r=w1(r),l=1;else{cr(n,0,t,r);return}switch(l){case 5:for(var u=e.l,$=r.l,f=u.length,s=f===$.length;s&&f--;)s=u[f]===$[f];if(s){r.k=e.k;return}r.k=r.m();var d=[];Nr(e.k,r.k,d,0),d.length>0&&cr(n,1,t,d);return;case 4:for(var g=e.j,_=r.j,p=!1,x=e.k;x.$===4;)p=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;for(var w=r.k;w.$===4;)p=!0,typeof _!="object"?_=[_,w.j]:_.push(w.j),w=w.k;if(p&&g.length!==_.length){cr(n,0,t,r);return}(p?!s1(g,_):g!==_)&&cr(n,2,t,_),Nr(x,w,n,t+1);return;case 0:e.a!==r.a&&cr(n,3,t,r.a);return;case 1:ml(e,r,n,t,d1);return;case 2:ml(e,r,n,t,p1);return;case 3:if(e.h!==r.h){cr(n,0,t,r);return}var C=q0(e.d,r.d);C&&cr(n,4,t,C);var z=r.i(e.g,r.g);z&&cr(n,5,t,z);return}}}function s1(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ml(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){cr(n,0,t,r);return}var l=q0(e.d,r.d);l&&cr(n,4,t,l),o(e,r,n,t)}function q0(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var l=q0(e[o],r[o]||{},o);l&&(t=t||{},t[o]=l);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var u=e[o],$=r[o];u===$&&o!=="value"&&o!=="checked"||n==="a0"&&m1(u,$)||(t=t||{},t[o]=$)}for(var f in r)f in e||(t=t||{},t[f]=r[f]);return t}function d1(e,r,n,t){var o=e.e,l=r.e,u=o.length,$=l.length;u>$?cr(n,6,t,{v:$,i:u-$}):u<$&&cr(n,7,t,{v:u,e:l});for(var f=u<$?u:$,s=0;s<f;s++){var d=o[s];Nr(d,l[s],n,++t),t+=d.b||0}}function p1(e,r,n,t){for(var o=[],l={},u=[],$=e.e,f=r.e,s=$.length,d=f.length,g=0,_=0,p=t;g<s&&_<d;){var x=$[g],w=f[_],C=x.a,z=w.a,y=x.b,T=w.b,O=void 0,K=void 0;if(C===z){p++,Nr(y,T,o,p),p+=y.b||0,g++,_++;continue}var te=$[g+1],ie=f[_+1];if(te){var oe=te.a,ae=te.b;K=z===oe}if(ie){var Z=ie.a,ge=ie.b;O=C===Z}if(O&&K){p++,Nr(y,ge,o,p),Ka(l,o,C,T,_,u),p+=y.b||0,p++,et(l,o,C,ae,p),p+=ae.b||0,g+=2,_+=2;continue}if(O){p++,Ka(l,o,z,T,_,u),Nr(y,ge,o,p),p+=y.b||0,g+=1,_+=2;continue}if(K){p++,et(l,o,C,y,p),p+=y.b||0,p++,Nr(ae,T,o,p),p+=ae.b||0,g+=2,_+=1;continue}if(te&&oe===Z){p++,et(l,o,C,y,p),Ka(l,o,z,T,_,u),p+=y.b||0,p++,Nr(ae,ge,o,p),p+=ae.b||0,g+=2,_+=2;continue}break}for(;g<s;){p++;var x=$[g],y=x.b;et(l,o,x.a,y,p),p+=y.b||0,g++}for(;_<d;){var he=he||[],w=f[_];Ka(l,o,w.a,w.b,void 0,he),_++}(o.length>0||u.length>0||he)&&cr(n,8,t,{w:o,x:u,y:he})}var Zu="_elmW6BL";function Ka(e,r,n,t,o,l){var u=e[n];if(!u){u={c:0,z:t,r:o,s:void 0},l.push({r:o,A:u}),e[n]=u;return}if(u.c===1){l.push({r:o,A:u}),u.c=2;var $=[];Nr(u.z,t,$,u.r),u.r=o,u.s.s={w:$,A:u};return}Ka(e,r,n+Zu,t,o,l)}function et(e,r,n,t,o){var l=e[n];if(!l){var u=cr(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:u};return}if(l.c===0){l.c=2;var $=[];Nr(t,l.z,$,o),cr(r,9,o,{w:$,A:l});return}et(e,r,n+Zu,t,o)}function Xu(e,r,n,t){rt(e,r,n,0,0,r.b,t)}function rt(e,r,n,t,o,l,u){for(var $=n[t],f=$.r;f===o;){var s=$.$;if(s===1)Xu(e,r.k,$.s,u);else if(s===8){$.t=e,$.u=u;var d=$.s.w;d.length>0&&rt(e,r,d,0,o,l,u)}else if(s===9){$.t=e,$.u=u;var g=$.s;if(g){g.A.s=e;var d=g.w;d.length>0&&rt(e,r,d,0,o,l,u)}}else $.t=e,$.u=u;if(t++,!($=n[t])||(f=$.r)>l)return t}var _=r.$;if(_===4){for(var p=r.k;p.$===4;)p=p.k;return rt(e,p,n,t,o+1,l,e.elm_event_node_ref)}for(var x=r.e,w=e.childNodes,C=0;C<x.length;C++){o++;var z=_===1?x[C]:x[C].b,y=o+(z.b||0);if(o<=f&&f<=y&&(t=rt(w[C],z,n,t,o,y,u),!($=n[t])||(f=$.r)>l))return t;o=y}return t}function Qu(e,r,n,t){return n.length===0?e:(Xu(e,r,n,t),Si(e,n))}function Si(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,l=g1(o,t);o===e&&(e=l)}return e}function g1(e,r){switch(r.$){case 0:return h1(e,r.s,r.u);case 4:return Qo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Si(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var l=r.s,t=0;t<l.i;t++)e.removeChild(e.childNodes[l.v]);return e;case 7:for(var l=r.s,n=l.e,t=l.v,o=e.childNodes[t];t<n.length;t++)e.insertBefore(zn(n[t],r.u),o);return e;case 9:var l=r.s;if(!l)return e.parentNode.removeChild(e),e;var u=l.A;return typeof u.r!="undefined"&&e.parentNode.removeChild(e),u.s=Si(e,l.w),e;case 8:return b1(e,r);case 5:return r.s(e);default:Wa(10)}}function h1(e,r,n){var t=e.parentNode,o=zn(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function b1(e,r){var n=r.s,t=_1(n.y,r);e=Si(e,n.w);for(var o=n.x,l=0;l<o.length;l++){var u=o[l],$=u.A,f=$.c===2?$.s:zn($.z,r.u);e.insertBefore(f,e.childNodes[u.r])}return t&&H0(e,t),e}function _1(e,r){if(!!e){for(var n=dn.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],l=o.A;H0(n,l.c===2?l.s:zn(l.z,r.u))}return n}}function Y0(e){if(e.nodeType===3)return Xo(e.textContent);if(e.nodeType!==1)return Xo("");for(var r=k,n=e.attributes,t=n.length;t--;){var o=n[t],l=o.name,u=o.value;r=an(a(Or,l,u),r)}for(var $=e.tagName.toLowerCase(),f=k,s=e.childNodes,t=s.length;t--;)f=an(Y0(s[t]),f);return i(vr,$,r,f)}function w1(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var x1=ne(function(e,r,n,t){return W0(r,t,e.hC,e.i4,e.iI,function(o,l){var u=e.i6,$=t.node,f=Y0($);return Ku(l,function(s){var d=u(s),g=Ju(f,d);$=Qu($,f,g,o),f=d})})});ne(function(e,r,n,t){return W0(r,t,e.hC,e.i4,e.iI,function(o,l){var u=e.ee&&e.ee(o),$=e.i6,f=dn.title,s=dn.body,d=Y0(s);return Ku(l,function(g){yi=u;var _=$(g),p=vr("body")(k)(_.gA),x=Ju(d,p);s=Qu(s,d,x,o),d=p,yi=0,f!==_.i_&&(dn.title=f=_.i_)})})});var Ci=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ku(e,r){r(e);var n=0;function t(){n=n===1?0:(Ci(t),r(e),1)}return function(o,l){e=o,l?(r(e),n===2&&(n=1)):(n===0&&Ci(t),n=2)}}m(function(e,r){return a(ic,It,wn(function(){r&&history.go(r),e()}))});m(function(e,r){return a(ic,It,wn(function(){history.pushState({},"",r),e()}))});m(function(e,r){return a(ic,It,wn(function(){history.replaceState({},"",r),e()}))});var y1={addEventListener:function(){},removeEventListener:function(){}},S1=typeof window!="undefined"?window:y1;L(function(e,r,n){return Wu(wn(function(t){function o(l){R0(n(l))}return e.addEventListener(r,o,U0&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});m(function(e,r){var n=jr(e,r);return Rr(n)?q(n.a):U});function e$(e,r){return wn(function(n){Ci(function(){var t=document.getElementById(e);n(t?ca(r(t)):T3(Gs(e)))})})}function C1(e){return wn(function(r){Ci(function(){r(ca(e()))})})}m(function(e,r){return e$(r,function(n){return n[e](),Dt})});m(function(e,r){return C1(function(){return S1.scroll(e,r),Dt})});L(function(e,r,n){return e$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,Dt})});m(function(e,r){return e&r});m(function(e,r){return e|r});m(function(e,r){return e^r});m(function(e,r){return r<<e});m(function(e,r){return r>>e});m(function(e,r){return r>>>e});var z1=m(function(e,r){var n="g";e.hZ&&(n+="m"),e.gK&&(n+="i");try{return q(new RegExp(r,n))}catch{return U}});m(function(e,r){return r.match(e)!==null});var P1=L(function(e,r,n){for(var t=[],o=0,l=n,u=r.lastIndex,$=-1,f;o++<e&&(f=r.exec(l))&&$!=r.lastIndex;){for(var s=f.length-1,d=new Array(s);s>0;){var g=f[s];d[--s]=g?q(g):U}t.push(j(Nv,f[0],f.index,o,v(d))),$=r.lastIndex}return r.lastIndex=u,v(t)});ne(function(e,r,n,t){var o=0;function l(u){if(o++>=e)return u;for(var $=arguments.length-3,f=new Array($);$>0;){var s=arguments[$];f[--$]=s?q(s):U}return n(j(Nv,u,arguments[arguments.length-2],o,v(f)))}return t.replace(r,l)});L(function(e,r,n){for(var t=n,o=[],l=r.lastIndex,u=r.lastIndex;e--;){var $=r.exec(t);if(!$)break;o.push(t.slice(l,$.index)),l=r.lastIndex}return o.push(t.slice(l)),r.lastIndex=u,v(o)});var M1=m(function(e,r){return new Float64Array([e,r])});m(function(e,r){return new Float64Array([e,r[1]])});m(function(e,r){return new Float64Array([r[0],e])});m(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});m(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});m(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/j1(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function j1(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});m(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});m(function(e,r){return e[0]*r[0]+e[1]*r[1]});var J0=new Float64Array(3),sl=new Float64Array(3),dl=new Float64Array(3),L1=L(function(e,r,n){return new Float64Array([e,r,n])}),k1=function(e){return e[0]},T1=function(e){return e[1]},D1=function(e){return e[2]};m(function(e,r){return new Float64Array([e,r[1],r[2]])});m(function(e,r){return new Float64Array([r[0],e,r[2]])});m(function(e,r){return new Float64Array([r[0],r[1],e])});var A1=function(e){return new Float64Array([e.ja,e.je,e.ew])};m(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function r$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}m(r$);function n$(e,r,n){return n===void 0&&(n=new Float64Array(3)),zi(r$(e,r,n),n)}m(n$);function a$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)});m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function zi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/a$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var I1=m(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),nt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};m(nt);function Ko(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}m(Ko);m(function(e,r){var n,t=J0,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=nt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(nt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(nt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(nt(r,t)+e[14])/n,o});var F1=ne(function(e,r,n,t){return new Float64Array([e,r,n,t])});m(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});m(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});m(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});m(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var B1=function(e){return{ja:e[0],je:e[1],ew:e[2],f7:e[3]}},E1=function(e){return new Float64Array([e.ja,e.je,e.ew,e.f7])};m(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});m(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});m(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/V1(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function V1(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+l*l)});m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],l=e[3]-r[3];return n*n+t*t+o*o+l*l});m(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});m(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var R1=new Float64Array(16),N1=new Float64Array(16),W1=function(e){var r=new Float64Array(16);return r[0]=e.e7,r[1]=e.fb,r[2]=e.ff,r[3]=e.fj,r[4]=e.e8,r[5]=e.fc,r[6]=e.fg,r[7]=e.fk,r[8]=e.e9,r[9]=e.fd,r[10]=e.fh,r[11]=e.fl,r[12]=e.fa,r[13]=e.fe,r[14]=e.fi,r[15]=e.fm,r},H1=function(e){return{e7:e[0],fb:e[1],ff:e[2],fj:e[3],e8:e[4],fc:e[5],fg:e[6],fk:e[7],e9:e[8],fd:e[9],fh:e[10],fl:e[11],fa:e[12],fe:e[13],fi:e[14],fm:e[15]}};function t$(e,r,n,t,o,l){var u=new Float64Array(16);return u[0]=2*o/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*o/(t-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(t+n)/(t-n),u[10]=-(l+o)/(l-o),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*o/(l-o),u[15]=0,u}Fr(t$);ne(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),l=-o,u=l*r,$=o*r;return t$(u,$,l,o,n,t)});function i$(e,r,n,t,o,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(t-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-o),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(t+n)/(t-n),u[14]=-(l+o)/(l-o),u[15]=1,u}Fr(i$);ne(function(e,r,n,t){return i$(e,r,n,t,-1,1)});function o$(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2],u=e[3],$=e[4],f=e[5],s=e[6],d=e[7],g=e[8],_=e[9],p=e[10],x=e[11],w=e[12],C=e[13],z=e[14],y=e[15],T=r[0],O=r[1],K=r[2],te=r[3],ie=r[4],oe=r[5],ae=r[6],Z=r[7],ge=r[8],he=r[9],De=r[10],Pe=r[11],de=r[12],Ae=r[13],F=r[14],B=r[15];return n[0]=t*T+$*O+g*K+w*te,n[1]=o*T+f*O+_*K+C*te,n[2]=l*T+s*O+p*K+z*te,n[3]=u*T+d*O+x*K+y*te,n[4]=t*ie+$*oe+g*ae+w*Z,n[5]=o*ie+f*oe+_*ae+C*Z,n[6]=l*ie+s*oe+p*ae+z*Z,n[7]=u*ie+d*oe+x*ae+y*Z,n[8]=t*ge+$*he+g*De+w*Pe,n[9]=o*ge+f*he+_*De+C*Pe,n[10]=l*ge+s*he+p*De+z*Pe,n[11]=u*ge+d*he+x*De+y*Pe,n[12]=t*de+$*Ae+g*F+w*B,n[13]=o*de+f*Ae+_*F+C*B,n[14]=l*de+s*Ae+p*F+z*B,n[15]=u*de+d*Ae+x*F+y*B,n}m(o$);m(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2],u=e[4],$=e[5],f=e[6],s=e[8],d=e[9],g=e[10],_=e[12],p=e[13],x=e[14],w=r[0],C=r[1],z=r[2],y=r[4],T=r[5],O=r[6],K=r[8],te=r[9],ie=r[10],oe=r[12],ae=r[13],Z=r[14];return n[0]=t*w+u*C+s*z,n[1]=o*w+$*C+d*z,n[2]=l*w+f*C+g*z,n[3]=0,n[4]=t*y+u*T+s*O,n[5]=o*y+$*T+d*O,n[6]=l*y+f*T+g*O,n[7]=0,n[8]=t*K+u*te+s*ie,n[9]=o*K+$*te+d*ie,n[10]=l*K+f*te+g*ie,n[11]=0,n[12]=t*oe+u*ae+s*Z+_,n[13]=o*oe+$*ae+d*Z+p,n[14]=l*oe+f*ae+g*Z+x,n[15]=1,n});m(function(e,r){var n=new Float64Array(16);r=zi(r,J0);var t=r[0],o=r[1],l=r[2],u=Math.cos(e),$=1-u,f=Math.sin(e);return n[0]=t*t*$+u,n[1]=o*t*$+l*f,n[2]=l*t*$-o*f,n[3]=0,n[4]=t*o*$-l*f,n[5]=o*o*$+u,n[6]=o*l*$+t*f,n[7]=0,n[8]=t*l*$+o*f,n[9]=o*l*$-t*f,n[10]=l*l*$+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});L(function(e,r,n){var t=new Float64Array(16),o=1/a$(r),l=r[0]*o,u=r[1]*o,$=r[2]*o,f=Math.cos(e),s=1-f,d=Math.sin(e),g=l*d,_=u*d,p=$*d,x=l*u*s,w=l*$*s,C=u*$*s,z=l*l*s+f,y=x+p,T=w-_,O=x-p,K=u*u*s+f,te=C+g,ie=w+_,oe=C-g,ae=$*$*s+f,Z=n[0],ge=n[1],he=n[2],De=n[3],Pe=n[4],de=n[5],Ae=n[6],F=n[7],B=n[8],E=n[9],V=n[10],N=n[11],W=n[12],H=n[13],G=n[14],Ue=n[15];return t[0]=Z*z+Pe*y+B*T,t[1]=ge*z+de*y+E*T,t[2]=he*z+Ae*y+V*T,t[3]=De*z+F*y+N*T,t[4]=Z*O+Pe*K+B*te,t[5]=ge*O+de*K+E*te,t[6]=he*O+Ae*K+V*te,t[7]=De*O+F*K+N*te,t[8]=Z*ie+Pe*oe+B*ae,t[9]=ge*ie+de*oe+E*ae,t[10]=he*ie+Ae*oe+V*ae,t[11]=De*ie+F*oe+N*ae,t[12]=W,t[13]=H,t[14]=G,t[15]=Ue,t});function G1(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}L(G1);ne(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o});m(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function O1(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}L(O1);ne(function(e,r,n,t){var o=new Float64Array(16),l=t[0],u=t[1],$=t[2],f=t[3],s=t[4],d=t[5],g=t[6],_=t[7],p=t[8],x=t[9],w=t[10],C=t[11];return o[0]=l,o[1]=u,o[2]=$,o[3]=f,o[4]=s,o[5]=d,o[6]=g,o[7]=_,o[8]=p,o[9]=x,o[10]=w,o[11]=C,o[12]=l*e+s*r+p*n+t[12],o[13]=u*e+d*r+x*n+t[13],o[14]=$*e+g*r+w*n+t[14],o[15]=f*e+_*r+C*n+t[15],o});m(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2],u=r[0],$=r[1],f=r[2],s=r[3],d=r[4],g=r[5],_=r[6],p=r[7],x=r[8],w=r[9],C=r[10],z=r[11];return n[0]=u,n[1]=$,n[2]=f,n[3]=s,n[4]=d,n[5]=g,n[6]=_,n[7]=p,n[8]=x,n[9]=w,n[10]=C,n[11]=z,n[12]=u*t+d*o+x*l+r[12],n[13]=$*t+g*o+w*l+r[13],n[14]=f*t+_*o+C*l+r[14],n[15]=s*t+p*o+z*l+r[15],n});L(function(e,r,n){var t=n$(e,r,J0),o=zi(Ko(n,t,sl),sl),l=zi(Ko(t,o,dl),dl),u=R1,$=N1;return u[0]=o[0],u[1]=l[0],u[2]=t[0],u[3]=0,u[4]=o[1],u[5]=l[1],u[6]=t[1],u[7]=0,u[8]=o[2],u[9]=l[2],u[10]=t[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,$[0]=1,$[1]=0,$[2]=0,$[3]=0,$[4]=0,$[5]=1,$[6]=0,$[7]=0,$[8]=0,$[9]=0,$[10]=1,$[11]=0,$[12]=-e[0],$[13]=-e[1],$[14]=-e[2],$[15]=1,o$(u,$)});L(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var pl=0;function dt(e,r){for(;r.b;r=r.b)e(r.a)}function Z0(e){for(var r=0;e.b;e=e.b)r++;return r}var U1=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},q1=Qe(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),Y1=m(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),J1=m(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Z1=m(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),X1=m(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Q1=m(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),K1=m(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),es=m(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),rs=m(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ns=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},as=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},ts=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},is=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},c$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},l$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},os=function(e){e.gl.disable(e.gl.CULL_FACE)},cs=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},ls=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},us=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},gl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],$s=[as,ts,is,c$,l$,os,cs,ls,us];function hl(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function vs(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function u$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function fs(e,r,n,t){for(var o=n.a.eJ,l=[],u=0;u<o;u++)l.push(String.fromCharCode(97+u));function $(p,x,w,C,z){var y;if(o===1)for(y=0;y<x;y++)p[w++]=x===1?C[z]:C[z][y];else l.forEach(function(T){for(y=0;y<x;y++)p[w++]=x===1?C[T][z]:C[T][z][y]})}var f=u$(e,r.type);if(f===void 0)throw new Error("No info available for: "+r.type);var s=0,d=f.size*f.arraySize*o,g=new f.type(Z0(n.b)*d);dt(function(p){$(g,f.size*f.arraySize,s,p,t[r.name]||r.name),s+=d},n.b);var _=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,g,e.STATIC_DRAW),_}function ms(e,r){if(r.a.eW>0){var n=e.createBuffer(),t=ss(r.c,r.a.eW);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.eJ*Z0(r.b),indexBuffer:null,buffers:{}}}function ss(e,r){var n=new Uint32Array(Z0(e)*r),t=0,o;return dt(function(l){if(r===1)n[t++]=l;else for(o=0;o<r;o++)n[t++]=l[String.fromCharCode(97+o)]},e),n}function bl(e,r){return e+"#"+r}var $$=m(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),c$(n),l$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(l){if(!!l.d.b.b){var u,$,f;if(l.b.id&&l.c.id&&(u=bl(l.b.id,l.c.id),$=n.programs[u]),!$){var s;l.b.id?s=n.shaders[l.b.id]:l.b.id=pl++,s||(s=hl(t,l.b.src,t.VERTEX_SHADER),n.shaders[l.b.id]=s);var d;l.c.id?d=n.shaders[l.c.id]:l.c.id=pl++,d||(d=hl(t,l.c.src,t.FRAGMENT_SHADER),n.shaders[l.c.id]=d);var g=vs(t,s,d);$={glProgram:g,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},$.uniformSetters=ds(t,e,$,Object.assign({},l.b.uniforms,l.c.uniforms));var _=t.getProgramParameter(g,t.ACTIVE_ATTRIBUTES);for(f=0;f<_;f++){var p=t.getActiveAttrib(g,f),x=t.getAttribLocation(g,p.name);$.activeAttributes.push(p),$.activeAttributeLocations.push(x)}u=bl(l.b.id,l.c.id),n.programs[u]=$}n.lastProgId!==u&&(t.useProgram($.glProgram),n.lastProgId=u),ps($.uniformSetters,l.e);var w=n.buffers.get(l.d);for(w||(w=ms(t,l.d),n.buffers.set(l.d,w)),f=0;f<$.activeAttributes.length;f++){p=$.activeAttributes[f],x=$.activeAttributeLocations[f],w.buffers[p.name]===void 0&&(w.buffers[p.name]=fs(t,p,l.d,$.attributes)),t.bindBuffer(t.ARRAY_BUFFER,w.buffers[p.name]);var C=u$(t,p.type);if(C.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,C.size,C.baseType,!1,0,0);else for(var z=C.size*4,y=z*C.arraySize,T=0;T<C.arraySize;T++)t.enableVertexAttribArray(x+T),t.vertexAttribPointer(x+T,C.size,C.baseType,!1,y,z*T)}for(n.toggle=!n.toggle,dt(nh(n),l.a),f=0;f<gl.length;f++){var O=n[gl[f]];O.toggle!==n.toggle&&O.enabled&&($s[f](n),O.enabled=!1,O.toggle=n.toggle)}w.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,w.indexBuffer),t.drawElements(l.d.a.fv,w.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(l.d.a.fv,0,w.numIndices)}}return dt(o,e.g),r});function ds(e,r,n,t){var o=n.glProgram,l=n.currentUniforms,u=0,$=r.f;function f(p,x){var w=x.name,C=e.getUniformLocation(p,w);switch(x.type){case e.INT:return function(y){l[w]!==y&&(e.uniform1i(C,y),l[w]=y)};case e.FLOAT:return function(y){l[w]!==y&&(e.uniform1f(C,y),l[w]=y)};case e.FLOAT_VEC2:return function(y){l[w]!==y&&(e.uniform2f(C,y[0],y[1]),l[w]=y)};case e.FLOAT_VEC3:return function(y){l[w]!==y&&(e.uniform3f(C,y[0],y[1],y[2]),l[w]=y)};case e.FLOAT_VEC4:return function(y){l[w]!==y&&(e.uniform4f(C,y[0],y[1],y[2],y[3]),l[w]=y)};case e.FLOAT_MAT4:return function(y){l[w]!==y&&(e.uniformMatrix4fv(C,!1,new Float32Array(y)),l[w]=y)};case e.SAMPLER_2D:var z=u++;return function(y){e.activeTexture(e.TEXTURE0+z);var T=$.textures.get(y);T||(T=y.gX(e),$.textures.set(y,T)),e.bindTexture(e.TEXTURE_2D,T),l[w]!==y&&(e.uniform1i(C,z),l[w]=y)};case e.BOOL:return function(y){l[w]!==y&&(e.uniform1i(C,y),l[w]=y)};default:return function(){}}}for(var s={},d=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),g=0;g<d;g++){var _=e.getActiveUniform(o,g);s[t[_.name]||_.name]=f(o,_)}return s}function ps(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var gs=L(function(e,r,n){return X3(r,{g:n,f:{},h:e},Ss,Cs)}),hs=m(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),bs=m(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),_s=m(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),ws=m(function(e,r){e.contextAttributes.antialias=!0}),xs=m(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),ys=m(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ss(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};dt(function(o){return a(rh,r,o)},e.h);var n=dn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),U1(function(){return a($$,e,n)})):(n=dn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Cs(e,r){return r.f=e.f,$$(r)}var M=Im,Zt=Tm,v$=L(function(e,r,n){var t=n.c,o=n.d,l=m(function(u,$){if(u.$){var s=u.a;return i(Zt,e,$,s)}else{var f=u.a;return i(Zt,l,$,f)}});return i(Zt,l,i(Zt,e,r,o),t)}),X0=L(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,l=n.d,u=n.e,$=e,f=i(e,t,o,i(X0,e,r,u)),s=l;e=$,r=f,n=s;continue e}}),_l=function(e){return i(X0,L(function(r,n,t){return a(M,P(r,n),t)}),k,e)},f$=1,zs=2,m$=0,lr=function(e){return{$:1,a:e}},Q0=m(function(e,r){return{$:3,a:e,b:r}}),wl=m(function(e,r){return{$:0,a:e,b:r}}),s$=m(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},Ps=function(e){return{$:2,a:e}},q=function(e){return{$:0,a:e}},U={$:1},Ms=c3,js=P3,D=Vu,$e=m(function(e,r){return a(a3,e,Oi(r))}),K0=m(function(e,r){return v(a(n3,e,r))}),d$=function(e){return a($e,`
    `,a(K0,`
`,e))},Oe=L(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,l=e,u=a(e,t,r),$=o;e=l,r=u,n=$;continue e}else return r}),Gr=function(e){return i(Oe,m(function(r,n){return n+1}),0,e)},Ls=Fm,ks=L(function(e,r,n){e:for(;;)if(Se(e,r)<1){var t=e,o=r-1,l=a(M,r,n);e=t,r=o,n=l;continue e}else return n}),pn=m(function(e,r){return i(ks,e,r,k)}),ec=m(function(e,r){return i(Ls,e,a(pn,0,Gr(r)-1),r)}),rn=s3,p$=function(e){var r=rn(e);return 97<=r&&r<=122},g$=function(e){var r=rn(e);return r<=90&&65<=r},Ts=function(e){return p$(e)||g$(e)},Ds=function(e){var r=rn(e);return r<=57&&48<=r},As=function(e){return p$(e)||g$(e)||Ds(e)},$r=function(e){return i(Oe,M,k,e)},Ha=Qm,Is=m(function(e,r){return`

(`+(D(e+1)+(") "+d$(Fs(r))))}),Fs=function(e){return a(Bs,e,k)},Bs=m(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,u=e.b,t=function(){var w=Ha(n);if(w.$===1)return!1;var C=w.a,z=C.a,y=C.b;return Ts(z)&&a(Ms,As,y)}(),o=t?"."+n:"['"+(n+"']"),f=u,s=a(M,o,r);e=f,r=s;continue e;case 1:var l=e.a,u=e.b,$="["+(D(l)+"]"),f=u,s=a(M,$,r);e=f,r=s;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var g=function(){return r.b?"The Json.Decode.oneOf at json"+a($e,"",$r(r)):"Json.Decode.oneOf"}(),x=g+(" failed in the following "+(D(Gr(d))+" ways:"));return a($e,`

`,a(M,x,a(ec,Is,d)))}else{var u=d.a,f=u,s=r;e=f,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a($e,"",$r(r)):"!"}();default:var _=e.a,p=e.b,x=function(){return r.b?"Problem with the value at json"+(a($e,"",$r(r))+`:

    `):`Problem with the given value:

`}();return x+(d$(a(js,4,p))+(`

`+_))}}),zr=32,e0=ne(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),r0=Pm,pt=Om,rc=m(function(e,r){return ol(r)/ol(e)}),at=Hm,gt=pt(a(rc,2,zr)),h$=j(e0,0,gt,r0,r0),b$=jm,_$=function(e){return{$:1,a:e}};m(function(e,r){return e(r)});m(function(e,r){return r(e)});var Jn=Um,n0=Mm,or=m(function(e,r){return Se(e,r)>0?e:r}),Es=function(e){return{$:0,a:e}},nc=Lm,Vs=m(function(e,r){e:for(;;){var n=a(nc,zr,e),t=n.a,o=n.b,l=a(M,Es(t),r);if(o.b){var u=o,$=l;e=u,r=$;continue e}else return $r(l)}}),w$=function(e){var r=e.a;return r},Rs=m(function(e,r){e:for(;;){var n=pt(r/zr);if(n===1)return a(nc,zr,e).a;var t=a(Vs,e,k),o=n;e=t,r=o;continue e}}),x$=m(function(e,r){if(r.q){var n=r.q*zr,t=Jn(a(rc,zr,n-1)),o=e?$r(r.F):r.F,l=a(Rs,o,r.q);return j(e0,n0(r.v)+n,a(or,5,t*gt),l,r.v)}else return j(e0,n0(r.v),gt,r0,r.v)}),Ns=Qe(function(e,r,n,t,o){e:for(;;){if(r<0)return a(x$,!1,{F:t,q:n/zr|0,v:o});var l=_$(i(b$,zr,r,e)),u=e,$=r-zr,f=n,s=a(M,l,t),d=o;e=u,r=$,n=f,t=s,o=d;continue e}}),Ws=m(function(e,r){if(e<=0)return h$;var n=e%zr,t=i(b$,n,e-n,r),o=e-n-zr;return A(Ns,r,o,e,k,t)}),Rr=function(e){return!e.$},ee=y3,ke=h3,Q=x3,Ze=b3,y$=m(function(e,r){return{eF:r.eF,gU:e,du:r.du,g8:r.g8,e_:r.e_,cX:r.cX,c2:r.c2,i7:r.i7}}),ht=S3,Hs=C3,sr=p3,ac=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Tr=function(e){return e},Gs=Tr,xl=Fr(function(e,r,n,t,o,l){return{eP:l,eU:r,fE:t,fH:n,fK:e,fL:o}}),Os=l3,Zn=Km,wa=t3,At=m(function(e,r){return e<1?r:i(wa,e,Zn(r),r)}),Ui=$3,qi=function(e){return e===""},Yi=m(function(e,r){return e<1?"":i(wa,0,e,r)}),S$=v3,yl=Qe(function(e,r,n,t,o){if(qi(o)||a(Os,"@",o))return U;var l=a(Ui,":",o);if(l.b){if(l.b.b)return U;var u=l.a,$=S$(a(At,u+1,o));if($.$===1)return U;var f=$;return q(pr(xl,e,a(Yi,u,o),f,r,n,t))}else return q(pr(xl,e,o,U,r,n,t))}),Sl=ne(function(e,r,n,t){if(qi(t))return U;var o=a(Ui,"/",t);if(o.b){var l=o.a;return A(yl,e,a(At,l,t),r,n,a(Yi,l,t))}else return A(yl,e,"/",r,n,t)}),Cl=L(function(e,r,n){if(qi(n))return U;var t=a(Ui,"?",n);if(t.b){var o=t.a;return j(Sl,e,q(a(At,o+1,n)),r,a(Yi,o,n))}else return j(Sl,e,U,r,n)});m(function(e,r){if(qi(r))return U;var n=a(Ui,"#",r);if(n.b){var t=n.a;return i(Cl,e,q(a(At,t+1,r)),a(Yi,t,r))}else return i(Cl,e,U,r)});var Us=u3,It=function(e){},Ft=ca,qs=Ft(0),C$=ne(function(e,r,n,t){if(t.b){var o=t.a,l=t.b;if(l.b){var u=l.a,$=l.b;if($.b){var f=$.a,s=$.b;if(s.b){var d=s.a,g=s.b,_=n>500?i(Oe,e,r,$r(g)):j(C$,e,r,n+1,g);return a(e,o,a(e,u,a(e,f,a(e,d,_))))}else return a(e,o,a(e,u,a(e,f,r)))}else return a(e,o,a(e,u,r))}else return a(e,o,r)}else return r}),ar=L(function(e,r,n){return j(C$,e,r,0,n)}),re=m(function(e,r){return i(ar,m(function(n,t){return a(M,e(n),t)}),k,r)}),Pi=Zo,tc=m(function(e,r){return a(Pi,function(n){return Ft(e(n))},r)}),Ys=L(function(e,r,n){return a(Pi,function(t){return a(Pi,function(o){return Ft(a(e,t,o))},n)},r)}),Js=function(e){return i(ar,Ys(M),Ft(k),e)},Zs=R3,Xs=m(function(e,r){var n=r;return Wu(a(Pi,Zs(e),n))}),Qs=L(function(e,r,n){return a(tc,function(t){return 0},Js(a(re,Xs(e),r)))}),Ks=L(function(e,r,n){return Ft(0)}),ed=m(function(e,r){var n=r;return a(tc,e,n)});en.Task=E3(qs,Qs,Ks,ed);var rd=Gu("Task"),ic=m(function(e,r){return rd(a(tc,e,r))}),nd=x1,ad=Zm,Mi={$:1},z$=function(e){return{$:2,a:e}},oc={$:0},Dr=m(function(e,r){return{$:0,a:e,b:r}}),Be=L(function(e,r,n){return r(e(n))}),la=function(e){var r=e.b.t;return r.a},td=function(e){var r=e.a,n=e.b.ac,t=e.b.t,o=e.b.ax;if(o.b){var l=o.a,u=o.b;return q(a(Dr,r,{t:l,ax:u,ac:a(M,t,n)}))}else return U},Ie=m(function(e,r){if(r.$)return e;var n=r.a;return n}),id=L(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 1:return n;case 2:var l=t.a.ei;return(Se(l+r.g8,la(n).eF)>0?a(Be,td,Ie(a(Dr,Mi,o))):Tr)(a(Dr,z$({ei:l+r.g8}),o));default:var u=o.t,$=u.a,f=u.b,s=a(y$,$.gU,fe(r,{eF:$.eF+r.g8})),d=a(e,s,f);return a(Dr,oc,{t:P(s,d),ax:k,ac:a(M,o.t,o.ac)})}}),P$=m(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,o=n;e=t,r=o;continue e}else return r}}),od=L(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,l=e-1,u=o,$=a(M,t,n);e=l,r=u,n=$;continue e}else return n}}),cd=m(function(e,r){return $r(i(od,e,r,k))}),M$=L(function(e,r,n){if(r<=0)return k;{var t=P(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,y=o.a,l=o.b,u=l.a;return v([y,u]);case 3:if(t.b.b.b.b){var $=t.b,y=$.a,f=$.b,u=f.a,s=f.b,d=s.a;return v([y,u,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var g=t.b,y=g.a,_=g.b,u=_.a,p=_.b,d=p.a,x=p.b,w=x.a,C=x.b;return e>1e3?a(M,y,a(M,u,a(M,d,a(M,w,a(cd,r-4,C))))):a(M,y,a(M,u,a(M,d,a(M,w,i(M$,e+1,r-4,C)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var z=t.b,y=z.a;return v([y])}}),ld=m(function(e,r){return i(M$,0,e,r)}),ud=m(function(e,r){var n=r.b.ac,t=r.b.t,o=r.b.ax,l=X($r(n),X(v([t]),o)),u=a(ld,e,l),$=a(P$,e,l);if($.b){var f=$.a,s=$.b;return a(Dr,Mi,{t:f,ax:s,ac:$r(u)})}else{var d=$r(u);if(d.b){var g=d.a,_=d.b;return a(Dr,Mi,{t:g,ax:k,ac:_})}else return r}}),$d=function(e){var r=e.b;return a(Dr,Mi,r)},vd=function(e){var r=e.b;return a(Dr,z$({ei:la(e).eF}),r)},fd=function(e){var r=e.b;return a(Dr,oc,r)},md=m(function(e,r){switch(e.$){case 1:return $d(r);case 2:return fd(r);case 3:return vd(r);default:var n=e.a;return a(ud,n,r)}}),ji=m(function(e,r){var n=r.a,t=r.b;return P(e(n),t)}),sd=m(function(e,r){return fe(r,{a_:e(r.a_)})}),dd=function(e){return{$:3,a:e}},pd=function(e){return{$:2,a:e}},j$=m(function(e,r){return{$:0,a:e,b:r}}),gd=m(function(e,r){return{$:1,a:e,b:r}}),He=m(function(e,r){if(r.$)return U;var n=r.a;return q(e(n))}),_e=function(e){return e<0?-e:e},L$=f3,hd=L(function(e,r,n){return a(Ie,0/0,L$(a(e,r,n)))}),Bt=m(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,l=t;e=o,r=l;continue e}else return!1}),bd=r3,k$=function(e){return i(bd,M,k,e)},_d=m(function(e,r){var n=a(Bt,function(t){return t!=="0"&&t!=="."},k$(r));return X(e&&n?"-":"",r)}),ue=Vu,a0=Xm,T$=d3,D$=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ha(n);if(t.$===1)return"01";var o=t.a;return a(a0,"0",D$(o))}else{var l=rn(r);return l>=48&&l<57?a(a0,T$(l+1),n):"0"}},t0=Gm,wd=Jm,Ji=function(e){return a(a0,e,"")},A$=L(function(e,r,n){return e<=0?n:i(A$,e>>1,X(r,r),e&1?X(n,r):n)}),bt=m(function(e,r){return i(A$,e,r,"")}),i0=L(function(e,r,n){return X(n,a(bt,e-Zn(n),Ji(r)))}),o0=e3,I$=function(e){var r=a(K0,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return P(n,o)}else{var n=r.a;return P(n,"0")}else return P("0","0")},xd=function(e){var r=a(K0,"e",ue(_e(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,l=a(Ie,0,S$(a(Us,"+",o)?a(At,1,o):o)),u=I$(n),$=u.a,f=u.b,s=X($,f),d=l<0?a(Ie,"0",a(He,function(g){var _=g.a,p=g.b;return _+("."+p)},a(He,ji(Ji),Ha(X(a(bt,_e(l),"0"),s))))):i(i0,l+1,"0",s);return X(e<0?"-":"",d)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},yd=L(function(e,r,n){if(t0(n)||wd(n))return ue(n);var t=n<0,o=I$(xd(_e(n))),l=o.a,u=o.b,$=Zn(l)+r,f=X(a(bt,-$+1,"0"),i(i0,$,"0",X(l,u))),s=Zn(f),d=a(or,1,$),g=a(e,t,i(wa,d,s,f)),_=i(wa,0,d,f),p=g?o0(a(Ie,"1",a(He,D$,Ha(o0(_))))):_,x=Zn(p),w=p==="0"?p:r<=0?X(p,a(bt,_e(r),"0")):Se(r,Zn(u))<0?i(wa,0,x-r,p)+("."+i(wa,x-r,x,p)):X(l+".",i(i0,r,"0",u));return a(_d,t,w)}),F$=yd(m(function(e,r){var n=Ha(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,o=t.a;return function(l){return l>53&&e||l>=53&&!e}(rn(o))})),Sd=hd(F$),Cd=L(function(e,r,n){var t=a(rc,10,_e(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(Sd,o,n)}),B$=Am,Zi=m(function(e,r){e:for(;;){if(r.$===-2)return U;var n=r.b,t=r.c,o=r.d,l=r.e,u=a(B$,e,n);switch(u){case 0:var $=e,f=o;e=$,r=f;continue e;case 1:return q(t);default:var $=e,f=l;e=$,r=f;continue e}}}),se=Qe(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),tn={$:-2},Ia=Qe(function(e,r,n,t,o){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,$=o.d,f=o.e;if(t.$===-1&&!t.a){t.a;var s=t.b,d=t.c,g=t.d,_=t.e;return A(se,0,r,n,A(se,1,s,d,g,_),A(se,1,l,u,$,f))}else return A(se,e,l,u,A(se,0,r,n,t,$),f)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var s=t.b,d=t.c,p=t.d;p.a;var x=p.b,w=p.c,C=p.d,z=p.e,_=t.e;return A(se,0,s,d,A(se,1,x,w,C,z),A(se,1,r,n,_,o))}else return A(se,e,r,n,t,o)}),c0=L(function(e,r,n){if(n.$===-2)return A(se,0,e,r,tn,tn);var t=n.a,o=n.b,l=n.c,u=n.d,$=n.e,f=a(B$,e,o);switch(f){case 0:return A(Ia,t,o,l,i(c0,e,r,u),$);case 1:return A(se,t,o,r,u,$);default:return A(Ia,t,o,l,u,i(c0,e,r,$))}}),ra=L(function(e,r,n){var t=i(c0,e,r,n);if(t.$===-1&&!t.a){t.a;var o=t.b,l=t.c,u=t.d,$=t.e;return A(se,1,o,l,u,$)}else{var f=t;return f}}),zd=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},E$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d;o.a;var l=o.b,u=o.c,$=o.d,f=o.e,s=e.e;s.a;var d=s.b,g=s.c,_=s.d;_.a;var p=_.b,x=_.c,w=_.d,C=_.e,z=s.e;return A(se,0,p,x,A(se,1,n,t,A(se,0,l,u,$,f),w),A(se,1,d,g,C,z))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var l=y.b,u=y.c,$=y.d,f=y.e,T=e.e;T.a;var d=T.b,g=T.c,_=T.d,z=T.e;return A(se,1,n,t,A(se,0,l,u,$,f),A(se,0,d,g,_,z))}else return e},zl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d;o.a;var l=o.b,u=o.c,$=o.d;$.a;var f=$.b,s=$.c,d=$.d,g=$.e,_=o.e,p=e.e;p.a;var x=p.b,w=p.c,C=p.d,z=p.e;return A(se,0,l,u,A(se,1,f,s,d,g),A(se,1,n,t,_,A(se,0,x,w,C,z)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var l=y.b,u=y.c,T=y.d,_=y.e,O=e.e;O.a;var x=O.b,w=O.c,C=O.d,z=O.e;return A(se,1,n,t,A(se,0,l,u,T,_),A(se,0,x,w,C,z))}else return e},Pd=Gi(function(e,r,n,t,o,l,u){if(l.$===-1&&!l.a){l.a;var $=l.b,f=l.c,s=l.d,d=l.e;return A(se,n,$,f,s,A(se,0,t,o,d,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var g=u.d;return g.a,zl(r)}else break e;else return u.a,u.d,zl(r);else break e;return r}}),$i=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,l=o.a,u=o.d,$=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,A(se,r,n,t,$i(o),$);var f=E$(e);if(f.$===-1){var s=f.a,d=f.b,g=f.c,_=f.d,p=f.e;return A(Ia,s,d,g,$i(_),p)}else return tn}else return A(se,r,n,t,$i(o),$)}else return tn},ut=m(function(e,r){if(r.$===-2)return tn;var n=r.a,t=r.b,o=r.c,l=r.d,u=r.e;if(Se(e,t)<0)if(l.$===-1&&l.a===1){l.a;var $=l.d;if($.$===-1&&!$.a)return $.a,A(se,n,t,o,a(ut,e,l),u);var f=E$(r);if(f.$===-1){var s=f.a,d=f.b,g=f.c,_=f.d,p=f.e;return A(Ia,s,d,g,a(ut,e,_),p)}else return tn}else return A(se,n,t,o,a(ut,e,l),u);else return a(Md,e,E0(Pd,e,r,n,t,o,l,u))}),Md=m(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,l=r.d,u=r.e;if(xe(e,t)){var $=zd(u);if($.$===-1){var f=$.b,s=$.c;return A(Ia,n,f,s,l,$i(u))}else return tn}else return A(Ia,n,t,o,l,a(ut,e,u))}else return tn}),V$=m(function(e,r){var n=a(ut,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,o=n.c,l=n.d,u=n.e;return A(se,1,t,o,l,u)}else{var $=n;return $}}),Xt=L(function(e,r,n){var t=r(a(Zi,e,n));if(t.$)return a(V$,e,n);var o=t.a;return i(ra,e,o,n)}),jd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Xt,r,He(function(t){if(t.$===1){var o=t.a,l=o.a,u=o.b;return a(gd,P(l,u),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Xt,r,He(function(t){if(t.$)return t;var o=t.a,l=o.a,u=o.b;return a(j$,P(l,u),i(Cd,l,u,n))}));case 3:var r=e.a,n=e.b;return a(Xt,r,He(function(t){return t.$===3?dd(n):t}));default:var r=e.a,n=e.b;return a(Xt,r,He(function(t){return t.$===2?pd(n):t}))}},Ld=function(e){return sd(jd(e))},kd=m(function(e,r){return a(re,Ld(e),r)}),Td=m(function(e,r){return fe(r,{gU:a(kd,e,r.gU)})}),Dd=m(function(e,r){var n=r.a,t=r.b;return a(Dr,n,fe(t,{t:a(ji,Td(e),t.t)}))}),l0=m(function(e,r){var n=r.a,t=r.b;return P(n,e(t))}),Ad=L(function(e,r,n){var t=n.a,o=n.b,l=o.t;return a(Dr,t,fe(o,{t:a(l0,a(e,l.a,r),l)}))}),Id=ne(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return fe(t,{bP:!t.bP});case 2:var o=n.a;return fe(t,{W:i(id,e,o,t.W)});case 3:var l=n.a;return fe(t,{bI:l});case 4:var u=n.a;return fe(t,{W:a(Dd,u,t.W)});case 5:var $=n.a;return fe(t,{W:i(Ad,r,$,t.W)});default:var f=n.a;return fe(t,{W:a(md,f,t.W)})}}),Fd=m(function(e,r){return a(Dr,oc,{t:P(e,r(e)),ax:k,ac:k})}),Bd=N3,Pl=Bd(k),Ed=function(e){return{$:2,a:e}},Li=w3,Fa=_3,Vd=U3("tick",a(ee,function(e){return a(ee,function(r){return a(ee,function(n){return a(ee,function(t){return a(ee,function(o){return a(ee,function(l){return a(ee,function(u){return sr({eF:u,du:l,g8:o,e_:t,cX:n,c2:r,i7:e})},a(Q,"clock",Ze))},a(Q,"devicePixelRatio",Ze))},a(Q,"dt",Ze))},a(Q,"keyboard",a(ee,function(t){return a(ee,function(o){return a(ee,function(l){return a(ee,function(u){return a(ee,function($){return a(ee,function(f){return a(ee,function(s){return a(ee,function(d){return a(ee,function(g){return sr({gn:g,gW:d,eI:s,g7:f,hQ:$,id:u,ij:l,fR:o,f$:t})},a(Q,"alt",ke))},a(Q,"control",ke))},a(Q,"down",ke))},a(Q,"downs",Li(Fa)))},a(Q,"left",ke))},a(Q,"pressedKeys",Li(Fa)))},a(Q,"right",ke))},a(Q,"shift",ke))},a(Q,"up",ke))))},a(Q,"pointer",a(ee,function(n){return a(ee,function(t){return a(ee,function(o){return a(ee,function(l){return a(ee,function(u){return a(ee,function($){return a(ee,function(f){return a(ee,function(s){return sr({eI:s,dB:f,hY:$,ik:u,il:l,f$:o,ja:t,je:n})},a(Q,"down",ke))},a(Q,"isDown",ke))},a(Q,"move",ke))},a(Q,"rightDown",ke))},a(Q,"rightUp",ke))},a(Q,"up",ke))},a(Q,"x",Ze))},a(Q,"y",Ze))))},a(Q,"screen",a(ee,function(r){return a(ee,function(n){return sr({hq:n,i8:r})},a(Q,"height",Ze))},a(Q,"width",Ze))))},a(Q,"wheel",a(ee,function(e){return a(ee,function(r){return sr({g$:r,g0:e})},a(Q,"deltaX",Ze))},a(Q,"deltaY",Ze))))),Rd=function(e){return e.ep,Vd(Ed)},Nd=function(e){return{$:5,a:e}},Wd={$:0},ki=m(function(e,r){return e}),Hd=function(e){var r=e.b.t;return r.b},Gd=function(e){return{$:1,a:e}},Od=Gd,R$=function(e){return{$:8,a:e}},ze=R$,_t=function(e){return{$:0,a:e}},Et=L(function(e,r,n){return e(r(n))}),Ud=a(Et,_t,ki),vn=Ud,Ve=function(e){return{$:1,a:e}},fn=Ve,N$=m(function(e,r){return{$:9,a:e,b:r}}),ta={$:0},W$=m(function(e,r){return r.$===3?ta:a(N$,e,r)}),u0=function(e){return a(W$,4,e)},h={gc:"a",df:"atv",ge:"ab",gf:"cx",gg:"cy",gh:"acb",gi:"accx",gj:"accy",gk:"acr",ez:"al",eA:"ar",gl:"at",dg:"ah",dh:"av",go:"s",gv:"bh",gw:"b",gB:"w7",gD:"bd",gE:"bdt",cr:"bn",gF:"bs",cu:"cpe",gQ:"cp",gR:"cpx",gS:"cpy",aI:"c",cy:"ctr",cz:"cb",cA:"ccx",aJ:"ccy",bM:"cl",cB:"cr",gV:"ct",gY:"cptr",gZ:"ctxt",hg:"fcs",eO:"focus-within",hh:"fs",hl:"g",dx:"hbh",dy:"hc",eS:"he",dz:"hf",eT:"hfp",ht:"hv",hx:"ic",hz:"fr",cI:"lbl",hD:"iml",hE:"imlf",hF:"imlp",hG:"implw",hH:"it",hN:"i",e6:"lnk",bv:"nb",fx:"notxt",h2:"ol",h3:"or",a7:"oq",h8:"oh",fB:"pg",fC:"p",ia:"ppe",im:"ui",ao:"r",ip:"sb",iq:"sbx",ir:"sby",is:"sbt",iw:"e",ix:"cap",iz:"sev",iF:"sk",af:"t",iM:"tc",iN:"w8",iO:"w2",iP:"w9",iQ:"tj",c6:"tja",iR:"tl",iS:"w3",iT:"w5",iU:"w4",iV:"tr",iW:"w6",iX:"w1",iY:"tun",fZ:"ts",bf:"clr",i3:"u",eq:"wc",f8:"we",er:"wf",f9:"wfp",es:"wrp"},cc=Nu,Br=m(function(e,r){return a(G0,e,cc(r))}),Lr=Br("className"),Cr=function(e){return Ve(Lr(e))},H$=m(function(e,r){return{$:2,a:e,b:r}}),qd=m(function(e,r){return{$:1,a:e,b:r}}),ir=function(e){return{$:0,a:e}},Pr=2,Yd={$:0},ua=Yd,Jd={$:0},Zd=h.go+(" "+h.aI),Xd=h.go+(" "+h.hl),Qd=h.go+(" "+h.fB),Kd=h.go+(" "+h.fC),e2=h.go+(" "+h.ao),r2=h.go+(" "+h.iw),n2=function(e){switch(e){case 0:return e2;case 1:return Zd;case 2:return r2;case 3:return Xd;case 4:return Kd;default:return Qd}},Ml=function(e){return{$:1,a:e}},Yn={$:0},$0=function(e){return{$:1,a:e}},jl=m(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return X(n,e);case 2:var t=r.a;return X(e,t);default:var n=r.a,t=r.b;return X(n,X(e,t))}}),Ll=L(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return X(a(re,function(l){return P(e,l)},t),r);case 2:var o=n.a;return X(r,a(re,function(l){return P(e,l)},o));default:var t=n.a,o=n.b;return X(a(re,function(l){return P(e,l)},t),X(r,a(re,function(l){return P(e,l)},o)))}}),Qt=4,a2=function(e){return{$:0,a:e}},t2=function(e){return{$:1,a:e}},Ce=function(e){return e>31?t2(1<<e-32):a2(1<<e)},G$=Ce(41),O$=Ce(40),U$=Ce(42),q$=Ce(43),Ge=vr("div"),Xi=tn,Y$=Xi,Qr=function(e){switch(e.$){case 0:var r=e.a;return D(r)+"px";case 1:return"auto";case 2:var n=e.a;return D(n)+"fr";case 3:var t=e.a,l=e.b;return"min"+(D(t)+Qr(l));default:var o=e.a,l=e.b;return"max"+(D(o)+Qr(l))}},Ne=qm,We=function(e){return D(Ne(e*255))},lc=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,t=r.b,o=r.c;return q("mv-"+(We(n)+("-"+(We(t)+("-"+We(o))))));default:var l=e.a,u=l.a,$=l.b,f=l.c,s=e.b,d=s.a,g=s.b,_=s.c,p=e.c,x=p.a,w=p.b,C=p.c,z=e.d;return q("tfrm-"+(We(u)+("-"+(We($)+("-"+(We(f)+("-"+(We(d)+("-"+(We(g)+("-"+(We(_)+("-"+(We(x)+("-"+(We(w)+("-"+(We(C)+("-"+We(z))))))))))))))))))))}},wt=function(e){switch(e.$){case 13:var f=e.a;return f;case 12:var f=e.a;return e.b,f;case 0:var n=e.a;return n;case 1:var f=e.a;return f;case 2:var r=e.a;return"font-size-"+D(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,s=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var o=e.a;return"grid-rows-"+(a($e,"-",a(re,Qr,o.$9))+("-cols-"+(a($e,"-",a(re,Qr,o.au))+("-space-x-"+(Qr(o.iA.a)+("-space-y-"+Qr(o.iA.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(D(l.ao)+("-"+(D(l.gT)+("-"+(D(l.i8)+("-"+D(l.hq)))))));case 11:var u=e.a,$=e.b,f=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a($e," ",a(re,function(d){var g=wt(d);if(g==="")return"";var _=g;return _+("-"+f)},$));default:var s=e.a;return a(Ie,"",lc(s))}},i2=m(function(e,r){var n=r;return i(ra,e,0,n)}),o2=m(function(e,r){var n=a(Zi,e,r);return!n.$}),c2=m(function(e,r){var n=r;return a(o2,e,n)}),J$=m(function(e,r){var n=r.a,t=r.b,o=wt(e);return a(c2,o,n)?r:P(a(i2,o,n),a(M,e,t))}),ve=m(function(e,r){return{$:0,a:e,b:r}}),$t=m(function(e,r){return{$:0,a:e,b:r}}),S=function(e){return"."+e},l2=L(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(M,o,n)}),Mn=m(function(e,r){return i(ar,l2(e),k,r)}),xa=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return"rgba("+(D(Ne(r*255))+(","+D(Ne(n*255))+(","+D(Ne(t*255))+(","+(ue(o)+")")))))},v0=function(e){return a($e," ",a(Mn,Tr,v([e.eX?q("inset"):U,q(ue(e.fy.a)+"px"),q(ue(e.fy.b)+"px"),q(ue(e.bi)+"px"),q(ue(e.bA)+"px"),q(xa(e.cw))])))},Z$=function(e){return v([a($t,S(h.eO)+":focus-within",a(Mn,Tr,v([a(He,function(r){return a(ve,"border-color",xa(r))},e.gC),a(He,function(r){return a(ve,"background-color",xa(r))},e.gs),a(He,function(r){return a(ve,"box-shadow",v0({bi:r.bi,cw:r.cw,eX:!1,fy:a(l0,at,a(ji,at,r.fy)),bA:r.bA}))},e.it),q(a(ve,"outline","none"))]))),a($t,S(h.go)+":focus .focusable, "+(S(h.go)+".focusable:focus, "+(".ui-slide-bar:focus + "+(S(h.go)+" .focusable-thumb"))),a(Mn,Tr,v([a(He,function(r){return a(ve,"border-color",xa(r))},e.gC),a(He,function(r){return a(ve,"background-color",xa(r))},e.gs),a(He,function(r){return a(ve,"box-shadow",v0({bi:r.bi,cw:r.cw,eX:!1,fy:a(l0,at,a(ji,at,r.fy)),bA:r.bA}))},e.it),q(a(ve,"outline","none"))])))])},Zr=function(e){return vr(qu(e))},X$=m(function(e,r){return a(G0,n1(e),Yu(r))}),jo=m(function(e,r){return{$:2,a:e,b:r}}),uc=function(e){return{$:6,a:e}},J=m(function(e,r){return{$:1,a:e,b:r}}),yr=m(function(e,r){return{$:0,a:e,b:r}}),I=m(function(e,r){return{$:4,a:e,b:r}}),b=m(function(e,r){return{$:0,a:e,b:r}}),u2=m(function(e,r){return{$:3,a:e,b:r}}),Q$=v([0,1,2,3,4,5]),$2=m(function(e,r){return r.b?i(ar,M,r,e):e}),_r=function(e){return i(ar,$2,k,e)},Ga=m(function(e,r){return _r(a(re,e,r))}),v2=function(e){switch(e){case 0:return S(h.gV);case 1:return S(h.cz);case 2:return S(h.cB);case 3:return S(h.bM);case 4:return S(h.cA);default:return S(h.aJ)}},Ti=function(e){switch(e){case 0:return S(h.gl);case 1:return S(h.ge);case 2:return S(h.eA);case 3:return S(h.ez);case 4:return S(h.gf);default:return S(h.gg)}},tt=function(e){var r=function(n){var t=e(n),o=t.a,l=t.b;return v([a(I,v2(n),o),a(J,S(h.go),v([a(I,Ti(n),l)]))])};return uc(a(Ga,r,Q$))},kl=v([a(b,"display","flex"),a(b,"flex-direction","column"),a(b,"white-space","pre"),a(I,S(h.dx),v([a(b,"z-index","0"),a(J,S(h.gv),v([a(b,"z-index","-1")]))])),a(I,S(h.is),v([a(J,S(h.af),v([a(I,S(h.dz),v([a(b,"flex-grow","0")])),a(I,S(h.er),v([a(b,"align-self","auto !important")]))]))])),a(J,S(h.dy),v([a(b,"height","auto")])),a(J,S(h.dz),v([a(b,"flex-grow","100000")])),a(J,S(h.er),v([a(b,"width","100%")])),a(J,S(h.f9),v([a(b,"width","100%")])),a(J,S(h.eq),v([a(b,"align-self","flex-start")])),tt(function(e){switch(e){case 0:return P(v([a(b,"justify-content","flex-start")]),v([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]));case 1:return P(v([a(b,"justify-content","flex-end")]),v([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]));case 2:return P(v([a(b,"align-items","flex-end")]),v([a(b,"align-self","flex-end")]));case 3:return P(v([a(b,"align-items","flex-start")]),v([a(b,"align-self","flex-start")]));case 4:return P(v([a(b,"align-items","center")]),v([a(b,"align-self","center")]));default:return P(v([a(J,S(h.go),v([a(b,"margin-top","auto"),a(b,"margin-bottom","auto")]))]),v([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))}})]),f2=function(e){var r=function(n){return v([a(J,S(h.go),v([a(I,Ti(n),e(n))]))])};return uc(a(Ga,r,Q$))},m2=function(){return v([0,1,2,3,4,5])}(),s2=v([a(yr,"html,body",v([a(b,"height","100%"),a(b,"padding","0"),a(b,"margin","0")])),a(yr,X(S(h.go),X(S(h.iw),S(h.hx))),v([a(b,"display","block"),a(I,S(h.dz),v([a(J,"img",v([a(b,"max-height","100%"),a(b,"object-fit","cover")]))])),a(I,S(h.er),v([a(J,"img",v([a(b,"max-width","100%"),a(b,"object-fit","cover")]))]))])),a(yr,S(h.go)+":focus",v([a(b,"outline","none")])),a(yr,S(h.im),v([a(b,"width","100%"),a(b,"height","auto"),a(b,"min-height","100%"),a(b,"z-index","0"),a(I,X(S(h.go),S(h.dz)),v([a(b,"height","100%"),a(J,S(h.dz),v([a(b,"height","100%")]))])),a(J,S(h.hz),v([a(I,S(h.bv),v([a(b,"position","fixed"),a(b,"z-index","20")]))]))])),a(yr,S(h.bv),v([a(b,"position","relative"),a(b,"border","none"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(I,S(h.iw),kl),uc(function(e){return a(re,e,m2)}(function(e){switch(e){case 0:return a(I,S(h.gc),v([a(b,"position","absolute"),a(b,"bottom","100%"),a(b,"left","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(J,S(h.dz),v([a(b,"height","auto")])),a(J,S(h.er),v([a(b,"width","100%")])),a(b,"pointer-events","none"),a(J,"*",v([a(b,"pointer-events","auto")]))]));case 1:return a(I,S(h.gw),v([a(b,"position","absolute"),a(b,"bottom","0"),a(b,"left","0"),a(b,"height","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(J,"*",v([a(b,"pointer-events","auto")])),a(J,S(h.dz),v([a(b,"height","auto")]))]));case 2:return a(I,S(h.h3),v([a(b,"position","absolute"),a(b,"left","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(J,"*",v([a(b,"pointer-events","auto")]))]));case 3:return a(I,S(h.h2),v([a(b,"position","absolute"),a(b,"right","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(J,"*",v([a(b,"pointer-events","auto")]))]));case 4:return a(I,S(h.hz),v([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(J,"*",v([a(b,"pointer-events","auto")]))]));default:return a(I,S(h.gv),v([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"z-index","0"),a(b,"pointer-events","none"),a(J,"*",v([a(b,"pointer-events","auto")]))]))}}))])),a(yr,S(h.go),v([a(b,"position","relative"),a(b,"border","none"),a(b,"flex-shrink","0"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(b,"resize","none"),a(b,"font-feature-settings","inherit"),a(b,"box-sizing","border-box"),a(b,"margin","0"),a(b,"padding","0"),a(b,"border-width","0"),a(b,"border-style","solid"),a(b,"font-size","inherit"),a(b,"color","inherit"),a(b,"font-family","inherit"),a(b,"line-height","1"),a(b,"font-weight","inherit"),a(b,"text-decoration","none"),a(b,"font-style","inherit"),a(I,S(h.es),v([a(b,"flex-wrap","wrap")])),a(I,S(h.fx),v([a(b,"-moz-user-select","none"),a(b,"-webkit-user-select","none"),a(b,"-ms-user-select","none"),a(b,"user-select","none")])),a(I,S(h.gY),v([a(b,"cursor","pointer")])),a(I,S(h.gZ),v([a(b,"cursor","text")])),a(I,S(h.ia),v([a(b,"pointer-events","none !important")])),a(I,S(h.cu),v([a(b,"pointer-events","auto !important")])),a(I,S(h.bf),v([a(b,"opacity","0")])),a(I,S(h.a7),v([a(b,"opacity","1")])),a(I,S(X(h.ht,h.bf))+":hover",v([a(b,"opacity","0")])),a(I,S(X(h.ht,h.a7))+":hover",v([a(b,"opacity","1")])),a(I,S(X(h.hg,h.bf))+":focus",v([a(b,"opacity","0")])),a(I,S(X(h.hg,h.a7))+":focus",v([a(b,"opacity","1")])),a(I,S(X(h.df,h.bf))+":active",v([a(b,"opacity","0")])),a(I,S(X(h.df,h.a7))+":active",v([a(b,"opacity","1")])),a(I,S(h.fZ),v([a(b,"transition",a($e,", ",a(re,function(e){return e+" 160ms"},v(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,S(h.ip),v([a(b,"overflow","auto"),a(b,"flex-shrink","1")])),a(I,S(h.iq),v([a(b,"overflow-x","auto"),a(I,S(h.ao),v([a(b,"flex-shrink","1")]))])),a(I,S(h.ir),v([a(b,"overflow-y","auto"),a(I,S(h.aI),v([a(b,"flex-shrink","1")])),a(I,S(h.iw),v([a(b,"flex-shrink","1")]))])),a(I,S(h.gQ),v([a(b,"overflow","hidden")])),a(I,S(h.gR),v([a(b,"overflow-x","hidden")])),a(I,S(h.gS),v([a(b,"overflow-y","hidden")])),a(I,S(h.eq),v([a(b,"width","auto")])),a(I,S(h.cr),v([a(b,"border-width","0")])),a(I,S(h.gD),v([a(b,"border-style","dashed")])),a(I,S(h.gE),v([a(b,"border-style","dotted")])),a(I,S(h.gF),v([a(b,"border-style","solid")])),a(I,S(h.af),v([a(b,"white-space","pre"),a(b,"display","inline-block")])),a(I,S(h.hH),v([a(b,"line-height","1.05"),a(b,"background","transparent"),a(b,"text-align","inherit")])),a(I,S(h.iw),kl),a(I,S(h.ao),v([a(b,"display","flex"),a(b,"flex-direction","row"),a(J,S(h.go),v([a(b,"flex-basis","0%"),a(I,S(h.f8),v([a(b,"flex-basis","auto")])),a(I,S(h.e6),v([a(b,"flex-basis","auto")]))])),a(J,S(h.dz),v([a(b,"align-self","stretch !important")])),a(J,S(h.eT),v([a(b,"align-self","stretch !important")])),a(J,S(h.er),v([a(b,"flex-grow","100000")])),a(J,S(h.cy),v([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"align-self","stretch")])),a(J,"u:first-of-type."+h.gk,v([a(b,"flex-grow","1")])),a(J,"s:first-of-type."+h.gi,v([a(b,"flex-grow","1"),a(J,S(h.gf),v([a(b,"margin-left","auto !important")]))])),a(J,"s:last-of-type."+h.gi,v([a(b,"flex-grow","1"),a(J,S(h.gf),v([a(b,"margin-right","auto !important")]))])),a(J,"s:only-of-type."+h.gi,v([a(b,"flex-grow","1"),a(J,S(h.gg),v([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(J,"s:last-of-type."+(h.gi+" ~ u"),v([a(b,"flex-grow","0")])),a(J,"u:first-of-type."+(h.gk+(" ~ s."+h.gi)),v([a(b,"flex-grow","0")])),tt(function(e){switch(e){case 0:return P(v([a(b,"align-items","flex-start")]),v([a(b,"align-self","flex-start")]));case 1:return P(v([a(b,"align-items","flex-end")]),v([a(b,"align-self","flex-end")]));case 2:return P(v([a(b,"justify-content","flex-end")]),k);case 3:return P(v([a(b,"justify-content","flex-start")]),k);case 4:return P(v([a(b,"justify-content","center")]),k);default:return P(v([a(b,"align-items","center")]),v([a(b,"align-self","center")]))}}),a(I,S(h.iz),v([a(b,"justify-content","space-between")])),a(I,S(h.cI),v([a(b,"align-items","baseline")]))])),a(I,S(h.aI),v([a(b,"display","flex"),a(b,"flex-direction","column"),a(J,S(h.go),v([a(b,"flex-basis","0px"),a(b,"min-height","min-content"),a(I,S(h.eS),v([a(b,"flex-basis","auto")]))])),a(J,S(h.dz),v([a(b,"flex-grow","100000")])),a(J,S(h.er),v([a(b,"width","100%")])),a(J,S(h.f9),v([a(b,"width","100%")])),a(J,S(h.eq),v([a(b,"align-self","flex-start")])),a(J,"u:first-of-type."+h.gh,v([a(b,"flex-grow","1")])),a(J,"s:first-of-type."+h.gj,v([a(b,"flex-grow","1"),a(J,S(h.gg),v([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]))])),a(J,"s:last-of-type."+h.gj,v([a(b,"flex-grow","1"),a(J,S(h.gg),v([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]))])),a(J,"s:only-of-type."+h.gj,v([a(b,"flex-grow","1"),a(J,S(h.gg),v([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(J,"s:last-of-type."+(h.gj+" ~ u"),v([a(b,"flex-grow","0")])),a(J,"u:first-of-type."+(h.gh+(" ~ s."+h.gj)),v([a(b,"flex-grow","0")])),tt(function(e){switch(e){case 0:return P(v([a(b,"justify-content","flex-start")]),v([a(b,"margin-bottom","auto")]));case 1:return P(v([a(b,"justify-content","flex-end")]),v([a(b,"margin-top","auto")]));case 2:return P(v([a(b,"align-items","flex-end")]),v([a(b,"align-self","flex-end")]));case 3:return P(v([a(b,"align-items","flex-start")]),v([a(b,"align-self","flex-start")]));case 4:return P(v([a(b,"align-items","center")]),v([a(b,"align-self","center")]));default:return P(v([a(b,"justify-content","center")]),k)}}),a(J,S(h.cy),v([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"width","100%"),a(b,"align-self","stretch !important")])),a(I,S(h.iz),v([a(b,"justify-content","space-between")]))])),a(I,S(h.hl),v([a(b,"display","-ms-grid"),a(J,".gp",v([a(J,S(h.go),v([a(b,"width","100%")]))])),a(u2,P("display","grid"),v([P("display","grid")])),f2(function(e){switch(e){case 0:return v([a(b,"justify-content","flex-start")]);case 1:return v([a(b,"justify-content","flex-end")]);case 2:return v([a(b,"align-items","flex-end")]);case 3:return v([a(b,"align-items","flex-start")]);case 4:return v([a(b,"align-items","center")]);default:return v([a(b,"justify-content","center")])}})])),a(I,S(h.fB),v([a(b,"display","block"),a(J,S(h.go+":first-child"),v([a(b,"margin","0 !important")])),a(J,S(h.go+(Ti(3)+(":first-child + ."+h.go))),v([a(b,"margin","0 !important")])),a(J,S(h.go+(Ti(2)+(":first-child + ."+h.go))),v([a(b,"margin","0 !important")])),tt(function(e){switch(e){case 0:return P(k,k);case 1:return P(k,k);case 2:return P(k,v([a(b,"float","right"),a(I,"::after",v([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case 3:return P(k,v([a(b,"float","left"),a(I,"::after",v([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case 4:return P(k,k);default:return P(k,k)}})])),a(I,S(h.hD),v([a(b,"white-space","pre-wrap !important"),a(b,"height","100%"),a(b,"width","100%"),a(b,"background-color","transparent")])),a(I,S(h.hG),v([a(I,S(h.iw),v([a(b,"flex-basis","auto")]))])),a(I,S(h.hF),v([a(b,"white-space","pre-wrap !important"),a(b,"cursor","text"),a(J,S(h.hE),v([a(b,"white-space","pre-wrap !important"),a(b,"color","transparent")]))])),a(I,S(h.fC),v([a(b,"display","block"),a(b,"white-space","normal"),a(b,"overflow-wrap","break-word"),a(I,S(h.dx),v([a(b,"z-index","0"),a(J,S(h.gv),v([a(b,"z-index","-1")]))])),a(jo,S(h.af),v([a(b,"display","inline"),a(b,"white-space","normal")])),a(jo,S(h.fC),v([a(b,"display","inline"),a(I,"::after",v([a(b,"content","none")])),a(I,"::before",v([a(b,"content","none")]))])),a(jo,S(h.iw),v([a(b,"display","inline"),a(b,"white-space","normal"),a(I,S(h.f8),v([a(b,"display","inline-block")])),a(I,S(h.hz),v([a(b,"display","flex")])),a(I,S(h.gv),v([a(b,"display","flex")])),a(I,S(h.gc),v([a(b,"display","flex")])),a(I,S(h.gw),v([a(b,"display","flex")])),a(I,S(h.h3),v([a(b,"display","flex")])),a(I,S(h.h2),v([a(b,"display","flex")])),a(J,S(h.af),v([a(b,"display","inline"),a(b,"white-space","normal")]))])),a(J,S(h.ao),v([a(b,"display","inline")])),a(J,S(h.aI),v([a(b,"display","inline-flex")])),a(J,S(h.hl),v([a(b,"display","inline-grid")])),tt(function(e){switch(e){case 0:return P(k,k);case 1:return P(k,k);case 2:return P(k,v([a(b,"float","right")]));case 3:return P(k,v([a(b,"float","left")]));case 4:return P(k,k);default:return P(k,k)}})])),a(I,".hidden",v([a(b,"display","none")])),a(I,S(h.iX),v([a(b,"font-weight","100")])),a(I,S(h.iO),v([a(b,"font-weight","200")])),a(I,S(h.iS),v([a(b,"font-weight","300")])),a(I,S(h.iU),v([a(b,"font-weight","400")])),a(I,S(h.iT),v([a(b,"font-weight","500")])),a(I,S(h.iW),v([a(b,"font-weight","600")])),a(I,S(h.gB),v([a(b,"font-weight","700")])),a(I,S(h.iN),v([a(b,"font-weight","800")])),a(I,S(h.iP),v([a(b,"font-weight","900")])),a(I,S(h.hN),v([a(b,"font-style","italic")])),a(I,S(h.iF),v([a(b,"text-decoration","line-through")])),a(I,S(h.i3),v([a(b,"text-decoration","underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(I,X(S(h.i3),S(h.iF)),v([a(b,"text-decoration","line-through underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(I,S(h.iY),v([a(b,"font-style","normal")])),a(I,S(h.iQ),v([a(b,"text-align","justify")])),a(I,S(h.c6),v([a(b,"text-align","justify-all")])),a(I,S(h.iM),v([a(b,"text-align","center")])),a(I,S(h.iV),v([a(b,"text-align","right")])),a(I,S(h.iR),v([a(b,"text-align","left")])),a(I,".modal",v([a(b,"position","fixed"),a(b,"left","0"),a(b,"top","0"),a(b,"width","100%"),a(b,"height","100%"),a(b,"pointer-events","none")]))]))]),xn=function(e){return v([a(yr,".v-"+e,v([a(b,"font-feature-settings",'"'+(e+'"'))])),a(yr,".v-"+(e+"-off"),v([a(b,"font-feature-settings",'"'+(e+'" 0'))]))])},d2=_r(v([a(re,function(e){return a(yr,".border-"+D(e),v([a(b,"border-width",D(e)+"px")]))},a(pn,0,6)),a(re,function(e){return a(yr,".font-size-"+D(e),v([a(b,"font-size",D(e)+"px")]))},a(pn,8,32)),a(re,function(e){return a(yr,".p-"+D(e),v([a(b,"padding",D(e)+"px")]))},a(pn,0,24)),v([a(yr,".v-smcp",v([a(b,"font-variant","small-caps")])),a(yr,".v-smcp-off",v([a(b,"font-variant","normal")]))]),xn("zero"),xn("onum"),xn("liga"),xn("dlig"),xn("ordn"),xn("tnum"),xn("afrc"),xn("frac")])),p2=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(h.go+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(h.go+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),g2=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,h2=`
input[type=range] {
  -webkit-appearance: none; 
  background: transparent;
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  width: 100%;
  outline: dashed 1px;
  height: 100%;
  opacity: 0;
}
`,b2=`
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-moz-range-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-ms-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range][orient=vertical]{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical;  /* WebKit */
}
`,_2=`
input[type=range]::-moz-range-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-ms-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-webkit-slider-runnable-track {
    background: transparent;
    cursor: pointer;
}
`,w2="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(S(h.go)+(S(h.ao)+(" > "+(S(h.go)+(" { flex-basis: auto !important; } "+(S(h.go)+(S(h.ao)+(" > "+(S(h.go)+(S(h.cy)+(" { flex-basis: auto !important; }}"+(g2+(h2+(_2+(b2+p2))))))))))))))),na=function(e){return a($e,"",e)},pa=m(function(e,r){return{cv:r,K:k,aP:k,ap:e}}),ga=m(function(e,r){var n=e,t=m(function(o,l){switch(o.$){case 0:var u=o.a,$=o.b;return fe(l,{aP:a(M,P(u,$),l.aP)});case 3:var f=o.a,s=f.a,d=f.b,g=o.b;return fe(l,{K:a(M,{cv:`
}`,K:k,aP:g,ap:"@supports ("+(s+(":"+(d+(") {"+n.ap))))},l.K)});case 5:var _=o.a,p=o.b;return fe(l,{K:a(M,a(ga,a(pa,n.ap+(" + "+_),""),p),l.K)});case 1:var x=o.a,w=o.b;return fe(l,{K:a(M,a(ga,a(pa,n.ap+(" > "+x),""),w),l.K)});case 2:var x=o.a,w=o.b;return fe(l,{K:a(M,a(ga,a(pa,n.ap+(" "+x),""),w),l.K)});case 4:var C=o.a,z=o.b;return fe(l,{K:a(M,a(ga,a(pa,X(n.ap,C),""),z),l.K)});default:var y=o.a;return fe(l,{K:a(M,a(ga,a(pa,n.ap,""),y),l.K)})}});return i(ar,t,n,r)}),x2=function(e){var r=function(o){return na(a(re,function(l){var u=l.a,$=l.b;return u+(":"+($+";"))},o))},n=function(o){var l=o.aP;return l.b?o.ap+("{"+(r(o.aP)+(o.cv+"}"))):""},t=function(o){var l=o;return X(n(l),na(a(re,t,l.K)))};return na(a(re,t,i(ar,m(function(o,l){var u=o.a,$=o.b;return a(M,a(ga,a(pa,u,""),$),l)}),k,e)))},Tl=X(w2,x2(X(s2,d2))),jn=Xo,K$=function(e){var r=e.fv;switch(r){case 0:return i(Zr,"div",k,v([i(Zr,"style",k,v([jn(Tl)]))]));case 1:return jn("");default:return i(Zr,"elm-ui-static-rules",v([a(X$,"rules",cc(Tl))]),k)}},y2=m(function(e,r){return i(Oe,k3(e),M3(),r)}),S2=function(e){return i(Oe,m(function(r,n){var t=r.a,o=r.b;return i(L3,t,o,n)}),j3(),e)},C2=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.h_;return'"'+(r+'"')}},z2=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},P2=function(e){if(e.$===5){var r=e.a;return a(Bt,z2,r.f2)}else return!1},Pa=m(function(e,r){return Se(e,r)<0?e:r}),Qa=L(function(e,r,n){var t=r.a,o=r.b;return e?n+(`
  `+(t+(": "+(o+" !important;")))):n+(`
  `+(t+(": "+(o+";"))))}),Ee=ne(function(e,r,n,t){if(r.$===1)return v([n+("{"+(i(Oe,Qa(!1),"",t)+`
}`))]);var o=r.a;switch(o){case 1:var l=e.ht;switch(l){case 0:return k;case 2:return v([n+("-hv {"+(i(Oe,Qa(!0),"",t)+`
}`))]);default:return v([n+("-hv:hover {"+(i(Oe,Qa(!1),"",t)+`
}`))])}case 0:var u=i(Oe,Qa(!1),"",t);return v([n+("-fs:focus {"+(u+`
}`)),"."+(h.go+(":focus "+(n+"-fs  {")))+(u+`
}`),n+"-fs:focus-within {"+(u+`
}`),".ui-slide-bar:focus + "+(S(h.go)+(" .focusable-thumb"+(n+"-fs {")))+(u+`
}`)]);default:return v([n+("-act:active {"+(i(Oe,Qa(!1),"",t)+`
}`))])}}),M2=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+D(n)))}},j2=function(e){if(e.$===5){var r=e.a;return q(a($e,", ",a(re,M2,r.f2)))}else return U},L2=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,t=r.b,o=r.c;return q("translate3d("+(ue(n)+("px, "+(ue(t)+("px, "+(ue(o)+"px)"))))));default:var l=e.a,u=l.a,$=l.b,f=l.c,s=e.b,d=s.a,g=s.b,_=s.c,p=e.c,x=p.a,w=p.b,C=p.c,z=e.d,y="translate3d("+(ue(u)+("px, "+(ue($)+("px, "+(ue(f)+"px)"))))),T="scale3d("+(ue(d)+(", "+(ue(g)+(", "+(ue(_)+")"))))),O="rotate3d("+(ue(x)+(", "+(ue(w)+(", "+(ue(C)+(", "+(ue(z)+"rad)")))))));return q(y+(" "+(T+(" "+O))))}},$c=L(function(e,r,n){switch(r.$){case 0:var t=r.a,o=r.b;return j(Ee,e,n,t,o);case 13:var f=r.a,_=r.b;return j(Ee,e,n,"."+f,v([a(ve,"box-shadow",_)]));case 12:var f=r.a,l=r.b,u=a(or,0,a(Pa,1,1-l));return j(Ee,e,n,"."+f,v([a(ve,"opacity",ue(u))]));case 2:var $=r.a;return j(Ee,e,n,".font-size-"+D($),v([a(ve,"font-size",D($)+"px")]));case 1:var f=r.a,s=r.b,d=a($e,", ",a(Mn,j2,s)),g=v([a(ve,"font-family",a($e,", ",a(re,C2,s))),a(ve,"font-feature-settings",d),a(ve,"font-variant",a(Bt,P2,s)?"small-caps":"normal")]);return j(Ee,e,n,"."+f,g);case 3:var pe=r.a,_=r.b,wo=r.c;return j(Ee,e,n,"."+pe,v([a(ve,_,wo)]));case 4:var pe=r.a,_=r.b,p=r.c;return j(Ee,e,n,"."+pe,v([a(ve,_,xa(p))]));case 5:var Z=r.a,x=r.b,w=r.c,C=D(w)+"px",z=D(x)+"px",y="."+h.ao,T="."+(h.es+y),he="."+h.eA,O="."+h.fC,K="."+h.fB,Pe="."+h.ez,te=ue(w/2)+"px",ie=ue(x/2)+"px",oe="."+h.aI,pe="."+Z,ae="."+h.go;return _r(v([j(Ee,e,n,pe+(y+(" > "+(ae+(" + "+ae)))),v([a(ve,"margin-left",z)])),j(Ee,e,n,pe+(T+(" > "+ae)),v([a(ve,"margin",te+(" "+ie))])),j(Ee,e,n,pe+(oe+(" > "+(ae+(" + "+ae)))),v([a(ve,"margin-top",C)])),j(Ee,e,n,pe+(K+(" > "+(ae+(" + "+ae)))),v([a(ve,"margin-top",C)])),j(Ee,e,n,pe+(K+(" > "+Pe)),v([a(ve,"margin-right",z)])),j(Ee,e,n,pe+(K+(" > "+he)),v([a(ve,"margin-left",z)])),j(Ee,e,n,X(pe,O),v([a(ve,"line-height","calc(1em + "+(D(w)+"px)"))])),j(Ee,e,n,"textarea"+(ae+pe),v([a(ve,"line-height","calc(1em + "+(D(w)+"px)")),a(ve,"height","calc(100% + "+(D(w)+"px)"))])),j(Ee,e,n,pe+(O+(" > "+Pe)),v([a(ve,"margin-right",z)])),j(Ee,e,n,pe+(O+(" > "+he)),v([a(ve,"margin-left",z)])),j(Ee,e,n,pe+(O+"::after"),v([a(ve,"content","''"),a(ve,"display","block"),a(ve,"height","0"),a(ve,"width","0"),a(ve,"margin-top",D(-1*(w/2|0))+"px")])),j(Ee,e,n,pe+(O+"::before"),v([a(ve,"content","''"),a(ve,"display","block"),a(ve,"height","0"),a(ve,"width","0"),a(ve,"margin-bottom",D(-1*(w/2|0))+"px")]))]));case 7:var Z=r.a,ge=r.b,he=r.c,De=r.d,Pe=r.e,pe="."+Z;return j(Ee,e,n,pe,v([a(ve,"padding",ue(ge)+("px "+(ue(he)+("px "+(ue(De)+("px "+(ue(Pe)+"px")))))))]));case 6:var Z=r.a,ge=r.b,he=r.c,De=r.d,Pe=r.e,pe="."+Z;return j(Ee,e,n,pe,v([a(ve,"border-width",D(ge)+("px "+(D(he)+("px "+(D(De)+("px "+(D(Pe)+"px")))))))]));case 8:var de=r.a,Ae=L(function(Ke,Xa,cn){e:for(;;)switch(cn.$){case 0:var Sm=cn.a;return D(Sm)+"px";case 1:var Er=P(Ke,Xa);if(Er.a.$===1){if(Er.b.$===1)return Er.a,Er.b,"max-content";Er.a;var Hn=Er.b.a;return"minmax(max-content, "+(D(Hn)+"px)")}else if(Er.b.$===1){var Gn=Er.a.a;return Er.b,"minmax("+(D(Gn)+"px, max-content)")}else{var Gn=Er.a.a,Hn=Er.b.a;return"minmax("+(D(Gn)+("px, "+(D(Hn)+"px)")))}case 2:var il=cn.a,Vr=P(Ke,Xa);if(Vr.a.$===1){if(Vr.b.$===1)return Vr.a,Vr.b,D(il)+"fr";Vr.a;var Hn=Vr.b.a;return"minmax(max-content, "+(D(Hn)+"px)")}else if(Vr.b.$===1){var Gn=Vr.a.a;return Vr.b,"minmax("+(D(Gn)+("px, "+(D(il)+"frfr)")))}else{var Gn=Vr.a.a,Hn=Vr.b.a;return"minmax("+(D(Gn)+("px, "+(D(Hn)+"px)")))}case 3:var xo=cn.a,yo=cn.b,So=q(xo),Co=Xa,zo=yo;Ke=So,Xa=Co,cn=zo;continue e;default:var xo=cn.a,yo=cn.b,So=Ke,Co=q(xo),zo=yo;Ke=So,Xa=Co,cn=zo;continue e}}),F=function(Ke){return i(Ae,U,U,Ke)};F(de.iA.a);var B=F(de.iA.b),E=function(Ke){return"grid-template-rows: "+(Ke+";")}(a($e," ",a(re,F,de.$9))),V=function(Ke){return"-ms-grid-rows: "+(Ke+";")}(a($e,B,a(re,F,de.au))),N=function(Ke){return"-ms-grid-columns: "+(Ke+";")}(a($e,B,a(re,F,de.au))),W="grid-row-gap:"+(F(de.iA.b)+";"),H="grid-column-gap:"+(F(de.iA.a)+";"),G=function(Ke){return"grid-template-columns: "+(Ke+";")}(a($e," ",a(re,F,de.au))),pe=".grid-rows-"+(a($e,"-",a(re,Qr,de.$9))+("-cols-"+(a($e,"-",a(re,Qr,de.au))+("-space-x-"+(Qr(de.iA.a)+("-space-y-"+Qr(de.iA.b))))))),ho=pe+("{"+(G+(E+(H+(W+"}"))))),bo="@supports (display:grid) {"+(ho+"}"),_o=pe+("{"+(N+(V+"}")));return v([_o,bo]);case 9:var Ue=r.a,qt=a($e," ",v(["-ms-grid-row: "+(D(Ue.ao)+";"),"-ms-grid-row-span: "+(D(Ue.hq)+";"),"-ms-grid-column: "+(D(Ue.gT)+";"),"-ms-grid-column-span: "+(D(Ue.i8)+";")])),go=a($e," ",v(["grid-row: "+(D(Ue.ao)+(" / "+(D(Ue.ao+Ue.hq)+";"))),"grid-column: "+(D(Ue.gT)+(" / "+(D(Ue.gT+Ue.i8)+";")))])),pe=".grid-pos-"+(D(Ue.ao)+("-"+(D(Ue.gT)+("-"+(D(Ue.i8)+("-"+D(Ue.hq))))))),ho=pe+("{"+(go+"}")),bo="@supports (display:grid) {"+(ho+"}"),_o=pe+("{"+(qt+"}"));return v([_o,bo]);case 11:var pe=r.a,wm=r.b,xm=function(Ke){return i($c,e,Ke,q(pe))};return a(Ga,xm,wm);default:var tl=r.a,wo=L2(tl),pe=lc(tl),Yt=P(pe,wo);if(!Yt.a.$&&!Yt.b.$){var Z=Yt.a.a,ym=Yt.b.a;return j(Ee,e,n,"."+Z,v([a(ve,"transform",ym)]))}else return k}}),k2=m(function(e,r){return S2(a(re,function(n){var t=i($c,e,n,U);return P(wt(n),a(y2,cc,t))},r))}),Di=m(function(e,r){var n=function(t){var o=t.a,l=t.b;return o+(": "+(l+";"))};return e+(" {"+(a($e,"",a(re,n,r))+"}"))}),Dl=L(function(e,r,n){var t=n.a,o=n.b;return v([a(Di,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Di,"."+(e+("."+(r+("> ."+(h.af+(", ."+(e+(" ."+(r+(" > ."+h.af)))))))))),o)])}),T2=L(function(e,r,n){var t=r.a,o=r.b,l=xe(e,n)?e:n+(" ."+e);return a($e," ",X(i(Dl,l,h.ix,o),i(Dl,l,h.hh,t)))}),D2=m(function(e,r){var n=xe(e,r)?e:r+(" ."+e);return a($e," ",v([a(Di,"."+(n+("."+(h.ix+(", "+("."+(n+(" ."+h.ix))))))),v([P("line-height","1")])),a(Di,"."+(n+("."+(h.ix+("> ."+(h.af+(", ."+(n+(" ."+(h.ix+(" > ."+h.af)))))))))),v([P("vertical-align","0"),P("line-height","1")]))]))}),Al=L(function(e,r,n){return{hq:r/e,bA:e,f3:n}}),ev=m(function(e,r){return i(ar,m(function(n,t){return e(n)?a(M,n,t):t}),k,r)}),A2=function(e){if(e.b){var r=e.a,n=e.b;return q(i(Oe,or,r,n))}else return U},Il=function(e){if(e.b){var r=e.a,n=e.b;return q(i(Oe,Pa,r,n))}else return U},Fl=function(e){var r=v([e.gJ,e.gu,e.g2,e.hT]),n=a(Ie,e.g2,Il(r)),t=a(Ie,e.gu,Il(a(ev,function(s){return!xe(s,n)},r))),o=a(Ie,e.gJ,A2(r)),l=1/(o-t),u=1-o,$=1/(o-n),f=1-o;return{gJ:i(Al,l,o-t,u),eQ:i(Al,$,o-n,f)}},Bl=function(e){return P(v([P("display","block")]),v([P("display","inline-block"),P("line-height",ue(e.hq)),P("vertical-align",ue(e.f3)+"em"),P("font-size",ue(e.bA)+"em")]))},I2=function(e){return i(Oe,m(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,o=t.gd;if(o.$===1)return n;var l=o.a;return q(P(Bl(function(u){return u.eQ}(Fl(l))),Bl(function(u){return u.gJ}(Fl(l)))))}else return n;else return n}),U,e)},F2=function(e){var r=function(l){if(l.$===4){var u=l.b;return q("@import url('"+(u+"');"))}else return U},n=function(l){l.a;var u=l.b,$=a($e,`
`,a(Mn,r,u));return $},t=a(re,w$,e),o=function(l){var u=l.a,$=l.b,f=I2($);if(f.$===1)return a($e,"",a(re,D2(u),t));var s=f.a;return a($e,"",a(re,a(T2,u,s),t))};return X(a($e,`
`,a(re,n,e)),a($e,`
`,a(re,o,e)))},B2=function(e){if(e.$===1){var r=e.a,n=e.b;return q(P(r,n))}else return U},El=m(function(e,r){var n=m(function(u,$){return{c0:X($.c0,i($c,e,u,U)),cg:function(){var f=B2(u);if(f.$===1)return $.cg;var s=f.a;return a(M,s,$.cg)}()}}),t=i(Oe,n,{c0:k,cg:k},r),o=t.cg,l=t.c0;return X(F2(o),na(l))}),rv=m(function(e,r){var n=e.fv;switch(n){case 0:return i(Zr,"div",k,v([i(Zr,"style",k,v([jn(a(El,e,r))]))]));case 1:return i(Zr,"div",k,v([i(Zr,"style",k,v([jn(a(El,e,r))]))]));default:return i(Zr,"elm-ui-rules",v([a(X$,"rules",a(k2,e,r))]),k)}}),Vl=ne(function(e,r,n,t){var o=a(rv,r,i(Oe,J$,P(Y$,Z$(r.hg)),n).b);return e?a(M,P("static-stylesheet",K$(r)),a(M,P("dynamic-stylesheet",o),t)):a(M,P("dynamic-stylesheet",o),t)}),Rl=ne(function(e,r,n,t){var o=a(rv,r,i(Oe,J$,P(Y$,Z$(r.hg)),n).b);return e?a(M,K$(r),a(M,o,t)):a(M,o,t)}),f0=Ce(45),xt=Ce(37),nv=function(e){return Z3(qu(e))},av=vr("p"),fr=m(function(e,r){var n=r.a,t=r.b;if(e.$){var l=e.a;return xe(l&t,l)}else{var o=e.a;return xe(o&n,o)}}),Nl=vr("s"),Wl=vr("u"),m0=Ce(44),yt=Ce(39),Kt=Fr(function(e,r,n,t,o,l){var u=m(function(f,s){if(t.$===1){var d=t.a;return i(nv,f,s,function(){switch(o.$){case 0:return d;case 2:var _=o.a,p=o.b;return j(Vl,!1,_,p,d);default:var _=o.a,p=o.b;return j(Vl,!0,_,p,d)}}())}else{var g=t.a;return a(function(){switch(f){case"div":return Ge;case"p":return av;default:return Zr(f)}}(),s,function(){switch(o.$){case 0:return g;case 2:var _=o.a,p=o.b;return j(Rl,!1,_,p,g);default:var _=o.a,p=o.b;return j(Rl,!0,_,p,g)}}())}}),$=function(){switch(r.$){case 0:return a(u,"div",n);case 1:var f=r.a;return a(u,f,n);default:var f=r.a,s=r.b;return i(Zr,f,n,v([a(u,s,v([Lr(h.go+(" "+h.iw))]))]))}}();switch(l){case 0:return a(fr,yt,e)&&!a(fr,m0,e)?$:a(fr,O$,e)?a(Wl,v([Lr(a($e," ",v([h.go,h.iw,h.cy,h.aJ,h.gk])))]),v([$])):a(fr,U$,e)?a(Nl,v([Lr(a($e," ",v([h.go,h.iw,h.cy,h.aJ,h.gi])))]),v([$])):$;case 1:return a(fr,xt,e)&&!a(fr,f0,e)?$:a(fr,q$,e)?a(Nl,v([Lr(a($e," ",v([h.go,h.iw,h.cy,h.gj])))]),v([$])):a(fr,G$,e)?a(Wl,v([Lr(a($e," ",v([h.go,h.iw,h.cy,h.gh])))]),v([$])):$;default:return $}}),Sn=function(e){return!e.b},qe=jn,E2=h.go+(" "+(h.af+(" "+(h.eq+(" "+h.dy))))),St=function(e){return a(Ge,v([Lr(E2)]),v([qe(e)]))},V2=h.go+(" "+(h.af+(" "+(h.er+(" "+h.dz))))),Hl=function(e){return a(Ge,v([Lr(V2)]),v([qe(e)]))},R2=L(function(e,r,n){var t=m(function(x,w){var C=x.a,z=x.b,y=w.a,T=w.b;switch(z.$){case 0:var O=z.a;return xe(e,Qt),P(a(M,P(C,O(e)),y),T);case 1:var K=z.a;return xe(e,Qt),P(a(M,P(C,a(K.hu,Yn,e)),y),Sn(T)?K.iG:X(K.iG,T));case 2:var te=z.a;return P(a(M,P(C,xe(e,Pr)?Hl(te):St(te)),y),T);default:return P(y,T)}}),o=m(function(x,w){var C=w.a,z=w.b;switch(x.$){case 0:var y=x.a;return xe(e,Qt),P(a(M,y(e),C),z);case 1:var T=x.a;return xe(e,Qt),P(a(M,a(T.hu,Yn,e),C),Sn(z)?T.iG:X(T.iG,z));case 2:var O=x.a;return P(a(M,xe(e,Pr)?Hl(O):St(O),C),z);default:return P(C,z)}});if(r.$===1){var l=r.a,u=i(ar,t,P(k,k),l),$=u.a,f=u.b,s=Sn(f)?n.iG:X(n.iG,f);if(s.b){var d=s;return $0({hu:j(Kt,n.a3,n.a6,n.aW,Ml(i(Ll,"nearby-element-pls",$,n.aZ))),iG:d})}else return _t(A(Kt,n.a3,n.a6,n.aW,Ml(i(Ll,"nearby-element-pls",$,n.aZ)),Yn))}else{var g=r.a,_=i(ar,o,P(k,k),g),p=_.a,f=_.b,s=Sn(f)?n.iG:X(n.iG,f);if(s.b){var d=s;return $0({hu:j(Kt,n.a3,n.a6,n.aW,ir(a(jl,p,n.aZ))),iG:d})}else return _t(A(Kt,n.a3,n.a6,n.aW,ir(a(jl,p,n.aZ)),Yn))}}),gr=L(function(e,r,n){return{$:3,a:e,b:r,c:n}}),N2=function(e){return{$:10,a:e}},Ai=m(function(e,r){return{$:0,a:e,b:r}}),be=m(function(e,r){var n=r.a,t=r.b;if(e.$){var l=e.a;return a(Ai,n,l|t)}else{var o=e.a;return a(Ai,o|n,t)}}),Gl=function(e){return{$:1,a:e}},ei=m(function(e,r){return{$:3,a:e,b:r}}),Ol=function(e){return{$:2,a:e}},W2=m(function(e,r){return a(Ge,v([Lr(function(){switch(e){case 0:return a($e," ",v([h.bv,h.iw,h.gc]));case 1:return a($e," ",v([h.bv,h.iw,h.gw]));case 2:return a($e," ",v([h.bv,h.iw,h.h3]));case 3:return a($e," ",v([h.bv,h.iw,h.h2]));case 4:return a($e," ",v([h.bv,h.iw,h.hz]));default:return a($e," ",v([h.bv,h.iw,h.gv]))}}())]),v([function(){switch(r.$){case 3:return jn("");case 2:var n=r.a;return St(n);case 0:var t=r.a;return t(Pr);default:var o=r.a;return a(o.hu,Yn,Pr)}}()]))}),H2=L(function(e,r,n){var t=a(W2,e,r);switch(n.$){case 0:return e===5?Gl(v([t])):Ol(v([t]));case 1:var o=n.a;return e===5?Gl(a(M,t,o)):a(ei,o,v([t]));case 2:var l=n.a;return e===5?a(ei,v([t]),l):Ol(a(M,t,l));default:var o=n.a,l=n.b;return e===5?a(ei,a(M,t,o),l):a(ei,o,a(M,t,l))}}),Ul=m(function(e,r){return{$:2,a:e,b:r}}),Cn=function(e){return{$:1,a:e}},On=m(function(e,r){switch(r.$){case 0:return Cn(e);case 1:var n=r.a;return a(Ul,n,e);default:var t=r.a,o=r.b;return a(Ul,t,o)}}),G2=function(e){switch(e){case 0:return h.dg+(" "+h.ez);case 2:return h.dg+(" "+h.eA);default:return h.dg+(" "+h.gf)}},O2=function(e){switch(e){case 0:return h.dh+(" "+h.gl);case 2:return h.dh+(" "+h.ge);default:return h.dh+(" "+h.gg)}},it=m(function(e,r){return a(Or,r1(e),Yu(r))}),qr=ne(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),yn=function(e){return{$:1,a:e}},U2=m(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var f=r.a;return yn(R(f,0,0));case 1:var s=r.a;return yn(R(0,s,0));case 2:var d=r.a;return yn(R(0,0,d));case 3:var n=r.a;return yn(n);case 4:var n=r.a,p=r.b;return j(qr,R(0,0,0),R(1,1,1),n,p);default:var n=r.a;return j(qr,R(0,0,0),n,R(0,0,1),0)}case 1:var $=e.a,f=$.a,s=$.b,d=$.c;switch(r.$){case 0:var t=r.a;return yn(R(t,s,d));case 1:var o=r.a;return yn(R(f,o,d));case 2:var l=r.a;return yn(R(f,s,l));case 3:var n=r.a;return yn(n);case 4:var n=r.a,p=r.b;return j(qr,$,R(1,1,1),n,p);default:var u=r.a;return j(qr,$,u,R(0,0,1),0)}default:var $=e.a,f=$.a,s=$.b,d=$.c,g=e.b,_=e.c,p=e.d;switch(r.$){case 0:var t=r.a;return j(qr,R(t,s,d),g,_,p);case 1:var o=r.a;return j(qr,R(f,o,d),g,_,p);case 2:var l=r.a;return j(qr,R(f,s,l),g,_,p);case 3:var x=r.a;return j(qr,x,g,_,p);case 4:var w=r.a,C=r.b;return j(qr,$,g,w,C);default:var z=r.a;return j(qr,$,z,_,p)}}}),fa=Ce(7),tv=Ce(36),ql=m(function(e,r){var n=e.a,t=e.b,o=r.a,l=r.b;return a(Ai,n|o,t|l)}),mn=a(Ai,0,0),s0=function(e){switch(e.$){case 0:var r=e.a,n=D(r),t="height-px-"+n;return R(mn,h.eS+(" "+t),v([i(gr,t,"height",n+"px")]));case 1:return R(a(be,tv,mn),h.dy,k);case 2:var o=e.a;return o===1?R(a(be,xt,mn),h.dz,k):R(a(be,xt,mn),h.eT+(" height-fill-"+D(o)),v([i(gr,h.go+("."+(h.aI+(" > "+S("height-fill-"+D(o))))),"flex-grow",D(o*1e5))]));case 3:var l=e.a,f=e.b,s="min-height-"+D(l),d=i(gr,s,"min-height",D(l)+"px !important"),u=s0(f),_=u.a,p=u.b,x=u.c;return R(a(be,f0,_),s+(" "+p),a(M,d,x));default:var $=e.a,f=e.b,s="max-height-"+D($),d=i(gr,s,"max-height",D($)+"px"),g=s0(f),_=g.a,p=g.b,x=g.c;return R(a(be,f0,_),s+(" "+p),a(M,d,x))}},iv=Ce(38),d0=function(e){switch(e.$){case 0:var r=e.a;return R(mn,h.f8+(" width-px-"+D(r)),v([i(gr,"width-px-"+D(r),"width",D(r)+"px")]));case 1:return R(a(be,iv,mn),h.eq,k);case 2:var n=e.a;return n===1?R(a(be,yt,mn),h.er,k):R(a(be,yt,mn),h.f9+(" width-fill-"+D(n)),v([i(gr,h.go+("."+(h.ao+(" > "+S("width-fill-"+D(n))))),"flex-grow",D(n*1e5))]));case 3:var t=e.a,u=e.b,$="min-width-"+D(t),f=i(gr,$,"min-width",D(t)+"px"),o=d0(u),d=o.a,g=o.b,_=o.c;return R(a(be,m0,d),$+(" "+g),a(M,f,_));default:var l=e.a,u=e.b,$="max-width-"+D(l),f=i(gr,$,"max-width",D(l)+"px"),s=d0(u),d=s.a,g=s.b,_=s.c;return R(a(be,m0,d),$+(" "+g),a(M,f,_))}},Qi=Ce(27),q2=m(function(e,r){if(xe(e,Qi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var o=r.b,l=r.c,u=r.d,$=r.e;return xe(o,u)&&xe(o,l)&&xe(o,$)&&o>=0&&o<=24;default:return!1}}),ma=Ce(6),Yl=Ce(30),Jl=Ce(29),Y2=Te(function(e,r,n,t,o,l,u,$){e:for(;;)if($.b){var d=$.a,g=$.b;switch(d.$){case 0:var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 3:var w=d.a,_=d.b;if(a(fr,w,n)){var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=_+(" "+e),B=r,E=a(be,w,n),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}case 1:var p=d.a,F=e,B=r,E=n,V=t,N=o,W=a(M,p,l),H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 4:var w=d.a,x=d.b;if(a(fr,w,n)){var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else if(a(q2,w,x)){var F=wt(x)+(" "+e),B=r,E=a(be,w,n),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=wt(x)+(" "+e),B=r,E=a(be,w,n),V=t,N=a(M,x,o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}case 10:var w=d.a,C=d.b,F=e,B=r,E=a(be,w,n),V=a(U2,t,C),N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 7:var z=d.a;if(a(fr,ma,n)){var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else switch(z.$){case 0:var y=z.a,F=h.f8+(" width-px-"+D(y))+(" "+e),B=r,E=a(be,ma,n),V=t,N=a(M,i(gr,"width-px-"+D(y),"width",D(y)+"px"),o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 1:var F=e+(" "+h.eq),B=r,E=a(be,iv,a(be,ma,n)),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 2:var T=z.a;if(T===1){var F=e+(" "+h.er),B=r,E=a(be,yt,a(be,ma,n)),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=e+(" "+(h.f9+(" width-fill-"+D(T)))),B=r,E=a(be,yt,a(be,ma,n)),V=t,N=a(M,i(gr,h.go+("."+(h.ao+(" > "+S("width-fill-"+D(T))))),"flex-grow",D(T*1e5)),o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}default:var O=d0(z),K=O.a,te=O.b,Ae=O.c,F=e+(" "+te),B=r,E=a(ql,K,a(be,ma,n)),V=t,N=X(Ae,o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}case 8:var ie=d.a;if(a(fr,fa,n)){var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else switch(ie.$){case 0:var y=ie.a,oe=D(y)+"px",ae="height-px-"+oe,F=h.eS+(" "+(ae+(" "+e))),B=r,E=a(be,fa,n),V=t,N=a(M,i(gr,ae,"height ",oe),o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 1:var F=h.dy+(" "+e),B=r,E=a(be,tv,a(be,fa,n)),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 2:var T=ie.a;if(T===1){var F=h.dz+(" "+e),B=r,E=a(be,xt,a(be,fa,n)),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=e+(" "+(h.eT+(" height-fill-"+D(T)))),B=r,E=a(be,xt,a(be,fa,n)),V=t,N=a(M,i(gr,h.go+("."+(h.aI+(" > "+S("height-fill-"+D(T))))),"flex-grow",D(T*1e5)),o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}default:var Z=s0(ie),K=Z.a,te=Z.b,Ae=Z.c,F=e+(" "+te),B=r,E=a(ql,K,a(be,fa,n)),V=t,N=X(Ae,o),W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}case 2:var ge=d.a;switch(ge.$){case 0:var F=e,B=a(On,"main",r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 1:var F=e,B=a(On,"nav",r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 2:var F=e,B=a(On,"footer",r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 3:var F=e,B=a(On,"aside",r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 4:var he=ge.a;if(he<=1){var F=e,B=a(On,"h1",r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else if(he<7){var F=e,B=a(On,"h"+D(he),r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=e,B=a(On,"h6",r),E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}case 9:var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 8:var F=e,B=r,E=n,V=t,N=o,W=a(M,a(it,"role","button"),l),H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 5:var De=ge.a,F=e,B=r,E=n,V=t,N=o,W=a(M,a(it,"aria-label",De),l),H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 6:var F=e,B=r,E=n,V=t,N=o,W=a(M,a(it,"aria-live","polite"),l),H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;default:var F=e,B=r,E=n,V=t,N=o,W=a(M,a(it,"aria-live","assertive"),l),H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}case 9:var Pe=d.a,de=d.b,Ae=function(){switch(de.$){case 3:return o;case 2:return de.a,o;case 0:return de.a,o;default:var go=de.a;return X(o,go.iG)}}(),F=e,B=r,E=n,V=t,N=Ae,W=l,H=i(H2,Pe,de,u),G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e;case 6:var Ue=d.a;if(a(fr,Yl,n)){var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=G2(Ue)+(" "+e),B=r,E=function(pe){switch(Ue){case 1:return a(be,U$,pe);case 2:return a(be,O$,pe);default:return pe}}(a(be,Yl,n)),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}default:var qt=d.a;if(a(fr,Jl,n)){var F=e,B=r,E=n,V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}else{var F=O2(qt)+(" "+e),B=r,E=function(pe){switch(qt){case 1:return a(be,q$,pe);case 2:return a(be,G$,pe);default:return pe}}(a(be,Jl,n)),V=t,N=o,W=l,H=u,G=g;e=F,r=B,n=E,t=V,o=N,l=W,u=H,$=G;continue e}}}else{var f=lc(t);if(f.$===1)return{aW:a(M,Lr(e),l),aZ:u,a3:n,a6:r,iG:o};var s=f.a;return{aW:a(M,Lr(e+(" "+s)),l),aZ:u,a3:n,a6:r,iG:a(M,N2(t),o)}}}),J2={$:0},Z2=J2,dr=ne(function(e,r,n,t){return i(R2,e,t,Tt(Y2,n2(e),r,mn,Z2,k,k,Jd,$r(n)))}),sn=ne(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),X2={gs:U,gC:U,it:q({bi:0,cw:j(sn,155/255,203/255,1,1),fy:P(0,0),bA:3})},Q2=function(e){var r=m(function(t,o){switch(t.$){case 0:var l=t.a,u=o.ht;return u.$===1?fe(o,{ht:q(l)}):o;case 1:var $=t.a,f=o.hg;return f.$===1?fe(o,{hg:q($)}):o;default:var s=t.a,d=o.fv;return d.$===1?fe(o,{fv:q(s)}):o}}),n=function(t){return{hg:function(){var o=t.hg;if(o.$===1)return X2;var l=o.a;return l}(),ht:function(){var o=t.ht;if(o.$===1)return 1;var l=o.a;return l}(),fv:function(){var o=t.fv;if(o.$===1)return 0;var l=o.a;return l}()}};return n(i(ar,r,{hg:U,ht:U,fv:U},e))},K2=m(function(e,r){switch(r.$){case 0:var t=r.a;return t(Pr);case 1:var n=r.a.iG,t=r.a.hu;return a(t,e(n),Pr);case 2:var o=r.a;return St(o);default:return St("")}}),e4=L(function(e,r,n){var t=Q2(e),o=function(){var l=t.fv;return l===1?H$(t):qd(t)}();return a(K2,o,j(dr,Pr,ua,r,ir(v([n]))))}),Ct=L(function(e,r,n){return{$:4,a:e,b:r,c:n}}),ov=m(function(e,r){return{$:1,a:e,b:r}}),cv=function(e){return{$:2,a:e}},r4={$:1},je=m(function(e,r){return{$:4,a:e,b:r}}),Lo=function(e){return{$:3,a:e}},lv=Ce(8),uv=Ce(14),$v=Ce(5),vv=Ce(4),Ba=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return We(r)+("-"+(We(n)+("-"+(We(t)+("-"+We(o))))))},vi=o3,ko=i3,fv=m(function(e,r){return X(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a($e,"-",ko(vi(n)));case 4:var n=e.a;return e.b,a($e,"-",ko(vi(n)));default:var n=e.a.h_;return a($e,"-",ko(vi(n)))}}())}),n4=function(){var e=v([Lo("Open Sans"),Lo("Helvetica"),Lo("Verdana"),r4]);return v([a(je,lv,i(Ct,"bg-"+Ba(j(sn,1,1,1,0)),"background-color",j(sn,1,1,1,0))),a(je,uv,i(Ct,"fc-"+Ba(j(sn,0,0,0,1)),"color",j(sn,0,0,0,1))),a(je,vv,cv(20)),a(je,$v,a(ov,i(Oe,fv,"font-",e),e))])}(),a4=L(function(e,r,n){var t=e.h7;return i(e4,t,a(M,Cr(a($e," ",v([h.im,h.go,h.iw]))),X(n4,r)),n)}),mv={$:3},sv=function(e){return{$:2,a:e}},p0=Q3,dv=m(function(e,r){switch(r.$){case 1:var n=r.a;return $0({hu:m(function(l,u){return a(p0,e,a(n.hu,l,u))}),iG:n.iG});case 0:var t=r.a;return _t(a(Et,p0(e),t));case 2:var o=r.a;return sv(o);default:return mv}}),vc=dv,t4=p0,i4=function(e){return{$:0,a:e}},Fe=i4,o4=e1,we=o4,pv={$:1},Ki=function(e){return{$:5,a:e}},gv=Ki(0),Ur=L(function(e,r,n){return j(sn,e/255,r/255,n/255,1)}),hv=i(Ur,0,0,0),c4=Or("d"),l4=Or("fill"),u4=Or("height"),bv=Ou("http://www.w3.org/2000/svg"),$4=bv("path"),v4=bv("svg"),f4=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{gm:o,gy:t,hj:n,ig:r}},m4=function(e){var r=f4(e);return"rgba("+(D(Ne(r.ig*255))+(","+D(Ne(r.hj*255))+(","+D(Ne(r.gy*255))+(","+ue(r.gm)+")"))))},s4=Or("viewBox"),d4=Or("width"),ya=L(function(e,r,n){return a(v4,v([s4("0 0 100 100"),d4(D(e)),u4(D(e))]),v([a($4,v([c4(n),l4(m4(r))]),k)]))}),p4={$:1},wr=p4,_v=function(e){return{$:7,a:e}},le=_v,Le=m(function(e,r){return j(dr,Pr,ua,a(M,le(wr),a(M,ze(wr),e)),ir(v([r])))}),wv=function(e){return{$:2,a:e}},ye=wv(1),Xn={g6:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",hi:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",hp:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ib:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",ic:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",$8:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",iy:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",i2:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",i5:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gb:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ma={dE:260,bZ:54},gn=function(e){return a(je,lv,i(Ct,"bg-"+Ba(e),"background-color",e))},g4=Ce(28),Ln=function(e){return a(je,g4,i(Ct,"bc-"+Ba(e),"border-color",e))},fi=1,Ar=m(function(e,r){return j(dr,fi,ua,a(M,Cr(h.gV+(" "+h.bM)),a(M,ze(wr),a(M,le(wr),e))),ir(r))}),h4=i(Ur,83,83,83),xv=ne(function(e,r,n,t){return j(sn,e/255,r/255,n/255,t)}),eo=j(xv,56,56,56,.25),rr=mv,zt=Qe(function(e,r,n,t,o){return{$:7,a:e,b:r,c:n,d:t,e:o}}),Pt=Ce(2),Qn=function(e){var r=e;return a(je,Pt,A(zt,"p-"+D(e),r,r,r,r))},yv=L(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Sv=Ce(3),Cv=m(function(e,r){return"spacing-"+(D(e)+("-"+D(r)))}),kn=function(e){return a(je,Sv,i(yv,a(Cv,e,e),e,e))},b4=j(xv,0,0,0,0),_4=function(e){return{$:4,a:e}},g0=0,En=m(function(e,r){return j(dr,g0,ua,a(M,Cr(h.bM+(" "+h.aJ)),a(M,le(wr),a(M,ze(wr),e))),ir(r))}),w4=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.hu(a(H$,{hg:{gs:U,gC:U,it:U},ht:1,fv:0},n.iG));case 2:var t=e.a;return ki(jn(t));default:return ki(jn(""))}},x4=m(function(e,r){return w4(e(r))}),y4=K3,S4=m(function(e,r){return _t(i(y4,x4,e,r))}),Tn=function(e){return a(je,uv,i(Ct,"fc-"+Ba(e),"color",e))},fc=i(Ur,195,195,195),Vn=m(function(e,r){return{$:3,a:e,b:r}}),zv=Ce(13),C4=a(Vn,zv,h.iU),z4=Ce(20),Pv=a(Vn,z4,h.ir),$a=function(e){return a(je,vv,cv(e))},mc=a(Vn,zv,h.gB),h0=m(function(e,r){if(r.$===-2)return tn;var n=r.a,t=r.b,o=r.c,l=r.d,u=r.e;return A(se,n,t,a(e,t,o),a(h0,e,l),a(h0,e,u))}),Mv=m(function(e,r){if(xe(e,r)){var n=e;return a(je,Pt,A(zt,"p-"+D(e),n,n,n,n))}else{var t=r,o=e;return a(je,Pt,A(zt,"p-"+(D(e)+("-"+D(r))),t,o,t,o))}}),Dn=function(e){return sv(e)},jv=function(e){return i(X0,L(function(r,n,t){return a(M,n,t)}),k,e)},P4=m(function(e,r){return{$:3,a:e,b:r}}),M4=m(function(e,r){return{$:2,a:e,b:r}}),j4=m(function(e,r){return{$:0,a:e,b:r}}),L4=m(function(e,r){return{$:1,a:e,b:r}}),sc=ne(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),k4=j(sc,0/255,0/255,0/255,1),ro=function(e){return{$:6,a:e}},T4=ro(0),no=function(e){return{$:2,a:e}},D4={$:6},Lv=no(D4),kv=L(function(e,r,n){if(r.$===1)return r.a,j(dr,fi,Cn("label"),e,ir(v([n])));var t=r.a,o=r.b,l=r.c,u=j(dr,Pr,ua,o,ir(v([l])));switch(t){case 2:return j(dr,fi,Cn("label"),a(M,Cr(h.cI),e),ir(v([u,n])));case 3:return j(dr,fi,Cn("label"),a(M,Cr(h.cI),e),ir(v([n,u])));case 0:return j(dr,g0,Cn("label"),a(M,Cr(h.cI),e),ir(v([n,u])));default:return j(dr,g0,Cn("label"),a(M,Cr(h.cI),e),ir(v([u,n])))}}),b0=it,bn=Ki(1),Tv="Enter",A4=function(e){return{$:5,a:e}},Dv=function(e){if(e.$===1){var r=e.a;return no(A4(r))}else return ta},Av=function(e){return e.$===1},I4=function(e){return{$:0,a:e}},dc=Uu,Iv=m(function(e,r){return a(dc,e,I4(r))}),$n=function(e){return a(Iv,"click",sr(e))},F4=g3,B4=function(e){return{$:2,a:e}},E4=m(function(e,r){return a(dc,e,B4(r))}),Fv=function(e){var r=function(t){var o=e(t);if(o.$===1)return F4("No key matched");var l=o.a;return sr(l)},n=a(ee,r,a(Q,"key",Fa));return Ve(a(E4,"keydown",a(ht,function(t){return P(t,!0)},n)))},V4=Ce(21),Kn=a(Vn,V4,h.gY),Bv=" ",Ev=function(e){return a(Or,"tabIndex",D(e))},R4=a(Et,Ve,Ev),N4=m(function(e,r){var n=r.e$,t=r.hw,o=r.gO,l=r.b1,u=X(v([Av(n)?ta:kn(6),Ve($n(l(!o))),Lv,Fv(function($){return xe($,Tv)||xe($,Bv)?q(l(!o)):U}),R4(0),Kn,T4,le(ye)]),e);return i(kv,a(M,Ve(a(b0,"role","checkbox")),a(M,Ve(a(b0,"aria-checked",o?"true":"false")),a(M,Dv(n),u))),n,j(dr,Pr,ua,v([bn,ze(ye),le(wr)]),ir(v([t(o)]))))}),W4=L(function(e,r,n){return X(a(bt,e-Zn(n),Ji(r)),n)}),Ea=Em,Vv=function(e){var r=function(n){return n<10?D(n):Ji(T$(87+n))};return e<16?r(e):X(Vv(e/16|0),r(a(Ea,16,e)))},H4=a(Be,Vv,a(W4,2,"0")),pc=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{gm:o,gy:t,hj:n,ig:r}},G4=function(e){var r=pc(e),n=r.ig,t=r.hj,o=r.gy;return a($e,"",a(M,"#",a(re,a(Be,Ne,H4),v([n*255,t*255,o*255]))))},gc=Ce(12),Rv=a(Vn,gc,h.iM),_0=ro(1),ia=Vm,Xr=function(e){return e*ia/180},O4=function(e){return{$:1,a:e}},hc=m(function(e,r){return{$:10,a:e,b:r}}),U4=Ce(26),q4=function(e){return a(hc,U4,O4(-e))},Sa=L(function(e,r,n){return j(sn,e,r,n,1)}),Y4=sn,J4=m(function(e,r){return{$:4,a:e,b:r}}),Z4=Ce(24),X4=function(e){return a(hc,Z4,a(J4,R(0,0,1),e))},Q4=Ce(17),aa=function(e){return a(je,Q4,i(gr,"br-"+D(e),"border-radius",D(e)+"px"))},K4=function(e){return na(v([e.eX?"box-inset":"box-",We(e.fy.a)+"px",We(e.fy.b)+"px",We(e.bi)+"px",We(e.bA)+"px",Ba(e.cw)]))},ep=Ce(19),rp=function(e){var r={bi:e.bi,cw:e.cw,eX:!1,fy:e.fy,bA:e.bA};return a(je,ep,i(gr,K4(r),"box-shadow",v0(r)))},Zl=m(function(e,r){return{$:12,a:e,b:r}}),Xl=Ce(0),np=function(e){return e?a(je,Xl,a(Zl,"transparent",1)):a(je,Xl,a(Zl,"visible",0))},To=i(Sa,1,1,1),bc=Qe(function(e,r,n,t,o){return{$:6,a:e,b:r,c:n,d:t,e:o}}),ao=function(e){return a(je,Qi,A(bc,"b-"+D(e),e,e,e,e))},ap=m(function(e,r){return a(je,Qi,A(bc,"b-"+(D(e)+("-"+D(r))),r,e,r,e))}),Vt=function(e){var r=e.cs,n=e.c8,t=e.hQ,o=e.ij;return xe(n,r)&&xe(t,o)?xe(n,o)?ao(n):a(ap,t,n):a(je,Qi,A(bc,"b-"+(D(n)+("-"+(D(o)+("-"+(D(r)+("-"+D(t))))))),n,o,r,t))},tp=function(e){return a(Le,v([Cr("focusable"),le(Fe(14)),ze(Fe(14)),Tn(To),bn,$a(9),Rv,aa(3),Ln(e?i(Sa,59/255,153/255,252/255):i(Sa,211/255,211/255,211/255)),rp({bi:1,cw:e?j(Y4,238/255,238/255,238/255,0):i(Sa,238/255,238/255,238/255),fy:P(0,0),bA:1}),gn(e?i(Sa,59/255,153/255,252/255):To),ao(e?0:1),u0(a(Le,v([Ln(To),ze(Fe(6)),le(Fe(9)),X4(Xr(-45)),_0,bn,q4(1),np(!e),Vt({cs:2,hQ:2,ij:0,c8:0})]),rr))]),rr)},ip=Br("htmlFor"),w0=m(function(e,r){if(r.$)return U;var n=r.a;return e(n)}),Ii=m(function(e,r){if(r.$){var t=r.a;return lr(t)}else{var n=r.a;return e(n)}}),Nv=ne(function(e,r,n,t){return{hB:r,hW:e,h1:n,iH:t}}),op=P1,cp=m3,lp=m(function(e,r){if(r.$)return lr(e);var n=r.a;return Je(n)}),up=z1,$p=function(e){return a(up,{gK:!1,hZ:!1},e)},_c=function(e){if(e.b){var r=e.a;return e.b,q(r)}else return U},vp=m(function(e,r){if(r.$){var t=r.a;return lr(t)}else{var n=r.a;return Je(e(n))}}),fp=function(e){return{$:2,a:e}},mp=function(e){return{$:0,a:e}},sp=function(e){return{$:1,a:e}},Do=m(function(e,r){return rn(r)-rn(e)}),Ao=L(function(e,r,n){var t=rn(n);return Se(rn(e),t)<1&&Se(t,rn(r))<1}),dp=m(function(e,r){var n=function(o){return Se(o,e)<0?Je(o):lr(sp(r))},t=i(Ao,"0","9",r)?Je(a(Do,"0",r)):i(Ao,"a","z",r)?Je(10+a(Do,"a",r)):i(Ao,"A","Z",r)?Je(10+a(Do,"A",r)):lr(mp(r));return a(Ii,n,t)}),Wv=m(function(e,r){var n=Ha(r);if(n.$===1)return Je(0);var t=n.a,o=t.a,l=t.b;return a(Ii,function(u){return a(Ii,function($){return Je(u+$*e)},a(Wv,e,l))},a(dp,e,o))}),pp=m(function(e,r){return 2<=e&&e<=36?a(Wv,e,o0(r)):lr(fp(e))}),gp=pp(16),c=L(function(e,r,n){return j(sc,e,r,n,1)}),hp=ne(function(e,r,n,t){return j(sc,e,r,n,t)}),Rt=Bm,bp=m(function(e,r){var n=a(Rt,10,e);return Ne(r*n)/n}),_p=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=k$(n);if(t.b&&!t.b.b){var o=t.a;return cp(v([o,o]))}else return n};return a(Be,vi,a(Be,function(n){return a(He,function(t){return i(op,1,t,n)},$p(e))},a(Be,w0(_c),a(Be,He(function(n){return n.iH}),a(Be,He(Mn(Tr)),a(Be,lp("Parsing hex regex failed"),Ii(function(n){var t=a(re,a(Be,r,a(Be,gp,vp(at))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var o=t.a.a,l=t.b,u=l.a.a,$=l.b,f=$.a.a,s=$.b,d=s.a.a;return Je(j(hp,o/255,u/255,f/255,a(bp,2,d/255)))}else break e;else{var o=t.a.a,g=t.b,u=g.a.a,_=g.b,f=_.a.a;return Je(i(c,o/255,u/255,f/255))}else break e;return lr("Parsing ints from hex failed")})))))))}(),wp=Br("id"),xp=vr("input"),yp=vr("label"),Hv=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Sp=Hv(0),Cp=Br("name"),zp=function(e){return P(e,!0)},Pp=function(e){return{$:1,a:e}},Mp=m(function(e,r){return a(dc,e,Pp(r))}),jp=m(function(e,r){return i(ar,Q,r,e)}),Gv=a(jp,v(["target","value"]),Fa),Ov=function(e){return a(Mp,"input",a(ht,zp,a(ht,e,Gv)))},Lp=a(Vn,gc,h.iR),Uv=a(Vn,gc,h.iV),wc=function(e){return a(W$,5,e)},xc=function(e){return a(je,$v,a(ov,i(Oe,fv,"ff-",e),e))},kp=i(Ur,195,195,195),qv=i(Ur,69,69,69),Tp=Hv(2),Dp={$:2},yc=Dp,Ap=Ce(32),Ip=Ce(31),Ql=function(e){return i(ar,m(function(r,n){if(n.$)if(r.$===8){var o=r.a;return q(o)}else return U;else{var t=n.a;return q(t)}}),U,e)},Fp=m(function(e,r){return a(Ie,r,i(ar,m(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var l=n.b,o=l.b,u=l.c;return q(P(o,u))}else return U;else{var o=t.a;return q(o)}}),U,e))}),Kl=function(e){return i(ar,m(function(r,n){if(n.$)if(r.$===7){var o=r.a;return q(o)}else return U;else{var t=n.a;return q(t)}}),U,e)},Bp=Ce(33),Ep=Br("max"),Vp=Br("min"),Rp=m(function(e,r){return a(je,Sv,i(yv,a(Cv,e,r),e,r))}),Np=function(e){return a(Br,"step",e)},Yv=Br("type"),to=Br("value"),Va=wv,Wp=t1,Jv=m(function(e,r){switch(r.$){case 0:return ta;case 2:var n=r.a;return no(n);case 6:var t=r.a;return ro(t);case 5:var o=r.a;return Ki(o);case 7:var t=r.a;return _v(t);case 8:var t=r.a;return R$(t);case 3:var t=r.a,o=r.b;return a(Vn,t,o);case 4:var l=r.a,u=r.b;return a(je,l,u);case 9:var $=r.a,f=r.b;return a(N$,$,a(dv,e,f));case 1:var s=r.a;return Ve(a(Wp,e,s));default:var d=r.a,g=r.b;return a(hc,d,g)}}),Hp=L(function(e,r,n){return a(En,v([le(ye),ze(a(Ie,ye,n)),bn]),v([a(Le,v([le(Va(Ne(e*1e4)))]),rr),a(Le,a(M,bn,a(re,Jv(It),r)),rr),a(Le,v([le(Va(Ne(_e(1-e)*1e4)))]),rr)]))}),Gp=L(function(e,r,n){return a(Ar,v([ze(ye),le(a(Ie,ye,n)),_0]),v([a(Le,v([ze(Va(Ne(_e(1-e)*1e4)))]),rr),a(Le,a(M,_0,a(re,Jv(It),r)),rr),a(Le,v([ze(Va(Ne(e*1e4)))]),rr)]))}),Zv=m(function(e,r){var n=Kl(e),t=Ql(e),o=function(){var z=P(n,t);e:for(;;)if(z.a.$===1){if(z.b.$===1)return z.a,z.b,!1;break e}else if(!z.a.a.$&&!z.b.$)switch(z.b.a.$){case 0:var y=z.a.a.a,T=z.b.a.a;return Se(T,y)>0;case 2:return!0;default:break e}else break e;return!1}(),l=(r.dc-r.cR)/(r.cQ-r.cR),u=r.iZ,$=u,f=Ql($),s=function(){if(f.$===1)return"20px";if(f.a.$)return"100%";var z=f.a.a;return D(z)+"px"}(),d=Kl($),g=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var z=d.a.a;return D(z)+"px"}(),_="thmb-"+(g+("-"+s)),p=v([a(ve,"width",g),a(ve,"height",s)]),x=a(Fp,e,P(5,5)),w=x.a,C=x.b;return i(kv,v([Av(r.e$)?ta:a(Rp,w,C),Lv,le(function(){if(n.$===1)return ye;if(n.a.$){var z=n.a;return z}else return wr}()),ze(function(){if(t.$===1)return wr;if(t.a.$){var z=t.a;return z}else return wr}())]),r.e$,a(En,v([le(a(Ie,ye,n)),ze(a(Ie,Fe(20),t))]),v([j(dr,Pr,Cn("input"),v([Dv(r.e$),a(je,Ap,a($t,'input[type="range"].'+(_+"::-moz-range-thumb"),p)),a(je,Bp,a($t,'input[type="range"].'+(_+"::-webkit-slider-thumb"),p)),a(je,Ip,a($t,'input[type="range"].'+(_+"::-ms-thumb"),p)),Ve(Lr(_+" ui-slide-bar focusable-parent")),Ve(Ov(function(z){var y=L$(z);if(y.$===1)return r.b1(0);var T=y.a;return r.b1(T)})),Ve(Yv("range")),Ve(Np(function(){var z=r.c4;if(z.$===1)return"any";var y=z.a;return ue(y)}())),Ve(Vp(ue(r.cR))),Ve(Ep(ue(r.cQ))),Ve(to(ue(r.dc))),o?Ve(a(b0,"orient","vertical")):ta,le(o?a(Ie,Fe(20),t):a(Ie,ye,n)),ze(o?a(Ie,ye,n):a(Ie,Fe(20),t))]),ir(k)),a(Le,a(M,le(a(Ie,ye,n)),a(M,ze(a(Ie,Fe(20),t)),X(e,v([wc(o?i(Gp,l,a(M,Cr("focusable-thumb"),$),n):i(Hp,l,a(M,Cr("focusable-thumb"),$),t))])))),rr)])))}),Op=i(Sa,.5,.5,.5),Xv=Tr,eu=function(e){var r=e.dD,n=e.dc,t=e.cR,o=e.cQ,l=e.c4,u=e.b1;return a(Le,v([le(ye)]),a(Zv,v([kn(2),wc(a(Le,v([le(ye),ze(Fe(16)),bn,gn(qv),aa(4)]),rr))]),{e$:a(Tp,k,a(En,v([le(ye)]),v([a(Le,v([Lp]),Dn(r)),a(Le,v([le(ye),Uv,xc(v([yc]))]),Dn(ue(n)))]))),cQ:o,cR:t,b1:u,c4:q(l),iZ:Xv(v([le(Fe(12)),ze(Fe(12)),aa(4),ao(0),Ln(Op),gn(kp)])),dc:n}))},Up=m(function(e,r){if(r.$)return e;var n=r.a;return n}),qp=m(function(e,r){switch(r.$){case 3:var u=r.a;return a(N4,k,{gO:u,hw:tp,e$:a(Sp,k,Dn(e)),b1:P4(e)});case 0:var n=r.a,o=n.a,l=n.b,u=r.b;return eu({dD:e,cQ:l,cR:o,b1:j4(e),c4:.001*(l-o),dc:u});case 1:var t=r.a,o=t.a,l=t.b,u=r.b;return eu({dD:e,cQ:l,cR:o,b1:a(Be,Ne,L4(e)),c4:1,dc:u});default:var u=r.a;return a(Le,v([le(ye)]),vn(a(Ge,k,v([a(Ge,v([a(we,"margin-bottom","6px")]),v([a(yp,v([ip(e)]),v([qe(e)]))])),a(xp,v([Yv("color"),a(we,"width","100%"),a(we,"height","26px"),a(we,"padding","0px"),wp(e),Cp(e),Ov(function($){return a(M4,e,a(Up,k4,_p($)))}),to(G4(u))]),k)]))))}}),x0=i(Ur,255,255,255),Yp=function(e){return a(Ar,v([le(ye),kn(8),a(Mv,0,14),Vt({cs:1,hQ:0,ij:0,c8:0}),Ln(eo)]),v([a(Le,v([$a(16),mc,Tn(x0)]),Dn(e.h_)),a(Ar,v([le(ye),kn(6)]),jv(a(h0,qp,e.a_)))]))},Jp=function(e){return a(Ar,v([le(ye),ze(ye),Tn(fc),$a(12),C4,Pv]),a(re,Yp,e))},Zp=S4(Jp),Xp=function(e){return a(Ar,v([le(ye),ze(ye)]),v([a(En,v([kn(14),le(ye)]),k),a(vc,_4,Zp(la(e).gU))]))},Qp=function(e){return{$:6,a:e}},Kp=ne(function(e,r,n,t){return"pad-"+(D(e)+("-"+(D(r)+("-"+(D(n)+("-"+D(t)))))))}),e5=function(e){var r=e.c8,n=e.ij,t=e.cs,o=e.hQ;if(xe(r,n)&&xe(r,t)&&xe(r,o)){var l=r;return a(je,Pt,A(zt,"p-"+D(r),l,l,l,l))}else return a(je,Pt,A(zt,j(Kp,r,n,t,o),r,n,t,o))},r5=function(e){return{$:0,a:e}},n5=function(e){return{$:1,a:e}},a5=n5,t5=function(e){var r=e.b.ac;return Gr(r)},Fi=i(Ur,255,60,0),i5=function(e){var r=e.b.ac;e.b.t;var n=e.b.ax;return Gr(r)+1+Gr(n)},o5=function(e){var r=P(t5(e),i5(e)-1),n=r.a,t=r.b;return a(Le,v([le(ye),bn]),a(Zv,v([wc(a(En,v([le(ye),ze(Fe(4)),bn,gn(qv),aa(2)]),v([a(Le,v([le(Va(n)),ze(ye),gn(Fi),aa(2)]),rr),a(Le,v([le(Va(t-n))]),rr)])))]),{e$:a5(""),cQ:t,cR:0,b1:a(Be,Ne,r5),c4:q(1),iZ:Xv(v([le(Fe(12)),ze(Fe(12)),aa(6),gn(Fi)])),dc:n}))},c5=ro(2),mi=i(Ur,220,220,220),l5=function(e){var r=e.a,n=function(){return r.$?v([Tn(mi)]):v([Tn(Fi)])}();return a(Le,X(n,v([$a(14),c5,Uv,xc(v([yc]))])),Dn(a(F$,3,la(e).eF)))},u5=function(e){e.a;var r=e.b.ac;return a(He,function(n){return Ne(60/(la(e).eF-n))},a(He,a(Be,w$,function(n){return n.eF}),_c(a(P$,59,r))))},$5=function(e){var r=u5(e);if(r.$===1)return rr;var n=r.a;return a(Le,v([$a(14),Tn(fc),xc(v([yc]))]),Dn(D(n)+" FPS"))},ru={$:1},v5={$:3},f5={$:2},m5={$:8},s5=Nu,d5=m(function(e,r){return a(G0,e,s5(r))}),p5=d5("disabled"),g5=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},h5=function(e){return a(Bt,g5,e)?ta:Cr("focusable")},Bi=a(Et,Ve,$n),Qv=m(function(e,r){var n=r.fz,t=r.e$;return j(dr,Pr,ua,a(M,le(wr),a(M,ze(wr),a(M,Cr(h.cA+(" "+(h.aJ+(" "+(h.is+(" "+h.fx)))))),a(M,Kn,a(M,h5(e),a(M,no(m5),a(M,Ve(Ev(0)),function(){if(n.$===1)return a(M,Ve(p5(!0)),e);var o=n.a;return a(M,Bi(o),a(M,Fv(function(l){return xe(l,Tv)||xe(l,Bv)?q(o):U}),e))}()))))))),ir(v([t])))}),nu=m(function(e,r){return a(Qv,k,{e$:a(Le,v([le(Fe(36)),Qn(3),Tn(r),Rv,$a(12),mc,Ln(r),ao(1),aa(4)]),Dn("REC")),fz:q(e)})}),au=L(function(e,r,n){return a(Qv,k,{e$:vn(i(ya,20,n,e)),fz:q(r)})}),b5=function(e){var r=e.a;e.b.ac,e.b.t;var n=e.b.ax;return a(En,k,v([a(Le,v([le(Fe(40))]),function(){switch(r.$){case 0:return a(nu,ru,Fi);case 1:return a(nu,f5,mi);default:return rr}}()),a(Le,v([le(Fe(28))]),function(){switch(r.$){case 0:return rr;case 1:return Sn(n)?rr:i(au,Xn.ic,v5,mi);default:return i(au,Xn.ib,ru,mi)}}())]))},_5=function(e){return a(Ar,v([le(ye)]),v([o5(e),a(En,v([le(ye),kn(14),a(Mv,0,6),bn]),v([b5(e),$5(e),l5(e)]))]))},w5=function(e){return a(Ar,v([le(ye),kn(14),e5({cs:20,hQ:0,ij:0,c8:0}),Vt({cs:1,hQ:0,ij:0,c8:0}),Ln(eo)]),v([a(Le,v([$a(16),mc,Tn(fc)]),Dn("Time Travel")),a(vc,Qp,_5(e))]))},x5=m(function(e,r){return a(Ar,v([la(r).c2.i8>600?gn(h4):gn(b4),Vt({cs:0,hQ:0,ij:1,c8:0}),Ln(eo),le(Fe(Ma.dE)),ze(ye)]),v([function(){return e?rr:a(Ar,v([le(ye),ze(ye),Qn(14),kn(14)]),v([w5(r),Xp(r)]))}()]))}),y5=function(e){return{$:3,a:e}},tu=Ki(2),S5=i(Ur,232,78,50),C5=i(Ur,48,48,48),z5=function(e){return a(Br,"href",a1(e))},P5=Or("rel"),M5=Br("target"),iu=m(function(e,r){var n=r.f1,t=r.e$;return j(dr,Pr,Cn("a"),a(M,Ve(z5(n)),a(M,Ve(P5("noopener noreferrer")),a(M,Ve(M5("_blank")),a(M,le(wr),a(M,ze(wr),a(M,Cr(h.cA+(" "+(h.aJ+(" "+h.e6)))),e)))))),ir(v([t])))}),ot=Br("title"),j5=i(Ur,31,161,242),L5=function(e){var r=L(function(l,u,$){var f=xe(u,e)?x0:C5;return a(Le,v([fn(ot(l)),Bi(y5(u)),Kn,Qn(7)]),vn(i(ya,40,f,$)))}),n=a(Ar,v([gv]),v([i(r,"Configurations",0,Xn.iy)])),t=a(Ar,k,v([a(iu,v([fn(ot("Twitter")),tu,Kn,Qn(7)]),{e$:vn(i(ya,40,j5,Xn.i2)),f1:"https://twitter.com/AzizErkalSelman"}),a(iu,v([fn(ot("Source Code")),tu,Kn,Qn(7)]),{e$:vn(i(ya,40,S5,Xn.hi)),f1:"https://github.com/erkal/elm-3d-playground-exploration"})])),o=a(Le,v([le(Fe(Ma.bZ)),Qn(4),Bi(pv),Vt({cs:1,hQ:0,ij:0,c8:0}),Ln(eo),Kn,fn(ot("Activate Distraction Free Mode"))]),vn(i(ya,46,x0,Xn.gb)));return a(Ar,v([le(Fe(Ma.bZ)),ze(ye),Pv,gn(hv)]),v([o,n,t]))},k5=function(e){var r=a(Le,v([le(Fe(Ma.bZ)),gv,Qn(4),Bi(pv),Kn,fn(ot("Deactivate Distraction Free Mode (A)"))]),vn(i(ya,46,hv,Xn.gb)));return e.bP?r:a(En,v([le(Fe(Ma.bZ+Ma.dE)),ze(ye)]),v([L5(e.bI),a(x5,e.bI,e.W)]))},T5=L(function(e,r,n){var t=Hd(n.W),o=la(n.W);return i(a4,{h7:v([Od({gs:U,gC:U,it:U})])},v([le(Fe(pt(o.c2.i8))),ze(Fe(pt(o.c2.hq))),fn(a(we,"-webkit-font-smoothing","antialiased")),fn(a(we,"pointer-events","none")),fn(a(we,"touch-action","none")),fn(a(we,"user-select","none")),u0(a(vc,Nd,a(r,o,t))),u0(k5(n))]),vn(a(t4,ki(Wd),a(e,o,t))))}),D5=Fr(function(e,r,n,t,o,l){var u=m(function(f,s){return P(j(Id,r,l,f,s),Pl)}),$=function(f){var s=a(y$,n,f.hI);return P({bI:0,bP:!0,W:a(Fd,s,t),ep:0},Pl)};return nd({hC:$,iI:Rd,i4:u,i6:a(T5,e,o)})}),A5=function(e){return{a:Xi,ag:e}},I5=function(e){var r=e.a,n=e.b,t=e.c;return P(P(n,t),function(){return r?1:0}())},Kv={gt:150,b2:1,i1:A5(I5)},F5=function(e){return{H:k,p:k,t:e}},B5=function(e){return{m:F5(Kv),bu:{c9:0,db:0},aR:0}},E5=L(function(e,r,n){return{a_:n,hL:r,h_:e}}),V5=function(e){return i(Oe,m(function(r,n){var t=r.a,o=r.b;return i(ra,t,o,n)}),Xi,e)},R5=L(function(e,r,n){return i(E5,e,r,V5(n))}),ou=R5,Un=L(function(e,r,n){var t=r.a,o=r.b;return P(e,a(j$,P(t,o),n))}),N5=v([i(ou,"Camera",!0,v([i(Un,"camera x",P(-40,40),0),i(Un,"camera y",P(-40,0),0),i(Un,"camera z",P(1,50),20)])),i(ou,"Parameters",!0,v([i(Un,"trixel scale",P(.5,1),1),i(Un,"minimum rotation degree",P(-Xr(180),0),0),i(Un,"maximum rotation degree",P(0,Xr(180)),0),i(Un,"rotation period",P(1,20),5)]))]),cu=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ef=function(e){var r=e.c9,n=e.db,t=function(o){return o-Jn(o)};return t(r)+t(n)<1?i(cu,0,Jn(r),Jn(n)):i(cu,1,Jn(r),Jn(n))},W5=L(function(e,r,n){var t=n;return fe(t,{a:i(ra,t.ag(e),P(e,r),t.a)})}),H5=L(function(e,r,n){return fe(n,{i1:i(W5,e,r,n.i1)})}),G5=m(function(e,r){var n=r;return fe(n,{t:e(n.t)})}),Ei=m(function(e,r){return fe(r,{m:a(G5,e,r.m)})}),O5=m(function(e,r){return e.cX.dB?a(Ei,a(H5,ef(r.bu),r.aR),r):r}),U5=m(function(e,r){var n=r;return fe(n,{a:a(V$,n.ag(e),n.a)})}),q5=m(function(e,r){return fe(r,{i1:a(U5,e,r.i1)})}),Y5=m(function(e,r){return e.e_.fR&&e.cX.dB?a(Ei,q5(ef(r.bu)),r):r}),J5=m(function(e,r){return a(He,function(n){if(n.$)return 0;var t=n.b;return t},a(Zi,e,r.a_))}),Z5=m(function(e,r){return a(Ie,0,_c(a(Mn,J5(e),r)))}),X5=m(function(e,r){return a(Z5,e,r.gU)}),ea=X5,Ra=function(e){return e},Ca=function(e){return Ra(ia*(e/180))},Hr=Ym,Q5=m(function(e,r){var n=e,t=r,o=t.ew-n.ew,l=t.je-n.je,u=t.ja-n.ja,$=a(or,_e(u),a(or,_e(l),_e(o)));if($){var f=o/$,s=l/$,d=u/$,g=Hr(d*d+s*s+f*f);return q({ja:d/g,je:s/g,ew:f/g})}else return U}),si=function(e){return e},Sc=m(function(e,r){var n=e,t=r;return{ja:t.je*n.ew-t.ew*n.je,je:t.ew*n.ja-t.ja*n.ew,ew:t.ja*n.je-t.je*n.ja}}),vt=function(e){var r=e,n=a(or,_e(r.ja),a(or,_e(r.je),_e(r.ew)));if(n){var t=r.ew/n,o=r.je/n,l=r.ja/n,u=Hr(l*l+o*o+t*t);return q({ja:l/u,je:o/u,ew:t/u})}else return U},Vi=m(function(e,r){var n=e,t=r;return{ja:t.ja-n.ja,je:t.je-n.je,ew:t.ew-n.ew}}),K5=m(function(e,r){var n=e,t=r;return t.ja*n.ja+t.je*n.je+t.ew*n.ew}),rf=m(function(e,r){var n=e,t=r;return Se(t,n)>0}),eg=m(function(e,r){var n=e,t=r;return Se(t,n)<0}),rg=m(function(e,r){var n=e,t=r;return{ja:t.ja-n.ja,je:t.je-n.je,ew:t.ew-n.ew}}),ng=m(function(e,r){var n=e,t=r,o=t.ja*n.ja+t.je*n.je+t.ew*n.ew;return{ja:n.ja*o,je:n.je*o,ew:n.ew*o}}),ag=function(e){var r=e;return{ja:-r.ja,je:-r.je,ew:-r.ew}},kr=0,nf={ja:0,je:0,ew:0},tg=L(function(e,r,n){return a(w0,function(t){var o=a(rg,a(ng,t,r),r);return a(w0,function(l){var u=a(Sc,r,e),$=a(K5,n,u),f=a(rf,kr,$)?u:a(eg,kr,$)?ag(u):nf;return a(He,function(s){return R(t,l,s)},vt(f))},vt(o))},vt(e))}),ig=function(e){var r=e,n=_e(r.ew),t=_e(r.je),o=_e(r.ja);if(Se(o,t)<1)if(Se(o,n)<1){var l=Hr(r.ew*r.ew+r.je*r.je);return{ja:0,je:-r.ew/l,ew:r.je/l}}else{var l=Hr(r.je*r.je+r.ja*r.ja);return{ja:-r.je/l,je:r.ja/l,ew:0}}else if(Se(t,n)<1){var l=Hr(r.ew*r.ew+r.ja*r.ja);return{ja:r.ew/l,je:0,ew:-r.ja/l}}else{var l=Hr(r.ja*r.ja+r.je*r.je);return{ja:-r.je/l,je:r.ja/l,ew:0}}},Cc=function(e){var r=ig(e),n=r,t=n,o=e,l=o,u={ja:l.je*t.ew-l.ew*t.je,je:l.ew*t.ja-l.ja*t.ew,ew:l.ja*t.je-l.je*t.ja};return P(r,u)},za=function(e){var r=e;return r},on=function(e){return e},og=m(function(e,r){var n=Cc(e),t=n.a,o=n.b;return on({dW:r,eu:t,ev:o,ex:e})}),cg=function(e){var r=a(Vi,e.bq,e.eN),n=za(e.f0),t=a(Sc,r,n),o=i(tg,r,n,t);if(o.$){var s=vt(r);if(s.$){var g=Cc(e.f0),_=g.a,p=g.b;return on({dW:e.eN,eu:p,ev:e.f0,ex:_})}else{var d=s.a;return a(og,d,e.eN)}}else{var l=o.a,u=l.a,$=l.b,f=l.c;return on({dW:e.eN,eu:f,ev:$,ex:u})}},Wr={ja:0,je:0,ew:0},lg=function(e){return{$:0,a:e}},nr=function(e){var r=e;return _e(r)},di=function(e){var r=e;return .5*r},ug=Wm,$g=function(e){var r=e;return ug(r)},vg=function(e){var r=di(nr(e.f4)),n=$g(r);return{d7:lg(n),eo:e.eo}},Pn=function(e){return e},af=Pn({ja:0,je:1,ew:0}),fg=function(e){var r=e.bq,n=e.eN,t=e.f0;return vg({f4:Ca(40),eo:cg({eN:si(n),bq:si(r),f0:a(Ie,af,a(Q5,Wr,si(t)))})})},tf=function(e){return fg({eN:{ja:a(ea,"camera x",e),je:a(ea,"camera y",e),ew:a(ea,"camera z",e)},bq:{ja:0,je:0,ew:0},f0:{ja:0,je:1,ew:0}})},mg=function(e){var r=e.ja,n=e.je;return{c9:2/Hr(3)*r,db:-1/Hr(3)*r+n}},nn=function(e){return e},sg=L(function(e,r,n){return{ja:e,je:r,ew:n}}),ri=function(e){return e},pi=function(e){var r=e;return r},dg=m(function(e,r){var n=e,t=r;return t.ja*n.ja+t.je*n.je+t.ew*n.ew}),zc=function(e){var r=e;return r.g4},Me=m(function(e,r){var n=r;return e*n}),Pc=function(e){var r=e;return r.dW},pg=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=n.h0,$=u;return(t.ja-l.ja)*$.ja+(t.je-l.je)*$.je+(t.ew-l.ew)*$.ew}),gg=L(function(e,r,n){var t=e,o=r,l=n;return{ja:l.ja+o*t.ja,je:l.je+o*t.je,ew:l.ew+o*t.ew}}),hg=m(function(e,r){var n=zc(r),t=e,o=t.h0,l=a(dg,o,n);if(l){var u=Pc(r),$=a(pg,e,u),f=a(Me,-1/l,$);return q(i(gg,n,f,u))}else return U}),bg=m(function(e,r){return{ja:e,je:r}}),lu=m(function(e,r){var n=e,t=r;return n*t}),_g=function(e){var r=e;return r},uu=function(e){var r=e;return _g(r.gr)},wg=function(e){var r=e;return r.bk},of=m(function(e,r){var n=r;return n/e}),va=function(e){var r=e;return r.dW},y0=function(e){var r=e;return va(r)},S0=function(e){var r=e;return-r},cf=Pn({ja:0,je:0,ew:-1}),xg=m(function(e,r){var n=e,t=r;return t/n}),yg=m(function(e,r){var n=e,t=r,o=n.ex,l=o,u=n.ev,$=u,f=n.eu,s=f;return{ja:s.ja*t.ja+$.ja*t.je+l.ja*t.ew,je:s.je*t.ja+$.je*t.je+l.je*t.ew,ew:s.ew*t.ja+$.ew*t.je+l.ew*t.ew}}),oa=m(function(e,r){return{g4:r,dW:e}}),hn=function(e){var r=e;return{ja:-r.ja,je:-r.je,ew:-r.ew}},Rn=function(e){var r=e;return r.ex},C0=function(e){var r=e;return hn(Rn(r))},Sg=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=n.eu,$=u;return(t.ja-l.ja)*$.ja+(t.je-l.je)*$.je}),Mc=L(function(e,r,n){var t=e,o=r,l=n;return{ja:t,je:o,ew:l}}),Cg=ne(function(e,r,n,t){var o=e,l=r,u=n,$=t,f=o.dW,s=f,d=o.ex,g=d,_=o.ev,p=_,x=o.eu,w=x;return{ja:s.ja+l*w.ja+u*p.ja+$*g.ja,je:s.je+l*w.je+u*p.je+$*g.je,ew:s.ew+l*w.ew+u*p.ew+$*g.ew}}),zg=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=n.ev,$=u;return(t.ja-l.ja)*$.ja+(t.je-l.je)*$.je}),Pg=L(function(e,r,n){var t=e,o=a(zg,uu(r),n),l=a(Sg,uu(r),n),u=t.eo,$=u,f=wg(r);f.a;var s=f.b,d=t.d7;if(d.$){var x=d.a,w=a(xg,s,x),C=j(Cg,$,a(lu,w,l),a(lu,w,o),kr);return a(oa,C,C0(t.eo))}else{var g=d.a,_=S0(a(of,g,a(Me,.5,s))),p=a(yg,$,a(Ie,cf,vt(i(Mc,l,o,_))));return a(oa,y0(t.eo),p)}}),_n=Rm,An=Nm,z0=function(e){var r=e;return{ja:_n(r),je:An(r)}},Mg=function(e){var r=e;return{ja:-r.je,je:r.ja}},jg=function(e){return e},Lg=m(function(e,r){return jg({dW:r,eu:e,ev:Mg(e)})}),kg=m(function(e,r){return a(Lg,z0(e),r)}),Tg=L(function(e,r,n){var t=e.a,o=e.b;return{gr:a(kg,r,n),bk:P(nr(t),nr(o))}}),ja=function(e){var r=e;return r.ja},Dg=m(function(e,r){var n=e,t=r;return{ja:n,je:t}}),La=function(e){var r=e;return r.je},ka=function(e){var r=e;return r.ew},Ag=ne(function(e,r,n,t){var o=n.ja,l=n.je,u=function(s){return i(sg,pi(ja(s)),pi(La(s)),pi(ka(s)))},$=i(Tg,P(ri(r.i8),ri(r.hq)),Ca(0),a(bg,0,0)),f=a(Dg,ri(o),ri(l));return a(He,u,a(hg,t,i(Pg,e,$,f)))}),Oa=m(function(e,r){var n=e,t=r;return{ja:t.ja+n.ja,je:t.je+n.je,ew:t.ew+n.ew}}),Ig=m(function(e,r){return{h0:e,dW:r}}),Fg=m(function(e,r){var n=r;return a(Ig,n.h0,a(Oa,e,n.dW))}),Bg=m(function(e,r){return{h0:r,dW:e}}),lf=Pn({ja:0,je:0,ew:1}),io=lf,Eg=a(Bg,Wr,io),Vg=ne(function(e,r,n,t){return j(Ag,r,n,t,a(Fg,i(Mc,nn(0),nn(0),nn(e)),Eg))}),Rg=Vg(0),Ng=m(function(e,r){var n=i(Rg,tf(e),e.c2,e.cX);if(n.$===1)return r;var t=n.a;return fe(r,{bu:mg({ja:t.ja,je:t.je})})}),Wg=m(function(e,r){return a(Y5,e,a(O5,e,a(Ng,e,r)))}),Hg=m(function(e,r){var n=r;return fe(n,{p:a(M,n.t,n.p),t:e})}),Gg=function(e){var r=e,n=r.H;if(n.b){var t=n.a,o=n.b;return q({H:o,p:a(M,r.t,r.p),t})}else return U},Og=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return q({H:a(M,r.t,r.H),p:o,t})}else return U},Ug=function(e){var r=e,n=r.H;if(n.b){var t=n.a,o=n.b;return fe(r,{H:o,p:a(M,t,r.p)})}else return fe(r,{H:$r(r.p),p:k})},qg=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return fe(r,{p:o,t})}else{var l=r.H;if(l.b){var t=l.a,o=l.b;return fe(r,{H:o,t})}else return r}},Yg=m(function(e,r){return fe(r,{gt:e})}),Jg=m(function(e,r){return fe(r,{b2:e})}),Zg=L(function(e,r,n){switch(r.$){case 0:var t=r.a;return a(Ei,Jg(t),n);case 1:var o=r.a;return fe(n,{aR:o});case 2:return a(Ei,Yg(n.aR),n);case 3:return fe(n,{m:a(Ie,n.m,Og(n.m))});case 4:return fe(n,{m:a(Ie,n.m,Gg(n.m))});case 5:return fe(n,{m:a(Hg,Kv,n.m)});case 6:return fe(n,{m:qg(n.m)});default:return fe(n,{m:Ug(n.m)})}}),Mt=function(e){var r=e;return r.t},Ua=m(function(e,r){return{$:0,a:e,b:r}}),Xg=a(Ua,i(c,.001462,466e-6,.013866),v([i(c,.002267,.00127,.01857),i(c,.003299,.002249,.024239),i(c,.004547,.003392,.030909),i(c,.006006,.004692,.038558),i(c,.007676,.006136,.046836),i(c,.009561,.007713,.055143),i(c,.011663,.009417,.06346),i(c,.013995,.011225,.071862),i(c,.016561,.013136,.080282),i(c,.019373,.015133,.088767),i(c,.022447,.017199,.097327),i(c,.025793,.019331,.10593),i(c,.029432,.021503,.114621),i(c,.033385,.023702,.123397),i(c,.037668,.025921,.132232),i(c,.042253,.028139,.141141),i(c,.046915,.030324,.150164),i(c,.051644,.032474,.159254),i(c,.056449,.034569,.168414),i(c,.06134,.03659,.177642),i(c,.066331,.038504,.186962),i(c,.071429,.040294,.196354),i(c,.076637,.041905,.205799),i(c,.081962,.043328,.215289),i(c,.087411,.044556,.224813),i(c,.09299,.045583,.234358),i(c,.098702,.046402,.243904),i(c,.104551,.047008,.25343),i(c,.110536,.047399,.262912),i(c,.116656,.047574,.272321),i(c,.122908,.047536,.281624),i(c,.129285,.047293,.290788),i(c,.135778,.046856,.299776),i(c,.142378,.046242,.308553),i(c,.149073,.045468,.317085),i(c,.15585,.044559,.325338),i(c,.162689,.043554,.333277),i(c,.169575,.042489,.340874),i(c,.176493,.041402,.348111),i(c,.183429,.040329,.354971),i(c,.190367,.039309,.361447),i(c,.197297,.0384,.367535),i(c,.204209,.037632,.373238),i(c,.211095,.03703,.378563),i(c,.217949,.036615,.383522),i(c,.224763,.036405,.388129),i(c,.231538,.036405,.3924),i(c,.238273,.036621,.396353),i(c,.244967,.037055,.400007),i(c,.25162,.037705,.403378),i(c,.258234,.038571,.406485),i(c,.26481,.039647,.409345),i(c,.271347,.040922,.411976),i(c,.27785,.042353,.414392),i(c,.284321,.043933,.416608),i(c,.290763,.045644,.418637),i(c,.297178,.04747,.420491),i(c,.303568,.049396,.422182),i(c,.309935,.051407,.423721),i(c,.316282,.05349,.425116),i(c,.32261,.055634,.426377),i(c,.328921,.057827,.427511),i(c,.335217,.06006,.428524),i(c,.3415,.062325,.429425),i(c,.347771,.064616,.430217),i(c,.354032,.066925,.430906),i(c,.360284,.069247,.431497),i(c,.366529,.071579,.431994),i(c,.372768,.073915,.4324),i(c,.379001,.076253,.432719),i(c,.385228,.078591,.432955),i(c,.391453,.080927,.433109),i(c,.397674,.083257,.433183),i(c,.403894,.08558,.433179),i(c,.410113,.087896,.433098),i(c,.416331,.090203,.432943),i(c,.422549,.092501,.432714),i(c,.428768,.09479,.432412),i(c,.434987,.097069,.432039),i(c,.441207,.099338,.431594),i(c,.447428,.101597,.43108),i(c,.453651,.103848,.430498),i(c,.459875,.106089,.429846),i(c,.4661,.108322,.429125),i(c,.472328,.110547,.428334),i(c,.478558,.112764,.427475),i(c,.484789,.114974,.426548),i(c,.491022,.117179,.425552),i(c,.497257,.119379,.424488),i(c,.503493,.121575,.423356),i(c,.50973,.123769,.422156),i(c,.515967,.12596,.420887),i(c,.522206,.12815,.419549),i(c,.528444,.130341,.418142),i(c,.534683,.132534,.416667),i(c,.54092,.134729,.415123),i(c,.547157,.136929,.413511),i(c,.553392,.139134,.411829),i(c,.559624,.141346,.410078),i(c,.565854,.143567,.408258),i(c,.572081,.145797,.406369),i(c,.578304,.148039,.404411),i(c,.584521,.150294,.402385),i(c,.590734,.152563,.40029),i(c,.59694,.154848,.398125),i(c,.603139,.157151,.395891),i(c,.60933,.159474,.393589),i(c,.615513,.161817,.391219),i(c,.621685,.164184,.388781),i(c,.627847,.166575,.386276),i(c,.633998,.168992,.383704),i(c,.640135,.171438,.381065),i(c,.64626,.173914,.378359),i(c,.652369,.176421,.375586),i(c,.658463,.178962,.372748),i(c,.66454,.181539,.369846),i(c,.670599,.184153,.366879),i(c,.676638,.186807,.363849),i(c,.682656,.189501,.360757),i(c,.688653,.192239,.357603),i(c,.694627,.195021,.354388),i(c,.700576,.197851,.351113),i(c,.7065,.200728,.347777),i(c,.712396,.203656,.344383),i(c,.718264,.206636,.340931),i(c,.724103,.20967,.337424),i(c,.729909,.212759,.333861),i(c,.735683,.215906,.330245),i(c,.741423,.219112,.326576),i(c,.747127,.222378,.322856),i(c,.752794,.225706,.319085),i(c,.758422,.229097,.315266),i(c,.76401,.232554,.311399),i(c,.769556,.236077,.307485),i(c,.775059,.239667,.303526),i(c,.780517,.243327,.299523),i(c,.785929,.247056,.295477),i(c,.791293,.250856,.29139),i(c,.796607,.254728,.287264),i(c,.801871,.258674,.283099),i(c,.807082,.262692,.278898),i(c,.812239,.266786,.274661),i(c,.817341,.270954,.27039),i(c,.822386,.275197,.266085),i(c,.827372,.279517,.26175),i(c,.832299,.283913,.257383),i(c,.837165,.288385,.252988),i(c,.841969,.292933,.248564),i(c,.846709,.297559,.244113),i(c,.851384,.30226,.239636),i(c,.855992,.307038,.235133),i(c,.860533,.311892,.230606),i(c,.865006,.316822,.226055),i(c,.869409,.321827,.221482),i(c,.873741,.326906,.216886),i(c,.878001,.33206,.212268),i(c,.882188,.337287,.207628),i(c,.886302,.342586,.202968),i(c,.890341,.347957,.198286),i(c,.894305,.353399,.193584),i(c,.898192,.358911,.18886),i(c,.902003,.364492,.184116),i(c,.905735,.37014,.17935),i(c,.90939,.375856,.174563),i(c,.912966,.381636,.169755),i(c,.916462,.387481,.164924),i(c,.919879,.393389,.16007),i(c,.923215,.399359,.155193),i(c,.92647,.405389,.150292),i(c,.929644,.411479,.145367),i(c,.932737,.417627,.140417),i(c,.935747,.423831,.13544),i(c,.938675,.430091,.130438),i(c,.941521,.436405,.125409),i(c,.944285,.442772,.120354),i(c,.946965,.449191,.115272),i(c,.949562,.45566,.110164),i(c,.952075,.462178,.105031),i(c,.954506,.468744,.099874),i(c,.956852,.475356,.094695),i(c,.959114,.482014,.089499),i(c,.961293,.488716,.084289),i(c,.963387,.495462,.079073),i(c,.965397,.502249,.073859),i(c,.967322,.509078,.068659),i(c,.969163,.515946,.063488),i(c,.970919,.522853,.058367),i(c,.97259,.529798,.053324),i(c,.974176,.53678,.048392),i(c,.975677,.543798,.043618),i(c,.977092,.55085,.03905),i(c,.978422,.557937,.034931),i(c,.979666,.565057,.031409),i(c,.980824,.572209,.028508),i(c,.981895,.579392,.02625),i(c,.982881,.586606,.024661),i(c,.983779,.593849,.02377),i(c,.984591,.601122,.023606),i(c,.985315,.608422,.024202),i(c,.985952,.61575,.025592),i(c,.986502,.623105,.027814),i(c,.986964,.630485,.030908),i(c,.987337,.63789,.034916),i(c,.987622,.64532,.039886),i(c,.987819,.652773,.045581),i(c,.987926,.66025,.05175),i(c,.987945,.667748,.058329),i(c,.987874,.675267,.065257),i(c,.987714,.682807,.072489),i(c,.987464,.690366,.07999),i(c,.987124,.697944,.087731),i(c,.986694,.70554,.095694),i(c,.986175,.713153,.103863),i(c,.985566,.720782,.112229),i(c,.984865,.728427,.120785),i(c,.984075,.736087,.129527),i(c,.983196,.743758,.138453),i(c,.982228,.751442,.147565),i(c,.981173,.759135,.156863),i(c,.980032,.766837,.166353),i(c,.978806,.774545,.176037),i(c,.977497,.782258,.185923),i(c,.976108,.789974,.196018),i(c,.974638,.797692,.206332),i(c,.973088,.805409,.216877),i(c,.971468,.813122,.227658),i(c,.969783,.820825,.238686),i(c,.968041,.828515,.249972),i(c,.966243,.836191,.261534),i(c,.964394,.843848,.273391),i(c,.962517,.851476,.285546),i(c,.960626,.859069,.29801),i(c,.95872,.866624,.31082),i(c,.956834,.874129,.323974),i(c,.954997,.881569,.337475),i(c,.953215,.888942,.351369),i(c,.951546,.896226,.365627),i(c,.950018,.903409,.380271),i(c,.948683,.910473,.395289),i(c,.947594,.917399,.410665),i(c,.946809,.924168,.426373),i(c,.946392,.930761,.442367),i(c,.946403,.937159,.458592),i(c,.946903,.943348,.47497),i(c,.947937,.949318,.491426),i(c,.949545,.955063,.50786),i(c,.95174,.960587,.524203),i(c,.954529,.965896,.540361),i(c,.957896,.971003,.556275),i(c,.961812,.975924,.571925),i(c,.966249,.980678,.587206),i(c,.971162,.985282,.602154),i(c,.976511,.989753,.61676),i(c,.982257,.994109,.631017),i(c,.988362,.998364,.644924)])),Qg=a(Ua,i(c,.001462,466e-6,.013866),v([i(c,.002258,.001295,.018331),i(c,.003279,.002305,.023708),i(c,.004512,.00349,.029965),i(c,.007588,.006356,.044973),i(c,.009426,.008022,.052844),i(c,.011465,.009828,.06075),i(c,.013708,.011771,.068667),i(c,.016156,.01384,.076603),i(c,.018815,.016026,.084584),i(c,.021692,.01832,.09261),i(c,.024792,.020715,.100676),i(c,.028123,.023201,.108787),i(c,.031696,.025765,.116965),i(c,.03552,.028397,.125209),i(c,.039608,.03109,.133515),i(c,.04383,.03383,.141886),i(c,.048062,.036607,.150327),i(c,.05232,.039407,.158841),i(c,.056615,.04216,.167446),i(c,.060949,.044794,.176129),i(c,.06533,.047318,.184892),i(c,.069764,.049726,.193735),i(c,.074257,.052017,.20266),i(c,.078815,.054184,.211667),i(c,.083446,.056225,.220755),i(c,.088155,.058133,.229922),i(c,.092949,.059904,.239164),i(c,.097833,.061531,.248477),i(c,.102815,.06301,.257854),i(c,.107899,.064335,.267289),i(c,.113094,.065492,.276784),i(c,.118405,.066479,.286321),i(c,.123833,.067295,.295879),i(c,.12938,.067935,.305443),i(c,.135053,.068391,.315),i(c,.140858,.068654,.324538),i(c,.146785,.068738,.334011),i(c,.152839,.068637,.343404),i(c,.159018,.068354,.352688),i(c,.165308,.067911,.361816),i(c,.171713,.067305,.370771),i(c,.178212,.066576,.379497),i(c,.184801,.065732,.387973),i(c,.19146,.064818,.396152),i(c,.198177,.063862,.404009),i(c,.204935,.062907,.411514),i(c,.211718,.061992,.418647),i(c,.218512,.061158,.425392),i(c,.225302,.060445,.431742),i(c,.232077,.059889,.437695),i(c,.238826,.059517,.443256),i(c,.245543,.059352,.448436),i(c,.25222,.059415,.453248),i(c,.258857,.059706,.45771),i(c,.265447,.060237,.46184),i(c,.271994,.060994,.46566),i(c,.278493,.061978,.46919),i(c,.284951,.063168,.472451),i(c,.291366,.064553,.475462),i(c,.29774,.066117,.478243),i(c,.304081,.067835,.480812),i(c,.310382,.069702,.483186),i(c,.316654,.07169,.48538),i(c,.322899,.073782,.487408),i(c,.329114,.075972,.489287),i(c,.335308,.078236,.491024),i(c,.341482,.080564,.492631),i(c,.347636,.082946,.494121),i(c,.353773,.085373,.495501),i(c,.359898,.087831,.496778),i(c,.366012,.090314,.49796),i(c,.372116,.092816,.499053),i(c,.378211,.095332,.500067),i(c,.384299,.097855,.501002),i(c,.390384,.100379,.501864),i(c,.396467,.102902,.502658),i(c,.402548,.10542,.503386),i(c,.408629,.10793,.504052),i(c,.414709,.110431,.504662),i(c,.420791,.11292,.505215),i(c,.426877,.115395,.505714),i(c,.432967,.117855,.50616),i(c,.439062,.120298,.506555),i(c,.445163,.122724,.506901),i(c,.451271,.125132,.507198),i(c,.457386,.127522,.507448),i(c,.463508,.129893,.507652),i(c,.46964,.132245,.507809),i(c,.47578,.134577,.507921),i(c,.481929,.136891,.507989),i(c,.488088,.139186,.508011),i(c,.494258,.141462,.507988),i(c,.500438,.143719,.50792),i(c,.506629,.145958,.507806),i(c,.512831,.148179,.507648),i(c,.519045,.150383,.507443),i(c,.52527,.152569,.507192),i(c,.531507,.154739,.506895),i(c,.537755,.156894,.506551),i(c,.544015,.159033,.506159),i(c,.550287,.161158,.505719),i(c,.556571,.163269,.50523),i(c,.562866,.165368,.504692),i(c,.569172,.167454,.504105),i(c,.57549,.16953,.503466),i(c,.581819,.171596,.502777),i(c,.588158,.173652,.502035),i(c,.594508,.175701,.501241),i(c,.600868,.177743,.500394),i(c,.607238,.179779,.499492),i(c,.613617,.181811,.498536),i(c,.620005,.18384,.497524),i(c,.626401,.185867,.496456),i(c,.632805,.187893,.495332),i(c,.639216,.189921,.49415),i(c,.645633,.191952,.49291),i(c,.652056,.193986,.491611),i(c,.658483,.196027,.490253),i(c,.664915,.198075,.488836),i(c,.671349,.200133,.487358),i(c,.677786,.202203,.485819),i(c,.684224,.204286,.484219),i(c,.690661,.206384,.482558),i(c,.697098,.208501,.480835),i(c,.703532,.210638,.479049),i(c,.709962,.212797,.477201),i(c,.716387,.214982,.47529),i(c,.722805,.217194,.473316),i(c,.729216,.219437,.471279),i(c,.735616,.221713,.46918),i(c,.742004,.224025,.467018),i(c,.748378,.226377,.464794),i(c,.754737,.228772,.462509),i(c,.761077,.231214,.460162),i(c,.767398,.233705,.457755),i(c,.773695,.236249,.455289),i(c,.779968,.238851,.452765),i(c,.786212,.241514,.450184),i(c,.792427,.244242,.447543),i(c,.798608,.24704,.444848),i(c,.804752,.249911,.442102),i(c,.810855,.252861,.439305),i(c,.816914,.255895,.436461),i(c,.822926,.259016,.433573),i(c,.828886,.262229,.430644),i(c,.834791,.26554,.427671),i(c,.840636,.268953,.424666),i(c,.846416,.272473,.421631),i(c,.852126,.276106,.418573),i(c,.857763,.279857,.415496),i(c,.86332,.283729,.412403),i(c,.868793,.287728,.409303),i(c,.874176,.291859,.406205),i(c,.879464,.296125,.403118),i(c,.884651,.30053,.400047),i(c,.889731,.305079,.397002),i(c,.8947,.309773,.393995),i(c,.899552,.314616,.391037),i(c,.904281,.31961,.388137),i(c,.908884,.324755,.385308),i(c,.913354,.330052,.382563),i(c,.917689,.3355,.379915),i(c,.921884,.341098,.377376),i(c,.925937,.346844,.374959),i(c,.929845,.352734,.372677),i(c,.933606,.358764,.370541),i(c,.937221,.364929,.368567),i(c,.940687,.371224,.366762),i(c,.944006,.377643,.365136),i(c,.94718,.384178,.363701),i(c,.95021,.39082,.362468),i(c,.953099,.397563,.361438),i(c,.955849,.4044,.360619),i(c,.958464,.411324,.360014),i(c,.960949,.418323,.35963),i(c,.96331,.42539,.359469),i(c,.965549,.432519,.359529),i(c,.967671,.439703,.35981),i(c,.96968,.446936,.360311),i(c,.971582,.45421,.36103),i(c,.973381,.46152,.361965),i(c,.975082,.468861,.363111),i(c,.97669,.476226,.364466),i(c,.97821,.483612,.366025),i(c,.979645,.491014,.367783),i(c,.981,.498428,.369734),i(c,.982279,.505851,.371874),i(c,.983485,.51328,.374198),i(c,.984622,.520713,.376698),i(c,.985693,.528148,.379371),i(c,.9867,.535582,.38221),i(c,.987646,.543015,.38521),i(c,.988533,.550446,.388365),i(c,.989363,.557873,.391671),i(c,.990138,.565296,.395122),i(c,.990871,.572706,.398714),i(c,.991558,.580107,.402441),i(c,.992196,.587502,.406299),i(c,.992785,.594891,.410283),i(c,.993326,.602275,.41439),i(c,.993834,.609644,.418613),i(c,.994309,.616999,.42295),i(c,.994738,.62435,.427397),i(c,.995122,.631696,.431951),i(c,.99548,.639027,.436607),i(c,.99581,.646344,.441361),i(c,.996096,.653659,.446213),i(c,.996341,.660969,.45116),i(c,.99658,.668256,.456192),i(c,.996775,.675541,.461314),i(c,.996925,.682828,.466526),i(c,.997077,.690088,.471811),i(c,.997186,.697349,.477182),i(c,.997254,.704611,.482635),i(c,.997325,.711848,.488154),i(c,.997351,.719089,.493755),i(c,.997351,.726324,.499428),i(c,.997341,.733545,.505167),i(c,.997285,.740772,.510983),i(c,.997228,.747981,.516859),i(c,.997138,.75519,.522806),i(c,.997019,.762398,.528821),i(c,.996898,.769591,.534892),i(c,.996727,.776795,.541039),i(c,.996571,.783977,.547233),i(c,.996369,.791167,.553499),i(c,.996162,.798348,.55982),i(c,.995932,.805527,.566202),i(c,.99568,.812706,.572645),i(c,.995424,.819875,.57914),i(c,.995131,.827052,.585701),i(c,.994851,.834213,.592307),i(c,.994524,.841387,.598983),i(c,.994222,.84854,.605696),i(c,.993866,.855711,.612482),i(c,.993545,.862859,.619299),i(c,.99317,.870024,.626189),i(c,.992831,.877168,.633109),i(c,.99244,.88433,.640099),i(c,.992089,.89147,.647116),i(c,.991688,.898627,.654202),i(c,.991332,.905763,.661309),i(c,.99093,.912915,.668481),i(c,.99057,.920049,.675675),i(c,.990175,.927196,.682926),i(c,.989815,.934329,.690198),i(c,.989434,.94147,.697519),i(c,.989077,.948604,.704863),i(c,.988717,.955742,.712242),i(c,.988367,.962878,.719649),i(c,.988033,.970012,.727077),i(c,.987691,.977154,.734536),i(c,.987387,.984288,.742002),i(c,.987053,.991438,.749504)])),Kg=a(Ua,i(c,.2081,.1663,.5292),v([i(c,.2091,.1721,.5411),i(c,.2101,.1779,.553),i(c,.2109,.1837,.565),i(c,.2116,.1895,.5771),i(c,.2121,.1954,.5892),i(c,.2124,.2013,.6013),i(c,.2125,.2072,.6135),i(c,.2123,.2132,.6258),i(c,.2118,.2192,.6381),i(c,.2111,.2253,.6505),i(c,.2099,.2315,.6629),i(c,.2084,.2377,.6753),i(c,.2063,.244,.6878),i(c,.2038,.2503,.7003),i(c,.2006,.2568,.7129),i(c,.1968,.2632,.7255),i(c,.1921,.2698,.7381),i(c,.1867,.2764,.7507),i(c,.1802,.2832,.7634),i(c,.1728,.2902,.7762),i(c,.1641,.2975,.789),i(c,.1541,.3052,.8017),i(c,.1427,.3132,.8145),i(c,.1295,.3217,.8269),i(c,.1147,.3306,.8387),i(c,.0986,.3397,.8495),i(c,.0816,.3486,.8588),i(c,.0646,.3572,.8664),i(c,.0482,.3651,.8722),i(c,.0329,.3724,.8765),i(c,.0213,.3792,.8796),i(c,.0136,.3853,.8815),i(c,.0086,.3911,.8827),i(c,.006,.3965,.8833),i(c,.0051,.4017,.8834),i(c,.0054,.4066,.8831),i(c,.0067,.4113,.8825),i(c,.0089,.4159,.8816),i(c,.0116,.4203,.8805),i(c,.0148,.4246,.8793),i(c,.0184,.4288,.8779),i(c,.0223,.4329,.8763),i(c,.0264,.437,.8747),i(c,.0306,.441,.8729),i(c,.0349,.4449,.8711),i(c,.0394,.4488,.8692),i(c,.0437,.4526,.8672),i(c,.0477,.4564,.8652),i(c,.0514,.4602,.8632),i(c,.0549,.464,.8611),i(c,.0582,.4677,.8589),i(c,.0612,.4714,.8568),i(c,.064,.4751,.8546),i(c,.0666,.4788,.8525),i(c,.0689,.4825,.8503),i(c,.071,.4862,.8481),i(c,.0729,.4899,.846),i(c,.0746,.4937,.8439),i(c,.0761,.4974,.8418),i(c,.0773,.5012,.8398),i(c,.0782,.5051,.8378),i(c,.0789,.5089,.8359),i(c,.0794,.5129,.8341),i(c,.0795,.5169,.8324),i(c,.0793,.521,.8308),i(c,.0788,.5251,.8293),i(c,.0778,.5295,.828),i(c,.0764,.5339,.827),i(c,.0746,.5384,.8261),i(c,.0724,.5431,.8253),i(c,.0698,.5479,.8247),i(c,.0668,.5527,.8243),i(c,.0636,.5577,.8239),i(c,.06,.5627,.8237),i(c,.0562,.5677,.8234),i(c,.0523,.5727,.8231),i(c,.0484,.5777,.8228),i(c,.0445,.5826,.8223),i(c,.0408,.5874,.8217),i(c,.0372,.5922,.8209),i(c,.0342,.5968,.8198),i(c,.0317,.6012,.8186),i(c,.0296,.6055,.8171),i(c,.0279,.6097,.8154),i(c,.0265,.6137,.8135),i(c,.0255,.6176,.8114),i(c,.0248,.6214,.8091),i(c,.0243,.625,.8066),i(c,.0239,.6285,.8039),i(c,.0237,.6319,.801),i(c,.0235,.6352,.798),i(c,.0233,.6384,.7948),i(c,.0231,.6415,.7916),i(c,.023,.6445,.7881),i(c,.0229,.6474,.7846),i(c,.0227,.6503,.781),i(c,.0227,.6531,.7773),i(c,.0232,.6558,.7735),i(c,.0238,.6585,.7696),i(c,.0246,.6611,.7656),i(c,.0263,.6637,.7615),i(c,.0282,.6663,.7574),i(c,.0306,.6688,.7532),i(c,.0338,.6712,.749),i(c,.0373,.6737,.7446),i(c,.0418,.6761,.7402),i(c,.0467,.6784,.7358),i(c,.0516,.6808,.7313),i(c,.0574,.6831,.7267),i(c,.0629,.6854,.7221),i(c,.0692,.6877,.7173),i(c,.0755,.6899,.7126),i(c,.082,.6921,.7078),i(c,.0889,.6943,.7029),i(c,.0956,.6965,.6979),i(c,.1031,.6986,.6929),i(c,.1104,.7007,.6878),i(c,.118,.7028,.6827),i(c,.1258,.7049,.6775),i(c,.1335,.7069,.6723),i(c,.1418,.7089,.6669),i(c,.1499,.7109,.6616),i(c,.1585,.7129,.6561),i(c,.1671,.7148,.6507),i(c,.1758,.7168,.6451),i(c,.1849,.7186,.6395),i(c,.1938,.7205,.6338),i(c,.2033,.7223,.6281),i(c,.2128,.7241,.6223),i(c,.2224,.7259,.6165),i(c,.2324,.7275,.6107),i(c,.2423,.7292,.6048),i(c,.2527,.7308,.5988),i(c,.2631,.7324,.5929),i(c,.2735,.7339,.5869),i(c,.2845,.7354,.5809),i(c,.2953,.7368,.5749),i(c,.3064,.7381,.5689),i(c,.3177,.7394,.563),i(c,.3289,.7406,.557),i(c,.3405,.7417,.5512),i(c,.352,.7428,.5453),i(c,.3635,.7438,.5396),i(c,.3753,.7446,.5339),i(c,.3869,.7454,.5283),i(c,.3986,.7461,.5229),i(c,.4103,.7467,.5175),i(c,.4218,.7473,.5123),i(c,.4334,.7477,.5072),i(c,.4447,.7482,.5021),i(c,.4561,.7485,.4972),i(c,.4672,.7487,.4924),i(c,.4783,.7489,.4877),i(c,.4892,.7491,.4831),i(c,.5,.7491,.4786),i(c,.5106,.7492,.4741),i(c,.5212,.7492,.4698),i(c,.5315,.7491,.4655),i(c,.5418,.749,.4613),i(c,.5519,.7489,.4571),i(c,.5619,.7487,.4531),i(c,.5718,.7485,.449),i(c,.5816,.7482,.4451),i(c,.5913,.7479,.4412),i(c,.6009,.7476,.4374),i(c,.6103,.7473,.4335),i(c,.6197,.7469,.4298),i(c,.629,.7465,.4261),i(c,.6382,.746,.4224),i(c,.6473,.7456,.4188),i(c,.6564,.7451,.4152),i(c,.6653,.7446,.4116),i(c,.6742,.7441,.4081),i(c,.683,.7435,.4046),i(c,.6918,.743,.4011),i(c,.7004,.7424,.3976),i(c,.7091,.7418,.3942),i(c,.7176,.7412,.3908),i(c,.7261,.7405,.3874),i(c,.7346,.7399,.384),i(c,.743,.7392,.3806),i(c,.7513,.7385,.3773),i(c,.7596,.7378,.3739),i(c,.7679,.7372,.3706),i(c,.7761,.7364,.3673),i(c,.7843,.7357,.3639),i(c,.7924,.735,.3606),i(c,.8005,.7343,.3573),i(c,.8085,.7336,.3539),i(c,.8166,.7329,.3506),i(c,.8246,.7322,.3472),i(c,.8325,.7315,.3438),i(c,.8405,.7308,.3404),i(c,.8484,.7301,.337),i(c,.8563,.7294,.3336),i(c,.8642,.7288,.33),i(c,.872,.7282,.3265),i(c,.8798,.7276,.3229),i(c,.8877,.7271,.3193),i(c,.8954,.7266,.3156),i(c,.9032,.7262,.3117),i(c,.911,.7259,.3078),i(c,.9187,.7256,.3038),i(c,.9264,.7256,.2996),i(c,.9341,.7256,.2953),i(c,.9417,.7259,.2907),i(c,.9493,.7264,.2859),i(c,.9567,.7273,.2808),i(c,.9639,.7285,.2754),i(c,.9708,.7303,.2696),i(c,.9773,.7326,.2634),i(c,.9831,.7355,.257),i(c,.9882,.739,.2504),i(c,.9922,.7431,.2437),i(c,.9952,.7476,.2373),i(c,.9973,.7524,.231),i(c,.9986,.7573,.2251),i(c,.9991,.7624,.2195),i(c,.999,.7675,.2141),i(c,.9985,.7726,.209),i(c,.9976,.7778,.2042),i(c,.9964,.7829,.1995),i(c,.995,.788,.1949),i(c,.9933,.7931,.1905),i(c,.9914,.7981,.1863),i(c,.9894,.8032,.1821),i(c,.9873,.8083,.178),i(c,.9851,.8133,.174),i(c,.9828,.8184,.17),i(c,.9805,.8235,.1661),i(c,.9782,.8286,.1622),i(c,.9759,.8337,.1583),i(c,.9736,.8389,.1544),i(c,.9713,.8441,.1505),i(c,.9692,.8494,.1465),i(c,.9672,.8548,.1425),i(c,.9654,.8603,.1385),i(c,.9638,.8659,.1343),i(c,.9623,.8716,.1301),i(c,.9611,.8774,.1258),i(c,.96,.8834,.1215),i(c,.9593,.8895,.1171),i(c,.9588,.8958,.1126),i(c,.9586,.9022,.1082),i(c,.9587,.9088,.1036),i(c,.9591,.9155,.099),i(c,.9599,.9225,.0944),i(c,.961,.9296,.0897),i(c,.9624,.9368,.085),i(c,.9641,.9443,.0802),i(c,.9662,.9518,.0753),i(c,.9685,.9595,.0703),i(c,.971,.9673,.0651),i(c,.9736,.9752,.0597),i(c,.9763,.9831,.0538)])),e6=a(Ua,i(c,.050383,.029803,.527975),v([i(c,.063536,.028426,.533124),i(c,.075353,.027206,.538007),i(c,.086222,.026125,.542658),i(c,.096379,.025165,.547103),i(c,.10598,.024309,.551368),i(c,.115124,.023556,.555468),i(c,.123903,.022878,.559423),i(c,.132381,.022258,.56325),i(c,.140603,.021687,.566959),i(c,.148607,.021154,.570562),i(c,.156421,.020651,.574065),i(c,.16407,.020171,.577478),i(c,.171574,.019706,.580806),i(c,.17895,.019252,.584054),i(c,.186213,.018803,.587228),i(c,.193374,.018354,.59033),i(c,.200445,.017902,.593364),i(c,.207435,.017442,.596333),i(c,.21435,.016973,.599239),i(c,.221197,.016497,.602083),i(c,.227983,.016007,.604867),i(c,.234715,.015502,.607592),i(c,.241396,.014979,.610259),i(c,.248032,.014439,.612868),i(c,.254627,.013882,.615419),i(c,.261183,.013308,.617911),i(c,.267703,.012716,.620346),i(c,.274191,.012109,.622722),i(c,.280648,.011488,.625038),i(c,.287076,.010855,.627295),i(c,.293478,.010213,.62949),i(c,.299855,.009561,.631624),i(c,.30621,.008902,.633694),i(c,.312543,.008239,.6357),i(c,.318856,.007576,.63764),i(c,.32515,.006915,.639512),i(c,.331426,.006261,.641316),i(c,.337683,.005618,.643049),i(c,.343925,.004991,.64471),i(c,.35015,.004382,.646298),i(c,.356359,.003798,.64781),i(c,.362553,.003243,.649245),i(c,.368733,.002724,.650601),i(c,.374897,.002245,.651876),i(c,.381047,.001814,.653068),i(c,.387183,.001434,.654177),i(c,.393304,.001114,.655199),i(c,.399411,859e-6,.656133),i(c,.405503,678e-6,.656977),i(c,.41158,577e-6,.65773),i(c,.417642,564e-6,.65839),i(c,.423689,646e-6,.658956),i(c,.429719,831e-6,.659425),i(c,.435734,.001127,.659797),i(c,.441732,.00154,.660069),i(c,.447714,.00208,.66024),i(c,.453677,.002755,.66031),i(c,.459623,.003574,.660277),i(c,.46555,.004545,.660139),i(c,.471457,.005678,.659897),i(c,.477344,.00698,.659549),i(c,.48321,.00846,.659095),i(c,.489055,.010127,.658534),i(c,.494877,.01199,.657865),i(c,.500678,.014055,.657088),i(c,.506454,.016333,.656202),i(c,.512206,.018833,.655209),i(c,.517933,.021563,.654109),i(c,.523633,.024532,.652901),i(c,.529306,.027747,.651586),i(c,.534952,.031217,.650165),i(c,.54057,.03495,.64864),i(c,.546157,.038954,.64701),i(c,.551715,.043136,.645277),i(c,.557243,.047331,.643443),i(c,.562738,.051545,.641509),i(c,.568201,.055778,.639477),i(c,.573632,.060028,.637349),i(c,.579029,.064296,.635126),i(c,.584391,.068579,.632812),i(c,.589719,.072878,.630408),i(c,.595011,.07719,.627917),i(c,.600266,.081516,.625342),i(c,.605485,.085854,.622686),i(c,.610667,.090204,.619951),i(c,.615812,.094564,.61714),i(c,.620919,.098934,.614257),i(c,.625987,.103312,.611305),i(c,.631017,.107699,.608287),i(c,.636008,.112092,.605205),i(c,.640959,.116492,.602065),i(c,.645872,.120898,.598867),i(c,.650746,.125309,.595617),i(c,.65558,.129725,.592317),i(c,.660374,.134144,.588971),i(c,.665129,.138566,.585582),i(c,.669845,.142992,.582154),i(c,.674522,.147419,.578688),i(c,.67916,.151848,.575189),i(c,.683758,.156278,.57166),i(c,.688318,.160709,.568103),i(c,.69284,.165141,.564522),i(c,.697324,.169573,.560919),i(c,.701769,.174005,.557296),i(c,.706178,.178437,.553657),i(c,.710549,.182868,.550004),i(c,.714883,.187299,.546338),i(c,.719181,.191729,.542663),i(c,.723444,.196158,.538981),i(c,.72767,.200586,.535293),i(c,.731862,.205013,.531601),i(c,.736019,.209439,.527908),i(c,.740143,.213864,.524216),i(c,.744232,.218288,.520524),i(c,.748289,.222711,.516834),i(c,.752312,.227133,.513149),i(c,.756304,.231555,.509468),i(c,.760264,.235976,.505794),i(c,.764193,.240396,.502126),i(c,.76809,.244817,.498465),i(c,.771958,.249237,.494813),i(c,.775796,.253658,.491171),i(c,.779604,.258078,.487539),i(c,.783383,.2625,.483918),i(c,.787133,.266922,.480307),i(c,.790855,.271345,.476706),i(c,.794549,.27577,.473117),i(c,.798216,.280197,.469538),i(c,.801855,.284626,.465971),i(c,.805467,.289057,.462415),i(c,.809052,.293491,.45887),i(c,.812612,.297928,.455338),i(c,.816144,.302368,.451816),i(c,.819651,.306812,.448306),i(c,.823132,.311261,.444806),i(c,.826588,.315714,.441316),i(c,.830018,.320172,.437836),i(c,.833422,.324635,.434366),i(c,.836801,.329105,.430905),i(c,.840155,.33358,.427455),i(c,.843484,.338062,.424013),i(c,.846788,.342551,.420579),i(c,.850066,.347048,.417153),i(c,.853319,.351553,.413734),i(c,.856547,.356066,.410322),i(c,.85975,.360588,.406917),i(c,.862927,.365119,.403519),i(c,.866078,.36966,.400126),i(c,.869203,.374212,.396738),i(c,.872303,.378774,.393355),i(c,.875376,.383347,.389976),i(c,.878423,.387932,.3866),i(c,.881443,.392529,.383229),i(c,.884436,.397139,.37986),i(c,.887402,.401762,.376494),i(c,.89034,.406398,.37313),i(c,.89325,.411048,.369768),i(c,.896131,.415712,.366407),i(c,.898984,.420392,.363047),i(c,.901807,.425087,.359688),i(c,.904601,.429797,.356329),i(c,.907365,.434524,.35297),i(c,.910098,.439268,.34961),i(c,.9128,.444029,.346251),i(c,.915471,.448807,.34289),i(c,.918109,.453603,.339529),i(c,.920714,.458417,.336166),i(c,.923287,.463251,.332801),i(c,.925825,.468103,.329435),i(c,.928329,.472975,.326067),i(c,.930798,.477867,.322697),i(c,.933232,.48278,.319325),i(c,.93563,.487712,.315952),i(c,.93799,.492667,.312575),i(c,.940313,.497642,.309197),i(c,.942598,.502639,.305816),i(c,.944844,.507658,.302433),i(c,.947051,.512699,.299049),i(c,.949217,.517763,.295662),i(c,.951344,.52285,.292275),i(c,.953428,.52796,.288883),i(c,.95547,.533093,.28549),i(c,.957469,.53825,.282096),i(c,.959424,.543431,.278701),i(c,.961336,.548636,.275305),i(c,.963203,.553865,.271909),i(c,.965024,.559118,.268513),i(c,.966798,.564396,.265118),i(c,.968526,.5697,.261721),i(c,.970205,.575028,.258325),i(c,.971835,.580382,.254931),i(c,.973416,.585761,.25154),i(c,.974947,.591165,.248151),i(c,.976428,.596595,.244767),i(c,.977856,.602051,.241387),i(c,.979233,.607532,.238013),i(c,.980556,.613039,.234646),i(c,.981826,.618572,.231287),i(c,.983041,.624131,.227937),i(c,.984199,.629718,.224595),i(c,.985301,.63533,.221265),i(c,.986345,.640969,.217948),i(c,.987332,.646633,.214648),i(c,.98826,.652325,.211364),i(c,.989128,.658043,.2081),i(c,.989935,.663787,.204859),i(c,.990681,.669558,.201642),i(c,.991365,.675355,.198453),i(c,.991985,.681179,.195295),i(c,.992541,.68703,.19217),i(c,.993032,.692907,.189084),i(c,.993456,.69881,.186041),i(c,.993814,.704741,.183043),i(c,.994103,.710698,.180097),i(c,.994324,.716681,.177208),i(c,.994474,.722691,.174381),i(c,.994553,.728728,.171622),i(c,.994561,.734791,.168938),i(c,.994495,.74088,.166335),i(c,.994355,.746995,.163821),i(c,.994141,.753137,.161404),i(c,.993851,.759304,.159092),i(c,.993482,.765499,.156891),i(c,.993033,.77172,.154808),i(c,.992505,.777967,.152855),i(c,.991897,.784239,.151042),i(c,.991209,.790537,.149377),i(c,.990439,.796859,.14787),i(c,.989587,.803205,.146529),i(c,.988648,.809579,.145357),i(c,.987621,.815978,.144363),i(c,.986509,.822401,.143557),i(c,.985314,.828846,.142945),i(c,.984031,.835315,.142528),i(c,.982653,.841812,.142303),i(c,.98119,.848329,.142279),i(c,.979644,.854866,.142453),i(c,.977995,.861432,.142808),i(c,.976265,.868016,.143351),i(c,.974443,.874622,.144061),i(c,.97253,.88125,.144923),i(c,.970533,.887896,.145919),i(c,.968443,.894564,.147014),i(c,.966271,.901249,.14818),i(c,.964021,.90795,.14937),i(c,.961681,.914672,.15052),i(c,.959276,.921407,.151566),i(c,.956808,.928152,.152409),i(c,.954287,.934908,.152921),i(c,.951726,.941671,.152925),i(c,.949151,.948435,.152178),i(c,.946602,.95519,.150328),i(c,.944152,.961916,.146861),i(c,.941896,.96859,.140956),i(c,.940015,.975158,.131326)])),r6=a(Ua,i(c,.267004,.004874,.329415),v([i(c,.26851,.009605,.335427),i(c,.269944,.014625,.341379),i(c,.271305,.019942,.347269),i(c,.272594,.025563,.353093),i(c,.273809,.031497,.358853),i(c,.274952,.037752,.364543),i(c,.276022,.044167,.370164),i(c,.277018,.050344,.375715),i(c,.277941,.056324,.381191),i(c,.278791,.062145,.386592),i(c,.279566,.067836,.391917),i(c,.280267,.073417,.397163),i(c,.280894,.078907,.402329),i(c,.281446,.08432,.407414),i(c,.281924,.089666,.412415),i(c,.282327,.094955,.417331),i(c,.282656,.100196,.42216),i(c,.28291,.105393,.426902),i(c,.283091,.110553,.431554),i(c,.283197,.11568,.436115),i(c,.283229,.120777,.440584),i(c,.283187,.125848,.44496),i(c,.283072,.130895,.449241),i(c,.282884,.13592,.453427),i(c,.282623,.140926,.457517),i(c,.28229,.145912,.46151),i(c,.281887,.150881,.465405),i(c,.281412,.155834,.469201),i(c,.280868,.160771,.472899),i(c,.280255,.165693,.476498),i(c,.279574,.170599,.479997),i(c,.278826,.17549,.483397),i(c,.278012,.180367,.486697),i(c,.277134,.185228,.489898),i(c,.276194,.190074,.493001),i(c,.275191,.194905,.496005),i(c,.274128,.199721,.498911),i(c,.273006,.20452,.501721),i(c,.271828,.209303,.504434),i(c,.270595,.214069,.507052),i(c,.269308,.218818,.509577),i(c,.267968,.223549,.512008),i(c,.26658,.228262,.514349),i(c,.265145,.232956,.516599),i(c,.263663,.237631,.518762),i(c,.262138,.242286,.520837),i(c,.260571,.246922,.522828),i(c,.258965,.251537,.524736),i(c,.257322,.25613,.526563),i(c,.255645,.260703,.528312),i(c,.253935,.265254,.529983),i(c,.252194,.269783,.531579),i(c,.250425,.27429,.533103),i(c,.248629,.278775,.534556),i(c,.246811,.283237,.535941),i(c,.244972,.287675,.53726),i(c,.243113,.292092,.538516),i(c,.241237,.296485,.539709),i(c,.239346,.300855,.540844),i(c,.237441,.305202,.541921),i(c,.235526,.309527,.542944),i(c,.233603,.313828,.543914),i(c,.231674,.318106,.544834),i(c,.229739,.322361,.545706),i(c,.227802,.326594,.546532),i(c,.225863,.330805,.547314),i(c,.223925,.334994,.548053),i(c,.221989,.339161,.548752),i(c,.220057,.343307,.549413),i(c,.21813,.347432,.550038),i(c,.21621,.351535,.550627),i(c,.214298,.355619,.551184),i(c,.212395,.359683,.55171),i(c,.210503,.363727,.552206),i(c,.208623,.367752,.552675),i(c,.206756,.371758,.553117),i(c,.204903,.375746,.553533),i(c,.203063,.379716,.553925),i(c,.201239,.38367,.554294),i(c,.19943,.387607,.554642),i(c,.197636,.391528,.554969),i(c,.19586,.395433,.555276),i(c,.1941,.399323,.555565),i(c,.192357,.403199,.555836),i(c,.190631,.407061,.556089),i(c,.188923,.41091,.556326),i(c,.187231,.414746,.556547),i(c,.185556,.41857,.556753),i(c,.183898,.422383,.556944),i(c,.182256,.426184,.55712),i(c,.180629,.429975,.557282),i(c,.179019,.433756,.55743),i(c,.177423,.437527,.557565),i(c,.175841,.44129,.557685),i(c,.174274,.445044,.557792),i(c,.172719,.448791,.557885),i(c,.171176,.45253,.557965),i(c,.169646,.456262,.55803),i(c,.168126,.459988,.558082),i(c,.166617,.463708,.558119),i(c,.165117,.467423,.558141),i(c,.163625,.471133,.558148),i(c,.162142,.474838,.55814),i(c,.160665,.47854,.558115),i(c,.159194,.482237,.558073),i(c,.157729,.485932,.558013),i(c,.15627,.489624,.557936),i(c,.154815,.493313,.55784),i(c,.153364,.497,.557724),i(c,.151918,.500685,.557587),i(c,.150476,.504369,.55743),i(c,.149039,.508051,.55725),i(c,.147607,.511733,.557049),i(c,.14618,.515413,.556823),i(c,.144759,.519093,.556572),i(c,.143343,.522773,.556295),i(c,.141935,.526453,.555991),i(c,.140536,.530132,.555659),i(c,.139147,.533812,.555298),i(c,.13777,.537492,.554906),i(c,.136408,.541173,.554483),i(c,.135066,.544853,.554029),i(c,.133743,.548535,.553541),i(c,.132444,.552216,.553018),i(c,.131172,.555899,.552459),i(c,.129933,.559582,.551864),i(c,.128729,.563265,.551229),i(c,.127568,.566949,.550556),i(c,.126453,.570633,.549841),i(c,.125394,.574318,.549086),i(c,.124395,.578002,.548287),i(c,.123463,.581687,.547445),i(c,.122606,.585371,.546557),i(c,.121831,.589055,.545623),i(c,.121148,.592739,.544641),i(c,.120565,.596422,.543611),i(c,.120092,.600104,.54253),i(c,.119738,.603785,.5414),i(c,.119512,.607464,.540218),i(c,.119423,.611141,.538982),i(c,.119483,.614817,.537692),i(c,.119699,.61849,.536347),i(c,.120081,.622161,.534946),i(c,.120638,.625828,.533488),i(c,.12138,.629492,.531973),i(c,.122312,.633153,.530398),i(c,.123444,.636809,.528763),i(c,.12478,.640461,.527068),i(c,.126326,.644107,.525311),i(c,.128087,.647749,.523491),i(c,.130067,.651384,.521608),i(c,.132268,.655014,.519661),i(c,.134692,.658636,.517649),i(c,.137339,.662252,.515571),i(c,.14021,.665859,.513427),i(c,.143303,.669459,.511215),i(c,.146616,.67305,.508936),i(c,.150148,.676631,.506589),i(c,.153894,.680203,.504172),i(c,.157851,.683765,.501686),i(c,.162016,.687316,.499129),i(c,.166383,.690856,.496502),i(c,.170948,.694384,.493803),i(c,.175707,.6979,.491033),i(c,.180653,.701402,.488189),i(c,.185783,.704891,.485273),i(c,.19109,.708366,.482284),i(c,.196571,.711827,.479221),i(c,.202219,.715272,.476084),i(c,.20803,.718701,.472873),i(c,.214,.722114,.469588),i(c,.220124,.725509,.466226),i(c,.226397,.728888,.462789),i(c,.232815,.732247,.459277),i(c,.239374,.735588,.455688),i(c,.24607,.73891,.452024),i(c,.252899,.742211,.448284),i(c,.259857,.745492,.444467),i(c,.266941,.748751,.440573),i(c,.274149,.751988,.436601),i(c,.281477,.755203,.432552),i(c,.288921,.758394,.428426),i(c,.296479,.761561,.424223),i(c,.304148,.764704,.419943),i(c,.311925,.767822,.415586),i(c,.319809,.770914,.411152),i(c,.327796,.77398,.40664),i(c,.335885,.777018,.402049),i(c,.344074,.780029,.397381),i(c,.35236,.783011,.392636),i(c,.360741,.785964,.387814),i(c,.369214,.788888,.382914),i(c,.377779,.791781,.377939),i(c,.386433,.794644,.372886),i(c,.395174,.797475,.367757),i(c,.404001,.800275,.362552),i(c,.412913,.803041,.357269),i(c,.421908,.805774,.35191),i(c,.430983,.808473,.346476),i(c,.440137,.811138,.340967),i(c,.449368,.813768,.335384),i(c,.458674,.816363,.329727),i(c,.468053,.818921,.323998),i(c,.477504,.821444,.318195),i(c,.487026,.823929,.312321),i(c,.496615,.826376,.306377),i(c,.506271,.828786,.300362),i(c,.515992,.831158,.294279),i(c,.525776,.833491,.288127),i(c,.535621,.835785,.281908),i(c,.545524,.838039,.275626),i(c,.555484,.840254,.269281),i(c,.565498,.84243,.262877),i(c,.575563,.844566,.256415),i(c,.585678,.846661,.249897),i(c,.595839,.848717,.243329),i(c,.606045,.850733,.236712),i(c,.616293,.852709,.230052),i(c,.626579,.854645,.223353),i(c,.636902,.856542,.21662),i(c,.647257,.8584,.209861),i(c,.657642,.860219,.203082),i(c,.668054,.861999,.196293),i(c,.678489,.863742,.189503),i(c,.688944,.865448,.182725),i(c,.699415,.867117,.175971),i(c,.709898,.868751,.169257),i(c,.720391,.87035,.162603),i(c,.730889,.871916,.156029),i(c,.741388,.873449,.149561),i(c,.751884,.874951,.143228),i(c,.762373,.876424,.137064),i(c,.772852,.877868,.131109),i(c,.783315,.879285,.125405),i(c,.79376,.880678,.120005),i(c,.804182,.882046,.114965),i(c,.814576,.883393,.110347),i(c,.82494,.88472,.106217),i(c,.83527,.886029,.102646),i(c,.845561,.887322,.099702),i(c,.85581,.888601,.097452),i(c,.866013,.889868,.095953),i(c,.876168,.891125,.09525),i(c,.886271,.892374,.095374),i(c,.89632,.893616,.096335),i(c,.906311,.894855,.098125),i(c,.916242,.896091,.100717),i(c,.926106,.89733,.104071),i(c,.935904,.89857,.108131),i(c,.945636,.899815,.112838),i(c,.9553,.901065,.118128),i(c,.964894,.902323,.123941),i(c,.974417,.90359,.130215),i(c,.983868,.904867,.136897),i(c,.993248,.906157,.143936)])),uf=function(e){switch(e){case 0:return Xg;case 1:return Qg;case 2:return Kg;case 3:return e6;default:return r6}},n6=function(e){e.a;var r=e.b;return Gr(r)+1},a6=m(function(e,r){var n=r.a,t=r.b,o=a(Ea,n6(r),e),l=m(function(u,$){e:for(;;)if($.b){var f=$.a,s=$.b;if(u){var d=u-1,g=s;u=d,$=g;continue e}else return f}else return n});return o?a(l,o-1,t):n}),$f=m(function(e,r){return a(a6,e,uf(r))}),P0=function(e){return{$:0,a:e}},vf=L(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ff=L(function(e,r,n){return Se(n,e)<0?e:Se(n,r)>0?r:n}),Io=function(e){return i(ff,0,1,e<=.04045?e/12.92:a(Rt,(e+.055)/1.055,2.4))},Nt=L1,t6=function(e){var r=pc(e),n=r.ig,t=r.hj,o=r.gy;return i(Nt,Io(n),Io(t),Io(o))},i6=function(e){return i(vf,0,P0(t6(e)),P0(0))},jc=m(function(e,r){return{$:0,a:e,b:r}}),Lc=m(function(e,r){return{$:2,a:e,b:r}}),oo=function(e){return{$:5,a:e}},kc=m(function(e,r){return{$:4,a:e,b:r}}),Tc=m(function(e,r){return{$:3,a:e,b:r}}),co=m(function(e,r){return{$:1,a:e,b:r}}),o6=L(function(e,r,n){return{ja:e,je:r,ew:n}}),c6=function(e){var r=e;return r},lo=function(e){var r=e;return c6(r.gr)},uo=function(e){var r=e;return r.bk},Nn=function(e){var r=e;return r.eu},Wn=function(e){var r=e;return r.ev},l6=m(function(e,r){return on({dW:a(Oa,e,va(r)),eu:Nn(r),ev:Wn(r),ex:Rn(r)})}),u6=m(function(e,r){return{gr:a(l6,e,lo(r)),bk:uo(r)}}),$6=m(function(e,r){var n=r;return a(oa,a(Oa,e,n.dW),n.g4)}),v6=m(function(e,r){var n=r;return{o:a($6,e,n.o),hR:n.hR,ie:n.ie}}),Dc=function(e){var r=e;return r},f6=function(e){return e},Ac=m(function(e,r){var n=Dc(r),t=n.a,o=n.b;return f6(P(e(t),e(o)))}),m6=m(function(e,r){return a(Ac,Oa(e),r)}),$o=function(e){var r=e;return r.gM},vo=function(e){var r=e;return r.ie},Ic=m(function(e,r){return{gM:r,ie:nr(e)}}),s6=m(function(e,r){return a(Ic,vo(r),a(Oa,e,$o(r)))}),Fc=m(function(e,r){var n=r,t=n.a,o=n.b,l=n.c;return R(e(t),e(o),e(l))}),d6=m(function(e,r){return a(Fc,Oa(e),r)}),jt=m(function(e,r){var n=e.a,t=e.b,o=e.c,l=i(o6,n,t,o);switch(r.$){case 0:var d=r.a,u=r.b;return a(jc,d,a(u6,l,u));case 1:var d=r.a,$=r.b;return a(co,d,a(d6,l,$));case 3:var d=r.a,f=r.b;return a(Tc,d,a(s6,l,f));case 2:var d=r.a,s=r.b;return a(Lc,d,a(v6,l,s));case 4:var d=r.a,g=r.b;return a(kc,d,a(m6,l,g));default:var _=r.a;return oo(a(re,jt(R(n,t,o)),_))}}),$u=function(e){return jt(R(e,0,0))},vu=function(e){return jt(R(0,e,0))},gi=L(function(e,r,n){var t=e,o=r,l=n,u=.5*o,$=_n(u),f=An(u),s=t.g4,d=s,g=d.ja*f,_=$*g,p=g*g,x=d.je*f,w=$*x,C=g*x,z=x*x,y=1-2*(p+z),T=d.ew*f,O=$*T,K=2*(C-O),te=2*(C+O),ie=g*T,oe=2*(ie+w),ae=2*(ie-w),Z=x*T,ge=2*(Z-_),he=2*(Z+_),De=T*T,Pe=1-2*(z+De),de=1-2*(p+De);return{ja:Pe*l.ja+K*l.je+oe*l.ew,je:te*l.ja+de*l.je+ge*l.ew,ew:ae*l.ja+he*l.je+y*l.ew}}),Wt=L(function(e,r,n){var t=e,o=r,l=n,u=.5*o,$=_n(u),f=An(u),s=t.dW,d=s,g=l.ja-d.ja,_=l.je-d.je,p=l.ew-d.ew,x=t.g4,w=x,C=w.ja*f,z=$*C,y=C*C,T=w.je*f,O=$*T,K=C*T,te=T*T,ie=1-2*(y+te),oe=w.ew*f,ae=$*oe,Z=2*(K-ae),ge=2*(K+ae),he=C*oe,De=2*(he+O),Pe=2*(he-O),de=T*oe,Ae=2*(de-z),F=2*(de+z),B=oe*oe,E=1-2*(te+B),V=1-2*(y+B);return{ja:d.ja+E*g+Z*_+De*p,je:d.je+ge*g+V*_+Ae*p,ew:d.ew+Pe*g+F*_+ie*p}}),p6=L(function(e,r,n){return on({dW:i(Wt,e,r,va(n)),eu:i(gi,e,r,Nn(n)),ev:i(gi,e,r,Wn(n)),ex:i(gi,e,r,Rn(n))})}),g6=L(function(e,r,n){return{gr:i(p6,e,r,lo(n)),bk:uo(n)}}),h6=m(function(e,r){var n=a(Wt,e,r),t=a(gi,e,r);return function(o){var l=o;return a(oa,n(l.dW),t(l.g4))}}),b6=L(function(e,r,n){var t=n;return{o:i(h6,e,r,t.o),hR:t.hR,ie:t.ie}}),_6=L(function(e,r,n){return a(Ac,a(Wt,e,r),n)}),w6=L(function(e,r,n){return a(Ic,vo(n),i(Wt,e,r,$o(n)))}),x6=L(function(e,r,n){return a(Fc,a(Wt,e,r),n)}),Bc=L(function(e,r,n){switch(n.$){case 0:var $=n.a,t=n.b;return a(jc,$,i(g6,e,r,t));case 1:var $=n.a,o=n.b;return a(co,$,i(x6,e,r,o));case 3:var $=n.a,l=n.b;return a(Tc,$,i(w6,e,r,l));case 2:var $=n.a,u=n.b;return a(Lc,$,i(b6,e,r,u));case 4:var $=n.a,f=n.b;return a(kc,$,i(_6,e,r,f));default:var s=n.a;return oo(a(re,a(Bc,e,r),s))}}),y6=m(function(e,r){var n=e.a,t=e.b,o=t.a,l=t.b,u=t.c;return a(Bc,a(oa,si(n),Pn({ja:o,je:l,ew:u})),Ra(r))}),S6=a(oa,Wr,io),C6=m(function(e,r){return i(Bc,S6,Ra(e),r)}),Ht=L(function(e,r,n){var t=e,o=n;return{ja:t.ja+r*(o.ja-t.ja),je:t.je+r*(o.je-t.je),ew:t.ew+r*(o.ew-t.ew)}}),z6=L(function(e,r,n){var t=lo(n),o=Nn(t),l=Wn(t),u=Rn(t),$=i(Ht,e,r,va(t)),f=r>=0?on({dW:$,eu:o,ev:l,ex:u}):on({dW:$,eu:hn(o),ev:hn(l),ex:hn(u)}),s=uo(n),d=s.a,g=s.b,_=s.c,p=nr(a(Me,r,d)),x=nr(a(Me,r,g)),w=nr(a(Me,r,_));return{gr:f,bk:R(p,x,w)}}),Ec=function(e){var r=e;return r.o},fu=function(e){return zc(Ec(e))},P6=function(e){return Pc(Ec(e))},mf=function(e){var r=e;return r.hR},sf=function(e){var r=e;return r.ie},M6=L(function(e,r,n){var t=nr(a(Me,r,sf(n))),o=nr(a(Me,r,mf(n))),l=r>=0?fu(n):hn(fu(n)),u=i(Ht,e,r,P6(n));return{o:a(oa,u,l),hR:o,ie:t}}),j6=L(function(e,r,n){return a(Ac,a(Ht,e,r),n)}),L6=L(function(e,r,n){return a(Ic,a(Me,_e(r),vo(n)),i(Ht,e,r,$o(n)))}),k6=L(function(e,r,n){return a(Fc,a(Ht,e,r),n)}),df=m(function(e,r){switch(r.$){case 0:var u=r.a,n=r.b;return a(jc,u,i(z6,Wr,e,n));case 1:var u=r.a,t=r.b;return a(co,u,i(k6,Wr,e,t));case 3:var u=r.a,o=r.b;return a(Tc,u,i(L6,Wr,e,o));case 2:var u=r.a,l=r.b;return a(Lc,u,i(M6,Wr,e,l));case 4:var u=r.a,$=r.b;return a(kc,u,i(j6,Wr,e,$));default:var f=r.a;return oo(a(re,df(e),f))}}),T6=m(function(e,r){var n=e.ja,t=e.je,o=e.ew;return a(Be,jt(R(-n,-t,-o)),a(Be,df(r),jt(R(n,t,o))))}),mu=function(e){var r=e.c9,n=e.db;return{ja:Hr(3)/2*r,je:1/2*r+n}},xr=L(function(e,r,n){return R(e,r,n)}),hi=L(function(e,r,n){return{ja:e,je:r,ew:n}}),D6=m(function(e,r){var n=r.a,t=r.b,o=r.c;return a(co,e,i(xr,i(hi,n.ja,n.je,n.ew),i(hi,t.ja,t.je,t.ew),i(hi,o.ja,o.je,o.ew)))}),A6=m(function(e,r){return(r-Jn(r/e)*e)/e}),I6=function(e){return 2*ia*e},F6=ne(function(e,r,n,t){return e+(r-e)*(1+_n(I6(a(A6,n,t))))/2}),B6=L(function(e,r,n){var t=n.a,o=t.a,l=t.b,u=t.c,$=n.b,f=a(ea,"minimum rotation degree",e),s=a(ea,"maximum rotation degree",e),d=function(){var T=mu(function(){return o?{c9:.6666666666666666,db:.6666666666666666}:{c9:.3333333333333333,db:.3333333333333333}}());return{ja:T.ja,je:T.je,ew:0}}(),g=a(ea,"rotation period",e),_=j(F6,f,s,g,e.eF),p=a(Be,Tr,a(y6,P(d,R(0,0,1)),_)),x=a(D6,i6(a($f,$,r)),R({ja:0,je:0,ew:0},{ja:_n(Xr(30)),je:An(Xr(30)),ew:0},{ja:0,je:1,ew:0})),w=a(vu,1+An(Xr(30)),a($u,_n(Xr(30)),a(C6,Xr(180),x))),C=mu({c9:l,db:u}),z=C.ja,y=C.je;return a(vu,y,a($u,z,p(i(T6,d,a(ea,"trixel scale",e),function(){return o?w:x}()))))}),M0=function(e){return oo(e)},E6=function(e){var r=e.a;return jv(r)},V6=m(function(e,r){var n=Mt(r.m);return M0(a(re,a(B6,e,n.b2),E6(n.i1)))}),R6=function(e){return e},N6=function(e){return nn(.01*e)},su=function(e){return e},W6=function(e){return e},H6=function(e){return{$:0,a:e}},G6=H6,O6={$:3},U6=O6,q6=ne(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Y6=q6,J6=function(e){return{$:1,a:e}},Z6=J6,X6=function(e){return a(Or,"height",D(e))},Q6=nv,K6=function(e){return{$:2,a:e}},eh=K6,pf=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,l=function($){return Ne($*1e3)/1e3},u=function($){return Ne($*1e4)/100};return na(v(["rgba(",ue(u(r)),"%,",ue(u(n)),"%,",ue(u(t)),"%,",ue(l(o)),")"]))},rh=m(function(e,r){switch(r.$){case 0:return a(hs,e,r);case 1:return a(bs,e,r);case 2:return a(_s,e,r);case 3:return a(ws,e,r);case 4:return a(xs,e,r);default:return a(ys,e,r)}}),nh=m(function(e,r){switch(r.$){case 0:return a(Y1,e,r);case 1:return a(J1,e,r);case 2:return a(Z1,e,r);case 3:return a(X1,e,r);case 4:return a(Q1,e,r);case 5:return a(K1,e,r);case 6:return a(es,e,r);case 7:return a(rs,e,r);default:return ns(e)}}),ah=L(function(e,r,n){return i(gs,e,r,n)}),du=function(e){var r=e;return r},qa=F1,Fo=j(qa,1,1,1,1),Yr=L(function(e,r,n){return a(re,function(t){return a(t,r,n)},e)}),th=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ih=m(function(e,r){var n=e,t=r.ja,o=r.je;return i(th,n*t/o,n,n*(1-t-o)/o)}),oh=function(e){var r=e.a,n=e.b,t=e.c;return i(Nt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Vc=m(function(e,r){return oh(a(ih,e,r))}),gf=m(function(e,r){return{eY:xe(e.eY,r.eY),w:e.w*r.w+e.x*r.z+e.y*r.C,x:e.w*r.x+e.x*r.A+e.y*r.D,y:e.w*r.y+e.x*r.B+e.y*r.E,z:e.z*r.w+e.A*r.z+e.B*r.C,A:e.z*r.x+e.A*r.A+e.B*r.D,B:e.z*r.y+e.A*r.B+e.B*r.E,C:e.C*r.w+e.D*r.z+e.E*r.C,D:e.C*r.x+e.D*r.A+e.E*r.D,E:e.C*r.y+e.D*r.B+e.E*r.E,P:r.P+(e.P*r.w+e.Q*r.z+e.R*r.C)*r.c1,Q:r.Q+(e.P*r.x+e.Q*r.A+e.R*r.D)*r.c1,R:r.R+(e.P*r.y+e.Q*r.B+e.R*r.E)*r.c1,c1:e.c1*r.c1}}),Kr=W1,ch=function(e){return Kr({e7:e.w,e8:e.z,e9:e.C,fa:e.P,fb:e.x,fc:e.A,fd:e.D,fe:e.Q,ff:e.y,fg:e.B,fh:e.E,fi:e.R,fj:0,fk:0,fl:0,fm:1})},Bo=Qe(function(e,r,n,t,o){var l=t.eY?1:-1,u=j(qa,t.c1,t.c1,t.c1,l);return pr(o,e,u,ch(t),t.eY,r,n)}),hf=Fr(function(e,r,n,t,o,l){e:for(;;)switch(o.$){case 0:return l;case 5:var u=o.a,$=o.b,f=e,s=r,d=n,g=a(gf,u,t),_=$,p=l;e=f,r=s,n=d,t=g,o=_,l=p;continue e;case 1:var x=o.b,w=a(M,A(Bo,e,r,n,t,x),l.U);return{U:w,ai:l.ai,iu:l.iu};case 3:var C=o.b,z=a(M,A(Bo,e,r,n,t,C),l.ai);return{U:l.U,ai:z,iu:l.iu};case 2:var y=o.a,T=a(M,A(Bo,e,r,n,t,y),l.iu);return{U:l.U,ai:l.ai,iu:T};default:var O=o.a;return i(Oe,j(hf,e,r,n,t),l,O)}}),lh=ne(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),bf=lh,Rc=ne(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),uh=function(e){var r=e.as,n=e.al,t=e.ak;return j(Rc,518,r,n,t)},$h=m(function(e,r){return{$:6,a:e,b:r}}),vh=$h,_f=v([uh({ak:1,al:0,as:!1}),j(bf,!1,!1,!1,!1),a(vh,0,1)]),Na=519,Nc=8,wf=15,Ta=7681,fh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Re=q1,mh=m(function(e,r){return{$:0,a:e,b:r}}),sh=mh({eJ:1,eW:0,fv:5}),Sr=M1,dh=sh(v([{cY:a(Sr,-1,-1)},{cY:a(Sr,1,-1)},{cY:a(Sr,-1,1)},{cY:a(Sr,1,1)}])),ph={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cY"},uniforms:{}},gh=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(s){return function(d){return{$:2,a:e,b:r,c:n,d:t,e:o,f:l,g:u,h:$,i:f,j:s,k:d}}}}}}}}}}}},Wc=L(function(e,r,n){var t=e.d8,o=e.dN,l=e.et,u=m(function(s,d){var g=s;return d(g)}),$=m(function(s,d){var g=s;return d(g)}),f=function(s){return a(Be,u(s.cb),a(Be,$(s.bS),a(Be,$(s.cl),$(s.cm))))};return a(f,n,a(f,r,i(gh,t,o,l)))}),Hc=function(e){return i(Wc,{dN:e.dN,d8:e.d8,et:e.et},{bS:e.bS,cb:e.cb,cl:e.cl,cm:e.cm},{bS:e.bS,cb:e.cb,cl:e.cl,cm:e.cm})},Gc=function(e){return A(Re,v([Hc(e),j(bf,!1,!1,!1,!1)]),ph,fh,dh,{})},hh=Gc({bS:Ta,dN:0,d8:Nc,cb:Na,et:wf,cl:Ta,cm:Ta}),bh=516,pu=5386,ur=7680,_h=function(e){return a(Rt,2,e+4)},xf=function(e){return Gc({bS:ur,dN:wf,d8:Nc,cb:bh,et:_h(e),cl:pu,cm:pu})},wh=L(function(e,r,n){return _r(v([i(Yr,e,n,_f),v([xf(r),hh])]))}),xh=m(function(e,r){return _r(a(ec,wh(e),r))}),yh=function(e){var r=e.as,n=e.al,t=e.ak;return j(Rc,513,r,n,t)},Sh=yh({ak:1,al:0,as:!0}),Ch=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(s){return{$:0,a:e,b:r,c:n,d:t,e:o,f:l,g:u,h:$,i:f,j:s}}}}}}}}}}},zh=function(e){var r=e.c_,n=e.cF,t=e.cq,o=e.cn,l=e.cw,u=e.gm,$=m(function(f,s){var d=f.a,g=f.b,_=f.c,p=s.a,x=s.b,w=s.c;return Ch(d)(g)(_)(p)(x)(w)(r)(n)(t)(o)});return a($,l,u)},Ph=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),gu=m(function(e,r){var n=e,t=r;return i(Ph,32774,n,t)}),Mh=1,hu=771,jh=770,Oc=zh({cn:0,gm:a(gu,Mh,hu),cq:0,cw:a(gu,jh,hu),cF:0,c_:0}),sa=v([Sh,Oc]),Lh=function(e){var r=e;return r.fo},kh=function(e){var r=e;return r.fp},yf=function(e){var r=e;return r.fq},Th=function(e){var r=e;return r.fr},Dh=function(e){var r=e;return r.fs},Sf=function(e){var r=e;return r.ft},Da=m(function(e,r){var n=e,t=r;return t-n}),Cf=function(e){return R(a(Da,Th(e),Lh(e)),a(Da,Dh(e),kh(e)),a(Da,Sf(e),yf(e)))},Ah=function(e){return e},Ih=function(e){return on({dW:Ah({ja:e.P,je:e.Q,ew:e.R}),eu:Pn({ja:e.w,je:e.x,ew:e.y}),ev:Pn({ja:e.z,je:e.A,ew:e.B}),ex:Pn({ja:e.C,je:e.D,ew:e.E})})},Eo=m(function(e,r){var n=e,t=r,o=n.ex,l=o,u=n.ev,$=u,f=n.eu,s=f;return{ja:t.ja*s.ja+t.je*s.je+t.ew*s.ew,je:t.ja*$.ja+t.je*$.je+t.ew*$.ew,ew:t.ja*l.ja+t.je*l.je+t.ew*l.ew}}),zf=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=t.ja-l.ja,$=t.je-l.je,f=t.ew-l.ew,s=n.ex,d=s,g=n.ev,_=g,p=n.eu,x=p;return{ja:u*x.ja+$*x.je+f*x.ew,je:u*_.ja+$*_.je+f*_.ew,ew:u*d.ja+$*d.je+f*d.ew}}),Pf=m(function(e,r){return{dW:a(zf,e,va(r)),eu:a(Eo,e,Nn(r)),ev:a(Eo,e,Wn(r)),ex:a(Eo,e,Rn(r))}}),Ri=function(e){var r=e;return r},Ye=m(function(e,r){var n=e,t=r;return a(or,n,t)}),Xe=m(function(e,r){var n=e,t=r;return a(Pa,n,t)}),Fh=m(function(e,r){var n=Ri(r),t=Ri(e);return{fo:a(Ye,t.fo,n.fo),fp:a(Ye,t.fp,n.fp),fq:a(Ye,t.fq,n.fq),fr:a(Xe,t.fr,n.fr),fs:a(Xe,t.fs,n.fs),ft:a(Xe,t.ft,n.ft)}}),Ir=function(e){var r=e;return r},Bh=function(e){var r=e;return R(r.ja,r.je,r.ew)},ft=m(function(e,r){var n=e,t=r;return t+n}),Eh=m(function(e,r){var n=e.a,t=e.b,o=e.c,l=di(nr(t)),u=di(nr(n)),$=di(nr(o)),f=Bh(r),s=f.a,d=f.b,g=f.c;return{fo:a(ft,u,s),fp:a(ft,l,d),fq:a(ft,$,g),fr:a(Da,u,s),fs:a(Da,l,d),ft:a(Da,$,g)}}),bu=ne(function(e,r,n,t){var o=n.gM,l=2*n.ho*r,u=2*n.hn*r,$=2*n.hm*r,f=o.ew*r,s=o.je*r,d=o.ja*r,g=Ir(Rn(e)),_=_e($*g.ja)+_e(u*g.je)+_e(l*g.ew),p=Ir(Wn(e)),x=_e($*p.ja)+_e(u*p.je)+_e(l*p.ew),w=Ir(Nn(e)),C=_e($*w.ja)+_e(u*w.je)+_e(l*w.ew),z=a(Eh,R(C,x,_),a(zf,e,i(hi,d,s,f)));if(t.$)return q(z);var y=t.a;return q(a(Fh,y,z))}),j0=ne(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,l=t.b;switch(o.$){case 0:var p=e,x=r,w=n,C=l;e=p,r=x,n=w,t=C;continue e;case 1:var u=o.a,$=j(bu,e,r,u,n),p=e,x=r,w=$,C=l;e=p,r=x,n=w,t=C;continue e;case 2:var p=e,x=r,w=n,C=l;e=p,r=x,n=w,t=C;continue e;case 3:var u=o.a,$=j(bu,e,r,u,n),p=e,x=r,w=$,C=l;e=p,r=x,n=w,t=C;continue e;case 4:var f=o.a,p=e,x=r,w=j(j0,e,r,n,f),C=l;e=p,r=x,n=w,t=C;continue e;default:var s=o.a,d=o.b,g=a(Pf,Ih(s),e),_=r*s.c1,p=e,x=r,w=j(j0,g,_,n,v([d])),C=l;e=p,r=x,n=w,t=C;continue e}}else return n}),Ya=k1,Ja=T1,Za=D1,Mf=function(e){return{$:4,a:e}},Vh=m(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,l=a(M,n,r);e=o,r=l;continue e}else return r}),Gt=function(e){return Mf(a(Vh,e,k))},Rh={eY:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,P:0,Q:0,R:0,c1:1},_u=Gc({bS:Ta,dN:0,d8:Nc,cb:Na,et:255,cl:Ta,cm:Ta}),Nh=function(e){var r=e,n=a(or,_e(r.ja),a(or,_e(r.je),_e(r.ew)));if(n){var t=r.ew/n,o=r.je/n,l=r.ja/n,u=Hr(l*l+o*o+t*t);return u*n}else return kr},mr={cq:0,gL:!1,cF:0,d3:0,c_:0,ek:0,ja:0,je:0,ew:0},Mr=m(function(e,r){var n=e,t=r;return Kr({e7:n.ja,e8:n.c_,e9:t.ja,fa:t.c_,fb:n.je,fc:n.cF,fd:t.je,fe:t.cF,ff:n.ew,fg:n.cq,fh:t.ew,fi:t.cq,fj:n.ek,fk:n.d3,fl:t.ek,fm:t.d3})}),ct=P({b_:a(Mr,mr,mr),cM:a(Mr,mr,mr),cN:a(Mr,mr,mr),cO:a(Mr,mr,mr)},j(qa,0,0,0,0)),jf=514,Lf=function(e){var r=e.as,n=e.al,t=e.ak;return j(Rc,515,r,n,t)},kf=240,Wh=v([Lf({ak:1,al:0,as:!0}),Hc({bS:ur,dN:kf,d8:0,cb:jf,et:0,cl:ur,cm:ur}),Oc]),Hh=m(function(e,r){var n=e,t=r.h$,o=r.he,l=r.gq,u=nr(t),$=u,f=nr(o),s=f,d=n.d7;if(d.$){var _=d.a;return t0(s)?Kr({e7:2/(l*_),e8:0,e9:0,fa:0,fb:0,fc:2/_,fd:0,fe:0,ff:0,fg:0,fh:0,fi:-1,fj:0,fk:0,fl:0,fm:1}):Kr({e7:2/(l*_),e8:0,e9:0,fa:0,fb:0,fc:2/_,fd:0,fe:0,ff:0,fg:0,fh:-2/(s-$),fi:-(s+$)/(s-$),fj:0,fk:0,fl:0,fm:1})}else{var g=d.a;return t0(s)?Kr({e7:1/(l*g),e8:0,e9:0,fa:0,fb:0,fc:1/g,fd:0,fe:0,ff:0,fg:0,fh:-1,fi:-2*$,fj:0,fk:0,fl:-1,fm:0}):Kr({e7:1/(l*g),e8:0,e9:0,fa:0,fb:0,fc:1/g,fd:0,fe:0,ff:0,fg:0,fh:-(s+$)/(s-$),fi:-2*s*$/(s-$),fj:0,fk:0,fl:-1,fm:0})}}),ni=m(function(e,r){return(1&e>>r)===1?0:1}),Gh=function(e){return v([Lf({ak:1,al:0,as:!0}),Hc({bS:ur,dN:kf,d8:e,cb:jf,et:0,cl:ur,cm:ur}),Oc])},Oh=L(function(e,r,n){return _r(a(re,function(t){var o=t<<4,l=j(qa,a(ni,t,0),a(ni,t,1),a(ni,t,2),a(ni,t,3));return i(Yr,e,P(r,l),Gh(o))},a(pn,1,a(Rt,2,n)-1)))}),Aa=function(e){var r=e;return r},Uh=H1,qh=Pn({ja:1,je:0,ew:0}),Tf=qh,Df=af,Yh={dW:Wr,eu:Tf,ev:Df,ex:io},fo=function(e){var r=e;return r},Jh=function(e){var r=fo(va(e)),n=Ir(Rn(e)),t=Ir(Wn(e)),o=Ir(Nn(e));return Kr({e7:o.ja,e8:t.ja,e9:n.ja,fa:r.ja,fb:o.je,fc:t.je,fd:n.je,fe:r.je,ff:o.ew,fg:t.ew,fh:n.ew,fi:r.ew,fj:0,fk:0,fl:0,fm:1})},Zh=m(function(e,r){var n=r;return Jh(a(Pf,n,e))}),Xh=function(e){return a(Zh,Yh,e)},Qh=function(e){var r=e;return r.eo},Kh=function(e){var r=e;return Nn(r)},e9=function(e){var r=e;return Wn(r)},r9=function(e){var r=Qh(e.gI),n=on({dW:y0(r),eu:Kh(r),ev:e9(r),ex:hn(C0(r))}),t=Gt(e.bo),o=t,l=j(j0,n,1,U,v([o]));if(l.$===1)return k;var u=l.a,$=Xh(r),f=a(Me,.99,a(Ye,nr(e.bj),S0(yf(u)))),s=Cf(u),d=s.a,g=s.b,_=s.c,p=Nh(i(Mc,d,g,_)),x=a(Me,1.01,a(ft,p,S0(Sf(u)))),w=a(Hh,e.gI,{gq:e.gq,he:x,h$:f}),C=Uh(w).fm,z=C?Ir(hn(C0(r))):Aa(y0(r)),y=function(){var de=e.c7;switch(de.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var Ae=de.a;return P(3,Ae);case 4:var Ae=de.a;return P(4,Ae);default:return P(5,0)}}(),T=y.a,O=y.b,K=e.cD,te=K,ie=a(Vc,te,e.de),oe=ie,ae=Kr({e7:0,e8:z.ja,e9:Ya(oe),fa:e.fV,fb:0,fc:z.je,fd:Ja(oe),fe:pi(p),ff:0,fg:z.ew,fh:Za(oe),fi:T,fj:0,fk:C,fl:0,fm:O}),Z=pr(hf,ae,$,w,Rh,o,{U:k,ai:k,iu:k}),ge=e.cL;switch(ge.$){case 0:var he=ge.a;return _r(v([i(Yr,Z.U,P(he,Fo),sa),i(Yr,Z.ai,ct,sa)]));case 1:var he=ge.a;return _r(v([i(Yr,Z.U,ct,sa),v([_u]),i(Yr,Z.iu,he.b_,_f),v([xf(0)]),i(Yr,Z.U,P(he,Fo),Wh),i(Yr,Z.ai,ct,sa)]));default:var De=ge.a,Pe=ge.b;return _r(v([i(Yr,Z.U,P(Pe,Fo),sa),v([_u]),a(xh,Z.iu,De),i(Oh,Z.U,Pe,Gr(De)),i(Yr,Z.ai,ct,sa)]))}},n9=function(e){return a(Or,"width",D(e))},a9=m(function(e,r){var n=v([Z6(1),eh(0),G6(!0),j(Y6,0,0,0,0)]),t=function(){var T=e.di;switch(T.$){case 0:return R(n,"0",1);case 1:return R(a(M,U6,n),"1",1);default:var O=T.a;return R(n,"0",O)}}(),o=t.a,l=t.b,u=t.c,$=e.bk,f=$.a,s=$.b,d=du(s),g=a(we,"height",D(d)+"px"),_=du(f),p=_/d,x=a(Ga,function(T){return r9({gq:p,gI:e.gI,bj:e.bj,bo:T.bo,cD:T.cD,cL:T.cL,fV:u,c7:T.c7,de:T.de})},r),w=a(we,"width",D(_)+"px"),C=e.bh,z=C,y=pf(z);return i(Q6,"div",v([a(we,"padding","0px"),w,g]),v([P(l,i(ah,o,v([n9(Ne(_*u)),X6(Ne(d*u)),w,g,a(we,"display","block"),a(we,"background-color",y)]),x))]))}),t9=function(e){return a(a9,{di:e.di,bh:e.bh,gI:e.gI,bj:e.bj,bk:e.bk},v([{bo:e.bo,cD:e.cD,cL:e.cL,c7:e.c7,de:e.de}]))},Af=function(e){return e},wu=Af({ja:.31271,je:.32902}),i9=m(function(e,r){var n=e,t=Ir(r.g4),o=t.ja,l=t.je,u=t.ew,$=a(Vc,r.dA,r.$7),f=$;return{cq:Za(f),gL:n,cF:Ja(f),d3:0,c_:Ya(f),ek:1,ja:-o,je:-l,ew:-u}}),o9=function(e){return e},c9=function(e){return o9(1.2*a(Rt,2,e))},Vo=function(e){return e},l9={$:0},u9=l9,If=function(e){return e},xu=function(e){var r=e;return r},$9=function(e){e:for(;;){if(xe(e.hJ,kr)&&xe(e.hK,kr))return mr;if(a(rf,nr(e.hJ),nr(e.hK))){var r={$7:e.$7,hJ:e.hK,hK:e.hJ,f0:hn(e.f0)};e=r;continue e}else{var n=_e(xu(e.hK)/ia),t=_e(xu(e.hJ)/ia),o=Ir(e.f0),l=o.ja,u=o.je,$=o.ew,f=a(Vc,If(1),e.$7),s=f;return{cq:t*Za(s),gL:!1,cF:t*Ja(s),d3:n/t,c_:t*Ya(s),ek:3,ja:l,je:u,ew:$}}}},yu=function(e){return $9({$7:e.$7,hJ:e.dA,hK:kr,f0:e.f0})},v9=function(e){var r=e;return r},Ff=function(e){var r=i(ff,1667,25e3,v9(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Af({ja:n,je:t})},Bf=function(e){return e},f9=Ff(Bf(12e3)),m9=Ff(Bf(5600)),s9=function(e){return{$:2,a:e}},d9=function(e){return s9(e)},p9=m(function(e,r){return{$:2,a:e,b:r}}),Ef=function(e){return{$:0,a:e}},ai=function(e){var r=e;return r},g9=function(e){var r=e;return r.gL},h9=Ef(ct.a),b9=m(function(e,r){var n=m(function(t,o){var l=o.a,u=o.b;return e(t)?P(a(M,t,l),u):P(l,a(M,t,u))});return i(ar,n,P(k,k),r)}),_9=function(e){var r=e;return Kr({e7:r.ja,e8:r.c_,e9:0,fa:0,fb:r.je,fc:r.cF,fd:0,fe:0,ff:r.ew,fg:r.cq,fh:0,fi:0,fj:r.ek,fk:r.d3,fl:0,fm:0})},w9=Te(function(e,r,n,t,o,l,u,$){var f=a(b9,g9,v([ai(e),ai(r),ai(n),ai(t)])),s=f.a,d=f.b;if(s.b){var g=X(s,d);if(g.b&&g.b.b&&g.b.b.b&&g.b.b.b.b&&!g.b.b.b.b.b){var _=g.a,p=g.b,x=p.a,w=p.b,C=w.a,z=w.b,y=z.a;return a(p9,a(re,_9,s),{b_:a(Mr,_,x),cM:a(Mr,C,y),cN:a(Mr,o,l),cO:a(Mr,u,$)})}else return h9}else return Ef({b_:a(Mr,e,r),cM:a(Mr,n,t),cN:a(Mr,o,l),cO:a(Mr,u,$)})}),x9=L(function(e,r,n){return Tt(w9,e,r,n,mr,mr,mr,mr,mr)}),y9=function(e){var r=a(i9,W6(e.iu),{$7:m9,g4:e.iK,dA:Vo(8e4)}),n=yu({$7:f9,dA:Vo(2e4),f0:e.f0}),t=yu({$7:wu,dA:Vo(15e3),f0:hn(e.f0)}),o=i(x9,r,n,t);return t9({di:d9(e.du),bh:e.bh,gI:e.gI,bj:e.bj,bk:e.bk,bo:e.bo,cD:c9(15),cL:o,c7:u9,de:wu})},Vf=ne(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),S9=ne(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Rf=ne(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Nf=ne(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),C9=ne(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),z9=ne(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),P9=ne(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Uc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return j(P9,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return j(Vf,n,r,o,1);case 3:var n=e.a,t=e.b,o=e.c;return j(S9,n,t,o,1);case 4:var n=e.a,t=e.b,o=e.c;return j(Rf,n,t,o,1);case 5:var n=e.a,t=e.b,o=e.c;return j(z9,n,t,o,1);case 6:var n=e.a,t=e.b,o=e.c;return j(Nf,n,t,o,1);case 7:var n=e.a,t=e.b,o=e.c;return j(C9,n,t,o,1);case 8:return e;case 9:return e;default:return e}},qc={$:0},M9=Te(function(e,r,n,t,o,l,u,$){e:for(;;)if($.b){var f=$.a,s=$.b,d=Ri(u(f)),g=a(Xe,d.fr,e),_=a(Ye,d.fo,r),p=a(Xe,d.fs,n),x=a(Ye,d.fp,t),w=a(Xe,d.ft,o),C=a(Ye,d.fq,l),z=u,y=s;e=g,r=_,n=p,t=x,o=w,l=C,u=z,$=y;continue e}else return{fo:r,fp:t,fq:l,fr:e,fs:n,ft:o}}),j9=L(function(e,r,n){var t=Ri(e(r));return Tt(M9,t.fr,t.fo,t.fs,t.fp,t.ft,t.fq,e,n)}),Ro=m(function(e,r){var n=e,t=r;return Se(t,n)<1}),Wf=function(e){return a(Ro,e.fo,e.fr)&&a(Ro,e.fp,e.fs)&&a(Ro,e.fq,e.ft)?e:{fo:a(Ye,e.fr,e.fo),fp:a(Ye,e.fs,e.fp),fq:a(Ye,e.ft,e.fq),fr:a(Xe,e.fr,e.fo),fs:a(Xe,e.fs,e.fp),ft:a(Xe,e.ft,e.fq)}},Lt=function(e){var r=e;return r},Hf=function(e){var r=Lt(e),n=r.a,t=r.b,o=r.c,l=ja(n),u=La(n),$=ka(n),f=ja(t),s=La(t),d=ka(t),g=ja(o),_=La(o),p=ka(o);return Wf({fo:a(Ye,l,a(Ye,f,g)),fp:a(Ye,u,a(Ye,s,_)),fq:a(Ye,$,a(Ye,d,p)),fr:a(Xe,l,a(Xe,f,g)),fs:a(Xe,u,a(Xe,s,_)),ft:a(Xe,$,a(Xe,d,p))})},Gf=A1,hr=function(e){return Gf(fo(e))},Of=function(e){var r=e;return r},mo=function(e){return Gf(Of(e))},L9=m(function(e,r){var n=e,t=r,o=a(or,_e(t.ja),a(or,_e(t.je),_e(t.ew)));if(o){var l=t.ew/o,u=t.je/o,$=t.ja/o,f=Hr($*$+u*u+l*l);return{ja:n*$/f,je:n*u/f,ew:n*l/f}}else return nf}),k9=L9(If(1)),Uf=L(function(e,r,n){var t=a(Vi,r,n),o=a(Vi,e,r);return k9(a(Sc,t,o))}),T9=function(e){var r=Lt(e),n=r.a,t=r.b,o=r.c,l=mo(i(Uf,n,t,o));return R({u:l,cY:hr(n)},{u:l,cY:hr(t)},{u:l,cY:hr(o)})},D9=m(function(e,r){return{$:2,a:e,b:r}}),qf=D9({eJ:3,eW:0,fv:4}),A9=function(e){if(e.b){var r=e.a,n=e.b,t=qf(a(re,T9,e)),o=i(j9,Hf,r,n);return j(Vf,o,e,t,0)}else return qc},tr=L(function(e,r,n){var t=e,o=r,l=n;return{ja:t,je:o,ew:l}}),Yf=function(){var e=nn(1),r=nn(1),n=nn(1),t=a(Me,-.5,e),o=a(Me,-.5,r),l=a(Me,-.5,n),u=i(tr,l,o,t),$=a(Me,.5,e),f=i(tr,l,o,$),s=a(Me,.5,r),d=i(tr,l,s,t),g=i(tr,l,s,$),_=a(Me,.5,n),p=i(tr,_,o,t),x=i(tr,_,s,t),w=i(tr,_,o,$),C=i(tr,_,s,$);return Uc(A9(v([i(xr,u,x,p),i(xr,u,d,x),i(xr,f,w,C),i(xr,f,C,g),i(xr,p,x,C),i(xr,p,C,w),i(xr,u,g,d),i(xr,u,f,g),i(xr,u,p,w),i(xr,u,w,f),i(xr,d,C,x),i(xr,d,g,C)])))}(),ti={$:0},I9=L(function(e,r,n){return{$:1,a:e,b:r,c:n}}),F9=L(function(e,r,n){var t=r.a,o=r.b,l=r.c,u=e(l),$=e(o),f=e(t),s=mo(i(Uf,f,$,u)),d={u:s,cY:hr(f)},g={u:s,cY:hr($)},_={u:s,cY:hr(u)};return a(M,d,a(M,g,a(M,_,n)))}),Yc=function(e){var r=e;return r.L},B9=ne(function(e,r,n,t){if(r.$===1)return U;var o=r.a;if(n.$===1)return U;var l=n.a;if(t.$===1)return U;var u=t.a;return q(i(e,o,l,u))}),L0=4294967295>>>32-gt,k0=km,E9=L(function(e,r,n){e:for(;;){var t=L0&r>>>e,o=a(k0,t,n);if(o.$){var s=o.a;return a(k0,L0&r,s)}else{var l=o.a,u=e-gt,$=r,f=l;e=u,r=$,n=f;continue e}}}),V9=function(e){return e>>>5<<5},R9=m(function(e,r){var n=r.a,t=r.b,o=r.c,l=r.d;return e<0||Se(e,n)>-1?U:Se(e,V9(n))>-1?q(a(k0,L0&e,l)):q(i(E9,t,e,o))}),Jc=function(e){var r=e;return r.aF},No=m(function(e,r){return a(R9,e,Jc(r))}),N9=function(e){var r=function(n){var t=n.a,o=n.b,l=n.c;return j(B9,L(function(u,$,f){return R(u,$,f)}),a(No,t,e),a(No,o,e),a(No,l,e))};return a(Mn,r,Yc(e))},W9=L(function(e,r,n){e:for(;;){var t=a(nc,zr,e),o=t.a,l=t.b;if(Se(n0(o),zr)<0)return a(x$,!0,{F:r,q:n,v:o});var u=l,$=a(M,_$(o),r),f=n+1;e=u,r=$,n=f;continue e}}),Zc=function(e){return e.b?i(W9,e,k,0):h$},H9=m(function(e,r){return!a(Bt,a(Et,ad,e),r)}),G9=function(e){var r=e.a;return r},Jf=m(function(e,r){var n=G9(e),t=function(o){var l=o.a,u=o.b,$=o.c;return l>=0&&Se(l,n)<0&&u>=0&&Se(u,n)<0&&$>=0&&Se($,n)<0};return a(H9,t,r)?{L:r,aF:e}:{L:a(ev,t,r),aF:e}}),O9=L(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ot=O9({eJ:1,eW:3,fv:4}),bi=m(function(e,r){var n=Aa(r),t=Aa(e);return P(R(t.ja,t.je,t.ew),R(n.ja,n.je,n.ew))}),Su=i(Nt,0,0,0),Wo=Fr(function(e,r,n,t,o,l){var u=l.a,$=l.b,f=l.c,s=a(Zi,a(bi,e,r),o);if(s.$){var g={u:Su,cY:hr(r)},_={u:Su,cY:hr(e)},p=f+1,x=f;return R(a(M,R(n,x,p),a(M,R(n,p,t),u)),a(M,g,a(M,_,$)),f+2)}else{var d=s.a;return R(a(M,R(n,d,t),u),$,f)}}),U9=Qe(function(e,r,n,t,o){e:for(;;)if(n.b){var l=n.a,u=l.a,$=l.b,f=l.c,s=n.b,d=e(f),g=e($),_=e(u),p=t+2,x=t+1,w=t,C=e,z=r,y=s,T=t+3,O=pr(Wo,d,_,p,w,r,pr(Wo,g,d,x,p,r,pr(Wo,_,g,w,x,r,o)));e=C,r=z,n=y,t=T,o=O;continue e}else{var K=o,te=K.a,ie=K.b;return P(te,$r(ie))}}),q9=Qe(function(e,r,n,t,o){e:for(;;)if(r.b){var l=r.a,u=l.a,$=l.b,f=l.c,s=r.b,d=e(f),g=e($),_=e(u),p=n+2,x=n+1,w=n,C=i(ra,a(bi,_,d),p,i(ra,a(bi,d,g),x,i(ra,a(bi,g,_),w,o))),z=a(M,R(w,x,p),t),y=e,T=s,O=n+3,K=z,te=C;e=y,r=T,n=O,t=K,o=te;continue e}else return R(t,o,n)}),qn=L(function(e,r,n){var t=N9(n),o=i(ar,F9(r),k,t),l=A(q9,r,t,0,k,Xi),u=l.a,$=l.b,f=l.c,s=A(U9,r,$,t,0,R(u,k,f)),d=s.a,g=s.b,_=Sn(g)?o:X(o,g);return i(I9,e,a(Jf,Zc(_),d),a(Ot,_,d))}),T0=function(e){return{L:a(re,function(r){return R(3*r,3*r+1,3*r+2)},a(pn,0,Gr(e)-1)),aF:Zc(_r(a(re,function(r){var n=r.a,t=r.b,o=r.c;return v([n,t,o])},e)))}},Zf=function(e){switch(e.$){case 0:return ti;case 1:var t=e.a,r=e.b,n=a(re,Lt,r);return i(qn,t,Tr,T0(n));case 2:var t=e.a,r=e.b,n=a(re,Lt,r);return i(qn,t,Tr,T0(n));case 3:var t=e.a,o=e.b;return i(qn,t,Tr,o);case 4:var t=e.a,o=e.b;return i(qn,t,function(l){return l.cY},o);case 5:var t=e.a,o=e.b;return i(qn,t,function(l){return l.cY},o);case 6:var t=e.a,o=e.b;return i(qn,t,function(l){return l.cY},o);case 7:var t=e.a,o=e.b;return i(qn,t,function(l){return l.cY},o);case 8:return ti;case 9:return ti;default:return ti}},Cu=Zf(Yf),Xf={$:0},Y=Xf,er=m(function(e,r){return{$:1,a:e,b:r}}),Y9={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cx"}},J9=1029,Z9=function(e){return{$:5,a:e}},Qf=function(e){var r=e;return Z9(r)},X9=Qf(J9),Q9=1028,K9=Qf(Q9),br=L(function(e,r,n){return r===1?e?a(M,X9,n):a(M,K9,n):n}),Kf={src:`
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
    `,attributes:{position:"cY",uv:"T"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Ho=ne(function(e,r,n,t){return a(er,r,Te(function(o,l,u,$,f,s,d,g){return A(Re,i(br,$,t,g),Kf,Y9,n,{cx:e,d:u,e:l,f:s,g:o,h:f})}))}),Xc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"a$"}},em={src:`
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
    `,attributes:{position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},ln=ne(function(e,r,n,t){return a(er,r,Te(function(o,l,u,$,f,s,d,g){return A(Re,i(br,$,t,g),em,Xc,n,{a$:e,d:u,e:l,f:s,g:o,h:f})}))}),rm=m(function(e,r){return{$:3,a:e,b:r}}),e7={src:`
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
    `,attributes:{},uniforms:{constantColor:"a$",pointRadius:"cW",sceneProperties:"g"}},nm={src:`
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
    `,attributes:{position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",pointRadius:"cW",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},r7=ne(function(e,r,n,t){return a(rm,n,Te(function(o,l,u,$,f,s,d,g){return A(Re,g,nm,e7,t,{a$:e,d:u,e:l,cW:r,f:s,g:o,h:f})}))}),Qc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bm",sceneProperties:"g"}},Ut=function(e){var r=e;return r},so=I1,un=Qe(function(e,r,n,t,o){return a(er,n,Te(function(l,u,$,f,s,d,g,_){return A(Re,i(br,f,o,_),em,Qc,t,{bm:a(so,Ut(r),e),d:$,e:u,f:d,g:l,h:s})}))}),n7={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bm",pointRadius:"cW",sceneProperties:"g"}},a7=Qe(function(e,r,n,t,o){return a(rm,t,Te(function(l,u,$,f,s,d,g,_){return A(Re,_,nm,n7,o,{bm:a(so,Ut(r),e),d:$,e:u,cW:n,f:d,g:l,h:s})}))}),am={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",materialColor:"dO",sceneProperties:"g",viewMatrix:"h"}},tm={src:`
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
    `,attributes:{normal:"u",position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},ii=ne(function(e,r,n,t){return a(er,r,Te(function(o,l,u,$,f,s,d,g){var _=d.a,p=d.b;return A(Re,i(br,$,t,g),tm,am,n,{Z:p,b_:_.b_,cM:_.cM,cN:_.cN,cO:_.cO,dO:e,d:u,e:l,f:s,g:o,h:f})}))}),im={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",materialColorTexture:"dP",normalMapTexture:"bx",sceneProperties:"g",useNormalMap:"bF",viewMatrix:"h"}},om={src:`
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
    `,attributes:{normal:"u",position:"cY",tangent:"fX",uv:"T"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},t7=Fr(function(e,r,n,t,o,l){return a(er,t,Te(function(u,$,f,s,d,g,_,p){var x=_.a,w=_.b;return A(Re,i(br,s,l,p),om,im,o,{Z:w,b_:x.b_,cM:x.cM,cN:x.cN,cO:x.cO,dP:e,d:f,e:$,bx:r,f:g,g:u,bF:n,h:d})}))}),cm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"dn",constantBaseColor:"dq",constantMetallic:"dr",constantRoughness:"ds",enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",metallicTexture:"dS",normalMapTexture:"bx",roughnessTexture:"ec",sceneProperties:"g",useNormalMap:"bF",viewMatrix:"h"}},i7=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(s){return function(d){return a(er,f,Te(function(g,_,p,x,w,C,z,y){var T=z.a,O=z.b;return A(Re,i(br,x,d,y),om,cm,s,{dn:e,dq:r,dr:l,ds:t,Z:O,b_:T.b_,cM:T.cM,cN:T.cN,cO:T.cO,dS:o,d:p,e:_,bx:u,f:C,ec:n,g,bF:$,h:w})}))}}}}}}}}}}},lm={src:`
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
    `,attributes:{},uniforms:{baseColor:"dm",enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",metallic:"dR",roughness:"eb",sceneProperties:"g",viewMatrix:"h"}},oi=Fr(function(e,r,n,t,o,l){return a(er,t,Te(function(u,$,f,s,d,g,_,p){var x=_.a,w=_.b;return A(Re,i(br,s,l,p),tm,lm,o,{dm:e,Z:w,b_:x.b_,cM:x.cM,cN:x.cN,cO:x.cO,dR:n,d:f,e:$,f:g,eb:r,g:u,h:d})}))}),o7=function(e){return{$:0,a:e}},zu=m(function(e,r){return{$:1,a:e,b:r}}),mt=m(function(e,r){if(r.$){var n=r.a.I;return P(n,1)}else return r.a,P(e,0)}),c7=function(e){return j(qa,Ya(e),Ja(e),Za(e),1)},Kc=j(qa,0,0,0,0),_i=m(function(e,r){if(r.$){var t=r.a.I;return P(t,Kc)}else{var n=r.a;return P(e,c7(n))}}),um=m(function(e,r){var n=P(e,r);if(n.a.$){var o=n.a.a.I;return a(zu,P(o,Kc),a(mt,o,r))}else if(n.b.$){var o=n.b.a.I;return a(zu,a(_i,o,e),a(mt,o,r))}else{var t=n.a.a;return n.b.a,o7(t)}}),l7=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ci=ne(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),u7=ne(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),$7=function(e){return a(Sr,e,1)},D0=a(Sr,0,0),da=m(function(e,r){if(r.$){var t=r.a.I;return P(t,D0)}else{var n=r.a;return P(e,$7(n))}}),$m=ne(function(e,r,n,t){var o=j(u7,e,r,n,t);if(o.a.$){var f=o.a.a.I;return j(ci,P(f,Kc),a(da,f,r),a(da,f,n),a(mt,f,t))}else if(o.b.$){var f=o.b.a.I;return j(ci,a(_i,f,e),P(f,D0),a(da,f,n),a(mt,f,t))}else if(o.c.$){var f=o.c.a.I;return j(ci,a(_i,f,e),a(da,f,r),P(f,D0),a(mt,f,t))}else if(o.d.$){var f=o.d.a.I;return j(ci,a(_i,f,e),a(da,f,r),a(da,f,n),P(f,1))}else{var l=o.a.a,u=o.b.a,$=o.c.a;return o.d.a,i(l7,l,u,$)}}),v7={src:`
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
    `,attributes:{},uniforms:{backlight:"dj",colorTexture:"cx",sceneProperties:"g"}},Go=Qe(function(e,r,n,t,o){return a(er,n,Te(function(l,u,$,f,s,d,g,_){return A(Re,i(br,f,o,_),Kf,v7,t,{dj:Ut(r),cx:e,d:$,e:u,f:d,g:l,h:s})}))}),vm={src:`
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
    `,attributes:{normal:"u",position:"cY",uv:"T"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},f7=ne(function(e,r,n,t){return a(er,r,Te(function(o,l,u,$,f,s,d,g){var _=d.a,p=d.b;return A(Re,i(br,$,t,g),vm,im,n,{Z:p,b_:_.b_,cM:_.cM,cN:_.cN,cO:_.cO,dP:e,d:u,e:l,bx:e,f:s,g:o,bF:0,h:f})}))}),m7=B0(function(e,r,n,t,o,l,u,$,f){return a(er,u,Te(function(s,d,g,_,p,x,w,C){var z=w.a,y=w.b;return A(Re,i(br,_,f,C),vm,cm,$,{dn:e,dq:r,dr:l,ds:t,Z:y,b_:z.b_,cM:z.cM,cN:z.cN,cO:z.cO,dS:o,d:g,e:d,bx:e,f:x,ec:n,g:s,bF:0,h:p})}))}),kt=L(function(e,r,n){var t=e,o=r;return n<=.5?t+n*(o-t):o+(1-n)*(t-o)}),s7=function(e){var r=e;return i(kt,r.fr,r.fo,.5)},d7=function(e){var r=e;return i(kt,r.fs,r.fp,.5)},p7=function(e){var r=e;return i(kt,r.ft,r.fq,.5)},g7=function(e){return i(tr,s7(e),d7(e),p7(e))},me=function(e){var r=Cf(e),n=r.a,t=r.b,o=r.c;return{gM:fo(g7(e)),hm:n/2,hn:t/2,ho:o/2}},el=m(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var $=e.b.a.I;switch(r.$){case 0:return Y;case 1:return Y;case 2:return Y;case 3:return Y;case 4:return Y;case 5:var o=r.a,u=r.c,t=r.d;return j(Ho,$,me(o),u,t);case 6:var o=r.a,u=r.c,t=r.d;return j(Ho,$,me(o),u,t);case 7:var o=r.a,u=r.c,t=r.d;return j(Ho,$,me(o),u,t);case 8:return Y;case 9:return Y;default:return Y}}else{var n=e.b.a;switch(r.$){case 0:return Y;case 1:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 2:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 3:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 4:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 5:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 6:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 7:var o=r.a,u=r.c,t=r.d;return j(ln,n,me(o),u,t);case 8:var o=r.a,u=r.c;return j(ln,n,me(o),u,0);case 9:var o=r.a,u=r.c;return j(ln,n,me(o),u,0);default:var o=r.a,l=r.b,u=r.d;return j(r7,n,l,me(o),u)}}case 1:if(e.b.$){e.a;var $=e.b.a.I,s=e.c;switch(r.$){case 0:return Y;case 1:return Y;case 2:return Y;case 3:return Y;case 4:return Y;case 5:var o=r.a,u=r.c,t=r.d;return A(Go,$,s,me(o),u,t);case 6:var o=r.a,u=r.c,t=r.d;return A(Go,$,s,me(o),u,t);case 7:var o=r.a,u=r.c,t=r.d;return A(Go,$,s,me(o),u,t);case 8:return Y;case 9:return Y;default:return Y}}else{var f=e.b.a,s=e.c;switch(r.$){case 0:return Y;case 1:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 2:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 3:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 4:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 5:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 6:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 7:var o=r.a,u=r.c,t=r.d;return A(un,f,s,me(o),u,t);case 8:var o=r.a,u=r.c;return A(un,f,s,me(o),u,0);case 9:var o=r.a,u=r.c;return A(un,f,s,me(o),u,0);default:var o=r.a,l=r.b,u=r.d;return A(a7,f,s,l,me(o),u)}}case 2:e.a;var d=e.b,te=e.c,g=a(um,d,te);if(g.$){var x=g.a,w=x.a;x.b;var C=g.b,z=C.a,y=C.b;switch(r.$){case 0:return Y;case 1:return Y;case 2:return Y;case 3:return Y;case 4:return Y;case 5:return Y;case 6:var o=r.a,u=r.c,p=r.d;return j(f7,w,me(o),u,p);case 7:var o=r.a,u=r.c,p=r.d;return pr(t7,w,z,y,me(o),u,p);case 8:return Y;case 9:return Y;default:return Y}}else{var _=g.a;switch(r.$){case 0:return Y;case 1:return Y;case 2:var o=r.a,u=r.c,p=r.d;return j(ii,_,me(o),u,p);case 3:return Y;case 4:var o=r.a,u=r.c,p=r.d;return j(ii,_,me(o),u,p);case 5:return Y;case 6:var o=r.a,u=r.c,p=r.d;return j(ii,_,me(o),u,p);case 7:var o=r.a,u=r.c,p=r.d;return j(ii,_,me(o),u,p);case 8:return Y;case 9:return Y;default:return Y}}default:e.a;var T=e.b,O=e.c,K=e.d,te=e.e,ie=j($m,T,O,K,te);if(ie.$){var ge=ie.a,he=ge.a,De=ge.b,Pe=ie.b,de=Pe.a,Ae=Pe.b,F=ie.c,B=F.a,E=F.b,V=ie.d,z=V.a,y=V.b;switch(r.$){case 0:return Y;case 1:return Y;case 2:return Y;case 3:return Y;case 4:return Y;case 5:return Y;case 6:var o=r.a,u=r.c,t=r.d;return zm(m7,he,De,de,Ae,B,E,me(o),u,t);case 7:var o=r.a,u=r.c,t=r.d;return i7(he)(De)(de)(Ae)(B)(E)(z)(y)(me(o))(u)(t);case 8:return Y;case 9:return Y;default:return Y}}else{var oe=ie.a,ae=ie.b,Z=ie.c;switch(r.$){case 0:return Y;case 1:return Y;case 2:var o=r.a,u=r.c,t=r.d;return pr(oi,oe,ae,Z,me(o),u,t);case 3:return Y;case 4:var o=r.a,u=r.c,t=r.d;return pr(oi,oe,ae,Z,me(o),u,t);case 5:return Y;case 6:var o=r.a,u=r.c,t=r.d;return pr(oi,oe,ae,Z,me(o),u,t);case 7:var o=r.a,u=r.c,t=r.d;return pr(oi,oe,ae,Z,me(o),u,t);case 8:return Y;case 9:return Y;default:return Y}}}}),Oo=function(e){var r=e;return r.ja},Uo=function(e){var r=e;return r.je},qo=function(e){var r=e;return r.ew},h7=function(e){var r=e,n=qo(r.ex),t=Uo(r.ex),o=Oo(r.ex),l=qo(r.ev),u=Uo(r.ev),$=Oo(r.ev),f=qo(r.eu),s=Uo(r.eu),d=Oo(r.eu);return d*u*n+s*l*o+f*$*t-f*u*o-s*$*n-d*l*t>0},b7=function(e){var r=fo(va(e)),n=Ir(Rn(e)),t=Ir(Wn(e)),o=Ir(Nn(e));return{eY:h7(e),w:o.ja,x:o.je,y:o.ew,z:t.ja,A:t.je,B:t.ew,C:n.ja,D:n.je,E:n.ew,P:r.ja,Q:r.je,R:r.ew,c1:1}},ha=m(function(e,r){return{$:5,a:e,b:r}}),fm=m(function(e,r){var n=r;switch(n.$){case 0:return Y;case 5:var t=n.a,o=n.b,l=a(gf,t,e);return a(ha,l,o);case 1:return a(ha,e,n);case 3:return a(ha,e,n);case 2:return a(ha,e,n);default:return a(ha,e,n)}}),mm=m(function(e,r){return a(fm,b7(e),r)}),po=function(e){return{$:2,a:e}},_7=m(function(e,r){var n=e.a,t=e.b,o=e.c,l=r.gM;return{gM:{ja:n*l.ja,je:t*l.je,ew:o*l.ew},hm:n*r.hm,hn:t*r.hn,ho:o*r.ho}}),w7=E1,x7=B1,Pu=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(s){var d=e.a,g=e.b,_=e.c,p=x7(t),x=p.ja,w=p.je,C=p.ew,z=p.f7,y=w7({f7:z,ja:x*d,je:w*g,ew:C*_});return Tt(r,n,y,o,l,u,$,f,s)}}}}}}}}}},A0=m(function(e,r){switch(r.$){case 0:return Xf;case 5:var n=r.a,t=r.b;return a(ha,n,a(A0,e,t));case 1:var o=r.a,l=r.b;return a(er,a(_7,e,o),a(Pu,e,l));case 3:return r;case 2:var l=r.a;return po(a(Pu,e,l));default:var u=r.a;return Mf(a(re,A0(e),u))}}),rl=m(function(e,r){var n=r;return a(A0,e,n)}),nl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},sm=7683,dm=7682,y7=i(Wc,{dN:0,d8:0,et:15},{bS:ur,cb:Na,cl:ur,cm:sm},{bS:ur,cb:Na,cl:ur,cm:dm}),S7=i(Wc,{dN:0,d8:0,et:15},{bS:ur,cb:Na,cl:ur,cm:dm},{bS:ur,cb:Na,cl:ur,cm:sm}),al=m(function(e,r){return e?a(M,S7,r):a(M,y7,r)}),C7={src:`
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
    `,attributes:{normal:"u",position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"c3",viewMatrix:"h"}},z7=function(e){if(e.$){var r=e.c;return q(Te(function(n,t,o,l,u,$,f,s){return A(Re,a(al,l,s),C7,nl,r,{d:o,e:t,f:$,g:n,c3:f,h:u})}))}else return U},Ni=function(e){var r=z7(e);if(r.$)return Y;var n=r.a;return po(n)},P7=ne(function(e,r,n,t){var o=a(el,n,Yf),l=function(){var d=P(e,r);return d.a?d.b?Gt(v([o,Ni(Cu)])):o:d.b?Ni(Cu):Y}(),u=uo(t),$=u.a,f=u.b,s=u.c;return a(mm,lo(t),a(rl,R($,f,s),l))}),M7=m(function(e,r){return j(P7,!0,!0,e,r)}),pm=m(function(e,r){return{$:0,a:e,b:r}}),j7=function(e){var r=pc(e),n=r.ig,t=r.hj,o=r.gy;return i(Nt,n,t,o)},L7=function(e){return a(pm,0,P0(j7(e)))},st=function(e){var r=e;return _n(r)},k7=m(function(e,r){var n=e.cY,t=e.u;return a(M,{u:mo(t),cY:hr(n)},r)}),T7=Gi(function(e,r,n,t,o,l,u){e:for(;;)if(u.b){var $=u.a,f=u.b,s=Za($.cY),d=Ja($.cY),g=Ya($.cY),_=a(Pa,e,g),p=a(or,r,g),x=a(Pa,n,d),w=a(or,t,d),C=a(Pa,o,s),z=a(or,l,s),y=f;e=_,r=p,n=x,t=w,o=C,l=z,u=y;continue e}else return Wf({fo:r,fp:t,fq:l,fr:e,fs:n,ft:o})}),gm=m(function(e,r){var n=Za(e.cY),t=Ja(e.cY),o=Ya(e.cY);return E0(T7,o,o,t,t,n,n,r)}),D7=function(e){var r=i(v$,k7,k,Jc(e));if(r.b){var n=r.a,t=r.b,o=a(Ot,r,Yc(e)),l=a(gm,n,t);return j(Rf,l,e,o,0)}else return qc},Mu=m(function(e,r){var n=e,t=r,o=n.ev,l=o,u=n.eu,$=u;return{ja:t.ja*$.ja+t.je*l.ja,je:t.ja*$.je+t.je*l.je,ew:t.ja*$.ew+t.je*l.ew}}),Wi=function(e){var r=e;return An(r)},I0=function(e){return Ra(2*ia*e)},A7=Tr,ju=A7({dW:Wr,eu:Tf,ev:Df}),hm=function(){var e=72,r=a(of,e,I0(1)),n=nn(1),t=za(lf),o=za(cf),l=nn(1),u=a(Me,.5,l),$=i(tr,kr,kr,u),f=a(Me,-.5,l),s=i(tr,kr,kr,f),d=function(p){var x=a(Me,p,r),w=za(a(Mu,ju,z0(x))),C=a(Me,st(x),n),z=a(Me,Wi(x),n),y=i(tr,C,z,u),T=i(tr,C,z,f),O=a(Ea,e,p+1),K=a(Me,O,r),te=za(a(Mu,ju,z0(K))),ie=a(Me,st(K),n),oe=a(Me,Wi(K),n),ae=i(tr,ie,oe,f),Z=i(tr,ie,oe,u);return v([R({u:o,cY:s},{u:o,cY:ae},{u:o,cY:T}),R({u:w,cY:T},{u:te,cY:ae},{u:te,cY:Z}),R({u:w,cY:T},{u:te,cY:Z},{u:w,cY:y}),R({u:t,cY:$},{u:t,cY:y},{u:t,cY:Z})])},g=a(re,d,a(pn,0,e-1)),_=T0(_r(g));return Uc(D7(_))}(),Lu=Zf(hm),I7=function(e){var r=zc(e),n=Cc(r),t=n.a,o=n.b;return on({dW:Pc(e),eu:t,ev:o,ex:r})},F7=ne(function(e,r,n,t){var o=I7(Ec(t)),l=a(el,n,hm),u=function(){var g=P(e,r);return g.a?g.b?Gt(v([l,Ni(Lu)])):l:g.b?Ni(Lu):Y}(),$=sf(t),f=$,s=mf(t),d=s;return a(mm,o,a(rl,R(f,f,d),u))}),B7=m(function(e,r){return j(F7,!0,!0,e,r)}),ku={src:`
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
    `,attributes:{triangleVertex:"ej"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"ch",viewMatrix:"h"}},Tu={src:`
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
    `,attributes:{triangleVertex:"ej"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"ch",viewMatrix:"h"}},lt=function(e){var r=Lt(e),n=r.a,t=r.b,o=r.c,l=Aa(n),u=Aa(t),$=Aa(o);return Kr({e7:l.ja,e8:u.ja,e9:$.ja,fa:0,fb:l.je,fc:u.je,fd:$.je,fe:0,ff:l.ew,fg:u.ew,fh:$.ew,fi:0,fj:0,fk:0,fl:0,fm:0})},li=qf(v([R({ej:0},{ej:1},{ej:2})])),E7=m(function(e,r){var n=Hf(r),t=me(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.I,Y;var o=e.b.a;return a(er,t,Te(function(y,T,O,K,te,ie,oe,ae){return A(Re,i(br,K,0,ae),ku,Xc,li,{a$:o,d:O,e:T,f:ie,g:y,ch:lt(r),h:te})}));case 1:if(e.b.$)return e.a,Y;var l=e.b.a,u=e.c;return a(er,t,Te(function(y,T,O,K,te,ie,oe,ae){return A(Re,i(br,K,0,ae),ku,Qc,li,{bm:a(so,Ut(u),l),d:O,e:T,f:ie,g:y,ch:lt(r),h:te})}));case 2:e.a;var $=e.b,p=e.c,f=a(um,$,p);if(f.$)return Y;var s=f.a;return a(er,t,Te(function(y,T,O,K,te,ie,oe,ae){var Z=oe.a,ge=oe.b;return A(Re,i(br,K,0,ae),Tu,am,li,{Z:ge,b_:Z.b_,cM:Z.cM,cN:Z.cN,cO:Z.cO,dO:s,d:O,e:T,f:ie,g:y,ch:lt(r),h:te})}));default:e.a;var d=e.b,g=e.c,_=e.d,p=e.e,x=j($m,d,g,_,p);if(x.$)return Y;var w=x.a,C=x.b,z=x.c;return a(er,t,Te(function(y,T,O,K,te,ie,oe,ae){var Z=oe.a,ge=oe.b;return A(Re,i(br,K,0,ae),Tu,lm,li,{dm:w,Z:ge,b_:Z.b_,cM:Z.cM,cN:Z.cN,cO:Z.cO,dR:z,d:O,e:T,f:ie,eb:C,g:y,ch:lt(r),h:te})}))}}),V7=function(){var e=v([{bE:a(Sr,0,1)},{bE:a(Sr,1,1)},{bE:a(Sr,2,1)},{bE:a(Sr,0,-1)},{bE:a(Sr,1,-1)},{bE:a(Sr,2,-1)}]),r=v([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return a(Ot,e,r)}(),R7={src:`
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
    `,attributes:{triangleShadowVertex:"bE"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"c3",triangleVertexPositions:"ch",viewMatrix:"h"}},Du=function(e){return po(Te(function(r,n,t,o,l,u,$,f){return A(Re,a(al,o,f),R7,nl,V7,{d:t,e:n,f:u,g:r,c3:$,ch:lt(e),h:l})}))},N7=ne(function(e,r,n,t){var o=a(E7,n,t),l=P(e,r);return l.a?l.b?Gt(v([o,Du(t)])):o:l.b?Du(t):Y}),W7=m(function(e,r){return j(N7,!0,!0,e,r)}),H7=m(function(e,r){var n=ka(r),t=ka(e),o=La(r),l=La(e),u=ja(r),$=ja(e);return{fo:a(Ye,$,u),fp:a(Ye,l,o),fq:a(Ye,t,n),fr:a(Xe,$,u),fs:a(Xe,l,o),ft:a(Xe,t,n)}}),G7=function(e){var r=Dc(e),n=r.a,t=r.b;return a(H7,n,t)},Au={src:`
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
    `,attributes:{lineSegmentVertex:"e5"},uniforms:{lineSegmentEndPoint:"e3",lineSegmentStartPoint:"e4",modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},O7=m(function(e,r){return{$:1,a:e,b:r}}),U7=O7({eJ:2,eW:0,fv:1}),Iu=U7(v([P({e5:0},{e5:1})])),q7=m(function(e,r){var n=G7(r),t=me(n),o=Dc(r),l=o.a,u=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.I,Y;var $=e.b.a;return a(er,t,Te(function(s,d,g,_,p,x,w,C){return A(Re,C,Au,Xc,Iu,{a$:$,e3:hr(u),e4:hr(l),d:g,e:d,f:x,g:s,h:p})}));case 1:if(e.b.$)return Y;var $=e.b.a,f=e.c;return a(er,t,Te(function(d,g,_,p,x,w,C,z){return A(Re,z,Au,Qc,Iu,{bm:a(so,Ut(f),$),e3:hr(u),e4:hr(l),d:_,e:g,f:w,g:d,h:x})}));case 2:return Y;default:return Y}}),Y7=m(function(e,r){return a(q7,e,r)}),Fu=m(function(e,r){var n=e,t=r;return n/t}),J7=Qe(function(e,r,n,t,o){e:for(;;){var l=t(r/n),u=a(M,l,o);if(xe(r,e))return u;var $=e,f=r-1,s=n,d=t,g=u;e=$,r=f,n=s,t=d,o=g;continue e}}),Bu=m(function(e,r){return e<1?k:A(J7,0,e,e,r,k)}),Z7=m(function(e,r){var n=e.cY,t=e.u,o=e.T,l=o,u=l.a,$=l.b;return a(M,{u:mo(t),cY:hr(n),T:a(Sr,u,$)},r)}),X7=function(e){var r=i(v$,Z7,k,Jc(e));if(r.b){var n=r.a,t=r.b,o=a(Ot,r,Yc(e)),l=a(gm,n,t);return j(Nf,l,e,o,0)}else return qc},bm=m(function(e,r){var n=e,t=r,o=_n(t);return{ja:o*_n(n),je:o*An(n),ew:An(t)}}),Q7=function(){var e=nn(1),r=72,n=a(pn,0,r-1),t=a(Bu,r,a(kt,kr,I0(1))),o=pt(r/2),l=a(pn,0,o-1),u=a(Bu,o,a(kt,Ca(90),Ca(-90))),$=Zc(_r(a(re,function(d){return a(re,function(g){return{u:za(a(bm,d,g)),cY:i(tr,a(Me,st(g)*st(d),e),a(Me,st(g)*Wi(d),e),a(Me,Wi(g),e)),T:P(a(Fu,d,I0(1)),a(Fu,a(ft,Ca(90),g),Ca(180)))}},u)},t))),f=m(function(d,g){return d*(o+1)+g}),s=_r(a(re,function(d){return _r(a(re,function(g){var _=a(f,d+1,g),p=a(f,d,g),x=a(f,d+1,g+1),w=a(f,d,g+1);return v([R(w,x,_),R(w,_,p)])},l))},n));return Uc(X7(a(Jf,$,s)))}(),Hi=72,ui=2*Hi,K7=m(function(e,r){e:for(;;){var n=ui+1,t=a(Ea,ui,2*e+3),o=a(Ea,ui,2*e+2),l=2*e+1,u=2*e,$=ui,f=a(M,R($,u,o),a(M,R(u,t,o),a(M,R(u,l,t),a(M,R(l,n,t),r))));if(e){var s=e-1,d=f;e=s,r=d;continue e}else return f}}),e8=L(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),r8=m(function(e,r){e:for(;;){var n=i(e8,0,2*ia,e/Hi),t={co:n,cT:0,c$:1},o={co:n,cT:1,c$:1},l=a(M,t,a(M,o,r));if(e){var u=e-1,$=l;e=u,r=$;continue e}else return l}}),n8=function(){var e=a(r8,Hi-1,v([{co:0,cT:0,c$:0},{co:0,cT:1,c$:0}])),r=a(K7,Hi-1,k);return a(Ot,e,r)}(),a8={src:`
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
    `,attributes:{angle:"co",offsetScale:"cT",radiusScale:"c$"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"c3",viewMatrix:"h"}},Eu=function(e){return po(Te(function(r,n,t,o,l,u,$,f){return A(Re,a(al,!0,f),a8,nl,n8,{a$:i(Nt,0,0,1),d:t,e:n,f:u,g:r,c3:$,h:l})}))},t8=function(e){var r=Of(e);return{eY:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,P:r.ja,Q:r.je,R:r.ew,c1:1}},i8=m(function(e,r){return a(fm,t8(e),r)}),o8=ne(function(e,r,n,t){var o=a(el,n,Q7),l=function(){var f=P(e,r);return f.a?f.b?Gt(v([o,Eu()])):o:f.b?Eu():Y}(),u=vo(t),$=u;return a(i8,a(Vi,Wr,$o(t)),a(rl,R($,$,$),l))}),c8=m(function(e,r){return j(o8,!0,!0,e,r)}),l8=L(function(e,r,n){return{$:1,a:e,b:r,c:n}}),u8=Qe(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),$8=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(pm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return i(l8,n,t,r);case 2:var n=e.a,t=e.b,u=e.c;return i(vf,n,t,u);default:var n=e.a,t=e.b,o=e.c,l=e.d,u=e.e;return A(u8,n,t,o,l,u)}},v8=$8,_m=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return v([a(M7,o,r)]);case 1:var o=e.a,n=e.b;return v([a(W7,o,n)]);case 3:var o=e.a,t=e.b;return v([a(c8,v8(o),t)]);case 2:var o=e.a,l=e.b;return v([a(B7,o,l)]);case 4:var u=e.a,$=e.b;return v([a(Y7,L7(u),$)]);default:var f=e.a;return a(Ga,_m,f)}},f8=function(e){return a(Ga,_m,e)},m8=m(function(e,r){return y9({bh:R6(e.gs),gI:e.gI,bj:N6(.5),du:e.du,bk:P(su(Ne(e.c2.i8)),su(Ne(e.c2.hq))),bo:f8(r),iu:!0,iK:a(bm,Ra(e.iJ),Ra(e.iL)),f0:io})}),s8=m(function(e,r){return a(m8,{gs:a($f,Mt(r.m).gt,Mt(r.m).b2),gI:tf(e),du:e.du,c2:e.c2,iJ:Xr(225),iL:Xr(315)},v([M0(v([M0(k),a(V6,e,r)]))]))}),d8={$:2},ba=vr("button"),p8=a(ba,v([a(we,"margin","10px"),$n(d8)]),v([qe("Set selected color as background color")])),wi=vr("h2"),Yo=vr("hr"),g8={$:5},h8={$:7},b8={$:4},_8={$:3},w8={$:6},x8=function(e){var r=e;return r.p},y8=function(e){return Gr(x8(e))+1},S8=function(e){var r=e;return 1+Gr(r.p)+Gr(r.H)},C8=vr("span"),z8=function(e){return a(Ge,k,v([a(wi,k,v([qe("LevelOld Selection")])),a(av,k,v([a(ba,v([$n(_8)]),v([qe("<")])),a(C8,v([a(we,"margin","10px")]),v([qe(na(v([D(y8(e.m))," / ",D(S8(e.m))])))])),a(ba,v([$n(b8)]),v([qe(">")]))])),a(Ge,v([a(we,"margin-top","10px")]),v([a(ba,v([$n(g8)]),v([qe("Add level")]))])),a(Ge,v([a(we,"margin-top","10px")]),v([a(ba,v([$n(w8)]),v([qe("Remove current level")]))])),a(Ge,v([a(we,"margin-top","10px")]),v([a(ba,v([$n(h8)]),v([qe("Move level one up")]))]))]))},P8=function(e){return{$:0,a:e}},M8=a(Be,function(e){return e.m},a(Be,Mt,function(e){return e.b2})),j8=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},L8=function(e){return a(Iv,"change",a(ht,e,Gv))},k8=vr("option"),F0=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},T8=function(e){return a(k8,v([to(F0(e))]),v([qe(F0(e))]))},D8=vr("select"),A8=function(e){return a(Ge,v([a(we,"margin","5px")]),v([qe("Choose a palette:"),a(D8,v([L8(a(Be,j8,P8)),to(F0(M8(e)))]),a(re,T8,v([2,0,1,3,4])))]))},I8=function(e){return{$:1,a:e}},F8=m(function(e,r){var n=r.a,t=r.b,o=m(function(l,u){return a(e,l+1,u)});return a(Ua,a(e,0,n),a(ec,o,t))}),B8=function(e){var r=e.a,n=e.b;return a(M,r,n)},E8=function(e){var r=Mt(e.m),n=20,t=0,o=13,l=2,u=m(function($,f){var s=($/n|0)*(o+t),d=a(Ea,n,$)*(o+t),g=xe(e.aR,$)?P(l,o-2*l):P(0,o),_=g.a,p=g.b;return a(Ge,v([a(we,"position","absolute"),a(we,"width",ue(p)+"px"),a(we,"height",ue(p)+"px"),a(we,"background-color",pf(f)),a(we,"transform","translate("+(ue(d)+("px,"+(ue(s)+"px)")))),$n(I8($)),a(we,"border","solid white "+(ue(_)+"px"))]),k)});return a(Ge,v([a(we,"position","relative"),a(we,"overflow","scroll"),a(we,"height","210px")]),B8(a(F8,u,uf(r.b2))))},V8=m(function(e,r){return vn(a(Ge,v([a(we,"position","absolute"),a(we,"height","100%"),a(we,"width","260px"),a(we,"right","0px"),a(we,"margin","40px"),a(we,"font-size","12px"),a(we,"overflow","scroll")]),v([a(wi,k,v([qe("Editing the selected level")])),a(Ge,k,v([qe("Press mouse to add trixel")])),a(Ge,k,v([qe("Hold shift and press mouse to remove trixel")])),a(Yo,k,k),a(wi,k,v([qe("Color Palette")])),a(Ge,k,v([A8(r)])),a(Ge,k,v([p8])),a(Ge,k,v([qe(D(r.aR))])),a(Ge,k,v([E8(r)])),a(Yo,k,k),z8(r),a(Yo,k,k),a(wi,k,v([qe("What More?")]))])))}),R8=pr(D5,s8,Wg,N5,B5,V8,Zg);const N8={Main:{init:R8(a(ee,function(e){return sr({hI:e})},a(Q,"inputs",a(ee,function(e){return a(ee,function(r){return a(ee,function(n){return a(ee,function(t){return a(ee,function(o){return a(ee,function(l){return a(ee,function(u){return sr({eF:u,du:l,g8:o,e_:t,cX:n,c2:r,i7:e})},a(Q,"clock",Ze))},a(Q,"devicePixelRatio",Ze))},a(Q,"dt",Ze))},a(Q,"keyboard",a(ee,function(t){return a(ee,function(o){return a(ee,function(l){return a(ee,function(u){return a(ee,function($){return a(ee,function(f){return a(ee,function(s){return a(ee,function(d){return a(ee,function(g){return sr({gn:g,gW:d,eI:s,g7:f,hQ:$,id:u,ij:l,fR:o,f$:t})},a(Q,"alt",ke))},a(Q,"control",ke))},a(Q,"down",ke))},a(Q,"downs",Li(Fa)))},a(Q,"left",ke))},a(Q,"pressedKeys",Li(Fa)))},a(Q,"right",ke))},a(Q,"shift",ke))},a(Q,"up",ke))))},a(Q,"pointer",a(ee,function(n){return a(ee,function(t){return a(ee,function(o){return a(ee,function(l){return a(ee,function(u){return a(ee,function($){return a(ee,function(f){return a(ee,function(s){return sr({eI:s,dB:f,hY:$,ik:u,il:l,f$:o,ja:t,je:n})},a(Q,"down",ke))},a(Q,"isDown",ke))},a(Q,"move",ke))},a(Q,"rightDown",ke))},a(Q,"rightUp",ke))},a(Q,"up",ke))},a(Q,"x",Ze))},a(Q,"y",Ze))))},a(Q,"screen",a(ee,function(r){return a(ee,function(n){return sr({hq:n,i8:r})},a(Q,"height",Ze))},a(Q,"width",Ze))))},a(Q,"wheel",a(ee,function(e){return a(ee,function(r){return sr({g$:r,g0:e})},a(Q,"deltaX",Ze))},a(Q,"deltaY",Ze)))))))(0)}},ce={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},W8=e=>{const r=p=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(p.code),n=p=>["AltLeft","AltRight"].includes(p.code),t=p=>["ShiftLeft","ShiftRight"].includes(p.code),o=p=>p.code=="ArrowLeft",l=p=>p.code=="ArrowRight",u=p=>p.code=="ArrowUp",$=p=>p.code=="ArrowDown",f=p=>p.button==0,s=p=>p.button==2;function d(p){p.keyboard.pressedKeys=[],p.keyboard.control=!1,p.keyboard.alt=!1,p.keyboard.shift=!1,p.keyboard.left=!1,p.keyboard.right=!1,p.keyboard.up=!1,p.keyboard.down=!1,p.pointer.isDown=!1}function g(p){p.keyboard.downs=[],p.pointer.down=!1,p.pointer.move=!1,p.pointer.up=!1,p.pointer.rightDown=!1,p.pointer.rightUp=!1,p.wheel.deltaX=0,p.wheel.deltaY=0}window.addEventListener("keydown",p=>{p.repeat||(ce.keyboard.downs.push(p.code),ce.keyboard.pressedKeys.push(p.code),r(p)&&(ce.keyboard.control=!0),n(p)&&(ce.keyboard.alt=!0),t(p)&&(console.log("yo"),ce.keyboard.shift=!0),o(p)&&(ce.keyboard.left=!0),l(p)&&(ce.keyboard.right=!0),u(p)&&(ce.keyboard.up=!0),$(p)&&(console.log("yey"),ce.keyboard.down=!0))}),window.addEventListener("keyup",p=>{ce.keyboard.pressedKeys=ce.keyboard.pressedKeys.filter(x=>x!=p.code),r(p)&&(ce.keyboard.control=!1,ce.keyboard.pressedKeys=[]),n(p)&&(ce.keyboard.alt=!1),t(p)&&(ce.keyboard.shift=!1),o(p)&&(ce.keyboard.left=!1),l(p)&&(ce.keyboard.right=!1),u(p)&&(ce.keyboard.up=!1),$(p)&&(ce.keyboard.down=!1)}),window.addEventListener("pointerdown",p=>{ce.pointer.x=-.5*ce.screen.width+p.pageX,ce.pointer.y=.5*ce.screen.height-p.pageY,f(p)&&(ce.pointer.down=!0,ce.pointer.isDown=!0),s(p)&&(ce.pointer.rightDown=!0)}),window.addEventListener("pointermove",p=>{ce.pointer.move=!0,ce.pointer.x=-.5*ce.screen.width+p.pageX,ce.pointer.y=.5*ce.screen.height-p.pageY}),window.addEventListener("pointerup",p=>{f(p)&&(ce.pointer.up=!0,ce.pointer.isDown=!1),s(p)&&(ce.pointer.rightUp=!0)}),window.addEventListener("pointercancel",p=>{f(p)&&(ce.pointer.up=!0,ce.pointer.isDown=!1),s(p)&&(ce.pointer.rightUp=!0)}),window.addEventListener("wheel",p=>{ce.wheel.deltaX=p.deltaX,ce.wheel.deltaY=p.deltaY}),window.addEventListener("blur",p=>{d(ce)}),window.addEventListener("focus",p=>{d(ce)}),window.addEventListener("visibilitychange",p=>{d(ce)}),window.addEventListener("resize",()=>{ce.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(_);function _(p){const x=p/1e3,w=x-ce.clock;w<.009||(ce.dt=w,ce.clock=x,e.ports.tick.send(ce),g(ce)),window.requestAnimationFrame(_)}},H8=N8.Main.init({node:document.querySelector("#app div"),flags:{inputs:ce}});W8(H8);
