const Pm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};Pm();function xn(e,r,n){return n.a=e,n.f=r,n}function m(e){return xn(2,e,function(r){return function(n){return e(r,n)}})}function k(e){return xn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function q(e){return xn(4,e,function(r){return function(n){return function(t){return function(o){return e(r,n,t,o)}}}})}function He(e){return xn(5,e,function(r){return function(n){return function(t){return function(o){return function(l){return e(r,n,t,o,l)}}}}})}function yr(e){return xn(6,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return e(r,n,t,o,l,u)}}}}}})}function ei(e){return xn(7,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return e(r,n,t,o,l,u,$)}}}}}}})}function ye(e){return xn(8,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return e(r,n,t,o,l,u,$,f)}}}}}}}})}function jo(e){return xn(9,e,function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(d){return e(r,n,t,o,l,u,$,f,d)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function i(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,o){return e.a===4?e.f(r,n,t,o):e(r)(n)(t)(o)}function A(e,r,n,t,o,l){return e.a===5?e.f(r,n,t,o,l):e(r)(n)(t)(o)(l)}function cr(e,r,n,t,o,l,u){return e.a===6?e.f(r,n,t,o,l,u):e(r)(n)(t)(o)(l)(u)}function Lo(e,r,n,t,o,l,u,$){return e.a===7?e.f(r,n,t,o,l,u,$):e(r)(n)(t)(o)(l)(u)($)}function at(e,r,n,t,o,l,u,$,f){return e.a===8?e.f(r,n,t,o,l,u,$,f):e(r)(n)(t)(o)(l)(u)($)(f)}function Mm(e,r,n,t,o,l,u,$,f,d){return e.a===9?e.f(r,n,t,o,l,u,$,f,d):e(r)(n)(t)(o)(l)(u)($)(f)(d)}var jm=[];function Lm(e){return e.length}var km=k(function(e,r,n){for(var t=new Array(e),o=0;o<e;o++)t[o]=n(r+o);return t}),Tm=m(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,M(n,r)}),Dm=m(function(e,r){return r[e]});k(function(e,r,n){for(var t=n.length,o=new Array(t),l=0;l<t;l++)o[l]=n[l];return o[e]=r,o});m(function(e,r){for(var n=r.length,t=new Array(n+1),o=0;o<n;o++)t[o]=r[o];return t[n]=e,t});k(function(e,r,n){for(var t=n.length,o=0;o<t;o++)r=a(e,n[o],r);return r});var Am=k(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});m(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=e(r[o]);return t});k(function(e,r,n){for(var t=n.length,o=new Array(t),l=0;l<t;l++)o[l]=a(e,r+l,n[l]);return o});k(function(e,r,n){return n.slice(e,r)});k(function(e,r,n){var t=r.length,o=e-t;o>n.length&&(o=n.length);for(var l=t+o,u=new Array(l),$=0;$<t;$++)u[$]=r[$];for(var $=0;$<o;$++)u[$+t]=n[$];return u});m(function(e,r){return r});m(function(e,r){return console.log(e+": "+Im()),r});function Im(e){return"<internals>"}function sa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ue(e,r){for(var n,t=[],o=ko(e,r,0,t);o&&(n=t.pop());o=ko(n.a,n.b,0,t));return o}function ko(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&sa(5),!1;if(n>100)return t.push(M(e,r)),!0;e.$<0&&(e=ql(e),r=ql(r));for(var o in e)if(!ko(e[o],r[o],n+1,t))return!1;return!0}m(ue);m(function(e,r){return!ue(e,r)});function fe(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=fe(e.a,r.a))||(n=fe(e.b,r.b))?n:fe(e.c,r.c);for(;e.b&&r.b&&!(n=fe(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}m(function(e,r){return fe(e,r)<0});m(function(e,r){return fe(e,r)<1});m(function(e,r){return fe(e,r)>0});m(function(e,r){return fe(e,r)>=0});var Fm=m(function(e,r){var n=fe(e,r);return n<0?Jl:n?Ms:Yl}),tt=0;function M(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Hr(e){return e}function ie(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}m(H);function H(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Gr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Gr(e.a,r);return n}var T={$:0};function Gr(e,r){return{$:1,a:e,b:r}}var Bm=m(Gr);function v(e){for(var r=T,n=e.length;n--;)r=Gr(e[n],r);return r}function ri(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Em=k(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return v(t)});q(function(e,r,n,t){for(var o=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)o.push(i(e,r.a,n.a,t.a));return v(o)});He(function(e,r,n,t,o){for(var l=[];r.b&&n.b&&t.b&&o.b;r=r.b,n=n.b,t=t.b,o=o.b)l.push(L(e,r.a,n.a,t.a,o.a));return v(l)});yr(function(e,r,n,t,o,l){for(var u=[];r.b&&n.b&&t.b&&o.b&&l.b;r=r.b,n=n.b,t=t.b,o=o.b,l=l.b)u.push(A(e,r.a,n.a,t.a,o.a,l.a));return v(u)});m(function(e,r){return v(ri(r).sort(function(n,t){return fe(e(n),e(t))}))});m(function(e,r){return v(ri(r).sort(function(n,t){var o=a(e,n,t);return o===Yl?0:o===Jl?-1:1}))});m(function(e,r){return e+r});m(function(e,r){return e-r});m(function(e,r){return e*r});m(function(e,r){return e/r});m(function(e,r){return e/r|0});var Vm=m(Math.pow);m(function(e,r){return r%e});var Rm=m(function(e,r){var n=r%e;return e===0?sa(11):n>0&&e<0||n<0&&e>0?n+e:n}),Nm=Math.PI,Wm=Math.cos,Hm=Math.sin,Gm=Math.tan;m(Math.atan2);function Om(e){return e}function Um(e){return e===1/0||e===-1/0}var qm=Math.ceil,Ym=Math.floor,Jm=Math.round,Zm=Math.sqrt,cl=Math.log,Xm=isNaN;function Qm(e){return!e}m(function(e,r){return e&&r});m(function(e,r){return e||r});m(function(e,r){return e!==r});var Km=m(function(e,r){return e+r});function e3(e){var r=e.charCodeAt(0);return isNaN(r)?E:V(55296<=r&&r<=56319?M(Hr(e[0]+e[1]),e.slice(2)):M(Hr(e[0]),e.slice(1)))}m(function(e,r){return e+r});function r3(e){return e.length}m(function(e,r){for(var n=r.length,t=new Array(n),o=0;o<n;){var l=r.charCodeAt(o);if(55296<=l&&l<=56319){t[o]=e(Hr(r[o]+r[o+1])),o+=2;continue}t[o]=e(Hr(r[o])),o++}return t.join("")});m(function(e,r){for(var n=[],t=r.length,o=0;o<t;){var l=r[o],u=r.charCodeAt(o);o++,55296<=u&&u<=56319&&(l+=r[o],o++),e(Hr(l))&&n.push(l)}return n.join("")});function n3(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var o=e.charCodeAt(t);55296<=o&&o<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}k(function(e,r,n){for(var t=n.length,o=0;o<t;){var l=n[o],u=n.charCodeAt(o);o++,55296<=u&&u<=56319&&(l+=n[o],o++),r=a(e,Hr(l),r)}return r});var a3=k(function(e,r,n){for(var t=n.length;t--;){var o=n[t],l=n.charCodeAt(t);56320<=l&&l<=57343&&(t--,o=n[t]+o),r=a(e,Hr(o),r)}return r}),t3=m(function(e,r){return r.split(e)}),i3=m(function(e,r){return r.join(e)}),o3=k(function(e,r,n){return n.slice(e,r)});function c3(e){return v(e.trim().split(/\s+/g))}function l3(e){return e.toLowerCase()}m(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),e(Hr(t)))return!0}return!1});var u3=m(function(e,r){for(var n=r.length;n--;){var t=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,t=r[n]+t),!e(Hr(t)))return!1}return!0}),$3=m(function(e,r){return r.indexOf(e)>-1}),v3=m(function(e,r){return r.indexOf(e)===0});m(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var f3=m(function(e,r){var n=e.length;if(n<1)return T;for(var t=0,o=[];(t=r.indexOf(e,t))>-1;)o.push(t),t=t+n;return v(o)});function ll(e){return e+""}function m3(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,o=t;o<e.length;++o){var l=e.charCodeAt(o);if(l<48||57<l)return E;r=10*r+l-48}return o==t?E:V(n==45?-r:r)}function s3(e){if(e.length===0||/[\sxbo]/.test(e))return E;var r=+e;return r===r?V(r):E}function d3(e){return ri(e).join("")}function p3(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function g3(e){return Hr(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function h3(e){return{$:0,a:e}}function b3(e){return{$:1,a:e}}function To(e){return{$:2,b:e}}var _3=To(function(e){return typeof e=="boolean"?Re(e):Or("a BOOL",e)}),w3=To(function(e){return typeof e=="number"?Re(e):Or("a FLOAT",e)}),x3=To(function(e){return typeof e=="string"?Re(e):e instanceof String?Re(e+""):Or("a STRING",e)});function y3(e){return{$:3,b:e}}var S3=m(function(e,r){return{$:6,d:e,b:r}});m(function(e,r){return{$:7,e,b:r}});function yn(e,r){return{$:9,f:e,g:r}}var C3=m(function(e,r){return{$:10,b:r,h:e}}),z3=m(function(e,r){return yn(e,[r])}),P3=k(function(e,r,n){return yn(e,[r,n])});q(function(e,r,n,t){return yn(e,[r,n,t])});He(function(e,r,n,t,o){return yn(e,[r,n,t,o])});yr(function(e,r,n,t,o,l){return yn(e,[r,n,t,o,l])});ei(function(e,r,n,t,o,l,u){return yn(e,[r,n,t,o,l,u])});ye(function(e,r,n,t,o,l,u,$){return yn(e,[r,n,t,o,l,u,$])});jo(function(e,r,n,t,o,l,u,$,f){return yn(e,[r,n,t,o,l,u,$,f])});m(function(e,r){try{var n=JSON.parse(r);return Sr(e,n)}catch(t){return ar(a(Xo,"This is not valid JSON! "+t.message,cn(r)))}});var ul=m(function(e,r){return Sr(e,pa(r))});function Sr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Re(e.c):Or("null",r);case 3:return ni(r)?$l(e.b,r,v):Or("a LIST",r);case 4:return ni(r)?$l(e.b,r,M3):Or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Or("an OBJECT with a field named `"+n+"`",r);var t=Sr(e.b,r[n]);return Er(t)?t:ar(a(Zl,n,t.a));case 7:var o=e.e;if(!ni(r))return Or("an ARRAY",r);if(o>=r.length)return Or("a LONGER array. Need index "+o+" but only see "+r.length+" entries",r);var t=Sr(e.b,r[o]);return Er(t)?t:ar(a(Xl,o,t.a));case 8:if(typeof r!="object"||r===null||ni(r))return Or("an OBJECT",r);var l=T;for(var u in r)if(r.hasOwnProperty(u)){var t=Sr(e.b,r[u]);if(!Er(t))return ar(a(Zl,u,t.a));l=Gr(M(u,t.a),l)}return Re(tr(l));case 9:for(var $=e.f,f=e.g,d=0;d<f.length;d++){var t=Sr(f[d],r);if(!Er(t))return t;$=$(t.a)}return Re($);case 10:var t=Sr(e.b,r);return Er(t)?Sr(e.h(t.a),r):t;case 11:for(var p=T,g=e.g;g.b;g=g.b){var t=Sr(g.a,r);if(Er(t))return t;p=Gr(t.a,p)}return ar(js(tr(p)));case 1:return ar(a(Xo,e.a,cn(r)));case 0:return Re(e.a)}}function $l(e,r,n){for(var t=r.length,o=new Array(t),l=0;l<t;l++){var u=Sr(e,r[l]);if(!Er(u))return ar(a(Xl,l,u.a));o[l]=u.a}return Re(n(o))}function ni(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function M3(e){return a(Gs,e.length,function(r){return e[r]})}function Or(e,r){return ar(a(Xo,"Expecting "+e,cn(r)))}function da(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return da(e.b,r.b);case 6:return e.d===r.d&&da(e.b,r.b);case 7:return e.e===r.e&&da(e.b,r.b);case 9:return e.f===r.f&&vl(e.g,r.g);case 10:return e.h===r.h&&da(e.b,r.b);case 11:return vl(e.g,r.g)}}function vl(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!da(e[t],r[t]))return!1;return!0}var j3=m(function(e,r){return JSON.stringify(pa(r),null,e)+""});function cn(e){return e}function pa(e){return e}function L3(){return[]}function k3(){return{}}var T3=k(function(e,r,n){return n[e]=pa(r),n});function D3(e){return m(function(r,n){return n.push(pa(e(r))),n})}function Un(e){return{$:0,a:e}}function A3(e){return{$:1,a:e}}function ln(e){return{$:2,b:e,c:null}}var Do=m(function(e,r){return{$:3,b:e,d:r}});m(function(e,r){return{$:4,b:e,d:r}});function I3(e){return{$:5,b:e}}var F3=0;function Ao(e){var r={$:0,e:F3++,f:e,g:null,h:[]};return Fo(r),r}function fl(e){return ln(function(r){r(Un(Ao(e)))})}function ml(e,r){e.h.push(r),Fo(e)}var B3=m(function(e,r){return ln(function(n){ml(e,r),n(Un(tt))})}),Io=!1,sl=[];function Fo(e){if(sl.push(e),!Io){for(Io=!0;e=sl.shift();)E3(e);Io=!1}}function E3(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Fo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}q(function(e,r,n,t){return Bo(r,t,e.hC,e.i4,e.iI,function(){return function(){}})});function Bo(e,r,n,t,o,l){var u=a(ul,e,cn(r?r.flags:void 0));Er(u)||sa(2);var $={},f=n(u.a),d=f.a,p=l(h,d),g=V3($,h);function h(s,w){var x=a(t,s,d);p(d=x.a,w),gl($,x.b,o(d))}return gl($,f.b,o(d)),g?{ports:g}:{}}var Ur={};function V3(e,r){var n;for(var t in Ur){var o=Ur[t];o.a&&(n=n||{},n[t]=o.a(t,r)),e[t]=N3(o,r)}return n}function R3(e,r,n,t,o){return{b:e,c:r,d:n,e:t,f:o}}function N3(e,r){var n={g:r,h:void 0},t=e.c,o=e.d,l=e.e,u=e.f;function $(f){return a(Do,$,I3(function(d){var p=d.a;return d.$===0?i(o,n,p,f):l&&u?L(t,n,p.i,p.j,f):i(t,n,l?p.i:p.j,f)}))}return n.h=Ao(a(Do,$,e.b))}var W3=m(function(e,r){return ln(function(n){e.g(r),n(Un(tt))})});m(function(e,r){return a(B3,e.h,{$:0,a:r})});function dl(e){return function(r){return{$:1,k:e,l:r}}}function H3(e){return{$:2,m:e}}m(function(e,r){return{$:3,n:e,o:r}});var pl=[],Eo=!1;function gl(e,r,n){if(pl.push({p:e,q:r,r:n}),!Eo){Eo=!0;for(var t;t=pl.shift();)G3(t.p,t.q,t.r);Eo=!1}}function G3(e,r,n){var t={};ai(!0,r,t,null),ai(!1,n,t,null);for(var o in e)ml(e[o],{$:"fx",a:t[o]||{i:T,j:T}})}function ai(e,r,n,t){switch(r.$){case 1:var o=r.k,l=O3(e,o,t,r.l);n[o]=U3(e,l,n[o]);return;case 2:for(var u=r.m;u.b;u=u.b)ai(e,u.a,n,t);return;case 3:ai(e,r.o,n,{s:r.n,t});return}}function O3(e,r,n,t){function o(u){for(var $=n;$;$=$.t)u=$.s(u);return u}var l=e?Ur[r].e:Ur[r].f;return a(l,o,t)}function U3(e,r,n){return n=n||{i:T,j:T},e?n.i=Gr(r,n.i):n.j=Gr(r,n.j),n}function q3(e){Ur[e]&&sa(3)}m(function(e,r){return r});function Y3(e,r){return q3(e),Ur[e]={f:J3,u:r,a:Z3},dl(e)}var J3=m(function(e,r){return function(n){return e(r(n))}});function Z3(e,r){var n=T,t=Ur[e].u,o=Un(null);Ur[e].b=o,Ur[e].c=k(function(u,$,f){return n=$,o});function l(u){var $=a(ul,t,cn(u));Er($)||sa(4,e,$.a);for(var f=$.a,d=n;d.b;d=d.b)r(d.a(f))}return{send:l}}var ti,un=typeof document!="undefined"?document:{};function Vo(e,r){e.appendChild(r)}q(function(e,r,n,t){var o=t.node;return o.parentNode.replaceChild(Cn(e,function(){}),o),{}});function Ro(e){return{$:0,a:e}}var hl=m(function(e,r){return m(function(n,t){for(var o=[],l=0;t.b;t=t.b){var u=t.a;l+=u.b||0,o.push(u)}return l+=o.length,{$:1,c:r,d:Wo(n),e:o,f:e,b:l}})}),rr=hl(void 0),X3=m(function(e,r){return m(function(n,t){for(var o=[],l=0;t.b;t=t.b){var u=t.a;l+=u.b.b||0,o.push(u)}return l+=o.length,{$:2,c:r,d:Wo(n),e:o,f:e,b:l}})}),Q3=X3(void 0);function K3(e,r,n,t){return{$:3,d:Wo(e),g:r,h:n,i:t}}var e1=m(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sn(e,r){return{$:5,l:e,m:r,k:void 0}}m(function(e,r){return Sn([e,r],function(){return e(r)})});k(function(e,r,n){return Sn([e,r,n],function(){return a(e,r,n)})});var r1=q(function(e,r,n,t){return Sn([e,r,n,t],function(){return i(e,r,n,t)})});He(function(e,r,n,t,o){return Sn([e,r,n,t,o],function(){return L(e,r,n,t,o)})});yr(function(e,r,n,t,o,l){return Sn([e,r,n,t,o,l],function(){return A(e,r,n,t,o,l)})});ei(function(e,r,n,t,o,l,u){return Sn([e,r,n,t,o,l,u],function(){return cr(e,r,n,t,o,l,u)})});ye(function(e,r,n,t,o,l,u,$){return Sn([e,r,n,t,o,l,u,$],function(){return Lo(e,r,n,t,o,l,u,$)})});jo(function(e,r,n,t,o,l,u,$,f){return Sn([e,r,n,t,o,l,u,$,f],function(){return at(e,r,n,t,o,l,u,$,f)})});var bl=m(function(e,r){return{$:"a0",n:e,o:r}}),n1=m(function(e,r){return{$:"a1",n:e,o:r}}),No=m(function(e,r){return{$:"a2",n:e,o:r}}),Ir=m(function(e,r){return{$:"a3",n:e,o:r}});k(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function _l(e){return e=="script"?"p":e}function a1(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function t1(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function i1(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function wl(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var o1=m(function(e,r){return r.$==="a0"?a(bl,r.n,c1(e,r.o)):r});function c1(e,r){var n=i0(r);return{$:r.$,a:n?i(Os,n<3?l1:u1,lr(e),r.a):a(mt,e,r.a)}}var l1=m(function(e,r){return M(e(r.a),r.b)}),u1=m(function(e,r){return{aM:e(r.aM),eg:r.eg,d4:r.d4}});function Wo(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,o=n.n,l=n.o;if(t==="a2"){o==="className"?xl(r,o,pa(l)):r[o]=pa(l);continue}var u=r[t]||(r[t]={});t==="a3"&&o==="class"?xl(u,o,l):u[o]=l}return r}function xl(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Cn(e,r){var n=e.$;if(n===5)return Cn(e.k||(e.k=e.m()),r);if(n===0)return un.createTextNode(e.a);if(n===4){for(var t=e.k,o=e.j;t.$===4;)typeof o!="object"?o=[o,t.j]:o.push(t.j),t=t.k;var l={j:o,p:r},u=Cn(t,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return Ho(u,r,e.d),u}var u=e.f?un.createElementNS(e.f,e.c):un.createElement(e.c);ti&&e.c=="a"&&u.addEventListener("click",ti(u)),Ho(u,r,e.d);for(var $=e.e,f=0;f<$.length;f++)Vo(u,Cn(n===1?$[f]:$[f].b,r));return u}function Ho(e,r,n){for(var t in n){var o=n[t];t==="a1"?$1(e,o):t==="a0"?m1(e,r,o):t==="a3"?v1(e,o):t==="a4"?f1(e,o):(t!=="value"&&t!=="checked"||e[t]!==o)&&(e[t]=o)}}function $1(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function v1(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function f1(e,r){for(var n in r){var t=r[n],o=t.f,l=t.o;typeof l!="undefined"?e.setAttributeNS(o,n,l):e.removeAttributeNS(o,n)}}function m1(e,r,n){var t=e.elmFs||(e.elmFs={});for(var o in n){var l=n[o],u=t[o];if(!l){e.removeEventListener(o,u),t[o]=void 0;continue}if(u){var $=u.q;if($.$===l.$){u.q=l;continue}e.removeEventListener(o,u)}u=s1(r,l),e.addEventListener(o,u,Go&&{passive:i0(l)<2}),t[o]=u}}var Go;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Go=!0}}))}catch{}function s1(e,r){function n(t){var o=n.q,l=Sr(o.a,t);if(!!Er(l)){for(var u=i0(o),$=l.a,f=u?u<3?$.a:$.aM:$,d=u==1?$.b:u==3&&$.eg,p=(d&&t.stopPropagation(),(u==2?$.b:u==3&&$.d4)&&t.preventDefault(),e),g,h;g=p.j;){if(typeof g=="function")f=g(f);else for(var h=g.length;h--;)f=g[h](f);p=p.p}p(f,d)}}return n.q=r,n}function d1(e,r){return e.$==r.$&&da(e.a,r.a)}function yl(e,r){var n=[];return Fr(e,r,n,0),n}function nr(e,r,n,t){var o={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(o),o}function Fr(e,r,n,t){if(e!==r){var o=e.$,l=r.$;if(o!==l)if(o===1&&l===2)r=y1(r),l=1;else{nr(n,0,t,r);return}switch(l){case 5:for(var u=e.l,$=r.l,f=u.length,d=f===$.length;d&&f--;)d=u[f]===$[f];if(d){r.k=e.k;return}r.k=r.m();var p=[];Fr(e.k,r.k,p,0),p.length>0&&nr(n,1,t,p);return;case 4:for(var g=e.j,h=r.j,s=!1,w=e.k;w.$===4;)s=!0,typeof g!="object"?g=[g,w.j]:g.push(w.j),w=w.k;for(var x=r.k;x.$===4;)s=!0,typeof h!="object"?h=[h,x.j]:h.push(x.j),x=x.k;if(s&&g.length!==h.length){nr(n,0,t,r);return}(s?!p1(g,h):g!==h)&&nr(n,2,t,h),Fr(w,x,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:Sl(e,r,n,t,g1);return;case 2:Sl(e,r,n,t,h1);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var S=Oo(e.d,r.d);S&&nr(n,4,t,S);var C=r.i(e.g,r.g);C&&nr(n,5,t,C);return}}}function p1(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Sl(e,r,n,t,o){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var l=Oo(e.d,r.d);l&&nr(n,4,t,l),o(e,r,n,t)}function Oo(e,r,n){var t;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var l=Oo(e[o],r[o]||{},o);l&&(t=t||{},t[o]=l);continue}if(!(o in r)){t=t||{},t[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var u=e[o],$=r[o];u===$&&o!=="value"&&o!=="checked"||n==="a0"&&d1(u,$)||(t=t||{},t[o]=$)}for(var f in r)f in e||(t=t||{},t[f]=r[f]);return t}function g1(e,r,n,t){var o=e.e,l=r.e,u=o.length,$=l.length;u>$?nr(n,6,t,{v:$,i:u-$}):u<$&&nr(n,7,t,{v:u,e:l});for(var f=u<$?u:$,d=0;d<f;d++){var p=o[d];Fr(p,l[d],n,++t),t+=p.b||0}}function h1(e,r,n,t){for(var o=[],l={},u=[],$=e.e,f=r.e,d=$.length,p=f.length,g=0,h=0,s=t;g<d&&h<p;){var w=$[g],x=f[h],S=w.a,C=x.a,y=w.b,z=x.b,F=void 0,J=void 0;if(S===C){s++,Fr(y,z,o,s),s+=y.b||0,g++,h++;continue}var Q=$[g+1],O=f[h+1];if(Q){var Z=Q.a,X=Q.b;J=C===Z}if(O){var N=O.a,te=O.b;F=S===N}if(F&&J){s++,Fr(y,te,o,s),it(l,o,S,z,h,u),s+=y.b||0,s++,ot(l,o,S,X,s),s+=X.b||0,g+=2,h+=2;continue}if(F){s++,it(l,o,C,z,h,u),Fr(y,te,o,s),s+=y.b||0,g+=1,h+=2;continue}if(J){s++,ot(l,o,S,y,s),s+=y.b||0,s++,Fr(X,z,o,s),s+=X.b||0,g+=2,h+=1;continue}if(Q&&Z===N){s++,ot(l,o,S,y,s),it(l,o,C,z,h,u),s+=y.b||0,s++,Fr(X,te,o,s),s+=X.b||0,g+=2,h+=2;continue}break}for(;g<d;){s++;var w=$[g],y=w.b;ot(l,o,w.a,y,s),s+=y.b||0,g++}for(;h<p;){var de=de||[],x=f[h];it(l,o,x.a,x.b,void 0,de),h++}(o.length>0||u.length>0||de)&&nr(n,8,t,{w:o,x:u,y:de})}var Cl="_elmW6BL";function it(e,r,n,t,o,l){var u=e[n];if(!u){u={c:0,z:t,r:o,s:void 0},l.push({r:o,A:u}),e[n]=u;return}if(u.c===1){l.push({r:o,A:u}),u.c=2;var $=[];Fr(u.z,t,$,u.r),u.r=o,u.s.s={w:$,A:u};return}it(e,r,n+Cl,t,o,l)}function ot(e,r,n,t,o){var l=e[n];if(!l){var u=nr(r,9,o,void 0);e[n]={c:1,z:t,r:o,s:u};return}if(l.c===0){l.c=2;var $=[];Fr(t,l.z,$,o),nr(r,9,o,{w:$,A:l});return}ot(e,r,n+Cl,t,o)}function zl(e,r,n,t){ct(e,r,n,0,0,r.b,t)}function ct(e,r,n,t,o,l,u){for(var $=n[t],f=$.r;f===o;){var d=$.$;if(d===1)zl(e,r.k,$.s,u);else if(d===8){$.t=e,$.u=u;var p=$.s.w;p.length>0&&ct(e,r,p,0,o,l,u)}else if(d===9){$.t=e,$.u=u;var g=$.s;if(g){g.A.s=e;var p=g.w;p.length>0&&ct(e,r,p,0,o,l,u)}}else $.t=e,$.u=u;if(t++,!($=n[t])||(f=$.r)>l)return t}var h=r.$;if(h===4){for(var s=r.k;s.$===4;)s=s.k;return ct(e,s,n,t,o+1,l,e.elm_event_node_ref)}for(var w=r.e,x=e.childNodes,S=0;S<w.length;S++){o++;var C=h===1?w[S]:w[S].b,y=o+(C.b||0);if(o<=f&&f<=y&&(t=ct(x[S],C,n,t,o,y,u),!($=n[t])||(f=$.r)>l))return t;o=y}return t}function Pl(e,r,n,t){return n.length===0?e:(zl(e,r,n,t),ii(e,n))}function ii(e,r){for(var n=0;n<r.length;n++){var t=r[n],o=t.t,l=b1(o,t);o===e&&(e=l)}return e}function b1(e,r){switch(r.$){case 0:return _1(e,r.s,r.u);case 4:return Ho(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ii(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,o=0;o<n.i;o++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,t=n.e,o=n.v,l=e.childNodes[o];o<t.length;o++)e.insertBefore(Cn(t[o],r.u),l);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var u=n.A;return typeof u.r!="undefined"&&e.parentNode.removeChild(e),u.s=ii(e,n.w),e;case 8:return w1(e,r);case 5:return r.s(e);default:sa(10)}}function _1(e,r,n){var t=e.parentNode,o=Cn(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),t&&o!==e&&t.replaceChild(o,e),o}function w1(e,r){var n=r.s,t=x1(n.y,r);e=ii(e,n.w);for(var o=n.x,l=0;l<o.length;l++){var u=o[l],$=u.A,f=$.c===2?$.s:Cn($.z,r.u);e.insertBefore(f,e.childNodes[u.r])}return t&&Vo(e,t),e}function x1(e,r){if(!!e){for(var n=un.createDocumentFragment(),t=0;t<e.length;t++){var o=e[t],l=o.A;Vo(n,l.c===2?l.s:Cn(l.z,r.u))}return n}}function Uo(e){if(e.nodeType===3)return Ro(e.textContent);if(e.nodeType!==1)return Ro("");for(var r=T,n=e.attributes,t=n.length;t--;){var o=n[t],l=o.name,u=o.value;r=Gr(a(Ir,l,u),r)}for(var $=e.tagName.toLowerCase(),f=T,d=e.childNodes,t=d.length;t--;)f=Gr(Uo(d[t]),f);return i(rr,$,r,f)}function y1(e){for(var r=e.e,n=r.length,t=new Array(n),o=0;o<n;o++)t[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var S1=q(function(e,r,n,t){return Bo(r,t,e.hC,e.i4,e.iI,function(o,l){var u=e.i6,$=t.node,f=Uo($);return Ml(l,function(d){var p=u(d),g=yl(f,p);$=Pl($,f,g,o),f=p})})});q(function(e,r,n,t){return Bo(r,t,e.hC,e.i4,e.iI,function(o,l){var u=e.ee&&e.ee(o),$=e.i6,f=un.title,d=un.body,p=Uo(d);return Ml(l,function(g){ti=u;var h=$(g),s=rr("body")(T)(h.gA),w=yl(p,s);d=Pl(d,p,w,o),p=s,ti=0,f!==h.i_&&(un.title=f=h.i_)})})});var oi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ml(e,r){r(e);var n=0;function t(){n=n===1?0:(oi(t),r(e),1)}return function(o,l){e=o,l?(r(e),n===2&&(n=1)):(n===0&&oi(t),n=2)}}m(function(e,r){return a(c0,dt,ln(function(){r&&history.go(r),e()}))});m(function(e,r){return a(c0,dt,ln(function(){history.pushState({},"",r),e()}))});m(function(e,r){return a(c0,dt,ln(function(){history.replaceState({},"",r),e()}))});var C1={addEventListener:function(){},removeEventListener:function(){}},z1=typeof window!="undefined"?window:C1;k(function(e,r,n){return fl(ln(function(t){function o(l){Ao(n(l))}return e.addEventListener(r,o,Go&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});m(function(e,r){var n=Sr(e,r);return Er(n)?V(n.a):E});function jl(e,r){return ln(function(n){oi(function(){var t=document.getElementById(e);n(t?Un(r(t)):A3(Us(e)))})})}function P1(e){return ln(function(r){oi(function(){r(Un(e()))})})}m(function(e,r){return jl(r,function(n){return n[e](),tt})});m(function(e,r){return P1(function(){return z1.scroll(e,r),tt})});k(function(e,r,n){return jl(e,function(t){return t.scrollLeft=r,t.scrollTop=n,tt})});m(function(e,r){return e&r});m(function(e,r){return e|r});m(function(e,r){return e^r});m(function(e,r){return r<<e});m(function(e,r){return r>>e});m(function(e,r){return r>>>e});var M1=m(function(e,r){var n="g";e.hZ&&(n+="m"),e.gK&&(n+="i");try{return V(new RegExp(r,n))}catch{return E}});m(function(e,r){return r.match(e)!==null});var j1=k(function(e,r,n){for(var t=[],o=0,l=n,u=r.lastIndex,$=-1,f;o++<e&&(f=r.exec(l))&&$!=r.lastIndex;){for(var d=f.length-1,p=new Array(d);d>0;){var g=f[d];p[--d]=g?V(g):E}t.push(L(ev,f[0],f.index,o,v(p))),$=r.lastIndex}return r.lastIndex=u,v(t)});q(function(e,r,n,t){var o=0;function l(u){if(o++>=e)return u;for(var $=arguments.length-3,f=new Array($);$>0;){var d=arguments[$];f[--$]=d?V(d):E}return n(L(ev,u,arguments[arguments.length-2],o,v(f)))}return t.replace(r,l)});k(function(e,r,n){for(var t=n,o=[],l=r.lastIndex,u=r.lastIndex;e--;){var $=r.exec(t);if(!$)break;o.push(t.slice(l,$.index)),l=r.lastIndex}return o.push(t.slice(l)),r.lastIndex=u,v(o)});var L1=m(function(e,r){return new Float64Array([e,r])});m(function(e,r){return new Float64Array([e,r[1]])});m(function(e,r){return new Float64Array([r[0],e])});m(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});m(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});m(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/k1(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function k1(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});m(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});m(function(e,r){return e[0]*r[0]+e[1]*r[1]});var qo=new Float64Array(3),Ll=new Float64Array(3),kl=new Float64Array(3),T1=k(function(e,r,n){return new Float64Array([e,r,n])}),D1=function(e){return e[0]},A1=function(e){return e[1]},I1=function(e){return e[2]};m(function(e,r){return new Float64Array([e,r[1],r[2]])});m(function(e,r){return new Float64Array([r[0],e,r[2]])});m(function(e,r){return new Float64Array([r[0],r[1],e])});var F1=function(e){return new Float64Array([e.ja,e.je,e.ew])};m(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Tl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}m(Tl);function Dl(e,r,n){return n===void 0&&(n=new Float64Array(3)),ci(Tl(e,r,n),n)}m(Dl);function Al(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+t*t+o*o)});m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2];return n*n+t*t+o*o});function ci(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Al(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var B1=m(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),lt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};m(lt);function Yo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}m(Yo);m(function(e,r){var n,t=qo,o=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=lt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],o[0]=(lt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],o[1]=(lt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],o[2]=(lt(r,t)+e[14])/n,o});var E1=q(function(e,r,n,t){return new Float64Array([e,r,n,t])});m(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});m(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});m(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});m(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var V1=function(e){return{ja:e[0],je:e[1],ew:e[2],f7:e[3]}},R1=function(e){return new Float64Array([e.ja,e.je,e.ew,e.f7])};m(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});m(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});m(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/N1(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function N1(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+t*t+o*o+l*l)});m(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],o=e[2]-r[2],l=e[3]-r[3];return n*n+t*t+o*o+l*l});m(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});m(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var W1=new Float64Array(16),H1=new Float64Array(16),G1=function(e){var r=new Float64Array(16);return r[0]=e.e7,r[1]=e.fb,r[2]=e.ff,r[3]=e.fj,r[4]=e.e8,r[5]=e.fc,r[6]=e.fg,r[7]=e.fk,r[8]=e.e9,r[9]=e.fd,r[10]=e.fh,r[11]=e.fl,r[12]=e.fa,r[13]=e.fe,r[14]=e.fi,r[15]=e.fm,r},O1=function(e){return{e7:e[0],fb:e[1],ff:e[2],fj:e[3],e8:e[4],fc:e[5],fg:e[6],fk:e[7],e9:e[8],fd:e[9],fh:e[10],fl:e[11],fa:e[12],fe:e[13],fi:e[14],fm:e[15]}};function Il(e,r,n,t,o,l){var u=new Float64Array(16);return u[0]=2*o/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*o/(t-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(t+n)/(t-n),u[10]=-(l+o)/(l-o),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*o/(l-o),u[15]=0,u}yr(Il);q(function(e,r,n,t){var o=n*Math.tan(e*Math.PI/360),l=-o,u=l*r,$=o*r;return Il(u,$,l,o,n,t)});function Fl(e,r,n,t,o,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(t-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-o),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(t+n)/(t-n),u[14]=-(l+o)/(l-o),u[15]=1,u}yr(Fl);q(function(e,r,n,t){return Fl(e,r,n,t,-1,1)});function Bl(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2],u=e[3],$=e[4],f=e[5],d=e[6],p=e[7],g=e[8],h=e[9],s=e[10],w=e[11],x=e[12],S=e[13],C=e[14],y=e[15],z=r[0],F=r[1],J=r[2],Q=r[3],O=r[4],Z=r[5],X=r[6],N=r[7],te=r[8],de=r[9],Ce=r[10],pe=r[11],ge=r[12],Pe=r[13],he=r[14],Be=r[15];return n[0]=t*z+$*F+g*J+x*Q,n[1]=o*z+f*F+h*J+S*Q,n[2]=l*z+d*F+s*J+C*Q,n[3]=u*z+p*F+w*J+y*Q,n[4]=t*O+$*Z+g*X+x*N,n[5]=o*O+f*Z+h*X+S*N,n[6]=l*O+d*Z+s*X+C*N,n[7]=u*O+p*Z+w*X+y*N,n[8]=t*te+$*de+g*Ce+x*pe,n[9]=o*te+f*de+h*Ce+S*pe,n[10]=l*te+d*de+s*Ce+C*pe,n[11]=u*te+p*de+w*Ce+y*pe,n[12]=t*ge+$*Pe+g*he+x*Be,n[13]=o*ge+f*Pe+h*he+S*Be,n[14]=l*ge+d*Pe+s*he+C*Be,n[15]=u*ge+p*Pe+w*he+y*Be,n}m(Bl);m(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2],u=e[4],$=e[5],f=e[6],d=e[8],p=e[9],g=e[10],h=e[12],s=e[13],w=e[14],x=r[0],S=r[1],C=r[2],y=r[4],z=r[5],F=r[6],J=r[8],Q=r[9],O=r[10],Z=r[12],X=r[13],N=r[14];return n[0]=t*x+u*S+d*C,n[1]=o*x+$*S+p*C,n[2]=l*x+f*S+g*C,n[3]=0,n[4]=t*y+u*z+d*F,n[5]=o*y+$*z+p*F,n[6]=l*y+f*z+g*F,n[7]=0,n[8]=t*J+u*Q+d*O,n[9]=o*J+$*Q+p*O,n[10]=l*J+f*Q+g*O,n[11]=0,n[12]=t*Z+u*X+d*N+h,n[13]=o*Z+$*X+p*N+s,n[14]=l*Z+f*X+g*N+w,n[15]=1,n});m(function(e,r){var n=new Float64Array(16);r=ci(r,qo);var t=r[0],o=r[1],l=r[2],u=Math.cos(e),$=1-u,f=Math.sin(e);return n[0]=t*t*$+u,n[1]=o*t*$+l*f,n[2]=l*t*$-o*f,n[3]=0,n[4]=t*o*$-l*f,n[5]=o*o*$+u,n[6]=o*l*$+t*f,n[7]=0,n[8]=t*l*$+o*f,n[9]=o*l*$-t*f,n[10]=l*l*$+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});k(function(e,r,n){var t=new Float64Array(16),o=1/Al(r),l=r[0]*o,u=r[1]*o,$=r[2]*o,f=Math.cos(e),d=1-f,p=Math.sin(e),g=l*p,h=u*p,s=$*p,w=l*u*d,x=l*$*d,S=u*$*d,C=l*l*d+f,y=w+s,z=x-h,F=w-s,J=u*u*d+f,Q=S+g,O=x+h,Z=S-g,X=$*$*d+f,N=n[0],te=n[1],de=n[2],Ce=n[3],pe=n[4],ge=n[5],Pe=n[6],he=n[7],Be=n[8],Ae=n[9],er=n[10],Hn=n[11],et=n[12],an=n[13],tn=n[14],ma=n[15];return t[0]=N*C+pe*y+Be*z,t[1]=te*C+ge*y+Ae*z,t[2]=de*C+Pe*y+er*z,t[3]=Ce*C+he*y+Hn*z,t[4]=N*F+pe*J+Be*Q,t[5]=te*F+ge*J+Ae*Q,t[6]=de*F+Pe*J+er*Q,t[7]=Ce*F+he*J+Hn*Q,t[8]=N*O+pe*Z+Be*X,t[9]=te*O+ge*Z+Ae*X,t[10]=de*O+Pe*Z+er*X,t[11]=Ce*O+he*Z+Hn*X,t[12]=et,t[13]=an,t[14]=tn,t[15]=ma,t});function U1(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}k(U1);q(function(e,r,n,t){var o=new Float64Array(16);return o[0]=t[0]*e,o[1]=t[1]*e,o[2]=t[2]*e,o[3]=t[3]*e,o[4]=t[4]*r,o[5]=t[5]*r,o[6]=t[6]*r,o[7]=t[7]*r,o[8]=t[8]*n,o[9]=t[9]*n,o[10]=t[10]*n,o[11]=t[11]*n,o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15],o});m(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function q1(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}k(q1);q(function(e,r,n,t){var o=new Float64Array(16),l=t[0],u=t[1],$=t[2],f=t[3],d=t[4],p=t[5],g=t[6],h=t[7],s=t[8],w=t[9],x=t[10],S=t[11];return o[0]=l,o[1]=u,o[2]=$,o[3]=f,o[4]=d,o[5]=p,o[6]=g,o[7]=h,o[8]=s,o[9]=w,o[10]=x,o[11]=S,o[12]=l*e+d*r+s*n+t[12],o[13]=u*e+p*r+w*n+t[13],o[14]=$*e+g*r+x*n+t[14],o[15]=f*e+h*r+S*n+t[15],o});m(function(e,r){var n=new Float64Array(16),t=e[0],o=e[1],l=e[2],u=r[0],$=r[1],f=r[2],d=r[3],p=r[4],g=r[5],h=r[6],s=r[7],w=r[8],x=r[9],S=r[10],C=r[11];return n[0]=u,n[1]=$,n[2]=f,n[3]=d,n[4]=p,n[5]=g,n[6]=h,n[7]=s,n[8]=w,n[9]=x,n[10]=S,n[11]=C,n[12]=u*t+p*o+w*l+r[12],n[13]=$*t+g*o+x*l+r[13],n[14]=f*t+h*o+S*l+r[14],n[15]=d*t+s*o+C*l+r[15],n});k(function(e,r,n){var t=Dl(e,r,qo),o=ci(Yo(n,t,Ll),Ll),l=ci(Yo(t,o,kl),kl),u=W1,$=H1;return u[0]=o[0],u[1]=l[0],u[2]=t[0],u[3]=0,u[4]=o[1],u[5]=l[1],u[6]=t[1],u[7]=0,u[8]=o[2],u[9]=l[2],u[10]=t[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,$[0]=1,$[1]=0,$[2]=0,$[3]=0,$[4]=0,$[5]=1,$[6]=0,$[7]=0,$[8]=0,$[9]=0,$[10]=1,$[11]=0,$[12]=-e[0],$[13]=-e[1],$[14]=-e[2],$[15]=1,Bl(u,$)});k(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var El=0;function ut(e,r){for(;r.b;r=r.b)e(r.a)}function Jo(e){for(var r=0;e.b;e=e.b)r++;return r}var Y1=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},J1=He(function(e,r,n,t,o){return{$:0,a:e,b:r,c:n,d:t,e:o}}),Z1=m(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),X1=m(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Q1=m(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),K1=m(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),es=m(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),rs=m(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ns=m(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),as=m(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ts=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},is=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},os=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},cs=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Vl=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Rl=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},ls=function(e){e.gl.disable(e.gl.CULL_FACE)},us=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},$s=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},vs=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Nl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],fs=[is,os,cs,Vl,Rl,ls,us,$s,vs];function Wl(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function ms(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Hl(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function ss(e,r,n,t){for(var o=n.a.eJ,l=[],u=0;u<o;u++)l.push(String.fromCharCode(97+u));function $(s,w,x,S,C){var y;if(o===1)for(y=0;y<w;y++)s[x++]=w===1?S[C]:S[C][y];else l.forEach(function(z){for(y=0;y<w;y++)s[x++]=w===1?S[z][C]:S[z][C][y]})}var f=Hl(e,r.type);if(f===void 0)throw new Error("No info available for: "+r.type);var d=0,p=f.size*f.arraySize*o,g=new f.type(Jo(n.b)*p);ut(function(s){$(g,f.size*f.arraySize,d,s,t[r.name]||r.name),d+=p},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,g,e.STATIC_DRAW),h}function ds(e,r){if(r.a.eW>0){var n=e.createBuffer(),t=ps(r.c,r.a.eW);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.eJ*Jo(r.b),indexBuffer:null,buffers:{}}}function ps(e,r){var n=new Uint32Array(Jo(e)*r),t=0,o;return ut(function(l){if(r===1)n[t++]=l;else for(o=0;o<r;o++)n[t++]=l[String.fromCharCode(97+o)]},e),n}function Gl(e,r){return e+"#"+r}var Ol=m(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Vl(n),Rl(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function o(l){if(!!l.d.b.b){var u,$,f;if(l.b.id&&l.c.id&&(u=Gl(l.b.id,l.c.id),$=n.programs[u]),!$){var d;l.b.id?d=n.shaders[l.b.id]:l.b.id=El++,d||(d=Wl(t,l.b.src,t.VERTEX_SHADER),n.shaders[l.b.id]=d);var p;l.c.id?p=n.shaders[l.c.id]:l.c.id=El++,p||(p=Wl(t,l.c.src,t.FRAGMENT_SHADER),n.shaders[l.c.id]=p);var g=ms(t,d,p);$={glProgram:g,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},$.uniformSetters=gs(t,e,$,Object.assign({},l.b.uniforms,l.c.uniforms));var h=t.getProgramParameter(g,t.ACTIVE_ATTRIBUTES);for(f=0;f<h;f++){var s=t.getActiveAttrib(g,f),w=t.getAttribLocation(g,s.name);$.activeAttributes.push(s),$.activeAttributeLocations.push(w)}u=Gl(l.b.id,l.c.id),n.programs[u]=$}n.lastProgId!==u&&(t.useProgram($.glProgram),n.lastProgId=u),hs($.uniformSetters,l.e);var x=n.buffers.get(l.d);for(x||(x=ds(t,l.d),n.buffers.set(l.d,x)),f=0;f<$.activeAttributes.length;f++){s=$.activeAttributes[f],w=$.activeAttributeLocations[f],x.buffers[s.name]===void 0&&(x.buffers[s.name]=ss(t,s,l.d,$.attributes)),t.bindBuffer(t.ARRAY_BUFFER,x.buffers[s.name]);var S=Hl(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(w),t.vertexAttribPointer(w,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,y=C*S.arraySize,z=0;z<S.arraySize;z++)t.enableVertexAttribArray(w+z),t.vertexAttribPointer(w+z,S.size,S.baseType,!1,y,C*z)}for(n.toggle=!n.toggle,ut(th(n),l.a),f=0;f<Nl.length;f++){var F=n[Nl[f]];F.toggle!==n.toggle&&F.enabled&&(fs[f](n),F.enabled=!1,F.toggle=n.toggle)}x.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x.indexBuffer),t.drawElements(l.d.a.fv,x.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(l.d.a.fv,0,x.numIndices)}}return ut(o,e.g),r});function gs(e,r,n,t){var o=n.glProgram,l=n.currentUniforms,u=0,$=r.f;function f(s,w){var x=w.name,S=e.getUniformLocation(s,x);switch(w.type){case e.INT:return function(y){l[x]!==y&&(e.uniform1i(S,y),l[x]=y)};case e.FLOAT:return function(y){l[x]!==y&&(e.uniform1f(S,y),l[x]=y)};case e.FLOAT_VEC2:return function(y){l[x]!==y&&(e.uniform2f(S,y[0],y[1]),l[x]=y)};case e.FLOAT_VEC3:return function(y){l[x]!==y&&(e.uniform3f(S,y[0],y[1],y[2]),l[x]=y)};case e.FLOAT_VEC4:return function(y){l[x]!==y&&(e.uniform4f(S,y[0],y[1],y[2],y[3]),l[x]=y)};case e.FLOAT_MAT4:return function(y){l[x]!==y&&(e.uniformMatrix4fv(S,!1,new Float32Array(y)),l[x]=y)};case e.SAMPLER_2D:var C=u++;return function(y){e.activeTexture(e.TEXTURE0+C);var z=$.textures.get(y);z||(z=y.gX(e),$.textures.set(y,z)),e.bindTexture(e.TEXTURE_2D,z),l[x]!==y&&(e.uniform1i(S,C),l[x]=y)};case e.BOOL:return function(y){l[x]!==y&&(e.uniform1i(S,y),l[x]=y)};default:return function(){}}}for(var d={},p=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),g=0;g<p;g++){var h=e.getActiveUniform(o,g);d[t[h.name]||h.name]=f(o,h)}return d}function hs(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var bs=k(function(e,r,n){return K3(r,{g:n,f:{},h:e},zs,Ps)}),_s=m(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),ws=m(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),xs=m(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),ys=m(function(e,r){e.contextAttributes.antialias=!0}),Ss=m(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Cs=m(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function zs(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ut(function(o){return a(ah,r,o)},e.h);var n=un.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Y1(function(){return a(Ol,e,n)})):(n=un.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ps(e,r){return r.f=e.f,Ol(r)}var j=Bm,li=Am,Ul=k(function(e,r,n){var t=n.c,o=n.d,l=m(function(u,$){if(u.$){var d=u.a;return i(li,e,$,d)}else{var f=u.a;return i(li,l,$,f)}});return i(li,l,i(li,e,r,o),t)}),Zo=k(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,o=n.c,l=n.d,u=n.e,$=e,f=i(e,t,o,i(Zo,e,r,u)),d=l;e=$,r=f,n=d;continue e}}),ql=function(e){return i(Zo,k(function(r,n,t){return a(j,M(r,n),t)}),T,e)},Yl=1,Ms=2,Jl=0,ar=function(e){return{$:1,a:e}},Xo=m(function(e,r){return{$:3,a:e,b:r}}),Zl=m(function(e,r){return{$:0,a:e,b:r}}),Xl=m(function(e,r){return{$:1,a:e,b:r}}),Re=function(e){return{$:0,a:e}},js=function(e){return{$:2,a:e}},V=function(e){return{$:0,a:e}},E={$:1},Ls=u3,ks=j3,D=ll,re=m(function(e,r){return a(i3,e,ri(r))}),Qo=m(function(e,r){return v(a(t3,e,r))}),Ql=function(e){return a(re,`
    `,a(Qo,`
`,e))},Ee=k(function(e,r,n){e:for(;;)if(n.b){var t=n.a,o=n.b,l=e,u=a(e,t,r),$=o;e=l,r=u,n=$;continue e}else return r}),Br=function(e){return i(Ee,m(function(r,n){return n+1}),0,e)},Ts=Em,Ds=k(function(e,r,n){e:for(;;)if(fe(e,r)<1){var t=e,o=r-1,l=a(j,r,n);e=t,r=o,n=l;continue e}else return n}),$n=m(function(e,r){return i(Ds,e,r,T)}),Ko=m(function(e,r){return i(Ts,e,a($n,0,Br(r)-1),r)}),qr=p3,Kl=function(e){var r=qr(e);return 97<=r&&r<=122},eu=function(e){var r=qr(e);return r<=90&&65<=r},As=function(e){return Kl(e)||eu(e)},Is=function(e){var r=qr(e);return r<=57&&48<=r},Fs=function(e){return Kl(e)||eu(e)||Is(e)},tr=function(e){return i(Ee,j,T,e)},ga=e3,Bs=m(function(e,r){return`

(`+(D(e+1)+(") "+Ql(Es(r))))}),Es=function(e){return a(Vs,e,T)},Vs=m(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,t=e.b,o=function(){var x=ga(n);if(x.$===1)return!1;var S=x.a,C=S.a,y=S.b;return As(C)&&a(Ls,Fs,y)}(),l=o?"."+n:"['"+(n+"']"),u=t,$=a(j,l,r);e=u,r=$;continue e;case 1:var f=e.a,t=e.b,d="["+(D(f)+"]"),u=t,$=a(j,d,r);e=u,r=$;continue e;case 2:var p=e.a;if(p.b)if(p.b.b){var g=function(){return r.b?"The Json.Decode.oneOf at json"+a(re,"",tr(r)):"Json.Decode.oneOf"}(),w=g+(" failed in the following "+(D(Br(p))+" ways:"));return a(re,`

`,a(j,w,a(Ko,Bs,p)))}else{var t=p.a,u=t,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(re,"",tr(r)):"!"}();default:var h=e.a,s=e.b,w=function(){return r.b?"Problem with the value at json"+(a(re,"",tr(r))+`:

    `):`Problem with the given value:

`}();return w+(Ql(a(ks,4,s))+(`

`+h))}}),gr=32,e0=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),r0=jm,$t=qm,n0=m(function(e,r){return cl(r)/cl(e)}),vt=Om,ft=$t(a(n0,2,gr)),ru=L(e0,0,ft,r0,r0),nu=km,au=function(e){return{$:1,a:e}};m(function(e,r){return e(r)});m(function(e,r){return r(e)});var qn=Ym,a0=Lm,Xe=m(function(e,r){return fe(e,r)>0?e:r}),Rs=function(e){return{$:0,a:e}},t0=Tm,Ns=m(function(e,r){e:for(;;){var n=a(t0,gr,e),t=n.a,o=n.b,l=a(j,Rs(t),r);if(o.b){var u=o,$=l;e=u,r=$;continue e}else return tr(l)}}),tu=function(e){var r=e.a;return r},Ws=m(function(e,r){e:for(;;){var n=$t(r/gr);if(n===1)return a(t0,gr,e).a;var t=a(Ns,e,T),o=n;e=t,r=o;continue e}}),iu=m(function(e,r){if(r.q){var n=r.q*gr,t=qn(a(n0,gr,n-1)),o=e?tr(r.F):r.F,l=a(Ws,o,r.q);return L(e0,a0(r.v)+n,a(Xe,5,t*ft),l,r.v)}else return L(e0,a0(r.v),ft,r0,r.v)}),Hs=He(function(e,r,n,t,o){e:for(;;){if(r<0)return a(iu,!1,{F:t,q:n/gr|0,v:o});var l=au(i(nu,gr,r,e)),u=e,$=r-gr,f=n,d=a(j,l,t),p=o;e=u,r=$,n=f,t=d,o=p;continue e}}),Gs=m(function(e,r){if(e<=0)return ru;var n=e%gr,t=i(nu,n,e-n,r),o=e-n-gr;return A(Hs,r,o,e,T,t)}),Er=function(e){return!e.$},U=C3,Se=_3,G=S3,Ge=w3,ou=m(function(e,r){return{eF:r.eF,gU:e,du:r.du,g8:r.g8,e_:r.e_,cX:r.cX,c2:r.c2,i7:r.i7}}),mt=z3,Os=P3,lr=h3,i0=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Cr=function(e){return e},Us=Cr,cu=yr(function(e,r,n,t,o,l){return{eP:l,eU:r,fE:t,fH:n,fK:e,fL:o}}),qs=$3,Yn=r3,ha=o3,st=m(function(e,r){return e<1?r:i(ha,e,Yn(r),r)}),ui=f3,$i=function(e){return e===""},vi=m(function(e,r){return e<1?"":i(ha,0,e,r)}),lu=m3,uu=He(function(e,r,n,t,o){if($i(o)||a(qs,"@",o))return E;var l=a(ui,":",o);if(l.b){if(l.b.b)return E;var u=l.a,$=lu(a(st,u+1,o));if($.$===1)return E;var f=$;return V(cr(cu,e,a(vi,u,o),f,r,n,t))}else return V(cr(cu,e,o,E,r,n,t))}),$u=q(function(e,r,n,t){if($i(t))return E;var o=a(ui,"/",t);if(o.b){var l=o.a;return A(uu,e,a(st,l,t),r,n,a(vi,l,t))}else return A(uu,e,"/",r,n,t)}),vu=k(function(e,r,n){if($i(n))return E;var t=a(ui,"?",n);if(t.b){var o=t.a;return L($u,e,V(a(st,o+1,n)),r,a(vi,o,n))}else return L($u,e,E,r,n)});m(function(e,r){if($i(r))return E;var n=a(ui,"#",r);if(n.b){var t=n.a;return i(vu,e,V(a(st,t+1,r)),a(vi,t,r))}else return i(vu,e,E,r)});var Ys=v3,dt=function(e){},pt=Un,Js=pt(0),fu=q(function(e,r,n,t){if(t.b){var o=t.a,l=t.b;if(l.b){var u=l.a,$=l.b;if($.b){var f=$.a,d=$.b;if(d.b){var p=d.a,g=d.b,h=n>500?i(Ee,e,r,tr(g)):L(fu,e,r,n+1,g);return a(e,o,a(e,u,a(e,f,a(e,p,h))))}else return a(e,o,a(e,u,a(e,f,r)))}else return a(e,o,a(e,u,r))}else return a(e,o,r)}else return r}),qe=k(function(e,r,n){return L(fu,e,r,0,n)}),Y=m(function(e,r){return i(qe,m(function(n,t){return a(j,e(n),t)}),T,r)}),fi=Do,o0=m(function(e,r){return a(fi,function(n){return pt(e(n))},r)}),Zs=k(function(e,r,n){return a(fi,function(t){return a(fi,function(o){return pt(a(e,t,o))},n)},r)}),Xs=function(e){return i(qe,Zs(j),pt(T),e)},Qs=W3,Ks=m(function(e,r){var n=r;return fl(a(fi,Qs(e),n))}),ed=k(function(e,r,n){return a(o0,function(t){return 0},Xs(a(Y,Ks(e),r)))}),rd=k(function(e,r,n){return pt(0)}),nd=m(function(e,r){var n=r;return a(o0,e,n)});Ur.Task=R3(Js,ed,rd,nd);var ad=dl("Task"),c0=m(function(e,r){return ad(a(o0,e,r))}),td=S1,id=Qm,mi={$:1},mu=function(e){return{$:2,a:e}},l0={$:0},zr=m(function(e,r){return{$:0,a:e,b:r}}),je=k(function(e,r,n){return r(e(n))}),Jn=function(e){var r=e.b.t;return r.a},od=function(e){var r=e.a,n=e.b.ac,t=e.b.t,o=e.b.ax;if(o.b){var l=o.a,u=o.b;return V(a(zr,r,{t:l,ax:u,ac:a(j,t,n)}))}else return E},ze=m(function(e,r){if(r.$)return e;var n=r.a;return n}),cd=k(function(e,r,n){var t=n.a,o=n.b;switch(t.$){case 1:return n;case 2:var l=t.a.ei;return(fe(l+r.g8,Jn(n).eF)>0?a(je,od,ze(a(zr,mi,o))):Cr)(a(zr,mu({ei:l+r.g8}),o));default:var u=o.t,$=u.a,f=u.b,d=a(ou,$.gU,ie(r,{eF:$.eF+r.g8})),p=a(e,d,f);return a(zr,l0,{t:M(d,p),ax:T,ac:a(j,o.t,o.ac)})}}),su=m(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,o=n;e=t,r=o;continue e}else return r}}),ld=k(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,o=r.b,l=e-1,u=o,$=a(j,t,n);e=l,r=u,n=$;continue e}else return n}}),ud=m(function(e,r){return tr(i(ld,e,r,T))}),du=k(function(e,r,n){if(r<=0)return T;{var t=M(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var o=t.b,y=o.a,l=o.b,u=l.a;return v([y,u]);case 3:if(t.b.b.b.b){var $=t.b,y=$.a,f=$.b,u=f.a,d=f.b,p=d.a;return v([y,u,p])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var g=t.b,y=g.a,h=g.b,u=h.a,s=h.b,p=s.a,w=s.b,x=w.a,S=w.b;return e>1e3?a(j,y,a(j,u,a(j,p,a(j,x,a(ud,r-4,S))))):a(j,y,a(j,u,a(j,p,a(j,x,i(du,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,y=C.a;return v([y])}}),$d=m(function(e,r){return i(du,0,e,r)}),vd=m(function(e,r){var n=r.b.ac,t=r.b.t,o=r.b.ax,l=H(tr(n),H(v([t]),o)),u=a($d,e,l),$=a(su,e,l);if($.b){var f=$.a,d=$.b;return a(zr,mi,{t:f,ax:d,ac:tr(u)})}else{var p=tr(u);if(p.b){var g=p.a,h=p.b;return a(zr,mi,{t:g,ax:T,ac:h})}else return r}}),fd=function(e){var r=e.b;return a(zr,mi,r)},md=function(e){var r=e.b;return a(zr,mu({ei:Jn(e).eF}),r)},sd=function(e){var r=e.b;return a(zr,l0,r)},dd=m(function(e,r){switch(e.$){case 1:return fd(r);case 2:return sd(r);case 3:return md(r);default:var n=e.a;return a(vd,n,r)}}),si=m(function(e,r){var n=r.a,t=r.b;return M(e(n),t)}),pd=m(function(e,r){return ie(r,{a_:e(r.a_)})}),gd=function(e){return{$:3,a:e}},hd=function(e){return{$:2,a:e}},pu=m(function(e,r){return{$:0,a:e,b:r}}),bd=m(function(e,r){return{$:1,a:e,b:r}}),Ie=m(function(e,r){if(r.$)return E;var n=r.a;return V(e(n))}),$e=function(e){return e<0?-e:e},gu=s3,_d=k(function(e,r,n){return a(ze,0/0,gu(a(e,r,n)))}),gt=m(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var o=e,l=t;e=o,r=l;continue e}else return!1}),wd=a3,hu=function(e){return i(wd,j,T,e)},xd=m(function(e,r){var n=a(gt,function(t){return t!=="0"&&t!=="."},hu(r));return H(e&&n?"-":"",r)}),ne=ll,u0=Km,bu=g3,_u=function(e){var r=e.a,n=e.b;if(r==="9"){var t=ga(n);if(t.$===1)return"01";var o=t.a;return a(u0,"0",_u(o))}else{var l=qr(r);return l>=48&&l<57?a(u0,bu(l+1),n):"0"}},$0=Um,yd=Xm,di=function(e){return a(u0,e,"")},wu=k(function(e,r,n){return e<=0?n:i(wu,e>>1,H(r,r),e&1?H(n,r):n)}),ht=m(function(e,r){return i(wu,e,r,"")}),v0=k(function(e,r,n){return H(n,a(ht,e-Yn(n),di(r)))}),f0=n3,xu=function(e){var r=a(Qo,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a;return M(n,o)}else{var n=r.a;return M(n,"0")}else return M("0","0")},Sd=function(e){var r=a(Qo,"e",ne($e(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,o=t.a,l=a(ze,0,lu(a(Ys,"+",o)?a(st,1,o):o)),u=xu(n),$=u.a,f=u.b,d=H($,f),p=l<0?a(ze,"0",a(Ie,function(g){var h=g.a,s=g.b;return h+("."+s)},a(Ie,si(di),ga(H(a(ht,$e(l),"0"),d))))):i(v0,l+1,"0",d);return H(e<0?"-":"",p)}else{var n=r.a;return H(e<0?"-":"",n)}else return""},Cd=k(function(e,r,n){if($0(n)||yd(n))return ne(n);var t=n<0,o=xu(Sd($e(n))),l=o.a,u=o.b,$=Yn(l)+r,f=H(a(ht,-$+1,"0"),i(v0,$,"0",H(l,u))),d=Yn(f),p=a(Xe,1,$),g=a(e,t,i(ha,p,d,f)),h=i(ha,0,p,f),s=g?f0(a(ze,"1",a(Ie,_u,ga(f0(h))))):h,w=Yn(s),x=s==="0"?s:r<=0?H(s,a(ht,$e(r),"0")):fe(r,Yn(u))<0?i(ha,0,w-r,s)+("."+i(ha,w-r,w,s)):H(l+".",i(v0,r,"0",u));return a(xd,t,x)}),yu=Cd(m(function(e,r){var n=ga(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,o=t.a;return function(l){return l>53&&e||l>=53&&!e}(qr(o))})),zd=_d(yu),Pd=k(function(e,r,n){var t=a(n0,10,$e(r-e)),o=t<0?3:t<1?2:t<2?1:0;return a(zd,o,n)}),Su=Fm,pi=m(function(e,r){e:for(;;){if(r.$===-2)return E;var n=r.b,t=r.c,o=r.d,l=r.e,u=a(Su,e,n);switch(u){case 0:var $=e,f=o;e=$,r=f;continue e;case 1:return V(t);default:var $=e,f=l;e=$,r=f;continue e}}}),oe=He(function(e,r,n,t,o){return{$:-1,a:e,b:r,c:n,d:t,e:o}}),Yr={$:-2},ba=He(function(e,r,n,t,o){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,$=o.d,f=o.e;if(t.$===-1&&!t.a){t.a;var d=t.b,p=t.c,g=t.d,h=t.e;return A(oe,0,r,n,A(oe,1,d,p,g,h),A(oe,1,l,u,$,f))}else return A(oe,e,l,u,A(oe,0,r,n,t,$),f)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var d=t.b,p=t.c,s=t.d;s.a;var w=s.b,x=s.c,S=s.d,C=s.e,h=t.e;return A(oe,0,d,p,A(oe,1,w,x,S,C),A(oe,1,r,n,h,o))}else return A(oe,e,r,n,t,o)}),m0=k(function(e,r,n){if(n.$===-2)return A(oe,0,e,r,Yr,Yr);var t=n.a,o=n.b,l=n.c,u=n.d,$=n.e,f=a(Su,e,o);switch(f){case 0:return A(ba,t,o,l,i(m0,e,r,u),$);case 1:return A(oe,t,o,r,u,$);default:return A(ba,t,o,l,u,i(m0,e,r,$))}}),Zn=k(function(e,r,n){var t=i(m0,e,r,n);if(t.$===-1&&!t.a){t.a;var o=t.b,l=t.c,u=t.d,$=t.e;return A(oe,1,o,l,u,$)}else{var f=t;return f}}),Md=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Cu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,o=e.d;o.a;var l=o.b,u=o.c,$=o.d,f=o.e,d=e.e;d.a;var p=d.b,g=d.c,h=d.d;h.a;var s=h.b,w=h.c,x=h.d,S=h.e,C=d.e;return A(oe,0,s,w,A(oe,1,n,t,A(oe,0,l,u,$,f),x),A(oe,1,p,g,S,C))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var l=y.b,u=y.c,$=y.d,f=y.e,z=e.e;z.a;var p=z.b,g=z.c,h=z.d,C=z.e;return A(oe,1,n,t,A(oe,0,l,u,$,f),A(oe,0,p,g,h,C))}else return e},zu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,o=e.d;o.a;var l=o.b,u=o.c,$=o.d;$.a;var f=$.b,d=$.c,p=$.d,g=$.e,h=o.e,s=e.e;s.a;var w=s.b,x=s.c,S=s.d,C=s.e;return A(oe,0,l,u,A(oe,1,f,d,p,g),A(oe,1,n,t,h,A(oe,0,w,x,S,C)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var l=y.b,u=y.c,z=y.d,h=y.e,F=e.e;F.a;var w=F.b,x=F.c,S=F.d,C=F.e;return A(oe,1,n,t,A(oe,0,l,u,z,h),A(oe,0,w,x,S,C))}else return e},jd=ei(function(e,r,n,t,o,l,u){if(l.$===-1&&!l.a){l.a;var $=l.b,f=l.c,d=l.d,p=l.e;return A(oe,n,$,f,d,A(oe,0,t,o,p,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var g=u.d;return g.a,zu(r)}else break e;else return u.a,u.d,zu(r);else break e;return r}}),gi=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,o=e.d,l=o.a,u=o.d,$=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,A(oe,r,n,t,gi(o),$);var f=Cu(e);if(f.$===-1){var d=f.a,p=f.b,g=f.c,h=f.d,s=f.e;return A(ba,d,p,g,gi(h),s)}else return Yr}else return A(oe,r,n,t,gi(o),$)}else return Yr},bt=m(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,o=r.c,l=r.d,u=r.e;if(fe(e,t)<0)if(l.$===-1&&l.a===1){l.a;var $=l.d;if($.$===-1&&!$.a)return $.a,A(oe,n,t,o,a(bt,e,l),u);var f=Cu(r);if(f.$===-1){var d=f.a,p=f.b,g=f.c,h=f.d,s=f.e;return A(ba,d,p,g,a(bt,e,h),s)}else return Yr}else return A(oe,n,t,o,a(bt,e,l),u);else return a(Ld,e,Lo(jd,e,r,n,t,o,l,u))}),Ld=m(function(e,r){if(r.$===-1){var n=r.a,t=r.b,o=r.c,l=r.d,u=r.e;if(ue(e,t)){var $=Md(u);if($.$===-1){var f=$.b,d=$.c;return A(ba,n,f,d,l,gi(u))}else return Yr}else return A(ba,n,t,o,l,a(bt,e,u))}else return Yr}),Pu=m(function(e,r){var n=a(bt,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,o=n.c,l=n.d,u=n.e;return A(oe,1,t,o,l,u)}else{var $=n;return $}}),hi=k(function(e,r,n){var t=r(a(pi,e,n));if(t.$)return a(Pu,e,n);var o=t.a;return i(Zn,e,o,n)}),kd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(hi,r,Ie(function(t){if(t.$===1){var o=t.a,l=o.a,u=o.b;return a(bd,M(l,u),n)}else return t}));case 0:var r=e.a,n=e.b;return a(hi,r,Ie(function(t){if(t.$)return t;var o=t.a,l=o.a,u=o.b;return a(pu,M(l,u),i(Pd,l,u,n))}));case 3:var r=e.a,n=e.b;return a(hi,r,Ie(function(t){return t.$===3?gd(n):t}));default:var r=e.a,n=e.b;return a(hi,r,Ie(function(t){return t.$===2?hd(n):t}))}},Td=function(e){return pd(kd(e))},Dd=m(function(e,r){return a(Y,Td(e),r)}),Ad=m(function(e,r){return ie(r,{gU:a(Dd,e,r.gU)})}),Id=m(function(e,r){var n=r.a,t=r.b;return a(zr,n,ie(t,{t:a(si,Ad(e),t.t)}))}),s0=m(function(e,r){var n=r.a,t=r.b;return M(n,e(t))}),Fd=k(function(e,r,n){var t=n.a,o=n.b,l=o.t;return a(zr,t,ie(o,{t:a(s0,a(e,l.a,r),l)}))}),Bd=q(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return ie(t,{bP:!t.bP});case 2:var o=n.a;return ie(t,{W:i(cd,e,o,t.W)});case 3:var l=n.a;return ie(t,{bI:l});case 4:var u=n.a;return ie(t,{W:a(Id,u,t.W)});case 5:var $=n.a;return ie(t,{W:i(Fd,r,$,t.W)});default:var f=n.a;return ie(t,{W:a(dd,f,t.W)})}}),Ed=m(function(e,r){return a(zr,l0,{t:M(e,r(e)),ax:T,ac:T})}),Vd=H3,Mu=Vd(T),Rd=function(e){return{$:2,a:e}},bi=y3,_a=x3,Nd=Y3("tick",a(U,function(e){return a(U,function(r){return a(U,function(n){return a(U,function(t){return a(U,function(o){return a(U,function(l){return a(U,function(u){return lr({eF:u,du:l,g8:o,e_:t,cX:n,c2:r,i7:e})},a(G,"clock",Ge))},a(G,"devicePixelRatio",Ge))},a(G,"dt",Ge))},a(G,"keyboard",a(U,function(t){return a(U,function(o){return a(U,function(l){return a(U,function(u){return a(U,function($){return a(U,function(f){return a(U,function(d){return a(U,function(p){return a(U,function(g){return lr({gn:g,gW:p,eI:d,g7:f,hQ:$,id:u,ij:l,fR:o,f$:t})},a(G,"alt",Se))},a(G,"control",Se))},a(G,"down",Se))},a(G,"downs",bi(_a)))},a(G,"left",Se))},a(G,"pressedKeys",bi(_a)))},a(G,"right",Se))},a(G,"shift",Se))},a(G,"up",Se))))},a(G,"pointer",a(U,function(n){return a(U,function(t){return a(U,function(o){return a(U,function(l){return a(U,function(u){return a(U,function($){return a(U,function(f){return a(U,function(d){return lr({eI:d,dB:f,hY:$,ik:u,il:l,f$:o,ja:t,je:n})},a(G,"down",Se))},a(G,"isDown",Se))},a(G,"move",Se))},a(G,"rightDown",Se))},a(G,"rightUp",Se))},a(G,"up",Se))},a(G,"x",Ge))},a(G,"y",Ge))))},a(G,"screen",a(U,function(r){return a(U,function(n){return lr({hq:n,i8:r})},a(G,"height",Ge))},a(G,"width",Ge))))},a(G,"wheel",a(U,function(e){return a(U,function(r){return lr({g$:r,g0:e})},a(G,"deltaX",Ge))},a(G,"deltaY",Ge))))),Wd=function(e){return e.ep,Nd(Rd)},Hd=function(e){return{$:5,a:e}},Gd={$:0},_i=m(function(e,r){return e}),Od=function(e){var r=e.b.t;return r.b},Ud=function(e){return{$:1,a:e}},qd=Ud,ju=function(e){return{$:8,a:e}},be=ju,_t=function(e){return{$:0,a:e}},wt=k(function(e,r,n){return e(r(n))}),Yd=a(wt,_t,_i),vn=Yd,Le=function(e){return{$:1,a:e}},fn=Le,Lu=m(function(e,r){return{$:9,a:e,b:r}}),Xn={$:0},ku=m(function(e,r){return r.$===3?Xn:a(Lu,e,r)}),d0=function(e){return a(ku,4,e)},b={gc:"a",df:"atv",ge:"ab",gf:"cx",gg:"cy",gh:"acb",gi:"accx",gj:"accy",gk:"acr",ez:"al",eA:"ar",gl:"at",dg:"ah",dh:"av",go:"s",gv:"bh",gw:"b",gB:"w7",gD:"bd",gE:"bdt",cr:"bn",gF:"bs",cu:"cpe",gQ:"cp",gR:"cpx",gS:"cpy",aI:"c",cy:"ctr",cz:"cb",cA:"ccx",aJ:"ccy",bM:"cl",cB:"cr",gV:"ct",gY:"cptr",gZ:"ctxt",hg:"fcs",eO:"focus-within",hh:"fs",hl:"g",dx:"hbh",dy:"hc",eS:"he",dz:"hf",eT:"hfp",ht:"hv",hx:"ic",hz:"fr",cI:"lbl",hD:"iml",hE:"imlf",hF:"imlp",hG:"implw",hH:"it",hN:"i",e6:"lnk",bv:"nb",fx:"notxt",h2:"ol",h3:"or",a7:"oq",h8:"oh",fB:"pg",fC:"p",ia:"ppe",im:"ui",ao:"r",ip:"sb",iq:"sbx",ir:"sby",is:"sbt",iw:"e",ix:"cap",iz:"sev",iF:"sk",af:"t",iM:"tc",iN:"w8",iO:"w2",iP:"w9",iQ:"tj",c6:"tja",iR:"tl",iS:"w3",iT:"w5",iU:"w4",iV:"tr",iW:"w6",iX:"w1",iY:"tun",fZ:"ts",bf:"clr",i3:"u",eq:"wc",f8:"we",er:"wf",f9:"wfp",es:"wrp"},p0=cn,Pr=m(function(e,r){return a(No,e,p0(r))}),Mr=Pr("className"),hr=function(e){return Le(Mr(e))},Tu=m(function(e,r){return{$:2,a:e,b:r}}),Jd=m(function(e,r){return{$:1,a:e,b:r}}),Qe=function(e){return{$:0,a:e}},br=2,Zd={$:0},Qn=Zd,Xd={$:0},Qd=b.go+(" "+b.aI),Kd=b.go+(" "+b.hl),e2=b.go+(" "+b.fB),r2=b.go+(" "+b.fC),n2=b.go+(" "+b.ao),a2=b.go+(" "+b.iw),t2=function(e){switch(e){case 0:return n2;case 1:return Qd;case 2:return a2;case 3:return Kd;case 4:return r2;default:return e2}},Du=function(e){return{$:1,a:e}},Kn={$:0},g0=function(e){return{$:1,a:e}},Au=m(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return H(n,e);case 2:var t=r.a;return H(e,t);default:var n=r.a,t=r.b;return H(n,H(e,t))}}),Iu=k(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return H(a(Y,function(l){return M(e,l)},t),r);case 2:var o=n.a;return H(r,a(Y,function(l){return M(e,l)},o));default:var t=n.a,o=n.b;return H(a(Y,function(l){return M(e,l)},t),H(r,a(Y,function(l){return M(e,l)},o)))}}),wi=4,i2=function(e){return{$:0,a:e}},o2=function(e){return{$:1,a:e}},me=function(e){return e>31?o2(1<<e-32):i2(1<<e)},Fu=me(41),Bu=me(40),Eu=me(42),Vu=me(43),Ve=rr("div"),xi=Yr,Ru=xi,Jr=function(e){switch(e.$){case 0:var r=e.a;return D(r)+"px";case 1:return"auto";case 2:var n=e.a;return D(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(D(t)+Jr(o));default:var l=e.a,o=e.b;return"max"+(D(l)+Jr(o))}},ke=Jm,Fe=function(e){return D(ke(e*255))},h0=function(e){switch(e.$){case 0:return E;case 1:var r=e.a,n=r.a,t=r.b,o=r.c;return V("mv-"+(Fe(n)+("-"+(Fe(t)+("-"+Fe(o))))));default:var l=e.a,u=l.a,$=l.b,f=l.c,d=e.b,p=d.a,g=d.b,h=d.c,s=e.c,w=s.a,x=s.b,S=s.c,C=e.d;return V("tfrm-"+(Fe(u)+("-"+(Fe($)+("-"+(Fe(f)+("-"+(Fe(p)+("-"+(Fe(g)+("-"+(Fe(h)+("-"+(Fe(w)+("-"+(Fe(x)+("-"+(Fe(S)+("-"+Fe(C))))))))))))))))))))}},xt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var t=e.a;return"font-size-"+D(t);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var o=e.a,l=e.b;return e.c,o;case 7:var o=e.a;return e.b,e.c,e.d,e.e,o;case 6:var o=e.a;return e.b,e.c,e.d,e.e,o;case 8:var u=e.a;return"grid-rows-"+(a(re,"-",a(Y,Jr,u.$9))+("-cols-"+(a(re,"-",a(Y,Jr,u.au))+("-space-x-"+(Jr(u.iA.a)+("-space-y-"+Jr(u.iA.b)))))));case 9:var $=e.a;return"gp grid-pos-"+(D($.ao)+("-"+(D($.gT)+("-"+(D($.i8)+("-"+D($.hq)))))));case 11:var f=e.a,d=e.b,r=function(){switch(f){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(re," ",a(Y,function(p){var g=xt(p);if(g==="")return"";var h=g;return h+("-"+r)},d));default:var l=e.a;return a(ze,"",h0(l))}},c2=m(function(e,r){var n=r;return i(Zn,e,0,n)}),l2=m(function(e,r){var n=a(pi,e,r);return!n.$}),u2=m(function(e,r){var n=r;return a(l2,e,n)}),Nu=m(function(e,r){var n=r.a,t=r.b,o=xt(e);return a(u2,o,n)?r:M(a(c2,o,n),a(j,e,t))}),ae=m(function(e,r){return{$:0,a:e,b:r}}),yt=m(function(e,r){return{$:0,a:e,b:r}}),P=function(e){return"."+e},$2=k(function(e,r,n){var t=e(r);if(t.$)return n;var o=t.a;return a(j,o,n)}),zn=m(function(e,r){return i(qe,$2(e),T,r)}),wa=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return"rgba("+(D(ke(r*255))+(","+D(ke(n*255))+(","+D(ke(t*255))+(","+(ne(o)+")")))))},b0=function(e){return a(re," ",a(zn,Cr,v([e.eX?V("inset"):E,V(ne(e.fy.a)+"px"),V(ne(e.fy.b)+"px"),V(ne(e.bi)+"px"),V(ne(e.bA)+"px"),V(wa(e.cw))])))},Wu=function(e){return v([a(yt,P(b.eO)+":focus-within",a(zn,Cr,v([a(Ie,function(r){return a(ae,"border-color",wa(r))},e.gC),a(Ie,function(r){return a(ae,"background-color",wa(r))},e.gs),a(Ie,function(r){return a(ae,"box-shadow",b0({bi:r.bi,cw:r.cw,eX:!1,fy:a(s0,vt,a(si,vt,r.fy)),bA:r.bA}))},e.it),V(a(ae,"outline","none"))]))),a(yt,P(b.go)+":focus .focusable, "+(P(b.go)+".focusable:focus, "+(".ui-slide-bar:focus + "+(P(b.go)+" .focusable-thumb"))),a(zn,Cr,v([a(Ie,function(r){return a(ae,"border-color",wa(r))},e.gC),a(Ie,function(r){return a(ae,"background-color",wa(r))},e.gs),a(Ie,function(r){return a(ae,"box-shadow",b0({bi:r.bi,cw:r.cw,eX:!1,fy:a(s0,vt,a(si,vt,r.fy)),bA:r.bA}))},e.it),V(a(ae,"outline","none"))])))])},Zr=function(e){return rr(_l(e))},Hu=m(function(e,r){return a(No,t1(e),wl(r))}),_0=m(function(e,r){return{$:2,a:e,b:r}}),w0=function(e){return{$:6,a:e}},W=m(function(e,r){return{$:1,a:e,b:r}}),_r=m(function(e,r){return{$:0,a:e,b:r}}),I=m(function(e,r){return{$:4,a:e,b:r}}),_=m(function(e,r){return{$:0,a:e,b:r}}),v2=m(function(e,r){return{$:3,a:e,b:r}}),Gu=v([0,1,2,3,4,5]),f2=m(function(e,r){return r.b?i(qe,j,r,e):e}),ur=function(e){return i(qe,f2,T,e)},xa=m(function(e,r){return ur(a(Y,e,r))}),m2=function(e){switch(e){case 0:return P(b.gV);case 1:return P(b.cz);case 2:return P(b.cB);case 3:return P(b.bM);case 4:return P(b.cA);default:return P(b.aJ)}},yi=function(e){switch(e){case 0:return P(b.gl);case 1:return P(b.ge);case 2:return P(b.eA);case 3:return P(b.ez);case 4:return P(b.gf);default:return P(b.gg)}},St=function(e){var r=function(n){var t=e(n),o=t.a,l=t.b;return v([a(I,m2(n),o),a(W,P(b.go),v([a(I,yi(n),l)]))])};return w0(a(xa,r,Gu))},Ou=v([a(_,"display","flex"),a(_,"flex-direction","column"),a(_,"white-space","pre"),a(I,P(b.dx),v([a(_,"z-index","0"),a(W,P(b.gv),v([a(_,"z-index","-1")]))])),a(I,P(b.is),v([a(W,P(b.af),v([a(I,P(b.dz),v([a(_,"flex-grow","0")])),a(I,P(b.er),v([a(_,"align-self","auto !important")]))]))])),a(W,P(b.dy),v([a(_,"height","auto")])),a(W,P(b.dz),v([a(_,"flex-grow","100000")])),a(W,P(b.er),v([a(_,"width","100%")])),a(W,P(b.f9),v([a(_,"width","100%")])),a(W,P(b.eq),v([a(_,"align-self","flex-start")])),St(function(e){switch(e){case 0:return M(v([a(_,"justify-content","flex-start")]),v([a(_,"margin-bottom","auto !important"),a(_,"margin-top","0 !important")]));case 1:return M(v([a(_,"justify-content","flex-end")]),v([a(_,"margin-top","auto !important"),a(_,"margin-bottom","0 !important")]));case 2:return M(v([a(_,"align-items","flex-end")]),v([a(_,"align-self","flex-end")]));case 3:return M(v([a(_,"align-items","flex-start")]),v([a(_,"align-self","flex-start")]));case 4:return M(v([a(_,"align-items","center")]),v([a(_,"align-self","center")]));default:return M(v([a(W,P(b.go),v([a(_,"margin-top","auto"),a(_,"margin-bottom","auto")]))]),v([a(_,"margin-top","auto !important"),a(_,"margin-bottom","auto !important")]))}})]),s2=function(e){var r=function(n){return v([a(W,P(b.go),v([a(I,yi(n),e(n))]))])};return w0(a(xa,r,Gu))},d2=function(){return v([0,1,2,3,4,5])}(),p2=v([a(_r,"html,body",v([a(_,"height","100%"),a(_,"padding","0"),a(_,"margin","0")])),a(_r,H(P(b.go),H(P(b.iw),P(b.hx))),v([a(_,"display","block"),a(I,P(b.dz),v([a(W,"img",v([a(_,"max-height","100%"),a(_,"object-fit","cover")]))])),a(I,P(b.er),v([a(W,"img",v([a(_,"max-width","100%"),a(_,"object-fit","cover")]))]))])),a(_r,P(b.go)+":focus",v([a(_,"outline","none")])),a(_r,P(b.im),v([a(_,"width","100%"),a(_,"height","auto"),a(_,"min-height","100%"),a(_,"z-index","0"),a(I,H(P(b.go),P(b.dz)),v([a(_,"height","100%"),a(W,P(b.dz),v([a(_,"height","100%")]))])),a(W,P(b.hz),v([a(I,P(b.bv),v([a(_,"position","fixed"),a(_,"z-index","20")]))]))])),a(_r,P(b.bv),v([a(_,"position","relative"),a(_,"border","none"),a(_,"display","flex"),a(_,"flex-direction","row"),a(_,"flex-basis","auto"),a(I,P(b.iw),Ou),w0(function(e){return a(Y,e,d2)}(function(e){switch(e){case 0:return a(I,P(b.gc),v([a(_,"position","absolute"),a(_,"bottom","100%"),a(_,"left","0"),a(_,"width","100%"),a(_,"z-index","20"),a(_,"margin","0 !important"),a(W,P(b.dz),v([a(_,"height","auto")])),a(W,P(b.er),v([a(_,"width","100%")])),a(_,"pointer-events","none"),a(W,"*",v([a(_,"pointer-events","auto")]))]));case 1:return a(I,P(b.gw),v([a(_,"position","absolute"),a(_,"bottom","0"),a(_,"left","0"),a(_,"height","0"),a(_,"width","100%"),a(_,"z-index","20"),a(_,"margin","0 !important"),a(_,"pointer-events","none"),a(W,"*",v([a(_,"pointer-events","auto")])),a(W,P(b.dz),v([a(_,"height","auto")]))]));case 2:return a(I,P(b.h3),v([a(_,"position","absolute"),a(_,"left","100%"),a(_,"top","0"),a(_,"height","100%"),a(_,"margin","0 !important"),a(_,"z-index","20"),a(_,"pointer-events","none"),a(W,"*",v([a(_,"pointer-events","auto")]))]));case 3:return a(I,P(b.h2),v([a(_,"position","absolute"),a(_,"right","100%"),a(_,"top","0"),a(_,"height","100%"),a(_,"margin","0 !important"),a(_,"z-index","20"),a(_,"pointer-events","none"),a(W,"*",v([a(_,"pointer-events","auto")]))]));case 4:return a(I,P(b.hz),v([a(_,"position","absolute"),a(_,"width","100%"),a(_,"height","100%"),a(_,"left","0"),a(_,"top","0"),a(_,"margin","0 !important"),a(_,"pointer-events","none"),a(W,"*",v([a(_,"pointer-events","auto")]))]));default:return a(I,P(b.gv),v([a(_,"position","absolute"),a(_,"width","100%"),a(_,"height","100%"),a(_,"left","0"),a(_,"top","0"),a(_,"margin","0 !important"),a(_,"z-index","0"),a(_,"pointer-events","none"),a(W,"*",v([a(_,"pointer-events","auto")]))]))}}))])),a(_r,P(b.go),v([a(_,"position","relative"),a(_,"border","none"),a(_,"flex-shrink","0"),a(_,"display","flex"),a(_,"flex-direction","row"),a(_,"flex-basis","auto"),a(_,"resize","none"),a(_,"font-feature-settings","inherit"),a(_,"box-sizing","border-box"),a(_,"margin","0"),a(_,"padding","0"),a(_,"border-width","0"),a(_,"border-style","solid"),a(_,"font-size","inherit"),a(_,"color","inherit"),a(_,"font-family","inherit"),a(_,"line-height","1"),a(_,"font-weight","inherit"),a(_,"text-decoration","none"),a(_,"font-style","inherit"),a(I,P(b.es),v([a(_,"flex-wrap","wrap")])),a(I,P(b.fx),v([a(_,"-moz-user-select","none"),a(_,"-webkit-user-select","none"),a(_,"-ms-user-select","none"),a(_,"user-select","none")])),a(I,P(b.gY),v([a(_,"cursor","pointer")])),a(I,P(b.gZ),v([a(_,"cursor","text")])),a(I,P(b.ia),v([a(_,"pointer-events","none !important")])),a(I,P(b.cu),v([a(_,"pointer-events","auto !important")])),a(I,P(b.bf),v([a(_,"opacity","0")])),a(I,P(b.a7),v([a(_,"opacity","1")])),a(I,P(H(b.ht,b.bf))+":hover",v([a(_,"opacity","0")])),a(I,P(H(b.ht,b.a7))+":hover",v([a(_,"opacity","1")])),a(I,P(H(b.hg,b.bf))+":focus",v([a(_,"opacity","0")])),a(I,P(H(b.hg,b.a7))+":focus",v([a(_,"opacity","1")])),a(I,P(H(b.df,b.bf))+":active",v([a(_,"opacity","0")])),a(I,P(H(b.df,b.a7))+":active",v([a(_,"opacity","1")])),a(I,P(b.fZ),v([a(_,"transition",a(re,", ",a(Y,function(e){return e+" 160ms"},v(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,P(b.ip),v([a(_,"overflow","auto"),a(_,"flex-shrink","1")])),a(I,P(b.iq),v([a(_,"overflow-x","auto"),a(I,P(b.ao),v([a(_,"flex-shrink","1")]))])),a(I,P(b.ir),v([a(_,"overflow-y","auto"),a(I,P(b.aI),v([a(_,"flex-shrink","1")])),a(I,P(b.iw),v([a(_,"flex-shrink","1")]))])),a(I,P(b.gQ),v([a(_,"overflow","hidden")])),a(I,P(b.gR),v([a(_,"overflow-x","hidden")])),a(I,P(b.gS),v([a(_,"overflow-y","hidden")])),a(I,P(b.eq),v([a(_,"width","auto")])),a(I,P(b.cr),v([a(_,"border-width","0")])),a(I,P(b.gD),v([a(_,"border-style","dashed")])),a(I,P(b.gE),v([a(_,"border-style","dotted")])),a(I,P(b.gF),v([a(_,"border-style","solid")])),a(I,P(b.af),v([a(_,"white-space","pre"),a(_,"display","inline-block")])),a(I,P(b.hH),v([a(_,"line-height","1.05"),a(_,"background","transparent"),a(_,"text-align","inherit")])),a(I,P(b.iw),Ou),a(I,P(b.ao),v([a(_,"display","flex"),a(_,"flex-direction","row"),a(W,P(b.go),v([a(_,"flex-basis","0%"),a(I,P(b.f8),v([a(_,"flex-basis","auto")])),a(I,P(b.e6),v([a(_,"flex-basis","auto")]))])),a(W,P(b.dz),v([a(_,"align-self","stretch !important")])),a(W,P(b.eT),v([a(_,"align-self","stretch !important")])),a(W,P(b.er),v([a(_,"flex-grow","100000")])),a(W,P(b.cy),v([a(_,"flex-grow","0"),a(_,"flex-basis","auto"),a(_,"align-self","stretch")])),a(W,"u:first-of-type."+b.gk,v([a(_,"flex-grow","1")])),a(W,"s:first-of-type."+b.gi,v([a(_,"flex-grow","1"),a(W,P(b.gf),v([a(_,"margin-left","auto !important")]))])),a(W,"s:last-of-type."+b.gi,v([a(_,"flex-grow","1"),a(W,P(b.gf),v([a(_,"margin-right","auto !important")]))])),a(W,"s:only-of-type."+b.gi,v([a(_,"flex-grow","1"),a(W,P(b.gg),v([a(_,"margin-top","auto !important"),a(_,"margin-bottom","auto !important")]))])),a(W,"s:last-of-type."+(b.gi+" ~ u"),v([a(_,"flex-grow","0")])),a(W,"u:first-of-type."+(b.gk+(" ~ s."+b.gi)),v([a(_,"flex-grow","0")])),St(function(e){switch(e){case 0:return M(v([a(_,"align-items","flex-start")]),v([a(_,"align-self","flex-start")]));case 1:return M(v([a(_,"align-items","flex-end")]),v([a(_,"align-self","flex-end")]));case 2:return M(v([a(_,"justify-content","flex-end")]),T);case 3:return M(v([a(_,"justify-content","flex-start")]),T);case 4:return M(v([a(_,"justify-content","center")]),T);default:return M(v([a(_,"align-items","center")]),v([a(_,"align-self","center")]))}}),a(I,P(b.iz),v([a(_,"justify-content","space-between")])),a(I,P(b.cI),v([a(_,"align-items","baseline")]))])),a(I,P(b.aI),v([a(_,"display","flex"),a(_,"flex-direction","column"),a(W,P(b.go),v([a(_,"flex-basis","0px"),a(_,"min-height","min-content"),a(I,P(b.eS),v([a(_,"flex-basis","auto")]))])),a(W,P(b.dz),v([a(_,"flex-grow","100000")])),a(W,P(b.er),v([a(_,"width","100%")])),a(W,P(b.f9),v([a(_,"width","100%")])),a(W,P(b.eq),v([a(_,"align-self","flex-start")])),a(W,"u:first-of-type."+b.gh,v([a(_,"flex-grow","1")])),a(W,"s:first-of-type."+b.gj,v([a(_,"flex-grow","1"),a(W,P(b.gg),v([a(_,"margin-top","auto !important"),a(_,"margin-bottom","0 !important")]))])),a(W,"s:last-of-type."+b.gj,v([a(_,"flex-grow","1"),a(W,P(b.gg),v([a(_,"margin-bottom","auto !important"),a(_,"margin-top","0 !important")]))])),a(W,"s:only-of-type."+b.gj,v([a(_,"flex-grow","1"),a(W,P(b.gg),v([a(_,"margin-top","auto !important"),a(_,"margin-bottom","auto !important")]))])),a(W,"s:last-of-type."+(b.gj+" ~ u"),v([a(_,"flex-grow","0")])),a(W,"u:first-of-type."+(b.gh+(" ~ s."+b.gj)),v([a(_,"flex-grow","0")])),St(function(e){switch(e){case 0:return M(v([a(_,"justify-content","flex-start")]),v([a(_,"margin-bottom","auto")]));case 1:return M(v([a(_,"justify-content","flex-end")]),v([a(_,"margin-top","auto")]));case 2:return M(v([a(_,"align-items","flex-end")]),v([a(_,"align-self","flex-end")]));case 3:return M(v([a(_,"align-items","flex-start")]),v([a(_,"align-self","flex-start")]));case 4:return M(v([a(_,"align-items","center")]),v([a(_,"align-self","center")]));default:return M(v([a(_,"justify-content","center")]),T)}}),a(W,P(b.cy),v([a(_,"flex-grow","0"),a(_,"flex-basis","auto"),a(_,"width","100%"),a(_,"align-self","stretch !important")])),a(I,P(b.iz),v([a(_,"justify-content","space-between")]))])),a(I,P(b.hl),v([a(_,"display","-ms-grid"),a(W,".gp",v([a(W,P(b.go),v([a(_,"width","100%")]))])),a(v2,M("display","grid"),v([M("display","grid")])),s2(function(e){switch(e){case 0:return v([a(_,"justify-content","flex-start")]);case 1:return v([a(_,"justify-content","flex-end")]);case 2:return v([a(_,"align-items","flex-end")]);case 3:return v([a(_,"align-items","flex-start")]);case 4:return v([a(_,"align-items","center")]);default:return v([a(_,"justify-content","center")])}})])),a(I,P(b.fB),v([a(_,"display","block"),a(W,P(b.go+":first-child"),v([a(_,"margin","0 !important")])),a(W,P(b.go+(yi(3)+(":first-child + ."+b.go))),v([a(_,"margin","0 !important")])),a(W,P(b.go+(yi(2)+(":first-child + ."+b.go))),v([a(_,"margin","0 !important")])),St(function(e){switch(e){case 0:return M(T,T);case 1:return M(T,T);case 2:return M(T,v([a(_,"float","right"),a(I,"::after",v([a(_,"content",'""'),a(_,"display","table"),a(_,"clear","both")]))]));case 3:return M(T,v([a(_,"float","left"),a(I,"::after",v([a(_,"content",'""'),a(_,"display","table"),a(_,"clear","both")]))]));case 4:return M(T,T);default:return M(T,T)}})])),a(I,P(b.hD),v([a(_,"white-space","pre-wrap !important"),a(_,"height","100%"),a(_,"width","100%"),a(_,"background-color","transparent")])),a(I,P(b.hG),v([a(I,P(b.iw),v([a(_,"flex-basis","auto")]))])),a(I,P(b.hF),v([a(_,"white-space","pre-wrap !important"),a(_,"cursor","text"),a(W,P(b.hE),v([a(_,"white-space","pre-wrap !important"),a(_,"color","transparent")]))])),a(I,P(b.fC),v([a(_,"display","block"),a(_,"white-space","normal"),a(_,"overflow-wrap","break-word"),a(I,P(b.dx),v([a(_,"z-index","0"),a(W,P(b.gv),v([a(_,"z-index","-1")]))])),a(_0,P(b.af),v([a(_,"display","inline"),a(_,"white-space","normal")])),a(_0,P(b.fC),v([a(_,"display","inline"),a(I,"::after",v([a(_,"content","none")])),a(I,"::before",v([a(_,"content","none")]))])),a(_0,P(b.iw),v([a(_,"display","inline"),a(_,"white-space","normal"),a(I,P(b.f8),v([a(_,"display","inline-block")])),a(I,P(b.hz),v([a(_,"display","flex")])),a(I,P(b.gv),v([a(_,"display","flex")])),a(I,P(b.gc),v([a(_,"display","flex")])),a(I,P(b.gw),v([a(_,"display","flex")])),a(I,P(b.h3),v([a(_,"display","flex")])),a(I,P(b.h2),v([a(_,"display","flex")])),a(W,P(b.af),v([a(_,"display","inline"),a(_,"white-space","normal")]))])),a(W,P(b.ao),v([a(_,"display","inline")])),a(W,P(b.aI),v([a(_,"display","inline-flex")])),a(W,P(b.hl),v([a(_,"display","inline-grid")])),St(function(e){switch(e){case 0:return M(T,T);case 1:return M(T,T);case 2:return M(T,v([a(_,"float","right")]));case 3:return M(T,v([a(_,"float","left")]));case 4:return M(T,T);default:return M(T,T)}})])),a(I,".hidden",v([a(_,"display","none")])),a(I,P(b.iX),v([a(_,"font-weight","100")])),a(I,P(b.iO),v([a(_,"font-weight","200")])),a(I,P(b.iS),v([a(_,"font-weight","300")])),a(I,P(b.iU),v([a(_,"font-weight","400")])),a(I,P(b.iT),v([a(_,"font-weight","500")])),a(I,P(b.iW),v([a(_,"font-weight","600")])),a(I,P(b.gB),v([a(_,"font-weight","700")])),a(I,P(b.iN),v([a(_,"font-weight","800")])),a(I,P(b.iP),v([a(_,"font-weight","900")])),a(I,P(b.hN),v([a(_,"font-style","italic")])),a(I,P(b.iF),v([a(_,"text-decoration","line-through")])),a(I,P(b.i3),v([a(_,"text-decoration","underline"),a(_,"text-decoration-skip-ink","auto"),a(_,"text-decoration-skip","ink")])),a(I,H(P(b.i3),P(b.iF)),v([a(_,"text-decoration","line-through underline"),a(_,"text-decoration-skip-ink","auto"),a(_,"text-decoration-skip","ink")])),a(I,P(b.iY),v([a(_,"font-style","normal")])),a(I,P(b.iQ),v([a(_,"text-align","justify")])),a(I,P(b.c6),v([a(_,"text-align","justify-all")])),a(I,P(b.iM),v([a(_,"text-align","center")])),a(I,P(b.iV),v([a(_,"text-align","right")])),a(I,P(b.iR),v([a(_,"text-align","left")])),a(I,".modal",v([a(_,"position","fixed"),a(_,"left","0"),a(_,"top","0"),a(_,"width","100%"),a(_,"height","100%"),a(_,"pointer-events","none")]))]))]),Pn=function(e){return v([a(_r,".v-"+e,v([a(_,"font-feature-settings",'"'+(e+'"'))])),a(_r,".v-"+(e+"-off"),v([a(_,"font-feature-settings",'"'+(e+'" 0'))]))])},g2=ur(v([a(Y,function(e){return a(_r,".border-"+D(e),v([a(_,"border-width",D(e)+"px")]))},a($n,0,6)),a(Y,function(e){return a(_r,".font-size-"+D(e),v([a(_,"font-size",D(e)+"px")]))},a($n,8,32)),a(Y,function(e){return a(_r,".p-"+D(e),v([a(_,"padding",D(e)+"px")]))},a($n,0,24)),v([a(_r,".v-smcp",v([a(_,"font-variant","small-caps")])),a(_r,".v-smcp-off",v([a(_,"font-variant","normal")]))]),Pn("zero"),Pn("onum"),Pn("liga"),Pn("dlig"),Pn("ordn"),Pn("tnum"),Pn("afrc"),Pn("frac")])),h2=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(b.go+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(b.go+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),b2=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,_2=`
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
`,w2=`
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
`,x2=`
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
`,y2="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(P(b.go)+(P(b.ao)+(" > "+(P(b.go)+(" { flex-basis: auto !important; } "+(P(b.go)+(P(b.ao)+(" > "+(P(b.go)+(P(b.cy)+(" { flex-basis: auto !important; }}"+(b2+(_2+(x2+(w2+h2))))))))))))))),ea=function(e){return a(re,"",e)},ya=m(function(e,r){return{cv:r,K:T,aP:T,ap:e}}),Sa=m(function(e,r){var n=e,t=m(function(o,l){switch(o.$){case 0:var u=o.a,$=o.b;return ie(l,{aP:a(j,M(u,$),l.aP)});case 3:var f=o.a,d=f.a,p=f.b,g=o.b;return ie(l,{K:a(j,{cv:`
}`,K:T,aP:g,ap:"@supports ("+(d+(":"+(p+(") {"+n.ap))))},l.K)});case 5:var h=o.a,s=o.b;return ie(l,{K:a(j,a(Sa,a(ya,n.ap+(" + "+h),""),s),l.K)});case 1:var w=o.a,x=o.b;return ie(l,{K:a(j,a(Sa,a(ya,n.ap+(" > "+w),""),x),l.K)});case 2:var w=o.a,x=o.b;return ie(l,{K:a(j,a(Sa,a(ya,n.ap+(" "+w),""),x),l.K)});case 4:var S=o.a,C=o.b;return ie(l,{K:a(j,a(Sa,a(ya,H(n.ap,S),""),C),l.K)});default:var y=o.a;return ie(l,{K:a(j,a(Sa,a(ya,n.ap,""),y),l.K)})}});return i(qe,t,n,r)}),S2=function(e){var r=function(o){return ea(a(Y,function(l){var u=l.a,$=l.b;return u+(":"+($+";"))},o))},n=function(o){var l=o.aP;return l.b?o.ap+("{"+(r(o.aP)+(o.cv+"}"))):""},t=function(o){var l=o;return H(n(l),ea(a(Y,t,l.K)))};return ea(a(Y,t,i(qe,m(function(o,l){var u=o.a,$=o.b;return a(j,a(Sa,a(ya,u,""),$),l)}),T,e)))},Uu=H(y2,S2(H(p2,g2))),Mn=Ro,qu=function(e){var r=e.fv;switch(r){case 0:return i(Zr,"div",T,v([i(Zr,"style",T,v([Mn(Uu)]))]));case 1:return Mn("");default:return i(Zr,"elm-ui-static-rules",v([a(Hu,"rules",p0(Uu))]),T)}},C2=m(function(e,r){return cn(i(Ee,D3(e),L3(),r))}),z2=function(e){return cn(i(Ee,m(function(r,n){var t=r.a,o=r.b;return i(T3,t,o,n)}),k3(),e))},P2=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.h_;return'"'+(r+'"')}},M2=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},j2=function(e){if(e.$===5){var r=e.a;return a(gt,M2,r.f2)}else return!1},Ca=m(function(e,r){return fe(e,r)<0?e:r}),Ct=k(function(e,r,n){var t=r.a,o=r.b;return e?n+(`
  `+(t+(": "+(o+" !important;")))):n+(`
  `+(t+(": "+(o+";"))))}),Te=q(function(e,r,n,t){if(r.$===1)return v([n+("{"+(i(Ee,Ct(!1),"",t)+`
}`))]);var o=r.a;switch(o){case 1:var l=e.ht;switch(l){case 0:return T;case 2:return v([n+("-hv {"+(i(Ee,Ct(!0),"",t)+`
}`))]);default:return v([n+("-hv:hover {"+(i(Ee,Ct(!1),"",t)+`
}`))])}case 0:var u=i(Ee,Ct(!1),"",t);return v([n+("-fs:focus {"+(u+`
}`)),"."+(b.go+(":focus "+(n+"-fs  {")))+(u+`
}`),n+"-fs:focus-within {"+(u+`
}`),".ui-slide-bar:focus + "+(P(b.go)+(" .focusable-thumb"+(n+"-fs {")))+(u+`
}`)]);default:return v([n+("-act:active {"+(i(Ee,Ct(!1),"",t)+`
}`))])}}),L2=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+D(n)))}},k2=function(e){if(e.$===5){var r=e.a;return V(a(re,", ",a(Y,L2,r.f2)))}else return E},T2=function(e){switch(e.$){case 0:return E;case 1:var r=e.a,n=r.a,t=r.b,o=r.c;return V("translate3d("+(ne(n)+("px, "+(ne(t)+("px, "+(ne(o)+"px)"))))));default:var l=e.a,u=l.a,$=l.b,f=l.c,d=e.b,p=d.a,g=d.b,h=d.c,s=e.c,w=s.a,x=s.b,S=s.c,C=e.d,y="translate3d("+(ne(u)+("px, "+(ne($)+("px, "+(ne(f)+"px)"))))),z="scale3d("+(ne(p)+(", "+(ne(g)+(", "+(ne(h)+")"))))),F="rotate3d("+(ne(w)+(", "+(ne(x)+(", "+(ne(S)+(", "+(ne(C)+"rad)")))))));return V(y+(" "+(z+(" "+F))))}},x0=k(function(e,r,n){switch(r.$){case 0:var t=r.a,o=r.b;return L(Te,e,n,t,o);case 13:var l=r.a,u=r.b;return L(Te,e,n,"."+l,v([a(ae,"box-shadow",u)]));case 12:var l=r.a,$=r.b,f=a(Xe,0,a(Ca,1,1-$));return L(Te,e,n,"."+l,v([a(ae,"opacity",ne(f))]));case 2:var d=r.a;return L(Te,e,n,".font-size-"+D(d),v([a(ae,"font-size",D(d)+"px")]));case 1:var l=r.a,p=r.b,g=a(re,", ",a(zn,k2,p)),h=v([a(ae,"font-family",a(re,", ",a(Y,P2,p))),a(ae,"font-feature-settings",g),a(ae,"font-variant",a(gt,j2,p)?"small-caps":"normal")]);return L(Te,e,n,"."+l,h);case 3:var s=r.a,u=r.b,w=r.c;return L(Te,e,n,"."+s,v([a(ae,u,w)]));case 4:var s=r.a,u=r.b,x=r.c;return L(Te,e,n,"."+s,v([a(ae,u,wa(x))]));case 5:var S=r.a,C=r.b,y=r.c,z=D(y)+"px",F=D(C)+"px",J="."+b.ao,Q="."+(b.es+J),O="."+b.eA,Z="."+b.fC,X="."+b.fB,N="."+b.ez,te=ne(y/2)+"px",de=ne(C/2)+"px",Ce="."+b.aI,s="."+S,pe="."+b.go;return ur(v([L(Te,e,n,s+(J+(" > "+(pe+(" + "+pe)))),v([a(ae,"margin-left",F)])),L(Te,e,n,s+(Q+(" > "+pe)),v([a(ae,"margin",te+(" "+de))])),L(Te,e,n,s+(Ce+(" > "+(pe+(" + "+pe)))),v([a(ae,"margin-top",z)])),L(Te,e,n,s+(X+(" > "+(pe+(" + "+pe)))),v([a(ae,"margin-top",z)])),L(Te,e,n,s+(X+(" > "+N)),v([a(ae,"margin-right",F)])),L(Te,e,n,s+(X+(" > "+O)),v([a(ae,"margin-left",F)])),L(Te,e,n,H(s,Z),v([a(ae,"line-height","calc(1em + "+(D(y)+"px)"))])),L(Te,e,n,"textarea"+(pe+s),v([a(ae,"line-height","calc(1em + "+(D(y)+"px)")),a(ae,"height","calc(100% + "+(D(y)+"px)"))])),L(Te,e,n,s+(Z+(" > "+N)),v([a(ae,"margin-right",F)])),L(Te,e,n,s+(Z+(" > "+O)),v([a(ae,"margin-left",F)])),L(Te,e,n,s+(Z+"::after"),v([a(ae,"content","''"),a(ae,"display","block"),a(ae,"height","0"),a(ae,"width","0"),a(ae,"margin-top",D(-1*(y/2|0))+"px")])),L(Te,e,n,s+(Z+"::before"),v([a(ae,"content","''"),a(ae,"display","block"),a(ae,"height","0"),a(ae,"width","0"),a(ae,"margin-bottom",D(-1*(y/2|0))+"px")]))]));case 7:var S=r.a,ge=r.b,O=r.c,Pe=r.d,N=r.e,s="."+S;return L(Te,e,n,s,v([a(ae,"padding",ne(ge)+("px "+(ne(O)+("px "+(ne(Pe)+("px "+(ne(N)+"px")))))))]));case 6:var S=r.a,ge=r.b,O=r.c,Pe=r.d,N=r.e,s="."+S;return L(Te,e,n,s,v([a(ae,"border-width",D(ge)+("px "+(D(O)+("px "+(D(Pe)+("px "+(D(N)+"px")))))))]));case 8:var he=r.a,Be=k(function(Ue,nt,on){e:for(;;)switch(on.$){case 0:var zm=on.a;return D(zm)+"px";case 1:var Dr=M(Ue,nt);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var Gn=Dr.b.a;return"minmax(max-content, "+(D(Gn)+"px)")}else if(Dr.b.$===1){var On=Dr.a.a;return Dr.b,"minmax("+(D(On)+"px, max-content)")}else{var On=Dr.a.a,Gn=Dr.b.a;return"minmax("+(D(On)+("px, "+(D(Gn)+"px)")))}case 2:var ol=on.a,Ar=M(Ue,nt);if(Ar.a.$===1){if(Ar.b.$===1)return Ar.a,Ar.b,D(ol)+"fr";Ar.a;var Gn=Ar.b.a;return"minmax(max-content, "+(D(Gn)+"px)")}else if(Ar.b.$===1){var On=Ar.a.a;return Ar.b,"minmax("+(D(On)+("px, "+(D(ol)+"frfr)")))}else{var On=Ar.a.a,Gn=Ar.b.a;return"minmax("+(D(On)+("px, "+(D(Gn)+"px)")))}case 3:var So=on.a,Co=on.b,zo=V(So),Po=nt,Mo=Co;Ue=zo,nt=Po,on=Mo;continue e;default:var So=on.a,Co=on.b,zo=Ue,Po=V(So),Mo=Co;Ue=zo,nt=Po,on=Mo;continue e}}),Ae=function(Ue){return i(Be,E,E,Ue)};Ae(he.iA.a);var er=Ae(he.iA.b),Hn=function(Ue){return"grid-template-rows: "+(Ue+";")}(a(re," ",a(Y,Ae,he.$9))),et=function(Ue){return"-ms-grid-rows: "+(Ue+";")}(a(re,er,a(Y,Ae,he.au))),an=function(Ue){return"-ms-grid-columns: "+(Ue+";")}(a(re,er,a(Y,Ae,he.au))),tn="grid-row-gap:"+(Ae(he.iA.b)+";"),ma="grid-column-gap:"+(Ae(he.iA.a)+";"),Qt=function(Ue){return"grid-template-columns: "+(Ue+";")}(a(re," ",a(Y,Ae,he.au))),s=".grid-rows-"+(a(re,"-",a(Y,Jr,he.$9))+("-cols-"+(a(re,"-",a(Y,Jr,he.au))+("-space-x-"+(Jr(he.iA.a)+("-space-y-"+Jr(he.iA.b))))))),rt=s+("{"+(Qt+(Hn+(ma+(tn+"}"))))),xo="@supports (display:grid) {"+(rt+"}"),yo=s+("{"+(an+(et+"}")));return v([yo,xo]);case 9:var or=r.a,wm=a(re," ",v(["-ms-grid-row: "+(D(or.ao)+";"),"-ms-grid-row-span: "+(D(or.hq)+";"),"-ms-grid-column: "+(D(or.gT)+";"),"-ms-grid-column-span: "+(D(or.i8)+";")])),xm=a(re," ",v(["grid-row: "+(D(or.ao)+(" / "+(D(or.ao+or.hq)+";"))),"grid-column: "+(D(or.gT)+(" / "+(D(or.gT+or.i8)+";")))])),s=".grid-pos-"+(D(or.ao)+("-"+(D(or.gT)+("-"+(D(or.i8)+("-"+D(or.hq))))))),rt=s+("{"+(xm+"}")),xo="@supports (display:grid) {"+(rt+"}"),yo=s+("{"+(wm+"}"));return v([yo,xo]);case 11:var s=r.a,ym=r.b,Sm=function(Ue){return i(x0,e,Ue,V(s))};return a(xa,Sm,ym);default:var Wr=r.a,w=T2(Wr),s=h0(Wr),Kt=M(s,w);if(!Kt.a.$&&!Kt.b.$){var S=Kt.a.a,Cm=Kt.b.a;return L(Te,e,n,"."+S,v([a(ae,"transform",Cm)]))}else return T}}),D2=m(function(e,r){return z2(a(Y,function(n){var t=i(x0,e,n,E);return M(xt(n),a(C2,p0,t))},r))}),Si=m(function(e,r){var n=function(t){var o=t.a,l=t.b;return o+(": "+(l+";"))};return e+(" {"+(a(re,"",a(Y,n,r))+"}"))}),Yu=k(function(e,r,n){var t=n.a,o=n.b;return v([a(Si,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Si,"."+(e+("."+(r+("> ."+(b.af+(", ."+(e+(" ."+(r+(" > ."+b.af)))))))))),o)])}),A2=k(function(e,r,n){var t=r.a,o=r.b,l=ue(e,n)?e:n+(" ."+e);return a(re," ",H(i(Yu,l,b.ix,o),i(Yu,l,b.hh,t)))}),I2=m(function(e,r){var n=ue(e,r)?e:r+(" ."+e);return a(re," ",v([a(Si,"."+(n+("."+(b.ix+(", "+("."+(n+(" ."+b.ix))))))),v([M("line-height","1")])),a(Si,"."+(n+("."+(b.ix+("> ."+(b.af+(", ."+(n+(" ."+(b.ix+(" > ."+b.af)))))))))),v([M("vertical-align","0"),M("line-height","1")]))]))}),Ju=k(function(e,r,n){return{hq:r/e,bA:e,f3:n}}),Zu=m(function(e,r){return i(qe,m(function(n,t){return e(n)?a(j,n,t):t}),T,r)}),F2=function(e){if(e.b){var r=e.a,n=e.b;return V(i(Ee,Xe,r,n))}else return E},Xu=function(e){if(e.b){var r=e.a,n=e.b;return V(i(Ee,Ca,r,n))}else return E},Qu=function(e){var r=v([e.gJ,e.gu,e.g2,e.hT]),n=a(ze,e.g2,Xu(r)),t=a(ze,e.gu,Xu(a(Zu,function(d){return!ue(d,n)},r))),o=a(ze,e.gJ,F2(r)),l=1/(o-t),u=1-o,$=1/(o-n),f=1-o;return{gJ:i(Ju,l,o-t,u),eQ:i(Ju,$,o-n,f)}},Ku=function(e){return M(v([M("display","block")]),v([M("display","inline-block"),M("line-height",ne(e.hq)),M("vertical-align",ne(e.f3)+"em"),M("font-size",ne(e.bA)+"em")]))},B2=function(e){return i(Ee,m(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,o=t.gd;if(o.$===1)return n;var l=o.a;return V(M(Ku(function(u){return u.eQ}(Qu(l))),Ku(function(u){return u.gJ}(Qu(l)))))}else return n;else return n}),E,e)},E2=function(e){var r=function(l){if(l.$===4){var u=l.b;return V("@import url('"+(u+"');"))}else return E},n=function(l){l.a;var u=l.b,$=a(re,`
`,a(zn,r,u));return $},t=a(Y,tu,e),o=function(l){var u=l.a,$=l.b,f=B2($);if(f.$===1)return a(re,"",a(Y,I2(u),t));var d=f.a;return a(re,"",a(Y,a(A2,u,d),t))};return H(a(re,`
`,a(Y,n,e)),a(re,`
`,a(Y,o,e)))},V2=function(e){if(e.$===1){var r=e.a,n=e.b;return V(M(r,n))}else return E},e$=m(function(e,r){var n=m(function(u,$){return{c0:H($.c0,i(x0,e,u,E)),cg:function(){var f=V2(u);if(f.$===1)return $.cg;var d=f.a;return a(j,d,$.cg)}()}}),t=i(Ee,n,{c0:T,cg:T},r),o=t.cg,l=t.c0;return H(E2(o),ea(l))}),r$=m(function(e,r){var n=e.fv;switch(n){case 0:return i(Zr,"div",T,v([i(Zr,"style",T,v([Mn(a(e$,e,r))]))]));case 1:return i(Zr,"div",T,v([i(Zr,"style",T,v([Mn(a(e$,e,r))]))]));default:return i(Zr,"elm-ui-rules",v([a(Hu,"rules",a(D2,e,r))]),T)}}),n$=q(function(e,r,n,t){var o=a(r$,r,i(Ee,Nu,M(Ru,Wu(r.hg)),n).b);return e?a(j,M("static-stylesheet",qu(r)),a(j,M("dynamic-stylesheet",o),t)):a(j,M("dynamic-stylesheet",o),t)}),a$=q(function(e,r,n,t){var o=a(r$,r,i(Ee,Nu,M(Ru,Wu(r.hg)),n).b);return e?a(j,qu(r),a(j,o,t)):a(j,o,t)}),y0=me(45),zt=me(37),t$=function(e){return Q3(_l(e))},i$=rr("p"),$r=m(function(e,r){var n=r.a,t=r.b;if(e.$){var l=e.a;return ue(l&t,l)}else{var o=e.a;return ue(o&n,o)}}),o$=rr("s"),c$=rr("u"),S0=me(44),Pt=me(39),Ci=yr(function(e,r,n,t,o,l){var u=m(function(f,d){if(t.$===1){var p=t.a;return i(t$,f,d,function(){switch(o.$){case 0:return p;case 2:var h=o.a,s=o.b;return L(n$,!1,h,s,p);default:var h=o.a,s=o.b;return L(n$,!0,h,s,p)}}())}else{var g=t.a;return a(function(){switch(f){case"div":return Ve;case"p":return i$;default:return Zr(f)}}(),d,function(){switch(o.$){case 0:return g;case 2:var h=o.a,s=o.b;return L(a$,!1,h,s,g);default:var h=o.a,s=o.b;return L(a$,!0,h,s,g)}}())}}),$=function(){switch(r.$){case 0:return a(u,"div",n);case 1:var f=r.a;return a(u,f,n);default:var f=r.a,d=r.b;return i(Zr,f,n,v([a(u,d,v([Mr(b.go+(" "+b.iw))]))]))}}();switch(l){case 0:return a($r,Pt,e)&&!a($r,S0,e)?$:a($r,Bu,e)?a(c$,v([Mr(a(re," ",v([b.go,b.iw,b.cy,b.aJ,b.gk])))]),v([$])):a($r,Eu,e)?a(o$,v([Mr(a(re," ",v([b.go,b.iw,b.cy,b.aJ,b.gi])))]),v([$])):$;case 1:return a($r,zt,e)&&!a($r,y0,e)?$:a($r,Vu,e)?a(o$,v([Mr(a(re," ",v([b.go,b.iw,b.cy,b.gj])))]),v([$])):a($r,Fu,e)?a(c$,v([Mr(a(re," ",v([b.go,b.iw,b.cy,b.gh])))]),v([$])):$;default:return $}}),jn=function(e){return!e.b},Ne=Mn,R2=b.go+(" "+(b.af+(" "+(b.eq+(" "+b.dy))))),Mt=function(e){return a(Ve,v([Mr(R2)]),v([Ne(e)]))},N2=b.go+(" "+(b.af+(" "+(b.er+(" "+b.dz))))),l$=function(e){return a(Ve,v([Mr(N2)]),v([Ne(e)]))},W2=k(function(e,r,n){var t=m(function(w,x){var S=w.a,C=w.b,y=x.a,z=x.b;switch(C.$){case 0:var F=C.a;return ue(e,wi),M(a(j,M(S,F(e)),y),z);case 1:var J=C.a;return ue(e,wi),M(a(j,M(S,a(J.hu,Kn,e)),y),jn(z)?J.iG:H(J.iG,z));case 2:var Q=C.a;return M(a(j,M(S,ue(e,br)?l$(Q):Mt(Q)),y),z);default:return M(y,z)}}),o=m(function(w,x){var S=x.a,C=x.b;switch(w.$){case 0:var y=w.a;return ue(e,wi),M(a(j,y(e),S),C);case 1:var z=w.a;return ue(e,wi),M(a(j,a(z.hu,Kn,e),S),jn(C)?z.iG:H(z.iG,C));case 2:var F=w.a;return M(a(j,ue(e,br)?l$(F):Mt(F),S),C);default:return M(S,C)}});if(r.$===1){var l=r.a,u=i(qe,t,M(T,T),l),$=u.a,f=u.b,d=jn(f)?n.iG:H(n.iG,f);if(d.b){var p=d;return g0({hu:L(Ci,n.a3,n.a6,n.aW,Du(i(Iu,"nearby-element-pls",$,n.aZ))),iG:p})}else return _t(A(Ci,n.a3,n.a6,n.aW,Du(i(Iu,"nearby-element-pls",$,n.aZ)),Kn))}else{var g=r.a,h=i(qe,o,M(T,T),g),s=h.a,f=h.b,d=jn(f)?n.iG:H(n.iG,f);if(d.b){var p=d;return g0({hu:L(Ci,n.a3,n.a6,n.aW,Qe(a(Au,s,n.aZ))),iG:p})}else return _t(A(Ci,n.a3,n.a6,n.aW,Qe(a(Au,s,n.aZ)),Kn))}}),vr=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),H2=function(e){return{$:10,a:e}},zi=m(function(e,r){return{$:0,a:e,b:r}}),le=m(function(e,r){var n=r.a,t=r.b;if(e.$){var l=e.a;return a(zi,n,l|t)}else{var o=e.a;return a(zi,o|n,t)}}),u$=function(e){return{$:1,a:e}},Pi=m(function(e,r){return{$:3,a:e,b:r}}),$$=function(e){return{$:2,a:e}},G2=m(function(e,r){return a(Ve,v([Mr(function(){switch(e){case 0:return a(re," ",v([b.bv,b.iw,b.gc]));case 1:return a(re," ",v([b.bv,b.iw,b.gw]));case 2:return a(re," ",v([b.bv,b.iw,b.h3]));case 3:return a(re," ",v([b.bv,b.iw,b.h2]));case 4:return a(re," ",v([b.bv,b.iw,b.hz]));default:return a(re," ",v([b.bv,b.iw,b.gv]))}}())]),v([function(){switch(r.$){case 3:return Mn("");case 2:var n=r.a;return Mt(n);case 0:var t=r.a;return t(br);default:var o=r.a;return a(o.hu,Kn,br)}}()]))}),O2=k(function(e,r,n){var t=a(G2,e,r);switch(n.$){case 0:return e===5?u$(v([t])):$$(v([t]));case 1:var o=n.a;return e===5?u$(a(j,t,o)):a(Pi,o,v([t]));case 2:var l=n.a;return e===5?a(Pi,v([t]),l):$$(a(j,t,l));default:var o=n.a,l=n.b;return e===5?a(Pi,a(j,t,o),l):a(Pi,o,a(j,t,l))}}),v$=m(function(e,r){return{$:2,a:e,b:r}}),Ln=function(e){return{$:1,a:e}},ra=m(function(e,r){switch(r.$){case 0:return Ln(e);case 1:var n=r.a;return a(v$,n,e);default:var t=r.a,o=r.b;return a(v$,t,o)}}),U2=function(e){switch(e){case 0:return b.dg+(" "+b.ez);case 2:return b.dg+(" "+b.eA);default:return b.dg+(" "+b.gf)}},q2=function(e){switch(e){case 0:return b.dh+(" "+b.gl);case 2:return b.dh+(" "+b.ge);default:return b.dh+(" "+b.gg)}},jt=m(function(e,r){return a(Ir,a1(e),wl(r))}),Xr=q(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),kn=function(e){return{$:1,a:e}},Y2=m(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var o=r.a;return kn(B(o,0,0));case 1:var l=r.a;return kn(B(0,l,0));case 2:var u=r.a;return kn(B(0,0,u));case 3:var n=r.a;return kn(n);case 4:var n=r.a,s=r.b;return L(Xr,B(0,0,0),B(1,1,1),n,s);default:var n=r.a;return L(Xr,B(0,0,0),n,B(0,0,1),0)}case 1:var t=e.a,o=t.a,l=t.b,u=t.c;switch(r.$){case 0:var $=r.a;return kn(B($,l,u));case 1:var f=r.a;return kn(B(o,f,u));case 2:var d=r.a;return kn(B(o,l,d));case 3:var n=r.a;return kn(n);case 4:var n=r.a,s=r.b;return L(Xr,t,B(1,1,1),n,s);default:var p=r.a;return L(Xr,t,p,B(0,0,1),0)}default:var t=e.a,o=t.a,l=t.b,u=t.c,g=e.b,h=e.c,s=e.d;switch(r.$){case 0:var $=r.a;return L(Xr,B($,l,u),g,h,s);case 1:var f=r.a;return L(Xr,B(o,f,u),g,h,s);case 2:var d=r.a;return L(Xr,B(o,l,d),g,h,s);case 3:var w=r.a;return L(Xr,w,g,h,s);case 4:var x=r.a,S=r.b;return L(Xr,t,g,x,S);default:var C=r.a;return L(Xr,t,C,h,s)}}}),za=me(7),f$=me(36),m$=m(function(e,r){var n=e.a,t=e.b,o=r.a,l=r.b;return a(zi,n|o,t|l)}),mn=a(zi,0,0),C0=function(e){switch(e.$){case 0:var r=e.a,n=D(r),t="height-px-"+n;return B(mn,b.eS+(" "+t),v([i(vr,t,"height",n+"px")]));case 1:return B(a(le,f$,mn),b.dy,T);case 2:var o=e.a;return o===1?B(a(le,zt,mn),b.dz,T):B(a(le,zt,mn),b.eT+(" height-fill-"+D(o)),v([i(vr,b.go+("."+(b.aI+(" > "+P("height-fill-"+D(o))))),"flex-grow",D(o*1e5))]));case 3:var l=e.a,u=e.b,$="min-height-"+D(l),f=i(vr,$,"min-height",D(l)+"px !important"),d=C0(u),p=d.a,g=d.b,h=d.c;return B(a(le,y0,p),$+(" "+g),a(j,f,h));default:var s=e.a,u=e.b,$="max-height-"+D(s),f=i(vr,$,"max-height",D(s)+"px"),w=C0(u),p=w.a,g=w.b,h=w.c;return B(a(le,y0,p),$+(" "+g),a(j,f,h))}},s$=me(38),z0=function(e){switch(e.$){case 0:var r=e.a;return B(mn,b.f8+(" width-px-"+D(r)),v([i(vr,"width-px-"+D(r),"width",D(r)+"px")]));case 1:return B(a(le,s$,mn),b.eq,T);case 2:var n=e.a;return n===1?B(a(le,Pt,mn),b.er,T):B(a(le,Pt,mn),b.f9+(" width-fill-"+D(n)),v([i(vr,b.go+("."+(b.ao+(" > "+P("width-fill-"+D(n))))),"flex-grow",D(n*1e5))]));case 3:var t=e.a,o=e.b,l="min-width-"+D(t),u=i(vr,l,"min-width",D(t)+"px"),$=z0(o),f=$.a,d=$.b,p=$.c;return B(a(le,S0,f),l+(" "+d),a(j,u,p));default:var g=e.a,o=e.b,l="max-width-"+D(g),u=i(vr,l,"max-width",D(g)+"px"),h=z0(o),f=h.a,d=h.b,p=h.c;return B(a(le,S0,f),l+(" "+d),a(j,u,p))}},Mi=me(27),J2=m(function(e,r){if(ue(e,Mi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var o=r.b,l=r.c,u=r.d,$=r.e;return ue(o,u)&&ue(o,l)&&ue(o,$)&&o>=0&&o<=24;default:return!1}}),Pa=me(6),d$=me(30),p$=me(29),Z2=ye(function(e,r,n,t,o,l,u,$){e:for(;;)if($.b){var p=$.a,g=$.b;switch(p.$){case 0:var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 3:var F=p.a,J=p.b;if(a($r,F,n)){var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=J+(" "+e),s=r,w=a(le,F,n),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}case 1:var Q=p.a,h=e,s=r,w=n,x=t,S=o,C=a(j,Q,l),y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 4:var F=p.a,O=p.b;if(a($r,F,n)){var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else if(a(J2,F,O)){var h=xt(O)+(" "+e),s=r,w=a(le,F,n),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=xt(O)+(" "+e),s=r,w=a(le,F,n),x=t,S=a(j,O,o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}case 10:var F=p.a,Z=p.b,h=e,s=r,w=a(le,F,n),x=a(Y2,t,Z),S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 7:var X=p.a;if(a($r,Pa,n)){var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else switch(X.$){case 0:var N=X.a,h=b.f8+(" width-px-"+D(N))+(" "+e),s=r,w=a(le,Pa,n),x=t,S=a(j,i(vr,"width-px-"+D(N),"width",D(N)+"px"),o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 1:var h=e+(" "+b.eq),s=r,w=a(le,s$,a(le,Pa,n)),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 2:var te=X.a;if(te===1){var h=e+(" "+b.er),s=r,w=a(le,Pt,a(le,Pa,n)),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=e+(" "+(b.f9+(" width-fill-"+D(te)))),s=r,w=a(le,Pt,a(le,Pa,n)),x=t,S=a(j,i(vr,b.go+("."+(b.ao+(" > "+P("width-fill-"+D(te))))),"flex-grow",D(te*1e5)),o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}default:var de=z0(X),Ce=de.a,pe=de.b,tn=de.c,h=e+(" "+pe),s=r,w=a(m$,Ce,a(le,Pa,n)),x=t,S=H(tn,o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}case 8:var ge=p.a;if(a($r,za,n)){var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else switch(ge.$){case 0:var N=ge.a,Pe=D(N)+"px",he="height-px-"+Pe,h=b.eS+(" "+(he+(" "+e))),s=r,w=a(le,za,n),x=t,S=a(j,i(vr,he,"height ",Pe),o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 1:var h=b.dy+(" "+e),s=r,w=a(le,f$,a(le,za,n)),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 2:var te=ge.a;if(te===1){var h=b.dz+(" "+e),s=r,w=a(le,zt,a(le,za,n)),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=e+(" "+(b.eT+(" height-fill-"+D(te)))),s=r,w=a(le,zt,a(le,za,n)),x=t,S=a(j,i(vr,b.go+("."+(b.aI+(" > "+P("height-fill-"+D(te))))),"flex-grow",D(te*1e5)),o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}default:var Be=C0(ge),Ce=Be.a,pe=Be.b,tn=Be.c,h=e+(" "+pe),s=r,w=a(m$,Ce,a(le,za,n)),x=t,S=H(tn,o),C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}case 2:var Ae=p.a;switch(Ae.$){case 0:var h=e,s=a(ra,"main",r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 1:var h=e,s=a(ra,"nav",r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 2:var h=e,s=a(ra,"footer",r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 3:var h=e,s=a(ra,"aside",r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 4:var er=Ae.a;if(er<=1){var h=e,s=a(ra,"h1",r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else if(er<7){var h=e,s=a(ra,"h"+D(er),r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=e,s=a(ra,"h6",r),w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}case 9:var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 8:var h=e,s=r,w=n,x=t,S=o,C=a(j,a(jt,"role","button"),l),y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 5:var Hn=Ae.a,h=e,s=r,w=n,x=t,S=o,C=a(j,a(jt,"aria-label",Hn),l),y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 6:var h=e,s=r,w=n,x=t,S=o,C=a(j,a(jt,"aria-live","polite"),l),y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;default:var h=e,s=r,w=n,x=t,S=o,C=a(j,a(jt,"aria-live","assertive"),l),y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}case 9:var et=p.a,an=p.b,tn=function(){switch(an.$){case 3:return o;case 2:return an.a,o;case 0:return an.a,o;default:var rt=an.a;return H(o,rt.iG)}}(),h=e,s=r,w=n,x=t,S=tn,C=l,y=i(O2,et,an,u),z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e;case 6:var ma=p.a;if(a($r,d$,n)){var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=U2(ma)+(" "+e),s=r,w=function(Wr){switch(ma){case 1:return a(le,Eu,Wr);case 2:return a(le,Bu,Wr);default:return Wr}}(a(le,d$,n)),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}default:var Qt=p.a;if(a($r,p$,n)){var h=e,s=r,w=n,x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}else{var h=q2(Qt)+(" "+e),s=r,w=function(Wr){switch(Qt){case 1:return a(le,Vu,Wr);case 2:return a(le,Fu,Wr);default:return Wr}}(a(le,p$,n)),x=t,S=o,C=l,y=u,z=g;e=h,r=s,n=w,t=x,o=S,l=C,u=y,$=z;continue e}}}else{var f=h0(t);if(f.$===1)return{aW:a(j,Mr(e),l),aZ:u,a3:n,a6:r,iG:o};var d=f.a;return{aW:a(j,Mr(e+(" "+d)),l),aZ:u,a3:n,a6:r,iG:a(j,H2(t),o)}}}),X2={$:0},Q2=X2,fr=q(function(e,r,n,t){return i(W2,e,t,at(Z2,t2(e),r,mn,Q2,T,T,Xd,tr(n)))}),sn=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),K2={gs:E,gC:E,it:V({bi:0,cw:L(sn,155/255,203/255,1,1),fy:M(0,0),bA:3})},e4=function(e){var r=m(function(t,o){switch(t.$){case 0:var l=t.a,u=o.ht;return u.$===1?ie(o,{ht:V(l)}):o;case 1:var $=t.a,f=o.hg;return f.$===1?ie(o,{hg:V($)}):o;default:var d=t.a,p=o.fv;return p.$===1?ie(o,{fv:V(d)}):o}}),n=function(t){return{hg:function(){var o=t.hg;if(o.$===1)return K2;var l=o.a;return l}(),ht:function(){var o=t.ht;if(o.$===1)return 1;var l=o.a;return l}(),fv:function(){var o=t.fv;if(o.$===1)return 0;var l=o.a;return l}()}};return n(i(qe,r,{hg:E,ht:E,fv:E},e))},r4=m(function(e,r){switch(r.$){case 0:var n=r.a;return n(br);case 1:var t=r.a.iG,n=r.a.hu;return a(n,e(t),br);case 2:var o=r.a;return Mt(o);default:return Mt("")}}),n4=k(function(e,r,n){var t=e4(e),o=function(){var l=t.fv;return l===1?Tu(t):Jd(t)}();return a(r4,o,L(fr,br,Qn,r,Qe(v([n]))))}),Lt=k(function(e,r,n){return{$:4,a:e,b:r,c:n}}),g$=m(function(e,r){return{$:1,a:e,b:r}}),h$=function(e){return{$:2,a:e}},a4={$:1},_e=m(function(e,r){return{$:4,a:e,b:r}}),P0=function(e){return{$:3,a:e}},b$=me(8),_$=me(14),w$=me(5),x$=me(4),Ma=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return Fe(r)+("-"+(Fe(n)+("-"+(Fe(t)+("-"+Fe(o))))))},ji=l3,M0=c3,y$=m(function(e,r){return H(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(re,"-",M0(ji(n)));case 4:var n=e.a;return e.b,a(re,"-",M0(ji(n)));default:var n=e.a.h_;return a(re,"-",M0(ji(n)))}}())}),t4=function(){var e=v([P0("Open Sans"),P0("Helvetica"),P0("Verdana"),a4]);return v([a(_e,b$,i(Lt,"bg-"+Ma(L(sn,1,1,1,0)),"background-color",L(sn,1,1,1,0))),a(_e,_$,i(Lt,"fc-"+Ma(L(sn,0,0,0,1)),"color",L(sn,0,0,0,1))),a(_e,x$,h$(20)),a(_e,w$,a(g$,i(Ee,y$,"font-",e),e))])}(),i4=k(function(e,r,n){var t=e.h7;return i(n4,t,a(j,hr(a(re," ",v([b.im,b.go,b.iw]))),H(t4,r)),n)}),S$={$:3},C$=function(e){return{$:2,a:e}},j0=e1,z$=m(function(e,r){switch(r.$){case 1:var n=r.a;return g0({hu:m(function(l,u){return a(j0,e,a(n.hu,l,u))}),iG:n.iG});case 0:var t=r.a;return _t(a(wt,j0(e),t));case 2:var o=r.a;return C$(o);default:return S$}}),L0=z$,o4=j0,c4=function(e){return{$:0,a:e}},Me=c4,l4=n1,ve=l4,P$={$:1},Li=function(e){return{$:5,a:e}},M$=Li(0),Vr=k(function(e,r,n){return L(sn,e/255,r/255,n/255,1)}),j$=i(Vr,0,0,0),u4=Ir("d"),$4=Ir("fill"),v4=Ir("height"),L$=hl("http://www.w3.org/2000/svg"),f4=L$("path"),m4=L$("svg"),s4=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{gm:o,gy:t,hj:n,ig:r}},d4=function(e){var r=s4(e);return"rgba("+(D(ke(r.ig*255))+(","+D(ke(r.hj*255))+(","+D(ke(r.gy*255))+(","+ne(r.gm)+")"))))},p4=Ir("viewBox"),g4=Ir("width"),ja=k(function(e,r,n){return a(m4,v([p4("0 0 100 100"),g4(D(e)),v4(D(e))]),v([a(f4,v([u4(n),$4(d4(r))]),T)]))}),h4={$:1},mr=h4,k$=function(e){return{$:7,a:e}},ee=k$,we=m(function(e,r){return L(fr,br,Qn,a(j,ee(mr),a(j,be(mr),e)),Qe(v([r])))}),T$=function(e){return{$:2,a:e}},se=T$(1),na={g6:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",hi:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",hp:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ib:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",ic:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",$8:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",iy:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",i2:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",i5:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gb:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},La={dE:260,bZ:54},dn=function(e){return a(_e,b$,i(Lt,"bg-"+Ma(e),"background-color",e))},b4=me(28),Tn=function(e){return a(_e,b4,i(Lt,"bc-"+Ma(e),"border-color",e))},ki=1,jr=m(function(e,r){return L(fr,ki,Qn,a(j,hr(b.gV+(" "+b.bM)),a(j,be(mr),a(j,ee(mr),e))),Qe(r))}),_4=i(Vr,83,83,83),D$=q(function(e,r,n,t){return L(sn,e/255,r/255,n/255,t)}),Ti=L(D$,56,56,56,.25),Ye=S$,kt=He(function(e,r,n,t,o){return{$:7,a:e,b:r,c:n,d:t,e:o}}),Tt=me(2),aa=function(e){var r=e;return a(_e,Tt,A(kt,"p-"+D(e),r,r,r,r))},A$=k(function(e,r,n){return{$:5,a:e,b:r,c:n}}),I$=me(3),F$=m(function(e,r){return"spacing-"+(D(e)+("-"+D(r)))}),Dn=function(e){return a(_e,I$,i(A$,a(F$,e,e),e,e))},w4=L(D$,0,0,0,0),x4=function(e){return{$:4,a:e}},k0=0,An=m(function(e,r){return L(fr,k0,Qn,a(j,hr(b.bM+(" "+b.aJ)),a(j,ee(mr),a(j,be(mr),e))),Qe(r))}),y4=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.hu(a(Tu,{hg:{gs:E,gC:E,it:E},ht:1,fv:0},n.iG));case 2:var t=e.a;return _i(Mn(t));default:return _i(Mn(""))}},S4=m(function(e,r){return y4(e(r))}),C4=r1,z4=m(function(e,r){return _t(i(C4,S4,e,r))}),In=function(e){return a(_e,_$,i(Lt,"fc-"+Ma(e),"color",e))},T0=i(Vr,195,195,195),Fn=m(function(e,r){return{$:3,a:e,b:r}}),B$=me(13),P4=a(Fn,B$,b.iU),M4=me(20),E$=a(Fn,M4,b.ir),ta=function(e){return a(_e,x$,h$(e))},D0=a(Fn,B$,b.gB),A0=m(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,o=r.c,l=r.d,u=r.e;return A(oe,n,t,a(e,t,o),a(A0,e,l),a(A0,e,u))}),V$=m(function(e,r){if(ue(e,r)){var n=e;return a(_e,Tt,A(kt,"p-"+D(e),n,n,n,n))}else{var t=r,o=e;return a(_e,Tt,A(kt,"p-"+(D(e)+("-"+D(r))),t,o,t,o))}}),Bn=function(e){return C$(e)},R$=function(e){return i(Zo,k(function(r,n,t){return a(j,n,t)}),T,e)},j4=m(function(e,r){return{$:3,a:e,b:r}}),L4=m(function(e,r){return{$:2,a:e,b:r}}),k4=m(function(e,r){return{$:0,a:e,b:r}}),T4=m(function(e,r){return{$:1,a:e,b:r}}),I0=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),D4=L(I0,0/255,0/255,0/255,1),Di=function(e){return{$:6,a:e}},A4=Di(0),Ai=function(e){return{$:2,a:e}},I4={$:6},N$=Ai(I4),W$=k(function(e,r,n){if(r.$===1)return r.a,L(fr,ki,Ln("label"),e,Qe(v([n])));var t=r.a,o=r.b,l=r.c,u=L(fr,br,Qn,o,Qe(v([l])));switch(t){case 2:return L(fr,ki,Ln("label"),a(j,hr(b.cI),e),Qe(v([u,n])));case 3:return L(fr,ki,Ln("label"),a(j,hr(b.cI),e),Qe(v([n,u])));case 0:return L(fr,k0,Ln("label"),a(j,hr(b.cI),e),Qe(v([n,u])));default:return L(fr,k0,Ln("label"),a(j,hr(b.cI),e),Qe(v([u,n])))}}),F0=jt,pn=Li(1),H$="Enter",F4=function(e){return{$:5,a:e}},G$=function(e){if(e.$===1){var r=e.a;return Ai(F4(r))}else return Xn},O$=function(e){return e.$===1},B4=function(e){return{$:0,a:e}},B0=bl,U$=m(function(e,r){return a(B0,e,B4(r))}),gn=function(e){return a(U$,"click",lr(e))},E4=b3,V4=function(e){return{$:2,a:e}},R4=m(function(e,r){return a(B0,e,V4(r))}),q$=function(e){var r=function(t){var o=e(t);if(o.$===1)return E4("No key matched");var l=o.a;return lr(l)},n=a(U,r,a(G,"key",_a));return Le(a(R4,"keydown",a(mt,function(t){return M(t,!0)},n)))},N4=me(21),ia=a(Fn,N4,b.gY),Y$=" ",J$=function(e){return a(Ir,"tabIndex",D(e))},W4=a(wt,Le,J$),H4=m(function(e,r){var n=r.e$,t=r.hw,o=r.gO,l=r.b1,u=H(v([O$(n)?Xn:Dn(6),Le(gn(l(!o))),N$,q$(function($){return ue($,H$)||ue($,Y$)?V(l(!o)):E}),W4(0),ia,A4,ee(se)]),e);return i(W$,a(j,Le(a(F0,"role","checkbox")),a(j,Le(a(F0,"aria-checked",o?"true":"false")),a(j,G$(n),u))),n,L(fr,br,Qn,v([pn,be(se),ee(mr)]),Qe(v([t(o)]))))}),G4=k(function(e,r,n){return H(a(ht,e-Yn(n),di(r)),n)}),ka=Rm,Z$=function(e){var r=function(n){return n<10?D(n):di(bu(87+n))};return e<16?r(e):H(Z$(e/16|0),r(a(ka,16,e)))},O4=a(je,Z$,a(G4,2,"0")),E0=function(e){var r=e.a,n=e.b,t=e.c,o=e.d;return{gm:o,gy:t,hj:n,ig:r}},U4=function(e){var r=E0(e),n=r.ig,t=r.hj,o=r.gy;return a(re,"",a(j,"#",a(Y,a(je,ke,O4),v([n*255,t*255,o*255]))))},V0=me(12),X$=a(Fn,V0,b.iM),R0=Di(1),oa=Nm,Qr=function(e){return e*oa/180},q4=function(e){return{$:1,a:e}},N0=m(function(e,r){return{$:10,a:e,b:r}}),Y4=me(26),J4=function(e){return a(N0,Y4,q4(-e))},Ta=k(function(e,r,n){return L(sn,e,r,n,1)}),Z4=sn,X4=m(function(e,r){return{$:4,a:e,b:r}}),Q4=me(24),K4=function(e){return a(N0,Q4,a(X4,B(0,0,1),e))},ep=me(17),ca=function(e){return a(_e,ep,i(vr,"br-"+D(e),"border-radius",D(e)+"px"))},rp=function(e){return ea(v([e.eX?"box-inset":"box-",Fe(e.fy.a)+"px",Fe(e.fy.b)+"px",Fe(e.bi)+"px",Fe(e.bA)+"px",Ma(e.cw)]))},np=me(19),ap=function(e){var r={bi:e.bi,cw:e.cw,eX:!1,fy:e.fy,bA:e.bA};return a(_e,np,i(vr,rp(r),"box-shadow",b0(r)))},Q$=m(function(e,r){return{$:12,a:e,b:r}}),K$=me(0),tp=function(e){return e?a(_e,K$,a(Q$,"transparent",1)):a(_e,K$,a(Q$,"visible",0))},W0=i(Ta,1,1,1),H0=He(function(e,r,n,t,o){return{$:6,a:e,b:r,c:n,d:t,e:o}}),Ii=function(e){return a(_e,Mi,A(H0,"b-"+D(e),e,e,e,e))},ip=m(function(e,r){return a(_e,Mi,A(H0,"b-"+(D(e)+("-"+D(r))),r,e,r,e))}),Dt=function(e){var r=e.cs,n=e.c8,t=e.hQ,o=e.ij;return ue(n,r)&&ue(t,o)?ue(n,o)?Ii(n):a(ip,t,n):a(_e,Mi,A(H0,"b-"+(D(n)+("-"+(D(o)+("-"+(D(r)+("-"+D(t))))))),n,o,r,t))},op=function(e){return a(we,v([hr("focusable"),ee(Me(14)),be(Me(14)),In(W0),pn,ta(9),X$,ca(3),Tn(e?i(Ta,59/255,153/255,252/255):i(Ta,211/255,211/255,211/255)),ap({bi:1,cw:e?L(Z4,238/255,238/255,238/255,0):i(Ta,238/255,238/255,238/255),fy:M(0,0),bA:1}),dn(e?i(Ta,59/255,153/255,252/255):W0),Ii(e?0:1),d0(a(we,v([Tn(W0),be(Me(6)),ee(Me(9)),K4(Qr(-45)),R0,pn,J4(1),tp(!e),Dt({cs:2,hQ:2,ij:0,c8:0})]),Ye))]),Ye)},cp=Pr("htmlFor"),G0=m(function(e,r){if(r.$)return E;var n=r.a;return e(n)}),Fi=m(function(e,r){if(r.$){var t=r.a;return ar(t)}else{var n=r.a;return e(n)}}),ev=q(function(e,r,n,t){return{hB:r,hW:e,h1:n,iH:t}}),lp=j1,up=d3,$p=m(function(e,r){if(r.$)return ar(e);var n=r.a;return Re(n)}),vp=M1,fp=function(e){return a(vp,{gK:!1,hZ:!1},e)},O0=function(e){if(e.b){var r=e.a;return e.b,V(r)}else return E},mp=m(function(e,r){if(r.$){var t=r.a;return ar(t)}else{var n=r.a;return Re(e(n))}}),sp=function(e){return{$:2,a:e}},dp=function(e){return{$:0,a:e}},pp=function(e){return{$:1,a:e}},U0=m(function(e,r){return qr(r)-qr(e)}),q0=k(function(e,r,n){var t=qr(n);return fe(qr(e),t)<1&&fe(t,qr(r))<1}),gp=m(function(e,r){var n=function(o){return fe(o,e)<0?Re(o):ar(pp(r))},t=i(q0,"0","9",r)?Re(a(U0,"0",r)):i(q0,"a","z",r)?Re(10+a(U0,"a",r)):i(q0,"A","Z",r)?Re(10+a(U0,"A",r)):ar(dp(r));return a(Fi,n,t)}),rv=m(function(e,r){var n=ga(r);if(n.$===1)return Re(0);var t=n.a,o=t.a,l=t.b;return a(Fi,function(u){return a(Fi,function($){return Re(u+$*e)},a(rv,e,l))},a(gp,e,o))}),hp=m(function(e,r){return 2<=e&&e<=36?a(rv,e,f0(r)):ar(sp(e))}),bp=hp(16),c=k(function(e,r,n){return L(I0,e,r,n,1)}),_p=q(function(e,r,n,t){return L(I0,e,r,n,t)}),At=Vm,wp=m(function(e,r){var n=a(At,10,e);return ke(r*n)/n}),xp=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=hu(n);if(t.b&&!t.b.b){var o=t.a;return up(v([o,o]))}else return n};return a(je,ji,a(je,function(n){return a(Ie,function(t){return i(lp,1,t,n)},fp(e))},a(je,G0(O0),a(je,Ie(function(n){return n.iH}),a(je,Ie(zn(Cr)),a(je,$p("Parsing hex regex failed"),Fi(function(n){var t=a(Y,a(je,r,a(je,bp,mp(vt))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var o=t.a.a,l=t.b,u=l.a.a,$=l.b,f=$.a.a,d=$.b,p=d.a.a;return Re(L(_p,o/255,u/255,f/255,a(wp,2,p/255)))}else break e;else{var o=t.a.a,g=t.b,u=g.a.a,h=g.b,f=h.a.a;return Re(i(c,o/255,u/255,f/255))}else break e;return ar("Parsing ints from hex failed")})))))))}(),yp=Pr("id"),Sp=rr("input"),Cp=rr("label"),nv=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zp=nv(0),Pp=Pr("name"),Mp=function(e){return M(e,!0)},jp=function(e){return{$:1,a:e}},Lp=m(function(e,r){return a(B0,e,jp(r))}),kp=m(function(e,r){return i(qe,G,r,e)}),av=a(kp,v(["target","value"]),_a),tv=function(e){return a(Lp,"input",a(mt,Mp,a(mt,e,av)))},Tp=a(Fn,V0,b.iR),iv=a(Fn,V0,b.iV),Y0=function(e){return a(ku,5,e)},J0=function(e){return a(_e,w$,a(g$,i(Ee,y$,"ff-",e),e))},Dp=i(Vr,195,195,195),ov=i(Vr,69,69,69),Ap=nv(2),Ip={$:2},Z0=Ip,Fp=me(32),Bp=me(31),cv=function(e){return i(qe,m(function(r,n){if(n.$)if(r.$===8){var o=r.a;return V(o)}else return E;else{var t=n.a;return V(t)}}),E,e)},Ep=m(function(e,r){return a(ze,r,i(qe,m(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var l=n.b,o=l.b,u=l.c;return V(M(o,u))}else return E;else{var o=t.a;return V(o)}}),E,e))}),lv=function(e){return i(qe,m(function(r,n){if(n.$)if(r.$===7){var o=r.a;return V(o)}else return E;else{var t=n.a;return V(t)}}),E,e)},Vp=me(33),Rp=Pr("max"),Np=Pr("min"),Wp=m(function(e,r){return a(_e,I$,i(A$,a(F$,e,r),e,r))}),Hp=function(e){return a(Pr,"step",e)},uv=Pr("type"),Bi=Pr("value"),Da=T$,Gp=o1,$v=m(function(e,r){switch(r.$){case 0:return Xn;case 2:var n=r.a;return Ai(n);case 6:var t=r.a;return Di(t);case 5:var o=r.a;return Li(o);case 7:var t=r.a;return k$(t);case 8:var t=r.a;return ju(t);case 3:var t=r.a,o=r.b;return a(Fn,t,o);case 4:var l=r.a,u=r.b;return a(_e,l,u);case 9:var $=r.a,f=r.b;return a(Lu,$,a(z$,e,f));case 1:var d=r.a;return Le(a(Gp,e,d));default:var p=r.a,g=r.b;return a(N0,p,g)}}),Op=k(function(e,r,n){return a(An,v([ee(se),be(a(ze,se,n)),pn]),v([a(we,v([ee(Da(ke(e*1e4)))]),Ye),a(we,a(j,pn,a(Y,$v(dt),r)),Ye),a(we,v([ee(Da(ke($e(1-e)*1e4)))]),Ye)]))}),Up=k(function(e,r,n){return a(jr,v([be(se),ee(a(ze,se,n)),R0]),v([a(we,v([be(Da(ke($e(1-e)*1e4)))]),Ye),a(we,a(j,R0,a(Y,$v(dt),r)),Ye),a(we,v([be(Da(ke(e*1e4)))]),Ye)]))}),vv=m(function(e,r){var n=lv(e),t=cv(e),o=function(){var C=M(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var y=C.a.a.a,z=C.b.a.a;return fe(z,y)>0;case 2:return!0;default:break e}else break e;return!1}(),l=(r.dc-r.cR)/(r.cQ-r.cR),u=r.iZ,$=u,f=cv($),d=function(){if(f.$===1)return"20px";if(f.a.$)return"100%";var C=f.a.a;return D(C)+"px"}(),p=lv($),g=function(){if(p.$===1)return"20px";if(p.a.$)return"100%";var C=p.a.a;return D(C)+"px"}(),h="thmb-"+(g+("-"+d)),s=v([a(ae,"width",g),a(ae,"height",d)]),w=a(Ep,e,M(5,5)),x=w.a,S=w.b;return i(W$,v([O$(r.e$)?Xn:a(Wp,x,S),N$,ee(function(){if(n.$===1)return se;if(n.a.$){var C=n.a;return C}else return mr}()),be(function(){if(t.$===1)return mr;if(t.a.$){var C=t.a;return C}else return mr}())]),r.e$,a(An,v([ee(a(ze,se,n)),be(a(ze,Me(20),t))]),v([L(fr,br,Ln("input"),v([G$(r.e$),a(_e,Fp,a(yt,'input[type="range"].'+(h+"::-moz-range-thumb"),s)),a(_e,Vp,a(yt,'input[type="range"].'+(h+"::-webkit-slider-thumb"),s)),a(_e,Bp,a(yt,'input[type="range"].'+(h+"::-ms-thumb"),s)),Le(Mr(h+" ui-slide-bar focusable-parent")),Le(tv(function(C){var y=gu(C);if(y.$===1)return r.b1(0);var z=y.a;return r.b1(z)})),Le(uv("range")),Le(Hp(function(){var C=r.c4;if(C.$===1)return"any";var y=C.a;return ne(y)}())),Le(Np(ne(r.cR))),Le(Rp(ne(r.cQ))),Le(Bi(ne(r.dc))),o?Le(a(F0,"orient","vertical")):Xn,ee(o?a(ze,Me(20),t):a(ze,se,n)),be(o?a(ze,se,n):a(ze,Me(20),t))]),Qe(T)),a(we,a(j,ee(a(ze,se,n)),a(j,be(a(ze,Me(20),t)),H(e,v([Y0(o?i(Up,l,a(j,hr("focusable-thumb"),$),n):i(Op,l,a(j,hr("focusable-thumb"),$),t))])))),Ye)])))}),qp=i(Ta,.5,.5,.5),fv=Cr,mv=function(e){var r=e.dD,n=e.dc,t=e.cR,o=e.cQ,l=e.c4,u=e.b1;return a(we,v([ee(se)]),a(vv,v([Dn(2),Y0(a(we,v([ee(se),be(Me(16)),pn,dn(ov),ca(4)]),Ye))]),{e$:a(Ap,T,a(An,v([ee(se)]),v([a(we,v([Tp]),Bn(r)),a(we,v([ee(se),iv,J0(v([Z0]))]),Bn(ne(n)))]))),cQ:o,cR:t,b1:u,c4:V(l),iZ:fv(v([ee(Me(12)),be(Me(12)),ca(4),Ii(0),Tn(qp),dn(Dp)])),dc:n}))},Yp=m(function(e,r){if(r.$)return e;var n=r.a;return n}),Jp=m(function(e,r){switch(r.$){case 3:var n=r.a;return a(H4,T,{gO:n,hw:op,e$:a(zp,T,Bn(e)),b1:j4(e)});case 0:var t=r.a,o=t.a,l=t.b,n=r.b;return mv({dD:e,cQ:l,cR:o,b1:k4(e),c4:.001*(l-o),dc:n});case 1:var u=r.a,o=u.a,l=u.b,n=r.b;return mv({dD:e,cQ:l,cR:o,b1:a(je,ke,T4(e)),c4:1,dc:n});default:var n=r.a;return a(we,v([ee(se)]),vn(a(Ve,T,v([a(Ve,v([a(ve,"margin-bottom","6px")]),v([a(Cp,v([cp(e)]),v([Ne(e)]))])),a(Sp,v([uv("color"),a(ve,"width","100%"),a(ve,"height","26px"),a(ve,"padding","0px"),yp(e),Pp(e),tv(function($){return a(L4,e,a(Yp,D4,xp($)))}),Bi(U4(n))]),T)]))))}}),X0=i(Vr,255,255,255),Zp=function(e){return a(jr,v([ee(se),Dn(8),a(V$,0,14),Dt({cs:1,hQ:0,ij:0,c8:0}),Tn(Ti)]),v([a(we,v([ta(16),D0,In(X0)]),Bn(e.h_)),a(jr,v([ee(se),Dn(6)]),R$(a(A0,Jp,e.a_)))]))},Xp=function(e){return a(jr,v([ee(se),be(se),In(T0),ta(12),P4,E$]),a(Y,Zp,e))},Qp=z4(Xp),Kp=function(e){return a(jr,v([ee(se),be(se)]),v([a(An,v([Dn(14),ee(se)]),T),a(L0,x4,Qp(Jn(e).gU))]))},e5=function(e){return{$:6,a:e}},r5=q(function(e,r,n,t){return"pad-"+(D(e)+("-"+(D(r)+("-"+(D(n)+("-"+D(t)))))))}),n5=function(e){var r=e.c8,n=e.ij,t=e.cs,o=e.hQ;if(ue(r,n)&&ue(r,t)&&ue(r,o)){var l=r;return a(_e,Tt,A(kt,"p-"+D(r),l,l,l,l))}else return a(_e,Tt,A(kt,L(r5,r,n,t,o),r,n,t,o))},a5=function(e){return{$:0,a:e}},t5=function(e){return{$:1,a:e}},i5=t5,o5=function(e){var r=e.b.ac;return Br(r)},Ei=i(Vr,255,60,0),c5=function(e){var r=e.b.ac;e.b.t;var n=e.b.ax;return Br(r)+1+Br(n)},l5=function(e){var r=M(o5(e),c5(e)-1),n=r.a,t=r.b;return a(we,v([ee(se),pn]),a(vv,v([Y0(a(An,v([ee(se),be(Me(4)),pn,dn(ov),ca(2)]),v([a(we,v([ee(Da(n)),be(se),dn(Ei),ca(2)]),Ye),a(we,v([ee(Da(t-n))]),Ye)])))]),{e$:i5(""),cQ:t,cR:0,b1:a(je,ke,a5),c4:V(1),iZ:fv(v([ee(Me(12)),be(Me(12)),ca(6),dn(Ei)])),dc:n}))},u5=Di(2),Vi=i(Vr,220,220,220),$5=function(e){var r=e.a,n=function(){return r.$?v([In(Vi)]):v([In(Ei)])}();return a(we,H(n,v([ta(14),u5,iv,J0(v([Z0]))])),Bn(a(yu,3,Jn(e).eF)))},v5=function(e){e.a;var r=e.b.ac;return a(Ie,function(n){return ke(60/(Jn(e).eF-n))},a(Ie,a(je,tu,function(n){return n.eF}),O0(a(su,59,r))))},f5=function(e){var r=v5(e);if(r.$===1)return Ye;var n=r.a;return a(we,v([ta(14),In(T0),J0(v([Z0]))]),Bn(D(n)+" FPS"))},sv={$:1},m5={$:3},s5={$:2},d5={$:8},p5=cn,g5=m(function(e,r){return a(No,e,p5(r))}),h5=g5("disabled"),b5=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},_5=function(e){return a(gt,b5,e)?Xn:hr("focusable")},Ri=a(wt,Le,gn),dv=m(function(e,r){var n=r.fz,t=r.e$;return L(fr,br,Qn,a(j,ee(mr),a(j,be(mr),a(j,hr(b.cA+(" "+(b.aJ+(" "+(b.is+(" "+b.fx)))))),a(j,ia,a(j,_5(e),a(j,Ai(d5),a(j,Le(J$(0)),function(){if(n.$===1)return a(j,Le(h5(!0)),e);var o=n.a;return a(j,Ri(o),a(j,q$(function(l){return ue(l,H$)||ue(l,Y$)?V(o):E}),e))}()))))))),Qe(v([t])))}),pv=m(function(e,r){return a(dv,T,{e$:a(we,v([ee(Me(36)),aa(3),In(r),X$,ta(12),D0,Tn(r),Ii(1),ca(4)]),Bn("REC")),fz:V(e)})}),gv=k(function(e,r,n){return a(dv,T,{e$:vn(i(ja,20,n,e)),fz:V(r)})}),w5=function(e){var r=e.a;e.b.ac,e.b.t;var n=e.b.ax;return a(An,T,v([a(we,v([ee(Me(40))]),function(){switch(r.$){case 0:return a(pv,sv,Ei);case 1:return a(pv,s5,Vi);default:return Ye}}()),a(we,v([ee(Me(28))]),function(){switch(r.$){case 0:return Ye;case 1:return jn(n)?Ye:i(gv,na.ic,m5,Vi);default:return i(gv,na.ib,sv,Vi)}}())]))},x5=function(e){return a(jr,v([ee(se)]),v([l5(e),a(An,v([ee(se),Dn(14),a(V$,0,6),pn]),v([w5(e),f5(e),$5(e)]))]))},y5=function(e){return a(jr,v([ee(se),Dn(14),n5({cs:20,hQ:0,ij:0,c8:0}),Dt({cs:1,hQ:0,ij:0,c8:0}),Tn(Ti)]),v([a(we,v([ta(16),D0,In(T0)]),Bn("Time Travel")),a(L0,e5,x5(e))]))},S5=m(function(e,r){return a(jr,v([Jn(r).c2.i8>600?dn(_4):dn(w4),Dt({cs:0,hQ:0,ij:1,c8:0}),Tn(Ti),ee(Me(La.dE)),be(se)]),v([function(){return e?Ye:a(jr,v([ee(se),be(se),aa(14),Dn(14)]),v([y5(r),Kp(r)]))}()]))}),C5=function(e){return{$:3,a:e}},hv=Li(2),z5=i(Vr,232,78,50),P5=i(Vr,48,48,48),M5=function(e){return a(Pr,"href",i1(e))},j5=Ir("rel"),L5=Pr("target"),bv=m(function(e,r){var n=r.f1,t=r.e$;return L(fr,br,Ln("a"),a(j,Le(M5(n)),a(j,Le(j5("noopener noreferrer")),a(j,Le(L5("_blank")),a(j,ee(mr),a(j,be(mr),a(j,hr(b.cA+(" "+(b.aJ+(" "+b.e6)))),e)))))),Qe(v([t])))}),It=Pr("title"),k5=i(Vr,31,161,242),T5=function(e){var r=k(function(l,u,$){var f=ue(u,e)?X0:P5;return a(we,v([fn(It(l)),Ri(C5(u)),ia,aa(7)]),vn(i(ja,40,f,$)))}),n=a(jr,v([M$]),v([i(r,"Configurations",0,na.iy)])),t=a(jr,T,v([a(bv,v([fn(It("Twitter")),hv,ia,aa(7)]),{e$:vn(i(ja,40,k5,na.i2)),f1:"https://twitter.com/AzizErkalSelman"}),a(bv,v([fn(It("Source Code")),hv,ia,aa(7)]),{e$:vn(i(ja,40,z5,na.hi)),f1:"https://github.com/erkal/elm-3d-playground-exploration"})])),o=a(we,v([ee(Me(La.bZ)),aa(4),Ri(P$),Dt({cs:1,hQ:0,ij:0,c8:0}),Tn(Ti),ia,fn(It("Activate Distraction Free Mode"))]),vn(i(ja,46,X0,na.gb)));return a(jr,v([ee(Me(La.bZ)),be(se),E$,dn(j$)]),v([o,n,t]))},D5=function(e){var r=a(we,v([ee(Me(La.bZ)),M$,aa(4),Ri(P$),ia,fn(It("Deactivate Distraction Free Mode (A)"))]),vn(i(ja,46,j$,na.gb)));return e.bP?r:a(An,v([ee(Me(La.bZ+La.dE)),be(se)]),v([T5(e.bI),a(S5,e.bI,e.W)]))},A5=k(function(e,r,n){var t=Od(n.W),o=Jn(n.W);return i(i4,{h7:v([qd({gs:E,gC:E,it:E})])},v([ee(Me($t(o.c2.i8))),be(Me($t(o.c2.hq))),fn(a(ve,"-webkit-font-smoothing","antialiased")),fn(a(ve,"pointer-events","none")),fn(a(ve,"touch-action","none")),fn(a(ve,"user-select","none")),d0(a(L0,Hd,a(r,o,t))),d0(D5(n))]),vn(a(o4,_i(Gd),a(e,o,t))))}),I5=yr(function(e,r,n,t,o,l){var u=m(function(f,d){return M(L(Bd,r,l,f,d),Mu)}),$=function(f){var d=a(ou,n,f.hI);return M({bI:0,bP:!0,W:a(Ed,d,t),ep:0},Mu)};return td({hC:$,iI:Wd,i4:u,i6:a(A5,e,o)})}),F5=function(e){return{a:xi,ag:e}},B5=function(e){var r=e.a,n=e.b,t=e.c;return M(M(n,t),function(){return r?1:0}())},_v={gt:150,b2:1,i1:F5(B5)},E5=function(e){return{H:T,p:T,t:e}},V5=function(e){return{m:E5(_v),bu:{c9:0,db:0},aR:0}},R5=k(function(e,r,n){return{a_:n,hL:r,h_:e}}),N5=function(e){return i(Ee,m(function(r,n){var t=r.a,o=r.b;return i(Zn,t,o,n)}),xi,e)},W5=k(function(e,r,n){return i(R5,e,r,N5(n))}),wv=W5,la=k(function(e,r,n){var t=r.a,o=r.b;return M(e,a(pu,M(t,o),n))}),H5=v([i(wv,"Camera",!0,v([i(la,"camera x",M(-40,40),0),i(la,"camera y",M(-40,0),0),i(la,"camera z",M(1,50),20)])),i(wv,"Parameters",!0,v([i(la,"trixel scale",M(.5,1),1),i(la,"minimum rotation degree",M(-Qr(180),0),0),i(la,"maximum rotation degree",M(0,Qr(180)),0),i(la,"rotation period",M(1,20),5)]))]),xv=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),yv=function(e){var r=e.c9,n=e.db,t=function(o){return o-qn(o)};return t(r)+t(n)<1?i(xv,0,qn(r),qn(n)):i(xv,1,qn(r),qn(n))},G5=k(function(e,r,n){var t=n;return ie(t,{a:i(Zn,t.ag(e),M(e,r),t.a)})}),O5=k(function(e,r,n){return ie(n,{i1:i(G5,e,r,n.i1)})}),U5=m(function(e,r){var n=r;return ie(n,{t:e(n.t)})}),Ni=m(function(e,r){return ie(r,{m:a(U5,e,r.m)})}),q5=m(function(e,r){return e.cX.dB?a(Ni,a(O5,yv(r.bu),r.aR),r):r}),Y5=m(function(e,r){var n=r;return ie(n,{a:a(Pu,n.ag(e),n.a)})}),J5=m(function(e,r){return ie(r,{i1:a(Y5,e,r.i1)})}),Z5=m(function(e,r){return e.e_.fR&&e.cX.dB?a(Ni,J5(yv(r.bu)),r):r}),X5=m(function(e,r){return a(Ie,function(n){if(n.$)return 0;var t=n.b;return t},a(pi,e,r.a_))}),Q5=m(function(e,r){return a(ze,0,O0(a(zn,X5(e),r)))}),K5=m(function(e,r){return a(Q5,e,r.gU)}),ua=K5,Aa=function(e){return e},Ia=function(e){return Aa(oa*(e/180))},Rr=Zm,eg=m(function(e,r){var n=e,t=r,o=t.ew-n.ew,l=t.je-n.je,u=t.ja-n.ja,$=a(Xe,$e(u),a(Xe,$e(l),$e(o)));if($){var f=o/$,d=l/$,p=u/$,g=Rr(p*p+d*d+f*f);return V({ja:p/g,je:d/g,ew:f/g})}else return E}),Wi=function(e){return e},Q0=m(function(e,r){var n=e,t=r;return{ja:t.je*n.ew-t.ew*n.je,je:t.ew*n.ja-t.ja*n.ew,ew:t.ja*n.je-t.je*n.ja}}),Ft=function(e){var r=e,n=a(Xe,$e(r.ja),a(Xe,$e(r.je),$e(r.ew)));if(n){var t=r.ew/n,o=r.je/n,l=r.ja/n,u=Rr(l*l+o*o+t*t);return V({ja:l/u,je:o/u,ew:t/u})}else return E},Hi=m(function(e,r){var n=e,t=r;return{ja:t.ja-n.ja,je:t.je-n.je,ew:t.ew-n.ew}}),rg=m(function(e,r){var n=e,t=r;return t.ja*n.ja+t.je*n.je+t.ew*n.ew}),Sv=m(function(e,r){var n=e,t=r;return fe(t,n)>0}),ng=m(function(e,r){var n=e,t=r;return fe(t,n)<0}),ag=m(function(e,r){var n=e,t=r;return{ja:t.ja-n.ja,je:t.je-n.je,ew:t.ew-n.ew}}),tg=m(function(e,r){var n=e,t=r,o=t.ja*n.ja+t.je*n.je+t.ew*n.ew;return{ja:n.ja*o,je:n.je*o,ew:n.ew*o}}),ig=function(e){var r=e;return{ja:-r.ja,je:-r.je,ew:-r.ew}},Lr=0,Cv={ja:0,je:0,ew:0},og=k(function(e,r,n){return a(G0,function(t){var o=a(ag,a(tg,t,r),r);return a(G0,function(l){var u=a(Q0,r,e),$=a(rg,n,u),f=a(Sv,Lr,$)?u:a(ng,Lr,$)?ig(u):Cv;return a(Ie,function(d){return B(t,l,d)},Ft(f))},Ft(o))},Ft(e))}),cg=function(e){var r=e,n=$e(r.ew),t=$e(r.je),o=$e(r.ja);if(fe(o,t)<1)if(fe(o,n)<1){var l=Rr(r.ew*r.ew+r.je*r.je);return{ja:0,je:-r.ew/l,ew:r.je/l}}else{var l=Rr(r.je*r.je+r.ja*r.ja);return{ja:-r.je/l,je:r.ja/l,ew:0}}else if(fe(t,n)<1){var l=Rr(r.ew*r.ew+r.ja*r.ja);return{ja:r.ew/l,je:0,ew:-r.ja/l}}else{var l=Rr(r.ja*r.ja+r.je*r.je);return{ja:-r.je/l,je:r.ja/l,ew:0}}},K0=function(e){var r=cg(e),n=r,t=n,o=e,l=o,u={ja:l.je*t.ew-l.ew*t.je,je:l.ew*t.ja-l.ja*t.ew,ew:l.ja*t.je-l.je*t.ja};return M(r,u)},Fa=function(e){var r=e;return r},Kr=function(e){return e},lg=m(function(e,r){var n=K0(e),t=n.a,o=n.b;return Kr({dW:r,eu:t,ev:o,ex:e})}),ug=function(e){var r=a(Hi,e.bq,e.eN),n=Fa(e.f0),t=a(Q0,r,n),o=i(og,r,n,t);if(o.$){var d=Ft(r);if(d.$){var g=K0(e.f0),h=g.a,s=g.b;return Kr({dW:e.eN,eu:s,ev:e.f0,ex:h})}else{var p=d.a;return a(lg,p,e.eN)}}else{var l=o.a,u=l.a,$=l.b,f=l.c;return Kr({dW:e.eN,eu:f,ev:$,ex:u})}},Nr={ja:0,je:0,ew:0},$g=function(e){return{$:0,a:e}},Je=function(e){var r=e;return $e(r)},Gi=function(e){var r=e;return .5*r},vg=Gm,fg=function(e){var r=e;return vg(r)},mg=function(e){var r=Gi(Je(e.f4)),n=fg(r);return{d7:$g(n),eo:e.eo}},En=function(e){return e},zv=En({ja:0,je:1,ew:0}),sg=function(e){var r=e.bq,n=e.eN,t=e.f0;return mg({f4:Ia(40),eo:ug({eN:Wi(n),bq:Wi(r),f0:a(ze,zv,a(eg,Nr,Wi(t)))})})},Pv=function(e){return sg({eN:{ja:a(ua,"camera x",e),je:a(ua,"camera y",e),ew:a(ua,"camera z",e)},bq:{ja:0,je:0,ew:0},f0:{ja:0,je:1,ew:0}})},dg=function(e){var r=e.ja,n=e.je;return{c9:2/Rr(3)*r,db:-1/Rr(3)*r+n}},en=function(e){return e},pg=k(function(e,r,n){return{ja:e,je:r,ew:n}}),Oi=function(e){return e},Ui=function(e){var r=e;return r},gg=m(function(e,r){var n=e,t=r;return t.ja*n.ja+t.je*n.je+t.ew*n.ew}),ec=function(e){var r=e;return r.g4},xe=m(function(e,r){var n=r;return e*n}),rc=function(e){var r=e;return r.dW},hg=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=n.h0,$=u;return(t.ja-l.ja)*$.ja+(t.je-l.je)*$.je+(t.ew-l.ew)*$.ew}),bg=k(function(e,r,n){var t=e,o=r,l=n;return{ja:l.ja+o*t.ja,je:l.je+o*t.je,ew:l.ew+o*t.ew}}),_g=m(function(e,r){var n=ec(r),t=e,o=t.h0,l=a(gg,o,n);if(l){var u=rc(r),$=a(hg,e,u),f=a(xe,-1/l,$);return V(i(bg,n,f,u))}else return E}),wg=m(function(e,r){return{ja:e,je:r}}),Mv=m(function(e,r){var n=e,t=r;return n*t}),xg=function(e){var r=e;return r},jv=function(e){var r=e;return xg(r.gr)},yg=function(e){var r=e;return r.bk},Lv=m(function(e,r){var n=r;return n/e}),$a=function(e){var r=e;return r.dW},nc=function(e){var r=e;return $a(r)},ac=function(e){var r=e;return-r},kv=En({ja:0,je:0,ew:-1}),Sg=m(function(e,r){var n=e,t=r;return t/n}),Cg=m(function(e,r){var n=e,t=r,o=n.ex,l=o,u=n.ev,$=u,f=n.eu,d=f;return{ja:d.ja*t.ja+$.ja*t.je+l.ja*t.ew,je:d.je*t.ja+$.je*t.je+l.je*t.ew,ew:d.ew*t.ja+$.ew*t.je+l.ew*t.ew}}),va=m(function(e,r){return{g4:r,dW:e}}),hn=function(e){var r=e;return{ja:-r.ja,je:-r.je,ew:-r.ew}},Vn=function(e){var r=e;return r.ex},tc=function(e){var r=e;return hn(Vn(r))},zg=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=n.eu,$=u;return(t.ja-l.ja)*$.ja+(t.je-l.je)*$.je}),ic=k(function(e,r,n){var t=e,o=r,l=n;return{ja:t,je:o,ew:l}}),Pg=q(function(e,r,n,t){var o=e,l=r,u=n,$=t,f=o.dW,d=f,p=o.ex,g=p,h=o.ev,s=h,w=o.eu,x=w;return{ja:d.ja+l*x.ja+u*s.ja+$*g.ja,je:d.je+l*x.je+u*s.je+$*g.je,ew:d.ew+l*x.ew+u*s.ew+$*g.ew}}),Mg=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=n.ev,$=u;return(t.ja-l.ja)*$.ja+(t.je-l.je)*$.je}),jg=k(function(e,r,n){var t=e,o=a(Mg,jv(r),n),l=a(zg,jv(r),n),u=t.eo,$=u,f=yg(r);f.a;var d=f.b,p=t.d7;if(p.$){var w=p.a,x=a(Sg,d,w),S=L(Pg,$,a(Mv,x,l),a(Mv,x,o),Lr);return a(va,S,tc(t.eo))}else{var g=p.a,h=ac(a(Lv,g,a(xe,.5,d))),s=a(Cg,$,a(ze,kv,Ft(i(ic,l,o,h))));return a(va,nc(t.eo),s)}}),bn=Wm,Rn=Hm,oc=function(e){var r=e;return{ja:bn(r),je:Rn(r)}},Lg=function(e){var r=e;return{ja:-r.je,je:r.ja}},kg=function(e){return e},Tg=m(function(e,r){return kg({dW:r,eu:e,ev:Lg(e)})}),Dg=m(function(e,r){return a(Tg,oc(e),r)}),Ag=k(function(e,r,n){var t=e.a,o=e.b;return{gr:a(Dg,r,n),bk:M(Je(t),Je(o))}}),Ba=function(e){var r=e;return r.ja},Ig=m(function(e,r){var n=e,t=r;return{ja:n,je:t}}),Ea=function(e){var r=e;return r.je},Va=function(e){var r=e;return r.ew},Fg=q(function(e,r,n,t){var o=n.ja,l=n.je,u=function(d){return i(pg,Ui(Ba(d)),Ui(Ea(d)),Ui(Va(d)))},$=i(Ag,M(Oi(r.i8),Oi(r.hq)),Ia(0),a(wg,0,0)),f=a(Ig,Oi(o),Oi(l));return a(Ie,u,a(_g,t,i(jg,e,$,f)))}),Ra=m(function(e,r){var n=e,t=r;return{ja:t.ja+n.ja,je:t.je+n.je,ew:t.ew+n.ew}}),Bg=m(function(e,r){return{h0:e,dW:r}}),Eg=m(function(e,r){var n=r;return a(Bg,n.h0,a(Ra,e,n.dW))}),Vg=m(function(e,r){return{h0:r,dW:e}}),Tv=En({ja:0,je:0,ew:1}),qi=Tv,Rg=a(Vg,Nr,qi),Ng=q(function(e,r,n,t){return L(Fg,r,n,t,a(Eg,i(ic,en(0),en(0),en(e)),Rg))}),Wg=Ng(0),Hg=m(function(e,r){var n=i(Wg,Pv(e),e.c2,e.cX);if(n.$===1)return r;var t=n.a;return ie(r,{bu:dg({ja:t.ja,je:t.je})})}),Gg=m(function(e,r){return a(Z5,e,a(q5,e,a(Hg,e,r)))}),Og=m(function(e,r){var n=r;return ie(n,{p:a(j,n.t,n.p),t:e})}),Ug=function(e){var r=e,n=r.H;if(n.b){var t=n.a,o=n.b;return V({H:o,p:a(j,r.t,r.p),t})}else return E},qg=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return V({H:a(j,r.t,r.H),p:o,t})}else return E},Yg=function(e){var r=e,n=r.H;if(n.b){var t=n.a,o=n.b;return ie(r,{H:o,p:a(j,t,r.p)})}else return ie(r,{H:tr(r.p),p:T})},Jg=function(e){var r=e,n=r.p;if(n.b){var t=n.a,o=n.b;return ie(r,{p:o,t})}else{var l=r.H;if(l.b){var t=l.a,o=l.b;return ie(r,{H:o,t})}else return r}},Zg=m(function(e,r){return ie(r,{gt:e})}),Xg=m(function(e,r){return ie(r,{b2:e})}),Qg=k(function(e,r,n){switch(r.$){case 0:var t=r.a;return a(Ni,Xg(t),n);case 1:var o=r.a;return ie(n,{aR:o});case 2:return a(Ni,Zg(n.aR),n);case 3:return ie(n,{m:a(ze,n.m,qg(n.m))});case 4:return ie(n,{m:a(ze,n.m,Ug(n.m))});case 5:return ie(n,{m:a(Og,_v,n.m)});case 6:return ie(n,{m:Jg(n.m)});default:return ie(n,{m:Yg(n.m)})}}),Bt=function(e){var r=e;return r.t},Na=m(function(e,r){return{$:0,a:e,b:r}}),Kg=a(Na,i(c,.001462,466e-6,.013866),v([i(c,.002267,.00127,.01857),i(c,.003299,.002249,.024239),i(c,.004547,.003392,.030909),i(c,.006006,.004692,.038558),i(c,.007676,.006136,.046836),i(c,.009561,.007713,.055143),i(c,.011663,.009417,.06346),i(c,.013995,.011225,.071862),i(c,.016561,.013136,.080282),i(c,.019373,.015133,.088767),i(c,.022447,.017199,.097327),i(c,.025793,.019331,.10593),i(c,.029432,.021503,.114621),i(c,.033385,.023702,.123397),i(c,.037668,.025921,.132232),i(c,.042253,.028139,.141141),i(c,.046915,.030324,.150164),i(c,.051644,.032474,.159254),i(c,.056449,.034569,.168414),i(c,.06134,.03659,.177642),i(c,.066331,.038504,.186962),i(c,.071429,.040294,.196354),i(c,.076637,.041905,.205799),i(c,.081962,.043328,.215289),i(c,.087411,.044556,.224813),i(c,.09299,.045583,.234358),i(c,.098702,.046402,.243904),i(c,.104551,.047008,.25343),i(c,.110536,.047399,.262912),i(c,.116656,.047574,.272321),i(c,.122908,.047536,.281624),i(c,.129285,.047293,.290788),i(c,.135778,.046856,.299776),i(c,.142378,.046242,.308553),i(c,.149073,.045468,.317085),i(c,.15585,.044559,.325338),i(c,.162689,.043554,.333277),i(c,.169575,.042489,.340874),i(c,.176493,.041402,.348111),i(c,.183429,.040329,.354971),i(c,.190367,.039309,.361447),i(c,.197297,.0384,.367535),i(c,.204209,.037632,.373238),i(c,.211095,.03703,.378563),i(c,.217949,.036615,.383522),i(c,.224763,.036405,.388129),i(c,.231538,.036405,.3924),i(c,.238273,.036621,.396353),i(c,.244967,.037055,.400007),i(c,.25162,.037705,.403378),i(c,.258234,.038571,.406485),i(c,.26481,.039647,.409345),i(c,.271347,.040922,.411976),i(c,.27785,.042353,.414392),i(c,.284321,.043933,.416608),i(c,.290763,.045644,.418637),i(c,.297178,.04747,.420491),i(c,.303568,.049396,.422182),i(c,.309935,.051407,.423721),i(c,.316282,.05349,.425116),i(c,.32261,.055634,.426377),i(c,.328921,.057827,.427511),i(c,.335217,.06006,.428524),i(c,.3415,.062325,.429425),i(c,.347771,.064616,.430217),i(c,.354032,.066925,.430906),i(c,.360284,.069247,.431497),i(c,.366529,.071579,.431994),i(c,.372768,.073915,.4324),i(c,.379001,.076253,.432719),i(c,.385228,.078591,.432955),i(c,.391453,.080927,.433109),i(c,.397674,.083257,.433183),i(c,.403894,.08558,.433179),i(c,.410113,.087896,.433098),i(c,.416331,.090203,.432943),i(c,.422549,.092501,.432714),i(c,.428768,.09479,.432412),i(c,.434987,.097069,.432039),i(c,.441207,.099338,.431594),i(c,.447428,.101597,.43108),i(c,.453651,.103848,.430498),i(c,.459875,.106089,.429846),i(c,.4661,.108322,.429125),i(c,.472328,.110547,.428334),i(c,.478558,.112764,.427475),i(c,.484789,.114974,.426548),i(c,.491022,.117179,.425552),i(c,.497257,.119379,.424488),i(c,.503493,.121575,.423356),i(c,.50973,.123769,.422156),i(c,.515967,.12596,.420887),i(c,.522206,.12815,.419549),i(c,.528444,.130341,.418142),i(c,.534683,.132534,.416667),i(c,.54092,.134729,.415123),i(c,.547157,.136929,.413511),i(c,.553392,.139134,.411829),i(c,.559624,.141346,.410078),i(c,.565854,.143567,.408258),i(c,.572081,.145797,.406369),i(c,.578304,.148039,.404411),i(c,.584521,.150294,.402385),i(c,.590734,.152563,.40029),i(c,.59694,.154848,.398125),i(c,.603139,.157151,.395891),i(c,.60933,.159474,.393589),i(c,.615513,.161817,.391219),i(c,.621685,.164184,.388781),i(c,.627847,.166575,.386276),i(c,.633998,.168992,.383704),i(c,.640135,.171438,.381065),i(c,.64626,.173914,.378359),i(c,.652369,.176421,.375586),i(c,.658463,.178962,.372748),i(c,.66454,.181539,.369846),i(c,.670599,.184153,.366879),i(c,.676638,.186807,.363849),i(c,.682656,.189501,.360757),i(c,.688653,.192239,.357603),i(c,.694627,.195021,.354388),i(c,.700576,.197851,.351113),i(c,.7065,.200728,.347777),i(c,.712396,.203656,.344383),i(c,.718264,.206636,.340931),i(c,.724103,.20967,.337424),i(c,.729909,.212759,.333861),i(c,.735683,.215906,.330245),i(c,.741423,.219112,.326576),i(c,.747127,.222378,.322856),i(c,.752794,.225706,.319085),i(c,.758422,.229097,.315266),i(c,.76401,.232554,.311399),i(c,.769556,.236077,.307485),i(c,.775059,.239667,.303526),i(c,.780517,.243327,.299523),i(c,.785929,.247056,.295477),i(c,.791293,.250856,.29139),i(c,.796607,.254728,.287264),i(c,.801871,.258674,.283099),i(c,.807082,.262692,.278898),i(c,.812239,.266786,.274661),i(c,.817341,.270954,.27039),i(c,.822386,.275197,.266085),i(c,.827372,.279517,.26175),i(c,.832299,.283913,.257383),i(c,.837165,.288385,.252988),i(c,.841969,.292933,.248564),i(c,.846709,.297559,.244113),i(c,.851384,.30226,.239636),i(c,.855992,.307038,.235133),i(c,.860533,.311892,.230606),i(c,.865006,.316822,.226055),i(c,.869409,.321827,.221482),i(c,.873741,.326906,.216886),i(c,.878001,.33206,.212268),i(c,.882188,.337287,.207628),i(c,.886302,.342586,.202968),i(c,.890341,.347957,.198286),i(c,.894305,.353399,.193584),i(c,.898192,.358911,.18886),i(c,.902003,.364492,.184116),i(c,.905735,.37014,.17935),i(c,.90939,.375856,.174563),i(c,.912966,.381636,.169755),i(c,.916462,.387481,.164924),i(c,.919879,.393389,.16007),i(c,.923215,.399359,.155193),i(c,.92647,.405389,.150292),i(c,.929644,.411479,.145367),i(c,.932737,.417627,.140417),i(c,.935747,.423831,.13544),i(c,.938675,.430091,.130438),i(c,.941521,.436405,.125409),i(c,.944285,.442772,.120354),i(c,.946965,.449191,.115272),i(c,.949562,.45566,.110164),i(c,.952075,.462178,.105031),i(c,.954506,.468744,.099874),i(c,.956852,.475356,.094695),i(c,.959114,.482014,.089499),i(c,.961293,.488716,.084289),i(c,.963387,.495462,.079073),i(c,.965397,.502249,.073859),i(c,.967322,.509078,.068659),i(c,.969163,.515946,.063488),i(c,.970919,.522853,.058367),i(c,.97259,.529798,.053324),i(c,.974176,.53678,.048392),i(c,.975677,.543798,.043618),i(c,.977092,.55085,.03905),i(c,.978422,.557937,.034931),i(c,.979666,.565057,.031409),i(c,.980824,.572209,.028508),i(c,.981895,.579392,.02625),i(c,.982881,.586606,.024661),i(c,.983779,.593849,.02377),i(c,.984591,.601122,.023606),i(c,.985315,.608422,.024202),i(c,.985952,.61575,.025592),i(c,.986502,.623105,.027814),i(c,.986964,.630485,.030908),i(c,.987337,.63789,.034916),i(c,.987622,.64532,.039886),i(c,.987819,.652773,.045581),i(c,.987926,.66025,.05175),i(c,.987945,.667748,.058329),i(c,.987874,.675267,.065257),i(c,.987714,.682807,.072489),i(c,.987464,.690366,.07999),i(c,.987124,.697944,.087731),i(c,.986694,.70554,.095694),i(c,.986175,.713153,.103863),i(c,.985566,.720782,.112229),i(c,.984865,.728427,.120785),i(c,.984075,.736087,.129527),i(c,.983196,.743758,.138453),i(c,.982228,.751442,.147565),i(c,.981173,.759135,.156863),i(c,.980032,.766837,.166353),i(c,.978806,.774545,.176037),i(c,.977497,.782258,.185923),i(c,.976108,.789974,.196018),i(c,.974638,.797692,.206332),i(c,.973088,.805409,.216877),i(c,.971468,.813122,.227658),i(c,.969783,.820825,.238686),i(c,.968041,.828515,.249972),i(c,.966243,.836191,.261534),i(c,.964394,.843848,.273391),i(c,.962517,.851476,.285546),i(c,.960626,.859069,.29801),i(c,.95872,.866624,.31082),i(c,.956834,.874129,.323974),i(c,.954997,.881569,.337475),i(c,.953215,.888942,.351369),i(c,.951546,.896226,.365627),i(c,.950018,.903409,.380271),i(c,.948683,.910473,.395289),i(c,.947594,.917399,.410665),i(c,.946809,.924168,.426373),i(c,.946392,.930761,.442367),i(c,.946403,.937159,.458592),i(c,.946903,.943348,.47497),i(c,.947937,.949318,.491426),i(c,.949545,.955063,.50786),i(c,.95174,.960587,.524203),i(c,.954529,.965896,.540361),i(c,.957896,.971003,.556275),i(c,.961812,.975924,.571925),i(c,.966249,.980678,.587206),i(c,.971162,.985282,.602154),i(c,.976511,.989753,.61676),i(c,.982257,.994109,.631017),i(c,.988362,.998364,.644924)])),e6=a(Na,i(c,.001462,466e-6,.013866),v([i(c,.002258,.001295,.018331),i(c,.003279,.002305,.023708),i(c,.004512,.00349,.029965),i(c,.007588,.006356,.044973),i(c,.009426,.008022,.052844),i(c,.011465,.009828,.06075),i(c,.013708,.011771,.068667),i(c,.016156,.01384,.076603),i(c,.018815,.016026,.084584),i(c,.021692,.01832,.09261),i(c,.024792,.020715,.100676),i(c,.028123,.023201,.108787),i(c,.031696,.025765,.116965),i(c,.03552,.028397,.125209),i(c,.039608,.03109,.133515),i(c,.04383,.03383,.141886),i(c,.048062,.036607,.150327),i(c,.05232,.039407,.158841),i(c,.056615,.04216,.167446),i(c,.060949,.044794,.176129),i(c,.06533,.047318,.184892),i(c,.069764,.049726,.193735),i(c,.074257,.052017,.20266),i(c,.078815,.054184,.211667),i(c,.083446,.056225,.220755),i(c,.088155,.058133,.229922),i(c,.092949,.059904,.239164),i(c,.097833,.061531,.248477),i(c,.102815,.06301,.257854),i(c,.107899,.064335,.267289),i(c,.113094,.065492,.276784),i(c,.118405,.066479,.286321),i(c,.123833,.067295,.295879),i(c,.12938,.067935,.305443),i(c,.135053,.068391,.315),i(c,.140858,.068654,.324538),i(c,.146785,.068738,.334011),i(c,.152839,.068637,.343404),i(c,.159018,.068354,.352688),i(c,.165308,.067911,.361816),i(c,.171713,.067305,.370771),i(c,.178212,.066576,.379497),i(c,.184801,.065732,.387973),i(c,.19146,.064818,.396152),i(c,.198177,.063862,.404009),i(c,.204935,.062907,.411514),i(c,.211718,.061992,.418647),i(c,.218512,.061158,.425392),i(c,.225302,.060445,.431742),i(c,.232077,.059889,.437695),i(c,.238826,.059517,.443256),i(c,.245543,.059352,.448436),i(c,.25222,.059415,.453248),i(c,.258857,.059706,.45771),i(c,.265447,.060237,.46184),i(c,.271994,.060994,.46566),i(c,.278493,.061978,.46919),i(c,.284951,.063168,.472451),i(c,.291366,.064553,.475462),i(c,.29774,.066117,.478243),i(c,.304081,.067835,.480812),i(c,.310382,.069702,.483186),i(c,.316654,.07169,.48538),i(c,.322899,.073782,.487408),i(c,.329114,.075972,.489287),i(c,.335308,.078236,.491024),i(c,.341482,.080564,.492631),i(c,.347636,.082946,.494121),i(c,.353773,.085373,.495501),i(c,.359898,.087831,.496778),i(c,.366012,.090314,.49796),i(c,.372116,.092816,.499053),i(c,.378211,.095332,.500067),i(c,.384299,.097855,.501002),i(c,.390384,.100379,.501864),i(c,.396467,.102902,.502658),i(c,.402548,.10542,.503386),i(c,.408629,.10793,.504052),i(c,.414709,.110431,.504662),i(c,.420791,.11292,.505215),i(c,.426877,.115395,.505714),i(c,.432967,.117855,.50616),i(c,.439062,.120298,.506555),i(c,.445163,.122724,.506901),i(c,.451271,.125132,.507198),i(c,.457386,.127522,.507448),i(c,.463508,.129893,.507652),i(c,.46964,.132245,.507809),i(c,.47578,.134577,.507921),i(c,.481929,.136891,.507989),i(c,.488088,.139186,.508011),i(c,.494258,.141462,.507988),i(c,.500438,.143719,.50792),i(c,.506629,.145958,.507806),i(c,.512831,.148179,.507648),i(c,.519045,.150383,.507443),i(c,.52527,.152569,.507192),i(c,.531507,.154739,.506895),i(c,.537755,.156894,.506551),i(c,.544015,.159033,.506159),i(c,.550287,.161158,.505719),i(c,.556571,.163269,.50523),i(c,.562866,.165368,.504692),i(c,.569172,.167454,.504105),i(c,.57549,.16953,.503466),i(c,.581819,.171596,.502777),i(c,.588158,.173652,.502035),i(c,.594508,.175701,.501241),i(c,.600868,.177743,.500394),i(c,.607238,.179779,.499492),i(c,.613617,.181811,.498536),i(c,.620005,.18384,.497524),i(c,.626401,.185867,.496456),i(c,.632805,.187893,.495332),i(c,.639216,.189921,.49415),i(c,.645633,.191952,.49291),i(c,.652056,.193986,.491611),i(c,.658483,.196027,.490253),i(c,.664915,.198075,.488836),i(c,.671349,.200133,.487358),i(c,.677786,.202203,.485819),i(c,.684224,.204286,.484219),i(c,.690661,.206384,.482558),i(c,.697098,.208501,.480835),i(c,.703532,.210638,.479049),i(c,.709962,.212797,.477201),i(c,.716387,.214982,.47529),i(c,.722805,.217194,.473316),i(c,.729216,.219437,.471279),i(c,.735616,.221713,.46918),i(c,.742004,.224025,.467018),i(c,.748378,.226377,.464794),i(c,.754737,.228772,.462509),i(c,.761077,.231214,.460162),i(c,.767398,.233705,.457755),i(c,.773695,.236249,.455289),i(c,.779968,.238851,.452765),i(c,.786212,.241514,.450184),i(c,.792427,.244242,.447543),i(c,.798608,.24704,.444848),i(c,.804752,.249911,.442102),i(c,.810855,.252861,.439305),i(c,.816914,.255895,.436461),i(c,.822926,.259016,.433573),i(c,.828886,.262229,.430644),i(c,.834791,.26554,.427671),i(c,.840636,.268953,.424666),i(c,.846416,.272473,.421631),i(c,.852126,.276106,.418573),i(c,.857763,.279857,.415496),i(c,.86332,.283729,.412403),i(c,.868793,.287728,.409303),i(c,.874176,.291859,.406205),i(c,.879464,.296125,.403118),i(c,.884651,.30053,.400047),i(c,.889731,.305079,.397002),i(c,.8947,.309773,.393995),i(c,.899552,.314616,.391037),i(c,.904281,.31961,.388137),i(c,.908884,.324755,.385308),i(c,.913354,.330052,.382563),i(c,.917689,.3355,.379915),i(c,.921884,.341098,.377376),i(c,.925937,.346844,.374959),i(c,.929845,.352734,.372677),i(c,.933606,.358764,.370541),i(c,.937221,.364929,.368567),i(c,.940687,.371224,.366762),i(c,.944006,.377643,.365136),i(c,.94718,.384178,.363701),i(c,.95021,.39082,.362468),i(c,.953099,.397563,.361438),i(c,.955849,.4044,.360619),i(c,.958464,.411324,.360014),i(c,.960949,.418323,.35963),i(c,.96331,.42539,.359469),i(c,.965549,.432519,.359529),i(c,.967671,.439703,.35981),i(c,.96968,.446936,.360311),i(c,.971582,.45421,.36103),i(c,.973381,.46152,.361965),i(c,.975082,.468861,.363111),i(c,.97669,.476226,.364466),i(c,.97821,.483612,.366025),i(c,.979645,.491014,.367783),i(c,.981,.498428,.369734),i(c,.982279,.505851,.371874),i(c,.983485,.51328,.374198),i(c,.984622,.520713,.376698),i(c,.985693,.528148,.379371),i(c,.9867,.535582,.38221),i(c,.987646,.543015,.38521),i(c,.988533,.550446,.388365),i(c,.989363,.557873,.391671),i(c,.990138,.565296,.395122),i(c,.990871,.572706,.398714),i(c,.991558,.580107,.402441),i(c,.992196,.587502,.406299),i(c,.992785,.594891,.410283),i(c,.993326,.602275,.41439),i(c,.993834,.609644,.418613),i(c,.994309,.616999,.42295),i(c,.994738,.62435,.427397),i(c,.995122,.631696,.431951),i(c,.99548,.639027,.436607),i(c,.99581,.646344,.441361),i(c,.996096,.653659,.446213),i(c,.996341,.660969,.45116),i(c,.99658,.668256,.456192),i(c,.996775,.675541,.461314),i(c,.996925,.682828,.466526),i(c,.997077,.690088,.471811),i(c,.997186,.697349,.477182),i(c,.997254,.704611,.482635),i(c,.997325,.711848,.488154),i(c,.997351,.719089,.493755),i(c,.997351,.726324,.499428),i(c,.997341,.733545,.505167),i(c,.997285,.740772,.510983),i(c,.997228,.747981,.516859),i(c,.997138,.75519,.522806),i(c,.997019,.762398,.528821),i(c,.996898,.769591,.534892),i(c,.996727,.776795,.541039),i(c,.996571,.783977,.547233),i(c,.996369,.791167,.553499),i(c,.996162,.798348,.55982),i(c,.995932,.805527,.566202),i(c,.99568,.812706,.572645),i(c,.995424,.819875,.57914),i(c,.995131,.827052,.585701),i(c,.994851,.834213,.592307),i(c,.994524,.841387,.598983),i(c,.994222,.84854,.605696),i(c,.993866,.855711,.612482),i(c,.993545,.862859,.619299),i(c,.99317,.870024,.626189),i(c,.992831,.877168,.633109),i(c,.99244,.88433,.640099),i(c,.992089,.89147,.647116),i(c,.991688,.898627,.654202),i(c,.991332,.905763,.661309),i(c,.99093,.912915,.668481),i(c,.99057,.920049,.675675),i(c,.990175,.927196,.682926),i(c,.989815,.934329,.690198),i(c,.989434,.94147,.697519),i(c,.989077,.948604,.704863),i(c,.988717,.955742,.712242),i(c,.988367,.962878,.719649),i(c,.988033,.970012,.727077),i(c,.987691,.977154,.734536),i(c,.987387,.984288,.742002),i(c,.987053,.991438,.749504)])),r6=a(Na,i(c,.2081,.1663,.5292),v([i(c,.2091,.1721,.5411),i(c,.2101,.1779,.553),i(c,.2109,.1837,.565),i(c,.2116,.1895,.5771),i(c,.2121,.1954,.5892),i(c,.2124,.2013,.6013),i(c,.2125,.2072,.6135),i(c,.2123,.2132,.6258),i(c,.2118,.2192,.6381),i(c,.2111,.2253,.6505),i(c,.2099,.2315,.6629),i(c,.2084,.2377,.6753),i(c,.2063,.244,.6878),i(c,.2038,.2503,.7003),i(c,.2006,.2568,.7129),i(c,.1968,.2632,.7255),i(c,.1921,.2698,.7381),i(c,.1867,.2764,.7507),i(c,.1802,.2832,.7634),i(c,.1728,.2902,.7762),i(c,.1641,.2975,.789),i(c,.1541,.3052,.8017),i(c,.1427,.3132,.8145),i(c,.1295,.3217,.8269),i(c,.1147,.3306,.8387),i(c,.0986,.3397,.8495),i(c,.0816,.3486,.8588),i(c,.0646,.3572,.8664),i(c,.0482,.3651,.8722),i(c,.0329,.3724,.8765),i(c,.0213,.3792,.8796),i(c,.0136,.3853,.8815),i(c,.0086,.3911,.8827),i(c,.006,.3965,.8833),i(c,.0051,.4017,.8834),i(c,.0054,.4066,.8831),i(c,.0067,.4113,.8825),i(c,.0089,.4159,.8816),i(c,.0116,.4203,.8805),i(c,.0148,.4246,.8793),i(c,.0184,.4288,.8779),i(c,.0223,.4329,.8763),i(c,.0264,.437,.8747),i(c,.0306,.441,.8729),i(c,.0349,.4449,.8711),i(c,.0394,.4488,.8692),i(c,.0437,.4526,.8672),i(c,.0477,.4564,.8652),i(c,.0514,.4602,.8632),i(c,.0549,.464,.8611),i(c,.0582,.4677,.8589),i(c,.0612,.4714,.8568),i(c,.064,.4751,.8546),i(c,.0666,.4788,.8525),i(c,.0689,.4825,.8503),i(c,.071,.4862,.8481),i(c,.0729,.4899,.846),i(c,.0746,.4937,.8439),i(c,.0761,.4974,.8418),i(c,.0773,.5012,.8398),i(c,.0782,.5051,.8378),i(c,.0789,.5089,.8359),i(c,.0794,.5129,.8341),i(c,.0795,.5169,.8324),i(c,.0793,.521,.8308),i(c,.0788,.5251,.8293),i(c,.0778,.5295,.828),i(c,.0764,.5339,.827),i(c,.0746,.5384,.8261),i(c,.0724,.5431,.8253),i(c,.0698,.5479,.8247),i(c,.0668,.5527,.8243),i(c,.0636,.5577,.8239),i(c,.06,.5627,.8237),i(c,.0562,.5677,.8234),i(c,.0523,.5727,.8231),i(c,.0484,.5777,.8228),i(c,.0445,.5826,.8223),i(c,.0408,.5874,.8217),i(c,.0372,.5922,.8209),i(c,.0342,.5968,.8198),i(c,.0317,.6012,.8186),i(c,.0296,.6055,.8171),i(c,.0279,.6097,.8154),i(c,.0265,.6137,.8135),i(c,.0255,.6176,.8114),i(c,.0248,.6214,.8091),i(c,.0243,.625,.8066),i(c,.0239,.6285,.8039),i(c,.0237,.6319,.801),i(c,.0235,.6352,.798),i(c,.0233,.6384,.7948),i(c,.0231,.6415,.7916),i(c,.023,.6445,.7881),i(c,.0229,.6474,.7846),i(c,.0227,.6503,.781),i(c,.0227,.6531,.7773),i(c,.0232,.6558,.7735),i(c,.0238,.6585,.7696),i(c,.0246,.6611,.7656),i(c,.0263,.6637,.7615),i(c,.0282,.6663,.7574),i(c,.0306,.6688,.7532),i(c,.0338,.6712,.749),i(c,.0373,.6737,.7446),i(c,.0418,.6761,.7402),i(c,.0467,.6784,.7358),i(c,.0516,.6808,.7313),i(c,.0574,.6831,.7267),i(c,.0629,.6854,.7221),i(c,.0692,.6877,.7173),i(c,.0755,.6899,.7126),i(c,.082,.6921,.7078),i(c,.0889,.6943,.7029),i(c,.0956,.6965,.6979),i(c,.1031,.6986,.6929),i(c,.1104,.7007,.6878),i(c,.118,.7028,.6827),i(c,.1258,.7049,.6775),i(c,.1335,.7069,.6723),i(c,.1418,.7089,.6669),i(c,.1499,.7109,.6616),i(c,.1585,.7129,.6561),i(c,.1671,.7148,.6507),i(c,.1758,.7168,.6451),i(c,.1849,.7186,.6395),i(c,.1938,.7205,.6338),i(c,.2033,.7223,.6281),i(c,.2128,.7241,.6223),i(c,.2224,.7259,.6165),i(c,.2324,.7275,.6107),i(c,.2423,.7292,.6048),i(c,.2527,.7308,.5988),i(c,.2631,.7324,.5929),i(c,.2735,.7339,.5869),i(c,.2845,.7354,.5809),i(c,.2953,.7368,.5749),i(c,.3064,.7381,.5689),i(c,.3177,.7394,.563),i(c,.3289,.7406,.557),i(c,.3405,.7417,.5512),i(c,.352,.7428,.5453),i(c,.3635,.7438,.5396),i(c,.3753,.7446,.5339),i(c,.3869,.7454,.5283),i(c,.3986,.7461,.5229),i(c,.4103,.7467,.5175),i(c,.4218,.7473,.5123),i(c,.4334,.7477,.5072),i(c,.4447,.7482,.5021),i(c,.4561,.7485,.4972),i(c,.4672,.7487,.4924),i(c,.4783,.7489,.4877),i(c,.4892,.7491,.4831),i(c,.5,.7491,.4786),i(c,.5106,.7492,.4741),i(c,.5212,.7492,.4698),i(c,.5315,.7491,.4655),i(c,.5418,.749,.4613),i(c,.5519,.7489,.4571),i(c,.5619,.7487,.4531),i(c,.5718,.7485,.449),i(c,.5816,.7482,.4451),i(c,.5913,.7479,.4412),i(c,.6009,.7476,.4374),i(c,.6103,.7473,.4335),i(c,.6197,.7469,.4298),i(c,.629,.7465,.4261),i(c,.6382,.746,.4224),i(c,.6473,.7456,.4188),i(c,.6564,.7451,.4152),i(c,.6653,.7446,.4116),i(c,.6742,.7441,.4081),i(c,.683,.7435,.4046),i(c,.6918,.743,.4011),i(c,.7004,.7424,.3976),i(c,.7091,.7418,.3942),i(c,.7176,.7412,.3908),i(c,.7261,.7405,.3874),i(c,.7346,.7399,.384),i(c,.743,.7392,.3806),i(c,.7513,.7385,.3773),i(c,.7596,.7378,.3739),i(c,.7679,.7372,.3706),i(c,.7761,.7364,.3673),i(c,.7843,.7357,.3639),i(c,.7924,.735,.3606),i(c,.8005,.7343,.3573),i(c,.8085,.7336,.3539),i(c,.8166,.7329,.3506),i(c,.8246,.7322,.3472),i(c,.8325,.7315,.3438),i(c,.8405,.7308,.3404),i(c,.8484,.7301,.337),i(c,.8563,.7294,.3336),i(c,.8642,.7288,.33),i(c,.872,.7282,.3265),i(c,.8798,.7276,.3229),i(c,.8877,.7271,.3193),i(c,.8954,.7266,.3156),i(c,.9032,.7262,.3117),i(c,.911,.7259,.3078),i(c,.9187,.7256,.3038),i(c,.9264,.7256,.2996),i(c,.9341,.7256,.2953),i(c,.9417,.7259,.2907),i(c,.9493,.7264,.2859),i(c,.9567,.7273,.2808),i(c,.9639,.7285,.2754),i(c,.9708,.7303,.2696),i(c,.9773,.7326,.2634),i(c,.9831,.7355,.257),i(c,.9882,.739,.2504),i(c,.9922,.7431,.2437),i(c,.9952,.7476,.2373),i(c,.9973,.7524,.231),i(c,.9986,.7573,.2251),i(c,.9991,.7624,.2195),i(c,.999,.7675,.2141),i(c,.9985,.7726,.209),i(c,.9976,.7778,.2042),i(c,.9964,.7829,.1995),i(c,.995,.788,.1949),i(c,.9933,.7931,.1905),i(c,.9914,.7981,.1863),i(c,.9894,.8032,.1821),i(c,.9873,.8083,.178),i(c,.9851,.8133,.174),i(c,.9828,.8184,.17),i(c,.9805,.8235,.1661),i(c,.9782,.8286,.1622),i(c,.9759,.8337,.1583),i(c,.9736,.8389,.1544),i(c,.9713,.8441,.1505),i(c,.9692,.8494,.1465),i(c,.9672,.8548,.1425),i(c,.9654,.8603,.1385),i(c,.9638,.8659,.1343),i(c,.9623,.8716,.1301),i(c,.9611,.8774,.1258),i(c,.96,.8834,.1215),i(c,.9593,.8895,.1171),i(c,.9588,.8958,.1126),i(c,.9586,.9022,.1082),i(c,.9587,.9088,.1036),i(c,.9591,.9155,.099),i(c,.9599,.9225,.0944),i(c,.961,.9296,.0897),i(c,.9624,.9368,.085),i(c,.9641,.9443,.0802),i(c,.9662,.9518,.0753),i(c,.9685,.9595,.0703),i(c,.971,.9673,.0651),i(c,.9736,.9752,.0597),i(c,.9763,.9831,.0538)])),n6=a(Na,i(c,.050383,.029803,.527975),v([i(c,.063536,.028426,.533124),i(c,.075353,.027206,.538007),i(c,.086222,.026125,.542658),i(c,.096379,.025165,.547103),i(c,.10598,.024309,.551368),i(c,.115124,.023556,.555468),i(c,.123903,.022878,.559423),i(c,.132381,.022258,.56325),i(c,.140603,.021687,.566959),i(c,.148607,.021154,.570562),i(c,.156421,.020651,.574065),i(c,.16407,.020171,.577478),i(c,.171574,.019706,.580806),i(c,.17895,.019252,.584054),i(c,.186213,.018803,.587228),i(c,.193374,.018354,.59033),i(c,.200445,.017902,.593364),i(c,.207435,.017442,.596333),i(c,.21435,.016973,.599239),i(c,.221197,.016497,.602083),i(c,.227983,.016007,.604867),i(c,.234715,.015502,.607592),i(c,.241396,.014979,.610259),i(c,.248032,.014439,.612868),i(c,.254627,.013882,.615419),i(c,.261183,.013308,.617911),i(c,.267703,.012716,.620346),i(c,.274191,.012109,.622722),i(c,.280648,.011488,.625038),i(c,.287076,.010855,.627295),i(c,.293478,.010213,.62949),i(c,.299855,.009561,.631624),i(c,.30621,.008902,.633694),i(c,.312543,.008239,.6357),i(c,.318856,.007576,.63764),i(c,.32515,.006915,.639512),i(c,.331426,.006261,.641316),i(c,.337683,.005618,.643049),i(c,.343925,.004991,.64471),i(c,.35015,.004382,.646298),i(c,.356359,.003798,.64781),i(c,.362553,.003243,.649245),i(c,.368733,.002724,.650601),i(c,.374897,.002245,.651876),i(c,.381047,.001814,.653068),i(c,.387183,.001434,.654177),i(c,.393304,.001114,.655199),i(c,.399411,859e-6,.656133),i(c,.405503,678e-6,.656977),i(c,.41158,577e-6,.65773),i(c,.417642,564e-6,.65839),i(c,.423689,646e-6,.658956),i(c,.429719,831e-6,.659425),i(c,.435734,.001127,.659797),i(c,.441732,.00154,.660069),i(c,.447714,.00208,.66024),i(c,.453677,.002755,.66031),i(c,.459623,.003574,.660277),i(c,.46555,.004545,.660139),i(c,.471457,.005678,.659897),i(c,.477344,.00698,.659549),i(c,.48321,.00846,.659095),i(c,.489055,.010127,.658534),i(c,.494877,.01199,.657865),i(c,.500678,.014055,.657088),i(c,.506454,.016333,.656202),i(c,.512206,.018833,.655209),i(c,.517933,.021563,.654109),i(c,.523633,.024532,.652901),i(c,.529306,.027747,.651586),i(c,.534952,.031217,.650165),i(c,.54057,.03495,.64864),i(c,.546157,.038954,.64701),i(c,.551715,.043136,.645277),i(c,.557243,.047331,.643443),i(c,.562738,.051545,.641509),i(c,.568201,.055778,.639477),i(c,.573632,.060028,.637349),i(c,.579029,.064296,.635126),i(c,.584391,.068579,.632812),i(c,.589719,.072878,.630408),i(c,.595011,.07719,.627917),i(c,.600266,.081516,.625342),i(c,.605485,.085854,.622686),i(c,.610667,.090204,.619951),i(c,.615812,.094564,.61714),i(c,.620919,.098934,.614257),i(c,.625987,.103312,.611305),i(c,.631017,.107699,.608287),i(c,.636008,.112092,.605205),i(c,.640959,.116492,.602065),i(c,.645872,.120898,.598867),i(c,.650746,.125309,.595617),i(c,.65558,.129725,.592317),i(c,.660374,.134144,.588971),i(c,.665129,.138566,.585582),i(c,.669845,.142992,.582154),i(c,.674522,.147419,.578688),i(c,.67916,.151848,.575189),i(c,.683758,.156278,.57166),i(c,.688318,.160709,.568103),i(c,.69284,.165141,.564522),i(c,.697324,.169573,.560919),i(c,.701769,.174005,.557296),i(c,.706178,.178437,.553657),i(c,.710549,.182868,.550004),i(c,.714883,.187299,.546338),i(c,.719181,.191729,.542663),i(c,.723444,.196158,.538981),i(c,.72767,.200586,.535293),i(c,.731862,.205013,.531601),i(c,.736019,.209439,.527908),i(c,.740143,.213864,.524216),i(c,.744232,.218288,.520524),i(c,.748289,.222711,.516834),i(c,.752312,.227133,.513149),i(c,.756304,.231555,.509468),i(c,.760264,.235976,.505794),i(c,.764193,.240396,.502126),i(c,.76809,.244817,.498465),i(c,.771958,.249237,.494813),i(c,.775796,.253658,.491171),i(c,.779604,.258078,.487539),i(c,.783383,.2625,.483918),i(c,.787133,.266922,.480307),i(c,.790855,.271345,.476706),i(c,.794549,.27577,.473117),i(c,.798216,.280197,.469538),i(c,.801855,.284626,.465971),i(c,.805467,.289057,.462415),i(c,.809052,.293491,.45887),i(c,.812612,.297928,.455338),i(c,.816144,.302368,.451816),i(c,.819651,.306812,.448306),i(c,.823132,.311261,.444806),i(c,.826588,.315714,.441316),i(c,.830018,.320172,.437836),i(c,.833422,.324635,.434366),i(c,.836801,.329105,.430905),i(c,.840155,.33358,.427455),i(c,.843484,.338062,.424013),i(c,.846788,.342551,.420579),i(c,.850066,.347048,.417153),i(c,.853319,.351553,.413734),i(c,.856547,.356066,.410322),i(c,.85975,.360588,.406917),i(c,.862927,.365119,.403519),i(c,.866078,.36966,.400126),i(c,.869203,.374212,.396738),i(c,.872303,.378774,.393355),i(c,.875376,.383347,.389976),i(c,.878423,.387932,.3866),i(c,.881443,.392529,.383229),i(c,.884436,.397139,.37986),i(c,.887402,.401762,.376494),i(c,.89034,.406398,.37313),i(c,.89325,.411048,.369768),i(c,.896131,.415712,.366407),i(c,.898984,.420392,.363047),i(c,.901807,.425087,.359688),i(c,.904601,.429797,.356329),i(c,.907365,.434524,.35297),i(c,.910098,.439268,.34961),i(c,.9128,.444029,.346251),i(c,.915471,.448807,.34289),i(c,.918109,.453603,.339529),i(c,.920714,.458417,.336166),i(c,.923287,.463251,.332801),i(c,.925825,.468103,.329435),i(c,.928329,.472975,.326067),i(c,.930798,.477867,.322697),i(c,.933232,.48278,.319325),i(c,.93563,.487712,.315952),i(c,.93799,.492667,.312575),i(c,.940313,.497642,.309197),i(c,.942598,.502639,.305816),i(c,.944844,.507658,.302433),i(c,.947051,.512699,.299049),i(c,.949217,.517763,.295662),i(c,.951344,.52285,.292275),i(c,.953428,.52796,.288883),i(c,.95547,.533093,.28549),i(c,.957469,.53825,.282096),i(c,.959424,.543431,.278701),i(c,.961336,.548636,.275305),i(c,.963203,.553865,.271909),i(c,.965024,.559118,.268513),i(c,.966798,.564396,.265118),i(c,.968526,.5697,.261721),i(c,.970205,.575028,.258325),i(c,.971835,.580382,.254931),i(c,.973416,.585761,.25154),i(c,.974947,.591165,.248151),i(c,.976428,.596595,.244767),i(c,.977856,.602051,.241387),i(c,.979233,.607532,.238013),i(c,.980556,.613039,.234646),i(c,.981826,.618572,.231287),i(c,.983041,.624131,.227937),i(c,.984199,.629718,.224595),i(c,.985301,.63533,.221265),i(c,.986345,.640969,.217948),i(c,.987332,.646633,.214648),i(c,.98826,.652325,.211364),i(c,.989128,.658043,.2081),i(c,.989935,.663787,.204859),i(c,.990681,.669558,.201642),i(c,.991365,.675355,.198453),i(c,.991985,.681179,.195295),i(c,.992541,.68703,.19217),i(c,.993032,.692907,.189084),i(c,.993456,.69881,.186041),i(c,.993814,.704741,.183043),i(c,.994103,.710698,.180097),i(c,.994324,.716681,.177208),i(c,.994474,.722691,.174381),i(c,.994553,.728728,.171622),i(c,.994561,.734791,.168938),i(c,.994495,.74088,.166335),i(c,.994355,.746995,.163821),i(c,.994141,.753137,.161404),i(c,.993851,.759304,.159092),i(c,.993482,.765499,.156891),i(c,.993033,.77172,.154808),i(c,.992505,.777967,.152855),i(c,.991897,.784239,.151042),i(c,.991209,.790537,.149377),i(c,.990439,.796859,.14787),i(c,.989587,.803205,.146529),i(c,.988648,.809579,.145357),i(c,.987621,.815978,.144363),i(c,.986509,.822401,.143557),i(c,.985314,.828846,.142945),i(c,.984031,.835315,.142528),i(c,.982653,.841812,.142303),i(c,.98119,.848329,.142279),i(c,.979644,.854866,.142453),i(c,.977995,.861432,.142808),i(c,.976265,.868016,.143351),i(c,.974443,.874622,.144061),i(c,.97253,.88125,.144923),i(c,.970533,.887896,.145919),i(c,.968443,.894564,.147014),i(c,.966271,.901249,.14818),i(c,.964021,.90795,.14937),i(c,.961681,.914672,.15052),i(c,.959276,.921407,.151566),i(c,.956808,.928152,.152409),i(c,.954287,.934908,.152921),i(c,.951726,.941671,.152925),i(c,.949151,.948435,.152178),i(c,.946602,.95519,.150328),i(c,.944152,.961916,.146861),i(c,.941896,.96859,.140956),i(c,.940015,.975158,.131326)])),a6=a(Na,i(c,.267004,.004874,.329415),v([i(c,.26851,.009605,.335427),i(c,.269944,.014625,.341379),i(c,.271305,.019942,.347269),i(c,.272594,.025563,.353093),i(c,.273809,.031497,.358853),i(c,.274952,.037752,.364543),i(c,.276022,.044167,.370164),i(c,.277018,.050344,.375715),i(c,.277941,.056324,.381191),i(c,.278791,.062145,.386592),i(c,.279566,.067836,.391917),i(c,.280267,.073417,.397163),i(c,.280894,.078907,.402329),i(c,.281446,.08432,.407414),i(c,.281924,.089666,.412415),i(c,.282327,.094955,.417331),i(c,.282656,.100196,.42216),i(c,.28291,.105393,.426902),i(c,.283091,.110553,.431554),i(c,.283197,.11568,.436115),i(c,.283229,.120777,.440584),i(c,.283187,.125848,.44496),i(c,.283072,.130895,.449241),i(c,.282884,.13592,.453427),i(c,.282623,.140926,.457517),i(c,.28229,.145912,.46151),i(c,.281887,.150881,.465405),i(c,.281412,.155834,.469201),i(c,.280868,.160771,.472899),i(c,.280255,.165693,.476498),i(c,.279574,.170599,.479997),i(c,.278826,.17549,.483397),i(c,.278012,.180367,.486697),i(c,.277134,.185228,.489898),i(c,.276194,.190074,.493001),i(c,.275191,.194905,.496005),i(c,.274128,.199721,.498911),i(c,.273006,.20452,.501721),i(c,.271828,.209303,.504434),i(c,.270595,.214069,.507052),i(c,.269308,.218818,.509577),i(c,.267968,.223549,.512008),i(c,.26658,.228262,.514349),i(c,.265145,.232956,.516599),i(c,.263663,.237631,.518762),i(c,.262138,.242286,.520837),i(c,.260571,.246922,.522828),i(c,.258965,.251537,.524736),i(c,.257322,.25613,.526563),i(c,.255645,.260703,.528312),i(c,.253935,.265254,.529983),i(c,.252194,.269783,.531579),i(c,.250425,.27429,.533103),i(c,.248629,.278775,.534556),i(c,.246811,.283237,.535941),i(c,.244972,.287675,.53726),i(c,.243113,.292092,.538516),i(c,.241237,.296485,.539709),i(c,.239346,.300855,.540844),i(c,.237441,.305202,.541921),i(c,.235526,.309527,.542944),i(c,.233603,.313828,.543914),i(c,.231674,.318106,.544834),i(c,.229739,.322361,.545706),i(c,.227802,.326594,.546532),i(c,.225863,.330805,.547314),i(c,.223925,.334994,.548053),i(c,.221989,.339161,.548752),i(c,.220057,.343307,.549413),i(c,.21813,.347432,.550038),i(c,.21621,.351535,.550627),i(c,.214298,.355619,.551184),i(c,.212395,.359683,.55171),i(c,.210503,.363727,.552206),i(c,.208623,.367752,.552675),i(c,.206756,.371758,.553117),i(c,.204903,.375746,.553533),i(c,.203063,.379716,.553925),i(c,.201239,.38367,.554294),i(c,.19943,.387607,.554642),i(c,.197636,.391528,.554969),i(c,.19586,.395433,.555276),i(c,.1941,.399323,.555565),i(c,.192357,.403199,.555836),i(c,.190631,.407061,.556089),i(c,.188923,.41091,.556326),i(c,.187231,.414746,.556547),i(c,.185556,.41857,.556753),i(c,.183898,.422383,.556944),i(c,.182256,.426184,.55712),i(c,.180629,.429975,.557282),i(c,.179019,.433756,.55743),i(c,.177423,.437527,.557565),i(c,.175841,.44129,.557685),i(c,.174274,.445044,.557792),i(c,.172719,.448791,.557885),i(c,.171176,.45253,.557965),i(c,.169646,.456262,.55803),i(c,.168126,.459988,.558082),i(c,.166617,.463708,.558119),i(c,.165117,.467423,.558141),i(c,.163625,.471133,.558148),i(c,.162142,.474838,.55814),i(c,.160665,.47854,.558115),i(c,.159194,.482237,.558073),i(c,.157729,.485932,.558013),i(c,.15627,.489624,.557936),i(c,.154815,.493313,.55784),i(c,.153364,.497,.557724),i(c,.151918,.500685,.557587),i(c,.150476,.504369,.55743),i(c,.149039,.508051,.55725),i(c,.147607,.511733,.557049),i(c,.14618,.515413,.556823),i(c,.144759,.519093,.556572),i(c,.143343,.522773,.556295),i(c,.141935,.526453,.555991),i(c,.140536,.530132,.555659),i(c,.139147,.533812,.555298),i(c,.13777,.537492,.554906),i(c,.136408,.541173,.554483),i(c,.135066,.544853,.554029),i(c,.133743,.548535,.553541),i(c,.132444,.552216,.553018),i(c,.131172,.555899,.552459),i(c,.129933,.559582,.551864),i(c,.128729,.563265,.551229),i(c,.127568,.566949,.550556),i(c,.126453,.570633,.549841),i(c,.125394,.574318,.549086),i(c,.124395,.578002,.548287),i(c,.123463,.581687,.547445),i(c,.122606,.585371,.546557),i(c,.121831,.589055,.545623),i(c,.121148,.592739,.544641),i(c,.120565,.596422,.543611),i(c,.120092,.600104,.54253),i(c,.119738,.603785,.5414),i(c,.119512,.607464,.540218),i(c,.119423,.611141,.538982),i(c,.119483,.614817,.537692),i(c,.119699,.61849,.536347),i(c,.120081,.622161,.534946),i(c,.120638,.625828,.533488),i(c,.12138,.629492,.531973),i(c,.122312,.633153,.530398),i(c,.123444,.636809,.528763),i(c,.12478,.640461,.527068),i(c,.126326,.644107,.525311),i(c,.128087,.647749,.523491),i(c,.130067,.651384,.521608),i(c,.132268,.655014,.519661),i(c,.134692,.658636,.517649),i(c,.137339,.662252,.515571),i(c,.14021,.665859,.513427),i(c,.143303,.669459,.511215),i(c,.146616,.67305,.508936),i(c,.150148,.676631,.506589),i(c,.153894,.680203,.504172),i(c,.157851,.683765,.501686),i(c,.162016,.687316,.499129),i(c,.166383,.690856,.496502),i(c,.170948,.694384,.493803),i(c,.175707,.6979,.491033),i(c,.180653,.701402,.488189),i(c,.185783,.704891,.485273),i(c,.19109,.708366,.482284),i(c,.196571,.711827,.479221),i(c,.202219,.715272,.476084),i(c,.20803,.718701,.472873),i(c,.214,.722114,.469588),i(c,.220124,.725509,.466226),i(c,.226397,.728888,.462789),i(c,.232815,.732247,.459277),i(c,.239374,.735588,.455688),i(c,.24607,.73891,.452024),i(c,.252899,.742211,.448284),i(c,.259857,.745492,.444467),i(c,.266941,.748751,.440573),i(c,.274149,.751988,.436601),i(c,.281477,.755203,.432552),i(c,.288921,.758394,.428426),i(c,.296479,.761561,.424223),i(c,.304148,.764704,.419943),i(c,.311925,.767822,.415586),i(c,.319809,.770914,.411152),i(c,.327796,.77398,.40664),i(c,.335885,.777018,.402049),i(c,.344074,.780029,.397381),i(c,.35236,.783011,.392636),i(c,.360741,.785964,.387814),i(c,.369214,.788888,.382914),i(c,.377779,.791781,.377939),i(c,.386433,.794644,.372886),i(c,.395174,.797475,.367757),i(c,.404001,.800275,.362552),i(c,.412913,.803041,.357269),i(c,.421908,.805774,.35191),i(c,.430983,.808473,.346476),i(c,.440137,.811138,.340967),i(c,.449368,.813768,.335384),i(c,.458674,.816363,.329727),i(c,.468053,.818921,.323998),i(c,.477504,.821444,.318195),i(c,.487026,.823929,.312321),i(c,.496615,.826376,.306377),i(c,.506271,.828786,.300362),i(c,.515992,.831158,.294279),i(c,.525776,.833491,.288127),i(c,.535621,.835785,.281908),i(c,.545524,.838039,.275626),i(c,.555484,.840254,.269281),i(c,.565498,.84243,.262877),i(c,.575563,.844566,.256415),i(c,.585678,.846661,.249897),i(c,.595839,.848717,.243329),i(c,.606045,.850733,.236712),i(c,.616293,.852709,.230052),i(c,.626579,.854645,.223353),i(c,.636902,.856542,.21662),i(c,.647257,.8584,.209861),i(c,.657642,.860219,.203082),i(c,.668054,.861999,.196293),i(c,.678489,.863742,.189503),i(c,.688944,.865448,.182725),i(c,.699415,.867117,.175971),i(c,.709898,.868751,.169257),i(c,.720391,.87035,.162603),i(c,.730889,.871916,.156029),i(c,.741388,.873449,.149561),i(c,.751884,.874951,.143228),i(c,.762373,.876424,.137064),i(c,.772852,.877868,.131109),i(c,.783315,.879285,.125405),i(c,.79376,.880678,.120005),i(c,.804182,.882046,.114965),i(c,.814576,.883393,.110347),i(c,.82494,.88472,.106217),i(c,.83527,.886029,.102646),i(c,.845561,.887322,.099702),i(c,.85581,.888601,.097452),i(c,.866013,.889868,.095953),i(c,.876168,.891125,.09525),i(c,.886271,.892374,.095374),i(c,.89632,.893616,.096335),i(c,.906311,.894855,.098125),i(c,.916242,.896091,.100717),i(c,.926106,.89733,.104071),i(c,.935904,.89857,.108131),i(c,.945636,.899815,.112838),i(c,.9553,.901065,.118128),i(c,.964894,.902323,.123941),i(c,.974417,.90359,.130215),i(c,.983868,.904867,.136897),i(c,.993248,.906157,.143936)])),Dv=function(e){switch(e){case 0:return Kg;case 1:return e6;case 2:return r6;case 3:return n6;default:return a6}},t6=function(e){e.a;var r=e.b;return Br(r)+1},i6=m(function(e,r){var n=r.a,t=r.b,o=a(ka,t6(r),e),l=m(function(u,$){e:for(;;)if($.b){var f=$.a,d=$.b;if(u){var p=u-1,g=d;u=p,$=g;continue e}else return f}else return n});return o?a(l,o-1,t):n}),Av=m(function(e,r){return a(i6,e,Dv(r))}),cc=function(e){return{$:0,a:e}},Iv=k(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Fv=k(function(e,r,n){return fe(n,e)<0?e:fe(n,r)>0?r:n}),lc=function(e){return i(Fv,0,1,e<=.04045?e/12.92:a(At,(e+.055)/1.055,2.4))},Et=T1,o6=function(e){var r=E0(e),n=r.ig,t=r.hj,o=r.gy;return i(Et,lc(n),lc(t),lc(o))},c6=function(e){return i(Iv,0,cc(o6(e)),cc(0))},uc=m(function(e,r){return{$:0,a:e,b:r}}),$c=m(function(e,r){return{$:2,a:e,b:r}}),Yi=function(e){return{$:5,a:e}},vc=m(function(e,r){return{$:4,a:e,b:r}}),fc=m(function(e,r){return{$:3,a:e,b:r}}),Ji=m(function(e,r){return{$:1,a:e,b:r}}),l6=k(function(e,r,n){return{ja:e,je:r,ew:n}}),u6=function(e){var r=e;return r},Zi=function(e){var r=e;return u6(r.gr)},Xi=function(e){var r=e;return r.bk},Nn=function(e){var r=e;return r.eu},Wn=function(e){var r=e;return r.ev},$6=m(function(e,r){return Kr({dW:a(Ra,e,$a(r)),eu:Nn(r),ev:Wn(r),ex:Vn(r)})}),v6=m(function(e,r){return{gr:a($6,e,Zi(r)),bk:Xi(r)}}),f6=m(function(e,r){var n=r;return a(va,a(Ra,e,n.dW),n.g4)}),m6=m(function(e,r){var n=r;return{o:a(f6,e,n.o),hR:n.hR,ie:n.ie}}),mc=function(e){var r=e;return r},s6=function(e){return e},sc=m(function(e,r){var n=mc(r),t=n.a,o=n.b;return s6(M(e(t),e(o)))}),d6=m(function(e,r){return a(sc,Ra(e),r)}),Qi=function(e){var r=e;return r.gM},Ki=function(e){var r=e;return r.ie},dc=m(function(e,r){return{gM:r,ie:Je(e)}}),p6=m(function(e,r){return a(dc,Ki(r),a(Ra,e,Qi(r)))}),pc=m(function(e,r){var n=r,t=n.a,o=n.b,l=n.c;return B(e(t),e(o),e(l))}),g6=m(function(e,r){return a(pc,Ra(e),r)}),Vt=m(function(e,r){var n=e.a,t=e.b,o=e.c,l=i(l6,n,t,o);switch(r.$){case 0:var u=r.a,$=r.b;return a(uc,u,a(v6,l,$));case 1:var u=r.a,f=r.b;return a(Ji,u,a(g6,l,f));case 3:var u=r.a,d=r.b;return a(fc,u,a(p6,l,d));case 2:var u=r.a,p=r.b;return a($c,u,a(m6,l,p));case 4:var u=r.a,g=r.b;return a(vc,u,a(d6,l,g));default:var h=r.a;return Yi(a(Y,Vt(B(n,t,o)),h))}}),Bv=function(e){return Vt(B(e,0,0))},Ev=function(e){return Vt(B(0,e,0))},eo=k(function(e,r,n){var t=e,o=r,l=n,u=.5*o,$=bn(u),f=Rn(u),d=t.g4,p=d,g=p.ja*f,h=$*g,s=g*g,w=p.je*f,x=$*w,S=g*w,C=w*w,y=1-2*(s+C),z=p.ew*f,F=$*z,J=2*(S-F),Q=2*(S+F),O=g*z,Z=2*(O+x),X=2*(O-x),N=w*z,te=2*(N-h),de=2*(N+h),Ce=z*z,pe=1-2*(C+Ce),ge=1-2*(s+Ce);return{ja:pe*l.ja+J*l.je+Z*l.ew,je:Q*l.ja+ge*l.je+te*l.ew,ew:X*l.ja+de*l.je+y*l.ew}}),Rt=k(function(e,r,n){var t=e,o=r,l=n,u=.5*o,$=bn(u),f=Rn(u),d=t.dW,p=d,g=l.ja-p.ja,h=l.je-p.je,s=l.ew-p.ew,w=t.g4,x=w,S=x.ja*f,C=$*S,y=S*S,z=x.je*f,F=$*z,J=S*z,Q=z*z,O=1-2*(y+Q),Z=x.ew*f,X=$*Z,N=2*(J-X),te=2*(J+X),de=S*Z,Ce=2*(de+F),pe=2*(de-F),ge=z*Z,Pe=2*(ge-C),he=2*(ge+C),Be=Z*Z,Ae=1-2*(Q+Be),er=1-2*(y+Be);return{ja:p.ja+Ae*g+N*h+Ce*s,je:p.je+te*g+er*h+Pe*s,ew:p.ew+pe*g+he*h+O*s}}),h6=k(function(e,r,n){return Kr({dW:i(Rt,e,r,$a(n)),eu:i(eo,e,r,Nn(n)),ev:i(eo,e,r,Wn(n)),ex:i(eo,e,r,Vn(n))})}),b6=k(function(e,r,n){return{gr:i(h6,e,r,Zi(n)),bk:Xi(n)}}),_6=m(function(e,r){var n=a(Rt,e,r),t=a(eo,e,r);return function(o){var l=o;return a(va,n(l.dW),t(l.g4))}}),w6=k(function(e,r,n){var t=n;return{o:i(_6,e,r,t.o),hR:t.hR,ie:t.ie}}),x6=k(function(e,r,n){return a(sc,a(Rt,e,r),n)}),y6=k(function(e,r,n){return a(dc,Ki(n),i(Rt,e,r,Qi(n)))}),S6=k(function(e,r,n){return a(pc,a(Rt,e,r),n)}),gc=k(function(e,r,n){switch(n.$){case 0:var t=n.a,o=n.b;return a(uc,t,i(b6,e,r,o));case 1:var t=n.a,l=n.b;return a(Ji,t,i(S6,e,r,l));case 3:var t=n.a,u=n.b;return a(fc,t,i(y6,e,r,u));case 2:var t=n.a,$=n.b;return a($c,t,i(w6,e,r,$));case 4:var t=n.a,f=n.b;return a(vc,t,i(x6,e,r,f));default:var d=n.a;return Yi(a(Y,a(gc,e,r),d))}}),C6=m(function(e,r){var n=e.a,t=e.b,o=t.a,l=t.b,u=t.c;return a(gc,a(va,Wi(n),En({ja:o,je:l,ew:u})),Aa(r))}),z6=a(va,Nr,qi),P6=m(function(e,r){return i(gc,z6,Aa(e),r)}),Nt=k(function(e,r,n){var t=e,o=n;return{ja:t.ja+r*(o.ja-t.ja),je:t.je+r*(o.je-t.je),ew:t.ew+r*(o.ew-t.ew)}}),M6=k(function(e,r,n){var t=Zi(n),o=Nn(t),l=Wn(t),u=Vn(t),$=i(Nt,e,r,$a(t)),f=r>=0?Kr({dW:$,eu:o,ev:l,ex:u}):Kr({dW:$,eu:hn(o),ev:hn(l),ex:hn(u)}),d=Xi(n),p=d.a,g=d.b,h=d.c,s=Je(a(xe,r,p)),w=Je(a(xe,r,g)),x=Je(a(xe,r,h));return{gr:f,bk:B(s,w,x)}}),hc=function(e){var r=e;return r.o},Vv=function(e){return ec(hc(e))},j6=function(e){return rc(hc(e))},Rv=function(e){var r=e;return r.hR},Nv=function(e){var r=e;return r.ie},L6=k(function(e,r,n){var t=Je(a(xe,r,Nv(n))),o=Je(a(xe,r,Rv(n))),l=r>=0?Vv(n):hn(Vv(n)),u=i(Nt,e,r,j6(n));return{o:a(va,u,l),hR:o,ie:t}}),k6=k(function(e,r,n){return a(sc,a(Nt,e,r),n)}),T6=k(function(e,r,n){return a(dc,a(xe,$e(r),Ki(n)),i(Nt,e,r,Qi(n)))}),D6=k(function(e,r,n){return a(pc,a(Nt,e,r),n)}),Wv=m(function(e,r){switch(r.$){case 0:var n=r.a,t=r.b;return a(uc,n,i(M6,Nr,e,t));case 1:var n=r.a,o=r.b;return a(Ji,n,i(D6,Nr,e,o));case 3:var n=r.a,l=r.b;return a(fc,n,i(T6,Nr,e,l));case 2:var n=r.a,u=r.b;return a($c,n,i(L6,Nr,e,u));case 4:var n=r.a,$=r.b;return a(vc,n,i(k6,Nr,e,$));default:var f=r.a;return Yi(a(Y,Wv(e),f))}}),A6=m(function(e,r){var n=e.ja,t=e.je,o=e.ew;return a(je,Vt(B(-n,-t,-o)),a(je,Wv(r),Vt(B(n,t,o))))}),Hv=function(e){var r=e.c9,n=e.db;return{ja:Rr(3)/2*r,je:1/2*r+n}},wr=k(function(e,r,n){return B(e,r,n)}),ro=k(function(e,r,n){return{ja:e,je:r,ew:n}}),I6=m(function(e,r){var n=r.a,t=r.b,o=r.c;return a(Ji,e,i(wr,i(ro,n.ja,n.je,n.ew),i(ro,t.ja,t.je,t.ew),i(ro,o.ja,o.je,o.ew)))}),F6=m(function(e,r){return(r-qn(r/e)*e)/e}),B6=function(e){return 2*oa*e},E6=q(function(e,r,n,t){return e+(r-e)*(1+bn(B6(a(F6,n,t))))/2}),V6=k(function(e,r,n){var t=n.a,o=t.a,l=t.b,u=t.c,$=n.b,f=a(ua,"minimum rotation degree",e),d=a(ua,"maximum rotation degree",e),p=function(){var z=Hv(function(){return o?{c9:2/3,db:2/3}:{c9:1/3,db:1/3}}());return{ja:z.ja,je:z.je,ew:0}}(),g=a(ua,"rotation period",e),h=L(E6,f,d,g,e.eF),s=a(je,Cr,a(C6,M(p,B(0,0,1)),h)),w=a(I6,c6(a(Av,$,r)),B({ja:0,je:0,ew:0},{ja:bn(Qr(30)),je:Rn(Qr(30)),ew:0},{ja:0,je:1,ew:0})),x=a(Ev,1+Rn(Qr(30)),a(Bv,bn(Qr(30)),a(P6,Qr(180),w))),S=Hv({c9:l,db:u}),C=S.ja,y=S.je;return a(Ev,y,a(Bv,C,s(i(A6,p,a(ua,"trixel scale",e),function(){return o?x:w}()))))}),bc=function(e){return Yi(e)},R6=function(e){var r=e.a;return R$(r)},N6=m(function(e,r){var n=Bt(r.m);return bc(a(Y,a(V6,e,n.b2),R6(n.i1)))}),W6=function(e){return e},H6=function(e){return en(.01*e)},Gv=function(e){return e},G6=function(e){return e},O6=function(e){return{$:0,a:e}},U6=O6,q6={$:3},Y6=q6,J6=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Z6=J6,X6=function(e){return{$:1,a:e}},Q6=X6,K6=function(e){return a(Ir,"height",D(e))},eh=t$,rh=function(e){return{$:2,a:e}},nh=rh,Ov=function(e){var r=e.a,n=e.b,t=e.c,o=e.d,l=function($){return ke($*1e3)/1e3},u=function($){return ke($*1e4)/100};return ea(v(["rgba(",ne(u(r)),"%,",ne(u(n)),"%,",ne(u(t)),"%,",ne(l(o)),")"]))},ah=m(function(e,r){switch(r.$){case 0:return a(_s,e,r);case 1:return a(ws,e,r);case 2:return a(xs,e,r);case 3:return a(ys,e,r);case 4:return a(Ss,e,r);default:return a(Cs,e,r)}}),th=m(function(e,r){switch(r.$){case 0:return a(Z1,e,r);case 1:return a(X1,e,r);case 2:return a(Q1,e,r);case 3:return a(K1,e,r);case 4:return a(es,e,r);case 5:return a(rs,e,r);case 6:return a(ns,e,r);case 7:return a(as,e,r);default:return ts(e)}}),ih=k(function(e,r,n){return i(bs,e,r,n)}),Uv=function(e){var r=e;return r},Wa=E1,_c=L(Wa,1,1,1,1),rn=k(function(e,r,n){return a(Y,function(t){return a(t,r,n)},e)}),oh=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ch=m(function(e,r){var n=e,t=r.ja,o=r.je;return i(oh,n*t/o,n,n*(1-t-o)/o)}),lh=function(e){var r=e.a,n=e.b,t=e.c;return i(Et,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},wc=m(function(e,r){return lh(a(ch,e,r))}),qv=m(function(e,r){return{eY:ue(e.eY,r.eY),w:e.w*r.w+e.x*r.z+e.y*r.C,x:e.w*r.x+e.x*r.A+e.y*r.D,y:e.w*r.y+e.x*r.B+e.y*r.E,z:e.z*r.w+e.A*r.z+e.B*r.C,A:e.z*r.x+e.A*r.A+e.B*r.D,B:e.z*r.y+e.A*r.B+e.B*r.E,C:e.C*r.w+e.D*r.z+e.E*r.C,D:e.C*r.x+e.D*r.A+e.E*r.D,E:e.C*r.y+e.D*r.B+e.E*r.E,P:r.P+(e.P*r.w+e.Q*r.z+e.R*r.C)*r.c1,Q:r.Q+(e.P*r.x+e.Q*r.A+e.R*r.D)*r.c1,R:r.R+(e.P*r.y+e.Q*r.B+e.R*r.E)*r.c1,c1:e.c1*r.c1}}),nn=G1,uh=function(e){return nn({e7:e.w,e8:e.z,e9:e.C,fa:e.P,fb:e.x,fc:e.A,fd:e.D,fe:e.Q,ff:e.y,fg:e.B,fh:e.E,fi:e.R,fj:0,fk:0,fl:0,fm:1})},xc=He(function(e,r,n,t,o){var l=t.eY?1:-1,u=L(Wa,t.c1,t.c1,t.c1,l);return cr(o,e,u,uh(t),t.eY,r,n)}),Yv=yr(function(e,r,n,t,o,l){e:for(;;)switch(o.$){case 0:return l;case 5:var u=o.a,$=o.b,f=e,d=r,p=n,g=a(qv,u,t),h=$,s=l;e=f,r=d,n=p,t=g,o=h,l=s;continue e;case 1:var w=o.b,x=a(j,A(xc,e,r,n,t,w),l.U);return{U:x,ai:l.ai,iu:l.iu};case 3:var S=o.b,C=a(j,A(xc,e,r,n,t,S),l.ai);return{U:l.U,ai:C,iu:l.iu};case 2:var y=o.a,z=a(j,A(xc,e,r,n,t,y),l.iu);return{U:l.U,ai:l.ai,iu:z};default:var F=o.a;return i(Ee,L(Yv,e,r,n,t),l,F)}}),$h=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Jv=$h,yc=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),vh=function(e){var r=e.as,n=e.al,t=e.ak;return L(yc,518,r,n,t)},fh=m(function(e,r){return{$:6,a:e,b:r}}),mh=fh,Zv=v([vh({ak:1,al:0,as:!1}),L(Jv,!1,!1,!1,!1),a(mh,0,1)]),Ha=519,Sc=8,Xv=15,Ga=7681,sh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},De=J1,dh=m(function(e,r){return{$:0,a:e,b:r}}),ph=dh({eJ:1,eW:0,fv:5}),xr=L1,gh=ph(v([{cY:a(xr,-1,-1)},{cY:a(xr,1,-1)},{cY:a(xr,-1,1)},{cY:a(xr,1,1)}])),hh={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cY"},uniforms:{}},bh=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(d){return function(p){return{$:2,a:e,b:r,c:n,d:t,e:o,f:l,g:u,h:$,i:f,j:d,k:p}}}}}}}}}}}},Cc=k(function(e,r,n){var t=e.d8,o=e.dN,l=e.et,u=m(function(d,p){var g=d;return p(g)}),$=m(function(d,p){var g=d;return p(g)}),f=function(d){return a(je,u(d.cb),a(je,$(d.bS),a(je,$(d.cl),$(d.cm))))};return a(f,n,a(f,r,i(bh,t,o,l)))}),zc=function(e){return i(Cc,{dN:e.dN,d8:e.d8,et:e.et},{bS:e.bS,cb:e.cb,cl:e.cl,cm:e.cm},{bS:e.bS,cb:e.cb,cl:e.cl,cm:e.cm})},Pc=function(e){return A(De,v([zc(e),L(Jv,!1,!1,!1,!1)]),hh,sh,gh,{})},_h=Pc({bS:Ga,dN:0,d8:Sc,cb:Ha,et:Xv,cl:Ga,cm:Ga}),wh=516,Qv=5386,ir=7680,xh=function(e){return a(At,2,e+4)},Kv=function(e){return Pc({bS:ir,dN:Xv,d8:Sc,cb:wh,et:xh(e),cl:Qv,cm:Qv})},yh=k(function(e,r,n){return ur(v([i(rn,e,n,Zv),v([Kv(r),_h])]))}),Sh=m(function(e,r){return ur(a(Ko,yh(e),r))}),Ch=function(e){var r=e.as,n=e.al,t=e.ak;return L(yc,513,r,n,t)},zh=Ch({ak:1,al:0,as:!0}),Ph=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(d){return{$:0,a:e,b:r,c:n,d:t,e:o,f:l,g:u,h:$,i:f,j:d}}}}}}}}}}},Mh=function(e){var r=e.c_,n=e.cF,t=e.cq,o=e.cn,l=e.cw,u=e.gm,$=m(function(f,d){var p=f.a,g=f.b,h=f.c,s=d.a,w=d.b,x=d.c;return Ph(p)(g)(h)(s)(w)(x)(r)(n)(t)(o)});return a($,l,u)},jh=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ef=m(function(e,r){var n=e,t=r;return i(jh,32774,n,t)}),Lh=1,rf=771,kh=770,Mc=Mh({cn:0,gm:a(ef,Lh,rf),cq:0,cw:a(ef,kh,rf),cF:0,c_:0}),Oa=v([zh,Mc]),Th=function(e){var r=e;return r.fo},Dh=function(e){var r=e;return r.fp},nf=function(e){var r=e;return r.fq},Ah=function(e){var r=e;return r.fr},Ih=function(e){var r=e;return r.fs},af=function(e){var r=e;return r.ft},Ua=m(function(e,r){var n=e,t=r;return t-n}),tf=function(e){return B(a(Ua,Ah(e),Th(e)),a(Ua,Ih(e),Dh(e)),a(Ua,af(e),nf(e)))},Fh=function(e){return e},Bh=function(e){return Kr({dW:Fh({ja:e.P,je:e.Q,ew:e.R}),eu:En({ja:e.w,je:e.x,ew:e.y}),ev:En({ja:e.z,je:e.A,ew:e.B}),ex:En({ja:e.C,je:e.D,ew:e.E})})},jc=m(function(e,r){var n=e,t=r,o=n.ex,l=o,u=n.ev,$=u,f=n.eu,d=f;return{ja:t.ja*d.ja+t.je*d.je+t.ew*d.ew,je:t.ja*$.ja+t.je*$.je+t.ew*$.ew,ew:t.ja*l.ja+t.je*l.je+t.ew*l.ew}}),of=m(function(e,r){var n=e,t=r,o=n.dW,l=o,u=t.ja-l.ja,$=t.je-l.je,f=t.ew-l.ew,d=n.ex,p=d,g=n.ev,h=g,s=n.eu,w=s;return{ja:u*w.ja+$*w.je+f*w.ew,je:u*h.ja+$*h.je+f*h.ew,ew:u*p.ja+$*p.je+f*p.ew}}),cf=m(function(e,r){return{dW:a(of,e,$a(r)),eu:a(jc,e,Nn(r)),ev:a(jc,e,Wn(r)),ex:a(jc,e,Vn(r))}}),no=function(e){var r=e;return r},We=m(function(e,r){var n=e,t=r;return a(Xe,n,t)}),Oe=m(function(e,r){var n=e,t=r;return a(Ca,n,t)}),Eh=m(function(e,r){var n=no(r),t=no(e);return{fo:a(We,t.fo,n.fo),fp:a(We,t.fp,n.fp),fq:a(We,t.fq,n.fq),fr:a(Oe,t.fr,n.fr),fs:a(Oe,t.fs,n.fs),ft:a(Oe,t.ft,n.ft)}}),kr=function(e){var r=e;return r},Vh=function(e){var r=e;return B(r.ja,r.je,r.ew)},Wt=m(function(e,r){var n=e,t=r;return t+n}),Rh=m(function(e,r){var n=e.a,t=e.b,o=e.c,l=Gi(Je(t)),u=Gi(Je(n)),$=Gi(Je(o)),f=Vh(r),d=f.a,p=f.b,g=f.c;return{fo:a(Wt,u,d),fp:a(Wt,l,p),fq:a(Wt,$,g),fr:a(Ua,u,d),fs:a(Ua,l,p),ft:a(Ua,$,g)}}),lf=q(function(e,r,n,t){var o=n.gM,l=2*n.ho*r,u=2*n.hn*r,$=2*n.hm*r,f=o.ew*r,d=o.je*r,p=o.ja*r,g=kr(Vn(e)),h=$e($*g.ja)+$e(u*g.je)+$e(l*g.ew),s=kr(Wn(e)),w=$e($*s.ja)+$e(u*s.je)+$e(l*s.ew),x=kr(Nn(e)),S=$e($*x.ja)+$e(u*x.je)+$e(l*x.ew),C=a(Rh,B(S,w,h),a(of,e,i(ro,p,d,f)));if(t.$)return V(C);var y=t.a;return V(a(Eh,y,C))}),Lc=q(function(e,r,n,t){e:for(;;)if(t.b){var o=t.a,l=t.b;switch(o.$){case 0:var u=e,$=r,f=n,d=l;e=u,r=$,n=f,t=d;continue e;case 1:var p=o.a,g=L(lf,e,r,p,n),u=e,$=r,f=g,d=l;e=u,r=$,n=f,t=d;continue e;case 2:var u=e,$=r,f=n,d=l;e=u,r=$,n=f,t=d;continue e;case 3:var p=o.a,g=L(lf,e,r,p,n),u=e,$=r,f=g,d=l;e=u,r=$,n=f,t=d;continue e;case 4:var h=o.a,u=e,$=r,f=L(Lc,e,r,n,h),d=l;e=u,r=$,n=f,t=d;continue e;default:var s=o.a,w=o.b,x=a(cf,Bh(s),e),S=r*s.c1,u=e,$=r,f=L(Lc,x,S,n,v([w])),d=l;e=u,r=$,n=f,t=d;continue e}}else return n}),qa=D1,Ya=A1,Ja=I1,uf=function(e){return{$:4,a:e}},Nh=m(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,o=t,l=a(j,n,r);e=o,r=l;continue e}else return r}),Ht=function(e){return uf(a(Nh,e,T))},Wh={eY:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,P:0,Q:0,R:0,c1:1},$f=Pc({bS:Ga,dN:0,d8:Sc,cb:Ha,et:255,cl:Ga,cm:Ga}),Hh=function(e){var r=e,n=a(Xe,$e(r.ja),a(Xe,$e(r.je),$e(r.ew)));if(n){var t=r.ew/n,o=r.je/n,l=r.ja/n,u=Rr(l*l+o*o+t*t);return u*n}else return Lr},sr={cq:0,gL:!1,cF:0,d3:0,c_:0,ek:0,ja:0,je:0,ew:0},Tr=m(function(e,r){var n=e,t=r;return nn({e7:n.ja,e8:n.c_,e9:t.ja,fa:t.c_,fb:n.je,fc:n.cF,fd:t.je,fe:t.cF,ff:n.ew,fg:n.cq,fh:t.ew,fi:t.cq,fj:n.ek,fk:n.d3,fl:t.ek,fm:t.d3})}),Gt=M({b_:a(Tr,sr,sr),cM:a(Tr,sr,sr),cN:a(Tr,sr,sr),cO:a(Tr,sr,sr)},L(Wa,0,0,0,0)),vf=514,ff=function(e){var r=e.as,n=e.al,t=e.ak;return L(yc,515,r,n,t)},mf=240,Gh=v([ff({ak:1,al:0,as:!0}),zc({bS:ir,dN:mf,d8:0,cb:vf,et:0,cl:ir,cm:ir}),Mc]),Oh=m(function(e,r){var n=e,t=r.h$,o=r.he,l=r.gq,u=Je(t),$=u,f=Je(o),d=f,p=n.d7;if(p.$){var h=p.a;return $0(d)?nn({e7:2/(l*h),e8:0,e9:0,fa:0,fb:0,fc:2/h,fd:0,fe:0,ff:0,fg:0,fh:0,fi:-1,fj:0,fk:0,fl:0,fm:1}):nn({e7:2/(l*h),e8:0,e9:0,fa:0,fb:0,fc:2/h,fd:0,fe:0,ff:0,fg:0,fh:-2/(d-$),fi:-(d+$)/(d-$),fj:0,fk:0,fl:0,fm:1})}else{var g=p.a;return $0(d)?nn({e7:1/(l*g),e8:0,e9:0,fa:0,fb:0,fc:1/g,fd:0,fe:0,ff:0,fg:0,fh:-1,fi:-2*$,fj:0,fk:0,fl:-1,fm:0}):nn({e7:1/(l*g),e8:0,e9:0,fa:0,fb:0,fc:1/g,fd:0,fe:0,ff:0,fg:0,fh:-(d+$)/(d-$),fi:-2*d*$/(d-$),fj:0,fk:0,fl:-1,fm:0})}}),ao=m(function(e,r){return(1&e>>r)==1?0:1}),Uh=function(e){return v([ff({ak:1,al:0,as:!0}),zc({bS:ir,dN:mf,d8:e,cb:vf,et:0,cl:ir,cm:ir}),Mc])},qh=k(function(e,r,n){return ur(a(Y,function(t){var o=t<<4,l=L(Wa,a(ao,t,0),a(ao,t,1),a(ao,t,2),a(ao,t,3));return i(rn,e,M(r,l),Uh(o))},a($n,1,a(At,2,n)-1)))}),Za=function(e){var r=e;return r},Yh=O1,Jh=En({ja:1,je:0,ew:0}),sf=Jh,df=zv,Zh={dW:Nr,eu:sf,ev:df,ex:qi},to=function(e){var r=e;return r},Xh=function(e){var r=to($a(e)),n=kr(Vn(e)),t=kr(Wn(e)),o=kr(Nn(e));return nn({e7:o.ja,e8:t.ja,e9:n.ja,fa:r.ja,fb:o.je,fc:t.je,fd:n.je,fe:r.je,ff:o.ew,fg:t.ew,fh:n.ew,fi:r.ew,fj:0,fk:0,fl:0,fm:1})},Qh=m(function(e,r){var n=r;return Xh(a(cf,n,e))}),Kh=function(e){return a(Qh,Zh,e)},e9=function(e){var r=e;return r.eo},r9=function(e){var r=e;return Nn(r)},n9=function(e){var r=e;return Wn(r)},a9=function(e){var r=e9(e.gI),n=Kr({dW:nc(r),eu:r9(r),ev:n9(r),ex:hn(tc(r))}),t=Ht(e.bo),o=t,l=L(Lc,n,1,E,v([o]));if(l.$===1)return T;var u=l.a,$=Kh(r),f=a(xe,.99,a(We,Je(e.bj),ac(nf(u)))),d=tf(u),p=d.a,g=d.b,h=d.c,s=Hh(i(ic,p,g,h)),w=a(xe,1.01,a(Wt,s,ac(af(u)))),x=a(Oh,e.gI,{gq:e.gq,he:w,h$:f}),S=Yh(x).fm,C=S?kr(hn(tc(r))):Za(nc(r)),y=function(){var ge=e.c7;switch(ge.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var Pe=ge.a;return M(3,Pe);case 4:var Pe=ge.a;return M(4,Pe);default:return M(5,0)}}(),z=y.a,F=y.b,J=e.cD,Q=J,O=a(wc,Q,e.de),Z=O,X=nn({e7:0,e8:C.ja,e9:qa(Z),fa:e.fV,fb:0,fc:C.je,fd:Ya(Z),fe:Ui(s),ff:0,fg:C.ew,fh:Ja(Z),fi:z,fj:0,fk:S,fl:0,fm:F}),N=cr(Yv,X,$,x,Wh,o,{U:T,ai:T,iu:T}),te=e.cL;switch(te.$){case 0:var de=te.a;return ur(v([i(rn,N.U,M(de,_c),Oa),i(rn,N.ai,Gt,Oa)]));case 1:var de=te.a;return ur(v([i(rn,N.U,Gt,Oa),v([$f]),i(rn,N.iu,de.b_,Zv),v([Kv(0)]),i(rn,N.U,M(de,_c),Gh),i(rn,N.ai,Gt,Oa)]));default:var Ce=te.a,pe=te.b;return ur(v([i(rn,N.U,M(pe,_c),Oa),v([$f]),a(Sh,N.iu,Ce),i(qh,N.U,pe,Br(Ce)),i(rn,N.ai,Gt,Oa)]))}},t9=function(e){return a(Ir,"width",D(e))},i9=m(function(e,r){var n=v([Q6(1),nh(0),U6(!0),L(Z6,0,0,0,0)]),t=function(){var z=e.di;switch(z.$){case 0:return B(n,"0",1);case 1:return B(a(j,Y6,n),"1",1);default:var F=z.a;return B(n,"0",F)}}(),o=t.a,l=t.b,u=t.c,$=e.bk,f=$.a,d=$.b,p=Uv(d),g=a(ve,"height",D(p)+"px"),h=Uv(f),s=h/p,w=a(xa,function(z){return a9({gq:s,gI:e.gI,bj:e.bj,bo:z.bo,cD:z.cD,cL:z.cL,fV:u,c7:z.c7,de:z.de})},r),x=a(ve,"width",D(h)+"px"),S=e.bh,C=S,y=Ov(C);return i(eh,"div",v([a(ve,"padding","0px"),x,g]),v([M(l,i(ih,o,v([t9(ke(h*u)),K6(ke(p*u)),x,g,a(ve,"display","block"),a(ve,"background-color",y)]),w))]))}),o9=function(e){return a(i9,{di:e.di,bh:e.bh,gI:e.gI,bj:e.bj,bk:e.bk},v([{bo:e.bo,cD:e.cD,cL:e.cL,c7:e.c7,de:e.de}]))},pf=function(e){return e},gf=pf({ja:.31271,je:.32902}),c9=m(function(e,r){var n=e,t=kr(r.g4),o=t.ja,l=t.je,u=t.ew,$=a(wc,r.dA,r.$7),f=$;return{cq:Ja(f),gL:n,cF:Ya(f),d3:0,c_:qa(f),ek:1,ja:-o,je:-l,ew:-u}}),l9=function(e){return e},u9=function(e){return l9(1.2*a(At,2,e))},kc=function(e){return e},$9={$:0},v9=$9,hf=function(e){return e},bf=function(e){var r=e;return r},f9=function(e){e:for(;;){if(ue(e.hJ,Lr)&&ue(e.hK,Lr))return sr;if(a(Sv,Je(e.hJ),Je(e.hK))){var r={$7:e.$7,hJ:e.hK,hK:e.hJ,f0:hn(e.f0)};e=r;continue e}else{var n=$e(bf(e.hK)/oa),t=$e(bf(e.hJ)/oa),o=kr(e.f0),l=o.ja,u=o.je,$=o.ew,f=a(wc,hf(1),e.$7),d=f;return{cq:t*Ja(d),gL:!1,cF:t*Ya(d),d3:n/t,c_:t*qa(d),ek:3,ja:l,je:u,ew:$}}}},_f=function(e){return f9({$7:e.$7,hJ:e.dA,hK:Lr,f0:e.f0})},m9=function(e){var r=e;return r},wf=function(e){var r=i(Fv,1667,25e3,m9(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return pf({ja:n,je:t})},xf=function(e){return e},s9=wf(xf(12e3)),d9=wf(xf(5600)),p9=function(e){return{$:2,a:e}},g9=function(e){return p9(e)},h9=m(function(e,r){return{$:2,a:e,b:r}}),yf=function(e){return{$:0,a:e}},io=function(e){var r=e;return r},b9=function(e){var r=e;return r.gL},_9=yf(Gt.a),w9=m(function(e,r){var n=m(function(t,o){var l=o.a,u=o.b;return e(t)?M(a(j,t,l),u):M(l,a(j,t,u))});return i(qe,n,M(T,T),r)}),x9=function(e){var r=e;return nn({e7:r.ja,e8:r.c_,e9:0,fa:0,fb:r.je,fc:r.cF,fd:0,fe:0,ff:r.ew,fg:r.cq,fh:0,fi:0,fj:r.ek,fk:r.d3,fl:0,fm:0})},y9=ye(function(e,r,n,t,o,l,u,$){var f=a(w9,b9,v([io(e),io(r),io(n),io(t)])),d=f.a,p=f.b;if(d.b){var g=H(d,p);if(g.b&&g.b.b&&g.b.b.b&&g.b.b.b.b&&!g.b.b.b.b.b){var h=g.a,s=g.b,w=s.a,x=s.b,S=x.a,C=x.b,y=C.a;return a(h9,a(Y,x9,d),{b_:a(Tr,h,w),cM:a(Tr,S,y),cN:a(Tr,o,l),cO:a(Tr,u,$)})}else return _9}else return yf({b_:a(Tr,e,r),cM:a(Tr,n,t),cN:a(Tr,o,l),cO:a(Tr,u,$)})}),S9=k(function(e,r,n){return at(y9,e,r,n,sr,sr,sr,sr,sr)}),C9=function(e){var r=a(c9,G6(e.iu),{$7:d9,g4:e.iK,dA:kc(8e4)}),n=_f({$7:s9,dA:kc(2e4),f0:e.f0}),t=_f({$7:gf,dA:kc(15e3),f0:hn(e.f0)}),o=i(S9,r,n,t);return o9({di:g9(e.du),bh:e.bh,gI:e.gI,bj:e.bj,bk:e.bk,bo:e.bo,cD:u9(15),cL:o,c7:v9,de:gf})},Sf=q(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),z9=q(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Cf=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),zf=q(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),P9=q(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),M9=q(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),j9=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Tc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,t=e.c;return L(j9,r,n,t,1);case 2:var r=e.a,n=e.b,t=e.c;return L(Sf,r,n,t,1);case 3:var r=e.a,o=e.b,t=e.c;return L(z9,r,o,t,1);case 4:var r=e.a,o=e.b,t=e.c;return L(Cf,r,o,t,1);case 5:var r=e.a,o=e.b,t=e.c;return L(M9,r,o,t,1);case 6:var r=e.a,o=e.b,t=e.c;return L(zf,r,o,t,1);case 7:var r=e.a,o=e.b,t=e.c;return L(P9,r,o,t,1);case 8:return e;case 9:return e;default:return e}},Dc={$:0},L9=ye(function(e,r,n,t,o,l,u,$){e:for(;;)if($.b){var f=$.a,d=$.b,p=no(u(f)),g=a(Oe,p.fr,e),h=a(We,p.fo,r),s=a(Oe,p.fs,n),w=a(We,p.fp,t),x=a(Oe,p.ft,o),S=a(We,p.fq,l),C=u,y=d;e=g,r=h,n=s,t=w,o=x,l=S,u=C,$=y;continue e}else return{fo:r,fp:t,fq:l,fr:e,fs:n,ft:o}}),k9=k(function(e,r,n){var t=no(e(r));return at(L9,t.fr,t.fo,t.fs,t.fp,t.ft,t.fq,e,n)}),Ac=m(function(e,r){var n=e,t=r;return fe(t,n)<1}),Pf=function(e){return a(Ac,e.fo,e.fr)&&a(Ac,e.fp,e.fs)&&a(Ac,e.fq,e.ft)?e:{fo:a(We,e.fr,e.fo),fp:a(We,e.fs,e.fp),fq:a(We,e.ft,e.fq),fr:a(Oe,e.fr,e.fo),fs:a(Oe,e.fs,e.fp),ft:a(Oe,e.ft,e.fq)}},Ot=function(e){var r=e;return r},Mf=function(e){var r=Ot(e),n=r.a,t=r.b,o=r.c,l=Ba(n),u=Ea(n),$=Va(n),f=Ba(t),d=Ea(t),p=Va(t),g=Ba(o),h=Ea(o),s=Va(o);return Pf({fo:a(We,l,a(We,f,g)),fp:a(We,u,a(We,d,h)),fq:a(We,$,a(We,p,s)),fr:a(Oe,l,a(Oe,f,g)),fs:a(Oe,u,a(Oe,d,h)),ft:a(Oe,$,a(Oe,p,s))})},jf=F1,dr=function(e){return jf(to(e))},Lf=function(e){var r=e;return r},oo=function(e){return jf(Lf(e))},T9=m(function(e,r){var n=e,t=r,o=a(Xe,$e(t.ja),a(Xe,$e(t.je),$e(t.ew)));if(o){var l=t.ew/o,u=t.je/o,$=t.ja/o,f=Rr($*$+u*u+l*l);return{ja:n*$/f,je:n*u/f,ew:n*l/f}}else return Cv}),D9=T9(hf(1)),kf=k(function(e,r,n){var t=a(Hi,r,n),o=a(Hi,e,r);return D9(a(Q0,t,o))}),A9=function(e){var r=Ot(e),n=r.a,t=r.b,o=r.c,l=oo(i(kf,n,t,o));return B({u:l,cY:dr(n)},{u:l,cY:dr(t)},{u:l,cY:dr(o)})},I9=m(function(e,r){return{$:2,a:e,b:r}}),Tf=I9({eJ:3,eW:0,fv:4}),F9=function(e){if(e.b){var r=e.a,n=e.b,t=Tf(a(Y,A9,e)),o=i(k9,Mf,r,n);return L(Sf,o,e,t,0)}else return Dc},Ke=k(function(e,r,n){var t=e,o=r,l=n;return{ja:t,je:o,ew:l}}),Df=function(){var e=en(1),r=en(1),n=en(1),t=a(xe,-.5,e),o=a(xe,-.5,r),l=a(xe,-.5,n),u=i(Ke,l,o,t),$=a(xe,.5,e),f=i(Ke,l,o,$),d=a(xe,.5,r),p=i(Ke,l,d,t),g=i(Ke,l,d,$),h=a(xe,.5,n),s=i(Ke,h,o,t),w=i(Ke,h,d,t),x=i(Ke,h,o,$),S=i(Ke,h,d,$);return Tc(F9(v([i(wr,u,w,s),i(wr,u,p,w),i(wr,f,x,S),i(wr,f,S,g),i(wr,s,w,S),i(wr,s,S,x),i(wr,u,g,p),i(wr,u,f,g),i(wr,u,s,x),i(wr,u,x,f),i(wr,p,S,w),i(wr,p,g,S)])))}(),co={$:0},B9=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),E9=k(function(e,r,n){var t=r.a,o=r.b,l=r.c,u=e(l),$=e(o),f=e(t),d=oo(i(kf,f,$,u)),p={u:d,cY:dr(f)},g={u:d,cY:dr($)},h={u:d,cY:dr(u)};return a(j,p,a(j,g,a(j,h,n)))}),Ic=function(e){var r=e;return r.L},V9=q(function(e,r,n,t){if(r.$===1)return E;var o=r.a;if(n.$===1)return E;var l=n.a;if(t.$===1)return E;var u=t.a;return V(i(e,o,l,u))}),Fc=4294967295>>>32-ft,Bc=Dm,R9=k(function(e,r,n){e:for(;;){var t=Fc&r>>>e,o=a(Bc,t,n);if(o.$){var d=o.a;return a(Bc,Fc&r,d)}else{var l=o.a,u=e-ft,$=r,f=l;e=u,r=$,n=f;continue e}}}),N9=function(e){return e>>>5<<5},W9=m(function(e,r){var n=r.a,t=r.b,o=r.c,l=r.d;return e<0||fe(e,n)>-1?E:fe(e,N9(n))>-1?V(a(Bc,Fc&e,l)):V(i(R9,t,e,o))}),Ec=function(e){var r=e;return r.aF},Vc=m(function(e,r){return a(W9,e,Ec(r))}),H9=function(e){var r=function(n){var t=n.a,o=n.b,l=n.c;return L(V9,k(function(u,$,f){return B(u,$,f)}),a(Vc,t,e),a(Vc,o,e),a(Vc,l,e))};return a(zn,r,Ic(e))},G9=k(function(e,r,n){e:for(;;){var t=a(t0,gr,e),o=t.a,l=t.b;if(fe(a0(o),gr)<0)return a(iu,!0,{F:r,q:n,v:o});var u=l,$=a(j,au(o),r),f=n+1;e=u,r=$,n=f;continue e}}),Rc=function(e){return e.b?i(G9,e,T,0):ru},O9=m(function(e,r){return!a(gt,a(wt,id,e),r)}),U9=function(e){var r=e.a;return r},Af=m(function(e,r){var n=U9(e),t=function(o){var l=o.a,u=o.b,$=o.c;return l>=0&&fe(l,n)<0&&u>=0&&fe(u,n)<0&&$>=0&&fe($,n)<0};return a(O9,t,r)?{L:r,aF:e}:{L:a(Zu,t,r),aF:e}}),q9=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ut=q9({eJ:1,eW:3,fv:4}),lo=m(function(e,r){var n=Za(r),t=Za(e);return M(B(t.ja,t.je,t.ew),B(n.ja,n.je,n.ew))}),If=i(Et,0,0,0),Nc=yr(function(e,r,n,t,o,l){var u=l.a,$=l.b,f=l.c,d=a(pi,a(lo,e,r),o);if(d.$){var g={u:If,cY:dr(r)},h={u:If,cY:dr(e)},s=f+1,w=f;return B(a(j,B(n,w,s),a(j,B(n,s,t),u)),a(j,g,a(j,h,$)),f+2)}else{var p=d.a;return B(a(j,B(n,p,t),u),$,f)}}),Y9=He(function(e,r,n,t,o){e:for(;;)if(n.b){var l=n.a,u=l.a,$=l.b,f=l.c,d=n.b,p=e(f),g=e($),h=e(u),s=t+2,w=t+1,x=t,S=e,C=r,y=d,z=t+3,F=cr(Nc,p,h,s,x,r,cr(Nc,g,p,w,s,r,cr(Nc,h,g,x,w,r,o)));e=S,r=C,n=y,t=z,o=F;continue e}else{var J=o,Q=J.a,O=J.b;return M(Q,tr(O))}}),J9=He(function(e,r,n,t,o){e:for(;;)if(r.b){var l=r.a,u=l.a,$=l.b,f=l.c,d=r.b,p=e(f),g=e($),h=e(u),s=n+2,w=n+1,x=n,S=i(Zn,a(lo,h,p),s,i(Zn,a(lo,p,g),w,i(Zn,a(lo,g,h),x,o))),C=a(j,B(x,w,s),t),y=e,z=d,F=n+3,J=C,Q=S;e=y,r=z,n=F,t=J,o=Q;continue e}else return B(t,o,n)}),fa=k(function(e,r,n){var t=H9(n),o=i(qe,E9(r),T,t),l=A(J9,r,t,0,T,xi),u=l.a,$=l.b,f=l.c,d=A(Y9,r,$,t,0,B(u,T,f)),p=d.a,g=d.b,h=jn(g)?o:H(o,g);return i(B9,e,a(Af,Rc(h),p),a(Ut,h,p))}),Wc=function(e){return{L:a(Y,function(r){return B(3*r,3*r+1,3*r+2)},a($n,0,Br(e)-1)),aF:Rc(ur(a(Y,function(r){var n=r.a,t=r.b,o=r.c;return v([n,t,o])},e)))}},Ff=function(e){switch(e.$){case 0:return co;case 1:var r=e.a,n=e.b,t=a(Y,Ot,n);return i(fa,r,Cr,Wc(t));case 2:var r=e.a,n=e.b,t=a(Y,Ot,n);return i(fa,r,Cr,Wc(t));case 3:var r=e.a,o=e.b;return i(fa,r,Cr,o);case 4:var r=e.a,o=e.b;return i(fa,r,function(l){return l.cY},o);case 5:var r=e.a,o=e.b;return i(fa,r,function(l){return l.cY},o);case 6:var r=e.a,o=e.b;return i(fa,r,function(l){return l.cY},o);case 7:var r=e.a,o=e.b;return i(fa,r,function(l){return l.cY},o);case 8:return co;case 9:return co;default:return co}},Bf=Ff(Df),Ef={$:0},R=Ef,Ze=m(function(e,r){return{$:1,a:e,b:r}}),Z9={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cx"}},X9=1029,Q9=function(e){return{$:5,a:e}},Vf=function(e){var r=e;return Q9(r)},K9=Vf(X9),e7=1028,r7=Vf(e7),pr=k(function(e,r,n){return r===1?e?a(j,K9,n):a(j,r7,n):n}),Rf={src:`
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
    `,attributes:{position:"cY",uv:"T"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Hc=q(function(e,r,n,t){return a(Ze,r,ye(function(o,l,u,$,f,d,p,g){return A(De,i(pr,$,t,g),Rf,Z9,n,{cx:e,d:u,e:l,f:d,g:o,h:f})}))}),Gc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"a$"}},Nf={src:`
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
    `,attributes:{position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},_n=q(function(e,r,n,t){return a(Ze,r,ye(function(o,l,u,$,f,d,p,g){return A(De,i(pr,$,t,g),Nf,Gc,n,{a$:e,d:u,e:l,f:d,g:o,h:f})}))}),Wf=m(function(e,r){return{$:3,a:e,b:r}}),n7={src:`
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
    `,attributes:{},uniforms:{constantColor:"a$",pointRadius:"cW",sceneProperties:"g"}},Hf={src:`
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
    `,attributes:{position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",pointRadius:"cW",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},a7=q(function(e,r,n,t){return a(Wf,n,ye(function(o,l,u,$,f,d,p,g){return A(De,g,Hf,n7,t,{a$:e,d:u,e:l,cW:r,f:d,g:o,h:f})}))}),Oc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bm",sceneProperties:"g"}},qt=function(e){var r=e;return r},uo=B1,wn=He(function(e,r,n,t,o){return a(Ze,n,ye(function(l,u,$,f,d,p,g,h){return A(De,i(pr,f,o,h),Nf,Oc,t,{bm:a(uo,qt(r),e),d:$,e:u,f:p,g:l,h:d})}))}),t7={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bm",pointRadius:"cW",sceneProperties:"g"}},i7=He(function(e,r,n,t,o){return a(Wf,t,ye(function(l,u,$,f,d,p,g,h){return A(De,h,Hf,t7,o,{bm:a(uo,qt(r),e),d:$,e:u,cW:n,f:p,g:l,h:d})}))}),Gf={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",materialColor:"dO",sceneProperties:"g",viewMatrix:"h"}},Of={src:`
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
    `,attributes:{normal:"u",position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},$o=q(function(e,r,n,t){return a(Ze,r,ye(function(o,l,u,$,f,d,p,g){var h=p.a,s=p.b;return A(De,i(pr,$,t,g),Of,Gf,n,{Z:s,b_:h.b_,cM:h.cM,cN:h.cN,cO:h.cO,dO:e,d:u,e:l,f:d,g:o,h:f})}))}),Uf={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",materialColorTexture:"dP",normalMapTexture:"bx",sceneProperties:"g",useNormalMap:"bF",viewMatrix:"h"}},qf={src:`
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
    `,attributes:{normal:"u",position:"cY",tangent:"fX",uv:"T"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},o7=yr(function(e,r,n,t,o,l){return a(Ze,t,ye(function(u,$,f,d,p,g,h,s){var w=h.a,x=h.b;return A(De,i(pr,d,l,s),qf,Uf,o,{Z:x,b_:w.b_,cM:w.cM,cN:w.cN,cO:w.cO,dP:e,d:f,e:$,bx:r,f:g,g:u,bF:n,h:p})}))}),Yf={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"dn",constantBaseColor:"dq",constantMetallic:"dr",constantRoughness:"ds",enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",metallicTexture:"dS",normalMapTexture:"bx",roughnessTexture:"ec",sceneProperties:"g",useNormalMap:"bF",viewMatrix:"h"}},c7=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(d){return function(p){return a(Ze,f,ye(function(g,h,s,w,x,S,C,y){var z=C.a,F=C.b;return A(De,i(pr,w,p,y),qf,Yf,d,{dn:e,dq:r,dr:l,ds:t,Z:F,b_:z.b_,cM:z.cM,cN:z.cN,cO:z.cO,dS:o,d:s,e:h,bx:u,f:S,ec:n,g,bF:$,h:x})}))}}}}}}}}}}},Jf={src:`
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
    `,attributes:{},uniforms:{baseColor:"dm",enabledLights:"Z",lights12:"b_",lights34:"cM",lights56:"cN",lights78:"cO",metallic:"dR",roughness:"eb",sceneProperties:"g",viewMatrix:"h"}},vo=yr(function(e,r,n,t,o,l){return a(Ze,t,ye(function(u,$,f,d,p,g,h,s){var w=h.a,x=h.b;return A(De,i(pr,d,l,s),Of,Jf,o,{dm:e,Z:x,b_:w.b_,cM:w.cM,cN:w.cN,cO:w.cO,dR:n,d:f,e:$,f:g,eb:r,g:u,h:p})}))}),l7=function(e){return{$:0,a:e}},Zf=m(function(e,r){return{$:1,a:e,b:r}}),Yt=m(function(e,r){if(r.$){var n=r.a.I;return M(n,1)}else return r.a,M(e,0)}),u7=function(e){return L(Wa,qa(e),Ya(e),Ja(e),1)},Uc=L(Wa,0,0,0,0),fo=m(function(e,r){if(r.$){var t=r.a.I;return M(t,Uc)}else{var n=r.a;return M(e,u7(n))}}),Xf=m(function(e,r){var n=M(e,r);if(n.a.$){var o=n.a.a.I;return a(Zf,M(o,Uc),a(Yt,o,r))}else if(n.b.$){var o=n.b.a.I;return a(Zf,a(fo,o,e),a(Yt,o,r))}else{var t=n.a.a;return n.b.a,l7(t)}}),$7=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),mo=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),v7=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),f7=function(e){return a(xr,e,1)},qc=a(xr,0,0),Xa=m(function(e,r){if(r.$){var t=r.a.I;return M(t,qc)}else{var n=r.a;return M(e,f7(n))}}),Qf=q(function(e,r,n,t){var o=L(v7,e,r,n,t);if(o.a.$){var f=o.a.a.I;return L(mo,M(f,Uc),a(Xa,f,r),a(Xa,f,n),a(Yt,f,t))}else if(o.b.$){var f=o.b.a.I;return L(mo,a(fo,f,e),M(f,qc),a(Xa,f,n),a(Yt,f,t))}else if(o.c.$){var f=o.c.a.I;return L(mo,a(fo,f,e),a(Xa,f,r),M(f,qc),a(Yt,f,t))}else if(o.d.$){var f=o.d.a.I;return L(mo,a(fo,f,e),a(Xa,f,r),a(Xa,f,n),M(f,1))}else{var l=o.a.a,u=o.b.a,$=o.c.a;return o.d.a,i($7,l,u,$)}}),m7={src:`
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
    `,attributes:{},uniforms:{backlight:"dj",colorTexture:"cx",sceneProperties:"g"}},Yc=He(function(e,r,n,t,o){return a(Ze,n,ye(function(l,u,$,f,d,p,g,h){return A(De,i(pr,f,o,h),Rf,m7,t,{dj:qt(r),cx:e,d:$,e:u,f:p,g:l,h:d})}))}),Kf={src:`
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
    `,attributes:{normal:"u",position:"cY",uv:"T"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},s7=q(function(e,r,n,t){return a(Ze,r,ye(function(o,l,u,$,f,d,p,g){var h=p.a,s=p.b;return A(De,i(pr,$,t,g),Kf,Uf,n,{Z:s,b_:h.b_,cM:h.cM,cN:h.cN,cO:h.cO,dP:e,d:u,e:l,bx:e,f:d,g:o,bF:0,h:f})}))}),d7=jo(function(e,r,n,t,o,l,u,$,f){return a(Ze,u,ye(function(d,p,g,h,s,w,x,S){var C=x.a,y=x.b;return A(De,i(pr,h,f,S),Kf,Yf,$,{dn:e,dq:r,dr:l,ds:t,Z:y,b_:C.b_,cM:C.cM,cN:C.cN,cO:C.cO,dS:o,d:g,e:p,bx:e,f:w,ec:n,g:d,bF:0,h:s})}))}),Jt=k(function(e,r,n){var t=e,o=r;return n<=.5?t+n*(o-t):o+(1-n)*(t-o)}),p7=function(e){var r=e;return i(Jt,r.fr,r.fo,.5)},g7=function(e){var r=e;return i(Jt,r.fs,r.fp,.5)},h7=function(e){var r=e;return i(Jt,r.ft,r.fq,.5)},b7=function(e){return i(Ke,p7(e),g7(e),h7(e))},ce=function(e){var r=tf(e),n=r.a,t=r.b,o=r.c;return{gM:to(b7(e)),hm:n/2,hn:t/2,ho:o/2}},Jc=m(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var $=e.b.a.I;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:var t=r.a,o=r.c,l=r.d;return L(Hc,$,ce(t),o,l);case 6:var t=r.a,o=r.c,l=r.d;return L(Hc,$,ce(t),o,l);case 7:var t=r.a,o=r.c,l=r.d;return L(Hc,$,ce(t),o,l);case 8:return R;case 9:return R;default:return R}}else{var n=e.b.a;switch(r.$){case 0:return R;case 1:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 2:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 3:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 4:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 5:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 6:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 7:var t=r.a,o=r.c,l=r.d;return L(_n,n,ce(t),o,l);case 8:var t=r.a,o=r.c;return L(_n,n,ce(t),o,0);case 9:var t=r.a,o=r.c;return L(_n,n,ce(t),o,0);default:var t=r.a,u=r.b,o=r.d;return L(a7,n,u,ce(t),o)}}case 1:if(e.b.$){e.a;var $=e.b.a.I,d=e.c;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:var t=r.a,o=r.c,l=r.d;return A(Yc,$,d,ce(t),o,l);case 6:var t=r.a,o=r.c,l=r.d;return A(Yc,$,d,ce(t),o,l);case 7:var t=r.a,o=r.c,l=r.d;return A(Yc,$,d,ce(t),o,l);case 8:return R;case 9:return R;default:return R}}else{var f=e.b.a,d=e.c;switch(r.$){case 0:return R;case 1:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 2:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 3:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 4:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 5:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 6:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 7:var t=r.a,o=r.c,l=r.d;return A(wn,f,d,ce(t),o,l);case 8:var t=r.a,o=r.c;return A(wn,f,d,ce(t),o,0);case 9:var t=r.a,o=r.c;return A(wn,f,d,ce(t),o,0);default:var t=r.a,u=r.b,o=r.d;return A(i7,f,d,u,ce(t),o)}}case 2:e.a;var p=e.b,g=e.c,h=a(Xf,p,g);if(h.$){var x=h.a,S=x.a;x.b;var C=h.b,y=C.a,z=C.b;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:return R;case 6:var t=r.a,o=r.c,w=r.d;return L(s7,S,ce(t),o,w);case 7:var t=r.a,o=r.c,w=r.d;return cr(o7,S,y,z,ce(t),o,w);case 8:return R;case 9:return R;default:return R}}else{var s=h.a;switch(r.$){case 0:return R;case 1:return R;case 2:var t=r.a,o=r.c,w=r.d;return L($o,s,ce(t),o,w);case 3:return R;case 4:var t=r.a,o=r.c,w=r.d;return L($o,s,ce(t),o,w);case 5:return R;case 6:var t=r.a,o=r.c,w=r.d;return L($o,s,ce(t),o,w);case 7:var t=r.a,o=r.c,w=r.d;return L($o,s,ce(t),o,w);case 8:return R;case 9:return R;default:return R}}default:e.a;var F=e.b,J=e.c,Q=e.d,g=e.e,O=L(Qf,F,J,Q,g);if(O.$){var te=O.a,de=te.a,Ce=te.b,pe=O.b,ge=pe.a,Pe=pe.b,he=O.c,Be=he.a,Ae=he.b,er=O.d,y=er.a,z=er.b;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:return R;case 6:var t=r.a,o=r.c,l=r.d;return Mm(d7,de,Ce,ge,Pe,Be,Ae,ce(t),o,l);case 7:var t=r.a,o=r.c,l=r.d;return c7(de)(Ce)(ge)(Pe)(Be)(Ae)(y)(z)(ce(t))(o)(l);case 8:return R;case 9:return R;default:return R}}else{var Z=O.a,X=O.b,N=O.c;switch(r.$){case 0:return R;case 1:return R;case 2:var t=r.a,o=r.c,l=r.d;return cr(vo,Z,X,N,ce(t),o,l);case 3:return R;case 4:var t=r.a,o=r.c,l=r.d;return cr(vo,Z,X,N,ce(t),o,l);case 5:return R;case 6:var t=r.a,o=r.c,l=r.d;return cr(vo,Z,X,N,ce(t),o,l);case 7:var t=r.a,o=r.c,l=r.d;return cr(vo,Z,X,N,ce(t),o,l);case 8:return R;case 9:return R;default:return R}}}}),Zc=function(e){var r=e;return r.ja},Xc=function(e){var r=e;return r.je},Qc=function(e){var r=e;return r.ew},_7=function(e){var r=e,n=Qc(r.ex),t=Xc(r.ex),o=Zc(r.ex),l=Qc(r.ev),u=Xc(r.ev),$=Zc(r.ev),f=Qc(r.eu),d=Xc(r.eu),p=Zc(r.eu);return p*u*n+d*l*o+f*$*t-f*u*o-d*$*n-p*l*t>0},w7=function(e){var r=to($a(e)),n=kr(Vn(e)),t=kr(Wn(e)),o=kr(Nn(e));return{eY:_7(e),w:o.ja,x:o.je,y:o.ew,z:t.ja,A:t.je,B:t.ew,C:n.ja,D:n.je,E:n.ew,P:r.ja,Q:r.je,R:r.ew,c1:1}},Qa=m(function(e,r){return{$:5,a:e,b:r}}),em=m(function(e,r){var n=r;switch(n.$){case 0:return R;case 5:var t=n.a,o=n.b,l=a(qv,t,e);return a(Qa,l,o);case 1:return a(Qa,e,n);case 3:return a(Qa,e,n);case 2:return a(Qa,e,n);default:return a(Qa,e,n)}}),rm=m(function(e,r){return a(em,w7(e),r)}),so=function(e){return{$:2,a:e}},x7=m(function(e,r){var n=e.a,t=e.b,o=e.c,l=r.gM;return{gM:{ja:n*l.ja,je:t*l.je,ew:o*l.ew},hm:n*r.hm,hn:t*r.hn,ho:o*r.ho}}),y7=R1,S7=V1,nm=function(e){return function(r){return function(n){return function(t){return function(o){return function(l){return function(u){return function($){return function(f){return function(d){var p=e.a,g=e.b,h=e.c,s=S7(t),w=s.ja,x=s.je,S=s.ew,C=s.f7,y=y7({f7:C,ja:w*p,je:x*g,ew:S*h});return at(r,n,y,o,l,u,$,f,d)}}}}}}}}}},Kc=m(function(e,r){switch(r.$){case 0:return Ef;case 5:var n=r.a,t=r.b;return a(Qa,n,a(Kc,e,t));case 1:var o=r.a,l=r.b;return a(Ze,a(x7,e,o),a(nm,e,l));case 3:return r;case 2:var l=r.a;return so(a(nm,e,l));default:var u=r.a;return uf(a(Y,Kc(e),u))}}),el=m(function(e,r){var n=r;return a(Kc,e,n)}),rl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},am=7683,tm=7682,C7=i(Cc,{dN:0,d8:0,et:15},{bS:ir,cb:Ha,cl:ir,cm:am},{bS:ir,cb:Ha,cl:ir,cm:tm}),z7=i(Cc,{dN:0,d8:0,et:15},{bS:ir,cb:Ha,cl:ir,cm:tm},{bS:ir,cb:Ha,cl:ir,cm:am}),nl=m(function(e,r){return e?a(j,z7,r):a(j,C7,r)}),P7={src:`
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
    `,attributes:{normal:"u",position:"cY"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"c3",viewMatrix:"h"}},M7=function(e){if(e.$){var r=e.c;return V(ye(function(n,t,o,l,u,$,f,d){return A(De,a(nl,l,d),P7,rl,r,{d:o,e:t,f:$,g:n,c3:f,h:u})}))}else return E},po=function(e){var r=M7(e);if(r.$)return R;var n=r.a;return so(n)},j7=q(function(e,r,n,t){var o=a(Jc,n,Df),l=function(){var p=M(e,r);return p.a?p.b?Ht(v([o,po(Bf)])):o:p.b?po(Bf):R}(),u=Xi(t),$=u.a,f=u.b,d=u.c;return a(rm,Zi(t),a(el,B($,f,d),l))}),L7=m(function(e,r){return L(j7,!0,!0,e,r)}),im=m(function(e,r){return{$:0,a:e,b:r}}),k7=function(e){var r=E0(e),n=r.ig,t=r.hj,o=r.gy;return i(Et,n,t,o)},T7=function(e){return a(im,0,cc(k7(e)))},Zt=function(e){var r=e;return bn(r)},D7=m(function(e,r){var n=e.cY,t=e.u;return a(j,{u:oo(t),cY:dr(n)},r)}),A7=ei(function(e,r,n,t,o,l,u){e:for(;;)if(u.b){var $=u.a,f=u.b,d=Ja($.cY),p=Ya($.cY),g=qa($.cY),h=a(Ca,e,g),s=a(Xe,r,g),w=a(Ca,n,p),x=a(Xe,t,p),S=a(Ca,o,d),C=a(Xe,l,d),y=f;e=h,r=s,n=w,t=x,o=S,l=C,u=y;continue e}else return Pf({fo:r,fp:t,fq:l,fr:e,fs:n,ft:o})}),om=m(function(e,r){var n=Ja(e.cY),t=Ya(e.cY),o=qa(e.cY);return Lo(A7,o,o,t,t,n,n,r)}),I7=function(e){var r=i(Ul,D7,T,Ec(e));if(r.b){var n=r.a,t=r.b,o=a(Ut,r,Ic(e)),l=a(om,n,t);return L(Cf,l,e,o,0)}else return Dc},cm=m(function(e,r){var n=e,t=r,o=n.ev,l=o,u=n.eu,$=u;return{ja:t.ja*$.ja+t.je*l.ja,je:t.ja*$.je+t.je*l.je,ew:t.ja*$.ew+t.je*l.ew}}),go=function(e){var r=e;return Rn(r)},al=function(e){return Aa(2*oa*e)},F7=Cr,lm=F7({dW:Nr,eu:sf,ev:df}),um=function(){var e=72,r=a(Lv,e,al(1)),n=en(1),t=Fa(Tv),o=Fa(kv),l=en(1),u=a(xe,.5,l),$=i(Ke,Lr,Lr,u),f=a(xe,-.5,l),d=i(Ke,Lr,Lr,f),p=function(s){var w=a(xe,s,r),x=Fa(a(cm,lm,oc(w))),S=a(xe,Zt(w),n),C=a(xe,go(w),n),y=i(Ke,S,C,u),z=i(Ke,S,C,f),F=a(ka,e,s+1),J=a(xe,F,r),Q=Fa(a(cm,lm,oc(J))),O=a(xe,Zt(J),n),Z=a(xe,go(J),n),X=i(Ke,O,Z,f),N=i(Ke,O,Z,u);return v([B({u:o,cY:d},{u:o,cY:X},{u:o,cY:z}),B({u:x,cY:z},{u:Q,cY:X},{u:Q,cY:N}),B({u:x,cY:z},{u:Q,cY:N},{u:x,cY:y}),B({u:t,cY:$},{u:t,cY:y},{u:t,cY:N})])},g=a(Y,p,a($n,0,e-1)),h=Wc(ur(g));return Tc(I7(h))}(),$m=Ff(um),B7=function(e){var r=ec(e),n=K0(r),t=n.a,o=n.b;return Kr({dW:rc(e),eu:t,ev:o,ex:r})},E7=q(function(e,r,n,t){var o=B7(hc(t)),l=a(Jc,n,um),u=function(){var g=M(e,r);return g.a?g.b?Ht(v([l,po($m)])):l:g.b?po($m):R}(),$=Nv(t),f=$,d=Rv(t),p=d;return a(rm,o,a(el,B(f,f,p),u))}),V7=m(function(e,r){return L(E7,!0,!0,e,r)}),vm={src:`
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
    `,attributes:{triangleVertex:"ej"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"ch",viewMatrix:"h"}},fm={src:`
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
    `,attributes:{triangleVertex:"ej"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"ch",viewMatrix:"h"}},Xt=function(e){var r=Ot(e),n=r.a,t=r.b,o=r.c,l=Za(n),u=Za(t),$=Za(o);return nn({e7:l.ja,e8:u.ja,e9:$.ja,fa:0,fb:l.je,fc:u.je,fd:$.je,fe:0,ff:l.ew,fg:u.ew,fh:$.ew,fi:0,fj:0,fk:0,fl:0,fm:0})},ho=Tf(v([B({ej:0},{ej:1},{ej:2})])),R7=m(function(e,r){var n=Mf(r),t=ce(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.I,R;var o=e.b.a;return a(Ze,t,ye(function(y,z,F,J,Q,O,Z,X){return A(De,i(pr,J,0,X),vm,Gc,ho,{a$:o,d:F,e:z,f:O,g:y,ch:Xt(r),h:Q})}));case 1:if(e.b.$)return e.a,R;var l=e.b.a,u=e.c;return a(Ze,t,ye(function(y,z,F,J,Q,O,Z,X){return A(De,i(pr,J,0,X),vm,Oc,ho,{bm:a(uo,qt(u),l),d:F,e:z,f:O,g:y,ch:Xt(r),h:Q})}));case 2:e.a;var $=e.b,f=e.c,d=a(Xf,$,f);if(d.$)return R;var p=d.a;return a(Ze,t,ye(function(y,z,F,J,Q,O,Z,X){var N=Z.a,te=Z.b;return A(De,i(pr,J,0,X),fm,Gf,ho,{Z:te,b_:N.b_,cM:N.cM,cN:N.cN,cO:N.cO,dO:p,d:F,e:z,f:O,g:y,ch:Xt(r),h:Q})}));default:e.a;var g=e.b,h=e.c,s=e.d,f=e.e,w=L(Qf,g,h,s,f);if(w.$)return R;var x=w.a,S=w.b,C=w.c;return a(Ze,t,ye(function(y,z,F,J,Q,O,Z,X){var N=Z.a,te=Z.b;return A(De,i(pr,J,0,X),fm,Jf,ho,{dm:x,Z:te,b_:N.b_,cM:N.cM,cN:N.cN,cO:N.cO,dR:C,d:F,e:z,f:O,eb:S,g:y,ch:Xt(r),h:Q})}))}}),N7=function(){var e=v([{bE:a(xr,0,1)},{bE:a(xr,1,1)},{bE:a(xr,2,1)},{bE:a(xr,0,-1)},{bE:a(xr,1,-1)},{bE:a(xr,2,-1)}]),r=v([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return a(Ut,e,r)}(),W7={src:`
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
    `,attributes:{triangleShadowVertex:"bE"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"c3",triangleVertexPositions:"ch",viewMatrix:"h"}},mm=function(e){return so(ye(function(r,n,t,o,l,u,$,f){return A(De,a(nl,o,f),W7,rl,N7,{d:t,e:n,f:u,g:r,c3:$,ch:Xt(e),h:l})}))},H7=q(function(e,r,n,t){var o=a(R7,n,t),l=M(e,r);return l.a?l.b?Ht(v([o,mm(t)])):o:l.b?mm(t):R}),G7=m(function(e,r){return L(H7,!0,!0,e,r)}),O7=m(function(e,r){var n=Va(r),t=Va(e),o=Ea(r),l=Ea(e),u=Ba(r),$=Ba(e);return{fo:a(We,$,u),fp:a(We,l,o),fq:a(We,t,n),fr:a(Oe,$,u),fs:a(Oe,l,o),ft:a(Oe,t,n)}}),U7=function(e){var r=mc(e),n=r.a,t=r.b;return a(O7,n,t)},sm={src:`
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
    `,attributes:{lineSegmentVertex:"e5"},uniforms:{lineSegmentEndPoint:"e3",lineSegmentStartPoint:"e4",modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},q7=m(function(e,r){return{$:1,a:e,b:r}}),Y7=q7({eJ:2,eW:0,fv:1}),dm=Y7(v([M({e5:0},{e5:1})])),J7=m(function(e,r){var n=U7(r),t=ce(n),o=mc(r),l=o.a,u=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.I,R;var $=e.b.a;return a(Ze,t,ye(function(d,p,g,h,s,w,x,S){return A(De,S,sm,Gc,dm,{a$:$,e3:dr(u),e4:dr(l),d:g,e:p,f:w,g:d,h:s})}));case 1:if(e.b.$)return R;var $=e.b.a,f=e.c;return a(Ze,t,ye(function(p,g,h,s,w,x,S,C){return A(De,C,sm,Oc,dm,{bm:a(uo,qt(f),$),e3:dr(u),e4:dr(l),d:h,e:g,f:x,g:p,h:w})}));case 2:return R;default:return R}}),Z7=m(function(e,r){return a(J7,e,r)}),pm=m(function(e,r){var n=e,t=r;return n/t}),X7=He(function(e,r,n,t,o){e:for(;;){var l=t(r/n),u=a(j,l,o);if(ue(r,e))return u;var $=e,f=r-1,d=n,p=t,g=u;e=$,r=f,n=d,t=p,o=g;continue e}}),gm=m(function(e,r){return e<1?T:A(X7,0,e,e,r,T)}),Q7=m(function(e,r){var n=e.cY,t=e.u,o=e.T,l=o,u=l.a,$=l.b;return a(j,{u:oo(t),cY:dr(n),T:a(xr,u,$)},r)}),K7=function(e){var r=i(Ul,Q7,T,Ec(e));if(r.b){var n=r.a,t=r.b,o=a(Ut,r,Ic(e)),l=a(om,n,t);return L(zf,l,e,o,0)}else return Dc},hm=m(function(e,r){var n=e,t=r,o=bn(t);return{ja:o*bn(n),je:o*Rn(n),ew:Rn(t)}}),e8=function(){var e=en(1),r=72,n=a($n,0,r-1),t=a(gm,r,a(Jt,Lr,al(1))),o=$t(r/2),l=a($n,0,o-1),u=a(gm,o,a(Jt,Ia(90),Ia(-90))),$=Rc(ur(a(Y,function(p){return a(Y,function(g){return{u:Fa(a(hm,p,g)),cY:i(Ke,a(xe,Zt(g)*Zt(p),e),a(xe,Zt(g)*go(p),e),a(xe,go(g),e)),T:M(a(pm,p,al(1)),a(pm,a(Wt,Ia(90),g),Ia(180)))}},u)},t))),f=m(function(p,g){return p*(o+1)+g}),d=ur(a(Y,function(p){return ur(a(Y,function(g){var h=a(f,p+1,g),s=a(f,p,g),w=a(f,p+1,g+1),x=a(f,p,g+1);return v([B(x,w,h),B(x,h,s)])},l))},n));return Tc(K7(a(Af,$,d)))}(),bo=72,_o=2*bo,r8=m(function(e,r){e:for(;;){var n=_o+1,t=a(ka,_o,2*e+3),o=a(ka,_o,2*e+2),l=2*e+1,u=2*e,$=_o,f=a(j,B($,u,o),a(j,B(u,t,o),a(j,B(u,l,t),a(j,B(l,n,t),r))));if(e){var d=e-1,p=f;e=d,r=p;continue e}else return f}}),n8=k(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),a8=m(function(e,r){e:for(;;){var n=i(n8,0,2*oa,e/bo),t={co:n,cT:0,c$:1},o={co:n,cT:1,c$:1},l=a(j,t,a(j,o,r));if(e){var u=e-1,$=l;e=u,r=$;continue e}else return l}}),t8=function(){var e=a(a8,bo-1,v([{co:0,cT:0,c$:0},{co:0,cT:1,c$:0}])),r=a(r8,bo-1,T);return a(Ut,e,r)}(),i8={src:`
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
    `,attributes:{angle:"co",offsetScale:"cT",radiusScale:"c$"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"c3",viewMatrix:"h"}},bm=function(e){return so(ye(function(r,n,t,o,l,u,$,f){return A(De,a(nl,!0,f),i8,rl,t8,{a$:i(Et,0,0,1),d:t,e:n,f:u,g:r,c3:$,h:l})}))},o8=function(e){var r=Lf(e);return{eY:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,P:r.ja,Q:r.je,R:r.ew,c1:1}},c8=m(function(e,r){return a(em,o8(e),r)}),l8=q(function(e,r,n,t){var o=a(Jc,n,e8),l=function(){var f=M(e,r);return f.a?f.b?Ht(v([o,bm()])):o:f.b?bm():R}(),u=Ki(t),$=u;return a(c8,a(Hi,Nr,Qi(t)),a(el,B($,$,$),l))}),u8=m(function(e,r){return L(l8,!0,!0,e,r)}),$8=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),v8=He(function(e,r,n,t,o){return{$:3,a:e,b:r,c:n,d:t,e:o}}),f8=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return a(im,r,n);case 1:var r=e.a,n=e.b,t=e.c;return i($8,r,n,t);case 2:var r=e.a,n=e.b,o=e.c;return i(Iv,r,n,o);default:var r=e.a,n=e.b,l=e.c,u=e.d,o=e.e;return A(v8,r,n,l,u,o)}},m8=f8,_m=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return v([a(L7,r,n)]);case 1:var r=e.a,t=e.b;return v([a(G7,r,t)]);case 3:var r=e.a,o=e.b;return v([a(u8,m8(r),o)]);case 2:var r=e.a,l=e.b;return v([a(V7,r,l)]);case 4:var u=e.a,$=e.b;return v([a(Z7,T7(u),$)]);default:var f=e.a;return a(xa,_m,f)}},s8=function(e){return a(xa,_m,e)},d8=m(function(e,r){return C9({bh:W6(e.gs),gI:e.gI,bj:H6(.5),du:e.du,bk:M(Gv(ke(e.c2.i8)),Gv(ke(e.c2.hq))),bo:s8(r),iu:!0,iK:a(hm,Aa(e.iJ),Aa(e.iL)),f0:qi})}),p8=m(function(e,r){return a(d8,{gs:a(Av,Bt(r.m).gt,Bt(r.m).b2),gI:Pv(e),du:e.du,c2:e.c2,iJ:Qr(225),iL:Qr(315)},v([bc(v([bc(T),a(N6,e,r)]))]))}),g8={$:2},Ka=rr("button"),h8=a(Ka,v([a(ve,"margin","10px"),gn(g8)]),v([Ne("Set selected color as background color")])),wo=rr("h2"),tl=rr("hr"),b8={$:5},_8={$:7},w8={$:4},x8={$:3},y8={$:6},S8=function(e){var r=e;return r.p},C8=function(e){return Br(S8(e))+1},z8=function(e){var r=e;return 1+Br(r.p)+Br(r.H)},P8=rr("span"),M8=function(e){return a(Ve,T,v([a(wo,T,v([Ne("LevelOld Selection")])),a(i$,T,v([a(Ka,v([gn(x8)]),v([Ne("<")])),a(P8,v([a(ve,"margin","10px")]),v([Ne(ea(v([D(C8(e.m))," / ",D(z8(e.m))])))])),a(Ka,v([gn(w8)]),v([Ne(">")]))])),a(Ve,v([a(ve,"margin-top","10px")]),v([a(Ka,v([gn(b8)]),v([Ne("Add level")]))])),a(Ve,v([a(ve,"margin-top","10px")]),v([a(Ka,v([gn(y8)]),v([Ne("Remove current level")]))])),a(Ve,v([a(ve,"margin-top","10px")]),v([a(Ka,v([gn(_8)]),v([Ne("Move level one up")]))]))]))},j8=function(e){return{$:0,a:e}},L8=a(je,function(e){return e.m},a(je,Bt,function(e){return e.b2})),k8=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},T8=function(e){return a(U$,"change",a(mt,e,av))},D8=rr("option"),il=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},A8=function(e){return a(D8,v([Bi(il(e))]),v([Ne(il(e))]))},I8=rr("select"),F8=function(e){return a(Ve,v([a(ve,"margin","5px")]),v([Ne("Choose a palette:"),a(I8,v([T8(a(je,k8,j8)),Bi(il(L8(e)))]),a(Y,A8,v([2,0,1,3,4])))]))},B8=function(e){return{$:1,a:e}},E8=m(function(e,r){var n=r.a,t=r.b,o=m(function(l,u){return a(e,l+1,u)});return a(Na,a(e,0,n),a(Ko,o,t))}),V8=function(e){var r=e.a,n=e.b;return a(j,r,n)},R8=function(e){var r=Bt(e.m),n=20,t=0,o=13,l=2,u=m(function($,f){var d=($/n|0)*(o+t),p=a(ka,n,$)*(o+t),g=ue(e.aR,$)?M(l,o-2*l):M(0,o),h=g.a,s=g.b;return a(Ve,v([a(ve,"position","absolute"),a(ve,"width",ne(s)+"px"),a(ve,"height",ne(s)+"px"),a(ve,"background-color",Ov(f)),a(ve,"transform","translate("+(ne(p)+("px,"+(ne(d)+"px)")))),gn(B8($)),a(ve,"border","solid white "+(ne(h)+"px"))]),T)});return a(Ve,v([a(ve,"position","relative"),a(ve,"overflow","scroll"),a(ve,"height","210px")]),V8(a(E8,u,Dv(r.b2))))},N8=m(function(e,r){return vn(a(Ve,v([a(ve,"position","absolute"),a(ve,"height","100%"),a(ve,"width","260px"),a(ve,"right","0px"),a(ve,"margin","40px"),a(ve,"font-size","12px"),a(ve,"overflow","scroll")]),v([a(wo,T,v([Ne("Editing the selected level")])),a(Ve,T,v([Ne("Press mouse to add trixel")])),a(Ve,T,v([Ne("Hold shift and press mouse to remove trixel")])),a(tl,T,T),a(wo,T,v([Ne("Color Palette")])),a(Ve,T,v([F8(r)])),a(Ve,T,v([h8])),a(Ve,T,v([Ne(D(r.aR))])),a(Ve,T,v([R8(r)])),a(tl,T,T),M8(r),a(tl,T,T),a(wo,T,v([Ne("What More?")]))])))}),W8=cr(I5,p8,Gg,H5,V5,N8,Qg);const H8={Main:{init:W8(a(U,function(e){return lr({hI:e})},a(G,"inputs",a(U,function(e){return a(U,function(r){return a(U,function(n){return a(U,function(t){return a(U,function(o){return a(U,function(l){return a(U,function(u){return lr({eF:u,du:l,g8:o,e_:t,cX:n,c2:r,i7:e})},a(G,"clock",Ge))},a(G,"devicePixelRatio",Ge))},a(G,"dt",Ge))},a(G,"keyboard",a(U,function(t){return a(U,function(o){return a(U,function(l){return a(U,function(u){return a(U,function($){return a(U,function(f){return a(U,function(d){return a(U,function(p){return a(U,function(g){return lr({gn:g,gW:p,eI:d,g7:f,hQ:$,id:u,ij:l,fR:o,f$:t})},a(G,"alt",Se))},a(G,"control",Se))},a(G,"down",Se))},a(G,"downs",bi(_a)))},a(G,"left",Se))},a(G,"pressedKeys",bi(_a)))},a(G,"right",Se))},a(G,"shift",Se))},a(G,"up",Se))))},a(G,"pointer",a(U,function(n){return a(U,function(t){return a(U,function(o){return a(U,function(l){return a(U,function(u){return a(U,function($){return a(U,function(f){return a(U,function(d){return lr({eI:d,dB:f,hY:$,ik:u,il:l,f$:o,ja:t,je:n})},a(G,"down",Se))},a(G,"isDown",Se))},a(G,"move",Se))},a(G,"rightDown",Se))},a(G,"rightUp",Se))},a(G,"up",Se))},a(G,"x",Ge))},a(G,"y",Ge))))},a(G,"screen",a(U,function(r){return a(U,function(n){return lr({hq:n,i8:r})},a(G,"height",Ge))},a(G,"width",Ge))))},a(G,"wheel",a(U,function(e){return a(U,function(r){return lr({g$:r,g0:e})},a(G,"deltaX",Ge))},a(G,"deltaY",Ge)))))))(0)}},K={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},G8=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),o=s=>s.code=="ArrowLeft",l=s=>s.code=="ArrowRight",u=s=>s.code=="ArrowUp",$=s=>s.code=="ArrowDown",f=s=>s.button==0,d=s=>s.button==2;function p(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function g(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(K.keyboard.downs.push(s.code),K.keyboard.pressedKeys.push(s.code),r(s)&&(K.keyboard.control=!0),n(s)&&(K.keyboard.alt=!0),t(s)&&(console.log("yo"),K.keyboard.shift=!0),o(s)&&(K.keyboard.left=!0),l(s)&&(K.keyboard.right=!0),u(s)&&(K.keyboard.up=!0),$(s)&&(console.log("yey"),K.keyboard.down=!0))}),window.addEventListener("keyup",s=>{K.keyboard.pressedKeys=K.keyboard.pressedKeys.filter(w=>w!=s.code),r(s)&&(K.keyboard.control=!1,K.keyboard.pressedKeys=[]),n(s)&&(K.keyboard.alt=!1),t(s)&&(K.keyboard.shift=!1),o(s)&&(K.keyboard.left=!1),l(s)&&(K.keyboard.right=!1),u(s)&&(K.keyboard.up=!1),$(s)&&(K.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{K.pointer.x=-.5*K.screen.width+s.pageX,K.pointer.y=.5*K.screen.height-s.pageY,f(s)&&(K.pointer.down=!0,K.pointer.isDown=!0),d(s)&&(K.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{K.pointer.move=!0,K.pointer.x=-.5*K.screen.width+s.pageX,K.pointer.y=.5*K.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{f(s)&&(K.pointer.up=!0,K.pointer.isDown=!1),d(s)&&(K.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{f(s)&&(K.pointer.up=!0,K.pointer.isDown=!1),d(s)&&(K.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{K.wheel.deltaX=s.deltaX,K.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{p(K)}),window.addEventListener("focus",s=>{p(K)}),window.addEventListener("visibilitychange",s=>{p(K)}),window.addEventListener("resize",()=>{K.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(s){const w=s/1e3,x=w-K.clock;x<.009||(K.dt=x,K.clock=w,e.ports.tick.send(K),g(K)),window.requestAnimationFrame(h)}},O8=H8.Main.init({node:document.querySelector("#app div"),flags:{inputs:K}});G8(O8);
