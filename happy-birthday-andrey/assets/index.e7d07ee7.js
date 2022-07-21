const Xu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Xu();function Lr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Lr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Lr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function A(e){return Lr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Lr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return Lr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return Lr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Lr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function qt(e){return Lr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function k(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Yt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Qu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ku=[];function ev(e){return e.length}var rv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),nv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,S(n,r)}),av=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var tv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+ov()),r});function ov(e){return"<internals>"}function on(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Cr(e,r){for(var n,a=[],t=pt(e,r,0,a);t&&(n=a.pop());t=pt(n.a,n.b,0,a));return t}function pt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&on(5),!1;if(n>100)return a.push(S(e,r)),!0;e.$<0&&(e=yi(e),r=yi(r));for(var t in e)if(!pt(e[t],r[t],n+1,a))return!1;return!0}$(Cr);$(function(e,r){return!Cr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var iv=$(function(e,r){var n=O(e,r);return n<0?Ec:n?Jf:Rc}),Mn=0;function S(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function We(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var cv=$(tr);function h(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function Va(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var lv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});A(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(k(e,r.a,n.a,a.a,t.a));return h(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Va(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return h(Va(r).sort(function(n,a){var t=o(e,n,a);return t===Rc?0:t===Ec?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var uv=$(Math.pow);$(function(e,r){return r%e});var vv=$(function(e,r){var n=r%e;return e===0?on(11):n>0&&e<0||n<0&&e>0?n+e:n}),$v=Math.PI,fv=Math.cos,sv=Math.sin,dv=Math.tan,mv=Math.atan;$(Math.atan2);function pv(e){return e}function bv(e){return e===1/0||e===-1/0}var gv=Math.ceil,hv=Math.floor,_v=Math.round,wv=Math.sqrt,li=Math.log,yv=isNaN;function xv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Sv=$(function(e,r){return e+r});function Cv(e){var r=e.charCodeAt(0);return isNaN(r)?J:ee(55296<=r&&r<=56319?S(e[0]+e[1],e.slice(2)):S(e[0],e.slice(1)))}$(function(e,r){return e+r});function Lv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function kv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Pv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),zv=$(function(e,r){return r.split(e)}),Tv=$(function(e,r){return r.join(e)}),Mv=y(function(e,r,n){return n.slice(e,r)});function Vv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Dv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Bv=$(function(e,r){return r.indexOf(e)>-1}),Av=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Fv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function $c(e){return e+""}function Rv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return J;r=10*r+i-48}return t==a?J:ee(n==45?-r:r)}function Ev(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?ee(r):J}function jv(e){return Va(e).join("")}function Nv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Zv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Gv(e){return{$:0,a:e}}function Xt(e){return{$:2,b:e}}var Wv=Xt(function(e){return typeof e=="boolean"?$e(e):Ke("a BOOL",e)}),Hv=Xt(function(e){return typeof e=="number"?$e(e):Ke("a FLOAT",e)}),Iv=Xt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ke("a STRING",e)});function Ov(e){return{$:3,b:e}}var Uv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function kr(e,r){return{$:9,f:e,g:r}}var Jv=$(function(e,r){return{$:10,b:r,h:e}}),qv=$(function(e,r){return kr(e,[r])}),Yv=y(function(e,r,n){return kr(e,[r,n])});A(function(e,r,n,a){return kr(e,[r,n,a])});ge(function(e,r,n,a,t){return kr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return kr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return kr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return kr(e,[r,n,a,t,i,c,l])});qt(function(e,r,n,a,t,i,c,l,u){return kr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ge(e,n)}catch(a){return we(o(lo,"This is not valid JSON! "+a.message,r))}});var fc=$(function(e,r){return Ge(e,r)});function Ge(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ke("null",r);case 3:return Gn(r)?ui(e.b,r,h):Ke("a LIST",r);case 4:return Gn(r)?ui(e.b,r,Xv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=Ge(e.b,r[n]);return qe(v)?v:we(o(xi,n,v.a));case 7:var a=e.e;if(!Gn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ge(e.b,r[a]);return qe(v)?v:we(o(jc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ge(e.b,r[i]);if(!qe(v))return we(o(xi,i,v.a));t=tr(S(i,v.a),t)}return $e(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ge(l[u],r);if(!qe(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ge(e.b,r);return qe(v)?Ge(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ge(d.a,r);if(qe(v))return v;s=tr(v.a,s)}return we(qf(Re(s)));case 1:return we(o(lo,e.a,r));case 0:return $e(e.a)}}function ui(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ge(e,r[i]);if(!qe(c))return we(o(jc,i,c.a));t[i]=c.a}return $e(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xv(e){return o(fs,e.length,function(r){return e[r]})}function Ke(e,r){return we(o(lo,"Expecting "+e,r))}function Yr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Yr(e.b,r.b);case 6:return e.d===r.d&&Yr(e.b,r.b);case 7:return e.e===r.e&&Yr(e.b,r.b);case 9:return e.f===r.f&&vi(e.g,r.g);case 10:return e.h===r.h&&Yr(e.b,r.b);case 11:return vi(e.g,r.g)}}function vi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Yr(e[a],r[a]))return!1;return!0}var Qv=$(function(e,r){return JSON.stringify(r,null,e)+""});function sc(e){return e}y(function(e,r,n){return n[e]=r,n});function jr(e){return{$:0,a:e}}function Kv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var bt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function e$(e){return{$:5,b:e}}var r$=0;function Qt(e){var r={$:0,e:r$++,f:e,g:null,h:[]};return Kt(r),r}function dc(e){return pr(function(r){r(jr(Qt(e)))})}function mc(e,r){e.h.push(r),Kt(e)}var n$=$(function(e,r){return pr(function(n){mc(e,r),n(jr(Mn))})}),Ua=!1,$i=[];function Kt(e){if($i.push(e),!Ua){for(Ua=!0;e=$i.shift();)a$(e);Ua=!1}}function a$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Kt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}A(function(e,r,n,a){return eo(r,a,e.e4,e.fO,e.fG,function(){return function(){}})});function eo(e,r,n,a,t,i){var c=o(fc,e,r?r.flags:void 0);qe(c)||on(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=t$(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),si(l,b.b,t(v))}return si(l,u.b,t(v)),d?{ports:d}:{}}var rr={};function t$(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=i$(t,r)}return n}function o$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function i$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(bt,l,e$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?k(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Qt(o(bt,l,e.b))}var c$=$(function(e,r){return pr(function(n){e.g(r),n(jr(Mn))})});$(function(e,r){return o(n$,e.h,{$:0,a:r})});function pc(e){return function(r){return{$:1,k:e,l:r}}}function l$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var fi=[],Ja=!1;function si(e,r,n){if(fi.push({p:e,q:r,r:n}),!Ja){Ja=!0;for(var a;a=fi.shift();)u$(a.p,a.q,a.r);Ja=!1}}function u$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)mc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=v$(e,t,a,r.l);n[t]=$$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function v$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function $$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function f$(e){rr[e]&&on(3)}$(function(e,r){return r});function s$(e,r){return f$(e),rr[e]={f:d$,u:r,a:m$},pc(e)}var d$=$(function(e,r){return function(n){return e(r(n))}});function m$(e,r){var n=P,a=rr[e].u,t=jr(null);rr[e].b=t,rr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(fc,a,c);qe(l)||on(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var va,ur=typeof document!="undefined"?document:{};function ro(e,r){e.appendChild(r)}A(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(wr(e,function(){}),t),{}});function gt(e){return{$:0,a:e}}var bc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:no(n),e:t,f:e,b:i}})}),Nr=bc(void 0),p$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:no(n),e:t,f:e,b:i}})}),b$=p$(void 0);function g$(e,r,n,a){return{$:3,d:no(e),g:r,h:n,i:a}}var h$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Pr([e,r],function(){return e(r)})});y(function(e,r,n){return Pr([e,r,n],function(){return o(e,r,n)})});A(function(e,r,n,a){return Pr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Pr([e,r,n,a,t],function(){return k(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return Pr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return Pr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Pr([e,r,n,a,t,i,c,l],function(){return Yt(e,r,n,a,t,i,c,l)})});qt(function(e,r,n,a,t,i,c,l,u){return Pr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var gc=$(function(e,r){return{$:"a0",n:e,o:r}}),_$=$(function(e,r){return{$:"a1",n:e,o:r}}),hc=$(function(e,r){return{$:"a2",n:e,o:r}}),zr=$(function(e,r){return{$:"a3",n:e,o:r}}),w$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function y$(e){return e=="script"?"p":e}function x$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(gc,r.n,S$(e,r.o)):r});function S$(e,r){var n=so(r);return{$:r.$,a:n?p(ss,n<3?C$:L$,Be(e),r.a):o(da,e,r.a)}}var C$=$(function(e,r){return S(e(r.a),r.b)}),L$=$(function(e,r){return{al:e(r.al),cT:r.cT,cI:r.cI}});function no(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?di(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?di(c,t,i):c[t]=i}return r}function di(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function wr(e,r){var n=e.$;if(n===5)return wr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=wr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ht(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),ht(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ro(c,wr(n===1?l[u]:l[u].b,r));return c}function ht(e,r,n){for(var a in n){var t=n[a];a==="a1"?k$(e,t):a==="a0"?T$(e,r,t):a==="a3"?P$(e,t):a==="a4"?z$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function k$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function P$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function z$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function T$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=M$(r,i),e.addEventListener(t,c,ao&&{passive:so(i)<2}),a[t]=c}}var ao;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ao=!0}}))}catch{}function M$(e,r){function n(a){var t=n.q,i=Ge(t.a,a);if(!!qe(i)){for(var c=so(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cT,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cI)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function V$(e,r){return e.$==r.$&&Yr(e.a,r.a)}function _c(e,r){var n=[];return Ye(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ye(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=N$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ye(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!D$(d,m):d!==m)&&he(n,2,a,m),Ye(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:mi(e,r,n,a,B$);return;case 2:mi(e,r,n,a,A$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=to(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function D$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function mi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=to(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function to(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=to(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&V$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function B$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ye(s,i[v],n,++a),a+=s.b||0}}function A$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,L=b.b,T=void 0,Z=void 0;if(w===x){f++,Ye(_,L,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,G=j.b;Z=x===N}if(E){var F=E.a,Y=E.b;T=w===F}if(T&&Z){f++,Ye(_,Y,t,f),fn(i,t,w,L,m,c),f+=_.b||0,f++,sn(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(T){f++,fn(i,t,x,L,m,c),Ye(_,Y,t,f),f+=_.b||0,d+=1,m+=2;continue}if(Z){f++,sn(i,t,w,_,f),f+=_.b||0,f++,Ye(G,L,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,sn(i,t,w,_,f),fn(i,t,x,L,m,c),f+=_.b||0,f++,Ye(G,Y,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;sn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];fn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var wc="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ye(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+wc,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ye(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}sn(e,r,n+wc,a,t)}function yc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)yc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=dn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function xc(e,r,n,a){return n.length===0?e:(yc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=F$(t,a);t===e&&(e=i)}return e}function F$(e,r){switch(r.$){case 0:return R$(e,r.s,r.u);case 4:return ht(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(wr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return E$(e,r);case 5:return r.s(e);default:on(10)}}function R$(e,r,n){var a=e.parentNode,t=wr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function E$(e,r){var n=r.s,a=j$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:wr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ro(e,a),e}function j$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ro(n,i.c===2?i.s:wr(i.z,r.u))}return n}}function oo(e){if(e.nodeType===3)return gt(e.textContent);if(e.nodeType!==1)return gt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(zr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(oo(v[a]),u);return p(Nr,l,r,u)}function N$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Z$=A(function(e,r,n,a){return eo(r,a,e.e4,e.fO,e.fG,function(t,i){var c=e.fQ,l=a.node,u=oo(l);return Sc(i,function(v){var s=c(v),d=_c(u,s);l=xc(l,u,d,t),u=s})})});A(function(e,r,n,a){return eo(r,a,e.e4,e.fO,e.fG,function(t,i){var c=e.cQ&&e.cQ(t),l=e.fQ,u=ur.title,v=ur.body,s=oo(v);return Sc(i,function(d){va=c;var m=l(d),f=Nr("body")(P)(m.ew),g=_c(s,f);v=xc(v,s,g,t),s=f,va=0,u!==m.fK&&(ur.title=u=m.fK)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Sc(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}$(function(e,r){return o(bo,mo,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(bo,mo,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(bo,mo,pr(function(){history.replaceState({},"",r),e()}))});var G$={addEventListener:function(){},removeEventListener:function(){}},W$=typeof window!="undefined"?window:G$;y(function(e,r,n){return dc(pr(function(a){function t(i){Qt(n(i))}return e.addEventListener(r,t,ao&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ge(e,r);return qe(n)?ee(n.a):J});function Cc(e,r){return pr(function(n){fa(function(){var a=document.getElementById(e);n(a?jr(r(a)):Kv(ms(e)))})})}function H$(e){return pr(function(r){fa(function(){r(jr(e()))})})}$(function(e,r){return Cc(r,function(n){return n[e](),Mn})});$(function(e,r){return H$(function(){return W$.scroll(e,r),Mn})});y(function(e,r,n){return Cc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var I$=$(function(e,r){var n="g";e.fh&&(n+="m"),e.ey&&(n+="i");try{return ee(new RegExp(r,n))}catch{return J}});$(function(e,r){return r.match(e)!==null});var O$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ee(d):J}a.push(k(yl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});A(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ee(v):J}return n(k(yl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var U$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/J$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function J$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var io=new Float64Array(3),pi=new Float64Array(3),bi=new Float64Array(3),q$=y(function(e,r,n){return new Float64Array([e,r,n])}),Y$=function(e){return e[0]},X$=function(e){return e[1]},Q$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var K$=function(e){return new Float64Array([e.fV,e.fZ,e.c2])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Lc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Lc);function kc(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(Lc(e,r,n),n)}$(kc);function Pc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Pc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var ef=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function _t(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(_t);$(function(e,r){var n,a=io,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var rf=A(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var nf=function(e){return{fV:e[0],fZ:e[1],c2:e[2],en:e[3]}},af=function(e){return new Float64Array([e.fV,e.fZ,e.c2,e.en])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/tf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function tf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var of=new Float64Array(16),cf=new Float64Array(16),lf=function(e){var r=new Float64Array(16);return r[0]=e.dw,r[1]=e.dA,r[2]=e.dE,r[3]=e.dI,r[4]=e.dx,r[5]=e.dB,r[6]=e.dF,r[7]=e.dJ,r[8]=e.dy,r[9]=e.dC,r[10]=e.dG,r[11]=e.dK,r[12]=e.dz,r[13]=e.dD,r[14]=e.dH,r[15]=e.dL,r},uf=function(e){return{dw:e[0],dA:e[1],dE:e[2],dI:e[3],dx:e[4],dB:e[5],dF:e[6],dJ:e[7],dy:e[8],dC:e[9],dG:e[10],dK:e[11],dz:e[12],dD:e[13],dH:e[14],dL:e[15]}};function zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(zc);A(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return zc(c,l,i,t,n,a)});function Tc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(Tc);A(function(e,r,n,a){return Tc(e,r,n,a,-1,1)});function Mc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],L=r[0],T=r[1],Z=r[2],j=r[3],E=r[4],N=r[5],G=r[6],F=r[7],Y=r[8],Q=r[9],le=r[10],fe=r[11],ce=r[12],me=r[13],Ve=r[14],Ce=r[15];return n[0]=a*L+l*T+d*Z+b*j,n[1]=t*L+u*T+m*Z+w*j,n[2]=i*L+v*T+f*Z+x*j,n[3]=c*L+s*T+g*Z+_*j,n[4]=a*E+l*N+d*G+b*F,n[5]=t*E+u*N+m*G+w*F,n[6]=i*E+v*N+f*G+x*F,n[7]=c*E+s*N+g*G+_*F,n[8]=a*Y+l*Q+d*le+b*fe,n[9]=t*Y+u*Q+m*le+w*fe,n[10]=i*Y+v*Q+f*le+x*fe,n[11]=c*Y+s*Q+g*le+_*fe,n[12]=a*ce+l*me+d*Ve+b*Ce,n[13]=t*ce+u*me+m*Ve+w*Ce,n[14]=i*ce+v*me+f*Ve+x*Ce,n[15]=c*ce+s*me+g*Ve+_*Ce,n}$(Mc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],L=r[5],T=r[6],Z=r[8],j=r[9],E=r[10],N=r[12],G=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*L+v*T,n[5]=t*_+l*L+s*T,n[6]=i*_+u*L+d*T,n[7]=0,n[8]=a*Z+c*j+v*E,n[9]=t*Z+l*j+s*E,n[10]=i*Z+u*j+d*E,n[11]=0,n[12]=a*N+c*G+v*F+m,n[13]=t*N+l*G+s*F+f,n[14]=i*N+u*G+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=sa(r,io);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Pc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,L=b-m,T=g-f,Z=c*c*v+u,j=w+d,E=b+m,N=w-d,G=l*l*v+u,F=n[0],Y=n[1],Q=n[2],le=n[3],fe=n[4],ce=n[5],me=n[6],Ve=n[7],Ce=n[8],gr=n[9],hr=n[10],Oa=n[11],Uu=n[12],Ju=n[13],qu=n[14],Yu=n[15];return a[0]=F*x+fe*_+Ce*L,a[1]=Y*x+ce*_+gr*L,a[2]=Q*x+me*_+hr*L,a[3]=le*x+Ve*_+Oa*L,a[4]=F*T+fe*Z+Ce*j,a[5]=Y*T+ce*Z+gr*j,a[6]=Q*T+me*Z+hr*j,a[7]=le*T+Ve*Z+Oa*j,a[8]=F*E+fe*N+Ce*G,a[9]=Y*E+ce*N+gr*G,a[10]=Q*E+me*N+hr*G,a[11]=le*E+Ve*N+Oa*G,a[12]=Uu,a[13]=Ju,a[14]=qu,a[15]=Yu,a});function vf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(vf);A(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function $f(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y($f);A(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=kc(e,r,io),t=sa(_t(n,a,pi),pi),i=sa(_t(a,t,bi),bi),c=of,l=cf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Mc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var gi=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function co(e){for(var r=0;e.b;e=e.b)r++;return r}var ff=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},sf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),df=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),mf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),pf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),bf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),gf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),hf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),_f=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),wf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),yf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},xf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Sf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Cf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Vc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Dc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Lf=function(e){e.gl.disable(e.gl.CULL_FACE)},kf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Pf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},zf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},hi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Tf=[xf,Sf,Cf,Vc,Dc,Lf,kf,Pf,zf];function _i(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Mf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Bc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Vf(e,r,n,a){for(var t=n.a.db,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(L){for(_=0;_<g;_++)f[b++]=g===1?w[L][x]:w[L][x][_]})}var u=Bc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(co(n.b)*s);Cn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Df(e,r){if(r.a.dk>0){var n=e.createBuffer(),a=Bf(r.c,r.a.dk);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.db*co(r.b),indexBuffer:null,buffers:{}}}function Bf(e,r){var n=new Uint32Array(co(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function wi(e,r){return e+"#"+r}var Ac=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Vc(n),Dc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=wi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=gi++,v||(v=_i(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=gi++,s||(s=_i(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Mf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Af(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=wi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Ff(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Df(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Vf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Bc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,L=0;L<w.arraySize;L++)a.enableVertexAttribArray(g+L),a.vertexAttribPointer(g+L,w.size,w.baseType,!1,_,x*L)}for(n.toggle=!n.toggle,Cn(kp(n),i.a),u=0;u<hi.length;u++){var T=n[hi[u]];T.toggle!==n.toggle&&T.enabled&&(Tf[u](n),T.enabled=!1,T.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dU,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dU,0,b.numIndices)}}return Cn(t,e.g),r});function Af(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var L=l.textures.get(_);L||(L=_.eF(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Ff(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Rf=y(function(e,r,n){return g$(r,{g:n,f:{},h:e},Hf,If)}),Ef=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),jf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Nf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Zf=$(function(e,r){e.contextAttributes.antialias=!0}),Gf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Wf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Hf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(Lp,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),ff(function(){return o(Ac,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function If(e,r){return r.f=e.f,Ac(r)}var V=cv,Wn=tv,Fc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Da=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Da,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),yi=function(e){return p(Da,y(function(r,n,a){return o(V,S(r,n),a)}),P,e)},Of=function(e){return p(Da,y(function(r,n,a){return o(V,r,a)}),P,e)},Uf=function(e){var r=e;return Of(r)},Rc=1,Jf=2,Ec=0,we=function(e){return{$:1,a:e}},lo=$(function(e,r){return{$:3,a:e,b:r}}),xi=$(function(e,r){return{$:0,a:e,b:r}}),jc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},qf=function(e){return{$:2,a:e}},ee=function(e){return{$:0,a:e}},J={$:1},Yf=Dv,Xf=Qv,Fe=$c,Vr=$(function(e,r){return o(Tv,e,Va(r))}),uo=$(function(e,r){return h(o(zv,e,r))}),Nc=function(e){return o(Vr,`
    `,o(uo,`
`,e))},Vn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(Vn,$(function(r,n){return n+1}),0,e)},Qf=lv,Kf=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(V,r,n);e=a,r=t,n=i;continue e}else return n}),rn=$(function(e,r){return p(Kf,e,r,P)}),Zc=$(function(e,r){return p(Qf,e,o(rn,0,Fr(r)-1),r)}),nr=Nv,Gc=function(e){var r=nr(e);return 97<=r&&r<=122},Wc=function(e){var r=nr(e);return r<=90&&65<=r},es=function(e){return Gc(e)||Wc(e)},rs=function(e){var r=nr(e);return r<=57&&48<=r},ns=function(e){return Gc(e)||Wc(e)||rs(e)},Re=function(e){return p(Vn,V,P,e)},cn=Cv,as=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Nc(ts(r))))}),ts=function(e){return o(os,e,P)},os=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=cn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return es(x)&&o(Yf,ns,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(V,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(V,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Vr,"",Re(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Fe(Fr(s))+" ways:"));return o(Vr,`

`,o(V,g,o(Zc,as,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Vr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Vr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return g+(Nc(o(Xf,4,f))+(`

`+m))}}),Ee=32,wt=A(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yt=Ku,vo=gv,$o=$(function(e,r){return li(r)/li(e)}),is=pv,Ln=vo(o($o,2,Ee)),Hc=k(wt,0,Ln,yt,yt),Ic=rv,Oc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Uc=hv,xt=ev,Me=$(function(e,r){return O(e,r)>0?e:r}),cs=function(e){return{$:0,a:e}},fo=nv,ls=$(function(e,r){e:for(;;){var n=o(fo,Ee,e),a=n.a,t=n.b,i=o(V,cs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),us=function(e){var r=e.a;return r},vs=$(function(e,r){e:for(;;){var n=vo(r/Ee);if(n===1)return o(fo,Ee,e).a;var a=o(ls,e,P),t=n;e=a,r=t;continue e}}),Jc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Uc(o($o,Ee,n-1)),t=e?Re(r.z):r.z,i=o(vs,t,r.l);return k(wt,xt(r.p)+n,o(Me,5,a*Ln),i,r.p)}else return k(wt,xt(r.p),Ln,yt,r.p)}),$s=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Jc,!1,{z:a,l:n/Ee|0,p:t});var i=Oc(p(Ic,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(V,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),fs=$(function(e,r){if(e<=0)return Hc;var n=e%Ee,a=p(Ic,n,e-n,r),t=e-n-Ee;return C($s,r,t,e,P,a)}),qe=function(e){return!e.$},D=Jv,X=Wv,M=Uv,se=Hv,da=qv,ss=Yv,Be=Gv,so=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},q=Nr("div"),ds=function(e){return{$:2,a:e}},qc=$(function(e,r){return e}),Yc=$(function(e,r){return{bD:r.bD,eD:e,b8:r.b8,eM:r.eM,dp:r.dp,bi:r.bi,bk:r.bk,fR:r.fR}}),Br=function(e){return e},ms=Br,Si=Ue(function(e,r,n,a,t,i){return{dg:i,di:r,dY:a,d$:n,d3:e,d4:t}}),ps=Bv,Dr=Lv,Xr=Mv,Dn=$(function(e,r){return e<1?r:p(Xr,e,Dr(r),r)}),Ba=Fv,Aa=function(e){return e===""},Fa=$(function(e,r){return e<1?"":p(Xr,0,e,r)}),Xc=Rv,Ci=ge(function(e,r,n,a,t){if(Aa(t)||o(ps,"@",t))return J;var i=o(Ba,":",t);if(i.b){if(i.b.b)return J;var c=i.a,l=Xc(o(Dn,c+1,t));if(l.$===1)return J;var u=l;return ee(_e(Si,e,o(Fa,c,t),u,r,n,a))}else return ee(_e(Si,e,t,J,r,n,a))}),Li=A(function(e,r,n,a){if(Aa(a))return J;var t=o(Ba,"/",a);if(t.b){var i=t.a;return C(Ci,e,o(Dn,i,a),r,n,o(Fa,i,a))}else return C(Ci,e,"/",r,n,a)}),ki=y(function(e,r,n){if(Aa(n))return J;var a=o(Ba,"?",n);if(a.b){var t=a.a;return k(Li,e,ee(o(Dn,t+1,n)),r,o(Fa,t,n))}else return k(Li,e,J,r,n)});$(function(e,r){if(Aa(r))return J;var n=o(Ba,"#",r);if(n.b){var a=n.a;return p(ki,e,ee(o(Dn,a+1,r)),o(Fa,a,r))}else return p(ki,e,J,r)});var bs=Av,mo=function(e){},Bn=jr,gs=Bn(0),Qc=A(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Vn,e,r,Re(d)):k(Qc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return k(Qc,e,r,0,n)}),re=$(function(e,r){return p(br,$(function(n,a){return o(V,e(n),a)}),P,r)}),ma=bt,po=$(function(e,r){return o(ma,function(n){return Bn(e(n))},r)}),hs=y(function(e,r,n){return o(ma,function(a){return o(ma,function(t){return Bn(o(e,a,t))},n)},r)}),_s=function(e){return p(br,hs(V),Bn(P),e)},ws=c$,ys=$(function(e,r){var n=r;return dc(o(ma,ws(e),n))}),xs=y(function(e,r,n){return o(po,function(a){return 0},_s(o(re,ys(e),r)))}),Ss=y(function(e,r,n){return Bn(0)}),Cs=$(function(e,r){var n=r;return o(po,e,n)});rr.Task=o$(gs,xs,Ss,Cs);var Ls=pc("Task"),bo=$(function(e,r){return Ls(o(po,e,r))}),ks=Z$,Ps=xv,pa={$:1},Kc=function(e){return{$:2,a:e}},Ra={$:0},He=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),ln=function(e){var r=e.b.B;return r.a},zs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ee(o(He,r,{B:i,ab:c,T:o(V,a,n)}))}else return J},el=function(e){var r=e.b;return o(He,Ra,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ts=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bi.da?el(n):n;case 2:var i=a.a.cU;return(O(i+r.eM,ln(n).bD)>0?o(te,zs,fr(o(He,pa,t))):Br)(o(He,Kc({cU:i+r.eM}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Yc,l.eD,We(r,{bD:l.bD+r.eM})),s=o(e,v,u);return o(He,Ra,{B:S(v,s),ab:P,T:o(V,t.B,t.T)})}}),rl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ms=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(V,a,n);e=i,r=c,n=l;continue e}else return n}}),Vs=$(function(e,r){return Re(p(Ms,e,r,P))}),nl=y(function(e,r,n){if(r<=0)return P;{var a=S(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(V,_,o(V,c,o(V,s,o(V,b,o(Vs,r-4,w))))):o(V,_,o(V,c,o(V,s,o(V,b,p(nl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Ds=$(function(e,r){return p(nl,0,e,r)}),Bs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Re(n),ve(h([a]),t)),c=o(Ds,e,i),l=o(rl,e,i);if(l.b){var u=l.a,v=l.b;return o(He,pa,{B:u,ab:v,T:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(He,pa,{B:d,ab:P,T:m})}else return r}}),As=function(e){var r=e.b;return o(He,pa,r)},Fs=function(e){var r=e.b;return o(He,Kc({cU:ln(e).bD}),r)},Rs=$(function(e,r){switch(e.$){case 1:return As(r);case 2:return el(r);case 3:return Fs(r);default:var n=e.a;return o(Bs,n,r)}}),al=$(function(e,r){var n=r.a,a=r.b;return S(e(n),a)}),Es=$(function(e,r){return We(r,{av:e(r.av)})}),js=function(e){return{$:3,a:e}},Ns=function(e){return{$:2,a:e}},Zs=$(function(e,r){return{$:0,a:e,b:r}}),Gs=$(function(e,r){return{$:1,a:e,b:r}}),Pe=$(function(e,r){if(r.$)return J;var n=r.a;return ee(e(n))}),U=function(e){return e<0?-e:e},go=Ev,Ws=y(function(e,r,n){return o(fr,0/0,go(o(e,r,n)))}),tl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Hs=Pv,ol=function(e){return p(Hs,V,P,e)},Is=$(function(e,r){var n=o(tl,function(a){return a!=="0"&&a!=="."},ol(r));return ve(e&&n?"-":"",r)}),ie=$c,St=Sv,il=Zv,cl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=cn(n);if(a.$===1)return"01";var t=a.a;return o(St,"0",cl(t))}else{var i=nr(r);return i>=48&&i<57?o(St,il(i+1),n):"0"}},Ct=bv,Os=yv,Ea=function(e){return o(St,e,"")},ll=y(function(e,r,n){return e<=0?n:p(ll,e>>1,ve(r,r),e&1?ve(n,r):n)}),kn=$(function(e,r){return p(ll,e,r,"")}),Lt=y(function(e,r,n){return ve(n,o(kn,e-Dr(n),Ea(r)))}),kt=kv,ul=function(e){var r=o(uo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return S(n,t)}else{var n=r.a;return S(n,"0")}else return S("0","0")},Us=function(e){var r=o(uo,"e",ie(U(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,Xc(o(bs,"+",t)?o(Dn,1,t):t)),c=ul(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(fr,"0",o(Pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Pe,al(Ea),cn(ve(o(kn,U(i),"0"),v))))):p(Lt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Js=y(function(e,r,n){if(Ct(n)||Os(n))return ie(n);var a=n<0,t=ul(Us(U(n))),i=t.a,c=t.b,l=Dr(i)+r,u=ve(o(kn,-l+1,"0"),p(Lt,l,"0",ve(i,c))),v=Dr(u),s=o(Me,1,l),d=o(e,a,p(Xr,s,v,u)),m=p(Xr,0,s,u),f=d?kt(o(fr,"1",o(Pe,cl,cn(kt(m))))):m,g=Dr(f),b=f==="0"?f:r<=0?ve(f,o(kn,U(r),"0")):O(r,Dr(c))<0?p(Xr,0,g-r,f)+("."+p(Xr,g-r,g,f)):ve(i+".",p(Lt,r,"0",c));return o(Is,a,b)}),vl=Js($(function(e,r){var n=cn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),qs=Ws(vl),Ys=y(function(e,r,n){var a=o($o,10,U(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(qs,t,n)}),$l=iv,fl=$(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,a=r.c,t=r.d,i=r.e,c=o($l,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ee(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},nn=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return C(H,0,r,n,C(H,1,v,s,d,m),C(H,1,i,c,l,u))}else return C(H,e,i,c,C(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return C(H,0,v,s,C(H,1,g,b,w,x),C(H,1,r,n,m,t))}else return C(H,e,r,n,a,t)}),Pt=y(function(e,r,n){if(n.$===-2)return C(H,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o($l,e,t);switch(u){case 0:return C(nn,a,t,i,p(Pt,e,r,c),l);case 1:return C(H,a,t,r,c,l);default:return C(nn,a,t,i,c,p(Pt,e,r,l))}}),hn=y(function(e,r,n){var a=p(Pt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(H,1,t,i,c,l)}else{var u=a;return u}}),Xs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},sl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return C(H,0,f,g,C(H,1,n,a,C(H,0,i,c,l,u),b),C(H,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,d=L.c,m=L.d,x=L.e;return C(H,1,n,a,C(H,0,i,c,l,u),C(H,0,s,d,m,x))}else return e},Pi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return C(H,0,i,c,C(H,1,u,v,s,d),C(H,1,n,a,m,C(H,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,m=_.e,T=e.e;T.a;var g=T.b,b=T.c,w=T.d,x=T.e;return C(H,1,n,a,C(H,0,i,c,L,m),C(H,0,g,b,w,x))}else return e},Qs=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(H,n,l,u,v,C(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Pi(r)}else break e;else return c.a,c.d,Pi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(H,r,n,a,ra(t),l);var u=sl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(nn,v,s,d,ra(m),f)}else return or}else return C(H,r,n,a,ra(t),l)}else return or},_n=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(H,n,a,t,o(_n,e,i),c);var u=sl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(nn,v,s,d,o(_n,e,m),f)}else return or}else return C(H,n,a,t,o(_n,e,i),c);else return o(Ks,e,Yt(Qs,e,r,n,a,t,i,c))}),Ks=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Cr(e,a)){var l=Xs(c);if(l.$===-1){var u=l.b,v=l.c;return C(nn,n,u,v,i,ra(c))}else return or}else return C(nn,n,a,t,i,o(_n,e,c))}else return or}),dl=$(function(e,r){var n=o(_n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(fl,e,n));if(a.$)return o(dl,e,n);var t=a.a;return p(hn,e,t,n)}),ed=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Gs,S(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Zs,S(i,c),p(Ys,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){return a.$===3?js(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Pe(function(a){return a.$===2?Ns(n):a}))}},rd=function(e){return Es(ed(e))},nd=$(function(e,r){return o(re,rd(e),r)}),ad=$(function(e,r){return We(r,{eD:o(nd,e,r.eD)})}),td=$(function(e,r){var n=r.a,a=r.b;return o(He,n,We(a,{B:o(al,ad(e),a.B)}))}),od=$(function(e,r){var n=r.a,a=r.b;return S(n,e(a))}),id=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(He,a,We(t,{B:o(od,o(e,i.a,r),i)}))}),cd=A(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return We(a,{aM:!a.aM});case 2:var t=n.a;return We(a,{G:p(Ts,e,t,a.G)});case 3:var i=n.a;return We(a,{G:o(td,i,a.G)});case 4:var c=n.a;return We(a,{G:p(id,r,c,a.G)});default:var l=n.a;return We(a,{G:o(Rs,l,a.G)})}}),ld=$(function(e,r){return o(He,Ra,{B:S(e,r(e)),ab:P,T:P})}),ud=l$,zi=ud(P),ba=Ov,Pn=Iv,vd=s$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Be({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Be({ep:d,eE:s,da:v,eL:u,e8:l,ft:c,fx:i,ea:t,ei:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ba(Pn)))},o(M,"left",X))},o(M,"pressedKeys",ba(Pn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Be({da:v,cb:u,fe:l,fy:c,fz:i,ei:t,fV:a,fZ:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Be({e_:n,fT:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Be({eH:r,eI:e})},o(M,"deltaX",se))},o(M,"deltaY",se))))),$d=function(e){return{$:4,a:e}},fd={$:0},sd=sc,Je=$(function(e,r){return o(hc,e,sd(r))}),I=Je("className"),dd=function(e){var r=e.b.B;return r.b},ga=Je("id"),md=h$,ha=md,pd=_$,ne=pd,bd={$:1},gd=function(e){return{$:3,a:e}},hd=function(e){return{$:5,a:e}},Ti=Nr("a"),ho=Nr("button"),Mi=function(e){return o(Je,"href",x$(e))},_d=zr("clip-rule"),Le=zr("d"),wd=zr("fill"),ml=bc("http://www.w3.org/2000/svg"),yd=ml("svg"),xd=zr("viewBox"),Sd=o(w$,"http://www.w3.org/XML/1998/namespace","xml:space"),je=yd(h([xd("0 0 24 24"),wd("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),Sd("http://www.w3.org/2000/svg")])),Cd=zr("fill-rule"),ke=ml("path"),Ar={eG:je(h([o(ke,h([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eU:je(h([o(ke,h([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eZ:je(h([o(ke,h([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),ff:je(h([o(ke,h([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(ke,h([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fg:je(h([o(ke,h([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(ke,h([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fq:je(h([o(ke,h([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fr:je(h([o(ke,h([Le("M7 5V19L18 12L7 5Z")]),P)])),fs:je(h([o(ke,h([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),bi:je(h([o(ke,h([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:je(h([o(ke,h([Cd("evenodd"),_d("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:je(h([o(ke,h([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f1:je(h([o(ke,h([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Ld=function(e){return{$:0,a:e}},pl=gc,bl=$(function(e,r){return o(pl,e,Ld(r))}),_o=function(e){return o(bl,"click",Be(e))},Vi=Je("target"),kd=Je("title"),zt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(H,n,a,o(e,a,t),o(zt,e,i),o(zt,e,c))}),Pd=gt,sr=Pd,zd=function(e){return p(Da,y(function(r,n,a){return o(V,n,a)}),P,e)},Td=$(function(e,r){return{$:3,a:e,b:r}}),Md=$(function(e,r){return{$:2,a:e,b:r}}),Vd=$(function(e,r){return{$:0,a:e,b:r}}),Dd=$(function(e,r){return{$:1,a:e,b:r}}),ja=A(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gl=k(ja,0/255,0/255,0/255,1),Bd=sc,hl=$(function(e,r){return o(hc,e,Bd(r))}),Ad=hl("checked"),Se=_v,Fd=y(function(e,r,n){return ve(o(kn,e-Dr(n),Ea(r)),n)}),_a=vv,_l=function(e){var r=function(n){return n<10?Fe(n):Ea(il(87+n))};return e<16?r(e):ve(_l(e/16|0),r(o(_a,16,e)))},Rd=o(te,_l,o(Fd,2,"0")),wo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b4:a,ca:n,cK:r}},Ed=function(e){var r=wo(e),n=r.cK,a=r.ca,t=r.b4;return o(Vr,"",o(V,"#",o(re,o(te,Se,Rd),h([n*255,a*255,t*255]))))},Tt=Je("htmlFor"),Mt=$(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),wa=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),jd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(V,t,n)}),wl=$(function(e,r){return p(br,jd(e),P,r)}),yl=A(function(e,r,n,a){return{e3:r,fc:e,fl:n,fF:a}}),Nd=O$,Zd=jv,Gd=$(function(e,r){if(r.$)return we(e);var n=r.a;return $e(n)}),Wd=I$,Hd=function(e){return o(Wd,{ey:!1,fh:!1},e)},xl=function(e){if(e.b){var r=e.a;return e.b,ee(r)}else return J},Id=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return $e(e(n))}}),Od=function(e){return{$:2,a:e}},Ud=function(e){return{$:0,a:e}},Jd=function(e){return{$:1,a:e}},qa=$(function(e,r){return nr(r)-nr(e)}),Ya=y(function(e,r,n){var a=nr(n);return O(nr(e),a)<1&&O(a,nr(r))<1}),qd=$(function(e,r){var n=function(t){return O(t,e)<0?$e(t):we(Jd(r))},a=p(Ya,"0","9",r)?$e(o(qa,"0",r)):p(Ya,"a","z",r)?$e(10+o(qa,"a",r)):p(Ya,"A","Z",r)?$e(10+o(qa,"A",r)):we(Ud(r));return o(wa,n,a)}),Sl=$(function(e,r){var n=cn(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return $e(c+l*e)},o(Sl,e,i))},o(qd,e,t))}),Yd=$(function(e,r){return 2<=e&&e<=36?o(Sl,e,kt(r)):we(Od(e))}),Xd=Yd(16),Qd=y(function(e,r,n){return k(ja,e,r,n,1)}),Kd=A(function(e,r,n,a){return k(ja,e,r,n,a)}),An=uv,em=$(function(e,r){var n=o(An,10,e);return Se(r*n)/n}),rm=Vv,nm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ol(n);if(a.b&&!a.b.b){var t=a.a;return Zd(h([t,t]))}else return n};return o(te,rm,o(te,function(n){return o(Pe,function(a){return p(Nd,1,a,n)},Hd(e))},o(te,Mt(xl),o(te,Pe(function(n){return n.fF}),o(te,Pe(wl(Br)),o(te,Gd("Parsing hex regex failed"),wa(function(n){var a=o(re,o(te,r,o(te,Xd,Id(is))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(k(Kd,t/255,c/255,u/255,o(em,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(Qd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ya=Nr("input"),Vt=Nr("label"),Dt=Je("name"),Cl=$(function(e,r){return p(br,M,r,e)}),am=o(Cl,h(["target","checked"]),X),tm=function(e){return o(bl,"change",o(da,e,am))},om=function(e){return S(e,!0)},im=function(e){return{$:1,a:e}},cm=$(function(e,r){return o(pl,e,im(r))}),lm=o(Cl,h(["target","value"]),Pn),yo=function(e){return o(cm,"input",o(da,om,o(da,e,lm)))},Ll=Je("max"),kl=Je("min"),Pl=function(e){return o(Je,"step",e)},xa=Je("type"),xo=Je("value"),Di=function(e){var r=e.cd,n=e.cZ,a=e.ct,t=e.cp,i=e.cS,c=e.cx;return o(q,P,h([o(Vt,h([Tt(r)]),h([o(q,h([I("relative w-full")]),h([o(q,h([I("inline-block")]),h([sr(r)])),o(q,h([I("inline-block float-right")]),h([sr(ie(n))]))]))])),o(ya,h([xa("range"),o(ne,"width","100%"),ga(r),Dt(r),kl(ie(a)),Ll(ie(t)),xo(ie(n)),Pl(ie(i)),yo(o(te,go,o(te,fr(42),c)))]),P)]))},um=$(function(e,r){if(r.$)return e;var n=r.a;return n}),vm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(q,h([I("h-12 py-4")]),h([o(Vt,h([I("block"),Tt(e)]),h([o(ya,h([I("relative bottom-[1px] align-middle mr-2"),xa("checkbox"),ga(e),Dt(e),tm(Td(e)),Ad(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Di({cd:e,cp:i,ct:t,cx:Vd(e),cS:.01*(i-t),cZ:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Di({cd:e,cp:i,ct:t,cx:o(te,Se,Dd(e)),cS:1,cZ:c});default:var c=r.a;return o(q,P,h([o(q,h([o(ne,"margin-bottom","6px")]),h([o(Vt,h([Tt(e)]),h([sr(e)]))])),o(ya,h([xa("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),ga(e),Dt(e),yo(function(l){return o(Md,e,o(um,gl,nm(l)))}),xo(Ed(c))]),P)]))}}),$m=function(e){return o(q,h([I("p-4 border-y-[0.5px] border-white20")]),h([o(q,h([I("text-lg pb-2")]),h([sr(e.fi)])),o(q,h([I("pl-2 pr-2")]),zd(o(zt,vm,e.av)))]))},fm=function(e){return o(q,h([I("text-xs text-white60")]),o(re,$m,e))},sm=function(e){return o(q,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(vl,3,ln(e).bD))]))},dm=function(e){e.a;var r=e.b.T;return o(Pe,function(n){return Se(60/(ln(e).bD-n))},o(Pe,o(te,us,function(n){return n.bD}),xl(o(rl,59,r))))},mm=function(e){return o(q,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=dm(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Fe(n)+" Fps")])}())},pm=function(e){return{$:0,a:e}},bm=function(e){var r=e.b.T;return Fr(r)},gm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},hm=function(e){return o(ya,h([I("absolute w-full"),xa("range"),kl(Fe(0)),Ll(Fe(gm(e)-1)),xo(Fe(bm(e))),Pl(Fe(1)),yo(o(te,go,o(te,fr(42),o(te,Se,pm))))]),P)},Bi={$:1},Ai={$:3},Fi={$:2},Bt=function(e){return!e.b},zl=hl("disabled"),Xa=y(function(e,r,n){return o(ho,h([I("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),I(n),zl(e),_o(r)]),h([sr("REC")]))}),Qa=y(function(e,r,n){return o(ho,h([I("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),zl(e),_o(n)]),h([o(q,h([I("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),_m=function(e){var r=e.a,n=e.b.ab;return o(q,h([I("py-1")]),h([function(){switch(r.$){case 0:return p(Xa,!1,Bi,"text-red-500 font-bold");case 1:return p(Xa,!1,Fi,"text-white60 hover:text-white80 font-bold");default:return p(Xa,!0,Fi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Qa,Bt(n),Ar.fr,Ai);case 1:return p(Qa,Bt(n),Ar.fr,Ai);default:return p(Qa,!1,Ar.fq,Bi)}}()]))},wm=function(e){return o(q,h([I("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([hm(e),_m(e),mm(e),sm(e)]))},ym=function(e){var r=e.a;return Cr(r,Ra)},xm=$(function(e,r){var n=ym(r.G)?o(q,P,P):o(q,h([I("absolute pointer-events-none w-8 h-8"),o(ne,"left",ie(e.bi.fV+.5*e.bk.fT)+"px"),o(ne,"top",ie(-e.bi.fZ+.5*e.bk.e_)+"px")]),h([o(q,h([I(e.bi.cb?"text-black80":"text-black40")]),h([Ar.bi]))]));return o(q,P,h([n]))}),Sm=$(function(e,r){var n=o(ho,h([I(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),_o(bd),kd("Distraction Free Mode")]),h([Ar.f1])),a=40,t=260,i=o(q,h([I("absolute w-8 bottom-12")]),h([o(Ti,h([I("text-twitterBlue40 hover:text-twitterBlue"),Mi("https://twitter.com/AzizErkalSelman"),Vi("_blank")]),h([Ar.fN]))])),c=80,l=o(q,h([I("absolute w-8 bottom-2")]),h([o(Ti,h([I("text-githubCat40 hover:text-githubCat"),Mi("https://github.com/erkal/elm-3d-playground-exploration"),Vi("_blank")]),h([Ar.eU]))])),u=e.bk.fT>640?B(e.bk.e_,a+t,e.bk.fT-(a+t)):B(e.bk.e_-c,a,e.bk.fT-a),v=u.a,s=u.b,d=u.c;return r.aM?o(q,h([I("fixed w-10 h-10 p-1")]),h([n])):o(q,P,h([o(q,h([I("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",ie(a)+"px")]),h([n,i,l])),o(q,h([I("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",ie(t)+"px"),o(ne,"height",ie(v)+"px")]),h([o(ha,gd,fm(ln(r.G).eD))])),o(q,h([I("absolute bottom-0"),o(ne,"left",ie(s)+"px"),o(ne,"height",ie(c)+"px"),o(ne,"width",ie(d)+"px")]),h([o(ha,hd,wm(r.G))])),o(xm,e,r)]))}),Cm=y(function(e,r,n){var a=dd(n.G),t=ln(n.G);return o(q,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(ne,"width",ie(t.bk.fT)+"px"),o(ne,"height",ie(t.bk.e_)+"px")]),h([o(q,h([I("fixed")]),h([o(ha,qc(fd),o(e,t,a))])),o(q,h([ga("gui")]),h([o(Sm,t,n),o(ha,$d,o(r,t,a))]))]))}),Lm=Ue(function(e,r,n,a,t,i){var c=$(function(u,v){return S(k(cd,r,i,u,v),zi)}),l=function(u){var v=o(Yc,n,u.e5);return S({aM:u.e5.bk.fT<500,G:o(ld,v,a)},zi)};return ks({e4:l,fG:qc(vd(ds)),fO:c,fQ:o(Cm,e,t)})}),km=A(function(e,r,n,a){return _e(Lm,e,r,n,a,$(function(t,i){return o(q,P,P)}),y(function(t,i,c){return c}))}),Tl=or,Pm=Tl,Ml=$(function(e,r){var n=r;return p(hn,e,0,n)}),zm=function(e){return p(Vn,Ml,Pm,e)},Tm=zm(h([S(-3,-3),S(-3,1),S(-3,2),S(-3,3),S(-2,-2),S(-2,0),S(-2,3),S(-2,4),S(-1,-5),S(-1,-4),S(-1,-3),S(-1,-2),S(-1,0),S(-1,3),S(-1,4),S(0,-4),S(0,-3),S(0,-2),S(0,-1),S(0,0),S(0,1),S(0,2),S(0,3),S(0,4),S(1,-5),S(1,-4),S(1,-3),S(1,-2),S(1,0),S(1,3),S(1,4),S(2,-2),S(2,0),S(2,3),S(2,4),S(3,-3),S(3,1),S(3,2),S(3,3)])),Mm=function(e){return{ax:Tm}},Vm=mv,_r=wv,Dm=$(function(e,r){var n=e,a=r,t=a.c2-n.c2,i=a.fZ-n.fZ,c=a.fV-n.fV,l=o(Me,U(c),o(Me,U(i),U(t)));if(l){var u=t/l,v=i/l,s=c/l,d=_r(s*s+v*v+u*u);return ee({fV:s/d,fZ:v/d,c2:u/d})}else return J}),na=function(e){return e},So=$(function(e,r){var n=e,a=r;return{fV:a.fZ*n.c2-a.c2*n.fZ,fZ:a.c2*n.fV-a.fV*n.c2,c2:a.fV*n.fZ-a.fZ*n.fV}}),wn=function(e){var r=e,n=o(Me,U(r.fV),o(Me,U(r.fZ),U(r.c2)));if(n){var a=r.c2/n,t=r.fZ/n,i=r.fV/n,c=_r(i*i+t*t+a*a);return ee({fV:i/c,fZ:t/c,c2:a/c})}else return J},Sa=$(function(e,r){var n=e,a=r;return{fV:a.fV-n.fV,fZ:a.fZ-n.fZ,c2:a.c2-n.c2}}),Bm=$(function(e,r){var n=e,a=r;return a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2}),Vl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Am=$(function(e,r){var n=e,a=r;return O(a,n)<0}),Fm=$(function(e,r){var n=e,a=r;return{fV:a.fV-n.fV,fZ:a.fZ-n.fZ,c2:a.c2-n.c2}}),Rm=$(function(e,r){var n=e,a=r,t=a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2;return{fV:n.fV*t,fZ:n.fZ*t,c2:n.c2*t}}),Em=function(e){var r=e;return{fV:-r.fV,fZ:-r.fZ,c2:-r.c2}},Xe=0,Dl={fV:0,fZ:0,c2:0},jm=y(function(e,r,n){return o(Mt,function(a){var t=o(Fm,o(Rm,a,r),r);return o(Mt,function(i){var c=o(So,r,e),l=o(Bm,n,c),u=o(Vl,Xe,l)?c:o(Am,Xe,l)?Em(c):Dl;return o(Pe,function(v){return B(a,i,v)},wn(u))},wn(t))},wn(e))}),Nm=function(e){var r=e,n=U(r.c2),a=U(r.fZ),t=U(r.fV);if(O(t,a)<1)if(O(t,n)<1){var i=_r(r.c2*r.c2+r.fZ*r.fZ);return{fV:0,fZ:-r.c2/i,c2:r.fZ/i}}else{var i=_r(r.fZ*r.fZ+r.fV*r.fV);return{fV:-r.fZ/i,fZ:r.fV/i,c2:0}}else if(O(a,n)<1){var i=_r(r.c2*r.c2+r.fV*r.fV);return{fV:r.c2/i,fZ:0,c2:-r.fV/i}}else{var i=_r(r.fV*r.fV+r.fZ*r.fZ);return{fV:-r.fZ/i,fZ:r.fV/i,c2:0}}},Co=function(e){var r=Nm(e),n=r,a=n,t=e,i=t,c={fV:i.fZ*a.c2-i.c2*a.fZ,fZ:i.c2*a.fV-i.fV*a.c2,c2:i.fV*a.fZ-i.fZ*a.fV};return S(r,c)},Qr=function(e){var r=e;return r},dr=function(e){return e},Zm=$(function(e,r){var n=Co(e),a=n.a,t=n.b;return dr({cy:r,c0:a,c1:t,c3:e})}),Gm=function(e){var r=o(Sa,e.aS,e.df),n=Qr(e.ej),a=o(So,r,n),t=p(jm,r,n,a);if(t.$){var v=wn(r);if(v.$){var d=Co(e.ej),m=d.a,f=d.b;return dr({cy:e.df,c0:f,c1:e.ej,c3:m})}else{var s=v.a;return o(Zm,s,e.df)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return dr({cy:e.df,c0:u,c1:l,c3:c})}},Tr={fV:0,fZ:0,c2:0},Wm=function(e){return{$:0,a:e}},xe=function(e){var r=e;return U(r)},aa=function(e){var r=e;return .5*r},Hm=dv,Im=function(e){var r=e;return Hm(r)},Om=function(e){var r=aa(xe(e.ek)),n=Im(r);return{cJ:Wm(n),c_:e.c_}},vr=function(e){return e},Lo=vr({fV:0,fZ:1,c2:0}),ir=function(e){return e},Um=function(e){var r=e.aS,n=e.df,a=e.ej;return Om({ek:ir(2*Vm(.5)),c_:Gm({df:na(n),aS:na(r),ej:o(fr,Lo,o(Dm,Tr,na(a)))})})},Rr=fv,Jm=$(function(e,r){return(r-Uc(r/e)*e)/e}),mr=$v,qm=function(e){return 2*mr*e},At=A(function(e,r,n,a){return e+(r-e)*(1+Rr(qm(o(Jm,n,a))))/2}),ko=function(e){return Um({df:{fV:1+k(At,-5,5,7,e.bD),fZ:1,c2:20},aS:{fV:0,fZ:0,c2:0},ej:{fV:0,fZ:1,c2:0}})},ar=function(e){return e},Ym=y(function(e,r,n){return{fV:e,fZ:r,c2:n}}),pn=function(e){return ir(mr*(e/180))},In=function(e){return e},ta=function(e){var r=e;return r},Xm=$(function(e,r){var n=e,a=r;return a.fV*n.fV+a.fZ*n.fZ+a.c2*n.c2}),Bl=function(e){var r=e;return r.eK},oe=$(function(e,r){var n=r;return e*n}),Al=function(e){var r=e;return r.cy},Qm=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.fk,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ+(a.c2-i.c2)*l.c2}),Km=y(function(e,r,n){var a=e,t=r,i=n;return{fV:i.fV+t*a.fV,fZ:i.fZ+t*a.fZ,c2:i.c2+t*a.c2}}),e0=$(function(e,r){var n=Bl(r),a=e,t=a.fk,i=o(Xm,t,n);if(i){var c=Al(r),l=o(Qm,e,c),u=o(oe,-1/i,l);return ee(p(Km,n,u,c))}else return J}),r0=$(function(e,r){return{fV:e,fZ:r}}),Ri=$(function(e,r){var n=e,a=r;return n*a}),n0=function(e){var r=e;return r},Ei=function(e){var r=e;return n0(r.et)},a0=function(e){var r=e;return r.aL},Fl=$(function(e,r){var n=r;return n/e}),un=function(e){var r=e;return r.cy},Ft=function(e){var r=e;return un(r)},Rt=function(e){var r=e;return-r},Po=vr({fV:0,fZ:0,c2:-1}),t0=$(function(e,r){var n=e,a=r;return a/n}),o0=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fV:v.fV*a.fV+l.fV*a.fZ+i.fV*a.c2,fZ:v.fZ*a.fV+l.fZ*a.fZ+i.fZ*a.c2,c2:v.c2*a.fV+l.c2*a.fZ+i.c2*a.c2}}),Er=$(function(e,r){return{eK:r,cy:e}}),Ca=function(e){var r=e;return{fV:-r.fV,fZ:-r.fZ,c2:-r.c2}},Zr=function(e){var r=e;return r.c3},Et=function(e){var r=e;return Ca(Zr(r))},i0=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c0,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ}),zo=y(function(e,r,n){var a=e,t=r,i=n;return{fV:a,fZ:t,c2:i}}),c0=A(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cy,v=u,s=t.c3,d=s,m=t.c1,f=m,g=t.c0,b=g;return{fV:v.fV+i*b.fV+c*f.fV+l*d.fV,fZ:v.fZ+i*b.fZ+c*f.fZ+l*d.fZ,c2:v.c2+i*b.c2+c*f.c2+l*d.c2}}),l0=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c1,l=c;return(a.fV-i.fV)*l.fV+(a.fZ-i.fZ)*l.fZ}),u0=y(function(e,r,n){var a=e,t=o(l0,Ei(r),n),i=o(i0,Ei(r),n),c=a.c_,l=c,u=a0(r);u.a;var v=u.b,s=a.cJ;if(s.$){var g=s.a,b=o(t0,v,g),w=k(c0,l,o(Ri,b,i),o(Ri,b,t),Xe);return o(Er,w,Et(a.c_))}else{var d=s.a,m=Rt(o(Fl,d,o(oe,.5,v))),f=o(o0,l,o(fr,Po,wn(p(zo,i,t,m))));return o(Er,Ft(a.c_),f)}}),an=sv,jt=function(e){var r=e;return{fV:Rr(r),fZ:an(r)}},v0=function(e){var r=e;return{fV:-r.fZ,fZ:r.fV}},$0=function(e){return e},f0=$(function(e,r){return $0({cy:r,c0:e,c1:v0(e)})}),s0=$(function(e,r){return o(f0,jt(e),r)}),d0=y(function(e,r,n){var a=e.a,t=e.b;return{et:o(s0,r,n),aL:S(xe(a),xe(t))}}),yr=function(e){var r=e;return r.fV},m0=$(function(e,r){var n=e,a=r;return{fV:n,fZ:a}}),xr=function(e){var r=e;return r.fZ},Sr=function(e){var r=e;return r.c2},p0=A(function(e,r,n,a){var t=n.fV,i=n.fZ,c=function(v){return p(Ym,ta(yr(v)),ta(xr(v)),ta(Sr(v)))},l=p(d0,S(In(r.fT),In(r.e_)),pn(0),o(r0,0,0)),u=o(m0,In(t),In(i));return o(Pe,c,o(e0,a,p(u0,e,l,u)))}),vn=$(function(e,r){var n=e,a=r;return{fV:a.fV+n.fV,fZ:a.fZ+n.fZ,c2:a.c2+n.c2}}),b0=$(function(e,r){return{fk:e,cy:r}}),g0=$(function(e,r){var n=r;return o(b0,n.fk,o(vn,e,n.cy))}),h0=$(function(e,r){return{fk:r,cy:e}}),To=vr({fV:0,fZ:0,c2:1}),Mo=To,_0=o(h0,Tr,Mo),w0=A(function(e,r,n,a){return k(p0,r,n,a,o(g0,p(zo,ar(0),ar(0),ar(e)),_0))}),Rl=w0(0),y0=$(function(e,r){var n=p(Rl,ko(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return We(r,{ax:o(Ml,S(Se(a.fV),Se(a.fZ)),r.ax)})}),x0=$(function(e,r){var n=r;return o(dl,e,n)}),S0=$(function(e,r){var n=p(Rl,ko(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return We(r,{ax:o(x0,S(Se(a.fV),Se(a.fZ)),r.ax)})}),C0=$(function(e,r){return e.dp.ea&&e.bi.cb?o(S0,e,r):e.bi.cb?o(y0,e,r):r}),Vo=function(e){return e},El=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),L0=function(e){var r=e;return r},k0=function(e){var r=p(El,1667,25e3,L0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Vo({fV:n,fZ:a})},Do=$(function(e,r){return{$:0,a:e,b:r}}),Ka=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),et=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),P0=vr({fV:-1,fZ:0,c2:0}),z0=vr({fV:0,fZ:-1,c2:0}),jl=vr({fV:1,fZ:0,c2:0}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fV:a,fZ:t,c2:i}}),T0=Ue(function(e,r,n,a,t,i){var c=o(Ka,n,i)?To:Po,l=o(Ka,r,t)?Lo:z0,u=o(Ka,e,a)?jl:P0,v=B(xe(o($r,e,a)),xe(o($r,r,t)),xe(o($r,n,i))),s=p(pe,o(et,e,a),o(et,r,t),o(et,n,i)),d=dr({cy:s,c0:u,c1:l,c3:c});return{et:d,aL:v}}),M0=$(function(e,r){return _e(T0,yr(e),xr(e),Sr(e),yr(r),xr(r),Sr(r))}),Nt=y(function(e,r,n){return{fV:e,fZ:r,c2:n}}),V0=$(function(e,r){var n=r/2;return o(Do,e,o(M0,p(Nt,-n,-n,-n),p(Nt,n,n,n)))}),Bo=function(e){return{$:5,a:e}},D0=function(e){return Bo(e)},Zt=function(e){return{$:0,a:e}},Nl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),rt=function(e){return p(El,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Fn=q$,B0=function(e){var r=wo(e),n=r.cK,a=r.ca,t=r.b4;return p(Fn,rt(n),rt(a),rt(t))},A0=function(e){return p(Nl,0,Zt(B0(e)),Zt(0))},Zl=$(function(e,r){return{$:2,a:e,b:r}}),Gl=$(function(e,r){return{$:4,a:e,b:r}}),Wl=$(function(e,r){return{$:3,a:e,b:r}}),Hl=$(function(e,r){return{$:1,a:e,b:r}}),F0=y(function(e,r,n){return{fV:e,fZ:r,c2:n}}),R0=function(e){var r=e;return r},Ao=function(e){var r=e;return R0(r.et)},Fo=function(e){var r=e;return r.aL},Gr=function(e){var r=e;return r.c0},Wr=function(e){var r=e;return r.c1},E0=$(function(e,r){return dr({cy:o(vn,e,un(r)),c0:Gr(r),c1:Wr(r),c3:Zr(r)})}),j0=$(function(e,r){return{et:o(E0,e,Ao(r)),aL:Fo(r)}}),N0=$(function(e,r){var n=r;return o(Er,o(vn,e,n.cy),n.eK)}),Z0=$(function(e,r){var n=r;return{k:o(N0,e,n.k),e9:n.e9,fu:n.fu}}),Ro=function(e){var r=e;return r},G0=function(e){return e},Il=$(function(e,r){var n=Ro(r),a=n.a,t=n.b;return G0(S(e(a),e(t)))}),W0=$(function(e,r){return o(Il,vn(e),r)}),Eo=function(e){var r=e;return r.eA},jo=function(e){var r=e;return r.fu},Ol=$(function(e,r){return{eA:r,fu:xe(e)}}),H0=$(function(e,r){return o(Ol,jo(r),o(vn,e,Eo(r)))}),Ul=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),I0=$(function(e,r){return o(Ul,vn(e),r)}),Na=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(F0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Do,s,o(j0,i,c));case 1:var s=r.a,l=r.b;return o(Hl,s,o(I0,i,l));case 3:var s=r.a,u=r.b;return o(Wl,s,o(H0,i,u));case 2:var s=r.a,v=r.b;return o(Zl,s,o(Z0,i,v));case 4:var s=r.a,d=r.b;return o(Gl,s,o(W0,i,d));default:var m=r.a;return Bo(o(re,Na(B(n,a,t)),m))}}),O0=function(e){return Na(B(e,0,0))},ji=function(e){return Na(B(0,e,0))},U0=function(e){return Na(B(0,0,e))},oa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Rr(c),u=an(c),v=a.eK,s=v,d=s.fV*u,m=l*d,f=d*d,g=s.fZ*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),L=s.c2*u,T=l*L,Z=2*(w-T),j=2*(w+T),E=d*L,N=2*(E+b),G=2*(E-b),F=g*L,Y=2*(F-m),Q=2*(F+m),le=L*L,fe=1-2*(x+le),ce=1-2*(f+le);return{fV:fe*i.fV+Z*i.fZ+N*i.c2,fZ:j*i.fV+ce*i.fZ+Y*i.c2,c2:G*i.fV+Q*i.fZ+_*i.c2}}),Rn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Rr(c),u=an(c),v=a.cy,s=v,d=i.fV-s.fV,m=i.fZ-s.fZ,f=i.c2-s.c2,g=a.eK,b=g,w=b.fV*u,x=l*w,_=w*w,L=b.fZ*u,T=l*L,Z=w*L,j=L*L,E=1-2*(_+j),N=b.c2*u,G=l*N,F=2*(Z-G),Y=2*(Z+G),Q=w*N,le=2*(Q+T),fe=2*(Q-T),ce=L*N,me=2*(ce-x),Ve=2*(ce+x),Ce=N*N,gr=1-2*(j+Ce),hr=1-2*(_+Ce);return{fV:s.fV+gr*d+F*m+le*f,fZ:s.fZ+Y*d+hr*m+me*f,c2:s.c2+fe*d+Ve*m+E*f}}),J0=y(function(e,r,n){return dr({cy:p(Rn,e,r,un(n)),c0:p(oa,e,r,Gr(n)),c1:p(oa,e,r,Wr(n)),c3:p(oa,e,r,Zr(n))})}),q0=y(function(e,r,n){return{et:p(J0,e,r,Ao(n)),aL:Fo(n)}}),Y0=$(function(e,r){var n=o(Rn,e,r),a=o(oa,e,r);return function(t){var i=t;return o(Er,n(i.cy),a(i.eK))}}),X0=y(function(e,r,n){var a=n;return{k:p(Y0,e,r,a.k),e9:a.e9,fu:a.fu}}),Q0=y(function(e,r,n){return o(Il,o(Rn,e,r),n)}),K0=y(function(e,r,n){return o(Ol,jo(n),p(Rn,e,r,Eo(n)))}),ep=y(function(e,r,n){return o(Ul,o(Rn,e,r),n)}),Za=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Do,l,p(q0,e,r,a));case 1:var l=n.a,t=n.b;return o(Hl,l,p(ep,e,r,t));case 3:var l=n.a,i=n.b;return o(Wl,l,p(K0,e,r,i));case 2:var l=n.a,c=n.b;return o(Zl,l,p(X0,e,r,c));case 4:var l=n.a,u=n.b;return o(Gl,l,p(Q0,e,r,u));default:var v=n.a;return Bo(o(re,o(Za,e,r),v))}}),No=jl,rp=o(Er,Tr,No),np=$(function(e,r){return p(Za,rp,ir(e),r)}),Zo=Lo,ap=o(Er,Tr,Zo),tp=$(function(e,r){return p(Za,ap,ir(e),r)}),op=o(Er,Tr,Mo),ip=$(function(e,r){return p(Za,op,ir(e),r)}),cp=k(ja,237/255,212/255,0/255,1),lp=$(function(e,r){var n=function(a){var t=a.a,i=a.b,c=(t+i)*.1,l=k(At,-mr,mr,14,e.bD+c);return o(U0,-.5,o(ji,i,o(O0,t,o(ip,l,o(np,l,o(tp,l,o(V0,A0(cp),1)))))))};return o(ji,k(At,-.5,.5,7,e.bD),D0(o(re,n,Uf(r.ax))))}),up=function(e){return e},vp=function(e){return{$:0,a:e}},$p=vp,fp={$:3},sp=fp,dp=A(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),mp=dp,pp=$(function(e,r){return r.b?p(br,V,r,e):e}),Ie=function(e){return p(br,pp,P,e)},Go=$(function(e,r){return Ie(o(re,e,r))}),bp=function(e){return{$:1,a:e}},gp=bp,hp=function(e){return o(zr,"height",Fe(e))},_p=function(e){return b$(y$(e))},wp=_p,yp=function(e){return{$:2,a:e}},xp=yp,Sp=function(e){return o(Vr,"",e)},Cp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Se(l*1e3)/1e3},c=function(l){return Se(l*1e4)/100};return Sp(h(["rgba(",ie(c(r)),"%,",ie(c(n)),"%,",ie(c(a)),"%,",ie(i(t)),")"]))},Lp=$(function(e,r){switch(r.$){case 0:return o(Ef,e,r);case 1:return o(jf,e,r);case 2:return o(Nf,e,r);case 3:return o(Zf,e,r);case 4:return o(Gf,e,r);default:return o(Wf,e,r)}}),kp=$(function(e,r){switch(r.$){case 0:return o(df,e,r);case 1:return o(mf,e,r);case 2:return o(pf,e,r);case 3:return o(bf,e,r);case 4:return o(gf,e,r);case 5:return o(hf,e,r);case 6:return o(_f,e,r);case 7:return o(wf,e,r);default:return yf(e)}}),Pp=y(function(e,r,n){return p(Rf,e,r,n)}),Ni=function(e){var r=e;return r},$n=rf,nt=k($n,1,1,1,1),Qe=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),zp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Tp=$(function(e,r){var n=e,a=r.fV,t=r.fZ;return p(zp,n*a/t,n,n*(1-a-t)/t)}),Mp=function(e){var r=e.a,n=e.b,a=e.c;return p(Fn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ga=$(function(e,r){return Mp(o(Tp,e,r))}),Jl=$(function(e,r){return{dn:Cr(e.dn,r.dn),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bZ,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bZ,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bZ,bZ:e.bZ*r.bZ}}),er=lf,Vp=function(e){return er({dw:e.q,dx:e.t,dy:e.w,dz:e.H,dA:e.r,dB:e.u,dC:e.x,dD:e.I,dE:e.s,dF:e.v,dG:e.y,dH:e.J,dI:0,dJ:0,dK:0,dL:1})},at=ge(function(e,r,n,a,t){var i=a.dn?1:-1,c=k($n,a.bZ,a.bZ,a.bZ,i);return _e(t,e,c,Vp(a),a.dn,r,n)}),ql=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Jl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(V,C(at,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(V,C(at,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,L=o(V,C(at,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:L};default:var T=t.a;return p(Vn,k(ql,e,r,n,a),i,T)}}),Dp=A(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Yl=Dp,Wo=A(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Bp=function(e){var r=e.Z,n=e.W,a=e.V;return k(Wo,518,r,n,a)},Ap=$(function(e,r){return{$:6,a:e,b:r}}),Fp=Ap,Xl=h([Bp({V:1,W:0,Z:!1}),k(Yl,!1,!1,!1,!1),o(Fp,0,1)]),tn=519,Ho=8,Ql=15,Kr=7681,Rp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=sf,Ep=$(function(e,r){return{$:0,a:e,b:r}}),jp=Ep({db:1,dk:0,dU:5}),Ae=U$,Np=jp(h([{d0:o(Ae,-1,-1)},{d0:o(Ae,1,-1)},{d0:o(Ae,-1,1)},{d0:o(Ae,1,1)}])),Zp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"d0"},uniforms:{}},Gp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Io=y(function(e,r,n){var a=e.cL,t=e.cm,i=e.c$,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bo),o(te,l(v.a9),o(te,l(v.bw),l(v.bx))))};return o(u,n,o(u,r,p(Gp,a,t,i)))}),Oo=function(e){return p(Io,{cm:e.cm,cL:e.cL,c$:e.c$},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx})},Uo=function(e){return C(ae,h([Oo(e),k(Yl,!1,!1,!1,!1)]),Zp,Rp,Np,{})},Wp=Uo({a9:Kr,cm:0,cL:Ho,bo:tn,c$:Ql,bw:Kr,bx:Kr}),Hp=516,Zi=5386,ye=7680,Ip=function(e){return o(An,2,e+4)},Kl=function(e){return Uo({a9:ye,cm:Ql,cL:Ho,bo:Hp,c$:Ip(e),bw:Zi,bx:Zi})},Op=y(function(e,r,n){return Ie(h([p(Qe,e,n,Xl),h([Kl(r),Wp])]))}),Up=$(function(e,r){return Ie(o(Zc,Op(e),r))}),Jp=function(e){var r=e.Z,n=e.W,a=e.V;return k(Wo,513,r,n,a)},qp=Jp({V:1,W:0,Z:!0}),Yp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Xp=function(e){var r=e.bX,n=e.bI,a=e.bB,t=e.by,i=e.bE,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return Yp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Qp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Gi=$(function(e,r){var n=e,a=r;return p(Qp,32774,n,a)}),Kp=1,Wi=771,e1=770,Jo=Xp({by:0,aI:o(Gi,Kp,Wi),bB:0,bE:o(Gi,e1,Wi),bI:0,bX:0}),Ur=h([qp,Jo]),r1=function(e){var r=e;return r.dN},n1=function(e){var r=e;return r.dO},eu=function(e){var r=e;return r.dP},a1=function(e){var r=e;return r.dQ},t1=function(e){var r=e;return r.dR},ru=function(e){var r=e;return r.dS},nu=function(e){return B(o($r,a1(e),r1(e)),o($r,t1(e),n1(e)),o($r,ru(e),eu(e)))},o1=function(e){return e},i1=function(e){return dr({cy:o1({fV:e.H,fZ:e.I,c2:e.J}),c0:vr({fV:e.q,fZ:e.r,c2:e.s}),c1:vr({fV:e.t,fZ:e.u,c2:e.v}),c3:vr({fV:e.w,fZ:e.x,c2:e.y})})},tt=$(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,v=u;return{fV:a.fV*v.fV+a.fZ*v.fZ+a.c2*v.c2,fZ:a.fV*l.fV+a.fZ*l.fZ+a.c2*l.c2,c2:a.fV*i.fV+a.fZ*i.fZ+a.c2*i.c2}}),au=$(function(e,r){var n=e,a=r,t=n.cy,i=t,c=a.fV-i.fV,l=a.fZ-i.fZ,u=a.c2-i.c2,v=n.c3,s=v,d=n.c1,m=d,f=n.c0,g=f;return{fV:c*g.fV+l*g.fZ+u*g.c2,fZ:c*m.fV+l*m.fZ+u*m.c2,c2:c*s.fV+l*s.fZ+u*s.c2}}),tu=$(function(e,r){return{cy:o(au,e,un(r)),c0:o(tt,e,Gr(r)),c1:o(tt,e,Wr(r)),c3:o(tt,e,Zr(r))}}),La=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Me,n,a)}),ia=$(function(e,r){return O(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(ia,n,a)}),c1=$(function(e,r){var n=La(r),a=La(e);return{dN:o(ue,a.dN,n.dN),dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(de,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS)}}),Oe=function(e){var r=e;return r},l1=function(e){var r=e;return B(r.fV,r.fZ,r.c2)},yn=$(function(e,r){var n=e,a=r;return a+n}),u1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(xe(a)),c=aa(xe(n)),l=aa(xe(t)),u=l1(r),v=u.a,s=u.b,d=u.c;return{dN:o(yn,c,v),dO:o(yn,i,s),dP:o(yn,l,d),dQ:o($r,c,v),dR:o($r,i,s),dS:o($r,l,d)}}),Hi=A(function(e,r,n,a){var t=n.eA,i=2*n.eY*r,c=2*n.eX*r,l=2*n.eW*r,u=t.c2*r,v=t.fZ*r,s=t.fV*r,d=Oe(Zr(e)),m=U(l*d.fV)+U(c*d.fZ)+U(i*d.c2),f=Oe(Wr(e)),g=U(l*f.fV)+U(c*f.fZ)+U(i*f.c2),b=Oe(Gr(e)),w=U(l*b.fV)+U(c*b.fZ)+U(i*b.c2),x=o(u1,B(w,g,m),o(au,e,p(Nt,s,v,u)));if(a.$)return ee(x);var _=a.a;return ee(o(c1,_,x))}),Gt=A(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=k(Hi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=k(Hi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=k(Gt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(tu,i1(v),e),m=r*v.bZ,f=e,g=r,b=k(Gt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Hr=Y$,Ir=X$,Or=Q$,ou=function(e){return{$:4,a:e}},v1=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(V,n,r);e=t,r=i;continue e}else return r}),En=function(e){return ou(o(v1,e,P))},$1={dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bZ:1},Ii=Uo({a9:Kr,cm:0,cL:Ho,bo:tn,c$:255,bw:Kr,bx:Kr}),f1=function(e){var r=e,n=o(Me,U(r.fV),o(Me,U(r.fZ),U(r.c2)));if(n){var a=r.c2/n,t=r.fZ/n,i=r.fV/n,c=_r(i*i+t*t+a*a);return c*n}else return Xe},De={bB:0,ez:!1,bI:0,cH:0,bX:0,cW:0,fV:0,fZ:0,c2:0},Ze=$(function(e,r){var n=e,a=r;return er({dw:n.fV,dx:n.bX,dy:a.fV,dz:a.bX,dA:n.fZ,dB:n.bI,dC:a.fZ,dD:a.bI,dE:n.c2,dF:n.bB,dG:a.c2,dH:a.bB,dI:n.cW,dJ:n.cH,dK:a.cW,dL:a.cH})}),bn=S({be:o(Ze,De,De),bN:o(Ze,De,De),bO:o(Ze,De,De),bP:o(Ze,De,De)},k($n,0,0,0,0)),iu=514,cu=function(e){var r=e.Z,n=e.W,a=e.V;return k(Wo,515,r,n,a)},lu=240,s1=h([cu({V:1,W:0,Z:!0}),Oo({a9:ye,cm:lu,cL:0,bo:iu,c$:0,bw:ye,bx:ye}),Jo]),d1=$(function(e,r){var n=e,a=r.fj,t=r.eT,i=r.es,c=xe(a),l=c,u=xe(t),v=u,s=n.cJ;if(s.$){var m=s.a;return Ct(v)?er({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:0,dJ:0,dK:0,dL:1}):er({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:-2/(v-l),dH:-(v+l)/(v-l),dI:0,dJ:0,dK:0,dL:1})}else{var d=s.a;return Ct(v)?er({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-1,dH:-2*l,dI:0,dJ:0,dK:-1,dL:0}):er({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-(v+l)/(v-l),dH:-2*v*l/(v-l),dI:0,dJ:0,dK:-1,dL:0})}}),On=$(function(e,r){return(1&e>>r)===1?0:1}),m1=function(e){return h([cu({V:1,W:0,Z:!0}),Oo({a9:ye,cm:lu,cL:e,bo:iu,c$:0,bw:ye,bx:ye}),Jo])},p1=y(function(e,r,n){return Ie(o(re,function(a){var t=a<<4,i=k($n,o(On,a,0),o(On,a,1),o(On,a,2),o(On,a,3));return p(Qe,e,S(r,i),m1(t))},o(rn,1,o(An,2,n)-1)))}),en=function(e){var r=e;return r},b1=uf,g1={cy:Tr,c0:No,c1:Zo,c3:Mo},jn=function(e){var r=e;return r},h1=function(e){var r=jn(un(e)),n=Oe(Zr(e)),a=Oe(Wr(e)),t=Oe(Gr(e));return er({dw:t.fV,dx:a.fV,dy:n.fV,dz:r.fV,dA:t.fZ,dB:a.fZ,dC:n.fZ,dD:r.fZ,dE:t.c2,dF:a.c2,dG:n.c2,dH:r.c2,dI:0,dJ:0,dK:0,dL:1})},_1=$(function(e,r){var n=r;return h1(o(tu,n,e))}),w1=function(e){return o(_1,g1,e)},y1=function(e){var r=e;return r.c_},x1=function(e){var r=e;return Gr(r)},S1=function(e){var r=e;return Wr(r)},C1=function(e){var r=y1(e.ex),n=dr({cy:Ft(r),c0:x1(r),c1:S1(r),c3:Ca(Et(r))}),a=En(e.aQ),t=a,i=k(Gt,n,1,J,h([t]));if(i.$===1)return P;var c=i.a,l=w1(r),u=o(oe,.99,o(ue,xe(e.eC),Rt(eu(c)))),v=nu(c),s=v.a,d=v.b,m=v.c,f=f1(p(zo,s,d,m)),g=o(oe,1.01,o(yn,f,Rt(ru(c)))),b=o(d1,e.ex,{es:e.es,eT:g,fj:u}),w=b1(b).dL,x=w?Oe(Ca(Et(r))):en(Ft(r)),_=function(){var ce=e.fL;switch(ce.$){case 0:return S(0,0);case 1:return S(1,0);case 2:return S(2,0);case 3:var me=ce.a;return S(3,me);case 4:var me=ce.a;return S(4,me);default:return S(5,0)}}(),L=_.a,T=_.b,Z=e.eR,j=Z,E=o(Ga,j,e.fS),N=E,G=er({dw:0,dx:x.fV,dy:Hr(N),dz:e.ed,dA:0,dB:x.fZ,dC:Ir(N),dD:ta(f),dE:0,dF:x.c2,dG:Or(N),dH:L,dI:0,dJ:w,dK:0,dL:T}),F=_e(ql,G,l,b,$1,t,{M:P,U:P,fB:P}),Y=e.fb;switch(Y.$){case 0:var Q=Y.a;return Ie(h([p(Qe,F.M,S(Q,nt),Ur),p(Qe,F.U,bn,Ur)]));case 1:var Q=Y.a;return Ie(h([p(Qe,F.M,bn,Ur),h([Ii]),p(Qe,F.fB,Q.be,Xl),h([Kl(0)]),p(Qe,F.M,S(Q,nt),s1),p(Qe,F.U,bn,Ur)]));default:var le=Y.a,fe=Y.b;return Ie(h([p(Qe,F.M,S(fe,nt),Ur),h([Ii]),o(Up,F.fB,le),p(p1,F.M,fe,Fr(le)),p(Qe,F.U,bn,Ur)]))}},L1=function(e){return o(zr,"width",Fe(e))},k1=$(function(e,r){var n=h([gp(1),xp(0),$p(!0),k(mp,0,0,0,0)]),a=function(){var L=e.eq;switch(L.$){case 0:return B(n,"0",1);case 1:return B(o(V,sp,n),"1",1);default:var T=L.a;return B(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Ni(v),d=o(ne,"height",Fe(s)+"px"),m=Ni(u),f=m/s,g=o(Go,function(L){return C1({es:f,ex:e.ex,eC:e.eC,aQ:L.aQ,eR:L.eR,fb:L.fb,ed:c,fL:L.fL,fS:L.fS})},r),b=o(ne,"width",Fe(m)+"px"),w=e.aJ,x=w,_=Cp(x);return p(wp,"div",h([o(ne,"padding","0px"),b,d]),h([S(i,p(Pp,t,h([L1(Se(m*c)),hp(Se(s*c)),b,d,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),P1=function(e){return{$:2,a:e}},z1=function(e){return P1(e)},T1=function(e){return o(k1,{eq:z1(e.b8),aJ:e.aJ,ex:e.ex,eC:e.eC,aL:e.aL},h([{aQ:e.aQ,eR:e.eR,fb:e.fb,fL:e.fL,fS:e.fS}]))},Oi=function(e){return e},uu=A(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),M1=A(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),vu=A(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),$u=A(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),V1=A(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),D1=A(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),B1=A(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),qo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return k(B1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return k(uu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return k(M1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return k(vu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return k(D1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return k($u,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return k(V1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Yo={$:0},A1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=La(c(u)),d=o(de,s.dQ,e),m=o(ue,s.dN,r),f=o(de,s.dR,n),g=o(ue,s.dO,a),b=o(de,s.dS,t),w=o(ue,s.dP,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t}}),F1=y(function(e,r,n){var a=La(e(r));return Ma(A1,a.dQ,a.dN,a.dR,a.dO,a.dS,a.dP,e,n)}),ot=$(function(e,r){var n=e,a=r;return O(a,n)<1}),fu=function(e){return o(ot,e.dN,e.dQ)&&o(ot,e.dO,e.dR)&&o(ot,e.dP,e.dS)?e:{dN:o(ue,e.dQ,e.dN),dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(de,e.dQ,e.dN),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP)}},zn=function(e){var r=e;return r},su=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=yr(n),c=xr(n),l=Sr(n),u=yr(a),v=xr(a),s=Sr(a),d=yr(t),m=xr(t),f=Sr(t);return fu({dN:o(ue,i,o(ue,u,d)),dO:o(ue,c,o(ue,v,m)),dP:o(ue,l,o(ue,s,f)),dQ:o(de,i,o(de,u,d)),dR:o(de,c,o(de,v,m)),dS:o(de,l,o(de,s,f))})},du=K$,ze=function(e){return du(jn(e))},mu=function(e){var r=e;return r},Wa=function(e){return du(mu(e))},pu=function(e){return e},R1=$(function(e,r){var n=e,a=r,t=o(Me,U(a.fV),o(Me,U(a.fZ),U(a.c2)));if(t){var i=a.c2/t,c=a.fZ/t,l=a.fV/t,u=_r(l*l+c*c+i*i);return{fV:n*l/u,fZ:n*c/u,c2:n*i/u}}else return Dl}),E1=R1(pu(1)),bu=y(function(e,r,n){var a=o(Sa,r,n),t=o(Sa,e,r);return E1(o(So,a,t))}),j1=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Wa(p(bu,n,a,t));return B({o:i,d0:ze(n)},{o:i,d0:ze(a)},{o:i,d0:ze(t)})},N1=$(function(e,r){return{$:2,a:e,b:r}}),gu=N1({db:3,dk:0,dU:4}),Z1=function(e){if(e.b){var r=e.a,n=e.b,a=gu(o(re,j1,e)),t=p(F1,su,r,n);return k(uu,t,e,a,0)}else return Yo},Ne=y(function(e,r,n){return B(e,r,n)}),hu=function(){var e=ar(1),r=ar(1),n=ar(1),a=o(oe,-.5,e),t=o(oe,-.5,r),i=o(oe,-.5,n),c=p(pe,i,t,a),l=o(oe,.5,e),u=p(pe,i,t,l),v=o(oe,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(oe,.5,n),f=p(pe,m,t,a),g=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return qo(Z1(h([p(Ne,c,g,f),p(Ne,c,s,g),p(Ne,u,b,w),p(Ne,u,w,d),p(Ne,f,g,w),p(Ne,f,w,b),p(Ne,c,d,s),p(Ne,c,u,d),p(Ne,c,f,b),p(Ne,c,b,u),p(Ne,s,w,g),p(Ne,s,d,w)])))}(),Un={$:0},G1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),W1=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Wa(p(bu,u,l,c)),s={o:v,d0:ze(u)},d={o:v,d0:ze(l)},m={o:v,d0:ze(c)};return o(V,s,o(V,d,o(V,m,n)))}),Xo=function(e){var r=e;return r.D},H1=A(function(e,r,n,a){if(r.$===1)return J;var t=r.a;if(n.$===1)return J;var i=n.a;if(a.$===1)return J;var c=a.a;return ee(p(e,t,i,c))}),Wt=4294967295>>>32-Ln,Ht=av,I1=y(function(e,r,n){e:for(;;){var a=Wt&r>>>e,t=o(Ht,a,n);if(t.$){var v=t.a;return o(Ht,Wt&r,v)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),O1=function(e){return e>>>5<<5},U1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?J:O(e,O1(n))>-1?ee(o(Ht,Wt&e,i)):ee(p(I1,a,e,t))}),Qo=function(e){var r=e;return r.ah},it=$(function(e,r){return o(U1,e,Qo(r))}),J1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return k(H1,y(function(c,l,u){return B(c,l,u)}),o(it,a,e),o(it,t,e),o(it,i,e))};return o(wl,r,Xo(e))},q1=y(function(e,r,n){e:for(;;){var a=o(fo,Ee,e),t=a.a,i=a.b;if(O(xt(t),Ee)<0)return o(Jc,!0,{z:r,l:n,p:t});var c=i,l=o(V,Oc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ko=function(e){return e.b?p(q1,e,P,0):Hc},Y1=y(function(e,r,n){return e(r(n))}),X1=$(function(e,r){return!o(tl,o(Y1,Ps,e),r)}),Q1=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(V,n,a):a}),P,r)}),K1=function(e){var r=e.a;return r},_u=$(function(e,r){var n=K1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(X1,a,r)?{D:r,ah:e}:{D:o(Q1,a,r),ah:e}}),eb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Nn=eb({db:1,dk:3,dU:4}),ca=$(function(e,r){var n=en(r),a=en(e);return S(B(a.fV,a.fZ,a.c2),B(n.fV,n.fZ,n.c2))}),Ui=p(Fn,0,0,0),ct=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(fl,o(ca,e,r),t);if(v.$){var d={o:Ui,d0:ze(r)},m={o:Ui,d0:ze(e)},f=u+1,g=u;return B(o(V,B(n,g,f),o(V,B(n,f,a),c)),o(V,d,o(V,m,l)),u+2)}else{var s=v.a;return B(o(V,B(n,s,a),c),l,u)}}),rb=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,L=a+3,T=_e(ct,s,m,f,b,r,_e(ct,d,s,g,f,r,_e(ct,m,d,b,g,r,t)));e=w,r=x,n=_,a=L,t=T;continue e}else{var Z=t,j=Z.a,E=Z.b;return S(j,Re(E))}}),nb=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(hn,o(ca,m,s),f,p(hn,o(ca,s,d),g,p(hn,o(ca,d,m),b,t))),x=o(V,B(b,g,f),a),_=e,L=v,T=n+3,Z=x,j=w;e=_,r=L,n=T,a=Z,t=j;continue e}else return B(a,t,n)}),Mr=y(function(e,r,n){var a=J1(n),t=p(br,W1(r),P,a),i=C(nb,r,a,0,P,Tl),c=i.a,l=i.b,u=i.c,v=C(rb,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=Bt(d)?t:ve(t,d);return p(G1,e,o(_u,Ko(m),s),o(Nn,m,s))}),It=function(e){return{D:o(re,function(r){return B(3*r,3*r+1,3*r+2)},o(rn,0,Fr(e)-1)),ah:Ko(Ie(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},wu=function(e){switch(e.$){case 0:return Un;case 1:var a=e.a,r=e.b,n=o(re,zn,r);return p(Mr,a,Br,It(n));case 2:var a=e.a,r=e.b,n=o(re,zn,r);return p(Mr,a,Br,It(n));case 3:var a=e.a,t=e.b;return p(Mr,a,Br,t);case 4:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 5:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 6:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 7:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.d0},t);case 8:return Un;case 9:return Un;default:return Un}},Ji=wu(hu),yu={$:0},z=yu,be=$(function(e,r){return{$:1,a:e,b:r}}),ab={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bF"}},tb=1029,ob=function(e){return{$:5,a:e}},xu=function(e){var r=e;return ob(r)},ib=xu(tb),cb=1028,lb=xu(cb),Te=y(function(e,r,n){return r===1?e?o(V,ib,n):o(V,lb,n):n}),Su={src:`
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
    `,attributes:{position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},lt=A(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return C(ae,p(Te,l,a,d),Su,ab,n,{bF:e,b:c,c:i,d:v,e:t,f:u})}))}),ei={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Cu={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=A(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return C(ae,p(Te,l,a,d),Cu,ei,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Lu=$(function(e,r){return{$:3,a:e,b:r}}),ub={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bV",sceneProperties:"e"}},ku={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bV",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vb=A(function(e,r,n,a){return o(Lu,n,K(function(t,i,c,l,u,v,s,d){return C(ae,d,ku,ub,a,{aw:e,b:c,c:i,bV:r,d:v,e:t,f:u})}))}),ri={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Zn=function(e){var r=e;return r},Ha=ef,lr=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return C(ae,p(Te,u,t,m),Cu,ri,a,{aO:o(Ha,Zn(r),e),b:l,c,d:s,e:i,f:v})}))}),$b={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bV",sceneProperties:"e"}},fb=ge(function(e,r,n,a,t){return o(Lu,a,K(function(i,c,l,u,v,s,d,m){return C(ae,m,ku,$b,t,{aO:o(Ha,Zn(r),e),b:l,c,bV:n,d:s,e:i,f:v})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColor:"cn",sceneProperties:"e",viewMatrix:"f"}},zu={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=A(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return C(ae,p(Te,l,a,d),zu,Pu,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,cn:e,b:c,c:i,d:v,e:t,f:u})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColorTexture:"co",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Mu={src:`
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
    `,attributes:{normal:"o",position:"d0",tangent:"ef",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sb=Ue(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return C(ae,p(Te,v,i,f),Mu,Tu,t,{P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,co:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Vu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b5",constantMetallic:"b6",constantRoughness:"b7",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallicTexture:"cs",normalMapTexture:"aX",roughnessTexture:"cP",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},db=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(d,m,f,g,b,w,x,_){var L=x.a,T=x.b;return C(ae,p(Te,g,s,_),Mu,Vu,v,{b3:e,b5:r,b6:i,b7:a,P:T,be:L.be,bN:L.bN,bO:L.bO,bP:L.bP,cs:t,b:f,c:m,aX:c,d:w,cP:n,e:d,a0:l,f:b})}))}}}}}}}}}}},Du={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallic:"cr",roughness:"cO",sceneProperties:"e",viewMatrix:"f"}},qn=Ue(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return C(ae,p(Te,v,i,f),zu,Du,t,{b2:e,P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,cr:n,b:u,c:l,d,cO:r,e:c,f:s})}))}),mb=function(e){return{$:0,a:e}},qi=$(function(e,r){return{$:1,a:e,b:r}}),xn=$(function(e,r){if(r.$){var n=r.a.C;return S(n,1)}else return r.a,S(e,0)}),pb=function(e){return k($n,Hr(e),Ir(e),Or(e),1)},ni=k($n,0,0,0,0),la=$(function(e,r){if(r.$){var a=r.a.C;return S(a,ni)}else{var n=r.a;return S(e,pb(n))}}),Bu=$(function(e,r){var n=S(e,r);if(n.a.$){var t=n.a.a.C;return o(qi,S(t,ni),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(qi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,mb(a)}}),bb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yn=A(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),gb=A(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hb=function(e){return o(Ae,e,1)},Ot=o(Ae,0,0),Jr=$(function(e,r){if(r.$){var a=r.a.C;return S(a,Ot)}else{var n=r.a;return S(e,hb(n))}}),Au=A(function(e,r,n,a){var t=k(gb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return k(Yn,S(u,ni),o(Jr,u,r),o(Jr,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return k(Yn,o(la,u,e),S(u,Ot),o(Jr,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return k(Yn,o(la,u,e),o(Jr,u,r),S(u,Ot),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return k(Yn,o(la,u,e),o(Jr,u,r),o(Jr,u,n),S(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(bb,i,c,l)}}),_b={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bF",sceneProperties:"e"}},ut=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return C(ae,p(Te,u,t,m),Su,_b,a,{b0:Zn(r),bF:e,b:l,c,d:s,e:i,f:v})}))}),Fu={src:`
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
    `,attributes:{normal:"o",position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wb=A(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return C(ae,p(Te,l,a,d),Fu,Tu,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,co:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),yb=qt(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return C(ae,p(Te,m,u,w),Fu,Vu,l,{b3:e,b5:r,b6:i,b7:a,P:_,be:x.be,bN:x.bN,bO:x.bO,bP:x.bP,cs:t,b:d,c:s,aX:e,d:g,cP:n,e:v,a0:0,f})}))}),Tn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),xb=function(e){var r=e;return p(Tn,r.dQ,r.dN,.5)},Sb=function(e){var r=e;return p(Tn,r.dR,r.dO,.5)},Cb=function(e){var r=e;return p(Tn,r.dS,r.dP,.5)},Lb=function(e){return p(pe,xb(e),Sb(e),Cb(e))},W=function(e){var r=nu(e),n=r.a,a=r.b,t=r.c;return{eA:jn(Lb(e)),eW:n/2,eX:a/2,eY:t/2}},ai=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return k(lt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return k(lt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return k(lt,l,W(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return k(cr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return k(cr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return k(cr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return k(vb,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ut,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ut,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ut,l,v,W(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return C(lr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return C(lr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(fb,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Bu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return k(wb,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(sb,b,x,_,W(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return k(Jn,m,W(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var L=e.b,T=e.c,Z=e.d,j=e.e,E=k(Au,L,T,Z,j);if(E.$){var Y=E.a,Q=Y.a,le=Y.b,fe=E.b,ce=fe.a,me=fe.b,Ve=E.c,Ce=Ve.a,gr=Ve.b,hr=E.d,x=hr.a,_=hr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Qu(yb,Q,le,ce,me,Ce,gr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return db(Q)(le)(ce)(me)(Ce)(gr)(x)(_)(W(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,G=E.b,F=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,F,W(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,F,W(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(qn,N,G,F,W(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),vt=function(e){var r=e;return r.fV},$t=function(e){var r=e;return r.fZ},ft=function(e){var r=e;return r.c2},kb=function(e){var r=e,n=ft(r.c3),a=$t(r.c3),t=vt(r.c3),i=ft(r.c1),c=$t(r.c1),l=vt(r.c1),u=ft(r.c0),v=$t(r.c0),s=vt(r.c0);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Pb=function(e){var r=jn(un(e)),n=Oe(Zr(e)),a=Oe(Wr(e)),t=Oe(Gr(e));return{dn:kb(e),q:t.fV,r:t.fZ,s:t.c2,t:a.fV,u:a.fZ,v:a.c2,w:n.fV,x:n.fZ,y:n.c2,H:r.fV,I:r.fZ,J:r.c2,bZ:1}},qr=$(function(e,r){return{$:5,a:e,b:r}}),Ru=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Jl,a,e);return o(qr,i,t);case 1:return o(qr,e,n);case 3:return o(qr,e,n);case 2:return o(qr,e,n);default:return o(qr,e,n)}}),Eu=$(function(e,r){return o(Ru,Pb(e),r)}),Ia=function(e){return{$:2,a:e}},zb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eA;return{eA:{fV:n*i.fV,fZ:a*i.fZ,c2:t*i.c2},eW:n*r.eW,eX:a*r.eX,eY:t*r.eY}}),Tb=af,Mb=nf,Yi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Mb(a),g=f.fV,b=f.fZ,w=f.c2,x=f.en,_=Tb({en:x,fV:g*s,fZ:b*d,c2:w*m});return Ma(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Ut=$(function(e,r){switch(r.$){case 0:return yu;case 5:var n=r.a,a=r.b;return o(qr,n,o(Ut,e,a));case 1:var t=r.a,i=r.b;return o(be,o(zb,e,t),o(Yi,e,i));case 3:return r;case 2:var i=r.a;return Ia(o(Yi,e,i));default:var c=r.a;return ou(o(re,Ut(e),c))}}),ti=$(function(e,r){var n=r;return o(Ut,e,n)}),oi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ju=7683,Nu=7682,Vb=p(Io,{cm:0,cL:0,c$:15},{a9:ye,bo:tn,bw:ye,bx:ju},{a9:ye,bo:tn,bw:ye,bx:Nu}),Db=p(Io,{cm:0,cL:0,c$:15},{a9:ye,bo:tn,bw:ye,bx:Nu},{a9:ye,bo:tn,bw:ye,bx:ju}),ii=$(function(e,r){return e?o(V,Db,r):o(V,Vb,r)}),Bb={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},Ab=function(e){if(e.$){var r=e.c;return ee(K(function(n,a,t,i,c,l,u,v){return C(ae,o(ii,i,v),Bb,oi,r,{b:t,c:a,d:l,e:n,b_:u,f:c})}))}else return J},ka=function(e){var r=Ab(e);if(r.$)return z;var n=r.a;return Ia(n)},Fb=A(function(e,r,n,a){var t=o(ai,n,hu),i=function(){var s=S(e,r);return s.a?s.b?En(h([t,ka(Ji)])):t:s.b?ka(Ji):z}(),c=Fo(a),l=c.a,u=c.b,v=c.c;return o(Eu,Ao(a),o(ti,B(l,u,v),i))}),Rb=$(function(e,r){return k(Fb,!0,!0,e,r)}),Zu=$(function(e,r){return{$:0,a:e,b:r}}),Eb=function(e){var r=wo(e),n=r.cK,a=r.ca,t=r.b4;return p(Fn,n,a,t)},jb=function(e){return o(Zu,0,Zt(Eb(e)))},Nb=function(e){var r=e;return r.k},Sn=function(e){var r=e;return Rr(r)},Zb=$(function(e,r){var n=e.d0,a=e.o;return o(V,{o:Wa(a),d0:ze(n)},r)}),Gb=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Or(l.d0),s=Ir(l.d0),d=Hr(l.d0),m=o(ia,e,d),f=o(Me,r,d),g=o(ia,n,s),b=o(Me,a,s),w=o(ia,t,v),x=o(Me,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return fu({dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t})}),Gu=$(function(e,r){var n=Or(e.d0),a=Ir(e.d0),t=Hr(e.d0);return Yt(Gb,t,t,a,a,n,n,r)}),Wb=function(e){var r=p(Fc,Zb,P,Qo(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,Xo(e)),i=o(Gu,n,a);return k(vu,i,e,t,0)}else return Yo},Xi=$(function(e,r){var n=e,a=r,t=n.c1,i=t,c=n.c0,l=c;return{fV:a.fV*l.fV+a.fZ*i.fV,fZ:a.fV*l.fZ+a.fZ*i.fZ,c2:a.fV*l.c2+a.fZ*i.c2}}),Pa=function(e){var r=e;return an(r)},Jt=function(e){return ir(2*mr*e)},Hb=Br,Qi=Hb({cy:Tr,c0:No,c1:Zo}),Wu=function(){var e=72,r=o(Fl,e,Jt(1)),n=ar(1),a=Qr(To),t=Qr(Po),i=ar(1),c=o(oe,.5,i),l=p(pe,Xe,Xe,c),u=o(oe,-.5,i),v=p(pe,Xe,Xe,u),s=function(f){var g=o(oe,f,r),b=Qr(o(Xi,Qi,jt(g))),w=o(oe,Sn(g),n),x=o(oe,Pa(g),n),_=p(pe,w,x,c),L=p(pe,w,x,u),T=o(_a,e,f+1),Z=o(oe,T,r),j=Qr(o(Xi,Qi,jt(Z))),E=o(oe,Sn(Z),n),N=o(oe,Pa(Z),n),G=p(pe,E,N,u),F=p(pe,E,N,c);return h([B({o:t,d0:v},{o:t,d0:G},{o:t,d0:L}),B({o:b,d0:L},{o:j,d0:G},{o:j,d0:F}),B({o:b,d0:L},{o:j,d0:F},{o:b,d0:_}),B({o:a,d0:l},{o:a,d0:_},{o:a,d0:F})])},d=o(re,s,o(rn,0,e-1)),m=It(Ie(d));return qo(Wb(m))}(),Ki=wu(Wu),Ib=function(e){var r=Bl(e),n=Co(r),a=n.a,t=n.b;return dr({cy:Al(e),c0:a,c1:t,c3:r})},Ob=function(e){var r=e;return r.e9},Ub=function(e){var r=e;return r.fu},Jb=A(function(e,r,n,a){var t=Ib(Nb(a)),i=o(ai,n,Wu),c=function(){var d=S(e,r);return d.a?d.b?En(h([i,ka(Ki)])):i:d.b?ka(Ki):z}(),l=Ub(a),u=l,v=Ob(a),s=v;return o(Eu,t,o(ti,B(u,u,s),c))}),qb=$(function(e,r){return k(Jb,!0,!0,e,r)}),ec={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},rc={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},gn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=en(n),c=en(a),l=en(t);return er({dw:i.fV,dx:c.fV,dy:l.fV,dz:0,dA:i.fZ,dB:c.fZ,dC:l.fZ,dD:0,dE:i.c2,dF:c.c2,dG:l.c2,dH:0,dI:0,dJ:0,dK:0,dL:0})},Xn=gu(h([B({cV:0},{cV:1},{cV:2})])),Yb=$(function(e,r){var n=su(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,K(function(_,L,T,Z,j,E,N,G){return C(ae,p(Te,Z,0,G),ec,ei,Xn,{aw:t,b:T,c:L,d:E,e:_,bt:gn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,K(function(_,L,T,Z,j,E,N,G){return C(ae,p(Te,Z,0,G),ec,ri,Xn,{aO:o(Ha,Zn(c),i),b:T,c:L,d:E,e:_,bt:gn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Bu,l,f);if(u.$)return z;var v=u.a;return o(be,a,K(function(_,L,T,Z,j,E,N,G){var F=N.a,Y=N.b;return C(ae,p(Te,Z,0,G),rc,Pu,Xn,{P:Y,be:F.be,bN:F.bN,bO:F.bO,bP:F.bP,cn:v,b:T,c:L,d:E,e:_,bt:gn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=k(Au,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(be,a,K(function(_,L,T,Z,j,E,N,G){var F=N.a,Y=N.b;return C(ae,p(Te,Z,0,G),rc,Du,Xn,{b2:b,P:Y,be:F.be,bN:F.bN,bO:F.bO,bP:F.bP,cr:x,b:T,c:L,d:E,cO:w,e:_,bt:gn(r),f:j})}))}}),Xb=function(){var e=h([{a$:o(Ae,0,1)},{a$:o(Ae,1,1)},{a$:o(Ae,2,1)},{a$:o(Ae,0,-1)},{a$:o(Ae,1,-1)},{a$:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Nn,e,r)}(),Qb={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",triangleVertexPositions:"bt",viewMatrix:"f"}},nc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return C(ae,o(ii,t,u),Qb,oi,Xb,{b:a,c:n,d:c,e:r,b_:l,bt:gn(e),f:i})}))},Kb=A(function(e,r,n,a){var t=o(Yb,n,a),i=S(e,r);return i.a?i.b?En(h([t,nc(a)])):t:i.b?nc(a):z}),e3=$(function(e,r){return k(Kb,!0,!0,e,r)}),r3=$(function(e,r){var n=Sr(r),a=Sr(e),t=xr(r),i=xr(e),c=yr(r),l=yr(e);return{dN:o(ue,l,c),dO:o(ue,i,t),dP:o(ue,a,n),dQ:o(de,l,c),dR:o(de,i,t),dS:o(de,a,n)}}),n3=function(e){var r=Ro(e),n=r.a,a=r.b;return o(r3,n,a)},ac={src:`
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
    `,attributes:{lineSegmentVertex:"dv"},uniforms:{lineSegmentEndPoint:"dt",lineSegmentStartPoint:"du",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},a3=$(function(e,r){return{$:1,a:e,b:r}}),t3=a3({db:2,dk:0,dU:1}),tc=t3(h([S({dv:0},{dv:1})])),o3=$(function(e,r){var n=n3(r),a=W(n),t=Ro(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,K(function(v,s,d,m,f,g,b,w){return C(ae,w,ac,ei,tc,{aw:l,dt:ze(c),du:ze(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,K(function(s,d,m,f,g,b,w,x){return C(ae,x,ac,ri,tc,{aO:o(Ha,Zn(u),l),dt:ze(c),du:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),i3=$(function(e,r){return o(o3,e,r)}),oc=$(function(e,r){var n=e,a=r;return n/a}),c3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(V,i,t);if(Cr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ic=$(function(e,r){return e<1?P:C(c3,0,e,e,r,P)}),l3=$(function(e,r){var n=e.d0,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(V,{o:Wa(a),d0:ze(n),L:o(Ae,c,l)},r)}),u3=function(e){var r=p(Fc,l3,P,Qo(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,Xo(e)),i=o(Gu,n,a);return k($u,i,e,t,0)}else return Yo},ci=$(function(e,r){var n=e,a=r,t=Rr(a);return{fV:t*Rr(n),fZ:t*an(n),c2:an(a)}}),v3=function(){var e=ar(1),r=72,n=o(rn,0,r-1),a=o(ic,r,o(Tn,Xe,Jt(1))),t=vo(r/2),i=o(rn,0,t-1),c=o(ic,t,o(Tn,pn(90),pn(-90))),l=Ko(Ie(o(re,function(s){return o(re,function(d){return{o:Qr(o(ci,s,d)),d0:p(pe,o(oe,Sn(d)*Sn(s),e),o(oe,Sn(d)*Pa(s),e),o(oe,Pa(d),e)),L:S(o(oc,s,Jt(1)),o(oc,o(yn,pn(90),d),pn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ie(o(re,function(s){return Ie(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return qo(u3(o(_u,l,v)))}(),za=72,Qn=2*za,$3=$(function(e,r){e:for(;;){var n=Qn+1,a=o(_a,Qn,2*e+3),t=o(_a,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(V,B(l,c,t),o(V,B(c,a,t),o(V,B(c,i,a),o(V,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),f3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),s3=$(function(e,r){e:for(;;){var n=p(f3,0,2*mr,e/za),a={bz:n,bS:0,bY:1},t={bz:n,bS:1,bY:1},i=o(V,a,o(V,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),d3=function(){var e=o(s3,za-1,h([{bz:0,bS:0,bY:0},{bz:0,bS:1,bY:0}])),r=o($3,za-1,P);return o(Nn,e,r)}(),m3={src:`
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
    `,attributes:{angle:"bz",offsetScale:"bS",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},cc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return C(ae,o(ii,!0,u),m3,oi,d3,{aw:p(Fn,0,0,1),b:a,c:n,d:c,e:r,b_:l,f:i})}))},p3=function(e){var r=mu(e);return{dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fV,I:r.fZ,J:r.c2,bZ:1}},b3=$(function(e,r){return o(Ru,p3(e),r)}),g3=A(function(e,r,n,a){var t=o(ai,n,v3),i=function(){var u=S(e,r);return u.a?u.b?En(h([t,cc()])):t:u.b?cc():z}(),c=jo(a),l=c;return o(b3,o(Sa,Tr,Eo(a)),o(ti,B(l,l,l),i))}),h3=$(function(e,r){return k(g3,!0,!0,e,r)}),_3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),w3=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),y3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Zu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(_3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Nl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(w3,n,a,t,i,c)}},x3=y3,Hu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(Rb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(e3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(h3,x3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(qb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(i3,jb(c),l)]);default:var u=e.a;return o(Go,Hu,u)}},S3=function(e){return o(Go,Hu,e)},C3=$(function(e,r){return T1({eq:e.eq,aJ:up(e.eu),ex:e.ex,eC:ar(e.eC),b8:e.b8,aL:S(Oi(Se(e.bk.fT)),Oi(Se(e.bk.e_))),aQ:S3(r),eR:e.eR,fb:e.fb,fL:e.fL,fS:e.fS})}),Kn=function(e){return e*mr/180},Iu=function(e){return e},L3=$(function(e,r){var n=e,a=Oe(r.eK),t=a.fV,i=a.fZ,c=a.c2,l=o(Ga,r.bK,r.aK),u=l;return{bB:Or(u),ez:n,bI:Ir(u),cH:0,bX:Hr(u),cW:1,fV:-t,fZ:-i,c2:-c}}),k3=function(e){return o(L3,Iu(!0),{aK:e.aK,eK:o(ci,ir(e.bA),ir(e.bG)),bK:e.bK})},P3=function(e){return e},z3=function(e){return P3(1.2*o(An,2,e))},st=Vo({fV:.37208,fZ:.37529}),T3=$(function(e,r){return{$:2,a:e,b:r}}),Ou=function(e){return{$:0,a:e}},ea=function(e){var r=e;return r},M3=function(e){var r=e;return r.ez},V3=Ou(bn.a),D3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?S(o(V,a,i),c):S(i,o(V,a,c))});return p(br,n,S(P,P),r)}),B3=function(e){var r=e;return er({dw:r.fV,dx:r.bX,dy:0,dz:0,dA:r.fZ,dB:r.bI,dC:0,dD:0,dE:r.c2,dF:r.bB,dG:0,dH:0,dI:r.cW,dJ:r.cH,dK:0,dL:0})},A3=K(function(e,r,n,a,t,i,c,l){var u=o(D3,M3,h([ea(e),ea(r),ea(n),ea(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(T3,o(re,B3,v),{be:o(Ze,m,g),bN:o(Ze,w,_),bO:o(Ze,t,i),bP:o(Ze,c,l)})}else return V3}else return Ou({be:o(Ze,e,r),bN:o(Ze,n,a),bO:o(Ze,t,i),bP:o(Ze,c,l)})}),F3=A(function(e,r,n,a){return Ma(A3,e,r,n,a,De,De,De,De)}),R3={$:5},E3=R3,j3=Vo({fV:.44757,fZ:.40745}),N3=function(e){return e},lc=function(e){return e},dt=function(e){return e},Z3={$:1},G3=Z3,W3=$(function(e,r){var n=e,a=jn(r.d0),t=a.fV,i=a.fZ,c=a.c2,l=o(Ga,r.bK,r.aK),u=l;return{bB:Or(u),ez:n,bI:Ir(u),cH:0,bX:Hr(u),cW:2,fV:t,fZ:i,c2:c}}),uc=function(e){return o(W3,Iu(!0),{aK:e.aK,bK:e.bK,d0:na(e.d0)})},vc=function(e){var r=e;return r},H3=function(e){e:for(;;){if(Cr(e.dl,Xe)&&Cr(e.dm,Xe))return De;if(o(Vl,xe(e.dl),xe(e.dm))){var r={aK:e.aK,dl:e.dm,dm:e.dl,ej:Ca(e.ej)};e=r;continue e}else{var n=U(vc(e.dm)/mr),a=U(vc(e.dl)/mr),t=Oe(e.ej),i=t.fV,c=t.fZ,l=t.c2,u=o(Ga,pu(1),e.aK),v=u;return{bB:a*Or(v),ez:!1,bI:a*Ir(v),cH:n/a,bX:a*Hr(v),cW:3,fV:i,fZ:c,c2:l}}}},I3=function(e){return H3({aK:e.aK,dl:e.dl,dm:e.dm,ej:o(ci,ir(e.bA),ir(e.bG))})},O3=$(function(e,r){var n=k3({bA:Kn(-90),aK:k0(N3(2e3)),bG:Kn(-45),bK:dt(100)}),a=uc({aK:st,bK:lc(6e3),d0:{fV:2,fZ:3,c2:3}}),t=I3({bA:Kn(0),aK:st,bG:Kn(-45),dl:dt(20),dm:dt(10)}),i=uc({aK:j3,bK:lc(6e3),d0:{fV:-2,fZ:4,c2:3}});return o(C3,{eq:G3,eu:gl,ex:ko(e),eC:.1,b8:e.b8,eR:z3(6),fb:k(F3,i,a,n,t),bk:e.bk,fL:E3,fS:st},h([o(lp,e,r)]))}),U3=k(km,O3,C0,P,Mm);const J3={Main:{init:U3(o(D,function(e){return Be({e5:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Be({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Be({ep:d,eE:s,da:v,eL:u,e8:l,ft:c,fx:i,ea:t,ei:a})},o(M,"alt",X))},o(M,"control",X))},o(M,"down",X))},o(M,"downs",ba(Pn)))},o(M,"left",X))},o(M,"pressedKeys",ba(Pn)))},o(M,"right",X))},o(M,"shift",X))},o(M,"up",X))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Be({da:v,cb:u,fe:l,fy:c,fz:i,ei:t,fV:a,fZ:n})},o(M,"down",X))},o(M,"isDown",X))},o(M,"move",X))},o(M,"rightDown",X))},o(M,"rightUp",X))},o(M,"up",X))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Be({e_:n,fT:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Be({eH:r,eI:e})},o(M,"deltaX",se))},o(M,"deltaY",se)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},q3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(R.keyboard.downs.push(f.code),R.keyboard.pressedKeys.push(f.code),r(f)&&(R.keyboard.control=!0),n(f)&&(R.keyboard.alt=!0),a(f)&&(R.keyboard.shift=!0),t(f)&&(R.keyboard.left=!0),i(f)&&(R.keyboard.right=!0),c(f)&&(R.keyboard.up=!0),l(f)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",f=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(f)&&(R.keyboard.alt=!1),a(f)&&(R.keyboard.shift=!1),t(f)&&(R.keyboard.left=!1),i(f)&&(R.keyboard.right=!1),c(f)&&(R.keyboard.up=!1),l(f)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{R.pointer.x=-.5*R.screen.width+f.pageX,R.pointer.y=.5*R.screen.height-f.pageY,u(f)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(f)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+f.pageX,R.pointer.y=.5*R.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(f)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(f)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{R.wheel.deltaX=f.deltaX,R.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(R)}),window.addEventListener("focus",f=>{s(R)}),window.addEventListener("visibilitychange",f=>{s(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-R.clock;b<.009||(R.dt=b,R.clock=g,e.ports.tick.send(R),d(R)),window.requestAnimationFrame(m)}},Y3=()=>{mt("pointerdown"),mt("wheel"),mt("keydown")},mt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},X3=J3.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});Y3();q3(X3);
